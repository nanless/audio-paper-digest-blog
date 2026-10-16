---
title: "AVC-Reward: Event-Centric Audio-Video Consistency Evaluation"
date: 2026-10-16
draft: false
tags: [视听联合质量评估, 强化学习, 基准测试, 音视频]
categories: [论文速递]
description: "论文针对联合生成中多事件、多层音频与非对称跨模态关系的一致性评价难题，提出从粗到细的三层事件级指标并做成可训练的奖励模型 AVC-Reward，在 706 样本的 AVC-Benchmark 上与人类判断最接近，并能作为在线强化学习信号提升联合生成的一致性，但提升幅度依赖评测分布与文本对齐等权衡条件。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.22321"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把音视频一致性拆成事件再打分：AVC-Reward 解读"
paper_digest_original_title: "AVC-Reward: Event-Centric Audio-Video Consistency Evaluation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.22321v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.22321v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.22321v1.pdf"
paper_digest_primary_task: "视听联合质量评估"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-quality-assessment","label":"视听联合质量评估"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对联合生成中多事件、多层音频与非对称跨模态关系的一致性评价难题，提出从粗到细的三层事件级指标并做成可训练的奖励模型 AVC-Reward，在 706 样本的 AVC-Benchmark 上与人类判断最接近，并能作为在线强化学习信号提升联合生成的一致性，但提升幅度依赖评测分布与文本对齐等权衡条件。"
paper_digest_authors: [{"affiliations":["Zhejiang University"],"name":"Yuruo Wu"},{"affiliations":["Zhejiang University"],"name":"Kaihang Pan"},{"affiliations":["Zhejiang University"],"name":"Kai Shen"},{"affiliations":["HiThink Research"],"name":"Jiacheng Li"},{"affiliations":["Fudan University"],"name":"Shuyuan Tu"},{"affiliations":["Lanzhou University"],"name":"Jisheng Dang"},{"affiliations":["Zhejiang University"],"name":"Li Tuoyu"},{"affiliations":["Zhejiang University"],"name":"Juncheng Li"},{"affiliations":["Zhejiang University"],"name":"Siliang Tang"}]
paper_digest_abstract_sha256: "fee680d55ece044343862274ec3e59bc6f352ee4771a2e094122496344ad7a00"
paper_digest_sidecars: {"citation.bib":{"sha256":"6369d47e75e307efd268296ab8434ab5f5704805b961ddbc892967a7b6875596","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-22321/citation.bib"},"citation.json":{"sha256":"d4e13973d11bd6a88ced3662b11680391e62e98315b5eea60a473a3145a01be7","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-22321/citation.json"},"citation.ris":{"sha256":"8258c2648b7664d0d45f50f5b1137932759e4552813ab61e59689107026959dc","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-22321/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"89298f80c175ac556347bd81dd55660f72545ab109ac51bb23b3d12b81a87feb","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-22321/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "7f5236efc4084b1ea8a9828208a982274471464169d316e13e4d9611103d156f"
paper_digest_api_reader_plan_sha256: "81f43b006fd8620a2c58d0fe15844f1993949856a0ffb76d33e90bd3f7c8a949"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "97f4a5c299a48ce5af2630e91bc359ef701a1f591c0099efc6c059a6a7311190"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "13331e4f5c15a98c4649bd3dae3c885e9effd43213f0d484fd6ca13e87f75623"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "77124ef413b5e431906a85f6d21a364ec7d9a18fe154a7cbdc6abea8a36b169b"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "04c079703c67292c67baeb8170abf8bbb468d99f98f35c4ab5d5970bdf670ee5"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把音视频一致性拆成事件再打分：AVC-Reward 解读

> 英文题目：*[AVC-Reward: Event-Centric Audio-Video Consistency Evaluation](https://arxiv.org/abs/2610.22321v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视听联合质量评估](/audio-paper-digest-blog/papers/?concept=task.av-quality-assessment)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Yuruo Wu：Zhejiang University
- Kaihang Pan：Zhejiang University
- Kai Shen：Zhejiang University
- Jiacheng Li：HiThink Research
- Shuyuan Tu：Fudan University
- Jisheng Dang：Lanzhou University
- Li Tuoyu：Zhejiang University
- Juncheng Li：Zhejiang University
- Siliang Tang：Zhejiang University

## 📌 核心摘要

联合音视频生成需要判断声音与画面是否讲述同一场景，输入是一段同时包含音频流与视频流的短片，输出是对一致性的判断与分数，难点是同一片段时间重叠多个事件、物理音效与旁白音乐混在一起、画外音等有效声音又缺少直接画面证据。论文把评估拆成全局叙事和谐、事件级时间同步和细粒度属性对齐 3 个 0 到 1 分的维度，先独立解析音频事件与视频事件，再双向验证每个事件在另一模态中的证据，最后汇总成判断，总体分是 3 者算术平均。基于该协议训练的音视频奖励模型（Audio-Video Consistency Reward，AVC-Reward）用约 8k 条结构化推理做监督微调冷启动，再用约 10k 条人工校准样本做群组相对策略优化（Group Relative Policy Optimization，GRPO）对齐。与整段打分或只测时间偏移的方法不同，该方法区分物理声与叙事声并逐事件核查存在性、起止对齐与材质口型等属性。在 AVC-Benchmark 上总体分与人工的 Δ-Pairwise@0.2 为 0.728，Pearson 线性相关系数（Pearson Linear Correlation Coefficient，PLCC）为 0.494，优于所列自动基线。结论适用于所覆盖的联合生成、视频到音频和音频到视频样本，对严重主观分歧与罕见叙事冲突仍有误差，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://tsuki0512.github.io/AVC-Reward.github.io/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的输入输出是什么

输入是一段已生成的带声音视频，包含完整的音频流与视频流，共享同一段时间轴。输出是对这段音视频是否一致的判断，不只给一个总分，还要分开给出 3 个维度的分数，并附带能指出哪个事件出问题的文字结论。必须保留的信息包括故事与场景是否一致、每个事件是否存在与时间是否对齐、已对齐事件的细节属性是否合理。读者可以把任务理解为质检：给定一段机器生成的音视频，检查声音与画面在叙事、时间与细节上是否配得上。

对于刚接触音视频生成的同学，关键是先分清生成与评价是两件事，本文不提出新的生成器，而是做一个更细的评价器，再把评价器当奖励去改进已有的联合生成模型。评价器本身基于支持音视频理解的多模态大模型，在统一推理过程中完成事件拆解与关系验证，而不是调用多个孤立的同步检测器。

### 已有评价路线为什么不够用

论文把已有做法分成 3 类。第一类是面向特定关系的同步指标，例如测嘴唇与语音同步、音频突变与视觉运动峰值匹配、预测音视频时间偏移，它们在原先单向任务里够用，但默认关系简单且音频是混在一起算的。第二类是嵌入相似度做法，把整段或窗口内的音频与视频编码到共享空间算相似度，主导语义一致时分数仍可能很高，会漏掉局部事件错误。

第 3 类是学习型评价器，从人工构造错误或视频转音频输出中学习偏好，但仍多在片段级打分且绑定特定任务。原文用一张对比表说明，只有本文方法是事件级评分单元、解耦音频层、按事件决定关系，其他方法多是混合音频层与预定义关系。这部分比较的输入与目标并不完全相同，因此不能简单理解为同条件胜负，而是说明旧指标的设计假设已覆盖不了新场景。

特别是当物理声与解说音乐混在一起时，不区分音频角色就直接算时间偏移，会把不需要对齐的部分也拉进来惩罚。

### 联合生成带来的三种复杂性是什么

第一是多事件组合，一段视频里可以有多个事件共同构成场景，还可能同时发生，例如厨师一边切菜一边说话，远处还有电话铃。第二是多层音频混合，音轨里既有刀碰砧板这类物理场景声，也有解说与背景音乐这类为叙事服务的声音，它们对画面的要求本就不一样。第三是非对称跨模态关系，声音与画面不一定 1 对一，合理的画外音可以没有直接可见证据，但按峰值匹配的旧规则会被判错。下面这张总览图用厨师例子把 3 种复杂性画在了一起，左侧展示视频帧与多层波形，中间展示传统做法的失效点，右侧展示本文分事件处理后如何分别给出判断。

> **看图路径：** 1. 先看左侧厨师例子中切菜、说话、解说、电话铃与环境声是如何叠加的；2. 再看中间传统做法把混合音频压成一个表征时哪里丢失了局部错误；3. 最后看右侧分事件提取与分别验证后三维分数是如何分开的

[![原论文 Figure 1：Overview of the proposed event-centric audio-video consistency evaluation framework.](https://arxiv.org/html/2610.22321v1/main-fig-cropped.png)](https://arxiv.org/html/2610.22321v1/main-fig-cropped.png)

*论文图 1。原论文 Figure 1:：“Overview of the proposed event-centric audio-video consistency evaluation framework.”。*

从像素可见，左侧标注了叙事解说、厨师说话、切菜、电话铃与餐厅环境声的分层，中间把混合音频压成一个表征并标出局部错误被掩盖，右侧先提取音频与视频事件再分别验证，最后输出 3 个分数与 chop delayed 这类具体结论。这种画法直接对应后文先拆事件再验证的流程，也解释了为什么总体相似度高不代表每个事件都对齐。

### 事件级评价的总体流程是怎样的

总体流程是先拆后验再汇总。先对音频与视频各自独立分析，得到全局描述与事件集合，避免一开始就互相干扰；再做 2 个方向的交叉验证，从音频到视频找画面证据，从视频到音频找应有的声音；最后把全局描述与验证证据汇总成从粗到细的 3 个分数。需要时把三者取算术平均得到总体分。

论文强调 3 个分数平时保持独立，只在需要一个标量做排序或做奖励时才平均，这样既能诊断是哪一层出问题，又能方便下游使用。训练与评测都围绕这套流程展开，数据标注也是按同样 5 阶段组织的。独立分析阶段还会记录说话人、音乐信息与时间定位，双向验证阶段则把存在性判断放在时间与属性兼容性之前，不适用的合理静默会被显式跳过。

### 三层一致性分数各自检查什么

全局叙事和谐比较整段的叙事内容、实体身份、场景环境与情感基调，即使局部时间碰巧对上，只要故事层面持续冲突就会扣分，合理的解说与背景音乐不要求可见声源。事件级时间同步检查每个关系的存在判断与起止对齐，包括开端、结尾、时长以及节奏类事件的对应状态，叙事层事件看语义或节奏关系是否成立，本就无声的动作记为合理静默并给满时间证据。细粒度属性对齐在通过时间验证的配对上检查物理、形态与因果反应证据，例如材质音色、能量响度、空间距离、口型手部动作、声源定位与情绪反应幅度。

**全局叙事和谐 × 事件级时间同步 × 细粒度属性对齐：** 全局叙事和谐看整段故事、场景与情感基调是否自洽，事件级时间同步看每个事件是否存在以及起止是否对齐，细粒度属性对齐看已对齐事件内部的材质、口型、动作与因果反应是否合理；三者分工是从整段到事件存在与时间再到事件内部细节，组合后既能容忍画外音等合理缺席，又能定位是故事错、时间错还是细节错。

三层是递进关系，先看整段故事通不通，再看事件有没有、对没对齐，最后看对上的事件细节像不像，材料、音色、口型这类都属于属性层，不归时间层管。举例来说，电话铃声本身清晰不代表它与画面一致，还要看人物有无反应与声源解释是否合理。

### 事件与关系记录是如何表示的

音频事件记录起止时间、类别、来源角色与声学属性，类别包括人声、音乐节奏与其他物理声音，来源角色分为物理层与叙事层，物理层还可在可观察时区分声源在画内还是画外。视觉事件记录起止时间、发声动作与形态位置，无声动作会保留为上下文但不要求配音。前 2 阶段的单模态分析结果可以写成全局与事件集合的二元组。

\[\mathcal{H}^{A}=(\mathcal{G}^{A},\mathcal{E}^{A}),\qquad\mathcal{H}^{V}=(\mathcal{G}^{V},\mathcal{E}^{V}),\]

其中 H 表示分析记录，G 表示全局场景与内容信息，E 表示事件集合，上标区分音频与视频。接下来 2 个方向的验证把一侧的事件拿到另一侧去核对。

\[\mathcal{R}^{A\rightarrow V}=F_{A\rightarrow V}(\mathcal{H}^{A},\mathcal{V}),\qquad\mathcal{R}^{V\rightarrow A}=F_{V\rightarrow A}(\mathcal{H}^{V},\mathcal{A}).\]

R 表示验证记录集合，F 表示对应方向的验证过程。最后用全局描述与验证集合算出 3 个分数。

\[S_{\mathrm{mac}}=\Phi_{\mathrm{mac}}(\mathcal{G}^{A},\mathcal{G}^{V}),\qquad S_{\mathrm{temp}}=\Phi_{\mathrm{temp}}(\mathcal{R}),\qquad S_{\mathrm{attr}}=\Phi_{\mathrm{attr}}(\mathcal{R}).\]

Phi 表示多模态大模型按 3 套标准做出的判断。关系记录的形式是音频事件、视觉事件与关系证据的三元组，任一侧可为空，以容纳缺失证据与不对称关系。

**音频事件 × 视觉事件 × 关系记录：** 音频事件记录时间段、类别、来源角色与声学属性，视觉事件记录时间段、发声动作与形态位置，关系记录把两者配对并注明验证证据与关系类型；前两者是单模态拆解，后者是跨模态核验，组合后才能分别处理重叠事件与一对多、多对一的不对称关系。

这种表示的好处是重叠事件各有自己的时间段与证据，后续打分可以逐事件读证据，而不是把整段压成一个向量，因此并发的乐器与人声可以分开验证。

### 双向验证时证据标准有何不同

从音频到视频的方向，对每个音频事件在其时间窗内找画面证据，短事件直接看对应动作，连续事件看区间内最小可见证据，找不到可见源先保留为证据而不是直接判错，留给后面对画外音与叙事层的推理。从视频到音频的方向，先判断该视觉动作是否应发声，本就无声记为合理静默，发声动作再查声音、时间与物理兼容性。存在判断按来源角色区分，在屏物理事件需双向证据支持，画外物理事件需合理且后果一致，叙事层事件需语义或节奏角色恰当，自然无声动作也算通过。

**物理层音频 × 叙事层音频 × 合理静默：** 物理层音频指画面世界内发出的声音，需要找可见或可推断的声源，叙事层音频指解说与背景音乐等后配声音，只需语义或节奏合理，合理静默指本就无声的动作缺声是正常的；区分三者是为了让不同音频层适用不同的时间与属性要求，避免把不需要对齐的音乐也按敲击声去卡时间。

举例说，切菜声要看到刀与砧板的动作与时间对应，电话铃没有画面但厨师转头等反应合理也可接受，背景音乐只要情绪与场景相配就不要求找到乐队。这种条件判断避免了对所有声音套用同一套可见性与同步标准。

### 训练数据与两阶段训练是如何组织的

数据分两池。结构化推理池从通用与以人为主的真实片段出发，经质量与事件筛选后，用不同生成范式构造联合生成、视频转音频、音频驱动视频样本，加上真实片段，共 11.5k 候选，过滤后保留约 8k 用于监督微调。人类校准池从 JavisBench 出发，采样真实与多种生成来源共 16k 候选，经难度估计、聚类去冗余与跨簇换音轨构造全局负例，按 3 比 1 抽出 10k 用于组相对策略优化。

标注流水线分 5 个阶段，先后用 Gemini 2.5 Pro 与 Qwen3-VL-Max 做音频与视频分析及双向验证，静音检测提供时间线索，最后再看原片汇总成 3 维分数与诊断结论，再由 Qwen3-235B 改写成训练用思维链。人类标注先用 39 类标签记录显式状态与失败类型，再映射为连续分数，以减少直接打分的主观漂移。下图展示了从数据池到两路监督再到奖励训练与生成优化的完整链路。

> **看图路径：** 1. 沿左侧数据池到中间两路监督的箭头看结构化推理与人类校准分从哪里来；2. 看监督微调与组相对策略优化在训练链条上的先后位置；3. 看右侧生成侧如何把原奖励替换为总体分数并回路优化生成器

[![原论文 Figure 2：Overview of data construction, reward-model training, and generation-side optimization.](https://arxiv.org/html/2610.22321v1/fig-2.png)](https://arxiv.org/html/2610.22321v1/fig-2.png)

*论文图 2。原论文 Figure 2:：“Overview of data construction, reward-model training, and generation-side optimization.”。*

图中左侧是数据池与两路监督，中间是从 Qwen3-Omni-Thinking 出发先监督微调学推理结构、再用人类校准分做组相对策略优化，右侧是把原框架中的 DeSync 奖励替换为总体分去优化 LTX-2。像素上可以看到 5 阶段标注、结构化推理数据与人类校准分数两条箭头分别进入监督微调与组相对策略优化。

**监督微调 × 组相对策略优化：** 监督微调负责冷启动，让模型学会五阶段结构化推理的格式与事件验证流程，组相对策略优化负责人类对齐，用结构奖励保格式、用分数蒸馏奖励拉近三维分数与人类校准分；两者搭配是先学会按步骤说理，再把打分偏好调到与人一致。

监督微调做一轮全参数微调，组相对策略优化用结构奖励保 5 阶段格式、用高斯核分数蒸馏奖励拉近预测与人类校准分，格式不合格时还会截断总奖励，避免空有分数但无过程。

### AVC-Benchmark 如何构造与如何打分

基准的动机是衡量自动指标与人类感知在真实生成场景下的一致程度。样本主要来自多种生成模型的输出，覆盖音频驱动视频、视频转音频与联合生成，再加少量受控负例以补足少见失败。每样本由 3 名标注员独立按 39 类标签先选标签后打分，3 个维度各按 0 到 1、步长 0.1 打分，训练与测试在样本与标注员上都不重叠。人类参考分先对每名标注员做维度内标准化，再做 3 维联合归一，最后平均 3 人得到维度分与总体均值。

评价用成对准确率、阈值版成对准确率、斯皮尔曼与皮尔逊相关，阈值版只保留人类分差大于阈值的对，主阈值为 0.2，皮尔逊计算前会拟合五参数逻辑映射以对齐感知非线性。

**成对准确率 × 斯皮尔曼等级相关 × 皮尔逊线性相关：** 成对准确率看模型对样本对的排序是否与人类排序一致，阈值版只保留人类分差足够大的对以减少主观抖动，斯皮尔曼等级相关看整体排序单调性，皮尔逊线性相关经逻辑映射后看数值线性贴合度；三者组合是既看关键差别的判断对错，也看全集排序与分数刻度的贴合。

下表整理了基准的来源构成，数字来自原文对样本划分的描述句，便于复述各范式占比与受控负例的作用。

| 数据来源 | 样本数 |
| --- | --- |
| Ground truth | 172 |
| JAVG | 243 |
| A2V | 100 |
| V2A | 72 |
| explicit-negative construction set | 119 |
| 合计 | 706 |

该构成说明基准以模型生成样本为主，同时保留真实片段与显式构造负例，显式负例通过换音轨、叠音轨、移位、删除事件、冻结画面、改音色等方式补足受控语义与时间错误。基准统计还显示多数样本保留较高的全局一致性，时间与属性维度分数分布更宽，多事件、多层音频与多样关系 3 类复杂性子集是非互斥的。

### 与人类判断的一致性结果如何

在 706 样本上，比较对象包括基于时间的同步指标、基于嵌入相似度的指标、学习型跨模态评价器与零样本通用多模态裁判，以标注员间一致作为人类上界。阈值版成对准确率与皮尔逊相关是主要指标。总体上本方法在 4 个指标上都是自动方法中最好的，且随阈值增大而保持领先，符合人类分差越清晰越好判的预期。下图展示了不同阈值下的成对准确率曲线。

> **看图路径：** 1. 横轴是人类分差阈值，纵轴是成对准确率，先确认阈值越大保留的对越清晰；2. 比较橙色本方法曲线与其他基线随阈值上升的斜率差异；3. 注意最上方人类上界曲线与所有自动方法的间隔

[![原论文 Figure 3：Pairwise accuracy under different margin thresholds Δ.](https://arxiv.org/html/2610.22321v1/fig6-1.svg)](https://arxiv.org/html/2610.22321v1/fig6-1.svg)

*论文图 3。原论文 Figure 3:：“Pairwise accuracy under different margin thresholds Δ. Larger Δ keeps pairs with clearer human-score differences.”。*

从像素可见，横轴是人类分差阈值，纵轴是成对准确率，最上方是人类上界曲线，橙色本方法曲线明显高于其他自动方法，且在 0.2 阈值附近已拉开差距，其他基线则挤在中部缓慢上升。下表是主结果的完整对照，包含各类基线与人类上界，便于核对每个指标的方向与差距。

| Method | Pairwise ↑ | Δ-Pairwise ↑ | PLCC ↑ | SRCC ↑ |
| --- | --- | --- | --- | --- |
| Timing-based synchronization |  |  |  |  |
| AV-Align (Yariv et al., 2024) | 0.577 | 0.674 | 0.301 | 0.215 |
| DeSync (Iashin et al., 2024) | 0.521 | 0.580 | 0.280 | 0.061 |
| Embedding similarity |  |  |  |  |
| ImageBind (Girdhar et al., 2023) | 0.556 | 0.625 | 0.219 | 0.154 |
| JavisScore (Liu et al., 2025) | 0.554 | 0.611 | 0.180 | 0.147 |
| AVHScore (Mao et al., 2024) | 0.540 | 0.595 | 0.171 | 0.110 |
| Learned cross-modal consistency evaluators |  |  |  |  |
| PEAVS (Goncalves et al., 2024) | 0.491 | 0.505 | 0.075 | -0.026 |
| AVSyncEvaluator (Qian et al., 2026) | 0.502 | 0.554 | 0.108 | 0.007 |
| AV-Consistency Evaluator (Yang et al., 2026a) | 0.562 | 0.664 | 0.286 | 0.173 |
| AGAV-Rater (Cao et al., 2025) | 0.580 | 0.646 | 0.261 | 0.226 |
| Zero-shot general MLLM judges |  |  |  |  |
| Gemini-3.1-Pro (Google DeepMind, 2026) | 0.542 | 0.616 | 0.246 | 0.118 |
| Qwen3-Omni-Instruct (Xu et al., 2025) | 0.548 | 0.589 | 0.257 | 0.136 |
| Qwen3-Omni-Thinking (Xu et al., 2025) (base) | 0.555 | 0.605 | 0.347 | 0.154 |
| AVC-Reward (Ours) | 0.586 | 0.728 | 0.494 | 0.244 |
| Human Upper Bound | 0.756 | 0.920 | 0.781 | 0.497 |

本方法的优势在多事件与多层音频子集上更明显，在多样关系子集上对基座模型的领先幅度变小，说明事件拆解对重叠与分层最有帮助，而画外与叙事等非平凡关系仍是难点。人类上界远高于所有自动方法，说明任务本身仍有很大空间。另一个细节是单维度分数不如 3 维平均，支持三者互补。下面这张理解案例图展示了分数如何贴近人类并定位问题。

> **看图路径：** 1. 左侧先看木偶多层音频与双人对话单语音流两个理解案例的分数与结论；2. 右侧再看狗猫先后发声与切菜解说两个生成案例的嘴部与动作变化；3. 对照同一案例中基线与本方法的文字说明差异

[![原论文 Figure 5：Representative cases. Left: AVC-Reward produces scores closer to human judgments and identifies…](https://arxiv.org/html/2610.22321v1/fig-3.png)](https://arxiv.org/html/2610.22321v1/fig-3.png)

*论文图 5。原论文 Figure 5:：“Representative cases. Left: AVC-Reward produces scores closer to human judgments and identifies specific consistency issues. Right: generation results of LTX-2, OmniNFT, and Ours.”。*

左上木偶案例同时有说话、工厂环境声与背景音乐，本方法给出接近人类的高分并解释音乐是常见影视惯例，基线分数偏离较大；左下双人画面但只有一路清晰语音，本方法给出偏低分并指出只有女性声音与其中 1 人匹配；右侧狗猫先后发声与切菜解说案例显示优化后嘴部开合与切菜动作更完整。

### 作为强化学习奖励能带来什么生成改进

生成侧在 OmniNFT 框架下保持整体不变，只把原音频视频奖励从 DeSync 换成本方法的总体分，并调整学习率与权重以保证优化强度可比，训练分 2 阶段先强后弱。评测避开训练用过的提示集，改用 3 个新提示集，并同时报告一致性、文本对齐与单模态质量。下表是 3 个基准上的一致性指标对照，增益行是相对 LTX-2 的相对变化。

| (a) AV consistency |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Model | AVC-Score↑ | DeSync↓ | IB-AV↑ | AV-align↑ | Javis↑ | AVH↑ | CAVP↑ |
| AV-Phys-Bench |  |  |  |  |  |  |  |
| LTX-2 | 0.756 | 0.376 | 0.234 | 0.158 | 0.189 | 0.226 | 0.812 |
| OmniNFT (DeSync) | 0.780 | 0.073 | 0.248 | 0.213 | 0.193 | 0.233 | 0.819 |
| OmniNFT gain | +3.26% | +80.60% | +5.84% | +34.17% | +1.96% | +2.91% | +0.88% |
| Ours (AVC-Reward) | 0.819 | 0.081 | 0.288 | 0.246 | 0.228 | 0.276 | 0.818 |
| Ours gain | +8.35% | +78.44% | +22.92% | +55.50% | +20.47% | +22.00% | +0.71% |
| VABench |  |  |  |  |  |  |  |
| LTX-2 | 0.764 | 0.421 | 0.216 | 0.185 | 0.177 | 0.207 | 0.805 |
| OmniNFT (DeSync) | 0.791 | 0.097 | 0.256 | 0.217 | 0.207 | 0.244 | 0.815 |
| OmniNFT gain | +3.54% | +76.97% | +18.68% | +17.19% | +16.65% | +18.24% | +1.31% |
| Ours (AVC-Reward) | 0.850 | 0.063 | 0.277 | 0.295 | 0.223 | 0.262 | 0.814 |
| Ours gain | +11.17% | +85.03% | +28.35% | +59.47% | +25.65% | +26.80% | +1.15% |
| AVGenBench |  |  |  |  |  |  |  |
| LTX-2 | 0.786 | 0.288 | 0.257 | 0.246 | 0.189 | 0.231 | 0.803 |
| OmniNFT (DeSync) | 0.808 | 0.074 | 0.295 | 0.225 | 0.217 | 0.262 | 0.816 |
| OmniNFT gain | +2.76% | +74.31% | +14.86% | -8.37% | +14.92% | +13.20% | +1.66% |
| Ours (AVC-Reward) | 0.849 | 0.089 | 0.310 | 0.292 | 0.243 | 0.286 | 0.814 |
| Ours gain | +8.02% | +69.27% | +20.65% | +18.78% | +28.74% | +23.98% | +1.32% |

本方法在 IB-AV、AV-Align、JavisScore 与 AVHScore 上都有明显提升，且未直接优化 DeSync 仍取得可比的 DeSync 下降，说明泛化到未见指标；CAVP 变化不足 1.7%，区分度有限。代价是文本对齐可能轻微下降，因为文本与音视频目标不完全一致，但 ImageBind 下音视频增益大于文本对齐的下降，单模态质量与原框架相当。人类盲评中本方法在一致性与总体质量上都获得最高支持率，但这是在 100 个提示、每案 3 人评价、允许双选与平局的规则下成立的，不能推广为所有提示都更好。

### 训练策略与分数聚合的消融说明什么

训练策略比较基座、只做组相对策略优化、只做监督微调与两者结合，分数聚合比较单用 1 维与 3 维平均。只看阈值版成对准确率与相关系数时，结合两者最好，说明结构化推理监督与人类偏好对齐各有增益。下表还显示单维分数不如 3 维平均，支持总体分取均值的做法。

| Label configuration | Pairs | Mean diff. | Median diff. |
| --- | --- | --- | --- |
| Same | 6,717 | 0.0321 | 0.0111 |
| Different | 242,148 | 0.2002 | 0.1000 |

监督微调带来的结构化过程是后续对齐的基础，只做组相对策略优化提升有限；3 维平均优于任一单维，说明全局、时间与属性确实互补。但消融只报告了总体贴合度，没有拆到多事件与多层音频等子集，也没有报告训练不稳定或失败的超参数范围，因此不能断言该组合在所有数据分布下都最优。标签到分数映射的可靠性也有单独验证：相同标签配置的样本对平均分差远小于不同配置，这为用大模型把标签改写为连续分提供了依据，但改写仍有额外误差，略大于标注员间差异。

### 结论在什么条件下才成立，有哪些局限

与人类更对齐的结论成立于 AVC-Benchmark 的分布下，即以模型生成样本为主、含受控负例、每样本 3 人标注并用阈值版成对准确率聚焦明显差异的条件下成立，换分布或换阈值时排序可能变化。生成改进成立于 LTX-2 加 OmniNFT 框架、替换奖励并做 2 阶段权重调整的条件下成立，且外部指标提升不等于每条提示都更好，文本对齐的轻微下降需要一并报告。方法本身依赖多模态大模型的感知与推理能力，标注流水线的误差会跨阶段累积，人类校准虽能拉近分数但改写仍是近似。

论文未报告推理延迟、显存与训练算力的完整成本，也未测量误判率随阈值与场景的变化，因此不能承诺更准就一定更快或更便宜。来源方面，项目页当前可访问只说明论文提到的第三方页面可达，不等于作者已开源全部代码与权重，复现前需分别确认代码、权重与数据许可。

### 如果要复现，第一步做什么

第一步先固定评测协议：按原文用 3 人独立标注、标签先行再打分的方式构造参考分，对每名标注员做标准化与归一后再平均，总体分取 3 维均值，评价用阈值 0.2 的成对准确率为主、斯皮尔曼与经逻辑映射的皮尔逊为辅。数据上先收集多范式生成样本并保留真实片段，再按标签配置分层与嵌入聚类去冗余，最后补少量换音轨、移位与删事件等受控负例。

模型上从支持音视频理解的基座出发，先用约 8k 结构化样本做一轮全参数监督微调学会 5 阶段格式，再用约 10k 人类校准样本做组相对策略优化，结构奖励保格式、分数蒸馏奖励对齐分数。生成优化时保持原框架不变，只替换奖励并做学习率与权重适配，避免把提示集泄露进训练。关键超参数按原文记录，如监督微调峰值学习率与组相对策略优化的组大小与步数，缺失的推理开销与随机种子等需自己补测并报告。

### 什么时候值得尝试，还需要补哪项验证

当你的生成结果已出现多人多声、解说音乐混叠或画外音被误判时，值得尝试这种先拆事件、区分音频层再双向验证的评价思路，它能给出可定位的文字结论，而不只是一个总分。当你需要把评价当奖励做在线优化时，可参考本文只换奖励、保留框架的做法，并同时监控文本对齐与单模态质量。还需要补的验证包括在新提示集与新生成器上的泛化测试、对多样关系子集的细拆评估、以及结构奖励权重与蒸馏温度等关键选择的敏感性分析。

容易误解的是，把混合音频一起算时间偏移在简单场景有效，不等于在多层混合下仍有效；总体分是 3 维均值，不等于三者重要性永远相等；自动指标提升不等于人工处处更喜欢，人类盲评的平局与双选规则会影响支持率的解读。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.22321v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
