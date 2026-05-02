---
title: "ICLR 2026 - 音频生成 论文列表"
date: 2026-05-02
draft: false
tags: ["音频生成"]
categories: [iclr-2026]
description: "共 13 篇 ICLR 2026 音频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频生成

共 **13** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SCRAPL: Scattering Transform with Random Paths for Machine L](/audio-paper-digest-blog/posts/2026-05-02-scrapl-scattering-transform-with-random-paths-for) | 8.5分 | 前25% |
| 🥈 | [UALM: Unified Audio Language Model for Understanding, Genera](/audio-paper-digest-blog/posts/2026-05-02-ualm-unified-audio-language-model-for) | 8.5分 | 前25% |
| 🥉 | [TangoFlux: Super Fast and Faithful Text to Audio Generation ](/audio-paper-digest-blog/posts/2026-05-02-tangoflux-super-fast-and-faithful-text-to-audio) | 8.5分 | 前25% |
| 4. | [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution](/audio-paper-digest-blog/posts/2026-05-02-flow2gan-hybrid-flow-matching-and-gan-with-multi) | 8.0分 | 前25% |
| 5. | [FlowBind: Efficient Any-to-Any Generation with Bidirectional](/audio-paper-digest-blog/posts/2026-05-02-flowbind-efficient-any-to-any-generation-with) | 8.0分 | 前25% |
| 6. | [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-02-aurelius-relation-aware-text-to-audio-generation) | 8.0分 | 前25% |
| 7. | [Unified Multi-Modal Interactive and Reactive 3D Motion Gener](/audio-paper-digest-blog/posts/2026-05-02-unified-multi-modal-interactive-and-reactive-3d) | 8.0分 | 前25% |
| 8. | [JavisDiT: Joint Audio-Video Diffusion Transformer with Hiera](/audio-paper-digest-blog/posts/2026-05-02-javisdit-joint-audio-video-diffusion-transformer) | 8.0分 | 前25% |
| 9. | [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-02-token-based-audio-inpainting-via-discrete) | 7.5分 | 前25% |
| 10. | [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis wi](/audio-paper-digest-blog/posts/2026-05-02-ac-foley-reference-audio-guided-video-to-audio) | 7.5分 | 前25% |
| 11. | [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-02-smartdj-declarative-audio-editing-with-audio) | 7.5分 | 前25% |
| 12. | [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-02-audiox-a-unified-framework-for-anything-to-audio) | 7.5分 | 前25% |
| 13. | [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensiona](/audio-paper-digest-blog/posts/2026-05-02-prismaudio-decomposed-chain-of-thought-and-multi) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [SCRAPL: Scattering Transform with Random Paths for Machine Learning](/audio-paper-digest-blog/posts/2026-05-02-scrapl-scattering-transform-with-random-paths-for)

🔥 **8.5/10** | 前25% | #音频生成 | #信号处理 | #时频分析

👥 **作者与机构**

- 第一作者：Christopher Mitcheltree（Queen Mary University of London, Centre for Digital Music）
- 通讯作者：未说明（从邮箱推测可能与通讯作者单位一致，但未在文中明确标注）
- 作者列表：Christopher Mitcheltree（Queen Mary University of London, Centre for Digital Music）、Vincent Lostanlen（Nantes Université, LS2N）、Emmanouil Benetos（Queen Mary University of London, Centre for Digital Music）、Mathieu Lagrange（Nantes Université, LS2N）

💡 **毒舌点评**

亮点：本文提出SCRAPL算法，巧妙地利用散射变换的树状结构，通过随机路径采样和定制化优化器（P-Adam， P-SAGA），将计算成本高昂的全树散射变换损失，成功转化为一种高效且无偏的随机近似，为在大规模神经网络训练中使用复杂感知损失扫清了障碍。
短板：该方法本质上是一种采样近似，在最终精度上（如表1所示）依然无法超越计算成本高得多的全树散射变换（JTFS），且在处理信号衰减部分（如表9所示）时表现不佳，表明其对稀疏低频路径的捕捉能力有待加强。

🔗 **开源详情**

-   代码：论文明确提供了代码和Python包的链接：https://christhetree.github.io/scrapl/。
-   模型权重：论文中未明确提及是否公开了训练好的编码器模型权重。
-   数据集：论文使用了公共音频样本集（`samplesfrommars.com`的TR-808样本），并提供了用于生成训练数据的合成器配置。
-   Demo：提供了音频示例供聆听评估。
-   复现材料：附录E详细列出了所有三个实验的超参数和训练细节，提供了配置文件和复现说明。
-   引用的开源项目：论文依赖/引用了`nnAudio`（CQT计算）、`auraloss`（部分损失函数基线）、`pytorch-hessian-eigenthings`（用于θ-IS的海森特征值计算）。

📌 **核心摘要**

1.  要解决的问题：散射变换（尤其是JTFS）作为损失函数能提供与人类感知高度相关的梯度，但其完整的树状结构计算成本极高，内存占用大，严重阻碍了它在神经网络训练中的实际应用。
2.  方法核心：提出SCRAPL算法，其核心是在每次优化迭代中随机采样一条散射路径来近似全树散射变换的梯度。为稳定这一随机近似过程，作者提出了三项关键技术：1) 路径自适应矩估计（P-Adam）；2) 路径级随机平均梯度加速法（P-SAGA）；3) 基于合成器参数重要性的路径采样（θ-importance sampling）。
3.  与已有方法相比新在哪里：与全树计算或路径剪枝（如pGST）不同，SCRAPL进行的是单路径随机采样，并通过专门的优化技术来控制方差。此外，θ-importance sampling是一个创新的初始化启发式方法，能根据任务自适应调整路径采样概率。
4.  主要实验结果：在非确定性合成器（颗粒合成、chirplet合成、TR-808鼓机）的无监督声音匹配任务上，SCRAPL实现了计算效率与精度的良好平衡。例如，在颗粒合成任务中（图1，表1），SCRAPL的参数误差（65.7‰）比全树JTFS（42.4‰）略高，但计算成本仅为JTFS的约1/4（图1横轴），同时远优于多种多尺度谱损失（MSS）方法（误差在195‰-370‰）。
5.  实际意义：使散射变换这类具有强感知先验的损失函数能够用于训练大规模音频模型（如DDSP），特别是在处理非确定性、有时间不对齐的音频合成任务时，提供了优于传统谱损失的梯度信号。
6.  主要局限性：SCRAPL的精度上限受限于全树散射变换；对于信号中能量较低、路径稀疏的成分（如鼓声的衰减部分），其优化效果不佳（表9）；θ-importance sampling启发式方法目前仅适用于可微分信号处理（DDSP）框架。

---

### 🥈 [UALM: Unified Audio Language Model for Understanding, Generation and Reasoning](/audio-paper-digest-blog/posts/2026-05-02-ualm-unified-audio-language-model-for)

🔥 **8.5/10** | 前25% | #音频生成 | #统一音频模型 | #音频大模型 #多模态模型

👥 **作者与机构**

- 第一作者：Jinchuan Tian (卡内基梅隆大学，CMU)
- 通讯作者：未明确指定，但根据作者排序和邮箱，Sang-gil Lee, Zhifeng Kong, Wei Ping (NVIDIA) 为关键联系人。
- 作者列表：Jinchuan Tian (CMU)，Sang-gil Lee (NVIDIA)，Zhifeng Kong (NVIDIA)，Sreyan Ghosh (NVIDIA, 马里兰大学)，Arushi Goel (NVIDIA)，Chao-Han Huck Yang (NVIDIA)，Wenliang Dai (NVIDIA)，Zihan Liu (NVIDIA)，Hanrong Ye (NVIDIA)，Shinji Watanabe (CMU)，Mohammad Shoeybi (NVIDIA)，Bryan Catanzaro (NVIDIA)，Rafael Valle (NVIDIA)，Wei Ping (NVIDIA)。

💡 **毒舌点评**

亮点：这篇论文成功证明了一个基于LLM的单一模型，在经过精心设计的数据混合和训练后，不仅能在音频生成上媲美甚至超越扩散模型，还能同时保持强大的音频理解与文本推理能力，这是音频领域迈向“大一统”模型的重要一步。  
短板：虽然提出了极具前景的“多模态推理”范式（如自我反思），但对其效果的评估几乎完全依赖主观听感测试，缺乏客观、可复现的自动指标来衡量推理链的质量和生成结果的可控性，使得这部分贡献的科学严谨性打了折扣。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/NVIDIA/audio-intelligence/tree/main/UALM
- 模型权重：未提及公开预训练模型权重。
- 数据集：未提及公开其30M规模的文本-音频对生成数据集。
- Demo：提供了在线演示页面：https://research.nvidia.com/labs/adlr/UALM
- 复现材料：在附录中提供了详细的训练配置（学习率、batch size等）、推理超参数以及数据筛选流程，复现信息较为充分。
- 论文中引用的开源项目：依赖的基础模型包括Qwen2.5-7B/1.5B、Audio Flamingo 3的声学编码器、X-codec音频编解码器、BigVGAN-v2判别器等。

📌 **核心摘要**

1. 解决的问题：当前音频领域的“理解”和“生成”任务通常由不同范式（自回归LM vs 扩散模型）的独立模型处理，且“推理”能力局限于文本分析，缺乏能同时高效处理这三者的统一模型，阻碍了通用音频智能的发展。
2. 方法核心：提出统一音频语言模型（UALM），以预训练文本LLM（Qwen2.5-7B）为骨干，通过Encoder-Adapter架构处理音频输入，通过预测离散音频token（使用X-codec的延迟模式）实现音频输出。关键训练技巧包括：大规模数据（30M样本）扩展、分类器自由引导（CFG）的应用、以及采用“丰富描述”作为推理中间表示的多阶段监督微调（SFT）与直接偏好优化（DPO）后训练流程。
3. 创新之处：(1) 首次在单一自回归LM中成功统一音频理解、生成和文本推理，且性能与专用SOTA模型可比；(2) 证明了通过数据扩展和CFG，自回归模型在音频生成上可达到扩散模型的质量；(3) 首次探索了超越文本的、涉及音频理解与生成的多模态推理（如自我反思），并提出了相应的数据构建和训练方法。
4. 主要实验结果：在音频生成任务上，UALM在SongDescriber和AudioCaps数据集上的FD、CLAP等客观指标及主观评分上达到或超过了SOTA扩散模型（如ETTA、TangoFlux）。在音频理解任务（MMAU, MMAR）上，与SOTA模型（如Qwen2.5-Omni）表现相当。在文本推理任务（MMLU, GSM8K, HumanEval）上，仅比基础Qwen2.5-7B有轻微性能下降。多模态推理的主观评估显示，启用推理的UALM-Reason在细节控制、对话和自我反思能力上显著优于基础UALM。

| 模型 | SongDescriber FD↓ | SongDescriber CL↑ | AudioCaps FD↓ | AudioCaps CL↑ |
| :--- | :--- | :--- | :--- | :--- |
| ETTA (SOTA Diffusion) | 95.66 | 0.44 | 80.13 | 0.54 |
| UALM-Gen (Ours) | 74.43 | 0.54 | 75.14 | 0.65 |
| UALM (Unified, Ours) | 83.69 | 0.54 | 65.87 | 0.62 |

![图5：消融实验分析](icassp-img://TsdlOjcQNu/4.png)
图5说明：展示了CFG、DPO和增强VAE对生成质量的逐步提升效果，以及数据规模对性能的关键影响。

5. 实际意义：为构建能够“听懂、创作、思考”的通用音频AI提供了可行的技术路线和范例，有望革新音乐创作、声音设计、智能助手等需要复杂音频交互的应用场景。
6. 主要局限性：(1) 模型的多模态推理能力评估缺乏强大的自动化客观指标；(2) 高质量音频生成仍依赖大规模数据（30M样本）和复杂训练流程；(3) 统一模型在部分纯文本推理基准上相比专用LLM仍有微小损失。

---

### 🥉 [TangoFlux: Super Fast and Faithful Text to Audio Generation with Flow Matching and Clap-Ranked Preference Optimization](/audio-paper-digest-blog/posts/2026-05-02-tangoflux-super-fast-and-faithful-text-to-audio)

🔥 **8.5/10** | 前25% | #音频生成 | #流匹配 | #扩散模型 #模型评估

👥 **作者与机构**

- 第一作者：Chia-Yu Hung（南洋理工大学）
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：Chia-Yu Hung（南洋理工大学）, Navonil Majumder（南洋理工大学）, Zhifeng Kong（NVIDIA）, Ambuj Mehrish（威尼斯卡福斯卡里大学）, Amir Ali Bagherzadeh（Lambda Labs）, Chuan Li（Lambda Labs）, Rafael Valle（NVIDIA）, Bryan Catanzaro（NVIDIA）, Soujanya Poria（南洋理工大学）

💡 **毒舌点评**

亮点：在音频生成这个“缺乏裁判”（无标准答案和可靠奖励模型）的赛道上，CRPO方法巧妙地利用CLAP打分实现了“自我训练、自我提升”的闭环，效果显著且思路优雅。短板：其声称的“超快”优势，很大程度上依赖于50步推理和44.1kHz采样率的设定，与一些专为极低延迟设计的模型（如ConsistencyTTA）的定位不同，其“最快”的宣称存在语境限定。

🔗 **开源详情**

- 代码：论文明确承诺将公开代码（“We will release the code and model weights”），但未提供具体仓库链接。论文中未提及代码链接。
- 模型权重：承诺公开模型权重，未提及具体链接。未提及。
- 数据集：训练使用WavCaps、AudioCaps等公开数据集。CRPO使用的提示池为AudioCaps训练集。未提供专属新数据集链接。
- Demo：提供了模型生成音频样本的在线对比页面：https://tangoflux.github.io/。
- 复现材料：论文附录（A.5节等）提供了完整的训练超参数、硬件配置（预训练阶段）、数据处理细节、评估指标定义、人工评估指南和所有实验设置，复现信息非常充分。
- 论文中引用的开源项目：引用了多个开源模型和工具，包括：Stable Audio Open的VAE、CLAP模型（用于奖励评估）、FLAN-T5文本编码器、FLUX图像生成模型（作为架构灵感）、stable-audio-metrics评估工具、AudioLDM评估工具包、kadtk评估工具等。

📌 **核心摘要**

1.  解决的问题：文本到音频（TTA）生成模型的对齐难题，即如何让生成的音频内容忠实于复杂的文本提示，且缺乏类似LLM对齐中现成的奖励模型和验证机制。
2.  方法核心：提出CLAP-Ranked Preference Optimization (CRPO)。该框架在训练过程中迭代地执行：生成音频、利用CLAP模型对生成的多个音频进行排序以构建偏好数据（赢家-输家对）、使用改进的损失函数（LCRPO = LDPO-FM + LFM）进行偏好优化。
3.  创新点：与静态偏好数据集（如BATON、Audio-Alpaca）不同，CRPO能动态生成并优化偏好数据，实现模型的持续自我改进。损失函数通过添加流匹配损失（LFM）作为正则化，缓解了直接偏好优化（DPO）可能引起的过优化问题。
4.  实验结果：TangoFlux（515M参数）在AudioCaps基准测试上取得SOTA性能。例如，其CLAPscore达到0.480，FDopenl3达到75.1，均优于Tango 2（0.447， 108.4）等强基线。在人工评估中，其在整体质量（OVL）和文本相关性（REL）上的z-score和Elo评分也均为最高。具体对比见下表：

    | 模型 | 参数量 | 推理步骤 | FDopenl3 ↓ | KLpasst ↓ | CLAPscore ↑ | IS ↑ |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | Tango 2 | 866M | 200 | 108.4 | 1.11 | 0.447 | 9.0 |
    | GenAU-Full-L | 1.25B | 100 | 93.2 | 1.37 | 0.447 | 12.0 |
    | TangoFlux-base | 516M | 50 | 80.2 | 1.22 | 0.431 | 11.7 |
    | TangoFlux | 516M | 50 | 75.1 | 1.15 | 0.480 | 12.2 |

5.  实际意义：提供了一个高效、高质量且完全基于开源数据训练的TTA模型，降低了生成长音频（最长30秒）的算力门槛，为创意内容生成、音效设计等应用提供了实用工具。
6.  主要局限性：CRPO的迭代过程增加了训练复杂度和计算成本。CLAP作为代理奖励模型可能引入偏差。此外，模型的“快速”优势与特定推理设置强相关，在极低延迟场景下可能并非最优选择。

---

### 4. [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation](/audio-paper-digest-blog/posts/2026-05-02-flow2gan-hybrid-flow-matching-and-gan-with-multi)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #生成模型 #语音合成

👥 **作者与机构**

- 第一作者：Zengwei Yao (Xiaomi Corp., Beijing, China)
- 通讯作者：Daniel Povey (Xiaomi Corp., Beijing, China, dpovey@xiaomi.com)
- 作者列表：Zengwei Yao (小米公司), Wei Kang (小米公司), Han Zhu (小米公司), Liyong Guo (小米公司), Lingxuan Ye (小米公司), Fangjun Kuang (小米公司), Weiji Zhuang (小米公司), Zhaoqing Li (小米公司), Zhifeng Han (小米公司), Long Lin (小米公司), Daniel Povey (小米公司)

💡 **毒舌点评**

论文创新性地将流匹配的稳定训练与GAN的细节增强能力结合，通过一个设计精巧的两阶段框架，实现了少步高保真音频生成，在质量和效率间取得了优异的平衡，这是一个扎实的工程优化工作。然而，其模型参数量（约79M）显著大于Vocos（13.5M）和RFWave（18.1M）等强基线，在资源敏感的部署场景下可能构成劣势。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/k2-fsa/Flow2GAN。
- 模型权重：论文中提到“the source code is released”，并在线演示页面提供了示例，推测模型权重已随代码发布，但未明确说明是否包含所有实验的检查点。
- 数据集：使用公开数据集LibriTTS、Common Voice等，未提供私有数据。
- Demo：提供在线演示页面：https://flow2gan.github.io。
- 复现材料：在5.1节“Implementation details”和附录A.3提供了详细的模型配置、训练设置（优化器、步数、硬件）。损失函数、网络结构细节明确。
- 论文中引用的开源项目：ConvNeXt（骨干网络）、Vocos（架构灵感）、HiFi-GAN/UnivNet的判别器（MPD, MRD）、ScaledAdam优化器、F5-TTS（用于TTS评估）。

📌 **核心摘要**

1.  问题：现有音频生成方法面临两难：GAN训练不稳定且收敛慢；基于流匹配（扩散模型）的方法生成质量高但推理步骤多、计算开销大。
2.  方法核心：提出Flow2GAN两阶段训练框架。第一阶段：改进流匹配训练，将目标从速度估计重构为端点（干净音频）估计，并引入基于频谱能量的自适应损失缩放以强调静音等感知敏感区域。第二阶段：基于训练好的模型构建少步（1/2/4步）生成器，并通过GAN微调进一步提升细节真实性。
3.  创新点：1) 针对音频特性改进流匹配损失。2) 设计多分辨率网络结构，在多个时频分辨率上处理傅里叶系数。3) 创新的两阶段训练范式，结合流匹配的稳定性和GAN的高效细节生成能力。
4.  实验结果：在Mel谱图和音频token条件生成任务上均达到或超过现有SOTA。例如，在Mel谱图条件LibriTTS测试集上，Flow2GAN 4步模型PESQ达4.484，优于PeriodWave-Turbo（4.434）。在音频token条件（1.5kbps）下，Flow2GAN 2步模型的SMOS（3.04）显著高于RFWave（2.87）。其1步模型在CPU上也能以4.85xRT实时运行。
5.  实际意义：提供了一种在保证生成质量的前提下，大幅降低音频生成推理延迟的实用方案，尤其适用于实时或资源受限的TTS、音频编辑等应用。
6.  局限性：模型参数量相对较大；改进主要针对少步生成，多步生成增益是否依然显著有待探讨；频谱能量缩放依赖于参考谱图的统计信息，存在潜在的泛化风险。

---

### 5. [FlowBind: Efficient Any-to-Any Generation with Bidirectional Flows](/audio-paper-digest-blog/posts/2026-05-02-flowbind-efficient-any-to-any-generation-with)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #跨模态 #多模态模型

👥 **作者与机构**

- 第一作者：Yeonwoo Cha* (KAIST)
- 通讯作者：未说明
- 作者列表：Yeonwoo Cha (KAIST), Semin Kim (KAIST), Jinhyeon Kwon (KAIST), Seunghoon Hong (KAIST)

#

💡 **毒舌点评**

这篇论文用一个相当优雅的设计——引入一个可学习的共享潜空间作为“中央车站”，让每个模态通过自己的可逆流列车与之连接——漂亮地绕过了现有任意到任意生成模型对全配对数据和复杂多阶段训练的依赖，实现了效率上的巨大提升。然而，其核心贡献更偏向于工程框架的整合与效率优化，而非对生成模型基础理论的突破，且评估主要局限于文本、图像、音频三种模态，对“任意到任意”这一宏大目标的验证广度稍显不足。

#

🔗 **开源详情**

- 代码：论文提供了项目页面链接：https://yeonwoo378.github.io/official_flowbind，暗示将开源代码。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：论文中明确说明不使用三元组数据，并列出了使用的三种配对数据集（LAION-COCO, Flickr-30k, AudioCaps v2, VGGSound）。这些数据集均为公开数据集，但论文未提供其具体预处理后的下载链接或说明。
- Demo：未提及。
- 复现材料：论文附录C（实现细节）和D（评估设置）提供了较详细的训练超参数、模型架构描述、评估协议和数据集划分，为复现提供了重要信息。
- 引用的开源项目：依赖了多个预训练模型和工具，包括：EmbeddingGemma (Team et al., 2025)、CLIP (Radford et al., 2021)、Stable-UnCLIP (HuggingFace, 2025)、CLAP (Elizalde et al., 2023)、AudioLDM (Liu et al., 2023)、Gemma3-1B (Team et al., 2025) 用于文本解码器初始化、FLUX.1 (Black Forest Labs, 2024) 用于构建评估数据集。
- 总体情况：论文有明确的开源意愿并提供了必要的复现细节，但具体代码和模型的开放状态在提供文本中未完全明确。

📌 **核心摘要**

1.  解决的问题：现有的基于流的任意到任意多模态生成方法（如CoDi, OmniFlow）存在效率瓶颈：依赖大规模、配对约束严格的数据集；建模联合分布导致计算成本高昂；训练流程复杂，通常需要多阶段优化。
2.  方法核心：提出FlowBind框架。其核心思想是引入一个可学习的共享潜空间，用于捕捉跨模态共性信息。每个模态通过一个独立的、可逆的流模型与这个共享潜空间相连。整个框架（共享潜空间编码器和所有模态的流网络）在单一的流匹配目标下进行端到端联合训练。
3.  与已有方法相比新在哪里：a) 解耦设计：将多模态交互分解为“共享潜空间”与“模态特定流”的连接，避免了直接建模高维联合分布。b) 训练灵活性：每个流网络只需学习其对应模态与共享潜空间的映射，因此天然支持利用任意部分配对数据进行训练，大幅降低了数据要求。c) 训练简化：所有组件通过一个统一的流匹配损失优化，无需CoDi或OmniFlow那样的多阶段、分组件训练流程。d) 推理直接性：推理时，每个模态的流网络既可当编码器（从模态到潜空间），也可当解码器（从潜空间到模态），实现了直接的跨模态翻译。
4.  主要实验结果：在文本、图像、音频的一对一生成（6种任务）和多对多生成任务上进行了评估。关键定量结果如下：
    - 效率对比：参数量仅为OmniFlow的1/6（568M vs 3.2B），训练耗时减少约10倍（48 GPU-hrs vs 480 GPU-hrs*），训练数据用量仅为CoDi的0.15%或OmniFlow的1.79%。
    - 质量对比：在表2（保真度）和表3（对齐度）中，FlowBind在多数一对一生成任务上取得了与基线模型相当或更优的指标。例如，在图像到音频(I→A)任务上，FAD达到2.50（优于CoDi的14.58和OmniFlow的5.67），AIS达到82.89（优于基线）。在表4（多对一）和表5（一对多）中，FlowBind在整合多个模态条件方面表现出更强的平衡性和对齐能力。
    - 消融与分析：实验验证了可学习共享潜空间相比固定文本锚点的优势（表6），并分析了共享潜空间具有更强的跨模态对齐性（表7，CKNNA指标）。
5.  实际意义：为构建高效、灵活、数据需求友好的通用多模态生成模型提供了一种新范式。其低计算和低数据门槛使得在实际场景中训练此类模型成为可能，推动了多模态AI从“专家”向“通才”的发展。
6.  主要局限性：a) 论文中的“任意模态”实验主要集中在文本、图像、音频三种模态，虽然扩展到了3D点云，但未涉及视频等其他重要模态，对普适性的验证有限。b) 在一些任务上（如文本到图像对齐），其性能未超越专门的单任务专家模型（如FLUX.1），表明在极致生成质量上仍有提升空间。c) 共享潜空间的具体可解释性有待进一步探索。

---

### 6. [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-02-aurelius-relation-aware-text-to-audio-generation)

🔥 **8.0/10** | 前25% | #音频生成 | #基准测试 #流匹配 | #基准测试 #流匹配

👥 **作者与机构**

- 第一作者：Yuhang He（微软研究院 Microsoft Research）
- 通讯作者：Yuhang He（微软研究院 Microsoft Research）
- 作者列表：Yuhang He（微软研究院 Microsoft Research），He Liang（未说明），Yash Jain（牛津大学计算机系），Andrew Markham（牛津大学计算机系），Vibhav Vineet（微软研究院 Microsoft Research）

💡 **毒舌点评**

这篇论文的亮点在于它没有追逐提出又一个“全新”的生成模型，而是系统性地构建了大规模、高质量的基准数据集（AudioEventSet, AudioRelSet）和评估体系，直指当前文本到音频生成领域在关系建模上的系统性短板。其短板在于，论文本身提出的AudioRelGen框架核心创新相对有限，更多是基于现有最强模型（如TangoFlux）的微调和评估，缺乏一个能够从根本上解决关系建模难题的、具有强原创性的生成架构。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/yuhanghe01/Aurelius
- 模型权重：论文中未提及公开微调后或专门训练的模型权重。基准测试中使用的是各基线模型的官方公开权重。
- 数据集：`AudioEventSet`和`AudioRelSet`已公开，可通过项目主页或代码仓库获取。论文描述了数据集获取和构建方式。
- Demo：未提及在线演示。
- 复现材料：提供了训练数据集构建策略、评估协议（MSR）、基线模型的推理设置（表III）以及代码。但关键训练超参数（微调/从头训练的学习率、batch size等）未在论文中说明。
- 论文中引用的开源项目：依赖的开源模型/工具包括：PANNs（用于特征提取和微调）、VGGish、Qwen2系列大语言模型（用于智能体实验）、各基准TTA模型的官方代码库（如AudioLDM, TangoFlux等）。数据来源包括freesound.org和FSD50K。

📌 **核心摘要**

1. 问题：现有的文本到音频（TTA）生成模型在处理需要理解音频事件间复杂关系（如空间、时间、逻辑关系）的文本描述时能力严重不足，这限制了TTA技术向更复杂、更真实的应用场景发展。
2. 方法核心：本文提出Aurelius框架，其核心是构建两个大规模、结构化的语料库：包含110个事件类别的`AudioEventSet`和包含100种关系的`AudioRelSet`。通过解耦的事件-关系组合策略，可系统性地生成海量的`<text, audio>`训练对，用于评估和提升模型的“关系感知”生成能力。
3. 创新点：与之前工作（如RiTTA）相比，本文的新在于：a) 将事件和关系语料库规模提升了数量级（事件从~25到110，关系从11到100）；b) 提出了一个更全面、可扩展的关系分类法（包括嵌套组合）；c) 提供了基于解耦策略的、可大规模生成训练数据的流水线；d) 对多种主流TTA模型进行了前所未有的系统性基准测试。
4. 主要实验结果：基准测试了9个主流TTA模型。结果显示，即使是最好的模型（AudioGen， mAMSR=2.22%； TangoFlux， mAMSR=1.77%），其在关系感知指标（Presence, Relation Correctness, Parsimony）上的表现也极差（均低于15%）。微调实验表明，在Aurelius数据集上微调能显著提升模型的关系建模能力（如TangoFlux的mAMSR从1.77%提升至5.58%）。具体关键结果见下表。
| 模型 | 参数量 | FAD ↓ | mAPre (%) | mARel (%) | mAPar (%) | mAMSR (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AudioGen | 1.5B | 7.97 | 11.3 | 2.84 | 9.13 | 2.22 |
| TangoFlux | 576M | 6.01 | 12.38 | 3.34 | 7.28 | 1.77 |
| TangoFlux (微调) | 576M | 1.29 | 28.57 | 8.02 | 20.84 | 5.58 |
表：零样本基准测试（上）与微调实验（下）关键结果对比
5. 实际意义：本工作为“关系感知TTA”这一重要但被忽视的研究方向，首次提供了标准化的大规模基准数据集、评估协议和基线方法，系统地揭示了当前技术的瓶颈，为未来研究指明了方向（如需要设计能显式建模事件-关系依赖的架构）。
6. 主要局限性：a) 论文主要贡献是构建基准和揭示问题，提出的`AudioRelGen`框架本身（解耦生成再混合）并非解决该问题的终极方案；b) 训练数据规模（100小时）虽然远超之前相关工作，但对于真正的大规模生成模型训练可能仍显不足；c) 关系评估依赖的自动检测模型（事件分类器、关系分类器）的性能上限，可能影响评估结果的绝对准确性。

---

### 7. [Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow](/audio-paper-digest-blog/posts/2026-05-02-unified-multi-modal-interactive-and-reactive-3d)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #3D动作生成 #检索增强生成

👥 **作者与机构**

- 第一作者：Prerit Gupta†, Shourya Verma† （†表示同等贡献）
- 通讯作者：未说明
- 作者列表：Prerit Gupta（普渡大学计算机科学系）、Shourya Verma（普渡大学计算机科学系）、Ananth Grama（普渡大学计算机科学系）、Aniket Bera（普渡大学计算机科学系）

💡 **毒舌点评**

这篇论文最大的亮点在于其“统一”的野心——用一个框架搞定交互式和反应式两种截然不同的双人生成任务，还通过LLM分解和RAG引入了相当精细的语义引导，技术整合度很高。但短板也很明显：它本质上是一个生成框架，其成功高度依赖于底层检索库的质量和多样性，一旦遇到描述模糊或罕见的舞蹈风格，RAG模块可能从“助手”变成“累赘”，论文中也承认了这一点。

🔗 **开源详情**

- 代码：论文附录B承诺“Full code for this project along with the trained checkpoints for all tasks will be made open source and publicly available upon paper acceptance.”。当前未提供具体链接。
- 模型权重：如上所述，承诺将提供训练好的检查点。
- 数据集：论文中使用的三个数据集（InterHuman-AS, DD100, MDD）是现有公开或半公开数据集，论文未提及将发布新数据集。MDD是作者团队之前发布。
- Demo：论文未提及在线演示。
- 复现材料：论文提供了非常详细的实现细节（附录D）、模型参数（附录D.5）、损失函数公式（第3.5节）、训练配置（第4节实现细节）以及大量的消融实验结果（附录E、F），为复现提供了充分指导。
- 引用的开源项目/模型：CLIP (Radford et al., 2021), Jukebox (Dhariwal et al., 2020), SMPL (Loper et al., 2015)。
- 总结：论文对未来开源有明确计划和承诺，并提供了丰富的复现信息，但当前代码和权重尚未公开。

📌 **核心摘要**

1.  问题：生成由文本、音乐等多种模态条件驱动的协调、逼真的双人3D动作是一个难题。现有方法要么只处理交互式，要么只处理反应式任务，且通常只支持单一模态，缺乏统一框架。
2.  方法：论文提出了DualFlow，一个基于Rectified Flow的统一框架。其核心是设计了级联的“DualFlow块”，通过掩码机制灵活切换以处理交互式（双分支对称）和反应式（演员分支掩码）任务。引入了为双人动作设计的RAG模块，使用LLM将文本分解为空间关系、身体动作和节奏三个维度进行检索。
3.  创新点：(1) 首个统一交互与反应双人生成的单一框架；(2) 针对双人动作的LLM分解RAG模块；(3) 结合了对比学习的Rectified Flow目标和同步损失。
4.  实验结果：在MDD、InterHuman-AS和DD100数据集上的广泛评估表明，DualFlow在多数指标上达到SOTA。例如，在MDD数据集的交互任务中，DualFlow(Both)的FID为0.415（优于InterGen(Both)的0.426），R-Precision@3为0.513（优于InterGen(Both)的0.302）。推理速度方面，仅需20步即可完成，比需要50步的50-DDIM基线快约2.5倍。
5.  意义：为VR/AR伴侣、社交机器人和游戏AI等需要生成协调多人行为的应用提供了一个更通用、更高效的基础框架。
6.  局限性：性能依赖于检索库质量；在反应式设置中可能出现轻微的身体穿透；长序列生成可能有时序漂移。

---

### 8. [JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization](/audio-paper-digest-blog/posts/2026-05-02-javisdit-joint-audio-video-diffusion-transformer)

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 #Transformer | #多模态模型 #扩散模型

👥 **作者与机构**

- 第一作者：Kai Liu (Zhejiang University, National University of Singapore) (论文中Kai Liu标注为*，表示同等贡献，且为列出的第一个作者)
- 通讯作者：Hao Fei (National University of Singapore) (论文中标注为†)
- 作者列表：
    - Kai Liu (Zhejiang University, National University of Singapore)
    - Wei Li (University of Science and Technology of China)
    - Lai Chen (Zhejiang University)
    - Shengqiong Wu (National University of Singapore)
    - Yanhao Zheng (Zhejiang University)
    - Jiayi Ji (National University of Singapore)
    - Fan Zhou (Zhejiang University)
    - Jiebo Luo (University of Rochester)
    - Ziwei Liu (Nanyang Technological University)
    - Hao Fei (National University of Singapore)
    - Tat-Seng Chua (National University of Singapore)

💡 **毒舌点评**

这篇论文的亮点在于其“分层时空先验估计器”设计得相当巧妙，直指当前联合音视频生成“只知大概、不晓细节”的同步痛点，并为此精心打造了一个更具挑战性的真实世界基准数据集JavisBench。然而，短板也很明显：一个追求实时应用的生成模型，其推理效率在附录表格中暴露无遗（生成4秒视频需30秒），在“生成速度与质量”的权衡上显然更偏向了后者。

🔗 **开源详情**

-   代码：论文中声明将开源，项目主页链接为 `https://javisverse.github.io/JavisDiT-page/`（见摘要），但论文中未直接给出GitHub仓库链接。
-   模型权重：论文中声明将提供模型权重（见摘要和A.3节），但未提供具体下载链接。
-   数据集：JavisBench基准数据集将被公开（见摘要和A.3节），但获取方式需通过项目主页。
-   Demo：论文中未提及在线演示。
-   复现材料：论文提供了极其详细的复现材料，包括：模型架构图（图2, 3）、训练数据来源与规模（788K音频文本对，611K三元组）、三阶段训练策略的具体配置（学习率、epoch、batch size等，见Tab. A2和Section C）、ST-Prior估计器的损失函数细节（公式A1， A2）、负样本构建策略（Section C.2.4， 图A4， A5）、以及在H100上的训练耗时统计（Tab. A2）。
-   引用的开源项目：论文明确使用了以下开源模型/工具：
    -   骨干网络初始化：OpenSora (Zheng et al., 2024) 用于视频分支。
    -   文本编码器：T5 (Raffel et al., 2020)， ImageBind (Girdhar et al., 2023)。
    -   音频编解码器：AudioLDM2 (Liu et al., 2024b)。
    -   视频编解码器：OpenSora的VAE。
    -   训练工具：FunASR用于语音过滤， Qwen系列模型（Yang et al., 2024a; Wang et al., 2024c; Chu et al., 2024）用于数据标注。
    -   过滤工具：PySceneDetect， UniMatch， DBNet。
-   论文中未提及开源计划：论文明确表示将开源，但未提供具体的开源时间表和各组件的独立链接。

📌 **核心摘要**

1.  要解决什么问题：现有联合音频视频生成（JAVG）方法在保证高质量生成的同时，难以实现音视频之间细粒度的时空同步（即“什么声音对应画面中哪个物体的哪个动作”以及“动作何时开始结束”），且现有评估基准和指标过于简单，无法全面评估模型在复杂真实场景下的表现。
2.  方法核心是什么：提出JavisDiT，一个基于扩散Transformer（DiT）的统一框架。核心是设计了分层时空同步先验估计器（HiST-Sypo Estimator），它从文本提示中提取全局语义先验（粗粒度）和细粒度的空间-时间先验（表示事件发生的地点和时机）。这些先验作为条件注入到DiT的跨注意力模块中，引导音视频生成在空间和时间上对齐。
3.  与已有方法相比新在哪里：a) 模型层面：超越了简单的参数共享或单向适配器，通过显式估计并注入“时空先验”实现了更精细的同步引导；b) 基准层面：构建了JavisBench，一个包含10，140个样本、5大维度19个类别、强调多事件同步的复杂场景新基准；c) 评估层面：提出了JavisScore，一个基于滑动窗口和帧级相似度的、对复杂场景更鲁棒的同步性评估指标。
4.  主要实验结果如何：在自建的JavisBench上，JavisDiT在同步性指标（JavisScore）上显著优于各类基线方法（见下表）。在传统的Landscape和AIST++基准上，其视频质量（FVD）和音频质量（FAD）也达到了SOTA水平（例如在Landscape上FVD为94.2，优于MM-LDM的105.0）。
    | 方法类型 | 方法 | FVD↓ | KVD↓ | FAD↓ | JavisScore ↑ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | T2A+A2V | TempoTkn | 539.8 | 7.2 | - | 0.103 |
    | T2V+V2A | FoleyCftr | - | - | 9.1 | 0.151 |
    | T2AV | UniVerse-1 | 194.2 | 0.5 | 8.7 | 0.077 |
    | T2AV | JavisDiT (Ours) | 204.1 | 1.4 | 7.2 | 0.154 |
    表1：在JavisBench上的主要结果（摘自论文Tab. 1），加粗为最佳结果。
5.  实际意义是什么：为音视频内容自动生成提供了更高质量、更同步的解决方案，并推动了该领域评估标准的完善，有助于加速其在电影制作、短视频创作等实际应用中的落地。
6.  主要局限性是什么：a) 效率问题：生成速度较慢，生成一个4秒240P视频需约30秒（附录Tab. A1）；b) 评估范围：主要评估集中在4秒、240P的设置，对更长、更高分辨率场景的泛化能力有待验证；c) 同步精度：如论文Fig. 5所示，在处理同时发生多个声音事件的复杂场景时，同步性仍有挑战。

---

### 9. [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-02-token-based-audio-inpainting-via-discrete)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #音乐生成 #离散表示

👥 **作者与机构**

- 第一作者：Tali Dror, Iftach Shoham (论文中为共同第一作者)
- 通讯作者：未说明
- 作者列表：Tali Dror (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering), Iftach Shoham (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center), Moshe Buchris (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering), Oren Gal (University of Haifa), Haim H. Permuter (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering), Gilad Katz (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center), Eliya Nachmani (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)

#

💡 **毒舌点评**

本文开创性地将离散扩散模型应用于音频修复，将问题转化为token序列补全，并通过精心设计的span masking和导数损失来模拟音频的连续性，实验结果在长空缺修复上显著超越传统方法，这无疑是其最大的亮点。然而，其性能天花板几乎被WavTokenizer这个“黑盒”tokenizer完全锁死，且训练时的“先tokenize再mask”与推理时的“先mask再tokenize”的不匹配可能引入难以量化的误差，这是两个明显的理论与实践短板。

#

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/iftachShoham/AIDD
- 模型权重：论文中未提及是否公开训练好的模型权重。
- 数据集：使用公开数据集MusicNet和MAESTRO，并说明了获取和划分方式。
- Demo：论文中提到“Visit our project page for examples and code”，表明项目页面可能有演示样例，但未直接给出链接。
- 复现材料：提供了详细的超参数表（表8）、训练环境说明（附录B.1）以及实验设置，复现信息非常充分。
- 论文中引用的开源项目：依赖于WavTokenizer (Ji et al., 2024) 和 UniCodec (Jiang et al., 2025) 两个开源音频tokenizer。模型架构基于Diffusion Transformer (DiT)。

📌 **核心摘要**

1. 要解决什么问题：音频修复任务，即恢复音频信号中缺失或损坏的片段。现有基于连续扩散的方法在修复长时隙（如数百毫秒）时，性能和语义连贯性会显著下降。
2. 方法核心是什么：提出了一种名为AIDD（Audio Inpainting via Discrete Diffusion）的新框架。核心是先使用预训练的WavTokenizer将音频压缩为离散token序列，然后在一个纯离散的扩散过程中，通过一个Diffusion Transformer (DiT) 模型学习预测被掩码的token，最后将生成的token解码回音频波形。
3. 与已有方法相比新在哪里：这是首个将离散扩散模型应用于token化音频修复的工作。与在原始波形或频谱图上操作的连续扩散模型不同，AIDD在紧凑的离散潜在空间中进行，旨在更好地捕捉高层语义结构并避免波形建模的挑战。此外，论文引入了span-based masking（结构化掩码）和derivative-based regularization loss（基于导数的平滑性约束）两项新的训练技术。
4. 主要实验结果如何：在MusicNet和MAESTRO数据集上进行了评估。对于150ms-750ms的空缺，在FAD、LSD、ODG等客观指标上，AIDD在多数情况下优于或持平于包括CQT-Diff+在内的基线方法。例如，在MusicNet 300ms空缺下，AIDD的FAD为3.549，优于CQT-Diff+的4.652。在MAESTRO 375ms空缺下，AIDD的ODG（-2.303）显著优于GACELA（-3.232）。主观MOS测试也显示AIDD得分（3.64）高于GACELA和CQT-Diff+（均为3.51）。
5. 实际意义是什么：该工作为长时音频修复提供了新的解决方案，在音乐遗产数字化、损坏录音修复、音频数据填补等场景具有应用潜力。更重要的是，它探索并验证了“离散token+扩散模型”范式在音频生成任务中的可行性，为该领域开辟了新的研究方向。
6. 主要局限性是什么：(1) 性能上限严重依赖所使用的tokenizer（WavTokenizer）的重建质量和带宽（24kHz）。(2) 存在训练-推理不匹配：训练时对完整音频进行掩码，而推理时是对已有空缺的音频进行掩码和tokenize。(3) 所有测试音频均被下采样至24kHz以适应tokenizer，这可能损失高频信息。

#

---

### 10. [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis with Acoustic Transfer](/audio-paper-digest-blog/posts/2026-05-02-ac-foley-reference-audio-guided-video-to-audio)

✅ **7.5/10** | 前25% | #音频生成 | #流匹配 | #多模态模型 #音视频

👥 **作者与机构**

- 第一作者：Pengjun Fang（The Hong Kong University of Science and Technology）
- 通讯作者：Harry Yang（The Hong Kong University of Science and Technology，标注有邮箱B）
- 作者列表：Pengjun Fang（香港科技大学）、Yingqing He（香港科技大学）、Yazhou Xing（香港科技大学）、Qifeng Chen（香港科技大学，标注有邮箱B）、Ser-Nam Lim（University of Central Florida，标注有邮箱B）、Harry Yang（香港科技大学，标注有邮箱B）

💡 **毒舌点评**

亮点：巧妙地利用“参考音频”作为控制信号，绕过了文本描述的语义模糊和粒度不足问题，实现了真正细粒度（如不同狗叫）和创意性（如音色迁移）的音效生成，两阶段训练策略的设计也颇具巧思。短板：核心生成模型（多模态Transformer+Flow Matching）是已有框架的整合，原创性集中在“控制方式”和“训练技巧”上；论文坦诚的指出，在处理复杂多声源场景时仍显力不从心，这限制了其在真实世界复杂声景中的即刻应用。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：未提及公开专用数据集。所使用的VGGSound、AudioCaps、WavCaps均为已有公开数据集。
- Demo：未提及。
- 复现材料：提供了极其详细的训练细节（附录A）、网络架构细节（附录B）以及方法描述，为复现奠定了坚实基础。
- 引用的开源项目：论文引用了多个开源工具或模型，包括：CLIP、Synchformer、BigVGAN（声码器）、ImageBind（用于数据筛选）、AdamW优化器、EMA技术等。
- 开源计划：论文中未提及开源计划。

📌 **核心摘要**

1. 要解决什么问题：现有视频到音频（V2A）生成方法主要依赖文本提示，存在两大瓶颈：训练数据中的语义粒度模糊（如将不同的狗叫统称为“狗叫”）和文本难以描述微声学特征（如“金属碰撞声”无法区分锤击和链条声），导致无法进行精细的声音合成控制。
2. 方法核心是什么：提出AC-Foley，一个参考音频引导的V2A生成框架。它直接利用一段参考音频的声学特征（而非语义）作为条件，结合视频和文本信息，通过多模态Transformer和条件流匹配模型，生成与视频同步且具有目标音色特征的声音。
3. 与已有方法相比新在哪里：a) 控制维度升级：从文本/视频语义控制升级为直接的声学特征控制，实现细粒度合成和音色迁移。b) 训练策略创新：采用两阶段训练（重叠与非重叠条件学习），使模型既能从对齐样本中学习声学特征，又能泛化到非对齐的时序上下文中，避免简单复制。c) 零样本生成能力：通过参考音频条件，能生成训练集中未见过的声音类别（如带消音器的枪声）。
4. 主要实验结果如何：在VGGSound测试集上，AC-Foley在音频条件控制设置下，所有指标均优于基线（如MMAudio+CLAP）。例如，其FDPaSST为56.00（优于基线70.80），MCD为11.37（优于基线14.63）。在无音频条件的纯V2A任务中，AC-Foley（w/o audio）也达到或接近SOTA水平（FDPaSST 64.90）。在音色迁移任务（Greatest Hits数据集）上，即使未在此数据集训练，AC-Foley的MCD（3.39）也显著优于CondFoley（4.18）。人工评估显示，在声学保真度上，83.5%的参与者认为AC-Foley生成的音频更接近真实音频。
5. 实际意义是什么：为影视、游戏、动画等内容创作者提供了强大的音效设计工具，能够根据示例音频快速生成、修改或替换音轨中的声音元素，极大提升了创作灵活性和效率。
6. 主要局限性是什么：当输入视频和参考音频包含多个重叠声源（如对话、环境声、动作声混合）时，模型难以将特定声音元素与对应的视觉事件精确对齐。参考音频与视频内容节奏差异过大时，生成质量会下降。

---

### 11. [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-02-smartdj-declarative-audio-editing-with-audio)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #大语言模型 #空间音频

👥 **作者与机构**

- 第一作者：Zitong Lan（宾夕法尼亚大学WAVES实验室）
- 通讯作者：未说明
- 作者列表：Zitong Lan（宾夕法尼亚大学WAVES实验室）、Yiduo Hao（宾夕法尼亚大学）、Mingmin Zhao（宾夕法尼亚大学）

💡 **毒舌点评**

论文最大的亮点是巧妙地将“声明式”这一更高阶的交互范式引入音频编辑，通过ALM作为“导演”将抽象指令拆解为具体“剧本”（原子操作），再由LDM作为“演员”执行，思路清晰且解决了实际痛点。然而，其评估完全依赖于一个精心设计但规模有限的合成数据集（240k训练对），这种“温室里的花朵”能否在真实世界杂乱、多变、充满语义歧义的音频场景中保持同样表现，要打一个大大的问号。

🔗 **开源详情**

- 代码：论文中提供了项目主页链接（https://waves.seas.upenn.edu/projects/smartdj），并声明代码将在论文被接收后公开。论文中未提及具体的代码仓库链接（如GitHub）。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：论文中详细描述了数据合成管道，并声明将公开合成的数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文附录中包含了极其详细的训练细节、超参数配置、数据合成提示词、基线实现细节等，复现材料充分。
- 论文中引用的开源项目：PyRoomAcoustics（声学模拟）、Audio Flamingo 2（ALM基础）、Stable-Audio-Open（部分基线生成器）、Diffusion Transformer架构等。

📌 **核心摘要**

1.  问题：现有的音频编辑方法依赖于模板化的低级指令（如“添加鸟鸣”），无法处理用户更高级、更抽象的“声明式”指令（如“让这个声音像晴朗的森林”），且绝大多数仅支持单声道音频，缺乏空间沉浸感。
2.  核心方法：提出SmartDJ框架，由两个核心组件构成：a) 音频语言模型（ALM）作为规划器，理解原始音频和声明式指令，将其分解为一系列原子编辑操作序列（如添加、移除、调整音量、改变方向等）；b) 潜在扩散模型（LDM）作为编辑器，按顺序执行这些原子操作，对立体声音频进行精确编辑。
3.  创新点：a) 首次实现支持声明式指令的立体声音频编辑；b) 设计了一个可扩展的数据合成管道，利用LLM生成指令和操作，并基于规则化音频合成生成成对的训练数据。
4.  主要实验结果：在自建的合成测试集上，SmartDJ在多项客观指标（FD、FAD、KL、LSD、CLAP）和主观用户研究中均显著优于多种基线方法（包括端到端Audit、SDEdit、AudioEditor等）。例如，在声明式编辑任务上，SmartDJ的CLAP分数（0.21）和LSD（1.40）均优于最强基线（CLAP 0.20, LSD 1.49）。用户研究显示，在音频质量和指令对齐度上，SmartDJ的胜率均超过87%。
5.  实际意义：该框架有望降低音频创作和编辑的门槛，使非专业用户能通过自然语言快速实现复杂的音频场景转换，对VR/AR、游戏、影视后期制作等领域具有应用价值。
6.  主要局限性：a) 训练和评估完全依赖于合成数据，其与真实世界录音在复杂性、噪声和语义丰富度上可能存在差距；b) 多步顺序编辑累积误差的可能性未深入探讨（论文通过“往返编辑”实验部分缓解）；c) 系统需要ALM和LDM分别训练和推理，整体延迟（约13秒）高于端到端方法。

---

### 12. [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-02-audiox-a-unified-framework-for-anything-to-audio)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #音乐生成 #多模态模型

👥 **作者与机构**

- 第一作者：Zeyue Tian（香港科技大学）
- 通讯作者：Wei Xue†（香港科技大学），Yike Guo†（香港科技大学）
- 作者列表：Zeyue Tian（香港科技大学），Zhaoyang Liu（香港科技大学），Yizhu Jin（香港科技大学），Ruibin Yuan（香港科技大学），Liumeng Xue（香港科技大学），Xu Tan（独立研究者），Qifeng Chen（香港科技大学），Wei Xue†（香港科技大学），Yike Guo†（香港科技大学）

💡 **毒舌点评**

该工作在“大力出奇迹”的道路上又进了一步：用精心设计的结构化标注管线喂出了七百万条高质量音频-文本对，配合一个设计得当的多模态融合模块，最终在各大榜单上刷出了SOTA，这证明了数据工程与模型工程的双重重要性。然而，论文中将指令跟随能力归因于MAF模块和数据集的论断，部分证据（如T2A-bench的评估）严重依赖外部强大的多模态大模型作为标注器和裁判，这引发了评估闭环是否过于依赖商业API的疑问。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接（https://zeyuet.github.io/AudioX/），并承诺将开源。
- 模型权重：论文提及将开源预训练模型检查点。
- 数据集：论文承诺将完整开源IF-caps数据集。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文提供了详细的模型架构、训练超参数、数据集统计信息、评估指标定义和基准测试细节（见附录）。附录中进一步详述了数据标注样例和评估流程。
- 引用的开源项目：CLIP (Radford et al., 2021), Synchformer (Iashin et al., 2024), T5 (Raffel et al., 2020), Stable Audio Open (Evans et al., 2024b), Gemini 2.5 Pro (Google), Qwen2-Audio (Chu et al., 2024)。

📌 **核心摘要**

1.  问题：当前音频生成模型大多为单模态输入（如仅文本或仅视频）、单任务输出（如仅音效或仅音乐）的“专家”模型，缺乏一个能灵活组合多种控制信号并生成高质量音频/音乐的统一框架，且高质量的多模态训练数据稀缺。
2.  方法核心：提出AudioX统一框架，以扩散Transformer（DiT）为骨干。核心创新是设计了一个轻量级的多模态自适应融合（MAF）模块，用于在条件信号输入DiT前，对来自文本、视频和音频的特征进行门控、交叉注意力聚合和自注意力精炼，以增强跨模态对齐和融合。
3.  新意与对比：相较于已有方法，AudioX的新意在于：(1) 架构上，通过MAF模块在统一框架内处理任意模态组合的条件输入；(2) 数据上，设计了结构化标注与增强管线，构建了包含超700万样本的IF-caps大规模细粒度数据集。
4.  实验结果：在多个任务（T2A， V2A， T2M， V2M等）和基准上，AudioX达到或超过SOTA水平。关键结果见下表（数据摘自论文Table 1）：
    | 任务 | 数据集 | 方法 | KL ↓ | IS ↑ | FAD ↓ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | T2A | VGGSound | AudioX | 1.74 | 19.58 | 1.33 |
    | | | MMAudio | 2.17 | 17.83 | 2.50 |
    | | | Stable Audio Open | 2.36 | 14.45 | 2.60 |
    | T2M | MusicCaps | AudioX | 0.96 | 3.55 | 1.53 |
    | | | TangoMusic | 1.13 | 2.86 | 1.88 |
    | | | Stable Audio Open | 1.51 | 2.94 | 3.23 |
    | V2M | V2M-bench | AudioX | 0.70 | 1.37 | 1.67 |
    | | | VidMuse | 0.73 | 1.32 | 2.46 |
    在新提出的指令跟随基准T2A-bench上，AudioX大幅领先（如Ord-acc: 23.6 vs 次高19.8）。
5.  实际意义：该框架和数据集为需要多模态灵活控制音频生成的应用（如视频后期制作、游戏开发、辅助创作）提供了强大的基础工具，其数据标注方法对构建多模态数据集有借鉴意义。
6.  主要局限：论文未明确讨论模型的计算效率与实时性；统一框架的参数量（2.4B）和训练成本（约4k GPU小时）可能限制其在资源受限场景的应用；其“Anything-to-Audio”的泛化能力主要在文本、视频、音频三种模态内验证，对于更异质模态（如传感器数据、图像）的处理能力未探讨。

---

### 13. [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensional Rewards for Video-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-02-prismaudio-decomposed-chain-of-thought-and-multi)

✅ **7.0/10** | 前25% | #音频生成 | #强化学习 | #扩散模型 #多模态模型

👥 **作者与机构**

- 第一作者：Huadai Liu（香港科技大学、阿里巴巴集团通义实验室）
- 通讯作者：Wei Xue（香港科技大学）
- 作者列表：Huadai Liu（香港科技大学、阿里巴巴集团通义实验室）、Kaicheng Luo（阿里巴巴集团通义实验室）、Wen Wang（阿里巴巴集团通义实验室）、Qian Chen（阿里巴巴集团通义实验室）、Peiwen Sun（香港中文大学）、Rongjie Huang（香港中文大学）、Xiangang Li（阿里巴巴集团通义实验室）、Jieping Ye（阿里巴巴集团通义实验室）、Wei Xue（香港科技大学）

#

💡 **毒舌点评**

亮点在于将“分解的链式思维”与“多维强化学习奖励”进行耦合的框架设计思路，清晰且有效，为解决多目标生成中的“目标纠缠”提供了新颖且可解释的方案。短板是，其提出的全新AudioCanvas基准数据集虽然是必要的，但作为“裁判员”的同时，自己也是“运动员”，这使得核心结论的公信力部分依赖于数据集构建的客观性，且报告的部分指标（如在某些空间或美学指标上超越了真实音频）需要更谨慎的解释。

#

🔗 **开源详情**

- 代码：论文承诺将开源完整训练脚本和配置文件，但当前未提供代码仓库链接。
- 模型权重：论文承诺将公开所有模型权重（音频基础模型、微调后的VideoLLaMA2等），但未提供下载地址。
- 数据集：论文承诺将公开AudioCanvas基准数据集，但未说明具体获取方式。
- Demo：论文未提及在线演示。
- 复现材料：附录D提供了极其详细的实现细节，包括训练各阶段的GPU型号、数量、时长、批大小、学习率等超参数，以及CoT生成和微调的提示词模板，复现信息非常充分。
- 论文中引用的开源项目：VideoPrism, T5-Gemma, VideoLLaMA2, Gemini 2.5 Pro（API）, MS-CLAP, Synchformer, Meta Audiobox Aesthetics, StereoCRW, Stability AI的音频工具。

📌 **核心摘要**

1.  要解决什么问题：视频到音频生成需要同时优化语义一致性、时间同步性、美学质量和空间准确性四个维度，但现有方法使用单一损失函数导致目标相互纠缠，且缺乏与人类偏好对齐。
2.  方法核心是什么：提出PrismAudio框架，首次将强化学习引入视频到音频生成。其核心是将生成前的推理过程分解为四个专门的链式思维模块（语义、时间、美学、空间），并为每个模块设计对应的奖励函数，通过多维强化学习进行联合优化。
3.  与已有方法相比新在哪里：1) 首次在V2A中使用分解式CoT与多维RL奖励对应，解决目标纠缠并提升可解释性。2) 提出Fast-GRPO算法，通过随机窗口的混合ODE-SDE采样，在保证性能的同时大幅降低RL训练开销。3) 构建了更严谨、场景更多样的AudioCanvas基准数据集。
4.  主要实验结果如何：在自建的AudioCanvas基准和VGGSound测试集上，PrismAudio在所有四个感知维度上均达到了SOTA水平。例如，在AudioCanvas上，与基线ThinkSound相比，语义对齐度（CLAP）从0.48提升至0.52，时间同步性（DeSync）从0.80大幅改善至0.36，美学质量（CE）从4.10提升至4.26，空间误差（CRW）从22.82降低至12.87。消融实验证明分解式CoT优于单体式CoT，多维度奖励优于单维度奖励。
5.  实际意义是什么：为生成高质量、可控且与人类感知对齐的视频配音提供了一个新范式。其分解式推理框架和高效RL训练方法对其他多模态生成任务也有参考价值。
6.  主要局限性是什么：框架复杂度较高，依赖于多个预训练模型（如VideoLLaMA2、各种奖励模型）。实验中报告的部分客观指标（如空间/美学）超越了真实音频，这可能源于对不完美代理指标的过度优化，其实际感知质量需结合主观评估看。新提出的AudioCanvas基准的有效性和广泛接受度有待社区检验。

---

