---
title: "ICLR 2026 - 物种分布建模 论文列表"
date: 2026-05-04
draft: false
tags: ["物种分布建模"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 物种分布建模 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 物种分布建模

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecolog](/audio-paper-digest-blog/posts/2026-05-04-miam-modality-imbalance-aware-masking-for) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecological Applications](/audio-paper-digest-blog/posts/2026-05-04-miam-modality-imbalance-aware-masking-for)

🔥 **8.5/10** | 前25% | #物种分布建模 | #掩码学习 | #多模态模型 #生态AI

👥 **作者与机构**

- 第一作者：Robin Zbinden（EPFL）
- 通讯作者：Robin Zbinden（EPFL）
- 作者列表：Robin Zbinden（EPFL）、Wesley Monteith-Finas（EPFL）、Gencer Sumbul（EPFL）、Nina van Tiel（EPFL）、Chiara Vanalli（EPFL）、Devis Tuia（EPFL）

💡 **毒舌点评**

MIAM 巧妙地将动态掩码与模态不平衡感知相结合，为多模态学习中的“强者恒强”问题提供了一个优雅的解决方案，并在生态学这一数据天然不完整的领域取得了显著效果；但其在更广泛的多模态社区（如视觉-语言任务）中的普适性和与 SOTA 大模型的结合潜力尚待验证，且生态建模这一垂直场景的复杂度可能让非本领域读者感到入门门槛较高。

🔗 **开源详情**

*   代码：提供公开代码仓库链接：`https://github.com/zbirobin/MIAM`。
*   模型权重：提供公开的训练模型权重，托管在 HuggingFace：`https://huggingface.co/zbirobin/MIAM`。
*   数据集：使用的 GeoPlant 和 TaxaBench 均为公开数据集。论文提供了数据划分的具体 Python 代码（见附录图7、图8）。
*   Demo：论文中未提及在线演示。
*   复现材料：提供了极其详细的复现信息，包括：完整的模型架构描述（Transformer 层数、维度）、训练全流程超参数（优化器、学习率、batch size、epoch数）、数据预处理与划分方法、评估指标计算细节、所有基线方法的实现细节（如 OPM 的超参数设置），以及 MIAM 算法本身的所有参数（`κ`, `λ`）和调整逻辑。
*   引用的开源项目：论文依赖并提到了多个开源项目/代码库，如 `verde`（用于空间块划分）、`PyTorch`（隐含的深度学习框架）、预训练的图像/音频编码器（来自 TaxaBench 原始工作）。

📌 **核心摘要**

1. 要解决的问题：在生态学等多模态应用中，数据常因收集限制而不完整（缺失模态或模态内缺失），且不同模态间存在“不平衡”现象——主导模态会压制其他模态的学习，导致模型无法充分利用所有信息。
2. 方法核心：提出了模态不平衡感知掩码（MIAM），这是一种动态的训练时数据掩码策略。它首先将掩码策略形式化为在单位超立方体上的概率分布，然后设计了两个核心组件：一个基于Beta分布混合的“角优先”掩码分布，以探索所有可能的输入组合并强调关键配置；以及一个动态调整机制，根据每个模态的实时性能（sₘ）和学习速度（dₘ）计算“不平衡系数”（ρₛₘ， ρₔₘ），并据此调整掩码概率，更频繁地掩码那些性能已高且稳定的主导模态。
3. 与已有方法相比的新意：与传统的静态、均匀或基于简单模态丢弃的掩码策略不同，MIAM 是首个系统性地同时满足全支持（可处理任意输入子集）、角优先（强调全有/全无等极端情况） 和 不平衡感知（动态调整） 三个原则的掩码策略。它直接解决了现有方法（如 Dirichlet、OPM）未能充分探索输入组合空间且忽略学习动态的问题。
4. 主要实验结果：在两个生态数据集（GeoPlant 和 TaxaBench）的多标签/多类分类任务中，MIAM 在大多数输入子集上均显著优于所有基线方法。例如，在 GeoPlant 数据集上，MIAM 的平均 AUC 达到 86.1%，比第二好的基线（均匀掩码）高出 2.9%，尤其在主导模态（卫星图像）缺失或部分缺失的困难场景下提升巨大（如仅卫星图像中心块时从83.3%提升至89.5%）。在 TaxaBench 上，MIAM 的平均 Top-1 准确率达到 38.7%，同样领先。
5. 实际意义：该方法不仅提升了多模态生态模型在数据不完整情况下的预测准确性和鲁棒性，还使得通过掩码分析进行精细的贡献度归因成为可能（例如，识别出 NDVI（红光+近红外波段）和2003年欧洲热浪等关键生态信号），为生态学家提供了宝贵的洞见。
6. 主要局限性：MIAM 依赖于验证集上的模态性能分数来动态调整，这在无监督学习（SSL）等没有标签的场景下难以直接应用（论文中进行了初步探索但未完全解决）。此外，其核心优势在模态数量较多（≥3）且模态内存在多个token的场景下最为明显，对于简单的二模态问题提升有限。

---

