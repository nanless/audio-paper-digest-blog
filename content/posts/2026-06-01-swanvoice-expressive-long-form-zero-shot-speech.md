---
title: "SwanVoice: Expressive Long-Form Zero-Shot Speech Synthesis for Both Monologue and Dialogue"
date: 2026-06-01
draft: false
tags: [语音合成, 语音转换, 数据增强, 变分自编码器, 扩散模型, 强化学习, 课程学习]
categories: [论文速递]
description: "语音合成 | 8.9/10"
hiddenInHomeList: true
---

# 📄 SwanVoice: Expressive Long-Form Zero-Shot Speech Synthesis for Both Monologue and Dialogue

#语音合成 #语音转换 #数据增强 #变分自编码器 #扩散模型 #强化学习 #课程学习

🔥 **8.9/10** | 前50% | #语音合成 | #变分自编码器 | #语音转换 #数据增强 | [arxiv](https://arxiv.org/abs/2605.30993v1)

学术质量 6.3/7 | 影响力 1.5/2 | 可复现性 1.1/2 | 置信度 高


### 👥 作者与机构

作者：Ruiqi Li (1), Yu Zhang (1), Changhao Pan (1,2), Ke Lei (1,2), Xiang Yin (1), Cheng Yang (1)
单位：1 ByteDance, 2 Zhejiang University
通讯作者及贡献：1为共同贡献，2为通讯作者（根据原文格式推断）。

### 💡 毒舌点评

这篇论文工整地完成了一个大型工业级语音合成系统应做的所有事：堆砌了看似合理的数据处理流程、模型架构和训练策略，最后在自建的Benchmark上宣称自己最好。其核心工作（SwanVoice模型本身）在架构上（VAE+Flow-matching DiT）并非独创，更多是工程上的整合与优化。最大的“贡献”似乎是那个数据处理管道（SwanData-Speech），但这更像是一个内部产品开发文档，而非可复用、可验证的学术方法。论文通篇都在强调“表现力”得分最高，但关键的“内容准确性”却是短板，这在一个语音合成系统中是相当尴尬的权衡。更值得玩味的是，评估所用的核心模型（如SpeechJudge）未开源，这使得其“表现力”领先的结论大打折扣。整篇论文更像是一份技术报告，而非一篇能推动领域进步的学术论文。

### 📌 核心摘要

本文针对零样本语音合成在长对话场景中表现力不足、说话人切换不自然等问题，提出了SwanData-Speech数据处理流程和SwanVoice模型。SwanData-Speech通过感知停顿的词级对齐、质量过滤等步骤，从海量原始音频中构建单语与对话语料库。SwanVoice是一个支持1-4说话人的零样本TTS模型，结合25Hz VAE、带停顿与拼音替换的raw文本条件，以及带说话人-轮次条件的flow-matching DiT。模型采用从单语到对话的三阶段课程学习训练，并使用DiffusionNFT进行后训练以提升发音与说话人相似性。在SwanBench-Speech评估中，SwanVoice在单语与对话设置下的表现力（丰富度与层次感）得分均高于所有评估的开源基线，但其内容准确性仍是主要限制。

### 🔗 开源详情

- 代码：
  - 项目主页与Demo页：https://swanaigc.github.io/#/swanvoice
  - 论文中提到“代码将在项目主页（https://swanaigc.github.io）发布”，但未直接给出具体的代码仓库链接（如GitHub）。截至分析时，核心代码（SwanData-Speech流程、SwanVoice模型、Swan Forced Aligner）均未开源。

- 模型权重：
  - 论文中未提及SwanVoice、SwanData-Speech流程或Swan Forced Aligner模型权重的下载链接。
  - 论文提到了多个开源基线模型的权重来源（如CosyVoice-2, MegaTTS-3等），但未列出具体下载地址。

- 数据集：
  - SwanData-Speech：论文提出的数据处理管道产出的内部数据集，未提供公开下载链接。
  - 论文提及使用了“selected open-source Chinese and English datasets”，但未具体列出名称和链接。
  - 评估中使用的公开测试集：
    - LibriSpeech: 由LibriVox有声书构建，论文引用[1]。
    - GTSinger-Speech: 论文引用[58]。
  - 后处理训练数据：“3K audio samples of real human conversations”为内部收集，未公开。

- Demo：https://swanaigc.github.io/#/swanvoice

- 复现材料：
  - SwanVoice的详细训练配置（如GPU数量、训练步数）在附录C.1中提供。
  - Swan Forced Aligner的详细架构、训练目标和推理流程在附录B中提供。
  - 论文中未提供预训练检查点、完整的数据处理脚本或模型训练代码。

- 论文中引用的开源项目：
  - Swan Forced Aligner：本文提出，但代码未开源。
  - SwanData-Speech Pipeline：本文提出的数据处理管道，但具体实现未开源。
  - CosyVoice Tokenizer：用于文本分词。论文中引用[10]，指向其官方开源实现：https://github.com/FunAudioLLM/CosyVoice
  - SenseVoice-Small：用于ASR转写和语言识别。论文中引用[2]，指向其官方开源实现：https://github.com/FunAudioLLM/SenseVoice
  - 3D-Speaker Toolkit：用于语音活动检测、说话人嵌入和聚类。论文中引用[7]，指向其GitHub仓库：https://github.com/alibaba-damo-academy/3D-Speaker
  - MegaTTS 3：用于合成发音困难案例。论文中引用[19]，指向其官方开源实现：https://github.com/FunAudioLLM/MegaTTS3
  - WavLM：作为Swan Forced Aligner的预训练声学编码器。论文中引用[6]，指向其官方开源实现：https://github.com/microsoft/unilm/tree/master/wavlm
  - HiFi-GAN：作为VAE解码器的基础。论文中引用[22]，指向其经典论文及代码。
  - emotion2vec+：用于情感分类。论文中引用[28]，指向其官方开源项目：https://github.com/ddlBoJack/emotion2vec
  - FunASR-Nano：用于计算内容错误率。论文中引用[2]，是SenseVoice-Small的轻量版本，代码同SenseVoice。
  - JiWER：用于计算字错率（WER）和字符错率（CER）。论文中未直接给链接，但为公开工具包：https://github.com/jitsi/jiwer
  - torchaudio-SQUIM：用于非侵入式音频质量评估。论文中引用[23]，链接：https://docs.pytorch.org/audio/main/tutorials/squim_tutorial.html
  - SpeechJudge：基于Qwen2.5-Omni微调的评估模型。论文中引用[52]，未提供其开源链接。
  - Monotonic-Aligner：基线对齐工具。论文中引用[41]，链接：https://modelscope.cn/models/iic/speech_timestamp_prediction-v1-16k-offline
  - WhisperX：基线对齐工具。论文中引用[5]，链接：https://github.com/m-bain/whisperX
  - Qwen3 Forced Aligner：基线对齐工具。论文中引用[32]，链接：https://github.com/QwenLM/Qwen3-ASR
  - LattifAI Aligner：基线对齐工具（论文注明其检查点在评估时未公开）。链接：https://github.com/lattifai/lattifai-python ，检查点：https://huggingface.co/LattifAI/Lattice-1
  - UniSpeech Speaker Verification：用于计算说话人相似度奖励。论文中引用链接：https://github.com/microsoft/UniSpeech/tree/main/downstreams/speaker_verification
  - NeMo Forced Aligner：基线对齐工具。论文中引用其官方检查点：https://ngc.nvidia.com/models/nvidia:stt_en_fastconformer_hybrid_large_pc
  - PESQ/STOI模型（非侵入式）：来自torchaudio-SQUIM。
  - SRMRpy：用于计算混响一致性。论文中引用[44]，链接：https://github.com/jfsantos/SRMRpy
  - pypinyin：用于提取拼音。论文中未直接给链接，但为公开库。
  - GCIDE 0.54 和 《通用规范汉字表》：用于构建发音困难案例，为公开资源。
  - Ji et al. [18]：VAE编码器架构来源，指向其论文。

### 🏗️ 方法概述和架构

SwanVoice系统包含数据处理管道SwanData-Speech和模型SwanVoice两大部分。

1. SwanData-Speech数据处理管道：
旨在将原始的长音频（如播客、影视剧）转化为高质量的单语与对话语料。流程是分层的（如图1所示）：
*   预处理：首先使用人声分离工具隔离人声，然后采用3D-Speaker工具包进行语音活动检测（VAD）、说话人嵌入提取、聚类与分割（Diarization）。分割后的片段根据说话人数量分为单语池和对话池。相邻的短片段会按规则合并（如同一说话人间隔≤2秒的合并为单语；包含2-4位说话人、单次静默≤2秒的合并为对话）。
*   转录与对齐：使用SenseVoice-Small进行ASR转写和语言识别，保留中英文样本。禁用逆文本正则化（ITN）以保持输入更接近发音。之后，使用小文本Transformer恢复标点。对于对话，用`<S{id}>`和`</S{id}>`标记轮次。接着，进行关键的感知停顿标点修正：使用预训练的强制对齐器（Swan Forced Aligner）为每个字符分配时间戳，根据字符间静默时长（<0.08s忽略，0.08-0.18s插入`<|sp|>`，0.18-0.45s插入逗号，>0.45s插入句号等）修正标点，使其与声学停顿模式匹配，而非纯粹的语义标点。
*   过滤与增强：使用非侵入式DNSMOS、PESQ和STOI（来自torchaudio-SQUIM）对音频进行质量评分。之后，用emotion2vec+进行情感分类，提取高置信度的非中性样本构成高表现力子集。此外，还构建了RobustMegaTTS3发音困难合成子集（使用GCIDE、通用规范汉字表及LLM生成例句，通过MegaTTS 3合成），用于覆盖多音字、儿化音、音变等罕见发音情况。

2. SwanVoice模型架构与训练（如图2所示）：
*   VAE：采用25Hz变分自编码器，编码器（E）遵循Ji et al. [18]设计以降低时长，解码器（D）基于HiFi-GAN。训练结合重构损失（谱域）、KL正则化损失和对抗损失（MPD、MSD、MRD）。
*   文本分词器：基于CosyVoice分词器，使用BPE对raw文本分词，无需G2P。为中文添加了`<|sp|>`停顿符和1549个拼音音节组合（训练时随机替换中文字符为拼音以增强鲁棒性）。为支持多说话人，添加了与文本序列等长的说话人-轮次标签序列，通过检测文本中的轮次标签（`<S{id}>`, `</S{id}>`）分配。
*   生成器：采用基于流匹配的扩散Transformer（DiT）。文本和说话人-轮次条件先经过一个轻量级Transformer处理，再与语音隐变量交互。训练目标是预测从噪声到目标隐变量的速度场。模型使用RMSNorm和基于自适应层归一化（AdaLN）的全局适配器。
*   训练策略：
    *   课程学习：1) 单语预训练：从零开始在约200万小时单语数据（含发音困难合成数据）上训练，建立基础合成能力。2) 混合对话训练：在单语数据中加入拼接的2-4说话人对话数据，学习说话人切换。3) SFT训练：在单语数据中加入真实的2-4说话人对话数据（来自影视剧、播客等），学习对话一致性（环境、情感）。
       后训练（DiffusionNFT）：采用在线强化学习，奖励函数为`r = 0.5  (r_phone + r_sim)`。`r_phone`是基于外部音素识别器的音素级一致性奖励（计算WER并取指数），`r_sim`是基于说话人嵌入的余弦相似度奖励。优化采用DiffusionNFT策略，在前向过程中通过策略优化（式9-13）更新模型，并添加参考策略正则化以防止质量退化。使用3000个真实对话样本进行后训练。
*   推理：输入参考语音和目标文本。模型转写参考语音以获取说话人文本，估计目标时长。使用sway sampling和阶梯式无分类器引导（CFG），分离文本内容与说话人/风格的引导强度（ω_text， ω_ref）。

![图1](https://arxiv.org/html/2605.30993v1/x1.png)

![图2](https://arxiv.org/html/2605.30993v1/x2.png)


### 💡 核心创新点

1.  SwanData-Speech数据构建流程：提出了一套系统的、从原始长音频中提取可用于训练的单语和对话数据的流程，其核心创新在于感知停顿的标点修正，强调声学停顿与文本标点的对齐对TTS韵律的重要性。
2.  端到端长对话生成框架：SwanVoice将长对话视为一个全上下文生成问题，而非轮次拼接，通过说话人-轮次条件和课程学习，尝试同时保持单语质量和对话一致性。
3.  结合多技术的综合解决方案：集成了25Hz VAE、raw文本分词与拼音增强、Flow-matching DiT、三阶段课程学习和DiffusionNFT后训练，形成了一套完整的系统级解决方案。

### 📊 实验结果

评估使用SwanBench-Speech协议，涵盖声学、语义和表现力三个维度。SwanVoice主模型参数量为20亿。

表1：长文本TTS模型在多维度指标上的评估结果（单语生成）
| 模型 | 声学 | | | 语义 | | 表现力 | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | 音色一致性(↑) | 混响一致性(↓) | 声音保真度(↑) | 内容错误率(↓) | 韵律连贯性(↑) | 丰富度(↑) | 层次感(↑) |
| 开源模型 | | | | | | | |
| CosyVoice-2 | 0.93 | 2.37 | 3.58 | 0.106 | 2.81 | 2.02 | 2.59 |
| CosyVoice-3 | 0.93 | 2.73 | 3.80 | 0.077 | 3.26 | 2.64 | 2.47 |
| FishSpeech | 0.93 | 2.00 | 4.09 | 0.066 | 3.77 | 2.37 | 2.90 |
| F5TTS | 0.92 | 2.12 | 2.60 | 0.085 | 2.87 | 2.77 | 2.97 |
| GLM-TTS | 0.94 | 1.64 | 3.90 | 0.074 | 3.28 | 1.57 | 2.39 |
| IndexTTS-2 | 0.93 | 1.77 | 2.78 | 0.077 | 3.63 | 3.32 | 2.94 |
| MegaTTS-3 | 0.93 | 2.07 | 3.52 | 0.072 | 3.22 | 2.40 | 3.01 |
| SparkTTS | 0.92 | 2.04 | 3.53 | 0.314 | 2.35 | 2.23 | 2.22 |
| VibeVoice | 0.92 | 2.45 | 3.47 | 0.092 | 3.75 | 3.42 | 3.06 |
| ZipVoice | 0.89 | 2.10 | 3.53 | 0.213 | 2.97 | 2.11 | 2.05 |
| 平均 | 0.92 | 2.13 | 3.48 | 0.12 | 3.19 | 2.49 | 2.66 |
| SwanVoice | 0.93 | 2.06 | 3.60 | 0.172 | 3.56 | 3.81 | 3.62 |

在单语生成上，SwanVoice在表现力指标（丰富度3.81，层次感3.62）上超过所有开源基线。在音色一致性（0.93）和声音保真度（3.60）上达到或超过平均水平，但内容错误率（0.172）高于多个基线（如FishSpeech 0.066， CosyVoice-3 0.077）。

表2：对话生成模型在SwanBench-Speech指标上的结果
| 模型 | 声学 | | | 语义 | | 表现力 | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | 音色一致性(↑) | 混响一致性(↓) | 声音保真度(↑) | 内容错误率(↓) | 韵律连贯性(↑) | 丰富度(↑) | 层次感(↑) |
| 开源模型 | | | | | | | |
| FireRedTTS-2 | 0.91 | 3.54 | 2.54 | 0.148 | 2.93 | 2.52 | 2.65 |
| MoonCast | 0.90 | 3.29 | 2.60 | 0.284 | 2.93 | 2.42 | 2.54 |
| MOSS-TTSD | 0.89 | 3.52 | 2.83 | 0.227 | 2.57 | 3.04 | 2.86 |
| SoulX-Podcast | 0.92 | 3.23 | 3.98 | 0.101 | 3.89 | 2.80 | 3.15 |
| VibeVoice | 0.89 | 2.09 | 2.75 | 0.204 | 3.00 | 3.09 | 2.83 |
| ZipVoice-Dialog | 0.90 | 3.49 | 2.48 | 0.116 | 3.46 | 2.88 | 2.93 |
| 平均 | 0.90 | 3.19 | 2.86 | 0.180 | 3.13 | 2.79 | 2.83 |
| SwanVoice | 0.92 | 3.02 | 3.77 | 0.145 | 3.70 | 3.62 | 3.71 |

在对话生成上，SwanVoice在表现力（丰富度3.62，层次感3.71）和声音保真度（3.77）上领先，韵律连贯性（3.70）最佳。内容错误率（0.145）低于平均（0.180），但SoulX-Podcast（0.101）和ZipVoice-Dialog（0.116）更低。

![图3](https://arxiv.org/html/2605.30993v1/x3.png)


### 🔬 细节详述

*   训练数据规模：原始数据集约259万小时（中文224万，英文35万）。经SwanData-Speech处理后用于SwanVoice训练。具体单语/对话子集划分未详细说明。后训练使用3000个真实对话样本。
*   模型规模与训练细节：主模型20亿参数。单语预训练：64 A100，500k步；混合对话训练：32 A100，600k步；SFT：32 A100，300k步；后训练：8 A100，50 epochs。
*   Swan Forced Aligner：在附录中详细介绍。使用WavLM作为音频编码器，模型约4亿参数。在内部80K小时数据集上训练。采用显式的词-空格交错拓扑结构，结合帧级交叉熵、CRF、时长监督和单调性正则化进行训练。在GTSinger-Speech和LibriSpeech上与多个基线（MFA, WhisperX, Qwen3 Aligner等）进行评估，结果如表3所示（此处不重复表格）。
*   评估细节：SwanBench-Speech评估协议中，表现力评估采用MLLM-as-a-judge（Gemini-3-Pro）方法，分别计算句子级的丰富度（对音频分块评分取平均）和段落级的层次感（评估情感变化、声音动态、场景适配性）。内容错误率使用FunASR-Nano计算中文CER/英文WER。
*   复现性：论文提供了模型参数、训练硬件、部分评估指标计算方式、SwanBench-Speech Demo页面链接。SwanData-Speech流程和SwanVoice模型的完整代码和权重未开源。论文中提及的Swan Forced Aligner也未开源。评估所用的SpeechJudge模型（基于Qwen2.5-Omni微调）未提供开源链接。

### ⚖️ 评分理由

*   创新性 (3/3)：提出完整的数据-模型-训练-后训练流水线解决长对话TTS问题，数据构建中的感知停顿对齐和模型中结合拼音替换与说话人轮次条件具有实用价值。但核心生成模型（Flow-matching DiT）并非首创，创新更多在于系统整合。
*   技术严谨性 (1.2/1.5)：方法描述详细，训练细节清晰。但关键创新点“表现力”的评估严重依赖专有、未开源的评估模型（SpeechJudge, Gemini-3-Pro），降低了结果的可验证性和客观性。缺乏关键的消融实验（如数据管道各模块、课程学习阶段、拼音替换、后训练奖励的具体贡献）。
*   实验充分性 (1.2/1.5)：对比了大量开源基线（单语10个，对话6个），评估维度全面（声学、语义、表现力）。但如上所述，评估器依赖性问题严重。实验主要集中在指标对比，对失败案例（如内容错误、说话人切换失败）的深入分析不足。
*   清晰度 (0.9/1)：论文写作清晰，图表（流程图、架构图）有助于理解。但部分术语（如“层次感”）的定义依赖未公开的评估标准。
*   影响力 (1.5/2)：对语音合成，特别是对话TTS领域有明确贡献，提供了可工业化的解决方案。但核心代码和模型未开源，主要影响力受限于论文阅读者和潜在的内部应用，难以直接推动学术界的广泛复现和改进。
*   开源 (0.8/1.5)：部分辅助工具代码已开源（如CosyVoice分词器、SenseVoice等），但论文提出的核心贡献（SwanData-Speech流程、SwanVoice模型、Swan Forced Aligner）均未开源，仅提供了Demo页面。这严重违背了顶会对可复现性的期望。
*   可复现性 (0.3/0.5)：提供了详细的超参数和硬件配置，但关键组件（数据、模型权重、代码）均未公开，完全复现该工作基本不可能。

### 🚨 局限与问题

1.  核心组件未开源，验证性存疑：论文最大的局限在于其声称的创新（数据管道、模型、后训练）全部未开源，且评估所用的关键模型（SpeechJudge）也未开源。这使得其“表现力领先”的结论缺乏独立验证的基础，说服力大打折扣。
2.  评估依赖专有模型，公平性存疑：表现力评估使用Gemini-3-Pro和未开源的SpeechJudge，而非广泛接受的众包MOS或已验证的公开自动评估指标。评估标准（如“层次感”）不透明，可能引入评估偏差，难以与其他工作直接公平比较。
3.  缺乏关键消融实验：尽管提出了复杂的多模块系统（数据流程、拼音替换、课程学习三阶段、DiffusionNFT），但论文未提供充分的消融实验来证明每个关键组件的具体贡献和必要性。例如，感知停顿标点修正、拼音替换、课程学习各阶段分别带来了多少提升？DiffusionNFT相比其他后训练方法优势何在？
4.  内容准确性仍是显著短板：实验结果一致显示，SwanVoice在内容错误率上并非最优，甚至显著落后于部分基线（如FishSpeech）。论文承认这是主要限制，但未深入分析根本原因（是训练数据、ASR转录质量、模型本身容量还是生成策略导致？），也未展示缓解此问题的有效思路。
5.  训练数据细节不透明：虽然提到了原始数据规模，但最终用于训练SwanVoice的单语子集和对话子集的具体构成、大小、来源分布、清洗后的质量统计等信息均未说明。数据质量是决定TTS系统上限的关键，此部分信息的缺失使得工作难以被深入分析和借鉴。
6.  系统复杂度与计算成本：该方法涉及多个复杂的处理步骤（语音增强、分割、对齐、过滤、合成困难样本、多阶段训练、强化学习后训练），计算资源消耗巨大（数十至数百A100 GPU训练数十万步）。这给实际部署和学术界跟进带来了很高的门槛。
7.  泛化性未充分验证：所有评估均在SwanBench-Speech上进行。该Benchmark是否全面代表了“长对话合成”的挑战？在跨语言、跨领域（如不同语种的对话）、极端长对话或噪声环境下的泛化能力未被讨论。

---

[← 返回 2026-06-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-01/)
