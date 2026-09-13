---
title: "EchoFoley: Event-Centric Hierarchical Control for Video Grounded Creative Sound Generation"
date: 2026-09-13
draft: false
description: "针对视频文本到音频中视觉压倒文本且缺少事件级可控定义的问题，论文提出事件中心分层控制任务、EchoFoley-6k 基准与免训练智能体 EchoVidia，最强证据是时间 0.72、音色 0.78、音量 0.75 可控性与人评指令遵循 3.80 同时领先基线，代价是依赖外部视频大模型与生成模块且需两速推理。"
tags: ["基准测试", "数据集", "多模态学习", "音视频", "视频到声音生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3d8d7f4dfe6dd4136b6c770d0ae9c89563a48db4961824ab0c758398c7b22973"
paper_digest_api_reader_plan_sha256: "13500225e45723d1b261418e1eb76eb5b7538f77cfae85017afb1cd45b6bc910"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e0e19754a1c13cc8a1f1a12517f0fcf679ca9a7570be61c6d4955a048aca23a0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "bcc9789149add2b855fee02c310fd9a21fa7c6c9025752efd783e8a80b4813b6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e1302ea2d850dac9f42fdd70e77161e23fbbbd7d49753066500a95bdb7359f42"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "82f8ae7dbe093138c0f5c99f92526d9543f6834a210a27133d5746aaeb23adfe"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 从整轨配音到逐事件导演：EchoFoley 用符号事件表约束何时何物如何发声

> 英文题目：*EchoFoley: Event-Centric Hierarchical Control for Video Grounded Creative Sound Generation*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.pdf)

标签：#基准测试 #数据集 #多模态学习 #音视频 #视频到声音生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Bingxuan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yiming Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Yicheng He：机构信息未能从会议 PDF 纯文本可靠映射
- Yiwei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Shu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Longyin Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Yulei Niu：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为静音视频与自然语言指令，输出为与画面同步且服从细粒度编辑的声音，难点在于多事件混叠时文本控制常被视觉条件淹没且缺乏可定位的编辑单元。该工作先以发声事件三元组将音频拆为时间戳、语义描述与属性，形成可解释的符号化中间表示，其输出直接作为后续定位与编辑的操作对象。接着构建EchoFoley-6k基准提供密集标注与层次化指令，为事件级真值对齐与可控性评测提供统一套件，承接符号表示的监督与检验。再由EchoVidia智能体执行慢快思考定位、符号计划设计与分层合成渲染，将修正后的事件计划逐层合成为时间对齐的音频。与现有视频文本到音频模型直接端到端生成不同，该链路把可解释符号计划作为中间接口，从而实现实例级与组级的可控增删改。在EchoFoley-6k发声事件检测任务下，Gemini-2.5 Pro + SF的F1分数为0.74，高于Gemini-2.5 Pro的F1分数0.59。该结论适用边界受限于6秒到30秒运动中心短视频与三类自动可控性度量，尚未验证长视频、外分布音色与真实创作流程迁移。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://echofoley.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么：为什么要做事件级创意配音？

输入是一段静音视频加一条自然语言指令，输出是与画面同步且执行指令的音轨。论文要解决的矛盾是现有视频文本到音频常把文本当作可选的视频级标签，例如猫叫，生成结果跟着画面走，却无法指明是第几次叫、在第几秒、改多大声。学习时必须保留 3 条信息：任务从视频级生成变为事件级分层控制，评估同时看何时、何物、如何 3 类可控性，方法是免训练智能体而非端到端训练新扩散模型。

本文按任务与相关路线、方法全景、组件与计算、数据构造与推理、实验条件、结果与反证、复现与收束的顺序展开，所有例子均标为教学例子。官方演示页当前可用，链接见原文证据，本文事实只来自论文原文证据与收到的原图像素。论文强调声音会重塑观众对运动、故事与氛围的感知，教学例子是猫叫两声后加入魔法爆炸并把第二声变为狮吼，普通画面因此变成巫师故事。

这种例子说明控制必须精确到事件个体与属性组合，而不是整轨风格化一句话带过。后续所有方法与指标都围绕如何把含糊指令变成可执行、可验证的事件表展开。

### 同输入同目标的已有路线卡在哪里？

第一条路线是多模态条件音频生成，包括 Seeing&Hearing、Diff-Foley、MultiFoley、MMAudio、HunyuanVideo-Foley、ThinkSound 等扩散或 Transformer 模型。它们输入视频加可选文本，目标是时间对齐的视频配音。论文报告这类模型在新基准上时间可控性普遍偏低，音色可控性也只有 ThinkSound 与 Hunyuan 系列略高，说明它们为视觉对齐过度优化，文本细粒度控制弱。

第二条路线是用多模态大模型做多阶段视频到音频，例如 AudioGenie 与 SonicVisionLM。它们引入推理，但仍停留在粗粒度描述，无法区分同类多个事件，也难以同时编辑音色、顺序、时长与音量。第 3 条路线是发声事件定位与视频事件推理，从弱监督、长视频、开放词汇到第一人称视频，解决了看到哪里在响，但没有解决按指令改声音。

本文的差异是把定位结果变成可编辑的符号中间层，再交给生成动作执行。与其把类别差异当胜负，不如记住同为视频加文本输入、同为生成声音目标时，本文测的是指令是否被精确执行，而不仅是画面是否同步。这也是后文同时报告同步分与遵循分的由来。

### EchoFoley 任务如何定义：何时、何物、如何？

论文把发声事件定义为时间上可定位、且在视频内容或指令语境中有出处的音频段。白话说，就是画面里或指令里点名的那一声。英文为 sounding event。每个事件写成三元组：时间区间含开始与结束，语义描述含主语、动作、可选宾语，可控属性含音色、音高、强度与空间感。给定视频与指令，对应事件集合记为受二者约束的集合，指令为空时退化为普通视频到音频生成。指令可以显式或隐式指定时间位置、语义描述与属性及其组合。

**发声事件 × 符号化表示：** 发声事件负责指明视频或指令中哪一段声音需要被控制，符号化表示负责把该事件写成时间区间、语义描述和可控属性的结构化三元组，二者搭配的原因是自然语言指令含糊而音频生成需要精确边界，组合后指令先被翻译成可编辑的符号计划再被渲染为波形。

控制空间组织为 3 层。实例级控制管单个事件的发射或插入，教学例子是把第二次喵声改为狮吼。组级控制管多个相关事件的协同，教学例子是把视频中所有猫叫都狮吼化。视频级控制管整体声学风格与分布，教学例子是渲染成卡通质感。与层级正交的是 3 种类型：时间控制管何时与多长，音色控制管听起来像什么，音量控制管听起来多强多远。

图 1 的猫视频例子展示了这种组合：加 1 秒魔法爆炸、改第二声猫叫、让爆炸及之前声音比之后更响，分别对应实例级时间加音色操作与组级音量操作。这种分层使自然语言的含糊指代可以在符号层被消解为唯一事件。

### EchoVidia 全景：先想清楚再动手生成

EchoVidia 是一个免训练的智能体框架，中心是一个基于视频大模型的智能体加一个含 12 个原子操作的动作池。动作池分 3 类：视频推理动作负责发现发声事件、检索时间线索、裁剪相关视觉片段；声音设计动作负责增删改事件表示及其语义与时间属性；生成动作负责合成、调整与混音，保证时间对齐与感知连贯。推理时智能体先分析输入视频识别潜在事件并估计大致时间，再构建符号事件计划描述每个事件应如何发声，通过推理与编辑动作迭代精修，最后把定稿的符号表示交给声音生成模块，按视觉与文本上下文渲染音频。

这种先符号后波形的安排理由是可解释与可编辑：文本歧义在符号层被消解，生成模块只负责执行。阅读图 1 时，先把顶部静音视频、中部文本控制与发声表示、底部输出声音看成一条纵向流水线，再横向对比实例级与组级的指令粒度差异。

> **看图路径：** 1. 先沿顶部静音视频时间轴看 00:00 到 00:12 六帧猫动作与时间刻度；2. 再看中部三条文本控制如何分别标注实例级与组级；3. 接着核对三组发声表示框中的起止时间描述与属性字段；4. 最后看底部频谱图中三段框选与文字标签的对应关系

[![原论文 Figure 1：Motivation of EchoFoley. In creative storytelling, sound shapes the story we perceive.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b23271b184db/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b23271b184db/figure-1.png)

*论文图 1。原论文 Figure 1：“Motivation of EchoFoley. In creative storytelling, sound shapes the story we perceive.”。*

该图显示输入是 00:00 到 00:12 的猫视频，文本控制分为加 1 秒魔法爆炸、改第二声为狮吼、让爆炸及之前更响 3 条，中间 3 组符号框分别给出对应事件的时间、描述与音高音量强度空间属性，底部频谱用三色框标出对应 3 段声音。这说明符号表示是连接自然语言与波形的中间接口，也是后文所有控制得以逐事件执行的基础。慢快思考与动作池都是为写准这张表服务的。

### 慢快思考如何让时间戳变准？

慢快思考策略的灵感来自双过程认知，快系统做直觉推理，慢系统做分析推理。快思考通路以 1 帧每秒看全局，总结高层结构与粗略听觉上下文；慢思考通路先降采样到 16 帧每秒再做 16 倍时间拉伸，以等效慢动作细看，实现精确事件定位与属性推断。白话说，快看知道故事大意，慢看卡准起止帧。论文指出当前视频大模型常能检出发生了什么，但边界漂移明显，因此需要两速互补。

**实例级控制 × 组级控制：** 实例级控制负责单个事件的产生插入或改写，例如把第二次猫叫改为狮吼，组级控制负责协调多个相关事件的联合变化，例如让爆炸及之前声音整体更响，二者搭配的原因是创作既需要单点手术式修改也需要风格一致的批量修改，组合后形成从微观到宏观的分层语义控制。

该组合机制新增的作用是缓解视频大模型的时间边界漂移。论文在发声事件感知任务中报告，加慢快推理后相关模型的召回与交并比显著提升，定位相对提升超 60%。这支持慢看确实补足了快看的时间精度，但也意味着推理要跑两遍视频，计算代价高于单次零样本问答。复现时需固定两速的采样与拉伸实现，否则时间戳不可比。

### 12 个原子动作如何分工协作？

动作池的设计是把导演工作拆成可调用的原子操作，避免让大模型直接输出波形。视觉侧动作做事件枚举与时间检索，设计侧动作做符号的增删改，合成侧动作做分层渲染与混音。沿一个样本走完全程：输入猫视频与 3 条指令，智能体先检出 2 次猫叫的大致位置，再按指令插入魔法爆炸符号并把第二个猫叫的描述改写为狮吼、调整 3 段音量属性，最后调用生成模块分别合成再混音。

**慢思考 × 快思考：** 快思考负责以 1 帧每秒快速把握视频全局结构和粗略听觉上下文，慢思考负责把视频降采样到 16 帧每秒再做 16 倍时间拉伸后细看边界与属性，二者搭配的原因是单速观看要么漏掉细节要么失去全局，组合后先定大局再精修时间戳，显著提升检测与定位精度。

这种分工的搭配理由是解耦理解与合成：理解错误可以在符号层被检查与修正，不会直接污染音频；合成模块可以复用现有视频到音频模型的对齐能力。论文未报告动作选择的具体搜索算法与超参数，也未给出梯度路径，因为智能体本身不训练，冻结与更新的参数边界在原文未明确交代，这是复现时需要补的缺项，不能从模型名称推定实现。教学例子中 3 段声音的顺序与响度关系都由符号表显式约束。

### 没有训练阶段时，真正的计算发生在哪里？

本研究没有训练新的生成权重，EchoVidia 是免训练智能体，本节讲的是构造与推理计算而非梯度优化。真实计算包括 4 步：用图像描述器生成帧级视觉描述，用大语言模型基于元数据与帧描述提议创意故事与候选事件，用人工标注者把故事转为细粒度指令并修正时间边界与听觉属性，用视频大模型加慢快推理在测试时做事件规划再调用声音生成与混音。

原文未报告优化器、学习率、冻结层或重置时机，因为不存在拟合过程，不能把免训练等同于确定性求解，大模型采样与生成模块仍带来随机性。数据集论文的等价方法职责由数据构造流程承担，评估的是调用与标注质量，而非训练收敛性。复现者应把重点放在标注一致性、提示版本、生成模块版本与随机种子管理上，而不是寻找训练配置文件。

这也解释了为什么论文的成本讨论不在训练显存，而在推理链路长度与模块调用次数上。

### 数据、划分、指标与基线如何保证可比？

EchoFoley-6k 从 VGGSound 与 PE 视频数据集中筛选运动中心视频，要求发声交互在视觉上可辨，例如动物发声、物体被击打、环境变化，避免任意背景音。流程为视频过滤、元数据与帧描述生成、故事提议与事件抽取、人工修改 4 步，每段视频关联多条自然语言指令与细粒度事件标注。论文摘要与正文对规模的表述存在出入，摘要称超 6000 三元组与 42000 事件标注，统计表称视频 937 个、事件与指令约数千条，视频时长 6 到 30 秒。此处明确标注冲突，不自行编造聚合口径，复现应以附录实现细节与发布版本为准。

**时间控制 × 音色控制：** 时间控制负责事件何时发生与持续多久，用预测区间与真值区间交并比衡量，音色控制负责声音听起来像什么，用音频片段与语义描述的 CLAP 相似度衡量，二者搭配的原因是创作指令常同时约束位置与身份，组合后才能判断生成声是否既对时又对味。

自动指标分 3 类：时间可控性为全事件交并比均值，预测区间来自基于音频大模型的起止检测；音色可控性为事件音频片段与语义描述的相似度均值；音量可控性为生成片段相对整轨响度与真值响度等级是否一致的平均等价率。人类评估在部分视频指令对上由多人按 5 分量表打指令遵循、音频视觉一致性、感知质量，一致性为中等水平。音频美学分从生产质量、生产复杂度、内容享受度、内容实用性 4 维打分。

基线为 8 个支持视觉与文本条件的开源视频文本到音频模型，包括 MMAudio 多版本、ThinkSound、AudioGenie、HunyuanVideo-Foley 大小版本，均为实际可运行策略，未用搜索最优或 oracle 代替。这保证比较的是可部署收益，而不是事后挑选的最优值。

### 主结果：可控性与质量是否同时提升？

比较问题是：在同一组视频指令下，EchoVidia 是否比现有可运行模型更听话且更好听。公平条件是同一基准、同一自动与人工指标，指标方向均为越高越好。下表整理可控性三指标与人评关键分，数值保留原文写法，箭头表示区间范围而非单点精度。

| 条件 | 指标 | 基线区间 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 事件级分层控制 | 时间可控性 | 0.18↗0.43 | 0.72 | 最强基线 |
| 事件级分层控制 | 音色可控性 | 基线偏低 | 0.78 | 最强基线 |
| 事件级分层控制 | 音量可控性 | 0.50↗0.69 | 0.75 | 最强基线 |
| 50 样本人评 | 指令遵循 | below 2.60 | 3.80 | 人评均值 |
| 50 样本人评 | 音视一致性 | 基线中等 | 3.93 | 人评均值 |

表后解释段落需要说明主要收益与具体代价。EchoVidia 在三项可控性上分别领先最强基线约 0.29、0.30 与 0.06 到 0.25，平均提升显著，报告显示其同时拿下生产质量 7.32 等多项最高。人评指令遵循拉开约 1.2 分，说明自动指标的领先能被人耳感知。代价是基线中 Hunyuan 系列本已最强但仍远低于 EchoVidia，而部分模型在时间与音色上垫底，说明视觉对齐好的模型不等于听指令。未胜出项是部分音频视觉一致性基线仍具竞争力，EchoVidia 并非断层领先，提示同步能力已接近天花板，差距主要在指令执行。

**指令遵循 × 音频视觉一致性：** 指令遵循负责衡量音频是否执行文本要求的时序音色与响度变化，音频视觉一致性负责衡量声音与画面动作运动和事件边界是否同步，二者搭配的原因是只看画面同步会掩盖忽视文本的视觉主导偏差，组合后才能暴露模型是真可控还是只会配画面。

从粗到细看控制粒度，基线在视频级尚可，到组级与实例级急跌，而 EchoVidia 几乎持平。

> **看图路径：** 1. 先确认横轴从 Video-level 到 Instance-Level 表示控制由粗到细；2. 再比较紫色 EchoVidia 虚线与其他四条基线虚线的高度与斜率；3. 注意在 Group-Level 处基线普遍大幅下跌而 EchoVidia 几乎持平

[![原论文 Figure 5：Average controllability scores for different levels of con- trol granularity, from macro (global)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b23271b184db/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b23271b184db/figure-5.png)

*论文图 5。原论文 Figure 5：“Average controllability scores for different levels of con- trol granularity, from macro (global) to micro (atomic).”。*

该折线图横轴为控制粒度由宏观到微观，纵轴为平均控制分，5 条虚线中紫色 EchoVidia 始终在高位，其余 4 条在组级跌到低位区间。这支持论文判断：越细粒度越难控制，符号事件层正是为缓解该衰减而设，但也说明若无符号规划，端到端模型难以区分同类多事件。

### 消融与反证：慢快推理与事件感知是否必要？

比较问题是：慢快推理是否真正提升发声事件的检测与定位，还是只在端到端生成上有效。公平条件是同 300 个经人工验证的视频、零样本单轮测试，定位只统计检测正确的事件，指标方向越高越好。下表整理慢快推理前后的关键数字，保留原文 2 位与 3 位小数写法。

| 条件 | 指标 | 加 SF 前 | 加 SF 后 | 比较对象 |
| --- | --- | --- | --- | --- |
| 300 视频检测 | 召回率 | 0.66 | 0.83 | Gemini-2.5 Pro |
| 300 视频检测 | F1 分数 | 0.59 | 0.74 | Gemini-2.5 Pro |
| 正确事件定位 | 交并比 | 0.510 | 0.842 | Gemini-2.5 Pro |
| 正确事件定位 | 交并比 | 0.484 | 0.650 | Qwen3-VL-30B |
| 人评一致性 | Kappa | 基线 | 0.62 | 6 人评分 |

表后解释段落需要说明收益与边界。慢快推理带来召回与 F1 的显著提升，定位相对提升超 60%，另一模型也有类似增益，支持该策略是时间变准的关键。反证是全模态模型普遍优于纯视觉视频大模型，个别模型召回很低，说明音频对齐预训练对事件意识重要。未评测边界是检测失败的事件不进入定位统计，若计入漏检，端到端可控性会更低。原文未做拿掉动作池子模块的消融，不能推断各原子动作的独立贡献。

> **看图路径：** 1. 先确认纵轴为 IoU 横轴为 8 个模型条件且只统计检测正确的事件；2. 再对比灰色基线柱与最右侧两根橙色加 SF 策略柱的高度；3. 注意柱顶数值与误差线，0.842 与 0.650 为慢快推理带来的定位增益

[![原论文 Figure 7：Task 2: Sounding Event Localization.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b23271b184db/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b23271b184db/figure-7.png)

*论文图 7。原论文 Figure 7：“Task 2: Sounding Event Localization. Intersection- over-Union between predicted and ground-truth temporal spans, computed only on correctly detected events.”。*

该柱状图纵轴为交并比，八根柱中右侧两根橙色加 SF 柱显著高于灰色基线，柱顶标注 0.842 与 0.650，误差线较短。这表明模型常知道发生了什么但卡不准起止，慢看补足了边界精度，但也意味着评估排除了漏检事件，真实端到端定位难度更高。

### 边界与未验证：哪些结论还不能下？

直接报告的是：在给定基准与指标下，EchoVidia 可控性与人评领先，慢快推理提升检测与定位。有限解释是符号中间层缓解视觉主导，因为相关性不等于因果，未测量消融掉符号层后是否仍领先，只能说支持而不能说证明。未验证的推测包括更长视频、更多重叠事件、更强空间化要求下的稳定性，这些在原文证据中没有系统测试。

训练资源、推理延迟、输出帧率与实际成本原文未报告，不能承诺延迟或成本改善；音量分档阈值与音频大模型检测器的误差未量化，误判率未知。数据规模表述冲突已在实验条件节标注，复现应核对发布版本。总体趋势不等于每组每步成立，实例级仍是最难的一档，任何把平均提升推广到每个事件的说法都超出证据。

缺失证据不是技术错误，但使用时需补测阈值敏感性、检测器误差分析与推理开销统计，否则无法判断在自己场景下的真实收益。

### 何时值得尝试，复现先做什么？

当需求是按文本改动特定一声而非整轨风格化时值得尝试，例如把第二声猫叫变狮吼、让爆炸及之前更响，这正是实例级与组级控制的适用条件。若只需视频级配音，现有 HunyuanVideo-Foley 等已够用，不必引入智能体链路。复现先做三件事：按 4 步流水线重建或下载 EchoFoley-6k 并核对事件三元组字段；固定视频大模型版本并实现快慢两速观看与符号计划解析；固定声音生成与混音模块及相似度、交并比、响度分档的实现，再跑人评校准。

还需补的验证是检测器误差分析、阈值敏感性、推理开销统计。代码与权重状态应以官方页与论文声明为准，本文仅确认演示页本次可达，不推定长期可用或可运行。保留关键信息条件：视频时长范围、事件时间戳精度、属性词汇表与人评量表定义，这些是复现可比性的前提。

论文特有的误解需要澄清：同步好不等于听话，音量易控不等于时间与音色易控，免训练不等于无计算。先在小规模指令集上验证符号表的正确率，再评估端到端音频质量，可以更快定位问题在理解侧还是合成侧。

### 收束：把导演意图写成可执行的事件表

EchoFoley 把创意配音从给模型一句话改为给一系列表：何时起止、何物发声、如何发声，层级上区分单个、成组与全局，类型上区分时间、音色与音量。EchoFoley-6k 用帧描述加故事提议加人工修正提供这种表，EchoVidia 用慢快思考看准时间、用多动作写好表再合成声音。证据显示该路线在可控性上大幅领先且人耳可感知，同时暴露基线的视觉主导与细粒度衰减。

记住论文特有的判断：同步分数高不能代替指令遵循分数，细粒度控制的下跌只能靠显式事件规划缓解，而不能靠增大视觉对齐解决。下一步可验证的方向是把事件表接入端到端可训练模型，并扩展到更复杂的应用以拓宽创意生成能力。

对研究生而言，可复述的方法是输入视频与指令后，先两速观看定事件与边界，再写成符号三元组并迭代编辑，最后分层合成混音；可核对的点是 3 类可控性指标、人评 3 维与定位交并比的定义与方向。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5bb5daaf8ea9/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.pdf#page=5)

另有 18 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
