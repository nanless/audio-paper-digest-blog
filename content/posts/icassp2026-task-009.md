---
title: "ICASSP 2026 - 回声消除 论文列表"
date: 2026-04-29
draft: false
tags: ["回声消除"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 回声消除 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 回声消除

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Maximum Likelihood Measurement Noise Estimation for Block-Ti](/audio-paper-digest-blog/posts/2026-04-29-maximum-likelihood-measurement-noise-estimation) | 7.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [Maximum Likelihood Measurement Noise Estimation for Block-Time Domain Kalman Filters](/audio-paper-digest-blog/posts/2026-04-29-maximum-likelihood-measurement-noise-estimation)

✅ **7.0/10** | 前50% | #回声消除 | #信号处理 #卡尔曼滤波器 | #信号处理 #卡尔曼滤波器

👥 **作者与机构**

- 第一作者：Till Hardenbicker (RWTH Aachen University, Institute of Communication Systems)
- 通讯作者：Till Hardenbicker (邮箱: hardenbicker@iks.rwth-aachen.de)
- 作者列表：Till Hardenbicker (RWTH Aachen University, Institute of Communication Systems)、Jan Schneider (RWTH Aachen University, Institute of Communication Systems，推测同单位)、Peter Jax (RWTH Aachen University, Institute of Communication Systems，推测同单位)

#

💡 **毒舌点评**

这篇论文的亮点在于其务实的工程思维：没有追求天马行空的理论，而是精准定位到BTKF在实际应用中缺失的一环——噪声估计，并巧妙地引入Toeplitz结构假设和起始点检测来稳定估计过程，显示出扎实的信号处理功底。短板则在于实验论证的“闭环”不够紧密，摘要中反复强调BTKF的收敛速度优势，但在实验部分几乎没有提供任何关于收敛速度的定量数据或图表，使得这一核心宣称未能得到充分支撑，说服力打折扣。

#

📌 **核心摘要**

1.  要解决的问题：块时域卡尔曼滤波器（BTKF）在声学系统辨识（如回声消除）中表现优异，但其性能严重依赖于测量噪声协方差矩阵的准确估计。现有在线估计方法主要针对频域卡尔曼滤波器（FDKF），而针对BTKF的在线估计器尚未建立。
2.  方法核心：将最大似然估计原理应用于BTKF的误差向量外积。为克服外积矩阵在低观测下病态的问题，基于测量噪声的短时平稳性假设，将其约束为Toeplitz矩阵结构，并通过递归平滑估计各延迟点的互相关。同时，引入了起始点检测机制以增强对非平稳噪声（如语音起始）的鲁棒性。
3.  与已有方法相比新在哪里：1) 首次为BTKF框架推导并实现了基于最大似然的在线测量噪声协方差估计器；2) 在最大似然估计中引入Toeplitz结构约束，相比直接使用外积（Full方法）或仅估计对角线（Diag方法）更符合信号统计特性；3) 将标量起始点检测机制推广至矩阵对角线，提升了对突变噪声的跟踪能力。
4.  主要实验结果：在ICASSP AEC挑战赛数据集上评估，所提方法（Toeplitz）的ERLE（回波返回损耗增强）累积分布函数（CDF）中位数比Full和Diag基线方法高出约2 dB。在存在近端语音或噪声的场景下，性能与使用噪声估计器的FDKF相当，且保留了BTKF的快速初始收敛特性。图2展示了语音和噪声场景下的ERLE曲线，图3展示了所有测试信号的ERLE CDF。
5.  实际意义：使BTKF能够在噪声水平未知且时变的真实场景（如通信设备）中有效工作，结合了BTKF的快速收敛/跟踪能力与鲁棒的噪声自适应能力，提升了声学系统辨识（AEC、ANC等）的实际性能。
6.  主要局限性：1) 核心优势之一“快速收敛”在实验中未提供定量对比数据；2) 实验主要集中在AEC场景，对其他应用（如HRTF测量、ANC）的有效性未验证；3) 起始点检测的阈值θ需要调优。

#

---

