/* ============================================================
   №38 · American Journal of Pathology 2025 · （著者詳細：DOI 10.1016/j.ajpath.2025.02.003参照）
   MASHにおけるHSC-マクロファージ自己増幅クロストーク——JAK-STAT/PI3K-AKT/TLR4-NF-κB三軸が炎症と線維化を同時駆動
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"38", primary:"B",
    title:"MASHにおけるHSC-マクロファージ自己増幅クロストーク——JAK-STAT/PI3K-AKT/TLR4-NF-κB三軸が炎症と線維化を同時駆動",
    authors:"（著者詳細：DOI 10.1016/j.ajpath.2025.02.003参照）",
    journal:"American Journal of Pathology",
    year:2025,
    vol:"195(6):（2025 Jun 1）",
    doi:"10.1016/j.ajpath.2025.02.003",
    url:"https://ajp.amjpathol.org/article/S0002-9440(25)00072-0/fulltext",
    catPrimary:"B",
    catSub:["C"],
    tags:["B","C"],
    summary:"MASHにおけるHSCと肝マクロファージ（KC・浸潤Mφ）の双方向クロストークを分子レベルで整理した総説。HSC活性化の一次ドライバーは脂質蓄積・酸化ストレス・lipotoxicityであり、マクロファージ・肝細胞・内皮細胞からのパラクライン（TGF-β・PDGF・VEGF）と直接接触が補強する。逆方向では活性化HSCがマクロファージの浸潤・極性化を誘導するフィードフォワードループが形成される。JAK-STAT・PI3K-AKT・TLR4-NF-κBの三軸が炎症カスケードの増幅と線維化産生を同時に進める。このHSC⇄Mφ自己増幅ループがMASH→線維化の「点火と維持」の中核にある。",
    connection:["KC（±LPS等のセカンドヒット）を共培養に加えてHSCを間接的に活性化する実験の理論的根拠。どのシグナル（TGF-β vs PDGF vs 直接接触）が効いているかを追うための経路マップ。TLR4-NF-κB軸はLPS刺激で活性化されるため、LPS濃度×線維化応答の実験デザインに直結する。No.36（Zhang 2024）との組み合わせでHSC-KC相互作用の完全な経路図を構成できる。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析",
    "added": "2026-06-15",
    "abstract_ja": "MASHにおける線維化は、HSCとマクロファージ（KC）の相互増幅的なクロストークによって駆動される。本総説はこのループを支える三つのシグナル軸——JAK-STAT、PI3K-AKT、TLR4-NF-κB——を整理し、マクロファージ由来のTGF-β・PDGF・炎症性サイトカインがHSCを活性化し、活性化HSC由来の因子が再びマクロファージを炎症性に保つ自己増幅ループを記述する。とくにTLR4-NF-κB軸はLPS刺激で活性化されるため、セカンドヒットとしてのLPS濃度と線維化応答の関係を設計するうえで重要な枠組みを提供する。",
    "background": "線維化はHSC単独でなく免疫細胞との相互作用で進む。HSC-マクロファージ間のどのシグナルが自己増幅ループを駆動するかを整理しなければ、共培養での間接的活性化実験を解釈できない。",
    "achievements": ["MASHの**HSC-マクロファージ自己増幅クロストーク**を統合的に記述した。", "ループを支える**JAK-STAT・PI3K-AKT・TLR4-NF-κBの三軸**を整理した。", "**TLR4-NF-κB（LPS応答）**を介した炎症–線維化連関を示し、LPSセカンドヒット設計の枠組みを提供した。"],
    "limitations": ["総説であり各軸の量的寄与は文脈依存。", "直接接触 vs 液性因子の寄与の切り分けは個別検証を要する。", "ヒトMASHでのループの時間動態は確立途上。"],
    "glossary": [{"term": "TLR4-NF-κB", "full": "TLR4 / NF-κB signaling", "desc": "LPSで活性化される炎症経路。HSC-Mφクロストークと線維化に寄与"}, {"term": "JAK-STAT", "full": "JAK-STAT signaling", "desc": "サイトカイン応答経路。HSC-Mφ自己増幅ループの一軸"}, {"term": "PDGF", "full": "platelet-derived growth factor", "desc": "マクロファージ由来のHSC増殖・活性化因子"}, {"term": "self-amplifying loop", "full": "HSC–macrophage self-amplifying loop", "desc": "HSCとMφが互いを活性化し続ける正のフィードバック回路"}],
    "struct": {"model": "総説（文献統合）", "cells": ["HSC", "マクロファージ/KC"], "triggers": ["LPS（TLR4）", "TGF-β/PDGF", "サイトカイン"], "steatosis": "—", "inflammation": "○", "fibrosis": "○", "readout": ["炎症サイトカイン", "αSMA/COL1A1", "ループ活性"], "ignite": "KC(±LPS)→HSC活性化→HSCがKCを炎症性に保つ自己増幅ループで線維化点火", "params": [{"name": "LPS濃度→TLR4-NF-κB→線維化応答", "note": "LPSセカンドヒット強度をループ活性・線維化に変換するABMルール"}, {"name": "HSC-Mφ相互活性化係数", "note": "両エージェント間の正のフィードバックを実装"}], "todos": ["KC＋LPSでHSCを間接活性化しLPS濃度×線維化応答を測定", "TGF-β vs PDGF vs 直接接触の寄与を切り分け"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m38' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：HSC-Mφクロストークの三軸を整理</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>文献統合</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>MASH線維化</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--G)'>相互作用解析</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m38)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>三軸</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>JAK-STAT</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>PI3K-AKT</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>TLR4-NF-κB</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m38)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>自己増幅ループ</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>相互活性化</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>炎症×線維化</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Am J Pathol (2025) — HSC–macrophage crosstalk</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f38' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>HSCとマクロファージの自己増幅ループが線維化を点火</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>マクロファージ(±LPS)</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TGF-β/PDGF</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TLR4-NF-κB</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>HSCを活性化</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f38)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>活性化HSC</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ECM産生</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>因子放出</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>Mφを炎症維持</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f38)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>正のループ</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>相互増幅</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>線維化進行</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>TLR4-NF-κB＝LPS濃度×線維化応答の設計根拠</text>\n  </svg>"
  }
);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 38 Am J Pathol 2025: HSC-macrophage crosstalk MASH総説 */
LP.methods("38", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №38 HSCとマクロファージの自己増幅ループが線維化を点火 ===== */
LP.cinema("38", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("38b","var(--B)")}${GLYPH.arrow("38c","var(--C)")}</defs>`
    +GLYPH.title("マクロファージ↔HSC正のフィードバックループが線維化を点火・持続させる")
    +GLYPH.mac("mac38",200,160,"KC/Mφ","#5d6470")
    +GLYPH.stellate("hsc38",520,160,"肝星細胞")
    +GLYPH.cytokine("tgfb38",360,110,"TGF-β","var(--C)",true)
    +GLYPH.cytokine("pdgf38",360,210,"PDGF","var(--C)",true)
    +`<g id="axes38" class="fade">`
      +GLYPH.tag("jak38",520,70,"JAK-STAT","var(--B)",80)
      +GLYPH.tag("pi3k38",520,280,"PI3K-AKT","var(--B)",80)
      +GLYPH.tag("nfkb38",640,160,"TLR4-NF-κB","var(--B)",100)
    +`</g>`
    +`<g id="loopArrows38" class="fade">`
      +`<path d="M480,140 C440,80 280,80 240,140" fill="none" stroke="var(--B)" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#ar38b)"/>`
      +`<text x="360" y="75" text-anchor="middle" font-size="9" fill="var(--B)">正のループ</text>`
    +`</g>`
    +GLYPH.layer("col38")
    +GLYPH.cytokine("lps38",60,160,"LPS","var(--C)",true),
  build(K){
    return [
      {color:"E",t:2200,cap:"健常な肝類洞。KC/マクロファージとHSCが静止状態で共存している。",run(){}},
      {color:"C",t:3800,cap:"① LPSなどのセカンドヒットでKC/マクロファージがTGF-βとPDGFを放出する。",run(){
        K.show(["lps38"]);
        K.flow(76,160,176,160,"var(--C)",{n:2,dur:1.0,loop:2});
        K.T(()=>{K.show(["tgfb38","pdgf38"]);
          K.flow(224,160,360,115,"var(--C)",{n:2,dur:0.9,loop:2});
          K.flow(224,160,360,205,"var(--C)",{n:2,dur:0.9,loop:2});
        },1000);
      }},
      {color:"B",t:4200,cap:"② TGF-β/PDGF→JAK-STAT・PI3K-AKT・TLR4-NF-κBの三軸でHSCが活性化し、ECMを産生する。",run(){
        K.flow(372,115,496,160,"var(--B)",{n:2,dur:0.9,loop:2});
        K.flow(372,205,496,160,"var(--B)",{n:2,dur:0.9,loop:2});
        K.T(()=>{K.show(["axes38"]);K.pulse("jak38");K.pulse("pi3k38");K.pulse("nfkb38");},800);
        K.T(()=>{K.morph("hsc38Shape",GLYPH.SPINDLE);K.attr("hsc38Shape","fill","#b0432f");K.text("hsc38Cap","活性化HSC");
          K.unpulse("jak38");K.unpulse("pi3k38");K.unpulse("nfkb38");},2200);
        K.T(()=>K.draw("col38",GLYPH.collagenAt(520,220),{len:140}),2800);
      }},
      {color:"B",t:3600,cap:"③ 活性化HSCが炎症促進シグナルを放出してKC/Mφを再活性化し、正のフィードバックループが成立→線維化が自己維持的に進行する。",run(){
        K.show(["loopArrows38"]);
        K.flow(496,160,224,165,"var(--B)",{n:3,dur:1.4,loop:3});
        K.T(()=>{K.pulse("mac38");radiate(K,200,160,"var(--C)",4);},1200);
      }},
    ];
  }
});
