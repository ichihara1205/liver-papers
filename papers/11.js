/* ============================================================
   №11 · Nature Communications 2025 · Watson BR, Paul B, Rahman RU, Amir-Zilberstein L, Segerstolpe Å, Epst…
   MERFISHで健常・線維化ヒト肝を単一細胞解像度で空間マッピング
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"11",
    title:"MERFISHで健常・線維化ヒト肝を単一細胞解像度で空間マッピング",
    authors:"Watson BR, Paul B, Rahman RU, Amir-Zilberstein L, Segerstolpe Å, Epstein ET, Murphy S, Geistlinger L, Lee T, Shih A, Deguine J, Xavier RJ, Moffitt JR, Mullen AC",
    journal:"Nature Communications",
    year:2025,
    vol:"16:319",
    doi:"10.1038/s41467-024-55325-4",
    url:"https://www.nature.com/articles/s41467-024-55325-4",
    primary:"G",
    tags:["B","E"],
    approach:"MERFISH（317遺伝子）＋ snRNA-seq ＋ CellPhoneDB（ヒト健常3例・線維化3例）",
    added:"2026-06-01",
    abstract_ja:"ヒト肝の空間的・単一細胞レベルでの遺伝子発現マップはこれまで整備されていなかった。本研究はMERFISH（多重化エラー頑健蛍光in situ ハイブリダイゼーション）を健常ヒト肝（3例）および線維化肝（3例）に適用し、317遺伝子を単一細胞解像度で空間定量した。健常肝では肝細胞が門脈→中心静脈の連続的発現勾配（3ゾーン）を示すこと、常在KC様Mac2（MARCO+/CD5L+・びまん性）と門脈域濃縮Mac1（MARCO-）の2マクロファージ集団、およびCD74+HSC1（門脈域）とHSC2（びまん性）の2HSC集団を解像した。snRNA-seqとの統合でzonation依存的な受容体–リガンド相互作用（zone3肝細胞→HSC:GDF7–BMP受容体; EC/Mac→zone3肝細胞:WNT2B–FZD6–LRP5/6等）を同定。線維化肝では新たに2種の散在性線維化関連肝細胞集団（Fibrotic Hep 1:PNPLA3↑; Fibrotic Hep 2:CPS1/SLC7A2↑）が出現し、両集団でTHRB（レズメチロム標的）が上昇した。",
    background:"scRNA-seq/snRNA-seqでヒト肝の細胞多様性は解明されてきたが、空間情報と単一細胞解像度を同時に持つ解析は未整備だった。VisiumはNGSベースで単一細胞解像度に届かず、肝細胞のzonation・非実質細胞の空間配置・クロストーク・線維化での空間的リモデリングが不明だった。",
    achievements:[
      "MERFISHをヒト肝に適用し健常3例・線維化3例で計〜31万細胞を空間定量（317遺伝子）",
      "肝細胞のzonationが離散的3ゾーンではなく門脈→中心静脈の連続勾配であることをpseudotimeと1小葉レベルの発現マップで確立",
      "多核化肝細胞（〜1/3）はzonation非依存で遺伝子発現パターンに変化なし（細胞サイズ・RNA量のみ増加）",
      "MERFISH＋snRNA-seq統合でzonation依存的受容体–リガンドペアを同定（zone3 Hep→HSC: GDF7–BMP受容体・VEGFA–NRP2; Mac/EC→zone3 Hep: WNT2B–FZD6–LRP5/6; portal Hep→Mac: TGFB3–TGFBR1）",
      "線維化でFibrotic Hep 1（PNPLA3↑・EGFR↑）とFibrotic Hep 2（CPS1↑・SLC7A2↑・HSP90AA1↑）がlobule全域に散在して出現；両集団でTHRB（レズメチロム標的）上昇",
      "線維化MacはMARCO/CD5L/CD68喪失、線維化HSCはCOL1A1高発現を示した"
    ],
    limitations:[
      "健常3例・線維化3例と症例数が少なく、疾患エチオロジーが混在（MASLD特異的線維化かどうか不明）",
      "MERFISHパネルが317遺伝子に限定；リンパ球・好中球は捕捉できず非実質細胞の解像度はsnRNA-seqより低い",
      "Fibrotic Hep 1/2集団の機能的役割（保護的か病態促進的か）は実験的に未検証",
      "受容体–リガンド相互作用はCellPhoneDB計算予測が中心で生体内因果は未確立",
      "細胞セグメンテーション（Cellpose＋Baysor）の精度に依存した測定"
    ],
    connection:[
      "4細胞共培養の空間的設計指針：Mac1（門脈域に濃縮・KC様でない）とMac2（KC様/びまん性）、HSC1（CD74+/門脈域）とHSC2（びまん性）の空間依存的亜集団の存在は、酸素透過膜で酸素勾配を調整してKC表現型を制御する設計に直結",
      "Fibrotic Hep 1（PNPLA3, EGFR↑）とFibrotic Hep 2（CPS1, SLC7A2↑, THRB↑）は線維化移行の肝細胞リードアウト候補として自系に適用可能",
      "WNT2B（EC/Mac→zone3 Hep）・GDF7（zone3 Hep→HSC）・VEGFA–NRP2・GAS6–MERTKをLigand添加実験の候補リストとして直接活用。#09（RSPO3→肝細胞Wnt軸）との統合でEC/Mac→WNT2B＋HSC→RSPO3→肝細胞Wnt/βカテニンの多細胞Wntハブが構成できる",
      "ABM実装：zonation勾配を酸素濃度の連続関数として設定→肝細胞エージェントの位置依存遺伝子発現→疾患条件でFibrotic Hep転換確率を組み込む。#06のHSC7状態モデルにCD74+HSC1/HSC2の空間パラメータを追加可能",
      "既収録との接続：#01（Visium等によるヒトMASLD空間atlas）の低い空間解像度を単一細胞解像度MERFISHで補完。#09（HSC→RSPO3→肝細胞）の逆方向（zone3 Hep→GDF7→HSC）も提示し双方向クロストーク全体像が完成。#10（GPNMB+MetMac）の空間分布がMac1（門脈浸潤型）と対応する可能性"
    ],
    glossary:[
      {term:"MERFISH",full:"multiplexed error robust fluorescence in situ hybridization",desc:"数百遺伝子を単一細胞・空間解像度で定量するFISHベース空間TX手法"},
      {term:"CellPhoneDB",full:"CellPhoneDB (receptor-ligand interaction tool)",desc:"細胞間受容体–リガンドペアを発現データから網羅的に推定するツール"},
      {term:"CPS1",full:"carbamoyl phosphate synthetase 1",desc:"尿素回路の律速酵素。線維化関連肝細胞（Fibrotic Hep 2）で高発現"},
      {term:"GDF7",full:"growth differentiation factor 7",desc:"Zone3肝細胞→HSCのBMP受容体への分泌リガンド。TGFβスーパーファミリー"},
      {term:"THRB",full:"thyroid hormone receptor beta",desc:"甲状腺ホルモン受容体β。線維化関連肝細胞で上昇。レズメチロムの分子標的"},
      {term:"THBS1",full:"thrombospondin 1",desc:"HSCが産生しZone3肝細胞のCD36に作用するマトリクス糖タンパク"},
      {term:"CD74",full:"CD74 (MHC class II invariant chain)",desc:"MHCクラスII安定化因子。門脈域濃縮のHSC1で高発現（抗原提示能または活性化履歴の違いを反映する可能性）"},
      {term:"Baysor",full:"Baysor (Bayesian cell segmentation tool)",desc:"MERFISH等の画像ベース空間TX用RNA分布考慮の細胞境界推定ツール"},
      {term:"SLC7A2",full:"solute carrier family 7 member 2",desc:"カチオン性アミノ酸トランスポーター（オルニチン/アルギニン）。Fibrotic Hep 2で高発現"}
    ],
    struct:{
      model:"ヒト組織",
      cells:["肝細胞（Zone1/2/3・Fibrotic Hep1/2）","KC様Mac2（MARCO+/CD5L+）","Mac1（門脈域・MARCO-）","HSC1（CD74+・門脈域）","HSC2（びまん性）","LSEC"],
      triggers:["慢性傷害（線維化誘発）"],
      steatosis:"△",
      inflammation:"△",
      fibrosis:"○",
      readout:["Fibrotic Hep 1/2の出現・分布","MARCO/CD5L喪失（Mac）","COL1A1高発現（HSC）","PNPLA3/EGFR/THRB/CPS1/SLC7A2発現変化"],
      ignite:"線維化でも肝細胞のzonationは部分的に保たれるが、zonationに依存せずlobule全域に散在するFibrotic Hep 1/2が出現・増加する",
      params:[
        {name:"肝細胞zonation勾配",note:"門脈→中心静脈を連続変数（位置パラメータ）で表現し各ゾーンの発現プロファイルを割り当て"},
        {name:"Mac1/Mac2比・空間分布",note:"Mac1=門脈域集積・MARCO-; Mac2=びまん性・MARCO+/KC様の2状態比率"},
        {name:"HSC1-HSC2空間パラメータ",note:"HSC1（CD74+・門脈域）とHSC2（びまん性）の位置依存割当ルール"},
        {name:"Fibrotic Hep転換確率",note:"慢性傷害条件でFibrotic Hep 1/2へ移行する確率ルール（PNPLA3・CPS1をリードアウトに）"}
      ],
      todos:[
        "自系の肝細胞でFibrotic Hep 1マーカー（PNPLA3, EGFR, THRB）を脂質負荷＋KCセカンドヒット条件で計測",
        "zone3マーカー（CYP2E1, CYP1A2, GLUL）の発現を酸素透過膜の有無で比較",
        "GDF7（zone3 Hep→HSC BMP受容体）の培地添加でHSC活性化を確認",
        "WNT2B添加で肝細胞のWNT/βカテニン活性（GLUL, AXIN2）を誘導できるか検証"
      ]
    },
    figure:"<svg viewBox='0 0 640 340' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='ar11' markerWidth='7' markerHeight='7' refX='6' refY='3.5' orient='auto'><polygon points='0 0,7 3.5,0 7' fill='var(--ink-soft)'/></marker><marker id='ar11b' markerWidth='7' markerHeight='7' refX='6' refY='3.5' orient='auto'><polygon points='0 0,7 3.5,0 7' fill='var(--B)'/></marker></defs><!-- background --><rect x='0' y='0' width='640' height='340' rx='12' fill='var(--paper)' stroke='var(--line-soft)' stroke-width='1'/><!-- title --><text x='320' y='22' text-anchor='middle' font-size='12' font-weight='bold' fill='var(--ink)'>ヒト肝 MERFISH＋snRNA-seq 空間マップの主要知見</text><!-- Zonation gradient bar --><rect x='30' y='40' width='200' height='24' rx='4' fill='url(#zgrad)'/><defs><linearGradient id='zgrad' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='var(--E)' stop-opacity='0.5'/><stop offset='100%' stop-color='var(--B)' stop-opacity='0.5'/></linearGradient></defs><text x='30' y='38' font-size='9' fill='var(--ink-soft)'>門脈側 (Zone 1)</text><text x='230' y='38' text-anchor='end' font-size='9' fill='var(--ink-soft)'>中心静脈側 (Zone 3)</text><text x='130' y='57' text-anchor='middle' font-size='10' fill='var(--ink)'>連続勾配 SDS→CYP2E1/GLUL</text><!-- Zone 1 box --><rect x='30' y='74' width='90' height='56' rx='6' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='75' y='90' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--E)'>Zone 1 Hep</text><text x='75' y='103' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>SDS, CYP2A6</text><text x='75' y='116' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ASS1, gluconeo</text><text x='75' y='128' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>TGFB3→Mac(TGFBR1)</text><!-- Zone 3 box --><rect x='140' y='74' width='90' height='56' rx='6' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.4'/><text x='185' y='90' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--B)'>Zone 3 Hep</text><text x='185' y='103' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>CYP2E1, GLUL</text><text x='185' y='116' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>VEGFA→HSC(NRP2)</text><text x='185' y='128' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>GDF7→HSC(BMP-R)</text><!-- KC / Mac boxes --><rect x='270' y='74' width='100' height='56' rx='6' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.4'/><text x='320' y='90' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--C)'>KC様Mac2</text><text x='320' y='103' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>MARCO+/CD5L+</text><text x='320' y='116' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>びまん性</text><text x='320' y='128' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>WNT2B→Zone3 Hep</text><rect x='380' y='74' width='100' height='56' rx='6' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1'/><text x='430' y='90' text-anchor='middle' font-size='10' fill='var(--C)'>Mac1</text><text x='430' y='103' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>MARCO- CD5L-</text><text x='430' y='116' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>門脈域濃縮</text><text x='430' y='128' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>TGFB3(portal Hep)受信</text><!-- HSC boxes --><rect x='490' y='74' width='130' height='56' rx='6' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.4'/><text x='555' y='90' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--B)'>HSC1/HSC2</text><text x='555' y='103' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>HSC1: CD74+・門脈域</text><text x='555' y='116' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>HSC2: びまん性</text><text x='555' y='128' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>線維化でCOL1A1↑</text><!-- arrows healthy --><line x1='245' y1='100' x2='265' y2='100' stroke='var(--ink-soft)' stroke-width='1.2' marker-end='url(#ar11)'/><line x1='380' y1='102' x2='350' y2='102' stroke='var(--ink-soft)' stroke-width='1.2' marker-end='url(#ar11)'/><line x1='230' y1='108' x2='486' y2='108' stroke='var(--B)' stroke-width='1.2' stroke-dasharray='4,2' marker-end='url(#ar11b)'/><text x='358' y='118' text-anchor='middle' font-size='8' fill='var(--B)'>GDF7·VEGFA→HSC</text><!-- divider --><line x1='30' y1='150' x2='620' y2='150' stroke='var(--line-soft)' stroke-width='1' stroke-dasharray='4,3'/><!-- Fibrosis section --><text x='320' y='168' text-anchor='middle' font-size='11' font-weight='bold' fill='var(--ink)'>線維化肝で出現する散在性肝細胞集団（zonation非依存）</text><!-- Fibrotic Hep 1 --><rect x='50' y='178' width='250' height='70' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.6'/><text x='175' y='195' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--D)'>Fibrotic Hep 1</text><text x='175' y='210' text-anchor='middle' font-size='9' fill='var(--ink)'>PNPLA3↑・EGFR↑・THRB↑</text><text x='175' y='223' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>脂質代謝遺伝子↑・oxygenase↑</text><text x='175' y='236' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>lobule全域に散在（zonationなし）</text><!-- Fibrotic Hep 2 --><rect x='340' y='178' width='250' height='70' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.6'/><text x='465' y='195' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--H)'>Fibrotic Hep 2</text><text x='465' y='210' text-anchor='middle' font-size='9' fill='var(--ink)'>CPS1↑・SLC7A2↑・SLC25A15↑</text><text x='465' y='223' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>尿素回路酵素↑・HSP90↑・THRB↑</text><text x='465' y='236' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>lobule全域に散在（zonationなし）</text><!-- common note --><text x='320' y='266' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>両集団に共通：THRB（レズメチロム標的）・EGFR↑・CPS1↑・GHR↑・LEPR↑</text><!-- Mac fibrosis --><rect x='100' y='278' width='180' height='44' rx='6' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.2'/><text x='190' y='295' text-anchor='middle' font-size='9' font-weight='bold' fill='var(--C)'>線維化Mac</text><text x='190' y='308' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>MARCO/CD5L/CD68喪失</text><text x='190' y='321' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>（常在KC様表現型を失う）</text><!-- HSC fibrosis --><rect x='360' y='278' width='180' height='44' rx='6' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.2'/><text x='450' y='295' text-anchor='middle' font-size='9' font-weight='bold' fill='var(--B)'>線維化HSC</text><text x='450' y='308' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>COL1A1高発現</text><text x='450' y='321' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>（ECM産生増加・線維化ドライバー）</text></svg>",
    method_figure:"<svg viewBox='0 0 640 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m11' markerWidth='7' markerHeight='7' refX='6' refY='3.5' orient='auto'><polygon points='0 0,7 3.5,0 7' fill='var(--ink-soft)'/></marker></defs><rect x='0' y='0' width='640' height='200' rx='12' fill='var(--paper)' stroke='var(--line-soft)' stroke-width='1'/><!-- Step 1: Sample --><rect x='20' y='60' width='110' height='80' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='75' y='82' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--ink)'>ヒト肝組織</text><text x='75' y='97' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>健常 n=3</text><text x='75' y='110' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>線維化 n=3</text><text x='75' y='125' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>外科切除縁から採取</text><!-- Arrow --><line x1='134' y1='100' x2='152' y2='100' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#m11)'/><!-- Step 2: MERFISH --><rect x='155' y='50' width='130' height='100' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='220' y='72' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--G)'>MERFISH</text><text x='220' y='87' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>317遺伝子プローブ</text><text x='220' y='100' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Cellpose＋Baysor</text><text x='220' y='113' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>細胞セグメンテーション</text><text x='220' y='126' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>～31万細胞 空間座標付き</text><!-- Arrow --><line x1='289' y1='100' x2='307' y2='100' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#m11)'/><!-- Step 3: snRNA-seq --><rect x='310' y='50' width='120' height='100' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='370' y='72' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--G)'>snRNA-seq</text><text x='370' y='87' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>～15,000核（健常）</text><text x='370' y='100' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>～13,500核（線維化）</text><text x='370' y='113' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>全トランスクリプトーム</text><text x='370' y='126' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>共同クラスタリングで統合</text><!-- Arrow --><line x1='434' y1='100' x2='452' y2='100' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#m11)'/><!-- Step 4: Output --><rect x='455' y='40' width='165' height='120' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.6'/><text x='537' y='62' text-anchor='middle' font-size='10' font-weight='bold' fill='var(--B)'>アウトプット</text><text x='537' y='77' text-anchor='middle' font-size='9' fill='var(--ink)'>• Zonation連続勾配マップ</text><text x='537' y='90' text-anchor='middle' font-size='9' fill='var(--ink)'>• Mac1/Mac2・HSC1/HSC2空間配置</text><text x='537' y='103' text-anchor='middle' font-size='9' fill='var(--ink)'>• CellPhoneDB受容体–リガンド</text><text x='537' y='116' text-anchor='middle' font-size='9' fill='var(--ink)'>• Fibrotic Hep 1/2 出現</text><text x='537' y='129' text-anchor='middle' font-size='9' fill='var(--ink)'>• 線維化Mac/HSC表現型変化</text><text x='537' y='142' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>（多核化 zonation非依存も確認）</text><!-- G label --><text x='320' y='18' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>テーマG：オミクス・空間解析手法 ｜ Nat Commun 2025</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("11", [{ic:"human",cap:"ヒト健常3例・線維化3例"},{ic:"hepatocyte",cap:"Fibrotic Hep 1/2"},{ic:"macrophage",cap:"Mac1/Mac2(KC様)"},{ic:"stellate",cap:"HSC1(CD74+)/HSC2"},{ic:"omics",cap:"MERFISH+snRNA-seq"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 11 Watson&Paul Nat Commun 2025: MERFISH(蛍光空間イメージング)+snRNA-seq+ヒト6例+CellPhoneDB */
LP.methods("11", ["human","spatial","scrna","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №11 MERFISH 単一細胞空間マッピング ===== */
LP.cinema("11", {
  svg:`<defs>
    <radialGradient id="hepg11" cx="0.4" cy="0.32" r="0.85"><stop offset="0" stop-color="#f6e7c8"/><stop offset="1" stop-color="#dcc18c"/></radialGradient>
    <linearGradient id="zoneGrad11" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7ab5d8" stop-opacity="0.5"/><stop offset="100%" stop-color="#c86c4a" stop-opacity="0.5"/></linearGradient>
    <marker id="arG11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--B)"/></marker>
    <marker id="arC11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--C)"/></marker>
    <marker id="arE11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--E)"/></marker>
  </defs>
  <rect x="0" y="0" width="720" height="430" fill="#eef3f6"/>
  <text x="360" y="22" text-anchor="middle" font-size="11.5" fill="var(--ink-soft)">MERFISH：ヒト肝を単一細胞解像度で空間マッピング</text>

  <!-- Lobule outline (hexagon) -->
  <g id="lobule">
    <polygon id="lobPoly" points="360,50 520,140 520,310 360,400 200,310 200,140" fill="#f5f2ec" stroke="#c8bb9a" stroke-width="2"/>
    <!-- portal vein markers (corners) -->
    <circle cx="200" cy="140" r="10" fill="#7ab5d8" stroke="#4a8ab0" stroke-width="1.5"/><text x="200" y="125" text-anchor="middle" font-size="9" fill="#4a8ab0">PV</text>
    <circle cx="520" cy="140" r="10" fill="#7ab5d8" stroke="#4a8ab0" stroke-width="1.5"/><text x="520" y="125" text-anchor="middle" font-size="9" fill="#4a8ab0">PV</text>
    <circle cx="200" cy="310" r="10" fill="#7ab5d8" stroke="#4a8ab0" stroke-width="1.5"/>
    <circle cx="520" cy="310" r="10" fill="#7ab5d8" stroke="#4a8ab0" stroke-width="1.5"/>
    <!-- central vein -->
    <circle id="cv" cx="360" cy="225" r="22" fill="#c8e0f0" stroke="var(--E)" stroke-width="2"/>
    <text x="360" y="221" text-anchor="middle" font-size="9.5" fill="var(--E)">中心静脈</text>
    <text x="360" y="234" text-anchor="middle" font-size="9" fill="var(--E)">CV</text>
  </g>

  <!-- Zone gradient bar -->
  <g id="zoneBar" class="fade">
    <rect x="200" y="55" width="320" height="14" rx="7" fill="url(#zoneGrad11)"/>
    <text x="200" y="50" text-anchor="middle" font-size="9" fill="#4a8ab0">Zone 1 (SDS)</text>
    <text x="360" y="50" text-anchor="middle" font-size="9" fill="var(--ink-soft)">Zone 2 (ALDOB)</text>
    <text x="520" y="50" text-anchor="middle" font-size="9" fill="#c86c4a">Zone 3 (CYP2E1/GLUL)</text>
  </g>

  <!-- Hepatocyte zones (3 colored regions inside lobule) -->
  <g id="hepZones" class="fade">
    <ellipse cx="245" cy="225" rx="40" ry="55" fill="#7ab5d8" opacity="0.3"/>
    <text x="245" y="225" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#4a8ab0">Z1</text>
    <text x="245" y="240" text-anchor="middle" font-size="8.5" fill="#4a8ab0">SDS</text>
    <text x="245" y="253" text-anchor="middle" font-size="8" fill="#4a8ab0">CYP2A6</text>
    <ellipse cx="360" cy="225" rx="40" ry="55" fill="#b0c48c" opacity="0.25"/>
    <text x="360" y="184" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#6a8840">Z2</text>
    <text x="360" y="197" text-anchor="middle" font-size="8.5" fill="#6a8840">ALDOB</text>
    <ellipse cx="470" cy="225" rx="40" ry="55" fill="#c86c4a" opacity="0.3"/>
    <text x="470" y="225" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#a04520">Z3</text>
    <text x="470" y="240" text-anchor="middle" font-size="8.5" fill="#a04520">CYP2E1</text>
    <text x="470" y="253" text-anchor="middle" font-size="8" fill="#a04520">GLUL</text>
  </g>

  <!-- Mac1 (portal, MARCO-) -->
  <g id="mac1" class="fade" transform="translate(220,160)">
    <path d="M0,-14 C11,-15 18,-6 15,4 C20,12 10,18 0,15 C-11,19 -19,10 -15,1 C-20,-8 -10,-16 0,-14 Z" fill="#8ab0d0" stroke="#5a88b0" stroke-width="1.2"/>
    <circle cx="-2" cy="0" r="4" fill="#3a5870"/>
    <text x="0" y="26" text-anchor="middle" font-size="9" fill="var(--ink-soft)">Mac1</text>
    <text x="0" y="37" text-anchor="middle" font-size="8" fill="#5a88b0">MARCO-</text>
  </g>

  <!-- Mac2 KC-like (MARCO+) -->
  <g id="mac2" class="fade" transform="translate(430,165)">
    <path d="M0,-14 C11,-15 18,-6 15,4 C20,12 10,18 0,15 C-11,19 -19,10 -15,1 C-20,-8 -10,-16 0,-14 Z" fill="#5d7a58" stroke="#3d5a38" stroke-width="1.2"/>
    <circle cx="-2" cy="0" r="4" fill="#2a3e26"/>
    <text x="0" y="26" text-anchor="middle" font-size="9" fill="var(--ink-soft)">KC様Mac2</text>
    <text x="0" y="37" text-anchor="middle" font-size="8" fill="#3d5a38">MARCO+/CD5L+</text>
  </g>

  <!-- HSC1 (portal zone, CD74+) -->
  <g id="hsc1" class="fade" transform="translate(252,285)">
    <path id="hsc1Shape" d="M0,-10 L14,-20 L8,-5 L22,-2 L8,5 L16,18 L0,8 L-16,18 L-8,5 L-22,-2 L-8,-5 L-14,-20 Z" fill="#d6a08e" stroke="var(--B)" stroke-width="1.4"/>
    <circle cx="0" cy="0" r="5" fill="#7a3a2c"/>
    <text x="0" y="32" text-anchor="middle" font-size="9" fill="var(--ink-soft)">HSC1</text>
    <text x="0" y="43" text-anchor="middle" font-size="8" fill="var(--B)">CD74+・門脈域</text>
  </g>

  <!-- HSC2 (diffuse) -->
  <g id="hsc2" class="fade" transform="translate(460,285)">
    <path id="hsc2Shape" d="M0,-10 L14,-20 L8,-5 L22,-2 L8,5 L16,18 L0,8 L-16,18 L-8,5 L-22,-2 L-8,-5 L-14,-20 Z" fill="#c8b09a" stroke="var(--B)" stroke-width="1.4"/>
    <circle cx="0" cy="0" r="5" fill="#7a6a5c"/>
    <text x="0" y="32" text-anchor="middle" font-size="9" fill="var(--ink-soft)">HSC2</text>
    <text x="0" y="43" text-anchor="middle" font-size="8" fill="var(--B)">びまん性</text>
  </g>

  <!-- Receptor-ligand labels (hidden initially) -->
  <g id="rlGDF" class="fade">
    <rect x="410" y="250" width="100" height="22" rx="11" fill="#fff" stroke="var(--B)" stroke-width="1.4"/>
    <text x="460" y="265" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--B)">GDF7→HSC(BMP-R)</text>
    <line x1="455" y1="258" x2="456" y2="275" stroke="var(--B)" stroke-width="1" marker-end="url(#arG11)"/>
  </g>
  <g id="rlWNT" class="fade">
    <rect x="310" y="145" width="120" height="22" rx="11" fill="#fff" stroke="var(--C)" stroke-width="1.4"/>
    <text x="370" y="160" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--C)">WNT2B→Zone3 Hep</text>
    <line x1="430" y1="165" x2="468" y2="185" stroke="var(--C)" stroke-width="1" marker-end="url(#arC11)"/>
  </g>

  <!-- Fibrotic Hep 1 (scattered, PNPLA3+) -->
  <g id="fibHep1" class="fade">
    <ellipse cx="290" cy="170" rx="26" ry="20" fill="#e8a560" opacity="0.7" stroke="#c07820" stroke-width="1.4"/>
    <text x="290" y="167" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#804010">Fib Hep1</text>
    <text x="290" y="178" text-anchor="middle" font-size="7.5" fill="#804010">PNPLA3↑</text>
    <ellipse cx="430" cy="280" rx="26" ry="20" fill="#e8a560" opacity="0.7" stroke="#c07820" stroke-width="1.4"/>
    <text x="430" y="277" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#804010">Fib Hep1</text>
    <text x="430" y="288" text-anchor="middle" font-size="7.5" fill="#804010">EGFR↑·THRB↑</text>
  </g>
  <!-- Fibrotic Hep 2 (scattered, CPS1+) -->
  <g id="fibHep2" class="fade">
    <ellipse cx="390" cy="155" rx="26" ry="20" fill="#b060c0" opacity="0.5" stroke="#8030a0" stroke-width="1.4"/>
    <text x="390" y="152" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#4a1060">Fib Hep2</text>
    <text x="390" y="163" text-anchor="middle" font-size="7.5" fill="#4a1060">CPS1↑/SLC7A2↑</text>
    <ellipse cx="265" cy="290" rx="26" ry="20" fill="#b060c0" opacity="0.5" stroke="#8030a0" stroke-width="1.4"/>
    <text x="265" y="287" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#4a1060">Fib Hep2</text>
    <text x="265" y="298" text-anchor="middle" font-size="7.5" fill="#4a1060">THRB↑・HSP90↑</text>
  </g>

  <!-- Fibrosis HSC (COL1A1 bands) -->
  <g id="fibHSC" class="fade" opacity="0">
    <line x1="200" y1="200" x2="360" y2="225" stroke="var(--B)" stroke-width="2.5" opacity="0.5"/>
    <line x1="200" y1="260" x2="360" y2="225" stroke="var(--B)" stroke-width="2.5" opacity="0.5"/>
    <line x1="520" y1="200" x2="360" y2="225" stroke="var(--B)" stroke-width="2.5" opacity="0.5"/>
    <text x="290" y="335" text-anchor="middle" font-size="9.5" fill="var(--B)" font-weight="bold">HSC: COL1A1↑</text>
    <text x="430" y="335" text-anchor="middle" font-size="9.5" fill="var(--C)" font-weight="bold">Mac: MARCO/CD5L喪失</text>
  </g>
  <g data-layer="flux"></g>`,
  build(K){
    return [
      {color:"G", cap:"① 健常ヒト肝（3例）をMERFISHで測定。肝細胞はZone 1（門脈側:SDS/CYP2A6）→Zone 2（ALDOB）→Zone 3（中心静脈側:CYP2E1/GLUL）の連続勾配を示す。「3ゾーン」は離散的ではなく連続変数。",
        run(){
          K.show(["hepZones","zoneBar"]);
          K.flow(200,140,360,225,"#7ab5d8",{n:3,dur:1.0,loop:2});
          K.T(()=>K.flow(520,140,360,225,"#c86c4a",{n:3,dur:1.0,loop:2}),500);
        }
      },
      {color:"G", cap:"② 非実質細胞の空間配置を解像。Mac1（門脈域濃縮・MARCO-/CD5L-）とMac2（KC様・MARCO+/CD5L+・びまん性）、HSC1（CD74+・門脈域）とHSC2（びまん性）の4亜集団が同定された。",
        run(){
          K.show(["hepZones","mac1","mac2","hsc1","hsc2"]);
          K.pulse("hsc1"); K.T(()=>K.pulse("mac2"),400);
        }
      },
      {color:"E", cap:"③ MERFISH＋snRNA-seq統合でzonation依存的な受容体–リガンドペアを同定。Zone 3 Hep→HSCへGDF7（BMP受容体）、Mac/EC→Zone 3 HepへWNT2B（FZD6–LRP5/6）が関与しうることをCellPhoneDBで予測（計算上の仮説）。",
        run(){
          K.show(["hepZones","mac2","hsc2","rlGDF","rlWNT"]);
          K.flow(470,200,460,265,"#c86c4a",{n:3,dur:1.0,loop:2});
          K.T(()=>K.flow(430,165,470,200,"var(--C)",{n:3,dur:1.0,loop:2}),600);
          K.unpulse("hsc1"); K.unpulse("mac2");
        }
      },
      {color:"B", cap:"④ 線維化肝（3例）では、通常のzonation保持肝細胞に加えFibrotic Hep 1（PNPLA3↑/EGFR↑/THRB↑）とFibrotic Hep 2（CPS1↑/SLC7A2↑/THRB↑）がlobule全域に散在して出現。MacはMARCO/CD5L/CD68を喪失し、HSCはCOL1A1を高発現する。",
        run(){
          K.hide(["rlGDF","rlWNT"]);
          K.show(["fibHep1","fibHep2"]);
          K.T(()=>{
            K.show(["fibHSC"]);
            K.attr("fibHSC","opacity","1");
            K.flow(360,225,264,290,"var(--B)",{n:4,dur:1.2,loop:2});
            K.flow(360,225,460,290,"var(--B)",{n:4,dur:1.2,loop:2});
          },900);
        }
      },
    ];
  }
});
