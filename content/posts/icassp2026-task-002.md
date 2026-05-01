---
title: "ICASSP 2026 - 主题建模 论文列表"
date: 2026-04-29
draft: false
tags: ["主题建模"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 主题建模 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 主题建模

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [ST-HNTM: Joint Speech-Text Neural Topic Modeling on the Hype](/audio-paper-digest-blog/posts/2026-04-29-st-hntm-joint-speech-text-neural-topic-modeling) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [ST-HNTM: Joint Speech-Text Neural Topic Modeling on the Hypersphere](/audio-paper-digest-blog/posts/2026-04-29-st-hntm-joint-speech-text-neural-topic-modeling)

✅ **7.0/10** | 前25% | #主题建模 | #多模态模型 | #超球面表示 #语音理解

👥 **作者与机构**

- 第一作者：Dayu Guo†（北京师范大学-香港浸会大学联合国际学院，计算机科学系）
- 通讯作者：Wentao Fan*（北京师范大学-香港浸会大学联合国际学院，计算机科学系）
- 作者列表：Dayu Guo†（北京师范大学-香港浸会大学联合国际学院，计算机科学系），Zhiwen Luo†（康考迪亚大学，信息系统工程学院），Nizar Bouguila（康考迪亚大学，信息系统工程学院），Wentao Fan*（北京师范大学-香港浸会大学联合国际学院，计算机科学系）

💡 **毒舌点评**

该论文首次将语音与文本在超球面潜在空间中联合建模，架构设计逻辑清晰，实验结果在多项指标上显示显著提升。然而，其核心任务“主题建模”在当前AI研究中已属相对传统领域，且论文中对比的多数基线模型较为陈旧，对最新多模态或超球面主题建模方法的覆盖有限，这在一定程度上限制了其结论的前沿性和说服力。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了公开数据集LibriSpeech和TEDLIUM-Release3，但未提供定制的数据集或预处理工具。
- Demo：未提供。
- 复现材料：论文提供了一定的训练细节（优化器、学习率、轮数、超参数初始值等），但缺乏完整的代码和配置文件。
- 论文中引用的开源项目：依赖预训练词嵌入`glove-wiki-gigaword-100`和预训练语音模型`wav2vec2-base-960h`。
- 总体：论文中未提及开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  要解决什么问题：现有神经主题模型（NTMs）主要局限于文本输入，忽略了语音中丰富的语义和副语言信息。同时，基于文本的多模态主题建模也较少探索语音这一关键模态。
2.  方法核心是什么：提出ST-HNTM，一个首个在共享超球面潜在空间中联合建模语音和文本的神经主题模型。它使用词袋（BoW）和声学词袋（BoAW）分别表示文本和语音，并通过von Mises-Fisher (vMF) 先验推断统一的文档-主题分布，每个模态通过vMF混合成分解码。
3.  与已有方法相比新在哪里：首次将语音模态系统性地集成到基于超球面的神经主题建模框架中，克服了传统方法依赖易错ASR转录文本的局限性，利用原始声学模式提供互补线索。
4.  主要实验结果如何：在LibriSpeech和TEDLIUM-Release3两个基准数据集上，ST-HNTM在主题连贯性（Cv）、多样性（TD）和综合质量（Quality）指标上均优于或持平于多个先进的文本基线模型。例如，在LibriSpeech数据集上，当主题数为10时，ST-HNTM的Quality得分（0.538）显著高于次佳的NeuralLDA（0.452）。消融实验证明，超球面先验、vMF混合解码器以及语音模态的引入对性能均有贡献。
5.  实际意义是什么：展示了将语音直接融入主题建模的价值，为处理语音-文本对齐数据、丰富语义表示、以及在无法获取可靠文本转录（如低资源语言、自发语音）的场景下进行主题发现提供了新思路。
6.  主要局限性是什么：模型性能依赖于预训练的文本和语音嵌入模型（GloVe, wav2vec2）以及声学码本的质量；论文中未详细讨论对语音中说话人、情感等信息的显式建模；实验对比的基线模型部分较为陈旧，未与最新的多模态或超球面主题模型进行对比。

---

