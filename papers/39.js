/* ============================================================
   №39 · Gastroenterology 2025 · Kisseleva T, Ganguly S, Murad R, Wang A, Brenner DA
   MASHにおけるHSCの表現型多様性・代謝リプログラミング——quiescent/initiatory/myofibroblast三亜型とTCA→解糖シフト
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"39", primary:"B",
    title:"MASHにおけるHSCの表現型多様性・代謝リプログラミング——quiescent/initiatory/myofibroblast三亜型とTCA→解糖シフト",
    authors:"Kisseleva T, Ganguly S, Murad R, Wang A, Brenner DA",
    journal:"Gastroenterology",
    year:2025,
    vol:"169(5):797-812",
    doi:"10.1053/j.gastro.2025.03.010",
    url:"https://www.gastrojournal.org/article/S0016-5085(25)00487-7/abstract",
    catPrimary:"B",
    catSub:[],
    tags:["B","D"],
    summary:"MASHにおけるHSCの多様な表現型と代謝状態を最新のscRNA-seq・エピゲノム解析と統合して整理した総説。MASHにおけるHSCは少なくとも三つの主要サブタイプ：①quiescent HSC（Rxra/Foxf1/Nr1h4が特徴的TF）、②initiatory HSC（活性化初期・炎症性、Fosl1/Egr3/Nfkb2が特徴的TF）、③myofibroblast（α-SMA+コラーゲン産生、Wt1/Prrx1/Mef2c）に分類できる。MASHではHSCが代謝リプログラミングを受け、TCAサイクルを抑えて解糖系・グルタミン分解・乳酸産生に切り替わる。飽和脂肪酸・遊離コレステロール・セラミド・乳酸・コハク酸などが肝細胞→HSCへのパラクラインシグナルとして機能する。",
    connection:["自分のsteatosisモデルで産生される脂質代謝産物（FFA・コレステロール）がHSC活性化の代謝的トリガーになっているかを検証する実験デザイン（乳酸・コハク酸測定、ECAR/OCR測定）の理論的支柱。quiescent→initiatory→myofibroblastの三段階をABMルールとして実装するリファレンス。No.36（Zhang 2024 HSC経路）と組み合わせてHSC活性化の代謝×シグナル二軸モデルを構築できる。"],
    methods:["総説（review）","scRNA-seq統合解析","エピゲノム解析統合"],
    "approach": "総説（review）＋ scRNA-seq統合解析・エピゲノム統合解析",
    "added": "2026-06-15",
    "abstract_ja": "MASHにおけるHSCは均一でなく、静止期（quiescent）・始動期（initiatory）・筋線維芽細胞（myofibroblast）という表現型多様性を示す。本総説はscRNA-seq・エピゲノム知見を統合し、これら三亜型の遷移と、活性化に伴う代謝リプログラミング（解糖・TCA・グルタミン代謝の亢進、乳酸・コハク酸の産生）を整理する。FFA・コレステロール・セラミドといった脂質代謝産物がHSC活性化の代謝的トリガーとなりうる点を強調し、RXRA・FOSL1・WT1などの転写制御因子とともに、HSC活性化の代謝×シグナル二軸モデルの基盤を提供する。",
    "background": "HSC活性化は単一の状態遷移ではなく、複数の中間状態と代謝変化を伴う。scRNA-seqの進展で亜型の存在が明らかになり、代謝リプログラミングが活性化の駆動因子である可能性が示された。これを整理することで、脂質環境からの活性化トリガーを検証できる。",
    "achievements": ["MASH HSCの**三亜型（quiescent/initiatory/myofibroblast）**とその遷移を統合した。", "活性化に伴う**代謝リプログラミング（解糖・TCA・グルタミン亢進、乳酸・コハク酸産生）**を整理した。", "**FFA・コレステロール・セラミド等の脂質代謝産物**を代謝的活性化トリガーとして位置づけ、RXRA/FOSL1/WT1等の制御因子を提示した。"],
    "limitations": ["総説であり亜型境界・遷移の定義は今後精緻化される。", "代謝トリガーの因果性は個別の機能実験を要する。", "ヒトとマウスの亜型対応は完全には確立していない。"],
    "glossary": [{"term": "initiatory HSC", "full": "initiatory hepatic stellate cell", "desc": "静止期と筋線維芽細胞の中間にある始動状態のHSC亜型"}, {"term": "myofibroblast", "full": "myofibroblast", "desc": "完全活性化したECM産生性HSC"}, {"term": "metabolic reprogramming", "full": "metabolic reprogramming", "desc": "活性化に伴う解糖・TCA・グルタミン代謝の亢進。乳酸・コハク酸を産生"}, {"term": "FOSL1", "full": "FOS-like antigen 1", "desc": "HSC活性化を制御する転写因子の一つ"}],
    "struct": {"model": "総説（scRNA-seq/エピゲノム統合）", "cells": ["HSC（3亜型）"], "triggers": ["FFA・コレステロール・セラミド", "代謝リプログラミング"], "steatosis": "△", "inflammation": "—", "fibrosis": "○", "readout": ["亜型マーカー（scRNA-seq）", "解糖/TCA（乳酸・コハク酸）", "ECAR/OCR", "αSMA"], "ignite": "脂質代謝産物（FFA/コレステロール）＋代謝リプログラミングがHSC活性化を駆動", "params": [{"name": "脂質代謝産物→HSC代謝活性化", "note": "FFA/コレステロール濃度を代謝リプログラミング→活性化確率に変換"}, {"name": "quiescent→initiatory→myofibroblast三状態", "note": "HSCエージェントを三状態遷移で実装"}], "todos": ["steatosisモデルの脂質代謝産物がHSC活性化トリガーか検証（乳酸・コハク酸/ECAR/OCR）", "HSCの三段階遷移をABMルールに実装"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m39' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：scRNA-seq/エピゲノムでHSC亜型と代謝を統合</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>scRNA-seq/エピゲノム</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>統合解析</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--G)'>亜型同定</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m39)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>3亜型</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>quiescent</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>initiatory</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>myofibroblast</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m39)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>代謝リプログラム</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>解糖/TCA/グルタミン</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>乳酸・コハク酸</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Kisseleva T, Brenner DA et al., Gastroenterology (2025)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f39' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>脂質代謝産物＋代謝リプログラムがHSC活性化を駆動</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>quiescent HSC</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>静止・VitA</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--E)'>低代謝</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f39)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>脂質トリガー</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>FFA/コレステロール</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>セラミド</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--D)'>代謝リプログラム</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f39)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>initiatory→myofibroblast</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>解糖/TCA亢進</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>乳酸・コハク酸</text>\n  <text x='529' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>線維化</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>代謝×シグナル二軸モデルの基盤（ECAR/OCRで検証）</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("39", [{ic:"stellate",cap:"HSC三亜型（静止期・始動期・筋線維芽細胞）"}, {ic:"omics",cap:"scRNA-seq・エピゲノム知見の統合"}, {ic:"liver",cap:"TCA→解糖への代謝シフト"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 39 Kisseleva & Brenner 2025 Gastroenterology: MASH HSC表現型・代謝総説 */
LP.methods("39", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №39 脂質代謝産物と代謝リプログラムがHSC活性化を駆動 ===== */
LP.cinema("39", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("39b","var(--B)")}${GLYPH.arrow("39d","var(--D)")}</defs>`
    +GLYPH.title("脂質代謝産物（FFA/コレステロール）→代謝リプログラミング→HSC活性化→線維化")
    +GLYPH.stellate("qhsc39",180,180,"qHSC（静止）")
    +`<g id="vita39"><circle cx="180" cy="157" r="8" fill="#e8a040" stroke="#c08020" stroke-width="1.2"/><text x="200" y="148" font-size="8.5" fill="#c08020">VitA</text></g>`
    +`<g id="lipTrig39" class="fade">`
      +GLYPH.metab("ffa39",60,160,"FFA","var(--D)")
      +GLYPH.metab("chol39",60,220,"Chol","var(--D)")
      +GLYPH.metab("cer39",60,280,"セラミド","var(--D)")
    +`</g>`
    +`<g id="initH39" class="fade">`
      +GLYPH.stellate("ihsc39",420,180,"initiatory HSC")
      +GLYPH.tag("glyco39",420,120,"解糖↑/TCA↑","var(--D)",90)
      +GLYPH.metab("lac39",480,280,"乳酸","var(--D)")
      +GLYPH.metab("suc39",520,310,"コハク酸","var(--D)")
    +`</g>`
    +`<g id="myof39" class="fade">`
      +`<text x="620" y="200" text-anchor="middle" font-size="10.5" fill="var(--B)" font-weight="600">筋線維芽細胞</text>`
    +`</g>`
    +GLYPH.layer("col39"),
  build(K){
    return [
      {color:"E",t:2400,cap:"静止期HSC（qHSC）はビタミンAを蓄え、低い代謝活性を保っている。",run(){}},
      {color:"D",t:3800,cap:"① FFA・コレステロール・セラミドなどの脂質代謝産物がHSCに到達し、代謝リプログラミング（解糖/TCA亢進）を引き起こす。",run(){
        K.show(["lipTrig39"]);
        K.flow(72,160,156,180,"var(--D)",{n:2,dur:1.0,loop:2});
        K.flow(72,220,156,180,"var(--D)",{n:2,dur:1.0,loop:2});
        K.T(()=>K.flow(72,280,156,180,"var(--D)",{n:2,dur:1.0,loop:2}),400);
        K.T(()=>{K.attr("vita39","opacity","0.2");},2000);
      }},
      {color:"B",t:4200,cap:"② VitAが喪失しHSCがinitiatory状態を経由。解糖とTCA回路が亢進し乳酸・コハク酸を産生しながら活性化が進行する。",run(){
        K.show(["initH39"]);
        K.flow(204,180,396,180,"var(--B)",{n:3,dur:1.2,loop:2});
        K.T(()=>{K.show(["glyco39"]);K.pulse("glyco39");},800);
        K.T(()=>{K.morph("ihsc39Shape",GLYPH.SPINDLE);K.attr("ihsc39Shape","fill","#c86040");K.unpulse("glyco39");},2200);
      }},
      {color:"B",t:3200,cap:"③ 最終的にinitiatory HSCが筋線維芽細胞に転換し、ECM・コラーゲンを過剰産生して線維化に至る。乳酸/コハク酸が代謝シグネチャとなる。",run(){
        K.show(["myof39"]);
        K.text("ihsc39Cap","活性化HSC");
        K.T(()=>K.draw("col39",GLYPH.collagenAt(420,240),{len:150}),600);
      }},
    ];
  }
});
