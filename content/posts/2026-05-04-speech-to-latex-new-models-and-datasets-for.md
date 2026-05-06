---
title: "Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences"
date: 2026-05-04
draft: false
tags: [语音识别, 数据集, 大语言模型, 多模态模型, 多语言]
categories: [iclr-2026]
description: "语音识别 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences

#语音识别 #数据集 #大语言模型 #多模态模型 #多语言

✅ **7.5/10** | 前25% | #语音识别 | #大语言模型 | #数据集 #多模态模型

学术质量 6.5/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高

### 👥 作者与机构

- 第一作者：Dmitrii Korzh（AXXX, Moscow, Russia；MTUCI, Moscow, Russia）
- 通讯作者：论文中未明确标注通讯作者
- 作者列表：Dmitrii Korzh（AXXX, MTUCI），Dmitrii Tarasov（FusionBrain Lab, AXXX; HSE University），Artyom Iudin（AXXX; MTUCI），Elvir Karimov（AXXX; MTUCI; Applied AI Institute），Matvey Skripkin（FusionBrain Lab, AXXX; Applied AI Institute），Nikita Kuzmin（AXXX; MTUCI; Applied AI Institute），Andrey Kuznetsov（FusionBrain Lab, AXXX; Innopolis University），Oleg Y. Rogov（AXXX; MTUCI; Applied AI Institute），Ivan Oseledets（AXXX; Applied AI Institute; Moscow State University）

### 💡 毒舌点评

亮点在于，论文贡献了一个规模空前、标注细致的开源S2L数据集，并系统性地探索了从ASR后校正到端到端Audio-LLM的多种技术路线，为这个细分领域确立了坚实的基准和评估框架。短板是，无论是ASR后校正还是端到端方法，模型架构本身均无显著创新，更多是现有技术的组合与应用，其性能提升很大程度上依赖于新构建的高质量数据集。

### 🔗 开源详情

- 代码：提供代码仓库链接 `https://github.com/dkorzh10/speech2latex`。
- 模型权重：论文中未提及公开预训练模型权重。但基于开源数据集和代码，可进行训练复现。
- 数据集：完全开源，托管于Hugging Face：`https://huggingface.co/datasets/marsianin500/Speech2Latex`。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练超参数、模型配置（如LoRA设置）、数据集划分策略和附录说明。
- 论文中引用的开源项目：Whisper, BEATs, Qwen2.5, Qwen2.5-Math, SALMONN, LLaMA, XTTSv2, MathBridge, TextTeller, Proof-Pile, KaTeX。

### 📌 核心摘要

该论文旨在解决将语音中的数学表达式和句子准确转换为LaTeX格式的挑战，该任务在教育（如课堂转录）和科研中具有重要应用价值。论文的核心贡献是构建并开源了首个大规模、多语言（英语和俄语）的语音转LaTeX数据集S2L，包含约66k人类标注和571k TTS合成的音频样本，涵盖孤立方程（S2L-equations）和嵌入公式的句子（S2L-sentences）两种类型。方法上，论文系统评估了基于ASR后校正（使用Whisper转录后接微调的LLM）和端到端Audio-LLM（如SALMONN）的多种技术路径。主要实验结果表明，在S2L-equations基准上，其最佳模型（SALMONN-13B）的字符错误率（CER）达到17.5%，而基于后校正的Qwen2.5-0.5B模型CER为27.2%，均显著优于MathSpeech基线（64.0%）。在S2L-sentences基准上，模型在句子整体CER为15.4%，其中公式部分的CER为39.7%，揭示了处理上下文相关数学语音的更大难度。这项工作为语音驱动的数学内容理解提供了重要资源和强基线，但局限在于当前数据集未能完全覆盖真实课堂环境（如口头解释、视觉内容关联），且模型在高度歧义或复杂嵌套表达式上仍有提升空间。

### 🏗️ 模型架构

论文并未提出一个全新的、统一的模型架构，而是评估了两大类现有技术路径在S2L任务上的表现：ASR后校正和端到端Audio-LLM。两者的核心流程如下：

1.  ASR后校正流程：
    *   输入：原始语音波形（重采样至16kHz）。
    *   ASR模型：使用冻结的Whisper-Large v3将语音转录为文本（自然语言描述）。
    *   LLM后校正：将ASR的文本转录作为输入，输入到微调过的大语言模型（如Qwen2.5系列、Qwen2.5-Math）中。LLM的任务是将非结构化的ASR转录“纠正”并“转换”为结构化的LaTeX代码。
    *   输出：LaTeX格式的数学表达式或句子。
    *   关键点：这是一种两阶段流水线，依赖于中间ASR转录的质量。论文实验了不同规模（0.5B， 1.5B， 7B）和类型（通用 vs. 数学专用）的LLM进行微调。

2.  端到端Audio-LLM流程（以SALMONN为例）：
    *   输入：原始音频波形和文本提示（Prompt）。
    *   音频编码：使用两个预训练的音频编码器（如Whisper和BEATs）分别提取音频的声学特征和语义特征。
    *   模态对齐：通过适配器（如Q-Former）将不同编码器输出的音频特征向量进行融合和对齐，生成与LLM词嵌入维度兼容的音频标记（Audio Tokens）。
    *   语言模型解码：将音频标记与文本提示标记拼接，输入到基于LLaMA的大语言模型中，进行自回归生成，直接输出LaTeX序列。
    *   关键设计：端到端地联合处理音频和文本，避免了ASR中间转录可能带来的信息损失和歧义放大。论文对SALMONN的LLaMA部分使用LoRA进行微调，同时冻结了音频编码器和适配器。

![S2L方法示意图](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-04/gk8WMxzIQP-0.png)

（图1：论文中的图1，展示了S2L的两种主要方法示意图。左侧(a)是后校正方法，流程为“输入波形 -> ASR模型 -> 文本转录 -> 后校正LLM -> 输出LaTeX”。右侧(b)是多模态端到端方法（以SALMONN为例），流程为“输入波形 -> 双音频编码器(Whisper, BEATs) -> 适配器 -> 音频与文本提示标记 -> LLaMA LLM -> 下一token预测”。）

### 💡 核心创新点

1.  首个大规模开源S2L数据集（S2L）：解决了该领域缺乏高质量、大规模、多语言、多说话人语音-公式配对数据的瓶颈。数据集包含人类标注（确保真实性和多样性）和TTS合成（用于扩展规模），并涵盖了孤立方程和句子两种任务���型。
2.  定义并建立“数学句子识别”新基准（S2L-sentences）：将任务从处理孤立方程扩展到处理嵌入自然语言中的数学公式，这更贴近实际应用场景（如讲座转录），并揭示了新的挑战。
3.  系统性的方法对比与基线建立：全面对比了从传统ASR后校正到前沿Audio-LLM等多种技术路线，并在自有新基准（S2L）和已有基准（MathSpeech）上建立了强大的性能基线，证明了方法的有效性。特别是，其模型在自有基准上大幅超越了MathSpeech模型。

### 🔬 细节详述

- 训练数据：
    - S2L-equations：来自MathBridge（经筛选）、TextTeller（用GPT-4生成发音）、GPT-4生成。总计：英语6.5k人类标注音频，45万+ TTS音频；俄语4.3k人类标注音频，5.3万+ TTS音频。
    - S2L-sentences：来自Proof-Pile-2的arXiv子集（提取含行内公式的句子）。总计：1.2万+人类标注音频，6.7万+ TTS音频。
    - 预处理：对所有LaTeX方程进行标准化（基于KaTeX），移除不可编译样本；音频重采样至16kHz。
    - 数据增强：主要通过TTS模型（XTTSv2, SaluteSpeech等）生成合成语音进行数据增强。

- 损失函数：未明确说明。根据任务性质，微调LLM进行序列生成时，推测使用交叉熵损失（Cross-Entropy Loss）。

- 训练策略：
    - LLM微调：使用AdamW优化器，学习率1e-4（带线性调度），权重衰减0.01，批次大小16，训练1个epoch。对于7B参数模型，使用LoRA（rank=8, alpha=32或16）。
    - SALMONN微调：使用LoRA（rank=8, alpha=32, dropout=10%）微调LLaMA部分，冻结Whisper和BEATs。使用AdamW优化器，学习率3e-5（带warmup 3000步和余弦衰减），梯度累积3步，批次大小12，混合精度(float16)，训练6个epoch。
    - 硬件：Qwen模型在单卡A100上训练；SALMONN在2张H100-80GB上训练。

- 关键超参数：ASR模型为Whisper-Large v3；评估指标主要为字符错误率（CER）和TeXBLEU。

- 推理细节：论文未详细说明。对于生成式LLM，通常使用贪婪解码或束搜索。

- 正则化：SALMONN训练中使用了dropout（10%）。

### 📊 实验结果

论文在S2L-equations（英语测试集）和MathSpeech基准上进行了主要对比，并在S2L-sentences上验证了模型处理上下文公式的能力。

S2L-Equations 主要结果（英语测试集，Disjoint Split）
| 模型 | 训练数据 | 训练语言 | 测试语言 | 测试集CER↓ | 测试集TeXBLEU↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| MathSpeech | MS-train | 英语 | 英语 | 64.04 | 83.71 |
| Qwen2.5-0.5B | Mix-full | 英+俄 | 英语 | 27.21 | 90.20 |
| Qwen2.5-1.5B | Mix-full | 英+俄 | 英语 | 25.69 | 90.70 |
| Qwen2.5-Math-1.5B | Mix-full | 英+俄 | 英语 | 25.01 | 90.90 |
| SALMONN-13B | Mix-full | 英语 | 英语 | 17.50 | 93.68 |
| Flamingo-3-8B | Mix | 英语 | 英语 | 23.25 | 91.32 |

跨基准对比（CER）
| 模型 | MathSpeech基准CER↓ | S2L-equations基准CER↓ |
| :--- | :--- | :--- |
| MathSpeech模型 | 27.7% | 64.0% |
| Qwen2.5-0.5B (本文) | 30.0% | 27.2% |
| SALMONN-13B (本文) | 27.7% | 17.5% |

（论文中的图5/表格，展示了S2L-equations上的详细实验结果，包含不同模型、训练数据、语言设置下的CER和TeXBLEU分数。）

S2L-Sentences 结果示例（英语人类标注测试集）
| 模型 | 训练数据 | 句子整体CER↓ | 文本部分CER↓ | 公式部分CER↓ | 公式部分TeXBLEU↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-7B (LoRA) | Mix | 18.75 | 12.36 | 43.75 | 85.46 |
| SALMONN-13B | Mix | 15.43 | 9.57 | 39.68 | 85.76 |

![S2L-sentences实验结果](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-04/gk8WMxzIQP-4.png)

（论文中的图6/表格，展示了S2L-sentences上的主要结果，对比了不同模型在句子、文本、公式各部分上的性能。）

关键结论：SALMONN-13B（端到端）在S2L-equations上取得了最佳性能。所有模型在S2L-sentences的公式部分CER（~40%）远高于孤立方程（~20-30%），证明了任务难度。少量样本提示（Few-shot）性能显著弱于微调模型。

### ⚖️ 评分理由

- 学术质量：6.5/7：论文贡献扎实，工作量饱满。创新在于数据集构建和新任务定义，而非算法模型本身。实验设计严谨，对比充分（多模型、多数据、多语言），并提供了定性结果（图3）和错误分析。但核心方法（ASR后校正、微调Audio-LLM）均为现有技术应用。
- 选题价值：1.5/2：任务垂直但应用明确。数据集的开源对社区有重要价值。成果可能促进教育科技、无障碍工具等领域的发展。
- 开源与复现加成：0.5/1：完全开源了数据集和代码，训练细节描述清晰，复现门槛较低。未提供预训练模型权重，但已足够支撑研究复现。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
