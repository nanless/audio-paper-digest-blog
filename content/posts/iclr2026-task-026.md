---
title: "ICLR 2026 - 语音情感识别 论文列表"
date: 2026-05-04
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
| 🥇 | [Learnable Fractional Superlets with a Spectro-Temporal Emoti](/audio-paper-digest-blog/posts/2026-05-04-learnable-fractional-superlets-with-a-spectro) | 8.0分 | 前25% |
| 🥈 | [VowelPrompt: Hearing Speech Emotions from Text via Vowel-lev](/audio-paper-digest-blog/posts/2026-05-04-vowelprompt-hearing-speech-emotions-from-text-via) | 7.5分 | 前25% |
| 🥉 | [EmotionThinker: Prosody-Aware Reinforcement Learning for Exp](/audio-paper-digest-blog/posts/2026-05-04-emotionthinker-prosody-aware-reinforcement) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition](/audio-paper-digest-blog/posts/2026-05-04-learnable-fractional-superlets-with-a-spectro)

🔥 **8.0/10** | 前25% | #语音情感识别 | #时频分析 | #端到端 #可解释性

👥 **作者与机构**

- 第一作者：Alaa Nfissi（Data Science Laboratory (DOT-Lab), Université TÉLUQ；Concordia Institute for Information Systems Engineering, Concordia University）
- 通讯作者：未说明
- 作者列表：Alaa Nfissi（Data Science Laboratory (DOT-Lab), Université TÉLUQ；Concordia Institute for Information Systems Engineering, Concordia University）、Wassim Bouachir（Data Science Laboratory (DOT-Lab), Université TÉLUQ）、Nizar Bouguila（Concordia Institute for Information Systems Engineering, Concordia University）、Brian Mishara（Psychology Department, University of Quebec at Montreal；Center for Research and Intervention on Suicide, Ethical Issues and End-of-Life Practices）

💡 **毒舌点评**

亮点在于从第一性原理出发，将时频分析中的“阶数”从固定设计变量变为端到端可学习参数，理论推导和实现细节严谨，堪称一篇“教科书式”的信号处理与深度学习结合论文。短板则在于“可学习”换来了理论的优美和性能的提升，却也带来了显著高于经典前端的计算开销（论文实测LFST+STEE比STFT+STEE慢约34倍），这在追求高效部署的语音情感识别场景中是一个需要权衡的现实问题。

🔗 **开源详情**

- 代码：论文提供了GitHub仓库链接：https://github.com/alaaNfissi/LFST-for-SER。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：IEMOCAP和EMO-DB为公开数据集；NSPL-CRISE为私有数据集，论文未说明公开获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其详细的复现信息，包括：1）完整的算法伪代码（附录C）；2）关键超参数设置（表8）；3）训练和评估协议（附录H）；4）所有组件的技术细节和数学推导（附录B）。这些信息足以支持复现。
- 论文中引用的开源项目：论文未明确列出依赖的外部开源项目，但提及了基于PyTorch实现。

📌 **核心摘要**

1.  要解决什么问题：传统语音情感识别（SER）前端如STFT和小波变换在时频分辨率上存在固定权衡，无法自适应调整；而先前的“Superlet”方法依赖整数阶和手动调参，限制了其灵活性和性能。
2.  方法核心是什么：本文提出“可学习分数阶Superlet变换（LFST）”，这是一种完全可微分的前端。它通过可学习的Softmax权重对离散整数阶的小波响应进行加权几何平均，实现了连续的分数阶表示。同时，LFST联合优化单调对数频率网格、频率依赖的基础周期数以及分数阶权重。此外，设计了“谱时域情感编码器（STEE）”来处理LFST输出的幅度和相位一致性双通道图谱。
3.  与已有方法相比新在哪里：首次将分数阶Superlet框架设计为完全可学习、端到端训练的模块，实现了时频分辨率权衡的数据驱动优化。相比固定前端（STFT、小波）和先前的非可微分数阶Superlet，LFST能学习更适合情感任务的时频表示。相比其他可学习前端（如LEAF），LFST引入了基于小波理论的多阶混合机制。
4.  主要实验结果如何：在三个数据集（IEMOCAP， EMO-DB， NSPL-CRISE）上，LFST+STEE系统均取得了最佳性能。例如，在NSPL-CRISE电话语音数据集上，准确率达到76.9%，F1值为76.6%，分别比次优基线（Fixed superlet+STEE）高出2.0和1.9个百分点。在IEMOCAP和EMO-DB上也分别达到了87.5%和91.4%的准确率。容量匹配的消融实验（表3）表明，LFST前端在所有数据集上均优于STFT、小波、固定Superlet和LEAF前端。
5.  实际意义是什么：为语音情感识别提供了一种理论更扎实、可解释性更强的前端特征提取方法。LFST学习到的频率依赖阶数分布（如图5所示）与语音声学知识相符（低频更注重时域精度捕捉韵律，中高频更注重频域精度捕捉共振峰），证明了模型的可解释性。该工作启发了在其他音频任务中设计和学习可微分时频表示。
6.  主要局限性是什么：LFST前端的计算复杂度显著高于传统STFT和部分可学习前端（如LEAF）。论文附录D的基准测试显示，LFST+STEE的FLOPs（201.5 GF）是STFT+STEE（0.36 GF）的560倍，是LEAF+STEE（44.5 GF）的4.5倍，且延迟和内存占用也更高，这限制了其在资源受限或实时应用中的部署。

---

### 🥈 [VowelPrompt: Hearing Speech Emotions from Text via Vowel-level Prosodic Augmentation](/audio-paper-digest-blog/posts/2026-05-04-vowelprompt-hearing-speech-emotions-from-text-via)

✅ **7.5/10** | 前25% | #语音情感识别 | #强化学习 | #大语言模型 #多语言

👥 **作者与机构**

- 第一作者：Yancheng Wang（Arizona State University; Meta Superintelligence Labs）
- 通讯作者：未说明
- 作者列表：Yancheng Wang（Arizona State University; Meta Superintelligence Labs）、Osama Hanna（Meta Superintelligence Labs）、Ruiming Xie（Meta Superintelligence Labs）、Xianfeng Rui（Meta Superintelligence Labs）、Maohao Shen（MIT; Meta Superintelligence Labs）、Xuedong Zhang（Meta Superintelligence Labs）、Christian Fuegen（Meta Superintelligence Labs）、Jilong Wu（Meta Superintelligence Labs）、Debjyoti Paul（Meta Superintelligence Labs）、Arthur Guo（Meta Superintelligence Labs）、Zhihong Lei（Meta Superintelligence Labs）、Ozlem Kalinli（Meta Superintelligence Labs）、Qing He（Meta Superintelligence Labs）、Yingzhen Yang（Arizona State University）

#

💡 **毒舌点评**

亮点：本文巧妙地利用语音学常识（元音是韵律的主要载体）构建了一个可解释的中间表示，并将其自然地融入LLM推理过程，为“文本LLM如何听声辨情”提供了一个优雅且有效的解决方案。短板：核心创新更多体现在“框架搭建”和“工程组合”（元音特征提取+文本化+LLM+SFT+GRPO），缺乏底层模型或理论层面的深度突破；且对强制对齐工具的依赖性较强，这在实际复杂声学环境中可能成为性能瓶颈。

#

🔗 **开源详情**

根据论文内容：
- 代码：论文中未提及任何代码仓库链接。
- 模型权重：未提及公开任何训练后的模型权重。
- 数据集：论文使用了公开数据集（IEMOCAP， MELD， CaFE， EmoDB， ASVP-ESD），但未提供VowelPrompt特有的中间数据（如提取的元音韵律描述符）。
- Demo：未提及提供在线演示。
- 复现材料：论文详细描述了框架、特征提取方法、训练策略和超参数选择（如K=5），并在附录提供了提示模板。然而，缺乏具体的训练日志、检查点、以及GRPO训练的超参数（学习率、批大小、步数等），完整的复现仍依赖于对论文描述的自行实现和调优。
- 论文中引用的开源项目：主要依赖了Montreal Forced Aligner (MFA) 进行强制对齐，以及LLaMA、Qwen等开源LLM作为骨干。特征提取部分可能涉及Praat算法，但论文未明确说明使用的具体代码库。
- 总体开源情况：论文中未提及开源计划。所有实验结果基于作者自行实现和运行，未向社区提供直接的复现资源。

📌 **核心摘要**

1.  要解决什么问题：现有基于文本的大语言模型（LLM）在进行语音情感识别时，忽略了丰富的韵律信息（如音高、能量、时长），导致性能和可解释性受限。
2.  方法核心是什么：提出了VowelPrompt框架。它首先通过强制对齐获取元音片段，然后提取每个元音的细粒度韵律特征（音高、能量、时长等）并进行归一化和离散化，再转换成自然语言描述（如“高音调，上升趋势，响亮，拉长”）。这些描述与文本转录一起作为LLM的输入。模型通过监督微调（SFT）和基于可验证奖励的强化学习（RLVR，采用GRPO算法）进行两阶段适配。
3.  与已有方法相比新在哪里：相较于仅使用文本或句子级韵律描述的方法，VowelPrompt首次将音素级别（具体为元音） 的细粒度、可解释韵律线索引入LLM推理过程，提供了更精准的声学证据。其两阶段训练策略（特别是GRPO）旨在提升推理质量和输出格式的鲁棒性。
4.  主要实验结果如何：在IEMOCAP、MELD等多个基准上进行广泛评估。在零样本设置下，VowelPrompt（使用GPT-4o）在IEMOCAP上比基线提升高达7.80% 未加权准确率（UACC）。在微调设置下，使用LLaMA-4-Scout，VowelPrompt在IEMOCAP上达到74.02% 加权F1（WF1），显著优于基线。在跨域（IEMOCAP↔MELD）和跨语言（法、德）任务上也展现出强大的泛化能力，例如在IEMOCAP→MELD的SFT&GRPO设置下，VowelPrompt（WF1 60.28%）比SpeechCueLLM高出5.12%。详细结果见表3-7。
5.  实际意义是什么：该工作为语音情感识别提供了一种不依赖实时音频输入、且具备高度可解释性的LLM解决方案，有望降低部署成本并增强模型决策的可信度，适用于需要语音情感分析的文本对话系统或语音交互日志分析场景。
6.  主要局限性是什么：性能高度依赖于上游强制对齐工具的准确性；特征离散化的量化参数（如分箱数K）需手动调整；框架的工程复杂度（对齐、特征提取、转换、两阶段训练）相对较高。

#

---

### 🥉 [EmotionThinker: Prosody-Aware Reinforcement Learning for Explainable Speech Emotion Reasoning](/audio-paper-digest-blog/posts/2026-05-04-emotionthinker-prosody-aware-reinforcement)

✅ **7.5/10** | 前25% | #语音情感识别 | #强化学习 | #语音大模型 #可解释性

👥 **作者与机构**

- 第一作者：Dingdong WANG（香港中文大学，微软亚洲研究院）
- 通讯作者：论文未明确标注通讯作者，第一作者邮箱为dingdongwang@link.cuhk.edu.hk
- 作者列表：
  - Dingdong WANG（香港中文大学，微软亚洲研究院）
  - Shujie LIU（微软亚洲研究院）
  - Tianhua Zhang（未说明具体机构）
  - Youjun Chen（未说明具体机构）
  - Jinyu Li（微软亚洲研究院）
  - Helen M. Meng（香港中文大学）

💡 **毒舌点评**

亮点：论文首次系统性地将语音情感识别（SER）问题重构为可解释的推理任务，并利用强化学习（RL）引导模型生成基于韵律线索的推理过程，这一范式转换具有启发性，且提出的GRPO-PTR策略在稳定训练、抑制奖励欺骗方面设计精巧。
短板：尽管声称突破，但核心创新（RL+奖励模型）并非语音领域首创，更像是将LLM推理优化的成功范式（如DeepSeek-R1）在情感任务上的迁移应用。此外，关键的训练数据生成和评估高度依赖闭源的GPT-4o，这削弱了方法的纯粹性和可复现性，也引发了关于评估公正性的疑问。

🔗 **开源详情**

- 代码：论文提供了项目页面链接：https://github.com/dingdongwang/EmotionThinker。代码库是否开源及内容未在论文中详述。
- 模型权重：未明确提及是否公开预训练或微调后的模型权重。
- 数据集：EmotionCoT-35K数据集已构建，但论文未说明是否公开及获取方式。
- Demo：未提及。
- 复现材料：论文提供了关键超参数（学习率、训练步数、奖励权重、KL系数等）、数据集统计信息和部分附录细节（如CoT提示模板、评估标准），但缺少硬件配置、完整训练日志等。
- 论文中引用的开源项目：Qwen2.5-Omni系列（骨干模型）、GPT-4o（API用于数据生成和评估）、WhiStress（重音检测）、wav2vec 2.0（说话人特征提取）等。
- 开源计划：论文中未明确提及开源计划，但提供了GitHub链接。

📌 **核心摘要**

1. 问题：当前语音大模型（SpeechLLMs）处理情感识别时，仍将其视为简单的分类任务，导致预测可解释性差，未能充分发挥LLM的推理能力。
2. 方法核心：提出EmotionThinker，一个三阶段框架：首先构建包含细粒度韵律和推理标注的EmotionCoT-35K数据集；其次，通过韵律感知的监督微调（SFT）得到增强模型EmotionThinker-Base；最后，采用创新的GRPO-PTR（渐进式信任感知推理奖励的组相对策略优化）进行强化学习训练。
3. 新颖性：首次将SER定义为可解释推理问题；构建了首个韵律感知的CoT数据集；提出的GRPO-PTR不仅评估结果，还通过奖励模型和信任权重逐步、稳定地监督中间推理过程的质量。
4. 实验结果：在四个公开基准（IEMOCAP, MELD, RAVDESS, SAVEE）上，EmotionThinker的平均情绪识别准确率达到68.89%，超过次优模型BLSP-Emo（65.41%）；推理质量平均分3.98（满分5分），远超所有基线。消融实验表明，GRPO-PTR的每个组件（训练好的奖励模型、信任权重、渐进式训练）都对性能有显著贡献。

| 模型 | 情感识别准确率（%）↑ | 情感推理平均分（5分制）↑ |
| :--- | :--- | :--- |
| BLSP-Emo | 65.41 | 2.73 |
| Kimi-Audio | 58.83 | 2.72 |
| Qwen2.5-Omni-7B | 50.83 | 2.87 |
| EmotionThinker | 68.89 | 3.98 |

![图3](icassp-img://wbttgzp7MT/2.png)

5. 实际意义：推动了SER从“黑盒分类”向“可解释推理”的范式转变，为构建更可信、透明的情感计算系统提供了新思路。其方法可推广至其他需要可解释性的多模态任务。
6. 局限性：a) 强依赖GPT-4o生成训练数据和评估，引入闭源模型偏差；b) 情感类别定义固定（9类），对复杂情感（如讽刺、矛盾情绪）的处理能力未验证；c) 论文未提供训练硬件和耗时，复现门槛较高。

---

