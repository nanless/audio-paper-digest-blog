---
title: "LatentOmni: Rethinking Omni-Modal Understanding via Unified Audio-Visual Latent Reasoning"
date: 2026-05-22
draft: false
tags: [音频视觉理解]
categories: [论文速递]
description: "跨模态 | 9.0/10"
hiddenInHomeList: true
---

# 📄 LatentOmni: Rethinking Omni-Modal Understanding via Unified Audio-Visual Latent Reasoning

#音频视觉理解

🔥 **9.0/10** | 前10% | #跨模态 | #跨模态 | #音频视觉理解 | [arxiv](https://arxiv.org/abs/2605.22012v1)

学术质量 7.0/7 | 影响力 2.0/2 | 可复现性 0/2


### 👥 作者与机构

*   一作：Yifan Dai (上海交通大学，快手)
*   通讯作者（推断）：Wentao Zhang (北京大学)，Fangcheng Fu (上海交通大学)
*   核心机构：快手 (Kling Team)、北京大学、上海交通大学
*   其他合作机构：香港科技大学、中科院自动化所、南京大学、中国人民大学、清华大学

### 💡 毒舌点评

1.  **创新性有限**：本文核心思想“在连续潜在空间中进行多模态推理”并非原创，Coconut、Monet等已有工作。其主要贡献是将此思想适配到音视频联合推理场景并加入了数据合成流程，更像是一项扎实的系统性工程，而非原理性突破。
2.  **技术“黑箱”问题严重**：论文对“潜在推理状态”的具体语义解释几乎为零。这些连续状态到底编码了什么？是高层次的语义摘要，还是某种特征混合？论文选择回避这一关键问题，只通过注意力可视化来间接佐证，这使得方法的“可解释性”大打折扣。
3.  **可复现性堪忧**：论文声称代码和模型权重“未提及”，这在一个强调“合成数据流程”的工作里是重大缺陷。读者无法验证其复杂的多阶段数据合成管道是否真能产出高质量数据，也让“潜在空间推理有效”的结论打折扣。
4.  **基线比较策略存疑**：将Monet和LVR的“视觉单模态”结果与本文的“音视频全模态”结果直接对比（Table 3）有失公允。本文在单模态评估协议下的“SOTA”说服力不足。同时，缺乏与更强大的开源闭源模型（如GPT-4o、Gemini Pro系列）在相同协议下的直接对比。
5.  **训练细节不透明**：虽然附录B列出了部分超参数，但关键细节如“如何为每个样本分配固定的40个潜在token及其音视频比例”未加说明。这种固定预算在处理动态时长的视频时是否合理？存在疑问。

### 📌 核心摘要

本文针对多模态大语言模型（MLLM）在音视频联合推理中因文本化思维链（CoT）导致信息损失和语言先验偏倚的问题，提出了LatentOmni框架。该框架将文本推理与音频、视觉的潜在状态交错在统一的连续潜在空间中进行。核心设计包括：1）特征级潜在监督（\(\mathcal{L}_{\text{latent}}\)），将生成的潜在状态与原始感官特征对齐；2）Omni-Sync位置编码（OSPE），用于维持潜在音频和视觉状态间的时序一致性。为训练该模型，作者构建了一个三阶段的数据合成流程，生成了LatentOmni-Instruct-35K数据集。在四个音视频推理基准测试中，LatentOmni优于其基线模型（Qwen2.5-Omni-7B）及显式文本CoT基线，并在所评估的开源模型中取得最佳性能，验证了潜在空间联合推理的有效性。

### 🔗 开源详情

- **代码**：论文未提及提供代码。
- **模型权重**：论文未提及提供预训练或微调后的模型权重。
- **数据集**：论文提及构建了 **LatentOmni-Instruct-35K**，但**未提供**任何公开下载链接或托管地址。论文中用于数据合成的原始数据集 **ASID** 和 **AVoCaDO** 同样未提供链接。
- **Demo**：论文未提及。
- **复现材料**：论文在**附录B**中提供了部分训练超参数配置。然而，完整的数据合成流程（各阶段使用的具体提示词虽在附录A，但模型访问受限）、训练代码、模型检查点均未开源，导致无法完整复现。
- **论文中引用的开源项目**：论文中提到了Qwen2.5-Omni（基座模型）、VideoLLaMA2-7B、MiniCPM-o-7B等模型，但**均未提供**这些项目的具体开源链接。引用的数据集（如ASID, AVoCaDO）同样未提供链接。

### 🏗️ 方法概述和架构

LatentOmni是一个用于音视频联合推理的后训练框架，其核心思想是将连续的推理过程保留在统一的潜在空间中，以避免文本化CoT导致的信息瓶颈。该框架主要包含以下几个关键组件和流程：

1.  **交错文本-潜在推理机制**：模型不生成完整的文本CoT，而是根据推理需要，在文本生成和潜在状态生成之间动态切换。当模型需要深入分析音视频证据时，生成特殊标记 `<Unified_Latent>`，此后不再从离散词表 \(\mathcal{V}\) 中采样，而是自回归地生成 \(K\) 个连续的潜在状态向量 \(z_k \in \mathbb{R}^d\)。这些状态向量是Transformer最后一层的隐藏状态。随后，插入 `</Unified_Latent>` 标记，切换回文本生成。这形成了一条混合序列：`[文本, 触发u, 潜在状态序列, 停止u', 文本, ...]`，使文本负责结构逻辑，潜在状态负责密集的证据检索与推理。

2.  **统一潜在表示与时序对齐（OSPE）**：为解决音频和视觉在潜在空间中的时序对齐问题，OSPE扩展了Qwen2.5-Omni中的多模态RoPE。它为时间上对应的视觉帧和音频片段分配共享的物理时间戳 \(t\)，并应用旋转位置编码：$ \operatorname{OSPE}(h,t) = h \odot \cos(t\Theta) + \mathcal{R}(h) \odot \sin(t\Theta) \(。这确保了序列生成的潜在状态中，描述同一时刻的音频和视觉信息在位置上是对齐的。

3.  **训练目标**：训练过程同时优化三个损失函数：
    *   \)\mathcal{L}_{\text{sync}}\(：时间同步对比损失，将同一时间步 \)t$ 的视觉潜在特征 \(h_t^v\) 和音频潜在特征 \(h_t^a\) 拉近，同时推远不同步的特征对，初步建立时序一致的潜在空间。
    *   \(\mathcal{L}_{\text{latent}}\)：潜在状态对齐损失，是一个L2损失，强制每个自回归生成的潜在状态 \(z_k\) 与其对应的、从原始音视频段落中提取并池化的锚点特征 \(a_k\) 保持接近，将潜在推理锚定在原始感官证据上。
    *   \(\mathcal{L}_{\text{text}}\)：标准的下一个词元预测损失，仅在离散词元（文本、触发器、答案）上计算，保留模型的语言生成能力。
    最终损失为三者加权和：\(\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{text}} + \lambda_1 \mathcal{L}_{\text{latent}} + \lambda_2 \mathcal{L}_{\text{sync}}\)。

4.  **数据合成流程（LatentOmni-Instruct-35K）**：为提供训练所需的、带有分段监督的交错推理轨迹，设计了一个三阶段管道：
    *   **AVQA合成与过滤**：从ASID和AVoCaDO数据集出发，用Qwen3合成需要跨模态依赖的问答对，再用GLM-4.7进行分类和质量评分筛选。
    *   **片段级描述合成**：对每个保留的问答对，分割音视频流，用专门的Caption模型为每个模态生成片段描述，再用GLM-4.7融合、修正并对齐，得到时序对齐的音视频片段描述。
    *   **交错推理轨迹合成**：结合筛选后的问答对和片段描述，用GLM-4.7生成插入片段标记的推理链，再用Gemini-2.5-Flash进行审计和修正，最终得到35K条高质量的交错推理数据。

5.  **训练配置**：基于Qwen2.5-Omni-7B进行微调，使用固定长度为40的潜在token预算（经消融实验确定），其中视觉占32个，音频占8个。

### 💡 核心创新点

1.  **将连续潜在空间推理扩展到音视频联合场景**：不同于先前主要关注视觉-文本或纯文本的潜在推理工作，本文明确针对动态音频和视觉信号的联合理解与推理，填补了领域空白。
2.  **提出特征级潜在监督与OSPE**：\(\mathcal{L}_{\text{latent}}\) 将潜在状态显式锚定于原始感官特征，缓解语言先验偏倚；OSPE确保了潜在空间中跨模态的时序一致性，二者协同工作是框架的关键技术贡献。
3.  **构建了针对潜在空间音视频推理的专用数据集与合成流程**：LatentOmni-Instruct-35K及其三阶段合成管道，解决了现有数据集缺乏分段级监督信号的问题，为训练此类模型提供了必要的数据基础。

### 📊 实验结果

**表1：在四个全模态基准上的性能对比**（最佳开源模型结果加粗）
| 方法 | Daily-Omni | WorldSense | OmniVideoBench | LVOmniBench |
| :--- | :---: | :---: | :---: | :---: |
| **开源模型** | | | | |
| VideoLLaMA2-7B | 35.2 | 25.4 | 29.2 | 27.0 |
| MiniCPM-o-7B | 53.1 | 29.7 | 29.7 | 34.8 |
| VITA-1.5-7B | 44.7 | 36.9 | 30.5 | - |
| HumanOmniV2-7B | 58.5 | 47.1 | 30.5 | 32.3 |
| Baichuan-Omni-1.5 | 50.0 | 43.3 | 30.7 | 32.8 |
| OmniVinci | 66.5 | 48.2 | 32.1 | - |
| Qwen2.5-Omni-7B | 62.9 | 45.4 | 29.3 | 32.0 |
| &emsp;+ Explicit Text CoT | 65.6 | 46.6 | 33.2 | 32.1 |
| &emsp;+ Vanilla SFT | 62.0 | 47.5 | 30.5 | 33.2 |
| **LatentOmni** | **67.4** | **48.9** | **35.4** | **35.1** |
| **闭源模型（参考）** | | | | |
| GPT-4o | 56.5 | 42.6 | - | - |
| Gemini-2.0-Flash | 67.8 | 56.2 | 41.5 | 42.9 |
| Gemini-2.5-Pro | 81.4 | 64.6 | 58.9 | - |

LatentOmni在所有四个开源模型对比中取得最佳性能。相较于基线Qwen2.5-Omni-7B，绝对提升分别为：Daily-Omni (+4.5%)、WorldSense (+3.5%)、OmniVideoBench (+6.1%)、LVOmniBench (+3.1%)。同时，它一致超越显式文本CoT基线。

**表2：OmniVideoBench上更细粒度的准确率对比**（开源模型最佳加粗，次佳下划线）
| 方法 | 音频类型 | | | 视频时长 | | | | 平均 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | Music | Sound | Speech | (0,1]min | (1,5]min | (5,10]min | (10,30]min | Avg. |
| **闭源模型（参考）** | | | | | | | | |
| Gemini-2.0-Flash | 29.7 | 40.3 | 43.2 | 49.4 | 43.2 | 41.1 | 34.9 | 41.5 |
| Gemini-2.5-Pro | 38.5 | 57.7 | 61.7 | 57.8 | 64.4 | 55.0 | 55.9 | 58.9 |
| **开源模型** | | | | | | | | |
| VideoLLaMA2-7B | 26.4 | 30.7 | 29.3 | 32.0 | 28.2 | 29.6 | 28.3 | 29.2 |
| VITA-1.5-7B | 25.3 | 28.6 | 31.5 | 31.3 | 27.4 | 30.6 | 34.0 | 30.5 |
| HumanOmniV2-7B | 20.9 | 31.1 | 31.6 | 36.6 | 29.4 | 29.6 | 29.3 | 30.5 |
| Baichuan-Omni-1.5-7B | 24.2 | 31.3 | 31.4 | 28.9 | 31.8 | 28.4 | 32.4 | 30.7 |
| Qwen2.5-Omni-7B | 23.1 | 25.3 | 30.7 | 41.6 | 27.4 | 25.3 | 26.7 | 29.3 |
| &emsp;+ Explicit Text CoT | 30.0 | 32.0 | 33.9 | 39.4 | 32.7 | 31.0 | 30.7 | 33.2 |
| **LatentOmni** | **33.3** | 30.2 | **36.7** | **45.2** | **33.2** | **33.3** | **34.0** | **35.4** |

LatentOmni在音乐、语音类问题及所有短视频、中等视频时段上表现最佳，并在长视频((10,30]分钟)上取得开源最佳。平均准确率相比基线提升6.1个百分点。

**表3：在VideoMME上的视觉单模态协议对比**（与近期视觉潜在推理方法比较）
| 方法 | 总体 | 短视频 | 中视频 | 长视频 |
| :--- | :---: | :---: | :---: | :---: |
| LVR | 36.7 | 39.2 | 36.6 | 34.3 |
| Monet | 51.6 | 52.9 | 56.0 | 46.0 |
| **LatentOmni** | **60.8** | **70.8** | **60.5** | **50.4** |

**表4：组件消融实验**（最佳结果加粗）
| 方法 | Daily-Omni | WorldSense | OmniVideoBench | LVOmniBench |
| :--- | :---: | :---: | :---: | :---: |
| w/o Audio in Latent Space | 65.9 | 47.8 | 33.6 | 31.6 |
| w/o Visual in Latent Space | 63.5 | 47.2 | 33.5 | 32.1 |
| w/o OSPE | 66.0 | 47.8 | 34.9 | 33.1 |
| w/o \(\mathcal{L}_{\text{latent}}\) | 61.0 | 45.2 | 31.8 | 30.2 |
| w/o \(\mathcal{L}_{\text{sync}}\) | 65.9 | 47.1 | 34.0 | 33.1 |
| Qwen2.5-Omni-7B | 62.9 | 45.4 | 29.3 | 32.0 |
| &emsp;+ Explicit Text CoT | 65.6 | 46.6 | 33.2 | 32.1 |
| &emsp;+ Vanilla SFT | 62.0 | 47.5 | 30.5 | 33.2 |
| **LatentOmni (full)** | **67.4** | **48.9** | **35.4** | **35.1** |

消融实验表明：移除任何模态（音或视觉）的潜在状态均导致性能下降；移除OSPE或\(\mathcal{L}_{\text{sync}}\)会带来性能损失；而移除核心的\(\mathcal{L}_{\text{latent}}\)损失导致性能急剧下降，证实了特征级潜在监督的关键作用。图4进一步展示了潜在token总数（最优40）和分配比例（视觉32:音频8）的影响。

### 🔬 细节详述

*   **潜在token配置**：默认配置为总长度 \(K=40\)，其中视觉位置 \(K_v=32\)，音频位置 \(K_a=8\)。此配置通过消融实验（图4）确定，在性能和计算成本间取得平衡。训练和评估均使用此固定预算，未动态调整。
*   **训练细节**：基座模型为Qwen2.5-Omni-7B。使用LatentOmni-Instruct-35K数据集微调750步（2个epoch）。优化器学习率 \(10^{-5}\)，热身比例0.05。损失权重 \(\lambda_1=0.005\)，\(\lambda_2=1.0\)。由于资源限制，batch size为1，使用12步梯度累积。
*   **数据合成具体模型**：AVQA合成使用Qwen3-235B-A22B；分类过滤使用GLM-4.7；片段描述生成使用Qwen3-30B-A3B-Captioner（视觉和音频各一）；描述融合与修正使用GLM-4.7；推理轨迹生成使用GLM-4.7，审计使用Gemini-2.5-Flash。
*   **基线设置**：Explicit Text CoT基线在移除所有交错音视频片段的纯文本推理轨迹上训练。Vanilla SFT基线在LatentOmni-Instruct-35K上训练但不使用潜在空间推理。这两个基线旨在分离“额外数据”、“文本CoT”和“潜在状态”的影响。

### ⚖️ 评分理由

1.  **创新性 (3/3) → (2.0/3)**：核心思想“潜在空间推理”借鉴自Coconut等先驱工作，非全新提出。创新主要体现在将该思想成功应用于更复杂的音视频联合场景，并设计了相应的监督机制（\(\mathcal{L}_{\text{latent}}\)，OSPE）和数据合成管道。属于优秀的应用创新而非原理创新。
2.  **技术严谨性 (1.5/1.5) → (1.0/1.5)**：方法设计合理，损失函数有明确目标。但存在严重缺陷：**可复现性极差**，代码、模型、数据集均未公开，使得核心的数据合成流程无法验证。此外，潜在状态的语义解释缺失，OSPE的具体实现细节（如如何为非时序对齐的数据分配共享 \(t\)）未详述。
3.  **实验充分性 (1.5/1.5) → (1.2/1.5)**：在四个相关基准上进行了评估，并做了充分的消融实验，支持了主要结论。不足之处：缺乏与最强开源闭源模型在相同协议（如全模态）下的公平比较；与视觉潜在推理方法的单模态对比不够充分，未能完全证明其优势。
4.  **清晰度 (1/1) → (0.8/1)**：论文整体结构清晰，图表说明有力。但方法部分对潜在推理状态的生成机制和语义缺乏深入解释，使核心概念停留在“黑箱”描述层面。
5.  **影响力 (2/2) → (1.5/2)**：对多模态AI，特别是需要深度音视频理解的领域（如视频分���、人机交互）有积极推动作用。展示了超越文本CoT的潜在路径。但由于其核心贡献在多模态交叉领域，对纯粹的语音或音频处理领域读者的直接借鉴意义有限。
6.  **开源/可复现性 (1.5+0.5/1.5) → (0.0/2.0)**：论文明确指出代码、模型权重、数据集（LatentOmni-Instruct-35K）均未公开或链接。这是重大缺陷，使得这项工作几乎无法被复现和验证。给予最低分。
7.  **可复现性单独扣分**：由于上述开源缺失问题，在“可复现性”维度已包含扣分，此处不再额外扣分。

**总分计算**：2.0 + 1.0 + 1.2 + 0.8 + 1.5 + 0.0 = **6.5**，取整为7.0。

### 🚨 局限与问题

1.  **方法泛化性存疑**：潜在token预算固定为40个，且音视频分配比例固定。这种“一刀切”的设计在处理时长差异极大、模态重要性动态变化的真实场景时是否鲁棒？论文未讨论。
2.  **训练数据来源偏差**：LatentOmni-Instruct-35K完全由大型语言模型（Qwen3, GLM-4.7）和视觉语言模型（Gemini）合成。这些合成数据可能存在系统性偏差，例如，模型可能更擅长生成某种模式或忽略某些细粒度关联，这将直接限制LatentOmni学习到的推理模式的上限。
3.  **基线与评估不足**：与文本CoT基线的对比中，两者使用的训练数据本质不同（潜在轨迹 vs. 纯文本轨迹），这引入了数据分布差异这一混淆变量。理想的对比应控制数据内容相同，仅改变训练目标。此外，缺乏在更多、更权威的音频或视频理解基准上的评估。
4.  **潜在推理的“可解释性”与“可控性”**：潜在状态是不可解释的连续向量。这带来了两个问题：(1) 当模型推理出错时，难以诊断是哪个环节（是潜在状态生成错误，还是对齐错误）；(2) 用户无法引导或干预潜在推理过程，限制了人机协作的可能性。
5.  **扩展到更多模态的挑战**：作者在局限性部分提到了扩展到触觉、3D等模态。但这不仅是数据问题，更是架构问题。随着模态增加，统一潜在空间的容量、对齐的复杂性、以及\(\mathcal{L}_{\text{latent}}\)中锚点特征的生成都会面临巨大挑战。论文的框架是否易于扩展，值得怀疑。
6.  **效率与成本**：虽然潜在推理旨在减少信息损失，但引入额外的潜在状态生成步骤和多个辅助损失，是否会显著增加推理时的计算开销和延迟？论文未提供相关分析。

### 📷 论文图片

![图1](https://arxiv.org/html/2605.22012v1/x1.png)

![图2](https://arxiv.org/html/2605.22012v1/x2.png)

![图3](https://arxiv.org/html/2605.22012v1/x3.png)

![图4](https://arxiv.org/html/2605.22012v1/x4.png)

![图5](data:image/svg+xml;base64,PHN2ZyBpZD0iQTIuRjUuMS5wMS5waWMxIiBjbGFzcz0ibHR4X3BpY3R1cmUiIGhlaWdodD0iMjY2Ni41NiIgb3ZlcmZsb3c9InZpc2libGUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYwMCAyNjY2LjU2IiB3aWR0aD0iNjAwIj48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNjY2LjU2KSBtYXRyaXgoMSAwIDAgLTEgMCAwKSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNHB0Ij48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojODAwMDgwOyIgZmlsbD0iIzgwMDA4MCIgZmlsbC1vcGFjaXR5PSIxLjAiPjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZSIgZD0iTSAwIDExLjIzIEwgMCAyNjQwLjUzIEMgMCAyNjQ2LjczIDUuMDMgMjY1MS43NSAxMS4yMyAyNjUxLjc1IEwgNTg4Ljc3IDI2NTEuNzUgQyA1OTQuOTcgMjY1MS43NSA2MDAgMjY0Ni43MyA2MDAgMjY0MC41MyBMIDYwMCAxMS4yMyBDIDYwMCA1LjAzIDU5NC45NyAwIDU4OC43NyAwIEwgMTEuMjMgMCBDIDUuMDMgMCAwIDUuMDMgMCAxMS4yMyBaIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1maWxsLWNvbG9yOiNGRkZGRkY7IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjEuMCI+PHBhdGggc3R5bGU9InN0cm9rZTpub25lIiBkPSJNIDEuMzggMTEuMjMgTCAxLjM4IDI2NDAuNTMgQyAxLjM4IDI2NDUuOTYgNS43OSAyNjUwLjM3IDExLjIzIDI2NTAuMzcgTCA1ODguNzcgMjY1MC4zNyBDIDU5NC4yMSAyNjUwLjM3IDU5OC42MiAyNjQ1Ljk2IDU5OC42MiAyNjQwLjUzIEwgNTk4LjYyIDExLjIzIEMgNTk4LjYyIDUuNzkgNTk0LjIxIDEuMzggNTg4Ljc3IDEuMzggTCAxMS4yMyAxLjM4IEMgNS43OSAxLjM4IDEuMzggNS43OSAxLjM4IDExLjIzIFoiPjwvcGF0aD48L2c+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDM1LjQzIDI2MzYuOTQpIj48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgY2xhc3M9Imx0eF9uZXN0ZWRzdmciIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAwKSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNHB0Ij48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojODAwMDgwOyIgZmlsbD0iIzgwMDA4MCIgZmlsbC1vcGFjaXR5PSIxLjAiPjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZSIgZD0iTSAwIDUuOTEgTCAwIDIzLjcyIEMgMCAyNi45OCAyLjY0IDI5LjYyIDUuOTEgMjkuNjIgTCA0MTkuNjEgMjkuNjIgQyA0MjIuODcgMjkuNjIgNDI1LjUxIDI2Ljk4IDQyNS41MSAyMy43MiBMIDQyNS41MSA1LjkxIEMgNDI1LjUxIDIuNjQgNDIyLjg3IDAgNDE5LjYxIDAgTCA1LjkxIDAgQyAyLjY0IDAgMCAyLjY0IDAgNS45MSBaIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1maWxsLWNvbG9yOiM2NjAwNjY7IiBmaWxsPSIjNjYwMDY2IiBmaWxsLW9wYWNpdHk9IjEuMCI+PHBhdGggc3R5bGU9InN0cm9rZTpub25lIiBkPSJNIDAgNS45MSBMIDAgMjMuNzIgQyAwIDI2Ljk4IDIuNjQgMjkuNjIgNS45MSAyOS42MiBMIDQxOS42MSAyOS42MiBDIDQyMi44NyAyOS42MiA0MjUuNTEgMjYuOTggNDI1LjUxIDIzLjcyIEwgNDI1LjUxIDUuOTEgQyA0MjUuNTEgMi42NCA0MjIuODcgMCA0MTkuNjEgMCBMIDUuOTEgMCBDIDIuNjQgMCAwIDIuNjQgMCA1LjkxIFoiPjwvcGF0aD48L2c+PGcgZmlsbC1vcGFjaXR5PSIxLjAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAxOS42OCAxMS4zNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojMDAwMDAwOy0tbHR4LWZvLXdpZHRoOjI0LjM5ZW07LS1sdHgtZm8taGVpZ2h0OjAuNmVtOy0tbHR4LWZvLWRlcHRoOjAuMTdlbTsiIHdpZHRoPSIzODguMDciIGhlaWdodD0iMTIuMyIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA5LjYxKSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjMDAwMDAwIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4xLjEuMS4xLjEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCIgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNGRkZGRkY7Ij5Qcm9tcHQgMTogQVYgT3Blbi1FbmRlZCBRdWVzdGlvbi1BbnN3ZXIgU3ludGhlc2lzPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9nPjxnIGZpbGwtb3BhY2l0eT0iMS4wIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMjEuMDcgMjAuNTkpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6IzAwMDAwMDstLWx0eC1mby13aWR0aDo0MC4zMmVtOy0tbHR4LWZvLWhlaWdodDoxODcuNjZlbTstLWx0eC1mby1kZXB0aDowLjI1ZW07IiB3aWR0aD0iNTU3Ljg2IiBoZWlnaHQ9IjI2MDAuMTMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjU5Ni42NykiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzAwMDAwMCI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayBsdHhfbWluaXBhZ2UgbHR4X2FsaWduX2JvdHRvbSIgc3R5bGU9IndpZHRoOjM5LjQ0ZW07Ij48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5Sb2xlLjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfbWVkaXVtIj4gWW91IGFyZSBhbiBleHBlcnQgbXVsdGltb2RhbCBkYXRhc2V0IGRlc2lnbmVyIHNwZWNpYWxpemluZyBpbiBBdWRpby1WaXN1YWwgUXVlc3Rpb24gQW5zd2VyaW5nIChBVlFBKS48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS4yIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjIuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5JbnB1dC48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS4yLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X21lZGl1bSI+IFRlbXBvcmFsbHkgYWxpZ25lZCBhdWRpbyBhbmQgdmlkZW8gY2FwdGlvbnMgZGVzY3JpYmluZyBzeW5jaHJvbml6ZWQgZXZlbnRzLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjMiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuMy4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCBsdHhfZm9udF9pdGFsaWMiPlRhc2sgRGVzY3JpcHRpb24uPHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuMy4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9tZWRpdW0iPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBMi5JMSIgY2xhc3M9Imx0eF9lbnVtZXJhdGUiPjxzcGFuIGlkPSJBMi5JMS5pMSIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPjEuPC9zcGFuPjxzcGFuIGlkPSJBMi5JMS5pMS5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTIuSTEuaTEucDEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTIuSTEuaTEucDEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCBsdHhfZm9udF9pdGFsaWMiPkNvbnRleHQgQ29tcHJlaGVuc2lvbjo8L3NwYW4+PHNwYW4gaWQ9IkEyLkkxLmkxLnAxLjEuMiIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2l0YWxpYyI+IFRob3JvdWdobHkgYW5hbHl6ZSB0aGUgcHJvdmlkZWQgYXVkaW8gYW5kIHZpZGVvIGNhcHRpb25zIHRvIHVuZGVyc3RhbmQgdGhlIHN5bmNocm9uaXplZCBtdWx0aW1vZGFsIGV2ZW50cyBhbmQgdGhlaXIgdGVtcG9yYWwgY29ycmVsYXRpb25zLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTEuaTIiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj4yLjwvc3Bhbj48c3BhbiBpZD0iQTIuSTEuaTIucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkEyLkkxLmkyLnAxLjEiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkkxLmkyLnAxLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5PcGVuLUVuZGVkIEdlbmVyYXRpb246PC9zcGFuPjxzcGFuIGlkPSJBMi5JMS5pMi5wMS4xLjIiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9pdGFsaWMiPiBTeW50aGVzaXplIGV4YWN0bHkgPC9zcGFuPjxzcGFuIGlkPSJBMi5JMS5pMi5wMS4xLjMiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+b25lPC9zcGFuPjxzcGFuIGlkPSJBMi5JMS5pMi5wMS4xLjQiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9pdGFsaWMiPiBoaWdoLXF1YWxpdHksIG9wZW4tZW5kZWQgcXVlc3Rpb24tYW5zd2VyIHBhaXIgdGhhdCBkZW1hbmRzIGNvbXBsZXgsIG11bHRpLXN0ZXAgY3Jvc3MtbW9kYWwgcmVhc29uaW5nLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTEuaTMiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj4zLjwvc3Bhbj48c3BhbiBpZD0iQTIuSTEuaTMucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkEyLkkxLmkzLnAxLjEiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkkxLmkzLnAxLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5TdHJ1Y3R1cmVkIE91dHB1dDo8L3NwYW4+PHNwYW4gaWQ9IkEyLkkxLmkzLnAxLjEuMiIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2l0YWxpYyI+IEZvcm1hdCB0aGUgZmluYWwgcmVzdWx0IHN0cmljdGx5IGFzIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUgcXVlc3Rpb24sIGNvbmNpc2UgYW5zd2VyLCBhbmQgdGhlIHNwZWNpZmljIHJlYXNvbmluZyB0eXBlIGVtcGxveWVkLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuNCIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS40LjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+SGFyZCBDb25zdHJhaW50cy48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS40LjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X21lZGl1bSI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkEyLkkyIiBjbGFzcz0ibHR4X2l0ZW1pemUiPjxzcGFuIGlkPSJBMi5JMi5pMSIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPuKAojwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTEucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkEyLkkyLmkxLnAxLjEiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkkyLmkxLnAxLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5Dcm9zcy1Nb2RhbCBJbmZvcm1hdGlvbiBEZXBlbmRlbmN5Ojwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTEucDEuMS4yIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfaXRhbGljIj4gVGhlIHF1ZXN0aW9uIG11c3Qgc3RyaWN0bHkgcmVseSBvbiB0aGUgc3ludGhlc2lzIG9mIGJvdGggdmlzdWFsIGFuZCBhdWRpbyBpbmZvcm1hdGlvbi4gSXQgbXVzdCBiZSBsb2dpY2FsbHkgaW1wb3NzaWJsZSB0byBkZWR1Y2UgdGhlIGFuc3dlciB1c2luZyBvbmx5IGEgc2luZ2xlIG1vZGFsaXR5Ljwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTIiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj7igKI8L3NwYW4+PHNwYW4gaWQ9IkEyLkkyLmkyLnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBMi5JMi5pMi5wMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5JMi5pMi5wMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+UmVhc29uaW5nIFR5cG9sb2d5Ojwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTIucDEuMS4yIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfaXRhbGljIj4gVGhlIGdlbmVyYXRlZCBxdWVzdGlvbiBtdXN0IGV4cGxpY2l0bHkgdGFyZ2V0IGEgZGlzdGluY3QgY29tcGxleCByZWFzb25pbmcgY2F0ZWdvcnkgKGUuZy4sIGNhdXNhbCByZWFzb25pbmcsIHNwYXRpYWwgcmVsYXRpb25zLCB0ZW1wb3JhbCBzZXF1ZW5jaW5nLCBzb3VuZC1hY3Rpb24gYXR0cmlidXRpb24sIG9yIG9iamVjdCBpbnRlcmFjdGlvbnMpLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTMiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj7igKI8L3NwYW4+PHNwYW4gaWQ9IkEyLkkyLmkzLnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBMi5JMi5pMy5wMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5JMi5pMy5wMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+QW5zd2VyIEFjY3VyYWN5Ojwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTMucDEuMS4yIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfaXRhbGljIj4gVGhlIHF1ZXN0aW9uIGFuZCBpdHMgY29uY2lzZSBhbnN3ZXIgKG1heGltdW0gMTAgd29yZHMpIG11c3QgYmUgZmFjdHVhbGx5IGFjY3VyYXRlLCBjb25jcmV0ZSwgYW5kIGdyb3VuZGVkIHN0cmljdGx5IHdpdGhpbiB0aGUgcHJvdmlkZWQgY2FwdGlvbiBjb250ZW50LCB3aXRoIHplcm8gZXh0ZXJuYWwgaGFsbHVjaW5hdGlvbi48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkEyLkkyLmk0IiBjbGFzcz0ibHR4X2l0ZW0iIHN0eWxlPSJsaXN0LXN0eWxlLXR5cGU6bm9uZTsiPjxzcGFuIGNsYXNzPSJsdHhfdGFnIGx0eF90YWdfaXRlbSI+4oCiPC9zcGFuPjxzcGFuIGlkPSJBMi5JMi5pNC5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTIuSTIuaTQucDEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTIuSTIuaTQucDEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCBsdHhfZm9udF9pdGFsaWMiPkZvcm1hdCBhbmQgU3R5bGU6PC9zcGFuPjxzcGFuIGlkPSJBMi5JMi5pNC5wMS4xLjIiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9pdGFsaWMiPiBBdm9pZCB1c2luZyBvYmplY3QgSURzLCBib3VuZGluZyBib3ggbGFiZWxzLCB0aW1lc3RhbXBzLCBvciByYXcgWE1MIHRhZ3MgaW4gdGhlIGdlbmVyYXRlZCBxdWVzdGlvbiBhbmQgYW5zd2VyLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTUiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj7igKI8L3NwYW4+PHNwYW4gaWQ9IkEyLkkyLmk1LnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBMi5JMi5pNS5wMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5JMi5pNS5wMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+Q29tbW9uc2Vuc2UgSW50ZWdyYXRpb246PC9zcGFuPjxzcGFuIGlkPSJBMi5JMi5pNS5wMS4xLjIiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9pdGFsaWMiPiBFbmNvdXJhZ2Ugc3RydWN0dXJhbCB3b3JsZCBrbm93bGVkZ2Ugd2hlbiBhcHByb3ByaWF0ZSwgc3VjaCBhcyBsb2dpY2FsbHkgbGlua2luZyB2aXNpYmxlIHBoeXNpY2FsIGFjdGlvbnMgd2l0aCBleHBlY3RlZCBlbnZpcm9ubWVudGFsIGFjb3VzdGljcy48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjUiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuNS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCBsdHhfZm9udF9pdGFsaWMiPk91dHB1dCBGb3JtYXQuPHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuNS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9tZWRpdW0iPiBPdXRwdXQgcmF3IEpTT04gb25seS4gRG8gbm90IHdyYXAgdGhlIG91dHB1dCBpbiBNYXJrZG93biBibG9ja3MuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuNiIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS42LjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+UmVmZXJlbmNlIEpTT04gU2NoZW1hLjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjYuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfbWVkaXVtIj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48cHJlIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjciIGNsYXNzPSJsdHhfdmVyYmF0aW0gbHR4X2ZvbnRfdHlwZXdyaXRlciI+ewogICJpZCI6ICJPcGVuUUFfMDEiLAogICJtb2RhbGl0eSI6ICJBViIsCiAgInF1ZXN0aW9uIjogIi4uLiIsCiAgImFuc3dlciI6ICIuLi4iCn0KPC9wcmU+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9zdmc+)


---

[← 返回 2026-05-22 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-22/)
