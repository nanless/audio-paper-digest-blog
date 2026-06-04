---
title: "CleanCodec: Efficient and Robust Speech Tokenization via Perceptually Guided Encoding"
date: 2026-06-04
draft: false
tags: [语音编码, 语音合成, 语音识别, 对比学习]
categories: [论文速递]
description: "语音编码 | 8.8/10"
hiddenInHomeList: true
---

# 📄 CleanCodec: Efficient and Robust Speech Tokenization via Perceptually Guided Encoding

#语音编码 #语音合成 #语音识别 #对比学习

**8.8/10** | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.3/1.5 | 清晰 1/1 | 影响 1.3/1.5 | 开源 0.5/1.5 | 复现 0.5/0.5 | 工程 1.4/1.5

🔥 **8.8/10** | 前25% | #语音编码 | #自监督学习 | #语音合成 #语音识别 | [arxiv](https://arxiv.org/abs/2606.04418)


### 👥 作者与机构

Eugene Kwek (Pennsylvania State University), Feng Liu (Drexel University), Rui Zhang (Pennsylvania State University), Wenpeng Yin (Pennsylvania State University)。

### 💡 毒舌点评

这篇文章确实提出了一个很巧的“感知引导”思路，通过联合训练语音增强任务来迫使模型只关注“干净”信息。在12.5 t/s这个极低的令牌率下能取得不错的SIM和WER，证明了其设计方向的有效性。特别是将TitaNet说话人嵌入引入全局编码器作为条件，是个有创意的点。然而，论文的局限性部分过于轻描淡写。所谓的“高效”和“鲁棒”在多大程度上依赖于训练数据的噪声分布？如果真实部署环境的噪声类型与训练集差异很大，这个“选择性信息瓶颈”会不会反而丢掉重要信息？论文没有讨论。另外，虽然对比了多个SOTA，但表格一和表二中Qwen3-TTS-Tokenizer在50 t/s时的表现突然下降得非常厉害，这暗示某些基线可能没有被充分调优或配置不一致，使得CleanCodec的优势看起来比实际更大。开源承诺仅有代码，没有权重，对于这个参数量的模型，实际可复现性要打折扣。

### 📌 核心摘要

本文将音频标记化重构为一个选择性信息瓶颈问题，提出了CleanCodec，一种去噪音频编解码器。其核心思想是，理想的编解码器应只编码感知上重要的信息（如语言内容、音色），并丢弃背景噪声、录音伪影等感知上不重要的特征，从而在极低比特率下最大化感知质量。为实现此目标，本文提出了一种新颖的联合训练框架，将标准的音频重建任务与语音增强任务相结合。通过向训练语音添加各种退化（混响、噪声、滤波、重采样、MP3压缩），并监督模型重建原始干净信号，迫使模型忽略这些不重要信息。此外，文章引入了基于TitaNet说话人验证模型的全局编码器条件化机制，以更好地保留说话人音色信息。实验表明，在仅12.5 tokens/秒的令牌率下，CleanCodec在说话人相似度（SIM）和语音可懂度（WER）上显著超越了现有编解码器，并在下游的语音转换和文本到语音任务中展现出优越的性能和高达17倍的推理加速。

### 🔗 开源详情

- 代码：论文中明确指出代码将在GitHub上发布（“Inference and training code will be released on Github.”），但论文中未提及具体的GitHub仓库链接。
- 模型权重：论文中未提及任何模型权重的托管平台链接（如HuggingFace、ModelScope）。
- 数据集：论文中未提供具体的数据集下载链接。训练与评估使用的数据集信息如下：
    *   训练集：LibriTTS-R（585小时），Emilia-YODAS（1800小时子集）。这些是公开数据集，可通过其官方渠道获取。
    *   评估集：LibriTTS测试集、Expresso、AISHELL-3、CML-TTS、VCTK、Seed-TTS-eval、VoxCeleb-1。这些也是公开数据集。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文在附录A（Appendix A）中提供了详细的训练超参数（Training Hyperparameters），包括模型架构尺寸、训练步数、优化器设置、学习率等具体配置信息。但未提及提供预训练检查点（Checkpoints）。
- 论文中引用的开源项目：论文中明确提及的第三方开源项目/工具如下（论文正文未提供所有项目的具体链接，故仅列出名称及论文中提到的关联）：
    *   WavLM：自监督学习模型，用于生成语义特征（`WavLM-large`）。
    *   HuBERT：自监督学习模型，用于语义编码。
    *   wav2vec2：自监督学习模型，用于语义编码。
    *   Vocos：声码器（Vocoder），用于将梅尔频谱图转换为波形。
    *   pyroomacoustics：用于模拟房间脉冲响应（RIR）以生成混响。
    *   AudioSet：用于添加背景噪声的数据集。
    *   FSD50K：用于添加背景噪声的数据集。
    *   WHAM!：用于添加背景噪声的数据集。
    *   TitaNet (`TitaNet-large`)：自监督说话人识别模型，用于全局编码器条件化。
    *   ReDimNet-M：说话人验证模型，用于评估。
    *   Parakeet (`parakeet-tdt-0.6B-v2`)：语音识别模型，用于评估WER/CER。
    *   UTMOS：语音质量评估指标。
    *   Torchaudio-Squim：提供SI-SDR等评估指标的工具包。
    *   AdamW：优化器。
    *   LLaMA：提到的Transformer架构风格。

### 🏗️ 方法概述和架构

CleanCodec的整体架构如图2所示，它由四个主要组件构成：局部编码器、全局编码器、语义-声学双解码器以及独立的Vocos声码器。该系统首先将输入的音频波形转换为对数梅尔谱图，然后通过编解码器处理，最终将重建的梅尔谱图再转换回波形。这种以梅尔谱图为中心的设计避免了依赖SSL特征作为输入可能导致的非语言信息丢失，同时梅尔谱图更接近人类对音频的感知。

1. 局部编码器： 采用全卷积的1D ConvNeXt架构。输入梅尔谱图经过编码器处理后，进一步进行5倍下采样以达到目标令牌率（例如12.5 t/s）。然后，使用有限标量量化（FSQ）对编码器输出进行量化。FSQ是单码book、无参数的，避免了传统VQ中可能出现的码本塌缩问题。论文中使用的代码本级别为`[8, 8, 8, 8, 8]`，总共产生`8^5 = 32768`个可能的离散码。局部编码器负责捕获时间上变化的语言和声学内容信息。

2. 全局编码器： 受Kanade启发，使用改进的ConvNeXt块（源自NeXt-TDNN）。它处理整个语音片段，并通过注意力统计池化（attentive statistics pooling）生成一个固定长度的全局嵌入向量（维度为256）。这个全局嵌入旨在捕获说话人身份等时不变特征。该全局嵌入在解码阶段会与离散的音频令牌拼接。

3. 语义-声学双解码器： 接收融合了全局嵌入的音频令牌序列后，首先进行上采样以恢复原始梅尔谱图的时间分辨率（62.5 Hz）。然后，计算路径分为两个分支：
    *   声学解码器： 重建原始的对数梅尔谱图。
    *   语义解码器： 重建由预训练的WavLM-large模型提取的自监督学习（SSL）特征。
    这种双解码器设计确保离散令牌表示同时包含声学和语义信息，从而实现高质量的重建。两个解码器均采用与编码器类似的1D ConvNeXt块构建。

4. 声码器： 采用基于Vocos的架构，将声学解码器重建的梅尔谱图转换回音频波形。为了提升重建质量，论文作者训练了一个比原始Vocos更深更宽的自定义Vocos模型。

训练框架与策略：
训练采用独特的两阶段策略以解决对抗训练不稳定的问题。
*   第一阶段： 独立训练自编码器和声码器。关键的是，受瓶颈约束的自编码器此阶段不使用对抗损失进行训练，避免了早期重建误差大导致的训练崩溃。
*   第二阶段： 在两者分别收敛后，将它们连接起来进行端到端的联合微调。这极大地提升了训练稳定性。

核心的感知引导训练通过三个关键组件实现：
*   语音增强训练： 在训练时，对干净语音施加一系列概率为50%的退化处理：1）使用pyroomacoustics模拟混响；2）从AudioSet、FSD50K、WHAM!中随机采样背景噪声并以15-30dB的SNR加入；3）应用2-8kHz的低通滤波；4）重采样至16或22.05kHz再重采样回24kHz；5）应用比特率32-245kbps的MP3压缩。模型被监督去重建原始的干净语音，从而学习忽略这些非重要的退化信息。
*   全局条件化： 使用预训练的TitaNet-large说话人验证模型对全局编码器进行条件化。具体方法是在全局嵌入上应用一个可学习的线性投影，投影到TitaNet的嵌入空间，并训练编码器最大化其输出与TitaNet嵌入的余弦相似度。这提供了更强的梯度信号，帮助全局编码器更好地保留说话人音色。
*   训练损失： 自编码器部分包含三个损失：1）声学解码器输出与原始梅尔谱图之间的L2损失 `\(\mathcal{L}_{\text{mel}}\)`；2）语义解码器输出与WavLM特征之间的余弦损失 `\(\mathcal{L}_{\text{ssl}} = 1 - \cos(s, \hat{s})\)`；3）全局编码器投影输出与TitaNet嵌入之间的余弦损失 `\(\mathcal{L}_{\text{emb}} = 1 - \cos(g, p(\hat{g}))\)`。声码器的损失则沿用Vocos的多周期、多频带判别器的对抗训练配方。

![图1](data:image/svg+xml;base64,PHN2ZyBpZD0iUzAuRjEuMS4xLnBpYzEiIGNsYXNzPSJsdHhfcGljdHVyZSBsdHhfY2VudGVyaW5nIiBoZWlnaHQ9IjI2MC4yMSIgb3ZlcmZsb3c9InZpc2libGUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI5MS45NiAyNjAuMjEiIHdpZHRoPSIyOTEuOTYiPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwMDAwMDstLWx0eC1maWxsLWNvbG9yOiMwMDAwMDA7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI2MC4yMSkgbWF0cml4KDEgMCAwIC0xIDAgMCkgdHJhbnNsYXRlKDM4Ljk5LDApIHRyYW5zbGF0ZSgwLDQxLjc2KSBtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIC0zOC45OSAtNDEuNzYpIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC40cHQiPjxnIGNsYXNzPSJsdHhfbmVzdGVkc3ZnIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgMCkgdHJhbnNsYXRlKC0xNDEuNzcsMCkgdHJhbnNsYXRlKDAsNDEuNzYpIj48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiNFQ0VDRUM7LS1sdHgtZmlsbC1jb2xvcjojQkZCRkJGOy0tbHR4LWZnLWNvbG9yOiNCRkJGQkY7IiBmaWxsPSIjQkZCRkJGIiBzdHJva2U9IiNFQ0VDRUMiIHN0cm9rZS13aWR0aD0iMC40cHQiIGNvbG9yPSIjQkZCRkJGIj48cGF0aCBzdHlsZT0iZmlsbDpub25lIiBkPSJNIDE4MC43NiAwIEwgMTgwLjc2IDIwOS4zOSBNIDIzNS4xOCAwIEwgMjM1LjE4IDIwOS4zOSBNIDMwNy4xMSAwIEwgMzA3LjExIDIwOS4zOSBNIDM2MS41MiAwIEwgMzYxLjUyIDIwOS4zOSBNIDQxNS45NCAwIEwgNDE1Ljk0IDIwOS4zOSI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiNFQ0VDRUM7LS1sdHgtZmlsbC1jb2xvcjojQkZCRkJGOy0tbHR4LWZnLWNvbG9yOiNCRkJGQkY7IiBmaWxsPSIjQkZCRkJGIiBzdHJva2U9IiNFQ0VDRUMiIHN0cm9rZS13aWR0aD0iMC40cHQiIGNvbG9yPSIjQkZCRkJGIj48cGF0aCBzdHlsZT0iZmlsbDpub25lIiBkPSJNIDE4MC43NiA0MS44OCBMIDQzMy40NiA0MS44OCBNIDE4MC43NiA5Ny43MSBMIDQzMy40NiA5Ny43MSBNIDE4MC43NiAxNTMuNTUgTCA0MzMuNDYgMTUzLjU1IE0gMTgwLjc2IDIwOS4zOSBMIDQzMy40NiAyMDkuMzkiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojODA4MDgwOy0tbHR4LWZpbGwtY29sb3I6IzgwODA4MDstLWx0eC1mZy1jb2xvcjojODA4MDgwOyIgc3Ryb2tlLXdpZHRoPSIwLjJwdCIgZmlsbD0iIzgwODA4MCIgc3Ryb2tlPSIjODA4MDgwIiBjb2xvcj0iIzgwODA4MCI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSAxODAuNzYgMCBMIDE4MC43NiA1LjkxIE0gMjM1LjE4IDAgTCAyMzUuMTggNS45MSBNIDMwNy4xMSAwIEwgMzA3LjExIDUuOTEgTSAzNjEuNTIgMCBMIDM2MS41MiA1LjkxIE0gNDE1Ljk0IDAgTCA0MTUuOTQgNS45MSBNIDE4MC43NiAyMDkuMzkgTCAxODAuNzYgMjAzLjQ4IE0gMjM1LjE4IDIwOS4zOSBMIDIzNS4xOCAyMDMuNDggTSAzMDcuMTEgMjA5LjM5IEwgMzA3LjExIDIwMy40OCBNIDM2MS41MiAyMDkuMzkgTCAzNjEuNTIgMjAzLjQ4IE0gNDE1Ljk0IDIwOS4zOSBMIDQxNS45NCAyMDMuNDgiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojODA4MDgwOy0tbHR4LWZpbGwtY29sb3I6IzgwODA4MDstLWx0eC1mZy1jb2xvcjojODA4MDgwOyIgc3Ryb2tlLXdpZHRoPSIwLjJwdCIgZmlsbD0iIzgwODA4MCIgc3Ryb2tlPSIjODA4MDgwIiBjb2xvcj0iIzgwODA4MCI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSAxODAuNzYgNDEuODggTCAxODYuNjcgNDEuODggTSAxODAuNzYgOTcuNzEgTCAxODYuNjcgOTcuNzEgTSAxODAuNzYgMTUzLjU1IEwgMTg2LjY3IDE1My41NSBNIDE4MC43NiAyMDkuMzkgTCAxODYuNjcgMjA5LjM5IE0gNDMzLjQ2IDQxLjg4IEwgNDI3LjU1IDQxLjg4IE0gNDMzLjQ2IDk3LjcxIEwgNDI3LjU1IDk3LjcxIE0gNDMzLjQ2IDE1My41NSBMIDQyNy41NSAxNTMuNTUgTSA0MzMuNDYgMjA5LjM5IEwgNDI3LjU1IDIwOS4zOSI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNHB0Ij48cGF0aCBzdHlsZT0iZmlsbDpub25lIiBkPSJNIDE4MC43NiAwIEwgMTgwLjc2IDIwOS4zOSBMIDQzMy40NiAyMDkuMzkgTCA0MzMuNDYgMCBMIDE4MC43NiAwIFoiPjwvcGF0aD48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDE3My44NCAtMTMuODEpIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mby13aWR0aDoxZW07LS1sdHgtZm8taGVpZ2h0OjAuNjRlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iMTMuODQiIGhlaWdodD0iOC45MiIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA4LjkyKSIgb3ZlcmZsb3c9InZpc2libGUiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzAuRjEuMS4xLnBpYzEuNi42LjYuNi42LjEuMSIgY2xhc3M9Imx0eF90ZXh0Ij4xMDwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAyMjguMjYgLTEzLjgxKSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZm8td2lkdGg6MWVtOy0tbHR4LWZvLWhlaWdodDowLjY0ZW07LS1sdHgtZm8tZGVwdGg6MGVtOyIgd2lkdGg9IjEzLjg0IiBoZWlnaHQ9IjguOTIiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOC45MikiIG92ZXJmbG93PSJ2aXNpYmxlIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMwLkYxLjEuMS5waWMxLjcuNy43LjcuNy4xLjEiIGNsYXNzPSJsdHhfdGV4dCI+MjA8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwMDAwMDstLWx0eC1maWxsLWNvbG9yOiMwMDAwMDA7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMzAwLjE5IC0xMy44MSkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZvLXdpZHRoOjFlbTstLWx0eC1mby1oZWlnaHQ6MC42NGVtOy0tbHR4LWZvLWRlcHRoOjBlbTsiIHdpZHRoPSIxMy44NCIgaGVpZ2h0PSI4LjkyIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDguOTIpIiBvdmVyZmxvdz0idmlzaWJsZSI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMC5GMS4xLjEucGljMS44LjguOC44LjguMS4xIiBjbGFzcz0ibHR4X3RleHQiPjUwPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDM1MS4xNSAtMTMuODEpIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mby13aWR0aDoxLjVlbTstLWx0eC1mby1oZWlnaHQ6MC42NGVtOy0tbHR4LWZvLWRlcHRoOjBlbTsiIHdpZHRoPSIyMC43NiIgaGVpZ2h0PSI4LjkyIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDguOTIpIiBvdmVyZmxvdz0idmlzaWJsZSI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMC5GMS4xLjEucGljMS45LjkuOS45LjkuMS4xIiBjbGFzcz0ibHR4X3RleHQiPjEwMDwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCA0MDUuNTYgLTEzLjgxKSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZm8td2lkdGg6MS41ZW07LS1sdHgtZm8taGVpZ2h0OjAuNjRlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iMjAuNzYiIGhlaWdodD0iOC45MiIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA4LjkyKSIgb3ZlcmZsb3c9InZpc2libGUiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzAuRjEuMS4xLnBpYzEuMTAuMTAuMTAuMTAuMTAuMS4xIiBjbGFzcz0ibHR4X3RleHQiPjIwMDwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAxNTUuODkgMzcuNDIpIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mby13aWR0aDoxLjQ0ZW07LS1sdHgtZm8taGVpZ2h0OjAuNjRlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iMTkuOTkiIGhlaWdodD0iOC45MiIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA4LjkyKSIgb3ZlcmZsb3c9InZpc2libGUiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48bWF0aCBpZD0iUzAuRjEuMS4xLnBpYzEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLm0xIiBjbGFzcz0ibHR4X01hdGgiIGFsdHRleHQ9IjAuNCIgZGlzcGxheT0iaW5saW5lIiBpbnRlbnQ9IjpsaXRlcmFsIj48c2VtYW50aWNzPjxtbj4wLjQ8L21uPjxhbm5vdGF0aW9uIGVuY29kaW5nPSJhcHBsaWNhdGlvbi94LXRleCI+MC40PC9hbm5vdGF0aW9uPjwvc2VtYW50aWNzPjwvbWF0aD48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAxNTUuODkgOTMuMjYpIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mby13aWR0aDoxLjQ0ZW07LS1sdHgtZm8taGVpZ2h0OjAuNjRlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iMTkuOTkiIGhlaWdodD0iOC45MiIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA4LjkyKSIgb3ZlcmZsb3c9InZpc2libGUiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48bWF0aCBpZD0iUzAuRjEuMS4xLnBpYzEuMi4yLjIuMi4yLjIuMi4yLjIuMi4yLjIuMi4yLjIuMi4yLjIuMi4yLjIuMi4yLjIuMi4yLjEuMS4xLjEuMS4xLjEuMS4xLm0xIiBjbGFzcz0ibHR4X01hdGgiIGFsdHRleHQ9IjAuNiIgZGlzcGxheT0iaW5saW5lIiBpbnRlbnQ9IjpsaXRlcmFsIj48c2VtYW50aWNzPjxtbj4wLjY8L21uPjxhbm5vdGF0aW9uIGVuY29kaW5nPSJhcHBsaWNhdGlvbi94LXRleCI+MC42PC9hbm5vdGF0aW9uPjwvc2VtYW50aWNzPjwvbWF0aD48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAxNTUuODkgMTQ5LjA5KSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZm8td2lkdGg6MS40NGVtOy0tbHR4LWZvLWhlaWdodDowLjY0ZW07LS1sdHgtZm8tZGVwdGg6MGVtOyIgd2lkdGg9IjE5Ljk5IiBoZWlnaHQ9IjguOTIiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOC45MikiIG92ZXJmbG93PSJ2aXNpYmxlIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PG1hdGggaWQ9IlMwLkYxLjEuMS5waWMxLjMuMy4zLjMuMy4zLjMuMy4zLjMuMy4zLjMuMy4zLjMuMy4zLjMuMy4zLjMuMy4zLjMuMy4xLjEuMS4xLjEuMS4xLjEuMS5tMSIgY2xhc3M9Imx0eF9NYXRoIiBhbHR0ZXh0PSIwLjgiIGRpc3BsYXk9ImlubGluZSIgaW50ZW50PSI6bGl0ZXJhbCI+PHNlbWFudGljcz48bW4+MC44PC9tbj48YW5ub3RhdGlvbiBlbmNvZGluZz0iYXBwbGljYXRpb24veC10ZXgiPjAuODwvYW5ub3RhdGlvbj48L3NlbWFudGljcz48L21hdGg+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwMDAwMDstLWx0eC1maWxsLWNvbG9yOiMwMDAwMDA7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMTY4Ljk2IDIwNC45MykiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZvLXdpZHRoOjAuNWVtOy0tbHR4LWZvLWhlaWdodDowLjY0ZW07LS1sdHgtZm8tZGVwdGg6MGVtOyIgd2lkdGg9IjYuOTIiIGhlaWdodD0iOC45MiIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA4LjkyKSIgb3ZlcmZsb3c9InZpc2libGUiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48bWF0aCBpZD0iUzAuRjEuMS4xLnBpYzEuNC40LjQuNC40LjQuNC40LjQuNC40LjQuNC40LjQuNC40LjQuNC40LjQuNC40LjQuNC40LjEuMS4xLjEuMS4xLjEuMS4xLm0xIiBjbGFzcz0ibHR4X01hdGgiIGFsdHRleHQ9IjEiIGRpc3BsYXk9ImlubGluZSIgaW50ZW50PSI6bGl0ZXJhbCI+PHNlbWFudGljcz48bW4+MTwvbW4+PGFubm90YXRpb24gZW5jb2Rpbmc9ImFwcGxpY2F0aW9uL3gtdGV4Ij4xPC9hbm5vdGF0aW9uPjwvc2VtYW50aWNzPjwvbWF0aD48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMUY3N0I0Oy0tbHR4LWZpbGwtY29sb3I6IzFGNzdCNDstLWx0eC1mZy1jb2xvcjojMUY3N0I0OyIgc3Ryb2tlPSIjMUY3N0I0IiBmaWxsPSIjMUY3N0I0IiBzdHJva2Utd2lkdGg9IjEuNnB0IiBjb2xvcj0iIzFGNzdCNCI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSAxOTguMjggMTY5LjE5IEwgMjcwLjIxIDE3Ni43MiBMIDMyNC42MyAxODAuMzUiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMUY3N0I0Oy0tbHR4LWZpbGwtY29sb3I6IzFGNzdCNDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAyMzYuODYgMTg2LjM2KSIgZmlsbD0iIzFGNzdCNCIgc3Ryb2tlPSIjMUY3N0I0Ij48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6IzFGNzdCNDstLWx0eC1mby13aWR0aDo1LjE4ZW07LS1sdHgtZm8taGVpZ2h0OjAuNmVtOy0tbHR4LWZvLWRlcHRoOjBlbTsiIHdpZHRoPSI4Mi40NCIgaGVpZ2h0PSI5LjYxIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDkuNjEpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiMxRjc3QjQiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzAuRjEuMS4xLnBpYzEuMTEuMTEuMTEuMTEuMTEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+Q2xlYW5Db2RlYzwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojRkY3RjBFOy0tbHR4LWZpbGwtY29sb3I6I0ZGN0YwRTstLWx0eC1mZy1jb2xvcjojRkY3RjBFOyIgc3Ryb2tlPSIjRkY3RjBFIiBmaWxsPSIjRkY3RjBFIiBzdHJva2Utd2lkdGg9IjEuNnB0IiBjb2xvcj0iI0ZGN0YwRSI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSAzMDcuMTEgMTUuOTEgTCAzNjEuNTIgMTMwLjY2IEwgNDE1Ljk0IDE4Mi4wMyI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiNGRjdGMEU7LS1sdHgtZmlsbC1jb2xvcjojRkY3RjBFOyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDM2OS45MiAxODkuMDUpIiBmaWxsPSIjRkY3RjBFIiBzdHJva2U9IiNGRjdGMEUiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojRkY3RjBFOy0tbHR4LWZvLXdpZHRoOjNlbTstLWx0eC1mby1oZWlnaHQ6MC42OGVtOy0tbHR4LWZvLWRlcHRoOjAuMTllbTsiIHdpZHRoPSI0MS41MSIgaGVpZ2h0PSIxMi4xNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA5LjQ2KSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjRkY3RjBFIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMwLkYxLjEuMS5waWMxLjEyLjEyLjEyLjEyLjEyLjEuMSIgY2xhc3M9Imx0eF90ZXh0Ij5Rd2VuMzwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMkNBMDJDOy0tbHR4LWZpbGwtY29sb3I6IzJDQTAyQzsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAzMjQuNzMgMTM2LjExKSIgZmlsbD0iIzJDQTAyQyIgc3Ryb2tlPSIjMkNBMDJDIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6IzJDQTAyQzstLWx0eC1mby13aWR0aDoyLjMxZW07LS1sdHgtZm8taGVpZ2h0OjAuNjhlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iMzEuOSIgaGVpZ2h0PSI5LjQ2IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDkuNDYpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiMyQ0EwMkMiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzAuRjEuMS4xLnBpYzEuMTMuMTMuMTMuMTMuMTMuMS4xIiBjbGFzcz0ibHR4X3RleHQiPk1pbWk8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6I0Q2MjcyODstLWx0eC1maWxsLWNvbG9yOiNENjI3Mjg7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMjUxLjI5IDE1Mi44NikiIGZpbGw9IiNENjI3MjgiIHN0cm9rZT0iI0Q2MjcyOCI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNENjI3Mjg7LS1sdHgtZm8td2lkdGg6My42NWVtOy0tbHR4LWZvLWhlaWdodDowLjY5ZW07LS1sdHgtZm8tZGVwdGg6MGVtOyIgd2lkdGg9IjUwLjU0IiBoZWlnaHQ9IjkuNjEiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOS42MSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iI0Q2MjcyOCI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMC5GMS4xLjEucGljMS4xNC4xNC4xNC4xNC4xNC4xLjEiIGNsYXNzPSJsdHhfdGV4dCI+QmlDb2RlYzwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojOTQ2N0JEOy0tbHR4LWZpbGwtY29sb3I6Izk0NjdCRDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAyNDguMDMgMTMwLjY4KSIgZmlsbD0iIzk0NjdCRCIgc3Ryb2tlPSIjOTQ2N0JEIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6Izk0NjdCRDstLWx0eC1mby13aWR0aDozLjg5ZW07LS1sdHgtZm8taGVpZ2h0OjAuNjllbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iNTMuODEiIGhlaWdodD0iOS42MSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA5LjYxKSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjOTQ2N0JEIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMwLkYxLjEuMS5waWMxLjE1LjE1LjE1LjE1LjE1LjEuMSIgY2xhc3M9Imx0eF90ZXh0Ij5YQ29kZWMyPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiM4QzU2NEI7LS1sdHgtZmlsbC1jb2xvcjojOEM1NjRCOyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDI0Ny4xIDg4LjgpIiBmaWxsPSIjOEM1NjRCIiBzdHJva2U9IiM4QzU2NEIiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojOEM1NjRCOy0tbHR4LWZvLXdpZHRoOjYuMjhlbTstLWx0eC1mby1oZWlnaHQ6MC42OWVtOy0tbHR4LWZvLWRlcHRoOjBlbTsiIHdpZHRoPSI4Ni45IiBoZWlnaHQ9IjkuNjEiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOS42MSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzhDNTY0QiI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMC5GMS4xLjEucGljMS4xNi4xNi4xNi4xNi4xNi4xLjEiIGNsYXNzPSJsdHhfdGV4dCI+V2F2VG9rZW5pemVyPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiNFMzc3QzI7LS1sdHgtZmlsbC1jb2xvcjojRTM3N0MyOyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDIwMy4xNyA1MS4wMykiIGZpbGw9IiNFMzc3QzIiIHN0cm9rZT0iI0UzNzdDMiI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNFMzc3QzI7LS1sdHgtZm8td2lkdGg6NC45NmVtOy0tbHR4LWZvLWhlaWdodDowLjY5ZW07LS1sdHgtZm8tZGVwdGg6MGVtOyIgd2lkdGg9IjY4LjYxIiBoZWlnaHQ9IjkuNjEiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOS42MSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iI0UzNzdDMiI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMC5GMS4xLjEucGljMS4xNy4xNy4xNy4xNy4xNy4xLjEiIGNsYXNzPSJsdHhfdGV4dCI+Rm9jYWxDb2RlYzwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojQkNCRDIyOy0tbHR4LWZpbGwtY29sb3I6I0JDQkQyMjsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAyMDMuMTcgMTA2Ljg3KSIgZmlsbD0iI0JDQkQyMiIgc3Ryb2tlPSIjQkNCRDIyIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6I0JDQkQyMjstLWx0eC1mby13aWR0aDozLjMzZW07LS1sdHgtZm8taGVpZ2h0OjAuNjllbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iNDYuMTIiIGhlaWdodD0iOS42MSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA5LjYxKSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjQkNCRDIyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMwLkYxLjEuMS5waWMxLjE4LjE4LjE4LjE4LjE4LjEuMSIgY2xhc3M9Imx0eF90ZXh0Ij5LYW5hZGU8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzFGNzdCNDstLWx0eC1maWxsLWNvbG9yOiMxRjc3QjQ7LS1sdHgtZmctY29sb3I6IzFGNzdCNDsiIHN0cm9rZT0iIzFGNzdCNCIgZmlsbD0iIzFGNzdCNCIgc3Ryb2tlLXdpZHRoPSIxLjZwdCIgY29sb3I9IiMxRjc3QjQiPjxwYXRoIGQ9Ik0gMTk4LjI4IDE3NC43MiBMIDIwMy4wNyAxNjYuNDIgTCAxOTMuNDkgMTY2LjQyIFoiPjwvcGF0aD48cGF0aCBkPSJNIDI3MC4yMSAxODIuMjYgTCAyNzUuMDEgMTczLjk2IEwgMjY1LjQyIDE3My45NiBaIj48L3BhdGg+PHBhdGggZD0iTSAzMjQuNjMgMTg1Ljg5IEwgMzI5LjQyIDE3Ny41OSBMIDMxOS44MyAxNzcuNTkgWiI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiNGRjdGMEU7LS1sdHgtZmlsbC1jb2xvcjojRkY3RjBFOy0tbHR4LWZnLWNvbG9yOiNGRjdGMEU7IiBzdHJva2U9IiNGRjdGMEUiIGZpbGw9IiNGRjdGMEUiIHN0cm9rZS13aWR0aD0iMS42cHQiIGNvbG9yPSIjRkY3RjBFIj48cGF0aCBkPSJNIDMxMC41NyAxNS45MSBDIDMxMC41NyAxNy44MiAzMDkuMDIgMTkuMzcgMzA3LjExIDE5LjM3IEMgMzA1LjIgMTkuMzcgMzAzLjY1IDE3LjgyIDMwMy42NSAxNS45MSBDIDMwMy42NSAxNCAzMDUuMiAxMi40NSAzMDcuMTEgMTIuNDUgQyAzMDkuMDIgMTIuNDUgMzEwLjU3IDE0IDMxMC41NyAxNS45MSBaIE0gMzA3LjExIDE1LjkxIj48L3BhdGg+PHBhdGggZD0iTSAzNjQuOTggMTMwLjY2IEMgMzY0Ljk4IDEzMi41NyAzNjMuNDQgMTM0LjEyIDM2MS41MiAxMzQuMTIgQyAzNTkuNjEgMTM0LjEyIDM1OC4wNyAxMzIuNTcgMzU4LjA3IDEzMC42NiBDIDM1OC4wNyAxMjguNzUgMzU5LjYxIDEyNy4yIDM2MS41MiAxMjcuMiBDIDM2My40NCAxMjcuMiAzNjQuOTggMTI4Ljc1IDM2NC45OCAxMzAuNjYgWiBNIDM2MS41MiAxMzAuNjYiPjwvcGF0aD48cGF0aCBkPSJNIDQxOS40IDE4Mi4wMyBDIDQxOS40IDE4My45NCA0MTcuODUgMTg1LjQ5IDQxNS45NCAxODUuNDkgQyA0MTQuMDMgMTg1LjQ5IDQxMi40OCAxODMuOTQgNDEyLjQ4IDE4Mi4wMyBDIDQxMi40OCAxODAuMTIgNDE0LjAzIDE3OC41NyA0MTUuOTQgMTc4LjU3IEMgNDE3Ljg1IDE3OC41NyA0MTkuNCAxODAuMTIgNDE5LjQgMTgyLjAzIFogTSA0MTUuOTQgMTgyLjAzIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzJDQTAyQzstLWx0eC1maWxsLWNvbG9yOiMyQ0EwMkM7LS1sdHgtZmctY29sb3I6IzJDQTAyQzsiIHN0cm9rZT0iIzJDQTAyQyIgZmlsbD0iIzJDQTAyQyIgY29sb3I9IiMyQ0EwMkMiPjxwYXRoIGQ9Ik0gMzY0Ljk4IDEzMC4zOCBDIDM2NC45OCAxMzIuMjkgMzYzLjQ0IDEzMy44NCAzNjEuNTIgMTMzLjg0IEMgMzU5LjYxIDEzMy44NCAzNTguMDcgMTMyLjI5IDM1OC4wNyAxMzAuMzggQyAzNTguMDcgMTI4LjQ3IDM1OS42MSAxMjYuOTIgMzYxLjUyIDEyNi45MiBDIDM2My40NCAxMjYuOTIgMzY0Ljk4IDEyOC40NyAzNjQuOTggMTMwLjM4IFogTSAzNjEuNTIgMTMwLjM4Ij48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6I0Q2MjcyODstLWx0eC1maWxsLWNvbG9yOiNENjI3Mjg7LS1sdHgtZmctY29sb3I6I0Q2MjcyODsiIHN0cm9rZT0iI0Q2MjcyOCIgZmlsbD0iI0Q2MjcyOCIgY29sb3I9IiNENjI3MjgiPjxwYXRoIGQ9Ik0gMzEwLjU3IDE0Ny4xMyBDIDMxMC41NyAxNDkuMDQgMzA5LjAyIDE1MC41OSAzMDcuMTEgMTUwLjU5IEMgMzA1LjIgMTUwLjU5IDMwMy42NSAxNDkuMDQgMzAzLjY1IDE0Ny4xMyBDIDMwMy42NSAxNDUuMjIgMzA1LjIgMTQzLjY3IDMwNy4xMSAxNDMuNjcgQyAzMDkuMDIgMTQzLjY3IDMxMC41NyAxNDUuMjIgMzEwLjU3IDE0Ny4xMyBaIE0gMzA3LjExIDE0Ny4xMyI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiM5NDY3QkQ7LS1sdHgtZmlsbC1jb2xvcjojOTQ2N0JEOy0tbHR4LWZnLWNvbG9yOiM5NDY3QkQ7IiBzdHJva2U9IiM5NDY3QkQiIGZpbGw9IiM5NDY3QkQiIGNvbG9yPSIjOTQ2N0JEIj48cGF0aCBkPSJNIDMxMC41NyAxNDQuNjIgQyAzMTAuNTcgMTQ2LjUzIDMwOS4wMiAxNDguMDggMzA3LjExIDE0OC4wOCBDIDMwNS4yIDE0OC4wOCAzMDMuNjUgMTQ2LjUzIDMwMy42NSAxNDQuNjIgQyAzMDMuNjUgMTQyLjcxIDMwNS4yIDE0MS4xNiAzMDcuMTEgMTQxLjE2IEMgMzA5LjAyIDE0MS4xNiAzMTAuNTcgMTQyLjcxIDMxMC41NyAxNDQuNjIgWiBNIDMwNy4xMSAxNDQuNjIiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojOEM1NjRCOy0tbHR4LWZpbGwtY29sb3I6IzhDNTY0QjstLWx0eC1mZy1jb2xvcjojOEM1NjRCOyIgc3Ryb2tlPSIjOEM1NjRCIiBmaWxsPSIjOEM1NjRCIiBjb2xvcj0iIzhDNTY0QiI+PHBhdGggZD0iTSAyOTMuMDUgMTA0LjQyIEMgMjkzLjA1IDEwNi4zMyAyOTEuNSAxMDcuODcgMjg5LjU5IDEwNy44NyBDIDI4Ny42OCAxMDcuODcgMjg2LjEzIDEwNi4zMyAyODYuMTMgMTA0LjQyIEMgMjg2LjEzIDEwMi41IDI4Ny42OCAxMDAuOTYgMjg5LjU5IDEwMC45NiBDIDI5MS41IDEwMC45NiAyOTMuMDUgMTAyLjUgMjkzLjA1IDEwNC40MiBaIE0gMjg5LjU5IDEwNC40MiI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiNFMzc3QzI7LS1sdHgtZmlsbC1jb2xvcjojRTM3N0MyOy0tbHR4LWZnLWNvbG9yOiNFMzc3QzI7IiBzdHJva2U9IiNFMzc3QzIiIGZpbGw9IiNFMzc3QzIiIGNvbG9yPSIjRTM3N0MyIj48cGF0aCBkPSJNIDIwMS43NCA1NSBDIDIwMS43NCA1Ni45MSAyMDAuMTkgNTguNDYgMTk4LjI4IDU4LjQ2IEMgMTk2LjM3IDU4LjQ2IDE5NC44MiA1Ni45MSAxOTQuODIgNTUgQyAxOTQuODIgNTMuMDkgMTk2LjM3IDUxLjU0IDE5OC4yOCA1MS41NCBDIDIwMC4xOSA1MS41NCAyMDEuNzQgNTMuMDkgMjAxLjc0IDU1IFogTSAxOTguMjggNTUiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojQkNCRDIyOy0tbHR4LWZpbGwtY29sb3I6I0JDQkQyMjstLWx0eC1mZy1jb2xvcjojQkNCRDIyOyIgc3Ryb2tlPSIjQkNCRDIyIiBmaWxsPSIjQkNCRDIyIiBjb2xvcj0iI0JDQkQyMiI+PHBhdGggZD0iTSAyMDEuNzQgMTExLjY3IEMgMjAxLjc0IDExMy41OCAyMDAuMTkgMTE1LjEzIDE5OC4yOCAxMTUuMTMgQyAxOTYuMzcgMTE1LjEzIDE5NC44MiAxMTMuNTggMTk0LjgyIDExMS42NyBDIDE5NC44MiAxMDkuNzYgMTk2LjM3IDEwOC4yMSAxOTguMjggMTA4LjIxIEMgMjAwLjE5IDEwOC4yMSAyMDEuNzQgMTA5Ljc2IDIwMS43NCAxMTEuNjcgWiBNIDE5OC4yOCAxMTEuNjciPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAyNTUuNjYgLTMzLjY4KSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZm8td2lkdGg6Ny40NmVtOy0tbHR4LWZvLWhlaWdodDowLjc1ZW07LS1sdHgtZm8tZGVwdGg6MC4yNWVtOyIgd2lkdGg9IjEwMy4yOCIgaGVpZ2h0PSIxMy44NCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMC4zOCkiIG92ZXJmbG93PSJ2aXNpYmxlIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMwLkYxLjEuMS5waWMxLjE5LjE5LjE5LjE5LjE5LjEuMSIgY2xhc3M9Imx0eF90ZXh0Ij5Ub2tlbiBSYXRlICh0L3MpPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wIDEuMCAtMS4wIDAuMCAxNTYuNzYgODAuODYpIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mby13aWR0aDozLjQ0ZW07LS1sdHgtZm8taGVpZ2h0OjAuNzVlbTstLWx0eC1mby1kZXB0aDowLjI1ZW07IiB3aWR0aD0iNDcuNjYiIGhlaWdodD0iMTMuODQiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTAuMzgpIiBvdmVyZmxvdz0idmlzaWJsZSI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMC5GMS4xLjEucGljMS41LjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNS41LjEuMS4xLjEuMS4xLjEuMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCI+U0lNICg8bWF0aCBpZD0iUzAuRjEuMS4xLnBpYzEuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNS4xLjEuMS4xLjEuMS4xLjEuMS4xLm0xIiBjbGFzcz0ibHR4X01hdGgiIGFsdHRleHQ9Ilx1cGFycm93IiBkaXNwbGF5PSJpbmxpbmUiIGludGVudD0iOmxpdGVyYWwiPjxzZW1hbnRpY3M+PG1vIHN0cmV0Y2h5PSJmYWxzZSI+4oaRPC9tbz48YW5ub3RhdGlvbiBlbmNvZGluZz0iYXBwbGljYXRpb24veC10ZXgiPlx1cGFycm93PC9hbm5vdGF0aW9uPjwvc2VtYW50aWNzPjwvbWF0aD4pPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=)


### 💡 核心创新点

1.  选择性信息瓶颈框架： 最核心的创新在于将音频标记化问题重新定义为“选择性信息瓶颈”。这突破了传统编解码器试图保留所有信号信息的范式，主张只编码感知上显著的信息。这一理念通过具体的联合训练框架得以实现。
2.  联合优化的训练目标： 提出了一种新颖的、将音频重建与语音增强任务耦合的训练框架。通过向训练数据注入受控的噪声和退化，并监督模型恢复干净信号，有效地引导模型学习忽略感知上不重要的信息，从而在有限的令牌预算下优先保留关键特征。
3.  基于说话人验证模型的全局条件化： 创新性地使用预训练的说话人验证模型（TitaNet）来条件化全局编码器。这比传统的SSL特征条件化更能针对性地保留和强化说话人音色信息，提升了分离效果。

### 📊 实验结果

主要重建性能 (表1)：
CleanCodec@12.5在极低的12.5 t/s令牌率下，于LibriTTS test-clean和test-other两个测试集上均取得了领先性能。在说话人相似度（SIM）和词错误率（WER）两项关键指标上，它显著优于同速率及更高速率的基线。例如，在test-clean上，CleanCodec@12.5的SIM为0.86，WER为2.7%，而同为12.5 t/s的Kanade和FocalCodec的SIM分别仅为0.65和0.45，WER分别为4.0%和8.3%。即使与令牌率更高的BiCodec (50 t/s)和XCodec2 (50 t/s)相比，CleanCodec@12.5也展现出竞争力甚至更优的结果。

| 模型 | 令牌率 (t/s) | WER (↓) | CER (↓) | SIM (↑) | UTMOS (↑) | SI-SDR (↑) | Mel L1 (↓) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GT | – | 0.0 | 0.0 | 1.00 | 4.20 | 26.49 | 0.00 |
| Token Rate ≥ 50 t/s | | | | | | | |
| Mimi | 100 | 3.5 | 1.9 | 0.72 | 3.86 | 17.48 | 0.56 |
| Qwen3 | 100 | 2.6 | 1.4 | 0.72 | 3.92 | 19.45 | 0.38 |
| BiCodec | 50 | 2.6 | 1.3 | 0.78 | 4.25 | 26.49 | 0.55 |
| XCodec2 | 50 | 2.6 | 1.5 | 0.77 | 4.20 | 23.51 | 0.39 |
| CleanCodec@62.5 | 62.5 | 1.3 | 0.6 | 0.90 | 4.23 | 22.94 | 0.29 |
| CleanCodec@31.25 | 31.25 | 1.7 | 0.9 | 0.88 | 4.27 | 22.02 | 0.33 |
| Token Rate < 50 t/s | | | | | | | |
| WavTokenizer | 40 | 9.0 | 5.0 | 0.62 | 3.81 | 19.98 | 0.46 |
| FocalCodec | 12.5 | 8.3 | 4.5 | 0.45 | 4.21 | 25.19 | 0.78 |
| Kanade | 12.5 | 4.0 | 2.1 | 0.65 | 4.22 | 23.60 | 0.57 |
| CleanCodec@12.5 | 12.5 | 2.7 | 1.4 | 0.86 | 4.32 | 21.96 | 0.44 |

域外鲁棒性 (表2)：
在Expresso（表现力）、AISHELL-3（多语言）、CML-TTS（野外）等域外数据集上，CleanCodec@12.5表现出强大的鲁棒性，其性能下降幅度远小于其他低令牌率基线。例如，在CML-TTS上，其WER为12.1%，而Kanade和FocalCodec分别高达42.1%和54.4%。

| 模型 | 令牌率 (t/s) | WER (↓) | CER (↓) | SIM (↑) | UTMOS (↑) | SI-SDR (↑) | Mel L1 (↓) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Expresso | | | | | | | |
| GT | – | 0.0 | 0.0 | 1.00 | 3.43 | 24.15 | 0.00 |
| WavTokenizer | 40 | 19.7 | 11.4 | 0.49 | 2.95 | 16.56 | 0.53 |
| FocalCodec | 12.5 | 21.0 | 11.3 | 0.34 | 3.75 | 22.53 | 0.89 |
| Kanade | 12.5 | 9.3 | 4.9 | 0.55 | 3.38 | 22.81 | 0.61 |
| CleanCodec@12.5 | 12.5 | 3.9 | 1.9 | 0.82 | 3.55 | 22.99 | 0.45 |
| AISHELL-3 | | | | | | | |
| GT | – | – | 0.0 | 1.00 | 2.68 | 21.78 | 0.00 |
| WavTokenizer | 40 | – | 6.1 | 0.50 | 2.45 | 18.90 | 0.52 |
| FocalCodec | 12.5 | – | 15.0 | 0.24 | 3.68 | 25.43 | 0.79 |
| Kanade | 12.5 | – | 7.5 | 0.47 | 3.18 | 24.45 | 0.58 |
| CleanCodec@12.5 | 12.5 | – | 1.5 | 0.84 | 3.04 | 22.41 | 0.39 |
| CML-TTS | | | | | | | |
| GT | – | 0.0 | 0.0 | 1.00 | 3.03 | 22.55 | 0.00 |
| WavTokenizer | 40 | 29.6 | 14.8 | 0.58 | 2.71 | 20.51 | 0.47 |
| FocalCodec | 12.5 | 54.4 | 29.9 | 0.35 | 3.58 | 24.94 | 0.75 |
| Kanade | 12.5 | 42.1 | 21.4 | 0.57 | 3.42 | 23.98 | 0.59 |
| CleanCodec@12.5 | 12.5 | 12.1 | 5.1 | 0.78 | 3.47 | 22.11 | 0.65 |

解耦有效性 (表3)：
在专门评估解耦能力的说话人验证（SV）和语音识别（ASR）任务上，CleanCodec系列模型取得了最好的性能，表明其能更有效地分离语言内容和说话人特征。

| 模型 | 令牌率 (t/s) | SV: ACC (↑) | SV: EER (↓) | ASR: WER (↓) | ASR: CER (↓) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BiCodec | 50 | 99.15 | 1.52 | 6.2 | 3.4 |
| Kanade | 12.5 | 96.82 | 3.38 | 8.1 | 4.0 |
| CleanCodec@62.5 | 62.5 | 99.99 | 0.23 | 4.7 | 2.6 |
| CleanCodec@31.25 | 31.25 | 99.98 | 0.22 | 4.8 | 2.7 |
| CleanCodec@12.5 | 12.5 | 99.92 | 0.58 | 5.6 | 3.0 |

下游语音转换 (表4)：
在VC任务中，CleanCodec@12.5取得了最高的说话人相似度（SIM=0.81），远超基线。不过，随着令牌率增加，其SIM和UTMOS有所下降，表明部分说话人信息也可能泄漏到局部令牌中。

| 模型 | 令牌率 (t/s) | SIM (↑) | UTMOS (↑) | WER (↓) | CER (↓) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BiCodec | 50 | 0.47 | 3.87 | 1.3 | 0.7 |
| Kanade | 12.5 | 0.52 | 4.21 | 2.2 | 1.1 |
| CleanCodec@62.5 | 62.5 | 0.70 | 3.93 | 0.8 | 0.3 |
| CleanCodec@31.25 | 31.25 | 0.76 | 3.95 | 0.9 | 0.4 |
| CleanCodec@12.5 | 12.5 | 0.81 | 4.09 | 1.4 | 0.7 |

下游文本到语音 (表5)：
在TTS任务中，CleanCodec@12.5在训练时间（1小时）和推理速度（RTF 0.170）上具有压倒性效率优势，同时实现了最佳的SIM（0.56）和WER（3.9%）。其训练和推理速度与令牌率成反比，凸显了低令牌率模型在效率上的巨大好处。

| 模型 | 令牌率 (t/s) | 训练时间 (↓) | RTF (RTFx) (↓,↑) | SIM (↑) | WER (↓) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen3 | 200 | 10:02 | 2.930 (0.3x) | 0.36 | 9.1 |
| Mimi | 100 | 05:11 | 1.452 (0.7x) | 0.34 | 10.8 |
| XCodec2 | 50 | 02:44 | 0.688 (1.5x) | 0.40 | 4.9 |
| BiCodec | 50 | 02:49 | 0.691 (1.4x) | 0.51 | 5.2 |
| WavTokenizer | 40 | 02:19 | 0.552 (1.8x) | 0.37 | 16.6 |
| FocalCodec | 12.5 | 00:58 | 0.172 (5.8x) | 0.31 | 12.2 |
| Kanade | 12.5 | 00:59 | 0.169 (5.9x) | 0.45 | 5.6 |
| CleanCodec | 12.5 | 01:00 | 0.170 (5.9x) | 0.56 | 3.9 |

消融研究 (表6)：
消融实验验证了每个关键组件的重要性：1）两阶段训练对于稳定性至关重要；2）移除SSL语义解码分支导致WER/CER急剧上升3倍；3）移除TitaNet全局条件化损害了SIM；4）不使用语音增强训练导致多数指标中度下降。

| 设计选择 | WER (↓) | CER (↓) | SIM (↑) | UTMOS (↑) | SI-SDR (↑) | Mel L1 (↓) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 基线 | 2.7 | 1.4 | 0.86 | 4.32 | 21.96 | 0.44 |
| 单阶段训练 | 4.1 | 2.2 | 0.80 | 4.01 | 18.58 | 0.57 |
| 用HuBERT进行SSL条件化 | 2.9 | 1.4 | 0.85 | 4.32 | 22.03 | 0.45 |
| 无SSL条件化 | 8.1 | 4.3 | 0.84 | 4.34 | 22.56 | 0.42 |
| 用WavLM进行全局条件化 | 2.9 | 1.5 | 0.77 | 4.32 | 21.55 | 0.44 |
| 无全局条件化 | 2.8 | 1.5 | 0.74 | 4.33 | 21.88 | 0.43 |
| 无去噪训练 | 3.4 | 1.7 | 0.82 | 4.24 | 20.55 | 0.41 |

### ⚖️ 评分理由

*   创新性 (1.5/2)：将音频标记化问题明确重构为“选择性信息瓶颈”，并设计出通过联合语音增强训练来实现这一目标的具体框架，思路清晰且有效。使用说话人验证模型进行全局条件化也是一个新颖的点。但核心思想（通过增强数据训练去噪模型）并非完全独创，其理论深度有进一步挖掘的空间。
*   技术严谨性 (1.3/1.5)：方法描述清晰，架构选择（FSQ、双解码器、两阶段训练）有理有据。消融实验验证了各组件有效性。然而，对“感知引导”的量化分析不足，模型选择性丢弃的“不可感知信息”边界如何界定？论文未提供理论分析或可视化证据。此外，实验中对基线模型（如Qwen3）在不同令牌率下性能波动巨大的现象缺乏讨论，可能影响对比的公平性。
*   实验充分性 (1.3/1.5)：在标准重建任务、多个域外数据集以及两个关键下游任务（VC， TTS）上进行了广泛评估，覆盖全面。提供了详尽的消融研究。主要缺陷在于：1）未提供模型在真实世界、未见过的复杂噪声环境下的测试结果；2）TTS实验仅使用了一个简单的decoder-only transformer作为声学模型，未与当前更复杂的TTS系统集成评估。
*   清晰度 (1.4/1.5)：论文写作流畅，结构清晰，图表（如图1、2）有效地辅助了理解。方法各部分（编码器、解码器、损失、训练策略）的描述逻辑性强。不足之处是部分公式符号（如 `\(\hat{g}\)`, `\(p(\cdot)\)`）的定义可以更醒目地呈现。
*   影响力 (1.3/1.5)：在语音编解码领域，提出一个能显著提升低令牌率下性能的实用框架，对推动语音大模型（如LLM-based TTS）的效率有积极意义。其“选择性编码”的理念可能启发相关工作。但影响范围目前主要限于语音领域，跨领域的通用性未探讨。
*   开源 (0.5/1.5)：论文明确承诺将发布训练和推理代码，这是重要的积极信号。然而，代码仓库链接未提供，也未提供任何预训练模型权重的下载地址。对于一个471M参数的大模型，缺失权重严重限制了社区的即时复现和直接应用。
*   可复现性 (1.0/1.5)：论文在附录中提供了详细的训练超参数和部分评估设置，为复现提供了基础。但完整的复现仍需依赖未公开的代码和预训练权重。训练依赖于特定规模的数据集（2400小时），对计算资源（1x A100一周）也有明确要求，这些因素构成了复现的门槛。
*   工程/实践价值 (1.4/1.5)：CleanCodec@12.5在极低令牌率下实现了高质量的重建和强大的下游任务性能，同时推理速度极快（总RTF 0.0045），这对于部署在资源受限的环境或需要实时处理的应用（如语音通信、实时TTS）具有很高的实用价值。其架构相对简洁（单码book），也便于集成。

### 🚨 局限与问题

除了作者提到的局限性（解耦效果随令牌率下降、计算预算可扩展性），本文还存在以下潜在问题值得深入探讨：
1.  “感知引导”的边界与脆弱性：模型的“选择性”高度依赖于训练时所使用的退化管道。如果部署环境的噪声类型（如突发性机械噪声、特定人声干扰）与训练集中的（稳态环境噪声、混响）差异很大，模型可能无法正确区分“重要”与“不重要”信息，导致过度丢弃或保留不该保留的内容。论文缺乏对此鲁棒边界的分析。
2.  全局编码器的信息泄漏风险：尽管使用了TitaNet进行条件化，但消融实验显示，移除全局条件化仅轻微影响SIM。结合VC实验中SIM随令牌率增加而下降的现象，这强烈暗示说话人信息并非完全被隔离在全局编码中，部分泄漏到了局部令牌里。这可能限制更精细的语音编辑（如独立修改音色和内容）。
3.  评估指标的单一性与潜在偏差：主要依赖WER（使用单一ASR模型Parakeet）和SIM（使用ReDimNet）进行评估。WER对语言模型能力敏感，SIM对说话人嵌入模型敏感。结果可能部分反映了评估模型本身的特性，而非纯粹的重建质量。缺乏如PESQ、POLQA等更全面的主观感知客观评估。
4.  基线选择的潜在不公平性：表1中，Qwen3-TTS-Tokenizer在50 t/s时性能急剧恶化（WER 7.9%），而100 t/s时性能正常（2.6%）。这种非单调行为异常，可能暗示该基线未被公平调优或配置。这可能会在对比中放大CleanCodec的优势。论文应对此现象进行解释或提供更合理的基线设置。
5.  下游任务评估的局限性：TTS评估仅基于一个简单的自回归声学模型。现代TTS系统（如基于扩散的、或更复杂的自回归模型）可能对令牌表征有不同的需求和敏感性。CleanCodec产生的令牌在这些更复杂系统中的实际效能尚未验证。

---

[← 返回 2026-06-04 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-04/)
