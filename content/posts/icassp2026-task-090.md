---
title: "ICASSP 2026 - 说话人检测 论文列表"
date: 2026-04-29
draft: false
tags: ["说话人检测"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 说话人检测 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 说话人检测

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Audio-Guided Multimodal Approach for Fine-Grained Alignment ](/audio-paper-digest-blog/posts/2026-04-29-audio-guided-multimodal-approach-for-fine-grained) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Audio-Guided Multimodal Approach for Fine-Grained Alignment and Boundary Modeling in Active Speaker Detection](/audio-paper-digest-blog/posts/2026-04-29-audio-guided-multimodal-approach-for-fine-grained)

✅ **7.5/10** | 前25% | #说话人检测 | #多模态模型 | #对比学习 #预训练

👥 **作者与机构**

- 第一作者：Yongkang Yin（北京大学深圳研究生院，广东省超高沉浸感媒体技术重点实验室；ADSPLAB，北京大学电子与计算机工程学院）
- 通讯作者：Yuexian Zou（北京大学深圳研究生院，广东省超高沉浸感媒体技术重点实验室；ADSPLAB，北京大学电子与计算机工程学院）
- 作者列表：Yongkang Yin（同上），Yukun Zhuang（同上），Zeyu Xie（同上；腾讯AI Lab），Chenxing Li（腾讯AI Lab），Le Xu（腾讯AI Lab），Yuexian Zou（同上）

#

💡 **毒舌点评**

亮点在于巧妙地利用预训练的语音活动检测（VAD）和说话人编码器提供的外部监督信号，来构建更精细的边界标签并引导视觉特征对齐，这为解决ASD数据集标注粗糙问题提供了可行的思路。短板是创新点较为分散，边界建模网络（滑动窗口+差分）的设计略显拼凑，且整体框架的“音频引导”更多体现在引入预训练特征，而非在融合架构上有根本性革新。

#

📌 **核心摘要**

本文针对主动说话人检测（ASD）任务中现有方法存在的音频-视觉语义对齐不精细、缺乏对语音和说话人转换边界显式建模的问题，提出了一种音频引导的多模态方法。该方法首先利用预训练的VAD和说话人模型为AVA数据集生成更精确的语音活动标签，解决了原有视觉标签不准确的问题；其次，通过监督对比学习策略，实现视觉特征与预训练语音活动特征之间的帧级语义对齐；最后，设计了一个边界建模网络，融合语音、说话人和视觉特征，并采用滑动窗口和帧差分策略捕捉语音起止和说话人转换的动态变化。在AVA-Active Speaker数据集上，该方法在单参与者建模方法中取得了最优的mAP（94.9%），显著提升了在语义边界处的预测准确率（边界帧准确率提升至80.6%），并在Columbia ASD数据集上展现了良好的泛化能力（平均F1-Score达82.0%）。该工作的实际意义在于提升了ASD系统在复杂多说话人场景下的准确性和鲁棒性。主要局限性在于模型创新点相对分散，且依赖多个外部预训练模型。

#

---

