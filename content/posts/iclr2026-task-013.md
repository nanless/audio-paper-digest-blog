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
| 🥇 | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding)

🔥 **8.0/10** | 前25% | #生物声学 | #自监督学习 | #预训练 #音频分类

👥 **作者与机构**

- 第一作者：Marius Miron†⋆ (Earth Species Project)
- 通讯作者：Marius Miron†⋆ 和 David Robinson†⋆ (Earth Species Project)，论文中明确标注。
- 作者列表：Marius Miron†⋆, David Robinson†⋆, Milad Alizadeh†, Ellen Gilsenan-McMahon†, Gagan Narula†, Emmanuel Chemla, Maddie Cusimano, Felix Effenberger, Masato Hagiwara, Benjamin Hoffman, Sara Keen, Diane Kim, Jane K. Lawton, Jen-Yu Liu, Aza Raskin, Olivier Pietquin†‡, Matthieu Geist†‡ （所有作者均来自Earth Species Project）。

💡 **毒舌点评**

亮点：本文是一份极其扎实的“生物声学编码器训练说明书”，通过控制变量的大规模实验，首次清晰地揭示了数据多样性、两阶段训练(SSL预训练+SL后训练)对模型性能（尤其是分布外泛化）的量化影响，其结论和开源工具对领域研究者极具实用价值。
短板：尽管实验全面，但核心更偏向于对现有技术的系统性验证和组合优化，而非提出一种全新的架构或理论；文中部分分析（如注意力探针的效果）在主文中未充分展开，留作未来工作。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/earthspecies/avex
- 模型权重：提供，作为AVEX库的一部分发布。
- 数据集：论文中使用的部分生物声学数据集（如Xeno-Canto, iNaturalist）公开；Watkins等有许可协议；完整训练数据集的统一打包未提及是否公开下载。
- Demo：论文中未提及在线演示。
- 复现材料：提供了完整的训练超参数（表5）、数据处理说明、评估脚本（在AVEX库中）。
- 论文中引用的开源项目：BEATs, EAT, EfficientNet (torchvision), HuggingFace datasets library。

📌 **核心摘要**

1. 解决的问题：生物声学领域需要通用的动物声音编码器，但现有模型通常局限于鸟类等少数物种，依赖单一训练范式，且评估任务单一，泛化能力不足。
2. 方法核心：提出系统性实证研究框架，比较不同模型架构（EfficientNet, Transformer）、数据混合（生物声学+通用音频）、训练方案（监督、自监督、两阶段训练）。提出最佳实践配方：在混合生物声学与通用音频数据上进行自监督预训练，随后在相同数据混合体上进行监督后训练。
3. 创新点：
    - 系统性实证研究：首次大规模、公平地比较影响生物声学编码器性能的关键因素。
    - 两阶段训练配方：证明自监督与监督学习互补，两阶段训练能兼顾分布内与分布外性能。
    - 多样化评估基准：扩展评估任务至个体识别和声学库发现，并引入检索和聚类指标，更全面评估表征质量。
4. 主要实验结果：在26个数据集和4类任务上评估19个模型。最佳模型(sl-BEATS-all) 在多个基准上达到SOTA。
    - BEANS分类(分布内)：探针准确率0.832，检索AUC 0.604（显著优于Perch的0.768/0.478）。
    - BEANS检测(分布外)：探针mAP 0.604，检索AUC 0.294（优于Perch的0.478/0.368）。
    - 关键发现：加入通用音频(AudioSet)在各阶段均带来提升；自监督模型分布外泛化更好，但分布内弱于监督模型；两阶段训练模型则在两者上均表现优异。
5. 实际意义：为生物声学研究提供了经过验证的通用编码器、训练配方和开源工具包（AVEX），加速下游应用如物种监测、动物行为分析。
6. 主要局限性：训练数据以鸟类为主，对其他类群的覆盖可能不足；所有模型以16kHz训练，可能损失高频信息；论文作为实证研究，对学习机制的理论探索有限。

---

