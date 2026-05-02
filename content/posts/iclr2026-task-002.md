---
title: "ICLR 2026 - 声源定位 论文列表"
date: 2026-05-03
draft: false
tags: ["声源定位"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 声源定位 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 声源定位

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Physics-Informed Audio-Geometry-Grid Representation Learning](/audio-paper-digest-blog/posts/2026-05-03-physics-informed-audio-geometry-grid) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Physics-Informed Audio-Geometry-Grid Representation Learning for Universal Sound Source Localization](/audio-paper-digest-blog/posts/2026-05-03-physics-informed-audio-geometry-grid)

🔥 **8.0/10** | 前25% | #声源定位 | #麦克风阵列 | #表示学习 #物理信息

👥 **作者与机构**

- 第一作者：Min-Sang Baek (汉阳大学电子工程系)
- 通讯作者：Joon-Hyuk Chang (汉阳大学电子工程系)
- 作者列表：Min-Sang Baek (汉阳大学电子工程系), Gyeong-Su Kim (汉阳大学电子工程系), Donghyun Kim (汉阳大学电子工程系), Joon-Hyuk Chang (汉阳大学电子工程系)

#

💡 **毒舌点评**

这篇工作就像一位严谨的“物理-几何”工匠，为SSL领域精心打造了一套可扩展的“乐高”框架（AGG-RL），并通过LNuDFT和rMPE两个精巧的“物理榫卯”增强了模型对真实声学规律的理解，实验数据翔实、可视化效果直观，展现了扎实的工程优化能力。然而，其复杂性也令人望而生畏——要同时搞定非均匀DFT学习、相对位置编码和双网络表示对齐，部署门槛不低；此外，模型依然假设声源数量已知，离真正的“开箱即用”通用方案还差最后一口气。

#

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/BaekMS/Audio-Geometry-Grid_Representation-Learning。
- 模型权重：论文中未提及是否提供预训练模型权重。
- 数据集：实验使用了公开数据集（LibriSpeech， MS-SNSD， TIMIT， ESC-50， LOCATA， STARSS23），论文未提供自有数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常充分的复现信息。附录详细描述了模型架构（AuGeonet， Gridnet）、训练细节（损失函数、优化器、学习率、批次大小、CGT策略、DSCL设置）、数据生成算法（合成数据集）、评估指标定义、以及所有实验的具体设置（基线实现、超参数选择依据）。论文引用的开源工具包括：gpuRIR（RIR模拟）、fvcore（计算量测量）、py-webrtcvad（VAD标签生成）。

📌 **核心摘要**

1.  要解决的问题：现有基于深度学习的声源定位（SSL）方法大多受限于固定的麦克风阵列几何形状和预定义的方位角网格，导致模型无法泛化到新的阵列或网格设置，限制了其通用性和可扩展性。
2.  方法核心：提出音频-几何-网格表示学习（AGG-RL）框架。该框架包含两个核心网络：音频-几何表示网络（AuGeonet）和网格表示网络（Gridnet）。AuGeonet从音频信号和阵列几何中提取音频-几何表示（AGR），Gridnet将候选DOA网格编码为网格表示（GR）。通过学习AGR与GR的内积相似度，模型输出任意候选DOA网格上的概率空间谱，从而实现网格灵活、几何不变的SSL。
3.  与已有方法相比新在哪里：与现有固定网格分类或模板匹配方法不同，AGG-RL通过表示学习在共享潜空间中对齐音频-几何信息与网格信息，支持推理时灵活更换DOA网格而无需重训练。此外，引入了两个物理信息组件：(a) 可学习非均匀离散傅里叶变换（LNuDFT），自适应优化频率分配以强调信息丰富的相位区域；(b) 相对麦克风位置编码（rMPE），以相对坐标编码麦克风几何，符合TDOA/IPD的物理本质。
4.  主要实验结果：在合成和真实数据集（LOCATA）上的实验表明，AGG-RL在未见阵列几何（如Eigenmike）和动态通道数（Dynamic-U）条件下均显著优于经典方法（MUSIC, SRP-PHAT）和现有DNN基线（Unet, Neural-SRP, GI-DOAEnet）。例如，在未见的Eigenmike数据集上，提出方法的MAE为11.24°，ACC10为72.17%，而次优的GI-DOAEnetFM的MAE高达93.61°（消融实验中(iii)-(vi)等变体进一步验证了各组件有效性）。关键实验数据如下表所示：

| 方法 | NAO robot (seen) | Eigenmike (unseen) | Dynamic-S (seen) | Dynamic-U (unseen) |
| :--- | :--- | :--- | :--- | :--- |
| | MAE ↓ / ACC10 ↑ | MAE ↓ / ACC10 ↑ | MAE ↓ / ACC10 ↑ | MAE ↓ / ACC10 ↑ |
| GI-DOAEnetFM | 11.31 / 77.36 | 93.61 / 0.00 | 15.49 / 64.36 | 54.81 / 6.10 |
| Unet (with AGG-RL) | 12.79 / 77.33 | 16.86 / 55.69 | 21.23 / 53.74 | 20.11 / 56.08 |
| Proposed | 8.25 / 90.78 | 11.24 / 72.17 | 10.32 / 77.34 | 14.12 / 63.17 |

5.  实际意义：该工作为构建适用于任意麦克风阵列和任意分析网格的“通用”SSL系统迈出重要一步，降低了针对不同硬件定制模型的成本，增强了SSL技术在机器人、自动驾驶、AR/VR等多样化实际场景中的适应性和部署灵活性。
6.  主要局限性：(a) 框架复杂度较高，涉及多个网络和物理信息组件的联合训练；(b) 推理时仍需预先指定候选DOA网格；(c) 性能在“未见”条件（真实数据集）与“见过”条件（合成数据集）之间仍存在差距，表明领域适应仍有提升空间。

#

---

