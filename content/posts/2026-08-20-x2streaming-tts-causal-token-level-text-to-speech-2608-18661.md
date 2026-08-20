---
title: "X2Streaming-TTS: Causal Token-Level Text-to-Speech from Streaming Text with Speech-State Inheritance"
date: 2026-08-20
draft: false
tags: [语音合成, 自回归模型, 流式处理, 高效推理]
categories: [论文速递]
description: "语音合成 | 7.9/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.18661"
---

# 📄 X2Streaming-TTS: Causal Token-Level Text-to-Speech from Streaming Text with Speech-State Inheritance

标签：#语音合成 #自回归模型 #流式处理 #高效推理

**7.9/10** | 创新 1.6/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1.1/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.9/10** | 前25% | 文档类型：模型报告 | 评分置信度：中 | #语音合成 | #自回归模型 | #流式处理 #高效推理 | [arxiv](https://arxiv.org/abs/2608.18661)


### 👥 作者与机构

第一作者：Rime Wen（机构未说明）
通讯作者：未说明
作者列表：Rime Wen、Zehan Liu、Shawn Qin、Lights Shi、Roy Gan、Hao Wang、Qian Wang（机构信息未在当前正文中完整说明）

### 💡 毒舌点评

切中了低延迟语音交互的真正瓶颈；但没有可核验的延迟和质量数字时，系统优势仍是待验证假设。 亮点是一是定义真正 token-level 而非句级伪流式 TTS；二是用 speech-state inheritance 维持跨窗口连续性；三是把无限文本流的有界上下文和低延迟同时纳入设计；短板是长时间状态可能累积漂移；文本改写、回退、跨句韵律和突发 token 对稳定性的影响需要单独评估，不能只凭短句 benchmark 结论。

### 📌 核心摘要

X2Streaming-TTS: Causal Token-Level Text-to-Speech from Streaming Text with Speech-State Inheritance 面向如何从不完整的流式文本逐 token 生成连续自然语音。论文的核心贡献形态是模型报告，把问题转化为可执行的音频/语音/音乐或多模态处理流程。一是定义真正 token-level 而非句级伪流式 TTS；二是用 speech-state inheritance 维持跨窗口连续性；三是把无限文本流的有界上下文和低延迟同时纳入设计。  对音频读者而言，它的实际意义在于提供可复用的任务定义或工程证据。主要局限包括：长时间状态可能累积漂移；文本改写、回退、跨句韵律和突发 token 对稳定性的影响需要单独评估，不能只凭短句 benchmark 结论。

### 🔗 开源详情

论文中未提及代码、模型权重或可试听 demo 的公开地址。 论文引用的预训练模型或外部工具仅作为依赖记录，不能视为本文核心产物已开源。

- 补充链接（自动提取）：
  - 代码仓库：https://github.com/X-Square-Robot/X2Streaming-TTS

### 🏗️ 方法概述和架构

X2Streaming-TTS 把文本流的每个 token 作为不确定前缀，持续生成语音而不是等待完整句子。模型维护 speech state，在新 token 到达时继承已有声学上下文，预测下一段声学 token 或波形，并通过有限上下文控制无限流的计算量。输出必须在文本不断扩展时保持感知连续。 架构包含 token-level 文本编码、speech-state inheritance、因果声学生成和流式解码。状态继承连接前一窗口和当前窗口，因果路径保证未来文本不会泄漏到当前语音；边界处需要拼接、停顿和 prosody 处理。论文的关键比较应包括句级 TTS、伪流式系统和真正 token-level 生成，具体网络规模和解码缓存配置未在摘要给出。 设计取舍是上下文长度、延迟与长期连贯性之间的平衡；继承状态可降低重复计算，却可能把早期错误长期传播。对不完整文本的鲁棒性是价值所在，但需要真实打断、修订和长时对话测试。

全文方法与训练段落给出的可复现设置如下：

第 1 个证据块：论文明确写到“Figure 1 maps these challenges onto the synthesis pipeline: the left panel traces token-level text release and audio generation, while the right panel shows first-audio latency, irreversible commitment under prefix ambiguity, and cross-segment discontinuity together with the mechanisms that address them. A streaming frontend determines which observed text can be released, the Talker converts the released text into discrete acoustic tokens, and Code2Wav decodes these tokens into a waveform.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 2 个证据块：论文明确写到“4 Experiments Model Streaming Granularity SEED-TTS-Eval MiniMax Long-text extrapolation CERZH WEREN CERZH WEREN 1×1\times 2×2\times 5×5\times 10×10\times Qwen3-TTS-12Hz-1.7B ✗ Offline 1.10 1.43 0.87 1.85 3.95 3.05 4.01 3.93 F5-TTS ✗ Offline 1.52 2.00 3.74 2.08 4.42 3.81 5.04 4.95 FireRedTTS-2 ✓ Chunk 1.14 1.95 0.97 2.25 5.36 4.79 5.04 5.32 CosyVoice 2-S ✓ Chunk 1.45 2.57 1.98 2.38 4.76 3.83 5.05 5.48 CosyVoice 3-S ✓ Chunk 0.81 1.68 1.43 2.21 4.72 3.36 4.86 5.12 X2Streaming-TTS(Ours) ✓ Token 0.78 1.93 0.78 1.86 2.55 3.67 4.08 4.36 Table 1: Intelligibility and long-text robustness (% error; lower better).”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 3 个证据块：论文明确写到“We present X2Streaming-TTS, a causal TTS framework that consumes asynchronously arriving text tokens and emits speech without accessing future input.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 4 个证据块：论文明确写到“Experiments show that X2Streaming-TTS outperforms existing pseudo-streaming models on most subjective and objective metrics.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 5 个证据块：论文明确写到“Our implementation is publicly available at https://github.com/X-Square-Robot/X2Streaming-TTS.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

![Figure 1: Left: Streaming pipeline under token-level arrival. The frontend releases only TTS-ready text (PAD when nothing is ready; ambiguous spans such as 3 in He finished 3 are held until pronunciation is resolved), the Talker emits acoustic tokens, and Code2Wav streams waveform for immediate playback. Right: Three challenges and the corresponding mechanisms—(1) first-audio latency via token-level rather than chunk-level start; (2) irreversible early commitment via uncertainty-aware buffering; (3) cross-segment discontinuity via speech-state inheritance.](https://arxiv.org/html/2608.18661v1/figures/fig1_pipeline.png)

![Figure 2: Speech-state inheritance across a segment boundary. After a health check on Sk−1S_{k-1}, its Code2Wav state warm-starts SkS_{k}, while its trailing Talker states provide bounded historical context through causal-prior attention and a gated residual.](https://arxiv.org/html/2608.18661v1/figures/fig2_inheritance.png)

### 💡 核心创新点

1. 一是定义真正 token-level 而非句级伪流式 TTS，回应了既有方法或系统的具体瓶颈。
2. 二是用 speech-state inheritance 维持跨窗口连续性，并由论文的实验或系统设计支撑。
3. 三是把无限文本流的有界上下文和低延迟同时纳入设计。。

### 📊 实验结果

下面把全文实验段落中的设置、数字和比较关系逐项列出；指标方向沿用论文定义。

全文实验证据 1：Figure 1 maps these challenges onto the synthesis pipeline: the left panel traces token-level text release and audio generation, while the right panel shows first-audio latency, irreversible commitment under prefix ambiguity, and cross-segment discontinuity together with the mechanisms that address them. A streaming frontend determines which observed text can be released, the Talker converts the released text into discrete acoustic tokens, and Code2Wav decodes these tokens into a waveform.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 2：4 Experiments Model Streaming Granularity SEED-TTS-Eval MiniMax Long-text extrapolation CERZH WEREN CERZH WEREN 1×1\times 2×2\times 5×5\times 10×10\times Qwen3-TTS-12Hz-1.7B ✗ Offline 1.10 1.43 0.87 1.85 3.95 3.05 4.01 3.93 F5-TTS ✗ Offline 1.52 2.00 3.74 2.08 4.42 3.81 5.04 4.95 FireRedTTS-2 ✓ Chunk 1.14 1.95 0.97 2.25 5.36 4.79 5.04 5.32 CosyVoice 2-S ✓ Chunk 1.45 2.57 1.98 2.38 4.76 3.83 5.05 5.48 CosyVoice 3-S ✓ Chunk 0.81 1.68 1.43 2.21 4.72 3.36 4.86 5.12 X2Streaming-TTS(Ours) ✓ Token 0.78 1.93 0.78 1.86 2.55 3.67 4.08 4.36 Table 1: Intelligibility and long-text robustness (% error; lower better).。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 3：Experiments show that X2Streaming-TTS outperforms existing pseudo-streaming models on most subjective and objective metrics.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 4：Right: Three challenges and the corresponding mechanisms—(1) first-audio latency via token-level rather than chunk-level start; (2) irreversible early commitment via uncertainty-aware buffering; (3) cross-segment discontinuity via speech-state inheritance.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Figure 1 maps these challenges onto the synthesis pipeline: the left panel traces token-level text release and audio generation, while the right panel shows first-audio latency, irreversible commitment under prefix ambiguity, and cross-segment discontinuity together with the mechanisms that address them. A streaming frontend determines which observed text can be released, the Talker converts the released text into discrete acoustic tokens, and Code2Wav decodes these tokens into a waveform. |
| 主要结果 | 4 Experiments Model Streaming Granularity SEED-TTS-Eval MiniMax Long-text extrapolation CERZH WEREN CERZH WEREN 1×1\times 2×2\times 5×5\times 10×10\times Qwen3-TTS-12Hz-1.7B ✗ Offline 1.10 1.43 0.87 1.85 3.95 3.05 4.01 3.93 F5-TTS ✗ Offline 1.52 2.00 3.74 2.08 4.42 3.81 5.04 4.95 FireRedTTS-2 ✓ Chunk 1.14 1.95 0.97 2.25 5.36 4.79 5.04 5.32 CosyVoice 2-S ✓ Chunk 1.45 2.57 1.98 2.38 4.76 3.83 5.05 5.48 CosyVoice 3-S ✓ Chunk 0.81 1.68 1.43 2.21 4.72 3.36 4.86 5.12 X2Streaming-TTS(Ours) ✓ Token 0.78 1.93 0.78 1.86 2.55 3.67 4.08 4.36 Table 1: Intelligibility and long-text robustness (% error; lowe |
| 对照、消融或部署指标 | Experiments show that X2Streaming-TTS outperforms existing pseudo-streaming models on most subjective and objective metrics. |

![Figure 2: Speech-state inheritance across a segment boundary. After a health check on Sk−1S_{k-1}, its Code2Wav state warm-starts SkS_{k}, while its trailing Talker states provide bounded historical context through causal-prior attention and a gated residual. - 图2](https://arxiv.org/html/2608.18661v1/figures/fig2_inheritance.png)

### 🔬 细节详述

全文中还能定位到以下数据、训练或实现细节。它们补充了方法段没有展开的采样、数据规模、优化和部署边界：

- 细节证据 1：Figure 1 maps these challenges onto the synthesis pipeline: the left panel traces token-level text release and audio generation, while the right panel shows first-audio latency, irreversible commitment under prefix ambiguity, and cross-segment discontinuity together with the mechanisms that address them. A streaming frontend determines which observed text can be released, the Talker converts the released text into discrete acoustic tokens, and Code2Wav decodes these tokens into a waveform.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 2：4 Experiments Model Streaming Granularity SEED-TTS-Eval MiniMax Long-text extrapolation CERZH WEREN CERZH WEREN 1×1\times 2×2\times 5×5\times 10×10\times Qwen3-TTS-12Hz-1.7B ✗ Offline 1.10 1.43 0.87 1.85 3.95 3.05 4.01 3.93 F5-TTS ✗ Offline 1.52 2.00 3.74 2.08 4.42 3.81 5.04 4.95 FireRedTTS-2 ✓ Chunk 1.14 1.95 0.97 2.25 5.36 4.79 5.04 5.32 CosyVoice 2-S ✓ Chunk 1.45 2.57 1.98 2.38 4.76 3.83 5.05 5.48 CosyVoice 3-S ✓ Chunk 0.81 1.68 1.43 2.21 4.72 3.36 4.86 5.12 X2Streaming-TTS(Ours) ✓ Token 0.78 1.93 0.78 1.86 2.55 3.67 4.08 4.36 Table 1: Intelligibility and long-text robustness (% error; lower better).。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 3：We present X2Streaming-TTS, a causal TTS framework that consumes asynchronously arriving text tokens and emits speech without accessing future input.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 4：Experiments show that X2Streaming-TTS outperforms existing pseudo-streaming models on most subjective and objective metrics.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 5：Our implementation is publicly available at https://github.com/X-Square-Robot/X2Streaming-TTS.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

### ⚖️ 评分理由

* 创新性 (1.6/2)：一是定义真正 token-level 而非句级伪流式 TTS；二是用 speech-state inheritance 维持跨窗口连续性；三是把无限文本流的有界上下文和低延迟同时纳入设计。 相比常规流水线的新增点清楚，但仍需更多跨条件证据判断是否形成范式突破。
* 技术严谨性 (1.2/1.5)：方法链和适用边界基本自洽；长时间状态可能累积漂移；文本改写、回退、跨句韵律和突发 token 对稳定性的影响需要单独评估，不能只凭短句 benchmark 结论 使部分边界仍待验证。
* 实验充分性 (1.2/1.5)：正文中的数据集、评价指标和结果边界已在“实验结果”中列出；论文未提供完整的长流延迟与质量对照，因此实验充分性按现有实证范围评分。
* 清晰度 (0.8/1)：正文能区分输入、模块、输出和任务目标，核心限制也有明确标注；仍有少量实现细节需要读者回看原文。
* 影响力 (1.1/1.5)：该工作对语音/音乐/音频读者的直接价值来自如何从不完整的流式文本逐 token 生成连续自然语音。；影响范围受长时间状态可能累积漂移限制。
* 开源 (0.5/1.5)：论文中未提及代码、模型权重或可试听 demo 的公开地址。 
* 可复现性 (0.3/0.5)：模型层数、声学 token 化、训练语料、优化器、硬件和拼接策略未完整说明。；这影响独立复现，但不把材料缺失重复扣到技术严谨性。
* 工程/实践价值 (1.2/1.5)：切中了低延迟语音交互的真正瓶颈；但没有可核验的延迟和质量数字时，系统优势仍是待验证假设。 系统或方法具备一定复用路径，但真实部署、成本和失败案例仍需补充。

### 🚨 局限与问题

1. 论文明确承认的局限：长时间状态可能累积漂移；文本改写、回退、跨句韵律和突发 token 对稳定性的影响需要单独评估，不能只凭短句 benchmark 结论。
2. 审稿人发现的潜在问题：文本改写、回退、跨句韵律和突发 token 对稳定性的影响需要单独评估，不能只凭短句 benchmark 结论。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
