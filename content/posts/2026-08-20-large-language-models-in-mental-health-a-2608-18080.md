---
title: "Large Language Models in Mental Health: A Systematic Review of Applications, Innovations, and Ethical Challenges"
date: 2026-08-20
draft: false
tags: [多模态模型, 大语言模型, 医疗音频, 模型评估]
categories: [论文速递]
description: "多模态模型 | 6.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.18080"
---

# 📄 Large Language Models in Mental Health: A Systematic Review of Applications, Innovations, and Ethical Challenges

标签：#多模态模型 #大语言模型 #医疗音频 #模型评估

**6.0/10** | 创新 1/2 | 严谨 0.9/1.5 | 实验 0.9/1.5 | 清晰 0.8/1 | 影响 0.8/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

✅ **6.0/10** | 前50% | 文档类型：综述 | 评分置信度：中 | #多模态模型 | #大语言模型 | #医疗音频 #模型评估 | [arxiv](https://arxiv.org/abs/2608.18080)


### 👥 作者与机构

第一作者：Yisong Chen（机构未说明）
通讯作者：未说明
作者列表：Yisong Chen、Yifan Gao、Sijing Yu、Chuqing Zhao、Yang Lu（机构信息未在当前正文中完整说明）

### 💡 毒舌点评

覆盖面和安全议题对音频健康读者有价值；但方法透明度不足，不能把议程式总结当作临床证据。 亮点是一是把 LLM 应用按心理健康任务和多模态证据流整理；二是同时讨论 speech/sensor 融合与伦理风险；三是把可解释、可监管部署作为研究议程而非附录；短板是综述可能受文献选择和快速变化的模型版本影响；临床真实验证、隐私、误报代价和公平性仍需专门实证研究。

### 📌 核心摘要

Large Language Models in Mental Health: A Systematic Review of Applications, Innovations, and Ethical Challenges 面向大语言模型和语音/传感器多模态如何用于心理健康支持并保持安全。一是把 LLM 应用按心理健康任务和多模态证据流整理；二是同时讨论 speech/sensor 融合与伦理风险；三是把可解释、可监管部署作为研究议程而非附录。 综述归纳了抑郁检测、自杀风险评估、治疗支持和语音/传感器融合方向，但没有统一 quantitative meta-analysis，也未给出可比效果量。 论文把方法、评价指标和适用条件放在同一条任务链中讨论；主要局限包括：综述可能受文献选择和快速变化的模型版本影响；临床真实验证、隐私、误报代价和公平性仍需专门实证研究。

具体设置包括：By introducing self-attention mechanisms, Transformers enabled models to capture long-range dependencies in language and process sequences in parallel, outperforming recurrent architectures in both speed and accuracy.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Defined as Transformer-based architectures with billions of parameters (Guo et al. 2024c), LLMs extend capabilities to zero-shot and few-shot learning and enable robust performance even in data-scarce mental health contexts. LLMs have been applied to augment training datasets with synthetic examples (Bucur 2024), integrate medical knowledge to enhance explainability (Dalal et al. 2025; Lan et al. 2024), and improve classification across depression, PTSD, and anxiety through context-aware embeddings (Kim, Imieye, and Yin 2025; Shah et al. 2025).。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Figure 1 illustrates the full PRISMA 20 workflow for search, screening, and selection. -- 6 of 35 -- Figure 1. PRISMA Flow Diagram for Study Selection A structured data extract form was used to standardize information across studies, including model architecture, input modality, mental health domain, data sources, and evaluation metrics.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Additionally, interdisciplinary directions have emerged, including privacy-preserving IoT–LLM frameworks for continuous monitoring (Abdmeziem and Ahmed Nacer 2025) and conversational AI systems that combine LLMswith explainable AI (XAI) to deliver human-readable rationales for depression detection (Belcastro et al. 2025).。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

综合来看，论文的价值不只由最终分数决定，还取决于输入表示、模型组件、训练或推理路径、评价数据和失败条件是否彼此对应。正文明确报告的结果与作者提出的解释分开呈现；没有给出统计口径、跨域验证或部署参数的部分，不能被扩写为普遍能力。

### 🔗 开源详情

论文中未提及综述数据表、代码或可复现检索脚本的公开地址。 论文引用的预训练模型或外部工具仅作为依赖记录，不能视为本文核心产物已开源。

### 🏗️ 方法概述和架构

综述覆盖社交媒体、电子病历、临床会话、治疗支持、提示工程和多模态融合。作者把文本、speech 和 sensor data 作为不同证据流，归纳早期抑郁检测、自杀风险评估、个性化支持和心理教育等应用，再从可解释性、伦理和监管角度比较其适用边界。 框架不是单一模型，而是“数据来源—LLM/多模态融合—临床任务—安全约束”的分类体系。文本模型处理语义与对话，语音模型提供韵律和情感线索，传感器补充行为状态；综述强调这些信号的时间同步、偏差和责任归属不能被一个总分掩盖。 选择跨学科视角是为了避免把心理健康技术简化为 benchmark 排名；代价是综述结论依赖检索覆盖和纳入标准。当前文本没有完整检索式、数据库、筛选数量和质量评价流程，因此不能把它当作系统综述的完整证据。 输入先经过论文明确的表示或预处理，再进入核心模型或分析框架，最后产生任务指标、检索结果、生成序列或风险分数。若存在训练与推理两条路径，训练负责学习参数或评价规则，推理按固定的音频片段、语音 token、符号旋律或多模态会话顺序执行。论文没有直接给出网络尺寸、数据划分、优化器、随机种子、硬件、阈值、采样率或延迟的部分，保留为未说明；“显著提升”“可泛化”等方向性表述也不扩写成未经来源支持的数字。多模态或临床任务还需要交代各流如何同步、谁产生最终决策以及人工监督在哪里介入。

方法由输入表示、核心模块、训练/推理路径和输出评价共同构成。

在该设计中，By introducing self-attention mechanisms, Transformers enabled models to capture long-range dependencies in language and process sequences in parallel, outperforming recurrent architectures in both speed and accuracy.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Defined as Transformer-based architectures with billions of parameters (Guo et al. 2024c), LLMs extend capabilities to zero-shot and few-shot learning and enable robust performance even in data-scarce mental health contexts. LLMs have been applied to augment training datasets with synthetic examples (Bucur 2024), integrate medical knowledge to enhance explainability (Dalal et al. 2025; Lan et al. 2024), and improve classification across depression, PTSD, and anxiety through context-aware embeddings (Kim, Imieye, and Yin 2025; Shah et al. 2025).。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Novel methods such as PHQ-aware contrastive learning and sentiment-guided transformers have pushed forward symptom-level and severity-aware classification (Zhang et al. 2023; Zhang, Yang, and Ananiadou 2023), while interpretable LLM frameworks like MentaLLaMA have emphasized human- centered explanations (Yang et al. 2023, 2024). LLMs have also been explored for high-stakes tasks such as suicidality detection.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Suri et al. (2023); Xu et al. (2024a) Simulated and Synthetic Conversations Expert-crafted or multi-agent system–generated mental health dialogues allowing controlled evaluation and training of LLMs without personal data risks.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Alhamed, Ive, and Specia (2024b); Bucur (2024); Nikmehr et al. (2025); Yang et al. (2023, 2024) Topic Modeling and Ontology-Guided LLM-based discovery of latent mental health themes and annotation guided by PHQ-9 or SNOMED-CT.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

从数据流看，输入表示、核心模块、训练目标和推理输出必须逐层对应；任何没有在全文中披露的网络尺寸、优化器、随机种子或资源配置都不应被常见实现替代。这样的结构化描述既解释模型如何工作，也说明结果在哪些条件下能够复现。

### 💡 核心创新点

1. 一是把 LLM 应用按心理健康任务和多模态证据流整理，回应了既有方法或系统的具体瓶颈。 具体体现在By introducing self-attention mechanisms, Transformers enabled models to capture long-range dependencies in language and process sequences in parallel, outperforming recurrent architectures in both speed and accuracy.。这说明改动涉及的输入、模块和输出，也限定了它依赖的训练信号、数据条件与部署前提。

2. 二是同时讨论 speech/sensor 融合与伦理风险，并由论文的实验或系统设计支撑。 论文给出的实现边界是Defined as Transformer-based architectures with billions of parameters (Guo et al. 2024c), LLMs extend capabilities to zero-shot and few-shot learning and enable robust performance even in data-scarce mental health contexts. LLMs have been applied to augment training datasets with synthetic examples (Bucur 2024), integrate medical knowledge to enhance explainability (Dalal et al. 2025; Lan et al. 2024), and improve classification across depression, PTSD, and anxiety through context-aware embeddings (Kim, Imieye, and Yin 2025; Shah et al. 2025).。因此，结果收益不能直接归因于模型结构之外的数据、后处理或提示词因素。

3. 三是把可解释、可监管部署作为研究议程而非附录。。 实验或消融显示Figure 1 illustrates the full PRISMA 20 workflow for search, screening, and selection. -- 6 of 35 -- Figure 1. PRISMA Flow Diagram for Study Selection A structured data extract form was used to standardize information across studies, including model architecture, input modality, mental health domain, data sources, and evaluation metrics.。这一比较只在相应数据、基线和指标口径下成立，未报告独立消融时不把相关性写成组件因果。

4. 工程含义必须和条件一起解读：Additionally, interdisciplinary directions have emerged, including privacy-preserving IoT–LLM frameworks for continuous monitoring (Abdmeziem and Ahmed Nacer 2025) and conversational AI systems that combine LLMswith explainable AI (XAI) to deliver human-readable rationales for depression detection (Belcastro et al. 2025).。论文直接测量、作者解释和仍待验证的外推需要分开，不能把部署愿景写成实验结论。

5. 可复现边界是上述证据中的数据规模、输入预处理、训练/推理设置和评价指标；这些条件若没有同步满足，不能把论文的局部结果概括成普遍能力。

上述贡献需要放回完整数据流理解：输入如何被表示，哪些模块改变了中间状态，训练目标如何约束输出，以及实验是否用对照或消融隔离了收益来源。缺失的配置、样本范围和统计检验会直接影响可复现性与外部有效性。

### 📊 实验结果

综述归纳了抑郁检测、自杀风险评估、治疗支持和语音/传感器融合方向，但没有统一 quantitative meta-analysis，也未给出可比效果量。

实验结果需要和数据划分、基线、指标方向及统计口径一起阅读。

论文报告：Figure 1 illustrates the full PRISMA 20 workflow for search, screening, and selection. -- 6 of 35 -- Figure 1. PRISMA Flow Diagram for Study Selection A structured data extract form was used to standardize information across studies, including model architecture, input modality, mental health domain, data sources, and evaluation metrics.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：Additionally, interdisciplinary directions have emerged, including privacy-preserving IoT–LLM frameworks for continuous monitoring (Abdmeziem and Ahmed Nacer 2025) and conversational AI systems that combine LLMswith explainable AI (XAI) to deliver human-readable rationales for depression detection (Belcastro et al. 2025).。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：Patient engagement has emerged as one of the most significant benefits of LLM-powered conversational agents. (Cevasco et al. 2024; Ma, Mei, and Su 2024; Wen et al. 2024).。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：Meanwhile, while task-specific models fine-tuned on mental health data (Ji et al. 202; Yang et al. 2024) perform well more as expected, some LLM that were not specifically trained in mental health data, performed comparably and was rated highest across six parameters used (Adhikary et al. 2024).。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Figure 1 illustrates the full PRISMA 20 workflow for search, screening, and selection. -- 6 of 35 -- Figure 1. PRISMA Flow Diagram for Study Selection A structured data extract form was used to standardize information across studies, including model architecture, input modality, mental health domain, data sources, and evaluation metrics. |
| 主要结果 | Additionally, interdisciplinary directions have emerged, including privacy-preserving IoT–LLM frameworks for continuous monitoring (Abdmeziem and Ahmed Nacer 2025) and conversational AI systems that combine LLMswith explainable AI (XAI) to deliver human-readable rationales for depression detection (Belcastro et al. 2025). |
| 对照、消融或部署指标 | Patient engagement has emerged as one of the most significant benefits of LLM-powered conversational agents. (Cevasco et al. 2024; Ma, Mei, and Su 2024; Wen et al. 2024). |

结果解读同时关注绝对数值、相对比较、误差方向和测量条件。表格中的每个数字都必须和数据集、基线、硬件或推理设置一起阅读；如果正文只给出趋势而没有完整数值，就保留趋势并明确其证据边界。

### 🔬 细节详述

文献来源、纳入范围、分类维度和伦理讨论是主要方法材料；检索数据库、时间范围、偏倚评估和重复筛选流程未在摘要说明。 模型名、数据集、输入输出和部署限制以全文可定位段落为准；论文没有直接说明的配置保持为未说明，外部工具或作者机构不自动视为本文开源。

数据、训练、实现和部署条件共同决定结果的可复现范围。

- Novel methods such as PHQ-aware contrastive learning and sentiment-guided transformers have pushed forward symptom-level and severity-aware classification (Zhang et al. 2023; Zhang, Yang, and Ananiadou 2023), while interpretable LLM frameworks like MentaLLaMA have emphasized human- centered explanations (Yang et al. 2023, 2024). LLMs have also been explored for high-stakes tasks such as suicidality detection.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Suri et al. (2023); Xu et al. (2024a) Simulated and Synthetic Conversations Expert-crafted or multi-agent system–generated mental health dialogues allowing controlled evaluation and training of LLMs without personal data risks.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Alhamed, Ive, and Specia (2024b); Bucur (2024); Nikmehr et al. (2025); Yang et al. (2023, 2024) Topic Modeling and Ontology-Guided LLM-based discovery of latent mental health themes and annotation guided by PHQ-9 or SNOMED-CT.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Patient engagement has emerged as one of the most significant benefits of LLM-powered conversational agents. (Cevasco et al. 2024; Ma, Mei, and Su 2024; Wen et al. 2024).。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Meanwhile, while task-specific models fine-tuned on mental health data (Ji et al. 202; Yang et al. 2024) perform well more as expected, some LLM that were not specifically trained in mental health data, performed comparably and was rated highest across six parameters used (Adhikary et al. 2024).。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- It is worth mentioning that ethical concerns are highlighted in multiple paper as these LLMS are tools to assist mental health professionals instead of substitutes to professional healthcare providers, especially in low-resource settings (Sahu et al. 2025; So et al. 2024).。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

论文未报告的参数、硬件、随机种子和失败案例仍是复现与外推的不确定性。

这些实现细节说明了论文怎样把方法落到可执行的实验协议：数据怎样划分，特征怎样进入模型，训练和推理怎样衔接，指标怎样计算，以及部署资源怎样测量。它们也是判断复现成本、误差来源和外推范围的依据。读者应优先核对这些条件，而不是只比较最终分数；同一模型在不同采样率、数据切分、硬件或阈值下可能产生不同结论。方法、实验和部署三部分必须保持同一输入输出定义，任何环节的改变都可能影响比较结果。只有把这些环节连起来，读者才能判断改进来自模型本身还是来自数据与测量协议。

### ⚖️ 评分理由

* 创新性 (1.0/2)：一是把 LLM 应用按心理健康任务和多模态证据流整理；二是同时讨论 speech/sensor 融合与伦理风险；三是把可解释、可监管部署作为研究议程而非附录。 新增点清楚，但仍需更多跨条件证据判断是否形成范式突破。 * 技术严谨性 (0.9/1.5)：方法链和适用边界基本自洽；综述可能受文献选择和快速变化的模型版本影响；临床真实验证、隐私、误报代价和公平性仍需专门实证研究 使部分边界仍待验证。 * 实验充分性 (0.9/1.5)：综述归纳了抑郁检测、自杀风险评估、治疗支持和语音/传感器融合方向，但没有统一 quantitative meta-analysis，也未给出可比效果量。； * 清晰度 (0.8/1)： * 影响力 (0.8/1.5)：该工作对语音/音乐/音频读者的直接价值来自大语言模型和语音/传感器多模态如何用于心理健康支持并保持安全。；影响范围受综述可能受文献选择和快速变化的模型版本影响限制。 * 开源 (0.5/1.5)：论文中未提及综述数据表、代码或可复现检索脚本的公开地址。  * 可复现性 (0.3/0.5)：检索数据库、时间范围、偏倚评估和重复筛选流程未在摘要说明。；这影响独立复现，但不把材料缺失重复扣到技术严谨性。 * 工程/实践价值 (0.8/1.5)：覆盖面和安全议题对音频健康读者有价值；但方法透明度不足，不能把议程式总结当作临床证据。 真实部署、成本和失败案例仍需补充。

方法与实验分别对应：By introducing self-attention mechanisms, Transformers enabled models to capture long-range dependencies in language and process sequences in parallel, outperforming recurrent architectures in both speed and accuracy.；Figure 1 illustrates the full PRISMA 20 workflow for search, screening, and selection. -- 6 of 35 -- Figure 1. PRISMA Flow Diagram for Study Selection A structured data extract form was used to standardize information across studies, including model architecture, input modality, mental health domain, data sources, and evaluation metrics.。同一信息缺口不在多个维度重复扣分。

评分边界由方法结构、实验数字、资源披露和适用条件共同决定；未报告的参数、失败案例、统计检验或跨域泛化仍保持为不确定性。

* 技术严谨性（0.9/1.5）：检查输入、训练目标、推理输出、假设和实现条件是否相互一致。

* 实验充分性（0.9/1.5）：检查数据划分、基线、消融、指标方向、统计口径和失败案例是否覆盖。

* 清晰度（0.8/1）：检查读者能否沿数据流复述输入、模块、中间表示和输出。

* 影响力（0.8/1.5）：结合问题范围、证据强度和外部有效性判断，不把单一数据集结果外推。

* 开源（0.5/1.5）：只评价论文明确提供的代码、模型、数据或可验证链接。

* 可复现性（0.3/0.5）：检查数据、预处理、训练/推理配置、硬件和随机性披露。

* 工程/实践价值（0.8/1.5）：结合延迟、吞吐、资源、稳定性和真实部署限制判断。

### 🚨 局限与问题

1. 论文明确承认的局限：综述可能受文献选择和快速变化的模型版本影响；临床真实验证、隐私、误报代价和公平性仍需专门实证研究。 2. 审稿人发现的潜在问题：临床真实验证、隐私、误报代价和公平性仍需专门实证研究。

此外，Additionally, interdisciplinary directions have emerged, including privacy-preserving IoT–LLM frameworks for continuous monitoring (Abdmeziem and Ahmed Nacer 2025) and conversational AI systems that combine LLMswith explainable AI (XAI) to deliver human-readable rationales for depression detection (Belcastro et al. 2025). 当前结果只在论文报告的数据、模型、硬件和评价协议下成立。

因此，局限不仅包括作者明确承认的缺口，也包括样本规模、数据分布、基线选择、统计不确定性、资源消耗和真实场景迁移尚未被实验覆盖的部分。对于未报告的失败样例、显著性检验、跨设备测试和长期稳定性，读者只能把它们视为待验证问题，不能从单一数据集的结果推导出普遍部署保证。还需要区分作者没有测量的因素与已经证明不存在的问题，避免把沉默误读成正面结论。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
