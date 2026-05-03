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
| 🥇 | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-04-avex-what-matters-for-animal-vocalization-encoding) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-04-avex-what-matters-for-animal-vocalization-encoding)

🔥 **8.5/10** | 前25% | #生物声学 | #预训练 | #自监督学习 #模型比较

👥 **作者与机构**

- 第一作者：Marius Miron（Earth Species Project）
- 通讯作者：Marius Miron（Earth Species Project）， David Robinson（Earth Species Project）
- 作者列表：Marius Miron（Earth Species Project）， David Robinson（Earth Species Project）， Milad Alizadeh（Earth Species Project）， Ellen Gilsenan-McMahon（Earth Species Project）， Gagan Narula（Earth Species Project）， Emmanuel Chemla（Earth Species Project）， Maddie Cusimano（Earth Species Project）， Felix Effenberger（Earth Species Project）， Masato Hagiwara（Earth Species Project）， Benjamin Hoffman（Earth Species Project）， Sara Keen（Earth Species Project）， Diane Kim（Earth Species Project）， Jane Lawton（Earth Species Project）， Jen-Yu Liu（Earth Species Project）， Aza Raskin（Earth Species Project）， Olivier Pietquin（Earth Species Project）， Matthieu Geist（Earth Species Project）
（注：所有作者均隶属于Earth Species Project，论文中未进一步细分实验室或部门）

💡 **毒舌点评**

亮点：这篇论文是生物声学领域久违的“系统集成”之作，它不发明新轮子，而是把已知的零件（不同架构、数据、训练方法）在标准化的测试台上跑了一遍，最终给出了一份清晰、可复现的“组装说明书”，极大降低了领域内后续工作的试错成本。
短板：本质上它更像一篇详尽的“优化报告”而非“创新研究”，结论（如“先SSL预训练再SL微调”）在NLP/CV领域已是常识，其新颖性主要体现在将其验证于生物声学这一特定垂直领域，因此理论贡献有限。

🔗 **开源详情**

- 代码：提供了开源代码仓库链接：`https://github.com/earthspecies/avex`。
- 模型权重：明确承诺发布所有新训练的模型检查点（Table 2中所列）。
- 数据集：论文中使用了多个公开数据集（AudioSet， Xeno-canto， iNaturalist等），但未明确说明是否提供了其整合后的训练集和评估数据集的下载链接。新提出的个体识别和叫声分类评估数据集来源于公开仓库，论文提供了引用链接。
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常充分的复现材料，包括：详细的软件环境说明（B.5）、所有模型的完整训练超参数（Table 5）、评估指标的具体计算公式（B.2）、以及扩展的实验设置和结果（附录C）。
- 论文中引用的开源项目：BEATs， EAT， EfficientNetB0（来自torchvision），以及对BirdNet和Perch的TensorFlow-Lite封装。

论文中未提及开源计划：未提及是否将论文中编译和清洗后的大规模混合训练数据集本身进行开源托管。

📌 **核心摘要**

1.  要解决什么问题：生物声学领域需要能够处理多种物种、多种任务（如物种分类、个体识别、叫声分类）的通用音频编码器。然而，现有编码器通常局限于鸟类、单一架构或训练范式，且评估范围狭窄。
2.  方法核心是什么：通过一项大规模实证研究，系统评估影响通用生物声学编码器性能的关键因素，包括：（1）模型架构（CNN vs Transformer）；（2）训练数据（多样性、是否包含通用音频）；（3）训练范式（监督学习、自监督学习、及其两阶段组合）。
3.  与已有方法相比新在哪里：相比以往工作，本文在三个维度上扩展：（1）使用了比以往更广泛、更多样化的生物声学训练数据；（2）首次系统比较了CNN和Transformer架构，以及监督、自监督及两阶段训练范式；（3）极大地扩展了评估范围，新增了个体识别和叫声分类任务的公共基准数据集，并引入了检索和聚类指标。
4.  主要实验结果如何：在涵盖26个数据集、4类任务的评估中，最佳模型是采用“自监督预训练+监督微调”两阶段范式，并在混合了生物声学和通用音频（AudioSet）的数据上训练的模型。例如，其提出的`sl-BEATs-all`模型在多项基准上取得SOTA（如表3所示）。关键发现包括：（a）在监督模型擅长的领域内任务（如BEANS分类）上表现强劲，而自监督模型在领域外任务（如BEANS检测）上泛化更好；（b）两阶段训练模型结合了两者优点，在分布内和分布外均表现优异。

| 模型名称 (来自Table 3) | 训练范式 | BEANS 分类 (Probe Acc) | BEANS 分类 (R-AUC) | BEANS 检测 (Probe mAP) | BEANS 检测 (R-AUC) | BirdSet (Probe mAP) | BirdSet (R-AUC) | 个体 ID (R-AUC) | 叫声分类 (R-AUC) | 叫声分类 (NMI) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| sl-BEATS-all | SL-SSL | 0.832 | 0.813 | 0.604 | 0.408 | 0.726 | 0.294 | 0.732 | 0.511 | 0.690 |
| EffNetB0-all | SL | 0.800 | 0.809 | 0.584 | 0.362 | 0.712 | 0.279 | 0.707 | 0.531 | 0.701 |
| Perch | SL | 0.768 | 0.759 | 0.478 | 0.368 | 0.674 | 0.233 | 0.656 | 0.530 | 0.705 |
| BEATS (pretrained) | SSL | 0.774 | 0.734 | 0.542 | 0.381 | 0.722 | 0.129 | 0.686 | 0.380 | 0.637 |
| BirdNet | SL | 0.796 | 0.772 | 0.523 | 0.392 | N/A | N/A | N/A | 0.472 | 0.708 |

5.  实际意义是什么：为生物声学社区提供了一套经过验证的、可复用的最佳实践训练方案（数据混合+两阶段训练），以及一个包含多样化任务和评估指标的基准测试体系。开源模型和工具（AVEX）将直接加速下游应用和研究。
6.  主要局限性是什么：（1）所有模型均在16kHz采样率下训练，可能丢失部分高频生物声学信息；（2）评估虽然广泛，但可能仍未完全覆盖所有现实世界生物声学任务的复杂性；（3）论文承认，更优的SSL骨干网络可能产生更好的微调结果，其结论受限于所选骨干（BEATs, EAT）的性能。

---

