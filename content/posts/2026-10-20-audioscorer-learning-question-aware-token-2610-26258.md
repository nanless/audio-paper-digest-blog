---
title: "AudioScorer: Learning Question-Aware Token Relevance for Large Audio Language Models"
date: 2026-10-20
draft: false
tags: [音频问答, 语音识别, 音频分类, 知识蒸馏, 模型剪枝]
categories: [论文速递]
description: "长音频会产生过密的音频令牌并推高解码代价，AudioScorer 用问题感知的打分器学习每个令牌的保留优先级并做 Top-K 剪枝，在 10% 保留率下保住了语音内容任务，额外打分开销约占预填充计算的 0.4 到 0.9%。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.26258"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "随问题给音频令牌打分再剪枝的 AudioScorer"
paper_digest_original_title: "AudioScorer: Learning Question-Aware Token Relevance for Large Audio Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.26258v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.26258v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.26258v1.pdf"
paper_digest_primary_task: "音频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.pruning","label":"模型剪枝"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "长音频会产生过密的音频令牌并推高解码代价，AudioScorer 用问题感知的打分器学习每个令牌的保留优先级并做 Top-K 剪枝，在 10% 保留率下保住了语音内容任务，额外打分开销约占预填充计算的 0.4 到 0.9%。"
paper_digest_authors: [{"affiliations":["Institute of Signal Processing","and System Theory (ISS)","University of Stuttgart","Stuttgart, Germany"],"name":"Marwan Farag"},{"affiliations":["Institute of Signal Processing","and System Theory (ISS)","University of Stuttgart","Stuttgart, Germany"],"name":"Bin Yang"}]
paper_digest_abstract_sha256: "76e16b04c3b76c4f12107c7e9576672edd1097b6d6c23befd1edaac45c6b50b9"
paper_digest_sidecars: {"citation.bib":{"sha256":"ba2eb48225ccdfd47f041f6507366035afb768e882b972d8844c9f796ef7a831","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-26258/citation.bib"},"citation.json":{"sha256":"116e0b7d82a40904b25ec4a63c9555f0c8ec827aed0d6a3170c0e69ad2f00749","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-26258/citation.json"},"citation.ris":{"sha256":"6f0ed61448197622008b2203c22333b9c0f81115b68b8b38c44e81127dd85e36","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-26258/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"385d1fa9db278e1f24b276f3ee35dca23a067cad4f6b475312c0ac30e06ae125","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-26258/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "937ec6d36133e785b2b1c817a7fa66391e11fcf5b406f57b124f81ed5bd3e17d"
paper_digest_api_reader_plan_sha256: "d60be1a167dd279b50198c45b44d6b6123b4aea202045b99c85eca230afb9bae"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "394042dde8d21def111b53c5bdfdd3cd5f5bd661cae6d3e91d8c55de4db699fe"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "b2838dd8378e1816de1c002b3db6ae2f05fac90c58f4c154c067341ef125a799"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d28707772778b63f54c893a917d51f787994831b739dbbe698f58dedab5629a5"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2b5cce807292d1dde2265f904009303958ec1494419ac9d44e4d570207618769"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 随问题给音频令牌打分再剪枝的 AudioScorer

> 英文题目：*[AudioScorer: Learning Question-Aware Token Relevance for Large Audio Language Models](https://arxiv.org/abs/2610.26258v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频问答](/audio-paper-digest-blog/papers/?concept=task.audio-question-answering)；[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)；[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [模型剪枝](/audio-paper-digest-blog/papers/?concept=method.pruning)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.4/1.5


## 👥 作者与机构

- Marwan Farag：Institute of Signal Processing；and System Theory (ISS)；University of Stuttgart；Stuttgart, Germany
- Bin Yang：Institute of Signal Processing；and System Theory (ISS)；University of Stuttgart；Stuttgart, Germany

## 📌 核心摘要

大音频语言模型需处理音频编码器输出的稠密token序列，长录音使解码器预填充计算上升，而当前问题往往只依赖其中一小部分。在固定保留预算下方法只将得分最高的音频token送入后续解码层，AudioScorer先用问题文本编码器表示用户问题，再让音频token通过交叉注意力读取问题并由打分头输出每个token的相关性分数，与依赖注意力、相似度或均匀采样的启发式修剪不同，该方法显式学习问题相关的排序。训练时用冻结大音频语言模型在参考答案上的对数似然对音频token嵌入求梯度，把梯度范数的排序转成软目标蒸馏给打分器，同时用加权音频序列上的答案负对数似然直接优化保留信息，推理时前端解码层仍处理全序列，之后按分数做硬Top-K保留。在Qwen2.5-Omni-3B、AudioMarathon、10%保留率下，语音内容类别未加权均值（自动语音识别用词准确率、其余用Macro-F1）AudioScorer为43.65，高于最强基线FastV的30.27。同样在Qwen2.5-Omni-3B、AudioMarathon、10%保留率下，自动语音识别词准确率AudioScorer为31.25%，高于最强基线HeadRouter的5.15%。同样在Qwen2.5-Omni-3B、AudioMarathon、10%保留率下，以各子任务自动语音识别词准确率或Macro-F1为指标，AudioScorer在10个语义和声学子任务中的7个上超过其他修剪方法取得最好或并列最好。结论适用于激进压缩下的语音和部分分类任务，不适用于音频真伪检测等对细粒度证据敏感的任务；原文披露在单张NVIDIA A6000上训练三个epoch约用9个GPU小时，打分器平均增加0.16 TFLOPs预填充计算。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长音频为什么会让大模型变贵

这篇论文面对的输入是一段音频加一个文字问题，目标是让冻结的大音频语言模型在只保留少部分音频信息时仍然答对。必须保留的是回答该问题真正依赖的声音证据，比如转写说了什么就要保留语音密集的片段，判断场景就要保留环境声片段，输出是模型的文字答案。

困难在于音频编码器会产生很密的令牌序列。论文以 Qwen2-Audio 为例，说明每秒约 25 个音频令牌，30 秒就有约 750 个令牌，长录音会显著增加解码器的预填充计算。如果问题只与其中一小部分有关，全量处理就是浪费，于是在固定保留预算下做与任务相关的剪枝就很自然。

**大音频语言模型 × 音频令牌 × 剪枝：** 大音频语言模型是先把音频编码成嵌入序列再交给语言模型作答的系统，音频令牌就是序列中的一个向量，对应一小段声音，剪枝是在解码中途只保留一部分令牌。三者连起来是：长音频的令牌太多而问题往往只依赖其中一小部分，所以要在固定预算下留下与当前问题有关的证据。

### 已有剪枝方法靠什么信号选令牌

在进入本文方法前，需要把已有路线讲清。FastV 这类方法按注意力大小排序，DART 去掉冗余令牌，均匀帧采样按时间等间隔保留，HeadRouter 用校准后的注意力头画像，SpeechPrune 结合语音文本相似度和近似注意力做 2 阶段选择。这些方法大多使用事先设定的信号，而不是从下游答案质量中学习哪个令牌有用。

另一条路线是学习相关性，但论文指出已有学习式方法大多与问题无关，或者只在解码器内部较晚才引入问题条件。在视觉令牌剪枝中有类似的学习式工作，但在音频上把问题条件、参考答案梯度和下游答案监督联合起来学习仍然研究较少。本文的比较对象正是能在相同保留率和相同剪枝深度下运行的方法，比较时任务、数据划分和预算都对齐，而不是把不同预算的结果直接对比。

### 同一个音频换个问题该保留哪里

论文提出两个假设。第一，令牌是否有用取决于问题，同一个令牌对一个问题重要，对另一个问题可能无关。第二，冻结的大模型本身可以当老师，在给定问题和参考答案的条件下，答案似然对每个音频令牌的敏感程度能提供有用的相关性信号。中心问题就是打分网络能否从这种下游答案效用信号中学到随问题变化的音频令牌相关性。

下面这张图用同一个 10 秒片段直观展示了这个问题，顶部标注了人声说话段和鸟鸣段，横轴是剪辑内时间。读图时重点看同一方法在蓝色问题和橙色问题下点的分布是否换位，AudioScorer 是否比均匀采样更集中到对应声音段。

> **看图路径：** 1. 先看顶部蓝色人声段和橙色鸟鸣段在时间轴上的位置；2. 再对比 AudioScorer 两行竖线在不同问题下疏密是否换位；3. 最后看 Frame 等均匀采样行的竖线是否随问题变化

[![原论文 Figure 1：Question-dependent token selection for the same audio.](https://arxiv.org/html/2610.26258v1/teaser_question_switching_2.png)](https://arxiv.org/html/2610.26258v1/teaser_question_switching_2.png)

*论文图 1。原论文 Figure 1:：“Question-dependent token selection for the same audio.”。*

从图中可见，AudioScorer 在问 2 人对话时蓝色竖线密集落在 0 到 4 秒的人声区，在问鸟鸣时橙色竖线密集落在 5 到 7 秒和 8 到 9 秒的鸟鸣区，而 Frame 的两行竖线在两种问题下几乎等间隔不变，FastV 和 DART 等也有较多落在无关区的竖线。这说明随问题切换选择是本文要实现的行为，均匀采样做不到这一点。论文同时说明该音频与令牌到时间的映射引自 Wang 等人，图本身只展示选择位置，不证明问答准确率。

### AudioScorer 整体做了哪两件事

整体流程可以沿一个样本理解。原始输入是音频波形和文字问题，音频先经过冻结的音频编码器和投影层变成 N 个投影后音频嵌入，问题则经过问题编码器变成词级表示。打分器让每个音频令牌去注意问题表示，得到问题感知的上下文，再经打分头输出每个令牌一个 0 到 1 之间的分数。推理时前两层解码器仍处理全序列，之后按分数做硬 Top-K 剪枝，只把保留的令牌送入后续层生成答案。

训练时则多做两件事。一是另跑一次全量音频加问题并用参考答案做教师强制，算出每个令牌的梯度显著性并转成排序目标，监督分数的排序。二是用预测分数软加权音频再算一次参考答案的似然，促使分数保留能生成正确答案的信息。两部分相加构成总目标，大模型本身始终冻结，只有打分器和问题条件化组件被更新。

下图展示了上述主路径、训练双支路和推理剪枝位置的关系，左侧对应问题条件化，右侧对应梯度与答案监督。读图时先分清冻结与可训练的图例，再看训练框内两路大模型输入有何不同，推理框内 Top-K 发生在哪些层之间。

> **看图路径：** 1. 沿音频和问题两路输入看到交叉注意力和打分头的主路径；2. 区分训练框内左侧排序蒸馏与右侧答案似然两条支路；3. 看推理框内剪枝层前后如何从全序列变为 Top-K 再解码

[![原论文 Figure 2：Overview of AudioScorer.](https://arxiv.org/html/2610.26258v1/scorer_architecture_acl_column_grad_v6.svg)](https://arxiv.org/html/2610.26258v1/scorer_architecture_acl_column_grad_v6.svg)

*论文图 2。原论文 Figure 2:：“Overview of AudioScorer. It learns audio-token relevance from answer-gradient targets and downstream answer supervision.”。*

从图中可见，顶部音频编码器标有冻结记号，问题编码器标有可训练记号，中部交叉注意力和打分头都落在问题条件打分器框内，训练框内左侧大模型下方连着排序令牌和蒸馏损失，右侧大模型下方连着答案概率和似然损失，底部推理框明确画出前几层处理全序列再经 Top-K 进入后续层。这张图帮助理解分支在哪里汇合：两个损失都经过冻结大模型回传到同一个打分器，但所用的音频输入一个不加权一个加权。

### 问题感知的分数是怎么算出来的

先讲问题编码。论文使用 bge-base-en-v1.5 把用户问题编码为词级表示，其中只有最后两层变换器层和池化器可训练，其余冻结，再经可训练投影和层归一化映射到打分器空间。完整问题编码器模块约 111.06M 参数，其中可训练约 16.35M。音频侧是投影后音频令牌序列，交叉注意力以音频令牌为查询，以问题词为键和值，得到每个令牌的问题感知表示。注意力配置沿用 Qwen2.5-Omni-3B 的设置，隐层 2048，16 个查询头，2 个键值头。

得到融合表示后，打分头把每个令牌的向量映射为一个标量再经 Sigmoid 变成分数。它要计算的就是每个音频令牌在当前问题下被保留的优先级，取值在 0 到 1 之间，相对排序决定推理时谁被留下。

\[s_{i}=\sigma\!\left(f(\mathbf{c}_{i})\right)\in(0,1).\]

该式中下标表示第几个音频令牌，输入是经交叉注意力后的问题感知表示，函数是多层感知机，输出经 Sigmoid 得到分数。论文给出打分头维度为 2048 到 4096 到 1024 到 1。整体 AudioScorer 可训练参数约 50.15M，加上冻结部分共约 144.87M，相对约 3.72B 的冻结音频语言路径约为 3.89%，可训练部分约占 1.35%。

**问题条件打分 × 交叉注意力 × 打分头：** 问题条件打分是说同一段音频换了问题要有不同的令牌排序，交叉注意力让每个音频令牌去查询问题词表示从而带上问题信息，打分头再把融合表示变成 0 到 1 的分数。分工是交叉注意力提供问题上下文，打分头给出可排序的优先级，合在一起才能随问题切换保留位置。

### 梯度排序目标是怎样构造的

训练需要理解两次经过冻结大模型的区别。第一次是为构造排序目标，输入是不加权的音频序列，用参考答案做教师强制，算出参考答案的对数似然，再对第一层解码器输入处的每个音频嵌入求梯度并取欧氏范数，得到显著性。较大值表示答案似然对该令牌局部更敏感。由于推理只用相对顺序，论文把显著性在样本内排秩并归一化为 0 到 1，再经以中位数为中心的 Sigmoid 映射为连续目标，显著的一半目标大于 0.5，不显著的一半目标小于 0.5，最后用均方误差监督预测分数。

\[g_{i}=\left\lVert\frac{\partial J}{\partial\mathbf{x}_{i}}\right\rVert_{2},\qquad i=1,\ldots,N.\]

该式中被求导的对象是参考答案所有词的对数概率之和，对第几个音频嵌入求梯度就得到第几个显著性，结果是非负标量。这个教师在线计算，每个训练样本需要一次额外的前向和反向，因为需要参考答案，所以只在训练时使用，推理直接由音频和问题预测分数。

\[\mathcal{L}_{\mathrm{rank}}=\frac{1}{N}\sum_{i=1}^{N}\left(s_{i}-\tau_{i}\right)^{2}.\]

该式把预测分数与蒸馏目标逐令牌求平方差再平均，样本内令牌数是分母。它只约束排序形状，不直接优化能否生成答案。

**答案梯度显著性 × 排序蒸馏 × 答案似然损失：** 答案梯度显著性是把参考答案的对数似然对每个音频嵌入求梯度并取范数，刻画答案对该令牌有多敏感，排序蒸馏是只保留敏感度的样本内排序并映射成软目标来监督分数，答案似然损失是用分数加权音频后再算一次生成参考答案的负对数似然。前者给显式的令牌级排序信号，后者直接检验保留的信息能否生成答案，两者互补。

### 软加权答案监督怎样回传到打分器

第二次是为答案监督，输入是软加权后的音频序列。每个投影嵌入乘以由分数算出的系数，低分令牌被压小但保留 0.01 的残余权重，避免训练时完全删除。加权序列送入冻结大模型，计算同一参考答案的负对数似然。虽然大模型参数冻结，梯度会穿过它回传到打分器，从而鼓励保留对作答有用的信息。训练时软加权发生在进入大语言模型之前，所有解码器层都处理加权序列，这与推理时先过两层再硬剪枝不同。

\[\tilde{\mathbf{x}}_{i}=\left[\epsilon+(1-\epsilon)s_{i}\right]\mathbf{x}_{i},\qquad\epsilon=0.01,\]

该式中系数由预测分数和残余权重算出，系数越大该令牌被抑制得越少，加权后嵌入仍保持原方向只是幅度变小。

\[\mathcal{L}_{\mathrm{ans}}=-\sum_{m=1}^{M}\log p(y_{m}\mid y_{\lt m},q,\tilde{\mathbf{X}}).\]

该式中条件包括此前参考词、问题和加权音频序列，损失是负对数似然之和。总目标是两项等权相加。

**软加权训练 × 硬 Top-K 剪枝 × 剪枝层：** 软加权训练是训练时把每个音频向量乘以由分数算出的系数而不真正删除令牌，保持可微以便梯度回传，硬 Top-K 剪枝是推理时按分数只留前 K 个并丢掉其余，真正减少后续计算，剪枝层是开始丢弃的解码器层位置。组合意义是训练保持梯度通路，推理兑现计算节省。

### 在什么模型和任务上比较剪枝

实验固定在 Qwen2.5-Omni-3B 上评测，使用 AudioMarathon 和 MMAU-Pro。基线包括 FastV、DART、均匀帧采样、HeadRouter 和 SpeechPrune，在 70%、40% 和 10% 3 种保留率下对比。所有方法都在解码器第 2 层后剪枝，因此前两层都处理全序列，且同一排序在不同保留率下复用。最终评测用了可用的 6347 个 AudioMarathon 样本和 5305 个 MMAU-Pro 样本。

指标需要先讲清方向。AudioMarathon 中自动语音识别用词准确率，其余子任务用宏 F1，都是越大越好。类别平均是每三任务类别内无加权平均，音频真实性只有深度伪造检测一项。MMAU-Pro 用官方加权分，开放问答按 0 到 5 打分。预填充计算量是同一 80 个按时长分层抽样的片段上到首词元的平均 TFLOPs，越小表示推理越省。

**词准确率 × 宏 F1 × 加权分：** 词准确率用于自动语音识别，衡量转写词与参考的一致程度，宏 F1 用于分类任务，先在每个类别算 F1 再平均以免大类主导，加权分是 MMAU-Pro 按类别规模加权的总分。三者分别回答转写保真度、类别均衡准确性和跨类别综合能力，不能混用。

训练混合覆盖语音转写、对话、声音描述、音乐理解、说话人特征、情感和音频真实性，LibriSpeech 提供转写和性别标签样本，其余来自 LongAudio-XL、AudioSkills-XL 等资源和深度伪造音频检测数据集。每个数据源随机抽 1000 例，固定种子 42，训练 3 个轮次，在单张 A6000 上约 9 GPU 小时，优化器为 AdamW，学习率为 1e-4。论文只说代码将在发表后发布以支持可复现，没有给出可验证的下载链接，不能声称已公开或可一键运行。

### 10% 保留率下谁保住了语音内容

要回答的核心问题是在激进压缩下学习式打分能否保住答案质量。论文报告在 AudioMarathon 的 10% 保留率下，AudioScorer 在 10 个语义和声学任务中的 7 个上达到最好或并列最好，尤其在语音内容、音频分类和说话人信息 3 类上领先。语音内容类别平均比最强基线高 13.38 个点，而音频分类和说话人信息分别只高 0.57 和 1.13 个点，说明收益集中在语音相关任务。

下表聚焦论文明确给出逐字对比的语音内容子任务，比较问题是相同 10% 预算和相同剪枝深度下各方法保留的证据是否有用，指标越大越好。

| 条件 | 指标 | AudioScorer | 最强基线原文对象 |
| --- | --- | --- | --- |
| 10% 保留 AudioMarathon | 自动语音识别词准确率 | 31.25 | HeadRouter 5.15 |
| 10% 保留 AudioMarathon | 语音内容推理宏 F1 | 74.57 | FastV 69.20 |

这组对比说明 AudioScorer 在自动语音识别上从接近崩溃的 0 到 5 区间拉回到 31.25，而其他方法在该任务几乎全军覆没，语音内容推理也领先约 5 个点。但这不等于所有任务都赢，音频真实性上 SpeechPrune 领先，且自动语音识别的绝对值仍远低于未剪枝的 97.68，因此激进剪枝的代价依然很大。

### 删除高分令牌能检验排序质量吗

除了准确率数字，论文用删除实验检验排序的信息量。在 500 个随机均衡抽取的 AudioMarathon 样本上，逐个删除各方法排名最高的令牌，分数下降越陡说明定位到的证据越关键。读该曲线时先看横轴是已删除的高排名令牌比例，纵轴是平均分，再比较同一删除比例下谁掉得最快。

> **看图路径：** 1. 看横轴删除比例增大时各方法平均分下降的速度；2. 对比 AudioScorer 曲线与其他基线曲线的相对位置；3. 注意横轴起点附近各曲线接近而后逐渐分开

[![原论文 Figure 3：Deleting the top-ranked audio tokens on 500 random equally drawn AudioMarathon samples: a steeper…](https://arxiv.org/html/2610.26258v1/deletion_curve_top6_acl.svg)](https://arxiv.org/html/2610.26258v1/deletion_curve_top6_acl.svg)

*论文图 3。原论文 Figure 3:：“Deleting the top-ranked audio tokens on 500 random equally drawn AudioMarathon samples: a steeper drop indicates better evidence localization.”。*

从图中可见，横轴从 10% 到 90%，纵轴从约 30 到 70，AudioScorer 的蓝色曲线下降最陡，尤其在 30% 到 60% 区间明显低于其他曲线，而未剪枝的虚线保持在 69 附近。这支持其排序更能定位关键证据，但它只说明排序质量，不直接等于任意保留率下的问答分数。跨任务敏感度也值得注意：在 10% 保留率下，自动语音识别对多数方法几乎崩溃，深度伪造检测也大幅下降，而音乐分类、说话人性别识别、声音事件检测和音频场景分类更稳健。例外是情感识别，多数方法剪枝后反而提升，AudioScorer 从 33.82 提升到 43.75。论文推测可能是过滤了无关上下文并缓解了中间丢失效应，但明确表示结果不足以确立这是唯一原因。

### MMAU-Pro 上是否接近未剪枝水平

在 MMAU-Pro 上的比较问题同样是 3 种保留率下谁的官方加权分更高，加权分越大越好。下表完整保留原表 2 的 7 种方法与 3 个保留率；列为保留率，数值均为 MMAU-Pro 官方加权分，越大越好。†表示高于同列未剪枝分数。

| 方法 | 70% 保留率 | 40% 保留率 | 10% 保留率 |
| --- | --- | --- | --- |
| Unpruned | 48.57 | 48.57 | 48.57 |
| FastV | 48.53 | 48.78† | 47.17 |
| SpeechPrune | 48.14 | 47.86 | 46.01 |
| DART | 48.45 | 47.90 | 46.27 |
| Frame | 48.42 | 48.20 | 46.41 |
| HeadRouter | 48.64† | 49.00† | 46.16 |
| AudioScorer | 49.18† | 49.53† | 48.51 |

在 3 个预算下 AudioScorer 都是剪枝方法中最高，70% 和 40% 还超过未剪枝，10% 时仅低 0.06 分，差距为 48.51 对 48.57。它较好保住了语音表现，10% 时语音为 46.35 对未剪枝 46.80，领先次优的 43.88。但限制同样清楚：空间、音乐和语音等细分类别上 Frame、FastV 和 DART 各有领先，混合域中声音音乐等子集只有 77 到 88 例，差异需谨慎解读。本表数值与单位依据论文 PDF。

下图是 AudioMarathon 各子任务在 10% 保留率下相对未剪枝的归一化雷达图，外圈代表未剪枝水平。读图时先找自动语音识别方向各方法是否都向内塌陷，再看 AudioScorer 的蓝色多边形是否在多数方向更靠外。

> **看图路径：** 1. 先找到自动语音识别方向各方法相对虚线的内凹程度；2. 再看音乐分类和说话人性别等方向是否都贴近外圈；3. 最后观察情感识别方向剪枝反而超出未剪枝的现象

[![原论文 Figure 4：AudioMarathon subtask scores at 10\\% retention, normalized to the unpruned model (WAR for ASR,…](https://arxiv.org/html/2610.26258v1/radar_audiomarathon_keep10_compact.svg)](https://arxiv.org/html/2610.26258v1/radar_audiomarathon_keep10_compact.svg)

*论文图 4。原论文 Figure 4:：“AudioMarathon subtask scores at 10\% retention, normalized to the unpruned model (WAR for ASR, Macro-F1 otherwise).”。*

从图中可见，雷达图中心低外圈高，多数方法在自动语音识别方向明显内凹，AudioScorer 的蓝色多边形在自动语音识别、语音内容推理和情感识别等方向比其他颜色更靠外，而在深度伪造检测等方向仍明显小于外圈虚线。这与表格结论一致：优势集中在语音和部分分类任务，真实性检测仍是短板。

### 去掉排序蒸馏和答案监督会发生什么

消融要回答两个监督信号各自的作用。论文在 70%、40% 和 10% 下分别去掉问题交叉注意、梯度排序蒸馏、下游交叉熵，以及换单层打分头和硬 Top-K 加直通估计器。结论是两者都重要，尤其在激进剪枝下，排序蒸馏影响最大，去掉后 10% 保留率下语音内容和音频分类明显下降，去掉下游交叉熵也有类似但更小的下降，说明前者提供显式令牌级监督，后者直接优化保留证据的答案质量。问题交叉注意的影响较小且随任务变化。

下表只整理论文明确报告的 10% 保留率下自动语音识别词准确率的变化，比较问题是同一预算下拿掉哪个组件损失最大，数值越大越好。

| 条件 | 完整模型 | 去排序蒸馏 | 去下游交叉熵 | 单层头 | 硬 Top-K 加直通 |
| --- | --- | --- | --- | --- | --- |
| 10% 保留自动语音识别词准确率 | 31.25 | 0.00 | 1.65 | 13.19 | 16.89 |

去掉排序蒸馏直接掉到 0.00，去掉下游监督掉到 1.65，简化打分头和改硬训练分别掉到 13.19 和 16.89，因此在该任务上排序蒸馏最关键。但不能推广到所有类别，音频真实性在 10% 下去掉蒸馏反而变好，去掉下游监督和用直通估计器也有帮助，说明组件收益取决于保留预算和子任务的证据需求。

### 单层打分头和硬训练为何只在低预算吃亏

论文还对比了打分头容量和训练松弛方式。单层线性头把多层感知机换成一层线性映射，直通估计器把软加权换成硬 Top-K 选择加直通梯度。在 40% 和 70% 保留率下，这两种简化有时持平甚至略好，尤其在音频场景分类和说话人实体识别等子任务上。但在 10% 保留率下，它们的语音内容和音频分类分数明显低于完整模型，说明软加权在激进剪枝时最有帮助。

另一个预算效应是深度伪造检测。去掉蒸馏在较大预算下明显降低该任务分数，但在 10% 下反而更高，硬训练和去掉下游监督也有类似现象。这再次说明没有哪个组件在所有类别和所有预算下都有益，结论要按保留率和子任务分开表述，不能把 10% 下的最优做法直接当成通用最优。

### 哪些任务和设置下结论不成立

首先是任务不均匀。论文在局限中明确指出，实验仅限 Qwen2.5-Omni-3B 和音频模态，激进剪枝下收益不均匀，音频真实性检测在 10% 保留率下大幅退化。因此超过竞争方法的说法只能放在任务相关的权衡中理解，不能说所有音频任务都适合 10% 剪枝。

其次是问题条件化的证据不足。消融显示问题交叉注意带来的增益不大且随任务变化，而训练数据是单个音频问答样本，没有显式对比同一录音下不同问题应选不同证据的监督，评测也是下游任务准确率而非问题相关的选择变化本身。论文因此表示无法判断小增益是机制局限还是评测局限，需要更受控的问题切换数据才能直接评估。

第三是基准本身的局限。论文说明据其所知，投稿时 AudioMarathon 尚未发表在同行评议场合，混合域小样本差异更需谨慎。把自动指标差值直接当成人工体验提升，或把某一保留率的最优值当成部署时可稳定获得的提升，都是误读。

### 复现第一步要固定什么

复现应从对齐剪枝深度和预算开始。所有方法都在解码器第 2 层后剪枝，前两层处理全序列，同一排序复用于不同保留率。基线中的 SpeechPrune 需把原文固定 750 令牌的中间预算改为随最终保留数变化的样本相关中间预算，把待删除量大致均分给相似度和注意力 2 个阶段，注意力重要性取查询位置和注意力头上的平均接收注意力，最后恢复时间顺序。预填充计算量要在同一 80 个按时长分层抽样的片段上测到首词元的平均 TFLOPs。

下表整理论文明确报告的额外开销，比较问题是打分本身贵不贵，TFLOPs 越小越好，占比越小越好。

| 比较对象 | AudioScorer 额外开销 | 占总预填充计算 |
| --- | --- | --- |
| 相对同深度无打分的 Frame | 0.16 TFLOPs | 0.4–0.9% |

打分只增加平均 0.16 TFLOPs，约占总预填充的 0.4–0.9%，相对总计算很轻。但训练仍需约 9 GPU 小时，且排序教师每个样本要一次额外的冻结大模型前向和反向，这是训练成本而非推理延迟，不能与推理帧率混为一谈。关键超参数要保留：问题编码器只训练最后两层和池化器，软加权残余 0.01，总损失两项等权，学习率 1e-4，训练 3 轮，每源 1000 例固定种子 42。本表数值与单位依据论文 PDF。

### 什么时候值得试还需要补什么验证

综合来看，当任务是长音频问答且瓶颈在解码器预填充，同时问题只依赖局部语音或声音证据时，值得尝试这种学出来的问题感知打分，尤其在 40% 到 10% 的激进预算下语音内容任务更可能受益。如果任务是深度伪造检测这类需要全局细微痕迹的任务，或预算已很充足，本文证据不支持优先使用 10% 剪枝。

动手第一步是先在自己的模型和时长分布上复现 70%、40%、10% 三档的同深度对照，确认未剪枝基线、词准确率与宏 F1 方向无误，再接入打分器并检查删除高分令牌是否带来更陡下降，以验证排序确实定位到证据。

还需补的验证包括：同一录音配不同问题的受控切换测试，直接度量选择随问题变化的程度；更多大音频语言模型和模态上的重复；以及小样本混合域类别的更大规模评测。只有补上这些，才能判断问题条件化的真实贡献和跨模型稳定性。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.26258v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
