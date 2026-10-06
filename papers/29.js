/* ============================================================
   №29 · Nature Reviews Immunology 2026 · Araujo David B, Andreata F, Blériot C, Ginhoux F, Kubes P, Iannacone M
   KCの恒常性・代謝gatekeeper機能——胚発生起源・空間配置・機能的専門化とMASLD文脈での役割変化（2026年最新総説）
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"29", primary:"C",
    title:"KCの恒常性・代謝gatekeeper機能——胚発生起源・空間配置・機能的専門化とMASLD文脈での役割変化（2026年最新総説）",
    authors:"Araujo David B, Andreata F, Blériot C, Ginhoux F, Kubes P, Iannacone M",
    journal:"Nature Reviews Immunology",
    year:2026,
    vol:"26(7):538–554",
    doi:"10.1038/s41577-026-01288-0",
    url:"https://www.nature.com/articles/s41577-026-01288-0",
    catPrimary:"C",
    catSub:["D"],
    tags:["C","D"],
    summary:"2026年4月のNature Rev Immunol総説（Iannacone・Kubes・Ginhouxら）。KCの胚発生起源・空間配置・機能的専門化を統合的にまとめた。「免疫センチネル」としての古典的役割に加え、「代謝gatekeeper（脂質代謝・胆汁酸代謝の調節）」を前面に押し出した点が新しい。MASH・感染症・肝細胞癌などの疾患文脈でのKCの役割や、イメージング・トランスクリプトーム解析・マクロファージ標的治療の展望も扱う。Bonnardel 2019を引きながらニッチ概念を2026年の知見でアップデートしている。",
    connection:["iKCを加えた共培養系でKCが「代謝gatekeeper」として機能しているかどうかを、脂質代謝産物（胆汁酸・脂肪酸）の変化で評価するための概念的基盤。MASLD文脈でのKC役割変化（tolerogenic→inflammatory）はLPS×FFA二重刺激実験の解釈フレームを提供する。No.28・30と統合してKC biologyの2024〜2026年の全体像を把握できる。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析（2026年最新）",
    "added": "2026-06-15",
    "abstract_ja": "KCは単なる貪食細胞ではなく、肝の恒常性と代謝の門番（metabolic gatekeeper）として機能する。本総説はKCの胚発生起源、類洞内の空間配置、機能的専門化を整理し、胆汁酸・脂肪酸など代謝産物のセンシングと処理におけるKCの役割を論じる。さらにMASLD文脈ではKCの機能が寛容原性（tolerogenic）から炎症促進性（inflammatory）へと変質し、この転換が病態進行の分岐点となることを示す。KCを代謝と免疫の交差点に位置づける統合的視座を提供する。",
    "background": "肝は腸由来の抗原・代謝産物に常時曝される臓器であり、KCはこれらに対する寛容と防御のバランスを担う。近年KCが脂質・胆汁酸代謝の調節に積極的に関与することが分かり、免疫機能と代謝機能を統合した理解が求められている。",
    "achievements": ["KCの**胚発生起源・空間配置・機能的専門化**を体系的に整理した。", "KCを**代謝gatekeeper**として位置づけ、胆汁酸・脂肪酸センシングと処理における役割を統合した。", "MASLDでのKC機能の**tolerogenic→inflammatory転換**を病態進行の鍵として提示した。"],
    "limitations": ["2026年最新総説であり、提示される枠組みは一次データの今後の検証を要する。", "ヒトKCの代謝gatekeeper機能の直接的定量は限定的。", "in vitroでKCの代謝機能を評価する標準手法は未確立。"],
    "glossary": [{"term": "metabolic gatekeeper", "full": "metabolic gatekeeper", "desc": "代謝産物（胆汁酸・脂肪酸）のセンシング・処理を担うKCの機能的役割"}, {"term": "tolerogenic", "full": "tolerogenic（寛容原性）", "desc": "恒常状態のKCがもつ免疫抑制的・寛容性の性質"}, {"term": "tissue residency", "full": "tissue residency", "desc": "組織常在性。KCが胚由来で自己複製により維持される性質"}],
    "struct": {"model": "総説（文献統合）", "cells": ["KC", "肝細胞", "LSEC"], "triggers": ["MASLD（脂質・LPS）", "代謝産物曝露"], "steatosis": "△", "inflammation": "○", "fibrosis": "—", "readout": ["KC代謝機能", "tolerogenic/inflammatory状態", "胆汁酸・脂肪酸処理"], "ignite": "KCのtolerogenic→inflammatory転換が病態進行の分岐点", "params": [{"name": "KC代謝状態→炎症スイッチ", "note": "脂質・胆汁酸負荷に応じてKCを寛容/炎症状態へ切り替えるABMルール"}], "todos": ["LPS×FFA二重刺激でKCのtolerogenic→inflammatory転換を評価", "共培養KCの代謝gatekeeper機能を胆汁酸・脂肪酸変化で測定"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m29' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：KCを代謝gatekeeperとして統合（2026最新）</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>発生・空間</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>胚起源</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>類洞配置</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--accent)'>機能専門化</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m29)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>代謝機能</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>胆汁酸/脂肪酸</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>センシング・処理</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--D)'>gatekeeper</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m29)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>MASLD文脈</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>寛容→炎症</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>機能変質</text>\n  <text x='529' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>進行の分岐</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Araujo David B, Andreata F, …, Iannacone M, Nat Rev Immunol 26(7) (2026)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f29' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>KC：免疫と代謝の交差点で恒常性を守る門番</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>代謝産物曝露</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>胆汁酸・脂肪酸</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>腸由来抗原</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--D)'>常時センシング</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f29)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>tolerogenic KC</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>寛容・抗炎症</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>代謝処理</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--A)'>恒常性維持</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f29)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>inflammatory KC</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脂質/LPS過剰</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>機能変質</text>\n  <text x='529' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>MASLD進行</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>tolerogenic→inflammatory転換が病態進行の分岐点</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("29", [{ic:"macrophage",cap:"KC＝代謝のgatekeeper"}, {ic:"hepatocyte",cap:"胆汁酸・脂肪酸の処理"}, {ic:"endothelial",cap:"類洞内の空間配置"}, {ic:"liver",cap:"MASLDでの役割変化"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 29 Araujo David/Iannacone 2026 Nat Rev Immunol: KC homeostasis→代謝gatekeeper総説 */
LP.methods("29", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №29 KC：免疫と代謝の交差点に立つ恒常性の門番 ===== */
LP.cinema("29", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("29c","var(--C)")}${GLYPH.arrow("29b","var(--B)")}</defs>`
    +GLYPH.title("KC：免疫と代謝の交差点に立つ恒常性の門番——過負荷で炎症性に転換")
    +GLYPH.mac("kc29",300,200,"常在KC","#5d7a58")
    +GLYPH.receptor("tlr29",265,165,"TLR","var(--C)")
    +GLYPH.receptor("sr29",335,165,"SR-A","var(--C)")
    +`<g id="metabs29" class="fade">`
      +GLYPH.metab("ba29",100,140,"胆汁酸","var(--D)")
      +GLYPH.metab("fa29",100,200,"脂肪酸","var(--D)")
      +GLYPH.metab("ag29",100,260,"腸内抗原","var(--C)")
    +`</g>`
    +`<g id="tolKC29" class="fade"><circle cx="300" cy="330" r="32" fill="#fff" stroke="var(--E)" stroke-width="2.2"/><text x="300" y="326" text-anchor="middle" font-size="10" fill="var(--E)" font-weight="600">寛容原性</text><text x="300" y="340" text-anchor="middle" font-size="9" fill="var(--E)">gatekeeper</text></g>`
    +`<g id="inflKC29" class="fade">`
      +GLYPH.mac("ikc29",560,200,"炎症性KC","#9c4f4f")
      +GLYPH.cytokine("tnf29",560,310,"TNFα","var(--B)")
    +`</g>`
    +`<g id="overTag29" class="fade">`+GLYPH.tag("over29",430,140,"脂質/LPS過剰","var(--B)",100)+`</g>`,
  build(K){
    return [
      {color:"E",t:2400,cap:"類洞内の常在KC。TLR・SR-Aなどのパターン認識受容体を発現し、門脈血中の代謝産物・抗原を常時感知する。",run(){}},
      {color:"D",t:3600,cap:"① 腸由来の胆汁酸・脂肪酸・抗原が門脈血を経てKCに到達する。恒常状態ではKCが寛容原性を保つ。",run(){
        K.show(["metabs29"]);
        K.flow(112,140,265,175,"var(--D)",{n:2,dur:1.0,loop:2});
        K.flow(112,200,276,200,"var(--D)",{n:2,dur:1.0,loop:2});
        K.T(()=>K.flow(112,260,276,210,"var(--C)",{n:2,dur:1.0,loop:2}),400);
        K.T(()=>K.show(["tolKC29"]),1800);
      }},
      {color:"A",t:3200,cap:"② 恒常状態のKCは「代謝gatekeeper」として肝の免疫寛容を維持。エンドトキシン寛容で過剰応答を防ぐ。",run(){
        K.pulse("tolKC29");
        K.T(()=>K.unpulse("tolKC29"),2200);
      }},
      {color:"B",t:3800,cap:"③ 脂質やLPSが過剰になるとKCは炎症促進性に転換し、TNFα等を放出してMASLD進行の分岐点となる。",run(){
        K.show(["overTag29","inflKC29"]);
        K.flow(324,200,536,200,"var(--B)",{n:3,dur:1.2,loop:2});
        K.T(()=>radiate(K,560,200,"var(--B)",5),1200);
      }},
    ];
  }
});
