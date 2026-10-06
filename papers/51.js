/* ============================================================
   №51 · Nat Genet 2026 · Papachristoforou E, Kong K, Colella F, …, Fallowfield JA, Ramachandran P
   ヒト肝の単一細胞アトラス（65万細胞）——線維化巣に集まるOLR1⁺の瘢痕関連マクロファージ(SAMac)を治療標的に
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"51", primary:"C",
    title:"ヒト肝の単一細胞アトラスが見つけた瘢痕関連マクロファージ——OLR1⁺の炎症性SAMacを慢性肝疾患の治療標的に",
    authors:"Papachristoforou E, Kong K, Colella F, …, Kendall TJ, Fallowfield JA, Ramachandran P",
    journal:"Nat Genet",
    year:2026,
    vol:"—",
    doi:"10.1038/s41588-026-02774-w",
    url:"https://doi.org/10.1038/s41588-026-02774-w",
    tags:["C","B","H"],
    approach:"健常42例・慢性肝疾患35例の肝から約65万細胞の単一細胞アトラス（125の細胞状態）＋ 空間解析で線維化巣の局在 ＋ ヒト共培養・多系統スフェロイドでのOLR1標的機能実験 ＋ マウス慢性肝疾患での検証 ＋ 複数病因・臨床転帰との関連",
    added:"2026-10-06",
    abstract_ja:"慢性肝疾患（CLD）は線維化を経て不良な転帰に至り、線維化を調節するマクロファージは魅力的な治療標的だが、どのマクロファージ亜集団が線維化を駆動するのかははっきりしていなかった。本研究は健常42例と慢性肝疾患35例の肝から649,295細胞を集めた単一細胞アトラスを作り、転写的に異なる125の細胞状態を同定した。そのなかで疾患で増える瘢痕関連マクロファージ（TREM2⁺のSAMac）を2種類に解きほぐし、スカベンジャー受容体OLR1を発現する炎症性の亜集団が線維化巣に空間的に集積することを示した。肝でのOLR1高発現は複数の病因にわたって線維化の強さと相関し、MASLDでは患者の不良な転帰とも関連した。炎症性OLR1⁺SAMacはマウスの慢性肝疾患でも拡大し、マクロファージのOLR1を標的にするとヒトの共培養や多系統スフェロイドで線維化活性が抑えられた。本アトラスは慢性肝疾患の疾患関連細胞状態を調べる参照となり、OLR1を線維化を和らげる治療標的として提示する。",
    background:"マクロファージは肝線維化の調節役として知られ、創薬標的として注目されてきたが、肝マクロファージは常在クッパー細胞（KC）と流入する単球由来マクロファージ、さらにTREM2⁺の瘢痕関連マクロファージ（SAMac）など多様な亜集団からなる。どの亜集団が実際に線維化を駆動するのかが絞り込めておらず、標的を定めるには病因をまたぐ大規模なヒト単一細胞アトラスと空間情報、そして機能的な検証が必要とされていた。",
    achievements:[
      "健常42例・慢性肝疾患35例の肝から**649,295細胞の単一細胞アトラス**を構築し、**125の転写的に異なる細胞状態**を同定した（病因横断の参照データ）。",
      "疾患で増えるTREM2⁺瘢痕関連マクロファージ（SAMac）を2種類に解き、**スカベンジャー受容体OLR1を発現する炎症性亜集団**が**線維化巣に空間的に集積**することを示した。",
      "肝の**OLR1高発現が複数病因で線維化の強さと相関**し、MASLDでは**患者の不良な転帰とも関連**した（バイオマーカー・予後因子）。",
      "炎症性OLR1⁺SAMacはマウス慢性肝疾患でも拡大し、**マクロファージOLR1の標的化がヒト共培養・多系統スフェロイドで線維化活性を抑制**（治療標的性）。"
    ],
    limitations:[
      "機能実験は**ヒト共培養・スフェロイドとマウス**が中心で、OLR1標的化のヒト生体での有効性・安全性は臨床前段階。",
      "OLR1⁺SAMacが**どの前駆（常在KC由来か単球由来か）から、どの順で生じるか**という由来・分化経路の時間軸は本アトラスの横断データからは限定的。",
      "OLR1がHSC活性化を促す**下流の分子機構（リガンド・シグナル）**の詳細は本文の範囲では完全には解かれていない。",
      "アトラスは主に末期〜進行例を含むため、**MASLDの早期から進行までの連続的な細胞状態の遷移**は別途縦断研究が必要。"
    ],
    connection:[
      "**どのマクロファージを入れるかの指針**。自分の系は免疫系の不在を補うためKC（iKC）を入れてセカンドヒットで線維化を点火する戦略だが、本論文は線維化を駆動するのが常在KCそのものより炎症性OLR1⁺SAMacだと示す。共培養の読み出しにOLR1・TREM2を入れ、『線維化巣型のマクロファージが立っているか』を評価軸にできる。",
      "**空間配置の重要性**：OLR1⁺SAMacは線維化巣に局在する。酸素透過膜＋4細胞の系で、マクロファージとHSCが同じ巣に集まる局所を作れるかが点火条件になりうる。",
      "**ABM実装**：マクロファージ状態を『常在KC→TREM2⁺SAMac→OLR1⁺炎症性SAMac』の遷移としてモデル化し、OLR1⁺の密度→HSC活性化確率を局所ルールにできる。",
      "**既収録との接続**：#22（LAM様KC・TREM2冗長性）・#10（GPNMB⁺ MetMac）・#28（resKC/moMφ総説）・#01（LAM）と同じマクロファージ亜集団の系譜。本論文はヒト大規模アトラス＋空間＋機能で『線維化を駆動する亜集団＝OLR1⁺SAMac』を名指しした点が新しい。#16（TIM4依存efferocytosisと点火）と合わせKCの機能状態がHSC運命を左右する像が強まる。"
    ],
    glossary:[
      {term:"SAMac",full:"scar-associated macrophage",desc:"瘢痕（線維化巣）に関連するマクロファージ。TREM2⁺で疾患肝に増える"},
      {term:"OLR1",full:"oxidized low-density lipoprotein receptor 1 (LOX-1)",desc:"酸化LDLスカベンジャー受容体。炎症性SAMacの目印で線維化と相関、治療標的"},
      {term:"TREM2",full:"triggering receptor expressed on myeloid cells 2",desc:"脂質応答性の受容体。瘢痕関連マクロファージ（SAMac）のマーカー"},
      {term:"CLD",full:"chronic liver disease",desc:"慢性肝疾患。線維化を経て肝硬変・不良転帰に至る"},
      {term:"KC",full:"Kupffer cell",desc:"肝常在マクロファージ。SAMacとは別系統で、炎症・線維化の文脈で状態が変わる"},
      {term:"moMφ",full:"monocyte-derived macrophage",desc:"単球由来マクロファージ。疾患時に肝へ流入しSAMacの供給源になりうる"},
      {term:"single-cell atlas",full:"single-cell atlas",desc:"多数の細胞を単一細胞解像度で分類した参照地図。ここでは約65万細胞・125状態"}
    ],
    struct:{
      model:"ヒト組織",
      cells:["肝マクロファージ(SAMac/KC/moMφ)","HSC","肝細胞","(アトラス全体)"],
      triggers:["慢性肝障害(複数病因)","OLR1⁺SAMacの集積"],
      steatosis:"△", inflammation:"○", fibrosis:"○",
      readout:["OLR1/TREM2発現","線維化巣への空間集積","共培養/スフェロイドの線維化活性","臨床転帰"],
      ignite:"炎症性OLR1⁺SAMacが線維化巣に集積しHSC活性化を駆動。『どのマクロファージが点火するか』を名指しした。",
      params:[
        {name:"マクロファージ状態遷移(常在KC→TREM2⁺SAMac→OLR1⁺SAMac)",note:"状態機械としてモデル化"},
        {name:"局所OLR1⁺SAMac密度 → HSC活性化確率",note:"線維化巣の局所ルール"}
      ],
      todos:[
        "共培養の読み出しにOLR1/TREM2を追加し『線維化巣型マクロファージ』が立つか評価",
        "マクロファージとHSCが同じ局所に集まる巣を作れるか（酸素膜＋配置）検討",
        "OLR1標的化を線維化ネガコンとして自系に導入できるか検討"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f51' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='f51h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>65万細胞のアトラスで線維化を駆動するマクロファージを名指し：OLR1⁺ SAMac</text><rect x='14' y='38' width='150' height='96' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.3'/><text x='89' y='58' text-anchor='middle' font-size='10' fill='var(--C)' font-weight='600'>肝マクロファージ</text><text x='89' y='77' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>常在KC</text><text x='89' y='93' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>TREM2⁺ SAMac</text><text x='89' y='111' text-anchor='middle' font-size='9.5' fill='var(--C)'>OLR1⁺ 炎症性SAMac</text><text x='89' y='126' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>（線維化巣に集積）</text><path d='M166,86 L184,86' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f51)'/><rect x='188' y='50' width='158' height='72' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='267' y='74' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>線維化巣</text><text x='267' y='92' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>OLR1⁺SAMac＋HSCが</text><text x='267' y='107' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>同じ局所に集まる</text><path d='M346,86 L364,86' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f51)'/><rect x='368' y='50' width='120' height='72' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='428' y='74' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>HSC活性化</text><text x='428' y='92' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→ 線維化</text><text x='428' y='108' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>複数病因で相関</text><rect x='502' y='50' width='128' height='72' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='566' y='72' text-anchor='middle' font-size='10' fill='var(--H)' font-weight='600'>OLR1 標的化</text><text x='566' y='90' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>共培養/スフェロイド</text><text x='566' y='106' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>で線維化活性↓</text><path d='M428,122 C428,140 500,100 500,92' fill='none' stroke='var(--H)' stroke-width='1.3' stroke-dasharray='4 3' marker-end='url(#f51h)'/><rect x='14' y='150' width='616' height='64' rx='8' fill='var(--paper-2)' stroke='var(--line)'/><text x='26' y='170' font-size='9.5' fill='var(--ink-soft)'>アトラス：健常42例＋慢性肝疾患35例、649,295細胞、125の細胞状態。病因横断の参照データ。</text><text x='26' y='189' font-size='9.5' fill='var(--ink-soft)'>臨床：肝OLR1高発現はMASLDの不良転帰と関連 → 予後バイオマーカー候補。</text><text x='26' y='206' font-size='9' fill='var(--C)'>目印：OLR1（=LOX-1、酸化LDL受容体） ＋ TREM2（SAMacマーカー）</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m51' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：アトラス構築 → 空間局在 → 機能検証</text><rect x='12' y='40' width='150' height='60' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='87' y='62' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>単一細胞アトラス</text><text x='87' y='79' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>健常42＋CLD35例</text><text x='87' y='93' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>649,295細胞/125状態</text><path d='M162,70 L180,70' stroke='var(--accent)' marker-end='url(#m51)'/><rect x='183' y='40' width='150' height='60' rx='7' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.4'/><text x='258' y='62' text-anchor='middle' font-size='9.5' fill='var(--C)' font-weight='600'>SAMacを2種に分類</text><text x='258' y='79' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>OLR1⁺炎症性を発見</text><path d='M333,70 L351,70' stroke='var(--accent)' marker-end='url(#m51)'/><rect x='354' y='40' width='150' height='60' rx='7' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='429' y='62' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>空間解析</text><text x='429' y='79' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>線維化巣への集積</text><rect x='512' y='40' width='118' height='60' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='571' y='62' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>臨床相関</text><text x='571' y='79' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>病因横断・転帰</text><path d='M504,70 L510,70' stroke='var(--accent)' marker-end='url(#m51)'/><rect x='120' y='130' width='200' height='70' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.4'/><text x='220' y='152' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>ヒト共培養/多系統スフェロイド</text><text x='220' y='170' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>OLR1標的化→線維化活性↓</text><text x='220' y='186' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>＋マウスCLDで拡大を確認</text><path d='M258,100 L224,128' stroke='var(--accent)' marker-end='url(#m51)'/><rect x='360' y='130' width='268' height='70' rx='7' fill='var(--paper)' stroke='var(--H)' stroke-width='1.5'/><text x='494' y='152' text-anchor='middle' font-size='10' fill='var(--H)' font-weight='600'>アウトカム</text><text x='494' y='170' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>OLR1⁺SAMac＝線維化を駆動する亜集団</text><text x='494' y='186' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→ 治療標的・予後バイオマーカー</text><path d='M320,165 L358,165' stroke='var(--accent)' marker-end='url(#m51)'/></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("51", [{ic:"human",cap:"ヒト肝 健常42＋慢性肝疾患35例"}, {ic:"omics",cap:"単一細胞アトラス 649,295細胞・125状態"}, {ic:"macrophage",cap:"OLR1⁺炎症性SAMac（線維化巣に集積）"}, {ic:"stellate",cap:"HSC活性化→線維化"}, {ic:"drug",cap:"OLR1標的化で線維化活性↓"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 51 Papachristoforou/Ramachandran Nat Genet 2026: ヒト単一細胞アトラス(scRNA)+空間TX+ヒト共培養/スフェロイド+マウスCLD+IF */
LP.methods("51", ["human","mouse","invitro","scrna","spatial","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №51 OLR1⁺SAMacが線維化巣に集積しHSCを活性化、OLR1標的化で遮断 ===== */
LP.cinema("51", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("51",'var(--C)')}${GLYPH.arrow("51h",'var(--H)')}</defs>`
    +GLYPH.title("常在KC → TREM2⁺SAMac → OLR1⁺炎症性SAMac が線維化巣に集積しHSCを活性化")
    +GLYPH.mac("kc51",120,150,"常在KC","#9c4f6c")
    +`<g id="samac51" class="fade">`+GLYPH.mac("sa1",330,150,"TREM2⁺ SAMac","#b0583a")+`</g>`
    +`<g id="olr51" class="fade">`+GLYPH.mac("ol1",500,250,"","#a23b3b")+GLYPH.mac("ol2",560,290,"","#a23b3b")+GLYPH.mac("ol3",470,300,"OLR1⁺ SAMac","#a23b3b")+`</g>`
    +GLYPH.receptor("olr51r",500,222,"OLR1","var(--H)")
    +GLYPH.stellate("hsc51",360,330,"肝星細胞")
    +GLYPH.layer("col51")
    +GLYPH.tag("scar51",520,200,"線維化巣","var(--B)",94,true)
    +GLYPH.pill("anti51",610,110,"抗OLR1",96)
    +GLYPH.badge("fib51",620,300,"線維化","活性↓","var(--B)"),
  build(K){
    return [
      {color:"C",t:2600,cap:"① 健常肝の常在クッパー細胞（KC）。定常状態で炎症は起きていない。",run(){}},
      {color:"C",t:3400,cap:"② 慢性の傷害で、脂質に応答するTREM2⁺の瘢痕関連マクロファージ（SAMac）が現れる。",run(){
        K.show(["samac51"]);
        K.T(()=>K.flow(140,150,320,150,"var(--C)",{n:2,dur:1.1,loop:2}),400);
      }},
      {color:"B",t:4000,cap:"③ そのなかでスカベンジャー受容体OLR1を出す炎症性の亜集団が、HSCと同じ線維化巣に空間的に集積してHSCを活性化する。",run(){
        K.show(["olr51","scar51","olr51r"]);
        K.T(()=>{K.flow(330,160,480,250,"var(--C)",{n:3,dur:1.2,loop:2});},500);
        K.T(()=>{K.pulse("olr51r");K.flow(490,270,380,320,"var(--B)",{n:2,dur:1.1,loop:2});},1800);
        K.T(()=>{K.morph("hsc51Shape",GLYPH.SPINDLE);K.attr("hsc51Shape","fill","#b0432f");K.text("hsc51Cap","活性化HSC");K.draw("col51",GLYPH.collagenAt(360,385),{len:150});},2900);
      }},
      {color:"H",t:3200,cap:"④ マクロファージのOLR1を標的にすると、線維化を駆動する信号が弱まりHSCの活性化が抑えられる。",run(){
        K.show(["anti51","fib51"]);
        K.T(()=>{K.flow(610,126,500,222,"var(--H)",{n:3,dur:1.2,loop:2});},400);
        K.T(()=>{K.markX(500,222,"var(--H)");K.attr("olr51","opacity","0.35");},1700);
        K.T(()=>K.attr("fib51","opacity","0.4"),2500);
      }},
    ];
  }
});
