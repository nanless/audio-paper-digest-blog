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

🔥 **8.0/10** | 前25% | #声源定位 | #表示学习 | #麦克风阵列 #多通道

👥 **作者与机构**

第一作者：Min-Sang Baek（汉阳大学电子工程系）
通讯作者：Joon-Hyuk Chang（汉阳大学电子工程系）
- **作者���表**：Min-Sang Baek（汉阳大学电子工程系）、Gyeong-Su Kim（汉阳大学电子工程系）、Donghyun Kim（汉阳大学电子工程系）、Joon-Hyuk Chang（汉阳大学电子工程系）

💡 **毒舌点评**

这篇论文的亮点在于其系统性设计：通过AGG-RL框架将看似独立的麦克风几何、信号特征和输出网格编码进一个共享的潜在空间，并用两个有物理依据的模块（LNuDFT和rMPE）来增强模型的归纳偏置，使得整个方案既有灵活性又不脱离声学物理本质。短板是其“通用性”目前主要局限于静态场景和已知信源数量的设定，且性能对大规模合成数据的依赖较强，在更动态或低信噪比的真实复杂场景下的鲁棒性仍有待验证。

🔗 **开源详情**

- **代码**：论文提供了公开的GitHub仓库链接：`https://github.com/BaekMS/Audio-Geometry-Grid_Representation-Learning`。
- **模型权重**：论文中未提及是否公开预训练模型权重。
- **数据集**：训练使用的合成数据是动态生成的，论文提供了生成算法（算法3）和参数。评估使用了公开数据集LOCATA（论文中提及）、STARSS23（附录提及）以及自构建的合成评估集（Dynamic-S/U），后者未提及是否公开。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在附录中提供了极其详细的复现信息，包括：模型架构细节（AuGeonet图4， Gridnet图5）、训练策略（多阶段几何学习表6，课程学习细节）、损失函数（公式22）、所有算法（1-3）、评估指标定义、超参数选择依据、以及使用的开源库和数据集。
- **论文中引用的开源项目**：论文明确使用了`gpuRIR`用于RIR模拟，`py-webrtcvad`用于生成语音活动检测标签，`fvcore`用于计算FLOPs。基线模型引用了`Neural-SRP`和`GI-DOAEnet`的开源实现。

📌 **核心摘要**

1. **问题**：现有的深度学习声源定位方法严重依赖于固定的麦克风阵列几何结构和预定义的DOA网格，限制了模型在不同硬件配置和输出需求下的泛化能力。
2. **方法核心**：提出了音频-几何-网格表示学习框架。它包含两个子网络：AuGeonet用于从音频和阵列几何中学习音频-几何表示；Gridnet用于将候选DOA网格编码为网格表示。两者在共享潜在空间中通过相似度计算生成空间谱。
3. **创新点**：a) 提出了同时学习音频-几何和网格表示的框架，实现几何不变与网格灵活的SSL；b) 引入了**可学习非均匀离散傅里叶变换**，自适应地密集分配频率 bins 以强调有信息量的相位区域；c) 提出了**相对麦克风位置编码**，以符合TDOA物理本质的相对方式编码麦克风坐标。
4. **主要实验结果**：在合成数据集（Dynamic-S/U）和真实数据集（NAO robot, Eigenmike）上，AGG-RL在MAE和ACC10指标上均显著优于MUSIC、SRP-PHAT、Unet、Neural-SRP和GI-DOAEnet等基线方法，特别是在未见过的阵列几何（如Eigenmike）和动态配置（Dynamic-U）下优势明显。消融实验验证了LNuDFT、rMPE和AGG-RL框架各自的贡献。
5. **实际意义**：该框架为实现跨多样硬件配置和场景的“通用”声源定位系统提供了一个有效方案，提升了模型在真实世界部署中的适应性和灵活性。
6. **主要局限性**：模型的“通用性”验证主要在静态声源和已知声源数量的条件下。对于高度动态的声源或更复杂的未知声源数量场景，其性能可能受限。此外，框架的整体计算复杂度（尤其是Gridnet部分）虽比部分基线低，但随网格密度线性增长。

---

