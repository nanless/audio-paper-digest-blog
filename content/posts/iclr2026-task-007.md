---
title: "ICLR 2026 - 扩散模型 论文列表"
date: 2026-05-03
draft: false
tags: ["扩散模型"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 扩散模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 扩散模型

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [A Hidden Semantic Bottleneck in Conditional Embeddings of Di](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [A Hidden Semantic Bottleneck in Conditional Embeddings of Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional)

✅ **7.0/10** | 前25% | #扩散模型 | #模型分析 | #生成模型 #条件生成

👥 **作者与机构**

- 第一作者：Trung X. Pham（Korea Advanced Institute of Science and Technology, KAIST）
- 通讯作者：Chang D. Yoo（Korea Advanced Institute of Science and Technology, KAIST）
- 作者列表：Trung X. Pham（Korea Advanced Institute of Science and Technology, KAIST）、Kang Zhang（未说明）、Ji Woo Hong（未说明）、Chang D. Yoo（Korea Advanced Institute of Science and Technology, KAIST）

💡 **毒舌点评**

首次系统性地解剖了DiT等主流扩散Transformer的条件嵌入，揭示了其“极端高相似度”与“极端稀疏性”并存的“语义瓶颈”现象，视角新颖；但对这一现象为何不影响生成质量、其机理的理论解释仍停留在假设阶段，深度有待挖掘。

🔗 **开源详情**

- 代码：论文中未提及分析代码的开源链接。
- 模型权重：论文使用并分析了多个模型的公开预训练权重，包括DiT、MDT、SiT、LightningDiT、MG、REPA、X-MDPT和MDSGen。论文在正文和附录中引用了这些模型的原始论文和GitHub仓库。
- 数据集：分析使用了标准的公开数据集：ImageNet-1K、DeepFashion、VGGSound。
- Demo：未提及。
- 复现材料：论文详细描述了分析的设置（计算所有条件向量的成对余弦相似度、参与比、剪枝实验的阈值等），并提供了丰富的图表和附录数据，有助于理解实验。但未提供可直接运行的脚本。
- 论文中引用的开源项目：主要依赖上述已列出的扩散Transformer模型的官方GitHub仓库。

📌 **核心摘要**

1.  要解决什么问题：研究基于Transformer的扩散模型（如DiT）中，用于条件注入的嵌入向量（由类别标签和时间步嵌入相加得到）的内部结构和语义编码机制。现有方法性能优异，但对此核心组件的理解是空白。
2.  方法核心是什么：对多个SOTA模型（DiT, MDT, SiT, REPA等）在ImageNet-1K及其它连续条件任务上的预训练权重进行系统性分析。主要分析其条件嵌入向量之间的余弦相似度、维度贡献度（参与比PR），并通过剪枝实验验证冗余性。
3.  与已有方法相比新在哪里：首次揭示了扩散Transformer条件嵌入的两个关键特性：(1) 不同类别的嵌入向量间余弦相似度极高（>99%），呈现极端对齐；(2) 语义信息高度集中在少数（约1-2%）高幅度维度（“头部”），而大部分维度（“尾部”）幅度接近零，极度稀疏。这与对比学习中的表征坍缩不同。
4.  主要实验结果如何：
    - 相似度：在6个SOTA的DiT变体上，类条件嵌入的平均余弦相似度从90.01%（DiT）到99.46%（REPA）不等；在连续条件任务（姿态引导、视频到音频）中，相似度超过99.9%。
    - 稀疏性：模型的归一化参与比（nPR）普遍很低。例如，MDT为1.60%，意味着有效维度仅约18维（总维度1152）。具体结果见下表：

| 模型 | 条件维度(d) | 参与比(PR, α) | 归一化参与比(nPR, αnorm) | 余弦相似度(Cos. Sim.) |
| :--- | :--- | :--- | :--- | :--- |
| DiT | 1152 | 120.69 | 10.47% | 0.9001 |
| SiT | 1152 | 26.25 | 2.28% | 0.9852 |
| MDT | 1152 | 18.45 | 1.60% | 0.9905 |
| LightningDiT | 1152 | 23.70 | 2.05% | 0.9779 |
| MG | 1152 | 19.98 | 1.73% | 0.9934 |
| REPA | 1152 | 17.67 | 1.53% | 0.9946 |
| X-MDPT | 1024 | 495.75 | 48.42% | 0.9998 |
| MDSGen | 768 | 104.22 | 13.57% | 0.9999 |

    - 剪枝效果：以REPA为例，当剪枝阈值τ=0.01（去除约38.94%的低幅度维度）时，FID从7.1694变为7.1690（初始剪枝）或7.1598（后期剪枝），CLIP分数甚至略有提升。这证明了大量尾部维度是冗余的。
5.  实际意义是什么：揭示了扩散Transformer条件编码的高度过参数化，为设计更高效、更紧凑的条件注入机制（如稀疏编码、降维）提供了理论依据和新视角，可能减少计算冗余。
6.  主要局限性是什么：论文对“为何高相似度和稀疏性不影响生成质量”的机理只提出了若干假设（如AdaLN放大头部维度、迭代过程放大细微差异），缺乏严格的理论证明或更深入的机制分析。

---

