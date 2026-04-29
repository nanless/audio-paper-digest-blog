---
title: "ICASSP 2026 - 音频字幕生成 论文列表"
date: 2026-04-29
draft: false
tags: ["音频字幕生成"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频字幕生成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频字幕生成

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Diverse and Few-Step Audio Captioning via Flow Matching](/audio-paper-digest-blog/posts/2026-04-29-diverse-and-few-step-audio-captioning-via-flow) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [Diverse and Few-Step Audio Captioning via Flow Matching](/audio-paper-digest-blog/posts/2026-04-29-diverse-and-few-step-audio-captioning-via-flow)

✅ **6.5/10** | 前50% | #音频字幕生成 | #流匹配 | #音频生成 #高效生成

👥 **作者与机构**

- 第一作者：未说明（论文仅列出作者姓名，未明确标注第一作者）
- 通讯作者：未说明
- 作者列表：Naoaki Fujita（Panasonic Holdings Corporation, Osaka, Japan）、Hiroki Nakamura（Panasonic Holdings Corporation, Osaka, Japan）、Kosuke Itakura（Panasonic Holdings Corporation, Osaka, Japan）

#

💡 **毒舌点评**

亮点：首次将流匹配（Flow Matching）引入自动音频字幕生成，实验证明其在大幅减少采样步数（最高25倍）的同时，能保持甚至超越扩散基线的准确性和多样性，效率提升显著。
短板：研究局限于替换生成过程的“最后一公里”，模型架构（BART解码器、BEATs编码器）直接沿用前人工作；更关键的是，论文未开源代码与模型，且未提供训练硬件与时间，严重削弱了其实用价值和可复现性。

#

📌 **核心摘要**

1.  要解决的问题：现有的基于扩散模型的多样化音频字幕生成方法，因需要数百步迭代去噪而导致推理计算成本高、速度慢，难以满足实时或大规模处理需求。减少步数则会显著损害生成质量。
2.  方法核心：提出首个基于流匹配的音频字幕生成框架（FAC），直接预测从噪声到字幕表示的确定性、线性传输路径，从而用少量采样步数完成生成。
3.  与已有方法相比新在哪里：完全用流匹配替代了扩散过程。与基于迭代去噪的扩散模型不同，流匹配学习的是近乎直线的概率路径，使得生成过程更高效、稳定。
4.  主要实验结果：在Clotho和AudioCaps数据集上，FAC在30步甚至10步采样下的准确性和多样性指标，与扩散基线（250步）相当或更优。例如，在Clotho上，10步FAC的SPIDEr（0.257）优于250步基线（0.247）。推理时间从每样本2.28秒（250步）降至0.19秒（10步），提速约12倍。通过调节训练时的噪声尺度σ，可以在不增加推理成本的情况下控制生成多样性。
5.  实际意义：为高效、可控的多样化音频字幕生成提供了新方案，降低了流式或实时应用中的延迟和计算开销。
6.  主要局限性：未开源代码和模型；未报告训练硬件与时间；作为首个应用，流匹配在音频字幕任务上的潜力和边界有待进一步探索；实验主要聚焦于生成过程，未改进音频编码器和语言解码器本身。

#

---

