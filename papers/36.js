/* ============================================================
   №36 · Frontiers in Medicine 2024 · Zhang Y et al.
   HSC活性化を駆動する6シグナル経路——TGF-β/Smad・Wnt・Hedgehog・Notch・YAP-TAZ・PI3K-AKTの総合的整理
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"36", primary:"B",
    title:"HSC活性化を駆動する6シグナル経路——TGF-β/Smad・Wnt・Hedgehog・Notch・YAP-TAZ・PI3K-AKTの総合的整理",
    authors:"Zhang Y et al.",
    journal:"Frontiers in Medicine",
    year:2024,
    vol:"11:1454980",
    doi:"10.3389/fmed.2024.1454980",
    url:"https://www.frontiersin.org/articles/10.3389/fmed.2024.1454980/full",
    catPrimary:"B",
    catSub:[],
    tags:["B"],
    summary:"HSC活性化を引き起こす6つの主要シグナル経路をまとめた最新レビュー。TGF-β/Smad経路が線維化の最主要アゴニストであることに加えて、Wnt/β-catenin・Hedgehog・Notch・YAP/TAZ・PI3K/AKTの各経路をHSC活性化の観点から整理。各経路はクロストークしながらHSCをquiescent状態からactivated myofibroblast状態へと転換させる。TGF-β→Smad2/3経路はα-SMAやCol1A1転写を直接駆動するコア軸であり、PAI-1等を介したECM分解抑制も加わって線維化を加速する。薬理的介入点として各経路の下流ノードが提示されており、ABMのパラメータ設計の経路一覧として機能する。",
    connection:["KC由来のTGF-β・TNF-α・IL-1βがHSCをどのシグナル経路で活性化するかを考えるとき、TGF-β/Smad＋PI3K/AKTの二本柱が最重要。ABMでのHSC活性化ルール実装時にこの経路マップを参照する。No.37（Schwabe 2025 Nat Rev GH）の上位に置く経路詳細参照として活用。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析",
    "added": "2026-06-15",
    "abstract_ja": "肝星細胞（HSC）の活性化は線維化の中核だが、それを駆動するシグナルは多岐にわたる。本総説はHSC活性化を駆動する六つの主要経路——TGF-β/Smad、Wnt、Hedgehog、Notch、YAP-TAZ、PI3K-AKT——を統合的に整理し、各経路が静止期HSCから筋線維芽細胞への転換、αSMA・COL1A1などのECM産生をどのように制御するかを論じる。なかでもTGF-β/SmadとPI3K/AKTが中心軸として位置づけられ、これら経路マップが線維化機構の理解とABMでの活性化ルール設計の基盤を提供する。",
    "background": "HSC活性化は単一経路では説明できず、複数のシグナルが収束・相互作用する。各経路の役割と相互関係を整理しなければ、抗線維化標的の選定やin silicoモデルの構築は困難である。",
    "achievements": ["HSC活性化を駆動する**六経路（TGF-β/Smad・Wnt・Hedgehog・Notch・YAP-TAZ・PI3K-AKT）**を体系化した。", "各経路が**静止期→筋線維芽細胞転換とECM産生（αSMA/COL1A1）**をどう制御するかを統合した。", "**TGF-β/SmadとPI3K/AKTを中心軸**として位置づけ、線維化機構の経路マップを提供した。"],
    "limitations": ["総説であり経路間の量的寄与・優先順位は文脈依存。", "経路の相互作用（クロストーク）の動的記述は限定的。", "ヒト・モデル間での経路重要度の差は精緻化を要する。"],
    "glossary": [{"term": "TGF-β/Smad", "full": "TGF-β / Smad signaling", "desc": "HSC活性化の中心経路。Smad2/3を介しECM産生を誘導"}, {"term": "YAP-TAZ", "full": "YAP/TAZ (Hippo pathway effectors)", "desc": "機械刺激・硬さ応答でHSC活性化を促す転写コアクチベーター"}, {"term": "αSMA", "full": "alpha smooth muscle actin (ACTA2)", "desc": "筋線維芽細胞/活性化HSCマーカー"}, {"term": "COL1A1", "full": "collagen type I alpha 1", "desc": "線維化の主要ECM。活性化HSCが産生"}],
    "struct": {"model": "総説（文献統合）", "cells": ["HSC", "KC（上流）"], "triggers": ["TGF-β/Wnt/Hh/Notch/YAP/PI3K"], "steatosis": "—", "inflammation": "△", "fibrosis": "○", "readout": ["αSMA/COL1A1", "筋線維芽細胞転換", "経路活性"], "ignite": "複数経路（特にTGF-β/Smad・PI3K/AKT）の収束でHSCが活性化", "params": [{"name": "経路別活性→HSC活性化確率", "note": "6経路の入力（特にTGF-β・PI3K）を重み付けしHSC活性化確率に変換するABMルール"}], "todos": ["KC由来TGF-β/TNF-α/IL-1βがどの経路でHSCを活性化するか追跡", "ABMのHSC活性化ルールに6経路マップを反映"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m36' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：HSC活性化を駆動する6経路を統合</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>文献横断統合</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>シグナル経路解析</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--G)'>6経路を抽出</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m36)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>6経路マップ</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TGF-β/Wnt/Hh</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>Notch/YAP/PI3K</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>活性化駆動</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m36)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>ECM産生</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>αSMA/COL1A1</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>線維化</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Zhang Y et al., Front Med (2024)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f36' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>6経路が収束してHSCを筋線維芽細胞へ活性化</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>上流シグナル</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>KC由来TGF-β等</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>機械刺激</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>6入力</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f36)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>中心軸</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TGF-β/Smad</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>PI3K/AKT</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>主要ドライバー</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f36)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>筋線維芽細胞化</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>αSMA↑/COL1A1↑</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>ECM産生→線維化</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>ABMのHSC活性化ルール設計の経路マップ</text>\n  </svg>"
  }
);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 36 Zhang 2024 Front Med: HSC活性化6経路総説 */
LP.methods("36", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №36 6経路が収束してHSCを筋線維芽細胞へ活性化する ===== */
LP.cinema("36", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("36b","var(--B)")}${GLYPH.arrow("36c","var(--C)")}</defs>`
    +GLYPH.title("6つのシグナル経路がHSCに収束し静止期→筋線維芽細胞への転換を駆動する")
    +GLYPH.stellate("hsc36",360,210,"qHSC")
    +GLYPH.nucleus("nuc36",360,210,28,20,"核")
    +`<g id="pw1" class="fade">`+GLYPH.tag("tgfb36",130,90,"TGF-β/Smad","var(--B)",100)+`</g>`
    +`<g id="pw2" class="fade">`+GLYPH.tag("wnt36",360,60,"Wnt/β-cat","var(--B)",86)+`</g>`
    +`<g id="pw3" class="fade">`+GLYPH.tag("hh36",580,90,"Hedgehog","var(--B)",86)+`</g>`
    +`<g id="pw4" class="fade">`+GLYPH.tag("notch36",130,330,"Notch","var(--B)",72)+`</g>`
    +`<g id="pw5" class="fade">`+GLYPH.tag("yap36",360,360,"YAP/TAZ","var(--B)",80)+`</g>`
    +`<g id="pw6" class="fade">`+GLYPH.tag("pi3k36",580,330,"PI3K/AKT","var(--B)",86)+`</g>`
    +GLYPH.mac("mac36",60,210,"KC/Mφ","#5d6470")
    +GLYPH.cytokine("kcSig36",120,150,"TGF-β","var(--C)",true)
    +GLYPH.layer("col36"),
  build(K){
    return [
      {color:"E",t:2200,cap:"静止期HSC（qHSC）。核内に複数のシグナル経路の受信準備がある。",run(){}},
      {color:"C",t:3400,cap:"① KC/マクロファージ由来のTGF-βや、機械的刺激など複数の入力がHSCに到達する。",run(){
        K.show(["kcSig36"]);
        K.flow(84,210,336,210,"var(--C)",{n:3,dur:1.2,loop:2});
      }},
      {color:"B",t:4400,cap:"② TGF-β/Smad・Wnt/β-catenin・Hedgehog・Notch・YAP/TAZ・PI3K/AKTの6経路がHSCに収束。特にTGF-β/SmadとPI3K/AKTが中心軸として機能する。",run(){
        K.show(["pw1","pw2","pw3","pw4","pw5","pw6"]);
        K.T(()=>{
          K.flow(180,95,336,200,"var(--B)",{n:1,dur:1.0,loop:2});
          K.flow(360,73,360,190,"var(--B)",{n:1,dur:0.8,loop:2});
          K.flow(538,95,384,200,"var(--B)",{n:1,dur:1.0,loop:2});
        },300);
        K.T(()=>{
          K.flow(168,325,336,220,"var(--B)",{n:1,dur:1.0,loop:2});
          K.flow(360,348,360,230,"var(--B)",{n:1,dur:0.8,loop:2});
          K.flow(538,325,384,220,"var(--B)",{n:1,dur:1.0,loop:2});
        },800);
        K.T(()=>{K.pulse("tgfb36");K.pulse("pi3k36");},2000);
        K.T(()=>{K.unpulse("tgfb36");K.unpulse("pi3k36");},3400);
      }},
      {color:"B",t:3200,cap:"③ 収束したシグナルがHSCを筋線維芽細胞へ転換。αSMA↑・COL1A1↑でECMを産生し線維化に至る。",run(){
        K.morph("hsc36Shape",GLYPH.SPINDLE);K.attr("hsc36Shape","fill","#b0432f");K.text("hsc36Cap","筋線維芽細胞");
        K.T(()=>K.draw("col36",GLYPH.collagenAt(360,270),{len:160}),600);
      }},
    ];
  }
});
