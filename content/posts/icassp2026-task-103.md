---
title: "ICASSP 2026 - 音乐分类 论文列表"
date: 2026-04-29
draft: false
tags: ["音乐分类"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音乐分类 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音乐分类

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Adversarial Rivalry Learning for Music Classification](/audio-paper-digest-blog/posts/2026-04-29-adversarial-rivalry-learning-for-music) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Adversarial Rivalry Learning for Music Classification](/audio-paper-digest-blog/posts/2026-04-29-adversarial-rivalry-learning-for-music)

✅ **6.5/10** | 前25% | #音乐分类 | #对抗学习 | #音乐信息检索 #注意力机制

👥 **作者与机构**

- 第一作者：Yi-Xing Lin（中央研究院 资讯科学研究所）
- 通讯作者：未说明
- 作者列表：Yi-Xing Lin（中央研究院 资讯科学研究所）、Wen-Li Wei（中央研究院 资讯科学研究所）、Jen-Chun Lin（中央研究院 资讯科学研究所）

💡 **毒舌点评**

本文巧妙地将复杂的“反事实推理”优化问题，转化为两个注意力分支之间更直观的“对抗赛跑”，有效简化了超参调优，是LCA方法的一次有价值的工程化精简。然而，论文仅在几个标准音乐数据集上进行了验证，未能在更具挑战性的多模态或跨领域任务中展示其通用性，且完全未开源代码，使得这一“简单有效”的范式难以被社区快速接纳和验证。

📌 **核心摘要**

1.  要解决什么问题：现有的Learnable Counterfactual Attention (LCA)机制为引导注意力学习，依赖于多个损失项来满足复杂的反事实标准，导致超参数调优负担重、优化不稳定，且因标准模糊而难以跨数据集/任务迁移。
2.  方法核心是什么：提出Adversarial Rivalry Learning (ARL)范式。该范式摒弃了模糊的反事实标准，让模型的主注意力分支与一个辅助注意力分支构成动态竞争对手。在训练中，表现较差的分支通过模仿其优势对手机制（保留两个核心损失：分类损失和效应损失）进行更新，并在超越对手后交换角色。训练结束后，仅保留胜出分支用于推理。
3.  与已有方法相比新在哪里：核心创新在于用结构化的动态竞争机制取代了LCA中基于多损失项的反事实推理。ARL将优化目标从“满足多个模糊的反事实约束”简化为“在分类任务上超越对手”，并实现了训练时参数平均和角色动态交换的机制。
4.  主要实验结果如何：在四个音乐分类基准（Artist20， EMOPIA， FMA， GTZAN）和多种骨干模型（genreMERT， Short-chunk ResNet， M2D， AST-Fusion）上，ARL在几乎所有评估指标上均优于LCA基线，同时声称无需调优损失权重。关键结果如下：

    表1：歌手识别（Artist20）任务F1分数
    | 模型 | 帧级-平均 | 帧级-最佳 | 歌曲级-平均 | 歌曲级-最佳 |
    | :--- | :---: | :---: | :---: | :---: |
    | genreMERT [1] | 0.64 | 0.65 | 0.83 | 0.86 |
    | genreMERT (w/ LCA) [1] | 0.66 | 0.68 | 0.84 | 0.89 |
    | genreMERT (w/ ARL) Ours | 0.67 | 0.70 | 0.86 | 0.91 |

    表2：音乐情感识别（EMOPIA）任务准确率与四象限准确率
    | 模型 | 4Q准确率 | Arousal准确率 | Valence准确率 |
    | :--- | :---: | :---: | :---: |
    | genreMERT (w/ LCA) [1] | 0.76 | 0.90 | 0.81 |
    | genreMERT (w/ ARL) Ours | 0.78 | 0.89 | 0.84 |
    | Short-chunk ResNet (w/ LCA) [1] | 0.76 | 0.92 | 0.82 |
    | Short-chunk ResNet (w/ ARL) Ours | 0.77 | 0.93 | 0.83 |

    表3：流派分类（GTZAN）任务准确率
    | 模型 | 准确率 |
    | :--- | :---: |
    | M2D (w/ LCA) [1] | 0.91 |
    | M2D (w/ ARL) Ours | 0.93 |
    | genreMERT (w/ LCA) [1] | 0.92 |
    | genreMERT (w/ ARL) Ours | 0.93 |

5.  实际意义是什么：提出了一种更简单、更稳定、超参数更少的注意力学习训练范式。它在不增加推理开销的前提下，提升了音乐分类性能，为改进基于注意力的音频理解模型提供了一种新的训练思路。
6.  主要局限性是什么：1）验证范围局限于四个中等规模音乐数据集，其在更复杂场景（如长音频、多标签分类、多模态）下的有效性未明。2）动态竞争过程的内部机制（如两分支学到了什么不同的特征）缺乏深入分析。3）论文未提供任何代码或模型，严重阻碍了结果验证与方法复现。

---

