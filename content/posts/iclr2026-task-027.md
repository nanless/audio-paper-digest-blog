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
| 🥇 | [Learnable Fractional Superlets with a Spectro-Temporal Emoti](/audio-paper-digest-blog/posts/2026-05-03-learnable-fractional-superlets-with-a-spectro) | 8.5分 | 前25% |
| 🥈 | [EmotionThinker: Prosody-Aware Reinforcement Learning for Exp](/audio-paper-digest-blog/posts/2026-05-03-emotionthinker-prosody-aware-reinforcement) | 7.8分 | 前25% |
| 🥉 | [VowelPrompt: Hearing Speech Emotions from Text via Vowel-lev](/audio-paper-digest-blog/posts/2026-05-03-vowelprompt-hearing-speech-emotions-from-text-via) | 7.0分 | 前25% |
| 4. | [AVERE: Improving Audiovisual Emotion Reasoning with Preferen](/audio-paper-digest-blog/posts/2026-05-03-avere-improving-audiovisual-emotion-reasoning) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition](/audio-paper-digest-blog/posts/2026-05-03-learnable-fractional-superlets-with-a-spectro)

🔥 **8.5/10** | 前25% | #语音情感识别 | #时频分析 | #端到端

👥 **作者与机构**

- 第一作者：Alaa Nfissi（Concordia University；Université TÉLUQ）
- 通讯作者：未明确说明，但第一作者Alaa Nfissi提供了邮箱地址。
- 作者列表：Alaa Nfissi（Concordia University；Université TÉLUQ），Wassim Bouachir（Université TÉLUQ），Nizar Bouguila（Concordia University），Brian Mishara（Université du Québec à Montréal）

💡 **毒舌点评**

这篇论文的“理论包装”堪称精致，把经典信号处理思想（分数阶超小波）成功改造为可学习的深度学习前端，并给出了扎实的数学分析和稳定的工程实现。不过，其最终效果提升主要来源于将时频分析的关键参数“交由数据学习”，这种思路在音频领域并不算特别新奇，且计算开销显著高于传统前端（如STFT），属于“用计算换灵活性”的典型策略，更适合对精度要求高且对延迟不敏感的离线分析场景。

🔗 **开源详情**

- 代码：提供完整代码仓库链接：`https://github.com/alaaNfissi/LFST-for-SER`。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：IEMOCAP和EMO-DB是公开数据集；NSPL-CRISE是私有数据集，论文中未说明其公开获取途径。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详细的复现指南，包括所有组件的伪代码（算法1-3）、超参数表（表8）、训练评估协议、数据集统计（表7）以及计算复杂度分析（表5）。附录A-I涵盖了符号、推导、实现细节和可重复性说明。
- 依赖的开源项目：论文依赖PyTorch、NumPy、SciPy、scikit-learn等标准科学计算库。未明确提及依赖其他特定开源音频模型或工具。
- 总体：论文的开源工作非常出色，提供了充分的信息以复现其全部结果。

📌 **核心摘要**

1. 问题：传统语音情感识别（SER）的前端（如STFT、小波变换）采用固定的时间-频率分辨率权衡，无法适应语音信号的非平稳特性和情感线索的多样性；既有的超小波（Superlet）方法依赖固定的整数阶参数，需要手动调优。
2. 核心方法：提出可学习分数超小波变换（LFST），这是一种完全可微分的端到端时频分析前端。LFST将超小波阶数从整数扩展到连续的分数阶，通过softmax权重在离散阶数上实现可学习的混合。它联合优化三个关键参数：单调的对数频率网格、频率相关的基底循环数、以及分数阶权重。LFST输出幅度图（S）和相位一致性图（κ），后者由加权单位相量计算得到。系统还包括一个可学习的非对称硬阈值（LAHT）模块用于对幅度图进行稀疏化去噪。
3. 新意：与固定前端或先前的整数/分数阶超小波相比，LFST实现了完全连续、可学习、端到端优化的时频表示。其核心创新在于将时频分辨率权衡从固定设计选择转变为数据驱动的归纳偏置，并引入了信息量丰富的相位一致性通道（κ）。
4. 主要结果：在IEMOCAP、EMO-DB和NSPL-CRISE数据集上，LFST+STEE系统取得了优于多种固定前端和可学习前端基线（如STFT、CWT、LEAF）的性能。关键数据对比如下表所示：
    | 方法 | NSPL-CRISE (Acc/F1) | IEMOCAP (Acc/F1) | EMO-DB (Acc/F1) |
    | :--- | :--- | :--- | :--- |
    | STFT+STEE | 73.1/72.7 | 84.8/84.0 | 89.0/88.2 |
    | Wavelet+STEE | 74.6/74.6 | 85.4/84.8 | 90.1/89.5 |
    | Fixed Superlet+STEE | 74.9/74.7 | 86.0/85.1 | 90.1/89.8 |
    | LEAF+STEE | 72.5/72.1 | 84.9/84.1 | 89.0/88.2 |
    | LFST+STEE (Ours) | 76.9/76.6 | 87.5/86.8 | 91.4/90.4 |
5. 实际意义：提供了一种数学上有依据、可解释且可适应数据的语音分析前端，可用于需要精细时频分析的语音情感识别及其他音频任务。
6. 局限性：与简单前端相比，LFST的计算复杂度和内存开销显著增加。论文主要评估了与紧凑编码器的搭配，未与大规模自监督模型（如wav2vec 2.0）进行直接对比。其有效性在多大程度上依赖于特定编码器结构（STEE）有待验证。

---

### 🥈 [EmotionThinker: Prosody-Aware Reinforcement Learning for Explainable Speech Emotion Reasoning](/audio-paper-digest-blog/posts/2026-05-03-emotionthinker-prosody-aware-reinforcement)

✅ **7.8/10** | 前25% | #语音情感识别 | #强化学习 | #语音大模型 #数据集

👥 **作者与机构**

- 第一作者：未说明（摘要未明确指出）
- 通讯作者：未说明（摘要未明确指出）
- 作者列表：Dingdong WANG, Shujie LIU, Tianhua Zhang, Youjun Chen, Jinyu Li, Helen M. Meng（所有作者所属机构均未提供）

💡 **毒舌点评**

论文抓住了当前语音大模型在情感理解上“只分类、不推理”的痛点，提出了一个从数据、模型到训练框架的完整改进方案，尤其是将强化学习引入可解释语音情感推理，思路新颖。然而，摘要中缺乏关键实验的具体数值（如准确率、解释质量评分）和复现细节，使得“优于SOTA”的结论说服力打折扣，更像是提出了一个有影响力的框架而非一个被充分验证的解决方案。

🔗 **开源详情**

根据论文摘要提供的信息：
- 代码：论文中未提及代码链接。
- 模型权重：论文提及发布了“EmotionThinker-Base”和“EmotionThinker”模型，但未提供具体的权重下载链接或平台信息。
- 数据集：论文提及发布了“EmotionCoT-35K”数据集，但未说明获取方式（如官网、仓库地址）。
- Demo：论文中未提及在线演示。
- 复现材料：论文中未提供详细的训练细节、超参数配置、检查点或附录说明。
- 论文中引用的开源项目：论文中未提及依赖的任何开源工具或模型。

总结：论文中提及了新资源（数据集、模型）的存在，但未提供任何具体的、可访问的开源链接或详细的复现材料，因此无法进行有效复现。整体上，论文中未提及完整的开源计划。

📌 **核心摘要**

这篇论文旨在解决当前语音大模型在情感识别上可解释性差、推理能力弱的问题。其方法核心是将语音情感识别（SER）重构为深度推理任务，并利用强化学习（RL）来训练模型生成带推理链的情感判断。与传统分类方法相比，新方法构建了专门的推理数据集（EmotionCoT-35K），增强了模型对韵律等关键声学线索的感知能力，并提出了一种名为GRPO-PTR的新型RL算法，该算法能结合规则奖励和模型评估的推理奖励进行动态优化。实验表明，该模型（EmotionThinker）在情感准确率和解释质量上均优于现有SOTA模型（论文未提供具体数值表格）。其实际意义在于推动语音情感分析向更透明、可信赖的“情感AI”发展。主要局限性可能在于训练复杂度和所需计算资源，以及新数据集规模和代表性的进一步验证。

---

### 🥉 [VowelPrompt: Hearing Speech Emotions from Text via Vowel-level Prosodic Augmentation](/audio-paper-digest-blog/posts/2026-05-03-vowelprompt-hearing-speech-emotions-from-text-via)

✅ **7.0/10** | 前25% | #语音情感识别 | #大语言模型 | #多语言 #数据增强

👥 **作者与机构**

- 第一作者：Yancheng Wang (1,2*)
  (1: Meta Superintelligence Labs, 2: Arizona State University)
- 通讯作者：未明确标注（论文注明工作在Meta实习期间完成，通讯邮箱ohanna@meta.com）
- 作者列表：
    - Yancheng Wang (Meta Superintelligence Labs, Arizona State University)
    - Osama Hanna (Meta Superintelligence Labs)
    - Ruiming Xie (Meta Superintelligence Labs)
    - Xianfeng Rui (Meta Superintelligence Labs)
    - Maohao Shen (Meta Superintelligence Labs, Massachusetts Institute of Technology)
    - Xuedong Zhang (Meta Superintelligence Labs)
    - Christian Fuegen (Meta Superintelligence Labs)
    - Jilong Wu (Meta Superintelligence Labs)
    - Debjyoti Paul (Meta Superintelligence Labs)
    - Arthur Guo (Meta Superintelligence Labs)
    - Zhihong Lei (Meta Superintelligence Labs)
    - Ozlem Kalinli (Meta Superintelligence Labs)
    - Qing He (Meta Superintelligence Labs)
    - Yingzhen Yang (Arizona State University)

💡 **毒舌点评**

亮点在于其巧妙的“翻译”思想，将连续的声学信号通过语音学规则转换成LLM可理解的离散文本描述，实现了跨模态知识迁移，并在多个数据集上验证了有效性。短板在于，该方法严重依赖上游的语音强制对齐工具和LLM本身的推理能力，若对齐出错或LLM存在偏差，整个系统链条会放大误差；且未开源代码，极大削弱了其实际可验证性和应用价值。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用的是公开数据集（IEMOCAP, MELD, CaFE, EmoDB, ASVP-ESD），未提供额外数据。
- Demo：未提供在线演示。
- 复现材料：论文在附录中提供了大量消融实验细节、提示模板（附录B）、以及关于K值、语言、语音速率等的分析，这些信息对复现有帮助。但核心训练配置（如LoRA参数、学习率、批次大小、训练轮数）和预处理工具的具体版本未说明。
- 论文中引用的开源项目：提及了openSMILE, Praat, Montreal Forced Aligner (MFA), LLaMA系列模型, Qwen2模型, GPT-4o等作为基线或工具。
- 总体而言，论文中未提及开源计划，其可复现性存在较大不确定性。

📌 **核心摘要**

1. 问题：基于文本的大语言模型在语音情感识别任务中，因缺乏对韵律（如音高、强度）等声学特征的理解而效果受限。
2. 方法核心：提出VowelPrompt框架。该方法首先通过强制对齐获取文本中每个元音的时间边界，然后提取每个元音片段的基频、强度、时长等6个低级描述符，并进行说话人和元音类型归一化。这些连续特征通过分位数分箱离散化为“very low”到“very high”等文本描述，最后与转录文本拼接，作为LLM的输入提示。
3. 与已有方法相比新在哪里：与仅使用整句话级韵律描述的SpeechCueLLM相比，VowelPrompt提供了更细粒度（元音级）、可解释且与语音学理论更契合的特征。同时，它采用两阶段训练：监督微调（SFT）和基于可验证奖励的强化学习（RLVR），以增强LLM的推理能力和格式遵守度。
4. 主要实验结果：在IEMOCAP和MELD等5个基准数据集上的评估表明，VowelPrompt在零样本、微调、跨域和跨语言设置下均优于基线。例如，在零样本设置下，使用GPT-4o时，VowelPrompt在IEMOCAP上比仅用转录本的基线提升高达7.80% UACC。在微调（SFT & GRPO）设置下，在IEMOCAP上比SpeechCueLLM提升1.47% WF1。
5. 实际意义：该方法为纯文本LLM接入语音情感信息提供了一种轻量、可解释的方案，无需在推理时访问原始音频，且可解释的中间描述有助于理解模型决策。
6. 主要局限性：性能高度依赖强制对齐的准确性；特征转换为离散文本可能损失部分信息；跨语言扩展需依赖多语言对齐工具和LLM；未开源代码和模型，可复现性存疑。

---

### 4. [AVERE: Improving Audiovisual Emotion Reasoning with Preference Optimization](/audio-paper-digest-blog/posts/2026-05-03-avere-improving-audiovisual-emotion-reasoning)

✅ **6.5/10** | 前50% | #语音情感识别 | #偏好优化 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Ashutosh Chaubey（未说明）
- 通讯作者：未说明
- 作者列表：Ashutosh Chaubey（未说明）、Jiacheng Pang（未说明）、Maksim Siniukov（未说明）、Mohammad Soleymani（未说明）

💡 **毒舌点评**

这篇论文最大的亮点在于问题定义精准，直指当前多模态大模型在情感任务上的“阿喀琉斯之踵”——看似合理的回答实则基于错误的模态关联或凭空产生的幻觉，并为此提供了系统性的量化评估工具（EmoReAlM）。然而，最大的短板也显而易见，即从摘要看，所提优化方法（AVEm-DPO）似乎仍是基于现有偏好优化框架的领域特定适配，其核心机制的新颖度和通用性有待全文及代码验证，且“6-19%的相对提升”若缺乏在强基线上的绝对数值对比，说服力会打折扣。

🔗 **开源详情**

-   代码：论文中未提及代码链接。
-   模型权重：论文中未提及公开优化后的模型权重。
-   数据集：论文中提到了EmoReAlM基准，但未说明是否公开以及如何获取；所用的训练数据（偏好数据）也未说明来源。
-   Demo：论文中未提及在线演示。
-   复现材料：论文摘要中未提供详细的训练配置、超参数或检查点信息。
-   引用的开源项目：论文摘要中未提及依赖的其他开源工具或模型。
-   总结：根据当前提供的摘要信息，论文中未提及明确的开源计划。

📌 **核心摘要**

1.  要解决什么问题：当前多模态大语言模型在进行音频视觉情感推理时，存在两个关键缺陷：一是模型会错误地将情感与不相关的音视频线索相关联（虚假关联）；二是受语言模型先验影响，模型会“想象”出并不存在的音视频线索（幻觉）。
2.  方法核心是什么：首先，提出了一个名为EmoReAlM的专用评测基准，用于量化评估模型在线索-情感关联、幻觉和模态一致性方面的问题。其次，提出了一种名为AVEm-DPO的偏好优化技术，通过构建包含错误类型（虚假关联/幻觉）和正确音视频对的偏好数据，并引入惩罚模型依赖文本先验的正则化项，来对齐模型输出。
3.  与已有方法相比新在哪里：新在两点：一是针对多模态情感推理的特定失败模式，构建了专门的评估基准；二是对直接偏好优化（DPO）方法进行了适配性改造，使其专注于纠正模态错误关联和减少幻觉，而非一般的指令跟随或安全性对齐。
4.  主要实验结果如何：在DFEW、RAVDESS和EMER三个数据集上的零样本实验中，AVEm-DPO方法将参考基线模型的性能相对提升了6%-19%。论文未在摘要中提供具体的绝对数值表格。
5.  实际意义是什么：这项工作为诊断和改进多模态模型的情感理解能力提供了标准化的评估工具和有效的优化框架，有助于推动更可靠、更符合人类感知的社会智能体的开发。
6.  主要局限性是什么：论文摘要未提及所提出方法的计算开销、对基线模型选择的敏感性，以及EmoReAlM基准是否覆盖了足够广泛和真实的情感场景与线索类型。

---

