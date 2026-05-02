---
title: "ICLR 2026 - 语音情感识别 论文列表"
date: 2026-05-03
draft: false
tags: ["语音情感识别"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 语音情感识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音情感识别

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AVERE: Improving Audiovisual Emotion Reasoning with Preferen](/audio-paper-digest-blog/posts/2026-05-03-avere-improving-audiovisual-emotion-reasoning) | 7.5分 | 前25% |
| 🥈 | [Learnable Fractional Superlets with a Spectro-Temporal Emoti](/audio-paper-digest-blog/posts/2026-05-03-learnable-fractional-superlets-with-a-spectro) | 7.5分 | 前25% |
| 🥉 | [EmotionThinker: Prosody-Aware Reinforcement Learning for Exp](/audio-paper-digest-blog/posts/2026-05-03-emotionthinker-prosody-aware-reinforcement) | 7.5分 | 前25% |
| 4. | [VowelPrompt: Hearing Speech Emotions from Text via Vowel-lev](/audio-paper-digest-blog/posts/2026-05-03-vowelprompt-hearing-speech-emotions-from-text-via) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVERE: Improving Audiovisual Emotion Reasoning with Preference Optimization](/audio-paper-digest-blog/posts/2026-05-03-avere-improving-audiovisual-emotion-reasoning)

✅ **7.5/10** | 前25% | #语音情感识别 | #偏好优化 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Ashutosh Chaubey (南加州大学创意技术研究所， Institute for Creative Technologies)
- 通讯作者：Mohammad Soleymani (南加州大学创意技术研究所，邮箱: soleymani@ict.usc.edu)
- 作者列表：Ashutosh Chaubey (南加州大学创意技术研究所)， Jiacheng Pang (未说明)， Maksim Siniukov (未说明)， Mohammad Soleymani (南加州大学创意技术研究所)

💡 **毒舌点评**

亮点：论文非常系统，从问题诊断（定义推理与感知错误）、专用评测基准构建（EmoReAlM），到针对性优化方法（AVEm-DPO）一气呵成，特别是将DPO扩展到音频-视频输入对并引入文本先验去偏，技术动机清晰且验证充分。
短板：核心优化框架（DPO）是现有技术的适配，创新边界在于“如何针对情感推理任务构造偏好对”和“加入文本先验惩罚项”，在方法论上的原始突破性有限。另外，基准和训练数据主要基于DFEW、MAFW等现有数据集，可能存在文化偏见和短时视频的局限性。

🔗 **开源详情**

-   代码：论文中提到代码将在项目页面（avere-iclr.github.io）公开，但未在文中提供具体仓库链接。
-   模型权重：承诺将提供模型权重，未提及具体链接。
-   数据集：承诺公开EmoReAlM基准（不含原始视频），用户需自行获取底层视频。
-   Demo：未提及。
-   复现材料：提供了非常详细的附录，包括所有基准构建和方法实施的提示词、训练超参数、评估指标定义、基线实现细节、消融实验设置等。
-   论文中引用的开源项目：EmotionLLaMA, LanguageBind, Whisper, GPT-4o, Gemini-2.5, Qwen-2.5等。

📌 **核心摘要**

这篇论文针对多模态大语言模型在音视频情感推理中存在的两大关键问题：1）将情感与无关音视频线索错误关联的推理错误；2）因模型文本先验而幻觉出不存在的音视频线索的感知错误，开展了系统性研究。

1.  要解决什么问题：提升MLLM在音视频情感推理任务上的可靠性，减少模型输出中虚假的线索-情感关联和不存在的线索幻觉。
2.  方法核心是什么：提出了 AVEm-DPO 偏差优化方法。该方法包含三个关键组件：（a）提示级模态偏好：根据输入提示，对正确模态和错误模态的输入构建偏好，使模型专注于相关模态；（b）基于情绪的响应偏好：为每条正确响应构造两个拒绝响应（一个包含无关但相关的视频线索，一个包含幻觉的情绪相关线索），进行细粒度对比学习；（c）文本先验去偏：通过一个正则化项，惩罚模型仅凭文本输入就能生成的响应，从而抑制因语言模型偏差导致的幻觉。此外，论文还提出了一个新的评估基准 EmoReAlM。
3.  与已有方法相比新在哪里：区别于通用的多模态DPO方法（如Vista-DPO），AVEm-DPO专门针对情感推理任务设计了提示驱动的细粒度音视频输入偏好对和双重拒绝响应（视频相关/情绪相关），并创新性地引入了文本先验惩罚机制来直接解决MLLM的幻觉根源。EmoReAlM基准则专注于评估线索-情感关联、模态一致性和抗幻觉能力。
4.  主要实验结果如何：在提出的EmoReAlM基准和现有的DFEW、RAVDESS、EMER等多个数据集的零样本评估中，AVEm-DPO训练的模型相比其参考基线模型取得了6%-19%的相对性能提升。例如，在EmoReAlM的压力测试任务（检测虚假关联和幻觉）中，模型的F1分数从基线的约34-47%大幅提升至60%（音频）和81%（视觉），具体数据见下表。

关键实验结果对比表 (源自论文表3 & 5)：
| 模型/方法 | EmoReAlM 推理基本 (Acc) | EmoReAlM 模态一致 (F1) | EmoReAlM 压力测试-音频 (F1) | EmoReAlM 压力测试-视觉 (F1) | EMER 用户评测 (情绪↑) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Our base (基线) | 69.2 | 34.6 | 47.3 | 50.3 | - |
| + Naive-DPO | 71.3 | 41.6 | 55.1 | 54.8 | - |
| + Vista-DPO† | 72.4 | 52.1 | 73.6 | 73.6 | - |
| + AVEm-DPO (本文) | 77.9 | 60.0 | 92.7 | 97.6 | 54.74% |
| EmotionLLaMA⋆ | 64.8 | 33.1 | 46.7 | 63.2 | 1.89% |
| EmotionLLaMA⋆ + AVEm-DPO | 76.5 | 56.8 | 75.4 | 75.4 | - |

5.  实际意义是什么：为构建更可靠、可解释的社会智能体（如情感陪伴机器人、教育辅助系统）提供了关键的技术支撑和评估工具。改进后的模型能更准确地依据真实的音视频线索进行情感推理，减少误导性输出。
6.  主要局限性是什么：基准和训练数据主要源自DFEW等现有数据集，可能继承其文化偏见；模型对“厌恶”等模糊情感的识别能力仍然较弱；对长视频的情感理解尚未涉及。

---

### 🥈 [Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition](/audio-paper-digest-blog/posts/2026-05-03-learnable-fractional-superlets-with-a-spectro)

✅ **7.5/10** | 前25% | #语音情感识别 | #时频分析 | #端到端 #开源工具

👥 **作者与机构**

- 第一作者：Alaa Nfissi（Concordia Institute for Information Systems Engineering, Concordia University； Data Science Laboratory (DOT-Lab), Université TÉLUQ）
- 通讯作者：Alaa Nfissi (alaa.nfissi@mail.concordia.ca)
- 作者列表：Alaa Nfissi（Concordia University, Université TÉLUQ）、Wassim Bouachir（Data Science Laboratory (DOT-Lab), Université TÉLUQ）、Nizar Bouguila（Concordia University）、Brian Mishara（University of Qu’ebec at Montr‘eal）

💡 **毒舌点评**

论文在可解释的、物理启发的时频前端方面做了扎实的数学构建和工程实现，并且代码完全开源，为语音情感识别提供了一个有趣的非Transformer替代方案；然而，其提出的LFST前端计算开销巨大（比STFT高出数百倍），在论文自身的复杂度分析中已坦诚这一点，这严重限制了其在实际低延迟或资源受限场景中的应用潜力。

🔗 **开源详情**

- 代码：论文明确提供了开源代码仓库链接：https://github.com/alaaNfissi/LFST-for-SER
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文中使用的IEMOCAP和EMO-DB是公开的标准数据集。NSPL-CRISE是私营数据集，论文中未提及公开获取方式。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文附录（Technical Appendices）提供了极其详尽的复现信息，包括：所有符号总结、完整的数学推导（包括梯度）、LFST/LAHT/STEE的伪代码（算法1-3）、详细的超参数表（表8）、训练与评估协议、计算复杂度基准测试（表5）。这些信息足以支持复现。
- 论文中引用的开源项目：论文中未明确列出依赖的外部开源工具/模型代码。实验基于PyTorch框架。

📌 **核心摘要**

1.  问题：传统语音情感识别（SER）前端（如STFT、小波变换）施加固定的时频分辨率折衷，无法适应数据统计或任务需求；既有的“超小波”变体依赖整数阶和手动调参。
2.  方法核心：提出可学习分数阶超小波变换（LFST），一个完全可微分的前端，可联合优化对数频率网格、频率依赖的基础周期数以及可学习的分数阶权重（通过softmax归一化）。同时设计了一个紧凑的频谱-情感编码器（STEE），接收LFST输出的幅值图和相位一致性图进行分类。
3.  创新：将分数阶超小波扩展为一个全连续的、可学习的凸组合，克服了整数阶的“带状”伪影；引入相位一致性通道和可学习非对称硬阈值（LAHT）模块；提供了可微分、稳定且有数学依据的前端设计。
4.  结果：在三个数据集（IEMOCAP, EMO-DB, NSPL-CRISE）上进行了评估。LFST+STEE取得了有竞争力的性能：IEMOCAP（4类）准确率87.5%，F1分数86.8%；EMO-DB（7类）准确率91.4%，F1分数90.4%；NSPL-CRISE（5类）准确率76.9%，F1分数76.6%。消融实验证明了相位一致性和LAHT模块的有效性。与容量匹配的基线（STFT, CWT, 固定超小波， LEAF）相比，LFST+STEE均表现更优。
5.  意义：提供了一个数学上严谨、可微分、稳定且适应数据的时频分析前端，可系统地消融频率网格、周期表和分数阶。其可解释性（如学习到的阶数分布）对理解模型行为有帮助。
6.  局限性：LFST前端计算成本极高（FLOPs、延迟和内存远高于STFT/LEAF等），这是其主要实用限制；模型在有限数据集上训练，泛化性需验证。

---

### 🥉 [EmotionThinker: Prosody-Aware Reinforcement Learning for Explainable Speech Emotion Reasoning](/audio-paper-digest-blog/posts/2026-05-03-emotionthinker-prosody-aware-reinforcement)

✅ **7.5/10** | 前25% | #语音情感识别 | #强化学习 | #语音大模型 #数据集

👥 **作者与机构**

- 第一作者：Dingdong Wang（香港中文大学，微软）
- 通讯作者：未说明
- 作者列表：Dingdong Wang（香港中文大学，微软）、Shujie Liu（微软）、Tianhua Zhang（香港中文大学）、Youjun Chen（香港中文大学）、Jinyu Li（微软）、Helen M. Meng（香港中文大学）

💡 **毒舌点评**

亮点：将情感识别从“贴标签”升级为“讲道理”，并为此设计了从数据、基础模型到强化学习策略（GRPO-PTR）的完整技术栈，系统性很强；特别是引入“可信度权重”来惩罚推理与结论不一致的奖励，很有想法。短板：核心的“推理奖励模型”本身依赖GPT-4o生成训练数据，其评价标准的有效性存在“学生教学生”的闭环风险；此外，所有实验都在英语数据集上进行，对跨语言或真实场景的泛化能力未加验证。

🔗 **开源详情**

- 代码：论文提供了项目主页链接 `https://github.com/dingdongwang/EmotionThinker`，表明将开源代码。
- 模型权重：论文中提及“EmotionThinker outperforms previous state-of-the-art evaluation models”，但未明确说明权重是否会公开发布。需以项目主页实际发布情况为准。
- 数据集：构建了EmotionCoT-35K数据集，论文未说明是否会公开发布该数据集，也未提及获取方式。
- Demo：未提及。
- 复现材料：论文在附录中提供了大量细节，包括数据集构建流程、SFT语料构成、奖励模型训练数据构造方法、评估标准等，为复现提供了良好材料。
- 论文中引用的开源项目：Qwen2.5-Omni-7B/3B（基础模型）、WhiStress（重音检测）、wav2vec2.0（说话人特征分类）、GPT-4o（用于数据生成和评估）。

📌 **核心摘要**

1. 问题：当前的语音情感识别系统大多将情感视为一个简单的分类问题，这不仅限制了预测的可解释性，也未能充分利用语音大模型的推理潜力。
2. 方法核心：提出EmotionThinker框架，将情感识别重构为一个需要解释“为什么”的深度推理问题。它包含三个阶段：(1) 构建带有思维链注释的情感推理数据集EmotionCoT-35K；(2) 通过韵律增强的监督微调训练基础模型EmotionThinker-Base；(3) 使用提出的组相对策略优化与渐进式可信推理奖励（GRPO-PTR）进行强化学习。
3. 创新之处：首次在语音情感识别中应用强化学习进行可解释推理。GRPO-PTR策略是核心创新，它渐进式地引入一个训练好的推理奖励模型来评估中间推理过程的质量，并通过“可信度权重”动态调整该奖励，以惩罚推理过程与最终情感标签不一致的情况，确保推理的可靠性。
4. 主要实验结果：EmotionThinker在多个情感识别基准上达到了最优性能。与之前最佳模型BLSP-Emo相比，其平均准确率从65.41%提升至68.89%。在推理质量评估中，其平均分（3.98/5）远超所有基线模型（次高为Qwen2.5-Omni的2.87）。消融实验证明了GRPO-PTR各组件的有效性。

关键实验结果表

| 模型 | IEMOCAP | MELD | RAVDESS | SAVEE | 平均准确率(%) | 推理质量平均分 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Qwen2.5-Omni-7B | 45.70 | 54.64 | 64.77 | 52.49 | 50.83 | 2.87 |
| BLSP-Emo | 76.00 | 57.30 | 72.00 | 63.73 | 65.41 | 2.73 |
| EmotionThinker | 77.68 | 59.71 | 71.56 | 73.96 | 68.89 | 3.98 |

![推理质量对比](icassp-img://wbttgzp7MT/9.jpg)
论文中的实验结果图，展示了不同模型在多个基准上的准确率对比，EmotionThinker在大多数基准上取得最高分。

5. 实际意义：推动语音情感识别从“黑盒”分类走向可解释的多模态推理，提升了系统透明度和可信度，为人机交互和情感计算领域提供了新的范式。
6. 主要局限性：推理奖励模型的训练依赖GPT-4o生成不同质量的推理样本，可能存在偏差。所有实验均在英语数据集上进行，其有效性对其他语言环境的适用性未被证明。

---

### 4. [VowelPrompt: Hearing Speech Emotions from Text via Vowel-level Prosodic Augmentation](/audio-paper-digest-blog/posts/2026-05-03-vowelprompt-hearing-speech-emotions-from-text-via)

✅ **6.5/10** | 前25% | #语音情感识别 | #大语言模型 | #强化学习 #零样本

👥 **作者与机构**

- 第一作者：Yancheng Wang (Arizona State University, Meta Superintelligence Labs)
- 通讯作者：未说明
- 作者列表：Yancheng Wang (Arizona State University, Meta Superintelligence Labs)、Osama Hanna (Meta Superintelligence Labs)、Ruiming Xie (Meta Superintelligence Labs)、Xianfeng Rui (Meta Superintelligence Labs)、Maohao Shen (MIT, Meta Superintelligence Labs)、Xuedong Zhang (Meta Superintelligence Labs)、Christian Fuegen (Meta Superintelligence Labs)、Jilong Wu (Meta Superintelligence Labs)、Debjyoti Paul (Meta Superintelligence Labs)、Arthur Guo (Meta Superintelligence Labs)、Zhihong Lei (Meta Superintelligence Labs)、Ozlem Kalinli (Meta Superintelligence Labs)、Qing He (Meta Superintelligence Labs)、Yingzhen Yang (Arizona State University)

💡 **毒舌点评**

亮点在于将语音学中“元音承载韵律”这一经典知识，与当前火爆的LLM推理范式巧妙结合，提出了一套从声学特征到自然语言描述再到LLM输入的完整、可解释的转换流水线，为跨模态（音频-文本）情感理解提供了一个新颖的视角。短板在于框架高度依赖强制对齐工具的准确性，且对辅音及其他可能携带情感信息的声学线索（如音质、语速）考虑不足，削弱了其普适性和在复杂噪声环境下的鲁棒性。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及公开的模型权重。
- 数据集：论文中使用的数据集（IEMOCAP， MELD， CaFE， EmoDB， ASVP-ESD）均为公开数据集，但论文未提供获取链接或特别说明。
- Demo：论文中未提及在线演示。
- 复现材料：论文描述了方法框架和关键步骤（如特征计算、分箱、两阶段训练），并提供了部分消融实验设置。但完整的训练超参数（学习率、batch size等）、模型配置、GRPO的具体实现细节未在论文主体中给出，可能依赖于附录（附录内容未完全提供）。
- 论文中引用的开源项目：
    - 强制对齐工具：Montreal Forced Aligner (MFA)。
    - 声学特征计算：提到了Praat算法。
    - LLM骨干：LLaMA系列（LLaMA-3-8B-Instruct, LLaMA-4-Scout）、Qwen2-7B-Instruct、GPT-4o。
    - RL算法：引用了GRPO（来自DeepSeek-AI等）。
- 开源计划：论文中未提及开源计划。

📌 **核心摘要**

1.  问题：现有的基于文本的大语言模型（LLM）在语音情感识别（SER）中忽视了精细的韵律信息，而基于音频的深度学习模型又缺乏可解释性。
2.  方法核心：提出VowelPrompt框架。首先，通过强制对齐技术提取语音中的元音片段。然后，为每个元音计算一组低级描述符（音高、强度、时长等），并将其离散化后转换为自然语言描述（如“高音调，上升，响亮，延长”）。将这些描述与文本转录一起作为LLM的输入。模型训练采用两阶段策略：监督微调（SFT）和基于可验证奖励的强化学习（RLVR，具体为GRPO算法）。
3.  创新点：a) 首次提出以元音为中心的精细韵律特征作为LLM的输入，取代了粗糙的句子级描述或不透明的音频嵌入。b) 将声学特征转换为自然语言，实现了可解释的跨模态信息融合。c) 采用SFT+GRPO的两阶段训练，兼顾了任务对齐和推理能力的优化。
4.  主要实验结果：在IEMOCAP、MELD、CaFE、EmoDB和ASVP-ESD等五个基准数据集上进行了评估。在零样本、微调、跨域和跨语言条件下，VowelPrompt均优于现有的基于提示或微调的基线方法。例如，在IEMOCAP零样本设置（GPT-4o，输入为转录+上下文）下，加权F1（WF1）达到60.74%，比基线高7.11%；在跨域（IEMOCAP->MELD）SFT+GRPO设置下，WF1达到60.28%，比SpeechCueLLM高5.12%。消融实验证明了每个声学特征、分箱数K=5以及两阶段训练的有效性。
5.  实际意义：提供了一种可解释的、无需在推理时访问原始音频的语音情感识别方案，增强了LLM对非语言韵律信息的感知能力，在人机交互、内容审核等领域有潜在应用。
6.  主要局限性：框架严重依赖强制对齐工具，对齐错误会直接影响性能；特征提取主要集中在元音，忽略了辅音和其他音质特征；将连续声学特征离散化为自然语言可能损失信息；模型性能受限于底层LLM的能力。

---

