---
title: "ICLR 2026 - 音视频 论文列表"
date: 2026-05-04
draft: false
tags: ["音视频"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 音视频 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [JavisDiT++: Unified Modeling and Optimization for Joint Audi](/audio-paper-digest-blog/posts/2026-05-04-javisdit-unified-modeling-and-optimization-for) | 9.0分 | 前25% |
| 🥈 | [JavisDiT: Joint Audio-Video Diffusion Transformer with Hiera](/audio-paper-digest-blog/posts/2026-05-04-javisdit-joint-audio-video-diffusion-transformer) | 8.5分 | 前25% |
| 🥉 | [Syncphony: Synchronized Audio-to-Video Generation with Diffu](/audio-paper-digest-blog/posts/2026-05-04-syncphony-synchronized-audio-to-video-generation) | 8.0分 | 前25% |
| 4. | [Instilling an Active Mind in Avatars via Cognitive Simulatio](/audio-paper-digest-blog/posts/2026-05-04-instilling-an-active-mind-in-avatars-via) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [JavisDiT++: Unified Modeling and Optimization for Joint Audio-Video Generation](/audio-paper-digest-blog/posts/2026-05-04-javisdit-unified-modeling-and-optimization-for)

🔥 **9.0/10** | 前25% | #音视频 | #流匹配 | #扩散模型 #多模态模型

👥 **作者与机构**

- 第一作者：Kai Liu (浙江大学)
- 通讯作者：Hao Fei (新加坡国立大学)
- 作者列表：
    - Kai Liu (浙江大学)
    - Yanhao Zheng (未说明)
    - Kai Wang (多伦多大学)
    - Shengqiong Wu (新加坡国立大学)
    - Rongjunchen Zhang (HiThink Research)
    - Jiebo Luo (罗切斯特大学)
    - Dimitrios Hatzinakos (多伦多大学)
    - Ziwei Liu (南洋理工大学)
    - Hao Fei (新加坡国立大学)
    - Tat-Seng Chua (新加坡国立大学)

💡 **毒舌点评**

这篇论文的亮点在于提出了一个极其简洁有效的统一架构（MS-MoE）和精确的时间对齐策略（TA-RoPE），以相对较低的模型参数（2.1B）和数据量（~1M）达到了接近商业模型（Veo3）的SOTA性能。短板是其核心贡献高度依赖特定的视频生成骨干（Wan2.1），这虽然加速了研发，但也意味着其音视频联合生成的泛化能力与独立性有待进一步验证，且其对训练数据质量与分布的敏感性（见消融研究）暗示了在开放域场景下的潜在挑战。

📌 **核心摘要**

本文旨在解决现有开源联合音视频生成（JAVG）模型在生成质量、音视频时序同步性以及与人类偏好对齐方面落后于商业模型（如Veo3）的问题。其核心方法是构建一个基于Wan2.1视频生成模型的统一DiT框架，主要创新包括：1）采用模态特定专家混合（MS-MoE）设计，通过共享注意力层促进模态交互，同时使用独立的FFN增强单模态生成质量；2）提出时间对齐旋转位置编码（TA-RoPE），在位置ID的第0维度强制对齐音频和视频token，实现显式的帧级时间同步；3）首次将人类偏好对齐引入JAVG领域，设计了音视频直接偏好优化（AV-DPO），利用多奖励模型构建偏好数据，统一提升生成质量、一致性与同步性。与已有方法相比，该架构更简洁高效，避免了复杂的双流设计或拼接策略。实验表明，在仅使用约100万条公开数据训练后，JavisDiT++在JavisBench基准的多个维度（质量、一致性、同步性）上显著优于JavisDiT和UniVerse-1，达到了开源SOTA水平。其实际意义在于为原生联合音视频生成建立了一个高效且性能强大的基线，推动了该领域的研究。主要局限性包括：模型性能对特定视频骨干和训练数据质量/多样性有较强依赖；当前仅支持文本到音视频生成，可控性与任务扩展性有待探索。

---

### 🥈 [JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization](/audio-paper-digest-blog/posts/2026-05-04-javisdit-joint-audio-video-diffusion-transformer)

🔥 **8.5/10** | 前25% | #音视频 | #扩散模型 #Transformer | #扩散模型 #Transformer

👥 **作者与机构**

- 第一作者：Kai Liu (浙江大学, 新加坡国立大学) (*共同第一作者)
- 通讯作者：Hao Fei (新加坡国立大学)
- 作者列表：
    - Kai Liu (浙江大学，新加坡国立大学) (*共同第一作者)
    - Wei Li (中国科学技术大学) (*共同第一作者)
    - Lai Chen (浙江大学)
    - Shengqiong Wu (新加坡国立大学)
    - Yanhao Zheng (浙江大学)
    - Jiayi Ji (新加坡国立大学)
    - Fan Zhou (浙江大学)
    - Jiebo Luo (罗切斯特大学)
    - Ziwei Liu (南洋理工大学)
    - Hao Fei (新加坡国立大学) (†通讯作者)
    - Tat-Seng Chua (新加坡国立大学)

💡 **毒舌点评**

论文提出了一个架构设计完整、实验验证充分的端到端音视频生成模型，其“分层时空先验估计”的思路有效提升了生成内容的同步性，配套的JavisBench基准和JavisScore指标也直指现有评估的痛点。然而，该模型的计算开销庞大（生成4秒240P视频在H100上耗时30秒），且其在更复杂、更高分辨率或更长时长场景下的泛化能力仍待验证。

🔗 **开源详情**

- 代码：论文明确表示代码将开源，项目主页为 `https://javisverse.github.io/JavisDiT-page/`。
- 模型权重：论文明确表示预训练模型将开源。
- 数据集：论文明确表示会公开JavisBench数据集及处理后的训练数据。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文提供了详尽的模型架构图、训练细节（包括三阶段策略、学习率、优化器、数据集来源与规模）、超参数配置、评估设置以及消融实验设计，复现信息非常充分。
- 引用的开源项目：
    - 视频骨干与VAE：OpenSora
    - 音频生成与VAE：AudioLDM2
    - 文本编码器：T5， ImageBind
    - 对比学习框架：借鉴自SimCLR
    - 其他工具：PySceneDetect， UniMatch， DBNet， FunASR， Qwen系列模型（用于数据标注和分类）

📌 **核心摘要**

本文旨在解决联合音视频生成（JAVG）中内容质量与跨模态同步性难以兼得的核心挑战。提出了一种基于扩散Transformer（DiT）的联合音视频生成模型JavisDiT，其核心创新在于引入了分层时空同步先验估计器（HiST-Sypo），该模块从文本条件中分层提取全局语义先验和细粒度的时空位置/时序先验，以指导视频与音频在空间和时间上的精确对齐。与已有方法（如简单的参数共享或隐空间对齐）相比，JavisDiT通过显式的细粒度先验引导和双向跨模态注意力机制，增强了音视频模态间的深层交互。实验结果表明，JavisDiT在提出的JavisBench基准（包含10，140个多事件、复杂场景的视频）上，其同步性指标JavisScore达到0.154，显著优于各类级联式和联合生成方法；在传统的Landscape和AIST++数据集上，其生成质量（如FVD为94.2）也达到了最佳水平。该工作为JAVG任务提供了更强的模型和更全面的评估框架，推动了多模态生成技术向实用化迈进。主要局限性在于模型计算复杂度高，且评估基准的分辨率与视频时长相对有限。

---

### 🥉 [Syncphony: Synchronized Audio-to-Video Generation with Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-04-syncphony-synchronized-audio-to-video-generation)

🔥 **8.0/10** | 前25% | #音视频 | #扩散模型 | #流匹配 #跨模态

👥 **作者与机构**

- 第一作者：Jibin Song (延世大学人工智能系， CineLingo)
- 通讯作者：Jibin Song (邮箱：sjbpsh1@yonsei.ac.kr， jibinsong@cinelingo-labs.com)
- 作者列表：Jibin Song (延世大学， CineLingo)、Mingi Kwon (延世大学， CineLingo)、Jaeseok Jeong (延世大学， CineLingo)、Youngjung Uh (延世大学， CineLingo)

#

💡 **毒舌点评**

亮点：本文没有空谈同步的重要性，而是针对“MSE损失对动态区域监督不足”和“条件引导策略”这两个关键痛点，分别提出了动作感知损失（Loss层面）和音频同步引导（推理层面）的成套解决方案，并辅以新的评估指标CycleSync，形成了一个完整、闭环的技术方案，实验也证明了有效性。
短板：新提出的CycleSync指标本质上是“视频->音频->对比”的循环测试，其准确性严重依赖于所使用的预训练V2A模型的保真度和泛化能力，这给评估引入了一个不透明的、外部的“黑箱”偏差，使得绝对分数的解读需要更加谨慎。

#

🔗 **开源详情**

- 代码：论文明确承诺将发布代码，但文中未提供具体的GitHub或其他代码仓库链接。
- 模型权重：论文明确承诺将发布训练好的模型，但未提供具体链接。
- 数据集：使用的是公开数据集AVSync15和TheGreatestHits，论文中未提及是否发布新的数据集。
- Demo：论文未提及提供在线演示。
- 复现材料：提供了详细的实现细节，包括模型架构选择、损失函数公式、训练硬件、训练步数、关键超参数（如λ, w, δ, 批大小虽未明确但其他信息详尽），以及用户研究设置。这些信息充足，具备较高的可复现性。
- 论文中引用的开源项目：
    - 视频生成骨干：Pyramid Flow (Jin et al., 2024a)
    - 音频编码器：DenseAV (Hamilton et al., 2024)
    - 文本编码器：CLIP (Radford et al., 2021)
    - V2A模型（用于CycleSync评估）：V-AURA (Viertola et al., 2025)
    - 其他对比基线：TempoTokens (Yariv et al., 2023), AVSyncD (Zhang et al., 2024)

📌 **核心摘要**

本文致力于解决音频到视频（A2V）生成中，现有模型难以实现音频与视频运动之间精细时间同步的问题。论文提出了Syncphony，一个基于预训练扩散Transformer（DiT）骨干的生成框架。其方法核心是在DiT架构的后期层中引入音频交叉注意力，并通过两个关键技术提升同步性能：1) 动作感知损失，在训练时对高运动区域施加更大的损失权重，引导模型更关注与音频事件因果相关的运动；2) 音频同步引导，在推理时通过一个禁用了音频层的“异步模型”来引导完整模型，放大音频信号对运动的影响而不损害视觉质量。与已有的间接映射（如调制注意力权重、投影到文本空间）或从零构建时序层的方法不同，本文直接、精细地注入音频特征，并利用强大的预训练视频骨干保证生成质量。为评估同步性，论文还提出了新指标CycleSync，通过视频重建音频来间接衡量生成视频是否保留了原始音频的时序结构。在AVSync15和TheGreatestHits数据集上的实验表明，Syncphony在同步准确性（CycleSync得分更高）和视觉质量（FVD/FID更低）上均优于现有方法。该工作的实际意义在于为高质量、高同步性的视频生成提供了有效方案，但其局限性包括：动作感知损失的权重基于真值运动幅度，未显式区分音频相关与无关运动；CycleSync指标的可靠性受底层V2A模型影响；生成的视频分辨率（380×640）和时长（5秒）仍有提升空间。

#

---

### 4. [Instilling an Active Mind in Avatars via Cognitive Simulation](/audio-paper-digest-blog/posts/2026-05-04-instilling-an-active-mind-in-avatars-via)

✅ **7.0/10** | 前25% | #音视频 | #多模态模型 #扩散模型 | #多模态模型 #扩散模型

👥 **作者与机构**

- 第一作者：Jianwen Jiang（字节跳动 ByteDance）
- 通讯作者：Jianwen Jiang（字节跳动 ByteDance，论文中标注为“Project Lead and Corresponding author”）
- 作者列表：Jianwen Jiang, Weihong Zeng, Zerong Zheng, Jiaqi Yang, Chao Liang, Wang Liao, Han Liang, Weifeng Chen, Xing Wang, Yuan Zhang, Mingyuan Gao（均隶属于字节跳动 ByteDance）

💡 **毒舌点评**

亮点：将认知科学的“双系统”概念巧妙映射到模型设计中，用MLLM进行高层“计划”来指导扩散模型的“生成”，这个框架思路新颖且具有启发性，伪最后帧的设计也有效解决了参考图像约束运动动态的问题。
短板：论文声称模拟了“System 2”的审慎推理，但该过程实则依赖外部MLLM的推理能力，其输出的“计划”质量取决于所用MLLM，且推理延迟（20-30秒）在实时或交互应用中是个显著负担。多模态融合的内部机制（尤其是音频、文本与视觉token如何在Transformer内“对称融合”）描述略显笼统。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开模型权重。
- 数据集：论文中详细描述了自建数据集的构建流程，但未提及公开或提供下载。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录中提供了详细的实现细节、训练超参数、数据处理流程和评估协议，对于复现工作有很高的参考价值。
- 引用的开源项目：论文依赖或对比的开源工具/模型包括：Whisper（音频编码器）、SyncNet（同步评估）、Raft（光流计算）、PySceneDetect、PaddleOCR、Q-Align、miniCPM-o、Seed-1.5-VL、Gemini-2.5-Pro（用于评估）等。

📌 **核心摘要**

本文针对当前视频动画模型（尤其是音频驱动模型）仅能实现低级别动作同步，而无法理解高级语义（如情感、意图）的局限性，提出了一种受人类认知“双系统理论”启发的新型框架，旨在为数字人注入“主动思维”。
方法核心是模拟双系统：System 2 由一个多模态大语言模型（MLLM）代理构成，通过分析输入的音频、图像和文本，生成结构化的文本“计划”，为动画提供高级语义指导；System 1 则是一个专门的多模态扩散Transformer（MMDiT），它融合System 2的文本指导、音频的反应式信号以及视频的视觉信息，生成最终动画。关键创新在于引入了“伪最后帧”策略，用以替代传统方法中静态的参考图像条件化，从而在保持身份一致性的同时释放了运动动态性。
与已有方法相比，新在：1. 首次将双系统认知理论形式化地应用于视频动画生成，明确区分了审慎规划和反应式合成；2. 设计了包含MLLM代理的端到端推理-生成框架；3. 提出了伪最后帧和对称模态融合的新颖架构设计。
主要实验结果（基于自建数据集及CelebV-HQ、CyberHost基准）显示，该方法在唇形同步（如Sync-C）、视频质量（如IQA）、运动自然度（主观用户研究GSB评分）及上下文一致性上均达到或超越现有SOTA水平。例如，在多人动画的消融研究中（表3），完整模型在驱动精度（DA）和主观GSB评分上分别达到0.94和+0.26，显著优于基线。
实际意义在于为创建具有更高层次智能、情感表达和上下文感知能力的数字人提供了新范式。主要局限性包括：引入MLLM推理带来的显著额外计算开销（约20-30秒）；框架对强大MLLM的依赖性；以及虽然提出了多人场景的扩展，但相关实验的规模和复杂度仍有限。

---

