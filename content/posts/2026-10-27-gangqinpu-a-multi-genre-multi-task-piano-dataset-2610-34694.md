---
title: "Gangqinpu: A Multi-Genre, Multi-Task Piano Dataset with Aligned Audio, MIDI, and Musical Scores"
date: 2026-10-27
draft: false
tags: [乐谱对齐, 数据集构建, 数据集, 音乐, 节拍跟踪]
categories: [论文速递]
description: "Gangqinpu 用自动转谱、对齐、表情过滤和流派标注把多风格钢琴音频、演奏 MIDI 与乐谱配成 18786 对，用节拍跟踪跨数据集提升与转谱和渲染主要在域内获益证明其补充价值，但跨域泛化仍不均匀且标注全为自动生成。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.34694"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把网上钢琴录音和乐谱配成对：Gangqinpu 数据集如何建成和验证"
paper_digest_original_title: "Gangqinpu: A Multi-Genre, Multi-Task Piano Dataset with Aligned Audio, MIDI, and Musical Scores"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.34694v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.34694v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.34694v1.pdf"
paper_digest_primary_task: "乐谱对齐"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.score-alignment","label":"乐谱对齐"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.beat-tracking","label":"节拍跟踪"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 8.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "Gangqinpu 用自动转谱、对齐、表情过滤和流派标注把多风格钢琴音频、演奏 MIDI 与乐谱配成 18786 对，用节拍跟踪跨数据集提升与转谱和渲染主要在域内获益证明其补充价值，但跨域泛化仍不均匀且标注全为自动生成。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wei Zeng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Anvay Mathur"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ye Wang"}]
paper_digest_abstract_sha256: "2dfebbe0826e805891d16e49cb12593ce20959875ba0894289dfc83744774cc7"
paper_digest_sidecars: {"citation.bib":{"sha256":"12014a83c1a4c6aaca574e201e7ee078e90b3345bee5969b7cdeb1acec01e1ca","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34694/citation.bib"},"citation.json":{"sha256":"22af8f3faea36ba00d09e6cd823d1e9c26bf0ff0582022bbae70dc4afb91c2b2","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34694/citation.json"},"citation.ris":{"sha256":"745c28ff0ec8a86d0d8ebada95a355a6971c463bc6d6776b30b8f32951bceff7","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34694/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"cbf3c18287190be796729cf3d680d1dc275b58ca79b4747aa171e2191d160261","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34694/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8eb36f4dabb051e2902bbc16ae5cea148bb7f0d673bfa0d48abed3770926f87e"
paper_digest_api_reader_plan_sha256: "4a95d4b2ca70e108864aecb6c3ee49aff58e3365f881b7221418e09b3ca20e34"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4755c67156ed602aa8fb85512fd80f5fbddd4504359a889ba198bb02e48e1eef"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "984709baadfc6b484805d3c5ebc8d1f5e2b63f61b4fc023426f7e0371846d26a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "934d986a2c5105f6b3ae3345a72f964fcaeb18b87ad7fb703031c416175992ba"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "76518d5464f5b7e0ffb896bdb3a8378dc701a82ce0a01a11b004c3cfc8f0b0e3"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把网上钢琴录音和乐谱配成对：Gangqinpu 数据集如何建成和验证

> 英文题目：*[Gangqinpu: A Multi-Genre, Multi-Task Piano Dataset with Aligned Audio, MIDI, and Musical Scores](https://arxiv.org/abs/2610.34694v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [乐谱对齐](/audio-paper-digest-blog/papers/?concept=task.score-alignment)；[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [节拍跟踪](/audio-paper-digest-blog/papers/?concept=task.beat-tracking)
- **研究方法**：[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Wei Zeng：机构信息未能在本次解析中与作者逐人可靠绑定
- Anvay Mathur：机构信息未能在本次解析中与作者逐人可靠绑定
- Ye Wang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

同一首钢琴曲的分析与建模需要在录音波形、记录实际触键时间与力度的演奏MIDI、写明音高与节奏的乐谱之间建立音符级对应，输入是网络收集的多风格音频与MusicXML乐谱，输出是对齐后的三元组及节拍标注，难点在于流行与爵士录音常无规范乐谱且音频来源混杂，人工对齐成本很高。构建时先用Transkun v2把音频转写为演奏MIDI并清洗，再把展开重复段后的乐谱转为乐谱MIDI，接着用DualDTWNoteMatcher建立两者音符对应并经插值修正，对齐结果进一步导出拍点与下拍标注。多层感知机分类器用八个乐谱感知的时值与力度特征剔除机械感强的非表情演奏，Qwen-Flash与LAION-CLAP两阶段标注流派，相似乐谱分组把相关改编与ASAP重叠样本固定在同一划分以减少泄漏。与以西方古典为主的已有对齐数据不同，该数据包含流行、古典、爵士、民谣或传统、摇滚与布鲁斯共18786对演奏与1007.1小时来源音频。节拍跟踪中Beat This!在Gangqinpu测试集上拍点F1从单独用ASAP训练时的60.18%升至联合训练时的78.16%。演奏MIDI到乐谱转写与表情演奏渲染主要带来域内增益，表情演奏渲染在ASAP上误差略有上升，自动标注尚未经过全面人工审核。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/wei-zeng98/gangqinpu> — 链接可访问（HTTP 200）

- 数据相关资源：<https://github.com/wei-zeng98/gangqinpu> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 钢琴的三种表示各记录什么信息

1 篇钢琴作品的演奏可以用 3 种互补形式记录。音频记录实际声音，演奏 MIDI 记录每个音符的实际按下与松开时间、力度与踏板动作，乐谱记录作曲层面的音高、声部、拍号与小节结构。初学者容易把后两者混淆，关键区别是演奏 MIDI 带有人为的时间提前拖后与轻重变化，而乐谱给出的是量化后的标准位置。

论文要解决的是同时对齐这 3 种模态的数据稀缺问题。已有同时对齐三者的 ASAP 只有 1067 场演奏，其中仅 519 场有音频，且基本是西方古典曲目。流行与爵士常只有主音谱、非正式改编甚至即兴，没有现成可对照的完整乐谱，因此需要从录音出发做转录再与乐谱配对。

下面这张任务关系图先把输入输出讲清楚，读图时注意箭头方向代表任务的数据流向，颜色区分 3 类任务。

> **看图路径：** 1. 先找到音频、演奏 MIDI、乐谱三个椭圆节点的位置；2. 再沿红色转录箭头与蓝色渲染箭头看输入输出方向；3. 注意绿色节拍跟踪箭头指向拍点时刻而非音符

[![原论文 Figure 1：Musical representations and associated tasks.](https://arxiv.org/html/2610.34694v1/intro.svg)](https://arxiv.org/html/2610.34694v1/intro.svg)

*论文图 1。原论文 Figure 1:：“Musical representations and associated tasks. Arrows indicate task input–output relationships; colors distinguish transcription (red), rendering (blue), and beat tracking (green).”。*

图中音频、演奏 MIDI 与乐谱是 3 个节点。红色箭头是转录类，包括音频到演奏 MIDI、音频到乐谱、演奏 MIDI 到乐谱；蓝色箭头是表情演奏渲染，即从乐谱预测演奏的时间与力度；绿色箭头是节拍跟踪，输出拍点与小节首拍时刻。这张图帮助理解后文为什么同一套对齐结果能同时服务节拍、转谱与渲染 3 个实验。

### 已有钢琴数据集各缺哪一块

按原文比较，已有数据集在模态与曲风上各有缺口。MAESTRO 用雅马哈自动钢琴采集，音频与 MIDI 同步质量高，但没有乐谱且基本是古典。ASAP 有乐谱与拍点乃至音符级扩展，但规模约 94.5 小时且古典为主。ATEPP 与 Aria-MIDI 用自动转录扩大规模，分别约 1000 小时与百万级 MIDI，但前者乐谱只覆盖约一半音轨，后者缺乏乐谱对照。

ACPAS 混合真实与合成音频并带拍点标注，PianoCoRe 把多个语料整合成音符对齐的 MIDI 集合但无音频，POP909 有 909 首流行 MIDI 改编与拍点和弦调性标注，但没有与独立记谱配对的钢琴录音。也就是说，要么缺音频，要么缺乐谱，要么缺音符级对齐，要么局限于古典。

Gangqinpu 的定位是补多风格下音频、转录演奏 MIDI 与乐谱三者对齐这一块。它提供音频链接与下载脚本、转录 MIDI、乐谱与音符级对齐及拍点标注，曲风覆盖流行、古典、爵士、民谣与传统、摇滚与布鲁斯。论文不声称转录无误差，明确标注来自网络音频与自动转录，存在转录误差与来源不确定性。

### 论文要做的配对有多难

输入是网上收集的钢琴音频与对应乐谱，加标题与贡献者等文本元数据。目标是输出每对样本的演奏 MIDI、音符级谱演对应、拍点与下拍时刻及其置信度、表情与否标签、流派标签，并划分不泄漏的训练验证测试集。必须保留的信息是实际演奏的时间与力度偏差，不能把机械合成直接当演奏。

困难有四处。第一，音频时长与乐谱长度不一，还有非钢琴编制需要剔除。第二，转录误差与演奏改编会导致音符对不上。第三，网上很多是照谱直接合成的死板渲染，听感机械，对学习表情偏差没有监督价值。第四，同曲不同改编与移调版本若分散到训练与测试，会虚增分数，需要跨 Gangqinpu 与 ASAP 联合分组。

论文的输出条件在后文实验中固定使用，节拍、转谱与渲染都只取各自所需输入与标注的子集，并在两个数据集的测试集上分别报告，因此结论的成立范围与划分绑定。

### 从网上音频乐谱到可用数据集的全流程

整体流程分六步。先按时长与乐谱条件过滤，再用 Transkun v2 把音频转成演奏 MIDI 并清理，同时把 MusicXML 乐谱展开重复段后转成乐谱 MIDI；然后用 DualDTWNoteMatcher 做音符级对应，再用 RAScoP 精修对齐与 MIDI；接着派生拍点标注与元数据并做对齐误差与表情过滤；再做流派标注；最后做乐谱相似分组与音频去重并与 ASAP 联合切分。

读这张流水线图时抓住样本形态的变化：音频加乐谱进入，转录后变成两个 MIDI 序列，对齐后变成对应关系，精修后补上插值音符并标记，标注后变成带拍点时间与置信度的三元组，过滤与分组后才进入最终数据集。

> **看图路径：** 1. 从顶部虚框的钢琴音频与纸质乐谱向下看主流程；2. 注意步骤一到步骤四如何得到演奏 MIDI 与乐谱 MIDI 再对齐；3. 看过滤器 1 到 4 在流程中出现的位置与作用

[![原论文 Figure 2：Overview of the Gangqinpu dataset construction pipeline.](https://arxiv.org/html/2610.34694v1/overall_pipeline.svg)](https://arxiv.org/html/2610.34694v1/overall_pipeline.svg)

*论文图 2。原论文 Figure 2:：“Overview of the Gangqinpu dataset construction pipeline.”。*

图中顶部虚框是网上配对来源，步骤一完成两种 MIDI 的生成，步骤二与步骤三分别是初始音符对齐与精修，步骤四生成拍点并执行过滤器 3 与过滤器 4，步骤五与步骤六分别是流派标注与联合切分。过滤器 1 要求音频至少 60 秒，过滤器 2 要求至少 32 小节且仅钢琴声部，过滤器 3 要求插入率与删除率各不超过 10%，过滤器 4 要求表情概率至少 0.5。这 4 个阈值是保留样本的硬条件。

### 音频如何变成可对齐的两个 MIDI 序列

转录选用 Transkun v2，理由是它用基于 Transformer 的区间打分加非自回归半马尔可夫条件随机场解码，能结构化预测音符与踏板区间，且不靠踏板延长来决定音符结束，使音符结束时间与踏板活动分开表示。论文没有重新训练转录模型，而是直接调用该模型再做清理：合并演奏音轨为单音符序列，去掉重复与过短音符，截断同音高重叠音符。

乐谱侧用 SyMuPe 与 Partitura 工具处理 MusicXML，展开重复与不同结尾，生成乐谱 MIDI 同时保留到谱面位置与节拍信息的链接。这样两边都是音符序列，但时间基准不同，一边是秒为单位的演奏时间，一边是四分音符为单位的谱面时间，等待下一步建立对应。

**演奏 MIDI × 乐谱 MIDI：** 演奏 MIDI 指从音频转录得到的带实际触键时间与力度的音符序列，乐谱 MIDI 指从 MusicXML 展开重复段后得到的代表谱面音高与节拍位置的序列；前者保留表情偏差，后者提供标准参照，两者对齐后才能把谱面拍点映射到演奏时间并派生节拍标注。

### 音符对应与拍点时间如何算出并标上可信度

初始对应使用 Parangonar 中的 DualDTWNoteMatcher，它把音高序列匹配与按音高的起始时间对齐分开做，论文引用其在 4 个钢琴数据集上 99.0% 对 98.5% 的组合匹配分数作为选用依据。之后用 RAScoP 做对齐与 MIDI 精修，精修中补上的演奏音符明确标记为插值，以区别于转录实际观测到的事件。

为判断谱演一致性，论文从精修前的原始对齐计算插入率与删除率，分别按演奏音符数与乐谱音符数归一化。任一超过 10% 即剔除，防止后续插值掩盖实质不匹配。这一步是过滤器 3。

拍点派生先从展开后的乐谱取节拍网格，保留拍号变化，6/8、9/8、12/8 等复拍子用附点四分音符作一拍。再经精修对应把谱面拍点传到演奏时间：取谱面拍点正负 0.05 四分音符内的音符，用其对应演奏起始时间的中位数作拍点时间；无直接支撑的拍点在相邻锚点间线性内插，边界处用局部速度估计外推，下拍与拍号调号变化映射到同一时间线。

置信度是启发式而非校准概率。有观测音符支撑给 0.95，全为插值给 0.40；在锚点间内插取 0.75 乘以较低锚点置信度，外推给 0.25；若拍点附近有插值乐谱音符再乘 0.35。低于 0.50 记低置信，低于 0.35 记模糊，后续训练与评测可屏蔽这些区段。

**插入率 × 删除率：** 插入率按演奏音符数归一化的多余音符比例，删除率按乐谱音符数归一化的缺失音符比例；两者都从精修前的原始对齐计算，大于 10% 即丢弃，避免后续插值掩盖录音与乐谱根本对不上的情况。

**节拍 × 下拍：** 节拍指乐谱网格中的每个拍点时刻，下拍指每小节第一拍兼带拍号调号变化的位置；论文先取谱面拍点附近正负 0.05 四分音符内的已观测音符中位时间作为拍点时间，无支撑再内插或外推，并给启发式置信度以屏蔽不可靠区段。

### 怎样自动去掉照谱合成的死板演奏

网上集合常混入照谱直接合成的演奏，时间僵硬、力度几乎无变化。论文按听感的时间与力度表现区分表情与非表情，不论是真人录音还是数字编辑，只要有足够表情变化都可保留，因为渲染任务要学的是相对乐谱的有音乐意义的偏离。

分类器输入是一段演奏 MIDI 加对应乐谱。标注子集经 2 位专家独立听辨，不一致处反复听辨讨论至共识，得到 779 个表情样本与 370 个非表情样本。特征只从原始对齐中的已观测对应提取，避开精修插值。做法是把同谱面起始时间的音符编组并取中位演奏起始时间，在正负 4 四分音符窗口内拟合谱面到演奏时间的局部线性映射，窗口内不足 6 个不同起始位置时加宽，残差得到 timing variability、correlation 与 entropy 三项；另有和弦内异步、力度标准差、不同力度数、上谱表与其他谱表平均力度差、和弦内最高音与其余音的力度差，共 8 个手工特征。

模型是两层隐藏层 32 与 16 单元加 ReLU 的多层感知机，输出二分类概率，用 Adam 训练，L2 正则系数为 0.001 并早停。训练另加 982 个可用 ASAP 演奏作正例与合成扰动谱面渲染作负例，各来源按 75 比 25 切分训练与保留集，合成变体按底层乐谱分组，训练集内过采样平衡类别，预测表情概率至少 0.5 才保留。这是过滤器 4。

### 流派标签与防泄漏切分如何做

流派标注分 2 个阶段。先用 Qwen-Flash 读标题与贡献者等文本元数据分类，未定者再用 LAION-CLAP 音乐检查点比较音频嵌入与流派文本描述，仍不达置信度记未知。标签归一为流行、古典、爵士、民谣与传统、摇滚、布鲁斯，另加其他与未知。

防泄漏先检索候选：用上下声部移调不变音程模式找相似，再经单调对齐与多声音符匹配验证。元数据保留 2 级分组，乐谱组用于报告乐谱组数，划分组额外连接可能相关的改编与片段并跨 Gangqinpu 与 ASAP 连边，仅用于划分。每个划分组整体放入一个分区，同谱多演奏不拆散，还检查精确音频重复。

与 ASAP 的联合分组使用 nASAP v2.1.1，含前人用作测试的 ASAP 曲目组固定放入测试集，其余分组训练验证测试分配。结果是 Gangqinpu 训练验证测试为 17773、499、514，nASAP 为 955、50、61。后文三项下游任务都用这套固定划分，只取各自所需输入的子集并在两测试集分别报告。

**乐谱组 × 划分组：** 乐谱组指经移调不变音程模式检索加单调对齐验证后判为相同或高度相似乐谱的集合，用于报告乐谱多样性，划分组则在此基础上再合并可能相关的改编与片段并跨 Gangqinpu 与 ASAP 连边，仅用于切分训练验证测试，保证同一组不分散到不同划分以减少泄漏。

**演奏 MIDI 到乐谱转录 × 表情演奏渲染：** 演奏 MIDI 到乐谱转录指从带表情偏差的演奏音符恢复拍点、手部、调号拍号与量化时值等谱面属性，表情演奏渲染则反向从乐谱预测力度、音符间间隔与时值；前者考验对齐与量化能力，后者考验对乐谱偏离的建模，两者方向相反但都依赖同一套音符级对应关系。

### 分类器训练了什么以及没有训练什么

本节说明训练对象，避免误以为全文训练了转录或节拍模型。论文没有训练 Transkun v2、DualDTWNoteMatcher、Qwen-Flash 与 LAION-CLAP，这些是直接调用或作为标注与对齐工具；下游的 Beat This!、PM2S 与 S2A 是拿来验证数据价值的基线，按是否加入 Gangqinpu 做对照训练，但其内部优化细节不是本文贡献。

唯一为建库训练的是表情二分类多层感知机。输入是标准化后的 8 维特征向量，参数是两层权重与偏置，监督来自专家听辨标签、ASAP 正例与合成负例，损失为二分类概率输出对应的训练目标加 L2 正则，早停防止过拟合。75 比 25 的切分在每个来源内独立做，合成按谱分组防止同谱泄漏。

该分类器的评估只支持作为本收集流程的过滤部件，不证明换转录管线或换数据源仍有效。论文明确其 held-out 表现见后文表格，且与 SyMuPe 质量分类器和 NOMML 的比较只是考察谁更适合本过滤任务，不是评价那些模型的通用性能。

### 数据集规模与分布在什么条件下统计

统计对象是经四道过滤与分组后的保留样本，共 18786 对演奏，源音频总计 1007.1 小时，自动识别出 15645 个乐谱组，其中 2445 组含多演奏。乐谱组是经相似分析的操作性多样性度量，不是人工核验的不同作品数，含移调变体。平均音频时长 3.22 分钟，中位 3.04 分钟，每演奏中位音符 956 个且含插值音符。

下表只整理论文摘要与正文连续句直接报告的规模数字，用于核对量级，完整分布见后图。表前说明比较问题：该表回答保留样本有多少对与多少小时，不涉及质量判断。

| 项目 | 规模 |
| --- | --- |
| 配对演奏数 | 18786 对 |
| 源音频总时长 | 1007.1 小时 |

该规模远大于 ASAP 的 1067 场与 94.5 小时，且曲风不只古典，这是后文能做跨风格节拍与转谱对照的前提。但时长是源音频时长，转录与对齐误差仍在，且音频以外部链接与下载脚本提供，复现需自行下载。

读分布图时注意横纵轴刻度与中位线含义，图 a 是占比，图 b 与图 c 横轴对数，图 d 纵轴对数。

> **看图路径：** 1. 先看图 a 各流派条形占比，确认流行与古典为主；2. 再看图 b 与图 c 横轴对数刻度下的中位虚线位置；3. 看图 d 纵轴对数刻度下每组样本数的分布高度

[![原论文 Figure 3：Distributions of (a) automatically assigned genre labels, (b) audio duration, (c) refined…](https://arxiv.org/html/2610.34694v1/gangqinpu_distributions.svg)](https://arxiv.org/html/2610.34694v1/gangqinpu_distributions.svg)

*论文图 3。原论文 Figure 3:：“Distributions of (a) automatically assigned genre labels, (b) audio duration, (c) refined performance MIDI note counts, including interpolated notes, and (d) performances per…”。*

图 a 可见流行占 44.5%，古典 16.3%，未知 24.0%，其余为民谣与传统 4.0%、爵士 1.7%、摇滚 0.4%、布鲁斯 0.3% 与其他 8.8%，说明流行与古典主导但确有多风格。图 b 与图 c 中位线分别在 3.04 分钟与 956 个音符，分布呈长尾。图 d 显示 13200 个组仅一场，2081 组两场，230 组三场，66 组四场，60 组五到九场，8 组十场以上，提供同谱多演奏的对照条件，但多数仍是单演奏。

### 表情过滤器在保留集上表现如何

测量对象是分类器能否复现专家听辨的表情与非表情判断。比较方法包括本文八特征多层感知机、SyMuPe 四分类质量模型映射为二分类，以及 GigaMIDI 的中位度量层 NOMML 取阈值 12。条件一致处是同一批保留样本：专家标注保留集 195 表情与 93 非表情，加 ASAP 人类演奏 246 与合成噪声系列各 120。指标是每子集单类检出率，以及仅在混合两类的三块真实数据共 534 样本上的池化准确率与宏平均 F1，方向都是越高越好。

下表整理连续句直接报告的池化结果，回答过滤器在自有保留集上的绝对水平。表前公平条件是同一 288 专家保留样本，指标方向为越高越好。

| 条件 | 准确率 | 宏平均 F1 |
| --- | --- | --- |
| 八特征多层感知机保留集 | 98.61% | 98.41% |

该行对应 193/195 表情正确与 91/93 非表情正确，每类各错 2 个，支持其作为本管线过滤部件。但跨条件有限制：合成起始噪声增大时本文模型检出率从 100.0% 降至 46 毫秒 98.3%、60 毫秒 83.3%、80 毫秒 30.8%，而 SyMuPe 把 76/93 非表情判为高质量，NOMML 对所有样本都给 12 层而全判表情，说明后两者不适合本任务的谱同步表情检测。未胜出项是强噪声合成的识别，此时本文模型也会大量漏检，不能推广到其他转录管线。

### 加入新数据后节拍跟踪变化多大

测量对象是用 Beat This!从音频估计拍点与下拍时刻。比较方法是只用 ASAP 训练 versus ASAP 加 Gangqinpu 训练，在 ASAP 测试集 26 样本与 Gangqinpu 测试集 514 样本上分别评测。低置信与时间不一致区及标注范围外在训练与评测时屏蔽，预测与参考落在屏蔽区都不计入。指标为 F1、CMLt 与 AMLt，都是越高越好，CMLt 与 AMLt 反映节拍序列跟踪的连续正确程度。

下表聚焦论文连续句报告的 Gangqinpu 测试集 F1 绝对值，回答新数据在域内与跨域的增益。表前公平条件是同一固定联合划分与同一屏蔽规则，原表说明所有指标均为百分比，指标方向越高越好。

| 测试集与目标 | 仅 ASAP 训练 F1 | ASAP 加 Gangqinpu 训练 F1 |
| --- | --- | --- |
| Gangqinpu 拍点 | 60.18 | 78.16 |
| Gangqinpu 下拍 | 39.60 | 63.66 |

Gangqinpu 上拍点 F1 从 60.18 到 78.16，下拍 F1 从 39.60 到 63.66，ASAP 上拍点与下拍 F1 分别增加 4.30 和 4.31 个百分点，且 CMLt 与 AMLt 同步提高。这是三项任务中唯一在两测试集全部指标都提升的，支持节奏监督有跨数据集价值。但需注意 ASAP 测试仅 26 样本，增益的稳定性仍需更大样本验证，且提升依赖置信度屏蔽，不屏蔽时数字会不同。

### 转谱与渲染的获益是否只留在域内

转谱用 PM2S 从演奏 MIDI 预测谱面属性，包括拍点与下拍标签、手部、调号拍号、量化起始与时值，指标分别为正类 F1、宏平均 F1 与支持度加权 F1，越高越好。渲染用改编 S2A 从乐谱预测力度、音符间间隔与时值，指标为平均绝对误差，越低越好，其中时间误差单位为毫秒，力度误差单位为 MIDI 力度单位，衡量与参考演奏的一致而非听感好坏。

转谱在 Gangqinpu 测试集多数目标提升，拍点与下拍 F1 分别提高 14.02 与 20.95 个百分点，起始与时值加权 F1 提高 18.87 与 19.32 点，手部也提升，但拍号宏平均 F1 下降；迁移到 ASAP 则喜忧参半，拍点、下拍与时值提升，手部、调号拍号与起始量化下降。也就是说，转谱获益主要在域内，不均匀跨属性与跨数据集。

下表整理渲染在 Gangqinpu 测试集的平均绝对误差绝对值，回答加入新数据后域内拟合误差的变化。表前公平条件是同一固定划分与同一改编 S2A，指标方向越低越好。

| 训练数据 | 力度误差 | 音符间间隔误差 | 时值误差 |
| --- | --- | --- | --- |
| ASAP 加 Gangqinpu 训练 | 13.05 | 54.66 ms | 269.04 ms |

在 Gangqinpu 上三项误差都下降，力度、间隔与时值分别减少约 4.45、23.85 毫秒与 40.43 毫秒；但在 ASAP 上三项都小幅上升，力度从 16.40 到 16.62，间隔从 66.40 毫秒到 68.96 毫秒，时值从 999.66 毫秒到 1058.28 毫秒。未胜出项正是 ASAP 侧的渲染退化，说明渲染获益不跨域，挑战来自音乐与数据分布差异。复现时不要把域内误差下降理解为听感必然变好，也不要把相对变化误读为百分点以外的含义。

### 阈值与标注选择对结果有什么影响

论文没有传统消融表，但过滤与标注阈值本身构成条件分析。插入率与删除率各 10% 的硬阈值决定哪些配对进入数据集，表情概率 0.5 决定哪些保留为表情演奏，拍点置信度 0.50 与 0.35 决定低置信与模糊区及训练评测屏蔽。这些阈值改变会同时改变数据量与噪声水平，后文数字都绑定这套取值。

分类器对照可视为过滤方案的替代比较。SyMuPe 为通用质量分诊设计，把除高质量外的 3 类都当非表情，导致非表情检出仅 18.3%；NOMML 固定输出 12 层，在本保留集上池化准确率 82.58% 只是类别分布 441 表情对 93 非表情的结果，宏平均 F1 仅 45.23%。这说明类别层面的通用质量不等于谱同步表情，不能直接替换。

合成噪声系列显示本文特征对微小抖动的边界：46 毫秒高斯噪声仍 98.3% 判非表情，80 毫秒反而降至 30.8%，即大随机抖动被部分当成表情变化。这提示基于局部残差标准差、相关与熵的特征区分的是结构化表情与小噪声，而非任意大扰动，实际部署需先确认转录噪声水平。

### 这些结论在什么条件下才成立

第一，所有对齐与拍点标注全自动，未经人工逐音符审计，未来工作才计划人工抽查。因此音符对应与拍点时间的正确性依赖转录与对齐质量，长尾中的长录音与大谱面更易累积误差。

第二，音频来源为网上收集且以链接加下载脚本提供，录制或合成来源未经核验，转录误差客观存在。分类器评估不支持推广到其他转录管线或数据源，跨管线需重标定。

第三，下游结论绑定固定联合划分与可用子集。节拍 ASAP 测试仅 26 样本，转谱手部分配 ASAP 测试 59 样本其余 61 样本，Gangqinpu 测试 514 样本。跨数据集增益仅在节拍任务全面成立，转谱与渲染主要在域内成立，ASAP 侧转谱多项下降、渲染三项均小幅上升，不能推广为全面提升。

第四，流派标签自动生成，流行与古典主导且未知占 24.0%，乐谱组是操作性相似度量而非核验作品数。把组数当作品数或把自动流派当人工标签都会夸大结论。

### 要复现第一步做什么与需要什么资源

复现先分清三件事。代码与数据集作者资源当前可用，地址为论文给出的仓库链接，可下载流水线代码与数据索引；权重可下载指 Transkun v2、Qwen-Flash 与 LAION-CLAP 等外部模型需另行获取；系统可运行指端到端需要转录、Parangonar、RAScoP、SyMuPe 与 Partitura 等依赖及音频下载带宽，不等于解压即跑。

第一步是按仓库脚本取回音频并跑过滤器 1 与过滤器 2，确认 60 秒与 32 小节纯钢琴条件，再跑 Transkun v2 转录与 MusicXML 到乐谱 MIDI 的转换，保留谱面位置链接。接着跑 DualDTWNoteMatcher 与 RAScoP，计算原始对齐的插入率与删除率并执行 10% 剔除，再按正负 0.05 四分音符规则与置信度公式生成拍点。

关键超参数与信息条件要保留：局部映射窗口正负 4 四分音符且至少 6 个不同起始位置，拍点中位时间规则，置信度 0.95、0.40、0.75 乘子、0.25 外推与 0.35 惩罚，表情概率 0.5，L2 系数 0.001。缺口是论文未报告转录与下游基线的完整训练预算与硬件，复现成本需自行记录。

### 什么时候值得尝试与还需补哪项验证

当任务需要多风格钢琴的谱演对应或节奏监督，且能接受自动标注噪声时值得尝试。节拍跟踪最可能跨数据集获益，转谱中拍点、下拍与时值在域内获益较稳，渲染适合在同分布内学习力度与时间偏离。若目标是古典小样本上的通用提升，应先在自有划分上验证，因为转谱与渲染迁移到 ASAP 并不一致。

使用时把低置信拍点屏蔽打开，把乐谱组与划分组分开理解：前者看多样性，后者做切分。不要把池化准确率直接当两类均衡能力，要同时看宏平均 F1；不要把毫秒误差下降等同于听感评价，论文明确渲染指标只是与参考演奏的一致度。

还需补的验证是人工抽查对齐与拍点，尤其长尾长录音；换转录模型后重测表情过滤器；在更大 ASAP 节拍测试与人工听感评价上重测渲染。补上这些，才能判断增益来自音乐多样性还是单纯数据量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.34694v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
