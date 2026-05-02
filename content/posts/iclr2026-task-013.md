---
title: "ICLR 2026 - 神经预测 论文列表"
date: 2026-05-03
draft: false
tags: ["神经预测"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 神经预测 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 神经预测

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response ](/audio-paper-digest-blog/posts/2026-05-03-tribe-trimodal-brain-encoder-for-whole-brain-fmri) | 9.1分 | 前10% |

---

## 📋 论文详情

### 🥇 [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response prediction](/audio-paper-digest-blog/posts/2026-05-03-tribe-trimodal-brain-encoder-for-whole-brain-fmri)

🔥 **9.1/10** | 前10% | #神经预测 | #多模态模型 | #预训练 #迁移学习

👥 **作者与机构**

- 第一作者：Stéphane d’Ascoli (Meta AI)
- 通讯作者：未说明（论文中所有作者邮箱均指向meta.com，但未明确指定通讯作者）
- 作者列表：Stéphane d’Ascoli (Meta AI)、Jérémy Rapin (Meta AI)、Yohann Benchetrit (Meta AI)、Hubert Banville (Meta AI)、Jean-Rémi King (Meta AI)

#

💡 **毒舌点评**

亮点：这篇论文首次将端到端、非线性、多模态和多被试这四个关键特性整合进一个脑编码模型，堪称该领域的“集大成者”，并在顶级竞赛中用实打实的结果证明了其有效性。短板：模型目前预测的是1000个粗粒度脑区的平均信号，牺牲了空间分辨率，无法捕捉毫米级的精细神经活动，这在未来可能成为理解复杂认知功能的瓶颈。

#

🔗 **开源详情**

*   代码：提供。论文提供了一个可运行的代码库链接（https://anonymous.4open.science/r/algonauts-2025-C63E）和一个公开的GitHub仓库（https://github.com/facebookresearch/algonauts-2025）。
*   模型权重：未提及。论文未明确说明是否公开TRIBE模型本身的预训练权重。
*   数据集：未提供。训练使用的Courtois NeuroMod数据集是公开的（CC0协议），但论文未提供直接的获取链接。竞赛的测试数据由Algonauts 2025提供。
*   Demo：未提及。
*   复现材料：非常充分。论文给出了详细的训练细节、所有超参数（表3）、优化设置、集成策略，并附有完整的复现代码。
*   论文中引用的开源项目：Llama-3.2-3B (Meta), Wav2Vec-Bert-2.0, V-JEPA 2, x-transformers, nilearn, PyTorch, Courtois NeuroMod数据集。

📌 **核心摘要**

1. 要解决什么问题：传统神经科学研究和现有的脑编码模型存在三大局限：线性假设、单被试特异性、单模态输入。这导致模型无法真实反映人脑如何非线性地、跨区域地整合来自视觉、听觉和语言等多模态信息，以形成统一的感知。
2. 方法核心是什么：提出TRIBE模型，它首先利用三个预训练的基础模型（Llama-3.2-3B文本、Wav2Vec-Bert-2.0音频、V-JEPA 2视频）分别提取输入刺激的多层动态嵌入。然后，通过一个Transformer编码器处理这些时间序列嵌入，学习模态间和时间上的复杂交互。最后，通过一个被试条件层，实现一个模型同时预测多名被试的全脑（1000个脑区）fMRI响应。
3. 与已有方法相比新在哪里：首次在脑编码任务中实现了端到端的多模态、多被试、非线性建模。它放弃了传统的线性回归映射，让模型自主学习如何从AI模型表征到大脑活动的最佳映射。此外，创新性地引入“模态丢弃”训练策略，提升了模型对单一模态缺失的鲁棒性。
4. 主要实验结果如何：
    *   在Algonauts 2025竞赛中，TRIBE以0.2146 ± 0.0312的平均编码分数获得第一名，显著领先第二名（0.2096 ± 0.0283）。关键结果见下表：
    | 排名 | 平均分数 | Subject 1 | Subject 2 | Subject 3 | Subject 5 |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | 1 (Ours) | 0.2146 ± 0.0312 | 0.2381 | 0.2105 | 0.2377 | 0.1720 |
    | 2 | 0.2096 ± 0.0283 | 0.2353 | 0.2046 | 0.2268 | 0.1718 |
    *   模型能成功预测全脑所有1000个脑区的活动（统计显著，q(FDR) < 10⁻³），并在听觉和语言皮层达到噪声天花板的80%以上。
    *   消融实验表明，多模态（A+T+V: 0.31）显著优于最佳双模态（T+V: 0.30）、最佳单模态（V: 0.25），而移除Transformer（0.23）或多被试训练（0.29）会导致性能大幅下降。
    *   模型对训练数据量和语言上下文长度表现出良好的缩放特性（图6b，6c）。
5. 实际意义是什么：该工作为构建统一的、整合的人脑认知计算模型迈出了关键一步。它提供了一个强大的工具，用于在自然情境下研究多感官整合、理解复杂认知过程（如心智理论、幽默理解），并推动“硅基实验”范式，即通过高精度的计算模型预测来补充和指导活体神经实验。
6. 主要局限性是什么：模型输出为空间粗粒度的脑区平均信号，无法解析精细的神经环路；仅基于fMRI数据，时间分辨率有限；当前仅适用于4名被试，其泛化到更广泛人群的能力有待验证；模型是确定性的，无法捕捉静息态等自发脑活动；目前仅建模了感知和理解过程，未纳入行为、记忆和决策等认知成分。

---

