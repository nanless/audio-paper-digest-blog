---
title: "ICLR 2026 - 音频表示 论文列表"
date: 2026-05-03
draft: false
tags: ["音频表示"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频表示 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频表示

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured) | 9.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured)

🔥 **9.5/10** | 前10% | #音频表示 | #神经网络架构 | #音频生成 #信号处理

👥 **作者与机构**

- 第一作者：Saanjali Maharaj（多伦多大学）
- 通讯作者：Prasanth B. Nair（多伦多大学）
- 作者列表：Saanjali Maharaj（多伦多大学）、Prasanth B. Nair（多伦多大学）

💡 **毒舌点评**

这篇论文的最大亮点在于将低秩分离表示理论与深度学习巧妙结合，提出了通用且理论扎实的LRNN架构，在多个领域实现了全面超越现有SOTA的性能。然而，其代价是较高的计算成本（每个LRNN神经元需参数化多个独立的小MLP），以及在理论分析中对函数结构（如ANOVA分解衰减）存在较强假设，这限制了其在某些无此结构的极端任务上的泛化性。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/dacelab/lrnn。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：实验使用了公开数据集（ImageNet, DIV2K, LibriSpeech等），但论文未提供自有数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其充分的复现信息，包括：完整的架构规格、所有实验的超参数设置、训练流程、优化器选择、学习率调度策略、LayerNorm使用细节、分量函数的具体MLP结构，以及所有消融实验的详细配置。附录(B-I)包含了大量实现细节。
- 论文中引用的开源项目：主要引用了SIREN、SPDER、WIRE、KAN等基线模型的代码/方法进行对比；框架依赖于PyTorch和Adam优化器。

📌 **核心摘要**

1.  问题：现代神经网络严重依赖固定的激活函数（如ReLU），这限制了其适应特定任务结构和高效捕获高阶交互的能力。
2.  方法核心：提出了深度低秩分离神经网络（LRNN），其核心是为每个神经元设计可学习的乘积结构激活函数。该激活函数通过对输入进行线性投影，再由多个独立的、可学习的单变量函数进行乘性组合构成。
3.  创新点：与之前方法（固定激活或可学习加法结构如KAN）相比，LRNN的乘性结构能更高效地捕获高阶交互；同时提供了理论保证（通用逼近、抗维度诅咒、自适应谱偏差控制）。
4.  主要实验结果：在多项任务上取得SOTA：
    *   图像表示：在ImageNet 1000张图像上，以约200k参数实现40dB PSNR目标的100%成功率，远超SIREN和SPDER（成功率分别为1.8%和26.4%）。如图4所示。
    *   音频表示：在多个音频数据集上，最终MSE比基线低3-11倍，且频谱保真度更高。关键数据见下表：
        | 方法 | MSE Loss (×10⁻⁴) bach | counting | reggae | reading |
        | :--- | :--- | :--- | :--- | :--- |
        | SIREN | 1.21(0.28) | 2.77(0.56) | 21.5(6.3) | 9.98(1.57) |
        | SPDER | 1.12(0.05) | 2.29(0.55) | 24.8(7.7) | 8.88(2.45) |
        | LRNN-SPDER | 0.10(0.01) | 0.72(0.03) | 7.93(0.11) | 1.86(0.30) |
    *   PDE求解：在高频泊松方程上，以16k参数达到132k参数SIREN的误差水平（参数减少8倍），误差比KAN低100-1000倍。如图8所示。
    *   CT重建：在稀疏视角CT重建任务中，PSNR达到29.13 dB，SSIM达到0.7455，重建图像无伪影，优于所有基线。
5.  实际意义：LRNN提供了一个通用的、具有强大理论保证的深度学习构建模块，可显著提升需要紧凑高效表示的任务性能，如医疗成像（减少辐射）、科学计算和隐式神经表示。
6.  主要局限性：反向传播需要存储中间乘积项，导致比标准MLP更高的内存开销（论文提供了优化策略）；理论分析对目标函数的低秩结构有假设。

---

