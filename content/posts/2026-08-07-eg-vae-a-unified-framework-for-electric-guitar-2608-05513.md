---
title: "EG-VAE: A Unified Framework for Electric Guitar Tone Transfer and Removal"
date: 2026-08-07
draft: false
tags: [音频生成, 变分自编码器, 多任务学习, 音频理解, Transformer]
categories: [论文速递]
description: "音频生成 | 7.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.05513"
---

# 📄 EG-VAE: A Unified Framework for Electric Guitar Tone Transfer and Removal

标签：#音频生成 #变分自编码器 #多任务学习 #音频理解 #Transformer

**7.3/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 清晰 1/1 | 影响 0.9/1.5 | 开源 0.2/1.5 | 复现 0.5/0.5 | 工程 0.9/1.5

✅ **7.3/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #音频生成 | #变分自编码器 | #多任务学习 #音频理解 | [arxiv](https://arxiv.org/abs/2608.05513)


### 👥 作者与机构

- 第一作者：Yen-Tung Yeh（National Taiwan University）
- 通讯作者：未说明
- 作者列表：Yen-Tung Yeh（National Taiwan University）、Yun-Ning (Amy) Hung（Moises）、Yi-Hsuan Yang（National Taiwan University）

### 💡 毒舌点评

用“掩码前向”统一训练解耦与推理移除的切入点很巧，且 seen/unseen 双设置、主观+客观+消融全套证据使得“统一优于分离”的结论基本站得住。但全文只给 demo 页、不给代码/权重/数据，且“unseen”仅来自同一厂商 Neural DSP 的另一套插件，实际泛化边界被明显高估。对最相关的 ST-ITO 只字未做实验对比，是审稿意见里躲不开的一刀。

### 📌 核心摘要

本文要解决电吉他音色迁移（EGTT）与音色移除（EGTR）长期被分离建模、且湿输入场景下效果不佳的问题。方法核心是提出 EG-VAE，将湿录音通过变分自编码器解耦为帧级内容嵌入与全局音色嵌入：EGTT 用源内容+参考音色重组，EGTR 用音色掩蔽（tone masking）下的掩码前向直接输出干信号。相比已有工作（One-to-many 只建模放大器、DeepAFx/ST-ITO 只建模效果链且隐含干输入假设），论文主张首次以单一表示同时支持湿输入下的两个任务，并设计了两阶段训练（确定式解耦→变分平滑）处理未见音色泛化。实验上，EGTT 在 seen tone 上 Mel 距离 0.86，相对最强基线 One-to-many w/ EGTR（1.53）降低约 44%；EGTR 在 seen/unseen 上均取得最低 Mel 距离（1.10/1.19），主观 MOS 在音色相似度和干燥度上逼近 Oracle。实际意义在于为吉他效果器建模、录音后期处理提供可统一执行迁移与移除的框架，其解耦机制也可迁移到其他乐器的效果链建模。主要局限是训练/评估数据全部来自 Neural DSP 商业插件渲染而非真实录音，且未提供代码、权重或数据集，复现与进一步推广受限。

下图示意了本文研究的两个任务及其与吉他效果链的关系。

![Figure 1: The two tone-modeling tasks studied in this work. A dry direct-input (DI) signal is rendered into a wet recording by a chain of effects pedals and an…](https://arxiv.org/html/2608.05513v1/imgs/intro.png)

图中上方表示干信号经效果器踏板与音箱渲染为湿录音；下方红色箭头表示音色移除（EGTR）恢复干信号，蓝色箭头表示音色迁移（EGTT）用参考录音替换原音色。

### 🔗 开源详情

**未披露。** 原文未提供代码仓库、预训练权重、数据集下载链接或渲染脚本；仅提供 demos 页面（https://guitar-tone-demo.vercel.app/）。数据构建依赖 Neural DSP 商业插件（Archetype: Cory Wong X、Morgan Amps Suite）与 EGDB/EGDB-PG 数据集，作者未说明其公开计划或许可条款。所有复现所需的关键资源（模型实现、训练配置、数据渲染流程）均未披露。

### 🏗️ 方法概述和架构

EG-VAE 的整体流程为：湿波形 \(x_{\text{wet}}\) 输入共享编码器，编码器输出帧级特征 \(\mathbf{h}_{1:T'}\)；该特征分别送入内容提取器与音色提取器，得到帧级内容嵌入 \(\mathbf{z}_{1:T'}\)（1024 维，时间分辨率由 hop length 1920 决定）和全局音色嵌入 \(\mathbf{s}\)（64 维）；两者经条件层归一化（CLN）组合后由解码器重建输出。EGTT 在推理时用参考录音的 \(\mathbf{s}^{\text{ref}}\) 替换源 \(\mathbf{s}\) 后解码；EGTR 则将 CLN 的调制参数强制置为 \(\boldsymbol{\gamma}=\mathbf{1}\)、\(\boldsymbol{\beta}=\mathbf{0}\)，使内容嵌入经纯 LayerNorm 后直接解码为干信号，即论文所称“音色掩蔽”（tone masking）。

下图给出了 EG-VAE 的整体架构与数据流向。

![Figure 2: Overview of EG-VAE. A shared encoder maps the input waveform to features 𝐡1:T′\\mathbf{h}_{1:T^{\\prime}}, feeding a content extractor that produces a frame-level latent 𝐳1:T′∼𝒩​(𝝁c,𝝈c2​𝐈)\\mathbf{z}_{1:T^{\\prime}}\\sim\\mathcal{](https://arxiv.org/html/2608.05513v1/x1.png)

图中显示湿波形经共享编码器得到帧级特征后，分别由内容提取器与音色提取器输出帧级内容嵌入与全局音色嵌入，二者在 CLN 中组合并由解码器重建；同时标注了信息瓶颈、MIDI/预设属性监督与 pvpGD 等关键解耦机制。


共享编码器基于 DAC-VAE 的残差卷积堆叠，使用 Snake 激活与渐进下采样（下采样率 \([2,8,10,12]\)），将 44.1 kHz 波形映射为 \(1024 \times T'\) 的帧级表示。解码器镜像上采样结构。内容提取器先以 \(1\times1\) 卷积把特征降到 128 维，在此低维空间施加标准正态 KL 正则（信息瓶颈），采样后再投影回 1024 维形成 \(\mathbf{z}\)。该瓶颈限制每帧内容容量，迫使其只保留干信号所需信息。音色提取器用 4 层 Transformer（4 注意力头）建模帧间依赖，经时间均值池化得到全局向量，再由线性变分头输出 \(\boldsymbol{\mu}_s\)、\(\boldsymbol{\sigma}_s\) 并从高斯采样得到 \(\mathbf{s}\)。CLN 组合公式为
\[\tilde{\mathbf{z}}_t = \boldsymbol{\gamma}(\mathbf{s}) \odot \mathrm{LayerNorm}(\mathbf{z}_t) + \boldsymbol{\beta}(\mathbf{s}),\]
其中 \(\boldsymbol{\gamma}\)、\(\boldsymbol{\beta}\) 由 \(\mathbf{s}\) 的线性投影产生；当掩蔽时该公式退化为 \(\tilde{\mathbf{z}}_t = \mathrm{LayerNorm}(\mathbf{z}_t)\)。

下图对比了音色条件化与音色掩蔽两种 CLN 操作方式。

![Figure 3: Tone conditioning versus tone masking, sharing the same CLN operation 𝜸​(𝐬)⊙LN​(𝐳1:T′)+𝜷​(𝐬)\\boldsymbol{\\gamma}(\\mathbf{s})\\odot\\text{LN}(\\mathbf{z}_{1:T^{\\prime}})+\\boldsymbol{\\beta}(\\mathbf{s}). Conditioning produces 𝜸​(𝐬](https://arxiv.org/html/2608.05513v1/imgs/tone_mask.png)

图中上方显示正常音色条件下由线性投影生成 γ(s)、β(s)，经 CLN 得到湿输出；下方显示 tone masking 将其强制设为恒等缩放与零偏置，使 CLN 退化为 LayerNorm 并输出干信号。


论文还从 DSAE 的局限性出发说明解耦不能只靠先验独立：全局因子容易被帧级隐变量的时间均值吸收，且 DSAE 没有为“移除音色”提供指定操作点。为此，EG-VAE 同时启用五种机制。其一是信息瓶颈，对内容隐变量施加 KL 正则。其二是内容-音色扰动，构造 \((c_0,t_1)\)、\((c_1,t_0)\) 与目标 \((c_0,t_0)\) 的交叉三元组，强制内容嵌入只编码 content、音色嵌入只编码 tone。其三是属性监督，内容端加帧级 MIDI 多标签音高分类（\(\mathcal{L}_{\text{pitch}}\)），音色端加预设分类（\(\mathcal{L}_{\text{preset}}\)）。其四是 pvpGD，用音色后验方差的几何均值 \(\bar{\sigma}_s\) 调制内容嵌入的乘性高斯扰动：
\[\mathbf{z}_t^{\text{pvp}} = \mathbf{z}_t \odot \big(1 + \bar{\sigma}_s \boldsymbol{\epsilon}_t\big),\quad \boldsymbol{\epsilon}_t \sim \mathcal{N}(\mathbf{0},\mathbf{I}),\]
从而防止全局音色隐变量坍缩。其五是音色掩蔽，在训练时以掩码前向监督干信号，既强化解耦又固定掩码状态的语义。

两阶段训练是针对泛化与稳定性的关键设计。Stage 1 采用确定式音色路径（无变分音色头、\(\lambda_{\text{KL}}^s=0\)、pvpGD 关闭、无数据增强），在简化条件下建立解耦。Stage 2 从 Stage 1 检查点初始化，加入变分音色采样、\(\lambda_{\text{KL}}^s\) 前 10,000 步线性 warmup、pvpGD 与音频效果增强。音频效果增强遵循 Wiener–Hammerstein 模型，由增益、参数 EQ 与失真组成，以概率 0.5 应用，使训练音色流形变密。三种训练模式（自重建、转换、掩码重建）按 \([0.25, 0.45, 0.30]\) 采样。总损失为
\[\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{audio}} + \lambda_{\text{KL}}^c \mathcal{L}_{\text{KL}}^c + \lambda_{\text{KL}}^s \mathcal{L}_{\text{KL}}^s + \lambda_{\text{pitch}} \mathcal{L}_{\text{pitch}} + \lambda_{\text{preset}} \mathcal{L}_{\text{preset}},\]
其中 \(\mathcal{L}_{\text{audio}}\) 为多尺度 mel 损失、对抗损失与特征匹配损失的加权和。

### 💡 核心创新点

**1. 统一 EGTT 与 EGTR 的单一解耦框架。** 此前工作将音色迁移和音色移除视为独立任务，分别建模放大器或效果链，且隐含干输入假设。EG-VAE 通过“内容嵌入+全局音色嵌入”的分解，使迁移（替换 \(\mathbf{s}\)）与移除（掩蔽 \(\mathbf{s}\)）共享同一表示与同一解码器。证据：单模型同时取得 EGTT/EGTR 的全局最低 Mel 距离，且主观 TS/Dry 分接近 Oracle。

**2. 音色掩蔽（tone masking）作为训练目标与推理过程的双重机制。** 掩蔽通过将 CLN 调制强制为 \(\boldsymbol{\gamma}=\mathbf{1}\)、\(\boldsymbol{\beta}=\mathbf{0}\)，使内容嵌入独自解码出干信号。该操作在训练时强化内容-音色解耦，在推理时直接定义 EGTR 流程，无需任何额外模块或微调。证据：移除 tone masking 后重建 Mel 从 0.80 恶化到 0.96，且 EGTR 完全不可用。

**3. 两阶段训练策略与平滑音色空间。** Stage 1 用确定式音色路径稳定解耦，Stage 2 引入变分采样、KL warmup、pvpGD 与音频效果增强，使未见音色落在已见音色附近且解码随 \(\mathbf{s}\) 连续变化。证据：去掉 variational sampling 后 PPL 从 0.90 恶化到 2.00，unseen EGTT Mel 从 1.14 升至 1.25。

**4. 面向吉他信号链的完整解耦机制组合。** 信息瓶颈、内容-音色扰动、属性监督（MIDI+preset）、pvpGD 四者协同，且通过逐项消融证明各自不可替代，其中内容-音色扰动影响最大（EGTR Mel 从 1.13 恶化到 2.12）。该组合虽由已有技术构成，但针对吉他效果链的非线性失真与内容/音色纠缠问题做了系统性适配。

**5. 覆盖全效果链的数据构建与泛化评估协议。** 使用 Neural DSP 商业插件渲染 474 个 seen 预设与 96 个 unseen 预设，覆盖失真、调制、EQ、空间四类效果；提出的 seen/unseen 双设置评估协议比以往仅用 5–256 个放大器预设的工作更接近真实效果链多样性。

### 📊 实验结果

论文在 EGDB 干信号基础上，用 Archetype: Cory Wong X 的 218 个预设 + EGDB-PG 的 256 个 amplifier 预设作为 seen tones，用 Morgan Amps Suite 的 96 个预设作为 unseen tones，测试集各 2,000 条 10 秒样本。客观指标为 Mel 距离与 STFT 距离（越低越好），主观指标为 14 人 MOS（1–5）。下表保留主方法、最强基线与全部对比基线。

**表 1：EGTT 结果（主方法 vs 全部对比基线）**

| 模型 | Seen Mel ↓ | Seen STFT ↓ | Unseen Mel ↓ | Unseen STFT ↓ | Seen AQ ↑ | Seen TS ↑ | Unseen AQ ↑ | Unseen TS ↑ |
|---|---|---|---|---|---|---|---|---|
| Oracle | — | — | — | — | 4.26 | 4.48 | 3.85 | 4.48 |
| DeepAFx | 2.07 | 3.00 | 1.63 | 2.58 | 2.85 | 1.44 | 2.19 | 1.81 |
| DeepAFx w/ EGTR | 2.04 | 2.98 | 1.75 | 2.72 | 3.37 | 2.30 | 3.15 | 2.74 |
| One-to-many | 1.93 | 2.85 | 1.69 | 2.70 | 3.67 | 2.30 | 3.67 | 2.63 |
| One-to-many w/ EGTR | 1.53 | 2.55 | 1.61 | 2.61 | 3.11 | 2.32 | 2.56 | 2.07 |
| **EG-VAE** | **0.86** | **1.63** | **1.15** | **2.00** | **4.15** | **4.30** | **3.85** | **3.70** |

表注：EG-VAE 在 seen/unseen 的客观距离与主观分全面领先；seen Mel 相对最强基线 One-to-many w/ EGTR 降低约 44%，unseen 上 TS 达 3.70 而基线均在 2.74 以下。

**表 2：EGTR 结果（主方法 vs 全部对比基线）**

| 模型 | Seen Mel ↓ | Seen STFT ↓ | Unseen Mel ↓ | Unseen STFT ↓ | Seen AQ ↑ | Seen Dry ↑ | Unseen AQ ↑ | Unseen Dry ↑ |
|---|---|---|---|---|---|---|---|---|
| Oracle | — | — | — | — | 4.67 | 4.58 | 4.50 | 4.39 |
| HDemucs | 1.36 | 2.48 | 1.63 | 2.63 | 3.00 | 2.69 | 3.03 | 2.39 |
| DCUNet | 1.54 | 2.77 | 1.57 | 2.71 | 3.36 | 2.83 | 3.19 | 2.56 |
| DPTNet | 1.19 | 2.01 | 1.27 | 2.06 | 2.81 | 2.19 | 2.67 | 2.31 |
| Distortion Recovery | 1.21 | 1.85 | 1.22 | 1.86 | 1.53 | 2.36 | 2.06 | 2.11 |
| **EG-VAE** | **1.10** | **1.79** | **1.19** | 1.87 | **3.53** | **3.42** | **3.69** | **3.50** |

表注：EG-VAE 在 seen/unseen 上 Mel 均为最低，unseen STFT 与 Distortion Recovery 基本持平（1.87 vs 1.86）；主观 AQ 与 Dry 全面领先。

### 🔬 细节详述

**任务定义与问题形式化。** 干信号 \(\mathbf{x}_{\text{dry}}\) 经效果链 \(f\)（包含 \(f_{\text{amp}}\) 与 \(f_{\text{fx}}\)）得到湿信号 \(\mathbf{x}_{\text{wet}}=f(\mathbf{x}_{\text{dry}})\)。EGTT 的目标是从湿输入 \(\mathbf{x}_{\text{wet}}^{\text{src}}\) 与参考录音 \(\mathbf{x}_{\text{wet}}^{\text{ref}}\) 生成 \(\hat{\mathbf{x}}^{\text{EGTT}}=\mathcal{D}(\mathbf{z}_{1:T'}^{\text{src}},\mathbf{s}^{\text{ref}})\)；EGTR 的目标是学习 \(f^{-1}\)，从湿输入单独恢复干信号。由于失真等非线性环节会丢弃信息，\(f\) 一般不可逆，移除必须由数据学习而非闭式求解。

**编码器/解码器与提取器结构。** 共享编码器与解码器采用 DAC-VAE 的残差卷积堆叠，Snake 激活，下采样率 \([2,8,10,12]\)，hop length 1920，44.1 kHz 采样率。内容提取器：\(1\times1\) 卷积将 \(\mathbf{h}\) 投影为帧级高斯参数 \((\boldsymbol{\mu}_c,\boldsymbol{\sigma}_c)\)，在 128 维低维空间采样，再投影回 1024 维。音色提取器：4 层 Transformer（4 注意力头）处理帧级特征，时间均值池化后由线性变分头输出 \((\boldsymbol{\mu}_s,\boldsymbol{\sigma}_s)\) 并采样得到 64 维 \(\mathbf{s}\)。判别器沿用 DAC-VAE 的多周期波形判别器（periods \(\{2,3,5,7,11\}\)）与多尺度复数 STFT 判别器（FFT sizes \(\{2048,1024,512\}\)，频带切分 \(\{0,0.1,0.25,0.5,0.75,1.0\}\) Nyquist）。

**训练目标与超参数。** 多尺度 mel 损失使用 \(n_{\text{mels}}\in\{5,10,20,40,80,160,320\}\) 与窗长 \(\{32,64,\dots,2048\}\)；多尺度 STFT 损失窗长 \(\{2048,512\}\)。优化器 AdamW（\(\beta_1=0.8\)，\(\beta_2=0.99\)，学习率 \(1.5\times10^{-4}\)，指数衰减 \(\gamma=0.9999996\)），11 秒片段、batch size 14。Stage 1 训练 150,000 步；Stage 2 从 Stage 1 检查点微调 200,000 步，\(\lambda_{\text{KL}}^s\) 前 10,000 步线性 warmup。损失权重：\(\lambda_{\text{mel}}=15\)，\(\lambda_{\text{fm}}=2\)，\(\lambda_{\text{adv}}=1\)，\(\lambda_{\text{KL}}^c=\lambda_{\text{KL}}^s=10^{-4}\)，Stage 1 的 \(\lambda_{\text{pitch}}=1\)、\(\lambda_{\text{preset}}=5\)。训练模式按 \([0.25,0.45,0.30]\) 采样自重建、转换、掩码重建。Stage 2 音频效果增强用 audiomentations 实现，概率 0.5。单张 NVIDIA RTX PRO 6000 GPU，按验证损失选 checkpoint。

**消融设置与平滑度协议。** Stage 1 消融（MIDI 监督、预设分类、内容-音色扰动、tone masking）在 seen tones 上评估；移除 tone masking 会使 EGTR 完全不可用，因此其 removal 列为空。Stage 2 消融（variational sampling、fx-aug、pvpGD）在 unseen tones 上评估。PPL 协议：固定内容，在两个参考音色嵌入间插值，32 个随机位置 \(t\) 测量 \(t\) 与 \(t+\epsilon\)（\(\epsilon=10^{-4}\)）解码输出的 log-mel L1 距离并按 \(\epsilon^2\) 归一化，500 对插值共 16,000 样本。t-SNE 可视化显示 seen tones 按预设形成清晰分离的簇，unseen tones 簇仍可辨识但分离度较低。

下图给出了音色嵌入空间的 t-SNE 可视化。

![Figure 5: t-SNE visualization of the tone embedding 𝐬\\mathbf{s}, colored by preset, for (a) seen tones and (b) unseen tones.](https://arxiv.org/html/2608.05513v1/imgs/tsne_combined.png)

左图 seen tones 按预设形成相对分离的簇，右图 unseen tones 虽仍呈现簇状结构，但不同预设间重叠更多，说明未见音色分布落在已见音色流形附近但边界更模糊。


**基线设置。** EGTT 基线为 One-to-many 与 DeepAFx，每个基线训练两种配置：标准配置直接输入湿录音；EGTR-enhanced 配置（w/ EGTR）在干输入上训练、推理时使用 EG-VAE 移除得到的干估计，以缓解湿输入不匹配并给基线最有利条件。EGTR 基线为 HDemucs、DCUNet、DPTNet 与 Distortion Recovery；所有基线在同一数据上重训，目标统一为 DAC-VAE 的多尺度 mel 损失；Distortion Recovery 的 HiFi-GAN vocoder 替换为 BigVGAN。

### ⚖️ 评分理由

*   创新性 (1.5/2)：提出EG-VAE统一框架，以内容/音色解耦表示同时支持EGTT和EGTR，tone masking在训练和推理中扮演同一角色，两阶段训练改善未见音色泛化；该任务级统一是新的，且有消融支持。

*   技术严谨性 (1.2/1.5)：方法形式化完整，CLN掩蔽退化为LayerNorm的推导清晰，各损失项与解耦机制对应明确；但delay效果在内容/音色之间缺乏一致线索被列为开放问题，暴露了算法边界假设的局限。

*   实验充分性 (1.1/1.5)：实验含seen/unseen双设置、客观Mel/STFT距离、14人主观MOS、两阶段消融与PPL平滑度验证，并对比多个EGTT/EGTR基线；但未对最相关ST-ITO做实验，主观测试无显著性检验，unseen仅来自同厂商插件，跨域证据有限。

*   清晰度 (1.0/1)：论文按问题形式化、架构、解耦机制、掩蔽操作、两阶段训练和实验设置有序展开，对CLN组合、损失和PPL协议解释清楚，图表与表格支持充分，未见明显组织或符号表达缺陷。

*   影响力 (0.9/1.5)：面向电吉他音色迁移与移除这一垂直音频任务，统一框架对吉他效果器建模和录音后期处理有实际价值，但任务领域较窄，对音频生成/理解更广泛社区的影响有限。

*   开源 (0.2/1.5)：论文目前只提供可访问的在线演示页面，未发布核心代码、模型权重或训练数据。

*   可复现性 (0.5/0.5)：论文披露了完整模型结构、下采样率、嵌入维度、Transformer层数、优化器配置、损失权重、训练步数、batch size、数据划分与评估协议，足以支撑独立复现；按披露充分性给0.5。

*   工程/实践价值 (0.9/1.5)：构建758小时训练音频并覆盖失真/调制/EQ/空间效果链，训练流程工程化，提供demo与主观评测验证实际可用性；但缺少推理延迟/吞吐等工程指标，且未在真实录音场景验证。

### 🚨 局限与问题

**数据来源单一且非真实录音。** 所有训练与评估数据均由 Neural DSP 商业插件渲染：seen tones 来自 Archetype: Cory Wong X 的 218 个预设与 EGDB-PG 的 256 个 amplifier 预设，unseen tones 来自 Morgan Amps Suite 的 96 个预设。这些数据覆盖失真、调制、EQ、空间四类效果，但本质上仍是同一厂商的渲染管线产物，缺乏真实录音、真实踏板/音箱拾音条件或跨厂商数据的验证。

**unseen 泛化界定偏窄。** 论文将 Morgan Amps Suite 视为 unseen，但其与 seen 插件同属 Neural DSP，渲染方式与信号链结构存在系统性相似；因此“unseen”更准确地说是“同分布渲染管线下的未见面预设”，而非跨域未见信号链。实际部署中遇到的其他厂商插件、模拟设备或真实功放录音是否仍能保持当前性能，论文没有证据。

**未披露代码、权重与数据集。** 原文仅提供 demos 页面，未提供训练代码、预训练权重、渲染脚本或数据集本身。数据构建依赖商业插件（Neural DSP），也增加了第三方复现的许可障碍。对于依赖大量训练数据与多阶段训练的 VAE 框架，这使可复现性评分显著受限。

**基线对比不完整。** EGTT 部分未与同样面向效果链的 ST-ITO 做实验对比，只在背景中讨论；EGTR 部分未包含 RemFX 等通用效果移除方法。因此“优于任务相关最强基线”的结论在对比集合上成立，但不能排除这些方法在统一训练数据下取得相近表现的可能。

**主观评估规模与统计检验不足。** 主观测试仅 14 人，MOS 报告了均值和标准差，但未报告显著性检验或置信区间；部分主观差距（如 unseen AQ 3.85 vs Oracle 3.85）用于支撑“逼近 Oracle”时需要更谨慎。

**延迟效果与内容/音色边界存在开放问题。** 原文明确指出延迟重复（delay）既是效果又在声学上类似演奏内容，模型缺乏一致线索将其分配到音色或内容；该问题未被当前框架解决，可能限制对含明显 delay 音色的移除质量。

---

[← 返回 2026-08-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-07/)
