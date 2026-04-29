---
title: "ICASSP 2026 - 房间脉冲响应去噪 论文列表"
date: 2026-04-29
draft: false
tags: ["房间脉冲响应去噪"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 房间脉冲响应去噪 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 房间脉冲响应去噪

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Full Band Denoising of Room Impulse Response in the Wavelet ](/audio-paper-digest-blog/posts/2026-04-29-full-band-denoising-of-room-impulse-response-in) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Full Band Denoising of Room Impulse Response in the Wavelet Domain with Dictionary Learning](/audio-paper-digest-blog/posts/2026-04-29-full-band-denoising-of-room-impulse-response-in)

✅ **7.5/10** | 前25% | #房间脉冲响应去噪 | #小波变换 #字典学习 | #小波变换 #字典学习

👥 **作者与机构**

- 第一作者：Théophile Dupré（Trinnov Audio, Neuilly-Plaisance, France）
- 通讯作者：未说明
- 作者列表：Théophile Dupré（Trinnov Audio）、Romain Couderc（Trinnov Audio）、Miguel Moleron（Trinnov Audio）、Axel Coulon（Trinnov Audio）、Rémy Bruno（Trinnov Audio）、Arnaud Laborie（Trinnov Audio）

#

💡 **毒舌点评**

亮点在于精准切中了传统小波去噪在低频RIR上失效的工程痛点，并巧妙地用带自适应误差容忍的稀疏字典学习来“修复”这部分信号，思路务实且效果显著。短板则是该方法本质上仍是基于信号模型的后处理，面对非平稳或有色低频噪声时可能依然力不从心，且论文未讨论字典学习带来的额外计算开销，对实时应用是个潜在顾虑。

#

📌 **核心摘要**

1.  问题：传统的基于小波阈值的房间脉冲响应（RIR）去噪方法主要处理高频细节系数，无法有效去除低频噪声，导致低频声学参数（如衰减时间DT60）估计不准。
2.  核心方法：提出一种两阶段后处理算法。首先，对RIR进行离散小波变换（DWT）。然后，高频细节系数使用传统阈值法去噪；低频近似系数则采用一种基于误差约束的稀疏字典学习方法进行去噪，其中重构误差容忍度根据估计的RIR指数衰减包络模型进行时变调整。
3.  创新性：将稀疏字典学习引入RIR低频去噪；设计了一种基于信噪比估计的时变误差容忍度机制，实现了在信号强处（高SNR）精确重建、在信号弱处（低SNR）允许更大灵活性的自适应去噪。
4.  实验结果：
    *   在仿真数据上，所提方法在SNR低至15dB时仍能保持较低的DT60估计误差，显著优于基线方法（在SNR低于25dB时误差急剧上升）。
    *   在实测数据上（大型扬声器和低音炮），所提方法在低SNR下能生成更接近无噪真实曲线的Schroeder积分曲线，且动态范围改善（去噪前后噪底差）始终优于基线方法。具体数值见图表。
5.  实际意义：能够提升存在低频环境噪声（如通风系统、结构振动）时的RIR测量精度，从而获得更可靠的房间声学参数，对声学测量、虚拟现实声场重建等应用有益。
6.  局限性：计算复杂度高于基线方法；性能依赖于对RIR衰减包络和噪声水平的准确估计；论文未与基于深度学习的去噪方法进行对比。

---

