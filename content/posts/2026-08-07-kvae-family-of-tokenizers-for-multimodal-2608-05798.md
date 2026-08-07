---
title: "KVAE: Family of Tokenizers for Multimodal Generative Models"
date: 2026-08-07
draft: false
tags: [多模态模型, 变分自编码器, 音频编码, 音频理解, Transformer]
categories: [论文速递]
description: "音频编码 | 8.1/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.05798"
---

# 📄 KVAE: Family of Tokenizers for Multimodal Generative Models

标签：#多模态模型 #变分自编码器 #音频编码 #音频理解 #Transformer

**8.1/10** | 创新 1.3/2 | 严谨 1.3/1.5 | 实验 1/1.5 | 清晰 0.9/1 | 影响 1/1.5 | 开源 1.2/1.5 | 复现 0.1/0.5 | 工程 1.3/1.5

🔥 **8.1/10** | 前25% | 文档类型：模型报告 | 评分置信度：中 | #音频编码 | #变分自编码器 | #多模态模型 #音频理解 | [arxiv](https://arxiv.org/abs/2608.05798)


### 👥 作者与机构

- 第一作者：Andrey Shutkin（Kandinsky Lab）
- 通讯作者：未说明
- 作者列表：Andrey Shutkin、Denis Parkhomenko、Ivan Kirillov、Kirill Chernyshev、Kirill Malakhov、Ilia Vasiliev、Ilia Trushkin、Valeriya Kobenko、David Chikovani、Alexander Ivanov、Azat Saginbaev、Egor Silvestrov、Ivan Mikheev、Konstantin Zakharov，均署名 Kandinsky Lab

### 💡 毒舌点评

把 tokenizer 当作影响扩散生成的第一公民来做，跨图像、视频、音频统一评估 diffusability，并用 tokenizer-swap 和主观评测证明“重建好不等于生成好”，这是很实用的工程视角。但最关键的音频对齐目标、感知损失具体配置和大量精确超参数被推到“后续 publication”，导致读者很难独立复现。更值得注意的是，客观指标上并非处处 SOTA：音乐域 FAD/CLAP 仍落后于 MMAudio，语音域 SI-SDR 仍落后于 MovieGen DACVAE；最终“全面超越”的结论主要靠 side-by-side 主观胜率撑住，而主观评测又没有给出标注者数量、一致性和置信区间。

### 📌 核心摘要

论文提出 KVAE 系列连续 tokenizer，覆盖图像（KVAE-2D-2.0）、视频（KVAE-3D 4x8x8 与 4x16x16）和 48kHz 全带宽音频（KVAE-Audio），目标是为文本条件 latent diffusion / flow matching 生成模型提供更好的压缩潜在空间。方法核心在于用高斯连续瓶颈替代离散码本，并围绕“diffusability”设计因果 RMSNorm、不对称 encoder-decoder、时序-空间分离下采样、bottleneck attention、感知与表示对齐正则等工程选择。与 Wan、HunyuanVideo、MovieGen、StableAudio、MMAudio 等开源 tokenizer 相比，重建指标和主观生成偏好大多更好或相当；例如 KVAE-Audio 在 AudioCaps 上 CLAP 0.344、FAD-PANNs 15.381，且三组主观对比均占优。实际意义在于提供了一个可复用的多模态 tokenizer 开源族和一套面向生成质量的评估协议。主要局限是若干关键训练细节被推迟到后续 publication，且客观指标并未在所有 benchmark 上全面领先。

### 🔗 开源详情

- 代码：https://github.com/kandinskylab/kvae （KVAE-2D / KVAE-3D）；https://github.com/kandinskylab/kvae-audio （KVAE-Audio）
- 模型权重：明确给出的权重链接为 https://huggingface.co/kandinskylab/KVAE-Audio （KVAE-Audio）。论文未给出 KVAE-2D 和 KVAE-3D 的单独权重链接；结论中称所有模型均以 MIT 协议开源发布。
- 数据集：论文中未提及具体数据集名称或获取链接；仅提到训练数据来自开放和专有来源，并包含语音、音乐、音效等不同领域数据。
- Demo：论文中未提及
- 复现材料：论文正文包含训练细节、模型选择方法、消融实验和设计选择分析；代码仓库为公开链接。未提供额外的独立复现材料链接。
- 论文中引用的开源项目：论文中提及 Wan-2.2、HunyuanVideo-1.5、FLUX.1-dev / FLUX.2-dev、MovieGen / DACVAE MovieGen、StableAudio、MMAudio、CogVideoX、Cosmos、SAME-L、DiffusionBench、AudioLDM2、VA-VAE、REPA 等第三方模型/方法/基准名称，但论文摘录部分未给出这些项目的具体 URL 链接。

### 🏗️ 方法概述和架构

KVAE 是一个跨模态 tokenizer 家族，核心流程均为“编码器将原始信号映射为连续隐变量，解码器从隐变量重建信号”。视觉部分处理 RGB 图像/视频，定义输入视频为 \(x\in\mathbb{R}^{3\times T\times H\times W}\)，编码器 \(\mathcal{E}\) 将视频压缩为 \(z\in\mathbb{R}^{c\times t\times h\times w}\)，解码器 \(\mathcal{D}\) 重建 \(\hat{x}\)；压缩参数写作 \(f_t\times f_s\times f_s\ (c\ \text{channels})\)。本文视觉模型为 KVAE-4x8x8（16 通道）与 KVAE-4x16x16（64 通道）。音频部分处理 48kHz 波形 \(x\in\mathbb{R}^{C\times L}\)，编码器输出 \(z\in\mathbb{R}^{d\times l}\)，帧率为 50Hz，通道数 \(d=64\)，整体时间压缩因子为 960。

视觉 KVAE 采用受 CogVideoX 启发的 Conv3D 主干，但完全去掉了 attention，以支持长序列训练和推理时的缓存机制。归一化使用空间 RMSNorm，而非跨时间统计的 GroupNorm；这样既避免破坏因果性，也省去 context parallel 中跨设备同步统计量的通信开销。下采样和上采样块按“先时间后空间”的顺序操作，这一点与 Cosmos、DC-AE 的思路相近。KVAE-4x8x8 的解码器参数约为编码器的 1.3 倍；KVAE-4x16x16 进一步加宽解码器层并压缩编码器层通道，参数比达到约 5.3 倍，作者认为这提升了解码器的生成能力，而非单纯重建能力。

为验证空间 RMSNorm 在保留因果性的同时不损失训练稳定性，论文对比了 KVAE-4x8x8 上使用 RMSNorm 与 GroupNorm 的训练曲线，见下图。

![Figure 9: Normalization layer comparison on KVAE-4x8x8.](https://arxiv.org/html/2608.05798v1/x9.png)

下图左/右分别展示 PSNR 与 LPIPS 随训练步数的变化，红色（RMSNorm）与蓝色（GroupNorm）曲线在 stage 2 加入 GAN 和 stage 3 加入 EQ-loss 后基本重合，表明去除跨时间统计并未降低重建质量。


视频训练分为四个阶段：第一阶段目标为
\[L^{I}=\mathcal{L}_1(x,\hat{x})+w_{\text{perc}}\cdot\text{LPIPS}(x,\hat{x})+w_{\text{KL}}\cdot D_{KL}(\mathcal{E}(x),\mathcal{N}(0,I)),\]
第二阶段加入 frame-based GAN，并包含数千步 warm-up；第三阶段加入 EQ-loss，对隐变量做降采样、旋转等变换；第四阶段冻结编码器，仅微调解码器。训练采用序列长度缩放：从 65 帧开始，最多训练到 129 帧，推理可外推到约 400 帧；视频批次以 0.3 的概率穿插单帧图像，使模型同时支持图像和视频输入。

下图展示了 KVAE-4x16x16 在训练各阶段针对解码器宽度、隐变量通道数与对称性的消融结果。

![Figure 10: Ablation study for the 4x16x16 design. Left/Middle images: reconstruction metrics Right image: learning curves of text-to-video generation models](https://arxiv.org/html/2608.05798v1/x10.png)

左/中图分别给出 LPIPS 与 PSNR 曲线，采用非对称高通道设计的 baseline（红色）优于 32 通道版本（绿色）与对称设计（蓝色）；右图的文本到视频生成学习曲线（gFID / CLIP）也呈现相同趋势，说明解码器容量提升主要惠及生成质量。


音频 KVAE-Audio 继承 DAC 的卷积残差结构，但将 RVQ 替换为高斯重参数化瓶颈。编码器输出先经过一个单层 self-attention，再映射为高斯后验参数；由于隐空间帧率仅为 50Hz，attention 的计算开销极低，但能建模卷积窗口之外的上下文。stride 调度为 [2,3,4,5,8]，相比 DAC 的 [2,4,8,8] 多一个 block，以避免单层跨度过大导致感受野不足。音频训练总损失包含
\[\mathcal{L}_1+w_{\text{spec}}\mathcal{L}_{\text{spec}}+w_{\text{KL}}D_{KL}+w_{\text{adv}}\text{GAN}+w_{\text{perc}}\mathcal{L}_{\text{perc}}+w_{\text{align}}\mathcal{L}_{\text{align}}(\mathcal{E}(x),\mathcal{F}(x)),\]
其中 \(\mathcal{L}_{\text{spec}}\) 是多尺度 log-magnitude mel 谱 L1 距离，\(\mathcal{F}\) 是冻结的音频 foundation model，用于表示对齐。感知损失与对齐损失的具体 backbone、层选择和权重被论文明确推迟到专门 publication。判别器为 period-based discriminator 与多个 STFT 分辨率的 spectral discriminator 的组合。训练使用约 1 万小时筛选后的 48kHz 音频，并过滤掉“标称 48kHz 但实际由低采样率升频、高频段无能量”的文件；crop 长度从 0.38 秒逐步增加到 5 秒，最后冻结编码器微调解码器。

KVAE-2D-2.0 是独立的图像 tokenizer，输入压缩因子为 8x8，输出 32 通道高斯隐变量，主要用于图像域 diffusability 分析，并与 FLUX.2 VAE 等做下游生成对比。整个家族共享“重建质量不能代表生成质量”的设计逻辑：用 CDS 等廉价统计量筛选候选 tokenizer，再用固定生成器的 tokenizer-swap 做最终验证。

论文将隐空间 patch 的相关衰减斜率 CDS 作为衡量 tokenizer diffusability 的廉价代理指标，下图给出了 14 个图像 tokenizer 配置上 CDS 与 Bradley-Terry 主观视觉质量分数的对应关系。

![((a)) BT quality vs CDS.](https://arxiv.org/html/2608.05798v1/figures/bt_visual_quality_vs_cds_14_checkpoints_20260729.png)

散点图显示二者呈强正相关（Pearson r≈0.907），KVAE-2D-2.0（橙色点）位于右上角，说明其隐空间统计特性与较高的生成视觉质量一致；图中同时标注了这是样本内 14 个检查点的结果。

### 💡 核心创新点

1. 全带宽 48kHz 连续音频 tokenizer：KVAE-Audio 在 50Hz 帧率、64 通道下实现波形级端到端建模，避免 mel 谱 tokenizer 对 vocoder 和相位丢失的依赖。相比 MovieGen、SAME-L 等 128/256 通道连续波形 tokenizer，64 通道在重建与生成之间取得更优平衡。
2. 因果 RMSNorm 替代 GroupNorm：避免跨时间统计破坏因果性，也省去 context parallel 中的全同步通信；作者用学习曲线证明该替换不损失重建或生成质量，为长视频训练和流式推理提供工程便利。
3. 视频 tokenizer 的不对称 encoder-decoder 与高通道设计：KVAE-4x16x16 将解码器参数增至编码器的 5.3 倍，并采用 64 通道隐变量；消融表明这主要提升生成质量，而非单纯重建指标。
4. diffusability 筛选指标 CDS：将 iREPA 的 patch 相关衰减统计量用于 VAE 隐空间。对 14 个图像 tokenizer 配置，CDS 与 Bradley-Terry 主观视觉质量分数的样本内 Pearson 相关为 \(r=0.906\)。论文明确说明这是样本内关联，不能证明 out-of-sample 预测能力。
5. 跨模态 tokenizer-swap 评估协议：在图像、视频和音频三域都固定生成模型、只替换 tokenizer，从而把生成质量差异归因于潜在空间。音频部分使用 0.6B DiT 作为固定生成器，这一协议对音频领域尤其有价值，因为纯重建指标无法预测扩散生成质量。

### 📊 实验结果

下表按原表压缩因子分组，仅保留最强基线与本文模型的关键指标。KVAE-4x8x8 在 MCL-JCV 720p 上 PSNR 比 HunyuanVideo-1.0 和 Wan-2.1 高约 1.7 dB，LPIPS 与 HunyuanVideo-1.0 持平但略低于 Wan-2.1。

| 模型 | 压缩因子 | 通道 | PSNR↑ | SSIM↑ | LPIPS↓ |
|---|---|---|---|---|---|
| HunyuanVideo-1.0 | 4x8x8 | 16 | 34.3 | 0.90 | 0.047 |
| Wan-2.1 | 4x8x8 | 16 | 34.3 | 0.89 | 0.044 |
| KVAE-2.0 | 4x8x8 | 16 | 36.0 | 0.92 | 0.047 |
| HunyuanVideo-1.5 | 4x16x16 | 32 | 34.4 | 0.89 | 0.073 |
| Wan-2.2 | 4x16x16 | 48 | 34.2 | 0.89 | 0.037 |
| KVAE-2.0 | 4x16x16 | 64 | 35.2 | 0.91 | 0.058 |

在固定 0.6B DiT 的音频 tokenizer-swap 实验中，论文通过 side-by-side 主观评测比较了 KVAE-Audio 与各基线，下图以 MMAudio 44.1kHz 为例。

![Figure 11: Side-by-side evaluation of audio generations for KVAE-Audio vs MMAudio 44.1kHz](https://arxiv.org/html/2608.05798v1/figures/audio_sbs_mmaudio.png)

图中显示 KVAE-Audio 在 prompt following、technical quality 和 aesthetic quality 三项上的胜率分别为 0.56、0.54 和 0.57，均略高于 MMAudio；这与文中“对 MMAudio 的优势最窄”以及音乐域客观指标 MMAudio 仍具竞争力的判断一致。


### 视觉生成
图像生成使用 2B CrossDiT 生成模型，所有 tokenizer 在相同数据集、caption 和超参数下训练。由于压缩因子不同，KVAE-4x8x8 使用 2x2 patch，所有 4x16x16 模型使用 1x1 patch。学习曲线上，KVAE-4x16x16 的 FID 超过 HunyuanVideo-1.5 的 32 通道版本；side-by-side 评测中，KVAE-4x16x16 全面优于 HunyuanVideo-1.5，对 Wan-2.2 则是视觉外观稍弱、提示遵循更强。KVAE-4x8x8 出现客观指标与主观评测不一致的现象：FID/CLIP 不领先，但主观胜率占优。KVAE-2D-2.0 在 OmniDoc-TokenBench 文本图像重建上 PSNR 28.05，高于 FLUX.1-dev 的 26.24 与 FLUX.2-dev 的 27.72；FID 则不如两个 FLUX baseline。

视频生成方面，KVAE-4x16x16 在 121 帧 384x256 验证中，InternVideo2、QAlign、VideoMAE2 动力学指标均优于 HunyuanVideo-1.5；在 768x512 的 121 帧 side-by-side 评测中主观胜率更高。

### 音频重建
音频重建统一在 AudioSet eval、MUSDB18-HQ、EARS 上评估，所有模型先重采样到 44.1kHz 再计算指标，且均使用后验均值而非采样值。KVAE-Audio 在通用声音和音乐域多数谱距离指标领先，在语音域与最强基线接近；但 EARS 上 MovieGen DACVAE 的 SI-SDR 10.264 高于 KVAE-Audio 的 9.952。KVAE-Audio 参数量 166.9M，显著小于 SAME-L 的 852.1M，且使用 64 通道，低于 MovieGen 的 128 通道和 SAME-L 的 256 通道。

### 音频生成
音频生成采用固定 0.6B DiT 的 tokenizer-swap，AudioCaps 结果如下：

| 模型 | 通道 | CLAP↑ | CE↑ | PQ↑ | FAD (PANNs)↓ | FAD (PaSST)↓ | FAD (VGGish)↓ |
|---|---|---|---|---|---|---|---|
| MMAudio 44.1kHz | 40 | 0.336 | 3.909 | 6.192 | 17.873 | 195.910 | 1.364 |
| DACVAE MovieGen | 128 | 0.313 | 3.772 | 6.167 | 20.558 | 234.312 | 1.700 |
| SAME-L | 256 | 0.322 | 3.588 | 5.756 | 18.446 | 240.635 | 1.325 |
| KVAE-Audio | 64 | 0.344 | 3.982 | 6.242 | 15.381 | 193.760 | 1.210 |

KVAE-Audio 在 AudioCaps 上所有报告指标均领先。在 Song Describer 音乐生成上，MMAudio 的 CLAP 与 FAD 仍优于 KVAE-Audio；LibriSpeech 上 KVAE-Audio 的 WER 0.244 最低。三组音频 side-by-side 主观评测中，KVAE-Audio 对 MMAudio、SAME-L、DACVAE MovieGen 的 prompt following、technical quality、aesthetic quality 三项偏好胜率均为 0.54–0.74，其中对 MMAudio 的优势最窄。

### 🔬 细节详述

- 训练数据：视觉部分为 1000 万图像 + 200 万视频，来自生成模型预训练数据；音频部分为约 1 万小时筛选后的 48kHz 音频，混合开源与专有数据，并过滤高带宽为空的上采样文件。数据集未公开。
- 预处理与增强：视觉仅允许 flip、rotation、resize、crop，分辨率在训练阶段从 256 到 512；音频 crop 长度从 0.38 秒逐步增至 5 秒。
- 损失函数：视觉阶段一为 L1 + \(w_{\text{perc}}\cdot\)LPIPS + \(w_{\text{KL}}\cdot\)KL；阶段二加 GAN；阶段三加 EQ-loss（隐变量下采样、旋转等）；阶段四冻结编码器微调解码器。音频为 L1 + 多尺度频谱 L1 + KL + GAN + 感知损失 + 表示对齐正则，感知损失与对齐损失权重被限制在“不压过频谱项”的范围内。具体权重数值未说明。
- 训练策略：统一使用 Adam，每个阶段学习率固定，但学习率、batch size、训练步数、warmup 均未说明。视频 GAN 阶段有数千步 warm-up；视频序列从 65 帧开始训练，上限 129 帧；图像/视频混合采样概率为 0.3。
- 关键超参数：视频模型压缩因子为 4x8x8 与 4x16x16，通道数分别为 16 与 64；图像模型 8x8、32 通道；音频模型 48kHz、50Hz 隐空间、64 通道，stride [2,3,4,5,8]，参数量 166.9M。音频 bottleneck 含 1 个 self-attention block。
- 判别器：音频使用 period-based discriminator 与 spectral discriminator 的组合。
- 训练硬件：未说明。
- 推理细节：视觉模型支持长序列缓存机制，训练中最多 129 帧，测试可达 400 帧；对使用 full attention 的 Hunyuan 等基线采用 tiling；音频使用 windowed inference，但窗口大小与 overlap 未说明。重建实验统一使用后验均值而非采样值。
- 正则化/稳定训练技巧：空间 RMSNorm、KL 正则、GAN warm-up、EQ-loss、decoder fine-tuning。

### ⚖️ 评分理由

*   创新性 (1.3/2)：提出以高斯连续瓶颈替代离散码本的KVAE跨模态tokenizer家族，引入因果RMSNorm、不对称encoder-decoder、CDS筛选指标和固定生成器tokenizer-swap评估协议，属于工程组合创新，未突破latent diffusion基本范式，故给1.3分（依据A_METHOD、A_SUMMARY）。

*   技术严谨性 (1.3/1.5)：论文对架构、损失函数和训练策略给出详细公式和设计动机，空间RMSNorm、不对称解码器等均有合理因果解释，未发现推导错误或不合理假设，技术逻辑严密，故给1.3分（依据A_METHOD、SCORING_SOURCE_9）。

*   实验充分性 (1.0/1.5)：实验覆盖图像/视频/音频重建与生成，包含主观评测和消融；但主观评测未报告标注者数量与置信区间，音频生成在音乐/语音域未全面领先，视频对比缺少Cosmos等基线，CDS仅为样本内相关，实验证据不够完备，故给1.0分（依据A_RESULTS、A_LIMITS、SCORING_SOURCE_15）。

*   清晰度 (0.9/1)：报告结构清晰，各模态架构、训练阶段和评估流程均有公式与图表辅助说明，写作条理清楚，容易理解，故给0.9分（依据A_METHOD、A_RESULTS）。

*   影响力 (1.0/1.5)：KVAE-Audio贡献了48kHz全带宽连续tokenizer，对音频生成有实际价值；作为多模态技术报告，其影响力尚需社区验证，故给1.0分（依据A_SUMMARY、SCORING_SOURCE_17）。

*   开源 (1.2/1.5)：代码仓库公开，KVAE-Audio权重已明确发布，其他模型权重仅声称开源但未给出单独链接，按固定锚点判定核心产物开放但文档不完整，故给1.2分（依据A_OPEN）。

*   可复现性 (0.1/0.5)：论文披露了架构和部分超参数，但学习率、batch size、训练步数、硬件及感知/对齐损失具体配置均缺失，关键复现配置大量不足，故给0.1分（依据A_LIMITS、SCORING_SOURCE_22）。

*   工程/实践价值 (1.3/1.5)：论文给出了长序列缓存、windowed inference等推理细节和模型选择协议，展示了从设计到评估的完整工程链路，工程实践价值高，故给1.3分（依据A_METHOD、SCORING_SOURCE_17）。

### 🚨 局限与问题

1. 论文明确承认的局限：
   - 目前不存在统一的视觉/音频 tokenizer benchmark，作者只能自行组合数据集和评测流程。
   - CDS 与主观质量的关联是样本内相关性，不能证明 out-of-sample 预测能力；joint VAE-DiT 轨迹只有一条，不能视为通用训练规律。
   - 音频表示对齐目标、感知损失具体配置、判别器组合等被推迟到专门 publication。
   - 音频最优通道数依赖下游生成模型容量，0.6B 生成器下的 64 通道最优结论不能直接外推到更大模型；视频域 64 通道同时提升生成，说明通道数必须与压缩率、序列长度和生成器容量联合调节。
   - FAD 的三个 backbone 内部工作在 16–32kHz，对 16kHz 以上频段不敏感，不能用于判断“是否真正全带宽”。

2. 审稿人发现的潜在问题：
   - 主观评测没有报告标注者数量、一致性和统计误差；0.54–0.74 的胜率看起来稳定，但无法判断置信区间。
   - 音频生成结果中，KVAE-Audio 在音乐域 CLAP/FAD 不如 MMAudio，在语音域 SI-SDR/SDR 不如 MovieGen DACVAE；结论“全面超越”更多依赖主观偏好，读者需要谨慎区分。
   - 视频 tokenizer 的生成对比只覆盖 Hunyuan 和 Wan，缺少对 Cosmos、WF-VAE、CogVideoX 等同代方法的系统比较，实验广度没有达到“家族级 SOTA”宣称的高度。
   - 训练数据细节高度模糊：10M 图像和 2M 视频从预训练数据中挑选，但筛选标准、分布、重复性均未说明；音频 1 万小时来自哪些开源/专有数据也未交代。
   - 视觉 tokenizer 的“decoder 5.3 倍参数”对生成质量的作用只给了学习曲线，没有给出最终模型在相同训练步数下的 side-by-side 数值或显著性检验。

---

[← 返回 2026-08-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-07/)
