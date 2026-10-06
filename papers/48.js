/* ============================================================
   №48 · Lab Chip 2025 · Balachander GM, Ng IC, Pai RR, ..., Tasnim F, Ng HH, Yu H
   LEADS——iPSC由来4細胞の肝チップでMASH表現型を出したが、薬剤では戻せなかった
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"48", primary:"A",
    title:"LEADS——iPSC由来4細胞の肝チップでMASH表現型を出したが、薬剤では戻せなかった",
    authors:"Balachander GM, Ng IC, Pai RR, ..., Tasnim F, Ng HH, Yu H",
    journal:"Lab Chip",
    year:2025,
    vol:"25(14):3444-3466",
    doi:"10.1039/d5lc00221d",
    url:"https://doi.org/10.1039/d5lc00221d",
    tags:["A","B","D","H","I"],
    "approach": "in vitro（hiPSC由来の肝細胞・HSC・LSEC・KCを側流路つきマイクロ流体チップに階層配置）＋ FFA・フルクトース・LPS・フェニル酢酸による多段階の病態誘導 ＋ resmetirom等の薬剤応答評価",
    "added": "2026-09-20",
    "abstract_ja": "ヒトiPSCから分化させた肝細胞・肝星細胞・類洞内皮細胞・クッパー細胞の4種を、側流路を備えたマイクロ流体デバイス上に階層的に配置したLEADSは、脂肪化から炎症・線維化までを一つの系で扱うことを狙ったMASHモデルである。遊離脂肪酸とフルクトースを基礎の負荷とし、そこへLPSとフェニル酢酸（PAA）を第2ヒットとして重ねる処方により、脂質蓄積・炎症性サイトカイン・コラーゲン沈着といった指標が得られた。さらにresmetiromをはじめとする薬剤を投与して応答を評価しているが、線維化の可逆性は限定的で、著者ら自身はその理由をiHSCが強く活性化した状態にあることに帰している。実際、分化プロトコルの最終段階はレチノールとパルミチン酸の添加であり、得られたiHSCはαSMAとGFAPの陽性として特徴づけられている。したがってこの系が捉えているのは静止期HSCが点火する過程というより、すでに活性化した細胞がコラーゲンを増産する過程だと読むのが妥当である。",
    "background": "ヒト細胞だけで構成されたMASHモデルで線維化まで到達した報告は乏しく、とりわけ非実質細胞を揃えた系では、脂肪化は出るが線維化が点火しないという壁が共通していた。一方で薬剤評価に使うには、病態が出るだけでなく薬剤で戻ることまで示す必要があり、誘導の強さと可逆性のあいだにどのような関係があるのかは明らかでなかった。iPSC由来の各細胞種の分化プロトコルが整ってきたことで、4細胞を同一デバイス上に配置して病態経過を追う試みが現実的になっていた。",
    "achievements": ["hiPSC由来の肝細胞・HSC・LSEC・KCを側流路つきチップに配置した**LEADS**を構築し、脂肪化・炎症・線維化の指標を同一系で取得した。", "FFAとフルクトースに加えて**LPSとPAAを第2ヒット**として与える処方で、MASH様の表現型を誘導した。", "resmetiromを含む薬剤応答を評価し、**線維化の可逆性が限定的である**ことを報告した。", "誘導の強さと薬剤評価のダイナミックレンジがトレードオフになりうることを、実データとして提示した。"],
    "limitations": ["iHSCは2Dプラスチックの側流路上に置かれ、分化の最終段階がレチノール＋パルミチン酸で、αSMA/GFAP陽性として確認されている。つまり**出発点ですでに活性化**しており、静止期HSCが点火する過程を見ているわけではない。著者自身も薬剤で戻りにくい理由をiHSCの強い活性化に帰している。", "溶媒のエタノールが合計で**約2.4% v/v（≈410 mM）**に達する（PAAだけで2.0%）。アルコール性脂肪肝の誘導に使われる25–100 mMを大きく超えるが、論文中に％表示はない。", "「FFA＋フルクトース単独では脂肪化しないがLPS＋PAAで出る」という結果は、エタノール濃度が0.4%から2.4%へ跳ね上がる地点とちょうど一致しており、溶媒の寄与を切り分けられない。", "resmetiromの健常群にvehicle対照が置かれておらず、エタノールの効果が見えるはずの唯一の比較が提示されていない。"],
    "connection": ["目的も細胞構成も最も近い競合であり、iKCの由来（Tasnim 2019）も共通している。著者にTasnimとHanry Yuが入る。", "刺激強度はPA 300 µM（自分の系は67 µMで4.5倍）、総FFA 600 µM（対200 µM）、フルクトース100 mM（対5.5–22 mM）。ただしフルクトース100 mMは根拠の示されない固定値で、浸透圧が3割ほど増えるためそのまま真似する理由はない。", "「線維化を出したが薬剤で戻せなかった」は、点火強度と薬剤評価のダイナミックレンジがトレードオフであることの実例である。設計目標は最大限に点火する条件ではなく、**薬剤効果が見える窓が残る条件**に置くべきだという示唆になる。", "自分の系でも第6回で**Veh単独がAOA200より傷害が高く、脂肪化もわずかに増えていた**。溶媒の問題は他人事ではない。"],
    "glossary": [{"term": "LEADS", "full": "liver evaluation and disease system", "desc": "hiPSC由来4細胞を側流路つきチップに配置したMASHモデルの名称"}, {"term": "iHSC", "full": "iPSC-derived hepatic stellate cell", "desc": "iPSCから分化させた肝星細胞。分化終盤のレチノール＋パルミチン酸で活性化しやすい"}, {"term": "iKC", "full": "iPSC-derived Kupffer cell", "desc": "iPSCから分化させたクッパー細胞様細胞。Tasnim 2019のプロトコルに由来する"}, {"term": "resmetirom", "full": "resmetirom", "desc": "肝選択的な甲状腺ホルモン受容体βアゴニスト。MASHの承認薬"}, {"term": "vehicle", "full": "vehicle control", "desc": "薬剤や脂質を溶かす溶媒のみを与える対照。溶媒自体の効果を切り分けるために置く"}, {"term": "MPS", "full": "microphysiological system", "desc": "微小生理システム。臓器の機能単位をマイクロデバイス上に再構成した培養系"}],
    "struct": {"model": "in vitro", "cells": ["iPSC由来肝細胞", "iHSC", "iLSEC", "iKC"], "triggers": ["FFA（PA 300 µM / 総600 µM）", "フルクトース100 mM", "LPS", "PAA 10 mM"], "steatosis": "○", "inflammation": "○", "fibrosis": "○", "readout": ["脂質染色", "炎症性サイトカイン", "コラーゲン/αSMA", "薬剤応答（resmetirom等）"], "ignite": "LPS＋PAAの第2ヒット。ただしiHSCが既に活性化しており、点火というより増産", "params": [{"name": "PA 300 µM / 総FFA 600 µM", "note": "自分の系の4.5倍/3倍。用量反応の上端を与える"}, {"name": "フルクトース100 mM", "note": "浸透圧が約3割増える。根拠の示されない固定値"}, {"name": "エタノール総量 ≈2.4% v/v", "note": "交絡因子。溶媒を変えるか濃度を下げるという設計制約になる"}], "todos": ["自分の系のVeh単独条件を、エタノール濃度を段階的に振って再評価する", "PAAを使う場合はDMSOなど別溶媒か、エタノールを0.5%以下に抑える処方を組む", "ESI Table S2と透明査読記録をGakuNin経由で確認する"]},
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f48' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>点火は強いが戻らない——誘導強度と可逆性のトレードオフ</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>4細胞チップ</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>hiPSC由来 肝細胞/HSC</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>LSEC/KC 側流路配置</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f48)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>第1ヒット</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>FFA 600 µM</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>フルクトース100 mM</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f48)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>第2ヒット</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>LPS＋PAA 10 mM</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>エタノール≈2.4% v/v</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f48)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>帰結</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>線維化は出る</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>薬剤では戻らない</text>\n</svg>",
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m48' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：4細胞チップに多段階の負荷をかける</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 分化</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>hiPSC→肝4細胞</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>iHSCはαSMA/GFAP陽性</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m48)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>② 配置</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>側流路つきチップ</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>階層的に共培養</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m48)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>③ 誘導</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>FFA・フルクトース</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>→ LPS・PAA</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m48)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>④ 評価</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脂質・炎症・線維化</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>resmetirom応答</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("48", [{ic:"human",cap:"hiPSC由来の肝4細胞"}, {ic:"chip",cap:"側流路つきマイクロ流体チップ LEADS"}, {ic:"liver",cap:"FFA＋フルクトース＋LPS＋PAAでMASH様表現型"}, {ic:"drug",cap:"resmetirom等の薬剤応答を評価"}]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №48 LEADS：点火は強いが戻らない／溶媒エタノールの交絡 ===== */
LP.cinema("48", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("48")}${GLYPH.arrow("48c","var(--C)")}</defs>`
    +GLYPH.title("LEADS：hiPSC由来4細胞チップ。第2ヒットでエタノールが0.4%→2.4%へ跳ねる")
    +`<rect x="46" y="86" width="512" height="236" rx="14" fill="none" stroke="var(--accent)" stroke-width="2"/>`
    +`<text x="60" y="106" font-size="9.5" fill="var(--accent)">LEADS チップ</text>`
    +`<path d="M78,238 L530,238" stroke="#7fa8b8" stroke-width="7" opacity="0.55" stroke-linecap="round"/><text x="96" y="256" font-size="9" fill="#5b8496">iLSEC</text>`
    +GLYPH.hep("hep48",86,124,0.72,"")
    +GLYPH.mac("ikc48",320,168,"iKC","#5d6470")
    +`<rect x="418" y="150" width="120" height="82" rx="8" fill="#f2ece4" stroke="#c0a98c" stroke-width="1.4"/><text x="478" y="146" text-anchor="middle" font-size="9" fill="var(--ink-soft)">側流路（2D）</text>`
    +GLYPH.stellate("ihsc48",478,190,"iHSC")
    +GLYPH.layer("col48")
    +GLYPH.pill("ffa48",130,44,"FFA 600 µM",122)
    +GLYPH.pill("fru48",286,44,"フルクトース 100 mM",158)
    +GLYPH.pill("lps48",436,44,"LPS",68)
    +GLYPH.pill("paa48",556,44,"PAA 10 mM",112)
    +`<rect x="612" y="96" width="42" height="216" rx="8" fill="#efe6e6" stroke="#a2807f" stroke-width="1.6"/>`
    +`<rect id="etohFill" x="616" y="294" width="34" height="14" fill="var(--H)" opacity="0.85"/>`
    +`<text x="633" y="330" text-anchor="middle" font-size="9" fill="var(--ink-soft)">EtOH</text>`
    +GLYPH.tag("etohVal",633,82,"0.4%","var(--H)",64,true)
    +GLYPH.pill("res48",200,384,"resmetirom",132)
    +GLYPH.badge("stuck48",560,380,"線維化は","戻らない","var(--B)")
    +GLYPH.tag("conf48",360,352,"脂肪化が出た地点＝溶媒が跳ねた地点","var(--F)",268,true),
  build(K){
    const dp=[[122,168],[158,188],[134,206],[174,176]];
    return [
      {color:"E",t:2600,cap:"hiPSC由来の肝細胞・HSC・LSEC・KCをチップに置く。ただしiHSCは分化の最終段階でレチノールとパルミチン酸を受けており、置いた時点ですでにαSMA陽性——静止期ではない。",run(){
        K.T(()=>{K.morph("ihsc48Shape",GLYPH.SPINDLE);K.attr("ihsc48Shape","fill","#b0432f");K.text("ihsc48Cap","活性化iHSC");},900);
      }},
      {color:"D",t:3600,cap:"① 第1ヒット。FFA 600 µMとフルクトース100 mMで脂肪滴が溜まる。このとき溶媒のエタノールは0.4%。",run(){
        K.show(["ffa48","fru48","etohVal"]);
        K.T(()=>K.flow(180,60,150,170,"var(--D)",{n:4,dur:1.1,loop:2}),700);
        K.T(()=>addDrops(K,"hep48Drops",dp,"lip48"),1300);
      }},
      {color:"C",t:4400,cap:"② 第2ヒット。LPSとPAA 10 mMでiKCが活性化し、コラーゲンが増える。同時に溶媒のエタノールが2.4%（およそ410 mM）へ跳ね上がる。",run(){
        K.show(["lps48","paa48"]);
        K.T(()=>{K.flow(436,60,326,152,"var(--C)",{n:3,dur:1.0,loop:2});radiate(K,320,168,"var(--C)",8);},800);
        K.T(()=>{K.attr("etohFill","y","110");K.attr("etohFill","height","198");K.text("etohVal","2.4%");K.pulse("etohVal");},1700);
        K.T(()=>{K.flow(348,176,462,190,"var(--C)",{n:3,dur:1.1,loop:2});},2400);
        K.T(()=>K.draw("col48",GLYPH.collagenAt(478,258),{len:150}),3100);
      }},
      {color:"H",t:4000,cap:"③ resmetiromを入れても線維化はほとんど戻らない。著者自身、戻りにくさの理由をiHSCが強く活性化していることに帰している。",run(){
        K.unpulse("etohVal");K.show(["res48"]);
        K.T(()=>K.strike(200,368,466,206),700);
        K.T(()=>{K.markX(466,206,"var(--H)");K.show(["stuck48"]);},1600);
      }},
      {color:"F",t:3800,cap:"④ 脂肪化が出た地点と、エタノールが跳ね上がった地点が一致している。しかも健常群にvehicle対照が置かれておらず、溶媒の寄与を切り分ける比較が提示されていない。",run(){
        K.show(["conf48"]);K.pulse("etohVal");
        K.T(()=>{K.flow(612,200,560,120,"var(--F)",{n:3,dur:1.1,loop:2,r:2.6});},900);
        K.T(()=>K.unpulse("etohVal"),2800);
      }},
    ];
  }
});
