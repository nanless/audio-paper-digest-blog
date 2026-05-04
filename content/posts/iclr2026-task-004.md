---
title: "ICLR 2026 - 声源定位 论文列表"
date: 2026-05-04
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
| 🥇 | [Physics-Informed Audio-Geometry-Grid Representation Learning](/audio-paper-digest-blog/posts/2026-05-04-physics-informed-audio-geometry-grid) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Physics-Informed Audio-Geometry-Grid Representation Learning for Universal Sound Source Localization](/audio-paper-digest-blog/posts/2026-05-04-physics-informed-audio-geometry-grid)

🔥 **8.0/10** | 前25% | #声源定位 | #物理信息 | #麦克风阵列 #空间音频

👥 **作者与机构**

- 第一作者：Min-Sang Baek（Hanyang University, Department of Electronic Engineering）
- 通讯作者：Joon-Hyuk Chang（Hanyang University, Department of Electronic Engineering）
- 作者列表：Min-Sang Baek（Hanyang University, Department of Electronic Engineering）、Gyeong-Su Kim（Hanyang University, Department of Electronic Engineering）、Donghyun Kim（Hanyang University, Department of Electronic Engineering）、Joon-Hyuk Chang（Hanyang University, Department of Electronic Engineering）

#

💡 **毒舌点评**

亮点：论文系统性地将“物理规律”（如TDOA仅依赖麦克风相对位置）转化为可学习的网络模块（如rMPE和LNuDFT），这种“物理信息引导”的思路比纯粹的黑盒数据驱动更优雅，也显著提升了对未见阵列的泛化能力。短板：提出的框架在极端密集网格（如D>4096）下，于真实数据集上的性能收益不明显甚至略有下降，这暗示了模型在处理微小扰动时的稳定性或表示空间的极限可能仍有探索空间。

#

🔗 **开源详情**

- 代码：提供公开GitHub仓库链接（https://github.com/BaekMS/Audio-Geometry-Grid_Representation-Learning）。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：使用了公开的LOCATA挑战赛数据集（NAO robot和Eigenmike录音），以及合成的数据集。合成过程详细描述在附录中。
- Demo：未提及。
- 复现材料：非常充分。包括完整的模型架构细节（附录A.3， A.4）、损失函数公式、训练策略（MSGL、DSCL）、所有超参数设置、合成数据生成算法（算法3）、评估指标定义、以及用于复现的核心代码链接。
- 论文中引用的开源项目：使用了`gpuRIR`进行房间冲激响应仿真，`fvcore`用于计算复杂度，`py-webrtcvad`用于生成语音活动检测标签，以及公开的`LibriSpeech`、`MS-SNSD`、`TIMIT`、`ESC-50`等数据集。

📌 **核心摘要**

1. 问题：现有的深度神经网络声源定位（SSL）方法严重依赖于固定的麦克风阵列（MA）几何结构和预定义的到达方向（DOA）网格，导致其泛化性差，无法适应未见过的阵列或灵活的网格需求。
2. 方法核心：提出了音频-几何-网格表示学习（AGG-RL）框架。该框架包含两个网络：AuGeonet（从音频和阵列几何中提取音频-几何表示）和Gridnet（从候选DOA网格中提取网格表示）。两者在共享的潜在空间中通过内积对齐，生成概率空间谱。
3. 创新点：a) 引入可学习非均匀离散傅里叶变换（LNuDFT），使模型能自适应地分配频率bin，重点关注物理信息丰富的相位区域（如图2所示）；b) 设计相对麦克风位置编码（rMPE），将麦克风坐标相对于参考通道进行编码，与TDOA的物理特性一致；c) 通过表示学习对齐，实现了网格灵活和几何不变的SSL，无需重新训练即可适应新阵列和新网格。
4. 主要实验结果：在LOCATA等真实与合成数据集上，AGG-RL在未见阵列（如Eigenmike）和动态阵列配置上取得了最佳性能。如表3所示，在Eigenmike数据集上，该方法MAE为11.24°，ACC10为72.17%，显著优于基线Unet（14.89°/65.82%）和GI-DOAEnet（93.61°/0.00%）。消融实验（表3）证实了LNuDFT和rMPE的有效性。
5. 实际意义：该方法为构建能适应各种硬件（不同麦克风阵列）和任务需求（不同定位精度/网格）的“通用”声源定位系统提供了新思路，在机器人、自动驾驶、AR/VR等多领域有应用潜力。
6. 主要局限性：a) 计算复杂度：虽然AuGeonet部分复杂度随通道数线性增长，但Gridnet部分随网格点数D线性增长，D很大时可能带来额外开销（表5）。b) 性能边界：在真实数据上，当D超过2048时性能提升不明显甚至略有下降（表4），表明模型对过度密集网格的表示能力或鲁棒性存在边界。

#

---

