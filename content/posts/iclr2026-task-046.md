---
title: "ICLR 2026 - 音频生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音频生成"]
categories: [iclr-2026]
description: "共 11 篇 ICLR 2026 音频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频生成

共 **11** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TangoFlux: Super Fast and Faithful Text to Audio Generation ](/audio-paper-digest-blog/posts/2026-05-03-tangoflux-super-fast-and-faithful-text-to-audio) | 8.5分 | 前25% |
| 🥈 | [Syncphony: Synchronized Audio-to-Video Generation with Diffu](/audio-paper-digest-blog/posts/2026-05-03-syncphony-synchronized-audio-to-video-generation) | 8.5分 | 前25% |
| 🥉 | [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution](/audio-paper-digest-blog/posts/2026-05-03-flow2gan-hybrid-flow-matching-and-gan-with-multi) | 8.0分 | 前25% |
| 4. | [SCRAPL: Scattering Transform with Random Paths for Machine L](/audio-paper-digest-blog/posts/2026-05-03-scrapl-scattering-transform-with-random-paths-for) | 8.0分 | 前25% |
| 5. | [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-audiox-a-unified-framework-for-anything-to-audio) | 8.0分 | 前25% |
| 6. | [DiVeQ: Differentiable Vector Quantization Using the Reparame](/audio-paper-digest-blog/posts/2026-05-03-diveq-differentiable-vector-quantization-using) | 7.5分 | 前25% |
| 7. | [JavisDiT: Joint Audio-Video Diffusion Transformer with Hiera](/audio-paper-digest-blog/posts/2026-05-03-javisdit-joint-audio-video-diffusion-transformer) | 7.5分 | 前25% |
| 8. | [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-03-aurelius-relation-aware-text-to-audio-generation) | 7.0分 | 前25% |
| 9. | [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensiona](/audio-paper-digest-blog/posts/2026-05-03-prismaudio-decomposed-chain-of-thought-and-multi) | 7.0分 | 前50% |
| 10. | [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-03-smartdj-declarative-audio-editing-with-audio) | 6.5分 | 前25% |
| 11. | [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis wi](/audio-paper-digest-blog/posts/2026-05-03-ac-foley-reference-audio-guided-video-to-audio) | 6.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [TangoFlux: Super Fast and Faithful Text to Audio Generation with Flow Matching and Clap-Ranked Preference Optimization](/audio-paper-digest-blog/posts/2026-05-03-tangoflux-super-fast-and-faithful-text-to-audio)

🔥 **8.5/10** | 前25% | #音频生成 | #流匹配 | #预训练 #模型评估

👥 **作者与机构**

- 第一作者：Chia-Yu Hung (Nanyang Technological University (NTU))
- 通讯作者：Navonil Majumder (NTU), Soujanya Poria (NTU) （根据邮箱对应关系推断，论文未明确标注“通讯作者”）
- 作者列表：Chia-Yu Hung (NTU), Navonil Majumder (NTU), Zhifeng Kong (NVIDIA), Ambuj Mehrish (Ca’ Foscari University of Venice), Amir Ali Bagherzadeh (Lambda Labs), Chuan Li (Lambda Labs), Rafael Valle (NVIDIA), Bryan Catanzaro (NVIDIA), Soujanya Poria (NTU)

#

💡 **毒舌点评**

亮点：CRPO框架的“在线迭代生成偏好数据”思路巧妙且有效，摆脱了对昂贵人工标注或静态数据集的依赖，是解决生成模型对齐数据瓶颈的一个优雅方案，且最终模型在速度与质量上实现了极佳平衡。短板：虽然性能优越，但核心创新“CLAP作为奖励模型”依赖于CLAP模型本身的对齐能力，其潜在偏差可能传递到最终模型；此外，人类评估虽显示优势，但测试集规模相对有限，对极端复杂或长尾场景的泛化能力仍需观察。

#

🔗 **开源详情**

*   代码：论文中提及将公开代码，但未在文中提供具体仓库链接。项目主页为 `https://tangoflux.github.io/`。
*   模型权重：论文中承诺将公开模型权重，但未在文中提供具体下载链接。
*   数据集：使用完全公开的开源数据集：WavCaps和AudioCaps训练/测试集。论文未提及会发布新的数据集。
*   Demo：项目主页 `https://tangoflux.github.io/` 应包含模型生成的音频样本供比较。
*   复现材料：论文在附录中提供了详细的训练细节（学习率、优化器、步数等）、评估指标定义、人类评估指南与标注界面截图、以及关键超参数设置。
*   论文中引用的开源项目：Stable Audio Open VAE， FLAN-T5文本编码器， CLAP模型（用于奖励评估）。

📌 **核心摘要**

1.  要解决什么问题：文本到音频（TTA）生成模型在生成符合复杂文本描述（多事件、特定时序）的音频时存在保真度和对齐度不足的问题，且该领域缺乏像大语言模型那样成熟的、可自动构建偏好对进行对齐的工具或数据。
2.  方法核心是什么：提出了CLAP-Ranked Preference Optimization（CRPO）框架。该框架以预训练的TTA模型为起点，迭代进行三个步骤：a) 使用当前模型为每个文本提示生成多个音频样本；b) 利用CLAP模型作为代理奖励模型，对这些样本进行排名，构建“好-坏”偏好对数据集；c) 使用改进的DPO损失（LCRPO）对模型进行偏好优化。该过程循环进行，实现模型的自我改进。
3.  与已有方法相比新在哪里：a) 数据构建：相比依赖静态、人工标注的偏好数据集（如BATON, Audio-Alpaca），CRPO能在线、动态地生成与当前模型能力匹配的偏好数据，避免了数据静态化和分布偏移问题。b) 优化目标：在标准的DPO-FM损失（LDPO-FM）基础上，显式添加了“优胜样本”的流匹配损失（LFM）作为正则项，形成LCRPO损失，缓解了偏好优化中可能出现的“优胜样本损失也上升”的过优化问题。
4.  主要实验结果如何：
    *   性能：TANGOFLUX（515M参数）在多项客观指标（CLAPscore, FDopenl3, KLpasst等）上超越了Tango2, Stable Audio Open, AudioX等基线模型。例如，在AudioCaps测试集上，其CLAPscore达到0.480（高于Tango2的0.447），FDopenl3降至75.1（低于AudioX的77.6）。人类评估显示其在整体质量（OVL）和相关性（REL）上均获得最高z分数（0.2486， 0.6919）和Elo分数（1501， 1628）。
    *   效率：在A40 GPU上，生成30秒44.1kHz音频仅需3.7秒（50步推理），远快于需要数百步去噪的扩散模型（如AudioLDM 2的24.8秒）。
    *   消融实验：证明了CRPO生成的动态数据集优于静态数据集（BATON, Audio-Alpaca）；在线生成数据（CRPO）优于离线训练（性能更快饱和并下降）；LCRPO损失优于纯LDPO-FM损失。

5.  实际意义是什么：提供了一个高效、高质量且完全基于开源数据的文本到音频生成解决方案。其核心CRPO框架为其他缺乏自动对齐工具的生成模态（如视频、3D）提供了有价值的参考思路。快速推理能力使其更适用于实时或交互式应用场景。
6.  主要局限性是什么：a) 对齐质量上限可能受限于作为奖励模型的CLAP模型的性能。b) 人类评估仅在50个精心设计的复杂提示上进行，其结论在更多样化或日常提示上的普适性有待验证。c) 论文聚焦于音频生成，未探讨与语言模型或视觉模型的更广泛集成。

---

### 🥈 [Syncphony: Synchronized Audio-to-Video Generation with Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-03-syncphony-synchronized-audio-to-video-generation)

🔥 **8.5/10** | 前25% | #音频生成 | #扩散模型 | #多模态模型 #流匹配

👥 **作者与机构**

- 第一作者：Jibin Song (Yonsei University, Department of Artificial Intelligence; CineLingo)
- 通讯作者：未说明
- 作者列表：Jibin Song (Yonsei University, CineLingo)， Mingi Kwon (Yonsei University, CineLingo)， Jaeseok Jeong (Yonsei University, CineLingo)， Youngjung Uh (Yonsei University, CineLingo)

#

💡 **毒舌点评**

论文核心在于“用好音频时序信号”而非“发明新架构”，其运动感知损失和音频同步引导两个技巧对解决实际同步问题确实有效，实验也做得扎实。然而，模型高度依赖预训练的视频骨干（Pyramid Flow），并且主要验证集中在动作清晰的特定数据集（如敲击声），在更广泛、更复杂的音视频场景下的泛化能力有待观察。

#

🔗 **开源详情**

- 代码：论文中承诺将公开代码（“we will release our code”），但未提供具体仓库链接。
- 模型权重：论文中承诺将公开训练好的模型（“we will release... trained models”），但未提供具体下载链接。
- 数据集：论文中使用的是公开数据集AVSync15和TheGreatestHits，并提供了获取方式的引用。
- Demo：未提及提供在线演示。项目主页（https://jibin86.github.io/syncphony_project_page）可能包含视频样本。
- 复现材料：论文在附录中提供了详细的实现细节、训练设置（硬件、时长、batch size）、超参数（CFG、ASG强度）、评估流程（包括CycleSync算法伪代码）和用户研究设计，复现信息较为充分。
- 论文中引用的开源项目：Pyramid Flow (视频骨干), DenseAV (音频编码器), V-AURA (用于CycleSync的V2A模型), CLIP, ImageBind等。

📌 **核心摘要**

1.  要解决的问题：现有的文本到视频或图像到视频生成模型难以精确控制动作的时间点；而现有的音频到视频（A2V）模型由于间接的条件注入机制或有限的时序建模能力，难以实现细粒度的音频-视频同步。
2.  方法核心：提出Syncphony模型，基于预训练的视频扩散变换器（DiT）骨干，通过以下关键技术实现同步：(1) 运动感知损失：在训练时，给相邻帧间运动幅度大的区域赋予更高的损失权重，强化模型对与音频相关的动作时序的学习。(2) 音频同步引导：在推理时，构建一个禁用了音频交叉注意力层的“离同步模型”，用其预测与完整模型预测的差值作为引导信号，增强音频对运动的驱动力。
3.  与已有方法相比新在哪里：相比之前通过幅度调制或投影到文本空间的间接方式，本文方法通过交叉注意力直接、显式地将音频特征注入视频生成过程。相比在图像骨干上添加时序层的方案，本文利用强大的预训练视频骨干保证了高分辨率和时序连贯性。此外，提出了新的同步评估指标 CycleSync。
4.  主要实验结果：在AVSync15和TheGreatestHits两个数据集上，Syncphony在同步准确度（CycleSync）和视觉质量（FID/FVD）上均优于现有方法。例如，在TheGreatestHits上，Syncphony的CycleSync得分为16.18±1.26，远高于最强基线AVSyncD的9.89±0.84。用户研究也表明，Syncphony在同步性、图像质量和帧间一致性上显著优于AVSyncD。
5.  实际意义：该工作为生成与音频精确同步的高质量视频提供了有效方案，有望应用于影视特效、音乐可视化、游戏动画等内容创作领域，提升多媒体内容的真实感和表现力。
6.  主要局限性：模型依赖于特定的预训练视频骨干和音频编码器（DenseAV）；运动感知损失基于真实运动幅度而非直接与音频信号关联，可能在复杂场景中引入非音频相关运动的干扰；CycleSync指标依赖于视频到音频模型的重建质量。

---

### 🥉 [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-flow2gan-hybrid-flow-matching-and-gan-with-multi)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #生成模型 #实时处理

👥 **作者与机构**

- 第一作者：Zengwei Yao（Xiaomi Corp.）
- 通讯作者：未说明（论文提供邮箱为 dpovey@xiaomi.com，属作者之一 Daniel Povey）
- 作者列表：Zengwei Yao（Xiaomi Corp.）、Wei Kang（Xiaomi Corp.）、Han Zhu（Xiaomi Corp.）、Liyong Guo（Xiaomi Corp.）、Lingxuan Ye（Xiaomi Corp.）、Fangjun Kuang（Xiaomi Corp.）、Weiji Zhuang（Xiaomi Corp.）、Zhaoqing Li（Xiaomi Corp.）、Zhifeng Han（Xiaomi Corp.）、Long Lin（Xiaomi Corp.）、Daniel Povey（Xiaomi Corp.）

#

💡 **毒舌点评**

亮点在于两阶段框架设计巧妙：先用改进的Flow Matching打好生成能力的“底子”，再通过GAN微调实现“锦上添花”的细节增强和少步推理，有效兼顾了训练稳定性和生成质量。短板则是模型参数量（78.9M）相比纯GAN方法（如Vocos 13.5M）或某些流匹配方法（如RFWave 18.1M）偏大，在移动端或边缘部署可能面临挑战。

#

🔗 **开源详情**

- 代码：提供完整代码仓库链接 `https://github.com/k2-fsa/Flow2GAN`。
- 模型权重：提供了预训练模型的在线演示页面 `https://flow2gan.github.io`，并暗示代码仓库中包含权重（“source code and pretrained checkpoints are publicly available”）。
- 数据集：使用公开数据集（LibriTTS, Common Voice等），未提及提供自定义或专有数据集。
- Demo：提供了在线演示示例页面。
- 复现材料：提供了极其详细的模型配置（附录表10）、训练步数、硬件规格（H20 GPU）、超参数（优化器、损失函数细节），复现指南非常清晰。
- 论文中引用的开源项目：Vocos (Siuzdak, 2023) 作为网络结构的灵感来源；ConvNeXt (Liu et al., 2022b) 作为基础模块；HiFi-GAN的MPD和UnivNet的MRD判别器用于GAN微调阶段。

📌 **核心摘要**

1. 问题：现有音频生成方法中，GAN训练不稳定且易模式崩溃，而基于Flow Matching的扩散方法虽然训练稳定但推理需要多步采样，计算开销大。
2. 方法核心：提出Flow2GAN两阶段训练框架：第一阶段使用针对音频特性改进的Flow Matching进行训练，以获得鲁棒的生成能力；第二阶段基于预训练模型构建少步（如1、2、4步）生成器，并通过GAN微调进一步提升音频细节和保真度。
3. 新意：改进的Flow Matching包括将目标重构为端点估计（预测x1而非速度v），避免了静音区域估计难度；引入频谱能量自适应损失缩放，强调感知上更重要的低能量区域。网络架构采用多分辨率分支处理不同时间-频率分辨率的傅里叶系数。
4. 实验结果：在LibriTTS（Mel谱条件）和通用音频数据集（编码器token条件）上，Flow2GAN的1步、2步和4步变体在PESQ、ViSQOL等客观指标和主观MOS上取得了具有竞争力的结果，特别是在few-step生成中质量-效率权衡优异。例如，在Mel谱条件下，4步Flow2GAN的PESQ达到4.484，ViSQOL达到4.986，优于大多数基线。
5. 实际意义：为高保真音频生成（如TTS、音乐合成）提供了一个兼具高质量和低延迟推理的实用方案，特别适合对响应速度有要求的应用。
6. 局限性：模型参数量（78.9M）相对较大；论文主要关注语音合成和通用音频，未在音乐生成等更广泛音频任务上进行验证。

---

### 4. [SCRAPL: Scattering Transform with Random Paths for Machine Learning](/audio-paper-digest-blog/posts/2026-05-03-scrapl-scattering-transform-with-random-paths-for)

🔥 **8.0/10** | 前25% | #音频生成 | #时频分析 | #开源工具 #损失函数

👥 **作者与机构**

- 第一作者：Christopher Mitcheltree（Queen Mary University of London，Centre for Digital Music）
- 通讯作者：未明确说明。根据论文内容，Vincent Lostanlen和Mathieu Lagrange（均为Nantes Université， LS2N）为共同负责人，但未标注“通讯作者”字样。
- 作者列表：Christopher Mitcheltree（Queen Mary University of London， Centre for Digital Music）、Vincent Lostanlen（Nantes Université， LS2N）、Emmanouil Benetos（Queen Mary University of London， Centre for Digital Music）、Mathieu Lagrange（Nantes Université， LS2N）

💡 **毒舌点评**

论文将“路径级随机优化”这一简单想法用一套精致的优化技巧（P-Adam， P-SAGA）包装得非常完整，成功在理论保证（无偏估计）和工程实践（效率/精度权衡）之间架起了桥梁。然而，实验主要聚焦于几个小型合成器的声音匹配任务，SCRAPL在处理真实世界复杂音频信号（如长音频、语音）或更复杂的生成模型（如扩散模型）时的有效性和扩展性，仍是未被充分探索的“深水区”。

🔗 **开源详情**

- 代码：提供了Python软件包 `SCRAPL` 和源代码仓库链接（论文附录提及，具体URL见 companion website: https://christhetree.github.io/scrapl/）。
- 模型权重：论文中未提及公开训练好的模型权重。
- 数据集：使用了合成数据和公开录制的TR-808样本（来自samplesfrommars.com）。TR-808数据集来源已提供，但未说明是否作为独立数据集发布。
- Demo：提供了在线音频样本演示（companion website）。
- 复现材料：附录E详细列出了三个实验的全部训练超参数、数据集划分和模型配置，复现信息非常充分。
- 论文中引用的开源项目：引用了 `nnAudio`（CQT工具）、`auraloss`（损失函数）以及用于Hessian特征值计算的 `pytorch-hessian-eigenthings` 库。

📌 **核心摘要**

1.  要解决什么问题：散射变换（ST），特别是联合时频散射（JTFS），作为感知损失函数在音频/视觉的深度逆问题中效果显著，但其计算所有“路径”带来的高昂代价严重阻碍了它在神经网络训练中的应用。
2.  方法核心是什么：提出SCRAPL，一种基于随机优化的加速框架。其核心是在每次优化步骤中，不是计算所有路径的梯度，而是随机采样一条路径并计算其梯度作为全ST梯度的无偏估计。为了稳定这一过程，提出了三种技术：(a) P-Adam：一种路径级的Adam优化器，为每条路径维护独立的一阶和二阶矩估计；(b) P-SAGA：一种路径级的SAGA算法，利用历史梯度信息加速收敛；(c) θ-importance sampling：一种基于合成器参数敏感性的路径重要性采样初始化策略，引导优化关注更相关的路径。
3.  与已有方法相比新在哪里：不同于先前通过剪枝路径（如pGST）来简化ST的方法，SCRAPL在每次迭代中极端地只计算一条随机路径的梯度，计算成本极低。其创新点在于将此随机近似与一整套针对路径非独立同分布特性设计的随机优化技术（P-Adam， P-SAGA）相结合，并提出了与任务相关的路径重要性采样启发式方法。
4.  主要实验结果如何：在三个无监督声音匹配任务上进行了验证。
    *   颗粒合成器：SCRAPL的相对参数误差（65.7‰）虽略逊于完整JTFS（42.4‰），但远优于所有MSS基线（>195‰）。计算成本仅为JTFS的~1/20，接近MSS。消融实验证明了P-Adam， P-SAGA和θ-IS的逐次性能提升。
    *   啁啾合成器：θ-IS相比均匀采样，使θ_AM和θ_FM的预测误差平均降低约40%，收敛步数平均减少约40%。
    *   Roland TR-808鼓机：SCRAPL在对齐（微观）和非对齐（介观）设置下均能稳定匹配瞬态部分，优于或接近MSS。但在衰减部分的匹配上表现不佳（具体数值见Table 4， 8， 9）。
5.  实际意义是什么：为将计算昂贵的ST（如JTFS）作为可微损失函数高效应用于大规模神经网络训练（如DDSP）提供了可行方案，扩展了感知损失的设计空间，特别是在需要处理时频调制模式或非确定性音频合成的场景。
6.  主要局限性是什么：(a) 论文实验主要限于小型参数合成器的声音匹配，任务相对垂直；(b) SCRAPL在TR-808实验中对信号衰减部分的匹配效果不佳；(c) 理论分析集中于无偏性，对非凸场景下的收敛性保证尚不完善。

---

### 5. [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-audiox-a-unified-framework-for-anything-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #多模态模型 | #音乐生成 #数据集

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Zeyue Tian（未说明）、Zhaoyang Liu（未说明）、Yizhu Jin（未说明）、Ruibin Yuan（未说明）、Liumeng Xue（未说明）、Xu Tan（未说明）、Qifeng Chen（未说明）、Wei Xue（未说明）、Yike Guo（未说明）

💡 **毒舌点评**

这篇论文的亮点在于直击当前音频生成领域的一个痛点——“碎片化”，即不同输入条件（文本、图片、视频、音频）往往对应不同的模型架构，它提出了一个“统一框架”的野心，并为此构建了一个规模空前的大数据集作为支撑。然而，从摘要来看，其核心的“多模态自适应融合模块”的具体设计细节和实验验证的全面性存疑，仅仅声称“性能优越”和“强大的指令遵循能力”而缺乏具体数字支撑，使其说服力打了折扣，更像一份完整度高的系统构建报告而非一篇原理上有颠覆性创新的研究。

🔗 **开源详情**

-   代码：论文中提及将释放代码，但未提供具体代码仓库链接。
-   模型权重：论文中提及将释放模型，未说明具体形式（如检查点文件、HuggingFace模型卡等）。
-   数据集：论文中提及将释放IF-caps数据集，未说明数据格式、下载地址或访问方式。
-   Demo：论文中未提及是否提供在线演示。
-   复现材料：论文中未提供训练细节、超参数配置、环境依赖等具体的复现材料。
-   论文中引用的开源项目：论文摘要中未提及依赖的其他开源项目。

📌 **核心摘要**

1.  问题：基于灵活多模态控制信号（如文本、视频、图像、音频）进行音频和音乐生成，面临两大关键挑战：缺乏统一的多模态建模范式，以及缺乏大规模、高质量的训练数据。
2.  方法核心：提出AudioX，一个统一的“anything-to-audio”生成框架。其核心是一个多模态自适应融合模块，旨在有效融合来自不同模态的异构输入，增强跨模态对齐并提升生成质量。
3.  创新点：相较于以往针对特定输入模态开发独立模型，AudioX首次（根据摘要声称）将文本、视频、图像、音频等多种条件统一到一个框架内。此外，为训练该统一模型，研究者构建了一个名为IF-caps的大规模、高质量数据集，包含超过700万样本，通过结构化的数据标注流程制作，为多模态条件下的音频生成提供全面监督。
4.  实验结果：论文将AudioX与多种先进方法在广泛任务上进行了基准测试。结果显示，AudioX在文本到音频（Text-to-Audio） 和文本到音乐（Text-to-Music） 生成任务上取得了优越性能（论文中未给出具体数值或指标）。
5.  实际意义：该工作推动了通用音频生成模型的发展，使得单一模型能够处理多种输入条件下的音频创作，降低了应用门槛，潜在应用包括影视配乐、游戏音效、智能助手交互等。
6.  主要局限性：摘要中未明确讨论局限性。根据其工作性质推测，可能存在的局限性包括：模型的计算复杂度与资源需求可能较高；统一框架在处理某些特定模态（如复杂视频）时的细节表现可能不如专用模型；700万样本的数据集可能存在分布偏差或标注质量不均问题。

---

### 6. [DiVeQ: Differentiable Vector Quantization Using the Reparameterization Trick](/audio-paper-digest-blog/posts/2026-05-03-diveq-differentiable-vector-quantization-using)

✅ **7.5/10** | 前25% | #音频生成 | #信号处理 | #图像生成 #端到端

👥 **作者与机构**

- 第一作者：Mohammad Hassan Vali（论文中未提及具体机构）
- 通讯作者：未说明
- 作者列表：Mohammad Hassan Vali（未说明）、Tom Bäckström（未说明）、Arno Solin（未说明）

#

💡 **毒舌点评**

亮点：巧妙地将不可微的量化操作重新解释为“添加一个模拟量化误差的可微扰动”，在保持前向传播离散性的同时打通了反向传播的“任督二脉”，这是一个理论上非常干净且有启发性的技巧。  
短板：论文摘要过于定性，缺乏关键的量化对比数字和消融实验，使得“显著提升”等结论缺乏说服力，读者无法判断该方法在实际工程中的真实增益大小。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及模型权重。
- 数据集：论文中未提及具体使用的数据集及获取方式。
- Demo：论文中未提及。
- 复现材料：论文中未提及训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：论文摘要中未提及。

📌 **核心摘要**

本文要解决的核心问题是深度模型中的向量量化（VQ）层由于其不可微的硬赋值操作，会阻断梯度传播，导致无法进行完全的端到端训练。为此，论文提出了DiVeQ方法，其核心是将量化过程建模为在连续表示上添加一个可微的、模仿量化失真的误差向量，从而在前向传播中保持离散赋值（硬量化），在反向传播中允许梯度通过该误差向量流动。与以往需要辅助损失（如VQ-VAE中的commitment loss）或复杂的温度退火策略的方法不同，DiVeQ及其变体（SF-DiVeQ）无需这些额外技巧即可实现端到端训练。论文在VQ-VAE图像压缩、VQGAN图像生成和DAC语音编码等多个任务上验证了方法，声称其在重建和生成质量上优于其他量化方案。该方法的实际意义在于提供了一种通用、简洁的技巧，使量化层能够无缝集成到各种深度学习框架的自动微分体系中，简化了训练流程。其主要局限性在于性能提升高度依赖于具体任务和超参数选择，且论文中未展示与最强基线的定量对比，其普适优势有待进一步验证。

---

### 7. [JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization](/audio-paper-digest-blog/posts/2026-05-03-javisdit-joint-audio-video-diffusion-transformer)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Kai Liu (浙江大学， 新加坡国立大学)
- 通讯作者：Hao Fei (新加坡国立大学)
- 作者列表：
  - Kai Liu (浙江大学， 新加坡国立大学)
  - Wei Li (中国科学技术大学)
  - Lai Chen (浙江大学)
  - Shengqiong Wu (新加坡国立大学)
  - Yanhao Zheng (浙江大学)
  - Jiayi Ji (新加坡国立大学)
  - Fan Zhou (浙江大学)
  - Jiebo Luo (罗切斯特大学)
  - Ziwei Liu (南洋理工大学)
  - Hao Fei (新加坡国立大学)
  - Tat-Seng Chua (新加坡国立大学)

#

💡 **毒舌点评**

本文最大的亮点是构建了一个从模型架构（JavisDiT）、训练范式、评估基准（JavisBench）到评估指标（JavisScore）的“全套解决方案”，这种工程系统完整性在音视频生成领域难得一见，为后续研究提供了坚实的基线。然而，其核心的时空先验估计器性能严重依赖于冻结的ImageBind编码器和合成的异步负样本，这在一定程度上削弱了模型自身从原始数据中学习精细时空对齐的潜力，更像是一个精巧的“插件”而非根本性的架构突破。

#

🔗 **开源详情**

- 代码：论文承诺提供代码，但未在文中提供具体仓库链接（仅提到将发布在项目主页）。
- 模型权重：论文承诺提供预训练模型权重，具体链接未提及。
- 数据集：JavisBench数据集（包含JavisBench-10K和JavisBench-mini）承诺发布，获取方式未详细说明。
- Demo：未提及在线演示。
- 复现材料：附录提供了极其详细的模型配置（表A1， A2）、训练数据来源与处理流程（附录C.1）、时空先验估计器的训练细节（附录C.2）、负样本增强策略（附录C.2.4）、基准构建细节（附录D）以及指标验证（附录D.4），复现指南非常充分。
- 引用的开源项目：
    - 骨干模型：OpenSora（用于视频分支初始化）、AudioLDM2（用于音频分支初始化）。
    - 文本编码器：T5、ImageBind。
    - 数据处理：FunASR（语音过滤）、Qwen系列模型（字幕生成与分类）、UniMatch（光流）、DBNet（OCR）、PySceneDetect（场景切割）等。

📌 **核心摘要**

1.  问题：现有的联合音视频生成（JAVG）方法在确保生成内容的高质量与精确同步方面存在不足，特别是缺乏对细粒度时空对齐（即“什么声音在哪里、何时发生”）的有效建模。
2.  方法核心：提出JavisDiT，一个基于扩散Transformer（DiT）的端到端生成框架。核心创新是设计了层级时空同步先验估计器（HiST-Sypo），该估计器通过对比学习从文本中提取全局语义先验和细粒度的时空先验（空间位置与时间戳），并通过跨注意力机制注入到DiT的各个块中，以引导音视频的时空同步生成。
3.  新在哪里：与简单参数共享或特征对齐的方法不同，本文首次提出显式地从条件中估计并注入层级化的时空先验来指导同步生成。此外，构建了更大规模、更多样化、更关注多事件场景的新基准JavisBench（10,140条数据），并提出了更鲁棒的同步评估指标JavisScore。
4.  主要实验结果：在自有基准JavisBench和已有基准（Landscape, AIST++）上，JavisDiT在生成质量（FVD, FAD）、语义一致性（CLIP, CLAP）和音视频同步性（JavisScore, AVHScore）等多项指标上均优于或持平现有方法。例如，在JavisBench上，JavisDiT的JavisScore达到0.154，优于最强基线FoleyCrafter（0.151）。消融实验证明HiST-Sypo估计器和精细时空注意力机制对同步性有显著贡献。
5.  实际意义：该工作为高质量的联合音视频生成提供了先进的系统方案，有望应用于短视频创作、电影音效合成等AIGC领域。其提出的基准和指标为未来的研究提供了更全面的评估标准。
6.  主要局限性：
    - 生成效率：基于扩散Transformer的模型推理速度较慢，生成一段4秒的240P视频需30秒（H100）。
    - 数据规模：训练数据（610K三元组）相对于视频生成的基础模型（如OpenSora）仍显有限，可能限制泛化能力。
    - 评估指标：JavisScore的准确率（~75%）仍有提升空间，无法完全替代人工评估。

#

---

### 8. [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-03-aurelius-relation-aware-text-to-audio-generation)

✅ **7.0/10** | 前25% | #音频生成 | #流匹配 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Yuhang He（微软研究院）
- 通讯作者：Yuhang He (yuhanghe@microsoft.com)（微软研究院）
- 作者列表：Yuhang He（微软研究院）、He Liang（微软研究院）、Yash Jain（牛津大学计算机科学系）、Andrew Markham（牛津大学计算机科学系）、Vibhav Vineet（微软研究院）

💡 **毒舌点评**

这篇论文的最大价值在于它把“关系感知文本到音频生成”这个模糊的概念，用两个大规模、结构化的语料库（110个事件和100种关系）和一套可扩展的数据生成方法给“工程化”和“标准化”了，为后续研究铺好了路；但尴尬之处在于，它只是个“造尺子”的工作，论文本身并未提供一个能显著提升性能的“造物”模型，对现有模型的分析结论（它们都很差）也不出人意料。

🔗 **开源详情**

-   代码：提供GitHub代码仓库链接：https://github.com/yuhanghe01/Aurelius。
-   模型权重：论文中未提及是否公开微调或从头训练后的模型权重。
-   数据集：论文详细描述了AudioEventSet和AudioRelSet的构建方法，并提供了项目主页链接（https://yuhanghe01.github.io/Aurelius-Proj/），很可能通过该项目页提供数据集获取方式。论文中未直接说明数据集是否完全公开下载。
-   Demo：论文中未提及在线演示链接。
-   复现材料：提供了详细的实验设置（如基线模型参数配置见附录Table III）、数据集构建细节（110个事件列表，100个关系列表及示例），以及评测协议的描述，复现指引较为充分。
-   论文中引用的开源项目：
    -   文本到��频模型基线：AudioLDM, AudioLDM 2, MakeAnAudio, AudioGen, Tango, Tango 2, LAFMA, Auffusion, TangoFlux。
    -   音频事件数据集：AudioSet, AudioCaps, FSD50K。
    -   预训练音频模型：PANNs（用于提取音频嵌入和事件检测）。
    -   大语言模型：Qwen2, Qwen2.5（用于Agentic Workflow基线）。

📌 **核心摘要**

1. 要解决什么问题：现有文本到音频生成模型在处理包含多个音频事件及其复杂关系（如时间先后、空间位置、逻辑组合）的文本描述时，性能严重不足。主要瓶颈是缺乏大规模、高质量、结构化的音频事件和关系数据集，以及系统的评测方法。
2. 方法核心是什么：提出了Aurelius框架，其核心贡献是构建并发布了两个大规模语料库：包含110个类别、分层组织的音频事件语料库AudioEventSet，以及包含100种详细关系、覆盖一元到五元关系的AudioRelSet。同时，提供了一套基于关系“元数”和文本模板化的<文本，音频>对生成策略，可灵活创建海量训练数据。
3. 与已有方法相比新在哪里：1) 数据规模与质量：构建的语料库在事件类别（110 vs. RiTTA的约25）和关系数量（100 vs. 11）上远超前人工作，且数据更干净、独特、层次化。2) 系统性：首次提供了覆盖物理世界主要关系（时间、空间、计数、感知、组合）及复杂嵌套组合的全面关系定义。3) 评测基准：在构建的数据集上，对9个主流文本到音频模型进行了零样本评测，并探索了微调和从头训练两种扩展策略。
4. 主要实验结果：零样本评测显示，所有现有模型在关系感知指标（mAPre, mARel, mAPar, mAMSR）上表现都很差，最高指标（TangoFlux的mAPre）仅为12.38%。微调后，TangoFlux的mAMSR从1.77%提升至5.58%，mAPre从12.38%大幅提升至28.57%，表明微调有效但仍有很大提升空间。实验还发现，随训练数据增加，从头训练的收益高于微调。
5. 实际意义：为“关系感知文本到音频生成”这一挑战性任务建立了首个大规模、系统化的研究基准和数据基础，有助于推动模型在复杂听觉场景合成方面的进步。
6. 主要局限性：1) 未提出新模型：论文核心是基准构建，而非提出能直接解决关系建模难题的新生成模型架构。2) 数据集构建依赖外部源：音频事件数据来源于freesound.org和FSD50K，可能继承其潜在偏差。3) 文本-音频对为合成数据：通过模板和音频片段拼接生成，可能与真实世界录音存在域差距。

---

### 9. [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensional Rewards for Video-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-prismaudio-decomposed-chain-of-thought-and-multi)

✅ **7.0/10** | 前50% | #音频生成 | #强化学习 | #跨模态 #基准测试

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Huadai Liu（未说明），Kaicheng Luo（未说明），Wen Wang（未说明），Qian Chen（未说明），Peiwen Sun（未说明），Rongjie Huang（未说明），Xiangang Li（未说明），Jieping Ye（未说明），Wei Xue（未说明）

#

💡 **毒舌点评**

将强化学习与链式思维规划引入视频到音频生成，以解耦优化不同感知维度，思路新颖且具有启发性。但摘要仅宣称“SOTA”却无具体数据支撑，且完全未透露模型与代码的开源计划，可复现性成疑，这在一定程度上削弱了其结论的说服力。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接（仅提供了项目主页链接：https://PrismAudio.github.io）。
- 模型权重：未提及是否公开。
- 数据集：论文中引入了AudioCanvas基准测试，但未说明该数据集是否公开、如何获取。
- Demo：未提及是否提供在线演示。
- 复现材料：未提及是否提供训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：论文中未提及任何依赖的开源工具或模型。
- 总体开源计划：论文中未提及明确的开源计划。

📌 **核心摘要**

1. 要解决什么问题：现有的视频到音频（V2A）生成方法存在“目标纠缠”问题，即将语义一致性、时序同步、美学质量和空间准确性等竞争目标混在单一损失函数中进行优化，且缺乏与人类偏好的对齐。
2. 方法核心是什么：本文提出了PrismAudio框架，核心是集成强化学习（RL）并设计了四个专门的链式思维（CoT）模块（语义、时间、美学、空间），每个模块与一个特定的奖励函数配对，形成“CoT-奖励”对应关系，进行多维强化学习优化。同时，为降低训练开销，提出了Fast-GRPO算法（采用混合ODE-SDE采样）。
3. 与已有方法相比新在哪里：这是首个将强化学习应用于V2A生成的任务框架；首次提出将整体推理过程分解为四个正交的感知维度（CoT）进行解耦优化；提出了更均衡、更多样化的新基准测试AudioCanvas。
4. 主要实验结果如何：论文声称在VGGSound测试集和新的AudioCanvas基准测试的所有四个感知维度上均达到了最先进（SOTA）性能。然而，摘要未提供任何具体的对比数值、指标或消融实验数字。论文未给出具体数值。
5. 实际意义是什么：通过解耦优化，可以更精细地控制和生成符合多重要求的高质量音频；Fast-GRPO使这种复杂优化在计算上可行；新基准测试推动了该领域更严格的评估。
6. 主要局限性是什么：摘要未明确提及局限性。可能包括：新引入的CoT模块和奖励函数设计的复杂性与调参成本；Fast-GRPO的性能与稳定性的深入分析缺失；以及新基准测试AudioCanvas的广泛接受度有待验证。

---

### 10. [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-03-smartdj-declarative-audio-editing-with-audio)

✅ **6.5/10** | 前25% | #音频生成 | #音频大模型 | #扩散模型 #空间音频

👥 **作者与机构**

- 第一作者：Zitong Lan（未说明）
- 通讯作者：未说明
- 作者列表：Zitong Lan（未说明）， Yiduo Hao（未说明）， Mingmin Zhao（未说明）

💡 **毒舌点评**

亮点在于提出了“声明式音频编辑”这一更符合人类直觉的交互范式，试图将编辑者的创意从繁琐的低级操作中解放出来，并专门针对立体声音频，这在技术路径上具有前瞻性和实用价值。然而，摘要中完全没有提及任何具体的实验量化指标、与哪些基线对比、在什么数据集上评估，使得其宣称的“优越性能”缺乏最基本的证据支撑，说服力大打折扣。

🔗 **开源详情**

论文中未提及开源计划。根据当前摘要提供的信息：
- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：未提及。
- Demo：未提及。
- 复现材料：未提及训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：未提及。

📌 **核心摘要**

1.  解决的问题：现有的生成式音频编辑模型存在两大局限：一是依赖于模板化的指令格式且通常只处理单声道音频；二是要求用户指定低级的具体编辑动作（如“在第5秒添加一个鼓声”），而非表达高级的意图。
2.  方法核心：SmartDJ 框架将用户输入的高级语义指令（如“让场景变得更热闹”）通过一个“音频语言模型”分解为一系列原子级的编辑操作序列（如添加、删除、移动特定音效），然后由一个在立体声音频上训练的扩散模型来执行这些操作。
3.  与已有方法相比新在哪里：核心创新是引入了“声明式编辑”范式，允许用户描述期望的最终结果而非中间过程；同时，该框架专注于并支持立体声音频编辑，旨在提升沉浸感。
4.  主要实验结果：摘要仅声明 SmartDJ 在感知质量、空间真实感和语义对齐方面优于先前方法，但未提供任何具体数值、基线对比方法或评估数据集信息。
5.  实际意义：有望大幅降低专业音频编辑（如VR/AR音效设计、虚拟会议、影视后期）的门槛，让用户能更自然、高效地通过自然语言描述来创作和编辑立体声音频内容。
6.  主要局限性：摘要信息严重不足，未说明实验细节、数据来源、模型具体结构以及性能提升的量化证据，其有效性存疑。此外，“音频语言模型”的分解能力和扩散模型的编辑能力上限也未见详细分析。

---

### 11. [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis with Acoustic Transfer](/audio-paper-digest-blog/posts/2026-05-03-ac-foley-reference-audio-guided-video-to-audio)

✅ **6.0/10** | 前50% | #音频生成 | #条件生成 | #扩散模型 #零样本

👥 **作者与机构**

- 第一作者：Pengjun Fang（论文中未提及机构）
- 通讯作者：未说明
- 作者列表：Pengjun Fang（未说明）、Yingqing He（未说明）、Yazhou Xing（未说明）、Qifeng Chen（未说明）、Ser-Nam Lim（未说明）、Harry Yang（未说明）

#

💡 **毒舌点评**

亮点：精准地抓住了现有V2A生成中“文本描述”这一中间环节的脆弱性，提出“以音频引导音频”的闭环方案，思路直接且符合领域直觉，为精细声音控制提供了新范式。
短板：摘要作为论文的门面，却几乎完全缺失了支撑其所有宣称（如SOTA、零样本生成、音色转换）的定量实验结果、架构图和关键实现细节，让审稿人和读者无从判断其工作的扎实程度，说服力大打折扣。

#

🔗 **开源详情**

根据提供的论文摘要文本：
- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：未提及。
- Demo：未提及。
- 复现材料：未提及训练细节、配置、检查点等。
- 引用的开源项目：论文中未提及引用的开源工具/模型。
- 总结：论文中未提及任何开源计划或资源。

📌 **核心摘要**

1. 要解决的问题：现有视频到音频（V2A）生成方法严重依赖文本提示，但文本存在两大瓶颈：一是训练数据的语义标签粒度粗，无法区分声学细节（如不同狗叫）；二是文本本身无法精确描述微小的声学特征（如“金属叮当声”无法区分瞬态和衰减）。
2. 方法核心：提出AC-Foley模型，其核心是直接使用参考音频作为条件信号，来引导基于视频的音频生成，从而绕过文本的模糊性。
3. 与已有方法的不同：传统V2A模型以“视频+文本”为输入，而AC-Foley以“视频+参考音频”为输入。后者能够实现对生成音频音色、质感等声学属性的直接、细粒度控制。
4. 主要实验结果：摘要声称，在参考音频条件下，AC-Foley在Foley生成任务上达到了最先进（State-of-the-Art）的性能。即使没有音频条件，其性能也与其他SOTA的V2A方法具有竞争力。但论文中未提供具体的量化指标和对比数值。
5. 实际意义：该方法为影视后期音效（Foley）创作、游戏音效设计等领域提供了更精确、更灵活的工具，能够实现音色迁移、零样本新音效生成等实用功能。
6. 主要局限性：从摘要信息推断，其性能可能高度依赖参考音频的质量和匹配度；此外，对于完全创新、无参考的音效生成，其能力边界尚不明确。更重要的是，当前文本未揭示任何技术局限或失败案例。

#

---

