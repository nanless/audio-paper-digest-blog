---
title: "Self-Supervised Flow Matching for Scalable Multi-Modal Synthesis"
date: 2026-07-04
draft: false
tags: [音视频生成, 流匹配, 自监督学习, 多模态模型, 扩散模型]
categories: [icml-2026]
description: "音视频生成 | 7.2/10"
hiddenInHomeList: true
---

# 📄 Self-Supervised Flow Matching for Scalable Multi-Modal Synthesis

#音视频生成 #流匹配 #自监督学习 #多模态模型 #扩散模型

**7.2/10** | 创新 1.5/2 | 严谨 1.5/1.5 | 实验 1.5/1.5 | 清晰 1/1 | 影响 0.4/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **7.2/10** | 前50% | #音视频生成 | #流匹配 | #自监督学习 #多模态模型 | [arxiv](https://openreview.net/forum?id=HoThWhfxiK)


### 👥 作者与机构

- 第一作者：Hila Chefer (Black Forest Labs) 与 Patrick Esser (Black Forest Labs)（并列第一作者）
- 通讯作者：Hila Chefer <hila@blackforestlabs.ai>, Patrick Esser <patrick@blackforestlabs.ai>
- 作者列表：Hila Chefer（Black Forest Labs），Patrick Esser（Black Forest Labs），Dominik Lorenz（Black Forest Labs），Dustin Podell（Black Forest Labs），Vikash Raja（Black Forest Labs），Vinh Tong（Black Forest Labs），Antonio Torralba（MIT, Black Forest Labs），Robin Rombach（Black Forest Labs）

### 💡 毒舌点评

这篇工作用一个巧妙的双时间步噪声调度在流匹配中灌入了自监督表征学习，彻底摆脱了对冻住外部编码器的依赖，多模态齐头并进的效果让人眼前一亮。然而，音频实验更像顺带的点缀，真正的音频领域读者难以从中获得实质推动力，且没有任何开源承诺，工业界光鲜的“self-flow”目前还止于纸上。

### 📌 核心摘要

本文指出扩散模型/流匹配在使用预训练视觉编码器（如DINOv2）进行特征对齐时存在逆缩放律、跨模态泛化差等瓶颈。为此提出Self-Flow框架，将自监督表征学习直接嵌入流匹配训练中，无需任何外部模型。核心机制是双时间步调度（Dual-Timestep Scheduling，DTS），对同一输入的不同token施加异质噪声水平，形成信息不对称；随后用一种师生框架让模型从部分损坏的输入预测清洁版本的特征，同时联合优化生成损失。实验覆盖图像（ImageNet及文本到图像）、视频、音频及多模态联合训练，在FID、FD-DINOv2、FVD、FAD等指标上均超越此前最强的外部对齐方法REPA及无外部模型基线SRA，并展现出符合预期的缩放特性。该方法甚至能提升RAE等语义自编码器的生成质量。实际意义在于统一了生成与表征学习，为免外部监督的多模态可缩放生成提供了新范式。主要局限是额外前向过程增加训练开销，且最优噪声调度需为每种模态单独调参。

### 🔗 开源详情

- 代码：未提供（项目页面仅包含论文和研究摘要，无代码仓库链接）
- 模型权重：未提供
- 数据集：未提供（ImageNet-1K和FMA为公开数据集，图像/视频/音频内部数据集和RT-1为已有数据集，但作者未公开新数据集）
- Demo：未提供（项目页面有补充网站，但无交互Demo）
- 复现材料：未提供
- 论文中引用的开源项目：
  - REPA (Yu et al., 2024)：https://arxiv.org/abs/2410.06940
  - FLUX.2 (Black Forest Labs, 2025)：https://bfl.ai/research/representation-comparison 及 https://github.com/black-forest-labs/flux2
  - SD-VAE (Rombach et al., 2022a)：https://huggingface.co/stabilityai/sd-vae-ft-mse
  - Wan2.2 (Wan et al., 2025)：https://arxiv.org/abs/2503.20314
  - Songbloom (Yang et al., 2025)
  - RAE (Zheng et al., 2025)：https://arxiv.org/abs/2510.11690
  - ImageNet-1K (Deng et al., 2009)
  - FMA dataset (Defferrard et al., 2017)：https://arxiv.org/abs/1612.01840
  - FMA genre recognition (Defferrard et al., 2018)：https://arxiv.org/abs/1803.05337
  - CLAP (Elizalde et al., 2022)：https://arxiv.org/abs/2206.04769
  - Guided-diffusion evaluations (Dhariwal & Nichol, 2021)：https://github.com/openai/guided-diffusion
  - SiT (Ma et al., 2024)
  - DINOv2 (Oquab et al., 2024)
  - DINOv3 (Siméoni et al., 2025)：https://arxiv.org/abs/2508.10104
  - SigLIP 2 (Tschannen et al., 2025)：https://arxiv.org/abs/2502.14786
  - V-JEPA 2 (Bardes et al., 2024)：https://arxiv.org/abs/2502.03444
  - Depth Anything 3 (Lin et al., 2025)
  - MERT (Li et al., 2024c)：https://arxiv.org/abs/2306.00107
  - SRA (Jiang et al., 2025)：https://arxiv.org/abs/2505.02831
  - LayerSync (Haghighi et al., 2025)：https://arxiv.org/abs/2510.12581
  - RT-1 (Brohan et al., 2023)：https://arxiv.org/abs/2212.06817
  - SIMPLER simulator (Li et al., 2024a)：https://arxiv.org/abs/2405.05941
  - FLUX.1 Kontext (Labs et al., 2025)：https://arxiv.org/abs/2506.15742
  - REPA-E (Leng et al., 2025a)：https://arxiv.org/abs/2504.10483
  - End-to-End Tuned VAEs (Leng et al., 2025b)：https://end2end-diffusion.github.io/repa-e-t2i/
  - VideoMAEv2 (Wang et al., 2023)
  - Inception (Szegedy et al., 2015)

### 🏗️ 方法概述和架构

Self-Flow整体框架在标准流匹配（Rectified Flow）基础上引入自监督表征对齐，流程为：给定干净输入 \(x_0\)，采样两个时间步 \(t\) 和 \(s\)，按概率 \(R_M\) 对部分token分配较低的噪声时间步 \(\min(t,s)\)，其余token分配较高的时间步，构造异质噪声向量 \(\tau\)，再通过公式 \(x_\tau = \text{diag}(1-\tau)x_0 + \text{diag}(\tau)x_1\) 生成噪声输入 \(x_\tau\)。随后进行两次前向传播：一次处理异质噪声输入 \(x_\tau\) 的“学生”网络 \(f_\theta\)，另一次处理全部token取较清洁时间步 \(\tau_{\min} = \min(t,s)\) 的版本 \(x_{\tau_{\min}}\)，其中教师网络 \(f_{\theta'}\) 为学生网络的EMA副本。生成损失 \(\mathcal{L}_{gen}\) 为标准的流速度场回归 \(\|f_\theta(x_\tau, \tau) - (x_1 - x_0)\|^2\)；表征损失 \(\mathcal{L}_{rep}\) 要求学生网络某一中间层（深度 \(l=0.3D\)）的投影特征尽量接近教师网络对应层（深度 \(k=0.7D\)）的特征，使用余弦相似度度量。总损失为 \(\mathcal{L} = \mathcal{L}_{gen} + \gamma \cdot \mathcal{L}_{rep}\)，其中 \(\gamma=0.8\)。该架构不依赖任何外部模型，DTS实现了天然的信息不对称（如图3、图8所示），既保持了推理时的均匀噪声边际，又迫使模型通过清洁上下文推断缺失信息，从而学会强语义表征。选择DTS而非全掩码或独立时间步是因为后者会产生训练-推理失配，导致生成质量崩塌（如图2b所示）。论文在附录A中证明，DTS损失的最小点同样最小化标准条件流匹配（CFM）损失，保证了理论基础。该方法可无缝应用于图像、视频、音频及多模态混合训练，只需为各模态配备独立的输入/输出投影层，其余Transformer权重共享。模型扩展时间步条件从单标量 \(t \in \mathbb{R}^1\) 到向量形式 \(t \in \mathbb{R}^N\)，使得每个token以其对应的噪声时间步作为条件。

![图1](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/HoThWhfxiK-p25-v9cf9fbcb.jpg)

![图2](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/HoThWhfxiK-p26-vdd989cf9.jpg)


### 💡 核心创新点

- 双时间步调度（DTS）与自监督集成：在流匹配中引入异质噪声，创造信息不对称，促使模型利用清洁token推断噪声token，从而主动学习全局表征，规避了全掩码或扩散强制的训练-推理差距。DTS在不改变每token边际噪声分布的前提下实现了异构噪声，保证了推理兼容性。
- 无外部模型的Teacher-Student表征蒸馏：利用模型自身的EMA版本作为表征教师，在无任何预训练外部编码器的情况下实现有效的特征对齐，消除了对外部表示模型的依赖及其带来的逆缩放律瓶颈（图2a验证了更强DINO变体反而降低性能）。
- 统一的生成-表征学习范式：将表征损失与生成损失有机结合，证明这种联合优化能够让生成质量超越使用DINOv2等强外部编码器的REPA，并且能够在图像、视频、音频及多模态联合训练中一致生效。
- 多模态联合训练的平滑缩放：在混合模态训练中，通过调整模态权重即可同时提升图像、视频、音频各维度的性能，并且随着模型容量和计算量增加，Self-Flow相对于外部对齐方法的优势持续扩大，遵循正常缩放律（图6、图18）。

### 📊 实验结果

主要定量结果如下（部分为论文提供数值）：

ImageNet 256×256 类条件生成
| 模型 | 步数 | FID↓ | sFID↓ | IS↑ | Precision↑ | Recall↑ |
|------|------|------|-------|----|-----------|------|
| SiT-XL/2 | 7M | 8.3 | 6.30 | 130.57 | 0.69 | 0.67 |
| SRA | 4M | 7.27 | 5.87 | 143.06 | 0.69 | 0.68 |
| Ours | 4M | 5.70 | 4.97 | 151.40 | 0.72 | 0.67 |
| REPA（用DINOv2-B）| 4M | 5.89 | 5.73 | 157.66 | 0.70 | 0.69 |
| RAE | 1M | 3.24 | 6.73 | 218.53 | 0.83 | 0.54 |
| RAE + Ours | 1M | 2.95 | 5.50 | 222.34 | 0.84 | 0.56 |

文本到图像（T2I）
| 模型 | 步数 | FID↓ | sFID↓ | IS↑ | Precision↑ | Recall↑ | FD-DINOv2↓ | CLIP↑ |
|------|------|------|-------|----|-----------|------|---------|------|
| Vanilla Flow | 1M | 4.08 | 8.16 | 20.49 | 0.62 | 0.64 | 204.49 | 30.66 |
| SRA | 1M | 3.70 | 8.05 | 21.00 | 0.63 | 0.64 | 176.79 | 30.78 |
| Ours | 1M | 3.61 | 8.14 | 21.19 | 0.64 | 0.65 | 167.98 | 30.88 |
| REPA | 1M | 3.92 | 8.20 | 21.16 | 0.63 | 0.65 | 173.35 | 30.67 |
| SigLIP 2 | 1M | 3.97 | 8.13 | 20.65 | 0.63 | 0.64 | 196.75 | 30.68 |

视频生成
| 模型 | 步数 | FVD↓ | FID↓ |
|------|------|------|------|
| Vanilla Flow | 600K | 50.95 | 9.28 |
| SRA | 600K | 49.75 | 9.02 |
| Ours | 600K | 47.81 | 8.92 |
| REPA w/ DINOv2 | 600K | 49.59 | 9.39 |
| REPA w/ Depth Anything 3 | 600K | 51.52 | 9.85 |
| REPA w/ V-JEPA2 | 600K | 53.55 | 9.91 |

音频生成
| 模型 | 步数 | CLAP↓ | CLAP-M↓ | CLAP-A↓ |
|------|------|------|--------|--------|
| Vanilla Flow | 350K | 148.874 | 0.1695 | 0.1059 |
| SRA | 350K | 147.215 | 0.1664 | 0.1034 |
| Ours | 350K | 145.645 | 0.1634 | 0.1001 |
| REPA w/ MERT | 350K | 148.883 | 0.1677 | 0.1040 |

关键消融：去除表征损失 \(\mathcal{L}_{rep}\) 导致FID大幅恶化（从约5.7升至>10），去掉DTS的掩码机制或改变第二个时间步为仅略低于主时间步（\(s \in [t, t-0.2]\)）均造成显著退化。改用 \(\ell_1\) 损失则训练不稳定，特征范数增长引发后期FID上升。缩放实验中，625M参数的Self-Flow性能已超越1B参数的REPA，且性能差距随模型容量增加而持续拉大。

多模态联合训练消融（图8a、表6）显示，在极端偏置某模态的权重设置下，Self-Flow在所有模态上均一致提升性能。机器人控制迁移实验（图7、图8b）表明，Self-Flow学到的表征在复杂多步推理任务（Move Near、Open and Place）上表现出显著优势。

![图3](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/HoThWhfxiK-p27-vf85fd8c6.jpg)

![图4](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/HoThWhfxiK-p28-v334cb427.jpg)


### 🔬 细节详述

- 训练数据：ImageNet-1K（1.28M类条件图像）；T2I用内部20M图文对（从200M内部数据集中选取）；视频用内部6M视频；音频用FMA 1M 10秒片段；多模态混合实验用20M图像、6M视频、1M音频；机器人实验用RT-1（73.5k episodes）。视频数据附有三种不同粒度的纯视觉描述、一条音频描述和一条视听描述。
- 损失函数：\(\mathcal{L}_{gen}\) 为标准流速度回归（MSE）；\(\mathcal{L}_{rep}\) 为余弦相似度损失，系数 \(\gamma=0.8\)。总损失 \(\mathcal{L} = \mathcal{L}_{gen} + \gamma \cdot \mathcal{L}_{rep}\)。
- 训练策略：EMA衰减率0.9999，学生层深度比 \(l=0.3D\)，教师层深度比 \(k=0.7D\)。各任务训练步数单独设定（ImageNet 4M步，T2I 1M步，视频600K步，音频350K步等）。优化器、学习率、warmup、batch size等未明确给出。每个模态选择不同的shift参数和噪声掩码比 \(R_M\)（图像0.25，音频0.5，视频0.1）。模态权重在多模态训练中手动设定。图像批次以57%概率采样，视频30%，音频13%。所有定量评估无CFG。
- 关键超参数：模型约625M参数（FLUX架构），隐藏维度1152，MLP ratio 4，注意力头16，7个双MM块+14个单块，3D RoPE 24通道，使用SwiGLU激活。投影头增加约10M参数。
- 训练硬件：未说明。
- 推理细节：50步ODE，采样shift因AE而异；CFG尺度图像3.5，视频/音频5。定量评估无CFG。ImageNet用250步SDE（SD-VAE）或50步ODE（RAE）。
- 正则化/稳定技巧：使用EMA教师网络（衰减0.9999），未提及额外正则化。

### ⚖️ 评分理由

*   创新性 (1.5/2)：将自监督表征学习内化到流匹配中的想法确实解决了外部编码器依赖带来的各类痛点，DTS设计巧妙（如图3、图8所示），有理论附录支撑，与先前无外部模型的工作（SRA、LayerSync）拉开了差距。但在更广义的 SSL+diffusion 领域，双路不对称输入的设计与 BYOL/MAE 等范式有明显亲缘，方法层面的原始突破感稍弱。
*   技术严谨性 (1.5/1.5)：DTS 的物理解释清晰，附录A中证明了 DTS 损失的最小点同样是最小化标准 CFM 损失，无逻辑漏洞。各项消融实验（图11a、图19）充分暴露各组件的作用，层选择消融和噪声调度消融细致。损失设计无过度简化。
*   实验充分性 (1.5/1.5)：涵盖4种模态、与外部/内部多种强基线对比、缩放分析（图6、图18）、消融研究、多模态联合训练（图8a、表6）及机器人迁移实验（图7、图8b），非常完备。音频部分对比了专用的MERT编码器，并测试了多个shift和掩码比，选择过程公开透明（图14）。尽管缺少统计显著性检验和人工主观评测，但数值差异足够显著且多数趋势一致。
*   清晰度 (1.0/1)：论文组织合理，图示（图3、图8等）清晰，各公式定义明确。附录补充了大量AE配置、shift分布曲线和额外结果，整体易读。但训练硬件、学习率、优化器等精准复现参数在正文和附录均未完整交代。
*   影响力 (0.4/1.5)：对生成式模型社区（尤其是视觉）具有显著参考价值，无需外部编码器的范式若被验证可超大规模应用，将影响整个flow/diffusion训练管线。但对语音/音乐/音频领域而言，音频实验仅是方法普适性的一个附加证明，并非以音频问题为驱动，音频评估也较浅，因此对纯音频研究者的直接影响力相当有限，符合非音频核心工作影响力不超过0.5分的规则。
*   开源 (0.0/1.5)：论文仅给出项目页面链接（bfl.ai/research/self-flow），未提供代码、模型权重或数据集，且文中未提及任何开源计划。符合完全不公开的判定。
*   可复现性 (0.25/0.5)：提供了丰富的架构（图25）、AE、噪声调度（图22）和掩码比等细节，但缺失学习率、优化器选择、batch size、训练硬件等基础训练参数，导致外部团队无法直接复刻训练过程。仅在部分模块给出超参网格搜索的思路。
*   工程/实践价值 (1.0/1.5)：方法可直接嵌入现有FLUX等流匹配框架，无需引入外部模型依赖，简化了部署管线，对工业级多模态生成系统的训练有指导意义。文中也展示了4B参数模型及文本渲染等工程应用。但额外前向传递增加了约30%-50%的训练计算开销，缺乏详细的部署效率评测和完整的生产效率对比。

### 🚨 局限与问题

论文明确承认的局限：额外前向传递增加了训练开销；噪声调度 \(p(t)\) 需要针对不同模态和AE单独调参，最优调度仍依赖经验搜索。
审稿人发现的潜在问题：
- 音频实验仅用FAD（CLAP系列）等分布指标（表4、图5d），未进行人耳主观评测或具体音质/语义相关性测试，难以判断实际听感提升是否显著。FAD分数提升幅度较小（CLAP分数从148.874降至145.645），在感知上可能难以区分。
- 方法的价值高度依赖流匹配的EMA师生框架，若教师网络不稳定或学生层选择失当，可能导致崩溃。论文虽在ImageNet上进行了层选择消融（图21），但未在视频和音频模态上验证层选择的通用性。
- 音频实验中，Self-Flow的最优设置选择了训练shift 1.0（高于baseline的0.75），且掩码比高达0.5（对图像仅0.1-0.25）。这可能暗示音频模态中信息不对称程度与视觉模态有本质差异，需要更大幅度的破坏才能产生有效表征信号，但论文未对此展开深入分析。
- 虽然声称“多模态泛化”，但所有多模态实验均在内部私有数据集上完成，开放性低，社区无法验证其跨数据集和跨任务的鲁棒性。视频数据集描述中提及包含“motion”聚焦，可能存在数据偏见，影响泛化结论。
- 未与近期使用端到端训练自编码器的方法（如REPA-E）进行联合对比。虽然结合RAE做了部分实验（表1、图4a），但REPA-E的端到端范式是否可以进一步缩小或逆转与Self-Flow的性能差距，尚未可知。
- 机器人实验仅在RT-1（73.5k episodes）小规模子集上进行，且任务数量有限（4类任务共50次评估），虽然有方差估计，但统计说服力有限。

### 📷 论文图片

![图5](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/HoThWhfxiK-p29-ve8fbb240.jpg)


---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/2026-07-04/)
