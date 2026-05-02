---
title: "Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences"
date: 2026-05-03
draft: false
tags: [语音识别, 端到端, 多语言, 数据集, 基准测试]
categories: [iclr-2026]
description: "语音识别 | 8.0/10"
hiddenInHomeList: true
---

# 📄 Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences

#语音识别 #端到端 #多语言 #数据集 #基准测试

🔥 **8.0/10** | 前25% | #语音识别 | #端到端 | #多语言 #数据集

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
- 通讯作者：未明确说明
- 作者列表：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia), Dmitrii Tarasov (FusionBrain Lab, AXXX, Moscow, Russia; HSE University, Moscow, Russia), Artyom Iudin (MTUCI, Moscow, Russia), Elvir Karimov (MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia), Matvey Skripkin (FusionBrain Lab, AXXX, Moscow, Russia; Applied AI Institute, Moscow, Russia), Nikita Kuzmin (MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia), Andrey Kuznetsov (FusionBrain Lab, AXXX, Moscow, Russia; Innopolis University, Innopolis, Russia), Oleg Y. Rogov (AXXX, Moscow, Russia; MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia), Ivan Oseledets (AXXX, Moscow, Russia; Moscow State University, Moscow, Russia)

### 💡 毒舌点评

这篇论文最实在的贡献是贡献了一个目前最大规模的开源Speech-to-LaTeX数据集，并围绕它建立了相对全面的基准测试，这对后续研究很有价值；但论文在方法创新性上略显不足，更多是现有ASR后校正与Audio-LLM技术在特定垂直领域的应用和调优，且在模拟真实课堂场景（如伴随板书、不完整表述）的泛化能力上尚未验证。

### 🔗 开源详情

- 代码：提供代码仓库链接：https://github.com/dkorzh10/speech2latex。
- 模型权重：论文中未明确提及所有实验模型（如微调后的Qwen2.5, SALMONN）的权重是否公开，仅提到数据集和代码的链接。
- 数据集：公开，可通过Hugging Face获取：https://huggingface.co/datasets/marsianin500/Speech2Latex。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练超参数（附录B）、评估指标定义（附录A.2）以及数据集统计信息（附录A.1），复现指导性较强。
- 论文中引用的开源项目：依赖的开源工具/模型包括：Whisper、BEATs、LLaMA、Qwen2.5系列、SALMONN、XTTSv2、KaTeX、Proof-Pile、TextTeller等。

### 📌 核心摘要

1. 解决的问题：将口语化的数学表达式和句子准确转换为结构化的LaTeX符号表示。现有方法存在数据量小、仅支持孤立方程、依赖多阶段ASR转录、缺乏端到端多模态方案等问题。
2. 方法核心：提出并构建了一个大规模的开源S2L数据集（包含英语和俄语），包含超过6.6万个由人标注、57.1万个由TTS合成的音频样本。基于此数据集，评估了多种技术路线：以Whisper为前端的ASR后校正（接微调的LLM，如Qwen2.5）、少样本提示、以及端到端的音频语言模型（如SALMONN）。
3. 与已有方法相比新在哪里：a) 提供了首个大规模、开源、多语言（英/俄）、包含句子级上下文的S2L数据集；b) 首次系统评估并对比了端到端Audio-LLM与ASR后校正流水线在S2L任务上的性能；c) 建立了首个数学句子识别的基准（S2L-sentences）。
4. 主要实验结果：在提出的S2L-equations基准上，最佳的端到端模型（SALMONN-13B）在英语测试集上的方程CER达到17.5%，显著优于此前最佳基线MathSpeech模型的64.0%。在MathSpeech自己的基准测试集上，本文模型（如Qwen2.5）取得了30.0%的CER，与MathSpeech的27.7%相当。在更难的S2L-sentences任务上，最佳模型（SALMONN-13B）的方程CER为39.7%。关键对比数据见下表：

    | 模型 | 在MathSpeech基准上的CER | 在S2L-equations (英语) 上的CER |
    | :--- | :--- | :--- |
    | MathSpeech | 27.7% | 64.0% |
    | Qwen2.5-0.5B (后校正) | 30.0% | 27.2% |
    | SALMONN-13B (端到端) | 27.7% | 17.5% |

5. 实际意义：为教育技术（如讲座自动转录、笔记生成）、无障碍辅助以及多模态AI理解数学内容奠定了数据集和基准基础。
6. 主要局限性：数据集虽大，但未完全覆盖真实课堂的复杂场景（如口语化表述、与视觉内容的结合）；口语数学表达本身存在固有的歧义（如“one over x plus two”的不同LaTeX解读），这限制了评估指标的绝对意义。

### 🏗️ 模型架构

论文主要探索了两大类技术路线，其架构如图1所示：

1.  ASR后校正流水线（图1A）：
    *   流程：输入音频波形 -> 预训练的ASR模型（如Whisper Large-v3） -> 生成文本转录 -> 将转录文本作为输入，送入微调后的纯文本大语言模型（LLM，如Qwen2.5） -> 输出最终的LaTeX格式字符串。
    *   组件与数据流：ASR模型作为固定前端，提取语音内容。LLM作为后端，负责“纠正”ASR可能在数学符号上的错误，并将自然语言描述的公式转换为精确的LaTeX语法。这是一种两阶段、解耦的方案。

2.  端到端多模态流水线（图1B，以SALMONN为例）：
    *   流程：输入音频波形 -> 两个并行的音频编码器（Whisper编码器和BEATs编码器） -> 特征通过适配器（Adapter）对齐到LLM的嵌入空间 -> 与文本提示（Prompt）的嵌入拼接 -> 送入基于LLaMA的大型语言模型解码器 -> 直接输出LaTeX字符串。
    *   组件与数据流：音频编码器负责从原始波形中提取丰富的语义特征。适配器（如Q-Former）是关键桥梁，负责将不同模态的特征映射到同一语义空间。LLM解码器综合了音频特征和文本指令，直接生成目标格式。这是一种紧密集成的端到端方案，理论上能更好地处理跨模态信息。

![图1: S2L方法示意图。A为后校正流水线，B为端到端多模态流水线（SALMONN）。](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/gk8WMxzIQP-0.png)

### 💡 核心创新点

1.  首个大规模开源S2L数据集：这是论文最核心的贡献。数据集包含约1.2万唯一数学句子和1.07万唯一孤立方程，由多达33名标注者提供超过6.6万个真实人声音频样本，并辅以超过57.1万个由多款TTS模型生成的合成音频，覆盖英语和俄语。这解决了该领域缺乏公开、大规模、高质量训练与评估数据的根本问题。
2.  建立首个S2L-句子识别基准：不同于以往只关注孤立方程，论文提出了S2L-sentences子集，评估模型在自然文本中嵌入数学公式时的识别能力，更贴近实际应用场景（如科学文献朗读）。
3.  系统化方法对比与分析：论文在统一的数据集和评估协议下，首次对ASR后校正（不同规模LLM）、少样本提示、以及端到端Audio-LLM（SALMONN, Qwen-Audio等）等多种技术路线进行了全面比较，明确了不同方案在不同条件下的优劣（例如端到端模型在更大数据集上表现更优）。

### 🔬 细节详述

- 训练数据：基于自建的S2L数据集。数据来源包括MathBridge（经筛选）、TextTeller（经GPT-4生成发音）以及Proof-Pile-2（提取数学句子）。预处理包括使用KaTeX进行LaTeX方程规范化、过滤无效条目。数据增强主要通过多个TTS声音和人工多发音实现。
- 损失函数：论文未明确说明，但根据描述，对于LLM微调，应为标准的交叉熵损失。
- 训练策略：
    - 对于Qwen系列LLM的微调：使用AdamW优化器，学习率1e-4，权重衰减0.01，线性学习率调度器，批大小16，训练1个epoch，在单张A100 GPU上进行。
    - 对于SALMONN（LLaMA基础）：使用LoRA技术（rank=8, alpha=32），冻结Whisper和BEATs编码器，仅微调LLaMA的注意力层和适配器。在两张H100 GPU上训练6个epoch，学习率3e-5（含3000步warmup和余弦衰减），批大小12。
- 关键超参数：后校正LLM规模从0.5B到7B不等。端到端模型SALMONN为13B参数。LoRA的rank普遍设为8。
- 训练硬件：后校正实验使用单张NVIDIA A100 GPU；SALMONN实验使用两张NVIDIA H100-80GB GPU。
- 推理细节：论文未详细说明解码策略（如beam search或采样），但通常LLM生成任务默认使用贪心或核采样。
- 正则化技巧：在SALMONN训练中使用了10%的dropout和自动混合精度（float16）。

### 📊 实验结果

论文在两个主要子集上进行了评估。

表1：S2L-Equations（英语测试集）结果对比（CER越低越好）

| 模型 | 训练数据类型 | CER (Test: Mix) | CER (Test: H) | CER (Test: A) |
| :--- | :--- | :--- | :--- | :--- |
| MathSpeech (基线) | MS-train | 64.0% | 59.3% | 69.7% |
| Qwen2.5-0.5B (后校正) | Mix-full (Eng+Rus) | 27.2% | 27.0% | 27.4% |
| SALMONN-13B (端到端) | Mix-full (Eng) | 17.5% | 18.2% | 16.7% |

表2：S2L-Sentences（英语，人工测试集H）结果对比（CER越低越好）

| 模型 | 训练数据类型 | 句子CER | 文本CER | 方程CER |
| :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-7B (后校正，LoRA) | Mix (Eng) | 18.8% | 12.4% | 43.8% |
| SALMONN-13B (端到端) | Mix (Eng) | 15.4% | 9.6% | 39.7% |
| Qwen2.5-1.5B (25 shots提示) | H (Eng) | 24.1% | 14.2% | 47.1% |

关键结论：
1.  在S2L-equations任务上，端到端的SALMONN模型（17.5% CER）显著优于所有后校正模型和MathSpeech基线（64.0% CER）。
2.  在S2L-sentences这一更贴近实际的任务上，方程CER普遍上升，但端到端模型仍保持最佳性能（39.7% CER）。
3.  多语言训练（Eng+Rus）的效果并不稳定，有时甚至会略微损害英语性能。
4.  仅使用提示（few-shot）的方法性能远低于经过微调的方法。

![图2: S2L-equations数据集收集与标注流程概述图。](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/gk8WMxzIQP-1.png)

论文还提供了更多实验结果表格（如附录中的表10、表11），展示了俄语测试集结果、不同数据集划分策略（随机划分vs.不相交划分）的影响，以及使用其他指标（如TeXBLEU, Rouge-1, chrF）的结果。核心趋势一致：端到端大模型表现最优，但资源消耗也最大。

### ⚖️ 评分理由

- 学术质量：6.0/7 - 创新性主要体现在数据集构建和基准设立上，技术路线应用多于原创。实验设计全面，对比了多种基线和自身模型，并在不同条件下进行消融（如语言、数据源、模型规模），证据可信度高。但方法部分深度不足，未深入探讨模型为何在数学表达式上有效或失效的内在机制。
- 选题价值：1.5/2 - Speech-to-LaTeX是一个明确、垂直且具有实际应用价值（教育、科研记录）的问题。论文填补了该领域缺乏大规模开源数据和系统评估的空白，对推动该子领域发展有明确贡献。但与通用语音识别或对话系统相比，受众相对专业。
- 开源与复现加成：0.5/1 - 论文明确提供了代码仓库（https://github.com/dkorzh10/speech2latex）和数据集（https://huggingface.co/datasets/marsianin500/Speech2Latex）的链接，复现信息（训练细节、超参数）在附录B中有较详细说明。但模型权重是否全部公开未明确说明（“has_model”标记为未说明）。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
