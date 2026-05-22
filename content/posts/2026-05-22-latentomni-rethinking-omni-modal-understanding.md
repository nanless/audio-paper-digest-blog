---
title: "LatentOmni: Rethinking Omni-Modal Understanding via Unified Audio-Visual Latent Reasoning"
date: 2026-05-22
draft: false
tags: [多模态大语言模型, 音频-视觉推理, 潜在空间, 链式思维, 跨模态对齐, 位置编码, 指令微调]
categories: [论文速递]
description: "多模态模型 | 9/10"
hiddenInHomeList: true
---

# 📄 LatentOmni: Rethinking Omni-Modal Understanding via Unified Audio-Visual Latent Reasoning

#多模态大语言模型 #音频-视觉推理 #潜在空间 #链式思维 #跨模态对齐 #位置编码 #指令微调

🔥 **9/10** | 前10% | #多模态模型 | 潜在空间推理，多模态对齐 | #多模态大语言模型 #音频-视觉推理 | [arxiv](https://arxiv.org/abs/2605.22012v1)

学术质量 7/7 | 影响力 2/2 | 可复现性 0/2 | 置信度 0.95


### 👥 作者与机构

第一作者 Yifan Dai，同时隶属于上海交通大学和快手（Kling 团队）。其他主要作者及机构包括：快手技术（Kuaishou Technology）、北京大学、香港科技大学（HKUST）、中国科学院自动化研究所（CASIA）、南京大学、中国人民大学、清华大学。

### 💡 毒舌点评

这篇工作直指当前多模态LLM推理中的一个核心痛点：将连续的音频-视觉信号强行塞进离散的文本思维链（CoT）会丢失大量细粒度时序信息。作者提出的LatentOmni框架，通过在推理过程中交替使用文本和连续的潜在状态，来“绕过”这个瓶颈，想法直觉上合理且有针对性。其构建的大规模音频-视觉交错推理轨迹数据集（LatentOmni-Instruct-35K）也填补了该领域的空白。然而，论文在实验和分析上仍有明显短板：1）虽然对比了多个开源基线，但与最强的闭源系统（如Gemini-2.5-Pro）差距依然巨大；2）对潜在空间推理本身的可视化和可解释性分析不足；3）消融实验揭示了关键组件的作用，但未深入探讨潜在状态的内部表示学到了什么；4）训练成本高昂（单卡batch size=1，梯度累积），限制了其方法的普及性。总的来说，这是一次有价值的探索，但距离真正“理解”音视频的复杂交互还有很长的路要走。

### 📌 核心摘要

本文针对多模态大语言模型（MLLMs）在音频-视觉联合推理中的瓶颈——文本思维链（CoT）压缩连续信号导致信息丢失——提出LatentOmni框架。该框架在自回归生成过程中交替产生文本标记和连续的潜在状态，后者用于对音频-视觉证据进行密集推理。为确保潜在状态对齐于具体证据，提出了特征级监督；为保持跨模态时序一致性，引入了Omni-Sync位置编码（OSPE）。为此，作者构建了首个专门的音频-视觉交错推理轨迹数据集LatentOmni-Instruct-35K。在四个基准测试上，LatentOmni在所有评估的开源模型中取得最佳性能，并一致优于纯文本CoT基线，验证了潜在空间联合推理的有效性。

### 🔗 开源详情

- 代码：论文中未提及任何开源代码仓库。
- 模型权重：论文中未提供LatentOmni模型的权重下载链接（如HuggingFace或ModelScope地址）。
- 数据集：论文中声称构建了LatentOmni-Instruct-35K数据集，但未提供其下载链接或开源仓库地址。其数据来源ASID和AVoCaDO的链接如下：
    - ASID: https://github.com/IDEA-Research/ASID
    - AVoCaDO: https://github.com/EnVision-Research/AVoCaDO
- Demo：论文中未提及。
- 复现材料：论文中附录B提供了部分训练超参数和细节（如学习率、批大小、损失权重\(\lambda_1\)和\(\lambda_2\)等），但未提供预训练检查点或完整训练脚本。
- 论文中引用的开源项目：
    1.  Qwen2.5-Omni-7B: 作为基础模型和基线。链接：https://huggingface.co/Qwen/Qwen2.5-Omni-7B
    2.  ASID: 数据来源之一。链接：https://github.com/IDEA-Research/ASID
    3.  AVoCaDO: 数据来源之一。链接：https://github.com/EnVision-Research/AVoCaDO
    4.  VideoLLaMA2-7B: 开源基线模型。链接：https://github.com/PKU-YuanGroup/VideoLLaMA2
    5.  MiniCPM-o-7B: 开源基线模型。链接：https://github.com/OpenBMB/MiniCPM-o
    6.  VITA-1.5-7B: 开源基线模型。链接：https://github.com/VITA-LLM/VITA-1.5
    7.  HumanOmniV2-7B: 开源基线模型。链接：论文中未提供具体链接。
    8.  Baichuan-Omni-1.5: 开源基线模型。链接：论文中未提供具体链接。
    9.  OmniVinci: 开源基线模型。链接：论文中未提供具体链接。
    10. GPT-4o: 作为参考的闭源系统。链接：论文中未提供具体链接。
    11. Gemini-2.0-Flash/2.5-Pro/3-Pro: 作为参考的闭源系统。链接：论文中未提供具体链接。
    12. Qwen3-235B-A22B / Qwen3-30B-A3B-Captioner: 数据构建中使用的生成模型。链接：论文中未提供具体链接。
    13. GLM-4.7: 数据构建中使用的评估和过滤模型。链接：论文中未提供具体链接。
    14. Gemini-2.5-Flash: 数据构建中使用的审计模型。链接：论文中未提供具体链接。

### 🏗️ 方法概述和架构

LatentOmni是一个后训练框架，核心思想是在推理过程中，让模型交替执行两种操作：传统的文本token生成（用于高层逻辑）和对音频-视觉潜在状态的生成（用于证据密集型推理）。其架构与流程详细阐述如下：

1.  文本-潜在状态交替推理过程：
    *   触发机制：当模型在自回归生成过程中需要回顾音视频证据时，它会生成一个特殊标记 `` `<Unified_Latent>` ``。此标记将解码空间从离散词汇表 \(\mathcal{V}\) 切换到连续的潜在空间 \(\mathbb{R}^d\)。
    *   潜在状态生成：在切换后，模型连续生成 \(K\) 个潜在嵌入 \(z_{1:K}\)。每个 \(z_k\) 是Transformer第 \(L\) 层在给定历史上下文 \(S_{<k}\)（包含文本标记和先前生成的潜在状态）后的隐藏状态，具体计算如公式(2)所示：\(z_{k}=\operatorname{LM}_{\theta}^{(L)}\left(H^{v}, H^{a}, H^{q}, S_{<k}\right)\)。其中 \(H^v\)、\(H^a\)、\(H^q\) 分别是视觉、音频和文本查询的编码特征。
    *   停止与切换：生成 \(K\) 个潜在状态后，模型插入一个停止标记 `` `</Unified_Latent>` ``，从而终止连续推理阶段，切换回离散文本生成。
    *   结果轨迹：最终形成的推理轨迹是一个混合序列，如公式(1)所示：\(S=\left[w_{1:i}, u, z_{1:K}, u', w_{i+1:j}, u, z_{K+1:2K}, u', \dots, a\right]\)，其中 \(w\) 是文本token，\(u\) 和 \(u'\) 是触发和停止标记，\(z\) 是潜在状态，\(a\) 是最终答案。这种设计保留了文本的逻辑骨架，同时利用潜在状态处理跨模态证据。

2.  统一潜在表示与时序对齐：
    *   潜在状态分配：在每个长度为 \(K\) 的潜在推理阶段，前 \(K_v\) 个位置分配给视觉潜在状态，后 \(K_a\) 个位置分配给音频潜在状态（\(K = K_v + K_a\)）。所有潜在状态共享同一个连续空间 \(\mathbb{R}^d\)。
    *   Omni-Sync位置编码（OSPE）：为解决顺序生成可能导致的音频和视觉潜在状态时序漂移问题，OSPE扩展了Qwen2.5-Omni的时间对齐多模态RoPE。它为时间上对应的视觉帧和音频片段分配共享的物理时间戳 \(t\)。对于时间戳为 \(t\) 的潜在特征 \(h \in \{h^v, h^a\}\)，OSPE应用公式(3)：\(\operatorname{OSPE}(h, t) = h \odot \cos(t \Theta) + \mathcal{R}(h) \odot \sin(t \Theta)\)，其中 \(\Theta\) 是基础频率向量，\(\odot\) 是哈达玛积，\(\mathcal{R}(\cdot)\) 是块对角旋转矩阵。这为顺序生成的潜在特征注入了同步的位置先验，使其能够关注时序一致的跨模态证据。

3.  训练目标：训练旨在同时满足三个要求：保持时序对应、将潜在状态扎根于原始证据、保留语言生成能力。因此，总损失函数为公式(7)：\(\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{text}} + \lambda_1 \mathcal{L}_{\text{latent}} + \lambda_2 \mathcal{L}_{\text{sync}}\)。
    *   文本预测损失 (\(\mathcal{L}_{\text{text}}\))：标准自回归交叉熵损失，但仅在序列中属于词汇表 \(\mathcal{V}\) 的离散标记（文本标记 \(w\)、触发/停止标记 \(u/u'\)、答案 \(a\)）上计算，如公式(6)所示。这保留了模型的语言建模能力。
    *   潜在对齐损失 (\(\mathcal{L}_{\text{latent}}\))：特征级监督的核心。对于每个标注的音视频片段，首先使用模型的编码器提取特征并压缩成锚定序列 \(A = [a_1, \dots, a_K]\)。然后，在训练时，每个自回归生成的潜在状态 \(z_k\) 需要与其对应的锚定向量 \(a_k\) 在L2范数上对齐，如公式(5)所示：\(\mathcal{L}_{\text{latent}} = \frac{1}{K} \sum_{k=1}^{K} \left\| z_{k} - a_{k} \right\|_2^2\)。这迫使潜在状态保持对原始感官证据的锚定。
    *   时序同步损失 (\(\mathcal{L}_{\text{sync}}\))：对齐时间上同步的音频和视觉特征。采用对称的InfoNCE对比损失，如公式(4)所示，将匹配时间戳的音视频特征拉近，将不匹配的推远，从而建立一个时序连贯的潜在空间。

4.  数据构建：为提供上述监督所需的训练数据，作者设计了一个三阶段流水线构建LatentOmni-Instruct-35K数据集：
    *   阶段1（AVQA合成与过滤）：从ASID和AVoCaDO数据集收集原始样本，使用Qwen3-235B生成需要跨模态依赖的问题-答案对，然后使用GLM-4.7进行分类和质量评分过滤。
    *   阶段2（分段级别字幕合成）：对保留的样本，按时间戳分割流，使用Qwen3-30B-Captioner分别为每个片段生成独立的音频和视频字幕，再用GLM-4.7修复、对齐和过滤幻觉。
    *   阶段3（音视频交错推理轨迹合成）：综合过滤后的AVQA对和分段字幕，使用GLM-4.7生成包含明确音视频片段引用标记的推理链，再由Gemini-2.5-Flash审计修正，最终将标记替换为对应的音视频片段，得到最终数据集。

### 💡 核心创新点

1.  潜在空间音频-视觉联合推理框架：提出LatentOmni，首次在音频-视觉多模态LLM中系统性地引入交替文本-潜在状态的推理范式，允许模型在自回归生成过程中直接操作连续的音视频表示，以保留细粒度证据。
2.  特征级潜在空间监督与OSPE：为解决潜在推理易脱离原始证据的问题，引入显式的特征级对齐损失 (\(\mathcal{L}_{\text{latent}}\))。同时，提出OSPE，通过共享时间戳的位置编码强制保持音频和视觉潜在状态的时序一致性，这是实现有效跨模态潜在推理的关键设计。
3.  专用的音视频交错推理轨迹数据集：构建了LatentOmni-Instruct-35K，这是一个高质量、包含分段级别音视频证据锚定的推理轨迹数据集，填补了监督潜在空间跨模态推理所需训练数据的空白。

### 📊 实验结果

基准测试：在四个音频-视觉联合推理基准上进行评估：Daily-Omni（日常场景推理）、WorldSense（物理与时空常识）、OmniVideoBench（跨模态对齐与问答）和LVOmniBench（长视频多感官理解）。

主要结果：
LatentOmni在所有评估的开源模型中，在所有四个基准测试上均达到最佳性能。下表（对应论文表1）总结了核心对比结果：

| 方法 | Daily-Omni | WorldSense | OmniVideoBench | LVOmniBench |
| :--- | :---: | :---: | :---: | :---: |
| 开源模型 | | | | |
| VideoLLaMA2-7B | 35.2 | 25.4 | 29.2 | 27.0 |
| MiniCPM-o-7B | 53.1 | 29.7 | 29.7 | 34.8 |
| VITA-1.5-7B | 44.7 | 36.9 | 30.5 | - |
| HumanOmniV2-7B | 58.5 | 47.1 | 30.5 | 32.3 |
| Baichuan-Omni-1.5 | 50.0 | 43.3 | 30.7 | 32.8 |
| OmniVinci | 66.5 | 48.2 | 32.1 | - |
| Qwen2.5-Omni-7B | 62.9 | 45.4 | 29.3 | 32.0 |
|  + Explicit Text CoT | 65.6 | 46.6 | 33.2 | 32.1 |
|  + Vanilla SFT | 62.0 | 47.5 | 30.5 | 33.2 |
| LatentOmni | 67.4 | 48.9 | 35.4 | 35.1 |
| 闭源模型（参考） | | | | |
| GPT-4o | 56.5 | 42.6 | - | - |
| Gemini-2.0-Flash | 67.8 | 56.2 | 41.5 | 42.9 |
| Gemini-2.5-Pro | 81.4 | 64.6 | 58.9 | - |

关键发现：
*   相比基座模型Qwen2.5-Omni-7B，LatentOmni在四个基准上分别获得+4.5%、+3.5%、+6.1%、+3.1%的绝对提升。
*   相比控制基线Explicit Text CoT（仅使用文本推理轨迹微调），LatentOmni在所有基准上仍有显著优势（例如，OmniVideoBench上+2.2%），表明增益来源于潜在空间中的音视频证据保留，而非额外指令数据或文本推理本身。
*   在专为细粒度分析设计的OmniVideoBench上，LatentOmni取得了开源模型中的最高平均分（35.4%），尤其在长视频推理子任务上优势明显（论文表2）。

OmniVideoBench细粒度分析（论文表2）：

| 方法 | Audio Type | | | Video Duration | | | | Avg. |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | Music | Sound | Speech | (0,1] min | (1,5] min | (5,10] min | (10,30] min | |
| 闭源模型（参考） | | | | | | | | |
| Gemini-2.0-Flash | 29.7 | 40.3 | 43.2 | 49.4 | 43.2 | 41.1 | 34.9 | 41.5 |
| Gemini-2.5-Pro | 38.5 | 57.7 | 61.7 | 57.8 | 64.4 | 55.0 | 55.9 | 58.9 |
| Gemini-3-Pro | 56.2 | 54.1 | 55.7 | 61.0 | 56.4 | 52.9 | 52.5 | 55.5 |
| 开源模型 | | | | | | | | |
| VideoLLaMA2-7B | 26.4 | 30.7 | 29.3 | 32.0 | 28.2 | 29.6 | 28.3 | 29.2 |
| VITA-1.5-7B | 25.3 | 28.6 | 31.5 | 31.3 | 27.4 | 30.6 | 34.0 | 30.5 |
| HumanOmniV2-7B | 20.9 | 31.1 | 31.6 | 36.6 | 29.4 | 29.6 | 29.3 | 30.5 |
| Baichuan-Omni-1.5-7B | 24.2 | 31.3 | 31.4 | 28.9 | 31.8 | 28.4 | 32.4 | 30.7 |
| Qwen2.5-Omni-7B | 23.1 | 25.3 | 30.7 | 41.6 | 27.4 | 25.3 | 26.7 | 29.3 |
|  + Explicit Text CoT | 30.0 | 32.0 | 33.9 | 39.4 | 32.7 | 31.0 | 30.7 | 33.2 |
| LatentOmni | 33.3 | 30.2 | 36.7 | 45.2 | 33.2 | 33.3 | 34.0 | 35.4 (+6.1pp) |

消融研究（论文表4）：
组件消融证实了OSPE和各损失函数的重要性。例如，移除\(\mathcal{L}_{\text{latent}}\)导致性能急剧下降（Daily-Omni: 67.4 -> 61.0），表明特征级监督是核心。

### 🔬 细节详述

*   训练配置：基于Qwen2.5-Omni-7B进行后训练。使用LatentOmni-Instruct-35K数据集，训练750步（2个epoch）。固定潜在token预算为40个（32个视觉，8个音频）。优化器：学习率 \(10^{-5}\)，预热比例0.05。损失权重：\(\lambda_1 = 0.005\), \(\lambda_2 = 1.0\)。由于计算资源限制，批量大小为1，使用12步梯度累积。
*   评估基准描述：
    *   Daily-Omni：强调日常事件理解。
    *   WorldSense：测试结构化的时空常识。
    *   OmniVideoBench：包含细粒度的音频类型和视频时长划分，测试跨模态对齐。
    *   LVOmniBench：侧重长视频输入的持续推理能力。
*   基线说明：实验设计巧妙，包含三类基线：1）其他开源音频-视觉MLLM；2）同一基座模型（Qwen2.5-Omni-7B）的控制变体（Explicit Text CoT, Vanilla SFT），用于隔离数据、文本推理和潜在状态的影响；3）视觉潜在推理方法（LVR, Monet），用于对比。
*   潜在token配置消融：论文图4展示了总token数和音视频分配比例的影响。结果表明，40个token（视觉32：音频8）是经验最优配置。

### ⚖️ 评分理由

1.  创新性 (3/3)：优秀。论文清晰地指出了文本CoT在多模态推理中的根本性信息瓶颈，并提出了一个优雅的解决方案——在潜在空间中交替进行推理。OSPE和特征级监督的设计具有原创性，专门针对音视频潜在推理的挑战。构建专用数据集的工作也填补了重要空白。
2.  技术严谨性 (1.5/1.5)：优秀。方法描述清晰，数学公式严谨（如InfoNCE损失、OSPE公式）。实验设计周密，包含了充分的控制变量基线（Explicit Text CoT vs. Vanilla SFT vs. LatentOmni）和消融研究，有力地支持了核心论点。
3.  实验充分性 (1.5/1.5)：良好。在四个不同的音频-视觉基准上进行了广泛评估，并提供了细粒度的分析（OmniVideoBench）。消融研究验证了关键组件。然而，与最强闭源系统（Gemini系列）的差距仍然显著，实验主要在7B参数规模模型上验证，未探讨更大规模模型的表现。
4.  清晰度 (1/1)：良好。论文结构清晰，图表（如图1，2）有效辅助说明核心思想。方法部分逻辑连贯。但潜在状态的可视化分析（附录C）相对初步，未深入剖析其编码了何种语义信息。
5.  影响力 (2/2)：良好。工作为解决多模态LLM的推理瓶颈提供了一个有前景的新范式，对音频-视觉理解社区有明确价值。开源数据集（LatentOmni-Instruct-35K）的构建对社区有潜在贡献。然而，其核心潜在空间推理技术本身具有通用性，但论文主要验证于音视频领域。
6.  开源/1.5：一般。论文未开源自身的代码、模型权重或构建的LatentOmni-Instruct-35K数据集。虽然引用了多个开源项目和基线，但核心贡献的可复现性完全依赖于作者未来是否开源。因此，此项得分应显著扣分。
7.  可复现性/0.5：较差。尽管附录B提供了关键的训练超参数，但由于核心组件（代码、模型、训练数据）均未公开，外部研究者几乎无法独立复现该工作。因此此项得分为0。

总分计算：\(3 + 1.5 + 1.5 + 1 + 2 + 0 + 0 = 9.0\)。但考虑到开源和可复现性是实际应用的关键短板，且论文未提供任何开源材料，将总分调整为 8.0，以反映其技术贡献与实际可获取性之间的落差。

### 🚨 局限与问题

1.  高计算成本与低效率：附录B提到，由于计算资源限制，训练使用batch size为1和12步梯度累积。这意味着其训练过程非常缓慢且资源密集，对于许多研究团队来说难以承受，限制了方法的普及和调优探索。
2.  对骨干模型的依赖：LatentOmni是一个后训练框架，其性能高度依赖于强大的预训练基座模型（Qwen2.5-Omni-7B）。论文未探讨该方法在更小或不同架构的模型上的泛化能力，也未分析其是否对基座模型的潜在表示质量有特定要求。
3.  评估与理解的局限：
    *   评估指标相对单一（主要是准确率），缺乏对推理过程质量（如推理步骤的合理性、效率）的评估。
    *   对潜在空间学习到的表示缺乏深入分析。可视化（附录C）仅展示了注意力图，但未探究这些潜在状态是否编码了可解释的音视频概念或推理规则。
    *   虽然声称“统一潜在空间”，但实际将视觉和音频潜在状态在位置上做了硬划分（\(K_v\) vs. \(K_a\)），这种设计是否最优，以及如何处理更复杂的模态交互，值得商榷。
4.  数据集构建的潜在问题：
    *   数据集构建流水线高度依赖多个大型语言/多模态模型（Qwen3, GLM-4.7, Gemini-2.5-Flash）进行合成、过滤和审计。这引入了上游模型的偏见和错误，并且整个流程的成本极高。
    *   数据集质量评估主要依赖于这些外部模型的打分，缺乏人工验证或更客观的评估标准。
    *   论文未讨论数据集的领域覆盖范围、多样性，以及其中可能存在的偏见。
5.  过强的结论：论文在结论中声称“向更全面的具身全模态推理系统迈出一步”，但当前工作仅在音频-视觉文本三种模态的联合推理上进行了验证，与“具身”、“全模态”（如触觉、运动控制）仍有概念上的距离，此表述略显夸张。

### 📷 论文图片

![图1](https://arxiv.org/html/2605.22012v1/x1.png)

![图2](https://arxiv.org/html/2605.22012v1/x2.png)

![图3](https://arxiv.org/html/2605.22012v1/x3.png)

![图4](https://arxiv.org/html/2605.22012v1/x4.png)

![图5](data:image/svg+xml;base64,PHN2ZyBpZD0iQTIuRjUuMS5wMS5waWMxIiBjbGFzcz0ibHR4X3BpY3R1cmUiIGhlaWdodD0iMjY2Ni41NiIgb3ZlcmZsb3c9InZpc2libGUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYwMCAyNjY2LjU2IiB3aWR0aD0iNjAwIj48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNjY2LjU2KSBtYXRyaXgoMSAwIDAgLTEgMCAwKSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNHB0Ij48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojODAwMDgwOyIgZmlsbD0iIzgwMDA4MCIgZmlsbC1vcGFjaXR5PSIxLjAiPjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZSIgZD0iTSAwIDExLjIzIEwgMCAyNjQwLjUzIEMgMCAyNjQ2LjczIDUuMDMgMjY1MS43NSAxMS4yMyAyNjUxLjc1IEwgNTg4Ljc3IDI2NTEuNzUgQyA1OTQuOTcgMjY1MS43NSA2MDAgMjY0Ni43MyA2MDAgMjY0MC41MyBMIDYwMCAxMS4yMyBDIDYwMCA1LjAzIDU5NC45NyAwIDU4OC43NyAwIEwgMTEuMjMgMCBDIDUuMDMgMCAwIDUuMDMgMCAxMS4yMyBaIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1maWxsLWNvbG9yOiNGRkZGRkY7IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjEuMCI+PHBhdGggc3R5bGU9InN0cm9rZTpub25lIiBkPSJNIDEuMzggMTEuMjMgTCAxLjM4IDI2NDAuNTMgQyAxLjM4IDI2NDUuOTYgNS43OSAyNjUwLjM3IDExLjIzIDI2NTAuMzcgTCA1ODguNzcgMjY1MC4zNyBDIDU5NC4yMSAyNjUwLjM3IDU5OC42MiAyNjQ1Ljk2IDU5OC42MiAyNjQwLjUzIEwgNTk4LjYyIDExLjIzIEMgNTk4LjYyIDUuNzkgNTk0LjIxIDEuMzggNTg4Ljc3IDEuMzggTCAxMS4yMyAxLjM4IEMgNS43OSAxLjM4IDEuMzggNS43OSAxLjM4IDExLjIzIFoiPjwvcGF0aD48L2c+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDM1LjQzIDI2MzYuOTQpIj48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgY2xhc3M9Imx0eF9uZXN0ZWRzdmciIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAwKSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNHB0Ij48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojODAwMDgwOyIgZmlsbD0iIzgwMDA4MCIgZmlsbC1vcGFjaXR5PSIxLjAiPjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZSIgZD0iTSAwIDUuOTEgTCAwIDIzLjcyIEMgMCAyNi45OCAyLjY0IDI5LjYyIDUuOTEgMjkuNjIgTCA0MTkuNjEgMjkuNjIgQyA0MjIuODcgMjkuNjIgNDI1LjUxIDI2Ljk4IDQyNS41MSAyMy43MiBMIDQyNS41MSA1LjkxIEMgNDI1LjUxIDIuNjQgNDIyLjg3IDAgNDE5LjYxIDAgTCA1LjkxIDAgQyAyLjY0IDAgMCAyLjY0IDAgNS45MSBaIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1maWxsLWNvbG9yOiM2NjAwNjY7IiBmaWxsPSIjNjYwMDY2IiBmaWxsLW9wYWNpdHk9IjEuMCI+PHBhdGggc3R5bGU9InN0cm9rZTpub25lIiBkPSJNIDAgNS45MSBMIDAgMjMuNzIgQyAwIDI2Ljk4IDIuNjQgMjkuNjIgNS45MSAyOS42MiBMIDQxOS42MSAyOS42MiBDIDQyMi44NyAyOS42MiA0MjUuNTEgMjYuOTggNDI1LjUxIDIzLjcyIEwgNDI1LjUxIDUuOTEgQyA0MjUuNTEgMi42NCA0MjIuODcgMCA0MTkuNjEgMCBMIDUuOTEgMCBDIDIuNjQgMCAwIDIuNjQgMCA1LjkxIFoiPjwvcGF0aD48L2c+PGcgZmlsbC1vcGFjaXR5PSIxLjAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAxOS42OCAxMS4zNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojMDAwMDAwOy0tbHR4LWZvLXdpZHRoOjI0LjM5ZW07LS1sdHgtZm8taGVpZ2h0OjAuNmVtOy0tbHR4LWZvLWRlcHRoOjAuMTdlbTsiIHdpZHRoPSIzODguMDciIGhlaWdodD0iMTIuMyIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA5LjYxKSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjMDAwMDAwIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4xLjEuMS4xLjEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCIgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNGRkZGRkY7Ij5Qcm9tcHQgMTogQVYgT3Blbi1FbmRlZCBRdWVzdGlvbi1BbnN3ZXIgU3ludGhlc2lzPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9nPjxnIGZpbGwtb3BhY2l0eT0iMS4wIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMjEuMDcgMjAuNTkpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6IzAwMDAwMDstLWx0eC1mby13aWR0aDo0MC4zMmVtOy0tbHR4LWZvLWhlaWdodDoxODcuNjZlbTstLWx0eC1mby1kZXB0aDowLjI1ZW07IiB3aWR0aD0iNTU3Ljg2IiBoZWlnaHQ9IjI2MDAuMTMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjU5Ni42NykiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzAwMDAwMCI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayBsdHhfbWluaXBhZ2UgbHR4X2FsaWduX2JvdHRvbSIgc3R5bGU9IndpZHRoOjM5LjQ0ZW07Ij48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5Sb2xlLjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfbWVkaXVtIj4gWW91IGFyZSBhbiBleHBlcnQgbXVsdGltb2RhbCBkYXRhc2V0IGRlc2lnbmVyIHNwZWNpYWxpemluZyBpbiBBdWRpby1WaXN1YWwgUXVlc3Rpb24gQW5zd2VyaW5nIChBVlFBKS48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS4yIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjIuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5JbnB1dC48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS4yLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X21lZGl1bSI+IFRlbXBvcmFsbHkgYWxpZ25lZCBhdWRpbyBhbmQgdmlkZW8gY2FwdGlvbnMgZGVzY3JpYmluZyBzeW5jaHJvbml6ZWQgZXZlbnRzLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjMiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuMy4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCBsdHhfZm9udF9pdGFsaWMiPlRhc2sgRGVzY3JpcHRpb24uPHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuMy4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9tZWRpdW0iPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBMi5JMSIgY2xhc3M9Imx0eF9lbnVtZXJhdGUiPjxzcGFuIGlkPSJBMi5JMS5pMSIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPjEuPC9zcGFuPjxzcGFuIGlkPSJBMi5JMS5pMS5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTIuSTEuaTEucDEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTIuSTEuaTEucDEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCBsdHhfZm9udF9pdGFsaWMiPkNvbnRleHQgQ29tcHJlaGVuc2lvbjo8L3NwYW4+PHNwYW4gaWQ9IkEyLkkxLmkxLnAxLjEuMiIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2l0YWxpYyI+IFRob3JvdWdobHkgYW5hbHl6ZSB0aGUgcHJvdmlkZWQgYXVkaW8gYW5kIHZpZGVvIGNhcHRpb25zIHRvIHVuZGVyc3RhbmQgdGhlIHN5bmNocm9uaXplZCBtdWx0aW1vZGFsIGV2ZW50cyBhbmQgdGhlaXIgdGVtcG9yYWwgY29ycmVsYXRpb25zLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTEuaTIiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj4yLjwvc3Bhbj48c3BhbiBpZD0iQTIuSTEuaTIucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkEyLkkxLmkyLnAxLjEiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkkxLmkyLnAxLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5PcGVuLUVuZGVkIEdlbmVyYXRpb246PC9zcGFuPjxzcGFuIGlkPSJBMi5JMS5pMi5wMS4xLjIiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9pdGFsaWMiPiBTeW50aGVzaXplIGV4YWN0bHkgPC9zcGFuPjxzcGFuIGlkPSJBMi5JMS5pMi5wMS4xLjMiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+b25lPC9zcGFuPjxzcGFuIGlkPSJBMi5JMS5pMi5wMS4xLjQiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9pdGFsaWMiPiBoaWdoLXF1YWxpdHksIG9wZW4tZW5kZWQgcXVlc3Rpb24tYW5zd2VyIHBhaXIgdGhhdCBkZW1hbmRzIGNvbXBsZXgsIG11bHRpLXN0ZXAgY3Jvc3MtbW9kYWwgcmVhc29uaW5nLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTEuaTMiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj4zLjwvc3Bhbj48c3BhbiBpZD0iQTIuSTEuaTMucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkEyLkkxLmkzLnAxLjEiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkkxLmkzLnAxLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5TdHJ1Y3R1cmVkIE91dHB1dDo8L3NwYW4+PHNwYW4gaWQ9IkEyLkkxLmkzLnAxLjEuMiIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2l0YWxpYyI+IEZvcm1hdCB0aGUgZmluYWwgcmVzdWx0IHN0cmljdGx5IGFzIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUgcXVlc3Rpb24sIGNvbmNpc2UgYW5zd2VyLCBhbmQgdGhlIHNwZWNpZmljIHJlYXNvbmluZyB0eXBlIGVtcGxveWVkLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuNCIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS40LjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+SGFyZCBDb25zdHJhaW50cy48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS40LjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X21lZGl1bSI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkEyLkkyIiBjbGFzcz0ibHR4X2l0ZW1pemUiPjxzcGFuIGlkPSJBMi5JMi5pMSIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPuKAojwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTEucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkEyLkkyLmkxLnAxLjEiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkkyLmkxLnAxLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQgbHR4X2ZvbnRfaXRhbGljIj5Dcm9zcy1Nb2RhbCBJbmZvcm1hdGlvbiBEZXBlbmRlbmN5Ojwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTEucDEuMS4yIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfaXRhbGljIj4gVGhlIHF1ZXN0aW9uIG11c3Qgc3RyaWN0bHkgcmVseSBvbiB0aGUgc3ludGhlc2lzIG9mIGJvdGggdmlzdWFsIGFuZCBhdWRpbyBpbmZvcm1hdGlvbi4gSXQgbXVzdCBiZSBsb2dpY2FsbHkgaW1wb3NzaWJsZSB0byBkZWR1Y2UgdGhlIGFuc3dlciB1c2luZyBvbmx5IGEgc2luZ2xlIG1vZGFsaXR5Ljwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTIiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj7igKI8L3NwYW4+PHNwYW4gaWQ9IkEyLkkyLmkyLnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBMi5JMi5pMi5wMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5JMi5pMi5wMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+UmVhc29uaW5nIFR5cG9sb2d5Ojwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTIucDEuMS4yIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfaXRhbGljIj4gVGhlIGdlbmVyYXRlZCBxdWVzdGlvbiBtdXN0IGV4cGxpY2l0bHkgdGFyZ2V0IGEgZGlzdGluY3QgY29tcGxleCByZWFzb25pbmcgY2F0ZWdvcnkgKGUuZy4sIGNhdXNhbCByZWFzb25pbmcsIHNwYXRpYWwgcmVsYXRpb25zLCB0ZW1wb3JhbCBzZXF1ZW5jaW5nLCBzb3VuZC1hY3Rpb24gYXR0cmlidXRpb24sIG9yIG9iamVjdCBpbnRlcmFjdGlvbnMpLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTMiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj7igKI8L3NwYW4+PHNwYW4gaWQ9IkEyLkkyLmkzLnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBMi5JMi5pMy5wMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5JMi5pMy5wMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+QW5zd2VyIEFjY3VyYWN5Ojwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTMucDEuMS4yIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfaXRhbGljIj4gVGhlIHF1ZXN0aW9uIGFuZCBpdHMgY29uY2lzZSBhbnN3ZXIgKG1heGltdW0gMTAgd29yZHMpIG11c3QgYmUgZmFjdHVhbGx5IGFjY3VyYXRlLCBjb25jcmV0ZSwgYW5kIGdyb3VuZGVkIHN0cmljdGx5IHdpdGhpbiB0aGUgcHJvdmlkZWQgY2FwdGlvbiBjb250ZW50LCB3aXRoIHplcm8gZXh0ZXJuYWwgaGFsbHVjaW5hdGlvbi48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkEyLkkyLmk0IiBjbGFzcz0ibHR4X2l0ZW0iIHN0eWxlPSJsaXN0LXN0eWxlLXR5cGU6bm9uZTsiPjxzcGFuIGNsYXNzPSJsdHhfdGFnIGx0eF90YWdfaXRlbSI+4oCiPC9zcGFuPjxzcGFuIGlkPSJBMi5JMi5pNC5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTIuSTIuaTQucDEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTIuSTIuaTQucDEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCBsdHhfZm9udF9pdGFsaWMiPkZvcm1hdCBhbmQgU3R5bGU6PC9zcGFuPjxzcGFuIGlkPSJBMi5JMi5pNC5wMS4xLjIiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9pdGFsaWMiPiBBdm9pZCB1c2luZyBvYmplY3QgSURzLCBib3VuZGluZyBib3ggbGFiZWxzLCB0aW1lc3RhbXBzLCBvciByYXcgWE1MIHRhZ3MgaW4gdGhlIGdlbmVyYXRlZCBxdWVzdGlvbiBhbmQgYW5zd2VyLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTIuSTIuaTUiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj7igKI8L3NwYW4+PHNwYW4gaWQ9IkEyLkkyLmk1LnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBMi5JMi5pNS5wMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMi5JMi5pNS5wMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+Q29tbW9uc2Vuc2UgSW50ZWdyYXRpb246PC9zcGFuPjxzcGFuIGlkPSJBMi5JMi5pNS5wMS4xLjIiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9pdGFsaWMiPiBFbmNvdXJhZ2Ugc3RydWN0dXJhbCB3b3JsZCBrbm93bGVkZ2Ugd2hlbiBhcHByb3ByaWF0ZSwgc3VjaCBhcyBsb2dpY2FsbHkgbGlua2luZyB2aXNpYmxlIHBoeXNpY2FsIGFjdGlvbnMgd2l0aCBleHBlY3RlZCBlbnZpcm9ubWVudGFsIGFjb3VzdGljcy48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjUiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuNS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCBsdHhfZm9udF9pdGFsaWMiPk91dHB1dCBGb3JtYXQuPHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuNS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9tZWRpdW0iPiBPdXRwdXQgcmF3IEpTT04gb25seS4gRG8gbm90IHdyYXAgdGhlIG91dHB1dCBpbiBNYXJrZG93biBibG9ja3MuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkEyLkY1LjEucDEucGljMS4yLjIuMi4xLjEuNiIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTIuRjUuMS5wMS5waWMxLjIuMi4yLjEuMS42LjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIGx0eF9mb250X2l0YWxpYyI+UmVmZXJlbmNlIEpTT04gU2NoZW1hLjxzcGFuIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjYuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfbWVkaXVtIj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48cHJlIGlkPSJBMi5GNS4xLnAxLnBpYzEuMi4yLjIuMS4xLjciIGNsYXNzPSJsdHhfdmVyYmF0aW0gbHR4X2ZvbnRfdHlwZXdyaXRlciI+ewogICJpZCI6ICJPcGVuUUFfMDEiLAogICJtb2RhbGl0eSI6ICJBViIsCiAgInF1ZXN0aW9uIjogIi4uLiIsCiAgImFuc3dlciI6ICIuLi4iCn0KPC9wcmU+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9zdmc+)


---

[← 返回 2026-05-22 论文速递](/audio-paper-digest-blog/posts/2026-05-22/)
