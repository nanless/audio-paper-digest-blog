---
title: "ICASSP 2026 - 音乐源分离 论文列表"
date: 2026-04-29
draft: false
tags: ["音乐源分离"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 音乐源分离 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音乐源分离

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Dissecting Performance Degradation in Audio Source Separatio](/audio-paper-digest-blog/posts/2026-04-29-dissecting-performance-degradation-in-audio) | 7.5分 | 前25% |
| 🥈 | [Bleed No More: Generative Interference Reduction for Musical](/audio-paper-digest-blog/posts/2026-04-29-bleed-no-more-generative-interference-reduction) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Dissecting Performance Degradation in Audio Source Separation under Sampling Frequency Mismatch](/audio-paper-digest-blog/posts/2026-04-29-dissecting-performance-degradation-in-audio)

✅ **7.5/10** | 前25% | #音乐源分离 | #信号处理 | #鲁棒性 #数据增强

👥 **作者与机构**

- 第一作者：Kanami Imamura (东京大学，日本产业技术综合研究所(AIST))
- 通讯作者：未说明
- 作者列表：Kanami Imamura (东京大学，AIST)、Tomohiko Nakamura (AIST)、Kohei Yatabe (东京农工大学)、Hiroshi Saruwatari (东京大学)

💡 **毒舌点评**

亮点：论文以一种非常“工程化”且易于复现的方式（仅在重采样核中添加高斯噪声）解决了DNN模型对采样率变化的敏感性问题，并验证了其在多个主流模型上的普适性，实用价值很高。短板：理论深度有限，对“为什么添加噪声就能恢复性能”的解释停留在“提供高频成分存在性”的层面，未能更深入地揭示DNN模型内部为何对这种统计特性（而非精确频谱内容）如此敏感。

📌 **核心摘要**

1.  问题：基于DNN的音频源分离模型通常在单一采样频率下训练。当处理不同采样率的输入时，常用重采样到训练采样率的方法，但这会导致性能下降，尤其是当输入采样率低于训练采样率时。
2.  方法：作者提出两个假设：(i) 上采样导致的高频成分缺失是性能下降的原因；(ii) 高频成分的存在性比其具体频谱内容更重要。为此，他们提出并对比了三种替代重采样方法：后重采样噪声添加（直接在信号上加噪）、噪声核重采样（在插值核上加噪）、可训练核重采样（用DNN参数化插值核）。
3.  创新：与传统重采样方法相比，本工作系统性地分析了性能下降的原因，并提出了一种极其简单却有效的“噪声核重采样”方法。其核心创新在于发现并验证了为重采样信号补充与输入信号相关的高频成分（而非不相关的噪声） 即可有效缓解性能下降。
4.  实验结果：在MUSDB18-HQ数据集上进行音乐源分离实验。基线模型BSRNN在8kHz输入（训练于44.1kHz）下，人声SDR从6.58dB降至3.47dB。使用噪声核重采样后，SDR恢复至6.05dB。在包括Conv-TasNet, BSRNN, Mel-RoFormer在内的多个模型上，噪声核重采样均能缓解常规重采样带来的性能下降（见表1）。可训练核重采样效果类似，而后重采样噪声添加则效果不佳甚至恶化。
5.  实际意义：提供了一种简单、通用且有效的工程解决方案，只需在现有重采样步骤的核函数中添加微小噪声，即可提升DNN音频模型对采样率变化的鲁棒性，便于实际部署。
6.  局限性：研究主要局限于音乐源分离任务，结论在语音增强等其他音频任务上的普适性有待验证。对于可训练核重采样，其训练增加了额外开销。论文未能从根本上提出一种与采样率无关的DNN架构。

---

### 🥈 [Bleed No More: Generative Interference Reduction for Musical Recordings](/audio-paper-digest-blog/posts/2026-04-29-bleed-no-more-generative-interference-reduction)

✅ **7.0/10** | 前25% | #音乐源分离 | #生成模型 | #对抗学习 #数据集

👥 **作者与机构**

- 第一作者：Rajesh R (University of Illinois Chicago)
- 通讯作者：未说明
- 作者列表：Rajesh R (University of Illinois Chicago)、Rashen Fernando (University of Illinois Chicago)、Padmanabhan Rajan (Indian Institute of Technology Mandi)、Ryan M. Corey (University of Illinois Chicago)

#

💡 **毒舌点评**

本文精准地切入“干扰消除”而非“源分离”这一细分赛道，用条件生成对抗网络给出了一个干净利落的技术方案，在跨风格测试（印度古典音乐）上展现出不错的泛化能力，是“小题大做”的典范。然而，核心生成器工作在幅度谱上并复用输入相位，这几乎是音频增强领域的“经典妥协”，导致SAR指标普遍偏低，论文对此的讨论止于局限性陈述，未能提出更优的相位处理方案，略显保守。

#

📌 **核心摘要**

本文针对多轨现场音乐录音中普遍存在的麦克风串音（bleed）问题，提出了一种基于条件生成对抗网络的干扰消除方法cWGAN-IR。该方法将问题重新定义为：从单通道受污染的观测信号中，条件生成出干净的、保留目标乐器音色和瞬态的目标信号。与传统的基于信号处理的方法（如KAMIR）或旨在输出所有音轨的通用源分离模型（如HTDemucs）不同，cWGAN-IR专注于单通道目标，使用U-Net生成器和Patch判别器在时频幅度谱上进行对抗训练。实验在模拟串音（MUSDB18HQ-S）和真实重录串音（MUSDB18HQ-R）条件下进行，结果表明，该方法在SI-SDR、SNR和SIR等指标上显著优于KAMIR、CAE等传统干扰消除基线，并与HTDemucs竞争力相当，尤其在真实重录条件下优势明显。消融实验表明对抗训练能有效提升性能。该模型在印度古典音乐数据集（Sanidha）上也显示出良好的跨领域迁移能力。论文的主要局限性在于使用混合相位重构波形，可能导致生成信号与真实目标之间存在相位差异，影响了SAR（信号与伪影比）指标。实际意义在于为音乐制作和现场录音提供了一个针对性强、易于部署（单通道）且能保持原始音质的串音消除工具。

关键实验结果表格（摘自论文表1）：

| 方法 | MUSDB18HQ-S (模拟) |          |          |          | MUSDB18HQ-R (重录) |          |          |          |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 指标 | SI-SDR (Vocal) | SIR (Vocal) | SI-SDR (Bass) | SIR (Bass) | SI-SDR (Vocal) | SIR (Vocal) | SI-SDR (Bass) | SIR (Bass) |
| Reference (参考) | -23.42 | 23.54 | -14.25 | 34.47 | -31.97 | 12.46 | -20.65 | 9.16 |
| KAMIR | 4.53 | 6.92 | 6.18 | 7.00 | 1.02 | 2.58 | -0.67 | 2.73 |
| t-UNet | -22.67 | 24.56 | -13.72 | 34.89 | -31.22 | 12.69 | -19.94 | 9.48 |
| HTDemucs | 16.36 | 37.93 | 16.87 | 40.92 | -8.46 | 21.89 | -6.29 | 20.67 |
| cWGAN-IR (Ours) | 13.09 | 38.64 | 17.38 | 42.44 | 2.30 | 22.79 | 2.02 | 22.74 |

表格结论：cWGAN-IR在模拟和真实条件下，SI-SDR和SIR均大幅超越传统基线，并与HTDemucs竞争，在真实条件下多数指标占优。

#

---

