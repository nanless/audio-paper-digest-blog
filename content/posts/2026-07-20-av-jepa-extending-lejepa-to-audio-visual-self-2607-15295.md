---
title: "AV-JEPA: Extending LeJEPA to Audio-Visual Self-Supervised Learning"
date: 2026-07-20
draft: false
tags: [多模态模型, 自监督学习, 音视频理解, 音频理解, Transformer]
categories: [论文速递]
description: "音视频理解 | 5.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.15295"
---

# 📄 AV-JEPA: Extending LeJEPA to Audio-Visual Self-Supervised Learning

标签：#多模态模型 #自监督学习 #音视频理解 #音频理解 #Transformer

**5.7/10** | 创新 1.4/2 | 严谨 1.3/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.6/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 0.3/1.5

📝 **5.7/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #音视频理解 | #自监督学习 | #多模态模型 #音频理解 | [arxiv](https://arxiv.org/abs/2607.15295)


### 👥 作者与机构

- 第一作者：Benjamin Robson（未说明）
- 通讯作者：未说明
- 作者列表：Benjamin Robson（未说明）、Santeri Mentu（未说明）、Wenshuai Zhao（未说明）、Arno Solin（未说明）

### 💡 毒舌点评

本文将JEPA理论优雅地扩展到音视频领域，设计极度简洁（无解码器、无EMA教师、无对比损失），并通过详尽的消融实验清晰地验证了模态dropout作为核心机制的有效性，展现了理论指导实践的良好范例。然而，其性能与当前SOTA的MAE基线存在显著差距（VGGSound 57.1% vs. 67.1%，AudioSet 32.7 vs. 53.3 mAP），且完全没有开源，使得其实际贡献和影响力大打折扣。论文更像一个精心设计的“概念验证”，而非能立即推动领域性能前进的竞争性工作。

### 📌 核心摘要

本文旨在解决音视频自监督学习中依赖复杂解码器、对比负样本和EMA教师的问题，提出将理论最优的JEPA框架（LeJEPA）扩展到跨模态场景。核心方法是利用模态dropout（将音频或视频输入置零）生成部分视图，迫使模型在潜在空间中从单模态预测联合模态表示，并通过LeJEPA损失（不变性损失+SIGReg正则化）实现对齐和防止表示坍塌。与已有方法（如AV-MAE）相比，创新在于首次将JEPA应用于跨模态音视频学习，架构极度简洁（单一共享ViT，无解码器、无EMA教师、无对比损失）。主要实验结果如下：在VGGSound上微调后达到57.1% top-1准确率，在AudioSet上达到32.7 mAP，并展示了零样本音视频检索能力（R@1约10%）。实际意义在于验证了JEPA框架用于多模态表示学习的可行性，并能形成共享的跨模态嵌入空间。主要局限是性能明显落后于基于MAE的SOTA方法，且模型表现出强烈的音频主导性。

| 方法 | 类型 | 预训练数据 | 微调数据 | 指标 | 结果 |
|------|------|------------|----------|------|------|
| AV-JEPA (Ours) | JEPA | AS-2M | VGGSound | Top-1 (Att.) | 57.1% |
| AV-JEPA (Ours) | JEPA | AS-2M | VGGSound | Top-1 (Lin.) | 56.6% |
| MAViL | MAE | AS-2M+IN | VGGSound | Top-1 | 67.1% |
| CAV-MAE | MAE | AS-2M | VGGSound | Top-1 | 65.4% |
| AV-MAE | MAE | VGGS | VGGSound | Top-1 | 63.5% |
| AV-JEPA (Ours) | JEPA | AS-2M | AS-2M | A+V mAP | 32.7 |
| AV-JEPA (Ours) | JEPA | AS-2M | AS-2M | A-only mAP | 26.0 |
| AV-JEPA (Ours) | JEPA | AS-2M | AS-2M | V-only mAP | 12.8 |
| MAViL | MAE | AS-2M+IN | AS-2M | A+V mAP | 53.3 |
| CAV-MAE | MAE | AS-2M | AS-2M | A+V mAP | 51.2 |

### 🔗 开源详情

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及模型权重链接
- 数据集：
    - **AudioSet**：约200万个YouTube视频片段，包含527个声音类别。论文未提供具体下载链接。
    - **VGGSound**：约18.4万训练集/1.5万测试集片段，包含309个音视频事件类别。论文未提供具体下载链接。
- Demo：论文中未提及Demo链接
- 复现材料：论文在附录中提供了非常详细的训练配置、超参数、架构图等，是复现的核心材料。具体包括：
    - 附录C：完整的编码器架构图（图5）。
    - 附录D：表4（微调配置）和表5（预训练配置），详细列出了优化器、学习率、批大小、训练轮数、数据增强等所有关键设置。
    - 附录L：消融实验和超参数敏感性分析的配置细节。
- 论文中引用的开源项目：
    - **AV-MAE** (Georgescu et al., 2023)
    - **CAV-MAE** (Gong et al., 2023)
    - **MAViL** (Huang et al., 2023)
    - **CAV-MAE Sync** (Araujo et al., 2025)
    - **I-JEPA** (Assran et al., 2023)
    - **V-JEPA** (Bardes et al., 2024)
    - **AudioCLIP** (Guzhov et al., 2022)
    - **ImageBind** (Girdhar et al., 2023)
    - **AST** (Gong et al., 2021)
    - **AudioMAE** (Huang et al., 2022)
    *（注：以上项目均以文献引用形式出现，论文中未提供这些项目的具体代码仓库链接。）*

### 🏗️ 方法概述和架构

AV-JEPA是一个端到端的音视频自监督预训练框架，其核心流程为：输入原始的音频和视频数据，通过早期融合的视觉Transformer进行联合编码，利用模态dropout策略生成多样化的部分视图，并在共享的潜在空间中应用LeJEPA损失进行训练，最终得到一个能够对齐跨模态表示的骨干网络。

主要组件及数据流如下：
1.  **数据输入与视图生成**：对于一个10秒的音视频片段，通过随机时间偏移裁剪得到两个**8秒的全局视图**（同时包含音视频模态，进行轻微数据增强）。另外通过**模态dropout**生成两个**局部视图**：其中一个仅保留音频（视频输入在进入编码器前被置零），另一个仅保留视频（音频输入被置零，视频还经过标准的空间增强，如随机裁剪、翻转）。因此，每个训练样本产生4个视图：2个全局视图和2个交叉模态局部视图。
2.  **早期融合音视频编码器**：这是一个共享的ViT-Base（12层，768维，12个注意力头）。输入处理流程如下：
    *   **视频流**：形状为 \(3 \times 16 \times 224 \times 224\) 的视频张量通过一个 \(2 \times 16 \times 16\) 的3D卷积层进行块嵌入，生成1568个视频token。这些token被加上可学习的、因子化的空间和时间位置编码，以及一个可学习的模态类型嵌入（ID 0）。
    *   **音频流**：重采样至16kHz的音频转换为 \(1 \times 128 \times 801\) 的梅尔频谱图，通过一个 \(16 \times 16\) 的2D卷积层进行块嵌入，生成400个音频token。这些token被加上可学习的、因子化的频率和时间位置编码，以及模态类型嵌入（ID 1）。
    *   **序列构建**：一个可学习的 `[CLS]` token被预先加入序列。随后，视频token和音频token按顺序拼接，形成长度为 \(1 + 1568 + 400 = 1969\) 的token序列，送入共享的Transformer编码器处理。**关键设计**：在局部视图中，被dropout的模态对应的原始输入（如音频的梅尔频谱图或视频的张量）在进入各自的卷积块嵌入层之前就已经被置零，因此编码器接收的是“空”输入对应的token（零向量）。
3.  **投影头**：编码器输出的 `[CLS]` token特征被送入一个3层MLP投影头（768→2048→2048→128，带BatchNorm和GELU激活函数），映射到128维的潜在嵌入空间。
4.  **LeJEPA损失函数**：在投影后的128维嵌入空间中应用LeJEPA损失：
    *   **不变性损失**：计算所有视图（\(G=2\) 个全局 + \(K=2\) 个局部）的嵌入 \(z_i\) 与全局视图嵌入均值 \(\bar{z} = \frac{1}{G}\sum_{g=1}^{G} z_g\) 的L2距离平方和。其数学形式为：\(\frac{1}{G+K}\sum_{i=1}^{G+K} \|\bar{z} - z_i\|^2\)。这迫使不同视图（特别是单模态视图）的嵌入向联合模态表示中心靠拢，从而实现跨模态对齐。
    *   **SIGReg正则化**：一种基于切片特征函数的正则化方法，通过将嵌入投影到多个随机单位方向，并将每个一元投影分布与各向同性高斯分布 \(\mathcal{N}(\mathbf{0}, \mathbf{I})\) 进行匹配（使用Epps–Pulley检验），来防止表示坍塌。
    *   最终损失是两者的加权和：\(\mathcal{L} = (1-\lambda) \mathcal{L}_{\text{invariance}} + \lambda \mathcal{L}_{\text{SIGReg}}\)，其中权重 \(\lambda=0.05\)。
5.  **在线探针**：在标记的VGGSound数据集上预训练时，会额外在冻结骨干特征上训练两个分类探针（线性探针：LayerNorm + 线性层；注意力探针：一个可学习查询，12头交叉注意力），用于监控预训练进度，但梯度被阻断，不反向传播。

**关键设计选择及动机**：
*   **模态dropout取代空间掩码**：传统JEPA（如I-JEPA）通过空间掩码生成部分视图。本文创新性地提出在音视频模态轴上进行dropout，这直接构建了一个需要从单模态预测联合模态的隐式任务，是实现跨模态对齐的核心机制。
*   **早期融合与共享编码器**：采用单一的ViT-Base同时处理音视频token序列，通过模态类型嵌入区分。相比使用独立编码器，这种设计迫使模型从第一层就开始学习跨模态交互，架构更简洁。论文的消融实验表明，其性能与双编码器变体相当。
*   **LeJEPA理论基础**：采用LeJEPA而非其他JEPA变体，是为了利用其理论证明的最优性——SIGReg目标分布（各向同性高斯）对于最小化下游预测风险是最优的，从而为表示质量提供理论保证。

下图展示了AV-JEPA的早期融合编码器架构。

![Figure 5: AV-JEPA early-fusion encoder. Video tubelets and mel-spectrogram patches are embedded, summed with factorized positional and modality-type embeddings, concatenated with a \[CLS\] token, and processed by a 1212-layer ViT-Base. The sa](https://arxiv.org/html/2607.15295v1/x6.png)

图中显示视频帧和梅尔频谱图分别通过嵌入层处理，添加位置和模态嵌入后拼接，由共享的Transformer编码器处理。

### 💡 核心创新点

1.  **首次将JEPA框架扩展至跨模态音视频学习**：这是对JEPA范式的一个重要应用拓展。之前JEPA仅用于单模态（图像、视频），本文证明了其在需要跨模态对齐的场景下的有效性，为多模态SSL提供了一个新的、理论上更优的路径。
2.  **模态dropout作为部分视图机制**：这是本文最关键的方法创新。传统方法使用空间掩码，而本文利用模态维度的dropout来创造“部分视图”，这直接构建了一个自然的跨模态预测任务，使得对齐可以在潜在空间中隐式完成，无需额外的对比损失或解码器。
3.  **早期融合共享ViT架构**：采用单一的ViT-Base同时处理音视频token，并通过模态类型嵌入区分。这种设计极为简洁，避免了双编码器+融合模块的复杂性，并在实验中证明与双编码器性能相当，体现了高效的设计。
4.  **将理论最优的损失函数用于跨模态对齐**：将LeJEPA的损失（不变性+SIGReg）直接应用于跨模态视图对齐。SIGReg在防止表示坍塌的同时，理论上保证了嵌入分布的质量，这是与使用对比学习或复杂正则化的方法的核心区别。
5.  **验证了形成共享跨模态嵌入空间的可能性**：通过零样本音视频检索实验（R@1~10%）和t-SNE可视化，论文证实了即使没有显式的检索监督，模型也能自发形成语义对齐的、共享的跨模态嵌入空间，这为下游的跨模态应用奠定了基础。

下图展示了AV-JEPA在三个VGGSound测试片段上的跨模态注意力可视化。

![Figure 4: Cross-modal attention on three VGGSound test clips (guitar, flute, bird). Last-layer audio→\\tovideo attention overlaid on RGB frames (V); video→\\toaudio attention overlaid on mel spectrograms (A). The model attends to the visually](https://arxiv.org/html/2607.15295v1/attention_diagrams/audio_video_combined/guitar.png)

模型通过最后一层注意力将音频注意力叠加到视频帧上，视频注意力叠加到梅尔频谱图上，显示其关注视觉上显著的声音源和声音的谐波/时间结构。

### 📊 实验结果

论文在VGGSound和AudioSet两个主要基准上评估了AV-JEPA的性能，并展示了其零样本跨模态检索能力。主要实验结果汇总如下。

下图比较了ViT-Small与ViT-Base骨干在VGGSound预训练中的动态。

![Figure 19: ViT-Small backbone vs. the ViT-Base baseline on VGGSound pretraining. All three loss components and the embedding standard deviation track the baseline curves within a small offset, indicating that the LeJEPA recipe transfers to](https://arxiv.org/html/2607.15295v1/x27.png)

图中给出了线性/注意力探针精度、三项训练损失与嵌入标准差随训练轮次的变化；ViT-Small整体跟随ViT-Base基线，仅存在小幅偏移，说明LeJEPA训练配方可迁移到更小的骨干网络。


### 音视频分类
**表1：VGGSound音视频分类性能比较。** AV-JEPA是首个JEPA方法。顶部（Headline）是在AudioSet-2M预训练的骨干上微调VGGSound的结果；中间报告了仅使用VGGSound进行预训练的受控研究；底部列出了已发表的基于MAE的基线方法。

| 方法 | 类型 | 预训练数据 | 预训练+微调轮次 | 评估方式 | Top-1准确率 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AS-2M → VGGS 微调 (我们的工作，核心结果) | | | | | |
| AV-JEPA (ours) | JEPA | AS-2M | 57+13 | FT (Att.) | 57.1 |
| AV-JEPA (ours) | JEPA | AS-2M | 57+13 | FT (Lin.) | 56.6 |
| 受控的VGGS-only研究 (我们的工作) | | | | | |
| AV-JEPA (ours) | JEPA | VGGS | 50+6 | FT | 49.8 |
| AV-JEPA (ours) | JEPA | VGGS | 50 | Att. (冻结) | 48.6 |
| AV-JEPA (ours) | JEPA | VGGS | 50 | Lin. (冻结) | 46.0 |
| 文献中的基线 | | | | | |
| MAViL | MAE | AS-2M+IN | 80+60 | FT | 67.1 |
| CAV-MAE | MAE | AS-2M | 25+10 | FT | 65.4 |
| AV-MAE | MAE | VGGS | 800+50 | FT | 63.5 |
| CAV-MAE Sync | MAE | AS-2M | 25 | Lin. (冻结) | 52.7 |

**表2：AudioSet评估集上的音视频mAP。** AV-JEPA在完整的AS-2M集（约29个epoch）和平衡的AS-20k子集（约46个epoch）上进行了端到端微调，并报告了推理时按模态（仅音频、仅视频）评估的结果。“轮次”列指AudioSet-2M预训练的轮次。基线报告联合A+V mAP。†表示线性探针。

| 方法 | 类型 | 预训练数据 | 预训练轮次 | 评估模式 | AS-2M | AS-20k |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 端到端微调 (我们的工作) | | | | | | |
| AV-JEPA | JEPA | AS-2M | 57 | A+V | 32.7 | 29.6 |
| AV-JEPA | JEPA | AS-2M | 57 | 仅音频 | 26.0 | 23.7 |
| AV-JEPA | JEPA | AS-2M | 57 | 仅视频 | 12.8 | 10.3 |
| 基线 (端到端微调) | | | | | | |
| AV-MAE | MAE | AS-2M | 100 | A+V | 47.3 | – |
| CAV-MAE | MAE | AS-2M | 25 | A+V | 51.2 | 42.0 |
| MAViL | MAE | AS-2M+IN | 80 | A+V | 53.3 | 44.9 |
| CAV-MAE Sync | MAE | AS-2M | – | A+V | – | 30.5† |

### 零样本跨模态检索
**表3：VGGSound和AudioSet评估子集上的跨模态检索性能（平衡的每类5个样本）。** 报告基于投影的[CLS]嵌入的Recall@k (%) 和中位数排名，覆盖两个方向。

| 数据集 | 方向 | R@1 | R@5 | R@10 | 中位数排名 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| VGGSound | A→V | 10.61 | 26.34 | 35.40 | 25 |
| (N=1545) | V→A | 10.16 | 27.38 | 36.89 | 24 |
| AudioSet | A→V | 10.62 | 26.34 | 35.47 | 25 |
| (N=2015) | V→A | 11.16 | 26.14 | 35.91 | 25 |

### 关键结论分析
1.  **可竞争的分类性能，但与SOTA存在差距**：作为首个JEPA模型，AV-JEPA在VGGSound上通过注意力探针达到57.1% top-1准确率，在AudioSet上达到32.7 mAP，证明了JEPA框架用于音视频表示学习的可行性。然而，与基于MAE的最先进方法（VGGSound 63-67%， AudioSet 42-53 mAP）相比，存在显著差距。论文将此差距归因于MAE方法所依赖的解码器、对比损失，以及更长的预训练时间（如AV-MAE预训练800轮）或额外的预训练数据（如MAViL使用ImageNet）。

2.  **强烈的音频主导性**：在AudioSet上的逐模态评估显示，仅音频输入的mAP（26.0）远高于仅视频输入的mAP（12.8）。这表明JEPA目标函数学到的表征主要由音频信息驱动，视觉信息的利用不足。

3.  **有效的跨模态对齐与零样本检索能力**：尽管分类性能有差距，但模型展现出良好的跨模态对齐能力。在零样本跨模态检索任务中，R@10指标在VGGSound和AudioSet上均达到约36%，远高于随机水平（约0.06%），证明了模型能够形成一个共享的、具有语义对齐特性的音视频嵌入空间，无需任何对比训练或配对检索监督。

4.  **消融研究的关键发现**：附录中的消融实验证实了核心组件的必要性：移除SIGReg会导致表示坍塌；移除不变性损失则无法实现跨模态对齐；模态dropout是构建非平凡预测任务的关键。此外，共享编码器与双编码器变体效果相当，且方法对超参数（λ, K）和模型规模（ViT-S）表现出鲁棒性。

### 🔬 细节详述

- **训练数据**：AudioSet-2M（约200万YouTube片段，527类），VGGSound（约18.4万训练片段，309类）。音频重采样至16kHz，转为128×801梅尔频谱图；视频为3×16×224×224。
- **损失函数**：LeJEPA损失：\(\mathcal{L} = (1-\lambda) \frac{1}{G+K}\sum_{i=1}^{G+K}\|\bar{z} - z_i\|^2 + \lambda \text{SIGReg}(\{z_i\})\)。\(\lambda=0.05\)。SIGReg通过向随机方向投影并与高斯分布匹配来防止坍塌。
- **训练策略**：优化器AdamW，学习率5e-4，权重衰减0.05，线性warmup（15%训练时长）后余弦衰减至1e-6，梯度裁剪5.0。AudioSet-2M预训练57个epoch，batch size 320。微调时，头部学习率2e-4，骨干学习率1e-5（0.05倍头部），warmup 5%，余弦衰减至1e-7。
- **关键超参数**：模型为ViT-Base（12层，768维，12头）。\(G=2\)个全局视图，\(K=2\)个局部视图。投影头MLP：768→2048→2048→128。
- **训练硬件**：预训练在8块NVIDIA H200 GPU上进行，使用DDP和bf16混合精度，耗时约192小时。
- **推理细节**：分类时使用6个片段平均logits。检索时计算音视频单模态嵌入的余弦相似度。
- **正则化/训练技巧**：在线探针（线性、注意力）在预训练时监控性能，但梯度被阻断。使用模态dropout和视频的随机裁剪/翻转作为数据增强。

下图展示了架构消融实验：共享编码器与双编码器在VGGSound预训练中的性能比较。

![Figure 13: Architectural ablation: shared vs. dual encoder on VGGSound pretraining. Linear-/attentive-probe top-1 accuracy, embedding standard deviation, invariance loss, SIGReg loss, and total LeJEPA loss are plotted against pretraining ep](https://arxiv.org/html/2607.15295v1/x21.png)

图中显示线性探针、注意力探针精度、嵌入标准差等指标，表明共享编码器与双编码器变体效果相当。

### ⚖️ 评分理由

*   创新性 (1.4/2)：首次将JEPA理论框架从单模态视觉扩展到跨模态音视频学习，提出模态dropout作为核心视图生成机制（取代空间掩码），创新性显著（账本[A_SUMMARY]、[A_METHOD]）。

*   技术严谨性 (1.3/1.5)：方法理论基础扎实（LeJEPA/SIGReg），并通过详尽的消融实验（移除SIGReg导致坍塌、移除不变性损失则无法对齐、移除模态dropout则任务退化）验证了各组件有效性（账本[A_METHOD]、[S_TAIL]）。

*   实验充分性 (1.0/1.5)：在两个音视频基准上进行了主实验、受控研究及零样本检索评估，并包含架构与超参数消融。但缺乏更多下游任务或跨领域数据集的验证，实验范围有限（账本[A_RESULTS]、[A_LIMITS]）。

*   清晰度 (0.8/1)：论文结构清晰，从问题、方法、实验到讨论逻辑连贯。附录提供了极其详尽的架构图、训练配置、超参数和消融细节，写作质量高（账本[A_METHOD]、[A_OPEN]、[S_TAIL]）。

*   影响力 (0.6/1.5)：验证了JEPA范式用于多模态表示学习的可行性，理论上有启发。但性能与SOTA（MAE系列）存在显著差距，且模型表现出强烈音频主导性，限制了其在音视频领域的实际影响力（账本[A_SUMMARY]、[A_LIMITS]）。

*   开源 (0.0/1.5)：论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：论文附录提供了非常详细的训练配置、超参数、架构图等复现材料（账本[A_OPEN]），大部分配置充分。但缺少部分关键细节（如精确的硬件环境配置、完整的代码级复现步骤）。

*   工程/实践价值 (0.3/1.5)：提供了一个架构简洁（单一共享ViT）、流程清晰（模态dropout+LeJEPA损失）的端到端音视频自监督训练框架，并展示了实际的分类和检索能力（账本[A_METHOD]、[A_RESULTS]）。

### 🚨 局限与问题

**论文明确承认的局限**：
1.  **音频主导性**：模型在音频和视频单模态推理时，性能差异巨大（AudioSet上26.0 vs 12.8 mAP），表明其学习到的表示主要由音频驱动，视觉信息利用不足。
2.  **与SOTA的性能差距**：与基于MAE和对比学习的SOTA方法相比，在VGGSound和AudioSet上的分类性能存在明显差距。
3.  **未来工作方向**：作者提出需要更长的预训练、更大的ViT、初始化视觉流、与单模态SSL方法对比、以及扩展到文本/光流等。

**审稿人发现的潜在问题**：
1.  **完全不开源**：这是最严重的问题。在强调可复现性的当代ML研究中，缺乏代码和模型使得论文的贡献难以被独立验证和深入评估，降低了其可信度和影响力。
2.  **跨数据集验证不足**：仅VGGSound和AudioSet两个相关度高的数据集。在更广泛的下游任务（如音视频问答、字幕生成）或领域外数据上的泛化能力未知。
3.  **模态dropout的局限性**：将模态输入简单置零可能不是最优的部分视图生成方式。它可能丢失了模态间的细粒度时序对齐信息，这或许是性能不及MAE方法的原因之一。
4.  **探针评估的潜在偏差**：论文主要使用线性探针和注意力探针评估特征，这并不能完全反映特征在复杂下游任务中的效用。
5.  **对“对齐”的评估较为初步**：虽然通过检索和可视化展示了跨模态对齐，但这种对齐的质量和层次（是低级统计对齐还是高级语义对齐）缺乏更定量的分析。

---

[← 返回 2026-07-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-20/)
