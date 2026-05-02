---
title: "ICLR 2026 - 模型评估 论文列表"
date: 2026-05-03
draft: false
tags: ["模型评估"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 模型评估 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型评估

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SNAP-UQ: Self-supervised Next-Activation Prediction for Sing](/audio-paper-digest-blog/posts/2026-05-03-snap-uq-self-supervised-next-activation) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [SNAP-UQ: Self-supervised Next-Activation Prediction for Single-Pass Uncertainty in TinyML](/audio-paper-digest-blog/posts/2026-05-03-snap-uq-self-supervised-next-activation)

✅ **7.0/10** | 前25% | #模型评估 | #自监督学习 | #音频事件检测 #TinyML

👥 **作者与机构**

- 第一作者：Ismail Lamaakal（穆罕默德一世大学，纳达尔多学科学院）
- 通讯作者：未明确说明
- 作者列表：Ismail Lamaakal（穆罕默德一世大学，纳达尔多学科学院）、Chaymae Yahyati（穆罕默德一世大学，纳达尔多学科学院）、Khalid El Makkaoui（穆罕默德一世大学，纳达尔多学科学院）、Ibrahim Ouahbi（穆罕默德一世大学，纳达尔多学科学院）、Yassine Maleh（苏丹穆莱·斯利姆大学，ENS LaSTI实验室）

💡 **毒舌点评**

SNAP-UQ的精髓在于把“模型内部特征流是否正常”这一直觉做成了一个轻量级、单次前传就能计算的指标，巧妙避开了TinyML设备最怕的多次推理和状态保持，堪称“在螺蛳壳里做道场”。但其理论根基（与马氏距离的等价性等）描述稍显仓促，且在更复杂模型（如Transformer）上的泛化性未充分探讨，目前更像一个针对特定CNN/小模型的成功“工程魔法”。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/Ism-ail11/SNAP-UQ。
- 模型权重：未提及。
- 数据集：使用公开数据集（MNIST, CIFAR-10, TinyImageNet, SpeechCommands v2, MNIST-C等），未提及由作者发布新数据集。
- Demo：未提及。
- 复现材料：论文附录（A-O）提供了非常详细的训练细节、超参数设置、构建流程、评估协议和消融实验描述，复现指导性强。
- 论文中引用的开源项目：未明确引用外部依赖项目，主要对比方法（如Deep Ensembles, MC Dropout）为通用方法。

📌 **核心摘要**

1. 要解决什么问题：在TinyML场景下，微控制器（MCU）需要可靠的不确定性估计来检测模型故障、分布偏移或精度下降，但传统方法（如集成、MC Dropout）计算和存储开销过大，无法满足毫瓦级设备的严格预算。
2. 方法核心是什么：提出SNAP-UQ方法，其核心是一种“自监督下一步激活预测”机制。它在网络的几个关键层（如中间层和倒数第二层）附加小型预测头，基于前一层激活的低秩投影来预测当前层激活的均值和对数方差，形成条件高斯模型。通过计算实际激活与预测分布之间的“惊讶度”（即标准化预测误差），聚合得到一个表示网络内部特征流动异常的单次前传不确定性分数。
3. 与已有方法相比新在哪里：不同于依赖多次推理、额外分支或输出概率校准的常规方法，SNAP-UQ的不确定性信号源于对网络自身层间动态的建模，是条件于深度和自监督的。它不改变主干网络，无需时间缓冲区，所有计算可在标准前传中完成，且设计高度量化友好（int8头，LUT实现指数），额外开销仅为几十KB Flash和不到2%的MAC操作。
4. 主要实验结果如何：在MNIST、CIFAR-10、TinyImageNet和SpeechCommands数据集上，SNAP-UQ相比基线方法显著降低了资源消耗（Flash减少约40-60%，延迟降低约25-35%），同时保持或提升了性能。关键结果如下表所示：
   表1：MCU可部署性对比（SpeechCmd任务，Big-MCU）
   | 方法 | Flash (KB) ↓ | Peak RAM (KB) ↓ | Latency (ms) ↓ | Energy (mJ) ↓ |
   | :--- | :--- | :--- | :--- | :--- |
   | BASE | 220 | 84 | 60 | 2.1 |
   | EE-ens | 360 | 132 | 85 | 3.0 |
   | DEEP | 290 | 108 | 70 | 2.5 |
   | SNAP-UQ | 182 | 70 | 52 | 1.7 |
   在损坏流监控（CIFAR-10-C）中，SNAP-UQ的AUPRC随腐蚀严重度增长最快。对于故障检测（ID✓ vs. ID×），其AUROC在MNIST上达到0.90，SpeechCmd上达到0.94，优于多数基线。
5. 实际意义是什么：为部署在MCU上的TinyML模型提供了一种开销极低、易于集成、无需在线标签的在线不确定性监控方案，有助于提升设备侧AI应用的鲁棒性和安全性。
6. 主要局限性是：依赖访问网络中间层激活，对无法修改或访问中间层的“黑盒”模型不适用；使用对角/低秩协方差建模，可能无法捕捉复杂的跨通道相关性；性能对“抽头层”的位置和投影秩的选择敏感。

---

