/* ============================================================
   №17 · Nature Communications 2025 · Du K, …, Diehl AM（責任著者, Duke University）
   老化肝細胞を標的としたMASLD治療：老化肝細胞遺伝子シグネチャ(SHGS)とセノリティックDpC
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"17",
    title:"老化肝細胞を標的としたMASLD治療：老化肝細胞遺伝子シグネチャ(SHGS)とセノリティックDpC",
    authors:"Du K, …, Diehl AM（責任著者, Duke University）",
    journal:"Nature Communications",
    year:2025,
    vol:"16:3038",
    doi:"10.1038/s41467-025-57616-w",
    url:"https://www.nature.com/articles/s41467-025-57616-w",
    primary:"H",
    tags:["H","C","D"],
    approach:"in vitro（パルボシクリブ誘導のHuh7老化モデル）＋ in vivo（NRAS誘導老化モデル、CDA-HFD MASHマウス、p21 KOマウス）＋ 大規模ヒトコホートでのトランスクリプトーム照合 ＋ snRNA-seq ＋ 約2,100化合物の化学スクリーニング",
    added:"2026-06-02",
    abstract_ja:"老化（senescent）肝細胞は代謝機能障害関連脂肪性肝疾患（MASLD）で蓄積し臨床アウトカムの悪化と関連するが、その不均一性と特異的マーカーの欠如のため治療標的化が難しかった。本研究はin vitro・in vivoの肝細胞老化モデルを用いて「老化肝細胞遺伝子シグネチャ（senescent hepatocyte gene signature; SHGS）」を定義し、これが複数のマウスモデルおよび大規模ヒトコホートでMASLDの進行・退縮に一致して動くことを示した。単核RNA-seq（snRNA-seq）と機能解析から、SHGS陽性肝細胞はp21陽性細胞に由来し、肝細胞としての主要機能を失う一方で疾患進行を駆動する因子を放出することが明らかになった。その代表が増殖分化因子GDF15で、循環血中濃度がSHGS陽性細胞の量および疾患進行と並行して上昇し、細胞間相互作用解析ではGDF15がTGFBR2を介して肝の各細胞種へ作用しうると推定された。また、SHGS陽性肝細胞の培養上清は星細胞・マクロファージ・LSECを病的に再プログラムした。さらに化学ライブラリ（約2,100化合物）のスクリーニングで老化肝細胞に選択的な化合物（Dp44mTとその類縁体DpC、銅依存的に作用）を見出し、DpCは雄マウスのMASLD（脂肪化・炎症・線維化・細胞死）を改善した。注目すべきことにSHGSの濃縮は肝以外の臓器機能障害とも相関しており、本研究は老化肝細胞をMASLDの鍵ドライバーとして位置づけ、老化細胞を標的とする治療戦略と血中バイオマーカー（GDF15）を提示した。",
    background:"MASLDからMASH・線維化へ進む過程では、脂肪毒性・代謝ストレスにより一部の肝細胞が細胞周期を不可逆的に停止して細胞老化（cellular senescence）に陥り、SASP（senescence-associated secretory phenotype）として炎症性・線維化促進性の因子を放出すると考えられてきた。しかし肝細胞老化は不均一で、p16やp21などの単一マーカーだけでは捕捉しきれず、どの老化肝細胞集団が病態を駆動するのか、それを選択的に除けば疾患が改善するのかは不明だった。一方で全身性老化を狙ったセノリティック（dasatinib＋quercetin等）はマウスMASLDで効果が乏しい報告も多く、肝細胞の老化状態を精確に定義しその集団に効くセノリティックを設計することが課題だった。脂肪化から線維化への移行点をどう生理的に押さえるかという課題にも、老化肝細胞由来のSASPは新たな点火候補を与える。",
    achievements:[
      "パルボシクリブ（CDK4/6阻害）でHuh7に老化を誘導したin vitroモデルと、NRAS(G12V)過剰発現による癌遺伝子誘導老化のin vivoモデル（GFP+肝細胞をFACS分取）のRNA-seqで共通に上昇する100遺伝子から**老化肝細胞遺伝子シグネチャ（SHGS）**を構築。SHGSが複数マウスモデルと**大規模ヒトコホート**でMASLDの進行・退縮に追従することを示した。",
      "snRNA-seqと機能解析で、**SHGS陽性肝細胞がp21陽性細胞に由来**し、肝細胞機能を失いながら疾患進行を駆動する分泌因子を放出することを実証。老化の進行段階を表す細胞集団として位置づけた。",
      "放出因子の代表として**GDF15**を同定。**血中GDF15**がSHGS陽性細胞量・疾患進行と並行して上昇する**バイオマーカー**であり、snRNA-seqの細胞間相互作用解析から、SHGS+肝細胞が分泌するGDF15が**TGFBR2**を介して肝の各細胞種に作用しうると推定した（GDF15–TGFBR2軸自体の機能実証はない）。SHGS+肝細胞の培養上清は、非老化肝細胞に二次的な老化、HSC（LX2）に線維化遺伝子発現、マクロファージの活性化、LSECのcapillarizationを誘導した。",
      "約**2,100化合物の化学スクリーニング**（パルボシクリブ誘導の老化Huh7）で、増殖中の肝細胞への毒性が小さく老化細胞に選択的な**Dp44mT**と、その類縁体で経口活性に優れる**DpC**を同定（銅依存的に作用）。DpCはCDA-HFD誘導MASHの雄マウスで老化・脂肪化・炎症・線維化・細胞死のマーカーを低減しMASLDを改善した。",
      "SHGSの濃縮が肝以外の臓器（脂肪・膵島・心・腎）の機能障害とも相関すること、DpCが心筋症・糖尿病・がん関連の遺伝子発現も低下させることを示した（因果の方向は未解明で、**全身性（multi-organ）**病態への関与を示唆する段階）。"
    ],
    limitations:[
      "セノリティックDpCの薬効データは主に**雄マウス**で得られており、性差・ヒトでの有効性と安全性（標的選択性・長期影響）は未検証。",
      "SHGSは老化『肝細胞』のシグネチャで、HSC・LSEC・マクロファージなど他細胞種の老化やp16優位集団との関係づけは限定的。",
      "線維化改善は示されたが主眼は肝細胞老化の除去であり、SHGS+肝細胞の上清がHSC株（LX2）を活性化することはin vitroで示されたものの、in vivoでHSC活性化を直接操作した実験ではないため抗線維化が二次効果かの切り分けは部分的。",
      "GDF15-TGFBR2軸はsnRNA-seqの細胞間相互作用解析による推定にとどまり、GDF15の阻害・欠損による機能検証はない（GDF15は有益・有害の両作用が報告される）。SASPは多因子で、他のSASP因子との相対重みも未解像。"
    ],
    connection:[
      "線維化点火の新しい上流トリガーとして『老化肝細胞のSASP』を導入できる。脂肪毒性で生じた老化肝細胞がGDF15等を放出し近傍HSC・マクロファージを刺激する経路は、KCのLPSセカンドヒットや死細胞負荷（#16）とは独立した点火候補。共培養に老化肝細胞画分を意図的に作る（低用量パルボシクリブ等）操作を組み込める。",
      "読み出し指標とバイオマーカーの具体化：SHGS・p21・SA-β-gal・分泌GDF15をステアトーシス→線維化移行の定量リードアウトに採用できる。特に培養上清のGDF15は非破壊的に経時測定できる老化バーデンの代理指標として有用。",
      "ネガコン/ポジコン操作：セノリティックDpCで老化肝細胞を選択除去すると線維化マーカーが下がるか（必要条件）、老化肝細胞を増やすと線維化が増悪するか（十分条件）の双方向操作を自系に移植できる。#03（ATF4阻害）・#07（EVT0185）・#14（TDI01）と並ぶ『介入で線維化を巻き戻すネガコン』群に加わる。",
      "#16（apHC蓄積→HSC点火）・#13（caspase-8→Meteorin）が肝細胞の死／死にかけを点火ハブとしたのに対し、本論文は死なずに留まる老化肝細胞が分泌で病態を駆動する相補経路。#10（IL32+肝細胞）とは特定の肝細胞サブ状態が病態ドライバーという点で連続し、#08（自家マクロファージ療法）と同じくテーマHの細胞・状態標的治療軸に位置づく。",
      "ABM実装：肝細胞エージェントに老化状態遷移（脂質負荷・ストレス曝露時間の関数でp21+→SHGS+へ確率遷移、増殖停止）を持たせ、SHGS+エージェントはGDF15分泌→近傍HSC/マクロファージの活性化確率を上げる外部入力に。セノリティック投与イベントでSHGS+を選択除去するルールを入れれば、#06（HSC 7状態モデル）の活性化外部入力に老化肝細胞由来GDF15を接続でき治療介入を数理シミュレートできる。"
    ],
    struct:{
      model:"mixed",
      cells:["肝細胞(健常/老化SHGS+)","HSC","マクロファージ","近傍細胞(TGFBR2+)"],
      triggers:["脂肪毒性・代謝ストレス","CDK4/6阻害(パルボシクリブ)による老化誘導","SASP(GDF15)分泌"],
      steatosis:"○",
      inflammation:"○",
      fibrosis:"○",
      readout:["SHGSスコア(遺伝子セット)","p21+/SA-β-gal+細胞","血中・上清GDF15","線維化マーカー","肝細胞死/機能"],
      ignite:"老化肝細胞(SHGS+)がGDF15等SASPを分泌し近傍HSC/MΦ/LSECを病的に再プログラムして線維化・炎症を駆動（GDF15→TGFBR2は相互作用解析による推定）",
      params:[
        {name:"老化遷移確率",note:"肝細胞が脂質負荷・ストレス曝露時間の関数でp21+→SHGS+へ遷移し増殖停止"},
        {name:"GDF15分泌速度",note:"SHGS+エージェントが分泌。血中/上清濃度＝老化バーデンの代理指標"},
        {name:"GDF15→TGFBR2→近傍細胞",note:"近傍HSC/マクロファージの活性化確率を上げる外部入力項"},
        {name:"セノリティック除去イベント",note:"DpC投与でSHGS+エージェントを選択的に除去（健常肝細胞は温存）"}
      ],
      todos:[
        "共培養に老化肝細胞画分（低用量パルボシクリブ/ストレス）を作りSHGS・GDF15と線維化の関係を定量",
        "培養上清GDF15を非破壊的リードアウトとして経時測定し老化バーデンを追跡",
        "DpCで老化肝細胞を選択除去し線維化マーカーが下がるか（必要条件）を検証",
        "老化肝細胞由来GDF15をABMのHSC活性化外部入力に実装"
      ]
    },
    figure:`<svg viewBox='0 0 640 370' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs>
    <marker id='ar17' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--C)'/></marker>
    <marker id='ar17b' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker>
    <marker id='ar17h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker>
  </defs>
  <rect x='0' y='0' width='640' height='370' fill='var(--paper)'/>
  <text x='320' y='20' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>老化肝細胞(SHGS+)→GDF15→病態駆動／DpCで選択除去</text>
  <ellipse cx='110' cy='110' rx='44' ry='34' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.6'/>
  <ellipse cx='95' cy='100' rx='13' ry='11' fill='#b79a64'/>
  <text x='110' y='160' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>健常肝細胞</text>
  <ellipse cx='110' cy='250' rx='46' ry='36' fill='#cfd3c4' stroke='var(--C)' stroke-width='1.8'/>
  <ellipse cx='95' cy='240' rx='14' ry='11' fill='#9aa088'/>
  <text x='95' y='244' text-anchor='middle' font-size='7.5' fill='#4a5038'>p21+</text>
  <text x='110' y='300' text-anchor='middle' font-size='9' fill='var(--C)' font-weight='600'>老化肝細胞(SHGS+)</text>
  <text x='110' y='313' text-anchor='middle' font-size='8' fill='var(--C)'>SA-β-gal+ / 細胞周期停止</text>
  <circle cx='250' cy='250' r='7' fill='var(--C)'/>
  <line x1='250' y1='240' x2='250' y2='234' stroke='var(--C)' stroke-width='1.6'/><line x1='258' y1='243' x2='262' y2='239' stroke='var(--C)' stroke-width='1.6'/><line x1='260' y1='250' x2='266' y2='250' stroke='var(--C)' stroke-width='1.6'/><line x1='258' y1='257' x2='262' y2='261' stroke='var(--C)' stroke-width='1.6'/>
  <text x='250' y='228' text-anchor='middle' font-size='9' fill='var(--C)' font-weight='600'>GDF15(SASP)</text>
  <path d='M158,250 L235,250' stroke='var(--C)' stroke-width='1.6' marker-end='url(#ar17)'/>
  <path d='M250,233 C300,150 360,120 410,95' stroke='var(--C)' stroke-width='1.3' fill='none' stroke-dasharray='4,3' marker-end='url(#ar17)'/>
  <rect x='410' y='60' width='150' height='40' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.4'/>
  <text x='485' y='78' text-anchor='middle' font-size='9' fill='var(--ink)'>血中GDF15↑</text>
  <text x='485' y='92' text-anchor='middle' font-size='8.5' fill='var(--C)'>＝疾患重症度バイオマーカー</text>
  <path d='M285,255 C330,270 370,285 410,290' stroke='var(--C)' stroke-width='1.4' fill='none' marker-end='url(#ar17b)'/>
  <path d='M470,250 L470,238 M470,238 L464,230 M470,238 L476,230' stroke='var(--B)' stroke-width='2.2' fill='none'/>
  <text x='470' y='270' text-anchor='middle' font-size='8' fill='var(--B)'>TGFBR2</text>
  <path d='M500,300 L516,282 L508,296 L526,298 L509,304 L520,318 L500,306 L480,318 L491,304 L474,298 L492,296 L484,282 Z' fill='#b0432f' stroke='var(--B)' stroke-width='1.4'/>
  <circle cx='500' cy='300' r='5' fill='#7a3a2c'/>
  <text x='500' y='335' text-anchor='middle' font-size='9' fill='var(--B)'>HSC活性化/炎症 → 線維化・病態進行</text>
</svg>`,
    method_figure:`<svg viewBox='0 0 640 250' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs><marker id='m17' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>
  <rect x='0' y='0' width='640' height='250' fill='var(--paper)'/>
  <text x='320' y='22' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>実験デザイン：老化シグネチャ構築→検証→セノリティック同定</text>
  <rect x='16' y='42' width='150' height='84' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/>
  <text x='91' y='62' text-anchor='middle' font-size='9.5' fill='var(--ink)' font-weight='600'>① 老化モデル</text>
  <text x='91' y='80' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>パルボシクリブ誘導</text>
  <text x='91' y='95' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>＋NRAS誘導(in vivo)</text>
  <text x='91' y='112' text-anchor='middle' font-size='8.5' fill='var(--C)'>SHGS定義</text>
  <path d='M166,84 L206,84' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m17)'/>
  <rect x='208' y='34' width='186' height='66' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>
  <text x='301' y='54' text-anchor='middle' font-size='9.5' fill='var(--C)' font-weight='600'>② シグネチャ検証</text>
  <text x='301' y='70' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>複数MASLDマウス＋大規模ヒトコホート</text>
  <text x='301' y='86' text-anchor='middle' font-size='8.5' fill='var(--C)'>進行/退縮に追従・GDF15血中相関</text>
  <rect x='208' y='118' width='186' height='66' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>
  <text x='301' y='138' text-anchor='middle' font-size='9.5' fill='var(--ink)' font-weight='600'>③ 起源・機能</text>
  <text x='301' y='154' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>snRNA-seq：p21+由来</text>
  <text x='301' y='170' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>機能喪失＋分泌因子放出</text>
  <path d='M166,100 L200,151 L206,151' stroke='var(--accent)' stroke-width='1.3' fill='none' marker-end='url(#m17)'/>
  <path d='M394,67 L432,90' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m17)'/>
  <path d='M394,151 L432,118' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m17)'/>
  <rect x='434' y='70' width='190' height='110' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>
  <text x='529' y='92' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>④ 化合物スクリーニング</text>
  <text x='529' y='110' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>約2,100化合物</text>
  <text x='529' y='128' text-anchor='middle' font-size='8.5' fill='var(--H)'>セノリティックDpC同定</text>
  <text x='529' y='146' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>SHGS+を選択除去(増殖細胞は温存)</text>
  <text x='529' y='164' text-anchor='middle' font-size='8' fill='var(--H)'>→ 雄マウスでMASLD改善</text>
</svg>`,
    glossary:[
      {term:"SHGS",full:"senescent hepatocyte gene signature",desc:"老化肝細胞を捕捉するために本論文が定義した遺伝子シグネチャ。複数マウスモデルと大規模ヒトコホートでMASLDの進行・退縮に一致して動く。"},
      {term:"senolytic",full:"senolytic",desc:"老化細胞を選択的に除去する薬剤の総称。本論文では肝細胞老化に効くDpCを化合物スクリーニングで同定した。"},
      {term:"DpC",full:"di-2-pyridylketone 4-cyclohexyl-4-methyl-3-thiosemicarbazone",desc:"スクリーニングで選別されたDp44mTの類縁体（第二世代チオセミカルバゾン）。増殖中の肝細胞より老化肝細胞を選択的に殺し、銅依存的に作用するセノリティック。雄マウスMASHを改善。"},
      {term:"GDF15",full:"growth differentiation factor 15",desc:"老化肝細胞が分泌するSASP因子。血中濃度がSHGS量・疾患進行と相関するバイオマーカー。細胞間相互作用解析では近傍細胞のTGFBR2を介して作用しうると推定された。"},
      {term:"TGFBR2",full:"TGF-β receptor type 2",desc:"TGF-β受容体ファミリー。細胞間相互作用解析でGDF15の受け手側受容体として推定された（機能実証はなし）。"},
      {term:"p21",full:"cyclin-dependent kinase inhibitor 1A (CDKN1A)",desc:"細胞周期停止を担うCDK阻害因子。SHGS+肝細胞はp21+細胞に由来する。"},
      {term:"SASP",full:"senescence-associated secretory phenotype",desc:"老化細胞が放出する炎症・線維化促進性の分泌表現型。GDF15などを含み周囲組織の病態を駆動する。"},
      {term:"SA-β-gal",full:"senescence-associated β-galactosidase",desc:"細胞老化の代表的染色マーカー。パルボシクリブ誘導の老化肝細胞でほぼ100%陽性となる。"},
      {term:"palbociclib",full:"palbociclib (PD-0332991)",desc:"CDK4/6阻害薬。肝細胞に強固で不可逆的な老化を誘導し、SHGS構築のモデルに用いた。"},
      {term:"CDK4/6",full:"cyclin-dependent kinase 4/6",desc:"細胞周期G1/S移行を駆動するキナーゼ。阻害すると細胞周期が停止し細胞老化が誘導される。"},
      {term:"cellular senescence",full:"cellular senescence",desc:"ストレス等で誘導される不可逆的な細胞周期停止状態。SASPを伴い周囲組織に影響する。"},
      {term:"Huh7",full:"Huh7 (human hepatoma cell line)",desc:"ヒト肝がん由来株化細胞。パルボシクリブで強い老化表現型を示し老化モデルに使用。"},
      {term:"MASLD",full:"metabolic dysfunction-associated steatotic liver disease",desc:"代謝機能障害関連脂肪性肝疾患。老化肝細胞が蓄積し進行に寄与する。"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("17", [{ic:"hepatocyte",cap:"老化肝細胞(SHGS+/p21+)"},{ic:"drug",cap:"セノリティックDpC(選択除去)"},{ic:"mouse",cap:"複数MASLD進行/退縮マウス"},{ic:"human",cap:"大規模ヒトコホート照合"},{ic:"omics",cap:"snRNA-seq＋化合物スクリーニング"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 17 Du/Diehl Nat Commun 2025: パルボシクリブ老化モデル+MASLDマウス+ヒトコホート+snRNA+薬剤スクリーニング+p21 KOマウス+bulk RNA-seq+血清プロテオミクス(Olink/SOMAscan)+SA-β-gal染色 */
LP.methods("17", ["mouse","human","invitro","crispr","drug","scrna","rnaseq","proteomics","facs","qpcr","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* №17 老化肝細胞(SHGS+)→GDF15/TGFBR2→病態駆動／セノリティックDpCで選択除去 */
LP.cinema("17", {
  svg:`<defs>
    <radialGradient id="hepg17" cx="0.4" cy="0.32" r="0.85"><stop offset="0" stop-color="#f6e7c8"/><stop offset="1" stop-color="#dcc18c"/></radialGradient>
    <radialGradient id="dropg17" cx="0.35" cy="0.3" r="0.75"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#d9a441"/></radialGradient>
    <radialGradient id="pillg17" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stop-color="#d98a8a"/><stop offset="1" stop-color="#a23b3b"/></radialGradient>
  </defs>
  <rect x="0" y="0" width="720" height="430" fill="#eef3f6"/>
  <text x="360" y="22" text-anchor="middle" font-size="11.5" fill="var(--ink-soft)">老化肝細胞(SHGS+)がGDF15等を分泌して病態を駆動／DpCで選択除去</text>
  <g id="hepN">
    <ellipse cx="130" cy="120" rx="58" ry="44" fill="url(#hepg17)" stroke="#c2a268" stroke-width="2.2"/>
    <ellipse cx="108" cy="108" rx="15" ry="12" fill="#b79a64"/>
    <text x="130" y="180" text-anchor="middle" font-size="10" fill="#9c7b3a">健常肝細胞</text>
    <g id="hepNDrops"></g>
  </g>
  <g id="hepS">
    <ellipse id="hepSbody" cx="150" cy="300" rx="60" ry="46" fill="url(#hepg17)" stroke="#c2a268" stroke-width="2.2"/>
    <ellipse cx="126" cy="288" rx="16" ry="12" fill="#b79a64"/>
    <text id="hepSnuc" x="126" y="292" text-anchor="middle" font-size="8" fill="#5a6048" opacity="0">p21+</text>
    <text id="hepScap" x="150" y="362" text-anchor="middle" font-size="10" fill="var(--ink-soft)">肝細胞</text>
    <g id="hepSDrops"></g>
  </g>
  <g id="p21" class="fade"><rect x="222" y="262" width="64" height="24" rx="12" fill="#fff" stroke="var(--C)" stroke-width="1.6"/><text x="254" y="279" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--C)">p21↑</text></g>
  <g id="bgal" class="fade"><rect x="208" y="318" width="96" height="24" rx="12" fill="#fff" stroke="var(--D)" stroke-width="1.6"/><text x="256" y="335" text-anchor="middle" font-size="10" font-weight="600" fill="var(--D)">SA-β-gal+</text></g>
  <g id="gdf" class="fade" transform="translate(360,300)">
    <circle r="8" fill="var(--C)" opacity="0.9"/>
    <line x1="0" y1="-12" x2="0" y2="-18" stroke="var(--C)" stroke-width="1.9" stroke-linecap="round"/><line x1="9" y1="-9" x2="13" y2="-13" stroke="var(--C)" stroke-width="1.9" stroke-linecap="round"/><line x1="12" y1="0" x2="18" y2="0" stroke="var(--C)" stroke-width="1.9" stroke-linecap="round"/><line x1="9" y1="9" x2="13" y2="13" stroke="var(--C)" stroke-width="1.9" stroke-linecap="round"/><line x1="0" y1="12" x2="0" y2="18" stroke="var(--C)" stroke-width="1.9" stroke-linecap="round"/><line x1="-9" y1="9" x2="-13" y2="13" stroke="var(--C)" stroke-width="1.9" stroke-linecap="round"/><line x1="-12" y1="0" x2="-18" y2="0" stroke="var(--C)" stroke-width="1.9" stroke-linecap="round"/><line x1="-9" y1="-9" x2="-13" y2="-13" stroke="var(--C)" stroke-width="1.9" stroke-linecap="round"/>
    <text x="0" y="-26" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--C)">GDF15(SASP)</text>
  </g>
  <g id="blood" class="fade"><rect x="486" y="56" width="160" height="42" rx="10" fill="#fff" stroke="var(--C)" stroke-width="1.6"/><text x="566" y="76" text-anchor="middle" font-size="10" fill="var(--ink)">血中GDF15 ↑</text><text x="566" y="91" text-anchor="middle" font-size="8.5" fill="var(--C)">＝疾患重症度バイオマーカー</text></g>
  <g id="tgfbr2" class="fade"><path d="M534,300 L534,288 M546,300 L546,288 M534,288 L529,279 M534,288 L539,279 M546,288 L541,279 M546,288 L551,279" stroke="var(--B)" stroke-width="2.4" fill="none"/><text x="540" y="276" text-anchor="middle" font-size="9" font-weight="600" fill="var(--B)">TGFBR2</text></g>
  <g id="hsc" transform="translate(560,340)">
    <path id="hscShape" d="M0,-12 L26,-34 L9,-6 L40,-3 L11,6 L24,32 L1,10 L-22,34 L-6,6 L-38,5 L-8,-5 L-24,-32 Z" fill="#d6a08e" stroke="var(--B)" stroke-width="1.6"/>
    <circle cx="0" cy="0" r="7" fill="#7a3a2c"/>
    <text id="hscCap" x="0" y="52" text-anchor="middle" font-size="10" fill="var(--ink-soft)">肝星細胞</text>
  </g>
  <g id="collagen" opacity="0"></g>
  <g id="dpc" class="fade" transform="translate(610,200)">
    <rect x="-72" y="-16" width="144" height="32" rx="16" fill="url(#pillg17)" stroke="#7e2b2b" stroke-width="1.5"/>
    <rect x="-72" y="-16" width="72" height="32" rx="16" fill="#e8b3b3" opacity="0.6"/>
    <text x="0" y="5" text-anchor="middle" font-size="10.5" font-weight="600" fill="#fff">セノリティックDpC</text>
  </g>
  <g id="good" class="fade" transform="translate(620,350)">
    <circle r="40" fill="#fff" stroke="var(--H)" stroke-width="2.4"/>
    <text x="0" y="-4" text-anchor="middle" font-size="12.5" fill="var(--H)">MASLD</text><text x="0" y="15" text-anchor="middle" font-size="12.5" fill="var(--H)">改善 ✓</text>
  </g>`,
  build(K){
    const QUIET="M0,-12 L26,-34 L9,-6 L40,-3 L11,6 L24,32 L1,10 L-22,34 L-6,6 L-38,5 L-8,-5 L-24,-32 Z";
    const SPINDLE="M-40,-8 C-14,-15 16,-15 42,-7 C52,-3 52,3 42,7 C16,15 -14,15 -40,8 C-50,3 -50,-3 -40,-8 Z";
    function drop(layer,x,y){const c=K.cE("circle",{cx:x,cy:y,r:1,fill:"url(#dropg17)",stroke:"#b8862f","stroke-width":"0.7"});K.$(layer).appendChild(c);
      const t0=performance.now(),target=5+Math.random()*4,dur=1300;
      const st=now=>{const q=Math.max(0,Math.min(1,(now-t0)/dur));c.setAttribute("r",(1+(target-1)*q).toFixed(1));if(q<1)K.raf(st);};K.raf(st);}
    return [
      {color:"E",t:2200,cap:"健常な肝。肝細胞は正常に機能し、細胞周期も保たれている。",run(){}},
      {color:"D",t:3600,cap:"① 過栄養・脂肪毒性で肝細胞に脂肪滴が蓄積し、一部の肝細胞がp21+となって細胞周期を停止→老化（SHGS+）に陥る。",run(){
        [[140,300],[170,310],[150,330],[180,288]].forEach((p,i)=>K.T(()=>drop("hepSDrops",p[0],p[1]),i*180));
        K.T(()=>{K.attr("hepSbody","fill","#cfd3c4");K.attr("hepSbody","stroke","var(--C)");K.attr("hepSnuc","opacity","1");K.text("hepScap","老化肝細胞(SHGS+)");},900);
        K.T(()=>{K.show(["p21","bgal"]);K.pulse("p21");},1400);
      }},
      {color:"C",t:4400,cap:"② SHGS+肝細胞はSASPとしてGDF15などを分泌し、その培養上清はHSC・マクロファージ・LSECを病的に再プログラムする（GDF15は相互作用解析でTGFBR2を介して作用しうると推定）。血中GDF15も上昇し、疾患重症度のバイオマーカーになる。",run(){
        K.show(["gdf","tgfbr2","blood"]);
        K.flow(208,300,352,300,"var(--C)",{n:2,dur:1.1,loop:2});
        K.T(()=>{K.flow(368,300,532,298,"var(--C)",{n:2,dur:1.0,loop:2});K.flow(360,288,560,92,"var(--C)",{n:1,dur:1.3,loop:2});},1000);
        K.T(()=>{K.morph("hscShape",SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化HSC");},2200);
        K.T(()=>K.draw("collagen",["M518,360 C546,348 574,352 606,350","M516,378 C554,392 576,382 609,386","M521,395 C549,382 573,400 609,394"],{len:150}),2900);
      }},
      {color:"H",t:3600,cap:"③ 化合物スクリーニングで同定したセノリティックDpCがSHGS+肝細胞を選択的に除去（増殖中の肝細胞への毒性は小さい）→老化・線維化・炎症のマーカーが低下してMASLDが改善し、肝外臓器障害に関連する遺伝子発現も低下する。",run(){
        K.show(["dpc"]);
        K.T(()=>{K.strike(610,200,150,300);
          K.T(()=>{K.markX(150,300);K.attr("hepS","opacity","0.3");K.hide(["gdf"]);
            K.attr("collagen","opacity","0.28");K.attr("hscShape","opacity","0.5");
            K.morph("hscShape",QUIET);K.text("hscCap","静止期へ");
            K.pulse("hepN");K.show(["good"]);},780);
        },800);
      }},
    ];
  }
});
