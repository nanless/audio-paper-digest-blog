---
title: "Phoenix TTS: High-Fidelity Synthesis and Voice Conversion via Flow-Matching-Driven Speech Tokenization"
date: 2026-08-13
draft: false
tags: [语音合成, 流匹配, 语音转换, 自回归模型, 零样本]
categories: [论文速递]
description: "语音合成 | 6.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.11737"
---

# 📄 Phoenix TTS: High-Fidelity Synthesis and Voice Conversion via Flow-Matching-Driven Speech Tokenization

标签：#语音合成 #流匹配 #语音转换 #自回归模型 #零样本

**6.5/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **6.5/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：中 | #语音合成 | #流匹配 | #语音转换 #自回归模型 | [arxiv](https://arxiv.org/abs/2608.11737)


### 👥 作者与机构

- 团队：L-Lab Phoenix-Audio Team
- 机构：Didichuxing Co. Ltd
- 核心贡献者：Peijie Chen、Zhuanling Zha、Zhipeng Nie、Weijie Wu、Yiming Liu、Daiyu Huang、Junbo Li、Jun Fang、Naiqiang Tan、Hua Chai（均 Didichuxing Co. Ltd）
- 顾问：Qingyang Hong（厦门大学）
- 通讯作者：未说明

### 💡 毒舌点评

本文用 flow matching 梯度反传把语义 tokenizer 和声学解码器焊在一起，确实把 WER 压到 GT 以下、SIM 在多基准上登顶，联合训练的证据链清楚。但全篇没有任何开源迹象，mask 策略与损失权重等关键实现细节一笔带过，且“超过 GT”这类表述应更谨慎解读。推理延迟、吞吐、训练成本对比等系统级指标全缺，工业部署价值难以独立判断。

### 📌 核心摘要

本文针对零样本 TTS 中语义 tokenizer 与下游声学生成模型特征空间失配的问题，提出 Phoenix TTS 统一框架。其核心创新在于将语音 tokenizer 与 Flow Matching 解码器进行联合训练：tokenizer 在重建 W2v-BERT 2.0 语义特征的同时，直接接收 Flow Matching 损失的梯度监督，使离散语义 token 原生对齐连续声学生成空间。系统同时包含一个基于 Qwen2.5-0.5B 的自回归 LLM，将 TTS 重构为文本+语音 token 的条件序列生成任务。在 110K 小时双语数据上训练后，Phoenix TTS 在 SeedTTS-EN、SeedTTS-ZH 和 LibriSpeech-PC 上取得 WER 1.56/1.16/1.94，其中 EN 和 LS-PC 低于 GT 的 2.06，ZH 低于 GT 的 1.26；SIM 分别达到 0.720/0.778/0.718，在多个基准上超过强基线。该 tokenizer 还能无需微调直接用于语音转换，在 Seed-TTS-Eval 上超过 Seed-VC 和 X-VC。主要局限是完全未提供开源材料，且关键训练细节缺失。

### 🔗 开源详情

原文未提供代码仓库、模型权重或数据集链接，也未声明开源协议；机器摘要资源状态为 has_code=否、has_model=否、has_dataset=否。可复现性受限。

### 🏗️ 方法概述和架构

Phoenix TTS 是一个多阶段流水线系统，将零样本文本到语音合成（TTS）任务重构为“文本 + 参考语音 → 离散语义 token → 连续 VAE latent → 波形”的级联生成过程。系统输入为目标文本和一段参考语音，输出为目标说话人朗读该文本的 24kHz 高保真音频。整体框架由五个核心模块组成：统一语音 tokenizer（UniSpeechTokenizer）、可学习说话人编码器（Learnable Speaker Encoder）、自回归语言模型（LLM）、Flow Matching 解码器以及预训练的 Waveform VAE。该设计的根本动机是解决传统级联 TTS 系统中语义 tokenizer 与下游声学生成模型之间特征空间失配的问题：常规 ASR 或 SSL tokenizer 通常在独立目标下训练，缺乏下游声学生成任务的直接梯度监督，导致离散 token 要么丢弃与音色相关的声学细节，要么与连续声学空间不一致，从而限制说话人相似度和合成质量。Phoenix TTS 通过将语音 tokenizer 与 Flow Matching 解码器进行联合训练，使离散语义 token 在保留丰富语义信息的同时，原生对齐连续声学生成空间。

在推理阶段，完整链路如下：首先，参考语音经过语义特征提取（使用冻结的 W2v-BERT 2.0 第 16 层隐藏状态）并进行随机裁剪，随后由可学习说话人编码器编码为固定长度的连续说话人嵌入。与此同时，输入文本被转换为文本 token 序列，并与说话人嵌入一起构成自回归 LLM 的条件输入。LLM 以自回归方式逐 token 生成目标语音的离散语义 token。这些离散语义 token 随后作为条件输入到 Flow Matching 解码器，该解码器沿最优传输路径从初始噪声逐步去噪，生成连续 VAE latent（25Hz、64 维）。最后，预训练的 Waveform VAE 将 latent 解码为 24kHz 波形。训练阶段与推理略有不同：目标语音在训练时先由 UniSpeechTokenizer 编码为离散语义 token，作为 LLM 的监督目标；UniSpeechTokenizer 与 Flow Matching 解码器采用联合训练；LLM 则采用 teacher-forcing 策略进行优化。

**UniSpeechTokenizer** 是系统前端的核心表示学习模块，负责从目标语音中提取 25Hz 的离散语义 token。该模块首先利用冻结的 W2v-BERT 2.0 第 16 层隐藏状态作为连续语义特征 x（输入音频为 16kHz）。这些自监督特征与语言和音素内容具有深刻相关性，因此相比直接预测原始声学 token，对其进行自回归建模更为可行。随后，x 经过一个 6 层 Conformer 编码器（维度 384，进行 ×2 下采样）处理，再通过一个单码本矢量量化器（VQ）离散化。该 VQ 的码本大小为 8192，每个码向量维度为 8，最终输出离散语音 token 嵌入 e_sem。矢量量化将连续表示映射到最近码本向量，使无限连续空间压缩为有限离散符号集合，从而便于 LLM 将语音建模为分类任务。为了确保 e_sem 保留丰富的语义信息，量化后的表示会经过一个 Conformer 重建分支，以重构原始 W2v-BERT 2.0 连续特征，并施加语义重建损失 L_feat。更重要的是，Flow Matching 解码器的损失 L_FM 会直接反向传播到该 Conformer 编码器和矢量量化器，形成显式声学监督，使离散 token 与下游连续生成空间对齐。这种联合训练机制是 Phoenix TTS 区别于传统级联系统的核心创新。

UniSpeechTokenizer 的核心联合训练机制如下图所示。

![Figure 1: UnispeechTokenizer](https://arxiv.org/html/2608.11737v1/UniSpeechTokenzier.png)

下图清晰地展示了语义特征提取、Conformer编码器和矢量量化器，如何通过Flow Matching损失（L_FM）的梯度反向传播进行联合优化，使生成的离散语义token直接对齐连续的VAE潜在空间。


**可学习说话人编码器（Learnable Speaker Encoder）** 负责从参考语音中提取固定长度的连续说话人嵌入，作为 LLM 的条件之一，指导目标音色的克隆。该模块由两部分组成：一个 4 层 Conformer 条件编码器（维度从 1024 映射到 512，FFN 2048，4 个注意力头，卷积核为 2×2）和一个 Perceiver Resampler（32 个可学习 latent，维度 896，上下文长度 512，8 个注意力头，FFN 倍率为 2）。参考语音先经过冻结的 W2v-BERT 2.0 第 16 层提取语义特征，并进行随机裁剪；随后 4 层 Conformer 对变长特征序列进行时间建模；Perceiver Resampler 利用 32 个可学习查询向量对压缩后的特征进行注意力汇聚，输出固定长度（32 个 latent）的连续说话人表示，并投影到 LLM 的 896 维嵌入空间。这种设计将任意长度的参考语音压缩为固定数量 latent，既降低了 LLM 的序列长度负担，又保留了说话人身份和音色信息。训练时对参考提示进行随机裁剪，以增加数据多样性、防止模型过拟合。

**自回归语言模型（LLM）** 将 TTS 转化为条件序列生成任务。该模块基于预训练的 Qwen2.5-0.5B 架构，包含 24 层 Transformer，隐层维度 896，FFN 维度 4864，14 个注意力头。其语音词汇表为 8192 个语义 token 加上 2 个特殊 token（BOS/EOS）。输入条件由两部分组成：文本 token 序列和由说话人编码器产生的连续说话人嵌入。在输入序列中，文本和语音片段通过特殊控制 token 进行组织：BT 表示“文本序列开始”，BA 表示“语音开始”，EA 表示“语音结束”。LLM 通过注意力机制同时关注离散文本 token 和连续说话人嵌入，从而联合捕获目标语言内容和目标音色。训练时，模型采用标准的 teacher-forcing 策略，以真实语义 token 作为前一时刻输入，预测下一 token；优化目标为负对数似然损失，等价于语音 token 词汇上的交叉熵损失。推理时，LLM 从 BOS 开始逐 token 自回归生成语义 token，直到输出 EOS。通过这种自回归建模，LLM 专注于语言和韵律对齐，而将细粒度声学重建交由后续非自回归解码器完成。

Phoenix TTS中的自回归语言模型模块结构如下图所示。

![Figure 2: A schematic diagram of Phoenix TTS’s autoregressive language modeling part. BT, BA, EA denote the “start of text sequence”, “start of speech”, and “end of speech” tokens.](https://arxiv.org/html/2608.11737v1/PhoenixTTS.png)

下图展示了文本序列、参考说话人嵌入和语音token序列如何作为条件输入，通过自回归Transformer模型生成目标语音的语义token序列。


**Flow Matching 解码器** 是非自回归声学生成模块，负责将离散语义 token 转换为连续 VAE latent。其具体结构为 18 层 Flow-Matching DiT，隐层维度 768，12 个注意力头，FFN 倍率为 2，并带有 1024 维的语义条件输入。该解码器接收的语义 token（训练时为真实 token，推理时为 LLM 预测 token）被转换为条件表示 c，然后通过连续时间流匹配过程从初始噪声 y_0 沿最优传输路径 y_t = t·y_1 + (1−t)·y_0 逐步演化到目标 VAE latent y_1，其中 t∈[0,1]。训练时，Flow Matching 目标最小化预测向量场与真实向量场 (y_1 − y_0) 之间的 L2 误差。该模块输出 25Hz、64 维的连续 VAE latent，与语义 token 帧率完全一致，从而避免了条件序列与生成 latent 之间的时间对齐错位。

**Waveform VAE** 是一个预训练的波形变分自编码器，负责将声学 latent 解码为最终波形。该模块将 24kHz 的音频通过下采样因子 [2,4,4,5,6] 压缩为 25Hz、64 维的 latent 表示；在推理时，它接收 Flow Matching 解码器生成的 latent 并重建 24kHz 高保真波形。由于该模块预训练且冻结，其 latent 空间为 Flow Matching 解码器提供了稳定、紧凑的声学监督目标。

**多阶段训练与数据流交互**：训练分为两个主要阶段。第一阶段联合优化 UniSpeechTokenizer 和 Flow Matching 解码器：目标语音经过冻结的 W2v-BERT 2.0 提取特征，再经 Conformer 编码器与 VQ 得到离散 token；这些 token 一方面进入语义重建分支计算 L_feat，另一方面作为条件输入 Flow Matching 解码器，与目标 VAE latent 一起计算 L_FM；同时 VQ 本身的量化损失 L_VQ 也加入优化。三者加权构成总损失 L_total = λ_FM L_FM + λ_VQ L_VQ + λ_feat L_feat。梯度从 L_FM 反向传播到 Conformer 编码器和矢量量化器，使离散 token 原生对齐 Flow Matching 生成空间。第二阶段训练自回归 LLM：LLM 接收文本 token 和说话人嵌入，预测目标语音的语义 token 序列；训练时使用的语义 token 来自已训练的 UniSpeechTokenizer。在推理阶段，所有模块串行连接，形成文本 + 参考语音 → 语义 token → VAE latent → 波形的完整链路。

**关键设计选择**：其一，将系统分解为自回归语义生成和非自回归声学重建两阶段，而非端到端生成，是为了让 LLM 专注于语言和韵律对齐，同时利用非自回归流匹配解码器进行高保真声学合成，避免单一自回归模型在长期生成中的误差累积和单一非自回归模型在长序列语义对齐上的不足。其二，选择 SSL 特征（W2v-BERT 2.0）而非 ASR 后验作为语义 token 的基础，是因为 ASR tokenizer 为追求纯语义准确会丢弃声学细节，导致说话人相似度受限；而 SSL 特征保留了更多与音色相关的声学信息，再通过联合训练补偿离散化损失。其三，采用 25Hz 的 token 率和 VAE latent 帧率完全对齐，避免不同帧率之间的转换错位（实验表明，替换为 93.75Hz 的 Mel 谱提示会显著降低 SIM 和自然度）。其四，使用预训练 Qwen2.5-0.5B 初始化 LLM，利用其强大的语言先验提升泛化能力；使用 Perceiver Resampler 将变长说话人特征压缩为固定长度，提升条件建模效率。其五，引入 Flow Matching 损失直接监督 tokenizer，打破传统级联系统中表示学习与声学生成相互隔离的瓶颈，这是 Phoenix TTS 的核心创新。

### 💡 核心创新点

1. **统一语音 tokenizer 框架**：提出 Phoenix TTS，将语音 tokenizer 与连续 Flow Matching 解码器联合优化；结合 SSL 特征重建与下游声学监督，在保留丰富语义信息的同时，使离散 token 原生对齐连续生成空间。
2. **原生零样本语音转换**：作为联合训练的直接副产品，UniSpeechTokenizer 无需任务特定微调即可支持高保真零样本语音转换，实证验证了较强的语义-声学解耦能力。
3. **数据效率与竞争性能**：仅用 110K 小时语音训练，主客观指标即取得有竞争力表现；在多个基准上 WER 低于 GT，SIM 在多语言场景中达到或超越强基线，显示较好的数据效率。

### 📊 实验结果

主结果见表 1。Phoenix TTS 在 LibriSpeech-PC、SeedTTS-EN、SeedTTS-ZH 上 WER 分别为 1.94/1.56/1.16，均低于 GT 的 2.06/2.06/1.26；SIM 分别为 0.718/0.720/0.778，在 LibriSpeech-PC 和 SeedTTS-ZH 上为所列模型中最高。主观评测中，Phoenix TTS 在 EN/ZH 的 SMOS 分别为 4.09/4.10，CMOS 分别为 -0.09/-0.10，接近最强基线。

| Model | Training Data | LibriSpeech-PC WER (↓) | LibriSpeech-PC SIM (↑) | SeedTTS-EN WER (↓) | SeedTTS-EN SIM (↑) | SeedTTS-ZH WER (↓) | SeedTTS-ZH SIM (↑) |
|---|---|---|---|---|---|---|---|
| GT | - | 2.06 | 0.73 | 2.06 | 0.73 | 1.26 | 0.76 |
| F5-TTS* | 100K Multi. | 2.42 | 0.660 | 1.83 | 0.670 | 1.56 | 0.760 |
| VoxCPM* | 1.8M Multi. | 2.22 | 0.710 | 1.58 | 0.729 | 1.38 | 0.773 |
| DiTAR | 100K Multi. | 2.39 | 0.670 | 1.68 | 0.735 | 1.02 | 0.753 |
| FireRedTTS | 170K Multi. | 2.69 | 0.470 | 3.82 | 0.460 | 1.51 | 0.630 |
| MaskGCT | 100K Multi. | 2.63 | 0.687 | 2.62 | 0.717 | 2.27 | 0.774 |
| SparkTTS* | 100K Multi. | 2.81 | 0.575 | 3.14 | 0.573 | 1.54 | 0.660 |
| CosyVoice1* | 170K Multi. | 3.59 | 0.660 | 3.39 | 0.640 | 3.10 | 0.750 |
| CosyVoice2* | 200K Multi. | 2.23 | 0.650 | 2.57 | 0.652 | 1.38 | 0.757 |
| CosyVoice3* | 530K Multi. | 2.04 | 0.710 | 1.87 | 0.698 | 1.36 | 0.778 |
| IndexTTS2* | 55K Multi. | 2.52 | 0.706 | 1.98 | 0.705 | 1.34 | 0.765 |
| Phoenix TTS | 110K Multi. | 1.94 | 0.718 | 1.56 | 0.720 | 1.16 | 0.778 |

零样本语音转换结果见表 5。UniSpeechTokenizer 在 Seed-TTS-Eval 的 EN 子集上取得 SIM 0.72/WER 2.30，在 ZH 子集上取得 SIM 0.77/WER 1.98，均优于 Seed-VC 和 X-VC。消融方面，原文显示移除联合训练会导致 EN WER 从 1.56 升至 2.36，EN SIM 从 0.720 降至 0.706；移除说话人提示后 EN/ZH SIM 分别跌至 0.422/0.560。

| Model | SeedTTS-EN WER (↓) | SeedTTS-EN SIM (↑) | SeedTTS-ZH WER (↓) | SeedTTS-ZH SIM (↑) |
|---|---|---|---|---|
| GT | 1.96 | - | 1.33 | - |
| Seed-VC | 2.57 | 0.56 | 2.52 | 0.73 |
| X-VC | 2.83 | 0.63 | 1.99 | 0.73 |
| UniSpeechTokenizer | 2.30 | 0.72 | 1.98 | 0.77 |

### 🔬 细节详述

原文披露的训练设置如下：Phoenix TTS 使用 110K 小时双语语料训练，其中中文 50K 小时、英文 60K 小时，主要来自 Emilia、LibriHeavy、GigaSpeech、WenetSpeech4TTS，并加入专有有声书录音以增强领域多样性。UniSpeechTokenizer 在 8 块 NVIDIA A100 80GB GPU 上优化，每 GPU 批时长为 960 秒，共训练 10 epochs；自回归 LLM 在 32 块 NVIDIA A100 80GB GPU 上训练，每 GPU 批时长为 400 秒，共训练 3 epochs。两者均采用 AdamW 优化器和 cosine 学习率调度，tokenizer 峰值学习率为 1.0e-4，LLM 峰值学习率为 3.0e-4。LLM 训练数据按说话人级别构造：每个训练实例从同一说话人采样两条不同 utterances，一条作为说话人提示，另一条作为生成目标；并对参考提示随机裁剪以增强多样性。

架构配置方面：语义编码器使用冻结的 W2v-BERT 2.0 第 16 层特征，后接 6 层 Conformer（dim 384，×2 下采样）；语义 VQ 为单码本，大小 8192，码向量维度 8，token 率为 25Hz；条件编码器为 4 层 Conformer，维度从 1024 映射到 512，FFN 2048，4 头，卷积核 2×2；Perceiver Resampler 使用 32 个 latent，维度 896，上下文长度 512，8 头，FFN×2；LLM 为 24 层 Qwen2.5-0.5B 初始化，隐层维度 896，FFN 4864，14 头；语音词汇表为 8192 个 token 加 2 个特殊 token（BOS/EOS）；Flow-Matching DiT 为 18 层，维度 768，12 头，FFN×2，语义条件维度 1024；Waveform VAE 将 24kHz 音频下采样至 25Hz、64 维 latent，下采样因子为 [2,4,4,5,6]。原文未披露 binary mask 的具体超参与 λ_FM、λ_VQ、λ_feat 的具体权重值。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 提出将 UniSpeechTokenizer 与 Flow Matching 解码器联合训练，通过 L_FM 梯度反传使离散语义 token 对齐连续声学生成空间；[A_RESULTS] 消融显示 w/o joint training 使 EN WER 从1.56升至2.36、SIM降至0.706，支持核心创新有实证依据，而非纯组合宣传。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 方法给出 L_feat、L_FM 和 L_total 的明确公式，并说明第一阶段联合优化 tokenizer 与解码器、第二阶段 LLM teacher-forcing 的数据流；帧率对齐到25Hz可避免条件与 latent 之间的时间错位，未发现明显推导错误或不合理假设。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 覆盖 SeedTTS-EN/ZH 和 LibriSpeech-PC 的 WER/SIM、SMOS/CMOS、VC 与多组消融；但作为系统技术报告缺少推理延迟、吞吐、成本/规模压力测试和失败案例，且部分基线训练数据规模与条件不完全一致，使跨模型公平性受限。

*   清晰度 (0.8/1)：[A_METHOD] 各模块按 UniSpeechTokenizer、说话人编码器、LLM、Flow Matching 解码器和 Waveform VAE 分节说明，[SCORING_SOURCE_10/18] 给出架构配置表，整体公式和流程描述清晰，组织良好。

*   影响力 (1.0/1.5)：[A_SUMMARY] 在零样本 TTS 和语音转换任务中取得有竞争力的 WER/SIM，[A_RESULTS] 多个基准上超过强基线且展示低于 GT 的 WER；作为语音合成领域的联合训练范式，对后续语义 token 设计与声学生成器联合优化有参考意义。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 虽然架构配置、训练数据、优化器、学习率、GPU 和 batch duration 已披露，但 L_total 中 λ_FM、λ_VQ、λ_feat 的具体权重及 binary mask 策略与超参未给出，复现关键训练配置仍有缺失，计0.3分。

*   工程/实践价值 (1.2/1.5)：[A_METHOD] 系统采用 25Hz 语义 token 与 VAE latent 帧率对齐、预训练 Waveform VAE 和 0.5B 级 LLM 的流水线设计，降低了帧率转换错位与序列长度负担；多阶段训练路径与数据流交互明确，工程实现上有一定参考价值。

### 🚨 局限与问题

1. **开源与可复现性不足**：未提供代码、模型权重和数据集，机器摘要资源状态 has_code/has_model/has_dataset 均为否；可复现性得分仅 0.3。
2. **关键训练细节缺失**：原文仅给出总损失 L_total = λ_FM L_FM + λ_VQ L_VQ + λ_feat L_feat，但未披露 λ_FM、λ_VQ、λ_feat 的具体值；对 VAE latent 施加 binary mask 的策略与超参未详述。
3. **系统级指标缺失**：缺少推理延迟、吞吐、模型规模与训练成本等面向部署的对比指标，工业化落地价值难以独立判断。
4. **“低于 GT WER”的表述需谨慎解读**：GT 的 WER 同样由 Whisper/Paraformer 等自动评估器产生，低于 GT 不一定意味着感知质量或自然度更高，存在评估器偏差和文本标准化带来的解释空间。
5. **基线可比性存在混杂因素**：部分基线指标来自开源 checkpoint 的重新计算，训练数据规模与条件不完全一致，跨模型比较仍需谨慎。

---

[← 返回 2026-08-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-13/)
