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

✅ **7.5/10** | 前25% | #语音问答 | #预训练 | #语音大模型 #数据增强

👥 **作者与机构**

- 第一作者：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen)
- 通讯作者：未说明（论文中未明确指出）
- 作者列表：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen), Zhiyun Lu (Apple), Xuankai Chang (Apple), Yongqiang Wang (Apple), Albin Madappally Jose (Apple), Fartash Faghri (Apple), Josh Gardner (未说明), Chung-Cheng Chiu (Apple)。

💡 **毒舌点评**

该研究以极其严谨的控制变量法，系统性地回答了语音语言模型预训练中三个核心的数据处理问题，其“小模型（3.8B）打赢大模型”的结果极具说服力，为“数据为中心”的范式在语音领域的落地提供了强有力的实证。但论文的“软肋”也显而易见：合成数据的核心生成管线（LLM提示、TTS模型）依赖闭源工具，且未开源模型与数据，这让其最佳实践在很大程度上停留在“我们知道这有效，但你得自己重新摸索一遍”的阶段。

🔗 **开源详情**

- **代码**：论文中未提及代码链接。
- **模型权重**：未提及SpeLangy模型或其他实验检查点的开源计划。
- **数据集**：未提及网络爬取数据、Krist或Quest数据集的公开获取方式。
- **Demo**：未提及在线演示。
- **复现材料**：论文提供了详细的训练配置（模型参数、批次大小、序列长度、数据混合比例）、数据处理流程和超参数表格，附录中包含了更多实验设置和评估细节，有助于理解实验框架，但不足以完成完全复现。
- **论文中引用的开源项目**：pyannote.audio (说话人分离), Whisper (语音识别/转录), MeloTTS (语音合成), SentencePiece (分词), 以及多个评估基准（MMLU, HumanEval等）。

📌 **核心摘要**

1. **问题**：当前语音语言模型（SpeechLMs）的性能提升，很大程度上依赖于预训练数据的处理与构建，但相关研究缺乏系统的控制实验，导致对关键数据处理因素的理解不足。
2. **方法**：本文以“以数据为中心”的视角，通过控制变量实验，系统研究了三个核心问题：如何将原始网络音频处理成交织的语音-文本数据、如何利用纯文本数据构建合成语音-文本数据集、以及如何在训练中交错语音与文本模态。
3. **创新**：相较于以往工作，本文首次在统一的实验设置下，定量比较了不同数据处理策略的效果。主要创新包括：发现细粒度（句子级）交错比粗粒度（说话人段落级）交错更有利于模态对齐；提出从知识丰富的网页文档构建合成数据集（Krist）并利用LLM生成问答对构建另一合成数据集（Quest），以扩展领域覆盖；证明确定性交替采样优于随机采样，能增强跨模态学习。
4. **结果**：基于所有数据处理洞见预训练的3.8B参数模型SpeLangy，在三个标准语音问答基准测试上的平均准确率达到了51.8%，相比参数量最高达其3倍的基线模型（如Kimi-Audio，41.6%）有10.2%的绝对提升。同时，在文本理解基准上保持了竞争力。

| 模型 | 参数量 | SWQ | STQ | SLQ | 平均准确率 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SpeLangy (本文)** | **3.8B** | **45.7** | **44.6** | **65.0** | **51.8** |
| Kimi-Audio | 10.5B | 44.0 | 33.8 | 47.0 | 41.6 |
| Qwen-Audio | 8.4B | 45.7 | 30.3 | 46.0 | 40.7 |
| Qwen-2-Audio | 8.4B | 45.7 | 33.4 | 47.0 | 42.0 |

![数据处理流程图](icassp-img://4amNkYCDqX/1.png)
*(图2: 论文展示了其研究的三个核心数据问题：(上)粗/细粒度交错策略；(中)合成数据集构建流程；(下)确定性/随机性模态采样方案。)*

5. **意义**：论文强调了在SpeechLMs发展中，精心策划的数据与模型本身同等重要，其结论可指导未来更高效、高质量的语音-语言预训练数据构建。
6. **局限**：研究主要基于英语数据和特定基准；合成数据管线依赖gpt-4o等闭源模型；未开源模型和数据，限制了直接复现与验证；对模型在完全端到端（包含语音生成）场景下的效果验证不足。

---

