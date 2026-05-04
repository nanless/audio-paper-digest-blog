---
title: "ICLR 2026 - 生物声学 论文列表"
date: 2026-05-04
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
| 🥇 | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-04-avex-what-matters-for-animal-vocalization-encoding) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-04-avex-what-matters-for-animal-vocalization-encoding)

✅ **7.0/10** | 前25% | #生物声学 | #预训练 | #自监督学习 #模型比较

👥 **作者与机构**

- 第一作者：Marius Miron（Earth Species Project），David Robinson（Earth Species Project）（共同贡献）
- 通讯作者：Marius Miron, David Robinson（Earth Species Project）
- 作者列表：Marius Miron（Earth Species Project），David Robinson（Earth Species Project），Milad Alizadeh（Earth Species Project），Ellen Gilsenan-McMahon（Earth Species Project），Gagan Narula（Earth Species Project），Emmanuel Chemla（Earth Species Project），Maddie Cusimano（Earth Species Project），Felix Effenberger（Earth Species Project），Masato Hagiwara（Earth Species Project），Benjamin Hoffman（Earth Species Project），Sara Keen（Earth Species Project），Diane Kim（Earth Species Project），Jane Lawton（Earth Species Project），Jen-Yu Liu（Earth Species Project），Aza Raskin（Earth Species Project），Olivier Pietquin（Earth Species Project），Matthieu Geist（Earth Species Project）。

#

💡 **毒舌点评**

亮点在于实验设计极其严谨和全面，如同为生物声学编码器领域做了一次“高考”，系统性地比较了各种技术路线，得出了可操作的“最优训练配方”。短板在于，其核心贡献是实证结论而非提出一种全新的、具有独创性的模型架构，更像是一个高质量的“工程最佳实践”指南。

#

🔗 **开源详情**

- 代码：提供代码仓库链接 https://projects.earthspecies.org/avex/ ，包含一个名为AVEX的Python库，用于模型加载、推理以及生物声学表征学习模型的训练和评估系统。
- 模型权重：明确提及并发布了多个模型检查点（checkpoint），包括本文训练的`sl-BEATS-bio`， `sl-BEATS-all`， `EffNetB0-all`等（见表2）。
- 数据集：论文使用了多个公开数据集（如Xeno-canto, iNaturalist, AudioSet等），并进行了说明。未提及发布新的整合数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常详尽的复现材料，包括：完整的训练超参数表（表5）、数据集划分与预处理说明、评估指标的具体计算公式（附录B.2）、以及用于生成新基准数据集的公开数据集链接（附录B.4）。
- 论文中引用的开源项目：BEATs (Microsoft)， EAT (开源实现)， EfficientNetB0 (torchvision)， 以及用于处理BirdNet和Perch的TensorFlow-Lite。

📌 **核心摘要**

1.  问题：当前生物声学编码器通常局限于特定物种（如鸟类）、单一模型架构或训练范式，且评估任务和数据集有限，难以满足广泛、泛化的实际应用需求（如物种识别、个体识别、声音库发现等）。
2.  方法核心：本文进行了一项大规模实证研究，系统性地调查并比较了三大方面：（1）模型架构（CNN vs. Transformer）、（2）训练数据混合（生物声学数据 vs. 通用音频数据）、（3）训练范式（自监督学习、监督学习、两阶段训练）。
3.  与已有方法相比新在哪里：首次在如此广泛的维度和规模上，对生物声学编码器的构建要素进行公平、统一的实验比较。特别创新性地引入并评估了“自监督预训练 + 监督后训练”的两阶段范式，并系统验证了在训练中混合通用音频数据对提升模型泛化能力的关键作用。
4.  主要实验结果：
    - 在涵盖物种分类、检测、个体ID、声音库发现等任务的26个数据集上，采用“在混合生物声学+通用音频数据上进行自监督预训练，再用相同混合数据进行监督后训练”的配方，取得了整体最优的性能（见下表关键结果摘录）。
    - 消融研究表明：在自监督预训练阶段加入通用音频（AudioSet）能显著提升模型在各类任务上的表现（如图2a所示）；监督模型在分布内任务表现强，但自监督模型在分布外任务上性能下降更小（如图2b所示）；后训练能有效提升自监督骨干网络的性能（如图3所示）。

    | 模型 | BEANS分类 (Probe) | BEANS检测 (R-AUC) | BirdSet (Probe) | 个体ID (R-AUC) | 声音库 (R-AUC) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | sl-BEATS-all (本文最佳) | 0.832 | 0.604 | 0.726 | 0.511 | 0.798 |
    | BirdNet (SOTA基线) | 0.796 | 0.523 | 0.687 | 0.472 | 0.795 |
    | BEATS (SFT) | 0.724 | 0.504 | 0.692 | 0.375 | 0.755 |
    | EffNetB0-bio | 0.786 | 0.563 | 0.695 | 0.457 | 0.806 |

    （注：以上为表3中关键指标摘录，Probe为分类准确率/mAP，R-AUC为检索ROC AUC，数值越大越好）
5.  实际意义：为生物声学领域提供了一套可复现、高性能的通用编码器训练方案（AVEX）和模型，有助于加速该领域的研究（如动物通讯解码、生物多样性监测）并推动其走向实际应用。开源的代码库和模型也为后续工作提供了坚实基础。
6.  主要局限性：研究结论受限于当前可用的公开数据和模型架构；部分消融实验（如消融鲸鱼或非鸟类数据）显示结果并非完全一致，表明数据多样性的影响可能因任务而异；研究所有模型均在16kHz采样率下评估，可能损失了部分高频信息。

---

