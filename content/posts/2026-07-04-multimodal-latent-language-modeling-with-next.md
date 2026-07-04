---
title: "Multimodal Latent Language Modeling with Next-Token Diffusion"
date: 2026-07-04
draft: false
tags: [语音合成, 多模态模型]
categories: [icml-2026]
description: "语音合成 | 6.1/10"
hiddenInHomeList: true
---

# 📄 Multimodal Latent Language Modeling with Next-Token Diffusion

#语音合成 #多模态模型

**6.1/10** | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 0/1.5 | 清晰 0.8/1 | 影响 1.2/1.5 | 开源 0.2/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.1/10** | 前50% | #语音合成 | #自回归模型 | #多模态模型 | [arxiv](https://openreview.net/forum?id=PnTXyTR2VG)


### 👥 作者与机构

- 第一作者: Yutao Sun (Tsinghua University)
- 通讯作者: Furu Wei (Microsoft Research), Jianyong Wang (Tsinghua University)
- 作者列表: Yutao Sun (Tsinghua University), Hangbo Bao (Microsoft Research), Wenhui Wang (Microsoft Research), Zhiliang Peng (Microsoft Research), Li Dong (Microsoft Research), Shaohan Huang (Microsoft Research), Yaoyao Chang (未说明), Jianyong Wang (Tsinghua University), Furu Wei (Microsoft Research)

### 💡 毒舌点评

本文在“一切皆为token”的统一多模态框架上迈出了扎实的一步，用next-token diffusion巧妙绕开了VQ-VAE的信息瓶颈，σ-VAE的方差约束设计也切中自回归生成的exposure bias要害。但ImageNet上的图像生成实验，LatentLM-L（479M, FID 2.24）实际上并未超越同体量的MAR（479M, FID 1.78），论文将其归入非因果类进行对比虽分类合理，但未能提供等计算量对比来证明因果框架自身能弥补这一差距；此外，仅在200B tokens上训练的1.3B多模态LLM远未达到收敛，声称的scaling优势仍需更大规模验证；TTS人类评估仅24人，略显单薄。

### 📌 核心摘要

本文提出Latent Language Modeling (LatentLM)，旨在用一个统一的因果Transformer架构同时处理离散数据（文本、代码）和连续数据（图像、音频、视频），以解决现有多模态模型中离散量化信息损失、扩散模型与LLM因果推理范式不兼容、训练-推理分布不匹配等核心矛盾。方法核心是将连续数据通过σ-VAE编码为连续潜在向量，然后引入next-token diffusion——一个轻量的扩散头作为语言模型的输出层，对每个连续token自回归地进行扩散去噪生成；离散token仍用标准next-token prediction。针对传统VAE在自回归生成中因方差崩塌导致训练-推理分布不匹配（exposure bias）的问题，提出了σ-VAE，通过强制固定潜在空间方差来提升对生成误差的鲁棒性，将分布外（OOD）问题转化为分布内问题。实验覆盖图像生成（ImageNet）、多模态LLM（理解+生成）和文本到语音合成（TTS），主要结果包括：

| 实验场景 | 对比模型 | LatentLM结果 | 对比模型结果 |
|---------|---------|-------------|------------| 
| ImageNet 256×256 (FID↓) | DiT-XL/2 (675M) | 2.24 (479M) | 2.27 (675M) |
| ImageNet 256×256 (FID↓) | MAR-L (479M) | 2.24 | 1.78 |
| ImageNet 256×256 (FID↓) | GIVT-Causal-L+A (1.67B) | 2.24 | 2.59 |
| MS-COCO T2I (FID↓) | Transfusion | 14.54 | 16.10 |
| MS-COCO Captioning (CIDEr↑) | Transfusion | 54.5 | 43.4 |
| VQAv2 (Acc↑) | Transfusion | 38.72 | 35.36 |
| LibriSpeech TTS (SIM↑, 15fps) | VALL-E 2 | 0.697 | 0.643 |

在TTS任务上，LatentLM以15fps的帧率（比VALL-E 2的75fps少5倍解码步数，若算总推理步骤则少10倍以上）超越了SOTA的说话人相似度。此外，在7.5fps帧率下仍优于VALL-E 2（SIM 0.656 vs 0.643）。实际意义在于提供了一个统一、高效且兼容KV cache的多模态生成框架，有望简化大规模多模态模型的训练和部署。主要局限性包括：与MAR等双向模型在图像生成质量上仍有差距，多模态LLM的训练规模不足以充分展示scaling潜力，且缺乏代码/模型开源承诺。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文中未提及。
- Demo：论文中未提及。
- 复现材料：论文在附录中提供了部分训练超参数与配置（如模型维度、层数、优化器设置等），但未提供可直接复现的完整训练脚本、检查点或配置文件的下载链接。
- 论文中引用的开源项目：
  - VQ-VAE (van den Oord et al., 2017) — 参考仓库 https://github.com/deepmind/sonnet 或 https://github.com/ritheshkumar95/pytorch-vqvae
  - DiT (Peebles & Xie, 2023) — https://github.com/facebookresearch/DiT
  - MAR (Li et al., 2024) — https://github.com/LTH14/mar
  - LlamaGen (Sun et al., 2024a) — https://github.com/FoundationVision/LlamaGen
  - VALL-E 2 (Chen et al., 2024) — 论文未公开代码和权重
  - Transfusion (Zhou et al., 2024) — 论文未公开代码
  - U-ViT (Bao et al., 2023a) — https://github.com/baofff/U-ViT
  - MaskGIT (Chang et al., 2022) — https://github.com/google-research/maskgit
  - GIVT (Tschannen et al., 2023) — 论文未公开代码
  - Voicebox (Le et al., 2023) — 未公开代码
  - MELLE (Meng et al., 2024) — 论文未公开代码
  - DAC (Kumar et al., 2023) — https://github.com/descriptinc/descript-audio-codec
  - WavTokenizer (Ji et al., 2024) — https://github.com/jishengpeng/WavTokenizer
  - Mimi (Défossez et al., 2024) — https://github.com/kyutai-labs/moshi
  - DPM-Solver (Lu et al., 2022a;b) — https://github.com/LuChengTHU/dpm-solver
  - LLaMA (Touvron et al., 2023) — https://github.com/facebookresearch/llama
  - HiFi-GAN (Kong et al., 2020) — https://github.com/jik876/hifi-gan

注：以上链接为对应第三方项目的常见公开仓库，论文正文及参考文献中未直接提供这些项目的下载链接。

### 🏗️ 方法概述和架构

LatentLM整体是一个因果自回归框架，通过单个Transformer同时处理离散和连续两种模态的token序列，实现统一的感知（理解）和生成。

1. 输入表示与token化
对于离散数据（如文本），使用标准lookup table获得向量表示。对于连续数据（图像、音频等），使用变分自编码器（σ-VAE）将其压缩为连续潜在向量序列。这些向量作为“连续token”与离散token的embedding拼接，构成输入序列 \(X_0 \in \mathbb{R}^{N \times d}\)，其中 \(N\) 是序列长度，\(d\) 是隐藏维度。输入序列被打包后送入一个标准的因果Transformer（基于LLaMA架构增强，使用因果注意力掩码）。


2. 骨干网络：因果Transformer
Transformer有 \(L\) 层，每层包含多头自注意力和前馈网络，使用RMSNorm归一化和SwiGLU激活。因果掩码确保每个位置的预测只能依赖之前的历史token。输入 \(X_0\) 经 \(L\) 层解码后得到输出 \(X_L\)，再经RMSNorm得到隐状态序列 \([h_1, ..., h_N]\)，这些隐状态将用于解码下一个token。

3. Next-Token Diffusion：连续token的生成
这是LatentLM的核心技术创新。对于连续token，不是直接回归一个确定性的向量，而是使用一个轻量级的扩散模型作为“生成头”。具体流程：
- 条件输入：扩散头的输入是当前位置的Transformer隐状态 \(h_i\)，作为扩散去噪过程的条件。
- 扩散过程：采用DDPM框架（也可替换为flow matching）。在训练时，对ground-truth潜在向量 \(x_i\) 按公式 \(x_i^t = \sqrt{\bar{\alpha}_t} x_i + \sqrt{1-\bar{\alpha}_t} \epsilon\) 加噪得到 \(x_i^t\)，扩散头 \(\epsilon_\theta(x_i^t, t, h_i)\) 学习预测所加的噪声 \(\epsilon\)。损失函数为标准的噪声预测MSE：\(\mathcal{L}_{\text{Diff}} = \mathbb{E}\left[\|\epsilon - \epsilon_\theta(x_i^t, t, h_i)\|^2\right]\)。
- 推理过程：给定纯噪声 \(x_i^T\)，扩散头在多步去噪中逐步生成干净的潜在向量 \(x_i^0\)。使用DPM-Solver加速采样，推理步数远少于训练步数。每生成一个连续token，其预测的干净向量用作下一步Transformer的输入。
- 头架构：扩散头是一个残差MLP网络，包含pre-RMSNorm和前馈层，使用AdaLN-Zero条件注入时间步 \(t\) 和隐状态 \(h_i\)。头只有几层（实验中使用3-6层），相比于整个Transformer参数量极小。

【图像补充】 从图1可以清晰看到扩散头的内部结构：它接收Transformer隐状态 \(h_i\) 和扩散时间步 \(t\) 作为输入，通过AdaLN-Zero模块（包含自适应层归一化和时间步嵌入）进行条件注入，然后经过多层残差MLP网络输出预测的噪声 \(\epsilon_\theta\)。这个设计使得扩散头非常轻量，仅占整个模型参数的一小部分。文中Table 11显示，TTS场景下10步扩散头的推理延迟为22.76ms，相比LLM骨干的53.80ms开销完全可控。

4. Next-Token Prediction：离散token的生成
对于离散token，使用标准语言模型头：\(P_d(x_i|x_{<i}) = \text{softmax}(h_i W_v)\)，其中 \(W_v \in \mathbb{R}^{d \times |\mathcal{V}|}\) 是分类权重矩阵，\(|\mathcal{V}|\) 是词汇量大小。采样算法（如greedy decoding、top-p sampling）用于生成离散token。

5. 统一训练与推理
- 训练：总损失 \(\mathcal{L} = \mathcal{L}_{\text{LM}} + \alpha \cdot \mathcal{L}_{\text{Diff}}\)。\(\mathcal{L}_{\text{LM}}\) 是标准交叉熵损失（仅对离散token计算），\(\mathcal{L}_{\text{Diff}}\) 是扩散噪声预测损失（仅对连续token计算）。\(\alpha\) 是平衡超参数（实验中使用约5，因两者数值量级可比）。训练时每个forward pass对同一批连续token随机采样多个扩散timestep（通常4个），由于扩散头轻量，骨干Transformer的计算可以复用，提升了训练效率。
- 推理：自回归逐token生成。使用特殊token `<BOD>` 和 `<EOD>` 标记扩散头的启用和关闭。Transformer骨干仅需一次forward pass计算所有历史token的隐状态（利用KV cache），只有轻量的扩散头需要对当前连续token执行多步去噪（通常3-20步）。这确保了推理效率与标准LLM可比。

6. σ-VAE：方差约束的VAE
这是支撑整个框架的关键设计。标准VAE在潜在空间中的方差通常会崩塌（趋于极小值），成为准确定性自编码器。在自回归生成中，训练时模型看到的是从真实后验 \(\mathcal{N}(\mu, \sigma^2)\) 采样的向量，推理时看到的却是自己生成的、误差累积后的向量，两者分布存在严重不匹配（exposure bias）。方差越小，模型对输入扰动越敏感，不匹配问题越严重。论文指出当满足 \(\sigma < \sigma_{\text{gen}}\) 时，推理分布偏离训练分布支撑集，导致长序列生成质量急剧恶化。

σ-VAE的解决方案：
- 固定方差：\(z = \mu + |\sigma| \odot \epsilon\)，其中 \(\epsilon \sim \mathcal{N}(0,1)\)，而 \(\sigma\) 是一个标量，从 \(\mathcal{N}(0, C_\sigma)\) 采样获得（每个样本独立采样），或设定为固定值。
- 训练目标：最小化 \(||\hat{x} - x||^2 + \beta ||\mu||^2\)。第一项是重建误差，第二项是KL正则化的简化形式，控制 \(\mu\) 的尺度以符合先验。论文明确指出这与 \(\beta\)-VAE的动机和实现不同——\(\beta\)-VAE旨在学习解耦表示，而\(\sigma\)-VAE旨在固定方差以解决自回归生成中的方差崩塌问题。
- 效果：强制潜在空间保持一个较大的、可控的方差。实验中 \(C_\sigma = 0.75\) 或固定 \(\sigma = 0.75\) 效果最佳。关键洞察是令 \(\sigma < \sigma_{\text{gen}}\) 在大多数token上成立，从而将out-of-distribution问题转化为in-distribution问题，显著提升长序列生成的稳定性。附录B消融显示，Gaussian方差采样在1000k步时将FID从13.74进一步降至11.91。


【图像补充】 图2直观地展示了σ-VAE如何解决传统VAE与自回归生成结合时面临的“暴露偏差”问题。左图表明，标准VAE（方差小，\(\sigma^2\) 小）的潜在空间非常紧凑，当自回归模型生成时，误差会累积，导致生成样本偏离训练时的紧凑分布。右图展示了σ-VAE通过强制方差（\(\sigma^2\)）变大，使得潜在空间的分布更宽，从而将推理时的生成误差包裹在训练分布内部，使生成过程更稳定。

### 💡 核心创新点

1. Next-Token Diffusion：将扩散模型作为因果Transformer的逐token生成头，实现了连续数据的自回归扩散生成。之前的MAR使用扩散头但依赖双向注意力（不兼容因果LLM的KV cache，且论文明确指出MAR的因果基线效果不佳），GIVT使用高斯混合模型直接预测连续向量（表达力弱于扩散）。本工作在保持因果自回归范式的前提下引入了扩散的表达力，且扩散头轻量（3-6层MLP），推理效率高。在图13中，3.68B参数下LatentLM吞吐量是DiT的2.47倍。

![图2架构总览](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/PnTXyTR2VG-p3-ve763b4ab.jpg)

2. σ-VAE与方差崩塌的系统性解决：首次系统性地分析并解决了VAE在自回归生成中的方差崩塌问题。通过图5的对比（LatentLM使用MAR的VAE时FID=9.64，使用σ-VAE时FID=4.10），有力地证明大方差是因果连续自回归生成真正work的关键。论文还发现训练时使用Gaussian方差采样优于固定方差（附录B，1000k步FID: 11.91 vs 13.74），提供了进一步改进的路径。

3. 统一的因果多模态框架：用一个因果Transformer同时实现离散token预测和连续token扩散，无需切换注意力模式或训练目标范式。这与Transfusion（文本因果+图像双向扩散，需在文本和图像模式之间切换，且扩散训练时的噪声输入干扰理解任务）和离散token模型（VQ-VAE损失信息）形成鲜明对比。框架天然支持KV cache、无需噪声输入干扰理解任务、可端到端联合训练理解与生成。如附录A的表6所总结，在注意力模式、MLLM兼容性、KV cache支持和统一理解-生成训练四个维度上全部达标。

4. 高压缩比连续语音tokenization：将σ-VAE应用于语音，实现了高达6400倍的token压缩比（3.75fps帧率），同时重建质量（PESQ 0.852）优于或持平于DAC、EnCodec等离散codec。这大幅缩短了自回归序列长度，加速了TTS推理，使语音序列长度与BPE文本tokenization接近1:1。

### 📊 实验结果

图像生成（ImageNet 256×256，类别条件生成）

| 类型 | 模型 | 参数量 | Epochs | FID↓ | IS↑ |
|------|------|--------|--------|------|-----|
| 非因果-扩散 | DiT-XL/2 | 675M | 400 | 2.27 | 278.2 |
| 非因果-扩散 | U-ViT-H/2 | 501M | 400 | 2.29 | 263.9 |
| 非因果-掩码 | MaskGIT | 227M | 300 | 4.02 | 355.6 |
| 非因果-掩码 | MAR-L | 479M | 800 | 1.78 | 296.0 |
| 因果-离散 | VQGAN | 1.4B | 240 | 5.20 | 280.3 |
| 因果-离散 | ViT-VQGAN | 1.7B | 240 | 3.04 | 227.4 |
| 因果-离散 | LlamaGen-XL | 775M | 300 | 2.62 | 244.1 |
| 因果-连续 | GIVT-Causal-L+A | 1.67B | 500 | 2.59 | — |
| 因果-连续 | LatentLM-L (本文) | 479M | 400 | 2.24 | 253.8 |

LatentLM以479M参数超越了多数因果模型（包括1.67B的GIVT）和同参数量的DiT，但落后于MAR（双向注意力，800 epochs）。论文还将分辨率扩展到384×384（1.82B模型，100k步），FID-50K从3.19降至2.51，展示了高分辨率下的潜力。

模型规模扩展（ImageNet，75k步训练）

| 模型大小 | LatentLM FID↓ | DiT FID↓ |
|---------|--------------|---------|
| 455M | 优于DiT | — |
| 1.03B | 优于DiT | — |
| 1.82B | 优于DiT | — |
| 3.68B | 优于DiT | — |

论文Figure 4的scaling curve显示LatentLM在455M到3.68B的四个模型规模上，FID持续优于对等的DiT模型，差距随模型增大而保持。

σ-VAE方差分析（ImageNet FID↓，Figure 5）

| Tokenizer | DiT FID↓ | LatentLM FID↓ |
|-----------|---------|-------------|
| MAR-VAE (σ极小) | 8.16 | 9.64 |
| σ-VAE (σ=0.75) | 7.35 | 4.10 |

大方差tokenizer使LatentLM的FID从9.64降至4.10（提升135%），DiT仅从8.16降至7.35（提升11%），证明σ-VAE对自回归生成的关键作用远大于对扩散模型的作用。论文还发现，使用训练时采样latent作为输入、预测后验均值的策略在早期收敛更快，但完全收敛后不如直接采样latent作为目标，因为递归生成的分布偏移问题并未根本解决。

多模态LLM（200B tokens训练，1.3B参数）

| 任务 | 指标 | VQ-MLLM | Transfusion | LatentLM |
|------|------|---------|-------------|----------|
| 文本语言建模 | Valid PPL↓ | 2.79 | 2.74 | 2.73 |
| 文本→图像 | FID↓ | 16.92 | 16.10 | 14.54 |
| 文本→图像 | CLIP↑ | 29.33 | 28.66 | 28.75 |
| 图像→文本（Captioning） | CIDEr↑ | 37.4 | 43.4 | 54.5 |
| 图像→文本（VQA） | VQAv2 Acc↑ | 30.19 | 35.36 | 38.72 |

LatentLM各项均优于Transfusion和VQ-MLLM，尤其在Captioning上提升显著（+11.1 CIDEr）。Scaling curve（Figure 6a）显示，随训练token数增加，LatentLM的FID持续下降，而VQ-MLLM趋于饱和。语言benchmark（附录E，Table 8）也显示LatentLM在ARC-C、HellaSwag等6个基准上平均得分最高（54.76 vs Transfusion 53.77 vs Discrete Token 51.91）。

文本到语音合成（LibriSpeech test-clean，零样本TTS）

| 系统 | 帧率 | Ref Utterance SIM↑ | 3s Prefix SIM↑ | Ref WER-C↓ | 3s Prefix WER-C↓ |
|------|------|-------------------|---------------|------------|----------------|
| Ground Truth | - | 0.779 | 0.668 | 1.6 | 1.6 |
| VALL-E 2 | 75 | 0.643 | 0.504 | 1.5 | 1.6 |
| Voicebox | 100 | 0.662 | 0.593 | - | - |
| MELLE | 62 | 0.625 | 0.508 | 1.5 | 1.5 |
| LatentLM | 15 | 0.697 | 0.571 | 1.2 | 1.4 |
| LatentLM | 7.5 | 0.656 | 0.532 | 1.2 | 1.6 |
| LatentLM | 3.75 | 0.598 | 0.467 | 1.7 | 3.1 |

LatentLM在15fps帧率下（VALL-E 2为75fps，少5倍自回归步数），说话人相似度显著超越VALL-E 2（0.697 vs 0.643），且WER-C更低（1.2 vs 1.5）。在7.5fps下仍优于VALL-E 2（SIM 0.656）。LatentLM还消除了VALL-E 2中的非自回归（NAR）模型。

人类评估（TTS，Table 10）

| 模型 | Realism↑ | Richness↑ | Preference↑ | Average↑ | WER-W↓ | WER-N↓ | SIM-O↑ |
|------|----------|-----------|-------------|----------|--------|--------|---------|
| ElevenLabs v3 alpha | 3.34 | 3.48 | 3.38 | 3.40 | 2.39 | 2.47 | 0.623 |
| Gemini 2.5 Pro Preview TTS | 3.55 | 3.78 | 3.65 | 3.66 | 1.73 | 2.43 | — |
| LatentLM (本文) | 3.71 | 3.81 | 3.75 | 3.76 | 1.29 | 1.95 | 0.692 |

24人评估，LatentLM在各项主观指标上均优于商业TTS系统。

语音tokenizer重建质量（LibriTTS test-other）

| Tokenizer | \(N_q\) | 帧率 | 压缩比 | Mel Dist.↓ | PESQ↑ | STOI↑ | UTMOS↑ |
|-----------|------|------|--------|-----------|-------|-------|--------|
| DAC | 2 | 75 | 160 | 0.916 | 2.269 | 0.896 | 3.981 |
| WavTokenizer | 1 | 75 | 320 | 0.871 | 2.266 | 0.891 | 4.120 |
| Mimi | 8 | 12.5 | 240 | 0.987 | 3.217 | 0.946 | 4.332 |
| σ-VAE₃₂ | 1 | 15 | 1600 | 0.813 | 2.724 | 0.926 | 4.268 |
| σ-VAE₆₄ | 1 | 7.5 | 3200 | 0.798 | 2.756 | 0.929 | 4.289 |
| σ-VAE₁₂₈ | 1 | 3.75 | 6400 | 0.852 | 2.533 | 0.916 | 4.165 |

σ-VAE在远高于其他tokenizer的压缩比下仍保持有竞争力的重建质量，尤其在UTMOS指标上σ-VAE₃₂和σ-VAE₆₄（4.268/4.289）仅次于Mimi-8q（4.332）。更令人印象深刻的是，在压缩比高达6400倍时，PESQ（0.852）仍远优于压缩比仅160倍的DAC（2.269），揭示了连续表示在高压缩比下的巨大优势。

消融实验（TTS）
- CFG scale=4时获得最佳TTS性能（Figure 15a）
- 扩散头推理步数从1到5提升明显，5步后趋于饱和（Figure 15b）
- 固定方差σ=0.75配合Gaussian采样训练优于纯固定方差（FID: 11.91 vs 13.74, 1000k步tokenizer，Table 7）
- 增加latent维度可弥补高压缩比带来的损失（Table 9）：16维在1600×下SIM=0.545，扩展到32维SIM恢复至0.661

推理效率（Figure 13, 14）
- 3.68B参数、batch size 128下，LatentLM吞吐量是DiT的2.47倍
- 1.82B参数、batch size 256下，使用GQA的LatentLM吞吐量是DiT的2.84倍
- TTS推理延迟（Table 11）：10步扩散头22.76ms + LLM骨干53.80ms，实时因子（RTF）仅0.83

### 🔬 细节详述

- 训练数据：
  - 图像生成：ImageNet-1K训练集（~1.28M图片）
  - 多模态LLM：文本数据（Common Crawl, RefinedWeb, StarCoder）、图文对（LAION-2B, LAION-400M, COYO-700M, Conceptual Captions）、交错图文数据（Common Crawl网页），混合比例2:1:1
  - TTS：Libriheavy（50k小时，~7k说话人）
  - 语音tokenizer：DNS Challenge 4 clean speech, Common Voice v7, FSD50K, AudioSet, MUSDB, Jamendo（覆盖语音、音频、音乐）
- 损失函数：
  - 离散token：标准交叉熵损失 \(\mathcal{L}_{\text{LM}}\)
  - 连续token：扩散噪声预测MSE损失 \(\mathcal{L}_{\text{Diff}} = \mathbb{E}\left[\|\epsilon - \epsilon_\theta(x_i^t, t, h_i)\|^2\right]\)
  - 总损失：\(\mathcal{L} = \mathcal{L}_{\text{LM}} + \alpha \cdot \mathcal{L}_{\text{Diff}}\)，\(\alpha \approx 5\)
  - σ-VAE：重建MSE + \(\beta \|\mu\|^2\)（\(\beta\)控制先验对齐强度）；加上perceptual loss、GAN loss（遵循LDM/VAQGAN的训练惯例）
- 训练策略：
  - 图像生成：AdamW, \(\beta=(0.9,0.98)\), lr max=5e-4, cosine schedule, 100 warmup steps, batch size=2048, 250k步/400epochs
  - 多模态LLM：AdamW, \(\beta=(0.9,0.98)\), lr=3e-4, 500 warmup steps, batch size=4M tokens, seq len=4096, 50k步/200B tokens, total schedule 1T tokens
  - TTS：AdamW, \(\beta=(0.9,0.98)\), lr=7.5e-4, cosine schedule, 10k warmup steps, batch size=5M, 100k步
  - 图像tokenizer（σ-VAE）：172M参数（BEiT-3 base encoder初始化+随机初始化解码器），12层encoder+12层decoder，patch size=16，训练200 epochs，lr=3e-4, layer-wise lr decay=0.65
  - 训练时每个forward pass采样4个扩散timestep以复用Transformer计算
- 关键超参数：
  - 图像LatentLM-L：hidden=1024, layers=32, heads=16, FFN=2730（DiT为8d/≈4d以对齐参数量），扩散头6层
  - 多模态LLM：hidden=2048, layers=24, heads=16, FFN=6144（3×），扩散头6层，文本tokenizer为tiktoken-cl100k_base
  - TTS LatentLM：hidden=1024, layers=24, heads=16, FFN=4096（4×），扩散头3层（与VALL-E 2架构对齐）
  - σ-VAE：\(C_\sigma = 0.75\)（主实验），潜在维度32/64/128，patch size=16（图像）
  - 图像tokenizer：BEiT-3 base encoder初始化，encoder+decoder共172M参数
  - 语音tokenizer：ConvNeXt卷积架构，约120M参数，多级下采样[2,4,5,5,8]（1600×压缩比），判别器使用multi-period + complex STFT discriminator
- 训练硬件：未明确说明GPU型号和数量
- 推理细节：
  - 图像生成：DPM-Solver 20步，CFG=1.65或1.75
  - 多模态LLM：自回归逐token + 扩散头去噪
  - TTS：DPM-Solver 3-5步，CFG scale=4，支持流式处理
  - KV cache用于加速自回归生成（LatentLM可复用LLM推理基础设施）
  - GQA进一步优化吞吐
  - 扩散头推理开销：15fps TTS下扩散头延迟22.76ms（10步），LLM骨干53.80ms，总RTF=0.83（A6000 GPU）
- 正则化/稳定训练技巧：σ-VAE的Gaussian方差采样（比固定方差更优，附录B验证），扩散头使用AdaLN-Zero条件注入，训练时每forward pass采样4个扩散timestep以复用Transformer计算，图像tokenizer训练使用layer-wise learning rate decay（rate=0.65）

### ⚖️ 评分理由

*   创新性 (1.4/2)：next-token diffusion + σ-VAE的组合构成了一个有机的创新体系，不是简单拼接。σ-VAE对自回归生成中方差崩塌问题的识别和解决具有洞察深度，图5的对比（FID从9.64到4.10）有力地证明了这个设计的关键性。此外，将因果自回归范式与扩散模型统一在一个框架内，且与MAR的表1形成鲜明对比——MAR发现因果基线效果不佳，而本文通过σ-VAE使因果框架work得非常好。然而，扩散头作为预测head不是全新概念（MAR已使用），next-token prediction框架本身也是标准做法。主要创新在于验证了“大方差VAE + 扩散头”可以使因果自回归在连续数据生成上work并匹敌双向模型，这个结论本身有价值，但技术组件的新颖度有限。

*   技术严谨性 (1.2/1.5)：方法推导清晰：扩散过程的标准公式、训练-推理流程、σ-VAE的设计原理都有合理的数学表述。暴露偏差的分析（Section 3.2）虽定性但切中要害，且清晰说明了推理时 \(\sigma < \sigma_{\text{gen}}\) 时分布偏移的机理。主要扣分点：(1) σ-VAE的训练目标从标准ELBO简化为 \(\min \|\hat{x} - x\|^2 + \beta \|\mu\|^2\)，但未严格论证这个简化在什么条件下等价于KL约束，\(\beta\) 的选择缺乏理论指导；(2) 多模态LLM的训练损失权重 \(\alpha\) 的选择仅凭“数值尺度可比”的工程直觉，缺乏系统消融（尽管在4.2节说明了从1到10测试发现交叉熵损失无变化、扩散损失在5-10饱和的经验依据）；(3) 在ImageNet上与MAR的对比中，MAR训练了800 epochs而LatentLM仅400 epochs，等计算量对比缺失。

*   实验充分性 (1.2/1.5)：覆盖三个差异化领域（图像、多模态、语音），体现了方法的通用性。TTS实验最为扎实，包含多种帧率、多组baseline、tokenizer与生成质量的关系分析，有人类评估（24人）和细致的消融（CFG scale、推理步数），且附录有推理延迟的详细分析。Scaling实验覆盖模型规模和分辨率两个维度，推理效率也有充分对比（2.47×-2.84×吞吐量提升）。主要不足：(1) 图像生成仅在ImageNet上测试，无其他分辨率或数据集（仅在384×384做过一次扩展，100k步）；(2) 多模态LLM仅在200B tokens上训练（约为Chinchilla最优的1.3B模型训练量的1/10），模型远未收敛，声称的scaling趋势需要更大规模验证，论文自己也说总schedule设为了1T tokens；(3) 与MAR的因果基线对比缺失——虽然MAR的表1声称其因果基线效果不佳，但本文并未直接复现该基线以做公平对比，而是依赖σ-VAE后的LatentLM与MAR进行跨因果关系比较；(4) TTS的人类评估仅24人，规模偏小。

*   清晰度 (0.8/1)：整体结构合理，核心方法用图2可视化清晰。σ-VAE的fixed variance设计有明确的图示（图3）。附录提供了比较完整的超参数表和补充消融。主要问题：(1) Section 2.1中DDPM公式直接引用而不做充分解释，对不熟悉扩散模型的读者不够友好；(2) 部分关键细节在正文中缺失（如σ-VAE的 \(\beta\) 值、多模态数据的具体预处理细节），需依赖附录；(3) 表1将众多模型混杂在一起而未按计算量或参数量分组，可读性受影响；(4) 部分图（图4、5）的图例和坐标轴标注不够详细。

*   影响力 (1.2/1.5)：统一多模态生成与理解框架是当前热点方向，来自Microsoft Research（Furu Wei组）的背书增加了该工作的关注度和后续影响力。TTS部分在15fps帧率下超越VALL-E 2（SIM 0.697 vs 0.643，WER-C 1.2 vs 1.5）且解码步数减少5-10倍，对语音合成社区有直接的实际推动，尤其是高压缩比连续tokenization对实时语音应用的潜在影响。σ-VAE的方差约束设计可能启发其他自回归生成任务（如机器人动作生成、视频预测）。然而，图像生成未达到SOTA（落后于MAR），多模态LLM的实验规模不足以证明其在大规模场景下的优势，通用性声明（"general-purpose interface"）需要更多模态（如视频、机器人动作——论文声明为未来工作）的实验支撑。

*   开源 (0.2/1.5)：论文中未提及任何代码仓库、模型权重或数据集的公开链接。没有GitHub、HuggingFace或其他开源平台的引用。仅引用了LlamaGen等第三方开源模型作为对比基线。理论上这是一个完全闭源的工作，但考虑到论文发表于ICML 2026且来自微软研究院，可能在后续有开源计划——但论文本身未给出任何承诺。仅能根据提供的信息判定为几乎没有开源。

*   可复现性 (0.3/0.5)：附录提供了较详细的超参数表（Table 12-14），包括模型维度、层数、学习率、batch size等。σ-VAE的架构和训练配置部分描述清晰（包括语音tokenizer的下采样策略、ConvNeXt块结构）。图像tokenizer的训练细节在附录I.2有充分说明（perceptual loss、GAN loss、BEiT-3初始化等）。主要扣分点：(1) 未说明训练硬件（GPU型号/数量/训练时长），这对评估复现成本至关重要；(2) 多模态LLM训练数据的具体配比和预处理细节不够充分（如交错图文数据的过滤标准）；(3) 语音tokenizer的ConvNeXt block具体结构未给出完整配置；(4) 未提供复现所需的任何代码或配置文件。

*   工程/实践价值 (1.0/1.5)：LatentLM的框架设计充分考虑了实际部署需求：兼容KV cache可复用LLM推理基础设施（论文明确指出可"reuse the existing distributed training infrastructure of large language models"），扩散头轻量（3-6层MLP）对推理延迟影响可控（TTS场景下扩散头仅占总推理时间的约30%），GQA进一步优化吞吐（2.84× throughput gain），TTS支持流式处理。多模态LLM的统一接口简化了训练和推理的工程复杂度。TTS部分展示了完整的tokenizer→AR模型→声码器pipeline，且推理效率分析充分。但缺乏生产级的工程细节（如量化、服务化部署、长序列优化等），且未开源使得工业界无法直接复用，工程参考价值受限。

### 🚨 局限与问题

论文明确承认的局限：
1. 图像生成中使用raster-order作为因果分解策略，承认这并非最优，替代的factorization可能进一步提升质量。
2. 仅探索了训练时采样latent作为输入、预测后验均值的策略，发现其在完全收敛后不如采样latent目标——即即使降低目标的随机性，recursive generation仍会导致分布偏移，因为生成的过程是迭代的。
3. 多模态实验仅覆盖了文本+图像，视频、机器人动作等模态留作未来工作（Section 6声明了未来探索方向）。

审稿人发现的潜在问题：
1. 与MAR的直接对比缺失：MAR (Li et al., 2024) 的Table 1明确宣称其因果基线效果不佳，这构成了本文的直接竞争性主张。但LatentLM并没有在相同tokenizer条件下复现MAR的因果基线，使得"causal can be highly effective"这一核心主张缺乏与MAR因果基线的直接对比。LatentLM的改进来自σ-VAE（图5已证明），那么问题是：如果用σ-VAE替换MAR的tokenizer，MAR的双向框架是否还有1.78 vs 2.24的优势？这一关键问题未得到回答。
2. 多模态LLM的训练严重不足：1.3B模型仅在200B tokens上训练，论文在Section 4.2指出总schedule设置为1T tokens，意味着模型只跑了20%的规划训练量。在如此早期的训练阶段比较PPL、FID等指标，各模型的相对排序可能随着训练推进而改变，无法可靠地外推scaling优势。虽然Figure 6的scaling curve显示LatentLM保持优势，但200B内的趋势不一定外推到1T。
3. σ-VAE的理论基础薄弱：从标准ELBO到 \(\min \|\hat{x} - x\|^2 + \beta \|\mu\|^2\) 的简化缺乏严格推导。为何μ的L2正则能替代KL散度约束？在什么条件下等价？附录D虽区分了\(\sigma\)-VAE与\(\beta\)-VAE的动机差异，但并未解释这一简化的理论依据。这影响了方法在其他任务上的泛化指导——在某些场景下，\(\beta\) 的选择和约束效果可能完全不同。
4. TTS评估的局限性：仅测试了LibriSpeech（朗读语音、单一语言），未涉及多语言、情感语音、对话等更复杂的TTS场景。基准系统VALL-E 2的3s prefix结果引用自MELLE论文而非复现，可能存在评估协议不一致的问题。人类评估仅24人，且与商业TTS系统（ElevenLabs、Gemini）的对比中，这些商业系统的配置和训练数据规模未知，公平性存疑。
5. 连续token的扩散步数消融不够：图像生成和多模态LLM中扩散头的推理步数选择缺乏系统的精度-速度trade-off分析。TTS部分有很好的消融（Figure 15b），但图像生成部分仅提及"20 steps"，未分析步数从10到100的性能变化。
6. 与JetFormer等同期工作的对比缺失：JetFormer (Tschannen et al., 2024) 同样探索了连续token的自回归生成，但论文未做任何讨论或对比。参考文献中甚至没有引用JetFormer。
7. General-Purpose Interface声明的实验支撑不足：论文声称LatentLM提供"general-purpose interface"统一多模态理解和生成，但实验仅覆盖了图文+语音。机器人动作等关键连续模态完全未实验（只在Conclusion列为future work），这一声明在当前证据下显得过度claim。
8. 损失权重α的消融不够深入：Section 4.2提到"vary the diffusion loss weight from 1 to 10"，但未给出不同α值下的具体性能对比表，仅有文字描述"cross-entropy loss remains nearly unchanged"和"diffusion loss also saturates"。这种定性描述无法充分支撑α=5的选择。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
