---
title: "ICLR 2026 - 语音理解 论文列表"
date: 2026-05-03
draft: false
tags: ["语音理解"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 语音理解 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音理解

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Closing the Gap Between Text and Speech Understanding in LLM](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech) | 8.0分 | 前25% |
| 🥈 | [MMSU: A Massive Multi-task Spoken Language Understanding and](/audio-paper-digest-blog/posts/2026-05-03-mmsu-a-massive-multi-task-spoken-language) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech)

🔥 **8.0/10** | 前25% | #语音理解 | #知识蒸馏 | #语音大模型 #多模态

👥 **作者与机构**

- 第一作者：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS；实习于Apple）
- 通讯作者：Zakaria Aldeneh（Apple）
- 作者列表：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS；实习于Apple）、Skyler Seto（Apple）、Maureen de Seyssel（Apple）、Richard He Bai（Apple）、Zijin Gu（Apple）、Tatiana Likhomanenko（Apple）、Navdeep Jaitly（Apple）、Zakaria Aldeneh（Apple）

💡 **毒舌点评**

这篇论文精准地切中了当前语音大模型（Speech-adapted LLMs）的痛点——性能远落后于文本骨干模型，并通过严谨的实验将问题归因为“遗忘”和“跨模态错位”，进而提出了数据高效的SALAD方案，其系统性的分析和针对性的解决方案是显著的亮点。然而，其方法依然深度依赖于文本到语音（TTS）合成数据来填补领域空白，且核心实验评估基于合成的语音版本，这使得其在真实世界、多样化的自然语音场景下的泛化能力和实用性仍需打个问号。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开的SALAD模型权重。
- 数据集：使用了公开的LibriHeavy、Emilia、FineWeb-Edu数据集，但未提及是否公开其预处理后的交错数据或主动选择合成的语音子集。
- Demo：未提及。
- 复现材料：论文提供了较为详细的附录，包括模型架构细节、训练超参数、评估协议、主动选择算法细节以及部分消融实验结果，为复现提供了较好的基础。
- 论文中引用的开源项目：Mimi语音分词器（来自`moshi`项目）、Kokoro-TTS模型、BGE-large-en-v1.5嵌入模型、Whisper-v3-large、SmolLM。

📌 **核心摘要**

1.  问题：将大型语言模型（LLM）适配以处理语音输入时，其语言理解性能会显著下降，落后于原始文本LLM甚至级联系统，作者将此称为“文本-语音理解差距”。
2.  方法核心：提出SALAD（Sample-efficient Alignment with Learning through Active selection and cross-modal Distillation）方法。该方法基于两个关键洞察：（1）使用跨模态知识蒸馏（以文本LLM为教师）比最大似然估计更能缓解遗忘和错位；（2）自然语音语料库的领域覆盖远不如文本预训练语料库。因此，SALAD采用两阶段训练：第一阶段在自然语音上进行蒸馏对齐；第二阶段通过主动学习算法，基于模型自身的跨模态错位信号，从文本语料库中选择性合成少量语音数据，以针对性地填补领域空白。
3.  新意：与依赖大规模合成语音或私有数据集的先前工作不同，SALAD在实现有竞争力的性能时，使用了超过一个数量级更少的训练数据。它系统地量化了“遗忘”和“跨模态错位”两个核心问题，并设计了针对性的、数据高效的解决方案。
4.  主要结果：在多个广泛领域的知识理解和推理基准（如StoryCloze, MMSU, OBQA, HellaSwag, ARC-C, PIQA）的语音版本上，SALAD-7B模型的性能与最强闭源模型（Qwen2.5-Omni-7B）具有竞争力，同时数据用量仅为其约1/10。SALAD能更好地保持原始文本LLM的能力。关键消融实验表明，主动选择（Stage II）相比于均匀采样，在科学类任务（如MMSU）上带来显著提升。
5.  实际意义：为构建数据高效、性能强大的端到端语音理解系统提供了可行路径，减少了对海量合成语音或私有数据的依赖，推动了语音大模型向更实用、更自然的方向发展。
6.  主要局限性：1) 依赖合成数据（TTS）进行领域扩展，其质量和多样性受限于TTS模型本身；2) 所有实验评估均基于用同一TTS合成的语音版本，模型在真实、多说话人、多风格自然语音上的表现有待验证；3) 专注于语音理解（文本输出），未涉及语音生成。

---

### 🥈 [MMSU: A Massive Multi-task Spoken Language Understanding and Reasoning Benchmark](/audio-paper-digest-blog/posts/2026-05-03-mmsu-a-massive-multi-task-spoken-language)

🔥 **8.0/10** | 前25% | #语音理解 | #基准测试 | #语音大模型 #多任务学习

👥 **作者与机构**

- 第一作者：未说明（论文摘要未明确指出）
- 通讯作者：未说明（论文摘要未明确指出）
- 作者列表：Dingdong WANG（未说明）、Junan Li（未说明）、Jincenzi Wu（未说明）、Dongchao Yang（未说明）、Xueyuan Chen（未说明）、Tianhua Zhang（未说明）、Helen M. Meng（未说明）

💡 **毒舌点评**

亮点：这篇论文直击当前语音大模型评估的软肋，没有停留在“能听懂文字”的表面，而是系统性地引入语言学理论，把语音的“弦外之音”（情绪、语调等）和“字里行间”（修辞、句法等）都纳入了考纲，构建了一个更接近真实交流复杂度的“期末考试”。短板：作为一份“考纲”（基准），它本身并不能提高学生的“成绩”（模型能力），5000条样本在如今大模型评估的规模面前也略显“小家子气”，其长期影响力取决于社区的采纳程度和后续是否持续更新。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：不适用，MMSU是评估基准。
- 数据集：论文中介绍了MMSU数据集（5000个样本，47个任务），但未在摘要中说明具体的公开获取方式。基于其作为“benchmark”的性质，可以推断该数据集计划公开，但具体链接未提供。
- Demo：论文中未提及在线演示。
- 复现材料：论文中提到了评估的协议（对22个模型进行评测），这为复现评测结果提供了依据，但具体的评测脚本、配置等细节未在摘要中说明。
- 论文中引用的开源项目：摘要中未提及具体引用的开源项目或工具。

📌 **核心摘要**

1.  要解决什么问题：现有语音大模型（SpeechLLMs）的评估主要集中在基础语义理解，缺乏对其在自然语音中进行细粒度感知（如情绪、语速、语调）和复杂推理能力的系统性评估。
2.  方法核心是什么：提出MMSU，一个大规模、多任务的口语理解与推理基准。其核心是基于语言学理论（音系、韵律、修辞、句法、语义、副语言学），系统性地设计了47个任务，包含5000个精心策划的音频-问题-答案三元组。
3.  与已有方法相比新在哪里：a) 理论根基：首次将广泛的语言学现象系统性地纳入语音理解评估框架。b) 覆盖广度：任务数量（47个）和样本规模（5000个）远超以往专注于单一或少数任务的基准。c) 评估深度：专注于评估模型对“语音”本身蕴含信息的综合处理能力，而不仅仅是“语音转文本”后的能力。
4.  主要实验结果如何：论文对22个先进的SpeechLLMs进行了全面评估。摘要指出“现有模型仍有巨大的改进空间”（substantial room for improvement），但未给出具体的数值结果。
5.  实际意义是什么：MMSU为评估和推动SpeechLLMs向更全面、更深入的语音理解能力发展提供了新的标准和方向。它有助于识别当前模型的短板，指导未来模型在多粒度语音感知和推理方面的研发。
6.  主要局限性是什么：a) 数据集规模（5000个样本）对于大模型评估可能仍显不足。b) 作为静态基准，可能无法完全跟上模型快速迭代的步伐。c) 任务设计是否完全覆盖了所有关键的语音理解现象，有待社区进一步讨论。

---

