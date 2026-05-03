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
| 🥇 | [SNAP-UQ: Self-supervised Next-Activation Prediction for Sing](/audio-paper-digest-blog/posts/2026-05-04-snap-uq-self-supervised-next-activation) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SNAP-UQ: Self-supervised Next-Activation Prediction for Single-Pass Uncertainty in TinyML](/audio-paper-digest-blog/posts/2026-05-04-snap-uq-self-supervised-next-activation)

✅ **7.5/10** | 前25% | #音频事件检测 | #自监督学习 | #鲁棒性 #实时处理

👥 **作者与机构**

- 第一作者：Ismail Lamaakal (Multidisciplinary Faculty of Nador, Mohammed First University, Oujda 60000, Morocco)
- 通讯作者：Ismail Lamaakal (ismail.lamaakal@ump.ac.ma)
- 作者列表：
    - Ismail Lamaakal（Mohammed First University, Multidisciplinary Faculty of Nador）
    - Chaymae Yahyati（Mohammed First University, Multidisciplinary Faculty of Nador）
    - Khalid El Makkaoui（Mohammed First University, Multidisciplinary Faculty of Nador）
    - Ibrahim Ouahbi（Mohammed First University, Multidisciplinary Faculty of Nador）
    - Yassine Maleh（Laboratory LaSTI, ENSAK, Sultan Moulay Slimane University, Khouribga 54000, Morocco）

💡 **毒舌点评**

亮点在于它将“不确定性”这个看似需要复杂集成或多采样的概念，巧妙地拆解为网络内部“层与层之间预期与现实”的差异，并用极小的计算代价（几个微型头）在MCU上实现了单次推断的量化，这确实是针对资源受限场景的优雅工程设计。短板则是其理论框架仍相对直白，实验验证主要停留在与几个特定基线的对比上，缺乏对更强大（尽管更昂贵）方法的深入分析，且主要评估集中于标准基准，其方法在真正复杂、非平稳的流式工业场景中的鲁棒性有待进一步证实。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/Ism-ail11/SNAP-UQ。
- 模型权重：未提及公开的预训练模型权重。
- 数据集：实验使用公开标准数据集（MNIST， CIFAR-10， TinyImageNet， SpeechCommands），未提及创建或发布新数据集。
- Demo：未提供在线演示。
- 复现材料：论文附录（尤其是附录B， C， D）提供了极为详尽的复现信息，包括所有数据集的预处理、骨干网络选择与配置、训练超参数（优化器、学习率、轮数、batch size、损失权重等）、SNAP-UQ具体设置（投影器秩、方差参数化、量化选项）、基线方法调参网格、阈值选择协议、MCU构建标志和测量方法等。
- 论文中引用的开源项目：使用了CMSIS-NN（ARM的神经网络内核库）和TensorFlow Lite Micro等TinyML工具链，但未列出特定的GitHub依赖项目。

📌 **核心摘要**

该论文旨在解决TinyML（微型机器学习）设备上可靠的、资源高效的不确定性估计问题。现有方法（如深度集成、MC Dropout）通常需要多次推断、额外分支或状态存储，难以在功耗和内存极度受限的微控制器（MCU）上部署。论文提出了一种名为SNAP-UQ的新方法，其核心是通过自监督学习，让网络自己预测从一层到下一层的激活统计量（均值和方差），并将实际激活与预测值之间的“惊喜度”（标准化预测误差）作为不确定性的信号。这种方法只需在标准前向传播中附加几个极小的int8头，无需额外推断次数、时间缓冲区或辅助退出分支，实现了真正的单次传递、状态无关推理。

与已有的基于置信度（softmax输出）或特征统计的方法相比，SNAP-UQ的新颖之处在于它利用了网络内部深度方向的动态变化作为不确定性指标，能够更早地感知到由数据分布偏移引起的特征异常，即使模型最终输出的置信度仍然很高。实验结果表明，在语音（SpeechCommands）和视觉（MNIST， CIFAR-10）任务上，SNAP-UQ在MCU部署时，相比早期退出集成和深度集成基线，Flash占用减少40-60%，延迟降低25-35%，并在小型MCU上成功部署了其他方法无法放入的模型。在腐蚀数据流监控中，其检测准确率下降事件的AUPRC指标（例如在SpeechCmd-C上达到0.65）优于基线；在故障检测任务（ID正确/错误 vs. OOD）上，其AUROC达到0.9以上。

该工作的实际意义在于为电池供电的边缘设备提供了一种可行的、轻量级的在线监控机制，能够检测分布漂移、模型失效和异常输入，从而提升系统可靠性。其主要局限性包括：依赖于对模型中间激活的访问；对层间动态建模采用简单的对角/低秩高斯假设，可能无法捕捉复杂的跨通道相关性；性能对“采样层”的选择和头的秩有一定敏感性。

#

---

