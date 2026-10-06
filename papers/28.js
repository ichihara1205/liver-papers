/* ============================================================
   №28 · JHEP Reports 2024 · De Ponti FF, Liu Z, Scott CL et al.
   MASLDにおける肝マクロファージ多様性——resKC/moMφ亜集団の動態・ニッチ依存的identity維持とMASLD進行における役割
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"28", primary:"C",
    title:"MASLDにおける肝マクロファージ多様性——resKC/moMφ亜集団の動態・ニッチ依存的identity維持とMASLD進行における役割",
    authors:"De Ponti FF, Liu Z, Scott CL et al.",
    journal:"JHEP Reports",
    year:2024,
    vol:"（2024 Aug 23）",
    doi:"10.1016/j.jhepr.2024.101200",
    url:"https://www.jhep-reports.eu/article/S2589-5559(24)00200-3/fulltext",
    catPrimary:"C",
    catSub:["D","B"],
    tags:["C","D","B"],
    summary:"2024年時点で最も新しいMASLDにおけるマクロファージ全体像の総説（Scott CLグループ）。Bonnardelのニッチ概念をMASLD文脈で引き継ぎ更新。従来「均質な集団」とみなされていた肝内マクロファージが、居住型KC（resKC）・単球由来マクロファージ（moMφ）・遷移期集団など複数の亜集団から構成されることが明らかになりつつある。M1/M2という二元論では捉えられないこの多様性が、MASLDの進行においてどの集団が炎症・線維化を主導するかを解読する上で決定的に重要。ニッチ（LSEC・HSC・肝細胞）からの局所シグナルが継続的にresKCのidentityを維持し、脂質過剰・LPSセカンドヒットがresKCを活性化/消耗させてmoMφが浸潤・置換するという動態モデルが提示されている。",
    connection:["KC（またはiKC）を共培養に加えてfibrosisを誘発する実験を解釈する際、どの活性化サブセットが実際に線維化を駆動しているかを考察するフレームワークとして活用できる。単一KC集団を入れるモデルでの表現型多様性の不在は「niche simplification」として位置づけられる。No.22（De Ponti 2025 Immunity）の一次研究と対比して読むことが有効。"],
    methods:["総説（review）","文献統合分析（scRNA-seq統合含む）"],
    "approach": "総説（review）＋ scRNA-seq統合を含む文献横断分析",
    "added": "2026-06-15",
    "abstract_ja": "MASLDの進行に肝マクロファージが中心的に関与するが、その集団は単一ではなく、胚由来の常在KC（resKC）と病態で流入する単球由来マクロファージ（moMφ）、さらにLAM/TREM2+亜集団など多様なサブセットからなる。本総説はscRNA-seq知見を統合し、これら亜集団のニッチ依存的な同一性維持と動態、各サブセットがMASLD進行（脂肪化・炎症・線維化）に果たす役割を整理する。常在KCのニッチ喪失と単球由来集団への置換が病態の鍵であり、サブセット特異的な機能理解が治療標的選定に不可欠であることを論じる。",
    "background": "従来「KC」と一括りにされてきた肝マクロファージは、発生起源・空間配置・機能が異なる複数集団の総称であることがscRNA-seqで明らかになった。MASLDではこの多様性が動的に変化するため、どの集団が保護的でどれが病的かを区別しなければ、マクロファージ標的治療は設計できない。",
    "achievements": ["resKC（常在KC）とmoMφ（単球由来Mφ）、LAM/TREM2+集団など**MASLD肝マクロファージの亜集団地図**を統合的に提示した。", "各サブセットの**ニッチ依存的な同一性維持**と、病態進行に伴う常在KC→単球由来集団への置換ダイナミクスを整理した。", "サブセットごとに**脂肪化・炎症・線維化への寄与**が異なることを示し、治療標的としての評価軸を提供した。"],
    "limitations": ["総説であり一次データの再解析ではなく、統合解釈に依存する。", "ヒトとマウスのサブセット対応は完全には確立していない。", "in vitro共培養に単一KC集団を入れるモデルでは、この多様性が再現されない（niche simplification）。"],
    "glossary": [{"term": "resKC", "full": "resident Kupffer cell", "desc": "胚由来・自己複製性の常在KC。恒常性・寛容性機能を担う"}, {"term": "moMφ", "full": "monocyte-derived macrophage", "desc": "病態で流入する単球由来マクロファージ。炎症・線維化に関与"}, {"term": "LAM", "full": "lipid-associated macrophage", "desc": "TREM2+/CD9+の脂質関連マクロファージ。MASLDで増加"}, {"term": "niche simplification", "full": "niche simplification", "desc": "単一KC集団のみを入れる培養系で生じるマクロファージ多様性の喪失"}],
    "struct": {"model": "総説（文献統合）", "cells": ["resKC", "moMφ", "LAM/TREM2+", "HSC"], "triggers": ["MASLD進行", "ニッチ改変"], "steatosis": "△", "inflammation": "○", "fibrosis": "○", "readout": ["サブセットマーカー（scRNA-seq）", "サブセット動態", "線維化寄与"], "ignite": "単球由来集団へのシフト＋LAM/炎症性Mφ増加が線維化に寄与", "params": [{"name": "KCサブセット構成→線維化駆動度", "note": "resKC/moMφ/LAMの比率を炎症・線維化点火確率に変換するABMルール"}], "todos": ["共培養に入れるKC集団の表現型を明示しniche simplificationを認識", "#22(De Ponti一次研究)と対比してサブセット寄与を解釈"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m28' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：scRNA-seq統合で肝マクロファージ亜集団を地図化</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>scRNA-seq統合</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>多データ横断</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>サブセット同定</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--G)'>resKC/moMφ/LAM</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m28)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>サブセット分類</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>起源・空間で分類</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ニッチ依存性</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>同一性維持</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m28)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>MASLD動態</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>常在→単球置換</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>LAM増加</text>\n  <text x='529' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>線維化寄与</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>De Ponti FF, Scott CL et al., JHEP Reports (2024)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f28' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>MASLDマクロファージ多様性：サブセットで役割が異なる</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>resKC</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>胚由来・常在</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>恒常性/寛容</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f28)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>moMφ</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>単球由来・流入</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>炎症</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f28)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>LAM/TREM2+</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脂質関連</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>修復〜線維化</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f28)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>病態進行</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>サブセット比で</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>脂肪化→炎症→線維化</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>単一KC集団のみの培養はniche simplification</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("28", [{ic:"macrophage",cap:"resKC/moMφ/LAM（TREM2+）"}, {ic:"omics",cap:"scRNA-seq知見の統合"}, {ic:"stellate",cap:"線維化への寄与"}, {ic:"liver",cap:"MASLD進行とニッチの改変"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 28 De Ponti 2024 JHEP Reports: MASLDマクロファージ全体像総説 */
LP.methods("28", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №28 MASLDマクロファージ多様性：サブセットで役割が異なる ===== */
LP.cinema("28", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("28")}${GLYPH.arrow("28c","var(--C)")}${GLYPH.arrow("28b","var(--B)")}</defs>`
    +GLYPH.title("MASLDマクロファージ多様性：resKC→moMφ浸潤→LAM/TREM2+出現→線維化進行度を規定")
    +GLYPH.hep("hep28",40,50,0.7,"肝細胞")
    +GLYPH.mac("reskc28",180,260,"resKC(常在)","#5d7a58")
    +`<g id="mono28" class="fade">`+GLYPH.monocyte("mo28",380,100,"単球(流入)")+`</g>`
    +`<g id="moMf28" class="fade">`+GLYPH.mac("momf28",380,260,"moMφ(炎症性)","#9c4f6c")+`</g>`
    +`<g id="lam28" class="fade">`
      +GLYPH.mac("lamM28",560,260,"LAM/TREM2+","#6a6a3a")
      +GLYPH.receptor("trem2_28",525,235,"TREM2","var(--C)")
    +`</g>`
    +`<g id="balance28" class="fade"><text x="360" y="385" text-anchor="middle" font-size="10" fill="var(--B)" font-weight="600">サブセット比 → 脂肪化/炎症/線維化の進行度を決定</text></g>`
    +GLYPH.layer("col28"),
  build(K){
    const dp=[[100,100],[130,120],[110,145],[145,135],[120,160]];
    return [
      {color:"C",t:2600,cap:"健常肝。胚由来の常在KC（resKC）が恒常性と免疫寛容を担う。肝細胞は正常な代謝活性を保つ。",run(){
        K.pulse("reskc28");
        K.T(()=>K.unpulse("reskc28"),2000);
      }},
      {color:"C",t:3800,cap:"① MASLDが進行すると末梢血から単球由来マクロファージ（moMφ）が浸潤し、炎症性サイトカインを放出する。脂肪化が並行する。",run(){
        addDrops(K,"hep28Drops",dp,"lip28");
        K.show(["mono28"]);
        K.T(()=>{K.flow(380,116,380,236,"var(--C)",{n:3,dur:1.0,loop:1});K.show(["moMf28"]);},800);
        K.T(()=>radiate(K,380,260,"var(--C)",4),2000);
      }},
      {color:"C",t:3600,cap:"② 脂質環境でTREM2+の脂質関連マクロファージ（LAM）が出現。修復から線維化促進まで多様な役割を担う。",run(){
        K.show(["lam28"]);
        K.flow(404,260,536,260,"var(--C)",{n:2,dur:1.0,loop:2});
        K.T(()=>{K.pulse("trem2_28");},600);
        K.T(()=>{K.unpulse("trem2_28");},2200);
      }},
      {color:"B",t:3400,cap:"③ resKC・moMφ・LAMのどのサブセットが優勢かで、脂肪化→炎症→線維化の進行度が規定される。",run(){
        K.show(["balance28"]);
        K.T(()=>K.draw("col28",GLYPH.collagenAt(560,330),{len:120}),600);
      }},
    ];
  }
});
