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
| 🥇 | [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-03-data-centric-lessons-to-improve-speech-language) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-03-data-centric-lessons-to-improve-speech-language)

🔥 **8.0/10** | 前25% | #语音问答 | #预训练 #数据增强 | #预训练 #数据增强

👥 **作者与机构**

- 第一作者：Vishaal Udandarao（Apple；剑桥大学；图宾根大学）
- 通讯作者：未说明
- 作者列表：Vishaal Udandarao（Apple；剑桥大学；图宾根大学）、Zhiyun Lu（Apple）、Xuankai Chang（Apple）、Yongqiang Wang（Apple）、Albin Madappally Jose（Apple）、Fartash Faghri（Apple）、Joshua P Gardner（Apple）、Chung-Cheng Chiu（Apple）

💡 **毒舌点评**

亮点在于，这是首篇在语音-语言模型（SpeechLM）领域进行系统、受控数据消融实验的工作，为“如何处理预训练数据”提供了明确且可操作的答案（如细粒度交错、合成数据混合），具有很强的工程指导意义。短板则在于，所有结论都强烈依赖其特定的基础语言模型（一个2.8B的内部模型）和数据处理流程，其通用性和在不同基础模型上的可迁移性有待验证；此外，合成数据的生成（使用GPT-4o）可能引入了额外的偏差和成本，论文对此的讨论略显不足。

📌 **核心摘要**

这篇论文旨在解决语音语言模型（SpeechLM）预训练中“数据处理策略”缺乏系统性研究的问题。方法核心是通过三个受控的以数据为中心的实验，分别研究了（1）如何将原始网络音频处理成交错的语音-文本训练数据（发现细粒度交错更优）；（2）如何利用高质量文本数据集构建合成语音-文本数据（发现混合使用QA格式的合成数据提升显著）；（3）训练时如何采样语音和文本模块（发现确定性交替采样优于随机采样）。与已有方法相比，其创新在于首次在一个统一的、排除其他干扰因素的实验设置下，对数据处理策略进行了公平比较。基于这些发现，作者训练了一个3.8B参数的模型“SpeLangy”，在标准的语音问答（SQA）基准上，其平均性能比参数量高达其3倍的现有最优基线模型（如Kimi-Audio, Qwen-2-Audio）高出约10.2%。该研究的实际意义在于，它证明了精心设计的数据处理流水线和合成数据策略，可以显著提升SpeechLM在核心任务（如语音问答）上的表现，并超越通过扩大模型规模带来的收益。主要局限性是其数据策略的普适性未在其他基础模型架构上验证，且合成数据的生成依赖闭源大模型。

---

