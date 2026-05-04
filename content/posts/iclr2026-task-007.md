---
title: "ICLR 2026 - 序列解耦 论文列表"
date: 2026-05-04
draft: false
tags: ["序列解耦"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 序列解耦 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 序列解耦

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DiffSDA: Unsupervised Diffusion Sequential Disentanglement A](/audio-paper-digest-blog/posts/2026-05-04-diffsda-unsupervised-diffusion-sequential) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [DiffSDA: Unsupervised Diffusion Sequential Disentanglement Across Modalities](/audio-paper-digest-blog/posts/2026-05-04-diffsda-unsupervised-diffusion-sequential)

🔥 **8.0/10** | 前25% | #序列解耦 | #扩散模型 | #自监督学习 #多模态模型

👥 **作者与机构**

- 第一作者：Hedi Zisling (Ben-Gurion University)
- 通讯作者：Omri Azencot (Ben-Gurion University)
- 作者列表：Hedi Zisling (Ben-Gurion University)、Ilan Naiman (Ben-Gurion University)、Nimrod Berman (Ben-Gurion University)、Supasorn Suwajanakorn (VISTEC)、Omri Azencot (Ben-Gurion University)

#

💡 **毒舌点评**

论文的亮点在于其理论框架的优雅和实验的全面性，首次为序列解耦任务提供了基于扩散模型的统一概率视角，并在多个真实数据集上取得了令人信服的改进。短板在于，模型本质上是逐帧生成的，这可能限制了其对视频时空连贯性的建模能力，论文虽提到此局限，但未提供解决方案；此外，其“模态无关”的通用性虽被强调，但针对音频/语音的架构改动（仅为MLP）可能未能充分利用语音信号的内在结构（如时频相关性）。

#

🔗 **开源详情**

- 代码：论文提供了GitHub代码仓库链接：https://github.com/azencot-group/DiffSDA。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：论文使用了多个公开数据集（MUG, TaiChi-HD, VoxCeleb, CelebV-HQ, TIMIT, LibriSpeech, PhysioNet, ETTh1, Air Quality），并说明了预处理方式。未创建新数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详尽的超参数表（Tab. 6, 7, 8）、网络架构细节、训练算法（Algorithm 1, 2）以及关键组件的消融实验设置，复现信息非常充分。
- 论文中引用的开源项目：引用了EDM采样器、VQ-VAE（来自Rombach et al., 2022）、人脸检测器（来自Bulat & Tzimiropoulos, 2017）、人体姿态估计器（来自Cao et al., 2017）、VGG-FACE人脸识别框架（来自Serengil & Ozpinar, 2020）等开源工具。

📌 **核心摘要**

1. 要解决什么问题：论文旨在解决无监督序列解耦（Sequential Disentanglement）问题，即在不使用标签的情况下，将序列数据（如视频、音频、时间序列）分解为静态不变因子（如身份、外观）和动态时变因子（如动作、内容）。现有方法大多基于VAE和GAN，存在优化复杂、损失项多、在真实数据上效果差等挑战。
2. 方法核心是什么：提出了DiffSDA（Diffusion Sequential Disentanglement Autoencoder），一个基于扩散模型的全新概率框架。其核心是用两个扩散过程建模联合分布：一个处理潜在的静态和动态因子，另一个处理观测数据（序列）对这些因子的依赖。模型通过一个顺序语义编码器提取静态和动态因子，并用一个条件化的随机解码器（基于EDM采样器）进行去噪重构。整个模型仅用一个统一的扩散损失项进行优化。
3. 与已有方法相比新在哪里：a) 理论新：首次为序列解耦建立了基于扩散模型的概率建模框架。b) 模型新：静态与动态因子被建模为相互依赖（Dependent），而非独立，提升了表达能力；损失函数单一，避免了复杂的超参调优。c) 能力新：实现了真正的模态无关（Modal-agnostic），通过简单替换骨干网络即可处理视频、音频和时间序列；并首次展示了强大的零样本跨数据集解耦迁移能力。
4. 主要实验结果如何：论文在三大领域（视频、音频、时间序列）的多个基准数据集上进行了评估。关键结果如下表所示：
| 任务/数据集 | 指标 | SPYL (SOTA) | DBSE (SOTA) | Ours (DiffSDA) |
| :--- | :--- | :--- | :--- | :--- |
| 条件交换-视频 | | | | |
| CelebV-HQ (256x256) | AED↓ (静态冻结) | 0.631 | 0.751 | 0.540 |
| | AKD↓ (动态冻结) | 39.16 | 28.69 | 6.932 |
| VoxCeleb (256x256) | AKD↓ (动态冻结) | 4.705 | 10.96 | 2.793 |
| 说话人验证-音频 | | | | |
| TIMIT | Static EER↓ | 3.41% | 3.50% | 4.43% |
| | Dynamic EER↑ | 33.22% | 34.62% | 46.72% |
| | Dis. Gap↑ | 29.81% | 31.11% | 42.29% |
| 时间序列预测 | | | | |
| PhysioNet | AUPRC↑ | 0.37 | 0.47 | 0.50 |
| | AUROC↑ | 0.76 | 0.86 | 0.87 |
| ETTh1 | MAE↓ | 12.2 | 11.2 | 9.89 |
| 生成质量 | | | | |
| VoxCeleb | FVD↓ | 582.28 | 1076.44 | 65.23 |
表格显示，DiffSDA在大多数定量指标上显著优于之前的SOTA方法，尤其在生成质量（FVD）和视频动态交换（AKD）上优势巨大。此外，论文首次展示了在未见过的数据集（如用VoxCeleb训练，在MUG上测试）上的零样本解耦交换（如图2、图4所示），并证明了通过对解耦表示进行PCA可进一步发现多个可解释的因子（如性别、肤色，如图2右侧所示）。
5. 实际意义是什么：该工作为处理序列数据提供了一个统一、强大的无监督解耦框架。其模态无关特性使其可广泛应用于视频分析、语音处理（如说话人匿名化、风格迁移）、时间序列分析等领域。高质量的生成和解耦能力有望促进可控内容生成和可解释表示学习的发展。
6. 主要局限性是什么：a) 生成效率与质量：模型本质上是逐帧生成（尽管使用了LDM），可能限制了视频的长期时空连贯性。b) 架构通用性与专用性的权衡：虽然“模态无关”，但为适应不同模态仅修改骨干网络（如MLP）可能未充分利用语音等模态的先验知识。c) 评估：在MUG数据集上的传统分类器评估指标上，优势不如其他数据集明显，表明在某些特定设置下，其相对提升可能有限。

#

---

