/* ============================================================
   №52 · Nat Commun 2026 · Wen X, Wu K, Wang M, …, Li K, Duan Y, Hu W
   ACSS2-KAT5複合体がヒストンクロトニル化でAIF1を上げる——MASLDからMASHへの移行を炎症と肝細胞老化で駆動
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"52", primary:"D",
    title:"ACSS2-KAT5がヒストンクロトニル化でAIF1を上げる——脂質合成ではなく炎症と肝細胞老化でMASLDからMASHへの移行を駆動する",
    authors:"Wen X, Wu K, Wang M, Ma Z, Wang T, Zhang J, …, Ruan X, Li K, Duan Y, Hu W",
    journal:"Nat Commun",
    year:2026,
    vol:"17(1):—",
    doi:"10.1038/s41467-026-75819-7",
    url:"https://doi.org/10.1038/s41467-026-75819-7",
    tags:["D","C","B"],
    approach:"肝細胞特異的ACSS2ノックアウトマウス（HKO）＋ HFFD/MCD/CCl4モデル ＋ AAV8によるACSS2・AIF1過剰発現 ＋ 老化細胞除去薬Navitoclax ＋ RNA-seq・LC-MS相互作用解析・ChIP-qPCR ＋ ヒトMASH肝のACSS2/AIF1発現 ＋ ACSS2阻害薬",
    added:"2026-10-06",
    abstract_ja:"炎症はMASLDからMASHへの移行の中心的なドライバーだが、その炎症の引き金と持続の分子機構はよく分かっていなかった。本研究は、短鎖脂肪酸からアセチルCoAを作る酵素ACSS2が、脂質合成という本来の役割とは独立に、エピジェネティックな制御因子としてMASHを悪化させることを示した。肝細胞特異的にACSS2を欠損させると、HFFDとMCDのモデルでは脂肪化・炎症・線維化が軽くなり、CCl4モデルでも炎症細胞の浸潤と肝障害が軽減し、逆にAAV8でACSS2を過剰発現させると悪化した。機序としては、ACSS2がリジンアセチル基転移酵素KAT5と複合体を作り、炎症因子AIF1のプロモーターでヒストンのクロトニル化（H3K18cr・H3K27cr）を高めてAIF1の転写を上げ、それが肝の炎症と肝細胞老化を誘導、老化細胞のSASPがさらに炎症を増幅するという悪循環を回す。ACSS2阻害薬や、老化細胞を除く薬Navitoclaxで、この悪循環とMASHの病態が抑えられた。興味深いことに、ACSS2は脂質合成を担うACLYとは機能的に切り離されており、ACSS2の欠損だけでMASHの進行をブロックできた。以上から、ACSS2/KAT5-AIF1軸がMASLDからMASHへの移行の重要なドライバーであり、治療標的になりうることが示された。",
    background:"MASLDの自然史では単純な脂肪化からMASHへの移行、すなわち炎症を伴う段階への進行が予後を左右する。この移行には酸化ストレス・ERストレス・インスリン抵抗性など多様な引き金が関わるが、炎症カスケードを起動・持続させる分子機構は不明だった。ACSS2は酢酸→アセチルCoAを作る代謝酵素で、脂質合成だけでなくヒストンやタンパク質のアシル化を介した転写制御にも関わる多機能因子として注目されていたが、MASHでの役割は定まっていなかった。",
    achievements:[
      "**肝細胞特異的ACSS2欠損**がHFFD・MCDモデルで脂肪化・炎症・線維化を、CCl4モデルでも炎症細胞浸潤と肝障害を軽減し、**AAV8によるACSS2過剰発現が悪化**（約15%が肝硬変へ）させることを示した。",
      "機序を同定：**ACSS2がKAT5と複合体**を作り、炎症因子**AIF1のプロモーターでヒストンのクロトニル化（H3K18cr/H3K27cr）を高めてAIF1転写を上げる**（アセチル化ではなくクロトニル化が特異的）。",
      "AIF1が**肝の炎症と肝細胞老化**を誘導し、老化細胞のSASPが炎症を増幅する**悪循環**を駆動。**AIF1過剰発現でACSS2欠損の保護効果が消失**（AIF1が主要な下流エフェクター）。",
      "**ACSS2阻害薬でMASHを抑制**。老化細胞除去薬**NavitoclaxがMCD食下でのACSS2過剰発現による病態を反転**。ACSS2は脂質合成酵素ACLYとは機能的に独立で、ACSS2欠損単独でMASH進行をブロックできた。"
    ],
    limitations:[
      "主にマウスモデル依存で、ヒトは**ACSS2/AIF1の発現相関**が中心。",
      "ACSS2は**複数のアシル化（アセチル化・ラクチル化・ブチリル化）**に関わり、MASHでクロトニル化が最も変化したが、特定PTMの個別寄与の切り分けはなお課題。",
      "ACSS2は**文脈依存**で、以前はアルコール性肝障害に保護的（iron恒常性）とも報告されており、局在（核/細胞質）で機能が変わる点が複雑。",
      "**AIF1を上流で上げる入力**（何がERKを介したSer267リン酸化によるACSS2の核移行を促すか）の生理的トリガーはさらなる検討が必要。"
    ],
    connection:[
      "**『脂肪化は出るが炎症・線維化が出ない』への分子的手がかり**。本論文は脂質合成（ACLY）と炎症（ACSS2→AIF1）を切り離せると示す。自系でACSS2・AIF1・KAT5をqPCRパネルに入れれば、脂肪化は出ているのに炎症スイッチ（ACSS2核移行→AIF1）が入っていないのかを切り分けられる。",
      "**セカンドヒットの候補**：クロトン酸の添加でヒストンクロトニル化→AIF1を上げられる可能性（本論文では酢酸の添加ではAIF1は有意に変化せず、クロトン酸で顕著に増加）。LPSに加え『代謝→エピジェネティクス』軸のヒットとして設計できる。",
      "**肝細胞老化という読み出し**：p16/p21/γH2AX・SA-β-gal・SASPを炎症の読み出しに追加できる。Navitoclaxは老化細胞除去のネガコンに。",
      "**既収録との接続**：#07（ACLY/ACSS2二重阻害EVT0185）はACSS2の代謝（HSCコレステロール合成）面、本論文は同じACSS2のエピジェネティクス（肝細胞AIF1）面で、ACSS2が代謝と転写の二面でMASHを駆動する像が揃う。#17（老化肝細胞・セノリティクス）とは肝細胞老化とSASPで直結。"
    ],
    glossary:[
      {term:"ACSS2",full:"acyl-CoA synthetase short-chain family member 2",desc:"酢酸→アセチルCoAを作る酵素。核移行しKAT5と組んでヒストンアシル化を制御"},
      {term:"KAT5",full:"lysine acetyltransferase 5 (TIP60)",desc:"リジンアシル基転移酵素。ACSS2と複合体を作りAIF1でクロトニル化を触媒"},
      {term:"AIF1",full:"allograft inflammatory factor 1 (IBA1)",desc:"カルシウム結合性の炎症因子。ACSS2-KAT5が転写を上げMASHの炎症・肝細胞老化を駆動"},
      {term:"histone crotonylation",full:"histone lysine crotonylation (Kcr)",desc:"活性なエンハンサー/プロモーターに富むヒストン修飾。H3K18cr/H3K27crがAIF1を活性化"},
      {term:"SASP",full:"senescence-associated secretory phenotype",desc:"老化細胞が出す炎症性分泌。肝の炎症を増幅する悪循環の核"},
      {term:"ACLY",full:"ATP citrate lyase",desc:"クエン酸→アセチルCoAの脂質合成酵素。本論文ではACSS2と機能的に独立"},
      {term:"Navitoclax",full:"navitoclax (ABT-263)",desc:"老化細胞を選択的に除くセノリティック。ACSS2過剰発現の病態を反転"},
      {term:"HFFD",full:"high-fat/high-fructose diet",desc:"高脂肪食（60 kcal%脂肪、D12492）に飲水30%フルクトースを併用し16週給餌。MASH誘導モデルに用いる"}
    ],
    struct:{
      model:"mixed",
      cells:["肝細胞","(下流)マクロファージ","(下流)HSC"],
      triggers:["HFFD/MCD/CCl4","クロトン酸","ACSS2核移行(ERK)"],
      steatosis:"○", inflammation:"○", fibrosis:"○",
      readout:["AIF1/炎症サイトカイン","p16/p21/γH2AX・SA-β-gal","H3K18cr/H3K27cr","Sirius red"],
      ignite:"肝細胞のACSS2核移行→KAT5→AIF1クロトニル化→炎症＋肝細胞老化→SASPで増幅。脂質合成(ACLY)とは独立の炎症スイッチ。",
      params:[
        {name:"ACSS2核移行量 → AIF1転写速度",note:"クロトニル化を介したエピジェネティックルール"},
        {name:"老化肝細胞密度(SASP) → 局所炎症強度",note:"悪循環の増幅係数"}
      ],
      todos:[
        "qPCR：ACSS2/AIF1/KAT5を追加し脂肪化と炎症スイッチを切り分け",
        "クロトン酸添加を『代謝→エピジェネティクス』セカンドヒットに",
        "読み出しにp16/p21/SA-β-gal/SASPを追加（Navitoclaxをネガコンに）"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f52' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>ACSS2→KAT5→AIF1クロトニル化→炎症＋肝細胞老化（脂質合成とは独立）</text><rect x='12' y='40' width='128' height='60' rx='7' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.3'/><text x='76' y='62' text-anchor='middle' font-size='10' fill='var(--D)'>酢酸→アセチルCoA</text><text x='76' y='80' text-anchor='middle' font-size='10' fill='var(--D)' font-weight='600'>ACSS2</text><text x='76' y='94' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>核へ移行(ERK)</text><path d='M140,70 L158,70' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f52)'/><rect x='162' y='40' width='128' height='60' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.3'/><text x='226' y='60' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>ACSS2＋KAT5</text><text x='226' y='78' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>AIF1プロモーターで</text><text x='226' y='93' text-anchor='middle' font-size='9' fill='var(--B)'>H3K18cr/H3K27cr↑</text><path d='M290,70 L308,70' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f52)'/><rect x='312' y='40' width='110' height='60' rx='7' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.3'/><text x='367' y='64' text-anchor='middle' font-size='10' fill='var(--C)' font-weight='600'>AIF1 ↑</text><text x='367' y='82' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>炎症因子</text><path d='M367,100 L367,118' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f52)'/><rect x='280' y='122' width='174' height='44' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.4'/><text x='367' y='140' text-anchor='middle' font-size='9.5' fill='var(--C)'>肝の炎症 ＋ 肝細胞老化</text><text x='367' y='156' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>p16/p21・SASP</text><path d='M367,166 C367,180 330,186 300,186' fill='none' stroke='var(--ink-soft)' stroke-width='1.1' stroke-dasharray='3 3' marker-end='url(#f52)'/><text x='300' y='204' font-size='9' fill='var(--ink-soft)'>SASPが炎症を増幅（悪循環）</text><rect x='470' y='40' width='158' height='60' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='549' y='62' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>MASLD → MASH</text><text x='549' y='80' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>炎症・線維化で移行</text><text x='549' y='95' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>過剰発現で肝硬変も</text><path d='M422,70 L468,70' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f52)'/><rect x='470' y='118' width='158' height='48' rx='7' fill='var(--paper)' stroke='var(--H)' stroke-width='1.5'/><text x='549' y='138' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>ACSS2阻害 / Navitoclax</text><text x='549' y='155' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>悪循環を遮断しMASH改善</text><text x='120' y='224' font-size='9' fill='var(--ink-soft)'>※脂質合成のACLYとは機能的に独立 — ACSS2欠損単独でMASH進行をブロック</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m52' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：ACSS2の遺伝子操作 × MASHモデル → 機序 → 介入</text><rect x='12' y='36' width='146' height='48' rx='7' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.4'/><text x='85' y='55' text-anchor='middle' font-size='9.5' fill='var(--D)' font-weight='600'>肝細胞特異的 ACSS2-HKO</text><text x='85' y='71' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Alb-Cre</text><rect x='12' y='96' width='146' height='48' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.4'/><text x='85' y='115' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>AAV8で過剰発現</text><text x='85' y='131' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ACSS2 / AIF1</text><rect x='12' y='156' width='146' height='48' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='85' y='175' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>MASHモデル</text><text x='85' y='191' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>HFFD / MCD / CCl4</text><rect x='196' y='70' width='150' height='92' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='271' y='92' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>機序解析</text><text x='271' y='110' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>RNA-seq / LC-MS</text><text x='271' y='125' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>co-IP：ACSS2-KAT5</text><text x='271' y='140' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ChIP：AIF1クロトニル化</text><path d='M158,60 C178,60 182,100 194,104' fill='none' stroke='var(--accent)' marker-end='url(#m52)'/><path d='M158,120 L194,116' stroke='var(--accent)' marker-end='url(#m52)'/><path d='M158,180 C178,180 182,130 194,126' fill='none' stroke='var(--accent)' marker-end='url(#m52)'/><rect x='378' y='44' width='150' height='70' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.4'/><text x='453' y='66' text-anchor='middle' font-size='9.5' fill='var(--C)' font-weight='600'>AIF1過剰発現</text><text x='453' y='84' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>HKOの保護が消失</text><text x='453' y='100' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→主要エフェクター</text><rect x='378' y='124' width='150' height='70' rx='7' fill='var(--paper)' stroke='var(--H)' stroke-width='1.5'/><text x='453' y='146' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>介入</text><text x='453' y='164' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ACSS2阻害薬</text><text x='453' y='180' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Navitoclax(老化除去)</text><path d='M346,100 C362,100 368,80 376,76' fill='none' stroke='var(--accent)' marker-end='url(#m52)'/><path d='M346,126 C362,126 368,150 376,155' fill='none' stroke='var(--accent)' marker-end='url(#m52)'/><rect x='548' y='84' width='84' height='70' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.3'/><text x='590' y='110' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>ヒトMASH肝</text><text x='590' y='128' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ACSS2/AIF1↑</text><path d='M528,100 L546,104' stroke='var(--accent)' marker-end='url(#m52)'/></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("52", [{ic:"mouse",cap:"肝細胞特異的ACSS2 KO × HFFD/MCD/CCl4"}, {ic:"hepatocyte",cap:"肝細胞のACSS2が核でKAT5と複合体"}, {ic:"omics",cap:"AIF1プロモーターのヒストンクロトニル化↑"}, {ic:"macrophage",cap:"炎症と肝細胞老化（SASP）の悪循環"}, {ic:"drug",cap:"ACSS2阻害薬・Navitoclaxで遮断"}, {ic:"human",cap:"ヒトMASH肝でACSS2/AIF1高発現"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 52 Wen/Hu Nat Commun 2026: 肝細胞特異的ACSS2 KO+AAV8過剰発現+RNA-seq+co-IP/ChIP-qPCR+FLAGプルダウンLC-MS/MS+ELISA+フロー+Navitoclax+ヒト肝+IHC/WB（chipseqはChIP-qPCRのみのため外しqpcrで代表） */
LP.methods("52", ["mouse","human","invitro","crispr","drug","rnaseq","proteomics","qpcr","wb","elisa","facs","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №52 ACSS2核移行→KAT5→AIF1クロトニル化→炎症＋老化→MASH、阻害で遮断 ===== */
LP.cinema("52", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("52",'var(--C)')}${GLYPH.arrow("52h",'var(--H)')}</defs>`
    +GLYPH.title("肝細胞のACSS2が核へ移りKAT5と組んでAIF1をクロトニル化で誘導→炎症＋老化→MASH")
    +GLYPH.hep("hep52",70,120,1.0,"肝細胞")
    +GLYPH.nucleus("nuc52",250,230,56,40,"核")
    +GLYPH.metab("acss52",150,140,"ACSS2","var(--D)")
    +GLYPH.tf("kat52",250,230,"KAT5","var(--B)",true)
    +GLYPH.gene("aif52",250,230,"AIF1","var(--C)",true)
    +`<g id="cr52" class="fade"></g>`
    +GLYPH.cytokine("inf52",430,180,"炎症","var(--C)",true)
    +`<g id="senes52" class="fade">`+GLYPH.hexHep("sen52",430,290,"老化肝細胞")+`</g>`
    +GLYPH.badge("mash52",610,110,"MASH","移行","var(--B)")
    +GLYPH.pill("inh52",590,300,"ACSS2阻害",120),
  build(K){
    const crPos=[[210,215],[250,210],[290,218]];
    return [
      {color:"D",t:2600,cap:"① 肝細胞に酢酸が取り込まれ、ACSS2がアセチルCoAを作る。定常ではこれは代謝の役割。",run(){
        K.pulse("acss52");
      }},
      {color:"B",t:4000,cap:"② 過栄養でACSS2が核へ移り、KAT5と複合体を作ってAIF1のプロモーターでヒストンのクロトニル化（H3K18cr/H3K27cr）を高める。",run(){
        K.move("acss52",0,0,100,90,1.4);
        K.T(()=>{K.show(["kat52"]);K.pulse("kat52");},1200);
        K.T(()=>{K.show(["cr52"]);const g=K.$("cr52");crPos.forEach((p,i)=>K.T(()=>g.insertAdjacentHTML("beforeend",GLYPH.metab("c"+i,p[0],p[1],i===1?"cr":"","var(--B)")),i*200));},2000);
        K.T(()=>K.show(["aif52"]),3000);
      }},
      {color:"C",t:4000,cap:"③ AIF1が上がって肝の炎症と肝細胞老化が起き、老化細胞のSASPがさらに炎症を増幅する悪循環に入る。",run(){
        K.show(["inf52"]);K.pulse("aif52");
        K.T(()=>K.flow(250,210,430,180,"var(--C)",{n:3,dur:1.2,loop:2}),400);
        K.T(()=>{K.show(["senes52"]);radiate(K,430,290,"var(--C)");},1700);
        K.T(()=>K.flow(430,290,430,195,"var(--ink-soft)",{n:2,dur:1.0,loop:2}),2900);
      }},
      {color:"H",t:3400,cap:"④ MASHへ移行するが、ACSS2阻害薬や老化細胞除去薬Navitoclaxで悪循環が止まり病態が抑えられる。",run(){
        K.show(["mash52"]);
        K.T(()=>K.flow(430,190,560,120,"var(--B)",{n:2,dur:1.1,loop:1}),300);
        K.T(()=>K.show(["inh52"]),1200);
        K.T(()=>{K.flow(590,284,250,210,"var(--H)",{n:3,dur:1.3,loop:2});},1800);
        K.T(()=>{K.markX(250,210,"var(--H)");K.attr("inf52","opacity","0.3");K.attr("mash52","opacity","0.4");},3000);
      }},
    ];
  }
});
