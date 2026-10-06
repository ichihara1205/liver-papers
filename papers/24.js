/* ============================================================
   №24 · Nature 2026 · Itzkovitz S† et al.（Department of Molecular Cell Biology, Weizmann In…
   生体ドナー由来健常ヒト肝の空間アトラス——Visium HD3/MERFISH/PhenoCycler+snRNA-seqでhuman-specific zonation解明・早期steatosisのmito転写プログラムを同定
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    "id": "24",
    "title": "生体ドナー由来健常ヒト肝の空間アトラス——Visium HD3/MERFISH/PhenoCycler+snRNA-seqでhuman-specific zonation解明・早期steatosisのmito転写プログラムを同定",
    "authors": "Itzkovitz S† et al.（Department of Molecular Cell Biology, Weizmann Institute of Science, Rehovot, Israel）",
    "journal": "Nature",
    "year": 2026,
    "vol": "653(8116):1148–1157",
    "doi": "10.1038/s41586-026-10377-y",
    "url": "https://www.nature.com/articles/s41586-026-10377-y",
    "primary": "G",
    "tags": ["G", "E", "D"],
    "approach": "ヒト肝（生体健常ドナー8例＋病変隣接正常8例の計16例）を Visium/Visium HD3・MERFISH・PhenoCycler（空間プロテオミクス）＋ snRNA-seq で多モーダル空間解析",
    "added": "2026-06-11",
    "abstract_ja": "健常ヒト肝の遺伝子発現アトラス構築は、ドナー組織への通常アクセスが虚血性変化を起こした脳死ドナー由来に限られるため困難であった。肝は再生能を持つため生体ドナーからの採取が可能という特性を活かし、若年生体健常ドナー8例および病変をもつ個体の隣接正常組織8例の計16例を、Visium・Visium HD3・MERFISH・PhenoCycler（空間プロテオミクス）＋snRNA-seqで多モーダル解析した。生体健常ドナー肝は病変隣接正常組織と有意に異なる遺伝子発現を示し、ヒト肝細胞・非実質細胞ともに門脈-中心静脈（porto-central）軸に沿った明瞭なzonationを示すが、主要機能のゾーン局在がマウス・他哺乳類より中心静脈側（pericentrally）にシフトしていることを発見した。また早期脂肪肝細胞には核コード型ミトコンドリアタンパク転写産物の減少とミトコンドリアゲノムコード転写産物の代償的増加という動的プログラムが存在することを同定した。",
    "background": "肝の遺伝子発現を空間情報つきで理解することはzonation・疾患メカニズム解明に必須だが、健常ヒト肝組織へのアクセスは脳死ドナーに限られ、虚血変化や病変隣接組織のバイアスが問題だった。マウスで確立されたzonation知識がヒトに直接適用できるかも不明であった。Visium HD3やMERFISHなどの新世代空間技術の登場がこの問題を解決する機会を生み、肝の再生能を利用した生体ドナー採取という発想がゴールドスタンダード参照アトラスの構築を可能にした。",
    "achievements": ["生体健常ドナー由来ヒト肝という「真のゴールドスタンダード」参照アトラスを初めて構築した（Visium/HD3/MERFISH/PhenoCycler+snRNA-seq統合）。", "ヒト肝の**zonation（門脈周囲→中心静脈周囲の機能勾配）がマウスより中心静脈側にシフト**しているという種差を初めて明示した。", "**早期steatosis肝細胞における核コード型ミトコンドリアタンパク↓・ミトコンドリアコード転写産物↑**という動的適応プログラムを発見した（#26 PLIN5-mito-LD couplingと接続）。"],
    "limitations": ["スナップショット解析であり時系列的な疾患進行を捉えていない。", "生体ドナー採取部位・個体差のバイアスは残存する。", "非実質細胞（特にKC・LSEC）の空間的解像度はスポットサイズに制限される（MERFISHで部分的に補完）。"],
    "connection": ["自系MPS（酸素透過性膜による類洞様O2勾配）がヒトのpericentrally-shifted zonationを再現しているかを検証する黄金標準参照データ。MERFISHパネルのゾーンマーカーを自系のqPCRパネルに採用できる。早期steatosisのmito転写プログラムは#26（PLIN5-mito-LDカップリング）と統合してFFA誘発steatosisのバイオマーカーセットを設計できる。#25（Takebe多ゾーンオルガノイド）との循環的バリデーション戦略の軸となる。"],
    "glossary": [{"term": "Visium HD3", "full": "10x Genomics Visium HD 第3世代", "desc": "サブミクロン解像度の空間トランスクリプトームプラットフォーム。従来Visiumより高解像度"}, {"term": "MERFISH", "full": "multiplexed error-robust fluorescence in situ hybridization", "desc": "多数遺伝子を単一細胞解像度でin situ定量する空間イメージング法。zonal markerの空間局在に使用"}, {"term": "PhenoCycler", "full": "AKOYA Biosciences PhenoCycler-Fusion", "desc": "最大60タンパクを蛍光サイクル染色で同一組織上に同時測定する空間プロテオミクスイメージャー"}, {"term": "Porto-central axis", "full": "門脈-中心静脈軸", "desc": "肝小葉内の門脈域（Zone 1）から中心静脈（Zone 3）へ向かうzonation軸。酸素・栄養勾配の基盤"}, {"term": "snRNA-seq", "full": "single-nucleus RNA sequencing", "desc": "単一核RNAシーケンス。凍結ヒト組織でも適用でき、空間データと統合してゾーン別細胞状態を解析"}],
    "struct": {"model": "ヒト組織(空間オミクス)", "cells": ["肝細胞", "非実質細胞(KC/LSEC/HSC)"], "triggers": ["—(健常基準アトラス)", "早期steatosis"], "steatosis": "△", "inflammation": "—", "fibrosis": "—", "readout": ["porto-central zonation(中心静脈側シフト)", "ミトコンドリア転写プログラム", "空間プロテオミクス(PhenoCycler)"], "ignite": "—（健常アトラスが主目的。早期steatosisのミトコンドリア転写再配分を記載）", "params": [{"name": "zonal markerパネル→ゾーン同定", "note": "MERFISHゾーンマーカーを自系qPCR/イメージングパネルに採用しオルガノイドのゾーン相当を定量"}, {"name": "mito転写プログラム→早期steatosisバイオマーカー", "note": "核コード↓・ミトコード↑の比を自系FFAモデルの早期脂肪化指標に転用"}], "todos": ["MERFISH zonal markerを自系のqPCR/空間パネルに採用", "酸素透過膜MPSがヒトのpericentrally-shifted zonationを再現するか検証", "#26と統合し早期steatosisのmito転写プログラムを自系で確認"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m24' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：生体健常ドナー肝 → 多モーダル空間オミクス統合</text>\n  <rect x='14' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='66' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 生体ドナー肝</text>\n  <text x='84' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>健常8例＋隣接正常8例</text>\n  <text x='84' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>計16例</text>\n  <text x='84' y='112' text-anchor='middle' font-size='8.3' fill='var(--accent)'>虚血バイアス回避</text>\n  <path d='M156,98 L168,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m24)'/>\n  <rect x='172' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='241' y='66' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>② Visium / HD3</text>\n  <text x='241' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>空間トランスクリプトーム</text>\n  <text x='241' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>サブミクロン解像度</text>\n  <text x='241' y='112' text-anchor='middle' font-size='8.3' fill='var(--G)'>ゾーン勾配</text>\n  <path d='M314,98 L326,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m24)'/>\n  <rect x='329' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='399' y='66' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>③ MERFISH</text>\n  <text x='399' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>単一細胞in situ</text>\n  <text x='399' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>多重遺伝子定量</text>\n  <text x='399' y='112' text-anchor='middle' font-size='8.3' fill='var(--G)'>細胞局在</text>\n  <path d='M472,98 L484,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m24)'/>\n  <rect x='486' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='556' y='66' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>④ PhenoCycler＋snRNA</text>\n  <text x='556' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>空間プロテオミクス</text>\n  <text x='556' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>単一核RNA-seq</text>\n  <text x='556' y='112' text-anchor='middle' font-size='8.3' fill='var(--C)'>統合アトラス</text>\n  <text x='320' y='196' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Itzkovitz S et al., Nature 653(8116):1148–1157 (2026)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 320' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs>\n    <linearGradient id='zg24' x1='0' y1='0' x2='1' y2='0'>\n      <stop offset='0' stop-color='#cfe0ee'/><stop offset='1' stop-color='#e7d9b8'/>\n    </linearGradient>\n    <marker id='af24' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--D)'/></marker>\n  </defs>\n  <rect x='0' y='0' width='640' height='320' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>健常ヒト肝の空間アトラス：中心静脈側へシフトしたzonation</text>\n  <!-- lobule axis -->\n  <rect x='60' y='52' width='520' height='52' rx='8' fill='url(#zg24)' stroke='var(--line)' stroke-width='1'/>\n  <circle cx='78' cy='78' r='14' fill='#3f6fa3' stroke='var(--E)' stroke-width='1.4'/>\n  <text x='78' y='81' text-anchor='middle' font-size='7.5' fill='#fff' font-weight='700'>PP</text>\n  <text x='78' y='118' text-anchor='middle' font-size='8' fill='var(--E)'>門脈周囲 Zone1</text>\n  <circle cx='562' cy='78' r='14' fill='#bf942b' stroke='var(--D)' stroke-width='1.4'/>\n  <text x='562' y='81' text-anchor='middle' font-size='7.5' fill='#fff' font-weight='700'>CV</text>\n  <text x='562' y='118' text-anchor='middle' font-size='8' fill='var(--D)'>中心静脈周囲 Zone3</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>porto-central 軸（酸素・栄養勾配）</text>\n  <!-- species shift -->\n  <rect x='60' y='138' width='520' height='66' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.3'/>\n  <text x='320' y='158' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='700'>ヒトのゾーン境界はマウスより中心静脈側へシフト</text>\n  <line x1='120' y1='178' x2='520' y2='178' stroke='var(--line)' stroke-width='1'/>\n  <text x='150' y='176' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>マウス境界</text>\n  <path d='M250,190 L300,190' stroke='var(--G)' stroke-width='1.3' marker-end='url(#af24)'/>\n  <text x='430' y='176' text-anchor='middle' font-size='8' fill='var(--G)'>ヒト境界（CV寄り）</text>\n  <text x='320' y='196' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>主要機能がpericentrally-shifted</text>\n  <!-- mito program -->\n  <rect x='60' y='220' width='520' height='72' rx='8' fill='#f3ead4' stroke='var(--D)' stroke-width='1.4'/>\n  <text x='320' y='240' text-anchor='middle' font-size='9.5' fill='var(--D)' font-weight='700'>早期steatosis肝細胞のミトコンドリア転写プログラム</text>\n  <text x='200' y='262' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>核コード型mitoタンパク転写 ↓</text>\n  <text x='450' y='262' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>mtDNAコード転写産物 ↑（代償）</text>\n  <text x='320' y='282' text-anchor='middle' font-size='8' fill='var(--D)'>#26 PLIN5-mito-LDカップリングと接続</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("24", [{ic:"human",cap:"生体健常ドナー8例のヒト肝サンプル"},{ic:"omics",cap:"Visium/Visium HD3 空間トランスクリプトーム"},{ic:"omics",cap:"MERFISH + PhenoCycler 空間プロテオミクス"},{ic:"omics",cap:"snRNA-seq"},{ic:"liver",cap:"早期steatosis肝細胞のmito転写プログラム"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 24 Itzkovitz Nature 2026: 生体ドナー肝+Visium/HD3/MERFISH/PhenoCycler+snRNA-seq */
LP.methods("24", ["human","spatial","scrna","proteomics","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
LP.cinema("24", {
  svg:GLYPH.bg()
    +`<defs>${GLYPH.defsCommon}${GLYPH.arrow("24g","var(--G)")}${GLYPH.arrow("24e","var(--E)")}</defs>`
    +GLYPH.title("生体ドナー由来健常ヒト肝の空間アトラス——human-specific zonation + 早期steatosisミトコンドリアプログラム")
    +`<rect id="lobule24" x="105" y="45" width="510" height="210" rx="10" fill="var(--G)" fill-opacity="0.05" stroke="var(--G)" stroke-width="1.2"/>`
    +`<text x="140" y="68" text-anchor="middle" font-size="9" fill="var(--E)">Zone 1</text>`
    +`<text x="360" y="68" text-anchor="middle" font-size="9" fill="var(--G)">Zone 2</text>`
    +`<text x="578" y="68" text-anchor="middle" font-size="9" fill="var(--D)">Zone 3</text>`
    +`<rect id="ppZone24" x="110" y="75" width="146" height="170" rx="6" fill="var(--E)" fill-opacity="0.12" stroke="var(--E)" stroke-width="1"/>`
    +`<rect id="cvZone24" x="464" y="75" width="146" height="170" rx="6" fill="var(--D)" fill-opacity="0.12" stroke="var(--D)" stroke-width="1"/>`
    +`<text x="183" y="98" text-anchor="middle" font-size="8" fill="var(--E)">門脈域（PP）</text>`
    +`<text x="537" y="98" text-anchor="middle" font-size="8" fill="var(--D)">中心静脈域（CV）</text>`
    +`<g id="humanZone24" class="fade"><text x="360" y="148" text-anchor="middle" font-size="9" fill="var(--G)" font-weight="600">ヒトzonation：機能はマウスより中心静脈側にシフト</text><text x="360" y="163" text-anchor="middle" font-size="8" fill="var(--G)">（pericentral shift vs mouse）</text></g>`
    +`<g id="techBox24" class="fade"><rect x="105" y="268" width="510" height="56" rx="5" fill="var(--G)" fill-opacity="0.08" stroke="var(--G)" stroke-width="1"/><text x="360" y="285" text-anchor="middle" font-size="9" fill="var(--G)" font-weight="600">Visium / Visium HD3 / MERFISH / PhenoCycler + snRNA-seq</text><text x="360" y="300" text-anchor="middle" font-size="8.5" fill="var(--G)">生体健常ドナー8例 ＋ 病変隣接正常8例 ＝ 16肝サンプル統合解析</text><text x="360" y="315" text-anchor="middle" font-size="8.5" fill="var(--G)">健常ヒト肝の空間遺伝子発現「黄金標準」参照アトラスを構築</text></g>`
    +`<g id="mitoP24" class="fade"><rect x="148" y="105" width="70" height="44" rx="4" fill="var(--D)" fill-opacity="0.18" stroke="var(--D)" stroke-width="1.2"/><text x="183" y="120" text-anchor="middle" font-size="8" fill="var(--D)">早期steatosis</text><text x="183" y="132" text-anchor="middle" font-size="8" fill="var(--D)">核コードMito↓</text><text x="183" y="144" text-anchor="middle" font-size="8" fill="var(--D)">mito転写↑</text></g>`
    +`<g id="zoneTx24" class="fade"><text x="360" y="190" text-anchor="middle" font-size="8.5" fill="var(--G)">非実質細胞（KC/LSEC/HSC）も</text><text x="360" y="204" text-anchor="middle" font-size="8.5" fill="var(--G)">空間ゾーン依存的な機能分担を示す</text></g>`,
  build(K){
    return [
      {color:"G",t:2400,cap:"① 健常ヒト肝の基準参照アトラス構築。生体ドナーから採取した若年健常肝8例を最新の空間オミクス技術（Visium HD3/MERFISH/PhenoCycler）とsnRNA-seqで統合解析——脳死ドナー由来では避けられなかった虚血変化バイアスを排除した真のゴールドスタンダード。",run(){}},
      {color:"G",t:4000,cap:"② 複数空間技術を組み合わせた多モーダル解析プラットフォーム。Visium/Visium HD3で転写、PhenoCyclerで空間プロテオミクス（最大60タンパク）、MERFISHでin situ RNA検出——同一組織断片上でのマルチオーミクス統合を実現。",
       run(){
         K.show(["techBox24"]);
       }},
      {color:"E",t:4400,cap:"③ ヒト肝zonation解明。肝小葉はZone1（門脈周囲/PP）→Zone3（中心静脈周囲/CV）の機能勾配で組織化されるが、ヒトでは主要機能（糖新生・脂質代謝等）がマウスより中心静脈側にシフト（pericentrally shifted）していることを定量化。非実質細胞のzonationも同定。",
       run(){
         K.show(["humanZone24","zoneTx24"]);
         K.pulse("humanZone24");
         K.T(()=>K.unpulse("humanZone24"),2800);
       }},
      {color:"D",t:3600,cap:"④ 早期steatosis肝細胞の適応プログラム。脂肪肝初期の肝細胞では核コード型ミトコンドリアタンパク転写産物が減少し、ミトコンドリアゲノムコード転写産物が代償的に増加する動的プログラムを発見——#26（PLIN5-mito-LD coupling）と接続するmito適応機序の転写シグネチャ。",
       run(){
         K.show(["mitoP24"]);
         K.pulse("mitoP24");
         K.T(()=>K.unpulse("mitoP24"),2200);
       }},
    ];
  }
});
