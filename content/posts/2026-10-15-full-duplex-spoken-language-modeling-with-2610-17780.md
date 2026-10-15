---
title: "Full-duplex Spoken Language Modeling with Discrete Diffusion"
date: 2026-10-15
draft: false
tags: [全双工语音交互, 语音对话系统, 扩散模型, 实时处理]
categories: [论文速递]
description: "Diffuplex 用自回归策略决定何时说话、用语音条件离散扩散并行生成说什么，在 VoiceBench 上以思考模式达到 86.9 分并实现每前向 13.0 词元、1872 词元每秒的解码速度，代价是需要三阶段训练与提前固定前缀带来的延迟质量折中。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.17780"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把何时说话和说什么分开：全双工语音建模 Diffuplex 解读"
paper_digest_original_title: "Full-duplex Spoken Language Modeling with Discrete Diffusion"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.17780v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.17780v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.17780v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "Diffuplex 用自回归策略决定何时说话、用语音条件离散扩散并行生成说什么，在 VoiceBench 上以思考模式达到 86.9 分并实现每前向 13.0 词元、1872 词元每秒的解码速度，代价是需要三阶段训练与提前固定前缀带来的延迟质量折中。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chen Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Pin-Jui Ku"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ankita Pasad"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ante Jukić"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhehuai Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Boris Ginsburg"}]
paper_digest_abstract_sha256: "230cb774deca55b6a68aeadbad30517f86aec56a6fbf3a9f6e9eca5feb656862"
paper_digest_sidecars: {"citation.bib":{"sha256":"c5155020f7a2bc4518935d125fb79ce6f423f063f123a54882bd0710e3d885b5","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17780/citation.bib"},"citation.json":{"sha256":"377f1b8f76c81cd45e47e10894804317fcc577058e924a24f00c99b4846ef281","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17780/citation.json"},"citation.ris":{"sha256":"832ed73147ce2e80f24e8ea594e0db72e942006c6d83111a9c8c53c043ee6294","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17780/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"2702dfe2d9eaeea9ff2e6fc8133c28d157278d6b56c5e70b9e52208e89ee8117","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17780/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5bdb1c42c2cb28ea4c320c3f434a5f492baa1790219a0e0db1b801186126264f"
paper_digest_api_reader_plan_sha256: "bff817b411156910f188f58f38a6ed22f48eb60bd0177a9be3bd1e27d8df0903"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "00eb59aee12fd0aaedd1b54ec52b5af401c8bf5bde47d57539fe2d0b886a89c7"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "ad183996493c45f5339f103a00d9b6eafe00d1c320e4e30f0a9b0c3923474941"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e0fcaa42cbd1d638a8f1cac65c92aea9c43f16bbb7db533ac61a2c2448b1d9b4"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "81f25e064ddad5d7883ca422d08c37f6358a5928c2778113c43eb3dcb03afe9b"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把何时说话和说什么分开：全双工语音建模 Diffuplex 解读

> 英文题目：*[Full-duplex Spoken Language Modeling with Discrete Diffusion](https://arxiv.org/abs/2610.17780v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-paper-digest-blog/papers/?concept=task.speech-dialogue)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [扩散模型](/audio-paper-digest-blog/papers/?concept=method.diffusion)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Chen Chen：机构信息未在 arXiv HTML 中可靠披露
- Pin-Jui Ku：机构信息未在 arXiv HTML 中可靠披露
- Ankita Pasad：机构信息未在 arXiv HTML 中可靠披露
- Ante Jukić：机构信息未在 arXiv HTML 中可靠披露
- Zhehuai Chen：机构信息未在 arXiv HTML 中可靠披露
- Boris Ginsburg：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

全双工语音交互要求模型同时听懂连续到来的用户语音并决定何时接话，输出则是需要推理的完整回答文本与语音，输入是流式语音，输出是交互状态与语音回应，难点在于时机判断与语义生成互相牵制。Diffuplex先用语音编码器与投影层把语音接到文本离散扩散语言模型，经过语音转写对齐与口语指令跟随训练学会理解与回答，再冻结回答能力并增加自回归交互策略学习何时说话。与把时机与内容压缩到单一自回归时间线的已有全双工模型不同，该方法把何时说与说什么在训练与推理上解耦，使语义计算不再受感知音频帧率约束。推理时自回归分支按80毫秒音频块持续输出听、说与接管、让出状态，触发后扩散分支把已累积语音特征与提示一起预填充为条件，在256词元画布上并行去噪，前8个词元提前固定并送入语音合成器。在VoiceBench共9个子集的总体得分指标上，Stage-2响应生成器无思考模式为84.1，启用思考模式后为86.9，后者高于前者。在AlpacaEval上以批量1在单块NVIDIA GB300 GPU测得的解码效率比较中，每前向最终词元数指标上Diffuplex为13.0词元，高于所有自回归基线的1.00词元，解码吞吐指标上最高1872词元每秒，高于Nemotron-3 Omni的394词元每秒。该结论适用于英语为主的公开语音评测与论文给定的解码配置，早期固定前缀与Fisher会话数据的取舍会改变停顿处理与打断延迟，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://cchen1436.github.io/diffuplex-website> → <https://cchen1436.github.io/diffuplex-website/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音智能体要同时解决哪两个问题

论文讨论的输入是连续的用户语音流，目标是直接输出智能体的语音回复，且允许中途打断、停顿和抢话。必须保留的信息有两类：一是会话状态，即现在该听还是该说；二是语义内容，即回答的事实、推理和措辞。输出是分包合成的语音波形，背后先有文本回答。传统轮次式系统等整句结束再识别再生成，语义强但不能随时接管。

全双工系统把感知和生成交织在固定帧率的自回归时间线上，交互流畅但论文指出其语言能力明显下降。Diffuplex 的出发点是把何时说话和说什么在训练和推理上分到两个计算轴，前者跟随物理时间，后者做并行精化。

**全双工 × 轮次式：** 全双工指用户和智能体语音作为并发流处理，允许打断、重叠和边听边说；轮次式指等用户说完再一次性识别再回答。Diffuplex 属于全双工，但回答内容生成不绑定在音频帧率上，因此兼顾流畅接管和并行精化。

### 已有路线为何把语义和时机绑在一起

轮次式语音语言模型把文本大模型接上语音编码器或离散声学词元，代表有 AudioPaLM、SpeechGPT、Qwen2.5-Omni 等，做法是语音理解加自回归文本生成，交互仍是说完一段再回一段。全双工模型把双人语音看作并发流，代表有 Moshi 的双说话人并行音频词元流、OmniFlatten 的统一事件序列化、Freeze-Omni 的流式接口接冻结文本大模型等，它们的共同点是语义生成和会话控制共用同一帧同步自回归过程。离散扩散语言模型是另一条线，从连续扩散可控生成到掩码离散扩散，再到 LLaDA 和 DiffusionGemma，特点是整块并行精化。

语音条件扩散此前多用于语音识别和 DIFFA 系列的语音指令跟随，没有处理全双工的随时接管。本文的比较是在相同输入输出定义下谈分工差异，不是在同一延迟或同一算力下直接比大小。

### 单时间线带来的两个具体困难

论文把退化归为两点。第一是目标冲突：用同一个交叉熵损失同时优化密集的低层时间对齐和稀疏的高层语义生成，稠密监督的梯度会稀释精细语义表示。第二是时间帧率绑定：自回归生成被绑在例如 80 ms 的物理帧率上，语义只能跟着实时输入一格一格走，无法像思维链那样弹性分配更多推理计算。结果是想更聪明就得更慢，想更快就得牺牲理解。Diffuplex 要验证的是：若允许回答在一块 256 词元画布上独立迭代，语义计算就不再受感知帧率限制，智能和响应可以同时提升。这个判断依赖后文的 VoiceBench 分数、首音频延迟和每秒词元数 3 组测量共同成立。

### 两轴总体流程是怎样衔接的

推理时有两条轴。横轴是自回归交互分支，以 80 ms 为一块连续读入语音并预测交互状态，决定是否继续听或开始说。纵轴是扩散分支，平时不展开；当横轴在时刻 theta 预测出开始标记 `<bos>`，就把此前累积的语音编码特征与文本提示一起预填充，建好扩散用的键值缓存，再逐块生成 256 词元画布，每次前向是对整块的双向去噪。为了流式播放，论文设计先固定前 n=8 个词元并送给语音合成器，播放这段时间里剩余位置继续去噪。

2 分支共享主干参数但缓存分开：自回归缓存随音频因果推进，扩散缓存是触发后另行预填充的回答上下文。被打断时若用户在 1 秒内插入，未说出的画布会被丢弃而不追加进缓存，避免犹豫和误触发污染上下文。

**自回归交互策略 × 离散扩散语言模型：** 自回归交互策略沿时间轴逐块读入语音并预测听、说、开始与结束状态，负责何时说话；离散扩散语言模型在被触发后对整块 256 词元画布做双向去噪，负责说什么。两者共享主干参数但使用各自缓存，前者连续感知，后者并行精化。

> **看图路径：** 1. 沿左图横轴时间 t 看自回归步进，在触发时刻 theta 处转向纵轴去噪；2. 观察 n 个词元如何先被送往合成，剩余画布继续精化为改进画布；3. 对照右图语音编码器与文本指令汇合再预填充进离散扩散模型的路径

[![原论文 Figure 2：Overview of Diffuplex. Left: The horizontal axis represents real-time AR interaction, while a…](https://arxiv.org/html/2610.17780v1/fig2.png)](https://arxiv.org/html/2610.17780v1/fig2.png)

*论文图 2。原论文 Figure 2:：“Overview of Diffuplex. Left: The horizontal axis represents real-time AR interaction, while a predicted `<bos>` triggers diffusion generation along the vertical axis at \theta.”。*

左图横轴是随时间推进的自回归步，纵轴是去噪方向，触发点后先分出 n 个词元走向喇叭图标的回复语音，其余继续精化为改进画布；右图是语音经编码器、与文本指令拼接后预填充进离散扩散模型，底部含噪画布经模型输出上部更干净画布并进入下一步去噪。该图说明感知与生成在触发点分叉、首包语音与后续精化重叠，是理解延迟来源的关键。

### 交互状态如何预测与计分

第三阶段把用户音频看作连续流，每 80 ms 预测一个交互状态，状态只有 4 种：`<listen>` 继续听、`<speak>` 保持说话、`<bos>` 接管开始说、`<eos>` 让出结束说。前两者是持续状态，后两者是稀疏的切换事件，因此损失中给切换更大权重。训练目标是对每个时刻的真实状态取加权负对数似然，只依赖已观测语音前缀和历史状态。由于模型无法预知用户行为，开始与结束目标带一段短反应延迟，等声学证据积累再标注。

状态词元独立于扩散词表，有可训练嵌入，每步把上一状态嵌入与块级语音表示结合再预测下一步。编码器在此阶段用 10 秒拖尾窗口、无前视的严格因果模式，并加轻量低秩适配器弥合表示变化，该适配器在计算扩散上下文时不启用。

\[\mathcal{L}_{\mathrm{policy}}=-\sum_{t}w_{s_{t}}\log p(s_{t}\mid a_{\leq t},s_{\lt t}),\]

上式中 a 为截至时刻 t 的观测语音，s 为状态序列，w 为状态权重，目标是最大化在因果条件下预测正确交互状态的概率。稀疏切换的高权重对应论文所说的语义知情的轮次决策，而不只是能量检测。

冻结前缀的提交规则是另一处关键。对首画布前 n 个位置，在前 K-1 次去噪中未接受位置用去噪器极大值回填而非噪声，若某位置在第 j 次的温度缩放分布熵低于阈值 tau=0.05 或到达第 K 次就冻结，冻结后不再重采样。

\[H\bigl(p_{i}^{(j)}\bigr)<\tau\quad\text{or}\quad j=K,\]

该规则让前 8 词元在一次预填充加至多 K 次前向后即可交给语音合成，与整块收敛解耦，K 在延迟与开口质量之间折中。

### 扩散去噪与语音合成如何重叠

触发后回答按 256 词元画布逐块生成，每次去噪前向是整块的双向推理。论文沿用 DiffusionGemma 的熵界采样器：每轮选互信息界低于熵界 beta=0.1 的最低熵位置保留采样词元，其余全重噪，温度在至多 N=48 轮内线性衰减；当连续两轮最高概率预测相同且画布平均熵低于置信阈值 gamma 时提前停止，提交画布并追加进缓存再开下一块。为适配语音交互做了两处改动：一是开口提前提交，二是缩短调度。温度从 0.7 退火到 0.2，gamma 放宽到 0.025，并截断以至多两种不同词元组成的长度不小于 32 的拖尾重复环。

已提交文本流给交织文本语音合成模型，首包即锚定前缀，因此开口合成与剩余去噪重叠。合成器本身选用 CosyVoice 3，看重质量与音色克隆；不需要克隆时可换更小单说话人模型进一步降低首音频延迟，模块替换无需重训 Diffuplex。

**画布 × 锚定前缀：** 画布指一次并行精化的 256 词元生成块，所有位置同时接受去噪；锚定前缀指其中前 n=8 个位置被提前冻结并送给语音合成器。画布保证整体并行，锚定前缀保证开口延迟不等待整块收敛，合成播放与剩余位置继续去噪重叠进行。

### 三阶段分别训练什么与冻结什么

第一阶段做模态对齐：Parakeet 编码器加随机初始化投影层，把声学表示映射到 DiffusionGemma 嵌入空间，以语音加文本指令为条件经迭代去噪重建完整识别文本。先在 LibriSpeech 上只暖机投影层，再在以 Granary 为主的英文识别混合集上联合优化投影层与编码器，扩散语言模型全程冻结。另加辅助自回归下一词元损失，该阶段在 LibriSpeech 测试集干净集与其他集上词错率分别为 2.3 与 4.2。

第二阶段做语音指令跟随：从 Nemotron-Omni 微调语料采样 60 万语音指令例，混入约 37,500 条占 5% 的识别回放，其中 70% 回答直接监督最终答案而不含显式思考内容；联合优化编码器、投影层与扩散模型，混合专家路由冻结，扩散与自回归损失权重均为 1.0。大学习率增强语音接地但导致重复与错误终止，小学习率保持连贯但接地弱，论文称调三模块学习率或回放纯文本都不能解决，于是引入文本锚定蒸馏。

第三阶段冻结回答生成器，只训练四状态交互头与听模式低秩适配器，用 80 ms 状态标签的交叉熵训练，数据是 120 小时干净合成对话加 70 小时内部对话，另有一版加入 Fisher 电话对话以暴露快速自发轮替。

**模态对齐 × 文本锚定蒸馏：** 模态对齐指把 Parakeet 语音编码器输出经投影层映射到 DiffusionGemma 文本隐空间，先用语音识别数据训练；文本锚定蒸馏指固定一份文本扩散模型做教师，学生听语音、教师看文字，以前向 KL 对齐两者输出分布，防止大学习率下语音适配冲散原有语言分布。

### 用什么数据、基线与指标来检验

语音智能用 VoiceBench 的 9 个子集，含开放问答、知识推理、指令跟随与安全，开放问答用 5 分制法官打分，其余与总分用 0 到 100 分制，取平均比较。会话行为用 Full-Duplex-Bench 第一版的暂停处理、反向提示、平滑轮替与用户打断四场景，另加第三版带口语不流利的人录 turn-taking dynamics 軌，指标是轮替接受率越高越好、延迟与暂停处理分越低越好，闭源模型因接口延迟开销被排除。基线分 3 类：轮次式自回归高能力模型，允许思考但思考痕迹不给用户，首音频延迟较高；轮次式扩散模型，并行精化以降低解码延迟。

全双工自回归模型，感知生成交织在固定速率流上，延迟低但无独立思考阶段。效率在口语 AlpacaEval 上测，该集回答较长易观察差异，批量 1、半精度权重与缓存、单块 GB300 上测每前向词元数与每秒词元数，并同时列出激活参数与 AlpacaEval 评分作上下文。

**首音频延迟 × 每前向词元数：** 首音频延迟指从用户语音结束到模型语音开始的时间，含轮次判决、去噪和合成；每前向词元数指每次主干前向最终确定的回答文本词元数，自回归基线为 1。Diffuplex 用前者衡量交互 responsiveness，用后者连同每秒词元数衡量并行解码效率，两者测量条件不同不能互换。

### 语音智能与延迟速度的总体结果是什么

先看论文总览图，左半比较无思考 Diffuplex 与全双工对话模型，横轴是从用户语音结束到模型语音开始的首音频延迟，纵轴是 VoiceBench 总分；右半比较有思考 Diffuplex 与前沿轮次式自回归模型，横轴是输出速度。所有输出速度在同块 GB300、批量 1 下测得，附录另有不同显卡结果。

> **看图路径：** 1. 先看共享纵轴 VoiceBench 总分，再分左右横轴：左为首音频延迟，右为输出速度；2. 对比左图中 Diffuplex 与全双工基线的位置，右图中 Diffuplex 与轮次式自回归模型的位置；3. 注意右上角 Diffuplex 星号旁标注的分数与速度数值

[![原论文 Figure 1：Spoken intelligence and response efficiency.](https://arxiv.org/html/2610.17780v1/fig1.svg)](https://arxiv.org/html/2610.17780v1/fig1.svg)

*论文图 1。原论文 Figure 1:：“Spoken intelligence and response efficiency.”。*

图中左侧 Diffuplex 星号位于高分低延迟区，右侧星号位于高分高速区，左右纵轴共享同一 VoiceBench 总分定义，分数越高表示模型更聪明。该图的可读点是两类比较不可混用：左侧回答交互延迟下的智能保持，右侧回答思考模式下的吞吐优势。

下表整理第二阶段完整请求与第三阶段全双工的总体分，比较问题是分离训练后智能是否保留，公平条件是同一 VoiceBench 九子集平均，分数越高越好。

| 设置 | 思考 | 阶段 | 总分 | 与基线关系 | 适用条件 |
| --- | --- | --- | --- | --- | --- |
| Diffuplex 第二阶段无思考 | 不思考 | 完整请求 | 84.1 | 高于全双工基线 | 非流式评估 |
| Diffuplex 第二阶段有思考 | 思考 | 完整请求 | 86.9 | 接近最强轮次系统 | 非流式评估 |
| Diffuplex 第三阶段全双工 | 不思考 | 流式 early 前缀 | 82.3 | 超最强全双工 24.2 分 | K=4，n=8 |
| 文本输入上限 | 不思考 | 文本请求 | 90.1 | 语音差距约 6 分 | 有配对文本 |
| 最强全双工基线 | 不思考 | 流式 | 58.1 | 被超出对象 | 同表比较 |

第二阶段无思考 84.1、有思考 86.9，提升主要在指令跟随与知识密集题，开放问答三子集变化小；第三阶段冻结生成器仍降 1.8 分到 82.3，论文称这与流式轮次决策和早期前缀解码的改动一致，但该对比未分离两者各自贡献。代价是早期提交必然损失部分分数，附录显示放宽通过上限可回升。未胜出项是开放问答上思考增益很小，说明额外推理并非处处有效。

### 对话行为在轮替打断与停顿上如何取舍

会话行为比较的问题是模型能否在该说时说、该停时停，指标方向是轮替接受率越高越好、延迟越低越好、暂停处理分越低越好。论文报告两个版本：加入 Fisher 会话语料的版本偏向激进低延迟轮替，不加 Fisher 的版本偏向语义知情轮替。结果是 Diffuplex 在两版基准上轮替准确率最强且能正确响应打断；加 Fisher 后轮替与打断延迟明显降低，但暂停处理变差，更易把用户中途停顿误判为轮次结束。Moshi 与 PersonaPlex 同样用类 Fisher 快节奏数据，也呈现进场快但停顿鲁棒性弱的模式。

这揭示响应时机与语义理解的根本折中：训练于快节奏数据鼓励对静音快速反应，排除此类数据则允许等待更强语义证据。复现时若只看延迟会误选激进版本，需同时报告暂停处理与带不流利的第三版轮替分。

### 并行解码到底快在哪里与代价是什么

效率比较的问题是在相同音频与系统用户提示、批量 1、单 GB300 下，谁用更少前向完成同样长度回答。指标是每前向确定词元数与每秒解码词元数，都是越高越好，同时列出激活参数与 AlpacaEval 法官分作质量上下文。

> **看图路径：** 1. 横向比较 TPF 列：Diffuplex 与全部 1.00 的自回归基线及 0.37 的 DIFFA-2；2. 再看 TPS 列与 AlpacaEval 评分列，理解吞吐增益小于并行度增益的原因；3. 注意激活参数列，比较 4B 与 3B 量级的对应关系

[![原论文 Figure 3：Decoding efficiency and score context on AlpacaEval.](https://arxiv.org/html/2610.17780v1/fig_efficiency.svg)](https://arxiv.org/html/2610.17780v1/fig_efficiency.svg)

*论文图 3。原论文 Figure 3:：“Decoding efficiency and score context on AlpacaEval. TPF and TPS are measured at batch 1 on one NVIDIA GB300 GPU.”。*

图中 Diffuplex 行显示每前向 13.00、每秒 1872、激活参数 4、AlpacaEval 约 4.70，而自回归基线每前向均为 1.00，DIFFA-2 为 0.37。该图说明通过增益小于并行度增益，因为每次扩散前向要处理 256 宽画布，单步成本高于单词元自回归步。

| 模型 | 每前向词元数 | 每秒词元数 | 激活参数 | AlpacaEval 上下文 | 测量条件 |
| --- | --- | --- | --- | --- | --- |
| Diffuplex | 13.0 | 1872 | 4B | 约 4.70 | GB300，批量 1，思考开 |
| Nemotron-3 Omni | 1.00 | 394 | 3B | 高于 Diffuplex | 同硬件同提示 |
| Qwen3-Omni-Thinking | 1.00 | 300 | 3B | 高于 Diffuplex | 同硬件同提示 |

主要收益是前向级并行度带来数倍吞吐，代价是单次前向更重且质量上下文并非最高，激活参数也略大。论文另在附录给出 RTX 6000 与 H100 上的输出速度，RTX 6000 上 Diffuplex 为半精度、GB300 与 H100 为 8 位浮点，跨硬件绝对值不可直接比相对倍数。尚未评测的是批量大于 1 或长上下文缓存压力下的吞吐保持情况。

### 哪些组件决定语音条件能力能否迁移

消融要回答的是文本扩散能力迁移到语音需要什么，比较条件是同一 VoiceBench、无思考，分数越高越好。下图是固定前缀长度 n=8、变动通过上限 K 的延迟智能折中，横轴是去噪加合成到首音频的平均毫秒数，纵轴是总分，右表给出通过数与首音频均值与中位数，绿色星号为论文采用的 K=4。

> **看图路径：** 1. 看左图横轴去噪加合成到首音频的平均毫秒数与纵轴 VoiceBench 总分的关系；2. 对照右表 K=2、K=4、K=6 与无上限四行的通过数与首音频均值与中位数；3. 找到标为 K=4 selected 的绿色星号，理解论文为何选该折中点

[![原论文 Figure 5：Measured latency–quality trade-off for committing the first n=8 tokens.](https://arxiv.org/html/2610.17780v1/fig_prefix_latency.svg)](https://arxiv.org/html/2610.17780v1/fig_prefix_latency.svg)

*论文图 5。原论文 Figure 5:：“Measured latency–quality trade-off for committing the first n=8 tokens.”。*

可见 K=2 时延迟最低但分数最低，无上限时分数最高但延迟近 500 ms，K=4 在 296 ms 附近取得 82.3 分，是延迟与质量的中间点。该测量从给定轮次边界算起，不含第三阶段自回归轮次决策延迟，部署总延迟需另加该段。

| 消融条件 | 总分 | 相对完整 | 关键变化 | 说明 |
| --- | --- | --- | --- | --- |
| 完整 Diffuplex 语音输入 | 84.1 | 基准 | 联合适配加文本锚 | 第二阶段无思考 |
| 文本输入上限 | 90.1 | 高 6.0 | 改用配对文本 | 分离语言能力与语音误差 |
| 去掉第一阶段 | 29.9 | 崩溃 | 无显式对齐 | 指令微调无法接地 |

去掉第一阶段崩到 29.9，证明仅靠指令微调不能把扩散模型接到声学表示；去掉文本锚从 84.1 降到 66.1，证明交叉模态蒸馏对保持预训练分布重要；冻结主干只剩 64.7，证明受控适配主干仍必要。论文还报告同一模型可用自回归解码回答语音请求且得分 85.1 略高于扩散解码，说明交叉熵训练保留了自回归能力，但该值对应非流式评估，不能当作全双工部署增益。另一泛化证据是用同样策略适配 8B 扩散主干得到约 78.7 分，较低主因是文本基座本身较弱，而非策略失效。

| 前缀通过上限 | 首音频均值 | 通过数均值 | 总分 | 适用性 |
| --- | --- | --- | --- | --- |
| K=2 | 251 ms | 2.0 | 80.5 | 最低延迟 |
| K=4 | 296 ms | 3.8 | 82.3 | 论文采用 |
| K=6 | 309 ms | 4.3 | 82.6 | 略增质量 |

该表说明提高 K 伴随更长触发后延迟与更高总分，K 的选择是部署时按延迟预算定的运行参数，不是模型能力本身的变化。

### 结论在什么条件下才成立与有何局限

主结论依赖 3 类条件。智能结论依赖 VoiceBench 九子集平均与法官打分，开放问答用 5 分制、其余用 100 分制，换基准或换法官可能改变排序；第三阶段 82.3 分是在 n=8、K=4、冻结生成器下测得，放宽上限可到 84.0。效率结论依赖单 GB300、批量 1、口语 AlpacaEval 长回答与思考开启，吞吐增益小于并行度增益，且不同精度与显卡下绝对值不同。行为结论依赖是否加入 Fisher 数据，激进与稳健是两个运行点，不存在同时最优。

局限还包括：第三阶段降分未分离流式决策与早期解码各自贡献；更广能力表把口语与文本基准并列，跨模态分数不可直接比大小；训练用 60 万语音指令与识别回放，资源为多机多卡，复现成本较高；作者资源在文中称训练代码与检查点将很快提供，链接为第三方演示页，当前只能证明论文提到该链接，不能当作已开源或可下载。

### 复现第一步做什么与关键超参数

复现先从第二阶段语音指令跟随做起，因为它是智能来源。按论文顺序：用 Parakeet 编码器加投影层，先冻结编码器与语言模型在 LibriSpeech 上暖机投影层，再解冻编码器在 Granary 为主混合集上适配，语言模型保持冻结；再解冻语言模型做语音指令微调，保持混合专家路由冻结，同时用冻结文本教师做扩散画布与自回归读出的前向 KL，权重分别为 3.0 与 1.0。关键超参数是扩散画布 256、熵界 beta=0.1、至多 48 轮、温度 0.7 到 0.2、置信阈值 gamma=0.025、前缀 n=8、冻结阈值 tau=0.05、交互块 80 ms、因果窗 10 秒无前视。

推理实现需分开两路缓存，触发后另行预填充扩散缓存；合成可用任意高质量模型，论文用 CosyVoice 3。评估时固定批量、精度、显卡与提示，分别记录首音频延迟、每前向词元数与每秒词元数，并同时报告 VoiceBench 子集分而非仅总分。

### 何时值得尝试与还需补什么验证

当应用需要边听边想、允许打断，又不愿把回答质量降到现有全双工水平时值得尝试该两轴设计；当部署只有弱算力或必须极低首音频延迟时，应先在 n=8 下扫 K=2 到无上限的曲线再定点，因为开口质量与延迟直接交换。还需补的验证有：批量大于 1 与长对话缓存下的吞吐保持、真实噪声与远场下的轮次误触发率、不同合成器对首音频延迟的分解，以及去掉低秩适配器后暂停处理的量化对比。

论文的价值在于证明会话控制与内容生成可分开学习与调度，并给出可运行的提前前缀机制，但其最强数字对应特定硬件、特定 K 与特定基准平均，换条件需重测，不能直接推广为所有语音任务更快更聪明。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.17780v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
