---
title: "Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences"
date: 2026-05-03
draft: false
tags: [语音识别, 多模态模型, 数据集, 基准测试]
categories: [iclr-2026]
description: "语音识别 | 8.5/10"
hiddenInHomeList: true
---

# 📄 Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences

#语音识别 #多模态模型 #数据集 #基准测试

🔥 **8.5/10** | 前25% | #语音识别 | #多模态模型 | #数据集 #基准测试

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Dmitrii Korzh (AXXX; MTUCI)
- 通讯作者：未明确说明
- 作者列表：Dmitrii Korzh (AXXX; MTUCI), Dmitrii Tarasov (FusionBrain Lab, AXXX; HSE University), Artyom Iudin (AXXX; MTUCI), Elvir Karimov (AXXX; MTUCI; Applied AI Institute), Matvey Skripkin (FusionBrain Lab, AXXX; Applied AI Institute), Nikita Kuzmin (AXXX; MTUCI; Applied AI Institute), Andrey Kuznetsov (FusionBrain Lab, AXXX; Innopolis University), Oleg Y. Rogov (AXXX; MTUCI; Applied AI Institute), Ivan Oseledets (AXXX; Moscow State University)

### 💡 毒舌点评

本文最值得称赞的贡献是构建并开源了首个大规模、高质量的“语音转LaTeX”（S2L）数据集，并对多种技术路线（ASR后校正与端到端音频大模型）进行了全面、细致的评估与比较。然而，文中展示的端到端模型（如SALMONN）虽然在绝对性能上领先，但其与小参数量ASR后校正模型（如Qwen2.5-0.5B）在特定基准（如MathSpeech）上的性能差距并不显著，这削弱了其“端到端方案必然更优”的潜在论点，且论文对模型在真实复杂场景（如课堂录音）下的鲁棒性缺乏深入分析。

### 📌 核心摘要

1. 要解决什么问题：将口语中的数学公式和句子准确转换为结构化的LaTeX格式，这是教育、科研领域自动记录的关键技术，但现有方法在多语言支持、上下文理解、数据集规模和模型泛化方面存在不足。
2. 方法核心是什么：论文提出了两种主要技术路线：一是基于ASR后校正的流水线方法（先Whisper转录，再用Qwen2.5等LLM修正并转换为LaTeX）；二是端到端的多模态音频语言模型（如SALMONN），直接处理原始音频并生成LaTeX。
3. 与已有方法相比新在哪里：首次构建并发布了大规模开源的S2L数据集（66k人声+571k合成音频，含英文和俄文），覆盖孤立公式和包含公式的句子。超越了仅依赖TTS合成数据、缺乏多语言和上下文支持的MathSpeech等先前工作。
4. 主要实验结果如何：在自建的S2L-equations基准上，本文模型（如SALMONN-13B）的字符错误率（CER）为17.5%，显著优于MathSpeech模型在该基准上的64.0%。在MathSpeech基准上，两者性能相近（27.7% vs. 30.0%）。对于更复杂的S2L-sentences任务，最佳模型（SALMONN-13B）的句子CER为15.43%，公式CER为39.68%。
5. 实际意义是什么：提供了首个大规模开源的语音数学数据集和基线模型，为后续研究（如课堂实时转录、多模态学术助手）奠定了基础。
6. 主要局限性是什么：数据未完全模拟真实课堂环境（如讲者自由发挥、结合板书）；模型对复杂、嵌套公式的识别仍有挑战；公式CER数值本身受语言歧义影响，可能高估实际错误。

#

### 🏗️ 模型架构

论文探讨了两大类方法，其架构如图1所示。

1. ASR后校正流水线
- 输入：原始音频波形。
- 流程：首先使用冻结的Whisper-Large v3 ASR模型将音频转录为自然语言文本（例如：“the field strength tensor...”）。然后，将该文本输入给一个微调过的LLM（如Qwen2.5系列）。LLM接收一个系统提示和包含转录文本的用户消息，其任务是将转录文本“纠正”并转换为正确的LaTeX代码。
- 核心：这是一个串行流水线，依赖ASR转录质量。LLM作为后处理器，利用其强大的语言先验知识来纠正ASR的错误并完成格式转换。

2. 端到端多模态模型
- 输入：原始音频波形。
- 流程：如图1(b)所示（图中标识为SALMONN架构），音频首先通过两个并行的音频编码器（Whisper编码器和BEATs编码器）提取特征。这些特征通过一个适配器模块（Adapter）进行融合与对齐，转换为与LLM词嵌入维度匹配的音频token序列。这些音频token与一个文本提示（Prompt）的token序列拼接，共同输入到一个基于LLaMA的LLM解码器中。LLM通过自回归方式直接生成最终的LaTeX代码。
- 核心：这是一个端到端模型，跳过了显式的语音转文本中间步骤，试图直接从声学信号理解语义并生成结构化输出。

![S2L方法示意图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/gk8WMxzIQP-0.png)

图1：S2L方法示意图。(a) ASR后校正流水线：音频经ASR模型转录，结果传给LLM进行LaTeX转换。(b) 多模态端到端方法（SALMONN）：原始音频经两个音频编码器和适配器处理，得到的音频与文本提示token一起输入LLaMA基LLM以生成LaTeX。

### 💡 核心创新点

1.  首个大规模开源S2L数据集：这是本文最核心的贡献。数据集包含超过66k个由33位人工标注者录制的音频样本和571k个TTS合成音频，覆盖英文和俄文的孤立公式（S2L-equations）及包含公式的句子（S2L-sentences）。数据来源多样（MathBridge, TextTeller, Proof-Pile），并经过严格的归一化处理，为社区提供了急需的研究资源。
2.  对S2L任务的全面建模与评估：论文不仅提出了新的数据集和基准，还系统比较了ASR后校正（多种LLM规模）、少样本提示和端到端音频大模型（SALMONN, Flamingo等）等不同技术路线的性能，提供了详细的消融实验（如数据来源影响、多语言训练效果）。
3.  揭示了“语音数学”任务的内在挑战：通过实验和讨论（如Table 3的预测示例），论文明确指出了该任务固有的歧义性（例如“kappa”可对应`\kappa`或`\varkappa`），并引入了语义等价但语法不同的评估难题，为此引入了专门的TeXBLEU指标和公式归一化预处理。
4.  建立了首个数学句子识别基准（S2L-sentences）：将任务从孤立的公式识别扩展到更贴近实际应用的“自然语言中嵌入数学公式”的场景，实验表明此任务难度显著增加，并提供了初步的基线结果。

### 🔬 细节详述

- 训练数据：
    - S2L-equations：约10.7k个独立英文/俄文公式，由人工标注23k+（英文）和18k+（俄文）个音频；另外使用TTS（如XTTSv2）生成了超过450k（英文）和53k（俄文）个合成音频。数据来源包括经过筛选的MathBridge、TextTeller公式以及GPT-4生成的公式。
    - S2L-sentences：约12k个来自Proof-Pile的数学句子，人工标注24k+个音频，TTS生成67k+个音频。
    - 预处理：所有LaTeX公式均通过KaTeX编译器进行归一化处理（统一格式、去除多余空格、检查可编译性）。所有音频统一重采样至16kHz。
- 损失函数：未明确说明，但对于LLM微调任务，通常使用标准的下一个token预测交叉熵损失。
- 训练策略：
    - Qwen模型（S2L-equations）：使用AdamW优化器，学习率1e-4，线性调度器，权重衰减0.01，batch size 16，在单张A100 GPU上训练1个epoch。
    - Qwen模型（S2L-sentences）：超参数类似，但对于7B模型使用了LoRA（rank=8, alpha=32）进行高效微调。
    - SALMONN：使用LoRA微调LLaMA部分（rank=8, alpha=32），冻结Whisper和BEATs编码器。在2张H100 GPU上训练6个epoch，学习率3e-5（含3000步warmup），使用混合精度（float16）。
- 关键超参数：对比的LLM规模包括0.5B、1.5B、7B（Qwen系列）以及13B（SALMONN）。
- 训练硬件：单卡A100（Qwen实验）、双卡H100（SALMONN实验）。
- 推理细节：未详细说明解码策略（如beam search），但提及了5-shot和25-shot的少样本提示评估。

### 📊 实验结果

论文在两个主要基准上进行了评估：MathSpeech基准和自建的S2L-equations及S2L-sentences基准。

表4：与MathSpeech在MathSpeech基准及S2L-equations（英文测试集）上的比较（指标：CER）
| 模型 | MathSpeech基准 | S2L-equations基准 |
| :--- | :--- | :--- |
| MathSpeech | 27.7% | 64.0% |
| Qwen (0.5B) | 30.0% | 27.2% |
| SALMONN (13B) | 27.7% | 17.5% |
关键结论：本文提出的模型在MathSpeech基准上与MathSpeech模型性能相当（CER约28-30%）。但在本文自建的S2L-equations基准上，本文模型（尤其是SALMONN）显著优于MathSpeech模型（17.5% vs. 64.0%），表明其对更具挑战性和多样性的数据有更好的泛化能力。

表2（节选）：S2L-equations英文测试结果（Disjoint Split，指标：CER）
| 模型 | 训练数据 | 测试: Mix | 测试: H | 测试: A |
| :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-0.5B | Mix-full (英+俄) | 27.21 | 27.03 | 27.42 |
| Qwen2.5-1.5B | Mix-full (英+俄) | 25.69 | 24.91 | 26.61 |
| SALMONN-13B | Mix-full (英) | 17.50 | 18.17 | 16.70 |
关键结论：端到端模型SALMONN-13B取得了最佳性能（CER 17.5%）。1.5B模型通常优于0.5B模型。添加更多TTS数据（Mix-full）对性能有显著提升。

![S2L-equations完整结果表](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/gk8WMxzIQP-1.png)

图5：S2L-equations英文测试集完整结果对比图。

表5（节选）：S2L-sentences结果（Disjoint Split，指标：CER）
| 模型 | 训练数据 | 测试: H (句子CER) | 测试: H (公式CER) |
| :--- | :--- | :--- | :--- |
| Qwen2.5-1.5B | H | 25.96 | 53.13 |
| Qwen2.5-7B (LoRA) | Mix | 18.75 | 43.75 |
| SALMONN-13B | Mix | 15.43 | 39.68 |
关键结论：S2L-sentences任务更难，最佳模型（SALMONN）的公式CER仍接近40%。更大的模型（7B LoRA）在此任务上明显优于小模型。人工标注数据训练对性能提升显著。

### ⚖️ 评分理由

- 学术质量：6.0/7。论文贡献清晰（新数据集、系统性评估），技术路线（ASR后校正、端到端模型）选择合理且实现扎实。实验设计全面，进行了多维度消融（数据类型、语言、模型规模）。但部分结论的支撑可以更有力，例如，端到端模型（SALMONN）虽表现最佳，但论文未能深入分析其相对于强大的小模型（Qwen-0.5B）的优越性具体源于何处，是架构本身还是更大的模型参数量。此外，对“歧义性”这一核心挑战的量化分析有待深入。
- 选题价值：1.5/2。选题（语音转LaTeX）具有明确的应用场景（教育、科研），属于垂直但重要的细分领域。发布的数据集和基准为该特定任务的研究奠定了基础，对相关社区有直接价值。但其应用广度不及通用语音识别或对话系统。
- 开源与复现加成：+1.0/1。论文在开源方面做得非常出色。提供了完整的数据集链接（HuggingFace）、代码仓库（GitHub），并在附录中详细列出了训练超参数、数据集统计、评估指标定义等复现所需信息。这极大地增强了论文的可信度和可复现性。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
