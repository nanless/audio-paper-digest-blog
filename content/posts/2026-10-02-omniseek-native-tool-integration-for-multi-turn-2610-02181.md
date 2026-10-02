---
title: "OmniSeek: Native Tool Integration for Multi-turn Audio-Visual Reasoning"
date: 2026-10-02
draft: false
tags: [音视频问答, 工具增强与约束解码, 音视频, 数据集, 强化学习]
categories: [论文速递]
description: "OmniSeek 把音视频问答改为主动多轮取证循环，用 OmniTraj-170K 冷启动再加两阶段强化学习约束双模态依赖，在长视频多跳基准上提升明显，但超长音频仍受上下文窗口限制。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.02181"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "不一次看完整视频：OmniSeek 把找证据变成多轮听看动作"
paper_digest_original_title: "OmniSeek: Native Tool Integration for Multi-turn Audio-Visual Reasoning"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.02181"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.02181.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.reinforcement","label":"强化学习"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "OmniSeek 把音视频问答改为主动多轮取证循环，用 OmniTraj-170K 冷启动再加两阶段强化学习约束双模态依赖，在长视频多跳基准上提升明显，但超长音频仍受上下文窗口限制。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Haibo Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiteng Mu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jialu Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jingru Yi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuanjun Xiong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jianming Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lifu Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mingze Xu"}]
paper_digest_abstract_sha256: "e82f54da94ecbabf62b59846af80c19546830dbd3527f893619739d1cd221094"
paper_digest_sidecars: {"citation.bib":{"sha256":"d23d49ddc4d0d0faec5b87f31e0a9a899ac2e6ae2017cd7f64e0ab0763a1d932","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-02181/citation.bib"},"citation.json":{"sha256":"72ce14b64eaf7e9f72c5660bb29292c36d35f5f76924ba92ec724c677205e9c8","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-02181/citation.json"},"citation.ris":{"sha256":"701e408d19f011f82e19a77d89f18d7527b69451549b01def1b8a731712e171e","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-02181/citation.ris"},"rethink-context.json":{"sha256":"ca019f7ab6a05b06af593967ad289a1d98691d27791052111174ab46c173f53a","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-02181/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "efa41f8ba51d49f0ecd4fc8b18d337df826d17fca8513236d3ef34b199b2c527"
paper_digest_api_reader_plan_sha256: "0da379f6026507d89241f2810981e12a6efa5a53b22d7539f27fa18cc15ecc2b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "fafd95c028e135e6270a8d2c53e5214f97334c6fce23c862f3e1ceeeb1ade8eb"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "cb4f5c68da2aada71b56478cc9e04e9a90adec740509183175eeff16c8cd3f6f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9ac6a09338c1357b2ffe49d945694c9969db29ba850f3ee9aa2c9c05f7d2ddb9"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "504c05265f272215d9e4a3142c44a3dadd8a38a750a0fc0be722ae66bab4ee53"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 不一次看完整视频：OmniSeek 把找证据变成多轮听看动作

> 英文题目：*[OmniSeek: Native Tool Integration for Multi-turn Audio-Visual Reasoning](https://arxiv.org/abs/2610.02181)*

> 标签：#音视频问答 | #工具增强与约束解码 | #音视频 | #数据集 | #强化学习
>
> 评分：**7.4/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Haibo Wang：机构信息未在 arXiv HTML 中可靠披露
- Jiteng Mu：机构信息未在 arXiv HTML 中可靠披露
- Jialu Li：机构信息未在 arXiv HTML 中可靠披露
- Jingru Yi：机构信息未在 arXiv HTML 中可靠披露
- Yuanjun Xiong：机构信息未在 arXiv HTML 中可靠披露
- Jianming Zhang：机构信息未在 arXiv HTML 中可靠披露
- Lifu Huang：机构信息未在 arXiv HTML 中可靠披露
- Mingze Xu：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

输入为同步长视频与音频流加自然语言问题，输出为多选或开放答案，难点在于关键听觉事件与视觉细节稀疏散布且跨时间远距离依赖，单遍粗采样易稀释细粒度证据并退化为单模态捷径。该方法先以解耦双轨对齐抽取带绝对时间戳的视觉稠密描述与语音转写，再基于双轨上下文规划含音频与视频跨度的有序证据链并组装成思考调用观察交错轨迹。接着以监督微调冷启动多轮工具协议，随后两阶段分组序列策略优化探索自主取证，并以音视频必要性奖励强化双模态依赖。相对文本思维链与单轮耦合检索的差异在于按推理状态异步路由模态与时间窗，并将原始高分辨率片段回填上下文实现由粗到精复核。在VideoHolmes基准下，OmniSeek的准确率为74.6%，高于Base Model的准确率59.1%。适用边界为中等长度强跨模态依赖问答，对数小时级音频过长导致的上下文溢出与指令坍缩尚未解决。训练使用 32卡与 128卡 H200 及数万轮采样推理，部署时多轮高分辨率取证带来显著上下文与延迟开销。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么长音视频不能一次看完？

这篇论文的输入是一个视频及其同步音频，外加一个需要跨模态组合才能回答的问题。目标是输出正确选项或答案，关键是证据分散在不同模态和不同时刻，例如一句话提到的方法要与远处几分钟的画面对应起来。刚入门容易以为把全部音视频均匀采样丢给大模型就行，但原文指出的问题是上下文变长后，细粒度视觉细节和短暂声音会被无关内容稀释，模型难以隔离并组合本来就存在的证据，转而依赖语言先验或单模态捷径。

论文把这种失败归为被动感知。被动指模型只做 1 次前向编码，全局粗采样后不再回看原始信号。近期一些只在文字层面延长链式思考的方法，也没有重新访问原始音视频信号，或者把取回的证据转成文字描述再推理。于是作者提出把取证据本身变成推理的一部分：模型在思考过程中决定是否要听、是否要看，以及在哪个时间窗取。对于研究生来说，复述时要保留 3 个信息：初始全局上下文是粗粒度的。

后续工具取回的是更细粒度的原始片段；终止条件不是固定轮数，而是模型自评证据是否足够。

### 同输入同目标的前人路线有何不同？

如果按同输入、同目标、同运行阶段来对照，前人可以分成两条线。第一条是会思考的图像与视频模型，例如用放大裁剪做空间主动检查，以及把视频理解做成由粗到细的多轮时间定位。这类工作证明了主动检索有用，但大多只处理视觉一侧，没有同时调度音频和视觉。第二条是全模态大模型，例如统一处理文本图像视频音频的系列模型，以及为降低长序列开销做的 token 压缩。它们把感知统一了，但在推理上仍多为单次编码或单轮检索。

OmniSeek 与它们的区别在原文有明确表述：它采用迭代多轮工具协议做动态独立模态路由，而不是耦合模态或单轮检索，也不是只生成文字推理链。教学上可以这样记：前人解决看得见、听得见，OmniSeek 解决何时听、何时看、看哪里、什么时候停。相关工作不是同条件胜负表，而是说明为什么需要一个新的数据引擎和新的奖励来启动这种行为。

### 任务到底要求模型做什么动作？

把任务拆成可执行的动作更清楚。模型先读入完整序列的粗采样全局上下文，然后进入循环。每一轮先思考当前缺什么，再调用工具取一段音频或视频，观察返回的原始片段并追加进上下文，再决定下一轮取什么或直接回答。举一个教学用的例子：问题问博主靠什么策略多吃不胀，模型可以先听一段提出问题的音频，再看一段展示食物的视频，再跳到结尾看跑步画面，最后听解释每天跑 2 次的音频，这只是帮助理解流程的例子，不代表论文只处理这类生活视频。

需要保留的约束是每条证据链必须同时包含音频和视频，论文在数据构造阶段强制了这一点。评测时问题多为选择题，用准确率衡量，方向是越高越好。理解这个任务的关键是检索顺序是逻辑顺序而非时间顺序，模型可能先定位线索再找答案承载段，也可能跨越很远的时间距离组合证据。

### OmniSeek 全景：沿一个样本走完输入到输出

先沿一个样本走一遍。输入是长视频加同步音频，模型先做粗采样得到全局上下文。第一步思考判断全局信息不够，需要先听某段时间建立问题背景，于是调用取音频工具。观察返回音频文字后，思考发现需要确认食物规模，于是调用取视频工具并指定更高帧率与分辨率。观察返回食物画面后，思考跳转到结尾跑步场景，再调用取音频工具听清每天跑 2 次的解释，最后综合输出答案。整个过程的原始片段都留在上下文里，后续思考可以直接引用。

**Omni-LLM × 主动证据获取：** Omni-LLM 负责同时理解文本、音频和视觉并生成思考与答案，主动证据获取负责在推理过程中决定看哪个模态、看哪段时间；二者搭配的原因是单次粗采样会稀释细粒度线索，组合后模型可以在全局上下文之外按需补取高精度片段，形成边想边取的闭环。

下面这张图就是上述循环的可视化，顶部是连续帧与波形，中间是问题与选项，下方是交替的思考调用观察卡片，箭头表示多跳推进。

> **看图路径：** 1. 先看顶部视频帧带与波形带确认输入是长时音视频流；2. 再看下方五个 think-tool-observe 卡片如何交替调用音频和视频工具；3. 观察每次 observe 返回的是原始片段文字与缩略图而非一句话描述；4. 最后看答案如何综合早上跑步与晚上跑步两条线索

[![原论文 Figure 1：Interleaved Multi-turn Audio-Visual Reasoning.](https://arxiv.org/html/2610.02181v1/fig_intro.png)](https://arxiv.org/html/2610.02181v1/fig_intro.png)

*论文图 1。原论文 Figure 1:：“Interleaved Multi-turn Audio-Visual Reasoning.”。*

从图中可以看到的教学要点是：工具调用参数带有明确起止时间，音频观察返回说话内容，视频观察返回关键帧缩略图，思考节点负责承上启下。模型不是按时间顺序从头看到尾，而是按逻辑需要跳跃取证。这种设计让注意力可以跨模态路由，避免把所有希望寄托在 1 次全局编码上。

### 两个工具与必要性奖励如何计算？

工具层只有两个操作。取音频操作按开始与结束时间隔离目标音频段，取视频操作按时间边界取局部片段，并在调用时自定更高采样帧率和空间分辨率，实现由粗到细的视觉检查。原文强调这是异步解耦设计，允许先取一段音频线索，再去完全不同的视频时间段找互补视觉证据。终止靠模型在思考中自评证据链是否充分，需要就继续调用，充分就输出答案。

**get_audio_clip × get_video_clip：** get_audio_clip 分工是按起止时间截取目标音频段，get_video_clip 分工是按起止时间加自选帧率和分辨率取回局部视频段；二者解耦搭配是为了允许跨模态、跨时间异步检索，组合意义是先听后看或先看后听都可以，支持由粗到细的检查。

奖励层要解决投机问题。只按答案对错给分时，只用一个模态猜对与真正用两个模态会得到同样信用。于是论文引入音频视觉必要性奖励，用注意力遮蔽来估计依赖程度。做法是固定已采样的轨迹，做 2 次辅助前向：1 次遮掉音频键，1 次遮掉视觉键，比较生成每个回答 token 的对数似然下降。下降越大说明越依赖被遮掉的模态。

先看每个 token 对两种模态的似然差定义，符号中完全上下文似然减去遮蔽后似然即为必要性增量。

\[\Delta^{A}_{t}=\ell^{\mathrm{full}}_{t}-\ell^{\backslash A}_{t},\quad\Delta^{V}_{t}=\ell^{\mathrm{full}}_{t}-\ell^{\backslash V}_{t}.\]

上式中下标 t 是回答中的 token，完全上下文包含视觉与音频，遮蔽后只保留另一模态。然后对所有思考与答案 token 取正部平均，因为负值多为 token 竞争而非反 grounding，接近零的值多为模板词。

\[\mathrm{nec}_{A}=\frac{1}{|\mathcal{M}|}\sum_{t\in\mathcal{M}}\big[\Delta^{A}_{t}\big]_{+},\quad\mathrm{nec}_{V}=\frac{1}{|\mathcal{M}|}\sum_{t\in\mathcal{M}}\big[\Delta^{V}_{t}\big]_{+}.\]

最后用取小作为逻辑与，只按较弱模态计分，并乘以答案正确指示变量，保证只在答对时强化双模态依赖，且只需 2 次免梯度前向，不用额外采样。

\[r_{\mathrm{avn}}=c\cdot\min\!\big(\mathrm{nec}_{A},\ \mathrm{nec}_{V}\big),\]

下图展示了这种遮蔽的结构，三行分别是不遮蔽、遮蔽视觉 token、遮蔽音频 token，其余序列保持不变以减少分布偏移。

> **看图路径：** 1. 先看左侧策略 rollout 产生多条轨迹 o1 到 oG；2. 再看右侧三行分别对应不遮蔽、遮蔽视觉、遮蔽音频；3. 观察被遮蔽的绿色视频块与蓝色音频块位置是否只动一种模态

[![原论文 Figure 4：Audio-Visual Necessity. We measure audio-visual dependence through modality-specific attention…](https://arxiv.org/html/2610.02181v1/fig_avn.png)](https://arxiv.org/html/2610.02181v1/fig_avn.png)

*论文图 4。原论文 Figure 4:：“Audio-Visual Necessity. We measure audio-visual dependence through modality-specific attention masking.”。*

从像素上可以确认，被遮蔽块用斜线标记，绿色视频块与蓝色音频块交替出现，文字块保持不动。这说明干预只动一种模态的键，符合原文减少特征替换带来偏移的安排。

**准确率奖励 × Audio-Visual Necessity 奖励：** 准确率奖励分工是判断最终答案是否与标准答案一致，Audio-Visual Necessity 奖励分工是度量成功轨迹对音频和视觉的同时依赖程度；搭配原因是只奖对错会纵容单模态猜对，组合后用取小操作要求两个模态都不可缺，抑制幻觉式 grounding。

### OmniTraj-170K 三阶段引擎与三阶段训练如何衔接？

数据引擎分 3 段。第一段做结构化音视频对齐，视觉侧用场景检测切分镜头再合并到约 15 秒的连贯场景，逐场景生成带时间戳的密集视觉描述并加全局描述保持实体一致，音频侧用原视频语音转写或专用音频描述模型得到带时间戳的语音内容，所有事件锚定到绝对时间。

第二段生成证据 grounded 问答，明确要求同时用音频和视频才能回答，每个问题带 2 到 7 个证据段，至少各含一个音频段和一个视频段，文本与时间戳从第一段直接复制，顺序是逻辑检索顺序而非时间顺序。第 3 段组装交错轨迹，工具调用与观察按证据链确定性构造，大模型只负责生成桥接的思考节点，首个思考做检索规划，中间思考复述刚取回片段并规划下一跳，最后思考综合证据引出答案。

**OmniTraj-170K × 三阶段训练：** OmniTraj-170K 分工是提供带交错音视频证据的多轮推理示范，三阶段训练分工是先模仿格式再用强化学习探索策略并聚焦难例；搭配原因是只模仿容易学到单模态捷径，组合后冷启动解决会调用工具，强化学习解决何时调用更有效。

下面是数据引擎总览图，左侧是切分与描述，中间是问答与证据链，右侧是多轮轨迹的 JSON 结构。

> **看图路径：** 1. 先看 Stage-1 左右两路如何分别产生视觉事件与语音转写；2. 再看 Stage-2 证据链如何用 modality 与 timestamp 固定每条证据；3. 观察 Stage-3 右侧 JSON 如何把 think 与 tool_call 按逻辑顺序交错

[![原论文 Figure 2：Overview of OmniTraj-170K data engine.](https://arxiv.org/html/2610.02181v1/fig_data_pipeline.png)](https://arxiv.org/html/2610.02181v1/fig_data_pipeline.png)

*论文图 2。原论文 Figure 2:：“Overview of OmniTraj-170K data engine.”。*

图中 Stage-1 可以看到按秒切分的时间区间与视觉事件示例，Stage-2 可以看到问题类型与证据的模态时间戳，Stage-3 可以看到 turn1 与 turn2 如何把思考调用观察打包。这种把推理与执行解耦的做法是为了避免模型幻觉工具调用。

训练分 3 个阶段。第一阶段在 OmniTraj-170K 上监督微调，但为保护泛化只用 10% 的交错工具轨迹，其余 90% 是标准单轮问答，主要学格式与跨轮注意力路由。第二阶段用强化学习在可验证答案数据上探索，数据是三万道多选加一千道难例视频训练切分，奖励是准确率加格式加工具使用三项和，工具奖励只在调用工具且答对时给。第 3 阶段在第一阶段数据上挖掘失败难例组成 8000 类平衡子集，加大采样数并加入必要性奖励，奖励变为四项和。基础模型是 Qwen3-Omni-30B-A3B-Instruct，视觉与音频编码器冻结。

为核对数据规模，先看语料总览表的比较问题：在相同计数口径下，轨迹数、视频数与工具调用分布是否支持多跳训练？下表用原文连续句整理，单位与精度保留原文。

| 条件 | 指标 | 报告值 | 补充分布 | 适用阶段 |
| --- | --- | --- | --- | --- |
| OmniTraj-170K 全集 | 轨迹与视频数 | 169725 条轨迹，39797 个视频 | 覆盖 19 种跨模态问题类型 | 冷启动监督 |
| 多跳复杂度 | 每轨迹工具调用数 | 76.1% 需 2 次调用 | 其余 23.9% 需 3 次或更多 | 强化学习探索 |

表后需要说明代价与边界。多数轨迹只需 2 次调用意味着冷启动偏向短链，少数长链靠后阶段难例挖掘补足。证据段大多 3 到 10 秒且分布全视频，来源视频从 1 分钟以内到数十分钟，类别覆盖教育科学新闻体育等一百余类。未报告的是每种问题类型的精确题数分布与采样权重，复现时不能假设均匀采样。

### 在什么数据、基线与协议下比较？

评测覆盖 10 个音视频基准与 4 个通用视频基准。音视频侧包括日常生活跨模态时间推理、音频中心理解、真实世界全模态理解、未来预测、人工验证测试集、悬疑短片多线索推理、严格音视频关联、大规模协同推理、长复杂视频多任务以及长时全模态理解。通用侧包括多领域视频分析、长视频理解、多任务长视频与极长视频理解。原文附录对每个基准的视频数、问题数与平均时长有交代，复述时要保留时长差异，因为长短直接影响是否需要多轮取证。

比较基线包括闭源模型、视觉-only 模型与音视频模型，以及同为三十亿量级的文字链式思考变体。关键公平条件在原文有两处明确说明：一是训练用的视频与评测集在问题与视频层面严格不重叠；二是通用视频基准采用单轮直接回答而不调用工具，以检验基础感知是否被破坏。指标多为选择题准确率，方向越高越好。硬件与超参数在附录表给出，冷启动与 2 阶段强化学习的学习率、批量、轮数与最大交互轮数都有记录，复现时应按该表设置而非按模型名猜测。

原文未报告的是统计显著性方法与多次运行方差，也未给出推理延迟与 token 开销的完整测量。讨论成本时只能说训练用了数十到上 100 卡，推理多轮必然增加前向次数，不能承诺延迟改善。

### 主结果：在哪些问题上取证真正带来增益？

要回答的核心问题是：在证据稀疏的长视频上，主动取回原始片段是否优于只延长文字思考？公平条件是同一基座与相近训练量，指标是准确率越高越好。下表整理原文直接报告的关键数字，保留原文百分号与小数精度。

| 条件 | 指标 | 基座或对照 | 本方法 | 对比对象 |
| --- | --- | --- | --- | --- |
| VideoHolmes 多线索 | 准确率 | 文本推理 62.9% | 74.6% | 对照为 OmniVideo-R1 |
| OmniVideoBench 协同 | 准确率 | 文本推理 44.8% | 47.7% | 对照为 OmniVideo-R1 |

表后解释主要收益与代价。收益集中在长程与多跳场景，模型能按需取高分辨率视觉与目标音频，缓解长上下文信息丢失。在短而稠密的上下文上，纯文本推理也能取得不错分数，说明取证的边际收益与任务稀疏性有关。代价是多轮交互增加计算，且工具调用数需要按任务调整，并非越多越好。

工具调用数与准确率的关系值得单独看。原文报告跨模态关联任务早峰值而长推理任务晚峰值，下图热力显示了这种差异。

> **看图路径：** 1. 先看横轴工具调用数从 2 到 5 以上；2. 再看纵轴六个基准的行，对比每行峰值所在的列；3. 观察 JointAVBench 与 Daily-Omni 早峰值与 VideoHolmes 晚峰值的差异

[![原论文 Figure 5：Accuracy vs. Number of tool calls.](https://arxiv.org/html/2610.02181v1/fig_toolcount_heatmap.png)](https://arxiv.org/html/2610.02181v1/fig_toolcount_heatmap.png)

*论文图 5。原论文 Figure 5:：“Accuracy vs. Number of tool calls.”。*

从像素可见 Daily-Omni 在 4 次调用达 87.1%，JointAVBench 在 3 次调用达 80.8%，而 VideoHolmes 与 MMOU 在 5 次及以上分别达 75.9% 与 73.3%。这支持模型学会按任务调整检索深度， bounded 任务早停，埋藏线索任务深挖。但总体趋势不等于每样本都如此，不能把末步结果推广到全程。

### 消融：每一阶段与必要性奖励各起了什么作用？

比较的问题是：如果拿掉某个训练阶段或奖励，性能如何变化？公平条件是同一评测集与同一指标方向。下表用原文连续句整理阶段性变化，数值保留原文写法。

| 条件 | 指标 | 起点 | 终点 | 阶段含义 |
| --- | --- | --- | --- | --- |
| Daily-Omni | 准确率 | 71.9% | 69.1% | 第一阶段监督后短暂下降 |
| WorldSense | 准确率 | 55.1% | 50.3% | 第一阶段格式对齐税 |
| LVOmni | 准确率 | 35.0% | 41.6% | 第二阶段强化学习恢复 |
| VideoHolmes | 准确率 | 55.9% | 69.6% | 第二阶段学会策略性调用 |
| WorldSense | 准确率增量 | 基线 | +3.2% | 加入必要性奖励的额外增益 |
| OmniVideoTest | 准确率增量 | 基线 | +2.2% | 加入必要性奖励的额外增益 |

表后要讲反证与未胜出项。第一阶段出现对齐税，说明只模仿格式会扰动预训练知识；第二阶段用结果奖励恢复并大幅反超，说明探索比行为克隆更能学到何时调用。第 3 阶段加大采样数带来一致提升，说明更广搜索有助于复杂音视频场景。必要性奖励在难例上进一步抑制单模态捷径，但提升幅度小于阶段切换，不能夸大为全部增益来源。

另一个对照是文字链式思考。原文用相同 2 阶段强化学习训练一个只能生成文字的变体，结果它在部分基准仅小幅提升甚至下降，而多轮多模态取证明显更高。下表整理该对照。

| 条件 | 指标 | 差值 |
| --- | --- | --- |
| Daily-Omni | 准确率 | +7.0 个百分点 |
| WorldSense | 准确率 | +8.1 个百分点 |
| OmniVideoTest | 准确率 | +13.5 个百分点 |
| OmniVideoBench | 准确率 | +3.6 个百分点 |
| LVOmni | 准确率 | +3.7 个百分点 |

表后补充限制。纯文本思考在 Daily-Omni 从 71.9% 到 73.0% 有小增益，但在 WorldSense 从 55.1% 到 54.3% 反而下降，说明延长文字无法补回丢失的上下文。未评测的边界是该文字基线是否在超长视频上同样崩溃，原文没有给出，不能自行推断。

**文本链式思考 × 多轮多模态取证：** 文本链式思考分工是在固定全局上下文上延长文字推理，多轮多模态取证分工是把原始音视频片段重新追加进上下文；搭配比较的原因是前者无法补回丢失的细节，组合对照说明只有取回原始信号才能支撑长程多跳组合。

### 什么情况下会失效？超长视频的瓶颈在哪？

原文附录明确讨论了极长视频的结构瓶颈。与视觉可用下采样限制帧数不同，原始音频编码随时间线性增长。基座原生上下文约 32000 token，音频约每秒 12.5 个 token，2 小时音频可达约 90000 token，直接溢出。溢出后观察到的失败是结构崩溃：模型失去调用工具能力，陷入重复思考循环，并在思考内幻觉感官证据而不执行调用，也得不到有效答案。

作者提到的可能缓解包括线性加速压缩或模态非对称压缩，例如丢弃静音 token 或合并冗余声学特征，以及未来扩大上下文与加入更长多轮轨迹训练。但这些在本文中属于待验证方向，加速可能扭曲音高与环境纹理，不能当作已验证结论。复现超长视频时应先测上下文占用与截断策略，明确归因后再谈准确率。

### 复现先做什么？需要保留哪些条件？

复现建议按学习依赖排序。先复现工具协议：实现按起止时间取音频与视频的两个函数，视频侧支持自定帧率与分辨率，观察结果追加进上下文并设最大交互轮数为八。原文实现细节给出帧率、最大帧数与像素上限，冷启动与强化学习阶段设置不同，务必按表设置。再复现数据管线：场景切分约 15 秒窗口、只描述可见内容、语音转写逐字复制、证据链 2 到 7 段且至少各一音频一视频、工具与观察确定性构造而思考由模型生成。

训练顺序是先用一成工具轨迹加九成单轮问答冷启动，再在三万多选加一千难例上做强化学习，最后在八千难例上加大采样并加入必要性奖励。编码器冻结，优化器与学习率按附录设置。评测时音视频基准允许多轮，通用视频基准用单轮直接回答。资源状态方面，本次未发现来源绑定且完成验证的资源，不得声称代码模型或数据已公开，复现应按论文描述自建管线并记录缺项，例如统计检验、延迟与完整超参数之外的随机种子。

### 何时值得尝试这种主动听看？

当问题需要把短声音与远处画面组合，且全局粗采样会稀释关键细节时，值得尝试这种边想边取的方法。它的新增作用不是更长的文字解释，而是把原始信号的取回动作交给推理状态决定，并用双模态必要性约束防止猜对。已显示的证据是长视频与多线索基准上的明显提升，以及通用视频能力未被破坏。

不值得盲用的情况是短而稠密的视频，此时单轮或纯文本思考已够，多轮只会增加开销。待补验证包括超长音频的压缩保真、工具调用失败时的回退策略，以及误判率与实际延迟的测量。记住百分点与相对百分比不同，不同基准差值不能混比，数值相同也不代表同一能力，复述结论时应同时给出数据集、基线、阶段与聚合对象。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.02181)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-02/)
