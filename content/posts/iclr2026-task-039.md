---
title: "ICLR 2026 - 音频事件检测 论文列表"
date: 2026-05-04
draft: false
tags: ["音频事件检测"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频事件检测 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频事件检测

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SNAP-UQ: Self-supervised Next-Activation Prediction for Sing](/audio-paper-digest-blog/posts/2026-05-04-snap-uq-self-supervised-next-activation) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [SNAP-UQ: Self-supervised Next-Activation Prediction for Single-Pass Uncertainty in TinyML](/audio-paper-digest-blog/posts/2026-05-04-snap-uq-self-supervised-next-activation)

✅ **7.0/10** | 前25% | #音频事件检测 | #自监督学习 | #鲁棒性 #实时处理

👥 **作者与机构**

- 第一作者：Ismail Lamaakal (摩洛哥穆罕默德一世大学，纳多尔多学科学院)
- 通讯作者：未说明
- 作者列表：Ismail Lamaakal (摩洛哥穆罕默德一世大学，纳多尔多学科学院)， Chaymae Yahyati (摩洛哥穆罕默德一世大学，纳多尔多学科学院)， Khalid El Makkaoui (摩洛哥穆罕默德一世大学，纳多尔多学科学院)， Ibrahim Ouahbi (摩洛哥穆罕默德一世大学，纳多尔多学科学院)， Yassine Maleh (摩洛哥苏丹穆莱·斯利姆大学，ENS A K， LaSTI实验室)

💡 **毒舌点评**

这篇论文的亮点在于它非常务实地解决了TinyML部署中一个被忽视但至关重要的问题：如何在极度受限的硬件上进行实时、低开销的不确定性估计，并且其“层间动态预测”的设计思路清晰且巧妙。然而，其短板也很明显：方法的理论深度有限，本质上是对现有单次前向传播UQ方法的一种轻量化工程优化，而非方法论上的重大突破；此外，对于“自监督”的定义与常规理解（如表示学习）有偏差，容易引起歧义。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/Ism-ail11/SNAP-UQ。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用了标准公开数据集（MNIST， CIFAR-10， TinyImageNet， SpeechCommands v2）。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录（A-N）中提供了极其详尽的复现信息，包括：完整的数据集划分与预处理、骨干网络与预测头的具体结构、优化器与训练计划、所有超参数的选择网格与最终值、MCU工具链与编译标志、量化细节、评估协议与指标计算代码逻辑。这极大地方便了复现。
- 论文中引用的开源项目：引用了CMSIS-NN（用于高效MCU内核），TensorFlow Lite Micro（TinyML部署框架）。

📌 **核心摘要**

这篇论文针对TinyML（微控制器上的机器学习）部署中缺乏高效、可靠的不确定性估计方法的问题，提出了一种名为SNAP-UQ（基于自监督下一激活预测的单次不确定性估计）的新方法。该方法的核心是在神经网络的前向传播过程中，仅附加少量轻量级的“预测头”，通过自监督学习预测下一层激活的统计量（均值和方差），并利用预测误差（惊喜度）作为不确定性信号。与需要多次前向传播（如MC Dropout、集成学习）或依赖最终softmax置信度的方法不同，SNAP-UQ在单次前向传播中、不引入额外状态、且仅增加极少计算开销（几十KB闪存，约2%的MACs）的情况下，实现了对网络内部层间动态变化的监控。实验在视觉和音频任务上进行，结果表明，与早期退出集成和深度集成等基线方法相比，SNAP-UQ显著降低了MCU上的闪存占用和推理延迟（通常分别小约40-60%和快约25-35%），同时在分布损坏流（CID）上的精度下降检测以及故障检测（AUROC ≈0.9）方面表现优异。其实际意义在于为资源极其受限的边缘设备提供了一种可行的、实时的在线监控和故障检测机制。主要局限性包括对中间层激活访问的依赖、对投影器秩和层选择的敏感性，以及其对分布偏移的敏感性可能不如更复杂的基于分布的检测器。

---

