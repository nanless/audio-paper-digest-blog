---
title: "Precise Video-to-Audio Generation with Cross-Modal Alignment in Latent Space"
date: 2026-07-08
draft: false
tags: [流匹配, 音频生成]
categories: [论文速递]
description: "音视频生成 | 7.4/10"
hiddenInHomeList: true
---

# 📄 Precise Video-to-Audio Generation with Cross-Modal Alignment in Latent Space

#流匹配 #音频生成

**7.4/10** | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 0.2/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **7.4/10** | 前50% | #音视频生成 | #流匹配 | #音频生成 | [arxiv](https://arxiv.org/abs/2607.06405)


### 👥 作者与机构

- 第一作者：Thanh V. T. Tran（FPT Software AI Center, Vietnam）
- 通讯作者：未提及
- 作者列表：Thanh V. T. Tran（FPT Software AI Center, Vietnam）、Ngoc-Son Nguyen（FPT Software AI Center, Vietnam）、Luong Tran（FPT Software AI Center, Vietnam）、Long-Khanh Pham（FPT Software AI Center, Vietnam）、Paarth Neekhara（NVIDIA Corporation, USA）、Shehzeen Hussain（NVIDIA Corporation, USA）、Van Nguyen（FPT Software AI Center, Vietnam）

### 💡 毒舌点评

Flowley 用一个设计巧妙的渐进软掩码交叉注意力（PSCA），将音视频对齐悄无声息地嵌入了流匹配的去噪过程，实现了零额外参数的精准同步，这一点值得肯定。但这项工作的规模优势叙事略显取巧：在200K的VGGSound上打败更大模型固然吸睛，但零样本测试立刻暴露了语义理解的天花板（IB-Score仅为Movie Gen的六成），说明所谓的SOTA高度依赖训练分布。SoundCap看似锦上添花，实则是将大型AV-LLM的算力和错误风险转移到了数据预处理阶段，且其产出成为黑箱，开源承诺缺失让这一"即插即用"模块的复现与验证沦为空谈。整篇工作工程味道略重，架构创新本质上是对成熟模块的精心重组，对领域长远理论突破的推动有限。

### 📌 核心摘要

论文提出了Flowley，一个基于流匹配的单阶段、端到端视频到音频生成框架，旨在解决现有多阶段方法计算成本高、基于文本中介的方法丢失细粒度时序信息的问题。核心方法由两部分构成：（1）在单流块中引入渐进软掩码交叉注意力（PSCA），通过一个预定义的、随网络深度逐层收缩的软掩码，强制音频查询仅关注其在时间上对应的视频帧附近，以零额外参数和计算开销实现精准的音视频时序对齐。（2）提出SoundCap，一种独立的数据增强流水线，利用视听大模型从视频-音频对生成声音感知的详细描述来微调视觉语言模型，使其仅凭视觉即可预测丰富的声音描述，从而为生成模型提供更高质量的文本条件。在VGGSound上的实验表明，Flowley（169M参数）在KAD、FAD、IS等指标上取得最优，并在主观评估的时序对齐上超越依赖预训练同步模块的基线。添加SoundCap后性能进一步提升。零样本实验中，Flowley+SoundCap在Movie Gen Audio Bench上以IS超过大77倍的Movie Gen Audio，但语义对齐分数差距明显。消融实验证实了PSCA的渐进衰减与SoundCap噪声条件的关键作用。主要局限在于训练数据单一导致泛化能力受限，对齐指标可能存在评估偏差。

### 🔗 开源详情

- 代码：未提供。
- 模型权重：未提供。
- 数据集：
  - 训练及主要评估数据集：VGGSound（未提供获取链接）。
  - 零样本测试集：Movie Gen Audio Bench（未提供获取链接）。
  - SoundCap生成的精标注数据集：未开源。
- Demo：项目主页 https://flowley-v2a.github.io （包含示例与演示）。
- 复现材料：论文主体及附录中给出了网络架构、推理配置和部分训练配置，但缺少学习率、批量大小、训练轮次等核心复现参数。
- 论文中引用的开源项目：Frieren, FoleyCrafter, V2A-Mapper, MDSGen, MMAudio, CLIP, FLAN-T5, BigVGAN, ImageBind, LanguageBind, PANNs等，论文中均通过引用文献指明。

### 🏗️ 方法概述和架构

Flowley是一个端到端的流匹配框架，输入为静音视频帧和可选文本，输出为语义一致且时序同步的音频波形。其核心设计采用“多流块→单流块”的两阶段范式，旨在解耦跨模态融合与特定模态的精细化生成。



![Figure 1: (a) The proposed Flowley framework consists of two core modules. (b) First, visual, textual, and audio latent representations are processed together through the multi-stream block. (c) Latent features are then passed into the single-stream block, where they undergo weighted cross-attention with the visual and textual streams to estimate the flow field. At inference time, we integrate this learned flow using standard ODE solvers to generate the compressed mel-spectrogram, which is subsequently decoded and vocoded into the final audio waveform.](https://arxiv.org/html/2607.06405v1/x1.png)



上图（图1）清晰地展示了Flowley的整体框架。左图显示了模型的主要流程：输入噪声、视频和文本特征经过多流块（Multi-Stream Block）进行深度跨模态交互，随后送入单流块（Single-Stream Block）进行精细化处理，最终通过ODE求解器和VAE解码器得到音频波形。中图和右图分别放大了这两种块的核心结构：多流块（中图）内部通过“联合注意力（Joint Attention）”机制，将音频、视频、文本三种模态的特征拼接后进行统一的自注意力计算，实现了全局的跨模态融合。单流块（右图）则展示了其关键组件：标准的文本交叉注意力与创新的“渐进软掩码交叉注意力”并行工作，前者负责语义引导，后者负责精确的时序对齐，两者输出通过一个可学习权重α进行加权融合。

输入表征与条件
系统接收三种模态的输入序列。视觉特征 \(f_{vis} \in \mathbb{R}^{L_{vis} \times D_{vis}}\) 由CLIP模型从以8FPS采样的视频帧中逐帧提取，未使用任何预训练的时间聚合模块。文本特征 \(f_{txt} \in \mathbb{R}^{L_{txt} \times D_{txt}}\) 由FLAN-T5编码器获得，序列长度上限为77。音频潜变量 \(x_t\) 是音频经VAE（从16kHz波形转为梅尔谱后再压缩）的潜空间表示，序列长度为 \(L_{aud}\)，维度为 \(D_{aud}\)。一个全局条件向量 \(c \in \mathbb{R}^{1 \times D}\) 由视觉和文本特征的平均池化与时步嵌入相加得到，通过自适应层归一化（adaLN）注入网络的各层，提供全局生成导向。

多流块
模型首先经过 \(N_1\) 个多流块，其基于MM-DiT架构（如图1中图所示）。块内将视频、文本、音频三种模态的token序列拼接，进行联合自注意力计算，以实现深度的跨模态全局交互。为保证训练稳定性，块内集成了QK-Norm和旋转位置编码（RoPE）。多流块的输出是经过充分跨模态融合的多模态表征。

单流块与渐进软掩码交叉注意力（PSCA）
多流块的输出音频流被送入 \(N_2\) 个单流块（结构如图1右图所示）进行精细去噪。单流块基于DiT架构扩展，核心在于双路交叉注意力机制：一路为标准的文本交叉注意力（CA(Q_aud, K_txt, V_txt)），负责语义引导；另一路为PSCA，负责时序对齐。



![Figure 2: Mask values within the fade region of the progressive soft-mask MM across all N2=10N_{2}=10 single-stream blocks, using ω=0\omega=0 and δ=10\delta=10.](https://arxiv.org/html/2607.06405v1/x2.png)



PSCA的核心是一个预定义的、依赖于层索引的软掩码矩阵 \(M^{(\ell)}\)。对于音频位置 \(i\) 和视频帧 \(j\)，其距离 \(d_{ij}\) 决定了掩码值。掩码设计包含三部分：硬窗口 \(\omega\) 内完全保留注意力；软窗口 \(\delta\) 内使用余弦函数 \(\mathcal{F}\) 平滑衰减；超过此范围则完全抑制（值为0）。\(M^{(\ell)}_{ij}\) 的独到之处在于引入了一个层相关的衰减因子 \(\beta_\ell = 1 - \ell/(N_2-1)\)，乘在软窗口区域。上图（图2）直观地展示了这种渐进式设计的效果：在10个单流块（Block 0到Block 9）中，掩码值 \(M_{ij}\) 随层索引 \(\ell\) 增加而迅速衰减。Block 0的掩码最宽，允许模型捕获较远距离的上下文；而Block 9的掩码几乎完全收紧，强制模型仅关注最精确对齐的帧附近。这使得浅层掩码更宽，允许模型捕获大范围的上下文；深层掩码则收紧至近零，强制模型仅关注最精确对齐的帧，实现由粗到细的渐进式对齐。该掩码通过 \(\text{softmax}(QK^T/\sqrt{d_k} + \log(M^{(\ell)}+\epsilon))\) 无缝嵌入标准注意力计算，不引入任何额外模块或参数。文本和视觉两路交叉注意力的输出通过一个可学习的参数 \(\alpha^{(\ell)} \in [0,1]\) 进行加权融合，动态平衡语义一致与时间同步。

训练与推理
模型在VGGSound上以流匹配目标（FM损失结合方向余弦损失）进行训练。论文提出了切线型噪声调度来强化中间时间步的学习。



![Figure 3: Distribution of tangent-based and logit-normal schedulers.](https://arxiv.org/html/2607.06405v1/x3.png)



上图（图3）对比了切线型调度器（Tangent-based）和常用的logit-normal调度器在时间步 \(t\) 上的概率密度分布。可以看到，logit-normal分布在边界（\(t=0\) 和 \(t=1\)）处的概率密度趋近于零，而切线型分布在边界处仍保持较高的概率密度。这验证了主模型提到的，该设计旨在“克服logit-normal边界密度为零的问题”，从而让模型在整个时间步范围内得到更充分的训练，提升了训练稳定性。并使用数据-噪声对齐策略。推理时，使用25步欧拉求解器解ODE，并应用分类器自由引导（CFG，训练时以10%概率随机丢弃视觉或文本条件）。最终输出的音频潜变量经VAE解码为梅尔谱，再由BigVGAN声码器合成波形。

SoundCap



![Figure 4: Overview of SoundCap’s ground-truth generation, training, and inference pipeline. Blue labels denote audio events that a standard VLM can detect, while red labels highlight events that are challenging to infer from visuals alone.](https://arxiv.org/html/2607.06405v1/x4.png)



SoundCap是一个独立于Flowley训练的即插即用模块。上图（图4）展示了其完整的流程，分为“真值生成过程”和“训练/推理过程”两部分。其流程分为两步：首先，给定视频-音频对，利用视频-SALMONN这个视听大模型（图4上部），配合精心设计的指令提示，生成包含细节声音（尤其是离屏和环境声，如图中红色标注的“crowd buzzes”和“cheers”）的描述文本 \(T_a\)。蓝色标注的“splashing water”则代表标准VLM可能检测到的音频事件。然后，以 \(T_a\) 为监督信号，对视觉语言模型Qwen2.5-VL进行微调（图4下部），训练其仅凭视频输入就能预测出 \(T_a\)。推理时，仅运行微调后的VLM，为输入视频生成声音感知的丰富描述，再作为额外的文本条件输入到Flowley中。

### 💡 核心创新点

1. 渐进软掩码交叉注意力（PSCA）：区别于依赖外部位移检测器、能量预测器或预训练音视频对齐模块的方法，PSCA以零额外参数和计算开销，将时序对齐先验直接注入注意力计算。其层依赖的渐进收紧设计（由 \(\beta_\ell\) 控制，如图2所示）模拟了从上下文理解到精准同步的通道，是该方法的核心巧思。
2. SoundCap数据增强流水线：为缓解V2A数据集严重缺乏高质量声音描述的问题，提出了一个通用的两步法（如图4所示）：先用AV-LLM从真实音频中蒸馏出详细的声音描述，再用其微调VLM，赋予其从纯视觉推断丰富声音事件的能力。此方法可服务于任何V2A模型。
3. 单阶段多流-单流融合架构：结合多流块的跨模态联合建模与单流块（配备文本CA+PSCA）的精细化音频去噪（如图1所示），在169M的小参数规模下，实现了高效的端到端训练，摆脱了对多阶段训练或冻结T2A模型的依赖。
4. 切线型噪声调度与方向损失：针对传统logit-normal分布在端点密度为零的缺陷，提出切线型时间步采样分布（如图3所示），结合余弦方向损失函数，使流匹配训练覆盖更完整的时间步范围，提升训练稳定性。

### 📊 实验结果

Table 1: VGGSound 测试集结果

| Method | Params ↓ | KAD↓ | FAD↓ | KL↓ | IS↑ | IB-Score (×100) ↑ | LB-Score (×100) ↑ | Align Acc↑ |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| Frieren | 159M | 1.27 | 12.8 | 2.82 | 12.02 | 22.45 | 19.09 | 97.13 |
| FoleyCrafter | 1.22B | 1.54 | 19.17 | 2.19 | 15.09 | 25.75 | 24.66 | 77.15 |
| V2A-Mapper | 229M | 1.34 | 11.73 | 2.50 | 12.43 | 22.38 | 22.32 | 79.08 |
| MDSGen | 131M | 5.33 | 39.68 | 2.85 | 6.87 | 17.75 | 19.05 | 91.70 |
| Mel-QCD | 859M | 1.53 | 19.17 | 2.09 | 10.32 | 23.79 | 23.80 | 73.85 |
| VinTAGe | 1.32B | 1.08 | 17.88 | 2.15 | 17.34 | 21.10 | 21.51 | 67.11 |
| MMAudio | 157M | 0.57 | 7.89 | 1.91 | 12.68 | 28.09 | 21.98 | 89.73 |
| MMAudio + SoundCap | 157M | 0.39 | 7.09 | 1.56 | 14.68 | 28.85 | 22.64 | 90.53 |
| Flowley | 169M | 0.42 | 7.65 | 1.57 | 18.25 | 29.32 | 24.87 | 89.37 |
| Flowley + SoundCap | 169M | 0.39 | 7.52 | 1.56 | 19.68 | 30.07 | 25.33 | 90.02 |

注：粗体为最优值，下划线为次优值。参数量不包括特征编码器、解码器及声码器。Flowley在Align Acc以外的所有指标上均达到最优。

Table 6: Movie Gen Audio Bench 零样本性能

| Method | Params | Data(h) | IS↑ | IB-Score (×100) ↑ | Align Acc↑ |
|:---|:---|:---|:---|:---|:---|
| Movie Gen Audio | 13B | ~1M | 8.01 | 35.86 | 64.33 |
| Flowley | 169M | ~400 | 7.74 | 23.65 | 59.28 |
| Flowley + SoundCap | 169M | ~400 | 8.18 | 25.78 | 61.07 |

消融实验核心发现
- PSCA超参数 (Table 2)：\(\omega=0, \delta=4\) 时取得最优Align Acc (89.37)。增大窗口会因引入更多潜在不对齐风险而导致同步性指标下降，但IS和IB-Score保持稳定。
- 单流块组件 (Table 3)：同时去除文本和视觉交叉注意力（退回原始DiT）导致所有指标大幅下降。替换PSCA为标准视觉CA会使Align Acc从89.37降至87.61。
- 渐进参数 \(\beta\) (Table 4)：去除层依赖的衰减因子，IS（17.78）和Align Acc（88.62）均有下降，但IB-Score（29.53）略微提升，表明\(\beta\)在权衡对齐与语义中发挥作用。
- SoundCap噪声处理 (Table 5)：在SoundCap提示中不加噪声条件，Flowley+SoundCap的IS反而从18.25跌至15.16，KAD从0.42升至0.45，证明应对VGGSound数据集中固有噪声的指令设计对防止模型退化至关重要。

主观评估
论文通过在30个视频上进行两两比较的主观评估，验证了Flowley的优越性。[图像补充] 根据图5、图6和图7所示的详细结果，Flowley在三个维度上均表现出色：
- 在 音频质量 上（图5），Flowley对大多数基线都有明显的胜率。
- 在 语义对齐 上（图6），Flowley的胜率进一步提高，尤其对VinTAGe、FoleyCrafter等模型优势显著。
- 在 时序对齐 上（图7），Flowley展现了压倒性优势，对除Frieren和MMAudio外的所有基线胜率均超过69%，甚至对MMAudio在主观评估中也获得了18.7%的胜率。这有力地支持了主模型的结论：“Flowley在主观同步性上被人类显著偏好”，并与表1中Flowley在Align Acc上略低于MMAudio的客观结果形成对比，揭示了模型式对齐指标存在的潜在偏置。



![(a) Audio Quality.](https://arxiv.org/html/2607.06405v1/x5.png)





![(b) Semantic Alignment.](https://arxiv.org/html/2607.06405v1/x6.png)





![(c) Temporal Alignment.](https://arxiv.org/html/2607.06405v1/x7.png)

### 🔬 细节详述

- 训练数据：主要使用VGGSound，包含约20万条10秒视频，仅使用前8秒。零样本测试在Movie Gen Audio Bench（合成数据集）上进行。
- 损失函数：总损失 \(\mathcal{L} = \mathcal{L}_{FM} + \lambda \mathcal{L}_{vel}\)，其中 \(\mathcal{L}_{FM}\) 为预测速度与真实速度 \((x_1 - x_0)\) 的MSE，\(\mathcal{L}_{vel}\) 为两者的余弦距离损失，\(\lambda=0.5\)。
- 噪声调度：切线型采样 \(t = 1 - 1/(\tan(\pi u/2) + 1)\)，克服logit-normal边界密度为零的问题（如图3所示）。使用数据-噪声对齐加速训练。
- 架构配置：多流块 \(N_1=5\)，单流块 \(N_2=10\)，隐藏维度 \(D=512\)，注意力头数8，FFN倍率4，dropout 0.1。PSCA 中 \(\omega=0, \delta=4\)。
- 训练策略：CFG训练时以10%概率丢弃视觉或文本条件。具体的学习率、批量大小、优化器类型、训练轮次及硬件配置未在正文中说明，指向“Supplementary Material”。
- 推理：先验噪声 \(\mathcal{N}(0,1)\)，25步欧拉求解器，CFG强度 \(s=7.5\)。VAE解码为梅尔谱后用BigVGAN声码器合成波形。
- SoundCap配置：使用video-SALMONN生成真值文本，微调Qwen2.5-VL一个epoch。推理时仅用微调后的VLM。
- 评估指标：分布距离（FAD, KAD, KL）、音频质量（IS）、语义对齐（IB-Score, LB-Score）、同步性（Align Acc）。

### ⚖️ 评分理由

*   创新性 (1.3/2)：PSCA将手工设计的对齐先验以零额外参数的方式融入注意力机制，并引入渐进式设计，精明且高效。SoundCap解决数据短板问题，但本质是成熟模型的工程化组合。整体对领域无范式级颠覆，但提供了有价值的、可借鉴的技术点。
*   技术严谨性 (1.2/1.5)：PSCA的掩码和渐进策略有清晰数学定义和消融支撑。但对Align Acc指标可能存在的偏置（文中已承认）缺乏深入分析和补救措施。SoundCap的噪声指令设计虽有效，但属经验性方案。整体技术路线正确，但在严谨性上留有余地。
*   实验充分性 (1.3/1.5)：实验设计全面，包含客观指标、与多个基线对比、零样本测试、消融实验及主观评估（如图5-7所示，提供了详细的主观偏好对比数据）。零样本实验大胆但有价值。主要扣分点在于：缺少生成多样性的评估；未进行统计显著性检验；未分析长视频或复杂多事件场景下的表现，使其在真实Foley应用中的有效性论证不足。
*   清晰度 (0.9/1)：行文逻辑清晰，图示(Fig. 1, 2, 3, 4)能有效传达架构、PSCA原理、调度器设计和SoundCap流程。缺点在于将学习率、批量大小等关键训练超参完全置于附录，影响了正文的独立自洽性与复现的便利性。
*   影响力 (1.2/1.5)：为V2A任务提供了极高效的小参数量SOTA方案，对资源受限场景有吸引力。SoundCap作为数据增强思路可复用。但论文的贡献更多在于精巧的工程设计，对更广泛的音频/多模态社区的理论启发有限，其长期影响力存疑。
*   开源 (0.2/1.5)：仅提供项目页面（含Demo）和arXiv链接，未公开任何代码仓库、模型权重或SoundCap生成的数据集，严重阻碍复现和社区follow-up工作。
*   可复现性 (0.3/0.5)：尽管依赖的开源组件明确，架构细节和推理流程提供完整，但核心代码和训练超参缺失导致完整复现需要巨大的工程投入，不确定性高。
*   工程/实践价值 (1.0/1.5)：模型参数量小（169M），推理步骤少（25步），部署潜力高。但论文未提供推理延迟、显存占用等关键部署指标，且未开源模型，使其工业落地价值停留在纸面。

### 🚨 局限与问题

1. 论文明确承认的局限：训练数据仅限于VGGSound，限制了模型对更广泛视觉概念的泛化能力；现有V2A数据集（如VGGSound）本身存在噪音，依赖人工指令来缓解。
2. 审稿人发现的潜在问题：
   - 对齐指标偏置：论文承认Align Acc指标可能对Frieren/MDSGen等使用相同编码器的模型有利，但这引出了一个更严重的问题：PSCA的超参数（如硬窗口 \(\omega\) 和软窗口 \(\delta\)）是在该有偏指标上优化的。用于选择模型的指标和被怀疑有偏的指标是同一个，这可能会进一步放大偏置，导致选出的PSCA配置并非真正最优。
   - SoundCap的级联错误与黑箱：SoundCap将大量开销和复杂度转移到AV-LLM（视频-SALMONN）和VLM上，但未分析前者生成错误的声音描述（幻觉）会如何影响下游Flowley的训练。这种“教师模型”的错误会被“学生模型”（VLM）学习并固化，最终污染生成结果。且整个caption生成过程黑箱，不开源数据集更让外部无法评估其质量。
   - 时序对齐的尺度鲁棒性：PSCA依赖一个固定的时间映射关系（由视频和音频的采样率决定 \(j_c(i)\)）。对于 <8秒 的短视频或非8FPS采样的视频，该模块的实际表现未经讨论。其面对视频变速、快慢动作时的鲁棒性存疑，可能发生错位。
   - 评估维度缺失：严重缺乏对生成音频多样性的评估（如计算生成音频之间的分布差异）。模型可能只是学到了生成非常逼真的某几类声音，但对不同的视频输入输出模式单一。
   - 结论强度过高：声称其单阶段架构“消除了对预训练对齐模块的需求”，但在VGGSound上相对于此类方法的Align Acc提升并不显著，且零样本时大幅落后。在小数据上的效率优势不能等同于方法论上已“解决”该问题。

---

[← 返回 2026-07-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-08/)
