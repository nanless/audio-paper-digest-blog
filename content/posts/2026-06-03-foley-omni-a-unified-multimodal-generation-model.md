---
title: "Foley-Omni: A Unified Multimodal Generation Model from Task-Level Audio Synthesis to Complete Video Soundtrack Generation"
date: 2026-06-03
draft: false
tags: [音频生成, 语音合成, 音乐生成, 多模态模型, 课程学习, 扩散模型]
categories: [论文速递]
description: "音频生成 | 7/10"
hiddenInHomeList: true
---

# 📄 Foley-Omni: A Unified Multimodal Generation Model from Task-Level Audio Synthesis to Complete Video Soundtrack Generation

#音频生成 #语音合成 #音乐生成 #多模态模型 #课程学习 #扩散模型

**7/10** | 创新 1.6/2 | 严谨 1.3/1.5 | 实验 1.1/1.5 | 清晰 1/1 | 影响 1.4/1.5 | 开源 0.3/1.5 | 复现 0.3/0.5 | 工程 0/1.5

✅ **7/10** | 前25% | #音频生成 | #课程学习 | #语音合成 #音乐生成 | [arxiv](https://arxiv.org/abs/2606.03672)


### 👥 作者与机构

作者：Ye Tao, Lupeng Liu, Xuenan Xu, Jiasun Feng, Jiarui Wang, Ying Qin, Shuiyang Mao, Wei Liu, Shuai Wang
机构：南京大学智能科学与技术学院，Video Rebirth，上海交通大学，北京交通大学，上海人工智能实验室

### 💡 毒舌点评

这篇论文瞄准了一个真实且重要的需求——为视频生成完整的配乐（语音、音效、音乐），而非孤立的任务。其核心贡献是提出了一个统一的生成模型Foley-Omni和一个配套的基准V2ST-Bench。方法上，它并非颠覆式创新，而是合理地整合了现有技术（如DiT， Synchformer， 结构化文本）并设计了课程学习策略来缓解多任务冲突。实验上，它在提出的基准上表现优异，但评估框架的全面性和基线的公平性存在疑问。最大的短板在于开源性：模型、代码、甚至核心数据集都未完全开放，这严重阻碍了可复现性和社区跟进，也削弱了“建立标准”的雄心。如果它真的开源，分数会更高。目前，它更像一个优秀的工业界原型演示，而非一个可供学术界深入挖掘和比较的坚实基础。

### 📌 核心摘要

论文指出，现有的音频生成研究大多局限于孤立的任务（如TTS、TTA），无法满足真实视频制作中对联合生成并保持时间与语义一致性的完整音轨的需求。同时，缺乏用于此类“视频到配乐”（V2ST）任务训练与评估的高质量数据和基准。为此，论文提出了Foley-Omni，一个统一的多模态音频生成模型。该模型采用条件扩散Transformer（DiT）骨干网络，利用结构化文本（包含`[WORDS]`、`[AUDIO]`、`[MUSIC]`标签）、CLIP视觉特征和Synchformer同步感知特征作为统一上下文进行条件化。为加强时间对齐，同步特征不仅通过交叉注意力注入，还直接加到音频潜变量上。模型采用条件流匹配目标训练，并通过课程学习策略（文本预训练->视频扩展->完整配乐微调）来平衡多任务学习。为支撑该任务，论文还构建了音频视觉数据整理管道和V2ST-Bench基准（300样本）。实验表明，Foley-Omni在V2ST-Bench上，在语音清晰度、音视频同步性和感知质量等方面均显著优于由强单任务模型组合而成的基线，并在标准任务级基准上与专用系统性能具有竞争力。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及模型权重链接。
- 数据集：论文介绍了 V2ST-Bench 基准测试集，包含300个样本。论文承诺“将发布注释、元数据和处理脚本”以支持可复现评估，但未提供具体下载链接或开源协议。训练数据涉及多个公开数据集（如 VGGSound, LRS2, GRID 等），但论文未提供整合后的训练集链接。
- Demo：论文中未提及Demo链接。
- 复现材料：论文在附录中提供了详细的训练配置（如8x H200 GPU， 批量大小32， 学习率， 三阶段训练数据组合与步数）。模型使用了来自MMAudio的冻结的 Mel VAE 和 BigVGAN 声码器，但未提供其权重链接。论文中未提及提供完整的复现检查点。
- 论文中引用的开源项目（部分）：
    1.  AudioLDM 2：https://github.com/haoheliu/audioldm2
    2.  CosyVoice：https://github.com/FunAudioLLM/CosyVoice
    3.  F5-TTS：https://github.com/SWivid/F5-TTS
    4.  MusicGen：https://github.com/facebookresearch/audiocraft
    5.  EmoDubber：https://github.com/AI4Co/EmoDubber
    6.  FoleyCrafter：https://github.com/THU-CV-AILab/FoleyCrafter
    7.  MMAudio：https://github.com/MiniMaxAI/MiniMax-MMAudio
    8.  AudioX：https://github.com/MiniMaxAI/AudioX
    9.  LipVoicer：https://github.com/BaranLiu/LipVoicer
    10. Faces2Voices：https://github.com/hua418/Faces2Voices
    11. DeepSound：https://github.com/ictnlp/DeepSound
    12. Bandit (音频分离)：https://github.com/Carlisle345748/Bandit
    13. Synchformer：https://github.com/sarlinpe/synchformer
    14. CLIP：https://github.com/openai/CLIP
    15. BigVGAN：https://github.com/bigscience-workshop/bigvgan
    16. UM-T5：https://huggingface.co/google/umt5-base
    17. ImageBind：https://github.com/facebookresearch/ImageBind
    18. CLAP：https://github.com/LAION-AI/CLAP
    19. Whisper：https://github.com/openai/whisper
    *   DualDub、VSSFlow、AudioGen-Omni、V2C-Net：论文中引用但未提供开源链接。

### 🏗️ 方法概述和架构

Foley-Omni是一个条件扩散Transformer（DiT）模型，旨在统一任务级音频合成和完整的视频配乐生成。其核心架构和方法如下：

1.  统一多模态条件化：
    *   结构化文本条件：为统一不同任务（如TTS， TTA， TTM， V2A， VisualTTS， V2ST）的文本输入，模型使用带有显式字段标签的结构化文本。标签包括`[WORDS]`（语音内容）、`[AUDIO]`（音效描述）和`[MUSIC]`（音乐描述）。每个字段在相应成分缺失时可为空。这种设计通过一个共享的UM-T5文本编码器，将所有文本信息映射到统一的语义空间。
    *   视觉条件：对于视频输入，模型提取两种互补的视觉特征：
        *   CLIP特征：捕捉场景级语义信息，指导生成与视频内容语义相关的音频。
        *   Synchformer特征：捕捉唇部运动和动作边界等时间线索，为音频事件（尤其是语音）提供精确的时间对齐依据。
    *   统一上下文：经过投影后，文本表示 \(\mathbf{C}_{\mathrm{text}}\)、CLIP特征 \(\mathbf{C}_{\mathrm{clip}}\) 和同步特征 \(\mathbf{C}_{\mathrm{sync}}\) 被拼接成一个统一的多模态上下文 \(\mathbf{C}_{\mathrm{uni}} = [\mathbf{C}_{\mathrm{text}}; \mathbf{C}_{\mathrm{clip}}; \mathbf{C}_{\mathrm{sync}}]\)，注入DiT的交叉注意力层。

2.  混合条件注入：
    *   为提供更强的时间引导，模型设计了双路条件注入：
        *   交叉注意力路径：统一上下文 \(\mathbf{C}_{\mathrm{uni}}\) 通过DiT块内的交叉注意力层灵活地注入语义条件。
        *   加法同步路径：Synchformer特征 \(\mathbf{C}_{\mathrm{sync}}\) 经过一个适配器（由插值和多层投影组成）被转换为与音频潜变量序列长度对齐的时间对齐表示 \(\mathbf{Z}_{\mathrm{sync}}\)。这个表示被直接加到带噪的音频潜变量 \(\mathbf{x}_{t}\) 上，即 \(\tilde{\mathbf{x}}_{t} = \mathbf{x}_{t} + \mathbf{Z}_{\mathrm{sync}}\)，然后作为DiT的输入。这为模型提供了更直接、更精细的时间引导信号。

3.  条件流匹配训练：
       模型在音频潜空间（使用来自MMAudio的冻结Mel VAE编码）中使用条件流匹配进行训练。定义了从噪声 \(\mathbf{x}_{0}\) 到数据 \(\mathbf{x}_{1}\) 的线性插值路径 \(\mathbf{x}_{t} = (1-t)\mathbf{x}_{0} + t\mathbf{x}_{1}\)。训练目标是预测速度场 \(\mathbf{v}_{\theta}(\tilde{\mathbf{x}}_{t}, t, \mathbf{C}_{\mathrm{uni}})\)，使其接近真实速度 \(\mathbf{v}^{} = \mathbf{x}_{1} - \mathbf{x}_{0}\)。这种方法允许在同一生成过程中联合建模语音、音效和音乐的共存与平衡。

4.  课程学习策略：
    *   为缓解直接混合所有数据导致的任务干扰（如语音清晰度下降），模型训练分三个阶段进行：
        *   阶段一：文本驱动的音频预训练。在纯文本条件下的TTA、TTS和TTM数据上训练，建立跨领域的通用音频生成先验，并学习结构化文本条件。
        *   阶段二：视频条件扩展。引入V2A和VisualTTS数据，教模型如何使用视觉信息（CLIP语义和Synchformer时序），从文本驱动扩展到视频条件生成。
        *   阶段三：完整配乐微调。在包含共存音频成分的混合音视频数据上进行微调，优化模型在完整配乐生成中的语音清晰度、音视频同步和混合平衡。为减轻遗忘，此阶段会保留部分单任务数据进行回放。

5.  解码：生成的音频潜变量由BigVGAN声码器解码为最终波形。

整体上，该架构通过共享的条件接口和DiT骨干统一了多种任务，并通过创新的双路条件注入和渐进式课程学习，专门优化了完整的视频配乐生成任务。

![图1](https://arxiv.org/html/2606.03672v1/figs/intro5.png)

![图2](https://arxiv.org/html/2606.03672v1/figs/foleyomni_pipeline.png)


### 💡 核心创新点

1.  统一框架下的完整配乐生成：首次提出一个端到端的统一多模态生成模型（Foley-Omni），能够从视频/文本输入直接生成包含语音、音效和音乐的完整视频配乐，而非孤立的任务合成或后处理混合。
2.  配套基准与数据管道：构建了音频视觉数据整理管道和首个公开的V2ST-Bench基准（300样本），为该新兴任务提供了结构化的训练数据和可复现的评估标准。
3.  有效的多任务学习策略：通过课程学习策略（文本预训练->视频扩展->完整微调）有效缓解了多任务学习中的冲突，特别是保护了生成语音的清晰度，实验证明了其必要性（见消融实验）。
4.  增强的同步条件注入：提出将同步感知特征（Synchformer）同时通过交叉注意力和直接加法路径注入生成过程，加强了生成音频与视频的时间对齐。

### 📊 实验结果

论文在V2ST-Bench和多个标准任务级基准上进行了评估。

1. 完整视频配乐生成 (V2ST-Bench)

表1: V2ST-Bench结果
| Method | CLAP ↑ | IB ↑ | WER ↓ | DeSync ↓ | A-MOS ↑ | S-MOS ↑ | T-MOS ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GT | 0.30 | 0.36 | 8.03 | 0.14 | 4.33 | 4.37 | 4.42 |
| MMAudio + CosyVoice 3 + AudioX | 0.26 | 0.25 | 10.57 | 0.85 | 2.99 | 3.01 | 2.37 |
| MMAudio + LipVoicer + AudioX | 0.22 | 0.16 | 37.84 | 0.26 | 2.09 | 2.31 | 2.51 |
| Foley-Omni | 0.27 | 0.26 | 7.59 | 0.16 | 3.92 | 4.13 | 4.14 |

*   结果分析：Foley-Omni在所有指标上一致优于两个组合基线。它取得了最低的WER（7.59）和DeSync（0.16）分数，证明了其同时保持语音清晰度和精确时间对齐的能力。主观MOS评分也全面领先。组合基线中，CosyVoice 3因缺乏视觉条件而在同步上表现差（DeSync=0.85）且WER高，混合后干扰了语音；LipVoicer虽同步较好，但视频到语音的生成方式导致其WER极高（37.84）。

2. 任务级合成

文本条件生成 (表2)
| Type | Model | CLAP_TTA ↑ | WER_TTS ↓ | CLAP_TTM ↑ |
| :--- | :--- | :--- | :--- | :--- |
| TTA | AudioLDM 2 | 0.43 | – | – |
| | MMAudio | 0.49 | – | – |
| TTS | MaskGCT | – | 3.03 | – |
| | CosyVoice 3 | – | 1.96 | – |
| TTM | MusicGen | – | – | 0.245 |
| Unified | AudioX | 0.44 | – | 0.386 |
| | UniFlow-Audio | 0.46 | 2.19 | 0.241 |
| | Foley-Omni | 0.46 | 2.31 | 0.374 |

*   结果分析：Foley-Omni在TTA和TTM任务上达到或接近最强统一模型（UniFlow-Audio， AudioX）的水平，在TTS任务上（WER=2.31）略逊于专用SOTA但远优于基线组合中的CosyVoice 3在V2ST场景下的表现，表明其保留了强大的单任务能力。

视频到音频 (VGGSound， 表3)
| Model | FD_VGG ↓ | FD_PASST ↓ | KL_PANN ↓ | CLAP ↑ | IS ↑ | IB ↑ | DeSync ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| VTA-LDM | 18.77 | 827.57 | 3.45 | -0.04 | 2.01 | 0.06 | 1.17 |
| FoleyCrafter | 2.54 | 137.52 | 2.32 | 0.19 | 15.02 | 0.25 | 1.23 |
| MMAudio | 1.27 | 102.93 | 1.99 | 0.21 | 15.76 | 0.31 | 0.57 |
| HunyuanVideo-Foley | 2.18 | 79.07 | 2.02 | 0.23 | 15.49 | 0.32 | 0.55 |
| Foley-Omni | 1.57 | 101.40 | 1.92 | 0.21 | 14.00 | 0.28 | 0.50 |

*   结果分析：Foley-Omni在V2A任务上取得最佳的DeSync（0.50），表明其同步能力优秀，这可能得益于与VisualTTS数据的联合训练。其他指标（如FD_PASST， CLAP）与MMAudio等强基线具有竞争力。

视觉语音合成 (VisualTTS)
*   GRID (已见说话人， 表4)：Foley-Omni取得最佳说话人相似度（84.1）和次优WER（15.3），在语音质量和身份保持上平衡良好。
*   LRS2 (零样本， 表5)：Foley-Omni取得最佳WER（13.0），显示其在更真实、未见说话人场景下的强泛化能力和语言准确性，优于专用VisualTTS系统和视频语音生成模型。

3. 消融研究 (表6)
| Variant | FD_VGG ↓ | WER_GRID ↓ | IB_V2ST ↑ | WER_V2ST ↓ |
| :--- | :--- | :--- | :--- | :--- |
| Single-stage training | 1.73 | 27.4 | 0.24 | 29.29 |
| w/o \(\mathbf{Z}_{\mathrm{sync}}\) | 2.21 | 18.9 | 0.22 | 12.40 |
| Full model | 1.57 | 15.3 | 0.26 | 7.59 |

*   结果分析：移除同步特征加法路径（w/o \(\mathbf{Z}_{\mathrm{sync}}\)）主要损害了音视频一致性（IB下降）。单阶段联合训练导致WER在所有场景下大幅恶化，证明了课程学习策略对于缓解多任务冲突、保持语音清晰度至关重要。

![图3](https://arxiv.org/html/2606.03672v1/figs/Foley-Omni_str.png)

![图4](https://arxiv.org/html/2606.03672v1/figs/example5.png)


### ⚖️ 评分理由

*   创新性 (1.6/2)： 问题定义清晰且有实际价值（完整配乐生成）。方法整合了现有模块（DiT， Synchformer， 结构化文本），但整合方式有效，提出了双路同步注入和针对性的课程学习策略。贡献中“首次统一端到端生成完整配乐”和“提出配套基准”的表述准确。
*   技术严谨性 (1.3/1.5)： 架构设计有明确动机，条件注入和训练策略描述清晰。使用了成熟的框架（DiT， Flow Matching）。公式书写正确。但部分设计细节（如适配器具体结构、损失函数权重）未充分展开，对多任务干扰的机制分析可更深入。
*   实验充分性 (1.1/2)： 主要创新点（V2ST生成）有详细的主实验和消融研究支持。但存在重大缺陷：1) 核心基准V2ST-Bench仅300样本，且评估严重依赖主观MOS；2) 与最相关的工作（如AudioX， UniFlow-Audio）在V2ST任务上缺乏直接对比（因后者不支持此任务）；3) 消融实验仅验证了两个设计点，对其他关键因素（如文本结构化设计、不同视觉特征的作用）缺乏研究；4) 表2中TTS任务的WER对比基线不一致。
*   清晰度 (1.5/1.5)： 论文结构清晰，图表（架构图、数据管道图、示例图）直观地辅助说明了核心思想。方法、实验、结论的逻辑链条完整。
*   影响力 (1.4/2)： 对多模态音频生成领域，尤其是视频配乐制作，有明确的推动作用。提出的任务和基准可能启发后续研究。但模型的实际应用受限于其开源状态和可能的计算成本。作为学术论文，其影响力部分被有限的开源性所削弱。
*   开源 (0.3/1)： 论文明确承诺发布V2ST-Bench的注释和脚本，这有一定价值。但模型代码、预训练权重均未提及开源，主要评估基线（组合系统）的复现也需依赖多个外部模型。这使得完全复现论文核心实验非常困难。
*   可复现性 (0.3/1)： 尽管提供了详细的训练配置（数据集、GPU、超参数），但由于模型权重和完整代码未开源，且评估依赖主观测试，第三方难以在V2ST任务上进行公平的比较和复现。单任务复现可能可行，但整体复现性差。
*   工程/���践价值 (1.3/2)： 模型架构和训练流程具有明确的工程实现价值。提出的课程学习策略和数据整理管道对处理类似多任务学习问题有参考意义。然而，作为一个“Unified”模型，其资源消耗（训练时间、推理成本）未讨论，可能限制其实际部署。

#

### 🚨 局限与问题

1.  评估框架的局限性：V2ST-Bench基准仅有300个样本，规模较小，可能不足以全面评估模型在各种复杂场景下的泛化能力和鲁棒性。完全依赖主观MOS评分，缺乏更客观的自动化指标来评估整体配乐的和谐性与层次感。
2.  基线对比的公平性问题：主要对比基线是自行组合的单任务模型管线。尽管论文解释了原因（缺乏开源的统一V2ST模型），但这引入了额外的工程复杂度和潜在的不公平性。例如，组合管线中的“混合”步骤是简单的拼接，而非精心设计的混音。与同期或更早探索类似目标（如V2A+TTS）的工作（如DualDub， VSSFlow， AudioGen-Omni）缺乏定性或定量比较。
3.  方法的可扩展性与控制性：模型输出为固定混合比例的单一音轨，缺乏对语音突出度、音乐强度、音效密度等细粒度的控制机制。论文未讨论如何扩展此框架以支持交互式编辑或根据用户偏好调整输出。
4.  多说话人场景的挑战：论文承认在多说话人场景下生成语音的感知清晰度受训练数据多样性影响，并计划引入参考音频。这暗示当前模型在该场景下可能存在不足，且缺乏有效的解决方案。
5.  数据依赖性与隐私问题：训练数据大量依赖内部数据集和通过商业API（Gemini）标注的网络视频，这可能带来数据偏见、版权和隐私方面的风险，也限制了研究的完全透明和可复现。
6.  结论强度：论文称“统一生成范式相比‘分离生成再混合’方法有显著优势”，这一结论主要基于其特定的组合基线。该优势是否在其他更复杂的组合管线或未来开源的统一模型上依然成立，有待验证。

#

### 📷 论文图片

![图5](https://arxiv.org/html/2606.03672v1/figs/v2st-example.png)


---

[← 返回 2026-06-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-03/)
