---
title: "Generalizing Multimodal Foundational Models in Context-Driven Class Incremental Learning"
date: 2026-10-21
draft: false
tags: [音视频理解, 持续学习, 多模态学习, 知识蒸馏]
categories: [论文速递]
description: "针对音视频类别增量学习中新类冲掉旧类边界的问题，冻结三种多模态基础模型的音视频编码器，只训练音频引导视觉的注意力模块和分类器，并用特征与输出两级蒸馏锚定旧状态，在三个基准上提高了平均准确率并降低了遗忘，但结论依赖固定的任务划分、记忆样本量和训练预算。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.27298"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "冻结大模型做音视频持续学习：用音频做上下文去稳定视觉"
paper_digest_original_title: "Generalizing Multimodal Foundational Models in Context-Driven Class Incremental Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.27298v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.27298v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.27298v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"method","id":"method.continual","label":"持续学习"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"}]
paper_digest_primary_method: "持续学习"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音视频类别增量学习中新类冲掉旧类边界的问题，冻结三种多模态基础模型的音视频编码器，只训练音频引导视觉的注意力模块和分类器，并用特征与输出两级蒸馏锚定旧状态，在三个基准上提高了平均准确率并降低了遗忘，但结论依赖固定的任务划分、记忆样本量和训练预算。"
paper_digest_authors: [{"affiliations":["Indraprastha Institute of Information Technology, Delhi"],"name":"Avi Gupta"},{"affiliations":["Dolby Laboratories"],"name":"Nilotpal Sinha"},{"affiliations":["Dolby Laboratories"],"name":"Vishnu Raj"},{"affiliations":["Dolby Laboratories"],"name":"Sambuddha Saha"},{"affiliations":["Dolby Laboratories"],"name":"Pratik Joshi"},{"affiliations":["Indraprastha Institute of Information Technology, Delhi","Indian Institute of Technology, Kanpur"],"name":"Koteswar Rao Jerripothula"},{"affiliations":["Indraprastha Institute of Information Technology, Delhi","TYUST, China"],"name":"Tammam Tillo"}]
paper_digest_abstract_sha256: "fb4349a75b0cf848f3851934d99227242082e31d9dfe0bb6e39a965e928d1089"
paper_digest_sidecars: {"citation.bib":{"sha256":"4ebf17469bffe4ed826ad3ed24b2e783d772f5911c7d383b33457a5380dff590","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27298/citation.bib"},"citation.json":{"sha256":"4e98893b1fabbdba883c7cffccb31697e481b619773006b53dfef02013211581","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27298/citation.json"},"citation.ris":{"sha256":"364317c789fa0658717ac39bb880ea989c983726501f7486eeaec7912da2810a","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27298/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"b76b06be945b7231e6adb89a3235a13d902799986d0fb42fe9ad649282085fd4","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27298/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4f7fb68f0bb00b5e3eb9c17348d1a7ceb3b81c633fec5d5646a36cc2cae3bbfe"
paper_digest_api_reader_plan_sha256: "b2cb02c5bbbe2b6275b66220a17e4bdc26dd32ef5c9e84c8600a8511a8c66d10"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4d341c80c686e7f2afdd07b88749f455352875159aafaaa4ac08ca4f9c802c68"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "c2edd59c91a0760a76f3e67063990d5db2564006fb1d033ab757d9d24c42c0cc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "1bed9d418452213f435e8a2acb6f6aa56ec088c6364350fc80d869650a72f15c"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4e687ebc6853f3bc8de404c7909cf93ca833dc2193353538520dcb3a1da720d2"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 冻结大模型做音视频持续学习：用音频做上下文去稳定视觉

> 英文题目：*[Generalizing Multimodal Foundational Models in Context-Driven Class Incremental Learning](https://arxiv.org/abs/2610.27298v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding)
- **研究方法**：[持续学习](/audio-paper-digest-blog/papers/?concept=method.continual)；[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Avi Gupta：Indraprastha Institute of Information Technology, Delhi
- Nilotpal Sinha：Dolby Laboratories
- Vishnu Raj：Dolby Laboratories
- Sambuddha Saha：Dolby Laboratories
- Pratik Joshi：Dolby Laboratories
- Koteswar Rao Jerripothula：Indraprastha Institute of Information Technology, Delhi；Indian Institute of Technology, Kanpur
- Tammam Tillo：Indraprastha Institute of Information Technology, Delhi；TYUST, China

## 📌 核心摘要

类增量学习（Class-Incremental Learning，CIL）要求模型按任务依次学习互不相交的新类别，测试时要在全部已见类别上分类，难点是新类到来时可训练的决策边界漂移导致旧类遗忘。音视频场景还多了一层困难，两个模态的对齐关系容易在增量更新中被破坏。本文输入是每段视频的视频帧序列和对应音频波形，输出是已见类别标签，方法冻结多模态基础模型（Multimodal Foundational Model，MFM）的音频编码器和视觉编码器，只训练后端的融合与分类部分。音频特征作为上下文进入单层注意力模块，以视觉为查询、音频为键与值做跨模态引导，再经自注意力与前馈网络精炼，得到样本级的融合视觉表示送入线性分类器。训练在交叉熵之外增加特征级均方蒸馏和 logit 级 KL（Kullback-Leibler）散度蒸馏，使当前任务在示例样本上的表示与输出接近上一任务状态。在 AudioMAE 与 VideoMAE 编码器下，该方法在 AVE-CI 上平均准确率（Mean Accuracy，\(\mathcal{A}_m\)）为 78.67%，超过同设置 AV-CIL 基线 74.04%。该结论适用于有示例回放的音视频事件分类增量设置，无示例时仍高于同类基线，但线性探针等无引导复用在原文中表现明显更差，原文未报告训练时长与完整推理代价。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/avigupta2798/MFM-CIL> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的输入输出是什么

本文处理的是音视频类别增量学习。输入是短视频片段，包含一串视频帧和对应的一段音频信号，输出是对该片段所属事件类别的预测，例如某种乐器演奏或车辆声。音频和视觉在时间上对应，模型需要利用这种对应关系做细粒度区分。

任务按顺序分成多个阶段，每个阶段只给出当前新类别的训练视频和少量从旧类随机保留的记忆样本，测试时却要求识别迄今见过的所有类别。必须保留的信息是旧类的判别边界和跨模态对应关系，不能为了拟合新类而把旧表示冲掉。训练时见不到未来类别，测试时不告知任务编号，这是增量识别比普通分类更难的地方。

评价看 2 个方向：学完所有任务后对已见类的总体识别能力，以及学习过程中旧任务准确率的最大下滑幅度。前者越高越好，后者越低越好。初学者容易只看最终准确率，本文的结论必须同时满足准确率高、遗忘低才成立，单看一端会误判方法的稳定性。

### 已有路线为什么不够

单模态增量学习已有 4 类常见做法：约束重要参数更新的正则化、让新旧模型输出保持一致的知识蒸馏、保留旧样本重放的记忆回放、隔离或扩展参数的架构方法。这些在图像或文本上有效，但直接搬到音视频时，音频和视觉由独立编码器提取，模态间缺乏对齐，增量过程中容易互相干扰，旧类的跨模态关联尤其容易被冲散。

另一条路线是视觉语言基础模型的增量适配，用提示、适配器或解析式分类器缓解遗忘，但主要围绕图像与文本，不涉及音频与视频的时间对齐。本文指出音视频基础模型的增量问题更特殊：即使编码器本身把 2 模态放进统一隐空间，冻结特征直接拼接仍会在任务推进中退化，说明对齐先验不等于增量可用。

因此本文不属于从零训练音视频分类器，也不属于微调整个大模型，而是属于基于冻结预训练模型的增量适配：冻结大而通用的编码器，只训练轻量的融合与分类部分，并用蒸馏锚定旧状态。这种划分把通用表示和任务相关决策面分开，遗忘主要被定位在可训练的后端。

### 为什么强特征仍会遗忘

论文首先澄清一个误解：大模型见过很多数据，不等于它已经学会了增量任务的分类器。冻结编码器提供的是通用表示先验，而不是针对当前标签集合的决策面，遗忘主要发生在可训练的融合模块和分类器随新类漂移时。换句话说，特征好只是起点，分类边界仍要在增量数据上逐步建立和维护。

**类别增量学习 × 灾难性遗忘：** 类别增量学习指按任务分批加入新类别，测试时要识别迄今见过的所有类别；灾难性遗忘指学新类时可训练部分的决策边界漂移，导致旧类准确率大幅下降。本文把前者当任务组织方式，把后者当需要抑制的现象，冻结编码器、记忆回放和两级蒸馏都是为了在学新类时保住旧边界。

下面这张预分析图把这一点可视化，左侧是随任务增加的样本示意，中间是两类特征提取器的逐任务分布，右侧是准确率与遗忘的对照。读图时重点看分簇是否保持以及柱状趋势是否分叉，不要只看某一任务的绝对高度。

> **看图路径：** 1. 先看中间两排 t-SNE：上排传统编码器是否随任务变杂，下排基础模型特征是否保持分簇；2. 再看右上准确率柱状图中三种颜色随 Task 0 到 Task 3 的变化趋势；3. 最后看右下遗忘柱状图中哪种颜色在 Task 1 到 Task 3 更低

[![原论文 Figure 1：Comparison of standard audio-visual feature extractor approach with MFMs.](https://arxiv.org/html/2610.27298v1/teaser_mfm.png)](https://arxiv.org/html/2610.27298v1/teaser_mfm.png)

*论文图 1。原论文 Figure 1:：“Comparison of standard audio-visual feature extractor approach with MFMs.”。*

从像素可见，上排传统独立编码器的视觉与音频散点随 Task 0 到 Task 3 逐渐混杂成一团，而下排多模态基础模型提取的散点在同样阶段仍保持颜色相对分离的簇。右上准确率图中代表本方法的蓝色柱在 4 个任务上保持高位，代表传统方法的黄色柱明显下滑；右下遗忘图中黄色柱在 Task 1 到 Task 3 显著更高。这说明好特征有助于分离，但右上图中代表无引导无蒸馏线性拼接的紫灰色柱同样下滑，证明只靠冻结强特征还不够，必须有针对增量的组织方式。

### 整体流程如何分工

方法分成 3 段。第一段是基础特征提取，用冻结的音频编码器和视觉编码器分别把音频信号和视频帧变成序列表示。第二段是注意力上下文引导，用音频表示去引导视觉表示，得到融合后的精炼视觉表示。第 3 段是轻量分类器，把融合表示映射到已见类别数，随任务增加而扩展输出维度。

训练时基任务只用分类损失，增量任务则在当前新样本加旧记忆样本的混合数据上，同时用分类损失学新类，用 2 级蒸馏把当前融合特征和旧类输出往上一任务的状态拉。推理时只需走编码器加引导加分类器的前向，不再需要旧模型，这种设计把历史知识沉淀在当前参数和记忆特征中。

先看总体结构图，理解冻结与可训练的划分以及 2 级蒸馏跨任务连接的位置，再进入各组件细节。重点区分实线数据流和红色虚线约束，虚线只在训练时起作用。

> **看图路径：** 1. 沿左侧视频帧和音频波形到编码器、引导模块、分类器的主路径看数据流向；2. 对照右下图例区分雪花冻结与火焰可训练部件；3. 看 Task t-1 到 Task t 之间的两条红色虚线分别约束哪一层

[![原论文 Figure 2：\[Left\] The overall architecture.](https://arxiv.org/html/2610.27298v1/architecture.png)](https://arxiv.org/html/2610.27298v1/architecture.png)

*论文图 2。原论文 Figure 2:：“[Left] The overall architecture. At current task t, audio (z_a) and visual (z_v) representations are derived from audio signal (x_a) and video frames (x_v) using frozen audio…”。*

图中左侧下方实线框是当前任务 t，上方虚线框是上一任务 t-1，视频帧和音频分别进入黄色视觉编码器与蓝色音频编码器，雪花表示冻结，得到表示后进入绿色引导模块再进分类器。右侧红色双向虚线标出 3 类损失：当前预测与真值的交叉熵、两任务融合特征之间的特征蒸馏、两任务旧类输出之间的输出蒸馏。右上列出 3 种可选基础模型，右下图例明确了符号含义，可训练的只有引导模块和分类器。

### 冻结编码器输出什么形状的表示

对一个样本，记视频帧为多帧图像张量，音频为 1 维信号。它们分别经过对应基础模型的视觉编码器和音频编码器，得到视觉序列表示和音频序列表示。公式上就是 2 次独立的前向映射，编码器权重全程不变，后续梯度不进入这部分。

\[z^{model}_{v}=\psi^{model}_{v}(x_{v});\quad z^{model}_{a}=\psi^{model}_{a}(x_{a});\]

这里下标区分模态与所用基础模型，视觉侧长度对应取样的帧数，音频侧长度随模型而异，隐维度也随模型而异。理解符号时注意表示是序列而非单个向量，后续注意力要在序列长度上做加权，而不是对整段取平均。

**多模态基础模型 × 冻结编码器：** 多模态基础模型指在大规模数据上把音频和视觉对齐到统一隐空间的大模型，本文用 SAM-Audio、ImageBind、Qwen2.5-Omni-3B；冻结编码器指训练时不更新它们的音频和视觉编码器，只当固定特征提取器。这样保留通用先验，把遗忘来源限制在后端的融合模块和分类器，也允许离线提取特征以降低增量训练开销。

3 种基础模型的实现差异只影响输入预处理和维度，不影响后续接口：视觉侧统一取 16 帧，音频侧按各自编码方式切分，隐维度在后文引导模块中保持一致。编码器冻结意味着增量训练的梯度不进入这部分，计算上可以离线先提取特征，减轻反复训练的开销。

不同基础模型的维度与序列长度配置如下，表前先说明比较问题：3 种编码器的输出规模是否一致，这决定引导模块的注意力维度和可训练参数量，隐维度越大则注意力与前馈部分越宽。

| Models (model) | \(d^{model}\) | \(T_{v}\) | \(T^{model}_{a}\) |
| --- | --- | --- | --- |
| SAM-Audio | 1024 | 16 | 59 |
| ImageBind | 1024 | 16 | 1 |
| Qwen2.5-Omni-3B | 2048 | 16 | 251 |

表中可见 SAM-Audio 与 ImageBind 隐维度为 1024，Qwen2.5-Omni-3B 为 2048，视觉帧数均为 16，音频切分数分别为 59、1、251。音频长度差异很大，ImageBind 把频谱当单图处理因而最短，Qwen2.5 切分最细。这解释了为何 Qwen2.5 分支的可训练参数明显更多，也提示音频上下文的信息密度在不同基础模型下并不等价，选择骨干时要同时考虑精度和成本。

### 音频如何引导视觉融合

直接拼接不能解决模态干扰，论文用单层注意力块做引导。先对视觉与音频表示做层归一化，然后做 1 次多头注意力：视觉做查询，音频做键和值，使每个视觉时刻按与音频的相似度加权汇聚音频信息，再与原始视觉残差相加，随后过前馈网络与残差，得到初步融合表示。这种残差设计保证即使音频不可靠，视觉主干仍能保留。

\[\text{MHA(Q,K,V)}=\text{softmax}\Big(\frac{QK^{T}}{\sqrt{d^{model}}}\Big)V\]

该式是注意力核心，先算查询与键的缩放点积再做 softmax 得到权重，最后加权求和值。查询来自视觉保证输出保持视觉序列长度，键值来自音频保证引入的是音频上下文，缩放分母与隐维度相关。多头意味着把隐维度分成 16 组并行做同样的加权再拼接，增强对不同关联模式的覆盖。

**注意力上下文引导 × 多头注意力：** 注意力上下文引导是本文的融合方式：以视觉表示为查询，以音频表示为键和值，让每个视觉时刻加权汇聚音频上下文；多头注意力是实现该加权的具体计算，之后再接自注意力和前馈网络精炼。分工是音频提供任务间相对稳定的上下文，视觉保留待分类主体，组合后得到随样本变化的融合视觉表示。

得到初步融合后，再做 1 次自注意力精炼：对融合表示自身做查询键值相同的注意力，加残差与前馈，输出最终精炼视觉表示送分类器。整个引导块只有一层，16 个注意力头，前馈隐维度与基础模型隐维度一致。与面向单任务检索的音频引导不同，这里的设计目标是任务稳定，即新类到来时仍能保持可比的融合方式，而不是单次检索的最强表达，这也是论文强调音频作为任务稳定上下文的原因。

### 三项损失各约束什么

分类损失负责学新类，是预测分布与真值之间的交叉熵，按当前已见类别数求和，只看当前任务的判别是否正确。它提供可塑性，但单独使用时容易过拟合当前任务分布，是遗忘的主要来源。

\[\mathcal{L}_{ce}=-\sum_{i=1}^{\mathcal{C}_{t}}y_{i}\log(\hat{y}_{i})\]

式中求和范围是当前已见类别总数，符号分别表示预测概率与独热真值。该损失在基任务单独使用，在增量任务与两项蒸馏并用，权重关系决定稳定与可塑的平衡。

特征蒸馏约束中间表示，要求当前模型在记忆样本上的融合后视觉特征去逼近上一任务模型的同样本特征，用平方误差衡量。

\[\mathcal{L}_{fd}=||z^{{}^{\prime}model}_{v,t}-z_{v,t-1}^{{}^{\prime}model}||^{2}\]

该式只在记忆样本上计算，目的是不让融合方式随新数据漂移。输出蒸馏约束类别分布，对每个已学任务的旧类输出计算当前与上一任务预测之间的 KL 散度再求和，防止分类器偏向新类。

\[\mathcal{L}_{kd}=\sum_{s=1}^{t}KL(\hat{y}_{t}^{C_{s}}||\hat{y}_{t-1}^{C_{s}})\]

式中对历史任务求和，比较的是同一旧类集合上的 2 次预测分布。总目标是三项加权求和，两个蒸馏权重在实现中均取 1.0。基任务没有上一模型，只用分类损失；增量任务三项并用。

**特征蒸馏 × 输出蒸馏：** 特征蒸馏约束当前任务的融合后视觉特征去靠近上一任务在记忆样本上的同类特征，保持中间表示稳定；输出蒸馏用 KL 散度约束当前分类器对旧类输出分布去靠近上一任务的输出，保持决策边界稳定。前者管表示层，后者管类别分布层，两者只在增量阶段起作用，基任务只有交叉熵。

### 在什么数据和条件下比较

实验沿用 AV-CIL 的 3 个音视频增量基准。AVE-CI 约 4000 段、28 类，分 4 个任务每任务 7 类；K-S-CI 约 23000 样本、30 类，分 5 个任务每任务 6 类；VS100-CI 约 60000 样本、100 类，分 10 个任务每任务 10 类，任务最长，最考验长期遗忘。任务划分固定，类别互不重叠，测试时要求识别所有已见类。

**平均准确率 × 平均遗忘：** 平均准确率是对每个任务结束后在所有已见类上测得准确率再跨任务平均，越高越好，反映整体可用性；平均遗忘是每个旧任务从历史最高点到当前的最大下降再跨任务平均，越低越好，反映稳定性。两者要一起看，只保旧类会牺牲新类，只冲新类会拉高遗忘，本文结论必须同时满足准确率高、遗忘低才成立。

实现上用 PyTorch 单卡 A100，冻结所有基础模型编码器，只训练引导与分类器，优化器为 SGD 学习率 5e-5、权重衰减 1e-4、余弦退火，每任务最多 200 轮。记忆库按 AV-CIL 设置在 3 个数据集分别为 340、500、1500 个样本，随机选择，特征离线提取后训练。主论文报告单次运行，附录补了 3 种随机种子的均值与标准差，用于判断提升是否稳过任务划分的波动，这是理解结论适用条件的关键。

### 同骨干下方法本身带来多少提升

先看公平骨干对照，即双方都用 AudioMAE 与 VideoMAE 编码器，只比后端设计。此时比较问题是：在不换强特征的前提下，上下文引导加双蒸馏是否比已有增量方法更好地平衡稳定与可塑。指标方向是平均准确率越高越好，平均遗忘越低越好，记忆条件必须对齐才能比。

为观察任务推进中的稳定性，先看 ImageBind 骨干下随任务步的准确率变化，重点看差距是保持还是拉大，而不是只看最后平均值。

> **看图路径：** 1. 比较每个子图中深蓝本方法与浅红基线在各任务步的高度差；2. 观察任务数增多时基线下降是否更快；3. 注意纵轴起点不是零，差距的视觉幅度不要直接当成绝对值

[![原论文 Figure 3：Comparative analysis of task-wise test accuracy (\\%) between AV-CIL \[57\] and our proposed…](https://arxiv.org/html/2610.27298v1/task_perf_mfm.svg)](https://arxiv.org/html/2610.27298v1/task_perf_mfm.svg)

*论文图 3。原论文 Figure 3:：“Comparative analysis of task-wise test accuracy (\%) between AV-CIL [57] and our proposed approach (on ImageBind).”。*

3 个子图分别对应 AVE-CI 的 4 步、VS100-CI 的 10 步、K-S-CI 的 5 步，深蓝本方法在每一步都高于浅红 AV-CIL，且随步数增加基线下滑更快，本方法保持相对平稳。这支持稳定性来自方法而非某一步的偶然高点，但柱状图纵轴从 60 开始，视觉差距会被放大，仍需结合平均数值判断幅度，不能把图上长度直接读成百分点。

同骨干数值上，有记忆样本时本方法在 3 个数据集的平均准确率与遗忘为 78.67% 与 1.05%、79.12% 与 4.96%、81.21% 与 5.26%，相对 AV-CIL 的 74.04% 与 7.63%、72.80% 与 5.49%、73.06% 与 6.48% 均有提升；无记忆样本时也能超过同条件基线。需要说明的未胜出细节是：VS100-CI 与 K-S-CI 的无记忆遗忘仍在 5% 以上，说明长任务下仅靠蒸馏与小引导块不能把遗忘压到接近零，记忆样本依然重要。

### 换强基础模型后是否依然成立

第二个比较问题是泛化性：把同一后端换到 SAM-Audio、ImageBind、Qwen2.5-Omni-3B 3 种冻结特征上，相对同样换骨干的 AV-CIL 是否仍有优势。条件是双方用相同特征与超参数、同样随机选记忆样本，因此差距可归于后端而非特征本身。论文报告在 ImageBind 上提升最大，3 个数据集分别提高约 5 到 8 个百分点，SAM-Audio 与 Qwen2.5 上也有提升，且 ImageBind 整体平均准确率比另两种高约 3 个百分点。

但作者也明确做了反向核查：把 AV-CIL 直接搬到强特征上同样涨幅明显，个别设置下 AV-CIL 的涨幅甚至超过本方法，例如 VS100 上 Qwen2.5 的提升与 K-S 上 SAM-Audio 的提升，说明收益并非只偏向本文方法，强特征本身对基线也有帮助。这个对照很重要，它把骨干红利和方法红利分开，避免把全部提升都归于新模块。

任务序列鲁棒性方面，作者改变每任务类别数与任务总数，覆盖从每任务 50 类的大块到每任务仅 2 到 5 类的大量小步，发现在不同划分下本方法仍保持高位。这支持架构对任务切分不敏感，但这些是同一数据集的重划分，不是新领域或新模态，跨数据集泛化仍未评测，不能推广到开放环境。

### 单模态和线性拼接为什么不够

消融要回答两个问题：没有引导与蒸馏时冻结特征能否直接用，双模态与单模态差距多大。第一个对照是线性探测，即冻结音视频特征简单拼接后只训练线性分类器，不加引导与蒸馏。结果是线性探测在各骨干与数据集上明显低于完整方法，例如 ImageBind 上完整方法 3 个数据集达 91% 左右、84% 左右、86% 左右，而探测仅约 80%、70%、71%，且随任务退化更快。这证明强先验不等于可直接增量复用。

第二个对照是单模态。只用音频或只用视觉时性能大幅下降，理解这一点需要看具体的单双模态数值对比，比较问题是同一骨干、同一 AVE 数据下输入模态不同带来的差距。

| Audio | Video | SAM-Audio | Qwen2.5 |
| --- | --- | --- | --- |
| ✓ | ✗ | 30.75 | 67.75 |
| ✗ | ✓ | 38.98 | 69.84 |
| ✓ | ✓ | 88.68 | 86.14 |

表中在 AVE 数据集上，SAM-Audio 仅音频为 30.75%，仅视觉为 38.98%，双模态跃升至 88.68%；Qwen2.5 仅音频 67.75%、仅视觉 69.84%，双模态达 86.14%。这说明单模态远不足以支撑细粒度事件区分，双模态融合带来质变，但单模态基线本身未加同等引导，不能理解为音频无用，只是当前融合设计下双模态最优。Qwen2.5 单模态本身较高，说明不同先验的单模态强度不同，双模态收益幅度也不同。

**记忆样本 × 线性探测：** 记忆样本指从已学类别随机保留的少量旧样本，在新任务训练时混入一起训练，用于锚定旧分布并支撑两级蒸馏的计算；线性探测指冻结特征上只训练一个线性分类器、不加引导和蒸馏的对照做法，用于检验原始特征是否可直接用于增量。本文用记忆样本维持稳定，用线性探测证明强先验本身不足以解决增量问题。

### 损失项和分步准确率说明了什么

损失消融显示在 AVE-CI 上从仅交叉熵逐步加入输出蒸馏、特征蒸馏到两者并用，准确率单调上升、遗忘单调下降，ImageBind 从 86.55% 与 3.18% 最终到 91.48% 与 0.52%。其中特征蒸馏对稳定表示的贡献大于输出蒸馏，但该结论来自单一数据集，是否在更长的 VS100 上同样成立需要另行验证。超参数扫描显示两权重取 1.0 在多数组合最优，仅个别组合略高，且整体方差小，说明对权重不敏感。

分步表回答的是平均值掩盖的过程问题：提升来自起点更高还是后期更稳。表前说明比较问题为在相同骨干与相同任务步下，本方法与 AV-CIL 在每一步已见类上的测试准确率如何变化，数值单位均为百分比，越高越好。

| Steps | SAMAudio | SAMAudio | ImageBind | ImageBind | Qwen2.5 | Qwen2.5 |
| --- | --- | --- | --- | --- | --- | --- |
| Step 0 | 86.15 | 90.39 | 91.34 | 95.20 | 90.38 | 92.30 |
| Step 1 | 85.23 | 91.43 | 87.14 | 95.71 | 83.33 | 86.19 |
| Step 2 | 83.01 | 86.35 | 84.75 | 86.67 | 81.58 | 83.80 |
| Step 3 | 83.14 | 86.55 | 79.90 | 88.32 | 76.64 | 82.23 |

表中 AVE-CI 共 4 步，ImageBind 下本方法从 95.20% 经 95.71%、86.67% 到 88.32%，基线从 91.34% 经 87.14%、84.75% 到 79.90%；SAM-Audio 与 Qwen2.5 分支同样每步领先。这表明优势既有起点高的成分，也有后期更稳的成分，而非仅靠最后一步反超。起点高可能来自更好的融合初始化，后期稳则与蒸馏约束有关。

更长任务的演化需要看 10 步的 VS100-CI，因为平均值可能被早期高点拉高，而长期遗忘主要看尾部。表前同样明确比较问题：在 10 个任务步上，同一骨干下两种方法的已见类准确率如何衰减。

| Steps | SAMAudio | SAMAudio | ImageBind | ImageBind | Qwen2.5 | Qwen2.5 |
| --- | --- | --- | --- | --- | --- | --- |
| Step 0 | 83.14 | 91.33 | 92.33 | 93.34 | 82.54 | 92.94 |
| Step 1 | 81.84 | 85.70 | 86.30 | 89.02 | 80.93 | 86.20 |
| Step 2 | 78.06 | 83.03 | 84.10 | 87.46 | 80.47 | 87.19 |
| Step 3 | 76.45 | 82.02 | 81.12 | 86.91 | 77.0 | 83.59 |
| Step 4 | 76.36 | 80.61 | 78.80 | 86.24 | 75.31 | 83.35 |
| Step 5 | 72.69 | 77.36 | 75.62 | 82.96 | 71.35 | 81.25 |
| Step 6 | 70.05 | 75.65 | 73.18 | 82.43 | 70.31 | 79.88 |
| Step 7 | 68.93 | 75.21 | 71.33 | 81.96 | 67.25 | 78.51 |
| Step 8 | 67.15 | 72.82 | 67.27 | 79.64 | 65.01 | 75.93 |
| Step 9 | 65.76 | 72.60 | 66.86 | 79.46 | 64.14 | 75.20 |

表中 ImageBind 下本方法从 93.34% 缓慢降至 79.46%，基线从 92.33% 降至 66.86%；SAM-Audio 与 Qwen2.5 分支同样全程领先，尾部差距比头部更大。这支持方法缓解了长期崩塌，但也显示即使本方法在 10 步后仍下降约 14 个百分点，说明遗忘只是减轻而非消除。长任务尾部的绝对值仍远低于起点，不能把平均数当成每一步都能达到的水平。

### 结论的边界与未测项

首先是成本与部署边界。训练参数随隐维度增长，Qwen2.5 分支明显更宽，峰值显存与延迟高于另两种；记忆库存的是特征而非原始媒体，3 个数据集的平均特征缓存分别为数百 MB 到 1 GB 量级，随类别与样本数线性增长，实际部署仍需预算。离线提取特征降低了反复编码的开销，但首次提取 3 种大编码器的成本并未免除。

其次是评测边界。主结果多为单次运行，附录多种子显示标准差较小且差距超过波动，但仍只覆盖任务顺序与划分，未覆盖新采集设备、新声学环境或类别语义漂移。超参数 1.0 的最优性只在给定优化器、轮数与记忆量下成立，换训练预算可能变化，不能当成普适最优。

最后是机制边界。音频被设为稳定的引导源，但论文未证明音频在所有事件中都更稳定，若某类音频本身噪声大或缺失，引导可能失效；该缺音频或单模态缺失的鲁棒性尚未系统评测。把相关性当因果、把平均提升推广到每一类都是过度解读，需要类别级遗忘分布才能判断短板在哪里。

### 复现第一步做什么

复现应从 AV-CIL 的划分与记忆设置开始：按原文的任务切分与 340、500、1500 记忆量，用随机选择构造混合训练集，离线提取冻结编码器特征后再训练引导与分类器，避免一边微调大模型一边增量。先对齐数据划分和记忆采样，再谈模块效果，否则差距可能来自数据而非方法。

关键超参数是两个蒸馏权重均取 1.0、引导块单层 16 头、SGD 学习率 5e-5、每任务最多 200 轮，分类器输出维度随已见类扩展。先复现同骨干对照，再换 3 种基础模型验证泛化，最后补线性探测与单模态对照以确认提升来源。每一步都要同时记录平均准确率和平均遗忘，只看一端容易误判。

作者资源方面，论文给出代码链接，经本次校验该链接当前可访问，可写为作者资源当前可用。但代码可用不等于权重可下载或一键可运行，复现仍需按原文准备 3 种基础模型的编码器与数据集划分，并核对特征维度与音频切分数是否与表 1 一致。建议先跑通 AVE-CI 四任务小规模设置，再扩展到 VS100-CI 长任务。

### 什么时候值得尝试

当任务是音视频事件识别、类别分批到来、能保留少量旧特征、且可以使用冻结大模型特征时，该方法值得尝试：它用轻量引导保留跨模态关联，用双蒸馏同时稳住表示与边界，在 3 个基准上兼顾了准确率与遗忘。对于算力有限但能离线提取特征的持续部署场景，只训练浅层模块的路线尤其有吸引力。

若场景无记忆预算、音频高度不可靠、或任务是跨领域与开放词汇，则不应直接套用结论，需要补做无记忆、缺模态与跨域验证。特别是音频缺失或强噪声的情况，当前以音频为引导的设计可能需要回退策略，不能默认稳定。

下一步验证应包括多随机种子下的类别级遗忘分布、不同记忆量下的曲线、以及缺音频时的回退策略，才能判断稳定引导的适用条件。只有补齐这些条件，才能把论文中的平均提升转化为具体业务中的预期收益。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.27298v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-21/)
