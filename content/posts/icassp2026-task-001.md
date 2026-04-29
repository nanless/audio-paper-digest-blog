---
title: "ICASSP 2026 - 主动降噪 论文列表"
date: 2026-04-29
draft: false
tags: ["主动降噪"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 主动降噪 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 主动降噪

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Joint Estimation of Primary and Secondary Paths for Personal](/audio-paper-digest-blog/posts/2026-04-29-joint-estimation-of-primary-and-secondary-paths) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Joint Estimation of Primary and Secondary Paths for Personalized Hearable Applications](/audio-paper-digest-blog/posts/2026-04-29-joint-estimation-of-primary-and-secondary-paths)

✅ **7.5/10** | 前25% | #主动降噪 | #信号处理 | #自适应滤波器 #实时处理

👥 **作者与机构**

- 第一作者：未说明（论文未明确标注）
- 通讯作者：未说明（论文未明确标注）
- 作者列表：Sooyeon Park (Samsung Research, Seoul, South Korea), Kyoungbo Min (Samsung Research, Seoul, South Korea), Seungdo Choi (Samsung Research, Seoul, South Korea), Ikchae Jeong (Samsung Research, Seoul, South Korea), Hosang Sung (Samsung Research, Seoul, South Korea)

💡 **毒舌点评**

亮点：该工作巧妙地将一个通常需要额外激励或离线数据的双路径在线估计问题，转化为一个利用现有自适应滤波器系数变化和音乐播放作为“天然激励”的可识别线性系统，并给出了严格的可解性条件，理论框架非常优雅实用。
短板：实验部分“高高举起，轻轻放下”，核心的路径估计精度验证不错，但最终的ANC性能对比（表1）却只和一个“固定滤波器”简单比拼，缺少与文献中其他在线二次路径估计方法的横向对比，削弱了方法优越性的说服力，也暴露了其作为一篇完整研究论文的验证闭环不够完整。

📌 **核心摘要**

1. 本文旨在解决个性化可穿戴设备（如耳机）中，因用户耳道与设备耦合差异导致主动降噪（ANC）性能不一致的问题。关键挑战在于同时在线估计受用户影响的主路径和副路径，而现有方法要么需要离线校准，要么需注入干扰噪声，要么计算复杂度过高。
2. 方法核心是：在混合ANC系统中，利用自适应滤波器系数 `W(z)` 的更新变化和音乐播放信号 `M(z)` 的变化，在连续帧中构建一个关于有效路径 `~Pxe(z)` 和 `~Se(z)` 的2×2线性方程组（公式10-12）。通过证明系统矩阵 `A(z)` 在特定条件下可逆（定理3.2），使得路径估计问题变得可解。
3. 与已有方法相比，新在：① 无需辅助激励，完全利用现有音频信号（噪声、音乐）和自适应滤波过程本身产生的变化；② 无需离线训练或预建模；③ 提出了一个统一的子空间卡尔曼滤波框架，能自动处理激励不足的情况（公式19-33），实现路径的递归跟踪。
4. 主要实验结果：在消声室使用商业耳机和头模进行测试。图3显示，估计的主路径和副路径与实测路径在大部分频段紧密吻合。表1显示，在5次重新佩戴耳机后，所提方法的ANC降噪性能（平均约-18.5 dB）比固定滤波器（平均约-17.0 dB）更稳定、略优。
5. 实际意义：该框架为无需用户繁琐校准、即插即用的个性化可穿戴音频设备（支持ANC、通透模式、个性化音效）提供了一种实用的实时声学路径估计方案。
6. 主要局限性：论文指出，从估计的路径到最优ANC滤波器的映射 `Δ(z)` 仍需要数据驱动的个性化建模，这是未来工作，目前框架的完整性因此略打折扣。此外，实验部分缺乏更全面的性能对比。

---

