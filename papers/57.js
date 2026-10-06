/* ============================================================
   №57 · Nat Metab 2026 · Koning M, Kovynev A, Fondevila MF, …, Kirkland JL, Meijnikman AS
   線維化を伴うMASHで、間欠的セノリティクス(ダサチニブ+ケルセチン)が線維化を1段階改善——概念実証RCT
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ※本エントリは要旨ベース（全文は未取得）。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"57", primary:"H",
    title:"線維化を伴うMASHでセノリティクス(ダサチニブ+ケルセチン)が線維化を1段階改善——老化細胞を間欠的に除く概念実証RCT",
    authors:"Koning M, Kovynev A, Fondevila MF, Ruhe EJM, …, Schnabl B, Kirkland JL, Meijnikman AS",
    journal:"Nat Metab",
    year:2026,
    vol:"（early access）",
    doi:"10.1038/s42255-026-01643-4",
    url:"https://doi.org/10.1038/s42255-026-01643-4",
    tags:["H","D","B"],
    approach:"第2相・二重盲検・プラセボ対照ランダム化比較試験（間欠的セノリティクスD+Q：ダサチニブ100mg/日＋ケルセチン1000mg/日を週3日×3週を1サイクル、7週ごと3サイクル）＋ 線維化を伴うMASH患者31名 ＋ ペア肝生検（線維化ステージ/NAS）＋ 単核RNA-seq（snRNA-seq）。ClinicalTrials.gov NCT05506488",
    added:"2026-10-06",
    abstract_ja:"細胞老化（senescence）は肝の炎症と線維化に重要な役割を果たすが、ヒトのMASH（代謝機能障害関連脂肪肝炎）で老化が治療標的になりうるかは未検証だった。本研究は、線維化を伴うMASH患者を対象に、間欠的なセノリティクス（老化細胞を選択的に除く薬）であるダサチニブ＋ケルセチン（D+Q）の第2相・二重盲検・プラセボ対照ランダム化比較試験の結果を報告する。31名（年齢中央値56歳、76%が男性、58%が2型糖尿病）を1:1に割り付け、D+Q（ダサチニブ100mg/日＋ケルセチン1000mg/日）またはプラセボを、週に3日連続、3週にわたり投与し、これを7週ごとに3サイクル繰り返した。主要評価項目であるペア肝生検での『MASH悪化を伴わない線維化ステージ1段階以上の改善』は、D+Q群で47%、プラセボ群で7%が達成した（P=0.02）。MASH消退もD+Q群で多く（53%対7%、P=0.02）、NAFLD activity score(NAS)の低下も大きかった（−1.43対−0.39、P=0.012）。単核RNA-seqでは、D+Q群で老化および線維化の遺伝子シグネチャーが低下し、線維化を起こす細胞集団が減少していた。有害事象はD+Q群で多かったが（82%対43%）、いずれも自然軽快した。全体として本概念実証試験は、線維化を伴うMASHにおけるセノリティクス治療の将来の試験の必要性を支持する。",
    background:"MASLDからMASHへ進むと炎症と線維化が重なり、肝関連死のリスクが上がる。近年、炎症や線維化の駆動に『老化細胞』（分裂を止めたまま炎症性の分泌＝SASPを出し続ける細胞）が関わることが示され、これを選択的に除くセノリティクス（ダサチニブ＋ケルセチン＝D+Q等）がマウスで線維化を抑えることが報告されていた。しかしヒトのMASHで、老化細胞を除くことが線維化改善につながるかは臨床で確かめられていなかった。",
    achievements:[
      "**ヒトMASHで老化が治療標的になりうることを初めて臨床的に示した**概念実証RCT（間欠的D+Q、ペア肝生検で評価）。",
      "**主要評価項目を達成**：MASH悪化なしの線維化1段階以上の改善がD+Q 47% 対プラセボ 7%（P=0.02）。",
      "**MASH消退 53%対7%（P=0.02）、NAS低下も大きい（−1.43対−0.39, P=0.012）**——炎症/活動性の指標も改善。",
      "**snRNA-seqで老化・線維化シグネチャーの低下と線維化細胞集団の減少**を確認。有害事象は多め（82%対43%）だが自然軽快し、将来のセノリティクス試験を支持。"
    ],
    limitations:[
      "**非常に小規模（n=31）・単施設規模・短期**で、ハードエンドポイント（肝硬変・死亡）は未評価。",
      "D+Qは**全身投与で老化細胞の特異性が完全ではなく**、肝のどの細胞種(肝細胞/HSC/内皮/免疫)の老化除去が効いたかは断定できない。",
      "**有害事象がプラセボより多く**（自然軽快だが）、長期安全性・最適用量・投与間隔は未確立。",
      "被験者は**男性・2型糖尿病が多く**代表性に偏り。プラセボでも一部改善があり、生検のサンプリング変動も残る。"
    ],
    connection:[
      "**線維化を『退縮』させる治療軸の実例**。自分の系は線維化点火が課題だが、本試験は逆に『老化細胞を除くと線維化が1段階戻る』ことを示す。点火因子として老化(SASP)を入れ、D+Qで退縮を再現できれば、点火↔退縮の両方向を扱えるモデルになる。",
      "**#52との直結**：#52はACSS2/KAT5がAIF1を介して炎症＋肝細胞の老化を起こしMASH化を駆動し、セノリティクス(Navitoclax)が候補と示した。本試験はそのヒト版の実証にあたり、老化除去→線維化改善の因果を補強する。",
      "**ABM実装**：『老化細胞(SASP分泌)→炎症/HSC活性化→線維化』に加え、『セノリティクスで老化細胞を除去→SASP低下→線維化退縮』の介入ルールを入れられる。間欠投与(週3日×3週×3サイクル)の時間パターンもそのまま実装できる。",
      "**読み出しの対応づけ**：臨床の線維化ステージ/NASを、自系のコラーゲン沈着/αSMAや老化マーカー(p16/p21・SA-βgal)に対応させ、snRNA-seqの老化・線維化シグネチャーをin vitro評価の指標に流用できる。"
    ],
    glossary:[
      {term:"senolytics",full:"senolytics",desc:"老化細胞を選択的に死滅させる薬剤。D+Qが代表で、線維化・炎症の軽減を狙う"},
      {term:"D+Q",full:"dasatinib plus quercetin",desc:"ダサチニブ(キナーゼ阻害)＋ケルセチン(フラボノイド)の併用セノリティクス。間欠投与する"},
      {term:"senescence",full:"cellular senescence",desc:"分裂を止めたままSASPを出し続ける細胞状態。肝の炎症・線維化を駆動する"},
      {term:"SASP",full:"senescence-associated secretory phenotype",desc:"老化細胞が出す炎症性サイトカイン・プロテアーゼ群。周囲に炎症/線維化を広げる"},
      {term:"MASH",full:"metabolic dysfunction-associated steatohepatitis",desc:"脂肪化に炎症・肝細胞障害・線維化が重なった病態。線維化進行で予後が悪化"},
      {term:"NAS",full:"NAFLD activity score",desc:"脂肪化・小葉炎症・肝細胞風船様変性の合計スコア。MASHの活動性指標"},
      {term:"snRNA-seq",full:"single-nucleus RNA sequencing",desc:"凍結組織の核からトランスクリプトームを読む手法。老化・線維化シグネチャーを評価"},
      {term:"fibrosis stage",full:"liver fibrosis stage",desc:"肝線維化の進行度(F0〜F4)。1段階以上の改善が本試験の主要評価項目"}
    ],
    struct:{
      model:"ヒト(RCT)",
      cells:["老化細胞","HSC","肝細胞"],
      triggers:["(介入)D+Qセノリティクス","老化細胞のSASP"],
      steatosis:"△", inflammation:"○", fibrosis:"○",
      readout:["線維化ステージ(ペア生検)","MASH消退/NAS","snRNA-seqの老化・線維化シグネチャー"],
      ignite:"点火ではなく退縮の実証：老化細胞(SASP)を間欠的に除くと線維化が1段階改善。老化→線維化の因果を介入で示す。",
      params:[
        {name:"老化細胞量(SASP) → 炎症/HSC活性化 → 線維化",note:"老化を点火因子としてルール化"},
        {name:"セノリティクス投与(週3日×3週×3サイクル) → 老化細胞除去→退縮",note:"間欠投与の時間パターンを実装"}
      ],
      todos:[
        "自系に老化(SASP)を点火因子として導入し線維化を顕在化できるか検証",
        "D+Q添加で老化マーカー(p16/p21)低下→コラーゲン退縮を再現",
        "snRNA-seqの老化・線維化シグネチャーを自系の読み出しに対応づけ"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f57' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='f57h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>老化細胞をD+Qで間欠的に除く→線維化が1段階改善（MASH RCT）</text><rect x='16' y='48' width='170' height='150' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.4'/><text x='101' y='68' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>線維化を伴うMASH肝</text><circle cx='70' cy='100' r='12' fill='var(--B)' opacity='0.4' stroke='var(--B)'/><text x='70' y='104' text-anchor='middle' font-size='8' fill='var(--B)'>老化</text><circle cx='120' cy='120' r='12' fill='var(--B)' opacity='0.4' stroke='var(--B)'/><text x='120' y='124' text-anchor='middle' font-size='8' fill='var(--B)'>老化</text><text x='101' y='150' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>SASP→炎症・HSC活性化</text><path d='M40,170 q30,-14 60,0 t60,0' fill='none' stroke='var(--B)' stroke-width='2'/><text x='101' y='190' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>コラーゲン沈着</text><rect x='236' y='70' width='168' height='90' rx='8' fill='var(--paper)' stroke='var(--H)' stroke-width='1.6'/><text x='320' y='92' text-anchor='middle' font-size='10.5' fill='var(--H)' font-weight='600'>セノリティクス D+Q</text><text x='320' y='110' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ダサチニブ+ケルセチン</text><text x='320' y='126' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>週3日×3週 × 3サイクル</text><text x='320' y='144' text-anchor='middle' font-size='9' fill='var(--H)'>老化細胞を選択的に除去</text><path d='M186,120 L234,116' stroke='var(--H)' stroke-width='1.5' marker-end='url(#f57h)'/><rect x='454' y='48' width='172' height='150' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/><text x='540' y='68' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>改善した肝</text><text x='540' y='92' text-anchor='middle' font-size='9.5' fill='var(--E)'>線維化 1段階↑改善</text><text x='540' y='110' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>47% 対 プラセボ7%</text><text x='540' y='130' text-anchor='middle' font-size='9.5' fill='var(--E)'>MASH消退 53%対7%</text><text x='540' y='150' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>NAS低下 / 老化・線維化</text><text x='540' y='164' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>シグネチャー↓(snRNA-seq)</text><path d='M404,120 L452,120' stroke='var(--accent)' stroke-width='1.5' marker-end='url(#f57)'/></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m57' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>試験デザイン：第2相 二重盲検 RCT（n=31, 1:1） ペア肝生検 + snRNA-seq</text><rect x='14' y='48' width='150' height='54' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='89' y='68' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>線維化MASH 31名</text><text x='89' y='84' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>中央56歳/76%男性</text><text x='89' y='96' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>58% 2型糖尿病</text><path d='M164,75 C182,75 184,66 196,62' fill='none' stroke='var(--accent)' marker-end='url(#m57)'/><path d='M164,75 C182,75 184,120 196,124' fill='none' stroke='var(--accent)' marker-end='url(#m57)'/><rect x='198' y='40' width='172' height='48' rx='7' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='284' y='59' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>D+Q 群</text><text x='284' y='76' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ダサ100+ケル1000mg/日</text><rect x='198' y='112' width='172' height='48' rx='7' fill='var(--paper-2)' stroke='var(--line-soft)' stroke-width='1.4'/><text x='284' y='131' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)' font-weight='600'>プラセボ群</text><text x='284' y='148' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>二重盲検 1:1</text><rect x='198' y='172' width='290' height='26' rx='6' fill='var(--paper)' stroke='var(--H)'/><text x='343' y='189' text-anchor='middle' font-size='8.8' fill='var(--H)'>投与：週3日連続 × 3週 を 7週ごと 3サイクル（間欠）</text><path d='M370,64 L402,64' stroke='var(--accent)' marker-end='url(#m57)'/><path d='M370,136 L402,136' stroke='var(--accent)' marker-end='url(#m57)'/><rect x='404' y='40' width='222' height='120' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='515' y='60' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>読み出し</text><text x='515' y='80' text-anchor='middle' font-size='8.8' fill='var(--ink-soft)'>ペア肝生検：線維化ステージ</text><text x='515' y='96' text-anchor='middle' font-size='8.8' fill='var(--ink-soft)'>MASH消退 / NAS</text><text x='515' y='112' text-anchor='middle' font-size='8.8' fill='var(--ink-soft)'>snRNA-seq：老化/線維化</text><text x='515' y='128' text-anchor='middle' font-size='8.8' fill='var(--ink-soft)'>シグネチャー・細胞集団</text><text x='515' y='148' text-anchor='middle' font-size='9' fill='var(--E)'>主要項目達成(P=0.02)</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("57", [{ic:"human",cap:"線維化MASH患者31名の第2相RCT"}, {ic:"drug",cap:"セノリティクスD+Q（ダサチニブ+ケルセチン）"}, {ic:"stellate",cap:"老化細胞/線維化細胞の減少"}, {ic:"liver",cap:"線維化1段階改善・MASH消退"}, {ic:"omics",cap:"snRNA-seqで老化・線維化シグネチャー↓"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 57 Koning/Meijnikman Nat Metab 2026: ヒト第2相RCT+ペア肝生検+単核RNA-seq+セノリティクス投与 */
LP.methods("57", ["human","drug","scrna","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №57 老化細胞→SASP→線維化、D+Qで老化除去→線維化1段階改善 ===== */
LP.cinema("57", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("57",'var(--B)')}${GLYPH.arrow("57h",'var(--H)')}</defs>`
    +GLYPH.title("老化細胞がSASPで線維化を駆動。間欠セノリティクスD+Qが老化細胞を除き線維化が1段階改善")
    +`<rect x="40" y="80" width="300" height="230" rx="14" fill="none" stroke="var(--B)" stroke-width="2" stroke-dasharray="6 4"/>`
    +`<text x="60" y="104" font-size="10.5" fill="var(--B)">線維化を伴うMASH肝</text>`
    +GLYPH.hep("hep57",120,170,1,"肝細胞")
    +`<circle id="sen57a" cx="110" cy="150" r="16" fill="var(--B)" opacity="0.4" stroke="var(--B)" stroke-width="1.5"/><text x="110" y="154" text-anchor="middle" font-size="8.5" fill="var(--B)">老化</text>`
    +`<circle id="sen57b" cx="230" cy="200" r="16" fill="var(--B)" opacity="0.4" stroke="var(--B)" stroke-width="1.5"/><text x="230" y="204" text-anchor="middle" font-size="8.5" fill="var(--B)">老化</text>`
    +GLYPH.stellate("hsc57",230,270,"肝星細胞")
    +GLYPH.layer("col57")
    +GLYPH.pill("dq57",520,110,"D+Q",120)
    +GLYPH.badge("imp57",560,300,"線維化","1段階改善","var(--E)"),
  build(K){
    return [
      {color:"B",t:3000,cap:"① 線維化を伴うMASH肝には老化細胞が溜まり、SASP（炎症性の分泌）を出している。",run(){
        K.pulse("sen57a");K.T(()=>K.pulse("sen57b"),500);
        K.T(()=>{radiate(K,110,150,"var(--B)",5);radiate(K,230,200,"var(--B)",5);},1200);
      }},
      {color:"B",t:3600,cap:"② SASPがHSCを活性化し、コラーゲンが沈着して線維化が進む。",run(){
        K.flow(230,200,230,255,"var(--B)",{n:2,dur:1.1,loop:2});
        K.T(()=>{K.morph("hsc57Shape",GLYPH.SPINDLE);K.attr("hsc57Shape","fill","#b0432f");K.text("hsc57Cap","活性化HSC");},1300);
        K.T(()=>{K.draw("col57",GLYPH.collagenAt(230,320),{len:150});},2200);
      }},
      {color:"H",t:3800,cap:"③ 間欠的セノリティクスD+Q（週3日×3週×3サイクル）が老化細胞を選択的に死滅させる。",run(){
        K.show(["dq57"]);
        K.T(()=>{K.flow(520,126,230,200,"var(--H)",{n:3,dur:1.2,loop:2});K.flow(520,126,110,150,"var(--H)",{n:3,dur:1.2,loop:2});},400);
        K.T(()=>{K.hide(["sen57a","sen57b"]);K.markX(110,150,"var(--H)");K.markX(230,200,"var(--H)");},2000);
      }},
      {color:"E",t:3200,cap:"④ 老化・線維化シグネチャーが下がり、線維化が1段階改善（47%対プラセボ7%）、MASHも消退する。",run(){
        K.T(()=>{K.attr("col57","opacity","0.3");K.morph("hsc57Shape",GLYPH.QUIET);K.attr("hsc57Shape","fill","var(--E)");K.text("hsc57Cap","静止HSC");},600);
        K.T(()=>{K.show(["imp57"]);K.pulse("imp57");},1800);
      }},
    ];
  }
});
