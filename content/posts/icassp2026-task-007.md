---
title: "ICASSP 2026 - 听觉注意解码 论文列表"
date: 2026-04-29
draft: false
tags: ["听觉注意解码"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 听觉注意解码 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 听觉注意解码

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Efficient Solutions for Mitigating Initialization Bias in Un](/audio-paper-digest-blog/posts/2026-04-29-efficient-solutions-for-mitigating-initialization) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Efficient Solutions for Mitigating Initialization Bias in Unsupervised Self-Adaptive Auditory Attention Decoding](/audio-paper-digest-blog/posts/2026-04-29-efficient-solutions-for-mitigating-initialization)

🔥 **8.5/10** | 前25% | #听觉注意解码 | #自监督学习 | #脑电图 #信号处理

👥 **作者与机构**

- 第一作者：Yuanyuan Yao (KU Leuven, Department of Electrical Engineering (ESAT), STADIUS Center for Dynamical Systems, Signal Processing and Data Analytics)
- 通讯作者：未说明
- 作者列表：Yuanyuan Yao (KU Leuven, ESAT-STADIUS)， Simon Geirnaert (KU Leuven, ESAT-STADIUS; KU Leuven, Department of Neurosciences, ExpORL)， Tinne Tuytelaars (KU Leuven, ESAT-PSI)， Alexander Bertrand (KU Leuven, ESAT-STADIUS)

#

💡 **毒舌点评**

这篇论文的亮点在于将看似棘手的“初始化偏差”问题，转化为通过巧妙的模型架构调整（如双编码器）或训练策略设计（如软标签、复合信号初始化）来系统性地解决，并且每种方案都附带了严格的计算效率分析，这是很多方法论研究容易忽视的工程价值。短板则在于实验验证的广度略显不足，仅在一个公开数据集上进行了评估，缺乏在更复杂、更现实的场景（如嘈杂环境、说话人移动）中的进一步验证，这可能会让部分读者对其泛化能力持保留态度。

#

🔗 **开源详情**

- 代码：是。论文明确提供了算法代码的GitHub仓库链接：https://github.com/YYao-42/Unsupervised_AAD。
- 模型权重：未提及。论文未提及公开预训练或训练好的模型权重。
- 数据集：否。论文使用的是第三方公开数据集[13]，需通过原始论文引用获取，本论文本身未提供数据集下载。
- Demo：未提及。
- 复现材料：是。论文提供了详细的预处理步骤（滤波、下采样、分段）、时滞嵌入参数、CCA分量数（Q=2）以及评估用的硬件平台（Intel Core i7-13700F）。代码仓库应包含算法实现。
- 引��的开源项目：论文未明确列出依赖的其他开源工具或模型。其实现主要基于标准线性代数和信号处理方法。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

本文旨在解决无监督自适应听觉注意解码（AAD）中因模型初始化偏差导致的性能下降问题。现有解决偏差的交叉验证方法计算成本高昂，且随数据量线性增长。论文提出了三种计算高效的替代方案：1）双编码器版本，联合建模对注意和未注意语音的神经响应；2）软标签版本，用概率权重替代硬分配；3）和初始化单编码器，用两者之和的复合信号初始化模型。所有新方法均基于典型相关分析（CCA），仅需单次模型训练即可迭代。实验在公开的EEG数据集上进行，结果表明：1）和初始化法在小数据集（5-15分钟）上表现最佳，计算成本与基线持平；2）软标签法在大数据集上性能接近计算成本高昂的交叉验证版本；3）所有新方法的计算时间均为常数（~1.0x-1.5x基线时间），而交叉验证版本的时间成本随训练集长度线性增长至30倍以上。该工作为实现高效、实时的自适应神经调控助听设备提供了关键算法基础，主要局限在于仅在单一数据集上进行了验证。

#

---

