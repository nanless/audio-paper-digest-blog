---
title: "ICLR 2026 - 神经网络架构 论文列表"
date: 2026-05-03
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
| 🥇 | [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured) | 8.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured)

🔥 **8.5/10** | 前10% | #神经网络架构 | #神经网络架构 | #音频生成 #音频分类

👥 **作者与机构**

- 第一作者：Saanjali Maharaj（多伦多大学）
- 通讯作者：Prasanth B. Nair（多伦多大学）
- 作者列表：Saanjali Maharaj（多伦多大学，saanjali.maharaj@mail.utoronto.ca）、Prasanth B. Nair（多伦多大学，prasanth.nair@utoronto.ca）

💡 **毒舌点评**

这篇论文最大的亮点在于将低秩张量分解的思想巧妙地转化为一种新型的神经网络架构，其“可学习乘积激活函数”的设计既优雅又强大，并在图像、音频、物理等多个领域展示了令人信服的SOTA结果和参数效率。然而，乘积结构不可避免地带来了反向传播时内存开销显著增大的挑战，论文虽讨论了优化策略，但在大规模高维任务上的实际可行性仍需观察；此外，其强大的理论保证依赖于目标函数具有“低阶交互”这一前提，对于交互关系极其复杂的数据，LRNN的优势可能会打折扣。

🔗 **开源详情**

- **代码**：提供代码仓库链接：https://github.com/dacelab/lrnn
- **模型权重**：论文中未明确提及是否公开预训练模型权重。
- **数据集**：论文中使用的数据集（ImageNet, DIV2K, LibriSpeech等）为公开数据集，但未提供自有数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了详细的超参数设置（见附录B-I）、消融研究、实现细节（如使用PyTorch，Adam优化器，LayerNorm等）。论文声称所有实验配置均可复现。
- **论文中引用的开源项目**：依赖PyTorch框架；基线模型如SIREN, SPDER, WIRE等的官方实现被用作对比。

📌 **核心摘要**

1. **要解决的问题**：现代神经网络受限于使用固定（如ReLU、Tanh）或手工设计的激活函数，难以自适应地学习针对任务特定的、复杂的特征交互，尤其是在需要捕获高阶乘积关系或宽频信号时表现不足。
2. **方法核心**：提出深度低秩分离神经网络（LRNN）。其核心创新是每个神经元使用一个“可学习乘积结构激活函数”，即该激活函数是多个独立可学习的单变量函数的乘积。这种结构天然地建模了输入特征间的乘积交互。
3. **新在哪里**：与MLP（特征加性组合，激活函数固定）和现有INR方法（如SIREN，激活函数固定但针对频域设计）不同，LRNN使每个神经元的非线性变换本身成为可学习的、且具有乘积形式的函数。这提供了更强的表达能力，能以更紧凑的模型捕获高阶交互和宽频谱。
4. **主要实验结果**：在多项基准测试中达到SOTA：
    - **图像表示**：在ImageNet 1000张图片上，以约20万参数训练的LRNN-SPDER在达到40dB PSNR的目标上成功率为100%，而SIREN和SPDER的成功率分别仅为1.8%和26.4%。
    - **音频表示**：在多个音频片段上，LRNN-SPDER的最终MSE比SIREN和SPDER低3-11倍。
    - **PDE求解**：在高频泊松方程上，一个16k参数的LRNN误差可比一个132k参数的SIREN低一个数量级。
    - **稀疏CT重建**：在50-100个投影下，LRNN重建的PSNR（29.13 dB）和SSIM（0.7455）均为最高，且无伪影。
5. **实际意义**：LRNN提供了一种通用、高效的神经网络构建模块，其独特的归纳偏置使其在信号表示、科学计算和医学成像等需要高保真、紧凑建模的场景中具有重要应用价值，有望降低CT辐射剂量、加速PDE求解。
6. **主要局限性**：乘积结构增加了训练时的内存消耗；理论分析（如缓解维度灾难）依赖于目标函数具有低阶ANOVA结构这一假设；架构中单个神经元的参数量（多个单变量网络）比标准神经元多，训练计算量可能更高。

---

