---
title: "ICASSP 2026 - 说话人验证 论文列表"
date: 2026-04-29
draft: false
tags: ["说话人验证"]
categories: [icassp-2026]
description: "共 10 篇 ICASSP 2026 说话人验证 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 说话人验证

共 **10** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Cross-Domain Contrastive Learning with Dynamic Threshold Cal](/audio-paper-digest-blog/posts/2026-04-29-cross-domain-contrastive-learning-with-dynamic) | 8.0分 | 前25% |
| 🥈 | [Hybrid Pruning: In-Situ Compression of Self-Supervised Speec](/audio-paper-digest-blog/posts/2026-04-29-hybrid-pruning-in-situ-compression-of-self) | 8.0分 | 前25% |
| 🥉 | [Distilling Attention Knowledge for Speaker Verification](/audio-paper-digest-blog/posts/2026-04-29-distilling-attention-knowledge-for-speaker) | 8.0分 | 前25% |
| 4. | [Cross-Architecture Knowledge Distillation of WavLM for Light](/audio-paper-digest-blog/posts/2026-04-29-cross-architecture-knowledge-distillation-of) | 8.0分 | 前25% |
| 5. | [Triage Knowledge Distillation for Speaker Verification](/audio-paper-digest-blog/posts/2026-04-29-triage-knowledge-distillation-for-speaker) | 7.5分 | 前25% |
| 6. | [Enhancing Speaker Verification with w2v-BERT 2.0 and Knowled](/audio-paper-digest-blog/posts/2026-04-29-enhancing-speaker-verification-with-w2v-bert-20) | 7.5分 | 前25% |
| 7. | [Face-Voice Association with Inductive Bias for Maximum Class](/audio-paper-digest-blog/posts/2026-04-29-face-voice-association-with-inductive-bias-for) | 7.0分 | 前25% |
| 8. | [Impact of Phonetics on Speaker Identity in Adversarial Voice](/audio-paper-digest-blog/posts/2026-04-29-impact-of-phonetics-on-speaker-identity-in) | 7.0分 | 前50% |
| 9. | [Curriculum Learning with Contrastive Loss for Lightweight Sp](/audio-paper-digest-blog/posts/2026-04-29-curriculum-learning-with-contrastive-loss-for) | 6.5分 | 前25% |
| 10. | [Connecting Layer-Wise Representation of Wavlm with Spectro-T](/audio-paper-digest-blog/posts/2026-04-29-connecting-layer-wise-representation-of-wavlm) | 6.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [Cross-Domain Contrastive Learning with Dynamic Threshold Calibration for Source Speaker Tracing](/audio-paper-digest-blog/posts/2026-04-29-cross-domain-contrastive-learning-with-dynamic)

🔥 **8.0/10** | 前25% | #说话人验证 | #对比学习 | #音频安全 #跨领域

👥 **作者与机构**

- 第一作者：Yitian Ding（国际关系学院，北京，中国）
- 通讯作者：Yansen Zhou（国际关系学院，北京，中国）论文中标注为通讯作者
- 作者列表：Yitian Ding（国际关系学院）、Shengchen Li（西交利物浦大学，苏州，中国）、Yansen Zhou（国际关系学院）

#

💡 **毒舌点评**

论文的亮点在于将“跨域对齐”、“类内紧致”与“置信度校准”三个目标巧妙地融为一个统一的训练框架（ACC Loss），并配合评估时的动态阈值校准（Centered AS-Norm），形成了一套完整的解决方案，其设计思路和消融实验都做得相当清晰。但略显遗憾的是，论文声称方法“即插即用、数据高效”，却未能开源代码或提供可直接运行的完整复现材料，这限制了学术界对其进行快速验证和在此基础上改进的可能性。

#

📌 **核心摘要**

本文针对语音转换（VC）对自动说话人验证（ASV）构成的安全威胁，研究了“源说话人追踪（SST）”任务，即从转换后的语音中识别原始说话人。其核心问题是转换语音与原始语音之间存在领域偏移，且转换语音内部的说话人特征呈现多峰结构，导致特征分布不稳定和固定阈值失效。为此，论文提出了一种“跨域对比学习与动态阈值校准”的统一范式。在训练阶段，提出联合优化ACC损失函数，它结合了对齐损失（InfoNCE，用于跨域对齐）、紧致性损失（IS-CDR，用于减少类内方差）和置信度损失（质量回归，用于质量感知校准）。在评估阶段，采用Centered AS-Norm（全局中心化+自适应归一化）进行分布感知的动态评分校准。在SSTC 2024评测基准上，所提系统在16个测试集上的平均等错误率（EER）为16.509%，超越了挑战赛冠军系统（16.788%），并将官方基线（20.613%）降低了4.104个百分点。消融实验证明，所提出的训练损失和评估后处理机制对性能提升均有显著贡献。该方法的主要贡献在于提供了一个完整的训练-评估闭环，以增强SST任务的跨域泛化能力和分数可校准性。其局限性在于评估场景局限于单一基准，且未公开代码和模型。

#

---

### 🥈 [Hybrid Pruning: In-Situ Compression of Self-Supervised Speech Models for Speaker Verification and Anti-Spoofing](/audio-paper-digest-blog/posts/2026-04-29-hybrid-pruning-in-situ-compression-of-self)

🔥 **8.0/10** | 前25% | #说话人验证 | #自监督学习 | #语音伪造检测 #结构化剪枝

👥 **作者与机构**

- 第一作者：Junyi Peng (Brno University of Technology, Speech@FIT)
- 通讯作者：未说明
- 作者列表：Junyi Peng¹, Lin Zhang², Jiangyu Han¹, Oldřich Plchot¹, Johan Rohdin¹, Themos Stafylakis³,⁴,⁵, Shuai Wang⁶, Jan Černocký¹ (1. Speech@FIT, Brno University of Technology, Czechia; 2. Johns Hopkins University, USA; 3. Athens University of Economics and Business; 4. Omilia; 5. Archimedes/Athena R.C., Greece; 6. Nanjing University, China)

💡 **毒舌点评**

亮点在于优雅地将模型剪枝与任务微调合并为单阶段训练，省去了复杂的多步流水线，且在多个基准上效果拔群，甚至能充当正则化提升泛化能力；短板在于对“为什么学出的剪枝模式是这样的”这一现象的理论解释稍显薄弱，更多是现象描述而非机理剖析。

📌 **核心摘要**

这篇论文旨在解决大规模自监督语音模型（如WavLM）因参数量巨大而难以在资源受限设备上部署的问题。其核心方法是提出一个名为“混合剪枝”（Hybrid Pruning, HP）的统一框架，该框架将结构化剪枝（移除整个注意力头、神经元等）与针对特定下游任务的微调过程集成在单个训练阶段中联合优化。与之前需要多阶段（如先预训练剪枝或后剪枝蒸馏）的方法相比，HP允许模型在针对特定任务（说话人验证或反欺骗）微调的同时，动态学习一个专门为该任务定制的紧凑架构。主要实验结果表明，该方法在VoxCeleb说话人验证基准上，能在参数量减少70%的情况下，EER几���无损（Vox1-O/E/H分别达到0.7%、0.8%、1.6%）。在ASVspoof5反欺骗挑战中，HP显著优于DP-HuBERT等基线，并在10%剪枝率下实现了3.7%的SOTA EER，同时发现中等程度的剪枝能有效缓解过拟合，提升低资源场景下的泛化能力。其实际意义在于为在边缘设备上高效部署高性能SSL模型提供了一条简洁、有效的路径。主要局限性包括缺乏与其他高效微调方法（如Adapter）的直接比较，以及对学习到的剪枝模式的理论分析不够深入。

---

### 🥉 [Distilling Attention Knowledge for Speaker Verification](/audio-paper-digest-blog/posts/2026-04-29-distilling-attention-knowledge-for-speaker)

🔥 **8.0/10** | 前25% | #说话人验证 | #知识蒸馏 | #注意力机制 #语音预训练模型

👥 **作者与机构**

- 第一作者： Zezhong Jin（香港理工大学）
- 通讯作者： 未明确说明（从作者列表和单位推断，可能为Man-Wai Mak或Kong Aik Lee，但论文未明确标注）
- 作者列表： Zezhong Jin¹, Shujie Liu², Zhe Li³, Chong-Xin Gan¹, Zilong Huang¹, Man-Wai Mak¹, Kong Aik Lee¹
  1. 香港理工大学 (The Hong Kong Polytechnic University)
  2. 微软亚洲研究院 (Microsoft Research Asia)
  3. 香港大学 (The University of Hong Kong)

#

💡 **毒舌点评**

亮点： 论文巧妙地将主流ASV模型（ECAPA-TDNN）中已有的SE模块和注意力池化层作为“注意力图”的来源，无需额外设计复杂的注意力机制，这种“就地取材”的工程思维很聪明，也让方法更具通用性和可移植性。  
短板： 开源信息严重缺失，对于一篇强调“方法有效性”和“复现价值”的会议论文而言，没有代码和模型权重几乎是“反向操作”，极大削弱了其对社区的实际贡献度。

#

📌 **核心摘要**

1.  问题： 如何将大型、预训练的语音模型（如WavLM）的强大能力，有效迁移到轻量级的学生模型（如小型ECAPA-TDNN）中，以在保持高性能的同时降低部署复杂度。
2.  核心方法： 提出了一种新的注意力知识蒸馏（Attention KD）框架。具体设计了两种注意力图蒸馏损失：频率注意力KD（FREQ-AKD），利用SE模块的权重学习频率维度的重要性；时序注意力KD（TEMPO-AKD），利用注意力统计池化的权重学习时间维度的重要性。总损失结合了分类损失、标签级KD损失和这两个注意力KD损失。
3.  创新之处： 区别于传统标签级或特征级KD，该方法首次在说话人���证领域系统性地探索注意力级知识蒸馏，并创新性地从模型内部固有模块（SE和注意力池化）提取注意力图进行蒸馏，而非依赖自注意力图。
4.  主要实验结果： 在VoxCeleb1和CN-Celeb数据集上，结合两种注意力KD的学生模型性能显著优于仅用标签级KD的基线。例如，在VoxCeleb1-O上，Attention KD达到 0.76% EER，比基线KD（0.90%）相对提升16%，甚至优于参数量更大的ECAPA-TDNN（0.87%）。消融实验表明，结合两种注意力KD效果最佳，且频率维度的蒸馏比时序维度更重要。
    | 系统 | 参数量(M) | Vox1-O EER(%) | Vox1-E EER(%) | Vox1-H EER(%) | CN-eval EER(%) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | 教师模型 (WavLM-TDNN) | 316.62 | 0.43 | 0.54 | 1.15 | 7.33 |
    | 学生基线 (KD) | 7.34 | 0.90 | 0.99 | 1.96 | 8.21 |
    | 学生 (Attention KD) | 7.76 | 0.76 | 0.91 | 1.91 | 7.70 |
5.  实际意义： 为将复杂预训练模型部署到资源受限的边缘设备（如手机、IoT设备）提供了一种高效的知识迁移方案，能使轻量模型达到接近大模型的性能。
6.  主要局限性： 研究主要基于ECAPA-TDNN架构，未验证在其他主流ASV模型（如ResNet, CAM++）上的通用性；对注意力蒸馏的机理分析较浅；开源复现支持不足。

#

---

### 4. [Cross-Architecture Knowledge Distillation of WavLM for Lightweight Speaker Verification](/audio-paper-digest-blog/posts/2026-04-29-cross-architecture-knowledge-distillation-of)

🔥 **8.0/10** | 前25% | #说话人验证 | #知识蒸馏 | #自监督学习 #模型压缩

👥 **作者与机构**

- 第一作者：Jungwoo Heo (University of Seoul, Republic of Korea)
- 通讯作者：Ha-Jin Yu (University of Seoul, Republic of Korea)
- 作者列表：Jungwoo Heo (University of Seoul, Republic of Korea)、Hyun-seo Shin (University of Seoul, Republic of Korea)、Chan-yeong Lim (University of Seoul, Republic of Korea)、Kyowon Koo (University of Seoul, Republic of Korea)、Seung-bin Kim (University of Seoul, Republic of Korea)、Jisoo Son (University of Seoul, Republic of Korea)、Kyung Wha Kim (Supreme Prosecutors’ Office Republic of Korea)、Ha-Jin Yu (University of Seoul, Republic of Korea)

💡 **毒舌点评**

这篇论文精准地切中了当前自监督语音模型“大而不能用”的痛点，其提出的任务引导学习（TGL）和代理对齐蒸馏（PAD）组合拳，确实为异构架构间的知识传递提供了系统化的解决方案，在VoxCeleb和VoxSRC等标准基准上取得了令人印象深刻的性能提升。然而，实验部分主要围绕其自身方法的变体展开，与当前最前沿的、同样专注于轻量化或高效说话人验证的最新方法（如2025年的SEED, LAP等）的横向对比深度稍显不足，使得其“最佳”地位的论证链条不够完整。

📌 **核心摘要**

1.  解决的问题：基于Transformer的大规模自监督学习（SSL）模型（如WavLM）在说话人验证任务上表现优异，但其高昂的计算成本严重限制了在移动和嵌入式设备上的部署。现有压缩方法大多保留Transformer骨干，无法根本解决效率问题。
2.  方法核心：提出首个用于说话人验证的跨架构知识蒸馏系统框架，将知识从基于Transformer的教师模型（WavLM-Large）蒸馏到基于MLP-Mixer的学生模型（SV-Mixer）。框架包含两个互补组件：任务引导学习（TGL） 通过自适应聚合教师中间层信息，构建富含说话人判别性的监督信号；代理对齐蒸馏（PAD） 通过约束帧级表征的协方差结构，弥合不同架构间的表示差异。
3.  创新��处：相较于之前工作（如SV-Mixer）直接沿用同构蒸馏方法，本工作首次系统性地研究并设计了针对异构架构（Transformer vs. MLP-Mixer）的蒸馏策略，明确将跨架构蒸馏作为独立问题处理。
4.  主要实验结果：在VoxCeleb1、VCMix、VoxSRC和VOiCES四个测试集上，结合TGL和PAD的完整框架相比基线（SV-Mixer）取得了显著且一致的改进，相对EER降低幅度分别为11.94%、18.22%、8.17%和11.71%。80M参数的17层学生模型在VoxCeleb-O上达到0.58% EER，接近参数量更大的Transformer SOTA模型性能。

关键实验结果表1：组件消融实验 (VoxCeleb1)

| 模型配置 | Vox EER (%) | VCMix EER (%) | VoxSRC EER (%) | VOiCES EER (%) |
| :--- | :--- | :--- | :--- | :--- |
| Baseline | 2.18(±0.04) | 6.42(±0.22) | 4.52(±0.10) | 10.98(±0.20) |
| +TGL | 2.11(±0.01) | 5.92(±0.17) | 4.30(±0.13) | 10.49(±0.12) |
| +PAD | 2.11(±0.01) | 6.15(±0.13) | 4.51(±0.11) | 9.99(±0.33) |
| +TGL, PAD | 1.92(±0.06) | 5.25(±0.30) | 4.15(±0.16) | 9.54(±0.23) |

关键实验结果表2：不同压缩比下的性能 (图3总结)

| 压缩策略 | 相对基线性能 |
| :--- | :--- |
| 减半通道数（蓝线） | 在各压缩比下均优于基线压缩方法，EER更低 |
| 减少深度（橙线） | 在激进压缩（25-50%）时表现尤为突出，EER最低 |
| 基线压缩方法（绿线） | 在高压缩比下性能下降更严重，EER更高 |

关键实验结果表3：与SOTA模型对比

| 模型 | 参数量 (M) | Vox-O EER (%) | VCMix EER (%) | VoxSRC EER (%) | VOiCES EER (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| WavLM (2022) | 100.0 | 0.84 | N/A | N/A | N/A |
| LAP (2025) | 96.3 | 0.61 | N/A | N/A | N/A |
| SEED (2025) | 105.6 | 0.81 | 2.29 | 4.94 | N/A |
| SV-Mixer (2025) | 80.3 | 0.78 | 3.29 | 4.89 | 7.85 |
| Ours (17 layer) | 80.0 | 0.58 | 2.34 | 3.98 | 7.11 |

![图2: PAD权重分布热力图](pdf-image-page3-idx1)
图2展示了在PAD损失中使用和不使用停止梯度操作时，可学习权重α在学生模型各层的分布。不使用停止梯度时（左图），权重坍缩至单一层；使用后（右图），权重分布更均衡，表明多层均参与学习。

5.  实际意义：该工作为在资源受限设备上部署高性能说话人验证系统提供了一条有效路径。它证明了通过精心设计的蒸馏策略，轻量级、硬件友好的注意力无关模型（如MLP-Mixer）可以从大型SSL模型中有效继承判别能力，推动了高效语音表征学习的发展。
6.  主要局限性：论文中验证的异构组合主要是WavLM (Transformer) 到 SV-Mixer (MLP)。该框架对其他异构组合（如Transformer到CNN、或Mamba等其他新兴架构）的有效性有待验证。实验对比主要集中在与自身变体的比较，与更多最新SOTA方法的横向对比不够充分。

---

### 5. [Triage Knowledge Distillation for Speaker Verification](/audio-paper-digest-blog/posts/2026-04-29-triage-knowledge-distillation-for-speaker)

✅ **7.5/10** | 前25% | #说话人验证 | #知识蒸馏 | #模型压缩 #课程学习

👥 **作者与机构**

- 第一作者：Ju-ho Kim（Samsung Research, AI Solution Team）
- 通讯作者：未说明
- 作者列表：Ju-ho Kim（Samsung Research, AI Solution Team）、Youngmoon Jung（Samsung Research, AI Solution Team）、Joon-Young Yang（Samsung Research, AI Solution Team）、Jaeyoung Roh（Samsung Research, AI Solution Team）、Chang Woo Han（Samsung Research, AI Solution Team）、Hoon-Young Cho（Samsung Research, AI Solution Team）

💡 **毒舌点评**

亮点：TRKD方法设计直观有效，将“评估-优先-关注”的分诊思想系统地应用于知识蒸馏，并通过动态τ课程调度巧妙地平衡了训练稳定性与后期聚焦难度，实验结果在各种架构组合上的一致性提升很有说服力。短板：论文对方法的局限性探讨不足，例如，累积概率阈值τ的最终值（0.05）和调度曲线（γ=0.001）是经验选择，其对不同数据集和任务规模的敏感性与最优性缺乏理论分析或更广泛的实验验证。

📌 **核心摘要**

1. 问题：在大规模说话人验证（SV）任务中，将高容量教师模型的知识高效迁移到资源受限的学生模型是一个挑战。传统知识蒸馏（KD）损失会耦合目标类置信度和非目标类结构信息，而改进的解耦KD（DKD）虽然分离了这两者，但对所有非目标类一视同仁，容易受到大规模分类中低概率“长尾”类的噪声干扰。
2. 方法核心：论文提出“分诊知识蒸馏”（TRKD），其核心是“评估-优先-关注”三步流程。首先，使用累积概率阈值τ评估每个样本的难度，将教师输出后验分为目标类、高概率非目标“混淆集”和低概率非目标“背景集”。其次，优先传输混淆集内的类间关系信息（通过条件分布对齐）和三元质量（目标/混淆/背景的质量占比），丢弃背景集。最后，通过τ的课程调度（从大到小）聚焦学习，初期传递广泛的非目标上下文，后期则专注于最难混淆的非目标类。
3. 创新点：相比DKD和GKD，TRKD创新在于（1）引入了动态的三质量（目标/混淆/背景）划分与传输；（2）实现了基于混淆集的精细化条件对齐；（3）设计了τ课程调度以稳定训练并逐步提升蒸馏难度。该方法无需改变模型架构或引入额外数据。
4. 实验结果：在VoxCeleb1的O/E/H三个标准评测集上，TRKD在6种不同的教师-学生架构组合（包括异构架构，如RN152→MNV2）中，均取得了最优的等错误率（EER）。以最强基线（DKD或GKD）为对比，TRKD平均相对降低EER达14.0%；相对于无蒸馏的学生模型基线，平均相对改善达18.7%。消融实验证实了τ课程调度对训练稳定性的关键作用，以及三元质量项（LTMKD）和混淆集条件项（LCFKD）的互补增益。
5. 实际意义：TRKD为在移动设备等边缘计算平台上部署高精度说话人验证模型提供了一种更有效的知识压缩方案，能够显著降低学生模型的参数量和计算量，同时保持接近大教师模型的性能。
6. 主要局限性：方法依赖于超参数τ的初始值、终值和调度策略的选择，其通用调参指南或自适应策略未被探讨。此外，论文未涉及在更复杂的场景（如变长语音、远场识别）下的验证。

---

### 6. [Enhancing Speaker Verification with w2v-BERT 2.0 and Knowledge Distillation Guided Structured Pruning](/audio-paper-digest-blog/posts/2026-04-29-enhancing-speaker-verification-with-w2v-bert-20)

✅ **7.5/10** | 前25% | #说话人验证 | #知识蒸馏 | #预训练 #模型压缩

👥 **作者与机构**

- 第一作者：Ze Li（武汉大学计算机科学学院， 苏州多模态智能系统市重点实验室）
- 通讯作者：Ming Li（武汉大学人工智能学院， 昆山杜克大学， 苏州多模态智能系统市重点实验室）
- 作者列表：Ze Li（武汉大学计算机科学学院， 苏州多模态智能系统市重点实验室）、Ming Cheng（武汉大学计算机科学学院， 苏州多模态智能系统市重点实验室）、Ming Li（武汉大学人工智能学院， 昆山杜克大学， 苏州多模态智能系统市重点实验室）

💡 **毒舌点评**

这篇论文是一次漂亮的大模型“落地”工程实践，成功地将w2v-BERT 2.0这个语言学预训练巨兽改造为说话人验证的利器，并达到了SOTA性能，同时不忘通过剪枝为实际部署铺路，展现了完整的研究闭环。然而，其核心创新更偏向于“技术选型与系统集成”的优秀范例，而非底层算法的突破，更像是用现有最好的工具（MFA， LoRA， 结构化剪枝）精心组装了一台高性能机器，虽然结果亮眼，但缺少让同行惊呼“原来可以这样”的独创性构思。

📌 **核心摘要**

1. 问题：现有说话人验证（SV）系统面临标注数据不足与模型复杂度之间的矛盾，且大规模预训练模型（PTM）的参数量过大，不利于实际部署。
2. 核心方法：首次将基于Conformer架构、在4.5百万小时多语言数据上自监督训练的w2v-BERT 2.0 PTM用于SV任务。采用多尺度特征聚合（MFA）结构结合Layer Adapter处理PTM多层输出，并使用LoRA进行高效微调。为降低部署成本，应用知识蒸馏指导的结构化剪枝技术压缩PTM。
3. 创新点：将w2v-BERT 2.0引入SV；提出“MFA + Layer Adapter + LoRA”的高效适配框架；实现了基于知识蒸馏的结构化剪枝，大幅压缩模型且性能损失极小。
4. 主要结果：在Vox1-O测试集上达到0.12% EER，在Vox1-H上达到0.55% EER，超越了表1中列出的多种前沿方法。通过剪枝将模型参数减少约80%，在Vox1-O上的EER仅从0.14%增加至0.18%，性能退化仅0.04%。
5. 实际意义：为使用超大型预训练模型解决SV问题提供了有效方案，并展示了如何将模型压缩至实际可用的规模，平衡了性能与效率。
6. 局限性：尽管性能优越，但模型初始参数量巨大（约580M），剪枝后的模型（124M）依然较传统SV模型庞大。研究未深入探讨w2v-BERT 2.0中Conformer架构相比Transformer在SV任务上的具体优势机制，且未提供在其他更具挑战性场景（如极端噪声、跨语言）下的全面评估。

---

### 7. [Face-Voice Association with Inductive Bias for Maximum Class Separation](/audio-paper-digest-blog/posts/2026-04-29-face-voice-association-with-inductive-bias-for)

✅ **7.0/10** | 前25% | #说话人验证 | #归纳偏置 | #跨模态 #对比学习

👥 **作者与机构**

- 第一作者：未说明（论文作者列表未按顺序标注第一作者，但根据惯例，Marta Moscati排在首位）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Marta Moscati¹, Oleksandr Kats¹, Mubashir Noman², Muhammad Zaigham Zaheer², Yufang Hou³, Markus Schedl¹’⁴, Shah Nawaz¹
    - ¹ Johannes Kepler University Linz, Austria
    - ² MBZUAI, UAE
    - ³ IT:U Interdisciplinary Transformation University Austria
    - ⁴ Linz Institute of Technology, Austria

#

💡 **毒舌点评**

亮点：论文巧妙地将一个原本用于单模态分类任务的“最大类分离归纳偏置”技术迁移并适配到了多模态的人脸-语音关联领域，且通过扎实的消融实验证明了它与正交约束损失结合后的“1+1>2”效果，思路新颖且有效。
短板：归纳偏置矩阵的构造（公式1）需要预先知道总说话人数量（Ns），这可能导致其在动态或开放世界的说话人识别场景中应用受限，论文未探讨这一关键限制的缓解方案。

#

📌 **核心摘要**

1.  解决的问题：现有人脸-语音关联方法主要依靠损失函数（如对比损失、三元组损失）来拉近同类、推远异类表示，但这些方法在处理大规模数据时计算复杂度高，且分类损失本身不足以产生具有强判别性的嵌入空间。
2.  方法核心：提出了一种将“最大类分离”作为归纳偏置的方法。在多模态表示（由面部和语音嵌入加权平均得到）之后、最终的说话人分类层之前，插入一个固定的、非学习的矩阵（由公式1递归构建）。该矩阵预先最大化了不同类（说话人）之间的理论分离度。
3.  创新点：
    - 首次应用：这是首次将“最大类分离归纳偏置”应用于多模态学习任务（人脸-语音关联），而非仅限于单模态分类。
    - 协同设计：证明了该归纳偏置矩阵与正交约束损失结合使用时效果最佳，该损失强制同说话人表示对齐，不同说话人表示正交。
    - SOTA性能：在两个标准任务（跨模态验证、跨模态匹配）和两个基准数据集（VoxCeleb， MAV-Celeb）上取得了当前最优性能。
4.  主要实验结果：
    - VoxCeleb跨模态验证（EER↓）：本文方法（Ours）在“已见-已听”配置下达到13.9%，优于之前最优方法Single Stream Network (17.2%)；在“未见-未听”配置下达到22.9%，优于之前最优方法FOP (24.9%)。
    - MAV-Celeb跨模态验证（EER↓）：本文方法在总体（All）上达到17.7%，与最优方法Audio-visual持平；在英语（English）子集上达到16.5%，取得最优。
    - VoxCeleb跨模态匹配：在所有测试的画廊大小（2到10）下，本文方法的匹配准确率均高于其他SOTA方法。
    - 消融实验：仅用分类损失（CE）的效果一般；仅用归纳偏置矩阵（MSM）会降低性能；但分类损失+正交损失（FOP）与归纳偏置矩阵结合（Ours）时性能最佳，证明了三者的协同作用。
5.  实际意义：该方法提升了人脸-语音跨模态关联的准确性，对于增强基于生物特征的身份认证系统、改善多模态内容检索和匹配的可靠性具有直接价值。
6.  主要局限性：
    - 归纳偏置矩阵的维度依赖于训练集的总说话人数量（Ns），可能限制了模型对训练时未见过的新说话人的泛化能力。
    - 未研究该方法在说话人数量变化时的性能表现，也未验证其在其他多模态任务上的有效性。
    - 方法将归纳偏置矩阵应用于当前SOTA模型，但未探究其对其他架构模型的普适性。

#

---

### 8. [Impact of Phonetics on Speaker Identity in Adversarial Voice Attack](/audio-paper-digest-blog/posts/2026-04-29-impact-of-phonetics-on-speaker-identity-in)

✅ **7.0/10** | 前50% | #说话人验证 | #对抗样本 | #语音识别 #音频安全

👥 **作者与机构**

- 第一作者：未说明（论文中作者按字母顺序列出，未明确标注第一作者）
- 通讯作者：未说明（论文中未提供通讯作者信息）
- 作者列表：Daniyal Kabir Dar（密歇根州立大学计算机科学与工程系）、Qiben Yan（密歇根州立大学计算机科学与工程系）、Li Xiao（密歇根州立大学计算机科学与工程系）、Arun Ross（密歇根州立大学计算机科学与工程系）

#

💡 **毒舌点评**

亮点在于将对抗扰动的分析从单纯的转录错误（WER/CER）提升到了语音学特征（元音、辅音）和说话人身份表征的层面，提出了“身份漂移”这个直观且有意义的概念。短板是整个研究框架（白盒攻击+评估指标）相对常规，对“为什么某些语音结构更容易引发漂移”这一核心问题的分析深度有限，更多是相关性观察而非因果解释。

#

📌 **核心摘要**

本文研究了针对自动语音识别（ASR）系统的对抗性语音攻击，如何同时影响说话人身份验证。论文的核心问题是：这些旨在改变转录文本的微小扰动，是否会破坏用于区分说话人的声学指纹？方法上，作者以DeepSpeech为攻击目标，采用基于梯度的白盒攻击方法生成对抗样本，并创新性地从语音学角度（如元音中心化、辅音替换）分析扰动模式。与以往只关注转录准确率的工作不同，本文的核心贡献在于系统评估了对抗攻击对说话人验证系统（使用ECAPA-TDNN和ResNet模型）的影响，提出了“身份漂移”概念。实验结果显示，在VCTK数据集上，攻击的成功率与目标短语的语音复杂度和长度强相关：短元音丰富的短语（如“yes”）身份漂移很小（TMR=100%， d'≈9.6），而长且包含复杂辅音丛的短语（如pangrams）会导致严重的身份漂移（TMR低至44%， d'降至约3.0）。该研究的实际意义在于揭示了语音对抗攻击的双重危害，提示了未来防御系统需要同时考虑转录安全和身份安全。主要局限性在于研究仅限于理想化的白盒攻击设置，未探讨更现实的黑盒或过空气攻击场景。

#

---

### 9. [Curriculum Learning with Contrastive Loss for Lightweight Speaker Verification](/audio-paper-digest-blog/posts/2026-04-29-curriculum-learning-with-contrastive-loss-for)

✅ **6.5/10** | 前25% | #说话人验证 | #对比学习 #课程学习 | #对比学习 #课程学习

👥 **作者与机构**

- 第一作者：Jin Li（香港理工大学电机工程系）
- 通讯作者：未说明
- 作者列表：Jin Li（香港理工大学电机工程系；布尔诺理工大学Speech@FIT）、Man-Wai Mak（香港理工大学电机工程系）、Johan Rohdin（布尔诺理工大学Speech@FIT）、Oldřich Plchot（布尔诺理工大学Speech@FIT）

#

💡 **毒舌点评**

亮点：将课程学习思想精巧地应用于对比学习的负样本选择，并通过一个“教师网络”来量化和迁移“难度”，这一设计既直观又有效，避免了手动筛选困难负样本的武断。短板：论文的实验部分略显“安全牌”，主要验证了在VoxCeleb单一数据集上的有效性，且基线模型（如ECAPA-TDNN的轻量化版本）未得到充分讨论，使得“state-of-the-art”的宣称需要读者自行查阅更多文献才能完全确认。

#

📌 **核心摘要**

1.  解决的问题：在资源受限的移动设备上部署说话人验证系统时，需要在模型轻量化（低参数量、低计算量）与高精度之间取得平衡。现有轻量级模型性能仍有提升空间，而标准对比学习在训练中对负样本的选择缺乏策略。
2.  方法核心：提出CurriNeg-AMS训练框架。核心是CurriNeg课程策略：使用一个预训练的教师网络评估所有负样本相对于锚点的难度（余弦相似度），并通过一个节奏函数控制，在训练过程中由易到难地将负样本引入学生的对比学习损失（LCurriNeg）计算。同时，结合AM-Softmax损失（LCurriNeg-AMS）以增强类内紧凑性和类间可分性。
3.  创新之处：不同于传统对比学习随机或基于启发式选择负样本，本文首次将课程学习系统地引入负样本选择，并通过教师-学生架构实现难度评估的迁移。这种“难度感知”的渐进式学习更符合认知规律，提升了学习效率。
4.  主要实验结果：在VoxCeleb1测试集上，基于Fast ResNet34（1.4M参数）的CurriNeg-AMS将EER从基线的2.28%降低至1.82%（相对降低20.2%），优于包括Angular Prototypical loss在内的多种先进方法。消融实验表明，线性节奏函数效果最佳，且课程学习策略持续优于无课程的监督对比学习。

    | 学生网络 | 训练集 | 损失函数 | EER (%) | minDCF |
    | :--- | :--- | :--- | :--- | :--- |
    | TDNN | Vox1-dev | Softmax | 4.92 | 0.327 |
    | TDNN | Vox1-dev | AM-Softmax | 4.18 | 0.267 |
    | TDNN | Vox1-dev | AAM-Softmax | 4.13 | 0.279 |
    | TDNN | Vox1-dev | CurriNeg-AMS (ours) | 3.82 | 0.283 |
    | Fast ResNet34 | Vox2-dev | AM-Softmax | 2.80 | – |
    | Fast ResNet34 | Vox2-dev | AAM-Softmax | 2.37 | – |
    | Fast ResNet34 | Vox2-dev | Triplet | 2.71 | – |
    | Fast ResNet34 | Vox2-dev | GE2E | 2.37 | – |
    | Fast ResNet34 | Vox2-dev | Prototypical | 2.32 | – |
    | Fast ResNet34 | Vox2-dev | Angular Prototypical | 2.22 | – |
    | Fast ResNet34 | Vox2-dev | CurriNeg-AMS (ours) | 1.82 | 0.131 |
    表2：不同损失函数在TDNN和Fast ResNet34上的性能对比（论文Table 2）

5.  实际意义：为训练高效、高精度的轻量级说话人验证模型提供了一个新颖且有效的训练框架，有助于推动说话���识别技术在智能手机、IoT设备等端侧的广泛应用。
6.  主要局限性：实验验证集中于VoxCeleb数据集，模型在更复杂噪声环境、跨语言场景或极低资源条件下的泛化能力未被探讨。此外，引入教师网络进行预训练和难度评估，增加了整体训练流程的复杂性和初始成本。

#

---

### 10. [Connecting Layer-Wise Representation of Wavlm with Spectro-Temporal Modulation on Speaker Verification](/audio-paper-digest-blog/posts/2026-04-29-connecting-layer-wise-representation-of-wavlm)

✅ **6.0/10** | 前50% | #说话人验证 | #自监督学习 | #模型分析 #可解释性

👥 **作者与机构**

- 第一作者：Shao-Hsuan Chen (⋆ 国立阳明交通大学电机工程学系)
- 通讯作者：未明确说明（根据惯例，可能是最后作者Tai-Shih Chi或Yuan-Fu Liao）
- 作者列表：
    - Shao-Hsuan Chen (⋆ 国立阳明交通大学电机工程学系)
    - Pei-Chin Hsieh (⋆ 国立阳明交通大学电机工程学系)
    - Yih-Liang Shen (⋆ 国立阳明交通大学电机工程学系)
    - Tai-Shih Chi (⋆ 国立阳明交通大学电机工程学系)
    - Yuan-Fu Liao († 国立阳明交通大学人工智能创新研究所)
    - Chi-Han Lin (‡ 玉山金融控股股份有限公司)
    - Juan-Wei Xu (‡ 玉山金融控股股份有限公司)
（⋆、†、‡ 标记对应其后机构，机构信息已在列表中明确标注）

💡 **毒舌点评**

论文最大的亮点在于为理解WavLM这类黑箱模型提供了一种新颖的“神经科学视角”，通过构建频谱-时空调制特征，发现模型中间层确实编码了类似听觉皮层的选择性（如对性别相关的谐波结构敏感），这种交叉学科的分析思路值得肯定。然而，其短板也十分明显：实验设计基本局限于TIMIT数据集的性别子集分析，更像是一个初步的、小规模的现象观察，未能将这些“生物启发式”的发现与提升实际说话人验证系统（如在VoxCeleb大规模数据上的性能）建立直接联系，使得论文的实用价值和影响力打了折扣。

📌 **核心摘要**

这篇论文旨在探索自监督学习模型WavLM的内部表征与生物听觉系统中关键的频谱-时空调制（STM）特征之间的关联性。论文的核心方法是：1）构建一个模仿初级听觉皮层处理过程的STM特征提取器，生成50种不同速率和尺度的调制响应；2）使用加权典型相关分析（PWCCA）量化WavLM各层表示与这些STM特征的相关性；3）设计一个监督回归任务，用WavLM的层表示来重构经过注意力加权的STM响应。与已有工作多关注声学或语言学特征的分析不同，本文首次系统性地将SSL模型与基于神经科学的调制特征进行对齐分析。实验在TIMIT数据集按性别划分的子集上进行，结果表明：中间Transformer层（约3-11层）与STM特征高度相关；且这种相关性表现出性别特异性：男性语音的表示与较高尺度（4-8 cycles/octave，对应其较低基频）的STM特征匹配，而女性语音则与较低尺度（2-4 cycles/octave）匹配。论文的主要实际意义在于，为理解和解释强大的SSL语音模型提供了来自听觉神经科学的洞见，揭示了模型可能自发地学习到了类似于大脑处理语音的层次化调制特征。其主要局限性是：研究仅限于TIMIT数据集和性别因素的分析，规模较小；未直接验证这些发现能否以及如何用于改进说话人验证系统的实际性能；也未与其他主流分析方法进行充分对比。

---

