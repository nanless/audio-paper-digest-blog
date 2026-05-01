---
title: "Discrete Diffusion for Generative Modeling of Text-Aligned Speech Tokens"
date: 2026-04-29
draft: false
tags: [语音合成, 扩散模型, 自回归模型, 语音表示]
categories: [icassp-2026]
description: "语音合成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Discrete Diffusion for Generative Modeling of Text-Aligned Speech Tokens

#语音合成 #扩散模型 #自回归模型 #语音表示

✅ **7.5/10** | 前25% | #语音合成 | #扩散模型 | #自回归模型 #语音表示

学术质量 6.0/7 | 选题价值 1.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Pin-Jui Ku（NVIDIA；Georgia Institute of Technology）
- 通讯作者：未说明
- 作者列表：Pin-Jui Ku（NVIDIA；Georgia Institute of Technology），He Huang（NVIDIA），Jean-Marie Lemercier（NVIDIA），Subham Sekhar Sahoo（NVIDIA；Cornell Tech），Zhehuai Chen（NVIDIA），Ante Jukić（NVIDIA）

### 💡 毒舌点评

亮点：论文将新兴的离散扩散模型系统性地应用于语音token重建，并提供了迄今最全面的实证分析，结论（如FSQ优于RVQ、Conf-TopK采样更佳）对后续相关工作有直接的工程指导价值。短板：论文主要贡献是“应用与分析”，而非提出基础理论或解决语音token化中的核心难题（如语义与声学信息的完美解耦），且未探讨其方法对下游语音大模型（如TTS、ASR）性能的影响，使其深度和影响力受限。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用了Granary英文子集，论文未说明如何公开获取。
- Demo：提供了一个Demo页面链接：`https://kuray107.github.io/DDMs_on_taste26_examples/demo`，用于展示音频样本。
- 复现材料：论文在“实验设置”部分给出了详细的训练配置（GPU型号/数量、batch size、优化器、学习率策略、两阶段训练步数、模型参数量）、评估指标和采样器设置，为复现提供了充分的文字指导。
- 论文中引用的开源项目：
    - 量化方案：Finite Scalar Quantization (FSQ) [26]
    - 预训练模型：Whisper [21], NVIDIA NeMo [25], CosyVoice [17], HiFi-GAN vocoder [23]
    - 评估工具：Torchaudio-Squim [30], WavLM [33], TitaNet [34], WV-MOS [31], UTMOS [32]
    - DDM相关：D3PM [1], MDLM [2], ReMDM [4], Confidence-based Samplers [13, 14, 15]


### 📌 核心摘要

1. 要解决什么问题：现有的TASTE语音token化框架依赖自回归（AR）解码器来重建语音，这导致推理速度慢，且重建质量可能非最优。
2. 方法核心是什么：提出用离散扩散模型（DDM）替代TASTE中的AR解码器。模型在推理时，通过迭代去噪（从全掩码到逐步揭示）来并行预测S3 token序列，再由vocoder生成波形。
3. 与已有方法相比新在哪里：首次在TASTE框架中系统性地应用并分析DDM。与AR解码器相比，DDM解码具有并行性，且质量更高。同时，论文系统比较了向量量化方案（RVQ vs. FSQ），发现FSQ能显著提升性能。
4. 主要实验结果如何：在LibriSpeech数据集上，DDM解码器相比AR基线实现了3.3倍的推理速度提升（测试集1.65秒 vs. 5.48秒）。使用RVQ量化时，DDM的WER比AR降低35%（测试集：5.10% vs. 7.60%），UT-MOS提升0.45（4.27 vs. 3.82）。使用FSQ量化后，性能进一步提升，AR模型的WER相对降低35%，UT-MOS提升0.14。DDM模型在10步推理时即可达到峰值性能，甚至单步推理也基本可用。关键实验结果对比如下表：
    | 模型 | 量化方式 | 测试集 | WER (%) ↓ | UT-MOS ↑ |
    | :--- | :--- | :--- | :--- | :--- |
    | AR基线 | 4L-RVQ | test-clean | 7.60 | 3.82 |
    | 本文DDM | 4L-RVQ | test-clean | 5.10 | 4.27 |
    | 本文DDM | 4L-FSQ | test-clean | 4.00 | 4.30 |
    | 本文DDM | 10步 | test-clean | 3.70 | 4.28 |
    | 本文DDM | 单步 | test-clean | 5.14 | 3.81 |
5. 实际意义是什么：为语音token化中的高效、高质量解码提供了一个优于自回归范式的新方案，展示了离散扩散模型在条件生成任务中的潜力，并提供了工程实践上的具体指导（如采样器选择、步数设置）。
6. 主要局限性是什么：模型性能严重依赖一个外部长度预测器来估计S3 token序列长度；论文未验证该改进的语音表示对下游语音大模型（如端到端TTS、ASR）的具体增益；其优势建立在强条件（文本+TASTE embedding）上，对于无条件或弱条件生成任务的普适性未探讨。

### 🏗️ 模型架构

![TASTE框架及改进](https://kuray107.github.io/DDMs_on_taste26_examples/images/framework.png)
本文模型架构建立在TASTE框架之上，包含两个主要部分：TASTE Tokenizer和解码器（AR或DDM）。整体流程如图1所示。
1.  TASTE Tokenizer：
    - 输入：语音波形（训练时）或梅尔频谱图（推理时）。
    - Encoder：使用预训练ASR模型（如Whisper，本文用NVIDIA Canary-180M）的编码器，将语音转换为帧级的声学特征序列。
    - Aggregator：使用一个交叉注意力模块（初始化自Whisper解码器），将Encoder输出的声学特征与文本转录token的嵌入进行对齐。这是TASTE的核心，使得输出的语音token与文本token一一对应，解决了长度不匹配问题。
    - Quantizer：将Aggregator输出的连续嵌入向量量化为离散的token序列 `S`（TASTE tokens）。本文比较了残差向量量化（RVQ）和有限标量量化（FSQ）两种方案。
2.  解码器（关键差异点）：
    - AR解码器（图1(a)）：一个基于Transformer的解码器，以文本嵌入和连续的TASTE嵌入（非离散token）作为条件，自回归地逐个预测CosyVoice的S3 token序列 `S_{1:n}`。预测出的S3 token再通过预训练的vocoder转换为波形。
    - DDM解码器（图1(b)）：架构与AR解码器类似，但输入和推理过程不同。训练时，它学习预测一个从完全掩码的S3 token序列 `S_mask` 逐步去噪恢复到原始序列 `S` 的过程。推理时，从一个完全掩码的序列开始，通过多次迭代去噪（例如Conf-TopK采样），并行地预测出整个S3 token序列 `S'`，然后通过相同的vocoder生成波形。

数据流总结：原始语音 -> Encoder -> Aggregator（文本对齐）-> Quantizer -> TASTE tokens `S`。解码阶段：文本+ `S` -> [AR或DDM解码器] -> 预测S3 tokens -> Vocoder -> 重建语音。

### 💡 核心创新点

1.  首次将离散扩散模型系统性应用于语音token重建：针对TASTE框架中AR解码器效率低下的瓶颈，创新性地引入DDM作为替代方案，并进行了全面、严谨的实证分析，证明了其在质量（WER、MOS）和速度上的双重优势。
2.  系统比较并验证了FSQ优于RVQ在语音token量化中的效果：在TASTE和DDM两种解码器设置下，对不同层数的RVQ和FSQ进行了详尽对比。实验表明，FSQ能带来显著的WER降低（AR模型相对降低35%）和UT-MOS提升，且对DDM也有增益，为语音token化设计提供了新见解。
3.  提供了DDM在语音任务中的实用采样指南：深入比较了多种DDM采样器（Ancestral, Conf-TopK, Conf-TopP, ReMDM），发现在强条件生成的语音重建任务中，确定性的Conf-TopK采样器远优于更随机的采样器，这与无条件文本生成的结论不同，具有实践指导意义。
4.  揭示了DDM在解码步数与长度估计误差上的鲁棒性：实验证明DDM仅需10步即可达到最优性能，支持单步生成；同时分析了长度估计误差的影响，发现模型对序列长度过估计相对鲁棒（追加静音），而对过估计更敏感（导致删除错误），为实际部署提供了风险参考。

### 🔬 细节详述

- 训练数据：Granary英文子集，约275k小时语音数据，来源于ASR风格数据，比原始TASE使用的数据更噪。
- 评估数据：LibriSpeech的`test-clean`和`test-other`子集。
- 损失函数：
    - DDM训练损失：采用修改后的式(4)，即 `-∑ log p(x_θ(z_t^ℓ, t), x^ℓ)` 在时间 `t` 上的积分。这比原MDLM的式(3)更稳定。
    - 总损失：使用RVQ时，为DDM损失加上量化器的commitment loss。使用FSQ时，仅为DDM损失。
- 训练策略：
    - 采用两阶段训练：第一阶段（100k步）预训练不含量化器的模型；第二阶段（150k步）加入量化器（RVQ或FSQ），并冻结Encoder，继续训练。
    - 优化器：Adam。
    - 学习率：前5000步线性warmup到`5e-4`，之后使用余弦衰减至`1e-6`。
    - Dropout：AR模型最佳为10%，DDM模型最佳为0%。
- 关键超参数：
    - 模型总参数量：约316M。
    - RVQ配置：默认4层，每层512个码本，维度256。
    - FSQ配置：使用论文[26]中的方法，具体码本大小未说明。
    - DDM推理步数：默认50步（Conf-TopK采样器），但实验证明10步即可。
- 训练硬件：32张 NVIDIA A100 GPUs。
- 推理细节：
    - DDM采样器：默认Conf-TopK（置信度Top-K）。
    - 推理时间：在test-clean上，DDM（4L-FSQ，50步）平均约1.65秒，AR基线（4L-RVQ）平均约5.48秒。
- 评估指标：
    - WER：使用NVIDIA FastConformer-Transducer-Large ASR模型转录重建语音后计算。
    - 感知质量：Squim-PESQ, Squim-SISDR, WV-MOS, UT-MOS。
    - 说话人相似度：使用WavLM和TitaNet提取嵌入计算余弦相似度（SpkSim-W, SpkSim-T）。

### 📊 实验结果

主要基准结果（表1：AR vs. DDM）

| 模型 | 量化方式 | 测试集 | WER (%) ↓ | UT-MOS ↑ | SpkSim-W ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Original | - | test-clean | 1.80 | 4.09 | 1.00 |
| S3-Oracle | - | test-clean | 2.69 | 4.15 | 0.96 |
| AR-No-VQ | 无 | test-clean | 2.81 | 4.15 | 0.96 |
| DDM-No-VQ | 无 | test-clean | 2.99 | 4.23 | 0.96 |
| AR-4L-RVQ | 4L-RVQ | test-clean | 7.60 | 3.82 | 0.95 |
| DDM-4L-RVQ | 4L-RVQ | test-clean | 5.10 | 4.27 | 0.94 |
| Original | - | test-other | 3.80 | 3.50 | 1.00 |
| S3-Oracle | - | test-other | 6.74 | 3.71 | 0.96 |
| AR-4L-RVQ | 4L-RVQ | test-other | 16.50 | 3.33 | 0.93 |
| DDM-4L-RVQ | 4L-RVQ | test-other | 10.84 | 3.97 | 0.94 |

消融实验：向量量化方案（表2摘要）
论文在表2中详细比较了不同层数（2/4/8）的RVQ与FSQ在AR和DDM模型上的表现。关键结论：
- 在AR模型中，FSQ全面优于RVQ。例如，在`test-clean`上，4L-FSQ的WER（4.87%）比4L-RVQ（7.60%）降低35%，UT-MOS（4.07 vs. 3.82）提升0.25。
- 在DDM模型中，FSQ同样带来增益，但RVQ本身性能已很强，所以提升幅度相对较小。

消融实验：采样器选择（图2）
![采样器对比](https://kuray107.github.io/DDMs_on_taste26_examples/images/sampler_comparison.png)
图2展示了不同采样器在DDM-4L-FSQ模型上的性能。Conf-TopK和Conf-TopP采样器在WER、UT-MOS、PESQ等所有指标上均优于更随机的Ancestral和ReMDM采样器。

消融实验：推理步数（表3）

| 推理步数 | 推理时间(s) | WER (%) ↓ | UT-MOS ↑ | SQUIM-PESQ ↑ | SpkSim-W ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 1.09 | 5.14 | 3.81 | 3.39 | 0.95 |
| 10 | 1.18 | 3.70 | 4.28 | 3.80 | 0.95 |
| 25 | 1.36 | 3.83 | 4.29 | 3.81 | 0.95 |
| 50 | 1.65 | 4.00 | 4.30 | 3.82 | 0.95 |
| 100 | 2.29 | 4.01 | 4.30 | 3.82 | 0.94 |

结论：10步即可达到最优WER（3.70%），50步左右MOS和PESQ达到饱和，甚至单步推理也仅造成性能小幅下降。

消融实验：长度估计误差（图3）
![长度误差影响](https://kuray107.github.io/DDMs_on_taste26_examples/images/length_scale.png)
图3显示了长度估计比例（70%-130%）对ASR错误率（插入、删除、替换）的影响。当预测长度短于真实长度（<1.0）时，删除和替换错误率显著上升；当预测长度长于真实长度（>1.0）时，仅轻微增加插入错误（追加静音）。结论：长度过估计相对安全，过估计风险高。

### ⚖️ 评分理由

- 学术质量：6.0/7。本文并非提出全新的模型或理论，而是在一个特定框架（TASTE）内，对一个已知技术（DDM）进行了深入、系统性的应用研究和工程优化。实验设计严谨，数据充分，结论可靠，具有较高的技术完成度和实用参考价值。
- 选题价值：1.0/2。语音token化是语音大模型的关键组件，提升其效率和质量有实际需求。DDM作为一种新兴的生成模型，探索其在语音领域的应用具有前沿性。但本文聚焦于“重建”这一中间环节，而非直接解决TTS、ASR等终端任务，其影响力相对间接。
- 开源与复现加���：0.5/1。论文提供了非常详细的训练超参数、硬件环境和评估方法，并给出了Demo页面以感知效果。然而，未公开核心代码、模型权重和Granary数据集的访问方式，使得完全复现存在较高门槛。


---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)
