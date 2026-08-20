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

X2Streaming-TTS: Causal Token-Level Text-to-Speech from Streaming Text with Speech-State Inheritance 面向如何从不完整的流式文本逐 token 生成连续自然语音。一是定义真正 token-level 而非句级伪流式 TTS；二是用 speech-state inheritance 维持跨窗口连续性；三是把无限文本流的有界上下文和低延迟同时纳入设计。 论文把方法、评价指标和适用条件放在同一条任务链中讨论；主要局限包括：长时间状态可能累积漂移；文本改写、回退、跨句韵律和突发 token 对稳定性的影响需要单独评估，不能只凭短句 benchmark 结论。

具体设置包括：They build on discrete audio codecs (34; 6) and language-model-based zero-shot TTS architectures (27; 35; 32; 3).。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：These methods reduce sentence-level waiting but still depend on future tokens, so their latency remains coupled to the upstream generation rate and they do not satisfy strict zero-lookahead causality.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：4 Experiments Model Streaming Granularity SEED-TTS-Eval MiniMax Long-text extrapolation CERZH WEREN CERZH WEREN 1×1\times 2×2\times 5×5\times 10×10\times Qwen3-TTS-12Hz-1.7B ✗ Offline 1.10 1.43 0.87 1.85 3.95 3.05 4.01 3.93 F5-TTS ✗ Offline 1.52 2.0 3.74 2.08 4.42 3.81 5.04 4.95 FireRedTTS-2 ✓ Chunk 1.14 1.95 0.97 2.25 5.36 4.79 5.04 5.32 CosyVoice 2-S ✓ Chunk 1.45 2.57 1.98 2.38 4.76 3.83 5.05 5.48 CosyVoice 3-S ✓ Chunk 0.81 1.68 1.43 2.21 4.72 3.36 4.86 5.12 X2Streaming-TTS(Ours) ✓ Token 0.78 1.93 0.78 1.86 2.5 3.67 4.08 4.36 Table 1: Intelligibility and long-text robustness (% error; lower better).。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

具体设置包括：Right: Three challenges and the corresponding mechanisms—(1) first-audio latency via token-level rather than chunk-level start; (2) irreversible early commitment via uncertainty-aware buffering; (3) cross-segment discontinuity via speech-state inheritance.。这些设置限定了输入、处理链和评价条件；结论不能脱离原文数据与指标口径外推。

综合来看，论文的价值不只由最终分数决定，还取决于输入表示、模型组件、训练或推理路径、评价数据和失败条件是否彼此对应。正文明确报告的结果与作者提出的解释分开呈现；没有给出统计口径、跨域验证或部署参数的部分，不能被扩写为普遍能力。

### 🔗 开源详情

论文中未提及代码、模型权重或可试听 demo 的公开地址。 论文引用的预训练模型或外部工具仅作为依赖记录，不能视为本文核心产物已开源。

### 🏗️ 方法概述和架构

X2Streaming-TTS 把文本流的每个 token 作为不确定前缀，持续生成语音而不是等待完整句子。模型维护 speech state，在新 token 到达时继承已有声学上下文，预测下一段声学 token 或波形，并通过有限上下文控制无限流的计算量。输出必须在文本不断扩展时保持感知连续。 架构包含 token-level 文本编码、speech-state inheritance、因果声学生成和流式解码。状态继承连接前一窗口和当前窗口，因果路径保证未来文本不会泄漏到当前语音；边界处需要拼接、停顿和 prosody 处理。论文的关键比较应包括句级 TTS、伪流式系统和真正 token-level 生成，具体网络规模和解码缓存配置未在摘要给出。 设计取舍是上下文长度、延迟与长期连贯性之间的平衡；继承状态可降低重复计算，却可能把早期错误长期传播。对不完整文本的鲁棒性是价值所在，但需要真实打断、修订和长时对话测试。 输入先经过论文明确的表示或预处理，再进入核心模型或分析框架，最后产生任务指标、检索结果、生成序列或风险分数。若存在训练与推理两条路径，训练负责学习参数或评价规则，推理按固定的音频片段、语音 token、符号旋律或多模态会话顺序执行。论文没有直接给出网络尺寸、数据划分、优化器、随机种子、硬件、阈值、采样率或延迟的部分，保留为未说明；“显著提升”“可泛化”等方向性表述也不扩写成未经来源支持的数字。多模态或临床任务还需要交代各流如何同步、谁产生最终决策以及人工监督在哪里介入。

方法由输入表示、核心模块、训练/推理路径和输出评价共同构成。

在该设计中，They build on discrete audio codecs (34; 6) and language-model-based zero-shot TTS architectures (27; 35; 32; 3).。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，These methods reduce sentence-level waiting but still depend on future tokens, so their latency remains coupled to the upstream generation rate and they do not satisfy strict zero-lookahead causality.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，LiveSpeech, SyncSpeech, and SpeakStream reduce the required context through fixed lookahead, token-synchronous decoding, and text–speech interleaving (5; 24; 2).。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，These results indicate that token-level input introduces little measurable loss of intelligibility under the evaluated conditions.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

在该设计中，Our method therefore achieves the lowest recognition error on most evaluated streaming conditions.。这说明输入如何进入模块、模块如何产生中间表示，以及输出如何用于训练或推理；来源没有写出的配置保持为未说明。

![Figure 1: Left: Streaming pipeline under token-level arrival. The frontend releases only TTS-ready text (PAD when nothing is ready; ambiguous spans such as 3 in He finished 3 are held until pronunciation is resolved), the Talker emits acoustic tokens, and Code2Wav streams waveform for immediate playback. Right: Three challenges and the corresponding mechanisms—(1) first-audio latency via token-level rather than chunk-level start; (2) irreversible early commitment via uncertainty-aware buffering; (3) cross-segment discontinuity via speech-state inheritance.](https://arxiv.org/html/2608.18661v1/figures/fig1_pipeline.png)

![Figure 2: Speech-state inheritance across a segment boundary. After a health check on Sk−1S_{k-1}, its Code2Wav state warm-starts SkS_{k}, while its trailing Talker states provide bounded historical context through causal-prior attention and a gated residual.](https://arxiv.org/html/2608.18661v1/figures/fig2_inheritance.png)

从数据流看，输入表示、核心模块、训练目标和推理输出必须逐层对应；任何没有在全文中披露的网络尺寸、优化器、随机种子或资源配置都不应被常见实现替代。这样的结构化描述既解释模型如何工作，也说明结果在哪些条件下能够复现。

### 💡 核心创新点

1. 一是定义真正 token-level 而非句级伪流式 TTS，回应了既有方法或系统的具体瓶颈。 具体体现在They build on discrete audio codecs (34; 6) and language-model-based zero-shot TTS architectures (27; 35; 32; 3).。这说明改动涉及的输入、模块和输出，也限定了它依赖的训练信号、数据条件与部署前提。

2. 二是用 speech-state inheritance 维持跨窗口连续性，并由论文的实验或系统设计支撑。 论文给出的实现边界是These methods reduce sentence-level waiting but still depend on future tokens, so their latency remains coupled to the upstream generation rate and they do not satisfy strict zero-lookahead causality.。因此，结果收益不能直接归因于模型结构之外的数据、后处理或提示词因素。

3. 三是把无限文本流的有界上下文和低延迟同时纳入设计。。 实验或消融显示4 Experiments Model Streaming Granularity SEED-TTS-Eval MiniMax Long-text extrapolation CERZH WEREN CERZH WEREN 1×1\times 2×2\times 5×5\times 10×10\times Qwen3-TTS-12Hz-1.7B ✗ Offline 1.10 1.43 0.87 1.85 3.95 3.05 4.01 3.93 F5-TTS ✗ Offline 1.52 2.0 3.74 2.08 4.42 3.81 5.04 4.95 FireRedTTS-2 ✓ Chunk 1.14 1.95 0.97 2.25 5.36 4.79 5.04 5.32 CosyVoice 2-S ✓ Chunk 1.45 2.57 1.98 2.38 4.76 3.83 5.05 5.48 CosyVoice 3-S ✓ Chunk 0.81 1.68 1.43 2.21 4.72 3.36 4.86 5.12 X2Streaming-TTS(Ours) ✓ Token 0.78 1.93 0.78 1.86 2.5 3.67 4.08 4.36 Table 1: Intelligibility and long-text robustness (% error; lower better).。这一比较只在相应数据、基线和指标口径下成立，未报告独立消融时不把相关性写成组件因果。

4. 工程含义必须和条件一起解读：Right: Three challenges and the corresponding mechanisms—(1) first-audio latency via token-level rather than chunk-level start; (2) irreversible early commitment via uncertainty-aware buffering; (3) cross-segment discontinuity via speech-state inheritance.。论文直接测量、作者解释和仍待验证的外推需要分开，不能把部署愿景写成实验结论。

5. 可复现边界是上述证据中的数据规模、输入预处理、训练/推理设置和评价指标；这些条件若没有同步满足，不能把论文的局部结果概括成普遍能力。

上述贡献需要放回完整数据流理解：输入如何被表示，哪些模块改变了中间状态，训练目标如何约束输出，以及实验是否用对照或消融隔离了收益来源。缺失的配置、样本范围和统计检验会直接影响可复现性与外部有效性。

### 📊 实验结果

实验结果需要和数据划分、基线、指标方向及统计口径一起阅读。

论文报告：4 Experiments Model Streaming Granularity SEED-TTS-Eval MiniMax Long-text extrapolation CERZH WEREN CERZH WEREN 1×1\times 2×2\times 5×5\times 10×10\times Qwen3-TTS-12Hz-1.7B ✗ Offline 1.10 1.43 0.87 1.85 3.95 3.05 4.01 3.93 F5-TTS ✗ Offline 1.52 2.0 3.74 2.08 4.42 3.81 5.04 4.95 FireRedTTS-2 ✓ Chunk 1.14 1.95 0.97 2.25 5.36 4.79 5.04 5.32 CosyVoice 2-S ✓ Chunk 1.45 2.57 1.98 2.38 4.76 3.83 5.05 5.48 CosyVoice 3-S ✓ Chunk 0.81 1.68 1.43 2.21 4.72 3.36 4.86 5.12 X2Streaming-TTS(Ours) ✓ Token 0.78 1.93 0.78 1.86 2.5 3.67 4.08 4.36 Table 1: Intelligibility and long-text robustness (% error; lower better).。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：Right: Three challenges and the corresponding mechanisms—(1) first-audio latency via token-level rather than chunk-level start; (2) irreversible early commitment via uncertainty-aware buffering; (3) cross-segment discontinuity via speech-state inheritance.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：To quantify discontinuity at a segment boundary, we extract 100 ms of audio on each side of the boundary and compute the absolute differences in mean pitch and mean energy, denoted by Δ​F​0\Delta F0 and Δ​E\Delta E, respectively. PBD is their mean after min–max normalization.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

论文报告：Our method achieves lower recognition error than the offline reference in 3 of the 8 conditions, while its largest degradation among the remaining 5 conditions is 0.62 percentage points.。该结果对应明确的数据、基线和指标口径，不能脱离这些条件解释为普遍提升。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | 4 Experiments Model Streaming Granularity SEED-TTS-Eval MiniMax Long-text extrapolation CERZH WEREN CERZH WEREN 1×1\times 2×2\times 5×5\times 10×10\times Qwen3-TTS-12Hz-1.7B ✗ Offline 1.10 1.43 0.87 1.85 3.95 3.05 4.01 3.93 F5-TTS ✗ Offline 1.52 2.0 3.74 2.08 4.42 3.81 5.04 4.95 FireRedTTS-2 ✓ Chunk 1.14 1.95 0.97 2.25 5.36 4.79 5.04 5.32 CosyVoice 2-S ✓ Chunk 1.45 2.57 1.98 2.38 4.76 3.83 5.05 5.48 CosyVoice 3-S ✓ Chunk 0.81 1.68 1.43 2.21 4.72 3.36 4.86 5.12 X2Streaming-TTS(Ours) ✓ Token 0.78 1.93 0.78 1.86 2.5 3.67 4.08 4.36 Table 1: Intelligibility and long-text robustness (% error; lower  |
| 主要结果 | Right: Three challenges and the corresponding mechanisms—(1) first-audio latency via token-level rather than chunk-level start; (2) irreversible early commitment via uncertainty-aware buffering; (3) cross-segment discontinuity via speech-state inheritance. |
| 对照、消融或部署指标 | To quantify discontinuity at a segment boundary, we extract 100 ms of audio on each side of the boundary and compute the absolute differences in mean pitch and mean energy, denoted by Δ​F​0\Delta F0 and Δ​E\Delta E, respectively. PBD is their mean after min–max normalization. |

![Figure 2: Speech-state inheritance across a segment boundary. After a health check on Sk−1S_{k-1}, its Code2Wav state warm-starts SkS_{k}, while its trailing Talker states provide bounded historical context through causal-prior attention and a gated residual. - 图2](https://arxiv.org/html/2608.18661v1/figures/fig2_inheritance.png)

结果解读同时关注绝对数值、相对比较、误差方向和测量条件。表格中的每个数字都必须和数据集、基线、硬件或推理设置一起阅读；如果正文只给出趋势而没有完整数值，就保留趋势并明确其证据边界。

### 🔬 细节详述

已知输入是 streaming text，核心机制是 causal token-level synthesis 与状态继承；模型层数、声学 token 化、训练语料、优化器、硬件和拼接策略未完整说明。 模型名、数据集、输入输出和部署限制以全文可定位段落为准；论文没有直接说明的配置保持为未说明，外部工具或作者机构不自动视为本文开源。

数据、训练、实现和部署条件共同决定结果的可复现范围。

- LiveSpeech, SyncSpeech, and SpeakStream reduce the required context through fixed lookahead, token-synchronous decoding, and text–speech interleaving (5; 24; 2).。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- These results indicate that token-level input introduces little measurable loss of intelligibility under the evaluated conditions.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Our method therefore achieves the lowest recognition error on most evaluated streaming conditions.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- To quantify discontinuity at a segment boundary, we extract 100 ms of audio on each side of the boundary and compute the absolute differences in mean pitch and mean energy, denoted by Δ​F​0\Delta F0 and Δ​E\Delta E, respectively. PBD is their mean after min–max normalization.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- Our method achieves lower recognition error than the offline reference in 3 of the 8 conditions, while its largest degradation among the remaining 5 conditions is 0.62 percentage points.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

- 4.6 Inference Latency Figure 3: Time to first audio token (TTFT) under concurrent requests on one RTX 5090.。这一设置限定了数据、训练、推理或测量边界，并决定读者能否在相同条件下复现实验。

论文未报告的参数、硬件、随机种子和失败案例仍是复现与外推的不确定性。

这些实现细节说明了论文怎样把方法落到可执行的实验协议：数据怎样划分，特征怎样进入模型，训练和推理怎样衔接，指标怎样计算，以及部署资源怎样测量。它们也是判断复现成本、误差来源和外推范围的依据。读者应优先核对这些条件，而不是只比较最终分数；同一模型在不同采样率、数据切分、硬件或阈值下可能产生不同结论。方法、实验和部署三部分必须保持同一输入输出定义，任何环节的改变都可能影响比较结果。只有把这些环节连起来，读者才能判断改进来自模型本身还是来自数据与测量协议。

### ⚖️ 评分理由

* 创新性 (1.6/2)：一是定义真正 token-level 而非句级伪流式 TTS；二是用 speech-state inheritance 维持跨窗口连续性；三是把无限文本流的有界上下文和低延迟同时纳入设计。 新增点清楚，但仍需更多跨条件证据判断是否形成范式突破。 * 技术严谨性 (1.2/1.5)：方法链和适用边界基本自洽；长时间状态可能累积漂移；文本改写、回退、跨句韵律和突发 token 对稳定性的影响需要单独评估，不能只凭短句 benchmark 结论 使部分边界仍待验证。 * 清晰度 (0.8/1)： * 影响力 (1.1/1.5)：该工作对语音/音乐/音频读者的直接价值来自如何从不完整的流式文本逐 token 生成连续自然语音。；影响范围受长时间状态可能累积漂移限制。 * 开源 (0.5/1.5)：论文中未提及代码、模型权重或可试听 demo 的公开地址。  * 可复现性 (0.3/0.5)：模型层数、声学 token 化、训练语料、优化器、硬件和拼接策略未完整说明。；这影响独立复现，但不把材料缺失重复扣到技术严谨性。 * 工程/实践价值 (1.2/1.5)：切中了低延迟语音交互的真正瓶颈；但没有可核验的延迟和质量数字时，系统优势仍是待验证假设。 真实部署、成本和失败案例仍需补充。

方法与实验分别对应：They build on discrete audio codecs (34; 6) and language-model-based zero-shot TTS architectures (27; 35; 32; 3).；4 Experiments Model Streaming Granularity SEED-TTS-Eval MiniMax Long-text extrapolation CERZH WEREN CERZH WEREN 1×1\times 2×2\times 5×5\times 10×10\times Qwen3-TTS-12Hz-1.7B ✗ Offline 1.10 1.43 0.87 1.85 3.95 3.05 4.01 3.93 F5-TTS ✗ Offline 1.52 2.0 3.74 2.08 4.42 3.81 5.04 4.95 FireRedTTS-2 ✓ Chunk 1.14 1.95 0.97 2.25 5.36 4.79 5.04 5.32 CosyVoice 2-S ✓ Chunk 1.45 2.57 1.98 2.38 4.76 3.83 5.05 5.48 CosyVoice 3-S ✓ Chunk 0.81 1.68 1.43 2.21 4.72 3.36 4.86 5.12 X2Streaming-TTS(Ours) ✓ Token 0.78 1.93 0.78 1.86 2.5 3.67 4.08 4.36 Table 1: Intelligibility and long-text robustness (% error; lower better).。同一信息缺口不在多个维度重复扣分。

评分边界由方法结构、实验数字、资源披露和适用条件共同决定；未报告的参数、失败案例、统计检验或跨域泛化仍保持为不确定性。

* 技术严谨性（1.2/1.5）：检查输入、训练目标、推理输出、假设和实现条件是否相互一致。

* 实验充分性（1.2/1.5）：检查数据划分、基线、消融、指标方向、统计口径和失败案例是否覆盖。

* 清晰度（0.8/1）：检查读者能否沿数据流复述输入、模块、中间表示和输出。

* 影响力（1.1/1.5）：结合问题范围、证据强度和外部有效性判断，不把单一数据集结果外推。

* 开源（0.5/1.5）：只评价论文明确提供的代码、模型、数据或可验证链接。

* 可复现性（0.3/0.5）：检查数据、预处理、训练/推理配置、硬件和随机性披露。

* 工程/实践价值（1.2/1.5）：结合延迟、吞吐、资源、稳定性和真实部署限制判断。

### 🚨 局限与问题

1. 论文明确承认的局限：长时间状态可能累积漂移；文本改写、回退、跨句韵律和突发 token 对稳定性的影响需要单独评估，不能只凭短句 benchmark 结论。 2. 审稿人发现的潜在问题：文本改写、回退、跨句韵律和突发 token 对稳定性的影响需要单独评估，不能只凭短句 benchmark 结论。

此外，Right: Three challenges and the corresponding mechanisms—(1) first-audio latency via token-level rather than chunk-level start; (2) irreversible early commitment via uncertainty-aware buffering; (3) cross-segment discontinuity via speech-state inheritance. 当前结果只在论文报告的数据、模型、硬件和评价协议下成立。

因此，局限不仅包括作者明确承认的缺口，也包括样本规模、数据分布、基线选择、统计不确定性、资源消耗和真实场景迁移尚未被实验覆盖的部分。对于未报告的失败样例、显著性检验、跨设备测试和长期稳定性，读者只能把它们视为待验证问题，不能从单一数据集的结果推导出普遍部署保证。还需要区分作者没有测量的因素与已经证明不存在的问题，避免把沉默误读成正面结论。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
