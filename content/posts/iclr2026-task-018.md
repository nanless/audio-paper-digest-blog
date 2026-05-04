---
title: "ICLR 2026 - 脑编码 论文列表"
date: 2026-05-04
draft: false
tags: ["脑编码"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 脑编码 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 脑编码

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response ](/audio-paper-digest-blog/posts/2026-05-04-tribe-trimodal-brain-encoder-for-whole-brain-fmri) | 9.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response prediction](/audio-paper-digest-blog/posts/2026-05-04-tribe-trimodal-brain-encoder-for-whole-brain-fmri)

🔥 **9.5/10** | 前10% | #脑编码 | #预训练 | #多模态模型 #Transformer

👥 **作者与机构**

- 第一作者：Stéphane d‘Ascoli（Meta AI）
- 通讯作者：未说明
- 作者列表：Stéphane d‘Ascoli（Meta AI）、Jérémy Rapin（Meta AI）、Yohann Benchetrit（Meta AI）、Hubert Banville（Meta AI）、Jean-Rémi King（Meta AI）

💡 **毒舌点评**

亮点在于其工程与科学的完美结合：它不仅是竞赛刷榜利器，更通过严谨的消融实验证明了“多模态整合”在高级联合皮层的关键作用，为构建统一认知模型提供了方法论和实证支持。短板则是其对数据和算力的极度依赖（80小时/被试fMRI，128 GPU特征提取）以及仅在4名被试上验证的结论，这在一定程度上限制了其普适性的即时说服力。

🔗 **开源详情**

- 代码：提供了代码仓库链接：`https://github.com/facebookresearch/algonauts-2025`。
- 模型权重：论文中未提及是否公开TRIBE模型或特征提取模型的权重。
- 数据集：使用了公开的Courtois NeuroMod数据集（CC0许可），并说明为Algonauts 2025竞赛选择了4名被试的子集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详尽的复现信息，包括完整的超参数表（表3）、数据处理流程、评估指标定义、训练细节（优化器、学习率调度、SWA、模态丢弃等），以及硬件规格。
- 论文中引用的开源项目：明确列出了使用的开源模型和工具，包括：Llama 3.2（Meta）、Wav2Vec-Bert 2.0（Hugging Face）、V-JEPA 2（Meta， Apache协议）、x-transformers包（MIT协议）、nilearn（BSD协议）、PyTorch。

📌 **核心摘要**

1.  要解决的问题：传统神经科学研究局限于单模态、单脑区的碎片化模型，而现有的脑编码模型存在线性映射假设过强、仅支持单主体训练、且大多局限于单模态刺激输入三大限制，阻碍了构建统一的全脑认知模型。
2.  方法核心：提出TRIBE，一种深度神经网络，它将文本（Llama 3.2）、音频（Wav2Vec-Bert）和视频（V-JEPA 2）基础模型的预训练表征作为输入，通过一个Transformer编码器来建模其时间动态和跨模态整合，最终预测全脑的fMRI反应。
3.  新在哪里：与之前工作相比，TRIBE首次实现了同时是非线性的、多主体的、多模态的端到端脑编码。它超越了简单的线性映射，并允许在多个被试的数据上联合训练一个共享模型。
4.  主要实验结果：TRIBE在Algonauts 2025脑编码竞赛中获得第一名（267个团队），平均Pearson相关系数为0.2146，显著领先第二名（见表1）。消融实验表明，多模态模型（0.31）显著优于最佳单模态模型（视频0.25），且这种优势在前额叶、顶叶等高级联合皮层最为明显（见图4）。模型能够预测所有1000个脑区，并在多种高度分布外的电影上展现出鲁棒性（见表2）。
5.  实际意义：为神经科学提供了一个统一的建模框架，使得从多模态自然刺激预测全脑活动成为可能，有望推动对知觉、理解等认知过程的整体性研究，并为“计算机实验”提供新工具。
6.  主要局限性：当前模型基于粗粒度的脑区分割（1000个区域），损失了精细的空间信息；仅使用了fMRI数据，无法捕捉快速的神经电活动；目前仅在4名被试上进行训练和验证。

---

