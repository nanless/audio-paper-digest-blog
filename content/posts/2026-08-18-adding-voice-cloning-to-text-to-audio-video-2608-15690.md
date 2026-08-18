---
title: "Adding Voice Cloning to Text-to-Audio-Video Models with a Single Zero-Initialised Layer"
date: 2026-08-18
draft: false
tags: [语音克隆, 扩散模型, 音视频生成]
categories: [论文速递]
description: "语音克隆 | 6.4/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.15690"
---

# 📄 Adding Voice Cloning to Text-to-Audio-Video Models with a Single Zero-Initialised Layer

标签：#语音克隆 #扩散模型 #音视频生成

**6.4/10** | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.8/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **6.4/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #语音克隆 | #扩散模型 | #音视频生成 | [arxiv](https://arxiv.org/abs/2608.15690)


### 👥 作者与机构

- 第一作者：Ivan Mikheev（Kandinsky Lab, Moscow, Russia）
- 通讯作者：Ivan Mikheev（Kandinsky Lab, Moscow, Russia）、Viacheslav Vasilev（Kandinsky Lab, Moscow, Russia）
- 作者列表：Ivan Mikheev（Kandinsky Lab, Moscow, Russia）、Viacheslav Vasilev（Kandinsky Lab, Moscow, Russia）、Anna Dmitrienko（Kandinsky Lab, Moscow, Russia）、Alexey Letunovskiy（Kandinsky Lab, Moscow, Russia）、Ivan Kirillov（Kandinsky Lab, Moscow, Russia）、Kirill Chernyshev（Kandinsky Lab, Moscow, Russia）、Denis Dimitrov（Kandinsky Lab, Moscow, Russia）

### 💡 毒舌点评

这项工作用“prepend 参考 latents + 单个零初始化 FiLM 层”这种轻量改造，在 5B T2AV 模型上把说话人相似度做到三个验证网络全榜第一，证明了大模型先验对声音克隆的价值；但论文的 WER/CER 明显高于专用 TTS（如 k6a_5b WER 5.76% vs. Qwen3-TTS 0.6B 的 0.81%），而且没有放出代码、权重或可下载模型，开源与复现贡献几乎为零。

### 📌 核心摘要

本文解决现有文本到音视频（T2AV）扩散模型无法控制合成语音中说话人身份的问题。方法核心是在预训练不对称 AV-DiT 的音频骨架上做两处轻量改造：将参考音频的 VAE latents 前置到目标音频 latent 序列中，并引入一个由冻结 Qwen3-TTS 说话人编码器驱动、经过单一零初始化线性层生成 scale/shift 的 FiLM 调制。与专用 TTS 或从头重训相比，该方法保留了原有 T2AV 能力，只增加一个线性层和短时 voice-aware fine-tuning。在 VCTK 的 674 样本、30 说话人评测上，增强后 k6a_5b 在 ECAPA-TDNN、WavLM-SV、Resemblyzer 三个说话人验证网络的 vs. reference 与 vs. centroid 共六个 SECS 指标上均最高，在三个验证网络上的平均差距为 0.041，领先最强外部基线 Qwen3-TTS 0.6B，Wilcoxon 符号秩检验 p<10^-89。其主要代价是 WER/CER 显著弱于专用 TTS（k6a_5b WER 5.76%，对比 Qwen3-TTS 0.6B 的 0.81%）。实际意义在于为已有 T2AV 模型增加个性化配音能力提供了低成本路径，并展示 audio-only 推理约 30 倍加速。作者还认为该 prepend+FiLM 配方可迁移到任意与冻结说话人编码器配合的不对称 AV-DiT。主要局限是未公开代码和权重、训练数据规模和构成未说明、评测语料仅覆盖英语 VCTK、语音可懂度与专用 TTS 仍有明显差距。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及本工作模型权重或下载链接；文中提到基座模型 Kandinsky 5.0 为 open-source model、NAVA 有公开 checkpoint，但均未给出具体 HuggingFace/ModelScope/GitHub 下载地址。
- 数据集：论文中未提及公开数据集名称、下载链接或开源协议；训练使用“large internal corpus of audio–video scenes”，评测为 674-sample benchmark，均未公开提供。
- Demo：论文中未提及。
- 复现材料：论文未提供代码和权重，但提供部分复现细节：零初始化 FiLM 层 \(W_{\text{film}}:\mathbb{R}^{1024}\to\mathbb{R}^{2d_a}\)；参考音频 VAE 潜变量前置；三路 CFG 公式 \(\hat{\epsilon}=\epsilon_{\varnothing}+w_t(\epsilon_{\text{text}}-\epsilon_{\varnothing})+w_r(\epsilon_{\text{full}}-\epsilon_{\text{text}})\)；AdamW，\((\beta_1,\beta_2)=(0.9,0.95)\)，weight decay \(10^{-3}\)，max grad norm \(1.0\)，base LR \(10^{-5}\)，\(W_{\text{film}}\) LR 乘数 \(5\times\)，warmup 8000 steps，text/ref drop 概率均为 0.1，modality-clean 10%/10%；默认推理 50 步，CFG \(w_t=5\)、\(w_r=4\)；audio-only 推理通过短接视频子块并跳过视频 VAE decoder，约 0.58B 参数、约 30× 加速。
- 论文中引用的开源项目：论文提及以下第三方项目/工具，但未给出具体 URL：Kandinsky 5.0、HunyuanVideo VAE、Qwen3-TTS（0.6B/1.7B）、XTTS-v2、IndexTTS2、NAVA、WavLM-SV、Resemblyzer、ECAPA-TDNN、CLAP、UTMOS。

### 🏗️ 方法概述和架构

整体来看，这是一个在预训练 T2AV 扩散模型上做条件扩展的方法流程：输入包括文本提示、可选参考音频和目标视频/音频 latent；模型在不改变原 AV-DiT 拓扑的前提下，通过在音频序列中前置参考 latent 和加入全局说话人 FiLM，实现参考说话人音色的克隆；输出为与文本和参考音色一致的目标音频（以及可选视频）。系统并非重新训练专用 TTS，而是对已有 T2AV checkpoint 进行单阶段 fine-tuning。

基础模型是一个不对称音视频扩散 Transformer（AV-DiT），包含 32 个 fused decoder blocks，视频流宽度 \(d_v=1792\)，音频流宽度 \(d_a=896\)，注意力头维度均为 64。每个 fused block 中，音频流和视频流通过 cross-modal attention 融合；文本条件由 2-block text encoder 注入两个流。音频 VAE 在 44.1kHz 下将音频编码为 latent，视频 VAE 采用 HunyuanVideo VAE。该架构基于 CrossDiT/Kandinsky 5.0 的 DiT 结构。论文使用两个 checkpoint：k5（5B 参数）和 k5-lite（总约 3B 参数，其中音频子网络约 0.6B 参数）。增强后模型分别记为 k6a_5b（5B checkpoint，完整音视频推理）和 k6av_lite（3B checkpoint，仅音频流推理）。

下图展示了AV-DiT架构中decoder transformer block的详细结构。

![Figure 1: Decoder transformer block for our AV-DiT architecture. Audio and video streams are fused using cross-attention. Each stream is based on the CrossDiT architecture (1).](https://arxiv.org/html/2608.15690v1/K6_block.jpg)

图中清晰地显示了音频和视频流如何通过自注意力和交叉注意力进行融合，每个流基于CrossDiT架构，并最终生成输出嵌入。


参考条件的引入分两条互补路径。第一条是前置参考 latents。给定目标音频序列 \(x_a=\mathrm{VAE}(a_{\text{target}})\in\mathbb{R}^{T_a\times d_a}\)，以及从同一场景中采样的 1.2–4 秒参考录音 \(a_{\text{ref}}\)，将参考录音用同一音频 VAE 编码后，直接拼接到目标 latent 前面：\(\tilde{x}_a=[\mathrm{VAE}(a_{\text{ref}})\|x_a]\in\mathbb{R}^{(T_{\text{ref}}+T_a)\times d_z}\)。在 32 个 fused decoder block 中，目标 token 通过已有 self-attention 机制 attend 到参考 token，无需新增注意力层。训练时参考来自同一说话人的同一音频记录的不同片段；推理时参考部分保持固定，扩散更新只作用于目标部分，迫使模型在去噪全程保持参考音色。

第二条是说话人 FiLM。使用冻结的 Qwen3-TTS 说话人编码器，为参考音频提取 1024 维全局说话人向量 \(e\)。一个新增线性层 \(W_{\text{film}}:\mathbb{R}^{1024}\to\mathbb{R}^{2d_a}\) 将 \(e\) 映射为缩放系数 \(\gamma\) 和偏移系数 \(\beta\)，并通过 FiLM 调制目标音频 token：\(h_a\leftarrow h_a\odot(1+\gamma)+\beta\)，其中 \((\gamma,\beta)=W_{\text{film}}(e)\)。参考 token 不被调制。\(W_{\text{film}}\) 的权重和偏置全部零初始化，因此在 fine-tuning 开始时 \((\gamma,\beta)=(0,0)\)，增强模型在第一个 forward pass 与基础 T2AV 输出完全一致。这一设计是论文称为“严格功能超集”的核心保障。

训练与推理采用三向 Classifier-Free Guidance。训练时以独立 0.1 概率丢弃文本条件和参考信号（参考 latents 与说话人 embedding 联合丢弃），得到无条件、仅文本、仅参考、文本+参考四种条件配置。推理时通过公式 \(\hat{\epsilon}=\epsilon_{\varnothing}+w_t(\epsilon_{\text{text}}-\epsilon_{\varnothing})+w_r(\epsilon_{\text{full}}-\epsilon_{\text{text}})\) 组合，\(w_t\) 控制文本提示遵循度，\(w_r\) 控制参考音色强度。默认 \(w_t=5\)，\(w_r=4\)，采用 50 个扩散步。训练期间另有 10% 的步骤将视频 latent 置零（audio-only loss）、10% 将音频 latent 置零（video-only loss），以维持原 AV 联合分布。

组件间数据流为：参考音频分别经过音频 VAE 得到参考 latents，并经过冻结说话人编码器得到 1024 维向量；参考 latents 前置到带噪目标 latents 序列，说话人向量经零初始化线性层产生 FiLM 调制；融合后的音频 latent 与视频 latent 在每个 fused block 通过 cross-attention 交互，最终音频部分经 VAE decoder 解码。整体没有新增注意力或递归模块，音频-only 推理时可直接短接视频子块。这一设计权衡了改动成本与音色控制强度，避免专用 speaker branch 的复杂结构，也保留原生成先验。

### 💡 核心创新点

1. **仅用单一零初始化线性层为 T2AV 模型加入语音克隆条件**。之前给大型多模态模型增加说话人控制通常需要专用 speaker branch 或昂贵重训；这里通过 \(W_{\text{film}}\) 零初始化，起步时模型输出与基础模型严格一致，训练后仅新增一个 \(1024\to 2d_a\) 映射即可注入说话人信息。证据：no-regression 实验中 fine-tuned 模型在无参考设置下各项指标不降反升。
2. **参考 latents 前置与目标 token 共同走原 self-attention，实现零新增注意力结构**。参考音频经同一音频 VAE 编码后拼在目标 latent 前，利用已有 32 个 fused block 的 self-attention 建立目标-参考依赖，避免增加 cross-attention 或额外 encoder。证据：在 VCTK benchmark 上 k6a_5b 六个 SECS 指标均最高。
3. **三路 split CFG 将文本遵循与参考音色强度解耦**。训练时独立丢弃文本和参考条件，推理时 \(w_t\) 与 \(w_r\) 各自调整；这比常见的单一 CFG 或简单拼接条件更灵活，可直接在部署中权衡音色保真和可懂度。证据：默认 \(w_t=5\)、\(w_r=4\) 下取得最佳说话人相似性；附录 C 显示 \(w_r\) 在 4–6 范围较好。
4. **从 AV-DiT 中提取 audio-only 推理路径，获得约 30 倍加速**。由于架构不对称，可在不改变权重的情况下短接视频子块，只运行约 0.58B 音频子网络，同时基本保持语音克隆能力。证据：k6av_lite 在 SECS 上相比 k6a_5b 只下降约 0.09，但推理成本显著降低。
5. **用“reference-free no-regression + human SBS”验证增强后模型仍是基础 T2AV 的严格功能超集**。这提供了比仅看克隆指标更稳健的保留能力证据。证据：FAD 相对下降 30.6%，WER 相对下降 46.0%，WER0 相对提升 113%，人类偏好胜率略高于基础模型。

### 📊 实验结果

实验在基于 VCTK 构建的语音克隆 benchmark 上进行：674 个 speaker–text 对、30 个英语母语说话人，每个说话人使用独立文本（5–16 词）；每个样本提供一条参考片段和三条同说话人 enrollment 片段。指标包括六项 SECS（ECAPA-TDNN、WavLM-base-plus-sv、Resemblyzer 分别对 reference 和 centroid 计算余弦相似度），以及 Whisper 转录的 WER/CER。所有系统在统一预处理后以 16 kHz 评估。k6a_5b 的生成时长按 prompt 词数自适应确定，TTS baselines 自行决定输出长度。

表 1 保留本方法 k6a_5b、最强外部基线 Qwen3-TTS 0.6B，以及 Qwen3-TTS 1.7B、IndexTTS2、XTTS-v2、NAVA 和本方法 audio-only 变体 k6av_lite；表 1 只列六项 SECS 和 WER/CER，不列原文 Table 1 的 WER0 列。

| 模型 | ECAPA ref | WavLM ref | Resembl. ref | ECAPA cent. | WavLM cent. | Resembl. cent. | WER% | CER% |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| k6a_5b (ours) | 0.766 | 0.944 | 0.866 | 0.770 | 0.951 | 0.878 | 5.76 | 5.21 |
| Qwen3-TTS 0.6B | 0.678 | 0.936 | 0.840 | 0.711 | 0.946 | 0.864 | 0.81 | 0.36 |
| Qwen3-TTS 1.7B | 0.674 | 0.938 | 0.839 | 0.709 | 0.951 | 0.864 | 0.74 | 0.17 |
| IndexTTS2 | 0.695 | 0.885 | 0.854 | 0.693 | 0.878 | 0.867 | 0.96 | 0.22 |
| XTTS-v2 | 0.575 | 0.923 | 0.816 | 0.611 | 0.940 | 0.841 | 1.14 | 0.32 |
| k6av_lite (ours) | 0.640 | 0.847 | 0.826 | 0.630 | 0.846 | 0.843 | 5.08 | 3.38 |
| NAVA | 0.624 | 0.852 | 0.759 | 0.625 | 0.850 | 0.780 | 5.82 | 3.21 |

表 1 的关键结论是：k6a_5b 在所有六项 SECS 上均排名第一，其中 WavLM-SV vs. reference 为 0.944，Resemblyzer vs. reference 为 0.866，ECAPA-TDNN vs. reference 为 0.766；三个验证网络上的平均差距为 0.041，领先最强外部基线 Qwen3-TTS 0.6B，配对 Wilcoxon 检验 p < 10^-89。可懂度上专用 TTS 明显更好：Qwen3-TTS 0.6B 的 WER/CER 为 0.81%/0.36%，而 k6a_5b 为 5.76%/5.21%。k6av_lite 平均 SECS 较完整 k6a_5b 约低 0.09，WER 为 5.08%，但 audio-only 推理带来约 30 倍加速。

为检验参考感知 fine-tuning 没有破坏原有音频生成能力，论文在 400 个无参考 prompt 上比较基础模型与 fine-tuned 模型。表 2 保留六项客观指标的相对变化。

| 指标 | 相对变化 |
|---|---:|
| FAD vs. real speech ↓ | −30.6% |
| WER ↓ | −46.0% |
| CER ↓ | −47.0% |
| WER0（完美转录样本）↑ | +113% |
| CLAP text–audio ↑ | +29.4% |
| UTMOS naturalness ↑ | +0.6% |

表 2 显示 fine-tuned 模型在所有客观指标上均朝改善方向变化，没有出现基础音频生成回归。人类 SBS 研究在 100 个 text-to-audio prompt 上同样显示 fine-tuned 模型在三轴 win rate 为 52%–57%，略高于基础模型。附录 C 的 82 次扫描给出的因素分析结论为：参考长度在约 4 秒前 SECS 单调上升，之后饱和；参考 CFG 权重 w_r 最佳区间为 4–6；30 个扩散步后 SECS 基本饱和；语言不匹配会使平均 SECS 降低约 0.05；对干净参考额外做降噪/VAD 可能略微损害 SECS。

### 🔬 细节详述

- **训练数据**：论文中未给出训练数据的名称、具体规模或来源；仅描述为“large internal corpus of audio–video scenes”。训练样本来自 parquet 记录，目标音频通常为 5 秒与视频 latent 对齐的片段；参考窗口从同一剪辑剩余音频中采样，目标与参考之间保留 0.5 秒缓冲以避免简单复制。语音参考时长 1.2–2.5 秒，来自 12 秒搜索窗口；非语音参考 1.5–3.5 秒，来自 3.5 秒搜索窗口。过滤规则包括最小 RMS 和最大 clipping ratio 质量过滤。数据增强未明确提及。
- **损失函数**：论文未明确写出损失函数名称和公式。从使用扩散模型、ε 预测和 CFG 的上下文看，应为基于噪声预测的扩散损失，但论文没有提供具体目标函数、加权方式或 latent 损失细节。
- **训练策略**：优化器为 AdamW，β=(0.9,0.95)，weight decay 1e-3，max grad norm 1.0。基础参数学习率 1e-5，新增线性层 \(W_{\text{film}}\) 及其 bias 的学习率倍率为 5×。使用 8000 步 warmup 后 constant LR。batch size 和总训练步数/轮数未说明。参考条件丢弃概率 0.1，文本条件丢弃概率 0.1。10% 训练步将视频 latent 置零（audio-only loss），10% 将音频 latent 置零（video-only loss）。
- **关键超参数**：k5 为 5B 参数；k5-lite 总约 3B，其中音频流约 0.6B。32 个 fused decoder blocks；视频宽度 \(d_v=1792\)，音频宽度 \(d_a=896\)，注意力头维度 64；2-block text encoder。音频 VAE 为 44.1kHz 神经音频 VAE；视频 VAE 为 HunyuanVideo VAE。Qwen3-TTS 说话人编码器输出 1024 维，运行在 24kHz。默认推理步数 50，CFG 权重 \(w_t=5\)、\(w_r=4\)。生成目标音频时长根据单词数计算：\(seconds = words/2.6 + 1.3\)，clamp 到 \([4,12]\) 秒。
- **训练硬件**：论文中未提供 GPU/TPU 型号、数量或训练时长。
- **推理细节**：推理时扩散更新仅作用于目标部分，参考 latents 部分保持固定；分割 CFG 使用式 \(\hat{\epsilon}=\epsilon_{\varnothing}+w_t(\epsilon_{\text{text}}-\epsilon_{\varnothing})+w_r(\epsilon_{\text{full}}-\epsilon_{\text{text}})\)。audio-only 推理时短接每个 fused decoder block 的视频子块，不计算 1792 维视频 self-attention 和 FiLM，跳过视频 VAE decoder，每步从 3.18B 联合模态前向降至约 0.58B 音频前向，约 30 倍加速。基准评测中 k6a_5b/k6av_lite 使用固定种子。
- **正则化或稳定训练技巧**：\(W_{\text{film}}\) 零初始化；max gradient norm 1.0；weight decay 1e-3；10% 无参考/无其他模态的 modality-clean schedule 维护原 AV 分布；使用冻结说话人编码器，避免该模块被更新。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 通过 prepend 参考 latents 和单一零初始化 FiLM 层把冻结说话人向量注入音频骨干，保留原 AV-DiT 拓扑；[A_SUMMARY] 还引入三路 split CFG 解耦文本遵循与音色强度，构成轻量且可迁移的条件扩展方案，新颖性体现在低改动组合而非单一组件。

*   技术严谨性 (1.1/1.5)：[A_METHOD] 零初始化保证增强模型初始输出与基础模型一致，prepend 复用现有 self-attention，参考与文本独立丢弃并配合 modality-clean 维护联合分布，核心逻辑自洽；[A_LIMITS] 指出三路 CFG 训练含四种条件而推理式只用三项，仅参考条件存在覆盖缺口，但不否定核心路径有效性。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 在 VCTK 674 样本上比较五个外部 TTS 基线，报告六项 SECS 与 WER/CER，并有 Wilcoxon 检验，还做 no-regression 客观和人类 SBS 及因子扫描，证据较为完整；但 [A_LIMITS] 缺少 prepend 与 FiLM 的单独消融，且评测仅限英语单一语料，未做跨数据集或多语言验证。

*   清晰度 (0.8/1)：[A_METHOD] 清楚给出 prepend 和 FiLM 公式以及三路 CFG 推理式；[A_RESULTS] 表 1 和表 2 直观呈现主要结果；但 [SCORING_SOURCE_1/1] 未显式给出训练损失方程，使方法全貌需读者结合扩散背景补充，因此给 0.8。

*   影响力 (0.8/1.5)：[A_SUMMARY] 展示在已有 T2AV 模型中加入语音克隆的低成本路径，并在六项说话人相似度上取得统一领先，对语音领域有方法启发；但 [A_RESULTS] 中 WER/CER 显著弱于专用 TTS，限制其作为通用高可懂度语音克隆替代的直接影响，故给 0.8。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 给出了 prepend/FiLM 公式、CFG 推理式、优化器、学习率、drop 概率和推理步数等配置；但 batch size、总训练步数/轮数和训练硬件未披露，训练阶段复现仍有关键缺口，因此给 0.3。

*   工程/实践价值 (1.2/1.5)：[A_METHOD] 仅新增一个线性层并复用现有注意力结构，避免专用 speaker branch，降低训练改动成本；[A_RESULTS] audio-only 路径把每步从约 3.18B 联合模态降到约 0.58B，实现约 30 倍加速并保留语音克隆行为，适合快速试听与部署评估。

### 🚨 局限与问题

1. **论文明确承认的局限**：
   - k6a_5b 在 WER/CER 上显著弱于专用 TTS 基线，幻觉词现象会抬高 WER，作者归因于 AV 先验以忠实复制参考音色为代价。
   - 语言不匹配会使平均 SECS 降低约 0.05，建议 prompt 与参考语言匹配。
   - 对干净参考音频做额外降噪/VAD 预处理可能略微损害 SECS。
   - audio-only 变体 k6av_lite 相比完整 k6a_5b SECS 平均低约 0.09。
   - 参考长度低于 2 秒时说话人相似性下降。
   - 作者还提到未来可加入 CTC 等文本保真损失以缩小 WER 差距。

2. **审稿人发现的潜在问题**：
   - 缺乏严格组件消融：无法区分参考 latents 前置和说话人 FiLM 各自对 SECS 的贡献，附录 factor study 仅扫描超参数，未做“去掉 prepend 或去掉 FiLM”的必要因果验证。
   - 评测集只有 VCTK 英语 30 人，样本规模偏小且单一，跨域泛化和多语言性能未被证实。
   - 论文声称的 SOTA 仅限 SECS 维度，在 WER/CER、自然度等生产指标上落后；这种“相似度最高但可懂度差”的状态可能被过度解读为更优语音克隆模型。
   - 训练数据规模和组成未披露，导致噪声水平、说话人多样性、文本覆盖等可能有利于内部 AV 模型在 VCTK 上的表现，外部对比公平性难以判断。
   - 参考 latents 前置在长参考或长目标音频时可能引起序列长度开销，论文未分析计算成本随参考长度如何变化。
   - CFG 训练中用独立 0.1 丢弃文本和参考，但推理式仅涉及三个条件项，未讨论四种训练配置与推理三项之间是否完整覆盖，可能存在条件分布缺口。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
