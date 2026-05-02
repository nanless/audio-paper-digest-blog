---
title: "STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models"
date: 2026-05-03
draft: false
tags: [语音对话系统, 分块推理, 语音大模型, 实时处理]
categories: [iclr-2026]
description: "语音对话系统 | 8.5/10"
hiddenInHomeList: true
---

# 📄 STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models

#语音对话系统 #分块推理 #语音大模型 #实时处理

🔥 **8.5/10** | 前10% | #语音对话系统 | #分块推理 | #语音大模型 #实时处理

学术质量 6.5/7 | 选题价值 2.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Cheng-Han Chiang (National Taiwan University & Microsoft)
- 通讯作者：Xiaofei Wang (Microsoft)
- 作者列表：
    1. Cheng-Han Chiang (National Taiwan University, Microsoft)
    2. Xiaofei Wang (Microsoft)
    3. Linjie Li (Microsoft)
    4. Chung-Ching Lin (Microsoft)
    5. Kevin Lin (Microsoft)
    6. Shujie Liu (Microsoft)
    7. Zhendong Wang (Microsoft)
    8. Zhengyuan Yang (Microsoft)
    9. Hung-yi Lee (National Taiwan University)
    10. Lijuan Wang (Microsoft)

### 💡 毒舌点评

STITCH的“边想边说”设计极其巧妙，利用语音播放的空闲时间进行计算，将思考成本隐藏，STITCH-S甚至实现了与零思考基线相同的首包延迟，这是一个非常工程友好的洞察。然而，论文主要评估了数学推理这类“有标准答案”的任务，对于更开放式的、涉及常识或逻辑的口语对话，这种“分块思考”能否保持连贯性和准确性，缺乏更深入的讨论和评估。

### 🔗 开源详情

- 代码：论文提及项目页面 https://d223302.github.io/STITCH， 但未提供明确的代码仓库链接（如GitHub）。论文中未明确提及代码开源。
- 模型权重：未提及是否公开微调后的模型权重。
- 数据集：论文中构建的训练数据集未公开，但详细说明了如何从公开数据集（VoiceAssistant400K， Tulu-3， NQ， TriviaQA）构造，提供了下载链接和处理步骤。测试数据集部分（数学QA音频）已发布至Hugging Face：https://huggingface.co/datasets/dcml0714/speech_math。
- Demo：项目页面可能包含演示，但论文正文未详细描述。
- 复现材料：充分。附录C提供了完整的微调YAML配置文件（使用LlamaFactory），包括所有超参数、数据集模板和DeepSpeed配置。附录B.1详细说明了每类训练数据的构建方法、使用的GPT-4o提示词（表10-13）和筛选策略。
- 论文中引用的开源项目/模型：GLM-4-Voice (Zeng et al., 2024), LlamaFactory (Zheng et al., 2024), vLLM (Kwon et al., 2023), Llama-3系列模型 (Grattafiori et al., 2024), GPT-4o/openai-api, CosyVoice (Du et al., 2024)语音解码器。

### 📌 核心摘要

1.  问题：当前的语音大模型（SLM）在回答前缺乏像人类一样进行内部、无声的思考（Chain-of-Thought）的能力，而直接生成完整的CoT又会导致不可控的响应延迟。
2.  方法核心：提出STITCH框架，通过分块交错生成实现“边想边说”。核心是利用一段语音片段（chunk）的播放时间远大于生成该片段语音token的时间差，在播放当前语音的同时，生成下一段思考的token。具体有STITCH-R（先思考一块）和STITCH-S（先说话一块）两个变体。
3.  创新点：首次将无声推理能力引入语音大模型；设计了低延迟甚至零延迟增加的并行推理-生成方案；STITCH-S在保持与基线相同首包延迟的同时，显著提升了推理能力。
4.  主要实验结果：在五个数学QA数据集上，STITCH-S相比无推理基线平均提升15.06%准确率；STITCH-R平均提升15.62%。在非推理任务上性能持平或略有提升。人类评估证实STITCH-S的响应速度与无推理基线相当。
    | 模型 | 配置 | 首包延迟token数 | 使用推理 | 数据集平均准确率（数学QA） | 数据集平均准确率（非推理QA+AlpacaEval） |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | GLM-4-Voice | 基线 | Ntext + Nspeech | 否 | 53.08% | 55.22% |
    | No reasoning | 基线 | Ntext + Nspeech | 否 | 62.98% | 55.19% |
    | TBS | 完整CoT后说 | Nfull + Ntext + Nspeech | 是 | 79.12% | 58.58% |
    | STITCH-R | 本方法 | Nreason + Ntext + Nspeech | 是 | 78.70% | 55.97% |
    | STITCH-S | 本方法 | Ntext + Nspeech | 是 | 78.04% | 57.03% |
5.  实际意义：为构建更智能、响应更快且支持复杂推理的实时语音交互系统（如高级语音助手、客服机器人）提供了关键技术路径。
6.  主要局限性：推理质量依赖生成的CoT质量，论文未深入探讨如何保证CoT在语音场景下的忠实度与效率；方法有效性高度依赖于硬件计算能力（需保证生成速度高于语音播放速度）。

### 🏗️ 模型架构

STITCH并非一个全新的模型架构，而是对现有交错式（interleaved）语音语言模型（如GLM-4-Voice）的生成流程改造。其核心是引入了新的token类型和生成顺序。

1.  基础架构：基于GLM-4-Voice（一个交错式SLM）。该模型主干为一个LLM，能自回归生成文本token（Text Tokens）和语音token（Speech Tokens），两者交错，语音token通过语音解码器（Speech Decoder）合成音频。默认设置为Ntext=13，Nspeech=26。
2.  新增组件：
    - 推理token（Reasoning Tokens）：一种新的、不被语音化的文本token，用于表示模型的内部无声思考（Chain-of-Thought）。这些token由`[SOPR]`（开始部分推理）和`[EOPR]`（结束部分推理）特殊token界定。
    - 生成流程控制：通过特殊token`[EOR]`（结束完整推理）来控制推理过程的结束。
3.  数据流与交互方式（以STITCH-R为例，见图1）：
    - 步骤1：模型接收语音输入x。
    - 步骤2：自回归生成 `z1 (Nreason个推理token) → t1 (Ntext个文本token) → s1 (Nspeech个语音token)`。
    - 步骤3：语音解码器将s1合成为一段持续`T_chunk`秒的音频并开始播放。
    - 步骤4（关键并行步骤）：在播放音频期间，模型并行生成下一个推理块 `z2`。由于音频播放时间远大于生成`z1+t1+s1`的时间，此步骤利用了“空闲时间”。
    - 步骤5：`z2`生成完毕后，继续生成 `t2 → s2`，合成下一段音频，并无缝拼接播放。
    - 步骤6：重复步骤4-5，直到模型生成`[EOR]`，表示推理结束，仅生成剩余的文本和语音token直至完成。
    - STITCH-S的流程略有不同，是 `t1 → s1 → z1 → t2 → s2 → z2 ...`，即先生成第一个文本-语音块，再生成第一个推理块，从而实现零延迟增加。
4.  关键设计选择及动机：
    - 分块（Chunking）：避免生成完整CoT导致的巨大延迟，将思考过程与说话过程并行化。
    - 利用时间差：`T_chunk`（语音播放时长） ≈ 2秒，而生成`Ntext+Nspeech`个token的时间远小于此。因此，剩余时间可用于生成`Nreason`个推理token，实现了“边想边说”。
    - STITCH-S的“先说”设计：完全消除了因推理带来的首包延迟，因为第一个文本-语音块无需等待任何推理token生成。

![图1](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/5Z1eMhCeTb-0.png)
图1展示了STITCH-R的时序图。模型首先生成第一个推理块、文本块和语音块。语音块被合成并播放（持续T_chunk秒）。在播放期间，模型生成下一个推理块，以此类推，实现思考与说话的并行。

![图2](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/5Z1eMhCeTb-1.png)
图2对比了不同生成方法：(a) GLM-4-Voice（交错式基线），(b) TBS（完整CoT后说），(c) STITCH-R（交错式推理-说话），(d) STITCH-S（说话-交错式推理）。箭头代表SLM生成token的时间线。

### 💡 核心创新点

1.  首次为语音大模型引入无声思考能力：明确将“内部推理”作为SLM设计的一个独立环节，并通过特殊token系统实现，填补了该领域的一项空白。
2.  提出“分块交错”的并行思考-说话框架：STITCH-R/S的核心创新。它不将思考视为说话前的一个独立阶段，而是将其分解并穿插在说话过程中，巧妙利用计算和播放的时间差，实现了低延迟甚至零延迟增加。
3.  STITCH-S的零延迟设计：通过调整生成顺序（先生成第一块文本-语音），在获得思考能力的同时，保持了与完全无思考基线模型完全相同的首包延迟。这是一个非常重要的工程和产品化洞察。
4.  可调节的推理粒度：训练时固定的`Nreason`在推理时可以通过提前插入`[EOPR]`进行调整（如图3a, 3b所示），提供了灵活性以适应不同硬件或任务难度。
5.  支持推理能力外接（Reasoning Augmentation）：框架允许使用外部更强模型生成的推理链作为输入（如图3c），为模块化增强提供了可能。

### 🔬 细节详述

- 训练数据：混合构建自约40万条样本，包含：(1) 对话数据集VoiceAssistant400K（使用GPT-4o生成CoT）；(2) 数学推理数据集（Tulu-3系列，使用标准答案作为CoT，将答案改写为口语化文本并合成语音）；(3) 知识问答数据集（NQ， TriviaQA， 生成CoT并改写答案）。详细构建方法见附录B.1。
- 损失函数：标准的语言建模交叉熵损失（Cross-Entropy Loss），自回归预测交错的推理、文本、语音token序列。
- 训练策略：使用LlamaFactory工具在32个A100-80GB GPU上微调。关键超参数：全参数微调（LoRA失败），学习率1e-5， cosine学习率调度，warmup比例0.1，批大小2×8（梯度累积），训练2个epoch。冻结了原始的语音编码器和解码器。详细配置见附录C。
- 关键超参数：模型骨干为GLM-4-Voice-9B。`Ntext=13`, `Nspeech=26`。训练时`Nreason=100`。推理时可根据硬件调整（如图3a, 3b）。
- 训练硬件：32块NVIDIA A100-80GB GPU，训练时长约17小时。
- 推理细节：使用vLLM进行高效推理。解码策略为自回归贪心解码（论文未提及其他策略）。关键点是解码过程需与音频合成并行，且生成速度需快于语音播放速度（论文估算在A100上约80 token/s，而T_chunk≈2秒，故可生成约160 token，大于`Nreason+Ntext+Nspeech=139`）。
- 评估指标：数学/知识QA使用准确率（由GPT-4o判断）；对话任务使用AlpacaEval的GPT-4o评分；语音质量使用UTMOSv2和人工评估。

![图3](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/5Z1eMhCeTb-2.png)
图3展示了消融实验结果：(a) STITCH-R和(b) STITCH-S在不同推理块大小`N'_token`下的准确率；(c) 使用不同外部模型作为推理增强时STITCH-R的性能。

### 📊 实验结果

主要对比实验（表1a: 数学推理QA）
| Id | Config | Latency (tokens) | Use Reasoning (Train/Infer) | AddSub | MultiArith | SinglEq | SVAMP | GSM8K | Avg. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | GLM-4-Voice | Ntext+Nspeech | -/✘ | 59.42 | 62.00 | 71.00 | 44.00 | 29.00 | 53.08 |
| 2 | No reasoning | Ntext+Nspeech | ✘/✘ | 66.06 | 70.69 | 77.98 | 64.43 | 35.73 | 62.98 |
| 3 | Mix reasoning | Ntext+Nspeech | ✔+✘/✘ | 69.72 | 79.31 | 87.16 | 63.55 | 37.33 | 67.41 |
| 4 | TBS | Nfull+Ntext+Nspeech | ✔/✔ | 79.82 | 85.63 | 89.91 | 75.29 | 64.94 | 79.12 |
| 6 | STITCH-R | Nreason+Ntext+Nspeech | ✔/✔ | 78.90 | 88.51 | 93.58 | 73.83 | 58.70 | 78.70 |
| 7 | STITCH-S | Ntext+Nspeech | ✔/✔ | 81.65 | 87.93 | 91.74 | 72.15 | 56.72 | 78.04 |
结论：TBS， STITCH-R， STITCH-S在数学推理上均大幅超越无推理基线（Row 2）。STITCH-S在平均准确率上仅比TBS低1.08%，但首包延迟与基线（Row 1,2）相同。

非推理任务（表1b）
| Id. | Config | Use Reasoning | Llama Question | TriviaQA | WebQuestion | AlpacaEval | Avg. |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | GLM-4-Voice | -/✘ | 74.25 | 47.10 | 50.95 | 48.59 | 55.22 |
| 4 | TBS | ✔/✔ | 74.33 | 51.50 | 52.15 | 56.33 | 58.58 |
| 6 | STITCH-R | ✔/✔ | 70.00 | 49.60 | 50.25 | 54.02 | 55.97 |
| 7 | STITCH-S | ✔/✔ | 73.33 | 50.00 | 50.15 | 54.62 | 57.03 |
结论：引入思考能力在非推理任务上没有性能下降，STITCH-S甚至略优于无推理基线。

关键消融与分析：
- 推理长度影响（图3a, 3b）：当`N'_token`从100降至70时，性能下降，但仍优于无推理基线（图中虚线）。这为硬件适配提供了灵活性。
- 外部推理增强（图3c）：使用更强的外部模型（如GLM-4-9B-Chat， Llama-3.1-8B）生成推理链，可提升STITCH-R性能，证明模型确实利用了推理内容。
- 语音质量与流畅度（表2右）：UTMOSv2分数与基线持平，GPT-4o流畅度评分高，表明交错生成未损害语音自然度与文本流畅性。
- 响应性人工评估（表6）：STITCH-S比TBS更具响应性（+1.687），STITCH-S与无推理基线响应性相当（+0.290）。
- 推理先于说话完成：在推理任务中，推理token的总块数通常少于文本-语音块数，意味着推理能在说话结束前完成。

### ⚖️ 评分理由

- 学术质量：6.5/7：创新性强，提出并验证了一个新颖的“边想边说”范式。技术实现方案（利用时间差）简洁有效。实验设计全面，覆盖了不同任务类型、多种基线、消融研究（推理长度、外部模型）、质量评估和人类评估，证据链完整可信。扣分点在于对推理过程本身的质量评估（如CoT的忠实度、效率）探讨不深。
- 选题价值：2.0/2：直面当前语音大模型的关键短板（缺乏深度推理且延迟敏感），提出了解决方案。该研究对提升语音AI的智能水平和交互体验具有直接的推动作用，应用前景广阔，是语音对话系统领域的重要进展。
- 开源与复现加成：0.5/1：论文提供了详细的训练配置（超参数、数据集构建流程）、项目主页链接和评估代码。然而，未明确提及是否开源模型权重和完整的代码库。附录中提供了足够的复现细节，因此给予一定分数，但未达满分。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
