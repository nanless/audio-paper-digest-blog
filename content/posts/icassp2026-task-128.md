---
title: "ICASSP 2026 - 音频无损编码 论文列表"
date: 2026-04-29
draft: false
tags: ["音频无损编码"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频无损编码 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频无损编码

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LLAC: Learned Lossless Audio Codec](/audio-paper-digest-blog/posts/2026-04-29-llac-learned-lossless-audio-codec) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [LLAC: Learned Lossless Audio Codec](/audio-paper-digest-blog/posts/2026-04-29-llac-learned-lossless-audio-codec)

✅ **7.5/10** | 前25% | #音频无损编码 | #生成模型 | #模型评估

👥 **作者与机构**

- 第一作者：Khanh Quoc Dinh (Samsung Research, Korea)
- 通讯作者：未说明
- 作者列表：Khanh Quoc Dinh (Samsung Research, Korea)， Liang Wen (Samsung R&D Institute China-Beijing, China)， Lizhong Wang (Samsung R&D Institute China-Beijing, China)， Kwang Pyo Choi (Samsung Research, Korea)

💡 **毒舌点评**

这篇论文的亮点在于勇敢地将无损音频编码的范式从“预测残差”转向“学习分布”，利用自编码器和注意力机制来建模每个样本的概率，最终在标准测试集上取得了可观的比特节省。但其最大的短板在于“黑箱”特性过强——关键训练细节、模型复杂度、推理延迟一概未提，导致这项看似扎实的工作因严重缺乏可复现性信息而打了折扣，读完让人感觉“学到了一个思路，但不知道怎么用”。

📌 **核心摘要**

1.  问题：传统无损音��编码（如FLAC）依赖线性预测和Rice编码，其编码效率在处理复杂或快速变化的音频信号时存在理论饱和，亟需更先进的技术来突破瓶颈。
2.  方法核心：提出LLAC框架，摒弃传统的残差编码，转而使用自编码器神经网络为音频块中的每个样本学习一个概率质量函数（PMF）的参数集（如正态分布的均值和标准差），然后利用该PMF进行算术编码等熵编码以实现无损压缩。同时，引入注意力机制对生成的参数集进行校正，并采用多网络自适应策略处理音频信号的多样性。
3.  创新点：首次将自编码器用于无损音频编码的PMF建模；设计了基于注意力的参数校正机制，利用过去样本的真实值和预测值进行动态调整；通过按信号梯度分类并训练多个专用网络，提升了模型对不同音频类型的适应性。
4.  主要实验结果：在四个语音数据集（VCTK， LibriSpeech， ZerothKorean， LJSpeech）上进行了广泛对比。LLAC的平均比特率为6.9463 bits/sample，平均压缩率为43.41%。与FLAC相比，平均节省了约10.92%的比特；与已有的神经网络方法LINNE相比，平均节省了约7.25%。消融实验证明，参数校正机制贡献巨大（去除后平均比特开销增加15.33%），多网络优化也有明显作用（去除后开销增加2.14%）。

![图1: LLAC总体架构图](pdf-image-page2-idx0)
图1说明：展示了LLAC的整体流程。输入音频块x通过编码器网络生成瓶颈表示y。解码器网络从y中同时生成每个样本的PMF初始参数（µNN， σNN）和用于校正的注意力参数（aµ， aσ）。最后，通过注意力机制校正得到最终的PMF参数（µt， σt），用于熵编码。

5.  实际意义：为无损音频编码领域提供了一种全新的、基于学习的架构范式，显著提升了压缩效率，有望在未来应用于对音质有极致要求的高保真音频存储和传输场景。
6.  主要局限性：论文未提供模型参数量、计算复杂度、训练时长及硬件配置等关键信息，实际部署的可行性未知；训练细节（如学习率、优化器）缺失；实验仅在语音数据集上进行，对音乐等其他音频类型的泛化能力未验证。

---

