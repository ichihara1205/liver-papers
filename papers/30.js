/* ============================================================
   №30 · Cellular & Molecular Immunology 2025 · Nusse Y, Kubes P
   肝臓には4種類の居住型マクロファージが存在する——類洞内KC・被膜下・中心静脈周囲・胆管周囲と発生的起源・機能専門化の整理
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"30", primary:"C",
    title:"肝臓には4種類の居住型マクロファージが存在する——類洞内KC・被膜下・中心静脈周囲・胆管周囲と発生的起源・機能専門化の整理",
    authors:"Nusse Y, Kubes P",
    journal:"Cellular & Molecular Immunology",
    year:2025,
    vol:"22:1178-1189",
    doi:"10.1038/s41423-025-01298-3",
    url:"https://www.nature.com/articles/s41423-025-01298-3",
    catPrimary:"C",
    catSub:[],
    tags:["C"],
    summary:"肝臓には少なくとも4種類の居住型マクロファージ（KC＝類洞内、肝被膜下マクロファージ、中心静脈周囲、胆管周囲）が存在することを整理した2025年総説（Kubsグループ）。胚発生では卵黄嚢由来のEMP（erythro-myeloid progenitor）が胎生9.5日頃に肝臓に播種し生後7日に類洞内に移行する。Necrotic injuryでは単球由来MφがHSC活性化・デブリ除去・肝細胞増殖支持のシグナルを担う。マクロファージ多様性を発生・動態・機能の三軸でまとめた簡潔かつ最新の参考書的総説。",
    connection:["共培養系に「KC」を1集団として加えることの「simplification」を認識し、その位置づけ（類洞内resKC＝homeostatic/tolerogenic機能）を明確にするための概念的基盤。No.28（De Ponti 2024 MASLD総説）・No.29（David 2026 Nat Rev Immunol総説）と統合して肝マクロファージ生物学の全体像を把握できる。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析",
    "added": "2026-06-15",
    "abstract_ja": "肝には類洞内のKCに加え、被膜下・中心静脈周囲・胆管周囲という空間的に異なる四種類の居住型マクロファージが存在する。本総説はこれら集団の発生的起源（卵黄嚢/EMP由来 vs 単球由来）、空間配置、機能的専門化を整理し、傷害・壊死・再生の各文脈で果たす役割を比較する。類洞内resKCが恒常性・寛容性を担う一方、被膜下や中心静脈周囲の集団は局所的な防御・修復に特化しており、「肝マクロファージ＝KC」という単純化を超えた空間分業の理解を提供する。",
    "background": "単一細胞・空間解析の進展により、肝マクロファージが一様でないことが明らかになった。どの集団がどこに住み何をするのかを整理しなければ、肝免疫の局所的制御や培養系での再現は困難である。",
    "achievements": ["肝に**四種類の居住型マクロファージ（類洞内・被膜下・中心静脈周囲・胆管周囲）**が存在することを空間的に整理した。", "各集団の**発生起源（卵黄嚢/EMP vs 単球）と機能専門化**を対比した。", "傷害・壊死・再生での集団別の役割分担を示し、KC一括り理解の限界を明示した。"],
    "limitations": ["総説であり集団境界や機能の定義は今後精緻化される余地がある。", "ヒト肝での四集団の対応関係は完全には確立していない。", "培養系では類洞内resKC以外の集団はほぼ再現されない。"],
    "glossary": [{"term": "capsular macrophage", "full": "capsular macrophage（被膜下マクロファージ）", "desc": "肝被膜直下に居住し腹腔由来の防御を担うマクロファージ集団"}, {"term": "EMP", "full": "erythro-myeloid progenitor", "desc": "卵黄嚢由来の前駆細胞。多くの組織常在マクロファージの起源"}, {"term": "yolk sac", "full": "yolk sac（卵黄嚢）", "desc": "胚発生初期の造血部位。KC等の組織常在マクロファージの発生起源"}],
    "struct": {"model": "総説（文献統合）", "cells": ["類洞内KC", "被膜下Mφ", "中心静脈周囲Mφ", "胆管周囲Mφ"], "triggers": ["傷害・壊死", "再生"], "steatosis": "—", "inflammation": "△", "fibrosis": "—", "readout": ["集団別マーカー", "空間配置", "起源（卵黄嚢/単球）"], "ignite": "—（恒常性・空間分業の整理が主目的）", "params": [{"name": "KC空間サブセット→局所機能", "note": "共培養に入れるのは類洞内resKC相当であることを明示するモデル前提"}], "todos": ["共培養KCを類洞内resKC(homeostatic/tolerogenic)として位置づけ", "#28・#29と統合して肝Mφ全体像を把握"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m30' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：肝の4種マクロファージを空間・起源で整理</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>類洞内KC</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>卵黄嚢/EMP由来</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>恒常性・寛容</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m30)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>被膜下Mφ</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>腹腔側防御</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>局所防御</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m30)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>中心静脈周囲Mφ</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>CV近傍</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>局所機能</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m30)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>胆管周囲Mφ</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>胆管近傍</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>局所機能</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Nusse Y, Kubes P, Cell Mol Immunol (2025)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f30' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>肝マクロファージの空間分業：KCは一集団ではない</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>傷害・壊死</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>局所シグナル</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>集団別応答</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f30)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>空間4集団</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>配置で機能分化</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>起源も多様</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>分業</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f30)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>恒常性/修復</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>resKC=寛容</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>他=局所防御</text>\n  <text x='529' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--A)'>役割分担</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>培養系で再現されるのは主に類洞内resKC相当</text>\n  </svg>"
  }
);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 30 Nusse & Kubes 2025 Cell Mol Immunol: 4種肝マクロファージ総説 */
LP.methods("30", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №30 肝マクロファージの空間分業：KCは一集団ではない ===== */
LP.cinema("30", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("30c","var(--C)")}</defs>`
    +GLYPH.title("肝マクロファージの空間分業：起源と居住場所で機能が異なる複数集団")
    +`<polygon id="lobPoly30" points="360,45 530,135 530,315 360,405 190,315 190,135" fill="#f5f2ec" stroke="#c8bb9a" stroke-width="2"/>`
    +`<circle id="cv30" cx="360" cy="225" r="18" fill="#c8e0f0" stroke="var(--E)" stroke-width="1.8"/><text x="360" y="221" text-anchor="middle" font-size="8.5" fill="var(--E)">CV</text><text x="360" y="232" text-anchor="middle" font-size="8" fill="var(--E)">中心静脈</text>`
    +`<circle cx="190" cy="135" r="8" fill="#7ab5d8" stroke="#4a8ab0" stroke-width="1.2"/><text x="190" y="122" text-anchor="middle" font-size="8" fill="#4a8ab0">PV</text>`
    +`<circle cx="530" cy="135" r="8" fill="#7ab5d8" stroke="#4a8ab0" stroke-width="1.2"/><text x="530" y="122" text-anchor="middle" font-size="8" fill="#4a8ab0">PV</text>`
    +GLYPH.mac("resKC30",320,180,"resKC(類洞内)","#5d7a58")
    +`<g id="cvMac30" class="fade">`+GLYPH.mac("cvM30",400,260,"CV周囲Mφ","#6a7a8a")+`</g>`
    +`<g id="capMac30" class="fade">`+GLYPH.mac("capM30",250,110,"被膜下Mφ","#8a7060")+`</g>`
    +`<g id="bdMac30" class="fade">`+GLYPH.mac("bdM30",460,140,"胆管周囲Mφ","#7a6a8a")+`</g>`
    +`<g id="yolkTag30" class="fade">`+GLYPH.tag("yolk30",120,250,"卵黄嚢/EMP由来","var(--C)",110)+`</g>`
    +`<g id="monoTag30" class="fade">`+GLYPH.tag("mono30",600,250,"単球由来","var(--C)",80)+`</g>`,
  build(K){
    return [
      {color:"C",t:2600,cap:"肝小葉の構造。類洞内の常在KC（resKC）は卵黄嚢/EMP由来で、恒常性と免疫寛容の中心を担う。",run(){
        K.show(["yolkTag30"]);
        K.pulse("resKC30");
        K.T(()=>K.unpulse("resKC30"),2000);
      }},
      {color:"C",t:3600,cap:"① 被膜下（Glissonカプセル直下）には別の居住型マクロファージが存在し、肝被膜の防御と再生に関わる。",run(){
        K.show(["capMac30"]);
        K.T(()=>K.pulse("capM30"),300);
        K.T(()=>K.unpulse("capM30"),2400);
      }},
      {color:"C",t:3600,cap:"② 中心静脈（CV）周囲や胆管周囲にも機能的に異なるマクロファージ集団が配置される。起源は卵黄嚢由来と単球由来が混在。",run(){
        K.show(["cvMac30","bdMac30","monoTag30"]);
        K.T(()=>{K.pulse("cvM30");K.pulse("bdM30");},300);
        K.T(()=>{K.unpulse("cvM30");K.unpulse("bdM30");},2400);
      }},
      {color:"A",t:3200,cap:"③ 傷害・壊死・再生の局面で各集団が空間的に分業する。in vitro培養で再現されるのは主に類洞内resKCであり、他集団は見落とされやすい。",run(){
        K.pulse("resKC30");
        radiate(K,320,180,"var(--C)",4);
        K.T(()=>K.unpulse("resKC30"),2200);
      }},
    ];
  }
});
