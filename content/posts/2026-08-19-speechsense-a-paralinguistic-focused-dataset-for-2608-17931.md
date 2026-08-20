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

### 🔗 开源详情

数据与补充材料：https://github.com/Sher13cked/SpeechSense。
标注平台：Qualtrics 和 Prolific；论文给出筛选、保留率和一致性统计。
复现状态：数据集与标签说明公开，TTS 生成的完整随机种子、音频合成配置和训练代码需要按仓库进一步核对。

### 🏗️ 方法概述和架构

数据管线先把每个姿态写成声学和心理定义，再用高保真语音合成生成内容相同、韵律不同的片段。Confident 通过较短时长、高强度和决断式下降音高表现；Nervous 体现为 pitch jitter、高平均音高和不规则节奏；Passionate 与 Impatient 通过音域、截断和 staccato 节奏区分；Warm、Apathetic、Sarcastic 和 Neutral 分别覆盖连接感、单调疏离、语义与韵律不一致、以及声学基线。 候选音频由 Qualtrics/Prolific 流程收集标注，每条至少三名独立 annotator。先保留 3/3 或 2/3 共识样本；对无多数的样本，如果至少一名标注者与目标标签一致，则以 reference alignment 保留，以免细微姿态因普通听众歧义全部丢失。最终统计同时报告保留率、Fleiss κ 和各类别分布。 评测分别提供音频、转写文本或多模态输入，比较多模态大模型、文本 LLM 和专门语音编码器。这样可以把 ASR 误差、文本语义和韵律线索分离，检验声学输入是否真正帮助识别 interpersonal stance，而不是只看语言内容。

全文方法与训练段落给出的可复现设置如下：

第 1 个证据块：论文明确写到“SpeechSense: A Paralinguistic-Focused Dataset for Fine-Grained Speech Sentiment AnalysisConference: Proceedings of the 34th ACM International Conference on Multimedia; November 10–14, 2026; Rio de Janeiro, BrazilProceedings of the 34th ACM International Conference on Multimedia (MM ’26), November 10–14, 2026, Rio de Janeiro, BrazilDOI: 10.1145/3767308.3838667ISBN: 979-8-4007-2213-4/2026/11CCS: Information systems Sentiment analysisCCS: Computing methodologies Language resourcesCCS: Computing methodologies Neural networksCCS: Applied computing Sound and music computing Shicheng Ma Affiliation: Department of Computer Science and Engineering, The Chinese University of Hong Kong, Hong Kong, Hong Kong email: shichengma@cuhk.edu.hk, Wenqian Cui Affiliation: Department of Computer Science and Engineering, The Chinese University of Hong Kong, Hong Kong, Hong Kong email: wenqian.cui@link.cuhk.edu.hk and Irwin King Affiliation: Department of Computer Science and Engineering, The Chinese University of Hong Kong, Hong Kong, Hong Kong email: king@cse.cuhk.edu.hk 2026; © cc Abstract.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 2 个证据块：论文明确写到“These results empirically validate the primacy of acoustic cues in detecting subtle speaker attitudes, highlighting the necessity of SpeechSense.11 1 Dataset and supplementary materials: https://github.com/Sher13cked/SpeechSense Keywords: Speech Sentiment Analysis, Paralinguistics, Multi-modal Large Language Models, Synthetic Data ††cc-license: by 1.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 3 个证据块：论文明确写到“For effective speech understanding, AI models require not only recognizing what is said (linguistic information) but also discerning how it is said (paralinguistic information) (Cui et al. 2025b; Cui et al. 2026; Guo et al. 2026), as paralinguistic information carries additional meanings beyond the spoken content. A notable task that involves paralinguistic understanding is Speech Sentiment Analysis (SSA), where acoustic cues are analyzed to decipher fine-grained speaker attitudes and affective states.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 4 个证据块：论文明确写到“In these systems, speech is first converted to text via Automatic Speech Recognition (ASR) before applying Text-based Sentiment Analysis (TSA) models (Shah et al. 2023).”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 5 个证据块：论文明确写到“Most current datasets focus on broad sentiment, such as positive or negative, or basic emotions like happy and sad (Mohmad Dar and Delhibabu 2024; Cui et al. 2024).”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

![Figure 1. The SpeechSense dataset construction pipeline. The framework consists of (1) semantic-prosodic decoupled text design, (2) role-play synthesis using Lovo.ai, and (3) dual-stage human validation and filtering.](https://arxiv.org/html/2608.17931v1/camera_ready_figure1_pipeline_ACMMM.png)

### 💡 核心创新点

1. 把情感识别从基本情绪扩展到可行动的人际姿态。
2. 用声学定义、合成语音和人工验证组合出可控的细粒度标注。
3. 以音频/文本模态对照实验证明 paralinguistic cues 的必要性。

### 📊 实验结果

最终测试集含 669 个样本，93.12% 仅凭多数投票保留，Fleiss κ=0.4437，属于中等一致性。多模态模型和语音编码器在八类姿态上总体优于只读取 ASR 文本的模型；论文强调这一优势在 confident/nervous、passionate/impatient 等声学相近类别上更明显。结果支持“音频访问是细粒度语用情感的必要条件”，但类别级混淆矩阵和跨说话人泛化仍需结合完整附录解读。

下面把全文实验段落中的设置、数字和比较关系逐项列出；指标方向沿用论文定义。

全文实验证据 1：Table 3 summarizes their variation measured on a shared control utterance, spanning a broad pitch range and distinct vocal tract characteristics.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 2：Specifically, we define a specialized 8-class taxonomy of interpersonal stances detectable primarily through prosodic cues beyond lexical content alone.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 3：These results empirically validate the primacy of acoustic cues in detecting subtle speaker attitudes, highlighting the necessity of SpeechSense.11 1 Dataset and supplementary materials: https://github.com/Sher13cked/SpeechSense Keywords: Speech Sentiment Analysis, Paralinguistics, Multi-modal Large Language Models, Synthetic Data ††cc-license: by 1.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 4：For effective speech understanding, AI models require not only recognizing what is said (linguistic information) but also discerning how it is said (paralinguistic information) (Cui et al. 2025b; Cui et al. 2026; Guo et al. 2026), as paralinguistic information carries additional meanings beyond the spoken content. A notable task that involves paralinguistic understanding is Speech Sentiment Analysis (SSA), where acoustic cues are analyzed to decipher fine-grained speaker attitudes and affective states.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Table 3 summarizes their variation measured on a shared control utterance, spanning a broad pitch range and distinct vocal tract characteristics. |
| 主要结果 | Specifically, we define a specialized 8-class taxonomy of interpersonal stances detectable primarily through prosodic cues beyond lexical content alone. |
| 对照、消融或部署指标 | These results empirically validate the primacy of acoustic cues in detecting subtle speaker attitudes, highlighting the necessity of SpeechSense.11 1 Dataset and supplementary materials: https://github.com/Sher13cked/SpeechSense Keywords: Speech Sentiment Analysis, Paralinguistics, Multi-modal Large Language Models, Synthetic Data ††cc-license: by 1. |

### 🔬 细节详述

标签集按 Internal Certainty、High-Energy Valence、Social Connection、Prosodic Deviation 四组组织。候选池从 23,006 个通过筛选的 Prolific 人员中招募，要求母语英语、大学学历和高历史通过率。93.12% 的最终样本由多数投票决定，46 个歧义样本由 reference alignment 保留；数据和补充材料提供 GitHub 下载入口。

全文中还能定位到以下数据、训练或实现细节。它们补充了方法段没有展开的采样、数据规模、优化和部署边界：

- 细节证据 1：SpeechSense: A Paralinguistic-Focused Dataset for Fine-Grained Speech Sentiment AnalysisConference: Proceedings of the 34th ACM International Conference on Multimedia; November 10–14, 2026; Rio de Janeiro, BrazilProceedings of the 34th ACM International Conference on Multimedia (MM ’26), November 10–14, 2026, Rio de Janeiro, BrazilDOI: 10.1145/3767308.3838667ISBN: 979-8-4007-2213-4/2026/11CCS: Information systems Sentiment analysisCCS: Computing methodologies Language resourcesCCS: Computing methodologies Neural networksCCS: Applied computing Sound and music computing Shicheng Ma Affiliation: Department of Computer Science and Engineering, The Chinese University of Hong Kong, Hong Kong, Hong Kong email: shichengma@cuhk.edu.hk, Wenqian Cui Affiliation: Department of Computer Science and Engineering, The Chinese University of Hong Kong, Hong Kong, Hong Kong email: wenqian.cui@link.cuhk.edu.hk and Irwin King Affiliation: Department of Computer Science and Engineering, The Chinese University of Hong Kong, Hong Kong, Hong Kong email: king@cse.cuhk.edu.hk 2026; © cc Abstract.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 2：These results empirically validate the primacy of acoustic cues in detecting subtle speaker attitudes, highlighting the necessity of SpeechSense.11 1 Dataset and supplementary materials: https://github.com/Sher13cked/SpeechSense Keywords: Speech Sentiment Analysis, Paralinguistics, Multi-modal Large Language Models, Synthetic Data ††cc-license: by 1.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 3：For effective speech understanding, AI models require not only recognizing what is said (linguistic information) but also discerning how it is said (paralinguistic information) (Cui et al. 2025b; Cui et al. 2026; Guo et al. 2026), as paralinguistic information carries additional meanings beyond the spoken content. A notable task that involves paralinguistic understanding is Speech Sentiment Analysis (SSA), where acoustic cues are analyzed to decipher fine-grained speaker attitudes and affective states.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 4：In these systems, speech is first converted to text via Automatic Speech Recognition (ASR) before applying Text-based Sentiment Analysis (TSA) models (Shah et al. 2023).。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 5：Most current datasets focus on broad sentiment, such as positive or negative, or basic emotions like happy and sad (Mohmad Dar and Delhibabu 2024; Cui et al. 2024).。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

### ⚖️ 评分理由

创新性: 1.5/2 用 confident、nervous、passionate、impatient、warm、apathetic、sarcastic、neutral 八类人际姿态替代粗粒度情绪。
技术严谨性: 1.1/1.5 三人标注、93.12% 多数投票保留和 Fleiss κ=0.4437 提供了质量证据。
实验充分性: 1.2/1.5 比较多模态 LLM、文本 LLM 和语音编码器，直接验证声学输入的贡献。
清晰度: 0.9/1 数据构建、标签声学定义和实验分组清楚。
影响力: 1.2/1.5 细粒度语用情感对客服、招聘和交互式语音系统有现实意义。
开源: 1.2/1.5 公开 SpeechSense 数据集和补充材料仓库。
可复现性: 0.4/0.5 数据、标签定义和筛选统计公开，但合成语音生成参数仍需补充。
工程/实践价值: 1.0/1.5 面向可部署的 prosody-aware sentiment pipeline，能作为模型评估基准。

### 🚨 局限与问题

1. 合成语音和目标标签可能带来生成器风格偏差，真实自然语料验证不足。
2. 仅覆盖英语和八类姿态，文化、方言、年龄与多姿态混合表达仍需扩展。
3. Fleiss κ 中等，尤其讽刺、温暖等需要语境的类别可能存在主观性。
4. 基准规模适合研究原型，但距离生产级长对话和开放集识别还有差距。

---

[← 返回 2026-08-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-19/)
