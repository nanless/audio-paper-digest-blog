---
title: "ICLR 2026 - 图像生成 论文列表"
date: 2026-05-03
draft: false
tags: ["图像生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 图像生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 图像生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers) | 7.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers)

✅ **7.0/10** | 前50% | #图像生成 | #扩散模型 | #流匹配 #音频生成

👥 **作者与机构**

- 第一作者：Yasaman Haghighi（Ecole Polytechnique Fédérale de Lausanne (EPFL)）
- 通讯作者：未明确说明（论文共同作者列表，通讯邮箱未单独指定）
- 作者列表：Yasaman Haghighi（EPFL）、Bastien van Delft（EPFL）、Mariam Hassan（EPFL）、Alexandre Alahi（EPFL）

💡 **毒舌点评**

亮点：方法极其简洁优雅——用模型自己的“强层”教“弱层”，无需任何外部监督或额外前向传播，实现了“无成本”加速，且在音频、视频等多个领域表现出泛化能力，实用性很强。短板：论文对“为何层间存在显著质量差异”以及“为何此对齐能引发良性循环”的机理分析仍停留在经验观察和假设层面，缺乏更深入的理论或可视化解释，使其更像是一个工程上的“妙招”而非一个被深刻理解的现象。

🔗 **开源详情**

-   代码：论文明确承诺将开源代码仓库（https://github.com/vita-epfl/LayerSync.git），是。
-   模型权重：论文未提及是否公开预训练好的模型权重。
-   数据集：实验使用的均为公开数据集（ImageNet, MTG-Jamendo, HumanML3D, CLEVRER, MixKit）。
-   Demo：论文中未提及在线演示。
-   复现材料：提供了详尽的训练细节（附录L, M）、超参数设置表（表18, 19）、模型配置（表20）、评估指标细节（附录O），复现信息充分。
-   论文中引用的开源项目：主要依赖SiT (Ma et al., 2024) 的代码库和设置，以及Stable Diffusion VAE、Stable Audio Open VAE等。
-   总体而言，论文的开源承诺和复现细节非常到位。

📌 **核心摘要**

1.  要解决什么问题：依赖大型外部预训练模型（如DINOv2， VLM）来指导扩散模型中间表示以加速训练的方法，存在计算开销大、跨模态普适性差的问题。
2.  方法核心是什么：提出LayerSync，一个即插即用的自监督正则化方法。其核心是利用扩散模型内部表示质量的层次性（深层语义更丰富），通过最大化模型自身“弱”浅层与“强”深层特征之间的相似度（如余弦相似度），实现内部自对齐。
3.  与已有方法相比新在哪里：它是首个完全自包含、无额外计算开销的层间对齐方法。不同于依赖外部特征（REPA, REED）或需要额外EMA前向传播（SRA）的方法，LayerSync完全基于模型自身的前向传播，且计算成本极低（线性复杂度）。
4.  主要实验结果如何：在ImageNet 256x256上，使SiT-XL模型训练加速8.75倍（FID达到8.29仅需160 epochs），最终FID相比基线提升23.6%（6.87 vs 8.99）。在音频（MTG-Jamendo FAD提升21%）、运动生成（HumanML3D FID提升7.7%）和视频生成（CLEVRER FVD提升54.7%）任务上也有效。消融实验表明其对层选择鲁棒，且性能优于单纯增大学习率。
    *   ImageNet FID对比（部分关键数据）：
| 模型 | Epochs | FID↓ |
| :--- | :--- | :--- |
| SiT-XL/2 (基线) | 800 | 8.99 |
| SiT-XL/2 + Dispersive | 800 | 8.08 |
| SiT-XL/2 + LayerSync | 800 | 6.87 |
| SiT-XL/2 (SDE采样) | 1400 | 8.3 |
| SiT-XL/2 + LayerSync (SDE) | 800 | 6.32 |

    *   其他模态结果：
| 任务 | 数据集 | 基线指标 | +LayerSync指标 | 提升 |
| :--- | :--- | :--- | :--- | :--- |
| 音频生成 | MTG-Jamendo | FAD: 0.251 (650ep) | 0.199 | 20.7% |
| 人体运动生成 | HumanML3D | FID: 0.5206 | 0.4801 | 7.7% |
| 视频生成(微调) | MixKit | FVD: 321.84 | 304.68 | - |
| 视频生成(训练) | CLEVRER | FVD: 265.50 | 120.13 | 54.7% |

5.  实际意义是什么：提供了一种简单、低成本、即插即用的训练加速和质量提升方案，可无缝集成到现有的扩散/流模型训练流程中，尤其利于资源受限或缺乏大规模外部预训练模型的领域（如音频、运动）。
6.  主要局限性是什么：对层间质量差异的成理机制和对齐过程的“良性循环”假说缺乏深入理论分析；性能虽优于同类自监督方法，但仍略低于最强的依赖外部模型的方法（如REPA*）。

---

