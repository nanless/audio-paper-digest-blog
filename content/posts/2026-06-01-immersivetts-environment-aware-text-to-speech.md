---
title: "ImmersiveTTS: Environment-Aware Text-to-Speech with Multimodal Diffusion Transformer and Domain-Specific Representation Alignment"
date: 2026-06-01
draft: false
tags: [语音合成, 多模态模型, 扩散模型, 自监督学习, 数据增强]
categories: [论文速递]
description: "语音合成 | 9.3/10"
hiddenInHomeList: true
---

# 📄 ImmersiveTTS: Environment-Aware Text-to-Speech with Multimodal Diffusion Transformer and Domain-Specific Representation Alignment

#语音合成 #多模态模型 #扩散模型 #自监督学习 #数据增强

🔥 **9.3/10** | 前25% | #语音合成 | #自监督学习 | #多模态模型 #扩散模型 | [arxiv](https://arxiv.org/abs/2605.30965v1)

学术质量 6.8/7 | 影响力 1.5/2 | 可复现性 1/2 | 置信度 高


### 👥 作者与机构

Jun-Hak Yun, Seung-Bin Kim, Seong-Whan Lee。Korea University, Seoul, Korea.

### 💡 毒舌点评

论文提出了一个解决环境感知TTS任务的完整框架，技术路线清晰，实验设计也较为扎实。MM-DiT架构在音频领域的适配和领域特定REPA的引入是其核心亮点。然而，这篇工作给人的感觉像是为一个相对小众、定义明确的任务（从文本生成带环境声的语音）“量身定制”了一套复杂的系统，其普适性和根本性贡献可能存疑。训练数据完全依赖合成混合是一个硬伤，虽然作者在局限性中承认，但其对模型实际泛化能力的影响可能比想象中更严重。此外，与精心设计的流水线（CosyVoice2 + TangoFlux）在部分指标上的差距表明，统一模型在当前阶段并未显示出全面的优越性，其“统一建模”带来的核心价值（交互一致性）缺乏更有力的量化证明。工作完成度高，但创新性的天花板似乎受限于任务本身。

### 📌 核心摘要

针对现有环境感知TTS方法在建模语音与环境音频跨模态交互方面的不足，本文提出了ImmersiveTTS。该框架基于多模态扩散Transformer（MM-DiT），采用双流设计：一条流处理文本条件化的环境上下文（由Flan-T5和CLAP提供细粒度与全局特征），另一条流处理与转录对齐的语音特征。两流通过联合注意力机制显式交互。为稳定训练并增强语义一致性，提出了领域特定表示对齐（REPA）目标，使用WavLM（语音专家）和ATST-Frame（音频专家）作为双教师模型，引导中间特征学习。实验证明，ImmersiveTTS在主观和客观指标上优于VoiceLDM和VoiceDiT等基线，且仅需25步采样，实现了效率与质量的平衡。消融研究验证了双流设计和REPA策略的有效性。

### 🔗 开源详情

- 代码：论文未提供明确的代码仓库链接（如GitHub）。摘要中提供了项目主页链接：https://jjunak-yun.github.io/ImmersiveTTS。
- 模型权重：未提及模型权重的下载链接（如HuggingFace或ModelScope）。
- 数据集：使用了LibriTTS（train-clean-360子集）和WavCaps数据集，但未提供具体的下载链接或开源协议。
- Demo：项目主页链接 https://jjunak-yun.github.io/ImmersiveTTS 可能包含在线演示或音频样本，论文未单独列出其他Demo地址。
- 复现材料：论文提供了详细的实现细节（架构参数、损失函数、训练超参数），但未提供具体的配置文件、检查点或复现脚本的下载链接。
- 论文中引用的开源项目：
    - Flux 架构：https://github.com/black-forest-labs/flux
    - WavLM (WavLM-base-sv)：https://huggingface.co/microsoft/wavlm-base-sv
    - Flan-T5-Large：https://huggingface.co/google/flan-t5-large
    - CLAP (clap-htsat-unfused)：https://huggingface.co/laion/clap-htsat-unfused
    - AudioLDM2 VAE：https://huggingface.co/cvssp/audioldm2
    - HiFi-GAN：未提供链接。
    - WavLM-Large：https://huggingface.co/microsoft/wavlm-large
    - ATST-Frame-Base：https://github.com/Audio-WestlakeU/audiossl
    - USAD-Base：https://huggingface.co/MIT-SLS/USAD-Base

### 🏗️ 方法概述和架构

ImmersiveTTS的架构核心是一个为环境感知TTS任务定制的多模态扩散Transformer（MM-DiT），其基础是Flow Matching生成模型。整体流程如图1所示。

1. 输入与条件化：
模型接收两类文本条件：内容提示（转录文本） 和 环境提示（环境描述）。
- 环境上下文流：采用双粒度条件策略。环境提示首先通过冻结的Flan-T5-Large编码器获取细粒度token序列（\(F_{\text{env}}\)），作为环境上下文流的输入序列。同时，通过冻结的CLAP文本编码器获取全局嵌入向量，该向量与扩散时间步嵌入结合后，通过自适应层归一化（AdaLN）模块全局调制整个Transformer，提供全局声学场景指导。
- 语音流：内容提示首先通过一个文本编码器和持续时间预测器，经单调对齐搜索（MAS）生成帧级的先验梅尔表示\(\mu\)。该表示经过一个卷积网络映射到与音频潜在空间对齐的特征\(F_{\text{cont}}\)，并与带噪声的音频潜在表示\(Z_t\)沿通道维度拼接，作为语音流的输入。

2. 双流MM-DiT骨干：
这是架构的核心，如图3所示。模型由双流DiT层和单流DiT层堆叠构成。
- 双流阶段：包含12个双流DiT块。每个块内，环境上下文流和语音流并行处理，但通过联合注意力（Joint Attention） 机制交换信息。具体而言，两个流的token序列被拼接后计算注意力，使得语音流能够动态关注环境流的上下文特征，实现显式的跨模态交互。这种设计允许语音生成过程在保持语言结构的同时，与环境线索协调。
- 单流阶段：双流阶段结束后，仅语音流的表示被送入后续的18个单流DiT块。在这些块中，表示仅通过自注意力层进一步精炼，以生成高保真的语音潜在特征。

3. 领域特定表示对齐（REPA）：
为了解决训练不稳定和语义不一致问题，引入了领域特定REPA损失（\(\mathcal{L}_{\text{REPA}}\)）。
- 双教师SSL编码器：使用两个冻结的专家模型作为对齐目标：WavLM-Large（语音专家，处理干净语音，侧重语言保真度）和ATST-Frame-Base（音频专家，处理混合音频，侧重环境声学事件）。此外，实验中还探索了USAD-Base作为统一编码器。
- 对齐机制：从语音流的中间层（实验中为双流阶段的第6或10个块）提取隐藏特征\(h_k\)，通过一个轻量级MLP投影器映射到目标SSL模型的表示空间，得到\(h'_k\)。然后，通过时间插值或池化将\(h'_k\)与对应的SSL目标特征\(r_k\)对齐到相同时间长度，计算负余弦相似度损失：
  \(\mathcal{L}_{\text{SSL}_{k}} = -\mathbb{E}_{X}\left[\mathrm{CosSim}(\tilde{r}_{k}, \tilde{h}^{\prime}_{k})\right]\)。
- 总对齐损失为各教师损失之和：\(\mathcal{L}_{\text{REPA}} = \sum_{k=1}^{K} \lambda_{k} \mathcal{L}_{\text{SSL}_{k}}\)，其中\(\lambda_k=1\)。

4. 训练与推理：
- 训练目标：总损失\(\mathcal{L} = \lambda_{\text{P}}\mathcal{L}_{\text{Prior}} + \lambda_{\text{D}}\mathcal{L}_{\text{Dur}} + \lambda_{\text{F}}\mathcal{L}_{\text{Flow}} + \lambda_{\text{R}}\mathcal{L}_{\text{REPA}}\)，所有权重为1。
- 推理：采用双引导（Dual CFG） 的Flow Matching ODE求解（欧拉法）。引导公式为：
  \(\tilde{v}_{\theta} = v_{\theta} + \omega_{\text{env}}(v_{\theta}|_{\text{env}, \emptyset_{\text{cont}}} - v_{\theta}|_{\emptyset_{\text{env}}, \emptyset_{\text{cont}}}) + \omega_{\text{cont}}(v_{\theta}|_{\emptyset_{\text{env}}, \text{cont}} - v_{\theta}|_{\emptyset_{\text{env}}, \emptyset_{\text{cont}}})\)。
  默认尺度为\(\omega_{\text{env}}=3, \omega_{\text{cont}}=3\)。

整个模型参数量约为450M，在音频潜在空间（由冻结的AudioLDM2 VAE编码）上进行生成，最终通过HiFi-GAN声码器合成波形。

![图1](https://arxiv.org/html/2605.30965v1/x1.png)

![图2](https://arxiv.org/html/2605.30965v1/x2.png)


### 💡 核心创新点

1.  将MM-DiT适配于环境感知TTS：首次将为图像-文本生成设计的MM-DiT（Flux）架构适配到语音-环境音频联合生成任务，通过双流设计和联合注意力机制显式建模跨模态交互。
2.  提出领域特定双教师REPA：针对语音和环境音频的异质性，设计了使用WavLM和ATST-Frame作为双教师的领域特定表示对齐策略，有效引导模型同时学习语言保真度和环境声学特性，稳定训练。
3.  建立综合评估体系：不仅定义了适用于该任务的多个MOS维度（SN-MOS, EC-MOS, ON-MOS），还进行了全面的消融研究（教师选择、对齐位置、采样步数、双引导尺度），并对比了单任务模型及混合流水线基线。

### 📊 实验结果

主要结果（环境感知TTS）

在AudioCaps测试集上的结果（Table 1）：

| 模型 | #Param. | NFEs | SN-MOS(↑) | EC-MOS(↑) | ON-MOS(↑) | WER(↓) | FAD(↓) | CLAP(↑) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ground Truth | - | - | - | - | - | 22.29 | - | 0.503 |
| Reconstructed | - | - | 4.08 ± 0.08 | 4.16 ± 0.08 | 3.49 ± 0.05 | 22.58 | - | 0.488 |
| VoiceLDM | 508M | 200 | 3.41 ± 0.06 | 3.33 ± 0.07 | 2.55 ± 0.05 | 16.45 | 8.75 | 0.229 |
| VoiceDiT | 566M | 200 | 3.47 ± 0.05 | 3.44 ± 0.07 | 2.63 ± 0.05 | 11.68 | 9.07 | 0.263 |
| ImmersiveTTS | 450M | 25 | 4.20 ± 0.07 | 3.48 ± 0.07 | 3.47 ± 0.05 | 8.06 | 5.80 | 0.308 |

在增强测试集（Seed-TTS test-en + AudioCaps test）上的结果（Table 2）：

| 模型 | #Param. | NFEs | SN-MOS(↑) | EC-MOS(↑) | ON-MOS(↑) | WER(↓) | FAD(↓) | CLAP(↑) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ground Truth (Augmented) | - | - | - | - | - | 7.86 | - | 0.317 |
| Reconstructed | - | - | 4.02 ± 0.08 | 3.95 ± 0.08 | 3.41 ± 0.07 | 3.59 | - | 0.291 |
| VoiceLDM | 508M | 200 | 3.32 ± 0.06 | 3.24 ± 0.07 | 2.91 ± 0.08 | 11.20 | 6.98 | 0.118 |
| VoiceDiT | 566M | 200 | 3.45 ± 0.06 | 3.38 ± 0.06 | 3.12 ± 0.08 | 7.08 | 5.37 | 0.134 |
| ImmersiveTTS | 450M | 25 | 4.18 ± 0.07 | 3.32 ± 0.06 | 3.23 ± 0.08 | 4.48 | 3.92 | 0.207 |

关键发现：
- 在两个测试集上，ImmersiveTTS在SN-MOS和ON-MOS上显著优于所有基线，表明其生成的语音更自然且与环境融合得更好。
- 在客观指标上，ImmersiveTTS取得了最低的WER、FAD和最高的CLAP分数，表明其在可懂度、音频质量和文本-音频语义对齐方面更优。
- 效率优势明显：仅需25步采样（NFEs），远低于基线模型的200步，实现了质量与效率的更优权衡。

消融研究（REPA策略）：
在AudioCaps测试集上的教师配置消融（Table 4）显示：
- 单教师策略中，WavLM降低WER，ATST-Frame提升CLAP。
- 双教师策略缓解了领域权衡，WavLM+ATST-Frame组合在所有指标上（WER: 8.06, FAD: 5.80, CLAP: 0.308）取得最佳性能，验证了互补专家引导的有效性。

采样步数分析（图2）：
随着NFEs增加，WER和FAD下降，CLAP上升。仅需9步，ImmersiveTTS在WES、FAD和CLAP上已超越使用200步的VoiceLDM和VoiceDiT，凸显其效率优势。

与混合流水线基线对比（附录F.2）：
如表8（AudioCaps测试集）所示：

| 模型 | WER(↓) | FAD(↓) | CLAP(↑) |
| :--- | :--- | :--- | :--- |
| VoiceLDM | 16.45 | 8.75 | 0.229 |
| VoiceDiT | 11.68 | 9.07 | 0.263 |
| AudioLDM2 (Speech) + AudioLDM2 (Audio) | 41.33 | 5.36 | 0.365 |
| CosyVoice2 + TangoFlux | 6.76 | 4.01 | 0.452 |
| ImmersiveTTS | 8.06 | 5.80 | 0.308 |

CosyVoice2与TangoFlux的流水线在WER、FAD和CLAP上均优于ImmersiveTTS。这表明，在单项指标上，精心设计的模块化流水线可能更优。ImmersiveTTS作为统一模型的优势更体现在端到端交互建模和推理效率上。

![图3](https://arxiv.org/html/2605.30965v1/x3.png)

![图4](https://arxiv.org/html/2605.30965v1/x4.png)


### 🔬 细节详述

- 数据构建：训练数据使用LibriTTS（train-clean-360子集，干净语音）和WavCaps（过滤后340k非语音环境音）合成混合，SNR在2-10dB间均匀采样，并以15%概率训练纯语音以维持能力。
- 预处理：音频下采样至16kHz，转换为64维梅尔谱图，由冻结的AudioLDM2 VAE编码为8通道潜在表示。
- 实现细节：模型在2张NVIDIA RTX A6000 GPU上训练400k步，AdamW优化器，学习率\(1\times10^{-4}\)，批大小8。速度预测器包含12个双流块和18个单流块，6个注意力头，隐藏维度1024，约450M参数。
- 评估细节：MOS评估通过Amazon Mechanical Turk进行，每项评估由20名美国本土英语者完成，随机抽取30个样本。主观评估包括SN-MOS、EC-MOS、ON-MOS和S-MOS。客观评估使用Whisper-Large-v3计算WER，WavLM-base-sv计算SECS，VGGish计算FAD，CLAP计算语义对齐分数。
- 引导尺度分析：附录D详细分析了双引导尺度（\(\omega_{\text{env}}, \omega_{\text{cont}}\)）的影响。过大的\(\omega_{\text{env}}\)（≥5）导致WER急剧上升；过大的\(\omega_{\text{cont}}\)虽然在一定范围内降低WER，但会导致FAD恶化和CLAP下降，表明其在语音清晰度与音频质量/场景一致性间存在权衡。

### ⚖️ 评分理由

- 创新性 (3/3)：将MM-DiT架构创新性地应用于环境感知TTS，并提出了针对性的领域特定双教师REPA策略，两者结合解决了该任务的核心挑战（跨模态交互与训练稳定性）。创新点清晰、具体且有效。
- 技术严谨性 (1.5/1.5)：方法描述详尽，包括双流交互机制、REPA对齐公式、训练目标、推理流程等。消融研究（教师选择、对齐位置、引导尺度）系统且深入，有力支撑了设计选择。
- 实验充分性 (1.3/1.5)：实验设计全面，包含主观/客观评估、消融研究、采样步数分析、与单任务模型及混合流水线的对比。但主要对比基线仅限于VoiceLDM和VoiceDiT，尽管附录F补充了更广泛对比，但主实验部分的对比范围可进一步扩大。
- 清晰度 (1/1)：论文结构清晰，图表（图1、图3）直观展示了架构，表格数据完整，写作逻辑连贯，可读性高。
- 影响力 (1.5/2)：为环境感知TTS这一新兴任务提供了有力的统一建模方案。然而，任务本身相对垂直，主要影响局限于语音生成领域内关注环境交互的工作。与流水线方法的对比也提示，统一模型的实际部署优势（如效率、可控性）需在更实际的场景中验证。
- 开源 (0.7/1.5)：论文提供了项目主页链接，可能包含演示，但未明确提供代码、模型权重或数据集的公开下载链接，复现性受限。
- 可复现性 (0.3/0.5)：论文提供了详细的实现细节（架构参数、损失权重、训练配置），这有利于复现。但缺少官方代码和权重，降低了实际可复现性。

### 🚨 局限与问题

1.  训练数据的合成性局限：作者承认训练数据主要基于语音和环境音的合成混合，可能无法完全模拟真实录音中复杂的声学交互（如混响、声源移动、动态噪声叠加）。这直接影响了模型在“野外”真实场景下的泛化能力评估。模型对不同SNR或环境音类型（室内/室外）的鲁棒性未经分析，是一个重要的未解决问题。
2.  对副语言特征缺乏控制：当前模型无法控制说话风格、情感、韵律等副语言特征。这对于提升合成语音的“沉浸感”和表现力至关重要，作者在未来工作中提及但未解决。
3.  统一模型与流水线方法的权衡：附录F.2显示，CosyVoice2 + TangoFlux的��水线在WER、FAD和CLAP上均优于ImmersiveTTS。论文虽指出统一模型的核心优势在于交互建模和效率，但“交互建模”带来的收益（如更自然的融合、更少的人工混合痕迹）缺乏更直接、更量化的评估（例如，更细粒度的“融合自然度”主观评测或特定场景的分析）。
4.  分析深度可加强：虽然消融研究丰富，但对MM-DiT架构内部工作机制的分析仍可深入。例如，联合注意力模块如何具体融合跨模态信息（注意力权重可视化）未被展示。此外，不同对齐层（图3所示不同块）的贡献差异及其原因未被充分探讨。
5.  实验对比范围：主实验对比基线较少（仅VoiceLDM和VoiceDiT），尽管附录补充了更广对比，但主文结论的普适性可能受限。此外，与一些非扩散类的环境感知TTS方法（如IDEA-TTS, UmbraTTS）缺少直接对比。
6.  效率与质量的细粒度关联：图2展示了采样步数与性能的关系，但未分析在极少步数（如1步或3步）下具体损失了哪些质量维度（如细节保真度、环境纹理等）。

### 📷 论文图片

![图5](https://arxiv.org/html/2605.30965v1/x5.png)


---

[← 返回 2026-06-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-01/)
