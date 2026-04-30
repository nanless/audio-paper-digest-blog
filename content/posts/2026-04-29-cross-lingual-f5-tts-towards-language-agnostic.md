---
title: "Cross-Lingual F5-TTS: Towards Language-Agnostic Voice Cloning and Speech Synthesis"
date: 2026-04-29
draft: false
tags: [语音克隆, 语音合成, 流匹配, 多语言, 零样本]
categories: [icassp-2026]
description: "语音克隆 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Cross-Lingual F5-TTS: Towards Language-Agnostic Voice Cloning and Speech Synthesis

#语音克隆 #语音合成 #流匹配 #多语言 #零样本

✅ **7.5/10** | 前25% | #语音克隆 | #流匹配 | #语音合成 #多语言

学术质量 7.0/7 | 选题价值 8.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Qingyu Liu（上海交通大学 X-LANCE Lab / 约翰斯·霍普金斯大学）
- 通讯作者：Xie Chen（上海交通大学 X-LANCE Lab / 上海创新研究院）†（论文中明确标注为通讯作者）
- 作者列表：Qingyu Liu（上海交通大学、约翰斯·霍普金斯大学）、Yushen Chen（上海交通大学、上海创新研究院）、Zhikang Niu（上海交通大学、上海创新研究院）、Chunhui Wang（吉利）、Yunting Yang（吉利）、Bowen Zhang（吉利）、Jian Zhao（吉利）、Pengcheng Zhu（吉利）、Kai Yu（上海交通大学）、Xie Chen（上海交通大学、上海创新研究院）

#

### 💡 毒舌点评

亮点：论文精准地找到了flow-matching TTS在跨语言场景下的痛点——对音频提示转录文本的依赖，并通过引入多粒度说话率预测器给出了一个工程上优雅的解决方案。短板：说话率预测器本身只在中文和英文数据上训练，却要声称对德、法、印地、韩等“未见语言”有效，这一结论的支撑略显单薄；此外，去除转录文本后“细粒度说话人特征（如口音、情感）”的迁移能力下降，在论文中被轻描淡写为“未来工作”，但这恰恰是克隆质量的要害。

#

### 📌 核心摘要

1. 问题：现有的基于流匹配的文本转语音（TTS）模型在进行跨语言语音克隆时，严重依赖于对音频提示（参考音频）的转录文本，这在目标语言未知或转录不可用时无法实现。
2. 方法核心：提出Cross-Lingual F5-TTS框架。训练时，利用MMS强制对齐工具预处理数据，获取词边界，将音频提示部分及其对应文本完全丢弃，仅用提示音频指导合成剩余被掩码的音频。推理时，为解决缺失文本导致的时长预测难题，训练了音素、音节、词三种粒度的说话率预测器，直接从音频提示的声学特征估算其说话速度，进而结合目标文本的单元数量计算合成时长。
3. 创新点：相比原F5-TTS及同类模型，本文首次在flow-matching TTS框架内实现了无需音频提示转录的跨语言克隆；引入了基于Gaussian Cross-Entropy损失的多粒度说话率预测器作为时长建模的替代方案。
4. 实验结果：在语内测试（LibriSpeech-PC test-clean, SeedTTS test-en/zh）上，该方法在WER和UTMOS等指标上匹配甚至优于原F5-TTS基线（如CL-F5+M1在LibriSpeech-PC test-clean上WER为2.079%，低于基线的2.205%）。在跨语言测试（473个样本，德、法、印地、韩语音提示合成中英文）上，成功实现了克隆，其中M1/M2模型表现良好（如合成英文WER为2.496%），而M3（词级）显著变差（WER达16.494%）。说话率预测器在MRE上表现最佳为M2在中文测试的13.771%。
5. 实际意义：使高质量语音克隆摆脱了对参考音频转录的强依赖，极大扩展了应用场景，尤其是在处理无法转录的罕见语言或实时克隆场景。
6. 局限性：1）说话率预测器在中英文以外语言上的有效性未直接验证，其泛化性存疑。2）去除文本信息后，对说话人细微特征（如口音、情感）的迁移能力下降，论文未提出解决方案。3）跨语言测试集的语言覆盖范围和样本量有限。

#

### 🏗️ 模型架构

![训练框架](http://teb0hdrpn.hd-bkt.clouddn.com/icassp-2026/2026-04-29/11461636-0.jpg)
(图1. Cross-Lingual F5-TTS 训练框架。MMS强制对齐为训练数据生成词边界，左侧片段作为无转录的音频提示，右侧片段的梅尔谱被掩码用于预测)

该框架包含两个主要模块：

1.  核心合成模型（基于F5-TTS）：
    *   输入：无转录的音频提示 `audio_prompt`，目标文本 `target_text`（处理为字符序列 `z`），以及一个掩码序列 `m`。
    *   流程：
        *   训练时，对训练音频按随机词边界切分。前半部分作为 `audio_prompt`，其文本信息被完全丢弃。后半部分的梅尔谱被掩码（`m⊙x1`），成为预测目标。
        *   模型采用Diffusion Transformer (DiT)架构，执行“文本引导的语音填充”任务。给定带噪声的、被部分掩码的语音 `(1-t)x0 + t x1`，模型学习预测被掩码的原始语音片段 `m⊙x1`，条件包括未掩码的语音 `(1-m)⊙x1`（来自提示）和目标文本序列 `z`。
    *   输出：预测的被掩码语音片段的梅尔谱。
    *   关键设计：完全移除了对音频提示对应文本的依赖，通过强制对齐在训练时提供分割点，但在模型推理时不使用文本。

2.  说话率预测器（新增模块）：
    *   输入：梅尔谱表示的音频提示。
    *   流程：
        *   架构：一个基于Transformer的模型。包含梅尔投影层、两个1D卷积层、多个Transformer编码器层，以及一个基于注意力的序列池化机制，最终通过分类器输出。
        *   训练：作为独立的分类任务。定义三个独立的预测器：音素/秒（72类）、音节/秒（32类）、词/秒（32类）。使用Gaussian Cross-Entropy (GCE)损失，让预测分布围绕真实说话率类别软化，以容忍小误差。
    *   输出：预测的说话率类别（离散值）。
    *   推理作用：在推理时，首先用此模型预测提示音频的说话率。然后统计目标文本中的音素/音节/词数量，目标音频时长 = 文本单元数量 / 预测说话率。此结果用于控制合成模型的生成长度。

数据流：推理时，`audio_prompt` 同时输入核心合成模型和说话率预测器。说话率预测器输出时长，核心合成模型在目标文本 `z` 引导下，基于提示的声学信息和预测时长，生成目标语音。

#

### 💡 核心创新点

1.  去转录依赖的跨语言训练范式：
    *   局限：原F5-TTS等模型在训练和推理时都依赖音频提示的转录文本，限制了跨语言应用。
    *   创新：在训练数据预处理阶段引入MMS强制对齐获取词边界，并在训练时随机切割音频，将前半部分作为无文本的“纯音频提示”。这使得模型能够学习仅从声学特征进行克隆和合成。
    *   收益：使框架具备了处理无转录、跨语言音频提示的潜力。

2.  基于说话率预测的时长建模：
    *   局限：原F5-TTS使用文本长度比估算时长，该方法在跨语言场景下失效（不同语言文本长度与语音时长无固定比例）。
    *   创新：提出独立的说话率预测器，直接从音频的声学特征（梅尔谱）预测说话速度（音素/音节/词每秒）。这是一个与文本内容解耦的、语言无关的时长估算机制。
    *   收益：解决了去转录后核心的时长预测难题，且预测器在中英数据上训练后，在跨语言测试中表现出一定的泛化能力。

3.  Gaussian Cross-Entropy (GCE) 损失用于序数回归：
    *   局限：标准交叉熵损失将类别视为独立，不适合说话率这种有序的连续值离散化问题。
    *   创新：为说话率预测器设计了GCE损失，使用高斯核生成软标签，使模型对接近真实值的预测给予更高的概率权重。
    *   收益：提升了说话率预测的准确性和鲁棒性，尤其是对邻近类别的容错。

#

### 🔬 细节详述

- 训练数据：核心合成模型在Emilia数据集的中文和英文子集上训练，约95,000小时。说话率预测器使用从中英文子集中各采样500小时的平衡子集训练。
- 损失函数：
    - 核心合成模型：Optimal Transport Conditional Flow Matching (OT-CFM) 损失（公式3）。
    - 说话率预测器：Gaussian Cross-Entropy (GCE) 损失（公式4, 5），标准差 σ=1.0。
- 训练策略：
    - 核心模型：AdamW优化器，学习率预热至7.5e-5（前20k步），然后线性衰减。总训练1.2M步。
    - 说话率预测器：AdamW优化器，学习率预热至2.5e-4（前7.5k步），然后线性衰减。训练50k步。
- 关键超参数：
    - 核心模型：DiT架构，22层，16头注意力，1024维嵌入。Batch size：8×A100 GPU，每GPU 38,400帧。
    - 说话率预测器：Transformer架构，6层，8头注意力，512维嵌入。Batch size：4×A100 GPU，每GPU 38,400帧。
    - 预测器类别集：音素级C={0.25,0.5,...,18.0} (N=72)；音节级与词级C={0.25,0.5,...,8.0} (N=32)。
- 训练硬件：核心模型使用8张NVIDIA A100 GPU；说话率预测器使用4张NVIDIA A100 GPU。总时长未说明。
- 推理细节：Euler ODE求解器，32次函数评估（NFE=32），CFG强度2.0，摆动采样系数-1.0。声码器使用预训练的Vocos。
- 数据预处理：对Emilia数据集应用MMS强制对齐提取词边界。对WhisperX生成的转录文本中的数字、特殊符号等异常token进行了特殊处理以跳过。

#

### 📊 实验结果

1. 说话率预测器性能 (表1)
| ID | 系统 | 数据集 | MAE(s)↓ | MRE(%)↓ |
| :--- | :--- | :--- | :--- | :--- |
| M1 | Phonemes-level predictor | Librispeech-PC test-clean | 0.759 | 11.932 |
| M2 | Syllables-level predictor | Librispeech-PC test-clean | 0.757 | 11.945 |
| M3 | Words-level predictor | Librispeech-PC test-clean | 1.171 | 18.406 |
| M1 | Phonemes-level predictor | SeedTTS test-en | 0.637 | 15.017 |
| M2 | Syllables-level predictor | SeedTTS test-en | 0.704 | 16.497 |
| M3 | Words-level predictor | SeedTTS test-en | 0.886 | 20.031 |
| M1 | Phonemes-level predictor | SeedTTS test-zh | 0.845 | 14.469 |
| M2 | Syllables-level predictor | SeedTTS test-zh | 0.783 | 13.771 |
| M3 | Words-level predictor | SeedTTS test-zh | 0.908 | 16.156 |
表1. 不同说话率预测器预测时长的MAE和MRE。细粒度预测器（M1, M2）优于粗粒度（M3）。在中文上，音节级（M2）最优。

2. 语内语音克隆性能 (表2)
| 系统 | 时长方法 | 数据集 | WER(%)↓ | SIM-o↑ | UTMOS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Baseline | Length-ratio | LibriSpeech-PC test-clean | 2.205 | 0.668 | 3.797 |
| CL-F5 | M1 | LibriSpeech-PC test-clean | 2.079 | 0.663 | 3.884 |
| CL-F5 | M2 | LibriSpeech-PC test-clean | 2.120 | 0.658 | 3.892 |
| Baseline | Length-ratio | SeedTTS test-en | 1.545 | 0.676 | 3.581 |
| CL-F5 | M1 | SeedTTS test-en | 1.513 | 0.662 | 3.629 |
| CL-F5 | M2 | SeedTTS test-en | 1.594 | 0.660 | 3.625 |
| Baseline | Length-ratio | SeedTTS test-zh | 1.475 | 0.762 | 2.898 |
| CL-F5 | M2 | SeedTTS test-zh | 1.481 | 0.764 | 2.887 |
| CL-F5 | M1 | SeedTTS test-zh | 1.605 | 0.759 | 2.913 |
表2. 语内测试结果。CL-F5（使用M1或M2）在WER和UTMOS上匹配或超越基线，SIM略有下降。M3性能最差。

3. 跨语言语音克隆结果 (表3)
| 时长方法 | 数据集 | WER(%)↓ | SIM-o↑ | UTMOS↑ |
| :--- | :--- | :--- | :--- | :--- |
| GT length | Cross-lingual test-en | 2.462 | 0.530 | 3.083 |
| M1 | Cross-lingual test-en | 2.496 | 0.543 | 3.069 |
| M2 | Cross-lingual test-en | 4.362 | 0.518 | 3.059 |
| M3 | Cross-lingual test-en | 16.494 | 0.486 | 2.926 |
| GT length | Cross-lingual test-zh | 1.596 | 0.558 | 2.452 |
| M2 | Cross-lingual test-zh | 1.801 | 0.565 | 2.503 |
| M1 | Cross-lingual test-zh | 2.446 | 0.555 | 2.494 |
| M3 | Cross-lingual test-zh | 1.946 | 0.563 | 2.492 |
表3. 跨语言测试结果（使用4种未见语言的语音提示合成英文/中文）。CL-F5+M1合成英文表现接近GT时长基线；CL-F5+M2合成中文表现最佳。M3合成英文的WER严重恶化。

#

### ⚖️ 评分理由

- 学术质量（6.5/7）：论文针对一个明确的实际问题（跨语言克隆的转录依赖），提出了一个完整且合理的技术方案（强制对齐+说话率预测器）。方法描述清晰，实验设置合理（基线对比、多指标评估、多语言测试），关键结果数据（表2、表3）能支撑其论点。主要不足在于跨语言泛化能力的证明较为间接（预测器仅在中英数据训练），且未深入分析说话人特征迁移下降的原因和解决方案。
- 选题价值（1.5/2）：跨语言语音克隆是当前语音生成领域的热点和难点，去除转录依赖具有明确的实用价值和研究前沿性。该工作直接面向此挑战，对从事语音合成、跨模态生成的研究者有较高参考价值。
- 开源与复现加成（0.5/1）：论文公开了Demo链接（HuggingFace Spaces）和示例音频。依赖的基础模型F5-TTS已开源，本文提出的Cross-Lingual F5-TTS代码在论文中暗示可访问（`github.io`和`huggingface.co`链接）。训练细节、数据集信息、超参数描述详尽，有利于复现。扣0.5分因为未明确给出Cross-Lingual F5-TTS本身和说话率预测器的预训练权重下载地址。

#

### 🔗 开源详情

- 代码：提供了Demo链接（https://huggingface.co/spaces/chenxie95/Cross-Lingual_F5-TTS_Space）和个人主页示例（https://qingyuliu0521.github.io/Cross_lingual-F5-TTS/）。论文指出Cross-Lingual F5-TTS的代码可通过这些链接访问，暗示已开源。
- 模型权重：基础模型F5-TTS-Base已开源。本文提出的Cross-Lingual F5-TTS模型和说话率预测器的具体权重下载地址论文中未明确提供。
- 数据集：使用了公开数据集Emilia、LibriSpeech、FLEURS。未提供本文特有的测试集（跨语言测试集）的独立下载。
- Demo：提供了交互式HuggingFace Spaces Demo。
- 复现材料：提供了详尽的训练配置（模型架构、优化器、学习率、batch size、训练步数）、推理设置（NFE、CFG等）和预处理方法描述，为复现提供了坚实基础。
- 依赖的开源项目：MMS (forced alignment), Vocos (vocoder), Whisper-large-V3 (WER评估), Paraformer-zh (中文WER评估), WavLM (说话人相似度评估), UTMOS (自然度评估)。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)
