/* ============================================================
   №45 · Nat Med 2018 · Hoyles L, Fernández-Real JM, Federici M, Serino M, Abbott J, Charpent…
   腸内細菌代謝物フェニル酢酸が脂肪化を引き起こす——肥満女性のメタゲノム×フェノミクス
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"45", primary:"D",
    title:"腸内細菌代謝物フェニル酢酸が脂肪化を引き起こす——肥満女性のメタゲノム×フェノミクス",
    authors:"Hoyles L, Fernández-Real JM, Federici M, Serino M, Abbott J, Charpentier J, et al., Postic C, Burcelin R, Dumas ME",
    journal:"Nat Med",
    year:2018,
    vol:"24(7):1070-1080",
    doi:"10.1038/s41591-018-0061-3",
    url:"https://doi.org/10.1038/s41591-018-0061-3",
    tags:["D","A","C"],
    "approach": "ヒトコホート（FLORINASH：高度肥満の非糖尿病女性2集団）＋ 便ショットガンメタゲノム ＋ 肝トランスクリプトーム ＋ 血漿/尿メタボローム ＋ マウス糞便移植・PAA慢性投与による因果検証",
    "added": "2026-09-20",
    "abstract_ja": "肝の脂肪化は多因子性で、肥満患者にしばしば見られ非アルコール性脂肪性肝疾患の入口となるが、腸内細菌叢が宿主のどの分子ネットワークを介してそこに関わるのかは明確でなかった。本研究は高度肥満の非糖尿病女性を対象とした二つのコホートで、便のショットガンメタゲノムと、肝トランスクリプトーム・血漿および尿のメタボロームという宿主側のフェノームを同時に取得し、両者を結ぶ分子ネットワークを描き出した。脂肪化を有する患者では微生物の遺伝子richnessが低く、食事脂質の処理とエンドトキシン生合成——とりわけProteobacteria由来——の遺伝的ポテンシャルが高まっており、宿主側では肝の炎症と、芳香族アミノ酸および分岐鎖アミノ酸（BCAA）代謝の脱制御が並行して認められた。さらに糞便移植と、芳香族アミノ酸の微生物代謝産物であるフェニル酢酸（PAA）の慢性投与が、いずれも脂肪化とBCAA代謝の変化を引き起こすことを示し、相関の記述から因果の検証へ踏み込んだ。得られた分子フェノームのシグネチャは判別能が高く（AUC 87%）、脂肪化のかなりの部分が腸内細菌叢によって説明されうること、したがって微生物叢を標的とする介入が原理的に可能であることを示唆する。",
    "background": "肥満に伴う肝脂肪化では腸内細菌叢の関与が繰り返し指摘されてきたが、報告の多くは菌叢組成と表現型の相関にとどまり、どの微生物代謝物が宿主のどの経路に作用して脂肪化を押すのかという機序の鎖がつながっていなかった。菌叢・肝の転写・循環代謝物を同一個体で揃えて測った研究が乏しく、さらに相関から因果へ進むための介入実験も不足していたため、候補分子を一つ取り出して単独で脂肪化を誘導できるかを確かめる段階に至っていなかった。",
    "achievements": ["便メタゲノム・肝トランスクリプトーム・血漿/尿メタボロームを同一コホートで統合し、腸内細菌叢と脂肪化フェノームを結ぶ分子ネットワークを提示した。", "脂肪化群では微生物**遺伝子richnessが低下**し、食事脂質処理と**エンドトキシン生合成**（Proteobacteria優位）の遺伝的ポテンシャルが高いことを示した。", "宿主側では肝の炎症と、**芳香族アミノ酸・BCAA代謝の脱制御**が並行して起きていた。", "糞便移植と**フェニル酢酸（PAA）の慢性投与**が脂肪化とBCAA代謝変化を誘導することを示し、単一の微生物代謝物で因果を検証した。"],
    "limitations": ["コホートは高度肥満の非糖尿病女性に限られ、男性や非肥満、糖尿病合併例へそのまま一般化できない。", "PAAの因果検証はマウスとヒト初代肝細胞で行われており、投与濃度はヒト血漿の生理的濃度より高い設定を含む。", "ヒトにおける介入試験ではないため、PAAを下げれば脂肪化が改善するかは示されていない。", "横断的なオミクス統合であり、菌叢変化と脂肪化の時間的な前後関係は確定していない。"],
    "connection": ["LEADS（No.48）がPAAを第2ヒットに使う根拠がここにあり、自分の系にPAAを足すという案の一次出典でもある。", "ただし日本ではフェニル酢酸は**覚醒剤取締法の覚醒剤原料**にあたる。フェニルアセトンを経てメタンフェタミン/アンフェタミンに至るためで、塩も同様に扱われる。覚醒剤原料研究者の指定と保管要件が必要で、通常の試薬のようには発注できないため、購入検討の前に薬品管理責任者に確認する。", "PAAは抱合にグルタミンを消費し、窒素を尿素回路から逸らす。尿素を肝機能の読み出しに使っている限りこれは交絡になるので、使うならALB分泌やCYP活性へ指標を移す。", "エンドトキシン生合成ポテンシャルの上昇という所見は、KCを入れてLPSを第2ヒットにするという設計に、腸由来という文脈を与える。"],
    "glossary": [{"term": "PAA", "full": "phenylacetic acid", "desc": "芳香族アミノ酸に由来する微生物代謝物。慢性投与で脂肪化を誘導する"}, {"term": "BCAA", "full": "branched-chain amino acid", "desc": "分岐鎖アミノ酸（ロイシン・イソロイシン・バリン）。脂肪化で代謝が脱制御される"}, {"term": "metagenomics", "full": "shotgun metagenomics", "desc": "便中の全微生物ゲノムを網羅的に配列決定し機能ポテンシャルを推定する手法"}, {"term": "gene richness", "full": "microbial gene richness", "desc": "腸内細菌叢が持つ遺伝子の多様度。低下が代謝性疾患と結びつく"}, {"term": "FMT", "full": "fecal microbiota transplantation", "desc": "糞便微生物叢移植。菌叢の因果的寄与を検証する介入"}, {"term": "Proteobacteria", "full": "Proteobacteria", "desc": "LPSを産生するグラム陰性菌を多く含む門。脂肪化群で優位になる"}],
    "struct": {"model": "mixed", "cells": ["ヒト肝組織", "マウス肝", "ヒト初代肝細胞"], "triggers": ["腸内細菌叢（糞便移植）", "フェニル酢酸(PAA)慢性投与"], "steatosis": "○", "inflammation": "△", "fibrosis": "—", "readout": ["肝トリグリセリド", "肝トランスクリプトーム", "血漿/尿メタボローム", "微生物遺伝子richness"], "ignite": "PAAは脂肪化までは押すが、線維化を点火したことを示した研究ではない", "params": [{"name": "PAA", "note": "慢性投与で脂肪化とBCAA代謝変化を誘導。ABMでは外部代謝物入力として扱える"}, {"name": "エンドトキシン生合成ポテンシャル", "note": "Proteobacteria由来LPS供給の背景値を与える"}], "todos": ["PAA添加の可否を薬品管理責任者に確認する（覚醒剤原料に該当）", "PAAを使う場合は尿素以外の肝機能指標（ALB分泌・CYP活性）へ切り替える", "LPS単回パルスとPAAのどちらが自分の系で第2ヒットとして現実的かを比較する"]},
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f45' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>腸内細菌→PAA→肝の脂肪化とBCAA代謝の脱制御</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>腸内細菌叢</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>遺伝子richness低下</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>Proteobacteria優位</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f45)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>微生物代謝物</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>芳香族アミノ酸代謝</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>フェニル酢酸(PAA)</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f45)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>肝</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脂肪蓄積・炎症</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>BCAA代謝の脱制御</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f45)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>因果検証</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>FMT・PAA慢性投与</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>脂肪化を再現</text>\n</svg>",
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m45' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：オミクス統合から単一代謝物の投与試験へ</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① コホート</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>高度肥満の非糖尿病女性</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>2集団</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m45)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>② 測定</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>便メタゲノム</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>肝転写・血漿/尿代謝物</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m45)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>③ 統合</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>分子ネットワーク</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>判別 AUC 87%</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m45)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>④ 介入</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>マウスFMT</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>PAA慢性投与</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("45", [{ic:"human",cap:"肥満女性コホート FLORINASH 2集団"}, {ic:"omics",cap:"便メタゲノム＋肝トランスクリプトーム＋メタボローム"}, {ic:"mouse",cap:"糞便移植とPAA慢性投与で因果を検証"}, {ic:"hepatocyte",cap:"ヒト初代肝細胞でPAAが脂質蓄積を押す"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 45 Hoyles Nat Med 2018: FLORINASHコホート+便メタゲノム+肝トランスクリプトーム+メタボローム+糞便移植/PAA投与マウス+ヒト初代肝細胞（2026-10補完：rnaseqは肝トランスクリプトームの分類） */
LP.methods("45", ["human","mouse","invitro","rnaseq"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №45 腸内細菌→フェニル酢酸→肝の脂肪化 ===== */
LP.cinema("45", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("45")}${GLYPH.arrow("45c","var(--C)")}</defs>`
    +GLYPH.title("腸内細菌叢の変化 → 芳香族アミノ酸代謝 → PAA → 肝の脂肪化とBCAA脱制御")
    +`<rect x="34" y="92" width="132" height="250" rx="34" fill="#e7d9cb" stroke="#b79a7c" stroke-width="2"/>`
    +`<text x="100" y="364" text-anchor="middle" font-size="10" fill="var(--ink-soft)">腸管</text>`
    +`<g id="flora45"><circle cx="72" cy="130" r="6" fill="#6f9a6f"/><circle cx="118" cy="152" r="6" fill="#6f9a6f"/><circle cx="84" cy="188" r="6" fill="#6f9a6f"/><circle cx="128" cy="216" r="6" fill="#6f9a6f"/><circle cx="70" cy="248" r="6" fill="#6f9a6f"/><circle cx="116" cy="288" r="6" fill="#6f9a6f"/><circle cx="80" cy="318" r="6" fill="#6f9a6f"/></g>`
    +GLYPH.tag("rich45",100,72,"遺伝子richness","var(--accent)",128)
    +GLYPH.metab("aaa45",214,140,"芳香族AA","var(--ink-soft)",true)
    +GLYPH.metab("paa45",214,232,"PAA","var(--D)",true)
    +GLYPH.cytokine("lps45",214,314,"LPS","var(--C)",true)
    +GLYPH.hep("hep45",300,120,1.0,"肝細胞")
    +`<g id="bcaa45" class="fade">`+GLYPH.metab("bc1",520,120,"BCAA","var(--D)")+GLYPH.metab("bc2",556,120,"","var(--D)")+`</g>`
    +GLYPH.stellate("hsc45",620,300,"肝星細胞（静止）")
    +GLYPH.tag("fmt45",360,392,"FMT／PAA単独投与でも脂肪化が再現","var(--F)",290,true)
    +GLYPH.badge("noFib45",620,150,"線維化は","示していない","var(--ink-soft)"),
  build(K){
    const dp=[[352,180],[398,208],[364,232],[412,192],[380,258]];
    return [
      {color:"E",t:2400,cap:"健常な腸内細菌叢と肝。菌叢は多様で、肝には脂肪が溜まっていない。",run(){}},
      {color:"C",t:3800,cap:"① 脂肪化を持つ患者では微生物の遺伝子richnessが下がり、Proteobacteriaが優位になってエンドトキシン生合成のポテンシャルが上がる。",run(){
        K.T(()=>{const g=K.$("flora45");[...g.children].forEach((c,i)=>K.T(()=>{if(i%2===0)c.setAttribute("fill","#a4543f");else c.setAttribute("opacity","0.25");},i*140));},400);
        K.T(()=>{K.show(["lps45"]);K.pulse("rich45");},2100);
        K.T(()=>K.unpulse("rich45"),3200);
      }},
      {color:"D",t:4400,cap:"② 菌が芳香族アミノ酸からフェニル酢酸（PAA）を作る。PAAは血流に乗って肝に届き、肝細胞にトリグリセリドが溜まってBCAA代謝が脱制御される。",run(){
        K.show(["aaa45"]);
        K.T(()=>{K.flow(214,150,214,222,"var(--D)",{n:3,dur:1.0,loop:1});K.show(["paa45"]);},800);
        K.T(()=>K.flow(228,232,340,205,"var(--D)",{n:4,dur:1.2,loop:2}),1800);
        K.T(()=>addDrops(K,"hep45Drops",dp,"lip45"),2500);
        K.T(()=>K.show(["bcaa45"]),3400);
      }},
      {color:"F",t:3600,cap:"③ 糞便移植でも、PAAを単独で慢性投与しても脂肪化が再現される。相関の記述から因果の検証へ踏み込んだところがこの論文の要。",run(){
        K.show(["fmt45"]);K.pulse("paa45");
        K.T(()=>K.unpulse("paa45"),2400);
      }},
      {color:"B",t:3200,cap:"④ ただしここまでは脂肪化の話。HSCは静止のままで、PAAが線維化を点火したことを示した研究ではない。",run(){
        K.flow(430,260,614,292,"var(--ink-soft)",{n:2,dur:1.3,loop:1,r:2.4});
        K.T(()=>K.show(["noFib45"]),1500);
      }},
    ];
  }
});
