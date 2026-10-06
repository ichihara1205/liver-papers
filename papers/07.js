/* ============================================================
   №07 · Cell Metabolism 2026 · Di Pastena F, Gautam J, Lally JSV, Fayyazi R, Grasset E, Bhattacharya…
   ACLY/ACSS2二重阻害薬EVT0185がMASHの脂肪化・HSC活性化・線維化を軽減
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"07",
    added:"2026-05-30",
    title:"ACLY/ACSS2二重阻害薬EVT0185がMASHの脂肪化・HSC活性化・線維化を軽減",
    authors:"Di Pastena F, Gautam J, Lally JSV, Fayyazi R, Grasset E, Bhattacharya D, Fidelito G, Ahmadi E, Townsend LK, Batchuluun B, et al. (Steinberg GR)",
    journal:"Cell Metabolism",
    year:2026,
    vol:"38(1): 33–49.e10",
    doi:"10.1016/j.cmet.2025.11.015",
    url:"https://www.cell.com/cell-metabolism/fulltext/S1550-4131(25)00529-7",
    primary:"D",
    tags:["D","B","H"],
    approach:"in vivo (4マウスモデル) ＋ scRNA-seq/空間TX ＋ ヒト肝スライス ＋ 初代HSC",
    struct:{
      model:"mixed", cells:["肝細胞","HSC"], triggers:["TGFβ1","酢酸/アセチルCoA","HFHSD/WD+CCl4食"],
      steatosis:"○", inflammation:"△", fibrosis:"○", readout:["COL1A1","TGFβ1誘導HSC活性化","Sirius red病理"],
      ignite:"HSC自身のACSS2依存酢酸代謝＋コレステロール合成が活性化に必須。酢酸添加でセカンドヒット、ACSS2阻害でネガコン。",
      params:[{name:"アセチルCoA産生速度 → HSC活性化確率",note:"ACLY/ACSS2フラックスを状態変数化"},{name:"HSCコレステロール合成速度 → COL1A1産生速度",note:"HMGCRを評価軸に追加"}],
      todos:["酢酸添加でHSCセカンドヒットを設計","ACSS2阻害(EVT0185)を線維化ネガコンに","steatosis評価軸にHMGCR/コレステロール合成を追加"]
    },
    figure:"<svg viewBox='0 0 640 270' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar07' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--ink-soft)'/></marker><marker id='ar07h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs><text x='12' y='16' font-size='11' fill='var(--ink-soft)'>アセチルCoAの2産生経路（ACLY/ACSS2）がsteatosisとHSC活性化を同時駆動 → EVT0185で遮断</text><rect x='8' y='26' width='286' height='108' rx='7' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.2' stroke-dasharray='5 3'/><text x='151' y='42' text-anchor='middle' font-size='11' fill='var(--D)'>肝細胞</text><rect x='16' y='50' width='86' height='34' rx='5' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.3'/><text x='59' y='65' text-anchor='middle' font-size='11'>クエン酸</text><text x='59' y='79' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>→ ACLY</text><rect x='16' y='94' width='86' height='34' rx='5' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.3'/><text x='59' y='109' text-anchor='middle' font-size='11'>酢酸</text><text x='59' y='123' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>→ ACSS2</text><ellipse cx='155' cy='81' rx='38' ry='22' fill='var(--paper)' stroke='var(--D)' stroke-width='1.8'/><text x='155' y='77' text-anchor='middle' font-size='10' fill='var(--D)'>アセチルCoA</text><text x='155' y='90' text-anchor='middle' font-size='10' fill='var(--D)'>ハブ</text><line x1='102' y1='68' x2='120' y2='76' stroke='var(--ink-soft)' marker-end='url(#ar07)'/><line x1='102' y1='111' x2='120' y2='92' stroke='var(--ink-soft)' marker-end='url(#ar07)'/><rect x='214' y='50' width='72' height='56' rx='5' fill='var(--paper)' stroke='var(--D)' stroke-width='1.3'/><text x='250' y='71' text-anchor='middle' font-size='11'>DNL</text><text x='250' y='86' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>TG蓄積</text><text x='250' y='101' text-anchor='middle' font-size='10' fill='var(--D)'>steatosis</text><line x1='193' y1='81' x2='212' y2='81' stroke='var(--ink-soft)' marker-end='url(#ar07)'/><rect x='8' y='148' width='286' height='112' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.2' stroke-dasharray='5 3'/><text x='151' y='164' text-anchor='middle' font-size='11' fill='var(--B)'>肝星細胞 (HSC)</text><rect x='16' y='172' width='98' height='36' rx='5' fill='var(--paper)' stroke='var(--B)' stroke-width='1.3'/><text x='65' y='187' text-anchor='middle' font-size='11'>ACSS2 ↑</text><text x='65' y='202' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>酢酸代謝 ↑</text><rect x='130' y='172' width='106' height='36' rx='5' fill='var(--paper)' stroke='var(--B)' stroke-width='1.3'/><text x='183' y='187' text-anchor='middle' font-size='11'>コレステロール</text><text x='183' y='202' text-anchor='middle' font-size='10' fill='var(--B)'>合成 ↑</text><rect x='76' y='220' width='152' height='32' rx='5' fill='var(--paper)' stroke='var(--B)' stroke-width='2'/><text x='152' y='240' text-anchor='middle' font-size='12' fill='var(--B)'>HSC活性化 → 線維化</text><line x1='114' y1='208' x2='133' y2='222' stroke='var(--ink-soft)' marker-end='url(#ar07)'/><line x1='183' y1='208' x2='172' y2='220' stroke='var(--ink-soft)' marker-end='url(#ar07)'/><rect x='334' y='82' width='148' height='74' rx='7' fill='var(--paper)' stroke='var(--H)' stroke-width='2'/><text x='408' y='108' text-anchor='middle' font-size='13' fill='var(--H)'>EVT0185</text><text x='408' y='126' text-anchor='middle' font-size='11' fill='var(--H)'>ACLY ＋ ACSS2</text><text x='408' y='143' text-anchor='middle' font-size='11' fill='var(--H)'>二重阻害</text><path d='M334,100 C314,100 310,78 294,78' fill='none' stroke='var(--H)' stroke-dasharray='4 3' stroke-width='1.5' marker-end='url(#ar07h)'/><text x='296' y='74' font-size='10' fill='var(--H)'>⊣ ACLY</text><path d='M334,150 C314,150 310,195 294,195' fill='none' stroke='var(--H)' stroke-dasharray='4 3' stroke-width='1.5' marker-end='url(#ar07h)'/><text x='296' y='207' font-size='10' fill='var(--H)'>⊣ ACSS2</text><rect x='510' y='50' width='120' height='36' rx='5' fill='var(--paper)' stroke='var(--D)' stroke-width='1.5'/><text x='570' y='66' text-anchor='middle' font-size='11.5' fill='var(--D)'>Steatosis 軽減</text><text x='570' y='81' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>TG・DNL ↓</text><rect x='510' y='174' width='120' height='36' rx='5' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='570' y='190' text-anchor='middle' font-size='11.5' fill='var(--B)'>線維化 解消</text><text x='570' y='205' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>MASH 改善</text><line x1='286' y1='78' x2='508' y2='68' stroke='var(--ink-soft)' stroke-width='1' stroke-dasharray='3 3' marker-end='url(#ar07)'/><line x1='228' y1='236' x2='508' y2='194' stroke='var(--ink-soft)' stroke-width='1' stroke-dasharray='3 3' marker-end='url(#ar07)'/><path d='M482,105 C495,105 500,72 508,68' fill='none' stroke='var(--H)' stroke-width='1.5' marker-end='url(#ar07h)'/><path d='M482,150 C495,150 500,186 508,192' fill='none' stroke='var(--H)' stroke-width='1.5' marker-end='url(#ar07h)'/></svg>",
    method_figure:"<svg viewBox='0 0 640 230' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m07' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><text x='18' y='18' font-size='12' fill='var(--ink-soft)'>4種MASHマウスモデル × EVT0185 → scRNA-seq/空間TX解析 ＋ ヒト肝・HSC検証</text><rect x='8' y='30' width='138' height='50' rx='7' fill='var(--paper)' stroke='var(--D)' stroke-width='1.5'/><text x='77' y='52' text-anchor='middle' font-size='11.5'>4種MASHマウス</text><text x='77' y='69' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>HFHSD/WD+CCl4 他</text><rect x='8' y='96' width='138' height='50' rx='7' fill='var(--paper)' stroke='var(--H)' stroke-width='1.8'/><text x='77' y='118' text-anchor='middle' font-size='11.5' fill='var(--H)'>EVT0185 投与</text><text x='77' y='135' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>± セマグルチド</text><line x1='77' y1='80' x2='77' y2='94' stroke='var(--accent)' marker-end='url(#m07)'/><rect x='194' y='36' width='152' height='50' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/><text x='270' y='58' text-anchor='middle' font-size='11.5'>scRNA-seq</text><text x='270' y='75' text-anchor='middle' font-size='10.5' fill='var(--G)'>＋ 空間TX</text><rect x='194' y='98' width='152' height='50' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='270' y='120' text-anchor='middle' font-size='11.5'>HSC ACSS2/</text><text x='270' y='136' text-anchor='middle' font-size='10.5' fill='var(--B)'>コレステロール解析</text><path d='M146,57 C164,57 174,62 192,62' fill='none' stroke='var(--accent)' marker-end='url(#m07)'/><path d='M146,120 C164,120 174,120 192,122' fill='none' stroke='var(--accent)' marker-end='url(#m07)'/><rect x='402' y='28' width='228' height='50' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='516' y='50' text-anchor='middle' font-size='11.5'>ヒト肝スライス</text><text x='516' y='66' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>DNL阻害を確認</text><rect x='402' y='92' width='228' height='50' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='516' y='114' text-anchor='middle' font-size='11.5'>ヒト初代HSC in vitro</text><text x='516' y='130' text-anchor='middle' font-size='10' fill='var(--B)'>TGFβ1活性化をブロック</text><path d='M346,60 C370,60 388,52 400,50' fill='none' stroke='var(--accent)' marker-end='url(#m07)'/><path d='M346,123 C370,123 388,116 400,116' fill='none' stroke='var(--accent)' marker-end='url(#m07)'/><rect x='402' y='158' width='228' height='56' rx='7' fill='var(--paper)' stroke='var(--D)' stroke-width='1.5'/><text x='516' y='180' text-anchor='middle' font-size='11.5'>アウトカム</text><text x='516' y='197' text-anchor='middle' font-size='10' fill='var(--D)'>TG ↓ / 線維化 ↓ / MASH解消</text><text x='516' y='211' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>bempedoic acid 単独より有効</text><path d='M270,148 C270,164 340,172 400,178' fill='none' stroke='var(--accent)' stroke-dasharray='3 3' marker-end='url(#m07)'/></svg>",
    abstract_ja:"MASHは脂肪化・炎症・HSC活性化による線維化を特徴とする。その鍵となるアセチルCoAはDNLとコレステロール合成の中核となる代謝ハブで、クエン酸からはACLYを介して、酢酸からはACSS2を介して産生される。本研究は、ACLYとACSS2の二重阻害薬EVT0185が、血清・肝臓TG・インスリン抵抗性・線維化を4種の独立したMASHマウスモデルでいずれも有意に軽減することを示した。EVT0185はin vivo・in vitroのいずれでもHSCを直接標的にして活性化を抑制し、scRNA-seqと空間TXからは、HSCにおけるACSS2依存の酢酸代謝とコレステロール合成こそがHSC活性化の主要ドライバーであることが判明した。さらにヒト肝スライスではDNLを阻害し、TGFβ1で誘導したヒト初代HSCの活性化もブロックした。以上より、ACLYとACSS2の二重阻害がMASH・肝線維化の有望な治療戦略であることが示された。",
    background:"MASHにおけるHSC活性化・線維化の代謝的ドライバーは不明だった。アセチルCoAはDNL・コレステロール合成に必須の代謝ハブであり、ACLY（クエン酸→アセチルCoA）とACSS2（酢酸→アセチルCoA）という2経路から供給される。ACLY単独の阻害は既存薬として存在するものの、2経路を同時に遮断して脂肪化と線維化を同時に標的とする戦略は未検証であり、そもそもHSC自体の酢酸代謝やコレステロール合成が活性化の必須ドライバーなのかも分かっていなかった。",
    achievements:[
      "EVT0185が4種の独立したMASHマウスモデルで血清・肝TG、インスリン抵抗性、MASH病理、線維化を有効に解消（セマグルチド相乗効果、ACLY単独阻害より有効）。",
      "EVT0185がHSCをin vivo・in vitroで直接標的にして活性化を抑制（HSC特異的効果）。",
      "scRNA-seq＋空間TXにより、HSCでのACSS2依存の酢酸代謝抑制とコレステロール合成低下が線維化解消の主要ドライバーと解明。",
      "ヒト肝スライスでのDNL阻害、TGFβ1誘導ヒト初代HSC活性化のブロックを実証（ヒト妥当性）。"
    ],
    limitations:[
      "4種のマウスモデルが中心で、ヒトでの安全性・薬物動態・有効性はまだ臨床前段階。",
      "EVT0185の骨格筋・脂肪組織など肝外への影響の詳細は不明。",
      "既存承認薬（レズメチロム等）との直接比較なし。",
      "in vivoでのACLYとACSS2それぞれの個別寄与（steatosis vs fibrosis）のさらなる切り分けが必要。"
    ],
    connection:[
      "steatosisの分子基盤を補完：自系の堅牢な脂肪化の機構としてACLY（クエン酸→アセチルCoA）とACSS2（酢酸→アセチルCoA）の二経路が主要ドライバーと示す。SREBP1c・FASN・ACACへのリードアウトに加え、コレステロール合成（HMGCR）も評価軸に追加できる。",
      "線維化の点火ヒント：HSC活性化がHSC自身のACSS2依存酢酸代謝とコレステロール合成に必須。酢酸添加でHSCセカンドヒット設計、ACSS2阻害でネガコンが可能。",
      "ABM実装：「アセチルCoA産生速度→HSCコレステロール合成速度→HSC活性化確率→COL1A1産生速度」のルール化が可能。代謝フラックスを状態変数に。",
      "既収録との接続：#03（TGFβ→ATF4→HSC転写）との組み合わせでHSC活性化の転写（#03）＋代謝（本論文）の二面が揃う。#04（iPSC-MPSでの脂肪組織炎症→肝脂質蓄積・インスリン抵抗性）と合わせ炎症→代謝→steatosis連鎖モデルへ。#06（Kappa規則ベースのHSC多スケールモデル／iHSC再活性化ループ）のエネルギー源としてACSS2依存酢酸代謝をHSCエージェントパラメータに組み込める。"
    ],
    glossary:[
      {term:"ACLY",full:"ATP citrate lyase",desc:"クエン酸→アセチルCoAを産生する酵素。DNL・コレステロール合成の主要供給源"},
      {term:"ACSS2",full:"acyl-CoA synthetase short chain 2",desc:"酢酸→アセチルCoAを産生する酵素。HSCの活性化・線維化に必要"},
      {term:"DNL",full:"de novo lipogenesis",desc:"アセチルCoAから脂肪酸を新規合成する経路。肝steatosisの主因"},
      {term:"EVT0185",full:"EVT0185 (Espervita dual ACLY/ACSS2 inhibitor)",desc:"ACLYとACSS2の二重阻害薬。MASH・線維化を前臨床で解消"},
      {term:"SREBP1c",full:"sterol regulatory element-binding protein 1c",desc:"インスリン・糖応答性の脂肪酸合成マスター転写因子"},
      {term:"HMGCR",full:"3-hydroxy-3-methylglutaryl-CoA reductase",desc:"コレステロール合成の律速酵素（スタチン標的）"},
      {term:"bempedoic acid",full:"bempedoic acid (ETC-1002)",desc:"ACLY単独阻害薬（高コレステロール血症承認済み）。EVT0185との比較対照"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("07", [{ic:"mouse",cap:"4種MASHモデル"},{ic:"hepatocyte",cap:"DNL/steatosis"},{ic:"stellate",cap:"HSC活性化"},{ic:"drug",cap:"EVT0185"},{ic:"omics",cap:"scRNA-seq/空間TX"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 07 Di Pastena Cell Metab 2026: 4マウスモデル+ヒト肝スライス+初代HSC+scRNA+空間TX+組織染色 */
LP.methods("07", ["mouse","human","invitro","drug","scrna","spatial","qpcr","wb","elisa","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* №07 EVT0185（ACLY/ACSS2二重阻害） */
LP.cinema("07", {
  svg:`<defs>
    <radialGradient id="hepg7" cx="0.4" cy="0.32" r="0.85"><stop offset="0" stop-color="#f6e7c8"/><stop offset="1" stop-color="#dcc18c"/></radialGradient>
    <radialGradient id="dropg7" cx="0.35" cy="0.3" r="0.75"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#d9a441"/></radialGradient>
    <radialGradient id="accg7" cx="0.4" cy="0.35" r="0.7"><stop offset="0" stop-color="#fff2c0"/><stop offset="1" stop-color="#e8b73a"/></radialGradient>
    <radialGradient id="pillg7" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stop-color="#d98a8a"/><stop offset="1" stop-color="#a23b3b"/></radialGradient>
    <marker id="aB7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--B)"/></marker>
  </defs>
  <rect x="0" y="0" width="720" height="430" fill="#eef3f6"/>
  <g id="hep">
    <path d="M40,70 C60,40 150,30 210,48 C280,40 330,70 320,130 C345,180 320,250 250,262 C180,280 70,270 48,210 C20,170 22,100 40,70 Z" fill="url(#hepg7)" stroke="#c2a268" stroke-width="2.5"/>
    <ellipse cx="120" cy="120" rx="26" ry="22" fill="#b79a64" opacity="0.85"/><ellipse cx="120" cy="120" rx="11" ry="10" fill="#8a7038"/>
    <text x="185" y="60" font-size="11" fill="#9c7b3a">肝細胞</text>
    <g id="gateACLY"><circle cx="62" cy="160" r="11" fill="#fff" stroke="var(--D)" stroke-width="2.4"/><text x="62" y="186" text-anchor="middle" font-size="10" font-weight="600" fill="var(--D)">ACLY</text></g>
    <g id="gateACSS2"><circle cx="62" cy="220" r="11" fill="#fff" stroke="var(--D)" stroke-width="2.4"/><text x="62" y="246" text-anchor="middle" font-size="10" font-weight="600" fill="var(--D)">ACSS2</text></g>
    <g id="acc" class="fade"><circle cx="150" cy="190" r="15" fill="url(#accg7)" stroke="#c79320" stroke-width="1.5"/><text x="150" y="194" text-anchor="middle" font-size="8.5" fill="#7a5a12">AcCoA</text></g>
  </g>
  <g id="feed" class="fade">
    <g><circle cx="18" cy="160" r="8" fill="#cfe0ee" stroke="var(--E)" stroke-width="1.4"/><text x="18" y="146" text-anchor="middle" font-size="9" fill="var(--ink-soft)">クエン酸</text></g>
    <g><circle cx="18" cy="220" r="8" fill="#cfe0ee" stroke="var(--E)" stroke-width="1.4"/><text x="18" y="240" text-anchor="middle" font-size="9" fill="var(--ink-soft)">酢酸</text></g>
  </g>
  <g id="drops"></g>
  <g id="hsc" transform="translate(470,300)">
    <path id="hscShape" d="M0,-12 L26,-34 L9,-6 L40,-3 L11,6 L24,32 L1,10 L-22,34 L-6,6 L-38,5 L-8,-5 L-24,-32 Z" fill="#d6a08e" stroke="var(--B)" stroke-width="1.6"/>
    <circle cx="0" cy="0" r="7" fill="#7a3a2c"/>
    <text id="hscCap" x="0" y="52" text-anchor="middle" font-size="10.5" fill="var(--ink-soft)">肝星細胞</text>
    <g id="hscIn" class="fade">
      <g id="acss2tag"><rect x="-120" y="-50" width="70" height="24" rx="12" fill="#fff" stroke="var(--B)" stroke-width="1.6"/><text x="-85" y="-33" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--B)">ACSS2↑</text></g>
      <line x1="-50" y1="-38" x2="-13" y2="-8" stroke="var(--B)" stroke-width="1.4" marker-end="url(#aB7)"/>
      <g id="choltag"><polygon points="-95,16 -80,8 -65,16 -65,32 -80,40 -95,32" fill="#fff" stroke="var(--B)" stroke-width="1.6"/><text x="-80" y="27" text-anchor="middle" font-size="8" fill="var(--B)">Chol</text><text x="-80" y="56" text-anchor="middle" font-size="9.5" fill="var(--B)">合成↑</text></g>
      <line x1="-63" y1="24" x2="-15" y2="6" stroke="var(--B)" stroke-width="1.4" marker-end="url(#aB7)"/>
    </g>
  </g>
  <g id="collagen" opacity="0"></g>
  <g id="pill" class="fade" transform="translate(600,70)">
    <rect x="-44" y="-16" width="88" height="32" rx="16" fill="url(#pillg7)" stroke="#7e2b2b" stroke-width="1.5"/>
    <rect x="-44" y="-16" width="44" height="32" rx="16" fill="#e8b3b3" opacity="0.6"/>
    <text x="0" y="5" text-anchor="middle" font-size="11" font-weight="600" fill="#fff">EVT0185</text>
  </g>
  <g id="goodend" class="fade" transform="translate(600,300)">
    <circle r="40" fill="#fff" stroke="var(--B)" stroke-width="2.4"/>
    <text x="0" y="-4" text-anchor="middle" font-size="13" fill="var(--B)">線維化</text><text x="0" y="15" text-anchor="middle" font-size="13" fill="var(--B)">退縮 ✓</text>
  </g>`,
  build(K){
    const dropPos=[[170,110],[210,140],[150,150],[230,100],[195,185],[120,200],[250,165],[175,225],[235,210],[140,90]];
    const QUIET="M0,-12 L26,-34 L9,-6 L40,-3 L11,6 L24,32 L1,10 L-22,34 L-6,6 L-38,5 L-8,-5 L-24,-32 Z";
    const SPINDLE="M-40,-8 C-14,-15 16,-15 42,-7 C52,-3 52,3 42,7 C16,15 -14,15 -40,8 C-50,3 -50,-3 -40,-8 Z";
    function addDrops(){const g=K.$("drops");dropPos.forEach((p,i)=>K.T(()=>{
      const c=K.cE("circle",{cx:p[0],cy:p[1],r:1,fill:"url(#dropg7)",stroke:"#b8862f","stroke-width":"0.7"});g.appendChild(c);
      const t0=performance.now(),target=8+Math.random()*7,dur=1400;
      const st=now=>{const q=Math.max(0,Math.min(1,(now-t0)/dur));c.setAttribute("r",(1+(target-1)*q).toFixed(1));if(q<1)K.raf(st);};K.raf(st);
    },i*160));}
    function shrinkDrops(){const g=K.$("drops");[...g.children].forEach((c,i)=>K.T(()=>{
      const from=+c.getAttribute("r"),t0=performance.now(),dur=1300;
      const st=now=>{const q=Math.max(0,Math.min(1,(now-t0)/dur));c.setAttribute("r",(from*(1-0.8*q)).toFixed(1));if(q<1)K.raf(st);};K.raf(st);
    },i*70));}
    return [
      {color:"E",cap:"健常な肝類洞。肝細胞・LSEC・KC・HSCが定常状態にある。",run(){K.show(["feed"]);}},
      {color:"D",cap:"① アセチルCoA供給（ACLY/ACSS2）が亢進し、肝細胞にDNL由来の脂肪滴が蓄積（steatosis）。",run(){
        K.show(["acc"]);
        K.flow(18,160,62,160,"#7ea8d0",{loop:2});K.flow(18,220,62,220,"#7ea8d0",{loop:2});
        K.T(()=>{K.flow(62,160,150,190,"#e8b73a",{loop:2});K.flow(62,220,150,190,"#e8b73a",{loop:2});},800);
        K.pulse("acc");K.T(addDrops,1400);
      }},
      {color:"B",cap:"② HSCがACSS2/コレステロール合成を介して活性化し、コラーゲンを過剰産生 → 線維化。",run(){
        K.show(["hscIn"]);
        K.flow(230,200,350,263,"#e8b73a",{dur:1.3,loop:2});
        K.T(()=>{K.pulse("acss2tag");K.pulse("choltag");
          K.flow(386,263,470,300,"var(--B)",{dur:0.9,loop:2});K.flow(380,316,470,300,"var(--B)",{dur:0.9,loop:2});},1100);
        K.T(()=>{K.morph("hscShape",SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化（筋線維芽細胞）");
          K.unpulse("acss2tag");K.unpulse("choltag");},2000);
        K.T(()=>K.draw("collagen",["M430,300 C470,285 510,290 545,288","M428,318 C475,332 515,322 548,326","M432,335 C470,322 512,340 548,334"],{len:160}),2700);
      }},
      {color:"H",cap:"③ ACLY＋ACSS2を二重阻害するEVT0185が脂肪化とHSC活性化を同時に抑え、線維化が退縮。",run(){
        K.show(["pill"]);
        K.T(()=>{K.strike(600,70,62,160);K.strike(600,70,62,220);K.strike(600,70,360,262);
          K.T(()=>{
            ["gateACLY","gateACSS2"].forEach(g=>{const c=K.$(g).querySelector("circle");c.setAttribute("stroke","var(--H)");c.setAttribute("fill","#f0d2d2");});
            K.markX(62,160);K.markX(62,220);K.markX(360,262);
            K.$("acss2tag").querySelector("rect").setAttribute("stroke","var(--H)");
            K.unpulse("acc");shrinkDrops();
            K.attr("collagen","opacity","0.28");K.attr("hscShape","opacity","0.5");
            K.show(["goodend"]);
          },780);
        },800);
      }},
    ];
  }
});
