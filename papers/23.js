/* ============================================================
   №23 · Nature Metabolism 2026 · Sánchez-Sánchez P, Wang Z, Zagorac S, Domínguez M, Boskovic J, Nair A…
   BECのFXR–YAP軸が胆汁酸バリアを維持——FXR/YAP欠失でβカテニン→EMT→BA漏出→HSC活性化・線維化進行；OCA逆効果
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    "id": "23",
    "title": "BECのFXR–YAP軸が胆汁酸バリアを維持——FXR/YAP欠失でβカテニン→EMT→BA漏出→HSC活性化・線維化進行；OCA逆効果",
    "authors": "Sánchez-Sánchez P, Wang Z, Zagorac S, Domínguez M, Boskovic J, Nair A, Macías-Camero A, Villaseñor A, Schwabe RF, Djouder N†（CNIO, Madrid, Spain）",
    "journal": "Nature Metabolism",
    "year": 2026,
    "vol": "8(5):1189–1211",
    "doi": "10.1038/s42255-026-01521-z",
    "url": "https://www.nature.com/articles/s42255-026-01521-z",
    "primary": "F",
    "tags": ["F", "B"],
    "approach": "in vivo（BEC特異的FXR/YAP条件付きKOマウス＋胆汁酸傷害モデル）＋ 計算解析 ＋ ヒト肝組織ex vivo検証",
    "added": "2026-06-10",
    "abstract_ja": "胆汁酸（BA）は胆管上皮細胞（BEC）に裏打ちされた胆管内腔を流れ、BECが管腔インテグリティと肝恒常性を維持している。本研究はBECが細胞自律的なFXR–YAPシグナルを介して胆汁酸バリアの完全性を守り、BA誘導性の線維化を抑制することを示した。マウス遺伝学・計算解析・ヒト検体の組み合わせにより、BECはFXRを発現し、FXRがYAPを転写活性化してBECの細胞接着を維持することでBAの実質側への漏出を防ぎ、FXR依存的なHSC活性化および線維化をBA代謝異常肝疾患モデルで抑制することを証明した。BEC特異的にFXRまたはYAPを欠失させると、β-カテニン活性化・間葉様転換（EMT）・BEC増殖が生じ、線維化から肝硬変への進行を促進した。ヒトBECでのFXR–YAPシグナルの低下は線維化重症度と並行していた。さらにFXR欠失BECマウスではオベチコール酸（OCA）が線維化を悪化させた。以上より、BAはFXR–YAP–β-カテニンシグナルを介してBECをバリア能の能動的守護者として再プログラムし、胆管アイデンティティの維持と肝恒常性の保全を担うことが明らかになった。",
    "background": "胆汁酸（BA）は肝臓でコレステロールから合成され胆管を通じて腸管へ輸送される一方、FXR（farnesoid X receptor）を介してエネルギー代謝・脂質代謝・炎症を統合的に制御する。BAが過剰蓄積すると肝細胞傷害と炎症が生じ、最終的に線維化・肝硬変に至ることが知られている。胆管上皮細胞（BEC/胆管細胞）は胆管内腔と肝実質の境界を形成するが、BAに対するBECの能動的な防御機構の分子基盤は未解明であった。FXRはBECにも発現するが、BECにおけるFXRの機能はほとんど研究されておらず、既存のFXRアゴニスト（OCA）が一部の患者で予想外の副作用を示す理由も不明だった。",
    "achievements": ["BECがFXRを発現し、**FXRがYAPを転写活性化**してBECの細胞接着プログラムを維持することを同定した。これによりBECが胆汁酸バリアを能動的に守る細胞自律的機構が解明された。", "**BEC特異的FXR欠失またはYAP欠失**マウスにおいて、β-カテニン活性化→BECの間葉様転換（EMT）→密着結合消失→BAの肝実質への漏出→HSCのFXR依存的活性化→線維化進行という一連のカスケードを証明した。", "**ヒト肝組織でFXR–YAPシグナルの低下が線維化重症度と相関**することを確認し、マウスの知見がヒトに保存されていることを示した。", "FXRアゴニストであるOCA（オベチコール酸）が**BEC-FXR欠失マウスで線維化を悪化**させることを発見——BECのFXR状態を考慮しない全身FXRアゴニスト投与が逆効果になりうることを示した臨床的に重要な知見。"],
    "limitations": ["BECを扱っているため、本研究のモデルは主に胆汁うっ滞・胆管障害系モデルが中心であり、典型的なMASH/MASLDモデルへの外挿は限定的。", "YAPはFXRの下流であることが示されたが、YAPが接着プログラムをどの転写因子を介して制御するかの詳細なメカニズムは未完全。", "OCAの逆効果は条件付きFXR KOという特殊な遺伝子背景で示されており、ヒトでの適用性はBECのFXR状態の診断手法の開発が必要。"],
    "connection": ["4細胞オルガノイドにはBECがないが、培地BA濃度管理の重要性を示す（高BA→HSC直接FXR活性化で線維化点火）。LPS+BAの二重セカンドヒットが免疫＋胆汁酸代謝軸の複合線維化モデルになりうる。FXRアゴニストスクリーニング時はBEC有無のコンテキスト明示が必要。"],
    "glossary": [{"term": "FXR", "full": "farnesoid X receptor", "desc": "BAを感知する核内受容体。肝細胞でBA・脂質・糖代謝を統合制御；BECではYAP活性化を介して胆管バリアを維持"}, {"term": "YAP", "full": "Yes-associated protein", "desc": "Hippoシグナル下流のトランスコアクチベーター。BECではFXRの転写標的として細胞接着プログラムを誘導"}, {"term": "BEC", "full": "biliary epithelial cell（胆管上皮細胞）", "desc": "胆管内腔を裏打ちする上皮細胞。FXR–YAP軸で胆汁酸バリアを能動的に守る；欠損でEMT→線維化"}, {"term": "EMT", "full": "epithelial-mesenchymal transition（上皮-間葉転換）", "desc": "BEC-FXR/YAP欠失で誘導される間葉様転換。密着結合を消失させ胆汁酸漏出を引き起こす"}, {"term": "OCA", "full": "obeticholic acid（オベチコール酸）", "desc": "半合成FXRアゴニスト。MASH/PSCの臨床試験中だがBEC-FXR欠失状態では線維化を悪化させる——逆効果の可能性"}, {"term": "BA", "full": "bile acid（胆汁酸）", "desc": "コレステロール由来の両親媒性ステロイド。FXRリガンドとして代謝制御に関与；過剰蓄積でHSC活性化・線維化"}, {"term": "β-catenin", "full": "β-catenin (CTNNB1)", "desc": "Wntシグナルの核トランスロケーター。BEC-FXR/YAP欠失で活性化し、EMTと増殖を駆動"}],
    "struct": {"model": "in vivo + 計算解析 + ヒト組織", "cells": ["胆管上皮細胞(BEC)", "HSC", "肝細胞"], "triggers": ["胆汁酸傷害モデル", "BEC特異的FXR/YAP欠失", "OCA投与"], "steatosis": "—", "inflammation": "△", "fibrosis": "○", "readout": ["胆汁酸漏出", "β-カテニン/EMTマーカー", "HSC活性化", "線維化→肝硬変(Sirius Red)"], "ignite": "BEC-FXR/YAP欠失→EMT→胆汁酸漏出→HSCのFXR依存活性化で線維化点火", "params": [{"name": "培地BA濃度→HSC FXR活性化", "note": "BEC不在のオルガノイドではBA添加がHSCのFXRを直接活性化→線維化点火。生理範囲(1-3µM)を上限ルールに"}, {"name": "OCA応答のBECコンテキスト依存", "note": "FXRアゴニストの効果はBEC有無で逆転しうる。スクリーニング時にセル構成を明示するフラグ"}], "todos": ["培地BA濃度を生理範囲(1-3µM)に制御しHSC直接活性化を回避", "LPS+BAの二重セカンドヒットで免疫×胆汁酸の複合線維化モデルを構築", "FXRアゴニスト評価はBEC共培養型と4細胞型を比較設計"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m23' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：BEC特異的FXR/YAP欠失 → 胆汁酸傷害 → 計算解析 → ヒト相関</text>\n  <rect x='14' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.5'/>\n  <text x='84' y='66' text-anchor='middle' font-size='9.3' fill='var(--F)' font-weight='600'>① BEC特異的cKO</text>\n  <text x='84' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>FXR fl/fl・YAP fl/fl</text>\n  <text x='84' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>胆管細胞でCre</text>\n  <text x='84' y='112' text-anchor='middle' font-size='8.3' fill='var(--F)'>FXR/YAPを欠失</text>\n  <path d='M156,98 L168,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m23)'/>\n  <rect x='172' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='241' y='66' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>② 胆汁酸傷害</text>\n  <text x='241' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>BA負荷モデル</text>\n  <text x='241' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>胆汁うっ滞</text>\n  <text x='241' y='112' text-anchor='middle' font-size='8.3' fill='var(--accent)'>バリア破綻を評価</text>\n  <path d='M314,98 L326,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m23)'/>\n  <rect x='329' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='399' y='66' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>③ 計算解析</text>\n  <text x='399' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>トランスクリプトーム</text>\n  <text x='399' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>接着/EMT経路</text>\n  <text x='399' y='112' text-anchor='middle' font-size='8.3' fill='var(--G)'>βカテニン軸</text>\n  <path d='M472,98 L484,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m23)'/>\n  <rect x='486' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='556' y='66' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>④ ヒト検体</text>\n  <text x='556' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>線維化グレード</text>\n  <text x='556' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>FXR-YAP発現</text>\n  <text x='556' y='112' text-anchor='middle' font-size='8.3' fill='var(--H)'>重症度と相関</text>\n  <text x='320' y='196' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Sánchez-Sánchez P, Djouder N et al., Nat Metab 8(5):1189–1211 (2026)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 320' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs>\n    <marker id='af23' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--F)'/></marker>\n    <marker id='af23b' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker>\n  </defs>\n  <rect x='0' y='0' width='640' height='320' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>BECのFXR–YAP軸が胆汁酸バリアを守る／欠失で線維化が進行</text>\n  <!-- healthy panel -->\n  <rect x='16' y='40' width='292' height='256' rx='10' fill='#eef2ec' stroke='var(--F)' stroke-width='1.3'/>\n  <text x='162' y='60' text-anchor='middle' font-size='9.5' fill='var(--F)' font-weight='700'>健常BEC：バリア維持</text>\n  <rect x='60' y='78' width='200' height='40' rx='6' fill='#dfe7d4' stroke='var(--F)' stroke-width='1.3'/>\n  <text x='160' y='102' text-anchor='middle' font-size='9' fill='var(--F)' font-weight='600'>胆管上皮細胞（BEC）</text>\n  <text x='162' y='140' text-anchor='middle' font-size='9' fill='var(--F)'>FXR → YAP 転写活性化</text>\n  <path d='M120,148 L120,168' stroke='var(--F)' stroke-width='1.4' marker-end='url(#af23)'/>\n  <text x='162' y='184' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>細胞接着・密着結合を維持</text>\n  <text x='162' y='214' text-anchor='middle' font-size='9' fill='var(--F)' font-weight='600'>胆汁酸（BA）を胆管内に保持</text>\n  <ellipse cx='162' cy='250' rx='84' ry='26' fill='#cfe0ee' stroke='var(--E)' stroke-width='1.2'/>\n  <text x='162' y='247' text-anchor='middle' font-size='8.5' fill='var(--E)'>胆管内腔</text>\n  <text x='162' y='261' text-anchor='middle' font-size='8.5' fill='var(--E)'>BA ●●● 漏出なし</text>\n  <!-- disease panel -->\n  <rect x='332' y='40' width='292' height='256' rx='10' fill='#f1e2dd' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='478' y='60' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='700'>FXR/YAP欠失：線維化進行</text>\n  <text x='478' y='84' text-anchor='middle' font-size='9' fill='var(--B)'>β-カテニン活性化</text>\n  <path d='M478,90 L478,106' stroke='var(--B)' stroke-width='1.4' marker-end='url(#af23b)'/>\n  <text x='478' y='122' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>EMT（間葉様転換）→ 接着喪失</text>\n  <path d='M478,128 L478,144' stroke='var(--B)' stroke-width='1.4' marker-end='url(#af23b)'/>\n  <text x='478' y='160' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>胆汁酸が肝実質へ漏出</text>\n  <path d='M478,166 L478,182' stroke='var(--B)' stroke-width='1.4' marker-end='url(#af23b)'/>\n  <text x='478' y='198' text-anchor='middle' font-size='9' fill='var(--B)'>HSCのFXR依存的活性化</text>\n  <path d='M478,204 L478,220' stroke='var(--B)' stroke-width='1.4' marker-end='url(#af23b)'/>\n  <text x='478' y='236' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='700'>線維化 → 肝硬変</text>\n  <rect x='378' y='250' width='200' height='34' rx='6' fill='#f3d6cf' stroke='var(--H)' stroke-width='1.3'/>\n  <text x='478' y='271' text-anchor='middle' font-size='8.5' fill='var(--H)'>OCA(FXRアゴニスト)は逆効果</text>\n  <text x='320' y='312' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>BECのFXR状態を無視した全身FXRアゴニスト投与は線維化を悪化させうる</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("23", [{ic:"liver",cap:"BEC（胆管上皮細胞）FXR-YAP軸が胆汁酸バリアを維持"},{ic:"stellate",cap:"HSC活性化→線維化（FXR/YAP欠失時）"},{ic:"mouse",cap:"BEC特異的FXR/YAP条件付きKOマウス"},{ic:"human",cap:"ヒト肝BECでFXR-YAP発現と線維化重症度相関"},{ic:"drug",cap:"OCA（FXRアゴニスト）がBEC-FXR KOで線維化悪化"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 23 Sánchez-Sánchez/Djouder Nat Metab 2026: BEC特異的FXR/YAP cKO+胆汁酸傷害+計算解析+ヒト肝組織 */
LP.methods("23", ["mouse","human","crispr","insilico","qpcr","wb","imaging","drug"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
LP.cinema("23", {
  svg:GLYPH.bg()
    +`<defs>${GLYPH.defsCommon}${GLYPH.arrow("23f","var(--F)")}${GLYPH.arrow("23b","var(--B)")}</defs>`
    +GLYPH.title("BECのFXR–YAP軸が胆汁酸バリアを維持——FXR/YAP欠失でHSC活性化・線維化進行")
    +`<rect id="ductLumen23" x="90" y="45" width="540" height="42" rx="8" fill="var(--F)" fill-opacity="0.12" stroke="var(--F)" stroke-width="1.2"/><text x="360" y="62" text-anchor="middle" font-size="9" fill="var(--F)">胆管内腔（胆汁酸）</text>`
    +GLYPH.metab("ba23a",175,68,"BA","var(--F)")
    +GLYPH.metab("ba23b",360,68,"BA","var(--F)")
    +GLYPH.metab("ba23c",548,68,"BA","var(--F)")
    +`<g id="becH23"><rect x="90" y="86" width="540" height="34" rx="3" fill="#d8f0d0" stroke="#4a8a3a" stroke-width="1.5"/><text x="360" y="107" text-anchor="middle" font-size="9" fill="#2a6a1a" font-weight="600">BEC（胆管上皮細胞）— FXR発現・密着結合で管腔を密封</text></g>`
    +GLYPH.receptor("fxr23a",196,100,"FXR","var(--F)")
    +GLYPH.receptor("fxr23b",360,100,"FXR","var(--F)")
    +GLYPH.receptor("fxr23c",524,100,"FXR","var(--F)")
    +`<g id="yap23W" class="fade">`+GLYPH.tf("yap23a",238,100,"YAP","var(--F)")+GLYPH.tf("yap23b",402,100,"YAP","var(--F)")+`</g>`
    +`<g id="tjBadge23W" class="fade">`+GLYPH.badge("tjBadge23",560,105,"バリア","✓ 完全","var(--F)")+`</g>`
    +GLYPH.hep("hep23",20,32,0.75,"肝細胞（実質）")
    +GLYPH.stellate("hsc23",360,278,"HSC（静止）")
    +`<g id="becE23" class="fade"><rect x="90" y="86" width="540" height="34" rx="3" fill="#f5d0c0" stroke="#c04020" stroke-width="1.5" stroke-dasharray="6,3"/><text x="360" y="107" text-anchor="middle" font-size="9" fill="#8a2010" font-weight="600">BEC → EMT（間葉様転換）・密着結合消失</text></g>`
    +`<g id="baLeak23" class="fade"><text x="225" y="145" text-anchor="middle" font-size="9" fill="var(--B)">BA漏出↓</text><text x="490" y="145" text-anchor="middle" font-size="9" fill="var(--B)">BA漏出↓</text></g>`
    +`<g id="bcat23W" class="fade">`+GLYPH.badge("bcat23",100,108,"β-cat","↑活性化","var(--B)")+`</g>`
    +`<g id="oca23W" class="fade">`+GLYPH.pill("oca23",110,230,"OCA (FXRアゴニスト)","var(--B)")+`</g>`
    +GLYPH.layer("col23"),
  build(K){
    return [
      {color:"F",t:2400,cap:"① 健常肝。胆管内腔を胆汁酸（BA）が流れ、BEC（胆管上皮細胞）が密着結合で管腔を密封している。BECはFXRを発現し、肝星細胞（HSC）は静止状態にある。",run(){}},
      {color:"F",t:4400,cap:"② BAがBECのFXRに結合→FXRがYAPを転写活性化。YAPはBECの細胞接着遺伝子群を誘導し密着結合を強固に維持→BAが肝実質側に漏出せず、FXR依存的なHSC活性化は起こらない。",
       run(){
         K.flow(360,68,360,88,"var(--F)",{n:4,dur:1.0,loop:2});
         K.T(()=>{K.show(["yap23W"]);K.pulse("yap23a");K.pulse("yap23b");},1000);
         K.T(()=>{K.unpulse("yap23a");K.unpulse("yap23b");K.show(["tjBadge23W"]);K.pulse("tjBadge23");},2500);
       }},
      {color:"B",t:5000,cap:"③ BEC特異的FXRまたはYAPを遺伝的欠失→β-カテニン活性化→BECが間葉様転換（EMT）→密着結合消失→BAが肝実質へ漏出。漏出BAがHSCのFXRを直接活性化し、HSCが活性化・線維化が進行する。",
       run(){
         K.unpulse("tjBadge23");
         K.attr("tjBadge23W","opacity","0");
         K.attr("yap23W","opacity","0.12");
         K.attr("fxr23a","opacity","0.12");K.attr("fxr23b","opacity","0.12");K.attr("fxr23c","opacity","0.12");
         K.attr("becH23","opacity","0");
         K.show(["becE23","bcat23W","baLeak23"]);
         K.pulse("bcat23");
         K.T(()=>{
           K.unpulse("bcat23");
           K.flow(230,143,360,245,"var(--B)",{n:3,dur:1.1,loop:2});
           K.flow(490,143,360,245,"var(--B)",{n:3,dur:1.1,loop:2});
           K.T(()=>{K.morph("hsc23Shape",GLYPH.SPINDLE);K.attr("hsc23Shape","fill","#b0432f");K.text("hsc23Cap","活性化HSC");},2000);
         },1200);
       }},
      {color:"B",t:4200,cap:"④ 活性化HSCがコラーゲン過剰産生→肝線維化・肝硬変へ進行。重要：FXRアゴニストOCA（オベチコール酸）はBEC-FXR欠失マウスで線維化をさらに悪化させた——BECのFXR状態を考慮しない全身FXR標的療法は逆効果になりうる。",
       run(){
         K.show(["oca23W"]);
         K.pulse("oca23");
         K.T(()=>{K.unpulse("oca23");K.draw("col23",GLYPH.collagenAt(360,370),{len:200});},1800);
       }},
    ];
  }
});
