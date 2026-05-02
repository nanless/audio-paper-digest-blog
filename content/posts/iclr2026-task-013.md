---
title: "ICLR 2026 - 脑编码 论文列表"
date: 2026-05-02
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
| 🥇 | [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response ](/audio-paper-digest-blog/posts/2026-05-02-tribe-trimodal-brain-encoder-for-whole-brain-fmri) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response prediction](/audio-paper-digest-blog/posts/2026-05-02-tribe-trimodal-brain-encoder-for-whole-brain-fmri)

✅ **7.5/10** | 前25% | #脑编码 | #多模态模型 | #音频事件检测 #预训练

👥 **作者与机构**

- 第一作者：Stéphane d‘Ascoli（Meta AI）
- 通讯作者：未明确说明（根据邮箱格式，所有作者邮箱均为个人邮箱，无明确标注通讯作者）
- 作者列表：Stéphane d‘Ascoli（Meta AI）、Jérémy Rapin（Meta AI）、Yohann Benchetrit（Meta AI）、Hubert Banville（Meta AI）、Jean-Rémi King（Meta AI）

💡 **毒舌点评**

这篇论文在Algonauts竞赛中大获全胜，其“端到端多模态”的设计理念确实击中了当前脑编码模型的痛点，将不同模态的信息整合从一个线性后处理步骤提升到了模型的核心。然而，对于一篇旨在“通向整合认知模型”的工作，其核心Transformer编码器的细节（如注意力机制如何具体捕捉跨模态和跨时间信息）描述过于简略，宛如一个黑箱，这与论文宣称的“非线性”优势相称却不够透明。

🔗 **开源详情**

- 代码：是。论文提供了代码仓库链接：https://github.com/facebookresearch/algonauts-2025。
- 模型权重：未提及。论文中未明确说明TRIBE模型本身的预训练权重是否公开，仅提到了所使用的预训练基础模型（Llama, Wav2Vec-Bert, V-JEPA 2）的来源和许可证。
- 数据集：未直接公开。论文使用的Courtois NeuroMod数据集有其自身的获取渠道（CC0许可证），但论文未提供直接下载链接。
- Demo：未提及。
- 复现材料：是。论文提供了详细的训练策略、超参数表格（表3）、硬件配置和模型架构描述，结合开源代码，复现细节较为充分。
- 论文中引用的开源项目：
    - 预训练模型：Llama-3.2-3B， Wav2Vec-Bert-2.0， V-JEPA 2。
    - 软件库：x-transformers， nilearn， PyTorch。
    - 数据集：Courtois NeuroMod。
- 论文中未提及开源计划：未提及模型权重的开源计划，未提及数据集的直接下载方式。

📌 **核心摘要**

这篇论文旨在解决传统脑编码模型局限于单模态、线性映射和被试特异性的问题，致力于构建一个能够统一预测不同大脑区域、不同个体对多模态刺激（视频）反应的通用模型。其核心方法是TRIBE模型，它分别从预训练的视频、音频和文本大模型中提取动态特征，并通过一个Transformer编码器融合这些特征，最后结合一个被试特定层来预测全脑1000个区域的fMRI BOLD信号。与已有方法相比，TRIBE的新颖之处在于它是首个同时实现了非线性融合（通过Transformer）、多被试联合训练和多模态输入的端到端脑编码模型。在Algonauts 2025竞赛中，TRIBE取得了第一名（平均编码分数0.2146），显著领先于其他团队。消融实验证明了多模态融合在高级联合皮层（如前额叶、顶枕颞叶皮层）的显著增益，以及Transformer和多被试训练的关键作用。该工作表明，多模态信息整合对于准确预测全脑活动至关重要，为构建整合性的人脑表征模型铺平了道路。其主要局限性在于：1) 在1000个脑区的粗粒度上建模，空间分辨率有限；2) 仅处理fMRI数据，缺乏更精确的时间分辨率；3) 仅基于4名被试的数据训练，泛化到新被试的能力尚未验证。

---

