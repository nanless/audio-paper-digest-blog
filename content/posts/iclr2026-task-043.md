---
title: "ICLR 2026 - 音频生成 论文列表"
date: 2026-05-04
draft: false
tags: ["音频生成"]
categories: [iclr-2026]
description: "共 12 篇 ICLR 2026 音频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频生成

共 **12** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SCRAPL: Scattering Transform with Random Paths for Machine L](/audio-paper-digest-blog/posts/2026-05-04-scrapl-scattering-transform-with-random-paths-for) | 8.5分 | 前25% |
| 🥈 | [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-continuous-audio-language-models) | 8.0分 | 前25% |
| 🥉 | [UALM: Unified Audio Language Model for Understanding, Genera](/audio-paper-digest-blog/posts/2026-05-04-ualm-unified-audio-language-model-for) | 8.0分 | 前25% |
| 4. | [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis wi](/audio-paper-digest-blog/posts/2026-05-04-ac-foley-reference-audio-guided-video-to-audio) | 8.0分 | 前25% |
| 5. | [TangoFlux: Super Fast and Faithful Text to Audio Generation ](/audio-paper-digest-blog/posts/2026-05-04-tangoflux-super-fast-and-faithful-text-to-audio) | 8.0分 | 前25% |
| 6. | [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-audiox-a-unified-framework-for-anything-to-audio) | 8.0分 | 前25% |
| 7. | [Syncphony: Synchronized Audio-to-Video Generation with Diffu](/audio-paper-digest-blog/posts/2026-05-04-syncphony-synchronized-audio-to-video-generation) | 8.0分 | 前25% |
| 8. | [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution](/audio-paper-digest-blog/posts/2026-05-04-flow2gan-hybrid-flow-matching-and-gan-with-multi) | 7.5分 | 前25% |
| 9. | [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-04-token-based-audio-inpainting-via-discrete) | 7.5分 | 前25% |
| 10. | [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensiona](/audio-paper-digest-blog/posts/2026-05-04-prismaudio-decomposed-chain-of-thought-and-multi) | 7.5分 | 前25% |
| 11. | [DiffSDA: Unsupervised Diffusion Sequential Disentanglement A](/audio-paper-digest-blog/posts/2026-05-04-diffsda-unsupervised-diffusion-sequential) | 7.5分 | 前25% |
| 12. | [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-04-aurelius-relation-aware-text-to-audio-generation) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [SCRAPL: Scattering Transform with Random Paths for Machine Learning](/audio-paper-digest-blog/posts/2026-05-04-scrapl-scattering-transform-with-random-paths-for)

🔥 **8.5/10** | 前25% | #音频生成 | #信号处理 | #时频分析 #优化算法

👥 **作者与机构**

- 第一作者：Christopher Mitcheltree (Queen Mary University of London, Centre for Digital Music)
- 通讯作者：未说明（论文中提供了所有作者邮箱，未明确指定通讯作者）
- 作者列表：
    - Christopher Mitcheltree (Queen Mary University of London, Centre for Digital Music)
    - Vincent Lostanlen (Nantes Université, École Centrale Nantes, CNRS, LS2N, UMR 6004)
    - Emmanouil Benetos (Queen Mary University of London, Centre for Digital Music)
    - Mathieu Lagrange (Nantes Université, École Centrale Nantes, CNRS, LS2N, UMR 6004)

💡 **毒舌点评**

亮点：该工作的核心思想——通过随机采样散射变换路径来近似完整梯度——巧妙地解决了散射变换作为损失函数时计算成本过高的“阿喀琉斯之踵”，使其有望成为可微音频处理中的实用组件。短板：θ-重要性采样的启发式方法虽然有效，但其理论动机（试图使频谱损失更接近参数损失）略显脆弱，在更复杂的合成器或任务上泛化性有待验证。

🔗 **开源详情**

- 代码：提供了代码仓库链接（`https://christhetree.github.io/scrapl/`），并声明将SCRAPL作为Python包发布。
- 模型权重：未提及公开预训练模型权重。
- 数据集：TR-808数据集来自第三方（`https://samplesfrommars.com/products/tr-808-samples/`）。合成数据在论文中描述，未说明是否单独公开。
- Demo：提供了配套网站，包含音频样本试听。
- 复现材料：附录E提供了所有三个实验的完整超参数表格（表10-12），包括数据、网络结构、优化器设置等。复现声明中明确指出提供了源代码、配置文件、指令和音频样本。
- 引用的开源项目：论文中提到了使用的开源工具：
    - `nnAudio` (Cheuk et al., 2020)：用于计算CQT。
    - `auraloss` (Steinmetz & Reiss, 2020)：提供了MSS Random损失。
    - `pytorch-hessian-eigenthings`：用于计算海森矩阵特征值（θ-IS方法）。
    - DDSP框架的实现基于Engel et al. (2020) 和 Shier et al. (2024) 的工作。

📌 **核心摘要**

1. 问题：小波散射变换（ST）的距离度量在感知质量评估中效果很好，但因其路径数量巨大，作为可微损失函数用于随机梯度下降时计算开销极高，严重限制了其在神经网络训练中的应用。
2. 方法核心：提出SCRAPL，通过随机均匀采样散射变换的单个路径来近似完整ST损失的梯度，并设计了路径自适应矩估计（P-Adam） 和路径随机平均梯度加速法（P-SAGA） 来稳定训练过程。此外，还提出θ-重要性采样初始化启发式，根据合成器参数的敏感度来优先采样相关路径。
3. 新在哪里：相比全树计算，SCRAPL将每次反向传播的计算量降低了约P倍（P为路径总数）；相比简单的随机路径近似，P-Adam和P-SAGA显著降低了梯度方差；θ-重要性采样进一步将采样分布与任务对齐，提升了收敛速度。
4. 主要实验结果：在无监督颗粒合成器声音匹配任务中（见表1），SCRAPL的参数误差（65.7‰）远低于多尺度频谱损失（MSS）系列方法（195-370‰），同时计算成本仅为全JTFS损失（42.4‰）的约1/2。在TR-808鼓机匹配上（表4），SCRAPL在未对齐（meso）条件下表现稳定，能有效匹配瞬态。消融实验（表2）证实了P-Adam、P-SAGA和θ-IS每一项的贡献。
5. 实际意义：使散射变换这类计算昂贵但感知性能优越的损失函数，能够高效地用于训练大规模可微数字信号处理（DDSP）模型，特别是在合成器引入随机时间偏移等非确定性因素时，扩展了DDSP的应用范围。
6. 主要局限性：θ-重要性采样需要提前在数据集上计算敏感度矩阵，增加了前置开销；对于信号中稀疏、低能量的部分（如鼓声的衰减段），由于相关路径可能被低概率采样，导致匹配不佳（见表9）。

---

### 🥈 [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-continuous-audio-language-models)

🔥 **8.0/10** | 前25% | #音频生成 | #自回归模型 | #一致性模型 #知识蒸馏

👥 **作者与机构**

- 第一作者：Simon Rouard（Kyutai, UMR STMS, IRCAM-CNRS Sorbonne Univ.）
- 通讯作者：Alexandre Défossez（Kyutai）
- 作者列表：Simon Rouard（Kyutai, UMR STMS, IRCAM-CNRS Sorbonne Univ.）、Manu Orsini（Kyutai）、Axel Roebel（UMR STMS, IRCAM-CNRS Sorbonne Univ.）、Neil Zeghidour（Kyutai）、Alexandre Défossez（Kyutai）

💡 **毒舌点评**

亮点是论文将自回归建模与一致性模型（Consistency Model）巧妙结合，用连续表示替代了离散token，在语音和音乐生成任务上实现了更高质量与更低计算成本的平衡，并提供了可实时CPU运行的轻量级TTS模型作为实用证明。短板在于，虽然模型在生成质量和效率上有所提升，但对于复杂语义内容的理解和跨模态对齐能力（如文本到音乐的精确控制）的深度分析和提升有限，且其在极长序列生成上的稳定性和一致性仍有待更大规模验证。

🔗 **开源详情**

- 代码：提供代码仓库链接：`github.com/kyutai-labs/pocket-tts`。
- 模型权重：提到了开源的 Pocket TTS 模型（100M参数）。论文中其他更大规模的模型（如1.35B音乐CALM）权重是否公开未明确说明。
- 数据集：使用了多个公开数据集（如LibriHeavy, Emilia, LAION-Disco-12M等），但未提供统一的“CALM预训练数据集”下载链接。
- Demo：提供了在线示例页面：`iclr-continuous-audio-language-models.github.io`。
- 复现材料：提供了极为详细的训练超参数表（Tab. 14, 15）、损失函数公式、消融实验设计、硬件配置和训练步数。附有独立的技术报告链接：`kyutai.org/pocket-tts-technical-report`。
- 论文中引用的开源项目：依赖了多个开源项目，包括：
    - 骨干模型：Helium-1 (Kyutai, 2025)
    - 音频编解码器：Mimi (Défossez et al., 2024b), EnCodec (Copet et al., 2023)
    - 评估工具：Whisper (Radford et al., 2022), WavLM (Chen et al., 2021b), PANNs (Kong et al., 2019)
    - 文本处理：SentencePiece (Kudo & Richardson, 2018)
    - 数据处理：fairseq (Ott et al., 2019)
    - 对比基线：F5-TTS, DSM, SALAD, DiTAR, MusicGen等。

📌 **核心摘要**

1. 要解决什么问题：当前主流的音频语言模型（ALM）通过离散token表示音频，这依赖于有损压缩。提高音质通常需要生成更多token，导致质量与计算效率之间存在根本性权衡。
2. 方法核心是什么：提出连续音频语言模型（CALM），绕过离散量化，直接在变分自编码器（VAE）的连续潜在空间上进行自回归建模。模型由因果Transformer骨干网络（带噪声注入）、短上下文Transformer和基于一致性模型（或LSD）的MLP头部构成。
3. 与已有方法相比新在哪里：a) 用连续表示替代离散token，避免了量化损失；b) 创新性地将“带噪声的长程上下文”与“干净的短程上下文”结合，解决了误差累积问题并保留了细节；c) 用一步或多步一致性模型替代扩散模型头部，极大加速了推理；d) 引入了高斯温度采样、潜在CFG、潜在蒸馏等一系列实用技巧。
4. 主要实验结果如何：在语音延续、音乐延续、文本到语音（TTS）和文本到音乐四个任务上进行了评估。关键结果包括：
    - 语音延续（Tab. 2）：CALM（1步一致性）在人类评估的声学质量和意义性（Elo分数）上优于基线RQ-Transformer（8 RVQ），且采样器头部推理速度提升12.3倍。
    - 音乐延续（Tab. 4）：CALM（1步一致性）的FAD分数（0.83）优于32 RVQ RQ-Transformer（1.06），总体推理速度提升2.2倍，采样器头部速度提升19.3倍。
    - 文本到语音（Tab. 3）：CALM（使用LSD）的WER为1.81，优于F5-TTS（2.42）和DSM（1.95），声学质量MUSHRA分数为61.1，接近参考语音。
    - Pocket TTS（Tab. 13）：一个蒸馏后的100M参数TTS模型，在Librispeech test-clean上WER为1.84，音频质量（Elo 2016）优于参考，并可在笔记本电脑CPU上实时运行。
5. 实际意义是什么：CALM框架为高质量、高效率的音频生成提供了新范式，尤其适用于计算资源受限的边缘设备。开源的Pocket TTS模型是其在轻量级TTS领域实用价值的直接证明。
6. 主要局限性是什么：模型性能依赖于预训练VAE的质量；对于音乐等更复杂的连续信号，其语义理解和可控性可能还需提升；论文未详细讨论在极长音频序列生成上的稳定性和一致性。

---

### 🥉 [UALM: Unified Audio Language Model for Understanding, Generation and Reasoning](/audio-paper-digest-blog/posts/2026-05-04-ualm-unified-audio-language-model-for)

🔥 **8.0/10** | 前25% | #音频生成 | #自回归模型 | #音频大模型 #多模态模型

👥 **作者与机构**

- 第一作者：Jinchuan Tian（CMU， NVIDIA）
- 通讯作者：未说明
- 作者列表：Jinchuan Tian（CMU， NVIDIA）、Sang-gil Lee（NVIDIA）、Zhifeng Kong（NVIDIA）、Sreyan Ghosh（CMU， NVIDIA， UMD）、Arushi Goel（NVIDIA）、Chao-Han Huck Yang（NVIDIA）、Wenliang Dai（NVIDIA）、Zihan Liu（NVIDIA）、Hanrong Ye（NVIDIA）、Shinji Watanabe（未说明）、Mohammad Shoeybi（NVIDIA）、Bryan Catanzaro（NVIDIA）、Rafael Valle（NVIDIA）、Wei Ping（NVIDIA）

💡 **毒舌点评**

亮点：这篇工作最值得称道的是其系统性和雄心，它并非零敲碎打地解决一个子问题，而是试图构建一个统一的“音频大脑”，将理解、生成和高阶的推理能力融合在一起，并且通过实验证明了其在每个单独任务上都能达到SOTA水平，这对于该领域是一个重要的里程碑式声明。  
短板：虽然统一模型效果显著，但论文在解释“为什么”一个统一架构能平衡好性质差异巨大的任务（如理解的离散性与生成的连续性）方面略显不足，部分成功归因于经验性的“数据融合比例”和“模态对齐阶段”，其内在机理有待更深入的探究。此外，对生成任务所需的庞大数据规模（30M样本）的依赖，也限制了其在低资源场景的适用性。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/NVIDIA/audio-intelligence/tree/main/UALM。
- 模型权重：论文未明确提及是否公开预训练或后训练的模型权重。
- 数据集：论文中描述了自建的30M音频生成数据集，但未明确说明是否公开。其他使用的理解数据集（如AF3数据混合）为公开或已有。
- Demo：提供了在线演示样本链接：https://research.nvidia.com/labs/adlr/UALM。
- 复现材料：在论文正文中及附录C中提供了详细的训练和推理超参数（如学习率、批量大小、训练步数、DPO超参数等），并提及了序列打包等关键训练技巧。复现材料较为充分。
- 引用的开源项目：依赖并提到了多个开源项目/模型，包括：Qwen2.5 LLM系列、X-codec、Audio Flamingo系列（AF1/2/3）的音频编码器、LAION-CLAP、AudioBox-Aesthetic、PANNs、PaSST、OpenL3、BigVGAN判别器、T5等。

📌 **核心摘要**

本文针对当前音频领域研究将理解与生成割裂的现状，提出了统一音频语言模型（UALM）。该模型旨在单一框架内同时支持音频理解、文本到音频生成和多模态推理。首先，作者构建了UALM-Gen，一个基于自回归大语言模型（LLM）的文本到音频生成模型，通过大规模数据训练（30M样本）、应用无分类器引导（CFG）和直接偏好优化（DPO），其生成质量可与最新的扩散模型媲美。在此基础上，通过精心设计的数据融合比例和模态对齐训练策略，实现了统一的预训练模型UALM，在音频理解、文本到音频生成和文本推理三个任务上均匹配专用模型的性能。最后，作者提出了UALM-Reason，通过引入“丰富描述”（Rich Caption）、对话和自我反思等多模态思维链推理范式，赋予模型在生成任务中进行迭代优化的能力，这是音频领域首次实现跨模态生成推理。主要实验结果表明，UALM-Gen在SongDescriber数据集上的CLAP分数达到0.54，优于TangoFlux（0.41）；统一模型UALM在MMAU音频理解基准上达到74.1%的准确率，与顶尖模型相当。该工作的核心意义在于推动了通用音频智能的发展，为更可控、更具创造力的音频AI奠定了基础。其主要局限性在于对生成任务数据规模的强依赖，以及目前对生成式推理的评估主要依赖主观评价，缺乏标准化的定量评估基准。

关键实验结果表格：

| 模型 | 数据集 | FD ↓ | KL ↓ | IS ↑ | CL ↑ | AES ↑ | OVL ↑ | REL ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ground Truth | SongDescriber | 0 | 0 | 1.88 | 0.48 | 7.20 | 4.10 | 4.03 |
| TangoFlux (Hung et al., 2024) | SongDescriber | 235.61 | 0.71 | 1.70 | 0.41 | 6.46 | 3.80 | 3.89 |
| ETTA (Lee et al., 2024) | SongDescriber | 95.66 | 0.80 | 2.15 | 0.44 | 6.71 | 3.92 | 3.93 |
| UALM-Gen (Ours) | SongDescriber | 74.43 | 0.63 | 1.87 | 0.54 | 7.36 | 4.07 | 3.96 |
| UALM (Ours) | SongDescriber | 83.69 | 0.59 | 2.00 | 0.54 | 7.28 | 3.97 | 3.99 |

| 模型 | 数据集 | FD ↓ | KL ↓ | IS ↑ | CL ↑ | AES ↑ | OVL ↑ | REL ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ground Truth | AudioCaps | 0 | 0 | 13.49 | 0.62 | 4.50 | 3.91 | 3.96 |
| TangoFlux (Hung et al., 2024) | AudioCaps | 103.04 | 1.02 | 15.13 | 0.65 | 4.42 | 3.72 | 3.93 |
| ETTA (Lee et al., 2024) | AudioCaps | 80.13 | 1.22 | 14.36 | 0.54 | 4.51 | 3.73 | 3.94 |
| UALM-Gen (Ours) | AudioCaps | 75.14 | 1.19 | 14.52 | 0.65 | 5.08 | 3.79 | 3.92 |
| UALM (Ours) | AudioCaps | 65.87 | 1.35 | 15.62 | 0.62 | 4.92 | 3.89 | 3.86 |

---

### 4. [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis with Acoustic Transfer](/audio-paper-digest-blog/posts/2026-05-04-ac-foley-reference-audio-guided-video-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #音视频 #零样本

👥 **作者与机构**

- 第一作者：Pengjun Fang（香港科技大学）
- 通讯作者：未明确标注。论文作者列表中有上标“B”的作者可能为共同通讯或资深作者，包括：Qifeng Chen (香港科技大学), Ser-Nam Lim (中佛罗里达大学), Harry Yang (香港科技大学)。
- 作者列表：Pengjun Fang（香港科技大学）、Yingqing He（香港科技大学）、Yazhou Xing（香港科技大学）、Qifeng Chen（香港科技大学）、Ser-Nam Lim（中佛罗里达大学）、Harry Yang（香港科技大学）

💡 **毒舌点评**

AC-Foley巧妙地将“用一段参考音频当模板”这个直观想法工程化，通过两阶段训练解决了如何让模板适配视频节奏的核心难题，在精细控制和音色迁移上效果显著。不过，它本质上还是在现有Flow Matching和Transformer架构上做条件注入，创新天花板有限，且目前只擅长单声源控制，遇到复杂环境音（如边说话边有背景音乐）就容易“打架”。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文中未提及是否公开预训练或最终模型权重。
- 数据集：使用了VGGSound（CC-BY 4.0）、AudioCaps2.0（MIT）、WavCaps（CC-BY 4.0）等公开数据集，并说明了获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练细节（见附录A：优化器、学习率、批次大小、迭代次数、硬件、训练时长），关键网络配置（附录B：潜在表示维度、Transformer块数、隐藏维度）。这为复现提供了必要的配置信息。
- 论文中引用的开源项目：依赖CLIP（视觉/文本编码器）、VAE、BigVGAN（声码器）、Synchformer（同步特征提取）、ImageBind（数据筛选）、PaSST/PANNs/VGGish（评估指标）、CLAP（基线对比）等开源模型和工具。
- 开源计划：论文中未提及未来的开源计划。

📌 **核心摘要**

1.  问题：现有视频到音频（V2A）生成方法主要依赖文本提示进行控制，但存在两个关键瓶颈：一是训练数据的语义标签粒度粗（如将所有狗叫都标为“barking”），导致无法区分细微音色；二是自然语言难以精确描述微声学特征（如“金属撞击声”的具体瞬态和共鸣）。这使得创作者难以对生成的声音进行精细控制。
2.  方法核心：提出AC-Foley，一个参考音频引导的V2A生成框架。其核心是直接使用一段参考音频（Reference Audio）作为条件，来控制生成音频的声学特性（如音色、频谱特征）。为了解决参考音频与视频上下文在时序和内容上的适配问题，设计了两阶段训练策略：第一阶段（重叠条件）让模型学习从与目标音频重叠的片段中提取声学特征；第二阶段（非重叠条件）则强制模型利用视频内容的内在自相似性，将学到的声学特征泛化应用到新的时间位置，避免简单的复制粘贴。
3.  创新与不同：与现有文本或视频条件控制方法相比，AC-Foley直接利用音频信号进行控制，绕过了文本的语义模糊性，实现了对生成声音的细粒度声学操控。这使系统能够实现细粒度声音合成（如同一视频，用吉娃娃叫声或大型犬叫声作为参考生成不同吠叫）、音色迁移（如将小提琴旋律用唢呐音色生成）和零样本生成（如用一段带消音器的枪声音频生成该枪声效果，而无需相关训练数据）。
4.  主要结果：实验在VGGSound测试集上进行。在有参考音频条件下，AC-Foley在分布匹配（FDPaSST: 56.00 vs MMAudio+CLAP的70.80）、语义一致性（IB: 37.1）和频谱保真度（MCD: 11.37）上均优于最强基线。在音色迁移任务（Greatest Hits数据集）上，即使未在该数据集上训练，其声学保真度（MCD: 3.39）也优于专门训练的CondFoley（4.18）。人类研究显示，其生成音频的声学保真度以83.5%的胜率显著优于MMAudio-L-V2。
    | 方法 | FD (PaSST) ↓ | KL (PaSST) ↓ | IB ↑ | MCD ↓ | DeSync ↓ |
    | :--- | :---: | :---: | :---: | :---: | :---: |
    | 有音频条件 | | | | | |
    | AC-Foley (ours) | 56.00 | 0.84 | 37.1 | 11.37 | 0.465 |
    | MMAudio + CLAP | 70.80 | 1.17 | 35.7 | 14.63 | 0.431 |
    | 无音频条件 | | | | | |
    | AC-Foley (w/o audio) | 64.90 | 1.17 | 36.6 | 14.59 | 0.410 |
    | MMAudio-L-V2 | 69.25 | 1.12 | 37.8 | 14.11 | 0.392 |
    | HunyuanVideo-Foley | 85.19 | 1.52 | 34.7 | 15.12 | 0.492 |
5.  实际意义：该工作为影视后期制作、游戏开发、多媒体创作等领域提供了更灵活、精细的声音设计工具。创作者可以通过提供一段目标音色的参考音频，快速生成与画面同步且具有特定声学属性的音效，极大提升了创作自由度和效率。
6.  主要局限性：论文明确指出，当输入视频和参考音频包含多个并发声源（如对话、环境噪音、物体交互声重叠）时，模型难以精确对齐特定声音元素与视觉触发。此外，当参考音频与视频内容的节奏模式极端不匹配时（如用缓慢的猫叫声配快速打字视频），生成质量会下降。

---

### 5. [TangoFlux: Super Fast and Faithful Text to Audio Generation with Flow Matching and Clap-Ranked Preference Optimization](/audio-paper-digest-blog/posts/2026-05-04-tangoflux-super-fast-and-faithful-text-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #偏好优化 #扩散模型

👥 **作者与机构**

- 第一作者：Chia-Yu Hung (南洋理工大学计算机与数据科学学院， Nanyang Technological University)
- 通讯作者：未明确指定（论文列出多位合作作者，但未明确标注通讯作者。从贡献描述看，Chia-Yu Hung和Navonil Majumder，以及Soujanya Poria是核心作者）
- 作者列表：Chia-Yu Hung (南洋理工大学), Navonil Majumder (南洋理工大学), Zhifeng Kong (NVIDIA), Ambuj Mehrish (卡福斯卡里大学), Amir Ali Bagherzadeh (Lambda Labs), Chuan Li (Lambda Labs), Rafael Valle (NVIDIA), Bryan Catanzaro (NVIDIA), Soujanya Poria (南洋理工大学)

💡 **毒舌点评**

论文最大的亮点在于CRPO这一“自我迭代”的对齐框架设计精巧，成功地将LLM对齐的思想迁移到音频生成领域，并有效解决了音频偏好数据构建的难题。但一个明显的短板是，论文对CRPO的核心组件——CLAP作为奖励模型的“代理”性质及其局限性讨论不足，这可能导致对齐效果在更复杂或未见场景下的泛化能力存疑。

🔗 **开源详情**

- 代码：论文明确承诺将在接受后公开代码（“We shall publicly release the implementation of model training, inference, and evaluation upon acceptance.”），并提及匿名代码已包含在补充材料中。但正文中未给出具体仓库链接。
- 模型权重：论文明确承诺将发布模型权重（“We will release the code and model weights.”）。
- 数据集：论文使用的所有数据集均为公开数据（WavCaps， AudioCaps），并给出了具体划分和处理方式。
- Demo：提供了在线样本对比页面链接：https://tangoflux.github.io/。
- 复现材料：论文在附录（A.5）中提供了完整的训练超参数（学习率、批大小、优化器、epoch数、调度策略等），并详细描述了评估设置、人类评估协议和使用的评估工具包。
- 引用的开源项目：论文明确使用了以下开源工具/模型：FLAN-T5（文本编码器）， Stable Audio Open的VAE， CLAP模型（用于CRPO），以及评估工具包（如stable-audio-metrics， AudioLDM evaluation toolkit， kadtk）。

📌 **核心摘要**

本文旨在解决文本到音频（TTA）生成模型在生成速度、文本对齐精度和可控性上的不足，尤其是对齐阶段缺乏高质量偏好数据的问题。论文提出了一种基于Rectified Flow的高效TTA模型TangoFlux（515M参数），并创新性地设计了CLAP-Ranked Preference Optimization (CRPO)框架。CRPO的核心是动态数据生成与迭代优化：在每个训练迭代中，模型为一批文本提示生成多个音频样本，利用CLAP模型根据文本-音频相似度对这些样本进行排序，自动构建“获胜”和“失败”的偏好对，随后利用改进的DPO损失（LCRPO）对模型进行微调。与使用静态偏好数据集（如BATON， Audio-Alpaca）的方法相比，CRPO通过持续生成最新的偏好数据，避免了数据过时和性能饱和问题。实验结果表明，TangoFlux在AudioCaps数据集上，在多个客观指标（如FDopenl3， CLAPscore）和主观评估（OVL， REL）上均达到了SOTA水平，同时保持了极快的推理速度（在A40 GPU上生成30秒音频仅需3.7秒）。

主要实验结果（Table 1 & Table 2）：
| 模型 | 参数量 | 推理时间(s) | FDP↓ | FDopenl3↓ | KLpasst↓ | CLAPscore↑ | IS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Tango 2 | 866M | 22.8 | 20.8 | 108.4 | 1.11 | 0.447 | 9.0 |
| GenAU-Full-L | 1.25B | 5.3 | 20.1 | 93.2 | 1.37 | 0.447 | 12.0 |
| TANGOFLUX | 515M | 3.7 | 20.3 | 75.1 | 1.15 | 0.480 | 12.2 |

TangoFlux以更小的模型规模和显著更快的速度，在大部分指标上超越了包括Tango 2、GenAU在内的强基线。主观评估（Table 2）也显示，TangoFlux在整体音频质量（OVL）和文本相关性（REL）上的z分数和Elo分数均为最高。

实际意义：该工作为高效、高质量的文本到音频生成提供了有力的开源方案，CRPO框架为缺乏显式奖励模型的生成式任务对齐提供了一种可复用的范式。主要局限性：CLAP作为奖励模型可能存在偏差，且论文未深入探讨其在不同音频类型（如音乐、复杂场景音）上的泛化能力；模型最大生成时长固定为30秒，且依赖于特定的VAE编码器。

---

### 6. [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-audiox-a-unified-framework-for-anything-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 | #多模态模型 #数据集

👥 **作者与机构**

- 第一作者：Zeyue Tian (香港科技大学)
- 通讯作者：Wei Xue† (香港科技大学), Yike Guo† (香港科技大学)
- 作者列表：Zeyue Tian (香港科技大学), Zhaoyang Liu (香港科技大学), Yizhu Jin (香港科技大学), Ruibin Yuan (香港科技大学), Liumeng Xue (香港科技大学), Xu Tan (独立研究员), Qifeng Chen (香港科技大学), Wei Xue (香港科技大学), Yike Guo (香港科技大学)

💡 **毒舌点评**

这篇论文的野心很大，试图用一个框架解决音频/音乐生成领域几乎所有的“条件生成”任务，其构建的700万样本数据集IF-caps是核心竞争力之一，但真正让其脱颖而出的是MAF模块在消融实验中展现出的关键作用——它证明了简单的特征拼接在多模态条件下是失效的。不足在于，论文将“统一训练带来跨模态正则化”作为一个重要发现，但其背后的作用机制解释得还不够透彻，更像是一种现象观察而非理论洞察。

🔗 **开源详情**

- 代码：论文承诺将开源代码，链接为 `https://zeyuet.github.io/AudioX/`，但截至分析时尚未发布。
- 模型权重：论文承诺开源预训练模型检查点，但未提及具体平台。
- 数据集：论文承诺开源完整的IF-caps数据集，但未说明具体获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练细节（优化器、学习率、batch size、硬件、训练时长）、模型架构描述、数据集构建流程说明以及评估指标定义。附录提供了更多实验配置和结果。
- 论文中引用的开源项目：
    - CLIP-ViT-B/32 (Radford et al., 2021)
    - Synchformer (Iashin et al., 2024)
    - T5-base (Raffel et al., 2020)
    - Stable Audio Open (Evans et al., 2024b) 的音频自编码器
    - Gemini 2.5 Pro, Qwen2-Audio (用于数据构建)

📌 **核心摘要**

1.  问题：现有的音频生成模型大多是任务专用的，只能处理单一模态条件（如仅文本或仅视频）或生成单一类型音频（如音效或音乐），缺乏一个能灵活处理多种模态组合输入（文本、视频、音频）并生成高质量音频/音乐的统一框架。高质量多模态训练数据的缺乏是重要瓶颈。
2.  方法核心：提出AudioX框架，基于扩散Transformer（DiT）骨干网络。其核心创新是多模态自适应融合模块（MAF）。该模块首先通过门控机制过滤和重加权不同模态的特征，然后通过可学习查询的交叉注意力和自注意力聚合跨模态信息，最后通过残差连接更新各模态特征，形成统一的条件嵌入Hc来指导DiT生成。
3.  与已有方法新在何处：a) 提出了首个真正统一多种输入模态（文本、视频、音频）和输出域（音效、音乐）的生成框架。b) 设计了轻量级但有效的MAF模块，解决了多模态信号干扰和融合问题。c) 构建了首个大规模、高质量、细粒度注释的多模态音频数据集IF-caps（超700万样本），支持统一模型训练。d) 提出了新的指令遵循基准T2A-bench评估细粒度控制能力。
4.  主要实验结果：
    - 综合性能：在AudioCaps和VGGSound的文本到音频（T2A）任务上，AudioX的Inception Score（IS）分别达到12.48和19.58，Fréchet Audio Distance（FAD）降至1.59和1.33，均为SOTA。
    - 指令遵循：在自建的T2A-bench上，类别准确率（Cat-acc）达34.20%，计数准确率（Cnt-acc）达12.40%，排序准确率（Ord-acc）达23.60%，大幅超越所有基线。在AudioTime基准上，排序误差（Ordering）低至0.34，持续时间误差（Duration）低至1.30，同样显著领先。
    - 消融实验：MAF模块是关键，移除后性能显著下降；高质量数据策略（GeminiCap-aug）在T2A、V2A等任务上均带来提升，甚至改善了非文本条件任务（V2A）的性能，体现了“跨模态正则化”效应。
5.  实际意义：为多媒体内容创作提供了强大而灵活的音频生成工具，能通过自然语言、视频或现有音频等多种方式控制生成，有望降低专业音频制作门槛，提升创作效率。
6.  主要局限性：a) 模型规模较大（2.4B参数），训练计算成本高。b) “跨模态正则化”效应的具体机理有待更深入研究。c) 对非文本条件（如纯视频生成音乐）的指令遵循能力未在专门的细粒度基准上深入评估。

---

### 7. [Syncphony: Synchronized Audio-to-Video Generation with Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-04-syncphony-synchronized-audio-to-video-generation)

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 | #音视频 #跨模态

👥 **作者与机构**

- 第一作者：Jibin Song (延世大学人工智能系， CineLingo)
- 通讯作者：Youngjung Uh (延世大学人工智能系)
- 作者列表：Jibin Song (延世大学人工智能系， CineLingo)， Mingi Kwon (延世大学人工智能系， CineLingo)， Jaeseok Jeong (延世大学人工智能系， CineLingo)， Youngjung Uh (延世大学人工智能系， CineLingo)

💡 **毒舌点评**

亮点：论文的系统性很强，从训练损失（Motion-aware Loss）到推理引导（Audio Sync Guidance），再到评估指标（CycleSync）形成了一个完整的工具链来攻克“音视频同步”这个具体痛点，而非仅仅提出一个模型。短板：其核心依赖于一个强大的预训练视频生成骨干（Pyramid Flow），创新更多体现在“如何将音频同步能力注入一个现有强大生成器”的策略上，而非从零构建一个生成架构，这在一定程度上限制了方法的普适性和独立性。

🔗 **开源详情**

- 代码：论文承诺将发布代码，但未在文中提供具体仓库链接。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用公开数据集AVSync15和TheGreatestHits。论文中未提及发布新的数据集。
- Demo：提供了项目主页链接（`https://jibin86.github.io/syncphony_project_page`），可能包含演示视频，但未明确说明。
- 复现材料：在附录（Appendix）中提供了详细的训练和推理设置（如GPU型号、训练时长、批大小、步数、推理步数等），以及模型架构选择（如音频层插入位置）的分析。
- 论文中引用的开源项目：Pyramid Flow (Jin et al., 2024a) 作为视频生成骨干；DenseAV (Hamilton et al., 2024) 作为音频编码器；CLIP (Radford et al., 2021) 作为文本编码器；V-AURA (Viertola et al., 2025) 作为CycleSync中使用的V2A模型。

📌 **核心摘要**

1. 要解决的问题：现有的文本/图像到视频生成模型难以精确控制动作的时间细节，而音频信号包含丰富的时序线索，可用于指导生成时间上对齐的视频。现有音频到视频（A2V）模型因间接的条件注入机制或有限的时序建模能力，难以实现细粒度的同步。
2. 方法核心：提出Syncphony框架，基于一个预训练的视频扩散Transformer骨干网络。核心创新包括：(1) Motion-aware Loss，在训练时对相邻帧间潜在表示差异大的（即高运动）区域施加更高权重，强化模型对关键动作的学习；(2) Audio Sync Guidance (ASG)，在推理时通过一个跳过了音频层的“失步模型”来引导完整模型，从而放大音频线索的影响，提升同步性。
3. 新在哪里：与现有方法（如基于振幅调制、音频到文本投影或从零训练浅层时序层）不同，本方法直接在强大的预训练视频骨干中注入音频特征（通过交叉注意力），并设计了针对同步优化的损失和推理策略。此外，提出了一个新的同步评估指标CycleSync，通过视频到音频的重构来评估生成视频包含的同步线索。
4. 主要实验结果：在AVSync15和TheGreatestHits数据集上，Syncphony在同步准确性（CycleSync分数）和视觉质量（FID/FVD）上均优于现有方法。例如，在AVSync15上，CycleSync分数达到16.48±1.28，显著高于AVSyncD的16.38±1.38；在TheGreatestHits上，CycleSync分数（16.18±1.26）甚至略高于真实视频（15.99±1.5）。用户研究也显示，在同步性、图像质量和帧一致性上，Syncphony均以74%、90%和94%的比率优于AVSyncD基线。
5. 实际意义：为需要精确音画同步的视频生成任务（如音乐视频、游戏动画、动作模拟）提供了有效的技术方案，提升了A2V生成的实用性和可控性。
6. 主要局限性：Motion-aware Loss基于地面真值运动幅度加权，但并非明确选择与音频相关的运动（如区分背景运动）。CycleSync作为重建式指标，其性能受限于所用的视频到音频模型的质量，并可能受到数据集偏见的影响。

---

### 8. [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-flow2gan-hybrid-flow-matching-and-gan-with-multi)

✅ **7.5/10** | 前25% | #音频生成 | #流匹配 #GAN | #流匹配 #GAN

👥 **作者与机构**

- 第一作者：Zengwei Yao (Xiaomi Corp.)
- 通讯作者：Daniel Povey (dpovey@xiaomi.com, Xiaomi Corp.)
- 作者列表：Zengwei Yao (Xiaomi Corp.)， Wei Kang (Xiaomi Corp.)， Han Zhu (Xiaomi Corp.)， Liyong Guo (Xiaomi Corp.)， Lingxuan Ye (Xiaomi Corp.)， Fangjun Kuang (Xiaomi Corp.)， Weiji Zhuang (Xiaomi Corp.)， Zhaoqing Li (Xiaomi Corp.)， Zhifeng Han (Xiaomi Corp.)， Long Lin (Xiaomi Corp.)， Daniel Povey (Xiaomi Corp.)

#

💡 **毒舌点评**

亮点：将Flow Matching训练与GAN微调巧妙结合，并针对音频特性（静默区、感知权重）对Flow Matching进行了有效的工程化改进，形成了一个完整且实用的少步生成方案。短板：创新点更多是现有模块的精心组合与调优，缺乏颠覆性的理论突破；此外，模型参数量（78.9M）相比一些轻量化声码器（如Vocos）并无优势，其效率提升主要来自减少的推理步数。

#

🔗 **开源详情**

*   代码：提供完整代码仓库链接：https://github.com/k2-fsa/Flow2GAN
*   模型权重：提供预训练模型权重下载。
*   数据集：使用公开数据集（LibriTTS， Common Voice， MTG-Jamendo， AudioSet等），未提及额外数据。
*   Demo：提供在线演示样本：https://flow2gan.github.io
*   复现材料：论文详细说明了训练配置（学习率、优化器、迭代次数、硬件）、模型架构参数（表10）、损失函数细节，复现信息非常充分。
*   引用的开源项目：论文依赖并提到了Vocos、HiFi-GAN（MPD判别器）、Univnet（MRD判别器）、ConvNeXt等开源模型和框架。

📌 **核心摘要**

1. 问题：现有的主流音频生成方法中，GAN训练收敛慢且易模式坍缩，而基于Flow Matching的扩散模型需要多步采样，计算开销大。如何结合两者优势，实现少步且高保真的音频生成是一个挑战。
2. 核心方法：提出Flow2GAN，一个两阶段训练框架。第一阶段使用改进的Flow Matching进行预训练，学习生成能力；第二阶段构建少步生成器，并使用GAN进行微调以提升细节和保真度。
3. 创新点：a) 针对音频静默区，将Flow Matching目标重述为端点预测，避免速度估计困难；b) 提出频谱能量自适应损失缩放，在时间和频率维度上强调感知更重要的安静区域；c) 设计多分支多分辨率网络处理不同时间-频率分辨率的傅里叶系数，增强建模能力。
4. 主要结果：实验表明，Flow2GAN在Mel谱和离散音频Token条件下均表现优异。例如，在LibriTTS测试集上，4步Flow2GAN的PESQ为4.484，ViSQOL为4.986，超越了多数基线方法（如BigVGAN， Vocos， WaveFM）。相比标准Flow Matching预训练，改进后模型在2步生成时PESQ提升超过1.1点（表3）。
5. 实际意义：为高质量音频生成提供了新的效率-质量折中方案。1/2/4步即可生成高质量音频，适用于对延迟敏感的实时应用（如TTS、交互式音乐生成）。
6. 主要局限性：模型参数量（78.9M）较大；虽然推理步数少，但多分支结构的单步计算量可能仍高于最轻量的GAN模型（如Vocos）。其泛化性主要在LibriTTS和部分通用音频数据集上验证，尚未在大规模多语种或复杂音乐生成场景中测试。

---

### 9. [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-04-token-based-audio-inpainting-via-discrete)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #音频修复 #离散建模

👥 **作者与机构**

- 第一作者：Tali Dror（Ben-Gurion University of the Negev 电气与计算机工程学院）
- 通讯作者：Eliya Nachmani（Ben-Gurion University of the Negev 电气与计算机工程学院）
- 作者列表：Tali Dror（Ben-Gurion University of the Negev 电气与计算机工程学院）、Iftach Shoham（Ben-Gurion University of the Negev 计算机与信息科学学院 数据科学研究中心）、Moshe Buchris（Ben-Gurion University of the Negev 电气与计算机工程学院）、Oren Gal（University of Haifa）、Haim Permuter（Ben-Gurion University of the Negev 电气与计算机工程学院）、Gilad Katz（Ben-Gurion University of the Negev 计算机与信息科学学院 数据科学研究中心）、Eliya Nachmani（Ben-Gurion University of the Negev 电气与计算机工程学院）

#

💡 **毒舌点评**

亮点： 本文首次将离散扩散模型应用于音频令牌化表示进行修复，技术组合新颖，并在实验上证明了其在长间隙（150ms以上）修复任务中的优越性。短板： 研究完全依赖于预训练的WavTokenizer（或UniCodec）的性能上限，且存在训练-推理时掩码顺序不匹配的问题，这使其更像一个高效的“应用整合”而非扩散模型本身的理论突破。

#

📌 **核心摘要**

1.  问题：音频修复旨在恢复录音中缺失或损坏的片段。现有基于连续扩散的方法在面对大间隙时，难以同时保证细节的清晰度和整体语义的连贯性。
2.  方法：提出AIDD，首次将离散扩散模型应用于通过预训练音频分词器（WavTokenizer）得到的离散音乐令牌序列上进行修复。
3.  创新：核心创新在于：a) 将音频修复问题转化为离散序列补全任务；b) 提出跨度掩码策略，在扩散前向过程中模拟结构化的损坏；c) 引入基于导数的正则化损失，约束预测令牌嵌入的时域平滑性。
4.  结果：在MusicNet和MAESTRO数据集上，对于150ms及以上的间隙，AIDD在FAD、LSD、ODG及主观MOS评估上均优于或达到最优。例如，在MusicNet 300ms间隙上，AIDD的FAD为3.549，相比最强基线CQT-Diff+的4.652降低了约25%。
5.  意义：为基于令牌化表示的音频生成提供了新的范式，证明了离散扩散在音乐理解与修复任务中的有效性。
6.  局限：修复质量严重受限于底层分词器的重建保真度；训练（对干净令牌掩码）与推理（对含间隙波形编码后再掩码）存在流程差异；输出音频带宽被限制在分词器的24kHz。

#

---

### 10. [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensional Rewards for Video-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-prismaudio-decomposed-chain-of-thought-and-multi)

✅ **7.5/10** | 前25% | #音频生成 | #强化学习 | #扩散模型 #流匹配

👥 **作者与机构**

- 第一作者：Huadai Liu (香港科技大学、阿里巴巴通义团队)
- 通讯作者：Wei Xue (香港科技大学)
- 作者列表：Huadai Liu (香港科技大学、阿里巴巴通义团队)、Kaicheng Luo (阿里巴巴通义团队)、Wen Wang (阿里巴巴通义团队)、Qian Chen (阿里巴巴通义团队)、Peiwen Sun (香港中文大学)、Rongjie Huang (香港中文大学)、Xiangang Li (阿里巴巴通义团队)、Jieping Ye (阿里巴巴通义团队)、Wei Xue (香港科技大学)

#

💡 **毒舌点评**

亮点：论文将“目标纠缠”这一多目标生成模型的老大难问题拆解得非常清晰，并首次为视频到音频生成设计了一套完整的分解式CoT与多维度强化学习优化框架，系统性强，实验扎实。短板：其核心“音频基础模型”本身并无颠覆性创新，更多是“站在巨人肩上”的组合与优化；此外，完整的训练流程对计算资源要求不低（多阶段GPU训练），实际落地门槛不低。

#

🔗 **开源详情**

- 代码：论文中提到“The project page is available at https://PrismAudio.github.io”并承诺“the code... will be made publicly available upon publication”，但未在提供文本中给出具体代码仓库链接。
- 模型权重：承诺公开“all model weights”，但未提及具体平台或链接。
- 数据集：明确推出了AudioCanvas基准测试，并承诺公开，但未说明获取方式。
- Demo：未提及。
- 复现材料：提供了非常详尽的训练细节、配置、超参数和硬件信息（见附录D），复现指引充分。
- 引用的开源项目：论文中依赖的开源模型/工具包括：VideoPrism, T5-Gemma, VideoLLaMA2, Gemini 2.5 Pro (用于数据生成), MS-CLAP, Synchformer, Meta Audiobox Aesthetics, StereoCRW, Stability AI的VAE基础。

📌 **核心摘要**

1. 要解决什么问题：现有视频到音频（V2A）生成方法在同时满足语义一致性、时间同步、美学质量和空间准确性四个感知维度时存在目标纠缠问题，优化一个维度常损害其他维度，且缺乏人类偏好对齐。
2. 方法核心是什么：提出PrismAudio框架，首次将强化学习（RL）引入V2A生成。核心是将单一的生成推理过程分解为四个专门的思维链（CoT）模块（语义、时间、美学、空间），每个模块对应一个定制化的奖励函数，通过多维度RL联合优化。同时提出Fast-GRPO算法，采用混合ODE-SDE采样以高效训练。
3. 与已有方法相比新在哪里：1) 首次将RL应用于V2A生成以进行人类偏好对齐；2) 提出分解式多维度CoT与奖励对应，取代单一的重建损失；3) 设计高效RL训练算法Fast-GRPO；4) 引入更严格、更多样的评测基准AudioCanvas。
4. 主要实验结果如何：在VGGSound测试集和自建的AudioCanvas基准上，PrismAudio在所有四个感知维度上均达到最先进（SOTA）水平。例如，在AudioCanvas上，其语义一致性（CLAP）达0.52（基线ThinkSound为0.48），时间同步（DeSync）达0.36（基线为0.80），主观MOS-Q达4.12（基线为3.79）。消融实验证明多维度CoT和多维度奖励优于单一维度策略。

| 方法 | 数据集 | CLAP↑ | DeSync↓ | PQ↑ | CE↑ | CRW↓ | MOS-Q↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ThinkSound | AudioCanvas | 0.48 | 0.80 | 6.48 | 4.10 | 22.82 | 3.79±0.58 |
| PrismAudio (Ours) | AudioCanvas | 0.52 | 0.36 | 6.68 | 4.26 | 12.87 | 4.12±0.28 |
| PrismAudio w/o CoT-RL | AudioCanvas | 0.42 | 0.44 | 6.45 | 3.81 | 15.30 | 3.91±0.35 |

5. 实际意义是什么：为需要高保真、可控音频合成的应用（如视频编辑、虚拟现实、游戏）提供了更优的技术方案，其多维度优化框架为解决复杂生成任务中的目标冲突问题提供了新范式。
6. 主要局限性是什么：1) 依赖外部强大的多模态大模型（如Gemini 2.5 Pro）来构建高质量的CoT训练数据，增加了成本和复杂性；2) 训练流程多阶段且资源消耗较大；3) 提出的Fast-GRPO虽高效，但实现仍有一定复杂性。

#

---

### 11. [DiffSDA: Unsupervised Diffusion Sequential Disentanglement Across Modalities](/audio-paper-digest-blog/posts/2026-05-04-diffsda-unsupervised-diffusion-sequential)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #自监督学习 #跨模态

👥 **作者与机构**

- 第一作者：Hedi Zisling (Ben-Gurion University of the Negev)
- 通讯作者：Omri Azencot (Ben-Gurion University of the Negev)
- 作者列表：Hedi Zisling (Ben-Gurion University of the Negev)、Ilan Naiman (Ben-Gurion University of the Negev)、Nimrod Berman (Ben-Gurion University of the Negev)、Supasorn Suwajanakorn (VISTEC)、Omri Azencot (Ben-Gurion University of the Negev)。*表示共同第一作者。

💡 **毒舌点评**

论文的亮点在于将扩散模型引入序列解纠缠这个细分领域，提出了一个优雅的统一概率框架，并用一个简洁的损失函数（而非多个正则项）解决了以往方法调参复杂的问题。然而，其“单一损失函数”的简洁性建立在静态/动态因子低维且共享的设计假设上，这在一定程度上牺牲了模型的灵活性；此外，虽然号称模态无关，但在音频任务上，其识别说话人身份的Static EER略逊于最新SOTA（DBSE），这暗示了动态生成质量与静态因子纯度之间可能存在未充分讨论的权衡。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/azencot-group/DiffSDA。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：所使用的数据集（MUG, VoxCeleb, CelebV-HQ, TaiChi-HD, TIMIT, LibriSpeech, PhysioNet, ETTh1, Air Quality）均为公开数据集，论文附录D描述了预处理方法。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详细的复现信息，包括：
    - 所有数据集的预处理描述（附录D）。
    - 详细的网络架构参数（Tab.6, 7, 8）。
    - 完整的训练超参数（学习率、批大小、优化器、训练轮数等）。
    - 核心算法（Alg. 1, 2）。
    - 评估指标的定义和实现细节（附录E）。
- 论文中引用的开源项目：依赖的开源项目/工具包括：
    - VQ-VAE：使用Rombach et al. (2022)的预训练模型。
    - 采样框架：EDM (Karras et al., 2022)。
    - 人脸检测/关键点检测：Haar Cascade, Bulat & Tzimiropoulos (2017), Cao et al. (2017)。
    - 说话人识别评估：基于Serengil & Ozpinar (2020)的LightFace。
    - 视频质量评估：FVD (Blattmann et al., 2023), DNSMOS (Reddy et al., 2021)。

📌 **核心摘要**

1. 要解决什么问题：在无监督条件下，将序列数据（如视频、音频、时间序列）分解为静态（不变）和动态（时变）的潜在因素，现有基于VAE和GAN的方法存在优化复杂、超参数多、难以处理真实世界高维数据等问题。
2. 方法核心是什么：提出了DiffSDA，一个基于扩散模型的无监督序列解纠缠自编码器。其核心是两个扩散模型：一个用于建模静态和动态潜在因子（二者被建模为相互依赖），另一个用于建模观测数据，条件是这些因子和噪声潜变量。解码器使用高效的EDM采样器，整个模型通过一个统一的基于分数匹配的损失函数进行优化。
3. 与已有方法相比新在哪里：
   - 首次形式化：为基于扩散的序列解纠缠提供了理论上的概率建模基础。
   - 单一损失：摒弃了多个正则化项，仅用一个标准的扩散损失实现解纠缠，简化了优化。
   - 依赖建模：与以往独立建模静态/动态因子不同，本文建模了二者的依赖关系，增强了表达力（实验显示提升约13%）。
   - 模态无关与真实数据：框架适用于多种模态，并首次在高分辨率真实世界视频数据集（如VoxCeleb, CelebV-HQ）上进行评估。
   - 新评估协议：提出了针对视频解纠缠的新无监督评估指标（AED, AKD）和零样本交换任务。
4. 主要实验结果如何：
   - 视频：在条件交换任务中，DiffSDA在AED（静态保真度）和AKD（动态保真度）上全面超越SPYL和DBSE。例如，在CelebV-HQ上，AKD从DBSE的28.69降至6.93。
   - 音频：在TIMIT说话人识别任务上，实现了最高的“解纠缠间隙”（Dis. Gap），达到42.29%，优于DBSE的31.11%。
   - 时间序列：在PhysioNet死亡率预测和ETTh1油温预测任务上，预测性能（AUPRC, AUROC, MAE）均优于所有基线。
   - 生成质量：在VoxCeleb上，FVD分数（65.23）远低于SPYL（582.28）和DBSE（1076.44）。

| 任务与数据集 | 指标 | SPYL | DBSE | DiffSDA (Ours) |
| :--- | :--- | :--- | :--- | :--- |
| 视频交换 (CelebV-HQ) | AKD ↓ | 39.16 | 28.69 | 6.932 |
| 音频解纠缠 (TIMIT) | Dis. Gap ↑ | 29.81% | 31.11% | 42.29% |
| 时间序列预测 (PhysioNet) | AUPRC ↑ | 0.37 | 0.47 | 0.50 |
| 视频生成质量 (VoxCeleb) | FVD ↓ | 582.28 | 1076.44 | 65.23 |

5. 实际意义是什么：为无监督表示学习提供了一个更简洁、强大且通用的新框架。解纠缠出的静态和动态因子可用于可控内容生成、数据增强、下游任务特征提取（如分类、预测）以及跨数据集零样本迁移（如Fig.2所示）。
6. 主要局限性是什么：1）解码器逐帧生成，可能缺乏时空连贯性，作者建议未来可结合潜在视频扩散模型（如LVDM）。2）多因子解纠缠（如同时分离多个静态或动态因素）仅通过PCA进行了初步探索，尚未形成完整方法。3）虽然声称模态无关，但不同模态（如视频用U-Net，音频用MLP）仍需对骨干网络进行小调整。

---

### 12. [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-04-aurelius-relation-aware-text-to-audio-generation)

✅ **7.0/10** | 前25% | #音频生成 | #基准测试 | #流匹配 #音频事件检测

👥 **作者与机构**

- 第一作者：Yuhang He（Microsoft Research；Department of Computer Science, University of Oxford）
- 通讯作者：Yuhang He（yuhanghe@microsoft.com）
- 作者列表：Yuhang He（Microsoft Research；Department of Computer Science, University of Oxford）、He Liang（Microsoft Research）、Yash Jain（Microsoft Research）、Andrew Markham（Microsoft Research）、Vibhav Vineet（Department of Computer Science, University of Oxford）

#

💡 **毒舌点评**

本文最大的亮点在于以“产品经理”的思维，为“关系感知TTA”这个小众但重要的任务，从零搭建了一套完整的“需求文档（语料库）”和“测试用例（评估基准）”，并无情地揭示了现有“声学引擎（TTA模型）”在此任务上的集体“哑火”。短板则在于，它更像是一个出色的“质检报告”和“问题诊断书”，却没有提出新的、能有效解决关系推理缺陷的“引擎设计方案”。

#

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接 `https://github.com/yuhanghe01/Aurelius`。
- 模型权重：论文未提及公开其微调或从头训练后的模型权重，仅评估了已有的公开模型（如TangoFlux）。
- 数据集：论文详细介绍了AudioEventSet和AudioRelSet的构建方法和内容（见附录表I、II），并说明了数据来源（freesound.org, FSD50K）和获取方式，但未提及是否以可下载的打包形式公开整个语料库。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详尽的附录，包括：完整的事件和关系本体表（表I、II）、各基线模型的具体推理设置（表III）、智能体工作流的详细提示词（Planner Prompt）。这些信息极大地帮助了复现实验。
- 论文中引用的开源项目：主要依赖已有的开源TTA模型（如AudioLDM, Tango, TangoFlux等）和音频特征模型（VGGish, PANNs）。

📌 **核心摘要**

1.  解决的问题：现有的文本到音频（TTA）生成模型在处理包含多个音频事件及其复杂关系（如时序、空间、逻辑组合）的提示时表现很差，缺乏系统性的研究基准和高质量数据。
2.  方法核心：提出Aurelius框架，包含：1) AudioEventSet：一个包含110个清晰、独立音频事件的大规模语料库；2) AudioRelSet：一个包含100种音频事件关系（从简单到复杂嵌套）的大规模语料库；3) 一个可扩展的 `<text, audio>` 对生成策略，用于构建训练/测试数据。
3.  与已有方法相比新在哪里：首次系统性地定义了“关系感知TTA”任务，并构建了规模远超前人（如RiTTA）的专用语料库和评估基准。它将音频事件建模与关系建模显式解耦，为研究提供了灵活且可扩展的基础。同时，对现有SOTA模型进行了迄今最全面的诊断。
4.  主要实验结果：在Aurelius基准上，9个主流TTA模型（如AudioLDM, TangoFlux等）在关系感知评估指标（mAMSR）上表现均不佳，最高得分（TangoFlux零样本）仅为1.77%。这证实了当前模型无法有效处理关系推理。进一步实验表明，在Aurelius数据上微调模型（如TangoFlux的mAMSR提升至5.58%）或从头训练能显著提升性能，证明了该基准的有效性。模型在处理“嵌套组合”关系和高“元数”（需涉及多个事件）关系时尤为困难。
5.  实际意义：为音频生成、多模态推理等领域的研究者提供了首个大规模的评测与训练平台，明确了当前技术的关键瓶颈，指明了未来研究需要重点突破的方向（关系建模）。
6.  主要局限性：论文的核心贡献是基准和分析，没有提出一个新的、能直接提升关系推理能力的生成模型架构。其主要价值在于“提出问题”和“建立标准”，而非“解决问题”。

---

