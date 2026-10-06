/* ============================================================
   №41 · Frontiers in Immunology 2019 · Desgeorges T, Caratti G, Mounier R, Tuckermann J, Chazaud B
   グルコルチコイドによるマクロファージのCD163/CD206誘導——M2表現型調節の分子機序
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"41", primary:"C",
    title:"グルコルチコイドによるマクロファージのCD163/CD206誘導——M2表現型調節の分子機序",
    authors:"Desgeorges T, Caratti G, Mounier R, Tuckermann J, Chazaud B",
    journal:"Frontiers in Immunology",
    year:2019,
    vol:"10:01591",
    doi:"10.3389/fimmu.2019.01591",
    url:"https://www.frontiersin.org/articles/10.3389/fimmu.2019.01591/full",
    catPrimary:"C",
    catSub:[],
    tags:["C","H"],
    summary:"GCがマクロファージ・単球の表現型を「組織修復」方向に調節する機序を整理した総説。GCは単なる免疫抑制を超えてM2様phenotypeを積極的に誘導する。GC処理によってCD163（スカベンジャー受容体・Hb/Hp清掃）とCD206（MRC1・マンノース受容体）の発現が強く誘導される。IL-4/IL-13によるM2分化との遺伝子発現パターンの類似性が示されており、dexamethasone等でM2様KC表現型を誘導できることが分かる。",
    connection:["iKCやKCの成熟度・極性を評価するとき、CD163を「M2/homeostatic KC」の指標として用いる根拠となる総説。dexamethasone含有培地がiKCのCD163発現を上昇させるかを評価する実験の理論的基盤。No.42（Haematologica 2018原著）の概念補完として対で読む。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析",
    "added": "2026-06-15",
    "abstract_ja": "グルココルチコイド（GC）はマクロファージに作用してCD163・CD206などM2/恒常性表現型マーカーを誘導する。本総説はGCがグルココルチコイド受容体（GR）を介してマクロファージ極性を調節する分子機序を整理し、CD163/CD206誘導が抗炎症・組織修復・efferocytosis促進と結びつくことを論じる。GCによるM2様表現型の誘導は、KC/iKCの成熟・極性評価においてCD163を恒常性マーカーとして用いる根拠を与え、培養条件（dexamethasone添加）の設計指針を提供する。",
    "background": "マクロファージの極性（炎症性 vs 修復性）は微小環境シグナルで可塑的に変化する。GCは臨床的な抗炎症薬であると同時に、組織常在・修復型マクロファージの表現型を誘導する因子としても重要だが、その分子機序の整理が求められていた。",
    "achievements": ["**GC→GR→CD163/CD206誘導**というM2様極性調節の分子機序を整理した。", "CD163/CD206誘導が**抗炎症・組織修復・efferocytosis**と結びつくことを統合した。", "CD163を**恒常性/M2マーカー**として用いる根拠と、dexamethasone培地設計の指針を提供した。"],
    "limitations": ["総説であり個別マクロファージ集団での効果は文脈依存。", "GCの作用はマクロファージ以外にも広く、特異性の解釈に注意を要する。", "CD163誘導と機能的修復能の対応は完全には定量されていない。"],
    "glossary": [{"term": "glucocorticoid", "full": "glucocorticoid（GC）", "desc": "GR を介してマクロファージにM2/恒常性表現型（CD163/CD206）を誘導するステロイド"}, {"term": "CD206", "full": "mannose receptor (MRC1)", "desc": "M2マクロファージマーカー。GCで誘導される修復型表現型の指標"}, {"term": "GR", "full": "glucocorticoid receptor", "desc": "グルココルチコイド受容体。CD163/CD206誘導を媒介する核内受容体"}],
    "struct": {"model": "総説（文献統合）", "cells": ["マクロファージ/KC"], "triggers": ["グルココルチコイド（dexamethasone）"], "steatosis": "—", "inflammation": "△", "fibrosis": "—", "readout": ["CD163/CD206発現", "M2/恒常性極性", "efferocytosis能"], "ignite": "—（極性調節。抗炎症・修復型への誘導）", "params": [{"name": "GC→CD163誘導→修復型極性", "note": "培地GC濃度に応じてiKCをM2/恒常性側へ寄せる設計ルール"}], "todos": ["dexamethasone添加でiKCのCD163発現上昇を確認", "CD163をiKCの恒常性/成熟マーカーとしてパネル化"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m41' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：GCによるマクロファージM2極性調節</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>GCシグナル</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>GR結合</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>転写調節</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--accent)'>極性制御</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m41)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>CD163/CD206誘導</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>M2/恒常性マーカー</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>抗炎症</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m41)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>機能的帰結</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>組織修復</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>efferocytosis</text>\n  <text x='529' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--H)'>修復型</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Desgeorges T, Tuckermann J, Chazaud B, Front Immunol (2019)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f41' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>GC→GR→CD163/CD206でマクロファージを修復型へ</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>グルココルチコイド</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>dexamethasone</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>GR活性化</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f41)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>CD163/CD206↑</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>M2/恒常性</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>抗炎症極性</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f41)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>修復・貪食</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>efferocytosis促進</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>組織修復</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>CD163をiKC恒常性マーカーに用いる根拠</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("41", [{ic:"drug",cap:"グルココルチコイド（dexamethasone）"}, {ic:"macrophage",cap:"GR経由でCD163/CD206を誘導"}, {ic:"liver",cap:"M2/恒常性極性・efferocytosis"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 41 Desgeorges 2019 Front Immunol: GC→CD163/CD206 M2総説 */
LP.methods("41", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №41 GC→GR→CD163/CD206でマクロファージを修復型へ ===== */
LP.cinema("41", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("41c","var(--C)")}${GLYPH.arrow("41h","var(--H)")}</defs>`
    +GLYPH.title("GC→GR活性化がCD163/CD206を誘導しMφを修復型（M2/恒常性）へ")
    +GLYPH.mac("m0_41",160,180,"Mφ(静止)","#828a96")
    +GLYPH.receptor("gr41",160,140,"GR","var(--H)")
    +GLYPH.nucleus("nuc41",160,180,30,22,"核")
    +GLYPH.tf("grtf41",100,100,"GC-GR","var(--H)",true)
    +GLYPH.mac("m2_41",480,180,"","#5d7a58")
    +`<g id="m2tag41" class="fade"><text x="480" y="232" text-anchor="middle" font-size="10.5" fill="#3d5a38" font-weight="600">M2/修復型</text></g>`
    +GLYPH.receptor("cd163_41",445,155,"CD163","var(--C)")
    +GLYPH.receptor("cd206_41",515,155,"CD206","var(--C)")
    +`<g id="effc41" class="fade">`
      +`<circle cx="480" cy="310" r="28" fill="#fff" stroke="var(--C)" stroke-width="2"/>`
      +`<text x="480" y="306" text-anchor="middle" font-size="9.5" fill="var(--C)" font-weight="600">efferocytosis</text>`
      +`<text x="480" y="320" text-anchor="middle" font-size="8.5" fill="var(--C)">組織修復</text>`
    +`</g>`
    +GLYPH.cytokine("il10_41",580,260,"IL-10","var(--E)",true),
  build(K){
    return [
      {color:"E",t:2200,cap:"静止状態のマクロファージ。核内にはGR（グルココルチコイド受容体）が発現している。",run(){}},
      {color:"H",t:3800,cap:"① GCがGRを活性化し、GC-GR複合体が核内へ移行して転写プログラムを起動する。",run(){
        K.show(["grtf41"]);
        K.flow(100,105,160,175,"var(--H)",{n:2,dur:1.1,loop:2});
        K.T(()=>K.pulse("gr41"),500);
        K.T(()=>K.unpulse("gr41"),2000);
      }},
      {color:"C",t:4000,cap:"② GRがCD163・CD206を転写誘導し、MφがM2/恒常性（抗炎症）極性を獲得する。",run(){
        K.flow(176,180,456,180,"var(--C)",{n:3,dur:1.2,loop:2});
        K.T(()=>{K.show(["m2tag41"]);K.pulse("cd163_41");K.pulse("cd206_41");},1000);
        K.T(()=>{K.unpulse("cd163_41");K.unpulse("cd206_41");},2600);
      }},
      {color:"C",t:3400,cap:"③ 誘導されたM2型はefferocytosis（死細胞貪食）と組織修復を促進し、IL-10を分泌する。CD163は恒常性Mφの普遍的マーカー。",run(){
        K.show(["effc41","il10_41"]);
        K.flow(480,200,480,282,"var(--C)",{n:2,dur:0.9,loop:2});
        K.T(()=>radiate(K,480,310,"var(--C)",4),1200);
      }},
    ];
  }
});
