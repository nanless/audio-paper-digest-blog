---
title: "Unifying Score and Performance for Fine-Grained Music Understanding in Audio-Language Models"
date: 2026-09-11
draft: false
tags: [音乐理解, 数据集构建, 音乐, 数据集]
categories: [论文速递]
description: "针对音频语言模型只靠粗粒度标题难以刻画力度、 timing 与声部进行的问题，该研究用对齐后的谱面加演奏 MIDI 构造文本表示 MuNo-SP 并自动生成长时间听觉分析与问答，在 MuSP-Bench 联合理解与人工偏好上报告了高于 ABC 与 MIDI 文本基线的准确率，代价是表示更长且仍限于古典钢琴与 MIDI 可表达的属性。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.10351"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把谱面与演奏对齐成文本：MuNo-SP 如何让模型听见弹了什么与怎么弹"
paper_digest_original_title: "Unifying Score and Performance for Fine-Grained Music Understanding in Audio-Language Models"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.10351"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.10351.pdf"
paper_digest_primary_task: "音乐理解"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.music-understanding","label":"音乐理解"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对音频语言模型只靠粗粒度标题难以刻画力度、 timing 与声部进行的问题，该研究用对齐后的谱面加演奏 MIDI 构造文本表示 MuNo-SP 并自动生成长时间听觉分析与问答，在 MuSP-Bench 联合理解与人工偏好上报告了高于 ABC 与 MIDI 文本基线的准确率，代价是表示更长且仍限于古典钢琴与 MIDI 可表达的属性。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Milan Liessens Dujardin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Song-Ze Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kevin Miao"}]
paper_digest_abstract_sha256: "2732428855cdd7abdf522b8fdf588312a542df2ff546f96a45b0a43a79050ba9"
paper_digest_sidecars: {"citation.bib":{"sha256":"e64abba8dda5aeac161deed334d0acc8eeb70afbb38309790179ebbb05272b84","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-10351/citation.bib"},"citation.json":{"sha256":"de5357aabcd9ad70b4f525f7041d65822766d15a890e3cfe9adcf93f0ca2acb8","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-10351/citation.json"},"citation.ris":{"sha256":"f443680784746a91c77c65729d8f0e2867d16083f327af42657c0485ef941658","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-10351/citation.ris"},"rethink-context.json":{"sha256":"3a77c12cec6383518e172f4b6f59720b51d432a912ee231cb7bac706c3f30cab","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-10351/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9e0c1b20e703983fd5cc0f4e2d39bfdc11dce4c6fa6ea190da9a9a647ce645a6"
paper_digest_api_reader_plan_sha256: "86d9fcee141d9d2cc36b2f063986ac147bf1ca03e5d431664a80393624f6525f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "156f6a575630cc407d50c6028ee99297ccd65ac51485380de227874b60a4cbd2"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "bf473da4568dea052d83400ff52a2998f05f26a3ff7d2b566fa1156fa727db26"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b52d82df2d54a37b5a362bce02521958057a649b2e9ab13b67b3b81975c5326f"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "32698cd705cdad91e03e5ad974101365146f2f28ab81566438165675efa0c7d3"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把谱面与演奏对齐成文本：MuNo-SP 如何让模型听见弹了什么与怎么弹

> 英文题目：*[Unifying Score and Performance for Fine-Grained Music Understanding in Audio-Language Models](https://arxiv.org/abs/2609.10351)*

> ℹ️ 本文基于论文全文节选生成，超出分析上下文上限的内容未纳入。

> 标签：#音乐理解 | #数据集构建 | #音乐 | #数据集
>
> 评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Milan Liessens Dujardin：机构信息未在 arXiv HTML 中可靠披露
- Song-Ze Yu：机构信息未在 arXiv HTML 中可靠披露
- Kevin Miao：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

本文面向古典钢琴录音与对齐乐谱的细粒度理解，输入为音频演奏与乐谱结构，输出为带时间戳的长篇听觉分析与可听问答，难点在于同时还原音高和声内容与力度分句踏板等实现方式。数据工厂先以多演奏共识清洗公共乐谱并保留溯源，输出干净乐谱进入对齐环节。接着保留原始演奏并经转换轨迹传播精化后的 score-performance 对应，再接入人工标注的音符级对齐，形成统一时序。然后将富时间结构转为统一文本表示并用大模型做曲式切分搭建脚手架，最终生成长分析并蒸馏为问答。与ABC与MIDI-as-text相比，该表示显式保留声部归属记谱分组反复展开与踏板，避免把分解伴奏与旋律压成单线，因而更可解释且显著小于带时间戳的乐谱。在MuSP-Bench去除识别题后四百余题的评测设置下，MuNo-SP的准确率为80.5%，高于最强基线的54.5%。结论适用边界受限于西方古典钢琴与高置信度对齐曲目，未验证音色录音声学外推与新音频语言模型训练效果。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，先保留哪些信息？

这篇解读的输入是论文正文证据与官方原图像素，目标是让刚进入语音与音乐方向的研究生能复述方法与实验条件。必须保留的信息包括任务定义、表示语法、流水线阶段、数据来源与清洗规则、评测划分与指标方向、关键数字及其适用条件。输出是 1 篇可核对的技术解读，不做超出证据的效果承诺。

本文研究的任务是细粒度音乐理解，即不仅识别弹了哪些音，还要说明这些内容在 1 次具体演奏中如何被实现，包括力度、 timing、 articulation、乐句呼吸、声部平衡与踏板使用，并把判断定位到录音时间轴上。作者指出已有音频语言模型在标签、检索与标题任务上有进展，但在需要同时读谱面与听演奏的 musician 级别理解上仍不可靠，原因是训练标题多为粗粒度、弱时间 grounding，缺少事件级对齐。

教学上可以把该任务想象成批改演奏作业：例子是学生弹了莫扎特奏鸣曲开头，老师既要点出旋律音与伴奏织体是什么，又要指出哪一拍抢了、哪一声部被盖住了、在哪个时间点呼吸。这只是帮助理解任务形态的例子，不代表论文做过课堂实验。论文选择古典钢琴为主的原因在证据中写得很实际：这一曲目同时有乐谱、演奏 MIDI 与音频三重视图，且已有 MAESTRO、ASAP 与对齐标注可串联，适合先验证统一表示是否可行。

### 同输入同目标的已有路线卡在哪里？

按同输入、同目标、同监督来对照，已有路线可分为从符号谱面理解与从音频理解两支。从符号侧看，MusicTheoryBench、ZIQI-Eval、ABC-Eval、MSU-Bench 与 MuSP-Bench 等评测用 ABC 记谱、合成谱面或多层次分析题考查模型读谱与乐理推理，论文转述其共同结论是高级谱面理解错误率仍高。也就是说只会读 ABC 或看谱面图像，不等于能把演奏中的 timing 与力度变化讲清楚。

从音频侧看，Audio Flamingo Next、GaMMA 等音频语言模型与近期标题生成工作覆盖风格、情绪、配器与段落边界，但论文用一张代表性标题粒度对照表说明它们多停留在全局属性或粗时间窗口，缺少覆盖全曲的密集事件描述。监督侧的另一条线是 MIDI 标题，如 MIDICaps 把演奏事件序列化为文本再生成标题，其信息只有演奏侧发声结果，缺少记谱声部、连句、反复与表情记号的显式结构。

论文的差异化主张因此很具体：不是再加一种标题风格，而是把对齐后的谱面与演奏放进同一语言模型可读文本，使生成以谱面结构为推理支架、以演奏数据为声音条件。这一定位决定了后文所有对照都应围绕表示是否让模型更好利用谱面、演奏及两者联合证据展开，而不是把不同曲目或不同标注规模混在一起比大小。

### 要解决的具体问题与评判口径是什么？

具体问题有两个。第一是如何设计一种紧凑、可读且表达力足够的文本表示，把谱面内容与对齐演奏信息统一起来，供语言模型直接读取。第二是如何基于该表示自动生成可用于音频语言模型监督的长篇听觉分析与问答，要求时间 grounding 到录音时刻、论断具体到音符与声部、用音乐家语言组织。评判口径分 3 层。

表示层用 MuSP-Bench 问答准确率衡量，题目按所需证据分为仅谱面、仅演奏、联合谱面与演奏、可由任一侧回答 4 类，答案格式限定为音高、和弦、时间戳、小节范围、数值或简短音乐描述。生成层用人评的正确性、音乐家相似度、洞察力与总体偏好衡量，另加模型作为裁判的互补对照与规则校验的幻觉率。数据集层看覆盖规模与可复现记录，包括 148 对对齐谱面演奏、每对一份结构切分与长分析、每录音 210 个问答。

需要提醒的是偏好与准确率是不同指标，偏好胜出不等于每个事实都正确，规则校验的低不支持率也不等于音乐判断全对，后文会分开讨论。

### 全景：从谱库与演奏库到 MAESTROCaps 要走哪几步？

流水线的全景可以按数据准备与语言生成两段来走。下图是论文给出的总览，左侧是演奏库与乐谱库，中间是对齐与 MuNo 转换，右侧是语言模型依次产生的谱面分析、听觉分析与问答对，最终与音频汇成数据集，理解这条主路径是复述方法的第一步。

> **看图路径：** 1. 先沿左侧演奏库与乐谱库经对齐到 MuNo 的主路径向右追踪；2. 再区分绿色数据准备与橙色语言模型生成两类方框的交接点；3. 最后确认音频直达与听觉分析汇入最终数据集的两条箭头

[![原论文 Figure 2：Overview of the data-generation pipeline.](https://arxiv.org/html/2609.10351v1/muno0.png)](https://arxiv.org/html/2609.10351v1/muno0.png)

*论文图 2。原论文 Figure 2:：“Overview of the data-generation pipeline.”。*

图中绿色部分对应可执行的符号处理，橙色部分对应语言模型生成，蓝色 GPT 方框是两者之间的接口。具体动作是先把 MAESTRO 提供的音频与演奏 MIDI 同 ASAP 提供的 MusicXML 谱面及对齐标注串起来，再经清洗与对齐转成 MuNo 表示；然后用 GPT-5.6 Sol 先对 MuNo-S 做结构切分，再把切分嵌入 MuNo-SP 生成长篇听觉分析，最后用另一模型把分析转写为问答。管弦乐扩展在贝多芬交响表情数据集上做了概念验证，因其标注无力度，作者按谱面力度记号用固定值与渐变插值近似，这一近似条件在复用时必须保留。

整个流程没有训练新的音频编码器或语言模型，语言模型是作为给定表示的读取器与生成器被调用的，真正的可复现工作量在对齐、清洗与提示约束上。

### MuNo-SP 的语法长什么样，模型读到的是什么？

MuNo-SP 是一种按行组织、按小节排序、按拍分组的文本表示。每个文件以乐器声明开头，然后按小节到拍到乐器到声部的层级展开，独奏可省略乐器层，只有需要区分独立或重叠记谱声部时才保留声部包装。每个小节与拍的题头记录其演奏起始时刻、总时长与舍入后的平均音符力度，例如题头同时给出从何时开始、持续多久、该范围内和弦音分别计入的平均力度。

音符行包含音高、记谱时值、MIDI 力度、演奏起始时刻与发声时长，和弦用逗号分隔音高并按序对应力度，休止符只写时值而 timing 隐含。连音、附点、 articulation、装饰音、连音线、延长记号、琶音、倚音与声部提示附着在其记谱事件上，力度与速度术语、表情记号、踏板事件嵌在发生的拍内，MIDI 延音开合按与相邻拍起始的接近程度归属。若记谱反复在演奏中实际重复，则展开为显式反复块并各自保留 timing 与踏板。

下图莫扎特 K.332 第一乐章开头两小节的谱面正是后文文本示例的来源，读图时应把高声部长音与低声部分解和弦当作两个功能层来对照。

> **看图路径：** 1. 先确认谱表为高低音双谱表、3/4 拍与 Allegro 及弱奏记号的位置；2. 再对照高声部长音旋律与低声部八分音符分解和弦的纵向对应；3. 最后观察跨小节连句线如何把第一小节旋律延续到第二小节

[![原论文 Figure 1：Bars 1–2 of Mozart’s Piano Sonata No.](https://arxiv.org/html/2609.10351v1/mozart-sonata.png)](https://arxiv.org/html/2609.10351v1/mozart-sonata.png)

*论文图 1。原论文 Figure 1:：“Bars 1–2 of Mozart’s Piano Sonata No. 12 in F major, K. 332/I, showing the opening melody above its broken-chord accompaniment as represented in Example 3.1.”。*

该谱面显示高声部 F4 到 A4 再到 C5 与 A4 的长音线条，低声部是连续八分音符分解和弦，跨小节连句把乐句呼吸标得很明确。对应的 MuNo-SP 文本把同一信息转写为小节题头加拍题头再加声部音符行的形式，使模型无需解析图像或 XML 标签就能按拍查到每个音的记谱时值与演奏时刻。论文还定义了纯谱面变体 MuNo-S，结构相同但去掉演奏信息，用于只需要谱面证据的切分与问答子集。

**乐谱内容 × 演奏实现：** 乐谱内容负责给出写了什么，包括音高、节奏、声部、力度记号、连句与反复结构，是音乐意图与分析的上下文；演奏实现负责给出实际怎么弹，包括每个音的演奏起始时刻、发声时长、MIDI 力度与踏板状态，是声音与时间证据；MuNo-SP 把两者按小节与拍对齐到同一文本层级中搭配，使模型能把记谱功能与演奏偏差对照起来描述，而不是把同时发声的音混成一条序列。

沿一个样本走完就是输入谱面加演奏 MIDI，经对齐得到带 timing 的中间 MusicXML，再转成上述分层文本，目标是让模型输出能引用具体拍与时刻的分析，而不是只给风格形容词。

### 表示为什么比 ABC 与 MIDI 文本更易读，代价是什么？

论文用 MuSP-Bench 比较了 ABC、谱面图像、MIDI 事件文本、ABC 加 MIDI 与 MuNo 家族。设计上的可读性来自三点：层级即音乐结构，小节与拍天然对应时间容器；声部显式化，对位与伴奏不再挤在一条时间序列里；记谱与演奏并置，模型可同时看到写了连句而实际弹得多短、写了弱奏而实际力度均值是多少。代价是长度，MuNo-SP 比 ABC 长得多，但仍远短于带 timing 的 MusicXML。

论文用 GPT-5.x 分词器在 24 首评测曲上报告平均 token 数，MuNo-S 约 33973，MuNo-SP 约 75779，ABC 约 11545，MIDI 文本约 57692，ABC 加 MIDI 约 63316，带 timing 的 MusicXML 约 484246。换算成相对比例，MuNo-SP 约为 XML 的 15.6%，减少约 84.4%，ABC 加 MIDI 约为 13.1%。这说明 MuNo-SP 比最紧凑的 ABC 更占上下文，但比直接把 XML 丢给模型轻一个数量级。需要区分的是 token 少不等于理解好，ABC 加 MIDI 虽比 MuNo-SP 稍短，论文报告其在联合问题上准确率明显更低，因此选择表示时要同时看长度预算与任务精度的权衡。

**MuNo-S × MuNo-SP：** MuNo-S 只保留谱面侧的分层结构，用于结构切分与纯谱面理解；MuNo-SP 在相同骨架上再嵌入演奏侧的起始时刻、时长、力度均值与踏板事件，用于听觉分析；两者分工使第一阶段先搭形式支架，第二阶段再把该支架条件化为声音实现，组合意义是让长篇分析既有曲式依据又有可定位的演奏证据。

复现时若上下文不够长，应优先确认是否必须保留全曲表示，还是可按结构切分分段调用，因为后文生成正是依赖全曲支架才连贯，截断可能先伤长程问题。

### 没有训练新模型时，构造流程的真实计算是什么？

本研究没有训练新的音频语言模型，training 一节应理解为数据集构造与调用流程。第一步是收集，钢琴部分串联 MAESTRO、ASAP、相关对齐标注与 PianoCoRe，ASAP 提供 222 份 MusicXML 与 1068 场演奏，其中 500 多场来自 MAESTRO，链接到 MAESTRO 的覆盖 179 首乐曲或乐章；管弦乐部分用 20 个片段各 4 场演奏做扩展验证。第二步是清洗，作者审计 179 个与 MAESTRO 链接的 ASAP 谱面文件夹到乐章级，过滤替代版本与 PianoCoRe 录音少于 10 个的条目。

删除候选来自对齐中标为缺失的谱面音符及与外部象征谱的差异，插入候选来自在邻近对齐事件插值出的演奏时间窗内未被谱面解释的演奏音高，以及外部参考谱差异。验证用阈值共识，例如删除需无同时同音齐奏阻挡并满足多条跨标注支持率路线，插入或替换需先满足删除条件再满足演奏或参考支持条件，具体阈值与 tie、断奏特殊处理在附录 C 给出，所有候选与接受变更都保留位置、来源、证据计数与决策记录。

第三步是对齐，钢琴侧保留原始未改演奏 MIDI，把 PianoCoRe 的精化对应经音符级转换迹传播到清洗后谱面，避免以错谱为准清洗 MIDI；管弦乐侧直接用数据集自带音符级标注。下图是拉赫玛尼诺夫 D 大调前奏曲的结构切分可视化，它就是第一阶段调用 MuNo-S 产生的显式支架，后续长分析必须逐一覆盖这些声明。

> **看图路径：** 1. 先从上到下确认开端呈示、发展中段、再现与尾声四个大段的小节范围；2. 再对照每段内深色主题带与白色乐句块的包含关系是否完整覆盖；3. 最后抽查第 61 至 64 小节所在再现高潮乐句的归属与命名

[![原论文 Figure 4：Section, theme, and phrase spans generated from MuNo-S for Rachmaninoff’s Prelude in D major, Op.](https://arxiv.org/html/2609.10351v1/rach-final-segmentation.png)](https://arxiv.org/html/2609.10351v1/rach-final-segmentation.png)

*论文图 8。原论文 Figure 4:：“Section, theme, and phrase spans generated from MuNo-S for Rachmaninoff’s Prelude in D major, Op.”。*

该图把全曲分为开端双呈示、发展中段、再现与尾声 4 段，每段下有主题带与乐句块并标注包含式小节范围，例如开端 1 至 34 小节内含 3 至 18 与 19 至 34 两个主题呈示。这种可视化对应提示要求的形式：大段、主题呈示与再现、乐句各有起止小节、功能与证据。

**结构切分 × 听觉分析：** 结构切分负责把全曲按大段、主题呈示与再现、1 至 4 小节乐句划分并给出起止小节与功能依据；听觉分析负责在每个乐句内按旋律、和声张力、织体、力度与分句、结构功能、节奏时间、演奏决策 7 个维度展开并综合到主题、段落与全曲；先切分后分析的搭配理由是原文称下游分析在有显式形式支架时更连贯、结构更可靠。

**对齐 × 校谱：** 校谱负责修正来自公共库的 MusicXML 转录与制谱错误，以跨演奏一致性与外部象征谱为证据并经人工复核；对齐负责把演奏 MIDI 音符映射到校后谱面事件并保留原始演奏 MIDI 不改写；两者搭配是因为若以错误谱面为准清洗 MIDI 会把演奏改得像错谱，组合后才能让 MuNo-SP 同时可信地承载记谱与演奏。

**问答对 × 听觉分析：** 听觉分析是唯一的事实来源长文本，负责提供带时间戳的具体音高、和声与演奏描述；问答对负责把分析转写为可听、可独立提问、可判分的听力问题，限定只能用分析中显式陈述作答；搭配意义是把长文本监督压缩为音频语言模型训练可用的细粒度问答，同时用逐字证据字段约束问题不引入谱面外知识。

第二阶段把切分嵌入 MuNo-SP 并按 7 维生成分析，要求时间戳格式为分秒百分秒、论断具体到音符与声部、语言像音乐家听辨、优先显著旋律和声织体与演奏决策，并对每个乐句专段讨论再综合到主题、段落与全曲。第三阶段用 Gemini 3.7 Flash 把分析转写为每录音 210 个问答，每类维度按固定分布生成，要求问题可独立听辨、不问踏板机械动作、不把减速说成谱面写明、答案先行且证据逐字引用。

最终 MAESTROCaps 为 148 对对齐谱面演奏各配一份切分、一份 MuNo-S、一份 MuNo-SP 与一份长分析，共 148 篇长分析与 31080 个问答，作曲分布以巴赫 56 首、贝多芬 37 首、肖邦 21 首为主，音频总时长约 10.38 小时。由于本次未获得可验证的公开资源状态，这里不声称数据集或代码当前可下载，复现应以论文附录的提示与阈值规则为准。

### 评测条件：数据、基线、指标与公平性如何保证？

表示评测用 MuSP-Bench 的 490 道开放问答，覆盖 24 部古典作品，涉及音高、时间组织、演奏实现、旋律和声配器结构诠释与语境，推理跨度从单事件到全曲。按证据需求分为 4 类，本文主要比较排除 48 道作曲家与作品识别题后的 442 题，因为生成流水线本身会提供作品元数据。模型侧用 GPT-5.6 Sol、Muse Spark 1.2 与 Qwen3.6-Plus 三家，输入为全曲级表示加题目、统一作答指令与简短语法说明。基线包括 ABC、谱面图像、MIDI 事件文本的命名音高与整数音高两种编码、ABC 加 MIDI 并行注释对齐，基线结果取自前序工作并只在题目覆盖相同的子集上比较。

指标是限定格式下的准确率，方向为越高越好，聚合时按子集题数加权，平均分先在子集内平均再汇总，最优分在子集内选最强表示再汇总。生成评测用人评 9 对标题，每对来自同一录音的 MuNo-SP 与 MIDI 基线，3 个被试钢琴训练年限分别为 1 至 3 年、7 至 10 年与 16 年以上，从正确性、音乐家相似度、洞察力与总体偏好 4 维盲选；模型裁判用 Gemini 3.7 Flash 听完整录音对 27 对标题各做 3 次独立随机顺序盲判，共 81 次判断。

规则校验检查所有时间戳是否来自真实事件、所有单音、序列、同时音组与命名和声是否有音乐支撑。需要保留的公平细节是人评 MIDI 条件平均句数稍多，长度是潜在干扰；模型裁判被明确指示忽略长度与覆盖差异；问答生成阶段被禁止问踏板 exact 时刻，保证问题可仅靠听辨回答。

### 表示评测：联合理解的提升发生在哪里？

先提出比较问题：在谱面、演奏与两者联合 3 类证据上，MuNo 是否在相同题目上高于常规文本表示，指标方向为准确率越高越好，公平条件是题目覆盖完全匹配且聚合权重一致。下表按证据跨度拆分 GPT-5.6 Sol 的表现，最佳基线在谱面与通用题用 ABC、演奏题用 MIDI 文本、联合题用 ABC 加 MIDI，改进为绝对百分点。

| Evaluation set | Horizon | #Q | Best baseline | MuNo-S | MuNo-S improvement | MuNo-SP | MuNo-SP improvement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Score-only | Short | 59 | 47.5% | 88.1% | +40.7 | 89.8% | +42.4 |
| Score-only | Mid | 58 | 48.3% | 79.3% | +31.0 | 79.3% | +31.0 |
| Score-only | Overall | 264 | 54.9% | 81.8% | +26.9 | 82.2% | +27.3 |
| Performance- inclusive | Overall | 442 | 54.5% | N/A | N/A | 80.5% | +26.0 |

表后解释应关注两点。主要收益在短跨度与联合题上最大，例如谱面短跨度 MuNo-SP 达 89.8%，高于最佳基线 47.5% 约 42.4 个百分点；演奏包含的短跨度达 88.3%，高于 48.9% 约 39.4 个百分点；全量 442 题 MuNo-SP 达 80.5%，高于 54.5% 约 26.0 个百分点。代价或边界是长跨度提升收窄，例如谱面长跨度从 52.5% 到 74.7% 约 22.2 个百分点，演奏包含长跨度从 55.9% 到 74.6% 约 18.6 个百分点，说明全曲长程推理仍是难点。

另一张按子集与模型展开的结果在正文中报告：联合 72 题上 MuNo-SP 为 80.6% 而 ABC 加 MIDI 为 45.8%，相差 34.8 个百分点；演奏 106 题上 MuNo-SP 为 76.4% 而命名音高 MIDI 文本为 59.4%，相差 17.0 个百分点；3 模型聚合最优 MuNo 分别为 80.8%、62.0%、25.3%，对应基线最优 55.0%、36.0%、15.8%。未胜出项也要保留：Qwen 系列整体准确率明显低于前两者，说明表示增益不能抹平基座模型差异；谱面图像基线在多处最低，不宜把图像理解差解读为听觉理解差。

总体判断用支持而非证明的措辞：结果支持 MuNo 把音乐结构以更易读形式呈现给语言模型，但未验证换用其他分词器或截断上下文后增益是否保持。

### 生成质量：人更偏好哪一侧，偏好有多强？

第二个结果问题是生成的长分析是否更正确、更像音乐家、更有洞察力，比较条件是同一录音、同一结构范围、仅表示不同的两版描述，指标为盲选份额与按条多数投票。下表同时给出人评 9 对与模型裁判 27 对的结果，模型裁判每对做 3 次独立判断，人评份额含平局选项。

| Judge and scope | Dimension | MuNo-SP | MIDI | Tie | Majority-vote outcome |
| --- | --- | --- | --- | --- | --- |
| Human evaluation | Correctness | 46.51% | 27.91% | 25.58% | MuNo-SP 7/9; no majority 2/9 |
|  | Overall preference | 58.14% | 39.53% | 2.33% | MuNo-SP 8/9; MIDI 1/9 |
|  | Overall preference | 92.59% | 7.41% | 0.00% | MuNo-SP 8/9; MIDI 1/9 |
|  | Overall preference | 83.95% | 16.05% | 0.00% | MuNo-SP 23/27; MIDI 4/27 |

表后解读先看收益。人评总体偏好 MuNo-SP 占 58.14% 对 MIDI 占 39.53%，按条多数为 8 比 1；洞察力差距最大，62.79% 对 30.23%，按条为 7 比 1 并有 1 条无多数；正确性含 25.58% 平局，多数为 7 比 0 并有 2 条无多数；音乐家相似度为 53.49% 对 41.86%，按条 7 比 2。

模型裁判在 27 对上总体偏好 83.95% 对 16.05%，按条 23 比 4，在与人评重叠的 9 对上总体为 92.59% 对 7.41%，按条 8 比 1，且与人评多数结论 9 比 9 一致。代价与限制是人评仅 3 人 9 对，样本小且曲目覆盖有限；MIDI 条件句数稍多可能干扰；模型裁判虽 81 次判断一致性高，但 22 对 3 次结论相同仍不等于人类金标准，只能作为互补证据。

同一批被试对 MuNo-SP 片段的 5 分制评分均值分别为时间正确性 4.78、音高正确性 4.89、高层描述正确性 4.42、音乐洞察力 4.64、音乐家相似度 4.39，每维 36 个评分中 4 至 5 分占比 83.33% 至 97.22%，报告为直接结果，支持生成与音乐证据对应程度较高，但未测量误判率随曲目难度的变化。

### 同一段落换表示会怎样：拉赫玛尼诺夫 61 至 62 小节的反例

要理解联合表示的机制，最直接的是看同一录音同一模型只换输入表示的对照。下图是争议段落的谱面，它同时层叠了主旋律、高声部回应、内部对位进行与琶音伴奏 4 层，这正是检验 MIDI 单序列是否会混层的地方。

> **看图路径：** 1. 先定位第 61 至 62 小节高声部和弦、回应声部与低声部琶音的三层布局；2. 再观察低声部声部记号变化与三连音括号指示的内声部进行；3. 最后核对高声部倚音与力度渐弱记号在文本描述中的对应位置

[![原论文 Figure 3：Bars 61–62 of Rachmaninoff’s Prelude in D major, Op.](https://arxiv.org/html/2609.10351v1/figures/rachmaninoff-op23-no4-bars61-62.png)](https://arxiv.org/html/2609.10351v1/figures/rachmaninoff-op23-no4-bars61-62.png)

*论文图 5。原论文 Figure 3:：“Bars 61–62 of Rachmaninoff’s Prelude in D major, Op.”。*

图中可见高声部和弦与高音回应、低声部三连音内声部与琶音跨声部记号并存，右侧还有渐弱与倚音记号，记谱功能区分得很细。MIDI 文本描述把琶音音符、旋律音、高声部音与内声部音串成一条主路径，例如把 C#4 到 F#4 到 A4 到 C#5 的琶音与 A5 旋律、F#6 回应及内声部 C#4 到 A4 到 B4 到 C5 到 C#5 拼在一起，并把和声判为 C#小调相关，还构造了谱面与录音中都难以定位的 F#4 加 F6 sonority 与 D4 到 G5 等片段。

MuNo-SP 描述则保留声部结构，区分 A5 到 G#5 主线、F#6 到 E#6 高声部回应、A4 到 B4 到 B#4 到 C#5 内声部上行，并把贝斯与 E#音高解释为回 F#小调的属压力，还正确识别 03:18.40 的 A5 为倚音性质。这 1 对照支持论文的有限解释：MIDI 监督易把同时层压扁，MuNo-SP 把记谱功能显式交给模型。但也要说明这只是单样本机制展示，不能推广为所有复调段落都必然如此，论文另用程序化校验与人评来补全证据。程序化校验在 148 篇分析中发现 56600 个时间戳中 63 个不匹配事件，允许正负 100 毫秒容差后剩 12 个。

6943 个命名和声中 10 个无支撑，17527 个音高序列中 14 个无支撑，13033 个同时音组中 208 个无支撑，17143 个单音全部有支撑。208 个同时音组部分源于模型把分开弹的贝斯与和弦拼在一起，例如舒伯特即兴曲第三首的情形，说明同时性判断仍是残留弱点。

### 哪些结论尚不支持，边界在哪里？

论文明确的局限有 4 层。曲目上集中于西方古典钢琴，管弦乐仅为可扩展性验证，跨风格与跨编制是否成立待验证。信号上 grounding 于谱面与对齐 MIDI，只能刻画 timing、力度、时长与踏板，不能刻画音色、声学空间等 MIDI 之外的属性，作者提出未来可加入录音相对响度等音频衍生特征，或与能直接听录音的模型结合。数据质量上传递风险仍存在，谱面或对齐错误若未被校验捕获会进入监督，阈值与人工复核只能降低而非消除该风险。

解释上模型对名曲的先验 exposure 影响未知，听辨本身也受文化与训练塑造，标题只是多种听法之一，不应把一种分析当成唯一正确解读。未报告项也要点名：没有训练开销、推理延迟、输出帧率与部署成本的测量，不能从准确率提升推定这些量改善；没有开放权重本地模型的生成能力评估，不能推定小模型同样可行；转录近似 MIDI 层的扩展只提到可用 MuScriptor 近似，未在本研究中系统验证其误差传播。这些缺项不是技术错误，但在复用前需要补验证。

### 复现先做什么，需要哪些信息条件？

复现应按依赖顺序先做信息条件检查。再看两张与可重放直接相关的记录表，第一张是主文示例的录音归属，保证讨论的莫扎特、德彪西、贝多芬、拉赫玛尼诺夫、舒伯特与肖邦两版演奏能唯一回指到同一对齐对；第二张是校谱用外部象征谱与公共版本来源，明确哪一部比较源覆盖哪位作曲家。

| Example | Recording | Work | ID |
| --- | --- | --- | --- |
| 1 | 1 | Mozart, K. 332/I | WuuE02M |
| 2 | 2 | Debussy, Reflets dans l’eau | ParkJH13M |
| 3 | 4 | Rachmaninoff, Op. 23, No. 4 | WuuE07M |
| 4 | 5 | Schubert, D. 780, No. 3 | Tetzloff09M |

上表说明示例 1 至 5 分别对应 WuuE02M 等编号，示例 2 含两段录音，示例 5 含同一肖邦叙事曲的 2 位演奏者 A 与 B，这是复现比较 large-scale pacing 差异时必须对齐的同一谱面条件。

| Collection | Coverage and role |
| --- | --- |
| CPJKU WTC Book I | Bach preludes and fugues, BWV 846–869; symbolic comparison source. |
| DCML Beethoven Piano Sonatas | Available Beethoven sonata movements; symbolic comparison source. |
| Mysterium | Scriabin’s Etude in B-flat minor, Op. 8, No. 11 and Piano Sonata No. 5, Op. 53; symbolic comparison source. |
| IMSLP | A movement- or work-specific public-domain edition for each of the 142 retained pieces; manual verification source. |

上表列出巴赫平均律第一册、贝多芬奏鸣曲、肖邦、莫扎特 K.332、斯克里亚宾与每首保留曲目的公共版本核对源，含义是外部谱只用于提出候选而不自动改谱，最终以阈值共识加人工比对公共版本为准。接着按流水线复现：先用相同 MAESTRO 音频与 MIDI、ASAP 谱面与对齐重建三视图；再实现附录 C 的删除与插入阈值、齐奏阻挡、tie 特殊处理与 50 处以上删除取消规则，并保留候选与决策日志；然后保留原始演奏 MIDI 经转换迹传播对应关系，转出 MuNo-S 与 MuNo-SP。

最后按附录 D、E、G 的提示先切分再生成分析再转问答，注意问答只能引用分析原文、禁问踏板机械时刻、时间戳答案禁在题干中泄露。由于本次未验证可达的公开资源，不得把数据集或代码当作已可下载来规划，关键超参数是每录音 210 问、7 维分布、阈值路线与时间戳格式，缺失的是完整提示之外的解码参数与模型版本冻结细节，复现时应固定并记录自己所用版本。

### 何时值得尝试这种统一表示？

当任务需要同时引用写了什么与实际怎么弹，并把判断定位到秒级时刻时，这种统一表示值得尝试，例如演奏作业反馈、同一谱面多版本演奏比较、乐句高潮与过渡的细粒度定位。它的适用前提是已有可信谱面与音符级对齐，或愿意先投入校谱与对齐成本；若只有音频而无谱面，或只关心风格与情绪标签，直接用音频标题基线更省事。

采用时建议先用 MuNo-S 验证模型读谱是否过关，再加演奏层看联合问题是否提升，因为论文显示短跨度与联合题增益最大而长跨度增益收窄，全曲超长上下文需先做分段策略。还需补的验证是换基座模型后的稳定性、长上下文截断的影响、同时音组幻觉的自动过滤，以及在非钢琴与非古典曲目上的对齐质量。

若把该方法用于教学，应明确告知学生分析只是一种有证据的听法，时间戳与音高可核对，但分句、张力与演奏意图的表述仍有解释空间，重要判断应回听录音并对照谱面复核。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.10351)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-11/)
