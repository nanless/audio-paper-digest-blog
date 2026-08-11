---
title: "CtrlSpeech: Coarse-to-Fine Control for Expressive Speech Synthesis"
date: 2026-08-11
draft: false
tags: [语音合成, 扩散模型, 语音克隆, 自回归模型, 零样本]
categories: [论文速递]
description: "语音合成 | 6.4/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.08362"
---

# 📄 CtrlSpeech: Coarse-to-Fine Control for Expressive Speech Synthesis

标签：#语音合成 #扩散模型 #语音克隆 #自回归模型 #零样本

**6.4/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.9/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **6.4/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #语音合成 | #扩散模型 | #语音克隆 #自回归模型 | [arxiv](https://arxiv.org/abs/2608.08362v1)


### 👥 作者与机构

- 第一作者：Zhisheng Zheng（德克萨斯大学奥斯汀分校，由邮箱 zszheng@utexas.edu 确认）
- 通讯作者：未说明（论文正文未标注通讯作者；David Harwath 提供邮箱 harwath@utexas.edu，但未被明确指定为通讯作者）
- 作者列表：Zhisheng Zheng、Xiaohang Sun、Zhu Liu、Caren Chen、Rohith Kumar、Manoj Aggarwal、Gerard Medioni、David Harwath
- 机构信息：论文页脚标注两个单位——1. The University of Texas at Austin，2. Amazon；各作者与机构的对应关系未逐人标出。除上述两位由邮箱确认外，其余作者的机构归属无法确认。

### 💡 毒舌点评

把 DiTAR 的连续潜空间、CAM++ 声纹和逐音素韵律控制信号整合成一套可用的可控 TTS，工程上确实完整，0.6B 在零样本克隆上也略优于复现的 DiTAR。但“可控性”全程只拿对 GT 的 RMSE/MAE 说话，既没有验证对任意给定非 GT 目标韵律的跟随能力，也没有对 pitch/loudness 逐项消融，更没有控制效果的主观听感测试；0.1B 模型在零样本合成中 WER 明显退化也完全未解释。以顶会标准看，这只能证明“显式控制信号能降低与 GT 的声学误差”，还不足以支撑“用户可控表达性语音合成”的强声明。

### 📌 核心摘要

论文针对现有 TTS 中说话人身份、韵律与风格高度纠缠、缺乏词/音素级精细韵律控制的问题，提出 CtrlSpeech：在 DiTAR 骨干上叠加全局说话人条件与逐音素对齐的 pitch/loudness/duration 控制信号，实现粗到细的可控表达性语音合成。方法核心是用连续 VAE 潜空间避免离散 codec 量化损失，以 patch 级自回归加局部扩散生成语音，并将文本/控制 token 与声学 patch token 用模态感知位置索引统一建模。与 PromptTTS、DrawSpeech 等句级或草图式控制相比，新意在于把控制粒度细化到音素级，并支持迭代式局部调整而不改变音色。零样本评测中，0.6B 模型在 LibriSpeech-PC test-clean 上 WER 2.46%、SIM-o 0.65，在 Seed-TTS test-en 上 WER 2.58%、SIM-o 0.63，均优于作者自行复现的 DiTAR 基线；但 0.1B 模型的零样本 WER 明显退化（4.36% 与 6.50%）。加入控制信号后，0.6B 的音高 RMSE 从 67.86 Hz 降至 38.39 Hz、响度 RMSE 从 6.35 dB 降至 4.56 dB、时长 MAE 从 28.08 降至 11.86。实际意义在于为需要局部韵律精修的语音编辑与交互式生成场景提供可操作接口。主要局限是仅英文、依赖对齐与 f0 提取质量，且论文未验证对任意给定目标控制值的忠实跟随。

### 🔗 开源详情

- 代码：论文正文未给出实际代码链接。作者在摘要中称 “Our demo, code and model weights are available at CtrlSpeech.”，但“CtrlSpeech”仅为占位名，未提供具体 URL。
- 模型权重：未提及 HuggingFace/ModelScope 等实际权重下载链接。文中说明 VAE 使用 Semantic-VAE (niu2025semantic) 的现成 checkpoint，但未给出下载地址。
- 数据集：论文提及 Emilia（英文子集）、GigaSpeech（英文子集）、LibriSpeech-PC test-clean、Seed-TTS test-en、LJSpeech test set；具体获取链接与开源协议未说明。
- Demo：论文未给出在线 demo URL，仅称 demo 可用。
- 复现材料：论文描述了优化器、学习率、weight decay、warmup、训练轮数、GPU 数量、采样步数与 CFG scale，但未提供训练配置代码、checkpoints 或其他可复现资源链接。
- 论文中可核验的外部引用资源：
  - CosyVoice 使用的 campplus.onnx 声纹模型：https://www.modelscope.cn/models/iic/CosyVoice-300M/file/view/master/campplus.onnx
  - Semantic-VAE、WORLD、DIO、StoneMask、Whisper-large-v3、WavLM、DrawSpeech 等被引用，但未提供下载链接。
  - DiTAR 在论文中被注明 “DiTAR is not open-source”，作者仅基于其复现结果进行对比。

### 🏗️ 方法概述和架构

CtrlSpeech 的整体生成流程为：输入音素序列、可选的逐音素控制信号（基频、响度、时长）以及全局说话人条件；文本被编码为 phone embedding，并与离散化控制信号拼接；说话人条件由 CAM++ 声纹模型从 prompt speech 中提取全局 speaker embedding。波形先经 VAE 编码器压缩为 40 Hz、64 维的连续潜变量序列，再按 4 个 token 一组切成 patch；patch 序列送入因果自回归 Transformer 骨干，每个 patch 先经聚合编码器映射为 patch embedding。自回归骨干输出上下文表示 \(h_k\)，局部扩散 Transformer 解码器以 \(h_k\) 为条件、以历史 patch 为前缀上下文，逐 patch 生成下一个 patch，最后由 BigVGAN 解码器还原为波形。这是一个以 DiTAR 为骨干、端到端训练的分层生成流水线。

主要组件如下。

1. 连续 VAE 编解码器：编码器用堆叠卷积层将 16 kHz 波形映射为以 \((\mu, \log\sigma^2)\) 参数化的 40 Hz 潜变量分布，采样得到 64 维连续 latent token；解码器采用 BigVGAN 架构。潜变量连续而非离散 codec，可避免量化信息损失和多级粗到细生成的误差累积。论文直接使用 Semantic-VAE 的预训练 checkpoint。

2. DiTAR patch 级自回归-扩散分解：令连续序列为 \(\mathbf{x}=(x_1,\dots,x_N)\)，第 \(k\) 个 patch 为 \(\mathbf{x}^{(k)}=(x_{(k-1)P+1},\dots,x_{kP})\)，\(P=4\)。聚合编码器将每个 patch 映射为 embedding，因果自回归 Transformer 对 patch embedding 序列建模长程依赖，并输出条件表示 \(h_k\)。局部扩散解码器（LocDiT）以 \(h_k\) 和历史 patch 为上下文，用双向注意力对目标 patch 做“outpainting”式去噪，从而兼顾 patch 间自回归依赖与 patch 内声学连贯性。

3. 扩散参数化与训练目标：局部扩散采用方差保持（VP）前向过程 \(x_t = \alpha_t x_0 + \sigma_t \epsilon\)，训练目标为条件 flow-matching 速度场损失 \(\mathcal{L}_{\mathrm{diff}} = \mathbb{E}\left[\lVert v_\theta(x_t,t) - v(x_t,t)\rVert_2^2\right]\)。整体目标为 \(\mathcal{L} = \mathcal{L}_{\mathrm{flow}} + \lambda \mathcal{L}_{\mathrm{stop}}\)，其中 \(\mathcal{L}_{\mathrm{stop}}\) 是辅助 stop prediction 损失，将每个声学 patch 分类为 first/middle/last；\(\lambda\) 未给出具体取值。

4. 粗粒度说话人条件：使用 CosyVoice 同款 CAM++ 预训练声纹模型提取 speaker embedding 作为全局音色条件；也可直接将 prompt speech 作为参考输入。二者共同提供说话人信息。

5. 细粒度逐音素控制信号：
- 基频：WORLD 提取，DIO 估计原始 f0 后经 StoneMask 精化；f0 先经 mel 刻度转换 \(f_{\text{mel}}=1127\ln(1+f_0/700)\)，再量化到 128 个 bin（65.0–650.0 Hz）；清音帧为 bin 0，超过 650 Hz 截断到 bin 127。
- 响度：先经 A-weighting 滤波模拟人耳频率敏感度，再计算帧级 RMS 并转为 dB：\(L_{\text{dB}}=20\log_{10}(\max(\text{RMS},\epsilon))\)，其中 \(\epsilon=10^{-10}\)；数值截断到 -60.0~0.0 dB，经 min-max 归一化量化到 64 个 bin，约 1 dB 分辨率。
- 时长：由强制对齐得到每个音素对应的声学帧数，作为低层级语速/节奏控制。

数据流上，文本/控制 token 与声学 patch token 拼接后送入同一 Transformer 骨干，采用模态感知位置索引在文本流与语音流上分别重置位置编码。设计动机包括：连续潜空间避免离散 token 的误差累积；patch 级自回归与 patch 内双向扩散兼顾长程依赖与局部声学连贯性；全局说话人条件与局部韵律信号解耦，使用户可以只修改局部韵律而不改变音色；控制信号采用较粗的量化格式，以稳健性和易用性换取精度。

下图展示了将文本/控制token与声学patch token统一处理的整体模型架构。

![Figure 2: The architecture of CtrlSpeech.](https://arxiv.org/html/2608.08362v1/x2.png)

图中可见，输入的音素token与控制信号（Pitch/Loudness/Duration）首先被编码，与连续语音token一起输入因果自回归Transformer；其输出h_i作为条件，引导局部扩散Transformer（LocDiT）逐patch生成语音，这直观体现了模态感知位置索引下的统一建模流程。

### 💡 核心创新点

1. 粗到细（coarse-to-fine）统一控制框架。是什么：全局 speaker embedding 与逐音素对齐的 pitch/loudness/duration 信号共同作为条件。之前方法多为句级或全局风格控制，难以精确操控局部韵律事件。该框架让控制直接作用于具体音素。收益：0.6B 模型音高 RMSE 从 67.86 降至 38.39 Hz、响度 RMSE 从 6.35 降至 4.56 dB、时长 MAE 从 28.08 降至 11.86。
2. 在 DiTAR 连续潜空间上引入显式可控条件。是什么：保留 DiTAR 的 patch 级自回归加局部扩散生成方式，将控制 token 与文本 token 拼接作为条件。之前基于离散 codec 的可控 TTS 可能因量化丢失细微韵律信息。该设计让控制信号直接作用于连续潜变量。收益：零样本 WER/SIM-o 均优于作者复现的 DiTAR。
3. 感知导向的控制信号工程化设计。是什么：mel 刻度 f0 量化（128 bin）、A-weighting 响度（64 bin、约 1 dB 分辨率）、强制对齐时长。之前方法多用原始 Hz/dB 连续值或句级统计量。该设计将原始声学量转成感知更一致的离散条件，提升稳健性与易用性。收益：响度控制误差显著低于 DrawSpeech（4.56 vs 13.15 dB）。
4. 迭代式交互细化工作流。是什么：先以文本与说话人生成初始语音，再通过 UI 局部调整 pitch/loudness/duration 并重新生成。之前系统不支持这种逐段修改。该工作流使语音合成从“一次生成”变为“逐步精修”。但论文只有 UI 流程描述，没有用户研究或任务级定量证据。

下图直观地展示了论文提出的粗到细（coarse-to-fine）交互式语音控制流程。

![Figure 1: Coarse-to-fine speech control pipeline.](https://arxiv.org/html/2608.08362v1/x1.png)

流程图清晰地描绘了系统先通过说话人设置（Speaker Embedding或Prompt Audio）进行粗粒度生成，然后允许用户对生成语音的逐词音高（Pitch）、响度（Loudness）和时长（Word Duration）进行精细调整，这对应了核心创新点中统一控制框架的应用场景。

### 📊 实验结果

论文核心证据分为三部分：零样本 TTS、说话人条件消融、韵律可控性评测。

零样本 TTS 方面，下表保留原 Table 1 的完整模型对比行，并把 Vocoder Reconstructed 作为重建上界一并列出。CtrlSpeech（0.6B）在 LibriSpeech-PC test-clean 上取得 WER 2.46%、SIM-o 0.65、CMOS -0.16、SMOS 3.81，在 Seed-TTS test-en 上取得 WER 2.58%、SIM-o 0.63、CMOS -0.23、SMOS 3.78，均优于作者自行复现的 0.6B DiTAR 基线。Vocoder Reconstructed 的 WER/SIM-o 接近 Ground Truth，说明连续 VAE 瓶颈本身不是主要限制。0.1B 模型在零样本合成中 WER 明显退化，论文未解释该规模依赖现象。

| 数据集 | 模型 | WER(%)↓ | SIM-o↑ | CMOS↑ | SMOS↑ |
|---|---|---|---|---|---|
| LibriSpeech-PC test-clean | Ground Truth | 2.40 | 0.69 | 0.00 | 3.90 |
| LibriSpeech-PC test-clean | Vocoder Reconstructed | 2.45 | 0.68 | – | – |
| LibriSpeech-PC test-clean | DiTAR（复现 0.6B） | 2.55 | 0.61 | -0.22 | 3.74 |
| LibriSpeech-PC test-clean | CtrlSpeech（0.1B） | 4.36 | 0.61 | -0.65 | 3.66 |
| LibriSpeech-PC test-clean | CtrlSpeech（0.6B） | 2.46 | 0.65 | -0.16 | 3.81 |
| Seed-TTS test-en | Ground Truth | 1.90 | 0.73 | 0.00 | 3.85 |
| Seed-TTS test-en | Vocoder Reconstructed | 1.93 | 0.69 | – | – |
| Seed-TTS test-en | DiTAR（复现 0.6B） | 2.89 | 0.59 | -0.32 | 3.70 |
| Seed-TTS test-en | CtrlSpeech（0.1B） | 6.50 | 0.58 | -0.60 | 3.66 |
| Seed-TTS test-en | CtrlSpeech（0.6B） | 2.58 | 0.63 | -0.23 | 3.78 |

说话人条件消融（Seed-TTS test-en）显示：无说话人条件时 SIM-o 仅 0.07、WER 3.12%；仅 speaker embedding 时 WER 3.27%、SIM-o 0.48；仅 prompt speech 时 WER 2.69%、SIM-o 0.53；两者结合时 WER 2.58%、SIM-o 0.63。说明 prompt speech 单独使用时已经比单独 speaker embedding 更有利于说话人相似度，二者结合效果最佳。

韵律可控性方面，下表从原 Table 3 和 Table 4 抽取最强配置、最强基线与关键消融项。加入控制信号后，CtrlSpeech（0.6B）音高 RMSE 由 67.86 Hz 降至 38.39 Hz，响度 RMSE 由 6.35 dB 降至 4.56 dB；但带控制时音高 RMSE 仍高于 DrawSpeech 的草图式控制（38.39 vs 27.78 Hz），响度则显著更优（4.56 vs 13.15 dB）。时长控制使 0.6B 的 MAE 从 28.08 降至 11.86，0.1B 从 31.58 降至 14.00，均优于复现 DiTAR 的 28.00；但无时长控制时 0.6B（28.08）略差于 DiTAR（28.00）。

| 模型 | 设定 | 音高 RMSE(Hz)↓ | 响度 RMSE(dB)↓ | 时长 MAE↓ |
|---|---|---|---|---|
| DrawSpeech | Text-only | 43.59 | 14.03 | – |
| DrawSpeech | With Sketch | 27.78 | 13.15 | – |
| CtrlSpeech（0.1B） | Text-only | 77.84 | 7.12 | – |
| CtrlSpeech（0.6B） | Text-only | 67.86 | 6.35 | – |
| CtrlSpeech（0.1B） | With Control | 41.54 | 5.01 | – |
| CtrlSpeech（0.6B） | With Control | 38.39 | 4.56 | – |
| DiTAR（复现） | 无时长控制 | – | – | 28.00 |
| CtrlSpeech（0.1B） | 无时长控制 | – | – | 31.58 |
| CtrlSpeech（0.6B） | 无时长控制 | – | – | 28.08 |
| CtrlSpeech（0.1B） | 含时长控制 | – | – | 14.00 |
| CtrlSpeech（0.6B） | 含时长控制 | – | – | 11.86 |

论文未报告统计显著性检验；除 DrawSpeech 外未与其他可控 TTS（如 PromptTTS、InstructTTS）对比；精细韵律控制仅在 LJSpeech 单说话人上评测，零样本条件下的控制效果未提供。

### 🔬 细节详述

- 训练数据：Emilia 英文子集 + GigaSpeech 子集，共约 20,000 小时英文语音；零样本评估用 LibriSpeech-PC test-clean、Seed-TTS test-en，精细控制评估用 LJSpeech test set。数据预处理、数据增强与训练集划分细节未说明。
- 损失函数：\(\mathcal{L} = \mathcal{L}_{\mathrm{flow}} + \lambda\mathcal{L}_{\mathrm{stop}}\)。\(\mathcal{L}_{\mathrm{flow}}\) 为 L1 条件 flow-matching 速度场损失；\(\mathcal{L}_{\mathrm{stop}}\) 为将每个声学 patch 分类为 first/middle/last 的辅助损失；\(\lambda\) 未说明。
- 训练策略：AdamW 优化器，学习率 \(2\times10^{-4}\)，weight decay 0.01；前 5% 步数线性 warmup，之后线性衰减；训练 5 epochs；使用 8× NVIDIA A100 80GB。batch size、总训练步数、随机种子未说明。
- 模型配置：0.1B 模型 hidden size 512，聚合编码器 4 层 8 头，DiT 解码器 4 层 8 头；0.6B 模型 hidden size 1024，聚合编码器与 DiT 均为 6 层 16 头。patch size = 4。VAE：16 kHz 输入、40 Hz 帧率、64 维潜变量，使用 Semantic-VAE 预训练 checkpoint。
- 控制信号量化：f0 用 WORLD（DIO + StoneMask）提取，mel 刻度后量化到 128 bin（65.0–650.0 Hz，0 为清音，127 为超上限截断）；响度经 A-weighting、帧级 RMS、dB 转换后截断到 -60.0~0.0 dB，量化到 64 bin；时长为强制对齐得到的音素级声学帧数。
- 推理：classifier-free guidance（CFG），32 步采样，guidance scale 1.5，time 与 speaker embedding 作为统一条件信号；温度、beam、流式生成等未说明。
- 正则化或稳定训练技巧：未说明。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 在 DiTAR 连续潜空间上引入逐音素对齐的 pitch/loudness/duration 控制 token，与全局 speaker embedding 组成粗到细控制框架，支持迭代式局部精修，相比句级或草图式控制有新意；但生成骨干和 VAE 大量沿用已有工作，未构成范式级创新。

*   技术严谨性 (1.0/1.5)：[A_LIMITS] 方法将全局 prompt speech 与逐音素控制信号同时作为条件，却未给出二者韵律冲突时的融合或优先级机制，存在模型忽略显式控制而跟随 prompt 韵律的风险；这一设计逻辑缺口削弱了可控性声明的严谨性。

*   实验充分性 (0.9/1.5)：[A_RESULTS][A_LIMITS] 双数据集零样本评测和说话人条件消融较完整，但可控性仅与 DrawSpeech 对比，未报告显著性检验，也未逐项消融 pitch/loudness/duration 或验证对任意给定目标韵律值的跟随能力，且精细控制只在单说话人 LJSpeech 上评测，证据不足以支撑强可控性声明。

*   清晰度 (0.8/1)：[A_METHOD] 方法按 VAE、patch 分解、扩散目标、控制信号量化分节展开，公式和数据流交代较清楚；但模态感知位置索引只以一句说明，缺少具体实现图示或伪代码，文本流/语音流位置重置的机制未达完全清晰。

*   影响力 (1.0/1.5)：[A_SUMMARY] 面向语音合成核心读者，零样本克隆与局部韵律精修的语音编辑、交互式生成场景直接相关，控制粒度细化到音素级具有明确应用价值，属于对语音/音频社区有实际意义的 TTS 方向。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD][SCORING_SOURCE_1/1] 已披露优化器、学习率、weight decay、warmup、epochs、GPU 数量、采样步数和 CFG scale，但 λ 的具体值、batch size、总训练步数、随机种子等关键训练细节缺失，无法完整复现。

*   工程/实践价值 (1.2/1.5)：[A_METHOD][A_RESULTS] 工程整合度高：复用 Semantic-VAE/BigVGAN、CAM++ 声纹、WORLD 与强制对齐，构建端到端语音生成流水线，并通过 0.1B/0.6B 规模配置和逐音素控制 token 支持局部修改，具备实际系统雏形。

### 🚨 局限与问题

**论文明确承认的局限：**
- 实验主要针对英文，多语言与语码混合合成效果未探索。
- 精细控制依赖逐音素对齐与 f0/响度提取质量，前端误差会向生成结果传播。
- 纯文本生成时的局部韵律（尤其音高）预测仍困难。
- 仅建模说话人身份、音高、响度、时长，情感、音质、非语言发声等表达因素未显式建模。

**审稿人发现的潜在问题：**
- “可控性”评测仅用对 GT 的 RMSE/MAE，等价于假设“拟合 GT 韵律”是控制目标；实际用户需要的是给定任意目标韵律值并让模型忠实跟随，论文未做此类跟随度测试，也没有主观听感验证。
- 未逐项消融 pitch、loudness、duration 三个控制信号的独立贡献，无法确认各通道是否均被有效利用。
- 控制信号与 prompt speech 可能携带冲突的韵律信息，模型如何权衡未分析；存在模型忽略控制信号而主要依赖 prompt 韵律的风险。
- 0.1B 模型在零样本合成（并非显式加入控制信号）中 WER 大幅劣化（LibriSpeech-PC 4.36%、Seed-TTS 6.50%），暗示小容量模型在相同训练设定下难以同时保持内容准确率，论文未讨论这一规模依赖现象。
- 与 DrawSpeech 的对比条件不完全对等：双方模型规模、训练数据、控制信号形式与控制粒度均不同，且缺乏零样本条件下的可控性评测（LJSpeech 为单说话人）。
- DiTAR 基线为作者自行复现且未开源，其复现一致性无法由第三方核验。
- 控制信号量化粒度对控制精度的影响未讨论；模态感知位置索引的细节缺失也增加了复现与验证难度。

---

[← 返回 2026-08-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-11/)
