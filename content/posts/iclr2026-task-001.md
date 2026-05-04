---
title: "ICLR 2026 - 图像生成 论文列表"
date: 2026-05-04
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
| 🥇 | [A Hidden Semantic Bottleneck in Conditional Embeddings of Di](/audio-paper-digest-blog/posts/2026-05-04-a-hidden-semantic-bottleneck-in-conditional) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [A Hidden Semantic Bottleneck in Conditional Embeddings of Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-04-a-hidden-semantic-bottleneck-in-conditional)

🔥 **8.5/10** | 前25% | #图像生成 | #扩散模型 | #多任务学习 #模型评估

👥 **作者与机构**

- 第一作者：Trung X. Pham（韩国科学技术院，KAIST）
- 通讯作者：Chang D. Yoo（韩国科学技术院，KAIST）
- 作者列表：Trung X. Pham（KAIST）、Kang Zhang（KAIST）、Ji Woo Hong（KAIST）、Chang D. Yoo（KAIST）

💡 **毒舌点评**

本文首次系统性地揭示了扩散Transformer条件嵌入中高达99%的角相似性和超过66%的维度冗余，这是一个反直觉且重要的发现，为模型压缩和条件机制设计指明了新方向。但遗憾的是，论文对“为何如此”的理论解释仍停留在假设阶段（如“训练动态导致稳定信号”），缺乏更深入的数学分析或机制性验证，使得这个精彩观察的理论深度打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文分析基于多个公开发布的预训练模型检查点（DiT， MDT， SiT， REPA， LightningDiT， MG， X-MDPT， MDSGen等），并指明使用其官方发布的XL/Large/B-Size模型。
- 数据集：分析所用数据集为公开的ImageNet-1K， DeepFashion， VGGSound。
- Demo：未提及。
- 复现材料：论文提供了详细的实验设置（如生成5000个样本，使用特定评估代码），关键超参数（剪枝阈值τ），以及大量的附录图表，为复现分析提供了充分信息。
- 论文中引用的开源项目：引用了被分析模型的官方代码仓库（如Peebles & Xie 2023对应DiT， Yu et al. 2025对应REPA等），以及评估工具（LightningDiT的评估代码）。

📌 **核心摘要**

这篇论文旨在解决对Transformer基扩散模型中条件嵌入（conditional embedding）结构理解不足的问题。方法核心是对多个SOTA扩散Transformer（如DiT， REPA等）的条件向量进行系统分析，揭示其普遍存在的“语义瓶颈”现象。与已有方法相比，本文是首个聚焦于条件嵌入内部结构（而非模型架构或训练目标）的系统性研究。主要实验结果表明：在ImageNet-1K类条件任务中，不同类别的条件向量余弦相似度超过99%；在连续条件任务（如姿态引导图像生成）中，相似度超过99.9%。同时，语义信息集中在约1-2%的高幅度维度（“头部”），其余维度（“尾部”）贡献极小。即使剪枝掉多达66%的尾部维度，生成质量（FID）和语义一致性（CLIP）也能保持甚至略有提升。实际意义在于揭示了当前条件编码方案存在巨大冗余，为设计更高效、更轻量的条件注入机制（如稀疏条件、更紧凑的嵌入）提供了实证依据和设计启示。主要局限性是论文提出的解释（如“AdaLN放大头部维度”、“抑制尾部噪声”）主要是假设和定性分析，缺乏定量验证或理论证明。

---

