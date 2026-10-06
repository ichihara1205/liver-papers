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
    approach:"ヒト・マウスMASLD検体の空間的脂肪化解析（ヒトはH&E＋GS免疫染色、マウスはH&E・ORO＋BODIPY×GS共染色）＋ c-Kit免疫磁気ビーズでPC/PP LSECを分取してのbulk RNA-seq（scRNA-seq・snRNA-seq・空間トランスクリプトームも併用）＋ 内皮特異的c-Kit/FGF1 KOマウス・c-Kit+ LSEC移入・組換えFGF1投与と、培養系（AML12・初代LSECなど）でのRXRG/RXR操作 ＋ レチノイン酸/ビタミンA投与・ビタミンA添加食 ＋ NHANES（米国の横断調査）での食事ビタミンAとMASLDリスクの相関",
    added:"2026-10-06",
    abstract_ja:"MASLD（代謝機能障害関連脂肪性肝疾患）における類洞内皮細胞（LSEC）のzonation（小葉内の位置依存的な性質の違い）の役割は分かっていなかった。本研究はまず、ヒトでもマウスでも早期MASLDの脂肪化が中心静脈周囲（PC, pericentral）ゾーンから始まることを、ヒトではH&E染色とGS（グルタミン合成酵素）免疫染色、マウスではH&E・オイルレッドO染色とBODIPY/GS共染色で示した。LSECの位置依存性を決めるマスター制御因子としてc-Kitに着目すると、c-KitはPC LSECに濃く発現し（PC→PPで減少）、内皮特異的KOで脂肪化が悪化しc-Kit+ LSECの移入で改善するなど、抗脂肪化の性質を持っていた。機序としては、PC LSECが核内受容体RXRG（レチノイドX受容体γ）依存でFGF1（線維芽細胞増殖因子1）を転写・産生し、このFGF1が肝細胞のFGFR4を介して脂質の蓄積を抑える（FGFR4はFGFR阻害剤実験による同定）というものである。RXRの内因性リガンドでありビタミンAの活性代謝物であるレチノイン酸（RA）は、LSECのFGF1発現を高め、高脂肪食マウスの脂肪化を軽減した。ビタミンA添加食でも脂肪化が減ったが、RAの効果がFGF1にどこまで依存するかは検証されていない。臨床データ（米国NHANES、成人11,592人）でも、プロビタミンAおよび総ビタミンAの摂取量が多いほどMASLDリスクが低く（既成型ビタミンAでは有意な関連なし）、ビタミンA補充が早期介入に使える可能性が示唆された。要するに、肝の血管(LSEC)のzonationが脂肪化の点火場所に関わり、RA–RXRG–FGF1–FGFR4という内皮→肝細胞の軸が脂肪化のブレーキになっていると著者らは結論している。",
    background:"肝小葉は門脈周囲（PP, periportal / zone 1）と中心静脈周囲（PC, pericentral / zone 3）で遺伝子発現も代謝も異なり、これをzonationと呼ぶ。酸素勾配・Wnt/β-catenin・R-spondin・E3リガーゼZNRF3/RNF43などが制御因子として知られる。臨床・前臨床の観察からMASLDの脂肪化はPC優位に起こると示唆されていたが、zonation——とくに血管側(LSEC)のzonation——が脂肪化の開始にどう効くのかは未解明だった。LSECは有窓を持つ特殊な内皮で、c-Kit発現の勾配でPC〜PPに階層化されることが先行研究で示されていた。",
    achievements:[
      "**早期MASLDの脂肪化はPCゾーンから始まる**ことを、ヒト検体（H&E・GS免疫染色）と、高脂肪食・加齢・座位のマウス（H&E・ORO、7か月齢マウスではBODIPY/GS共染色）で一貫して示した（加齢はゾーン依存の脂肪化を悪化させた）。",
      "**c-Kitは著者らがLSEC zonationの鍵と位置づける分子**で、PC LSECに濃く（PC→PPで減少）、MASLDで低下する。内皮特異的c-Kit KO（CDH5-CreERT c-Kit fl/fl）で脂肪化・炎症・線維化が悪化し、c-Kit免疫磁気ビーズで分取したc-Kit+ LSECの移入で改善した（**抗脂肪化**）。",
      "機序を同定：**PC LSECがRXRG依存でFGF1を転写・分泌→肝細胞のFGFR4を介して脂質蓄積を抑制**（内皮→肝細胞のパラクリンな抗脂肪化軸）。内皮特異的FGF1 KOや組換えFGF1（0.5 mg/kg i.p.）の救済実験でc-Kit→FGF1依存性を確認し、RXRGはFGF1プロモーターに結合して転写を活性化（ChIP・ルシフェラーゼ）、FGFR4は阻害剤実験で主要受容体と判定された。",
      "**レチノイン酸(RA＝ビタミンA活性代謝物, RXRリガンド)がLSECのFGF1を上げ**、高脂肪食10週後のマウスへの投与（10 mg/kg/日 i.p.・2週）でMASLD表現型を軽減。ビタミンA添加食（40,000 IU/kg・12週）でも脂肪化が減った。NHANES（米国成人11,592人）では**プロビタミンA・総ビタミンA摂取量とMASLDリスクが逆相関**（既成型ビタミンAは無関連）し、ビタミンA補充が早期介入として有望と提案。"
    ],
    limitations:[
      "機序の因果は主に**マウスと培養細胞**で、ヒトは組織像・発現と、食事ビタミンA〜MASLDリスクの横断的相関（NHANES、24時間思い出し法）にとどまる。",
      "c-Kit→RXRG→FGF1の連結は培養系（Bend.3・初代LSEC・HEK293T）での過剰発現・阻害剤・ChIP・レポーター解析が中心で、**生体内で内皮RXRGを操作した実験はない**。膜型c-KitがRXRG発現を維持する仕組みも未解明。",
      "FGFR4が主要受容体という結論はAML12細胞でのFGFR阻害剤（サブタイプ特異的）による**薬理学的な同定**で、肝細胞特異的FGFR4欠損での検証はない。また組換えFGF1は血糖低下など全身作用を持つため、用量・安全域は要検討。",
      "RAは全身の脂質代謝・免疫に多面的に作用し（著者も脂肪組織・膵・肝内の他細胞への作用の可能性を指摘）、**LSEC FGF1経路の寄与は定量されていない**。ビタミンAは過剰で肝毒性・HSC活性化(星細胞のレチノイド貯蔵)という逆作用もあり、治療用量と長期安全性は未確立。主眼は脂肪化の開始で、炎症・線維化はF4/80・αSMA染色での評価にとどまる。"
    ],
    connection:[
      "**zonationを自分の系に持ち込む糸口**。自分の肝オープンオルガノイドは酸素透過膜で酸素勾配を作れるので、酸素勾配×脂肪化の空間パターンを検証できる。ただし本論文は酸素・低酸素を検証しておらず（酸素はzonation制御因子の一つとして序論で触れるのみ）、『PC(低酸素)側で脂肪化が点火しやすい』は本論文の結論ではなく自分の仮説として試す対象である。なお#54は、低酸素がLSECの血管Wnt発現やzonationを誘導しないと報告している。",
      "**抗脂肪化の内皮入力**：LSECを入れた共培養で『PC様LSEC(c-Kit+)からのFGF1』を抗脂肪化の保護入力として設計し、FGF1/RAを加えると肝細胞の脂肪滴が減るかを試せる。『脂肪化は出るが線維化が出ない』系に、まず脂肪化の点火/抑制を空間とリンクさせる基盤になる。",
      "**ABM実装**：『LSECのc-Kit/ゾーン状態→FGF1分泌速度→(FGFR4介在)肝細胞の脂質取り込み/合成抑制』をパラクリンのルールに。ゾーン位置を状態変数にしてPC優位の脂肪化を再現できる（酸素を入れるかは自分の仮説として別に検証）。",
      "**既収録との接続**：#50(LSECのFBXW7がNOTCH1を分解しSEMA3Gを抑える軸、毛細血管化とHSC活性化)・#54(血流のずり応力→LSECの血管Wnt→肝のzonation)・#09(HSCのR-spondin 3による肝細胞zonation)と同じ『血管・間質側の状態が肝細胞/HSCの性質を決める』像。ビタミンA＝HSCのレチノイド貯蔵とも絡み、#56(EasySCP単一細胞プロテオミクス、zonation位置は計算推定)でタンパク質レベルのゾーン別確認ができる。"
    ],
    glossary:[
      {term:"zonation",full:"liver zonation",desc:"肝小葉内のPP(門脈周囲)〜PC(中心静脈周囲)で遺伝子発現・代謝が勾配を描く性質"},
      {term:"LSEC",full:"liver sinusoidal endothelial cell",desc:"肝類洞の有窓内皮。c-Kit勾配でPC〜PPに階層化され、FGF1を出して脂肪化を抑える"},
      {term:"c-Kit",full:"KIT proto-oncogene, receptor tyrosine kinase",desc:"著者らがLSEC zonationの鍵と位置づける受容体型チロシンキナーゼ。PCに濃く発現し、内皮KOで脂肪化が悪化する"},
      {term:"RXRG",full:"retinoid X receptor gamma",desc:"核内受容体。c-Kitの下流でFGF1プロモーターに結合し転写を駆動する（培養系で実証）。RXRのリガンドとしてRAが働く"},
      {term:"RA",full:"retinoic acid",desc:"レチノイン酸。ビタミンAの活性代謝物でRXRのリガンド。LSECのFGF1発現を上げ、高脂肪食マウスの脂肪化を抑える"},
      {term:"FGF1",full:"fibroblast growth factor 1",desc:"PC LSECがRXRG依存で分泌する増殖因子。肝細胞のFGFR4を介し抗脂肪化"},
      {term:"FGFR4",full:"fibroblast growth factor receptor 4",desc:"肝細胞側のFGF1受容体。FGFR阻害剤実験で抗脂肪化に最も寄与する受容体と判定された"},
      {term:"pericentral",full:"pericentral zone (zone 3)",desc:"中心静脈周囲。早期MASLDの脂肪化が始まる領域。『酸素が低い』はzonation一般の背景知識で、本論文では低酸素を検証していない"},
      {term:"BODIPY",full:"boron-dipyrromethene",desc:"中性脂質を染める蛍光色素。脂肪滴の空間分布を可視化する（本論文では7か月齢マウスでGSと共染色）"}
    ],
    struct:{
      model:"in vivo（内皮特異的KOマウス）＋培養細胞＋ヒト検体",
      cells:["LSEC","肝細胞"],
      triggers:["高脂肪/MASLD食・加齢・座位","(破綻)MASLDでのLSEC c-Kit・FGF1低下","(抑制)RA/ビタミンA・FGF1"],
      steatosis:"○", inflammation:"△", fibrosis:"—",
      readout:["H&E・ORO/BODIPY×GS(ゾーン別脂肪化)","PC/PP LSECのRNA-seq","FGF1発現・分泌とFGFR阻害","食事ビタミンA〜MASLDリスク(NHANES)"],
      ignite:"脂肪化はPCゾーンから点火。PC LSECのc-Kit/RXRG→FGF1→(FGFR4)が抗脂肪化のブレーキで、RA/ビタミンAで増強できる。",
      params:[
        {name:"LSECのc-Kit/ゾーン状態 → FGF1分泌速度",note:"RXRG活性(RA量)で調節"},
        {name:"FGF1濃度 → (FGFR4介在)肝細胞の脂質蓄積抑制",note:"内皮→肝細胞パラクリンのルール"}
      ],
      todos:[
        "（自分の仮説）酸素透過膜の酸素勾配でPC側の脂肪化点火を再現できるか検証（本論文は酸素を未検証）",
        "共培養にFGF1/RAを添加し肝細胞の脂肪滴(BODIPY)が減るか定量",
        "c-Kit+ LSEC(PC様)を抗脂肪化入力としてモデル化"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f53' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='f53h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>肝のzonation：PC(中心静脈)側で脂肪化が点火、PC LSECのFGF1がブレーキ</text><rect x='14' y='38' width='612' height='22' rx='5' fill='var(--paper-2)' stroke='var(--line-soft)'/><text x='40' y='53' font-size='9.5' fill='var(--E)' font-weight='600'>PP 門脈周囲(zone1)</text><text x='600' y='53' text-anchor='end' font-size='9.5' fill='var(--D)' font-weight='600'>PC 中心静脈周囲(zone3)</text><line x1='170' y1='49' x2='470' y2='49' stroke='var(--ink-soft)' stroke-width='1' marker-end='url(#f53)'/><rect x='360' y='72' width='268' height='60' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4' stroke-dasharray='5 3'/><text x='494' y='90' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>PC LSEC（c-Kit 濃い）</text><rect x='372' y='98' width='70' height='26' rx='5' fill='var(--paper)' stroke='var(--accent)'/><text x='407' y='115' text-anchor='middle' font-size='9.5' fill='var(--accent)'>c-Kit</text><rect x='456' y='98' width='70' height='26' rx='5' fill='var(--paper)' stroke='var(--D)'/><text x='491' y='115' text-anchor='middle' font-size='9.5' fill='var(--D)'>RXRG</text><rect x='540' y='98' width='76' height='26' rx='5' fill='var(--paper)' stroke='var(--E)'/><text x='578' y='115' text-anchor='middle' font-size='9.5' fill='var(--E)'>FGF1↑</text><line x1='442' y1='111' x2='454' y2='111' stroke='var(--accent)' stroke-width='1.1' marker-end='url(#f53)'/><line x1='526' y1='111' x2='538' y2='111' stroke='var(--accent)' stroke-width='1.1' marker-end='url(#f53)'/><rect x='360' y='150' width='268' height='60' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/><text x='494' y='168' text-anchor='middle' font-size='10' fill='var(--D)' font-weight='600'>PC 肝細胞</text><text x='494' y='185' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>FGFR4 でFGF1を受ける</text><text x='494' y='200' text-anchor='middle' font-size='9.5' fill='var(--E)'>脂質蓄積 ⊣ 抑制</text><path d='M560,132 L540,148' stroke='var(--E)' stroke-width='1.4' marker-end='url(#f53)'/><rect x='14' y='72' width='330' height='60' rx='8' fill='var(--paper)' stroke='var(--D)' stroke-width='1.3'/><text x='179' y='90' text-anchor='middle' font-size='10' fill='var(--D)' font-weight='600'>早期MASLD：脂肪滴がPCから出現</text><circle cx='300' cy='112' r='8' fill='var(--D)' opacity='0.5'/><circle cx='282' cy='116' r='6' fill='var(--D)' opacity='0.45'/><circle cx='316' cy='108' r='5' fill='var(--D)' opacity='0.4'/><text x='120' y='116' font-size='9' fill='var(--ink-soft)'>ORO / BODIPY×GS</text><rect x='14' y='150' width='330' height='60' rx='8' fill='var(--paper)' stroke='var(--H)' stroke-width='1.5'/><text x='179' y='170' text-anchor='middle' font-size='10' fill='var(--H)' font-weight='600'>治療：レチノイン酸 / ビタミンA</text><text x='179' y='187' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>LSECのFGF1↑→脂肪化を軽減</text><text x='179' y='202' text-anchor='middle' font-size='9' fill='var(--H)'>食事ビタミンA ↑ ⇔ MASLDリスク ↓</text><path d='M344,180 L358,180' stroke='var(--H)' stroke-width='1.4' marker-end='url(#f53h)'/></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m53' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：ゾーン別脂肪化 → PC/PP LSEC分取オミクス → FGF1/RA操作 → ヒト相関</text><rect x='12' y='40' width='150' height='54' rx='7' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.4'/><text x='87' y='60' text-anchor='middle' font-size='9.5' fill='var(--D)' font-weight='600'>MASLDモデル/検体</text><text x='87' y='76' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>食餌・加齢・座位</text><text x='87' y='88' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ヒト肝＋マウス</text><rect x='12' y='106' width='150' height='54' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='87' y='126' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>ゾーン別脂肪化</text><text x='87' y='142' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>H&amp;E・ORO・BODIPY×GS</text><text x='87' y='154' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>→PC優位を確認</text><path d='M162,67 C182,67 184,120 200,124' fill='none' stroke='var(--accent)' marker-end='url(#m53)'/><path d='M162,133 L200,133' stroke='var(--accent)' marker-end='url(#m53)'/><rect x='203' y='106' width='156' height='54' rx='7' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='281' y='126' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>PC/PP LSEC 分取</text><text x='281' y='142' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>c-Kit免疫磁気ビーズ</text><text x='281' y='154' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>RNA-seq/マルチオミクス</text><rect x='203' y='40' width='156' height='54' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='281' y='60' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>機能操作</text><text x='281' y='76' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>c-Kit / RXRG / FGF1</text><text x='281' y='88' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>gain/loss</text><path d='M281,106 L281,96' stroke='var(--accent)' marker-end='url(#m53)'/><rect x='400' y='40' width='148' height='54' rx='7' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='474' y='60' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>RA / ビタミンA 投与</text><text x='474' y='76' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>LSECのFGF1↑</text><text x='474' y='88' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>抗脂肪化を評価</text><rect x='400' y='106' width='148' height='54' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='474' y='126' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>ヒト食事ビタミンA</text><text x='474' y='142' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>〜MASLDリスク(NHANES)</text><text x='474' y='154' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>逆相関</text><path d='M359,120 C378,120 384,70 398,66' fill='none' stroke='var(--accent)' marker-end='url(#m53)'/><path d='M359,133 L398,131' stroke='var(--accent)' marker-end='url(#m53)'/><rect x='560' y='64' width='72' height='90' rx='7' fill='var(--paper)' stroke='var(--E)' stroke-width='1.5'/><text x='596' y='98' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>脂肪化</text><text x='596' y='114' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>FGF1/RA↓</text><path d='M548,66 C554,66 556,96 558,102' fill='none' stroke='var(--accent)' marker-end='url(#m53)'/><path d='M548,131 L558,120' stroke='var(--accent)' marker-end='url(#m53)'/><text x='320' y='210' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>読み出し：ゾーン別脂肪滴・PC/PP LSEC発現・FGF1/FGFR4（阻害剤）・食事ビタミンA相関</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("53", [{ic:"endothelial",cap:"PC LSEC：c-Kit/RXRGでFGF1を分泌"}, {ic:"hepatocyte",cap:"肝細胞：FGFR4でFGF1を受け脂肪化を抑制"}, {ic:"liver",cap:"zonation：脂肪化はPC(中心静脈周囲)から点火"}, {ic:"drug",cap:"レチノイン酸/ビタミンAでFGF1軸を増強"}, {ic:"human",cap:"食事ビタミンA↑ ⇔ MASLDリスク↓"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 53 Fang/Wang Sci Adv 2026: ヒト/マウスMASLD+ゾーン別脂肪化染色+c-Kit磁気ビーズ分取LSEC RNA-seq(+sc/snRNA・空間TX)+内皮KO・LSEC移入・rFGF1+RA/ビタミンA+NHANES */
LP.methods("53", ["mouse","human","crispr","invitro","scrna","spatial","rnaseq","chipseq","qpcr","wb","elisa","imaging","drug"]);

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
      {color:"H",t:3200,cap:"④ レチノイン酸(ビタミンA活性体)はRXRのリガンドとしてLSECのFGF1発現を高め、脂肪化を軽減する。",run(){
        K.show(["ra53"]);
        K.T(()=>{K.flow(220,160,470,150,"var(--H)",{n:3,dur:1.2,loop:2});},500);
        K.T(()=>{K.pulse("rxrg53");K.pulse("fgf53");},1700);
        K.T(()=>{K.attr("stea53","opacity","0.2");},2400);
      }},
    ];
  }
});
