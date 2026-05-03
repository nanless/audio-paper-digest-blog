---
title: "ICLR 2026 - 跨模态 论文列表"
date: 2026-05-03
draft: false
tags: ["跨模态"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 跨模态 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 跨模态

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Better Together: Leveraging Unpaired Multimodal Data for Str](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Better Together: Leveraging Unpaired Multimodal Data for Stronger Unimodal Models](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal)

✅ **7.5/10** | 前25% | #跨模态 | #自监督学习 | #多模态模型 #音频分类

👥 **作者与机构**

- 第一作者：Sharut Gupta（MIT CSAIL）
- 通讯作者：未说明（论文未明确指定通讯作者，但通常最后一位作者Phillip Isola（MIT CSAIL）可能是通讯作者）
- 作者列表：Sharut Gupta（MIT CSAIL）、Shobhita Sundaram（MIT CSAIL）、Chenyu Wang（MIT CSAIL）、Stefanie Jegelka（TU Munich, MIT CSAIL）、Phillip Isola（MIT CSAIL）

💡 **毒舌点评**

这篇论文的亮点在于其理论分析与丰富实验的紧密结合，以严谨的方式论证了“未配对数据也能有用”这一直觉，实验覆盖面广且结果一致。短板则在于其方法的核心（权重共享）过于简单，更像是一个观察性发现而非一套完整的解决方案；并且论文承认未深入探讨梯度干扰等优化问题，这在实际应用中可能是致命的。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：使用的是公开数据集（MultiBench, ImageNet系列， ESC-50等），但论文未提供其处理后的数据版本。
- Demo：未提及。
- 复现材料：附录提供了非常详细的实验协议、超参数搜索范围、数据构建方法（特别是文本模板生成）和部分算法伪代码（Algorithm 1， 2）。
- 论文中引用的开源项目：依赖预训练的视觉和语言模型，如DINOv2， CLIP， OpenLLaMA， BERT， GPT-2， AudioCLIP。

📌 **核心摘要**

1. 问题：传统多模态学习依赖昂贵且有限的配对数据（如图像-文本对）来学习更好的表示。论文探索一个更基础的问题：能否利用大量易得但未配对的辅助模态数据（如独立的文本语料库）来直接提升目标模态（如图像）模型的性能？
2. 方法核心：提出UML（Unpaired Multimodal Learner），一个模态无关的训练范式。它使用一个共享网络处理来自不同模态的输入，参数通过权重共享在模态间传递信息，无需显式对齐或成对数据。训练可以是自监督（预测重建）或监督（共享分类器）模式。
3. 创新点：与依赖配对数据或显式对齐的先前工作不同，UML证明了仅通过权重共享，未配对数据就能带来严格的信息增益。论文在线性假设下给出了理论证明（基于Fisher信息量），表明未配对数据能减少共享参数的估计方差。
4. 主要实验结果：在多个基准测试上，UML consistently improves unimodal representations：
    - 自监督设置（MultiBench等数据集）：在5个数据集上，UML（图像+文本）相比纯图像模型平均提升约2.5个百分点（例如MUSTARD从59.66%提升至63.28%）。
    - 监督设置（9个视觉分类数据集）：在全量微调下平均准确率从81.54%提升至83.99%；在1-shot小样本学习下从45.52%提升至51.36%。
    - 扩展至音频：在ImageNet-ESC数据集上，使用未配对的图像和文本数据能提升音频分类性能。
    - 迁移学习：使用预训练BERT权重初始化视觉Transformer，在ImageNet上显著优于从头训练。
    - 模态转换率：量化了1张图像约等于228-1034个词（取决于编码器对齐程度）的性能等价关系。
5. 实际意义：为如何利用海量未配对数据提升模型性能提供了理论和实践框架，尤其适用于获取配对数据成本高的领域（如医疗、科学）。
6. 主要局限性：理论分析依赖线性数据生成假设；方法未明确处理梯度干扰、模态冲突等优化挑战；下游评估主要集中在分类任务；论文未提供代码或模型权重。

---

