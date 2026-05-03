---
title: "ICLR 2026 - 声源定位 论文列表"
date: 2026-05-03
draft: false
tags: ["声源定位"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 声源定位 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 声源定位

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Physics-Informed Audio-Geometry-Grid Representation Learning](/audio-paper-digest-blog/posts/2026-05-03-physics-informed-audio-geometry-grid) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Physics-Informed Audio-Geometry-Grid Representation Learning for Universal Sound Source Localization](/audio-paper-digest-blog/posts/2026-05-03-physics-informed-audio-geometry-grid)

🔥 **8.0/10** | 前25% | #声源定位 | #表示学习 | #麦克风阵列 #鲁棒性

👥 **作者与机构**

-   第一作者：Min-Sang Baek（汉阳大学电子工程系）
-   通讯作者：Joon-Hyuk Chang（汉阳大学电子工程系）
-   作者列表：Min-Sang Baek（汉阳大学电子工程系）、Gyeong-Su Kim（汉阳大学电子工程系）、Donghyun Kim（汉阳大学电子工程系）、Joon-Hyuk Chang（汉阳大学电子工程系）

#

💡 **毒舌点评**

本文的亮点在于其系统性和完整性：它不是提出一个孤立的新模块，而是构建了一个完整的、旨在解决声源定位“通用化”难题的框架，并细致地从物理（LNuDFT, rMPE）和表示学习（AGG-RL）两个维度加以强化。然而，其短板在于“通用性”的实现部分依赖于动态变化的网格和几何输入，这虽然避免了重训练，但引入了额外的计算开销（Gridnet），并且论文并未充分探讨其在超大规模阵列或极端动态场景下的实时性瓶颈。

#

🔗 **开源详情**

-   代码：提供官方GitHub仓库链接：https://github.com/BaekMS/Audio-Geometry-Grid_Representation-Learning
-   模型权重：论文中未提及公开预训练模型权重。
-   数据集：论文使用了公开的LOCATA（真实录音）、LibriSpeech、MS-SNSD、TIMIT、ESC-50等数据集，未提供自有的合成数据生成代码或数据（但详细描述了生成算法，算法3）。
-   Demo：论文中未提及在线演示。
-   复现材料：提供了极其详尽的复现材料，包括：完整的模型架构描述和示意图（附录A.3, A.4， 图4，5）、训练超参数设置（附录A.9，表6）、数据生成详细步骤和参数（附录A.10，算法3）、评估指标定义（附录A.11）以及损失函数和峰值检测算法（附录A.7, A.8）。
-   引用的开源项目：论文中明确提到使用了开源工具`gpuRIR`进行房间脉冲响应模拟，并使用了`fvcore`库进行计算复杂度分析。

📌 **核心摘要**

1.  问题：当前基于深度神经网络的声源定位（SSL）方法大多受限于固定的麦克风阵列几何和预定义的离散方向（DOA）网格，导致泛化能力和可扩展性不足。
2.  方法：提出音频-几何-网格表示学习（AGG-RL）框架，包含音频-几何表示网络（AuGeonet）和网格表示网络（Gridnet），在共享潜在空间中对齐音频-几何特征与网格特征，从而支持任意几何和网格的定位。同时引入两个物理信息组件：可学习的非均匀离散傅里叶变换（LNuDFT），自适应聚焦于信息丰富的频率区间；以及相对麦克风位置编码（rMPE），以相对坐标形式编码阵列几何。
3.  新意：该框架首次将表示学习思想系统地应用于SSL，联合建模音频、几何和网格三者的相互关系。LNuDFT和rMPE通过引入符合声学物理规律的归纳偏置，提升了特征的泛化能力和可解释性。
4.  实验：在合成与真实数据集上的实验表明，AGG-RL在未见几何（如Eigenmike阵列）和动态配置下显著优于现有基线（如Unet, Neural-SRP, GI-DOAEnet）。例如，在未见条件的Eigenmike数据集上，所提方法MAE为11.24°（ACC10: 72.17%），而次优基线GI-DOAEnetFM的MAE高达93.61°。消融研究验证了每个组件的贡献。
5.  意义：该工作为实现跨多样场景的通用空间音频感知提供了有前景的方向，推动了SSL从“专用”到“通用”的发展。
6.  局限：Gridnet的引入增加了计算和参数开销；性能在训练数据分布外的极端场景下仍可能下降；论文未深入探讨在超实时或资源极度受限设备上的部署。

#

---

