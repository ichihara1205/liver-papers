/* ============================================================
   №21 · Nature Communications 2025 · Martínez García de la Torre RA†, Vallverdú J, Xu Z, Ariño S, Ferrer-L…
   RORA依存的代謝制御がHSCの分化コミットメント・静止維持・線維化を支配——iPSCプロテオーム軌跡からの発見
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"21",
    title:"RORA依存的代謝制御がHSCの分化コミットメント・静止維持・線維化を支配——iPSCプロテオーム軌跡からの発見",
    authors:"Martínez García de la Torre RA†, Vallverdú J, Xu Z, Ariño S, Ferrer-Lorente R, Zanatto L, Mercado-Gómez M, Aguilar-Bravo B, Ruiz-Blázquez P, Fernandez-Fernandez M, …, Affo S†, Sancho-Bru P†（責任著者, IDIBAPS・Hospital Clínic Barcelona）",
    journal:"Nature Communications",
    year:2025,
    vol:"16:1489",
    doi:"10.1038/s41467-025-56024-4",
    url:"https://www.nature.com/articles/s41467-025-56024-4",
    primary:"B",
    tags:["B","D","H"],
    approach:"in vitro（iPSC→diHSC 7タイムポイントMS-basedプロテオーム軌跡）＋ ヘテロ接合RORA-KO iPSC・dox誘導KO ＋ in vivo（staggerer・HSC特異的Rora欠失マウスで線維化増悪、RORAアゴニストSR1078で肝・心・腎の線維化軽減）＋ ヒト慢性肝疾患検体・コホートでRORA発現と線維化の相関",
    added:"2026-06-05",
    abstract_ja:"細胞分化の軌跡を時系列で追うことは細胞同一性と疾患機序の理解に不可欠だが、ヒト細胞では技術的に困難であった。本研究はヒトiPSCを機能的な肝星細胞（diHSC）へ誘導する系を用い、分化の7タイムポイントにわたる質量分析ベースのプロテオーム軌跡（3,064タンパク）を構築し、核内受容体転写因子RORAがHSCの分化コミットメント・同一性・静止維持に不可欠であることを発見した。RORAはHSCの高エネルギー代謝状態（糖解・ミトコンドリア酸化的リン酸化）を抑えることで静止表現型を保っており、RORA欠損iPSC由来diHSCでは分化障害と活性化促進が生じ、RORA欠損マウスでは線維化が増悪した。一方でRORAアゴニストは肝のみならず複数臓器の線維化を軽減し、ヒト慢性肝疾患患者でもRORA発現は肝線維化・HSC活性化マーカーと逆相関した。RORAが中胚葉分化・ペリサイト静止・線維化に共通する代謝制御のハブとして機能することを示した成果であり、多臓器の抗線維化標的として期待される。",
    background:"肝線維化の中核はHSCが静止期から筋線維芽細胞へ形質転換することにあり、TGFβ等の外来シグナルがその引き金として知られてきた。しかし「qHSCが細胞同一性（ビタミンAペリサイト）をいかに確立・維持するか」という発生的・代謝的基盤は未解明であった。発生期のHSCで高発現する転写因子が活性化時に低下するという知見はあったものの、分化軌跡全体での変動パターンと代謝リプログラミングとの連動は体系的に示されていなかった。iPSCからHSCへの時系列プロテオームを構築することで、分化と線維化に共通するシグナル交差点を網羅的に探索するというアプローチが取られた。",
    achievements:[
      "iPSC→diHSC分化の**7タイムポイントMS-basedプロテオーム軌跡**（3,064タンパク・2,475定量）を構築し、**RORA**を分化コミットメントと静止維持の新規キー転写因子として同定した。",
      "ヘテロ接合RORA-KO iPSCでは分化初期（day 4以降）に約80%の細胞が死滅して中胚葉分化が障害され、分化後半にdox誘導でRORAを欠失させる（またはRORA拮抗薬SR1001を投与する）と**活性化型の表現型（紡錘形・ECM産生増加）**が強まった。",
      "RORAは**糖解・OXPHOSを抑制**してHSCを低エネルギー代謝状態に保っており、RORA低下が活性化の代謝スイッチの引き金となることを示した。",
      "**RORA欠損マウス（staggerer、およびHSC特異的Rora欠失）でCCl4線維化が増悪**し、**RORAアゴニストSR1078が肝・心臓・腎臓の線維化を軽減**した（腎UUOではヒドロキシプロリン低下のみで、αSMAは有意差なし）。ペリサイト静止の汎臓器性を示唆する。",
      "**ヒト慢性肝疾患検体・コホート**において、RORA発現が肝硬変で低下し、Metavir F1–4で低下・FIB4と負に相関、HSC活性化マーカーとも逆相関することを示した。"
    ],
    limitations:[
      "diHSCは初代ヒトHSCとプロテオームの60%超を共有する一方、増殖性が高いなどiPSC由来細胞に特有の差が残り、初代qHSCと完全には一致しない。",
      "staggererマウスは全身性変異であり、HSC特異的Rora欠失（Lrat-Cre、ヘテロ接合）でも線維化は増悪したが、**ホモ欠失での検証**は未実施。RORA-KO iPSCもヘテロ接合のみ。",
      "RORAは肝以外にも広く発現する核内受容体であり、全身性アゴニスト投与の**副作用リスク**は未解決。",
      "RORA下流で糖解/OXPHOSを具体的にどの因子を介して制御するかの完全な分子機序は部分的にしか解明されていない。"
    ],
    connection:[
      "私の最重要課題「fibrosisをどう点火するか」に対し、本論文は**HSC活性化の代謝的引き金（糖解・OXPHOS亢進）**という新たな視点を与える。自系の初代HSCにRORAアゴニストを添加してqHSC状態を人工的に安定化し、その後のセカンドヒット（LPS・FFA）でRORAを低下させてfibrosisを点火するプロトコルを設計できる。",
      "RORA発現をHSCの静止/活性化バイオマーカーとして自系のqPCRパネルに追加することで、共培養系でのHSC状態をリアルタイムに追跡できる。**RORAがLSEC由来のangiocrine因子（NO・VEGF）で維持されるか**も検証価値がある（#14 ROCK2との接続）。",
      "ABM実装：HSCエージェントに「RORA濃度→糖解/OXPHOS係数→活性化確率」のルールを持たせ、RORAアゴニストを治療介入イベントとして組み込む。#06（HSC多状態モデル）・#03（ATF4→非定型エンハンサー）・#20（NTF3→NTRK3自己分泌ループ）と合わせて、HSC活性化機序の多層的なABMルール群を構成できる。",
      "多臓器ペリサイト静止という知見は、私の系がMASLD固有の肝フォーカスであることの特殊性と普遍性の両面を考える上で示唆的。"
    ],
    glossary:[
      {term:"RORA",full:"RAR-related orphan receptor alpha",desc:"核内受容体転写因子。HSCの糖解/OXPHOSを抑制して静止表現型を維持。欠損→線維化増悪、アゴニスト→線維化軽減"},
      {term:"diHSC",full:"iPSC-differentiated hepatic stellate cell",desc:"iPSCから分化誘導した肝星細胞（Sancho-Bruら命名。#19のhiPSC-HSCと同概念）"},
      {term:"OXPHOS",full:"oxidative phosphorylation",desc:"ミトコンドリア電子伝達系によるATP産生。RORA低下で亢進しHSC活性化の代謝的引き金となる"},
      {term:"SR1078",full:"SR1078 (RORα synthetic agonist)",desc:"合成RORAアゴニスト。HSC活性化抑制・線維化軽減のin vitro/in vivo薬理ツール"}
    ],
    struct:{
      model:"in vitro + in vivo + ヒト組織",
      cells:["diHSC（iPSC由来）","マウスHSC"],
      triggers:["RORA欠損（遺伝子KO）","慢性肝傷害（CCl4）"],
      steatosis:"—",
      inflammation:"—",
      fibrosis:"○",
      readout:["αSMA/COL1A1（qPCR/WB）","Sirius Red染色","プロテオームプロファイル（MS）","RORA発現（ヒト相関）"],
      ignite:"RORA低下→糖解/OXPHOS亢進（代謝スイッチ）→HSCが活性化コミット",
      params:[
        {name:"RORA→代謝係数",note:"RORA発現量が糖解/OXPHOS速度を制御→qHSC/aHSC状態確率に変換。ABMの活性化ルール根拠"},
        {name:"RORAアゴニスト治療介入",note:"SR1078等でRORAを強制回復→活性化確率を下げる治療イベントとして実装可能"}
      ],
      todos:[
        "自系のHSCにRORAアゴニスト（SR1078等）を添加して活性化マーカー（αSMA/RORA）変化を測定",
        "RORA発現を自系のHSC静止/活性化マーカーパネルに追加し経時測定",
        "RORAをABMのHSCエージェントに『エネルギー代謝係数→活性化確率』として組み込む"
      ]
    },
    figure:`<svg viewBox='0 0 640 340' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs><marker id='ar21' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker><marker id='ar21e' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--E)'/></marker><marker id='ar21h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs>
  <rect x='0' y='0' width='640' height='340' fill='var(--paper)'/>
  <text x='320' y='20' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>RORA依存的代謝制御：HSC静止の維持と線維化活性化の分岐点</text>
  <!-- qHSC (left) -->
  <rect x='20' y='40' width='170' height='200' rx='12' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.8'/>
  <text x='105' y='60' text-anchor='middle' font-size='10.5' fill='var(--E)' font-weight='600'>静止期 HSC（qHSC）</text>
  <path d='M105,115 L120,90 L109,112 L132,110 L110,120 L122,145 L106,122 L90,145 L100,120 L78,112 L100,110 Z' fill='#d6a08e' stroke='var(--E)' stroke-width='1.4'/>
  <ellipse cx='105' cy='115' rx='22' ry='16' fill='none' stroke='var(--E)' stroke-width='1.4'/>
  <polygon points='105,109 110,115 105,121 100,115' fill='var(--E)' opacity='.9'/>
  <text x='105' y='107' text-anchor='middle' font-size='8' fill='var(--E)' font-weight='700'>RORA</text>
  <circle cx='84' cy='148' r='6' fill='#ffe9a0' stroke='#d9a441' stroke-width='1'/><circle cx='98' cy='152' r='7' fill='#ffe9a0' stroke='#d9a441' stroke-width='1'/><circle cx='115' cy='149' r='5.5' fill='#ffe9a0' stroke='#d9a441' stroke-width='1'/>
  <text x='105' y='172' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>VitA脂質滴↑</text>
  <text x='105' y='187' text-anchor='middle' font-size='8.5' fill='var(--E)'>糖解/OXPHOS 低↓</text>
  <text x='105' y='202' text-anchor='middle' font-size='8.5' fill='var(--E)'>ECM産生 低↓</text>
  <!-- arrow: injury/RORA loss -->
  <path d='M192,140 L280,140' stroke='var(--B)' stroke-width='2' marker-end='url(#ar21)'/>
  <text x='236' y='128' text-anchor='middle' font-size='9' fill='var(--B)'>障害</text>
  <text x='236' y='140' text-anchor='middle' font-size='9' fill='var(--B)'>RORA↓</text>
  <text x='236' y='152' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>代謝スイッチ</text>
  <!-- aHSC (right) -->
  <rect x='282' y='40' width='170' height='200' rx='12' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.8'/>
  <text x='367' y='60' text-anchor='middle' font-size='10.5' fill='var(--B)' font-weight='600'>活性化 HSC（aHSC）</text>
  <path d='M330,118 C344,110 390,108 410,115 C420,118 420,124 410,127 C390,134 344,132 330,125 C320,122 320,120 330,118 Z' fill='#b0432f' stroke='var(--B)' stroke-width='1.4'/>
  <ellipse cx='367' cy='121' rx='22' ry='16' fill='none' stroke='var(--B)' stroke-width='1.2' opacity='.4'/>
  <polygon points='367,116 372,121 367,126 362,121' fill='var(--B)' opacity='.2'/>
  <text x='367' y='113' text-anchor='middle' font-size='8' fill='var(--B)' opacity='.4'>RORA↓</text>
  <text x='367' y='149' text-anchor='middle' font-size='8.5' fill='var(--B)'>糖解/OXPHOS ↑↑</text>
  <text x='367' y='164' text-anchor='middle' font-size='8.5' fill='var(--B)'>αSMA/COL1A1 ↑↑</text>
  <text x='367' y='179' text-anchor='middle' font-size='8.5' fill='var(--B)'>ECM過剰産生</text>
  <text x='367' y='195' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>→ 線維化</text>
  <!-- RORA agonist rescue -->
  <path d='M192,240 L282,240' stroke='var(--H)' stroke-width='2' stroke-dasharray='5,3'/>
  <text x='237' y='228' text-anchor='middle' font-size='9' fill='var(--H)'>RORAアゴニスト</text>
  <text x='237' y='240' text-anchor='middle' font-size='9' fill='var(--H)'>(SR1078等)</text>
  <text x='237' y='256' text-anchor='middle' font-size='8.5' fill='var(--H)'>→ 多臓器線維化軽減</text>
  <!-- Human correlation -->
  <rect x='476' y='40' width='148' height='90' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/>
  <text x='550' y='58' text-anchor='middle' font-size='9.5' fill='var(--ink)' font-weight='600'>ヒト慢性肝疾患患者</text>
  <text x='550' y='74' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>RORA発現↓</text>
  <text x='550' y='88' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>↕ 逆相関</text>
  <text x='550' y='102' text-anchor='middle' font-size='8.5' fill='var(--B)'>線維化グレード↑</text>
  <text x='550' y='116' text-anchor='middle' font-size='8.5' fill='var(--B)'>HSC活性化↑</text>
  <path d='M453,90 L476,90' stroke='var(--accent)' stroke-width='1.4' marker-end='url(#ar21e)'/>
  <!-- proteome -->
  <rect x='476' y='148' width='148' height='80' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/>
  <text x='550' y='166' text-anchor='middle' font-size='9.5' fill='var(--ink)' font-weight='600'>プロテオーム軌跡</text>
  <text x='550' y='181' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>iPSC→diHSC D0→D12</text>
  <text x='550' y='196' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>3,064タンパク同定</text>
  <text x='550' y='211' text-anchor='middle' font-size='8.5' fill='var(--accent)'>→ RORA同定</text>
  <!-- bottom note -->
  <text x='320' y='276' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>RORA欠損マウス：線維化増悪｜RORAアゴニスト：肝・多臓器（ペリサイト）線維化を軽減</text>
  <text x='320' y='292' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>RORAは中胚葉分化・ペリサイト静止・線維化の共通代謝制御ハブ</text>
</svg>`,
    method_figure:`<svg viewBox='0 0 640 290' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs><marker id='m21' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--E)'/></marker><marker id='m21b' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--B)'/></marker><marker id='m21h' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--H)'/></marker></defs>
  <rect x='0' y='0' width='640' height='290' fill='var(--paper)'/>
  <text x='320' y='18' text-anchor='middle' font-size='11' fill='var(--ink)' font-weight='600'>実験系：iPSCプロテオーム軌跡→RORA同定→KO/アゴニスト→ヒト相関</text>
  <!-- Row 1: proteome trajectory -->
  <rect x='14' y='30' width='88' height='44' rx='6' fill='#d4eaf7' stroke='#7ab5d8' stroke-width='1.5'/>
  <text x='58' y='48' text-anchor='middle' font-size='9.5' fill='#3a7090' font-weight='600'>iPSC</text>
  <text x='58' y='61' text-anchor='middle' font-size='8.5' fill='#3a7090'>ヒト多能性</text>
  <path d='M103,52 L122,52' stroke='var(--E)' stroke-width='1.5' marker-end='url(#m21)'/>
  <text x='112' y='44' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>分化誘導</text>
  <rect x='124' y='30' width='138' height='44' rx='6' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>
  <text x='193' y='48' text-anchor='middle' font-size='9' fill='var(--ink)' font-weight='600'>D0→D2→...→D12</text>
  <text x='193' y='61' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>diHSC分化（7点）</text>
  <path d='M263,52 L280,52' stroke='var(--E)' stroke-width='1.5' marker-end='url(#m21)'/>
  <rect x='282' y='30' width='110' height='44' rx='6' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>
  <text x='337' y='46' text-anchor='middle' font-size='9' fill='var(--ink)' font-weight='600'>MS-basedプロテオーム</text>
  <text x='337' y='59' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>3,064タンパク同定</text>
  <path d='M393,52 L410,52' stroke='var(--E)' stroke-width='1.5' marker-end='url(#m21)'/>
  <rect x='412' y='30' width='110' height='44' rx='6' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.8'/>
  <text x='467' y='46' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>RORA同定</text>
  <text x='467' y='61' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>分化コミット因子</text>
  <!-- Row 2: RORA KO -->
  <rect x='14' y='96' width='118' height='44' rx='6' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>
  <text x='73' y='114' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>RORA-KO iPSC</text>
  <text x='73' y='127' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>diHSC分化障害</text>
  <path d='M133,118 L164,118' stroke='var(--B)' stroke-width='1.5' marker-end='url(#m21b)'/>
  <rect x='166' y='96' width='118' height='44' rx='6' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>
  <text x='225' y='113' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>RORA-KOマウス</text>
  <text x='225' y='127' text-anchor='middle' font-size='8' fill='var(--B)'>線維化増悪</text>
  <path d='M285,118 L316,118' stroke='var(--B)' stroke-width='1.5' marker-end='url(#m21b)'/>
  <rect x='318' y='96' width='148' height='44' rx='6' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>
  <text x='392' y='113' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>線維化モデル（CCl4等）</text>
  <text x='392' y='127' text-anchor='middle' font-size='8' fill='var(--B)'>Sirius Red/αSMA/WB評価</text>
  <!-- Row 3: RORA agonist -->
  <rect x='14' y='162' width='118' height='44' rx='6' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>
  <text x='73' y='180' text-anchor='middle' font-size='9' fill='var(--H)' font-weight='600'>RORAアゴニスト</text>
  <text x='73' y='193' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>SR1078等</text>
  <path d='M133,184 L164,184' stroke='var(--H)' stroke-width='1.5' marker-end='url(#m21h)'/>
  <rect x='166' y='162' width='148' height='44' rx='6' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>
  <text x='240' y='180' text-anchor='middle' font-size='9' fill='var(--H)' font-weight='600'>多臓器線維化モデル</text>
  <text x='240' y='193' text-anchor='middle' font-size='8' fill='var(--H)'>肝・心・腎の線維化軽減</text>
  <!-- Row 4: Human -->
  <rect x='14' y='228' width='148' height='44' rx='6' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>
  <text x='88' y='246' text-anchor='middle' font-size='9' fill='var(--ink)' font-weight='600'>ヒト慢性肝疾患コホート</text>
  <text x='88' y='259' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>RORA発現 vs 線維化グレード相関</text>
  <rect x='350' y='162' width='138' height='110' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.6'/>
  <text x='419' y='180' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>主結果</text>
  <text x='419' y='196' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>RORA↓ → 代謝スイッチ</text>
  <text x='419' y='210' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>（糖解/OXPHOS↑）→ 活性化</text>
  <text x='419' y='224' text-anchor='middle' font-size='8.5' fill='var(--B)'>KO→線維化増悪</text>
  <text x='419' y='238' text-anchor='middle' font-size='8.5' fill='var(--H)'>アゴニスト→多臓器軽減</text>
  <text x='419' y='252' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ヒト：逆相関確認</text>
</svg>`
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("21", [{ic:"stellate",cap:"iPSC→diHSC プロテオーム軌跡"},{ic:"stellate",cap:"RORA：代謝制御で静止維持"},{ic:"mouse",cap:"RORA-KOマウス線維化増悪"},{ic:"drug",cap:"RORAアゴニスト多臓器線維化軽減"},{ic:"human",cap:"ヒト肝疾患でRORA逆相関"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 21 Martínez García de la Torre/Affo/Sancho-Bru Nat Commun 2025: iPSC→diHSCプロテオーム軌跡+RORA-KO+RORAアゴニスト+ヒト相関 */
LP.methods("21", ["invitro","mouse","human","crispr","drug","proteomics","rnaseq","qpcr","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №21 RORA依存的代謝制御がHSC静止を維持——低下で代謝スイッチ→活性化・線維化 ===== */
LP.cinema("21", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("21","var(--B)")}${GLYPH.arrow("21E","var(--E)")}</defs>`
    +GLYPH.title("RORA↓ → HSC代謝スイッチ（糖解↑/OXPHOS↑）→ 活性化・線維化")
    +GLYPH.stellate("hsc21",340,240,"肝星細胞（HSC）")
    +GLYPH.nucleus("nuc21",340,238,46,35,"")
    +GLYPH.tf("rora21",340,238,"RORA","var(--E)")
    +`<g id="va21">`+[[-24,28],[4,36],[32,22]].map((p,i)=>`<circle cx="${340+p[0]}" cy="${238+p[1]}" r="${4.5+i*0.8}" fill="#ffe9a0" stroke="#d9a441" stroke-width="1" opacity=".85"/>`).join("")+`</g>`
    +GLYPH.tag("glyc21",178,340,"糖解↑","var(--D)",60,true)
    +GLYPH.tag("oxph21",502,340,"OXPHOS↑","var(--D)",72,true)
    +GLYPH.mol("atp21",340,378,"ATP過剰","var(--D)",true)
    +GLYPH.layer("col21")
    +GLYPH.pill("agon21",596,88,"RORAアゴニスト",106)
    +GLYPH.badge("res21",596,348,"線維化","軽減 ✓","var(--E)"),
  build(K){
    return [
      {color:"E",t:2400,
        cap:"健常な肝類洞。HSCは静止期ペリサイトで、核内のRORAが糖解・OXPHOSを抑制し低エネルギー状態を保つ。ビタミンA脂質滴が充満している。",
        run(){K.show(["hsc21","nuc21","rora21","va21"]);}
      },
      {color:"D",t:4200,
        cap:"① 慢性障害でRORAが核内から減少すると、HSCは代謝スイッチを起こす——糖解とOXPHOSが亢進して高エネルギー状態になり、ビタミンA脂質滴が消失する。この代謝変化が活性化コミットメントの引き金となる。",
        run(){
          K.flow(340,204,340,165,"var(--D)",{n:2,dur:1.2,loop:1});
          K.T(()=>{
            K.attr("rora21","opacity","0.12");
            K.attr("va21","opacity","0.12");
            K.show(["glyc21","oxph21","atp21"]);
            K.pulse("glyc21"); K.pulse("oxph21");
            K.flow(178,340,280,260,"var(--D)",{dur:1.0,loop:2});
            K.flow(502,340,400,260,"var(--D)",{dur:1.0,loop:2});
          },1300);
        }
      },
      {color:"B",t:3800,
        cap:"② RORAを欠くHSCは筋線維芽細胞様に転換（αSMA↑/COL1A1↑）してコラーゲンを過剰産生し、線維化が進展する。RORA欠損マウスでは線維化が増悪する。",
        run(){
          K.unpulse("glyc21"); K.unpulse("oxph21");
          K.morph("hsc21Shape",GLYPH.SPINDLE);
          K.attr("hsc21Shape","fill","#b0432f");
          K.text("hsc21Cap","活性化HSC（aHSC）");
          K.T(()=>K.draw("col21",GLYPH.collagenAt(340,355),{len:160}),1000);
        }
      },
      {color:"H",t:4000,
        cap:"③ RORAアゴニスト（SR1078等）を投与するとRORAが核内に回復し、代謝スイッチが抑制されてHSCが静止様表現型を維持する。マウスの肝・多臓器線維化が軽減し、ヒト慢性肝疾患でもRORA発現は線維化と逆相関する。",
        run(){
          K.show(["agon21"]);
          K.T(()=>{
            K.flow(596,88,380,220,"var(--E)",{n:2,dur:1.3,loop:1});
            K.T(()=>{
              K.attr("rora21","opacity","1"); K.pulse("rora21");
              K.attr("col21","opacity","0.28");
              K.morph("hsc21Shape",GLYPH.QUIET);
              K.attr("hsc21Shape","fill","#d6a08e");
              K.text("hsc21Cap","静止復帰");
              K.attr("va21","opacity","0.7");
              K.show(["res21"]);
            },1100);
          },700);
        }
      },
    ];
  }
});
