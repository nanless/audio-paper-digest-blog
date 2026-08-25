---
title: "Comparative Analysis of Multilingual Pre-trained Models for Nepali Automatic Speech Recognition"
date: 2026-08-14
draft: false
tags: [语音识别, 迁移学习, 多语言, 低资源, 基准测试]
categories: [论文速递]
description: "语音识别 | 7.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.12327"
---

# 📄 Comparative Analysis of Multilingual Pre-trained Models for Nepali Automatic Speech Recognition

标签：#语音识别 #迁移学习 #多语言 #低资源 #基准测试

**7.6/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 清晰 0.8/1 | 影响 0.8/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.6/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：中 | #语音识别 | #迁移学习 | #多语言 #低资源 | [arxiv](https://arxiv.org/abs/2608.12327)


### 👥 作者与机构

- 第一作者：Suman Paudel（Tribhuvan University, School of Mathematical Sciences）
- 通讯作者：未说明
- 作者列表：Suman Paudel（Tribhuvan University, School of Mathematical Sciences）、Sarbin Sayami（Tribhuvan University, Central Department of Computer Science and Information Technology）

### 💡 毒舌点评

这项工作把“fine-tune 六个现成多语言预训练模型”做成了尼泊尔 ASR 目前最需要的受控基准，proximity-vs-scale 和 29× RTF 差异是有信息量的部署结论。但研究更像一次严谨的模型体检：没有多 seed 或统计显著性检验，Common Voice 上所有模型集体崩坏却未做系统声学/文本噪声归因，“MMS-1B 域外退化最小”这一卖点也部分被其较差的内域基线稀释。结论主要建立在一个朗读语料协议和单一训练配置上，还不足以形成尼泊尔低资源 ASR 的完整可靠性判断。

### 📌 核心摘要

该论文解决的是尼泊尔自动语音识别缺乏受控、多模型、多数据集基准的问题。方法核心是在 OpenSLR SLR54 约 165 小时尼泊尔语料上，以统一的预处理、切分、优化器和分家族学习率调度 fine-tune 六个多语言预训练模型，并在 OpenSLR、FLEURS、Common Voice 三个测试集上评测 WER/CER/RTF。与已有分散的单模型研究相比，该工作首次在同一协议下比较 CTC 自监督、自回归编码器-解码器和混合 Conformer-CTC 三类架构。主要结果是 Whisper-Large-v3-Turbo 与 IndicWav2Vec 在 OpenSLR 内域 WER 上几乎打平，分别为 14.76% 和 14.89%，尽管参数量相差约 9 倍；CTC 解码最多比自回归 Whisper 快约 29 倍。实际意义是为低资源尼泊尔 ASR 提供了可复现的模型选择和部署参考，并发布代码、检查点和逐句预测基准数据。主要局限是只覆盖朗读语音、未引入外部语言模型、Conformer-Hi 使用不同训练管线，以及缺乏统计显著性层面的验证。

### 🔗 开源详情

- 代码：https://github.com/p-sumann/nepali-asr-benchmark（论文原文：`github.com/p-sumann/nepali-asr-benchmark`）
- 模型权重：已发布的 6 个微调检查点：https://huggingface.co/sumanpaudel1997（论文原文：`huggingface.co/sumanpaudel1997`）。各预训练基座模型（XLSR-53、IndicWav2Vec、MMS-1B、Whisper-Medium、Whisper-Large-v3-Turbo、Conformer-Hi）论文未逐一给出单独下载链接。
- 数据集：
  - 本工作发布：Nepali ASR benchmark（逐句 reference/prediction pairs）：https://huggingface.co/datasets/sumanpaudel1997/nepali-asr-benchmark
  - 训练/评估使用：OpenSLR SLR54（约 165 小时；论文未给出直接链接，官方入口：https://www.openslr.org/54/）；FLEURS ne_np（约 10 小时；论文未给出直接链接，官方入口：https://huggingface.co/datasets/google/fleurs）；Common Voice ne-NP（约 5 小时；论文未给出直接链接，官方入口：https://commonvoice.mozilla.org/ne-NP）。论文仅称 SLR54 为公开许可（openly licensed），未明确具体许可证。
- Demo：论文中未提及
- 复现材料：
  - 代码、6 个微调检查点、逐句预测数据集均已公开（见上）。
  - 训练配置：Wav2Vec 2.0 家族 AdamW，学习率 \(3 \times 10^{-4}\)，batch size 8，500 步 warmup，余弦衰减，10 epochs，冻结卷积特征编码器；Whisper 家族 AdamW，学习率 \(1 \times 10^{-5}\)，batch size 8，线性 warmup/decay，3–6 epochs，全参数训练；Conformer-Hi 使用 NVIDIA NeMo，AdamW，学习率 \(1 \times 10^{-4}\)，batch size 16，余弦退火，10 epochs；所有模型使用 SpecAugment；早停条件为验证 WER 连续 3 轮停滞。
  - 预处理：16 kHz 重采样、立体声转单声道、NFC Unicode 正规化、去标点、移除小于 0.5 秒或大于 30 秒语句；Wav2Vec 2.0 家族使用原始波形，Whisper/Conformer 家族使用 80 维 log-Mel（25 ms/10 ms）。
  - 硬件与软件：单卡 NVIDIA L4 24 GB 为主，部分最大检查点使用 A100 80 GB；Whisper-Large-v3-Turbo 需要梯度累积；Hugging Face Transformers/Datasets、NVIDIA NeMo、jiwer；WER/CER 使用 jiwer 在 NFC 正规化后计算；RTF 以 batch size 1 测量。
  - 数据划分与随机性：OpenSLR SLR54 按 80/10/10 且说话人隔离划分，FLEURS/Common Voice 使用预定义测试划分；固定随机种子，使用 FP16 混合精度。
- 论文中引用的开源项目：
  - OpenSLR SLR54：https://www.openslr.org/54/
  - FLEURS：https://huggingface.co/datasets/google/fleurs
  - Common Voice：https://commonvoice.mozilla.org/ne-NP
  - Hugging Face Transformers：https://github.com/huggingface/transformers
  - Hugging Face Datasets：https://github.com/huggingface/datasets
  - NVIDIA NeMo：https://github.com/NVIDIA/NeMo
  - jiwer：https://github.com/jitsi/jiwer
  - Wav2Vec 2.0 / fairseq：https://github.com/pytorch/fairseq/tree/main/examples/wav2vec
  - OpenAI Whisper：https://github.com/openai/whisper
  - SpecAugment：论文引用但未给出具体开源实现链接
  - 预训练模型 XLSR-53、IndicWav2Vec、MMS-1B、Conformer-Hi 的具体下载链接论文未逐一给出

### 🏗️ 方法概述和架构

该论文不是提出新模型，而是构建一个受控基准系统。整体流程分为三个阶段：Phase 1 零样本评估，Phase 2 受控 fine-tune，Phase 3 多测试集评估与 RTF 测量。零样本阶段只对具有尼泊尔解码能力的模型有意义；Conformer-Hi 与 XLSR-53 缺少尼泊尔感知解码头，因此不进入零样本比较。

预处理对所有数据集和模型统一：音频重采样到 16 kHz，立体声转单声道；转录文本做 Unicode NFC 归一化并去除标点；删除小于 0.5 秒或大于 30 秒的语句；Wav2Vec 2.0 家族接收原始波形，Whisper 与 Conformer-CTC 家族接收 80 维 log-Mel 谱特征，窗长 25 ms、步长 10 ms。

模型部分覆盖三类架构。第一类是 CTC 自监督 Wav2Vec 2.0 家族，包括 XLSR-53、IndicWav2Vec 和 MMS-1B。三者由卷积特征编码器、Transformer 层和顶部 CTC 线性解码头组成；fine-tune 时冻结卷积特征编码器，仅更新 Transformer 层和 CTC head。第二类是自回归编码器-解码器 Whisper 家族，包括 Whisper-Medium 和 Whisper-Large-v3-Turbo；它们将 log-Mel 谱编码后，通过自回归 Transformer 解码器逐 token 生成文本，所有参数可训练。第三类是 Conformer-Hi，是 NVIDIA NeMo 中 Hindi 预训练的混合 Conformer-CTC 检查点，将多头自注意力与深度可分离卷积交织，以 CTC 方式解码。

训练协议是统一比较的关键。Wav2Vec 2.0 家族使用 AdamW、学习率 \(3 \times 10^{-4}\)、batch size 8、500 步 warmup、10 epoch 余弦衰减，并冻结卷积特征编码器。Whisper 家族使用 AdamW、学习率 \(1 \times 10^{-5}\)、batch size 8、线性 warmup 与线性衰减、3 到 6 epoch，所有参数可训练。Conformer-Hi 在 NeMo 管线中使用 AdamW、学习率 \(1 \times 10^{-4}\)、batch size 16、10 epoch 余弦退火。所有模型均施加 SpecAugment。早停条件是验证集 WER 连续三轮不再改善。该设计不是为了提出新训练算法，而是为了在架构差异之外尽量统一训练协议，使模型比较更公平。

评估组件中，WER 和 CER 由 jiwer 在 NFC 归一化后计算，定义为

\[
WER = \frac{S+D+I}{N} \times 100\%,
\]

\[
CER = \frac{S_c+D_c+I_c}{N_c} \times 100\%.
\]

WER 衡量词级插入、删除、替换错误；CER 在字符级捕捉 Devanagari 拼写保真度，因为尼泊尔语词边界模糊且形态复杂。RTF 定义为

\[
RTF = \frac{T_{\text{processing}}}{T_{\text{audio}}},
\]

在单张 NVIDIA L4 GPU 上以 batch size 1 测量，模拟单句实时推理。论文还通过从 OpenSLR 到 FLEURS、Common Voice 的 WER 差值定义泛化缺口，以此区分模型鲁棒性与内域精度。总体上，方法链路清晰，重点在于统一协议下做系统性模型比较，而非改进任何单一模型内部结构。

### 💡 核心创新点

1. 首个标准化多模型、多数据集尼泊尔 ASR 基准。此前研究各自使用不同预处理和单一数据集，导致无法跨模型比较；该工作通过统一切分、预处理、优化器和评估协议，使六类预训练模型具备可比性。
2. 实证分离预训练语言族接近性（proximity）与预训练规模（scale）的作用。IndicWav2Vec（94.4M 参数）与 Whisper-Turbo（809M 参数）在 OpenSLR 内域 WER 几乎打平；Conformer-Hi（30.5M）在验证 WER 与测试 WER 上均超过 XLSR-53（317M）和 MMS-1B（965M），支持“语言族接近性可以替代规模”的洞见。
3. 首次给出尼泊尔 ASR 的 RTF 系统测量。CTC 解码器比自回归 Whisper 最多快约 29 倍，部署偏好从绝对精度转向延迟预算约束。
4. 识别出“规模换鲁棒性而非内域精度”的规律。MMS-1B 在 OpenSLR 内域仅为中游，但 FLEURS 域外 WER 退化最小（+12.55 pp），说明大规模多语言预训练的主要价值可能在于跨域稳健性。
5. 发布六个 fine-tuned 检查点以及逐句参考/预测基准数据集，形成可复用资产，降低后续尼泊尔 ASR 研究进入成本。

核心创新点之一是实证分离预训练语言族接近性与模型规模的作用。下图以散点图形式展示了参数规模与最佳验证WER的关系。

![图 4：模型规模（对数）与最佳验证集 WER。两个语言族更接近的小模型可媲美或超过参数量高 3–30 倍的广泛多语言模型。](https://arxiv.org/html/2608.12327v1/x4.png)

图中可见，参数量较小的IndicWav2Vec和Conformer-Hi达到了与数倍于其规模模型相当甚至更优的性能，支持了语言族接近性可以替代规模的洞见。

### 📊 实验结果

主结果是六个模型在三个测试集上的 fine-tuned WER/CER 以及 RTF。本论文本质是模型比较基准，没有传统意义上的“本文方法”和消融组；因此下表直接保留全部六个模型作为对比对象。

| 模型 | OpenSLR WER | OpenSLR CER | FLEURS WER | FLEURS CER | Common Voice WER | Common Voice CER |
|---|---:|---:|---:|---:|---:|---:|
| Whisper-Turbo | 14.76 | 3.48 | 39.56 | 13.70 | 48.35 | 12.90 |
| IndicWav2Vec | 14.89 | 3.07 | 40.68 | 12.74 | 51.65 | 15.38 |
| Whisper-Medium | 15.57 | 3.85 | 39.06 | 12.92 | 48.98 | 12.74 |
| Conformer-Hi | 26.28 | 6.61 | 41.05 | 13.84 | 58.49 | 17.06 |
| XLSR-53 | 26.85 | 5.99 | 57.78 | 14.81 | 62.78 | 16.50 |
| MMS-1B | 27.28 | 6.06 | 39.83 | 10.66 | 58.65 | 15.08 |

为了更直观地展示各模型在三个测试集上的性能差异，下图提供了词错误率的柱状对比。

![Figure 3: Fine-tuned WER across all six models and three test sets.](https://arxiv.org/html/2608.12327v1/x3.png)

图中可见，Whisper-Turbo与IndicWav2Vec在OpenSLR内域数据集上表现最佳且十分接近，而所有模型在Common Voice上的性能均有显著下降。


表 1：六个模型在三个测试集上的 fine-tuned WER/CER（%）。Whisper-Turbo 与 IndicWav2Vec 在 OpenSLR 上仅差 0.13 个百分点，MMS-1B 在 FLEURS 上 CER 最低。

| 模型 | OpenSLR RTF | FLEURS RTF | Common Voice RTF |
|---|---:|---:|---:|
| Conformer-Hi | 0.0020 | 0.0019 | 0.0017 |
| IndicWav2Vec | 0.0025 | 0.0030 | 0.0024 |
| XLSR-53 | 0.0080 | 0.0088 | 0.0074 |
| MMS-1B | 0.0214 | 0.0230 | 0.0197 |
| Whisper-Medium | 0.0850 | 0.0826 | 0.0890 |
| Whisper-Turbo | 0.0979 | 0.0460 | 0.0832 |

表 2：三个测试集上的实时因子（RTF，batch size 1，单张 L4 GPU）。IndicWav2Vec 与 Whisper-Turbo 准确率接近，但后者慢约 29 倍。

零样本阶段，只有 MMS-1B 在 FLEURS 上产生可用输出，WER 31.75%、CER 8.48%；Whisper 模型主要幻觉成印地语或英语；IndicWav2Vec 因未初始化尼泊尔 CTC 头，WER 超过 200%。这些结果被用于证明 fine-tune 对尼泊尔语是必要的。

训练过程中的最佳验证 WER：Whisper-Turbo 14.27%，IndicWav2Vec 15.08%，Whisper-Medium 15.12%，Conformer-Hi 24.68%，XLSR-53 26.73%，MMS-1B 26.99%。训练时长方面，Conformer-Hi 约 3.2 小时，IndicWav2Vec 约 5.9 小时，Whisper-Turbo 约 33.9 小时。

泛化分析显示，MMS-1B 从 OpenSLR 到 FLEURS 的 WER 仅增加 12.55 个百分点，远低于 XLSR-53 的 +30.93 pp 和 IndicWav2Vec 的 +25.79 pp。Common Voice 上所有模型退化严重，最优模型也超过 48% WER。论文没有提供多 seed、置信区间或统计显著性检验结果。

为了分析模型从域内到域外的泛化能力，下图对比了各模型在OpenSLR（域内）与FLEURS和Common Voice均值（域外）上的WER。

![Figure 5: In-domain (OpenSLR) versus out-of-domain (mean of FLEURS and Common Voice) WER per model.](https://arxiv.org/html/2608.12327v1/x5.png)

图中可见，MMS-1B虽然域内性能中游，但域外退化幅度最小，这与其大规模多语言预训练带来的跨域稳健性相符。

### 🔬 细节详述

- 训练数据：OpenSLR SLR54，约 165 小时尼泊尔朗读语音，来自 527 名志愿者，按 80/10/10 切分为训练、验证、测试，且说话人不重叠。预处理为 16 kHz 单声道、NFC 文本归一化、去标点、删除小于 0.5 秒或大于 30 秒的语句。评估数据包括 OpenSLR 测试集、FLEURS ne_np 约 10 小时朗读语音、Common Voice ne-NP 约 5 小时众包语音。数据增强方面仅提到 SpecAugment。
- 损失函数：未说明。论文没有明确写出 CTC loss、交叉熵损失、损失权重或任何损失公式。
- 训练策略：Wav2Vec 2.0 家族用 AdamW，学习率 \(3 \times 10^{-4}\)，batch size 8，500 步 warmup，10 epoch 余弦衰减，并冻结卷积特征编码器；Whisper 家族用 AdamW，学习率 \(1 \times 10^{-5}\)，batch size 8，线性 warmup/decay，3–6 epoch，所有参数可训练；Conformer-Hi 用 AdamW，学习率 \(1 \times 10^{-4}\)，batch size 16，10 epoch 余弦退火。所有模型均使用 SpecAugment。早停条件为验证 WER 连续三轮停滞。
- 关键超参数：模型参数规模如表，Conformer-Hi 30.5M，IndicWav2Vec 94.4M，XLSR-53 317M，Whisper-Medium 769M，Whisper-Turbo 809M，MMS-1B 965M。层数、隐藏维度、注意力头数、码本大小、dropout 和 SpecAugment 具体参数未说明。
- 训练硬件：单张 NVIDIA L4 GPU，24 GB VRAM；部分最大检查点使用单张 A100 80 GB 实例。Whisper-Large-v3-Turbo 需要梯度累积。使用 FP16 混合精度并固定随机种子，但未说明具体 seed 值、GPU 并发数量或 CPU 配置。
- 推理细节：RTF 在单张 L4、batch size 1 下测量。解码策略、beam size、温度、重复惩罚、流式设置和最大解码长度均未说明。
- 正则化或稳定训练技巧：SpecAugment、早停、FP16 混合精度。其他如权重衰减、标签平滑、梯度裁剪等未说明。

### ⚖️ 评分理由

*   创新性 (1.2/2)：首个统一协议下的尼泊尔 ASR 多模型多数据集基准，覆盖三类架构；实证分离语言族接近性与规模，并首次给出 RTF 系统测量，发布可复用基准资产，故给 1.2。

*   技术严谨性 (1.0/1.5)：统一预处理、分家族训练协议和评估指标定义逻辑自洽，WER/CER/RTF 公式表述清晰，未发现明显推导错误或算法逻辑漏洞；但未对训练协议等价性等关键前提做进一步严谨性论证，故给 1.0。

*   实验充分性 (1.1/1.5)：覆盖六个模型、三个测试集和 WER/CER/RTF，说话人分离与统一早停是优点；但缺少多 seed/显著性检验，零样本比较条件不齐，MMS-1B 泛化结论存在基线稀释而未补充相对退化，Common Voice 高 WER 未做错误归因，RTF 仅 batch size 1，且验证与测试同源带来轻度选择偏差，故给 1.1。

*   清晰度 (0.8/1)：论文结构清晰，三个阶段和评估指标均有明确解释；WER/CER/RTF 定义完整，结果表组织清楚，故给 0.8。

*   影响力 (0.8/1.5)：为低资源尼泊尔 ASR 提供缺少的统一模型选择与部署参考，对语音/音频领域有直接参考价值，但影响集中于尼泊尔语和朗读语音场景，故给 0.8。

*   开源 (1.2/1.5)：代码、6 个微调检查点和逐句 reference/prediction 基准数据集均已开放；但基座模型下载链接未逐一给出、许可证细节不完整，按固定锚点核心产物开放而文档不完整，给 1.2。

*   可复现性 (0.3/0.5)：论文披露了统一预处理、训练超参数、硬件、早停、混合精度和 RTF 测量方式；但损失函数、解码策略/beam size、SpecAugment 具体参数、具体 seed 值及部分模型架构超参缺失，属大部分充分但有少量缺失，给 0.3。

*   工程/实践价值 (1.2/1.5)：RTF 测量揭示 CTC 比自回归 Whisper 快约 29 倍，直接支持延迟预算下的部署选择；发布检查点和基准数据降低落地门槛，工程实践价值较强，给 1.2。

### 🚨 局限与问题

1. 论文明确承认的局限：
- 实验主要基于单张 L4 GPU，硬件限制了 batch size 和大模型训练轮数。
- Conformer-Hi 使用 NVIDIA NeMo 管线，虽对齐预处理协议，但与其他模型不是 bit-for-bit 相同训练实现。
- 所有评估局限于朗读语音，未覆盖自然对话、尼泊尔语-英语/印地语语码混合和方言差异。
- 解码过程没有使用外部语言模型，结果只反映声学模型性能，可能低估浅层融合或重打分后的表现。
- 使用公开预训练检查点，未继续在无标注尼泊尔语音上做自监督预训练。

2. 审稿人发现的潜在问题：
- 统计稳健性不足：未报告多 seed 训练、方差、置信区间或显著性检验，难以判断 0.13 pp 的差距是真实差异还是随机波动。
- 域外结论过于依赖单一训练协议：三个测试集虽不同，但模型只用 OpenSLR 朗读数据 fine-tune，结论不能推广到其他数据分布或训练策略。
- 零样本比较不公平：CTC 模型缺失尼泊尔解码头，与 Whisper 零样本提示条件不同，零样本表容易误导读者。
- MMS-1B 的“域外退化最小”存在基线稀释问题：其内域 WER 本来处于最差档，较小的绝对 WER 增长可能部分来自较差起点；应补充相对退化或错误率比率，才能更可靠地声称“规模买鲁棒性”。
- Common Voice 高 WER 未深入分析：是背景噪声、口音、语音长度，还是众包转写噪声主导错误，没有提供错误类型分解，削弱了“鲁棒性”判断的可靠性。
- RTF 只在 batch size 1 下测量，未呈现 batch 推理、不同 beam size 或不同 GPU 上的效率表现，部署结论的通用性有限。
- 验证集与测试集虽说话人分离，但都来自同一朗读语料，最优模型在验证集上早停和报告测试结果可能带来轻度选择偏差。

---

[← 返回 2026-08-14 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-14/)
