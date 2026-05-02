---
title: "ICLR 2026 - 表示学习 论文列表"
date: 2026-05-03
draft: false
tags: ["表示学习"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 表示学习 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 表示学习

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Better Together: Leveraging Unpaired Multimodal Data for Str](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Better Together: Leveraging Unpaired Multimodal Data for Stronger Unimodal Models](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal)

✅ **7.5/10** | 前25% | #表示学习 | #自监督学习 #迁移学习 | #自监督学习 #迁移学习

👥 **作者与机构**

- 第一作者：Sharut Gupta (MIT CSAIL)
- 通讯作者：Phillip Isola (MIT CSAIL) (根据论文作者排序惯例及最后作者通常为资深/通讯作者推断)
- 作者列表：Sharut Gupta (MIT CSAIL)、Shobhita Sundaram (MIT CSAIL)、Chenyu Wang (MIT CSAIL)、Stefanie Jegelka (TU Munich, MIT CSAIL)、Phillip Isola (MIT CSAIL)

💡 **毒舌点评**

本文的亮点在于将“无配对多模态学习”这一看似反直觉的概念，用坚实的理论（费舍尔信息增益）和令人信服的多任务实验证据（图像、音频、文本）系统化地论证为一个有效的范式，其发现“一个模态的单个样本在特定条件下可能比另一个模态的额外样本更有价值”尤其具有启发性。主要短板在于，虽然实验广泛，但下游评估任务高度集中于分类，未能验证UML在生成、推理等更复杂任务上的普适性；此外，理论部分强依赖于线性假设，与深度模型的实际非线性特性存在一定差距。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。仅提供了项目页面（https://unpaired-multimodal.github.io/），但未明确说明该页面是否包含代码。
- 模型权重：未提及。
- 数据集：使用公开数据集（MultiBench, ImageNet及其变体, ESC-50等），论文中未提及需要申请的新数据集。
- Demo：未提及。
- 复现材料：提供了详细的附录，包含训练协议、超参数范围、算法伪代码，以及大量额外实验结果（见附录E）。这为复现提供了重要依据。
- 论文中引用的开源项目/模型：明确使用了DINOv2（视觉编码器）、OpenLLaMA-3B（文本编码器）、CLIP、BERT、AudioCLIP等预训练模型。

📌 **核心摘要**

1. 要解决什么问题：传统多模态学习严重依赖昂贵的配对数据（如图像-文本对），而现实中存在大量无配对的多模态数据。本文探究一个核心问题：能否利用辅助模态的无配对数据来直接增强目标模态的表示学习？
2. 方法核心是什么：提出无配对多模态学习器（UML）。其核心思想是使用一个共享参数的单一模型，交替处理不同模态的输入（如图像和文本），并执行各自的任务（如重建或分类）。通过权重共享，模型能从不同模态的训练梯度中积累关于共享潜在世界的信息。
3. 与已有方法相比新在哪里：UML不依赖于任何数据对齐、推断对齐或替代目标。它直接从纯粹的无配对数据中，通过参数共享隐式地学习跨模态相关性，这是与大多数依赖配对数据或多阶段对齐的现有方法的关键区别。
4. 主要实验结果如何：
   - 在自监督设置（表1）下，UML在MultiBench和标准视觉文本数据集上均优于仅使用图像的基线（例如，在MUSTARD上准确率从59.66%提升至63.28%）。
   - 在监督设置（表2）下，使用ViT-DINOv2和OpenLLaMA编码器，UML在9个图像分类基准的全量微调和少样本线性探测中，平均准确率均有提升（全量微调平均从81.54%提升至83.99%；1-shot从45.52%提升至51.36%）。
   - 跨模态迁移：用预训练的BERT语言模型权重初始化视觉Transformer（图7），性能优于从头训练。
   - 模态转换率：量化发现，在CLIP编码器下，1张图像的价值约等于228个单词（图8）。
5. 实际意义是什么：为如何利用海量无配对多模态数据提供了新思路，特别适用于医疗影像、科学数据、机器人等难以获取完整配对数据的领域。证明了无配对辅助模态可以系统性地扩大类间间距并提升表示鲁棒性。
6. 主要局限性是什么：理论分析基于线性数据生成假设；下游任务评估主要集中在分类，未验证生成等复杂任务；未明确探讨和解决可能出现的梯度干扰、模态冲突等优化挑战。

---

