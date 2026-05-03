---
title: "Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences"
date: 2026-05-03
draft: false
tags: [语音识别, 端到端, 基准测试, 多语言, 数据集]
categories: [iclr-2026]
description: "语音识别 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences

#语音识别 #端到端 #基准测试 #多语言 #数据集

✅ **7.5/10** | 前25% | #语音识别 | #端到端 | #基准测试 #多语言

学术质量 5.5/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
- 通讯作者：未说明
- 作者列表：Dmitrii Korzh (AXXX, MTUCI), Dmitrii Tarasov (FusionBrain Lab, HSE University), Artyom Iudin (AXXX, MTUCI), Elvir Karimov (MTUCI, Applied AI Institute), Matvey Skripkin (FusionBrain Lab, Applied AI Institute), Nikita Kuzmin (MTUCI, Applied AI Institute), Andrey Kuznetsov (FusionBrain Lab, Innopolis University), Oleg Y. Rogov (AXXX, MTUCI, Applied AI Institute), Ivan Oseledets (AXXX, Moscow State University)

### 💡 毒舌点评

**亮点**：首次大规模开源了涵盖方程和句子的双语（英/俄）语音到LaTeX数据集，并系统性地对比了后校正和端到端两种主流技术路线，建立了全面的基准。**短板**：模型在真实、嘈杂、带有复杂上下文的课堂等场景中的泛化能力未得到验证，错误分析停留在示例层面，对语言歧义的处理策略不够深入。

### 🔗 开源详情

-   **代码**：提供代码仓库链接 `https://github.com/dkorzh10/speech2latex`。
-   **模型权重**：论文中未明确提及是否公开微调后的模型权重。
-   **数据集**：公开，提供了Hugging Face数据集链接 `https://huggingface.co/datasets/marsianin500/Speech2Latex`。
-   **Demo**：未提及。
-   **复现材料**：提供了完整的训练细节（优化器、学习率、批量大小、LoRA配置等）、数据划分策略和评估指标定义（附录），支持复现。
-   **引用的开源项目**：主要依赖Whisper、Qwen2.5、SALMONN、XTTSv2、KaTeX等开源模型和工具。

### 📌 核心摘要

1.  **问题**：将口语数学表达式（方程和句子）准确转换为结构化的LaTeX格式，是自动转录、教育技术等领域的一个挑战，存在发音歧义、缺乏数据集等问题。
2.  **方法核心**：提出了首个大规模开源数据集S2L（含66k人工标注和571k合成音频），并系统评估了两种技术路线：**ASR后校正**（先用Whisper转写，再用LLM如Qwen2.5校正为LaTeX）和**端到端多模态模型**（如SALMONN，直接从音频生成LaTeX）。
3.  **新在哪里**：相比先前工作（如MathSpeech），提供了首个公开的大规模、双语、包含句子和方程的数据集；首次引入并评估了端到端Audio-LLM方案；建立了更全面的评估基准。
4.  **主要结果**：在自建的S2L-equations基准上，最佳后校正模型（Qwen2.5-1.5B）和端到端模型（SALMONN-13B）的CER分别为27.2%和17.5%，远优于MathSpeech模型的64.0%；在S2L-sentences基准上，方程部分的CER最低为39.7%（SALMONN）。在MathSpeech已有基准上，本文方法也达到了可比性能（CER 30.0% vs. 27.7%）。
5.  **实际��义**：推动了语音驱动的数学内容理解技术，为教育辅助、科学笔记等应用提供了数据基础和方法参考。
6.  **主要局限性**：数据集未完全覆盖真实课堂环境（如即兴讲解、视觉内容关联）；口语数学固有的歧义（如一式多解）使得CER指标无法完全反映语义正确性；合成数据与真实人声存在差距。

### 🏗️ 模型架构

本文未提出一个全新的统一模型架构，而是探索并对比了两种将口语数学转换为LaTeX的主流技术路线：
1.  **ASR后校正流水线 (Post-Correction)**：
    *   **输入**：原始音频波形。
    *   **流程**：首先通过一个冻结的**ASR模型**（如Whisper-Large v3）将语音转写为自然语言文本。然后，将该文本输入一个**微调后的语言模型**（如Qwen2.5系列），由LLM负责将文本中的数学表达式识别并转换为准确的LaTeX代码。
    *   **组件**：ASR模型（负责语音到文本）+ LLM（负责文本到LaTeX的转换与纠错）。这种分离式设计能利用现成强大的ASR和LLM，但性能受限于ASR转写质量。
2.  **端到端多模态模型 (Audio-LLM)**：
    *   **输入**：原始音频波形。
    *   **流程**：使用**Audio-LLM**架构（如SALMONN）。音频首先由一个或多个**音频编码器**（如Whisper编码器、BEATs）提取特征，然后通过一个**适配器**模块将音频特征映射为LLM可理解的令牌嵌入。这些音频令牌与一个文本提示（如“识别语音并将内容转换为文本，任何数学表达式应以LaTeX格式转录”）的令牌拼接，共同输入一个大型语言模型（如LLaMA），由其自回归地生成LaTeX字符串。
    *   **组件**：音频编码器 + 适配器 + LLM解码器。该架构避免了中间转写步骤，试图直接建模从语音到符号的映射。

![论文中的图片](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/gk8WMxzIQP-0.png)
*图1展示了两种方法的示意图：(a) 后校正方法，音频经Whisper转写后输入LLaMA进行校正；(b) 端到端方法，音频经Whisper和BEATs编码后，通过适配器与提示一起输入LLaMA生成LaTeX。*

### 💡 核心创新点

1.  **首个大规模开源S2L数据集**：创建了包含约66k人工标注（英/俄双语，33位标注者）和571k合成音频的S2L数据集，覆盖孤立方程和内嵌方程的句子两个子集，填补了该领域缺乏公开、多样化、大规模训练/评测数据的空白。
2.  **系统性的多模型评估框架**：在统一数据集上，全面对比了从轻量级LLM后校正到大型端到端Audio-LLM的多种方案，量化了不同数据组合（人工、合成、混合）、不同训练策略（微调、少样本提示）的效果，建立了可靠的性能基线。
3.  **引入数学句子识别基准**：定义并评估了**S2L-sentences**任务，即识别包含内嵌数学表达式的完整英语句子。相较于仅处理孤立方程，该任务更贴近实际应用（如讲义转录），并揭示了其更高的难度（最佳方程CER从17.5%升至39.7%）。

### 🔬 细节详述

*   **训练数据**：核心为新构建的S2L数据集。方程部分（S2L-equations）：从MathBridge、TextTeller等收集并经启发式过滤和KaTeX编译检查，最终保留约10.7k唯一方程。句子部分（S2L-sentences）：从Proof-Pile-2的arXiv子集提取并清洗，得到约12k唯一句子。数据增强使用了XTTSv2等TTS模型进行大规模合成（571k样本）。
*   **损失函数**：对于LLM微调，使用**交叉熵损失**（Cross-Entropy Loss）。
*   **训练策略**：使用AdamW优化器，权重衰减0.01，学习率1e-4，线性学习率调度器。对于Qwen2.5-7B等大模型，使用**LoRA**（rank=8, alpha=32）进行高效微调，冻结主干，仅适配注意力投影层。SALMONN训练时冻结音频编码器和适配器，仅微调LLaMA部分。
*   **关键超参数**：批量大小16，训练1个epoch。SALMONN训练使用2张H100 GPU，6个epoch，梯度累积3步，批大小12，学习率3e-5（含3000步warmup和余弦衰减）。
*   **训练硬件**：主要使用NVIDIA A100 GPU进行LLM微调；SALMONN使用2张H100-80GB GPU训练。
*   **推理细节**：论文未详细说明解码策略（如beam search size、温度等）。
*   **正则化技巧**：在LoRA微调中应用了dropout（SALMONN设置为10%）。

### 📊 实验结果

**主要基准与指标**：在自建的S2L-equations（英文测试集）和S2L-sentences（英文测试集）上进行评估，主要指标为**CER**（字符错误率）和**TeXBLEU**。

**S2L-equations关键结果（表2/4，英文测试）**：
| 模型 | 方法 | 训练语言 | 测试CER (%) | TeXBLEU | 与MathSpeech CER对比 (在S2L-eq上) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| MathSpeech (120M) | 后校正 | Eng | 64.04 | 83.71 | 基线 |
| Qwen2.5-0.5B | 后校正 | Eng+Rus | 27.21 (Full Mix) | 90.20 | **-36.83** |
| Qwen2.5-1.5B | 后校正 | Eng+Rus | 25.69 (Full Mix) | 90.70 | **-38.35** |
| **SALMONN-13B** | **端到端** | Eng | **17.50** (Mix-full) | **93.68** | **-46.54** |
| *在MathSpeech基准上* | | | *30.0 (Qwen)* | *~84* | *相当 (27.7 vs 30.0)* |

**S2L-sentences关键结果（表5，英文测试）**：
| 模型 | 方法 | 训练数据 | 测试CER (句子) | 测试CER (文本) | 测试CER (方程) | TeXBLEU (方程) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-7B (LoRA) | 后校正 | Mix | **18.75** | **12.36** | 43.75 | 85.46 |
| **SALMONN-13B** | **端到端** | Mix | 15.43 | 9.57 | **39.68** | 85.76 |
| Qwen2.5-1.5B (25-shot) | 后校正 | H | 24.05 | 17.26 | 56.77 | 78.57 |

**关键发现**：
1.  **端到端模型（SALMONN）在孤立方程上表现最佳**，CER远低于后校正方法。
2.  **处理包含方程的句子时，性能显著下降**，最佳方程CER从17.5%升至39.7%，凸显了上下文带来的挑战。
3.  **人工标注数据通常比纯合成数据训练的模型表现更好**，但混合数据能带来提升。
4.  **少样本提示效果远差于微调**，即使是25-shot也难敌微调后的小模型。

### ⚖️ 评分理由

-   **学术质量：5.5/7**。论文在**数据集构建**和**系统性评估**方面做得扎实，提供了当前最全面的S2L任务数据和基线。创新性体现在首次定义并公开了双语、多粒度（方程/句子）的基准，并探索了Audio-LLM的应用。技术正确性良好，实验设计合理（如不重叠公式的测试集）。但模型架构层面的深度创新有限，更多是现有技术的整合与应用；对口语数学歧义的本质问题探讨不够深入。
-   **选题价值：1.5/2**。任务**垂直但实用**，针对教育、科研中的具体痛点。在“语音+结构化输出”的细分方向上具有前瞻性，为多模态AI理解专业领域内容提供了案例。与音频/语音读者的相关性在于展示了如何处理特定领域（数学）的语音理解难题。
-   **开源与复现加成：0.5/1**。论文明确提供了**数据集**（Hugging Face链接）和**代码**（GitHub链接）仓库，并详细列出了训练超参数。**权重未明确提及是否开源**（如“Model weights are available at...”），这是一个小扣分点。但整体复现友好度较高。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
