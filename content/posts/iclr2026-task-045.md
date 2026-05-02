---
title: "ICLR 2026 - 音频生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音频生成"]
categories: [iclr-2026]
description: "共 15 篇 ICLR 2026 音频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频生成

共 **15** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution](/audio-paper-digest-blog/posts/2026-05-03-flow2gan-hybrid-flow-matching-and-gan-with-multi) | 8.5分 | 前25% |
| 🥈 | [FlowBind: Efficient Any-to-Any Generation with Bidirectional](/audio-paper-digest-blog/posts/2026-05-03-flowbind-efficient-any-to-any-generation-with) | 8.5分 | 前25% |
| 🥉 | [SCRAPL: Scattering Transform with Random Paths for Machine L](/audio-paper-digest-blog/posts/2026-05-03-scrapl-scattering-transform-with-random-paths-for) | 8.5分 | 前25% |
| 4. | [JavisDiT++: Unified Modeling and Optimization for Joint Audi](/audio-paper-digest-blog/posts/2026-05-03-javisdit-unified-modeling-and-optimization-for) | 8.5分 | 前25% |
| 5. | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers) | 8.0分 | 前25% |
| 6. | [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-audiox-a-unified-framework-for-anything-to-audio) | 8.0分 | 前25% |
| 7. | [Syncphony: Synchronized Audio-to-Video Generation with Diffu](/audio-paper-digest-blog/posts/2026-05-03-syncphony-synchronized-audio-to-video-generation) | 8.0分 | 前25% |
| 8. | [JavisDiT: Joint Audio-Video Diffusion Transformer with Hiera](/audio-paper-digest-blog/posts/2026-05-03-javisdit-joint-audio-video-diffusion-transformer) | 8.0分 | 前25% |
| 9. | [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-03-token-based-audio-inpainting-via-discrete) | 7.5分 | 前25% |
| 10. | [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-03-aurelius-relation-aware-text-to-audio-generation) | 7.5分 | 前25% |
| 11. | [UALM: Unified Audio Language Model for Understanding, Genera](/audio-paper-digest-blog/posts/2026-05-03-ualm-unified-audio-language-model-for) | 7.5分 | 前25% |
| 12. | [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensiona](/audio-paper-digest-blog/posts/2026-05-03-prismaudio-decomposed-chain-of-thought-and-multi) | 7.5分 | 前25% |
| 13. | [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-03-smartdj-declarative-audio-editing-with-audio) | 7.5分 | 前25% |
| 14. | [TangoFlux: Super Fast and Faithful Text to Audio Generation ](/audio-paper-digest-blog/posts/2026-05-03-tangoflux-super-fast-and-faithful-text-to-audio) | 7.5分 | 前25% |
| 15. | [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis wi](/audio-paper-digest-blog/posts/2026-05-03-ac-foley-reference-audio-guided-video-to-audio) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-flow2gan-hybrid-flow-matching-and-gan-with-multi)

🔥 **8.5/10** | 前25% | #音频生成 | #流匹配 | #神经声码器 #生成模型

👥 **作者与机构**

- 第一作者：Zengwei Yao（Xiaomi Corp., Beijing, China）
- 通讯作者：Daniel Povey（dpovey@xiaomi.com, Xiaomi Corp., Beijing, China）
- 作者列表：Zengwei Yao（Xiaomi Corp.），Wei Kang（Xiaomi Corp.），Han Zhu（Xiaomi Corp.），Liyong Guo（Xiaomi Corp.），Lingxuan Ye（Xiaomi Corp.），Fangjun Kuang（Xiaomi Corp.），Weiji Zhuang（Xiaomi Corp.），Zhaoqing Li（Xiaomi Corp.），Zhifeng Han（Xiaomi Corp.），Long Lin（Xiaomi Corp.），Daniel Povey（Xiaomi Corp.）

💡 **毒舌点评**

本文巧妙地将Flow Matching的“稳定训练”与GAN的“高效推理”结合，提出了一个工程上非常实用的两阶段音频生成方案，尤其是在处理音频静音段和感知损失缩放上的改进颇具巧思。然而，其最终模型（78.9M参数）相比Vocos（13.5M）等轻量级声码器在参数量上并不占优，这在部署到边缘设备时可能会成为一个考量点。

🔗 **开源详情**

- 代码：提供GitHub代码仓库链接：https://github.com/k2-fsa/Flow2GAN
- 模型权重：论文中提到源代码和预训练检查点已发布在上述仓库。
- 数据集：使用的LibriTTS等数据集为公开数据集，论文未提供新的数据集。
- Demo：提供在线演示样本链接：https://flow2gan.github.io
- 复现材料：论文在附录中提供了详细的模型配置表（Table 10），并在正文5.1节说明了优化器、训练步数、硬件等关键训练细节，复现信息充分。
- 论文中引用的开源项目：依赖Vocos的架构设计，采用了HiFi-GAN的MPD和Univnet的MRD判别器，使用了ConvNeXt网络，优化器为ScaledAdam。

📌 **核心摘要**

1.  要解决的问题：现有音频生成方法面临权衡：GAN训练不稳定但推理快，Flow Matching/扩散模型训练稳定但推理慢（需要多步采样）。本文旨在结合两者优势，实现少步（1/2/4步）高保真音频生成。
2.  方法核心：提出Flow2GAN两阶段框架。第一阶段，使用改进的Flow Matching目标（改为直接预测终点`x1`而非速度`vt`，并引入基于频谱能量的损失缩放）训练模型，学习稳健的生成能力。第二阶段，将第一阶段训练好的模型初始化为少步生成器，通过GAN微调（使用MPD和MRD判别器）进一步提升细节和实现快速推理。同时，设计了处理不同时间-频率分辨率傅里叶系数的多分支ConvNeXt网络作为骨干。
3.  与已有方法相比新在哪里：
    - 框架创新：首次将音频特定的Flow Matching改进与GAN微调系统化地结合为两阶段训练范式。
    - Flow Matching改进：针对音频的空静音段和感知特性，提出了端点估计目标和频谱能量自适应损失缩放，优于标准Flow Matching和逐帧能量缩放。
    - 网络架构：扩展了Vocos的单分辨率频谱处理到多分辨率分支架构，增强了建模能力。
    - 效果显著：经过改进的Flow Matching预训练，为后续GAN微调提供了更强的初始化，使得最终的少步生成器（尤其是1步）性能显著优于基于标准Flow Matching的微调（如PeriodWave-Turbo）。
4.  主要实验结果：在Mel谱和音频token条件生成上均取得优异结果。关键数据见下表：
    | 模型 (条件) | 步数 | PESQ↑ | ViSQOL↑ | FSD↓ | SMOS↑ | MOS↑ |
    | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
    | Flow2GAN (Mel, LibriTTS) | 1 | 4.189 | 4.957 | 0.028 | 4.44 | 4.39 |
    | Flow2GAN (Mel, LibriTTS) | 4 | 4.484 | 4.986 | 0.016 | 4.60 | 4.58 |
    | BigVGAN-v2 (Mel, LibriTTS) | 1 | 4.379 | 4.971 | 0.014 | 4.65 | 4.59 |
    | Flow2GAN (AudioToken 3kbps) | 2 | 2.442 | 4.049 | 0.843 | 4.19 | 4.07 |
    | PeriodWave-Turbo (AudioToken 3kbps) | 4 | 2.160 | 4.058 | 1.018 | 3.04 | 3.16 |
    消融实验证实，端点估计目标（+0.455 PESQ）、频谱能量损失缩放以及多分辨率架构均带来稳定性能提升。在TTS声码器任务中，Flow2GAN也展现出竞争力。
5.  实际意义：该方法为高质量音频生成提供了一个新的、高效的解决方案，特别适合对延迟敏感的应用场景（如实时TTS、互动媒体）。其“预训练+微调”的范式和针对音频的Flow Matching改进可能对相关领域（如音频编辑、音效生成）有启发。
6.  主要局限性：1) 模型参数量（78.9M）大于Vocos等模型，在资源受限设备上的部署需权衡；2) 1步生成的质量相比多步仍有差距，虽然已显著优于其他1步方法；3) 论文主要关注生成质量与速度的权衡，对模型在噪声、失真等条件下的鲁棒性未深入探讨。

---

### 🥈 [FlowBind: Efficient Any-to-Any Generation with Bidirectional Flows](/audio-paper-digest-blog/posts/2026-05-03-flowbind-efficient-any-to-any-generation-with)

🔥 **8.5/10** | 前25% | #音频生成 | #流匹配 | #多模态模型 #数据集

👥 **作者与机构**

- 第一作者：Yeonwoo Cha（KAIST）
- 通讯作者：Seunghoon Hong（KAIST）
- 作者列表：Yeonwoo Cha（KAIST）、Semin Kim（KAIST）、Jinhyeon Kwon（KAIST）、Seunghoon Hong（KAIST），*表示同等贡献。

💡 **毒舌点评**

这篇论文的核心亮点在于用一个简洁优雅的“共享潜在空间+模态特定流”的架构，通过单一目标函数联合训练，显著降低了any-to-any多模态生成对数据和算力的苛刻要求（参数和训练时间减少一个数量级）。然而，其主要短板在于实验验证的广度略显不足，核心评估集中在文本、图像、音频三种模态，虽然扩展了3D点云进行初步验证，但并未展示在更多样、更复杂的模态组合（如视频）下的表现，其“通用性”宣称有待更全面的数据支撑。

🔗 **开源详情**

- 代码：论文提供了项目主页（https://yeonwoo378.github.io/official_flowbind）和代码链接，表明代码是开源的。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：明确说明了训练所用的数据集名称和规模（LAION-COCO, Flickr-30k, AudioCaps v2, VGGSound），但这些是公共数据集，需要按各自协议获取。论文本身未提供新数据集。
- Demo：项目主页可能提供在线演示，但论文正文中未明确说明。
- 复现材料：提供了极其详细的复现信息，包括：完整的模型架构描述（附录C）、训练数据集详细列表（表8）、完整的训练超参数和策略（附录C）、评估指标定义和协议（附录D）、以及所有实验结果的定量表格。
- 论文中引用的开源项目：包括EmbeddingGemma、CLIP、Stable-UnCLIP、CLAP、AudioLDM、Gemma3-1B等用于构建各模态编解码器。

📌 **核心摘要**

1.  要解决什么问题：现有的基于流模型的any-to-any多模态生成方法（如CoDi, OmniFlow）存在三大痛点：1) 高数据依赖，常需全模态配对或以文本为中心的数据；2) 高计算成本，通常在高维空间建模联合分布；3) 复杂的多阶段训练流程，导致优化困难且不稳定。
2.  方法核心是什么：本文提出FlowBind，其核心思想是引入一个可学习的共享潜在空间作为模态间的“锚点”，并通过模态特定的可逆流分别将每个模态连接到该共享空间。所有组件在单一的流匹配目标下联合优化。推理时，通过源模态的反向流映射到共享空间，再通过目标模态的前向流生成输出，实现直接翻译。
3.  与已有方法相比新在哪里：
    *   架构创新：用可学习的共享潜在空间替代固定的高斯先验或以文本为中心的锚点，实现了更灵活、对称的模态对齐。
    *   训练创新：所有组件（共享潜在空间编码器和各模态流网络）在单一损失下端到端联合训练，避免了复杂的多阶段pipeline。
    *   效率创新：在紧凑的语义表示空间（如CLIP, CLAP嵌入）上操作，而非原始高维数据，大幅降低了模型参数量和计算复杂度。
4.  主要实验结果如何：在文本、图像、音频的多种跨模态生成任务上，FlowBind达到了与先前SOTA方法（CoDi, OmniFlow）可比或更优的生成质量和对齐度（见表2、3）。更重要的是，它实现了极高的效率：参数量仅为OmniFlow的1/6（568M vs 3.2B），训练速度提升10倍（48 GPU-hr vs 480* GPU-hr），且仅使用了1.79%的训练数据（表1）。在更具挑战性的多对多生成（表4、5）中，FlowBind表现出更均衡的跨模态条件利用能力。
5.  实际意义是什么：该工作为构建高效、灵活的通用多模态生成模型提供了一个简洁框架。它降低了any-to-any生成的准入门槛（更少数据、更少算力），使得在资源受限情况下研究和应用多模态生成成为可能，对开发更通用的AI模型有推动作用。
6.  主要局限性是什么：
    *   模态覆盖有限：核心实验仅涵盖文本、图像、音频。虽扩展到点云，但仅为初步验证。
    *   依赖预训练编码器/解码器：模型性能高度依赖于上游模态特定编码器（如CLIP, CLAP）的表示质量和固定解码器的生成能力。
    *   对齐机制简单：在推理时对多个源模态的潜在估计采用简单平均，虽然实验显示其鲁棒性（附录E），但这可能限制了更复杂的多源条件融合。

---

### 🥉 [SCRAPL: Scattering Transform with Random Paths for Machine Learning](/audio-paper-digest-blog/posts/2026-05-03-scrapl-scattering-transform-with-random-paths-for)

🔥 **8.5/10** | 前25% | #音频生成 | #信号处理 | #模型评估

👥 **作者与机构**

- 第一作者：Christopher Mitcheltree（Queen Mary University of London, Centre for Digital Music）
- 通讯作者：Christopher Mitcheltree（Queen Mary University of London, Centre for Digital Music）
- 作者列表：Christopher Mitcheltree（Queen Mary University of London, Centre for Digital Music）、Vincent Lostanlen（Nantes Université, École Centrale Nantes, CNRS, LS2N）、Emmanouil Benetos（Queen Mary University of London, Centre for Digital Music）、Mathieu Lagrange（Nantes Université, École Centrale Nantes, CNRS, LS2N）

💡 **毒舌点评**

亮点：这篇论文精准地戳中了散射变换在深度学习中应用的最大痛点——计算成本，并给出了一个工程上极其巧妙的解决方案（随机路径近似+定制优化器），同时理论推导（无偏估计）和实验设计（覆盖合成器、真实鼓机、时间对齐问题）都非常扎实。短板：作为一篇以“感知”为卖点的方法，其在 Roland TR-808 实验中对信号衰减部分的建模明显失效，暴露了随机采样在信息稀疏路径上的潜在盲区；此外，θ-importance sampling 虽然有效，但依赖离线预计算，限制了其动态适应性。

🔗 **开源详情**

- 代码：提供 Python 包和 GitHub 仓库链接（https://christhetree.github.io/scrapl/）。
- 模型权重：论文中未提及公开模型权重。
- 数据集：TR-808 数据集来自第三方商业网站（Samples From Mars），论文未提供直接下载链接。合成器实验数据为动态生成。
- Demo：提供配套网站，可能包含音频示例。
- 复现材料：提供了非常详细的超参数配置表（表 10, 11, 12），包括数据、编码器、合成器、训练策略的所有细节，复现指南应包含在提供的代码库中。
- 引用的开源项目：依赖 PyTorch、nnAudio（用于 CQT）、auraloss（可能用于 MSS 基线）、pytorch-hessian-eigenthings（用于 θ-IS 中的特征值计算）。

📌 **核心摘要**

1. 问题：散射变换（特别是 JTFS）作为感知损失函数在深度逆问题（如音频合成）中效果很好，但因其路径数量庞大，作为可微损失函数的计算和内存成本极高，严重限制了其在大规模神经网络训练中的应用。
2. 方法核心：提出 SCRACL 算法，通过随机均匀采样单个散射路径来近似完整变换的梯度，并引入三项关键技术来稳定训练：（1）路径自适应矩估计（P-Adam），（2）路径级随机平均梯度加速（P-SAGA），以及（3）一种基于合成器参数敏感性的离线重要性采样初始化方法（θ-IS）。
3. 创新点：首次证明了随机路径近似是完整散射变换梯度的无偏估计；设计了专门针对路径非独立同分布特性的优化器（P-Adam/P-SAGA）；提出了将路径采样分布与合成器参数空间对齐的启发式初始化方法。
4. 主要实验结果：
    * 颗粒合成器匹配：SCRACL（相对误差 65.7‰）在精度上接近 JTFS（42.4‰），同时计算成本（相对成本~2x）远低于 JTFS（~25x），且远优于多种 MSS 损失（误差均 >195‰）。消融实验证明了各组件的有效性。
    * TR-808鼓机匹配：在声音对齐（微小时延）和未对齐（较小时延）两种场景下，SCRACL 在 transient 部分保持了与 JTFS 相当的感知保真度，而 MSS 在未对齐时性能显著下降。SCRACL 在 decay 部分表现不佳。
    * 重要性采样验证：在 chirplet 合成器上，θ-IS 相比均匀采样显著提升了参数预测精度（例如 θFM 误差降低 14%-80%）并加速了收敛。
5. 实际意义：使计算成本高昂的散射变换可以作为实用的损失函数，用于训练音频（及其他信号）生成模型和求解逆问题，特别是对存在时间偏移或需要多分辨率分析的任务。
6. 局限性：θ-IS 需要预计算，依赖初始权重；在 TR-808 实验中未能有效捕捉能量较低的衰减部分，表明该随机近似方法对稀疏信息路径的采样可能不足。

---

### 4. [JavisDiT++: Unified Modeling and Optimization for Joint Audio-Video Generation](/audio-paper-digest-blog/posts/2026-05-03-javisdit-unified-modeling-and-optimization-for)

🔥 **8.5/10** | 前25% | #音频生成 | #扩散模型 #流匹配 | #多模态模型 #扩散模型

👥 **作者与机构**

- 第一作者：Kai Liu (浙江大学)
- 通讯作者：Hao Fei (新加坡国立大学)
- 作者列表：Kai Liu (浙江大学)、Yanhao Zheng (浙江大学)、Kai Wang (多伦多大学)、Shengqiong Wu (新加坡国立大学)、Rongjunchen Zhang (HiThink Research)、Jiebo Luo (罗切斯特大学)、Dimitrios Hatzinakos (多伦多大学)、Ziwei Liu (南洋理工大学)、Hao Fei (新加坡国立大学)、Tat-Seng Chua (新加坡国立大学)

💡 **毒舌点评**

这篇论文在联合音视频生成这个日益重要的多模态任务上提出了一个简洁高效的解决方案，其MS-MoE架构和TA-RoPE位置编码的设计确实精巧，在效率与性能之间取得了很好的平衡，并且首次将偏好优化引入该领域，是一个扎实的推进。然而，论文虽然声称“SOTA”，但其绝对性能指标与商业模型Veo3仍有可见差距，且模型的可扩展性（数据规模、参数量）可能仍是制约其达到更高天花板的瓶颈。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://JavisVerse.github.io/JavisDiT2-page`。
- 模型权重：承诺公开发布预训练模型权重。
- 数据集：承诺公开发布所使用的数据集（包括SFT和DPO数据）。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了极为详细的复现信息，包括：模型架构细节、三阶段训练流程与超参数（表A1）、数据集构成与处理流程（图A2）、评估基准（JavisBench）及具体评测指标计算方法、以及多组消融实验的具体设置。
- 引用的开源项目：论文依赖并基于以下主要开源项目构建：Wan2.1-1.3B-T2V（视频骨干）、AudioLDM2（音频VAE）、umT5-xxl（文本编码器）。

📌 **核心摘要**

本文旨在解决现有开源联合音频视频生成（JAVG）方法在生成质量、时间同步性和人类偏好对齐方面落后于先进闭源模型（如Veo3）的问题。为此，论文提出了JavisDiT++框架，包含三项核心创新：1）提出模态特定混合专家（MS-MoE）架构，使用共享自注意力层进行跨模态交互，并采用独立的前馈网络分别处理音频和视频，以提升单模态生成质量并保持效率；2）提出时间对齐的旋转位置编码（TA-RoPE）策略，通过统一音频和视频令牌的时间轴位置ID，实现显式、帧级的音视频时间同步；3）首次将直接偏好优化（DPO）引入JAVG，设计了音视频直接偏好优化（AV-DPO）算法，利用多个奖励模型构建偏好数据对，使模型输出与人类在质量、一致性、同步性方面的偏好对齐。基于Wan2.1-1.3B-T2V构建的模型仅使用约1M公开训练数据，在JavisBench等基准测试上取得了全面的最先进性能，显著超越了JavisDiT和UniVerse-1等先前方法，同时保持了较低的推理开销。主要局限在于模型与数据的规模仍有提升空间，且当前专注于通用文本到音视频生成，未来可探索更广泛的可控生成与统一跨模态任务。

---

### 5. [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers)

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 | #自监督学习 #跨模态

👥 **作者与机构**

- 第一作者：Yasaman Haghighi (洛桑联邦理工学院)
- 通讯作者：未说明
- 作者列表：Yasaman Haghighi (洛桑联邦理工学院)、Bastien van Delft (洛桑联邦理工学院)、Mariam Hassan (洛桑联邦理工学院)、Alexandre Alahi (洛桑联邦理工学院)

💡 **毒舌点评**

这篇论文的亮点在于提出了一个极其简洁优雅的自监督正则化方法，利用模型自身的强层来指导弱层，达到了“自己教自己”的效果，并在多个模态（图像、音频、视频、运动生成）上验证了有效性，证明了其通用性。然而，其短板在于对“为什么选择这对特定的层进��对齐”背后的理论解释略显不足，更像是一种启发式策略，且虽然声称“参数无关”，但增加的余弦相似度计算本身也是一种开销，文中对这部分额外计算成本的量化不够充分。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/vita-epfl/LayerSync.git。
- 模型权重：未提及是否会公开预训练的模型权重。
- 数据集：使用的是公开数据集（ImageNet, MTG-Jamendo, HumanML3D等），但论文未提供获取或预处理脚本。
- Demo：未提供在线演示。
- 复现材料：论文在附录中提供了极其详细的超参数设置（Table 18, 19）、训练配置（GPU型号、batch size）、评估指标细节，以及算法伪代码（Algorithm 1），复现指导性很强。
- 论文中引用的开源项目：SiT (模型架构), Stable Diffusion VAE / Stable Audio Open VAE (数据编码), MDM (运动生成基线), DINOv2 (用于特征分析比较), CLAP (音频评估)。

📌 **核心摘要**

1.  解决的问题：当前提升扩散模型训练效率和生成质量的主流方法依赖于外部强大的预训练模型（如DINOv2, Qwen2-VL）提供特征指导。这些方法引入了额外的计算开销、数据依赖，且可能无法直接泛化到视觉之外的领域。
2.  方法核心：论文提出LayerSync，一种无需外部模型的自包含正则化方法。其核心思想是利用扩散模型内部表示的质量分层特性（深层通常语义更丰富），将深层（强层）的表示作为信号，通过最大化余弦相似度来对齐浅层（弱层）的表示。
3.  与已有方法相比新在哪里：不同于依赖外部指导（如REPA, REED）或使用EMA模型（如SRA）的方法，LayerSync完全自给自足，仅使用模型自身的中间层作为监督信号。它比Dispersive Loss等自包含方法提供了更具方向性的学习信号，且计算开销更低（O(BD) vs O(B^2D)）。
4.  主要实验结果：在ImageNet 256x256图像生成上，LayerSync将SiT-XL/2的训练加速了8.75倍以上（160个epoch的FID为8.29，接近基线模型训练1400个epoch的FID 8.3）。最终在800个epoch达到FID 1.89，刷新了纯自监督生成的SOTA。在音频（MTG-Jamendo）、视频（CLEVRER）、人体运动生成（HumanML3D）任务上也分别实现了21%（FAD）、54.7%（FVD）、7.7%（FID）的质量提升。此外，它提升了模型内部特征在分类和分割任务上的线性探测精度（分别提升32.4%和63.3%）。
5.  实际意义：为扩散模型训练提供了一种即插即用、无额外成本、跨模态通用的正则化技巧，显著降低了训练高性能生成模型的资源门槛，并表明了模型自身内部蕴含着强大的监督信号。
6.  主要局限性：虽然实验验证了鲁棒性，但最佳层对的选择仍遵循经验性启发式规则（排除前后特定比例层，保证一定间隔），缺乏理论指导。论文未深入探讨该方法在长时训练后可能产生的表示坍缩或多样性下降等潜在风险。

---

### 6. [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-audiox-a-unified-framework-for-anything-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 | #音乐生成 #统一音频模型

👥 **作者与机构**

- 第一作者：Zeyue Tian（香港科技大学）
- 通讯作者：Wei Xue（香港科技大学）、Yike Guo（香港科技大学）
- 作者列表：Zeyue Tian（香港科技大学）、Zhaoyang Liu（香港科技大学）、Yizhu Jin（香港科技大学）、Ruibin Yuan（香港科技大学）、Liumeng Xue（香港科技大学）、Xu Tan（独立研究者）、Qifeng Chen（香港科技大学）、Wei Xue†（香港科技大学）、Yike Guo†（香港科技大学）

💡 **毒舌点评**

亮点：该论文提出了一个优雅的统一框架（AudioX），通过创新的多模态自适应融合（MAF）模块和精心构建的大规模指令跟随数据集（IF-caps），成功地将文本、视频、音频等多种条件整合到单一的扩散Transformer模型中，并在音频与音乐生成的多项任务上实现了SOTA性能。短板：尽管论文承诺开源代码、模型和数据集，但并未提供具体的仓库链接或获取方式，对于读者复现其强大的指令跟随能力（依赖特定的IF-caps数据集）构成实质性障碍；此外，作为“万能”生成器，在复杂音频场景的精细建模上可能仍有局限。

🔗 **开源详情**

*   代码：论文承诺将在发布时开源，链接为 `https://zeyuet.github.io/AudioX/`。但论文当前未提供具体的代码仓库链接。
*   模型权重：论文承诺将开源预训练模型检查点，但未提供下载链接或平台。
*   数据集：论文承诺将开源完整的IF-caps数据集，但未说明具体获取方式（如通过上述网页或数据集平台）。
*   Demo：论文未提及在线演示。
*   复现材料：论文提供了详细的架构设计（图4）、训练超参数（学习率、优化器、batch size等）、训练硬件信息（3x8 H800, 4k GPU hours）、数据处理流程（图2）以及评估协议（包括新提出的T2A-bench）。这些信息理论上足以支持复现。
*   依赖的开源项目/模型：论文明确提到了其依赖的开源组件：CLIP-ViT-B/32、Synchformer、T5-base、Qwen2-Audio、Stable Audio Open（及其预训练的DiT模型）。

📌 **核心摘要**

1.  问题：现有的音频/音乐生成模型多为专用模型，仅支持单一输入模态（如文本或视频）和单一输出域（如音效或音乐），限制了灵活性和指令跟随能力。缺乏统一框架和高质量的多模态训练数据是主要障碍。
2.  方法核心：提出AudioX，一个基于扩散Transformer（DiT）的统一“任意到音频”生成框架。其核心是设计了一个轻量级的多模态自适应融合（MAF）模块，该模块通过门控机制和可学习查询，自适应地加权和对齐来自文本、视频和音频编码器的特征，实现有效的多模态条件融合，以指导高保真音频合成。
3.  新意：1) 架构上，提出统一的MAF模块解决多模态干扰问题，实现灵活的条件组合。2) 数据上，构建了IF-caps数据集，包含超过700万样本，通过结构化标注管线提供细粒度的监督信号。3) 评估上，提出了新的指令跟随基准T2A-bench，系统评估模型在类别、数量、顺序和时间戳方面的控制能力。
4.  结果：AudioX在多个基准（如AudioCaps, VGGSound, MusicCaps等）上，在文本到音频（T2A）、视频到音频（V2A）、文本到音乐（T2M）等任务中，达到了与专业模型相当或更优的性能（例如，在VGGSound T2A任务上，IS达到19.58，远超基线）。特别地，在T2A-bench上，其类别准确率（34.20%）、顺序准确率（23.60%）和时间戳准确率（28.20%）均大幅领先于所有基线模型。用户研究也证实了其高质量。
5.  意义：展示了构建统一、多任务、强指令跟随音频生成模型的可行路径，为通用音频创作提供了强大工具。其提出的“跨模态正则化效应”（高质量文本监督能提升所有模态的对齐与生成质量）为多模态学习提供了重要见解。
6.  局限：1) 未公开IF-caps数据集和完整训练细节，可能影响社区复现和扩展。2) 模型总参数量达2.4B，训练需约4k GPU小时，计算成本较高。3) 在“万能”统一的追求下，可能对某些极度专业化或长时序音频生成任务的支持深度有限。

---

### 7. [Syncphony: Synchronized Audio-to-Video Generation with Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-03-syncphony-synchronized-audio-to-video-generation)

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 | #流匹配 #跨模态

👥 **作者与机构**

- 第一作者：Jibin Song (延世大学人工智能系， CineLingo)
- 通讯作者：Jibin Song (sjbpsh1@yonsei.ac.kr)
- 作者列表：Jibin Song（延世大学人工智能系， CineLingo）、Mingi Kwon（延世大学人工智能系， CineLingo）、Jaeseok Jeong（延世大学人工智能系， CineLingo）、Youngjung Uh（延世大学人工智能系， CineLingo）

#

💡 **毒舌点评**

这篇论文的亮点在于它精准地抓住了现有音频到视频生成模型“同步不精”这一痛点，并用一套从训练损失（Motion-aware Loss）到推理引导（Audio Sync Guidance）再到评估标准（CycleSync）的组合拳给出了系统解决方案，技术路线清晰且闭环。但其短板也明显：模型生成的视频分辨率（380×640）和时长（5秒）在当前视频生成领域已不算领先，更像是在受限条件下验证方法的有效性，离生成可用于实际产品的长高清视频还有距离。

#

🔗 **开源详情**

- 代码：论文承诺将发布代码，但未提供具体仓库链接。
- 模型权重：论文承诺将发布训练好的模型，未提供下载链接。
- 数据集：使用了公开数据集AVSync15和TheGreatestHits，并说明了如何获取。
- Demo：未提及在线演示。项目主页提供了补充视频样本。
- 复现材料：在附录中提供了详细的架构细节、训练设置、消融样本和用户研究细节。关键超参数（如`λ=1`, `w=2`, CFG强度）已给出。
- 论文中引用的开源项目：Pyramid Flow（视频生成骨干）、DenseAV（音频编码器）、CLIP（文本编码器）、V-AURA（CycleSync中使用的V2A模型）、librosa（音频峰值检测）。

📌 **核心摘要**

1.  问题：现有的文本/图像到视频生成模型难以精确控制动作的时序。音频到视频（A2V）生成虽然能提供时序线索，但现有模型由于间接的调节机制或有限的时序建模能力，无法实现细粒度的音画同步。
2.  方法：提出了Syncphony，基于预训练的视频骨干（Pyramid Flow），并融入两个核心组件：(1) Motion-aware Loss，在训练时根据真实视频中运动区域的强度来加权损失，使模型更关注与音频事件对应的动态区域；(2) Audio Sync Guidance，在推理时使用一个跳过音频层的“off-sync模型”来引导完整模型，以强化音频信号对运动的影响，同时保持视觉质量。
3.  创新点：与间接映射或简单幅度调制的方法不同，Syncphony通过交叉注意力直接注入音频特征，并针对同步问题设计了训练时的动态损失加权和推理时的专用引导策略。此外，提出了新的同步评估指标CycleSync，通过视频到音频的重建来评估视频中是否包含足够的同步运动线索。
4.  结果：在AVSync15和TheGreatestHits数据集上，Syncphony在同步准确性（CycleSync指标）和视觉质量（FID， FVD）上均优于现有方法。例如，在AVSync15上，Syncphony的CycleSync分数（16.48±1.28）显著高于最强基线AVSyncD（16.38±1.38），并获得了用户研究在同步、图像质量和帧一致性上的全面偏好。在TheGreatestHits上，其CycleSync分数（16.18±1.26）甚至超过了真实视频（15.99±1.5）。
5.  意义：为需要精确音画同步的视频生成任务（如特效制作、游戏开发、音乐可视化）提供了更优的技术方案，并提出了更可靠的同步评估新标准。
6.  局限：生成视频的分辨率（380×640）和时长（5秒）有限；Motion-aware Loss基于整个运动区域的强度加权，尚未显式区分音频相关与无关的运动；CycleSync指标的性能依赖于其依赖的V2A模型的质量。

![Syncphony模型整体架构](icassp-img://sG8dGZMaub/0.png)
（图1：Syncphony模型整体架构。给定初始帧、文本提示和音频波形，模型自回归地生成视频潜变量。扩散变换器分为早期（冻结）和后期（可训练）块。文本特征通过联合自注意力注入所有块，而音频交叉注意力层仅插入后期块。）

---

### 8. [JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization](/audio-paper-digest-blog/posts/2026-05-03-javisdit-joint-audio-video-diffusion-transformer)

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 | #多模态模型 #音视频

👥 **作者与机构**

- 第一作者：Kai Liu（浙江大学，新加坡国立大学）
- 通讯作者：Hao Fei（新加坡国立大学）
- 作者列表：
    - Kai Liu（浙江大学，新加坡国立大学）
    - Wei Li（中国科学技术大学）
    - Lai Chen（浙江大学）
    - Shengqiong Wu（新加坡国立大学）
    - Yanhao Zheng（浙江大学）
    - Jiayi Ji（新加坡国立大学）
    - Fan Zhou（浙江大学）
    - Jiebo Luo（罗切斯特大学）
    - Ziwei Liu（南洋理工大学）
    - Hao Fei（新加坡国立大学，通讯作者）
    - Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

亮点：这是一个非常扎实且完整的系统工作，不仅提出了针对性的模型架构（HiST-Sypo）来攻克“同步”这一核心痛点，还配套发布了更贴近真实世界复杂度的评测基准（JavisBench）和更鲁棒的评估指标（JavisScore），体现了从问题定义、方法设计到评测标准的全链条思考。
短板：计算开销是个绕不过去的问题，生成一个4秒的视频就需要H100跑半分钟（Tab. A1），离实时或高效创作还有距离；此外，模型性能的提升很大程度上依赖于一个更强的视频骨干（OpenSora），这在一定程度上稀释了其架构创新带来的绝对优势。

🔗 **开源详情**

- 代码：论文中提供了项目主页链接 https://javisverse.github.io/JavisDiT-page/ ，并承诺将公开代码。
- 模型权重：承诺将提供预训练模型权重。
- 数据集：提出了JavisBench基准数据集（包含10,140个样本），并承诺将公开。训练所用数据（MMTrail， TAVGBench）为现有公开数据集。
- Demo：论文中未提及在线演示。
- 复现材料：在论文正文和附录中提供了非常详细的模型架构配置（C.1）、三阶段训练策略细节（C.1， 表A2）、ST-Prior估计器实现（C.2）、数据构建流程（D.3）和评估指标实现（D.4），为复现奠定了坚实基础。
- 引用的开源项目：OpenSora（视频编码器-解码器， DiT初始化）， AudioLDM2（音频编码器-解码器， 音频预训练）， ImageBind（文本编码器， ST-Prior估计器， JavisScore计算）， T5（文本编码器）， Qwen系列模型（用于数据标注）， FunASR（语音过滤）， PySceneDetect， UniMatch， DBNet等（数据过滤）。

📌 **核心摘要**

1.  要解决什么问题：联合音频视频生成（JAVG）中，现有方法难以同时保证生成内容的高质量以及音频与视频之间精细的时空同步。
2.  方法核心是什么：提出JavisDiT模型。它采用基于扩散Transformer（DiT）的统一架构，并创新性地设计了分层时空同步先验估计器（HiST-Sypo Estimator）。该估计器从文本中提取全局粗粒度语义先验和细粒度的时空先验（指定事件发生的地点和时间），用于引导音视频在空间和时间维度上的对齐生成。
3.  与已有方法相比新在哪里：a) 架构上，整合了专门为音视频设计的ST-SelfAttn、Fine-Grained ST-CrossAttn和MM-BiCrossAttn模块。b) 核心创新是提出了HiST-Sypo机制，实现了从文本到细粒度时空条件的隐式映射，相比之前简单的参数共享或表征对齐更精细。c) 提出了首个专注于多事件同步评估的大规模、多样化基准数据集JavisBench（10,140个样本）和更鲁棒的同步性度量JavisScore。
4.  主要实验结果如何：
    - 在自建的JavisBench基准上（表1），JavisDiT在音视频质量和同步性指标上全面超越基线方法。例如，其JavisScore达到0.154，超过了最强级联方法FoleyCrafter（0.151）。
    - 在已有基准Landscape和AIST++上（表2），JavisDiT也达到了最优性能，例如在Landscape上FVD为94.2，优于MM-LDM（105.0）。
    - 消融实验（表3， 表4）验证了HiST-Sypo模块和ST-Prior注入方式的有效性。
    - 人类评估（图8）显示，在音频质量和音视频对齐方面，JavisDiT优于对比方法UniVerse-1。
5.  实际意义是什么：为电影制作、短视频创作等需要高质量同步音视频内容的应用提供了更强大的生成工具。新基准和指标为未来JAVG研究树立了更全面、更挑战性的评测标准。
6.  主要局限性是什么：a) 计算成本高，推理速度慢（附录表A1）。 b) 视频生成质量受所用骨干网络（OpenSora）性能制约，与最强视频生成模型（如Wan-2.1）仍有差距。c) JavisScore的准确性（论文称约75%）仍有提升空间。

---

### 9. [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-03-token-based-audio-inpainting-via-discrete)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #预训练 #音频大模型

👥 **作者与机构**

- 第一作者：Tali Dror (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)， Iftach Shoham (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center)（论文注明两人贡献相等）
- 通讯作者：Eliya Nachmani (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
- 作者列表：Tali Dror（Ben-Gurion University of the Negev, School of Electrical and Computer Engineering）、Iftach Shoham（Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center）、Moshe Buchris（Ben-Gurion University of the Negev, School of Electrical and Computer Engineering）、Oren Gal（University of Haifa）、Haim Permuter（Ben-Gurion University of the Negev, School of Electrical and Computer Engineering）、Gilad Katz（Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center）、Eliya Nachmani（Ben-Gurion University of the Negev, School of Electrical and Computer Engineering）

💡 **毒舌点评**

本文首次将离散扩散模型与预训练音频令牌化器结合用于修复任务，在长间隙（>=150ms）音频修复上展示了系统性优势，这是一个扎实的工程创新。但方法的天花板很大程度上受限于WavTokenizer的性能与24kHz带宽，且其“令牌空间生成-解码为波形”的路径，本质上回避了直接建模复杂音频波形或频谱相位这一更核心的难题，更像是为离散扩散找到了一个“好用”的应用场景，而非对扩散模型本身的突破。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/iftachShoham/AIDD`。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：使用公开基准数据集MusicNet和MAESTRO，论文未提及提供新数据集。
- Demo：未提及在线演示链接。
- 复现材料：在附录B“REPRODUCIBILITY STATEMENT”中详细列出了所有关键超参数（见Table 8），并说明了训练硬件（单张NVIDIA A6000 GPU）和训练时间，提供了充分的复现信息。
- 论文中引用的开源项目：主要依赖WavTokenizer (Ji et al., 2024) 和 UniCodec (Jiang et al., 2025) 作为音频令牌化器；使用DiT (Peebles & Xie, 2023) 作为扩散模型架构基础；评估指标参考了PEMO-Q和PEA-Q的实现。

📌 **核心摘要**

1.  问题：传统及基于连续扩散的音频修复方法在处理长音频间隙（如超过300ms）时，性能会因难以捕捉长程依赖和保持语义一致性而下降。
2.  方法核心：提出AIDD，首次将离散扩散模型应用于由预训练音频令牌化器（WavTokenizer）转换得到的离散令牌序列上，将音频修复建模为序列补全任务。方法引入了两项关键技术：基于导数的正则化损失，以强制生成令牌在时间上平滑；以及基于跨度的吸收式掩蔽策略，在扩散前向过程中结构化损坏令牌。
3.  与已有方法相比新在哪里：区别于在连续域（波形、频谱图）进行扩散的方法，AIDD在离散令牌空间中操作，避免了直接建模原始波形或处理相位问题的困难，并首次将离散扩散框架用于音频修复任务。
4.  主要实验结果：在MusicNet和MAESTRO数据集上，针对150ms至750ms的间隙进行评估。对于大于150ms的间隙，AIDD在FAD、LSD和ODG指标上持续优于LPC、A-SPAIN-L、CQT-Diff+、GACELA和bin2bin等基线。例如，在MusicNet数据集上，针对300ms间隙，AIDD的FAD（3.549）相比强基线CQT-Diff+（4.652）降低了约24%。主观MOS测试也显示AIDD优于GACELA和CQT-Diff+。
    *   表1（MusicNet数据集对比）
    | 方法 | 150ms | 200ms | 250ms | 300ms |
    |---|---|---|---|---|
    | | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ |
    | CQT-Diff+ | 1.525 0.164 -3.559 | 2.619 0.218 -3.651 | 3.202 0.272 -3.891 | 4.652 0.324 -3.711 |
    | AIDD | 1.866 0.162 -3.215 | 2.391 0.209 -3.250 | 2.438 0.260 -3.274 | 3.549 0.297 -3.284 |
    *   表2（MAESTRO数据集对比，ODG-PEA-Q）
    | 方法 | 375ms (↑) | 750ms (↑) |
    |---|---|---|
    | GACELA | -3.232 ± 0.232 | -3.318 ± 0.202 |
    | bin2bin-MIDI | -2.800 ± 0.491 | -2.976 ± 0.456 |
    | AIDD | -2.303 ± 0.692 | -2.596 ± 1.300 |
5.  实际意义：推进了音乐和音频修复领域的研究，为利用离散表示进行音频生成提供了新范式，并可能扩展到语言等其他序列生成任务。
6.  主要局限性：修复性能受限于所用音频令牌化器的质量与带宽上限（本文WavTokenizer为24kHz）。模型在训练时采用“先令牌化后掩蔽”，而推理时是“先掩蔽后令牌化”，存在训练-推理不匹配问题（尽管消融实验显示影响较小）。比较时存在连续域与离散域的跨域差异。

---

### 10. [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-03-aurelius-relation-aware-text-to-audio-generation)

✅ **7.5/10** | 前25% | #音频生成 | #流匹配 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Yuhang He（微软研究院）
- 通讯作者：yuhanghe@microsoft.com（微软研究院）
- 作者列表：Yuhang He（微软研究院）、He Liang（未说明）、Yash Jain（未说明）、Andrew Markham（牛津大学计算机科学系）、Vibhav Vineet（微软研究院）

#

💡 **毒舌点评**

亮点在于其系统性地构建了首个大规模、结构化的关系感知TTA生成基准，数据集设计（事件与关系解耦、层次化）和全面的基准测试为后续研究提供了清晰的标尺和出发点。但短板也十分明显：论文声称“Aurelius”是一个框架，但其核心生成技术（AudioRelGen）实则是“LLM规划+现有TTA模型分段合成+拼接”的智能体流水线，缺乏端到端建模事件与关系动态的原生架构创新，更像是一份详尽的“问题分析报告”而非一个完整的“解决方案”。

#

🔗 **开源详情**

*   代码：论文提供了GitHub代码仓库链接（https://github.com/yuhanghe01/Aurelius）。
*   模型权重：未提及公开本文提出的任何新模型权重（AudioRelGen本身不是一个训练好的模型）。
*   数据集：论文中发布了AudioEventSet和AudioRelSet的构建方法，但未提供数据集本身的下载链接，也未明确说明是否会开源。
*   Demo：提供了项目主页链接（https://yuhanghe01.github.io/Aurelius-Proj/），可能包含演示。
*   复现材料：论文详细说明了训练数据集的构建方法（36000对/100小时）、评估指标的实现细节（PANNs微调）、以及基准测试中各模型的具体推理设置（附录表III）。
*   依赖的开源项目：使用了Qwen系列大语言模型作为智能体，以及TangoFlux、AudioGen等现有TTA模型作为生成器。
*   总体而言：论文提供了充分的复现指引和代码框架，但最核心的资产（大规模数据集）的公开获取方式未在文中明确说明。

📌 **核心摘要**

1.  问题：现有文本到音频生成模型在生成涉及多个音频事件及其复杂关系（如时序、空间、逻辑）的场景时表现极差，根本原因在于缺乏大规模、高质量的关系感知音频数据集和系统性的评估基准。
2.  方法核心：提出Aurelius框架，其核心是构建并发布了两个大规模、结构化的数据集：AudioEventSet（110个高质量、层次化的音频事件）和AudioRelSet（100种音频事件间的关系）。基于此，设计了一种可扩展的文本-音频对生成策略，并引入了一个多阶段关系感知（MSR）评估协议。
3.  新在何处：1) 数据集规模与质量：相比之前工作，音频事件和关系种类数量级提升，且数据精心策划，层次化结构便于不同粒度的研究。2) 评估体系：首次系统性地评估现有模型在多种关系类型和复杂度（关系“元数”）下的性能。3) 分析深度：全面测试了9个主流模型，并探索了从头训练和微调两种扩展关系感知能力的路径。
4.  主要实验结果：实验表明，现有最强的通用TTA模型（如TangoFlux）在关系感知任务上表现糟糕，其多事件生成准确率仅12%，关系保真度仅3%（见Table 4）。在MSR综合指标mAMSR上，所有模型在零样本设置下均低于2.22%（见Table 2）。在Aurelius数据集上微调TangoFlux后，其mAMSR从1.77%提升至5.58%（见Table 3），性能提升显著但绝对值仍很低。
5.  实际意义：为关系感知音频生成领域建立了标准基准、数据集和评估方法，明确指出了当前技术的不足，并为未来研究指明了方向——即需要开发能够原生理解并建模事件关系的模型架构。
6.  主要局限性：本文提出的生成方法（AudioRelGen）依赖于外部大语言模型进行任务分解，并使用现有TTA模型进行分段生成再拼接，并非一个全新的、端到端的生成模型。此外，其发布的数据集未提供公开下载地址。

#

---

### 11. [UALM: Unified Audio Language Model for Understanding, Generation and Reasoning](/audio-paper-digest-blog/posts/2026-05-03-ualm-unified-audio-language-model-for)

✅ **7.5/10** | 前25% | #音频生成 | #自回归模型 | #统一音频模型 #音频大模型

👥 **作者与机构**

- 第一作者：Jinchuan Tian (卡内基梅隆大学 / NVIDIA)
- 通讯作者：未说明（从贡献标注和邮箱看，Sang-gil Lee， Zhifeng Kong， Wei Ping 均为NVIDIA且标有*，可视为共同贡献者/联络人）
- 作者列表：
  Jinchuan Tian (CMU1, NVIDIA1)， Sang-gil Lee (NVIDIA2)， Zhifeng Kong (NVIDIA2)， Sreyan Ghosh (UMD3, NVIDIA2)， Arushi Goel (NVIDIA2)， Chao-Han Huck Yang (NVIDIA2)， Wenliang Dai (NVIDIA2)， Zihan Liu (NVIDIA2)， Hanrong Ye (NVIDIA2)， Shinji Watanabe (CMU1)， Mohammad Shoeybi (NVIDIA2)， Bryan Catanzaro (NVIDIA2)， Rafael Valle (NVIDIA2)， Wei Ping (NVIDIA2)

💡 **毒舌点评**

本文的亮点在于系统性地展示了如何用一个统一的自回归语言模型，在音频理解、生成和多模态推理这三个传统上割裂的任务上都达到或超越专用模型的性能，并首次提出了音频生成的“富描述”推理范式。短板则在于，“统一”的代价是架构和训练流程的复杂性，且论文对“多模态推理”（如自我批判）的实际效果和应用边界探讨较浅，更像一个初步的、令人鼓舞的工程演示。

📌 **核心摘要**

1.  解决的问题：当前音频AI领域将音频理解和文本到音频生成视为独立任务，且建模范式不同（理解用自回归LLM，生成用扩散模型），音频领域的多模态生成推理更是几乎空白。
2.  方法核心：提出统一音频语言模型（UALM），以解码器Transformer（初始化自Qwen2.5）为核心。通过连续编码器处理音频输入，离散音频编解码器（X-codec + Delay模式）生成音频输出，并引入增强VAE提升输出质量。通过精心设计的数据混合、对齐阶段和训练配方，将音频理解、生成和文本推理统一训练。
3.  创新点：
    *   UALM-Gen：证明了仅通过预测音频token的自回归语言模型，在采用分类器自由指导（CFG）、直接偏好优化（DPO）并结合大规模数据（30M样本）后，音频生成质量可与前沿扩散模型相媲美。
    *   统一预训练：首次在单个模型中成功平衡音频理解、生成和文本推理能力，且对文本能力的保持优于先前统一模型。
    *   UALM-Reason：引入“富描述”（Rich Caption）作为中间蓝图，并设计了“丰富化”、“对话”和“自我反思”三种多模态推理模式，首次在音频研究中展示了跨模态的生成推理链。
4.  主要实验结果：
    *   音频生成（见表1）：UALM-Gen和UALM在SongDescriber和AudioCaps测试集上的FD、CLAP等指标上与或优于ETTA、Stable Audio Open等SOTA扩散模型。例如，在AudioCaps上，UALM的FD为65.87（越低越好），CLAP为0.62。
    *   音频理解（见表2）：UALM在MMAU基准上的平均准确率达到74.1%，匹配了Audio Flamingo 3 (72.3%) 和 Qwen2.5-Omni (71.0%) 等最先进模型。
    *   文本能力（见表3）：UALM在MMLU、GSM8K、HumanEval等文本推理任务上仅比Qwen2.5-7B-Instruct有微小下降（平均81.6% vs 83.6%），保持了强大的语言能力。
    *   推理效果（见表4）：主观评估显示，经过推理后训练的UALM-Reason在富描述、对话和自我反思场景下的得分均高于基线UALM。
5.  实际意义：为构建能同时听、说、想、创作的通用音频智能体提供了首个可行的技术路径，在音乐创作、音效设计、多模态交互等领域有广泛应用前景。
6.  主要局限性：统一模型的训练配方复杂；“富描述”推理依赖合成数据，可能存在幻觉；缺乏对复杂、长时序生成任务的全面评估；未探讨实时或流式推理场景。

---

### 12. [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensional Rewards for Video-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-prismaudio-decomposed-chain-of-thought-and-multi)

✅ **7.5/10** | 前25% | #音频生成 | #强化学习 | #流匹配 #多模态模型

👥 **作者与机构**

-   第一作者：Huadai Liu（1. 香港科技大学；2. 阿里巴巴通义团队）
-   通讯作者：Wei Xue（香港科技大学）
-   作者列表：Huadai Liu（香港科技大学，阿里巴巴通义团队）、Kaicheng Luo（阿里巴巴通义团队）、Wen Wang（阿里巴巴通义团队）、Qian Chen（阿里巴巴通义团队）、Peiwen Sun（香港中文大学）、Rongjie Huang（香港中文大学）、Xiangang Li（阿里巴巴通义团队）、Jieping Ye（阿里巴巴通义团队）、Wei Xue*（香港科技大学）

💡 **毒舌点评**

本文最大的亮点在于将强化学习“庖丁解牛”般地引入视频转音频生成，通过将生成目标拆解为语义、时序、美学、空间四个独立的“思考链”模块并配以专门奖励，有效解决了传统单一损失函数导致的目标混战问题，并在多个感知维度上取得了SOTA性能。短板在于，其强大的“厨艺”（RL框架）依赖于“买来的食材”（VideoPrism, T5-Gemma等先进组件）的预先组装，且训练成本不低（需24张A800 GPU训练2-3周），开源的缺席也暂时限制了社区的即时跟进与验证。

🔗 **开源详情**

-   代码：论文中未提及代码链接。在结论和再现性声明中承诺将公开完整代码、训练脚本和配置文件。
-   模型权重：未提及当前可获取的模型权重。承诺发布所有预训练检查点。
-   数据集：明确表示将公开AudioCanvas基准数据集。同时承诺发布用于VideoLLaMA2微调的CoT训练数据。
-   Demo：未提及在线演示。
-   复现材料：提供了详细的实现细节（附录D），包括硬件需求、训练阶段、关键超参数（学习率、batch size、KL权重等）、数据构造流程的提示词。提供了CoT训练数据生成流程。
-   论文中引用的开源项目：明确依赖或对比了以下开源项目/模型：VideoLLaMA2, Gemini 2.5 Pro, VideoPrism, T5-Gemma, MS-CLAP, Synchformer, Meta Audiobox Aesthetics, StereoCRW, Stable Audio Tools (用于VAE基础), Flow-GRPO。
-   开源计划总结：论文有明确的开源承诺（代码、模型、数据），但当前版本未提供可立即使用的资源。

📌 **核心摘要**

1.  问题：视频转音频（V2A）生成需要同时满足语义一致性、时间同步性、美学质量和空间准确性四个维度的感知要求，但现有方法通常使用单一损失函数优化所有目标，导致目标纠缠和性能妥协，且缺乏与人类偏好的对齐。
2.  方法核心：本文提出PrismAudio，首个将强化学习与分解的链式思维（CoT）规划相结合的V2A框架。方法包括：(a) 构建一个多模态扩散Transformer音频基础模型；(b) 将V2A推理分解为四个专门的CoT模块（语义、时间、美学、空间），并使用视频语言模型生成结构化推理文本；(c) 设计四个对应的奖励函数，并采用创新的Fast-GRPO算法进行多维度强化学习后训练，以高效对齐人类偏好。
3.  创新点：与已有方法相比，主要新在：(1) 首次在V2A中实施分解式CoT与多维度RL优化，直接解决目标纠缠问题；(2) 提出Fast-GRPO，通过混合ODE-SDE随机窗口采样，在保证生成质量的同时大幅降低RL训练开销；(3) 构建了更严格、覆盖更多复杂场景（含501个多事件样本）的AudioCanvas基准测试。
4.  实验结果：在域内（VGGSound）和域外（AudioCanvas）测试集上，PrismAudio在所有四个感知维度上均达到最优。例如，在AudioCanvas上，其语义对齐（CLAP: 0.52 vs. 基线0.42）和时间同步（DeSync: 0.36 vs. 基线0.44）显著优于基线，且在多事件复杂场景中优势更加明显（相对基线的DeSync误差降低近20%）。消融实验证明，分解式CoT优于单体式CoT，多维度奖励优于单维度奖励（后者会导致严重的目标失衡）。
5.  实际意义：该工作为可控、可解释的高质量V2A生成提供了新的范式，其分解优化思想对其他多目标生成任务（如视频生成、音乐生成）具有借鉴意义，并为社区提供了更具挑战性的评测标准（AudioCanvas）。
6.  主要局限性：目前未开源代码和模型权重，复现依赖未来发布；基础模型构建依赖多个外部先进模型（VideoPrism, T5-Gemma, Gemini 2.5 Pro），可能增加独立复现的复杂性；训练资源要求较高。

---

### 13. [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-03-smartdj-declarative-audio-editing-with-audio)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #空间音频 #音频大模型

👥 **作者与机构**

- 第一作者：Zitong Lan (宾夕法尼亚大学)
- 通讯作者：未说明
- 作者列表：Zitong Lan (宾夕法尼亚大学), Yiduo Hao (宾夕法尼亚大学), Mingmin Zhao (宾夕法尼亚大学)

💡 **毒舌点评**

亮点：架构设计巧妙，将“编辑意图理解”与“音频信号操作”解耦为ALM和LDM两个模块，使得用户指令交互（声明式）和系统执行变得清晰可扩展，并首次系统性地解决了立体声音频的声明式编辑问题。
短板：其核心生成模块LDM本身并非全新贡献，且整个系统的性能高度依赖于数据合成管道的质量与多样性（该管道又依赖GPT-4o），可能限制了其在更复杂、更真实声景中的泛化能力。

🔗 **开源详情**

- 代码：论文中提及将开源（“Code, pretrained models, and the synthesized dataset will be released upon acceptance”），但未提供当前链接。
- 模型权重：未提及当前提供，承诺接收后开源。
- 数据集：未提及当前提供，承诺接收后开源其合成的声明式编辑数据集和单步编辑数据集。
- Demo：未提及。
- 复现材料：论文正文及附录提供了非常详细的架构描述、训练细节、超参数配置、数据合成流程和评估方法，复现基础良好。
- 论文中引用的开源项目：CLAP, FLAN-T5, Audio Flamingo 2 (AF2), Stable-Audio-Open, PyRoomAcoustics, Diffusion Transformer (DiT) 相关技术。
- 论文中提及开源计划：是。

📌 **核心摘要**

本文针对现有音频编辑方法依赖模板化指令和仅处理单声道音频的局限，提出了首个声明式立体声音频编辑框架SmartDJ。核心方法是利用一个音频语言模型（ALM）将用户高层的自然语言指令（如“让它听起来像晴朗的森林”）分解为一系列原子编辑操作序列（如移除雨声、添加树叶沙沙声），然后由一个专门训练的潜在扩散模型（LDM）依次执行这些操作，生成最终的立体声音频。与已知方法相比，SmartDJ首次支持声明式指令和立体声空间编辑，将编辑过程从过程式（用户指定“如何做”）转变为声明式（用户描述“想要什么”）。主要实验结果显示，在声明式编辑任务上，SmartDJ的FAD（1.52）远优于最强基线（3.71）；在单步编辑任务（如添加、移除、改变方向）的多数指标上也取得最优。消融实验证明了ALM模块的关键作用。实际意义在于为VR/AR、游戏、影视制作等沉浸式音频场景提供了更智能、直观的编辑工具。主要局限是ALM与LDM分开训练，非端到端联合优化；且合成训练数据依赖外部LLM（GPT-4o），其生成的指令与操作是否覆盖真实用户复杂意图有待验证。

---

### 14. [TangoFlux: Super Fast and Faithful Text to Audio Generation with Flow Matching and Clap-Ranked Preference Optimization](/audio-paper-digest-blog/posts/2026-05-03-tangoflux-super-fast-and-faithful-text-to-audio)

✅ **7.5/10** | 前25% | #音频生成 | #流匹配 | #偏好优化

👥 **作者与机构**

- 第一作者：Chia-Yu Hung（南洋理工大学，NTU）
- 通讯作者：Navonil Majumder（南洋理工大学，NTU），Soujanya Poria（南洋理工大学，NTU）（根据邮箱判断，两位作者的邮箱格式均为通讯作者格式，且论文中常将他们列为共同负责人）
- 作者列表：
  - Chia-Yu Hung（南洋理工大学，NTU）
  - Navonil Majumder（南洋理工大学，NTU）
  - Zhifeng Kong（NVIDIA）
  - Ambuj Mehrish（威尼斯大学，Ca’ Foscari University of Venice）
  - Amir Ali Bagherzadeh（Lambda Labs）
  - Chuan Li（Lambda Labs）
  - Rafael Valle（NVIDIA）
  - Bryan Catanzaro（NVIDIA）
  - Soujanya Poria（南洋理工大学，NTU）

💡 **毒舌点评**

亮点：本文核心贡献CRPO巧妙地利用CLAP作为代理奖励模型，通过在线迭代生成偏好数据来对齐流匹配模型，这为缺乏高质量人类标注数据的音频生成领域提供了一条实用且高效的自优化路径。
短板：过度依赖CLAP作为“裁判”存在风险——如果CLAP本身的偏好与复杂人类感知存在偏差，模型可能会优化出“高CLAP分但听感怪异”的音频，论文对此缺乏更深入的分析和约束。

🔗 **开源详情**

- 代码：论文中未提及具体代码仓库链接，但承诺将在论文接受后公开代码（“We will release the code and model weights”）。
- 模型权重：未提及已公开的模型权重下载链接，但论文承诺将公开。
- 数据集：使用的所有数据集（WavCaps, AudioCaps）均为公开数据集。论文中提供了数据集的处理细节。
- Demo：提供了模型生成的音频样例展示页面：https://tangoflux.github.io/
- 复现材料：提供了详细的复现信息，包括：完整的模型架构描述、所有训练与评估的超参数（附录A.5, A.6）、使用的评估工具和指标（附录A.10）、人工评估的具体流程和提示（附录A.12）。
- 论文中引用的开源项目/模型：
    - 基础模型/架构：Stable Audio Open (VAE), FLUX (架构灵感), Diffusion Transformer (DiT), Multimodal Diffusion Transformer (MMDiT).
    - 文本编码器：FLAN-T5.
    - 评估工具：stable-audio-metrics, AudioLDM evaluation toolkit, kadtk.
    - 数据集：WavCaps, AudioCaps.
    - 对齐基线：BATON, Audio-Alpaca.
- 总结：论文为复现提供了“蓝图”级别的文档，但核心的代码和预训练权重在论文所述时间点尚未发布。其依赖的组件均为公开资源。

📌 **核心摘要**

1. 问题：文本到音频（TTA）生成模型在内容对齐（faithfulness）上存在挑战，尤其难以处理复杂、多事件的提示。与LLM不同，TTA领域缺乏现成的奖励模型或金标准数据来构建对齐所需的偏好数据对。
2. 方法核心：提出CLAP-Ranked Preference Optimization（CRPO）。这是一个迭代框架：(1) 使用当前模型为一批提示生成多个音频样本；(2) 利用CLAP模型计算每个音频与文本的相似度，从而构建“赢家”和“输家”音频对；(3) 在构建的偏好数据上，使用改进的损失函数（LCRPO）对模型进行偏好优化。该过程循环进行，使模型持续自我改进。
3. 创新点：(1) 提出CRPO框架，首次将CLAP作为TTA对齐的代理奖励模型，并实现在线迭代数据生成与优化；(2) 设计了针对流匹配模型的改进型DPO损失（LCRPO），通过额外添加流匹配损失作为正则项，防止赢家样本的损失上升，稳定训练；(3) 构建了基于Transformer的高效模型TANGOFLUX（515M参数），采用流匹配目标，支持最长30秒音频生成。
4. 实验结果：TANGOFLUX在AudioCaps测试集的多个客观指标（如CLAPscore, FD_openl3, KAD）上超越了包括Tango 2, Stable Audio Open, AudioX在内的多个强基线。在针对复杂提示的人工评估中，TANGOFLUX在总体质量（OVL）和文本相关性（REL）上均获得最高z分数和Elo分数。消融实验证明，使用CRPO生成的动态偏好数据集优于静态数据集（Audio-Alpaca, BATON），且在线迭代优于离线训练。
5. 实际意义：实现了更快（3.7秒生成30秒音频）、更高质量且与文本描述更对齐的音频生成，且完全基于开源数据训练。为缺乏人类反馈的模态（如音频）提供了一种可行的自动化对齐方案。
6. 局限性：CLAP作为奖励模型可能存在偏见或与人类判断不完全一致；人工评估的提示虽然复杂，但数量（50个）相对有限；模型性能可能受限于CLAP和训练数据的质量与多样性。

---

### 15. [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis with Acoustic Transfer](/audio-paper-digest-blog/posts/2026-05-03-ac-foley-reference-audio-guided-video-to-audio)

✅ **7.0/10** | 前25% | #音频生成 | #流匹配 | #多模态模型 #音视频

👥 **作者与机构**

- 第一作者：Pengjun Fang（香港科技大学，The Hong Kong University of Science and Technology）
- 通讯作者：未明确标注（论文中Harry Yang名字后有上标B，可能为通讯作者）
- 作者列表：
    - Pengjun Fang（香港科技大学）
    - Yingqing He（香港科技大学）
    - Yazhou Xing（香港科技大学）
    - Qifeng Chen（香港科技大学）
    - Ser-Nam Lim（佛罗里达大学，University of Central Florida）
    - Harry Yang（香港科技大学）

💡 **毒舌点评**

亮点：提出用参考音频直接控制生成音色，绕开了文本描述的模糊性，且两阶段训练策略（重叠-非重叠）设计巧妙，有效防止了模型“复制粘贴”条件音频。短板：在处理多声源混合的复杂场景时性能有限，且论文未开源代码和权重，复现门槛高，对于追求快速验证的读者不够友好。

🔗 **开源详情**

*   代码：论文中未提及代码链接。作者声明未来发布时将使用Apache 2.0许可证，但目前未提供。
*   模型权重：论文中未提及公开模型权重。
*   数据集：使用了公开数据集（VGGSound， AudioCaps2.0， WavCaps），论文附录F给出了各数据集的许可证信息。
*   Demo：论文中未提及在线演示。
*   复现材料：论文在附录A、B中详细给出了训练细节、优化器设置、���络架构参数（如Transformer块数、隐藏维度、音频采样率等）、硬件环境和训练时长，为复现提供了较好的文本指导。
*   论文中引用的开源项目：使用了预训练的CLIP、Synchformer、BigVGAN声码器、VAE（具体训练细节未详述）、ImageBind（用于数据筛选和评估）等开源模型或工具。

📌 **核心摘要**

本文针对现有视频到音频（V2A）生成方法依赖文本提示导致的精细控制不足问题，提出了AC-Foley。该模型创新性地引入参考音频作为条件信号，通过多模态联合训练和两阶段训练策略（先学习重叠片段的声学特征，再适应非重叠片段），使生成的音频既能与视频事件同步，又能精确继承参考音频的音色和声学特性。相较于现有方法，AC-Foley在音效合成的精细度（如不同材质的脚步声）、音色迁移（如用羊叫声控制狮子视频）和零样本生成（如为持消音器的枪生成特定音效）方面实现了突破。实验表明，在多个基准测试中，AC-Foley在音频质量（Fréchet Distance降低20%）、声学保真度（Mel Cepstral Distortion降低22%）和语义对齐等指标上均优于现有SOTA方法，即使在不使用音频条件时性能也保持竞争力。其主要局限性在于对多声源复杂音频环境的处理能力不足。该工作为创意音效设计提供了新的控制范式。

主要实验结果（关键数据）：

*   在VGGSound测试集上与SOTA方法的定量对比（部分指标）

| 方法 | FD_PaSST ↓ | KLD_PaSST ↓ | IB ↑ | DeSync ↓ | MCD ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| （有音频条件） | | | | | |
| Video-Foley | 613.05 | 4.16 | 3.6 | 1.214 | 17.41 |
| MMAudio + Clap | 70.80 | 1.17 | 35.7 | 0.431 | 14.63 |
| AC-Foley (ours) | 56.00 | 0.84 | 37.1 | 0.465 | 11.37 |
| （无音频条件） | | | | | |
| MMAudio-L-V2 | 69.25 | 1.12 | 37.8 | 0.392 | 14.11 |
| AC-Foley (w/o. audio) | 64.90 | 1.17 | 36.6 | 0.410 | 14.59 |
| Frieren | 110.61 | 2.46 | 25.5 | 0.856 | 14.98 |
| HunyuanVideo-Foley | 85.19 | 1.52 | 34.7 | 0.492 | 15.12 |

*   音色迁移实验（Greatest Hits数据集）

| 方法 | Onset Acc. ↑ | Onset AP ↑ | MCD ↓ |
| :--- | :--- | :--- | :--- |
| CondFoley | 0.3906 | 0.6611 | 4.18 |
| AC-Foley (ours) | 0.3948 | 0.6629 | 3.39 |

![图1：AC-Foley的三种典型应用示例](icassp-img://URPXhnWdBF/0.png)
图1展示了AC-Foley的三大应用场景：(a) 精细音效合成（基于不同参考狗叫声生成对应视频的音频）；(b) 音色迁移（将羊或猫的音色转移到狮子视频上）；(c) 零样本生成（结合文本提示和参考音频生成消音器枪声）。

---

