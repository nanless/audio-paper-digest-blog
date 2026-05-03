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
| 🥇 | [VowelPrompt: Hearing Speech Emotions from Text via Vowel-lev](/audio-paper-digest-blog/posts/2026-05-03-vowelprompt-hearing-speech-emotions-from-text-via) | 7.5分 | 前25% |
| 🥈 | [Speech World Model: Causal State–Action Planning with Explic](/audio-paper-digest-blog/posts/2026-05-03-speech-world-model-causal-stateaction-planning) | 7.5分 | 前25% |
| 🥉 | [Learnable Fractional Superlets with a Spectro-Temporal Emoti](/audio-paper-digest-blog/posts/2026-05-03-learnable-fractional-superlets-with-a-spectro) | 7.5分 | 前25% |
| 4. | [EmotionThinker: Prosody-Aware Reinforcement Learning for Exp](/audio-paper-digest-blog/posts/2026-05-03-emotionthinker-prosody-aware-reinforcement) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [VowelPrompt: Hearing Speech Emotions from Text via Vowel-level Prosodic Augmentation](/audio-paper-digest-blog/posts/2026-05-03-vowelprompt-hearing-speech-emotions-from-text-via)

✅ **7.5/10** | 前25% | #语音情感识别 | #强化学习 | #大语言模型 #多语言

👥 **作者与机构**

- 第一作者：Yancheng Wang（亚利桑那州立大学，Meta超级智能实验室）
- 通讯作者：未说明
- 作者列表：Yancheng Wang（亚利桑那州立大学，Meta超级智能实验室），Osama Hanna（Meta超级智能实验室），Ruiming Xie（Meta超级智能实验室），Xianfeng Rui（Meta超级智能实验室），Maohao Shen（麻省理工学院，Meta超级智能实验室），Xuedong Zhang（Meta超级智能实验室），Christian Fuegen（Meta超级智能实验室），Jilong Wu（Meta超级智能实验室），Debjyoti Paul（Meta超级智能实验室），Arthur Guo（Meta超级智能实验室），Zhihong Lei（Meta超级智能实验室），Ozlem Kalinli（Meta超级智能实验室），Qing He（Meta超级智能实验室），Yingzhen Yang（亚利桑那州立大学）

💡 **毒舌点评**

这篇论文最巧妙之处在于，它没有硬生生地将声学特征塞给LLM，而是遵循语言学原理，聪明地选择了元音作为韵律信息的“代言人”，并将其转化为LLM能理解的自然语言描述，这种“翻译”思路既优雅又有效。然而，它的辉煌战绩建立在“强迫症”般地依赖精确的音素级强制对齐之上，这意味着模型性能的上限可能被上游对齐工具的准确性所锁死，对于嘈杂、口音多变的真实场景，这套精致的“元音提取术”是否还能如此可靠，是个不小的问号。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。
- **模型权重**：未提及公开的模型权重。
- **数据集**：使用的数据集（IEMOCAP, MELD, CaFE, EmoDB, ASVP-ESD）均为公开学术数据集，论文中未说明其自身的额外数据。
- **Demo**：未提供在线演示。
- **复现材料**：论文详细描述了方法流程、特征提取细节、归一化方法、离散化策略、提示模板（见附录B）以及两阶段训练的具体设置（SFT使用GPT-4o生成推理链，GRPO使用可验证奖励），提供了复现所需的大量设计和参数信息。但未提供具体的训练脚本、配置文件或预处理代码。
- **论文中引用的开源项目**：提到了使用 **Montreal Forced Aligner (MFA)** 进行强制对齐，以及 **Praat** 算法进行特征计算。在基线对比中，引用了 **openSMILE** 工具包、**wav2vec 2.0**、**HuBERT**、**WavLM** 等模型，以及 **LLaMA-3**、**Qwen2** 等LLM。
- **总体开源计划**：论文中未提及开源计划。

📌 **核心摘要**

1.  **要解决什么问题**：现有的基于LLM的语音情感识别方法通常仅依赖文本转录，忽略了携带重要情感信息的细粒度韵律特征（如音高、能量、时长），导致模型性能和可解释性受限。
2.  **方法核心是什么**：提出VowelPrompt框架。核心是利用强制对齐工具获取每个元音的时间边界，提取其音高、能量、时长等低级描述符，经归一化和分箱离散化后，转换为自然语言描述（如“高音、升调、响亮、拉长”）。将这些描述与文本转录拼接，作为LLM的输入。模型适应采用两阶段策略：先用少量数据结合GPT-4o生成的推理链进行监督微调（SFT），再使用可验证奖励（RLVR）进行组相对策略优化（GRPO）强化学习。
3.  **与已有方法相比新在哪里**：相比纯文本提示（如SpeechCueLLM）使用粗粒度的句子级韵律描述，VowelPrompt提供了元音级的细粒度、可解释韵律描述；相比直接输入音频的多模态模型，它避免了复杂的音频编码器，保持了文本LLM的轻量部署优势；相比传统声学特征方法，它利用了LLM强大的语言推理能力来联合分析语义与韵律。
4.  **主要实验结果如何**：在IEMOCAP、MELD等五个基准数据集上，在零样本、微调、跨域、多语言等多种设定下，VowelPrompt一致优于各基线。例如，在零样本GPT-4o设定下，相比仅文本基线，IEMOCAP的加权F1提升7.11个百分点，MELD提升3.25个百分点；在LLaMA-3-8B微调设定下，相比最强文本基线，IEMOCAP加权F1提升约2-3个百分点。消融实验证明，所有元音特征均有贡献，且预测确实由韵律特征驱动。
5.  **实际意义是什么**：该工作为融合声学信息与LLM推理提供了一条轻量、可解释的新路径。其生成的中间韵律描述和推理链，使得情感预测过程更透明、可审计，在需要可信AI的敏感领域（如心理健康监测、客服质检）具有应用潜力。
6.  **主要局限性是什么**：方法严重依赖准确的强制对齐，对噪声、口音或语速过快/过慢的语音可能鲁棒性不足；元音作为情感载体的假设在某些语言或极端发音下可能有边界情况；性能提升部分归功于使用GPT-4o生成的监督信号，这引入了对闭源模型的依赖。

---

### 🥈 [Speech World Model: Causal State–Action Planning with Explicit Reasoning for Speech](/audio-paper-digest-blog/posts/2026-05-03-speech-world-model-causal-stateaction-planning)

✅ **7.5/10** | 前25% | #语音情感识别 | #大语言模型 | #语音对话系统 #多任务学习

👥 **作者与机构**

- 第一作者：Xuanru Zhou（浙江大学）
- 通讯作者：Gopala Anumanchipalli（UC Berkeley）
- 作者列表：Xuanru Zhou（浙江大学）、Jiachen Lian（UC Berkeley）、Henry Hong（UC Berkeley）、Xinyi Yang（浙江大学）、Gopala Anumanchipalli（UC Berkeley）

💡 **毒舌点评**

**亮点**：将“世界模型”和“心智理论”等认知科学概念具象化为可计算的模块，并通过因果图进行结构化连接，为语音理解提供了一条可解释性强的技术路径，训练效率和部分推理指标（如情绪识别）的表现亮眼。
**短板**：论文自述的“因果图”是预定义而非从数据中学习的，这限制了其发现新依赖关系的能力；且整个框架的性能高度依赖用于生成伪标签的教师模型（Vicuna），当面对更复杂或未见过的语音现象时，这种管道化处理的泛化能力存疑。

🔗 **开源详情**

- **代码**：论文承诺开源，并提供了GitHub仓库链接：`https://github.com/eureka235/eureka235.github.io`。
- **模型权重**：论文中提到“we will open source the model”，但未在正文提供具体的权重下载链接。
- **数据集**：使用公开数据集（MELD, IEMOCAP, SLURP, VoxCeleb），论文中提供了获取信息。
- **Demo**：论文提供了演示音频链接：`http://bit.ly/4pBJuWP`，用于展示模型效果。
- **复现材料**：提供了非常详细的附录，涵盖模型架构、训练细节、超参数、评估提示、消融实验设置和标签生成流程。
- **引用的开源项目**：论文中明确使用了Vicuna-13b-v1.5（用于标签生成）、LLaMA-3.1-8B、Qwen2-Audio、DistilBERT、WavLM等开源模型。

📌 **核心摘要**

1.  **问题**：当前的语音语言模型（SLM）擅长内容转录，但在需要多步推理（如情绪识别、意图理解）的任务上表现较弱，且推理过程是一个“黑盒”，缺乏可解释性和在部分监督下的泛化能力。
2.  **方法核心**：提出“语音世界模型”（SWM），将语音理解分解为四个认知模块：世界模型激活（WMA，场景）、心智理论（ToM，情绪）、言语行为（SA，功能）、语用意图（Prag，目标）。这些模块通过一个预定义的因果图（DAG）连接，形成一个状态-动作的动态推理网络。
3.  **与已有方法相比新在哪里**：相较于传统SLM将所有语音信息压缩为单一向量或直接用链式思考（CoT）提示，SWM采用模块化、结构化的显式状态表示。其因果图架构模拟了人类认知中的因果依赖（如情绪影响言语行为），并支持半监督学习（未标注模块可由下游模块反向传播梯度进行更新）。
4.  **主要实验结果**：
    *   **图训练效率**：因果图训练比无结构的随机图基线快约5倍（2.07h vs 10.39h）。
    *   **推理能力**：在多个基准（MELD, IEMOCAP等）上，SWM（无论是语言模型版还是多模态版）的指令微调评分显著优于其他开源模型（如Qwen-Audio, Voxtral）和仅用CoT微调的基线（见下表）。在情绪识别准确率（EA）上甚至超越GPT-4o。
    *   **与商业模型对比**：整体评分略低于Gemini 2.5 Pro，但训练成本极低（仅20 GPU小时）。

| 方法 | 提示风格 | 综合评分(0.6*Rs+0.4*Rp) | 推理评分(Rs) | 回应评分(Rp) | 情绪提及率(EM) | 情绪准确率(EA) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SWM (Llama3.1-8b)** | CoT | **7.81** | **7.84** | 7.76 | **97.80%** | 66.26% |
| **SWM (Qwen2-Audio)** | CoT | 7.59 | 7.26 | **8.08** | 91.80% | **71.02%** |
| 调优基线 (Qwen2-Audio-CoT) | CoT | 5.18 | 4.76 | 5.82 | 92.11% | 34.72% |
| Qwen2-Audio | 直接 | 2.63 | 2.08 | 3.47 | 5.14% | 15.38% |
| Voxtral | 直接 | 2.89 | 2.46 | 3.54 | 10.28% | 5.88% |
| GPT-4o | CoT | 7.41 | 6.98 | 8.06 | 68.20% | 45.16% |
| **Gemini 2.5 Pro** | CoT | **8.12** | **8.02** | **8.28** | 82.47% | 51.29% |

5.  **实际意义**：为构建更可解释、推理更可靠、且资源高效的语音AI系统提供了一种新范式，尤其在情绪识别、意图理解等需要“深层理解”的场景中具有应用潜力。
6.  **主要局限性**：1) 模块数量有限（4个），可能无法覆盖所有语音理解维度；2) 因果图结构是预定义的，缺乏自适应性；3) 高度依赖教师模型生成的标签，其错误可能传播；4) 实验数据规模相对有限。

---

### 🥉 [Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition](/audio-paper-digest-blog/posts/2026-05-03-learnable-fractional-superlets-with-a-spectro)

✅ **7.5/10** | 前25% | #语音情感识别 | #时频分析 | #端到端 #开源工具

👥 **作者与机构**

- 第一作者：Alaa Nfissi（Concordia University, 数据科学实验室 DOT-Lab， Université TÉLUQ）
- 通讯作者：未明确说明（论文提供了所有作者邮箱，但未标注通讯作者）
- 作者列表：
  - Alaa Nfissi（Concordia University， Université TÉLUQ）
  - Wassim Bouachir（Université TÉLUQ）
  - Nizar Bouguila（Concordia University）
  - Brian Mishara（University of Qu´ebec at Montr´eal）

💡 **毒舌点评**

亮点在于其理论框架的严谨性：论文将分数阶超集明确建模为一个可微分的、可端到端学习的“前端”，并提供了适定性（零均值）、连续性、近似解析性和稳定性（Lipschitz界）的理论分析，这在SER领域较为少见，提升了工作的可信度。短板则是“紧凑”的编码器STEE是以牺牲计算效率为代价的，其LFST前端的计算开销（201.5 GFLOPs， 74.9ms延迟）远超STFT（0.36 GFLOPs， 2.2ms延迟），论文在摘要中称“以额外的前端计算为代价”，这一点在资源敏感的应用中需要权衡。

🔗 **开源详情**

- **代码**：提供GitHub仓库链接：`https://github.com/alaaNfissi/LFST-for-SER`。
- **模型权重**：论文中未提及是否公开预训练模型权重。
- **数据集**：NSPL-CRISE为私人数据集，未公开。IEMOCAP和EMO-DB为公开数据集，论文中未说明获取方式，但通常可从官方渠道获取。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文提供了极其详细的复现信息，包括：完整的模型架构（算法1-3）、所有关键超参数（表8）、训练与评估协议（4.2节、附录H）、损失函数细节、评估指标。附录（A-G）提供了补充推导、数据集详情和额外实验结果。
- **论文中引用的开源项目/工具**：论文主要依赖PyTorch、NumPy、SciPy、scikit-learn等标准科学计算库。未明确引用其他特定开源模型或工具。

📌 **核心摘要**

1. **问题**：传统的短时傅里叶变换（STFT）和小波变换在语音情感识别（SER）中存在固定的时频分辨率权衡问题，且无法自适应信号统计特性；已有的超集方法依赖整数阶和手工调参，不够灵活。
2. **方法核心**：提出了一种**可学习分数阶超集变换（LFST）**，这是一个完全可微分的时��分析前端。LFST学习一个单调对数频率网格、频率依赖的基础周期以及分数阶权重（通过softmax归一化的权重在离散阶上计算几何平均），以生成幅度谱S和相位一致性通道κ。同时引入一个**可学习非对称硬阈值（LAHT）**模块对幅度图进行稀疏去噪。后端接一个紧凑的**频谱-时间情感编码器（STEE）**，利用多尺度卷积、自适应FiLM门控和轴向自注意力处理LFST输出。
3. **与已有方法相比新在哪里**：LFST将超集从固定的、非可微的分析工具，转变为一个**端到端可学习、具有连续分数阶、频率自适应网格和周期的微分模块**。它取代了SER中常用的STFT、梅尔谱或固定小波前端，其参数与下游编码器一起通过反向传播优化。
4. **主要实验结果**：在IEMOCAP（4类）、EMO-DB（7类）和NSPL-CRISE（5类，电话语音）数据集上，LFST+STEE系统取得了当前最优性能。
   - 在IEMOCAP上：准确率87.5%，F1-score 86.8%。
   - 在EMO-DB上：准确率91.4%，F1-score 90.4%。
   - 在NSPL-CRISE（电话数据集）上：准确率76.9%，F1-score 76.6%。
   在所有数据集上，LFST+STEE在准确率和F1上均优于报告的其他SOTA方法和容量匹配的基线（STFT、小波、固定超集、LEAF）。例如，在NSPL-CRISE上，LFST+STEE的准确率比STFT+STEE高3.8个百分点（76.9% vs 73.1%）。
5. **实际意义**：为语音情感识别提供了一个数学原理清晰、可解释、可自适应数据且能端到端优化的时频分析前端，可能提升SER系统在噪声和电话语音等挑战性条件下的鲁棒性。
6. **主要局限性**：1）计算成本显著高于传统前端（见论文附表5）；2）与大型自监督预训练模型（如wav2vec 2.0, HuBERT）的对比不完整，论文明确说明其评估设计旨在隔离前端影响，因此未在这些大模型上测试LFST；3）实验数据集规模有限，跨语言和跨场景泛化能力有待验证。

---

### 4. [EmotionThinker: Prosody-Aware Reinforcement Learning for Explainable Speech Emotion Reasoning](/audio-paper-digest-blog/posts/2026-05-03-emotionthinker-prosody-aware-reinforcement)

✅ **7.5/10** | 前25% | #语音情感识别 | #强化学习 | #语音大模型 #数据集

👥 **作者与机构**

- 第一作者：Dingdong WANG（香港中文大学；微软）
- 通讯作者：未明确说明（从作者列表推断，Helen Meng为资深作者）
- 作者列表：Dingdong WANG（香港中文大学；微软）、Shujie LIU（微软）、Tianhua Zhang（香港中文大学）、Youjun Chen（微软）、Jinyu Li（微软）、Helen Meng（香港中文大学）

💡 **毒舌点评**

这篇论文的亮点在于将“可解释性”这个有点玄的概念，通过构建精细的CoT数据集和设计Trust-aware的强化学习奖励���数，变成了一个可工程化解决的问题，这在情感AI领域是难得的扎实工作。不过，整个框架的训练复杂度不低（三阶段，SFT+RL，还需要训练一个额外的奖励模型），在“工程优雅性”和“效果提升”之间，作者显然选择了后者。

🔗 **开源详情**

- **代码**：提供GitHub仓库链接：https://github.com/dingdongwang/EmotionThinker
- **模型权重**：论文中未明确提及是否公开预训练模型（EmotionThinker或奖励模型）的权重。
- **数据集**：EmotionCoT-35K被描述为已构建，但论文中未明确说明其公开获取方式，可能需通过代码仓库或作者申请。
- **Demo**：未提及在线演示。
- **复现材料**：论文提供了关键的训练超参数（如学习率、批次大小、KL系数、奖励权重）和架构细节（基于Qwen2.5-Omni），并在附录中给出了数据构建和奖励模型训练的更多细节，为复现提供了必要信息。
- **引用的开源项目**：主要依赖Qwen2.5-Omni系列模型作为骨干，并使用了WhiStress等工具进行特征提取。

📌 **核心摘要**

1.  **问题**：当前语音情感识别（SER）系统大多仅输出情感标签，缺乏可解释的推理过程，未能充分发挥大语言模型的推理能力。
2.  **方法核心**：提出EmotionThinker框架，包含三个阶段：（1）构建包含详细韵律和思维链标注的EmotionCoT-35K数据集；（2）训练韵律感知增强的基础模型EmotionThinker-Base；（3）采用提出的GRPO-PTR（带渐进式可信推理奖励的群组相对策略优化）进行强化学习训练。
3.  **创新点**：首次将强化学习引入语音情感推理任务；提出GRPO-PTR算法，通过可信度权重和渐进式策略，有效监督开放式的推理过程；构建了首个针对SER的韵律感知CoT数据集EmotionCoT-35K。
4.  **实验结果**：在IEMOCAP、MELD等多个基准测试上，EmotionThinker在情感识别准确率和解释质量（由GPT-4和人类评估）上均显著优于包括BLSP-Emo在内的16个基线模型。例如，在IEMOCAP上准确率达77.68%（基线最优为BLSP-Emo的76.00%），推理平均分达3.98（次优为3.04）。
5.  **实际意义**：推动了语音情感识别从黑盒分类向可解释、可信的深度推理发展，增强了模型预测的说服力和人机交互的信任感。
6.  **局限性**：框架涉及多阶段训练和额外奖励模型，计算开销较大；RL训练的稳定性依赖于精心设计的奖励调度；情感推理的质量评估仍部分依赖于自动指标。

---

