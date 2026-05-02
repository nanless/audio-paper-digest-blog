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
| 🥇 | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding)

✅ **7.5/10** | 前25% | #生物声学 | #预训练 #自监督学习 | #预训练 #自监督学习

👥 **作者与机构**

- 第一作者：Marius Miron（Earth Species Project）
- 通讯作者：Marius Miron（Earth Species Project），David Robinson（Earth Species Project），Olivier Pietquin（Earth Species Project），Matthieu Geist（Earth Species Project）
- 作者列表：Marius Miron（Earth Species Project），David Robinson（Earth Species Project），Milad Alizadeh（Earth Species Project），Ellen Gilsenan-McMahon（Earth Species Project），Gagan Narula（Earth Species Project），Emmanuel Chemla（Earth Species Project），Maddie Cusimano（Earth Species Project），Felix Effenberger（Earth Species Project），Masato Hagiwara（Earth Species Project），Benjamin Hoffman（Earth Species Project），Sara Keen（Earth Species Project），Diane Kim（Earth Species Project），Jane Lawton（Earth Species Project），Jen-Yu Liu（Earth Species Project），Aza Raskin（Earth Species Project），Olivier Pietquin（Earth Species Project），Matthieu Geist（Earth Species Project）

💡 **毒舌点评**

亮点： 论文以罕见的系统性实证研究方法，对生物声学编码器的各个关键组件（数据、模型、训练策略）进行了全面消融，提供了清晰的“训练配方”，并开源了完整的AVEX工具库，对领域发展具有很强的指导性和推动作用。
短板： 核心创新更多在于系统性的实证比较和“最佳实践”的提出，而非提出一种全新的、具有开创性的模型架构或训练范式，技术壁垒相对有限。此外，评估虽然广泛，但部分任务（如声码发现）的指标选择（聚类/检索）可能无法完全反映实际应用中的端到端性能。

🔗 **开源详情**

- 代码：提供完整的代码仓库链接：https://github.com/earthspecies/avex （AVEX工具库）。
- 模型权重：明确提到公开模型检查点（checkpoints），包括本文训练的`sl-BEATs-all`等模型以及作为基线的现有模型。
- 数据集：论文中使用的核心训练数据来自多个公开来源（Xeno-canto, iNaturalist等），但论文本身未重新发布这些数据集。新增的评估数据集（如个体识别、声码发现）来源于已有的公开仓库（论文在B.4节列出了来源）。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了极其充分的复现材料，包括：
    - 所有模型变体的完整训练超参数（见表5）。
    - 评估脚本和详细设置。
    - 扩展的基准测试工具（BEANS, BirdSet的扩展版本）。
    - 附录中提供了所有实验的非聚合化详细结果（表6-9）。
- 论文中引用的开源项目：引用了BEATs, EAT, EfficientNetB0 (torchvision), BirdNet, Perch等模型的开源实现或预训练权重。AVEX工具库本身集成了这些模型的封装。

📌 **核心摘要**

这篇论文旨在解决生物声学领域缺乏一个通用、可泛化的动物叫声编码器的问题。现有编码器（如BirdNet、Perch）通常局限于鸟类物种，且评估任务单一，难以适应真实世界中物种多样、任务复杂的应用需求。方法核心是进行一次大规模的实证研究，系统性地比较了不同的模型架构（EfficientNet vs. Transformer）、训练数据组合（生物声学数据 vs. 通用音频数据，以及不同分类群）、训练范式（纯监督学习、纯自监督学习、自监督预训练+监督微调）在广泛评估基准上的表现。

与已有方法相比，本文的新在于：1）首次在如此大规模上系统比较了影响编码器质量的多个维度；2）提出并验证了“自监督预训练（生物声学+通用音频数据混合）->监督后训练（同样混合数据）”这一训练配方；3）扩展了评估范围，新增了个体识别和声码发现任务及多个新数据集，并引入检索和聚类指标。

主要实验结果如表3所示，在26个数据集的4大类任务上，其提出的`sl-BEATs-all`模型（基于BEATs架构，混合数据训练）总体达到SOTA，平均检索ROC-AUC在BEANS分类、BEANS检测和BirdSet上分别达到0.604， 0.408， 0.726。关键消融实验表明：a) 在自监督预训练阶段加入通用音频（AudioSet）能显著提升性能（图2a）；b) 纯监督模型在分布内任务（如BEANS分类）上优于纯自监督模型，但后者在分布外任务（如声音场景的BEANS检测）上泛化能力更强，性能下降更小（图2b）；c) 两阶段训练（自监督+监督）能结合两者优势，实现整体最优。

实际意义在于，论文为构建实用的生物声学基础模型提供了明确的指导方案和开源工具，有助于加速动物行为研究、生物多样性监测等应用。主要局限性在于：1）研究的模型架构种类有限（主要对比了EfficientNet和基于Transformer的BEATs/EAT）；2）所有实验均在16kHz采样率下进行，可能丢失了部分物种声音的高频信息；3）部分评估任务（如声码发现）采用了线性探测或聚类/检索，而非端到端的微调评估。

#

---

