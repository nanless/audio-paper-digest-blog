---
title: "ICLR 2026 - 脑编码 论文列表"
date: 2026-05-03
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
| 🥇 | [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response ](/audio-paper-digest-blog/posts/2026-05-03-tribe-trimodal-brain-encoder-for-whole-brain-fmri) | 8.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response prediction](/audio-paper-digest-blog/posts/2026-05-03-tribe-trimodal-brain-encoder-for-whole-brain-fmri)

🔥 **8.5/10** | 前10% | #脑编码 | #多模态模型 | #模型评估 #预训练

👥 **作者与机构**

- 第一作者：Stéphane d’Ascoli (Meta AI)
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：Stéphane d’Ascoli (Meta AI)， Jérémy Rapin (Meta AI)， Yohann Benchetrit (Meta AI)， Hubert Banville (Meta AI)， Jean-Rémi King (Meta AI)

💡 **毒舌点评**

亮点在于模型设计精巧，通过融合冻结的基础模型表征并利用Transformer进行跨时间信息整合，成功在多模态、多受试者设置下实现了对全脑响应的高精度预测，竞赛成绩的断层领先证明了其有效性。短板在于研究目前局限于fMRI信号的粗粒度脑区预测和仅4名受试者的小样本验证，距离构建真正可解释的、涵盖体素级时空动态的人脑通用模型还有很长的路要走。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/facebookresearch/algonauts-2025。
- 模型权重：论文中未提及是否公开TRIBE模型或其依赖的基础模型（Llama, Wav2Vec, V-JEPA）的权重。基础模型本身来自HuggingFace等平台，但TRIBE的具体训练权重未说明是否公开。
- 数据集：训练所用Courtois NeuroMod数据集为CC0许可，但论文未直接给出该竞赛专用子集的获取方式，应通过Algonauts 2025竞赛官方渠道获取。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练细节、超参数配置（表3）、模型架构描述以及评估指标，信息较为充分。
- 引用的开源项目：x-transformers（MIT）、nilearn（BSD）、PyTorch、Courtois NeuroMod数据集（CC0），以及三个基础模型（Video-JEPA 2：Apache， Wav2Vec-Bert-2.0：MIT， Llama-3.2-3B：llama3.2许可）。

📌 **核心摘要**

1. 问题：现有脑编码模型大多为线性、单模态、针对个体训练，无法有效建模大脑如何整合来自文本、音频、视频等多模态信息以产生统一的认知表征。
2. 方法：提出TRIBE模型，这是一个非线性的、可多受试者联合训练的多模态深度神经网络。它首先从预训练的Llama-3.2-3B（文本）、Wav2Vec-Bert-2.0（音频）和V-JEPA 2（视频）模型中提取与时间对齐的特征，然后通过一个多模态Transformer编码器对这些特征进行时序建模与融合，最后通过一个受试者特定的线性层输出对1000个脑区BOLD信号的预测。
3. 创新：与已有工作相比，TRIBE突破了线性映射、单受试者训练和单模态输入的三大限制，端到端地学习了多模态信息在大脑皮层的动态整合方式。
4. 结果：在Algonauts 2025脑编码竞赛中获得第一名（均分0.2146±0.0312），显著领先第二名（0.2096±0.20283）。消融实验证明多模态、Transformer架构和多受试者训练对性能均有显著贡献。模型能够泛化到多种分布外电影，尤其在高级联合皮层（如前额叶）中多模态带来的增益最大。
   | 排名 | 均分（±标准差） | 受试者1 | 受试者2 | 受试者3 | 受试者5 |
   | :--- | :--- | :--- | :--- | :--- | :--- |
   | 1 (Ours) | 0.2146 ± 0.0312 | 0.2381 | 0.2105 | 0.2377 | 0.1720 |
   | 2 | 0.2096 ± 0.0283 | 0.2353 | 0.2046 | 0.2268 | 0.1718 |
   | 3 | 0.2094 ± 0.0215 | 0.2233 | 0.2072 | 0.2271 | 0.1798 |
5. 意义：该工作是朝着构建统一的多模态大脑计算模型迈出的重要一步，为探索人类认知的神经基础提供了新的建模范式，并展示了利用AI基础模型解码大脑活动的可能性。
6. 局限：模型基于粗粒度的脑区划分（1000 parcels），丢失了空间细节；仅使用fMRI数据，时间分辨率有限；仅在4名受试者上验证；模型是确定性的，无法解释大脑在无外部刺激时的自发活动。

---

