---
title: "Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences"
date: 2026-05-03
draft: false
tags: [语音识别, 数据集, 多语言, 大语言模型]
categories: [iclr-2026]
description: "语音识别 | 8.5/10"
hiddenInHomeList: true
---

# 📄 Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences

#语音识别 #数据集 #多语言 #大语言模型

🔥 **8.5/10** | 前25% | #语音识别 | #数据集 | #多语言 #大语言模型

学术质量 6.5/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
- 通讯作者：未说明
- 作者列表：
    - Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
    - Dmitrii Tarasov (FusionBrain Lab, AXXX, Moscow, Russia; HSE University, Moscow, Russia)
    - Artyom Iudin (MTUCI, Moscow, Russia)
    - Elvir Karimov (MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia)
    - Matvey Skripkin (FusionBrain Lab, AXXX, Moscow, Russia; Applied AI Institute, Moscow, Russia)
    - Nikita Kuzmin (MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia)
    - Andrey Kuznetsov (FusionBrain Lab, AXXX, Moscow, Russia; Innopolis University, Innopolis, Russia)
    - Oleg Y. Rogov (AXXX, Moscow, Russia; MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia)
    - Ivan Oseledets (AXXX, Moscow, Russia; Moscow State University, Moscow, Russia)

### 💡 毒舌点评

这篇论文的亮点在于其系统性：不仅提出了首个大规模、多语言、开源的Speech-to-LaTeX数据集，还全面比较了ASR后校正和端到端Audio-LLM两种技术路线，并对多语言、合成数据效用等问题进行了深入消融，为垂直领域的语音识别研究树立了扎实的基线。短板则在于，尽管方法论完备，但其模型在处理高度歧义和嵌套的数学语句时CER依然偏高（40%），且评估主要依赖合成音频，距离真正解决课堂笔记转录等真实复杂场景的鲁棒性仍有明显距离。

### 🔗 开源详情

- 代码：提供开源代码仓库链接：https://github.com/dkorzh10/speech2latex
- 模型权重：论文中未明确提及是否公开了训练好的模型权重（如LoRA适配器）。提到“模型权重”部分未说明。
- 数据集：公开，提供HuggingFace链接：https://huggingface.co/datasets/marsianin500/Speech2Latex
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练超参数（附录B），包括优化器、学习率、batch size、LoRA参数等。提供了评估指标的详细定义（附录A.2）和额外的实验结果表格（附录C）。
- 论文中引用的开源项目：包括Whisper, Wav2Vec 2.0, WavLM, XTTSv2, KaTeX, Qwen2.5, LLaMA, SALMONN, Gemma, Audio Flamingo等。

### 📌 核心摘要

本文旨在解决将口头数学表达式和句子准确转换为结构化LaTeX符号的挑战。核心方法是构建并发布了一个大规模、多语言的开源数据集S2L（包含66k人工和571k合成音频样本），并系统评估了基于ASR后校正（ASR + LLM）和基于Audio-LLM（如SALMONN）的端到端两种技术路线。相比之前工作（如MathSpeech），本文的数据集首次提供了大规模训练数据、覆盖孤立方程和上下文句子、支持英语和俄语双语。主要实验结果表明：在S2L-equations基准上，本文模型（如Qwen2.5-0.5B）的CER为27.2%，显著优于MathSpeech模型在该基准上的64.0%；在MathSpeech基准上，本文模型CER为30.0%，与MathSpeech的27.7%具有可比性。本文还建立了首个数学句子识别基准（S2L-sentences），最佳模型（SALMONN-13B）的方程CER为39.7%。本工作为教育转录、多模态数学助手等应用奠定了基础，但其数据与模型在真实、复杂课堂场景下的鲁棒性仍是主要局限。

### 实验结果关键数据表

表2 (S2L-Equations， 英语测试集关键行)
| 模型 | 训练数据 | CER (Test) | TeXBLEU (Test) | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| MathSpeech | MS-train | 64.04% | 83.71% | 基线 |
| Qwen2.5-0.5B | Mix-full (Eng+Rus) | 27.21% | 90.20% | 本文最佳后校正模型 |
| SALMONN-13B | Mix-full (Eng) | 17.50% | 93.68% | 本文最佳端到端模型 |

表4 (与MathSpeech直接对比)
| 模型 | MathSpeech基准 CER | S2L-equations CER |
| :--- | :--- | :--- |
| MathSpeech | 27.7% | 64.0% |
| Qwen2.5-0.5B | 30.0% | 27.2% |
| SALMONN-13B | 27.7% | 17.5% |

表5 (S2L-Sentences， 英语测试集关键行)
| 模型 | 训练数据 | 文本CER | 方程CER | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-7B (LoRA) | Mix | 12.36% | 43.75% | 本文最佳后校正模型 |
| SALMONN-13B | Mix | 9.57% | 39.68% | 本文最佳端到端模型 |

![论文中的图片](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/gk8WMxzIQP-4.png)
图1：展示了两种技术路线。(a) ASR后校正流程：音频->Whisper ASR->文本->LLaMA LLM->LaTeX。(b) 端到端多模态流程：音频->Whisper和BEATs编码器->适配器->LLaMA LLM->LaTeX。

### 🏗️ 模型架构

本文并未提出一个全新的模型架构，而是系统性地评估和应用了现有的ASR和LLM架构，组合成两种主要的Speech-to-LaTeX流水线，如论文图1所示。

1. ASR后校正流水线 (ASR Post-Correction Pipeline)：
- 流程：输入音频波形 -> ASR模型（如Whisper-Large v3） -> 文本转录 -> 大语言模型（LLM，如Qwen2.5系列） -> 输出LaTeX字符串。
- 组件功能：
    - ASR模型：负责将语音信号转换为自然语言文本，包括对数学符号的口语化转写（如“sigma squared”）。论文对比了Whisper、WavLM等，发现Whisper在识别希腊字母和结构化表达上表现最佳。
    - LLM：接收ASR转录的文本，执行“文本到LaTeX”的转换任务。LLM作为后校正器，利用其强大的语言和数学先验知识，将口语化的文本转录纠正并格式化为正确的LaTeX代码。论文主要评估了Qwen2.5-0.5B/1.5B/7B和其数学专用变体Qwen2.5-Math-1.5B。
- 数据流：这是两阶段的串行流程，后一阶段的输出质量严重依赖于前一阶段ASR转录的准确性。

2. 端到端多模态流水线 (End-to-End Multimodal Pipeline)：
- 流程：输入音频波形 -> 多个音频编码器（如Whisper编码器，BEATs） -> 模态适配器 -> 大语言模型（LLaMA为基础） -> 输出LaTeX字符串。
- 组件功能：
    - 音频编码器：直接从原始波形中提取潜在的音频特征表示。论文使用了预训练的Whisper和BEATs编码器，它们被冻结，不进行微调。
    - 模态适配器：将来自不同音频编码器的特征进行融合，并与LLM的文本token嵌入空间对齐。例如SALMONN模型使用了Q-former作为适配器。
    - LLM：接收融合后的音频token和文本提示（如“Recognize the speech and convert the content into text. Any mathematical expressions should be transcribed in LaTeX format.”），直接生成LaTeX序列。
- 数据流：这是单阶段的联合模型，旨在直接建立从音频到结构化符号的映射，避免了ASR转录可能引入的中间错误。论文主要评估了SALMONN-13B，Qwen-Audio-7B，Gemma-3n-8B和Audio Flamingo-3-8B。

关键设计选择：ASR后校正流水线更容易实现，能利用现有强大的LLM数学能力；端到端流水线理论上更优，但需要处理多模态对齐且更依赖大规模高质量训练数据。论文通过对比这两种范式，提供了全面的技术选型参考。

### 💡 核心创新点

1.  构建首个大规模、开源、多语言Speech-to-LaTeX数据集 (S2L)：这是最核心的贡献。之前工作（如MathSpeech）缺乏公开的训练数据、测试集小（仅1.1k）、仅覆盖孤立方程。本数据集包含66k人工标注和571k TTS生成的音频，涵盖英语和俄语，包含孤立方程 (S2L-equations) 和嵌入句子的方程 (S2L-sentences) 两种形式。它解决了该领域研究的数据瓶颈，为未来工作提供了统一、可比较的基准。
2.  对ASR后校正与端到端Audio-LLM两类方法进行全面、系统的对比评估：论文不仅使用Qwen2.5等LLM实现ASR后校正，还引入了SALMONN等端到端Audio-LLM，并在统一的数据集和评估协议下进行了深入比较。这超越了之前仅关注后校正流水线（如MathSpeech）的局限，揭示了不同技术路线的性能边界。
3.  发现多语言与合成数据在特定任务下的效用与局限：通过大量消融实验，论文发现：(1) 在英语任务上加入俄语数据并不总能提升性能，有时反而下降（如Qwen2.5-0.5B）；(2) 合成（TTS）数据在训练后能良好泛化到人工标注的测试集，但其效果通常略逊于全部使用人工数据。这些发现对垂直领域数据构建具有指导意义。
4.  建立了首个数学句子识别 (S2L-sentences) 的基准与评估协议：之前工作仅处理孤立方程。本论文首次定义了包含上下文文本和内嵌方程的句子级识别任务，并提出了分别评估“文本CER”和“方程CER”的方法，揭示了该任务的额外挑战性（方程CER远高于文本CER）。

### 🔬 细节详述

- 训练数据：
    - S2L-equations：来源包括MathBridge（筛选后）、TextTeller（用GPT-4生成发音）、GPT-4生成的主题方程（如微积分、力学）。共约10.7k个独特方程。人工标注由33名标注员完成；合成标注使用XTTSv2等TTS模型。
    - S2L-sentences：主要来源是Proof-Pile-2（arXiv子集），经过过滤和KaTeX验证，得到约12k个独特句子。同样包含人工和合成标注。
    - 数据增强：通过不同发音人（人工）或不同TTS音色（合成）为同一文本生成多个音频样本。合成数据大规模扩充了训练集（如“Mix-full”设置加入了400k MathBridge TTS样本）。
- 损失函数：主要为交叉熵损失，用于语言模型的下一个token预测任务。
- 训练策略：
    - 优化器：AdamW，权重衰减0.01。
    - 学习率：1e-4，线性学习率调度器。
    - Batch Size：16。
    - 训练轮数：1个epoch。
    - LoRA微调：对于7B模型（如Qwen2.5-7B, Qwen-Audio-7B, SALMONN-13B中的LLaMA部分），采用LoRA进行高效微调。SALMONN的LoRA配置：r=8， α=32， dropout=10%， 仅应用于注意力投影层。
- 关键超参数：模型大小从0.5B到13B不等。SALMONN-13B包含两个冻结的音频编码器（Whisper， BEATs）和一个LLaMA-7B解码器。所有音频被重采样至16kHz。
- 训练硬件：Qwen模型在单张A100 GPU上训练；SALMONN在两张Nvidia H100-80Gb GPU上训练。
- 推理细节：LLM采用自回归生成。论文未详细说明解码策略（如beam search参数），仅提到在few-shot实验中使用5/25个示例提示。
- 评估指标：
    - 主指标：字符错误率 (CER)， TeXBLEU。
    - 辅助指标：ROUGE-1, sacreBLEU, chrF, chrF++, WER, METEOR。
    - 特殊处理：对LaTeX标签进行归一化（通过KaTeX解析AST），并统一为小写（除TeXBLEU外），以减少格式差异对指标的影响。

### 📊 实验结果

论文实验全面覆盖了不同模型、数据组合、语言和任务设置。

1. S2L-Equations (孤立方程) 结果 (英语测试集， 关键数据见上文表格)
- 核心结论：本文模型显著优于MathSpeech基线。在自有S2L-equations测试集上，最佳ASR后校正模型（Qwen2.5-0.5B， Mix-full）CER为27.2%，最佳端到端模型（SALMONN-13B）CER为17.5%，而MathSpeech模型在该测试集上CER高达64.0%。在MathSpeech公开基准上，本文模型CER（30.0%）与MathSpeech（27.7%）相当。
- 消融分析：
    - 多语言训练：效果不一。对小模型（0.5B）加入俄语数据在英语测试上可能有害；对数学专用模型（Math-1.5B）可能有益。
    - 合成数据效用：加入大量TTS数据（+400k）能提升英语性能，但对俄语测试可能不利。
    - 模型规模：1.5B通常优于0.5B，但7B（LoRA微调）不一定优于1.5B（全参微调），说明全参微调在小模型上可能更有效。
    - 模型类型：数学专用LLM（Qwen2.5-Math-1.5B）相比通用LLM（Qwen2.5-1.5B）无明显优势，可能因为输入是自然语言而非纯数学符号。

2. S2L-Sentences (句子) 结果 (英语测试集， 关键数据见上文表格)
- 核心结论：将数学表达式嵌入句子中识别远比识别孤立方程困难。最佳模型（SALMONN-13B， Mix训练）的方程CER为39.7%，文本CER为9.6%。所有模型的方程CER都显著高于其在孤立方程任务上的CER。
- 关键发现：
    - 在人工标注数据上微调通常效果最佳。
    - 少样本提示（5-shot, 25-shot）性能远低于微调。
    - 端到端SALMONN模型在句子任务上同样表现最佳。

![论文中的图片](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/gk8WMxzIQP-0.png)
图2：S2L-equations数据收集与标注流程概览。展示了从MathBridge/TextTeller等来源获取LaTeX，通过GPT-4生成发音，再进行人工或TTS标注的全过程。

![论文中的图片](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/gk8WMxzIQP-1.png)
论文中的图片，展示了更多数据处理相关的图表。

### ⚖️ 评分理由

- 学术质量：6.5/7。本文在技术创新性上虽非提出全新模型架构，但在问题定义、数据集构建和系统评估上贡献突出，属于扎实的系统性工作。技术正确性高，实验设计严谨，进行了充分的消融研究和对比（ASR vs 端到端，不同数据组合，不同语言）。证据可信度强，所有结果均基于统一的新基准，并开源了代码和数据。扣分点在于，作为一篇专注于特定垂直任务（数学语音转LaTeX）的论文，其方法（应用现有ASR和LLM）的原始创新性有限，且性能仍显示任务本身的巨大挑战。
- 选题价值：1.5/2。前沿性方面，将多模态LLM应用于结构化符号生成是当前热点。潜在影响明确，可直接应用于教育技术、科研辅助工具。应用空间在学术场景下清晰，但相比通用语音识别，其受众和市场规模较窄。与音频/语音读者相关性较高，尤其是关注ASR、语音后处理、多模态应用的群体。
- 开源与复现加成：+0.5/1。论文开源了完整的数据集（HuggingFace链接）、代码（GitHub链接），并提供了详细的训练超参数（附录B）。这极大地促进了后续研究的复现和拓展。未提供预训练模型权重（仅提到LoRA微调），但数据集的开源本身价值巨大。加成分数因此较高。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
