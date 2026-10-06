/* ============================================================
   №31 · Biomaterials 2019 · Tasnim F, Phan D, Toh YC, Yu H et al.
   iPSCからiKC（iPSC由来クッパー細胞様細胞）への誘導——肝細胞との直接接触がVSIG4/CD163/TIMD4/LXRα/ID3発現に必要
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"31", primary:"A",
    title:"iPSCからiKC（iPSC由来クッパー細胞様細胞）への誘導——肝細胞との直接接触がVSIG4/CD163/TIMD4/LXRα/ID3発現に必要",
    authors:"Tasnim F, Phan D, Toh YC, Yu H et al.",
    journal:"Biomaterials",
    year:2019,
    vol:"192:377-391",
    doi:"10.1016/j.biomaterials.2018.11.016",
    url:"https://www.sciencedirect.com/science/article/pii/S0142961218307580",
    catPrimary:"C",
    catSub:["H"],
    tags:["A","C","I"],
    summary:"ヒトiPSCから成熟KCを誘導するプロトコルを確立した原著。単球様前駆細胞を肝細胞との共培養条件（直接接触＋可溶性因子）に置くことで、VSIG4・CD163・TIMD4といった居住型KC特異的マーカーの発現が誘導される。核心的発見は肝細胞との直接接触（paracrine単独では不十分）がKC成熟に必要であること。Bonnardel 2019と合わせると、ID3誘導には接触依存的なcue（細胞表面シグナル）が関与している可能性が高い。",
    connection:["自分の共培養系でiKCを用いる根拠論文。KC成熟マーカー（VSIG4・CD163・TIMD4・LXRα・ID3）を確認する実験設計のリファレンス。肝細胞との直接接触配置がiKC成熟に必須であることは、酸素透過性膜上の細胞配置設計（KC位置）を考える際の根拠になる。No.27（Bonnardel 2019）のニッチ概念の技術的実装版として対で読む。"],
    methods:["in vitro（ヒトiPSC→iKC分化）","肝細胞との共培養","フローサイトメトリー（VSIG4/CD163/TIMD4等）","qPCR（LXRα/ID3等）","機能アッセイ（貪食・サイトカイン産生）"],
    "approach": "in vitro（ヒトiPSC→iKC分化）＋ 肝細胞との共培養 ＋ フローサイトメトリー（VSIG4/CD163/TIMD4）・qPCR（LXRα/ID3）・機能アッセイ（貪食・サイトカイン）",
    "added": "2026-06-15",
    "abstract_ja": "クッパー細胞を含む肝モデル構築のため、ヒトiPSCからクッパー細胞様細胞（iKC）を分化誘導する系が必要とされていた。本研究はiPSCをiKCへ分化させ、肝細胞との直接接触がiKCの成熟に必須であることを示した。共培養下でiKCはVSIG4・CD163・TIMD4といった常在KCマーカーと、ニッチ応答性の転写因子LXRα・ID3を発現し、貪食能やサイトカイン産生などの機能を獲得した。肝細胞接触というニッチ要素を培養に組み込むことで、生理的に近いKC様細胞をin vitroで作製できることを実証し、ヒト肝マイクロ生理系へのKC実装の技術基盤を与えた。",
    "background": "肝オルガノイド/MPSにKCを組み込むには、再現性ある供給源としてiPSC由来iKCが望ましい。しかし単独分化ではKCの成熟同一性が不十分で、Bonnardelらが示したニッチ（肝細胞・LSEC・HSC）依存性をどう培養で満たすかが課題だった。",
    "achievements": ["ヒトiPSCから**クッパー細胞様細胞（iKC）**を分化誘導する系を確立した。", "**肝細胞との直接接触**がiKC成熟に必須であり、接触下でVSIG4・CD163・TIMD4・LXRα・ID3を発現することを示した。", "iKCが**貪食能・サイトカイン産生**などの機能を獲得し、肝MPSへのKC実装が可能であることを実証した。"],
    "limitations": ["完全な成体KC同一性（自己複製性・長期常在性）の再現は限定的。", "LSEC/HSCを含む完全なニッチ再構成までは至っていない。", "ヒトドナー間・iPSC株間の分化効率のばらつきが残る。"],
    "glossary": [{"term": "iKC", "full": "iPSC-derived Kupffer cell-like cell", "desc": "iPSCから分化誘導したクッパー細胞様細胞。肝MPSへのKC供給源"}, {"term": "VSIG4", "full": "V-set and immunoglobulin domain containing 4 (CRIg)", "desc": "常在KCマーカー兼補体受容体。iKC成熟の指標"}, {"term": "CD163", "full": "CD163 (scavenger receptor)", "desc": "M2/homeostatic KCマーカー。iKC成熟・極性の指標"}, {"term": "TIMD4", "full": "T cell immunoglobulin and mucin domain 4", "desc": "常在KC特異的マーカー。efferocytosis受容体"}],
    "struct": {"model": "in vitro（iPSC分化＋共培養）", "cells": ["iKC（iPSC由来）", "肝細胞"], "triggers": ["肝細胞直接接触（ニッチ）"], "steatosis": "—", "inflammation": "△", "fibrosis": "—", "readout": ["KC成熟マーカー（VSIG4/CD163/TIMD4/LXRα/ID3）", "貪食能", "サイトカイン産生"], "ignite": "—（モデル構築。KC実装によりLPSセカンドヒットの基盤を提供）", "params": [{"name": "肝細胞接触→iKC成熟係数", "note": "酸素透過膜上のKC配置（肝細胞近接）で成熟確率を決めるABM/設計ルール"}, {"name": "iKC成熟マーカーパネル", "note": "VSIG4/CD163/TIMD4/LXRα/ID3を機能的成熟の判定に使用"}], "todos": ["酸素透過膜上で肝細胞近接配置にしてiKC成熟を最大化", "iKC成熟マーカーを共培養の品質管理パネルに採用"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m31' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：iPSC→iKC、肝細胞接触で成熟</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>① iPSC</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ヒト多能性幹細胞</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>出発材料</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m31)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>② iKC分化</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>クッパー様細胞へ</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>マクロファージ系譜</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m31)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>③ 肝細胞共培養</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>直接接触ニッチ</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>成熟に必須</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m31)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>④ 評価</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>VSIG4/CD163/TIMD4</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>貪食・サイトカイン</text>\n  <text x='556' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--H)'>機能的成熟</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Tasnim F, Toh YC, Yu H et al., Biomaterials (2019)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f31' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>肝細胞接触がiKCをKC様に成熟させる</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>iKC（未成熟）</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>iPSC由来</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>接触なし</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--A)'>成熟不十分</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f31)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>肝細胞接触</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ニッチ提示</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ID3/LXRα応答</text>\n  <text x='320' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--D)'>成熟シグナル</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f31)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>成熟iKC</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>VSIG4/CD163/TIMD4</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>貪食能</text>\n  <text x='529' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>KC様機能</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>酸素透過膜上のKC配置（肝細胞近接）設計の根拠</text>\n  </svg>"
  }
);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 31 Tasnim 2019 Biomaterials: iPSC→iKC分化誘導 */
LP.methods("31", ["invitro","ipsc","facs","qpcr","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №31 肝細胞接触がiPSC由来iKCをKC様に成熟させる ===== */
LP.cinema("31", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("31c","var(--C)")}${GLYPH.arrow("31d","var(--D)")}</defs>`
    +GLYPH.title("肝細胞との直接接触（ID3/LXRα）がiPSC由来iKCの成熟に必須")
    +GLYPH.hep("hep31",40,100,0.95,"肝細胞")
    +GLYPH.mac("ikc31",370,200,"iKC（未成熟）","#828a96")
    +`<g id="contact31" class="fade"><line x1="230" y1="180" x2="346" y2="200" stroke="var(--D)" stroke-width="2.8" stroke-dasharray="5,3"/><text x="280" y="174" text-anchor="middle" font-size="9" fill="var(--D)">直接接触</text></g>`
    +`<g id="niche31" class="fade">`
      +GLYPH.tf("id3_31",300,130,"ID3","var(--C)")
      +GLYPH.tf("lxra31",300,265,"LXRα","var(--C)")
    +`</g>`
    +`<g id="matureKC31" class="fade">`
      +GLYPH.mac("mkc31",580,200,"成熟iKC","#5d7a58")
      +GLYPH.receptor("vsig4_31",545,175,"VSIG4","var(--C)")
      +GLYPH.receptor("cd163_31",580,170,"CD163","var(--C)")
      +GLYPH.receptor("timd4_31",615,175,"TIMD4","var(--C)")
    +`</g>`
    +`<g id="funcKC31" class="fade"><circle cx="580" cy="320" r="30" fill="#fff" stroke="var(--C)" stroke-width="2"/><text x="580" y="316" text-anchor="middle" font-size="9.5" fill="var(--C)" font-weight="600">貪食</text><text x="580" y="330" text-anchor="middle" font-size="9" fill="var(--C)">サイトカイン</text></g>`,
  build(K){
    return [
      {color:"A",t:2400,cap:"iPSCから分化させたiKC（クッパー細胞様細胞）。単独培養では成熟が不十分で、KCマーカーが低い。",run(){}},
      {color:"D",t:3800,cap:"① 肝細胞との直接接触がニッチシグナル（ID3・LXRα応答）をiKCに提供し、成熟プログラムを起動する。",run(){
        K.show(["contact31","niche31"]);
        K.flow(200,165,300,135,"var(--D)",{n:2,dur:1.0,loop:2});
        K.T(()=>{K.pulse("id3_31");K.flow(200,180,300,260,"var(--D)",{n:2,dur:1.0,loop:2});},600);
        K.T(()=>{K.pulse("lxra31");},1200);
        K.T(()=>{K.unpulse("id3_31");K.unpulse("lxra31");},2800);
      }},
      {color:"C",t:4000,cap:"② iKCがVSIG4・CD163・TIMD4を発現し、成熟KC表現型を獲得する。ニッチシグナルなしではKC化しない。",run(){
        K.show(["matureKC31"]);
        K.flow(394,200,556,200,"var(--C)",{n:3,dur:1.2,loop:2});
        K.T(()=>{K.pulse("vsig4_31");K.pulse("cd163_31");K.pulse("timd4_31");},1000);
        K.T(()=>{K.unpulse("vsig4_31");K.unpulse("cd163_31");K.unpulse("timd4_31");},2600);
      }},
      {color:"C",t:3000,cap:"③ 成熟iKCが貪食能・サイトカイン産生などKC様機能を獲得。共培養がiKC品質の決定因子。",run(){
        K.show(["funcKC31"]);
        K.flow(580,224,580,290,"var(--C)",{n:2,dur:0.8,loop:2});
        K.T(()=>radiate(K,580,320,"var(--C)",4),800);
      }},
    ];
  }
});
