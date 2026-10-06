/* ============================================================
   №19 · Developmental Cell 2025 · Yang X, Nie YZ, Lu C, Li Y, Hayashi Y, Plummer R, Luo N, Li Q, Kasai …
   hiPSC由来胎児型肝星細胞（hiPSC-HSC）がMatrigel-free三細胞オルガノイドの血管形成と肝成熟を促進
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"19",
    title:"hiPSC由来胎児型肝星細胞（hiPSC-HSC）がMatrigel-free三細胞オルガノイドの血管形成と肝成熟を促進",
    authors:"Yang X, Nie YZ, Lu C, Li Y, Hayashi Y, Plummer R, Luo N, Li Q, Kasai T, Okumura T, Isobe Y, Yamaguchi K, Furukawa Y, Li Y, Taniguchi H（責任著者, The University of Tokyo）",
    journal:"Developmental Cell",
    year:2025,
    vol:"2025/09/29 online",
    doi:"10.1016/j.devcel.2025.09.002",
    url:"https://www.cell.com/developmental-cell/fulltext/S1534-5807(25)00540-4",
    primary:"A",
    tags:["A","I","E"],
    approach:"in vitro（hiPSC三細胞種：hiPSC-HSC＋hiPSC-HE＋hiPSC-EC をMatrigel-freeで三次元共培養）＋ in vivo（マウス移植で血管化確認）＋ scRNA-seq（転写プロファイル比較）",
    added:"2026-06-03",
    abstract_ja:"ヒト多能性幹細胞（hPSC）から肝オルガノイドを作製する際の大きな障壁は、肝星細胞（HSC）を含む非実質細胞の欠如と血管形成の不全であった。本研究では、hPSCから胎児型肝星細胞に近い転写プロファイルを持つhiPSC-HSCを効率的に誘導するプロトコルを確立し、WT1・DESMIN・PDGFRβ陽性で10万倍超の拡張性を示すことを明らかにした。hiPSC-HSCをhiPSC由来肝内胚葉（hiPSC-HE）および内皮細胞（hiPSC-EC）と組み合わせたMatrigel-free三次元共培養系では、HSCの存在が内皮細胞の血管様ネットワーク形成と肝細胞様の機能的成熟（アルブミン分泌・CYP450活性・HNF4A発現）を有意に促進した。この効果はin vivo移植後でも確認され、全成分がhPSC由来の血管化肝オルガノイドが実現した。先天性肝疾患モデリングや細胞療法への応用基盤を提供する成果であり、今後KCを追加することでMASLD多細胞系への拡張も展望される。",
    background:"肝オルガノイドは肝臓研究に革新をもたらしてきたが、多くのシステムはMatrigel等の異種基質に依存し、内皮細胞やHSCなどの非実質細胞を欠いていた。HSCは胎児期の肝発生において内皮網の形成を支援するとともに（VEGF等の分泌により）肝細胞前駆体の成熟を促進するが、その体外再現はほぼ実現していなかった。hPSCからHSCを分化誘導する既存プロトコルは収率・拡張性・転写忠実度に課題があり、多細胞オルガノイドへの統合は限られていた。Matrigel非依存の全hPSC由来多細胞系を構築できれば、異種成分なしの再現可能なプラットフォームとして先天性肝疾患モデリングや細胞療法に大きなインパクトをもたらす。",
    achievements:[
      "hPSCから**胎児型HSCに近い転写プロファイル（WT1・DESMIN・PDGFRβ陽性）**を持つ**hiPSC-HSC**を効率的に誘導するプロトコルを確立した。",
      "hiPSC-HSCは**10万倍超の増殖能**を示しながら胎児HSCの本質的な細胞特徴を維持した。",
      "**Matrigel-free三細胞系**（hiPSC-HSC＋hiPSC-HE＋hiPSC-EC）において、hiPSC-HSCが内皮細胞の**血管様ネットワーク形成**を有意に促進した。",
      "hiPSC-HSC共存により**HNF4A発現・アルブミン分泌・CYP450活性**が上昇し、肝内胚葉の機能的成熟が促進された。",
      "**in vivo移植**後も血管化が確認され、全成分hPSC由来の血管化肝オルガノイドが実証された。"
    ],
    limitations:[
      "誘導されたHSCは**胎児型**であり、成体型・活性化型（MASLDに関与するaHSC）との相違は未評価。",
      "**KCを含まない**ため免疫・炎症成分が欠如しており、MASLDのセカンドヒット（LPS等）に応答する系になっていない。",
      "**脂肪化・炎症・線維化の病態モデリングは未実証**。論文の主な文脈は先天性肝疾患への応用。",
      "HSCがVEGF産生や成熟促進を担う分子機序（どの受容体・シグナルを介するか）は部分的にしか明らかにされていない。"
    ],
    connection:[
      "私の系（酸素透過膜上の4細胞共培養）は初代細胞を使うが、本論文のhiPSC-HSCプロトコルは（1）HSCの安定供給源、（2）遺伝子改変HSCの導入路として将来的な代替選択肢を与える。10万倍超の拡張能は酸素透過膜系への細胞供給コスト削減に直結しうる。",
      "**Matrigel-free**の設計思想は、私の開放型オルガノイドが膜上で酸素透過を確保するために異種基質を避ける方向性と共鳴する。",
      "HSCが内皮ネットワーク形成を促進するという知見は「HSCがLSECの有窓性維持・類洞構造形成を支援する可能性」の仮説根拠となる。本系にKCを追加すれば、私が目指す4細胞系のhiPSC由来版として**LPS二次ヒットで線維化が点火するか**を検証するプラットフォームになりうる。",
      "ABMへの貢献：「HSCエージェントがVEGF分泌を介して内皮エージェントの移動・増殖確率を上昇させる」というルールを実装するための根拠を提供する。#04（iPSC-WAT-肝MPS）・#12（灌流マイクロ血管統合型MPS）・#18（5細胞MLHO）と並ぶ、テーマIのCNS系論文の体系的な理解を深める位置づけ。"
    ],
    glossary:[
      {term:"hiPSC-HSC",full:"human iPSC-derived hepatic stellate cell",desc:"人工多能性幹細胞から誘導した胎児型肝星細胞。WT1/DESMIN/PDGFRβ陽性・10万倍超拡張可能"},
      {term:"hiPSC-HE",full:"human iPSC-derived hepatic endoderm",desc:"iPSC由来肝内胚葉細胞。肝細胞前駆体として血管化オルガノイドのHSCパートナー"},
      {term:"WT1",full:"Wilms tumor 1",desc:"胎児HSCの転写因子マーカー。WT1陽性がhiPSC-HSCの胎児型同一性を示す"},
      {term:"HNF4A",full:"hepatocyte nuclear factor 4 alpha",desc:"肝細胞成熟の主要転写因子。ALB/CYP等の遺伝子発現を制御；HSC共存で発現上昇"},
      {term:"VEGF",full:"vascular endothelial growth factor",desc:"血管新生因子（本系ではHSC由来）。内皮細胞の遊走・増殖を促し血管ネットワーク形成を誘導"}
    ],
    struct:{
      model:"in vitro + in vivo（移植）",
      cells:["hiPSC-HSC（胎児型）","hiPSC-HE（肝内胚葉）","hiPSC-EC（内皮細胞）"],
      triggers:["三細胞Matrigel-free共培養","hiPSC-HSC共存"],
      steatosis:"—",
      inflammation:"—",
      fibrosis:"—",
      readout:["血管ネットワーク面積","ALB分泌","CYP450活性","HNF4A発現","in vivo移植後の血管化確認"],
      ignite:"hiPSC-HSCが内皮ネットワーク形成＋肝細胞成熟を協調的に支持（胎児期の発生模倣）",
      params:[
        {name:"HSC→VEGF分泌",note:"内皮ネットワーク形成を支援するパラクリン因子。内皮エージェントの移動・増殖確率上昇のルール根拠"},
        {name:"HSC→肝成熟促進",note:"HNF4A/ALB/CYP等の成熟マーカー改善。HSC共存で肝細胞エージェントの機能スコア上昇"}
      ],
      todos:[
        "自系のHSCにhiPSC-HSCを置換してLSEC・KC混合時の挙動確認",
        "Matrigel-free条件で酸素透過膜上の3/4細胞系の再現性評価",
        "hiPSC-HSCにKCを追加してLPS二次ヒットで線維化が点火するか検証"
      ]
    },
    figure:`<svg viewBox='0 0 640 360' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs>
    <marker id='ar19' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker>
    <marker id='ar19e' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--E)'/></marker>
  </defs>
  <rect x='0' y='0' width='640' height='360' fill='var(--paper)'/>
  <text x='320' y='20' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>hiPSC-HSCが血管形成と肝成熟を協調的に促進——Matrigel-free三細胞オルガノイド</text>
  <circle cx='60' cy='88' r='26' fill='#d4eaf7' stroke='#7ab5d8' stroke-width='1.8'/>
  <text x='60' y='85' text-anchor='middle' font-size='10' fill='#3a7090' font-weight='600'>hPSC</text>
  <text x='60' y='98' text-anchor='middle' font-size='8.5' fill='#3a7090'>多能性</text>
  <path d='M88,88 L138,88' stroke='var(--E)' stroke-width='1.6' marker-end='url(#ar19e)'/>
  <text x='113' y='79' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>段階的分化</text>
  <path d='M166,62 L186,38 L173,60 L206,58 L176,70 L188,98 L166,72 L146,98 L158,68 L126,70 L158,58 L140,38 Z' fill='#d6a08e' stroke='var(--B)' stroke-width='1.5'/>
  <circle cx='166' cy='68' r='6' fill='#7a3a2c'/>
  <text x='166' y='114' text-anchor='middle' font-size='10' fill='var(--ink)' font-weight='600'>hiPSC-HSC</text>
  <text x='166' y='127' text-anchor='middle' font-size='8.5' fill='var(--B)'>WT1+ / DESMIN+ / PDGFRβ+</text>
  <text x='166' y='140' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>増殖能 &gt;10⁵倍</text>
  <rect x='248' y='48' width='218' height='200' rx='18' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.6'/>
  <text x='357' y='67' text-anchor='middle' font-size='10.5' fill='var(--ink)' font-weight='600'>Matrigel-free 三次元共培養</text>
  <path d='M298,132 L313,108 L304,130 L326,128 L306,138 L316,160 L300,140 L284,160 L294,138 L272,132 Z' fill='#d6a08e' stroke='var(--B)' stroke-width='1.2'/>
  <text x='299' y='174' text-anchor='middle' font-size='8.5' fill='var(--B)'>HSC</text>
  <ellipse cx='362' cy='150' rx='36' ry='27' fill='#f6e7c8' stroke='#c2a268' stroke-width='1.5'/>
  <ellipse cx='350' cy='142' rx='12' ry='10' fill='#b79a64'/>
  <text x='362' y='186' text-anchor='middle' font-size='8.5' fill='#9c7b3a'>HE（肝細胞）</text>
  <ellipse cx='432' cy='132' rx='22' ry='10' fill='#b8def0' stroke='var(--E)' stroke-width='1.4'/>
  <text x='432' y='152' text-anchor='middle' font-size='8.5' fill='var(--E)'>EC</text>
  <path d='M313,130 L408,132' stroke='var(--E)' stroke-width='1.3' marker-end='url(#ar19e)' stroke-dasharray='3,2'/>
  <text x='361' y='122' text-anchor='middle' font-size='8' fill='var(--E)'>VEGF</text>
  <path d='M467,102 L524,80' stroke='var(--B)' stroke-width='1.6' marker-end='url(#ar19)'/>
  <path d='M467,178' stroke='none'/>
  <path d='M467,180 L524,202' stroke='var(--B)' stroke-width='1.6' marker-end='url(#ar19)'/>
  <rect x='526' y='44' width='92' height='54' rx='8' fill='var(--paper)' stroke='var(--E)' stroke-width='1.6'/>
  <text x='572' y='62' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>血管形成</text>
  <text x='572' y='76' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>内皮ネットワーク</text>
  <text x='572' y='89' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>in vitro/in vivo確認</text>
  <rect x='526' y='170' width='92' height='54' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.6'/>
  <text x='572' y='188' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>肝成熟促進</text>
  <text x='572' y='202' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ALB↑ CYP450↑</text>
  <text x='572' y='215' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>HNF4A↑</text>
  <path d='M196,68 L248,98' stroke='var(--B)' stroke-width='1.5' marker-end='url(#ar19)'/>
  <text x='320' y='282' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Limitation: 胎児型HSC・KC欠如・MASLD未検証 → 先天性肝疾患モデル主体</text>
  <text x='320' y='296' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>KC追加 → 4細胞系でLPS二次ヒット・線維化点火プラットフォームへ拡張可</text>
</svg>`,
    method_figure:`<svg viewBox='0 0 640 310' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs>
    <marker id='m19' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--E)'/></marker>
    <marker id='m19b' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--B)'/></marker>
  </defs>
  <rect x='0' y='0' width='640' height='310' fill='var(--paper)'/>
  <text x='320' y='20' text-anchor='middle' font-size='11' fill='var(--ink)' font-weight='600'>実験系：hPSC→三細胞分化誘導→Matrigel-free共培養→血管化・成熟評価</text>
  <rect x='18' y='36' width='82' height='52' rx='8' fill='#d4eaf7' stroke='#7ab5d8' stroke-width='1.5'/>
  <text x='59' y='56' text-anchor='middle' font-size='9.5' fill='#3a7090' font-weight='600'>hPSC</text>
  <text x='59' y='70' text-anchor='middle' font-size='8.5' fill='#3a7090'>ヒト多能性</text>
  <text x='59' y='82' text-anchor='middle' font-size='8' fill='#3a7090'>幹細胞</text>
  <path d='M102,62 L138,62' stroke='var(--E)' stroke-width='1.5' marker-end='url(#m19)'/>
  <rect x='140' y='36' width='88' height='30' rx='6' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.3'/>
  <text x='184' y='56' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>hiPSC-HSC</text>
  <text x='184' y='74' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>WT1/DES/PDGFRβ+</text>
  <rect x='140' y='74' width='88' height='30' rx='6' fill='var(--paper-2)' stroke='#9c7b3a' stroke-width='1.3'/>
  <text x='184' y='94' text-anchor='middle' font-size='9' fill='#9c7b3a' font-weight='600'>hiPSC-HE</text>
  <rect x='140' y='112' width='88' height='30' rx='6' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.3'/>
  <text x='184' y='132' text-anchor='middle' font-size='9' fill='var(--E)' font-weight='600'>hiPSC-EC</text>
  <path d='M100,85 L140,85' stroke='var(--E)' stroke-width='1.3' marker-end='url(#m19)' stroke-dasharray='3,2'/>
  <path d='M100,127 L140,127' stroke='var(--E)' stroke-width='1.3' marker-end='url(#m19)' stroke-dasharray='3,2'/>
  <path d='M230,62 L280,62' stroke='var(--E)' stroke-width='1.5' marker-end='url(#m19)'/>
  <path d='M230,89 L256,89 L256,80 L280,80' stroke='var(--E)' stroke-width='1.3' marker-end='url(#m19)'/>
  <path d='M230,127 L256,127 L256,98 L280,98' stroke='var(--E)' stroke-width='1.3' marker-end='url(#m19)'/>
  <rect x='282' y='48' width='120' height='70' rx='12' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.6'/>
  <text x='342' y='68' text-anchor='middle' font-size='9.5' fill='var(--ink)' font-weight='600'>三次元共培養</text>
  <text x='342' y='82' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>Matrigel-free</text>
  <text x='342' y='95' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>3D self-assembly</text>
  <text x='342' y='108' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>7〜14日間</text>
  <path d='M404,83 L454,83' stroke='var(--E)' stroke-width='1.5' marker-end='url(#m19)'/>
  <rect x='456' y='36' width='164' height='200' rx='10' fill='var(--paper)' stroke='var(--E)' stroke-width='1.6'/>
  <text x='538' y='55' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>評価項目</text>
  <text x='538' y='73' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>①血管ネットワーク面積</text>
  <text x='538' y='89' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>②アルブミン分泌量</text>
  <text x='538' y='105' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>③CYP450活性</text>
  <text x='538' y='121' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>④HNF4A/ALB/CYP発現</text>
  <text x='538' y='137' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>⑤scRNA-seq比較</text>
  <text x='538' y='153' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>⑥in vivo移植→血管化</text>
  <rect x='456' y='160' width='164' height='66' rx='8' fill='#f0f8f0' stroke='var(--B)' stroke-width='1.4'/>
  <text x='538' y='178' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>主結果</text>
  <text x='538' y='194' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>HSC共存 → 血管化↑・ALB↑</text>
  <text x='538' y='210' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>CYP450↑・HNF4A↑</text>
  <text x='538' y='224' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>in vivo移植でも血管化確認</text>
</svg>`
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("19", [{ic:"dish",cap:"Matrigel-free三細胞3D共培養"},{ic:"stellate",cap:"hiPSC-HSC（WT1+/DES+）"},{ic:"hepatocyte",cap:"hiPSC-HE（肝内胚葉）"},{ic:"endothelial",cap:"hiPSC-EC→血管ネットワーク"},{ic:"human",cap:"in vivo移植で血管化確認"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 19 Yang/Taniguchi Dev Cell 2025: hiPSC 3細胞系+マウス移植+scRNA+FACS(マーカー同定)+qPCR+WB+コンフォーカル */
LP.methods("19", ["invitro","mouse","scrna","facs","qpcr","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №19 hiPSC-HSCが血管形成＋肝成熟を促進——Matrigel-free三細胞オルガノイド ===== */
LP.cinema("19", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("19","var(--E)")}${GLYPH.arrow("19B","var(--B)")}</defs>`
    +GLYPH.title("hiPSC→胎児型HSC誘導 → Matrigel-free三細胞系で血管形成＋肝成熟を促進")
    +`<ellipse cx="360" cy="268" rx="215" ry="138" fill="#f0f5fa" stroke="var(--line-soft)" stroke-width="1.8" stroke-dasharray="6,4"/>`
    +`<text x="178" y="175" font-size="10" fill="var(--ink-soft)">Matrigel-free 三次元共培養</text>`
    +`<g id="hipsc19"><circle cx="360" cy="68" r="20" fill="#d4eaf7" stroke="#7ab5d8" stroke-width="2"/><text x="360" y="64" text-anchor="middle" font-size="9.5" fill="#3a7090" font-weight="600">hPSC</text><text x="360" y="77" text-anchor="middle" font-size="8" fill="#3a7090">分化誘導</text></g>`
    +GLYPH.stellate("hsc19",222,272,"hiPSC-HSC")
    +GLYPH.tag("wt1tag19",168,318,"WT1+/DES+","var(--B)",84,true)
    +GLYPH.hep("he19",365,272,0.88,"hiPSC-HE")
    +`<g id="ec19"><ellipse cx="500" cy="255" rx="28" ry="13" fill="#b8def0" stroke="var(--E)" stroke-width="1.7"/><text x="500" y="280" text-anchor="middle" font-size="9.5" fill="var(--E)">hiPSC-EC</text></g>`
    +GLYPH.mol("vegf19",318,228,"VEGF","var(--E)",true)
    +GLYPH.tf("hnf19",396,258,"HNF4A","var(--B)",true)
    +`<g id="vasc19"></g>`
    +GLYPH.badge("res19",620,368,"ALB↑","CYP450↑","var(--B)"),
  build(K){
    return [
      {color:"E",t:2400,
        cap:"健常な肝類洞では静止期HSCがVEGF等のparacrineシグナルでLSEC有窓性・血管網を維持し、肝細胞成熟をサポートしている。",
        run(){K.show(["hipsc19","hsc19","he19","ec19"]);}
      },
      {color:"F",t:3800,
        cap:"① hPSCから段階的分化誘導でhiPSC-HSCを作製。WT1・DESMIN・PDGFRβ陽性の胎児型転写プロファイルを示し、10万倍超の増殖能を維持する。",
        run(){
          K.flow(360,88,222,272,"var(--E)",{n:2,dur:1.4,loop:1});
          K.T(()=>{K.show(["wt1tag19"]);K.pulse("hsc19");},1600);
        }
      },
      {color:"E",t:4000,
        cap:"② 三細胞（hiPSC-HSC＋hiPSC-HE＋hiPSC-EC）をMatrigel-free条件で共培養すると、HSCがVEGFを分泌して内皮細胞の遊走を誘発し、オルガノイド内に血管様ネットワークが形成される。",
        run(){
          K.show(["vegf19"]);K.pulse("vegf19");
          K.T(()=>{
            K.flow(248,252,318,228,"var(--E)",{n:2,dur:1.0,loop:1});
            K.T(()=>K.flow(318,228,472,255,"var(--E)",{dur:1.2,loop:2}),700);
            K.T(()=>K.draw("vasc19",[
              "M285,258 C320,240 390,230 448,248",
              "M328,282 C362,270 418,278 452,266"
            ],{len:130}),1500);
          },600);
        }
      },
      {color:"B",t:3800,
        cap:"③ HSC共存により肝内胚葉（hiPSC-HE）の成熟が促進される——HNF4A転写因子が核内で上昇し、アルブミン分泌・CYP450活性が有意に改善する（HSC非存在系より高い機能成熟）。",
        run(){
          K.unpulse("hsc19");K.unpulse("vegf19");
          K.show(["hnf19"]);K.pulse("he19");
          K.T(()=>K.show(["res19"]),1600);
        }
      },
      {color:"H",t:3200,
        cap:"④ in vivo移植でも血管化が確認。全成分hPSC由来の血管化肝オルガノイドはKCを追加すれば4細胞系に拡張でき、MASLDのセカンドヒット（LPS等）で線維化を点火するプラットフォームになりうる。",
        run(){
          K.unpulse("he19");
          K.flow(360,195,360,88,"var(--H)",{n:2,dur:1.2,loop:1});
        }
      },
    ];
  }
});
