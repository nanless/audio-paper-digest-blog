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

Multimodal Rapport Estimation in Real-World HRI 面向真实多人 HRI 中能否从音频、视觉和文本可靠估计第三方 rapport。论文的核心贡献形态是应用研究，把问题转化为可执行的音频/语音/音乐或多模态处理流程。一是把 rapport 估计带到真实多人 HRI；二是系统比较 LLM、HuBERT、V-JEPA 的互补性；三是用条件分层揭示真实场景的上下文变化。 Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。 对音频读者而言，它的实际意义在于提供可复用的任务定义或工程证据。主要局限包括：单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。

### 🔗 开源详情

论文中未提及代码、模型权重或会话数据的公开方式。 论文引用的预训练模型或外部工具仅作为依赖记录，不能视为本文核心产物已开源。

### 🏗️ 方法概述和架构

论文使用日本药店 62 次真实交互会话，目标是估计第三方评分的 rapport。系统分别运行 zero-shot LLM、预训练文本模型、HuBERT 音频模型和 V-JEPA 视觉模型，再做 prediction-level fusion。输入是自然发生的多人、多时长多模态记录，输出是连续 rapport 估计。 处理链包括会话切分、文本/音频/视觉编码、单模型预测与融合；相较受控实验室，真实场景允许用户退出、多人同时参与，因此模型需要处理时长和群体规模条件。融合层不强制把所有模态拼成一个表示，而是先保留各模型决策，再比较互补信息。 采用真实药店场景的动机是检验实验室 rapport 指标能否外部迁移；prediction-level fusion 易于替换组件，但可能忽略跨模态时间对齐。作者还按互动时长和群体大小分层分析，避免只报总体平均。

全文方法与训练段落给出的可复现设置如下：

第 1 个证据块：论文明确写到“Figure 2 shows a utility–redundancy map in which the vertical axis represents each model’s correlation with the ground-truth rapport score (standalone utility), the horizontal axis represents its correlation with Gemini (T) predictions (redundancy), and marker size encodes the incremental explanatory power Δ​R2\Delta R^{2} when added to Gemini (T).”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 2 个证据块：论文明确写到“Figure 4. CCC trends across one-, two-, and three-participant interactions for each prediction model.Line plot showing CCC values for each prediction model across one-, two-, and three-person interactions.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 3 个证据块：论文明确写到“Multimodal Rapport Estimation in Real-World HRIConference: INTERNATIONAL CONFERENCE ON MULTIMODAL INTERACTION; October 05–09, 2026; Napoli, ItalyINTERNATIONAL CONFERENCE ON MULTIMODAL INTERACTION (ICMI ’26), October 05–09, 2026, Napoli, ItalyDOI: 10.1145/3776574.3831184ISBN: 979-8-4007-2318-6/26/10CCS: Human-centered computing Empirical studies in HCICCS: Computing methodologies Discourse, dialogue and pragmaticsCCS: Computing methodologies Neural networksCCS: Human-centered computing Empirical studies in collaborative and social computing Akihiro Sakuramoto Affiliation: Japan Advanced Institute of Science and Technology, Nomi, Ishikawa, Japan email: s2510069@jaist.ac.jp, Takato Hayashi Affiliation: Japan Advanced Institute of Science and Technology, Nomi, Ishikawa, Japan email: hayashi0884@jaist.ac.jp, Ryo Miyoshi Affiliation: CyberAgent, Tokyo, Japan Affiliation: The University of Osaka, Osaka, Japan email: miyoshi_ryo@cyberagent.co.jp, Yuki Okafuji Affiliation: CyberAgent, Tokyo, Japan Affiliation: The University of Osaka, Osaka, Japan email: okafuji_yuki_xd@cyberagent.co.jp and Shogo Okada Affiliation: Japan Advanced Institute of Science and Technology, Nomi, Ishikawa, Japan email: okada-s@jaist.ac.jp 2026; © cc Figure 1.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 4 个证据块：论文明确写到“In particular, Gemini 2.5 Flash performs strongly as a single model, and a fusion model combining Gemini (text) with HuBERT and V-JEPA performs best overall.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 5 个证据块：论文明确写到“Keywords: human-robot interaction, real-world human-robot interaction, rapport estimation, multimodal late fusion, large language models, third-party annotation ††cc-license: by 1.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

![Figure 1. Robot-view examples from the real-world HRI corpus: (a) a single-participant interaction, (b) a two-participant interaction, and (c) a three-participant interaction.Three robot-view example frames from the real-world HRI corpus: (a) a single-participant interaction, (b) a two-participant interaction, and (c) a three-participant interaction.](https://arxiv.org/html/2608.18401v1/figures/robot_view_examples_top.png)

![Figure 4. CCC trends across one-, two-, and three-participant interactions for each prediction model.Line plot showing CCC values for each prediction model across one-, two-, and three-person interactions. Gemini 2.5 Flash (T) shows relatively high CCC values across the analyzed group-size conditions, whereas V-JEPA (V) declines as the number of participants increases.](https://arxiv.org/html/2608.18401v1/figures/party_size_ccc_trends.png)

### 💡 核心创新点

1. 一是把 rapport 估计带到真实多人 HRI，回应了既有方法或系统的具体瓶颈。
2. 二是系统比较 LLM、HuBERT、V-JEPA 的互补性，并由论文的实验或系统设计支撑。
3. 三是用条件分层揭示真实场景的上下文变化。。

### 📊 实验结果

下面把全文实验段落中的设置、数字和比较关系逐项列出；指标方向沿用论文定义。

全文实验证据 1：Figure 2 shows a utility–redundancy map in which the vertical axis represents each model’s correlation with the ground-truth rapport score (standalone utility), the horizontal axis represents its correlation with Gemini (T) predictions (redundancy), and marker size encodes the incremental explanatory power Δ​R2\Delta R^{2} when added to Gemini (T).。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 2：Figure 4. CCC trends across one-, two-, and three-participant interactions for each prediction model.Line plot showing CCC values for each prediction model across one-, two-, and three-person interactions.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 3：Multimodal Rapport Estimation in Real-World HRIConference: INTERNATIONAL CONFERENCE ON MULTIMODAL INTERACTION; October 05–09, 2026; Napoli, ItalyINTERNATIONAL CONFERENCE ON MULTIMODAL INTERACTION (ICMI ’26), October 05–09, 2026, Napoli, ItalyDOI: 10.1145/3776574.3831184ISBN: 979-8-4007-2318-6/26/10CCS: Human-centered computing Empirical studies in HCICCS: Computing methodologies Discourse, dialogue and pragmaticsCCS: Computing methodologies Neural networksCCS: Human-centered computing Empirical studies in collaborative and social computing Akihiro Sakuramoto Affiliation: Japan Advanced Institute of Science and Technology, Nomi, Ishikawa, Japan email: s2510069@jaist.ac.jp, Takato Hayashi Affiliation: Japan Advanced Institute of Science and Technology, Nomi, Ishikawa, Japan email: hayashi0884@jaist.ac.jp, Ryo Miyoshi Affiliation: CyberAgent, Tokyo, Japan Affiliation: The University of Osaka, Osaka, Japan email: miyoshi_ryo@cyberagent.co.jp, Yuki Okafuji Affiliation: CyberAgent, Tokyo, Japan Affiliation: The University of Osaka, Osaka, Japan email: okafuji_yuki_xd@cyberagent.co.jp and Shogo Okada Affiliation: Japan Advanced Institute of Science and Technology, Nomi, Ishikawa, Japan email: okada-s@jaist.ac.jp 2026; © cc Figure 1.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 4：In this study, we investigate the automatic estimation of third-party-rated rapport scores using 62 sessions of multimodal recordings collected in a Japanese drugstore.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Figure 2 shows a utility–redundancy map in which the vertical axis represents each model’s correlation with the ground-truth rapport score (standalone utility), the horizontal axis represents its correlation with Gemini (T) predictions (redundancy), and marker size encodes the incremental explanatory power Δ​R2\Delta R^{2} when added to Gemini (T). |
| 主要结果 | Figure 4. CCC trends across one-, two-, and three-participant interactions for each prediction model.Line plot showing CCC values for each prediction model across one-, two-, and three-person interactions. |
| 对照、消融或部署指标 | Multimodal Rapport Estimation in Real-World HRIConference: INTERNATIONAL CONFERENCE ON MULTIMODAL INTERACTION; October 05–09, 2026; Napoli, ItalyINTERNATIONAL CONFERENCE ON MULTIMODAL INTERACTION (ICMI ’26), October 05–09, 2026, Napoli, ItalyDOI: 10.1145/3776574.3831184ISBN: 979-8-4007-2318-6/26/10CCS: Human-centered computing Empirical studies in HCICCS: Computing methodologies Discourse, dialogue and pragmaticsCCS: Computing methodologies Neural networksCCS: Human-centered computing Empirical studies in collaborative and social computing Akihiro Sakuramoto Affiliation: Japan Advanced Institu |

![Figure 4. CCC trends across one-, two-, and three-participant interactions for each prediction model.Line plot showing CCC values for each prediction model across one-, two-, and three-person interactions. Gemini 2.5 Flash (T) shows relatively high CCC values across the analyzed group-size conditions, whereas V-JEPA (V) declines as the number of participants increases. - 图2](https://arxiv.org/html/2608.18401v1/figures/party_size_ccc_trends.png)

### 🔬 细节详述

全文中还能定位到以下数据、训练或实现细节。它们补充了方法段没有展开的采样、数据规模、优化和部署边界：

- 细节证据 1：Figure 2 shows a utility–redundancy map in which the vertical axis represents each model’s correlation with the ground-truth rapport score (standalone utility), the horizontal axis represents its correlation with Gemini (T) predictions (redundancy), and marker size encodes the incremental explanatory power Δ​R2\Delta R^{2} when added to Gemini (T).。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 2：Figure 4. CCC trends across one-, two-, and three-participant interactions for each prediction model.Line plot showing CCC values for each prediction model across one-, two-, and three-person interactions.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 3：Multimodal Rapport Estimation in Real-World HRIConference: INTERNATIONAL CONFERENCE ON MULTIMODAL INTERACTION; October 05–09, 2026; Napoli, ItalyINTERNATIONAL CONFERENCE ON MULTIMODAL INTERACTION (ICMI ’26), October 05–09, 2026, Napoli, ItalyDOI: 10.1145/3776574.3831184ISBN: 979-8-4007-2318-6/26/10CCS: Human-centered computing Empirical studies in HCICCS: Computing methodologies Discourse, dialogue and pragmaticsCCS: Computing methodologies Neural networksCCS: Human-centered computing Empirical studies in collaborative and social computing Akihiro Sakuramoto Affiliation: Japan Advanced Institute of Science and Technology, Nomi, Ishikawa, Japan email: s2510069@jaist.ac.jp, Takato Hayashi Affiliation: Japan Advanced Institute of Science and Technology, Nomi, Ishikawa, Japan email: hayashi0884@jaist.ac.jp, Ryo Miyoshi Affiliation: CyberAgent, Tokyo, Japan Affiliation: The University of Osaka, Osaka, Japan email: miyoshi_ryo@cyberagent.co.jp, Yuki Okafuji Affiliation: CyberAgent, Tokyo, Japan Affiliation: The University of Osaka, Osaka, Japan email: okafuji_yuki_xd@cyberagent.co.jp and Shogo Okada Affiliation: Japan Advanced Institute of Science and Technology, Nomi, Ishikawa, Japan email: okada-s@jaist.ac.jp 2026; © cc Figure 1.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 4：In particular, Gemini 2.5 Flash performs strongly as a single model, and a fusion model combining Gemini (text) with HuBERT and V-JEPA performs best overall.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 5：Keywords: human-robot interaction, real-world human-robot interaction, rapport estimation, multimodal late fusion, large language models, third-party annotation ††cc-license: by 1.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

### ⚖️ 评分理由

* 创新性 (1.1/2)：一是把 rapport 估计带到真实多人 HRI；二是系统比较 LLM、HuBERT、V-JEPA 的互补性；三是用条件分层揭示真实场景的上下文变化。 相比常规流水线的新增点清楚，但仍需更多跨条件证据判断是否形成范式突破。
* 技术严谨性 (1.1/1.5)：方法链和适用边界基本自洽；单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误 使部分边界仍待验证。
* 实验充分性 (1.2/1.5)：Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。 
* 清晰度 (0.9/1)：正文能区分输入、模块、输出和任务目标，核心限制也有明确标注；仍有少量实现细节需要读者回看原文。
* 影响力 (0.9/1.5)：该工作对语音/音乐/音频读者的直接价值来自真实多人 HRI 中能否从音频、视觉和文本可靠估计第三方 rapport。；影响范围受单地点、单文化和 62 会话限制外部效度限制。
* 开源 (0.5/1.5)：论文中未提及代码、模型权重或会话数据的公开方式。 
* 可复现性 (0.3/0.5)：标注协议、音频采样、时间对齐、融合权重和训练/验证划分未完整说明。；这影响独立复现，但不把材料缺失重复扣到技术严谨性。
* 工程/实践价值 (1.0/1.5)：真实场景和模态互补分析是亮点；但数据规模与标注主观性让结果更像可靠起点而非通用 rapport 模型。 系统或方法具备一定复用路径，但真实部署、成本和失败案例仍需补充。

### 🚨 局限与问题

1. 论文明确承认的局限：单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。
2. 审稿人发现的潜在问题：第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
