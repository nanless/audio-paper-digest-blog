---
title: "ICLR 2026 - 语音问答 论文列表"
date: 2026-05-03
draft: false
tags: ["语音问答"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音问答

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-03-data-centric-lessons-to-improve-speech-language) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-03-data-centric-lessons-to-improve-speech-language)

✅ **7.5/10** | 前25% | #语音问答 | #预训练 | #语音大模型 #数据中心

👥 **作者与机构**

- 第一作者：Vishaal Udandarao（Apple, University of Cambridge, University of Tübingen）
- 通讯作者：未说明
- 作者列表：Vishaal Udandarao（Apple, University of Cambridge, University of Tübingen）， Zhiyun Lu（Apple）， Xuankai Chang（Apple）， Yongqiang Wang（Apple）， Albin Madappally Jose（Apple）， Fartash Faghri（Apple）， Josh Gardner（未说明）， Chung-Cheng Chiu（Apple）

#

💡 **毒舌点评**

亮点在于它用工程师般的严谨，为语音大模型这个“玄学”预训练过程中的数据黑箱拉上了一道帘子，给出了可复用的操作指南；短板是模型本身规模偏小，其“超越大模型”的结论在真实生产环境的复杂任务上是否成立，还需更严苛的检验。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开SpeLangy模型的权重。
- 数据集：未提及公开其使用的网络爬取或合成数据集（Krist， Quest）。
- Demo：未提供在线演示。
- 复现材料：提供了非常详细的训练配置（如batch size， 序列长度， 步数， 数据混合比例）、评估设置、数据处理流程图和附录，复现友好度较高。
- 论文中引用的开源项目：MeloTTS， pyannote.audio (用于说话人分离)， Whisper， ROVER (转录集成方法)。

📌 **核心摘要**

本文旨在解决语音-语言模型（SpeechLM）预训练中数据处理策略缺乏系统性研究的问题。核心方法是提出三个数据中心的关键研究问题：如何处理原始网络音频、如何构建合成数据集以及如何在训练中交错语音与文本。通过一系列严格控制的对照实验，论文发现：1）句子边界的细粒度交错显著优于粗粒度交错；2）基于文本数据合成的语音-文本数据（Krist和Quest）能有效增强网络爬取数据，提升性能；3）在交错训练中采用确定性交替采样策略优于随机采样。基于这些见解训练的3.8B参数模型SpeLangy，在平均口语问答准确率上比规模大至3倍的模型高出10.2%绝对值（见下表）。论文的实验结果证实，这些数据干预措施能缩小语音与文本模态间的分布差距，并改善预训练数据的领域覆盖。该工作的意义在于系统性地量化了数据处理策略对SpeechLM性能的影响，为该领域的研究提供了清晰的实证依据。其局限性主要在于研究范围聚焦于交错预训练任务，未涉及多任务学习或更复杂的建模方案。

| 模型 | 参数量 | SWQ | STQ | SLQ | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Kimi-Audio | 10.5B | 44.0 | 33.8 | 47.0 | 41.6 |
| Qwen-2-Audio | 8.4B | 45.7 | 33.4 | 47.0 | 42.0 |
| SpeLangy | 3.8B | 45.7 | 44.6 | 65.0 | 51.8 |

#

---

