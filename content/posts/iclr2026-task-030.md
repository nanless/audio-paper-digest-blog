---
title: "ICLR 2026 - 跨模态 论文列表"
date: 2026-05-02
draft: false
tags: ["跨模态"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 跨模态 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 跨模态

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Learning multimodal dictionary decompositions with group-spa](/audio-paper-digest-blog/posts/2026-05-02-learning-multimodal-dictionary-decompositions) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Learning multimodal dictionary decompositions with group-sparse autoencoders](/audio-paper-digest-blog/posts/2026-05-02-learning-multimodal-dictionary-decompositions)

✅ **7.5/10** | 前25% | #跨模态 | #稀疏自编码 | #音频检索 #对比学习

👥 **作者与机构**

- 第一作者：Chiraag Kaushik (Georgia Institute of Technology, School of Electrical and Computer Engineering)
- 通讯作者：未说明
- 作者列表：Chiraag Kaushik (Georgia Institute of Technology, School of Electrical and Computer Engineering), Davis Barch (Dolby Laboratories), Andrea Fanelli (Dolby Laboratories)

💡 **毒舌点评**

本文精准地识别了稀疏自编码器（SAE）在多模态嵌入分解中的核心痛点——“字典分裂”，并通过一个直观的理论定理和一项巧妙的工程改进（群稀疏损失+交叉模态掩码）给出了系统性的解决方案，实验部分在图像-文本和音频-文本两个场景中均显示出稳健的增益。然而，其理论证明（定理1）的假设略显理想化，且对于“群稀疏损失”为何能如此有效地对抗SAE内置偏置的理论机制探讨尚浅，更像是一种经验性的成功，缺乏更深层的原理解释。

📌 **核心摘要**

这篇论文旨在解决标准稀疏自编码器（SAE）应用于对齐的多模态嵌入空间（如CLIP、CLAP）时出现的“字典分裂”问题，即学到的稀疏特征大多仅对单一模态激活，破坏了跨模态语义对齐。作者首先理论上证明，在对齐的嵌入空间中，一个分裂的字典总能被改进为一个对齐更好的非分裂字典。为此，他们提出了“群稀疏自编码器”，核心创新在于两点：1）在训练损失中引入针对成对样本的群稀疏正则项（L2,1范数），强制不同模态的嵌入产生相似的稀疏编码结构；2）引入交叉模态随机掩码，进一步迫使TopK激活选择共享子集。实验在CLIP（图像/文本）和CLAP（音频/文本）嵌入上进行，结果显示：相比标准SAE，其方法显著增加了双模态激活的神经元数量（死神经元减少），提升了新提出的“多模态单义性分数（MMS）”，并在多个零样本跨模态任务上取得了大幅性能提升（如在CIFAR-10上从0.657提升至0.842）。该工作首次将SAE应用于音频/文本嵌入空间（CLAP），并展示了如何利用学到的多模态字典进行概念级别的检索控制和线性探测器的可解释性分析。

---

