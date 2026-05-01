---
title: "ICASSP 2026 - 语音理解 论文列表"
date: 2026-04-29
draft: false
tags: ["语音理解"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 语音理解 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音理解

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Exploring Fine-Tuning Of Large Audio Language Models For Spo](/audio-paper-digest-blog/posts/2026-04-29-exploring-fine-tuning-of-large-audio-language) | 8.0分 | 前25% |
| 🥈 | [Scaling Spoken Language Models with Syllabic Speech Tokeniza](/audio-paper-digest-blog/posts/2026-04-29-scaling-spoken-language-models-with-syllabic) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Exploring Fine-Tuning Of Large Audio Language Models For Spoken Language Understanding Under Limited Speech Data](/audio-paper-digest-blog/posts/2026-04-29-exploring-fine-tuning-of-large-audio-language)

🔥 **8.0/10** | 前25% | #语音理解 | #迁移学习 | #低资源 #多语言

👥 **作者与机构**

- 第一作者：Youngwon Choi (MAUM AI Inc., Republic of Korea)
- 通讯作者：Huu-Kim Nguyen (∗ 作者列表中标注星号，现单位为 Atmanity Inc., USA)
- 作者列表：
  - Youngwon Choi (MAUM AI Inc., Republic of Korea)
  - Jaeyoon Jung (MAUM AI Inc., Republic of Korea & Soongsil University, Republic of Korea)
  - Hyeonyu Kim (MAUM AI Inc., Republic of Korea)
  - Huu-Kim Nguyen (MAUM AI Inc., Republic of Korea → 现 Atmanity Inc., USA)
  - Hwayeon Kim (MAUM AI Inc., Republic of Korea)

💡 **毒舌点评**

这篇论文像一份非常扎实的“工程实验报告”，系统地厘清了“当语音标注数据很少时，怎么微调音频大模型最划算”这个现实问题，结论（转录文本先行、加少量语音、课程学习）对实践者极具指导性。短板在于，它本质上是方法组合与验证，而非底层算法的原创突破，且所有实验仅基于Qwen2-Audio-7B一个模型，结论的普适性存疑。

🔗 **开源详情**

- 代码：论文中未提及任何代码仓库链接或开源计划。
- 模型权重：论文中未提及是否会开源微调后的模型权重。所使用的基座模型Qwen2-Audio-7B-Instruct是公开的。
- 数据集：所使用的数据集（SLURP, ITALIC, Speech-MASSIVE）均为已有公开数据集。论文未提及发布新数据集。
- Demo：未提供在线演示。
- 复现材料：论文提供了非常详细的训练配置（优化器、学习率、warmup、硬件、训练轮次、batch size等）和评估细节（解码策略、beam size、置信区间计算），有助于复现。
- 论文中引用的开源项目：论文主要依赖并微调了公开模型 Qwen2-Audio-7B-Instruct。所用数据集（SLURP, ITALIC, Speech-MASSIVE, MASSIVE）均为开源数据集。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：研究在语音-标签配对数据稀缺的现实约束下，如何高效微调大型音频语言模型（LALMs）以完成口语理解（SLU）任务。
2.  方法核心：系统性地比较了三种微调策略：文本微调（仅用转录文本训练LLM部分）、直接混合（按比例混合语音和文本数据）、课程学习（先文本微调，最后阶段引入语音）。研究重点考察了不同语音数据比例（2%-100%）下的效果。
3.  新意：不同于多数工作关注预训练或零样本评估，本文首次为LALM在有限数据下的微调建立了系统性基准，明确了不同策略的适用场景（如课程学习在低资源时更优），并验证了利用丰富文本资源结合少量语音的有效路径。
4.  主要实验结果：
    *   在单语设置（SLURP/EN, ITALIC/IT, Speech-MASSIVE/FR）上，文本微调基线已能达到峰值SLU-F1的87%-94%。
    *   仅加入2%-5%的语音数据，性能即可获得大幅提升，在SLURP上达到峰值SLU-F1的97%。
    *   在低语音数据（2%-10%）下，课程学习在大多数指标上显著优于直接混合（95%置信区间不重叠）。当数据量达25%以上，两者差距缩小。
    *   跨语言实验表明，利用源语言（法语）的语音数据进行微调，能显著提升零样本和少样本跨语言SLU性能。结合目标语言文本和极少量目标语音，效果进一步提升。

| 数据集 | 语音数据占比 | 方法 | Intent Acc. | Entity F1 | SLU-F1 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SLURP (EN) | 0% | Text | 0.8360 | 0.6406 | 0.7207 |
| | 2% | Curr. | 0.8574 | 0.6577 | 0.7335 |
| | 5% | Curr. | 0.8642 | 0.6765 | 0.7475 |
| | 100% | Direct | 0.8813 | 0.6959 | 0.7675 |
| ITALIC (IT) | 0% | Text | 0.7834 | 0.5661 | 0.6755 |
| | 2% | Curr. | 0.8272 | 0.6074 | 0.7088 |
| | 5% | Curr. | 0.8412 | 0.6334 | 0.7271 |
| | 100% | Direct | 0.8767 | 0.7022 | 0.7737 |
| Speech-MASSIVE (FR) | 0% | Text | 0.8017 | 0.5130 | 0.6535 |
| | 2% | Curr. | 0.8287 | 0.5590 | 0.6919 |
| | 5% | Curr. | 0.8423 | 0.5802 | 0.7048 |
| | 100% | Direct | 0.8739 | 0.6445 | 0.7486 |
5.  实际意义：为资源有限的场景（如垂直领域、低资源语言）部署语音智能应用提供了成本效益高的微调指南：优先收集/使用转录文本，并尽可能添加少量（2-5%）目标领域的语音数据进行课程学习。
6.  主要局限性：研究仅基于单一模型（Qwen2-Audio-7B-Instruct），结论在其他LALMs上的泛化性有待验证。实验主要集中于SLU任务，对其他语音理解任务的适用性未探索。

---

### 🥈 [Scaling Spoken Language Models with Syllabic Speech Tokenization](/audio-paper-digest-blog/posts/2026-04-29-scaling-spoken-language-models-with-syllabic)

✅ **7.0/10** | 前25% | #语音理解 | #分词技术 | #语音大模型 #自监督学习

👥 **作者与机构**

- 第一作者：Nicholas Lee (UC Berkeley)
- 通讯作者：未明确说明（论文中未指定）
- 作者列表：Nicholas Lee (UC Berkeley)、Cheol Jun Cho (UC Berkeley)、Alan W. Black (CMU)、Gopala K. Anumanchipalli (UC Berkeley)

💡 **毒舌点评**

亮点：这篇论文做了一件扎实且重要的事——系统性地证明了“把语音序列砍短”（音节分词）是训练更高效语音大模型的一条靠谱捷径，用5倍的计算节省换取了相当甚至更好的性能。短板：研究止步于“对比观察”，缺乏对“为何音节分词有效”的深层机制剖析（例如，这种离散化如何保留了关键的韵律或语义信息？），且未提供代码，使得“可复现”的承诺打了折扣。

🔗 **开源详情**

*   代码：论文中未提及代码链接或开源计划。
*   模型权重：未提及公开任何预训练模型或分词器权重。
*   数据集：使用的是公开数据集（LibriSpeech, LibriLight, LibriTTS, EXPRESSO），论文未提供新的数据集。
*   Demo：未提及。
*   复现材料：论文详细描述了基于Slamkit框架的实验设置、模型架构、数据处理和超参数，为复现提供了路线图。
*   依赖的开源项目/模型：明确使用了Slamkit [1]、Sylber [8]、Hubert [5]、WavLM [6]、OPT [18]、Qwen2.5 [19]、SpeechBrain [17]、Whisper [23]、Llama-3.2 [24] 以及Conditional Flow-Matching [14]。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：当前主流的语音语言模型（SLM）使用高帧率（25-75 Hz）的语音令牌，导致序列过长，使得基于Transformer的模型在自注意力机制下面临二次复杂度的计算瓶颈，严重限制了模型在长上下文数据上的扩展和推理速度。
2.  方法核心：采用基于自监督学习模型“Sylber”生成的音节级语音分词（约4.27 Hz），替代传统的帧级分词（如Hubert，约50 Hz），将语音序列长度压缩约5倍。
3.  创新点：首次系统性研究音节分词在语音语言建模中的扩展性。在固定计算预算下，对比了不同数据规模和词汇表大小的Sylber分词与Hubert分词SLM的性能。
4.  主要实验结果：在多个口语理解基准测试（sBLIMP, sSC, tSC）和生成困惑度（GenPPL）上，Sylber模型用约1/5的训练数据（令牌量）即可匹配或超越使用全量数据的Hubert模型。具体而言，在完整数据集（LibriSpeech+LibriLight+STS）上，Sylber-20k模型在sBLIMP上得分60.57（Qwen-0.5B），高于Hubert的56.95；训练时间从8.5小时降至3小时（8xA100-80GB），FLOPs减少超过5倍。关键结果对比如下表：

| 模型（Qwen2.5-0.5B） | 训练数据集 | 令牌量 | sBLIMP ↑ | sSC ↑ | tSC ↑ | GenPPL ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Hubert (km500) | 全量 | 6.04B | 56.95 | 57.30 | 79.64 | 85.90 |
| Sylber (km20k) | 全量 | 1.24B | 60.57 | 58.90 | 80.17 | 183.08 |
| Sylber (km5k) | 全量 | 1.24B | 60.54 | 57.67 | 79.58 | 168.81 |

5.  实际意义：为构建高效、可扩展的长上下文语音语言模型指明了一条有前景的道路，通过更粗粒度、更可解释的语音表示（音节），大幅降低训练和推理成本。
6.  主要局限性：研究局限于特定的Sylber分词方法和k-means聚类；未深入探讨不同分词策略（如基于语言学的分词）的影响；生成任务（GenPPL）的评分上，Sylber模型目前仍劣于Hubert模型，表明音节分词在语音生成建模上可能仍有挑战。

---

