---
title: "Toward Human-Aligned Judgement of Speech Emotion Similarity"
date: 2026-09-29
draft: false
tags: [语音质量评估, 偏好优化, 主观评测, 语音, 基准测试]
categories: [论文速递]
description: "论文针对参考引导的 expressive 语音生成评价问题，用三元组分级比较构建 SES-Bench 并以累积 logit 序回归训练 SES-Judge，在 848 个测试比较上取得 Spearman 0.5297 与准确率 74.96%，显著高于嵌入余弦与大音频语言模型，但仍只覆盖 TTS 与 VC 两类任务与有限情感分布。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.32504"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "情感相似不是分类对错，而是谁更接近参考：SES-Bench 与 SES-Judge 的对齐做法"
paper_digest_original_title: "Toward Human-Aligned Judgement of Speech Emotion Similarity"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.32504v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.32504v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.32504v1.pdf"
paper_digest_primary_task: "语音质量评估"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-quality","label":"语音质量评估"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "偏好优化"
paper_digest_score: 7.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文针对参考引导的 expressive 语音生成评价问题，用三元组分级比较构建 SES-Bench 并以累积 logit 序回归训练 SES-Judge，在 848 个测试比较上取得 Spearman 0.5297 与准确率 74.96%，显著高于嵌入余弦与大音频语言模型，但仍只覆盖 TTS 与 VC 两类任务与有限情感分布。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yun-Shao Tsai"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yi-Cheng Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chih-Kai Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ho-Jung Cheng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tsun-Yi Chang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sheng-Wei Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yi-Shan Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hsiang-Chun Chang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liang-Chieh Lee"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hung-yi Lee"}]
paper_digest_abstract_sha256: "b17ca93e3e8e0687d7c227ff2e939f4345a5ed3ef670708bdfa878a773df91df"
paper_digest_sidecars: {"citation.bib":{"sha256":"5b956de4080112bb60451cbe47a3537812fe28cd4583ebca74da8a8b3e158074","url":"/audio-paper-digest-blog/data/papers/2026-09-29/2609-32504/citation.bib"},"citation.json":{"sha256":"c6249e0cbe73b9908309c579d999dad80ca9a199c91bed5b76938d500b98505b","url":"/audio-paper-digest-blog/data/papers/2026-09-29/2609-32504/citation.json"},"citation.ris":{"sha256":"45522abea28e1b3fa04a38fcfe38dc84e58de61a004b739097b8f7fe949ea83e","url":"/audio-paper-digest-blog/data/papers/2026-09-29/2609-32504/citation.ris"},"rethink-context.json":{"sha256":"656b80011097b8cb851ace37d656ba4980110b476074b3a766edd37fa6bbbffd","url":"/audio-paper-digest-blog/data/papers/2026-09-29/2609-32504/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2f5f563526fb0ec4448cb98acdf2324f74da6f719aef14889f007e65812ed524"
paper_digest_api_reader_plan_sha256: "345fe5900fc5425ce988dfd7de279a32054813e2c6fe5f860418b351aaf047ab"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4ae51d2833b0f0fb2979d416cbddf5ceb2480a2145192372446bab4b7ddf4c0c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "3490ccd131e44c41cddd908f25ea9a43ac5fd962b6e99f08662c35dcaceb78c4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bd42708a013ddb74202ec162ca3d6c05f796bb562c3f1b54eeded79a64665c78"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "879661f2c3affd523c263c45a8b31e199875a20a506a0ea08227508672a2d58f"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 情感相似不是分类对错，而是谁更接近参考：SES-Bench 与 SES-Judge 的对齐做法

> 英文题目：*[Toward Human-Aligned Judgement of Speech Emotion Similarity](https://arxiv.org/abs/2609.32504v1)*

> 标签：#语音质量评估 | #偏好优化 | #主观评测 | #语音 | #基准测试
>
> 评分：**7.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yun-Shao Tsai：机构信息未在 arXiv HTML 中可靠披露
- Yi-Cheng Lin：机构信息未在 arXiv HTML 中可靠披露
- Chih-Kai Yang：机构信息未在 arXiv HTML 中可靠披露
- Ho-Jung Cheng：机构信息未在 arXiv HTML 中可靠披露
- Tsun-Yi Chang：机构信息未在 arXiv HTML 中可靠披露
- Sheng-Wei Wu：机构信息未在 arXiv HTML 中可靠披露
- Yi-Shan Chen：机构信息未在 arXiv HTML 中可靠披露
- Hsiang-Chun Chang：机构信息未在 arXiv HTML 中可靠披露
- Liang-Chieh Lee：机构信息未在 arXiv HTML 中可靠披露
- Hung-yi Lee：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

表现力语音生成评估需要判断候选语音与参考语音在情感表达上的接近程度，输入为参考与候选语音对，输出为相似度分数，难点是嵌入余弦与类别标签推导的排序常与人耳偏好不一致。作者先构建语音情感相似度基准（Speech Emotion Similarity Benchmark，SES-Bench），用零样本语音合成与语音转换生成候选对并收集5人7级比较标注，再冻结维度情感识别编码器并经层加权融合得到话语嵌入，然后以累积Logit序数回归将双候选分数差映射为7类偏好分布进行训练。与直接用融合嵌入余弦或提示大型音频语言模型（Large Audio-Language Model，LALM）做判断相比，该方法显式建模偏好方向与强度差异，因而更贴合人类分级判断。在848个测试三元组评测下，语音情感相似度判别器（Speech Emotion Similarity Judge，SES-Judge）的Spearman相关为0.5297，高于VAD回归融合余弦基线的Spearman相关0.4820。该结论限于英语MSP-Podcast训练与CREMA-D测试的表演化情感，未验证跨语言、强口音与长时风格化生成的泛化能力。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/danielqwer/Speech-Emotion-Similarity.git> → <https://github.com/danielqwer/Speech-Emotion-Similarity> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/3loi/SER-Odyssey-Baseline-WavLM-Multi-Attributes> — 链接可访问（HTTP 200）

- 数据相关资源：<https://github.com/danielqwer/Speech-Emotion-Similarity.git> → <https://github.com/danielqwer/Speech-Emotion-Similarity> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.anthropic.com/news/claude-opus-5> — 链接可访问（HTTP 200）

- 第三方资源：<https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文输出什么？

本文的输入是论文原文与官方原图像素，目标是让刚进入语音情感领域的研究生能够核对事实并复述方法。必须保留的信息包括任务定义、数据构造方式、标注量表、模型计算通路、训练损失、评价协议与关键数字，输出是 1 篇按学习依赖展开的中文技术解读。

研究背景是文本转语音、声音转换与语音到语音翻译越来越能表达情感，开发者需要反复判断生成语音在情感上是否贴近参考语音。人工听测可以直接做这个判断，但成本高、难以在模型迭代中频繁使用。自动的情感相似度量因此被提出，常见做法是抽取嵌入后算余弦相似度，例如使用 emotion2vec 嵌入的 EMO SIM，但论文指出这类分数与人工选择并不总是一致。

本文要解决的不是给单条语音打情感类别，而是判断两个候选语音中哪一个在情感上更接近同一个参考，以及接近程度差多少。这是一个相对判断问题。论文为此做了两件事，一是发布 SES-Bench 基准，提供带强度的人工三元组比较，二是训练 SES-Judge 打分器，学习从这些比较中预测参考与候选之间的情感相似分数。后续所有方法细节、实验对照与复现讨论都围绕这条主线展开。

### 已有路线在同输入同目标下差在哪里？

先看语音情感数据集路线。已有数据集多用类别标签、效价唤醒支配度维度标签或自然语言风格描述来刻画单条语音。论文指出，由类别或维度标签推导出的相似排序可能与标注员的直接选择不一致。另一支工作让听众判断哪个候选更接近参考，但只记录方向，不记录强弱。SES-Bench 的区别是同时记录方向与强度，用 7 级量表区分略微更像与明显更像，从而既能训练也能评价。

再看情感相似评价方法路线。常见做法是预训练嵌入的余弦相似度，也有用情感标签构造三元组来学习相似函数。人类评分也被用于训练预测整体韵律相似度的 AutoPCP，还有从人类反馈学习自然度与整体质量的语音 judge 模型。同期工作 STEB 用大语言模型比较源语音与翻译语音的情感描述来评价语音翻译中的情感保持。SES-Judge 与这些工作的输入输出不同，它直接对参考与候选语音对打分，并用分级人工比较监督分数差，使分数差同时反映偏好方向与感知差异程度。

这种对照的教学意义是不要把类别相同当成情感相似。两个候选可能同属高兴，但语气轻重、紧绷程度不同，人耳能听出谁更接近参考。只用分类概率或维度预测值的距离，往往把这种细微差别压缩掉了，这也是后文基线中融合表示余弦好于输出空间距离的一个伏笔。

### 三元组任务如何定义方向与强度？

论文把感知情感相似度定义为两条语音在情感表达上的相像程度。在生成评价场景中，提供期望表达的语音称为参考，用 r 表示，生成语音称为候选，用 x 表示。打分器对每个参考候选对给出实数分数 s(r,x)，分数越高表示情感越接近。

SES-Bench 把评价组织为三元组，每个样本包含一个参考 r 与两个候选 xA 与 xB。模型对两个参考候选对分别打分，再用差值表示相对相似度。正值偏向 A，负值偏向 B，绝对值表示预测的差异强度。这种把绝对打分转为相对差值的设计，使训练与评价都能同时考察方向与强度。

下面这张标注示意图是理解全篇数据与模型接口的关键，它展示了听音人 1 次要听的 3 段语音与 7 个可选回答的含义。

> **看图路径：** 1. 先看顶部问题句，确认任务是二选一相对判断而非绝对打分；2. 再看中部 Reference、Candidate A、Candidate B 三条波形，确认输入为三元组；3. 最后沿底部 A3 到 B3 色带读出方向与强度刻度，核对 SAME 在中间

[![原论文 Figure 1：Annotation schematic. An annotator compares two candidates with a reference and rates their…](https://arxiv.org/html/2609.32504v1/annotation_protocol_typeset.png)](https://arxiv.org/html/2609.32504v1/annotation_protocol_typeset.png)

*论文图 1。原论文 Figure 1:：“Annotation schematic. An annotator compares two candidates with a reference and rates their relative emotional similarity on a seven-point scale.”。*

该图顶部明确提问哪个候选在情感上更接近参考，中部并排给出参考、候选 A 与候选 B 的波形示意，底部是一条从蓝色到橙色的连续色带，依次标出 A3、A2、A1、SAME、B1、B2、B3。左侧文字说明 A 更接近参考，右侧说明 B 更接近参考，中间 SAME 表示大约相同。A1、A2、A3 分别对应略微更接近、更接近、明显更接近，B 侧含义对称。编号表示偏好强度而非情感强度，SAME 即使两个候选都不太像参考，只要两者与参考的距离差不多也可以选。这张图固定了后文所有标签、损失与指标的语义。

### 从一条样本走完输入到输出的全景是什么？

沿一个三元组走一遍流程会更容易记住全篇。输入是 3 段波形，参考 r 与候选 A、B。SES-Judge 先用冻结的基于 WavLM 的维度情感识别模型做音频编码器，对每段语音抽取帧级特征。接着对每层表示做时间平均得到话语级向量，再经过各自可训练的线性投影与归一化，用可学习的加权求和融合成一个表示，最后经线性投影得到 1024 维嵌入。参考与候选的嵌入做余弦相似度，得到 s(r,xA) 与 s(r,xB)，相减得到差值。

训练时这个差值不直接回归平均人评，而是经过一个学到的正尺度与有序阈值映射为 7 个回答上的概率分布，再与 5 个标注员的经验分布算交叉熵。推理评价时则直接用分数差的符号做二选一，用分数差与平均人评算 Spearman 相关。数据侧的三元组生成、人工标注与平衡处理保证了训练目标与评价指标使用同一套语义，基线侧的嵌入余弦、大音频语言模型与各类下游训练表示则共用同一测试协议，从而可以比较哪种监督更贴近人类感知。

### 编码器、融合与打分各自分工是什么？

编码器选用预训练且冻结的 WavLM-SER，即基于 WavLM 的维度语音情感识别模型。冻结意味着论文没有更新该编码器的参数，只把它当作特征提取器。白话说，编码器负责把波形变成多层、每帧都有向量的中间表示，保留音色、韵律与情感线索，但不直接给出相似分数。英文名称可记为 audio encoder，后文简称为编码器。

融合与打分负责把多层特征变成可比较的分数。具体动作是先对帧级特征做时间平均得到话语表示，再对每一层表示施加单独的可训练线性投影与归一化，然后用可学习的加权求和合并各层，最后再经 1 次线性投影产生 1024 维嵌入。参考与候选的嵌入做余弦相似度，作为该对的情感相似分数。余弦相似度就是归一化向量的内积，方向越一致分数越高。

**情感相似度 × 参考引导生成：** 情感相似度负责回答两个语音在情感表达上有多像，输出是可比较的分数；参考引导生成负责提供评价锚点，即用参考语音规定想要的情感表达，候选语音都要向它看齐。二者搭配的原因是生成系统各有各的像，只有固定同一个参考才能把谁更接近说清楚，组合后得到参考减候选的相对差值评价机制。

相对差值的计算目标在原文中写成参考候选分数之差，正值支持 A，负值支持 B，绝对值表示强度。为避免自己重写公式走样，这里直接绑定原文公式。

\[\Delta(r,x_{A},x_{B})=s(r,x_{A})-s(r,x_{B}).\]

该公式的符号含义是 r 为参考，xA 与 xB 为两个候选，s 为打分器对参考候选对的输出，Delta 为相对相似度。计算目标是把两个独立的绝对分数转为一个相对量，使后文的序回归与二选一评价都有明确的正负语义。原文明确给出的实现是用余弦相似度得到 s，再相减得到 Delta，没有引入额外的可训练比较网络。

### 分级标注如何变成可训练的软目标？

SES-Bench 的每个三元组由 5 名标注员独立听音并选择 7 个有序回答中的一个。7 个回答按从 B3 经 SAME 到 A3 排序，评估时映射为离散分数 3、2、1、0、-1、-2、-3，正值偏向 A，负值偏向 B。这些分数的平均值即平均人评，同时携带方向与强度信息。训练时论文使用全部训练比较，不论标注员之间一致性高低。

**分级比较 × 偏好强度：** 分级比较负责同时记录方向与程度，即 A 更接近还是 B 更接近；偏好强度负责区分只是略微更像还是明显更像。分级比较需要偏好强度来避免把小差异和大差异混为一谈，组合后 7 个有序选项 A3 到 B3 既能做选择准确率，也能做与平均人评的相关性分析。

模型把分数差映射为 7 个回答上的概率分布，使用学到的正尺度与关于零点对称的有序阈值。对称约束的作用是交换 A 与 B 时预测分布相应反转，保持任务的对称性。监督信号是 5 个标注员回答的经验分布，即每个选项被选中的比例，损失是对该分布的交叉熵。原文实现细节止于这一描述，没有报告优化器类型、学习率、批量大小与训练轮数等超参数，这是复现时需要补查的具体缺项。

\[\mathcal{L}_{\mathrm{ord}}=-\frac{1}{N}\sum_{i=1}^{N}\sum_{k=1}^{7}q_{ik}\log p_{ik},\]

该公式中 N 为三元组数量，q 为第 i 个三元组上第 k 个回答的标注员比例，p 为模型预测的对应概率。计算目标是让预测分布贴近人工分歧分布，既学多数人偏向哪边，也学分歧大还是小。需要区分的是这是原始训练目标本身，不是近似或带停止梯度的变体，原文未给出梯度路径的额外说明，不应自行猜测哪部分截断梯度。

**累积 logit 序回归 × 经验分布：** 累积 logit 序回归负责把分数差映射为 7 个有序回答上的概率分布，保持 B3 到 A3 的顺序关系；经验分布负责把 5 个标注员的投票转为每个三元组的软目标。序回归需要经验分布来同时学习多数方向与分歧程度，组合后交叉熵损失让模型差值大时更确信、小差异时更平坦。

**融合表示 × 余弦相似度：** 融合表示负责把冻结编码器各层帧级特征做时间平均、线性投影、归一化再加权求和，保留多层次情感线索；余弦相似度负责把参考与候选的最终向量夹角转为相似分数。二者搭配是因为单层或分类头输出会丢失相似信息，而融合后的归一化向量更适合直接做余弦比较，组合后构成 SES-Judge 的打分通路。

下面这张数据构成表把训练与测试的规模、时长与说话人分布放在一起，便于核对复现时的数据量是否对齐。表前的问题是训练与测试在语料、系统与规模上是否真正分开，公平条件是都排除纯中性参考并做损坏音频剔除，指标方向是数量越大覆盖越广但测试更看重泛化。

| 划分 | 比较数量 | 语音总量与时长 | 说话人与性别占比 | 参考来源 |
| --- | --- | --- | --- | --- |
| 训练 | 2974 个比较，1491 个 TTS，1483 个 VC | 11466 条中共 8.86 小时 | 973 人，54.0% 男，46.0% 女 | MSP-Podcast |
| 测试 | 848 个比较，417 个 TTS，431 个 VC | 11466 条中共 2.11 小时 | 91 人，52.7% 男，47.3% 女 | CREMA-D |

表后需要说明主要收益与代价。收益是训练与测试使用不同参考语料，测试还引入训练未见的生成系统，有利于检验泛化。代价是总量仍只有约 10.97 小时，且参考情感与说话人分布受两个语料限制。未胜出或未评测的边界是除 TTS 与 VC 外的 expressive 任务未被覆盖，纯中性参考被排除后模型在中性附近的行为也未被直接评价。

### 数据如何生成、标注与平衡，基线条件是否一致？

候选语音用零-shot TTS 与 VC 生成，每个三元组内的两个候选来自同一任务的两个系统。TTS 侧两个系统收到相同的参考语音与目标文本，目标文本用 Claude Opus 5 生成。VC 侧源语音即参考，系统在保留语言内容的同时转换说话人身份，两个系统使用相同的目标说话人提示。训练参考来自 MSP-Podcast，TTS 候选用 CosyVoice 3、Step-Audio-EditX、F5-TTS、IndexTTS2 生成，VC 候选用 AdaptVC、EZ-VC、Vevo2、FreeVC 生成，覆盖自回归与非自回归、基于 VITS 与流匹配等不同架构，并随机采样使各系统大致均衡。测试参考来自 CREMA-D，TTS 用 Qwen3-TTS、VC 用 Seed-VC 作为训练未见系统，每个测试三元组把一个未见系统输出与一个训练用过的同任务系统输出配对。

标注时 5 人独立听每个三元组并给出 7 级回答，任一标注员标记损坏或无法播放即删除该三元组。剩余规模见上一节表格。作者还按 A1 至 A3 归为 A、B1 至 B3 归为 B、SAME 单独一类来统计一致性，分为全一致、强多数、简单多数与无多数。为缓解测试集中 A 为多数答案偏多的不平衡，随机挑选部分 A 为答案的比较并交换 A、B 位置与标注，只改变位置而不改变音频对与人类判断。简单多数及以上的一致样本经处理后答案分布较为均衡。

下面这组分布图把一致性、参考情感标签与系统占比并排展示，是判断数据是否偏斜的最直接证据。读图前要确认每组内左为训练右为测试，系统占比按 TTS 与 VC 分别统计候选出现次数。

> **看图路径：** 1. 先对比每组内 Train 与 Test 两个饼图，确认划分是否换语料与换系统；2. 再看 Agreement 分布中一致与分歧比例，判断训练是否包含低一致样本；3. 最后看 TTS 与 VC 系统占比，确认测试是否引入训练未见系统

[![原论文 Figure 2：Distributions of agreement, reference emotion labels, and generation systems in SES-Bench, with…](https://arxiv.org/html/2609.32504v1/dataset_distributions.svg)](https://arxiv.org/html/2609.32504v1/dataset_distributions.svg)

*论文图 2。原论文 Figure 2:：“Distributions of agreement, reference emotion labels, and generation systems in SES-Bench, with Train and Test shown side by side for each group.”。*

该图从左到右依次为一致性、参考情感标签、TTS 系统与 VC 系统 4 组饼图，每组内左侧为训练、右侧为测试。可见训练与测试在一致性等级与情感标签分布上大致可比，系统分布上测试引入了 Qwen3-TTS 与 Seed-VC 等训练未见系统。像素能辨认的是各扇区比例与图例对应关系，具体到每个扇区的精确百分比不宜从像素硬读，应以正文报告的比较数量与说话人统计为准。该图支持的判断是划分兼顾了语料差异与系统泛化，但也提示情感标签仍依赖原语料标注，合成候选的情感未必完全等于其参考标签。

评价协议分两支。Spearman 相关在全部 848 个测试比较上计算模型预测与平均人评的相关性，捕捉方向与强度。准确率在剔除多数为 SAME 与无多数的 635 个比较上做简化二选一，打分方法选分数高者，大音频语言模型按聚合回答选择，平局与预测 SAME 均计为错误。基线条件上，嵌入余弦直接用预训练嵌入，情感分类与效价唤醒支配度回归使用与 SES-Judge 相同的逐层投影、归一化与加权求和得到融合表示，并在 MSP-Podcast 官方训练划分上训练，分类还排除标签为 O 或 X 的话语。

大音频语言模型侧对 Qwen3-Omni 与 Gemini 3.8 Flash 提问哪个候选更接近参考并给出 7 个选项，每个三元组回答 10 次、两种 A、B 顺序各 5 次，还原身份后平均带符号回答算相关，取最频繁类别算准确率，最高票并列时判为 SAME。

下面这张评价口径表把两类指标的样本量与聚合对象固定下来，避免把不同分母下的数字直接比较。表前的问题是相关性与准确率是否在同一批样本上计算，公平条件是相关用全量、准确率用过滤子集，指标方向都是越高越好。

| 评价分支 | 样本量 | 人类侧聚合 | 模型侧取值 | 平局处理 |
| --- | --- | --- | --- | --- |
| Spearman 相关 | 848 个测试比较 | 平均人评 | 分数差 | 不适用 |
| 二选一准确率 | 635 个比较 | 多数方向 | 分数高者或最频繁类别 | 计为错误 |
| 标注冗余 | 每三元组 5 人 | 经验分布 | 预测分布 | 交叉熵监督 |
| 语料规模 | 11466 条共 10.97 小时 | 不适用 | 不适用 | 损坏音频剔除 |

表后解释主要收益与反例。收益是相关性保留强度信息，准确率聚焦可部署的二选一选择，两者互补。代价是准确率分母更小且排除了最难的无多数与 SAME 样本，可能高估实际部署中的表现。未胜出项的例子是频繁预测 SAME 的模型在相关性上可能不至于垫底，但在准确率上会被严格惩罚，后文 Qwen3-Omni 的极低准确率正是这一机制的体现。

### 主结果在相同测试协议下支持什么判断？

主结果比较的问题是学自分级人工比较的 SES-Judge 是否比预训练嵌入余弦、用情感标签训练的表示与提示大音频语言模型更贴近人类。条件一致性在于所有方法都在同一 SES-Bench 测试三元组与同一聚合规则下评价，Spearman 用全量 848 个比较，准确率用 635 个过滤子集。指标方向都是越高表示与人类越一致，显著性用配对三元组自助法检验相关、用精确双侧 McNemar 检验准确率，显著水平为 0.05。

| 方法组 | 代表方法与读出 | Spearman 相关 | 准确率 | 可运行性 |
| --- | --- | --- | --- | --- |
| 本方法 | SES-Judge 融合余弦差值 | 0.5297 | 74.96% | 可训练可部署打分器 |

表后解释主要收益与具体代价。SES-Judge 在两个指标上均为最高，报告显示其显著优于所有基线。代价是它需要 SES-Bench 的人工比较监督与额外的投影加权训练，而预训练嵌入余弦无需训练即可运行。反例是 Qwen3-Omni 在过滤子集上准确率极低，论文解释为其聚合预测中 94.96% 为 SAME，而 SAME 在该子集评价中一律计为错误，这说明生成式大模型在这种细粒度听觉比较任务上倾向于保守回答，不能直接当作可部署的二选一裁判。另一个未胜出但值得注意的基线是 WavLM 的 VAD 回归融合余弦，它在两个指标上都接近次优，支持融合表示保留相似信息的判断，但仍与 SES-Judge 有差距。

需要强调的是数值相同不是同一指标的证据，0.5297 是秩相关，74.96% 是百分比准确率，两者分母与聚合对象不同。百分点差与相对百分比也不同，不应把准确率提升几个百分点说成相对提升百分之几而不加说明。总体趋势成立不等于每组都成立，例如不同编码器与不同读出下的排序会有变化，具体需看消融小节的分组比较。

### 换编码器、换监督与加合成数据后排序还稳吗？

该小节回答 3 个更细的问题。第一，在同一编码器内，效价唤醒支配度回归、情感分类与三元组学习哪种监督更好，不同读出位置有何差异。第二，换用 emotion2vec 做基编码器后结论是否一致。第三，给分类基线也加上 SES-Bench 训练用的合成语音后，SES-Judge 的优势是否只是因为见过更多合成数据。

| 对照维度 | 具体条件 | Spearman 相关 | 准确率 | 论文支持的判断 |
| --- | --- | --- | --- | --- |
| 本方法 | SES-Judge | 0.5297 | 74.96% | 在该表所有对照上保持领先 |

表后解释主要收益与代价。收益是跨两个编码器都观察到融合表示余弦好于隐层余弦与输出空间距离，效价唤醒支配度回归好于情感分类，这支持用连续维度与浅层融合保留相似信息的机制解释。代价是这些对照仍需在 MSP-Podcast 上训练下游头，增加了训练成本，且输出空间距离在两个编码器上都明显偏弱，说明分类概率与预测维度值本身不适合直接做情感相似度量。

反例是加入合成语音并赋予其参考情感类别后，分类基线的融合余弦并未追上 SES-Judge，论文据此认为 SES-Bench 的价值在于人类相似监督本身，而不只是提供了合成语音。未评测的边界是三元组学习只用了基于效价唤醒支配度距离选择正负样本的一种做法，其他采样策略未被比较。

**效价唤醒支配度 × 情感分类：** 效价唤醒支配度负责用连续 3 维刻画情感的愉悦、激活与控制程度；情感分类负责把语音归入离散类别。两者都是用情感标签训练表示的对照路线，但连续维度保留了类别边界附近的渐变信息，论文对照显示效价唤醒支配度回归的融合余弦在相关性上普遍高于分类路线，说明离散标签压缩了相似判断需要的细粒度差异。

从复述角度可以这样记忆。先固定编码器与融合结构，再换监督目标看排序，再换编码器看趋势是否重复，最后固定合成数据量看监督来源的净效应。每一步的评价都用同一套相关与准确率，避免把不同数据条件下的数字混在一起。

### 哪些结论有边界，哪些量没有被测量？

论文直接报告的是在 SES-Bench 测试协议下的相对排序与显著性，支持的判断是分级人工比较监督比类别标签与通用嵌入余弦更贴近人类方向与强度。可能或待验证的是把 SES-Judge 当作奖励模型引导 expressive 生成是否真能提升人耳感知的情感贴近度，这在结论中被列为未来工作，本文没有给出生成优化实验，不应视为已验证效果。

未测量的量需要明确指出。原文没有报告训练与推理的硬件预算、耗时、参数量、输出帧率与实际延迟，也没有报告误判率随情感类别、说话人性别或系统类型的细分，更没有给出阈值选择与代价敏感评价。相关性不是因果，即使 SES-Judge 与平均人评相关更高，也不能推出它在所有情感、所有文本与所有信道下都更可靠。总体趋势不等于每步都成立，例如测试中 A、B 经位置交换平衡后分布接近均衡，但在原始未平衡分布或真实部署分布下的表现可能不同。

缺失证据不是技术错误，但复现与引用时要保留不确定性。编码器冻结、投影维度 1024、7 级映射与对称阈值是原文明确给出的安排，优化器、学习率、批量与早停等训练细节未报告，不能从模型名称推定实现。合成候选被赋予参考情感类别的做法只用于分类对照，不能反推合成语音的真实情感一定等于参考情感，这也是论文强调人类相似监督不可替代的原因之一。

### 要复现先准备什么，按什么顺序核对？

先按信息条件准备资源。代码与数据集链接在本次核验中状态为可用，地址指向同一代码仓库，模型权重指向 WavLM-SER 基线权重，大音频语言模型侧引用了 Claude Opus 5 与 Gemini 3.8 Flash 的官方文档页。可用只表示本次核验返回可达，不保证长期有效，引用时应写明核验时间与版本号。需要区分的是代码开源、权重可下载与端到端可运行是三件不同的事，拿到仓库后仍需核对环境、权重路径与生成系统的可获得性。

建议的复现顺序是先复现评价，再复现训练。第一步按三元组组织参考与两个候选，实现 s(r,xA) 减 s(r,xB) 的差值接口，把 7 个回答映射为 3 到 -3 并计算平均人评。第二步实现冻结编码器、时间平均、逐层投影归一化、加权求和与 1024 维投影加余弦打分，先用预训练嵌入余弦跑通 848 个比较的相关与 635 个比较的准确率。第三步再加入正尺度与对称有序阈值，用 5 人经验分布做交叉熵训练，注意训练用全部训练比较，评价用过滤子集，两者分母不同。第四步复现基线时保持同一融合结构，分类排除 O 与 X 标签，VAD 回归用缩放到 0 到 1 的 3 维输出，大模型基线注意两种顺序各呈现 5 次并还原身份后聚合。

常见误解是把融合余弦好于隐层余弦理解为层数越多越好。原文的机制是融合表示在下游头之前保留了相似信息，而经过分类或回归隐层后表示被压缩向任务输出，因此直接用输出空间距离效果下降。另一个误解是把 Qwen3-Omni 的低准确率理解为它完全听不懂情感，更准确的归因是它在该协议下过度预测 SAME，而评价把 SAME 一律计错，换一个允许平局的指标结论可能不同。

### 何时值得尝试这种做法，还需补哪项验证？

当评价任务是参考引导的 expressive 生成，且需要反复比较哪个版本更接近参考时，这种分级三元组加序回归的做法值得尝试。它的适用条件是能负担起每个三元组 5 人标注的成本，并能接受测试只覆盖 TTS 与 VC、参考语料有限的现状。如果只是需要快速粗排且无需强度信息，预训练嵌入余弦仍是成本最低的起点，但要意识到它与人类选择的一致性明显更低。

还需补的验证包括 3 类。一是更广的生成任务与情感分布，例如自发情感、混合情感与跨语言场景下的相对判断是否仍成立。二是面向部署的评价，例如允许平局的准确率、代价敏感阈值、校准曲线与推理延迟，避免只看过滤子集上的二选一准确率。三是闭环验证，即把 SES-Judge 作为奖励或选择器参与生成优化，再做独立的人听测试，确认分数提升确实带来可感知的情感更接近，而不是只在离线相关性上更好。

一句话收束是 SES-Bench 把谁更像与像多少固定为可训练的 7 级相对判断，SES-Judge 用冻结编码器加可学习融合与对称序回归学会了这种判断，并在相同协议下显著优于现有可运行基线，但其泛化与实用价值仍需在更多任务与闭环实验中继续验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.32504v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-29/)
