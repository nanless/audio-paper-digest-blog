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

SpeechSense 把“说了什么”和“怎么说”拆开，标签设计比 happy/sad 更贴近真实交互；93.12% 测试样本来自多数投票也让数据质量有了底气。不过，数据由高保真合成语音起步，剩下的最大问题恰恰是自然对话中的混合姿态、方言和文化差异，单一英文标注协议还不能代表真实世界。细看还有三处折扣：合成语音起步的语料难免带生成器风格偏差，真实自然对话的验证不足；Fleiss κ 只达中等水平，讽刺、温暖这类依赖语境的类别主观性明显；基准规模适合研究原型，但距离生产级长对话与开放集意图识别仍有明显差距。八类姿态、单一英语的覆盖也让跨文化推广存疑。

### 📌 核心摘要

SpeechSense 面向细粒度 Speech Sentiment Analysis，定义八类主要由韵律和音质承载的人际姿态：Confident、Nervous、Passionate、Impatient、Warm、Apathetic、Sarcastic 和 Neutral。数据构建从高保真 TTS 生成 960 个候选片段，经至少三名 Prolific 标注者评审、两阶段多数投票与 reference alignment，得到 669 个测试样本；最终 93.12% 通过多数投票保留，Fleiss κ=0.4437。实验覆盖多模态 LLM、文本模型和语音编码器，结果显示保留音频的模型在所有架构上优于纯文本级联。

However, few studies have specifically optimized these architectures for the fine-grained sentiment detection proposed in this work. 2.3.。

We construct the dataset using a rigorous three-stage pipeline designed to minimize artifacts and maximize attitudinal distinctiveness (illustrated in Fig. 1). 1) Stage 1: Semantic-Prosodic Decoupled Text Design.。

Experimental Setup We design our experimental protocol to answer two core questions: (1) whether acoustic cues are the dominant signal for fine-grained sentiment detection, and (2) whether the learned representations generalize across model architectures.。

Model Modality Zero-shot Supervised (Ours) Acc Macro F1 Acc Macro F1 Multi-modal LLMs Qwen2.5-Omni-3B Text 8.2% 3.79% 25.26% 19.71% Qwen2.5-Omni-3B Audio 3.74% 1.31% 54.86% 53.38% Qwen2.5-Omni-7B Text 1.36% 6.20% 26.76% 2.27% Qwen2.5-Omni-7B Audio 1.96% 2.96% 56.95% 56.76% Text-only LLMs Qwen2.5-Instruct-3B Text 15.84% 6.63% 14.20% 4.60% Qwen2.5-Instruct-7B Text 1.36% 4.3% 25.26% 15.97% Speech Encoders Whisper-large-v3 Audio 13.30% 5.03% 45.4% 45.06% HuBERT-large Audio 10.16% 3.87% 4.39% 43.79% Wav2Vec2-large Audio 12.56% 3.17% 4.54% 42.45% First, the results underscore the critical necessity of specific prosodic training.。

因此，结论应限定在论文实际报告的数据、模型与评价协议内。

### 🔗 开源详情

数据与补充材料：https://github.com/Sher13cked/SpeechSense。
标注平台：Qualtrics 和 Prolific；论文给出筛选、保留率和一致性统计。
复现状态：数据集与标签说明公开，TTS 生成的完整随机种子、音频合成配置和训练代码需要按仓库进一步核对。

### 🏗️ 方法概述和架构

数据管线先把每个姿态写成声学和心理定义，再用高保真语音合成生成内容相同、韵律不同的片段。Confident 通过较短时长、高强度和决断式下降音高表现；Nervous 体现为 pitch jitter、高平均音高和不规则节奏；Passionate 与 Impatient 通过音域、截断和 staccato 节奏区分；Warm、Apathetic、Sarcastic 和 Neutral 分别覆盖连接感、单调疏离、语义与韵律不一致、以及声学基线。 候选音频由 Qualtrics/Prolific 流程收集标注，每条至少三名独立 annotator。先保留 3/3 或 2/3 共识样本；对无多数的样本，如果至少一名标注者与目标标签一致，则以 reference alignment 保留，以免细微姿态因普通听众歧义全部丢失。最终统计同时报告保留率、Fleiss κ 和各类别分布。 评测分别提供音频、转写文本或多模态输入，比较多模态大模型、文本 LLM 和专门语音编码器。这样可以把 ASR 误差、文本语义和韵律线索分离，检验声学输入是否真正帮助识别 interpersonal stance，而不是只看语言内容。

Method Clips Spkrs Training Set Gemini 3 Pro Weakly-Sup. 1,52 30 Test Set Qwen3-Max Human-Val.。

As text-only baselines, we include Qwen2.5-Instruct (3B and 7B), which share the same language backbone but lack an audio encoder.。

As speech encoders, we evaluate Whisper-large-v3 (Radford et al. 2023), HuBERT-large (Hsu et al. 2021), and Wav2Vec2-large (Baevski et al. 20), each paired with attention pooling and a linear classification head.。

![Figure 1. The SpeechSense dataset construction pipeline. The framework consists of (1) semantic-prosodic decoupled text design, (2) role-play synthesis using Lovo.ai, and (3) dual-stage human validation and filtering.](https://arxiv.org/html/2608.17931v1/camera_ready_figure1_pipeline_ACMMM.png)

从实现边界看，系统的输入、表示、核心模块、训练或推理路径和输出评价需要连成一条可复核的数据流：输入先经过论文定义的预处理或表示，再进入模型、检索框架或评估协议；中间状态承载特征变换、对齐、重构、生成或决策信息，最后由明确的预测、分数、序列或部署信号完成任务。训练目标、推理顺序、数据划分、资源限制和失败条件共同决定结果能否复现。正文没有披露的网络尺寸、优化器、随机种子、硬件或阈值保持为未说明，不能用常见实现替代；对于实时系统，还应同时核对窗口、上下文、延迟、内存和功耗约束。

下图来自论文原文。

![Figure 1. The SpeechSense dataset construction pipeline. The framework consists of (1) semantic-prosodic decoupled text design, (2) role-play synthesis using Lovo.ai, and](https://arxiv.org/static/base/1.0.1/images/funders/simons-foundation.png)

### 💡 核心创新点

1. 把情感识别从基本情绪扩展到可行动的人际姿态。 具体体现在However, few studies have specifically optimized these architectures for the fine-grained sentiment detection proposed in this work. 2.3.。该贡献同时限定了训练信号、数据条件与部署前提。

2. 用声学定义、合成语音和人工验证组合出可控的细粒度标注。 论文给出的实现边界是We construct the dataset using a rigorous three-stage pipeline designed to minimize artifacts and maximize attitudinal distinctiveness (illustrated in Fig. 1). 1) Stage 1: Semantic-Prosodic Decoupled Text Design.。收益来源仍需在相同数据、后处理和评价协议下验证。

3. 以音频/文本模态对照实验证明 paralinguistic cues 的必要性。 实验或消融显示Experimental Setup We design our experimental protocol to answer two core questions: (1) whether acoustic cues are the dominant signal for fine-grained sentiment detection, and (2) whether the learned representations generalize across model architectures.。比较结果仅适用于相应数据、基线和指标口径；未报告独立消融时不作组件因果归因。

4. 工程含义必须和条件一起解读：Model Modality Zero-shot Supervised (Ours) Acc Macro F1 Acc Macro F1 Multi-modal LLMs Qwen2.5-Omni-3B Text 8.2% 3.79% 25.26% 19.71% Qwen2.5-Omni-3B Audio 3.74% 1.31% 54.86% 53.38% Qwen2.5-Omni-7B Text 1.36% 6.20% 26.76% 2.27% Qwen2.5-Omni-7B Audio 1.96% 2.96% 56.95% 56.76% Text-only LLMs Qwen2.5-Instruct-3B Text 15.84% 6.63% 14.20% 4.60% Qwen2.5-Instruct-7B Text 1.36% 4.3% 25.26% 15.97% Speech Encoders Whisper-large-v3 Audio 13.30% 5.03% 45.4% 45.06% HuBERT-large Audio 10.16% 3.87% 4.39% 43.79% Wav2Vec2-large Audio 12.56% 3.17% 4.54% 42.45% First, the results underscore the critical necessity of specific prosodic training.。测量结果与作者解释仍需和未覆盖的部署条件区分。

5. 可复现边界是上述证据中的数据规模、输入预处理、训练/推理设置和评价指标；这些条件若没有同步满足，不能把论文的局部结果概括成普遍能力。

因此，缺失的配置、样本范围和统计检验会影响复现性与外部有效性。

### 📊 实验结果

最终测试集含 669 个样本，93.12% 仅凭多数投票保留，Fleiss κ=0.4437，属于中等一致性。多模态模型和语音编码器在八类姿态上总体优于只读取 ASR 文本的模型；论文强调这一优势在 confident/nervous、passionate/impatient 等声学相近类别上更明显。结果支持“音频访问是细粒度语用情感的必要条件”，但类别级混淆矩阵和跨说话人泛化仍需结合完整附录解读。

After supervised training, Qwen2.5-Omni text models saturate at 20–2% F1, and Qwen2.5-Instruct text models perform even worse—as low as 4.60% F1 for the 3B variant, which is lower than its own zero-shot baseline (6.63%), indicating that training induces mode collapse in the absence of acoustic signal.。

These results empirically validate the primacy of acoustic cues in detecting subtle speaker attitudes, highlighting the necessity of SpeechSense.1 1 Dataset and supplementary materials: https://github.com/Sher13cked/SpeechSense Keywords: Speech Sentiment Analysis, Paralinguistics, Multi-modal Large Language Models, Synthetic Data ††cc-license: by 1.。
| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Experimental Setup We design our experimental protocol to answer two core questions: (1) whether acoustic cues are the dominant signal for fine-grained sentiment detection, and (2) whether the learned representations generalize across model architectures. |
主要结果 | Model Modality Zero-shot Supervised (Ours) Acc Macro F1 Acc Macro F1 Multi-modal LLMs Qwen2.5-Omni-3B Text 8.2% 3.79% 25.26% 19.71% Qwen2.5-Omni-3B Audio 3.74% 1.31% 54.86% 53.38% Qwen2.5-Omni-7B Text 1.36% 6.20% 26.76% 2.27% Qwen2.5-Omni-7B Audio 1.96% 2.96% 56.95% 56.76% Text-only LLMs Qwen2.5-Instruct-3B Text 15.84% 6.63% 14.20% 4.60% Qwen2.5-Instruct-7B Text 1.36% 4.3% 25.26% 15.97% Speech Encoders Whisper-large-v3 Audio 13.30% 5.03% 45.4% 45.06% HuBERT-large Audio 10.16% 3.87% 4.39% 43.79% Wav2Vec2-large Audio 12.56% 3.17% 4.54% 42.45% First, the results underscore the critical necessity  |
| 对照、消融或部署指标 | After supervised training, Qwen2.5-Omni text models saturate at 20–2% F1, and Qwen2.5-Instruct text models perform even worse—as low as 4.60% F1 for the 3B variant, which is lower than its own zero-shot baseline (6.63%), indicating that training induces mode collapse in the absence of acoustic signal. |

下图来自论文原文。

![Table 1. The SpeechSense Label Set. The labels are categorized into four attribute groups based on shared acoustic and interactional characteristics to capture fine-grain](https://arxiv.org/html/2608.17931/2608.17931v1/camera_ready_figure1_pipeline_ACMMM.png)

上述结果应结合数据集、基线、指标方向和测量条件理解。

### 🔬 细节详述

标签集按 Internal Certainty、High-Energy Valence、Social Connection、Prosodic Deviation 四组组织。候选池从 23,006 个通过筛选的 Prolific 人员中招募，要求母语英语、大学学历和高历史通过率。93.12% 的最终样本由多数投票决定，46 个歧义样本由 reference alignment 保留；数据和补充材料提供 GitHub 下载入口。

数据、训练、实现和部署条件共同决定结果的可复现范围。

- Based on the widely accepted interpretation guidelines established by Landis and Koch (Landis and Koch 197), this score signifies moderate agreement (defined as the 0.41–0.60 interval).。

论文未报告的参数、硬件、随机种子和失败案例仍是复现与外推的不确定性。

上述实现条件共同限定了结果的复现边界。

### ⚖️ 评分理由

创新性: 1.5/2  [A_METHOD] 用 confident、nervous、passionate、impatient、warm、apathetic、sarcastic、neutral 八类人际姿态替代粗粒度情绪。 技术严谨性: 1.1/1.5 三人标注、93.12% 多数投票保留和 Fleiss κ=0.4437 提供了质量证据。 实验充分性: 1.2/1.5 比较多模态 LLM、文本 LLM 和语音编码器，直接验证声学输入的贡献。 清晰度: 0.9/1 数据构建、标签声学定义和实验分组清楚。 影响力: 1.2/1.5 细粒度语用情感对客服、招聘和交互式语音系统有现实意义。 开源: 1.2/1.5 公开 SpeechSense 数据集和补充材料仓库。 可复现性: 0.4/0.5 数据、标签定义和筛选统计公开，但合成语音生成参数仍需补充。 工程/实践价值: 1.0/1.5 面向可部署的 prosody-aware sentiment pipeline，能作为模型评估基准。

* 技术严谨性（1.1/1.5）： [A_RIGOR] 方法的输入、训练目标、推理输出和假设基本一致；未披露的实现条件仍限制独立复现。

* 实验充分性（1.2/1.5）： [A_RESULTS] 实验覆盖范围以正文报告的数据、基线、消融和统计口径为准；未报告部分不作外推。

* 清晰度（0.9/1）：[A_CLARITY] 检查读者能否沿数据流复述输入、模块、中间表示和输出。

* 影响力（1.2/1.5）： [A_IMPACT] 影响力受问题范围、证据强度和外部有效性限制，单一数据集结果不直接外推。

* 开源（1.2/1.5）： [A_OPEN] 只依据论文明确提供的代码、模型、数据或可验证链接评分。

* 可复现性（0.4/0.5）： [A_REPRO] 依据数据、预处理、训练或推理配置、硬件和随机性披露评分。

* 工程/实践价值（1.0/1.5）： [A_ENGINEERING] 结合延迟、吞吐、资源、稳定性和真实部署限制评分。

### 🚨 局限与问题

1. 合成语音和目标标签可能带来生成器风格偏差，真实自然语料验证不足。 2. 仅覆盖英语和八类姿态，文化、方言、年龄与多姿态混合表达仍需扩展。 3. Fleiss κ 中等，尤其讽刺、温暖等需要语境的类别可能存在主观性。 4. 基准规模适合研究原型，但距离生产级长对话和开放集识别还有差距。

此外，Model Modality Zero-shot Supervised (Ours) Acc Macro F1 Acc Macro F1 Multi-modal LLMs Qwen2.5-Omni-3B Text 8.2% 3.79% 25.26% 19.71% Qwen2.5-Omni-3B Audio 3.74% 1.31% 54.86% 53.38% Qwen2.5-Omni-7B Text 1.36% 6.20% 26.76% 2.27% Qwen2.5-Omni-7B Audio 1.96% 2.96% 56.95% 56.76% Text-only LLMs Qwen2.5-Instruct-3B Text 15.84% 6.63% 14.20% 4.60% Qwen2.5-Instruct-7B Text 1.36% 4.3% 25.26% 15.97% Speech Encoders Whisper-large-v3 Audio 13.30% 5.03% 45.4% 45.06% HuBERT-large Audio 10.16% 3.87% 4.39% 43.79% Wav2Vec2-large Audio 12.56% 3.17% 4.54% 42.45% First, the results underscore the critical necessity of specific prosodic training. 当前结果只在论文报告的数据、模型、硬件和评价协议下成立。

因此，局限不仅包括作者明确承认的缺口，也包括样本规模、数据分布、基线选择、统计不确定性、资源消耗和真实场景迁移尚未被实验覆盖的部分。对于未报告的失败样例、显著性检验、跨设备测试和长期稳定性，读者只能把它们视为待验证问题，不能从单一数据集的结果推导出普遍部署保证。还需要区分作者没有测量的因素与已经证明不存在的问题，避免把沉默误读成正面结论。

---

[← 返回 2026-08-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-19/)
