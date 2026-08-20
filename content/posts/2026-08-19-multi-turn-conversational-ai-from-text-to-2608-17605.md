---
title: "Multi-turn Conversational AI from Text to Multimodal Interaction: Data, Models, Evaluation, and Open Challenges"
date: 2026-08-19
draft: false
tags: [语音交互, 音频大模型, 多模态模型, 长音频处理, 模型评估]
categories: [论文速递]
description: "语音交互 | 6.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.17605"
---

# 📄 Multi-turn Conversational AI from Text to Multimodal Interaction: Data, Models, Evaluation, and Open Challenges

标签：#语音交互 #音频大模型 #多模态模型 #长音频处理 #模型评估

**6.5/10** | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 0.8/1.5 | 清晰 0.9/1 | 影响 1.3/1.5 | 开源 0/1.5 | 复现 0.2/0.5 | 工程 1/1.5

✅ **6.5/10** | 前50% | 文档类型：综述 | 评分置信度：高 | #语音交互 | #音频大模型 | #多模态模型 #长音频处理 | [arxiv](https://arxiv.org/abs/2608.17605)


### 👥 作者与机构

- 第一作者：Syeda Faiza Ahmed；合作者 Zien Sheikh Ali、Hunzalah Hassan Bhatti、Firoj Alam、Shammur Absar Chowdhury（卡塔尔计算研究院）。

### 💡 毒舌点评

这是一篇很适合做项目路线图的综述：它提醒大家“会看、会说、会调用工具”不等于能把一场对话坚持到底。问题是范围极宽，从文本对话一路铺到 omni-agent，很多结论依赖文献作者自己的实验，读者仍需自行判断各 benchmark 是否真正测了跨轮记忆和 grounding。

### 📌 核心摘要

本文综述多轮对话从文本向语音、多模态、全模态和工具增强交互的发展。作者把会话表示为随轮次更新的用户输入、系统输出、上下文、模态和外部状态，围绕数据集、模型范式、训练策略和评测设置组织文献。核心结论是感知和生成模态扩展快于跨轮一致性：当前系统仍在持久记忆、跨轮证据绑定、打断与全双工、跨语言文化适应、工具轨迹和风险感知评估上存在缺口，并提出 remember、revise、ground、speak、listen、act、adapt 的研究议程。

具体设置包括：5 Training Strategies Multi-turn dialogue training must account for de- pendencies across turns, delayed rewards, chang- ing user intent, and context-sensitive response quality.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：In Appendix Table 5, we summarize modeling paradigms, while Table 6 presents the main training strategies.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Table 2 lists 18 text- image resources, however, only 8 spoken and 6 video-oriented datasets.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：AlignMMBench (Wu et al., 2025d) evalu- ates cultural alignment and factual consistency in single- and multi-turn Chinese and bilingual multi- modal dialogues. SVBench (Yang et al., 2025) in- troduces temporal multi-turn dialogue over stream- ing video, where later questions depend on both earlier answers and specific video segments. A.1.4 Cultural and Linguistic Resources Arabic and dialectal multi-turn resources.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

综合来看，论文的价值不只由最终分数决定，还取决于输入表示、模型组件、训练或推理路径、评价数据和失败条件是否彼此对应。正文明确报告的结果与作者提出的解释分开呈现；没有给出统计口径、跨域验证或部署参数的部分，不能被扩写为普遍能力。

### 🔗 开源详情

代码/数据：本文为综述，未提供专属代码仓库或新数据集。
引用资源：文章列举多类公开数据集、AudioLLM、工具增强 agent 和评测套件，读者需按原文参考文献获取。

### 🏗️ 方法概述和架构

综述首先定义多轮会话不是独立问答，而是由用户话语、系统响应、会话上下文、模态状态和外部知识共同组成的序列。每一轮都可能澄清目标、修订约束、引入新证据或打断上一轮，因此模型需要记忆与更新，而不是只把历史拼接进 prompt。 文献被分成文本对话、AudioLLM/语音原生系统、多模态和 omni-modal 系统、工具增强 agent 四层。对每层分别整理数据集与 benchmark、上下文窗口和外部记忆、训练/后训练、检索和工具调用、响应延迟、全双工及说话人/文化适配。语音系统特别关注 ASR 错误传播、重叠语音、turn-taking、barge-in、声学 grounding 与语音输出。 评测被分成 turn-level correctness、session-level coherence、memory/grounding、task success、safety/uncertainty 和用户体验。作者指出单轮准确率不能替代会话级指标，未来应报告跨轮事实保持、修订后的目标满足、无法回答时的澄清/拒答、工具执行轨迹，以及模态缺失和分布偏移下的鲁棒性。

方法由输入表示、核心模块、训练/推理路径和输出评价共同构成。

在该设计中，5 Training Strategies Multi-turn dialogue training must account for de- pendencies across turns, delayed rewards, chang- ing user intent, and context-sensitive response quality.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，In Appendix Table 5, we summarize modeling paradigms, while Table 6 presents the main training strategies.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，To translate this comparison into practice, in Table 8, we map common deployment goals to the training strategy.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Videollama 2: Advanc- ing spatial-temporal modeling and audio un- derstanding in video-llms. arXiv preprint arXiv:2406.07476.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Aqulia-med llm: pioneering full-process open- source medical language models. arXiv preprint arXiv:2406.12182.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

从数据流看，输入表示、核心模块、训练目标和推理输出必须逐层对应；任何没有在全文中披露的网络尺寸、优化器、随机种子或资源配置都不应被常见实现替代。这样的结构化描述既解释模型如何工作，也说明结果在哪些条件下能够复现。

### 💡 核心创新点

1. 用“会话状态持续更新”统一文本、多模态、语音和 agent 研究。 具体体现在5 Training Strategies Multi-turn dialogue training must account for de- pendencies across turns, delayed rewards, chang- ing user intent, and context-sensitive response quality.。这说明改动涉及的输入、模块和输出，也限定了它依赖的训练信号、数据条件与部署前提。

2. 将 memory、cross-turn grounding、full-duplex、文化对齐与 evaluation gap 放在同一框架。 论文给出的实现边界是In Appendix Table 5, we summarize modeling paradigms, while Table 6 presents the main training strategies.。因此，结果收益不能直接归因于模型结构之外的数据、后处理或提示词因素。

3. 明确从能力展示转向行动质量和整段 session 可靠性的评测方向。 实验或消融显示Table 2 lists 18 text- image resources, however, only 8 spoken and 6 video-oriented datasets.。这一比较只在相应数据、基线和指标口径下成立，未报告独立消融时不把相关性写成组件因果。

4. 工程含义必须和条件一起解读：AlignMMBench (Wu et al., 2025d) evalu- ates cultural alignment and factual consistency in single- and multi-turn Chinese and bilingual multi- modal dialogues. SVBench (Yang et al., 2025) in- troduces temporal multi-turn dialogue over stream- ing video, where later questions depend on both earlier answers and specific video segments. A.1.4 Cultural and Linguistic Resources Arabic and dialectal multi-turn resources.。论文直接测量、作者解释和仍待验证的外推需要分开，不能把部署愿景写成实验结论。

5. 可复现边界是上述证据中的数据规模、输入预处理、训练/推理设置和评价指标；这些条件若没有同步满足，不能把论文的局部结果概括成普遍能力。

上述贡献需要放回完整数据流理解：输入如何被表示，哪些模块改变了中间状态，训练目标如何约束输出，以及实验是否用对照或消融隔离了收益来源。缺失的配置、样本范围和统计检验会直接影响可复现性与外部有效性。

### 📊 实验结果

综述对比了多类 survey、数据集和 benchmark，反复发现多数资源仍只测单轮或短上下文；音频和视觉能力增强并未同步带来持久记忆、跨轮证据绑定或可靠的全双工。作者整理的文献证据支持多轮一致性、记忆更新、文化适应和会话级评测是共同缺口，但本文不提供新的数值 benchmark。

实验结果需要和数据划分、基线、指标方向及统计口径一起阅读。

论文报告：Table 2 lists 18 text- image resources, however, only 8 spoken and 6 video-oriented datasets.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：AlignMMBench (Wu et al., 2025d) evalu- ates cultural alignment and factual consistency in single- and multi-turn Chinese and bilingual multi- modal dialogues. SVBench (Yang et al., 2025) in- troduces temporal multi-turn dialogue over stream- ing video, where later questions depend on both earlier answers and specific video segments. A.1.4 Cultural and Linguistic Resources Arabic and dialectal multi-turn resources.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：It combines real images, text questions, spoken questions, and image-grounded answers, but its current task format is single- turn rather than conversational. M2CQA (Mousi et al., 2026) provides a single-turn multimodal QA benchmark spanning 17 MENA countries in MSA and multiple Arabic dialects, and intro- duces the Cultural Hallucination and Factual Re- call metric for measuring culturally grounded cor- rectness.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：ArabicaQA (Abdallah et al., 2024) sup- ports Arabic question answering, Dallah (Alwajih et al., 2024) focuses on dialect-aware Arabic multi- modal modeling, MLQA (Lewis et al., 20) pro- vides a cross-lingual extractive QA baseline, and mSTEB (Beyene et al., 2025) extends multilingual evaluation to speech and text tasks.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Table 2 lists 18 text- image resources, however, only 8 spoken and 6 video-oriented datasets. |
| 主要结果 | AlignMMBench (Wu et al., 2025d) evalu- ates cultural alignment and factual consistency in single- and multi-turn Chinese and bilingual multi- modal dialogues. SVBench (Yang et al., 2025) in- troduces temporal multi-turn dialogue over stream- ing video, where later questions depend on both earlier answers and specific video segments. A.1.4 Cultural and Linguistic Resources Arabic and dialectal multi-turn resources. |
| 对照、消融或部署指标 | It combines real images, text questions, spoken questions, and image-grounded answers, but its current task format is single- turn rather than conversational. M2CQA (Mousi et al., 2026) provides a single-turn multimodal QA benchmark spanning 17 MENA countries in MSA and multiple Arabic dialects, and intro- duces the Cultural Hallucination and Factual Re- call metric for measuring culturally grounded cor- rectness. |

结果解读同时关注绝对数值、相对比较、误差方向和测量条件。表格中的每个数字都必须和数据集、基线、硬件或推理设置一起阅读；如果正文只给出趋势而没有完整数值，就保留趋势并明确其证据边界。

### 🔬 细节详述

检索范围覆盖 Google Scholar、Semantic Scholar，以及 NeurIPS、ICLR、ICML、Interspeech、SIGDIAL、CVPR、ICCV、AAAI 等会议。分类表涉及文本/语音/视觉/三模态、对话类型、上下文管理、训练策略、检索工具、评测和安全。对 AudioLLM，文章特别讨论 speech-native 输入、连续听觉流、语音活动检测、延迟和 full-duplex turn-taking。

数据、训练、实现和部署条件共同决定结果的可复现范围。

- To translate this comparison into practice, in Table 8, we map common deployment goals to the training strategy.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Videollama 2: Advanc- ing spatial-temporal modeling and audio un- derstanding in video-llms. arXiv preprint arXiv:2406.07476.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Aqulia-med llm: pioneering full-process open- source medical language models. arXiv preprint arXiv:2406.12182.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- It combines real images, text questions, spoken questions, and image-grounded answers, but its current task format is single- turn rather than conversational. M2CQA (Mousi et al., 2026) provides a single-turn multimodal QA benchmark spanning 17 MENA countries in MSA and multiple Arabic dialects, and intro- duces the Cultural Hallucination and Factual Re- call metric for measuring culturally grounded cor- rectness.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- ArabicaQA (Abdallah et al., 2024) sup- ports Arabic question answering, Dallah (Alwajih et al., 2024) focuses on dialect-aware Arabic multi- modal modeling, MLQA (Lewis et al., 20) pro- vides a cross-lingual extractive QA baseline, and mSTEB (Beyene et al., 2025) extends multilingual evaluation to speech and text tasks.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Broader cultural multimodal resources. SEA- VQA (Urailertprasert et al., 2024) evaluates cul- tural visual question answering across South- east Asian settings. CVQA (Mogrovejo et al., 2024), CulturalGround (Nyandwi et al., 2025), and MMA-ASIA (Weihua et al., 2025) extend culturally focused multimodal evaluation across broader language and regional settings.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

论文未报告的参数、硬件、随机种子和失败案例仍是复现与外推的不确定性。

这些实现细节说明了论文怎样把方法落到可执行的实验协议：数据怎样划分，特征怎样进入模型，训练和推理怎样衔接，指标怎样计算，以及部署资源怎样测量。它们也是判断复现成本、误差来源和外推范围的依据。读者应优先核对这些条件，而不是只比较最终分数；同一模型在不同采样率、数据切分、硬件或阈值下可能产生不同结论。方法、实验和部署三部分必须保持同一输入输出定义，任何环节的改变都可能影响比较结果。只有把这些环节连起来，读者才能判断改进来自模型本身还是来自数据与测量协议。

### ⚖️ 评分理由

创新性: 1.2/2 把多轮对话的记忆、跨模态 grounding、工具调用、全双工和文化对齐放进统一研究坐标。 技术严谨性: 1.1/1.5 给出范围、检索来源和分类维度，但综述结论依赖文献覆盖质量。 实验充分性: 0.8/1.5 以数据集/benchmark 对照和 gap 汇总为证据，非新模型实验。 清晰度: 0.9/1 从文本、多模态、AudioLLM 到 agent 的组织路线清楚。 影响力: 1.3/1.5 多轮语音和 omni-modal 交互是当前应用系统的核心瓶颈。 开源: 0.0/1.5 综述未提供代码或数据集仓库，开源分保守记为 0。 可复现性: 0.2/0.5 检索策略和分类表可复核，但动态文献更新会影响结果。 工程/实践价值: 1.0/1.5 对 memory、turn-level evaluation、full-duplex 和 escalation 的工程拆解实用。

方法与实验分别对应：5 Training Strategies Multi-turn dialogue training must account for de- pendencies across turns, delayed rewards, chang- ing user intent, and context-sensitive response quality.；Table 2 lists 18 text- image resources, however, only 8 spoken and 6 video-oriented datasets.。同一信息缺口不在多个维度重复扣分。

评分边界由方法结构、实验数字、资源披露和适用条件共同决定；未报告的参数、失败案例、统计检验或跨域泛化仍保持为不确定性。


* 技术严谨性（1.1/1.5）：检查输入、训练目标、推理输出、假设和实现条件是否相互一致。

* 实验充分性（0.8/1.5）：检查数据划分、基线、消融、指标方向、统计口径和失败案例是否覆盖。

* 清晰度（0.9/1）：检查读者能否沿数据流复述输入、模块、中间表示和输出。

* 影响力（1.3/1.5）：结合问题范围、证据强度和外部有效性判断，不把单一数据集结果外推。

* 开源（0.0/1.5）：只评价论文明确提供的代码、模型、数据或可验证链接。

* 可复现性（0.2/0.5）：检查数据、预处理、训练/推理配置、硬件和随机性披露。

* 工程/实践价值（1.0/1.5）：结合延迟、吞吐、资源、稳定性和真实部署限制判断。

### 🚨 局限与问题

1. 综述范围很大，模型、数据集与评测的覆盖会随发表速度快速变化。 2. 不同论文的“多轮”定义和指标不一致，横向比较不可避免地带有主观归类。 3. 对真实部署成本、延迟、隐私和跨文化用户研究的量化仍有限。 4. 研究议程提出了问题，但没有统一可执行 benchmark 或代码基线。

此外，AlignMMBench (Wu et al., 2025d) evalu- ates cultural alignment and factual consistency in single- and multi-turn Chinese and bilingual multi- modal dialogues. SVBench (Yang et al., 2025) in- troduces temporal multi-turn dialogue over stream- ing video, where later questions depend on both earlier answers and specific video segments. A.1.4 Cultural and Linguistic Resources Arabic and dialectal multi-turn resources. 当前结果只在论文报告的数据、模型、硬件和评价协议下成立。

因此，局限不仅包括作者明确承认的缺口，也包括样本规模、数据分布、基线选择、统计不确定性、资源消耗和真实场景迁移尚未被实验覆盖的部分。对于未报告的失败样例、显著性检验、跨设备测试和长期稳定性，读者只能把它们视为待验证问题，不能从单一数据集的结果推导出普遍部署保证。还需要区分作者没有测量的因素与已经证明不存在的问题，避免把沉默误读成正面结论。

---

[← 返回 2026-08-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-19/)
