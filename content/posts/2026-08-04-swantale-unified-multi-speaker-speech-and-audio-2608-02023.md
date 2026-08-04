---
title: "SwanTale: Unified Multi-Speaker Speech and Audio Generation for Instruct and Zero-Shot Tasks"
date: 2026-08-04
draft: false
tags: [音频生成, 流匹配, 课程学习, 指令微调, 零样本]
categories: [论文速递]
description: "音频生成 | 7.1/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.02023"
---

# 📄 SwanTale: Unified Multi-Speaker Speech and Audio Generation for Instruct and Zero-Shot Tasks

标签：#音频生成 #流匹配 #课程学习 #指令微调 #零样本

**7.1/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 0.9/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0.2/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.1/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：中 | #音频生成 | #流匹配 | #课程学习 #指令微调 | [arxiv](https://arxiv.org/abs/2608.02023v1)


### 👥 作者与机构

- 第一作者：Yu Zhang（ByteDance）
- 通讯作者：Yu Zhang， Ruiqi Li， Xiang Yin（均为ByteDance）
- 作者列表：Yu Zhang（ByteDance）、Ruiqi Li（ByteDance）、Changhao Pan（Zhejiang University）、Ke Lei（未说明）、Xiang Yin（ByteDance）、Cheng Yang（未说明）

### 💡 毒舌点评

论文在统一多说话人语音与音频生成上迈出了扎实的一步，从数据、模型到训练策略构建了完整的工业级pipeline，实验覆盖广泛且多数指标领先。但系统完全闭源，难以独立复现与检验；角色扮演等指令任务明显落后于部分基线，且未提供任何公开资源将严重削弱其社区影响力。

### 📌 核心摘要

本文要解决如何将**多说话人语音与音频生成**统一在单一模型内，同时支持自然语言指令控制和参考音频零样本两种任务。为此，作者团队构建了SwanData-Caption数据管线，将多媒体音频转化为包含环境、说话人风格和细粒度内容的层次化caption；并提出SwanTale模型：采用SwanVAE将48 kHz音频压缩到25 Hz的连续潜空间，以流匹配非因果DiT为生成骨干，引入奖励条件质量控制、Engram记忆层和Unified MoE（任务与音频双路由）实现多任务多模态建模，再配合课程学习与GRPO后训练逐步强化能力。实验显示其在零样本语音合成、对话生成和指令跟随等多个基准上取得领先，尤其是在SwanBench-Speech的Timbre Consistency达0.94/0.95，SwanBench-Scene综合MOS 4.22，InstructTTSEval中文APS 86.1。消融实验证实Unified MoE和更大的caption encoder对复杂指令生成有显著增益。其实际意义在于为动画、广告、播客等媒体创作提供从声音设计到场景生成的一体化方案。主要局限是复杂背景音乐和长音频生成仍困难，精确局部风格控制不足，且完全闭源。

### 🔗 开源详情

- 代码：未提供链接或说明
- 模型权重：未提供链接或说明
- 数据集：主要使用内部数据集SwanData系列，未公开。评测中引用了VCTK、FSD50K等公开数据集，但未提供统一获取方式。
- Demo：提供项目页面https://swanaigc.github.io/#swantale，包含音频样例。

### 🏗️ 方法概述和架构

SwanTale是一个从文本和可选参考音频直接生成48 kHz波形的端到端模型，其核心流程与组件如下：

**SwanVAE**：这是一个48 kHz的连续音频自编码器，将音频压缩到96维、帧率25 Hz的潜空间，大幅降低了后续DiT的序列长度。编码器基于抗混叠卷积与高斯VAE瓶颈，解码器则借鉴SAME架构，使用局部双向注意力的Transformer Resampling Block将每个潜向量扩展为六段波形patch。为增强下游DiT的可学习性，训练时在VAE后验均值上施加了多种弱对齐目标（流匹配预测、因果预测、能量/半音读出头），这些辅助头在推理时被丢弃。训练目标包括多分辨率复STFT损失、多带Mel损失及多种鉴别器对抗损失。

下图展示了SwanVAE的详细架构，包括编码器、解码器以及生成对齐和声学读出模块。

![Paper Figure 1](https://arxiv.org/html/2608.02023v1/x3.png)

图中可见，SwanVAE通过多种弱对齐目标（如流匹配和因果预测）来增强潜空间的质量，这有助于下游DiT的建模负担。


**流匹配Transformer骨干**：这是一个非因果DiT，接收加噪潜序列、文本token和caption。其核心特征包括：
- **内容与说话人处理**：文本通过CosyVoice 2.0 tokenizer处理，并对齐到潜序列时间线；说话人轮次通过嵌入注入。
- **Caption与Engram记忆层**：完整的caption由Qwen系列编码器处理。为增强对固定描述短语的利用，引入了Engram记忆层，它使用可学习的哈希表记忆2-gram和3-gram组合，通过门控残差与caption嵌入融合，使模型对重复模式（如“欢快的女孩”）响应更快。
- **奖励条件质量控制**：预处理阶段计算音频的STOI、PESQ等质量分数并编码为质量flag（低/正常/高/未知）。训练时将此作为条件，推理时固定为“高”，无需强化学习即可驱动模型生成高质量音频。
- **Unified MoE**：每隔一层DiT的FFN被替换为稀疏MoE-FFN。它包含三种专家：任务共享专家（处理指令/零样本先验）、路由音频专家（由帧级动态路由分配，用于分治语音、环境音等不同声学模式）、空专家（跳过额外计算，提供动态计算预算）。路由融合了Gumbel-Softmax、负载均衡偏置，并由扩散时间步嵌入调节，使得去噪早期和晚期自动分配不同计算量。

下图展示了SwanTale的整体架构以及Unified MoE的详细结构。

![Paper Figure 2](https://arxiv.org/html/2608.02023v1/x2.png)

图中显示了模型如何通过任务路由器和音频路由器动态分配专家，以处理不同的声学模式，这对应了论文中描述的多任务多模态建模机制。


**课程学习与GRPO后训练**：训练分为四个阶段：1) 零样本基础训练（使用大量单/双说话人数据）；2) 密集caption适应（冻结MoE，使用干净丰富的数据）；3) 全量混合训练（激活Unified MoE，联合指令和零样本数据）；4) 高质量SFT。之后，采用Flow-GRPO进行后训练，通过构造基于SDE的随机策略生成多条轨迹，并根据一个包含音素准确度、稳定性、属性控制和KL正则的复合奖励函数进行优化，以提升发音和风格控制的精细度。

**推理**：采用两阶段分解的Classifier-Free Guidance，分别为文本/说话人一致性和全条件进行引导，并结合时序退火与sway采样以增强生成质量。

### 💡 核心创新点

1.  **统一指令与零样本的多任务框架**：首次将零样本语音克隆和自然语言指令控制（包括环境、说话人风格、细粒度内容）融入单一流匹配模型，通过统一的结构化caption字段衔接两种任务，避免了多系统间的风格漂移。
2.  **SwanData-Caption数据管线与风格矩阵**：设计了一个覆盖场景、说话人、内容的四级caption标注流程，并针对动画、短剧等领域引入风格-人设矩阵作为软先验，显著提升了指令数据的多样性和人设可辨识度。
3.  **下游友好的SwanVAE潜空间设计**：通过局部Transformer解码器与多种弱对齐目标（流匹配、因果预测、半音分类等），在低帧率下实现高保真重构，并让潜空间更平滑规整，降低DiT的建模负担。
4.  **Unified MoE与时间感知动态路由**：融合了任务级共享专家和帧级Top-PP动态路由，并结合扩散时间步自适应地调整计算预算和专家容量，实现了对不同声学区域（如说话人、音效、静音）的差异化建模，有效缓解了稠密模型中的多模态冲突。
5.  **结合奖励条件的GRPO后训练**：将离线质量分数作为训练条件注入，使模型在无RL下偏向高质量生成；再配合Flow-GRPO，针对发音、稳定性和属性控制进行精细化策略优化，并通过锚点回放保留多模态能力。

下图展示了SwanData-Caption数据处理流水线的四个阶段。

![Figure 1: Overview of the four-stage SwanData-Caption data processing pipeline, including coverage design, SwanData-Speech preprocessing, caption annotation, and data refinement.](https://arxiv.org/html/2608.02023v1/x1.png)

图中显示了从覆盖设计、语音预处理到caption标注和数据精炼的完整流程，这为模型提供了高质量的训练数据。

### 📊 实验结果

SwanVAE在25 Hz、96维低帧率潜空间下进行评估，其重建质量在语音、歌声、通用音频和音乐四个领域均表现优异，多数指标领先或可比肩主流自编码器和编解码器。

**语音**
| 模型 | PESQ↑ | STOI↑ | MCD↓ | ViSQOL↑ |
|------|------|------|------|------|
| DAC | 4.1178 | 0.9693 | 1.1963 | 4.1585 |
| EnCodec | 3.1872 | 0.9297 | 1.5147 | 3.5035 |
| WavTokenizer Large Unify | 2.1423 | 0.8428 | 2.9393 | 2.3787 |
| VoxCPM2 AudioVAE V2 | 3.9987 | 0.9690 | 1.2222 | 4.0340 |
| MegaTTS 3 WaveVAE | 3.5968 | 0.9507 | 1.5130 | 4.2348 |
| SwanVAE | **4.1683** | 0.9680 | **0.9638** | 4.1248 |

**歌声**
| 模型 | PESQ↑ | STOI↑ | MCD↓ | ViSQOL↑ |
|------|------|------|------|------|
| DAC | 3.7872 | 0.8627 | 1.9293 | 3.6681 |
| EnCodec | 2.6464 | 0.8166 | 2.2392 | 3.3841 |
| WavTokenizer Large Unify | 1.9226 | 0.6613 | 5.1885 | 1.6018 |
| VoxCPM2 AudioVAE V2 | 3.7088 | 0.8838 | 1.9335 | 3.6734 |
| MegaTTS 3 WaveVAE | 3.5727 | 0.8620 | 2.0310 | 4.0013 |
| SwanVAE | **3.9821** | **0.9001** | **1.5661** | 3.7085 |

**通用音频**
| 模型 | ViSQOL↑ | LSD↓ |
|------|------|------|
| DAC | 4.0198 | 0.9589 |
| EnCodec | 4.1140 | 0.9761 |
| WavTokenizer Large Unify | 2.8595 | 1.0967 |
| Stable Audio Open 1.0 | 4.0355 | **0.9358** |
| SAME-L | 3.7541 | 1.0372 |
| SwanVAE | **4.1269** | 0.9455 |

**音乐**
| 模型 | ViSQOL↑ | LSD↓ |
|------|------|------|
| DAC | 4.1534 | 0.9196 |
| EnCodec | **4.2976** | **0.9000** |
| WavTokenizer Large Unify | 2.6968 | 1.0612 |
| Stable Audio Open 1.0 | 4.1357 | 0.9236 |
| SAME-L | 4.0267 | 0.9210 |
| ACE-Step Music-DCAE | 4.1756 | 0.9019 |
| SwanVAE | **4.2623** | 0.9172 |

### 零样本语音合成与对话评估（SwanBench-Speech，表5）
**零样本独白TTS**
| 模型 | Timbre↑ | Reverb↓ | Sound Fidelity↑ | Content Error↓ | SpeechJudge↑ | Richness↑ | Hierarchy↑ |
|------|------|------|------|------|------|------|------|
| CosyVoice-2 | 0.93 | 2.37 | 3.58 | 0.106 | 2.81 | 2.02 | 2.59 |
| CosyVoice-3 | 0.93 | 2.73 | 3.80 | 0.077 | 3.26 | 2.64 | 2.47 |
| FishSpeech | 0.93 | 2.00 | **4.09** | **0.066** | 3.77 | 2.37 | 2.90 |
| F5TTS | 0.92 | 2.12 | 2.60 | 0.085 | 2.87 | 2.77 | 2.97 |
| GLM-TTS | 0.94 | **1.64** | 3.90 | 0.074 | 3.28 | 1.57 | 2.39 |
| IndexTTS-2 | 0.93 | 1.77 | 2.78 | 0.077 | 3.63 | 3.32 | 2.94 |
| MegaTTS-3 | 0.93 | 2.07 | 3.52 | 0.072 | 3.22 | 2.40 | 3.01 |
| SparkTTS | 0.92 | 2.04 | 3.53 | 0.314 | 2.35 | 2.23 | 2.22 |
| VibeVoice | 0.92 | 2.45 | 3.47 | 0.092 | 3.75 | 3.42 | 3.06 |
| ZipVoice | 0.89 | 2.10 | 3.53 | 0.213 | 2.97 | 2.11 | 2.05 |
| SwanVoice | 0.93 | 2.06 | 3.60 | 0.172 | 3.56 | 3.81 | 3.62 |
| SwanTale | **0.95** | 1.83 | 3.95 | 0.086 | **3.75** | **3.90** | **3.70** |

**零样本对话TTS**
| 模型 | Timbre↑ | Reverb↓ | Sound Fidelity↑ | Content Error↓ | SpeechJudge↑ | Richness↑ | Hierarchy↑ |
|------|------|------|------|------|------|------|------|
| FireRedTTS-2 | 0.91 | 3.54 | 2.54 | 0.148 | 2.93 | 2.52 | 2.65 |
| MoonCast | 0.90 | 3.29 | 2.60 | 0.284 | 2.93 | 2.42 | 2.54 |
| MOSS-TTSD | 0.89 | 3.52 | 2.83 | 0.227 | 2.57 | 3.04 | 2.86 |
| SoulX-Podcast | 0.92 | 3.23 | **3.98** | **0.101** | 3.89 | 2.80 | 3.15 |
| VibeVoice | 0.89 | **2.09** | 2.75 | 0.204 | 3.00 | 3.09 | 2.83 |
| ZipVoice-Dialog | 0.90 | 3.49 | 2.48 | 0.116 | 3.46 | 2.88 | 2.93 |
| SwanVoice | 0.92 | 3.02 | 3.77 | 0.145 | 3.70 | 3.62 | 3.71 |
| SwanTale | **0.94** | 3.21 | 3.73 | 0.120 | **3.92** | **3.66** | **3.85** |

### 指令跟随评估（InstructTTSEval 与 SwanBench-Scene，表6、7、8）
**InstructTTSEval 指令跟随准确性**
| 模型 | ZH APS↑ | ZH DSD↑ | ZH RP↑ | EN APS↑ | EN DSD↑ | EN RP↑ |
|------|------|------|------|------|------|------|
| Parler-TTS-large | – | – | – | 60.0 | 45.9 | 31.2 |
| VoxInstruct | 47.5 | 52.3 | 42.6 | 54.9 | 57.0 | 39.3 |
| VoiceSculptor | 75.7 | 64.7 | 61.5 | – | – | – |
| MiMo-Audio-7B-Instruct | 75.7 | 74.3 | 61.5 | 80.6 | 77.6 | 59.5 |
| Qwen3-TTS-12Hz-1.7B-VD | 85.2 | **81.1** | 65.1 | 82.9 | **82.4** | 68.4 |
| MOSS-VoiceGenerator | 78.0 | 80.0 | **74.0** | 68.2 | 82.0 | 68.7 |
| VoxCPM2 | 85.2 | 71.5 | 60.8 | 84.2 | 83.2 | **71.4** |
| SwanTale | **86.1** | 80.1 | 64.1 | **84.2** | 79.2 | 63.6 |

**SwanBench-Scene 主观评分 (MOS)**
| Setting | Model | Mean MOS↑ | Overall Exp.↑ | Prosodic Nat.↑ | Audio Fullness↑ | Scene App.↑ |
|------|------|------|------|------|------|------|
| Advertising | MOSS-VoiceGenerator | 3.13 | 2.89 | 3.10 | 3.75 | 2.76 |
| Advertising | MiMo-Audio-7B-Instruct | 3.13 | 2.96 | 3.17 | 3.49 | 2.89 |
| Advertising | Seedance 2.0 | 3.38 | 3.25 | 3.34 | 3.73 | 3.22 |
| Advertising | Qwen3-TTS-12Hz-1.7B-VD | 3.71 | 3.62 | 3.73 | 4.12 | 3.38 |
| Advertising | SwanTale | **3.88** | **3.76** | **3.82** | **4.21** | **3.73** |
| Comic Drama | MiMo-Audio-7B-Instruct | 3.23 | 3.06 | 3.24 | 3.72 | 2.89 |
| Comic Drama | MOSS-VoiceGenerator | 4.06 | 3.94 | 4.11 | 4.33 | 3.87 |
| Comic Drama | Qwen3-TTS-12Hz-1.7B-VD | 4.35 | 4.20 | 4.35 | **4.63** | 4.21 |
| Comic Drama | Seedance 2.0 | 4.35 | 4.30 | **4.42** | 4.45 | 4.23 |
| Comic Drama | SwanTale | **4.45** | **4.36** | 4.47 | 4.60 | **4.36** |
| General Scene | MiMo-Audio-7B-Instruct | 3.28 | 3.17 | 3.39 | 3.49 | 3.05 |
| General Scene | MOSS-VoiceGenerator | 3.62 | 3.42 | 3.65 | 4.10 | 3.29 |
| General Scene | Seedance 2.0 | 4.14 | 4.11 | 4.18 | 4.23 | 4.05 |
| General Scene | Qwen3-TTS-12Hz-1.7B-VD | 4.22 | 4.05 | 4.18 | 4.59 | 4.04 |
| General Scene | SwanTale | **4.34** | **4.24** | **4.30** | **4.60** | **4.21** |
| Overall | MiMo-Audio-7B-Instruct | 3.19 | 3.04 | 3.24 | 3.55 | 2.93 |
| Overall | MOSS-VoiceGenerator | 3.48 | 3.29 | 3.49 | 3.98 | 3.17 |
| Overall | Seedance 2.0 | 3.86 | 3.78 | 3.87 | 4.07 | 3.73 |
| Overall | Qwen3-TTS-12Hz-1.7B-VD | 4.09 | 3.96 | 4.09 | 4.45 | 3.88 |
| Overall | SwanTale | **4.22** | **4.12** | **4.20** | **4.47** | **4.10** |

**SwanBench-Caption 消融研究**
| Setting | Instruction Accuracy↑ | Acoustic Quality↑ | Overall Expressiveness↑ |
|------|------|------|------|
| SwanTale w/o MoE | 3.02 | 4.09 | 3.56 |
| SwanTale | 3.39 | 4.31 | 3.82 |
| SwanTale w/ 32B CE | **3.70** | **4.34** | **3.98** |

### 🔬 细节详述

- **训练数据**：SwanData-Caption管线最终产出约70M条caption记录，覆盖短剧、广告、动画等真实多媒体数据，并辅以三个合成子集（老年人语音、中英文短句、难发音文本）覆盖长尾场景。数据经过音源分离、说话人日志、ASR、文本-音频对齐等预处理，由种子模型进行多级标注，并利用风格矩阵增强caption，最后通过波形质量过滤和人工审计。
- **损失函数**：
  - SwanVAE：使用多分辨率复STFT损失、多带Mel损失、帧能量损失，结合MPD/MRD/MBCSD三类鉴别器的对抗损失和特征匹配损失，加上KL惩罚（λKL=0.02）。潜对齐目标有流匹配预测损失、因果预测损失、半音分类/回归损失和能量/频带能量回归损失。
  - DiT：使用带掩码的MSE损失（对生成区域计算）。MoE模块包含router z-loss和null-collapse penalty，退火调整。
- **训练策略**：SwanVAE在100k小时数据上训练，使用3.84秒固定切片。SwanTale采用四阶段课程学习：1) 零样本基础训练（使用大量单/双说话人数据，一半时间丢弃参考音频）；2) 密集caption适应（2万步，冻结MoE）；3) 全量混合训练（1万步，70%丢弃参考音频以联合学习指令和零样本）；4) 高质量SFT（4千步）。GRPO后训练使用8 GPU，再训练10个epoch，每轮rollout 8条轨迹。
- **关键超参数**：SwanVAE参数量407M；DiT 活跃参数2B；默认caption encoder为Qwen3.0-Instruct-8B；流匹配使用velocity参数化；CFG权重为[1.5, 3.0]并使用时序退火；GRPO采用基于SDE的随机策略，噪声系数η(t)=a√(1-t)/t。
- **训练硬件**：SwanVAE使用32张A100；SwanTale监督训练阶段64张A100；GRPO后训练8张A100。
- **推理细节**：指令生成时，使用全caption生成整个潜序列；零样本生成时，使用内容caption和参考音频的潜帧作为提示。采用分解CFG、sway采样（cos映射）和时序退火。
- **评估细节**：SwanVAE在VCTK、GTSinger、FSD50K、MUSDB18-HQ四个测试集共4000个样本上评估；零样本评估采用自研的SwanBench-Speech；指令跟随采用InstructTTSEval；主观评估通过SwanBench-Scene进行，每个样本5人评分，使用Best-Worst扩展方法进行审计。

### ⚖️ 评分理由

*   创新性 (1.5/2)：首次在单一流匹配模型内统一零样本语音克隆与自然语言指令控制（含环境、风格、内容），提出SwanVAE在25Hz低帧率下实现高保真连续潜空间（SCORING_SOURCE_13, A_RESULTS）、Unified MoE结合时间感知动态路由以分治不同声学模式（SCORING_SOURCE_25），并通过课程学习与GRPO后训练逐步强化多任务能力，形成了系统级创新范式。

*   技术严谨性 (1.2/1.5)：各组件设计具有清晰的理论动机与公式推导，如SwanVAE的多分辨率复STFT损失、多鉴别器对抗训练及潜对齐辅助目标（SCORING_SOURCE_13），Unified MoE路由中Gumbel-Softmax、负载均衡偏置与时间步调节机制（SCORING_SOURCE_25），整体方法严谨；GRPO后训练部分策略选择较为启发式，收敛性理论分析略弱，但不影响整体技术合理性。

*   实验充分性 (0.9/1.5)：实验覆盖VAE重建、零样本、指令跟随等多类基准，并进行了SwanBench-Caption消融（A_RESULTS table 8）。但缺少GRPO后训练前后的直接消融对比、损失曲线与路由分布等训练稳定性分析，核心评测基准SwanBench系列自建且未公开其具体构成，削弱了结果的可复验性（A_LIMITS）。

*   清晰度 (0.8/1)：方法部分公式与组件描述详尽（如Engram记忆层SCORING_SOURCE_18、Unified MoE路由SCORING_SOURCE_25），但整体阅读负荷较大，缺乏简化示意图或伪代码辅助理解，对复杂交互的直观呈现不足。

*   影响力 (1.0/1.5)：统一多说话人语音与音频生成的端到端方案为动画、广告、播客等媒体创作提供了一体化前景，在零样本和指令跟随多数基准上取得领先（A_RESULTS），展示了工业级潜力；但因角色扮演等任务存在明显短板且领域竞争激烈，整体影响力中等偏上。

*   开源 (0.2/1.5)：论文目前只提供可访问的在线演示页面，未发布核心代码、模型权重或训练数据。

*   可复现性 (0.3/0.5)：论文披露了主要架构、多阶段课程学习步数、学习率、硬件配置以及损失函数设计（A_METHOD, SCORING_SOURCE_36），但缺少精确批次大小、数据预处理关键参数和总计算量，复现仍存在一定不确定性。

*   工程/实践价值 (1.2/1.5)：构建了大规模SwanData-Caption数据管线，实现48kHz高保真SwanVAE、2B参数DiT骨干及四阶段课程训练与GRPO后训练的复杂工程整合（A_METHOD, SCORING_SOURCE_9），多说话人场景生成效果优异，工程实践价值突出。

### 🚨 局限与问题

**论文明确承认的局限**：
1.  复杂背景音乐生成仍困难，尤其是当音乐需随情感变化而改变类型或过渡时。
2.  超过两分钟、包含音效的复杂多说话人长场景指令生成仍具挑战性。
3.  精确局部风格控制不足，包括特定说话人的连续情感变化、重音节奏、精准暂停和音效时机，这既是数据标注的难题也是模型设计的难题。

**审稿人发现的潜在问题**：
- **评测基准的公平性与可复现性存疑**：所有关键的SwanBench系列评测基准均由作者自建且未公开其具体构成，这使得其他研究者无法独立验证其结论，也无法排除这些基准向训练集数据分布“泄漏”的风险。这严重削弱了实验的可信度。
- **核心指标的非全面领先**：尽管SwanTale在说话人相似度和表达力上取得领先，但在关键的零样本语音合成任务中，其内容准确性（Content Error）和音质保真度（Sound Fidelity）并非最优，分别被FishSpeech和SoulX-Podcast超越。这表明模型在发音清晰度和信号质量上仍有改进空间。
- **“角色扮演”能力是显著短板**：在InstructTTSEval中，角色扮演（RP）能力显著弱于MOSS-VoiceGenerator和VoxCPM2等模型。这反映出当前数据和风格矩阵在覆盖多样化、长尾的人设和角色扮演风格方面存在明显不足，限制了其在创意写作、游戏配音等场景的应用潜力。
- **后训练贡献不清晰**：论文虽然详细描述了GRPO方法，但未提供GRPO前后的直接性能对比（如一个简单的“有无GRPO”的消融实验）。这使得后续研究者难以量化RL后训练带来的实际收益及成本（计算开销），是一个重要的分析缺失。
- **训练稳定性与收敛性分析缺失**：对于一个使用了动态路由、多阶段课程和RL训练的2B级大模型，论文未展示任何损失曲线、路由分布随训练步数的变化或模型的规模定律分析，缺乏对训练稳定性和效率的深入洞察。
- **跨语种指令混合生成的评估缺失**：数据构造阶段提到了中英文混合，但模型在该混合场景下的生成能力（如一句指令中同时出现中英文）未被专门评估，这在全球化媒体制作中是一个常见且重要的需求。
- **模型的安全性和公平性考量缺失**：作为一个面向媒体的生成模型，论文完全未讨论其在深度伪造、说话人滥用等方面的潜在风险，以及对不同口音、方言或社会群体的公平性表现。这不符合当前负责任AI研究的主流标准。

---

[← 返回 2026-08-04 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-04/)
