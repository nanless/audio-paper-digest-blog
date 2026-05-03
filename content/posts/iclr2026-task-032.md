---
title: "ICLR 2026 - 语音问答 论文列表"
date: 2026-05-04
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
| 🥇 | [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-04-data-centric-lessons-to-improve-speech-language) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-04-data-centric-lessons-to-improve-speech-language)

✅ **7.5/10** | 前25% | #语音问答 | #预训练 | #语音大模型 #数据增强

👥 **作者与机构**

- 第一作者：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen)
- 通讯作者：未说明（作者列表为集体署名，无明确通讯作者标注）
- 作者列表：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen), Zhiyun Lu (Apple), Xuankai Chang (Apple), Yongqiang Wang (Apple), Albin Madappally Jose (Apple), Fartash Faghri (Apple), Joshua P. Gardner (Apple), Chung-Cheng Chiu (Apple)

💡 **毒舌点评**

本文最大的亮点在于其“教科书式”的数据驱动研究方法：通过严格控制变量，系统回答了语音语言模型预训练中三个关键的数据处理问题，逻辑清晰，结论可靠。然而，短板在于其核心的合成数据流水线和最终的SpeLangy模型均未开源，这与论文标题“Data-Centric Lessons”所倡导的开源共享精神稍显矛盾，削弱了社区直接复现和验证其“经验教训”的能力。

🔗 **开源详情**

- 代码：论文中未提及代码链接或开源计划。
- 模型权重：论文提到SpeLangy模型，但未提及是否公开权重。根据上下文推断，很可能未公开。
- 数据集：论文详细描述了数据处理流水线和数据统计，但明确指出所有语音数据来自网络爬取，合成数据也是基于私有爬取文本构建，均未公开。
- Demo：未提及。
- 复现材料：论文在附录中提供了极其详细的数据处理流程、提示词、数据统计、训练配置和评估设置，理论上构成了完整的“复现指南”。然而，由于关键数据不公开，这仅是一份无法执行的指南。
- 论文中引用的开源项目：论文中明确引用了作为依赖项的开源工具/模型：pyannote.audio (说话人分离), Whisper (语音识别/转录), MeloTTS (语音合成), SentencePiece (分词), 以及用于主题分类的开源分类器 (WebOrganizer/TopicClassifier-NoURL)。

📌 **核心摘要**

1. 要解决什么问题：语音语言模型预训练中，数据处理（如何将原始音频转为训练数据、如何利用文本数据生成合成语音数据、如何交错采样语音文本）缺乏系统研究，导致性能提升原因不明。
2. 方法核心是什么：提出一个数据驱动的研究框架，通过控制变量实验，系统比较不同数据处理策略。核心包括：将原始音频细粒度交错分割（而非粗粒度合并）；从网页文本中合成“知识丰富”和“问答格式”的语音文本数据集；在训练中采用确定性（而非随机）的语音文本交替采样。
3. 与已有方法相比新在哪里：首次在语音语言模型领域进行如此系统化的数据消融实验，剥离了模型架构、损失函数等其他变量，纯粹从数据角度揭示了有效的预训练策略。其结论（如细粒度交错、确定性采样、QA格式合成数据）直接挑战了部分现有实践（如粗粒度合并）。
4. 主要实验结果如何：
    - 细粒度交错：相比粗粒度，平均语音问答（SQA）准确率提升3.1%（40.7% vs 37.6%）。
    - 合成数据混合：将Web爬取数据与Quest（问答格式合成数据）以66%：34%混合，平均SQA准确率提升至47.9%，比纯Web爬取数据（40.7%）提升7.2%。
    - 确定性采样：相比随机采样，平均SQA准确率提升1%（42.4% vs 41.4%）。
    - 综合效果：集成所有数据洞察训练的3.8B参数模型SpeLangy，在三个SQA基准上平均准确率达51.8%，超越参数量2-3倍的SOTA基线模型（如Kimi-Audio, Qwen2-Audio）约10%的绝对性能，且文本理解能力保持优秀。

| 模型 | 参数量 | SWQ | STQ | SLQ | 平均SQA |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Kimi-Audio (Base) | 10.5B | 44.0 | 33.8 | 47.0 | 41.6 |
| Qwen-2-Audio (Base) | 8.4B | 45.7 | 33.4 | 47.0 | 42.0 |
| SpeLangy | 3.8B | 45.7 | 44.6 | 65.0 | 51.8 |
| GLM-4-Voice (SFT) | 9.9B | 43.3 | 52.4 | 64.7 | 53.4 |

表：主要模型在语音问答基准上的性能对比。SpeLangy作为基座模型，平均性能显著优于其他更大的基座模型。

5. 实际意义是什么：为构建高性能语音语言模型提供了可操作的“数据配方”。证明了精心设计的数据处理流程（而非单纯增加模型参数）是提升模型效率与性能的关键，对工业界训练端到端语音助手具有重要参考价值。
6. 主要局限性是什么：研究完全依赖于私有网络爬取的音频数据集，无法公开；合成数据流程也未开源，限制了方法的可复现性和广泛验证。所有实验均基于特定规模（3.8B）和固定架构的模型，结论的普适性有待更大范围验证。

---

