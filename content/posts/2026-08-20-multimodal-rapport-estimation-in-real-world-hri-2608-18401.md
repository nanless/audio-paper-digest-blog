---
title: "Multimodal Rapport Estimation in Real-World HRI"
date: 2026-08-20
draft: false
tags: [多模态模型, 音视频理解, 模型融合, 模型评估]
categories: [论文速递]
description: "多模态模型 | 7.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.18401"
---

# 📄 Multimodal Rapport Estimation in Real-World HRI

标签：#多模态模型 #音视频理解 #模型融合 #模型评估

**7.0/10** | 创新 1.1/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 清晰 0.9/1 | 影响 0.9/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **7.0/10** | 前50% | 文档类型：应用研究 | 评分置信度：中 | #多模态模型 | #音视频理解 | #模型融合 #模型评估 | [arxiv](https://arxiv.org/abs/2608.18401)


### 👥 作者与机构

第一作者：Akihiro Sakuramoto（机构未说明）
通讯作者：未说明
作者列表：Akihiro Sakuramoto、Takato Hayashi、Ryo Miyoshi、Yuki Okafuji、Shogo Okada（机构信息未在当前正文中完整说明）

### 💡 毒舌点评

真实场景和模态互补分析是亮点；但数据规模与标注主观性让结果更像可靠起点而非通用 rapport 模型。 亮点是一是把 rapport 估计带到真实多人 HRI；二是系统比较 LLM、HuBERT、V-JEPA 的互补性；三是用条件分层揭示真实场景的上下文变化；短板是单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。

### 📌 核心摘要

Multimodal Rapport Estimation in Real-World HRI 面向真实多人 HRI 中能否从音频、视觉和文本可靠估计第三方 rapport。一是把 rapport 估计带到真实多人 HRI；二是系统比较 LLM、HuBERT、V-JEPA 的互补性；三是用条件分层揭示真实场景的上下文变化。 Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。 论文把方法、评价指标和适用条件放在同一条任务链中讨论；主要局限包括：单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。

具体设置包括：The training loss is defined as (4) ℒ=1−ρc,\mathcal{L}=1-\rho_{c}, which is minimized when predictions are maximally concordant with the ground-truth rapport scores. 4.2.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Embedding-Based Models Each modality stream shares the same two-stage architecture, based on the model proposed by Santana et al. (Santana et al. 2025): an additive attention pooling module that aggregates the variable-length feature sequence into a single interaction embedding, followed by a prediction head that regresses the rapport score from that embedding. A separate model is trained for each modality (text, audio, and visual). 4.3.1.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Figure 2 shows a utility–redundancy map in which the vertical axis represents each model’s correlation with the ground-truth rapport score (standalone utility), the horizontal axis represents its correlation with Gemini (T) predictions (redundancy), and marker size encodes the incremental explanatory power Δ​R2\Delta R^{2} when added to Gemini (T).。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：All LLM predictions were obtained through the respective public APIs in April 2026, with a single run per condition. 4.5.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

综合来看，论文的价值不只由最终分数决定，还取决于输入表示、模型组件、训练或推理路径、评价数据和失败条件是否彼此对应。正文明确报告的结果与作者提出的解释分开呈现；没有给出统计口径、跨域验证或部署参数的部分，不能被扩写为普遍能力。

### 🔗 开源详情

论文中未提及代码、模型权重或会话数据的公开方式。 论文引用的预训练模型或外部工具仅作为依赖记录，不能视为本文核心产物已开源。

### 🏗️ 方法概述和架构

论文使用日本药店 62 次真实交互会话，目标是估计第三方评分的 rapport。系统分别运行 zero-shot LLM、预训练文本模型、HuBERT 音频模型和 V-JEPA 视觉模型，再做 prediction-level fusion。输入是自然发生的多人、多时长多模态记录，输出是连续 rapport 估计。 处理链包括会话切分、文本/音频/视觉编码、单模型预测与融合；相较受控实验室，真实场景允许用户退出、多人同时参与，因此模型需要处理时长和群体规模条件。融合层不强制把所有模态拼成一个表示，而是先保留各模型决策，再比较互补信息。 采用真实药店场景的动机是检验实验室 rapport 指标能否外部迁移；prediction-level fusion 易于替换组件，但可能忽略跨模态时间对齐。作者还按互动时长和群体大小分层分析，避免只报总体平均。 输入先经过论文明确的表示或预处理，再进入核心模型或分析框架，最后产生任务指标、检索结果、生成序列或风险分数。若存在训练与推理两条路径，训练负责学习参数或评价规则，推理按固定的音频片段、语音 token、符号旋律或多模态会话顺序执行。论文没有直接给出网络尺寸、数据划分、优化器、随机种子、硬件、阈值、采样率或延迟的部分，保留为未说明；“显著提升”“可泛化”等方向性表述也不扩写成未经来源支持的数字。多模态或临床任务还需要交代各流如何同步、谁产生最终决策以及人工监督在哪里介入。

方法由输入表示、核心模块、训练/推理路径和输出评价共同构成。

在该设计中，The training loss is defined as (4) ℒ=1−ρc,\mathcal{L}=1-\rho_{c}, which is minimized when predictions are maximally concordant with the ground-truth rapport scores. 4.2.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Embedding-Based Models Each modality stream shares the same two-stage architecture, based on the model proposed by Santana et al. (Santana et al. 2025): an additive attention pooling module that aggregates the variable-length feature sequence into a single interaction embedding, followed by a prediction head that regresses the rapport score from that embedding. A separate model is trained for each modality (text, audio, and visual). 4.3.1.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，For the Random Baseline, test predictions in each fold were sampled with replacement from the target-score distribution of the corresponding training partition; this procedure was repeated with 10 random seeds, and the table reports the mean metrics across seeds. 4.6.2.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Concordance Correlation Coefficient (CCC; see Section 4.1) jointly accounts for both correlation and mean/variance agreement, and serves as the primary metric consistent with the training objective.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，We compare zero-shot LLMs, pretrained text, audio, and visual models, and their prediction-level fusion.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

![Figure 1. Robot-view examples from the real-world HRI corpus: (a) a single-participant interaction, (b) a two-participant interaction, and (c) a three-participant interaction.Three robot-view example frames from the real-world HRI corpus: (a) a single-participant interaction, (b) a two-participant interaction, and (c) a three-participant interaction.](https://arxiv.org/html/2608.18401v1/figures/robot_view_examples_top.png)

![Figure 4. CCC trends across one-, two-, and three-participant interactions for each prediction model.Line plot showing CCC values for each prediction model across one-, two-, and three-person interactions. Gemini 2.5 Flash (T) shows relatively high CCC values across the analyzed group-size conditions, whereas V-JEPA (V) declines as the number of participants increases.](https://arxiv.org/html/2608.18401v1/figures/party_size_ccc_trends.png)

从数据流看，输入表示、核心模块、训练目标和推理输出必须逐层对应；任何没有在全文中披露的网络尺寸、优化器、随机种子或资源配置都不应被常见实现替代。这样的结构化描述既解释模型如何工作，也说明结果在哪些条件下能够复现。

### 💡 核心创新点

1. 一是把 rapport 估计带到真实多人 HRI，回应了既有方法或系统的具体瓶颈。 具体体现在The training loss is defined as (4) ℒ=1−ρc,\mathcal{L}=1-\rho_{c}, which is minimized when predictions are maximally concordant with the ground-truth rapport scores. 4.2.。这说明改动涉及的输入、模块和输出，也限定了它依赖的训练信号、数据条件与部署前提。

2. 二是系统比较 LLM、HuBERT、V-JEPA 的互补性，并由论文的实验或系统设计支撑。 论文给出的实现边界是Embedding-Based Models Each modality stream shares the same two-stage architecture, based on the model proposed by Santana et al. (Santana et al. 2025): an additive attention pooling module that aggregates the variable-length feature sequence into a single interaction embedding, followed by a prediction head that regresses the rapport score from that embedding. A separate model is trained for each modality (text, audio, and visual). 4.3.1.。因此，结果收益不能直接归因于模型结构之外的数据、后处理或提示词因素。

3. 三是用条件分层揭示真实场景的上下文变化。。 实验或消融显示Figure 2 shows a utility–redundancy map in which the vertical axis represents each model’s correlation with the ground-truth rapport score (standalone utility), the horizontal axis represents its correlation with Gemini (T) predictions (redundancy), and marker size encodes the incremental explanatory power Δ​R2\Delta R^{2} when added to Gemini (T).。这一比较只在相应数据、基线和指标口径下成立，未报告独立消融时不把相关性写成组件因果。

4. 工程含义必须和条件一起解读：All LLM predictions were obtained through the respective public APIs in April 2026, with a single run per condition. 4.5.。论文直接测量、作者解释和仍待验证的外推需要分开，不能把部署愿景写成实验结论。

5. 可复现边界是上述证据中的数据规模、输入预处理、训练/推理设置和评价指标；这些条件若没有同步满足，不能把论文的局部结果概括成普遍能力。

上述贡献需要放回完整数据流理解：输入如何被表示，哪些模块改变了中间状态，训练目标如何约束输出，以及实验是否用对照或消融隔离了收益来源。缺失的配置、样本范围和统计检验会直接影响可复现性与外部有效性。

### 📊 实验结果

Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。

实验结果需要和数据划分、基线、指标方向及统计口径一起阅读。

论文报告：Figure 2 shows a utility–redundancy map in which the vertical axis represents each model’s correlation with the ground-truth rapport score (standalone utility), the horizontal axis represents its correlation with Gemini (T) predictions (redundancy), and marker size encodes the incremental explanatory power Δ​R2\Delta R^{2} when added to Gemini (T).。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：All LLM predictions were obtained through the respective public APIs in April 2026, with a single run per condition. 4.5.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：For Gemini 2.5 Flash (T), the subscale CCCs were 0.614 for Connection and 0.473 for Coordination.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：Nevertheless, the fused models tended to achieve lower MAE values, with ST5+HuBERT+V-JEPA (T+A+V) attaining the lowest MAE in the table. 5.2.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Figure 2 shows a utility–redundancy map in which the vertical axis represents each model’s correlation with the ground-truth rapport score (standalone utility), the horizontal axis represents its correlation with Gemini (T) predictions (redundancy), and marker size encodes the incremental explanatory power Δ​R2\Delta R^{2} when added to Gemini (T). |
| 主要结果 | All LLM predictions were obtained through the respective public APIs in April 2026, with a single run per condition. 4.5. |
| 对照、消融或部署指标 | For Gemini 2.5 Flash (T), the subscale CCCs were 0.614 for Connection and 0.473 for Coordination. |

![Figure 4. CCC trends across one-, two-, and three-participant interactions for each prediction model.Line plot showing CCC values for each prediction model across one-, two-, and three-person interactions. Gemini 2.5 Flash (T) shows relatively high CCC values across the analyzed group-size conditions, whereas V-JEPA (V) declines as the number of participants increases. - 图2](https://arxiv.org/html/2608.18401v1/figures/party_size_ccc_trends.png)

结果解读同时关注绝对数值、相对比较、误差方向和测量条件。表格中的每个数字都必须和数据集、基线、硬件或推理设置一起阅读；如果正文只给出趋势而没有完整数值，就保留趋势并明确其证据边界。

### 🔬 细节详述

数据为日本药店 62 sessions，模型含 Gemini、HuBERT、V-JEPA，输出为第三方 rapport 分数；标注协议、音频采样、时间对齐、融合权重和训练/验证划分未完整说明。 模型名、数据集、输入输出和部署限制以全文可定位段落为准；论文没有直接说明的配置保持为未说明，外部工具或作者机构不自动视为本文开源。

数据、训练、实现和部署条件共同决定结果的可复现范围。

- For the Random Baseline, test predictions in each fold were sampled with replacement from the target-score distribution of the corresponding training partition; this procedure was repeated with 10 random seeds, and the table reports the mean metrics across seeds. 4.6.2.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Concordance Correlation Coefficient (CCC; see Section 4.1) jointly accounts for both correlation and mean/variance agreement, and serves as the primary metric consistent with the training objective.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- We compare zero-shot LLMs, pretrained text, audio, and visual models, and their prediction-level fusion.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- For Gemini 2.5 Flash (T), the subscale CCCs were 0.614 for Connection and 0.473 for Coordination.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Nevertheless, the fused models tended to achieve lower MAE values, with ST5+HuBERT+V-JEPA (T+A+V) attaining the lowest MAE in the table. 5.2.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- The robot was operated for a total of 32 hours over six days, resulting in 131 recorded sessions.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

论文未报告的参数、硬件、随机种子和失败案例仍是复现与外推的不确定性。

这些实现细节说明了论文怎样把方法落到可执行的实验协议：数据怎样划分，特征怎样进入模型，训练和推理怎样衔接，指标怎样计算，以及部署资源怎样测量。它们也是判断复现成本、误差来源和外推范围的依据。读者应优先核对这些条件，而不是只比较最终分数；同一模型在不同采样率、数据切分、硬件或阈值下可能产生不同结论。方法、实验和部署三部分必须保持同一输入输出定义，任何环节的改变都可能影响比较结果。只有把这些环节连起来，读者才能判断改进来自模型本身还是来自数据与测量协议。

### ⚖️ 评分理由

* 创新性 (1.1/2)：一是把 rapport 估计带到真实多人 HRI；二是系统比较 LLM、HuBERT、V-JEPA 的互补性；三是用条件分层揭示真实场景的上下文变化。 新增点清楚，但仍需更多跨条件证据判断是否形成范式突破。 * 技术严谨性 (1.1/1.5)：方法链和适用边界基本自洽；单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误 使部分边界仍待验证。 * 实验充分性 (1.2/1.5)：Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。； * 清晰度 (0.9/1)： * 影响力 (0.9/1.5)：该工作对语音/音乐/音频读者的直接价值来自真实多人 HRI 中能否从音频、视觉和文本可靠估计第三方 rapport。；影响范围受单地点、单文化和 62 会话限制外部效度限制。 * 开源 (0.5/1.5)：论文中未提及代码、模型权重或会话数据的公开方式。  * 可复现性 (0.3/0.5)：标注协议、音频采样、时间对齐、融合权重和训练/验证划分未完整说明。；这影响独立复现，但不把材料缺失重复扣到技术严谨性。 * 工程/实践价值 (1.0/1.5)：真实场景和模态互补分析是亮点；但数据规模与标注主观性让结果更像可靠起点而非通用 rapport 模型。 真实部署、成本和失败案例仍需补充。

方法与实验分别对应：The training loss is defined as (4) ℒ=1−ρc,\mathcal{L}=1-\rho_{c}, which is minimized when predictions are maximally concordant with the ground-truth rapport scores. 4.2.；Figure 2 shows a utility–redundancy map in which the vertical axis represents each model’s correlation with the ground-truth rapport score (standalone utility), the horizontal axis represents its correlation with Gemini (T) predictions (redundancy), and marker size encodes the incremental explanatory power Δ​R2\Delta R^{2} when added to Gemini (T).。同一信息缺口不在多个维度重复扣分。

评分边界由方法结构、实验数字、资源披露和适用条件共同决定；未报告的参数、失败案例、统计检验或跨域泛化仍保持为不确定性。

* 技术严谨性（1.1/1.5）：检查输入、训练目标、推理输出、假设和实现条件是否相互一致。

* 实验充分性（1.2/1.5）：检查数据划分、基线、消融、指标方向、统计口径和失败案例是否覆盖。

* 清晰度（0.9/1）：检查读者能否沿数据流复述输入、模块、中间表示和输出。

* 影响力（0.9/1.5）：结合问题范围、证据强度和外部有效性判断，不把单一数据集结果外推。

* 开源（0.5/1.5）：只评价论文明确提供的代码、模型、数据或可验证链接。

* 可复现性（0.3/0.5）：检查数据、预处理、训练/推理配置、硬件和随机性披露。

* 工程/实践价值（1.0/1.5）：结合延迟、吞吐、资源、稳定性和真实部署限制判断。

### 🚨 局限与问题

1. 论文明确承认的局限：单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。 2. 审稿人发现的潜在问题：第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。

此外，All LLM predictions were obtained through the respective public APIs in April 2026, with a single run per condition. 4.5. 当前结果只在论文报告的数据、模型、硬件和评价协议下成立。

因此，局限不仅包括作者明确承认的缺口，也包括样本规模、数据分布、基线选择、统计不确定性、资源消耗和真实场景迁移尚未被实验覆盖的部分。对于未报告的失败样例、显著性检验、跨设备测试和长期稳定性，读者只能把它们视为待验证问题，不能从单一数据集的结果推导出普遍部署保证。还需要区分作者没有测量的因素与已经证明不存在的问题，避免把沉默误读成正面结论。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
