---
title: "ICLR 2026 - 声源定位 论文列表"
date: 2026-05-02
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
| 🥇 | [Physics-Informed Audio-Geometry-Grid Representation Learning](/audio-paper-digest-blog/posts/2026-05-02-physics-informed-audio-geometry-grid) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Physics-Informed Audio-Geometry-Grid Representation Learning for Universal Sound Source Localization](/audio-paper-digest-blog/posts/2026-05-02-physics-informed-audio-geometry-grid)

🔥 **8.0/10** | 前25% | #声源定位 | #物理信息 | #麦克风阵列 #鲁棒性

👥 **作者与机构**

- 第一作者：Min-Sang Baek (韩国汉阳大学 电子工程系)
- 通讯作者：Joon-Hyuk Chang* (韩国汉阳大学 电子工程系)
- 作者列表：Min-Sang Baek (韩国汉阳大学 电子工程系)， Gyeong-Su Kim (韩国汉阳大学 电子工程系)， Donghyun Kim (韩国汉阳大学 电子工程系)， Joon-Hyuk Chang* (韩国汉阳大学 电子工程系)

💡 **毒舌点评**

亮点：将表示学习与物理信息先验（如频率非均匀采样、相对位置编码）巧妙结合，提出的LNuDFT和rMPE组件有扎实的理论支撑且在实验中效果显著。
短板：框架引入了额外的Gridnet，尽管声称计算开销可控，但在实时性要求极高的边缘设备部署场景下，其推理延迟与资源消耗是否可接受，论文未做深入讨论与分析。

🔗 **开源详情**

- 代码：论文明确提供了源代码仓库链接：`https://github.com/BaekMS/Audio-Geometry-Grid_Representation-Learning`。
- 模型权重：论文未提及是否公开预训练模型权重。
- 数据集：论文使用了公开数据集（LOCATA用于评估， LibriSpeech/TIMIT/MS-SNSD/ESC-50用于训练和部分评估）。合成数据集的生成方法已在算法3和附录A.10中详细描述，可依此复现。
- Demo：未提及。
- 复现材料：非常充分。论文正文和附录提供了所有关键实现细节，包括：LNuDFT和rMPE的精确公式与初始化；AuGeonet和Gridnet的详细架构图（图4， 图5）；多阶段几何学习和深度监督课程学习的超参数表（表6）；合��数据生成算法（算法3）；损失函数、评估指标和推理算法的完整描述。
- 论文中引用的开源项目：论文提到了以下开源工具/代码：`gpuRIR`（用于RIR模拟）， `py-webrtcvad`（用于生成语音活动检测标签）， 以及基线方法`Neural-SRP`和`GI-DOAEnet`的公开代码仓库。

📌 **核心摘要**

本文针对现有深度神经网络声源定位（SSL）方法受限于固定麦克风阵列几何形状和预定义方向网格的问题，提出了一个通用框架——音频-几何-网格表示学习（AGG-RL）。该方法核心是通过一个双网络结构，联合学习源自音频信号和阵列几何的音频-几何表征（AGRs），以及编码候选方向的网格表征（GRs），两者通过内积相似性生成概率性空间谱，从而实现对任意网格和几何结构的泛化。与已有方法相比，其新意在于：1）首次将SSL任务解耦为互补的表示学习；2）引入可学习非均匀离散傅里叶变换（LNuDFT），自适应地将频率bin密集分配在富含相位信息的区域；3）提出相对麦克风位置编码（rMPE），直接编码符合TDOA物理特性的相对坐标。在合成数据集（Dynamic-S/U）和真实数据集（NAO机器人、Eigenmike）上的实验表明，所提方法在未见过的阵列几何（如Eigenmike）和通道数（如Dynamic-U）上均取得了最优性能。例如，在未见过的Eigenmike数据集上，所提方法的平均绝对误差（MAE）为11.24°，显著优于次优基线GI-DOAEnet的77.09°。该研究的意义在于为构建跨多种场景的通用空间声学场景理解系统提供了有效方案。其主要局限性在于，尽管设计了高效组件，但整体框架的计算开销相比一些轻量级基线有所增加，且未在动态声源场景下进行验证。

---

