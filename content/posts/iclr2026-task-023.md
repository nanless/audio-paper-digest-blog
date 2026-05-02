---
title: "ICLR 2026 - 语音情感识别 论文列表"
date: 2026-05-02
draft: false
tags: ["语音情感识别"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 语音情感识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音情感识别

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [EmotionThinker: Prosody-Aware Reinforcement Learning for Exp](/audio-paper-digest-blog/posts/2026-05-02-emotionthinker-prosody-aware-reinforcement) | 8.0分 | 前25% |
| 🥈 | [VowelPrompt: Hearing Speech Emotions from Text via Vowel-lev](/audio-paper-digest-blog/posts/2026-05-02-vowelprompt-hearing-speech-emotions-from-text-via) | 7.5分 | 前25% |
| 🥉 | [Learnable Fractional Superlets with a Spectro-Temporal Emoti](/audio-paper-digest-blog/posts/2026-05-02-learnable-fractional-superlets-with-a-spectro) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [EmotionThinker: Prosody-Aware Reinforcement Learning for Explainable Speech Emotion Reasoning](/audio-paper-digest-blog/posts/2026-05-02-emotionthinker-prosody-aware-reinforcement)

🔥 **8.0/10** | 前25% | #语音情感识别 | #强化学习 | #语音大模型 #数据集

👥 **作者与机构**

- 第一作者：Dingdong WANG (1, 2*)  (1: 香港中文大学; 2: 微软)
- 通讯作者：Helen M. Meng (1) (香港中文大学)
- 作者列表：Dingdong WANG (香港中文大学，微软), Shujie LIU (微软), Tianhua Zhang (香港中文大学), Youjun Chen (香港中文大学), Jinyu Li (微软), Helen M. Meng (香港中文大学)

💡 **毒舌点评**

论文将语音情感识别从“贴标签”重构为“讲道理”，引入强化学习监督推理过程，思路清晰且新颖，提出的GRPO-PTR方法有效缓解了奖励黑客问题。然而，其核心的“情感CoT-35K”数据集高度依赖GPT-4o合成与自动化标注管线，情感推理的“真实性”与“泛化性”存疑；此外，强化学习训练的稳定性与超参数敏感性也是一大挑战，论文中的消融实验虽已说明，但实际落地调参难度可能被低估。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接 `https://github.com/dingdongwang/EmotionThinker`。
- 模型权重：论文未明确提及是否公开了最终的EmotionThinker模型权重，但项目页面可能包含相关信息。
- 数据集：EmotionCoT-35K数据集是论文的核心贡献之一，论文未明确说明其是否完全公开以及公开方式。它基于多个公开数据集构建，但其生成的推理链标注可能需通过特定流程获取。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文正文和附录（Supplementary Material）提供了较为详细的框架描述、数据构建流程、模型训练细节（超参数、阶段）和评估方法。附录包含了更多的提示模板（prompt）和案例研究。
- 论文中引用的开源项目：Qwen2.5-Omni系列（骨干模型）、WhiStress（重读检测）、wav2vec 2.0（说话人属性分类）、WhiStress/Stress-17K（重读数据）、IEMOCAP/MELD/Expresso/MEAD/EARS（源数据集）、GigaSpeech/LibriSpeech（SFT数据）、DeepSeek-R1（GRPO方法参考）。

📌 **核心摘要**

1.  要解决什么问题：现有的语音情感识别（SER）系统将情感理解视为简单的分类问题，缺乏可解释性，未能充分利用大语言模型的推理能力。
2.  方法核心是什么：提出EmotionThinker框架，将SER重构为可解释的推理任务。核心分为三阶段：a) 构建包含韵律线索和推理链的EmotionCoT-35K数据集；b) 通过韵律感知的监督微调（SFT）增强基础模型的声学感知能力；c) 采用提出的“渐进式信任感知推理奖励的群组相对策略优化”（GRPO-PTR）进行强化学习，同时优化情感准确性与推理质量。
3.  与已有方法相比新在哪里：首次在语音情感识别领域引入强化学习范式来生成带解释的推理链；设计了GRPO-PTR机制，引入可训练的推理奖励模型，并通过信任度权重动态调整其影响，避免仅依赖结果奖励导致的推理捷径问题。
4.  主要实验结果如何：EmotionThinker在IEMOCAP、MELD等四个基准上的平均情感识别准确率达到68.89%，显著优于之前最优模型BLSP-Emo（65.41%）。在推理质量（事实对齐、解释质量等）评估中，平均得分3.98，大幅领先其他基线模型（次优为Qwen2.5-Omni的2.87）。消融实验证明GRPO-PTR的每个组件（训练好的奖励模型、信任度权重、渐进策略）都对最终性能有贡献。
5.  实际意义是什么：推动了语音情感识别向多模态可解释推理发展，为构建更具同理心和透明度的人机交互系统提供了新思路。提出的EmotionCoT-35K数据集和GRPO-PTR方法可为相关研究提供资源和方法参考。
6.  主要局限性是什么：训练数据（EmotionCoT-35K）主要依赖自动化工具和GPT-4o合成，其标注的准确性和覆盖的推理模式可能存在偏差；强化学习训练过程复杂，对奖励模型的依赖性强，训练稳定性有待更大规模验证；模型在复杂、模糊或文化特异性情感场景下的泛化能力尚未充分证明。

---

### 🥈 [VowelPrompt: Hearing Speech Emotions from Text via Vowel-level Prosodic Augmentation](/audio-paper-digest-blog/posts/2026-05-02-vowelprompt-hearing-speech-emotions-from-text-via)

✅ **7.5/10** | 前25% | #语音情感识别 | #数据增强 | #大语言模型 #多语言

👥 **作者与机构**

- 第一作者：Yancheng Wang（Arizona State University， Meta Superintelligence Labs）
- 通讯作者：未说明
- 作者列表：Yancheng Wang（Arizona State University, Meta Superintelligence Labs）， Osama Hanna（Meta Superintelligence Labs）， Ruiming Xie（Meta Superintelligence Labs）， Xianfeng Rui（Meta Superintelligence Labs）， Maohao Shen（Massachusetts Institute of Technology, Meta Superintelligence Labs）， Xuedong Zhang（Meta Superintelligence Labs）， Christian Fuegen（Meta Superintelligence Labs）， Jilong Wu（Meta Superintelligence Labs）， Debjyoti Paul（Meta Superintelligence Labs）， Arthur Guo（Meta Superintelligence Labs）， Zhihong Lei（Meta Superintelligence Labs）， Ozlem Kalinli（Meta Superintelligence Labs）， Qing He（Meta Superintelligence Labs）， Yingzhen Yang（Arizona State University）

💡 **毒舌点评**

亮点是提出了一个新颖且可解释的语音情感识别框架，将语言学知识（元音是韵律的主要载体）与大语言模型的推理能力相结合，实验全面覆盖零样本、微调、跨域和多语言场景。短板是系统依赖外部强制对齐工具（如MFA）的准确性和可用性，这增加了实际部署的复杂度，且论文未讨论在噪声或说话人识别失败时的鲁棒性。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了公开的数据集（IEMOCAP, MELD, CaFE, EmoDB, ASVP-ESD），并说明了来源。
- Demo：未提及。
- 复现材料：论文详细描述了方法流程、实验设置、数据集统计、基线方法及超参数K的选择（表A.4），并提供了大量消融实验和附录分析，为复现提供了重要参考。但未提供训练脚本、配置文件或预训练检查点。
- 论文中引用的开源项目：提到了使用Montreal Forced Aligner (MFA) 进行强制对齐，使用Praat风格算法进行特征提取，以及基于LLaMA、Qwen2等开源大模型进行实验。
- 论文中未提及开源计划。

📌 **核心摘要**

1.  问题：传统基于文本的大语言模型（LLM）情感识别方法忽视了细粒度的韵律信息（如音高、强度、时长），而基于音频的方法虽有效但特征不透明、难以解释，且在仅文本场景下无法应用。
2.  方法核心：提出VowelPrompt框架。基于语音学证据，认为元音是情感韵律的主要载体。该方法通过强制对齐提取时间对齐的元音片段，提取并归一化其音高、强度、时长等低级描述符（LLDs），将其离散化并转换为自然语言描述（如“高音高，升调，响亮，延长”），然后将这些描述与文本转录一起作为提示输入LLM。
3.  创新点：1) 使用细粒度、可解释的元音级韵律描述符作为LLM的输入，而非不透明的声学嵌入或粗略的句子级描述；2) 设计了监督微调（SFT）结合基于可验证奖励的强化学习（RLVR，采用GRPO算法）的两阶段训练流程，以提升LLM的推理质量和输出结构遵循性。
4.  实验结果：在五个基准数据集（IEMOCAP, MELD, CaFE, EmoDB, ASVP-ESD）上进行了广泛评估。零样本设置下，在IEMOCAP和MELD上，VowelPrompt（GPT-4o）相比纯文本基线最高提升7.80% UACC和7.11% WF1，相比句子级描述基线（SpeechCueLLM）也有稳定提升。微调与RLVR设置下，使用LLaMA-3-8B-Instruct，在IEMOCAP上达到73.46% WF1（SFT），超过基线3.14%。跨域设置下，在MELD→IEMOCAP任务中，SFT & GRPO后WF1为51.75%，比SpeechCueLLM高6.96%。多语言设置下，在法语CaFE和德语EmoDB的零样本测试中，WF1分别达到51.42%和69.85%，均为最佳。
5.  实际意义：该框架为语音情感识别提供了一个高精度、可解释且轻量化的解决方案。它使文本LLM能够感知语音中的韵律线索，无需在推理时访问原始音频，有利于隐私保护和部署。生成的解释性推理过程将声学模式与情感标签显式关联，增强了模型的可信度。
6.  主要局限性：系统性能依赖于上游强制对齐工具对元音边界的准确识别；论文未深入探讨在非理想语音（如噪声、多人重叠）或低资源语言（无现成对齐工具）下的表现；生成的韵律描述符是静态离散化的，可能损失动态信息。

---

### 🥉 [Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition](/audio-paper-digest-blog/posts/2026-05-02-learnable-fractional-superlets-with-a-spectro)

✅ **7.5/10** | 前25% | #语音情感识别 | #时频分析 | #端到端 #音频分类

👥 **作者与机构**

-   第一作者：Alaa Nfissi (Concordia University, Concordia Institute for Information Systems Engineering; Université TÉLUQ, Data Science Laboratory (DOT-Lab))
-   通讯作者：Brian L. Mishara (University of Québec at Montréal, Psychology Department; Center for Research and Intervention on Suicide, Ethical Issues and End-of-Life Practices)（根据作者列表顺序及机构性质推断）
-   作者列表：Alaa Nfissi（Concordia University， Université TÉLUQ）、Wassim Bouachir（Université TÉLUQ, Data Science Laboratory (DOT-Lab)）、Nizar Bouguila（Concordia University, Concordia Institute for Information Systems Engineering）、Brian L. Mishara（University of Québec at Montréal, Psychology Department; Center for Research and Intervention on Suicide, Ethical Issues and End-of-Life Practices）

#

💡 **毒舌点评**

这篇论文将经典的信号处理理论（Superlet）与现代可微学习框架结合得堪称教科书级别，数学推导和实验设计都非常严谨扎实，特别是那张展示学习到的分数阶分布与频率关系的可视化图（图5）非常直观地展示了模型的“可解释性”。但其短板在于，以“紧凑”为名的STEE编码器在搭配LFST前端后，实际计算开销（FLOPs、延迟、显存）远高于STFT、LEAF等基线（见附录表5），这使得“高效”二字在实时或资源受限场景下需要打上问号，论文在“效率-性能”权衡的讨论上稍显不足。

#

🔗 **开源详情**

-   代码：提供代码仓库链接：https://github.com/alaaNfissi/LFST-for-SER。
-   模型权重：论文中未提及是否公开预训练模型权重。
-   数据集：IEMOCAP和EMO-DB是公开的标准数据集；NSPL-CRISE是私有数据集，论文中未说明其公开获取方式。
-   Demo：未提供在线演示。
-   复现材料：论文提供了极其详细的训练协议、超参数设置（表8）和算法伪代码（算法1-3），并在附录中提供了符号表、梯度推导和复杂度分析，复现信息非常充分。
-   引用的开源项目：论文依赖于PyTorch等标准深度学习框架，未明确引用其他特定的开源模型或工具作为其核心依赖。

📌 **核心摘要**

这篇论文旨在解决传统语音情感识别（SER）前端（如STFT、小波变换）时频分辨率权衡固定、无法自适应数据的问题。其核心方法是提出可学习分数阶Superlet变换（LFST），一个完全可微的时频前端，它能联合优化频率网格、每个频带的基循环数和分数阶权重，从而在连续的分数阶域中学习最优的时频分析策略。此外，论文设计了相位一致性（κ）通道和可学习非对称硬阈值（LAHT）模块来增强表示，并集成了一个紧凑的光谱-时间情感编码器（STEE）。与已有方法相比，LFST首次将分数阶Superlet理论转化为端到端可学习的模块，并提供了连续、稳定的数学框架。实验在三个标准数据集（IEMOCAP， EMO-DB， NSPL-CRISE）上进行，LFST+STEE系统在准确率、宏F1等指标上均达到了当时的最佳水平（例如，在IEMOCAP上Acc=0.875， F1=0.868；在EMO-DB上Acc=0.914， F1=0.904）。该工作的实际意义在于为语音/音频分析提供了一个数学基础扎实、可解释性强的可学习时频前端替代方案。主要局限性在于其计算成本显著高于基于FFT的前端，且评估主要集中在受控实验设置中，未与大规模自监督模型（如wav2vec 2.0）在相同预训练范式下直接比较。

#

---

