---
title: "MiDashengLM-Gen: Unified Audio Scene Generation via LLM-Driven Autoregressive Flow Matching"
date: 2026-08-13
draft: false
tags: [音频生成, 大语言模型, 模型评估]
categories: [论文速递]
description: "音频生成 | 8.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.11804"
---

# 📄 MiDashengLM-Gen: Unified Audio Scene Generation via LLM-Driven Autoregressive Flow Matching

标签：#音频生成 #大语言模型 #模型评估

**8.0/10** | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1/1.5

🔥 **8.0/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #音频生成 | #大语言模型 | #模型评估 | [arxiv](https://arxiv.org/abs/2608.11804)


### 👥 作者与机构

- 第一作者：Xingwei Sun（MiLM Plus, Xiaomi Inc., Beijing, China）
- 通讯作者：未说明
- 作者列表：
  - Xingwei Sun（MiLM Plus, Xiaomi Inc., Beijing, China）
  - Heinrich Dinkel（MiLM Plus, Xiaomi Inc., Beijing, China）
  - Gang Li（MiLM Plus, Xiaomi Inc., Beijing, China）
  - Jiahao Mei（MiLM Plus, Xiaomi Inc., Beijing, China；X-LANCE Lab, Shanghai Jiao Tong University, Shanghai, China）
  - Yadong Niu（MiLM Plus, Xiaomi Inc., Beijing, China）
  - Zerui Han（MiLM Plus, Xiaomi Inc., Beijing, China）
  - Yuepeng Jiang（MiLM Plus, Xiaomi Inc., Beijing, China）
  - Jiahao Zhou（MiLM Plus, Xiaomi Inc., Beijing, China）
  - Lichun Fan（MiLM Plus, Xiaomi Inc., Beijing, China）
  - Jian Luan（MiLM Plus, Xiaomi Inc., Beijing, China）

### 💡 毒舌点评

本文最亮眼的是把统一场景模型里的语音可懂度从不可用拉到接近专用 TTS 的水平，并且公开了代码与权重，对实际使用者有直接价值。但"统一"的代价也很清晰：语音强项很大程度上是以牺牲音频保真度为代价换来的。在 AudioCaps 的 FAD、FD、KL 三项指标上，本文不仅落后专用 TangoFlux，也落后非自回归的 Dasheng AudioGen；MECAT 含语音混合类别的 FD/KL 同样多处落后。论文自称为"first end-to-end trained model for general text-to-audio generation"，这个 claim 有架构层面的合理性，但距离一个真正的全域统一 SOTA 还有明显距离。

### 📌 核心摘要

1. 要解决问题：生成语音、音乐、环境音可同时存在且相互协调的复杂音频场景，现有专用模型无法处理重叠声源，先前统一模型则受固定长度、冻结文本编码器和语音清晰度差困扰。
2. 方法核心：将预训练 LLM（Qwen3-1.7B）与逐 token 条件流匹配结合，用同一 LLM 联合编码多视图结构化文本和音频 latent，再通过 DiT 逐 token 生成连续语义-声学 latent，经 DashengTokenizer 解码器和 Vocos 合成波形。
3. 与已有方法相比新在哪里：相比 Dasheng AudioGen 的冻结文本编码器 + 非自回归扩散，本工作用 LLM 统一文本/音频建模，加入音频-文本对齐预训练、per-token flow matching 和 learned stop head，实现端到端变长生成；论文还提出了一个跨 LLM 规模和 latent 维度成立的收敛条件：DiT 宽度必须严格大于音频 latent 维度。
4. 主要实验结果：Seed-TTS English WER 从 Dasheng AudioGen 的 12.15% 降至 2.79%，接近专用 Qwen3-TTS 的 1.24%；中文 CER 从 >100% 降至 3.87%；多语言平均 WER 从 31.73% 降至 7.68%（消融对比）；MECAT 含语音混合类别 FAD 多处优于基线，但 FD/KL 部分落后。AudioCaps 上 FAD 5.01 领先于 UniFlow-Audio 但落后 TangoFlux 和 Dasheng AudioGen；MusicCaps 上 FD 14.58 优于 Dasheng AudioGen 的 18.45。
5. 实际意义：为电影、游戏、沉浸式媒体等需要混合音景的应用提供了统一、多语言、变长生成的开源参考系统，工程参考价值明确。
6. 主要局限性：输出时长受 1–20 秒训练分布限制，低资源语言语音清晰度有限，缺少语音克隆和细粒度说话人控制，纯音效/音乐保真度未全面超越专用模型。

### 🔗 开源详情

论文原文明确给出代码与模型权重获取方式：代码仓库为 `https://github.com/xiaomi-research/midashenglm-gen`；模型 checkpoint 为 `https://huggingface.co/mispeech/midashenglm-gen`；demo 页面为 `https://xingws.github.io/midashenglm-gen-demo/`。对应机器摘要资源状态为 `has_code=是`、`has_model=是`、`has_dataset=否`。论文未披露仓库许可证、文档完整度、checkpoint 配置细节与训练数据发布范围，也未说明核心私有 ACAVCaps 超集是否可获取；因此只能确认代码、模型权重与 demo 页面已公开，无法判定为完整可复现发布。

### 🏗️ 方法概述和架构

MiDashengLM-Gen 是端到端统一音频场景生成系统，输入为结构化多视图文本描述，输出 16 kHz 单声道混合音频波形。它并不是简单串联已有模块，而是将预训练 LLM 作为文本与音频 latent 的统一序列模型，并通过逐 token 连续流匹配进行生成。整体流程为：结构化 caption 经 LLM 编码，LLM 在音频位置输出隐状态；每个隐状态作为条件驱动一个 DiT 流匹配解码器生成对应的一组连续音频 latent；生成后的 latent 序列经 DashengTokenizer 解码器和 Vocos 恢复波形。训练分为音频-文本对齐预训练和生成训练两个阶段，其中对齐预训练被消融证明是生成训练收敛的必要前提。

主要组件包括：

下图展示了整个系统的训练流程，包括各个组件的交互关系。

![(a) Training pipeline with flow matching loss.](https://arxiv.org/html/2608.11804v1/train.png)

图中可以看到，结构化多视图文本和音频 latent 共同输入 Decoder-Only LLM，LLM 输出的隐状态驱动 Per Token Diffusion Head (DiT) 进行流匹配训练，而 DashengTokenizer Encoder 和 Audio Adapter 在此阶段是冻结的。


第一，**DashengTokenizer 音频编码器**，来自 MiDashengLM-0.6B，遵循 DashengTokenizer 架构，在 25 Hz 产生 768 维连续 latent，保留语义和声学信息。与低维 VAE latent 相比，该高维语义-声学 latent 缩短了文本到音频的跨模态映射距离。为降低 LLM 序列长度，音频适配器将每 \(k=5\) 帧 concat 后通过 MLP 投影到 LLM 的 2048 维空间，得到 5 Hz（200 ms/token）的音频 token latent，公式为 \(\mathbf{a}_i = \mathrm{MLP}(\mathrm{concat}(\mathbf{z}_{(i-1)k+1}, \ldots, \mathbf{z}_{ik})) \in \mathbb{R}^{d_{\text{llm}}}\)。

第二，**LLM backbone** 采用 Qwen3-1.7B，对文本和音频序列做因果建模。输入为结构化 caption 与 `<|audio_bos|>` 及音频 token latent 的拼接，输出每个音频位置的 hidden state \(\mathbf{h}_i\)。该 hidden state 汇总前置文本语义、历史音频信息和位置信息，作为生成第 \(i\) 个音频 token 的条件。训练时使用 ground-truth 音频 latent 序列，推理时自回归生成。

第三，**结构化多视图 caption** 将场景拆为六类视图：全局描述、ASR 文本、说话人身份/风格、音效、音乐和录音环境，每类由特殊 token 标记（如 `<|caption|>`、`<|asr|>`、`<|speech|>`、`<|sfx|>`、`<|music|>`、`<|env|>`），缺省填 `<|unknown|>`。该设计通过显式特殊 token 将不同语义视图暴露给 LLM，降低控制因素之间的语义纠缠。全局描述必须包含，其余字段在适用时使用。

第四，**per-token 条件流匹配 DiT**，对每个 token \(i\) 生成 \(k=5\) 帧 ground-truth latent。训练时由标准高斯噪声 \(\mathbf{z}_0^{(i)}\) 和 ground-truth \(\mathbf{z}_1^{(i)}\) 线性插值得到 \(\mathbf{z}_t^{(i)} = (1-t)\mathbf{z}_0^{(i)} + t\,\mathbf{z}_1^{(i)}\)，DiT 预测条件向量场 \(v_\theta(\mathbf{z}_t^{(i)}, t, \mathbf{h}_i, \mathbf{z}_{\text{hist}}^{(i)})\)，目标为 \((\mathbf{z}_1^{(i)} - \mathbf{z}_0^{(i)})\)，损失为掩码 MSE，仅对有效（非 padding）音频位置计算。DiT 包含 16 层、hidden 2048、8 个注意力头、MLP ratio 4.0，使用 RoPE 自注意力和 FFN，条件包括 LLM hidden state、timestep 和前一组 latent history。

第五，**learned stop head** 基于 LLM hidden state 做 continue/stop 二分类，用 balanced cross-entropy 训练，配合 hard negative mining（从最低置信度的非停止 token 中挖掘困难负样本），损失权重 \(\lambda=0.01\) 与流匹配损失联合优化。推理时在最小步数 \(i_{\min}=5\)（约 1 秒）后按阈值 \(\tau=0.5\) 停止，从而支持变长生成。

第六，**音频-文本对齐预训练**通过通用音频 caption 监督，使音频适配器把 DashengTokenizer encoder latent 映射到 LLM 语义空间。消融显示缺少该阶段会导致 AudioCaps FAD 从 5.01 恶化到 9.39、Seed-EN WER 从 2.79% 恶化到 12.17%，证明对齐阶段是跨模态生成的关键前提。对齐阶段的具体损失函数和训练配置论文未详细说明。

推理阶段使用 10 步 Euler ODE 求解，CFG scale 为 2.0。训练时随机将 LLM 条件替换为可学习 null embedding 以支持 classifier-free guidance，CFG 推理公式为 \(\hat{v} = v_\theta(\mathbf{z}_t, t, \varnothing, \mathbf{z}_{\text{hist}}) + w \cdot (v_\theta(\mathbf{z}_t, t, \mathbf{h}_i, \mathbf{z}_{\text{hist}}) - v_\theta(\mathbf{z}_t, t, \varnothing, \mathbf{z}_{\text{hist}}))\)。生成后的 latent 经 5× 卷积上采样器和 Vocos vocoder 恢复为 16 kHz 波形。模型训练时冻结 DashengTokenizer 编码器、音频适配器、上采样器和解码器，仅训练 LLM、DiT 和 stop head。关键设计动机包括：用 LLM 替代冻结文本编码器以改善跨模态优化和多语言建模；用连续高维 latent 而非离散 token 避免量化损失；用逐 token FM 保持自回归灵活性和时长控制；以及保证 DiT 宽度严格大于音频 latent 维度以确保收敛。

### 💡 核心创新点

LLM 驱动的统一音频场景生成框架
   之前 Dasheng AudioGen 使用冻结文本编码器和非自回归扩散，文本语义与音频生成分离，且输出固定长度。本工作将 LLM 同时作为文本编码器和音频序列建模器，以 hidden state 驱动逐 token flow matching，使文本理解与音频生成在同一模型内联合优化。收益是语音清晰度大幅提高，尤其 Seed-TTS English WER 从 12.15% 降至 2.79%。论文将其定位为"one end-to-end trained model for general text-to-audio generation"的首个方案，这一 claim 在架构层面成立。

音频-文本对齐预训练
   之前统一模型常直接训练跨模态映射，LLM 的文本空间难以直接解释高维音频 latent。本工作在生成训练前用通用 caption 监督训练音频适配器，将 DashengTokenizer latent 映射到 LLM token 空间。消融表明移除该阶段会使 Seed-EN WER 恶化 4.4 倍、多语言平均 WER 恶化 4.1 倍，证明对齐阶段是关键前提。

逐 token 条件流匹配与 learned stop head 的变长生成
   相比非自回归模型固定时长，本工作以 LLM 自回归方式逐 token 生成连续 latent，并用 stop head 决定终止。它保留了变长输出能力，同时避免离散 token 量化损失。实验显示在含语音混合类别取得更低 FAD，并支持多语言变长场景生成。

下图展示了模型在推理阶段的自回归生成流程。

![(b) Inference pipeline with autoregressive generation.](https://arxiv.org/html/2608.11804v1/infer.png)

图中可见，LLM 根据文本和已生成的音频 token 序列自回归地输出隐状态，每个隐状态指导一个 DiT 模块生成对应的音频 latent，最终由 DashengTokenizer Decoder 解码为波形，实现了变长音频输出。


DiT 宽度必须严格大于 audio latent 维度的收敛条件
   论文通过单样本过拟合实验和多尺度验证（不同 LLM 规模与 latent 维度）发现：DiT 隐藏宽度必须严格超过 latent 维度，否则无法收敛。当宽度等于 768 时训练损失 0.0343 不收敛，宽度 784 时损失 0.0171 成功收敛；该模式在 768-dim + Qwen3 0.6B/4B 和 1280-dim 设置下均成立。该发现给出了高维语义-声学 latent 用于 LLM 条件 flow matching 的结构性约束，与图像扩散中 Zheng et al. 的理论发现一致，对后续模型设计具有直接参考价值。但需注意这是经验观察，论文并未提供严格理论证明。

### 📊 实验结果

论文在 AudioCaps、MusicCaps、Seed-TTS、多语言 TTS、CV3-Eval 情感集和 MECAT 混合音频基准上评估。对比基线包括 TangoFlux、MusicGen、Qwen3-TTS、Dasheng AudioGen、F5-TTS、CosyVoice3 系列、MiniMax-Speech 等。论文 Table 1 的能力对比显示，MiDashengLM-Gen 是所比较模型中唯一同时支持变长生成、音效、音乐、语音、场景混合和多语言的系统。

在单类生成上，MiDashengLM-Gen 在 AudioCaps 的 FAD 为 5.01，落后专用 TangoFlux 的 2.26，也落后 Dasheng AudioGen 的 3.19；FD 为 26.13（TangoFlux 19.13，Dasheng 26.06），KL 为 1.91（TangoFlux 1.19，Dasheng 1.86），CLAP 为 0.36（TangoFlux 0.58，Dasheng 0.44），均未达到最强基线水平。MusicCaps 上 FD 为 14.58，优于 Dasheng AudioGen 的 18.45；KL 为 1.24，优于 1.37；但 FAD 为 2.28，落后 Dasheng AudioGen 的 1.37；CLAP 为 0.33 与 Dasheng 持平。

语音方面，Seed-TTS English WER 为 2.79%，显著优于 Dasheng AudioGen 的 12.15%，接近 Qwen3-TTS 的 1.24% 和 Seed-TTS 的 2.25%；中文 CER 为 3.87%，远优于 Dasheng AudioGen 的 >100%，但高于 Qwen3-TTS 的 0.77% 和 Seed-TTS 的 1.12%。多语言 9 语言中，英文 WER 2.42%、中文 CER 3.51%、西班牙语 WER 3.11%、葡萄牙语 WER 8.04%、德语 WER 4.38%、韩语 CER 5.49%，但俄语 WER 13.19%、法语 WER 12.53%、日语 CER 16.45%，低资源语言仍有明显差距。与 Dasheng AudioGen 的多语言结果（如中文 99.62%、日语 109.21%、韩语 100.25%）相比，提升幅度极大。

情感实验在 text-related 三类 happy/sad/angry 准确率为 0.98/0.96/0.92，高于所比对的 F5-TTS、CosyVoice3-1.5B 和 CosyVoice3DiffRO-EMO；text-unrelated 下 happy/sad/angry 为 0.78/0.52/0.62，其中 sad 准确率 0.52 最高，但 happy 和 angry 落后 CosyVoice3DiffRO-EMO（0.98/0.68）。

MECAT 基准上，单类 00A 中，Dasheng AudioGen FAD 4.25 优于本方法 6.05，FD 19.37 vs 18.74、KL 1.36 vs 1.32 本方法略优；0M0 中 FD 从 14.90 降至 6.82 改善明显，FAD 1.97 vs 1.66 略差，KL 0.57 vs 0.61 略优；S00 中 FAD 从 1.76 降至 0.87，CLAP 0.34 升至 0.35，但 FD 4.15 vs 3.93、KL 0.44 vs 0.40 略差。混合类中，含语音类别 FAD 均优于 Dasheng AudioGen：S0A 1.54 vs 1.75、SM0 0.98 vs 1.70、SMA 1.88 vs 2.17；但 FD/KL 在这些类别上多不如 Dasheng AudioGen，如 S0A FD 8.84 vs 8.56、KL 0.72 vs 0.69；SM0 FD 6.78 vs 6.69、KL 0.40 vs 0.34；SMA FD 20.60 vs 17.75、KL 0.85 vs 0.63。非语音混合类 0MA 上，Dasheng AudioGen FAD 3.86 优于本方法 4.23，本方法 FD 28.32 vs 31.13、KL 1.25 vs 1.36 略优。

消融方面，去除音频-文本对齐后，AudioCaps FAD 从 5.01 恶化到 9.39，MusicCaps FAD 从 2.28 恶化到 4.06，Seed-EN WER 从 2.79% 恶化到 12.17%，Seed-ZH CER 从 3.87% 恶化到 14.17%，多语言平均 WER 从 7.68% 恶化到 31.73%，MECAT Single FAD 从 1.86 恶化到 3.18，MECAT Mixed FAD 从 1.35 恶化到 2.46。DiT 宽度实验中，当宽度等于 768（与 audio latent 维度相同）时训练损失 0.0343、无法收敛；宽度 784 时损失 0.0171、成功收敛，验证宽度必须严格大于 latent 维度的结论。

为验证 DiT 宽度与音频 latent 维度的关系，下图展示了不同 DiT 宽度/深度配置下的训练损失和重构 STFT L2 距离曲线。

![Figure 3: Training loss and STFT L2 distance curves for different DiT width/depth configurations. Topline denotes DashengTokenizer encode-to-decode reconstruction.](https://arxiv.org/html/2608.11804v1/metrics_curves.png)

曲线显示，当 DiT 隐宽（768d）等于音频 latent 维度时模型无法收敛（损失不降），而略大于（784d）或更大宽度则能成功收敛并达到接近 DashengTokenizer 编解码重构的 topline 性能。


表中保留主方法、最强基线与关键消融项。

| Method | EN WER(%) ↓ | ZH CER(%) ↓ |
|---|---:|---:|
| Seed-TTS | 2.25 | 1.12 |
| Qwen3-TTS | 1.24 | 0.77 |
| Dasheng AudioGen | 12.15 | >100 |
| MiDashengLM-Gen | 2.79 | 3.87 |

| Benchmark / Metric | w/o Align | MiDashengLM-Gen |
|---|---:|---:|
| AudioCaps FAD ↓ | 9.39 | 5.01 |
| MusicCaps FAD ↓ | 4.06 | 2.28 |
| Seed-TTS EN WER(%) ↓ | 12.17 | 2.79 |
| Seed-TTS ZH CER(%) ↓ | 14.17 | 3.87 |
| Multilingual Mean WER(%) ↓ | 31.73 | 7.68 |

### 🔬 细节详述

- **训练数据**：私人 ACAVCaps 超集 77k 小时，来自 ACAV100M，覆盖语音、音乐、音效，使用多专家标注转换为结构化多视图 caption；另有专用 TTS 语料：Emilia（中英文子集）、LibriTTS、LJSpeech、AISHELL-3、WenetSpeech4TTS。TTS 数据统一预置通用 caption “natural human speech”。音频输入 1–20 秒、16 kHz。论文 Table 2 语言分布中，总体英文占比 53.82%，中文 24.46%；ACAVCaps S00 子集中英文占 58.86%，其他语言如西班牙语 10.50% 也有一定规模，但中文仅 0.27%；TTS 数据英文 51.90%、中文 48.10%。俄语、法语、日语、韩语在总体中占比约 1.7–2.5%。
- **损失函数**：流匹配损失为条件向量场 MSE，目标为 \(\mathbf{z}_1 - \mathbf{z}_0\)，仅对有效音频位置计算；停止损失为 balanced cross-entropy，采用 hard negative mining（从最低置信度的非停止 token 中挖掘困难负样本），权重 \(\lambda=0.01\)。对齐阶段具体损失函数未说明。
- **训练策略**：AdamW（8-bit），学习率 \(5\times10^{-5}\)，cosine decay 到 \(1\times10^{-6}\)，batch size 16，梯度裁剪 1.0，训练 800 epochs × 2000 iterations。CFG 训练时随机将 LLM 条件替换为可学习 null embedding，但替换概率未说明。主训练阶段冻结 DashengTokenizer encoder、音频适配器、上采样器和解码器，仅训练 LLM、DiT 和 stop head。
- **关键超参数**：LLM 为 Qwen3-1.7B，全量微调；DashengTokenizer encoder 输出 25 Hz、768 维；音频投影到 5 Hz token 并映射到 LLM 2048 维空间；DiT 16 层、hidden 2048、8 头、MLP ratio 4.0。Flow matching 使用 10 步 Euler 求解，CFG scale 2.0，stop threshold \(\tau=0.5\)，最小步数 \(i_{\min}=5\)（约 1 秒）。
- **训练硬件**：论文中未提及 GPU/TPU 型号、数量及训练时长。
- **推理细节**：自回归生成逐 token，每个 token 用 10 步 ODE 求解；停止头判断终止；DashengTokenizer decoder 的 5× 卷积上采样器后接 Vocos vocoder 输出 16 kHz 波形。未见温度、beam search 等离散解码参数。
- **正则化或稳定训练技巧**：梯度裁剪、8-bit AdamW、balanced stop loss with hard negative mining。其他训练稳定性技巧未说明。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_METHOD] [A_SUMMARY] 提出用LLM统一文本与音频latent建模并以逐token条件流匹配实现变长混合音景生成，替代冻结文本编码器加非自回归扩散的旧路线，并给出DiT宽度须大于音频latent维度的收敛条件。

*   技术严谨性 (1.2/1.5)：[A_METHOD] [A_RESULTS] 对LLM backbone、DashengTokenizer、per-token条件流匹配、stop head和CFG推理给出明确公式与训练目标，并通过对齐消融和DiT宽度实验验证关键组件因果。

*   实验充分性 (1.2/1.5)：[A_RESULTS] 在AudioCaps、MusicCaps、Seed-TTS、多语言TTS、CV3-Eval与MECAT多个基准上对比专用和统一基线，并对音频-文本对齐及DiT宽度做消融，证据覆盖较完整。

*   清晰度 (0.8/1)：[A_METHOD] [A_SUMMARY] 方法按音频编码、LLM序列建模、结构化多视图caption、DiT流匹配、stop head和对齐预训练分组件说明，公式与推理流程清晰。

*   影响力 (1.0/1.5)：[A_SUMMARY] 将统一模型语音可懂度从12.15% WER改善至2.79%，并支持多语言变长混合音景生成，对电影、游戏和沉浸式媒体有明确吸引；但纯音效/音乐保真度未全面超越专用最强基线，限制部分单一音效场景。

*   开源 (1.2/1.5)：[A_OPEN] 代码仓库、模型checkpoint与demo页均已公开，核心产物开放；但仓库许可证与文档完整度未说明，因此按固定锚点给1.2。

*   可复现性 (0.3/0.5)：[A_METHOD] [A_LIMITS] 已披露架构、主训练超参数与推理设置，但训练硬件、训练时长、对齐阶段具体损失和CFG随机替换概率缺失，且核心ACAVCaps训练数据未公开，关键复现配置不足。

*   工程/实践价值 (1.0/1.5)：[A_METHOD] [A_SUMMARY] 提供端到端变长、多语言、混合场景生成系统，可支撑电影、游戏、沉浸式媒体等需要语音、音乐与音效协同的工程管线。

### 🚨 局限与问题

1. **论文明确承认的局限**：可变长生成受训练数据 1–20 秒范围限制；语音清晰度仍比专用 TTS 差约 2.2 倍（英语），低资源语言差距更大；仅支持粗粒度说话人风格控制，不支持 voice cloning 或显式说话人身份条件。
2. **论文承认或由实验体现的保真度局限**：在 AudioCaps 上 FAD、FD、KL、CLAP 均未达到 TangoFlux 或 Dasheng AudioGen 的最优水平；纯音效/音乐保真度未全面超越专用模型或最强基线。
3. **复现与评估局限**：论文未披露训练硬件、训练时长、对齐阶段具体损失函数、CFG 随机替换概率、数据混合与清洗流程，且核心训练数据 ACAVCaps 超集未公开，影响完全复现；MECAT 语音相关客观指标仅在英语子集上比较，部分结论的跨语言泛化证据有限。

---

[← 返回 2026-08-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-13/)
