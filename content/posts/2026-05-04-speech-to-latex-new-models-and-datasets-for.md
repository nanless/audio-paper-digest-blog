---
title: "Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences"
date: 2026-05-04
draft: false
tags: [语音识别, 多模态模型, 端到端, 多语言]
categories: [iclr-2026]
description: "语音识别 | 8.0/10"
hiddenInHomeList: true
---

# 📄 Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences

#语音识别 #多模态模型 #端到端 #多语言

🔥 **8.0/10** | 前25% | #语音识别 | #多模态模型 | #端到端 #多语言

学术质量 5.5/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Dmitrii Korzh（AXXX， Moscow, Russia； MTUCI， Moscow, Russia）
- 通讯作者：未说明（论文未明确标注）
- 作者列表：
  - Dmitrii Korzh（AXXX， MTUCI）
  - Dmitrii Tarasov（FusionBrain Lab， AXXX； HSE University）
  - Artyom Iudin（AXXX， MTUCI）
  - Elvir Karimov（MTUCI， Applied AI Institute）
  - Matvey Skripkin（FusionBrain Lab， Applied AI Institute）
  - Nikita Kuzmin（MTUCI， Applied AI Institute）
  - Andrey Kuznetsov（FusionBrain Lab， Innopolis University）
  - Oleg Y. Rogov（AXXX， MTUCI， Applied AI Institute）
  - Ivan Oseledets（AXXX， Moscow State University）
- 机构信息：涉及多家莫斯科的科研机构，包括AXXX（具体全称论文未说明）、MTUCI、FusionBrain Lab、HSE University、Applied AI Institute、Innopolis University以及Moscow State University。

### 💡 毒舌点评

亮点：论文最大的贡献在于“填坑”——为长期缺乏公开数据和基准的“语音转LaTeX”任务，提供了迄今最完整、最大规模的开源数据集与评估体系，这对社区而言是“基建级”贡献。  
短板：在方法创新上显得保守，主要依赖对现有ASR、LLM和Audio-LLM（如SALMONN）的微调与拼接，缺乏针对数学语音独特性（如符号歧义、嵌套结构）设计的端到端模型或专用编码器，略显“集成有余，创造不足”。

### 🔗 开源详情

- 代码：论文提供了代码仓库链接：`https://github.com/dkorzh10/speech2latex`。
- 模型权重：论文中未明确提及是否公开训练好的模型权重。
- 数据集：论文明确声明并提供了首个大规模开源S2L数据集，托管于HuggingFace：`https://huggingface.co/datasets/marsianin500/Speech2Latex`，包含66k人工和571k合成音频样本。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文在附录中详细列出了训练超参数（优化器、学习率、批次大小、LoRA配置）、硬件配置（A100, H100 GPU）以及数据切分策略，复现信息较为充分。
- 引用的开源项目：依赖了多个开源工具和模型，包括：
    - ASR模型：Whisper (OpenAI)
    - Audio-LLM：SALMONN, Qwen-Audio, Flamingo-3, Gemma-3n
    - LLM：Qwen2.5系列, LLaMA
    - TTS模型：XTTSv2
    - 工具：KaTeX (LaTeX标准化), LoRA (高效微调)
- 论文中未提及开源计划：模型权重的公开计划未说明。

### 📌 核心摘要

1.  问题：将口语化的数学表达式和句子准确转换为LaTeX格式是一个挑战，涉及语音识别、符号歧义消解和结构化表示生成。现有工作存在依赖多重转录、仅处理孤立公式、缺乏多语言支持、未提供训练数据等问题。
2.  方法核心：提出并构建了首个大规模、多语言（英/俄）的Speech-to-LaTeX（S2L）数据集，包含66k人工标注和571k合成音频。同时，评估了两类方法：基于Whisper的ASR后接LLM（如Qwen2.5）的ASR后处理，以及直接使用Audio-LLM（如SALMONN）的多模态端到端方法。
3.  新意：主要新意在于数据集建设（规模、质量、多语言）和建立首个标准化基准（S2L-equations， S2L-sentences），而非提出全新的模型架构。首次系统对比了ASR后处理与端到端Audio-LLM在该任务上的表现。
4.  主要实验结果：
    - 在自建的S2L-equations基准上，最佳模型（SALMONN-13B）的字符错误率（CER）为17.5%，而作为基线的MathSpeech模型在该测试集上CER高达64.0%。
    - 在作者提出的S2L-sentences基准（含上下文的数学句子）上，最佳模型的公式部分CER为39.7%，揭示了该任务的更大难度。
    - 消融实验表明，混合（人工+合成）数据训练通常能取得最佳效果，且模型在俄语上的表现常优于英语。

| 模型 | 训练数据 | 测试集 | CER (%) | TeXBLEU |
| :--- | :--- | :--- | :--- | :--- |
| MathSpeech | MS-train | S2L-equations (Eng) | 64.04 | 83.71 |
| Qwen2.5-0.5B | Mix-full | S2L-equations (Eng) | 27.21 | 90.20 |
| SALMONN-13B | Mix-full | S2L-equations (Eng) | 17.50 | 93.68 |
| (来源：论文表2、表4) | | | | |

5.  实际意义：为自动课堂笔记生成、数学文献语音辅助等应用奠定了基础。公开的数据集和代码将加速该垂直领域的研究。
6.  主要局限性：数据集未完全模拟真实讲座场景（如口述不完整、结合板书）；模型在面对发音歧义和深层嵌套结构时仍会出错；合成数据虽有助于增强，但其复杂度仍低于真实人声。

### 🏗️ 模型架构

论文评估了两类方法的架构，如图1所示。

![图1：S2L方法示意图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/gk8WMxzIQP-0.png)

图1展示了两种Speech-to-LaTeX的流程。(a)为ASR后处理流程：音频先经Whisper转录为文本，再输入LLaMA进行LaTeX转换；(b)为多模态端到端流程：音频由Whisper和BEATs两个编码器处理，通过适配器（Adapter）与LLaMA融合，直接生成LaTeX。

1.  ASR后处理流水线（图1a）：
    - 输入：原始音频波形。
    - 组件：预训练的Whisper-Large v3 ASR模型（冻结） + 可微调的大语言模型（LLM）。
    - 流程：Whisper将音频转录为包含口语化数学符号的英文/俄文文本。该文本作为输入，送入LLM（如Qwen2.5系列）。LLM通过指令微调（Instruction Tuning），将自然语言描述的数学表达式转换为规范的LaTeX代码。
    - 动机：利用当前最强的通用ASR和LLM能力，避免从头训练。通过在特定任务数据上微调LLM，实现对ASR输出“后校正”。

2.  多模态端到端模型（以SALMONN为例，图1b）：
    - 输入：原始音频波形 + 文本提示（Prompt）。
    - 组件：两个音频编码器（Whisper encoder和BEATs） + 模态适配器（Q-Former） + 大语言模型解码器（LLaMA）。
    - 流程：Whisper和BEATs分别提取音频的高级特征。Q-Former将这两路音频特征与一个可学习的查询（Query）进行交互，生成一系列融合了音频信息的“音频token”。这些token与用户提示的“文本token”拼接，共同输入LLaMA解码器，自回归地生成LaTeX字符串。
    - 动机：绕过中间转录步骤，实现从语音到结构化符号的端到端映射，可能更有效地处理语音歧义。

### 💡 核心创新点

1.  构建首个大规模开源S2L数据集：
    - 之前局限：仅有的数据集（如MathSpeech）规模小、不公开，且基于TTS合成，缺乏真实人声。
    - 如何起作用：收集了来自Proof-Pile、MathBridge等多个来源的LaTeX公式与句子，通过人工众包标注（33名标注者，66k音频）和高质量TTS合成（571k音频）相结合，构建了涵盖英语/俄语、孤立公式/完整句子的多维数据集。
    - 收益：提供了充足的训练与评估数据，是后续所有模型实验的基础，解决了该领域长期的数据匮乏问题。

2.  建立标准化的基准测试与评估体系：
    - 之前局限：评估协议不统一，基准数据集（如MathSpeech测试集）规模有限且未公开。
    - 如何起作用：提出了两个基准：S2L-equations（孤立公式）和S2L-sentences（嵌入文本的公式）。设计了多种数据切分（公式不重叠、合成/真实音频分离）以严格测试泛化能力，并采用CER和TeXBLEU等指标。
    - 收益：为公平比较不同方法提供了舞台，首次在公开数据上确立了性能基线（如表2所示）。

3.  系统对比ASR后处理与端到端多模态方法：
    - 之前局限：MathSpeech仅使用ASR后处理；端到端Audio-LLM（如SALMONN）未被应用于此类精确符号转换任务。
    - 如何起作用：在同一数据集和评估协议下，全面评估了从0.5B到13B参数量的不同模型（Qwen2.5, SALMONN, Flamingo-3等），并分析了数据组合（人工/合成/混合）、语言（英语/俄语/混合）的影响。
    - 收益：提供了实证结论，例如SALMONN-13B在公式转录上显著优于所有ASR后处理模型（17.5% vs. 27.2% CER），证明了端到端模型的潜力；同时也发现小模型在资源受限场景下的实用性。

### 🔬 细节详述

- 训练数据：
    - 来源：S2L-equations来源于MathBridge、TextTeller和GPT-4生成；S2L-sentences主要来源于Proof-Pile-2中的arXiv子集。人工标注通过众包平台完成，合成数据使用XTTSv2等TTS模型生成。
    - 规模：最终数据集包含66,134个人工标注音频（23,196英/公式，18,134俄/公式，24,794英/句子）和571,052个合成音频。
    - 预处理：所有LaTeX公式通过KaTeX编译器进行标准化（如表1所示），统一语法、移除多余空格。音频统一重采样至16kHz。
- 损失函数：未明确说明，但根据任务性质，微调LLM时应使用标准的交叉熵损失（Cross-Entropy Loss）进行下一个token预测。
- 训练策略：
    - 优化器：AdamW，权重衰减0.01。
    - 学习率：1e-4，使用线性学习率调度器。SALMONN模型训练使用余弦衰减（Cosine Decay）和3000步预热（Warm-up）。
    - Batch Size：Qwen模型在单A100上使用16；SALMONN在双H100上使用12，并设置了梯度累积（3步）。
    - 训练轮数：Qwen模型训练1个epoch；SALMONN训练6个epoch。
    - 技术：对7B参数及以上的模型（如Qwen2.5-7B, SALMONN）采用LoRA进行参数高效微调，主要适配注意力投影矩阵。
- 关键超参数：
    - 模型规模：评估了0.5B、1.5B、7B参数的LLM，以及13B参数的Audio-LLM（SALMONN）。
    - LoRA配置：rank=8，alpha=32（Qwen-7B）；rank=8，alpha=16（Qwen-Audio）；rank=8，alpha=32，dropout=0.1（SALMONN）。
- 训练硬件：
    - Qwen模型：单NVIDIA A100 GPU。
    - SALMONN：双NVIDIA H100-80GB GPU。
- 推理细节：未明确说明解码策略（如beam search），通常默认使用贪心解码或采样。模型在推理时会使用特定的系统提示（System Prompt）来引导任务（如图1所示）。
- 其他技巧：在数学公式CER计算前，对预测和标签进行方程标准化（表1），以减少因等价LaTeX写法不同导致的错误计量。

### 📊 实验结果

论文在S2L-equations和S2L-sentences两个主要基准上进行了全面实验。

表2：S2L-Equations实验结果（英文测试集，公式不重叠切分）
| 模型 | 训练数据类型 | 训练语言 | 测试: Mix CER | 测试: Human CER | 测试: Synthetic CER |
| :--- | :--- | :--- | :--- | :--- | :--- |
| MathSpeech (基线) | MS-train | 英语 | 64.04% | 59.32% | 69.65% |
| Qwen2.5-0.5B | A | 英语 | 33.28% | 33.26% | 33.30% |
| Qwen2.5-0.5B | Mix-full | 英+俄 | 27.21% | 27.03% | 27.42% |
| Qwen2.5-1.5B | H | 英语 | 29.69% | 27.57% | 32.22% |
| SALMONN-13B | Mix-full | 英语 | 17.50% | 18.17% | 16.70% |
说明：A=合成数据，H=人工数据，Mix=混合，Full=增加400k MathBridge合成数据。SALMONN为端到端模型，其他为ASR后处理模型。

表4：与MathSpeech的对比
| 模型 | 在MathSpeech基准上的CER | 在S2L-equations (英语测试)上的CER |
| :--- | :--- | :--- |
| MathSpeech | 27.7% | 64.0% |
| Qwen (本文方法) | 30.0% | 27.2% |
| SALMONN (本文方法) | 27.7% | 17.5% |
关键结论：本文模型在MathSpeech基准上达到可比性能，但在更难的、公开的S2L-equations基准上大幅超越MathSpeech模型。

表5：S2L-Sentences实验结果（英文测试集，句子不重叠切分）
| 模型 | 训练数据 | 测试: Human 句子CER | 测试: Human 公式CER |
| :--- | :--- | :--- | :--- |
| Qwen2.5-1.5B | H | 25.96% | 53.13% |
| Qwen2.5-7B (LoRA) | Mix | 18.75% | 43.75% |
| SALMONN-13B | Mix | 15.43% | 39.68% |
关键结论：将公式置于句子中显著增加难度（公式CER从约27%升至约40%）。端到端模型（SALMONN）再次取得最佳性能。

其他关键发现：
- 数据影响：在英语任务上，增加大规模合成数据（Mix-full）能持续提升性能；但在俄语任务上，过度加入英语合成数据反而可能损害性能（语言不平衡）。
- 跨语言学习：英俄双语训练有时能提升英语性能，因为模型可以学习共享的数学符号表示。俄语部分的性能普遍优于英语。
- Few-shot性能：未经微调的模型进行5-shot/25-shot推理，效果远逊于微调后的模型，表明该任务需要专门适配。

![图2：S2L-equations数据集收集与标注流程概览](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/gk8WMxzIQP-1.png)

图2详细展示了数据构建流水线，包括从MathBridge/TextTeller获取公式、用GPT-4生成多领域公式与发音、通过人工和TTS进行音频标注等步骤。

### ⚖️ 评分理由

- 学术质量 (5.5/7)：论文的实验设计和数据集建设是突出的强项，工作扎实、细致，结论可信。然而，其核心创新主要体现在数据和基准的建立，而非提出一种新的、针对数学语音特性的建模方法。技术路线（ASR+LLM, Audio-LLM）是现有方案的整合与优化，原创性扣分。
- 选题价值 (1.5/2)：任务本身具有明确的应用导向和学术价值，填补了一个重要的细分领域空白。论文通过高质量的开源工作，显著提升了该领域的可研究性和发展速度。
- 开源与复现 (+1.0/1)：论文的开源贡献非常突出。数据集（HuggingFace链接）、代码（GitHub链接）、详细的训练超参数和硬件信息一应俱全，为后续研究提供了极大的便利，因此给予满分加成。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
