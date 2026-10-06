/* ============================================================
   №12 · Nature Communications 2026 · Tevonian EN, Kan EL, Maniar KK, Wang AJ, Datta A, Kamm RD, Lauffenbur…
   灌流マイクロ血管ネットワーク統合型肝MPSでインスリン抵抗性・単球浸潤を捕捉
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"12",
    title:"灌流マイクロ血管ネットワーク統合型肝MPSでインスリン抵抗性・単球浸潤を捕捉",
    authors:"Tevonian EN, Kan EL, Maniar KK, Wang AJ, Datta A, Kamm RD, Lauffenburger DA, Griffith LG",
    journal:"Nature Communications",
    year:2026,
    vol:"17:950",
    doi:"10.1038/s41467-025-68031-6",
    url:"https://www.nature.com/articles/s41467-025-68031-6",
    primary:"A",
    tags:["A","C","E","I"],
    approach:"in vitro（primary human cell MPS / microfluidics — MIT Griffith lab）",
    added:"2026-06-01",
    abstract_ja:"in vitroモデルはヒト肝疾患の一側面を再現できるが、血管・免疫細胞との動的相互作用は従来の球状体モデルでは捉えにくかった。本研究ではドナー適合の初代ヒト肝細胞・クッパー細胞（KC）にHUVECとNHLFを加えた多細胞肝球状体を、フィブリンゲル内で自己組織化した灌流可能なマイクロ血管ネットワークと物理的に統合したMPSを開発した。高インスリン・高グルコース・高FFAからなるインスリン抵抗性（IR）培地で慢性暴露すると、肝細胞の代謝遺伝子（PCK1↑・G6PC↑）および糖産生が増大し、インスリンクリアランスが低下した。同時に血管では径縮小・透過性亢進が起こり、炎症性ケモカイン（CXCL1, CXCL2, CCL4（MIP-1β）, ICAM-1）が上昇した。さらにCD14+単球を血管腔に添加すると、IR条件では生理的条件より有意に多くの単球が血管壁を越えて肝球状体へ遊出し、4日後にはCD163+組織マクロファージへの分化開始が確認された。本MPSはヒト肝の代謝・血管・免疫の三者相互作用を灌流血管を通じてリアルタイムに捉え、代謝性肝疾患研究の新たな実験基盤を提供する。",
    background:"MASLD・インスリン抵抗性の病態においてKupffer細胞の活性化・単球浸潤・血管機能不全が重要な役割を果たすことは知られていたが、「灌流血管を通じた単球の血管外遊出と肝組織への招集」というin vivoの生理的プロセスを再現できるin vitroモデルがなかった。既存の肝モデルの多くは血管を球状体に隣接させるにとどまり、肝組織内部まで貫通する灌流血管の統合には至っておらず、血管・免疫の動的挙動を同時に評価する実験系が求められていた。",
    achievements:[
      "ドナー適合初代ヒト肝細胞・KCにHUVEC・NHLFを加えた多細胞球状体をフィブリンゲル内でHUVECマイクロ血管ネットワークと物理統合した灌流型肝MPSを確立。先行モデルの多くが血管を球状体に隣接させるのに対し、灌流血管が球状体内部を貫通する設計を達成。",
      "IR培地（高insulin・高glucose・高FFA）の慢性暴露で糖新生遺伝子PCK1↑・G6PC↑（FASN・FABP1の変化は小さい）と糖産生増大・インスリンクリアランス低下を再現。",
      "IR条件での血管機能不全（径縮小・透過性亢進・ICAM-1↑）と炎症性ケモカイン（CXCL1, CXCL2, CCL4（MIP-1β））上昇を定量捕捉。PLS-DA多変量解析で疾患状態を有意に判別。",
      "CD14+単球の血管腔添加→遊走・血管外滲出→肝球状体への集積をリアルタイムイメージングで可視化。IR条件で単球浸潤頻度が有意に増大（flow cytometry定量）。",
      "浸潤単球のCD163上昇を確認し、組織マクロファージ様への分化開始を示した。GAS6が生理的条件で増加し抗炎症的な組織維持に関与する可能性を示唆。"
    ],
    limitations:[
      "血管構成細胞としてHUVEC/NHLFを使用しており、肝特異的なLSECや星細胞は含まれない（LSECの有窓・類洞機能は再現していない）。",
      "インスリン抵抗性という疾患初期段階に相当し（細胞死・脂肪毒性の兆候なし）、重度steatosisや線維化（fibrosis）は再現していない。著者も後期病態への拡張は今後の課題としている。",
      "培養期間2週間程度と短く、MASLD→MASH→fibrosisの慢性進行は扱えない。",
      "PDMS材料による疎水性薬物吸着の懸念や、一次細胞のドナー変動による再現性の課題（本文の主要実験は1ドナー、追加ドナーで補足確認）。",
      "KC固有の役割はHUVEC/NHLFとの複合系で測定されるため、KC単独の寄与分離が困難。"
    ],
    connection:[
      "灌流血管が球状体内部を貫通する設計の参照：自系のLSEC統合設計に直接参照できる。alginate microwell球状体形成→fibrin gel embedding→自己組織化血管のプロセスも実用的。",
      "KC+単球ダイナミクスのモニタ設計：IR条件でCD14+単球浸潤増加→CD163+分化開始のデータは、#02（常在KC脱落）・#10（GPNMB+MetMac台頭）と連結し、常在KC消耗→血管経由単球浸潤→組織MΦ分化のカスケードをin vitroで再現する実験設計の参照になる。",
      "IR培地処方の直接参照：高insulin・高glucose・高FFAの組み合わせは自系のsteatosis/HIR誘導培地設計に使える。#04（iPSC WAT-肝MPS）との比較でも参照価値が高い。",
      "炎症ケモカインをリードアウトに：CXCL1・CXCL2・CCL4（MIP-1β）・ICAM-1の定量はKC活性化の読み出しとして自系の培地解析プロトコルに追加できる。IL32（#10）との相互作用（肝細胞→IL32→KC→CXCL1/CCL4↑→単球浸潤）も実験的に検証可能。",
      "差別化の軸：本系はLSEC・HSCを含まず線維化未達 → 自系が4細胞共培養でfibrosisまで達成すれば本論文を正統に発展させた論文として位置づけられる。",
      "既収録との接続：#04（iPSC WAT-肝MPS）は脂肪組織炎症経由のMASLD発症を示したが血管灌流がない。本論文（#12）は灌流血管を追加したが脂肪組織を含まない。両者を統合した設計が自系の目標像になる。"
    ],
    glossary:[
      {term:"HUVEC",full:"human umbilical vein endothelial cell",desc:"ヒト臍帯静脈内皮細胞。MPSの自己組織化マイクロ血管形成の主細胞"},
      {term:"NHLF",full:"normal human lung fibroblast",desc:"正常ヒト肺線維芽細胞。HUVECと協調して血管モルフォゲネシスをサポート"},
      {term:"IR",full:"insulin resistance",desc:"インスリン抵抗性。高insulin・高glucose・高FFAで誘導される代謝不全状態"},
      {term:"G6PC",full:"glucose-6-phosphatase catalytic subunit",desc:"糖新生の最終酵素。IR条件で上昇し肝糖産生増大の指標となる"},
      {term:"FABP1",full:"fatty acid binding protein 1 (L-FABP)",desc:"肝型脂肪酸結合タンパク。肝細胞の細胞内脂肪酸輸送に関与"},
      {term:"CXCL1",full:"C-X-C motif chemokine ligand 1 (GROα)",desc:"単球・好中球走化性ケモカイン。IR肝MPS上清で増加し免疫細胞招集に関与"},
      {term:"CXCL2",full:"C-X-C motif chemokine ligand 2 (GROβ)",desc:"CXCL1と同族の走化性ケモカイン。IR条件で協調して増加"},
      {term:"CCL4 (MIP-1β)",full:"C-C motif chemokine ligand 4 (MIP-1β)",desc:"単球・T細胞走化性ケモカイン（※四塩化炭素CCl4とは別物）。IR肝MPSで増加"},
      {term:"ICAM-1",full:"intercellular adhesion molecule 1 (CD54)",desc:"内皮炎症・白血球接着マーカー。IR条件のMPSで上昇し内皮炎症を示す"},
      {term:"CD163",full:"CD163 (hemoglobin scavenger receptor)",desc:"組織定着マクロファージのマーカー。MPS内の単球で初期単球より上昇し、組織マクロファージ様への分化傾向を示す"},
      {term:"CD14",full:"CD14 (LPS co-receptor / monocyte marker)",desc:"単球/マクロファージのマーカー。CD14+で単球を選別し血管内に添加"},
      {term:"PLS-DA",full:"partial least squares discriminant analysis",desc:"多変量解析手法。サイトカインパネルでIR vs 生理的条件を判別"},
      {term:"fibrin",full:"fibrin hydrogel",desc:"フィブリンゲル。HUVEC血管形成の3Dスキャフォールド（フィブリノゲン重合体）"},
      {term:"GAS6",full:"growth arrest specific protein 6",desc:"MERTK受容体リガンド。生理的MPS上清で増加し抗炎症・組織修復に関与"}
    ],
    struct:{
      model:"in vitro",
      cells:["肝細胞","KupfferCell","HUVEC","NHLF","CD14+単球"],
      triggers:["高インスリン","高グルコース","高FFA（IR培地）"],
      steatosis:"△",
      inflammation:"△",
      fibrosis:"×",
      readout:["インスリンクリアランス","PCK1/G6PC発現","糖産生","血管径・透過性","CXCL1/CXCL2/CCL4/ICAM-1","単球浸潤頻度（flow cytometry）","CD163+分化"],
      ignite:"IR培地→炎症性ケモカイン（CXCL1/CXCL2/CCL4）・ICAM-1↑→CD14+単球の遊出増加（産生細胞としてのKCの寄与は未検証）",
      params:[
        {name:"インスリンクリアランス率",note:"IR培地で経時的に低下；週ごとの変化量をABMの代謝パラメータに"},
        {name:"単球遊出率（flow cytometry）",note:"IR vs 生理条件でIR側が有意に高い；KC活性化状態の関数として実装可"},
        {name:"CXCL1/CCL4分泌量",note:"Luminexで定量；単球走化性の確率的ルールの係数に使用可"},
        {name:"血管透過性係数",note:"IR条件で上昇；類洞内皮の機能低下代替パラメータとして活用可"}
      ],
      todos:[
        "IRコンセプトを自系に導入：高insulin・高FFA培地でsteatosis後にLSECのcapillarizationが起きるか",
        "KC有り/無し条件でCXCL1/CCL4を定量してKC依存の単球走化性ケモカイン産生を確認",
        "CD14+単球追加実験でKCフェロトーシス速度（#02）が変わるか検証"
      ]
    },
    figure:"<svg viewBox='0 0 640 300' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='ar12f' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--C)'/></marker><marker id='ar12fd' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--D)'/></marker><marker id='ar12fe' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--E)'/></marker><marker id='ar12fh' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--H)'/></marker></defs><rect width='640' height='300' fill='var(--paper)'/><rect x='18' y='10' width='602' height='65' rx='32' fill='#d4ecf8' opacity='0.5'/><rect x='18' y='10' width='602' height='65' rx='32' fill='none' stroke='var(--E)' stroke-width='2'/><text x='320' y='30' text-anchor='middle' font-size='10.5' fill='var(--E)' font-weight='600'>灌流マイクロ血管（HUVEC/フィブリンゲル）</text><text x='320' y='48' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>血管腔にCD14+単球が流れる → IR条件で径↓・透過性↑</text><text x='320' y='62' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>GAS6↑（生理的）/ CXCL1・CXCL2・CCL4・ICAM-1↑（IR）</text><ellipse cx='250' cy='185' rx='110' ry='82' fill='#f5ede0' stroke='#c8a87a' stroke-width='1.8'/><text x='250' y='112' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>肝球状体</text><line x1='250' y1='75' x2='250' y2='110' stroke='var(--E)' stroke-width='1.8' stroke-dasharray='4,3'/><rect x='175' y='160' width='80' height='44' rx='8' fill='var(--paper-2)' stroke='var(--ink)' stroke-width='1.4'/><text x='215' y='178' text-anchor='middle' font-size='10' fill='var(--ink)' font-weight='600'>肝細胞</text><text x='215' y='194' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>PCK1/G6PC↑</text><text x='215' y='207' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>糖産生↑・Ins CL↓</text><rect x='275' y='160' width='66' height='44' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.8'/><text x='308' y='178' text-anchor='middle' font-size='10' fill='var(--C)' font-weight='600'>KC</text><text x='308' y='194' text-anchor='middle' font-size='9' fill='var(--C)'>共培養</text><text x='308' y='207' text-anchor='middle' font-size='9' fill='var(--C)'>寄与は未検証</text><rect x='420' y='120' width='138' height='52' rx='10' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.8'/><text x='489' y='141' text-anchor='middle' font-size='10.5' fill='var(--D)' font-weight='600'>IR培地</text><text x='489' y='156' text-anchor='middle' font-size='9.5' fill='var(--D)'>高insulin・高glucose</text><text x='489' y='169' text-anchor='middle' font-size='9.5' fill='var(--D)'>高FFA↑</text><line x1='419' y1='146' x2='364' y2='180' stroke='var(--D)' stroke-width='1.5' marker-end='url(#ar12fd)'/><rect x='420' y='200' width='138' height='52' rx='10' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.8'/><text x='489' y='221' text-anchor='middle' font-size='10.5' fill='var(--C)' font-weight='600'>単球浸潤↑</text><text x='489' y='237' text-anchor='middle' font-size='9.5' fill='var(--C)'>血管外遊出</text><text x='489' y='250' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>（IR条件で有意増加）</text><line x1='360' y1='190' x2='418' y2='220' stroke='var(--C)' stroke-width='1.5' marker-end='url(#ar12f)'/><rect x='420' y='272' width='138' height='24' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.8'/><text x='489' y='288' text-anchor='middle' font-size='10' fill='var(--H)' font-weight='600'>CD163↑ MΦ分化傾向</text><line x1='489' y1='252' x2='489' y2='270' stroke='var(--H)' stroke-width='1.5' marker-end='url(#ar12fh)'/></svg>",
    method_figure:"<svg viewBox='0 0 640 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m12' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--ink-soft)'/></marker></defs><rect width='640' height='200' fill='var(--paper)'/><rect x='8' y='28' width='105' height='90' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/><text x='60' y='50' text-anchor='middle' font-size='10' font-weight='600' fill='var(--ink)'>球状体形成</text><text x='60' y='64' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>alginate microwell</text><text x='60' y='77' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>肝細胞+KC</text><text x='60' y='90' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>+HUVEC+NHLF</text><text x='60' y='108' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>2日間</text><line x1='113' y1='73' x2='135' y2='73' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m12)'/><rect x='137' y='28' width='110' height='90' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/><text x='192' y='50' text-anchor='middle' font-size='10' font-weight='600' fill='var(--E)'>PDMSデバイス</text><text x='192' y='64' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>フィブリンゲル</text><text x='192' y='77' text-anchor='middle' font-size='9' fill='var(--E)'>HUVEC血管形成</text><text x='192' y='90' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>自己組織化</text><text x='192' y='108' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>7〜14日間</text><line x1='247' y1='73' x2='269' y2='73' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m12)'/><rect x='271' y='18' width='110' height='100' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/><text x='326' y='40' text-anchor='middle' font-size='10' font-weight='600' fill='var(--D)'>IR培地暴露</text><text x='326' y='54' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>生理的 vs IR</text><text x='326' y='67' text-anchor='middle' font-size='9' fill='var(--D)'>高insulin/glc/FFA</text><text x='326' y='80' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>代謝・血管評価</text><text x='326' y='93' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Luminex解析</text><text x='326' y='108' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Day 1〜14</text><line x1='381' y1='73' x2='403' y2='73' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m12)'/><rect x='405' y='18' width='110' height='100' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/><text x='460' y='40' text-anchor='middle' font-size='10' font-weight='600' fill='var(--C)'>単球添加</text><text x='460' y='54' text-anchor='middle' font-size='9' fill='var(--C)'>CD14+単球を</text><text x='460' y='67' text-anchor='middle' font-size='9' fill='var(--C)'>血管腔に灌流</text><text x='460' y='80' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Day 8追加</text><text x='460' y='93' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>4日間共培養</text><text x='460' y='108' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ライブイメージ</text><line x1='515' y1='73' x2='537' y2='73' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m12)'/><rect x='539' y='18' width='92' height='100' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='585' y='40' text-anchor='middle' font-size='10' font-weight='600' fill='var(--B)'>評価</text><text x='585' y='54' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>FACSで浸潤率</text><text x='585' y='67' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>CD163発現</text><text x='585' y='80' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ライブイメージ</text><text x='585' y='93' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>サイトカイン</text><text x='585' y='108' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>血管形態解析</text><text x='320' y='145' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>Primary human cells（ドナー適合 肝細胞＋KC）× HUVECマイクロ血管 × CD14+単球 統合MPS</text><text x='320' y='160' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Tevonian et al., Nature Communications 17:950 (2026) — MIT Griffith lab</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("12", [{ic:"chip",cap:"灌流血管統合型肝MPS"},{ic:"hepatocyte",cap:"肝細胞+KC球状体"},{ic:"macrophage",cap:"CD14+単球→CD163+分化"},{ic:"endothelial",cap:"HUVECマイクロ血管"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 12 Tevonian Nat Commun 2026: primary human MPS+FACS+ELISA/Luminexパネル+ライブイメージング+qPCR */
LP.methods("12", ["invitro","facs","elisa","qpcr","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №12 灌流肝MPS：IR培地→ケモカイン↑→単球遊出→CD163↑組織MΦ様分化傾向 ===== */
LP.cinema("12", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("12")}
    <marker id="arC12" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--C)"/></marker>
  </defs>`
  +`<text x="360" y="18" text-anchor="middle" font-size="9.5" fill="var(--ink-soft)">PDMS 灌流型マイクロ流体デバイス（MIT Griffith lab — Nat Commun 2026）</text>`
  /* ── PDMS device body ── */
  +`<rect x="18" y="24" width="684" height="374" rx="22" fill="#e6e0d8" stroke="#9a9087" stroke-width="2.5"/>`
  /* ── Top media channel ── */
  +`<rect x="18" y="24" width="684" height="86" rx="20" fill="#cce8f6" opacity="0.72"/>
   <rect x="18" y="24" width="684" height="86" rx="20" fill="none" stroke="var(--E)" stroke-width="1.8"/>
   <circle cx="40" cy="67" r="13" fill="#fff" stroke="var(--E)" stroke-width="1.8"/>
   <circle cx="680" cy="67" r="13" fill="#fff" stroke="var(--E)" stroke-width="1.8"/>
   <text x="360" y="56" text-anchor="middle" font-size="9.5" fill="var(--E)" font-weight="600">培地チャネル（灌流）— 単球・サイトカイン・IR培地がここを通過</text>`
  /* ── Central fibrin gel channel ── */
  +`<rect x="32" y="110" width="656" height="196" rx="6" fill="#f2ebe0" stroke="#c8b898" stroke-width="1.4"/>
   <text x="90" y="128" font-size="9" fill="var(--ink-soft)">フィブリンゲル（中央チャネル）</text>`
  /* ── HUVEC vascular network (sinuous green paths — Fig 1B motif) ── */
  +`<g id="vnet12" fill="none" stroke="var(--E)" stroke-width="2.8" stroke-linecap="round" opacity="0.75">
     <path d="M34,160 C78,150 108,170 165,160 C212,151 240,169 296,161 C340,153 360,173 402,165 C442,157 480,171 530,161 C578,152 612,167 684,160"/>
     <path d="M34,240 C78,230 112,248 165,240 C212,232 240,250 296,242 C340,234 362,252 402,244 C444,236 482,250 530,242 C578,234 614,248 684,240"/>
     <path d="M165,160 C167,180 167,216 165,240"/>
     <path d="M530,160 C532,180 532,216 530,240"/>
     <path d="M342,160 C344,178 344,218 342,240"/>
   </g>`
  /* vessel entry junctions (top channel → gel) */
  +`<line x1="165" y1="110" x2="165" y2="158" stroke="var(--E)" stroke-width="2.4" stroke-dasharray="3,2"/>
   <line x1="530" y1="110" x2="530" y2="158" stroke="var(--E)" stroke-width="2.4" stroke-dasharray="3,2"/>`
  /* ── Spheroid 1 (left) ── */
  +`<ellipse cx="165" cy="200" rx="57" ry="44" fill="#f5e2d0" stroke="#d4a070" stroke-width="1.8"/>`
  +GLYPH.hep("hep12",138,200,0.72,"")
  +GLYPH.mac("kc12",194,198,"KC","#5d6470")
  +`<text x="165" y="252" text-anchor="middle" font-size="8.5" fill="#9c7850">球状体①</text>`
  /* ── Spheroid 2 (right) ── */
  +`<ellipse cx="530" cy="200" rx="57" ry="44" fill="#f5e2d0" stroke="#d4a070" stroke-width="1.8"/>`
  +GLYPH.hep("hep12b",503,200,0.72,"")
  +GLYPH.mac("kc12b",559,198,"","#5d6470")
  +`<text x="530" y="252" text-anchor="middle" font-size="8.5" fill="#9c7850">球状体②</text>`
  /* ── Bottom media channel ── */
  +`<rect x="18" y="306" width="684" height="92" rx="20" fill="#cce8f6" opacity="0.72"/>
   <rect x="18" y="306" width="684" height="92" rx="20" fill="none" stroke="var(--E)" stroke-width="1.8"/>
   <circle cx="40" cy="352" r="13" fill="#fff" stroke="var(--E)" stroke-width="1.8"/>
   <circle cx="680" cy="352" r="13" fill="#fff" stroke="var(--E)" stroke-width="1.8"/>
   <text x="360" y="354" text-anchor="middle" font-size="9.5" fill="var(--E)">培地チャネル</text>`
  /* ── Monocytes in top channel (hidden) ── */
  +`<g id="mn_a" class="fade">`+GLYPH.monocyte("mn_ai",90,67,"CD14+単球")+`</g>`
  +`<g id="mn_b" class="fade">`+GLYPH.monocyte("mn_bi",600,67,"")+`</g>`
  /* Extravasating monocyte (starts top channel, will move down into gel) */
  +`<g id="mn_e" class="fade">`+GLYPH.monocyte("mn_ei",165,74,"")+`</g>`
  /* ── IR metabolite indicators (right side, hidden) ── */
  +GLYPH.tag("irTag12",632,146,"IR培地","var(--D)",68,true)
  +GLYPH.metab("insM12",596,184,"insulin↑","var(--D)",true)
  +GLYPH.metab("glcM12",650,204,"glucose↑","var(--D)",true)
  +GLYPH.metab("ffaM12",610,224,"FFA↑","var(--D)",true)
  /* ── Cytokines from KC (hidden) ── */
  +GLYPH.cytokine("cxcl12",172,132,"CXCL1","var(--C)",true)
  +GLYPH.cytokine("ccl412",208,122,"CCL4","var(--C)",true)
  /* ── Vessel dysfunction indicator (hidden) ── */
  +`<g id="nvess12" class="fade">
     <text x="622" y="93" font-size="9.5" text-anchor="middle" fill="var(--B)">血管径↓</text>
     <text x="622" y="107" font-size="9.5" text-anchor="middle" fill="var(--B)">透過性↑</text>
   </g>`
  /* ── Spread macrophage (post-differentiation, hidden) ── */
  /* Positioned at same absolute location as extravasated mn_e: (165, 74+122=196) */
  +`<g id="spreadMac12" class="fade" transform="translate(162,195)">
     <path d="M-30,-11 C-16,-27 10,-23 27,-14 C39,-4 39,12 25,23 C12,34 -10,32 -25,21 C-41,11 -42,-1 -30,-11 Z" fill="#7d97b8" stroke="#5b7090" stroke-width="1.6"/>
     <path d="M27,-14 C35,-23 40,-25 38,-17" fill="none" stroke="#7d97b8" stroke-width="5" stroke-linecap="round"/>
     <path d="M25,23 C34,34 36,38 28,36" fill="none" stroke="#7d97b8" stroke-width="5" stroke-linecap="round"/>
     <path d="M-30,-11 C-39,-20 -43,-17 -39,-9" fill="none" stroke="#7d97b8" stroke-width="5" stroke-linecap="round"/>
     <path d="M-6,-3 a7,6.5 0 1,0 9,1.5" fill="none" stroke="#34465c" stroke-width="2"/>
     <path d="M40,-2 L35,2 M37,2 L32,6 M32,6 L28,2 M32,6 L28,10" stroke="var(--H)" stroke-width="2" fill="none" stroke-linecap="round"/>
     <text x="50" y="6" font-size="8.5" fill="var(--H)" font-weight="600">CD163</text>
   </g>`
  /* ── CD163+ differentiation tag (hidden) ── */
  +GLYPH.tag("cd163tag12",300,372,"CD163+ → 組織マクロファージ分化開始","var(--H)",250,true),
  build(K){
    const dp1=[[138,186],[160,204],[142,220],[178,197],[162,218]];
    const dp2=[[503,186],[525,204],[507,220],[543,197],[527,218]];
    return [
      {color:"E",t:2600,cap:"① 健常な灌流肝MPS（Fig 1A）。HUVEC自己組織化マイクロ血管が肝細胞+KC球状体内部に貫通し、血管腔をCD14+単球が流れる。",
       run(){K.show(["mn_a","mn_b"]);}},
      {color:"D",t:4200,cap:"② IR培地（高insulin・高glucose・高FFA）で慢性暴露すると肝細胞でPCK1/G6PC↑・糖産生増大・インスリンクリアランス低下が起こり（Fig 3B,C）、血管は径縮小・透過性亢進を示す（Fig 4）。",
       run(){
         K.show(["irTag12","insM12","glcM12","ffaM12"]);
         K.flow(632,148,140,200,"var(--D)",{n:3,dur:1.5,loop:2});
         K.flow(632,148,505,200,"var(--D)",{n:2,dur:1.5,loop:2});
         K.T(()=>{
           K.show(["nvess12"]); K.attr("vnet12","opacity","0.38");
         },1800);
       }},
      {color:"C",t:4400,cap:"③ IR条件でCXCL1・CCL4などのケモカインが上昇し（産生細胞はKCに限らず未特定）、血管内単球が血管壁を越えて球状体へ遊出（extravasation）する（Fig 5）。IR条件で浸潤頻度が生理的条件より有意に高い。",
       run(){
         K.T(()=>{K.show(["cxcl12","ccl412"]); K.pulse("cxcl12"); K.pulse("ccl412");},500);
         K.flow(90,67,165,67,"var(--C)",{n:4,dur:1.2,loop:2});
         K.T(()=>{ K.show(["mn_e"]); K.move("mn_e",0,0,0,122,1.4); },1400);
       }},
      {color:"H",t:3800,cap:"④ 組織内の単球は円形度低下・細胞伸展（形態変化）を示し、CD163（ヘモグロビンスカベンジャー受容体）が初期単球より上昇（Fig 5G）。単球→CD163+組織マクロファージ様への分化傾向を、灌流血管経由の遊出系で捉えた。",
       run(){
         K.hide(["mn_e"]);
         K.T(()=>{
           K.show(["spreadMac12","cd163tag12"]);
           K.unpulse("cxcl12"); K.unpulse("ccl412");
         },350);
       }},
    ];
  }
});
