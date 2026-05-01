---
title: "ICASSP 2026 - 音乐源提取 论文列表"
date: 2026-04-29
draft: false
tags: ["音乐源提取"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音乐源提取 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音乐源提取

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MC-MRX: Reference- and Midi-Guided Music Source Extraction w](/audio-paper-digest-blog/posts/2026-04-29-mc-mrx-reference-and-midi-guided-music-source) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [MC-MRX: Reference- and Midi-Guided Music Source Extraction with Contrastive Learning](/audio-paper-digest-blog/posts/2026-04-29-mc-mrx-reference-and-midi-guided-music-source)

✅ **7.0/10** | 前25% | #音乐源提取 | #对比学习 | #多任务学习 #音频引导

👥 **作者与机构**

- 第一作者：Xueyan Chen（University of Science and Technology Beijing, China）
- 通讯作者：Xinyuan Qian（University of Science and Technology Beijing, China）
- 作者列表：Xueyan Chen（University of Science and Technology Beijing, China）、Zexu Pan（Tongyi Lab, Alibaba Group, Singapore）、Ziyang Jiang（University of Science and Technology Beijing, China）、Jiadong Wang（Technical University of Munich, Germany）、Kainan Chen（Eigenspace GmbH, Germany）、Xinyuan Qian（University of Science and Technology Beijing, China）

#

💡 **毒舌点评**

这篇论文的亮点在于将MIDI时序音高锚点和参考音频这两种异构的多模态先验，通过一个精心设计的框架（MC-MRX）融合进音乐源提取任务，实验结果显著，为该领域引入“结构化提示”提供了有力论证。然而，其“自产自销”的短板也很明显：作为核心输入之一的MIDI依赖于外部的MT3模型，论文并未深入探讨该模型性能的波动对最终结果的影响，同时全文没有任何开源信息的披露，对于一篇声称推动SOTA的工作而言，这无疑削弱了其可验证性和社区影响力。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用公开的MUSDB18-HQ数据集，但未说明重混后的增强数据如何获取。
- Demo：未提及。
- 复现材料：提供了部分训练细节（优化器、学习率、批大小、损失权重、STFT参数），但缺失模型具体配置（如Conformer层数、隐藏维度）、训练时长/硬件、以及生成增强数据的具体脚本。
- 论文中引用的开源项目：
    - MT3 (Multi-Task Multitrack Music Transcription)：用作MIDI生成器。
    - Open-Unmix (UMX)：作为对比基线。
    - MRX：作为改进的基础框架。
- 总体评估：论文中未提及开源计划。

📌 **核心摘要**

1. 问题：现有音乐源提取（MSE）方法面临源特征混淆和音色失配偏差的挑战，主要因为它们缺乏对音乐信号固有属性（如结构、音色）的有效建模。
2. 方法核心：提出MC-MRX框架，将MIDI信号（通过MT3模型从混合音频中生成）和参考音频作为双引导。MIDI提供音高和节奏的时序锚点，参考音频提供音色条件。模型采用多分辨率编码、Conformer特征提取器进行跨模态融合，并采用SI-SNR损失和对比学习损失进行联合优化。
3. 创新点：与已有方法相比，新在：1）首次将MIDI作为关键结构化提示引入MSE框架；2）结合参考音频进行音色锚定；3）设计对比学习机制以增强目标音轨与干扰音轨的判别性。
4. 主要结果：在MUSDB18-HQ数据集上，MC-MRX在Bass、Drums、Other、Vocals四个音轨上的SI-SNRi分别达到11.45、10.21、10.13和12.79 dB，相比基线MRX平均提升2.483 dB。消融实验证明MIDI引导、参考音频和对比学习均不可或缺。
5. 实际意义：验证了MIDI作为多模态提示的有效性，为高质量MSE建立了新范式，可应用于卡拉OK制作、音乐教育、音频后期处理等领域。
6. 主要局限性：高度依赖外部MT3模型进行MIDI转录，其精度和延迟会影响整体系统；实验仅在MUSDB18-HQ（不含MIDI标注）上进行，MIDI输入是模型生成的，未讨论生成错误的影响；未提供开源代码或模型，复现门槛高。

#

---

