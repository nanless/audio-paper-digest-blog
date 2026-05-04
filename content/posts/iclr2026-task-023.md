---
title: "ICLR 2026 - 语音合成 论文列表"
date: 2026-05-04
draft: false
tags: ["语音合成"]
categories: [iclr-2026]
description: "共 10 篇 ICLR 2026 语音合成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音合成

共 **10** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-04-flexicodec-a-dynamic-neural-audio-codec-for-low) | 9.0分 | 前10% |
| 🥈 | [VibeVoice: Expressive Podcast Generation with Next-Token Dif](/audio-paper-digest-blog/posts/2026-05-04-vibevoice-expressive-podcast-generation-with-next) | 8.5分 | 前10% |
| 🥉 | [SpeechJudge: Towards Human-Level Judgment for Speech Natural](/audio-paper-digest-blog/posts/2026-05-04-speechjudge-towards-human-level-judgment-for) | 8.5分 | 前10% |
| 4. | [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS](/audio-paper-digest-blog/posts/2026-05-04-flexivoice-enabling-flexible-style-control-in) | 8.0分 | 前25% |
| 5. | [Toward Complex-Valued Neural Networks for Waveform Generatio](/audio-paper-digest-blog/posts/2026-05-04-toward-complex-valued-neural-networks-for) | 8.0分 | 前25% |
| 6. | [From Natural Alignment to Conditional Controllability in Mul](/audio-paper-digest-blog/posts/2026-05-04-from-natural-alignment-to-conditional) | 8.0分 | 前25% |
| 7. | [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Re](/audio-paper-digest-blog/posts/2026-05-04-hierarchical-semantic-acoustic-modeling-via-semi) | 8.0分 | 前25% |
| 8. | [Gogo: Group-wise granularity-ordered codec for stable and ef](/audio-paper-digest-blog/posts/2026-05-04-gogo-group-wise-granularity-ordered-codec-for) | 7.5分 | 前25% |
| 9. | [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-continuous-audio-language-models) | 7.0分 | 前25% |
| 10. | [MambaVoiceCloning: Efficient and Expressive Text-to-Speech v](/audio-paper-digest-blog/posts/2026-05-04-mambavoicecloning-efficient-and-expressive-text) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-04-flexicodec-a-dynamic-neural-audio-codec-for-low)

🔥 **9.0/10** | 前10% | #语音合成 | #自监督学习 | #流匹配 #多语言

👥 **作者与机构**

- 第一作者：Jiaqi Li（香港中文大学（深圳）、微软）
- 通讯作者：未明确说明
- 作者列表：Jiaqi Li（香港中文大学（深圳）、微软）、Yao Qian（微软）、Yuxuan Hu（微软）、Leying Zhang（上海交通大学）、Xiaofei Wang（微软）、Heng Lu（微软）、Manthan Thakker（微软）、Jinyu Li（微软）、Sheng Zhao（微软）、Zhizheng Wu（香港中文大学（深圳）、深圳湾实验室、澳门城市大学、Amphion Technology Co., Ltd.）

💡 **毒舌点评**

FlexiCodec在极低帧率（3-12.5Hz）下实现了高质量的语音重建和强大的语义保持，其动态帧率分配策略被实验数据强力支持，显著优于将现有固定帧率模型强行降低帧率的做法。然而，论文在评估模型对真实世界复杂场景（如强背景噪声、多人重叠说话）的鲁棒性方面着墨较少，且多语言泛化能力的验证仅限于微调，这可能是未来需要深入探索的方向。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/amphionteam/flexicodec
- 模型权重：论文中提及“Code is available at”，结合项目主页链接（https://flexicodec.github.io），通常意味着会开源模型权重。论文中已提供中文微调模型“FlexiCodec-ZH tune”。
- 数据集：训练使用公开的Librilight-Large数据集。评估使用公开的LibriSpeech、TIMIT和Emilia数据集。
- Demo：提供在线演示页面：https://flexicodec.github.io
- 复现材料：提供了极其详细的训练配置（优化器、学习率、批大小、步数、硬件）、模型超参数（层数、维度、码本大小、Transformer配置）、损失函数、评估指标、基线模型重训练细节以及消融实验设置。附录部分包含大量补充信息。
- 引用的开源项目：SenseVoice-Small（ASR特征提取）、DAC（编解码器基础架构）、Vocos（TTS声码器）、Amphion工具包。

📌 **核心摘要**

1. 要解决什么问题：传统高帧率神经音频编解码器会导致语音语言模型序列过长，计算成本高。现有低帧率（如12.5Hz）编解码器在进一步降低帧率时会严重丢失语义信息，限制了下游任务性能。
2. 方法核心是什么：本文提出FlexiCodec，一种采用动态帧率的低比特率神经音频编解码器。其核心是利用预训练ASR模型提取的语义特征来指导帧合并，自适应地在语音信息稀疏区域（如静音、长元音）减少帧数，在信息密集区域保留更多细节。模型采用双流编码（ASR特征流+波形特征流）、Transformer瓶颈模块进行帧合并/解合并，并使用有限标量量化（FSQ）进行语义token化。
3. 与已有方法相比新在哪里：FlexiCodec是首个在低于10Hz平均帧率下实现高质量、可重构语音的编解码器之一。其创新在于：(1) 动态帧率分配：打破了固定帧率的限制，允许在推理时通过阈值连续控制帧率（3-12.5Hz）；(2) ASR特征引导语义编码与合并：使用更具语义集中性的ASR特征（而非SSL特征）同时用于语义量化和指导合并过程，提升了语义保持；(3) 创新的帧合并/解合并模块：引入Transformer对合并前后的序列进行精细化处理，减少伪影。
4. 主要实验结果如何：
    *   在核心语义测试中（RVQ-1 WER），FlexiCodec��6.25Hz平均帧率下WER为4.15%，远优于重训练的基线DualCodec（31.5%）和DAC（88.2%）。对比表5显示，其在语义保持上也优于许多更高帧率的编解码器。
    *   在音频质量上（PESQ, UTMOS等），FlexiCodec在不同比特率类别下均取得最优或接近最优的成绩。
    *   下游TTS实验表明，FlexiCodec-TTS（6.25Hz AR）在WER（3.2%）和主观评分（NMOS 3.32, QMOS 3.40）上与CosyVoice等强基线相当，但自回归阶段加速高达7.3倍。
    *   消融研究证实，动态帧率策略在6.25Hz下能将RVQ-1 WER相对提升26%，ASR特征相比SSL特征在低帧率下具有决定性优势（WER从27.3%降至4.15%）。

| 模型 | 帧率 (Hz) | WER(RVQ1) ↓ | WER(RVQ1:8) ↓ | PESQ ↑ | UTMOS ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| DualCodec (重训练) | 6.25 | 31.5 | 3.42 | 2.74 | 4.08 |
| FlexiCodec | 6.25 | 4.15 | 2.53 | 2.76 | 4.18 |
| FlexiCodec (无动态帧率) | 6.25 | 5.22 | 2.73 | 2.76 | 4.18 |
5. 实际意义是什么：FlexiCodec通过显著降低音频token帧率，为构建更高效、低延迟的语音语言模型和语音合成系统提供了关键基础技术。其动态、可控的帧率设计为适应不同计算资源和应用场景提供了灵活性。
6. 主要局限性是什么：论文未充分探讨在极端噪声或高度重叠语音等复杂声学场景下的性能；多语言支持依赖于在特定语言上微调，零样本跨语言语义保持能力有限；动态帧率合并过程的可解释性虽有可视化，但合并决策的边界条件与语音语言学单位的精确对应关系仍需深入研究。

---

### 🥈 [VibeVoice: Expressive Podcast Generation with Next-Token Diffusion](/audio-paper-digest-blog/posts/2026-05-04-vibevoice-expressive-podcast-generation-with-next)

🔥 **8.5/10** | 前10% | #语音合成 | #扩散模型 | #零样本 #多说话人

👥 **作者与机构**

- 第一作者：Zhiliang Peng (Microsoft Research)
- 通讯作者：Furu Wei (Microsoft Research)
- 作者列表：Zhiliang Peng (Microsoft Research), Jianwei Yu (Microsoft Research), Wenhui Wang (Microsoft Research), Yaoyao Chang (Microsoft Research), Yutao Sun (Microsoft Research), Li Dong (Microsoft Research), Yi Zhu (Microsoft Research), Weijiang Xu (Microsoft Research), Hangbo Bao (Microsoft Research), Zehua Wang (Microsoft Research), Shaohan Huang (Microsoft Research), Yan Xia (Microsoft Research), Furu Wei (Microsoft Research)

#

💡 **毒舌点评**

这篇论文成功地将播客生成从“能用”推向了“好用”的阶段，特别是其超低帧率（7.5Hz）的连续声学分词器在保持高保真度（UTMOS 4.18）的同时极大压缩了序列长度，是处理长序列的关键创新，解决了90分钟超长对话生成的核心瓶颈。然而，该方法对数据质量（需自建复杂标注管道）和训练复杂性（课程学习、大规模计算）的依赖，使其复现门槛较高，且论文并未公开其内部播客数据集。

#

🔗 **开源详情**

- 代码：提供了代码仓库链接 `https://github.com/microsoft/VibeVoice`。
- 模型权重：论文中提到代码和检查点已公开，预计与代码仓库关联。
- 数据集：论文中明确使用了内部播客数据集进行训练，未提及公开该数据集。评估集VIBEVOICE-Eval由论文团队自建，未提及公开。
- Demo：论文中未提及在线演示链接。
- 复现材料：详细提供了训练超参数（附录F）、数据处理流水线（附录A）、评估设置（3.3节）等复现所需的关键信息。
- 论文中引用的开源项目：Silero VAD、Whisper-large-v3-turbo、Nemo ASR、WeSpeaker。

📌 **核心摘要**

1.  解决的问题：传统文本转语音（TTS）系统难以生成长篇幅（如播客）、多说话人、自然对话的音频，面临扩展性差、说话人一致性不足、对话轮转不自然等挑战。
2.  方法核心：提出了VibeVoice框架，采用一种“下一词元扩散”（Next-Token Diffusion）的端到端LLM架构。其核心是高效的混合语音表示，由运行在7.5Hz超低帧率下的连续声学分词器（σ-VAE）和语义分词器（ASR预训练）组成，并结合扩散模型进行声学特征生成。
3.  创新之处：1) 超低帧率连续分词器：声学分词器在仅7.5个词元/秒的极端压缩率下实现了业界领先的重建质量。2) 解耦的混合表示：明确分离并融合声学与语义特征，在长序列生成中稳定了内容和韵律。3) 可扩展的端到端生成架构：首次实现了零样式合成长达90分钟、最多4位说话人的连贯对话。
4.  主要实验结果：VibeVoice-7B模型在主观评估中平均分3.76（5分制），超越Google Gemini 2.5 Pro（3.66）和Elevenlabs v3（3.40）。在客观指标上，1.5B模型的WER（词错误率）低至1.11，7B模型的说话人相似度（SIM-O）达到0.692。关键消融实验证明了混合表示（WER: 1.84）相比纯声学表示（WER: 6.22）和耦合表示（WER: 3.55，SIM-O: 0.45）的显著优势。
5.  实际意义：为自动化、高质量的播客、有声书和长对话音频生成提供了强大的技术基础，推动了对话式语音合成向更自然、更具表现力的方向发展。
6.  主要局限性：严重依赖于其内部自建的、经过复杂流水线处理的大规模播客数据集（论文未公开）；模型训练需要大规模计算资源（1.5B模型在64个MI300X GPU上训练约170小时）；虽然代码开源，但高质量的预训练分词器和完整复现仍具挑战。

---

### 🥉 [SpeechJudge: Towards Human-Level Judgment for Speech Naturalness](/audio-paper-digest-blog/posts/2026-05-04-speechjudge-towards-human-level-judgment-for)

🔥 **8.5/10** | 前10% | #语音合成 | #强化学习 | #数据集 #基准测试

👥 **作者与机构**

- 第一作者：Xueyao Zhang（香港中文大学（深圳））
- 通讯作者：Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd.）
- 作者列表：
    - Xueyao Zhang（香港中文大学（深圳））
    - Chaoren Wang（香港中文大学（深圳））
    - Huan Liao（香港中文大学（深圳））
    - Ziniu Li（香港中文大学（深圳））
    - Yuancheng Wang（香港中文大学（深圳））
    - Li Wang（香港中文大学（深圳））
    - Dongya Jia（ByteDance Seed）
    - Yuanzhe Chen（ByteDance Seed）
    - Xiulin Li（DataBaker Technology）
    - Zhuo Chen（ByteDance Seed）
    - Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd.）

#

💡 **毒舌点评**

这篇论文的“基建”价值很高，99K规模的高质量人类偏好数据集和开源承诺堪称语音合成对齐研究的“粮草先行”。但核心的奖励模型架构（基于现有Qwen2.5-Omni的微调）创新稍显有限，更像是一个强大但“组装式”的解决方案，而非从头设计的、能深刻洞察自然度内在结构的新架构。

### 📌 核心摘要
1.  要解决的问题：当前语音合成模型缺乏大规模、专注于“自然度”这一核心主观指标的人类偏好数据集，导致难以有效对齐人类感知，现有自动评估方法与人类判断存在显著差距。
2.  方法核心：构建了SpeechJudge套件，包括：(1) SpeechJudge-Data：一个包含99K语音对、涵盖多语言和多风格的大型人类偏好数据集；(2) SpeechJudge-Eval：一个高质量的评估基准；(3) SpeechJudge-GRM：一个基于Qwen2.5-Omni-7B的生成式奖励模型，通过“监督微调（SFT）+基于人类反馈的强化学习（RL）”两阶段训练得到。
3.  与已有方法相比新在哪里：
    *   数据：是首个专门针对语音“自然度”的大规模（~100K对）配对偏好数据集，而非传统的点状MOS评分。
    *   评估：建立了标准化的基准任务（给定文本和两个语音，判断哪个更自然），并系统评估了现有指标（WER, FAD等）和多个AudioLLMs，揭示了巨大性能差距。
    *   模型：提出的GRM不仅给出分数，还能生成“思维链”解释，并支持通过多数投票进行推理时缩放，性能优于传统的Bradley-Terry奖励模型。
4.  主要实验结果：
    *   基准测试：在SpeechJudge-Eval上，最强的闭源模型Gemini-2.5-Flash与人类判断的一致性低于70%。
    *   GRM性能：SpeechJudge-GRM达到77.2%的准确率，使用多数投票（@10）后提升至79.4%，显著优于相同的BTRM基线（72.7%）。
    *   下游应用：将GRM用作奖励函数对TTS模型（Qwen2.5-0.5B-TTS）进行后训练，相比使用原始数据集或BTRM，能带来更显著的自然度提升（主观CMOS）。
    *   关键数据对比如下表所示：

| 模型 | 在 SpeechJudge-Eval 上的准确率 (%) |
| :--- | :--- |
| Gemini-2.5-Flash (最佳基线) | 69.1 |
| SpeechJudge-BTRM | 72.7 |
| SpeechJudge-GRM (SFT) | 75.3 |
| SpeechJudge-GRM (SFT+RL) | 77.2 |
| SpeechJudge-GRM (SFT+RL, Voting@10) | 79.4 |

5.  实际意义：为语音生成领域提供了对齐人类偏好的关键基础设施（数据、基准、模型），有助于推动生成更自然、更符合人类听感的语音，并提供了可解释的自动评估工具。
6.  主要局限性：数据集主要基于中文母语标注员对合成语音的评估，可能对其他语言文化群体的代表性不足；奖励模型的推理链（CoT）质量继承自教师模型（Gemini），未经大规模人工验证；模型主要进行句子级的粗粒度判断，无法定位语音内部的局部瑕疵。

## 详细分析

### 01.模型架构
SpeechJudge-GRM 的核心是一个在预训练AudioLLM基础上进行后训练的生成式奖励模型（Generative Reward Model, GRM）。其训练流程分为两个关键阶段，整体架构与训练数据流如图4所示。

![SpeechJudge-GRM的两阶段训练流程图](icassp-img://I9ED9VWZq6/3.png)

1.  监督微调（SFT）阶段（冷启动）：
    *   输入：从SpeechJudge-Data中筛选出的、教师模型（Gemini-2.5-Flash）判断与人类偏好一致的样本（约25K对）。输入格式为“思维链提示（Table 1的CoT prompt）+ 教师生成的推理输出”。
    *   过程：对基础模型Qwen2.5-Omni-7B (Thinker) 进行LoRA微调。训练目标是让模型学会遵循指令、进行推理，并输出格式化的自然度判断。此阶段旨在提升模型的基础指令遵循和推理能力。
    *   输出：一个初步具备自然度判断和CoT推理能力的模型 `SpeechJudge-GRM (SFT)`。

2.  基于人类反馈的强化学习（RL）阶段：
    *   输入：SpeechJudge-Data中教师模型判断与人类不一致的“困难样本”（约17K对）的提示词（CoT prompt）。
    *   过程：以SFT模型为策略模型，使用GRPO算法进行训练。对于每个提示，模型生成多个回答（rollout）。将模型最终输出的偏好判断（解析得到）与人类标注的偏好进行比对，作为可验证奖励（奖励为+1或-1）。
    *   核心思想：允许模型通过自主探索，学习如何生成更准确的最终判断和更有效的推理过程，以在困难样本上获得正奖励。
    *   输出：最终模型 `SpeechJudge-GRM (SFT+RL)`，其判断准确性和推理质量得到进一步提升。

组件交互与数据流：数据集中的语音对`(a1, a2)`和文本`t`通过精心设计的提示词输入模型。模型以自回归方式生成包含推理步骤和最终结论的文本序列。在SFT阶段，损失仅作用于教师生成的输出序列；在RL阶段，奖励信号基于最终输出的准确性计算，反向传播以优化整个生成策略。

### 02.核心创新点
1.  构建首个大规模语音“自然度”偏好数据集：针对语音合成领域缺乏以“自然度”为核心的、大规模、高质量配对偏好数据的空白，构建了包含99K对、涵盖多种零样本TTS模型、多语言、多风格的SpeechJudge-Data。数据构建过程严谨，包含多轮标注与一致性分析。
2.  建立标准化的语音自然度评估基准：设计了SpeechJudge-Eval基准任务（给定文本和两个语音，判断哪个更自然），并系统评测了传统指标（WER, FAD）、MOS预测器、声纹检测器和多个前沿AudioLLMs。揭示了当前技术（即使是最强的闭源AudioLLMs）在该任务上与人类判断的显著差距，明确了研究方向。
3.  提出并验证了用于自然度判断的生成式奖励模型（GRM）：突破了传统Bradley-Terry奖励模型仅输出一个标量分数的限制。提出的GRM能生成可解释的“思维链”推理，并支持通过推理时多次采样与多数投票（inference-time scaling）来提升判断准确性。实验证明GRM在准确率和实用性（如作为下游TTS的奖励函数）上均优于BTRM。

### 03.细节详述
- 训练数据：
    - SpeechJudge-Data (raw)：99K语音对，由6个不同的先进零样本TTS模型（ARS, CosyVoice2, CosyVoice2-INTP, Ints-INTP, F5-TTS, MaskGCT）生成。语音参考来自Emilia-Large（常规）、ParaSpeechCaps/L2-Arctic/KeSpeech/原神语音（表现性）等。目标文本包含中、英、中英混合，涵盖单语和跨语言合成场景。由69名标注员进行为期两个月的标注，平均每对获得2.49个标注。
    - 子集划分：
        - `SpeechJudge-Data (pref)`：79K对，移除了标注为“平局（Tie）”的样本，只保留明确的偏好数据。
        - `SpeechJudge-Data (hq)`：44K对，在pref基础上，进一步筛选了WER差异小于12%的样本，以排除清晰度差异对自然度判断的干扰，使标签更纯粹地反映自然度。
        - `SpeechJudge-Data (train)`：42K对，用于训练。从hq中筛选，并通过投票确定最终标签。
        - `SpeechJudge-Eval`：1K对，用于评估。从hq中采用分层抽样选取“完全一致（FA）”级别的样本构成，确保高质量的基准真值。
- 损失函数：
    - SFT阶段：标准的自回归语言模型负对数似然损失（Next Token Prediction），仅对教师生成的输出序列`Oteacher`计算损失。
    - RL阶段：采用GRPO算法的损失函数，其奖励为二元奖励（正确判断为+1，错误为-1）。论文未给出具体公式，但说明奖励仅基于最终判断的正确性，不约束中间推理过程。
- 训练策略：
    - SFT阶段：使用LoRA（rank=128）对Qwen2.5-Omni-7B进行微调。优化器为AdamW，学习率为5e-5，最大序列长度4000 tokens。
    - RL阶段：初始化策略模型为SFT模型，使用LoRA（rank=64）。每个提示的rollout数（采样数）为8，batch size为32，学习率为5e-6。采用DAPO（GRPO的增强变体）算法。
- 关键超参数：基础模型为Qwen2.5-Omni-7B（Thinker），一个参数量为70亿的多模态模型。
- 训练硬件：论文未明确说明训练所使用的GPU型号、数量和总训练时长。
- 推理细节：评估时，对于GRM，采用CoT提示引导模型生成推理过程和最终判断。支持推理时缩放：通过生成多个（如10个）独立输出，并采用多数投票确定最终结果（Voting@10），可有效提升准确率。
- 正则化或稳定训练技巧：SFT和RL阶段均使用LoRA进行高效微调。RL阶段的奖励函数设计简单（二元奖励），有助于训练稳定性。

### 04.实验结果
1.  基准测试：现有方法在SpeechJudge-Eval上的表现
    下表完整列出了论文中各类模型在SpeechJudge-Eval基准上的性能。评估任务为二选一判断哪个语音更自然。

| 类别 | 模型 | Regular (%) | Expressive (%) | Total (%) |
| :--- | :--- | :--- | :--- | :--- |
| 客观指标 | WER ↓ | 59.3 | 57.0 | 57.9 |
| | SIM ↑ | 47.5 | 42.5 | 44.5 |
| | FAD ↓ | 50.3 | 47.5 | 48.6 |
| MOS预测器 | DNSMOS | 61.0 | 55.8 | 57.9 |
| | UTMOS | 54.0 | 53.5 | 53.7 |
| | Content Enjoyment (CE) | 69.3 | 55.2 | 60.8 |
| 深度伪造检测器 | AASIST | 40.5 | 50.8 | 46.7 |
| | ADV | 35.3 | 40.3 | 38.3 |
| AudioLLMs (开源) | Qwen2.5-Omni-7B | 62.0 | 59.7 | 60.6 |
| | Kimi-Audio-7B-Instruct | 65.5 | 68.0 | 67.0 |
| | MiMo-Audio-7B-Instruct | 61.3 | 49.3 | 54.1 |
| AudioLLMs (闭源) | Gemini-2.5-Flash | 73.5 | 66.2 | 69.1 |
| | GPT-4o Audio | 71.5 | 64.7 | 67.4 |

关键结论：即使是最强的闭源模型Gemini-2.5-Flash，准确率也低于70%，表明语音自然度判断是一个极具挑战性的任务。传统客观指标和MOS预测器表现不佳。

2.  所提方法：SpeechJudge-GRM 的性能
    | 模型 | Regular (%) | Expressive (%) | Total (%) |
    | :--- | :--- | :--- | :--- |
    | Qwen2.5-Omni-7B (基础) | 62.0 | 59.7 | 60.6 |
    | Gemini-2.5-Flash (教师) | 73.5 | 66.2 | 69.1 |
    | SpeechJudge-BTRM | 77.5 | 69.5 | 72.7 |
    | SpeechJudge-GRM (SFT) | 77.8 | 73.7 | 75.3 |
    | SpeechJudge-GRM (SFT) w/ Voting@10 | 77.4 | 77.6 | 77.6 |
    | SpeechJudge-GRM (SFT+RL) | 79.0 | 76.0 | 77.2 |
    | SpeechJudge-GRM (SFT+RL) w/ Voting@10 | 80.5 | 78.7 | 79.4 |

    ![不同奖励模型在样本选择任务中的主观评估结果对比](icassp-img://I9ED9VWZq6/4.png)
    图5展示了使用不同奖励模型从100个生成样本中选出最佳样本后，与随机样本进行对比的主观评估结果。SpeechJudge-GRM选出的样本显著优于随机样本（“Win”比例更高），且优于SpeechJudge-BTRM。

    | 方法 | Text Accuracy (T-ACC) | Naturalness CMOS (N-CMOS) |
    | :--- | :--- | :--- |
    | Qwen2.5-0.5B-TTS (基线) | 84.0% | 0.00 ±0.00 |
    | w/ INTP (DPO) | 87.0% | 0.18 ±0.07 |
    | w/ SpeechJudge-Data (DPO) | 91.0% | 0.16 ±0.08 |
    | w/ SpeechJudge-GRM (offline DPO) | 91.0% | 0.21 ±0.12 |
    | w/ SpeechJudge-GRM (online DPO) | 90.0% | 0.25 ±0.09 |
    表格（来自图6a）和图6b展示了将SpeechJudge-GRM作为奖励函数对TTS模型进行后训练的效果。所有方法都提升了文本准确性和自然度，其中使用GRM作为在线奖励（online DPO）的方法在自然度CMOS上提升最大（+0.25），同时保持了较高的文本准确性。

### 05.评分理由
- 学术质量：6.5/7：论文工作扎实，从数据构建、基准定义到模型训练形成了一个完整的研究闭环。创新点清晰，实验设计全面，既有横向对比（各类基线），也有纵向消融（GRM的不同阶段），还有下游应用验证。主要扣分点在于：1) GRM的主体架构是基于现有模型的适配与微调，架构本身的原创性有限；2) 核心的两阶段训练策略（SFT+RL）是近期强化学习领域的常见范式，非本文独创；3) 部分关键实验细节（如RL训练硬件、完整超参数搜索）未完全披露。
- 选题价值：2/2：选题切中语音合成领域的核心痛点——如何对齐人类对于“自然度”的感知。构建大规模偏好数据集和有效的奖励模型是推动该领域从“能用”到“好用”发展的关键。本工作提供了重要的开源资源，对后续研究有很高的价值。
- 开源与复现加成���1/1：论文明确承诺开源所有资源（数据、模型、代码、评估集），并在论文中提供了极其详尽的数据集构建指南、模型训练细节（包括LoRA rank、学习率、rollout数等）和评估协议。这为完全复现提供了极大便利，是开源贡献的典范。

### 开源详情
- 代码：论文明确声明将公开所有代码，包括奖励模型训练和下游实验的代码。论文中未直接给出代码链接，但提供了项目主页和GitHub链接。
- 模型权重：论文明确声明将公开训练好的SpeechJudge-GRM模型检查点。
- 数据集：论文明确声明将公开SpeechJudge-Data（全部子集）和SpeechJudge-Eval基准数据集。
- Demo：论文提供了项目网站用于展示音频样本。
- 复现材料：论文在附录中提供了极其详细的实验设置，包括标注指南、训练超参数（学习率、batch size、LoRA rank、rollout数等）、模型选择、评估协议等。
- 论文中引用的开源项目：主要依赖Qwen2.5-Omni-7B作为基础模型，并使用了ms-swift工具包进行RL训练。还引用了多个开源的TTS模型（CosyVoice2, F5-TTS等）和评估工具（如DNSMOS、audiobox-aesthetics）。
- 整体开源情况：论文的开源承诺非常彻底，覆盖了数据、模型、代码和复现指南，对社区非常友好。

🔗 **开源详情**

- 代码：论文明确声明将公开所有代码，包括奖励模型训练和下游实验的代码。论文中未直接给出代码链接，但提供了项目主页和GitHub链接。
- 模型权重：论文明确声明将公开训练好的SpeechJudge-GRM模型检查点。
- 数据集：论文明确声明将公开SpeechJudge-Data（全部子集）和SpeechJudge-Eval基准数据集。
- Demo：论文提供了项目网站用于展示音频样本。
- 复现材料：论文在附录中提供了极其详细的实验设置，包括标注指南、训练超参数（学习率、batch size、LoRA rank、rollout数等）、模型选择、评估协议等。
- 论文中引用的开源项目：主要依赖Qwen2.5-Omni-7B作为基础模型，并使用了ms-swift工具包进行RL训练。还引用了多个开源的TTS模型（CosyVoice2, F5-TTS等）和评估工具（如DNSMOS、audiobox-aesthetics）。
- 整体开源情况：论文的开源承诺非常彻底，覆盖了数据、模型、代码和复现指南，对社区非常友好。

---

### 4. [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions](/audio-paper-digest-blog/posts/2026-05-04-flexivoice-enabling-flexible-style-control-in)

🔥 **8.0/10** | 前25% | #语音合成 | #强化学习 | #零样本 #多语言

👥 **作者与机构**

- 第一作者：Dekun Chen (The Chinese University of Hong Kong, Shenzhen; Shenzhen Loop Area Institute)
- 通讯作者：未明确说明（论文中未明确指出通讯作者）
- 作者列表：Dekun Chen (香港中文大学（深圳）/深圳湾实验室), Xueyao Zhang (香港中文大学（深圳）), Yuancheng Wang (香港中文大学（深圳）), Kenan Dai (Huawei Technologies Co., Ltd.), Li Ma (Huawei Technologies Co., Ltd.), Zhizheng Wu (香港中文大学（深圳）/澳门城市大学/Amphion Technology Co., Ltd.)

#

💡 **毒舌点评**

这篇论文的核心亮点在于其系统性地将“风格、音色、内容”的解耦问题，转化为一个可分阶段优化的强化学习课程（PPT），技术路径设计精巧且实验证据扎实。不过，其最终效果高度依赖奖励模型的质量，而论文中使用的7B开源奖励模型与闭源前沿模型仍存在代差，这在一定程度上限制了其在最复杂指令上的表现上限，也为未来工作留下了明确的改进方向。

#

🔗 **开源详情**

- 代码：论文中提到将发布全部训练和推理代码。提供在线演示网站：https://flexi-voice.github.io/。但未提供具体代码仓库链接（如GitHub）。
- 模型权重：论文中承诺将发布模型检查点，但未提及具体权重文件或下载地址。
- 数据集：承诺发布FlexiVoice-Instruct数据集，未说明具体获取方式（如Hugging Face）。
- Demo：提供了在线演示网站链接。
- 复现材料：附录A.10详细列出了训练硬件（8×A800）、各阶段训练时长、学习率、轮数、超参数（β, G）等关键复现信息。
- 引用的开源项目：模型核心使用Phi-3.5-mini-instruct，语音分词使用DualCodec，声码器使用Vocos，奖励模型使用Emotion2vec-Large、CAM++和Kimi-Audio-7B-Instruct。

📌 **核心摘要**

1.  要解决什么问题：在零样本文本转语音（TTS）中，当同时使用自然语言指令控制风格（如情绪）和参考语音控制音色时，模型容易受到文本内容或参考语音中内含风格的干扰，无法准确遵循目标指令，即“风格-音色-内容冲突”。
2.  方法核心是什么：提出FlexiVoice系统，以大语言模型为核心。核心创新是“渐进式后训练（PPT）”框架，包含三个递进阶段：1）使用多模态DPO进行初步对齐；2）使用多目标GRPO在冲突数据上强制解耦风格、音色与内容；3）使用基于音频语言模型奖励的GRPO提升对复杂、开放式指令的遵循能力。
3.  与已有方法相比新在哪里：不同于以往简单条件化或单一阶段对齐，PPT通过课程学习策略，显式地、分阶段地解决模态冲突，实现了更鲁棒的解耦。同时，构建了大规模高质量指令-语音数据集FlexiVoice-Instruct。
4.  主要实验结果：在解耦任务上，FlexiVoice在TR-hard（参考语音与指令冲突）任务上的指令准确率（ACC-I）在英语和中文上分别达到78.2%和75.8%，远超基线模型（如VoxInstruct的23.9%和18.7%）。在复杂指令基准InstructTTSEval上，FlexiVoice的英文平均准确率达79.3%，接近闭源系统Gemini-pro的80.3%，并超越所有开源基线。消融实验表明，PPT的渐进式顺序（S1→S2→S3）优于其他顺序或联合训练。
5.  实际意义是什么：为需要高度定制化语音生成的应用（如有声书、游戏配音、虚拟助手）提供了灵活、可控的TTS解决方案，能够仅通过自然语言描述和任意音色参考，生成符合要求的语音。
6.  主要局限性是什么：性能上限受限于开源奖励模型（Kimi-Audio-7B）的能力，其判断准确性与最强闭源模型仍有差距。此外，为遵循风格指令对语音进行的声学改造，不可避免地会对说话人音色相似度造成轻微影响。

---

### 5. [Toward Complex-Valued Neural Networks for Waveform Generation](/audio-paper-digest-blog/posts/2026-05-04-toward-complex-valued-neural-networks-for)

🔥 **8.0/10** | 前25% | #语音合成 | #复数神经网络 | #生成对抗网络 #声码器

👥 **作者与机构**

- 第一作者：Hyung-Seok Oh（高丽大学人工智能系）
- 通讯作者：Seong-Whan Lee（高丽大学人工智能系）
- 作者列表：Hyung-Seok Oh（高丽大学人工智能系）、Deok-Hyeon Cho（高丽大学人工智能系）、Seung-Bin Kim（高丽大学人工智能系）、Seong-Whan Lee（高丽大学人工智能系）

💡 **毒舌点评**

亮点：论文工作非常系统，不仅提出了复数域生成器与判别器的完整GAN框架，还针对性地设计了相位量化层作为归纳偏置，并给出了计算图级别的效率优化（分块矩阵），形成了一个从理论动机到工程实现闭环的扎实工作。短板：复数网络带来的参数量与显存开销（约翻倍）是其难以回避的“阿喀琉斯之踵”，论文虽通过分块矩阵优化了训练时间，但在推理吞吐量和多卡训练支持上仍显不足，这限制了其在大规模工业部署中的即时吸引力。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/hs-oh-prml/ComVo。
- 模型权重：提供预训练模型权重，可通过论文提供的主页链接获取：https://hs-oh-prml.github.io/ComVo/。
- 数据集：使用公开的LibriTTS和MUSDB18-HQ数据集。
- Demo：论文主页提供音频样本演示：https://hs-oh-prml.github.io/ComVo/。
- 复现材料：论文提供了非常详细的训练配置表（表20），包括所有超参数、数据设置、损失权重、硬件信息等。附录中也包含了各基线模型的实现来源（表17）和评估指标的来源（表18）。
- 论文中引用的开源项目：
    *   Vocos：作为基础架构进行改编。
    *   HiFi-GAN, BigVGAN, iSTFTNet：作为主要对比基线。
    *   APNet, APNet2, FreeV：作为幅相预测声码器的对比基线。
    *   Matcha-TTS：用于TTS管线评估的声学模型。
    *   UTMOS, auraloss, PESQ, cargan：用于客观评估的指标工具。

📌 **核心摘要**

1.  解决的问题：现有的基于逆短时傅里叶变换（iSTFT）的声码器（如Vocos）虽然效率高，但普遍使用实值神经网络（RVNN）将复数谱的实部和虚部作为独立通道处理，这限制了模型捕捉实虚部之间内在耦合结构的能力。
2.  方法核心：提出ComVo，一个完全在复数域内运行的GAN声码器。其生成器和判别器（cMRD）均使用原生复数算术层。同时引入了相位量化层，将连续相位离散化为有限等级，作为稳定训练的归纳偏置。此外，提出了分块矩阵计算方案，将复数乘法融合为单次矩阵乘法，以减少冗余操作，提升训练效率。
3.  创新之处：据作者称，这是首个将复数神经网络（CVNN）同时应用于生成器和判别器的iSTFT-based vocoder。与先前实值方法独立处理实虚部或简单拼接通道相比，该方法在复数域内进行端到端的对抗训练，能提供更结构化的反馈。相位量化和分块矩阵计算是两个重要的辅助创新。
4.  主要实验结果：在LibriTTS数据集上，ComVo在多数客观指标上超越了HiFi-GAN、iSTFTNet、BigVGAN和Vocos等强基线，MOS得分（4.07）与基线持平。在MUSDB18-HQ音乐数据集上，ComVo也取得最佳客观分数和竞争力的主观分数。消融实验表明，复数生成器与复数判别器的组合（GCDC）效果最佳；相位量化在Nq=128时带来最佳感知质量提升；分块矩阵方案在保持性能的前提下将训练时间减少了25%。

| 模型 | UTMOS ↑ | MR-STFT ↓ | PESQ ↑ | Periodicity ↓ | V/UV F1 ↑ | MOS ↑ | CMOS ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GT | 3.8712 | - | - | - | - | 4.08 ± 0.04 | 0.14 |
| HiFi-GAN | 3.3453 | 1.0455 | 2.9360 | 0.1554 | 0.9174 | 4.00 ± 0.05 | -0.09 |
| iSTFTNet | 3.3591 | 1.1046 | 2.8136 | 0.1476 | 0.9243 | 3.98 ± 0.05 | -0.04 |
| BigVGAN | 3.5197 | 0.8994 | 3.6122 | 0.1181 | 0.9418 | 4.05 ± 0.05 | -0.05 |
| Vocos | 3.6025 | 0.8856 | 3.6266 | 0.1061 | 0.9522 | 4.05 ± 0.05 | -0.02 |
| ComVo | 3.6901 | 0.8439 | 3.8239 | 0.0903 | 0.9609 | 4.07 ± 0.05 | 0 |

表2：在LibriTTS数据集上的客观与主观评估结果（关键行数据）
5.  实际意义：证明了复数神经网络在音频波形生成任务中相对于实值网络的表示优势，为处理复值信号（如频谱）提供了更自然的建模范式。分块矩阵方案为优化复数运算在现有深度学习框架中的实现效率提供了实用思路。
6.  主要局限性：复数参数存储导致内存占用翻倍，增加了模型大小和显存需求。论文在单卡上实验，多GPU并行训练下的性能和稳定性未充分验证。相位量化层的直通估计器（STE）近似可能在某些任务上引入优化挑战。

---

### 6. [From Natural Alignment to Conditional Controllability in Multimodal Dialogue](/audio-paper-digest-blog/posts/2026-05-04-from-natural-alignment-to-conditional)

🔥 **8.0/10** | 前25% | #语音合成 | #多任务学习 | #多模态模型 #预训练

👥 **作者与机构**

- 第一作者：Zeyu Jin（清华大学计算机科学与技术系）（论文标注共同贡献）
- 通讯作者：Xiaoyu Qin（清华大学计算机科学与技术系）、Jia Jia（清华大学计算机科学与技术系/BNRist）
- 作者列表：
  - Zeyu Jin（清华大学计算机科学与技术系）
  - Songtao Zhou（清华大学计算机科学与技术系）（共同贡献）
  - Haoyu Wang（清华大学计算机科学与技术系）
  - Minghao Tian（Rice University）
  - Kaifeng Yun（清华大学深圳国际研究生院）
  - Zhuo Chen（字节跳动）
  - Xiaoyu Qin（清华大学计算机科学与技术系）
  - Jia Jia（清华大学计算机科学与技术系/BNRist）

💡 **毒舌点评**

论文在数据集构建和任务定义上表现出色，其提出的数据整理管道和“情感三元组”标注范式为可控多模态对话研究提供了坚实基础，但核心模型创新有限，且部分实验局限于验证数据集有效性，未能充分探索更先进的生成架构。

🔗 **开源详情**

- 代码：论文在摘要和结论中明确提到将公开代码和数据整理管道，GitHub仓库链接已在论文中给出（https://github.com/jessyjinzy/MM-Dia）。
- 模型权重：论文未提及将公开其微调后的模型（如Higgs-Audio-V2-SFT）权重。
- 数据集：MM-DIA和MM-DIA-BENCH已承诺开源，但具体获取方式需联系作者或等待发布。
- Demo：论文提到了一个演示页面（https://mmdiaiclr26.github.io/mmdiaiclr26/），展示了不同控制变量下的语音合成样本。
- 复现材料：论文在“Reproducibility Statement”中承诺提供数据集、代码、模型配置、训练过程和评估协议的细节。附录包含了管道实现的部分算法和消融实验，但完整的训练超参数和硬件信息缺失。
- 引用的开源项目：论文中提到了多个依赖的开源工具和模型，包括：Higgs-Audio-V2 (Boson AI)、Dia-1.6B (Nari Labs)、Gemini-2.5系列、Qwen2.5-VL、InsightFace工具包、多个基线模型（HarmoniVox, FLOAT, MultiTalk, Sonic, Wan-2.2, HunyuanVideo）以及UTMOS、WER等评估工具。

📌 **核心摘要**

这篇论文旨在解决可控多模态对话生成中面临的三个核心挑战：高质量原生多模态对话数据稀缺、交互级语义的可扩展标注方法缺失，以及系统性评估基准不足。
其核心方法是构建了一个从电影和电视剧中自动提取、标注对话的“数据整理管道”，并据此创建了大规模多模态对话数据集 MM-DIA（360+小时，54,700段对话）。该数据集首次专注于跨模态的对话表达力，提供了句子级和对话级的细粒度交互标注，包括说话人身份、非语言声音和两种表达力标注范式：“情感三元组”（关系、互动模式、情感基调）和“自由描述”。同时，论文提出了 MM-DIA-BENCH 作为评估跨模态风格一致性的基准。
论文正式定义了多模态对话生成（MDG）任务，并将其应用于三个具体任务：1）风格可控对话语音合成（显式控制），2）视觉条件对话语音合成（隐式控制），3）语音驱动对话视频生成（隐式控制）。
主要实验结果显示：在MM-DIA上微调预训练模型（如Higgs-Audio-V2）后，风格可控对话语音合成任务在可懂度（WER从31.25降至4.45）和指令遵循度上显著提升。然而，在MM-DIA-BENCH上的测试表明，现有模型在维持隐式跨模态风格一致性方面存在明显不足，特别是在音视频对齐和对话级表达力方面。
这项工作的实际意义在于为可控、富有表现力的多模态对话生成研究建立了首个大规模数据集、统一任务框架和评估基准，指明了未来需要加强跨模态语义对齐和长程推理的研究方向。主要局限性是MDG任务仍处于初步定义阶段，且现有基线模型在隐式控制任务上表现不佳，表明这是一个开放且具挑战性的领域。

---

### 7. [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Residual Representations for Expressive End-to-End Speech Synthesis](/audio-paper-digest-blog/posts/2026-05-04-hierarchical-semantic-acoustic-modeling-via-semi)

🔥 **8.0/10** | 前25% | #语音合成 | #自回归模型 | #流匹配 #预训练

👥 **作者与机构**

-   第一作者：Yixuan Zhou（清华大学深圳国际研究生院）
-   通讯作者：Zhiyong Wu（清华大学深圳国际研究生院）
-   作者列表：Yixuan Zhou（清华大学深圳国际研究生院），Guoyang Zeng（ModelBest Inc），Xin Liu（ModelBest Inc），Xiang Li（清华大学深圳国际研究生院），Renjie Yu（清华大学深圳国际研究生院），Ziyang Wang（ModelBest Inc），Runchuan Ye（清华大学深圳国际研究生院），Weiyue Sun（ModelBest Inc），Jiancheng Gui（ModelBest Inc），Kehan Li（清华大学深圳国际研究生院），Zhiyong Wu（清华大学深圳国际研究生院），Zhiyuan Liu（清华大学计算机科学与技术系）

#

💡 **毒舌点评**

亮点：论文提出的“半离散残差表示”框架设计精巧，通过一个可微的量化瓶颈在单一端到端模型中优雅地实现了语义和声学的隐式解耦，有效规避了传统连续模型的误差累积和离散模型的信息损失，堪称“鱼与熊掌兼得”的架构设计典范。短板：模型的高性能（VoxCPM）严重依赖海量内部数据（1百万小时），而公开验证（VoxCPM-Emilia）的性能与SOTA仍有差距，这使得其宣称的“架构优越性”在多大程度上可迁移到受限数据场景存疑，也削弱了其作为普适解决方案的说服力。

### 📌 核心摘要
1.  解决的问题：现有端到端语音合成模型面临一个根本权衡：离散token方法稳定但会丢失声学细节（量化天花板），而连续表示方法保留了丰富声学信息但容易在长序列上因语义和声学任务纠缠而产生误差累积，影响稳定性。
2.  方法核心：提出VoxCPM，一个端到端的层次化语义-声学建模框架。其核心是一个可微的有限标量量化（FSQ）瓶颈，它自然诱导出两个专门化模块：文本-语义语言模型（TSLM） 负责生成稳定的语义韵律骨架，残差声学语言模型（RALM） 负责恢复FSQ量化后丢失的精细声学细节。最终，由层次化表示共同引导一个局部扩散Transformer解码器（LocDiT） 生成高保真语音隐变量。
3.  新意：与依赖外部离散语音token化器的多阶段管道不同，该框架将量化作为正则化机制内置于连续数据流中，实现了在单一端到端训练框架内的功能分离，消除了对外部预训练token化器的依赖，并缓解了连续模型中的任务纠缠。
4.  主要结果：在超过1百万小时的双语数据上训练的0.5B参数VoxCPM，在SEED-TTS-EVAL基准上取得了开源系统中的最优性能，英语WER为1.85%，中文CER为0.93%，说话人相似度SIM分别为72.9%和77.2%。关键消融实验证明，去除FSQ瓶颈（w/o FSQ）会导致在困难测试集上性能急剧恶化（中文CER从18.19%升至24.92%），验证了其核心作用。
5.  实际意义：该工作为构建表达力强、稳定性高的端到端语音合成系统提供了新的架构范式，有望推动更自然、更具情感的语音交互技术发展。
6.  主要局限性：SOTA性能严重依赖大规模内部训练数据，在较小公开数据集上的验证（VoxCPM-Emilia）表现虽具竞争力但非顶尖，表明其对数据规模可能较为敏感。此外，框架的整体复杂度（包含LM、RALM、扩散解码器）对部署资源有一定要求。

### 详细分析

### 01.模型架构
VoxCPM是一个层次化、端到端的自回归语音生成模型，其核心设计是通过内部半离散瓶颈实现语义和声学建模的解耦。

整体架构与数据流：
1.  输入：文本序列T。
2.  历史上下文编码：对于已生成的语音隐变量序列Z_{<i}，通过一个轻量级的局部音频编码器（LocEnc） 压缩为紧凑的声学嵌入E_{<i}。
3.  层次化建模生成当前隐变量：
    -   TSLM：接收文本T和历史声学嵌入E_{<i}，生成连续的语义-韵律表示h_TSLM。
    -   FSQ瓶颈：对h_TSLM进行标量量化，得到稳定的半离散“骨架”表示h_FSQ。这一步强制TSLM专注于编码稳定的、高层级的内容与韵律。
    -   RALM：接收文本部分的TSLM隐藏状态、历史半离散表示H_FSQ_{<i}以及历史声学嵌入E_{<i}，专门恢复量化过程中丢失的精细声学细节（如说话人音色、频谱微结构），生成残差表示h_residual。
    -   融合：将语义骨架h_FSQ与声学细节h_residual相加，得到最终的层次化条件信号h_final。
4.  高保真解码：局部扩散Transformer（LocDiT） 以h_final和前一个隐变量z_{i-1}为条件，通过去噪扩散过程生成当前语音隐变量z_i。这是一个双向Transformer，可对局部patch进行完整建模。
5.  训练目标：整个模型使用流匹配（Flow Matching）损失进行端到端训练，并辅以停止预测损失。梯度通过所有模块（包括FSQ，通过直通估计）反向传播，实现协调优化。

关键设计选择与动机：
-   FSQ作为归纳偏置：与传统将离散token作为预测目标不同，本文将FSQ作为正则化瓶颈，其作用是约束TSLM的隐藏状态空间，迫使模型将稳定语义信息通过瓶颈，而将易变声学信息分配给RALM，从而隐式实现任务分离，解决连续模型中的纠缠问题。
-   残差学习策略：RALM显式建模被FSQ过滤掉的“声学残差”，与TSLM形成分工协作，而非简单的级联或并行，这使模型能更 holistic 地捕捉语音的多层次信息。
-   因果VAE：使用因果VAE将原始波形压缩到低帧率连续隐空间，既保证了信息保真度，又支持流式合成。

![VoxCPM整体架构图](icassp-img://h5KLpGoqzC/0.png)
图1：VoxCPM的整体架构图。模型层次化地生成语音：首先通过LocEnc处理音频隐变量，然后通过TSLM和FSQ生成半离散语音骨架，接着由RALM细化声学细节，最后由LocDiT生成高保真隐输出。

### 02.核心创新点
1.  可微半离散瓶颈实现隐式解耦：利用FSQ在连续数据流中创建一个瓶颈，自然诱导TSLM（语义规划）和RALM（声学渲染）的功能分离，无需显式多阶段训练或外部离散化器，从根本上缓解了连续自回归模型的任务纠缠和误差累积。
2.  端到端统一框架下的残差声学建模：将残差学习策略集成到上述瓶颈架构中，使RALM专注于恢复量化损失的精细声学特征。这实现了“功能性分离”而不造成“架构碎片化”，简化了训练流水线。
3.  无需外部离散语音token化器的端到端训练：整个层次化模型在扩散目标下端到端训练，消除了对预训练离散语音token化器的依赖，避免了其信息损失（量化天花板）和与语言模型之间的语义-声学鸿沟。
4.  大规模训练验证的有效性与可扩展性：在超过100万小时数据上训练0.5B模型达到SOTA，并通过模型缩放实验（0.5B, 1B, 3B）证明了该架构能有效利用增加的参数量提升性能。

### 03.细节详述
-   训练数据：
    -   大规模双语语料库：内部收集，超过100万小时，主要为中英文语音。
    -   Emilia数据集：公开数据集，9.5万小时，用于对比和消融研究。
    -   预处理：所有音频重采样至16kHz单声道，经过声源分离、语音活动检测（VAD）和自动语音识别（ASR）以获得文本-音频对齐。
-   损失函数：
    -   主要损失：条件流匹配损失L_FM（公式5），用于优化LocDiT生成语音隐变量的分布。
    -   辅助损失：停止预测损失L_Stop（公式6），二分类交叉熵，用于训练模型预测序列结束点。
    -   总损失：L = L_FM + λL_Stop。
-   训练策略：
    -   优化器：AdamW。
    -   学习率调度：采用Warmup-Stable-Decay（WSD）策略。稳定阶段学习率1e-4，衰减阶段从1e-4降至5e-6，并伴随batch size加倍。
    -   Batch Size：稳定阶段4096 tokens，衰减阶段8192 tokens。
    -   训练步数：主模型（1M数据）训练500K步；Emilia模型（95K数据）训练200K步；消融实验均训练200K步。
-   关键超参数与模型配置（VoxCPM-0.5B）：
    -   TSLM：24层，隐藏维度1024，FFN维度4096，由MiniCPM-4-0.5B初始化。
    -   RALM：6层，隐藏维度1024，FFN维度4096，随机初始化。
    -   FSQ：维度256，标量量化级别9。
    -   LocDiT：4层，隐藏维度1024，FFN维度4096。
    -   LocEnc：4层，隐藏维度1024，FFN维度4096。
    -   Patch大小：2帧（TSLM和RALM工作在12.5Hz token率）。
    -   总参数量：约5.5亿（LocEnc 59M + TSLM 433M + FSQ 0.5M + RALM 89M + LocDiT 64M + 其他）。
-   训练硬件：
    -   主模型（VoxCPM）：40个NVIDIA H100 GPU。
    -   Emilia模型（VoxCPM-Emilia）：24个NVIDIA H100 GPU。
    -   消融实验：8个NVIDIA H100 GPU。
-   推理细节：
    -   解码：LocDiT使用扩散采样，迭代10次。
    -   Classifier-Free Guidance (CFG)：在训练时以一定概率屏蔽来自TSLM和RALM的引导信号，在推理时使用CFG值（实验得出最佳值为2.0）以提升质量。
    -   流式合成：由于使用因果VAE和局部自回归生成，支持流式合成，理论首包延迟低于100ms。
    -   实时率（RTF）：在单个RTX 4090 GPU上，RTF为0.17。
-   正则化与稳定训练技巧：
    -   WSD学习率调度：衰减阶段对提升零样本说话人相似度至关重要。
    -   FSQ作为结构性正则化：约束TSLM的表示空间，防止其过度关注声学细节。
    -   停止预测损失：辅助训练以正确终止序列生成。

### 04.实验结果
主要对比实验（与SOTA对比）：

表1：在SEED-TTS-EVAL基准上的性能对比
| 模型 | 参数 | 数据/小时 | EN WER↓ | EN SIM↑ | ZH CER↓ | ZH SIM↑ | Hard CER↓ | Hard SIM↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| F5-TTS | 0.3B | 100K | 2.00 | 67.0 | 1.53 | 76.0 | 8.67 | 71.3 |
| MaskGCT | 1B | 100K | 2.62 | 71.7 | 2.27 | 77.4 | - | - |
| CosyVoice2 | 0.5B | 170K | 3.09 | 65.9 | 1.38 | 75.7 | 6.83 | 72.4 |
| SparkTTS | 0.5B | 100K | 3.14 | 57.3 | 1.54 | 66.0 | - | - |
| FireRedTTS-2 | - | 1.4M | 1.95 | 66.5 | 1.14 | 73.6 | - | - |
| Qwen2.5-Omni | 7B | - | 2.72 | 63.2 | 1.70 | 75.2 | 7.97 | 74.7 |
| IndexTTS 2 | 1.5B | 55K | 2.23 | 70.6 | 1.03 | 76.5 | 7.12 | 75.5 |
| HiggsAudio-v2 | 3B | 10M | 2.44 | 67.7 | 1.50 | 74.0 | 55.07 | 65.6 |
| VoxCPM-Emilia | 0.5B | 100K | 2.34 | 68.1 | 1.11 | 74.0 | 12.46 | 69.8 |
| VoxCPM | 0.5B | 1.8M | 1.85 | 72.9 | 0.93 | 77.2 | 8.87 | 73.0 |

关键结论：VoxCPM在所有指标上均优于或持平于最强开源基线（如CosyVoice2， IndexTTS 2），特别是在困难测试集（Hard）上展现出显著的稳健性优势（CER更低， SIM更高）。

![不同模型在SEED-TTS-EVAL基准上的性能对比图](icassp-img://h5KLpGoqzC/5.png)
图6（对应论文Table 1）：展示了VoxCPM与多个开源/闭源系统在SEED-TTS-EVAL基准上的性能对比，突出了VoxCPM在各项指标上的领先地位。

表2：在CV3-EVAL基准上的性能对比（部分）
| 模型 | CV3-EVAL ZH-CER↓ | CV3-EVAL EN-WER↓ | CV3-Hard-ZH CER↓ | CV3-Hard-EN WER↓ | CV3-Hard-EN SIM↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| CosyVoice2 | 4.08 | 6.32 | 12.58 | 11.96 | 66.7 |
| IndexTTS2 | 3.58 | 4.45 | 12.80 | 8.78 | 74.5 |
| VoxCPM | 3.40 | 4.04 | 12.90 | 7.89 | 64.3 |

关键结论：在更具挑战性的表达力和真实场景评测中，VoxCPM同样表现出色，特别是在英语困难集上WER最低（7.89%）。

关键消融实验：

表4：FSQ瓶颈维度与核心架构消融研究（在Emilia数据集上）
| 模型设置 | EN WER↓ | EN SIM↑ | ZH CER↓ | ZH-hard CER↓ |
| :--- | :--- | :--- | :--- | :--- |
| 默认设置（w/ FSQ: d256s9） | 2.98 | 62.6 | 1.77 | 18.19 |
| w/o FSQ: d1024s∞ | 3.67 | 62.1 | 2.30 | 24.92 |
| w/o RALM: TSLM (24层) →LocDiT | 4.34 | 61.8 | 3.05 | 25.00 |
| w/o E<i in RALM | 4.91 | 60.9 | 4.94 | 27.17 |
| w/o h_residual in condition | 3.86 | 58.3 | 3.05 | 23.65 |

关键结论：
1.  FSQ至关重要：去除FSQ（w/o FSQ）导致在困难测试集上中文CER从18.19%飙升至24.92%，证实了瓶颈对稳定性的关键作用。
2.  残差建模有效：去除RALM（w/o RALM）或不使用其残差输出（w/o h_residual）均导致性能全面下降，证明其声学细化能力。
3.  预训练初始化有益：去除TSLM的预训练初始化（w/o LM init）会导致WER显著升高（5.24% vs 2.98%），表明预训练语言模型知识对稳定性很重要。

表征分析（探测实验）：

表12：内部隐藏状态的逐层探测结果
| 隐藏状态位置 | 语音识别PER↓ | 语音识别WER↓ | 说话人验证EER↓ |
| :--- | :--- | :--- | :--- |
| LocEnc输出 | 59.12 | 65.79 | 15.38 |
| TSLM最后隐藏状态（FSQ前） | 45.60 | 60.43 | 18.70 |
| FSQ输出 | 50.90 | 62.37 | 19.25 |
| RALM最后隐藏状态 | 53.49 | 64.85 | 13.24 |

关键结论：量化实证了“分工”假说：FSQ输出具有最高的说话人验证EER（19.25%），表明它过滤了说话人信息；RALM输出具有最低的EER（13.24%），表明它成功恢复了说话人信息。TSLM则保持了最好的语言内容保真度（最低PER/WER）。

模型缩放性实验：
在Emilia数据集上训练0.5B, 1B, 3B模型，结果显示增大模型规模能稳定提升性能（如3B模型EN-WER降至2.60%），证明架构的可扩展性。

### 05.评分理由
-   学术质量：7.0/7：论文具有清晰的创新思路（半离散瓶颈解耦），技术实现正确，实验设计全面且深入，包括大规模对比、详尽消融和多层次分析，所有主张均有强证据支持。
-   选题价值：1.5/2：聚焦语音合成的核心挑战（表达力与稳定性权衡），提出了有影响力的解决方案，与领域高度相关。但语音合成是一个成熟且竞争激烈的领域，其突破性相比一些全新任务稍显有限。
-   开源与复现加成：0.5/1：提供了代码链接，承诺发布模型权重，并给出了非常详细的训练配置和超参数。最大的不足是核心高性能模型所用的1百万小时训练数据为内部数据未公开，限制了完全复现SOTA性能。

### 开源详情
-   代码：论文提供了推理代码链接 `codes.zip`，并承诺未来发布完整代码。
-   模型权重：论文提及将发布代码和模型权重，但具体平台和链接未在文中说明。
-   数据集：核心训练数据（1百万小时）为内部数据集，未公开。对比实验使用的Emilia数据集是公开的。
-   Demo：提供了在线演示页面链接：`https://voxcpm.github.io/VoxCPM-demopage/`。
-   复现材料：论文提供了极其详细的模型架构（表5）、训练配置（表6）、超参数设置、评估细节（附录H）和复现声明（附录B）。
-   论文中引用的开源项目：依赖了MiniCPM-4作为TSLM的初始化基础；AudioVAE架构灵感来自DAC。

🔗 **开源详情**

-   代码：论文提供了推理代码链接 `codes.zip`，并承诺未来发布完整代码。
-   模型权重：论文提及将发布代码和模型权重，但具体平台和链接未在文中说明。
-   数据集：核心训练数据（1百万小时）为内部数据集，未公开。对比实验使用的Emilia数据集是公开的。
-   Demo：提供了在线演示页面链接：`https://voxcpm.github.io/VoxCPM-demopage/`。
-   复现材料：论文提供了极其详细的模型架构（表5）、训练配置（表6）、超参数设置、评估细节（附录H）和复现声明（附录B）。
-   论文中引用的开源项目：依赖了MiniCPM-4作为TSLM的初始化基础；AudioVAE架构灵感来自DAC。

---

### 8. [Gogo: Group-wise granularity-ordered codec for stable and efficient speech generation](/audio-paper-digest-blog/posts/2026-05-04-gogo-group-wise-granularity-ordered-codec-for)

✅ **7.5/10** | 前25% | #语音合成 | #语音编解码 | #流匹配 #自回归模型

👥 **作者与机构**

- 第一作者：Weidong Chen (The Chinese University of Hong Kong)
- 通讯作者：Xixin Wu (The Chinese University of Hong Kong)
- 作者列表：Weidong Chen（The Chinese University of Hong Kong）、Helen M. Meng（The Chinese University of Hong Kong）、Xixin Wu（The Chinese University of Hong Kong）

💡 **毒舌点评**

这篇工作最大的亮点在于将“组”作为语音量化的基本单元，并系统性地设计了粗细有序的token序列，这确实比传统逐帧量化更适合后续的语言模型建模，逻辑自洽且实验支撑有力。然而，其核心的token分配器虽然有效，但训练方法（GRPO）的引入略显“重”，对于一个动态分配离散资源的简单策略问题，是否有更轻量优雅的解法值得商榷，且论文最终未能开源代码，让这套精心设计的系统停留在了“可望”的层面。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及是否公开。
- 数据集：使用了公开的Emilia（英文子集）、LibriTTS、Seed-TTS测试集。
- Demo：提供了在线演示链接：https://happycolor.github.io/gogo。
- 复现材料：论文在正文和附录中详细给出了模型架构（表C）、训练超参数（表D）、硬件（8x H100）、评估指标定义等，复现信息较为充分。
- 论文中引用的开源项目：Vocos声码器、LLaMA（作为初始化基座）、ConVNeXt V2（用于特征处理）。

📌 **核心摘要**

本文旨在解决当前语音语言模型中，语音编解码器无法同时有效支持高层自回归建模和保留低层声学细节的矛盾，以及语音信号信息分布不均匀导致的编码效率低下问题。核心方法是提出Gogo编解码器，它将语音分组后，为每组生成一组从粗到细有序的离散token：粗token编码高层语义和韵律，细token逐步恢复声学细节。基于此，构建了两阶段的GogoSpeech模型：第一阶段仅以极低token率（~14Hz）生成粗token“骨架”；第二阶段条件于骨架，逐步补充细token。此外，利用GRPO强化学习训练了一个token分配器，根据每组的复杂度动态分配第二阶段所需生成的细token数量，以提升效率。实验表明，在47Hz的token率下，Gogo的重建性能（UT-MOS: 4.19, DNS-MOS: 3.99, SIM: 0.91）优于多数SOTA编解码器。GogoSpeech在零样本TTS任务上（SIM: 0.667, WER: 2.394）取得了领先结果，并且分配器能将平均token率从47Hz降至36Hz，同时保持性能。主要局限性在于占位符可能引入伪影，token率仍高于部分低比特率编解码器，以及模型可扩展性未验证。

---

### 9. [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-continuous-audio-language-models)

✅ **7.0/10** | 前25% | #语音合成 | #自回归模型 | #音乐生成 #一致性模型

👥 **作者与机构**

- 第一作者：Simon Rouard（Kyutai; UMR STMS, IRCAM-CNRS, Sorbonne Univ.）
- 通讯作者：未明确说明（Alexandre Défossez 提供了邮箱，且为资深作者，通常为通讯作者）
- 作者列表：
    - Simon Rouard（Kyutai; UMR STMS, IRCAM-CNRS, Sorbonne Univ.）
    - Manu Orsini（Kyutai）
    - Axel Roebel（UMR STMS, IRCAM-CNRS, Sorbonne Univ.）
    - Neil Zeghidour（Kyutai）
    - Alexandre Défossez（Kyutai）

#

💡 **毒舌点评**

论文核心亮点在于其精巧的“双头”架构设计——用带噪声的长上下文Transformer保证生成稳定性，用干净的短上下文Transformer保留细节，并用高效的一致性模型头取代传统的RQ-Transformer，在多个任务上实现了质量与速度的双赢。然而，其宣称的“超越SOTA”在音乐生成等任务上部分依赖于使用自家训练的数据集重新训练的基线模型，且最关键的音乐数据集未开源，这使得最令人兴奋的实验结果难以被独立社区完全验证和比较，削弱了其作为通用方法的说服力。

#

🔗 **开源详情**

- 代码：论文提及了Pocket TTS的代码仓库：`github.com/kyutai-labs/pocket-tts`。对于CALM主框架的开源情况未在主文明确说明。
- 模型权重：Pocket TTS模型权重计划通过上述GitHub仓库开源。
- 数据集：论文使用的主要音乐数据集（LAION-Disco-12M子集）未公开。语音和TTS数据集部分来源公开，但完整混合数据集的获取方式未详细说明。
- Demo：提供了示例页面：`iclr-continuous-audio-language-models.github.io`。
- 复现材料：提供了详细的超参数设置（表14, 15）、损失函数公式、架构描述和技术报告（`kyutai.org/pocket-tts-technical-report`）。
- 论文中引用的开源项目：依赖的开源项目包括：Mimi (Défossez et al., 2024b), Helium-1 (Kyutai, 2025), SentencePiece, Whisper, WavLM, Mistral 7B, CLAP, fairseq等。

📌 **核心摘要**

1.  问题：当前主流的音频语言模型（ALM）依赖离散化的音频token（如RVQ），这造成了音频质量与计算成本之间的权衡。提高质量需要增加token数量（更高码率），从而导致模型计算负担加重，难以在边缘设备上实现实时高质量生成。
2.  方法：提出连续音频语言模型（CALM），在VAE的连续隐空间中直接建模，避免了量化损失。其架构由三部分组成：1）一个因果Transformer骨干网络，处理长程依赖，并在训练时对输入施加噪声以抑制推理时的误差累积；2）一个轻量级短上下文Transformer，提供局部、干净的细节信息；3）一个基于一致性模型的小型MLP头部，用于快速生成下一个连续帧。
3.  创新：相比先前基于扩散的MAR方法，CALM引入了噪声注入的长上下文与干净短上下文结合的双Transformer设计，并用一致性模型（Consistency Model）取代了扩散头，实现了1步快速采样。此外，还提出了高斯温度采样、潜在分类器自由引导（Latent CFG）和潜在蒸馏等技巧，进一步提升质量和效率。
4.  结果：在语音续写、文本转语音（TTS）和音乐续写三个任务上进行了评估。实验表明，CALM在多个指标上优于强基线。例如，在语音续写中，1步一致性模型在声学质量MOS（3.45）和意义性Elo（2023）上优于8-RVQ的RQ-Transformer基线（2.75，1870），且采样头速度快12.3倍。在音乐续写中，1步一致性模型FAD（0.83）优于32-RVQ基线（1.06），整体速度快2.2倍。最终，通过蒸馏得到的100M参数Pocket TTS模型可在笔记本CPU上实时运行。
5.  意义：为高质量、高效率的音频生成提供了新的范式，摆脱了对离散token的依赖。特别是Pocket TTS证明了在资源受限设备上实现高性能TTS的可行性，具有广泛的应用前景。
6.  局限：论文中的部分最先进对比（如TTS任务中的F5-TTS, DiTAR）并非在同一数据集上复现的结果；音乐生成所用的核心数据集未公开；论文主要关注生成质量与效率，对于模型的可控性、编辑能力等探讨较少。

#

---

### 10. [MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control](/audio-paper-digest-blog/posts/2026-05-04-mambavoicecloning-efficient-and-expressive-text)

✅ **6.5/10** | 前50% | #语音合成 | #状态空间模型 | #流式处理 #跨语言

👥 **作者与机构**

- 第一作者：Sahil Kumar (PhD Program in Mathematics, Yeshiva University, New York, NY 10033, USA)
- 通讯作者：Youshan Zhang* (School of Artificial Intelligence, Chuzhou University, Anhui, 239000, China)
- 作者列表：Sahil Kumar（叶史瓦大学数学博士项目）、Namrataben Patel（叶史瓦大学数学博士项目）、Honggang Wang（叶史瓦大学计算机科学与工程系）、Youshan Zhang（滁州学院人工智能学院）

💡 **毒舌点评**

亮点在于其设计的彻底性：为了证明SSM可以完全取代注意力，论文把TTS条件路径里的注意力模块剥得干干净净，只剩下一个训练时用的对齐器，这种“手术式”的架构验证值得肯定。短板则是性能提升实在像“技术微调”多过“范式突破”，在严格控制的条件下，MOS的些许涨跌更像是统计噪声的边缘胜利，让人怀疑其实际部署中的感知差异。

🔗 **开源详情**

-   代码：论文明确提供了代码仓库链接：https://github.com/sahilkumar15/MVC。
-   模型权重：论文中未提及是否公开预训练模型权重。
-   数据集：使用的是公开数据集（LJSpeech, LibriTTS, VCTK, CSS10），并描述了详细的预处理流程。
-   Demo：论文中未提及在线演示。
-   复现材料：提供了极其详细的复现材料，包括：完整的训练算法（算法1）、统一的优化器与学习率调度（附录C.2）、所有基线模型（StyleTTS2, VITS, JETS, Hybrid-Mamba）的匹配配置细节（附录C.4）、以及消融和超参数敏感性实验的设置。
-   引用的开源项目：主要依赖了以下开源工具/模型：StyleTTS2（解码器/声码器）、phonemizer（文本处理）、HiFi-GAN/iSTFTNet（声码器）、ESPnet（WER评估模型）。

📌 **核心摘要**

本文研究了一个问题：基于扩散的TTS模型，能否在推理时将文本、节奏和韵律的整个条件路径完全替换为状态空间模型（SSM），从而移除所有注意力机制？为此，作者提出了MambaVoiceCloning（MVC）模型。该模型核心包含三个Mamba组件：一个门控双向Mamba文本编码器、一个由训练时临时对齐器监督的临时双向Mamba、以及一个带有AdaLN调制的表达性Mamba。论文在LJSpeech和LibriTTS上训练，并在VCTK、CSS10和长段落文本上进行评估。实验结果表明，与基线StyleTTS2、VITS以及容量匹配的Mamba混合架构相比，MVC在MOS/CMOS、F0 RMSE、MCD和WER上取得了“适度但统计可靠”的提升，同时将编码器参数减少至21M，吞吐量提升1.6倍。然而，扩散解码器仍然是主要的延迟来源。该工作的实际意义在于验证了全SSM条件路径在提升编码器效率、内存占用和流式部署方面的潜力。其主要局限性在于性能提升幅度较小，且模型仅在英文数据集上训练，缺乏对细粒度情感控制的建模。

---

