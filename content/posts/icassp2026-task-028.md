---
title: "ICASSP 2026 - 房间脉冲响应 论文列表"
date: 2026-04-29
draft: false
tags: ["房间脉冲响应"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 房间脉冲响应 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 房间脉冲响应

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [RIR-Former: Coordinate-Guided Transformer for Continuous Rec](/audio-paper-digest-blog/posts/2026-04-29-rir-former-coordinate-guided-transformer-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [RIR-Former: Coordinate-Guided Transformer for Continuous Reconstruction of Room Impulse Responses](/audio-paper-digest-blog/posts/2026-04-29-rir-former-coordinate-guided-transformer-for)

✅ **7.0/10** | 前25% | #房间脉冲响应 | #Transformer | #麦克风阵列 #空间音频

👥 **作者与机构**

- 第一作者：Shaoheng Xu (The Australian National University) 和 Chunyi Sun (The Australian National University)（论文中注明共同第一作者）
- 通讯作者：未说明
- 作者列表：Shaoheng Xu (The Australian National University), Chunyi Sun (The Australian National University), Jihui (Aimee) Zhang (The University of Queensland & The Australian National University), Prasanga Samarasinghe (The Australian National University), Thushara Abhayapala (The Australian National University)

💡 **毒舌点评**

本文巧妙地将Transformer架构与正弦位置编码结合，用于解决无网格的RIR连续重建问题，是一个清晰、有效的工程化方案；然而，实验仅限于仿真数据和相对规则的线性阵列场景，距离论文声称的“复杂阵列几何、动态场景及真实世界环境”还有很长的路要走，其泛化能力的实际说服力有待进一步验证。

📌 **核心摘要**

1.  要解决什么问题：房间脉冲响应（RIR）是声学信号处理的关键，但密集测量不切实际。现有方法或局限于规则网格、低频段，或需要针对每个新场景重新训练，缺乏一种通用、高效、能处理任意测量位置的RIR重建方法。
2.  方法核心是什么：提出RIR-Former，一个基于Transformer的无网格、单次前馈模型。其核心是正弦编码模块，将麦克风位置编码为丰富特征，使模型能处理任意空间位置；以及一个分段多分支解码器，专门处理RIR中不同阶段的声学成分（早期反射与后期混响）。
3.  与已有方法相比新在哪里：1）无网格/连续重建：与依赖固定网格的扩散模型（DiffusionRIR）或插值（SCI）不同，可直接预测任意位置RIR。2）全局上下文建模：Transformer的自注意力机制能捕捉麦克风间的全局空间依赖性，而非仅局部模式。3）专门的时序结构建模：显式对RIR时序分段进行解码，更符合声学物理特性。
4.  主要实验结果如何：在模拟数据集（两种设置：规则ULA和随机间距RSLA）上，RIR-Former在归一化均方误差（NMSE）和余弦距离（CD）上均优于基线方法（PINN, DiffusionRIR, 样条插值）。例如，在实验1中，以70%缺失率测试，RIR-Former的NMSE为-10.44 dB，远优于PINN（-2.56 dB）和DiffusionRIR（-0.62 dB）。模型在高达90%缺失率下仍保持NMSE < -5 dB。消融实验证实了正弦编码和分段解码器的有效性（移除后NMSE分别恶化3.97 dB和2.24 dB）。
5.  实际意义是什么：该方法为从稀疏麦克风阵列测量中高效重建密集RIR提供了一个有潜力的通用框架，可能简化虚拟现实、房间声学分析等应用中的声场采集过程。
6.  主要局限性是什么：1）实验场景有限：所有实验均基于仿真数据（鞋形房间），且仅限于共面线性阵列，未验证更复杂的三维阵列几何或真实环境。2）单声源假设：模型假设单个固定声源位置，未考虑多声源或声源移动的场景。3）未开源：未提供代码或预训练模型，限制了可复现性和社区的快速验证。

---

