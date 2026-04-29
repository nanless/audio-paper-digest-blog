---
title: "ICASSP 2026 - 音频分离 论文列表"
date: 2026-04-29
draft: false
tags: ["音频分离"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频分离 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频分离

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Domain Partitioning Meets Parameter-Efficient Fine-Tuning: A](/audio-paper-digest-blog/posts/2026-04-29-domain-partitioning-meets-parameter-efficient) | 7.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [Domain Partitioning Meets Parameter-Efficient Fine-Tuning: A Novel Method for Improved Language-Queried Audio Source Separation](/audio-paper-digest-blog/posts/2026-04-29-domain-partitioning-meets-parameter-efficient)

✅ **7.5/10** | 前50% | #音频分离 | #参数高效微调 | #领域适应 #预训练

👥 **作者与机构**

-   第一作者：Yinkai Zhang（新疆大学计算机科学与技术学院 / 丝绸之路多语言认知计算联合国际实验室 / 新疆多语言信息技术重点实验室）
-   通讯作者：Kai Wang, Hao Huang（新疆大学计算机科学与技术学院 / 丝绸之路多语言认知计算联合国际实验室 / 新疆多语言信息技术重点实验室）
-   作者列表：Yinkai Zhang（新疆大学计算机科学与技术学院等），Dingbang Zhang（新疆大学计算机科学与技术学院等），Tao Wang（新疆大学计算机科学与技术学院等），Diana Rakhimova（哈萨克斯坦阿勒法拉比国立大学信息系统系），Kai Wang（新疆大学计算机科学与技术学院等），Hao Huang（新疆大学计算机科学与技术学院等）。

💡 **毒舌点评**

亮点：论文巧妙地将LLM领域的“领域划分+PEFT微调”范式迁移到音频分离任务，思路清晰且实验效果扎实，在多个数据集上稳定超越强基线AudioSep。短板：创新更多是框架层面的组合，作为核心组件的ReConv-Adapter是在Conv-Adapter基础上“加宽”而非原创性设计，其参数效率与性能增益的权衡有待更深入探讨。

📌 **核心摘要**

1.  问题：语言查询音频源分离（LASS）任务面临一个关键挑战：不同声音类别之间特征分布差异巨大，使得单一模型难以有效建模所有类别。
2.  方法核心：提出一种结合领域划分（Domain Partitioning） 与参数高效微调（PEFT） 的新方法。首先，使用K-Means对各类音频的CLAP嵌入进行聚类，将训练数据划分为多个子领域；然后，为每个子领域在预训练AudioSep模型上微调一个独立的PEFT模块（ReConv-Adapter）；推理时，由子领域分类器将输入路由到对应的模块。
3.  创新点：这是首次将“预训练+领域划分微调”的LLM范式应用于LASS任务，并设计了新的PEFT模块ReConv-Adapter（在卷积层添加并行分支并采用零初始化）。
4.  实验结果：在六个基准数据集上，本文方法平均SDRi达到9.76 dB，SI-SDR达到9.06 dB，分别比基线AudioSep提升1.01 dB和1.29 dB。关键实验结果如下：

| 方法 | AudioCaps (SDRi/SI-SDR) | VGGSound (SDRi/SI-SDR) | AudioSet (SDRi/SI-SDR) | Music (SDRi/SI-SDR) | ESC-50 (SDRi/SI-SDR) | Clotho v2 (SDRi/SI-SDR) | 平均 (SDRi/SI-SDR) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| LASS-Net | 3.36 / -0.78 | 1.26 / -4.43 | 1.32 / -3.66 | 0.38 / -12.24 | 3.41 / -2.35 | 2.21 / -3.38 | 1.99 / -4.47 |
| AudioSep | 8.22 / 7.19 | 9.14 / 9.04 | 7.74 / 6.90 | 10.51 / 9.43 | 10.04 / 8.81 | 6.85 / 5.24 | 8.75 / 7.77 |
| CLAPSep | 9.66 / 8.76 | 5.04 / 4.27 | 6.17 / 4.64 | 7.65 / 5.62 | 11.49 / 10.23 | 5.26 / 2.84 | 7.55 / 6.06 |
| Ours (classifier) | 8.92 / 8.02 | 10.04 / 10.06 | 9.06 / 8.46 | 11.46 / 10.56 | 11.13 / 10.50 | 7.92 / 6.75 | 9.76 / 9.06 |
| Ours (oracle) | 9.20 / 8.47 | 10.31 / 10.36 | 9.31 / 8.70 | 11.71 / 11.18 | 11.74 / 11.21 | 8.05 / 7.10 | 10.05 / 9.50 |

消融研究表明，ReConv-Adapter在参数量（19M）与性能上取得了最佳平衡。子领域划分的有效性通过t-SNE可视化得到验证。

5.  实际意义：该方法提供了一种提升通用音频分离模型在特定领域性能的高效范式，具有较好的可扩展性和实用性。
6.  主要局限性：1）领域划分依赖于K-Means聚类，子领域数量需手动设定，且划分质量影响最终性能；2）提出的ReConv-Adapter参数量（19M）显著高于DoRA/LoRA（约0.26M），在效率上并非最优选择；3）论文未探讨该方法在更复杂、多目标的现实场景中的泛化能力。

---

