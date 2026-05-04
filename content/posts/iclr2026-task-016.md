---
title: "ICLR 2026 - 神经网络架构 论文列表"
date: 2026-05-04
draft: false
tags: ["神经网络架构"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 神经网络架构 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 神经网络架构

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-04-deep-learning-with-learnable-product-structured) | 8.0分 | 前10% |

---

## 📋 论文详情

### 🥇 [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-04-deep-learning-with-learnable-product-structured)

🔥 **8.0/10** | 前10% | #神经网络架构 | #神经网络架构 | #隐式神经表示 #深度学习理论

👥 **作者与机构**

- 第一作者：Saanjali Maharaj（University of Toronto）
- 通讯作者：Prasanth B. Nair（University of Toronto）
- 作者列表：Saanjali Maharaj（University of Toronto）、Prasanth B. Nair（University of Toronto）

💡 **毒舌点评**

亮点在于LRNN架构将低秩函数分解思想巧妙地引入深度学习，其理论分析严谨（证明了通用逼近和维度诅咒缓解），并且实验设计得极为全面，从ImageNet图像到PDE求解，几乎“打穿”了隐式表示领域的主流基准。短板则是，尽管架构思想优美，但其每个“神经元”内部实际嵌套了一个小型MLP（用于参数化一元函数），这无疑显著增加了计算复杂度和训练时间，论文在性能与效率的权衡上讨论稍显不足，可能限制其在大规模实时应用中的部署。

🔗 **开源详情**

- 代码：论文明确提供了公开的代码仓库链接：https://github.com/dacelab/lrnn。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用了公开的数据集（ImageNet, DIV2K, GTZAN, LibriSpeech等），但论文中未说明是否提供处理后的特定任务数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其详尽的复现信息，包括：
    - 所有实验的具体超参数设置（学习率、调度器、模型尺寸等）。
    - 架构的实现细节（如组件MLP的结构、LayerNorm的使用、方差控制缩放）。
    - 各类消融研究的设计和结果。
    - 训练硬件信息（单张RTX 4090 GPU）。
- 论文中引用的开源项目：论文依赖并对比了多个开源基准模型，包括SIREN、SPDER、WIRE、Gaussian Activated Networks等的官方实现。其实现基于PyTorch框架。

📌 **核心摘要**

1.  问题：现代神经网络受限于固定激活函数，难以自适应地捕捉任务特定的高阶交互结构，且在表示高频信号时存在频谱偏差。
2.  方法核心：提出“深度低秩分离神经网络”（LRNN）。其核心是每个神经元使用一个可学习的乘积结构激活函数，即多个可学习的一元变换的乘积，而非传统的固定标量激活。
3.  新意：与传统MLP和固定激活的INR方法相比，LRNN的激活函数是高度灵活且数据依赖的，能自然地通过乘法合成丰富的频谱成分。该架构是标准MLP的推广，并建立了与低秩函数分解的理论联系。
4.  主要实验结果：LRNN在多个任务上达到SOTA。在图像表示上，对1000张ImageNet图像达到40dB PSNR的成功率为100%，远超SIREN（1.8%）和SPDER（26.4%）。在音频表示上，MSE比基线低3-11倍。在PDE求解上，用SIREN 1/8的参数量实现同等或更低误差。在稀疏视图CT重建中，获得最高PSNR（29.13 dB）和SSIM（0.7455），且无伪影。
5.  实际意义：提供了一种通用、表达能力强且理论清晰的神经网络构建模块，能显著提升信号表示、科学计算和成像任务的性能，有助于减少医疗CT的辐射剂量。
6.  主要局限性：其反向传播需要存储中间乘积项，导致内存占用高于标准MLP；架构增加了每层的计算复杂度；虽然提供了消融实验，但对于如何在不同任务中最优地设置超参数（如分离秩r和投影宽度\(\bar{d}\)）的指导不够充分。

---

