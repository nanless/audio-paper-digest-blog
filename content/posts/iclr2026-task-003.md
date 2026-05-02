---
title: "ICLR 2026 - 图像分类 论文列表"
date: 2026-05-03
draft: false
tags: ["图像分类"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 图像分类 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 图像分类

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Better Together: Leveraging Unpaired Multimodal Data for Str](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Better Together: Leveraging Unpaired Multimodal Data for Stronger Unimodal Models](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal)

✅ **7.5/10** | 前25% | #图像分类 | #多模态模型 | #自监督学习 #音频分类

👥 **作者与机构**

-   第一作者：Sharut Gupta (MIT CSAIL)
-   通讯作者：未说明
-   作者列表：Sharut Gupta (MIT CSAIL)、Shobhita Sundaram (MIT CSAIL)、Chenyu Wang (MIT CSAIL)、Stefanie Jegelka (TU Munich, MIT CSAIL)、Phillip Isola (MIT CSAIL)

💡 **毒舌点评**

这篇论文的最大亮点在于其理论视角和实验设计的完整性，成功论证了“不配对数据也能提升性能”这一直觉，并提供了一个极其简洁（权重共享）却有效的框架。然而，其明显短板是理论分析强依赖于线性假设，对于更复杂的深度非线性模型，其“Fisher信息累加”的直观解释能否直接迁移存在疑问；同时，尽管实验广泛，但文中承认未主动建模和控制“模态冲突”，这在实际复杂应用中可能是一个风险点。

📌 **核心摘要**

1.  问题：传统多模态学习严重依赖昂贵且稀缺的配对数据（如图像-文本对）。论文旨在探究一个更根本的问题：即使没有配对关系，来自辅助模态（如文本）的独立数据能否直接增强目标模态（如图像）的表示学习？
2.  方法核心：提出“不配对多模态学习器”（UML）。其核心思想是让一个模型以交替方式处理来自不同模态的输入（如图像、文本、音频），并强制共享所有网络参数。模型在每个模态上独立进行训练（自监督或监督），但由于共享权重，梯度会在参数上累积，从而隐式地利用不同模态间共享的语义结构，无需显式对齐。
3.  创新与对比：新在利用了不配对数据，而非依赖配对数据或复杂的对齐目标（如对比学习、最优传输）。与仅使用单模态数据或需要配对的传统多模态方法相比，UML框架更通用，数据要求更低。
4.  主要实验结果：
    *   在多个图像分类基准（如Stanford Cars， Caltech101）和少样本设置下，使用不配对文本数据训练的UML持续优于仅用图像的基线。例如，在Stanford Cars数据集上，全量微调下UML从79.45%提升至86.39%（见Table 2）。
    *   在音频分类任务（ImageNet-ESC）上，使用不配对的图像和文本数据也能提升性能（见图6）。
    *   理论分析表明，在特定设置下，来自模态Y的一个样本对提升模态X表示的贡献，可能大于来自X自身的一个额外样本（见图3）。
    *   定量分析了模态间的“交换率”，发现对于CLIP编码器，1张图像约等于228个单词（见图8）。
5.  实际意义：为医疗影像、科学数据、机器人等领域提供了新思路——这些领域常有丰富的辅助模态数据（文本报告、音频日志）但缺乏配对。UML可以低成本地利用这些数据来增强核心单模态模型。
6.  主要局限：理论分析基于线性数据生成假设；未深入研究和解决联合训练中可能出现的梯度干扰和模态崩溃问题；实验主要在分类任务上验证，生成任务的适用性未知；未开源代码。

---

