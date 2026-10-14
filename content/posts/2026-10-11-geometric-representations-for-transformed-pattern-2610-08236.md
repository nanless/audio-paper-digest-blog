---
title: "Geometric Representations for Transformed Pattern Matching in Music"
date: 2026-10-11
draft: false
tags: [音乐检索, 音乐分析, 信号处理, 形式化分析]
categories: [论文速递]
description: "论文把无声部分配信息的复调乐谱表示成音高—时间点集，用平移、反射和时间轴缩放刻画移调、逆行、倒影与压成和弦等变换，并在拉威尔 Menuet sur le nom d'Haydn 的 31 个 HAYDN 主题出现之间用变换图验证了八种表示的分工与代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.08236"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把音符看成点：拉威尔小步舞曲中的 HAYDN 主题如何被几何变换找到"
paper_digest_original_title: "Geometric Representations for Transformed Pattern Matching in Music"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.08236v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.08236v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.08236v1.pdf"
paper_digest_primary_task: "音乐检索"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-retrieval","label":"音乐检索"},{"facet":"task","id":"task.music-understanding","label":"音乐分析"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.formal-analysis","label":"形式化分析"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.0
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把无声部分配信息的复调乐谱表示成音高—时间点集，用平移、反射和时间轴缩放刻画移调、逆行、倒影与压成和弦等变换，并在拉威尔 Menuet sur le nom d'Haydn 的 31 个 HAYDN 主题出现之间用变换图验证了八种表示的分工与代价。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"David Meredith"}]
paper_digest_abstract_sha256: "44eecedef8408e87fda263d57f3ab71108d4cf940c2f83cb65af4dad836dd3d4"
paper_digest_sidecars: {"citation.bib":{"sha256":"4437a96e9682f375f5be1b972bab58c6fea42b3abb4e424973e56cc7ba2b1be6","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08236/citation.bib"},"citation.json":{"sha256":"65581f3ddf4bf2904f2d2632a756fd59fa875b9b1cf9cc3cb2bd9fe208d6ba2c","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08236/citation.json"},"citation.ris":{"sha256":"23f180d5316c8c5a485a85f2604d658ab3919b89de5147b0d477e858adcd854c","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08236/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"fc2ff00e9fbd355aeec04a4f6ecc92814166d1d91b7bfd2b6fb2dbd75949aaa0","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08236/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5749dcc4e35ec71870952e4ac07e5e274742438515cef4a7bdf4c296966f2e75"
paper_digest_api_reader_plan_sha256: "a9d2ed47bd90811e583e68dcc86059b1885d60da878fd6c56cc0ea658fb5b05e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "17d58bbd0b299b75ab677ddfd2f2ce869db5abd5472f3ac45a9aad86d715be38"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6bc27ae825036bd9dd1321d34603906aae52d021bf2244a3824d455581baaf12"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "38ead685688f41cb9cfb7fbfb416627faa5dc6ee2de168c37f174ef8596c356d"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "72e9caf48f770c8da63c81947cb086fefe953006ae75980c512b8635075576d3"
paper_digest_api_reader_resource_count: 6
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把音符看成点：拉威尔小步舞曲中的 HAYDN 主题如何被几何变换找到

> 英文题目：*[Geometric Representations for Transformed Pattern Matching in Music](https://arxiv.org/abs/2610.08236v1)*

> 标签：#音乐检索 | #音乐分析 | #信号处理 | #形式化分析
>
> 评分：**5.0/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- David Meredith：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

本文输入是未标注声部的复调符号乐谱，输出是查询音型经移调、逆行、倒影、时值缩放和八度位移后的全部完整精确匹配，难点是键盘记谱声部与听觉声部常不一致，跨声部匹配会被按声部分割的序列表示漏掉。方法把每个音或连音线连接的同音延续看作一点，横轴取起音时间或音中时间（midtime，起音与止音的中点），纵轴取半音音高（钢琴键对应的整数音高）、形态音高（只由谱面位置、谱号和调号决定的整数音高）、色度（半音音高除以12的余数）或形态余数（形态音高除以7的余数），构成8种点集表示。再把乐理变换写成沿时间轴缩放、平移、可选对横轴或纵轴反射的三类变换族，缩放因子为0时把旋律压成同时发声的和弦，纵轴取余时允许八度位移，并为候选出现构建模式间变换图（顶点是出现，边表示存在某类变换把一点集完整精确映射到另一点集），按表读出等价类。与半音音高加起音时间相比，音中时间让精确逆行只对应一次时间反射，形态与余数表示容忍记谱等音与八度变化，这是区别于已有序列匹配的关键。在拉威尔作品的形态音高中音表示加第一类变换下，出现1、6、14、16、18、19与新增出现B构成7个一组的等价类，而起音表示下只有部分等价成立，说明表示选择决定能否刻画逆行与倒影逆行。结论只适用于有音高名、起音与时值的符号编码和完整精确匹配，对部分匹配、节奏非均匀扩大与和弦式引用是否算主题出现尚未验证。原文未提供可核对的关键定量结果，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/chromamorph/omnisia/releases/tag/GAMABookChapter1-20261001> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.oracle.com/java/technologies/downloads/> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.eclipse.org/downl> — 链接不可用（HTTP 404）

- 第三方资源：<https://lilypond.org/> — 链接可访问（HTTP 200）

- 第三方资源：<https://musescore.org/en> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.verovio.org/index.xhtml> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的输入是什么，为什么声部不可靠

论文处理的是无声部分配信息的复调符号乐谱。输入是查询片段与数据集各自的音符集合，每个音至少有开始时刻与音高信息，部分表示还需要时值。目标是在数据集中找出查询片段经移调、倒影、逆行、逆行倒影、时值缩放或压成和弦等变换后的出现。输出是哪些音属于哪一次出现，以及它们之间满足哪种几何变换。难点在于键盘音乐的记谱声部常常含混。

谱面用符干方向、梁和连线暗示声部，但同一时刻的和弦可能分给左右手，不同声部的音甚至会被连线连起来。作者强调，如果检索算法先假定每首曲子只有一种正确声部划分，且每次出现都落在单一声部内，就会漏掉跨声部的出现。一个具体例子是结尾处的 HAYDN 主题出现，它同时使用了不同记谱声部的音，其中第二个 D4 的延续超过了最后 G4 的开始时刻。若要求声部内音符前后衔接不重叠，这个例子根本无法被纳入搜索。因此论文选择完全不依赖声部信息的点集表示。

读图说明：下面这张谱例展示开头 8 小节一种可能的四声部划分，颜色表示声部归属，可以直观看到和弦与单音混合的键盘写法。

> **看图路径：** 1. 看高音谱表红色音符构成的上方线条，注意和弦中不同符干方向的音；2. 看低音谱表粉色与绿色音符的延续，体会声部划分的主观性；3. 注意第 5 小节第一拍同时出现的蓝色与红色和弦

[![原论文 Figure 1：Bars 0 to 8 of Maurice Ravel’s Menuet sur le nom d’Haydn, showing one way of partitioning the…](https://arxiv.org/html/2610.08236v1/figures/RavelMenuetBars1-8-voiced.png)](https://arxiv.org/html/2610.08236v1/figures/RavelMenuetBars1-8-voiced.png)

*论文图 1。原论文 Figure 1:：“Bars 0 to 8 of Maurice Ravel’s Menuet sur le nom d’Haydn, showing one way of partitioning the notes into four “voices”, indicated by the colours of the noteheads.”。*

图中高音谱表红色线条是上方听觉流，蓝色和弦出现在下方，低音谱表另有两层进行。同一垂直时刻的音被染成不同颜色，说明划分依赖符干与演奏分工，而非声音本身。第 5 小节第一拍红蓝和弦共时却分属不同声部，正好说明只按声部切分再检索会把本属于同一主题的音拆开。

### 跨声部重叠的例子说明了什么

结尾小节的例子把上述困难推到极致。红色标出的 B-A-D-D-G 5 个主题音分布在不同符干方向上，且在时间上相互重叠。按记谱声部看，它们不属于同一条线；按发声时间看，它们也不是严格先后衔接。若检索前先做声部分离或要求同一声部内音符首尾相接，这个出现会被丢掉。

论文因此把每个独立发声单位看作一个点， tied 连线连起来的多个记谱音符只算一个具有单一起始与延续的音。这样跨声部与时间重叠不再是障碍，只要这些点在音高—时间平面上能通过允许的几何变换对齐，就判定为一次出现。

读图说明：下面是 52 到 54 小节的谱面，红色为被讨论的主题出现，注意重叠与跨声部现象。

> **看图路径：** 1. 看红色标出的五个主题音在高音谱表中的分布；2. 注意第二个 D4 的延续与最后一个 G4 开始时刻的重叠；3. 对照符干方向，确认这些红音分属不同记谱声部

[![原论文 Figure 3：Bars 52 to 54 of Maurice Ravel’s Menuet sur le nom d’Haydn, showing an occurrence of the HAYDN…](https://arxiv.org/html/2610.08236v1/figures/RavelMenuetBars52-54.png)](https://arxiv.org/html/2610.08236v1/figures/RavelMenuetBars52-54.png)

*论文图 3。原论文 Figure 3:：“Bars 52 to 54 of Maurice Ravel’s Menuet sur le nom d’Haydn, showing an occurrence of the HAYDN theme (in red) that includes notes that are from more than one notated “voice” and…”。*

图中红色 D 与红色 G 在时间上交叠，黑色符干与红色符头交错，说明记谱声部与主题归属是两回事。点集方法不读符干颜色，只读每个音的开始、延续与音高，因此能把这些红音作为一个整体来比较形状。

### HAYDN 主题的来源与 Soucy 列出的 28 次出现

拉威尔这首小步舞曲是为纪念海顿逝世一百周年而作。刊物编辑部给出的 HAYDN 主题是 B-A-D-D-G 5 个音，其中 H 按德语记谱对应 B 自然音，Y 按字母表循环对应到 D。原文指出，这个主题在谱面上写作一串四分音符且没有拍号，更像只规定音名顺序而不规定具体节奏。Soucy 的分析在这首曲子中找到 28 处与该主题有关的片段，其中 6 处是拉威尔在原版中明确标注的，分别位于第 0 到 2、16 到 20、19 到 21、25 到 26、42 到 44 和 52 到 53 小节。

颜色区分了类型：红色是顺序陈述，棕色是逆行，绿色是逆行倒影，蓝色是把主题各音同时叠成附加九和弦，淡紫色是把倒影主题叠成附加四和弦。论文提醒，这些和弦在拉威尔其他作品中也常见，是否都应算作主题出现值得怀疑；第 23 处和弦缺了一个应有的 G，只能算不完整出现；第 13 和 24 处各缺一个重复音，也应视为局部匹配。

读图说明：下面是 Soucy 分析的全曲谱面缩图，编号 1 到 28 标出每次出现的位置与颜色类型。

> **看图路径：** 1. 先区分红色旋律陈述、棕色逆行、绿色逆行倒影的标记；2. 再看蓝色同时发声的附加九和弦与淡紫色附加四和弦；3. 注意编号 1 到 28 在全曲中的位置跨度

[![原论文 Figure 5：Occurrences of the HAYDN theme in Maurice Ravel’s Menuet sur le nom d’Haydn, identified by Soucy,…](https://arxiv.org/html/2610.08236v1/figures/Ravel-Menuet-Soucy-analysis-cropped.png)](https://arxiv.org/html/2610.08236v1/figures/Ravel-Menuet-Soucy-analysis-cropped.png)

*论文图 5。原论文 Figure 5:：“Occurrences of the HAYDN theme in Maurice Ravel’s Menuet sur le nom d’Haydn, identified by Soucy, [10].”。*

从图中可以看到，旋律性陈述只占一部分，大量蓝色与淡紫色标记是垂直和弦。红色长线跨越多小节的第 15 处中间有很长的休止，说明判定一次出现包含哪些音本身就有主观性。论文后续的几何分析并不争论这些音乐学判断，而是问：在给定这些人工标定的出现集合下，哪些出现之间存在精确的几何变换关系。

### 判定问题如何形式化：点、变换与完全精确映射

论文把每一次主题出现看作点集中的子点集。判定问题是：给定两个子点集 P1 和 P2，以及一个允许的变换类 F，是否存在 F 中的变换把 P1 的每个点一一映射到 P2 的点上，且不多不少。若存在，则称 P1 可被完整精确映射到 P2。变换的基本构件是平移、沿时间轴缩放和对横轴或纵轴反射。移调对应音高方向平移，倒影对应对横轴反射，逆行对应对纵轴反射即时间乘以负一，时值伸缩对应时间轴缩放，压成和弦对应时间缩放因子为零。

论文引入变换类这个概念来打包允许的操作，例如 F2STR 允许时间轴任意实数缩放加平移再加可选横轴反射；F2STRmod12 与 F2STRmod7 在此基础上把音高平移与反射改为按 12 或 7 取余计算。判定结果用顶点为出现、边为存在变换的变换图记录，表格形式即邻接矩阵，格中标注具体变换参数。

### 八种音高—时间表示如何分工

8 种表示由两种时间选择乘以 4 种音高选择构成。时间取 onset 或 midtime，音高取 chromatic pitch、morphetic pitch、chroma 或 morph。chromatic pitch 是按半音计的实际高度，中央 C 为 39，音乐会 A 为 48；morphetic pitch 是按谱表台阶计的位置，中央 C 为 23，与升降号无关；chroma 是前者对 12 取余，morph 是后者对 7 取余。

组合后得到 CPO、CPM、MPO、MPM、CO、CM、MO、MM 8 种点集。CPO 与 MPO 用 onset，适合移调与倒影；CPM 与 MPM 用 midtime，适合逆行；CO、CM、MO、MM 把八度折叠，适合跨八度位移与压成和弦。每种表示中，一个同时发声的和弦若音高取余后相同则合并为一个点，因此和弦出现与旋律出现可以在同一平面上比较。

输入处理要求至少有 onset 与 chromatic pitch，需要 morphetic 信息时可从音名直接计算或用拼写算法估计，需要时值时则计算 midtime。

### 音高两种记法为何都要保留

只用实际高度会把音名拼写不同的逆行误判为不匹配。例如第 1 处与第 16、19 处之间，第一处首尾音程是大二度下行，后者对应位置是大二度上行中的小二度，半音距离不等。用谱表台阶看，它们都是相邻台阶的逆行，因此在 MPO 与 MPM 中成为精确映射。反过来，只用台阶会丢失半音细节。论文保留两种记法，让严格半音等价与音名等价分别在不同表示中判定。

**chromatic pitch × morphetic pitch：** chromatic pitch 记录音实际有多高，半音加一就加一，升降号异名同音高度相同；morphetic pitch 记录音符在谱表上的台阶位置，只随谱号和上下行台阶变化，与升降号无关。前者区分半音距离，后者区分音名拼写，二者搭配才能同时解释半音完全相同但音名不同的倒影与逆行。

这种分工的代价是表示数量翻倍，同一对出现可能在一种表示下等价而在另一种下不等价，需要按音乐问题选择表示，而不是默认一种表示通行。

### 时间取起点还是中点

逆行的对称中心是音的中间而非起点。原型的第一个音的结束对应逆行最后一个音的开始，若横轴记录起点，反射后会对不齐。改用持续时间中点后，逆行恰好是时间反射加平移。论文给出第 1 处到第 18 处的例子，在 CPM 中先把时间乘以负一再平移即可重合。但中点表示会拆散原来在起点表示下平移等价的组，例如 CPO 中 12、18、20 三者平移等价，到 CPM 中 18 不再与 12、20 平移等价。这说明时间选择不是精度高低之分，而是对称语义不同。

**onset time × midtime：** onset time 是音的开始时刻，midtime 是音持续时间正中间的时刻。用 onset 比较逆行会错位，因为原型的结尾对到逆行的开头；用 midtime 则首尾对称，逆行恰好对应时间轴反射加平移，但原来在 onset 下平移等价的片段在 midtime 下可能不再等价。

实际使用时，若查询包含逆行或逆行倒影，应在 midtime 表示中搜索；若只关心移调重复，onset 表示更稳定。需要时值信息是使用 midtime 的额外成本。

### 取余表示如何处理八度与和弦

当主题音被移到不同八度，或被压成同时发声的和弦，绝对高度表示无法对齐。chroma 把相差 12 半音的音视为同一点，morph 把相差 7 个台阶的音视为同一点。此时时间缩放为零的变换把横向展开的旋律压成同一时刻的垂直点，从而刻画旋律到和弦的映射。这类变换不可逆，旋律可映射到和弦，但和弦不能唯一映射回旋律，因此等价类是有向的。

**chroma × morph：** chroma 是 chromatic pitch 对 12 取余后的音级类别，忽略八度；morph 是 morphetic pitch 对 7 取余后的音名类别，忽略八度和具体高度。二者把八度位移折叠掉，专门用来刻画跨八度移位、重复加倍和压成和弦，代价是丢失了原来的绝对高度信息。

代价是取余表示会产生大量跨类型的边，需要结合绝对高度表示来排除偶然重合，不能单独作为出现与否的证据。

### 变换类与变换图如何记录判定

F2STR、F2STRmod12 与 F2STRmod7 3 个类共享先时间缩放、再平移、再可选横轴反射的结构，区别在于音高方向是否按 12 或 7 取余。变换记号如 T 表示平移，S 表示时间缩放，Rx 表示横轴反射，下标给出向量与因子。变换图把每次出现作为顶点，若存在类内变换实现完整精确映射则连边并标注参数。因为 F2STR 中变换可逆，读行与读列可得无向等价类；而含零缩放的取余类不可逆，只能按方向解读。

**transformation class × inter-pattern transformation graph：** transformation class 是允许使用的几何操作集合，如沿时间轴缩放、平移和对横轴反射；inter-pattern transformation graph 是以每个主题出现为顶点、若存在类内变换把一个出现完整精确映射到另一个出现则连边的图。变换类规定判定标准，变换图记录判定结果，读行或读列即可得到等价类。

**CPO × MPM：** CPO 用 chromatic pitch 加 onset，最直接保留半音高度和开始时间；MPM 用 morphetic pitch 加 midtime，同时保留音名台阶和对称中心。前者适合找严格移调平移，后者适合找需要音名倒影加时间逆行的关系，二者互补而不能互相代替。

论文用 8 张大表分别记录 8 种表示下的变换图，读者沿行即可复述任一次出现能变成哪些另一次出现。

### 本研究没有训练模型，计算过程是什么

本篇是表示与分析论文，没有训练神经网络，也没有学习权重。实际计算分为两步。第一步是编码：把乐谱转为点集，计算每音的 onset、midtime、chromatic pitch、morphetic pitch，进而得到 chroma 与 morph，tatums 为时间单位。第二步是搜索与验证：对人工标定的 31 个出现，在每种表示下检验是否存在指定变换类中的参数使点集完全重合，记录到变换图中。附录给出复现用的 Java 程序与数据文件名，变换图由并行算法生成为可直接输入的表格文件，点集图由 8 个脚本生成。未报告的部分是搜索算法的运行时间、内存占用与参数选择细节，论文只说明用了并行分治算法，没有给出复杂度实测。

### 评测对象、对照条件与新增的三处出现

评测对象是同一首曲子的同一套人工标注：Soucy 的 28 处加上作者补充的 A、B、C 三处。A 是 21 到 23 小节的不完整倒影，缺一个 D；B 是 32 到 34 小节的完整倒影，与第 19、20 处交织；C 是 52 到 54 小节跨声部且重叠的顺序陈述。对照条件是固定的：同一表示、同一变换类下比较形状是否完全重合，不比较听感相似度，也不评价和弦出现是否为作者有意引用。主题编号与小节位置只是对照信息，用于定位同一组音，不作为性能比较的公平条件。

读图说明：下面是 CPO 点集，横轴为以 tatums 计的 onset，本例为八分音符时长，纵轴为 chromatic pitch，彩色连线标出各次出现。

> **看图路径：** 1. 看横轴为时间、纵轴为 chromatic pitch 的散点整体轮廓；2. 看竖直排列的和弦点与横向展开的旋律线；3. 注意同一音同时属于两个主题时用不同大小和颜色重绘

[![原论文 Figure 8：A chromatic-pitch–onset (or CPO) representation of Ravel’s Menuet sur le nom d’Haydn.](https://arxiv.org/html/2610.08236v1/RAVEL-HAYDN-GROUND-TRUTH-CPO-labelled.png)](https://arxiv.org/html/2610.08236v1/RAVEL-HAYDN-GROUND-TRUTH-CPO-labelled.png)

*论文图 8。原论文 Figure 8:：“A chromatic-pitch–onset (or CPO) representation of Ravel’s Menuet sur le nom d’Haydn.”。*

图中竖直蓝线是和弦出现，横向红线是旋律出现，右下角 C 与 28 位置接近但形状不同。黑点是背景音，彩色点是被标定的主题音，重合点用大小区分。这张图适合先看平移等价，再体会为何逆行在此无法对齐。

### 绝对高度表示下哪些出现真正等价

CPO 用起音时刻作横轴，用半音音高作纵轴。半音音高表示实际发出的音有多高，升高一个半音数值加一，谱面升降号相同的音取同一数值。起音图的横轴以 tatums 计时，本例为八分音符时长。图上每个点对应一个独立音或一串连音构成的音，主题出现编号与小节位置标在旁边，用作对照出现位置。判定方法是看一个出现能否经平移完整落到另一个出现上，有完整映射就连边，否则留空。

| 条件 | 时间 | 音高 | 等价组示例 | 判定 | 未连边示例 | 限制 |
| --- | --- | --- | --- | --- | --- | --- |
| CPO+F2STR | onset | chromatic pitch | 1,6 | 平移 | 14,B 孤立 | 不识别逆行倒影 |
| CPO+F2STR | onset | chromatic pitch | 12,18,20 | 平移 | 11,13 孤立 | 不折叠八度 |
| CPO+F2STR | onset | chromatic pitch | 3,4,8,9 | 平移 | 15,22 孤立 | 不压成和弦 |
| CPO+F2STR | onset | chromatic pitch | 16,19 | 平移 | 23 不完整 | 缺音即失配 |

上表列出 CPO 下经平移能互相覆盖的出现。例如 12 到 18 平移 60 个 tatums、到 20 平移 84 个 tatums 且高度差负 7，形状完全重合。稍有半音偏差或涉及时间反射的出现就连不上边，14 与 B 在此完全孤立。11、13、15 等十二处在此既不能映射到他处也不能被映射到，说明只用绝对高度加起音时刻能覆盖的关系有限，需要换表示。

### 换成中点与台阶后逆行如何被找回

CPM 把横轴换成音的中点时刻，纵轴仍用半音音高表示实际发出的音有多高。MPM 与 MPO 把纵轴换成谱面台阶音高，台阶音高只看符头在谱表上的位置、谱号与移调，不计升降号。判定方法是看一个出现能否经时间反射、纵轴反射加平移完整落到另一个出现上。

| 条件 | 时间 | 音高 | 等价组 | 关键变换 | 新增关系 | 失去关系 |
| --- | --- | --- | --- | --- | --- | --- |
| CPM+F2STR | midtime | chromatic pitch | 1,6,18 | 时间反射加平移 | 找回 1 到 18 逆行 | 12,18,20 拆散 |
| CPM+F2STR | midtime | chromatic pitch | 16,19,B | 时间反射加横轴反射 | B 与 16,19 连通 | 14 仍孤立 |
| MPM+F2STR | midtime | morphetic pitch | 1,6,14,16,18,19,B | 双反射加平移 | 14 纳入大组 | 12,20 自成组 |
| MPO+F2STR | onset | morphetic pitch | 12,14,16,18,19,20 | 横轴反射加平移 | 音名倒影连通 | 逆行仍错位 |

中点表示让逆行能用明确参数写出，例如 1 到 18 经时间乘负一再平移 364 个 tatums 且高度差负 12。台阶表示把半音不等但台阶对称的 14、16、19、B 与 1 连起来，其中 1 到 14 需先纵轴反射再平移 316 个 tatums 再横轴反射。原来在起音下成立的 12、18、20 平移组在中点下分裂，说明选中点计时是为写出逆行而做的表示切换。11、13、15、22 等仍无边，提示需要取余表示。

### 取余表示找回了八度位移与和弦压缩

CO、CM 用 chroma 作纵轴，chroma 是半音音高对 12 取余后的类别。MO、MM 用 morph 作纵轴，morph 是 morphetic pitch 对 7 取余后的音名类别，原术语即 morph。纵轴取余后允许按 12 或 7 计算平移与反射，时间仍分起音与中点两种。起音图的横轴以 tatums 计时，本例为八分音符时长，中点图的横轴以 tatums 计时，本例为十六分音符时长。判定方法是看折叠八度后一个出现能否经反射和平移完整落到另一个出现上，时间缩放为零时可把旋律压成和弦。

| 条件 | 找回关系 | 示例参数 | 方向性 | 仍孤立 | 限制 |
| --- | --- | --- | --- | --- | --- |
| CO+F2STRmod12 | 1,11,22 连通 | 旋律压到和弦 2,7,25 | 单向不可逆 | 13,15,23,B | 丢失绝对高度 |
| CM+F2STRmod12 | 18 到 22 逆行 | 时间反射加平移 868 | 可逆部分 | 23 | 仅 chroma 对称 |
| MO+F2STRmod7 | B 到 22 倒影 | 平移反射组合 | 可逆部分 | 23 缺 G | 需音名信息 |

取余表示找回了 3 类此前无边的关系。18 到 22 的逆行在 CM 和 MM 中均成立，B 到 22 的倒影在 MO 和 MM 中均成立，22 到 14、16、19 的逆行倒影在 MM 中成立，且 MM 下除 23 外所有出现都能映射到和弦 3、4、8、9。零缩放边不可逆，例如 6 可映射到和弦 2 但反向不行，不能称为等价。23 因缺音在所有取余表示下仍基本孤立，说明缺音无法靠几何放宽来弥补。

下面单看 MM 表示里由 22 出发的 3 条逆行边，时间都经过反射，纵轴按 morph 取余处理。

| 起点出现 | 到达出现 | 时间变换 | 平移向量 | 纵轴处理 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 22 | 14 | 反射加纵轴反射 | ⟨820,5⟩ | morph 按 7 取余 | 逆行倒影可映射 |
| 22 | 16 | 时间反射 | ⟨844,0⟩ | morph 按 7 取余 | 逆行可映射 |
| 22 | 19 | 时间反射 | ⟨892,0⟩ | morph 按 7 取余 | 逆行可映射 |

这 3 条边在同时使用中点计时与 morph 取余时成立，换回起音计时或半音高度就不再完整对应。23 仍然没有这样的出边或入边，缺失的音无法通过反射和平移补足。

### 结论在什么条件下才成立

所有等价判断都依赖人工标定的出现边界。若第 15 处是否计入中间的过渡音与尾部重复音改变结论，变换图也要重算。节奏伸缩在 MPM 等表示中只在完全精确时才连边，第 13、15、24 处因内部比例不恒定而无法被判为严格扩大或缩小。附加九与附加四和弦是否算主题出现，论文明确持保留态度，并指出这类和弦在拉威尔其他作品中也常见。

8 种表示与 3 个变换类的组合只在这首曲子与这 31 个标注上得到验证，没有跨作品统计，也没有测量漏检率、误报率、运行延迟与人力标注成本，因此不能推广为通用检索器的性能承诺。来源校验方面，作者仓库链接在本次检查中属于第三方可用，Java 与 LilyPond 等链接可用，Eclipse 下载链接不可用，但这只是链接可达性，不影响技术结论。

### 复现第一步做什么，需要哪些文件

复现先准备 Java 运行环境与 Eclipse，再下载 OMNISIA 仓库的指定版本并导入全部项目，搜索嵌套项目。变换图运行 GAMABookChapter1IPTGs.java，输出直接可用的表格文件；8 种点集图运行对应 CPO、CPM、MPO、MPM、CO、CM、MO、MM 的 8 个脚本，输出散点图。输入数据是仓库内 OPND 编码的 Menuet 全曲与 HAYDN 标注文件。论文说明图中的编号是作者手工添加，脚本直出图没有编号。

复现时应先核对时间单位：起音图以 tatums 计时，本例为八分音符时长；中点图以 tatums 计时，MM 等中点图所示本例为十六分音符时长，不可混用。其他图的横纵轴与单位以各自图注为准，需逐图核对。

### 什么时候值得尝试，还缺哪项验证

当数据集是键盘改编、MIDI 演奏或声部分离不可靠的复调符号音乐，且查询可能跨声部、含倒影逆行或跨八度时，值得尝试点集加多表示的思路。第一步是把音转为带起点、时值、两种音高及其取余的点，再按是否需要逆行选择起点或中点表示。还需要补的验证是：在更多曲目上统计各表示的命中与误报，明确标注边界变化对结论的影响，并实测搜索耗时与索引成本。缺证据不等于方法有错，只是目前证据只支持在这首曲子与这套标注下，主题出现之间的几何关系可用这 8 种表示与 3 个变换类精确描述，不支持更宽的性能断言。

<details>
<summary>📎 论文与评分元数据</summary>

排名：后50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.08236v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
