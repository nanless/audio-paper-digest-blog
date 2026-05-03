---
title: "ICLR 2026 - 声源定位 论文列表"
date: 2026-05-04
draft: false
tags: ["声源定位"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 声源定位 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 声源定位

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OWL : Geometry-Aware Spatial Reasoning for Audio Large Langu](/audio-paper-digest-blog/posts/2026-05-04-owl-geometry-aware-spatial-reasoning-for-audio) | 8.0分 | 前25% |
| 🥈 | [Physics-Informed Audio-Geometry-Grid Representation Learning](/audio-paper-digest-blog/posts/2026-05-04-physics-informed-audio-geometry-grid) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [OWL : Geometry-Aware Spatial Reasoning for Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-04-owl-geometry-aware-spatial-reasoning-for-audio)

🔥 **8.0/10** | 前25% | #声源定位 | #音频大模型 | #音频问答 #空间音频

👥 **作者与机构**

- 第一作者：Subrata Biswas (Worcester Polytechnic Institute, 电气与计算机工程系)
- 通讯作者：未说明
- 作者列表：Subrata Biswas (Worcester Polytechnic Institute, 电气与计算机工程系), Mohammad Nur Hossain Khan (Worcester Polytechnic Institute, 电气与计算机工程系), Bashima Islam (Worcester Polytechnic Institute, 电气与计算机工程系) (*共同第一作者)

💡 **毒舌点评**

这篇论文的亮点在于将几何信息（通过全景深度图和RIR模拟）作为训练时的监督信号注入到音频编码器中，从而显著提升了仅用音频输入时的定位精度，并创新性地为音频大模型引入了空间基础的链式思考，使推理过程更可解释。然而，其核心短板在于所有训练和验证数据均来自合成（SoundSpaces仿真），这严重削弱了其在真实复杂声学环境中泛化能力的论证力度，尽管文中提供了少量真实世界数据的零样本测试，但说服力有限。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/BASHLab/OWL。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：BiDepth数据集承诺公开，但未说明具体获取方式（如下载链接）。
- Demo：未提供在线演示链接。
- 复现材料：论文提供了详细的架构描述、训练超参数、损失函数细节及附录，复现信息较为充分。
- 论文中引用的开源项目：SoundSpaces v2.0、Matterport3D、LLaMA-2-7B、AudioMAE、BLIP-2的Q-Former等。
- 开源计划：论文明确提及将开源数据集和代码。

📌 **核心摘要**

1. 问题：当前音频大模型在空间推理（如方向、距离估计）方面能力不足，原因在于编码器缺乏显式的几何感知，且推理过程为单步黑盒，导致精度和可解释性差。
2. 方法核心：提出几何感知的音频编码器SAGE，在训练时利用双耳房间脉冲响应（RIR）和全景深度图进行多模态监督，学习几何与声学的映射；构建了OWL大模型，将SAGE与空间基础的链式思考结合，通过课程学习实现从感知到多步推理。
3. 新意：首次在音频编码器中引入显式几何监督（通过辅助RIR重建任务）；首次为音频大模型设计并验证了空间推理的链式思考机制；构建了首个大规模、几何对齐的音频-深度-QA四元组数据集BiDepth。
4. 实验结果：
    * 在SAGE的SELD任务上，与SOTA方法相比，平均角度误差（MAE）降低11°，距离误差率（DER）降低33.5%。
    * 在BiDepth数据集上，OWL（带CoT）相比BAT，在感知QA上提升46.4%，在空间推理QA上提升24.9%；在12扇区DoA估计上准确率达46.17%。
    * 消融实验证实，几何损失对定位指标提升关键；三阶段课程训练对最终性能不可或缺。
5. 实际意义：推动了音频大模型从单纯的“听清是什么”向“理解在哪里、如何关联”的精细空间理解发展，为机器人听觉、增强现实等需要空间音频推理的应用提供了新思路。
6. 主要局限性：数据集合成性是最大短板，真实世界泛化能力有待更强验证；推理任务目前限于单轮QA，未扩展到对话形式。

---

### 🥈 [Physics-Informed Audio-Geometry-Grid Representation Learning for Universal Sound Source Localization](/audio-paper-digest-blog/posts/2026-05-04-physics-informed-audio-geometry-grid)

✅ **7.5/10** | 前25% | #声源定位 | #麦克风阵列 | #信号处理 #物理启发

👥 **作者与机构**

- 第一作者：Min-Sang Baek（汉阳大学电子工程系）
- 通讯作者：Joon-Hyuk Chang（汉阳大学电子工程系）
- 作者列表：Min-Sang Baek（汉阳大学电子工程系）、Gyeong-Su Kim（汉阳大学电子工程系）、Donghyun Kim（汉阳大学电子工程系）、Joon-Hyuk Chang（汉阳大学电子工程系）

💡 **毒舌点评**

亮点：论文最大的优点在于“讲了一个完整且自洽的故事”——从声源定位的物理本质（TDOA/IPD与相对位置的关系）出发，设计了LNuDFT和rMPE这两个物理启发模块，最终将它们优雅地整合进一个统一的表示学习框架（AGG-RL）中，逻辑链条非常清晰。短板：虽然方法在静态声源定位上表现全面，但对于声源场景更复杂的动态、移动声源定位能力尚未验证，这在结论的“实际意义”宣称中构成了一个潜在的局限。此外，框架引入的Gridnet模块增加了计算开销，在资源严格受限的嵌入式设备上的部署效率有待进一步探讨。

🔗 **开源详情**

-   代码：提供了公开的GitHub仓库链接：https://github.com/BaekMS/Audio-Geometry-Grid_Representation-Learning。
-   模型权重：论文中未明确提及是否公开训练好的模型权重。
-   数据集：训练使用了动态生成的合成数据（描述了生成算法），评估使用了公开数据集LOCATA（Löllmann et al., 2018）和STARSS23（Shimada et al., 2023）以及合成评估集。未提供自建评估数据集的下载链接。
-   Demo：论文中未提及在线演示。
-   复现材料：提供了极其详细的复现材料，包括：
    *   详细的合成数据生成算法（算法3）和参数范围（表1）。
    *   完整的模型架构描述（AuGeonet、Gridnet）和超参数设置（如学习率、优化器、batch size、LNuDFT参数等）。
    *   训练策略的详细说明（MSGL和DSCL）。
    *   损失函数和峰值检测算法的公式（公式22，算法2）。
    *   评估指标的定义（公式24，公式25）。
-   论文中引用的开源项目：使用了gpuRIR（Diaz-Guerra et al., 2021b）进行房间脉冲响应模拟，以及LibriSpeech、MS-SNSD、TIMIT、ESC-50、LOCATA、STARSS23等公开数据集。

📌 **核心摘要**

1.  要解决什么问题：现有的深度学习声源定位方法大多受限于固定的麦克风阵列几何结构和预定义的声源方向（DOA）网格，导致模型在面对新的阵列或需要灵活改变定位网格时，泛化能力差且需要重新训练。
2.  方法核心是什么：提出音频-几何-网格表示学习（AGG-RL）框架，它包含两个子网络：AuGeonet（处理音频和阵列几何，输出音频-几何表示）和Gridnet（处理候选DOA网格，输出网格表示）。两者在共享潜在空间中对齐，其相似度即为空间谱。框架引入了两个物理启发组件：可学习非均匀离散傅里叶变换（LNuDFT）自适应优化频率采样以捕捉关键相位信息；相对麦克风位置编码（rMPE）以相对坐标形式编码阵列几何，更符合TDOA的物理特性。
3.  与已有方法相比新在哪里：相比固定的分类方法或模板匹配方法，AGG-RL首次实现了在同一个训练好的模型上，同时支持任意阵列几何和任意定位网格的推理，无需重新训练。LNuDFT将频率采样点作为可学习参数，是一个新颖的特征提取思路。rMPE相比之前的绝对位置编码（aMPE）更符合物理规律，提升了对未见阵列的泛化性。
4.  主要实验结果如何：在多个合成和真实数据集（NAO机器人、Eigenmike等）上，AGG-RL框架（尤其是结合LNuDFT和rMPE后）在平均角度误差（MAE）和准确率（ACC10）上均优于多种基线方法（如Unet, Neural-SRP, GI-DOAEnet）。特别是在未见过的阵列几何（如Eigenmike, Dynamic-U）上，性能优势更为明显。消融实验证明了每个组件的有效性。关键数据见下表：

| 方法 | NAO robot (MAE/ACC10) | Eigenmike (MAE/ACC10) | Dynamic-S (MAE/ACC10) | Dynamic-U (MAE/ACC10) |
| :--- | :--- | :--- | :--- | :--- |
| Proposed | 8.25 ±1.52 / 90.78 | 11.24 ±1.76 / 72.17 | 10.32 ±0.49 / 77.34 | 14.12 ±0.77 / 63.17 |
| GI-DOAEnetFM | 11.31 ±2.54 / 77.36 | 93.61 ±13.06 / 0.00 | 15.49 ±0.55 / 64.36 | 54.81 ±1.73 / 6.10 |
| Neural-SRP | 9.72 ±2.28 / 78.66 | 52.75 ±18.61 / 22.16 | 19.60 ±0.74 / 52.32 | 21.18 ±1.01 / 45.51 |
| Unet | 10.89 ±1.53 / 86.25 | 14.89 ±1.76 / 65.82 | 19.94 ±0.69 / 58.88 | 19.15 ±0.94 / 60.57 |

5.  实际意义是什么：该框架为构建“通用”声源定位系统提供了可能，使得一个模型能够适应多种硬件设备（不同麦克风阵列）和不同应用需求（不同定位精度要求），降低了部署和维护成本，对机器人、智能设备、AR/VR等领域有实用价值。
6.  主要局限性是什么：当前工作主要针对静态声源，未验证对移动声源的跟踪能力。框架的Gridnet模块虽然支持灵活网格，但引入了额外的计算和参数，在极端资源受限场景下的效率需要权衡。LNuDFT的初始化策略（如logit映射）是经验性的，其最优选择有待理论分析。

---

