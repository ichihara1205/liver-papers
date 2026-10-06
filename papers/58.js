/* ============================================================
   №58 · Nat Genet 2026 · Zhang L, Wang Y, Wei K, …, Liu S, Hou J
   脾臓で再プログラムされたTRNP1+ CD8 T細胞がINSR-αを分泌してHSCを活性化し肝線維化を悪化させる(脾-肝軸)
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"58", primary:"C",
    title:"脾臓で代謝・エピジェネティックに再プログラムされたTRNP1+ CD8 T細胞がINSR-αを出してHSCを活性化し肝線維化を悪化させる",
    authors:"Zhang L, Wang Y, Wei K, Nie W, Feng Y, …, Liu Y, Liu S, Hou J",
    journal:"Nat Genet",
    year:2026,
    vol:"58(8):1891-1905",
    doi:"10.1038/s41588-026-02660-5",
    url:"https://doi.org/10.1038/s41588-026-02660-5",
    tags:["C","B","G"],
    approach:"ヒト（一般住民の横断研究4,537名、末梢血CD8 T細胞は健常43名 vs MASLD 81名、エピゲノムは健常3名 vs MASH 3名）＋ マウスMASLD/MASH（主モデルはMCDHFD、検証にCDAHFD。HFD・WDも脾重量は増えるがTRNP1誘導は弱い）の脾臓scRNA-seq/scTCR-seq ＋ 脾CD8 T細胞のエピゲノム（Hi-Cで TAD・エンハンサー-プロモーターループ、CUT&Tag-seqでCTCF/H3K27ac/H3K27me3/H3K9me3/TRNP1、ATAC-seq、全ゲノムバイサルファイトシーケンス、RNA-seq。CUT&RUN-qPCRで検証）＋ CD8特異的Trnp1ノックアウト・ジフテリア毒素(DT)による除去系統・脾臓摘出・TRNP1+ CD8 T細胞の養子移入 ＋ 初代静止期HSCとのtranswell共培養・組換えINSR-α・HSCのINSR shRNA、SomaScan血漿プロテオミクス＋メンデルランダム化による候補抽出 ＋ INSR中和抗体(BE0338)とersodetug(RZ358)という2種のINSR標的抗体によるin vivo阻害",
    added:"2026-10-06",
    abstract_ja:"MASLD、とくに重症型のMASHは肝線維化へ進み、肝硬変や肝がんに至る。しかしMASLD/MASH進行における脾臓と肝臓のクロストークはよく分かっていなかった。本研究は、MASLD患者で脾臓が腫大していることを見いだし、MASLD/MASHのマウスモデルと患者の脾臓に、誘導されたTRNP1陽性のCD8 T細胞が存在することを同定した。これらの細胞はINSR-α（インスリン受容体のα鎖）を分泌することで線維化促進的な性質を示した。機序としては、メチル基の供給不足（メチオニン・コリン欠乏）を背景に、DNAの脱メチル化とH3K27me3の脱メチル化（抑制の解除）、増加したH3K27ac、そして強まったエンハンサー-プロモーター接触が協調して、クロマチンのTAD（トポロジカルに会合するドメイン）を空間的に再編成し、TRNP1プロモーターの抑制を解除して脾CD8 T細胞で転写因子TRNP1の発現を立ち上げる。立ち上がったTRNP1はFURINとCTSD（カテプシンD）の発現を転写活性化し、INSR-αの成熟とエクトドメイン・シェディング（膜からの切り出し）を促して分泌させ、これが肝星細胞（HSC）膜上のINSRに結合してERK–p90RSKシグナルを介しHSCを活性化する。INSR中和抗体、および低血糖症治療薬として開発されたINSR標的抗体ersodetugのいずれをin vivoに投与しても、MASLD/MASH誘発の肝線維化が軽減した。本研究は線維化促進性をもつ脾TRNP1+ CD8 T細胞を明らかにし、抗線維化の新たな戦略を示唆する。",
    background:"MASHの線維化は肝内のHSC・マクロファージ・肝細胞のクロストークで語られることが多いが、肝外臓器の寄与は見落とされがちだった。脾臓は免疫細胞の貯蔵・教育の場で、肝疾患で腫大することが経験的に知られていたが、脾臓の免疫細胞がどんな分子で肝線維化を駆動するのか——脾-肝軸の実体——は不明だった。肝内ではCXCR6+ CD8 T細胞が肝障害を起こす一方、メモリー型CD8 T細胞は活性化HSCのアポトーシスを誘導して線維化を抑えるなど、CD8 T細胞サブセットの役割は多様だが、脾臓のCD8 T細胞がMASLD/MASHでエピジェネティックに再プログラムされて線維化促進因子を出す、という経路は知られていなかった。またMASLD/MASHは高カロリー・高脂肪に加え、メチル基の原料となるメチオニン・コリンの不足した食事とも関連するが、メチル基の供給不足が免疫細胞のエピゲノムをどう変えるかも不明だった。",
    achievements:[
      "**MASLD/MASHで脾臓が腫大し（4,537名の横断研究で脾腫とMASLD重症度が相関）、誘導型のTRNP1+ CD8 T細胞が脾臓に出現**することを、マウスモデルとヒト患者で同定（脾-肝軸の発見）。",
      "これらの細胞が**INSR-α（インスリン受容体α鎖）を分泌してHSCを活性化**する線維化促進性を持つことを示した（HSC膜のINSRに結合しERK→p90RSKを介する。肝細胞障害・肝炎症やTGF-βには依存しない）。",
      "機序を同定：**メチル基の供給不足（メチオニン欠乏培地でTRNP1が誘導され、メチル供給で消失）→DNA・H3K27me3の脱メチル化＋H3K27ac増加＋エンハンサー-プロモーター接触強化→TADを空間再編→TRNP1発現→FURINがpro-INSRを成熟、CTSDがエクトドメイン・シェディング→INSR-α分泌**。",
      "**INSR中和抗体(BE0338)と、低血糖症治療用に開発されたINSR標的モノクローナル抗体ersodetug(RZ358)の2剤のいずれもin vivo投与でMASLD/MASH誘発の肝線維化が軽減**。ersodetugはTRNP1+ CD8 T細胞の移入で増悪した線維化も軽減——抗線維化の新戦略を提示。"
    ],
    limitations:[
      "主要な因果は**マウス**で、ヒトは脾腫・細胞同定・発現相関にとどまる（介入のヒト実証はこれから）。",
      "**なぜ肝のCD8 T細胞ではTRNP1が誘導されないのか**、脾臓の微小環境がTRNP1の誘導に寄与するか、またTRNP1が下流遺伝子の転写開始に使う**コファクターやRNAポリメラーゼ**は未解明（著者ら自身の挙げる限界。上流のきっかけ自体はメチル基不足と示されている）。",
      "INSR-αはインスリンシグナルに関わるが、**使用した用量では耐糖能や血清インスリンへの影響はわずか**だった。ただし**ヒトでの長期安全性**と至適用量は未確立で、さらなる検討が要る。",
      "脾臓摘出や養子移入でTRNP1+ CD8 T細胞の寄与は示されたが、**他の免疫サブセットとの相対的な寄与**は不明で、ヒトでのINSR-α遮断や脾摘などの**介入データもない**。"
    ],
    connection:[
      "**線維化点火に『肝外・免疫』の入力を足す発想**。自分の肝オープンオルガノイドは肝内4細胞が中心だが、本論文は脾由来CD8 T細胞のINSR-αがHSCを活性化すると示す。分泌因子INSR-αを外部入力として加え、HSC活性化の点火に使える（HSCの活性化はTGF-β非依存で、肝細胞障害を介さない点も利用できる）。",
      "**4細胞系への追加候補**：免疫の第2ヒットとしてKC(#02等)に加え、『INSR-α』という具体的リガンドでHSCを直接突く経路を試せる。『脂肪化は出るが線維化が出ない』系に、HSCを確実に活性化する分子ツールになる。",
      "**ABM実装**：『(外部)INSR-α濃度→HSC活性化確率→コラーゲン沈着』をパラクリン/全身入力のルールに。INSR中和抗体やersodetugで遮断する介入ルールも対にできる。脾側のTRNP1→FURIN/CTSD→INSR-α産生を『供給源モジュール』として別に持てる。",
      "**既収録との接続**：#50(LSEC-SEMA3G→NRP2でHSC活性化)・#52(ACSS2で肝細胞老化→炎症)・#57(セノリティクスで線維化退縮)と同じ『HSC活性化の多様な上流』像。手法面ではエピゲノム/TAD解析が#51(単一細胞アトラス)・#56(EasySCPの単一細胞プロテオミクスとHSSによるzonationの計算的推定)とマルチオミクスとして統合できる。"
    ],
    glossary:[
      {term:"TRNP1",full:"TMF1-regulated nuclear protein 1",desc:"脾CD8 T細胞でメチル基不足に伴うエピ再編により立ち上がる転写因子。FURIN/CTSDを誘導しINSR-α分泌を促す"},
      {term:"INSR-α",full:"insulin receptor alpha subunit",desc:"TRNP1+ CD8 T細胞が分泌する線維化促進因子。HSC膜のINSRに結合しERK→p90RSKでHSCを活性化する。INSR標的抗体での遮断が治療標的"},
      {term:"FURIN",full:"furin (paired basic amino acid cleaving enzyme)",desc:"プロタンパク質転換酵素。TRNP1に誘導され、pro-INSRをα鎖とβ鎖に切断して成熟させ、細胞膜への輸送を促す"},
      {term:"CTSD",full:"cathepsin D",desc:"アスパラギン酸プロテアーゼ。TRNP1に誘導され、膜上のINSRのエクトドメイン・シェディング（INSR-αの切り出し・分泌）を担う"},
      {term:"CD8 T cell",full:"CD8+ T cell",desc:"細胞傷害性T細胞。脾臓で再プログラムされ線維化促進性のTRNP1+サブセットになる"},
      {term:"H3K27ac",full:"histone H3 lysine 27 acetylation",desc:"活性型エンハンサー/プロモーターの印。増加がTRNP1発現の立ち上げに寄与"},
      {term:"H3K27me3",full:"histone H3 lysine 27 trimethylation",desc:"抑制性のヒストン修飾。MASLD/MASH脾CD8 T細胞で全体的に脱メチル化（低下）し、TRNP1プロモーターの抑制が解除される（H3K9me3は変化せず。H3K27メチル基転移酵素阻害薬EPZ6438でTRNP1上昇）"},
      {term:"TAD",full:"topologically associating domain",desc:"クロマチンが会合する空間ドメイン。再編でエンハンサー-プロモーター接触が変わる"},
      {term:"ersodetug",full:"ersodetug (RZ358, anti-INSR monoclonal antibody)",desc:"低血糖症の治療用に開発されたINSR標的モノクローナル抗体。INSR中和抗体(BE0338)とは別の薬剤で、どちらもin vivoで肝線維化を軽減した。使用用量では耐糖能への影響はわずか"}
    ],
    struct:{
      model:"in vivo",
      cells:["脾CD8 T細胞","HSC"],
      triggers:["メチル基不足(MCDHFD等)による脾CD8のエピ再プログラム","(分泌)INSR-α","(遮断)INSR中和抗体/ersodetug"],
      steatosis:"△", inflammation:"○", fibrosis:"○",
      readout:["脾腫/TRNP1+ CD8 T細胞比率","脾CD8のエピゲノム(H3K27ac/me3・TAD)","血中/組織INSR-α","肝のCOL1A1/αSMA・線維化面積"],
      ignite:"脾-肝軸：脾CD8のエピ再編→TRNP1→FURIN/CTSD→INSR-α分泌→HSC活性化。肝外からの線維化点火で、INSR標的抗体(中和抗体/ersodetug)が線維化を軽減する。この線維化促進作用は肝細胞障害や肝炎症に起因せず、HSC活性化もTGF-β非依存。",
      params:[
        {name:"(外部)INSR-α濃度 → HSC活性化確率",note:"脾由来の全身/パラクリン入力のルール"},
        {name:"TRNP1 → FURIN/CTSD → INSR-α産生速度",note:"脾側『供給源モジュール』として実装"}
      ],
      todos:[
        "INSR-αを外部入力として共培養に加えHSC活性化→線維化が点火するか検証",
        "INSR中和抗体/ersodetug型の遮断で退縮するか(介入ルール)を評価",
        "脾側TRNP1→FURIN/CTSD→INSR-α産生を供給源モジュールとしてABM化"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f58' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='f58h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>脾-肝軸：脾TRNP1+ CD8 T細胞のINSR-αがHSCを活性化→肝線維化</text><rect x='14' y='40' width='280' height='160' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.3' stroke-dasharray='5 3'/><text x='154' y='58' text-anchor='middle' font-size='10.5' fill='var(--C)' font-weight='600'>脾臓（MASLDで腫大）</text><rect x='26' y='70' width='120' height='54' rx='6' fill='var(--paper)' stroke='var(--G)'/><text x='86' y='88' text-anchor='middle' font-size='8.8' fill='var(--G)'>メチル不足→エピ再編</text><text x='86' y='102' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>DNA・H3K27me3脱メチル</text><text x='86' y='114' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>H3K27ac↑・TAD再編</text><rect x='158' y='70' width='124' height='54' rx='6' fill='var(--paper)' stroke='var(--C)'/><text x='220' y='86' text-anchor='middle' font-size='9' fill='var(--C)' font-weight='600'>TRNP1+ CD8 T</text><text x='220' y='100' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>TRNP1↑</text><text x='220' y='113' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>→FURIN/CTSD</text><path d='M146,97 L156,97' stroke='var(--accent)' marker-end='url(#f58)'/><rect x='88' y='140' width='170' height='46' rx='6' fill='var(--paper)' stroke='var(--B)'/><text x='173' y='158' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>INSR-α を成熟・分泌</text><text x='173' y='174' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>FURINで成熟/CTSDでシェディング</text><path d='M220,124 L190,138' stroke='var(--accent)' marker-end='url(#f58)'/><path d='M294,160 L330,150' stroke='var(--B)' stroke-width='1.5' marker-end='url(#f58)'/><text x='312' y='142' font-size='8' fill='var(--B)'>INSR-α（血中）</text><rect x='334' y='64' width='150' height='70' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='409' y='88' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>肝星細胞 (HSC)</text><text x='409' y='106' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>INSR-α→膜INSR→ERK/p90RSK</text><text x='409' y='122' text-anchor='middle' font-size='9.5' fill='var(--B)'>COL1A1/αSMA↑</text><rect x='334' y='146' width='150' height='40' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.3'/><text x='409' y='170' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>肝線維化</text><path d='M409,134 L409,144' stroke='var(--accent)' stroke-width='1.4' marker-end='url(#f58)'/><rect x='500' y='64' width='128' height='122' rx='8' fill='var(--paper)' stroke='var(--H)' stroke-width='1.6'/><text x='564' y='86' text-anchor='middle' font-size='10' fill='var(--H)' font-weight='600'>治療（別の2剤）</text><text x='564' y='106' text-anchor='middle' font-size='9' fill='var(--H)'>INSR中和抗体</text><text x='564' y='119' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>(BE0338)</text><text x='564' y='138' text-anchor='middle' font-size='9' fill='var(--H)'>ersodetug</text><text x='564' y='151' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>低血糖症用INSR抗体</text><text x='564' y='169' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→ いずれも線維化軽減</text><text x='564' y='181' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>(in vivo)</text><path d='M500,120 C492,120 486,110 484,104' fill='none' stroke='var(--H)' stroke-width='1.3' stroke-dasharray='4 3' marker-end='url(#f58h)'/><text x='496' y='100' font-size='11' fill='var(--H)'>⊣</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m58' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：脾腫→脾CD8のエピ解析→TRNP1/INSR-α機能検証→中和抗体</text><rect x='12' y='42' width='146' height='52' rx='7' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.4'/><text x='85' y='62' text-anchor='middle' font-size='9.5' fill='var(--C)' font-weight='600'>MASLD/MASH</text><text x='85' y='78' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ヒト4,537名＋マウス</text><text x='85' y='90' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>脾腫を確認</text><path d='M158,68 L188,68' stroke='var(--accent)' marker-end='url(#m58)'/><rect x='190' y='42' width='156' height='52' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='268' y='60' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>脾CD8 T のエピ解析</text><text x='268' y='76' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>scRNA-seq/RNA-seq/WGBS</text><text x='268' y='88' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>Hi-C/CUT&Tag/ATAC-seq</text><path d='M346,68 L376,68' stroke='var(--accent)' marker-end='url(#m58)'/><rect x='378' y='42' width='156' height='52' rx='7' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.4'/><text x='456' y='60' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>TRNP1+ CD8 を同定</text><text x='456' y='76' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TRNP1→FURIN/CTSD</text><text x='456' y='88' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>→INSR-α分泌</text><path d='M456,94 L456,108' stroke='var(--accent)' marker-end='url(#m58)'/><rect x='190' y='116' width='156' height='54' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.4'/><text x='268' y='136' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>機能検証</text><text x='268' y='152' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>INSR-α→HSC活性化</text><text x='268' y='164' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>transwell共培養・移入</text><path d='M378,120 C360,120 352,135 348,140' fill='none' stroke='var(--accent)' marker-end='url(#m58)'/><rect x='378' y='116' width='156' height='54' rx='7' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='456' y='136' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>INSR抗体2剤を投与</text><text x='456' y='152' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>BE0338 / ersodetug</text><text x='456' y='164' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>(in vivo)→線維化軽減</text><path d='M346,143 L376,143' stroke='var(--accent)' marker-end='url(#m58)'/><rect x='548' y='70' width='84' height='100' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='590' y='110' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>肝線維化</text><text x='590' y='128' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>MASH↑</text><text x='590' y='142' text-anchor='middle' font-size='8.5' fill='var(--H)'>中和↓</text><path d='M534,68 C542,68 546,96 548,104' fill='none' stroke='var(--accent)' marker-end='url(#m58)'/><path d='M534,143 L548,135' stroke='var(--accent)' marker-end='url(#m58)'/></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("58", [{ic:"human",cap:"MASLD/MASHで脾腫（ヒト＋マウス）"}, {ic:"macrophage",cap:"脾のTRNP1+ CD8 T細胞（エピ再編で誘導）"}, {ic:"stellate",cap:"分泌INSR-αでHSCを活性化"}, {ic:"omics",cap:"エピゲノム：H3K27ac/me3・TAD再編"}, {ic:"drug",cap:"ersodetug（INSR-α中和抗体）で線維化軽減"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 58 Zhang/Hou Nat Genet 2026: ヒト横断研究+末梢血CD8/マウスMASH(Cre-lox KO・DT除去・脾摘・養子移入)+脾CD8 scRNA-seq/RNA-seq+エピゲノム(Hi-C/CUT&Tag/ATAC/WGBS、ChIP-seqなし)+SomaScan血漿プロテオミクス+INSR抗体2種・EPZ6438・5-Aza投与+flow/ELISA/WB（CRISPRは未使用のため外した） */
LP.methods("58", ["mouse","human","invitro","drug","scrna","rnaseq","chipseq","proteomics","qpcr","wb","facs","elisa"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №58 脾CD8のエピ再編→TRNP1→FURIN/CTSD→INSR-α→HSC活性化→線維化、ersodetugで遮断 ===== */
LP.cinema("58", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("58",'var(--B)')}${GLYPH.arrow("58h",'var(--H)')}</defs>`
    +GLYPH.title("脾CD8 T細胞がエピ再編でTRNP1を立ち上げ、FURIN/CTSDでINSR-αを分泌→HSC活性化→肝線維化。INSR抗体で遮断")
    +`<rect x="40" y="80" width="300" height="230" rx="14" fill="none" stroke="var(--C)" stroke-width="2" stroke-dasharray="6 4"/>`
    +`<text x="60" y="104" font-size="10.5" fill="var(--C)">脾臓（MASLDで腫大）</text>`
    +GLYPH.mac("cd858",180,200,"CD8 T","var(--C)")
    +GLYPH.nucleus("nuc58",180,200,50,36,"核")
    +GLYPH.tf("trnp58",180,185,"TRNP1","var(--C)",true)
    +GLYPH.gene("fur58",120,250,"FURIN","var(--accent)",true)
    +GLYPH.gene("ctsd58",250,250,"CTSD","var(--accent)",true)
    +`<g id="insrOut58" class="fade"></g>`
    +GLYPH.receptor("hscr58",470,180,"HSC膜INSR","var(--B)")
    +GLYPH.stellate("hsc58",470,250,"肝星細胞")
    +GLYPH.layer("col58")
    +GLYPH.pill("erso58",560,110,"INSR抗体/ersodetug",150)
    +GLYPH.badge("fib58",610,300,"線維化","COL1A1↑","var(--B)"),
  build(K){
    const ins=[[300,210],[340,230],[320,255]];
    return [
      {color:"G",t:3200,cap:"① MASLD/MASHで脾臓が腫大。メチル基の供給不足で、脾のCD8 T細胞にDNAとH3K27me3の脱メチル化・H3K27ac増加・TAD再編というエピ再編が起こる。",run(){
        K.pulse("cd858");
        K.T(()=>{K.show(["trnp58"]);K.pulse("trnp58");},1200);
      }},
      {color:"C",t:3800,cap:"② TRNP1プロモーターの抑制が解け、立ち上がった転写因子TRNP1がFURINとCTSDを誘導する。",run(){
        K.flow(180,185,120,240,"var(--C)",{n:2,dur:1.1,loop:2});
        K.flow(180,185,250,240,"var(--C)",{n:2,dur:1.1,loop:2});
        K.T(()=>{K.show(["fur58","ctsd58"]);K.pulse("fur58");K.pulse("ctsd58");},1400);
      }},
      {color:"B",t:4000,cap:"③ FURINがpro-INSRをα鎖とβ鎖に切断して成熟させ、CTSDが膜上INSRのα鎖部分をシェディングして分泌する。血中のINSR-αがHSC膜のINSRに結合し、ERK→p90RSKを介してHSCを活性化し線維化が進む。",run(){
        K.show(["insrOut58"]);const g=K.$("insrOut58");
        ins.forEach((p,i)=>K.T(()=>{g.insertAdjacentHTML("beforeend",GLYPH.metab("i"+i,p[0],p[1],i===1?"INSR-α":"","var(--B)"));K.flow(p[0],p[1],465,180,"var(--B)",{n:1,dur:1.2,loop:2});},i*260));
        K.T(()=>{K.pulse("hscr58");K.morph("hsc58Shape",GLYPH.SPINDLE);K.attr("hsc58Shape","fill","#b0432f");K.text("hsc58Cap","活性化HSC");},2000);
        K.T(()=>{K.draw("col58",GLYPH.collagenAt(470,310),{len:150});K.show(["fib58"]);},3000);
      }},
      {color:"H",t:3400,cap:"④ INSR中和抗体、およびINSR標的抗体ersodetug（低血糖症治療用に開発された別の薬剤）のどちらを投与しても、肝線維化が軽減する。",run(){
        K.show(["erso58"]);
        K.T(()=>{K.strike(560,126,420,200,{col:"var(--H)"});},500);
        K.T(()=>{ins.forEach((p,i)=>K.markX(p[0],p[1],"var(--H)"));K.attr("fib58","opacity","0.35");},1600);
        K.T(()=>{K.morph("hsc58Shape",GLYPH.QUIET);K.attr("hsc58Shape","fill","var(--E)");K.text("hsc58Cap","静止HSC");},2400);
      }},
    ];
  }
});
