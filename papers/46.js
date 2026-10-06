/* ============================================================
   №46 · Cell Metab 2016 · Wang X, Zheng Z, Caviglia JM, Corey KE, Herfel TM, Cai B, Masia R, Ch…
   肝細胞のTAZ/WWTR1がIndian hedgehogを介してHSCを活性化する——脂肪化を動かさず線維化だけを動かすスイッチ
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"46", primary:"B",
    title:"肝細胞のTAZ/WWTR1がIndian hedgehogを介してHSCを活性化する——脂肪化を動かさず線維化だけを動かすスイッチ",
    authors:"Wang X, Zheng Z, Caviglia JM, Corey KE, Herfel TM, Cai B, Masia R, Chung RT, Lefkowitch JH, Schwabe RF, Tabas I",
    journal:"Cell Metab",
    year:2016,
    vol:"24(6):848-862",
    doi:"10.1016/j.cmet.2016.09.016",
    url:"https://doi.org/10.1016/j.cmet.2016.09.016",
    tags:["B","D"],
    "approach": "ヒトおよびマウスNASH肝の発現解析 ＋ 肝細胞特異的TAZノックダウン/過剰発現マウス ＋ 肝細胞（AML12）培養上清による初代HSC活性化の解析でパラクリン因子Ihhを同定",
    "added": "2026-09-20",
    "abstract_ja": "単純な脂肪化がなぜ一部の個体でのみ脂肪肝炎へ進むのかという分岐点の分子的な実体は長く不明で、そのことが治療標的の同定を妨げてきた。本研究は転写共役因子TAZ（WWTR1）が、正常肝や単純性脂肪肝と比べてヒト・マウスいずれのNASH肝でも肝細胞において著しく高いことを見いだした。重要なのはその介入実験で、NASHモデルマウスで肝細胞のTAZを抑えると肝の炎症・肝細胞死・線維化が予防あるいは反転する一方、**脂肪化だけは変わらなかった**。逆に脂肪化しか起きないモデルで肝細胞にTAZを発現させると、線維化を含むNASHの形質が現れた。機序を追うと、TAZはTEADと組んで分泌因子Indian hedgehog（Ihh）を誘導し、分泌されたIhhが肝星細胞（HSC）の線維化関連遺伝子を動かすという経路が浮かび上がった。TAZは、脂肪化からNASHへという決定的な移行を担う、それまで認識されていなかった因子である。",
    "background": "MASLDの自然史では、脂肪化そのものより炎症と線維化を伴う段階への移行が予後を左右するにもかかわらず、その移行を担う分子は十分に特定されていなかった。脂肪化の量と炎症・線維化の強さは必ずしも相関しないことが臨床的に知られており、両者を別々に制御する因子が存在するはずだと考えられていたが、脂肪化を変えずに線維化だけを動かせる分子を実証した例はなかった。",
    "achievements": ["ヒト・マウスのNASH肝で、肝細胞の**TAZ（WWTR1）が正常肝や単純性脂肪肝より顕著に高い**ことを示した。", "肝細胞TAZのサイレンシングで炎症・肝細胞死・線維化が予防または反転する一方、**脂肪化は変化しなかった**。", "脂肪化モデルで肝細胞特異的にTAZを発現させると、線維化を含むNASHの形質が出現した。", "機序として**TAZ/TEADによるIndian hedgehog（Ihh）の誘導**を同定し、分泌されたIhhがHSCの線維化遺伝子を動かす経路を示した。"],
    "limitations": ["主要な因果はマウスで確立されており、ヒトでは発現の相関にとどまる。", "何が肝細胞のTAZを上げるのか——上流の入力——は本論文では解かれていない。", "Ihh以外の分泌因子が寄与する可能性は完全には排除されていない。", "HSC側の受け手（Hedgehog受容体経路）の状態依存性は詳しく検討されていない。"],
    "connection": ["「脂肪化は出るが線維化が出ない」という自分の系の状況に、分子としてそのまま対応する。**WWTR1とIHHをqPCRパネルに入れれば、スイッチが入っていないのか、入っているのに下流が動かないのかを切り分けられる**。", "TAZはYAP/TAZ系として機械刺激の受け手でもあるため、コラーゲンゲルの剛性が約100 Paと低いことと接続しうる。剛性を上げる実験の読み出しにもなる。", "No.43と合わせると、2:1の良性脂肪化ではTAZが上がらないという検証可能な仮説が立つ。TGF-β強制刺激と並べれば、上流（TAZ）と下流（SMAD）のどちらが欠けているかを二分できる。"],
    "glossary": [{"term": "TAZ", "full": "transcriptional coactivator with PDZ-binding motif (WWTR1)", "desc": "Hippo経路の転写共役因子。NASH肝細胞で上昇し線維化を駆動する"}, {"term": "WWTR1", "full": "WW domain containing transcription regulator 1", "desc": "TAZをコードする遺伝子名。発現測定ではこちらを用いる"}, {"term": "TEAD", "full": "TEA domain transcription factor", "desc": "TAZ/YAPと複合体を作りDNAに結合する転写因子"}, {"term": "IHH", "full": "Indian hedgehog", "desc": "TAZ/TEADが誘導する分泌因子。肝細胞からHSCへ線維化シグナルを渡す"}, {"term": "YAP", "full": "Yes-associated protein", "desc": "TAZと対をなすHippo経路のエフェクター。機械刺激の受け手でもある"}],
    "struct": {"model": "mixed", "cells": ["肝細胞", "肝星細胞(HSC)"], "triggers": ["NASH誘導食", "肝細胞特異的TAZ過剰発現"], "steatosis": "○", "inflammation": "○", "fibrosis": "○", "readout": ["肝線維化（コラーゲン染色）", "ALT", "HSC活性化遺伝子", "Ihh発現"], "ignite": "肝細胞のTAZ→Ihh。脂肪化と線維化を分離できる数少ない分子スイッチ", "params": [{"name": "TAZ発現量", "note": "脂肪化とは独立に炎症・細胞死・線維化を動かす。ABMでは肝細胞の状態変数"}, {"name": "Ihh分泌", "note": "肝細胞→HSCのパラクリン結合強度を与えるパラメータ"}], "todos": ["AOA200条件でWWTR1/IHHが上がるかをqPCRで確認する", "TGF-β強制刺激と並べ、上流（TAZ）と下流（SMAD）のどちらが欠けているかを二分する", "ゲル剛性を上げた条件でWWTR1が動くかを見る"]},
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f46' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>脂肪化は据え置き、線維化だけが動く——TAZ→Ihh→HSC</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>肝細胞</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TAZ(WWTR1)上昇</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>NASH肝で顕著</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f46)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>核内</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TAZ/TEAD複合体</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>Ihhを転写誘導</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f46)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>分泌</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>Indian hedgehog</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>肝細胞→HSCへ</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f46)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>HSC</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>線維化遺伝子ON</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>脂肪化は不変</text>\n</svg>",
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m46' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：脂肪化と線維化を切り離す介入</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 発現</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ヒト・マウスNASH肝</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>肝細胞TAZを定量</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m46)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>② 抑制</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>肝細胞TAZノックダウン</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>炎症・細胞死・線維化↓</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m46)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>③ 付与</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脂肪化モデルでTAZ発現</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>NASH形質が出現</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m46)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>④ 機序</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TAZ/TEAD→Ihh</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>HSC活性化を再現</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("46", [{ic:"human",cap:"ヒトNASH肝で肝細胞TAZが高発現"}, {ic:"mouse",cap:"肝細胞TAZのノックダウンと過剰発現"}, {ic:"hepatocyte",cap:"TAZ/TEAD→Indian hedgehogを分泌"}, {ic:"stellate",cap:"HSCの線維化遺伝子が動く"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 46 Wang/Tabas Cell Metab 2016: ヒト/マウスNASH肝+肝細胞TAZノックダウン/過剰発現+in vitro機序（2026-10補完：crispr=遺伝子ノックダウンの分類、qpcr/wbは推測） */
LP.methods("46", ["mouse","human","invitro","crispr","qpcr","wb"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №46 肝細胞TAZ→Ihh→HSC（脂肪化は動かさない） ===== */
LP.cinema("46", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("46")}${GLYPH.arrow("46b","var(--B)")}</defs>`
    +GLYPH.title("肝細胞のTAZが核へ移行 → TEADとIhhを誘導 → HSCが活性化（脂肪化は不変）")
    +GLYPH.hep("hep46",40,100,1.3,"")
    +GLYPH.nucleus("nuc46",90,172,42,32,"核")
    +`<g id="tazMove" class="fade">`+GLYPH.tf("taz46",210,250,"TAZ (WWTR1)","var(--B)")+`</g>`
    +GLYPH.tf("tead46",96,176,"TEAD","var(--B)",true)
    +GLYPH.cytokine("ihh46",320,206,"Ihh","var(--C)",true)
    +GLYPH.stellate("hsc46",560,230,"肝星細胞")
    +GLYPH.layer("col46")
    +GLYPH.badge("nofat46",150,368,"脂肪滴の量は","変わらない","var(--D)")
    +GLYPH.pill("kd46",470,64,"肝細胞TAZノックダウン",180),
  build(K){
    const dp=[[128,182],[176,214],[142,246],[196,196],[162,272]];
    return [
      {color:"E",t:2400,cap:"脂肪滴を抱えた肝細胞と、まだ静止している肝星細胞。脂肪化だけがある段階。",run(){
        addDrops(K,"hep46Drops",dp,"lip46");
      }},
      {color:"D",t:3600,cap:"① NASH肝では肝細胞のTAZ（WWTR1）が上がる。TAZは細胞質にとどまらず核へ移行する。",run(){
        K.show(["tazMove"]);
        K.T(()=>K.move("tazMove",0,0,-108,-70,1.5),700);
        K.T(()=>K.pulse("nuc46"),2300);
      }},
      {color:"B",t:4200,cap:"② 核のなかでTAZはTEADと複合体を作り、分泌因子であるIndian hedgehog（Ihh）を転写誘導する。",run(){
        K.unpulse("nuc46");K.show(["tead46"]);
        K.T(()=>{K.pulse("tead46");},600);
        K.T(()=>{K.unpulse("tead46");K.show(["ihh46"]);K.flow(96,190,312,206,"var(--C)",{n:3,dur:1.3,loop:1,r:3});},1900);
      }},
      {color:"B",t:4200,cap:"③ 分泌されたIhhが細胞間を渡ってHSCに届き、線維化遺伝子が動く。このあいだ、肝細胞の脂肪滴の量は変わらない。",run(){
        K.flow(336,210,548,228,"var(--C)",{n:4,dur:1.3,loop:2});
        K.T(()=>{K.morph("hsc46Shape",GLYPH.SPINDLE);K.attr("hsc46Shape","fill","#b0432f");K.text("hsc46Cap","活性化HSC");},1500);
        K.T(()=>K.draw("col46",GLYPH.collagenAt(560,300),{len:150}),2300);
        K.T(()=>K.show(["nofat46"]),3300);
      }},
      {color:"H",t:3600,cap:"④ 肝細胞のTAZを落とすと炎症・細胞死・線維化は戻るが、脂肪化だけは戻らない。脂肪化と線維化を切り離せるスイッチになっている。",run(){
        K.show(["kd46"]);
        K.T(()=>{K.strike(470,80,110,180);},700);
        K.T(()=>{K.markX(110,180,"var(--H)");K.attr("col46","opacity","0.2");K.attr("ihh46","opacity","0.2");},1500);
        K.T(()=>K.pulse("nofat46"),2400);
      }},
    ];
  }
});
