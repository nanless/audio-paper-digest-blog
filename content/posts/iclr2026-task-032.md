---
title: "ICLR 2026 - 跨模态 论文列表"
date: 2026-05-03
draft: false
tags: ["跨模态"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 跨模态 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 跨模态

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response ](/audio-paper-digest-blog/posts/2026-05-03-tribe-trimodal-brain-encoder-for-whole-brain-fmri) | 8.5分 | 前10% |
| 🥈 | [Better Together: Leveraging Unpaired Multimodal Data for Str](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response prediction](/audio-paper-digest-blog/posts/2026-05-03-tribe-trimodal-brain-encoder-for-whole-brain-fmri)

🔥 **8.5/10** | 前10% | #跨模态 | #多模态模型 | #预训练 #音频事件检测

👥 **作者与机构**

- 第一作者：Stéphane d’Ascoli（Meta AI）
- 通讯作者：未明确说明（所有作者均标注为Meta AI，通常按作者顺序第一作者或资深作者通讯，但文中未明确标注“通讯作者”）
- 作者列表：Stéphane d’Ascoli（Meta AI）、Jérémy Rapin（Meta AI）、Yohann Benchetrit（Meta AI）、Hubert Banville（Meta AI）、Jean-Rémi King（Meta AI）

#

💡 **毒舌点评**

亮点：该工作首次将文本、音频、视频三种模态的基础模型表示整合到一个端到端的深度编码框架中，统一预测全脑fMRI响应，这种“三管齐下”的设计在神经科学建模中具有里程碑意义，并在Algonauts 2025竞赛中证明了其有效性。短板：模型的性能天花板可能受限于其仅依赖4名被试的数据（Courtois NeuroMod子集），且预测目标被限定在1000个脑区图谱，牺牲了体素级的精细空间分辨率，这对理解大脑局部功能特异性是一个局限。

#

🔗 **开源详情**

- 代码：提供了代码仓库链接：`https://github.com/facebookresearch/algonauts-2025`。
- 模型权重：论文中未提及公开TRIBE模型本身的权重。
- 数据集：训练数据基于Courtois NeuroMod数据集（CC0协议，可公开获取），竞赛评估数据来自Algonauts 2025挑战赛（需要申请）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常充分的复现细节，包括：完整的代码仓库、详尽的超参数表格（表3）、数据预处理流程、训练策略（优化器、学习率、早停、集成方法）以及使用的开源模型链接。
- 论文中引用的开源项目：依赖的主要开源项目包括：Llama-3.2-3B、Wav2Vec-Bert-2.0、Video-JEPA 2、x-transformers、nilearn、PyTorch。

📌 **核心摘要**

1. 要解决什么问题：传统神经科学研究与现有AI脑编码模型存在“碎片化”问题，即局限于单模态（如仅视觉或语言）、线性假设和个体特异性，无法模拟大脑在自然情境下对多模态信息的动态整合。
2. 方法核心是什么：TRIBE（TRImodal Brain Encoder）模型。它分别从视频、音频、文本中提取预训练基础模型（V-JEPA 2, Wav2Vec-Bert-2.0, Llama-3.2-3B）的中间层表示，通过模态特定的前馈网络进行对齐和压缩，然后馈入一个Transformer编码器以建模时间动态，最终通过一个“受试者条件层”输出对每个脑区的fMRI信号预测。
3. 与已有方法相比新在哪里：突破了现有编码模型的三大限制：（1）使用深度神经网络而非线性回归，实现非线性编码；（2）通过一个包含所有被试的统一模型进行多被试训练，利用了大脑间的共性；（3）同时融合文本、音频和视频三模态信息，并让模型学习它们之间的交互，尤其在联想皮层获益最大。
4. 主要实验结果如何：在Algonauts 2025竞赛中，以平均编码分数0.2146 ± 0.0312取得第一名（共267支队伍），显著领先第二名（0.2096）。消融实验表明，三模态模型（0.31）显著优于任何单模态（文本0.22，音频0.24，视频0.25）和双模态组合（最佳为文本+视频0.30）模型。模型还能泛化到分布外数据（如无声电影、动画片），并在全脑1000个脑区上均达到统计显著的预测（q(FDR) < 10⁻³）。
    *   关键数据表（竞赛排名）：
        | 排名 | 平均分数（±标准差） | Subject 1 | Subject 2 | Subject 3 | Subject 5 |
        | :--- | :--- | :--- | :--- | :--- | :--- |
        | 1 (Ours) | 0.2146 ± 0.0312 | 0.2381 | 0.2105 | 0.2377 | 0.1720 |
        | 2 | 0.2096 ± 0.0283 | 0.2353 | 0.2046 | 0.2268 | 0.1718 |
        | 3 | 0.2094 ± 0.0215 | 0.2233 | 0.2072 | 0.2271 | 0.1798 |
5. 实际意义是什么：该研究推动了从“分割式”神经科学向“整合式”认知建模的范式转变，为构建能够预测大脑整体活动的计算模型奠定了基础。这种模型未来可用于虚拟神经科学实验、评估认知理论，或作为理解人类感知与理解过程的强大工具。
6. 主要局限性是什么：（1）数据规模：仅使用4名被试的数据训练，可能限制模型的泛化能力；（2）空间分辨率：预测目标为1000个脑区，而非单个体素，丢失了精细空间信息；（3）未建模内源性活动：模型只能从外部刺激预测响应，无法解释大脑在无刺激时的自发活动（如默认模式网络）；（4）确定性预测：无法捕捉大脑反应中的随机变异性。

#

---

### 🥈 [Better Together: Leveraging Unpaired Multimodal Data for Stronger Unimodal Models](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal)

✅ **7.5/10** | 前25% | #跨模态 | #自监督学习 | #多模态模型 #音频分类

👥 **作者与机构**

- 第一作者：Sharut Gupta（MIT CSAIL）
- 通讯作者：未说明（论文未明确指定通讯作者，但通常最后一位作者Phillip Isola（MIT CSAIL）可能是通讯作者）
- 作者列表：Sharut Gupta（MIT CSAIL）、Shobhita Sundaram（MIT CSAIL）、Chenyu Wang（MIT CSAIL）、Stefanie Jegelka（TU Munich, MIT CSAIL）、Phillip Isola（MIT CSAIL）

💡 **毒舌点评**

这篇论文的亮点在于其理论分析与丰富实验的紧密结合，以严谨的方式论证了“未配对数据也能有用”这一直觉，实验覆盖面广且结果一致。短板则在于其方法的核心（权重共享）过于简单，更像是一个观察性发现而非一套完整的解决方案；并且论文承认未深入探讨梯度干扰等优化问题，这在实际应用中可能是致命的。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：使用的是公开数据集（MultiBench, ImageNet系列， ESC-50等），但论文未提供其处理后的数据版本。
- Demo：未提及。
- 复现材料：附录提供了非常详细的实验协议、超参数搜索范围、数据构建方法（特别是文本模板生成）和部分算法伪代码（Algorithm 1， 2）。
- 论文中引用的开源项目：依赖预训练的视觉和语言模型，如DINOv2， CLIP， OpenLLaMA， BERT， GPT-2， AudioCLIP。

📌 **核心摘要**

1. 问题：传统多模态学习依赖昂贵且有限的配对数据（如图像-文本对）来学习更好的表示。论文探索一个更基础的问题：能否利用大量易得但未配对的辅助模态数据（如独立的文本语料库）来直接提升目标模态（如图像）模型的性能？
2. 方法核心：提出UML（Unpaired Multimodal Learner），一个模态无关的训练范式。它使用一个共享网络处理来自不同模态的输入，参数通过权重共享在模态间传递信息，无需显式对齐或成对数据。训练可以是自监督（预测重建）或监督（共享分类器）模式。
3. 创新点：与依赖配对数据或显式对齐的先前工作不同，UML证明了仅通过权重共享，未配对数据就能带来严格的信息增益。论文在线性假设下给出了理论证明（基于Fisher信息量），表明未配对数据能减少共享参数的估计方差。
4. 主要实验结果：在多个基准测试上，UML consistently improves unimodal representations：
    - 自监督设置（MultiBench等数据集）：在5个数据集上，UML（图像+文本）相比纯图像模型平均提升约2.5个百分点（例如MUSTARD从59.66%提升至63.28%）。
    - 监督设置（9个视觉分类数据集）：在全量微调下平均准确率从81.54%提升至83.99%；在1-shot小样本学习下从45.52%提升至51.36%。
    - 扩展至音频：在ImageNet-ESC数据集上，使用未配对的图像和文本数据能提升音频分类性能。
    - 迁移学习：使用预训练BERT权重初始化视觉Transformer，在ImageNet上显著优于从头训练。
    - 模态转换率：量化了1张图像约等于228-1034个词（取决于编码器对齐程度）的性能等价关系。
5. 实际意义：为如何利用海量未配对数据提升模型性能提供了理论和实践框架，尤其适用于获取配对数据成本高的领域（如医疗、科学）。
6. 主要局限性：理论分析依赖线性数据生成假设；方法未明确处理梯度干扰、模态冲突等优化挑战；下游评估主要集中在分类任务；论文未提供代码或模型权重。

---

