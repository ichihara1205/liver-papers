/* ============================================================
   №53 · Sci Adv 2026 · Fang Z, Che B, Ling Y, …, Duan J, Wang L
   PC(中心静脈周囲)のLSECがc-Kit/RXRG依存でFGF1を出し、肝細胞のFGFR4を介して脂肪化を抑える——レチノイン酸(ビタミンA)がこの軸を強める
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"53", primary:"D",
    title:"類洞内皮のzonationが脂肪化の始まりを決める——PC LSECがc-Kit/RXRG依存でFGF1を出し、レチノイン酸(ビタミンA)がこの抗脂肪化軸を強める",
    authors:"Fang Z, Che B, Ling Y, Liu P, Liu J, …, He F, Duan J, Wang L",
    journal:"Sci Adv",
    year:2026,
    vol:"12(25):eaed4384",
    doi:"10.1126/sciadv.aed4384",
    url:"https://doi.org/10.1126/sciadv.aed4384",
    tags:["D","E","H"],
    approach:"ヒト・マウスMASLD検体の空間的脂肪化解析（ORO/BODIPY×GS/Cyp2e1）＋ c-Kit免疫磁気ビーズでPC/PP LSECを分取してのRNA-seq/マルチオミクス ＋ c-Kit・RXRG・FGF1の機能操作 ＋ レチノイン酸/ビタミンA投与・食餌 ＋ ヒトの食事ビタミンAとMASLD重症度の相関",
    added:"2026-10-06",
    abstract_ja:"MASLD（代謝機能障害関連脂肪性肝疾患）における類洞内皮細胞（LSEC）のzonation（小葉内の位置依存的な性質の違い）の役割は分かっていなかった。本研究はまず、ヒトでもマウスでも早期MASLDの脂肪化が中心静脈周囲（PC, pericentral）ゾーンから始まることを、オイルレッドOやBODIPYとGS/Cyp2e1の共染色で示した。LSECの位置依存性を決めるマスター制御因子としてc-Kitに着目すると、c-KitはPC LSECに濃く発現し（PC→PPで減少）、抗脂肪化の性質を持っていた。機序としては、PC LSECが核内受容体RXRG（レチノイドX受容体γ）依存でFGF1（線維芽細胞増殖因子1）を転写・産生し、このFGF1が肝細胞のFGFR4シグナルを介して脂質の蓄積を抑えるというものである。RXRGの内因性リガンドでありビタミンAの活性代謝物であるレチノイン酸（RA）を与えると、LSEC由来FGF1シグナルが増強されてFGF1と同じ抗脂肪化作用が再現された。臨床データでも食事中ビタミンA量とMASLD重症度が逆相関しており、早期介入としてビタミンA補充が治療に使える可能性が示された。要するに、肝の血管(LSEC)のzonationが脂肪化の点火場所を決め、RA–RXRG–FGF1–FGFR4という内皮→肝細胞の軸が脂肪化のブレーキになっている。",
    background:"肝小葉は門脈周囲（PP, periportal / zone 1）と中心静脈周囲（PC, pericentral / zone 3）で遺伝子発現も代謝も異なり、これをzonationと呼ぶ。酸素勾配・Wnt/β-catenin・R-spondin・E3リガーゼZNRF3/RNF43などが制御因子として知られる。臨床・前臨床の観察からMASLDの脂肪化はPC優位に起こると示唆されていたが、zonation——とくに血管側(LSEC)のzonation——が脂肪化の開始にどう効くのかは未解明だった。LSECは有窓を持つ特殊な内皮で、c-Kit発現の勾配でPC〜PPに階層化されることが先行研究で示されていた。",
    achievements:[
      "**早期MASLDの脂肪化はPCゾーンから始まる**ことを、ヒト検体・食餌/加齢/座位モデルのマウスでORO・BODIPY×GS共染色により一貫して示した（加齢はゾーン依存の脂肪化を悪化させる）。",
      "**c-KitがLSECのzonationのマスター制御因子**で、PC LSECに濃く（PC→PPで減少）、c-Kit immunomagnetic beadsで分取したPC LSECは**抗脂肪化**の性質を持つことを示した。",
      "機序を同定：**PC LSECがRXRG依存でFGF1を転写・分泌→肝細胞のFGFR4を介して脂質蓄積を抑制**（内皮→肝細胞のパラクリンな抗脂肪化軸）。",
      "**レチノイン酸(RA＝ビタミンA活性代謝物, RXRGリガンド)がFGF1と同じ抗脂肪化効果を再現**。ヒトで**食事ビタミンAとMASLD重症度が逆相関**し、ビタミンA補充が早期介入として有望と提案。"
    ],
    limitations:[
      "機序の因果は主に**マウス**で、ヒトは発現・相関（食事ビタミンA〜重症度）にとどまる。",
      "c-KitはLSEC以外（造血・肥満細胞など）でも働くため、**c-Kit操作の全身作用**と肝内皮特異的効果の切り分けには限界がある。",
      "FGF1はFGFR1-4や代謝全般に広く効くため、**FGFR4特異性・全身代謝への波及**（用量・安全域）は要検討。",
      "ビタミンAは**過剰で肝毒性・HSC活性化(星細胞のレチノイド貯蔵)**という逆作用もあり、治療用量の最適化と長期安全性は未確立。脂肪化が中心で、線維化・炎症の局面は本研究の主眼ではない。"
    ],
    connection:[
      "**zonationを自分の系に持ち込む糸口**。自分の肝オープンオルガノイドは酸素透過膜で酸素勾配を作れるので、PC(低酸素)側で脂肪化が点火しやすいという本論文の像を、酸素勾配×脂肪化の空間パターンとして検証できる。",
      "**抗脂肪化の内皮入力**：LSECを入れた共培養で『PC様LSEC(c-Kit+)からのFGF1』を抗脂肪化の保護入力として設計し、FGF1/RAを加えると肝細胞の脂肪滴が減るかを試せる。『脂肪化は出るが線維化が出ない』系に、まず脂肪化の点火/抑制を空間とリンクさせる基盤になる。",
      "**ABM実装**：『LSECのc-Kit/ゾーン状態→FGF1分泌速度→(FGFR4介在)肝細胞の脂質取り込み/合成抑制』をパラクリンのルールに。酸素(ゾーン)を状態変数にしてPC優位の脂肪化を再現できる。",
      "**既収録との接続**：#50(FBXW7/NOTCH1/SEMA3GのLSEC軸)・#54(血流→血管Wntでzonation)・#09(HSC-RSPO3 zonation)と同じ『LSECの状態が肝細胞/HSC運命を決める』像。手法的にはビタミンA＝HSCのレチノイド貯蔵とも絡み、#56(EasySCPのzonationプロテオミクス)で空間検証ができる。"
    ],
    glossary:[
      {term:"zonation",full:"liver zonation",desc:"肝小葉内のPP(門脈周囲)〜PC(中心静脈周囲)で遺伝子発現・代謝が勾配を描く性質"},
      {term:"LSEC",full:"liver sinusoidal endothelial cell",desc:"肝類洞の有窓内皮。c-Kit勾配でPC〜PPに階層化され、FGF1を出して脂肪化を抑える"},
      {term:"c-Kit",full:"KIT proto-oncogene, receptor tyrosine kinase",desc:"LSECのzonationのマスター制御因子。PCに濃く発現し抗脂肪化に働く"},
      {term:"RXRG",full:"retinoid X receptor gamma",desc:"核内受容体。PC LSECでFGF1の転写を駆動する。RAがリガンド"},
      {term:"RA",full:"retinoic acid",desc:"レチノイン酸。ビタミンAの活性代謝物でRXRのリガンド。FGF1軸を強め脂肪化を抑える"},
      {term:"FGF1",full:"fibroblast growth factor 1",desc:"PC LSECがRXRG依存で分泌する増殖因子。肝細胞のFGFR4を介し抗脂肪化"},
      {term:"FGFR4",full:"fibroblast growth factor receptor 4",desc:"肝細胞側のFGF1受容体。脂質蓄積の抑制シグナルを受ける"},
      {term:"pericentral",full:"pericentral zone (zone 3)",desc:"中心静脈周囲。酸素が低く、早期MASLDの脂肪化が始まる領域"},
      {term:"BODIPY",full:"boron-dipyrromethene",desc:"中性脂質を染める蛍光色素。脂肪滴の空間分布を可視化する"}
    ],
    struct:{
      model:"in vivo",
      cells:["LSEC","肝細胞"],
      triggers:["高脂肪/MASLD食・加齢・座位","PCの低酸素ゾーン","(抑制)RA/ビタミンA・FGF1"],
      steatosis:"○", inflammation:"△", fibrosis:"—",
      readout:["ORO/BODIPY×GS(ゾーン別脂肪化)","PC/PP LSECのRNA-seq","FGF1/FGFR4シグナル","食事ビタミンA〜MASLD重症度"],
      ignite:"脂肪化はPCゾーンから点火。PC LSECのc-Kit/RXRG→FGF1→(FGFR4)が抗脂肪化のブレーキで、RA/ビタミンAで増強できる。",
      params:[
        {name:"LSECのc-Kit/ゾーン状態 → FGF1分泌速度",note:"RXRG活性(RA量)で調節"},
        {name:"FGF1濃度 → (FGFR4介在)肝細胞の脂質蓄積抑制",note:"内皮→肝細胞パラクリンのルール"}
      ],
      todos:[
        "酸素透過膜の酸素勾配でPC(低酸素)側の脂肪化点火を再現できるか検証",
        "共培養にFGF1/RAを添加し肝細胞の脂肪滴(BODIPY)が減るか定量",
        "c-Kit+ LSEC(PC様)を抗脂肪化入力としてモデル化"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f53' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='f53h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>肝のzonation：PC(中心静脈)側で脂肪化が点火、PC LSECのFGF1がブレーキ</text><rect x='14' y='38' width='612' height='22' rx='5' fill='var(--paper-2)' stroke='var(--line-soft)'/><text x='40' y='53' font-size='9.5' fill='var(--E)' font-weight='600'>PP 門脈周囲(zone1・高O₂)</text><text x='600' y='53' text-anchor='end' font-size='9.5' fill='var(--D)' font-weight='600'>PC 中心静脈周囲(zone3・低O₂)</text><line x1='170' y1='49' x2='470' y2='49' stroke='var(--ink-soft)' stroke-width='1' marker-end='url(#f53)'/><rect x='360' y='72' width='268' height='60' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4' stroke-dasharray='5 3'/><text x='494' y='90' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>PC LSEC（c-Kit 濃い）</text><rect x='372' y='98' width='70' height='26' rx='5' fill='var(--paper)' stroke='var(--accent)'/><text x='407' y='115' text-anchor='middle' font-size='9.5' fill='var(--accent)'>c-Kit</text><rect x='456' y='98' width='70' height='26' rx='5' fill='var(--paper)' stroke='var(--D)'/><text x='491' y='115' text-anchor='middle' font-size='9.5' fill='var(--D)'>RXRG</text><rect x='540' y='98' width='76' height='26' rx='5' fill='var(--paper)' stroke='var(--E)'/><text x='578' y='115' text-anchor='middle' font-size='9.5' fill='var(--E)'>FGF1↑</text><line x1='442' y1='111' x2='454' y2='111' stroke='var(--accent)' stroke-width='1.1' marker-end='url(#f53)'/><line x1='526' y1='111' x2='538' y2='111' stroke='var(--accent)' stroke-width='1.1' marker-end='url(#f53)'/><rect x='360' y='150' width='268' height='60' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/><text x='494' y='168' text-anchor='middle' font-size='10' fill='var(--D)' font-weight='600'>PC 肝細胞</text><text x='494' y='185' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>FGFR4 でFGF1を受ける</text><text x='494' y='200' text-anchor='middle' font-size='9.5' fill='var(--E)'>脂質蓄積 ⊣ 抑制</text><path d='M560,132 L540,148' stroke='var(--E)' stroke-width='1.4' marker-end='url(#f53)'/><rect x='14' y='72' width='330' height='60' rx='8' fill='var(--paper)' stroke='var(--D)' stroke-width='1.3'/><text x='179' y='90' text-anchor='middle' font-size='10' fill='var(--D)' font-weight='600'>早期MASLD：脂肪滴がPCから出現</text><circle cx='300' cy='112' r='8' fill='var(--D)' opacity='0.5'/><circle cx='282' cy='116' r='6' fill='var(--D)' opacity='0.45'/><circle cx='316' cy='108' r='5' fill='var(--D)' opacity='0.4'/><text x='120' y='116' font-size='9' fill='var(--ink-soft)'>ORO/BODIPY × GS</text><rect x='14' y='150' width='330' height='60' rx='8' fill='var(--paper)' stroke='var(--H)' stroke-width='1.5'/><text x='179' y='170' text-anchor='middle' font-size='10' fill='var(--H)' font-weight='600'>治療：レチノイン酸 / ビタミンA</text><text x='179' y='187' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>RXRGを活性化→FGF1↑（FGF1と同じ抗脂肪化）</text><text x='179' y='202' text-anchor='middle' font-size='9' fill='var(--H)'>食事ビタミンA ↑ ⇔ MASLD重症度 ↓</text><path d='M344,180 L358,180' stroke='var(--H)' stroke-width='1.4' marker-end='url(#f53h)'/></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m53' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：ゾーン別脂肪化 → PC/PP LSEC分取オミクス → FGF1/RA操作 → ヒト相関</text><rect x='12' y='40' width='150' height='54' rx='7' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.4'/><text x='87' y='60' text-anchor='middle' font-size='9.5' fill='var(--D)' font-weight='600'>MASLDモデル/検体</text><text x='87' y='76' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>食餌・加齢・座位</text><text x='87' y='88' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ヒト肝＋マウス</text><rect x='12' y='106' width='150' height='54' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='87' y='126' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>ゾーン別脂肪化</text><text x='87' y='142' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ORO/BODIPY×GS/Cyp2e1</text><text x='87' y='154' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>→PC優位を確認</text><path d='M162,67 C182,67 184,120 200,124' fill='none' stroke='var(--accent)' marker-end='url(#m53)'/><path d='M162,133 L200,133' stroke='var(--accent)' marker-end='url(#m53)'/><rect x='203' y='106' width='156' height='54' rx='7' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='281' y='126' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>PC/PP LSEC 分取</text><text x='281' y='142' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>c-Kit免疫磁気ビーズ</text><text x='281' y='154' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>RNA-seq/マルチオミクス</text><rect x='203' y='40' width='156' height='54' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='281' y='60' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>機能操作</text><text x='281' y='76' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>c-Kit / RXRG / FGF1</text><text x='281' y='88' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>gain/loss</text><path d='M281,106 L281,96' stroke='var(--accent)' marker-end='url(#m53)'/><rect x='400' y='40' width='148' height='54' rx='7' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='474' y='60' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>RA / ビタミンA 投与</text><text x='474' y='76' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>RXRG活性化→FGF1↑</text><text x='474' y='88' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>抗脂肪化を評価</text><rect x='400' y='106' width='148' height='54' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='474' y='126' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>ヒト食事ビタミンA</text><text x='474' y='142' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>〜MASLD重症度</text><text x='474' y='154' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>逆相関</text><path d='M359,120 C378,120 384,70 398,66' fill='none' stroke='var(--accent)' marker-end='url(#m53)'/><path d='M359,133 L398,131' stroke='var(--accent)' marker-end='url(#m53)'/><rect x='560' y='64' width='72' height='90' rx='7' fill='var(--paper)' stroke='var(--E)' stroke-width='1.5'/><text x='596' y='98' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>脂肪化</text><text x='596' y='114' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>FGF1/RA↓</text><path d='M548,66 C554,66 556,96 558,102' fill='none' stroke='var(--accent)' marker-end='url(#m53)'/><path d='M548,131 L558,120' stroke='var(--accent)' marker-end='url(#m53)'/><text x='320' y='210' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>読み出し：ゾーン別脂肪滴・PC/PP LSEC発現・FGF1/FGFR4シグナル・食事ビタミンA相関</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("53", [{ic:"endothelial",cap:"PC LSEC：c-Kit/RXRGでFGF1を分泌"}, {ic:"hepatocyte",cap:"肝細胞：FGFR4でFGF1を受け脂肪化を抑制"}, {ic:"liver",cap:"zonation：脂肪化はPC(中心静脈周囲)から点火"}, {ic:"drug",cap:"レチノイン酸/ビタミンAでFGF1軸を増強"}, {ic:"human",cap:"食事ビタミンA↑ ⇔ MASLD重症度↓"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 53 Fang/Wang Sci Adv 2026: ヒト/マウスMASLD+ゾーン別脂肪化染色+PC/PP LSEC分取RNA-seq+機能操作+RA/ビタミンA+ヒト相関 */
LP.methods("53", ["mouse","human","rnaseq","facs","qpcr","wb","imaging","drug"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №53 PC LSECのc-Kit/RXRG→FGF1→(FGFR4)肝細胞で脂肪化抑制、RAで増強 ===== */
LP.cinema("53", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("53")}${GLYPH.arrow("53",'var(--E)')}${GLYPH.arrow("53h",'var(--H)')}</defs>`
    +GLYPH.title("早期MASLDの脂肪化はPCから点火。PC LSECのc-Kit/RXRG→FGF1→(FGFR4)が抑え、RA/ビタミンAで増強")
    +`<text x="60" y="80" font-size="10.5" fill="var(--E)">PP 門脈周囲(zone1)</text>`
    +`<text x="680" y="80" font-size="10.5" fill="var(--D)" text-anchor="end">PC 中心静脈周囲(zone3)</text>`
    +`<line x1="200" y1="76" x2="520" y2="76" stroke="var(--ink-soft)" stroke-width="1.4"/>`
    +`<rect x="420" y="100" width="300" height="120" rx="14" fill="none" stroke="var(--E)" stroke-width="2" stroke-dasharray="6 4"/>`
    +`<text x="440" y="122" font-size="10.5" fill="var(--E)">PC LSEC（c-Kit 濃い）</text>`
    +GLYPH.tag("ckit53",470,150,"c-Kit","var(--accent)",80)
    +GLYPH.nucleus("nuc53",560,170,42,30,"核")
    +GLYPH.tf("rxrg53",560,170,"RXRG","var(--D)",true)
    +GLYPH.gene("fgf53",650,150,"FGF1","var(--E)",true)
    +`<g id="fgfOut53" class="fade"></g>`
    +GLYPH.hep("hep53",470,320,1,"PC肝細胞")
    +GLYPH.receptor("fgfr53",470,262,"FGFR4","var(--E)")
    +GLYPH.pill("ra53",150,150,"RA/ビタミンA",140)
    +GLYPH.badge("stea53",180,320,"脂肪化","PCから↑","var(--D)"),
  build(K){
    const drops=[[455,330],[485,340],[470,355],[500,325]];
    return [
      {color:"D",t:2800,cap:"① 早期MASLDでは、脂肪滴がまず中心静脈周囲（PC）の肝細胞に溜まり始める。",run(){
        K.show(["stea53"]);
        drops.forEach((p,i)=>K.T(()=>K.add("circle",{cx:p[0],cy:p[1],r:7,fill:"var(--D)",opacity:0.55}),i*300));
      }},
      {color:"E",t:4000,cap:"② PC LSECはc-Kitを濃く発現し、核内受容体RXRG依存でFGF1を転写・分泌する。",run(){
        K.pulse("ckit53");
        K.T(()=>{K.show(["rxrg53"]);K.pulse("rxrg53");},900);
        K.T(()=>{K.flow(560,170,650,150,"var(--E)",{n:2,dur:1.1,loop:2});},1900);
        K.T(()=>{K.show(["fgf53"]);K.pulse("fgf53");},2600);
      }},
      {color:"E",t:4000,cap:"③ 分泌されたFGF1が肝細胞のFGFR4に結合し、脂質の蓄積を抑える——脂肪滴が減る。",run(){
        K.show(["fgfOut53"]);const g=K.$("fgfOut53");
        [[600,210],[540,240],[500,250]].forEach((p,i)=>K.T(()=>{g.insertAdjacentHTML("beforeend",GLYPH.metab("fg"+i,p[0],p[1],i===1?"FGF1":"","var(--E)"));K.flow(p[0],p[1],470,262,"var(--E)",{n:1,dur:1.1,loop:2});},i*250));
        K.T(()=>{K.pulse("fgfr53");},1600);
        K.T(()=>{drops.forEach((p,i)=>K.T(()=>K.markX(p[0],p[1],"var(--E)"),i*150));K.attr("stea53","opacity","0.35");},2400);
      }},
      {color:"H",t:3200,cap:"④ レチノイン酸(ビタミンA活性体)はRXRGを活性化してFGF1軸を強め、FGF1と同じ抗脂肪化作用を示す。",run(){
        K.show(["ra53"]);
        K.T(()=>{K.flow(220,160,470,150,"var(--H)",{n:3,dur:1.2,loop:2});},500);
        K.T(()=>{K.pulse("rxrg53");K.pulse("fgf53");},1700);
        K.T(()=>{K.attr("stea53","opacity","0.2");},2400);
      }},
    ];
  }
});
