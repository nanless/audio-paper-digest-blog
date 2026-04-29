---
title: "MaskVCT: Masked Voice Codec Transformer for Zero-Shot Voice Conversion with Increased Controllability via Multiple Guidances"
date: 2026-04-29
draft: false
tags: [语音转换, 掩码建模, 无分类器引导, 零样本]
categories: [icassp-2026]
description: "语音转换 | 6.5/10"
hiddenInHomeList: true
---

# 📄 MaskVCT: Masked Voice Codec Transformer for Zero-Shot Voice Conversion with Increased Controllability via Multiple Guidances

#语音转换 #掩码建模 #无分类器引导 #零样本

✅ **6.5/10** | 前50% | #语音转换 | #掩码建模 | #无分类器引导 #零样本

学术质量 5.0/7 | 选题价值 1.5/2 | 复现加成 0.0 | 置信度 中


### 👥 作者与机构

- 第一作者：Junhyeok Lee（Johns Hopkins University, Center for Language and Speech Processing）
- 通讯作者：Najim Dehak（Johns Hopkins University, Center for Language and Speech Processing）
- 作者列表：
    - Junhyeok Lee（Johns Hopkins University, Center for Language and Speech Processing）
    - Helin Wang（Johns Hopkins University, Center for Language and Speech Processing）
    - Yaohan Guan（Johns Hopkins University, Center for Language and Speech Processing）
    - Thomas Thebaud（Johns Hopkins University, Center for Language and Speech Processing）
    - Laureano Moro-Velazquez（Johns Hopkins University, Center for Language and Speech Processing）
    - Jesús Villalba（Johns Hopkins University, Center for Language and Speech Processing）
    - Najim Dehak（Johns Hopkins University, Center for Language and Speech Processing）

#

### 💡 毒舌点评

这篇论文的亮点在于其前所未有的控制灵活性，通过巧妙设计让用户能在推理时“拧旋钮”来平衡音色、音高和音素，而非被固定在一种模式里。然而，其短板也很明显：MaskVCT-Spk模式为了极致音色模仿，可懂度（WER）比最强基线差了近一倍，且论文对如何系统化地选择那些“旋钮”权重（CFG系数）的讨论略显薄弱，更像是试错后的结果。

#

### 📌 核心摘要

1.  问题：零样本语音转换面临两大挑战：一是难以彻底分离音高与语言内容（信息泄露），导致转换后语音保留源语音的语调；二是现有模型通常固定了条件输入模式，缺乏动态调节生成目标（如优先保留音色还是跟随源音高）的能力。
2.  方法核心：提出MaskVCT，一个基于掩码生成Transformer的零样本VC模型。其核心是结合音节表示（来自SylBoost，旨在剥离音高信息）与多个无分类器引导。模型可以接受连续或离散的语言特征，并可选择是否使用音高轮廓进行条件控制。
3.  新在哪里：与以往固定条件模式的模型不同，MaskVCT在单一模型中集成了多种条件（音高有/无、语言特征连续/离散），并通过三重无分类器引导的系数（ω_all, ω_spk, ω_ling）在推理时实现动态平衡，从而衍生出不同模式（如MaskVCT-All优先可懂度，MaskVCT-Spk优先说话人相似度）。
4.  主要实验结果：在LibriTTS-R测试集上，MaskVCT-Spk取得了最高的说话人相似度（S-SIM: 0.895，主观SS-MOS: 3.69），但可懂度最差（WER: 6.47，CER: 3.09）。MaskVCT-All在可懂度上表现较好（WER: 4.68）并精确跟踪源音高（FPC: 0.417）。在口音转换任务（L2-ARCTIC）中，MaskVCT-Spk在说话人相似度和口音相似度上表现突出。
5.  实际意义：该模型为语音转换提供了高灵活性的控制接口，用户可根据应用需求（如是否需要严格保持源语调，或是否需要模仿目标音色）调整模型行为，在语音编辑、个性化内容生成等场景有潜在价值。
6.  主要局限性：a) 可懂度与说话人相似度之间存在明显权衡，MaskVCT-Spk模式的错误率较高；b) 音节表示依赖K-means聚类，可能因错误映射导致误读，且难以纠正；c) 模型解码需要64次迭代，效率可能低于自回归或单次生成模型；d) 论文未提供代码和模型权重，限制了可复现性和直接应用。

#

### 🏗️ 模型架构

MaskVCT整体架构如图1所示。它是一个基于Transformer的非自回归掩码生成模型，用于预测离散的音频编解码器（DAC）令牌。

输入与条件提取：
- 源语音：经过DAC编码器得到9个码本的声学令牌序列 `A_0[t, c]`。
- 提示语音：3秒参考语音，同样经过DAC编码器和SylBoost（提取8.33Hz音节令牌 `L_p` 和音高 `P_p`），作为说话人条件（`A_p`）。
- 语言特征：从源语音中提取。提供了两种路径：
    1.  离散音节令牌 (`L[t]`)：直接使用SylBoost的量化输出。
    2.  连续语言特征：通过一个轻量级FFN-LayerNorm-FFN投影网络得到。
- 音高特征：使用Praat提取源语音的50Hz音高 `P[t]`，并通过公式（1）的正弦嵌入转换为向量 `P`。是否使用音高条件是可控的。

掩码建模过程：
训练时，模型学习从部分掩码的输入 `A_{u,q}` 重建完整的声学令牌 `A_0`。掩码策略是分层的：目标码本层 `q` 被随机掩码，低于 `q` 的层保持完整，高于 `q` 的层被完全掩码。推理时，从全掩码状态开始，经过64次迭代逐步揭示令牌，每次迭代根据预测概率选择位置和令牌值进行去掩码。

条件融合与引导：
所有条件（说话人令牌 `A_p`、语言令牌 `L`、音高令牌 `P`）的嵌入在输入层进行列方向相加，然后送入Transformer。关键创新是多重无分类器引导。在推理时，模型计算不同条件组合下的逻辑值（如仅语言条件、语言+说话人条件、语言+说话人+音高条件），并通过修改后的引导公式（3）进行融合。公式（3）以仅语言条件为基础，通过系数 `ω_all`, `ω_spk`, `ω_ling` 放大或抑制说话人、音高等额外条件的影响，从而实现生成过程的引导。

模型结构：采用标准Transformer编码器结构（PreLN，旋转位置编码）。具体为16层，16头注意力，模型维度1024，FFN维度4096，ReLU激活。每个码本层有一个独立的分类头。

![图1：MaskVCT系统整体描述](https://maskvct.github.io/)
(说明：图中展示了从源语音和提示语音中提取各类条件（声学、语言、音高），以及不同条件组合下（全条件、说话人+语言、仅语言、无条件）的掩码概率计算流程。下方展示了离散音节令牌和连续语言特征的生成路径。)

#

### 💡 核心创新点

1.  基于音节表示的低信息泄露条件：之前依赖自监督学习特征（如HuBERT）的VC模型存在音高和说话人信息泄露。MaskVCT采用SylBoost的粗粒度、低帧率（8.33Hz）音节令牌作为语言条件，旨在剥离源语音的音高和部分音色信息，为更灵活的生成提供基础。实验证据是MaskVCT-Spk获得了极低的FPC（0.167），表明其生成的音高与源音高相关性很低。
2.  单一模型中的多模式可控性：与固定条件模式（如必须音高条件或必须无音高条件）的模型不同，MaskVCT通过在训练时随机采样四种条件组合（全、说话人+语言、仅语言、无条件），并使用多路CFG，使得一个模型在推理时可以根据系数配置，无缝切换于不同工作模式（如MaskVCT-All和MaskVCT-Spk）。
3.  针对VC任务修改的多重无分类器引导：标准CFG减去的是“无条件”逻辑值。MaskVCT将其推广到语音转换场景，以“仅语言条件”作为基础，分别定义并引导说话人条件和音高条件的增量影响（公式3）。这允许更精细地控制不同因素的贡献强度。

#

### 🔬 细节详述

- 训练数据：混合了多个公开英语数据集：LibriTTS-R (train-clean), MLS-en, VCTK, LibriHeavy-Large, HiFi-TTS (clean), LJSpeech, RAVDESS (speech)。具体小时数未在表格中明确，但总训练数据量级为“百K小时”级别（见表1）。
- 数据增强：应用了PhaseAug 到所有DAC编码器输入以增强鲁棒性。对于音节特征，为防止自重建泄露源信息，对清洁语音进行音高偏移创建扰动版本，并以50%概率进行训练。
- 损失函数：掩码建模损失 `L_mask`（公式2），仅在被掩码的位置计算交叉熵损失。
- 训练策略：从头训练250k步。优化器AdamW，学习率0.0002，批大小168。使用SpecAugment，随机掩码输入向量10%的通道维度。层丢弃率和dropout率均为5%。训练使用2张A100 GPU。
- 关键超参数：
    - 模型大小：234M参数（不含预训练的SylBoost和DAC）。
    - Transformer：16层，16头，d_model=1024, d_ff=4096。
    - 码本：使用DAC的9个码本，码本词汇量K未明确。
    - 音节表示：SylBoost，帧率8.33Hz。
    - 音高：Praat提取，帧率50Hz。
- 训练硬件：2张NVIDIA A100 GPU。
- 推理细节：
    - 解码策略：掩码迭代去掩码，共N=64步。每步对应不同码本层的解码计划 [40,16,2,1,1,1,1,1,1]。
    - 选择策略：每步使用Gumbel-Softmax选择位置，对每个位置使用Top-k (k=35) 接着 Top-p (p=0.9) 采样令牌。
    - 模式：MaskVCT-All（连续语言，ω_all=1.5, ω_spk=1.0, ω_ling=1.0）；MaskVCT-Spk（离散音节，ω_all=0, ω_spk=2.0, ω_ling=0.5）。
- 正则化技巧：SpecAugment，Dropout (5%)，层丢弃 (5%)。

#

### 📊 实验结果

主任务：零样本语音转换（LibriTTS-R test-clean）
论文提供了详细的客观和主观评估结果。

| 模型 | NFE | Token数 | 音高条件 | WER ↓ | CER ↓ | S-SIM ↑ | FPC ↕ | SS-MOS ↑ | UTMOS ↑ | Q-MOS ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GT | - | - | - | 2.95 | 1.44 | 0.890 | 1.000 | 3.99±0.21 | 3.25±0.04 | 3.93±0.23 |
| Diff-HierVC | 30+6 | ∞ | ✓ | 5.31 | 2.62 | 0.865 | 0.388 | - | 3.30±0.30 | 2.97±0.04 |
| FACodec | 1 | 1024² | ✓ | 3.55 | 1.66 | 0.883 | 0.360 | - | 3.30±0.23 | 3.02±0.04 |
| MaskGCT-S2A | 66 | 8192 | ✗ | 5.18 | 2.89 | 0.863 | 0.396 | - | 3.02±0.28 | 3.24±0.03 |
| FreeVC | 1 | ∞ | ✗ | 3.96 | 1.91 | 0.855 | 0.420 | - | 3.47±0.23 | 2.79±0.03 |
| GenVC | 2T | 256 | ✗ | 7.18 | 3.57 | 0.846 | 0.192 | - | 3.03±0.27 | 2.49±0.04 |
| MaskVCT-All | 64 | ∞ | ✓ | 4.68 | 2.22 | 0.865 | 0.417 | 2.59±0.24 | 3.05±0.03 | 3.54±0.24 |
| MaskVCT-Spk | 64 | 2048 | ✗ | 6.47 | 3.09 | 0.895 | 0.167 | 3.69±0.26 | 3.17±0.03 | 3.44±0.22 |
（表2：LibriTTS-R test-clean数据集上的评估结果。加粗为关键指标最优。注：表中SS-MOS和AS-MOS列原始文本表格格式有误，此处根据上下文逻辑放置。）

关键结论：
- MaskVCT-Spk取得了最高的说话人相似度（S-SIM: 0.895），但在所有模型中可懂度最差（WER: 6.47）。
- MaskVCT-All在可懂度和音高跟踪（FPC）上表现良好。
- 主观评估中，MaskVCT-Spk获得了最高的说话人相似度MOS (3.69)，但整体质量（Q-MOS）不是最高。

口音转换任务（L2-ARCTIC）

| 模型 | 源口音 | 转换方向 | UTMOS ↑ | Q-MOS ↑ | S-SIM ↑ | SS-MOS ↑ | A-SIM ↑ | AS-MOS ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GT (L2) | ✓ | - | 3.01±0.06 | 3.49±0.24 | 0.940 | 4.70±0.13 | 0.519 | 4.51±0.16 |
| FACodec | ✗ | Libri→L2 | 2.87±0.08 | 2.92±0.28 | 0.768 | 3.05±0.23 | 0.356 | 3.21±0.25 |
| MaskGCT-S2A | ✗ | Libri→L2 | 3.21±0.07 | 3.75±0.21 | 0.770 | 2.89±0.27 | 0.345 | 3.39±0.22 |
| MaskVCT-Spk | ✗ | Libri→L2 | 3.15±0.08 | 3.44±0.21 | 0.790 | 3.23±0.27 | 0.362 | 3.33±0.26 |
| MaskVCT-Spk | ✓ | L2→L2 | 3.10±0.06 | 3.28±0.24 | 0.868 | 3.98±0.24 | 0.406 | 2.48±0.26 |
（表3：口音转换结果。加粗为关键指标最优。）

关键结论：
- 在Libri→L2任务中，MaskVCT-Spk在说话人相似度（S-SIM）和口音相似度（A-SIM）上表现最佳。
- 在L2→L2任务中，MaskVCT-Spk在主观说话人相似度（SS-MOS）上显著领先，并获得了最高的口音相似度（A-SIM）。

消融研究：论文主要通过对不同CFG权重组合的广泛搜索（未给出完整搜索空间）来确定MaskVCT-All和MaskVCT-Spk的最优权重，这本身说明了其多模式控制的灵活性，但也揭示了权重选择缺乏理论指导。

#

### ⚖️ 评分理由

- 学术质量：5.0/7
    - 创新性 (2.5/3)：创新点明确且实用，将音节表示与多CFG结合用于VC的可控性设计是有效贡献。但本质上是对现有组件的创新性应用和集成，非底层理论或架构突破。
    - 技术正确性与实验充分性 (1.5/2)：方法描述清晰，实验设置合理，对比了多个代表性基线，并进行了模式消融。实验数据翔实，包含了客观指标和主观MOS评估。
    - 证据可信度 (1/2)：实验结果与论文主张基本吻合（如MaskVCT-Spk高S-SIM低FPC）。然而，MaskVCT-Spk可懂度差的缺点被直接呈现，但未深入分析原因或提出改进方案，削弱了结论的完整性。

- 选题价值：1.5/2
    - 前沿性与应用空间：语音转换的可控性是当前研究热点和实际需求（如个性化语音编辑）。该工作提供了有价值的解决方案，对领域发展有推动作用。
    - 读者相关性：对于从事语音合成、转换、编辑的研究者和工程师，论文提出的控��框架具有直接的参考价值。

- 开源与复现加成：0.0/1
    - 仅提供Demo页面，未提供代码、模型权重、完整的训练配置（如CFG权重的完整消融研究）、检查点。复现依赖度很高，无法给予加成。

#

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了多个公开数据集（LibriTTS-R, MLS, VCTK等），但未提供统一处理后的数据或下载说明。
- Demo：提供在线音频示例页面：https://maskvct.github.io/。
- 复现材料：论文中给出了一些训练细节（如优化器、学习率、步数、硬件、数据增强方法），但缺少关键的超参数搜索细节（如最终CFG权重的确定方法）和预处理脚本。
- 引用的开源项目：使用了以下开源工具/模型：
    - DAC (Descript Audio Codec)：音频编解码器。
    - SylBoost：提供音节表示。
    - Praat：用于音高提取。
    - Whisper (large-v3)：用于计算WER/CER。
    - WavLM：用于提取说话人嵌入计算S-SIM。
    - CommonAccent：用于计算口音相似度A-SIM。
    - UTMOS v2：用于计算自动质量评分。
- 论文中未提及完整的开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)
