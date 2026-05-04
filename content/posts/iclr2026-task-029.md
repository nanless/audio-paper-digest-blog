---
title: "ICLR 2026 - 语音情感识别 论文列表"
date: 2026-05-04
draft: false
tags: ["语音情感识别"]
categories: [iclr-2026]
description: "共 5 篇 ICLR 2026 语音情感识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音情感识别

共 **5** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [VowelPrompt: Hearing Speech Emotions from Text via Vowel-lev](/audio-paper-digest-blog/posts/2026-05-04-vowelprompt-hearing-speech-emotions-from-text-via) | 8.5分 | 前25% |
| 🥈 | [AVERE: Improving Audiovisual Emotion Reasoning with Preferen](/audio-paper-digest-blog/posts/2026-05-04-avere-improving-audiovisual-emotion-reasoning) | 8.0分 | 前25% |
| 🥉 | [Learnable Fractional Superlets with a Spectro-Temporal Emoti](/audio-paper-digest-blog/posts/2026-05-04-learnable-fractional-superlets-with-a-spectro) | 8.0分 | 前25% |
| 4. | [EmotionThinker: Prosody-Aware Reinforcement Learning for Exp](/audio-paper-digest-blog/posts/2026-05-04-emotionthinker-prosody-aware-reinforcement) | 8.0分 | 前25% |
| 5. | [Speech World Model: Causal State–Action Planning with Explic](/audio-paper-digest-blog/posts/2026-05-04-speech-world-model-causal-stateaction-planning) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [VowelPrompt: Hearing Speech Emotions from Text via Vowel-level Prosodic Augmentation](/audio-paper-digest-blog/posts/2026-05-04-vowelprompt-hearing-speech-emotions-from-text-via)

🔥 **8.5/10** | 前25% | #语音情感识别 | #强化学习 | #多语言 #大语言模型

👥 **作者与机构**

- 第一作者：Yancheng Wang（Arizona State University; Meta Superintelligence Labs）
- 通讯作者：Osama Hanna（Meta Superintelligence Labs，基于邮箱推测）
- 作者列表：
  - Yancheng Wang (Arizona State University, Meta Superintelligence Labs)
  - Osama Hanna (Meta Superintelligence Labs)
  - Ruiming Xie (Meta Superintelligence Labs)
  - Xianfeng Rui (Meta Superintelligence Labs)
  - Maohao Shen (Massachusetts Institute of Technology; Meta Superintelligence Labs)
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

亮点在于从语音学常识（元音承载韵律）出发，设计了一套精巧且可解释的“翻译”流程，将隐晦的语音信号转化为LLM能读的文本，比直接灌入黑盒音频嵌入“高级”不少。短板则是其效果高度依赖强制对齐的准确性，对于口音重、背景噪或语速极快的语音，这套“元音显微镜”可能会失灵，且忽略辅音区域可能存在的互补情感线索（如送气、鼻化）。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开任何适配后的LLM权重。
- 数据集：所使用的五个数据集（IEMOCAP, MELD, CaFE, EmoDB, ASVP-ESD）均为公开学术数据集，论文中给出了参考文献。
- Demo：未提及在线演示。
- 复现材料：论文详细描述了方法流程、关键算法（如GRPO奖励公式）、特征列表（表1）以及大量消融实验的设置和结果（附录A.1-A.15），为复现提供了充足的理论指导和参数参考。
- 论文中引用的开源项目：Montreal Forced Aligner (MFA), Praat, openSMILE, GeMAPS特征集, wav2vec 2.0, HuBERT, WavLM。

📌 **核心摘要**

本文针对大语言模型在语音情感识别中忽略细粒度韵律信息的问题，提出了VowelPrompt框架。该方法首先通过强制对齐获取元音片段，提取其音高（F0）、能量、时长等低级描述符，经说话人和元音类型归一化后，离散化为“high pitch, rising, loud”等自然语言描述。这些描述被附加到文本转录后，使LLM能够联合推理语义和细粒度韵律。模型适配采用监督微调（SFT）结合基于群组相对策略优化（GRPO）的可验证奖励强化学习（RLVR）。在IEMOCAP、MELD、CaFE、EmoDB和ASVP-ESD等五个基准数据集上的实验表明，VowelPrompt在零样本、微调、跨域和跨语言条件下均优于基于句子级描述的基线（SpeechCueLLM）和多模态模型（SALMONN），例如在IEMOCAP零样本设置下，加权F1比基线高2.2%，在跨域迁移（IEMOCAP→MELD）微调设置下提升达5.12%。该工作的意义在于提供了一种可解释、可审计的语音情感分析范式。主要局限是其对强制对齐精度敏感，且目前仅关注元音，未充分利用辅音可能包含的互补声学线索。

---

### 🥈 [AVERE: Improving Audiovisual Emotion Reasoning with Preference Optimization](/audio-paper-digest-blog/posts/2026-05-04-avere-improving-audiovisual-emotion-reasoning)

🔥 **8.0/10** | 前25% | #语音情感识别 | #偏好优化 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Ashutosh Chaubey（南加州大学创新技术研究所）
- 通讯作者：Mohammad Soleymani（南加州大学创新技术研究所）
- 作者列表：Ashutosh Chaubey（南加州大学创新技术研究所）、Jiacheng Pang（南加州大学创新技术研究所）、Maksim Siniukov（南加州大学创新技术研究所）、Mohammad Soleymani（南加州大学创新技术研究所）

💡 **毒舌点评**

本文提出的 EmoReAlM 基准测试系统性地揭示了现有多模态模型在情感推理上“瞎扯淡”的两种主要模式（虚假关联与幻觉），其 AVEm-DPO 优化方法针对性地解决了问题，并在零样本设定下取得了显著提升，是一项扎实且完整的工作。短板在于，其优化方法和基准测试的构建高度依赖 GPT-4o 等大模型，虽然进行了人工验证，但这使得整个工作在一定程度上建立在“模型评价模型”的基础上，其上限可能受制于标注模型自身的理解能力，且引入了难以完全消除的偏差。

📌 **核心摘要**

1.  要解决的问题：现有多模态大语言模型在进行音频视觉情感推理时，存在两大核心缺陷：一是将情绪错误地归因于无关的音视频线索（推理错误），二是为了合理化情绪而“编造”出不存在的音视频线索（感知错误/幻觉）。后者主要由语言模型的文本先验偏差导致。
2.  方法核心：论文提出了一个两阶段方案。首先，构建了名为 EmoReAlM 的专用基准测试（包含4000个人工验证的多选题），用于系统评估模型在关联、一致性及幻觉等方面的表现。其次，提出了 AVEm-DPO 技术，这是一种直接偏好优化方法，通过构建两种偏好对来对齐模型响应：a) 基于提示的多模态输入偏好（Prompt-based Modality Preference），确保模型关注正确的模态；b) 基于情感的响应偏好（Emotion-based Response Preference），区分正确、无关和幻觉的响应。此外，引入了 文本先验去偏（Text Prior Debiasing） 正则化项，抑制模型仅凭文本线索生成响应。
3.  与已有方法相比新在哪里：
    *   评估：超越了现有情感推理或幻觉基准，提供了一个标准化、无需外部LLM评估的、专注于音视觉情感理解中特定错误的测试集。
    *   优化：在应用 DPO 到多模态领域时，创新性地结合了“基于提示的模态偏好”和“文本先验去偏”，比通用的 Naive-DPO 和 Vista-DPO 更具针对性。
4.  主要实验结果：在零样本设定下，AVEm-DPO 显著提升了两个基线模型（Our base, EmotionLLaMA⋆）的性能。在提出的 EmoReAlM 基准上，相对性能提升达 6-19%。在现有情感识别数据集（DFEW, RAVDESS, MER2023）和推理数据集（EMER）上也取得了最优或极具竞争力的结果。关键结果对比如下表所示：

| 模型 | EmoReAlM (平均准确率) | DFEW (UAR) | RAVDESS (UAR) | MER2023 (F1) | EMER (Clue) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Our base (基线) | 65.1% | 56.78% | 53.59% | 89.19% | 5.63 |
| + AVEm-DPO | 83.3% | 58.54% | 58.66% | 92.18% | 6.37 |
| EmotionLLaMA⋆ (基线) | 63.8% | 54.89% | 52.59% | 90.01% | 5.78 |
| + AVEm-DPO | 80.1% | 57.06% | 56.21% | 91.68% | 6.02 |
| Qwen 2.5 Omni (SOTA对比) | 70.0% | 46.94% | 32.88% | 79.72% | 5.85 |

![图1：现有MLLM在情感推理中的两类错误示例](icassp-img://td682AAuPr/0.png)
![图2：EmoReAlM基准测试包含的各类任务示例](icassp-img://td682AAuPr/1.png)
5.  实际意义：该工作为构建可靠、可解释的社会AI代理提供了更精确的评估工具（EmoReAlM）和更有效的训练方法（AVEm-DPO），有助于减少多模态模型在情感理解中的不准确性，提升人机交互的可靠性。
6.  主要局限性：1) EmoReAlM 基准测试源于 DFEW 数据集，可能继承其文化偏见；2) 模型在识别“厌恶”等复杂/模糊情绪时表现仍不佳；3) 论文承认在缓解虚假音频线索关联方面仍有改进空间。

---

### 🥉 [Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition](/audio-paper-digest-blog/posts/2026-05-04-learnable-fractional-superlets-with-a-spectro)

🔥 **8.0/10** | 前25% | #语音情感识别 | #时频分析 | #端到端

👥 **作者与机构**

- 第一作者：Alaa Nfissi（数据科学实验室（DOT-Lab）， Université TÉLUQ；康考迪亚大学信息系统工程学院（Concordia Institute for Information Systems Engineering））
- 通讯作者：未明确说明
- 作者列表：Alaa Nfissi（数据科学实验室（DOT-Lab）， Université TÉLUQ；康考迪亚大学信息系统工程学院）、Wassim Bouachir（数据科学实验室（DOT-Lab）， Université TÉLUQ）、Nizar Bouguila（康考迪亚大学信息系统工程学院）、Brian Mishara（魁北克大学蒙特利尔分校心理学系；蒙特利尔自杀、伦理问题及临终实践研究与干预中心）

💡 **毒舌点评**

这篇论文的亮点在于它不满足于简单地使用或微调现有前端，而是试图从数学原理上重新定义一个更灵活、可学习的时频分析框架（LFST），体现了扎实的信号处理功底和理论建模能力。然而，其主要短板在于计算效率：论文附录的复杂度分析显示，LFST+STEE在FLOPs、延迟和内存占用上远超STFT、LEAF等基线，这使得“紧凑”的STEE编码器所节省的参数优势在端到端系统中可能被前端的计算成本抵消，削弱了其实用吸引力。

🔗 **开源详情**

- 代码：论文中明确提供了GitHub代码仓库链接：https://github.com/alaaNfissi/LFST-for-SER。
- 模型权重：论文中未提及公开的模型权重。
- 数据集：NSPL-CRISE为私有数据集（经IRB批准使用），论文中未提及公开获取方式。IEMOCAP和EMO-DB为公开数据集，论文中提供了引用。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详尽的超参数设置（Table 8）、训练细节（Section 4.2）、算法伪代码（Algorithm 1-3）和技术附录，为复现提供了充分信息。
- 论文中引用的开源项目：论文未明确提及依赖的外部开源工具或模型（除作为基线对比的方法外）。

📌 **核心摘要**

1. 要解决什么问题：传统语音情感识别（SER）的前端（如STFT、小波变换）存在固定的时间-频率（TF）分辨率权衡，且参数需人工调优，无法自适应任务需求。已有超小波变换（Superlet）局限于整数阶，存在阶跃伪影。
2. 方法核心：提出可学习分数阶超小波变换（LFST）作为全可微的前端。LFST通过学习每个频带上的分数阶阶数（通过对数域几何平均实现）、单调对数频率网格和频率依赖的基频周期，生成TF幅度图S和相位一致性图κ。结合一个可学习非对称硬阈值（LAHT）模块对S去噪。之后，设计了紧凑的频谱时序情感编码器（STEE），利用深度可分离卷积、混合TF块、自适应FiLM门控和轴向自注意力处理S和κ，输出情感分类。
3. 新在哪里：相比固定前端或先前非可学习的超小波，LFST首次将超小波的阶数、频率网格和周期全部设为可学习参数，并进行了端到端训练。同时，引入了物理意义明确的相位一致性κ通道和LAHT去噪模块，形成了一个理论完备、可数据驱动的TF表示学习框架。
4. 主要实验结果：在IEMOCAP（4类）上，准确率87.5%，F1值86.8%；在EMO-DB（7类）上，准确率91.4%，F1值90.4%；在NSPL-CRISE（5类，电话语音）上，准确率76.9%，F1值76.6%。在与相同STEE编码器下的STFT、小波、固定超小波、LEAF前端对比中，LFST在三个数据集上均取得最佳性能。关键消融显示，在NSPL-CRISE上，移除κ导致F1下降9.7个百分点，移除LAHT下降2.5个百分点。
5. 实际意义：为语音及音频分析提供了一种可学习、可解释、数学基础扎实的TF表示学习前端，可替代传统固定设计，并可能应用于其他需要精细时频分析的场景。
6. 主要局限性：系统计算成本较高，LFST前端的FLOPs和内存占用远高于STFT等轻量级前端，限制了部署。此外，研究未在更大规模、更多语言的数据集上验证，也未与强大的预训练SSL模型进行直接性能对比。

---

### 4. [EmotionThinker: Prosody-Aware Reinforcement Learning for Explainable Speech Emotion Reasoning](/audio-paper-digest-blog/posts/2026-05-04-emotionthinker-prosody-aware-reinforcement)

🔥 **8.0/10** | 前25% | #语音情感识别 | #强化学习 | #语音大模型 #数据集

👥 **作者与机构**

- 第一作者：Dingdong Wang (香港中文大学、微软)
- 通讯作者：未明确说明
- 作者列表：Dingdong Wang (香港中文大学、微软), Shujie Liu (微软), Tianhua Zhang (未说明), Youjun Chen (未说明), Jinyu Li (微软), Helen Meng (香港中文大学)

💡 **毒舌点评**

亮点在于将RL范式引入语音情感推理，并提出了一个新颖的“渐进式信任感知”奖励机制来约束推理过程，思路清晰且具有启发性。短板在于其核心的“推理质量”高度依赖一个由合成数据训练的奖励模型和GPT-4o的自动评估，这种“用AI评AI”的闭环验证其可靠性和泛化性仍需更多元的外部检验。

🔗 **开源详情**

- 代码：论文提供了项目主页和GitHub仓库链接（https://github.com/dingdongwang/EmotionThinker）。
- 模型权重：论文中未明确说明是否会开源EmotionThinker或EmotionThinker-Base的模型权重。
- 数据集：论文构建了EmotionCoT-35K数据集，并描述了构建方法，预计会公开。
- Demo：未提及。
- 复现材料：在附录中提供了详细的数据构建流程、模型训练细节（SFT和RL）、奖励模型训练数据构造、评估prompt等，复现信息较为充分。
- 依赖的开源项目：论文明确依赖并提及的开源项目包括：Qwen2.5-Omni（骨干模型）、WhiStress（重音检测）、wav2vec 2.0（说话人属性分类）、GPT-4o API（数据合成与评估）。

📌 **核心摘要**

这篇论文旨在解决当前语音大语言模型（SpeechLLMs）在情感理解上仅进行简单分类、缺乏可解释性推理的问题。论文首次尝试将情感识别（SER）重新定义为一个深度推理问题，并提出EmotionThinker框架。该框架的核心方法包括：1）构建了首个面向语音情感推理的Chain-of-Thought数据集EmotionCoT-35K；2）通过韵律感知的监督微调（SFT）构建了基础模型EmotionThinker-Base，显著提升了模型对音高、能量等韵律线索的感知能力；3）设计了GRPO-PTR强化学习策略，该策略在标准规则奖励（结果准确性）基础上，逐步引入并动态调整一个评估推理过程质量的奖励模型。实验表明，EmotionThinker在IEMOCAP、MELD等多个基准上，情感识别平均准确率达68.89%，推理质量（由GPT-4o评估的4个维度平均分）达3.98，均显著优于对比的16个开源SpeechLLM。该工作的实际意义是推动SER从“是什么”走向“为什么”，为构建可解释、可信赖的情感AI迈出了一步。主要局限性在于其推理监督和评估对大型语言模型的合成数据和自动评分依赖较重。

---

### 5. [Speech World Model: Causal State–Action Planning with Explicit Reasoning for Speech](/audio-paper-digest-blog/posts/2026-05-04-speech-world-model-causal-stateaction-planning)

✅ **7.5/10** | 前25% | #语音情感识别 | #因果图 | #显式推理 #语音大模型

👥 **作者与机构**

- 第一作者：Xuanru Zhou (浙江大学), Jiachen Lian (UC Berkeley) (论文明确标注两位作者贡献均等)
- 通讯作者：未明确说明
- 作者列表：Xuanru Zhou (浙江大学), Jiachen Lian (UC Berkeley), Henry Hong (UC Berkeley), Xinyi Yang (浙江大学), Gopala Anumanchipalli (UC Berkeley)

💡 **毒舌点评**

亮点是将认知科学的模块化思想形式化为一个可计算的因果图（WMA, ToM, SA, Prag），并利用其结构化先验显著提升了训练效率和推理能力，为“如何让语音模型像人一样思考”提供了一个新颖的框架。短板在于，该因果图的结构是预定义的，限制了模型对未见依赖关系的适应能力，且完全依赖合成标签训练指令微调阶段，可能成为性能上限的瓶颈。

🔗 **开源详情**

- 代码：论文中提及将开源代码，但未提供具体仓库链接。（原文：“we will open source the model and data”）
- 模型权重：论文中提及将开源模型，但未提供具体下载链接。
- 数据集：使用了MELD, IEMOCAP, SLURP, VoxCeleb四个公开数据集，并通过Vicuna生成了部分伪标签数据。未提及是否会发布生成的伪标签数据集。
- Demo：提供了Demo音频链接：http://bit.ly/4pBJuWP。
- 复现材料：提供了极其详尽的附录，涵盖模型架构细节（A.7）、训练配置（A.5）、损失函数与算法（A.2， A.8）、评估指标公式与算法（A.8）、数据集统计与标签空间（A.4）、以及用于指令微调的完整提示模板（A.5.2, A.9）。
- 论文中引用的开源项目：WavLM, distil-BERT, opensmile, Vicuna-13b-v1.5, LoRA, Llama3.1-8B, Qwen2-Audio。

📌 **核心摘要**

1.  解决的问题：当前语音语言模型（SLMs）多为黑箱式级联架构，虽擅长内容分析，但在需要复杂推理的场景（如情感、意图推断）下表现薄弱，且推理过程不透明，易产生幻觉。
2.  方法核心：提出“语音世界模型”（SWM），将语音理解分解为四个认知模块：世界模型激活（情境）、心智理论（说话者情绪）、言语行为（沟通功能）和语用意图（深层目的）。这些模块通过一个预定义的因果图连接，模拟人类语音感知中状态的因果依赖。系统首先训练此因果图以建立认知状态搜索空间，然后将其输出（各模块状态）作为显式提示，指导经过指令微调的语言模型生成逐步推理链和最终回复。
3.  创新之处：与传统SLMs和基于思维链的启发式方法不同，SWM首次提出并实现了基于认知原理的图结构化语音理解模型。其创新在于：(1) 显式建模语音理解的因果动态，(2) 通过图结构实现半监督学习（从标注不全的数据中学习），(3) 将结构化状态作为“锚点”引导大语言模型进行更可靠、可解释的推理。
4.  主要实验结果：
    *   图评估：所提因果图相比随机图，训练速度快约5倍（2.07小时 vs. 10.39小时），且在因果效应（ACE/ICS）上更稳定。半监督设置下，未标注模块能通过因果结构被有效推断。
    *   指令微调：在多项推理指标（Model-as-Judge评分）上，SWM显著超越了Qwen2-Audio等开源基线及CoT微调基线。在情感识别等任务上甚至超过GPT-4o，整体性能接近Gemini 2.5 Pro，但训练成本极低（仅20 GPU小时）。关键对比结果见下表。

| 模型 | 提示风格 | 总体M.J.分数 (0.6推理 + 0.4回复) ↑ | 推理分数 ↑ | 情感分类准确率 ↑ |
| :--- | :--- | :--- | :--- | :--- |
| 我们的模型 (SWM, Llama3.1-8b) | CoT | 7.81 | 7.84 | 66.26 |
| 我们的模型 (SWM, Qwen2-Audio) | CoT | 7.59 | 7.26 | 71.02 |
| Qwen2-Audio-CoT (基线微调) | CoT | 5.18 | 4.76 | 34.72 |
| Qwen2-Audio (开源) | CoT | 2.39 | 1.96 | 17.50 |
| Voxtral (开源) | CoT | 2.92 | 2.52 | 5.56 |
| GPT-4o (商业) | CoT | 7.41 | 6.98 | 45.16 |
| Gemini 2.5 Pro (商业) | CoT | 8.12 | 8.02 | 51.29 |

5.  实际意义：为构建更高效、可解释且推理能力更强的语音AI系统提供了新范式。它证明了引入认知结构的先验知识，能让小模型以极低的成本获得与庞大商业模型竞争的能力。
6.  主要局限性：(1) 当前仅使用四个模块，可能无法覆盖所有语音动态。(2) 因果图结构是预定义的，缺乏自适应性。(3) 依赖合成标签生成训练数据，可能引入偏差。

---

