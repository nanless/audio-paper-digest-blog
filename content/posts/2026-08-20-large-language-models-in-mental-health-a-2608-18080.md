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

Large Language Models in Mental Health: A Systematic Review of Applications, Innovations, and Ethical Challenges 面向大语言模型和语音/传感器多模态如何用于心理健康支持并保持安全。论文的核心贡献形态是综述，把问题转化为可执行的音频/语音/音乐或多模态处理流程。一是把 LLM 应用按心理健康任务和多模态证据流整理；二是同时讨论 speech/sensor 融合与伦理风险；三是把可解释、可监管部署作为研究议程而非附录。 综述归纳了抑郁检测、自杀风险评估、治疗支持和语音/传感器融合方向，但没有统一 quantitative meta-analysis，也未给出可比效果量。 对音频读者而言，它的实际意义在于提供可复用的任务定义或工程证据。主要局限包括：综述可能受文献选择和快速变化的模型版本影响；临床真实验证、隐私、误报代价和公平性仍需专门实证研究。

### 🔗 开源详情

论文中未提及综述数据表、代码或可复现检索脚本的公开地址。 论文引用的预训练模型或外部工具仅作为依赖记录，不能视为本文核心产物已开源。

### 🏗️ 方法概述和架构

综述覆盖社交媒体、电子病历、临床会话、治疗支持、提示工程和多模态融合。作者把文本、speech 和 sensor data 作为不同证据流，归纳早期抑郁检测、自杀风险评估、个性化支持和心理教育等应用，再从可解释性、伦理和监管角度比较其适用边界。 框架不是单一模型，而是“数据来源—LLM/多模态融合—临床任务—安全约束”的分类体系。文本模型处理语义与对话，语音模型提供韵律和情感线索，传感器补充行为状态；综述强调这些信号的时间同步、偏差和责任归属不能被一个总分掩盖。 选择跨学科视角是为了避免把心理健康技术简化为 benchmark 排名；代价是综述结论依赖检索覆盖和纳入标准。当前文本没有完整检索式、数据库、筛选数量和质量评价流程，因此不能把它当作系统综述的完整证据。

全文方法与训练段落给出的可复现设置如下：

第 1 个证据块：论文明确写到“Figure 1 illustrates the full PRISMA 2020 workflow for search, screening, and selection. -- 6 of 35 -- Figure 1. PRISMA Flow Diagram for Study Selection A structured data extract form was used to standardize information across studies, including model architecture, input modality, mental health domain, data sources, and evaluation metrics.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 2 个证据块：论文明确写到“Figure 2 is a flow chart illustrating the sequential roles of LLMs in supporting therapy, from session summarization and model evaluation to aiding clinical decisions, enhancing patient engagement, and ensuring ethical oversight. A detailed explanation of each component follows.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 3 个证据块：论文明确写到“Large Language Models in Mental Health: A Systematic Review of Applications, Innovations, and Ethical Challenges Yisong Chena*, Yifan Gaob, Sijing Yuc, Chuqing Zhaod and Yang Lue a College of Computing, Georgia Institute of Technology, Atlanta, US; b Department of Information System and Cyber Security, The University of Texas at San Antonio, San Antonio, US; c Department of Computer Science and Engineering, Texas A&M University, US; Harvard University, School of Engineering and Applied Sciences, US; e School of Computing and Artificial Intelligence, Beijing Technology and Business School, Beijing, China *yisongchen@gatech.edu -- 1 of 35 -- Large Language Models in Mental Health: A Systematic Review of Applications, Innovations, and Ethical Challenges We present a review on the applications of large language models (LLMs) in health, e.g., social media analysis, clinical conversational agents, therapy support tools, prompt engineering, multimodal learning, and ethical considerations.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 4 个证据块：论文明确写到“Keywords: Large Language Models (LLMs), Generative AI, Digital Mental Health Informatics, Social Media Analysis, Multimodal Modeling 1.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 5 个证据块：论文明确写到“Other directions emphasize explainability to ensure outputs are meaningful to clinicians and patients (Wang, Inkpen, and Kirinde Gamaarachchige 2024), highlight cross-lingual adaptation in diverse contexts such as Chinese social media (Zheng, Guo, and Hong 2024), and extend from individual-level detection to population-level trend discovery through LLM-powered topic modeling (Zhao and Chen 2025).”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

### 💡 核心创新点

1. 一是把 LLM 应用按心理健康任务和多模态证据流整理，回应了既有方法或系统的具体瓶颈。
2. 二是同时讨论 speech/sensor 融合与伦理风险，并由论文的实验或系统设计支撑。
3. 三是把可解释、可监管部署作为研究议程而非附录。。

### 📊 实验结果

下面把全文实验段落中的设置、数字和比较关系逐项列出；指标方向沿用论文定义。

全文实验证据 1：Figure 1 illustrates the full PRISMA 2020 workflow for search, screening, and selection. -- 6 of 35 -- Figure 1. PRISMA Flow Diagram for Study Selection A structured data extract form was used to standardize information across studies, including model architecture, input modality, mental health domain, data sources, and evaluation metrics.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 2：Figure 2 is a flow chart illustrating the sequential roles of LLMs in supporting therapy, from session summarization and model evaluation to aiding clinical decisions, enhancing patient engagement, and ensuring ethical oversight. A detailed explanation of each component follows.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 3：Figure 4 summarizes our overview for Prompt Engineering Techniques for Mental Health Applications.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 4：Other directions emphasize explainability to ensure outputs are meaningful to clinicians and patients (Wang, Inkpen, and Kirinde Gamaarachchige 2024), highlight cross-lingual adaptation in diverse contexts such as Chinese social media (Zheng, Guo, and Hong 2024), and extend from individual-level detection to population-level trend discovery through LLM-powered topic modeling (Zhao and Chen 2025).。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Figure 1 illustrates the full PRISMA 2020 workflow for search, screening, and selection. -- 6 of 35 -- Figure 1. PRISMA Flow Diagram for Study Selection A structured data extract form was used to standardize information across studies, including model architecture, input modality, mental health domain, data sources, and evaluation metrics. |
| 主要结果 | Figure 2 is a flow chart illustrating the sequential roles of LLMs in supporting therapy, from session summarization and model evaluation to aiding clinical decisions, enhancing patient engagement, and ensuring ethical oversight. A detailed explanation of each component follows. |
| 对照、消融或部署指标 | Figure 4 summarizes our overview for Prompt Engineering Techniques for Mental Health Applications. |

### 🔬 细节详述

全文中还能定位到以下数据、训练或实现细节。它们补充了方法段没有展开的采样、数据规模、优化和部署边界：

- 细节证据 1：Figure 1 illustrates the full PRISMA 2020 workflow for search, screening, and selection. -- 6 of 35 -- Figure 1. PRISMA Flow Diagram for Study Selection A structured data extract form was used to standardize information across studies, including model architecture, input modality, mental health domain, data sources, and evaluation metrics.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 2：Figure 2 is a flow chart illustrating the sequential roles of LLMs in supporting therapy, from session summarization and model evaluation to aiding clinical decisions, enhancing patient engagement, and ensuring ethical oversight. A detailed explanation of each component follows.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 3：Large Language Models in Mental Health: A Systematic Review of Applications, Innovations, and Ethical Challenges Yisong Chena*, Yifan Gaob, Sijing Yuc, Chuqing Zhaod and Yang Lue a College of Computing, Georgia Institute of Technology, Atlanta, US; b Department of Information System and Cyber Security, The University of Texas at San Antonio, San Antonio, US; c Department of Computer Science and Engineering, Texas A&M University, US; Harvard University, School of Engineering and Applied Sciences, US; e School of Computing and Artificial Intelligence, Beijing Technology and Business School, Beijing, China *yisongchen@gatech.edu -- 1 of 35 -- Large Language Models in Mental Health: A Systematic Review of Applications, Innovations, and Ethical Challenges We present a review on the applications of large language models (LLMs) in health, e.g., social media analysis, clinical conversational agents, therapy support tools, prompt engineering, multimodal learning, and ethical considerations.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 4：Keywords: Large Language Models (LLMs), Generative AI, Digital Mental Health Informatics, Social Media Analysis, Multimodal Modeling 1.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 5：Other directions emphasize explainability to ensure outputs are meaningful to clinicians and patients (Wang, Inkpen, and Kirinde Gamaarachchige 2024), highlight cross-lingual adaptation in diverse contexts such as Chinese social media (Zheng, Guo, and Hong 2024), and extend from individual-level detection to population-level trend discovery through LLM-powered topic modeling (Zhao and Chen 2025).。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

### ⚖️ 评分理由

* 创新性 (1.0/2)：一是把 LLM 应用按心理健康任务和多模态证据流整理；二是同时讨论 speech/sensor 融合与伦理风险；三是把可解释、可监管部署作为研究议程而非附录。 相比常规流水线的新增点清楚，但仍需更多跨条件证据判断是否形成范式突破。
* 技术严谨性 (0.9/1.5)：方法链和适用边界基本自洽；综述可能受文献选择和快速变化的模型版本影响；临床真实验证、隐私、误报代价和公平性仍需专门实证研究 使部分边界仍待验证。
* 实验充分性 (0.9/1.5)：综述归纳了抑郁检测、自杀风险评估、治疗支持和语音/传感器融合方向，但没有统一 quantitative meta-analysis，也未给出可比效果量。 
* 清晰度 (0.8/1)：正文能区分输入、模块、输出和任务目标，核心限制也有明确标注；仍有少量实现细节需要读者回看原文。
* 影响力 (0.8/1.5)：该工作对语音/音乐/音频读者的直接价值来自大语言模型和语音/传感器多模态如何用于心理健康支持并保持安全。；影响范围受综述可能受文献选择和快速变化的模型版本影响限制。
* 开源 (0.5/1.5)：论文中未提及综述数据表、代码或可复现检索脚本的公开地址。 
* 可复现性 (0.3/0.5)：检索数据库、时间范围、偏倚评估和重复筛选流程未在摘要说明。；这影响独立复现，但不把材料缺失重复扣到技术严谨性。
* 工程/实践价值 (0.8/1.5)：覆盖面和安全议题对音频健康读者有价值；但方法透明度不足，不能把议程式总结当作临床证据。 系统或方法具备一定复用路径，但真实部署、成本和失败案例仍需补充。

### 🚨 局限与问题

1. 论文明确承认的局限：综述可能受文献选择和快速变化的模型版本影响；临床真实验证、隐私、误报代价和公平性仍需专门实证研究。
2. 审稿人发现的潜在问题：临床真实验证、隐私、误报代价和公平性仍需专门实证研究。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
