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
| 🥇 | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding) | 8.0分 | 前10% |

---

## 📋 论文详情

### 🥇 [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-03-avex-what-matters-for-animal-vocalization-encoding)

🔥 **8.0/10** | 前10% | #生物声学 | #自监督学习 | #音频分类 #音频检索

👥 **作者与机构**

- 第一作者：Marius Miron（Earth Species Project）
- 通讯作者：Marius Miron（Earth Species Project）， David Robinson（Earth Species Project）
- 作者列表：Marius Miron（Earth Species Project）、David Robinson（Earth Species Project）、Milad Alizadeh（Earth Species Project）、Ellen Gilsenan-McMahon（Earth Species Project）、Gagan Narula（Earth Species Project）、Emmanuel Chemla（Earth Species Project）、Maddie Cusimano（Earth Species Project）、Felix Effenberger（Earth Species Project）、Masato Hagiwara（Earth Species Project）、Benjamin Hoffman（Earth Species Project）、Sara Keen（Earth Species Project）、Diane Kim（Earth Species Project）、Jane Lawton（Earth Species Project）、Jen-Yu Liu（Earth Species Project）、Aza Raskin（Earth Species Project）、Olivier Pietquin（Earth Species Project）、Matthieu Geist（Earth Species Project）

💡 **毒舌点评**

这篇论文堪称生物声学领域的“系统性研究报告”，通过大规模、全方位的实证对比，为构建通用动物声音编码器提供了详尽的“食谱”和基线，其工程规模和开源贡献值得称赞。但另一方面，它更像一份详尽的“产品测试报告”而非一篇提出颠覆性架构的学术突破，其核心创新在于“发现什么有效”，而非“发明一种全新方法”。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/earthspecies/avex。
- 模型权重：明确提到公开了模型检查点（Checkpoints）。
- 数据集：论文中使用的训练数据大多来自公开来源（Xeno-canto， iNaturalist等），但编译和清洗后的具体数据集如何获取未在文中明确说明。评估数据集（BEANS， BirdSet及新提出的）是公开的。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了非常详细的训练细节（附录B.6， 表5），包括学习率、批量大小、优化器、调度器、训练轮数等关键超参数，以及评估设置，为复现提供了充分信息。
- 引用的开源项目：BEATs（微软）， EAT， EfficientNet（torchvision）。

📌 **核心摘要**

1. 解决的问题：生物声学领域需要通用的声学编码器来处理物种分类、个体识别、发声模式发现等多样化任务，但现有模型多局限于单一物种（如鸟类）或单一训练范式，且评估任务和数据集有限。
2. 方法核心：通过大规模实证研究，系统评估训练数据多样性（生物声学数据+通用音频数据）、模型架构（CNN vs. Transformer）、训练范式（自监督预训练、监督微调、以及两者的组合）对编码器性能的影响。
3. 与已有方法的新颖之处：首次在生物声学领域进行如此全面的、控制变量的对比研究；提出了“自监督预训练在混合生物声学+通用音频数据上，再在相同数据混合集上进行监督后训练”的最佳实践配方；扩展了评估范围，加入了个体识别和发声模式发现等新任务及检索、聚类等新指标。
4. 主要实验结果：在26个数据集、4类任务（物种分类、检测、个体ID、发声模式发现）上评估了19个模型。关键结果如下表所示，最佳模型`sl-BEATs-all`在多数基准上达到SOTA。
    | 模型 (最佳结果) | BEANS分类 (Probe准确率) | BEANS检测 (R-AUC) | BirdSet (Probe mAP) | 个体ID (Probe准确率) | 发声模式发现 (R-AUC) |
    |---|---|---|---|---|---|
    | sl-BEATs-all | 0.832 | 0.604 | 0.726 | 0.732 | 0.798 |
    | BirdNet (基线) | 0.796 | 0.523 | N/A | N/A | 0.795 |
    | BEATs (预训练基线) | 0.774 | 0.542 | 0.722 | 0.686 | 0.775 |

    论文图2(b)形象展示了这一结论：纯监督模型在领域内任务（BEANS分类）表现最佳，但迁移到领域外任务（BEANS检测）时性能下降显著；而自监督预训练+监督后训练的模型在领域内外均表现强劲。论文图3显示了对SSL模型进行后训练带来的稳定增益。
5. 实际意义：为生物声学研究和保护应用提供了更强的通用基础模型和开源工具（AVEX库），并明确了构建这类模型的关键数据与技术路径。
6. 主要局限性：所有模型均在16kHz采样率下训练和评估，可能丢失部分物种高于8kHz的重要音频信息；评估虽广但未能完全控制所有变量（如数据分布、噪声条件）来深入剖析表示鲁棒性。

---

