---
title: "Closing the Affective Loop: Multimodal Speaker-Listener Emotion-Dynamics-Aware Empathetic Social Robots"
date: 2026-08-19
draft: false
tags: [语音交互, 语音情感识别, 多模态模型, 音视频交互, 教育]
categories: [论文速递]
description: "语音交互 | 6.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.16686"
---

# 📄 Closing the Affective Loop: Multimodal Speaker-Listener Emotion-Dynamics-Aware Empathetic Social Robots

标签：#语音交互 #语音情感识别 #多模态模型 #音视频交互 #教育

**6.5/10** | 创新 1.4/2 | 严谨 1/1.5 | 实验 0.8/1.5 | 清晰 0.9/1 | 影响 1.1/1.5 | 开源 0/1.5 | 复现 0.2/0.5 | 工程 1.1/1.5

✅ **6.5/10** | 前50% | 文档类型：应用研究 | 评分置信度：高 | #语音交互 | #多模态模型 | #语音情感识别 #音视频交互 | [arxiv](https://arxiv.org/abs/2608.16686v1)


### 👥 作者与机构

- 第一作者：Pang？论文作者包括 Casey Kennington、Tatsuya Kawahara（京都大学/Boise State University）。
- 通讯邮箱标注为 pang 与 kawahara 团队。

### 💡 毒舌点评

AffectLoop 的亮点是承认机器人也有“listener state”，而不是把用户情绪塞进一次性 prompt；5.10 对 4.75 的总体印象提升也很诱人。但五名参与者的 pilot 更像可行性信号，不是疗效结论，尤其情绪识别误差、LLM 延迟和 Misty 的行为表达是否稳定，远未被这项研究解决。

### 📌 核心摘要

AffectLoop 是部署在 Misty II 上的多模态具身对话系统，目标是让机器人根据 speaker 的语音和面部情绪动态，以及自身 listener 的语言和行为情绪状态，生成短的同理语音与身体行为，从而形成 speaker–listener affective loop。系统在 Retico 中实现增量对话，使用 ASR、语音情绪、面部情绪和机器人动作/语音状态作为条件。五名参与者进行随机顺序的 within-subject pilot，与只使用 utterance 的文本基线比较；总体印象从 4.75 提升到 5.10，同理回应从 4.80 提升到 5.35，日志还显示更高情绪对齐和 distress recovery。

### 🔗 开源详情

论文未明确给出本系统的代码、模型权重或数据集仓库。
公开组件：Misty II 平台、Retico 等可获得，但 AffectLoop 的 prompt、情绪模型和实验日志未完整发布。

### 🏗️ 方法概述和架构

系统输入两类 speaker 证据：ASR 文本及其情绪轨迹、摄像头捕获的面部行为。增量框架在语音片段到达时更新状态，避免等待整轮对话结束。文本情绪模块估计类别、valence 和 arousal；视觉模块从短时间窗聚合面部 affect；两者共同形成 speaker state。 listener state 一侧记录机器人上一轮生成语音的情绪以及已执行的非语言行为。LLM prompt 同时接收 speaker 和 listener 的状态、对话历史及行为约束，输出短的同理响应和情绪一致的 Misty 动作。TTS 负责语音，机器人 API 执行表情、姿态或灯光等行为，Retico 连接增量 ASR、情绪推断、LLM 和动作执行。 实验采用同一机器人、同一对话任务和两种条件，随机化先后顺序以减轻顺序效应。评分覆盖自然性、理解、同理倾听、同理回应、用户满意度和压力缓解；交互日志再计算 speaker–listener affective alignment 与 valence-based distress recovery。

全文方法与训练段落给出的可复现设置如下：

第 1 个证据块：论文明确写到“Figure 2: Complete prompt template for the proposed speaker–listener alignment empathetic response generation framework.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 2 个证据块：论文明确写到“Early benchmarks such as EmpatheticDialogues have shown that emotion-based training improves perceived empathy [18], while later models further incorporate emotion mimicry, psychotherapy–based, and emotion flow modeling [8, 15].”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 3 个证据块：论文明确写到“However, most existing approaches remain text-centered and primarily model empathy as a one-way mapping from the speaker’s emotion to the system’s response [16].”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 4 个证据块：论文明确写到“Recent work has explored using large language models (LLMs) to generate affective robot behaviors, including speech style, gestures, facial expressions, and emotional displays [6, 11].”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 5 个证据块：论文明确写到“2 Related Work Figure 1: Proposed AffectLoop system architecture in this study 2.1 Emotional Dynamics and Speaker–Listener Alignment in Dialogue Systems Many dialogue models treat emotion as a static label attached to an utterance or dialogue turn.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

![Figure 1: Proposed AffectLoop system architecture in this study](https://arxiv.org/html/2608.16686v1/system.png)

![Figure 3: Photo of interaction with Misty II by the participant](https://arxiv.org/html/2608.16686v1/interaction.JPG)

### 💡 核心创新点

1. 让机器人自身情绪/行为状态进入下一轮回应条件，形成双向闭环。
2. 同时使用语音和面部动态，而不是仅识别静态情绪标签。
3. 将 LLM 语言生成、TTS、非语言行为和实时机器人执行连成增量 pipeline。

### 📊 实验结果

五人 within-subject 研究中，提议系统总体平均印象 5.10，高于基线 4.75；同理倾听平均 5.40 对 5.20，同理回应 5.35 对 4.80，用户满意度 4.68 对 4.20。Q12“鼓励我”从 5.40 提升到 6.20，Q13“做得好时表扬”从 4.40 提升到 5.40。日志分析还报告更高 speaker–listener 对齐和更强 distress recovery，作为初步机制证据。

下面把全文实验段落中的设置、数字和比较关系逐项列出；指标方向沿用论文定义。

全文实验证据 1：Figure 2: Complete prompt template for the proposed speaker–listener alignment empathetic response generation framework.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 2：Figure 3: Photo of interaction with Misty II by the participant 4 Experimental Setup 4.1 Study Design We conducted a pilot within-subject user study to evaluate the proposed speaker–listener emotion-dynamics-aware system.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 3：Table 1: Impression Ratings Items Item Description Baseline Proposed Naturalness Q1 The robot’s responses were human-like.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 4：5 Results and Discussion Table 1 shows that the proposed system received higher overall impression ratings than the baseline, increasing from 4.75 to 5.10.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Figure 2: Complete prompt template for the proposed speaker–listener alignment empathetic response generation framework. |
| 主要结果 | Figure 3: Photo of interaction with Misty II by the participant 4 Experimental Setup 4.1 Study Design We conducted a pilot within-subject user study to evaluate the proposed speaker–listener emotion-dynamics-aware system. |
| 对照、消融或部署指标 | Table 1: Impression Ratings Items Item Description Baseline Proposed Naturalness Q1 The robot’s responses were human-like. |

![Figure 3: Photo of interaction with Misty II by the participant - 图2](https://arxiv.org/html/2608.16686v1/interaction.JPG)

### 🔬 细节详述

平台为 Misty II 与 Retico。输入包括语音、ASR、面部帧和对话历史；listener 侧根据机器人生成语音的 valence/arousal 与行为估计状态。LLM 输出语音文本和行为指令，再通过 TTS 与机器人控制接口执行。Q5 自主性感知、Q20 互动焦虑不计入主要平均分；研究采用随机条件顺序和同一参与者比较。

全文中还能定位到以下数据、训练或实现细节。它们补充了方法段没有展开的采样、数据规模、优化和部署边界：

- 细节证据 1：Figure 2: Complete prompt template for the proposed speaker–listener alignment empathetic response generation framework.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 2：Early benchmarks such as EmpatheticDialogues have shown that emotion-based training improves perceived empathy [18], while later models further incorporate emotion mimicry, psychotherapy–based, and emotion flow modeling [8, 15].。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 3：However, most existing approaches remain text-centered and primarily model empathy as a one-way mapping from the speaker’s emotion to the system’s response [16].。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 4：Recent work has explored using large language models (LLMs) to generate affective robot behaviors, including speech style, gestures, facial expressions, and emotional displays [6, 11].。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 5：2 Related Work Figure 1: Proposed AffectLoop system architecture in this study 2.1 Emotional Dynamics and Speaker–Listener Alignment in Dialogue Systems Many dialogue models treat emotion as a static label attached to an utterance or dialogue turn.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

### ⚖️ 评分理由

创新性: 1.4/2 同时建模 speaker 的语音/面部情绪和 robot listener 的语言/行为情绪，形成闭环而非单向响应。
技术严谨性: 1.0/1.5 系统模块和 within-subject 对照清楚，但参与者仅 5 人，统计证据初步。
实验充分性: 0.8/1.5 印象评分与交互日志提供多角度证据，但规模小且尚无长期使用。
清晰度: 0.9/1 Retico、Misty II、 affect state 和 prompt 条件关系清晰。
影响力: 1.1/1.5 对具身语音助手和情绪支持机器人有直接启发。
开源: 0.0/1.5 未见本工作代码或模型公开链接。
可复现性: 0.2/0.5 系统组件和评分项目披露较好，内部情绪估计器和 prompt 细节不完整。
工程/实践价值: 1.1/1.5 可在 Misty II 上实时闭环，体现了从感知到行为执行的工程整合。

### 🚨 局限与问题

1. 参与者只有 5 人，统计功效、群体差异和长期效果都不足。
2. 情绪识别与 listener-state 估计的误差没有单独消融，提升可能来自整体系统差异。
3. Misty II 的动作表达、语音延迟和摄像头环境限制了外部效度。
4. 同理行为涉及隐私与心理安全，尚需真实临床或高风险场景评估。

---

[← 返回 2026-08-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-19/)
