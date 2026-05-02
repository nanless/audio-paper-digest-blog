---
title: "ICLR 2026 - 信号表示 论文列表"
date: 2026-05-03
draft: false
tags: ["信号表示"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 信号表示 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 信号表示

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured)

🔥 **8.5/10** | 前25% | #信号表示 | #神经网络架构 #低秩分解 | #神经网络架构 #低秩分解

👥 **作者与机构**

- 第一作者：Saanjali Maharaj（多伦多大学）
- 通讯作者：Prasanth B. Nair（多伦多大学）
- 作者列表：Saanjali Maharaj（多伦多大学）、Prasanth B. Nair（多伦多大学）

💡 **毒舌点评**

亮点： 论文提出了极具巧思的LRNN架构，用“乘积结构激活”将低秩分解思想从压缩转向表达，并给出了扎实的理论分析（如缓解维度诅咒），在图像/音频/PDE等多个信号表示任务上实现了肉眼可见的、对SIREN等方法的全面碾压，复现代码已开源。
短板： 论文在公平对比上略显“鸡贼”，主要与SIREN/SPDER对比，而未与同为可学习激活的KANs进行公平的参数量对比（仅引用了KANs论文的结果，且声称KANs参数未知），且理论定理成立的前提假设较强，对于不具备“低阶ANOVA分解”特性的函数，其优势可能不明显。此外，乘积结构带来的内存占用挑战虽被提及，但未在实验中充分量化和解决。

🔗 **开源详情**

- 代码：论文提供了完整的开源代码仓库链接：https://github.com/dacelab/lrnn。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：实验中使用的数据集（如ImageNet, DIV2K, GTZAN, LibriSpeech, CT数据）为公开数据集，论文未提供新的数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详尽的附录（B-I节），���含架构规格、所有实验的超参数、训练细节、消融研究设置，复现信息充分。
- 引用的开源项目：论文实现基于PyTorch，并引用了Adam优化器。代码库可能依赖于其他开源工具，但论文正文未具体列出依赖项。

📌 **核心摘要**

1.  要解决什么问题：现代神经网络的固定激活函数（如ReLU、Tanh）限制了其自适应捕获高阶交互的能力，并存在谱偏差问题，难以高效表示复杂信号。
2.  方法核心：提出深度低秩分离神经网络（LRNNs）。其核心是为每个神经元设计可学习的乘积结构激活函数。该函数由多个可学习的一维分量函数的乘积构成，能自动合成丰富的频率分量。
3.  与已有方法相比新在哪里：相较于标准MLP（固定激活，加法合成频率）和专门设计的INR激活（如SIREN，固定但可调频率），LRNNs首次实现了激活函数本身的结构化、数据驱动学习。其乘积结构在表达高阶交互和合成复杂频谱方面具有内在效率。
4.  主要实验结果：
    *   图像表示：在1000张ImageNet图像上，LRNN-SPDER以~200k参数达到40dB PSNR的成功率为100%，而SIREN和SPDER分别仅为1.8%和26.4%。在摄像机图像上，LRNN-SPDER达到107.9 dB PSNR，远超SPDER的49.0 dB。
    *   音频表示：在4个音频片段上，LRNN-SPDER的MSE比SIREN和SPDER低3-11倍，频率保真度更高（如下表）。
        | 方法 | bach MSE (×10⁻⁴) | counting MSE (×10⁻⁴) | reggae MSE (×10⁻⁴) | reading MSE (×10⁻⁴) |
        |---|---|---|---|---|
        | SIREN | 1.21 | 2.77 | 21.5 | 9.98 |
        | SPDER | 1.12 | 2.29 | 24.8 | 8.88 |
        | LRNN-SPDER | 0.10 | 0.72 | 7.93 | 1.86 |
    *   PDE求解：在高频泊松方程上，16k参数的LRNN比132k参数的SIREN误差更低（频率n=2时），并比KANs低100-1000倍。
    *   CT重建：在稀疏视角CT重建任务中，LRNN以~180k参数达到最高PSNR（29.13 dB）和SSIM（0.7455），并生成无伪影的更清晰图像。
5.  实际意义：为信号表示（图像、音频、PDE）提供了一种更强大、参数更高效的表征工具。在医学成像（减少CT辐射剂量）和科学计算（高效求解PDE）领域具有直接应用价值。
6.  主要局限性：理论定理依赖于函数具有低秩/可分结构假设；乘积结构可能导致更高的内存占用和训练开销（尽管论文提出了优化思路）；在分类等非表示任务上的潜力尚未充分探索。

---

