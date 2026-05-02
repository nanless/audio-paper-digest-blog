---
title: "ICLR 2026 - 生成模型 论文列表"
date: 2026-05-03
draft: false
tags: ["生成模型"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 生成模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 生成模型

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [A Hidden Semantic Bottleneck in Conditional Embeddings of Di](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [A Hidden Semantic Bottleneck in Conditional Embeddings of Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional)

✅ **7.0/10** | 前25% | #生成模型 | #扩散模型 | #模型效率 #图像生成

👥 **作者与机构**

- 第一作者：Trung X. Pham (Korea Advanced Institute of Science and Technology (KAIST))
- 通讯作者：Chang D. Yoo (Korea Advanced Institute of Science and Technology (KAIST))
- 作者列表：Trung X. Pham (Korea Advanced Institute of Science and Technology (KAIST)), Kang Zhang (Korea Advanced Institute of Science and Technology (KAIST)), Ji Woo Hong (Korea Advanced Institute of Science and Technology (KAIST)), Chang D. Yoo (Korea Advanced Institute of Science and Technology (KAIST))

💡 **毒舌点评**

亮点：这篇论文用近乎“显微镜”式的分析，揭开了扩散Transformer条件嵌入中一个令人惊讶的“皇帝的新衣”——高达99%的向量维度都是冗余的噪音。其跨模型、跨任务的系统性验证，为“条件注入到底在编码什么”这个基本问题提供了迄今最实锤的观察数据。短板：然而，论文更像是一份详尽的“体检报告”而非“治病良方”。对于“为何会形成这种极端稀疏且高对齐的结构”这一核心机制，解释多停留在经验性假设层面，缺乏深入的理论推导或生成机制层面的证明，让人感觉答案只给了一半。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文使用了多个公开发布的预训练模型权重（DiT, MDT, SiT, REPA, LightningDiT, MG, X-MDPT, MDSGen），但未提及将开源其分析或剪枝后的模型。
- 数据集：使用ImageNet-1K， DeepFashion， VGGSound等公开数据集，未提及开源新数据集。
- Demo：未提及。
- 复现材料：论文附录提供了详细的分析设置、更多可视化结果和消融实验，有助于复现其分析过程。
- 论文中引用的开源项目：论文引用了众多开源项目/模型，如DiT, MDT, SiT, REPA, LightningDiT, MG, X-MDPT, MDSGen等作为其分析对象。

📌 **核心摘要**

这篇论文旨在解决扩散Transformer（DiT）中条件嵌入（Conditional Embeddings）的内部结构与编码效率不清晰的问题。通过对多个主流DiT模型（如DiT, MDT, SiT, REPA等）在ImageNet分类、姿态引导生成和视频到音频生成任务上的系统分析，作者发现了两个核心现象：1) 条件向量表现出极端的角相似度（类别条件>99%，连续条件>99.9%）；2) 语义信息高度集中在少量高幅值维度上（即“头部维度”），而绝大多数维度幅值接近零（即“尾部维度”）。与已有工作相比，新在于首次系统量化了扩散Transformer条件嵌入的这种“高冗余度与低有效维度”特性，并证明这并非对比学习中的表示坍缩。主要实验结果表现在，当剪枝掉高达66%的尾部低幅值维度后，生成质量（FID, IS, CLIP）基本保持不变，甚至有所提升（例如，REPA模型在剪枝66.21%维度后，FID从7.169变为9.220，但剪枝38.94%维度时FID可维持在7.169）。论文还通过方差分析和t-SNE可视化，直观展示了头部维度是类间可区分性的主要来源。实际意义在于，该发现揭示了DiT条件编码存在严重的过度参数化，为设计更高效、更轻量的条件注入机制（如直接使用稀疏编码）提供了直接依据和优化路径。主要局限性在于，论文对造成这种极端稀疏性和相似性的根本机理（如优化动力学、AdaLN的影响）的解释尚属假说，缺乏更深入的理论证明。

---

