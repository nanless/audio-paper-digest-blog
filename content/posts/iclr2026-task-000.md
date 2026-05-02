---
title: "ICLR 2026 - 信号表示与重建 论文列表"
date: 2026-05-03
draft: false
tags: ["信号表示与重建"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 信号表示与重建 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 信号表示与重建

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured) | 9.0分 | 前10% |

---

## 📋 论文详情

### 🥇 [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured)

🔥 **9.0/10** | 前10% | #信号表示与重建 | #神经网络架构 | #可学习激活函数 #低秩表示

👥 **作者与机构**

- 第一作者：Saanjali Maharaj（University of Toronto）
- 通讯作者：Prasanth B. Nair（University of Toronto）
- 作者列表：Saanjali Maharaj（University of Toronto）、Prasanth B. Nair（University of Toronto）

💡 **毒舌点评**

这篇论文巧妙地将“低秩函数分解”这个经典数学工具“魔改”成了深度学习里的可学习激活函数，理论上既有普遍近似定理撑腰，又号称能破解维度灾难，实验上更是在图像、音频、CT重建等多个“硬骨头”任务上把SIREN等知名模型按在地上摩擦，堪称“优雅且暴力”。然而，乘积结构带来的计算和内存开销在附录里也坦然承认了，其单次迭代时间并不占优，这在追求极致训练效率的场景下可能是个绊脚石，而且对于简单任务可能有些“杀鸡用牛刀”。

🔗 **开源详情**

- 代码：论文提供了公开代码仓库：https://github.com/dacelab/lrnn。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：实验中使用的部分数据集（如ImageNet, LibriSpeech）是公开的，但部分（如特定PDE测试函数、DIV2K）可能需要根据论文描述自行生成或获取。论文未提供打包数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其详细的复现材料，包括：所有实验的完整架构规格、超参数（在附录B-I和第4节中详述）、训练过程、优化器设置、学习率调度策略。代码仓库应包含实现这些设置的代码。
- 论文中引用的开源项目：论文实现基于PyTorch，并引用了多个基准模型的官方实现或设置，如SIREN、SPDER、WIRE、KAN（用于对比）。

📌 **核心摘要**

1. 要解决什么问题：现代神经网络严重依赖固定的激活函数（如ReLU），这限制了其适应任务特定结构和高效捕获高阶交互的能力，尤其在需要高保真信号表示的隐式神经表示等领域存在频谱偏置等瓶颈。
2. 方法核心是什么：提出了一种名为深度低秩分离神经网络（LRNN）的新架构。其核心是为每个神经元设计可学习的“乘积结构激活函数”：将输入线性投影到多个维度后，每个维度通过一个可学习的一元函数进行变换，最终将这些变换结果相乘，从而生成高度灵活的、数据依赖的非线性激活。
3. 与已有方法相比新在哪里：1) 架构层面：LRNN泛化了MLPs，将固定的标量激活函数替换为可学习的向量到标量的乘积映射，能自然捕获乘积交互。2) 理论层面：为LRNNs建立了普遍近似定理，并证明了其能缓解具有衰减ANOVA结构的函数的维度灾难，以及通过组合频率合成自适应控制频谱偏置。3) 性能层面：在多个基准上，LRNN用更少参数实现了远超现有SOTA（如SIREN, SPDER）的性能。
4. 主要实验结果如何：在多个任务上取得SOTA：a) 图像表示：在1000张ImageNet图像上，LRNN以~200k参数达到40dB PSNR的100%成功率，而SIREN和SPDER的成功率分别仅为1.8%和26.4%（见下表）。b) 音频表示：MSE比基线低3-11倍。c) PDE求解：以8倍参数缩减超越SIREN，误差比KANs低100-1000倍。d) 稀疏CT重建：获得无伪影重建，PSNR达29.13dB，优于所有基线（见下表）。
    | 模型 | PSNR (dB) | SSIM |
    |---|---|---|
    | LRNN | 29.13 | 0.7455 |
    | WIRE | 28.83 | 0.6413 |
    | Gauss | 27.84 | 0.6855 |
    | SIREN | 27.46 | 0.6877 |
    | ReLU | 26.89 | 0.6341 |
5. 实际意义是什么：LRNNs提供了一种强大的、具有独特归纳偏置的构建块，能够在紧凑的参数下学习极具表达力的表示。这对于需要高保真信号重建（如医学成像、计算机图形学）和高效求解高维PDE的科学计算领域具有重要应用价值。
6. 主要局限性是什么：1) 论文中提到，其反向传播由于需要存储中间乘积结果，内存占用高于标准MLPs，尽管提出了融合等优化策略。2) 每迭代时间（wall-clock time）在某些任务上高于部分基线模型（如SIREN），尽管它达到高目标质量的速度更快。

---

