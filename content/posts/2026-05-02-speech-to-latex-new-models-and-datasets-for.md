---
title: "Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences"
date: 2026-05-02
draft: false
tags: [语音识别, 多模态模型, 数据集, 多语言, 大语言模型]
categories: [iclr-2026]
description: "语音识别 | 8.5/10"
hiddenInHomeList: true
---

# 📄 Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences

#语音识别 #多模态模型 #数据集 #多语言 #大语言模型

🔥 **8.5/10** | 前25% | #语音识别 | #多模态模型 | #数据集 #多语言

学术质量 7.5/7 | 选题价值 1.5/2 | 复现加成 0.8 | 置信度 高


### 👥 作者与机构

- 第一作者：Dmitrii Korzh (1 AXXX, Moscow, Russia; 2 MTUCI, Moscow, Russia)
- 通讯作者：未说明
- 作者列表：
  - Dmitrii Korzh (AXXX, MTUCI)
  - Dmitrii Tarasov (FusionBrain Lab, AXXX; HSE University)
  - Artyom Iudin (AXXX, MTUCI)
  - Elvir Karimov (AXXX, MTUCI; Applied AI Institute)
  - Matvey Skripkin (FusionBrain Lab, AXXX; Applied AI Institute)
  - Nikita Kuzmin (AXXX, MTUCI; Applied AI Institute)
  - Andrey Kuznetsov (FusionBrain Lab, AXXX; Innopolis University)
  - Oleg Y. Rogov (AXXX, MTUCI; Applied AI Institute)
  - Ivan Oseledets (AXXX, MTUCI; Applied AI Institute; Moscow State University)

### 💡 毒舌点评

这篇论文的最大亮点在于“基建狂魔”式的工作——用超过63万个人工/合成音频样本，硬生生为一个垂直领域（语音转LaTeX）打造了首个大规模开源数据集和完整的方法论基准，其数据构建的严谨性和开源精神值得称赞。但短板也很明显：号称“端到端”的SALMONN模型（图1b）其实只是在现有音频LLM上微调，且其对复杂数学语句（Table 3）的预测仍显示模型对深层语义理解有限，多数时候只是在做更精准的“符号匹配”。

### 🔗 开源详情

- 代码：提供GitHub仓库链接：`https://github.com/dkorzh10/speech2latex`。
- 模型权重：论文中未提及是否公开微调后的模型权重。仅提到使用了Qwen2.5、SALMONN等基础模型的开源权重。
- 数据集：完整数据集已开源，可通过HuggingFace获取：`https://huggingface.co/datasets/marsianin500/Speech2Latex`。
- Demo：未提及在线演示。
- 复现材料：提供了详尽的训练超参数（附录B）、数据处理流程描述、评估指标说明（附录A.2）以及用于LaTeX归一化的KaTeX fork。复现信息非常充分。
- 论文中引用的开源项目：Whisper, BEATs, Qwen2.5/Qwen2.5-Math系列, SALMONN, LLaMA, Gemma 3n, Audio Flamingo-3, XTTSv2, KaTeX, LoRA。

### 📌 核心摘要

1. 要解决的问题：将语音（特别是包含复杂数学表达式和句子的语音）准确转换为结构化的LaTeX格式，现有方法局限于孤立方程、依赖多次ASR转录、且缺乏大规模开源数据集和多语言支持。
2. 方法核心：构建了首个大规模开源S2L数据集（S2L-equations和S2L-sentences，共约63k人工标注和571k合成音频）。提出了两种方法：a) ASR后处理管线（使用Whisper转录，然后用微调的语言模型如Qwen2.5将文本转换为LaTeX）；b) 多模态端到端模型（如SALMONN），直接将音频和文本提示输入音频大模型生成LaTeX。
3. 与已有方法相比新在哪里：a) 提供了首个覆盖英语和俄语、包含孤立方程和上下文句子的大规模开源数据集；b) 首次系统评估了多模端到端方法（Audio-LLM）在此任务上的可行性；c) 提出了更贴合实际应用的S2L-sentences基准（包含文本和内嵌公式）。
4. 主要实验结果：在孤立方程（S2L-equations）的英语测试集上，最佳后处理模型（Qwen2.5-1.5B）CER为27.2%，最佳端到端模型（SALMONN-13B）CER为17.5%，均显著优于MathSpeech基线（64.0%）。在数学语句（S2L-sentences）上，SALMONN-13B的方程CER达到39.7%，句子文本CER为9.6%。详见下表：

表2（节选）：S2L-Equations 英语测试集结果（CER↓, TeXBLEU↑）
| 模型 | 训练数据 | 测试集 | CER | TeXBLEU |
| :--- | :--- | :--- | :--- | :--- |
| MathSpeech | MS-train | Eng | 64.04 | 83.71 |
| Qwen2.5-0.5B | Mix-full | Eng | 27.21 | 90.20 |
| SALMONN-13B | Mix-full | Eng | 17.50 | 93.68 |

表5（节选）：S2L-Sentences 人类标注测试集结果（CER↓）
| 模型 | 训练数据 | 测试集 | 句子CER | 文本CER | 方程CER | 方程TeXBLEU |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-0.5B | H | H | 29.18 | 23.13 | 56.93 | 83.22 |
| SALMONN-13B | Mix | H | 15.43 | 9.57 | 39.68 | 85.76 |

5. 实际意义：为教育（如讲座自动转录为LaTeX笔记）、辅助视障人士理解数学内容、以及推动多模态AI在科学领域的应用奠定了关键基础。
6. 主要局限性：数据集虽大但未完全覆盖真实讲座场景（如视觉依赖、不完整表达）；模型在处理语音歧义（如“one over x plus two”）和复杂嵌套结构时仍有挑战；端到端模型计算成本高，而轻量级后处理模型的性能依赖于ASR转录质量。

### 🏗️ 模型架构

论文提出了两类架构，如图1所示。

1.  ASR后处理管线（图1a）：
    *   输入：原始音频波形。
    *   流程：首先由一个冻结的ASR模型（论文评估后选用Whisper-Large v3）将音频转录为自然语言文本。然后，该文本被送入一个微调过的语言模型（如Qwen2.5系列），其系统提示要求识别语音并将数学表达式转为LaTeX格式。
    *   输出：包含LaTeX格式数学公式的文本序列。
    *   组件与数据流：此管线将语音识别和符号转换解耦，允许使用强大的现有ASR和LLM模块。其性能瓶颈在于中间ASR转录的质量和语言模型对口语化数学语言的理解。

2.  多模态端到端模型（图1b）：
    *   输入：原始音频波形 + 文本提示（如“Recognize the speech...”）。
    *   流程：采用类似SALMONN的架构。音频通过两个独立的音频编码器（论文中为Whisper和BEATs）提取特征，然后通过一个Q-former适配器将音频特征映射为与LLM（LLaMA）文本嵌入空间对齐的音频令牌。这些音频令牌与文本提示的令牌拼接后，送入LLM进行自回归解码。
    *   输出：LaTeX格式的文本序列。
    *   组件与数据流：此架构实现了真正的“端到端”转换，绕过了显式的语音转录步骤。核心在于模态适配器（Adapter）的设计和多编码器特征融合，使得LLM能够直接“理解”音频内容。

### 💡 核心创新点

1.  构建首个大规模开源S2L数据集：针对之前数据集（MathSpeech仅1.1k测试集）规模小、非开源、语言单一、任务类型有限的问题，论文发布了包含约63k人类标注和571k合成音频的双语（英/俄）数据集，覆盖孤立方程（S2L-equations）和内嵌方程的句子（S2L-sentences）两大任务。这是推动该领域研究最重要的基础贡献。
2.  建立首个数学语句识别基准（S2L-sentences）：超越了仅处理孤立方程的局限，首次提出并评估了将数学表达式置于自然语言上下文中进行语音识别的任务，更贴近真实应用场景，也更具挑战性。
3.  系统对比并融合两类建模范式：论文不仅系统评估了基于ASR后处理（利用LLM先验知识）和基于Audio-LLM的端到端多模态方法，还通过多语言训练、数据混合策略等进行了全面消融，为不同资源约束和应用场景提供了明确的方法论参考。
4.  引入针对性评估指标与归一化：除了CER，采用了专为LaTeX设计的TeXBLEU指标，并引入了LaTeX方程归一化流程（表1），以更公平地评估语义等价但语法不同的预测结果。

### 🔬 细节详述

- 训练数据：
    - S2L-equations：来自MathBridge（经筛选的3k英语方程）、TextTeller（9.4k方程）和GPT-4生成（覆盖多个学科）。人类标注：6,535个英语方程（27人，约2.3万音频），4,274个俄语方程（10人，约1.8万音频）。合成标注：9个TTS声音生成约45万英语音频，8个TTS声音生成约5.3万俄语音频。
    - S2L-sentences：主要从Proof-Pile-2的arXiv子集中提取内嵌公式句子，经预处理得到12.4k样本。人类标注：12,395个英语句子（20人，约2.5万音频）。合成标注：4个TTS声音生成约6.7万音频。
- 损失函数：主要使用标准交叉熵损失进行语言模型微调。
- 训练策略：
    - Qwen模型（ASR后处理）：使用AdamW优化器（权重衰减0.01），学习率1e-4，线性学习率调度，batch size为16，在单块A100 GPU上训练1个epoch。对于7B模型，使用LoRA（r=8, α=32）仅微调注意力投影矩阵。
    - SALMONN模型（端到端）：在LLaMA部分应用LoRA（r=8, α=32, dropout=0.1），冻结Whisper和BEATs编码器。在2块Nvidia H100-80Gb GPU上训练6个epoch，学习率3e-5（3000步warmup + 余弦衰减），batch size为12，使用混合精度（float16）。
- 关键超参数：主要模型为Qwen2.5-0.5B/1.5B/7B-Instruct及其数学变体，以及SALMONN-13B（基于LLaMA）。音频统一重采样至16kHz。
- 推理细节：论文未明确说明解码策略（如beam search宽度、温度），默认使用自回归生成。
- 正则化/稳定技巧：使用了LoRA进行参数高效微调；SALMONN训练中使用了dropout。

### 📊 实验结果

主要Benchmark与结果：
- S2L-Equations（英语，隔离方程测试）：核心对比在MathSpeech基线与本论文模型间进行。结果显示，本论文的最佳后处理模型（Qwen2.5-0.5B，Mix-full训练）CER为27.2%，最佳端到端模型（SALMONN-13B）CER为17.5%，均远低于MathSpeech的64.0%。详细结果见下表（节选自Table 2）：

| 模型 | 训练数据 | 测试集 | CER↓ | TeXBLEU↑ |
| :--- | :--- | :--- | :--- | :--- |
| MathSpeech | MS-train | Eng | 64.04 | 83.71 |
| Qwen2.5-0.5B | A (Eng) | Eng | 33.28 | 88.61 |
| Qwen2.5-0.5B | Mix-full (Eng+Rus) | Eng | 27.21 | 90.20 |
| Qwen2.5-1.5B | H (Eng+Rus) | Eng | 28.85 | 89.42 |
| SALMONN-13B | Mix-full (Eng) | Eng | 17.50 | 93.68 |

- S2L-Sentences（英语，句子测试）：这是首次评估。在人类标注测试集上，SALMONN-13B表现最佳，句子整体CER 15.43%，文本部分CER 9.57%，方程部分CER 39.68%。表5（节选）显示了不同模型的结果。

- 跨语言（俄语）：模型在俄语上也表现良好，Qwen2.5-0.5B在俄语测试集上CER低至4.44%（人工测试子集），证明了多语言数据集的有效性。

- 消融实验关键结论：
    1.  数据混合：在英语方程任务中，混合数据（Mix）和添加大规模合成数据（+400k）能稳定提升性能（如表2所示）。
    2.  多语言训练：效果不一。对小模型（0.5B），多语言训练在英语人工测试集上可能略损性能；对专用数学模型（Qwen2.5-Math-1.5B）则有益。
    3.  Few-shot vs. 微调：对于句子任务，微调模型的性能显著优于5/25-shot提示学习（表5），尤其在方程CER上差距明显。
    4.  模型规模：在句子任务上，7B LoRA微调模型明显优于1.5B和0.5B模型，但在方程任务上优势不显著，可能与任务复杂度有关。

图表：
- 图1（S2L方法示意图）：清晰对比了ASR后处理（a）和多模端到端（b）两种技术路线。图（a）显示“音频 → ASR → 文本 → 后处理LLM → LaTeX”的流水线；图（b）显示“音频 → 双编码器+适配器 → 音频令牌 + 文本提示 → LLM → LaTeX”的端到端路径。该图直观阐明了论文的核心方法论对比。
- 表3（SALMONN预测示例）：展示了端到端模型在具体方程上的成功与失败案例，说明了模型能力（如正确处理电磁场张量方程）和当前局限（如对“E = F/q”这类简单但表述模糊的方程预测错误），为理解CER数字提供了质性视角。

### ⚖️ 评分理由

- 学术质量：7.5/7：创新性体现在开创性地构建了大型基准数据集并全面对比两类建模范式。技术实现扎实，实验设计严谨（多维度消融、指标选择、归一化处理）。证据充分，结果可信且具有启发性（如端到端模型在复杂方程上的优势）。未得满分是因为部分实验设置（如ASR-agnostic模型的负面结果）未深入探讨原因，且模型对深层语义的处理能力仍有提升空间。
- 选题价值：1.5/2：课题处于语音、多模态AI与数学推理的交叉点，应用前景明确（教育辅助、学术记录）。建立了重要的垂直领域基准，对相关社区（音频大模型、科学AI）有较高参考价值。1.5分是因为其应用场景相对���业，对整个语音处理领域的推动力可能不如通用任务。
- 开源与复现加成：+0.8/1：提供了完整的数据集、代码仓库、详细的训练超参数（附录B），复现门槛低，对社区贡献大。扣0.2分是因为未提供预训练模型权重，且个别模型（如SALMONN）的完整配置需在正文中和附录间仔细对照。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
