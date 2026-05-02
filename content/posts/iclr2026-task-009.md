---
title: "ICLR 2026 - 模型评估 论文列表"
date: 2026-05-03
draft: false
tags: ["模型评估"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 模型评估 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型评估

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Compose and Fuse: Revisiting the Foundational Bottlenecks in](/audio-paper-digest-blog/posts/2026-05-03-compose-and-fuse-revisiting-the-foundational) | 8.0分 | 前25% |
| 🥈 | [SNAP-UQ: Self-supervised Next-Activation Prediction for Sing](/audio-paper-digest-blog/posts/2026-05-03-snap-uq-self-supervised-next-activation) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Compose and Fuse: Revisiting the Foundational Bottlenecks in Multimodal Reasoning](/audio-paper-digest-blog/posts/2026-05-03-compose-and-fuse-revisiting-the-foundational)

🔥 **8.0/10** | 前25% | #模型评估 | #模型评估 | #模型比较 #多模态模型

👥 **作者与机构**

- 第一作者：Yucheng Wang (ETH Zürich)
- 通讯作者：Mrinmaya Sachan (ETH Zürich)
- 作者列表：Yucheng Wang (ETH Zürich), Yifan Hou (ETH Zürich), Aydin Javadov (ETH Zürich), Mubashara Akhtar (ETH Zürich), Mrinmaya Sachan (ETH Zürich)

💡 **毒舌点评**

这篇论文最大的亮点在于它用一个严谨、系统性的逻辑推理框架，把当前多模态大模型“看起来能融合但实际推理不行”这个模糊问题给量化、拆解了，并精准定位到“组合”和“融合”两个具体的瓶颈。短板也很明显：它本质上是一个高质量的诊断报告，给出了“病理分析”，但提出的“药方”（如两步提示、注意力温度调整）非常初步，属于治标不治本的启发式方法，距离解决根本问题还有很大距离。

🔗 **开源详情**

- 代码：论文明确提及“Our code and data are publicly available.”，并给出链接（论文中未直接展示完整URL，但指明已公开）。提供了数据生成脚本。
- 模型权重：论文评估的是现有开源模型（Baichuan-Omni-1.5d, Qwen2.5-Omni, MiniCPM-o-2.6, Phi-4 Multimodal），但未提及提供本研究特有的模型权重。
- 数据集：论文使用自构建的合成数据集，并声称已公开。评估框架适用于多种数据，论文中引用了IsoBench用于验证。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文正文和附录提供了极其详细的复现信息，包括：完整的事实与规则生成规则、所有六种交互模式及任务的提示模板（附录A.3）、线性探针的具体设置（特征提取方法、分类器参数）、注意力操控的干预方法。
- 论文中引用的开源项目：CosyVoice 2（用于TTS音频生成）、Graphviz（用于图像生成）、Clark et al. (2020) 的数据生成代码。

📌 **核心摘要**

1.  要解决的问题：多模态大语言模型（MLLMs）在整合文本、视觉、音频等模态信息以增强推理能力时，表现存在矛盾：有时有帮助，有时反而有害。目前缺乏一个控制变量的评估框架来系统性地分析模态交互在何时、为何支持或损害推理能力。
2.  方法核心：提出一个基于逻辑的评估框架，设计了六种规范的模态交互模式（等效、替代、蕴含、独立、矛盾、互补），系统性地改变跨模态事实的分布方式和逻辑组合要求。使用合成数据，在四种开源MLLMs上进行受控实验，并通过线性探测和干预实验分析模型内部机制。
3.  与已有方法相比新在哪里：现有工作多为黑盒评估或基于特定领域的观察。本工作首次提供了一个可控制、可解释的框架来隔离和量化模态交互的影响，并深入模型内部揭示了导致失败的机制（注意力模式无法编码事实有用性、早期融合导致模态偏好）。
4.  主要实验结果：
    *   多模态何时有帮助：当额外模态提供独立、充分的推理路径（替代模式）时，平均准确率从97.0%提升至98.7%。冗余信息（等效模式）对强模态（文本）无益甚至有害，而将多跳推理链拆分到不同模态（蕴含模式）会导致准确率平均下降7.8%-12.8%。
    *   多模态何时有害：存在三种偏差：a) 性能偏差：弱模态（如视觉）拖累整体表现；b) 偏好偏差：模态冲突时，模型倾向于某些模态而非性能最强的模态；c) 融合偏差：无法有效整合互补信息，互补模式下准确率（52.0%）低于任何单模态条件。
    *   瓶颈识别：a) 任务组合瓶颈：单独的事实识别（近乎完美）和单独的文本推理（接近天花板）都很好，但组合在一步推理中完成时性能下降。两步提示（先识别后推理）可显著恢复性能。b) 融合瓶颈：模型内部能完美保留模态身份信息，且该信息在早期层（前4层）最强。人为调整这些层的注意力温度（从0.4到1.8）可以改善推理，证实早期融合引入了偏差。
5.  实际意义：研究明确指出，当前MLLMs的障碍不在感知或孤立的推理能力，而在于如何整合。这为未来模型设计指明了方向，即需要“组合感知训练”和“早期融合控制”，使额外模态真正成为推理的资产而非干扰源。
6.  主要局限性：评估基于简化的、合成的单步逻辑推理任务（尽管验证了IsoBench），可能无法完全代表复杂现实世界任务的动态。所提出的缓解方法（如提示工程、注意力温度调整）是分析性的、轻量级的干预，而非模型架构或训练目标的根本性改进。

---

### 🥈 [SNAP-UQ: Self-supervised Next-Activation Prediction for Single-Pass Uncertainty in TinyML](/audio-paper-digest-blog/posts/2026-05-03-snap-uq-self-supervised-next-activation)

✅ **7.5/10** | 前25% | #模型评估 | #自监督学习 | #低资源 #音频分类

👥 **作者与机构**

- 第一作者：Ismail Lamaakal（穆罕默德一世大学纳多尔多学科学院）
- 通讯作者：未明确说明（论文中未提供通讯作者信息）
- 作者列表：Ismail Lamaakal（穆罕默德一世大学纳多尔多学科学院）、Chaymae Yahyati（穆罕默德一世大学纳多尔多学科学院）、Khalid El Makkaoui（穆罕默德一世大学纳多尔多学科学院）、Ibrahim Ouahbi（穆罕默德一世大学纳多尔多学科学院）、Yassine Maleh（苏丹穆莱斯利姆大学ENS A K实验室LaSTI）

#

💡 **毒舌点评**

亮点是方法设计巧妙地针对了TinyML的极端约束（单次前向、无状态、int8友好），通过层间动力学建模提供了输出置信度之外的补充不确定性信号。短板是论文声称的“SOTA”主要体现在与几个特定基线（如早退集成、深度集成）的对比上，在更广泛的单次确定性UQ方法（如DUQ、DDU）对比中未见优势，且实验规模（数据集、模型）相对较小。

#

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/Ism-ail11/SNAP-UQ。
- 模型权重：论文中未提及公开的预训练模型权重。
- 数据集：使用的是公开标准数据集（MNIST, CIFAR-10, TinyImageNet, SpeechCommands），论文未提供新的数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文附录提供了非常详细的超参数网格、训练调度、数据增强细节、构建配置和MCU测量方法。算法伪代码（Alg. 1 & 2）完整。但未提供具体的训练脚本、配置文件和检查点。
- 论文中引用的开源项目：论文引用了多个开源项目和基准，包括TensorFlow Lite Micro、CMSIS-NN、MLPerf Tiny、各种数据集（MNIST-C, CIFAR-10-C等）。主要依赖的工具链是厂商的MCU编译工具链和CMSIS-NN内核。
- 开源计划：论文中未提及除代码仓库外的进一步开源计划。

📌 **核心摘要**

这篇论文针对TinyML（微型机器学习）在资源受限微控制器上部署时缺乏高效不确定性估计方法的问题，提出了SNAP-UQ。其核心思想是在骨干网络的中间层插入少量轻量级（int8）预测头，利用当前层的低秩投影预测下一层激活的统计量（均值和方差），将实际激活与预测值之间的标准化误差（惊异度）作为逐层的不确定性信号，经聚合和轻量校准后得到最终不确定性分数。与需要多次前向传播（如MC Dropout、集成）或额外辅助分支的方法相比，SNAP-UQ实现了单次前向、无状态的推理，且仅增加数KB的Flash和少量计算。实验表明，在视觉（MNIST， CIFAR-10）和语音（SpeechCommands）任务上，SNAP-UQ在两种MCU上比早退集成和深度集成方法平均减少约40-60%的Flash占用和25-35%的延迟，同时在损坏流监控（检测精度下降）和故障检测（区分ID正确/错误、ID/OOD）任务上表现优异（例如，MNIST-C上AUPRC达0.66，SpeechCommands上ID✓-ID× AUROC达0.94），并在ID数据上改善了校准。其局限性在于依赖对中间激活的访问、对协方差结构的简化（对角/低秩）以及对层间预测器放置位置和秩的敏感性。

#

---

