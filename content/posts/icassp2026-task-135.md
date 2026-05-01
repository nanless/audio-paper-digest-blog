---
title: "ICASSP 2026 - 音频质量评估 论文列表"
date: 2026-04-29
draft: false
tags: ["音频质量评估"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频质量评估 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频质量评估

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Deepaq: A Perceptual Audio Quality Metric Based on Foundatio](/audio-paper-digest-blog/posts/2026-04-29-deepaq-a-perceptual-audio-quality-metric-based-on) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Deepaq: A Perceptual Audio Quality Metric Based on Foundational Models and Weakly Supervised Learning](/audio-paper-digest-blog/posts/2026-04-29-deepaq-a-perceptual-audio-quality-metric-based-on)

✅ **7.5/10** | 前25% | #音频质量评估 | #弱监督学习 | #度量学习 #音频大模型

👥 **作者与机构**

- 第一作者：Guanxin Jiang (International Audio Laboratories Erlangen†, Germany)
- 通讯作者：Andreas Brendel* (Fraunhofer Institute for Integrated Circuits IIS, Erlangen, Germany)
- 作者列表：Guanxin Jiang (International Audio Laboratories Erlangen†, Germany)、Andreas Brendel* (Fraunhofer Institute for Integrated Circuits IIS, Erlangen, Germany)、Pablo M. Delgado (Fraunhofer Institute for Integrated Circuits IIS, Erlangen, Germany)、Jürgen Herre (International Audio Laboratories Erlangen†, Germany; Fraunhofer Institute for Integrated Circuits IIS, Erlangen, Germany)
（†注：International Audio Laboratories Erlangen是Friedrich-Alexander University Erlangen-Nürnberg (FAU)与Fraunhofer IIS的联合机构）

#

💡 **毒舌点评**

亮点：成功地将大规模音乐基础模型MERT“跨界”应用到质量评估任务，并证明了其在泛化到音源分离等未见过失真上的强大潜力，结果表明确实比ViSQOL、PEAQ等传统指标更接近人类感知。  
短板：整个训练完全依赖非公开的内部音乐数据集，复现难度极高；虽然使用了弱监督标签，但核心标签仍来自ViSQOL，本质上是在“蒸馏”一个已有指标的判断，其能否真正超越“老师”在未见场景的极限存疑。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开的MERT微调权重或DeePAQ模型权重。
- 数据集：训练所用的460小时内部音乐数据集未公开。评估使用的测试集（如ODAQ， IgorC96Multiformat等）多为公开数据集。
- Demo：未提及。
- 复现材料：论文详细描述了模型架构（MERT v1, LoRA配置）、训练数据构成与预处理、损失函数公式、关键超参数（学习率、batch size、权重衰减等）。然而，由于核心训练数据闭源，这些信息的价值大打折扣。
- 引用的开源项目：论文引用了 MERT（预训练模型）、FFmpeg（音频编码）、ViSQOL v3（生成替代标签）、PEAQ（基线指标）、wav2vec 2.0（对比基础模型）等开源项目或工具。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 解决的问题：通用音频（涵盖音乐、语音等）的质量评估缺乏既精确又鲁棒的客观指标，尤其面对编码失真和音源分离失真时，现有方法（如ViSQOL， PEAQ）的表现各有短板。主观评测成本高昂，而基础模型在质量评估任务上的潜力尚未充分挖掘。
2. 方法核心：提出DeePAQ，以预训练音乐基础模型MERT为骨干网络。通过弱监督学习方式，利用ViSQOL计算的MOS分数和编码码率作为替代标签构建排序三元组，采用改进的Rank-n-Contrast (RnC)损失函数对模型进行微调，使其学到的嵌入空间能有效反映音频的失真程度。为适应有限数据，采用了LoRA（低秩适配）技术进行高效微调。推理时，计算测试音频与参考音频嵌入的欧氏距离，并通过三次多项式映射得到预测分数。
3. 与已有方法的新颖之处：首次将弱监督学习（替代标签）、度量学习（RnC损失） 和LoRA微调这三者相结合，并应用于基于音乐基础模型的通用音频质量评估。相比依赖手工特征或专用神经网络的传统指标（PEAQ等），以及简单微调基础模型的方法，该组合在数据稀缺下更有效、更稳定。
4. 主要实验结果：在涵盖音频编码和音源分离的9个独立听测集上进行评估。所提的全参考模型在整体相关性上达到最优，PCC为0.924，SRCC为0.889，优于最强基线2f-model（0.924/0.889附近）和ViSQOL等。尤其在处理训练中未见的音源分离失真时，表现显著优于其他指标。具体结果见下表（关键数据节选）：

| 测试集 | 指标 | ViSQOL v3 | 2f-model | HAAQI | 提出的全参考模型 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| IgorC96Multiformat | PCC | 0.939 | 0.931 | 0.899 | 0.954 |
| | SRCC | 0.863 | 0.872 | 0.807 | 0.848 |
| ODAQ-Overall | PCC | 0.701 | 0.863 | 0.572 | 0.916 |
| | SRCC | 0.763 | 0.814 | 0.548 | 0.868 |
| Source Separation Overall | PCC | 0.646 | 0.953 | 0.883 | 0.919 |
| | SRCC | 0.808 | 0.881 | 0.656 | 0.787 |
| Overall (所有测试) | PCC | - | - | - | 0.924 |
| | SRCC | - | - | - | 0.889 |

(注：表格整理自论文Table 1，数值已乘以1000还原。)

5. 实际意义：提供了一种更接近人类感知、且泛化能力更强的音频质量自动评估工具，有望提升音频编解码器、音源分离算法等的开发与优化效率。
6. 主要局限性：模型训练完全依赖非公开的内部数据集，外部研究者无法复现。对音源分离任务的评估显示，其相关性虽高但SRCC有所下降，且完全依赖一个“干净”的参考信号，实际应用中可能受限。

#

---

