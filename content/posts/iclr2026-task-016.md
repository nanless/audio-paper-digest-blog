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
| 🥇 | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-04-avex-what-matters-for-animal-vocalization-encoding) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-04-avex-what-matters-for-animal-vocalization-encoding)

🔥 **8.0/10** | 前25% | #生物声学 | #预训练 | #自监督学习 #模型比较

👥 **作者与机构**

- 第一作者：未说明（论文作者列表首位为Marius Miron，但标注了†⋆，与David Robinson共同贡献且为通讯作者）
- 通讯作者：Marius Miron 与 David Robinson (marius, david@earthspecies.org)
- 作者列表：Marius Miron†⋆, David Robinson†⋆, Milad Alizadeh†, Ellen Gilsenan-McMahon†, Gagan Narula†, Emmanuel Chemla, Maddie Cusimano, Felix Effenberger, Masato Hagiwara, Benjamin Hoffman, Sara Keen, Diane Kim, Jane K. Lawton, Jen-Yu Liu, Aza Raskin, Olivier Pietquin†‡, Matthieu Geist†‡ (所有作者均来自Earth Species Project)

💡 **毒舌点评**

亮点：这是一项极其扎实、工程味浓厚的“苦工式”研究，其系统性地比较了不同架构、数据配方和训练范式，并彻底拓展了评估维度，为生物声学社区确立了当前技术的“最佳实践”配方。短板：论文的核心更像是一个大规模消融研究和最佳实践报告，而非提出一种突破性的新模型或理论，其技术原创性相对有限，更多是现有技术的组合与优化。

🔗 **开源详情**

- 代码：提供开源仓库链接 `https://github.com/earthspecies/avex/`。
- 模型权重：论文承诺释放模型检查点（checkpoints）。
- 数据集：新编译的评估数据集（用于个体识别和声音库发现任务）基于公开数据源（如Figshare, Archive.org, Zenodo），论文提供了获取方式或来源链接。
- Demo：未提及。
- 复现材料：提供了完整的训练超参数（Table 5）、数据划分方式、评估脚本以及评估指标定义（附录B.2）。
- 论文中引用的开源项目：BEATs, EAT, EfficientNetB0 (torchvision), BirdNet, Perch, BEANS评估工具。

📌 **核心摘要**

1. 要解决的问题：生物声学领域需要一种通用、可迁移的声音编码器，但现有模型（如BirdNet）通常局限于特定物种、任务，且评估不全面，无法满足从物种分类到个体识别、声音库发现等多样化下游任务的需求。
2. 方法核心：通过大规模实证研究，系统比较了不同模型架构（CNN vs Transformer）、训练数据组合（生物声学数据 vs 通用音频数据）、训练范式（监督 vs 自监督 vs 两阶段训练）对编码器性能的影响。
3. 与已有方法相比新在哪里：1) 提出了更全面的评估基准，包含了个体识别和声音库发现等新任务；2) 引入了检索和聚类等新指标，直接评估表征质量；3) 系统性地验证了“自监督预训练 + 监督微调”以及混合数据训练的有效性；4) 将研究范围从鸟类扩展到更多类群。
4. 主要实验结果：在跨26个数据集、4类任务的评估中，作者提出的“在生物声学与通用音频混合数据上进行自监督预训练，再在同一混合数据上进行监督微调”的训练方案（如 `sl-BEATS-all`）取得了最佳的整体性能（详见Table 3）。关键发现包括：a) 加入通用音频数据（AudioSet）能一致性提升模型迁移性；b) 自监督模型在分布外任务（如声音场景检测）上泛化更好；c) 监督模型在分布内任务（如焦点录音分类）上更优，但两者结合可兼得优势。
5. 实际意义：为生物声学研究社区提供了一套开源的、性能更优的通用编码器（AVEX）和评估基准，能够加速动物声音相关的保护、监测和通信研究。
6. 主要局限性：研究聚焦于编码器本身，未深入探索其作为更大系统（如多模态模型）一部分的表现；所有实验在16kHz采样率下进行，可能丢失了部分高频信息；对数据混合和训练范式的探索尚未完全穷尽。

---

