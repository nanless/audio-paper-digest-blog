---
title: "ICASSP 2026 - 语音表示学习 论文列表"
date: 2026-04-29
draft: false
tags: ["语音表示学习"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 语音表示学习 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音表示学习

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Phonological Tokenizer: Prosody-Aware Phonetic Token Via Mul](/audio-paper-digest-blog/posts/2026-04-29-phonological-tokenizer-prosody-aware-phonetic) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Phonological Tokenizer: Prosody-Aware Phonetic Token Via Multi-Objective Fine-Tuning with Differentiable K-Means](/audio-paper-digest-blog/posts/2026-04-29-phonological-tokenizer-prosody-aware-phonetic)

🔥 **8.0/10** | 前25% | #语音表示学习 | #离散token | #多任务学习 #自监督学习

👥 **作者与机构**

- 第一作者：Kentaro Onda（东京大学， 索尼集团）
- 通讯作者：未说明
- 作者列表：Kentaro Onda（东京大学， 索尼集团）、Hayato Futami（索尼集团）、Yosuke Kashiwagi（索尼集团）、Emiru Tsunoo（索尼集团）、Shinji Watanabe（卡内基梅隆大学）

💡 **毒舌点评**

这篇论文的亮点在于其巧妙地利用多目标优化和可微分k-means，在理论上“纯净”的语音学token和“丰富”的声学token之间找到了一个实用且性能优异的平衡点，尤其在情感识别和语音转换等韵律敏感任务上取得了显著提升。然而，其短板在于对“不同iable k-means”这一核心工具的离散化本质在端到端训练中可能带来的优化挑战（如梯度估计方差）探讨不足，且虽然声码器使用了预训练说话人编码器进行条件化以“剥离”说话人信息，但这种剥离是否彻底以及对下游任务的潜在影响分析不够深入。

📌 **核心摘要**

1.  要解决的问题：现有的离散语音token（声学token和语音学token）要么保留过多冗余声学信息（如说话人身份），要么过度抽象丢失关键的韵律信息，都不适合作为语音语言模型（speechLMs）的理想输入。
2.  方法核心：提出“音韵Tokenizer”，通过多目标微调预训练的语音学token。核心是使用可微分k-means，联合优化ASR损失（鼓励语言信息）和语音重建损失（鼓励声学细节），并在重建时通过外部说话人编码器提供说话人嵌入以辅助信息解耦。
3.  与已有方法相比新在哪里：相较于多码本的混合token（如SpeechTokenizer），本方法实现单码本高效率；相较于仅用ASR优化的语音学token，本方法引入了重建目标以保留韵律；相较于声学token，本方法能有效去除说话人信息。其创新在于利用可微分k-means的灵活性，在单一框架内实现了token属性的精细平衡。
4.  主要实验结果：
    *   在判别任务上，其情感识别（ER）准确率（51.7%）远超所有基线；语音识别（WER 4.6/8.5）接近最强语音学基线；说话人识别（SID）准确率（29.5%）与语音学基线相当，表明成功保留了韵律、语言信息并抑制了说话人信息。
    *   在生成任务上，在域外（TIMIT）语音转换中，其源语音F0相关性（0.456）和自然度（UTMOS 3.88）均优于基线，且保持了较低的目标说话人相似度（SpkSim 0.762），体现了内容/韵律保持与说话人解耦的平衡。
    *   在speechLM任务中，其生成语音的自然度（UTMOS 3.86）和生成困惑度（GenPPL 5.60）均为最佳。

| 模型 | ASR WER (↓) | ER Acc. (↑) | SID Acc. (↑) | TIMIT VC F0 corr. (↑) | TIMIT VC UTMOS (↑) | SpeechLM GenPPL (↓) | SpeechLM UTMOS (↑) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Discrete WavLM (phonetic) | 4.3/ 7.1 | 41.7 | 27.7 | 0.371 | 3.63 | 5.81 | 3.60 |
| SpeechTokenizer (hybrid) | 9.3/23.5 | 39.2 | 29.1 | 0.383 | 3.53 | 5.73 | 3.64 |
| WavTokenizer (acoustic) | 96.7/96.8 | 24.2 | 82.7 | 0.356 | 2.02 | 6.34 | 2.57 |
| Proposed (α=0.1) | 4.6/ 8.5 | 51.7 | 29.5 | 0.456 | 3.88 | 5.60 | 3.86 |

5.  实际意义：为构建更接近人类语音处理机制（兼顾内容与韵律、抽象不必要细节）的speechLM提供了高效的离散表示基础，且单码本设计简化了下游模型架构。
6.  主要局限性：论文未与最新的、强大的声学token（如基于RVQ的codec）在重建保真度上进行全面对比（仅与WavTokenizer对比），其“保留韵律”和“去除说话人”的边界和泛化能力在更多样化数据上仍需验证；训练过程涉及多个复杂模块（SSL， ASR， Vocoder）的联合优化，工程实现和调参可能具有一定挑战。

---

