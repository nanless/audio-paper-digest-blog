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
| 🥇 | [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-03-data-centric-lessons-to-improve-speech-language) | 8.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-03-data-centric-lessons-to-improve-speech-language)

🔥 **8.5/10** | 前10% | #语音问答 | #预训练 | #数据增强 #语音大模型

👥 **作者与机构**

- 第一作者：Vishaal Udandarao（Apple, University of Cambridge, University of Tübingen）
- 通讯作者：未说明
- 作者列表：Vishaal Udandarao（Apple, University of Cambridge, University of Tübingen）、Zhiyun Lu（Apple）、Xuankai Chang（Apple）、Yongqiang Wang（Apple）、Albin Madappally Jose（Apple）、Fartash Faghri（Apple）、Josh Gardner（未说明具体机构）、Chung-Cheng Chiu（Apple）

💡 **毒舌点评**

这篇论文的核心亮点在于其方法论上的严谨性和系统性，将“数据为中心”的理念在语音-语言预训练领域进行了教科书级别的实践，通过干净的实验设计剥离出了清晰的数据策展“黄金法则”（如细粒度交错、混合合成数据）。但其短板也同样明显：整个研究局限于一个固定的3.8B模型架构，未能探索这些数据策略是否在不同模型规模（特别是更大规模）下依然成立或带来不同收益，这使得其结论的普适性打了折扣；此外，论文虽然强调了数据的重要性，但所提出的最佳数据集构建流程（依赖多个高质量ASR/TTS模型进行清洗和合成）本身可能需要高昂的成本，对资源受限团队的可复现性构成挑战。

🔗 **开源详情**

-   代码：论文中未提及提供代码仓库链接。
-   模型权重：未明确提及是否会公开SpeLangy模型的权重。
-   数据集：论文中描述了如何构建Krist和Quest数据集，但未说明是否会公开这些数据集或提供获取方式。
-   Demo：未提供在线演示。
-   复现材料：提供了非常详尽的训练细节、超参数设置、评估协议、数据处理流水线（附录A）和污染检测方法（附��L.5），这些信息对复现研究过程本身非常有帮助。
-   论文中引用的开源项目：
    -   说话人分离：pyannote.audio (Bredin, 2023)
    -   文本转语音：MeloTTS (Zhao et al., 2023)
    -   语音识别：Whisper (Radford et al., 2023)， Nvidia-Parakeet-TDT-CTC
    -   转录集成：ROVER (Fiscus, 1997)
    -   文本分词：SentencePiece (Kudo & Richardson, 2018)
    -   主题分类器：TopicClassifier-NoURL (Wettig et al., 2025)
    -   LLM评估：lm-evaluation-harness (Gao et al., 2024a)
    -   评估基准：AlpacaEval (Li et al., 2023)

📌 **核心摘要**

1.  问题：尽管语音-语言模型在语音问答任务上取得进展，但缺乏对预训练数据处理和策展策略的系统性研究，导致性能提升的驱动因素不明确。
2.  方法核心：论文采用数据为中心的视角，通过控制变量实验，系统研究了三个关键问题：(1) 如何处理原始网络音频（发现细粒度交错更优）；(2) 如何构建合成数据集（提出Krist和Quest）；(3) 如何在交错训练中采样模态（发现确定性交替采样更优）。
3.  新意：这是首个在统一、控制的实验设置下，对语音-语言交错预训练的数据处理策略进行系统比较和消融的工作，填补了该领域的空白。
4.  主要实验结果：
    *   细粒度交错：相比粗粒度，平均SQA准确率提升3.1%（40.7% vs 37.6%）。
    *   合成数据：在网页爬取数据中混入34%的Quest数据，平均SQA准确率提升7.2%（47.9% vs 40.7%），同时大幅提升MMLU。
    *   确定性采样：相比随机采样，平均SQA准确率提升1.0%（42.4% vs 41.4%）。
    *   最佳模型（SpeLangy）：一个3.8B参数的模型，在三个SQA基准测试上的平均准确率达到51.8%，比参数量最大可达其3倍的基线模型（如10.5B的Kimi-Audio，41.6%）高出10.2%的绝对值。

    | 模型 | 参数量 | SWQ | STQ | SLQ | 平均 |
    | :--- | :---: | :---: | :---: | :---: | :---: |
    | Kimi-Audio | 10.5B | 44.0 | 33.8 | 47.0 | 41.6 |
    | Qwen-2-Audio | 8.4B | 45.7 | 33.4 | 47.0 | 42.0 |
    | SpeLangy | 3.8B | 45.7 | 44.6 | 65.0 | 51.8 |
    | GLM-4-Voice (SFT) | 9.9B | 43.3 | 52.4 | 64.7 | 53.4 |
    | Voxtral-mini (SFT) | 4.7B | 41.6 | 46.6 | 65.3 | 51.2 |

5.  实际意义：明确给出了构建高质量语音-语言预训练数据的实践指南，证明了小模型通过卓越的数据策展可以超越大模型，对降低训练成本和提升模型效率有重要指导作用。
6.  主要局限性：所有实验结论均基于3.8B规模的单一架构验证；合成数据的构建依赖于昂贵的外部模型（GPT-4o, TTS）；评估集中于英文语音问答，跨语言泛化性未验证。

---

