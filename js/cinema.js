/* ============================================================
   js/cinema.js — アニメーション（CINEMA）の再生エンジンと共通の絵の部品
   論文ごとの絵と台本は papers/NN.js の LP.cinema(...) にある。
   ============================================================ */

/* ============================================================
   CinemaKit — イラスト型アニメの共通部品（方式④v2）
   各論文は CINEMA[id] = { vb?, dwell?, svg, build(K) } を持つ：
     vb   : viewBox（省略時 "0 0 720 430"）
     svg  : 静的な絵（細胞・分子などをidつきで配置。defs/gradientのidは論文番号で名前空間化）
     build(K): K のヘルパーで scenes 配列を返す。各 scene = {color,cap,run()}
   K：$(id)取得 / cE生成 / T(遅延) / raf / show・hide(フェード) /
      pulse・unpulse / morph・attr / flow(粒子) / strike(阻害弾) /
      markX(⊣) / grow(拡大) / draw(線を描く)
   操作：再生／一時停止・前の場面・コマ送り・最初に戻す・場面チップ・進行バー・大きく表示。
   K.T と粒子などの時間はすべてエンジン側のタイマーを通るので、一時停止と速度変更が効く。
   ============================================================ */
const SVGNS="http://www.w3.org/2000/svg";
function cE(t,a,parent){const e=document.createElementNS(SVGNS,t);for(const k in a)e.setAttribute(k,a[k]);if(parent)parent.appendChild(e);return e;}

/* 再生設定：表示設定パネル（app.js）が書き換える。
   speed    ：時間の倍率（1=通常、1.6=遅め）
   autoplay ：false なら詳細を開いても自動再生しない（OS の「視差効果を減らす」が有効な時も同様） */
const CINEMA_PREFS={speed:1, autoplay:true};
const REDUCED_MOTION=(typeof window!=="undefined"&&window.matchMedia)?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:false};
function cinemaAutoplayAllowed(){ return CINEMA_PREFS.autoplay && !REDUCED_MOTION.matches; }

function mountCinema(mount, def){
  mount.classList.add("cinema"); mount.innerHTML="";
  const vb=def.vb||"0 0 720 430";
  const el=(cls,tag)=>{const e=document.createElement(tag||"div"); if(cls)e.className=cls; return e;};
  const stage=el("cstage");
  const slabel=el("slabel"); stage.appendChild(slabel);
  const svg=cE("svg",{viewBox:vb,role:"img","aria-label":"病態の流れのアニメーション"}); stage.appendChild(svg);
  const cap=el("ccap"); cap.setAttribute("aria-live","polite");
  const ctl=el("cctl");
  const mkBtn=(txt,label,cls)=>{const b=el(cls||"","button"); b.type="button"; b.textContent=txt; b.title=label; b.setAttribute("aria-label",label); return b;};
  const prevBtn=mkBtn("◀ 前","前の場面へ戻る");
  const playBtn=mkBtn("▶ 再生","再生","cprimary");
  const nextBtn=mkBtn("次 ▶","次の場面へ（コマ送り）");
  const resetBtn=mkBtn("最初から","最初に戻す");
  const fullBtn=mkBtn("拡大","大きく表示","cfullbtn");
  const track=el("ctrack"); const fill=el("cfill"); track.appendChild(fill);
  track.title="クリックした位置の場面へ移動";
  ctl.append(prevBtn,playBtn,nextBtn,resetBtn,track,fullBtn);
  const chips=el("cchips");
  mount.append(stage,cap,ctl,chips);

  /* ---- 一時停止できるタイマー ----
     K.T の遅延・粒子の寿命などはすべてここを通す。一時停止中は残り時間を保持して止める。
     早送り（前の場面へ戻る／場面を飛ばす）中は仮想時計のキューに積み、即座に順番どおり実行する。 */
  const SP=()=>CINEMA_PREFS.speed||1;
  let timers=[], rafs=new Set(), frozen=false, fast=null;
  function later(fn,ms){
    if(fast){ fast.q.push({t:fast.now+ms,fn,seq:fast.seq++}); return null; }
    if(timers.length>300) timers=timers.filter(t=>!t.done);
    const t={fn,done:false,left:ms,due:performance.now()+ms,id:null};
    const fire=()=>{ t.done=true; fn(); };
    t.fire=fire;
    if(!frozen) t.id=setTimeout(fire,ms);
    timers.push(t); return t;
  }
  function freeze(){
    if(frozen) return; frozen=true;
    const now=performance.now();
    timers.forEach(t=>{ if(!t.done&&t.id!=null){ clearTimeout(t.id); t.id=null; t.left=Math.max(0,t.due-now); } });
    try{ svg.pauseAnimations(); }catch(e){}
    mount.classList.add("paused");
  }
  function thaw(){
    if(!frozen) return; frozen=false;
    const now=performance.now();
    timers.forEach(t=>{ if(!t.done&&t.id==null){ t.due=now+t.left; t.id=setTimeout(t.fire,t.left); } });
    try{ svg.unpauseAnimations(); }catch(e){}
    mount.classList.remove("paused");
  }
  function clr(){ timers.forEach(t=>clearTimeout(t.id)); timers=[]; rafs.forEach(cancelAnimationFrame); rafs.clear(); }
  function raf(fn){
    if(fast){ fn(performance.now()+1e7); return 0; }   // 早送り中は最終状態まで一気に進める
    const id=requestAnimationFrame(function step(ts){
      rafs.delete(id2);
      if(frozen){ id2=requestAnimationFrame(step); rafs.add(id2); return; }
      fn(ts);
    });
    let id2=id; rafs.add(id); return id;
  }
  const fluxLayer=()=>svg.querySelector('[data-layer="flux"]');

  const K={
    $:id=>svg.querySelector('#'+id),
    cE:(t,a)=>cE(t,a),
    add:(t,a)=>cE(t,a,svg),
    move(id,x0,y0,x1,y1,dur){const e=svg.querySelector('#'+id);if(!e)return;const a=cE("animateTransform",{attributeName:"transform",type:"translate",from:x0+" "+y0,to:x1+" "+y1,dur:((dur||1.2)*SP())+"s",fill:"freeze"},e);a.beginElement();},
    T:(fn,ms)=>later(fn,(ms||0)*SP()),
    raf:fn=>raf(fn),
    show(ids){ids.forEach(i=>{const e=svg.querySelector('#'+i);if(e)e.classList.add("on");});},
    hide(ids){ids.forEach(i=>{const e=svg.querySelector('#'+i);if(e)e.classList.remove("on");});},
    pulse(id){const e=svg.querySelector('#'+id);if(e)(e.querySelector('.box')||e).classList.add("pulse");},
    unpulse(id){const e=svg.querySelector('#'+id);if(e)(e.querySelector('.box')||e).classList.remove("pulse");},
    morph(id,d){const e=svg.querySelector('#'+id);if(e)e.setAttribute("d",d);},
    attr(id,k,v){const e=svg.querySelector('#'+id);if(e)e.setAttribute(k,v);},
    text(id,s){const e=svg.querySelector('#'+id);if(e)e.textContent=s;},
    flow(x0,y0,x1,y1,color,o){o=o||{};const fl=fluxLayer(),n=o.n||4,dur=(o.dur||1.1)*SP(),gap=(o.gap||0.25)*SP(),loop=o.loop||1,r=o.r||3.4;
      for(let L=0;L<loop;L++)for(let i=0;i<n;i++){later(()=>{
        const c=cE("circle",{r:r,fill:color},fl);
        const mk=(at,vv)=>cE("animate",{attributeName:at,values:vv,dur:dur+"s",fill:"freeze"},c);
        mk("cx",x0+";"+x1).beginElement();mk("cy",y0+";"+y1).beginElement();mk("opacity","0.95;0.95;0").beginElement();
        later(()=>c.remove(),(dur+0.3)*1000);
      },(L*n+i)*gap*1000);}
    },
    strike(x0,y0,x1,y1,o){o=o||{};const fl=fluxLayer(),dur=(o.dur||0.7)*SP(),r=o.r||5.5,color=o.color||"var(--H)";
      const c=cE("circle",{r:r,fill:color},fl);
      const mk=(at,vv)=>cE("animate",{attributeName:at,values:vv,dur:dur+"s",fill:"freeze"},c);
      mk("cx",x0+";"+x1).beginElement();mk("cy",y0+";"+y1).beginElement();
      later(()=>c.remove(),(dur+0.05)*1000);
    },
    markX(x,y,color){const fl=fluxLayer();const t=cE("text",{x:x,y:y+5,"text-anchor":"middle","font-size":"17","font-weight":"700",fill:color||"var(--H)"},fl);t.textContent="⊣";
      cE("animate",{attributeName:"opacity",values:"0;1",dur:(0.3*SP())+"s",fill:"freeze"},t).beginElement();},
    grow(id,to,dur,from){const e=svg.querySelector('#'+id),c=(e&&(e.querySelector('.box')||e));if(!c)return;const f=(from!=null?from:+(c.getAttribute("r")||3)),t0=performance.now(),D=dur*SP();
      const st=now=>{const q=Math.min(1,(now-t0)/D);c.setAttribute("r",(f+(to-f)*q).toFixed(1));if(q<1)K.raf(st);};K.raf(st);},
    draw(parentId,paths,o){o=o||{};const dur=(o.dur||1.3)*SP(),gap=(o.gap||0.4)*SP(),w=o.w||2.6,color=o.color||"var(--B)",len=o.len||180;
      const g=svg.querySelector('#'+parentId); if(!g)return; g.setAttribute("opacity","1");
      paths.forEach((d,i)=>later(()=>{const p=cE("path",{d:d,fill:"none",stroke:color,"stroke-width":w,"stroke-dasharray":len,"stroke-dashoffset":len},g);
        cE("animate",{attributeName:"stroke-dashoffset",values:len+";0",dur:dur+"s",fill:"freeze"},p).beginElement();
      },i*gap*1000));},
  };

  const scenes=def.build(K)||[];
  const N=scenes.length;
  const DEF=def.dwell||3000;
  const durs=scenes.map(s=>s.t||DEF);
  const offs=[]; let _acc=0; durs.forEach(d=>{offs.push(_acc);_acc+=d;});
  const TOTAL=Math.max(1,_acc);
  function colC(c){return /^[A-H]$/.test(c)?("var(--"+c+")"):(c||"var(--accent)");}

  /* ---- 場面の進行 ----
     playing=true  ：場面の長さが過ぎたら次の場面へ自動で進む
     playing=false ：今の場面で止まる（一時停止中、またはコマ送り中） */
  let cur=-1, playing=false, ended=false, advT=null, sceneLen=0, progRaf=0;
  const chipEls=scenes.map((s,i)=>{const c=el("cchip","button");c.type="button";c.textContent="S"+(i+1);c.title=s.label||s.cap||"";c.setAttribute("aria-label","場面"+(i+1)+"へ");c.onclick=()=>go(i,playing);chips.appendChild(c);return c;});
  function setChip(idx){chipEls.forEach((c,i)=>c.classList.toggle("on",i===idx));}
  function caption(i){
    slabel.textContent="SCENE "+(i+1)+" / "+N;
    cap.textContent=scenes[i].cap||""; cap.style.borderColor=colC(scenes[i].color); setChip(i);
  }
  function rebuild(){
    clr(); frozen=false; mount.classList.remove("paused");
    svg.innerHTML=def.svg+'<g data-layer="flux"></g>';
    try{ svg.unpauseAnimations(); svg.setCurrentTime(0); }catch(e){}
  }
  function reset(){
    rebuild(); cur=-1; playing=false; ended=false; advT=null;
    slabel.textContent=N?("SCENE 1 / "+N):"";
    cap.textContent=cinemaAutoplayAllowed()
      ? "▶ 再生を押すと、絵が字幕に沿って動きます。"
      : "「▶ 再生」で動かすか、「次 ▶」で1場面ずつ進めます（自動再生はオフ）。";
    cap.style.borderColor="var(--accent)";
    setChip(-1); sync();
  }
  function runScene(i,auto){
    cur=i; ended=false; caption(i);
    try{ scenes[i].run&&scenes[i].run(); }catch(e){ console.error(e); }
    sceneLen=durs[i]*SP();
    advT = auto ? later(()=>{ advT=null; if(i+1<N) runScene(i+1,true); else finish(); }, sceneLen) : null;
    sync();
  }
  function finish(){ playing=false; ended=true; advT=null; sync(); }
  // 場面 i の直前までを早送りで再現してから、場面 i を通常どおり再生する
  function go(i,keepPlaying){
    if(!N) return;
    i=Math.max(0,Math.min(N-1,i));
    rebuild();
    svg.classList.add("instant");
    fast={q:[],now:0,seq:0};
    for(let k=0;k<i;k++){ const s=scenes[k]; fast.q.push({t:offs[k],seq:fast.seq++,fn:()=>{ try{s.run&&s.run();}catch(e){console.error(e);} }}); }
    let guard=0; const pending=[];
    while(fast.q.length&&guard++<20000){
      fast.q.sort((a,b)=>a.t-b.t||a.seq-b.seq);
      const it=fast.q.shift();
      if(it.t>=offs[i]){ pending.push(it); continue; }
      fast.now=it.t; it.fn();
    }
    fast=null;
    try{ svg.setCurrentTime(svg.getCurrentTime()+600); }catch(e){}
    // 場面 i の開始時点でまだ途中だった予定は、そこからの残り時間で実時間に戻す
    pending.forEach(it=>later(it.fn,(it.t-offs[i])*SP()));
    requestAnimationFrame(()=>requestAnimationFrame(()=>svg.classList.remove("instant")));
    playing=!!keepPlaying;
    runScene(i,playing);
  }
  function play(){
    if(!N) return;
    if(playing) return;
    if(cur<0||ended){ reset(); playing=true; runScene(0,true); return; }
    playing=true;
    if(frozen){ thaw(); if(!advT) advT=later(()=>{ advT=null; if(cur+1<N) runScene(cur+1,true); else finish(); },400); sync(); return; }
    // コマ送りで止まっていた場面から続きを再生
    if(cur+1<N) runScene(cur+1,true); else { reset(); playing=true; runScene(0,true); }
  }
  function pause(){ if(cur<0||ended) return; playing=false; freeze(); sync(); }
  function sync(){
    playBtn.textContent = playing ? "一時停止" : (cur<0 ? "▶ 再生" : (ended||(cur>=N-1&&!frozen)) ? "▶ もう一度" : "▶ 続き");
    playBtn.setAttribute("aria-label",playing?"一時停止":"再生");
    prevBtn.disabled = cur<=0;
    nextBtn.disabled = cur>=N-1;
    cancelAnimationFrame(progRaf);
    const upd=()=>{
      let el=0;
      if(cur>=0){
        if(advT&&!advT.done) el=sceneLen-(frozen?advT.left:Math.max(0,advT.due-performance.now()));
        else el=sceneLen;
      }
      const q=cur<0?0:Math.min(1,(offs[cur]*SP()+el)/(TOTAL*SP()));
      fill.style.width=(q*100)+"%";
      if(playing&&!frozen) progRaf=requestAnimationFrame(upd);
    };
    upd();
  }

  playBtn.onclick=()=>{ playing?pause():play(); };
  prevBtn.onclick=()=>go(cur<0?0:cur-1,playing);
  nextBtn.onclick=()=>go(cur<0?0:cur+1,playing);
  resetBtn.onclick=reset;
  track.onclick=e=>{ const r=track.getBoundingClientRect(); const t=(e.clientX-r.left)/r.width*TOTAL; let i=0; while(i+1<N&&offs[i+1]<=t) i++; go(i,playing); };
  // 大きく表示（画面いっぱい）
  const setFull=on=>{
    mount.classList.toggle("cfull",on);
    document.documentElement.classList.toggle("noscroll",on);
    fullBtn.textContent=on?"元に戻す":"拡大"; fullBtn.title=on?"元の大きさに戻す":"大きく表示"; fullBtn.setAttribute("aria-label",fullBtn.title);
  };
  fullBtn.onclick=()=>setFull(!mount.classList.contains("cfull"));
  mount.addEventListener("keydown",e=>{ if(e.key==="Escape"&&mount.classList.contains("cfull")){ setFull(false); fullBtn.focus(); } });
  reset();
  const api={play,pause,reset,jump:i=>go(i,false),next:()=>nextBtn.onclick(),prev:()=>prevBtn.onclick(),
    exitFull:()=>setFull(false),get state(){return {cur,playing,ended,frozen,N};}};
  mount._cinema=api;
  return api;
}

/* ===== 共通グリフ（絵の部品。文字列を返す）— スケール統一・局在表現対応 ===== */
const GLYPH={
  QUIET:"M0,-12 L26,-34 L9,-6 L40,-3 L11,6 L24,32 L1,10 L-22,34 L-6,6 L-38,5 L-8,-5 L-24,-32 Z",
  SPINDLE:"M-40,-8 C-14,-15 16,-15 42,-7 C52,-3 52,3 42,7 C16,15 -14,15 -40,8 C-50,3 -50,-3 -40,-8 Z",
  bg:(c)=>`<rect x="0" y="0" width="720" height="430" fill="${c||'#eef3f6'}"/>`,
  lip:(s)=>`<radialGradient id="lip${s}" cx="0.35" cy="0.3" r="0.75"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#d9a441"/></radialGradient>`,
  arrow:(s,col)=>`<marker id="ar${s}" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="${col||'var(--ink-soft)'}"/></marker>`,
  title:(t)=>`<text x="360" y="22" text-anchor="middle" font-size="11.5" fill="var(--ink-soft)">${t}</text>`,
  defsCommon:`<radialGradient id="hepg" cx="0.4" cy="0.32" r="0.85"><stop offset="0" stop-color="#f6e7c8"/><stop offset="1" stop-color="#dcc18c"/></radialGradient><radialGradient id="pillg" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stop-color="#d98a8a"/><stop offset="1" stop-color="#a23b3b"/></radialGradient>`,
  // 肝細胞ブロブ（内部に脂肪滴レイヤidつき）
  hep:(id,x,y,sc,label)=>{sc=sc||1;return `<g id="${id}"><path transform="translate(${x},${y}) scale(${sc})" d="M0,30 C8,8 60,2 95,12 C140,4 175,22 168,60 C188,88 175,128 130,135 C85,148 18,142 6,108 C-12,84 -8,50 0,30 Z" fill="url(#hepg)" stroke="#c2a268" stroke-width="2"/><ellipse cx="${x+30*sc}" cy="${y+55*sc}" rx="${13*sc}" ry="${11*sc}" fill="#b79a64"/>${label?`<text x="${x+80*sc}" y="${y+12}" font-size="10.5" fill="#9c7b3a">${label}</text>`:''}<g id="${id}Drops"></g></g>`;},
  // 六角形肝細胞（MPS画像風）
  hexHep:(id,x,y,label)=>`<g id="${id}"><polygon points="${x},${y-46} ${x+40},${y-23} ${x+40},${y+23} ${x},${y+46} ${x-40},${y+23} ${x-40},${y-23}" fill="url(#hepg)" stroke="#c2a268" stroke-width="2"/><ellipse cx="${x-12}" cy="${y-4}" rx="13" ry="11" fill="#b79a64"/>${label?`<text x="${x}" y="${y+62}" text-anchor="middle" font-size="10" fill="#9c7b3a">${label}</text>`:''}<g id="${id}Drops"></g></g>`,
  // 脂肪細胞（大きな脂肪滴＋辺縁核）
  adipo:(x,y,r)=>{r=r||30;return `<circle cx="${x}" cy="${y}" r="${r}" fill="#f3e08e" stroke="#caa53a" stroke-width="1.8"/><circle cx="${x+r*0.55}" cy="${y-r*0.55}" r="6" fill="#b88a2a"/>`;},
  stellate:(id,x,y,label)=>`<g id="${id}" transform="translate(${x},${y})"><path id="${id}Shape" d="${GLYPH.QUIET}" fill="#d6a08e" stroke="var(--B)" stroke-width="1.6"/><circle cx="0" cy="0" r="7" fill="#7a3a2c"/><text id="${id}Cap" x="0" y="52" text-anchor="middle" font-size="10" fill="var(--ink-soft)">${label||'肝星細胞'}</text></g>`,
  // マクロファージ（スケール統一・色指定可）
  mac:(id,x,y,label,fill)=>`<g id="${id}" transform="translate(${x},${y})"><path id="${id}Body" d="M0,-22 C18,-24 29,-9 24,7 C33,18 16,29 0,24 C-18,31 -31,16 -24,2 C-33,-13 -16,-26 0,-22 Z" fill="${fill||'#5d6470'}" stroke="#828a96" stroke-width="1.4"/><circle cx="-3" cy="0" r="6" fill="#3a3f48"/>${label?`<text x="0" y="42" text-anchor="middle" font-size="10" fill="var(--ink-soft)">${label}</text>`:''}</g>`,
  monocyte:(id,x,y,label)=>`<g id="${id}" transform="translate(${x},${y})"><circle r="16" fill="#7d97b8" stroke="#5b7090" stroke-width="1.4"/><path d="M-6,-4 a7,7 0 1,0 8,2" fill="none" stroke="#34465c" stroke-width="2"/>${label?`<text x="0" y="30" text-anchor="middle" font-size="9.5" fill="var(--ink-soft)">${label}</text>`:''}</g>`,
  // 受容体（膜上に立つ。lipid A図のTLR4のイメージ）
  receptor:(id,x,y,label,col)=>{col=col||"var(--C)";return `<g id="${id}"><path d="M${x-6},${y+11} L${x-6},${y-1} M${x+6},${y+11} L${x+6},${y-1} M${x-6},${y-1} L${x-11},${y-10} M${x-6},${y-1} L${x-1},${y-10} M${x+6},${y-1} L${x+1},${y-10} M${x+6},${y-1} L${x+11},${y-10}" stroke="${col}" stroke-width="2.4" fill="none"/>${label?`<text x="${x}" y="${y+24}" text-anchor="middle" font-size="9" font-weight="600" fill="${col}">${label}</text>`:''}</g>`;},
  nucleus:(id,cx,cy,rx,ry,label)=>`<g id="${id}"><ellipse cx="${cx}" cy="${cy}" rx="${rx||34}" ry="${ry||26}" fill="#d5cae8" stroke="#8a78b0" stroke-width="1.6"/>${label?`<text x="${cx}" y="${cy- (ry||26)-5}" text-anchor="middle" font-size="9.5" fill="#6a5a92">${label}</text>`:''}</g>`,
  mol:(id,x,y,label,col,fade)=>`<g id="${id}"${fade?' class="fade"':''}><circle class="box" cx="${x}" cy="${y}" r="7" fill="${col||'#cfe0ee'}" stroke="#fff" stroke-width="1"/>${label?`<text x="${x}" y="${y-11}" text-anchor="middle" font-size="9" fill="${col||'var(--ink-soft)'}">${label}</text>`:''}</g>`,
  pill:(id,x,y,label,w)=>{w=w||92;return `<g id="${id}" class="fade" transform="translate(${x},${y})"><rect x="${-w/2}" y="-16" width="${w}" height="32" rx="16" fill="url(#pillg)" stroke="#7e2b2b" stroke-width="1.5"/><rect x="${-w/2}" y="-16" width="${w/2}" height="32" rx="16" fill="#e8b3b3" opacity="0.6"/><text x="0" y="5" text-anchor="middle" font-size="10.5" font-weight="600" fill="#fff">${label}</text></g>`;},
  badge:(id,x,y,l1,l2,col)=>`<g id="${id}" class="fade" transform="translate(${x},${y})"><circle r="42" fill="#fff" stroke="${col||'var(--B)'}" stroke-width="2.4"/><text x="0" y="-3" text-anchor="middle" font-size="12.5" fill="${col||'var(--B)'}">${l1}</text><text x="0" y="16" text-anchor="middle" font-size="12.5" fill="${col||'var(--B)'}">${l2}</text></g>`,
  tag:(id,x,y,text,col,w,fade)=>{w=w||72;return `<g id="${id}"${fade?' class="fade"':''}><rect class="box" x="${x-w/2}" y="${y-13}" width="${w}" height="26" rx="13" fill="#fff" stroke="${col||'var(--accent)'}" stroke-width="1.6"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="10.5" font-weight="600" fill="${col||'var(--ink)'}">${text}</text></g>`;},
  layer:(id)=>`<g id="${id}" opacity="0"></g>`,
  // サイトカイン・ケモカイン（8スポーク光芒 — 分泌性シグナル分子）
  cytokine:(id,x,y,label,col,fade)=>`<g id="${id}"${fade?' class="fade"':''} transform="translate(${x},${y})"><circle r="7" fill="${col||'var(--C)'}" opacity="0.9"/><line x1="0" y1="-11" x2="0" y2="-17" stroke="${col||'var(--C)'}" stroke-width="1.8" stroke-linecap="round"/><line x1="8" y1="-8" x2="12" y2="-12" stroke="${col||'var(--C)'}" stroke-width="1.8" stroke-linecap="round"/><line x1="11" y1="0" x2="17" y2="0" stroke="${col||'var(--C)'}" stroke-width="1.8" stroke-linecap="round"/><line x1="8" y1="8" x2="12" y2="12" stroke="${col||'var(--C)'}" stroke-width="1.8" stroke-linecap="round"/><line x1="0" y1="11" x2="0" y2="17" stroke="${col||'var(--C)'}" stroke-width="1.8" stroke-linecap="round"/><line x1="-8" y1="8" x2="-12" y2="12" stroke="${col||'var(--C)'}" stroke-width="1.8" stroke-linecap="round"/><line x1="-11" y1="0" x2="-17" y2="0" stroke="${col||'var(--C)'}" stroke-width="1.8" stroke-linecap="round"/><line x1="-8" y1="-8" x2="-12" y2="-12" stroke="${col||'var(--C)'}" stroke-width="1.8" stroke-linecap="round"/>${label?`<text x="0" y="-24" text-anchor="middle" font-size="9" fill="${col||'var(--ink-soft)'}" font-weight="600">${label}</text>`:''}</g>`,
  // 代謝物・小分子（六角形 — 化学構造のモチーフ）
  metab:(id,x,y,label,col,fade)=>`<g id="${id}"${fade?' class="fade"':''} transform="translate(${x},${y})"><polygon points="0,-11 9.5,-5.5 9.5,5.5 0,11 -9.5,5.5 -9.5,-5.5" fill="${col||'var(--D)'}" stroke="#fff" stroke-width="0.8" opacity="0.9"/>${label?`<text x="0" y="-16" text-anchor="middle" font-size="9" fill="${col||'var(--ink-soft)'}" font-weight="600">${label}</text>`:''}</g>`,
  // 転写因子・核内因子（菱形＋DNA結合を示す横棒）
  tf:(id,x,y,label,col,fade)=>`<g id="${id}"${fade?' class="fade"':''} transform="translate(${x},${y})"><polygon points="0,-13 11,0 0,13 -11,0" fill="${col||'var(--B)'}" stroke="#fff" stroke-width="0.8" opacity="0.85"/><line x1="-15" y1="0" x2="-11" y2="0" stroke="${col||'var(--B)'}" stroke-width="2.2" stroke-linecap="round"/><line x1="11" y1="0" x2="15" y2="0" stroke="${col||'var(--B)'}" stroke-width="2.2" stroke-linecap="round"/>${label?`<text x="0" y="-19" text-anchor="middle" font-size="9" fill="${col||'var(--ink-soft)'}" font-weight="600">${label}</text>`:''}</g>`,
  // 遺伝子・mRNA（二本鎖らせん状）
  gene:(id,x,y,label,col,fade)=>`<g id="${id}"${fade?' class="fade"':''} transform="translate(${x},${y})"><line x1="-9" y1="-8" x2="-9" y2="8" stroke="${col||'#5a8a5a'}" stroke-width="1.6"/><line x1="9" y1="-8" x2="9" y2="8" stroke="${col||'#5a8a5a'}" stroke-width="1.6"/><path d="M-9,-8 Q0,-12 9,-8 M-9,0 Q0,-4 9,0 M-9,8 Q0,4 9,8" fill="none" stroke="${col||'#5a8a5a'}" stroke-width="1.8" stroke-linecap="round"/>${label?`<text x="0" y="-18" text-anchor="middle" font-size="9" fill="${col||'var(--ink-soft)'}" font-weight="600">${label}</text>`:''}</g>`,
  collagenAt:(cx,cy)=>[`M${cx-42},${cy} C${cx-14},${cy-15} ${cx+14},${cy-10} ${cx+46},${cy-12}`,`M${cx-44},${cy+18} C${cx-6},${cy+32} ${cx+16},${cy+22} ${cx+49},${cy+26}`,`M${cx-39},${cy+35} C${cx-11},${cy+22} ${cx+13},${cy+40} ${cx+49},${cy+34}`],
};

function addDrops(K,layerId,pos,grad,delay){grad=grad||"lip01";const g=K.$(layerId);if(!g)return;pos.forEach((p,i)=>K.T(()=>{
  const c=K.cE("circle",{cx:p[0],cy:p[1],r:1,fill:`url(#${grad})`,stroke:"#b8862f","stroke-width":"0.7"});g.appendChild(c);
  const t0=performance.now(),target=5+Math.random()*5,dur=1300;
  const st=now=>{const q=Math.min(1,(now-t0)/dur);c.setAttribute("r",(1+(target-1)*q).toFixed(1));if(q<1)K.raf(st);};K.raf(st);
},(delay||0)+i*150));}
function shrinkChildren(K,id){const g=K.$(id);if(!g)return;[...g.children].forEach((c,i)=>K.T(()=>{
  const from=+(c.getAttribute("r")||0),t0=performance.now(),dur=1200;
  const st=now=>{const q=Math.min(1,(now-t0)/dur);c.setAttribute("r",(from*(1-0.85*q)).toFixed(1));if(q<1)K.raf(st);};K.raf(st);
},i*60));}
function radiate(K,cx,cy,color,n){for(let i=0;i<(n||6);i++){const ang=Math.PI*2*i/(n||6);K.flow(cx,cy,cx+Math.cos(ang)*34,cy+Math.sin(ang)*34,color,{n:1,dur:0.9,loop:1});}}
