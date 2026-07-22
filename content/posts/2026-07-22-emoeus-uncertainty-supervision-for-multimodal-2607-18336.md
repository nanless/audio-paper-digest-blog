---
title: "EmoEUS: Uncertainty Supervision for Multimodal Emotion Recognition in Conversation"
date: 2026-07-22
draft: false
tags: [Transformer, 语音情感识别, 多模态模型, 音频理解, 模型评估]
categories: [论文速递]
description: "语音情感识别 | 5.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.18336"
---

# 📄 EmoEUS: Uncertainty Supervision for Multimodal Emotion Recognition in Conversation

标签：#Transformer #语音情感识别 #多模态模型 #音频理解 #模型评估

**5.6/10** | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.3/1.5 | 清晰 0.8/1 | 影响 0.4/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 0/1.5

📝 **5.6/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #语音情感识别 | #Transformer | #多模态模型 #音频理解 | [arxiv](https://arxiv.org/abs/2607.18336)


### 👥 作者与机构

- 第一作者：Zilong Huang（香港理工大学电子工程系）
- 通讯作者：未说明
- 作者列表：Zilong Huang（香港理工大学电子工程系）、Kong Aik Lee（香港理工大学电子工程系）、Junjie Li（香港理工大学电子工程系）、Zhe Li（香港大学语音、语言与认知实验室）、Man-Wai Mak（香港理工大学电子工程系）

### 💡 毒舌点评

论文提出的显式不确定性监督（ESL）框架是一个不错的idea，通过将方差与分布距离对齐来监督不确定性，这在概念上比单纯依赖分类损失要清晰和直接。然而，核心实验仅在两个标准、相对“干净”的对话数据集（IEMOCAP和MELD）上进行，且未与音频/语音领域的不确定性建模工作进行深入对比，使其方法贡献的普适性和对领域的直接影响力大打折扣。

### 📌 核心摘要

本文旨在解决多模态对话情感识别（MERC）中现有融合方法忽略模态特异性不确定性的问题，这种不确定性源于冲突线索、变化噪声和缺失信号。为此，论文提出了EmoEUS框架，其核心是包含三个创新组件：1）上下文级分布估计模块（ContextDEM）将多模态特征转换为带方差的高斯分布表示；2）不确定性感知多模态融合（UAMF）机制根据估计的方差动态加权各模态；3）显式监督损失（ESL）通过最小化预测方差与基于2-Wasserstein距离的分布偏差之间的差距，来显式指导不确定性估计。与先前仅依赖分类损失隐式建模不确定性的方法相比，EmoEUS能更直接、更准确地学习模态可靠性。实验表明，在IEMOCAP和MELD数据集上，EmoEUS的准确率和加权F1分数均超越了现有最优方法，特别是在模糊情感对上的误分类率显著降低。该工作为在对话上下文中进行更鲁棒的多模态融合提供了新思路。然而，论文未提供代码和模型，可复现性受限，且其核心方法针对的是对话情感识别这一NLP/多模态任务，对语音/音频领域的直接实用价值有限。

### 🔗 开源详情

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及
- 数据集：
    - **IEMOCAP**：一个用于对话情感识别的常用数据集。通常需通过官方网站申请获取（论文中引用为 `[busso2008iemocap]`）。
    - **MELD**：一个来源于电视剧《老友记》的多模态、多说话人对话数据集。论文中遵循了其预定义的训练/验证/测试集划分（论文中引用为 `[poria2018meld]`），通常可在其官方网站获取。
- Demo：论文中未提及
- 复现材料：论文中未提及训练好的检查点、配置文件或附录链接。但论文在“Implementation Details”部分提供了详细的训练配置，包括：使用的特征提取器（RoBERTa, Wav2vec2.0, CLIP）、训练硬件（NVIDIA RTX 4090）、训练轮次（IEMOCAP: 40 epochs, MELD: 50 epochs）、批大小（15, 100）、优化器（Adam）、学习率（2e-4）、损失权重（λ=2e-5）、起始轮次（ep_start=10）、Dropout率（0.2）以及最终模型权重平均策略（最后10个检查点的平均）。
- 论文中引用的开源项目：
    - **RoBERTa**（用于文本特征提取）：[https://github.com/pytorch/fairseq](https://github.com/pytorch/fairseq) （论文中引用为 `[liu2019roberta]`）
    - **Wav2vec2.0**（用于音频特征提取）：[https://github.com/pytorch/fairseq](https://github.com/pytorch/fairseq) （论文中引用为 `[baevski2020wav2vec]`）
    - **CLIP**（用于视觉特征提取）：[https://github.com/openai/CLIP](https://github.com/openai/CLIP) （论文中引用为 `[radford2021learning]`）

### 🏗️ 方法概述和架构

本文提出的EmoEUS是一个用于多模态对话情感识别（MERC）的显式不确定性监督框架。其整体流程是：对于一个对话中的每个话语，首先使用预训练编码器提取文本、音频和视觉特征；然后通过ContextDEM模块将每种模态的特征序列转换为分布表示（均值和方差）；接着，UAMF模块基于方差信息动态加权各模态特征并进行融合；最后，使用融合后的特征进行情感分类，并用ESL损失显式监督不确定性估计。

下图展示了EmoEUS的整体框架，涵盖多模态特征提取、分布估计、融合和分类的全流程。

![Figure 1: The overall architecture of the EmoEUS framework. EmoEUS enhances MERC performance through explicit uncertainty supervision and uncertainty-aware multimodal fusion. Solid and dashed rectangles denote trainable and frozen models, r](https://arxiv.org/html/2607.18336v1/overall.png)

图中清晰呈现了文本、音频、视觉模态的处理流水线，以及ContextDEM、UAMF和显式监督损失如何协同工作以实现不确定性监督的多模态情感识别。


**主要组件详解：**
1.  **上下文级分布估计模块（ContextDEM）**：
    *   **功能**：将模态特定的点式特征序列转换为分布表示，以建模语义不确定性。
    *   **内部结构**：输入模态特定特征序列 \(R^\delta\)，首先通过一个Transformer编码器增强全局上下文交互，并通过残差连接保留原始信息。随后，特征被送入两个并行的MLP分支，分别预测高斯分布的均值 \(\mu^\delta\) 和对数方差 \(\log\sigma^\delta\)。
    *   **输入输出**：输入为经过Bi-GRU处理的模态特征序列 \(R^\delta \in \mathbb{R}^{D_r \times k}\)，输出为分布参数 \(\mu^\delta, \sigma^\delta \in \mathbb{R}^{D_g \times k}\)。

下图详细描绘了上下文级分布估计模块（ContextDEM）的内部架构。

![Figure 2: Framework of ContextDEM, where LN and MLP denote LayerNorm and multi-layer perceptron, respectively.](https://arxiv.org/html/2607.18336v1/contextpde.png)

图中显示了Transformer编码器如何捕获上下文交互，并通过残差连接和并行MLP分支预测高斯分布的均值和对数方差，从而建模语义不确定性。


2.  **不确定性感知多模态融合（UAMF）**：
    *   **功能**：根据各模态的估计不确定性（方差）动态调整其在融合中的贡献权重。
    *   **实现**：首先，根据方差计算原始置信度 \(C_{raw}^\delta = 1 - \sigma^\delta / (\sum \sigma^{a,t,v} + \epsilon)\)，方差越小置信度越高。然后沿模态维度进行Softmax归一化得到最终权重 \(C^\delta\)。接着，用权重对均值特征进行元素乘以得到加权特征 \(R_u^\delta = C^\delta \odot \mu^\delta\)。为建模跨话语依赖，使用多头注意力机制，其中Query和Value由所有模态的原始均值特征拼接投影得到，Key由加权特征 \(R_u^\delta\) 拼接得到。注意力输出经过一个Transformer编码器和残差连接，得到最终的融合特征 \(F\)。
    *   **关键设计**：该设计让低不确定性的模态在注意力计算中占据主导，从而抑制高噪声或信息缺失模态的干扰。

3.  **显式监督损失（ESL）**：
    *   **功能**：为ContextDEM输出的方差提供直接的监督信号，使其能准确反映特征表示与情感类别聚类中心的偏离程度。
    *   **实现**：维护全局分布聚类中心（每个情感类别和模态的均值和方差向量，每个epoch更新一次，不参与梯度反传）。对于每个话语 \(i\) 和模态 \(\delta\)，计算其分布表示 \((\mu_i^\delta, \sigma_i^\delta)\) 与对应情感类别 \(y_i\) 的聚类中心 \((\mu_{y_i}^\delta, \sigma_{y_i}^\delta)\) 之间的2-Wasserstein距离 \(D_{2W}(i, \delta)\)。ESL损失函数为 \(\mathcal{L}_{ESL}^\delta = \frac{1}{k} \sum_i \| \alpha \sqrt{\sigma_i^\delta} - \sqrt{D_{2W}(i, \delta)} \|_2^2\)，其中 \(\alpha\) 是一个可学习的缩放因子。该损失旨在让预测的标准差 \(\sqrt{\sigma_i^\delta}\) 对齐分布距离。

下图阐述了显式监督损失（ESL）的核心设计原理。

![Figure 3: Framework of explicitly supervised loss ℒE​S​Lδ\\mathcal{L}_{ESL}^{\\delta}. ESL aims to align the predicted variance 𝝈iδ\\bm{\\sigma}_{i}^{\\delta} of each utterance with the 2-Wasserstein distance D2​W​(i,δ)D_{2W}(i,\\delta) between](https://arxiv.org/html/2607.18336v1/EmoEUS.png)

图中展示了如何通过2-Wasserstein距离计算话语分布与情感类别聚类中心的偏离度，以对齐预测方差，为不确定性估计提供直接监督信号。


**组件间的数据流**：原始特征序列 → ContextDEM → 分布参数 \((\mu, \sigma)\) → UAMF（利用 \(\sigma\) 计算权重，利用 \(\mu\) 计算加权特征和注意力）→ 融合特征 \(F\) → 分类器。同时，所有模态的分布参数 \((\mu, \sigma)\) 会并行地用于计算ESL损失。

### 💡 核心创新点

1.  **显式不确定性监督损失（ESL）**：现有MERC方法主要依赖分类损失隐式地学习不确定性。本文创新性地设计了ESL，将预测的方差与基于2-Wasserstein距离的“分布偏离度”直接对齐进行监督。这为不确定性估计提供了更直接、更有物理意义的训练信号，理论上能学习到更准确、更校准的不确定性表示。
2.  **基于方差的动态模态融合（UAMF）**：提出了一个完整的机制，将ContextDEM估计的方差转化为跨模态的注意力权重。通过相对方差比和Softmax操作，实现了模态可靠性的公平竞争和动态抑制，避免了固定权重或简单注意力无法处理模态质量波动的问题。
3.  **上下文感知的分布建模（ContextDEM）**：不同于在原始特征上简单添加噪声或使用变分自编码器，ContextDEM利用Transformer和残差连接在对话上下文中建模每个话语的分布，使不确定性估计本身是上下文感知的。

### 📊 实验结果

论文在IEMOCAP和MELD两个标准数据集上进行了评估。
**主要对比实验（Table 1）**：
| 模型 | 年份 | IEMOCAP Happy | IEMOCAP Sad | IEMOCAP Neutral | IEMOCAP Angry | IEMOCAP Excited | IEMOCAP Frustrated | IEMOCAP Acc | IEMOCAP w-F1 | MELD Acc | MELD w-F1 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| DialogRNN | 2019 | 32.20 | 80.26 | 57.89 | 62.82 | 73.87 | 59.76 | 63.52 | 62.89 | 60.31 | 57.66 |
| DialogGCN | 2019 | 42.75 | 84.54 | 63.54 | 64.19 | 63.08 | 66.99 | 65.25 | 64.18 | - | 58.10 |
| MMGCN | 2021 | 45.14 | 77.16 | 64.36 | 68.82 | 74.71 | 61.40 | 66.36 | 66.26 | 60.42 | 58.31 |
| M2FNet | 2022 | - | - | - | - | - | - | 69.69 | 69.86 | 67.85 | 66.71 |
| CFN-ESA | 2023 | 53.67 | 80.60 | 71.65 | 70.32 | 74.82 | 68.06 | 71.04 | 70.78 | 67.85 | 66.70 |
| AdaIGN | 2024 | 53.04 | 81.47 | 71.26 | 65.87 | 76.34 | 67.79 | - | 70.74 | - | 66.79 |
| MDAG | 2024 | 45.26 | 81.40 | 69.53 | 70.33 | 71.61 | 66.94 | 69.11 | 69.08 | 64.41 | 64.00 |
| DER-GCN | 2025 | 58.80 | 79.80 | 61.50 | 72.10 | 73.30 | 67.80 | 69.70 | 69.40 | 66.80 | 66.10 |
| FEMI | 2025 | 60.60 | 85.55 | 70.92 | 70.98 | 75.13 | 69.00 | 71.97 | 73.53 | 64.88 | 66.41 |
| EmoEUS | Ours | 77.42 | 72.87 | 72.04 | 71.20 | 78.66 | 73.58 | **74.33** | **74.36** | **68.32** | **67.53** |

EmoEUS在两个数据集的总体准确率和加权F1分数上取得了最优结果。值得注意的是，它在IEMOCAP的6个情感类别中，有4个的F1分数超过70%，表现均衡。

**消融实验（Table 2, Table 4）**：
**不同融合方法比较（Table 2）**：
| 融合方法 | IEMOCAP Acc | IEMOCAP w-F1 | MELD Acc | MELD w-F1 |
| :--- | :--- | :--- | :--- | :--- |
| Concat | 71.90 | 72.20 | 66.82 | 65.57 |
| Attention | 72.39 | 72.33 | 66.64 | 65.75 |
| Transformer | 72.53 | 72.57 | 67.64 | 66.58 |
| EmoEUS (Full) | **74.33** | **74.36** | **68.32** | **67.53** |
| w/o \(\mathcal{L}_{ESL}\) | 73.32 | 73.33 | 67.78 | 66.73 |
| w/o UAMF | 72.63 | 72.69 | 66.53 | 66.01 |

移除ESL损失（w/o \(\mathcal{L}_{ESL}\)）导致IEMOCAP w-F1从74.36下降到73.33，MELD w-F1从67.53下降到66.73。移除UAMF模块导致IEMOCAP w-F1从74.36下降到72.69，MELD w-F1从67.53下降到66.01。消融实验验证了ESL损失和UAMF模块的有效性。

**模糊情感对误分类率分析（Table 3）**：
| 方法 | Hap-Neu | Hap-Exc | Neu-Exi | Sad-Fru | Exc-Hap |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Transformer | 7.68 | 16.74 | 5.41 | 24.62 | 7.54 |
| w/o \(\mathcal{L}_{ESL}\) | 7.57 | 19.05 | 5.23 | 16.92 | 6.56 |
| EmoEUS (Full) | **6.51** | **14.88** | **4.96** | **16.92** | **6.89** |

**分布建模与残差连接消融（Table 4）**：
| 表示形式 | 残差连接 | IEMOCAP Acc | IEMOCAP w-F1 | MELD Acc | MELD w-F1 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 点表示 (\(\mu^\delta\)) + MSE距离 | × | 72.86 | 72.42 | 67.53 | 67.45 |
| 点表示 (\(\mu^\delta\)) + MSE距离 | ✓ | 73.28 | 72.47 | 66.98 | 67.26 |
| 分布表示 (\(\mu^\delta, \sigma^\delta\)) + 2-Wasserstein距离 | × | 73.98 | 73.89 | 68.08 | 67.31 |
| 分布表示 (\(\mu^\delta, \sigma^\delta\)) + 2-Wasserstein距离 | ✓ | **74.33** | **74.36** | **68.32** | **67.53** |

使用点表示（仅均值）和MSE距离替代分布表示和2-Wasserstein距离，导致性能下降。消融实验验证了分布建模和残差连接的优势。

### 🔬 细节详述

- **训练数据**：IEMOCAP（5个会话，采用Leave-One-Out划分）和MELD（使用官方划分）。未提及数据增强。
- **损失函数**：最终损失为 \(\mathcal{L} = \mathcal{L}_{CE} + \kappa (\mathcal{L}_{ESL}^t + \mathcal{L}_{ESL}^a + \mathcal{L}_{ESL}^v)\)。\(\mathcal{L}_{CE}\) 为标准交叉熵分类损失。\(\kappa\) 在训练前期为0，在第 \(ep_{start}\) 个epoch后设为固定常数 \(\lambda\)，以稳定训练。
- **训练策略**：使用Adam优化器，学习率 \(2\times10^{-4}\)。在IEMOCAP和MELD上分别训练40和50个epoch，批大小分别为15和100。使用Dropout（0.2）进行正则化。最终模型是最后10个检查点的权重平均。
- **关键超参数**：损失权重 \(\lambda=2\times10^{-5}\)，ESL损失开始epoch \(ep_{start}=10\)。论文未说明ContextDEM中Transformer和MLP的具体维度、层数、头数等。
- **训练硬件**：单块NVIDIA RTX 4090 GPU。
- **特征提取**：文本用RoBERTa，音频用Wav2Vec 2.0，视觉用CLIP。特征通过平均池化最终层输出获得。

### ⚖️ 评分理由

*   创新性 (1.5/2)：论文提出了显式不确定性监督损失（ESL）、基于方差的动态模态融合（UAMF）和上下文感知的分布建模（ContextDEM），三个组件相互配合，针对多模态对话情感识别中模态不确定性这一核心问题提出了完整、新颖的解决方案。

*   技术严谨性 (1.3/1.5)：方法设计逻辑自洽，各组件功能明确且有理论支撑（如2-Wasserstein距离）。但依据[A_LIMITS]，ESL依赖的聚类中心更新策略（逐epoch平均）可能滞后，UAMF关于‘高方差模态信息量少’的假设在特定情感类别（如愤怒）中可能存在反直觉情况，这些是技术设计上的潜在漏洞。

*   实验充分性 (1.3/1.5)：依据[A_RESULTS]，在IEMOCAP和MELD两个标准数据集上与多个代表性基线进行了全面对比，并提供了详细的消融实验（Table 2, 4）和模糊情感对误分类分析（Table 3），充分验证了各组件的有效性。但依据[A_LIMITS]，数据集相对标准，在更嘈杂的真实数据上的泛化性未验证，且未探讨对基础预训练特征的依赖问题。

*   清晰度 (0.8/1)：论文结构完整，方法部分（[A_METHOD]）对各组件的功能、实现和数据流有清晰描述，并配有图示和公式。但依据[A_OPEN]和[A_METHOD]，某些技术细节（如ContextDEM中Transformer和MLP的具体维度、层数）未充分说明，降低了可读性。

*   影响力 (0.4/1.5)：依据[A_SUMMARY]，核心贡献是解决多模态对话情感识别（MERC）中的融合问题，这是一个偏重于NLP/多模态领域的任务。音频/语音虽是输入模态之一，但论文的核心创新（不确定性监督与融合）和评估重点均不针对语音/音频信号处理本身。依据[A_LIMITS]，其对语音/音频领域的直接实用价值有限，影响力受领域相关性约束。

*   开源 (0.0/1.5)：依据[A_OPEN]，论文未提供代码、模型权重或训练好的检查点，属于‘完全关闭且无承诺’。

*   可复现性 (0.3/0.5)：依据[A_OPEN]，论文提供了详细的训练配置（优化器、学习率、批大小、硬件、训练轮次等）。但依据[A_METHOD]和[A_OPEN]，关键组件（如ContextDEM中Transformer的层数/头数、MLP维度）的配置缺失，属于‘大部分充分但有少量缺失’。

*   工程/实践价值 (0.0/1.5)：依据[A_SUMMARY]和[A_LIMITS]，论文的贡献集中在算法层面，未提供任何关于实际部署成本、延迟、吞吐量或工程实施挑战的评估，也未讨论模型在真实场景中的部署约束或压力测试。

### 🚨 局限与问题

1.  **论文明确承认的局限**：作者在结论中提到，未来工作将“增强不确定性估计模块以更好地捕捉实时环境中的跨说话人情感动态”，这暗示了当前模型在实时性和复杂说话人交互方面可能存在的不足。
2.  **审稿人发现的潜在问题**：
    *   **聚类中心更新策略**：ESL依赖的全局聚类中心采用简单的逐epoch平均更新且不参与反传。这可能导致聚类中心滞后于正在快速学习的模型参数，从而产生不稳定或次优的监督信号。论文未对此策略进行消融或对比更先进的在线聚类方法。
    *   **对基础特征的依赖**：模型性能严重依赖于预训练编码器（RoBERTa, Wav2Vec2, CLIP）提取的特征质量。论文未探讨这些特征本身的质量或噪声对EmoEUS性能的影响，也未进行端到端微调。
    *   **数据集局限**：仅在IEMOCAP和MELD上测试，这两个数据集相对标准且经过处理。在更嘈杂、非表演性质的真实对话数据集上，其不确定性建模的优势是否依然显著存疑。
    *   **模态重要性假设**：UAMF机制假设不确定性高的模态信息量少，应抑制。但在某些情感类别中（如“愤怒”可能更依赖音调），高方差（不确定性）的模态可能恰好包含关键判别信息。这种反直觉的情况是否可能发生，论文未讨论。

---

[← 返回 2026-07-22 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-22/)
