---
title: "TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling"
date: 2026-05-04
draft: false
tags: [语音合成, 语音大模型, 预训练, 自回归模型, 少样本]
categories: [iclr-2026]
description: "语音合成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling

#语音合成 #语音大模型 #预训练 #自回归模型 #少样本

✅ **7.5/10** | 前25% | #语音合成 | #预训练 | #语音大模型 #自回归模型

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高

### 👥 作者与机构

- 第一作者：Liang-Hsuan Tseng（联发科研究中心实习、台湾大学）
- 通讯作者：未明确说明（论文未明确标注通讯作者，但邮箱 {yi-chang.chen, ds.shiu}@mtkresearch.com 为联发科团队，{f11921067, b10901091, hungyilee}@ntu.edu.tw 为台大团队，可推断多位核心作者）
- 作者列表：
    - Liang-Hsuan Tseng（联发科研究中心实习、台湾大学电气工程研究所）
    - Yi-Chang Chen（联发科研究中心，共同一作）
    - Kuan-Yi Lee（台湾大学）
    - Da-Shan Shiu（联发科研究中心）
    - Hung-yi Lee（台湾大学人工智能卓越研究中心）

### 💡 毒舌点评

这篇工作精准地瞄准了联合语音-文本建模中的一个核心痛点——序列长度不匹配，并通过一个设计优雅的“文本对齐”语音tokenization方案（TASTE）给出了干净利落的解决方案，使得在预训练文本LLM上进行轻量化微调就能获得优异的SLM性能，实用性很强。不过，其tokenization过程严重依赖于一个高质量的ASR系统（如Whisper）提供的转录文本，这在实际部署中可能引入延迟、错误传播和额外依赖，是一个未被充分讨论的工程与鲁棒性挑战。

### 🔗 开源详情

- 代码：提供了开源仓库链接（https://mtkresearch.github.io/TASTE-SpokenLM.github.io）。
- 模型权重：论文提到提供了预训练模型（“Our demo, code, and models are available at...”）。
- 数据集：训练使用了公开的Emilia和LibriTTS数据集，未提供独占数据集。
- Demo：提供了在线演示页面。
- 复现材料：论文附录（A.2, A.3）提供了详细的训练超参数、配置、评估指令和算法（Algorithm 1）。
- 引用的开源项目：Whisper (ASR编码器)、HiFi-GAN/Flow (声码器)、LLaMA (基础LLM)、DeepSpeed/Liger Kernel (训练加速)。

### 📌 核心摘要

这篇论文旨在解决构建联合文本-语音口语语言模型（SLM）时面临的核心挑战：语音token序列通常比其对应的文本转录长得多，导致直接的联合建模复杂且低效。论文提出TASTE（Text-Aligned Speech Tokenization and Embedding），一种在tokenization阶段就将语音token与其文本转录对齐的方法。核心是利用一个基于注意力的聚合器，以冻结的Whisper编码器提取的语音表示为“键值”，以文本转录为“查询”，生成长度与文本token一一对应的语音表示，再经RVQ量化得到离散token。训练目标是语音重建，使得token专注于编码副语言信息。主要实验结果表明：1）TASTE在极低比特率（~150 bps）下实现了高质量的语音重建（表1），质量接近高比特率基线；2）基于TASTE构建的SLM（TASLM）在语音续写任务上，以仅1.3B参数在多项指标（GPT-4o评分3.16，人工MOS 4.16）上优于7B参数的其他预训练SLM（表2）；3）在SALMON和StoryCloze等基准测试中表现具有竞争力。该工作的主要意义在于提出了一种简洁的联合tokenization范式，极大简化了SLM的建模流程。主要局限性包括：目前仅验证了英文，未处理多人语音、非语言事件（如笑声）和系统延迟问题（论文中明确提及）。

### 🏗️ 模型架构

TASTE的整体框架分为两个阶段：TASTE语音分词器训练和基于TASTE的口语语言模型（TASLM）训练。

1. TASTE语音分词器（见图2）：
该模块旨在生成与文本对齐的语音token序列 ̂z。
- 输入：语音-文本对 (u, v)，其中v是通过ASR获得的u的文本转录。
- 流程：
    1.  编码器：使用预训练的Whisper ASR编码器（冻结）处理语音u，提取深层隐藏状态h⁽ᴸ⁾和浅层隐藏状态h⁽ˡ⁾。选择浅层状态是因为其与语音重建目标（S3 token）相关性更高（图6证实）。
    2.  基于注意力的聚合器：这是TASTE的核心。它接收文本token序列v，以v为查询（Q），深层隐藏状态h⁽ᴸ⁾为键（K），浅层隐藏状态h⁽ˡ⁾为值（V），进行多头交叉注意力计算。这使得聚合器的输出长度自动对齐文本序列长度N，得到文本对齐的连续表示z ∈ ℝᴺˣᵈᶻ。
    3.  量化器：使用RVQ（残差向量量化，4层，码本大小512，维度256）将z离散化，得到离散的语音token序列q和重构的量化嵌入̂z。两者长度均为N。
- 训练目标：最小化语音重建的交叉熵损失（公式3）和RVQ的承诺损失（公式4）之和。
- 架构图：

![传统语音Tokenizer与TASTE的概念对比图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/6STb8DauN1-1.png)

图1：左侧展示传统语音tokenizer输出的语音token序列与文本token长度不匹配（mismatch in lengths），导致联合建模困难（non-trivial）；右侧展示TASTE采用语音-文本双模态输入，输出在长度上与文本对齐的语音token ̂z₁, ̂z₂, ̂z₃，从而支持简单直接的Text-Aligned SLM联合建模。

2. 基于TASTE的口语语言模型（TASLM）（见图1）：
- 输入：对齐的文本token序列v和TASTE语音token序列q（或连续嵌入̂z）。
- 建模方式：支持两种模式：
    1.  TASLMtoken：在预训练的文本LLM（如LLaMA）上使用LoRA进行微调。在每个时间步，模型同时预测下一个文本token和对应的R层RVQ语音token（多头预测，公式6）。
    2.  TASLMemb：建模连续的TASTE嵌入̂z。参考MELLE，使用线性层预测潜在分布的参数（均值和方差），并引入KL散度损失和正则化损失（公式7，8）。
- 概念对比图：

图1直观地展示了TASTE的优势。传统方法（上）的语音token与文本token长度不匹配，需要复杂处理；TASTE（下）生成对齐的token，使得联合建模变得直接。

3. 语音解码器：
- 接收条件：对齐的TASTE嵌入̂z和文本嵌入v，通过加权求和融合（附录A.5）。
- 结构：一个基于Transformer的单元解码器（UnitDecoder），预测目标语音单元（S3 token），再通过预训练的声码器（Flow + HiFi-GAN）转换为波形。

### 💡 核心创新点

1.  提出文本对齐的语音Tokenization（TASTE）：针对联合SLM中语音与文本token长度不匹配的核心问题，创造性地在tokenization阶段就利用交叉注意力机制将语音表示与文本转录对齐，生成长度一一对应的语音token。这是实现简单、高效联合建模的基础。
2.  设计高效的注意力聚合器：聚合器创新性地使用文本作为查询，语音编码器的深层表示作为键（用于获取对齐线索），浅层表示作为值（用于保留声学细节），以端到端的方式学习软对齐，无需显式的强制对齐工具。
3.  提出完整的联合Tokenization-Embedding框架：TASTE是首个端到端利用重建目标来学习专为文本-语音联合建模设计的分词和嵌入方法（论文自述）。它不仅生成离散token（TASLMtoken），也生成可用于潜在建模的连续嵌入（TASLMemb），并验证了两种方式在联合SLM中的有效性。
4.  实现极低比特率的高质量语音重建：得益于文本token已提供大量语义信息，TASTE语音token可专注于编码副语言信息，在~150 bps的极低比特率下，实现了接近高比特率方法（如600 bps的S3 token）的重建质量（WER 4.4% vs 3.0%，说话人相似度0.80 vs 0.82，表1），并天然支持文本对齐的语音编辑（图3）。

### 🔬 细节详述

- 训练数据：
    - 训练集：Emilia（约4万小时，英文子集，伪标签转录）、LibriTTS（约600小时，朗读风格）。
    - 测试集：LibriSpeech test-clean。
- 损失函数：
    - TASTE训练：L_taste = L_ce（语音单元重建交叉熵） + L_rvq（RVQ承诺损失）。
    - TASLMtoken：多任务交叉熵损失（文本token预测 + R个RVQ层的语音token预测，公式6）。
    - TASLMemb：L_emb = λ_reg  L_reg（回归损失） + λ_KL  L_KL（KL散度损失） + 文本交叉熵损失（公式8）。其中λ_reg, λ_KL为权重系数（论文未明确给出具体数值）。
- 训练策略：
    - TASTE分词器：使用Adam优化器，学习率0.0016，batch size 160秒/卡，8张NVIDIA A6000 GPU训练5个epoch（约2天）。前2个epoch不启用量化。
    - TASLM：在预训练LLM（LLaMA3.2-1B）上使用LoRA（rank=64, α=128）微调。优化器AdamW，余弦学习率调度，学习率1e-5。Batch size 768（梯度累积2步），8张A6000 GPU，使用bfloat16混合精度、DeepSpeed和Liger Kernel加速。
- 关键超参数：
    - Whisper编码器层数L，浅层l=6。
    - RVQ层数R=4，码本大小512，码本维度256。
    - TASLM嵌入维度d_z=256（推断）。
- 训练硬件：TASTE训练和TASLM微调均使用8块NVIDIA A6000 GPU。
- 推理细节：TASLMtoken在推理时同时采样文本和语音token；TASLMemb则预测潜在分布并采样。最终语音由语音解码器生成。论文未提及具体的解码温度、beam size等细节。
- 正则化技巧：使用LoRA进行参数高效微调；在TASLMemb中使用KL散度损失和回归损失进行潜在建模的正则化。

### 📊 实验结果

表1：语音分词器重建评估（LibriSpeech test-clean）

| 方法 | 频率 (token/s) | 比特率 (bps) | WER ↓ | UTMOS ↑ | DNS-MOS ↑ | ViSQOL ↑ | 时长一致性 ↑ | 说话人相似度 ↑ | MUSHRA ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ground Truth | 16k | 256k | 2.1% | 4.09 | 3.84 | - | - | - | 76.6 |
| Encodec | 75 | 1500 | 5.1% | 1.58 | 3.26 | 3.46 | 0.94 | 0.63 | - |
| SpeechTokenizer | 50 | 2000 | 3.0% | 3.56 | 3.60 | 3.65 | 0.97 | 0.80 | 53.9 |
| Mimi | 12.5 | 1000 | 3.1% | 3.60 | 3.60 | 3.62 | 0.96 | 0.82 | 67.6 |
| S3 token (topline) | 25 | 600 | 3.0% | 4.18 | 3.90 | 3.30 | 0.96 | 0.82 | 70.2 |
| Text-only (baseline) | ~3 | ~50 | 5.9% | 4.31 | 4.11 | 2.44 | 0.57 | 0.78 | 42.6 |
| TASTE (ours) | ~3 | ~150 | 4.4% | 4.29 | 4.10 | 3.05 | 0.91 | 0.80 | 68.3 |

结论：TASTE在极低比特率（~150 bps）下，在质量（WER、UTMOS、DNS-MOS）和相似度（时长、说话人、MUSHRA）指标上均显著优于纯文本基线，并接近或达到更高比特率的SOTA方法水平。

表2：预训练SLM语音续写和似然评估结果

| 方法 | 微调/基础模型参数 | 续写评估 (GPT-4o/UTMOS/人工MOS) | 似然评估 (SALMON/StoryCloze/总平均) |
| :--- | :--- | :--- | :--- |
| 级联模型 | | | |
| Cascade (LLaMA3.2-1B) | - | 3.15 / 4.25 / 4.00 | - / - / - |
| SLM | | | |
| TWIST 1.3B | 1.3B / 1.3B | 1.48 / 3.25 / 1.95 | 62.5 / 61.5 / 62.0 |
| TWIST 7B | 7B / 7B | 1.44 / 3.27 / 2.04 | 63.4 / 64.7 / 64.1 |
| Spirit LM | 7B / 7B | 2.79 / 3.41 / 2.38 | 59.1 / 72.0 / 65.6 |
| 基线 (S3 token) | 45M / 1.3B | 1.37 / 4.04 / 2.84 | 50.2 / 58.7 / 54.5 |
| TASLM 1B (token) | 45M / 1.3B | 3.08 / 4.07 / 3.93 | 60.8 / 76.5 / 68.7 |
| TASLM 1B (embed.) | 45M / 1.3B | 3.16 / 4.22 / 4.16 | 57.7 / 76.7 / 67.2 |

结论：使用TASTE构建的SLM（仅微调45M参数）在语音续写的所有评估维度上均大幅超越之前7B参数的SLM（如TWIST, Spirit LM），并在似然基准测试中表现最佳。其生成语音的自然度（UTMOS 4.22）甚至超过了对应的级联系统（4.25），表明联合建模的优势。

表4：TASTE分词器消融研究（重建准确率）

| 模块组合 | 频率 | S3 token 准确率* |
| :--- | :--- | :--- |
| 仅编码器 | 50Hz | 0.98 |
| 编码器 + 聚合器 | ~3Hz | 0.88 |
| 编码器 + 聚合器 + 量化器 | ~3Hz | 0.76 |
| 仅编码器(深层) | 50Hz | 0.84 |
| 编码器 + 聚合器(深层作为值) | ~3Hz | 0.78 |
| 纯文本 | ~3Hz | 0.65 |

结论：聚合器能大幅降低token频率（50Hz -> ~3Hz），且使用浅层编码器表示作为值（第6行）比使用深层表示（第5行）效果更好，验证了其设计选择。即使经过量化，性能仍远高于纯文本基线。

![注意力聚合器可视化](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/6STb8DauN1-4.png)

图4展示了聚合器最后一层的交叉注意力地图，多个头表现出清晰的文本-语音对齐模式，验证了聚合器学习到了预期的软对齐关系。

### ⚖️ 评分理由

- 学术质量：6.0/7：创新点集中且实用（文本对齐tokenization），技术方案合理（注意力聚合、基于重建的训练），实验充分（重建、续写、似然、QA多任务），结果具有说服力。但核心思想（模态对齐）并非前所未有，技术门槛相对适中。
- 选题价值：1.5/2：切中当前SLM发展的核心痛点（联合建模效率），提出的解决方案能显著简化系统流程并提升性能，具有重要的理论指导意义和实际应用价值（如低延迟对话系统）。
- 开��与复现加成：0.5/1：提供了代码、模型、在线演示链接（https://mtkresearch.github.io/TASTE-SpokenLM.github.io），训练细节和超参数在附录中说明详细，复现门槛较低。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
