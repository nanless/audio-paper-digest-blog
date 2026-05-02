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
| 🥇 | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding)

🔥 **8.5/10** | 前25% | #生物声学 | #预训练 | #自监督学习 #数据集

👥 **作者与机构**

- 第一作者：Marius Miron (Earth Species Project)、David Robinson (Earth Species Project) （论文标注同等贡献）
- 通讯作者：Marius Miron、David Robinson （论文标注同等贡献）
- 作者列表：Marius Miron (Earth Species Project), David Robinson (Earth Species Project), Milad Alizadeh (Earth Species Project), Ellen Gilsenan-McMahon (Earth Species Project), Gagan Narula (Earth Species Project), Emmanuel Chemla (Earth Species Project), Maddie Cusimano (Earth Species Project), Felix Effenberger (Earth Species Project), Masato Hagiwara (Earth Species Project), Benjamin Hoffman (Earth Species Project), Sara Keen (Earth Species Project), Diane Kim (Earth Species Project), Jane K. Lawton (Earth Species Project), Jen-Yu Liu (Earth Species Project), Aza Raskin (Earth Species Project), Olivier Pietquin (Earth Species Project), Matthieu Geist (Earth Species Project)

💡 **毒舌点评**

亮点：这是一项规模巨大、设计周密的系统性实证研究，首次将数据多样性、模型架构、训练范式（SSL+SL）和广泛的下游任务评估（包括新提出的个体识别和发声库发现任务）整合到一个统一的框架中进行比较，得出了具有明确指导意义的“训练配方”。
短板：研究聚焦于一个相对垂直的领域（生物声学），且为了公平对比将采样率统一为16kHz，可能损失了高频信息（论文已承认此局限），这在一定程度上限制了其结论对部分物种研究的普遍适用性。

🔗 **开源详情**

-   代码：论文提供了代码仓库链接 `https://github.com/earthspecies/avex`，称为AVEX库，包含模型加载、推理、训练和评估系统。
-   模型权重：明确提到将释放模型检查点（checkpoints）。
-   数据集：论文中整合的训练数据（Xeno-canto, iNaturalist等）均为公开数据集，但需注意部分（如Watkins）可能需特定许可。评估数据集大部分为公开基准（BEANS, BirdSet）或已公开数据。
-   Demo：论文中未提及在线演示。
-   复现材料：提供了详细的超参数表（表5）、评估指标的数学定义（附录B）、数据来源说明（附录B.4）和软件实现细节（附录B.5），复现支持充分。
-   论文中引用的开源项目：BEATs, EAT, EfficientNetB0 (torchvision), BirdNet, Perch的TensorFlow实现等。

📌 **核心摘要**

1.  要解决的问题：生物声学领域缺乏一个通用、可迁移的编码器。现有模型通常局限于特定物种（如鸟类）、单一架构或训练范式，且评估任务单一，难以应对真实世界中需要识别新物种、个体或发现发声库的泛化需求。
2.  方法核心：提出AVEX（Animal Vocalization Encoder），通过大规模实证研究，系统性地比较不同模型架构（EfficientNet, BEATs, EAT）、训练数据组合（生物声学数据、通用音频AudioSet）、训练范式（纯监督、纯自监督、先SSL预训练再SL微调）的效果。
3.  与已有方法相比新在哪里：a) 系统性研究：首次在统一框架下对比CNN与Transformer、监督与自监督等多种组合；b) 数据多样性：强调并验证了混合生物声学与通用音频数据在预训练和微调阶段的重要性；c) 训练范式创新：提出并验证了“SSL预训练 + SL微调”的两阶段训练配方在分布内和分布外任务上的优越性；d) 评估拓展：扩展了评估基准，加入了个体识别和发声库发现等新任务，并引入了检索和聚类指标。
4.  主要实验结果：在涵盖物种分类、检测、个体ID和发声库发现的26个数据集上评估，最终模型“sl-BEATs-all”（在混合数据上SSL预训练后SL微调）取得了整体最优性能。例如，在BEANS分类探测准确率达0.832，在BEANS检测探测mAP达0.604，在个体ID探测准确率达0.732，在发声库发现检索AUC达0.798。具体关键结果见下表：
    | 模型 | BEANS 分类 (探测) | BEANS 分类 (检索 R-AUC) | BEANS 检测 (探测) | BEANS 检测 (检索 R-AUC) | BirdSet (探测) | 个体 ID (探测) | 发声库发现 (R-AUC) |
    | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
    | sl-BEATS-all (本文最佳) | 0.832 | 0.813 | 0.604 | 0.408 | 0.726 | 0.732 | 0.798 |
    | Perch (SOTA基线) | 0.768 | 0.759 | 0.478 | 0.368 | 0.674 | 0.656 | 0.705 |
    | BirdNet (SOTA基线) | 0.796 | 0.772 | 0.523 | 0.392 | N/A | 0.472 | 0.795 |
5.  实际意义：为生物声学研究和保护应用提供了一个性能更强的通用编码器（AVEX）和一个更全面的评估基准。明确的训练配方（数据混合、两阶段训练）为未来开发更强大的生物声学模型提供了可复用的路线图。
6.  主要局限性：a) 所有模型在16kHz下训练，可能无法充分利用高于8kHz的声学信息；b) 评估任务虽然扩展，但仍未完全覆盖生物声学所有潜在应用；c) 模型的计算开销和部署便捷性未深入讨论。

---

