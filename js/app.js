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
let activeThemes=new Set(), themeMode="OR", favOnly=false, query="", currentView="papers", sortMode="alpha", readFilter="", catSel=new Set(), paperSort="id", activeMethods=new Set(), openPaper="";
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
  Object.entries(THEMES).map(([k,v])=>`<span class="chip" data-theme="${k}"><span class="dot" style="background:${v.c}"></span>${k}：${v.name}</span>`).join("");
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
  else if(activeThemes.size===1){ const t=[...activeThemes][0]; txt=t+"："+(THEMES[t]?THEMES[t].name:""); }
  else txt=[...activeThemes].sort().join(themeMode==="AND"?" & ":" / ");
  filterToggle.innerHTML=txt+'<span class="fchev">▼</span>';
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
  render(); commitState();
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
  const sep=(label,col)=>`<span style="font-family:var(--font-sans);font-weight:700;font-size:calc(11.5px*var(--fs));color:${col};padding:4px 2px;align-self:center">${label}</span>`;
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
  setMethodLabel();
  methodToggle.classList.toggle("open",true);
  mchipsBox.classList.add("show");
  render(); commitState();
});
function setMethodLabel(){
  methodToggle.innerHTML=(activeMethods.size ? [...activeMethods].map(k=>METHOD_LABELS[k]).join(" / ") : "🔬 手法で絞り込み")+'<span class="fchev">▼</span>';
}
// AND/OR トグル
const modetoggle=document.getElementById("modetoggle");
modetoggle.addEventListener("click",()=>{
  themeMode = themeMode==="OR" ? "AND" : "OR";
  modetoggle.textContent=themeMode;
  modetoggle.classList.toggle("on",themeMode==="AND");
  setFilterLabel(); render(); commitState();
});
// ★お気に入りのみ
const favfilter=document.getElementById("favfilter");
favfilter.addEventListener("click",()=>{
  favOnly=!favOnly;
  favfilter.classList.toggle("on",favOnly);
  render(); commitState();
});
// 📖 読了ステータス絞り込み（循環）
const readfilter=document.getElementById("readfilter");
readfilter.addEventListener("click",()=>{
  const i=READ_FILTER_CYCLE.indexOf(readFilter);
  readFilter=READ_FILTER_CYCLE[(i+1)%READ_FILTER_CYCLE.length];
  readfilter.textContent=READ_FILTER_LABEL[readFilter];
  readfilter.classList.toggle("on",readFilter!=="");
  render(); commitState();
});
document.getElementById("printbtn").addEventListener("click",()=>window.print());
document.getElementById("randbtn").addEventListener("click",()=>{
  const p=PAPERS[Math.floor(Math.random()*PAPERS.length)];
  jumpToPaper(p.id);
});
syncChipActive();
setFilterLabel();
const qInput=document.getElementById("q");
qInput.addEventListener("input",e=>{ setQuery(e.target.value); refresh(); commitState("typing"); });

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
  syncViewTabs();
  tabmore.classList.remove("open"); moretab.classList.remove("open");
  refresh(); commitState();
});
function syncViewTabs(){
  let act=null;
  viewtabs.querySelectorAll(".vtab").forEach(x=>{ const on=x.dataset.view===currentView; x.classList.toggle("active",on); if(on) act=x; });
  // 「その他」内のタブが選択されたら親ボタンを強調
  moretab.classList.toggle("has-active",!!act&&tabmore.contains(act));
  qInput.placeholder = currentView==="terms"
    ? "略語・正式名・説明で用語検索…（例: TGFβ）" : "検索（本文・用語・手法も。スペースでAND）";
}

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
  renderGlossary(); commitState();
});
const psortbar=document.getElementById("psortbar");
psortbar.addEventListener("click",e=>{
  const b=e.target.closest(".sbtn"); if(!b)return;
  paperSort=b.dataset.psort;
  [...psortbar.querySelectorAll(".sbtn")].forEach(x=>x.classList.toggle("active",x===b));
  render(); commitState();
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
  const prim=`<span class="tag" style="background:${THEMES[p.primary].c}">${p.primary}：${THEMES[p.primary].name}</span>`;
  const sec=(p.tags||[]).map(t=>`<span class="tag sub">${t}</span>`).join("");
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
  return matchesQuery(p);
}
// 検索語ハイライトは描画後に DOM のテキストへ一括適用する（highlightIn）。ここは素通し。
function hl(text){ return text==null?"":String(text); }
const PAGE_SIZE=20; let paperPage=1, lastSig=null;
const pagerEl=document.getElementById("pager");
function renderPager(total){
  const pages=Math.ceil(total/PAGE_SIZE);
  if(pages<=1){ pagerEl.innerHTML=""; return; }
  let btns="";
  for(let p=1;p<=pages;p++) btns+=`<button class="pgnum${p===paperPage?" on":""}" data-p="${p}">${p}</button>`;
  pagerEl.innerHTML=`<button class="pgnav" data-p="${paperPage-1}" ${paperPage<=1?"disabled":""}>← 前</button>${btns}<button class="pgnav" data-p="${paperPage+1}" ${paperPage>=pages?"disabled":""}>次 →</button>`;
  pagerEl.querySelectorAll("button[data-p]").forEach(b=>b.addEventListener("click",()=>{
    const np=+b.dataset.p; if(np<1||np>pages)return; paperPage=np; render(); commitState();
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

/* 詳細を開いた時にアニメを生成し、自動再生する（1回だけ）。
   自動再生オフ・OS の「視差効果を減らす」が有効な時は再生しない */
function initCinema(card){
  const mount=card.querySelector(".cinema-mount");
  if(!mount||mount.dataset.init)return;
  const def=CINEMA[mount.dataset.id]; if(!def)return;
  mount.dataset.init="1";
  const ctrl=mountCinema(mount,def);
  if(cinemaAutoplayAllowed()) setTimeout(()=>{ if(card.classList.contains("open")) ctrl.play(); },350);
}

function render(){
  const full=sortPapers(PAPERS.filter(matches));
  document.getElementById("total").textContent=PAPERS.length;
  const themeNote = activeThemes.size ? `　｜　テーマ ${[...activeThemes].sort().join(activeThemes.size>1?(themeMode==="AND"?"&":"/"):"")}` : "";
  // フィルタ・並び替えが変わったら1ページ目に戻す
  const sig=filterSig();
  if(sig!==lastSig){ paperPage=1; lastSig=sig; }
  const pages=Math.max(1,Math.ceil(full.length/PAGE_SIZE));
  if(paperPage>pages) paperPage=pages;
  const start=(paperPage-1)*PAGE_SIZE;
  const list=full.slice(start,start+PAGE_SIZE);
  const rangeNote = full.length>PAGE_SIZE ? `（${start+1}–${start+list.length}件目を表示）` : "";
  const methodNote = activeMethods.size ? `　｜　手法 ${[...activeMethods].map(k=>METHOD_LABELS[k]||k).join(" / ")}` : "";
  document.getElementById("countline").textContent=
    `表示 ${full.length} / ${PAPERS.length} 本`+rangeNote+themeNote+methodNote+(favOnly?"　｜　★のみ":"")+(query?`　｜　"${query}"`:"");
  if(openPaper && !list.some(p=>p.id===openPaper)) openPaper="";
  if(!full.length){grid.innerHTML='<div class="empty">該当する論文がありません'+(queryTerms.length>1?'<br><small>（スペース区切りの語は「すべて含む」で絞り込みます）</small>':'')+'</div>';pagerEl.innerHTML="";return;}
  grid.innerHTML=list.map((p,i)=>`
    <article class="card" data-id="${p.id}" style="--c:${THEMES[p.primary].c};animation-delay:${i*60}ms">
      <div class="card-top">
        <div class="left"><span class="num">No.${p.id}</span><button class="fav${isFav(p.id)?" on":""}" title="お気に入り" aria-label="お気に入り">${isFav(p.id)?"★":"☆"}</button><select class="readsel rs-${ud(p.id).read||"none"}" title="読了ステータス（端末内保存）"><option value=""${(ud(p.id).read||"")===""?" selected":""}>未読</option><option value="skim"${ud(p.id).read==="skim"?" selected":""}>流し読み</option><option value="deep"${ud(p.id).read==="deep"?" selected":""}>精読</option></select></div>
        <div class="tags">${tagHTML(p)}</div>
      </div>
      <h2 class="title">${hl(p.title)}</h2>
      <div class="cite"><span class="j">${hl(p.journal)}</span> ${p.vol||""} (${p.year})　${hl(p.authors)}　<span class="cited" data-doi="${p.doi||""}" title="OpenAlex 被引用数">被引用 …</span></div>
      <span class="approach">${hl(p.approach||"")}</span>
      ${queryTerms.length?`<div class="matchhint">🔎 一致：${matchedFields(p).join("・")}</div>`:""}
      <div class="row-actions">
        <button class="btn toggle"><span class="arr">▶</span> 詳細を${"開く"}</button>
        <a class="doi" href="${p.url}" target="_blank" rel="noopener">原文を開く（DOI: ${p.doi}）</a>
      </div>
      <div class="detail"><div class="detail-inner">
        ${keyTakeaway(p)?`<div class="kimo"><span class="kimo-ic">💡</span><div><span class="kimo-lbl">この論文のキモ</span>${em(keyTakeaway(p))}</div></div>`:""}
        <div class="sec"><h4>メモ（自分用・端末内保存）</h4><div class="memo"><textarea placeholder="この論文についてのメモ…">${(ud(p.id).memo||"").replace(/</g,"&lt;")}</textarea><span class="saved">保存しました</span></div></div>
        ${(paperIcons[p.id]&&paperIcons[p.id].length)?`<div class="sec"><h4>登場要素（イラスト）</h4><div class="illus">${paperIcons[p.id].map(o=>`<figure>${ICONS[o.ic]||""}<figcaption>${o.cap}</figcaption></figure>`).join("")}</div></div>`:""}
        ${(()=>{const ms=paperMethods[p.id]||[];if(!ms.length)return"";const exp=ms.filter(k=>METHOD_CAT[k]==="exp");const ana=ms.filter(k=>METHOD_CAT[k]==="ana");const row=(keys,cat,label)=>keys.length?`<div class="mth-row"><span class="mth-label ${cat}">${label}</span><div class="mth-illus illus">${keys.map(k=>`<figure>${METHOD_ICONS[k]||""}<figcaption>${METHOD_LABELS[k]||k}</figcaption></figure>`).join("")}</div></div>`:"";return`<div class="sec"><h4>使用手法</h4>${row(exp,"exp","実験系")}${row(ana,"ana","解析系")}</div>`;})()}
        ${p.method_figure?`<div class="sec"><h4>実験系（Method図）</h4><div class="figbox" tabindex="0" role="button" aria-label="図を拡大表示"><span class="figzoom" aria-hidden="true">＋ 拡大</span>${p.method_figure}</div></div>`:""}
        ${p.figure?`<div class="sec"><h4>概念図（わかったこと）</h4><div class="figbox" tabindex="0" role="button" aria-label="図を拡大表示"><span class="figzoom" aria-hidden="true">＋ 拡大</span>${p.figure}</div></div>`:""}
        ${(typeof CINEMA!=="undefined"&&CINEMA[p.id])?`<div class="sec"><h4>アニメーション（病態の流れ）</h4>${modelBadges(p)}<div class="cinema-mount" data-id="${p.id}"></div></div>`:""}
        <div class="sec"><h4>Abstract（和訳要約）</h4><p class="abst-strong">${annotate(p.abstract_ja||p.abstract||"")}</p></div>
        <div class="sec"><h4>背景と課題</h4><p>${em(p.background)}</p></div>
        <div class="sec"><h4>達成したこと</h4><ul>${(p.achievements||[]).map(x=>`<li>${em(x)}</li>`).join("")}</ul></div>
        <div class="sec"><h4>Limitation</h4><ul>${(p.limitations||[]).map(x=>`<li>${em(x)}</li>`).join("")}</ul></div>
        <div class="sec connect"><h4>自分の研究との接続</h4><ul>${(p.connection||[]).map(x=>`<li>${em(x)}</li>`).join("")}</ul></div>
        ${(p.glossary&&p.glossary.length)?`<div class="sec"><h4>用語メモ</h4><table class="gloss"><tbody>${p.glossary.map(g=>`<tr><td><b>${g.term}</b></td><td>${g.full||""}</td><td>${g.desc||""}</td></tr>`).join("")}</tbody></table></div>`:""}
        ${(()=>{ const rel=relatedPapers(p); return rel.length?`<div class="sec"><h4>関連論文</h4><div class="related">${rel.map(o=>`<button class="relchip" data-id="${o.q.id}" style="--c:${THEMES[o.q.primary].c}" title="共有テーマ${o.st}・共通用語${o.sg}"><span class="rn">No.${o.q.id}</span> ${o.q.title}</button>`).join("")}</div></div>`:""; })()}
        <div class="sec closebar"><button class="btn toggle-bottom"><span class="arr">▲</span> 詳細を閉じる</button></div>
      </div></div>
    </article>`).join("");
  grid.querySelectorAll(".card").forEach(card=>{
    const id=card.dataset.id;
    card.querySelector(".toggle").addEventListener("click",()=>{
      const open=!card.classList.contains("open");
      setCardOpen(card,open);
      if(open) openPaper=id; else if(openPaper===id) openPaper="";
      commitState();
    });
    // 詳細末尾の「閉じる」→閉じてカード冒頭へ戻る
    const tb=card.querySelector(".toggle-bottom");
    if(tb) tb.addEventListener("click",()=>{
      setCardOpen(card,false);
      if(openPaper===id){ openPaper=""; commitState(); }
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
  renderPager(full.length);
  highlightIn(grid,queryTerms);
  if(openPaper){ const c=grid.querySelector(`.card[data-id="${openPaper}"]`); if(c) setCardOpen(c,true); }
}
function setCardOpen(card,open){
  // 詳細欄は中身の高さまで開き、開き終わったら高さ制限を外す（長い論文でも下が切れない）
  const d=card.querySelector(".detail");
  if(d&&open!==card.classList.contains("open")){
    clearTimeout(d._t);
    if(open){ d.style.maxHeight=d.scrollHeight+"px"; d._t=setTimeout(()=>{ if(card.classList.contains("open")) d.style.maxHeight="none"; },550); }
    else{ d.style.maxHeight=d.scrollHeight+"px"; void d.offsetHeight; d.style.maxHeight="0px"; }
  }
  card.classList.toggle("open",open);
  card.querySelector(".toggle").innerHTML=`<span class="arr">▶</span> 詳細を${open?"閉じる":"開く"}`;
  if(open) initCinema(card);
  else{ const m=card.querySelector(".cinema-mount"); if(m&&m._cinema){ m._cinema.pause(); m._cinema.exitFull(); } }
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
    ${sortMode!=="cat"?`<span class="cattag" style="background:${cc};border-color:${cc};color:var(--on-c)">${g.cat}</span>`:""}
    <div class="gdesc">${g.detail}</div>
    <div class="grefs">${g.papers.slice().sort((a,b)=>Number(a.id)-Number(b.id)).map(pp=>
      `<button class="pchip${pp.mention?" mention":""}" title="${pp.mention?"本文で言及":"用語を定義"}" style="background:${THEMES[pp.primary].c}" data-id="${pp.id}">No.${pp.id}</button>`).join("")}</div>
  </div>`;
}
function renderGlossary(){
  const all=buildGlossaryIndex().map(enrich);
  let list=queryTerms.length
    ? all.filter(g=>{ const t=norm([g.term,g.full,g.detail,g.cat].join(" ")); return queryTerms.every(q=>t.includes(q)); })
    : all;
  const byAlpha=(a,b)=>a.term.toLowerCase().localeCompare(b.term.toLowerCase());
  document.getElementById("total").textContent=PAPERS.length;
  document.getElementById("countline").textContent=
    `用語 ${list.length} / ${all.length} 件`+(query?`　｜　"${query}"`:"");
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
  highlightIn(glosview,queryTerms);
}
function jumpToPaper(id){
  // 論文ビューへ切替＆フィルタ解除して必ず表示（並び順は維持）。履歴に積むので「戻る」で元の画面へ戻れる
  id=String(id);
  currentView="papers"; setQuery(""); clearFilters(); openPaper=id;
  const full=sortPapers(PAPERS.filter(matches));
  const idx=full.findIndex(p=>p.id===id);
  paperPage=idx>=0?Math.floor(idx/PAGE_SIZE)+1:1;
  lastSig=filterSig();
  syncControls(); refresh(); commitState();
  revealCard(id);
}
function revealCard(id){
  requestAnimationFrame(()=>{
    const card=grid.querySelector(`.card[data-id="${id}"]`);
    if(card){ setCardOpen(card,true); card.scrollIntoView({behavior:"smooth",block:"start"}); }
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
      <td class="bnum"><button class="relchip mini" data-id="${p.id}">No.${p.id}</button></td>
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
    pr+=`<tr><td>${pa.name}</td><td class="bnum"><button class="relchip mini" data-id="${p.id}">No.${p.id}</button></td><td>${pa.note||""}</td></tr>`;
  }));
  const ledger=`<div class="boardsec"><h3>② ABMパラメータ台帳</h3>
    <div class="tblwrap"><table class="board"><thead><tr><th>ルール／パラメータ</th><th>出典</th><th>補足</th></tr></thead><tbody>${pr}</tbody></table></div></div>`;
  // 3) 実験ToDo（チェック保存）
  let todo="";
  ps.forEach(p=>{
    const ts=p.struct.todos||[]; if(!ts.length)return;
    const done=(ud(p.id).todos)||{};
    todo+=`<div class="todogrp"><div class="todohd"><button class="relchip mini" data-id="${p.id}">No.${p.id}</button> <span>${p.title}</span></div>`+
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
    return `<button class="gapchip${tried?" tried":""}" data-trig="${t.replace(/"/g,'&quot;')}" title="${ids.map(i=>'No.'+i).join(' ')}　クリックで試した/未試験を切替">
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
  function drawHypos(){ hb.innerHTML=genHypotheses(ps).map(h=>`<div class="hypo"><span class="hicon">💡</span><div><p>${h.text}</p><div class="hsrc">${h.src.map(i=>`<button class="relchip mini" data-id="${i}">No.${i}</button>`).join("")}</div></div></div>`).join("");
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
      out.push({text:`論文No.${a.id}の「<b>${a.struct.ignite}</b>」と論文No.${b.id}の「<b>${igB}</b>」を<b>掛け合わせ</b>、自系（4細胞・酸素透過膜）で<b>${trigA}</b>を二段階刺激として与え、<b>${readA}</b>＋${(b.struct.readout||[])[0]||"線維化指標"}で評価する。`,src:[a.id,b.id]});
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
    return `<div class="bar-row"><span class="lab">${k}：${THEMES[k].name}</span><div class="bar-track"><div class="bar-fill" style="width:${w}%;background:${THEMES[k].c}"></div></div><span class="val">${n}</span></div>`;
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
    g+=`<g class="tldot" data-id="${p.id}" style="cursor:pointer"><circle cx='${cx}' cy='${cy}' r='8' fill='${THEMES[p.primary].c}'/><text x='${cx}' y='${cy+3}' text-anchor='middle' font-size='9' fill='#fff' font-weight='700'>${p.id}</text><title>No.${p.id} ${p.title}</title></g>`;
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
  const chip=p=>`<button class="zchip" data-id="${p.id}" style="--c:${THEMES[p.primary].c}" title="${p.title}"><span class="zn">No.${p.id}</span> ${p.title.length>26?p.title.slice(0,25)+"…":p.title}</button>`;
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
    <div class="zonenote">※ 各論文の本文・トリガー・用語からゾーン手がかり語を自動判定（厳密な実験的局在ではなく目安）。ゾーン非特異：${buckets.none.map(p=>"No."+p.id).join(" ")||"なし"}</div></div>`;
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
      ? `<span class="ok">正解！</span> 出典 <button class="relchip mini" data-id="${q.ans.pid}">No.${q.ans.pid}</button>`
      : `<span class="ng">不正解</span> 正しくは：${q.ans.desc} ／ 出典 <button class="relchip mini" data-id="${q.ans.pid}">No.${q.ans.pid}</button>${r.score===0?"（連続正解リセット）":""}`;
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
        <div class="fmeta">${a.fulljournalname||a.source||""}（${yr}）${have?' <span class="fhave">✓ 既収録</span>':""}</div></div>`;
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
        +`<text x='${lx.toFixed(1)}' y='${ly.toFixed(1)}' text-anchor='${side}' font-size='10' fill='var(--ink)' font-family=",monospace"${isMatch?" font-weight='700'":""}>${n.term}</text>`
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

/* ============================================================
   検索：全角/半角・大文字/小文字を正規化（NFKC＋小文字化。ＭＡＳＨ＝MASH）し、
   スペース区切りの語をすべて含む論文だけを残す（AND）。
   対象：書誌・テーマ・手法（approach・手法名）・本文・接続・用語集・研究ボード(struct)
   ============================================================ */
function norm(s){ return String(s==null?"":s).normalize("NFKC").toLowerCase(); }
let queryTerms=[];
function setQuery(raw){
  query=String(raw||"").trim();
  queryTerms=[...new Set(norm(query).split(/\s+/).filter(Boolean))];
}
function flatText(v){
  if(v==null) return "";
  if(Array.isArray(v)) return v.map(flatText).join(" ");
  if(typeof v==="object") return Object.values(v).map(flatText).join(" ");
  return String(v);
}
const SEARCH_FIELDS=[
  ["書誌",         p=>[p.title,p.authors,p.journal,p.year,p.vol,p.doi]],
  ["テーマ",       p=>[...paperThemes(p)].map(t=>"テーマ"+t+" "+t+"："+(THEMES[t]?THEMES[t].name:""))],
  ["手法",         p=>[p.approach,p.methods,(paperMethods[p.id]||[]).map(k=>METHOD_LABELS[k]||k)]],
  ["本文",         p=>[p.abstract_ja,p.abstract,p.background,p.achievements,p.limitations]],
  ["研究との接続", p=>[p.connection]],
  ["用語メモ",     p=>[(p.glossary||[]).map(g=>[g.term,g.full,g.desc])]],
  ["研究ボード",   p=>[p.struct]]
];
const _searchCache=new Map();
function searchFields(p){
  let f=_searchCache.get(p);
  if(!f){ f=SEARCH_FIELDS.map(([name,get])=>[name,norm(flatText(get(p)).replace(/\*\*/g,""))]); _searchCache.set(p,f); }
  return f;
}
function matchesQuery(p){
  if(!queryTerms.length) return true;
  const all=searchFields(p).map(x=>x[1]).join("\n");
  return queryTerms.every(q=>all.includes(q));
}
function matchedFields(p){
  return searchFields(p).filter(([,t])=>queryTerms.some(q=>t.includes(q))).map(([n])=>n);
}
// text 中で terms（正規化済み）に一致する範囲を、元の文字位置で返す
function findRanges(text,terms){
  let ns="", st=[], en=[];
  for(let i=0;i<text.length;){
    const ch=String.fromCodePoint(text.codePointAt(i)), n=norm(ch);
    for(let k=0;k<n.length;k++){ st.push(i); en.push(i+ch.length); }
    ns+=n; i+=ch.length;
  }
  const r=[];
  terms.forEach(t=>{ for(let x=ns.indexOf(t); x>=0; x=ns.indexOf(t,x+1)) r.push([st[x],en[x+t.length-1]]); });
  r.sort((a,b)=>a[0]-b[0]);
  const out=[];
  r.forEach(([a,b])=>{ const last=out[out.length-1]; if(last&&a<=last[1]) last[1]=Math.max(last[1],b); else out.push([a,b]); });
  return out;
}
// 描画済み DOM のテキストに <mark> を付ける（SVG・入力欄・ボタン類は対象外）
function highlightIn(root,terms){
  if(!root||!terms.length) return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){
    const el=n.parentElement;
    if(!el||el.closest("svg,textarea,select,option,script,style,mark,.matchhint,.cinema,.fav")) return NodeFilter.FILTER_REJECT;
    return n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
  }});
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n=>{
    const text=n.nodeValue, ranges=findRanges(text,terms);
    if(!ranges.length) return;
    const frag=document.createDocumentFragment(); let pos=0;
    ranges.forEach(([a,b])=>{
      if(a>pos) frag.append(text.slice(pos,a));
      const m=document.createElement("mark"); m.textContent=text.slice(a,b); frag.append(m); pos=b;
    });
    if(pos<text.length) frag.append(text.slice(pos));
    n.replaceWith(frag);
  });
}

/* ============================================================
   URL ハッシュで状態を保持する（例 #paper=48 / #view=terms&q=TGF）
   リンクで直接開けて、ブラウザの「戻る」で前の状態に戻れる。
   file:// でも動くよう location.hash / location.replace だけを使う。
   ============================================================ */
const VIEWS=["papers","board","terms","net","zone","quiz","feed","stats"];
const PSORTS=[...psortbar.querySelectorAll(".sbtn")].map(b=>b.dataset.psort);
const TSORTS=[...sortbar.querySelectorAll(".sbtn")].map(b=>b.dataset.sort);
let lastCommit=null, typingEntry=false, applyingHash=false;
function filterSig(){
  return query+"|"+[...activeThemes].sort().join(",")+"|"+themeMode+"|"+favOnly+"|"+readFilter+"|"+paperSort+"|"+[...activeMethods].sort().join(",");
}
function clearFilters(){ activeThemes.clear(); activeMethods.clear(); favOnly=false; readFilter=""; }
function stateToHash(omitPaper){
  const q=new URLSearchParams();
  if(currentView!=="papers") q.set("view",currentView);
  if(query) q.set("q",query);
  if(currentView==="papers"){
    if(activeThemes.size) q.set("theme",[...activeThemes].sort().join(","));
    if(activeThemes.size>=2&&themeMode==="AND") q.set("mode","and");
    if(activeMethods.size) q.set("method",[...activeMethods].sort().join(","));
    if(favOnly) q.set("fav","1");
    if(readFilter) q.set("read",readFilter);
    if(paperSort!=="id") q.set("sort",paperSort);
    if(paperPage>1) q.set("page",String(paperPage));
    if(openPaper&&!omitPaper) q.set("paper",openPaper);
  }
  if(currentView==="terms"&&sortMode!=="alpha") q.set("tsort",sortMode);
  return q.toString();
}
// kind: 省略=履歴に積む / "replace"=今の履歴を置き換え / "typing"=入力中は1件にまとめる
function commitState(kind){
  if(applyingHash) return;
  const h=stateToHash();
  if(h===lastCommit) return;
  const replace = kind==="replace" || (kind==="typing" && typingEntry);
  typingEntry = kind==="typing";
  lastCommit=h;
  if(replace) location.replace("#"+h); else location.hash=h;
}
function syncControls(){
  qInput.value=query;
  syncViewTabs();
  syncChipActive(); setFilterLabel();
  modetoggle.textContent=themeMode; modetoggle.classList.toggle("on",themeMode==="AND");
  buildMChips(); setMethodLabel();
  favfilter.classList.toggle("on",favOnly);
  readfilter.textContent=READ_FILTER_LABEL[readFilter]; readfilter.classList.toggle("on",readFilter!=="");
  psortbar.querySelectorAll(".sbtn").forEach(x=>x.classList.toggle("active",x.dataset.psort===paperSort));
  sortbar.querySelectorAll(".sbtn").forEach(x=>x.classList.toggle("active",x.dataset.sort===sortMode));
}
function applyHash(hash,initial){
  const h=String(hash||"").replace(/^#/,"");
  const q=new URLSearchParams(h);
  const prevKey=stateToHash(true), prevView=currentView;
  applyingHash=true;
  const v=q.get("view"); currentView=VIEWS.includes(v)?v:"papers";
  setQuery(q.get("q")||"");
  if(currentView==="papers"){
    activeThemes=new Set((q.get("theme")||"").split(",").filter(t=>THEMES[t]));
    themeMode=q.get("mode")==="and"?"AND":"OR";
    activeMethods=new Set((q.get("method")||"").split(",").filter(k=>METHOD_LABELS[k]));
    favOnly=q.get("fav")==="1";
    readFilter=READ_FILTER_CYCLE.includes(q.get("read"))?q.get("read"):"";
    paperSort=PSORTS.includes(q.get("sort"))?q.get("sort"):"id";
    paperPage=Math.max(1,parseInt(q.get("page"),10)||1);
    openPaper=q.get("paper")||"";
    if(openPaper){
      // 指定の論文が今の絞り込みで見えなければ絞り込みを外し、その論文のあるページへ
      if(!PAPERS.some(p=>p.id===openPaper)) openPaper="";
      else{
        let full=sortPapers(PAPERS.filter(matches));
        if(!full.some(p=>p.id===openPaper)){ clearFilters(); setQuery(""); full=sortPapers(PAPERS.filter(matches)); }
        paperPage=Math.floor(full.findIndex(p=>p.id===openPaper)/PAGE_SIZE)+1;
      }
    }
  }
  if(currentView==="terms") sortMode=TSORTS.includes(q.get("tsort"))?q.get("tsort"):"alpha";
  lastSig=filterSig();
  syncControls();
  // 論文の開閉だけが変わった場合は描画し直さず、カードの開閉だけを行う
  const onlyPaper=!initial&&prevView==="papers"&&currentView==="papers"&&prevKey===stateToHash(true)&&grid.querySelector(".card");
  if(onlyPaper){
    grid.querySelectorAll(".card.open").forEach(c=>{ if(c.dataset.id!==openPaper) setCardOpen(c,false); });
  }else refresh();
  applyingHash=false;
  lastCommit=stateToHash();
  if(lastCommit!==h && (h||lastCommit)) location.replace("#"+lastCommit);
  typingEntry=false;
  if(currentView==="papers"&&openPaper) revealCard(openPaper);
}

/* ============================================================
   端末内データ（既読・★・メモ・ToDo）の JSON 書き出し／読み込み
   PC とスマホの間で移すためのもの。読み込みは今のデータと統合する。
   ============================================================ */
function exportUserData(){
  // 中身のない項目（描画時に作られる空オブジェクト）は省く
  const data=Object.fromEntries(Object.entries(userData).filter(([,v])=>v&&typeof v==="object"&&Object.keys(v).length));
  const payload={app:"liver-papers",kind:"userData",version:1,key:UD_KEY,exportedAt:new Date().toISOString(),userData:data};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const d=new Date(), pad=n=>String(n).padStart(2,"0");
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=`liver-papers-userdata-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}.json`;
  document.body.appendChild(a); a.click();
  setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },1500);
}
function mergeUserData(inc){
  let papers=0, memoBoth=0;
  for(const [k,v] of Object.entries(inc)){
    if(!v||typeof v!=="object"||Array.isArray(v)) continue;
    const cur=userData[k]||(userData[k]={});
    if(k.startsWith("_")){ Object.assign(cur,v); continue; }
    papers++;
    for(const [f,val] of Object.entries(v)){
      if(f==="memo"){
        const a=cur.memo||"", b=val||"";
        if(!a||b.includes(a)) cur.memo=b;
        else if(b&&!a.includes(b)){ cur.memo=a+"\n\n――（読み込んだメモ）――\n"+b; memoBoth++; }
      }else if(f==="todos"&&val&&typeof val==="object") cur.todos=Object.assign(cur.todos||{},val);
      else cur[f]=val;
    }
  }
  return {papers,memoBoth};
}
function importUserDataFile(file){
  const rd=new FileReader();
  rd.onload=()=>{
    let obj;
    try{ obj=JSON.parse(rd.result); }catch(e){ alert("JSON として読めませんでした："+e.message); return; }
    const inc=obj&&obj.app==="liver-papers"&&obj.userData ? obj.userData : obj;
    if(!inc||typeof inc!=="object"||Array.isArray(inc)){ alert("このライブラリの書き出しファイルではないようです。"); return; }
    const n=Object.keys(inc).filter(k=>!k.startsWith("_")).length;
    if(!confirm(`${n} 本ぶんの既読・★・メモを読み込み、この端末のデータと統合します。\n同じ項目は読み込んだ内容で上書きし、メモが食い違う場合は両方を残します。\nよろしいですか？`)) return;
    const r=mergeUserData(inc);
    saveUserData(); refresh();
    alert(`読み込みました（${r.papers} 本${r.memoBoth?`、うちメモを両方残したもの ${r.memoBoth} 本`:""}）。`);
  };
  rd.readAsText(file);
}
const udFile=document.getElementById("udFile");
document.querySelectorAll("[data-ud=export]").forEach(b=>b.addEventListener("click",exportUserData));
document.querySelectorAll("[data-ud=import]").forEach(b=>b.addEventListener("click",()=>udFile.click()));
udFile.addEventListener("change",()=>{ if(udFile.files[0]) importUserDataFile(udFile.files[0]); udFile.value=""; });

// 固定表示の操作バーの高さを CSS 変数へ（カードへスクロールした時に隠れないように）
(function trackStickyHeight(){
  const c=document.querySelector(".controls"); if(!c) return;
  const set=()=>document.documentElement.style.setProperty("--sticky-h",c.offsetHeight+"px");
  set(); if(window.ResizeObserver) new ResizeObserver(set).observe(c); else addEventListener("resize",set);
})();

/* ============================================================
   図の拡大表示（ライトボックス）
   .figbox（概念図・Method図）をタップ／クリックで全画面に。SVG の viewBox を動かして
   拡大・移動するので、どの倍率でも線と文字がぼやけない。
   操作：ピンチ／ホイール＝拡大縮小、ドラッグ＝移動、ダブルタップ＝2倍⇔全体、
         キーボード＝ + − 0 矢印 Esc
   ============================================================ */
const lightbox=(()=>{
  const box=document.getElementById("lightbox"), stage=document.getElementById("lbStage"),
        canvas=document.getElementById("lbCanvas"), titleEl=document.getElementById("lbTitle"),
        zoomEl=document.getElementById("lbZoom"), hint=document.getElementById("lbHint");
  let svg=null, base=null, vb=null, lastFocus=null, hintT=0;
  const ptrs=new Map(); let pinch=null, lastTap=0;
  const MAXZ=8, MINZ=1;
  function setVB(){
    svg.setAttribute("viewBox",`${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
    zoomEl.textContent=Math.round(base.w/vb.w*100)+"%";
  }
  function clampPan(){
    // 図が画面外へ逃げないよう、表示範囲の中心が図の内側に残るようにする
    const cx=Math.min(Math.max(vb.x+vb.w/2,base.x),base.x+base.w), cy=Math.min(Math.max(vb.y+vb.h/2,base.y),base.y+base.h);
    vb.x=cx-vb.w/2; vb.y=cy-vb.h/2;
  }
  function toSvg(cx,cy){ // 画面座標 → SVG 座標
    const m=svg.getScreenCTM(); if(!m) return {x:vb.x+vb.w/2,y:vb.y+vb.h/2};
    const p=new DOMPoint(cx,cy).matrixTransform(m.inverse()); return {x:p.x,y:p.y};
  }
  function zoomAt(f,cx,cy){
    const z=base.w/vb.w, nz=Math.min(MAXZ,Math.max(MINZ,z*f)); f=nz/z; if(f===1) return;
    const p=cx==null?{x:vb.x+vb.w/2,y:vb.y+vb.h/2}:toSvg(cx,cy);
    vb.x=p.x-(p.x-vb.x)/f; vb.y=p.y-(p.y-vb.y)/f; vb.w/=f; vb.h/=f;
    if(nz===MINZ) vb={...base}; else clampPan();
    setVB();
  }
  function panBy(dx,dy){ // 画面のピクセル量で移動
    const m=svg.getScreenCTM(); if(!m) return;
    vb.x-=dx/m.a; vb.y-=dy/m.d; clampPan(); setVB();
  }
  function fit(){ vb={...base}; setVB(); }
  function open(srcSvg,title){
    lastFocus=document.activeElement;
    canvas.innerHTML=""; svg=srcSvg.cloneNode(true);
    svg.removeAttribute("width"); svg.removeAttribute("height");
    svg.setAttribute("preserveAspectRatio","xMidYMid meet");
    const v=(svg.getAttribute("viewBox")||"0 0 640 232").trim().split(/[\s,]+/).map(Number);
    base={x:v[0],y:v[1],w:v[2],h:v[3]};
    canvas.appendChild(svg); fit();
    titleEl.textContent=title||"";
    box.hidden=false; document.documentElement.classList.add("noscroll");
    hint.textContent=(innerHeight>innerWidth&&innerWidth<700)
      ? "ピンチで拡大・ドラッグで移動（横向きにすると大きく表示できます）"
      : "ピンチ／ホイールで拡大・ドラッグで移動・ダブルタップで2倍";
    hint.style.opacity="1"; clearTimeout(hintT); hintT=setTimeout(()=>hint.style.opacity="0",3200);
    box.querySelector('[data-lb="close"]').focus();
  }
  function close(){
    if(box.hidden) return;
    box.hidden=true; canvas.innerHTML=""; svg=null; ptrs.clear(); pinch=null;
    document.documentElement.classList.remove("noscroll");
    if(lastFocus&&lastFocus.focus) lastFocus.focus();
  }
  box.addEventListener("click",e=>{
    const b=e.target.closest("[data-lb]"); if(!b) return;
    const a=b.dataset.lb;
    if(a==="close") close(); else if(a==="fit") fit(); else zoomAt(a==="in"?1.5:1/1.5);
  });
  stage.addEventListener("wheel",e=>{ if(!svg) return; e.preventDefault(); zoomAt(Math.exp(-e.deltaY*(e.ctrlKey?0.01:0.0018)),e.clientX,e.clientY); },{passive:false});
  stage.addEventListener("pointerdown",e=>{
    if(!svg) return;
    try{ stage.setPointerCapture(e.pointerId); }catch(_){}
    ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
    stage.classList.add("drag");
    if(ptrs.size===2){ const [a,b]=[...ptrs.values()]; pinch={d:Math.hypot(a.x-b.x,a.y-b.y),mx:(a.x+b.x)/2,my:(a.y+b.y)/2}; }
    // ダブルタップ（タッチ）／ダブルクリック：2倍⇔全体
    const now=performance.now();
    if(ptrs.size===1&&now-lastTap<300){ if(base.w/vb.w>1.05) fit(); else zoomAt(2,e.clientX,e.clientY); lastTap=0; }
    else lastTap=now;
  });
  stage.addEventListener("pointermove",e=>{
    const prev=ptrs.get(e.pointerId); if(!prev||!svg) return;
    const cur={x:e.clientX,y:e.clientY}; ptrs.set(e.pointerId,cur);
    if(ptrs.size===1) panBy(cur.x-prev.x,cur.y-prev.y);
    else if(ptrs.size===2&&pinch){
      const [a,b]=[...ptrs.values()], d=Math.hypot(a.x-b.x,a.y-b.y), mx=(a.x+b.x)/2, my=(a.y+b.y)/2;
      panBy(mx-pinch.mx,my-pinch.my); if(pinch.d>0) zoomAt(d/pinch.d,mx,my);
      pinch={d,mx,my};
    }
  });
  const up=e=>{ ptrs.delete(e.pointerId); if(ptrs.size<2) pinch=null; if(!ptrs.size) stage.classList.remove("drag"); };
  stage.addEventListener("pointerup",up); stage.addEventListener("pointercancel",up);
  document.addEventListener("keydown",e=>{
    if(box.hidden) return;
    const k=e.key, step=40;
    if(k==="Escape") close();
    else if(k==="+"||k==="=") zoomAt(1.4);
    else if(k==="-"||k==="_") zoomAt(1/1.4);
    else if(k==="0") fit();
    else if(k==="ArrowLeft") panBy(step,0); else if(k==="ArrowRight") panBy(-step,0);
    else if(k==="ArrowUp") panBy(0,step); else if(k==="ArrowDown") panBy(0,-step);
    else if(k==="Tab"){ // フォーカスをダイアログ内に閉じ込める
      const f=[...box.querySelectorAll("button")]; const i=f.indexOf(document.activeElement);
      e.preventDefault(); f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus();
    } else return;
    e.preventDefault();
  });
  // 一覧側：.figbox をクリック／Enter で開く（イベント委譲）
  const openFrom=fb=>{
    const s=fb.querySelector("svg"); if(!s) return;
    const card=fb.closest(".card"), h=fb.closest(".sec")&&fb.closest(".sec").querySelector("h4");
    open(s,(card?"No."+card.dataset.id+" ":"")+(h?h.textContent:""));
  };
  document.addEventListener("click",e=>{ const fb=e.target.closest(".figbox"); if(fb) openFrom(fb); });
  document.addEventListener("keydown",e=>{ if((e.key==="Enter"||e.key===" ")&&e.target.classList&&e.target.classList.contains("figbox")){ e.preventDefault(); openFrom(e.target); } });
  return {open,close};
})();

/* ============================================================
   表示設定パネル（歯車）
   文字サイズ・図の倍率・行間/余白・テーマ・アニメーションを CSS 変数と html の属性で一括して
   切り替え、localStorage（DISPLAY_KEY）に保存する。値の対応表と反映処理は index.html の <head>。
   ============================================================ */
const displaySettings=(()=>{
  const panel=document.getElementById("settings"), back=document.getElementById("setBack"),
        gear=document.getElementById("gearBtn");
  let cur=loadDisplay(), lastFocus=null;
  function syncCinema(){
    CINEMA_PREFS.speed = cur.motion==="slow" ? DISPLAY_PRESETS.motion.slow : 1;
    CINEMA_PREFS.autoplay = cur.motion!=="off";
  }
  function syncForm(){
    panel.querySelectorAll(".seg").forEach(seg=>{
      const k=seg.dataset.key;
      seg.querySelectorAll("input").forEach(i=>{ i.checked=(i.value===cur[k]); });
    });
  }
  function save(){ try{ localStorage.setItem(DISPLAY_KEY,JSON.stringify(cur)); }catch(e){} }
  function set(k,v){
    cur[k]=v; applyDisplay(cur); syncCinema(); save();
    if(k==="fs"||k==="density") document.dispatchEvent(new Event("displaychange"));
  }
  panel.addEventListener("change",e=>{
    const i=e.target; if(!i.matches('input[type="radio"]')) return;
    set(i.closest(".seg").dataset.key,i.value);
  });
  document.getElementById("setReset").addEventListener("click",()=>{
    cur=Object.assign({},DISPLAY_DEFAULTS); applyDisplay(cur); syncCinema(); syncForm();
    try{ localStorage.removeItem(DISPLAY_KEY); }catch(e){}
  });
  function open(){
    lastFocus=document.activeElement; syncForm();
    panel.hidden=false; back.hidden=false; gear.setAttribute("aria-expanded","true");
    (panel.querySelector("input:checked")||panel.querySelector("button")).focus();
  }
  function close(){
    if(panel.hidden) return;
    panel.hidden=true; back.hidden=true; gear.setAttribute("aria-expanded","false");
    if(lastFocus&&lastFocus.focus) lastFocus.focus();
  }
  gear.addEventListener("click",()=>panel.hidden?open():close());
  back.addEventListener("click",close);
  document.getElementById("setClose").addEventListener("click",close);
  panel.addEventListener("keydown",e=>{
    if(e.key==="Escape"){ e.preventDefault(); close(); }
    else if(e.key==="Tab"){ // フォーカスをパネル内に閉じ込める（ラジオは各グループの選択中のものだけが Tab 対象）
      const f=[...panel.querySelectorAll("button,input:checked")];
      const i=f.indexOf(document.activeElement);
      if(e.shiftKey&&i<=0){ e.preventDefault(); f[f.length-1].focus(); }
      else if(!e.shiftKey&&i===f.length-1){ e.preventDefault(); f[0].focus(); }
    }
  });
  syncCinema(); syncForm();
  return {open,close,get:()=>Object.assign({},cur)};
})();
// 文字サイズ・余白を変えたら固定バーの高さを測り直す
document.addEventListener("displaychange",()=>{ const c=document.querySelector(".controls"); if(c) document.documentElement.style.setProperty("--sticky-h",c.offsetHeight+"px"); });

// updated date = newest entry year-ish placeholder → use today on open
document.getElementById("updated").textContent=new Date().toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"});
applyHash(location.hash,true);
window.addEventListener("hashchange",()=>{ const h=location.hash.replace(/^#/,""); if(h!==lastCommit) applyHash(h,false); });
