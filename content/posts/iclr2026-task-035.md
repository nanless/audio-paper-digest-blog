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
| 🥇 | [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-04-data-centric-lessons-to-improve-speech-language) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-04-data-centric-lessons-to-improve-speech-language)

🔥 **8.0/10** | 前25% | #语音问答 | #预训练 | #语音大模型 #多模态模型

👥 **作者与机构**

- 第一作者：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen)
- 通讯作者：未明确说明
- 作者列表：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen), Zhiyun Lu (Apple), Xuankai Chang (Apple), Yongqiang Wang (Apple), Albin Madappally Jose (Apple), Fartash Faghri (Apple), Joshua P Gardner (Apple), Chung-Cheng Chiu (Apple)

#

💡 **毒舌点评**

亮点：论文的实验设计堪称“数据中心”研究范式的典范，通过精心设计的控制变量消融实验（如仅改变交错粒度或采样策略），清晰地量化了每个数据处理步骤的独立贡献，结论扎实可信。短板：所谓的“合成数据集”构建方法（从文本生成问答对再用TTS合成语音）相对基础，未探索利用更先进的端到端语音生成模型或更强的指令遵循能力，其提升可能受限于TTS的自然度和多样性。

#

🔗 **开源详情**

-   代码：论文中未提及代码仓库链接。
-   模型权重：论文提及训练了SpeLangy模型，但未提及将公开其预训练权重。
-   数据集：论文详细描述了Web-crawl、Krist和Quest数据集的构建方法，但未提及公开原始音频或构建后的数据集。伦理声明部分提及数据来源于公开播客。
-   Demo：论文中未提及在线演示。
-   复现材料：附录中提供了大量细节，包括数据预处理流程图、合成数据构建提示、训练超参数、评估数据集细节、污染分析代码等，复现信息非常详尽。
-   论文中引用的开源项目：使用了MeloTTS进行语音合成，Whisper和Parakeet进行转录，pyannote进行说话人日志，SentencePiece进行分词，以及引用了多个开源SpeechLM和文本模型作为基线。

📌 **核心摘要**

1.  问题：当前语音-语言模型（SpeechLMs）在预训练数据的处理、构建和交错方式上缺乏系统性的控制研究，导致性能提升的关键因素不明确。
2.  方法核心：本文对语音-语言预训练的数据进行了系统性的“数据中心”研究，聚焦三个关键问题：（1）如何将原始网页爬取音频处理成交错的语音-文本数据；（2）如何利用纯文本数据集构建合成语音-文本数据以增强网络爬取数据；（3）如何在训练中交错语音和文本片段。
3.  新意：这是首个在受控设置下系统比较不同语音-语言数据策略的工作。与以往仅描述建模选择的工作不同，本文通过严谨的消融实验，分离并量化了数据处理、合成和采样策略的独立影响。
4.  主要结果：基于洞察，作者训练了一个3.8B参数的模型SpeLangy，在平均语音问答（SQA）性能上比参数量高达其3倍的模型（如Kimi-Audio， Qwen-2-Audio）高出10.2%绝对值。关键消融实验结果见下表：

| 数据策略/方法 | 文本理解 (CoreEN/MMLU) | SQA (SWQ/STQ/SLQ) 平均准确率 |
| :--- | :--- | :--- |
| 基线 (粗粒度交错) | 60.4 / 63.9 | 37.6% |
| + 细粒度交错 | 60.4 / 64.1 | 40.7% (+3.1%) |
| + 确定性采样 | 60.1 / 65.2 | 42.4% (+4.8%) |
| + 混合Quest合成数据 | 60.4 / 66.2 | 47.9% (+10.3%) |

![SpeLangy与其它SpeechLM性能对比](icassp-img://4amNkYCDqX/0.png)
图1展示了SpeLangy模型（3.8B参数）在平均SQA准确率上超越了参数量更大的竞争对手（Voxtral-mini, GLM-4-Voice, Qwen-2-Audio等）。

5.  实际意义：为SpeechLM社区提供了经过验证的数据处理和构建的最佳实践，强调了有效数据整理在提升模型性能中的核心作用，能指导未来更高效、更强模型的开发。
6.  主要局限性：研究主要围绕单一的SQA任务和特定的基准测试展开；合成数据方法依赖于TTS模型，其质量可能成为瓶颈；论文未公开模型权重和代码，限制了完全复现。

#

---

