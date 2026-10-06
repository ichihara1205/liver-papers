/* ============================================================
   №40 · Nature Communications 2017 · Li Y, Duan Z, Liu J et al.
   VSIG4（CRIg）がPI3K/Akt→PDK2軸でマクロファージの代謝リプログラミングを介してLPS誘発炎症を抑制する
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"40", primary:"C",
    title:"VSIG4（CRIg）がPI3K/Akt→PDK2軸でマクロファージの代謝リプログラミングを介してLPS誘発炎症を抑制する",
    authors:"Li Y, Duan Z, Liu J et al.",
    journal:"Nature Communications",
    year:2017,
    vol:"8(1):1322",
    doi:"10.1038/s41467-017-01327-4",
    url:"https://www.nature.com/articles/s41467-017-01327-4",
    catPrimary:"C",
    catSub:["D"],
    tags:["C","D"],
    summary:"VSIG4（CRIg、B7ファミリー関連タンパク）がPI3K/Akt→STAT3経路を介してPDK2（ピルビン酸デヒドロゲナーゼキナーゼ2）を誘導し、ピルビン酸→アセチルCoA変換（TCAサイクル供給）を抑制することでミトコンドリア由来ROSを減少させ、マクロファージのLPS誘発炎症を代謝レベルで鎮静化するメカニズムを解明した原著。Vsig4−/−マウスは高脂肪食による肥満・MHV-3誘導性劇症肝炎に対して感受性が高まり、VSIG4が生理的な炎症ブレーキとして機能することが証明された。",
    connection:["iKCがVSIG4を発現しているかどうかはKC成熟度の指標であるとともに、LPS刺激に対してKCが炎症抑制方向に傾いているかを示す。KC由来炎症シグナルが想定より弱い場合、VSIG4高発現による代謝的炎症抑制の可能性を確認できる。steatotic環境でのVSIG4発現変化（低下→炎症亢進への転換）も追うべき指標。ABMではVSIG4→PDK2→炎症ブレーキ係数をKCエージェントのルールに実装できる。"],
    methods:["in vivo（Vsig4−/−マウス+高脂肪食/MHV-3モデル）","in vitro（マクロファージ+LPS刺激）","フローサイトメトリー","ウェスタンブロット","ROS測定","代謝解析"],
    "approach": "in vivo（Vsig4−/−マウス＋高脂肪食/MHV-3）＋ in vitro（マクロファージ＋LPS）＋ FACS・WB・ROS測定・代謝解析",
    "added": "2026-06-15",
    "abstract_ja": "補体受容体VSIG4（CRIg）はKC/マクロファージに高発現するが、その抗炎症作用の分子機序は不明であった。本研究はVSIG4がPI3K/Akt経路を介してPDK2を誘導し、マクロファージの代謝リプログラミング（解糖系の抑制方向への調整）を引き起こすことで、LPS誘発炎症を抑制することを示した。Vsig4欠損マウスでは高脂肪食・ウイルス性肝炎モデルで炎症・ROS産生が亢進し、代謝—炎症連関の制御因子としてVSIG4が機能することを明らかにした。KCの炎症ブレーキとしてのVSIG4の役割を分子レベルで規定した。",
    "background": "KCは強い貪食能と同時に過剰炎症を抑える寛容機能をもつが、その代謝的基盤は十分理解されていなかった。VSIG4は補体オプソニン化粒子の受容体として知られる一方、炎症抑制作用の機構（特に細胞代謝との関係）が未解明だった。",
    "achievements": ["**VSIG4→PI3K/Akt→PDK2軸**がマクロファージの代謝リプログラミングを介して炎症を抑制することを同定した。", "**Vsig4欠損**で高脂肪食・ウイルス性肝炎モデルにおいて炎症・ROS産生が亢進することを示した。", "VSIG4を**代謝—炎症連関の制御因子**として位置づけ、KCの炎症ブレーキ機構を分子レベルで解明した。"],
    "limitations": ["全身性Vsig4欠損であり、KC特異的寄与の切り分けは限定的。", "ヒトKCでの同等機構の直接検証は本論文の射程外。", "代謝リプログラミングの下流標的の網羅的解明は部分的。"],
    "glossary": [{"term": "VSIG4", "full": "V-set and immunoglobulin domain containing 4 (CRIg)", "desc": "KC/Mφの補体受容体。PI3K/Akt→PDK2を介し炎症を抑制"}, {"term": "PDK2", "full": "pyruvate dehydrogenase kinase 2", "desc": "解糖系・ピルビン酸代謝を調節するキナーゼ。VSIG4下流で炎症抑制に寄与"}, {"term": "CRIg", "full": "complement receptor of the immunoglobulin superfamily", "desc": "VSIG4の別名。補体オプソニン化粒子の貪食受容体"}],
    "struct": {"model": "in vivo + in vitro", "cells": ["KC/マクロファージ"], "triggers": ["LPS刺激", "高脂肪食", "ウイルス性肝炎(MHV-3)"], "steatosis": "△", "inflammation": "○", "fibrosis": "—", "readout": ["炎症サイトカイン", "ROS", "代謝フラックス", "VSIG4/PDK2発現"], "ignite": "—（炎症抑制機構。VSIG4低下で炎症亢進＝抑制解除）", "params": [{"name": "VSIG4→PDK2→炎症ブレーキ係数", "note": "KCエージェントにVSIG4依存の炎症抑制係数を実装。steatoticでVSIG4↓→炎症↑"}], "todos": ["共培養iKCのVSIG4発現でKCの炎症抑制傾向を評価", "steatotic条件でVSIG4低下→炎症亢進の転換を追跡"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m40' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：Vsig4欠損と炎症・代謝の評価</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① モデル</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>Vsig4−/−マウス</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>高脂肪食/MHV-3</text>\n  <text x='84' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--accent)'>炎症評価</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m40)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>② Mφ＋LPS</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>in vitro刺激</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>炎症応答</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>VSIG4の効果</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m40)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>③ 代謝/ROS解析</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>代謝フラックス</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ROS測定</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--D)'>PDK2軸</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m40)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>④ 機構</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>PI3K/Akt→PDK2</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>炎症抑制</text>\n  <text x='556' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--H)'>代謝—炎症連関</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Li Y, Duan Z, Liu J et al., Nat Commun (2017)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f40' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>VSIG4→PDK2が代謝を介して炎症にブレーキ</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>VSIG4 (CRIg)</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>KC高発現</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>補体受容体</text>\n  <text x='84' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>炎症ブレーキ</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f40)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>PI3K/Akt → PDK2</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>代謝リプログラム</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>解糖調整</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--H)'>炎症抑制</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f40)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>LPS炎症↓</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ROS↓</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>サイトカイン↓</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--A)'>恒常性維持</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f40)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>VSIG4欠失</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ブレーキ解除</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>炎症亢進</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>steatoticでVSIG4↓→炎症亢進への転換に注意</text>\n  </svg>"
  }
);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 40 Li 2017 Nat Commun: VSIG4→PDK2→代謝的炎症抑制 */
LP.methods("40", ["mouse","invitro","facs","wb","drug"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №40 VSIG4→PDK2が代謝を介してKCの炎症にブレーキ ===== */
LP.cinema("40", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("40c","var(--C)")}${GLYPH.arrow("40h","var(--H)")}</defs>`
    +GLYPH.title("VSIG4がPI3K/Akt→PDK2を介してKCの炎症をブレーキ——喪失で炎症亢進")
    +GLYPH.mac("kc40",260,190,"クッパー細胞","#5d7a58")
    +GLYPH.receptor("vsig4_40",260,148,"VSIG4(CRIg)","var(--C)")
    +`<g id="cascade40" class="fade">`
      +GLYPH.tag("pi3k40",260,290,"PI3K/Akt","var(--H)",80)
      +GLYPH.tag("pdk2_40",260,340,"PDK2","var(--H)",64)
    +`</g>`
    +`<g id="brake40" class="fade"><circle cx="260" cy="400" r="28" fill="#fff" stroke="var(--E)" stroke-width="2.4"/><text x="260" y="396" text-anchor="middle" font-size="10" fill="var(--E)" font-weight="600">ROS↓</text><text x="260" y="410" text-anchor="middle" font-size="9" fill="var(--E)">炎症抑制</text></g>`
    +GLYPH.cytokine("lps40",80,190,"LPS","var(--C)",true)
    +`<g id="lossG40" class="fade">`
      +GLYPH.mac("kc40b",540,190,"KC(VSIG4喪失)","#9c4f4f")
      +`<text x="540" y="148" text-anchor="middle" font-size="10" fill="var(--B)" font-weight="600">VSIG4↓</text>`
    +`</g>`
    +GLYPH.cytokine("tnf40",540,310,"TNFα/IL-1β","var(--B)",true)
    +GLYPH.layer("inflam40"),
  build(K){
    return [
      {color:"E",t:2400,cap:"健常な類洞。クッパー細胞（KC）の膜にはVSIG4（CRIg; 補体受容体）が高発現している。",run(){}},
      {color:"H",t:3800,cap:"① VSIG4がPI3K/Akt→PDK2経路を活性化し、代謝リプログラミングを介してKCの炎症応答にブレーキをかける。",run(){
        K.show(["cascade40"]);
        K.flow(260,165,260,278,"var(--H)",{n:2,dur:0.9,loop:2});
        K.T(()=>K.flow(260,303,260,328,"var(--H)",{n:2,dur:0.7,loop:2}),600);
        K.T(()=>{K.show(["brake40"]);K.pulse("pdk2_40");},1400);
        K.T(()=>K.unpulse("pdk2_40"),2600);
      }},
      {color:"C",t:3800,cap:"② LPSが到達しても、VSIG4→PDK2ブレーキが働いてROS産生・サイトカイン放出が抑えられ、KC恒常性が保たれる。",run(){
        K.show(["lps40"]);
        K.flow(96,190,236,190,"var(--C)",{n:3,dur:1.0,loop:2});
        K.T(()=>K.pulse("brake40"),800);
        K.T(()=>K.unpulse("brake40"),2500);
      }},
      {color:"B",t:3600,cap:"③ VSIG4が低下/喪失するとブレーキが解除され、KCがLPSに過応答して炎症性サイトカイン（TNFα/IL-1β）を放出→MASLD進行を加速。",run(){
        K.attr("cascade40","opacity","0.2");K.attr("brake40","opacity","0.2");
        K.show(["lossG40"]);
        K.T(()=>{K.show(["tnf40"]);radiate(K,540,190,"var(--B)");},800);
      }},
    ];
  }
});
