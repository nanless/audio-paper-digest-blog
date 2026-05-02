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
| 🥇 | [Physics-Informed Audio-Geometry-Grid Representation Learning](/audio-paper-digest-blog/posts/2026-05-03-physics-informed-audio-geometry-grid) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Physics-Informed Audio-Geometry-Grid Representation Learning for Universal Sound Source Localization](/audio-paper-digest-blog/posts/2026-05-03-physics-informed-audio-geometry-grid)

✅ **6.5/10** | 前25% | #声源定位 | #麦克风阵列 | #时频分析 #信号处理

👥 **作者与机构**

- 第一作者：Min-Sang Baek（汉阳大学电子工程系）
- 通讯作者：Joon-Hyuk Chang（汉阳大学电子工程系）
- 作者列表：Min-Sang Baek（汉阳大学电子工程系），Gyeong-Su Kim（汉阳大学电子工程系），Donghyun Kim（汉阳大学电子工程系），Joon-Hyuk Chang（汉阳大学电子工程系）

#

💡 **毒舌点评**

亮点：论文将“表示学习”思想系统地引入声源定位领域，通过联合学习音频-几何表示和网格表示，并辅以两个精心设计的物理信息组件（LNuDFT和rMPE），有效缓解了方法对特定阵列几何和预定义网格的依赖，泛化能力提升明显。短板：方法框架本身（AuGeonet + Gridnet + 相似度计算）并非全新，核心创新更侧重于组件（LNuDFT、rMPE）的引入和整合；在未见阵列上的性能仍有提升空间，且论文对“物理信息”在深度网络中作用的理论分析略显不足，主要停留在实验验证。

#

🔗 **开源详情**

*   代码：论文提供了公开的代码仓库链接：`https://github.com/BaekMS/Audio-Geometry-Grid_Representation-Learning`。
*   模型权重：未提及公开预训练模型权重。
*   数据集：使用了公开的合成数据生成方法以及公开数据集（LibriSpeech, MS-SNSD, TIMIT, ESC-50, LOCATA, STARSS23）。未提及生成或发布新的专有数据集。
*   Demo：未提供在线演示。
*   复现材料：论文提供了非常详细的复现信息，包括：模型架构图（图4, 5）、训练策略（CGT, MSGL, DSCL）及其超参数（表6）、损失函数、优化器设置、数据生成算法（算法3）及参数范围（表1, 公式23）。附录（A.1-A.17）提供了大量技术细节、可视化结果和补充实验。
*   引用的开源项目/工具：`gpuRIR`（用于RIR模拟），`py-webrtcvad`（用于生成VAD标签），`fvcore`（用于计算FLOPs），以及多个基线方法的开源实现（`Neural-SRP`, `GI-DOAEnet`）。

📌 **核心摘要**

1.  问题：现有基于深度神经网络的声源定位（SSL）方法通常受限于固定的麦克风阵列几何形状和预定义的到达方向（DOA）网格，导致泛化性和可扩展性不足。
2.  方法核心：提出音频-几何-网格表示学习（AGG-RL）框架，通过两个网络（AuGeonet和Gridnet）分别学习音频-几何表示（AGR）和网格表示（GR），并将两者映射到共享潜在空间，通过计算相似度生成概率空间谱，从而实现对任意阵列和网格的通用SSL。
3.  创新点：在框架中引入两个物理信息组件：a) 可学习非均匀离散傅里叶变换（LNuDFT），优化频率bin的非均匀分配，以强调携带物理信息相位线索的频段；b) 相对麦克风位置编码（rMPE），按照通道间时间差的物理特性，以相对坐标方式编码麦克风位置。
4.  实验结果：在合成和真实数据集（如LOCATA）上的实验表明，所提方法在已知和未知（特别是未见过的阵列几何和通道数）条件下均优于现有基线方法。例如，在动态未知通道数（Dynamic-U）数据集上，AGG-RL的MAE为14.12°，ACC10为63.17%，显著优于GI-DOAEnetFM（MAE 54.81°， ACC10 6.10%）和Unet（MAE 19.15°， ACC10 60.57%）。消融研究证实了每个组件的有效性。
5.  实际意义：AGG-RL为实现跨多样场景的通用空间声学场景理解提供了一种有前景的解决方案，增强了SSL系统在实际多变环境中的部署能力。
6.  主要局限性：a) 在未见条件下的性能与已见条件相比仍有差距；b) LNuDFT的初始化策略（logit映射）虽然有效，但其最优选择缺乏理论指导；c) 框架对动态网格的处理虽然灵活，但计算开销会随网格数量增加而线性增长。

#

---

