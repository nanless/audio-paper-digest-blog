---
title: "AVEX: What Matters for Animal Vocalization Encoding"
date: 2026-05-03
draft: false
tags: [生物声学, 预训练, 自监督学习, 数据集]
categories: [iclr-2026]
description: "生物声学 | 8.5/10"
hiddenInHomeList: true
---

# 📄 AVEX: What Matters for Animal Vocalization Encoding

#生物声学 #预训练 #自监督学习 #数据集

🔥 **8.5/10** | 前25% | #生物声学 | #预训练 | #自监督学习 #数据集

学术质量 8.5/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Marius Miron (Earth Species Project)、David Robinson (Earth Species Project) （论文标注同等贡献）
- 通讯作者：Marius Miron、David Robinson （论文标注同等贡献）
- 作者列表：Marius Miron (Earth Species Project), David Robinson (Earth Species Project), Milad Alizadeh (Earth Species Project), Ellen Gilsenan-McMahon (Earth Species Project), Gagan Narula (Earth Species Project), Emmanuel Chemla (Earth Species Project), Maddie Cusimano (Earth Species Project), Felix Effenberger (Earth Species Project), Masato Hagiwara (Earth Species Project), Benjamin Hoffman (Earth Species Project), Sara Keen (Earth Species Project), Diane Kim (Earth Species Project), Jane K. Lawton (Earth Species Project), Jen-Yu Liu (Earth Species Project), Aza Raskin (Earth Species Project), Olivier Pietquin (Earth Species Project), Matthieu Geist (Earth Species Project)

### 💡 毒舌点评

亮点：这是一项规模巨大、设计周密的系统性实证研究，首次将数据多样性、模型架构、训练范式（SSL+SL）和广泛的下游任务评估（包括新提出的个体识别和发声库发现任务）整合到一个统一的框架中进行比较，得出了具有明确指导意义的“训练配方”。
短板：研究聚焦于一个相对垂直的领域（生物声学），且为了公平对比将采样率统一为16kHz，可能损失了高频信息（论文已承认此局限），这在一定程度上限制了其结论对部分物种研究的普遍适用性。

### 🔗 开源详情

-   代码：论文提供了代码仓库链接 `https://github.com/earthspecies/avex`，称为AVEX库，包含模型加载、推理、训练和评估系统。
-   模型权重：明确提到将释放模型检查点（checkpoints）。
-   数据集：论文中整合的训练数据（Xeno-canto, iNaturalist等）均为公开数据集，但需注意部分（如Watkins）可能需特定许可。评估数据集大部分为公开基准（BEANS, BirdSet）或已公开数据。
-   Demo：论文中未提及在线演示。
-   复现材料：提供了详细的超参数表（表5）、评估指标的数学定义（附录B）、数据来源说明（附录B.4）和软件实现细节（附录B.5），复现支持充分。
-   论文中引用的开源项目：BEATs, EAT, EfficientNetB0 (torchvision), BirdNet, Perch的TensorFlow实现等。

### 📌 核心摘要

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

### 🏗️ 模型架构

论文的核心是研究不同编码器架构在特定训练配方下的性能，并非提出一个全新的端到端模型。因此，架构描述围绕所比较的骨干网络展开：

-   整体流程：模型（编码器）将音频波形（或频谱图）作为输入，输出一个高维向量表示（embedding）。在评估阶段，这个冻结的embedding被用于线性探测、检索或聚类等下游任务。
-   主要骨干架构：
    1.  EfficientNet-B0 (CNN)：一个高效的卷积神经网络。论文中作为监督学习的基线，通常从ImageNet预训练权重开始，在生物声学数据上进行监督微调（SL）。
    2.  BEATs (Transformer)：一个先进的自监督语音/音频Transformer。论文将其在通用音频（AudioSet）上的预训练权重作为起点，然后在生物声学数据上进行监督微调（SL）。
    3.  EAT (Transformer)：一个高效的自监督音频Transformer。论文中探索了三种训练路径：a) 仅用生物声学数据SSL预训练；b) 用混合数据SSL预训练；c) 在SSL预训练的基础上进行监督微调（SL）。
-   数据流与关键设计：输入音频首先被转换为梅尔频谱图（16kHz，论文中提及）。对于SSL模型（如EAT, BEATs的预训练阶段），训练目标是重建被掩码的频谱图部分或进行对比学习。对于监督模型或微调阶段，训练目标是预测物种等标签。评估时，从模型最后一层提取时间平均后的embedding。
![论文中的图片](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/MFuM9KAEYc-7.png)
图：论文中的研究框架图，概括了评估的四个维度：模型、训练数据、训练范式和扩展的评估方法。

### 💡 核心创新点

1.  大规模、系统性的实证研究：首次在统一控制变量（如采样率、评估协议）的条件下，系统比较了数据（生物声学 vs. 通用音频）、架构（CNN vs. Transformer）、训练范式（SL vs. SSL vs. 两阶段）的组合效果，为社区提供了清晰的指南。
2.  确立“SSL预训练 + SL微调”两阶段配方：通过实验证明，这种类似LLM训练的范式，在生物声学领域同样强大，能同时获得SSL的良好泛化能力和SL的强判别能力，在分布内外任务上均取得最佳平衡。
3.  强调数据多样性与混合训练的价值：证明在预训练和微调阶段，混合使用生物声学数据与通用音频数据（AudioSet）能显著提升模型的泛化能力和下游性能，优于仅使用单一类型数据。
4.  扩展生物声学评估基准：主动纳入并整理了多个公开数据集，新增了个体识别和发声库发现两类重要但研究不足的任务，并引入了检索（R-AUC）和聚类（NMI）指标来更直接地评估表征质量。

### 🔬 细节详述

-   训练数据：
    -   生物声学数据：整合了Xeno-canto (10416小时，鸟类), iNaturalist (1539小时，多样物种), Watkins Marine Mammal DB (27小时，海洋哺乳动物), Animal Sound Archive (78小时)等，并使用GBIF进行物种名统一。
    -   通用音频数据：AudioSet (5700小时)。
    -   噪声增强数据：ShipsEar, Deepship, FSD50K, UrbanSound等多个环境噪声数据集。
    -   数据增强：训练时以50%概率添加随机噪声（SNR在-10dB到20dB间均匀采样）。微调时，以50%概率对batch内的音频对进行线性混合（Mixup），标签取并集。
-   损失函数：监督阶段使用二元交叉熵损失（多标签分类）。SSL阶段遵循相应模型的原始目标（如EAT的掩码重建与蒸馏）。
-   训练策略：
    -   优化器：AdamW。
    -   学习率与调度：使用余弦退火调度。具体超参数见论文表5。例如，`sl-BEATs-all`的第一阶段学习率`1e-4`，第二阶段`8e-5`，批量大小256。
    -   两阶段训练：对于`sl-`前缀的模型，第一阶段冻结骨干网络训练分类头，第二阶段解冻整个网络微调。
-   关键超参数：所有模型均在16kHz采样率下训练和评估。EfficientNet-B0为基础CNN；BEATs和EAT为Transformer架构。
-   训练硬件：论文未说明具体的GPU/TPU型号、数量和训练时长。
-   评估细节：
    -   线性探测：学习率`1e-4`，权重衰减`0.1`，批量大小32，训练900轮。
    -   检索：计算测试集内所有样本对的余弦相似度，按相似度排序后计算ROC AUC。
    -   聚类：在已知类别数K上进行K-means，计算NMI。
    -   新任务定义：个体ID为单标签分类；发声库发现为已知K值的聚类与检索任务。

### 📊 实验结果

主要结果汇总于论文表3。以下为关键数据对比表：

表3：关键模型在主要基准上的聚合结果（最佳值加粗）
| 模型 | BEANS 分类 (探测) | BEANS 分类 (检索 R-AUC) | BEANS 检测 (探测) | BEANS 检测 (检索 R-AUC) | BirdSet (探测) | 个体 ID (探测) | 发声库发现 (R-AUC) | 发声库发现 (NMI) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| BEATs (pretrained) (SSL) | 0.774 | 0.734 | 0.542 | 0.381 | 0.722 | 0.686 | 0.637 | 0.775 |
| sl-BEATs-all (本文) | 0.832 | 0.813 | 0.604 | 0.408 | 0.726 | 0.732 | 0.690 | 0.798 |
| BirdNet (SL) | 0.796 | 0.772 | 0.523 | 0.392 | N/A | 0.472 | 0.708 | 0.795 |
| Perch (SL) | 0.768 | 0.759 | 0.478 | 0.368 | 0.674 | 0.656 | 0.705 | 0.758 |
| EffNetB0-all (SL) | 0.800 | 0.809 | 0.584 | 0.362 | 0.712 | 0.707 | 0.701 | 0.830 |
| NatureBEATs (SL-SSL) | 0.804 | 0.774 | 0.560 | 0.385 | 0.724 | 0.723 | 0.645 | 0.811 |

![论文中的图片](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/MFuM9KAEYc-1.png)
图2 (论文原文)：(a) 在SSL预训练中加入AudioSet的获胜率分析，显示平均相对提升。(b) 不同范式模型在分布内(BEANS分类)和分布外(BEANS检测)任务上的性能比较，清晰展示SSL的强泛化能力和“SSL预训练+SL微调”配方的优越性。
-   关键结论：
    1.  两阶段训练(SL-SSL)效果最佳：`sl-BEATs-all`在多个指标上达到SOTA，尤其在检索和新任务上优势明显。
    2.  SSL预训练利于泛化：纯SSL模型（如BEATs预训练）在BEANS检测（声音场景，分布外）上的检索性能下降幅度远小于监督模型。
    3.  数据混合至关重要：`EffNetB0-all`（混合数据SL）显著优于`EffNetB0-bio`（纯生物数据SL）；`sl-BEATs-all`也优于`sl-BEATs-bio`。
    4.  新任务上的表现：在个体ID和发声库发现任务上，最佳模型（`EffNetB0-all`和`sl-BEATs-all`）展现出强大能力，证明大规模预训练表征可迁移至这些复杂任务。

![论文中的图片](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/MFuM9KAEYc-2.png)
图3：后训练（SL微调）相比原始SSL骨干模型的获胜率，显示了一致的提升。

### ⚖️ 评分理由

-   学术质量：6.5/7：这是一篇非常扎实的实证研究论文。其价值在于系统性和规模，而非某个点的突破性创新。研究设计严谨（控制变量、多基准评估），实验全面（涵盖多种架构、数据、范式），结论可信（有大量数据支撑）且实用。创新性在于首次大规模揭示了生物声学表征学习的关键因素（特别是数据混合与两阶段训练）。
-   选题价值：1.5/2：生物声学是生态学、保护生物学和动物行为学的重要工具，属于前沿交叉领域。开发一个通用、强大的编码器能极大促进该领域从数据驱动的发现。虽然受众相对专门，但对音频/语音领域的研究者（特别是关注预训练、迁移学习、音频表征）有直接的参考价值。
-   开源与复现加成：+1.0/1：论文明确表示将开源模型检查点（AVEX）、提供API库、并公开了训练和评估代码。附录详细列出了超参数、评估指标公式、数据集划分等，可复现性极高。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
