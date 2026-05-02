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
| 🥇 | [Learnable Fractional Superlets with a Spectro-Temporal Emoti](/audio-paper-digest-blog/posts/2026-05-03-learnable-fractional-superlets-with-a-spectro) | 8.0分 | 前25% |
| 🥈 | [VowelPrompt: Hearing Speech Emotions from Text via Vowel-lev](/audio-paper-digest-blog/posts/2026-05-03-vowelprompt-hearing-speech-emotions-from-text-via) | 7.5分 | 前25% |
| 🥉 | [AVERE: Improving Audiovisual Emotion Reasoning with Preferen](/audio-paper-digest-blog/posts/2026-05-03-avere-improving-audiovisual-emotion-reasoning) | 7.5分 | 前25% |
| 4. | [EmotionThinker: Prosody-Aware Reinforcement Learning for Exp](/audio-paper-digest-blog/posts/2026-05-03-emotionthinker-prosody-aware-reinforcement) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition](/audio-paper-digest-blog/posts/2026-05-03-learnable-fractional-superlets-with-a-spectro)

🔥 **8.0/10** | 前25% | #语音情感识别 | #时频分析 | #端到端 #语音增强

👥 **作者与机构**

- 第一作者：Alaa Nfissi (Concordia University, Data Science Laboratory (DOT-Lab), Université TÉLUQ)
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Alaa Nfissi（Concordia University， DOT-Lab, Université TÉLUQ）、Wassim Bouachir（DOT-Lab, Université TÉLUQ）、Nizar Bouguila（Concordia Institute for Information Systems Engineering, Concordia University）、Brian Mishara（Psychology Department, University of Qu´ebec at Montr´eal；Center for Research and Intervention on Suicide, Ethical Issues and End-of-Life Practices）

💡 **毒舌点评**

亮点：将小波分析中的“Superlet”概念与深度学习完美融合，提出了理论上坚实、端到端可训练的LFST前端，彻底摒弃了传统固定时频变换的妥协，在多个数据集上实现了SOTA，尤其在嘈杂电话语音数据（NSPL-CRISE）上优势明显。短板：LFST前端的计算开销（201.5 GFLOPs）是STFT的数百倍，是LEAF的4.5倍，这种“重前端、轻编码器”的策略在实时或资源受限场景下的部署将面临严峻挑战，论文对此trade-off的讨论略显不足。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/alaaNfissi/LFST-for-SER。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：IEMOCAP和EMO-DB为公开数据集；NSPL-CRISE为私有数据集（标注过的电话录音），论文中未说明获取方式。
- Demo：未提及。
- 复现材料：论文正文和附录详细说明了所有组件（LFST, LAHT, STEE）的数学原理、实现细节（如伪代码）、训练协议、评估指标和关键超参数。提供了链接到复现仓库。
- 引用的开源项目：论文中未明确列出其依赖的其他开源工具或模型，但其代码实现必然依赖于PyTorch等框架。

📌 **核心摘要**

1. 问题：传统语音情感识别（SER）方法使用的时频（TF）前端（如STFT、小波）具有固定的时频分辨率权衡，无法根据数据自适应调整，限制了性能。
2. 方法核心：提出一种可学习的分数阶Superlet变换（LFST）作为全新的前端。LFST从原理上出发，将多个不同周期的Morlet小波响应通过对数域的加权几何平均进行融合，其权重、频率网格和基础周期均可学习。LFST输出幅度谱和相位一致性图，与一个紧凑的频谱-时域情感编码器（STEE）结合，实现端到端训练。
3. 创新点：首次将超分辨率小波变换（Superlet）形式化为全可微、端到端可学习的前端；通过Softmax权重实现连续的分数阶序，避免了阶跃伪影；同时引入了可学习的非对称硬阈值（LAHT）模块用于TF激活去噪。
4. 实验结果：在IEMOCAP（4类）上取得87.5%准确率/0.868 F1；在EMO-DB（7类）上取得91.4%准确率/0.904 F1；在嘈杂的NSPL-CRISE（5类，电话语音）上取得76.9%准确率/0.766 F1。在所有数据集上均超越了表2和表3中列出的其他方法，包括与相同STEE骨干网络的各种固定前端基线（STFT, CWT, 固定Superlet, LEAF）。关键消融实验（表6）表明，相位一致性通道（κ）贡献了大部分增益。
5. 实际意义：为语音前端设计提供了一种新的、数学驱动的可学习范式，有望提升对噪声、非平稳信号的分析能力，可推广至其他音频处理任务。
6. 主要局限性：LFST前端计算成本和内存占用远高于传统前端；模型仅在有限的数据集和语言（英语、德语）上验证；论文未与大型自监督预训练模型（如wav2vec 2.0）进行端到端比较。

---

### 🥈 [VowelPrompt: Hearing Speech Emotions from Text via Vowel-level Prosodic Augmentation](/audio-paper-digest-blog/posts/2026-05-03-vowelprompt-hearing-speech-emotions-from-text-via)

✅ **7.5/10** | 前25% | #语音情感识别 | #数据增强 | #大语言模型 #零样本

👥 **作者与机构**

- 第一作者：Yancheng Wang（Meta Superintelligence Labs， Arizona State University）
- 通讯作者：未明确说明（论文未指定通讯作者）
- 作者列表：Yancheng Wang (Meta Superintelligence Labs, Arizona State University), Osama Hanna (Meta Superintelligence Labs), Ruiming Xie (Meta Superintelligence Labs), Xianfeng Rui (Meta Superintelligence Labs), Maohao Shen (Meta Superintelligence Labs, Massachusetts Institute of Technology), Xuedong Zhang (Meta Superintelligence Labs), Christian Fuegen (Meta Superintelligence Labs), Jilong Wu (Meta Superintelligence Labs), Debjyoti Paul (Meta Superintelligence Labs), Arthur Guo (Meta Superintelligence Labs), Zhihong Lei (Meta Superintelligence Labs), Ozlem Kalinli (Meta Superintelligence Labs), Qing He (Meta Superintelligence Labs), Yingzhen Yang (Arizona State University)

💡 **毒舌点评**

亮点在于论文将语音学中“元音是情感韵律主要载体”的经典知识，非常工程化地落地为一个为LLM“翻译”语音韵律的文本提示框架，实验设计全面，说服力强。短板是其核心创新——将声学特征转换为离散文本描述——是一种“翻译”而非“理解”，可能丢失了连续特征间的复杂关系，且推理时对强制对齐的依赖使其“无需原始音频”的声称在实际部署中需要前置处理，稍显矛盾。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用的是公开数据集（IEMOCAP， MELD， CaFE， EmoDB， ASVP-ESD）。
- Demo：未提供在线演示。
- 复现材料：论文中提供了非常详细的算法步骤、特征提取方法、归一化流程、提示模板（见附录B）和实验配置，为复现提供了充分的文本指南。
- 论文中引用的开源项目：提到了Montreal Forced Aligner (MFA) 用于强制对齐。未提及其他依赖的开源模型或代码库。

📌 **核心摘要**

1.  问题：基于文本的大语言模型（LLM）在语音情感识别中因忽略精细的韵律信息（如音高、能量、时长）而性能受限。
2.  方法核心：提出VowelPrompt，一个基于语音学理论的框架。它通过强制对齐从语音中提取时间对齐的元音片段，计算其韵律特征（音高、能量、时长），经标准化和分箱后转换为自然语言描述（如“high F0, rising, loud”），并附加到文本转录中，使LLM能联合推理语义和韵律信息。训练采用监督微调（SFT）+ 基于组相对策略优化（GRPO）的强化学习（RLVR）两阶段。
3.  新在何处：不同于使用粗糙句子级描述或需要音频编码器的多模态模型，VowelPrompt提供了可解释的、精细到元音级别的文本韵律提示，且完全在文本LLM框架内工作。
4.  主要结果：在五个基准数据集（IEMOCAP， MELD等）的广泛评估中，VowelPrompt在零样本、微调、跨域和跨语言条件下均优于基线方法。例如，在IEMOCAP零样本设置中，使用GPT-4o时WF1比基线高7.11%（表3）；在微调设置下，使用LLaMA-3-8B时WF1比SpeechCueLLM高1.47%（表4）。
5.  实际意义：为在文本LLM系统中实现可解释、可审计的语音情感理解提供了一种轻量级、模块化的方案，便于部署。
6.  主要局限性：依赖强制对齐的准确性；将连续声学特征离散化为文本描述可能损失信息；性能提升部分依赖于强大的基础LLM。

---

### 🥉 [AVERE: Improving Audiovisual Emotion Reasoning with Preference Optimization](/audio-paper-digest-blog/posts/2026-05-03-avere-improving-audiovisual-emotion-reasoning)

✅ **7.5/10** | 前25% | #语音情感识别 | #偏好优化 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Ashutosh Chaubey（南加州大学创新技术研究所）
- 通讯作者：Mohammad Soleymani（南加州大学创新技术研究所）
- 作者列表：Ashutosh Chaubey（南加州大学创新技术研究所）、Jiacheng Pang（未说明）、Maksim Siniukov（未说明）、Mohammad Soleymani（南加州大学创新技术研究所）

💡 **毒舌点评**

亮点：论文直面多模态大模型在情感推理中的“硬伤”——将无关线索与情感关联的“推理错误”和凭空捏造线索的“感知错误”，并为此专门设计了一个可量化的基准（EmoReAlM）和一套组合拳式的优化方法（AVEm-DPO），系统性很强。短板：AVEm-DPO本质上是DPO在多模态场景下的一个特化应用（模态偏好+文本去偏），技术创新幅度有限，更多是工程组合与细致实验验证。

🔗 **开源详情**

- 代码：论文承诺将在项目页面（avere-iclr.github.io）开源代码。
- 模型权重：论文承诺将开源模型权重。
- 数据集：论文承诺将开源EmoReAlM基准测试集。偏好训练数据集由论文提及的源数据（MAFW, MER2025）通过公开流水线生成。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文提供了详细的训练配置（学习率、批大小、优化器、LoRA设置等）、数据生成提示词（附录B.1）和超参数敏感性分析（附录E.7），复现材料充足。
- 引用的开源项目：论文依赖了多个开源模型/工具，包括：LanguageBind（视频编码器）、Whisper-Large-v3（音频编码器）、Gemini-2.5 Flash（数据生成）、Prolific（众包平台）、以及作为基线的VideoLLaMA2、OLA、VITA-1.5、Qwen2.5 Omni等模型。

📌 **核心摘要**

1.  要解决的问题：当前用于情感理解的多模态大语言模型存在两大关键缺陷：一是将情感预测建立在无关的音频视觉线索上（推理错误），二是为了合理化情感而虚构出不存在的线索（感知错误），后者尤其受语言模型的文本先验驱动。
2.  方法核心：提出AVEm-DPO，一种多模态直接偏好优化技术。它通过构建两类偏好对：(1) 基于提示的模态输入偏好，确保模型关注正确的模态线索；(2) 基于情感的响应偏好，惩罚那些包含无关线索或虚构线索的回答。同时引入文本先验去偏正则化项，减少模型对仅文本输入的依赖。
3.  与已有方法的比较新意：与仅使用响应偏好的Naive-DPO不同，AVEm-DPO显式地在音频视觉输入层面和响应层面构建偏好，并专门针对情感推理任务设计了“推理正确但线索无关”和“情感相关但线索虚构”两类拒绝响应。与Vista-DPO相比，其模态偏好是提示词（prompt）驱动的，更具针对性。
4.  主要实验结果：在提出的EmoReAlM基准测试上，AVEm-DPO使参考基线模型（“Our base”和“EmotionLLaMA⋆”）的平均准确率分别从65.1%提升至83.3%和从63.8%提升至80.1%（相对提升约28%和25.5%）。在零样本评估的现有数据集（DFEW, RAVDESS, MER2023, EMER）上，也获得了6-19%的相对性能提升。具体关键结果见下表。

| 模型 | DFEW (UAR/WAR) | RAVDESS (UAR/WAR) | MER2023 (F1) | EMER (Clue/Label/Spurious/Halluc.) |
| :--- | :--- | :--- | :--- | :--- |
| Our base | 56.78 / 60.14 | 53.59 / 53.01 | 89.19 | 5.63 / 6.45 / 5.41 / 5.19 |
| + AVEm-DPO | 58.54 / 64.24 | 58.66 / 55.48 | 92.18 | 6.37 / 7.08 / 7.09 / 6.75 |
| EmotionLLaMA⋆ | 54.89 / 58.26 | 52.59 / 48.12 | 90.01 | 5.78 / 6.21 / 5.36 / 5.23 |
| + AVEm-DPO | 57.06 / 62.12 | 56.21 / 51.03 | 91.68 | 6.02 / 6.99 / 7.02 / 6.62 |

5.  实际意义：提供了一个严谨的基准（EmoReAlM）和一个有效的优化框架（AVEm-DPO），可用于评估和提升多模态大模型在情感推理任务上的可靠性、可解释性和鲁棒性，推动社交AI发展。
6.  主要局限性：EmoReAlM基准源自DFEW数据集，可能继承其文化偏差；当前工作主要针对短视频（~2-10秒），长视频情感推理尚未探索；对“厌恶”等模糊情感的识别仍有提升空间。

---

### 4. [EmotionThinker: Prosody-Aware Reinforcement Learning for Explainable Speech Emotion Reasoning](/audio-paper-digest-blog/posts/2026-05-03-emotionthinker-prosody-aware-reinforcement)

✅ **7.5/10** | 前25% | #语音情感识别 | #强化学习 | #数据集 #语音大模型

👥 **作者与机构**

-   第一作者：Dingdong WANG（香港中文大学信息工程系，微软亚洲研究院）
-   通讯作者：未说明
-   作者列表：Dingdong WANG（香港中文大学，微软）、Shujie LIU（微软）、Tianhua Zhang（香港中文大学）、Youjun Chen（香港中文大学）、Jinyu Li（微软）、Helen M. Meng（香港中文大学）

💡 **毒舌点评**

亮点在于首次将RL范式引入语音情感推理，并通过精心设计的“渐进式信任奖励”来约束开放式推理质量，方法完整且实验扎实。短板在于其“可解释性”的本质仍是生成一段符合逻辑的文本描述，模型是否真正“理解”声学信号与情感间的因果关系，仍需更深入的探查，当前证据更多停留在“生成解释与正确标签对齐”上。

🔗 **开源详情**

-   代码：提供GitHub仓库链接：https://github.com/dingdongwang/EmotionThinker
-   模型权重：论文中未明确提及是否开源预训练或最终的模型权重。
-   数据集：EmotionCoT-35K数据集已提供，可通过上述GitHub仓库获取。
-   Demo：论文中未提及在线演示。
-   复现材料：论文正文和附录提供了详细的实现细节，包括模型架构、训练策略、所有奖励函数定义、关键超参数设置、数据构建流水线、以及用于数据合成和评估的GPT-4o提示词模板。
-   引用的开源项目：基于Qwen2.5-Omni-7B和Qwen2.5-Omni-3B构建；使用WhiStress进行重音检测；使用wav2vec 2.0进行说话人特征分类；使用GPT-4o API进行数据合成与评估。

📌 **核心摘要**

1.  问题：现有语音情感识别（SER）系统和语音大模型大多将情感理解视为简单的分类问题，缺乏可解释性，且未能充分利用大模型的推理能力。
2.  方法：提出EmotionThinker框架，首次通过强化学习（RL）将SER重新定义为可解释的深度推理问题。框架分三步：(1) 构建包含思维链（CoT）注释的情感推理数据集EmotionCoT-35K；(2) 通过以韵律为中心的监督微调（SFT）增强基础模型的韵律感知能力；(3) 提出“渐进式信任感知推理奖励”的组相对策略优化（GRPO-PTR）进行RL训练，以生成准确且可解释的情感推理。
3.  创新：核心创新在于(1) 问题重构：从分类到推理；(2) 数据构建：首个针对SER的韵律感知CoT数据集；(3) 模型增强：专门提升韵律感知；(4) 训练策略：提出GRPO-PTR，通过可信度权重动态调整推理奖励，确保推理过程与最终结果对齐。
4.  结果：在四个基准数据集（IEMOCAP, MELD, RAVDESS, SAVEE）上，EmotionThinker的情感识别准确率和推理质量评分均显著优于16个基线模型。例如，在平均准确率上达到68.89%，比次优模型BLSP-Emo（65.41%）高出约3.5个百分点；推理质量平均分达3.98（5分制）。消融实验证明了GRPO-PTR各组件的有效性。
5.  意义：推动了SER从“黑箱”分类向“可解释”推理的范式转变，增强了模型的可信度和人机交互潜力。
6.  局限：推理过程的“可解释性”高度依赖生成的文本描述，模型对底层声学信号的理解深度仍待验证；框架构建复杂，包含数据合成、多阶段训练和奖励模型训练，工程成本较高。

---

