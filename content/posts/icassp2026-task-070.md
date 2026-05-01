---
title: "ICASSP 2026 - 语音生成 论文列表"
date: 2026-04-29
draft: false
tags: ["语音生成"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 语音生成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音生成

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Why Do Speech Language Models Fail to Generate Semantically ](/audio-paper-digest-blog/posts/2026-04-29-why-do-speech-language-models-fail-to-generate) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Why Do Speech Language Models Fail to Generate Semantically Coherent Outputs? A Modality Evolving Perspective](/audio-paper-digest-blog/posts/2026-04-29-why-do-speech-language-models-fail-to-generate)

✅ **7.0/10** | 前25% | #语音生成 | #模型评估 | #语音大模型 #零样本

👥 **作者与机构**

- 第一作者：Hankun Wang（X-LANCE Lab， 上海交通大学计算机科学与技术学院）
- 通讯作者：Kai Yu（X-LANCE Lab， 上海交通大学计算机科学与技术学院）
- 作者列表：Hankun Wang（X-LANCE Lab， 上海交通大学）， Haoran Wang（X-LANCE Lab， 上海交通大学）， Yiwei Guo（X-LANCE Lab， 上海交通大学）， Zhihan Li（X-LANCE Lab， 上海交通大学）， Chenpeng Du（X-LANCE Lab， 上海交通大学）， Kai Yu（X-LANCE Lab， 上海交通大学）

💡 **毒舌点评**

本文像一份详尽的“体检报告”，精准诊断出端到端语音大模型“语义表达不畅”的三大病根：音素编码不语义、序列太长、口音情绪太杂乱，并证明后两者影响远大于第一个。然而，光有诊断没有药方，论文止步于“未来可从短序列和强监督入手”的开放式建议，对于急需突破的社区而言，这记重拳打在了空气里。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开训练好的模型权重。
- 数据集：使用的是公开数据集LibriHeavy-large，但未提供处理好的特定模态token数据集。
- Demo：未提供在线演示。
- 复现材料：论文给出了相对详细的训练设置（模型架构、超参数、硬件）和任务评估细节，并提供了项目主页链接（https://x-lance.github.io/SLM-evolving/），可能包含更详细的信息。但并未明确承诺开源所有复现材料。
- 论文中引用的开源项目：引用了多个开源工作作为基线或方法参考，如GSLM， AudioLM， TWIST， SpeechGPT， SpiritLM， VALL-E， SALMONN等。在实验中，使用了开源的SentencePiece进行分词，HuBERT-large进行语音编码，Kaldi进行音素对齐，Whisper-large-v3进行语音转录，Llama-3.1-8B进行困惑度计算。
- 总体情况：论文中未提及明确的开源计划，但提供了复现所需的大部分超参数和设置信息。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  解决的问题：论文旨在系统性地分析为何端到端语音语言模型（SLM）无法像文本大语言模型（LLM）一样生成语义连贯的输出。核心问题是：语音模态相比文本模态，在训练上显著更难的根本原因是什么？
2.  方法核心：提出“模态演化”视角，设计一个从文本到语音渐进变化的实验框架。通过训练六个不同模态的语言模型（Text-BPE， Text-Raw， Phone-BPE， Phone-Raw， Phone-Repeat， Speech-HuBERT），将文本与语音的差异解耦为三个因素进行隔离研究：(A)语音token的音素属性而非语义属性；(B)语音序列长度远大于文本；(C)语音序列包含副语言信息（如韵律）。
3.  与已有方法相比新在哪里：与以往尝试降低帧率或与文本对齐的改进工作不同，本文并非提出一个新的SLM模型，而是首次通过严格的控制变量实验，定量评估了导致语音建模困难的三个主要因素的相对影响程度。
4.  主要实验结果：在三个客观判别任务（词法、句法、语义）和一个自由续写任务上评估发现：
    *   因素A（音素属性）影响很小：Phone-BPE与Text-BPE性能几乎持平（如在sWUGGY上准确率差异<0.1%）。
    *   因素B（序列长度）影响显著：Phone-Repeat相比Phone-Raw，句法任务(sBLIMP)准确率下降11.1%，语义任务(Topic-SC)下降12.5%，续写任务困惑度(PPL)增加88.3%。
    *   因素C（副语言信息）影响最大：Speech-HuBERT相比Phone-Repeat，词法任务(sWUGGY)准确率暴跌40.6%，句法和语义任务分别再降13.4%和9.3%，续写任务PPL激增140.7%。
    *   绝对性能上（收敛后，见表4），Text-BPE模型在所有任务上全面领先，Speech-HuBERT模型表现最差（sWUGGY仅50.8%，接近随机猜测）。
    *   数据扩展分析（图1）表明，除了Speech-HuBERT在词法任务上，其他模态的性能随训练token数增加呈近似线性增长，但Speech-HuBERT的扩展速度最慢。
    *   层间分析（图2，3）表明，副语言信息和序列长度导致的表示不一致性，使得模型在浅层难以形成稳定的词汇表征，从而阻碍了高层句法和语义的学习。
5.  实际意义：本研究为理解和改进端到端语音大模型提供了清晰的路线图。它指出，提升SLM的关键在于设计能够更好地保留语义、同时减少冗余和副语言变异性的语音表示（如研究更优的变长低帧率编码），以及可能引入更强的词汇级语义监督信号。
6.  主要局限性：本文是诊断性工作，未提出任何解决所识别问题的新模型或新算法。实验主要基于LibriSpeech数据集（朗读风格），结论在更广泛、更自然的语音场景下的普适性有待验证。开源复现性信息不足。

---

