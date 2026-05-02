---
title: "ICLR 2026 - 概念提取 论文列表"
date: 2026-05-03
draft: false
tags: ["概念提取"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 概念提取 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 概念提取

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-03-the-deleuzian-representation-hypothesis) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-03-the-deleuzian-representation-hypothesis)

✅ **7.5/10** | 前25% | #概念提取 | #聚类 | #无监督学习 #多模态模型

👥 **作者与机构**

- 第一作者：Clément Cornet（Université Paris-Saclay， CEA, List）
- 通讯作者：未说明
- 作者列表：Clément Cornet（Université Paris-Saclay， CEA, List）、Romaric Besançon（Université Paris-Saclay， CEA, List）、Hervé Le Borgne（Université Paris-Saclay， CEA, List）

💡 **毒舌点评**

这篇论文巧妙地将德勒兹的哲学概念与机器学习中的判别分析框架结合，为提取神经网络内部概念提供了一个思路新颖且实现简洁的无监督方案，实验也足够全面；然而，其核心的“概念”是线性方向，能否捕捉更复杂的语义关系存疑，且自动为提取出的概念命名仍是未解难题，这限制了其“可解释性”的最终闭环。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/ClementCornet/Deleuzian-Hypothesis。
- 模型权重：论文中未提及提供提取好的“概念向量”权重。
- 数据集：所用数据集（ImageNet, WikiArt, IMDB, CoNLL-2003, AudioSet）均为公开数据集，需按指引获取。
- Demo：未提供在线演示。
- 复现材料：论文在附录A、B中提供了详细的实施细节（如SAE超参数选择、模型版本、数据集划分），以及一个“可复现性声明”。但未提供预训练激活值缓存。
- 论文中引用的开源项目：引用了多个SAE基线的实现（VanillaSAE, GatedSAE等）、scikit-learn（用于ICA）、以及预训练模型（DeBERTa, BART, DinoV2, CLIP, AST, Pythia等）。
- 论文中未提及开源计划：对于非代码部分（如提取的概念集合），论文未提及其他开源计划。

📌 **核心摘要**

本文旨在解决从神经网络黑盒中无监督提取可解释“概念”的挑战，以替代当前主流的稀疏自编码器（SAE）方法。作者基于德勒兹“概念即差异”的哲学观，提出了一种新方法：通过采样成对样本的激活差异，并使用逆偏度加权的KMeans聚类来识别这些差异中反复出现的模式，从而将聚类质心作为“概念”向量。与SAE试图重建激活空间不同，该方法直接建模“差异”，理论可解释为一种无监督的判别分析。主要实验结果表明，在跨模态（图像、文本、音频）的五个模型和多个数据集上，该方法在探针损失（Probe Loss）指标上平均排名第一，优于多种SAE变体，在部分任务上接近有监督的线性判别分析（LDA）上界。该方法还支持无损的概念引导，证明了提取概念的因果影响力。其局限在于评估依赖有标签数据、假设概念为线性表示，且未解决概念自动命名的问题。

---

