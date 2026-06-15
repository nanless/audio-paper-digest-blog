---
title: "Explainable and Trustworthy Speech Emotion Recognition Using Confidence Score and Reinforcement Learning Rectified Speech Emotion Descriptors"
date: 2026-06-15
draft: false
tags: [语音情感识别, 强化学习]
categories: [论文速递]
description: "语音情感识别 | 7/10"
hiddenInHomeList: true
---

# 📄 Explainable and Trustworthy Speech Emotion Recognition Using Confidence Score and Reinforcement Learning Rectified Speech Emotion Descriptors

#语音情感识别 #强化学习

**7/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 1/1 | 影响 0.8/1.5 | 开源 0/1.5 | 复现 0.5/0.5 | 工程 0.8/1.5

✅ **7/10** | 前50% | #语音情感识别 | #强化学习 | [arxiv](https://arxiv.org/abs/2606.14086)


### 👥 作者与机构

1 The Chinese University of Hong Kong, Hong Kong SAR, China
2 Institute of Software, Chinese Academy of Sciences, China
3 National Research Council Canada, Canada
4 Tsinghua University, China
作者：Youjun Chen, Xurong Li, Mengzhe Geng, Zengrui Jin, Jiajun Deng, Guinan Li, Shujie Hu, Huimeng Wang, Haoning Xu, Chengxi Deng, Bowen Zhang, Xunying Liu

### 💡 毒舌点评

一篇典型的“组合创新”论文，将已有的置信度数据筛选和RL控制思想应用到一个新任务（基于自动标注SED的SER）上。优点是工作量扎实，实验充分；缺点是创新点相对有限，更多是工程上的集成与调优，而非概念上的突破。作者坦诚地指出了部分局限，但有些关键问题（如SED标签质量的上限、RL奖励函数的简单性）未被深入探讨。性能提升是实打实的，但离“显著改变领域”还有距离。

### 📌 核心摘要

本文针对基于语音情绪描述符（SED）的可解释性语音情绪识别（SER）系统因依赖自动标注低质量SED标签而导致的性能与可信度不足问题，提出了一种后训练方法。该方法包含两个核心组件：1）一个置信度估计模块（CEM），用于量化自动标注SED标签的可靠性，并据此筛选出高质量子集用于监督微调；2）一个基于强化学习的SED控制器，在SER系统训练过程中在线生成SED标签的修正策略，实现对噪声标签的动态校正。在IEMOCAP和MELD数据集上的实验表明，集成这两个组件能显著提升SER系统的准确性和可解释性，其最优系统相比基线分别取得2.9%和3.3%的绝对准确率提升，并优于多个开源对比模型。工作系统地验证了SED标签质量对可解释SER系统的关键作用。

### 🔗 开源详情

- 代码：未提供
- 模型权重：未提供
- 数据集：
  - IEMOCAP：获取地址：https://sail.usc.edu/iemocap/
  - MELD：获取地址：https://affective-meld.github.io/
  - SpeechCraft (子集 GigaSpeech-m)：论文中提及使用该工具及项目提供的大规模子集进行预训练。项目地址：https://speechcraft.org/ （具体子集获取方式未说明）
- Demo：未提供
- 复现材料：未提供。论文在“5.1 Experimental setup”中详细描述了训练超参数。
- 论文中引用的开源项目：
  - BLSP-Emo: 引用为 [wang2025opens2s]。
  - VIB-Emo: 引用为 [chen2025towards]。
  - OSUM-EChat: 引用为 [geng2025osum]。
  - Kimi-Audio: 引用为 [ding2025kimi]。
  - Qwen2-Audio: 引用为 [chu2024qwen2]。
  - Audio-Flamingo-3: 引用为 [goel2025audio]。
  - Step-Audio-R1: 引用为 [tian2025step]。
  - SpeechCraft: 引用为 [jin2024speechcraft]。项目地址：https://speechcraft.org/
（注：以上引用项目均未在论文中提供具体的代码或模型下载链接）

### 🏗️ 方法概述和架构

本文提出的方法是一个用于后训练可解释SER-SLM系统的流水线，核心是处理自动标注的噪声SED标签，旨在同时提升SER性能与输出的可信度。整个流水线如图1(a)所示，主要包含两个可选但协同工作的核心模块：置信度分数数据选择（图1(b)）和基于强化学习（RL）的在线SED校正（图1(c)）。其输入是基于SpeechCraft预训练好的SER-SLM系统，输出是经过后训练的、更准确和可解释的SER系统。

1.  置信度估计模块（CEM）与数据选择：
    *   功能与结构：CEM是一个轻量级的二分类器，用于评估给定语音段的所有自动标注SED标签（年龄、性别、速度、音高、音量）的综合可靠性。其骨干网络采用自[deng2023confidence]的MLP，并进行了扩展。具体结构包含一个3层残差前馈网络，每层使用批量归一化（Batch Normalization）、ReLU激活和Dropout。第一层和第二层的输出之间设有跳跃连接（Skip Connection）。网络输出层包含Sigmoid激活函数和Mean Pooling层。对于输入语音，首先使用预训练的SER-SLM提取最后一个LLM解码层的隐藏状态（last hidden states）作为特征，输入CEM。CEM为每个SED标签预测一个置信度分数（0到1之间），Mean Pooling层将这些分数聚合为一个句子级的综合置信度分数。
    *   训练过程：CEM的训练数据来自SpeechCraft预训练集。使用预训练的SER-SLM在该数据集上进行推理，对比模型预测的SED标签与SpeechCraft提供的（自动标注的）SED标签，生成二值标签（正确为1，错误为0）。训练时，使用这些隐藏状态和二值标签，通过交叉熵损失函数（公式1）训练CEM的主体网络（不含Mean Pooling层）。
    *   数据选择：在目标数据集（IEMOCAP/MELD）上，使用训练好的CEM计算每个样本的综合置信度分数。通过设定一个阈值\(s_t\)，选择分数高于阈值的数据子集用于后续的监督微调（SFT）。这旨在过滤掉噪声标签过多的样本，提升训练数据质量。

2.  基于强化学习的SED控制器与在线校正：
    *   功能与结构：SED控制器是一个基于RNN的模型，用于在SER-SLM训练过程中，为每个自动标注的SED标签生成“保留”或“修改”的决策，从而在线修正噪声标签。其结构（图1(c)绿色框）包含一个单层LSTM模块、一个拼接层（Concat）、一个线性层（Linear）和一个Softmax解码层。输入是语音的梅尔频谱图，首先通过LSTM得到压缩表示，然后与原始SED标签的嵌入向量拼接，最终通过线性层和Softmax层输出每个SED标签被修改的概率。
    *   交替训练流程：整个RL校正过程采用交替更新的策略：
        *   SER-SLM SFT阶段：冻结SED控制器参数。对于一批数据，SED控制器生成\(M\)个不同的SED修正策略\(\prod_i\)。对于每个样本，将原始转录、情感标签与由策略生成的修正后SED标签组合成监督信号，用于更新SER-SLM的参数\(\bm{\theta}^{SLM}\)。损失函数为所有策略下LLM损失的平均（公式2）。
        *   奖励计算：在SER-SLM更新后，计算每个修正策略的奖励。奖励基于情感识别任务的性能变化：掩码掉所有非情感标签的token，计算情感标签的交叉熵损失\(\mathcal{L}^{emo}\)（公式4），收集\(M\)个策略的损失并进行组归一化（group normalization），得到策略奖励\(R\)（公式3）。奖励信号指导控制器学习哪种修正策略能带来更好的SER性能。
        *   SED控制器更新阶段：使SED控制器参数可训练。以最大化奖励为目标（等价于最小化负奖励），使用策略梯度方法更新控制器参数\(\bm{\theta}^{C}\)（公式5）。梯度的大小与归一化后的损失成正比，并基于新策略模型生成该策略的概率进行缩放。
    *   关键实现细节：1）奖励归一化：对\(M\)个策略的奖励进行均值和方差归一化，以稳定训练。2）策略样本数\(M\)：通过消融实验（表3）确定，\(M=6\)时效果最佳。3）策略空间：对于每个SED标签，二元选择（保留或修改）。

两个模块在流水线中顺序工作：先进行置信度数据选择，然后在筛选出的高质量数据上进行RL校正的后训练。这种组合旨在既通过筛选提升数据“纯度”，又通过在线校正适应并修正剩余数据中的噪声，从而协同提升SER系统的性能和SED预测的可信度。

![图1](https://arxiv.org/html/2606.14086v1/rl.png)

![图2](data:image/svg+xml;base64,PHN2ZyBpZD0iUzQuVDEuNy4xLjEuMS5tMS4xLjEuMS5waWMxIiBjbGFzcz0ibHR4X3BpY3R1cmUiIGhlaWdodD0iMTY1NC45MSIgb3ZlcmZsb3c9InZpc2libGUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyOTguNDcgMTY1NC45MSIgd2lkdGg9IjEyOTguNDciPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwMDAwMDstLWx0eC1maWxsLWNvbG9yOiMwMDAwMDA7IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjZwdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxNjU0LjkxKSBtYXRyaXgoMSAwIDAgLTEgMCAwKSB0cmFuc2xhdGUoLTIyMC4yOSwwKSB0cmFuc2xhdGUoMCwyMDcxLjEzKSI+PHBhdGggZD0iTSAxNTE3LjY1IC00OTkuMjQgQyAxNTE3LjY1IC01MDguMSAxNTA5LjUzIC01MjAuMjcgMTQ5My4yOSAtNTM1Ljc3IEMgMTQ4MC4wMSAtNTQ4LjMyIDE0NTQuMTggLTU3OS4zMSAxNDE1LjgxIC02MjguNzYgTCAxMDY5LjMzIC0xMDgxLjUgTCAxMTM5LjA3IC0xMjIyLjA5IEwgMTMxNi4xOCAtMTYwMC42NyBDIDEzMDkuNTQgLTE2MTYuMTcgMTI5OS4yMSAtMTYyNi44NyAxMjg1LjE5IC0xNjMyLjc3IEwgMTI4NS4xOSAtMTY1MC40OCBDIDEyODQuNDUgLTE2NTEuMjIgMTI3NS41OSAtMTY1Ni43NiAxMjU4LjYyIC0xNjY3LjA5IEMgMTI0Ni4wNyAtMTY3NS4yMSAxMjM5LjggLTE2ODEuODUgMTIzOS44IC0xNjg3LjAxIEMgMTIzOS44IC0xNjkzLjY2IDEyNDMuNDkgLTE3MDQuMzYgMTI1MC44NyAtMTcxOS4xMiBDIDEyNDguNjYgLTE3MzIuNCAxMjM5LjA2IC0xNzQ1LjMxIDEyMjIuMDkgLTE3NTcuODYgQyAxMjA1LjEyIC0xNzY5LjY3IDExODkuNjIgLTE3NzUuNTcgMTE3NS42IC0xNzc1LjU3IEMgMTE2MC44NCAtMTc3NS41NyAxMTMyLjA2IC0xNzQyLjM2IDEwODkuMjUgLTE2NzUuOTQgTCA4NzYuNzIgLTEzNDcuMTggTCA0MjcuMjkgLTIwNDMuNDYgQyA0MDMuNjcgLTIwNjEuMTcgMzY0LjU2IC0yMDcwLjAyIDMwOS45NSAtMjA3MC4wMiBDIDI5Ny40IC0yMDcwLjAyIDI4MS41NCAtMjA1NC44OSAyNjIuMzUgLTIwMjQuNjQgQyAyMzkuNDcgLTE5ODguNDggMjI4LjAzIC0xOTY1LjIzIDIyOC4wMyAtMTk1NC45IEMgMjI4LjAzIC0xOTQ2LjA0IDIzMC4yNSAtMTkzMy44NyAyMzQuNjggLTE5MTguMzcgQyAyNDEuMzIgLTE4OTUuNDkgMjQwLjU4IC0xODgwLjczIDIzMi40NiAtMTg3NC4wOSBDIDIyNS4wOCAtMTg2Ni43MSAyMjEuMzkgLTE4NjEuMTggMjIxLjM5IC0xODU3LjQ5IEMgMjIxLjM5IC0xODQ0Ljk0IDIzOS40NyAtMTgwNy42NyAyNzUuNjMgLTE3NDUuNjggTCAzMjkuODggLTE2NTIuNyBDIDM4OC4xOCAtMTU1My4wNyA1MTcuNjkgLTEzODEuODYgNzE4LjQyIC0xMTM5LjA3IEwgNzQ0Ljk5IC0xMTA2Ljk2IEwgNTc3Ljg0IC02NDQuMjUgQyA1NjAuODYgLTU5Ny4wMiA1NTIuMzggLTU3MS4xOSA1NTIuMzggLTU2Ni43NyBDIDU1Mi4zOCAtNTYwLjEyIDU2Mi4zNCAtNTQ0LjI2IDU4Mi4yNiAtNTE5LjE3IEwgNTk3Ljc2IC01MDUuODggQyA2MDIuOTMgLTUwMS40NSA2MDguMDkgLTQ5OS4yNCA2MTMuMjYgLTQ5OS4yNCBDIDYyMS4zOCAtNDk5LjI0IDYzMy41NSAtNTA1Ljg4IDY0OS43OSAtNTE5LjE3IEMgNjU4LjY0IC01MTEuNzkgNjcwLjgyIC01MDguMSA2ODYuMzIgLTUwOC4xIEMgNjkwLjc1IC01MDUuODggNjk3LjM5IC01MDAuNzIgNzA2LjI0IC00OTIuNiBDIDcxMy42MiAtNDgwLjA1IDcyMi4xMSAtNDczLjc4IDczMS43IC00NzMuNzggQyA3NDUuNzIgLTQ3My43OCA3NTkuMzggLTQ4Ny40MyA3NzIuNjYgLTUxNC43NCBMIDk0NC4yNCAtODU1LjY4IEwgMTAwMS44IC03ODQuODQgTCAxMTEyLjUgLTY1Ny41NCBDIDEyNTAuNSAtNDk4Ljg3IDEzMjIuODIgLTQxOS41NCAxMzI5LjQ2IC00MTkuNTQgQyAxMzQ3LjkxIC00MTkuNTQgMTM3NC40OCAtNDMzLjkzIDE0MDkuMTcgLTQ2Mi43MSBMIDE0MzQuNjMgLTQ0MC41NyBDIDE0NDQuOTYgLTQyNS4wNyAxNDUzLjA4IC00MTcuMzMgMTQ1OC45OCAtNDE3LjMzIEMgMTQ2Mi42NyAtNDE3LjMzIDE0NjcuMSAtNDIzLjYgMTQ3Mi4yNiAtNDM2LjE0IEMgMTQ3NS4yMSAtNDQyLjc5IDE0ODQuMDcgLTQ1NC4yMiAxNDk4LjgzIC00NzAuNDYgQyAxNTExLjM4IC00ODMuNzQgMTUxNy42NSAtNDkzLjM0IDE1MTcuNjUgLTQ5OS4yNCBaIj48L3BhdGg+PC9nPjwvc3ZnPg==)


### 💡 核心创新点

1.  首次应用于自动标注SED标签的置信度数据选择：将基于置信度分数的数据筛选方法应用于SER领域，专门针对由自动工具生成的、质量参差不齐的SED标签进行数据选择，旨在为后续微调提供更可靠的数据子集。
2.  首次用于可解释SER的在线RL SED校正控制器：提出了一个基于强化学习的SED控制器，在SER-SLM的监督微调过程中，以在线、交替更新的方式动态生成SED标签的修正策略。这改变了传统离线、固定阈值的标签生成方式，使标签能适应模型训练并动态优化。
3.  系统性研究SED标签质量的影响：通过对比实验和t-SNE可视化，系统性地探究了更高质量（经过选择和校正）的SED标签对SER系统最终性能和输出可信度的积极影响，强调了标签质量在可解释SER中的关键作用。

### 📊 实验结果

论文在IEMOCAP和MELD两个标准数据集上进行了评估。

与基线系统性能对比（表1）：
论文定义了多个系统进行消融研究，核心对比是系统4（基线，无数据选择，无SED校正）与系统10（最优系统，90%数据选择+SED校正）。
| Sys | SED | Domain SFT | Confidence Score Data Selection | RL-based SED Rectification | IEMOCAP% | MELD% | Avg% |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4 | ✓ | ✓ | | | 78.08 | 60.81 | 66.38 |
| 5 | | ✓ | ✓ (90%) | | 78.40 | 62.04 | 67.31 |
| 6 | | ✓ | ✓ (80%) | | 78.89 | 61.92 | 67.39 |
| 7 | | ✓ | ✓ (70%) | | 77.68 | 60.81 | 66.25 |
| 8 | | ✓ | ✓ (60%) | | 75.02 | 58.13 | 63.58 |
| 9 | ✓ | ✓ | | ✓ | 79.85 | 62.96 | 68.41 |
| 10 | ✓ | ✓ | ✓ (90%) | ✓ | 80.98\\‡ | 64.11\\‡ | 69.55\\‡ |
| 11 | ✓ | ✓ | ✓ (80%) | ✓ | 80.66 | 63.77 | 69.45 |
| 12 | ✓ | ✓ | ✓ (70%) | ✓ | 78.24 | 61.46 | 66.87 |
| 13 | ✓ | ✓ | ✓ (60%) | ✓ | 75.66 | 58.51 | 64.04 |
   `` 表示在p=0.05水平上显著优于系统4；`‡`表示显著优于系统5。
*   主要结论：集成两个组件的最优系统（Sys. 10）相比无数据选择和SED校正的基线（Sys. 4），在IEMOCAP和MELD上分别取得了2.9%和3.3%的绝对准确率提升（相对提升3.7%和5.4%）。单独使用数据选择时，80%选择率最优（Sys. 6）；与SED校正结合时，90%选择率最优（Sys. 10）。

与开源SOTA系统对比（表2）：
| 模型 | IEMOCAP% | MELD% | Avg% |
| :--- | :---: | :---: | :---: |
| Kimi-Audio | 57.72 | 59.13 | 58.68 |
| Qwen2-Audio | 37.71 | 51.23 | 46.87 |
| Audio-Flamingo-3 | 69.06 | 56.71 | 60.69 |
| Step-Audio-R1 | 53.99 | 46.43 | 48.87 |
| OSUM-EChat | 41.49 | 53.38 | 49.55 |
| BLSP-Emo | 75.99 | 57.29 | 63.32 |
| VIB-Emo | 77.60 | 60.12 | 65.76 |
| Ours (Sys. 10) | 80.98 | 64.11 | 69.55 |
*   本文最优系统在所有对比的开源模型中取得了最佳性能。

SED校正策略样本数M消融实验（表3）：
| Sys | M | IEMOCAP | MELD | Avg |
| :--- | :---: | :---: | :---: | :---: |
| V1 | 2 | 79.37 | 62.69 | 68.07 |
| V2 | 4 | 79.94 | 63.04 | 68.49 |
| V3 | 6 | 80.98 | 64.11 | 69.55 |
| V4 | 8 | 81.06 | 63.69 | 69.29 |
| V5 | 10 | 80.26 | 63.57 | 68.95 |
*   策略样本数\(M=6\)（V3）在整体上取得最佳性能。

可视化分析：
通过t-SNE可视化（图2）对比基线（Sys. 4）和最优系统（Sys. 10）在IEMOCAP训练集上的最后隐藏状态。结果显示，使用更高质量SED标签训练的系统产生了更清晰、分离度更高的情绪簇，尤其是在区分“中立”和“快乐”情绪时。

![图3](https://arxiv.org/html/2606.14086v1/beforetsne.png)

![图4](https://arxiv.org/html/2606.14086v1/aftertsne.png)


### ⚖️ 评分理由

*   创新性 (1.5/2)：问题定义清晰，针对可解释SER中标签噪声这一痛点。将置信度数据选择和RL在线校正这两个已有思想应用于该特定场景并进行了有效集成，有组合创新价值。但未提出全新的模型架构或算法范式。
*   技术严谨性 (1.2/1.5)：方法设计合理，实验设置规范（如使用配对单尾t检验）。RL部分的公式推导和实现细节（如奖励归一化）描述清晰。但CEM训练依赖同一预训练模型的推理结果，其有效性上限存在循环论证嫌疑；RL奖励函数仅基于情感损失，设计相对简单。
*   实验充分性 (1.2/1.5)：在两个主流数据集上进行了广泛实验，包括多组消融研究（系统组合、数据选��比例、策略样本数）和与SOTA的对比。消融实验设计较为全面。然而，数据集规模和多样性仍然有限，缺乏对更多噪声类型或域外数据的测试。
*   清晰度 (1.3/1.5)：论文整体结构清晰，图表（特别是架构图和t-SNE图）有效辅助说明。方法部分对CEM和RL控制器的描述较为详细。但部分实现细节（如“Structured supervision label” \(Y_i\)的具体构造）可更明确。
*   影响力 (0.8/1.0)：对语音情感识别和可解释AI领域有直接贡献，实验结果表明该方法有效。其核心思想（数据选择+在线噪声校正）对类似依赖自动标注数据的任务有参考价值。但影响力受限于任务特异性。
*   开源 (0.0/1.5)：论文未提供代码、预训练模型权重或可直接使用的数据集下载链接。 复现依赖于获取SpeechCraft项目和引用模型（如VIB-Emo）的资源，且未指明具体版本和获取方式。这是一个显著的短板。
*   可复现性 (0.6/1.5)：论文在“5.1 Experimental setup”中详细列出了大部分训练超参数（如优化器、学习率、epoch/步数、网络尺寸），这为复现提供了基础。然而，关键组件如CEM的训练数据生成细节、SED控制器的具体初始化方式、以及如何获取并处理SpeechCraft预训练数据等信息不够完整，且无开源实现，大幅增加了复现难度。
*   工程/实践价值 (0.8/1.0)：所提流水线为在缺乏高质量标注数据时提升SER系统性能和可信度提供了一种可行的工程方案。组件模块化，易于集成到现有SER-SLM后训练流程中。但增加的计算复杂度（CEM推理、RL训练）和额外超参数需要在实际部署中权衡。

#

### 🚨 局限与问题

1.  标签质量依赖的循环论证：CEM的训练标签（正确/错误）来自于同一预训练SER-SLM在SpeechCraft数据上的预测与自动标注的对比。这意味着CEM的学习目标是让其置信度评分与当前模型的预测错误模式对齐，而非一个绝对的“真实可靠性”标准。这种设置的上限和泛化能力值得怀疑。
2.  SED标签定义与评估的模糊性：论文中SED包含年龄、性别、速度、音高、音量五个维度，但未充分讨论这些标签在情感表达中的可靠性和必要性。例如，对于情感识别，“速度”和“音量”的贡献度与“音高”可能不同。最终对SED质量的评估完全依赖于其对SER性能的贡献，缺乏对SED预测本身准确性更细粒度、独立的分析。
3.  RL奖励函数设计的简单性：奖励\(R\)仅基于情感标签的交叉熵损失。这是一种稀疏且间接的奖励信号。它假设SED修正的唯一目标是提升情感分类准确率，但可解释性还要求SED预测本身准确且符合常识。当前设计可能鼓励模型修改SED标签以服务于情感分类，而忽略修正后的标签是否真的符合语音的实际声学特征，这与“可信可解释”的初衷可能存在微妙矛盾。
4.  与更大规模模型对比的缺失：论文主要与特定于SER或中小规模的开源模型对比。结论中提到“与部分开源模型的性能差距较大，可能源于模型规模或预训练数据的差异”，但未尝试与使用更大数据和更大参数规模训练的通用音频-语言模型（如最新版本的Gemini Audio, GPT-4o Audio等）进行对比，这使得声称的“最佳性能”语境受限。
5.  可解释性评估的间接性：论文通过t-SNE可视化展示隐藏状态的聚类效果，这证明了模型内部表示变得更好。但这并非对输出解释的直接评估。例如，模型生成的文本解释是否更准确、更连贯？是否更少出现SED预测与语音特征矛盾的情况？缺乏对生成解释文本的定性或定量评估。
6.  “在线校正”的实际效能分析不足：虽然称为“on-the-fly”，但校正策略是在整个训练步骤中批量生成并应用于该批次数据的。论文未分析训练过程中SED标签被修改的比例、修改的模式（如哪些标签更常被修改），以及这些修改是否与人类的直觉判断一致。

#

---

[← 返回 2026-06-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-15/)
