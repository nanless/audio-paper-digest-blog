---
title: "ICLR 2026 - 生物声学 论文列表"
date: 2026-05-03
draft: false
tags: ["生物声学"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 生物声学 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 生物声学

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding) | 9.0分 | 前10% |

---

## 📋 论文详情

### 🥇 [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding)

🔥 **9.0/10** | 前10% | #生物声学 | #自监督学习

👥 **作者与机构**

- 第一作者：Marius Miron (Earth Species Project)、David Robinson (Earth Species Project)（共同第一作者）
- 通讯作者：Marius Miron (marius@earthspecies.org)、David Robinson (david@earthspecies.org)（共同通讯作者）
- 作者列表：Marius Miron (Earth Species Project)， David Robinson (Earth Species Project)， Milad Alizadeh (Earth Species Project)， Ellen Gilsenan-McMahon (Earth Species Project)， Gagan Narula (Earth Species Project)， Emmanuel Chemla (Earth Species Project)， Maddie Cusimano (Earth Species Project)， Felix Effenberger (Earth Species Project)， Masato Hagiwara (Earth Species Project)， Benjamin Hoffman (Earth Species Project)， Sara Keen (Earth Species Project)， Diane Kim (Earth Species Project)， Jane K. Lawton (Earth Species Project)， Jen-Yu Liu (Earth Species Project)， Aza Raskin (Earth Species Project)， Olivier Pietquin (Earth Species Project)， Matthieu Geist (Earth Species Project)

💡 **毒舌点评**

亮点： 这是一项堪称“生物声学领域ImageNet Moment”的里程碑式实证研究，其系统性、规模（26个数据集，多种模型和训练方案）和工程实践（发布AVEX工具库）为构建通用动物发声编码器提供了迄今最清晰的“说明书”，结论极具指导性。
短板： 论文的核心是“实证发现”而非“理论突破”，其最强模型性能高度依赖于对现有开源SSL模型（BEATs, EAT）的高效利用和精心设计的训练配方，对于无法复现该流程的团队而言，创新门槛显得略高。

🔗 **开源详情**

*   代码：是。提供代码仓库链接：`https://github.com/earthspecies/avex`。
*   模型权重：是。论文明确表示将发布模型检查点（checkpoints）。
*   数据集：部分公开。论文使用并整合了多个公开数据集（Xeno-Canto, iNaturalist, AudioSet等），但其整合后的“核心生物声学数据集”是否独立公开未说明。新增的评估数据集是公开的。
*   Demo：未提及。
*   复现材料：充分。论文提供了详尽的训练超参数（见表5）、评估指标定义、数据来源说明、以及完整的实验结果表格（附录中）。
*   引用的开源项目：明确使用了BEATs、EAT、EfficientNetB0的开源实现；引用了多个数据集和工具库（如PyTorch, Hugging Face datasets）。

📌 **核心摘要**

1.  解决的问题： 生物声学领域缺乏一个通用、强大且可泛化的动物发声（bioacoustic）音频编码器，现有模型通常局限于特定物种（如鸟类）、单一架构或训练范式，且评估任务和数据集有限。
2.  方法核心： 进行了一次大规模的实证研究，系统性地比较了数据多样性（生物声学数据 vs. 通用音频数据AudioSet）、模型架构（CNN-EfficientNet vs. Transformer-BEATs/EAT）和训练范式（监督学习 vs. 自监督学习 vs. 两阶段训练：SSL预训练+SL微调）。
3.  新在哪里： 首次在统一、受控的框架下，对构建通用生物声学编码器的“配方”进行全面探索。关键发现包括：1) 数据混合至关重要：在生物声学数据中加入通用音频数据，能显著提升模型迁移性；2) 两阶段训练效果最佳：在SSL骨干网络上进行SL微调，能同时获得强大的分布内和分布外性能；3) 评估任务扩展：首次在大规模基准中纳入“个体识别”和“发声库发现”任务，并引入聚类和检索指标。
4.  主要实验结果： 论文提出的“SSL预训练（混合数据）+ SL微调（混合数据）”配方（如sl-BEATS-all模型）在几乎所有评估基准上达到了SOTA。关键结果如下表：

| 基准任务 | 指标 | 最佳模型 (sl-BEATS-all) | 次佳模型 (EffNetB0-all) | 最佳已有基线 (BirdNet/Perch) |
| :--- | :--- | :--- | :--- | :--- |
| BEANS 分类 | Probe Accuracy | 0.832 | 0.800 | 0.796 (BirdNet) |
| | R-AUC (检索) | 0.813 | 0.809 | 0.772 (BirdNet) |
| BEANS 检测 | Probe mAP | 0.604 | 0.584 | 0.523 (BirdNet) |
| | R-AUC (检索) | 0.408 | 0.362 | 0.392 (BirdNet) |
| BirdSet | Probe mAP | 0.726 | 0.712 | 0.674 (Perch) |
| 个体识别 | Probe Accuracy | 0.732 | 0.707 | 0.656 (Perch) |
| 发声库发现 | R-AUC (检索) | 0.529 | 0.582 | 0.545 (BirdNet) |

5.  实际意义： 为生物声学社区提供了一个现成的、高性能的通用编码器（AVEX模型），以及一套可扩展的训练方法，将极大推动物种分类、行为分析、生态监测等下游任务，特别是对于数据稀缺的新物种或任务。
6.  主要局限性： 研究集中在16kHz采样率，可能丢失部分高频信息；对架构创新的贡献有限，更多是验证和优化现有架构；评估中使用的线性探针可能低估了全微调的潜力。

---

