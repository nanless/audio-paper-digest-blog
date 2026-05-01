---
title: "ICASSP 2026 - 音频超分辨率 论文列表"
date: 2026-04-29
draft: false
tags: ["音频超分辨率"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频超分辨率 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频超分辨率

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Universr: Unified and Versatile Audio Super-Resolution Via V](/audio-paper-digest-blog/posts/2026-04-29-universr-unified-and-versatile-audio-super) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Universr: Unified and Versatile Audio Super-Resolution Via Vocoder-Free Flow Matching](/audio-paper-digest-blog/posts/2026-04-29-universr-unified-and-versatile-audio-super)

🔥 **8.0/10** | 前25% | #音频超分辨率 | #流匹配 | #语音增强 #音频生成

👥 **作者与机构**

- 第一作者：Woongjib Choi（延世大学电气与电子工程系）
- 通讯作者：未说明
- 作者列表：Woongjib Choi（延世大学电气与电子工程系）、Sangmin Lee（延世大学电气与电子工程系）、Hyungseob Lim（延世大学电气与电子工程系）、Hong-Goo Kang（延世大学电气与电子工程系）

💡 **毒舌点评**

这篇论文最大的亮点是提供了一个优雅且高效的“去vocoder”解决方案，用一个统一的流匹配模型直击频谱，避免了传统两阶段管线的性能天花板，在主观听感上甚至优于vocoded的GT。然而，其核心架构本质是成熟的ConvNeXt V2 U-Net在频域数据上的应用，创新更多体现在任务定义和流程整合上，而非模型架构本身，这使得它更像一个工程上的巧妙优化而非理论上的重大突破。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/woongzip1/UniverSR
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文中提及了训练所用的数据集名称和规模，但未说明是否提供这些数据集的下载或处理脚本。
- Demo：提供在线演示链接：https://woongzip1.github.io/universr-demo
- 复现材料：论文中详细说明了模型架构、训练超参数、损失函数、推理设置等，为复现提供了关键信息。
- 论文中引用的开源项目：未明确提及依赖的具体开源代码库。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  要解决什么问题：传统的两阶段音频超分辨率方法需要先预测梅尔频谱，再依赖预训练的神经声码器合成波形，导致最终质量受限于声码器性能，且流程复杂。
2.  方法核心是什么：论文提出 UniverSR，一个无 vocoder 的端到端框架。它将音频超分辨率视为频谱修复问题，使用流匹配生成模型直接估计低频谱条件下的复数谱系数（包含幅度和相位）的条件分布，然后通过逆短时傅里叶变换（iSTFT）直接恢复波形。
3.  与已有方法相比新在哪里：a) 去 vocoder：直接建模复数谱，无需单独的波形合成阶段，简化了流程并突破了性能瓶颈；b) 使用流匹配：相比传统扩散模型，流匹配在较少采样步数（如4步）下即可生成高质量结果，效率更高；c) 统一架构：单一模型可处理语音、音乐、音效等多种音频类型及多种上采样倍率（×2 到 ×6）。
4.  主要实验结果如何：
    *   在统一模型评估中（Table 1），UniverSR 在音乐和音效领域全面超越 AudioSR 和 FlashSR，在语音领域也达到竞争水平，且参数量（57M）远小于基线（>600M）。
    *   在纯语音数据集VCTK上的评估（Table 2）显示，在最具挑战性的8kHz→48kHz任务中，UniverSR 取得了最优的 LSD-HF（1.14）和2f-model（31.41）分数。
    *   主观听感测试（图3）表明，在8kHz上采样任务中，UniverSR 的MOS分数最高，甚至高于“经vocoder处理的真实音频（GT (Vocoded)）”。
    *   定性分析（图4）显示，UniverSR 生成的频谱谐波结构更清晰，高频细节更丰富。
    *   消融研究（Table 3）表明，引导尺度 ω 的选择在感知丰富度和客观保真度之间存在权衡。
5.  实际意义是什么：该方法为高质量、高效的音频带宽扩展提供了一个更简洁、更统一的解决方案，可广泛应用于提升语音清晰度、修复历史录音、增强流媒体音频质量等场景。其“去 vocoder”范式可能启发其他音频生成任务。
6.  主要局限性是什么：论文未明确讨论模型在极度低比特率或极端噪声条件下的鲁棒性；频谱修复方法依赖于STFT/iSTFT，可能引入相位相关的伪影（虽然实验显示听感良好）；模型在最困难的语音任务（8kHz→48kHz）上，部分客观指标（如2f-model）略低于某些基线。

---

