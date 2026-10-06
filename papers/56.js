/* ============================================================
   №56 · Nat Commun 2026 · Hao B, Wei J, Xu J, …, Amit I, Li B
   EasySCP：FACS分取＋384プレート1ステップ消化＋高感度MSで、単一細胞プロテオミクスから肝のzonationを広く描く
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"56", primary:"G",
    title:"EasySCP：単一細胞プロテオミクスを手軽に——FACS＋384プレート1ステップ消化＋高感度MSで肝のzonationを広く描き、HSSで再構成する",
    authors:"Hao B, Wei J, Xu J, Fu Y, Zou Q, …, Qin G, Amit I, Li B",
    journal:"Nat Commun",
    year:2026,
    vol:"17(1):—",
    doi:"10.1038/s41467-026-74525-8",
    url:"https://doi.org/10.1038/s41467-026-74525-8",
    tags:["G","E","A"],
    approach:"EasySCP（FACSによる単一細胞ソーティング＋384ウェルでのオールインワン1ステップ消化＋高感度質量分析DIA）＋ マウス肝(雌)の肝細胞zonationの空間的プロテオーム解析 ＋ 215個の保存zonationマーカーからHepatocyte Spatial Status score(HSS)を構築",
    added:"2026-10-06",
    abstract_ja:"単一細胞プロテオミクス（SCP）は、工程が複雑で専用装置に頼りがちなため、生物学への応用が限られてきた。本研究はEasySCPを提示する——FACSによる単一細胞ソーティング、384ウェルプレートでのオールインワンの1ステップ消化、そして高感度の質量分析を統合した高スループット手法である。EasySCPは単一のHEK293細胞から約5000タンパク質を同定できる。これを雌マウスの肝に適用すると、肝細胞のzonation（小葉内の位置依存性）を空間的に反映したプロテオーム・プロファイリングが可能になり、肝細胞あたり平均3500タンパク質を検出し、5267タンパク質のうち3277でzonationパターンを見いだした。さらに215個の保存されたzonationマーカーを土台に、肝細胞空間ステータススコア（HSS, hepatocyte spatial status score）を開発し、これにより単一細胞やマルチオミクスのデータ全般で肝のzonationを再構成できるようにした。以上によりEasySCPは、健常・疾患いずれの状態でも単一細胞プロテオミクス解像度で細胞の不均一性を解剖できる、広くアクセス可能なツールであり、トランスクリプトミクスと機能的プロテオミクスの隔たりを実効的に橋渡しする。",
    background:"細胞の状態は最終的にはタンパク質で決まるが、単一細胞レベルのトランスクリプトミクス(scRNA-seq)に比べ、単一細胞プロテオミクス(SCP)はサンプル調製が複雑で専用装置依存、スループットも低く、普及が進んでいなかった。一方、肝はzonation（PP〜PCの位置依存的な機能分担）が顕著な臓器で、mRNAレベルのゾーン地図は整いつつあったが、実際の機能を担うタンパク質レベルで、しかも単一細胞解像度でzonationを広く描く手段がなかった。",
    achievements:[
      "**EasySCPを開発**：FACS分取＋384ウェルでの1ステップ消化＋高感度MS(DIA)を統合し、工程を簡素化。**単一HEK293細胞から約5000タンパク質**を同定。",
      "マウス肝(雌)に適用し、**肝細胞あたり平均3500タンパク質**を検出して**空間的(zonation)なプロテオームプロファイル**を取得。",
      "**5267タンパク質のうち3277でzonationパターン**を同定——タンパク質レベルで想像以上に広範なゾーン依存性があることを示した。",
      "**215個の保存zonationマーカーからHSS(肝細胞空間ステータススコア)を構築**し、単一細胞・マルチオミクスの各データで**肝zonationを再構成**できるようにした（transcriptomicsとproteomicsの橋渡し）。"
    ],
    limitations:[
      "検証の中心は**雌マウス肝**で、ヒト肝・雄・疾患肝での網羅性と再現性は今後の課題。",
      "単一細胞プロテオミクスは依然として**検出深度（〜数千タンパク質）に限界**があり、低存在量の制御因子は取りこぼしうる。",
      "zonation割り当ては**landmarkマーカー/HSSの選び方に依存**し、PP〜PCの連続座標の絶対精度には不確実性が残る。",
      "空間情報は分取/計算に基づく**『空間的に情報づけられた』推定**で、真の組織内位置(in situ)を直接観るわけではない。"
    ],
    connection:[
      "**自系のゾーン検証に直結する手法**。肝オープンオルガノイドの肝細胞が、酸素勾配に応じてPP/PC様のプロテオームを示すかを、EasySCP/HSSで単一細胞タンパク質レベルで評価できる。",
      "**mRNAとタンパク質の乖離を押さえる**：自分の系の表現型(脂肪化/線維化)を語るとき、scRNA-seqだけでなく機能を担うタンパク質で裏取りできる。HSSで『この肝細胞はどのゾーンに相当するか』を定量できる。",
      "**ABM入力**：HSSでゾーン座標を付けた単一細胞プロテオームは、ABMの状態変数(ゾーン依存の酵素量・代謝能)の実測値として使える。パラメータの根拠が強くなる。",
      "**既収録との接続**：#53(c-Kit/FGF1でPC脂肪化)・#54(血流Wntでzonation)・#09(HSC-RSPO3)などzonation系の『読み出し手法』として横断的に効く。#51(単一細胞アトラス)や#58(クロマチン/エピ)ともマルチオミクスで統合できる。"
    ],
    glossary:[
      {term:"EasySCP",full:"Easy single-cell proteomics",desc:"FACS分取＋384ウェル1ステップ消化＋高感度MSを統合した高スループット単一細胞プロテオミクス法"},
      {term:"SCP",full:"single-cell proteomics",desc:"単一細胞のタンパク質を網羅的に測る手法。従来は工程が複雑で普及が限られていた"},
      {term:"HSS",full:"hepatocyte spatial status score",desc:"215の保存zonationマーカーから算出し、肝細胞のゾーン座標を推定・再構成するスコア"},
      {term:"DIA",full:"data-independent acquisition",desc:"全イオンを網羅的に断片化して定量する質量分析モード。微量試料でも再現性が高い"},
      {term:"FACS",full:"fluorescence-activated cell sorting",desc:"蛍光で細胞を1個ずつ分取する手法。EasySCPの単一細胞入力を作る"},
      {term:"zonation marker",full:"conserved zonation marker",desc:"ゾーン依存性が保存された基準タンパク質/遺伝子。HSSの土台になる215個を使用"},
      {term:"periportal",full:"periportal zone (zone 1)",desc:"門脈周囲。酸素が高く糖新生・尿素合成が優位な領域"},
      {term:"pericentral",full:"pericentral zone (zone 3)",desc:"中心静脈周囲。酸素が低く解糖・薬物代謝が優位な領域"}
    ],
    struct:{
      model:"手法/マウス",
      cells:["肝細胞","(汎用)単一細胞"],
      triggers:["（疾患点火ではなく）空間プロテオミクスの取得","FACS単一細胞入力"],
      steatosis:"—", inflammation:"—", fibrosis:"—",
      readout:["単一細胞あたり検出タンパク質数(〜3500)","zonationパターン(3277/5267)","HSSによるゾーン座標再構成"],
      ignite:"（手法論文）病態点火は扱わない。zonationをタンパク質レベル・単一細胞解像度で読み出す基盤を提供する。",
      params:[
        {name:"HSS → 肝細胞のゾーン座標(PP〜PC)",note:"状態変数としてABMに付与可能"},
        {name:"ゾーン別タンパク質量(酵素等) → 代謝能ルール",note:"実測プロテオームをパラメータ化"}
      ],
      todos:[
        "自系肝細胞にEasySCP/HSSを適用しPP/PC様プロテオームを評価",
        "表現型(脂肪化/線維化)をタンパク質レベルで裏取り",
        "HSSのゾーン座標をABMの酵素量・代謝能の根拠に使う"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f56' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>EasySCPで単一肝細胞のプロテオーム→zonationを広く検出、HSSで再構成</text><rect x='16' y='44' width='120' height='70' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='76' y='66' text-anchor='middle' font-size='10' fill='var(--G)' font-weight='600'>単一細胞</text><text x='76' y='84' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>FACS分取</text><text x='76' y='100' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→384ウェル</text><rect x='16' y='126' width='120' height='40' rx='8' fill='var(--paper)' stroke='var(--accent)'/><text x='76' y='150' text-anchor='middle' font-size='9' fill='var(--accent)'>1ステップ消化</text><path d='M136,80 C160,80 164,110 176,116' fill='none' stroke='var(--accent)' marker-end='url(#f56)'/><path d='M136,146 C160,146 164,126 176,122' fill='none' stroke='var(--accent)' marker-end='url(#f56)'/><rect x='178' y='96' width='110' height='50' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='233' y='116' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>高感度MS (DIA)</text><text x='233' y='133' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>〜3500 タンパク/細胞</text><path d='M288,121 L314,121' stroke='var(--accent)' marker-end='url(#f56)'/><rect x='316' y='40' width='140' height='24' rx='5' fill='var(--paper-2)' stroke='var(--E)'/><text x='386' y='57' text-anchor='middle' font-size='9' fill='var(--E)' font-weight='600'>PP（門脈周囲）</text><rect x='316' y='176' width='140' height='24' rx='5' fill='var(--paper-2)' stroke='var(--D)'/><text x='386' y='193' text-anchor='middle' font-size='9' fill='var(--D)' font-weight='600'>PC（中心静脈周囲）</text><circle cx='340' cy='90' r='8' fill='var(--E)' opacity='0.7'/><circle cx='370' cy='105' r='8' fill='var(--E)' opacity='0.5'/><circle cx='400' cy='120' r='8' fill='var(--accent)' opacity='0.5'/><circle cx='430' cy='135' r='8' fill='var(--D)' opacity='0.5'/><circle cx='400' cy='150' r='8' fill='var(--D)' opacity='0.7'/><text x='386' y='120' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>3277/5267 が</text><text x='386' y='133' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ゾーン依存</text><path d='M456,120 L484,120' stroke='var(--accent)' stroke-width='1.4' marker-end='url(#f56)'/><rect x='486' y='80' width='140' height='80' rx='8' fill='var(--paper)' stroke='var(--F)' stroke-width='1.5'/><text x='556' y='104' text-anchor='middle' font-size='10' fill='var(--F)' font-weight='600'>HSS</text><text x='556' y='122' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>215保存マーカー</text><text x='556' y='137' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>→ゾーン座標を</text><text x='556' y='150' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>再構成</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m56' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>EasySCPワークフロー：マウス肝 → FACS → 384プレート消化 → MS → HSS</text><rect x='12' y='70' width='110' height='56' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='67' y='92' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>マウス肝(雌)</text><text x='67' y='110' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>肝細胞を解離</text><path d='M122,98 L150,98' stroke='var(--accent)' marker-end='url(#m56)'/><rect x='152' y='70' width='110' height='56' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='207' y='92' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>FACS 単一細胞</text><text x='207' y='110' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>384ウェルへ分取</text><path d='M262,98 L290,98' stroke='var(--accent)' marker-end='url(#m56)'/><rect x='292' y='70' width='120' height='56' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='352' y='92' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>1ステップ消化</text><text x='352' y='110' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>オールインワン前処理</text><path d='M412,98 L440,98' stroke='var(--accent)' marker-end='url(#m56)'/><rect x='442' y='70' width='120' height='56' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='502' y='92' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>高感度MS (DIA)</text><text x='502' y='110' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>単一細胞プロテオーム</text><rect x='200' y='150' width='240' height='54' rx='8' fill='var(--paper)' stroke='var(--F)' stroke-width='1.5'/><text x='320' y='172' text-anchor='middle' font-size='10' fill='var(--F)' font-weight='600'>HSS で zonation を再構成</text><text x='320' y='190' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>単一細胞・マルチオミクスへ横展開</text><path d='M502,126 C502,140 420,150 440,160' fill='none' stroke='var(--accent)' marker-end='url(#m56)'/><text x='585' y='150' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>検証：HEK293</text><text x='585' y='163' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>単一細胞〜5000</text><text x='585' y='176' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>タンパク</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("56", [{ic:"omics",cap:"EasySCP：単一細胞プロテオミクス（FACS＋384＋MS）"}, {ic:"hepatocyte",cap:"単一肝細胞ごとに〜3500タンパク質を検出"}, {ic:"liver",cap:"3277/5267タンパクがzonation依存"}, {ic:"mouse",cap:"マウス肝(雌)で空間プロテオーム"}, {ic:"silico",cap:"HSSでゾーン座標を再構成"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 56 Hao/Li Nat Commun 2026: 単一細胞プロテオミクス(FACS+384+高感度MS DIA)+マウス肝zonation+HSS */
LP.methods("56", ["proteomics","facs","mouse","insilico","spatial"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №56 単一肝細胞→EasySCP→タンパク質→zonation検出→HSSで座標付与 ===== */
LP.cinema("56", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("56",'var(--G)')}${GLYPH.arrow("56f",'var(--F)')}</defs>`
    +GLYPH.title("単一肝細胞をEasySCPでタンパク質まで読み、zonationを広く検出、HSSでゾーン座標を付ける")
    +`<text x="70" y="90" font-size="10.5" fill="var(--E)">PP(門脈周囲)</text>`
    +`<text x="70" y="330" font-size="10.5" fill="var(--D)">PC(中心静脈周囲)</text>`
    +GLYPH.hep("hepA56",150,150,0.9,"肝細胞A")
    +GLYPH.hep("hepB56",150,280,0.9,"肝細胞B")
    +`<rect x="320" y="150" width="150" height="130" rx="12" fill="none" stroke="var(--G)" stroke-width="2"/>`
    +`<text x="395" y="140" text-anchor="middle" font-size="10.5" fill="var(--G)">EasySCP</text>`
    +GLYPH.tag("facs56",395,185,"FACS→384","var(--accent)",120,true)
    +GLYPH.tag("ms56",395,235,"高感度MS(DIA)","var(--G)",130,true)
    +`<g id="prot56" class="fade"></g>`
    +GLYPH.badge("hss56",620,215,"HSS","ゾーン座標","var(--F)"),
  build(K){
    const prot=[[520,150],[560,170],[540,200],[580,220],[520,250],[560,275]];
    return [
      {color:"E",t:2600,cap:"① 肝小葉のPP〜PCから単一の肝細胞を取り出す（位置の違う細胞A・B）。",run(){
        K.pulse("hepA56");K.T(()=>K.pulse("hepB56"),600);
      }},
      {color:"G",t:3600,cap:"② EasySCPはFACSで1個ずつ384ウェルへ分取し、1ステップ消化して高感度MSにかける。",run(){
        K.show(["facs56"]);
        K.T(()=>{K.flow(200,150,330,200,"var(--accent)",{n:2,dur:1.0,loop:2});K.flow(200,280,330,230,"var(--accent)",{n:2,dur:1.0,loop:2});},400);
        K.T(()=>{K.show(["ms56"]);K.pulse("ms56");},1800);
      }},
      {color:"G",t:3800,cap:"③ 1細胞あたり約3500タンパク質を検出。5267のうち3277がゾーン依存のパターンを示す。",run(){
        K.show(["prot56"]);const g=K.$("prot56");
        prot.forEach((p,i)=>K.T(()=>{const c=i<3?"var(--E)":"var(--D)";g.insertAdjacentHTML("beforeend",GLYPH.metab("p"+i,p[0],p[1],"",c));},i*220));
      }},
      {color:"F",t:3400,cap:"④ 215の保存マーカーからHSSを計算し、各細胞にゾーン座標を付けてzonationを再構成する。",run(){
        K.T(()=>{K.flow(560,210,600,215,"var(--F)",{n:3,dur:1.1,loop:2});},300);
        K.T(()=>{K.show(["hss56"]);K.pulse("hss56");},1400);
      }},
    ];
  }
});
