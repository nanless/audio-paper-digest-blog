---
title: "ICASSP 2026 - 声源定位 论文列表"
date: 2026-04-29
draft: false
tags: ["声源定位"]
categories: [icassp-2026]
description: "共 15 篇 ICASSP 2026 声源定位 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 声源定位

共 **15** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Bridging the Measurement–Simulation Gap in Room Acoustics wi](/audio-paper-digest-blog/posts/2026-04-29-bridging-the-measurementsimulation-gap-in-room) | 8.5分 | 前25% |
| 🥈 | [DSRMS-TransUnet: A Decentralized Non-Shifted Transunet for S](/audio-paper-digest-blog/posts/2026-04-29-dsrms-transunet-a-decentralized-non-shifted) | 8.0分 | 前10% |
| 🥉 | [FUN-SSL: Full-Band Layer Followed by U-Net With Narrow-Band ](/audio-paper-digest-blog/posts/2026-04-29-fun-ssl-full-band-layer-followed-by-u-net-with) | 8.0分 | 前25% |
| 4. | [Atomic Norm Minimization Revisited: Progressive Atom Identif](/audio-paper-digest-blog/posts/2026-04-29-atomic-norm-minimization-revisited-progressive) | 7.5分 | 前25% |
| 5. | [Physics-Informed Neural Networks for Ocean Acoustic Field Re](/audio-paper-digest-blog/posts/2026-04-29-physics-informed-neural-networks-for-ocean) | 7.5分 | 前25% |
| 6. | [Theory and Application of Circular Relative Harmonic Coeffic](/audio-paper-digest-blog/posts/2026-04-29-theory-and-application-of-circular-relative) | 7.5分 | 前25% |
| 7. | [Sequential and Simultaneous Optimization of Microphone Array](/audio-paper-digest-blog/posts/2026-04-29-sequential-and-simultaneous-optimization-of) | 7.5分 | 前25% |
| 8. | [Spiking Attention Network: A Hybrid Neuromorphic Approach to](/audio-paper-digest-blog/posts/2026-04-29-spiking-attention-network-a-hybrid-neuromorphic) | 7.0分 | 前25% |
| 9. | [SIRUP: A Diffusion-Based Virtual Upmixer of Steering Vectors](/audio-paper-digest-blog/posts/2026-04-29-sirup-a-diffusion-based-virtual-upmixer-of) | 7.0分 | 前25% |
| 10. | [Phase-Retrieval-Based Physics-Informed Neural Networks For A](/audio-paper-digest-blog/posts/2026-04-29-phase-retrieval-based-physics-informed-neural) | 7.0分 | 前50% |
| 11. | [Microphone-Less Measurement of Three-Dimensional Radiating I](/audio-paper-digest-blog/posts/2026-04-29-microphone-less-measurement-of-three-dimensional) | 7.0分 | 前25% |
| 12. | [Improving Binaural Distance Estimation in Reverberant Rooms ](/audio-paper-digest-blog/posts/2026-04-29-improving-binaural-distance-estimation-in) | 7.0分 | 前25% |
| 13. | [A Unified SVD-Modal Solution for Sparse Sound Field Reconstr](/audio-paper-digest-blog/posts/2026-04-29-a-unified-svd-modal-solution-for-sparse-sound) | 6.5分 | 前25% |
| 14. | [An Envelope Separation Aided Multi-Task Learning Model for B](/audio-paper-digest-blog/posts/2026-04-29-an-envelope-separation-aided-multi-task-learning) | 6.5分 | 前25% |
| 15. | [Adaptive Spectral Weighting in Sagittal-Plane Sound Localiza](/audio-paper-digest-blog/posts/2026-04-29-adaptive-spectral-weighting-in-sagittal-plane) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Bridging the Measurement–Simulation Gap in Room Acoustics with Real2sim Diffusion](/audio-paper-digest-blog/posts/2026-04-29-bridging-the-measurementsimulation-gap-in-room)

🔥 **8.5/10** | 前25% | #声源定位 | #扩散模型 | #麦克风阵列 #信号处理

👥 **作者与机构**

- 第一作者：Jean-Daniel Pascal Prieto（UMRAE, Cerema, Univ. Gustave Eiffel, Strasbourg, France；Inria, IRMA, Université de Strasbourg, CNRS UMR 7501, Strasbourg, France）
- 通讯作者：未说明
- 作者列表：Jean-Daniel Pascal Prieto（UMRAE, Cerema, Univ. Gustave Eiffel, Strasbourg, France；Inria, IRMA, Université de Strasbourg, CNRS UMR 7501, Strasbourg, France）、Antoine Deleforge（Inria, IRMA, Université de Strasbourg, CNRS UMR 7501, Strasbourg, France）、Cédric Foy（UMRAE, Cerema, Univ. Gustave Eiffel, Strasbourg, France）、Marceau Tonelli（UMRAE, Cerema, Univ. Gustave Eiffel, Strasbourg, France）

💡 **毒舌点评**

这篇论文的亮点在于巧妙地用生成式扩散模型（薛定谔桥）来解决一个物理建模中的“脏数据”问题（测量失配），这种思路在声学领域较为新颖，且实验上成功地在真实测量数据上实现了较高的声像源定位召回率，是迈向实用化的重要一步。但其短板在于，整个框架高度依赖于对特定测量设备（扬声器、麦克风阵列）响应的精确模拟和训练，这可能限制其泛化能力；另外，真实数据上评估用的“正确”标准（如1米、20度阈值）相对粗糙，无法精细量化定位精度的提升。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：`https://github.com/jdpascal/Real2Sim_RIRs`。
- 模型权重：论文未明确提及是否公开预训练的模型权重。
- 数据集：训练数据为使用`pyroomacoustics`库合成的模拟数据，论文未提及是否公开合成后的数据集。代码中应包含生成数据的脚本。
- Demo：论文中未提及在线演示。
- 复现材料：论文承诺在GitHub页面提供代码、实现细节以及“额外的实验细节、图表和结果”，这包含了复现所需的关键材料。论文本身也提供了详细的超参数设置（如`γ`, `ρ`）、网络结构描述和训练流程。
- 论文中引用的开源项目：论文依赖并引用了`pyroomacoustics`[26]作为RIR模拟器。

📌 **核心摘要**

1.  要解决的问题：从真实房间脉冲响应（RIR）中精确恢复早期声反射（声像源）的位置和属性。传统的物理驱动方法假设理想的、离散的早期回声，但真实测量中的回声因非理想的设备响应（指向性、频率响应）而发生畸变和重叠，导致模型严重失配，使得物理逆问题难以求解。
2.  方法核心：提出Real2Sim扩散框架，其核心是一个基于扩散过程的“薛定谔桥”模型。该模型在成对的模拟数据上训练，学习将“逼真的”模拟RIR（包含复杂的设备响应和反射器特性）映射到“简化的”、规范的模拟RIR（采用理想的、尖峰式的回声模型）。
3.  与已有方法相比新在哪里：首次将扩散薛定谔桥模型应用于声学领域的“Real2Sim”任务，旨在弥合真实测量与理想物理模型之间的鸿沟。它避免了传统数据驱动方法需要固定目标数量（如房间维度）的限制，也无需物理逆方法那样对模型完美匹配的苛刻要求。
4.  主要实验结果：论文在模拟和真实数据上进行了评估。核心实验是将处理后的RIR输入一个物理驱动的图像源定位算法。
    *   在模拟数据上：对于1阶和2阶声像源，召回率分别达到89.0%和80.3%，平均径向误差分别为0.00米和0.01米，角度误差分别为4.20°和6.10°。
    *   在真实数据上：在10组实测中，成功定位了每组10到14个声像源（最高3阶），占可听声像源总数的74%。具体数据见下表：

| 数据类型 | IS阶数 | 召回率R (%) | 径向误差RE (m) | 角度误差AE (°) | 欧氏距离误差EE (m) | 无Real2Sim时的召回率R (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 模拟数据 | 1 | 89.0 | 0.00 | 4.20 | 0.30 | 24.1 |
| | 2 | 80.3 | 0.01 | 6.10 | 0.54 | 10.8 |
| | 3 | 64.3 | 0.20 | 8.63 | 0.94 | 3.33 |
| 真实数据 | 1 | 88.2 | 0.04 | 6.87 | 0.55 | 27.7 |
| | 2 | 73.2 | 0.24 | 11.4 | 1.10 | 21.3 |
| | 3 | 40.0 | 0.36 | 14.0 | 1.67 | 16.7 |

5.  实际意义：该工作为房间声学分析、混合现实、空间音频再现等应用提供了一种新的可能性，即通过数据驱动的方法将真实世界复杂测量数据“规整化”，使其能够被现有的物理模型和逆问题求解器有效处理，有望提升实际场景下房间几何参数估计和声学诊断的鲁棒性与准确性。
6.  主要局限性：1) 模型训练严重依赖对特定设备响应和房间模拟器的精确建模，其泛化到未见过的设备类型或极端房间条件的能力有待验证。2) 仅处理了RIR的前18毫秒，限制了可检测的声像源距离（约6.3米内）。3) 真实数据上声像源的定位结果无法获得像素级的精确真值，评估阈值（1米，20度）较宽，无法完全反映实际定位精度。

---

### 🥈 [DSRMS-TransUnet: A Decentralized Non-Shifted Transunet for Shallow Water Acoustic Source Range Estimation](/audio-paper-digest-blog/posts/2026-04-29-dsrms-transunet-a-decentralized-non-shifted)

🔥 **8.0/10** | 前10% | #声源定位 | #端到端 | #自回归模型 #鲁棒性

👥 **作者与机构**

- 第一作者：Bin Zhang（中国海洋大学计算机科学与技术系）
- 通讯作者：Peishun Liu（中国海洋大学计算机科学与技术系）
- 作者列表：Bin Zhang† (中国海洋大学计算机科学与技术系), Jiawen He† (中国海洋大学计算机科学与技术系), Liang Wang‡ (中国海洋大学海洋技术系), Wenxu Wang† (中国海洋大学计算机科学与技术系), Ruichun Tang† (中国海洋大学计算机科学与技术系), Peishun Liu†⋆ (中国海洋大学计算机科学与技术系)

💡 **毒舌点评**

论文亮点在于巧妙地将复杂的复值协方差矩阵分解为双通道实值图像进行处理，避免了复杂的复数运算，同时用深度可分离卷积和RMSNorm大幅降低了原始TransUNet的计算量，实现了“轻量化”与“高性能”的结合。然而，论文标题和摘要中强调的“去中心化”和“非移位”这两个关键特性，在正文的方法描述和实验中几乎找不到具体的实现细节或与传统集中式、移位机制的对比实验，使得这部分贡献显得有些悬空。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接（https://github.com/binzhangbin/DSRMS-TranUNet）。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：模拟数据由作者生成，真实数据来自公开的SWellEx-96海试项目（https://swellex96.ucsd.edu）。论文未说明如何获取或预处理其版本。
- Demo：未提及。
- 复现材料：论文给出了模型架构、主要模块（DSC, RViT）的原理和参数，但未提供详细的训练超参数（学习率、batch size等）、硬件配置、训练脚本或配置文件。
- 论文中引用的开源项目：未明确引用外部开源项目，但提到了参考TransUNet架构，并引用了MobileNet、Xception等使用DSC的模型作为基础。

📌 **核心摘要**

1.  要解决什么问题？ 水下声学被动定位中，声源测距任务受介质吸收、多径效应和噪声影响严重，传统匹配场处理方法对信噪比敏感且依赖精确的环境参数，性能不稳定。
2.  方法核心是什么？ 提出DSRMS-TransUNet模型。核心在于：a) 将接收信号的复协方差矩阵分解为实部和虚部两个独立通道输入，保留了完整的空间结构；b) 在编码器-解码器框架中用深度可分离卷积替代标准卷积以减少参数；c) 引入基于RMSNorm的轻量化视觉Transformer（RViT）以增强全局特征捕获能力并简化计算。
3.  与已有方法相比新在哪里？ 首次提出将复协方差矩阵分解为双通道实值特征图输入深度学习模型。创新性地结合了DSC的轻量化和ViT的长程依赖建模能力，并对ViT进行了针对水声特征的RMSNorm优化。采用端到端的网格分类方式进行测距。
4.  主要实验结果如何？ 在模拟数据上，模型在噪声条件下相比基线（TransUNet）准确率提升超过19%。在真实数据集SWellEx-96的两个阵列（HLAH, HLAS）上，分别取得了91%和94%的准确率，均方根误差（RMSE）低至0.0426和0.1011，在准确率和误差指标上均优于MFP、Transformer、Conformer等传统及深度学习方法。关键实验数据见下表。
    | 模型 | 参数量 | 仿真-无噪声准确率 | HLAH准确率 | HLAS准确率 | HLAH RMSE | HLAS RMSE |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | Baseline (TransUNet) | 74,905,776 | 74.75% | 78% | 78% | 0.1426 | 0.3597 |
    | DS-TransUnet | 54,834,050 | 82.75% | 84% | 87% | 0.0991 | 0.3249 |
    | DSRMS-TransUnet | 54,817,666 | 100.00% | 91% | 94% | 0.0426 | 0.1011 |
    | MFP (传统方法) | - | - | - | - | 0.2679 | 0.4897 |
5.  实际意义是什么？ 为浅海环境下的水下被动声源测距提供了一种高精度、高鲁棒性的深度学习解决方案，其轻量化的设计有利于在资源受限的水下设备上部署。
6.  主要局限性是什么？ a) 论文标题中的“去中心化”和“非移位”特性在方法描述中未详细阐述，具体实现机制不明确；b) 对于水下声学这一高度依赖物理模型的领域，纯数据驱动模型的泛化性和在极端未知环境下的鲁棒性有待更多验证；c) 训练策略、超参数等复现关键信息缺失。

---

### 🥉 [FUN-SSL: Full-Band Layer Followed by U-Net With Narrow-Band Layers for Multiple Moving Sound Source Localization](/audio-paper-digest-blog/posts/2026-04-29-fun-ssl-full-band-layer-followed-by-u-net-with)

🔥 **8.0/10** | 前25% | #声源定位 | #U-Net | #深度学习 #麦克风阵列

👥 **作者与机构**

- 第一作者：未说明（论文中未明确标注第一作者，作者列表按姓氏排序）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Yuseon Choi（光州科学技术院， Deeply Inc.）、Hyeonseung Kim（光州科学技术院）、Jewoo Jun（光州科学技术院）、Jong Won Shin（光州科学技术院）

#

💡 **毒舌点评**

亮点：论文的“性价比”极高，通过引入成熟的U-Net架构和深度可分离卷积，在模型参数量几乎不变的情况下，将计算复杂度（FLOPs）降低了近一半，同时定位精度还有小幅提升，这在面向实时部署的边缘计算场景下具有很强的吸引力。
短板：模型在更贴近真实、更具挑战性的LOCATA数据集上，性能相比基线IPDnet并未取得明显优势，这暗示其在极端复杂声学环境下的泛化能力或改进效果可能存在天花板，创新性稍显不足。

#

🔗 **开源详情**

*   代码：论文中未提及FUN-SSL的代码仓库链接。但提供了基线模型IPDnet的官方代码链接：https://github.com/Audio-WestlakeU/FN-SSL。
*   模型权重：未提及公开预训练模型权重。
*   数据集：论文使用了公开的模拟数据集生成方法和LOCATA挑战数据集，但未提供生成的模拟数据集本身。
*   Demo：未提及在线演示。
*   复现材料：论文给出了充分的训练细节、网络参数配置（如通道数C1, C2）、以及关键的消融实验设计，为研究者复现工作提供了明确的指引。
*   论文中引用的开源项目：引用了IPDnet的官方代码仓库、gpuRIR（房间脉冲响应生成库）、LibriSpeech（语音语料库）、NOISEX-92（噪声数据库）。

📌 **核心摘要**

这篇论文针对多移动声源定位任务中现有高性能模型（如IPDnet）计算复杂度过高的问题，提出了一种名为FUN-SSL的新颖神经网络架构。其方法核心是将原有的全窄带处理块（FN-block）替换为“全带层+U-Net窄带层”（FUN-block），在保持全带处理以捕捉频间相关性的同时，利用U-Net结构在多个分辨率上高效地建模时序依赖。主要创新在于模块化设计和引入了模块间的跳跃连接以丰富信息流。实验结果表明，在模拟数据集上，FUN-SSL（0.8M参数）在粗粒度准确率（94.2%）、细粒度误差（1.9°）和误警率（5.8%）上均优于重新训练的IPDnet（0.7M参数，对应指标为93.0%、2.0°、7.1%），同时计算量（FLOPs）从19.4G/s降至10.8G/s。该工作的实际意义在于为资源受限设备（如麦克风阵列）上的实时多声源跟踪提供了更高效的解决方案。主要局限性在于其在真实世界LOCATA数据集上的性能与基线模型相当，未展现出显著优势。

#

---

### 4. [Atomic Norm Minimization Revisited: Progressive Atom Identification And Refinement](/audio-paper-digest-blog/posts/2026-04-29-atomic-norm-minimization-revisited-progressive)

✅ **7.5/10** | 前25% | #声源定位 | #信号处理 | #麦克风阵列 #实时处理

👥 **作者与机构**

- 第一作者：Xiaozhi Liu（北航数学科学学院）
- 通讯作者：Yong Xia（北航数学科学学院）
- 作者列表：Xiaozhi Liu（北航数学科学学院）、Jinjiang Wei（北航数学科学学院）、Yong Xia†（北航数学科学学院）

💡 **毒舌点评**

这篇论文理论功底扎实，通过极限重写了原子范数公式，巧妙地绕开了计算昂贵的SDP，并顺手搭了一座连接贝叶斯估计的桥，理论上有新意；其提出的PAIR算法在无噪声仿真中也展示了惊人的速度和精度提升。然而，论文对噪声场景的处理轻描淡写地用一句“留作未来研究”带过，这对于一个信号处理领域的实际应用算法而言是严重的短板，大大削弱了其实用性和说服力。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：未提及。实验数据为随机生成。
- Demo：未提供。
- 复现材料：提供了算法描述（PAIR流程）和关键参数设置（`β`序列，`γ=8`），但缺乏完整的伪代码和实现细节。
- 引用的开源项目：论文中未提及引用或依赖其他开源项目。
- 开源计划：论文中未提及开源计划。

📌 **核心摘要**

1.  要解决什么问题：原子范数最小化（ANM）是解决线谱估计（如到达方向估计）问题的强力工具，但传统方法依赖于半定规划（SDP），导致计算复杂度过高，限制了实时应用。
2.  方法核心是什么：本文提出了一种基于极限的原子范数新公式（定理1-3），避免了SDP。该公式揭示了原子范数与贝叶斯估计目标函数之间的联系。基于此，提出了名为PAIR的低复杂度算法，通过序列化的原子识别与准牛顿法细化来求解。
3.  与已有方法相比新在哪里：1）提出了一种不依赖SDP的原子范数等价极限公式，并可推广至一般原子集；2）从理论上桥接了ANM与贝叶斯线谱估计方法；3）设计的PAIR算法是网格无关的，计算效率远高于基于SDP的网格无关方法（如SDP-ANM, EMaC），且能自动估计信号源数量。
4.  主要实验结果如何：在无噪声、5个正弦分量的仿真实验中（n=64）：
    - 成功率：在采样数m较低时（如m=10），PAIR的成功率显著高于SDP-ANM和EMaC，与SRCS接近（见图1a）。
    - 运行时间：在所有m值下，PAIR的运行时间比SDP-ANM和EMaC快两个数量级以上，也比SRCS快一个数量级（见图1b）。
    - 频率估计误差：PAIR的估计误差δ(f, ̂f)的均值和方差均小于对比方法（见图1c）。
    - 关键数据：论文未提供具体数值，结论基于图表。
5.  实际意义是什么：该工作为高精度、低延迟的线谱估计提供了一种新的高效算法框架，尤其适用于对实时性要求高的场景，如实时波束成形和动态频谱感知。
6.  主要局限性是什么：论文的核心局限性在于其分析和实验几乎完全基于无噪声场景，而实际应用必然面临噪声干扰。对于噪声下的性能、算法稳定性以及参数选择（如β序列）的鲁棒性缺乏分析。此外，实验仅验证了一维线谱估计场景。

---

### 5. [Physics-Informed Neural Networks for Ocean Acoustic Field Reconstruction and Source Localization](/audio-paper-digest-blog/posts/2026-04-29-physics-informed-neural-networks-for-ocean)

✅ **7.5/10** | 前25% | #声源定位 | #物理信息神经网络 | #水声学 #匹配场处理

👥 **作者与机构**

- 第一作者：Yongsung Park（Woods Hole Oceanographic Institution, Woods Hole, MA, USA）
- 通讯作者：未说明
- 作者列表：Yongsung Park（Woods Hole Oceanographic Institution）

#

💡 **毒舌点评**

论文巧妙地利用包络平滑技术，让原本对神经网络来说过于“剧烈”的水下声场变得“温和”，从而成功将PINN应用于生成物理合理的匹配场副本，在未见区域表现亮眼。然而，作为一篇定位领域的论文，其对比基线却只是一个简单的全连接网络分类器，显得有些保守，未能充分彰显该方法相对于现有高性能MFP或PINN方法的优势。

#

🔗 **开源详情**

论文中未提及任何开源计划。
- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：实验使用公开的SWellEx-96数据集，但论文未提供获取或处理该数据集的具体脚本。
- Demo：未提及。
- 复现材料：论文提供了一些关键超参数（网络层数、宽度、激活函数、优化器、学习率、迭代次数、损失权重），但缺失部分细节（如各损失项的具体点数量、完整数据处理流程），整体复现信息不够充分。
- 论文中引用的开源项目：未提及依赖的特定开源工具或模型库。

📌 **核心摘要**

本文针对水下声源定位中传统匹配场处理（MFP）易受环境失配影响，以及纯数据驱动方法在未见场景下泛化能力差的问题，提出了一种基于物理信息神经网络（PINN）的匹配场处理（PINN-MFP）框架。该方法的核心是训练一个PINN，从稀疏测量数据中重建声场，其训练损失函数同时包含数据拟合项和支配声传播的亥姆霍兹方程残差项。为解决声场快速振荡导致的训练难题，论文引入包络场平滑技术作为预处理。训练完成后，PINN可作为物理生成模型，为任意候选源位置生成准确的“副本场”，再通过经典的Bartlett处理器与实测数据进行匹配定位。在SWellEx-96实验数据集上的验证表明，PINN-MFP的定位均方根误差为0.032 km，相较于作为基线的前馈神经网络分类器（RMSE 0.171 km）降低了81%，尤其在训练未覆盖的距离区间（2.0-2.25 km）内仍能保持准确估计，显示出优越的泛化能力。该工作展示了物理知识与数据驱动方法融合在解决复杂波导问题中的潜力。其局限性在于实验对比基线相对简单，且未在更复杂的环境参数失配条件下进行充分验证。

#

---

### 6. [Theory and Application of Circular Relative Harmonic Coefficients](/audio-paper-digest-blog/posts/2026-04-29-theory-and-application-of-circular-relative)

✅ **7.5/10** | 前25% | #声源定位 | #麦克风阵列 | #信号处理 #多通道

👥 **作者与机构**

- 第一作者：Yonggang Hu（National Key Laboratory on Blind Signal Processing, Chengdu, China）
- 通讯作者：Maoshen Jia（Beijing University of Technology, Beijing, China）
- 作者列表：Yonggang Hu（National Key Laboratory on Blind Signal Processing, Chengdu, China）、Liang Tao（未说明）、Jing Yu（National Key Laboratory on Blind Signal Processing, Chengdu, China）、Tianpeng Mao（National Key Laboratory on Blind Signal Processing, Chengdu, China）、Maoshen Jia（Beijing University of Technology, Beijing, China）

💡 **毒舌点评**

亮点：论文的理论推导部分非常扎实，从圆谐波分解出发，清晰地定义了CRHC特征并严谨地证明了其与频率、源信号无关且与方位角一一对应的优美性质，为后续应用提供了坚实的理论基础。短板：实验部分虽然包含了仿真和真实录音，但缺乏与当前更先进的声源定位算法（如基于深度学习的端到端方法、或更复杂的子空间/稀疏恢复方法）的直接对比，仅与基于RTF的简单基线进行比较，这使得其声称的“有效性”说服力打了折扣。此外，论文未提供任何代码或复现材料，对于一个提出新特征的工作来说，这是个明显的缺失。

🔗 **开源详情**

论文中未提及任何开源计划、代码仓库链接、公开模型权重或数据集获取方式。也未提供详细的复现材料，如完整的算法伪代码或可执行的配置文件。论文中引用了开源的RIR生成器[30]，但并非本文的核心贡献代码。

📌 **核心摘要**

1.  解决的问题：传统基于圆形阵列的声源定位方法常直接使用各麦克风的声压信号，或将为线性/球形阵列设计的技术生搬硬套，无法充分利用圆形阵列的二维几何特性。本文旨在为圆形阵列设计一种具有理论保证、鲁棒且计算高效的新型空间特征，用于单源检测与定位以及多源场景下的优势源定位。
2.  方法核心：提出循环相对谐波系数（CRHC）。该特征通过对圆形阵列接收的平面波进行圆谐波分解，定义为任意阶谐波系数与零阶谐波系数（即位于阵列中心的虚拟传感器信号）的比值。在远场假设下，推导出CRHC的闭合形式解析表达式。
3.  与已有方法的新颖之处：与直接使用声压信号或传统的相对传递函数（RTF）不同，CRHC被证明具有三个独特性质：1) 独立于时变源信号和具体频率；2) 仅依赖于声源方位角；3) 在360度方位空间内形成唯一映射。这些性质使其在理论和应用上都优于传统RTF特征。
4.  主要实验结果：在仿真和真实录音中验证了CRHC在单源和多源定位中的有效性。单源定位实验（Table 1）显示，在不同混响（T60: 0-0.4s）和信噪比（SNR: 10-30dB）条件下，所提方法的成功率（SR，误差≤5度为成功）均显著高于RTF基线方法（例如，在T60=0.2s，SNR=20dB时，SR为97% vs. 70%）。多源定位实验（Fig. 3）展示了算法能成功分离并定位2-3个同时发声的声源。
5.  实际意义：为圆形麦克风阵列提供了一种新颖、可解释且理论性质优良的特征表示，可提升声源定位系统在真实噪声与混响环境中的鲁棒性，特别适用于需要全向覆盖的场景，如智能音箱、会议系统和机器人听觉。
6.  主要局限性：理论分析基于远场平面波假设，对近场源的适用性未探讨。实验对比基线相对简单，未与当前更先进的多源定位算法进行系统比较。未提供开源代码，限制了方法的直接复用和验证。

---

### 7. [Sequential and Simultaneous Optimization of Microphone Array Geometry and Region-of-Interest Beamforming](/audio-paper-digest-blog/posts/2026-04-29-sequential-and-simultaneous-optimization-of)

✅ **7.5/10** | 前25% | #声源定位 | #波束成形 | #麦克风阵列 #空间音频

👥 **作者与机构**

- 第一作者：Gal Itzhak（Technion–Israel Institute of Technology， Faculty of Electrical & Computer Engineering）
- 通讯作者：未明确说明，根据学术惯例及贡献，第二作者Simon Doclo或第三作者Israel Cohen可能是通讯作者，但论文中未明确标注。
- 作者列表：Gal Itzhak（Technion–Israel Institute of Technology， Faculty of Electrical & Computer Engineering）、Simon Doclo（Carl von Ossietzky Universit¨at Oldenburg， Department of Medical Physics and Acoustics）、Israel Cohen（Technion–Israel Institute of Technology， Faculty of Electrical & Computer Engineering）

💡 **毒舌点评**

这篇论文的亮点在于提出了一个巧妙的“分而治之”顺序优化框架，将原本难以处理的大规模混合整数规划问题，转化为一系列可求解的小问题，这在工程上很有价值。但短板也很明显，其核心假设（ROI内信号完全相干）在实际复杂声学环境中可能不成立，且实验完全基于仿真，缺乏真实场景的验证，这让其实用性打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接或开源计划。
- 模型权重：未提及。
- 数据集：未提及。
- Demo：未提及。
- 复现材料：论文详细给出了优化问题的数学模型和约束（公式18-27），以及部分关键超参数（如R=1cm, N=3, P=36, ε=-10dB, K1=6, K2=K3=K4=4）。但未提供实现代码、优化脚本或具体的求解器配置。
- 论文中引用的开源项目：引用了MOSEK优化工具箱（[32]）。

📌 **核心摘要**

1. 要解决什么问题：传统麦克风阵列波束成形假设期望声源的方向已知，但实际中方向可能未知且位于一个感兴趣区域（ROI）内。同时，优化阵列几何结构和波束成形权重是一个高复杂度、NP难的混合整数规划问题，尤其对于大规模阵列。
2. 方法核心是什么：提出了一种顺序优化框架（SO-SCCA）。将完整的均匀同心圆阵列（UCCA）划分为若干个圆形扇区子阵列，然后按顺序对每个子阵列同时优化其麦克风布局和波束成形权重。在每个阶段，优化问题被建模为一个最小化宽带扩散噪声伪相干性的目标函数，并施加失真控制、白噪声增益（WNG）下限以及确保之前已选麦克风位置被保留等一系列约束，最后使用MOSEK求解器求解。
3. 与已有方法相比新在哪里：相比于以往直接联合优化或仅优化权重的方法，本文的核心创新是顺序优化策略。它避免了直接处理大规模混合整数规划带来的计算不可行性，通过分解问题使得优化大规模阵列几何成为可能。同时，优化目标直接针对ROI内的平均响应，而非单一方向。
4. 主要实验结果如何：论文在UCCA（3环，每环36个候选点，共109个候选位置）上进行了实验。对于ΦROI=[-40°,40°]的ROI，优化后的19麦克风阵列（SO-SCCA）与21麦克风的SCCA和UCCA方法相比：在期望声源方向显著偏离ROI中心（|ϕ0|∈[20°,40°]）时，其直接性因子（DF）更优（图2a vs 图2b）；在整个ROI和频率范围内，其WNG显著更高（图2c vs 图2d）；在2kHz以上的频段，其ROI平均直接性因子（DROI）和ROI平均白噪声增益（WROI）均优于对比方法（图3）。具体数值未在文中列表给出。
5. 实际意义是什么：该方法为设计用于未知但限定区域内声源拾取的麦克风阵列提供了一种实用工具。特别适用于会议系统、智能音箱或可穿戴设备等应用场景，其中声源可能位于一定角度范围内，且需要平衡指向性、鲁棒性（WNG）和阵列规模。
6. 主要局限性是什么：1）假设ROI内所有方向信号相干（公式12），这在存在多个声源或散射源时不成立；2）优化依赖精确的噪声场模型（扩散场假设），未考虑实际噪声的空间相关性；3）实验仅限于二维平面波和仿真，未验证三维空间、混响及实际麦克风失配的影响；4）优化过程依赖于固定的子阵列划分方式。

---

### 8. [Spiking Attention Network: A Hybrid Neuromorphic Approach to Underwater Acoustic Localization and Zero-Shot Adaptation](/audio-paper-digest-blog/posts/2026-04-29-spiking-attention-network-a-hybrid-neuromorphic)

✅ **7.0/10** | 前25% | #声源定位 | #脉冲神经网络 | #注意力机制 #零样本

👥 **作者与机构**

- 第一作者：Quoc Thinh Vo (Drexel University, Department of Electrical and Computer Engineering)
- 通讯作者：David K. Han (Drexel University, Department of Electrical and Computer Engineering)
- 作者列表：Quoc Thinh Vo (Drexel University, Department of Electrical and Computer Engineering), David K. Han (Drexel University, Department of Electrical and Computer Engineering)

💡 **毒舌点评**

本文的亮点在于将生物启发的脉冲神经网络（SNN）与成熟的ResNet、Conformer架构混合，用于处理原始水声信号，避免了传统方法繁琐的特征预处理，并展示了在零样本设置下的出色泛化能力；但短板在于其核心的LIF神经元模型相对简化，且所有实验均基于单一数据集（SWellEx-96），在更多样、更复杂海洋环境下的普适性有待进一步验证。

🔗 **开源详情**

- 代码：论文脚注提供了GitHub仓库链接：https://github.com/qtvo93/spiking-nw-ssl。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：实验使用公开的SWellEx-96数据集，论文未提供其获取方式或处理脚本。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了关键的模型架构描述、部分超参数设置（如LIF的β值、学习率）和训练硬件信息，但未详细说明完整的训练配置、数据划分脚本、随机种子等复现细节。
- 论文中引用的开源项目：未明确引用其他开源项目作为依赖。

📌 **核心摘要**

1.  要解决什么问题：水下声源定位（ASL）因环境噪声大、几何结构不规则、声学特性多变而极具挑战性。现有深度学习方法要么依赖梅尔谱图、互相关等预处理特征，丢失原始信息，要么依赖大量模拟数据，泛化能力有限。
2.  方法核心是什么：提出一种名为SA-Net的混合神经形态网络。它直接处理原始声学信号（21通道，1秒窗口），架构核心包括：用于初步特征提取和降采样的残差网络块（ResNet）、用于时空特征提取与噪声过滤的Leaky Integrate-and-Fire（LIF）脉冲神经元层、用于序列信息编码的Conformer块，以及最终的回归输出MLP头。
3.  与已有方法相比新在哪里：
    *   首次结合：论文声称是首次将LIF SNN与注意力机制（Conformer）结合用于水下声源定位。
    *   端到端原始信号处理：直接处理原始时序数据，无需人工设计的声学特征。
    *   零样本适应性：模型在未见过的地理位置和多普勒频移条件下（零样本设置），无需微调即可取得优于部分SOTA方法在域内测试的结果。
4.  主要实验结果如何：
    *   在SWellEx-96 S5 VLA数据集上，SA-Net（Scenario 1）在距离估计回归任务上取得了显著领先的性能，MAE为0.0322 km，MSE为0.00274 km，远优于表1中的所有对比方法。
    *   在零样本测试中（Scenario 2 & 3），模型MAE分别为0.1303 km和0.1226 km，仍优于MLF-TransCNN的域内结果（0.2718 km）。
    *   在加噪测试（Scenario 4）中，即使在SNR低至-15dB时，模型仍能给出MAE为1.1895 km的预测，展示了鲁棒性。
    *   消融实验（表2）证实，结合ResNets、LIF-SNNs和Conformers的完整模型性能最佳，且输入数据标准化方式影响显著。
5.  实际意义是什么：为水下声源定位提供了一种更高效（低延迟0.11秒/1秒样本）、更鲁棒、适应性更强（零样本泛化）的新思路，特别是在依赖原始信号处理和快速部署的场景下具有潜在应用价值。
6.  主要局限性是什么：论文指出，网络尚未在更广泛的海洋环境中进行验证；所采用的LIF神经元模型是简化的，忽略了部分真实的神经元动力学特性。

---

### 9. [SIRUP: A Diffusion-Based Virtual Upmixer of Steering Vectors for Highly-Directive Spatialization with First-Order Ambisonics](/audio-paper-digest-blog/posts/2026-04-29-sirup-a-diffusion-based-virtual-upmixer-of)

✅ **7.0/10** | 前25% | #声源定位 | #扩散模型 | #空间音频 #波束成形

👥 **作者与机构**

- 第一作者：Emilio Picard（法国索邦大学，日本RIKEN高级智能项目中心）
- 通讯作者：未说明
- 作者列表：Emilio Picard（法国索邦大学，日本RIKEN高级智能项目中心）、Diego Di Carlo（日本RIKEN高级智能项目中心）、Aditya Arie Nugraha（日本RIKEN高级智能项目中心）、Mathieu Fontaine（法国巴黎电信学院LTCI实验室，日本RIKEN高级智能项目中心）、Kazuyoshi Yoshii（日本京都大学工程研究生院，日本RIKEN高级智能项目中心）

💡 **毒舌点评**

亮点：将图像领域的潜在扩散模型“上采样”思路巧妙地移植到空间音频的波束成形向量超分辨率问题上，是一个非常具体且聪明的类比应用，实验结果也清晰展示了在狭窄波束和低旁瓣方面的显著提升。短板：整篇论文的验证完全依赖于模拟数据，对于真实世界中复杂的声场、阵列误差和未知噪声的鲁棒性只字未提，这极大地限制了其结论的说服力和实际应用价值的判断。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接 `https://github.com/emilio-pcrd/sirup`，并注明“upon acceptance”（接收后发布）。目前（基于论文阅读时间）可能尚未公开。
- 模型权重：未提及。
- 数据集：使用了公开的LibriSpeech数据集的部分音频（dev-clean文件夹）作为声源，但用于训练的房间脉冲响应和混合数据是论文作者自己模拟生成的，未提及是否会公开这些模拟数据或生成脚本。
- Demo：未提及。
- 复现材料：论文提供了详细的模型配置（参数量、训练超参数）、评估设置和损失函数描述，但训练硬件等关键信息缺失。
- 引用的开源项目：主要依赖 `pyroomacoustics` 进行房间模拟，以及 `bss_eval` 工具包进行评估。

📌 **核心摘要**

1.  问题：现有的高空间分辨率音频系统（如高阶Ambisonics， HOA）需要昂贵的麦克风阵列。常见的一阶Ambisonics（FOA）系统空间分辨率低，导致声源定位不精确，波束成形效果差。传统上混方法（先估计声源参数再渲染）会误差传播。
2.  方法：本文提出SIRUP，一种基于潜在扩散模型的波束成形向量（SV）虚拟上混方法。其核心是直接学习将低阶FOA SV映射到高阶HOA SV的潜在空间。具体分为两步：首先，用变分自编码器（VAE）学习HOA SV的紧凑潜在表示；然后，训练一个以FOA SV为条件的扩散模型，在该潜在空间中生成高阶SV的嵌入。
3.  创新：与传统“估计-渲染”级联方法不同，SIRUP直接操作和超分辨率波束成形向量本身，避免了中间参数估计误差的传播。它利用扩散模型在数据分布上的强大生成能力，学习FOA与HOA SV之间的复杂非线性映射。
4.  结果：实验在模拟房间环境中进行。与FOA基线相比，SIRUP上混后的SV在声源定位（DOA误差）、空间滤波质量（-3dB波束宽度平均提升+10°，旁瓣抑制-9dB）和双声源语音分离（SIR，SAR等指标）上均取得显著改进，性能接近真实HOA系统。关键数据见表1与表2。
5.  意义：为低成本FOA设备提供了一种软件方式，使其能够虚拟达到接近昂贵HOA设备的空间分析和渲染性能，对空间音频应用、机器人听觉等有潜在价值。
6.  局限：所有实验基于模拟数据，缺乏真实世界复杂环境的验证；混响增大时，相对于HOA基线的优势减小；模型目前仅适用于单声源SV估计场景。

#

---

### 10. [Phase-Retrieval-Based Physics-Informed Neural Networks For Acoustic Magnitude Field Reconstruction](/audio-paper-digest-blog/posts/2026-04-29-phase-retrieval-based-physics-informed-neural)

✅ **7.0/10** | 前50% | #声源定位 | #物理信息神经网络 | #声场估计 #相位检索

👥 **作者与机构**

- 第一作者：Karl Schrader（日本国立情报学研究所，以及德国萨尔大学）
- 通讯作者：论文中未明确说明。
- 作者列表：Karl Schrader（日本国立情报学研究所，德国萨尔大学）、Shoichi Koyama（日本国立情报学研究所）、Tomohiko Nakamura（日本产业技术综合研究所）、Mirco Pezzoli（米兰理工大学）

💡 **毒舌点评**

亮点：论文巧妙地将“相位检索”问题转化为一个双网络联合优化问题，并利用重建的复声压来施加亥姆霍兹方程约束，为仅有幅度测量的声场重建提供了新颖的物理信息正则化思路。短板：实验仅限于单一尺寸、低混响时间的仿真房间，且未与其他成熟的相位检索方法或更复杂的基线进行对比，说服力有限；更致命的是，完全缺乏开源信息，使得这篇看似扎实的改进工作大打折扣。

🔗 **开源详情**

-   代码：论文中未提及代码链接。
-   模型权重：未提及。
-   数据集：未提及是否公开。文中说明数据使用`pyroomacoustics`库生成，但未提供具体生成脚本或参数配置。
-   Demo：未提及。
-   复现材料：论文提供了较为详细的网络结构（4层256单元MLP，tanh）、训练优化器（AdamW）、初始学习率（1e-3）和衰减策略、损失权重（λdata=0.1, λPDE=0.001）、RFF维度（128）等关键超参数，但未提供训练脚本、环境配置文件、数据生成脚本或预训练模型。
-   引用的开源项目：`pyroomacoustics`（用于声场仿真）。

📌 **核心摘要**

这篇论文针对仅有空间稀疏的幅度测量值，无法获取相位信息这一场景下的声场幅度分布重建问题，提出了一种基于相位检索的物理信息神经网络方法。其核心思想是使用两个独立的神经网络（MLP）分别预测声场的幅度和相位，将二者组合成复声压，并通过最小化其偏离亥姆霍兹方程（PDE loss）来引入物理约束，同时训练网络使预测幅度匹配测量值。与纯数据驱动的神经场（NF）或最近邻插值相比，该方法在仿真声场重建任务中表现出更低的测试数据损失（Ldata）。实验表明，所提方法（PRB-PINN）在200 Hz、400 Hz、600 Hz三个频率上，随测量点数量（5， 10， 20， 50）增加均优于基线，尤其在低频（200 Hz）和测量点较多时重建效果接近真实值。其实际意义在于为无线麦克风网络、乐器指向性测量等相位数据不可靠的场景提供了更准确的声场估计工具。主要局限是实验基于简化的仿真环境（3m×4m×6m房间， T60=200ms），未在更复杂或真实场景中验证，且重建的相位与真实相位并不一致。

---

### 11. [Microphone-Less Measurement of Three-Dimensional Radiating Impulse Response of Sound Source using Spherical Harmonic-Domain Acousto-Optic Tomography](/audio-paper-digest-blog/posts/2026-04-29-microphone-less-measurement-of-three-dimensional)

✅ **7.0/10** | 前25% | #声源定位 | #信号处理 | #3D音频 #麦克风阵列

👥 **作者与机构**

- 第一作者：Yuzuki Saito（早稻田大学）
- 通讯作者：未说明
- 作者列表：Yuzuki Saito（早稻田大学）、Kenji Ishikawa（NTT, Inc.）、Risako Tanigawa（早稻田大学 & NTT, Inc.）、Yasuhiro Oikawa（早稻田大学）

💡 **毒舌点评**

这篇论文巧妙地利用高速光学成像“绕过”了麦克风阵列的物理限制，首次实现了声源三维脉冲响应的无接触全空间测量，概念上堪称“声学CT”。其主要短板在于，这种基于物理模型的重建方法计算复杂度高，且受限于球谐展开的阶数，在高频和低频两端的重建精度明显下降，表明该方法目前更像一个精确但笨重的“原型”，距离便捷实用的工程工具还有距离。

🔗 **开源详情**

*   代码：论文中未提及代码链接。
*   模型权重：不适用。未提及公开任何模型权重。
*   数据集：未提及。
*   Demo：未提及。
*   复现材料：论文提供了详细的实验条件参数表（表1、表2）和方法描述，但缺乏算法实现的关键细节（如tsVD的具体截断策略、矩阵构建的优化代码），复现难度极高。
*   论文中引用的开源项目：论文引用了多篇光学和声学测量的参考文献，但未明确指出依赖于特定的开源软件库或工具。

📌 **核心摘要**

本文旨在解决传统麦克风阵列测量声源三维脉冲响应（IR）时存在的空间分辨率受限和干扰声场等问题。论文提出了一种基于球谐域声光层析成像（SH-AOT）的新方法。其核心是利用并行相移干涉术（PPSI）从多个方向测量声源辐射的延时脉冲（TSP）信号，获得多个二维线积分IR（LIR），然后利用基于亥姆霍兹方程的物理模型，通过求解球谐系数，从这些线积分数据中重建出三维的点状IR。与已有的仅能获取二维LIR的PPSI方法相比，本工作的创新点在于实现了三维重建；与麦克风阵列相比，其优势是非接触、高空间分辨率且不干扰声场。实验使用扬声器作为声源，将PPSI测量结果与16通道线性麦克风阵列的扫描测量结果进行对比。结果显示，两种方法得到的声辐射模式一致（见图2），单点波形和频谱在主要频段吻合较好（见图3），并成功可视化了三维IR的辐射球面波（见图4）。该工作的实际意义是为声源三维特性分析提供了一种全新的高分辨率测量手段。其主要局限性是高频重建不完美（受球谐阶数M=5限制）和低频测量困难（受光学方法原理限制），且计算复杂度高。

---

### 12. [Improving Binaural Distance Estimation in Reverberant Rooms Through Contrastive And Multi-Task Learning](/audio-paper-digest-blog/posts/2026-04-29-improving-binaural-distance-estimation-in)

✅ **7.0/10** | 前25% | #声源定位 | #对比学习 | #多任务学习 #鲁棒性

👥 **作者与机构**

- 第一作者：Daniel Neudek（波鸿鲁尔大学通信声学研究所）
- 通讯作者：未明确说明，但根据邮箱和星号标注，Rainer Martin（波鸿鲁尔大学通信声学研究所）和Stephan Getzmann（多特蒙德工业大学IfADo研究所）可能是负责人。
- 作者列表：Daniel Neudek（波鸿鲁尔大学通信声学研究所）、Benjamin Stodt（多特蒙德工业大学IfADo研究所）、Jean Paul Farah（波鸿鲁尔大学通信声学研究所）、Stephan Getzmann（多特蒙德工业大学IfADo研究所）、Rainer Martin（波鸿鲁尔大学通信声学研究所）

#

💡 **毒舌点评**

亮点在于将对比学习（CL）的“拉近相似、推远不同”思想巧妙地应用于距离感知的潜空间塑造，显著提升了模型在完全未见的真实环境中的鲁棒性，这比在合成数据上刷点更有意义。短板则是其方法的“有效性”高度依赖精心设计的合成数据生成管线和辅助任务的定义，真实世界的复杂声源和接收器多样性可能仍未被完全覆盖，导致VAST等更具挑战的测试集上相关性系数（ρ）仍偏低。

#

🔗 **开源详情**

论文中未提及任何开源计划，包括代码、模型权重、数据集或训练配置。所有实验细节均在论文中描述，但完全复现依赖未公开的工具和大量计算资源。

📌 **核心摘要**

1.  要解决什么问题：现有双耳声源距离估计模型在训练所用的声学环境（房间、接收器HRTF、声源指向性）下表现良好，但在面对训练时未见过的全新环境时性能显著下降，鲁棒性和泛化能力不足。
2.  方法核心是什么：提出一种结合多任务学习与监督对比学习的训练框架。主任务是估计距离，辅助任务是估计直达声响应。通过构造同一配置下略有变化（如不同HRTF、指向性）的BRIR变体作为对比学习的正样本对，强制模型学习一个“距离感知”的潜空间，使相同距离的表征接近，不同距离的表征远离。
3.  与已有方法相比新在哪里：以往多任务学习（如联合估计DOA或直达声）仅共享潜空间但未显式约束其结构。本文首次明确地将对比学习整合到双耳距离估计的多任务框架中，直接优化潜空间结构以增强对声学条件变化的鲁棒性。
4.  主要实验结果如何：实验表明，在合成数据集（S1/S2）上，所提方法将最佳MAE分别降低了6.2cm和4.3cm。在未见过的VAST数据集和真实录制数据上，对比学习的引入带来了更显著的提升：对于S1训练的模型，VAST的MAE降低了22cm，真实数据降低了16cm；对于更鲁棒的S2训练的模型，MAE也分别降低了22cm和9.8cm。同时，模型预测的距离与真实距离的幂律指数α更接近线性（α≈0.6-0.7），比人类感知（α≈0.4）更线性。
5.  实际意义是什么：该工作为在复杂多变的声学环境中（如智能家居、AR/VR空间）部署可靠的声源距离感知系统提供了一种有效的训练范式，减少了对目标场景真实数据的依赖。
6.  主要局限性是什么：模型的泛化性能仍严重依赖合成数据生成的质量和多样性。在最具挑战的VAST测试集上，相关系数ρ最高仅约0.54，表明预测与真实值的线性关系仍有很大提升空间。论文未探讨模型在移动声源或复杂噪声干扰下的表现。

## 核心摘要
### 表1：不同训练配置下的平均绝对误差（MAE）和相关系数（ρ）

| 训练集 | β<sub>CL</sub> | β<sub>rec</sub> | S1/S2 MAE [m] (ρ) | VAST MAE [m] (ρ) | 真实数据 MAE [m] (ρ) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| S1 | 0 | 0 | 0.688 (0.88) | 1.62 (0.30) | 1.43 (0.84) |
| | 5 | 10 | 0.626 (0.90) | 1.48 (0.45) | 1.27 (0.83) |
| S2 | 0 | 0 | 0.904 (0.81) | 1.47 (0.34) | 0.924 (0.77) |
| | 5 | 10 | 0.884 (0.83) | 1.17 (0.52) | 0.863 (0.79) |

注：加粗表示在该测试集上最佳结果（对于S2模型的VAST和真实数据）。最佳权衡配置（β<sub>CL</sub>=5, β<sub>rec</sub>=10）在所有测试集上均表现最优或接近最优。

图表说明：
![损失项相对贡献随训练变化图](https://ieeexplore.ieee.org/mediastore_new/IEEE/content/media/10474/11462076/11462560/fig2.jpg)
图2：不同损失权重配置下，对比学习损失（β<sub>CL</sub>L<sub>CL</sub>）、重建损失（β<sub>rec</sub>L<sub>rec</sub>）和主距离损失（L<sub>dist</sub>）在总损失中所占比例随训练轮数的变化。高对比学习权重（β<sub>CL</sub>=5）在训练后期主导了梯度更新，这有助于进一步优化距离损失。

---

### 13. [A Unified SVD-Modal Solution for Sparse Sound Field Reconstruction with Hybrid Spherical-Linear Microphone Arrays](/audio-paper-digest-blog/posts/2026-04-29-a-unified-svd-modal-solution-for-sparse-sound)

✅ **6.5/10** | 前25% | #声源定位 | #麦克风阵列 | #信号处理 #鲁棒性

👥 **作者与机构**

- 第一作者：Shunxi Xu (悉尼大学计算与音频研究实验室)
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：
  - Shunxi Xu (悉尼大学计算与音频研究实验室，Computing and Audio Research Lab, The University of Sydney)
  - Thushara Abhayapala (澳大利亚国立大学音频与声学信号处理组，Audio & Acoustic Signal Processing Group, The Australian National University)
  - Craig T. Jin (悉尼大学计算与音频研究实验室)

💡 **毒舌点评**

这篇论文的亮点在于为混合球形-线形麦克风阵列提供了一个原理清晰、数学形式优美的统一处理框架（SVD模态），避免了拼接或两阶段方法的“临时性”，并且通过模态分析直观展示了混合阵列的优势。短板在于缺乏开源实现，且实验环境（模拟混响室、特定阵列构型）虽然合理，但离真实世界复杂场景的验证尚有距离，使得结论的泛化性有待更多实践检验。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及（本文不是基于学习的模型）。
- 数据集：实验数据是模拟生成的，未公开特定数据集。
- Demo：未提供在线演示。
- 复现材料：论文描述了算法框架、IRLS求解细节和模拟环境设置（如房间尺寸、RT60、阵列几何），但未提供完整的脚本、配置文件或预计算的RIR。
- 引用的开源项目：论文引用了MCRoomSim [19] 用于房间声学模拟。

📌 **核心摘要**

1.  问题：如何有效结合球形麦克风阵列（SMA）的全向视野和线形麦克风阵列（LMA）的强方向性来提高稀疏声场重建（如声源定位）的分辨率和鲁棒性。传统的直接拼接方法会因LMA对混响敏感而引入伪影，性能不佳。
2.  方法核心：提出一个基于传输算子奇异值分解（SVD）的统一数据驱动模态框架。该框架将混合阵列的传输矩阵进行SVD分解，得到正交的“麦克风模态”和“场模态”。通过截取主要的奇异值对，构造一个稳定、有序的字典，用于稀疏恢复优化问题。
3.  创新点：1) 统一处理：该框架将混合阵列视为一个整体进行处理，SVD模态在仅使用SMA时会退化为球谐函数（SH）模态，而加入LMA后会引入互补的、条件数更好的模态。2) 频率依赖的模态分析：通过主角分析揭示了SVD模态与SH模态在不同频率下的偏离关系，证实了混合阵列在高频下能超越SH的极限。3) 提升鲁棒性：在混响条件下，该框架相比单独SMA和直接拼接方法，能实现更准确、更鲁棒的声场重建。
4.  实验结果：在RT60=0.3s的模拟混响房间中，评估了能量图失配和角度误差。结果表明：
    - 在不同频率（见图3）、不同声源距离（1.5m， 2.5m， 3.5m；见图4，图5）和不同声源数量下，提出的SVD模态方法（选择9，16，25个模态）在能量图失配上持续优于单独SMA和直接拼接联合稀疏恢复（Joint SR）方法，与残差精炼（RR）基线性能相当。
    - 在角度误差上，SVD模态方法与Joint SR和RR相当，均优于单独SMA。增加模态数量能进一步降低角度误差，但可能会略微增加能量图失配，表明存在权衡。
5.  实际意义：为设计和处理来自混合麦克风阵列的信号提供了一个更原则性、更统一的框架，有助于开发更精确的声场采集与分析系统，应用于空间音频、机器人听觉等领域。
6.  主要局限性：1) 模态数量（9，16，25）的选择是任务依赖的（能量图保真 vs. 定位精度），论文未给出自动化选择方案。2) 评估仅在模拟混响环境中进行，未涉及真实录音。3) 论文未公开代码和实验细节，可复现性受限。

---

### 14. [An Envelope Separation Aided Multi-Task Learning Model for Blind Source Counting and Localization](/audio-paper-digest-blog/posts/2026-04-29-an-envelope-separation-aided-multi-task-learning)

✅ **6.5/10** | 前25% | #声源定位 | #多任务学习 | #麦克风阵列 #端到端

👥 **作者与机构**

- 第一作者：Jiaqi Du（北京大学智能科学与技术学院，通用人工智能国家重点实验室）
- 通讯作者：Tianshu Qu（北京大学智能科学与技术学院，通用人工智能国家重点实验室，邮箱：qutianshu@pku.edu.cn）
- 作者列表：Jiaqi Du（北京大学智能科学与技术学院，通用人工智能国家重点实验室）、Donghang Wu（北京大学智能科学与技术学院，通用人工智能国家重点实验室）、Xihong Wu（北京大学智能科学与技术学院，通用人工智能国家重点实验室）、Tianshu Qu（北京大学智能科学与技术学院，通用人工智能国家重点实验室）

#

💡 **毒舌点评**

亮点在于将人耳听觉系统中“时空信息协同”的认知神经科学启发融入模型设计，通过一个可学习的门控机制动态平衡包络（时间）和坐标（空间）信息，这种“生理启发式设计”让模型动机显得很有说服力。短板是整体框架更像是把已有的吸引子网络、多任务学习和PIT进行工程化组合，缺乏更底层的理论突破；此外，所有实验都在精心控制的模拟数据集上完成，对真实世界中复杂声学环境（如非平稳噪声、遮挡）的鲁棒性验证不足，略显“温室里的花朵”。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开模型权重。
- 数据集：使用了FSD50K公开数据集，但训练/测试的模拟FOA数据是作者通过脚本生成的，论文中未提供该生成脚本。
- Demo：未提供在线演示。
- 复现材料：给出了训练优化器、学习率、批次大小、轮数等部分细节。但未提供模型权重文件、训练配置文件或评估脚本。
- 论文中引用的开源项目：论文中明确提及并依赖以下开源工具/数据集：
    - FSD50K：用于获取原始音频。
    - gpuRIR：用于模拟房间脉冲响应。
- 总结：论文中未提及开源计划。虽然依赖一些公开工具，但复现作者特定的实验设置仍需要大量额外工作。

📌 **核心摘要**

1.  问题：在声源数量未知或可变的条件下，实现准确的盲源计数与定位（SSL）是一个挑战。现有方法或受限于固定输出维度，或因独立处理包络分离与定位任务而未能充分利用时空信息的相互增益。
2.  方法：提出一种包络分离辅助的多任务学习模型。该模型包含三个模块：1）声学特征提取模块，编码一阶环绕声信号；2）自适应吸引子模块，动态生成吸引子向量来估计声源数量；3）多任务学习模块，通过一个可学习的门控机制，联合优化包络分离与3D坐标回归任务，并使用排列不变训练解决输出顺序歧义。
3.  创新：与现有顺序处理（先分离后定位）或独立优化任务的方法相比，该模型通过多任务学习框架实现了包络分离与方向预测的协同优化，利用包络信息作为辅助线索来增强定位精度。
4.  结果：在基于FSD50K和模拟房间脉冲响应生成的测试集上，该方法在盲源计数准确率（平均93.4%，相比基线SEET的88.0%）和定位误差（方位角误差10.59°，仰角误差6.74°，距离误差0.64m，相对距离误差22.08%）上均优于现有基线方法（EINV2, Sp-ACCDOA, SEET）。消融实验证明了包络分离辅助模块的有效性。
5.  意义：提供了一种处理未知声源数定位问题的统一框架，其时空信息协同优化的思路可能对其他多任务音频处理任务有借鉴意义。
6.  局限性：1）所有实验在模拟数据上进行，泛化能力未知；2）模型复杂度及计算开销未分析；3）多任务学习权重λ需要手动设置。

#

---

### 15. [Adaptive Spectral Weighting in Sagittal-Plane Sound Localization: A Reliability-Driven Approach](/audio-paper-digest-blog/posts/2026-04-29-adaptive-spectral-weighting-in-sagittal-plane)

✅ **6.5/10** | 前25% | #声源定位 | #贝叶斯推理 | #信号处理 #空间音频

👥 **作者与机构**

- 第一作者：Yunda Chen
- 通讯作者：Nengheng Zheng (nhzheng@szu.edu.cn)
- 作者列表：Yunda Chen, Hui Zeng, Nengheng Zheng*（深圳大学，电子信息工程学院）

💡 **毒舌点评**

这篇论文的亮点在于它承认并试图建模听觉感知中“动态权重调整”这一人性化但常被忽视的特性，提出的自适应加权方案在理论上更具生物合理性。但短板也明显：其验证场景主要是基于降质的合成听觉条件（如声码器处理），这更像是证明模型在特定退化下的鲁棒性，而非证明自适应机制在自然复杂环境下的普适优越性，因此结论的外推性有待商榷。

🔗 **开源详情**

*   代码：论文中未提及代码链接。
*   模型权重：未提及。
*   数据集：使用了开源的Auditory Modeling Toolbox (AMT)数据集，可通过引用文献[21]获取。
*   Demo：未提及。
*   复现材料：论文给出了详细的模型架构、公式和参数拟合策略描述，但未提供检查点、配置文件或附录的额外细节。训练硬件等信息缺失。
*   论文中引用的开源项目：明确引用了并使用了Auditory Modeling Toolbox (AMT)[21]。论文中未提及其它具体的开源代码或工具包。

📌 **核心摘要**

1.  解决什么问题：现有矢状面（上下方向）声源定位模型多采用固定的频谱加权方案，忽略了人类听觉系统会根据输入信号的可靠性动态调整不同频段贡献的这一事实，尤其是在感知线索退化的条件下。
2.  方法核心是什么：提出了一种基于贝叶斯推理的计算模型。核心创新是引入了一种自适应频谱加权方案，该方案能根据主导频谱凹陷区域（6-9kHz）的可靠性（用频谱互相关ρ衡量）动态调整权重。模型参数对每位听众进行了个体化校准。
3.  与已有方法相比新在哪里：将动态、依赖于信号可靠性的频谱加权机制整合到贝叶斯定位框架中。与四种来自先前研究的固定加权方案（Flat, NR, DT, SV_GL）进行系统比较。
4.  主要实验结果如何：
    *   对于宽带噪声刺激（高感知置信度），在组水平上没有发现某一种加权方案具有稳定优势（保护超出概率PXP均接近随机水平）。
    *   对于经声码器降质的点击序列刺激（模拟不同频谱分辨率，降低感知置信度），组水平PXP同样未显示明确偏好（SV_GL最高为0.281，但贝叶斯模型选择风险BOR为0.68，说明模型间差异不显著）。
    *   关键发现（图4）：在单个低置信度被试（NH12）的例子中，自适应加权方案的预测结果最接近人类实际反应。随着频谱线索减少，人类反应分布趋近于模型的双峰先验分布，该趋势也被模型捕获。
    *   论文未提供所有被试的详细定量对比表格，PXP值见图3。
5.  实际意义是什么：揭示了在感知线索不足时，空间先验知识在人类定位行为中的关键作用，并证明了在计算模型中模拟自适应加权对预测退化条件下听觉行为的重要性。对未来设计适应性更强的助听算法或虚拟声学系统有参考价值。
6.  主要局限性是什么：模型验证局限于使用HRTF和特定的降质处理（声码器）模拟的条件。自适应方案的优势仅在低置信度个体案例中直观显现，未能在整体统计上得到确凿的、优于其他方案的结论。模型参数的个体化校准增加了应用复杂度。

---

