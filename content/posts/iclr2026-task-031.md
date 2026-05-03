---
title: "ICLR 2026 - 语音问答 论文列表"
date: 2026-05-03
draft: false
tags: ["语音问答"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 语音问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音问答

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-03-data-centric-lessons-to-improve-speech-language) | 7.5分 | 前25% |
| 🥈 | [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-03-can-speech-llms-think-while-listening) | 7.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-03-data-centric-lessons-to-improve-speech-language)

✅ **7.5/10** | 前25% | #语音问答 | #预训练 | #语音大模型 #数据增强

👥 **作者与机构**

- 第一作者：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen)
- 通讯作者：未说明（论文中未明确指出）
- 作者列表：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen), Zhiyun Lu (Apple), Xuankai Chang (Apple), Yongqiang Wang (Apple), Albin Madappally Jose (Apple), Fartash Faghri (Apple), Josh Gardner (未说明), Chung-Cheng Chiu (Apple)。

#

💡 **毒舌点评**

该研究以极其严谨的控制变量法，系统性地回答了语音语言模型预训练中三个核心的数据处理问题，其“小模型（3.8B）打赢大模型”的结果极具说服力，为“数据为中心”的范式在语音领域的落地提供了强有力的实证。但论文的“软肋”也显而易见：合成数据的核心生成管线（LLM提示、TTS模型）依赖闭源工具，且未开源模型与数据，这让其最佳实践在很大程度上停留在“我们知道这有效，但你得自己重新摸索一遍”的阶段。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及SpeLangy模型或其他实验检查点的开源计划。
- 数据集：未提及网络爬取数据、Krist或Quest数据集的公开获取方式。
- Demo：未提及在线演示。
- 复现材料：论文提供了详细的训练配置（模型参数、批次大小、序列长度、数据混合比例）、数据处理流程和超参数表格，附录中包含了更多实验设置和评估细节，有助于理解实验框架，但不足以完成完全复现。
- 论文中引用的开源项目：pyannote.audio (说话人分离), Whisper (语音识别/转录), MeloTTS (语音合成), SentencePiece (分词), 以及多个评估基准（MMLU, HumanEval等）。

📌 **核心摘要**

1. 问题：当前语音语言模型（SpeechLMs）的性能提升，很大程度上依赖于预训练数据的处理与构建，但相关研究缺乏系统的控制实验，导致对关键数据处理因素的理解不足。
2. 方法：本文以“以数据为中心”的视角，通过控制变量实验，系统研究了三个核心问题：如何将原始网络音频处理成交织的语音-文本数据、如何利用纯文本数据构建合成语音-文本数据集、以及如何在训练中交错语音与文本模态。
3. 创新：相较于以往工作，本文首次在统一的实验设置下，定量比较了不同数据处理策略的效果。主要创新包括：发现细粒度（句子级）交错比粗粒度（说话人段落级）交错更有利于模态对齐；提出从知识丰富的网页文档构建合成数据集（Krist）并利用LLM生成问答对构建另一合成数据集（Quest），以扩展领域覆盖；证明确定性交替采样优于随机采样，能增强跨模态学习。
4. 结果：基于所有数据处理洞见预训练的3.8B参数模型SpeLangy，在三个标准语音问答基准测试上的平均准确率达到了51.8%，相比参数量最高达其3倍的基线模型（如Kimi-Audio，41.6%）有10.2%的绝对提升。同时，在文本理解基准上保持了竞争力。

| 模型 | 参数量 | SWQ | STQ | SLQ | 平均准确率 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| SpeLangy (本文) | 3.8B | 45.7 | 44.6 | 65.0 | 51.8 |
| Kimi-Audio | 10.5B | 44.0 | 33.8 | 47.0 | 41.6 |
| Qwen-Audio | 8.4B | 45.7 | 30.3 | 46.0 | 40.7 |
| Qwen-2-Audio | 8.4B | 45.7 | 33.4 | 47.0 | 42.0 |

![数据处理流程图](icassp-img://4amNkYCDqX/1.png)
(图2: 论文展示了其研究的三个核心数据问题：(上)粗/细粒度交错策略；(中)合成数据集构建流程；(下)确定性/随机性模态采样方案。)

5. 意义：论文强调了在SpeechLMs发展中，精心策划的数据与模型本身同等重要，其结论可指导未来更高效、高质量的语音-语言预训练数据构建。
6. 局限：研究主要基于英语数据和特定基准；合成数据管线依赖gpt-4o等闭源模型；未开源模型和数据，限制了直接复现与验证；对模型在完全端到端（包含语音生成）场景下的效果验证不足。

#

---

### 🥈 [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-03-can-speech-llms-think-while-listening)

✅ **7.0/10** | 前50% | #语音问答 | #链式思考 | #推理 #偏好优化

👥 **作者与机构**

- 第一作者：Yi-Jen Shih（Meta Superintelligence Labs，得克萨斯大学奥斯汀分校）
- 通讯作者：未说明
- 作者列表：Yi-Jen Shih（Meta Superintelligence Labs，得克萨斯大学奥斯汀分校）、Desh Raj（Meta Superintelligence Labs）、Chunyang Wu（Meta Superintelligence Labs）、Wei Zhou（Meta Superintelligence Labs）、SK Bong（Meta Superintelligence Labs）、Yashesh Gaur（Meta Superintelligence Labs）、Jay Mahadeokar（Meta Superintelligence Labs）、Ozlem Kalinli（Meta Superintelligence Labs）、Michael L. Seltzer（Meta Superintelligence Labs）

#

💡 **毒舌点评**

论文的最大亮点在于清晰地捕捉到了语音交互中“边听边想”的自然行为，并将其转化为一种可优化的、基于语义指标的工程方案，而非简单的固定延迟启发式方法。短板在于，它本质上是在一个相对成熟的架构（Moshi）上进行针对性优化，其“推理”更像是对文本CoT的浅层嫁接，缺乏对语音模态下更深层次认知过程的建模，这使得其方法在复杂、动态的对话场景中的泛化能力存疑。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开模型权重。
- 数据集：论文中提到使用了公开的CoT-Collection数据集并进行了处理，但处理后的数据集（“语音友好版”）是否公开未说明。
- Demo：未提及在线演示。
- 复现材料：提供了非常详细的复现信息，包括：SRQA基准的构建方法和示例（附录A.3）、训练和微调的全部超参数（附录A.2）、评估所用的所有LLM评判和重写系统提示模板（附录A.6）、关键实验的具体数值和图表。
- 论文中引用的开源项目：依赖了公开的Moshi模型架构、LLaMA-3.1 405B（用作评判）、Llama3-8B-Chat（用于估计问题完整性）、Pyannote VAD、Whisper ASR。
- 开源计划：论文中未提及开源计划。

📌 **核心摘要**

1.  问题：语音大模型在复杂推理任务上表现不佳，且引入思维链（CoT）后，顺序的“听-思-答”流程会增加响应延迟，影响交互自然度。
2.  方法核心：基于多流架构（Moshi），提出“边听边想”范式。首先，通过监督微调引入文本CoT提升推理准确率；其次，设计了一个基于KL散度的“问题完整性”指标，用于在训练中指导模型提前开始推理；最后，利用基于拒绝采样的DPO偏好优化（正确性偏好和长度偏好），进一步优化早期推理模型的准确率与延迟。
3.  新意：首次在多流语音大模型中系统性地研究并实现文本CoT；提出“问题完整性”指标作为早期推理触发器，相比启发式固定偏移方法提供了更可控的权衡；将偏好学习应用于优化动态推理的开始时机和CoT长度。
4.  实验结果：
    - 文本CoT在SRQA基准上平均将准确率提升2.4倍（绝对值提升29.1%），其中加入流式用户ASR是关键。
    - “问题完整性”指标比固定词数偏移（WordShift）方法在准确率-延迟权衡上表现更优。
    - 基于正确性的DPO训练进一步提升了早期推理模型的准确率；基于长度的DPO训练在保持准确率的同时，将延迟降低了约70%（从平均约49 token降至约12 token，以ARC-E为例）。

| 模型 | ARC-E | ARC-C | SIQA | PIQA | GSM8K | LLaMA-QS |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Moshi (baseline) | 30.2 | 21.5 | 22.8 | 23.8 | 8.7 | 42.8 |
| Moshi + CoT (ours) | 77.7 | 59.8 | 56.1 | 56.9 | 16.1 | 57.8 |
| w/o Streaming User ASR | 55.8 | 44.0 | 50.1 | 46.3 | 12.2 | 59.9 |

| 评估集 | SFT准确率 | DPO准确率 | SFT延迟 | DPO延迟 |
| :--- | :---: | :---: | :---: | :---: |
| ARC-E | 62.8 | 65.4 | 49.2 | 12.0 |
| ARC-C | 43.2 | 46.0 | 49.9 | 13.2 |
| SIQA | 45.1 | 45.3 | 50.0 | 12.9 |
| PIQA | 40.7 | 46.0 | 46.6 | 18.2 |
| GSM8K | 13.8 | 14.7 | 76.0 | 48.6 |

5.  实际意义：为语音智能体提供了更自然、响应更及时的推理交互范式，有望提升用户体验。提出的“问题完整性”指标和偏好优化流程可为其他流式多模态推理任务提供参考。
6.  主要局限性：模型“思考”仍基于对用户语音的浅层转录（ASR token），而非深层语义理解；“问题完整性”指标的计算依赖外部语言模型，实际部署可能增加开销；在非常复杂或高度上下文依赖的问题上，过早触发推理可能导致错误。

#

---

