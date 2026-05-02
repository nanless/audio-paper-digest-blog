---
title: "ICLR 2026 - 语音问答 论文列表"
date: 2026-05-02
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
| 🥇 | [MMSU: A Massive Multi-task Spoken Language Understanding and](/audio-paper-digest-blog/posts/2026-05-02-mmsu-a-massive-multi-task-spoken-language) | 8.5分 | 前25% |
| 🥈 | [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-02-data-centric-lessons-to-improve-speech-language) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [MMSU: A Massive Multi-task Spoken Language Understanding and Reasoning Benchmark](/audio-paper-digest-blog/posts/2026-05-02-mmsu-a-massive-multi-task-spoken-language)

🔥 **8.5/10** | 前25% | #语音问答 | #模型评估 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Dingdong WANG（香港中文大学）
- 通讯作者：未说明（论文未明确指定通讯作者；通讯邮箱为第一作者邮箱：dingdongwang@link.cuhk.edu.hk）
- 作者列表：Dingdong WANG (香港中文大学), Junan Li (香港中文大学), Jincenzi Wu (香港中文大学), Dongchao Yang (香港中文大学), Xueyuan Chen (香港中文大学), Tianhua Zhang (香港中文大学), Helen M. Meng (香港中文大学)

💡 **毒舌点评**

亮点：该工作像一位严谨的语言学教授，为“只会听个响”的语音大模型们精心设计了一场覆盖音素、韵律、修辞等全方位的“期末统考”，诊断出当前模型普遍存在的“语音学文盲”和“韵律感知障碍”，指明了未来训练的重点补课方向。  
短板：考试形式局限于“单选题”，虽然高效，但无法评估模型在真实对话中灵活运用这些能力进行生成或交互的水平，有点“高分低能”的潜在风险。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。评估用的脚本或提示词模板未开源。
- 模型权重：未提及。论文评估了多个现有模型，但未提供任何自己训练的模型。
- 数据集：公开。论文明确提供了数据集获取链接：`https://huggingface.co/datasets/ddwang2000/MMSU`。
- Demo：未提及。
- 复现材料：论文在附录中详细说明了数据构建过程（自定义录音、人工审核）、任务定义、任务示例、错误案例分析以及使用的GPT提示词。这为理解基准构建和部分复现提供了丰富信息，但完整的评估流程复现仍需额外工作。
- 论文中引用的开源项目：论文依赖并引用了多个开源数据集和模型，包括：CommonVoice, MELD, GigaSpeech, Switchboard, SLURP, SEAME, Fake-or-Real, RAVDESS, CoVoST 2, EDACC, VCTK, CHILDES, LogicBench等（完整列表见附录B）。评估的模型包括BLSP, Qwen-Audio, Kimi-Audio, Gemini, GPT-4o-Audio等众多开源和闭源SpeechLLMs。

📌 **核心摘要**

1.  问题：当前语音大模型（SpeechLLMs）的评估基准普遍存在三大缺陷：日常语音现象（如不流畅、语调变化、重音）覆盖不足、过度依赖合成语音导致不真实、以及评估设计缺乏语言学理论基础。这导致无法全面、真实地评估模型对语音的深层理解能力。
2.  方法核心：本文提出了MMSU，一个全新的、基于语言学理论的语音理解与推理基准。它系统性地整合了语音学、韵律学、修辞学、句法学、语义学和副语言学等理论，构建了包含感知（24个任务） 和推理（23个任务） 两大维度、共计47个任务的评估框架。数据包含5000个精心设计的音频-问题-答案三元组。
3.  创新与对比：与之前基准（如VoiceBench， ADU-Bench， MMAU）相比，MMSU的新颖之处在于：(a) 理论驱动：首次系统性地将语言学原理融入任务设计；(b) 全面覆盖：涵盖了前所未有的语音现象广度（从音素辨析到双关语理解）；(c) 数据真实性：主要采用真实世界录音（76.74%开源数据，13.44%专业录制），仅少量使用TTS补充。
4.  实验结果：论文对22个先进的SpeechLLMs和OmniLLMs进行了评估。关键结果如下表所示（数据摘自论文表3）：

| 模型 | 类别 | 大小 | 感知准确率(%) | 推理准确率(%) | 总体平均准确率(%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Human | 人类基线 | - | 91.24 | 86.77 | 89.72 |
| Gemini-1.5-Pro | 闭源 | - | 46.10 | 76.16 | 60.68 |
| Qwen2.5-Omni-7B | 开源 | 7B | 42.50 | 79.83 | 60.57 |
| Kimi-Audio | 开源 | 7B | 43.52 | 76.03 | 59.28 |
| GPT-4o-Audio | 闭源 | - | 39.67 | 71.96 | 56.38 |

    *   人类表现（89.72%）远超所有模型，最优模型Gemini-1.5-Pro（60.68%）与其存在近30%的差距，凸显了任务的挑战性。
    *   开源模型（如Qwen2.5-Omni-7B）性能已接近甚至超越部分闭源模型（如GPT-4o-Audio）。
    *   关键发现：模型在感知任务（尤其是音系学相关任务）上表现普遍较差，与人类“推理难于感知”的认知模式相反；噪声注入后性能下降轻微，证明模型确实在使用音频信号。图5展示了模型在噪声条件下的鲁棒性对比。
5.  实际意义：MMSU为社区提供了一个标准化、高难度的“体检工具”，能有效诊断出当前SpeechLLMs在精细语音感知和复杂语义推理上的短板（特别是音系处理能力），为下一代更类人的语音交互模型研发指明了优化方向。
6.  主要局限性：a) 基准主要覆盖英语和中英混合语音，对其他语言的评估能力未体现；b) 评估形式为固定选项的多选题，可能无法完全反映模型开放式生成或对话中的理解能力；c) 尽管追求真实，数据中仍有9.82%的合成语音。

---

### 🥈 [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-02-data-centric-lessons-to-improve-speech-language)

🔥 **8.0/10** | 前25% | #语音问答 | #预训练 | #语音大模型 #数据增强

👥 **作者与机构**

- 第一作者：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen)
- 通讯作者：未说明
- 作者列表：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen)、Zhiyun Lu (Apple)、Xuankai Chang (Apple)、Yongqiang Wang (Apple)、Albin Madappally Jose (Apple)、Fartash Faghri (Apple)、Joshua P Gardner (Apple)、Chung-Cheng Chiu (Apple)

💡 **毒舌点评**

论文最大的亮点在于用极其扎实、系统化的消融实验，为语音-语言预训练中“数据如何处理”这个黑箱问题提供了首个清晰、可操作的答案，实验设计堪称标杆。短板在于，虽然模型SpeLangy表现出色，但其核心架构（Conformer编码器+离散量化+预训练LLM）并无新意，论文的真正价值在于“怎么用数据”，而非“怎么建模型”，对于追求架构创新的读者可能吸引力有限。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中提及了SpeLangy模型，但未说明是否公开权重。
- 数据集：论文中描述了数据构建方法，但未提及公开合成数据集。
- Demo：未提及。
- 复现材料：论文提供了非常详细的训练数据统计（表8， D节）、数据混合细节（附录D.1）、训练设置（附录E）、评估基准详情（附录G）、以及大量实现细节（如数据处理流程图9、污染分析伪代码算法1），可复现性信息充足。
- 论文中引用的开源项目：
    - pyannotate (Bredin, 2023): 用于说话人分离。
    - Whisper (Radford et al., 2023): 用于转录和语言识别。
    - ROVER (Fiscus, 1997): 用于转录集成。
    - SentencePiece (Kudo & Richardson, 2018): 用于文本分词。
    - MeloTTS (Zhao et al., 2023): 用于合成语音。
    - WebOrganizer/TopicClassifier-NoURL (Wettig et al., 2025): 用于主题分析。
- 开源计划：论文中未提及开源计划。

📌 **核心摘要**

1.  要解决什么问题：针对语音-语言模型预训练中缺乏对数据处理和构建过程的系统研究，导致难以理解性能提升根源的问题。论文旨在通过以数据为中心的视角，回答三个关键问题：如何处理原始网络音频、如何构建合成数据、以及如何在训练中交错语音和文本模态。
2.  方法核心是什么：通过大规模受控消融实验，提出并验证了一套数据为中心的预训练策略：采用细粒度交错（保持说话人分割的短片段）、混合高质量合成语音-文本数据（如知识丰富的Krist和问答格式的Quest）、并在训练中使用确定性模态采样（强制交替语音和文本块）。
3.  与已有方法相比新在哪里：首次在语音-语言预训练领域，提供了针对数据处理、合成数据构造和模态交错策略的系统、可比的消融研究。与以往侧重模型架构或任务混合的工作不同，本文专注于在单一预训练任务（交错预测）下，隔离并量化数据相关因素的影响。
4.  主要实验结果如何：所有提出的策略均带来显著提升。最终，综合了所有数据洞见的SpeLangy模型（3.8B参数），在三个标准语音问答基准（SWQ, STQ, SLQ）上的平均准确率比参数量高达其3倍的竞品模型（如Kimi-Audio 10.5B）高出10.2%。关键消融结果包括：细粒度交错比粗粒度提升3.1%平均SQA准确率；加入Quest合成数据后，SQA平均提升7.2%；确定性采样比随机采样提升1%。
5.  实际意义是什么：为构建高效、高性能的语音-语言模型提供了明确、低成本的数据工程指南。证明了精心设计的数据策略可以在不增加模型规模的情况下大幅提升性能，对资源受限场景和模型设计范式具有重要指导意义。
6.  主要局限性是什么：研究完全基于英语数据，结论的跨语言适用性未验证。所有实验在约3.8B参数规模下进行，更大规模下的效果有待探索。虽然论文进行了污染分析并认为影响不大，但合成数据与评估集仍存在微小重叠。

---

