---
title: "Finetuning Strategies for Querying Sounds by Vocal Imitation"
date: 2026-08-20
draft: false
tags: [音频检索, 对比学习, CNN, 模型比较]
categories: [论文速递]
description: "音频检索 | 7.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.19174"
---

# 📄 Finetuning Strategies for Querying Sounds by Vocal Imitation

标签：#音频检索 #对比学习 #CNN #模型比较

**7.3/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 清晰 0.8/1 | 影响 0.7/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **7.3/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：中 | #音频检索 | #对比学习 | #CNN #模型比较 | [arxiv](https://arxiv.org/abs/2608.19174)


### 👥 作者与机构

第一作者：Aditya Bhattacharjee（机构未说明）
通讯作者：未说明
作者列表：Aditya Bhattacharjee、Christos Plachouras、Sungkyun Chang、Emmanouil Benetos（机构信息未在当前正文中完整说明）

### 💡 毒舌点评

任务清楚、路线有对照且工程味足；但“获胜”缺少可核验指标，读者不能仅凭摘要判断领先幅度。 亮点是一是把 vocal imitation 作为声音检索查询而非传统文本标签；二是比较冻结 CED 与联合 triplet 训练两种互补策略；三是以挑战赛完整系统为工程验证载体；短板是挑战赛设置可能不能覆盖口音、模仿风格和真实录音设备的变化；报告若缺少失败案例，也无法判断相似音色与相似事件之间的混淆。

### 📌 核心摘要

Finetuning Strategies for Querying Sounds by Vocal Imitation 面向如何用人声模仿查询目标音效并在音效库中检索。一是把 vocal imitation 作为声音检索查询而非传统文本标签；二是比较冻结 CED 与联合 triplet 训练两种互补策略；三是以挑战赛完整系统为工程验证载体。 报告称该系统获得 AES AIMLA 2025 Challenge 的获胜提交，并比较两条微调路线； 论文把方法、评价指标和适用条件放在同一条任务链中讨论；主要局限包括：挑战赛设置可能不能覆盖口音、模仿风格和真实录音设备的变化；报告若缺少失败案例，也无法判断相似音色与相似事件之间的混淆。

具体设置包括：More recently, Greif et al. [4] demonstrated the effectiveness of contrastive learning with neural audio embeddings pre-trained on large-scale datasets like AudioSet.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Their system employed a dual-tower MobileNetV3 architecture, fine-tuned using SimCLR-style contrastive objectives and an extensive augmentation pipeline.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Evaluation is performed using the Mean Reciprocal Rank (MRR) and Normalized Discounted Cumulative Gain (NDCG) metrics. III Submission #1 III-A Architecture and Training Setup Our first submission is based on the Consistent Ensemble Distillation (CED) framework, originally introduced by Dinkel et al. [2]. CED is a ViT-based audio encoder trained for AudioSet audio tagging using consistent ensemble distillation.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Further details about the objective and subjective evaluation on test datasets can be found in the challenge website 2 2 https://qvim-aes.github.io/. TABLE I: Performance Metrics Model Name MRRex NDCGcat random 0.044 0.37 2DFT 0.1262 0.4793 Greif et al.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

综合来看，论文的价值不只由最终分数决定，还取决于输入表示、模型组件、训练或推理路径、评价数据和失败条件是否彼此对应。正文明确报告的结果与作者提出的解释分开呈现；没有给出统计口径、跨域验证或部署参数的部分，不能被扩写为普遍能力。

### 🔗 开源详情

论文文本未提供代码仓库、模型权重或数据下载链接；挑战赛后补充细节不等于完整开源。 论文引用的预训练模型或外部工具仅作为依赖记录，不能视为本文核心产物已开源。

### 🏗️ 方法概述和架构

该技术报告针对 AES AIMLA 2025 音效查询挑战，输入是一段人声模仿，输出是与其声学语义相近的音效检索结果。第一条路线冻结预训练 CED 音频编码器，通过对比学习把 vocal imitation 与目标音效拉近；第二条路线用 MobileNetV3 编码器联合 contrastive-triplet loss，并用 semi-hard negatives 增强难例区分。 两条路线都把查询和候选音效映射到共享嵌入空间，再按相似度排序；冻结 CED 路线强调利用通用音频表示，MobileNetV3 路线则允许任务适配。triplet 约束让正例距离小于难负例，半难负样本避免训练只看容易区分的声音。报告还记录了挑战赛后补充的细节，但未把全部数据处理和检索库规模写入摘要。 方法取舍是预训练表示稳定性与任务专用适应性的对照，而非盲目追求更大模型。报告型工作最大的工程价值在于给出可落地的训练和检索组合，最大的风险是挑战赛数据与真实声音库之间存在域差。 输入先经过论文明确的表示或预处理，再进入核心模型或分析框架，最后产生任务指标、检索结果、生成序列或风险分数。若存在训练与推理两条路径，训练负责学习参数或评价规则，推理按固定的音频片段、语音 token、符号旋律或多模态会话顺序执行。论文没有直接给出网络尺寸、数据划分、优化器、随机种子、硬件、阈值、采样率或延迟的部分，保留为未说明；“显著提升”“可泛化”等方向性表述也不扩写成未经来源支持的数字。多模态或临床任务还需要交代各流如何同步、谁产生最终决策以及人工监督在哪里介入。

方法由输入表示、核心模块、训练/推理路径和输出评价共同构成。

在该设计中，More recently, Greif et al. [4] demonstrated the effectiveness of contrastive learning with neural audio embeddings pre-trained on large-scale datasets like AudioSet.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Their system employed a dual-tower MobileNetV3 architecture, fine-tuned using SimCLR-style contrastive objectives and an extensive augmentation pipeline.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，In this submission, we freeze the pretrained CED-base encoder (768-dimensional output) and train a lightweight MLP projection head to map embeddings to a 256-dimensional space suitable for retrieval.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，We extract the final encoder hidden representation, average-pool it over the sequence dimension to obtain a 768-dimensional embedding, and keep the CED encoder frozen during training.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，The training objective is a supervised contrastive loss applied to known (reference, imitation) pairs from the VimSketch dataset.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

从数据流看，输入表示、核心模块、训练目标和推理输出必须逐层对应；任何没有在全文中披露的网络尺寸、优化器、随机种子或资源配置都不应被常见实现替代。这样的结构化描述既解释模型如何工作，也说明结果在哪些条件下能够复现。

### 💡 核心创新点

1. 一是把 vocal imitation 作为声音检索查询而非传统文本标签，回应了既有方法或系统的具体瓶颈。 具体体现在More recently, Greif et al. [4] demonstrated the effectiveness of contrastive learning with neural audio embeddings pre-trained on large-scale datasets like AudioSet.。这说明改动涉及的输入、模块和输出，也限定了它依赖的训练信号、数据条件与部署前提。

2. 二是比较冻结 CED 与联合 triplet 训练两种互补策略，并由论文的实验或系统设计支撑。 论文给出的实现边界是Their system employed a dual-tower MobileNetV3 architecture, fine-tuned using SimCLR-style contrastive objectives and an extensive augmentation pipeline.。因此，结果收益不能直接归因于模型结构之外的数据、后处理或提示词因素。

3. 三是以挑战赛完整系统为工程验证载体。。 实验或消融显示Evaluation is performed using the Mean Reciprocal Rank (MRR) and Normalized Discounted Cumulative Gain (NDCG) metrics. III Submission #1 III-A Architecture and Training Setup Our first submission is based on the Consistent Ensemble Distillation (CED) framework, originally introduced by Dinkel et al. [2]. CED is a ViT-based audio encoder trained for AudioSet audio tagging using consistent ensemble distillation.。这一比较只在相应数据、基线和指标口径下成立，未报告独立消融时不把相关性写成组件因果。

4. 工程含义必须和条件一起解读：Further details about the objective and subjective evaluation on test datasets can be found in the challenge website 2 2 https://qvim-aes.github.io/. TABLE I: Performance Metrics Model Name MRRex NDCGcat random 0.044 0.37 2DFT 0.1262 0.4793 Greif et al.。论文直接测量、作者解释和仍待验证的外推需要分开，不能把部署愿景写成实验结论。

5. 可复现边界是上述证据中的数据规模、输入预处理、训练/推理设置和评价指标；这些条件若没有同步满足，不能把论文的局部结果概括成普遍能力。

上述贡献需要放回完整数据流理解：输入如何被表示，哪些模块改变了中间状态，训练目标如何约束输出，以及实验是否用对照或消融隔离了收益来源。缺失的配置、样本范围和统计检验会直接影响可复现性与外部有效性。

### 📊 实验结果

报告称该系统获得 AES AIMLA 2025 Challenge 的获胜提交，并比较两条微调路线；

实验结果需要和数据划分、基线、指标方向及统计口径一起阅读。

论文报告：Evaluation is performed using the Mean Reciprocal Rank (MRR) and Normalized Discounted Cumulative Gain (NDCG) metrics. III Submission #1 III-A Architecture and Training Setup Our first submission is based on the Consistent Ensemble Distillation (CED) framework, originally introduced by Dinkel et al. [2]. CED is a ViT-based audio encoder trained for AudioSet audio tagging using consistent ensemble distillation.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：Further details about the objective and subjective evaluation on test datasets can be found in the challenge website 2 2 https://qvim-aes.github.io/. TABLE I: Performance Metrics Model Name MRRex NDCGcat random 0.044 0.37 2DFT 0.1262 0.4793 Greif et al.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：The output projection is a linear layer mapping the encoder’s 768-dimensional output to a 256-dimensional embedding, which is then used to compute cosine similarities for retrieval. IV Submission #2 IV-A Architecture and Training Setup Our model architecture builds on the QbVI framework proposed by Greif et al. [4], using a MobileNetV3 encoder pretrained on AudioSet [3].。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：For posterity, we report that Submission #2 is the winning submission in the AES AIMLA 2025 Challenge on querying sound effects by vocal imitation.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Evaluation is performed using the Mean Reciprocal Rank (MRR) and Normalized Discounted Cumulative Gain (NDCG) metrics. III Submission #1 III-A Architecture and Training Setup Our first submission is based on the Consistent Ensemble Distillation (CED) framework, originally introduced by Dinkel et al. [2]. CED is a ViT-based audio encoder trained for AudioSet audio tagging using consistent ensemble distillation. |
| 主要结果 | Further details about the objective and subjective evaluation on test datasets can be found in the challenge website 2 2 https://qvim-aes.github.io/. TABLE I: Performance Metrics Model Name MRRex NDCGcat random 0.044 0.37 2DFT 0.1262 0.4793 Greif et al. |
| 对照、消融或部署指标 | The output projection is a linear layer mapping the encoder’s 768-dimensional output to a 256-dimensional embedding, which is then used to compute cosine similarities for retrieval. IV Submission #2 IV-A Architecture and Training Setup Our model architecture builds on the QbVI framework proposed by Greif et al. [4], using a MobileNetV3 encoder pretrained on AudioSet [3]. |

结果解读同时关注绝对数值、相对比较、误差方向和测量条件。表格中的每个数字都必须和数据集、基线、硬件或推理设置一起阅读；如果正文只给出趋势而没有完整数值，就保留趋势并明确其证据边界。

### 🔬 细节详述

已知组件为 CED、MobileNetV3、对比损失、triplet 损失和半难负样本；训练轮数、学习率、候选库规模、音频裁剪和硬件未在摘要中完整说明。推理阶段是嵌入计算加近邻排序。 模型名、数据集、输入输出和部署限制以全文可定位段落为准；论文没有直接说明的配置保持为未说明，外部工具或作者机构不自动视为本文开源。

数据、训练、实现和部署条件共同决定结果的可复现范围。

- In this submission, we freeze the pretrained CED-base encoder (768-dimensional output) and train a lightweight MLP projection head to map embeddings to a 256-dimensional space suitable for retrieval.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- We extract the final encoder hidden representation, average-pool it over the sequence dimension to obtain a 768-dimensional embedding, and keep the CED encoder frozen during training.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- The training objective is a supervised contrastive loss applied to known (reference, imitation) pairs from the VimSketch dataset.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- The output projection is a linear layer mapping the encoder’s 768-dimensional output to a 256-dimensional embedding, which is then used to compute cosine similarities for retrieval. IV Submission #2 IV-A Architecture and Training Setup Our model architecture builds on the QbVI framework proposed by Greif et al. [4], using a MobileNetV3 encoder pretrained on AudioSet [3].。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- For posterity, we report that Submission #2 is the winning submission in the AES AIMLA 2025 Challenge on querying sound effects by vocal imitation.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- 0.2726 0.6463 Submission #1 0.2876 0.60 Submission #2 0.2932 0.6468 VI Conclusion The goal of the Query by Vocal Imitation (QbVI) task is to retrieve audio samples from a reference database based on a vocal imitation provided by the user.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

论文未报告的参数、硬件、随机种子和失败案例仍是复现与外推的不确定性。

这些实现细节说明了论文怎样把方法落到可执行的实验协议：数据怎样划分，特征怎样进入模型，训练和推理怎样衔接，指标怎样计算，以及部署资源怎样测量。它们也是判断复现成本、误差来源和外推范围的依据。读者应优先核对这些条件，而不是只比较最终分数；同一模型在不同采样率、数据切分、硬件或阈值下可能产生不同结论。方法、实验和部署三部分必须保持同一输入输出定义，任何环节的改变都可能影响比较结果。只有把这些环节连起来，读者才能判断改进来自模型本身还是来自数据与测量协议。

### ⚖️ 评分理由

* 创新性 (1.3/2)：一是把 vocal imitation 作为声音检索查询而非传统文本标签；二是比较冻结 CED 与联合 triplet 训练两种互补策略；三是以挑战赛完整系统为工程验证载体。 新增点清楚，但仍需更多跨条件证据判断是否形成范式突破。 * 技术严谨性 (1.0/1.5)：方法链和适用边界基本自洽；挑战赛设置可能不能覆盖口音、模仿风格和真实录音设备的变化；报告若缺少失败案例，也无法判断相似音色与相似事件之间的混淆 使部分边界仍待验证。 * 实验充分性 (1.1/1.5)：报告称该系统获得 AES AIMLA 2025 Challenge 的获胜提交，并比较两条微调路线；； * 清晰度 (0.8/1)： * 影响力 (0.7/1.5)：该工作对语音/音乐/音频读者的直接价值来自如何用人声模仿查询目标音效并在音效库中检索。；影响范围受挑战赛设置可能不能覆盖口音、模仿风格和真实录音设备的变化限制。 * 开源 (1.0/1.5)：论文文本未提供代码仓库、模型权重或数据下载链接；挑战赛后补充细节不等于完整开源。  * 可复现性 (0.3/0.5)：训练轮数、学习率、候选库规模、音频裁剪和硬件未在摘要中完整说明。推理阶段是嵌入计算加近邻排序。；这影响独立复现，但不把材料缺失重复扣到技术严谨性。 * 工程/实践价值 (1.1/1.5)：任务清楚、路线有对照且工程味足；但“获胜”缺少可核验指标，读者不能仅凭摘要判断领先幅度。 真实部署、成本和失败案例仍需补充。

方法与实验分别对应：More recently, Greif et al. [4] demonstrated the effectiveness of contrastive learning with neural audio embeddings pre-trained on large-scale datasets like AudioSet.；Evaluation is performed using the Mean Reciprocal Rank (MRR) and Normalized Discounted Cumulative Gain (NDCG) metrics. III Submission #1 III-A Architecture and Training Setup Our first submission is based on the Consistent Ensemble Distillation (CED) framework, originally introduced by Dinkel et al. [2]. CED is a ViT-based audio encoder trained for AudioSet audio tagging using consistent ensemble distillation.。同一信息缺口不在多个维度重复扣分。

评分边界由方法结构、实验数字、资源披露和适用条件共同决定；未报告的参数、失败案例、统计检验或跨域泛化仍保持为不确定性。

* 技术严谨性（1.0/1.5）：检查输入、训练目标、推理输出、假设和实现条件是否相互一致。

* 实验充分性（1.1/1.5）：检查数据划分、基线、消融、指标方向、统计口径和失败案例是否覆盖。

* 清晰度（0.8/1）：检查读者能否沿数据流复述输入、模块、中间表示和输出。

* 影响力（0.7/1.5）：结合问题范围、证据强度和外部有效性判断，不把单一数据集结果外推。

* 开源（1.0/1.5）：只评价论文明确提供的代码、模型、数据或可验证链接。

* 可复现性（0.3/0.5）：检查数据、预处理、训练/推理配置、硬件和随机性披露。

* 工程/实践价值（1.1/1.5）：结合延迟、吞吐、资源、稳定性和真实部署限制判断。

### 🚨 局限与问题

1. 论文明确承认的局限：挑战赛设置可能不能覆盖口音、模仿风格和真实录音设备的变化；报告若缺少失败案例，也无法判断相似音色与相似事件之间的混淆。 2. 审稿人发现的潜在问题：报告若缺少失败案例，也无法判断相似音色与相似事件之间的混淆。

此外，Further details about the objective and subjective evaluation on test datasets can be found in the challenge website 2 2 https://qvim-aes.github.io/. TABLE I: Performance Metrics Model Name MRRex NDCGcat random 0.044 0.37 2DFT 0.1262 0.4793 Greif et al. 当前结果只在论文报告的数据、模型、硬件和评价协议下成立。

因此，局限不仅包括作者明确承认的缺口，也包括样本规模、数据分布、基线选择、统计不确定性、资源消耗和真实场景迁移尚未被实验覆盖的部分。对于未报告的失败样例、显著性检验、跨设备测试和长期稳定性，读者只能把它们视为待验证问题，不能从单一数据集的结果推导出普遍部署保证。还需要区分作者没有测量的因素与已经证明不存在的问题，避免把沉默误读成正面结论。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
