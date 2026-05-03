---
title: "Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences"
date: 2026-05-04
draft: false
tags: [语音识别, 语音大模型, 多语言, 数据集, 开源工具]
categories: [iclr-2026]
description: "语音识别 | 8.5/10"
hiddenInHomeList: true
---

# 📄 Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences

#语音识别 #语音大模型 #多语言 #数据集 #开源工具

🔥 **8.5/10** | 前25% | #语音识别 | #语音大模型 | #多语言 #数据集

学术质量 6.5/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高

### 👥 作者与机构

- 第一作者：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
- 通讯作者：未说明
- 作者列表：Dmitrii Korzh (AXXX, MTUCI)， Dmitrii Tarasov (FusionBrain Lab, AXXX; HSE University)， Artyom Iudin (MTUCI)， Elvir Karimov (MTUCI; Applied AI Institute)， Matvey Skripkin (FusionBrain Lab, AXXX; Applied AI Institute)， Nikita Kuzmin (MTUCI; Applied AI Institute)， Andrey Kuznetsov (FusionBrain Lab, AXXX; Innopolis University)， Oleg Y. Rogov (AXXX, MTUCI; Applied AI Institute)， Ivan Oseledets (AXXX; Moscow State University)。

### 💡 毒舌点评

亮点：论文的最大价值在于其完全开源的“基础设施”——一个涵盖6.6万+真实人类录音和57万+合成音频的、标注规范的双语数据集，外加完整的代码和模型权重，这对于一个此前数据匮乏的垂直任务（口语数学转LaTeX）而言是“功德无量”的贡献，直接拉高了该领域的研究门槛。短板：尽管数据集规模大，但其构建（大量TTS合成+GPT生成发音）与真实世界、即兴授课的口语数学表达仍有差距；另外，评估指标（如CER）对于LaTeX这种高度结构化的输出来说，可能无法完全反映其语义等价性（例如`a+b`和`b+a`），尽管作者引入了TeXBLEU进行部分弥补。

### 🔗 开源详情

- 代码：提供代码仓库链接（https://github.com/dkorzh10/speech2latex）。
- 模型权重：论文中提到模型是公开的（如SALMONN），并提供了复现结果的细节。未明确说明所有微调权重是否均上传，但实验设置和代码的开源性使得权重可被轻易复现。
- 数据集：完全开源，托管于Hugging Face（https://huggingface.co/datasets/marsianin500/Speech2Latex）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的训练超参数（附录B）、评估指标定义、数据集划分统计、消融实验结果以及错误分析，复现指引非常充分。
- 论文中引用的开源项目：使用了Whisper（ASR）、Qwen2.5系列和SALMONN（作为多模态模型）、KaTeX（LaTeX渲染与验证）、XTTSv2（TTS）、LoRA（高效微调）等开源工具和模型。

### 📌 核心摘要

本文针对将口语数学表达式转换为结构化LaTeX格式这一具有挑战性的任务，旨在解决现有方法数据稀缺、依赖多阶段ASR、缺乏多语言支持和端到端模型等问题。核心贡献是构建并开源了首个大规模、多语言的Speech-to-LaTeX（S2L）数据集，包含约6.6万个人工标注和57.1万个合成的音频样本，涵盖英语和俄语的数学方程与句子。方法上，论文系统评估了两种技术路线：1）基于Whisper ASR转录后，用微调的大语言模型（如Qwen2.5系列）进行后校正与转换；2）使用多模态音频大模型（如SALMONN）进行端到端的直接生成。主要实验结果显示，在作者提出的S2L-equations基准测试上，其端到端模型SALMONN-13B取得了17.5%的字符错误率（CER），显著优于MathSpeech基线模型的64.0%；在更难的S2L-sentences基准上，其方程部分CER为39.7%。该工作的实际意义在于为教育技术、学术辅助和科研笔记自动化提供了基础工具和评测标准。主要局限性在于数据集虽然规模大且多样，但合成数据与真实讲座场景的口语表达仍存在差距，且模型性能在处理嵌入在文本中的复杂数学表达式时仍有提升空间。

### 🏗️ 模型架构

论文提出了并评估了两种��要的技术架构，如图1所示。

![S2L方法示意图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/gk8WMxzIQP-0.png)

图1展示了两种核心的Speech-to-LaTeX转换方法：
- (a) 后校正方法：这是一个两阶段流水线。首先，输入的语音波形由一个ASR模型（如Whisper）处理，输出初步的文本转录。然后，该转录文本被输入到一个大型语言模型（LLM，例如LLaMA）中。LLM通过系统提示和用户消息（要求识别语音并将数学表达式转为LaTeX）接收该文本，并生成最终的LaTeX输出。这种方法的关键在于利用强大的LLM将非结构化的ASR输出映射到结构化的LaTeX。
- (b) 多模态端到端方法（以SALMONN为例）：这是一个单阶段的多模态模型。输入的原始音频波形首先由两个并行的音频编码器（如Whisper和BEATs）提取特征。这些特征通过一个适配器模块被转换为能够与LLM词元嵌入对齐的音频词元。然后，这些音频词元与来自文本提示（要求识别并转换为LaTeX）的文本词元被拼接在一起，共同输入到一个基于LLaMA的解码器中。解码器自回归地生成LaTeX序列。这种方法的优势在于避免了中间ASR转录可能引入的错误和信息损失。

两种方法的关键设计选择在于：后校正法易于利用现有强大的ASR和LLM，且训练数据需求相对较低（主要是文本-文本对）；端到端法理论上更优，但需要高质量的音频-文本对数据进行训练，且模型更复杂。

### 💡 核心创新点

1.  构建首个大规模开源S2L数据集：这是本文最核心的贡献。数据集包含超过6.6万个人工标注的音频样本（来自33位标注者），以及57.1万个合成样本，覆盖英语和俄语，包含孤立方程和包含数学的句子两种子集。这填补了该领域缺乏训练和评测数据的空白。
2.  系统评估从ASR后校正到端到端的多种技术路径：论文不仅测试了基于Whisper + Qwen2.5的后校正流水线，还深入探索了SALMONN、Gemma-3n、Audio Flamingo等端到端多模态音频大模型在S2L任务上的性能，为后续研究提供了全面的技术路线参考。
3.  提出并建立了S2L任务的标准评测基准与协议：论文提出了S2L-equations和S2L-sentences两个新的基准测试集，并制定了严格的数据划分（如公式不重叠的“disjoint split”）、评估指标（CER， TeXBLEU）和归一化方法，使得不同模型之间的对比更加公平和标准化。

### 🔬 细节详述

- 训练数据：
    - 数据来源：S2L-equations来自MathBridge（清洗后）、TextTeller（用GPT-4生成发音）和GPT-4生成的新方程；S2L-sentences主要来自Proof-Pile-2。
    - 规模：人工标注音频约6.6万条，合成音频约57.1万条。
    - 预处理：使用KaTeX进行LaTeX方程的标准化与验证（见Table 1示例），清理无效或质量低的样本。
    - 数据增强：使用多个TTS模型（XTTSv2等）和人工标注者产生不同发音。
- 损失函数：论文中未明确说明，但根据语言模型微调的常规做法，推测使用交叉熵损失。
- 训练策略：
    - 对于后校正模型（Qwen系列）：在单个A100 GPU上训练1个epoch，batch size为16。优化器为AdamW（weight decay=0.01），学习率1e-4，线性学习率调度。
    - 对于多模态模型（SALMONN）：使用LoRA微调LLaMA部分（rank=8, alpha=32），冻结Whisper和BEATs编码器。在2张H100 GPU上训练6个epoch，batch size为12，使用余弦学习率调度（起始3e-5，含3000步warmup）。
    - 对于更大的模型（如Qwen2.5-7B）：同样采用LoRA进行高效微调。
- 关键超参数：Qwen2.5模型有0.5B、1.5B、7B三种规模；SALMONN为13B参数模型。ASR模型固定使用Whisper-Large v3。
- 训练硬件：如上所述，主要使用NVIDIA A100和H100 GPU。
- 推理细节：论文未详细说明解码策略，通常LLM生成使用贪心或束搜索。
- 正则化技巧：使用了LoRA进行参数高效微调，防止过拟合；训练中可能使用了dropout（SALMONN中提及为10%）。

### 📊 实验结果

论文在多个基准和条件下进行了全面评估，关键结果如下表所示：

表4：在MathSpeech基准和S2L-equations（英语测试集）上的CER对比
| 模型 | MathSpeech基准 CER | S2L-equations CER |
| :--- | :--- | :--- |
| MathSpeech | 27.7% | 64.0% |
| Qwen2.5-0.5B (多语言) | 30.0% | 27.2% |
| SALMONN-13B | 27.7% | 17.5% |

结论： 本文提出的方法在MathSpeech基准上与专用模型MathSpeech性能相当，但在作者自己的、更具挑战性的S2L-equations测试集上，其模型（尤其是端到端模型SALMONN）表现出显著优势，CER大幅降低（17.5% vs. 64.0%）。

表2（部分）：S2L-equations英语测试集主要结果
| 模型 | 训练语言 | 测试数据 | CER | TeXBLEU |
| :--- | :--- | :--- | :--- | :--- |
| MathSpeech | Eng | 测试集 (混合) | 64.04 | 83.71 |
| Q-0.5B (Mix-full) | Eng+Rus | 测试集 (混合) | 27.21 | 90.20 |
| Q-1.5B (Mix-full) | Eng+Rus | 测试集 (混合) | 25.69 | 90.70 |
| SALMONN-13B (Mix-full) | Eng | 测试集 (混合) | 17.50 | 93.68 |

结论： 端到端模型SALMONN-13B在英语方程上取得了最佳性能。增加训练数据（Mix-full）和模型规模（0.5B到1.5B）通常能提升性能。

表5（部分）：S2L-sentences英语测试集主要结果（人工测试子集）
| 模型 | 训练数据 | 句子整体 CER | 文本部分 CER | 方程部分 CER |
| :--- | :--- | :--- | :--- | :--- |
| Q-0.5B | 人工 | 29.18 | 23.13 | 56.93 |
| Q-1.5B | 人工 | 25.96 | 20.69 | 53.13 |
| Q-7B (LoRA) | 混合 | 18.75 | 12.36 | 43.75 |
| SALMONN-13B | 人工 | 16.03 | 10.09 | 41.53 |

结论： 在处理包含文本的数学句子时，任务难度显著增加。端到端模型SALMONN-13B在整体句子和文本部分CER上均取得最佳，方程部分CER为41.53%，也优于微调的文本LLM。Few-shot方法性能明显弱于微调。

跨语言结果（表2附录部分）：模型在俄语测试集上表现极佳（例如Q-7B在俄语混合测试集上CER可低至1.59%），表明该任务在形态更规则的语言或更受限的发音中可能更容易。

### ⚖️ 评分理由

- 学术质量：6.5/7：论文在数据集构建上贡献突出，方法评估全面（涵盖从后校正到端到端，从0.5B到13B参数），实验设计合理（多种数据划分、消融实验），结果分析深入（如讨论了歧义性、指标局限性）。创新点明确且扎实。
- 选题价值：1.5/2：任务具有明确的实用价值（教育、科研），属于语音与文档智能交叉的前沿方向。但相对于通用的语音识别或大模型对话，其应用范围相对垂直。
- 开源与复现加成：+1.0：论文在开源方面堪称典范。提供了完整的代码仓库、大规模数据集（通过Hugging Face）、多个模型权重，并详尽说明了训练配置、评估脚本和归一化方法。这极大地降低了复现门槛，加速了领域研究。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
