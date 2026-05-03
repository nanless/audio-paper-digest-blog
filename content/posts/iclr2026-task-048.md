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
| 🥇 | [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-03-deep-learning-with-learnable-product-structured)

✅ **7.5/10** | 前25% | #音频表示 | #可学习激活函数 #低秩分解 | #可学习激活函数 #低秩分解

👥 **作者与机构**

-   第一作者：Saanjali Maharaj (University of Toronto)
-   通讯作者：Prasanth B. Nair (University of Toronto)
-   作者列表：Saanjali Maharaj (University of Toronto)、Prasanth B. Nair (University of Toronto)

💡 **毒舌点评**

亮点在于论文**将函数逼近论中经典的低秩分离表示思想成功“现代化”并融入深度学习框架**，其理论支撑扎实，实验在多个高价值任务上展示了碾压式性能提升。短板是，这种基于乘积的新架构在**计算效率和内存占用上存在固有挑战**（论文已承认），且其通用威力在更广泛的AI任务（如NLP、大规模分类）上的验证仍显不足，更像是一个为特定问题（连续信号表示）量身定做的“超级工具”。

🔗 **开源详情**

-   **代码**：提供代码仓库链接 `https://github.com/dacelab/lrnn`。
-   **模型权重**：论文未提及提供预训练模型权重。
-   **数据集**：实验所用数据集（如ImageNet子集、DIV2K、特定音频片段）均为公开或标准数据集，但论文未说明具体获取方式。
-   **Demo**：论文未提及提供在线演示。
-   **复现材料**：论文在附录B-I中提供了极其详细的实现细节、超参数设置、训练策略和消融研究设计。
-   **引用的开源项目**：论文基于PyTorch框架，并引用了SIREN、SPDER、WIRE等作为对比基线，暗示其代码可能部分参考或复现了这些项目。

📌 **核心摘要**

1.  **要解决什么问题**：现代神经网络受限于固定的激活函数（如ReLU），难以自适应地学习任务特定的表示结构，特别是在捕捉高阶交互和缓解高维函数逼近的“维度灾难”方面存在不足。
2.  **方法核心是什么**：提出“深度低秩分离神经网络”。其核心是用一个**可学习的、由多个单变量函数乘积构成的激活函数**，取代传统的固定激活函数。这使得每个神经元能独立学习一个高度灵活、数据依赖的非线性变换，并自然捕获输入特征间的乘性交互。
3.  **与已有方法相比新在哪里**：与使用固定或简单可学习激活（如Maxout）的MLP不同，LRNN的激活函数本身是高维的、结构化的（乘积形式）。与Kolmogorov-Arnold Networks等同样学习激活函数的方法相比，LRNN通过乘积结构和缩放因子实现了更稳定、高效的优化，并具有明确的理论优势（缓解维度灾难）。
4.  **主要实验结果如何**：LRNN在多个领域取得显著提升：
    *   **图像表示**：在1000张ImageNet图像上，LRNN以100%的成功率达到了40 dB的PSNR目标，而SIREN和SPDER的成功率分别仅为1.8%和26.4%。
    *   **音频表示**：在4个音频片段上，LRNN的MSE相比SIREN和SPDER降低了3到11倍。
    *   **PDE求解**：在高频Poisson方程上，一个16k参数的LRNN达到了与132k参数SIREN相当甚至更好的精度（误差降低最高达1000倍）。
    *   **稀疏CT重建**：在50-100个投影角度下，LRNN实现了无伪影重建，PSNR（29.13 dB）和SSIM（0.7455）均优于所有基线。
5.  **实际意义是什么**：LRNN提供了一种新的、强大的神经网络基础模块。它对于需要高保真信号表示的任务（如科学计算、医学成像、计算机图形学）具有直接价值，能以更少的参数实现更高的精度。
6.  **主要局限性是什么**：论文承认，LRNN的乘积结构在训练时的反向传播过程中会产生较高的内存开销，需要额外的优化策略（如梯度检查点）。此外，虽然论文在分类任务上做了初步验证，但其在大规模通用视觉/语言任务上的泛用性和效率仍需进一步检验。

---

