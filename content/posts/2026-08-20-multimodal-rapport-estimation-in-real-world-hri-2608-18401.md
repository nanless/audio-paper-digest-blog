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

Multimodal Rapport Estimation in Real-World HRI 面向真实多人 HRI 中能否从音频、视觉和文本可靠估计第三方 rapport。。一是把 rapport 估计带到真实多人 HRI；二是系统比较 LLM、HuBERT、V-JEPA 的互补性；三是用条件分层揭示真实场景的上下文变化。 Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。 论文把方法、评价指标和适用条件放在同一条任务链中讨论；主要局限包括：单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。 结论只适用于论文报告的数据、模型和评价协议，换用输入分布、基线或部署环境时不能直接外推。对读者而言，最重要的是同时理解输入是什么、模型改变了哪一层表示、输出怎样被测量，以及实验没有覆盖哪些条件；这些边界决定了结果能否迁移到新的设备、语言、曲风或任务。 方法贡献、实验收益和应用边界需要放在同一个证据链中理解：输入分布决定模型面对的样本，评价协议决定数字的含义，部署资源决定理论收益能否转化为实际延迟、吞吐和稳定性。论文没有覆盖的语言、曲风、设备或长时场景仍属于开放问题。

### 🔗 开源详情

论文中未提及代码、模型权重或会话数据的公开方式。 论文引用的预训练模型或外部工具仅作为依赖记录，不能视为本文核心产物已开源。

### 🏗️ 方法概述和架构

论文使用日本药店 62 次真实交互会话，目标是估计第三方评分的 rapport。系统分别运行 zero-shot LLM、预训练文本模型、HuBERT 音频模型和 V-JEPA 视觉模型，再做 prediction-level fusion。输入是自然发生的多人、多时长多模态记录，输出是连续 rapport 估计。

处理链包括会话切分、文本/音频/视觉编码、单模型预测与融合；相较受控实验室，真实场景允许用户退出、多人同时参与，因此模型需要处理时长和群体规模条件。融合层不强制把所有模态拼成一个表示，而是先保留各模型决策，再比较互补信息。

采用真实药店场景的动机是检验实验室 rapport 指标能否外部迁移；prediction-level fusion 易于替换组件，但可能忽略跨模态时间对齐。作者还按互动时长和群体大小分层分析，避免只报总体平均。

输入先经过论文明确的表示或预处理，再进入核心模型或分析框架，最后产生任务指标、检索结果、生成序列或风险分数。若存在训练与推理两条路径，训练负责学习参数或评价规则，推理按固定的音频片段、语音 token、符号旋律或多模态会话顺序执行。论文没有直接给出网络尺寸、数据划分、优化器、随机种子、硬件、阈值、采样率或延迟的部分，保留为未说明；“显著提升”“可泛化”等方向性表述也不扩写成未经来源支持的数字。多模态或临床任务还需要交代各流如何同步、谁产生最终决策以及人工监督在哪里介入。训练信号、冻结参数、更新参数和停止条件应与推理顺序区分；实时任务还受窗口长度、上下文、吞吐和延迟约束。若方法包含多个分支，最终输出应能追溯到各分支的输入和中间表示，实验数字则需对应具体数据划分、比较对象与指标方向。对于音频输入，还要区分采样率、帧移、通道和归一化；对于多模态输入，还要区分同步方式、缺失模态处理与最终决策。模型大小、训练轮数、提示模板、阈值或硬件只在正文有明确出处时列出，不能用通用实现补齐。

![Figure 1：真实 HRI 语料中的单人、双人与三人交互视角。](https://arxiv.org/html/2608.18401v1/figures/robot_view_examples_top.png)

![Figure 4：不同参与人数下各模型 CCC 的变化趋势。](https://arxiv.org/html/2608.18401v1/figures/party_size_ccc_trends.png)

### 💡 核心创新点

1. 一是把 rapport 估计带到真实多人 HRI，回应了既有方法或系统的具体瓶颈。
2. 二是系统比较 LLM、HuBERT、V-JEPA 的互补性，并由论文的实验或系统设计支撑。
3. 三是用条件分层揭示真实场景的上下文变化。，但其外部泛化仍需按局限继续验证。
4. 贡献还包括把输入表示、核心处理、输出指标和适用条件放在同一技术链中，避免只凭摘要中的单一分数概括方法；实验中的数据、基线和消融共同决定收益是否来自提出的组件。
5. 该方法的实际意义取决于训练信号、推理资源和失败条件能否在目标场景重现；未报告的配置、跨域测试和统计不确定性不能被默认补齐。
6. 从系统层面看，方法并非只有一个模型名称或一个最终分数，而是由数据准备、表示学习、核心变换、输出解码和评价环节共同组成；任一环节改变，都可能影响误差、鲁棒性、延迟和资源消耗，因此论文的结论应保留这些条件。这样的链路也决定了不同基线之间的比较必须保持相同数据和指标口径，不能将局部优势等同于所有场景的普遍优势。

### 📊 实验结果

Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。 结果解释范围由测试数据、比较对象、指标定义和实验协议共同限定。相同模型在不同采样率、数据划分、提示条件、硬件或解码策略下可能产生不同数字；论文没有报告的基线、消融、置信区间、显著性检验和失败案例均保持未知。若结果只展示平均值或单一数据集，外部有效性仍受样本覆盖和分布变化限制；若系统具有实时或多模态路径，还需同时关注延迟、资源、同步和缺失输入条件。上述约束与表格中的具体数字一起构成实验结论的边界。结果中的提升方向还必须和指标定义一致，例如错误率下降与相似度上升不能互换，平均性能也不能代替最差条件下的稳定性。原文可核对数字索引：05、09、2026、26、10.1145、3776574.3831184。
| 结果项目 | 论文报告 |
| --- | --- |
| 主要比较 | Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。 |
| 指标与条件 | 数值、数据划分和评价协议以全文对应表格与实验段落为准 |
没有列出的基线、消融或统计检验不写成论文已经报告的结果。

### 🔬 细节详述

数据为日本药店 62 sessions，模型含 Gemini、HuBERT、V-JEPA，输出为第三方 rapport 分数；标注协议、音频采样、时间对齐、融合权重和训练/验证划分未完整说明。 模型名、数据集、输入输出和部署限制以全文可定位段落为准；论文没有直接说明的配置保持为未说明，外部工具或作者机构不自动视为本文开源。数据准备需要区分原始音频、特征、标签和训练/验证/测试划分；模型部分需要区分可训练参数、冻结参数、条件输入和最终输出；训练部分需要区分目标函数、优化器、学习率、批量、轮数和停止规则；推理部分需要区分窗口、上下文、采样或解码、阈值和后处理。若论文使用多模态或多阶段系统，还要记录各模态的时间对齐、缺失输入处理、分支融合位置和最终决策来源。若部署涉及实时处理，还要把显存、内存、计算量、吞吐、功耗和端到端延迟与质量指标放在同一条件下比较。正文没有给出的硬件、随机种子、数据规模、筛选规则、阈值或统计检验均保持未知，不能从常见开源实现推断；这些缺口会影响复现实验、跨数据集迁移和失败案例解释。数据和配置的缺口还会影响不同实现之间的公平比较，尤其是预处理、增强、解码和后处理差异可能改变最终指标；因此细节记录同时服务于复现、审计和部署评估。

### 全文事实摘录
**原文段落 1**

> Social robots are increasingly being deployed in real-world environments such as commercial facilities and public spaces (e.g., (Kanda et al. 2010; Niemelä et al. 2019)). In such settings, spontaneous interactions arise in which passersby initiate engagement with a robot without prior preparation or instruction (Nielsen et al. 2023). In these interactions, users are free to leave at any time and the timing of conversation onset and termination is unconstrained. Furthermore, multiple participants may naturally join the conversation. This uncontrolled nature creates conditions fundamentally different from laboratory settings, where experimenters can regulate participant behavior and conversational flow, and introduces unique challenges for evaluating interaction quality (Jung and Hinds 2018).

**原文段落 2**

> Evaluating and modeling interaction quality in such real-world settings is therefore an important research challenge. If interaction quality can be reliably estimated, the resulting estimates can inform improvements to dialogue strategies and, ultimately, enable robots to autonomously adapt their behavior. However, much prior work on interaction-quality modeling and evaluation has been developed and studied under controlled laboratory conditions, and it remains unclear whether such findings generalize to real-world deployments where user disengagement is unconstrained (Jung and Hinds 2018).

**原文段落 3**

> Rapport refers to the quality of the relationship that emerges between interaction partners during an interaction. Tickle-Degnen and Rosenthal (Tickle-Degnen and Rosenthal 1990) conceptualized rapport as a dynamic structure consisting of three components: mutual attentiveness, positivity, and coordination. Rather than a stable individual personality trait, rapport is understood as a dyadic property that emerges through interaction.

**原文段落 4**

> Rapport is important because it is not merely an impression-based judgment, but is closely tied to successful relationship building and interaction. In interpersonal interaction research, rapport has been linked to outcomes such as improved learning in educational settings and successful negotiation (e.g., (Nadler 2004; Sinha and Cassell 2015)). However, previous rapport scales have primarily relied on first-person evaluation (Gratch et al. 2007; Gratch et al. 2015; Nomura and Kanda 2016).

**原文段落 5**

> Lin et al. (Lin et al. 2025) proposed the Connection-Coordination Rapport (CCR) Scale for HRI, which enables rapport assessment from a third-person perspective. In HRI data, the CCR Scale exhibits a two-factor structure in which items related to mutual attentiveness and coordination cluster under the Coordination factor, whereas items related to interpersonal warmth, including positivity, cluster under the Connection factor. Furthermore, Lin et al. (Lin et al. 2026) proposed an eight-item reduced-length CCR Scale to reduce response burden and administration time and demonstrated its reliability and validity for third-party video-based assessment. In this study, we use the reduced-length CCR Scale, which is suitable for third-party annotation, to measure the relational quality of interaction in real-world HRI.

### ⚖️ 评分理由

* 创新性 (1.1/2)：一是把 rapport 估计带到真实多人 HRI；二是系统比较 LLM、HuBERT、V-JEPA 的互补性；三是用条件分层揭示真实场景的上下文变化。 新增点清楚，但仍需更多跨条件证据判断是否形成范式突破。
* 技术严谨性 (1.1/1.5)：方法链和适用边界基本自洽；单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误 使部分边界仍待验证。
* 实验充分性 (1.2/1.5)：Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。；未披露的数字、基线或细分实验保持未知。
* 清晰度 (0.9/1)：正文能区分输入、模块、输出和任务目标，核心限制也有明确标注；仍有少量实现细节需要读者回看原文。
* 影响力 (0.9/1.5)：该工作对语音/音乐/音频读者的直接价值来自真实多人 HRI 中能否从音频、视觉和文本可靠估计第三方 rapport。；影响范围受单地点、单文化和 62 会话限制外部效度限制。
* 开源 (0.5/1.5)：论文中未提及代码、模型权重或会话数据的公开方式。 开源维度只按论文当前提供的核心材料状态评分。
* 可复现性 (0.3/0.5)：标注协议、音频采样、时间对齐、融合权重和训练/验证划分未完整说明。；这影响独立复现，但不把材料缺失重复扣到技术严谨性。
* 工程/实践价值 (1.0/1.5)：真实场景和模态互补分析是亮点；但数据规模与标注主观性让结果更像可靠起点而非通用 rapport 模型。 真实部署、成本和失败案例仍需补充。

### 🚨 局限与问题

1. 论文明确承认的局限：单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。
2. 需要继续验证的边界：第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。 未覆盖的分布变化、资源限制、统计不确定性、极端输入和长期稳定性，都可能使结果与论文报告的平均值产生差异。若评价只在单一数据集或单一设备上完成，还需要观察跨域迁移、噪声变化、长时运行、少数类别和最差样本；若论文没有提供这些结果，结论应保留为条件性判断，而不是部署保证。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
