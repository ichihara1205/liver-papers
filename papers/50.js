/* ============================================================
   №50 · Nat Commun 2026 · Yan C, Dong J, Sun Y, …, Zhang XF, Wang Y
   LSECのFBXW7がNOTCH1を分解してSEMA3Gを転写抑制する——内皮でこの軸が壊れると毛細血管化とHSC活性化が進み線維化が悪化
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"50", primary:"E",
    title:"LSECのFBXW7がNOTCH1を分解してSEMA3Gを転写抑制する——内皮のこの軸が壊れると毛細血管化とHSC活性化が進み線維化が悪化する",
    authors:"Yan C, Dong J, Sun Y, Min X, Liu J, …, Ji F, Han H, Wu Y, Yuan Z, Zhang XF, Wang Y",
    journal:"Nat Commun",
    year:2026,
    vol:"17(1):—",
    doi:"10.1038/s41467-026-77298-2",
    url:"https://doi.org/10.1038/s41467-026-77298-2",
    tags:["E","B","H"],
    approach:"内皮特異的Fbxw7ノックアウトマウス（Cdh5-CreERT）＋ 3種の線維化モデル（CCl4・胆管結紮BDL・MCD食）＋ 初代LSEC/HSCの培養上清クロストーク ＋ RNA-seq ＋ SNAナノ粒子によるLSEC標的siRNA ＋ ヒト肝硬変検体・血清SEMA3G",
    added:"2026-10-06",
    abstract_ja:"肝線維化では類洞内皮細胞（LSEC）のNotchシグナルが過剰になり毛細血管化と線維化を促すことが知られていたが、その上流の制御因子と下流のエフェクターははっきりしておらず、治療への橋渡しを阻んでいた。本研究は、NOTCH1を分解する主要なE3ユビキチンリガーゼであるFBXW7が、LSECにおいて肝線維化の重要なブレーキであることを示した。内皮特異的にFbxw7を欠損させると、CCl4・胆管結紮・MCD食という3種の線維化モデルのいずれでも線維化が悪化し、LSECの毛細血管化と肝星細胞（HSC）の活性化が強まった。トランスクリプトーム解析では、FBXW7欠損LSECで最も顕著に上がる遺伝子がセマフォリン3G（SEMA3G）で、その培養上清はSEMA3G依存のパラクリン作用でHSCを活性化した。実際、SEMA3Gを狙うsiRNAをLSECへ届けるSNAナノ粒子を投与すると、Fbxw7欠損マウスの傷害誘発線維化が大きく改善した。機序としては、FBXW7の欠損がNOTCH1（活性型N1ICD）を安定化させ、RBPJ依存でSEMA3Gの転写を高めるというもので、ヒト肝硬変検体でもLSECのFBXW7低下とN1ICD・SEMA3Gの上昇が一致し、血清SEMA3Gが肝機能指標と相関した。以上から、FBXW7/NOTCH1/SEMA3G軸が線維性肝疾患の有望な治療標的であることが示された。",
    background:"健常肝ではLSECが一酸化窒素（NO）を出してHSCを静止に保ち、有窓構造（fenestrae）で血液と肝細胞の物質交換を支えている。傷害を受けるとLSECは有窓を失い基底膜を作る毛細血管化を起こし、HSCを強く活性化するプロファイブロティックな表現型になる。LSECのNotch過剰活性化が線維化を促すことは確立していたが、Notchを動かす上流因子と、Notch活性化からHSC活性化へつなぐ下流の分泌因子は不明で、標的化を難しくしていた。",
    achievements:[
      "**FBXW7がLSECにおける肝線維化のブレーキ**であることを、内皮特異的Fbxw7欠損マウスと3種（CCl4・BDL・MCD）の線維化モデルで示した（欠損で線維化・毛細血管化・HSC活性化がいずれも悪化）。",
      "FBXW7欠損LSECで**最も上昇する遺伝子がSEMA3G**で、その培養上清が**SEMA3G依存のパラクリン作用でHSCを活性化**することを、過剰発現・ノックダウン・組換えSEMA3Gで実証した。",
      "機序を同定：**FBXW7欠損→N1ICD安定化→RBPJ依存でSEMA3G転写↑**（γセクレターゼ阻害DAPTとRBPJノックダウンで消失、プロモーターのRBPJ結合部位変異で活性化が消失）。受け手はHSCの**NRP2**。",
      "**SNAナノ粒子でSEMA3G siRNAをLSECへ届ける**とFbxw7欠損マウスの線維化が改善。ヒト肝硬変でFBXW7↓・N1ICD↑・SEMA3G↑が一致し、血清SEMA3GがAST・ALT/AST比と相関（治療標的・バイオマーカー）。"
    ],
    limitations:[
      "主要な因果は**マウス**で、ヒトは発現相関・血清相関にとどまる。",
      "**何がLSECのFBXW7を下げるのか**（炎症・低酸素・代謝ストレスなど上流）は未解明。",
      "SEMA3GはNRP2に作用するが、**共受容体や下流（Rho/GTPaseなど）の詳細**は未同定で、他のSEMA3ファミリーの冗長性も完全には排除されていない。",
      "**雄で表現型が強く**（雌はより軽度）、性差の機序は未解明。SNAは肝LSECへのスカベンジャー受容体A依存送達で、ヒトでの送達効率・安全性は別途検討が必要。"
    ],
    connection:[
      "**線維化点火の内皮側スイッチ**。自分の系は「脂肪化は出るが線維化が出ない」が課題だが、本論文はLSECが毛細血管化してSEMA3Gを出すとHSCが活性化すると示す。LSECを含む4細胞共培養で、LSECの毛細血管化（LYVE-1↓/CD34↑）とSEMA3G分泌を点火の入力軸として設計できる。",
      "**qPCRパネルの追加候補**：LSEC側にFBXW7・NOTCH1(N1ICD)・SEMA3G、HSC側にNRP2。『内皮のNotchが入っていないのか、入っているのに下流が動かないのか』を切り分けられる。",
      "**ABM実装**：『LSEC Notch活性→SEMA3G分泌速度→(NRP2介在)HSC活性化確率』をパラクリンのルールに。毛細血管化を状態遷移（静止LSEC→毛細血管化LSEC）としてモデル化できる。",
      "**既収録との接続**：#32（BMP9がLSEC終末分化のgatekeeper）・#34（ヒトMASLDで毛細血管化が線維化と相関）・#05（LSEC capillarizationにSNA核酸医薬）と同じLSEC-HSC軸。#09（HSC-RSPO3のzonation）や#53（LSEC zonationとRA-FGF1）と合わせ、LSECの状態がHSC運命を決めるという像が強まる。SNA送達は#05と共通の技術。"
    ],
    glossary:[
      {term:"LSEC",full:"liver sinusoidal endothelial cell",desc:"肝類洞の有窓内皮。NOでHSCを静止に保つが、毛細血管化すると線維化を促す"},
      {term:"FBXW7",full:"F-box and WD repeat domain-containing 7",desc:"NOTCH1などを分解するE3ユビキチンリガーゼ。LSECで線維化のブレーキ"},
      {term:"NOTCH1",full:"notch receptor 1",desc:"切断で生じるN1ICDが核へ移りRBPJと転写を駆動。LSECで過剰だと線維化促進"},
      {term:"N1ICD",full:"NOTCH1 intracellular domain",desc:"NOTCH1の活性型細胞内ドメイン。FBXW7が分解する標的"},
      {term:"SEMA3G",full:"semaphorin 3G",desc:"FBXW7欠損LSECで最も上がる分泌因子。HSCをNRP2経由で活性化する"},
      {term:"RBPJ",full:"recombination signal binding protein for immunoglobulin kappa J region",desc:"N1ICDと複合体を作りNotch標的（SEMA3G等）を転写する因子"},
      {term:"NRP2",full:"neuropilin 2",desc:"HSC側のSEMA3G受容体。線維化シグナルの受け手"},
      {term:"capillarization",full:"LSEC capillarization",desc:"LSECが有窓を失い基底膜を作る毛細血管化。HSC活性化・線維化を促す"},
      {term:"SNA",full:"spherical nucleic acid",desc:"スカベンジャー受容体A経由でLSECを標的する核酸ナノ粒子。siRNA送達に使用"}
    ],
    struct:{
      model:"in vivo",
      cells:["LSEC","HSC","肝細胞"],
      triggers:["内皮特異的Fbxw7欠損","CCl4 / BDL / MCD食","(受け手)HSC NRP2"],
      steatosis:"△", inflammation:"○", fibrosis:"○",
      readout:["Sirius red/ヒドロキシプロリン","COL1A1/αSMA","LSEC有窓(SEM)・LYVE1/CD34","血清SEMA3G"],
      ignite:"LSEC側：FBXW7↓→N1ICD安定化→SEMA3G分泌→(NRP2)HSC活性化。毛細血管化が点火の内皮側スイッチ。",
      params:[
        {name:"LSEC Notch活性(N1ICD) → SEMA3G分泌速度",note:"FBXW7量で分解速度を切替"},
        {name:"SEMA3G濃度 → (NRP2介在)HSC活性化確率",note:"パラクリン結合強度のルール"}
      ],
      todos:[
        "LSECの毛細血管化(LYVE1↓/CD34↑)＋SEMA3G分泌を線維化の入力軸に設計",
        "qPCR：LSEC側FBXW7/NOTCH1/SEMA3G、HSC側NRP2を追加",
        "SNA型のLSEC標的ノックダウンが自系共培養で使えるか検討（#05と共通技術）"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f50' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='f50h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>LSECのFBXW7がNOTCH1を分解しSEMA3Gを抑える——欠損で線維化が点火</text><rect x='14' y='40' width='300' height='150' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.3' stroke-dasharray='5 3'/><text x='164' y='58' text-anchor='middle' font-size='10.5' fill='var(--E)' font-weight='600'>類洞内皮細胞 (LSEC)</text><rect x='26' y='70' width='84' height='40' rx='6' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.3'/><text x='68' y='88' text-anchor='middle' font-size='10' fill='var(--accent)'>FBXW7</text><text x='68' y='102' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>（ブレーキ）</text><rect x='130' y='70' width='84' height='40' rx='6' fill='var(--paper)' stroke='var(--B)' stroke-width='1.3'/><text x='172' y='88' text-anchor='middle' font-size='10' fill='var(--B)'>NOTCH1</text><text x='172' y='102' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>N1ICD</text><rect x='232' y='70' width='70' height='40' rx='6' fill='var(--paper)' stroke='var(--B)' stroke-width='1.3'/><text x='267' y='88' text-anchor='middle' font-size='10' fill='var(--B)'>SEMA3G</text><text x='267' y='102' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>↑分泌</text><text x='110' y='86' font-size='12' fill='var(--H)'>⊣</text><line x1='114' y1='90' x2='128' y2='90' stroke='var(--B)' stroke-width='1.2' marker-end='url(#f50)'/><line x1='214' y1='90' x2='230' y2='90' stroke='var(--B)' stroke-width='1.2' marker-end='url(#f50)'/><text x='164' y='140' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>FBXW7欠損 → N1ICD安定化（RBPJ依存）</text><text x='164' y='158' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>→ SEMA3G転写↑　／　有窓喪失＝毛細血管化</text><text x='164' y='176' text-anchor='middle' font-size='9' fill='var(--E)'>LYVE1↓ CD34↑</text><path d='M314,100 L360,120' stroke='var(--accent)' stroke-width='1.4' marker-end='url(#f50)'/><rect x='364' y='84' width='150' height='70' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='439' y='108' text-anchor='middle' font-size='10.5' fill='var(--B)' font-weight='600'>肝星細胞 (HSC)</text><text x='439' y='126' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>SEMA3G→NRP2</text><text x='439' y='141' text-anchor='middle' font-size='9.5' fill='var(--B)'>活性化</text><path d='M514,119 L532,119' stroke='var(--accent)' stroke-width='1.4' marker-end='url(#f50)'/><rect x='534' y='96' width='98' height='46' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='583' y='116' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>線維化</text><text x='583' y='132' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>COL1A1 ↑</text><rect x='364' y='168' width='268' height='40' rx='7' fill='var(--paper)' stroke='var(--H)' stroke-width='1.5'/><text x='498' y='185' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>治療：SNAナノ粒子でLSECにSEMA3G siRNA</text><text x='498' y='200' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→ Fbxw7欠損マウスの線維化が改善</text><path d='M439,154 C439,160 460,166 498,166' fill='none' stroke='var(--H)' stroke-width='1.3' stroke-dasharray='4 3' marker-end='url(#f50h)'/></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m50' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：内皮Fbxw7 KO × 3線維化モデル → クロストーク → SNA治療 → ヒト検証</text><rect x='12' y='36' width='150' height='48' rx='7' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='87' y='55' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>内皮特異的 Fbxw7 KO</text><text x='87' y='71' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Cdh5-CreERT</text><rect x='12' y='96' width='150' height='48' rx='7' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.4'/><text x='87' y='115' text-anchor='middle' font-size='9.5' fill='var(--D)' font-weight='600'>3種の線維化モデル</text><text x='87' y='131' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>CCl4 / BDL / MCD食</text><path d='M162,60 C180,60 184,110 200,114' fill='none' stroke='var(--accent)' marker-end='url(#m50)'/><path d='M162,120 L200,120' stroke='var(--accent)' marker-end='url(#m50)'/><rect x='203' y='94' width='150' height='52' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.4'/><text x='278' y='114' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>初代LSEC → HSC</text><text x='278' y='130' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>培養上清でクロストーク</text><rect x='203' y='36' width='150' height='48' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='278' y='55' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>LSEC RNA-seq</text><text x='278' y='71' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→SEMA3Gを同定</text><path d='M278,84 L278,92' stroke='var(--accent)' marker-end='url(#m50)'/><rect x='394' y='36' width='146' height='48' rx='7' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='467' y='55' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>SNAナノ粒子</text><text x='467' y='71' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>LSECへSEMA3G siRNA</text><rect x='394' y='96' width='146' height='52' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='467' y='116' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>ヒト肝硬変検体</text><text x='467' y='132' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>FBXW7↓/N1ICD↑/SEMA3G↑</text><path d='M353,116 C372,116 378,70 392,66' fill='none' stroke='var(--accent)' marker-end='url(#m50)'/><path d='M353,120 L392,122' stroke='var(--accent)' marker-end='url(#m50)'/><rect x='560' y='60' width='72' height='88' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='596' y='98' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>線維化</text><text x='596' y='114' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>KO↑</text><text x='596' y='128' text-anchor='middle' font-size='9' fill='var(--H)'>siRNA↓</text><path d='M540,66 C550,66 554,90 558,96' fill='none' stroke='var(--accent)' marker-end='url(#m50)'/><path d='M540,122 L558,120' stroke='var(--accent)' marker-end='url(#m50)'/><text x='320' y='210' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>読み出し：Sirius red/ヒドロキシプロリン・COL1A1/αSMA・LSEC有窓(SEM)・血清SEMA3G</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("50", [{ic:"endothelial",cap:"LSEC：FBXW7がNOTCH1を分解しSEMA3Gを抑制"}, {ic:"mouse",cap:"内皮特異的Fbxw7 KO × CCl4/BDL/MCD"}, {ic:"stellate",cap:"SEMA3G→NRP2でHSC活性化"}, {ic:"drug",cap:"SNAナノ粒子でLSECにSEMA3G siRNA"}, {ic:"human",cap:"ヒト肝硬変でFBXW7↓/N1ICD↑/SEMA3G↑"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 50 Yan/Wang Nat Commun 2026: 内皮特異的Fbxw7 KO+3線維化モデル+初代LSEC/HSC共培養+RNA-seq+SNA siRNA+SEM/IF/WB+ヒト検体 */
LP.methods("50", ["mouse","human","invitro","crispr","nano","rnaseq","qpcr","wb","elisa","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №50 FBXW7↓→N1ICD安定化→SEMA3G→HSC活性化→線維化、SNAで遮断 ===== */
LP.cinema("50", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("50",'var(--B)')}${GLYPH.arrow("50h",'var(--H)')}</defs>`
    +GLYPH.title("健常LSECではFBXW7がNOTCH1を分解。欠損でN1ICD安定化→SEMA3G分泌→HSC活性化→線維化")
    +`<rect x="40" y="70" width="330" height="230" rx="14" fill="none" stroke="var(--E)" stroke-width="2" stroke-dasharray="6 4"/>`
    +`<text x="60" y="92" font-size="10.5" fill="var(--E)">類洞内皮細胞（LSEC）</text>`
    +GLYPH.nucleus("nuc50",150,210,46,34,"核")
    +GLYPH.tag("fbxw50",110,120,"FBXW7","var(--accent)",88)
    +GLYPH.tf("notch50",250,130,"N1ICD","var(--B)",true)
    +GLYPH.gene("sema50",150,210,"SEMA3G","var(--B)",true)
    +`<g id="semaOut50" class="fade"></g>`
    +GLYPH.receptor("nrp50",470,250,"NRP2","var(--B)")
    +GLYPH.stellate("hsc50",470,300,"肝星細胞")
    +GLYPH.layer("col50")
    +GLYPH.pill("sna50",560,110,"SNA siRNA",120)
    +GLYPH.badge("fib50",600,300,"線維化","COL1A1↑","var(--B)"),
  build(K){
    const semaPos=[[300,200],[340,220],[320,250]];
    return [
      {color:"E",t:2600,cap:"① 健常なLSEC。FBXW7がNOTCH1（活性型N1ICD）を次々に分解し、SEMA3Gの転写が抑えられている。",run(){
        K.pulse("fbxw50");
        K.T(()=>{K.show(["notch50"]);K.markX(250,130,"var(--accent)");K.T(()=>K.hide(["notch50"]),700);},600);
      }},
      {color:"B",t:4000,cap:"② FBXW7が欠損すると、分解されないN1ICDが核へ移りRBPJと組んでSEMA3Gを転写誘導。LSECは有窓を失い毛細血管化する。",run(){
        K.unpulse("fbxw50");K.attr("fbxw50","opacity","0.3");
        K.show(["notch50"]);K.pulse("notch50");
        K.T(()=>{K.flow(250,130,150,200,"var(--B)",{n:2,dur:1.1,loop:2});},900);
        K.T(()=>{K.show(["sema50"]);K.pulse("sema50");},2100);
      }},
      {color:"B",t:4000,cap:"③ 分泌されたSEMA3GがHSCのNRP2に結合してHSCを活性化し、コラーゲンが沈着して線維化が進む。",run(){
        K.show(["semaOut50"]);const g=K.$("semaOut50");
        semaPos.forEach((p,i)=>K.T(()=>{g.insertAdjacentHTML("beforeend",GLYPH.metab("s"+i,p[0],p[1],i===1?"SEMA3G":"","var(--B)"));K.flow(p[0],p[1],465,250,"var(--B)",{n:1,dur:1.1,loop:2});},i*250));
        K.T(()=>{K.pulse("nrp50");K.morph("hsc50Shape",GLYPH.SPINDLE);K.attr("hsc50Shape","fill","#b0432f");K.text("hsc50Cap","活性化HSC");},1900);
        K.T(()=>{K.draw("col50",GLYPH.collagenAt(470,360),{len:150});K.show(["fib50"]);},2900);
      }},
      {color:"H",t:3200,cap:"④ SEMA3Gを狙うsiRNAをSNAナノ粒子でLSECへ届けると、分泌が止まりHSC活性化と線維化が抑えられる。",run(){
        K.show(["sna50"]);
        K.T(()=>{K.flow(560,126,330,210,"var(--H)",{n:3,dur:1.2,loop:2});},400);
        K.T(()=>{K.attr("sema50","opacity","0.25");K.markX(330,210,"var(--H)");},1600);
        K.T(()=>{K.attr("fib50","opacity","0.35");},2400);
      }},
    ];
  }
});
