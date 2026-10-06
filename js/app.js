/* ============================================================
   js/app.js — 画面の描画とUI（論文一覧・用語・研究ボード・統計 ほか）
   データは js/core.js の PAPERS / paperIcons / paperMethods / CINEMA を参照する。
   ============================================================ */

/* ===== 読み込み時の整合チェック =====
   フィールドの欠けや型違いがあっても画面全体が落ちないように補い、コンソールに警告を出す。
   追加前の検証は scripts/check.mjs（node scripts/check.mjs）で行う。 */
(function sanitizePapers(){
  PAPERS.forEach(p=>{
    const warn=m=>console.warn(`[papers/${p.id}.js] ${m}`);
    ["tags","achievements","limitations","connection","glossary"].forEach(k=>{
      if(Array.isArray(p[k])) return;
      if(p[k]!=null) warn(`${k} が配列ではありません`);
      p[k]=(p[k]==null||p[k]==="")?[]:[p[k]];
    });
    if(!THEMES[p.primary]){ warn(`primary "${p.primary}" がテーマ記号（A〜I）ではありません`); p.primary=p.tags.find(t=>THEMES[t])||"A"; }
    const bad=p.tags.filter(t=>!THEMES[t]);
    if(bad.length){ warn(`tags の ${bad.join(",")} はテーマ記号ではありません`); p.tags=p.tags.filter(t=>THEMES[t]); }
    if(!paperIcons[p.id]) warn("LP.icons（登場要素イラスト）がありません");
    if(!paperMethods[p.id]) warn("LP.methods（使用手法）がありません");
  });
})();

/* ===== 描画 ===== */
let activeThemes=new Set(), themeMode="OR", favOnly=false, query="", currentView="papers", sortMode="alpha", readFilter="", catSel=new Set(), paperSort="id", activeMethods=new Set();
const READ_LABEL={"":"未読","skim":"流し読み","deep":"精読"};
const READ_FILTER_CYCLE=["","unread","skim","deep"];
const READ_FILTER_LABEL={"":"📖 すべて","unread":"📖 未読のみ","skim":"📖 流し読みのみ","deep":"📖 精読のみ"};
const grid=document.getElementById("grid");
const glosview=document.getElementById("glosview");
const statsview=document.getElementById("statsview");
const netview=document.getElementById("netview");
const boardview=document.getElementById("boardview");
const chipsBox=document.getElementById("chips");

/* ===== ユーザーデータ（端末内保存：★・メモ） ===== */
const UD_KEY="liverPapers_userData_v1";
let userData=(()=>{ try{return JSON.parse(localStorage.getItem(UD_KEY))||{};}catch(e){return {};} })();
function saveUserData(){ try{localStorage.setItem(UD_KEY,JSON.stringify(userData));}catch(e){} }
function ud(id){ return userData[id]||(userData[id]={}); }
function isFav(id){ return !!(userData[id]&&userData[id].fav); }

/* ===== 被引用数（OpenAlex・7日キャッシュ） ===== */
const CITE_KEY="liverPapers_citeCache_v1", CITE_TTL=7*24*3600*1000;
let citeCache=(()=>{ try{return JSON.parse(localStorage.getItem(CITE_KEY))||{};}catch(e){return {};} })();
function setCiteEl(el,n){ el.textContent = (n==null?"被引用 –":"被引用 "+n); el.style.display=""; }
async function fetchCite(doi){
  const url="https://api.openalex.org/works/https://doi.org/"+doi+"?select=cited_by_count&mailto=ryoya03052045@gmail.com";
  const r=await fetch(url); if(!r.ok) throw new Error("http"); const j=await r.json();
  if(typeof j.cited_by_count!=="number") throw new Error("nofield"); return j.cited_by_count;
}
function populateCitations(root){
  root.querySelectorAll(".cited").forEach(el=>{
    const doi=el.dataset.doi; if(!doi){ el.style.display="none"; return; }
    const c=citeCache[doi];
    if(c && (Date.now()-c.ts)<CITE_TTL){ setCiteEl(el,c.n); return; }
    fetchCite(doi).then(n=>{
      citeCache[doi]={n,ts:Date.now()};
      try{localStorage.setItem(CITE_KEY,JSON.stringify(citeCache));}catch(e){}
      setCiteEl(el,n);
    }).catch(()=>{ if(c) setCiteEl(el,c.n); else el.style.display="none"; });
  });
}
// 論文ビューの並び替え
const THEME_ORDER=["A","B","C","D","E","F","G","H","I"];
function citeOf(p){ const c=p.doi&&citeCache[p.doi]; return c&&typeof c.n==="number"?c.n:-1; }
function sortPapers(arr){
  const byId=(a,b)=>Number(b.id)-Number(a.id);
  const a=arr.slice();
  switch(paperSort){
    case "year_desc": return a.sort((x,y)=>((y.year||0)-(x.year||0))||byId(x,y));
    case "year_asc":  return a.sort((x,y)=>((x.year||0)-(y.year||0))||byId(x,y));
    case "journal":   return a.sort((x,y)=>(x.journal||"").localeCompare(y.journal||"","en")||byId(x,y));
    case "theme":     return a.sort((x,y)=>(THEME_ORDER.indexOf(x.primary)-THEME_ORDER.indexOf(y.primary))||byId(x,y));
    case "cited":     return a.sort((x,y)=>(citeOf(y)-citeOf(x))||byId(x,y));
    default:          return a.sort(byId);
  }
}
// 被引用ソート用：未取得のDOIをまとめて取得してキャッシュ（取得後に再描画）
let citesEnsuring=false;
async function ensureAllCites(){
  if(citesEnsuring) return false; citesEnsuring=true;
  const missing=PAPERS.filter(p=>p.doi && !(citeCache[p.doi] && (Date.now()-citeCache[p.doi].ts)<CITE_TTL));
  if(!missing.length){ citesEnsuring=false; return false; }
  await Promise.all(missing.map(p=>fetchCite(p.doi).then(n=>{citeCache[p.doi]={n,ts:Date.now()};}).catch(()=>{})));
  try{localStorage.setItem(CITE_KEY,JSON.stringify(citeCache));}catch(e){}
  citesEnsuring=false; return true;
}

// chips
chipsBox.innerHTML='<span class="chip active" data-theme="all"><span class="dot"></span>すべて</span>'+
  Object.entries(THEMES).map(([k,v])=>`<span class="chip" data-theme="${k}"><span class="dot" style="background:${v.c}"></span>${k}·${v.name}</span>`).join("");
const filterToggle=document.getElementById("filterToggle");
const fLabel="テーマで絞り込み";
function syncChipActive(){
  [...chipsBox.children].forEach(x=>{
    const t=x.dataset.theme;
    x.classList.toggle("active", t==="all" ? activeThemes.size===0 : activeThemes.has(t));
  });
  // AND/OR トグルは2つ以上選択時のみ意味を持つ
  modetoggle.style.display = activeThemes.size>=2 ? "inline-block" : "none";
}
function setFilterLabel(){
  let txt;
  if(activeThemes.size===0) txt=fLabel;
  else if(activeThemes.size===1){ const t=[...activeThemes][0]; txt=t+"·"+(THEMES[t]?THEMES[t].name:""); }
  else txt=[...activeThemes].sort().join(themeMode==="AND"?" & ":" / ");
  filterToggle.innerHTML=txt+'<span class="fchev">▾</span>';
}
filterToggle.addEventListener("click",()=>{
  const open=chipsBox.classList.toggle("show");
  filterToggle.classList.toggle("open",open);
  filterToggle.setAttribute("aria-expanded",open?"true":"false");
  if(open){ mchipsBox.classList.remove("show"); methodToggle.classList.remove("open"); }
});
chipsBox.addEventListener("click",e=>{
  const c=e.target.closest(".chip"); if(!c)return;
  const t=c.dataset.theme;
  if(t==="all") activeThemes.clear();
  else { if(activeThemes.has(t)) activeThemes.delete(t); else activeThemes.add(t); }
  syncChipActive();
  setFilterLabel();
  render();
});

/* ===== 手法フィルター ===== */
const EXP_KEYS=["mouse","human","invitro","nano","drug","crispr"];
const ANA_KEYS=["qpcr","wb","facs","elisa","scrna","spatial","rnaseq","chipseq","proteomics","imaging","insilico"];
const mchipsBox=document.getElementById("mchips");
const methodToggle=document.getElementById("methodToggle");
function buildMChips(){
  const mkChip=(k,cat)=>{
    const col = cat==="exp" ? "var(--A)" : "var(--F)";
    const active = activeMethods.has(k) ? " active" : "";
    return `<span class="mchip${active}" data-mkey="${k}"><span class="mdot" style="background:${col}"></span>${METHOD_LABELS[k]||k}</span>`;
  };
  const sep=(label,col)=>`<span style="font-family:'DM Mono',monospace;font-size:10px;color:${col};letter-spacing:.12em;text-transform:uppercase;padding:4px 2px;align-self:center">${label}</span>`;
  mchipsBox.innerHTML =
    (activeMethods.size?`<span class="mchip active" data-mkey="all"><span class="mdot" style="background:var(--ink)"></span>すべてクリア</span>`:"") +
    sep("実験系","var(--A)") +
    EXP_KEYS.map(k=>mkChip(k,"exp")).join("") +
    sep("解析系","var(--F)") +
    ANA_KEYS.map(k=>mkChip(k,"ana")).join("");
}
buildMChips();
methodToggle.addEventListener("click",()=>{
  const open=mchipsBox.classList.toggle("show");
  methodToggle.classList.toggle("open",open);
  methodToggle.setAttribute("aria-expanded",open?"true":"false");
  if(open){ chipsBox.classList.remove("show"); filterToggle.classList.remove("open"); }
});
mchipsBox.addEventListener("click",e=>{
  const c=e.target.closest(".mchip"); if(!c)return;
  const k=c.dataset.mkey;
  if(k==="all") activeMethods.clear();
  else { if(activeMethods.has(k)) activeMethods.delete(k); else activeMethods.add(k); }
  buildMChips();
  methodToggle.innerHTML=(activeMethods.size ? [...activeMethods].map(k=>METHOD_LABELS[k]).join(" / ") : "🔬 手法で絞り込み")+'<span class="fchev">▾</span>';
  methodToggle.classList.toggle("open",true);
  mchipsBox.classList.add("show");
  render();
});
// AND/OR トグル
const modetoggle=document.getElementById("modetoggle");
modetoggle.addEventListener("click",()=>{
  themeMode = themeMode==="OR" ? "AND" : "OR";
  modetoggle.textContent=themeMode;
  modetoggle.classList.toggle("on",themeMode==="AND");
  setFilterLabel(); render();
});
// ★お気に入りのみ
const favfilter=document.getElementById("favfilter");
favfilter.addEventListener("click",()=>{
  favOnly=!favOnly;
  favfilter.classList.toggle("on",favOnly);
  render();
});
// 📖 読了ステータス絞り込み（循環）
const readfilter=document.getElementById("readfilter");
readfilter.addEventListener("click",()=>{
  const i=READ_FILTER_CYCLE.indexOf(readFilter);
  readFilter=READ_FILTER_CYCLE[(i+1)%READ_FILTER_CYCLE.length];
  readfilter.textContent=READ_FILTER_LABEL[readFilter];
  readfilter.classList.toggle("on",readFilter!=="");
  render();
});
document.getElementById("printbtn").addEventListener("click",()=>window.print());
document.getElementById("randbtn").addEventListener("click",()=>{
  const p=PAPERS[Math.floor(Math.random()*PAPERS.length)];
  jumpToPaper(p.id);
});
syncChipActive();
setFilterLabel();
document.getElementById("q").addEventListener("input",e=>{query=e.target.value.trim().toLowerCase();refresh();});

// view tabs
const viewtabs=document.getElementById("viewtabs");
const moretab=document.getElementById("moretab");
const tabmore=document.getElementById("tabmore");
moretab.addEventListener("click",()=>{
  const open=tabmore.classList.toggle("open");
  moretab.classList.toggle("open",open);
});
viewtabs.addEventListener("click",e=>{
  const t=e.target.closest(".vtab"); if(!t)return;
  currentView=t.dataset.view;
  viewtabs.querySelectorAll(".vtab").forEach(x=>x.classList.toggle("active",x===t));
  // 「その他」内のタブが選択されたら親ボタンを強調＆ドロップダウンを閉じる
  const inMore=tabmore.contains(t);
  moretab.classList.toggle("has-active",inMore);
  tabmore.classList.remove("open"); moretab.classList.remove("open");
  document.getElementById("q").placeholder = currentView==="terms"
    ? "略語・正式名・説明で用語検索…（例: TGFβ）" : "タイトル・著者・誌名・本文で検索…";
  refresh();
});

const zoneview=document.getElementById("zoneview");
const quizview=document.getElementById("quizview");
const feedview=document.getElementById("feedview");
function refresh(){
  const v=currentView;
  grid.style.display=v==="papers"?"grid":"none";
  document.getElementById("pager").style.display=v==="papers"?"":"none";
  glosview.style.display=v==="terms"?"block":"none";
  netview.style.display=v==="net"?"block":"none";
  boardview.style.display=v==="board"?"block":"none";
  zoneview.style.display=v==="zone"?"block":"none";
  quizview.style.display=v==="quiz"?"block":"none";
  feedview.style.display=v==="feed"?"block":"none";
  statsview.style.display=v==="stats"?"block":"none";
  document.getElementById("sortbar").style.display=v==="terms"?"flex":"none";
  document.getElementById("psortbar").style.display=v==="papers"?"flex":"none";
  document.getElementById("filterbar").style.display=v==="papers"?"flex":"none";
  chipsBox.style.display=v==="papers"?"flex":"none";
  // テーマ絞り込みUIは論文ビューのみ
  document.querySelector(".controls").classList.toggle("terms",v!=="papers");
  if(v==="papers") render();
  else if(v==="terms") renderGlossary();
  else if(v==="net") renderNetwork();
  else if(v==="board") renderBoard();
  else if(v==="zone") renderZonation();
  else if(v==="quiz") renderQuiz();
  else if(v==="feed") renderFeed();
  else renderStats();
}

// sort controls
const sortbar=document.getElementById("sortbar");
sortbar.addEventListener("click",e=>{
  const b=e.target.closest(".sbtn"); if(!b)return;
  sortMode=b.dataset.sort;
  [...sortbar.querySelectorAll(".sbtn")].forEach(x=>x.classList.toggle("active",x===b));
  renderGlossary();
});
const psortbar=document.getElementById("psortbar");
psortbar.addEventListener("click",e=>{
  const b=e.target.closest(".sbtn"); if(!b)return;
  paperSort=b.dataset.psort;
  [...psortbar.querySelectorAll(".sbtn")].forEach(x=>x.classList.toggle("active",x===b));
  render();
  // 被引用数順：未取得ぶんを取得し終えたら再ソート
  if(paperSort==="cited") ensureAllCites().then(changed=>{ if(changed && paperSort==="cited") render(); });
});

/* ===== 用語ツールチップ ===== */
// 全論文glossaryから term(lower)->{term,desc} の索引を作る（本文中の用語に注釈を付ける用）
const MANUAL_ALIASES={
  "rspo3 / lgr6":["R-spondin 3","R-spondin","RSPO3","LGR6"],
  "wnt / wnt":["WNT/βカテニン","WNT","Wnt"],
  "β-catenin (ctnnb1)":["βカテニン","β-catenin","CTNNB1"],
  "scara / sr-a":["SR-A","Scara"]
};
function aliasesOf(term){
  if(!term) return [];
  const out=new Set([term]);
  (term.match(/[（(]([^）)]+)[）)]/g)||[]).forEach(seg=>out.add(seg.replace(/[（()）]/g,"").trim()));
  term.replace(/[（(][^）)]*[）)]/g," ").split(/[\/,、・|]/).forEach(x=>{x=x.trim();if(x)out.add(x);});
  (MANUAL_ALIASES[term.toLowerCase()]||[]).forEach(x=>out.add(x));
  return [...out].filter(x=>x&&x.trim().length>=2);
}
// alias(lower) -> {surface, term(正式名), desc}
const TOOLTIP_TERMS=(()=>{
  const m=new Map();
  PAPERS.forEach(p=>(p.glossary||[]).forEach(g=>{
    if(!g.term) return;
    aliasesOf(g.term).forEach(a=>{ const k=a.toLowerCase(); if(k&&!m.has(k)) m.set(k,{surface:a,term:g.term,desc:g.desc||""}); });
  }));
  return m;
})();
function annotate(text){
  if(!text) return text||"";
  let s=String(text), tokens=[];
  const keys=[...TOOLTIP_TERMS.keys()].sort((a,b)=>b.length-a.length);
  for(const k of keys){
    const o=TOOLTIP_TERMS.get(k), surf=o.surface;
    const idx=s.indexOf(surf);
    if(idx>=0){
      const tk=""+tokens.length+"";
      s=s.slice(0,idx)+tk+s.slice(idx+surf.length);
      tokens.push(o);
    }
  }
  tokens.forEach((o,i)=>{
    const tip=(o.desc||o.term).replace(/"/g,"&quot;");
    s=s.replace(""+i+"",`<span class="term" data-tip="${tip}" data-t="${o.term.replace(/"/g,'&quot;')}">${o.surface}</span>`);
  });
  return s;
}
// 自動キーワード太字（高シグナルな病態・結果語のみ。タグ内は触らない）
const KEYWORDS=["線維化点火","セカンドヒット","HSC活性化","風船様変性","酸素透過膜","好気的代謝","エージェントベースモデル","クッパー細胞","肝星細胞","線維化","脂肪化","炎症","点火","好気的","オルガノイド","ABM","MASH","MASLD","NASH","steatosis","fibrosis","ballooning"];
const KWRE=new RegExp("("+KEYWORDS.slice().sort((a,b)=>b.length-a.length).map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")","g");
function emphasize(html){
  if(!html) return html||"";
  // タグ(<...>)はそのまま、テキスト断片だけキーワードを<b>で囲む
  return String(html).replace(/(<[^>]+>)|([^<]+)/g,(m,tag,txt)=>tag?tag:txt.replace(KWRE,'<b class="kw">$1</b>'));
}
function em(text){ return emphasize(annotate(text)); }
// 「この論文のキモ」：線維化点火のカギ→接続→達成 の順で1文拾う
function keyTakeaway(p){
  const s=p.struct||{};
  if(s.ignite) return s.ignite;
  if(p.connection&&p.connection[0]) return p.connection[0];
  if(p.achievements&&p.achievements[0]) return p.achievements[0];
  return "";
}
// floating tooltip (event delegation)
const tipEl=document.getElementById("tip");
document.addEventListener("mouseover",e=>{
  const t=e.target.closest(".term"); if(!t)return;
  tipEl.innerHTML=`<b>${t.dataset.t||""}</b>${t.dataset.tip||""}`;
  tipEl.classList.add("on"); positionTip(e);
});
document.addEventListener("mousemove",e=>{ if(tipEl.classList.contains("on")&&e.target.closest(".term")) positionTip(e); });
document.addEventListener("mouseout",e=>{ if(e.target.closest(".term")) tipEl.classList.remove("on"); });
function positionTip(e){
  const pad=14, w=tipEl.offsetWidth, h=tipEl.offsetHeight;
  let x=e.clientX+pad, y=e.clientY+pad;
  if(x+w>innerWidth-8) x=e.clientX-w-pad;
  if(y+h>innerHeight-8) y=e.clientY-h-pad;
  tipEl.style.left=Math.max(6,x)+"px"; tipEl.style.top=Math.max(6,y)+"px";
}
// タッチ端末：用語タップでツールチップ表示／別所タップで閉じる
function showTipAt(t,cx,cy){
  tipEl.innerHTML=`<b>${t.dataset.t||""}</b>${t.dataset.tip||""}`;
  tipEl.classList.add("on");
  positionTip({clientX:cx,clientY:Math.max(cy,tipEl.offsetHeight+20)});
}
document.addEventListener("click",e=>{
  const t=e.target.closest(".term");
  if(t){
    const r=t.getBoundingClientRect();
    if(tipEl.classList.contains("on")&&tipEl._for===t){tipEl.classList.remove("on");tipEl._for=null;}
    else{showTipAt(t,r.left+r.width/2,r.top); tipEl._for=t;}
    e.stopPropagation();
  }else if(!e.target.closest("#tip")){
    tipEl.classList.remove("on"); tipEl._for=null;
  }
},true);

function tagHTML(p){
  const prim=`<span class="tag" style="background:${THEMES[p.primary].c}">${p.primary}·${THEMES[p.primary].name}</span>`;
  const sec=(p.tags||[]).map(t=>`<span class="tag sec">${t}</span>`).join("");
  return prim+sec;
}
function paperThemes(p){ const s=new Set(p.tags||[]); s.add(p.primary); return s; }
function glossSet(p){ return new Set((p.glossary||[]).map(g=>(g.term||"").toLowerCase())); }
// 共有テーマ・共通用語から関連論文を自動算出（上位3本）
function relatedPapers(p){
  const pt=paperThemes(p), pg=glossSet(p);
  return PAPERS.filter(q=>q.id!==p.id).map(q=>{
    const qt=paperThemes(q), qg=glossSet(q);
    let st=0; pt.forEach(t=>{ if(qt.has(t)) st++; });
    let sg=0; pg.forEach(t=>{ if(qg.has(t)) sg++; });
    return {q, score:st*2+sg, st, sg};
  }).filter(o=>o.score>0).sort((a,b)=>b.score-a.score).slice(0,3);
}
function matches(p){
  if(favOnly && !isFav(p.id)) return false;
  if(readFilter){
    const rs=ud(p.id).read||"";
    if(readFilter==="unread" && rs!=="") return false;
    if((readFilter==="skim"||readFilter==="deep") && rs!==readFilter) return false;
  }
  if(activeThemes.size){
    const pt=paperThemes(p);
    const ok = themeMode==="AND"
      ? [...activeThemes].every(t=>pt.has(t))
      : [...activeThemes].some(t=>pt.has(t));
    if(!ok) return false;
  }
  if(activeMethods.size){
    const pm=new Set(paperMethods[p.id]||[]);
    if(![...activeMethods].some(m=>pm.has(m))) return false;
  }
  if(!query) return true;
  const blob=[p.title,p.authors,p.journal,p.year,p.abstract,p.abstract_ja,p.background,
    (p.achievements||[]).join(" "),(p.limitations||[]).join(" "),(p.connection||[]).join(" ")].join(" ").toLowerCase();
  return blob.includes(query);
}
// 検索語ハイライト（HTMLタグを壊さないようプレーン文字列にのみ適用）
function hl(text){
  if(!query||!text) return text==null?"":String(text);
  const s=String(text);
  const i=s.toLowerCase().indexOf(query);
  if(i<0) return s;
  let out="",pos=0,idx=i;
  while(idx>=0){ out+=s.slice(pos,idx)+"<mark>"+s.slice(idx,idx+query.length)+"</mark>"; pos=idx+query.length; idx=s.toLowerCase().indexOf(query,pos); }
  return out+s.slice(pos);
}
const PAGE_SIZE=20; let paperPage=1, lastSig=null;
const pagerEl=document.getElementById("pager");
function renderPager(total){
  const pages=Math.ceil(total/PAGE_SIZE);
  if(pages<=1){ pagerEl.innerHTML=""; return; }
  let btns="";
  for(let p=1;p<=pages;p++) btns+=`<button class="pgnum${p===paperPage?" on":""}" data-p="${p}">${p}</button>`;
  pagerEl.innerHTML=`<button class="pgnav" data-p="${paperPage-1}" ${paperPage<=1?"disabled":""}>← 前</button>${btns}<button class="pgnav" data-p="${paperPage+1}" ${paperPage>=pages?"disabled":""}>次 →</button>`;
  pagerEl.querySelectorAll("button[data-p]").forEach(b=>b.addEventListener("click",()=>{
    const np=+b.dataset.p; if(np<1||np>pages)return; paperPage=np; render();
    grid.scrollIntoView({behavior:"smooth",block:"start"});
  }));
}

/* 研究モデル種別（in vivo / in vitro / in silico / ヒト・臨床）を判定してバッジ化 */
function cineModels(p){
  const m=[(p.struct&&p.struct.model),p.approach].filter(Boolean).join(" ").toLowerCase();
  const out=[];
  if(/in vivo|マウス|mouse|ミニブタ|minipig|\brat\b|げっ歯|個体/.test(m)) out.push({ic:"mouse",label:"in vivo（動物個体）",cls:"mv-vivo"});
  if(/in vitro|\bmps\b|liver-on|on-chip|オルガノイド|organoid|共培養|培養系|初代|primary|spheroid|球状体|pcls|ex vivo|スライス|thp-?1|細胞株|microfluid|灌流/.test(m)) out.push({ic:"chip",label:"in vitro（培養系）",cls:"mv-vitro"});
  if(/in silico|計算|\babm\b|kappa|シミュレ|simulation|数理モデル|規則ベース|rule-based/.test(m)) out.push({ic:"silico",label:"in silico（計算モデル）",cls:"mv-silico"});
  if(/ヒト|human|clinical|臨床|\brct\b|第[12一二]相|phase\s?[12]|patient|コホート|cohort/.test(m)) out.push({ic:"human",label:"ヒト・臨床",cls:"mv-human"});
  if(!out.length) out.push({ic:"dish",label:((p.struct&&p.struct.model)||"その他"),cls:"mv-other"});
  return out;
}
function modelBadges(p){
  return `<div class="model-badges" title="この研究のアプローチ">${cineModels(p).map(x=>`<span class="mbadge ${x.cls}">${ICONS[x.ic]||""}<span>${x.label}</span></span>`).join("")}</div>`;
}

/* 詳細を開いた時にアニメを生成＆自動再生（1回だけ） */
function initCinema(card){
  const mount=card.querySelector(".cinema-mount");
  if(!mount||mount.dataset.init)return;
  const def=CINEMA[mount.dataset.id]; if(!def)return;
  mount.dataset.init="1";
  const ctrl=mountCinema(mount,def);
  setTimeout(()=>ctrl.play(),350);
}

function render(){
  const full=sortPapers(PAPERS.filter(matches));
  document.getElementById("total").textContent=PAPERS.length;
  const themeNote = activeThemes.size ? `　·　テーマ ${[...activeThemes].sort().join(activeThemes.size>1?(themeMode==="AND"?"&":"/"):"")}` : "";
  // フィルタ・並び替えが変わったら1ページ目に戻す
  const sig=query+"|"+[...activeThemes].sort().join(",")+"|"+themeMode+"|"+favOnly+"|"+readFilter+"|"+paperSort+"|"+[...activeMethods].sort().join(",");
  if(sig!==lastSig){ paperPage=1; lastSig=sig; }
  const pages=Math.max(1,Math.ceil(full.length/PAGE_SIZE));
  if(paperPage>pages) paperPage=pages;
  const start=(paperPage-1)*PAGE_SIZE;
  const list=full.slice(start,start+PAGE_SIZE);
  const rangeNote = full.length>PAGE_SIZE ? `（${start+1}–${start+list.length}件目を表示）` : "";
  const methodNote = activeMethods.size ? `　·　手法 ${[...activeMethods].map(k=>METHOD_LABELS[k]||k).join(" / ")}` : "";
  document.getElementById("countline").textContent=
    `表示 ${full.length} / ${PAPERS.length} 本`+rangeNote+themeNote+methodNote+(favOnly?"　·　★のみ":"")+(query?`　·　"${query}"`:"");
  if(!full.length){grid.innerHTML='<div class="empty">該当する論文がありません</div>';pagerEl.innerHTML="";return;}
  grid.innerHTML=list.map((p,i)=>`
    <article class="card" data-id="${p.id}" style="--c:${THEMES[p.primary].c};animation-delay:${i*60}ms">
      <div class="card-top">
        <div class="left"><span class="num">№ ${p.id}</span><button class="fav${isFav(p.id)?" on":""}" title="お気に入り" aria-label="お気に入り">${isFav(p.id)?"★":"☆"}</button><select class="readsel rs-${ud(p.id).read||"none"}" title="読了ステータス（端末内保存）"><option value=""${(ud(p.id).read||"")===""?" selected":""}>未読</option><option value="skim"${ud(p.id).read==="skim"?" selected":""}>流し読み</option><option value="deep"${ud(p.id).read==="deep"?" selected":""}>精読</option></select></div>
        <div class="tags">${tagHTML(p)}</div>
      </div>
      <h2 class="title">${hl(p.title)}</h2>
      <div class="cite"><span class="j">${hl(p.journal)}</span> ${p.vol||""} (${p.year}) · ${hl(p.authors)} · <span class="cited" data-doi="${p.doi||""}" title="OpenAlex 被引用数">被引用 …</span></div>
      <span class="approach">${hl(p.approach||"")}</span>
      <div class="row-actions">
        <button class="btn toggle"><span class="arr">▸</span> 詳細を${"開く"}</button>
        <a class="doi" href="${p.url}" target="_blank" rel="noopener">原文 · DOI: ${p.doi}</a>
      </div>
      <div class="detail"><div class="detail-inner">
        ${keyTakeaway(p)?`<div class="kimo"><span class="kimo-ic">💡</span><div><span class="kimo-lbl">この論文のキモ</span>${em(keyTakeaway(p))}</div></div>`:""}
        <div class="sec"><h4>メモ（自分用・端末内保存）</h4><div class="memo"><textarea placeholder="この論文についてのメモ…">${(ud(p.id).memo||"").replace(/</g,"&lt;")}</textarea><span class="saved">保存しました</span></div></div>
        ${(paperIcons[p.id]&&paperIcons[p.id].length)?`<div class="sec"><h4>登場要素（イラスト）</h4><div class="illus">${paperIcons[p.id].map(o=>`<figure>${ICONS[o.ic]||""}<figcaption>${o.cap}</figcaption></figure>`).join("")}</div></div>`:""}
        ${(()=>{const ms=paperMethods[p.id]||[];if(!ms.length)return"";const exp=ms.filter(k=>METHOD_CAT[k]==="exp");const ana=ms.filter(k=>METHOD_CAT[k]==="ana");const row=(keys,cat,label)=>keys.length?`<div class="mth-row"><span class="mth-label ${cat}">${label}</span><div class="mth-illus illus">${keys.map(k=>`<figure>${METHOD_ICONS[k]||""}<figcaption>${METHOD_LABELS[k]||k}</figcaption></figure>`).join("")}</div></div>`:"";return`<div class="sec"><h4>使用手法</h4>${row(exp,"exp","実験系")}${row(ana,"ana","解析系")}</div>`;})()}
        ${p.method_figure?`<div class="sec"><h4>実験系（Method図）</h4><div class="figbox">${p.method_figure}</div></div>`:""}
        ${p.figure?`<div class="sec"><h4>概念図（わかったこと）</h4><div class="figbox">${p.figure}</div></div>`:""}
        ${(typeof CINEMA!=="undefined"&&CINEMA[p.id])?`<div class="sec"><h4>アニメーション（病態の流れ）</h4>${modelBadges(p)}<div class="cinema-mount" data-id="${p.id}"></div></div>`:""}
        <div class="sec"><h4>Abstract（和訳要約）</h4><p class="abst-strong">${annotate(p.abstract_ja||p.abstract||"")}</p></div>
        <div class="sec"><h4>背景と課題</h4><p>${em(p.background)}</p></div>
        <div class="sec"><h4>達成したこと</h4><ul>${(p.achievements||[]).map(x=>`<li>${em(x)}</li>`).join("")}</ul></div>
        <div class="sec"><h4>Limitation</h4><ul>${(p.limitations||[]).map(x=>`<li>${em(x)}</li>`).join("")}</ul></div>
        <div class="sec connect"><h4>自分の研究との接続</h4><ul>${(p.connection||[]).map(x=>`<li>${em(x)}</li>`).join("")}</ul></div>
        ${(p.glossary&&p.glossary.length)?`<div class="sec"><h4>用語メモ</h4><table class="gloss"><tbody>${p.glossary.map(g=>`<tr><td><b>${g.term}</b></td><td>${g.full||""}</td><td>${g.desc||""}</td></tr>`).join("")}</tbody></table></div>`:""}
        ${(()=>{ const rel=relatedPapers(p); return rel.length?`<div class="sec"><h4>関連論文</h4><div class="related">${rel.map(o=>`<button class="relchip" data-id="${o.q.id}" style="--c:${THEMES[o.q.primary].c}" title="共有テーマ${o.st}・共通用語${o.sg}"><span class="rn">№${o.q.id}</span> ${o.q.title}</button>`).join("")}</div></div>`:""; })()}
        <div class="sec closebar"><button class="btn toggle-bottom"><span class="arr">▴</span> 詳細を閉じる</button></div>
      </div></div>
    </article>`).join("");
  grid.querySelectorAll(".card").forEach(card=>{
    const id=card.dataset.id;
    card.querySelector(".toggle").addEventListener("click",()=>{
      const open=card.classList.toggle("open");
      card.querySelector(".toggle").innerHTML=`<span class="arr">▸</span> 詳細を${open?"閉じる":"開く"}`;
      if(open) initCinema(card);
    });
    // 詳細末尾の「閉じる」→閉じてカード冒頭へ戻る
    const tb=card.querySelector(".toggle-bottom");
    if(tb) tb.addEventListener("click",()=>{
      card.classList.remove("open");
      card.querySelector(".toggle").innerHTML='<span class="arr">▸</span> 詳細を開く';
      card.scrollIntoView({behavior:"smooth",block:"start"});
    });
    // ★お気に入り
    card.querySelector(".fav").addEventListener("click",e=>{
      e.stopPropagation();
      const f=!isFav(id); ud(id).fav=f; saveUserData();
      const b=e.currentTarget; b.classList.toggle("on",f); b.textContent=f?"★":"☆";
      if(favOnly) render();
    });
    // メモ（入力のたびに保存）
    const ta=card.querySelector(".memo textarea"), saved=card.querySelector(".memo .saved");
    let tmr;
    ta.addEventListener("input",()=>{
      ud(id).memo=ta.value; saveUserData();
      saved.classList.add("show"); clearTimeout(tmr); tmr=setTimeout(()=>saved.classList.remove("show"),1200);
    });
    // 📖 読了ステータス
    const rsel=card.querySelector(".readsel");
    rsel.addEventListener("click",e=>e.stopPropagation());
    rsel.addEventListener("change",()=>{
      ud(id).read=rsel.value; saveUserData();
      rsel.className="readsel rs-"+(rsel.value||"none");
      if(readFilter) render();
    });
    // 関連論文リンク
    card.querySelectorAll(".relchip").forEach(b=>b.addEventListener("click",()=>jumpToPaper(b.dataset.id)));
  });
  populateCitations(grid);
  renderPager(PAPERS.filter(matches).length);
}
/* ===== 用語ビュー ===== */
function buildGlossaryIndex(){
  const map=new Map(); // key: term(lower) -> {term, full, desc, papers:[{id,primary}]}
  PAPERS.forEach(p=>{
    (p.glossary||[]).forEach(g=>{
      const key=(g.term||"").toLowerCase();
      if(!key)return;
      if(!map.has(key)) map.set(key,{term:g.term,full:g.full||"",desc:g.desc||"",papers:[]});
      const e=map.get(key);
      if(!e.papers.some(x=>x.id===p.id)) e.papers.push({id:p.id,primary:p.primary});
      if(!e.full&&g.full) e.full=g.full;
      if(!e.desc&&g.desc) e.desc=g.desc;
    });
  });
  // 本文で「言及」している論文も参照に加える（定義した論文だけに限定しない）
  const blobs=PAPERS.map(p=>({p,b:[p.title,p.approach,p.abstract_ja,p.abstract,p.background,(p.achievements||[]).join(" "),(p.limitations||[]).join(" "),(p.connection||[]).join(" ")].join(" ").toLowerCase()}));
  function mentions(term,blob){const t=term.toLowerCase();
    if(/^[\x00-\x7f]+$/.test(t)&&t.length<=4){try{return new RegExp("(^|[^a-z0-9])"+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+"([^a-z0-9]|$)","i").test(blob);}catch(e){return blob.includes(t);}}
    return blob.includes(t);}
  map.forEach(e=>{ blobs.forEach(({p,b})=>{ if(aliasesOf(e.term).some(a=>mentions(a,b))&&!e.papers.some(x=>x.id===p.id)) e.papers.push({id:p.id,primary:p.primary,mention:true}); }); });
  return [...map.values()].sort((a,b)=>a.term.toLowerCase().localeCompare(b.term.toLowerCase()));
}
function enrich(g){
  const info=CATINFO[g.term.toLowerCase()]||{};
  return {...g,
    cat:info.cat||"その他",
    detail:info.long||g.desc||"",
    minId:Math.min(...g.papers.map(p=>Number(p.id))),
    count:g.papers.length};
}
function glosRowHTML(g){
  const cc=(typeof CATCOLOR!=="undefined"&&CATCOLOR[g.cat])||"var(--accent)";
  return `<div class="glosrow" style="border-left-color:${cc}">
    <span class="gicon" style="color:${cc}">${CATICON[g.cat]||CATICON["その他"]}</span><span class="gterm">${g.term}</span><span class="gfull">${g.full}</span>
    ${sortMode!=="cat"?`<span class="cattag" style="background:${cc};border-color:${cc};color:#fff">${g.cat}</span>`:""}
    <div class="gdesc">${g.detail}</div>
    <div class="grefs">${g.papers.slice().sort((a,b)=>Number(a.id)-Number(b.id)).map(pp=>
      `<button class="pchip${pp.mention?" mention":""}" title="${pp.mention?"本文で言及":"用語を定義"}" style="background:${THEMES[pp.primary].c}" data-id="${pp.id}">№${pp.id}</button>`).join("")}</div>
  </div>`;
}
function renderGlossary(){
  const all=buildGlossaryIndex().map(enrich);
  let list=query
    ? all.filter(g=>[g.term,g.full,g.detail,g.cat].join(" ").toLowerCase().includes(query))
    : all;
  const byAlpha=(a,b)=>a.term.toLowerCase().localeCompare(b.term.toLowerCase());
  document.getElementById("total").textContent=PAPERS.length;
  document.getElementById("countline").textContent=
    `用語 ${list.length} / ${all.length} 件`+(query?`　·　"${query}"`:"");
  if(!list.length){glosview.innerHTML='<div class="empty">該当する用語がありません</div>';return;}
  let html="";
  if(sortMode==="cat"){
    const cats=[...CAT_ORDER,"その他"];
    const counts={}; cats.forEach(c=>counts[c]=list.filter(g=>g.cat===c).length);
    const shown=cats.filter(c=>counts[c]>0);
    // ジャンル選択トグル（複数選択。空＝すべて表示）
    const bar=`<div class="catbtns" id="catbtns">`+
      `<button class="catbtn${catSel.size===0?' active':''}" data-cat="__all">すべて <em>${list.length}</em></button>`+
      shown.map(c=>`<button class="catbtn${catSel.has(c)?' active':''}" data-cat="${c}" style="--cbc:${CATCOLOR[c]||'var(--accent)'}">${CATICON[c]||CATICON["その他"]}<span>${c}</span> <em>${counts[c]}</em></button>`).join("")+
      `</div>`;
    const active=catSel.size?shown.filter(c=>catSel.has(c)):shown;
    let body="";
    active.forEach(c=>{
      const rows=list.filter(g=>g.cat===c).sort(byAlpha);
      if(!rows.length)return;
      body+=`<div class="catlabel" style="color:${CATCOLOR[c]||'var(--accent)'};border-left:4px solid ${CATCOLOR[c]||'var(--accent)'};padding-left:9px">${c}　(${rows.length})</div><div class="glosgrid">${rows.map(glosRowHTML).join("")}</div>`;
    });
    html=bar+(body||'<div class="empty">選択中のジャンルに該当する用語がありません</div>');
  }else{
    if(sortMode==="first") list=list.slice().sort((a,b)=>a.minId-b.minId||byAlpha(a,b));
    else if(sortMode==="count") list=list.slice().sort((a,b)=>b.count-a.count||byAlpha(a,b));
    else list=list.slice().sort(byAlpha);
    html=`<div class="glosgrid">${list.map(glosRowHTML).join("")}</div>`;
  }
  glosview.innerHTML=html;
  const cb=document.getElementById("catbtns");
  if(cb) cb.addEventListener("click",e=>{
    const b=e.target.closest(".catbtn"); if(!b)return;
    const c=b.dataset.cat;
    if(c==="__all") catSel.clear();
    else { catSel.has(c)?catSel.delete(c):catSel.add(c); }
    renderGlossary();
  });
  glosview.querySelectorAll(".pchip").forEach(b=>{
    b.addEventListener("click",()=>jumpToPaper(b.dataset.id));
  });
}
function jumpToPaper(id){
  // 論文ビューへ切替＆フィルタ解除して必ず表示
  currentView="papers"; query=""; activeThemes.clear(); favOnly=false; readFilter=""; activeMethods.clear(); buildMChips(); methodToggle.innerHTML='🔬 手法で絞り込み<span class="fchev">▾</span>';
  document.getElementById("q").value="";
  favfilter.classList.remove("on");
  readfilter.textContent=READ_FILTER_LABEL[""]; readfilter.classList.remove("on");
  viewtabs.querySelectorAll(".vtab").forEach(x=>x.classList.toggle("active",x.dataset.view==="papers"));
  moretab.classList.remove("has-active","open"); tabmore.classList.remove("open");
  syncChipActive();
  setFilterLabel();
  document.getElementById("q").placeholder="検索…";
  // 対象がどのページにあるか算出してそのページへ
  const full=PAPERS.filter(matches).sort((a,b)=>Number(b.id)-Number(a.id));
  const idx=full.findIndex(p=>String(p.id)===String(id));
  if(idx>=0) paperPage=Math.floor(idx/PAGE_SIZE)+1;
  lastSig=null; // ページ強制反映
  refresh();
  requestAnimationFrame(()=>{
    const cards=[...grid.querySelectorAll(".card")];
    const card=cards.find(c=>c.dataset.id===id);
    if(card){
      if(!card.classList.contains("open")) card.querySelector(".toggle").click();
      card.scrollIntoView({behavior:"smooth",block:"start"});
    }
  });
}

/* ===== 研究ボード（線維化点火・ABM台帳・実験ToDo） ===== */
function flag(v){
  const map={"○":"f-yes","△":"f-mid","×":"f-no","—":"f-na"};
  return `<span class="flag ${map[v]||map[String(v||"")[0]]||"f-na"}">${v||"—"}</span>`;
}
function renderBoard(){
  document.getElementById("total").textContent=PAPERS.length;
  document.getElementById("countline").textContent="研究直結ビュー：線維化点火の横断比較 ／ ABMパラメータ台帳 ／ 実験ToDo（チェックは端末内保存）";
  const ps=PAPERS.filter(p=>p.struct).sort((a,b)=>Number(b.id)-Number(a.id));
  // 1) 線維化点火 横断比較
  const rows=ps.map(p=>{
    const s=p.struct;
    return `<tr>
      <td class="bnum"><button class="relchip mini" data-id="${p.id}">№${p.id}</button></td>
      <td>${s.model||"—"}</td>
      <td>${(s.cells||[]).join("・")}</td>
      <td>${(s.triggers||[]).join("、")}</td>
      <td class="ctr">${flag(s.steatosis)}</td>
      <td class="ctr">${flag(s.inflammation)}</td>
      <td class="ctr">${flag(s.fibrosis)}</td>
      <td>${(s.readout||[]).join("、")}</td>
      <td class="ig">${s.ignite||""}</td>
    </tr>`;
  }).join("");
  const compare=`<div class="boardsec"><h3>① 線維化点火 横断比較</h3>
    <div class="tblwrap"><table class="board">
      <thead><tr><th>論文</th><th>系</th><th>関与細胞</th><th>点火トリガー</th><th>脂肪化</th><th>炎症</th><th>線維化</th><th>線維化の読み出し</th><th>点火のカギ</th></tr></thead>
      <tbody>${rows}</tbody></table></div>
    <div class="board-legend">${flag("○")}達成／顕著　${flag("△")}部分的　${flag("×")}未達／非対象　${flag("—")}対象外・記載なし</div></div>`;
  // 2) ABMパラメータ台帳
  let pr="";
  ps.forEach(p=>(p.struct.params||[]).forEach(pa=>{
    pr+=`<tr><td>${pa.name}</td><td class="bnum"><button class="relchip mini" data-id="${p.id}">№${p.id}</button></td><td>${pa.note||""}</td></tr>`;
  }));
  const ledger=`<div class="boardsec"><h3>② ABMパラメータ台帳</h3>
    <div class="tblwrap"><table class="board"><thead><tr><th>ルール／パラメータ</th><th>出典</th><th>補足</th></tr></thead><tbody>${pr}</tbody></table></div></div>`;
  // 3) 実験ToDo（チェック保存）
  let todo="";
  ps.forEach(p=>{
    const ts=p.struct.todos||[]; if(!ts.length)return;
    const done=(ud(p.id).todos)||{};
    todo+=`<div class="todogrp"><div class="todohd"><button class="relchip mini" data-id="${p.id}">№${p.id}</button> <span>${p.title}</span></div>`+
      ts.map((t,i)=>`<label class="todoitem${done[i]?" done":""}"><input type="checkbox" data-id="${p.id}" data-i="${i}"${done[i]?" checked":""}> <span>${t}</span></label>`).join("")+`</div>`;
  });
  const todoSec=`<div class="boardsec"><h3>③ 自系で試す実験ToDo</h3>${todo}</div>`;
  // 4) 線維化点火の空白マップ
  const gapMap=new Map(); // trigger -> [{id}]
  ps.forEach(p=>{ if(p.struct.fibrosis==="×"||p.struct.fibrosis==="—")return;
    (p.struct.triggers||[]).forEach(t=>{ const k=t.trim(); if(!k)return; if(!gapMap.has(k))gapMap.set(k,[]); gapMap.get(k).push(p.id); });
  });
  const gapState=gapDone();
  const gapChips=[...gapMap.entries()].sort((a,b)=>b[1].length-a[1].length).map(([t,ids])=>{
    const tried=!!gapState[t];
    return `<button class="gapchip${tried?" tried":""}" data-trig="${t.replace(/"/g,'&quot;')}" title="${ids.map(i=>'№'+i).join(' ')}　クリックで試した/未試験を切替">
      <span class="gx">${tried?"✓ 試した":"未試験"}</span> ${t} <span class="gn">×${ids.length}</span></button>`;
  }).join("");
  const gapSec=`<div class="boardsec"><h3>④ 線維化点火の空白マップ</h3>
    <p class="boardnote">論文で線維化に効いた点火トリガーの一覧。自分の系で<b>まだ試していない</b>ものが「未試験」（橙）。クリックで状態を切替（端末内保存）。出現回数の多い順。</p>
    <div class="gapwrap">${gapChips||'<span class="boardnote">トリガー情報がありません</span>'}</div></div>`;
  // 5) 仮説ジェネレータ
  const hypoSec=`<div class="boardsec"><h3>⑤ 仮説ジェネレータ</h3>
    <p class="boardnote">線維化が出た論文の「点火のカギ」を、自系（4細胞・酸素透過膜・KC+LPSセカンドヒット）に移す仮説を自動生成。<button class="genbtn" id="hypogen">↻ 別の組み合わせ</button></p>
    <div class="hypobox" id="hypobox"></div></div>`;
  boardview.innerHTML=compare+ledger+todoSec+gapSec+hypoSec;
  // イベント：論文ジャンプ
  boardview.querySelectorAll(".relchip").forEach(b=>b.addEventListener("click",()=>jumpToPaper(b.dataset.id)));
  // ToDoチェック保存
  boardview.querySelectorAll(".todoitem input").forEach(cb=>cb.addEventListener("change",()=>{
    const id=cb.dataset.id, i=cb.dataset.i;
    const o=ud(id); o.todos=o.todos||{}; o.todos[i]=cb.checked; saveUserData();
    cb.closest(".todoitem").classList.toggle("done",cb.checked);
  }));
  // 空白マップ：試した/未試験トグル
  boardview.querySelectorAll(".gapchip").forEach(b=>b.addEventListener("click",()=>{
    const t=b.dataset.trig, g=gapDone(); g[t]=!g[t]; userData._gap=g; saveUserData();
    b.classList.toggle("tried",g[t]); b.querySelector(".gx").textContent=g[t]?"✓ 試した":"未試験";
  }));
  // 仮説ジェネレータ
  const hb=document.getElementById("hypobox");
  function drawHypos(){ hb.innerHTML=genHypotheses(ps).map(h=>`<div class="hypo"><span class="hicon">💡</span><div><p>${h.text}</p><div class="hsrc">${h.src.map(i=>`<button class="relchip mini" data-id="${i}">№${i}</button>`).join("")}</div></div></div>`).join("");
    hb.querySelectorAll(".relchip").forEach(b=>b.addEventListener("click",()=>jumpToPaper(b.dataset.id))); }
  document.getElementById("hypogen").addEventListener("click",drawHypos);
  drawHypos();
}
function gapDone(){ return userData._gap||(userData._gap={}); }
function genHypotheses(ps){
  // 線維化が出た（○/△）論文の ignite を素材に、自系へ移す仮説を組む
  const fib=ps.filter(p=>p.struct&&(p.struct.fibrosis==="○"||p.struct.fibrosis==="△")&&p.struct.ignite);
  if(!fib.length) return [{text:"線維化が顕在化した論文がまだ少なく、仮説の素材が不足しています。線維化(○/△)の論文を増やすと自動生成されます。",src:[]}];
  const out=[];
  const shuffled=fib.slice().sort(()=>Math.random()-0.5);
  for(let i=0;i<shuffled.length;i++){
    const a=shuffled[i], b=shuffled[(i+1)%shuffled.length];
    const trigA=(a.struct.triggers||[])[0]||"刺激", readA=(a.struct.readout||[])[0]||"αSMA/コラーゲン";
    if(a===b||shuffled.length===1){
      out.push({text:`<b>${a.struct.ignite}</b> を自系の<b>KC共培養＋LPSセカンドヒット</b>条件に組み込み、<b>${trigA}</b>でHSC活性化を点火 → <b>${readA}</b>で線維化を読み出す。`,src:[a.id]});
    }else{
      const igB=b.struct.ignite;
      out.push({text:`論文№${a.id}の「<b>${a.struct.ignite}</b>」と論文№${b.id}の「<b>${igB}</b>」を<b>掛け合わせ</b>、自系（4細胞・酸素透過膜）で<b>${trigA}</b>を二段階刺激として与え、<b>${readA}</b>＋${(b.struct.readout||[])[0]||"線維化指標"}で評価する。`,src:[a.id,b.id]});
    }
    if(out.length>=3)break;
  }
  return out;
}

/* ===== 統計ビュー ===== */
function renderStats(){
  document.getElementById("total").textContent=PAPERS.length;
  document.getElementById("countline").textContent=`全 ${PAPERS.length} 本の収録状況`;
  // テーマ別カウント（primary基準）
  const themeCnt={}; Object.keys(THEMES).forEach(k=>themeCnt[k]=0);
  PAPERS.forEach(p=>{ if(themeCnt[p.primary]!=null) themeCnt[p.primary]++; });
  const maxT=Math.max(1,...Object.values(themeCnt));
  const themeBars=Object.keys(THEMES).map(k=>{
    const n=themeCnt[k], w=Math.round(n/maxT*100);
    return `<div class="bar-row"><span class="lab">${k}·${THEMES[k].name}</span><div class="bar-track"><div class="bar-fill" style="width:${w}%;background:${THEMES[k].c}"></div></div><span class="val">${n}</span></div>`;
  }).join("");
  // 年別カウント
  const yearCnt={}; PAPERS.forEach(p=>{ const y=p.year?Number(p.year):"?"; yearCnt[y]=(yearCnt[y]||0)+1; });
  const years=Object.keys(yearCnt).sort();
  const maxY=Math.max(1,...Object.values(yearCnt));
  const yearBars=years.map(y=>{
    const n=yearCnt[y], w=Math.round(n/maxY*100);
    return `<div class="bar-row"><span class="lab">${y}</span><div class="bar-track"><div class="bar-fill" style="width:${w}%;background:var(--accent)"></div></div><span class="val">${n}</span></div>`;
  }).join("");
  // A〜H巡回バッジ（primaryで何本カバーしたか／未カバーを強調）
  const badges=Object.keys(THEMES).map(k=>{
    const n=themeCnt[k], miss=n===0;
    return `<div class="rotbadge${miss?" miss":""}"><span class="rk" style="color:${THEMES[k].c}">${k}</span><span class="rn">${THEMES[k].name}</span><span class="rc">${miss?"未収録":n+"本"}</span></div>`;
  }).join("");
  const covered=Object.values(themeCnt).filter(n=>n>0).length;
  // 月別 収録数（added=収録日 基準。未設定は「記録なし」）
  const monCnt={}; PAPERS.forEach(p=>{ const m=(p.added&&/^\d{4}-\d{2}/.test(p.added))?p.added.slice(0,7):"記録なし"; monCnt[m]=(monCnt[m]||0)+1; });
  const mons=Object.keys(monCnt).sort();
  const maxM=Math.max(1,...Object.values(monCnt));
  const monBars=mons.map(m=>{ const n=monCnt[m], w=Math.round(n/maxM*100);
    return `<div class="bar-row"><span class="lab">${m}</span><div class="bar-track"><div class="bar-fill" style="width:${w}%;background:var(--H)"></div></div><span class="val">${n}</span></div>`;
  }).join("");
  // タイムライン（年×テーマ 散布）
  const tl=buildTimeline();
  statsview.innerHTML=`
    <div class="statsec"><h3>タイムライン（発表年 × テーマ）</h3>${tl}</div>
    <div class="statsec"><h3>テーマA〜H 巡回カバレッジ（${covered}/8）</h3><div class="rotgrid">${badges}</div></div>
    <div class="statsec"><h3>テーマ別 収録数（primary基準）</h3>${themeBars}</div>
    <div class="statsec"><h3>月別 収録数（収録日ベース）</h3>${monBars}</div>
    <div class="statsec"><h3>発表年別 収録数</h3>${yearBars}</div>`;
  statsview.querySelectorAll(".tldot").forEach(d=>d.addEventListener("click",()=>jumpToPaper(d.dataset.id)));
}
function buildTimeline(){
  const ths=Object.keys(THEMES); // A..H
  const yrs=[...new Set(PAPERS.map(p=>Number(p.year)).filter(Boolean))].sort((a,b)=>a-b);
  if(!yrs.length) return '<p class="boardnote">年情報がありません</p>';
  const padL=46, padR=16, padT=12, padB=26, rowH=26, colW=Math.max(54,(560-padL-padR)/yrs.length);
  const W=padL+padR+colW*yrs.length, H=padT+padB+rowH*ths.length;
  const xOf=y=>padL+colW*(yrs.indexOf(y)+0.5);
  const yOf=k=>padT+rowH*(ths.indexOf(k)+0.5);
  let g="";
  // 行ラベル＋グリッド
  ths.forEach(k=>{ const yy=yOf(k);
    g+=`<line x1='${padL}' y1='${yy}' x2='${W-padR}' y2='${yy}' stroke='var(--line-soft)' stroke-width='1'/>`;
    g+=`<text x='${padL-6}' y='${yy+3}' text-anchor='end' font-size='10' fill='${THEMES[k].c}' font-weight='600'>${k}</text>`;
  });
  yrs.forEach(y=>{ g+=`<text x='${xOf(y)}' y='${H-8}' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>${y}</text>`; });
  // ドット（同じセルは横にずらす）
  const cell={};
  PAPERS.slice().sort((a,b)=>Number(a.id)-Number(b.id)).forEach(p=>{
    if(!p.year||!THEMES[p.primary])return;
    const key=p.year+"_"+p.primary; const idx=(cell[key]=(cell[key]||0)+1)-1;
    const cx=xOf(p.year)+(idx-0)*11-0, cy=yOf(p.primary);
    g+=`<g class="tldot" data-id="${p.id}" style="cursor:pointer"><circle cx='${cx}' cy='${cy}' r='8' fill='${THEMES[p.primary].c}'/><text x='${cx}' y='${cy+3}' text-anchor='middle' font-size='9' fill='#fff' font-weight='700'>${p.id}</text><title>№${p.id} ${p.title}</title></g>`;
  });
  return `<div class="tlwrap"><svg viewBox='0 0 ${W} ${H}' width='100%' preserveAspectRatio='xMidYMid meet'>${g}</svg></div>`;
}

/* ===== zonation 地図（肝小葉ゾーン対応） ===== */
// ゾーン手がかり語（小文字部分一致）。1=門脈域(高O2), 3=中心静脈域(低O2)
const ZONE_KW={
  pp:["urea","gluconeogen","糖新生","β-ox","β酸化","oxidat","酸化的","oxphos","好気","bile acid","胆汁酸","ass1","arg1","pck1","門脈","periportal","zone 1","zone1"],
  pc:["cyp2e1","glutamine synth","glul","gs陽性","wnt","β-catenin","βカテニン","lipogen","脂肪生成","de novo","dnl","acly","acss2","steato","脂肪化","脂肪滴","rspo","lgr","中心静脈","pericentral","perivenous","zone 3","zone3","ballooning","風船様"]
};
function paperText(p){
  const s=p.struct||{};
  return [p.title,p.approach,p.abstract_ja,s.ignite,(s.triggers||[]).join(" "),(s.readout||[]).join(" "),(s.cells||[]).join(" "),(p.glossary||[]).map(g=>g.term+" "+g.full+" "+g.desc).join(" ")].join(" ").toLowerCase();
}
function zoneScores(p){ const t=paperText(p); let pp=0,pc=0;
  ZONE_KW.pp.forEach(k=>{ if(t.includes(k))pp++; }); ZONE_KW.pc.forEach(k=>{ if(t.includes(k))pc++; });
  return {pp,pc};
}
function renderZonation(){
  document.getElementById("total").textContent=PAPERS.length;
  document.getElementById("countline").textContent="肝小葉のゾーン（門脈域＝高O2 ↔ 中心静脈域＝低O2）に各論文を対応づけ。脂肪化/線維化は中心静脈域から始まりやすい。";
  const buckets={pp:[],pc:[],both:[],none:[]};
  PAPERS.forEach(p=>{ const {pp,pc}=zoneScores(p);
    if(pp&&pc) buckets.both.push(p); else if(pp&&pp>=pc) buckets.pp.push(p);
    else if(pc) buckets.pc.push(p); else buckets.none.push(p);
  });
  const chip=p=>`<button class="zchip" data-id="${p.id}" style="--c:${THEMES[p.primary].c}" title="${p.title}"><span class="zn">№${p.id}</span> ${p.title.length>26?p.title.slice(0,25)+"…":p.title}</button>`;
  const col=(ttl,sub,arr,cls)=>`<div class="zcol ${cls}"><div class="zhd">${ttl}<span>${sub}</span></div>${arr.length?arr.map(chip).join(""):'<span class="zempty">該当なし</span>'}</div>`;
  // 模式図
  const svg=`<div class="zfig"><svg viewBox='0 0 640 130' width='100%'>
    <defs><linearGradient id='zo2' x1='0' x2='1'><stop offset='0' stop-color='var(--B)' stop-opacity='0.85'/><stop offset='1' stop-color='var(--F)' stop-opacity='0.85'/></linearGradient></defs>
    <rect x='20' y='44' width='600' height='20' rx='10' fill='url(#zo2)'/>
    <circle cx='30' cy='54' r='14' fill='var(--paper)' stroke='var(--B)' stroke-width='2'/><text x='30' y='58' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='700'>PV</text>
    <circle cx='610' cy='54' r='14' fill='var(--paper)' stroke='var(--F)' stroke-width='2'/><text x='610' y='58' text-anchor='middle' font-size='9' fill='var(--F)' font-weight='700'>CV</text>
    <text x='120' y='30' text-anchor='middle' font-size='11' fill='var(--B)' font-weight='600'>門脈域 Zone1（高O2）</text>
    <text x='120' y='86' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>糖新生・β酸化・尿素回路</text>
    <text x='520' y='30' text-anchor='middle' font-size='11' fill='var(--F)' font-weight='600'>中心静脈域 Zone3（低O2）</text>
    <text x='520' y='86' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>脂肪生成・CYP2E1・脂肪化/線維化起点</text>
    <text x='320' y='112' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>← 酸素分圧の勾配（あなたの酸素透過膜系が再現する軸）→</text>
  </svg></div>`;
  zoneview.innerHTML=`<div class="zonewrap">${svg}
    <div class="zgrid">
      ${col("門脈域 Zone1","高O2・酸化代謝",buckets.pp,"pp")}
      ${col("両域にまたがる","勾配全体",buckets.both,"both")}
      ${col("中心静脈域 Zone3","低O2・脂肪化/線維化",buckets.pc,"pc")}
    </div>
    <div class="zonenote">※ 各論文の本文・トリガー・用語からゾーン手がかり語を自動判定（厳密な実験的局在ではなく目安）。ゾーン非特異：${buckets.none.map(p=>"№"+p.id).join(" ")||"なし"}</div></div>`;
  zoneview.querySelectorAll(".zchip").forEach(b=>b.addEventListener("click",()=>jumpToPaper(b.dataset.id)));
}

/* ===== 用語クイズ（glossaryから4択自動生成） ===== */
const QUIZ_KEY="liverPapers_quiz_v1";
let quizState=(()=>{ try{return JSON.parse(localStorage.getItem(QUIZ_KEY))||{best:0};}catch(e){return {best:0};} })();
let quizRun=null;
function quizPool(){ const seen=new Set(),out=[];
  PAPERS.forEach(p=>(p.glossary||[]).forEach(g=>{ const k=(g.term||"").toLowerCase(); const desc=g.desc||g.full;
    if(!k||!desc||seen.has(k))return; seen.add(k);
    const cat=(CATINFO[k]||{}).cat||"その他";
    out.push({term:g.term,full:g.full||"",desc:desc,pid:p.id,cat}); }));
  return out;
}
function newQuizQ(){ const pool=quizPool(); if(pool.length<4)return null;
  const sh=pool.slice().sort(()=>Math.random()-0.5); const ans=sh[0];
  /* 同カテゴリから不正解を選ぶ（足りなければ他カテゴリで補充） */
  const sameCat=sh.filter(o=>o!==ans&&o.cat===ans.cat).sort(()=>Math.random()-0.5);
  const diffCat=sh.filter(o=>o!==ans&&o.cat!==ans.cat).sort(()=>Math.random()-0.5);
  const distractors=[...sameCat,...diffCat].slice(0,3);
  const opts=[ans,...distractors].sort(()=>Math.random()-0.5);
  return {ans,opts};
}
function renderQuiz(){
  document.getElementById("total").textContent=PAPERS.length;
  document.getElementById("countline").textContent="ライブラリの用語から4択クイズ。正式名/説明を当てます（スコアは端末内保存）。";
  const pool=quizPool();
  if(pool.length<4){ quizview.innerHTML='<p class="boardnote">用語が4件未満のためクイズを作成できません。</p>'; return; }
  if(!quizRun) quizRun={q:newQuizQ(),score:0,n:0,answered:false};
  drawQuiz();
}
function drawQuiz(){
  const r=quizRun, q=r.q;
  const opts=q.opts.map((o,i)=>`<button class="qopt" data-i="${i}" ${r.answered?"disabled":""}>${o.desc}</button>`).join("");
  quizview.innerHTML=`<div class="quizwrap">
    <div class="quizbar"><span>スコア ${r.score} / ${r.n}</span><span>最高 ${quizState.best}</span></div>
    <div class="quizcard">
      <div class="qstem">この用語の説明は？<br><b class="qterm">${q.ans.term}</b>${q.ans.full?` <span class="qfull">（${q.ans.full}）</span>`:""}</div>
      <div class="qopts">${opts}</div>
      <div class="qfb" id="qfb"></div>
      <div class="qact"><button class="genbtn" id="qnext" ${r.answered?"":"style=visibility:hidden"}>次の問題 →</button></div>
    </div></div>`;
  quizview.querySelectorAll(".qopt").forEach(b=>b.addEventListener("click",()=>{
    if(r.answered)return; r.answered=true; const i=+b.dataset.i, ok=q.opts[i]===q.ans; r.n++;
    if(ok){ r.score++; if(r.score>quizState.best){quizState.best=r.score; try{localStorage.setItem(QUIZ_KEY,JSON.stringify(quizState));}catch(e){}} }
    else { r.score=0; }
    quizview.querySelectorAll(".qopt").forEach((bb,j)=>{ bb.disabled=true;
      if(q.opts[j]===q.ans) bb.classList.add("correct"); else if(j===i) bb.classList.add("wrong"); });
    document.getElementById("qfb").innerHTML = ok
      ? `<span class="ok">正解！</span> 出典 <button class="relchip mini" data-id="${q.ans.pid}">№${q.ans.pid}</button>`
      : `<span class="ng">不正解</span> 正しくは：${q.ans.desc} ／ 出典 <button class="relchip mini" data-id="${q.ans.pid}">№${q.ans.pid}</button>${r.score===0?"（連続正解リセット）":""}`;
    const nx=document.getElementById("qnext"); nx.style.visibility="visible";
    document.getElementById("qfb").querySelectorAll(".relchip").forEach(x=>x.addEventListener("click",()=>jumpToPaper(x.dataset.id)));
  }));
  const nb=document.getElementById("qnext"); if(nb) nb.addEventListener("click",()=>{ quizRun.q=newQuizQ(); quizRun.answered=false; drawQuiz(); });
}

/* ===== 新着検索（PubMed E-utilities, ブラウザ側） ===== */
const FEED_PRESETS=[
  {label:"MASH×線維化", term:'(MASH OR NASH OR MASLD) AND (fibrosis OR "stellate cell")'},
  {label:"肝オルガノイド/MPS", term:'(liver organoid OR liver-on-chip OR liver MPS OR hepatic spheroid)'},
  {label:"Kupffer/マクロファージ", term:'(Kupffer cell OR liver macrophage) AND (fibrosis OR inflammation OR NASH)'},
  {label:"LSEC/類洞内皮", term:'(liver sinusoidal endothelial OR LSEC) AND (NASH OR fibrosis OR capillarization)'},
  {label:"in silico/ABM 肝", term:'(agent-based model OR in silico) AND (liver OR hepatic)'}
];
let feedInit=false;
function libDOIset(){ return new Set(PAPERS.map(p=>(p.doi||"").toLowerCase().trim()).filter(Boolean)); }
function renderFeed(){
  document.getElementById("total").textContent=PAPERS.length;
  document.getElementById("countline").textContent="PubMedの新着検索（直近の論文候補）。既収録は✓表示。クリックでPubMedを開く。";
  if(feedInit){ return; }
  feedInit=true;
  feedview.innerHTML=`<div class="feedwrap">
    <div class="feedctrl">
      <div class="feedpresets">${FEED_PRESETS.map((p,i)=>`<button class="fpre" data-i="${i}">${p.label}</button>`).join("")}</div>
      <div class="feedrow"><input id="feedq" type="text" placeholder="自由検索語（PubMed構文可）…"><button class="genbtn" id="feedgo">🔍 検索</button></div>
    </div>
    <div class="feedresult" id="feedresult"><p class="boardnote">上のボタン、または検索語を入れて実行してください。</p></div></div>`;
  feedview.querySelectorAll(".fpre").forEach(b=>b.addEventListener("click",()=>{ const t=FEED_PRESETS[+b.dataset.i].term; document.getElementById("feedq").value=t; runFeed(t); }));
  document.getElementById("feedgo").addEventListener("click",()=>runFeed(document.getElementById("feedq").value.trim()));
  document.getElementById("feedq").addEventListener("keydown",e=>{ if(e.key==="Enter")runFeed(e.target.value.trim()); });
}
async function runFeed(term){
  const box=document.getElementById("feedresult"); if(!term){ box.innerHTML='<p class="boardnote">検索語を入れてください。</p>'; return; }
  box.innerHTML='<p class="boardnote">PubMedに問い合わせ中…</p>';
  try{
    const base="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
    const es=await fetch(base+"esearch.fcgi?db=pubmed&retmode=json&sort=date&retmax=15&term="+encodeURIComponent(term));
    const ej=await es.json(); const ids=(ej.esearchresult&&ej.esearchresult.idlist)||[];
    if(!ids.length){ box.innerHTML='<p class="boardnote">該当なし。</p>'; return; }
    const ss=await fetch(base+"esummary.fcgi?db=pubmed&retmode=json&id="+ids.join(","));
    const sj=await ss.json(); const r=sj.result||{}; const libDoi=libDOIset();
    const rows=ids.map(id=>{ const a=r[id]; if(!a)return "";
      const doi=((a.articleids||[]).find(x=>x.idtype==="doi")||{}).value||"";
      const have=doi&&libDoi.has(doi.toLowerCase());
      const yr=(a.pubdate||"").slice(0,4);
      return `<div class="feeditem${have?" have":""}">
        <a href="https://pubmed.ncbi.nlm.nih.gov/${id}/" target="_blank" rel="noopener" class="ftitle">${a.title||"(no title)"}</a>
        <div class="fmeta">${a.fulljournalname||a.source||""} · ${yr}${have?' <span class="fhave">✓ 既収録</span>':""}</div></div>`;
    }).join("");
    box.innerHTML=`<div class="feedlist">${rows}</div>`;
  }catch(e){ box.innerHTML='<p class="boardnote">取得に失敗しました（ネットワーク制限の可能性）。時間をおいて再実行するか、PubMedで直接検索してください。</p>'; }
}

/* ===== 用語共起ネットワーク ===== */
const CATCOLOR={
  "細胞・組織":"var(--C)","遺伝子・タンパク質":"var(--H)","シグナル・経路":"var(--F)",
  "代謝・分子":"var(--D)","プロセス・現象":"var(--B)","手法・モデル":"var(--A)","疾患・病態":"var(--E)","その他":"var(--accent)"
};
/* 用語ジャンル別アイコン（currentColorで描画＝カテゴリ色を継承） */
const CATICON={
  "細胞・組織":`<svg viewBox='0 0 24 24'><circle cx='12' cy='12' r='9' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='12' cy='12' r='3.4' fill='currentColor'/></svg>`,
  "遺伝子・タンパク質":`<svg viewBox='0 0 24 24'><path d='M8 3v18M16 3v18' stroke='currentColor' stroke-width='1.6' stroke-linecap='round'/><path d='M8 6.5q4 2.2 8 0M8 12q4 2.2 8 0M8 17.5q4 2.2 8 0' fill='none' stroke='currentColor' stroke-width='1.3'/></svg>`,
  "シグナル・経路":`<svg viewBox='0 0 24 24'><circle cx='5' cy='12' r='2.6' fill='currentColor'/><path d='M8 12h7' stroke='currentColor' stroke-width='1.6'/><path d='M13 8.5l3.5 3.5-3.5 3.5' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
  "代謝・分子":`<svg viewBox='0 0 24 24'><polygon points='12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round'/></svg>`,
  "プロセス・現象":`<svg viewBox='0 0 24 24'><path d='M20 12a8 8 0 1 1-2.6-5.9' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round'/><path d='M20 4v4h-4' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
  "手法・モデル":`<svg viewBox='0 0 24 24'><path d='M9.5 3h5M10.5 3v5.5l-5 9A1.8 1.8 0 0 0 7 20h10a1.8 1.8 0 0 0 1.5-2.5l-5-9V3' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linejoin='round'/></svg>`,
  "疾患・病態":`<svg viewBox='0 0 24 24'><path d='M2 12h5l2.2-6 3.6 12 2.2-6H22' fill='none' stroke='currentColor' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
  "その他":`<svg viewBox='0 0 24 24'><circle cx='12' cy='12' r='3.8' fill='currentColor'/></svg>`
};
function renderNetwork(){
  document.getElementById("total").textContent=PAPERS.length;
  document.getElementById("countline").textContent="同じ論文に一緒に登場した用語どうしを線で結んでいます";
  const entries=buildGlossaryIndex();
  const nodeMap=new Map();
  entries.forEach(e=>{ const k=e.term.toLowerCase(); const info=CATINFO[k]||{}; nodeMap.set(k,{term:e.term,cat:info.cat||"その他",desc:(info.long||e.desc||""),papers:new Set(e.papers.map(pp=>pp.id))}); });
  const catIdx=t=>{ const i=CAT_ORDER.indexOf(t); return i<0?CAT_ORDER.length:i; };
  const allCats=[...CAT_ORDER,"その他"].filter(c=>[...nodeMap.values()].some(n=>n.cat===c));
  const hiddenCats=new Set();
  let searchTerm="";

  function rebuild(){
    const visNodes=[...nodeMap.values()].filter(n=>!hiddenCats.has(n.cat))
      .filter(n=>!searchTerm||n.term.toLowerCase().includes(searchTerm))
      .sort((a,b)=>catIdx(a.cat)-catIdx(b.cat)||a.term.localeCompare(b.term));
    const idxOf=new Map(visNodes.map((n,i)=>[n.term.toLowerCase(),i]));
    // エッジ
    const paperTerms=new Map();
    entries.forEach(e=>{ const k=e.term.toLowerCase(); if(!idxOf.has(k))return;
      e.papers.forEach(pp=>{ if(!paperTerms.has(pp.id))paperTerms.set(pp.id,new Set()); paperTerms.get(pp.id).add(k); }); });
    const eMap=new Map();
    paperTerms.forEach(set=>{ const ts=[...set]; for(let a=0;a<ts.length;a++)for(let b=a+1;b<ts.length;b++){ const i=idxOf.get(ts[a]),j=idxOf.get(ts[b]); if(i==null||j==null)continue; const key=i<j?i+"-"+j:j+"-"+i; eMap.set(key,(eMap.get(key)||0)+1);} });
    // カテゴリごとにクラスタリングした円周配置
    const N=visNodes.length, VB=820, cx=VB/2, cy=VB/2;
    const catGroups=new Map();
    visNodes.forEach((n,i)=>{ if(!catGroups.has(n.cat))catGroups.set(n.cat,[]); catGroups.get(n.cat).push(i); });
    const groups=[...catGroups.entries()].sort((a,b)=>catIdx(a[0])-catIdx(b[0]));
    const totalWithGaps=N+groups.length*2;
    const pos=new Array(N);
    let cursor=0;
    groups.forEach(([cat,idxs])=>{
      cursor+=1.5; // gap before group
      idxs.forEach((ni,j)=>{
        const ang=-Math.PI/2+2*Math.PI*(cursor)/totalWithGaps;
        const R=VB/2-150;
        pos[ni]={x:cx+R*Math.cos(ang),y:cy+R*Math.sin(ang),ang};
        cursor++;
      });
      cursor+=1.5; // gap after group
    });
    const maxC=Math.max(1,...visNodes.map(n=>n.papers.size));
    const maxW=Math.max(1,...eMap.values());
    let edgeSVG="";
    eMap.forEach((w,key)=>{
      const [i,j]=key.split("-").map(Number);
      const op=0.10+0.62*((w-1)/Math.max(1,maxW-1)), sw=0.8+2.8*((w-1)/Math.max(1,maxW-1));
      edgeSVG+=`<line class="edge e-${i} e-${j}" x1='${pos[i].x.toFixed(1)}' y1='${pos[i].y.toFixed(1)}' x2='${pos[j].x.toFixed(1)}' y2='${pos[j].y.toFixed(1)}' stroke='var(--line)' stroke-width='${sw.toFixed(2)}' stroke-opacity='${op.toFixed(2)}'/>`;
    });
    let nodeSVG="";
    visNodes.forEach((n,i)=>{
      const r=4.5+9.5*((n.papers.size-1)/Math.max(1,maxC-1)), col=CATCOLOR[n.cat]||"var(--accent)";
      const side=Math.cos(pos[i].ang)>=0?"start":"end";
      const lx=pos[i].x+(side==="start"?r+5:-(r+5)), ly=pos[i].y+4;
      const isMatch=searchTerm&&n.term.toLowerCase().includes(searchTerm);
      nodeSVG+=`<g class="node n-${i}${isMatch?" search-hit":""}" data-i="${i}" data-t="${n.term.replace(/"/g,'&quot;')}" data-tip="${(n.desc||'').replace(/"/g,'&quot;')}" style="cursor:pointer">`
        +`<circle cx='${pos[i].x.toFixed(1)}' cy='${pos[i].y.toFixed(1)}' r='${r.toFixed(1)}' fill='${col}'${isMatch?" stroke='var(--B)' stroke-width='2.5'":""}/>`
        +`<text x='${lx.toFixed(1)}' y='${ly.toFixed(1)}' text-anchor='${side}' font-size='10' fill='var(--ink)' font-family="DM Mono,monospace"${isMatch?" font-weight='700'":""}>${n.term}</text>`
        +`</g>`;
    });
    const wrap=netview.querySelector(".net-svgwrap");
    wrap.innerHTML=`<svg viewBox="0 0 ${VB} ${VB}" xmlns="http://www.w3.org/2000/svg">${edgeSVG}${nodeSVG}</svg>`;
    const countEl=netview.querySelector(".net-count");
    if(countEl) countEl.textContent=`${visNodes.length}語 / ${nodeMap.size}語`;
    // zoom/pan
    const svg=wrap.querySelector("svg");
    let scale=1, tx=0, ty=0;
    function applyTx(){ svg.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`; svg.style.transformOrigin="0 0"; }
    wrap.addEventListener("wheel",e=>{
      e.preventDefault();
      const d=e.deltaY>0?0.9:1.1;
      const rect=wrap.getBoundingClientRect();
      const mx=e.clientX-rect.left, my=e.clientY-rect.top;
      const ns=Math.max(0.3,Math.min(5,scale*d));
      tx=mx-(mx-tx)*(ns/scale); ty=my-(my-ty)*(ns/scale);
      scale=ns; applyTx();
    },{passive:false});
    let drag=false, lx=0, ly=0;
    wrap.addEventListener("mousedown",e=>{ drag=true; lx=e.clientX; ly=e.clientY; });
    window.addEventListener("mousemove",e=>{ if(!drag)return; tx+=e.clientX-lx; ty+=e.clientY-ly; lx=e.clientX; ly=e.clientY; applyTx(); });
    window.addEventListener("mouseup",()=>drag=false);
    // touch pan/pinch
    let touches0=null, dist0=0, scale0=1, tx0=0, ty0=0;
    wrap.addEventListener("touchstart",e=>{
      if(e.touches.length===1){ drag=true; lx=e.touches[0].clientX; ly=e.touches[0].clientY; }
      if(e.touches.length===2){ drag=false; touches0=e.touches; dist0=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY); scale0=scale; tx0=tx; ty0=ty; }
    },{passive:true});
    wrap.addEventListener("touchmove",e=>{
      if(e.touches.length===1&&drag){ const cx=e.touches[0].clientX,cy=e.touches[0].clientY; tx+=cx-lx; ty+=cy-ly; lx=cx; ly=cy; applyTx(); e.preventDefault(); }
      if(e.touches.length===2&&touches0){ const d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY); scale=Math.max(0.3,Math.min(5,scale0*(d/dist0))); applyTx(); e.preventDefault(); }
    },{passive:false});
    wrap.addEventListener("touchend",()=>{ drag=false; touches0=null; });
    // zoom buttons
    netview.querySelector(".nz-in").onclick=()=>{ scale=Math.min(5,scale*1.3); applyTx(); };
    netview.querySelector(".nz-out").onclick=()=>{ scale=Math.max(0.3,scale/1.3); applyTx(); };
    netview.querySelector(".nz-fit").onclick=()=>{ scale=1; tx=0; ty=0; applyTx(); };
    // ノードインタラクション
    let sel=null;
    svg.querySelectorAll(".node").forEach(g=>{
      g.addEventListener("mouseenter",e=>{ if(!g.dataset.tip)return; tipEl.innerHTML=`<b>${g.dataset.t||""}</b>${g.dataset.tip||""}`; tipEl.classList.add("on"); positionTip(e); });
      g.addEventListener("mousemove",positionTip);
      g.addEventListener("mouseleave",()=>tipEl.classList.remove("on"));
    });
    function clearHi(){ svg.querySelectorAll(".edge,.node").forEach(el=>el.classList.remove("hi","dim")); }
    svg.querySelectorAll(".node").forEach(g=>{
      g.addEventListener("click",()=>{
        const i=g.dataset.i;
        if(sel===i){ sel=null; clearHi(); return; }
        sel=i; clearHi();
        svg.querySelectorAll(".node,.edge").forEach(el=>el.classList.add("dim"));
        svg.querySelectorAll(".e-"+i).forEach(e=>{ e.classList.remove("dim"); e.classList.add("hi"); });
        svg.querySelectorAll(".e-"+i).forEach(e=>{
          e.classList.forEach(cl=>{ if(/^e-\d+$/.test(cl)){ const j=cl.slice(2); svg.querySelector(".n-"+j)?.classList.remove("dim"); } });
        });
        g.classList.remove("dim"); g.classList.add("hi");
      });
    });
  }

  // 初回UI組み立て
  const catBtns=allCats.map(c=>`<button class="net-cat-btn" data-cat="${c}"><i style="background:${CATCOLOR[c]||"var(--accent)"}"></i>${c}</button>`).join("");
  netview.innerHTML=`
    <div class="net-ctrl">
      <input class="net-search" type="text" placeholder="用語を検索…">
      ${catBtns}
      <span class="net-count" style="font-size:11px;color:var(--ink-soft);margin-left:6px"></span>
      <div class="net-zoom"><button class="nz-in" title="拡大">＋</button><button class="nz-out" title="縮小">−</button><button class="nz-fit" title="リセット">⊡</button></div>
    </div>
    <div class="net-svgwrap" style="max-height:70vh"></div>
    <div class="net-cap">丸の大きさ＝登場した論文数、線の濃さ＝一緒に登場した回数、色＝用語のジャンル。カテゴリボタンで表示切替、スクロールでズーム、ドラッグで移動。丸クリックでつながりを強調。</div>`;
  // カテゴリトグル
  netview.querySelectorAll(".net-cat-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const c=btn.dataset.cat;
      if(hiddenCats.has(c)){ hiddenCats.delete(c); btn.classList.remove("off"); } else { hiddenCats.add(c); btn.classList.add("off"); }
      rebuild();
    });
  });
  // 検索
  let searchTimer=null;
  netview.querySelector(".net-search").addEventListener("input",e=>{
    clearTimeout(searchTimer);
    searchTimer=setTimeout(()=>{ searchTerm=e.target.value.trim().toLowerCase(); rebuild(); },200);
  });
  rebuild();
}

// updated date = newest entry year-ish placeholder → use today on open
document.getElementById("updated").textContent=new Date().toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"});
refresh();
