/* ============================================================
   №20 · Science Translational Medicine 2023 · Wang S, Li K, Pickholz E, Dobie R, Matchett KP, Henderson NC, Carrico…
   肝星細胞の自己分泌シグナル回路（NTF3→NTRK3）が進行期NASH線維化を駆動する
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"20",
    title:"肝星細胞の自己分泌シグナル回路（NTF3→NTRK3）が進行期NASH線維化を駆動する",
    authors:"Wang S, Li K, Pickholz E, Dobie R, Matchett KP, Henderson NC, Carrico C, Driver I, Borch Jensen M, Chen L, Petitjean M, Bhattacharya D, Fiel MI, Liu X, Kisseleva T, Alon U, Adler M, Medzhitov R, Friedman SL（責任著者, Icahn School of Medicine at Mount Sinai）",
    journal:"Science Translational Medicine",
    year:2023,
    vol:"15(677):eadd3949",
    doi:"10.1126/scitranslmed.add3949",
    url:"https://www.science.org/doi/10.1126/scitranslmed.add3949",
    primary:"B",
    tags:["B","H","G"],
    approach:"in vivo（堅牢なマウスNASHモデルでの単一核RNA-seq＋組織透明化による線維3D可視化）＋ヒトNASH試料との受容体-リガンドペア保存性照合＋ヒトHSC株LX-2培養でのNTRK3ノックダウン・薬理学的検証",
    added:"2026-06-04",
    abstract_ja:"肝線維化は肝星細胞（HSC）が静止状態から筋線維芽細胞へ形質転換することで進行するが、進行期（advanced fibrosis）に特異的な活性化の駆動機構は不明であった。本研究は堅牢なマウスNASHモデルを用い、単一核RNA-seqと組織透明化を組み合わせてHSC活性化の経時的な転写・形態応答を統合的に解析した。その結果、進行期の線維化局所ではHSC同士の直接的な細胞間接触が顕著に増加し、それに伴ってマウスとヒトのNASHで保存された68組の受容体-リガンド相互作用からなるHSC自己分泌シグナル回路が出現することを見いだした。なかでも神経栄養因子ニューロトロフィン-3（NTF3）とその受容体NTRK3（TrkC）のペアに着目し、薬理学的にNTRK3を阻害すると、培養ヒトHSCの活性化が抑えられるだけでなく、進行期マウスNASH線維化が退縮した。すなわち進行期にはHSCが自らの分泌因子で自らを刺激する自己駆動ループが線維化を維持しており、この回路を断つことが既に確立した線維化を巻き戻す治療標的になりうることを示した。",
    background:"MASLD/MASHにおける線維化はHSCの活性化と細胞外基質（ECM）の過剰沈着によって進行し、進行期の線維化は肝関連死の最大の予測因子である。しかし従来の研究は損傷初期にHSCを動かすパラクリン因子（肝細胞・KC・LSEC由来のTGFβ等）に集中しており、いったん広範な線維化が成立した段階でHSCの活性化が何によって維持されるのかは十分に解明されていなかった。臨床的には既存の線維化を退縮させる薬剤が強く求められるため、進行期に固有の駆動機構を細胞解像度かつ空間的に同定することが課題であった。",
    achievements:[
      "堅牢なマウスNASHモデルで**単一核RNA-seq（snRNA-seq）**と**組織透明化**を統合し、HSC活性化の転写プロファイルと3D形態（突起・細胞間接触）を経時的に対応づけた。",
      "進行期では**HSC同士の直接的な細胞間接触が顕著に増加**し、空間的に密集した活性化HSCの巣が形成されることを可視化した。",
      "この密集に伴って、マウスとヒトのNASHで**保存された68組の受容体-リガンド相互作用**からなる**HSC自己分泌（autocrine）シグナル回路**が進行期特異的に出現することを同定した。",
      "回路の代表として**ニューロトロフィン-3（NTF3）→受容体NTRK3（TrkC）**の自己分泌ペアを取り上げ、NTRK3蛋白がNASHのHSC突起に局在することを示した（HSCが自らの分泌因子で自らを刺激する自己駆動ループの代表例）。",
      "**NTRK3の薬理学的阻害**により培養ヒトHSCの活性化が抑制され、かつ**進行期マウスNASH線維化が退縮**した（概念実証として既存線維化の可逆性を提示）。"
    ],
    limitations:[
      "代表として検証したのは68ペアのうち**NTF3→NTRK3の1経路のみ**で、回路全体の冗長性・主従関係は未解明。",
      "**HSC-HSC直接接触の増加が原因か結果か**（密集が回路を生むのか、回路が密集を促すのか）の因果は完全には切り分けられていない。",
      "用いたNTRK3阻害は汎Trk系に作用しうる低分子であり、**HSC特異性・全身性の神経系副作用**は今後の最適化課題。",
      "マウスモデル主体で、ヒトでは受容体-リガンドペアの保存性とヒトHSC株LX-2での応答の確認にとどまり、**ヒト生体での退縮効果は未検証**。"
    ],
    connection:[
      "私の系（酸素透過膜上の4細胞共培養）でsteatosisは堅牢だがfibrosisの点火が課題である中、本論文は「**進行期はHSC自己分泌＋HSC間接触が線維化を自己維持する**」という点火後の維持機構を与える。初期点火（KC/LPS等のパラクリン二次ヒット）と、本論文の自己駆動ループを段階として接続できる。",
      "ABMへの直接の示唆：HSCエージェントに**密度・接触依存の自己分泌スイッチ**（近傍HSC数が閾値を超えると自己分泌正フィードバックがオンになり活性化が不可逆化）を実装するルール根拠となる。これは#06（HSC不活化ループの規則ベースモデル）の可逆性ルールと対をなす「不可逆化」項として扱える。",
      "**NTF3→NTRK3**は#18のTrkB（NTRK2）×imipramineと同じ神経栄養因子受容体ファミリーであり、HSCにおけるTrk系シグナルの線維化・毒性両面での重要性を補強する。#13（Meteorin→c-Kit/STAT3）・#16（TIM4 efferocytosis）の点火機構と並べ、「点火→維持→退縮」の三層として整理できる。",
      "治療標的としての退縮（reversal）実証は、私の系で線維化を点火させた後に**阻害で巻き戻せるか**を評価するポジティブコントロールの設計指針になる。"
    ],
    glossary:[
      {term:"NTF3",full:"neurotrophin-3",desc:"神経栄養因子の一つ。本論文では進行期HSCが分泌しNTRK3に自己分泌的に結合してHSC活性化を維持するリガンド"},
      {term:"NTRK3",full:"neurotrophic receptor tyrosine kinase 3",desc:"TrkCをコードする受容体型チロシンキナーゼ。NTF3の受容体で、阻害により進行期NASH線維化が退縮した自己分泌回路の標的"},
      {term:"TrkC",full:"tropomyosin receptor kinase C",desc:"NTRK3がコードする受容体タンパク。HSC上でNTF3を受け取り活性化シグナルを伝える"},
      {term:"autocrine",full:"autocrine signaling",desc:"細胞が分泌した因子が同じ細胞自身の受容体に作用する自己分泌様式。進行期HSCの自己駆動ループの本質"},
      {term:"NASH",full:"non-alcoholic steatohepatitis",desc:"非アルコール性脂肪肝炎（現MASH）。脂肪化に炎症・肝細胞傷害・線維化を伴う段階"}
    ],
    struct:{
      model:"in vivo（マウスNASH）＋ヒト試料・初代ヒトHSC",
      cells:["肝星細胞（HSC）","肝細胞"],
      triggers:["進行期NASH","HSC-HSC直接接触の増加","NTF3自己分泌"],
      steatosis:"○",
      inflammation:"△",
      fibrosis:"○",
      readout:["線維化ステージ／コラーゲン","組織透明化による3D HSC形態","HSC間接触頻度","68受容体-リガンドペア","NTRK3/NTF3発現","αSMA"],
      ignite:"進行期に出現するHSC自己分泌回路（NTF3→NTRK3）とHSC間直接接触が活性化を自己維持（点火後の維持機構）",
      params:[
        {name:"接触依存の自己分泌スイッチ",note:"近傍HSC密度が閾値超で自己分泌正フィードバックがオン→活性化が不可逆化するルール"},
        {name:"NTF3→NTRK3正フィードバック",note:"活性化HSCがNTF3を分泌し自己のNTRK3を刺激。活性化状態の維持確率を上げる項"},
        {name:"NTRK3阻害による退縮",note:"阻害で自己分泌ループ遮断→活性化HSCが静止/脱活性化へ。線維化退縮の数理項（可逆化）"}
      ],
      todos:[
        "自系で線維化を点火後、HSC密集巣が形成されるか（接触依存活性化）を評価",
        "NTRK3/Trk阻害をポジティブコントロールに線維化退縮アッセイを設計",
        "ABMにHSC密度・接触依存の自己分泌スイッチ（閾値超で不可逆化）を実装し#06の可逆ルールと統合"
      ]
    },
    figure:`<svg viewBox='0 0 640 370' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs>
    <marker id='ar20' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker>
    <marker id='ar20h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker>
  </defs>
  <rect x='0' y='0' width='640' height='370' fill='var(--paper)'/>
  <text x='320' y='20' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>進行期NASHでHSC自己分泌回路（NTF3→NTRK3）が線維化を自己維持</text>
  <text x='110' y='52' text-anchor='middle' font-size='10' fill='var(--ink-soft)' font-weight='600'>静止期HSC（散在）</text>
  <path d='M70,80 L84,60 L75,78 L96,76 L78,86 L88,108 L70,86 L52,108 L62,84 L40,86 L62,76 L48,58 Z' fill='#d6a08e' stroke='var(--B)' stroke-width='1.2'/>
  <circle cx='70' cy='84' r='5' fill='#7a3a2c'/>
  <path d='M150,108 L164,88 L155,106 L176,104 L158,114 L168,136 L150,114 L132,136 L142,112 L120,114 L142,104 L128,86 Z' fill='#d6a08e' stroke='var(--B)' stroke-width='1.2'/>
  <circle cx='150' cy='112' r='5' fill='#7a3a2c'/>
  <text x='110' y='160' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>接触少・活性化低</text>
  <path d='M196,108 L246,108' stroke='var(--B)' stroke-width='1.6' marker-end='url(#ar20)'/>
  <text x='221' y='99' text-anchor='middle' font-size='8.5' fill='var(--B)'>進行期</text>
  <rect x='252' y='44' width='176' height='150' rx='14' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.6'/>
  <text x='340' y='62' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>活性化HSCの密集巣（直接接触↑）</text>
  <ellipse cx='305' cy='110' rx='34' ry='12' fill='#c98a78' stroke='var(--B)' stroke-width='1.4'/>
  <ellipse cx='370' cy='118' rx='34' ry='12' fill='#c98a78' stroke='var(--B)' stroke-width='1.4'/>
  <ellipse cx='335' cy='150' rx='34' ry='12' fill='#c98a78' stroke='var(--B)' stroke-width='1.4'/>
  <circle cx='340' cy='95' r='6' fill='var(--B)'/>
  <text x='340' y='83' text-anchor='middle' font-size='8.5' fill='var(--B)' font-weight='600'>NTF3</text>
  <path d='M335,99 q-22,12 -22,28' stroke='var(--B)' stroke-width='1.5' fill='none' marker-end='url(#ar20)'/>
  <path d='M345,99 q22,14 22,30' stroke='var(--B)' stroke-width='1.5' fill='none' marker-end='url(#ar20)'/>
  <text x='298' y='176' text-anchor='middle' font-size='8' fill='var(--B)'>NTRK3</text>
  <text x='384' y='176' text-anchor='middle' font-size='8' fill='var(--B)'>NTRK3</text>
  <text x='340' y='188' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>自己分泌ループ（68ペア）</text>
  <path d='M432,118 L486,118' stroke='var(--B)' stroke-width='1.8' marker-end='url(#ar20)'/>
  <rect x='490' y='84' width='128' height='66' rx='10' fill='var(--paper)' stroke='var(--B)' stroke-width='1.6'/>
  <text x='554' y='106' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>進行期線維化</text>
  <text x='554' y='122' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>コラーゲン沈着↑</text>
  <text x='554' y='136' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>活性化の自己維持</text>
  <rect x='252' y='236' width='176' height='66' rx='12' fill='var(--paper)' stroke='var(--H)' stroke-width='1.8'/>
  <text x='340' y='258' text-anchor='middle' font-size='10' fill='var(--H)' font-weight='600'>NTRK3阻害薬</text>
  <text x='340' y='274' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>自己分泌ループ遮断</text>
  <text x='340' y='288' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ヒトHSC活性化↓</text>
  <path d='M340,194 L340,232' stroke='var(--H)' stroke-width='1.8' marker-end='url(#ar20h)' stroke-dasharray='4,3'/>
  <path d='M428,270 L520,270' stroke='var(--H)' stroke-width='1.8' marker-end='url(#ar20h)'/>
  <rect x='524' y='240' width='100' height='58' rx='10' fill='var(--paper)' stroke='var(--H)' stroke-width='1.6'/>
  <text x='574' y='264' text-anchor='middle' font-size='10' fill='var(--H)' font-weight='600'>線維化退縮 ✓</text>
  <text x='574' y='280' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>進行期でも可逆</text>
  <text x='320' y='332' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>要点：点火後の「維持」はHSC密集＋自己分泌が担い、回路遮断で既存線維化を巻き戻せる</text>
  <text x='320' y='348' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>マウス↔ヒトで68受容体-リガンドペアが保存</text>
</svg>`,
    method_figure:`<svg viewBox='0 0 640 300' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs>
    <marker id='m20' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--ink-soft)'/></marker>
    <marker id='m20h' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--H)'/></marker>
  </defs>
  <rect x='0' y='0' width='640' height='300' fill='var(--paper)'/>
  <text x='320' y='20' text-anchor='middle' font-size='11' fill='var(--ink)' font-weight='600'>実験系：マウスNASH経時 → snRNA-seq＋組織透明化 → ヒト保存性照合 → 薬理検証</text>
  <rect x='16' y='40' width='96' height='58' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>
  <text x='64' y='62' text-anchor='middle' font-size='9.5' fill='var(--ink)' font-weight='600'>マウスNASH</text>
  <text x='64' y='77' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>堅牢モデル</text>
  <text x='64' y='90' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>経時サンプル</text>
  <path d='M114,69 L150,69' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m20)'/>
  <rect x='152' y='32' width='104' height='34' rx='6' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.3'/>
  <text x='204' y='53' text-anchor='middle' font-size='9' fill='var(--ink)' font-weight='600'>snRNA-seq</text>
  <rect x='152' y='72' width='104' height='34' rx='6' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.3'/>
  <text x='204' y='93' text-anchor='middle' font-size='9' fill='var(--ink)' font-weight='600'>組織透明化(3D)</text>
  <path d='M256,49 L292,49 L292,64 L320,64' stroke='var(--ink-soft)' stroke-width='1.3' marker-end='url(#m20)'/>
  <path d='M256,89 L292,89 L292,74 L320,74' stroke='var(--ink-soft)' stroke-width='1.3' marker-end='url(#m20)'/>
  <rect x='322' y='44' width='128' height='58' rx='10' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>
  <text x='386' y='66' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>HSC活性化軌跡＋</text>
  <text x='386' y='80' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>受容体-リガンド回路</text>
  <text x='386' y='94' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>68ペア同定</text>
  <path d='M386,102 L386,134' stroke='var(--ink-soft)' stroke-width='1.3' marker-end='url(#m20)'/>
  <rect x='300' y='136' width='172' height='40' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.3'/>
  <text x='386' y='154' text-anchor='middle' font-size='9' fill='var(--ink)' font-weight='600'>ヒトNASHで保存性照合</text>
  <text x='386' y='168' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>マウス↔ヒト共通ペア抽出</text>
  <path d='M300,156 L150,156 L150,196' stroke='var(--ink-soft)' stroke-width='1.3' marker-end='url(#m20)'/>
  <rect x='80' y='198' width='150' height='46' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.4'/>
  <text x='155' y='218' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>ヒトHSC株LX-2培養</text>
  <text x='155' y='233' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>NTRK3阻害→活性化↓</text>
  <path d='M230,221 L300,221' stroke='var(--H)' stroke-width='1.5' marker-end='url(#m20h)'/>
  <rect x='302' y='198' width='170' height='46' rx='8' fill='var(--paper)' stroke='var(--H)' stroke-width='1.5'/>
  <text x='387' y='218' text-anchor='middle' font-size='9' fill='var(--H)' font-weight='600'>進行期マウスへ投与</text>
  <text x='387' y='233' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>線維化退縮を確認</text>
  <rect x='492' y='120' width='132' height='80' rx='10' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.6'/>
  <text x='558' y='150' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>読み出し</text>
  <text x='558' y='166' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>線維化ステージ</text>
  <text x='558' y='179' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>αSMA・コラーゲン</text>
  <text x='558' y='192' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>HSC接触頻度</text>
  <path d='M472,221 L492,221 L492,180' stroke='var(--H)' stroke-width='1.3' marker-end='url(#m20h)'/>
</svg>`
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("20", [{ic:"stellate",cap:"進行期HSCの密集巣・直接接触↑"},{ic:"stellate",cap:"NTF3→NTRK3自己分泌ループ"},{ic:"omics",cap:"snRNA-seq＋組織透明化(HSC 3D形態)"},{ic:"drug",cap:"NTRK3阻害→線維化退縮"},{ic:"mouse",cap:"マウスNASH＋ヒト試料で保存性照合"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 20 Wang/Friedman Sci Transl Med 2023: MASHマウスsnRNA-seq+組織透明化3D+ヒトNASH+LX-2+NTRK3 CRISPR/siRNA+NTRK3阻害薬 */
LP.methods("20", ["mouse","human","invitro","crispr","drug","scrna","rnaseq","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №20 HSC自己分泌回路（NTF3→NTRK3）が進行期NASH線維化を駆動 ===== */
LP.cinema("20", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("20")}${GLYPH.arrow("20","var(--B)")}</defs>`
    +GLYPH.title("進行期：HSC密集＋NTF3→NTRK3自己分泌が線維化を自己維持 → NTRK3阻害で退縮")
    +GLYPH.hep("hep20",24,60,1.1,"肝細胞")
    +GLYPH.stellate("hscA",210,250,"静止HSC")
    +GLYPH.stellate("hscB",350,300,"静止HSC")
    +`<g id="rk20" class="fade">`+GLYPH.receptor("rkA",210,222,"NTRK3","var(--B)")+GLYPH.receptor("rkB",350,272,"NTRK3","var(--B)")+`</g>`
    +GLYPH.cytokine("ntf3",282,232,"NTF3","var(--B)",true)
    +GLYPH.layer("col20")
    +GLYPH.pill("drug20",565,110,"NTRK3阻害",126)
    +GLYPH.badge("good20",565,300,"線維化","退縮✓","var(--H)"),
  build(K){
    const dp=[[120,150],[165,180],[135,210],[185,205],[150,245]];
    return [
      {color:"E",t:2400,cap:"健常な肝類洞。HSCは互いに離れて散在し、静止状態にある。",run(){}},
      {color:"D",t:3000,cap:"① 過栄養で肝細胞に脂肪滴が蓄積（steatosis）し、初期の損傷シグナルがHSCを軽く刺激する。",run(){
        addDrops(K,"hep20Drops",dp,"lip20");
      }},
      {color:"B",t:4400,cap:"② 進行期：HSCが密集して直接接触し、NTF3→NTRK3の自己分泌ループが点火。活性化が自己維持されコラーゲンを過剰産生する。",run(){
        K.move("hscB",350,300,278,258,1.4);
        K.T(()=>{K.show(["rk20","ntf3"]); K.pulse("ntf3");
          K.flow(282,232,210,222,"var(--B)",{dur:1.0,loop:2});
          K.flow(282,232,278,250,"var(--B)",{dur:1.0,loop:2});},1200);
        K.T(()=>{K.morph("hscAShape",GLYPH.SPINDLE);K.attr("hscAShape","fill","#b0432f");K.text("hscACap","活性化HSC");
          K.morph("hscBShape",GLYPH.SPINDLE);K.attr("hscBShape","fill","#b0432f");K.text("hscBCap","活性化HSC");},2200);
        K.T(()=>K.draw("col20",GLYPH.collagenAt(245,300),{len:160}),3000);
      }},
      {color:"H",t:3800,cap:"③ NTRK3阻害薬が自己分泌ループを遮断。活性化HSCが静止へ戻り、進行期でも線維化が退縮する。",run(){
        K.show(["drug20"]);
        K.T(()=>{K.strike(565,110,210,222);K.strike(565,110,350,272);
          K.T(()=>{K.unpulse("ntf3");K.attr("ntf3","opacity","0.2");
            K.markX(210,222,"var(--H)");K.markX(350,272,"var(--H)");
            K.morph("hscAShape",GLYPH.QUIET);K.attr("hscAShape","fill","#d6a08e");K.text("hscACap","静止へ回帰");
            K.morph("hscBShape",GLYPH.QUIET);K.attr("hscBShape","fill","#d6a08e");
            K.attr("col20","opacity","0.25");
            K.show(["good20"]);},780);
        },800);
      }},
    ];
  }
});
