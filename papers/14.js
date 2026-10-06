/* ============================================================
   №14 · Cell 2026 · Hu Y, et al.
   内皮・血管周囲のangiocrine ROCK2を選択阻害薬TDI01で標的化し肝線維化を治療
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"14",
    title:"内皮・血管周囲のangiocrine ROCK2を選択阻害薬TDI01で標的化し肝線維化を治療",
    authors:"Hu Y, et al.",
    journal:"Cell",
    year:2026,
    vol:"189(9):2663–2683.e26",
    doi:"10.1016/j.cell.2026.02.001",
    url:"https://www.cell.com/cell/abstract/S0092-8674(26)00166-2",
    primary:"E",
    tags:["E","B","H"],
    approach:"in vivo（マウス／ミニブタMASHモデル）＋ scRNA-seq・内皮特異的遺伝子改変 ＋ ヒト第1相試験（ChiCTR2200058868 / ChiCTR2400082056）",
    added:"2026-06-01",
    abstract_ja:"肝線維化はMASHをはじめ多くの慢性肝疾患に共通する病態だが、線維化機構を直接標的とする候補薬の多くは前臨床で有効でも臨床へ進めていない。本研究はRho関連キナーゼROCK2が肝の血管ニッチ機能不全とプロ線維化的なangiocrine（血管由来パラクライン）シグナルの起点であることを示した。単一細胞解析・遺伝子改変・タンパク質機能解析・臨床早期試験を統合し、類洞内皮細胞（LSEC）と血管周囲の肝星細胞（HSC）でROCK2が亢進すると内皮の細胞骨格が再編されて血管ニッチが破綻し、生じたangiocrineシグナルがHSCを活性化して線維化を駆動することを明らかにした。著者らはROCK2選択的阻害薬TDI01を開発し、げっ歯類およびミニブタのMASHモデルで血管表現型を回復させ線維化を軽減。さらにヒト第1相試験（ChiCTR2200058868）で良好な薬物動態と安全性を確認し、拡大試験（ChiCTR2400082056）では6例中5例で肝線維化の低下傾向が観察された。内皮・血管周囲のangiocrine ROCK2の選択的標的化が、機構から臨床へ橋渡し可能な抗線維化戦略であることを示した。",
    background:"健常な肝ではLSECがNO（一酸化窒素）やVEGF依存のangiocrineシグナルを介してHSCを静止状態に保ち線維化を抑制する。線維化過程ではLSECがcapillarization（有窓喪失）を起こしこの保護シグナルが失われると同時に、内皮側からプロ線維化シグナルが出ると考えられてきたが、その分子的起点と創薬可能な標的は未確立だった。ROCKには全身に広く発現するROCK1とより組織選択的なROCK2があり、非選択的ROCK阻害は血圧低下など全身性副作用が問題になる。内皮・血管周囲ニッチに焦点を当てROCK2を選択的に叩いて線維化を治療できるかは検証されていなかった。",
    achievements:[
      "単一細胞解析で線維化肝のLSECと血管周囲HSCでROCK2が亢進し、血管ニッチ機能不全とプロ線維化angiocrineシグナルの起点になることを同定。",
      "ROCK2駆動の内皮細胞骨格再編がangiocrineシグナルを介してHSCを活性化するという、内皮起点→HSC活性化の因果軸を提示。",
      "ROCK2選択的阻害薬TDI01を開発し、げっ歯類とミニブタのMASHモデルで血管表現型を回復させ線維化を軽減（非選択的ROCK阻害の全身性副作用を回避する設計思想）。",
      "ヒト第1相試験（ChiCTR2200058868）でTDI01の良好な薬物動態・安全性を確認。拡大試験（ChiCTR2400082056）では6例中5例で線維化低下傾向を観察し、機構から臨床への橋渡しを実証。"
    ],
    limitations:[
      "ヒト臨床データは少数例・早期相の「傾向」レベルで、無作為化比較による有効性の確証は今後の課題。",
      "angiocrineシグナルの実体（ROCK2下流でLSECが出す具体的分泌因子・受容体ペア）の網羅的同定は限定的。",
      "動物モデルはMASH中心で、ウイルス性・胆汁うっ滞性など他病因の線維化への一般化は未検証。",
      "ROCK2はLSECとHSCの双方で亢進するため、TDI01効果における内皮側・HSC側それぞれの寄与の切り分けは完全ではない。"
    ],
    connection:[
      "LSECを線維化のスイッチ細胞とする第2の柱：#05はLSEC capillarization是正（miR-325-3p/SNA）で線維化が巻き戻ることを示したが、本論文はLSEC（＋血管周囲HSC）のROCK2が線維化を能動的に点火することを示す。自系にLSECを入れる意義を、ニッチ維持因子であると同時にROCK2亢進で線維化を点火/抑制するノブとして二方向で設計できる。",
      "線維化点火の操作可能なノブ＆ネガコン：TDI01（ROCK2阻害）を共培養に添加し『LSEC由来angiocrineを止める→HSC活性化・線維化が抑制されるか』を必要条件検証のネガコンに使える。逆にずり応力低下・基質硬化でROCK2を亢進させ内皮起点で線維化を点火する正方向操作も可能。最重要課題『fibrosisをどう点火するか』に内皮起点の選択肢を追加する。",
      "酸素・力学環境との接点：LSEC有窓・ROCK2活性はNO・VEGF・ずり応力・基質硬度に感受性。酸素透過膜で好気条件＋灌流（#12の灌流血管設計と組合せ）を与えれば生理的LSEC表現型（低ROCK2・有窓保持）を維持しやすく、ROCK2亢進を線維化点火の制御変数として扱える。",
      "ABM実装：『LSEC ROCK2活性（ずり応力・基質硬度の関数）→angiocrineシグナル分泌量→近傍HSC活性化確率』を内皮エージェントの状態遷移ルールに落とせる。#06（HSC 7状態モデル）のqHSC→aHSC遷移の外部入力に内皮ROCK2軸を接続し、#13（肝細胞Meteorin直接路）・#02（KCのNCF1–フェロトーシス経路）と並列の内皮起点点火経路としてABMに組み込める。",
      "既収録との接続：#05（LSEC是正で線維化退縮）と本論文（#14, LSEC ROCK2で線維化点火）は内皮起点制御の表裏。#01の中心静脈EC–HSC（RSPO3–LGR6）クロストークと合わせ、EC状態が線維化を制御する軸が三本（#01相関・#05是正・#14点火/創薬）で揃う。#09（HSC→RSPO3→肝細胞zonation）とは逆向きで、内皮・HSCニッチの双方向クロストークを補強する。"
    ],
    glossary:[
      {term:"ROCK2",full:"Rho-associated coiled-coil containing kinase 2",desc:"Rho関連キナーゼ。LSEC・血管周囲HSCで亢進し内皮細胞骨格を再編、プロ線維化angiocrineシグナルの起点"},
      {term:"TDI01",full:"TDI01 (selective ROCK2 inhibitor)",desc:"ROCK2選択的阻害薬。MASHモデルで血管表現型回復・線維化軽減、ヒト第1相で安全性確認"},
      {term:"angiocrine",full:"angiocrine signaling",desc:"内皮細胞が分泌し周囲細胞の運命を制御するパラクラインシグナル。健常では抗線維化、ROCK2亢進でプロ線維化に転じる"},
      {term:"VEGF",full:"vascular endothelial growth factor",desc:"LSEC分化・有窓維持を支える血管増殖因子。NO依存経路でHSC静止を保つangiocrine軸の中核"},
      {term:"eNOS / NO",full:"endothelial nitric oxide synthase / nitric oxide",desc:"内皮型NO合成酵素とその産物NO。LSECの抗線維化angiocrineシグナルを媒介し、capillarizationで減弱"}
    ],
    struct:{
      model:"in vivo（マウス／ミニブタMASH）＋scRNA-seq・内皮特異的KO＋ヒト第1相試験",
      cells:["LSEC","HSC","肝細胞"],
      triggers:["MASH食","ROCK2亢進","血管ニッチ機能不全","ずり応力低下/基質硬化"],
      steatosis:"△",
      inflammation:"△",
      fibrosis:"○",
      readout:["肝線維化（コラーゲン/組織学）","ROCK2活性","LSEC capillarization/血管表現型","angiocrineシグナル","HSC活性化"],
      ignite:"LSEC・血管周囲HSCのROCK2亢進→内皮細胞骨格再編→プロ線維化angiocrineシグナル→HSC活性化で線維化を点火（TDI01で阻止）",
      params:[
        {name:"LSEC ROCK2活性",note:"ずり応力・基質硬度の関数として上昇。内皮エージェントの状態変数に。閾値超でangiocrine分泌ON"},
        {name:"angiocrineシグナル分泌量",note:"内皮→HSCのパラクライン入力。近傍HSCの活性化確率の入力値に使える"},
        {name:"NO/VEGF軸",note:"健常では抗線維化（HSC静止維持）。低下で保護喪失。LSEC健常度のパラメータに"},
        {name:"TDI01阻害効果",note:"ROCK2活性を下げてangiocrine分泌を遮断するノブ。ネガコン/治療シミュレーションに"}
      ],
      todos:[
        "LSEC・HSC共培養でTDI01添加→HSC活性化（αSMA/コラーゲン）が抑制されるか（ネガコン）",
        "基質硬度↑・ずり応力↓でLSEC ROCK2を亢進させ内皮起点で線維化を点火できるか（正方向操作）",
        "酸素透過膜＋灌流で低ROCK2・有窓保持のLSEC表現型を維持できるか検証",
        "#13(Meteorin直接路)・#02(KC NCF1路)と内皮ROCK2路の点火寄与を共培養で切り分け"
      ]
    },
    figure:"<svg viewBox='0 0 640 330' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='ar14fb' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--B)'/></marker><marker id='ar14fh' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--H)'/></marker></defs><rect width='640' height='330' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>内皮起点の線維化点火：LSEC ROCK2↑ → 細胞骨格再編 → angiocrineシグナル → HSC活性化（TDI01で遮断）</text><rect x='30' y='52' width='250' height='86' rx='10' fill='#eaf2f5' stroke='var(--E)' stroke-width='1.8'/><text x='155' y='72' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>健常 LSEC（有窓・抗線維化）</text><circle cx='95' cy='100' r='4' fill='none' stroke='var(--E)' stroke-width='1.3'/><circle cx='115' cy='108' r='4' fill='none' stroke='var(--E)' stroke-width='1.3'/><circle cx='135' cy='98' r='4' fill='none' stroke='var(--E)' stroke-width='1.3'/><text x='210' y='98' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>NO / VEGF</text><text x='210' y='118' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→ HSC静止維持</text><rect x='360' y='52' width='250' height='86' rx='10' fill='#f5ece2' stroke='var(--B)' stroke-width='1.8'/><text x='485' y='72' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>線維化 LSEC（capillarization）</text><rect x='400' y='88' width='100' height='24' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.8'/><text x='450' y='104' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>ROCK2 ↑</text><text x='485' y='130' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>細胞骨格再編・有窓喪失</text><line x1='282' y1='95' x2='358' y2='95' stroke='var(--ink-soft)' stroke-width='1.5' stroke-dasharray='4 3' marker-end='url(#ar14fb)'/><text x='320' y='88' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>MASH/ニッチ破綻</text><circle cx='450' cy='168' r='12' fill='var(--B)' opacity='0.85'/><text x='540' y='170' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>angiocrine</text><text x='540' y='184' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>シグナル（分泌）</text><line x1='450' y1='114' x2='450' y2='154' stroke='var(--B)' stroke-width='1.6' marker-end='url(#ar14fb)'/><ellipse cx='320' cy='250' rx='120' ry='52' fill='#f3ece2' stroke='var(--line)' stroke-width='1.6'/><text x='320' y='232' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>血管周囲HSC</text><text x='320' y='254' text-anchor='middle' font-size='10.5' fill='var(--B)' font-weight='600'>qHSC → aHSC 活性化</text><text x='320' y='272' text-anchor='middle' font-size='9.5' fill='var(--B)'>コラーゲン産生 → 線維化</text><line x1='445' y1='178' x2='370' y2='222' stroke='var(--B)' stroke-width='1.6' marker-end='url(#ar14fb)'/><rect x='455' y='238' width='168' height='30' rx='8' fill='#eaf5ee' stroke='var(--H)' stroke-width='1.8'/><text x='539' y='258' text-anchor='middle' font-size='10' fill='var(--H)' font-weight='600'>TDI01（ROCK2選択阻害）</text><line x1='502' y1='168' x2='502' y2='236' stroke='var(--H)' stroke-width='1.6' stroke-dasharray='4 3'/><line x1='486' y1='200' x2='518' y2='200' stroke='var(--H)' stroke-width='2.4'/><text x='560' y='300' text-anchor='middle' font-size='8.5' fill='var(--H)'>→ 血管表現型回復・線維化軽減</text></svg>",
    method_figure:"<svg viewBox='0 0 640 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m14' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--ink-soft)'/></marker></defs><rect width='640' height='200' fill='var(--paper)'/><rect x='8' y='30' width='120' height='96' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/><text x='68' y='52' text-anchor='middle' font-size='10' font-weight='600' fill='var(--ink)'>scRNA-seq</text><text x='68' y='70' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>線維化肝のLSEC・</text><text x='68' y='83' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>血管周囲HSCで</text><text x='68' y='100' text-anchor='middle' font-size='9' fill='var(--E)' font-weight='600'>ROCK2↑を同定</text><line x1='128' y1='78' x2='150' y2='78' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m14)'/><rect x='152' y='24' width='124' height='108' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='214' y='46' text-anchor='middle' font-size='10' font-weight='600' fill='var(--B)'>内皮特異的</text><text x='214' y='60' text-anchor='middle' font-size='10' font-weight='600' fill='var(--B)'>遺伝子改変</text><text x='214' y='78' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ROCK2操作→</text><text x='214' y='91' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>angiocrine→HSC</text><text x='214' y='108' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>活性化の因果検証</text><line x1='276' y1='78' x2='298' y2='78' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m14)'/><rect x='300' y='24' width='128' height='108' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='364' y='46' text-anchor='middle' font-size='10' font-weight='600' fill='var(--H)'>TDI01前臨床</text><text x='364' y='64' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>げっ歯類MASH</text><text x='364' y='78' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ミニブタMASH</text><text x='364' y='95' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>血管表現型回復</text><text x='364' y='109' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>線維化軽減</text><line x1='428' y1='78' x2='450' y2='78' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m14)'/><rect x='452' y='24' width='180' height='108' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='542' y='46' text-anchor='middle' font-size='10' font-weight='600' fill='var(--H)'>ヒト第1相試験</text><text x='542' y='64' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ChiCTR2200058868：</text><text x='542' y='77' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>PK・安全性良好</text><text x='542' y='94' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ChiCTR2400082056：</text><text x='542' y='108' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>6例中5例で線維化↓傾向</text><text x='320' y='160' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>scRNA-seq × 内皮特異的遺伝子改変 × TDI01前臨床(マウス/ミニブタ) × ヒト第1相 — 機構から臨床への橋渡し</text><text x='320' y='176' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Hu Y et al., Cell 189(9):2663–2683.e26 (2026)</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("14", [{ic:"endothelial",cap:"LSEC ROCK2↑→angiocrine"},{ic:"stellate",cap:"HSC活性化→線維化"},{ic:"drug",cap:"TDI01(ROCK2選択阻害)"},{ic:"mouse",cap:"マウス/ミニブタMASH"},{ic:"human",cap:"ヒト第1相試験"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 14 Hu Cell 2026: マウス/ミニブタ+内皮特異的ROCK2 KO+ヒト第1相+scRNA+薬理+FACS+IHC */
LP.methods("14", ["mouse","human","invitro","crispr","drug","scrna","facs","qpcr","wb","elisa","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №14 LSEC ROCK2→capillarization＆プロ線維化angiocrine→血管周囲HSC活性化→線維化（TDI01で遮断） ===== */
LP.cinema("14", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("14","var(--B)")}</defs>`+GLYPH.title("LSEC ROCK2↑ → 内皮細胞骨格再編・capillarization＆プロ線維化angiocrine → 血管周囲HSC活性化 → 線維化（TDI01で遮断）")
    +`<g id="lsec"><rect x="120" y="120" width="450" height="38" rx="10" fill="#d3e6f0" stroke="var(--E)" stroke-width="2"/><ellipse cx="190" cy="139" rx="10" ry="8" fill="#9cc2d8"/><ellipse cx="470" cy="139" rx="10" ry="8" fill="#9cc2d8"/><text x="120" y="112" font-size="10.5" fill="var(--E)">類洞内皮 LSEC</text></g>`
    +`<g id="fen" class="fade"><circle cx="240" cy="139" r="5" fill="#eef3f6" stroke="var(--E)" stroke-width="1"/><circle cx="290" cy="139" r="5" fill="#eef3f6" stroke="var(--E)" stroke-width="1"/><circle cx="400" cy="139" r="5" fill="#eef3f6" stroke="var(--E)" stroke-width="1"/><circle cx="445" cy="139" r="5" fill="#eef3f6" stroke="var(--E)" stroke-width="1"/><text x="345" y="100" text-anchor="middle" font-size="9" fill="var(--E)">有窓(fenestrae)・物質交換</text></g>`
    +`<g id="cap" class="fade"><rect x="120" y="158" width="450" height="7" rx="3" fill="var(--B)" opacity="0.55"/><text x="345" y="182" text-anchor="middle" font-size="9" fill="var(--B)">capillarization（有窓喪失・基底膜形成）</text></g>`
    +GLYPH.tag("rock2",345,139,"ROCK2↑","var(--B)",84,true)
    +`<g id="noLayer" class="fade">`+GLYPH.cytokine("no1",300,205,"NO/VEGF","var(--E)")+GLYPH.cytokine("no2",420,210,"","var(--E)")+`</g>`
    +`<g id="angLayer" class="fade">`+GLYPH.cytokine("ang",360,250,"angiocrine（プロ線維化）","var(--B)")+`</g>`
    +GLYPH.receptor("hscR",360,304,"","var(--B)")
    +GLYPH.stellate("hsc",360,332,"血管周囲HSC（静止）")
    +GLYPH.layer("collagen")
    +GLYPH.pill("drug",610,80,"TDI01",96)
    +GLYPH.badge("good",628,332,"線維化","退縮 ✓","var(--B)")
    +`<text id="trial" class="fade" x="345" y="412" text-anchor="middle" font-size="10.5" fill="var(--H)">ヒト第1相：安全性良好／拡大試験 6例中5例で線維化↓傾向</text>`,
  build(K){
    return [
      {color:"E",t:2600,cap:"健常な肝類洞。LSECは有窓(fenestrae)を保ち、NO/VEGFのangiocrineシグナルで血管周囲HSCを静止状態(qHSC)に保つ。",run(){
        K.show(["fen","noLayer"]);
        K.flow(330,158,360,300,"var(--E)",{dur:1.2,loop:2});
      }},
      {color:"B",t:3800,cap:"① MASHでLSECのROCK2が亢進→内皮細胞骨格が再編され、有窓を失ってcapillarizationが起こる。保護的なNO/VEGF angiocrineが減弱する。",run(){
        K.hide(["fen","noLayer"]);
        K.show(["cap","rock2"]);
        K.T(()=>K.pulse("rock2"),700);
      }},
      {color:"B",t:4200,cap:"② ROCK2駆動の内皮細胞骨格再編が、プロ線維化的なangiocrineシグナルを放出。血管周囲HSCがこれを受けてqHSC→aHSC（筋線維芽細胞）へ活性化し、コラーゲンを過剰産生して線維化が進む。",run(){
        K.show(["angLayer"]); K.pulse("ang");
        K.flow(360,158,360,300,"var(--B)",{dur:1.2,loop:2});
        K.T(()=>{K.pulse("hscR");
          K.morph("hscShape",GLYPH.SPINDLE); K.attr("hscShape","fill","#b0432f"); K.text("hscCap","活性化HSC（aHSC）");},1400);
        K.T(()=>K.draw("collagen",GLYPH.collagenAt(360,380),{len:160}),2400);
      }},
      {color:"H",t:3800,cap:"③ ROCK2選択的阻害薬TDI01が内皮・血管周囲のROCK2を遮断→血管表現型(有窓)が回復しangiocrineが沈静→HSCが静止化し線維化が退縮。ヒト第1相で安全性良好、拡大試験で線維化低下傾向。",run(){
        K.show(["drug"]);
        K.T(()=>{K.strike(610,80,345,139);
          K.T(()=>{
            K.markX(345,139);
            K.unpulse("rock2"); K.unpulse("ang"); K.unpulse("hscR");
            K.attr("rock2","opacity","0.3"); K.attr("angLayer","opacity","0");
            K.hide(["cap"]); K.show(["fen","noLayer"]);
            K.morph("hscShape",GLYPH.QUIET); K.attr("hscShape","fill","#d6a08e"); K.text("hscCap","静止化（qHSC）");
            K.attr("collagen","opacity","0.25");
            K.show(["good","trial"]);
          },800);
        },800);
      }},
    ];
  }
});
