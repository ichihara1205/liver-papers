/* ============================================================
   №15 · npj Digital Medicine 2025 · Malka-Markovitz A, Camara Dit Pinto S, et al.
   患者特異的多スケールCFD仮想肝臓：門脈から類洞・肝細胞損傷まで一気通貫のDILI予測デジタルツイン
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"15",
    title:"患者特異的多スケールCFD仮想肝臓：門脈から類洞・肝細胞損傷まで一気通貫のDILI予測デジタルツイン",
    authors:"Malka-Markovitz A, Camara Dit Pinto S, et al.",
    journal:"npj Digital Medicine",
    year:2025,
    vol:"8:383",
    doi:"10.1038/s41746-025-01736-6",
    url:"https://www.nature.com/articles/s41746-025-01736-6",
    primary:"F",
    tags:["F","E"],
    approach:"in silico（多スケールCFD：患者MRI由来3D門脈形状 ＋ 毛細血管代理モデルCSM ＋ 肝小葉CFD、三階層統合パイプライン）",
    added:"2026-06-02",
    abstract_ja:"薬物性肝障害（Drug-Induced Liver Injury; DILI）の空間的不均一性を精確に予測するには、臓器・小葉・細胞の三スケールを統合した数理モデルが不可欠だが、既存の統計モデルやPBPKモデルはその空間解像度を欠いていた。本研究は「人体肝臓デジタルツイン（HLVT）」開発の重要な一歩として、患者MRIから取得した三次元門脈形状を基に計算流体力学（CFD）を実行し、Constrained Constructive Optimization（CCO）アルゴリズムで生成した毛細血管代理モデル（CSM）を介して約10万個の肝小葉に動的入口境界条件を与える多スケールパイプラインを構築した。アセトアミノフェン（APAP）過量服用をテストケースとして三階層空間積分とPBPK由来の時間積分を組み合わせることで、実臨床で観察されるpericentral（Zone 3、中心静脈周囲）選択的肝細胞壊死を再現し、4D MRI流速測定値とも良好な一致を示した。損傷小葉が局所血管抵抗を上昇させ周囲小葉への血流を再分配するフィードバックループも定量化され、このフレームワークはMASLDや線維化など他の肝疾患への拡張可能性も示した。",
    background:"肝臓は門脈側（Zone 1）から中心静脈側（Zone 3）へ流れる類洞血流に沿って酸素・栄養の勾配が生じ、薬物代謝酵素（CYP2E1等）の発現もゾーン依存的に分布するzonation構造をもつ。そのためAPAPによる肝細胞傷害はpericentral選択的に起こり、MASLDの脂質蓄積も同じZone 3周辺が優位になることが多い。しかし既存の予測モデルは統計ベースのスコアか、単一小葉を孤立させた数理モデルかのいずれかで、臓器スケールの血流力学（門脈3D分岐・局所流速の不均一性）と細胞スケールの薬物代謝・傷害を連結した空間的不均一性の再現には至っていなかった。患者個別の解剖学的データを活用した「生体忠実な肝臓デジタルツイン」の確立が求められていた。",
    achievements:[
      "患者CT由来の3D門脈形状にCFDを適用し、4D MRI実測値（~0.15 m/s）と良好な一致を示す血流シミュレーションを確立。門脈入口流量9.48〜11.43 cm³/sの心拍性脈動も再現した。",
      "大・小毛細血管代理モデル（CSM; CCOアルゴリズム使用）で~100,000小葉の入口速度・薬物濃度を算出し、臓器-小葉スケールのギャップを初めて系統的に埋めた。",
      "三階層統合モデルにPBPK由来のAPAP血中濃度を入力したところ、類洞流速60〜600 µm/s・ポーラスメディア透過率~1.25×10⁻¹⁴ m²のもとZone 3選択的壊死が再現され臨床病理所見と一致。",
      "損傷小葉での出口圧2.5%上昇（800→820 Pa）が局所血管抵抗を増大させ周辺小葉の薬物流入を著しく低下させるフィードバックループを定量化し、DILIの空間波及機構をCFDで初めて実証。"
    ],
    limitations:[
      "現状の実装は肝動脈（全流入の約20%）と肝静脈ドレナージを含まず、流入条件に系統的な偏りが残る。",
      "毛細血管代理モデルは計算トレードオフのため2D平面を採用しており、3D血管交差や線維化による局所透過率変化を完全には再現できない。",
      "薬物輸送は受動拡散（移流拡散方程式）のみで、トランスポーター介在性の能動輸送・GSH代謝・酸化ストレスカスケードは未実装。",
      "炎症・免疫・HSC活性化など線維化に関わる細胞ダイナミクスは含まれない。"
    ],
    connection:[
      "類洞パラメータのキャリブレーション：本論文が検証した類洞流速60〜600 µm/s、ポーラス透過率~1.25×10⁻¹⁴ m²、入口圧800 Pa・出口圧500 Paは、私のABMにおける細胞-流体カップリングパラメータの直接参照値として使用できる。",
      "Zonationと脂質蓄積の接点：APAPがZone 3に集積してpericentral壊死を起こすパターンは私のMASLDモデルのpericentral steatosisと同じ解剖帯域。酸素勾配を反映した多ゾーン肝細胞レイヤーをABMに実装する際の根拠として活用できる。",
      "デジタルツインとオルガノイドの統合：本論文のCFDフレームワークを酸素透過膜MPS系に適用すれば、実験条件（酸素供給量・流速）とABMパラメータを整合させる設計ツールになる。",
      "#06との相補：#06（Bouguéon, HSC Kappaモデル）はHSC活性化の細胞内ルールを精緻化したが、細胞外の血流・薬物勾配は外部入力として与えるしかなかった。本論文のCFD多スケールフレームワークと#06を組み合わせれば、血流→薬物暴露→酸化ストレス→HSC活性化という因果軸をスケール横断的にモデル化できる。"
    ],
    struct:{
      model:"in silico",
      cells:["肝細胞（仮想）","LSEC（言及）"],
      triggers:["APAP過量服用","局所血管抵抗上昇"],
      steatosis:"—",
      inflammation:"—",
      fibrosis:"—",
      readout:["Zone 3肝細胞壊死率","類洞内薬物濃度分布","類洞流速60〜600 µm/s","門脈血流量9.48〜11.43 cm³/s","ポーラスメディア透過率~1.25×10⁻¹⁴ m²"],
      ignite:"pericentral帯の薬物高暴露→壊死→血管抵抗上昇フィードバック",
      params:[
        {name:"類洞流速",note:"60〜600 µm/s（門脈入口速度に比例）。ABMの細胞-流体カップリング初期値として使用可"},
        {name:"ポーラスメディア透過率",note:"~1.25×10⁻¹⁴ m²（類洞組織15%/肝細胞組織85%）"},
        {name:"門脈入口圧力",note:"1150±50 Pa（心拍性脈動）"},
        {name:"小葉入口圧/出口圧",note:"800 Pa→500 Pa（中心静脈側）"},
        {name:"損傷閾値出口圧",note:"820 Pa（2.5%増）で局所血流が壊滅的に減少"}
      ],
      todos:[
        "類洞流速60〜600 µm/sを酸素透過膜MPS系で実測・ABMキャリブレーションに使用",
        "Zone 1→3の酸素勾配をMPS内で実測しABMのzonation実装に組み込む",
        "本CFDフレームワークをMASLDのpericentral steatosis予測に拡張適用する"
      ]
    },
    figure:`<svg viewBox='0 0 640 340' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs>
    <marker id='ar15f' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--F)'/></marker>
    <marker id='ar15fb' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker>
    <linearGradient id='zg15f' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='#7ab5d8' stop-opacity='0.3'/><stop offset='100%' stop-color='#c86c4a' stop-opacity='0.35'/></linearGradient>
    <linearGradient id='conc15' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='var(--D)' stop-opacity='0.2'/><stop offset='100%' stop-color='var(--D)' stop-opacity='0.85'/></linearGradient>
  </defs>
  <rect x='0' y='0' width='640' height='340' fill='var(--paper)'/>
  <!-- Multi-scale boxes top -->
  <rect x='20' y='14' width='130' height='44' rx='6' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.4'/>
  <text x='85' y='33' text-anchor='middle' font-size='11' fill='var(--F)'>臓器スケール</text>
  <text x='85' y='50' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>患者CT/MRI門脈3D形状</text>
  <path d='M150,36 L200,36' stroke='var(--F)' stroke-width='1.4' marker-end='url(#ar15f)'/>
  <rect x='202' y='14' width='130' height='44' rx='6' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.4'/>
  <text x='267' y='33' text-anchor='middle' font-size='11' fill='var(--F)'>メソスケール</text>
  <text x='267' y='50' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>CSM毛細血管（~100,000出口）</text>
  <path d='M332,36 L382,36' stroke='var(--F)' stroke-width='1.4' marker-end='url(#ar15f)'/>
  <rect x='384' y='14' width='130' height='44' rx='6' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.4'/>
  <text x='449' y='33' text-anchor='middle' font-size='11' fill='var(--F)'>ミクロスケール</text>
  <text x='449' y='50' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>肝小葉CFD（60〜600 µm/s）</text>
  <!-- Sinusoid diagram -->
  <rect x='30' y='90' width='580' height='200' rx='10' fill='url(#zg15f)' stroke='var(--E)' stroke-width='1.4' stroke-dasharray='5,3'/>
  <text x='320' y='82' text-anchor='middle' font-size='10.5' fill='var(--E)'>肝小葉（Portal→Central Vein）</text>
  <!-- Portal vein -->
  <ellipse cx='58' cy='190' rx='22' ry='70' fill='#c4ddf0' stroke='#5a8abe' stroke-width='1.8'/>
  <text x='58' y='280' text-anchor='middle' font-size='10' fill='#4a7ab0'>門脈</text>
  <!-- Zone labels -->
  <text x='170' y='310' text-anchor='middle' font-size='10' fill='var(--E)'>Zone 1</text>
  <text x='320' y='310' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>Zone 2</text>
  <text x='475' y='310' text-anchor='middle' font-size='10' fill='var(--B)'>Zone 3</text>
  <!-- Hepatocytes (hexagons) -->
  <polygon points='170,150 210,127 250,150 250,196 210,219 170,196' fill='#f6e7c8' stroke='#c2a268' stroke-width='1.8'/>
  <polygon points='285,150 325,127 365,150 365,196 325,219 285,196' fill='#f6e7c8' stroke='#c2a268' stroke-width='1.8'/>
  <polygon points='400,150 440,127 480,150 480,196 440,219 400,196' fill='#f6e7c8' stroke='#c06020' stroke-width='2.5'/>
  <!-- Drug concentration gradient overlay -->
  <rect x='100' y='138' width='410' height='80' rx='5' fill='url(#conc15)' opacity='0.4'/>
  <text x='320' y='133' text-anchor='middle' font-size='9' fill='var(--D)'>APAP濃度（Zone 3で最大）</text>
  <!-- Necrosis label Zone 3 -->
  <text x='440' y='175' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>壊死↑</text>
  <text x='440' y='189' text-anchor='middle' font-size='8' fill='var(--B)'>CYP2E1↑</text>
  <!-- Central vein -->
  <ellipse cx='560' cy='190' rx='22' ry='70' fill='#f0cec8' stroke='#c05038' stroke-width='1.8'/>
  <text x='560' y='280' text-anchor='middle' font-size='10' fill='#a03820'>中心静脈</text>
  <!-- Blood flow arrows -->
  <path d='M80,175 L155,175' stroke='#5a8abe' stroke-width='1.4' stroke-dasharray='4,3' marker-end='url(#ar15f)'/>
  <path d='M255,175 L280,175' stroke='#5a8abe' stroke-width='1.4' stroke-dasharray='4,3' marker-end='url(#ar15f)'/>
  <path d='M370,175 L395,175' stroke='#5a8abe' stroke-width='1.4' stroke-dasharray='4,3' marker-end='url(#ar15f)'/>
  <path d='M482,175 L535,175' stroke='#5a8abe' stroke-width='1.4' stroke-dasharray='4,3' marker-end='url(#ar15f)'/>
  <!-- Feedback arrow -->
  <path d='M555,130 C555,80 440,70 440,100' stroke='var(--B)' stroke-width='1.6' fill='none' stroke-dasharray='4,3' marker-end='url(#ar15fb)'/>
  <text x='508' y='70' text-anchor='middle' font-size='9' fill='var(--B)'>血管抵抗↑→血流再分配</text>
</svg>`,
    method_figure:`<svg viewBox='0 0 640 250' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs><marker id='m15' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--F)'/></marker></defs>
  <rect x='0' y='0' width='640' height='250' fill='var(--paper)'/>
  <text x='320' y='22' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>多スケールCFDパイプライン</text>
  <!-- Step 1 -->
  <rect x='20' y='45' width='130' height='160' rx='8' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.5'/>
  <text x='85' y='70' text-anchor='middle' font-size='10.5' fill='var(--F)' font-weight='600'>① 画像取得</text>
  <text x='85' y='92' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>患者MRI/CT</text>
  <text x='85' y='110' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>↓ セグメント</text>
  <text x='85' y='128' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>3D門脈STL形状</text>
  <text x='85' y='148' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>PBPK入力</text>
  <text x='85' y='164' text-anchor='middle' font-size='8' fill='var(--D)'>血中APAP濃度(t)</text>
  <!-- Arrow 1→2 -->
  <path d='M152,125 L178,125' stroke='var(--F)' stroke-width='1.6' marker-end='url(#m15)'/>
  <!-- Step 2 -->
  <rect x='180' y='45' width='130' height='160' rx='8' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.5'/>
  <text x='245' y='70' text-anchor='middle' font-size='10.5' fill='var(--F)' font-weight='600'>② 臓器CFD</text>
  <text x='245' y='90' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>門脈3D CFD</text>
  <text x='245' y='108' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Navier-Stokes</text>
  <text x='245' y='126' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>+移流拡散</text>
  <text x='245' y='148' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>出口：1.5 mm径</text>
  <text x='245' y='166' text-anchor='middle' font-size='8' fill='var(--E)'>22出口の速度・圧力</text>
  <!-- Arrow 2→3 -->
  <path d='M312,125 L338,125' stroke='var(--F)' stroke-width='1.6' marker-end='url(#m15)'/>
  <!-- Step 3 -->
  <rect x='340' y='45' width='130' height='160' rx='8' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.5'/>
  <text x='405' y='65' text-anchor='middle' font-size='10.5' fill='var(--F)' font-weight='600'>③ CSM毛細血管</text>
  <text x='405' y='83' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>CCOアルゴリズム</text>
  <text x='405' y='101' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Large CSM</text>
  <text x='405' y='117' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>(1.5→0.3 mm)</text>
  <text x='405' y='135' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Small CSM</text>
  <text x='405' y='151' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>(0.3→0.05 mm)</text>
  <text x='405' y='170' text-anchor='middle' font-size='8' fill='var(--E)'>~100,000出口条件</text>
  <!-- Arrow 3→4 -->
  <path d='M472,125 L498,125' stroke='var(--F)' stroke-width='1.6' marker-end='url(#m15)'/>
  <!-- Step 4 -->
  <rect x='500' y='45' width='128' height='160' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.8'/>
  <text x='564' y='65' text-anchor='middle' font-size='10.5' fill='var(--B)' font-weight='600'>④ 肝小葉CFD</text>
  <text x='564' y='83' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>多孔質媒体モデル</text>
  <text x='564' y='101' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>透過率1.25×10⁻¹⁴m²</text>
  <text x='564' y='120' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>APAP輸送＋</text>
  <text x='564' y='136' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>肝細胞損傷モデル</text>
  <text x='564' y='155' text-anchor='middle' font-size='8.5' fill='var(--B)'>Zone 3選択的壊死</text>
  <text x='564' y='172' text-anchor='middle' font-size='8' fill='var(--B)'>60〜600 µm/s</text>
  <!-- Validation label -->
  <text x='320' y='230' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>検証：4D MRI流速測定値との比較（良好な一致）</text>
</svg>`,
    glossary:[
      {term:"APAP",full:"acetaminophen (paracetamol)",desc:"アセトアミノフェン。DILIの主原因薬。本論文でCFD多スケールモデルの検証テストケースとして使用"},
      {term:"CFD",full:"Computational Fluid Dynamics",desc:"計算流体力学。Navier-Stokes方程式を数値的に解き血流・薬物輸送を時空間シミュレートする"},
      {term:"PBPK",full:"Physiologically Based Pharmacokinetic model",desc:"生理的薬物動態モデル。全身コンパートメントをODEで記述し血中薬物濃度の時間推移を予測"},
      {term:"DILI",full:"Drug-Induced Liver Injury",desc:"薬物性肝障害。内因性（APAP等）と特異体質性に分かれ、急性肝不全の主要原因"},
      {term:"HLVT",full:"Human Liver Virtual Twin",desc:"人体肝臓デジタルツイン。患者特異的多スケール計算モデルの総称"},
      {term:"CCO",full:"Constrained Constructive Optimization",desc:"制約付き構成的最適化。生理的血管形成原理に基づき合成血管ネットワークをin silicoで生成するアルゴリズム"},
      {term:"CSM",full:"Capillary Surrogate Model",desc:"毛細血管代理モデル。CT解像度以下の血管（50 µm〜1.5 mm）をCCOで生成した合成ネットワークで代替する"},
      {term:"SOS",full:"Sinusoidal Obstructive Syndrome",desc:"類洞閉塞症候群。類洞内皮・中心静脈内皮の傷害による血流閉塞病態。本論文では合成シナリオとして再現"},
      {term:"Zonation",full:"Hepatic Zonation",desc:"肝小葉の帯域的機能分業。門脈（Zone 1）→中心静脈（Zone 3）の酸素・代謝物勾配により形成され、APAPや脂質蓄積がゾーン選択的パターンをとる根拠"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("15", [{ic:"silico",cap:"CFD多スケール仮想肝臓"},{ic:"liver",cap:"患者MRI由来3D門脈形状"},{ic:"hepatocyte",cap:"Zone 3選択的壊死（APAP）"},{ic:"endothelial",cap:"類洞血流・SOS合成シナリオ"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 15 Malka-Markovitz npj Digit Med 2025: 患者MRI+多スケールCFD—純計算 */
LP.methods("15", ["human","insilico"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №15 患者特異的多スケールCFD仮想肝臓：門脈→類洞→Zone 3壊死 ===== */
LP.cinema("15", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("15")}${GLYPH.arrow("15","var(--F)")}${GLYPH.arrow("15b","var(--B)")}
    <linearGradient id='zg15' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='#7ab5d8' stop-opacity='0.22'/><stop offset='100%' stop-color='#c86c4a' stop-opacity='0.28'/></linearGradient>
  </defs>`
    +GLYPH.title("多スケールCFD仮想肝臓：門脈→毛細血管CSM→類洞→Zone 3壊死フィードバック")
    +`<rect x='70' y='118' width='580' height='268' rx='10' fill='url(#zg15)' stroke='var(--E)' stroke-width='1.3' stroke-dasharray='5,3'/>`
    +`<text x='360' y='112' text-anchor='middle' font-size='10' fill='var(--E)'>肝小葉（機能単位）</text>`
    +`<g id='pvIn'><ellipse cx='68' cy='252' rx='20' ry='68' fill='#c4ddf0' stroke='#5a8abe' stroke-width='1.8'/><text x='68' y='340' text-anchor='middle' font-size='10' fill='#4a7ab0'>門脈</text></g>`
    +`<text x='168' y='405' text-anchor='middle' font-size='9.5' fill='var(--E)'>Zone 1</text>`
    +`<text x='358' y='405' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>Zone 2</text>`
    +`<text x='548' y='405' text-anchor='middle' font-size='9.5' fill='var(--B)'>Zone 3</text>`
    +GLYPH.hexHep("hep1",168,260,"")
    +GLYPH.hexHep("hep2",358,260,"")
    +GLYPH.hexHep("hep3",548,260,"")
    +`<g id='cvOut'><ellipse cx='648' cy='252' rx='20' ry='68' fill='#f0cec8' stroke='#c05038' stroke-width='1.8'/><text x='648' y='340' text-anchor='middle' font-size='10' fill='#a03820'>中心静脈</text></g>`
    +`<g id='scaleBox' class='fade'><rect x='80' y='28' width='560' height='70' rx='7' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.4'/>`
    +`<text x='360' y='48' text-anchor='middle' font-size='10.5' fill='var(--F)'>多スケールCFDパイプライン</text>`
    +`<text x='360' y='64' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>患者MRI 3D門脈 → CSM毛細血管（~100,000出口）→ 肝小葉CFD（60〜600 µm/s検証済）</text>`
    +`<text x='360' y='80' text-anchor='middle' font-size='9' fill='var(--F)'>ポーラス透過率 ~1.25×10⁻¹⁴ m²　入口圧800 Pa / 出口圧500 Pa</text></g>`
    +`<g id='drugLayer' class='fade'></g>`
    +`<g id='dmgZ3' class='fade'><rect x='508' y='214' width='80' height='92' rx='8' fill='var(--B)' opacity='0.25'/><text x='548' y='208' text-anchor='middle' font-size='9' fill='var(--B)'>Zone 3壊死</text></g>`
    +`<g id='feedbackArrow' class='fade'><path d='M644,192 C644,130 548,100 490,112' stroke='var(--B)' stroke-width='1.8' fill='none' stroke-dasharray='5,3' marker-end='url(#ar15b)'/><text x='572' y='96' text-anchor='middle' font-size='9' fill='var(--B)'>血管抵抗↑→血流再分配</text></g>`,
  build(K){
    function addDrug(layerId,positions,opacity,delay){
      positions.forEach((p,i)=>K.T(()=>{
        K.cE("polygon",{
          points:"0,-9 7.8,-4.5 7.8,4.5 0,9 -7.8,4.5 -7.8,-4.5",
          transform:"translate("+p[0]+","+p[1]+")",
          fill:"var(--D)",opacity:opacity.toString()
        },K.$(layerId));
      },(delay||0)+i*180));
    }
    return [
      {color:"E",t:2200,cap:"① 健常な肝小葉。門脈（Zone 1側）から中心静脈（Zone 3側）へ類洞血流が流れ、CYP2E1はZone 3で高発現する。",
        run(){
          K.flow(88,236,128,248,"#5a8abe",{n:3,dur:1.1,loop:2,r:2.5});
          K.flow(88,268,128,260,"#5a8abe",{n:3,dur:1.1,loop:2,r:2.5});
        }
      },
      {color:"F",t:3800,cap:"② 患者MRIから3D門脈形状を取得してCFDを実行。毛細血管代理モデル（CSM）で~10万個の小葉へ動的な入口速度・薬物濃度を配信する多スケール統合フレームワーク。",
        run(){
          K.show(["scaleBox"]);
          K.flow(88,236,128,248,"#5a8abe",{n:3,dur:1.3,loop:3,r:2.5});
          K.flow(88,268,128,260,"#5a8abe",{n:3,dur:1.3,loop:3,r:2.5});
          K.T(()=>{K.flow(208,258,318,258,"#5a8abe",{n:3,dur:1.2,loop:2});},900);
          K.T(()=>{K.flow(398,258,508,258,"#5a8abe",{n:3,dur:1.2,loop:2});},1800);
          K.T(()=>{K.flow(588,258,628,258,"#5a8abe",{n:2,dur:1.0,loop:2});},2600);
        }
      },
      {color:"D",t:4000,cap:"③ PBPKモデル由来の血中APAP濃度（3hピーク）を入口条件に設定。薬物は類洞を流れてZone 3の肝細胞に高濃度で到達する（移流拡散）。",
        run(){
          K.show(["drugLayer"]);
          addDrug("drugLayer",[[148,248],[162,264],[178,248],[156,278]],0.5,0);
          K.T(()=>addDrug("drugLayer",[[338,250],[354,264],[368,250],[346,274]],0.65,0),1400);
          K.T(()=>addDrug("drugLayer",[[522,248],[540,264],[558,248],[532,278],[548,285]],0.9,0),2600);
        }
      },
      {color:"B",t:3800,cap:"④ Zone 3肝細胞でCYP2E1代謝→毒性代謝物（NAPQI）→pericentral壊死が出現。損傷小葉の出口圧上昇が血管抵抗を増大させ周囲小葉への血流再分配を引き起こすフィードバックループ。",
        run(){
          K.show(["dmgZ3","feedbackArrow"]);
          K.T(()=>{K.markX(548,258,"var(--B)");},600);
          K.T(()=>{K.flow(624,236,648,252,"var(--B)",{n:2,dur:0.9,loop:3});},1800);
        }
      },
    ];
  }
});
