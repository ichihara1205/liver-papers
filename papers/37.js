/* ============================================================
   №37 · Nature Reviews Gastroenterology & Hepatology 2025 · Schwabe RF et al.（Robert F Schwabe, Columbia University）
   HSCの生理的役割とMASLD病態——RSPO3/Wntによるhomeostasis・zonation制御と線維化の統合的理解
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"37", primary:"B",
    title:"HSCの生理的役割とMASLD病態——RSPO3/Wntによるhomeostasis・zonation制御と線維化の統合的理解",
    authors:"Schwabe RF et al.（Robert F Schwabe, Columbia University）",
    journal:"Nature Reviews Gastroenterology & Hepatology",
    year:2025,
    vol:"22:481-499",
    doi:"10.1038/s41575-025-01068-6",
    url:"https://www.nature.com/articles/s41575-025-01068-6",
    catPrimary:"B",
    catSub:["E","A"],
    tags:["B","E"],
    summary:"HSCの「病的役割（線維化）」だけでなく「生理的役割（homeostasis）」を包括的に論じた2025年の決定版総説。HSCがRSPO3（R-spondin 3）を分泌してWnt/β-catenin経路を介した肝細胞のzonation（代謝区域化）を制御すること、HSCがLSECのidentity維持にも関与することを前景に出した。病的環境下ではRSPO3発現が低下し、zonation異常・代謝障害・線維化が三位一体で進行するという統合的視点が新しい。No.09（Sugimoto 2025 Nature RSPO3 KO原著）のコンテキスト総説として位置づけられる。",
    connection:["共培養系にHSCを加えると線維化ドライバーが入ると同時に「zonation支持細胞」も入るという複雑な解釈が必要になる理由を示す。MASHモデルでRSPO3発現変化を追うことがHSC活性化度の新しいモニタリング指標になり得る。No.39（Kisseleva 2025）と組み合わせてHSCの生理的/病的二面性を共培養系設計に反映できる。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析",
    "added": "2026-06-15",
    "abstract_ja": "HSCは線維化の主役として知られるが、健常肝ではビタミンA貯蔵に加え、RSPO3/Wntシグナルを介して肝細胞のzonationと恒常性を支持する生理的役割をもつ。本総説はHSCの生理機能と病的機能を統合し、健常時のzonation支持・angiocrineニッチ機能と、MASLD/MASHでの筋線維芽細胞転換・線維化駆動という二面性を整理する。HSCを単なる線維化細胞ではなく、恒常性維持と疾患進行の両面を担う細胞として再定義し、RSPO3発現変化がHSC活性化のモニタリング指標となりうることを示す。",
    "background": "近年HSCがzonation維持に積極的に関与することが分かり、線維化細胞としての一面的理解では不十分になった。HSCの生理的役割と病的役割を統合し、共培養系でHSCを加えることの意味を再考する必要がある。",
    "achievements": ["HSCの**生理的役割（RSPO3/Wnt経由のzonation・恒常性支持）**を整理した。", "健常時の**angiocrine/ニッチ機能**とMASH時の**線維化駆動**という二面性を統合した。", "**RSPO3発現変化**をHSC活性化のモニタリング指標候補として提示した。"],
    "limitations": ["総説であり生理機能の定量的寄与は今後の検証課題。", "ヒトHSCのzonation支持機能の直接証拠は限定的。", "生理・病理機能の切り替え機構の細部は未解明。"],
    "glossary": [{"term": "RSPO3", "full": "R-spondin 3", "desc": "HSCが産生しWntを増強する因子。肝zonation・恒常性を支持"}, {"term": "angiocrine", "full": "angiocrine signaling", "desc": "血管系細胞が放出するニッチ因子。HSC/LSECが肝細胞恒常性を支持"}, {"term": "zonation", "full": "liver zonation", "desc": "門脈–中心静脈軸の機能勾配。HSC/LSECのニッチ因子が支持"}, {"term": "myofibroblast", "full": "myofibroblast", "desc": "活性化HSCが転換する線維化産生細胞"}],
    "struct": {"model": "総説（文献統合）", "cells": ["HSC", "肝細胞", "LSEC"], "triggers": ["MASH（生理→病理）"], "steatosis": "△", "inflammation": "—", "fibrosis": "○", "readout": ["RSPO3/Wnt", "zonationマーカー", "αSMA（活性化）"], "ignite": "生理的zonation支持HSCがMASHで筋線維芽細胞へ転換し線維化を駆動", "params": [{"name": "HSC二面性（zonation支持↔線維化）", "note": "HSCエージェントに恒常性支持と活性化の二状態を持たせ、RSPO3でモニタリング"}], "todos": ["MASHモデルでRSPO3発現変化をHSC活性化指標として追跡", "共培養にHSCを加える際zonation支持機能も考慮"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m37' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：HSCの生理機能と病的機能を統合</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>文献統合</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>生理×病理</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--G)'>二面性を整理</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m37)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>生理機能</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>RSPO3/Wnt</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>zonation支持</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>恒常性ニッチ</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m37)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>病的機能</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>MASHで活性化</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>線維化駆動</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Schwabe RF et al., Nat Rev Gastroenterol Hepatol (2025)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f37' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>HSCの二面性：zonation支持 ↔ 線維化駆動</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>健常HSC</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>VitA貯蔵</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>RSPO3/Wnt</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>zonation/恒常性支持</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f37)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>MASH環境</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脂質/傷害</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>転換の引き金</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f37)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>筋線維芽細胞</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>αSMA↑</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>線維化駆動</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>RSPO3発現変化がHSC活性化モニタリング指標</text>\n  </svg>"
  }
);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 37 Schwabe 2025 Nat Rev GH: HSC homeostasis/RSPO3総説 */
LP.methods("37", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №37 HSCの二面性：zonation支持から線維化駆動へ ===== */
LP.cinema("37", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("37e","var(--E)")}${GLYPH.arrow("37b","var(--B)")}</defs>`
    +GLYPH.title("HSCの二面性：健常ではRSPO3/Wntでzonationを支持→MASHで筋線維芽細胞へ転換")
    +GLYPH.stellate("hsc37",180,200,"qHSC")
    +`<g id="vita37"><circle cx="180" cy="177" r="8" fill="#e8a040" stroke="#c08020" stroke-width="1.2"/><text x="200" y="168" font-size="8.5" fill="#c08020">VitA</text></g>`
    +GLYPH.hep("hep37",380,100,0.7,"肝細胞")
    +`<g id="rspo37" class="fade">`
      +GLYPH.cytokine("rspo3_37",300,230,"RSPO3","var(--E)")
      +GLYPH.tag("wnt37",380,280,"Wnt/β-catenin","var(--E)",110)
    +`</g>`
    +`<g id="zonOK37" class="fade"><text x="480" y="230" font-size="10" fill="var(--E)" font-weight="600">zonation維持 ✓</text></g>`
    +`<g id="mashEnv37" class="fade">`
      +GLYPH.tag("mash37",120,310,"MASH環境","var(--D)",80)
      +GLYPH.metab("ffa37",60,350,"FFA","var(--D)")
    +`</g>`
    +`<g id="myof37" class="fade">`
      +GLYPH.tag("rspoLoss37",300,350,"RSPO3↓","var(--B)",70)
    +`</g>`
    +GLYPH.layer("col37"),
  build(K){
    return [
      {color:"E",t:2400,cap:"健常肝。qHSCはVitAを蓄え、RSPO3/Wntリガンドを分泌して肝細胞のzonationと恒常性を支えている。",run(){
        K.show(["rspo37"]);
        K.flow(204,200,300,228,"var(--E)",{n:2,dur:0.9,loop:2});
        K.T(()=>K.flow(310,230,380,275,"var(--E)",{n:2,dur:0.8,loop:2}),500);
      }},
      {color:"E",t:3200,cap:"① Wnt/β-cateninシグナルが肝細胞に到達し、Zone 3特異的な代謝遺伝子プログラム（CYP2E1, GLUL等）を維持する。",run(){
        K.flow(390,280,440,180,"var(--E)",{n:3,dur:1.0,loop:2});
        K.T(()=>{K.show(["zonOK37"]);K.pulse("wnt37");},1000);
        K.T(()=>K.unpulse("wnt37"),2400);
      }},
      {color:"D",t:3800,cap:"② MASH環境（脂質過剰・傷害シグナル）がHSCに持続的ストレスを与え、形質転換の引き金を引く。",run(){
        K.show(["mashEnv37"]);
        K.flow(132,310,180,222,"var(--D)",{n:2,dur:1.1,loop:2});
        K.T(()=>K.flow(72,350,180,222,"var(--D)",{n:2,dur:1.1,loop:2}),400);
        K.T(()=>{K.attr("vita37","opacity","0.2");K.attr("zonOK37","opacity","0.3");},2200);
      }},
      {color:"B",t:3600,cap:"③ HSCが筋線維芽細胞に転換し線維化を駆動。RSPO3発現が変化し活性化モニタ指標となる。zonation支持→線維化という「二面性」がHSCの本質。",run(){
        K.show(["myof37"]);
        K.morph("hsc37Shape",GLYPH.SPINDLE);K.attr("hsc37Shape","fill","#b0432f");K.text("hsc37Cap","活性化HSC");
        K.attr("rspo37","opacity","0.15");
        K.T(()=>K.draw("col37",GLYPH.collagenAt(180,260),{len:150}),800);
      }},
    ];
  }
});
