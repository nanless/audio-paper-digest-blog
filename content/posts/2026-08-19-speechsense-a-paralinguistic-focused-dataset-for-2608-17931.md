---
title: "SpeechSense: A Paralinguistic-Focused Dataset for Fine-Grained Speech Sentiment Analysis"
date: 2026-08-19
draft: false
tags: [语音情感识别, 音频理解, 多模态模型, 数据集, 模型评估]
categories: [论文速递]
description: "语音情感识别 | 8.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.17931"
---

# 📄 SpeechSense: A Paralinguistic-Focused Dataset for Fine-Grained Speech Sentiment Analysis

标签：#语音情感识别 #音频理解 #多模态模型 #数据集 #模型评估

**8.5/10** | 创新 1.5/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 1/1.5

🔥 **8.5/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：高 | #语音情感识别 | #多模态模型 | #音频理解 #数据集 | [arxiv](https://arxiv.org/abs/2608.17931)


### 👥 作者与机构

- 第一作者：Shicheng Ma；合作者 Wenqian Cui、Irwin King（香港科技大学/计算机科学与工程团队）。

### 💡 毒舌点评

SpeechSense 把“说了什么”和“怎么说”拆开，标签设计比 happy/sad 更贴近真实交互；93.12% 测试样本来自多数投票也让数据质量有了底气。不过，数据由高保真合成语音起步，剩下的最大问题恰恰是自然对话中的混合姿态、方言和文化差异，单一英文标注协议还不能代表真实世界。

### 📌 核心摘要

SpeechSense 面向细粒度 Speech Sentiment Analysis，定义八类主要由韵律和音质承载的人际姿态：Confident、Nervous、Passionate、Impatient、Warm、Apathetic、Sarcastic 和 Neutral。数据构建从高保真 TTS 生成 960 个候选片段，经至少三名 Prolific 标注者评审、两阶段多数投票与 reference alignment，得到 669 个测试样本；最终 93.12% 通过多数投票保留，Fleiss κ=0.4437。实验覆盖多模态 LLM、文本模型和语音编码器，结果显示保留音频的模型在所有架构上优于纯文本级联。

具体设置包括：However, few studies have specifically optimized these architectures for the fine-grained sentiment detection proposed in this work. 2.3.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：We construct the dataset using a rigorous three-stage pipeline designed to minimize artifacts and maximize attitudinal distinctiveness (illustrated in Fig. 1). 1) Stage 1: Semantic-Prosodic Decoupled Text Design.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Experimental Setup We design our experimental protocol to answer two core questions: (1) whether acoustic cues are the dominant signal for fine-grained sentiment detection, and (2) whether the learned representations generalize across model architectures.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Model Modality Zero-shot Supervised (Ours) Acc Macro F1 Acc Macro F1 Multi-modal LLMs Qwen2.5-Omni-3B Text 8.2% 3.79% 25.26% 19.71% Qwen2.5-Omni-3B Audio 3.74% 1.31% 54.86% 53.38% Qwen2.5-Omni-7B Text 1.36% 6.20% 26.76% 2.27% Qwen2.5-Omni-7B Audio 1.96% 2.96% 56.95% 56.76% Text-only LLMs Qwen2.5-Instruct-3B Text 15.84% 6.63% 14.20% 4.60% Qwen2.5-Instruct-7B Text 1.36% 4.3% 25.26% 15.97% Speech Encoders Whisper-large-v3 Audio 13.30% 5.03% 45.4% 45.06% HuBERT-large Audio 10.16% 3.87% 4.39% 43.79% Wav2Vec2-large Audio 12.56% 3.17% 4.54% 42.45% First, the results underscore the critical necessity of specific prosodic training.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

综合来看，论文的价值不只由最终分数决定，还取决于输入表示、模型组件、训练或推理路径、评价数据和失败条件是否彼此对应。正文明确报告的结果与作者提出的解释分开呈现；没有给出统计口径、跨域验证或部署参数的部分，不能被扩写为普遍能力。

### 🔗 开源详情

数据与补充材料：https://github.com/Sher13cked/SpeechSense。
标注平台：Qualtrics 和 Prolific；论文给出筛选、保留率和一致性统计。
复现状态：数据集与标签说明公开，TTS 生成的完整随机种子、音频合成配置和训练代码需要按仓库进一步核对。

### 🏗️ 方法概述和架构

数据管线先把每个姿态写成声学和心理定义，再用高保真语音合成生成内容相同、韵律不同的片段。Confident 通过较短时长、高强度和决断式下降音高表现；Nervous 体现为 pitch jitter、高平均音高和不规则节奏；Passionate 与 Impatient 通过音域、截断和 staccato 节奏区分；Warm、Apathetic、Sarcastic 和 Neutral 分别覆盖连接感、单调疏离、语义与韵律不一致、以及声学基线。 候选音频由 Qualtrics/Prolific 流程收集标注，每条至少三名独立 annotator。先保留 3/3 或 2/3 共识样本；对无多数的样本，如果至少一名标注者与目标标签一致，则以 reference alignment 保留，以免细微姿态因普通听众歧义全部丢失。最终统计同时报告保留率、Fleiss κ 和各类别分布。 评测分别提供音频、转写文本或多模态输入，比较多模态大模型、文本 LLM 和专门语音编码器。这样可以把 ASR 误差、文本语义和韵律线索分离，检验声学输入是否真正帮助识别 interpersonal stance，而不是只看语言内容。

方法由输入表示、核心模块、训练/推理路径和输出评价共同构成。

在该设计中，However, few studies have specifically optimized these architectures for the fine-grained sentiment detection proposed in this work. 2.3.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，We construct the dataset using a rigorous three-stage pipeline designed to minimize artifacts and maximize attitudinal distinctiveness (illustrated in Fig. 1). 1) Stage 1: Semantic-Prosodic Decoupled Text Design.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Method Clips Spkrs Training Set Gemini 3 Pro Weakly-Sup. 1,52 30 Test Set Qwen3-Max Human-Val.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，As text-only baselines, we include Qwen2.5-Instruct (3B and 7B), which share the same language backbone but lack an audio encoder.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，As speech encoders, we evaluate Whisper-large-v3 (Radford et al. 2023), HuBERT-large (Hsu et al. 2021), and Wav2Vec2-large (Baevski et al. 20), each paired with attention pooling and a linear classification head.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

![Figure 1. The SpeechSense dataset construction pipeline. The framework consists of (1) semantic-prosodic decoupled text design, (2) role-play synthesis using Lovo.ai, and (3) dual-stage human validation and filtering.](https://arxiv.org/html/2608.17931v1/camera_ready_figure1_pipeline_ACMMM.png)

从数据流看，输入表示、核心模块、训练目标和推理输出必须逐层对应；任何没有在全文中披露的网络尺寸、优化器、随机种子或资源配置都不应被常见实现替代。这样的结构化描述既解释模型如何工作，也说明结果在哪些条件下能够复现。

### 💡 核心创新点

1. 把情感识别从基本情绪扩展到可行动的人际姿态。 具体体现在However, few studies have specifically optimized these architectures for the fine-grained sentiment detection proposed in this work. 2.3.。这说明改动涉及的输入、模块和输出，也限定了它依赖的训练信号、数据条件与部署前提。

2. 用声学定义、合成语音和人工验证组合出可控的细粒度标注。 论文给出的实现边界是We construct the dataset using a rigorous three-stage pipeline designed to minimize artifacts and maximize attitudinal distinctiveness (illustrated in Fig. 1). 1) Stage 1: Semantic-Prosodic Decoupled Text Design.。因此，结果收益不能直接归因于模型结构之外的数据、后处理或提示词因素。

3. 以音频/文本模态对照实验证明 paralinguistic cues 的必要性。 实验或消融显示Experimental Setup We design our experimental protocol to answer two core questions: (1) whether acoustic cues are the dominant signal for fine-grained sentiment detection, and (2) whether the learned representations generalize across model architectures.。这一比较只在相应数据、基线和指标口径下成立，未报告独立消融时不把相关性写成组件因果。

4. 工程含义必须和条件一起解读：Model Modality Zero-shot Supervised (Ours) Acc Macro F1 Acc Macro F1 Multi-modal LLMs Qwen2.5-Omni-3B Text 8.2% 3.79% 25.26% 19.71% Qwen2.5-Omni-3B Audio 3.74% 1.31% 54.86% 53.38% Qwen2.5-Omni-7B Text 1.36% 6.20% 26.76% 2.27% Qwen2.5-Omni-7B Audio 1.96% 2.96% 56.95% 56.76% Text-only LLMs Qwen2.5-Instruct-3B Text 15.84% 6.63% 14.20% 4.60% Qwen2.5-Instruct-7B Text 1.36% 4.3% 25.26% 15.97% Speech Encoders Whisper-large-v3 Audio 13.30% 5.03% 45.4% 45.06% HuBERT-large Audio 10.16% 3.87% 4.39% 43.79% Wav2Vec2-large Audio 12.56% 3.17% 4.54% 42.45% First, the results underscore the critical necessity of specific prosodic training.。论文直接测量、作者解释和仍待验证的外推需要分开，不能把部署愿景写成实验结论。

5. 可复现边界是上述证据中的数据规模、输入预处理、训练/推理设置和评价指标；这些条件若没有同步满足，不能把论文的局部结果概括成普遍能力。

上述贡献需要放回完整数据流理解：输入如何被表示，哪些模块改变了中间状态，训练目标如何约束输出，以及实验是否用对照或消融隔离了收益来源。缺失的配置、样本范围和统计检验会直接影响可复现性与外部有效性。

### 📊 实验结果

最终测试集含 669 个样本，93.12% 仅凭多数投票保留，Fleiss κ=0.4437，属于中等一致性。多模态模型和语音编码器在八类姿态上总体优于只读取 ASR 文本的模型；论文强调这一优势在 confident/nervous、passionate/impatient 等声学相近类别上更明显。结果支持“音频访问是细粒度语用情感的必要条件”，但类别级混淆矩阵和跨说话人泛化仍需结合完整附录解读。

实验结果需要和数据划分、基线、指标方向及统计口径一起阅读。

论文报告：Experimental Setup We design our experimental protocol to answer two core questions: (1) whether acoustic cues are the dominant signal for fine-grained sentiment detection, and (2) whether the learned representations generalize across model architectures.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：Model Modality Zero-shot Supervised (Ours) Acc Macro F1 Acc Macro F1 Multi-modal LLMs Qwen2.5-Omni-3B Text 8.2% 3.79% 25.26% 19.71% Qwen2.5-Omni-3B Audio 3.74% 1.31% 54.86% 53.38% Qwen2.5-Omni-7B Text 1.36% 6.20% 26.76% 2.27% Qwen2.5-Omni-7B Audio 1.96% 2.96% 56.95% 56.76% Text-only LLMs Qwen2.5-Instruct-3B Text 15.84% 6.63% 14.20% 4.60% Qwen2.5-Instruct-7B Text 1.36% 4.3% 25.26% 15.97% Speech Encoders Whisper-large-v3 Audio 13.30% 5.03% 45.4% 45.06% HuBERT-large Audio 10.16% 3.87% 4.39% 43.79% Wav2Vec2-large Audio 12.56% 3.17% 4.54% 42.45% First, the results underscore the critical necessity of specific prosodic training.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：After supervised training, Qwen2.5-Omni text models saturate at 20–2% F1, and Qwen2.5-Instruct text models perform even worse—as low as 4.60% F1 for the 3B variant, which is lower than its own zero-shot baseline (6.63%), indicating that training induces mode collapse in the absence of acoustic signal.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：These results empirically validate the primacy of acoustic cues in detecting subtle speaker attitudes, highlighting the necessity of SpeechSense.1 1 Dataset and supplementary materials: https://github.com/Sher13cked/SpeechSense Keywords: Speech Sentiment Analysis, Paralinguistics, Multi-modal Large Language Models, Synthetic Data ††cc-license: by 1.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Experimental Setup We design our experimental protocol to answer two core questions: (1) whether acoustic cues are the dominant signal for fine-grained sentiment detection, and (2) whether the learned representations generalize across model architectures. |
| 主要结果 | Model Modality Zero-shot Supervised (Ours) Acc Macro F1 Acc Macro F1 Multi-modal LLMs Qwen2.5-Omni-3B Text 8.2% 3.79% 25.26% 19.71% Qwen2.5-Omni-3B Audio 3.74% 1.31% 54.86% 53.38% Qwen2.5-Omni-7B Text 1.36% 6.20% 26.76% 2.27% Qwen2.5-Omni-7B Audio 1.96% 2.96% 56.95% 56.76% Text-only LLMs Qwen2.5-Instruct-3B Text 15.84% 6.63% 14.20% 4.60% Qwen2.5-Instruct-7B Text 1.36% 4.3% 25.26% 15.97% Speech Encoders Whisper-large-v3 Audio 13.30% 5.03% 45.4% 45.06% HuBERT-large Audio 10.16% 3.87% 4.39% 43.79% Wav2Vec2-large Audio 12.56% 3.17% 4.54% 42.45% First, the results underscore the critical necessity  |
| 对照、消融或部署指标 | After supervised training, Qwen2.5-Omni text models saturate at 20–2% F1, and Qwen2.5-Instruct text models perform even worse—as low as 4.60% F1 for the 3B variant, which is lower than its own zero-shot baseline (6.63%), indicating that training induces mode collapse in the absence of acoustic signal. |

结果解读同时关注绝对数值、相对比较、误差方向和测量条件。表格中的每个数字都必须和数据集、基线、硬件或推理设置一起阅读；如果正文只给出趋势而没有完整数值，就保留趋势并明确其证据边界。

### 🔬 细节详述

标签集按 Internal Certainty、High-Energy Valence、Social Connection、Prosodic Deviation 四组组织。候选池从 23,006 个通过筛选的 Prolific 人员中招募，要求母语英语、大学学历和高历史通过率。93.12% 的最终样本由多数投票决定，46 个歧义样本由 reference alignment 保留；数据和补充材料提供 GitHub 下载入口。

数据、训练、实现和部署条件共同决定结果的可复现范围。

- Method Clips Spkrs Training Set Gemini 3 Pro Weakly-Sup. 1,52 30 Test Set Qwen3-Max Human-Val.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- As text-only baselines, we include Qwen2.5-Instruct (3B and 7B), which share the same language backbone but lack an audio encoder.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- As speech encoders, we evaluate Whisper-large-v3 (Radford et al. 2023), HuBERT-large (Hsu et al. 2021), and Wav2Vec2-large (Baevski et al. 20), each paired with attention pooling and a linear classification head.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- After supervised training, Qwen2.5-Omni text models saturate at 20–2% F1, and Qwen2.5-Instruct text models perform even worse—as low as 4.60% F1 for the 3B variant, which is lower than its own zero-shot baseline (6.63%), indicating that training induces mode collapse in the absence of acoustic signal.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- These results empirically validate the primacy of acoustic cues in detecting subtle speaker attitudes, highlighting the necessity of SpeechSense.1 1 Dataset and supplementary materials: https://github.com/Sher13cked/SpeechSense Keywords: Speech Sentiment Analysis, Paralinguistics, Multi-modal Large Language Models, Synthetic Data ††cc-license: by 1.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Based on the widely accepted interpretation guidelines established by Landis and Koch (Landis and Koch 197), this score signifies moderate agreement (defined as the 0.41–0.60 interval).。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

论文未报告的参数、硬件、随机种子和失败案例仍是复现与外推的不确定性。

这些实现细节说明了论文怎样把方法落到可执行的实验协议：数据怎样划分，特征怎样进入模型，训练和推理怎样衔接，指标怎样计算，以及部署资源怎样测量。它们也是判断复现成本、误差来源和外推范围的依据。读者应优先核对这些条件，而不是只比较最终分数；同一模型在不同采样率、数据切分、硬件或阈值下可能产生不同结论。方法、实验和部署三部分必须保持同一输入输出定义，任何环节的改变都可能影响比较结果。只有把这些环节连起来，读者才能判断改进来自模型本身还是来自数据与测量协议。

### ⚖️ 评分理由

创新性: 1.5/2 用 confident、nervous、passionate、impatient、warm、apathetic、sarcastic、neutral 八类人际姿态替代粗粒度情绪。 技术严谨性: 1.1/1.5 三人标注、93.12% 多数投票保留和 Fleiss κ=0.4437 提供了质量证据。 实验充分性: 1.2/1.5 比较多模态 LLM、文本 LLM 和语音编码器，直接验证声学输入的贡献。 清晰度: 0.9/1 数据构建、标签声学定义和实验分组清楚。 影响力: 1.2/1.5 细粒度语用情感对客服、招聘和交互式语音系统有现实意义。 开源: 1.2/1.5 公开 SpeechSense 数据集和补充材料仓库。 可复现性: 0.4/0.5 数据、标签定义和筛选统计公开，但合成语音生成参数仍需补充。 工程/实践价值: 1.0/1.5 面向可部署的 prosody-aware sentiment pipeline，能作为模型评估基准。

方法与实验分别对应：However, few studies have specifically optimized these architectures for the fine-grained sentiment detection proposed in this work. 2.3.；Experimental Setup We design our experimental protocol to answer two core questions: (1) whether acoustic cues are the dominant signal for fine-grained sentiment detection, and (2) whether the learned representations generalize across model architectures.。同一信息缺口不在多个维度重复扣分。

评分边界由方法结构、实验数字、资源披露和适用条件共同决定；未报告的参数、失败案例、统计检验或跨域泛化仍保持为不确定性。


* 技术严谨性（1.1/1.5）：检查输入、训练目标、推理输出、假设和实现条件是否相互一致。

* 实验充分性（1.2/1.5）：检查数据划分、基线、消融、指标方向、统计口径和失败案例是否覆盖。

* 清晰度（0.9/1）：检查读者能否沿数据流复述输入、模块、中间表示和输出。

* 影响力（1.2/1.5）：结合问题范围、证据强度和外部有效性判断，不把单一数据集结果外推。

* 开源（1.2/1.5）：只评价论文明确提供的代码、模型、数据或可验证链接。

* 可复现性（0.4/0.5）：检查数据、预处理、训练/推理配置、硬件和随机性披露。

* 工程/实践价值（1.0/1.5）：结合延迟、吞吐、资源、稳定性和真实部署限制判断。

### 🚨 局限与问题

1. 合成语音和目标标签可能带来生成器风格偏差，真实自然语料验证不足。 2. 仅覆盖英语和八类姿态，文化、方言、年龄与多姿态混合表达仍需扩展。 3. Fleiss κ 中等，尤其讽刺、温暖等需要语境的类别可能存在主观性。 4. 基准规模适合研究原型，但距离生产级长对话和开放集识别还有差距。

此外，Model Modality Zero-shot Supervised (Ours) Acc Macro F1 Acc Macro F1 Multi-modal LLMs Qwen2.5-Omni-3B Text 8.2% 3.79% 25.26% 19.71% Qwen2.5-Omni-3B Audio 3.74% 1.31% 54.86% 53.38% Qwen2.5-Omni-7B Text 1.36% 6.20% 26.76% 2.27% Qwen2.5-Omni-7B Audio 1.96% 2.96% 56.95% 56.76% Text-only LLMs Qwen2.5-Instruct-3B Text 15.84% 6.63% 14.20% 4.60% Qwen2.5-Instruct-7B Text 1.36% 4.3% 25.26% 15.97% Speech Encoders Whisper-large-v3 Audio 13.30% 5.03% 45.4% 45.06% HuBERT-large Audio 10.16% 3.87% 4.39% 43.79% Wav2Vec2-large Audio 12.56% 3.17% 4.54% 42.45% First, the results underscore the critical necessity of specific prosodic training. 当前结果只在论文报告的数据、模型、硬件和评价协议下成立。

因此，局限不仅包括作者明确承认的缺口，也包括样本规模、数据分布、基线选择、统计不确定性、资源消耗和真实场景迁移尚未被实验覆盖的部分。对于未报告的失败样例、显著性检验、跨设备测试和长期稳定性，读者只能把它们视为待验证问题，不能从单一数据集的结果推导出普遍部署保证。还需要区分作者没有测量的因素与已经证明不存在的问题，避免把沉默误读成正面结论。

---

[← 返回 2026-08-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-19/)
