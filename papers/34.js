/* ============================================================
   №34 · JHEP Reports 2025 · Rautou PE, Chotkoe S, Biquard L et al.
   ヒトMASLDでLSEC capillarization（CD34染色）は単純性脂肪化の小葉領域から増加し線維化と相関——lanifibranorは周門脈域の改善例を増やし、ラットでは門脈圧・肝内血管抵抗を正常化
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"34", primary:"E",
    title:"ヒトMASLDでLSEC capillarization（CD34染色）は単純性脂肪化の小葉領域から増加し線維化と相関——lanifibranorは周門脈域の改善例を増やし、ラットでは門脈圧・肝内血管抵抗を正常化",
    authors:"Rautou PE, Chotkoe S, Biquard L et al.",
    journal:"JHEP Reports",
    year:2025,
    vol:"7(6):101366",
    doi:"10.1016/j.jhepr.2025.101366",
    url:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12142333/",
    catPrimary:"E",
    catSub:["H","D"],
    tags:["E","B","H"],
    summary:"NATIVE試験（MASH対象のphase IIb）に関連する肝生検（ベースライン249例）でLSEC capillarizationのマーカーCD34を免疫染色で評価し、2種のラットMASLDモデル（MCDD食4週の早期脂肪化モデル、Zucker fattyラット＋高脂肪高フルクトース食のMASHモデル）でlanifibranorと単独PPARアゴニストを比較した原著。小葉領域のCD34染色は単純性脂肪化（MASL）で非MASLDより強く、MASH発症前からcapillarizationが存在した。CD34陽性血管密度は線維化と強く、炎症とは弱く相関し、脂肪化・風船様変性とは関連しなかった。パン-PPARアゴニスト（PPAR-α/β/γ）lanifibranorの24週投与では、CD34陽性血管密度は変わらなかったが、周門脈域スコアの改善例が増え、小葉域スコアの悪化例が減った。ラットでは、lanifibranorが門脈圧・肝内血管抵抗・内皮機能の異常を正常化または大きく改善した（MCDDモデルではCD34染色もほぼ正常化、MASHモデルではCD34の変化は有意でなかった）。単独PPARアゴニストの効果は部分的だった。",
    connection:["MASLD早期からLSEC機能不全（capillarization）が存在するというこの知見は「steatosisだけでも機能モデルとして不十分ではない」という主張の根拠になる。LSEC fenestrae維持・capillarization評価（電子顕微鏡やLYVE-1染色。なお本研究の評価はCD34免疫染色）を肝オープンオルガノイドの機能評価項目に加える動機づけ。lanifibranorはin vitro共培養系でのPPAR活性化実験につながる。No.35（Qu 2024 LSECと肝線維化の総説）と組み合わせて臨床×概念の統合的理解が得られる。"],
    methods:["ヒト肝生検（NATIVE試験関連・MASLD患者）","ラットモデル（MCDD食、Zucker fattyラット＋高脂肪高フルクトース食）","CD34免疫組織化学（病理スコア＋自動定量）","門脈圧・肝灌流（経肝圧較差）・血管鋳型SEM","lanifibranor・単独PPARアゴニスト投与実験"],
    "approach": "ヒト肝生検（NATIVE試験関連・MASLD患者）＋ ラット2モデル（MCDD食・Zucker fatty＋高脂肪高フルクトース食） ＋ CD34免疫染色・門脈圧/肝灌流・血管鋳型SEM ＋ lanifibranor（パンPPARアゴニスト）・単独PPARアゴニスト投与",
    "added": "2026-06-15",
    "abstract_ja": "MASLDにおけるLSEC変化とその治療応答のデータは限られていた。本研究はNATIVE試験の肝生検（ベースライン249例、投与後173例）でLSEC capillarizationのマーカーCD34を評価し、小葉領域のCD34染色が単純性脂肪化の段階から非MASLDより強く、MASHでさらに増加し、線維化と強く、炎症とはより弱く相関することを示した。パンPPARアゴニストlanifibranorの24週投与は周門脈域CD34の改善例を増やし、小葉域の悪化を減らした。2種のラットMASLDモデルでは、CD34染色・門脈圧・肝内血管抵抗の上昇と内皮機能障害が見られ、lanifibranorはこれらを正常化または大きく改善し、単独PPARアゴニストは部分的改善にとどまった。脂肪化のみの段階でも血管側の変化が始まっている点を強調する。",
    "background": "MASLDは脂肪化→炎症→線維化と進行するが、LSECの構造・機能異常がどの段階から始まるかは議論があった。capillarizationが早期から存在すれば、steatosis段階での介入標的となりうる。",
    "achievements": ["ヒトMASLD生検（n=249）で**小葉領域のCD34染色が単純性脂肪化の段階から非MASLDより強く**、MASHでさらに増加し、線維化と強く相関する（脂肪化・風船様変性とは無関連）ことを示した。", "ラット2モデルで**早期MASLDにcapillarization・門脈圧上昇・肝内血管抵抗上昇・内皮機能障害**が存在することを示した（線維化は両モデルで未発症）。", "**lanifibranor（パンPPARアゴニスト）**がヒトで周門脈域CD34の改善例を増やし小葉域の悪化を減らし、ラットで門脈圧・肝内血管抵抗を正常化した（単独PPARアゴニストは部分的改善）。"],
    "limitations": ["ヒトの解析は横断的観察が中心で、capillarizationと線維化の因果の時間順序は証明されていない。", "ヒトではlanifibranorはCD34陽性血管密度自体を変えず、改善は周門脈域スコアの改善例増加などに限られる。ラットのMASHモデルでもCD34の変化は有意でない。", "CD34はcapillarizationの間接指標であり、ラットモデルは線維化を伴わず、ヒトの病態との対応に注意を要する。"],
    "glossary": [{"term": "lanifibranor", "full": "lanifibranor（パンPPARアゴニスト）", "desc": "PPARα/δ/γを活性化するパンPPARアゴニスト。ヒトで周門脈域CD34の改善例を増やし、ラットで門脈圧・肝内血管抵抗を改善したMASH治療候補"}, {"term": "capillarization", "full": "capillarization（毛細血管化）", "desc": "MASLD早期（単純性脂肪化の小葉域）から見られるLSECの変化。CD34染色で評価され線維化と相関"}, {"term": "PPAR", "full": "peroxisome proliferator-activated receptor", "desc": "脂質代謝・抗線維化に関わる核内受容体。lanifibranorの標的"}],
    "struct": {"model": "ヒト肝生検 + ラット", "cells": ["LSEC", "HSC", "肝細胞"], "triggers": ["MASLD（MCDD食/高脂肪高フルクトース食）", "lanifibranor（治療）"], "steatosis": "○", "inflammation": "△", "fibrosis": "○", "readout": ["CD34染色（小葉域/周門脈域）", "門脈圧・肝内血管抵抗", "内皮機能（ACh応答）", "線維化・炎症スコア"], "ignite": "steatosis段階からのLSEC capillarizationが線維化と正相関（早期の血管異常）", "params": [{"name": "steatosis→早期capillarization", "note": "脂肪化のみでもLSEC機能不全が始まる＝機能評価にcapillarizationを追加する根拠"}, {"name": "PPAR活性化→capillarization軽減", "note": "lanifibranorを共培養のPPAR活性化介入として実装"}], "todos": ["LSEC fenestrae/capillarizationを機能評価項目に追加", "lanifibranorで共培養のcapillarization軽減を検証"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m34' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：ヒト生検＋ラットでCD34を評価</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① ヒト/ラット</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>MASLD患者</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>MASLDラット2モデル</text>\n  <text x='84' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--accent)'>臨床×モデル</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m34)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>② 組織・血行動態</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>CD34免疫染色</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>門脈圧・灌流</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>血管鋳型SEM</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m34)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>③ 関連解析</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>CD34陽性血管密度</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>小葉域/周門脈域</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--G)'>線維化と相関</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m34)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>④ lanifibranor</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>パンPPAR作動</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--H)'>CD34改善・門脈圧低下</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Rautou PE, Chotkoe S et al., JHEP Reports (2025)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f34' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>単純脂肪化の段階から既にLSEC機能不全がある</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>steatosis（早期）</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脂肪化のみ</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>すでにcapillarization</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f34)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>LSEC機能不全</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>CD34染色の増加</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--E)'>線維化と正相関</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f34)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>lanifibranor</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>PPAR活性化</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--H)'>CD34改善・門脈圧低下</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>『steatosisだけのモデルは不十分』の根拠</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("34", [{ic:"human",cap:"ヒトMASLD肝組織"}, {ic:"mouse",cap:"ラットMASLDモデル（MCDD・Zucker）"}, {ic:"endothelial",cap:"LSEC capillarization（CD34染色）"}, {ic:"drug",cap:"lanifibranor（パンPPARアゴニスト）"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 34 Rautou 2025 JHEP Reports: ヒトMASLD LSEC + lanifibranor */
LP.methods("34", ["human","mouse","imaging","drug","wb"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №34 単純脂肪化の段階から既にLSEC機能不全がある ===== */
LP.cinema("34", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("34")}${GLYPH.arrow("34e","var(--E)")}${GLYPH.arrow("34h","var(--H)")}</defs>`
    +GLYPH.title("単純脂肪化（steatosis）の段階で既にLSECがcapillarization——線維化と正相関")
    +GLYPH.hep("hep34",30,50,0.85,"肝細胞")
    +`<path id="lsecWall34" d="M0,200 C180,185 540,215 720,198" fill="none" stroke="var(--E)" stroke-width="2.4"/>`
    +`<g id="fen34">`+[...Array(11)].map((_,i)=>`<circle id="f34_${i}" cx="${50+i*60}" cy="${200+Math.sin(i)*2}" r="3.2" fill="#eef3f6"/>`).join("")+`</g>`
    +`<text x="20" y="235" font-size="10" fill="var(--ink-soft)">LSEC</text>`
    +GLYPH.stellate("hsc34",380,310,"肝星細胞")
    +`<g id="corr34" class="fade"><text x="540" y="280" font-size="10" fill="var(--B)" font-weight="600">capillarization度</text><text x="540" y="296" font-size="9.5" fill="var(--B)">∝ 線維化重症度</text></g>`
    +GLYPH.pill("lani34",580,100,"lanifibranor",100)
    +GLYPH.badge("recov34",580,330,"CD34染色","改善 ✓","var(--E)"),
  build(K){
    const dp=[[100,100],[140,130],[115,155],[170,120],[155,165]];
    const N=11;
    const closeFen=()=>{for(let i=0;i<N;i++)K.T(()=>{const c=K.$("f34_"+i);if(c){const t0=performance.now(),from=+c.getAttribute("r");const st=now=>{const q=Math.max(0,Math.min(1,(now-t0)/700));c.setAttribute("r",(from*(1-q)).toFixed(2));if(q<1)K.raf(st);};K.raf(st);}},i*40);};
    const openFen=()=>{for(let i=0;i<N;i++)K.T(()=>{const c=K.$("f34_"+i);if(c){const t0=performance.now();const st=now=>{const q=Math.max(0,Math.min(1,(now-t0)/700));c.setAttribute("r",(3.2*q).toFixed(2));if(q<1)K.raf(st);};K.raf(st);}},i*40);};
    return [
      {color:"E",t:2400,cap:"健常な肝類洞。LSECのfenestrae（小孔）が開き、肝細胞への物質輸送を媒介する。",run(){}},
      {color:"D",t:3800,cap:"① 過栄養で肝細胞に脂肪滴が蓄積（steatosis）。この「単純脂肪化」の段階で既にLSECのcapillarizationが始まっている。",run(){
        addDrops(K,"hep34Drops",dp,"lip34");
        K.T(closeFen,1200);
        K.T(()=>{K.attr("lsecWall34","stroke","var(--D)");K.attr("lsecWall34","stroke-width","3.5");},2000);
      }},
      {color:"B",t:3200,cap:"② capillarizationの程度（CD34染色）は線維化重症度と強く相関する。steatosis段階から血管側の変化が始まっている。",run(){
        K.show(["corr34"]);
        K.pulse("corr34");
        K.T(()=>K.unpulse("corr34"),2200);
      }},
      {color:"H",t:3600,cap:"③ パンPPARアゴニストlanifibranorで、ヒトでは周門脈域のcapillarization改善例が増え、ラットでは門脈圧・肝内血管抵抗が正常化する。",run(){
        K.show(["lani34"]);
        K.T(()=>{K.flow(580,116,380,198,"var(--H)",{n:2,dur:1.2,loop:2});},400);
        K.T(()=>{K.attr("lsecWall34","stroke","var(--E)");K.attr("lsecWall34","stroke-width","2.4");openFen();K.show(["recov34"]);},1800);
      }},
    ];
  }
});
