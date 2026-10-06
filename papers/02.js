/* ============================================================
   №02 · Cell Metabolism 2024 · Zhang J, Wang Y, … Holmdahl R, et al.
   NCF1がKupffer細胞のフェロトーシス感受性を制御しMASHを悪化させる
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"02",
    added:"2026-05-29",
    title:"NCF1がKupffer細胞のフェロトーシス感受性を制御しMASHを悪化させる",
    authors:"Zhang J, Wang Y, … Holmdahl R, et al.",
    journal:"Cell Metabolism",
    year:2024,
    vol:"36(8), 1745–1763.e6",
    doi:"10.1016/j.cmet.2024.05.008",
    url:"https://pubmed.ncbi.nlm.nih.gov/38851189/",
    primary:"C", tags:["D","H"],
    approach:"in vivo (mouse) ＋ ヒト試料・遺伝学",
    struct:{
      model:"mixed", cells:["Kupffer細胞","肝細胞","単球由来MΦ"], triggers:["酸化リン脂質(OxPL)","鉄","MCD/高脂肪食"],
      steatosis:"○", inflammation:"○", fibrosis:"△", readout:["KC鉄沈着","脂質過酸化(フェロトーシス)","ヘプシジン","MoMΦ浸潤"],
      ignite:"NCF1→OxPL→TLR4→ヘプシジン→KC鉄沈着→フェロトーシス。高糖高脂質＋好気だとKC自体が脱落しうる（共培養で要モニタ）。",
      params:[{name:"鉄・OxPL濃度 → KCフェロトーシス確率",note:"細胞死の確率ルール"},{name:"KC死 → MoMΦ置換確率",note:"補充ダイナミクス"}],
      todos:["KC生存・自己複製を共培養でモニタ（好気でフェロトーシス脱落注意）","OxPL/鉄もLPSに加えヒット軸候補に","リードアウトにKC鉄沈着/脂質過酸化/ヘプシジンを追加"]
    },
    figure:"<svg viewBox='0 0 640 230' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar02' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 Z' fill='var(--ink-soft)'/></marker></defs><g font-size='11.5' fill='var(--ink)'><rect x='8' y='30' width='140' height='48' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.5'/><text x='78' y='51' text-anchor='middle'>マクロファージ</text><text x='78' y='68' text-anchor='middle' font-size='12' fill='var(--C)'>NCF1↑</text><rect x='176' y='30' width='128' height='48' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='240' y='58' text-anchor='middle'>酸化リン脂質 (OxPL)↑</text><rect x='332' y='30' width='128' height='48' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='396' y='51' text-anchor='middle'>肝細胞 TLR4</text><text x='396' y='68' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>感知</text><rect x='488' y='30' width='140' height='48' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='558' y='58' text-anchor='middle'>ヘプシジン↑</text><rect x='8' y='140' width='140' height='48' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='78' y='168' text-anchor='middle'>KC 鉄沈着</text><rect x='176' y='140' width='140' height='48' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='2'/><text x='246' y='161' text-anchor='middle'>KC フェロトーシス</text><text x='246' y='178' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>常在KC脱落</text><rect x='344' y='140' width='128' height='48' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.5'/><text x='408' y='168' text-anchor='middle'>MoMΦ 浸潤</text><rect x='500' y='140' width='128' height='48' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='564' y='168' text-anchor='middle' fill='var(--B)'>MASH 悪化</text><line x1='148' y1='54' x2='174' y2='54' stroke='var(--ink-soft)' marker-end='url(#ar02)'/><line x1='304' y1='54' x2='330' y2='54' stroke='var(--ink-soft)' marker-end='url(#ar02)'/><line x1='460' y1='54' x2='486' y2='54' stroke='var(--ink-soft)' marker-end='url(#ar02)'/><path d='M558,78 C558,110 78,108 78,138' fill='none' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#ar02)'/><line x1='148' y1='164' x2='174' y2='164' stroke='var(--ink-soft)' marker-end='url(#ar02)'/><line x1='316' y1='164' x2='342' y2='164' stroke='var(--ink-soft)' marker-end='url(#ar02)'/><line x1='472' y1='164' x2='498' y2='164' stroke='var(--ink-soft)' marker-end='url(#ar02)'/></g></svg>",
    method_figure:"<svg viewBox='0 0 640 240' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m02' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><g font-size='12' fill='var(--ink)'><text x='20' y='22' font-size='12' fill='var(--ink-soft)'>食餌でMASH誘導 × NCF1遺伝子型を操作 → KC運命を解析</text><rect x='18' y='38' width='150' height='50' rx='8' fill='var(--paper)' stroke='var(--D)' stroke-width='1.5'/><text x='93' y='60' text-anchor='middle' font-size='12'>MASH食</text><text x='93' y='77' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>MCD食 / 高脂肪食</text><rect x='18' y='104' width='150' height='52' rx='8' fill='var(--paper)' stroke='var(--C)' stroke-width='1.5'/><text x='93' y='124' text-anchor='middle' font-size='11.5'>MΦ特異的 NCF1-KO</text><text x='93' y='141' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>細胞種を切り分け</text><rect x='18' y='170' width='150' height='52' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='93' y='190' text-anchor='middle' font-size='11.5'>NCF1-90H ノックイン</text><text x='93' y='207' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>ヒト低機能多型 再現</text><rect x='250' y='96' width='150' height='66' rx='8' fill='var(--paper-2)' stroke='var(--line)'/><text x='325' y='124' text-anchor='middle' font-size='12'>肝 KC を解析</text><text x='325' y='142' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>鉄/脂質過酸化/浸潤</text><rect x='452' y='40' width='172' height='50' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='538' y='61' text-anchor='middle' font-size='11.5'>KCフェロトーシス</text><text x='538' y='78' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>常在KC脱落・MASH</text><rect x='452' y='104' width='172' height='50' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='538' y='125' text-anchor='middle' font-size='11.5'>NCF1-90Hで軽減</text><text x='538' y='141' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>治療標的性</text><rect x='452' y='168' width='172' height='50' rx='8' fill='var(--paper)' stroke='var(--G)' stroke-width='1.5'/><text x='538' y='189' text-anchor='middle' font-size='11.5'>ヒトMASLD試料</text><text x='538' y='205' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>NCF1発現 相関</text><path d='M168,62 C200,62 220,120 248,124' fill='none' stroke='var(--accent)' marker-end='url(#m02)'/><path d='M168,130 C200,130 220,129 248,129' fill='none' stroke='var(--accent)' marker-end='url(#m02)'/><path d='M168,196 C200,196 220,138 248,134' fill='none' stroke='var(--accent)' marker-end='url(#m02)'/><path d='M400,120 C424,120 428,68 450,65' fill='none' stroke='var(--accent)' marker-end='url(#m02)'/><path d='M400,129 C424,129 428,128 450,129' fill='none' stroke='var(--accent)' marker-end='url(#m02)'/><path d='M400,138 C424,138 428,190 450,193' fill='none' stroke='var(--accent)' marker-end='url(#m02)'/></g></svg>",
    abstract:"Kupffer細胞(KC)の自己複製能の低下はMASHの炎症を招く。本研究はNCF1をKCの鉄恒常性の重要制御因子として同定。NCF1はヒトMASLD・MASHマウスの肝マクロファージ/樹状細胞で発現上昇する。マクロファージのNCF1(樹状細胞のものではない)がKCの鉄過剰・フェロトーシス・単球由来MΦ浸潤を引き起こしMASHを増悪。機序として、マクロファージNCF1が増やす酸化リン脂質がTLR4依存的に肝細胞のヘプシジン産生を促し、KC鉄沈着と続くKCフェロトーシスを招く。ヒト低機能多型NCF190HはマウスでKCフェロトーシスとMASHを軽減した。",
    abstract_ja:"MASHでは常在KCの自己複製が破綻して炎症が引き起こされるが、その引き金は不明だった。本研究はKCの鉄恒常性を司る重要因子としてNCF1を同定した。NCF1はヒトMASLDおよびMASHマウスの肝MΦと樹状細胞で発現が上昇しており、このうちマクロファージのNCF1は(樹状細胞のNCF1とは異なり)KCの鉄過剰・フェロトーシス・単球由来MΦ浸潤を誘発してMASH進行を悪化させた。機序としては、マクロファージNCF1によって増加した酸化リン脂質がTLR4依存的に肝細胞のヘプシジン産生を促し、その結果KCに鉄が沈着して続くフェロトーシスをもたらす。実際、ヒトの低機能多型NCF190Hを導入したマウスでは、KCフェロトーシスとMASHがいずれも軽減した。",
    background:"MASHでは常在KCが減少して単球由来MΦに置き換わる現象が知られているが、KCが「なぜ・どのように」失われるのかという分子機構は不明のままだった。とりわけ、鉄や酸化ストレスとKCの運命を結ぶ経路は明らかでなく、それがヒトでも成り立つのかという妥当性も大きな課題であった。",
    achievements:[
      "NCF1(NADPHオキシダーゼ構成因子)をKC鉄恒常性の制御因子として同定。",
      "細胞種特異的に切り分け：マクロファージNCF1がKC鉄過剰・フェロトーシス・MoMΦ浸潤を駆動(樹状細胞NCF1は不関与)。",
      "経路解明：マクロファージNCF1→酸化リン脂質↑→肝細胞TLR4→ヘプシジン↑→KC鉄沈着→KCフェロトーシス。",
      "ヒト遺伝学的裏付け：低機能多型NCF190HがKCフェロトーシスとMASHを軽減＝治療標的性。"
    ],
    limitations:[
      "主にマウスモデル(MCD食・高脂肪食)依存。ヒトは試料・遺伝学的相関が中心。",
      "NCF1/NADPHオキシダーゼは全身の自然免疫に必須で、阻害の安全域や肝特異的介入の実現性は別途検討要。",
      "フェロトーシス以外のKC death/置換機構との相対寄与は未整理。"
    ],
    connection:[
      "「免疫系の不在→KCを入れてセカンドヒット」戦略の機構的支柱。OxPL–TLR4–ヘプシジン–鉄–フェロトーシス経路を提供し、LPSに加え酸化リン脂質・鉄もヒット軸候補に。",
      "リードアウト候補：KC鉄沈着・脂質過酸化(フェロトーシス指標)、ヘプシジン、MoMΦ浸潤マーカー。",
      "重要注意：高糖・高脂質＋好気条件でKC自身がフェロトーシスで脱落しうる→共培養でのKC生存・自己複製モニタリングが必要。",
      "ABM：KCのフェロトーシス／単球由来MΦへの置換を「細胞死・補充の確率ルール」として実装する好例。鉄・OxPL濃度を状態変数に。",
      "#01との接続：#01はLAM特異的なlp-PLA2(PLA2G7)と空間メタボロームでのリン脂質蓄積の関連を示唆し、考察でOxPLによるKC鉄沈着・フェロトーシスに言及。本論文はそのOxPL–KC鉄–フェロトーシス軸をマウスで機構的に示した。OxPLが共通ハブ。"
    ],
    glossary:[
      {term:"NCF1", full:"neutrophil cytosolic factor 1", desc:"NADPHオキシダーゼ構成因子。KC鉄恒常性を制御"},
      {term:"NADPH oxidase", full:"NADPH oxidase complex", desc:"活性酸素産生酵素複合体。NCF1が構成因子"},
      {term:"KC", full:"Kupffer cell", desc:"肝常在マクロファージ。炎症・セカンドヒットの担い手"},
      {term:"TLR4", full:"Toll-like receptor 4", desc:"自然免疫受容体。OxPLを感知しヘプシジン産生を促す"},
      {term:"OxPL", full:"oxidized phospholipid", desc:"酸化リン脂質。TLR4を介しヘプシジン誘導、KC運命のハブ"},
      {term:"hepcidin", full:"hepcidin (HAMP)", desc:"ヘプシジン。鉄代謝制御ホルモン。KC鉄沈着を促す"},
      {term:"ferroptosis", full:"ferroptosis", desc:"鉄依存・脂質過酸化による細胞死。KC脱落の機構"},
      {term:"MoMΦ", full:"monocyte-derived macrophage", desc:"単球由来マクロファージ。常在KC減少時に浸潤"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("02", [{ic:"mouse",cap:"MASH食マウス"},{ic:"geneko",cap:"NCF1遺伝子改変"},{ic:"macrophage",cap:"KC"},{ic:"liver",cap:"鉄/フェロトーシス"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 02 Zhang Cell Metab 2024: MASHマウス+ヒト試料、NCF1-KO、フェロトーシスアッセイ、IHC、ELISA(ヘプシジン) */
LP.methods("02", ["mouse","human","crispr","qpcr","wb","facs","elisa","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №02 NCF1がKCフェロトーシスを制御しMASH悪化 ===== */
LP.cinema("02", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("02")}${GLYPH.arrow("02","var(--C)")}</defs>`+GLYPH.title("NCF1→OxPL→TLR4→ヘプシジン→KC鉄沈着→フェロトーシス→MoMφ浸潤")
    +GLYPH.hep("hep",30,70,1.25,"肝細胞")
    +`<g id="kc" transform="translate(380,250)"><path id="kcBody" d="M0,-30 C24,-33 39,-12 32,9 C44,24 21,39 0,32 C-24,42 -42,21 -32,2 C-44,-18 -21,-35 0,-30 Z" fill="#5d6470" stroke="#828a96" stroke-width="1.5"/><circle cx="-4" cy="2" r="8" fill="#3a3f48"/><text x="0" y="56" text-anchor="middle" font-size="10" fill="var(--ink-soft)">常在クッパー細胞</text></g>`
    +GLYPH.receptor("tlr4",262,185,"TLR4","var(--C)")
    +GLYPH.tag("ncf1",405,265,"NCF1","var(--C)",54,true)
    +GLYPH.cytokine("hepc",330,170,"ヘプシジン","var(--C)",true)
    +`<g id="iron" class="fade"></g>`
    +`<g id="momf" class="fade">`+GLYPH.mac("mo1",300,360,"単球由来MΦ(浸潤)","#9c4f6c")+`</g>`
    +GLYPH.stellate("hsc",610,310,"肝星細胞")+GLYPH.layer("collagen")
    +`<g id="oxpl" class="fade"></g>`,
  build(K){
    const dp=[[110,150],[160,180],[130,225],[185,210],[150,260]];
    const oxpos=[[210,150],[230,185],[205,215]];
    const iron=[[372,245],[390,252],[380,265],[396,238],[366,258]];
    return [
      {color:"E",t:2400,cap:"健常な肝類洞。肝細胞（TLR4を発現）と常在クッパー細胞（KC）が並ぶ。",run(){}},
      {color:"D",t:3000,cap:"① 過栄養で肝細胞に脂肪滴が蓄積する。マクロファージのNCF1が活性酸素を介して酸化リン脂質（OxPL）を増やす。",run(){
        addDrops(K,"hepDrops",dp,"lip02"); K.show(["oxpl"]);
        oxpos.forEach((p,i)=>K.T(()=>{K.$("oxpl").insertAdjacentHTML("beforeend",GLYPH.metab("ox"+i,p[0],p[1],i===1?"OxPL":"","var(--C)"));},700+i*200));
      }},
      {color:"C",t:4400,cap:"② 増えたOxPLが肝細胞のTLR4を介してヘプシジン産生を促す→KCに鉄が沈着し、フェロトーシスを起こしやすくなる。",run(){
        K.show(["ncf1"]); K.pulse("ncf1");
        oxpos.forEach((p,i)=>K.flow(p[0],p[1],262,185,"var(--C)",{n:1,dur:1.1,loop:2}));
        K.T(()=>{K.show(["hepc"]); K.flow(338,178,380,236,"var(--C)",{loop:2});},1400);
        K.T(()=>{K.show(["iron"]); iron.forEach((p,i)=>K.T(()=>{K.cE("circle",{cx:p[0],cy:p[1],r:3.6,fill:"#8a5a2a",stroke:"#5a3a18","stroke-width":"0.6"},K.$("iron"));},i*180));},2400);
        K.T(()=>{K.attr("kcBody","fill","#7a4a4a");},3600);
      }},
      {color:"C",t:3400,cap:"③ 常在KCがフェロトーシスで脱落し、入れ替わるように単球由来マクロファージ（MoMφ）が浸潤して炎症を増幅する。",run(){
        K.attr("kc","opacity","0.25"); shrinkChildren(K,"iron");
        K.T(()=>{K.show(["momf"]); K.move("momf",0,0,90,-110,1.4);},800);
        K.T(()=>radiate(K,390,250,"var(--C)"),1900);
      }},
      {color:"B",t:3000,cap:"④ 炎症が増幅してMASHが悪化する。HSCへの波及・線維化は要旨では直接示されておらず、概念上の接続。",run(){
        K.flow(420,250,610,310,"var(--B)",{dur:1.2,loop:2});
        K.T(()=>{K.morph("hscShape",GLYPH.SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化HSC");},1000);
        K.T(()=>K.draw("collagen",GLYPH.collagenAt(610,370),{len:150}),1700);
      }},
    ];
  }
});
