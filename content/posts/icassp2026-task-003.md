---
title: "ICASSP 2026 - 信号处理 论文列表"
date: 2026-04-29
draft: false
tags: ["信号处理"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 信号处理 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 信号处理

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Distributed Multichannel Active Noise Control with Asynchron](/audio-paper-digest-blog/posts/2026-04-29-distributed-multichannel-active-noise-control) | 8.0分 | 前25% |
| 🥈 | [A Noniterative Phase Retrieval Considering the Zeros of STFT](/audio-paper-digest-blog/posts/2026-04-29-a-noniterative-phase-retrieval-considering-the) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Distributed Multichannel Active Noise Control with Asynchronous Communication](/audio-paper-digest-blog/posts/2026-04-29-distributed-multichannel-active-noise-control)

🔥 **8.0/10** | 前25% | #信号处理 | #分布式算法 | #多通道 #实时处理

👥 **作者与机构**

- 第一作者：Junwei Ji（南洋理工大学电气与电子工程学院）
- 通讯作者：未说明（但根���邮箱和贡献，可能是Woon-Seng Gan）
- 作者列表：
    1. Junwei Ji（南洋理工大学电气与电子工程学院）
    2. Dongyuan Shi（西北工业大学海洋科学与技术学院）
    3. Boxiang Wang（南洋理工大学电气与电子工程学院）
    4. Ziyi Yang（南洋理工大学电气与电子工程学院）
    5. Haowen Li（南洋理工大学电气与电子工程学院）
    6. Woon-Seng Gan（南洋理工大学电气与电子工程学院）

💡 **毒舌点评**

论文巧妙地将权重约束与异步触发机制结合，为分布式降噪系统提供了一个通信友好的实用方案，仿真实验也扎实地证明了其在降低通信开销方面的显著效果。然而，其核心创新是工程组合而非理论突破，且实验仅限于仿真环境，未在真实异步、有延迟的网络条件下进行验证，说服力打了折扣。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/Ji-Junwei/ACDMCANC`。代码将在该链接发布。
- 模型权重：未提及。
- 数据集：论文中使用的声学路径数据在真实噪声室中测量，未说明是否公开或如何获取。
- Demo：未提及。
- 复现材料：论文给出了关键仿真参数（节点数、滤波器长度、步长、惩罚因子、采样率）和系统设置，但未提供声学路径的具体数据、补偿滤波器的估计方法细节或代码配置文件。复现需要基于这些参数自行搭建仿真环境或获取原始声学测量数据。
- 论文中引用的开源项目：未明确引用其他依赖的开源工具或模型。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：传统的分布式多通道主动噪声控制（DMCANC）方法通常假设节点间同步且频繁地通信，导致通信开销过高，难以适应异构或资源受限的网络环境。
2.  方法核心：提出异步通信DMCANC系统。每个节点独立运行权重约束的FxLMS（WCFxLMS）算法，在通信间隔期间保持稳定。节点根据本地噪声抑制性能的下降情况自主决定是否发起通信请求。响应时，其他节点仅传输其控制滤波器与中心点的权重差（weight difference），并通过混合权重差（MWD）操作融合信息，更新本地控制滤波器和中心点。
3.  新意：与现有同步、每采样点都通信的分布式方法不同，该方法实现了按需、异步通信，大幅减少了通信次数。WCFxLMS确保了非通信期间的稳定性，MWD规则实现了异步信息的有效融合。
4.  实验结果：在6节点系统中进行仿真。图3(a)显示，在抑制100-1000Hz宽带噪声时，ACDMCANC的降噪性能（ANSE）略低于集中式MEFxLMS和同步MGDFxLMS，但显著优于无通信的基准。图3(b)表明节点通信时间点不同，验证了异步性。图4(a)(b)在真实压缩机噪声下，ACDMCANC同样表现出有效的降噪性能，但收敛稍慢。关键数据：在图3(a)中，15秒时ACDMCANC的ANSE约比MEFxLMS差5-8 dB，但实现了“通信实例”的大幅减少（图3(b)显示节点1和2在15秒内仅分别触发通信约4次和2次）。
5.  实际意义：该方法降低了对网络通信带宽和实时性的要求，提升了分布式降噪系统在异构网络中的可部署性、扩展性和鲁棒性。
6.  局限性：由于异步通信和权重约束，其收敛速度和最终降噪性能略逊于完全同步通信的方法。仿真实验未考虑实际网络中的传输延迟和丢包问题。

---

### 🥈 [A Noniterative Phase Retrieval Considering the Zeros of STFT Magnitude](/audio-paper-digest-blog/posts/2026-04-29-a-noniterative-phase-retrieval-considering-the)

✅ **7.5/10** | 前25% | #信号处理 | #信号处理 | #时频分析 #语音增强

👥 **作者与机构**

- 第一作者：Kazuki Nishino（东京大学 情报理工学系研究科）
- 通讯作者：Takaaki Nara（东京大学 情报理工学系研究科，论文中标注*）
- 作者列表：Kazuki Nishino（东京大学 情报理工学系研究科）、Takaaki Nara（东京大学 情报理工学系研究科）

#

💡 **毒舌点评**

亮点：该工作并非简单套用现有框架，而是深入STFT幅值零点这一数学奇点，提出了“解析定位-减去奇异项-泰勒拟合”的两阶段精细化处理流程，理论上根除了PGHI在零点附近的数值不稳定问题，体现了扎实的信号处理功底。短板：理论优雅但实用性堪忧，高达31.82的实时因子（RTF）使其离实用部署相去甚远，且实验仅与一个十年前的基线（PGHI）对比，在如今深度学习大行其道的背景下，说服力略显不足。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了公开的MOCHA-TIMIT语料库，但论文未说明具体获取方式。
- Demo：未提供在线演示。
- 复现材料：给出了实验设置（硬件、软件库、STFT参数），但未提供核心算法的实现代码、超参数选择依据或详细配置。
- 论文中引用的开源项目：引用了LTFAT (Large Time-Frequency Analysis Toolbox) 作为信号处理工具库。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  要解决什么问题：如何从短时傅里叶变换（STFT）的幅度谱中高精度地恢复相位信息。现有非迭代方法PGHI在STFT幅度零点附近因数值奇异性会产生较大误差。
2.  方法核心是什么：基于高斯窗STFT与Bargmann变换的解析关系，提出一种两阶段方法。首先，利用复变函数的积分矩公式，从幅度谱中解析地确定零点位置；然后，将幅度谱的对数视为一个全纯函数与奇异项之和，在减去奇异项后，用泰勒展开对剩余的全纯函数进行最小二乘拟合，从而恢复相位。
3.  与已有方法相比新在哪里：与PGHI通过数值积分规避零点不同，本方法显式且精确地定位零点，并利用零点信息来“净化”相位恢复过程，从数值求解转向基于函数逼近的解析式求解，提升了在零点附近的计算精度。
4.  主要实验结果如何：在MOCHA-TIMIT语音数据集上的实验表明，所提方法在相位误差（可视化）和频谱收敛度（SCdB）上均优于PGHI。典型数据示例中，所提方法SCdB为-92.28 dB，PGHI为-78.04 dB，提升约14dB。在20个数据上的总体对比（Fig. 2）也显示所提方法普遍优于PGHI。但计算时间显著增加，总RTF为31.82，而PGHI仅为0.89。
5.  实际意义是什么：为音频信号处理（如语音增强、源分离）提供了一种更高精度的相位恢复工具，其理论框架有助于理解STFT零点在相位重建中的作用。
6.  主要局限性是什么：计算复杂度高，实时性差；实验仅与PGHI对比，缺乏与其他状态-of-the-art方法（包括迭代方法如GLA及其变体）的比较；方法有效性严重依赖于高斯窗，对其他窗函数的适用性未探讨。

#

---

