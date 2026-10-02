---
title: "ProxyMOS: Label-Free Speech Quality Assessment by Multi-Teacher Distillation with Adaptive Routing"
date: 2026-10-02
draft: false
tags: [语音质量评估, 知识蒸馏, 模型集成, 基准测试]
categories: [论文速递]
description: "针对 MOS 预测器跨域排序不稳的问题，论文用小规模已有人工评分拟合逐句自适应路由以合并四个教师并在 807k 无标注语音上蒸馏出单个 wav2vec 2.0 学生，在 URGENT 上 Spearman 达到 0.802、在 mos260 上达到 0.636，代价是目标上限仍受教师集成约束且绝对分值向中间压缩。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.00419"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "无新人工评分时如何把多个公开 MOS 预测器合成为一个更稳的模型"
paper_digest_original_title: "ProxyMOS: Label-Free Speech Quality Assessment by Multi-Teacher Distillation with Adaptive Routing"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.00419v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.00419v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.00419v1.pdf"
paper_digest_primary_task: "语音质量评估"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-quality","label":"语音质量评估"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.model-ensemble","label":"模型集成"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对 MOS 预测器跨域排序不稳的问题，论文用小规模已有人工评分拟合逐句自适应路由以合并四个教师并在 807k 无标注语音上蒸馏出单个 wav2vec 2.0 学生，在 URGENT 上 Spearman 达到 0.802、在 mos260 上达到 0.636，代价是目标上限仍受教师集成约束且绝对分值向中间压缩。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Maxim Trokunov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kirill Borodin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nikita Vasiliev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Grach Mkrtchian"}]
paper_digest_abstract_sha256: "dd784e6dd378751ee76e8f70dde7f0a189df6ea8266d9301237330297480d4d0"
paper_digest_sidecars: {"citation.bib":{"sha256":"88e276b75c9d19661517a50ddb1055ea36cbb26de2cdc4d50aec2988996d6a08","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-00419/citation.bib"},"citation.json":{"sha256":"523d81eb1bdaf830c2388f8d692abf272bc16c36f7771b590847d5f8a90c50d1","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-00419/citation.json"},"citation.ris":{"sha256":"d68db507a8c85aa01ec9e9737adab45a4846fb6862741030cc2075576200b657","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-00419/citation.ris"},"rethink-context.json":{"sha256":"1813236cf4abe20867c402ccdc7c06de05485af923bba95695ac9753ee0117c5","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-00419/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "6dcb5580698249403aed4f52612d95b5008accee079754867b1a9c9ab528fca2"
paper_digest_api_reader_plan_sha256: "b053dd73f63cf5a9c848eb4a90dcec51acabb5e7ee6ae12e4d5e1ace35163303"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e4eda62094e6ea5e31038b8c4e560bc170aa420b99f26de5eccb9dcf352cb5b1"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "109d87796c959d9bcb2fa5c2319e748b037a5b45355f63cb32510f050184ba26"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5799e7ee087fe78d65f9f75a075c2dcd379a1872f4cc1ae3775726f5a5e895d2"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c626ba42017987829809411385bd0e10e14514ca9a30a95634fbec202bd18788"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 无新人工评分时如何把多个公开 MOS 预测器合成为一个更稳的模型

> 英文题目：*[ProxyMOS: Label-Free Speech Quality Assessment by Multi-Teacher Distillation with Adaptive Routing](https://arxiv.org/abs/2610.00419v1)*

> 标签：#语音质量评估 | #知识蒸馏 | #模型集成 | #基准测试
>
> 评分：**6.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Maxim Trokunov：机构信息未在 arXiv HTML 中可靠披露
- Kirill Borodin：机构信息未在 arXiv HTML 中可靠披露
- Nikita Vasiliev：机构信息未在 arXiv HTML 中可靠披露
- Grach Mkrtchian：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

语音质量评估输入待测语音、输出与人耳一致的平均意见分（Mean Opinion Score, MOS），难点是标注昂贵且预测器跨失真类型与跨语言严重掉点。本文先在已有小规模标注集上排序教师并拟合聚合规则，再用该规则为大规模无标注语音生成伪目标，最后以均方误差训练单学生模型，学生推理时不再依赖教师。相对静态平均与固定加权，已有方法无法关闭域失配教师的权重，而按 utterance 自适应路由能动态信任不同教师，因此在弱成员加入时保持稳定。学生在增强英语集 URGENT 上以 Spearman 相关系数（Spearman correlation, ρ）达到 0.802，超过最优教师 WhiSQA 的 0.773；在俄语合成集 mos260 上达到 0.636，持平其路由教师集成，且 38 个条件下系统级排序与人耳 Pearson 相关达 0.948。该结论适用边界限于英语增强与俄语合成两个已测域，绝对分值校准偏向中间且低质尾部明显高估。训练硬件为 2 张 NVIDIA RTX 4070 Ti，原文未披露训练时长与推理延迟吞吐。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 听感质量评估为何不能只靠人工打分？

本解读的输入是论文正文与本次收到的官方原图像素，目标是让刚进入语音合成与语音质量评估的研究生能复述方法与实验条件。必须保留的信息包括任务定义、教师池构成、5 种合并规则、学生结构、数据划分与主数字，输出按学习依赖从任务到复现展开，不引入证据之外的效果断言。

语音合成、语音转换、编码器与语音增强的价值最终由人听起来好不好决定，社区用 ITU-T P.800 定义的平均意见分（Mean Opinion Score, MOS）来度量。做法是招募听音人逐句打分再取均值，但听音实验慢、贵且有噪声。于是研究者训练神经网络预测器作为替代，早期有从频谱回归的 MOSNet，面向电话与增强的有 NISQA 与 DNSMOS，后来以自监督前端为基础出现了 SSL-MOS、UTMOS、Distill-MOS 与 WhiSQA 等。

**平均意见分 × 非侵入式预测：** 平均意见分是听音人对语音质量打分的均值，代表人的感知排序；非侵入式预测指不依赖干净参考音频、只看待测语音本身就给出分数。论文把公开的非侵入式预测器当作有偏但廉价的自动打分员，先学如何合并它们，再用合并结果去标注大量无人工分的数据，从而避免重新做听音实验。

对初学者而言，关键是区分侵入式与非侵入式。举例来说，PESQ 需要干净参考与退化语音对齐比较，属于侵入式；本文讨论的 8 个预测器都只看待测语音，属于非侵入式。教学例子仅为概念说明，不代表本文数值。非侵入式方便部署，但每个模型都绑定其训练标签所在域，换域后排序能力会明显下滑，这正是本文要解决的起点。

### 已有路线分别解决了哪一块？

论文把相关工作放在两条线上。第一条是集成：挑战赛系统常把多个自监督预测器堆叠再用学到的合并器组合，RAMP 按每句置信度加权，这些做法针对单模型跨域不稳。第二条是蒸馏与半监督：MTQ-Net 用预训练评估器的伪标签训练，VoiceMOS 2024 曾设半监督赛道，Distill-MOS 把单个 XLS-R-SQA 教师蒸馏到小学生在无标注语音上训练，这些做法针对部署成本与标注成本。

本文的差异是把两者串起来：教师是异构公开预测器，合并器是在已有小规模人工评分上学到的逐句路由，蒸馏目标是合并后的信号。与同输入同目标的工作相比，输入都是待测波形，目标都是与人工 MOS 的 utterance 级一致性，监督都来自已有人工集加大量无标注语音，运行阶段都要求单模型推理。论文没有把类别差异当作同条件胜负，而是用同一 URGENT 与 mos260 基准比较同一批教师、同一子集搜索与同一学生。

### 什么现象说明单个公开模型不够用？

论文先做跨域基准。8 个公开预测器在 URGENT 与 mos260 上的表现不一致：在 URGENT 上 4 个基于自监督的模型组成领先集团，在 mos260 上排名翻转，WhiSQA 从最好掉到中游，Distill-MOS 升到最好，MOSNet 甚至与人工判断负相关。作者报告 WhiSQA 与 Distill-MOS 的差距在 URGENT 上较小、在 mos260 上远大于置信区间 1/2 宽，因此翻转不是噪声。

这意味着没有单个公开预测器在增强自然语音与俄语合成语音两个域同时可靠。问题被形式化为：把公开预测器当作有噪声的标注员，只用已存在的小规模人工集学会合并它们，再让合并结果去标注大规模无标注语料，最后训练一个单模型继承集成的稳健性。mos260 在此全程作为 held-out 测试，不参与选择、拟合与训练。

### 四阶段流水线如何分工并隔离人工标签？

论文流水线分 4 步。第一步在带人工分的公开集上基准测试多个公开预测器并保留信息量最大的 K 个；第二步拟合一个聚合规则，把同一句的 K 个教师分数映射为一个目标；第三步把该规则作用于大规模无标注语料得到伪目标；第 4 步用均方误差训练学生在这些目标上回归。只有前两步接触人工评分，且只通过小规模公开集。

**集成学习 × 知识蒸馏：** 集成学习负责把多个教师的分数合成一个更稳的目标，分工是降低单个模型的域偏差；知识蒸馏负责让单个学生去拟合这个合成目标，分工是把多模型推理压缩为一次前向。搭配理由是集成准但贵、学生便宜但需要大量监督，论文用前者低成本生成后者所需的大量伪标签，新增作用是部署时不再需要任何教师。

沿一个样本走一遍：输入一段无标注波形，并行跑 4 个教师得到 4 个分数，路由网络只读这 4 个分数输出 4 个非负和为 1 的权重，加权求和得到该句的伪目标，学生对同一波形前向得到预测，用两者差的平方更新学生。测试时只跑学生。原文明确只有该流程，没有额外人工介入。

### 五个聚合规则各自如何计算权重？

对某句教师分数向量，目标是加权和且权重和为 1。论文比较 5 种定权重方式：均匀平均；按开发集 Spearman 加权；按 RMSE 倒数加权；在带人工集上最小化平方误差求固定权重，作为静态规则的上界。

以及自适应路由。路由是一个两层 MLP，输入只有 K 个分数，输出逐句权重，在 SOMOS 与 BVCC 上用均方误差训练，不用任何声学前端，因此附加成本可忽略。

**静态加权 × 自适应路由：** 静态加权给每个教师一个固定权重，所有句子共用同一套权重，分工简单但无法应对域变化；自适应路由是一个两层 MLP，输入是同一句的 K 个教师分数，输出该句专属的权重，分工是按输入类型切换信任对象。搭配比较的理由是弱成员在不同域有害程度不同，组合意义在于只有逐句切换才能在未知域关闭不适配的教师。

选择逻辑是搜索 K 至少为 2 的全部 26 个子集在每种规则下的表现。教师缩写为 W、D、U、X、M，分别对应 WhiSQA、Distill-MOS、UTMOSv2、XLS-R-SQA 与 MOSNet，其中 MOSNet 被刻意保留为弱成员，用于检验规则能否忽略它。静态规则在 URGENT 上用 URGENT 统计量，因此其 URGENT 条目是样本内；路由在 SOMOS 与 BVCC 上训练，因此两个基准对其都是 held-out。

### 学生网络从波形到分数经历了什么？

学生必须推理便宜且多语言，因为目标覆盖数十种语言。论文选用在 1600 多种语言语音上预训练的 OmniASR-W2V-300M wav2vec 2.0 编码器，后接注意力统计池化，在时间上做注意力加权并拼接加权均值与标准差，再接隐藏 size 为 1024、激活为 GELU 的两层头输出一个标量。

**wav2vec 2.0 编码器 × 注意力统计池化：** wav2vec 2.0 编码器负责把波形变成随时间变化的帧表示，分工是提供多语言声学基础；注意力统计池化负责在时间上做加权平均并拼接加权均值与标准差，分工是把变长帧序列压成定长句向量。搭配理由是质量判断需要整句的总体水平与波动，组合后接两层头输出一个标量分数，直接用均方误差拟合集成目标。

训练时编码器以比头小 100 倍的学习率微调，损失是预测与集成目标的均方误差。推理时不需要任何教师，导出为 ONNX 的 FP32 与 FP16 个图。原文未给出路由 MLP 的隐藏维度与激活细节，也未报告逐句权重分布的具体数值，因此复述时只讲已验证的输入输出与训练监督来源，不从模型名推定未报告的实现。

### 路由与学生分别用什么数据与优化设置训练？

路由训练只用 BVCC 与 SOMOS 的合成语音评分，优化目标是拟合人工 MOS 的均方误差。学生训练用路由后的 W 加 D 加 U 加 X 集成给 MLAAD、Balalaika 与 SpeechFake 打伪标签，共 807k 句，其中 440k 为俄语自然语音，与 held-out 基准语言一致。优化器为 AdamW，池化与头学习率为 10 的负 4 次方，编码器为 10 的负 6 次方，批量为 8，共 5 轮，前 2 轮线性 warm-up 后余弦衰减，梯度裁剪最大范数为 1.0，bfloat16 混合精度在两块 RTX 4070 Ti 上训练。

需要明确的是，教师全部使用公开检查点与默认预处理，不重新训练；预测在算 RMSE 与 MAE 前按开发集人工 MOS 的均值与标准差做 z 分数对齐，该仿射变换不改变秩相关与线性相关。mos260 的 4355 个有质量评分的句子只用于评估，245 个仅有语调评分的句子不进入质量评估集。

### 数据划分、指标与不确定性如何规定？

带人工分的语料分工明确：URGENT 的 6900 句增强自然英语语音用于教师排序与测试，BVCC 的 3000 句与 SOMOS 的 20000 句用于路由拟合，mos260 的 4600 句俄语合成与编码语音作为 held-out 测试。无标注语料只接收集成目标，不接触人工分。mos260 覆盖自然参考、4 种神经编码器、6 种声码器前端、5 种公开零样本系统、6 种 Grad-TTS 课程变体与 16 种自研多阶段扩散 TTS 配置，共 38 个合成条件。

下表整理语料角色与规模，提出的问题是人工标签在哪些阶段出现、哪些语料必须全程隔离。公平条件是教师排序、路由拟合与学生训练都不使用 mos260。指标方向是 Pearson r、Spearman 与 Kendall 越高越好，RMSE 与 MAE 越低越好，主指标为 Spearman，因为 MOS 是序数量表。

| 语料 | 内容与语言 | 句子数 | 在本文中的角色 |
| --- | --- | --- | --- |
| URGENT | 增强自然英语 | 6900 | 教师排序与测试 |
| BVCC | 合成与转换英语 | 3000 | 路由拟合 |
| SOMOS | 神经合成英语 | 20000 | 路由拟合 |
| mos260 | 俄语合成与编码 | 4600 | 全程 held-out 测试 |
| MLAAD 加 SpeechFake 加 Balalaika | 多语言合成与俄语自然 | 807k | 集成打伪标签后训练学生 |

上表规模与角色来自正文连续描述，807k 为三库之和，mos260 条件构成为 38 种。不确定性按 Fisher z 近似加 Spearman 修正给出 95% 区间，在 URGENT 上 1/2 宽至多 0.010、在 mos260 上至多 0.025。mos260 经可靠性过滤后剩余 11545 个质量评分与 28068 个语调评分，质量中位每句 3 个评分，过滤规则包括留一相关低于 0.3、方差处于两端 5% 与偏差 z 分数绝对值不小于 2.5，语调评分不过滤。

论文还报告 mos260 质量均值 3.34、与语调相关仅 0.52，说明两者不等价。复现时需保留每句评分者数量以便加权，因为中位 3 个评分会限制 utterance 级一致性上限，而按条件平均时每条件至少 94 句更稳定。

### 学生相对教师与集成取得了什么？

主结果按 utterance 级与人工 MOS 的一致性组织，比较对象是同一基准上的单教师、均匀集成与路由集成，条件一致且预测经同一 z 分数对齐后再算误差类指标。关键数字是学生在 URGENT 上 Spearman 为 0.802、在 mos260 上为 0.636，分别高于最好的单教师 0.773 与 0.613。相对路由集成，学生在 URGENT 上保留约 67% 的增益、在 mos260 上保留 100%，但推理只需一个 300M 参数编码器而非 4 个教师加路由。ONNX 导出改变 Spearman 至多 0.024，FP16 相对 FP32 无损，在 mos260 上甚至略高。

**Spearman 秩相关 × 均方误差：** Spearman 秩相关只关心排序是否一致，是论文主指标，分工是回答系统选型是否排对；均方误差关心绝对分差，是训练损失与 RMSE/MAE 的基础，分工是回答分值校准准不准。搭配理由是 MOS 是序数量表，排序对但分值压缩仍可能误导阈值判断，论文因此同时报告两类指标，新增作用是揭示学生在 mos260 上排序保持但两端压缩的弱点。

下表聚焦可运行策略与必要基线，比较问题是在两个域上谁的排序更稳。公平条件是集成行均为 4 个模型 W 加 D 加 U 加 X，路由在两个基准上都是 held-out。指标方向是 Spearman 越高越好。

| 基准 | 最佳单教师 Spearman | 均匀集成 Spearman | 路由集成 Spearman | 学生 Spearman |
| --- | --- | --- | --- | --- |
| URGENT | 0.773 | 0.814 | 0.816 | 0.802 |
| mos260 | 0.613 | 0.578 | 0.636 | 0.636 |

上表显示均匀集成在 URGENT 上已超所有教师，但在 mos260 上跌破最佳单教师，而路由集成在两域都保持最好，学生在 held-out 域与路由集成持平。论文将此解释为集成目标更平滑加学生见过 807k 多样句子，其中俄语占比高，但明确表示不分离两种效应，这属于有限解释而非因果证明。

以下导读针对教师基准条形图，帮助确认最佳单教师在两域不一致。图中蓝色为 URGENT、黄色为 mos260，条形长度为 Spearman，须先按图例确认对象再比较。

> **看图路径：** 1. 先按图例区分蓝色 URGENT 与黄色 mos260 两组条形及其 95% 置信区间；2. 再从上到下比较学生、集成与四个强教师的条形长度；3. 最后观察底部弱模型条形是否接近零或跨过零线

[![原论文 Figure S2：Figure S2: Spearman \\rho of every model with 95% confidence intervals on URGENT and mos260.](https://arxiv.org/html/2610.00419v1/fig_teachers.svg)](https://arxiv.org/html/2610.00419v1/fig_teachers.svg)

*论文图 5。原论文 Figure S2:：“Figure S2: Spearman \rho of every model with 95% confidence intervals on URGENT and mos260. Shaded rows: the distilled student.”。*

从像素可见，上方 4 组自监督模型在 URGENT 上条形接近且置信区间短，而在 mos260 上明显分化，WhiSQA 黄色条大幅缩短，Distill-MOS 黄色条最长；底部 MOSNet、NISQA、DNSMOS 与 HuBERT-MOS 在 URGENT 上接近零，MOSNet 在 mos260 上为负。以下柱状图进一步把最佳单教师、均匀集成、路由集成与学生并列，URGENT 上三者都高于基线，mos260 上只有路由集成与学生高于基线。

> **看图路径：** 1. 先看 URGENT 组四根柱子的高低顺序；2. 再看 mos260 组最佳单教师与均匀集成、路由集成、学生的差异；3. 最后比较同一方法在两个域上的绝对高度差异

[![原论文 Figure S3：Figure S3: Best single teacher, the W+D+U+X ensemble under uniform and routed aggregation, and…](https://arxiv.org/html/2610.00419v1/fig_gain.svg)](https://arxiv.org/html/2610.00419v1/fig_gain.svg)

*论文图 6。原论文 Figure S3:：“Figure S3: Best single teacher, the W+D+U+X ensemble under uniform and routed aggregation, and the distilled student (PyTorch), Spearman \rho on both benchmarks.”。*

该图支持的判断是跨域稳健性来自路由而非单纯平均，限制是 mos260 上学生与教师的区间有重叠，0.636 对 0.613 的优势幅度小，需结合条件级结果一起看。

### 加入弱成员时哪种规则不退化？

消融围绕 26 个子集与 5 种规则展开，测的是集成规模 K 增大并混入弱成员时的 Spearman 变化。条件是静态权重用 URGENT 统计量因而 URGENT 为样本内，路由用 SOMOS 与 BVCC 训练因而 2 基准都是 held-out，比较时必须区分可部署收益与事后最优。关键发现有三点：均匀平均在 URGENT 上 4 模型已超教师；静态加权在 K 为 4 时与均匀差异在 0.003 以内，在 mos260 上最佳静态子集是 D 加 U 的二元组，加 WhiSQA 或 MOSNet 单调下降到 K 为 5 时的 0.510；路由在 mos260 上 K 从 2 到 5 保持约 0.636，在 URGENT 上 K 为 5 时仍升到 0.817，是唯一不退化的规则。

下表给出每种规则在不同 K 下的最优 Spearman，问题是规模扩大时收益是否持续。公平条件是每格取该 K 下最优子集，K 为 4 的优胜子集除 mos260 上 Spearman 加权为 D 加 U 加 X 加 M 外均为 W 加 D 加 U 加 X。

| 规则 | URGENT K2 | URGENT K4 | URGENT K5 | mos260 K2 | mos260 K4 | mos260 K5 |
| --- | --- | --- | --- | --- | --- | --- |
| 均匀平均 | 0.799 | 0.814 | 0.804 | 0.617 | 0.578 | 0.510 |
| Spearman 加权 | 0.799 | 0.814 | 0.814 | 0.619 | 0.608 | 0.588 |
| RMSE 倒数加权 | 0.799 | 0.814 | 0.811 | 0.619 | 0.583 | 0.547 |
| MSE 优化固定权重 | 0.795 | 0.813 | 0.811 | 0.617 | 0.578 | 0.510 |
| 自适应路由 | 0.795 | 0.816 | 0.817 | 0.635 | 0.636 | 0.636 |

表后解释是主要收益与代价：路由的收益是在 held-out 域自动关闭 WhiSQA 与 MOSNet，10 组仅差 MOSNet 的子集对中，均匀下加入它平均降 0.024 与 0.115，路由下仅降 0.001 与 0.007；代价是路由仍需在 SOMOS 与 BVCC 上拟合，且输入只有 K 个分数，未使用声学前端，对完全新型失真是否同样有效待验证。未胜出项是 MSE 优化的固定权重，它作为静态上界仍救不了 mos260，说明常数下调权重不够。

以下导读针对集成规模曲线，左为 URGENT、右为 mos260，横轴为 K，纵轴为最优 Spearman。

> **看图路径：** 1. 先看横轴集成规模 K 从 2 到 5、纵轴最优 Spearman 的变化趋势；2. 再对比左侧 URGENT 与右侧 mos260 上静态曲线与路由曲线的走向差异；3. 最后确认虚线代表的最佳单教师位置与各曲线相对高低

[![原论文 Figure 2：Best \\rho versus ensemble size for each aggregation rule (Table 3); dotted line: best single…](https://arxiv.org/html/2610.00419v1/fig_ensemble_k.svg)](https://arxiv.org/html/2610.00419v1/fig_ensemble_k.svg)

*论文图 2。原论文 Figure 2:：“Best \rho versus ensemble size for each aggregation rule (Table 3); dotted line: best single teacher.”。*

从像素可见，左侧静态曲线在 K 为 4 达峰后持平或微降，路由橙色曲线 flat 或上升；右侧静态曲线随 K 增大明显下探，路由曲线基本水平。虚线为最佳单教师，静态在右侧 K 增大后跌破虚线而路由始终在其上。这支持只有路由在部署域未知时可用的判断，但总体趋势不等于每种子集都成立，需查附表逐子集验证。

### 哪些边界尚未被评测或存在冲突？

论文明确列出四项限制。第一，静态规则的 URGENT 条目是样本内，不能当作可部署收益，只有路由、所有 mos260 数字与学生是 held-out。第二，mos260 质量中位每句仅 3 个评分，utterance 级一致性上限受限，条件均值因每条件至少 94 句更可靠，发布数据携带每句评分者数以便加权。第三，mos260 只覆盖一种语言，教师池每家族只有一个代表。第四，目标继承集成的上限，基于教师分歧的置信加权是下一步。

下表用家族均值展示校准弱点，问题是排序对是否等于分值准。表中人类 MOS 与预测均为句均值加标准差，条件数与句子数一并给出。

| 家族 | 条件数 | 句子数 | 人类 MOS 均值 | 学生预测均值 |
| --- | --- | --- | --- | --- |
| 自然参考 | 1 | 200 | 4.45 | 3.99 |
| 声码器前端 | 6 | 1200 | 4.05 | 3.88 |
| 零样本 TTS | 5 | 1000 | 3.52 | 3.63 |
| 神经编码器 | 4 | 800 | 3.39 | 3.54 |
| 自研 TTS 4 个阶段 | 16 | 800 | 2.83 | 3.02 |
| Grad-TTS 课程 | 6 | 600 | 1.91 | 2.69 |

表后解释是反例：学生复现六大家族的人类排序，但在两端压缩，Tortoise 被高估约 0.49，最差 Grad-TTS 变体被高估约 0.87，自然参考被低估约 0.46，最好的 5 个条件人类 spread 在 4.0 到 4.45 而学生无法分开。论文报告条件级相关达 0.951 与 0.948，但这是 38 个条件均值的相关，不能推广为 utterance 级同样强。学生与语调分相关为 0.50，接近人类质量与语调间的 0.52，支持其跟踪声学质量而非韵律，但相关性不是因果。

以下导读针对条件级散点图，横轴为人类条件均值、纵轴为预测条件均值，虚线为理想一致。

> **看图路径：** 1. 先确认横轴为人均值、纵轴为预测均值、虚线为理想一致线；2. 再看不同颜色家族点群沿横轴的分布与偏离方向；3. 最后观察低分端与高分端点群相对虚线的位置

[![原论文 Figure S1：Figure S1: Condition-level agreement on mos260: mean human MOS versus mean ProxyMOS score for…](https://arxiv.org/html/2610.00419v1/fig_systems_scatter.svg)](https://arxiv.org/html/2610.00419v1/fig_systems_scatter.svg)

*论文图 4。原论文 Figure S1:：“Figure S1: Condition-level agreement on mos260: mean human MOS versus mean ProxyMOS score for the 38 synthesis conditions (bars: standard error; dotted line: identity).”。*

从像素可见，中高分段点群贴近虚线，低分端 EnCodec 与 Grad-TTS 点偏上，高分端自然参考点偏下，颜色区分参考、编码器、声码器、零样本、Grad-TTS 与自研 TTS。这与压缩判断一致，绝对校准而非排序是弱点。未评测边界包括系统级在 URGENT 上的表现留作未来工作，以及推理延迟与误判率均未测量，不能承诺成本改善。

### 要复现需要准备什么并先检查什么？

复现先做三件事。第一，按角色备数据：用 URGENT 做教师排序，用 BVCC 与 SOMOS 拟合路由，用 MLAAD、Balalaika 与 SpeechFake 生成 807k 伪标签，全程不碰 mos260。第二，跑 8 个公开检查点并用默认预处理得到分数，z 分数对齐后再算 RMSE 与 MAE，否则误差数字不可比。第三，在 SOMOS 与 BVCC 上训练两层 MLP 路由，输入仅为 K 个分数，输出归一化权重，再对 26 个子集在两种基准上评估，确认只有路由在加入 MOSNet 后不显著下降。

学生复现的关键超参数已在训练节保留：编码器学习率比头小 100 倍、AdamW、批量 8、5 轮、2 轮 warm-up 加余弦、裁剪 1.0、bfloat16。硬件预算为两块 RTX 4070 Ti。评估时主看 Spearman 并附 95% 区间，RMSE 与 MAE 必须在对齐后计算。mos260 复现需用 LabelSpeech 流程的 0 到 5 质量与语调量表，质量过滤剔除低相关、极端方差与高偏差评分者，语调不过滤，最终以剩余评分者均值为准。

关于可获得性，本次收到的资源状态未绑定且完成 HTTPS 验证的资源，因此不得声称代码、模型或数据已公开或当前可用。论文正文脚注给出了地址写法，但本次未能确认可达，复现前需自行核对原文链接与版本。若链接当前不可用，应按不可用处理，不把权重下载等同于系统可运行。

### 何时值得尝试这种无标签集成蒸馏？

当已有多个公开 MOS 预测器但各自偏向不同域，且无预算做大规模听音，而有大量无标注目标域语音时，值得尝试先学路由再蒸馏。论文的 3 条经验是：至少组合 3 个训练标签互补的自监督预测器，因为强子集都把 Distill-MOS 与 WhiSQA、UTMOSv2、XLS-R-SQA 中的两个配对；部署域未知时优先学路由而非静态权重，因为只有路由经受住弱成员；集成验证后应蒸馏为单模型，因为学生在 held-out 域保持了集成精度且只需 1 次前向。

还需补的验证是更多语言与更多家族代表、教师分歧加权的置信目标、按评分者数加权的 utterance 级评估，以及训练资源、推理开销与实际延迟的分别测量。常见误解是把条件级 0.95 当作逐句同样准，或把静态权重的样本内增益当作可部署收益，或把冻结编码器小学习率当作输出确定，论文证据不支持这些推广。总体上，集成分歧是可利用的监督来源，但目标上限仍是集成，下一步应在不确定性建模上投入。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.00419v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-02/)
