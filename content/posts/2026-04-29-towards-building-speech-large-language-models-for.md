---
title: "Towards Building Speech Large Language Models for Multitask Understanding in Low-Resource Languages"
date: 2026-04-29
draft: false
tags: [语音大模型, 低资源, 语音识别, 自监督学习, 多任务学习]
categories: [icassp-2026]
description: "语音识别 | 6.5/10"
hiddenInHomeList: true
---

# 📄 Towards Building Speech Large Language Models for Multitask Understanding in Low-Resource Languages

#语音大模型 #低资源 #语音识别 #自监督学习 #多任务学习

✅ **6.5/10** | 前25% | #语音识别 | #自监督学习 | #语音大模型 #低资源

学术质量 5.0/7 | 选题价值 1.5/2 | 复现加成 0.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Mingchen Shao（西北工业大学计算机学院，音频、语音与语言处理组 (ASLP@NPU)）
- 通讯作者：Zhonghua Fu（西北工业大学计算机学院，音频、语音与语言处理组 (ASLP@NPU)），Lei Xie（西北工业大学计算机学院，音频、语音与语言处理组 (ASLP@NPU)）
- 作者列表：Mingchen Shao（西北工业大学计算机学院），Bingshen Mu（西北工业大学计算机学院），Chengyou Wang（西北工业大学计算机学院），Hai Li（爱奇艺公司），Ying Yan（爱奇艺公司），Zhonghua Fu（西北工业大学计算机学院），Lei Xie（西北工业大学计算机学院）

### 💡 毒舌点评

本文最大的亮点在于系统性思维，为“低资源语言SLLM”这个老大难问题提供了从编码器、对齐方法到数据生成的全套“工具箱”，并开源了关键组件，具有很强的工程示范价值。但最大的短板在于其核心数据生成管线（Thai-SUP）严重依赖DeepSeek和Gemini等闭源商业大模型，这不仅削弱了研究的独立性和完全可复现性，也使得“资源高效”的主张打了折扣——毕竟不是每个研究者都能随意调用这些API来复现你的数据集。

### 📌 核心摘要

1.  要解决的问题：现有语音大语言模型（SLLMs）在英语等高资源语言上表现优异，但在泰语等低资源语言上性能严重下降。原因包括：现有语音编码器（如Whisper）在低资源语言上表现不佳且任务支持有限；基于ASR的对齐方法计算成本高且泛化性受限；低资源语言缺乏多任务语音理解数据。
2.  方法核心：提出一个综合解决方案，包含三个组件：（1）XLSR-Thai：首个泰语自监督语音编码器，通过在36,000小时泰语无标签数据上持续预训练XLSR模型得到。（2）U-Align：一种新的语音-文本对齐方法，通过动态时间规整（DTW）损失直接对齐适配后的语音表示与文本转录的嵌入，不经过大语言模型，计算更高效且支持多任务。（3）Thai-SUP：一个数据生成管线，利用大语言模型对高资源英语文本理解数据进行增强、翻译，再经文本转语音合成，生成了首个超过1000小时的泰语语音理解数据集（涵盖IC、NER、SR任务）。
3.  与已有方法相比新在哪里：
    *   编码器：针对特定低资源语言定制SSL编码器，比通用编码器（如Whisper）更具任务通用性和表示能力。
    *   对齐：U-Align直接对齐语音和文本表示，避免了传统ASR-based Alignment对整个SLLM进行微调带来的高计算成本和ASR任务特异性。
    *   数据：Thai-SUP提供了一种从高资源文本数据生成低资源语音理解数据的可迁移管线，解决了多任务标注数据稀缺问题。
4.  主要实验结果：
    *   XLSR-Thai有效性：在ASR任务上，XLSR-Thai相比原始XLSR模型CER显著降低（例如，在CommonVoice测试集上，XLSR-Thai-CTC的CER为3.97%，原始XLSR-CTC为5.06%）。在多任务理解中，使用XLSR-Thai的模型在所有任务上均优于使用Whisper编码器的模型。
    *   U-Align有效性：在相同设置下，U-Align (DTW)在多任务理解上全面优于传统的ASR-based Alignment。例如，使用XLSR-Thai编码器时，U-Align (DTW)在IC任务上达到89.68%准确率，而ASR-based Alignment为81.71%；在ASR任务上，U-Align在达到相同CER时计算成本更低（见图4）。
    *   多任务理解最佳结果：最佳模型配置 XLSR-Thai + U-Align (DTW) 在多项任务上取得最优结果：IC准确率89.68%，NER-ALL准确率53.77%，SR评分3.02，ASR CER 13.32%（具体数值见表2）。
5.  实际意义：为构建其他低资源语言的多任务语音大模型提供了一套可迁移的、包含模型、方法和数据生成流程的开源解决方案，降低了相关研究的门槛。
6.  主要局限性：方案在泰语上得到验证，但在其他低资源语言上的泛化能力有待证明；数据生成管线（Thai-SUP）依赖多个闭源商业大模型（DeepSeek, Gemini）的API，可能影响复现性和独立性；未报告完整的训练成本（如GPU小时数）。

### 🏗️ 模型架构

论文提出的系统整体架构如 图1 所示，包含一个核心的语音大语言模型（SLLM）和两个关键的构建阶段。

![图1: U-Align架构图](https://nanless.github.io/audio-paper-digest-images/icassp-2026/2026-04-28/11462223-10.png)

整体架构与组件：
1.  语音编码器 (XLSR-Thai)：输入原始语音波形，输出连续的语音表示序列 `H = {h_i}`。它基于XLSR模型在大量泰语无标签数据上继续预训练得到，旨在提取丰富的声学和语言学特征。
2.  模态适配器 (Adapter)：将语音编码器输出的高维语音表示映射到大语言模型的嵌入空间。它由LayerNorm、CNN子采样器和投影MLP组成。其作用是“翻译”语音特征，使其能被LLM理解。
3.  大语言模型解码器 (LLM)：采用冻结的泰语LLM（Typhoon2-LLaMa2-3B）。它接收适配器输出的语音嵌入和特定任务的提示文本，生成相应的文本输出（如ASR转录、NER实体标签等）。

两阶段训练流程：
*   阶段1：对齐训练 (Alignment Stage) - 使用 U-Align 方法。
    *   输入：语音和对应的文本转录。
    *   流程：语音经过XLSR-Thai和适配器得到语音嵌入 `H`；文本经过LLM的词嵌入层得到文本嵌入 `E`。
    *   核心：使用DTW损失（公式1）直接计算 `H` 与 `E` 之间的对齐损失。此阶段不涉及LLM的前向/反向传播，仅优化适配器参数，使语音嵌入在向量空间中尽可能靠近其对应的文本嵌入。
    *   输出：一个训练好的适配器，它能将语音映射到与文本相似的嵌入空间。
*   阶段2：多任务微调 (Multi-Task Finetuning Stage)：
    *   输入：语音和带有任务标签的监督数据（来自ASR数据集和Thai-SUP生成的数据）。
    *   流程：冻结XLSR-Thai编码器和LLM。将阶段1初始化的适配器、任务特定提示和语音嵌入输入到冻结的LLM中。
    *   目标：微调适配器（或联合微调编码器和适配器），优化LLM在具体多任务（如ASR、IC、NER、SR）上的表现。

与传统ASR-based Alignment的对比（见图1下半部分）：
传统方法在对齐阶段需要以ASR损失为目标，优化整个SLLM（包括LLM），计算成本高，且优化目标局限于ASR。而U-Align将对齐过程独立出来，直接约束语音和文本表示，更通用且高效。

### 💡 核心创新点

1.  首个泰语自监督语音编码器 (XLSR-Thai)：
    *   是什么：通过在36,000小时泰语无标签数据上持续预训练XLSR模型，得到一个针对泰语优化的SSL编码器。
    *   局限：通用SSL模型（如XLSR）或多语言ASR模型（如Whisper）在低资源语言上覆盖数据少，表示能力弱。
    *   如何起作用：大量目标语言的无标签数据预训练，使编码器能更好地捕捉泰语特有的声学和语言特征，支持更广泛的下游任务（不仅限于ASR）。
    *   收益：在泰语ASR和多任务理解上均带来稳定提升（表1，表2），证明了定制化SSL编码器对低资源语言SLLM的重要性。

2.  通用高效的语音-文本对齐方法 (U-Align)：
    *   是什么：一种两阶段对齐方法，第一阶段使用DTW损失直接对齐适配后的语音嵌入和文本嵌入，不涉及LLM。
    *   局限：传统ASR-based Alignment计算成本高，且优化目标（ASR）可能不是最佳的通用对齐目标。
    *   如何起作用：通过直接拉近语音和对应文本在嵌入空间中的距离，使LLM能“更自然”地理解语音输入。使用DTW处理长度不匹配问题。
    *   收益：在更低计算成本下（图4），实现了比ASR-based Alignment更好的多任务理解性能（表2），且该方法可更换约束函数（如CTC损失），具有普适性（消融实验）。

3.  低资源语音理解数据生成管线 (Thai-SUP)：
    *   是什么：一个四步流程：收集高资源文本数据 -> 用LLM增强和筛选 -> 翻译成目标语言 -> TTS合成语音。
    *   局限：低资源语言缺乏带有多任务标签（IC, NER, SR）的语音数据。
    *   如何起作用：利用丰富的高资源英语文本数据，通过LLM进行语义和任务相关的数据增广，再迁移翻译并合成语音，快速构建大规模配对数据。
    *   收益：生成了首个超过1000小时的泰语多任务语音理解数据集，显著提升了SLLM的多任务能力（对比表2中使用与不使用Thai-SUP的结果）。

### 🔬 细节详述

*   训练数据：
    *   XLSR-Thai预训练：16,000小时公开泰语数据（GigaSpeech2， MSR-86K） + 20,000小时内部未标注泰语数据。
    *   对齐阶段：从GigaSpeech2， MSR-86K， Common Voice中抽取的2,000小时子集。
    *   多任务微调：ASR数据（同对齐阶段） + Thai-SUP生成的数据（IC: 175小时， NER: 648小时， SR: 250+小时）。
    *   Thai-SUP数据源：英语数据集SNIPS (IC)， WikiANN/CONLL-2023 (NER)。增强由DeepSeek-v3完成，翻译和筛选由Gemini-2.5-flash完成，语音合成使用泰语微调的LLaSa模型。
*   损失函数：
       U-Align阶段1：DTW损失（公式1）。基于余弦距离 `C_ij`，在最优单调规整路径 `π` 上求平均，解决序列长度不匹配问题。
    *   多任务微调阶段2：对于分类任务（IC， NER）和ASR，使用交叉熵损失 (CE-Loss)。对于SR任务，使用LLM评分（1-5分）作为自动评估指标。
*   训练策略：
    *   对齐阶段：仅训练适配器。具体训练轮数、学习率等未说明。
    *   多任务微调阶段：冻结LLM，训练适配器。具体训练轮数（论文提及为一个epoch）和优化细节未说明。
    *   基线比较：为公平对比，ASR-based Alignment和U-Align在相同数据、模型设置和训练预算下进行。
*   关键超参数：
    *   模型大小：语音编码器约300M-450M参数（CTC/AED版本）；LLM为Typhoon2-LLaMa2-3B（参数量未说明，根据名称推断约3B）。
    *   适配器结构：LayerNorm + CNN子采样器 + 投影MLP。具体维度未说明。
*   训练硬件：论文中未提及具体GPU型号、数量和训练时长。
*   推理细节：未说明解码策略（如beam search size）、温度等参数。
*   正则化技巧：未提及。

### 📊 实验结果

论文主要在三个表和两幅图中展示了结果。

表1: XLSR-Thai在ASR单任务上的CER(%)性能评估
| 模型 | 参数量 | Giga2 Test CER(%) | CV Test CER(%) |
| :--- | :--- | :--- | :--- |
| Conformer-giga2 | 150M | 16.36 | 6.12 |
| Whisper-medium-giga2 | 769M | 14.15 | 6.92 |
| XLSR-AED | 450M | 17.72 | 5.73 |
| XLSR-Thai-AED | 450M | 14.88 | 4.80 |
| XLSR-CTC | 300M | 16.74 | 5.06 |
| XLSR-Thai-CTC | 300M | 13.91 | 3.97 |
*   结论：XLSR-Thai在两种微调方式下（AED和CTC）均显著优于原始XLSR模型，也优于相同规模的Conformer基线和更大的Whisper-medium模型，证明了其作为泰语语音表示提取器的优越性。

表2: 多任务泰语语音理解结果
| 模型配置 | IC ACC(%) | NER-ALL ACC(%) | SR LLM-score | ASR CER(%) |
| :--- | :--- | :--- | :--- | :--- |
| Whisper + ASR-based Alignment | 77.15 | 37.86 | 2.66 | 14.43 |
| Whisper + U-Align (DTW) | 81.24 | 42.52 | 2.91 | 14.08 |
| XLSR-Thai + Directly-MT | 82.26 | 39.53 | 2.71 | 14.83 |
| XLSR-Thai + ASR-based Alignment | 81.71 | 43.23 | 2.89 | 13.81 |
| XLSR-Thai + U-Align (CTC) | 86.98 | 51.07 | 3.10 | 13.51 |
| XLSR-Thai + U-Align (DTW) | 89.68 | 53.77 | 3.02 | 13.32 |
*   关键结论：
    1.  编码器对比：使用XLSR-Thai的配置（后三行）全面优于使用Whisper的配置（前两行）。
    2.  对齐方法对比：在相同编码器（XLSR-Thai）下，U-Align (DTW) 在所有任务上均优于 ASR-based Alignment 和 Directly-MT（无预对齐）。这证明了U-Align作为通用对齐方法的高效性和有效性。
    3.  损失函数对比：U-Align (DTW)略优于U-Align (CTC)，但两者都显著优于ASR-based Alignment，说明该方法对具体损失函数不敏感。
    4.  最佳性能：最佳配置 XLSR-Thai + U-Align (DTW) 在IC、NER和ASR上取得最优，在SR上取得次优。

图4: CER性能与计算成本比较
![图4: 计算成本与性能对比图](https://nanless.github.io/audio-paper-digest-images/icassp-2026/2026-04-29/11462300-9.png)
*   横轴：计算量（×10^7 TFLOPs）。纵轴：ASR CER (%)。
*   曲线：显示了U-Align和ASR-Based Alignment两条曲线。
*   结论：在达到相同CER时，U-Align所需的计算量更少；在相同计算量下，U-Align能达到更低的CER。这定量证明了U-Align比传统ASR-based Alignment更具计算效率。

图3: t-SNE可视化
![图3: 嵌入空间t-SNE可视化](https://nanless.github.io/audio-paper-digest-images/icassp-2026/2026-04-29/11462300-2.png)
*   可视化对象：文本嵌入（蓝色）、ASR-based Alignment后的语音嵌入（红色）、U-Align后的语音嵌入（绿色）。
*   结论：U-Align生成的语音嵌入（绿色）与文本嵌入（蓝色）在空间中重叠度更高、更紧密，而ASR-based的语音嵌入（红色）则更为分散。这直观地证明了U-Align能更有效地将语音表示对齐到文本表示空间。

### ⚖️ 评分理由

-   学术质量（5.0/7）：
    -   创新性（良好）：提出了针对特定问题的系统性解决方案，三个组件（XLSR-Thai， U-Align， Thai-SUP）各有明确创新点，且组合逻辑清晰。U-Align的对齐思想具有一定启发性。
    -   技术正确性（良好）：方法设计合理，实验对比设置了合理的基线（如不同编码器、不同对齐方法），消融实验（CTC vs DTW）验证了方法的稳健性。
    -   实验充分性（一般）：实验验证了提出模块的有效性，但所有实验仅在泰语上进行，缺乏在其他低资源语言上的泛化验证。计算成本的对比（图4）缺乏绝对数值。
    -   证据可信度（良好）：提供了具体的数字对比和可视化证据，结论有数据支撑。

-   选题价值（1.5/2）：
    -   前沿性（高）：低资源语音大模型是当前研究的热点和难点。
    -   潜在影响与应用（中高）：为泰语等低资源语言开发语音应用提供了基础模型和数据生成方案，具有实用价值。开源组件能直接助力社区研究。
    -   读者相关性：对从事多语言语音处理、语音大模型、低资源研究的读者有较高参考价值。

-   开源与复现加成（0.0/1）：
    -   论文明确表示开源了XLSR-Thai模型和Thai-SUP数据集，并提供了Hugging Face链接（https://huggingface.co/datasets/mcshao/Thai-understanding），这是重要的贡献。
    -   然而，缺乏完整训练代码、详细的超参数配置文件、复现脚本等关键信息。特别是Thai-SUP数据生成依赖外部商业API，这使得完全独立复现数据生成过程变得困难。因此，复现加成有限。

### 🔗 开源详情

-   代码：论文中提供了指向数据集的Hugging Face链接（https://huggingface.co/datasets/mcshao/Thai-understanding）。未明确提供模型训练和推理的完整代码仓库链接。
-   模型权重：论文明确指出开源了 XLSR-Thai 语音编码器权重，并在文中提及“open-source XLSR-Thai”。具体下载地址应包含在上述Hugging Face仓库或单独链接中。
-   数据集：论文明确指出开源了 Thai-SUP 生成的泰语语音理解数据集（超过1000小时），并通过上述Hugging Face链接提供。
-   Demo：论文中未提及提供在线演示。
-   复现材料：论文提供了模型架构（图1）、核心算法（DTW损失公式1）、实验设置（数据集、基线、指标）等信息，但未提供详细的超参数设置、训练日志、配置文件或检查点，完整的训练复现细节不足。
-   引用的开源项目：
    1.  XLS-R：作为XLSR-Thai的预训练基础模型。
    2.  Typhoon2-LLaMa2-3B：作为SLLM中的LLM解码器。
    3.  LLaSa：用于Thai-SUP数据生成中的泰语文本转语音合成。
    4.  DeepSeek-v3, Gemini-2.5-flash：用于Thai-SUP中的数据增强、筛选和翻译（商业模型）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)
