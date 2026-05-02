---
title: "ICLR 2026 - 生物声学 论文列表"
date: 2026-05-02
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
| 🥇 | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-02-avex-what-matters-for-animal-vocalization-encoding) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-02-avex-what-matters-for-animal-vocalization-encoding)

✅ **7.5/10** | 前25% | #生物声学 | #自监督学习 | #预训练 #模型评估

👥 **作者与机构**

- 第一作者：Marius Miron（Earth Species Project）, David Robinson（Earth Species Project）
- 通讯作者：Marius Miron（{marius}@earthspecies.org）， David Robinson（{david}@earthspecies.org）
- 作者列表：Marius Miron†⋆（Earth Species Project）， David Robinson†⋆（Earth Species Project）， Milad Alizadeh†（Earth Species Project）， Ellen Gilsenan-McMahon†（Earth Species Project）， Gagan Narula†（Earth Species Project）， Emmanuel Chemla（Earth Species Project）， Maddie Cusimano（Earth Species Project）， Felix Effenberger（Earth Species Project）， Masato Hagiwara（Earth Species Project）， Benjamin Hoffman（Earth Species Project）， Sara Keen（Earth Species Project）， Diane Kim（Earth Species Project）， Jane Lawton（Earth Species Project）， Jen-Yu Liu（Earth Species Project）， Aza Raskin（Earth Species Project）， Olivier Pietquin†‡（Earth Species Project）， Matthieu Geist†‡（Earth Species Project）
（†核心作者，⋆共同第一作者及通讯作者，‡共同资深作者）

#

💡 **毒舌点评**

亮点：这是一次教科书级别的、规模空前的“声学表征学习”工程实验，系统性地拆解并回答了“训练一个好用的通用动物声音编码器到底需要什么”这一实际问题，其结论（自监督预训练+监督微调+混合数据）清晰、可靠且实用，配套的开源工具链极大降低了该领域的入门门槛。短板：论文的“创新”更多体现在工程实践和经验总结层面，缺乏一个令人眼前一亮的、能驱动新方向的理论洞见或算法设计；其评估虽广，但数据集的“偏见”（如鸟类数据占主导）是否被完全克服仍存疑，对“真正全新物种”的泛化能力验证可能不够充分。

#

🔗 **开源详情**

*   代码：提供代码仓库链接 `https://github.com/earthspecies/avex`。该库是用于加载、推理模型以及训练和评估生物声学表征学习模型的Python API和系统。
*   模型权重：明确承诺发布模型检查点（“we release the model checkpoints”）。
*   数据集：训练数据来自多个公开数据集（Xeno-canto, iNaturalist, AudioSet等），论文未自行发布数据，但提供了获取方式。评估数据集部分复用现有基准（BEANS, BirdSet），部分为新编译的公开数据集划分（个体识别、发声库发现数据）。
*   Demo：论文中未提及在线演示。
*   复现材料：提供了完整的训练超参数（表5）、评估指标公式（附录B.2）、详细实验设置和所有模型在所有数据集上的非聚合完整结果（附录C，表6-9）。
*   引用的开源项目：BEATs, EAT, EfficientNet (torchvision), Perch, BirdNet。

📌 **核心摘要**

1.  解决的问题：现有动物声音（生物声学）编码器通常局限于特定物种（如鸟类）、单一模型架构或训练范式，且评估任务和数据集范围狭窄，难以满足跨物种、跨任务的通用表征学习需求。
2.  方法核心：进行首次大规模实证研究，系统性地比较了不同模型架构（CNN vs. Transformer）、训练数据组合（生物声学数据、通用音频、两者混合）和训练范式（监督学习、自监督学习、两阶段训练）对编码器性能的影响。
3.  与已有方法的新颖性：超越了以往工作对单一范式或有限数据的依赖，提出了一个可扩展的“训练配方”；在评估上，大幅扩展了任务范围（增加了个体识别、发声库发现）和数据集规模（26个数据集），并引入了检索和聚类指标来直接评估表征空间。
4.  主要实验结果：关键发现是，在多样化数据上进行自监督预训练，随后在同一数据混合体上进行监督后训练，能取得最佳的跨任务、跨分布泛化性能。具体地，`sl-BEATS-all`（自监督BEATs后训练）在多个基准上达到最优。相比纯监督模型，自监督模型在分布外任务（如声音景观检测）上性能下降更小（如从BEANS Classification到Detection，自监督模型R-AUC平均下降0.01，而监督模型下降0.09）。数据混合中加入通用音频（AudioSet）能一致提升迁移能力。相关结果汇总于表3中。
    | 模型 | 类型 | BEANS Classification Probe | BEANS Classification R-auc | BEANS Detection Probe | BirdSet Probe | Individual ID R-auc | Vocal Repertoire R-auc |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | sl-BEATS-all | SL-SSL | 0.832 | 0.813 | 0.604 | 0.726 | 0.511 | 0.529 |
    | sl-BEATS-bio | SL-SSL | 0.840 | 0.811 | 0.594 | 0.719 | 0.484 | 0.516 |
    | EffNetB0-all | SL | 0.800 | 0.809 | 0.584 | 0.712 | 0.531 | 0.582 |
    | BEATS (pretrained) | SSL | 0.774 | 0.734 | 0.542 | 0.722 | 0.380 | 0.498 |
    | BirdNet | SL | 0.796 | 0.772 | 0.523 | 0.687 | 0.472 | 0.545 |
5.  实际意义：为生物声学领域研究者提供了构建最佳通用编码器的明确指南、开源工具（AVEX）和模型检查点，可直接应用于物种监测、动物个体识别和发声行为研究等任务。
6.  主要局限性：研究中使用的所有训练数据尽管力求多样，但仍可能存在采样偏倚（例如鸟类数据占比较大），可能影响对非鸟类物种泛化能力的绝对评估。评估虽广，但某些任务（如个体识别）的数据集规模仍然有限。

#

---

