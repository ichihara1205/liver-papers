/* ============================================================
   №10 · Nature Genetics 2026 · Boesch M, Anak S, El Abyad D, Ostyn T, Antoranz A, My Van T, ..., Tinia…
   GPNMB+マクロファージとIL32産生肝細胞がMASH進行を駆動（ヒト統合マルチオミクス）
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"10",
    added:"2026-06-01",
    title:"GPNMB+マクロファージとIL32産生肝細胞がMASH進行を駆動（ヒト統合マルチオミクス）",
    authors:"Boesch M, Anak S, El Abyad D, Ostyn T, Antoranz A, My Van T, ..., Tiniakos D, Anstee QM, van der Merwe S, Govaere O",
    journal:"Nature Genetics",
    year:2026,
    vol:"58(6): 1295–1307",
    doi:"10.1038/s41588-026-02600-3",
    url:"https://www.nature.com/articles/s41588-026-02600-3",
    primary:"C",
    tags:["C","G","D"],
    approach:"ヒト試料の統合マルチオミクス（snRNA-seq＋GeoMx/CosMx空間TX＋COMET/MILAN空間プロテオミクス）＋PCLS/THP-1 ex vivo機能解析",
    struct:{
      model:"ヒト組織＋ex vivo",
      cells:["KC（常在マクロファージ）","GPNMB+ MetMac","単球","肝細胞（バルーニング）","T細胞"],
      triggers:["脂質負荷（オレイン酸/パルミチン酸）","肝細胞由来IL32","LPS（比較条件）"],
      steatosis:"○", inflammation:"○", fibrosis:"△",
      readout:["GPNMB+マクロファージ割合（疾患活動性・病期で層別化）","HLA-DR（抗原提示能）","貪食/エンドリソソーム分解活性","IL1B↑・IL10↓（炎症性シフト）"],
      ignite:"常在KC（MARCO+CD5L+）が枯渇し、GPNMB+の代謝適応型マクロファージ（MetMac; LPL/FABP5高）が門脈域・実質に蓄積。バルーニング肝細胞が分泌するIL32がGPNMB+MΦの貪食能とIL1B優位の炎症性表現型を駆動し、MASH病期の進行と相関する（IL32の因果的役割はex vivo/THP-1までの検証）。",
      params:[{name:"局所脂質・IL32濃度 → KC→MetMac(GPNMB+)状態遷移確率",note:"snRNA-seqで骨髄系細胞中のGPNMB+割合が非MASH（MASL＋正常）5.7%→MASH 12%へ増加"},{name:"IL32刺激 → GPNMB+MΦの貪食速度・IL1B/IL10比",note:"THP-1でIL32が脂質取込・IL1B↑、IL10↓を誘導"},{name:"空間文脈（門脈域 vs 実質）→ マクロファージ表現型分岐",note:"門脈域=未成熟（単球様）、実質SH域=代謝（LPL/MSR1等）優位"}],
      todos:["共培養でKC→GPNMB+MetMac様への置換（MARCO↓/GPNMB・LPL・FABP5↑）が脂質負荷で起こるかをモニタ","肝細胞IL32添加でマクロファージの貪食・IL1B/IL10をリードアウトに（セカンドヒットの新候補）","ABMにKC枯渇→単球由来MΦ補充→GPNMB+状態遷移を実装し、空間（門脈 vs 中心）で表現型を分岐させる"]
    },
    figure:"<svg viewBox='0 0 640 300' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar10' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--ink-soft)'/></marker><marker id='ar10c' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--C)'/></marker><marker id='ar10d' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--D)'/></marker></defs><text x='12' y='16' font-size='11' fill='var(--ink-soft)'>KC枯渇 → GPNMB+ MetMac 蓄積、IL32+肝細胞が貪食・炎症性表現型を駆動</text><rect x='8' y='30' width='126' height='50' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.5'/><text x='71' y='51' text-anchor='middle' font-size='12' fill='var(--C)'>常在KC</text><text x='71' y='68' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>MARCO+ CD5L+ → 枯渇↓</text><line x1='134' y1='55' x2='176' y2='55' stroke='var(--ink-soft)' marker-end='url(#ar10)'/><text x='155' y='49' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>進行</text><rect x='178' y='28' width='150' height='54' rx='7' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.8'/><text x='253' y='48' text-anchor='middle' font-size='12' fill='var(--C)'>GPNMB+ MetMac ↑</text><text x='253' y='64' text-anchor='middle' font-size='9.5' fill='var(--D)'>LPL / FABP5 / HS3ST2</text><text x='253' y='77' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>門脈域＋実質に蓄積</text><rect x='8' y='120' width='150' height='56' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='83' y='140' text-anchor='middle' font-size='11.5' fill='var(--B)'>バルーニング肝細胞</text><text x='83' y='156' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>AKR1B10+ / p62+</text><text x='83' y='170' text-anchor='middle' font-size='10.5' fill='var(--D)'>IL32 ↑ 分泌</text><path d='M120,120 C150,104 175,92 230,84' fill='none' stroke='var(--D)' marker-end='url(#ar10d)'/><text x='165' y='106' font-size='9.5' fill='var(--D)'>IL32</text><rect x='372' y='28' width='126' height='54' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.5'/><text x='435' y='48' text-anchor='middle' font-size='11' fill='var(--C)'>貪食 ↑ / HLA-DR ↑</text><text x='435' y='65' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>脂質クリアランス</text><text x='435' y='77' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>抗原提示能</text><line x1='328' y1='55' x2='370' y2='55' stroke='var(--C)' marker-end='url(#ar10c)'/><rect x='372' y='100' width='126' height='52' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.8'/><text x='435' y='121' text-anchor='middle' font-size='11.5' fill='var(--C)'>炎症性シフト</text><text x='435' y='138' text-anchor='middle' font-size='10' fill='var(--C)'>IL1B ↑ / IL10 ↓</text><path d='M435,82 L435,98' stroke='var(--C)' marker-end='url(#ar10c)'/><rect x='524' y='62' width='108' height='62' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='2'/><text x='578' y='86' text-anchor='middle' font-size='12' fill='var(--B)'>MASH 進行</text><text x='578' y='104' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>病期と相関</text><text x='578' y='117' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>（因果は未実証）</text><path d='M498,90 C508,90 514,90 522,90' fill='none' stroke='var(--C)' marker-end='url(#ar10c)'/><path d='M498,126 C508,135 514,118 522,108' fill='none' stroke='var(--C)' marker-end='url(#ar10c)'/><rect x='80' y='210' width='480' height='44' rx='8' fill='var(--paper)' stroke='var(--G)' stroke-width='1.5'/><text x='320' y='231' text-anchor='middle' font-size='11.5' fill='var(--G)'>マーカー（GPNMB/LPL/FABP5/HLA-DR）で疾患活動性・病期を層別化</text><text x='320' y='248' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>独立コホートで再現</text><text x='12' y='286' font-size='10.5' fill='var(--C)'>★ KCは「減って置換される」— 自系のKCも脂質負荷でGPNMB+代謝適応型へ移行しうる（生存モニタ要）</text></svg>",
    method_figure:"<svg viewBox='0 0 640 250' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m10' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='m10c' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--C)'/></marker></defs><text x='14' y='17' font-size='11.5' fill='var(--ink-soft)'>ヒトMASLD spectrum試料 → 3層の空間マルチオミクス + ex vivo機能検証</text><rect x='8' y='30' width='150' height='58' rx='7' fill='var(--paper)' stroke='var(--ink-soft)' stroke-width='1.5'/><text x='83' y='50' text-anchor='middle' font-size='11' fill='var(--ink)'>ヒト肝生検</text><text x='83' y='66' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>lean/obese/MASL/MASH</text><text x='83' y='80' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>独立コホート複数</text><rect x='208' y='24' width='180' height='34' rx='6' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/><text x='298' y='45' text-anchor='middle' font-size='10.5' fill='var(--G)'>snRNA-seq（17.6万核）</text><rect x='208' y='64' width='180' height='34' rx='6' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/><text x='298' y='85' text-anchor='middle' font-size='10' fill='var(--G)'>GeoMx / CosMx 空間TX</text><rect x='208' y='104' width='180' height='34' rx='6' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/><text x='298' y='125' text-anchor='middle' font-size='10' fill='var(--G)'>COMET/MILAN 空間プロテオ</text><path d='M158,52 C182,46 184,41 206,41' fill='none' stroke='var(--accent)' marker-end='url(#m10)'/><path d='M158,60 C182,72 184,81 206,81' fill='none' stroke='var(--accent)' marker-end='url(#m10)'/><path d='M158,70 C182,104 184,121 206,121' fill='none' stroke='var(--accent)' marker-end='url(#m10)'/><rect x='208' y='150' width='180' height='40' rx='6' fill='var(--paper)' stroke='var(--C)' stroke-width='1.6'/><text x='298' y='168' text-anchor='middle' font-size='10' fill='var(--C)'>ex vivo: PCLS（脂質負荷）</text><text x='298' y='183' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>+ THP-1（IL32/LPS刺激）</text><path d='M158,78 C182,140 184,168 206,170' fill='none' stroke='var(--accent)' stroke-dasharray='3 3' marker-end='url(#m10)'/><rect x='430' y='44' width='202' height='62' rx='8' fill='var(--paper)' stroke='var(--C)' stroke-width='1.8'/><text x='531' y='66' text-anchor='middle' font-size='11' fill='var(--C)'>GPNMB+ MetMac 同定</text><text x='531' y='83' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>KC枯渇 / 門脈域蓄積</text><text x='531' y='97' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>HLA-DR+ 抗原提示</text><path d='M388,80 C408,80 410,75 428,75' fill='none' stroke='var(--C)' marker-end='url(#m10c)'/><rect x='430' y='120' width='202' height='62' rx='8' fill='var(--paper)' stroke='var(--D)' stroke-width='1.6'/><text x='531' y='142' text-anchor='middle' font-size='11' fill='var(--D)'>IL32の機能検証</text><text x='531' y='159' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>THP-1: 貪食↑・IL1B↑/IL10↓</text><text x='531' y='173' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>肝細胞→MΦ クロストーク</text><path d='M388,170 C408,170 410,155 428,151' fill='none' stroke='var(--accent)' marker-end='url(#m10)'/></svg>",
    abstract_ja:"MASLDは人口の30%超に及ぶが、steatosisからMASHへ進む過程でのマクロファージ組成の動態は不明確だった。本研究はヒト試料に単一核トランスクリプトーム（snRNA-seq）・空間マルチオミクス・空間プロテオミクスを統合し、MASLDスペクトルにわたる肝マクロファージの変遷を描いた。解析の結果、常在Kupffer細胞（MARCO+CD5L+）が進行とともに減少し、多様で表現型の異なるマクロファージ亜集団が出現することが分かった。とくにMASHへの進行は、抗原提示能と貪食能をもつGPNMB+マクロファージ（代謝適応型MetMac；LPL・FABP5高）の蓄積で特徴づけられ、これはIL32を産生する（バルーニング）肝細胞に支えられていた。GPNMB+マクロファージは空間文脈と病期に応じて代謝・炎症性の適応的表現型を示し、門脈域へも浸潤した。同定したマーカーは独立コホートで疾患活動性・病期による患者層別化を可能にした。precision-cut肝切片（PCLS）では脂質負荷でGPNMB+細胞が凝集・肥大してセロイドマクロファージ形成が増え、THP-1を用いた検証ではIL32が脂質粒子の貪食取込みを高め、PA存在下でIL1Bを増やしIL10を減らす炎症性応答を促すことが示された。",
    background:"MASHでは常在KCが減り単球由来マクロファージに置換されることが知られるが、steatosis→MASHの連続体でマクロファージの組成・表現型・空間配置がどう変わるか、そしてそれが肝細胞などの微小環境とどう連結するかは未解明だった。LAM/TREM2系マクロファージの代謝的役割（#01）や、OxPL–KC鉄–フェロトーシスによるKC脱落（#02）は示されてきたが、ヒト組織で空間・病期解像度をもってマクロファージの異質性と肝細胞シグナルの連関を捉えた研究は乏しかった。",
    achievements:[
      "snRNA-seq（17.6万核）でMASLDの骨髄系8亜集団を解像し、常在KC（MARCO/CD5L）の減少とGPNMB+代謝活性型マクロファージ（MetMac; LPL/FABP5/HS3ST2）の増加を定量（骨髄系細胞中のGPNMB+割合 非MASH 5.7%→MASH 12%）。",
      "GeoMx空間TXで、門脈域マクロファージ（未成熟・単球様）と実質steatohepatitis域マクロファージ（MSR1/LPL/FABP5代謝優位）の空間依存的な表現型分岐を提示。",
      "CosMx空間分子イメージングでGPNMB+細胞が実質・門脈域の双方に存在することを示し、COMET・MILANの多重免疫染色（空間プロテオミクス）でGPNMB+/HLA-DR+マクロファージがMASHで増加することをタンパクレベルで確認（門脈域・胆管近傍にも存在）。",
      "IL32がバルーニング肝細胞（AKR1B10+）の多い領域・肝細胞で発現上昇し、THP-1ではIL32が脂質貪食・MSR1/GPNMB小胞形成を高め、PA誘導のIL1B応答を増強しIL10を低下させることを機能検証（PCLSでは脂質負荷でGPNMB+細胞の凝集・肥大を観察）。",
      "マクロファージマーカーセットで独立コホートの疾患活動性・病期を層別化できることを示した。"
    ],
    limitations:[
      "ヒト試料の横断的・記述的解析が中心で、GPNMB+マクロファージやIL32軸の因果はex vivo（PCLS/THP-1）に依存し、in vivoでの介入実証はない。",
      "snRNA-seqの線維化病期はF1/F2が中心で、進行線維化（F3–4）の動態は空間解析・プロテオミクスの別コホートに依存。",
      "GPNMB+マクロファージとHSC活性化・線維化形成を直接結ぶ機構（→筋線維芽細胞化）は示されておらず、線維化点火の因果は未確立（fibrosisは相関レベル）。",
      "THP-1は単球様細胞株でヒト初代KC/単球由来マクロファージの完全な代替ではなく、IL32の受容体・下流経路も未特定。"
    ],
    connection:[
      "KCの『減って置換される』動態の最新ヒト証拠：自系にiPS-KCを入れて脂質負荷をかけると、KC（MARCO+）が減りGPNMB+代謝適応型（LPL/FABP5↑）へ移行しうる。#02（KCフェロトーシスで脱落）と合わせ、共培養でKC生存・表現型遷移をモニタする必要性を裏づける。",
      "新しいセカンドヒット候補＝肝細胞由来IL32：本論文はIL32がマクロファージの貪食・IL1B↑/IL10↓を駆動すると示した。自系で『肝細胞IL32 → KC/MΦ炎症性極性化』を点火刺激（LPSの代替/上乗せ）として試せる。リードアウトはGPNMB・HLA-DR・IL1B/IL10比。",
      "空間文脈で表現型が分岐する設計指針：門脈域=未成熟（単球様）、steatohepatitis実質域=代謝優位という分岐は、酸素・脂質勾配に対応しうる。酸素透過膜で勾配を作る自系で『マクロファージ表現型のzonation』を再現できるか検証可能。",
      "ABM実装：KCエージェントに『MARCO+常在 →(脂質・IL32)→ GPNMB+ MetMac』の状態遷移と、空間（門脈 vs 中心）依存の表現型分岐ルールを追加。出力としてIL1B/IL10比・HLA-DRを炎症スコアに、貪食速度を脂質クリアランスに割り当てる。",
      "既収録との接続：#01（LAM–MITF–FAOで脂質処理）とは別系統のGPNMB+/IL32軸を提示し、マクロファージ代謝適応の描像を補完。#04（M1-iMAC→TNFα→MASLD発症）の上流に『肝細胞IL32→MΦ炎症化』を、#02（KC脱落）の帰結に『GPNMB+単球由来MΦの台頭』を接続でき、KC→炎症→（#03 ATF4 / #07 ACSS2）HSC活性化→線維化という縦のカスケードの免疫側を強化する。"
    ],
    glossary:[
      {term:"GPNMB",full:"glycoprotein NMB (osteoactivin)",desc:"MASH進行で増える代謝適応型マクロファージ（MetMac）の代表マーカー。LAMシグネチャを示すのは一部のみで従来のLAM/SAMとは区別される。貪食・抗原提示能と関連"},
      {term:"IL32",full:"interleukin-32",desc:"バルーニング肝細胞の多い領域で発現が高いサイトカイン。THP-1で脂質貪食能を高め、PA存在下でIL1B優位の炎症性応答を促す"},
      {term:"MetMac",full:"metabolically active macrophage",desc:"GPNMB/LPL等を高発現する代謝適応型マクロファージ。常在KCの減少と並行してMASHで増加"},
      {term:"snRNA-seq",full:"single-nucleus RNA sequencing",desc:"凍結組織の核から発現を測る単一核RNA-seq。固定/凍結ヒト肝に有利"},
      {term:"HLA-DR",full:"human leukocyte antigen-DR (MHC class II)",desc:"MHCクラスII。GPNMB+マクロファージの抗原提示能の指標"},
      {term:"SPP1",full:"secreted phosphoprotein 1 (osteopontin)",desc:"線維化と関連するLAM/SAM系マーカー（オステオポンチン）。GPNMB+SPP1+細胞は少数で、MILANでSPP1+マクロファージの割合はMASL→MASHで変化しなかった"},
      {term:"AKR1B10",full:"aldo-keto reductase family 1 member B10",desc:"レチノール代謝酵素。バルーニング肝細胞のマーカーでIL32高発現域と共局在"},
      {term:"PCLS",full:"precision-cut liver slices",desc:"ヒト肝組織を薄切し培養するex vivoモデル。GPNMB+MΦの機能解析に使用"},
      {term:"MARCO",full:"macrophage receptor with collagenous structure",desc:"常在クッパー細胞のマーカー兼スカベンジャー受容体。MASH進行に伴い発現が低下し、KC枯渇の指標となる"},
      {term:"CD5L",full:"CD5 molecule-like (AIM)",desc:"常在クッパー細胞のマーカー。脂質代謝・細胞生存制御に関与し、MARCOとともにKC同定に用いる"},
      {term:"TREM2",full:"triggering receptor expressed on myeloid cells 2",desc:"脂質関連/MASH関連マクロファージ（LAM）の代表マーカー。脂質取込・組織修復に関与"},
      {term:"LPL",full:"lipoprotein lipase",desc:"脂質分解酵素。GPNMB+ MetMacが高発現し、脂質取込・代謝適応を示すマーカー"},
      {term:"FABP5",full:"fatty acid binding protein 5",desc:"脂肪酸結合タンパク。MetMacの脂質処理を担う代謝適応マーカー"},
      {term:"MSR1",full:"macrophage scavenger receptor 1 (CD204)",desc:"スカベンジャー受容体。実質域の代謝型マクロファージで高発現し、脂質貪食に関与"},
      {term:"THP-1",full:"THP-1 human monocytic cell line",desc:"ヒト単球系株化細胞。マクロファージ様へ分化させ、IL32応答（貪食・IL1B/IL10）を検証する"},
      {term:"IL1B",full:"interleukin-1 beta",desc:"炎症性サイトカイン。GPNMB+MΦの炎症性表現型の指標で、IL32刺激により上昇"},
      {term:"IL10",full:"interleukin-10",desc:"抗炎症性サイトカイン。IL32刺激で低下し、IL1B優位の炎症性シフトを示す"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("10", [{ic:"human",cap:"ヒトMASLD spectrum"},{ic:"macrophage",cap:"GPNMB+ MetMac"},{ic:"hepatocyte",cap:"IL32+肝細胞"},{ic:"omics",cap:"空間マルチオミクス"},{ic:"dish",cap:"PCLS/THP-1"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 10 Boesch Nat Genet 2026: ヒトsnRNA+空間TX(GeoMx/CosMx)+多重免疫染色(COMET/MILAN)+bulk RNA-seq/血清プロテオミクス+PCLS/THP-1(CRISPR KO含む)+IHC/IF */
LP.methods("10", ["human","scrna","spatial","rnaseq","proteomics","invitro","crispr","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №10 GPNMB+ MetMac と IL32産生肝細胞がMASHを駆動 ===== */
LP.cinema("10", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("10")}${GLYPH.arrow("10","var(--C)")}</defs>`+GLYPH.title("常在KC枯渇→GPNMB+ MetMac蓄積→肝細胞IL32が炎症性表現型を駆動")
    +GLYPH.hep("hep",30,70,1.35,"肝細胞")
    +GLYPH.tag("balloon",120,60,"バルーニング↑","var(--D)",110,true)
    +GLYPH.mac("kc",340,250,"常在KC","#5d6470")
    +`<g id="met" class="fade">`+GLYPH.mac("metc",470,250,"GPNMB+ MetMac","#9c4f6c")+`</g>`
    +GLYPH.cytokine("il32",200,200,"IL32","var(--C)",true)
    +GLYPH.tag("shift",430,170,"IL1B↑ / IL10↓","var(--C)",118,true)
    +GLYPH.stellate("hsc",610,320,"肝星細胞")+GLYPH.layer("collagen"),
  build(K){
    const dp=[[95,130],[140,150],[110,180],[150,200],[120,225]];
    return [
      {color:"E",t:2200,cap:"健常な肝。常在クッパー細胞（MARCO+CD5L+ KC）が定常状態にある。",run(){}},
      {color:"D",t:3000,cap:"① 脂質負荷（オレイン酸/パルミチン酸）で肝細胞が脂肪化・バルーニングを起こし、常在KC（MARCO+CD5L+）が枯渇しはじめる。",run(){
        addDrops(K,"hepDrops",dp,"lip10"); K.show(["balloon"]); K.attr("kc","opacity","0.5");
      }},
      {color:"C",t:3000,cap:"② 常在KCが脱落した場に、代謝適応型のGPNMB+マクロファージ（MetMac; LPL/FABP5高）が門脈域・実質に蓄積する。",run(){
        K.attr("kc","opacity","0.18"); K.show(["met"]); K.pulse("metc");
      }},
      {color:"C",t:4200,cap:"③ バルーニング肝細胞が分泌するIL32がGPNMB+ MΦに作用し、貪食能の亢進とIL1B優位（IL10低下）の炎症性表現型へとシフトさせる。",run(){
        K.show(["il32"]); K.flow(205,200,460,250,"var(--C)",{dur:1.3,loop:3});
        K.T(()=>{K.show(["shift"]); radiate(K,470,250,"var(--C)");},1500);
        K.T(()=>radiate(K,470,250,"var(--C)"),2900);
      }},
      {color:"B",t:3000,cap:"④ GPNMB+ MΦの蓄積はMASHの病期進行と相関する。HSC活性化・線維化巣形成へのつながりは本論文では未実証で、ここは想定の描写。",run(){
        K.flow(450,250,610,320,"var(--B)",{dur:1.2,loop:2});
        K.T(()=>{K.morph("hscShape",GLYPH.SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化HSC");},1000);
        K.T(()=>K.draw("collagen",GLYPH.collagenAt(610,375),{len:150}),1700);
      }},
    ];
  }
});
