/* ============================================================
   №25 · Nature 2025 · Al Reza H†, Santangelo C†, Iwasawa K†, Al Reza A, Sekiya S, Glaser K,…
   ヒト多能性幹細胞から門脈周囲・中心静脈周囲ゾーン特異的肝オルガノイドを作製——EP300-TET1/HIF1α軸がzonation決定; BDLラット移植で生存改善
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    "id": "25",
    "title": "ヒト多能性幹細胞から門脈周囲・中心静脈周囲ゾーン特異的肝オルガノイドを作製——EP300-TET1/HIF1α軸がzonation決定; BDLラット移植で生存改善",
    "authors": "Al Reza H†, Santangelo C†, Iwasawa K†, Al Reza A, Sekiya S, Glaser K, Bondoc A, Merola J, ..., Takebe T†（横浜市立大学・Cincinnati Children's Hospital Medical Center）",
    "journal": "Nature",
    "year": 2025,
    "vol": "641(8050):1258–1267",
    "doi": "10.1038/s41586-025-08850-1",
    "url": "https://www.nature.com/articles/s41586-025-08850-1",
    "primary": "H",
    "tags": ["H", "E", "A"],
    "approach": "in vitro（hiPSC→ゾーン特異的肝オルガノイド分化：アスコルビン酸/ビリルビン富化）＋ in vivo（BDLラット移植）＋ scRNA-seq/空間解析 ＋ エピゲノム解析（EP300/TET1/HIF1α）",
    "added": "2026-06-12",
    "abstract_ja": "ヒト多能性幹細胞（hiPSC）からの肝オルガノイド作製はこれまでゾーン特異性を欠いていた。本研究はアスコルビン酸富化培地（門脈周囲/Zone1誘導）とビリルビン富化培地（中心静脈周囲/Zone3誘導）というシグナル環境の差異が、EP300-TET1軸（アスコルビン酸/periportal）対EP300-HIF1α軸（bilirubin/pericentral）を介して異なるゾーン同一性を規定することを解明した。単一核RNA-seqにより肝芽細胞からperiportal・interzonal・pericentral肝細胞へと分岐する分化軌跡を同定し、それぞれの前駆細胞が自己組織化してゾーン特異的肝オルガノイドを形成すること、さらに胆管結紮（BDL）ラットへの移植により高アンモニア血症と高ビリルビン血症を改善して生存期間を延長することを示した。",
    "background": "肝はZone1（門脈周囲：糖新生・β酸化・尿素回路中心）からZone3（中心静脈周囲：解糖・脂質合成・薬物代謝中心）の機能ゾーンで組織化されるが、既存のhiPSC-肝オルガノイドはこのzonationを欠き、移植後の機能再現性が限られていた。ゾーン同一性を規定するシグナル環境とエピゲノム機序も未解明であり、ゾーン特異的な機能（尿素回路・グルタチオン合成等）を備えた移植材料の作製が課題だった。",
    "achievements": ["**アスコルビン酸→EP300-TET1→Zone1 / ビリルビン→EP300-HIF1α→Zone3** という二項的エピゲノム制御によるゾーン決定機構を初めて解明した。", "Zone1/Zone3それぞれの表現型（尿素回路・グルタチオン/グルタミン酸合成など）を持つ**自己組織化型ゾーン特異的肝オルガノイド**をhiPSCから作製することに成功した。", "**BDL（胆管結紮）ラットへの移植**実験で高アンモニア血症・高ビリルビン血症を改善し、生存延長を実証した。"],
    "limitations": ["現時点で「混合ゾーン」のオルガノイド（Zone1+Zone3を共存）は完全には再現されていない。", "移植後の長期生着・機能維持データは限定的。", "ヒト疾患肝での免疫拒絶回避策は未解決（免疫不全異種移植モデルのみ）。"],
    "connection": ["自系の酸素透過性膜MPSへのアスコルビン酸/ビリルビン添加によりZone1様/Zone3様肝細胞を誘導できる可能性。EP300-TET1/HIF1αのゾーンマーカーは#24（生体ドナーatlas）のzonation参照と照合可能。BDL ratモデルは胆汁酸×線維化×再生の統合出口戦略。#23（BECのFXR-YAP軸）との組み合わせで胆管損傷→BA漏出→HSC活性化の入力を提供。"],
    "glossary": [{"term": "EP300", "full": "E1A binding protein p300", "desc": "ヒストンアセチルトランスフェラーゼ型コアクチベーター。TET1/HIF1αとの複合体形成を介してゾーン特異遺伝子を制御"}, {"term": "TET1", "full": "Ten-eleven translocation methylcytosine dioxygenase 1", "desc": "DNA脱メチル化酵素。アスコルビン酸で活性化されEP300と協働してZone1（門脈周囲）プログラムを確立"}, {"term": "HIF1α", "full": "Hypoxia-inducible factor 1α", "desc": "低酸素応答転写因子。ビリルビン富化（低酸素類似）環境でEP300と協働してZone3（中心静脈周囲）プログラムを確立"}, {"term": "BDL", "full": "bile duct ligation（胆管結紮）", "desc": "外科的に総胆管を結紮し胆汁うっ滞・高ビリルビン血症・二次的線維化を誘発するラット・マウスモデル"}, {"term": "hiPSC", "full": "human induced pluripotent stem cell", "desc": "ヒト人工多能性幹細胞。本論文ではゾーン特異的肝オルガノイドの出発細胞"}],
    "struct": {"model": "in vitro + in vivo(BDLラット移植)", "cells": ["hiPSC由来肝オルガノイド(Zone1/Zone3)"], "triggers": ["アスコルビン酸(Zone1誘導)", "ビリルビン(Zone3誘導)", "BDL(移植先病態)"], "steatosis": "—", "inflammation": "—", "fibrosis": "—", "readout": ["zonation(PP/CV)同一性", "EP300-TET1/HIF1α軸", "高アンモニア/ビリルビン血症改善", "生存延長"], "ignite": "—（再生・ゾーン分化が主目的。BDL移植先で二次的線維化の文脈）", "params": [{"name": "アスコルビン酸/ビリルビン→ゾーン誘導", "note": "自系の成熟化ステップで添加しZone1様/Zone3様肝細胞を優先誘導するルール"}, {"name": "ゾーンマーカー→自系バリデーション", "note": "EP300-TET1(Zone1)/HIF1α(Zone3)を#24アトラスのゾーンマーカーと照合し同一性検証"}], "todos": ["酸素透過膜MPSにアスコルビン酸/ビリルビン添加でZone1様/Zone3様肝細胞を誘導", "EP300-TET1/HIF1αゾーンマーカーで自系オルガノイドのゾーン同一性を検証", "BDLラットを胆汁酸×線維化×再生の統合出口戦略として採用検討"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m25' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：hiPSC → ゾーン誘導培地 → 自己組織化 → BDLラット移植</text>\n  <rect x='14' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='84' y='66' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>① hiPSC</text>\n  <text x='84' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ヒト多能性幹細胞</text>\n  <text x='84' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>肝芽細胞へ</text>\n  <text x='84' y='112' text-anchor='middle' font-size='8.3' fill='var(--A)'>出発材料</text>\n  <path d='M156,98 L168,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m25)'/>\n  <rect x='172' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='241' y='66' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>② ゾーン誘導培地</text>\n  <text x='241' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>アスコルビン酸=PP</text>\n  <text x='241' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ビリルビン=CV</text>\n  <text x='241' y='112' text-anchor='middle' font-size='8.3' fill='var(--E)'>シグナル環境で規定</text>\n  <path d='M314,98 L326,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m25)'/>\n  <rect x='329' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='399' y='66' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>③ 自己組織化</text>\n  <text x='399' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ゾーン特異オルガノイド</text>\n  <text x='399' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>尿素/GSH機能</text>\n  <text x='399' y='112' text-anchor='middle' font-size='8.3' fill='var(--A)'>Zone1/Zone3表現型</text>\n  <path d='M472,98 L484,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m25)'/>\n  <rect x='486' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='556' y='66' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>④ BDLラット移植</text>\n  <text x='556' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>高アンモニア/ビリルビン</text>\n  <text x='556' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>血症を改善</text>\n  <text x='556' y='112' text-anchor='middle' font-size='8.3' fill='var(--H)'>生存を延長</text>\n  <text x='320' y='196' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Al Reza H, Santangelo C, Iwasawa K, …, Takebe T, Nature 641(8050):1258–1267 (2025)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 318' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs>\n    <marker id='af25e' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--E)'/></marker>\n    <marker id='af25d' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--D)'/></marker>\n    <marker id='af25h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker>\n  </defs>\n  <rect x='0' y='0' width='640' height='318' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>シグナル環境→エピゲノム軸→ゾーン同一性の決定</text>\n  <ellipse cx='86' cy='150' rx='34' ry='40' fill='#e9e3d2' stroke='var(--A)' stroke-width='1.6'/>\n  <text x='86' y='148' text-anchor='middle' font-size='9' fill='var(--A)' font-weight='700'>hiPSC</text>\n  <text x='86' y='162' text-anchor='middle' font-size='7.5' fill='var(--ink-soft)'>肝芽細胞</text>\n  <!-- Zone1 path -->\n  <path d='M122,128 C150,104 170,98 196,96' stroke='var(--E)' stroke-width='1.5' fill='none' marker-end='url(#af25e)'/>\n  <rect x='200' y='62' width='210' height='70' rx='8' fill='#dde7f0' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='305' y='82' text-anchor='middle' font-size='9' fill='var(--E)' font-weight='700'>アスコルビン酸富化</text>\n  <text x='305' y='100' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>EP300 → TET1</text>\n  <text x='305' y='118' text-anchor='middle' font-size='9' fill='var(--E)' font-weight='600'>Zone1（門脈周囲・PP）</text>\n  <!-- Zone3 path -->\n  <path d='M122,172 C150,196 170,202 196,204' stroke='var(--D)' stroke-width='1.5' fill='none' marker-end='url(#af25d)'/>\n  <rect x='200' y='170' width='210' height='70' rx='8' fill='#f3ead4' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='305' y='190' text-anchor='middle' font-size='9' fill='var(--D)' font-weight='700'>ビリルビン富化</text>\n  <text x='305' y='208' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>EP300 → HIF1α</text>\n  <text x='305' y='226' text-anchor='middle' font-size='9' fill='var(--D)' font-weight='600'>Zone3（中心静脈周囲・CV）</text>\n  <!-- outcome -->\n  <path d='M410,97 C440,110 450,140 452,150' stroke='var(--H)' stroke-width='1.4' fill='none' marker-end='url(#af25h)'/>\n  <path d='M410,205 C440,192 450,162 452,152' stroke='var(--H)' stroke-width='1.4' fill='none' marker-end='url(#af25h)'/>\n  <rect x='456' y='112' width='170' height='86' rx='8' fill='#f3d6cf' stroke='var(--H)' stroke-width='1.6'/>\n  <text x='541' y='134' text-anchor='middle' font-size='9' fill='var(--H)' font-weight='700'>BDLラットへ移植</text>\n  <text x='541' y='152' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>高アンモニア血症↓</text>\n  <text x='541' y='168' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>高ビリルビン血症↓</text>\n  <text x='541' y='186' text-anchor='middle' font-size='9' fill='var(--H)' font-weight='600'>生存を延長</text>\n  <text x='320' y='284' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>自己組織化により periportal / interzonal / pericentral 肝細胞へ分岐する分化軌跡</text>\n  <text x='320' y='302' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ゾーン同一性は EP300 と TET1 / HIF1α の結合バランスで決まる</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("25", [{ic:"liver",cap:"Zone1（門脈周囲）ゾーン特異的肝オルガノイド"},{ic:"liver",cap:"Zone3（中心静脈周囲）ゾーン特異的肝オルガノイド"},{ic:"mouse",cap:"BDLラット移植実験"},{ic:"omics",cap:"エピゲノム解析（EP300/TET1/HIF1α ChIP/ATAC）"},{ic:"human",cap:"hiPSC由来ゾーン特異的肝前駆細胞"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 25 Al Reza/Takebe Nature 2025: hiPSC→多ゾーンオルガノイド+BDLラット移植+エピゲノム(ChIP/ATAC) */
LP.methods("25", ["invitro","mouse","scrna","chipseq","facs","qpcr","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
LP.cinema("25", {
  svg:GLYPH.bg()
    +`<defs>${GLYPH.defsCommon}${GLYPH.arrow("25h","var(--H)")}${GLYPH.arrow("25e","var(--E)")}</defs>`
    +GLYPH.title("hiPSCからZone1/Zone3ゾーン特異的肝オルガノイドを作製——EP300-TET1/HIF1α軸がzonation決定")
    +`<rect id="zone1Box25" x="90" y="55" width="238" height="172" rx="8" fill="var(--E)" fill-opacity="0.07" stroke="var(--E)" stroke-width="1.2" stroke-dasharray="6,3"/>`
    +`<text x="209" y="73" text-anchor="middle" font-size="9.5" fill="var(--E)" font-weight="600">Zone 1（門脈周囲）</text>`
    +`<rect id="zone3Box25" x="392" y="55" width="238" height="172" rx="8" fill="var(--D)" fill-opacity="0.07" stroke="var(--D)" stroke-width="1.2" stroke-dasharray="6,3"/>`
    +`<text x="511" y="73" text-anchor="middle" font-size="9.5" fill="var(--D)" font-weight="600">Zone 3（中心静脈周囲）</text>`
    +`<g id="ascW25" class="fade">`+GLYPH.metab("asc25",160,150,"アスコルビン酸","var(--E)")+`</g>`
    +`<g id="bilW25" class="fade">`+GLYPH.metab("bil25",460,150,"ビリルビン","var(--D)")+`</g>`
    +`<g id="tet1W25" class="fade">`+GLYPH.tf("tet125",209,170,"TET1","var(--E)")+`</g>`
    +`<g id="hifW25" class="fade">`+GLYPH.tf("hif25",511,170,"HIF1α","var(--D)")+`</g>`
    +GLYPH.receptor("ep300a25",209,200,"EP300","var(--H)")
    +GLYPH.receptor("ep300b25",511,200,"EP300","var(--H)")
    +`<g id="org1W25" class="fade"><ellipse cx="209" cy="290" rx="58" ry="40" fill="var(--E)" fill-opacity="0.22" stroke="var(--E)" stroke-width="2"/><text x="209" y="285" text-anchor="middle" font-size="9" fill="var(--E)" font-weight="600">Zone1オルガノイド</text><text x="209" y="299" text-anchor="middle" font-size="8" fill="var(--E)">糖新生・β酸化特性</text></g>`
    +`<g id="org3W25" class="fade"><ellipse cx="511" cy="290" rx="58" ry="40" fill="var(--D)" fill-opacity="0.22" stroke="var(--D)" stroke-width="2"/><text x="511" y="285" text-anchor="middle" font-size="9" fill="var(--D)" font-weight="600">Zone3オルガノイド</text><text x="511" y="299" text-anchor="middle" font-size="8" fill="var(--D)">解糖・脂質合成特性</text></g>`
    +`<g id="bdlW25" class="fade"><rect x="280" y="340" width="160" height="38" rx="5" fill="var(--H)" fill-opacity="0.12" stroke="var(--H)" stroke-width="1.2"/><text x="360" y="356" text-anchor="middle" font-size="9" fill="var(--H)" font-weight="600">BDLラット移植</text><text x="360" y="370" text-anchor="middle" font-size="8.5" fill="var(--H)">高NH3/高ビリルビン血症改善・生存↑</text></g>`,
  build(K){
    return [
      {color:"H",t:2400,cap:"① 従来のhiPSC-肝オルガノイドはzonationを欠く。本研究はアスコルビン酸（Zone1/門脈周囲誘導）とビリルビン（Zone3/中心静脈周囲誘導）という培養環境の違いがエピゲノムを通じてゾーン同一性を決定することを示した。",run(){}},
      {color:"E",t:4400,cap:"② アスコルビン酸富化条件：TET1（DNA脱メチル化酵素）が活性化されEP300と複合体を形成→Zone1（門脈周囲）特異遺伝子プログラム（糖新生・β酸化）を誘導。",
       run(){
         K.show(["ascW25","tet1W25"]);
         K.pulse("asc25");
         K.T(()=>{
           K.unpulse("asc25");
           K.flow(160,155,209,190,"var(--E)",{n:3,dur:0.9,loop:2});
           K.pulse("ep300a25");
         },800);
         K.T(()=>{K.unpulse("ep300a25"); K.show(["org1W25"]);},2800);
       }},
      {color:"D",t:4400,cap:"③ ビリルビン富化条件（低酸素類似環境）：HIF1αが安定化されEP300と複合体を形成→Zone3（中心静脈周囲）特異遺伝子プログラム（解糖・脂質合成・薬物代謝）を誘導。",
       run(){
         K.show(["bilW25","hifW25"]);
         K.pulse("bil25");
         K.T(()=>{
           K.unpulse("bil25");
           K.flow(460,155,511,190,"var(--D)",{n:3,dur:0.9,loop:2});
           K.pulse("ep300b25");
         },800);
         K.T(()=>{K.unpulse("ep300b25"); K.show(["org3W25"]);},2800);
       }},
      {color:"H",t:3600,cap:"④ 作製したZone1/Zone3ゾーン特異的オルガノイドをBDL（胆管結紮）ラットへ移植→高アンモニア血症・高ビリルビン血症を改善し生存延長を実証。再生医療応用の出口戦略として確立。",
       run(){
         K.show(["bdlW25"]);
         K.pulse("bdlW25");
         K.T(()=>K.unpulse("bdlW25"),2500);
       }},
    ];
  }
});
