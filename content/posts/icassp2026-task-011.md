---
title: "ICASSP 2026 - 基频估计 论文列表"
date: 2026-04-29
draft: false
tags: ["基频估计"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 基频估计 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 基频估计

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Robust and Lightweight F0 Estimation Through Mid-Level Fusio](/audio-paper-digest-blog/posts/2026-04-29-robust-and-lightweight-f0-estimation-through-mid) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Robust and Lightweight F0 Estimation Through Mid-Level Fusion of DSP-Informed Features](/audio-paper-digest-blog/posts/2026-04-29-robust-and-lightweight-f0-estimation-through-mid)

🔥 **8.0/10** | 前25% | #基频估计 | #信号处理 | #模型融合 #鲁棒性

👥 **作者与机构**

- 第一作者：Sebastian Strahl（International Audio Laboratories Erlangen）
- 通讯作者：未明确说明（论文未明确标注通讯作者，但通常由资深作者Meinard Müller负责）
- 作者列表：Sebastian Strahl（International Audio Laboratories Erlangen）、Meinard Müller（International Audio Laboratories Erlangen）
- 机构信息：International Audio Laboratories Erlangen（由Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU) 与 Fraunhofer Institute for Integrated Circuits IIS 联合设立）

💡 **毒舌点评**

该论文巧妙地将几个“老派”DSP算法的软输出，像拼积木一样用一个超轻量网络融合起来，实现了1+1>2的效果，在噪声下甚至干翻了参数量是其数千倍的“黑盒”深度模型，堪称“四两拨千斤”的工程典范。然而，其核心创新更偏向于特征工程和架构设计的“整合艺术”，而非提出全新的理论或范式，本质上仍是对经典方法的现代化封装。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/groupmm/f0-mlf。
- 模型权重：论文中未提及是否提供预训练模型权重。
- 数据集：论文使用了MIR-1K、Vocadito和NOISEX-92数据集，这些均为公开可用的数据集。论文未提供自有数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详尽的训练细节（优化器、学习率、批大小、训练轮数、调度策略等）、模型架构描述、评估指标定义及使用的库（mir_eval），复现所需信息充分。
- 论文中引用的开源项目：论文明确引用了dYIN/dSWIPE（参考文献[11]，代码可能同属作者团队）、CREPE（参考文献[5]，提供了Pytorch版本链接）、mir_eval（参考文献[22]）等开源工具/模型。

📌 **核心摘要**

1. 问题：传统数字信号处理（DSP）方法（如YIN、SWIPE）计算高效且可解释，但对噪声和干扰敏感；深度学习方法（如CREPE）鲁棒性强，但模型复杂、可解释性差。本文旨在寻找一种平衡点。
2. 方法：提出“中层融合”（MLF）方法。首先，从音频信号中提取四种互补的“软”中层特征：dYIN对数、dSWIPE对数、倒谱和VQT频谱图。这些特征均映射到相同的时频轴，形成一个多通道输入张量。然后，使用一个仅6.5k参数的轻量级卷积神经网络进行融合，通过1D卷积学习特征间的加权组合以预测F0类别，同时通过一个分支计算帧级统计量来联合预测“非浊音”类别。
3. 创新：与直接使用DSP算法的硬判决或使用大模型端到端学习不同，本方法的核心在于特征层面的融合，利用了DSP模型提供的中间“软信息”；其次，采用极简的卷积架构（仅6.5k参数）实现融合，兼具效率和可解释性；最后，通过联合归一化同时进行F0和浊音检测，无需设置阈值。
4. 实验：在MIR-1K和Vocadito+NOISEX-92数据集上的实验表明，MLF在低信噪比（SNR）下显著优于其各个单特征基线（如在0dB SNR下，MLF RPA为0.867，而最好的单特征dSWIPE仅为0.620）。与纯数据驱动模型CREPE相比，MLF在噪声条件下表现更稳健（在-10dB SNR下RPA为0.486，优于CREPE-0的0.400和CREPE-1的0.402），且整体准确率（OA）最高（0.930）。
5. 实际意义：提供了一种高性价比（高精度、高鲁棒性、低复杂度）的F0估计方案，特别适用于资源受限或对可解释性有要求的实时应用场景。
6. 主要局限性：模型的性能仍然依赖于其输入的四个手工设计的DSP特征，特征提取本身需要一定的计算开销；论文未深入探讨在非歌唱语音或乐器音高估计等场景下的泛化能力。

---

