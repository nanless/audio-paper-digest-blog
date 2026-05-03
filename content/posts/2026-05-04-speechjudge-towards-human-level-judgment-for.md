---
title: "SpeechJudge: Towards Human-Level Judgment for Speech Naturalness"
date: 2026-05-04
draft: false
tags: [语音合成, 语音大模型, 强化学习, 基准测试, 数据集]
categories: [iclr-2026]
description: "语音合成 | 6.5/10"
hiddenInHomeList: true
---

# 📄 SpeechJudge: Towards Human-Level Judgment for Speech Naturalness

#语音合成 #语音大模型 #强化学习 #基准测试 #数据集

✅ **6.5/10** | 前50% | #语音合成 | #强化学习 | #语音大模型 #基准测试

学术质量 6.5/7 | 选题价值 1.5/2 | 复现加成 0.8 | 置信度 高


### 👥 作者与机构

- 第一作者：Xueyao Zhang（The Chinese University of Hong Kong, Shenzhen）
- 通讯作者：Zhizheng Wu（The Chinese University of Hong Kong, Shenzhen / Shenzhen Loop Area Institute / City University of Macau / Amphion Technology Co., Ltd）
- 作者列表：Xueyao Zhang（The Chinese University of Hong Kong, Shenzhen）、Chaoren Wang（The Chinese University of Hong Kong, Shenzhen）、Huan Liao（The Chinese University of Hong Kong, Shenzhen）、Ziniu Li（The Chinese University of Hong Kong, Shenzhen）、Yuancheng Wang（The Chinese University of Hong Kong, Shenzhen）、Li Wang（The Chinese University of Hong Kong, Shenzhen）、Dongya Jia（ByteDance Seed）、Yuanzhe Chen（ByteDance Seed）、Xiulin Li（DataBaker Technology）、Zhuo Chen（ByteDance Seed）、Zhizheng Wu（同通讯作者）

### 💡 毒舌点评

这篇论文堪称“RLHF在语音领域的标准工业实践范本”：它没有提出颠覆性的新算法，而是系统性地构建了从数据、评测基准到奖励模型的全套基础设施，解决了“无米之炊”的问题。其最大的亮点在于开源的99K人类偏好数据集和严格设计的评测集，这对社区的价值远超其模型本身；短板则在于，其核心的生成奖励模型（GRM）在理论上缺乏显著的新颖性，更像是将LLM领域成熟的SFT+RL流水线成功移植到了一个新场景。

### 🔗 开源详情

- 代码：提供代码仓库链接 `https://github.com/AmphionTeam/SpeechJudge`。
- 模型权重：论文中未明确提及是否公开SpeechJudge-GRM的模型权重，但基于其开源声明和提供了训练细节，推测权重将随代码库一并发布。
- 数据集：承诺公开SpeechJudge-Data语料库，可通过上述GitHub仓库获取。
- Demo：提供在线音频样本演示 `https://speechjudge.github.io/`。
- 复现材料：提供了详细的训练设置（学习率、批次大小、优化器等）、数据构造流程（附录B）、标注指南（附录C）和硬件要求（未说明具体型号，但描述了设置），并支持使用ms-swift等开源工具进行训练。
- 论文中引用的开源项目：CosyVoice2、F5-TTS、MaskGCT（TTS模型）；Whisper、Paraformer（ASR用于WER计算）；WavLM（说话人相似度计算）；AASIST、w2v-bert-2.0（深伪检测）；Qwen2.5-Omni-7B（基座模型）；ms-swift（RL训练工具）。

### 📌 核心摘要

这篇论文旨在解决语音合成领域因缺乏大规模人类偏好数据而导致的模型与人类感知不对齐问题。其核心方法是提出“SpeechJudge”套件，包含三个部分：1）SpeechJudge-Data，一个包含99K对语音对的大规模人类反馈语料库，涵盖多模型、多风格、多语言合成场景；2）SpeechJudge-Eval，一个专门用于评估语音自然度判断能力的基准测试集；3）SpeechJudge-GRM，一个基于Qwen2.5-Omni-7B微调的生成奖励模型。与已有方法相比，新在：1）首次构建了专注于整体自然度的、大规模、多维度的成对偏好数据集；2）建立了一个标准化的、高难度的自然度判断评测基准；3）提出了结合思维链监督微调和基于人类偏好的强化学习的两阶段训练方法来构建生成奖励模型，相比经典的Bradley-Terry奖励模型（BTRM）能产生可解释的推理过程并支持推理时缩放。主要实验结果如表3所示，在SpeechJudge-Eval上，SpeechJudge-GRM（SFT+RL）达到77.2%的准确率，经过推理时10次采样投票后可达79.4%，显著优于BTRM（72.7%）和当时最强的闭源模型Gemini-2.5-Flash（69.1%）。论文还证明了该奖励模型可用于高质量样本选择（图5）和TTS模型的后训练对齐（图6）。该工作的实际意义在于为语音合成的人类对齐研究提供了关键的资源（数据、基准）和有效的工具（奖励模型），推动了语音质量评估的标准化。主要局限包括：数据集主要反映中文和中英双语听众的偏好；模型在处理极端表达性语音（如极高音高情感语音）和细微权衡（如干净但机械 vs 略带噪声但生动）时仍有提升空间；其思维链能力部分继承了教师模型的偏见。

### 🏗️ 模型架构

本论文的核心模型SpeechJudge-GRM是一个基于Qwen2.5-Omni-7B（Thinker）的生成式奖励模型。其架构与训练流程如下图所示：

![SpeechJudge-GRM训练流程图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/I9ED9VWZq6-3.png)

图1：SpeechJudge-GRM的两阶段训练流程。第一阶段（SFT），使用教师模型生成思维链数据进行监督微调；第二阶段（RL），将人类偏好作为可验证奖励，使用GRPO算法进行强化学习训练。

1.  输入：模型接收一个包含目标文本`t`和两个语音样本`a1`, `a2`的提示。具体使用思维链（CoT）提示（见论文Table 1），要求模型对两个语音的自然度进行详细分析（考虑韵律、节奏、清晰度等），并给出评分，最后输出偏好判断。
2.  第一阶段：监督微调（SFT）：
    *   目的：作为“冷启动”，提升基础模型（Qwen2.5-Omni-7B）的指令遵循、推理以及语音自然度理解能力。
    *   数据构造：利用强大的教师模型Gemini-2.5-Flash对SpeechJudge-Data（训练集）中的每个样本生成CoT输出。对于Gemini-2.5-Flash判断结果与人类标注一致的样本（约25K对），保留其CoT输出作为SFT训练数据。
    *   训练：在保留的SFT数据上，使用LoRA对Qwen2.5-Omni-7B进行微调，训练目标为预测教师模型的CoT输出。
3.  第二阶段：强化学习（RL）：
    *   目的：在更具挑战性的案例（即Gemini-2.5-Flash判断错误的样本，约17K对）上，直接利用人类偏好作为奖励信号来优化模型。
    *   方法：采用GRPO算法。对于每个训练样本（提示），策略模型（SFT后的GRM）生成多个回复（rollouts）。将每个回复中解析出的偏好判断与人类标注`yH`进行比较，设计奖励函数：判断一致则奖励为+1，否则为-1。该奖励被视为“可验证奖励”，用于计算GRPO的损失，从而优化模型，使其自主学习更优的推理路径。
4.  输出：模型生成包含推理过程和最终偏好的自然语言回复。通过解析最终判断（“Output A: X, Output B: X”）来确定哪个语音更自然。

关键设计选择：
*   两阶段训练：直接对基础模型进行RL训练效果不佳（因其指令遵循能力弱），因此需要先通过SFT进行能力激活。
*   使用CoT：不仅提升判断准确性，还提供了可解释的推理过程，并支持通过多数投票进行推理时缩放。
*   基于人类偏好的RL：将主观的人类偏好转化为二元的可验证奖励，避免了训练一个单独的判别式奖励模型，使模型直接优化对人类偏好的对齐。

### 💡 核心创新点

1.  构建大规模、多维度语音自然度偏好数据集（SpeechJudge-Data）：
    *   局限：此前语音领域的人类反馈数据集要么规模小，要么仅关注特定属性（如声学质量、可懂度），缺乏以整体自然度为中心的大规模、成对偏好数据。
    *   创新：构建了包含99K对语音的语料库，使用了6种先进的零样本TTS模型生成语音，涵盖常规/表达性风格、中/英/混合语言，标注了可懂度和自然度的偏好。
    *   收益：为语音对齐研究提供了关键的、高质量的燃料，填补了领域空白。

2.  建立标准化的语音自然度判断评测基准（SpeechJudge-Eval）：
    *   局限：语音自然度的评估缺乏统一、高难度的自动化评测标准，不同研究使用不同的主观测试设置，客观指标（如MOS预测器）与人类偏好的相关性未经严格验证。
    *   创新：从SpeechJudge-Data中精选了1000个高一致性（全同意）样本构成评测集，系统性地评测了现有客观指标、MOS预测器、深伪检测器和AudioLLM。
    *   收益：提供了客观、可重复的评测框架，揭示了当前最强模型（如Gemini-2.5-Flash）在自然度判断上的不足（<70%准确率），明确了改进空间。

3.  提出基于思维链和强化学习的生成奖励模型（SpeechJudge-GRM）：
    *   局限：经典的Bradley-Terry奖励模型（BTRM）是判别式的，输出一个分数，缺乏可解释性，且难以通过推理时计算提升性能。
    *   创新：将奖励建模为自然语言生成任务，训练GRM输出CoT推理和判断。通过SFT+RL两阶段训练，并利用GRPO算法直接在人类偏好标签上优化。
    *   收益：GRM（77.2%）显著优于BTRM（72.7%），支持推理时投票（@10达到79.4%），并能提供判断理由，更鲁棒且可解释。

4.  验证奖励模型在样本选择和模型对齐中的有效性：
    *   创新：不仅训练了奖励模型，还系统性地展示了它在两个下游任务中的价值：作为高自然度样本选择器（图5）和作为TTS模型后训练的奖励函数（图6）。
    *   收益：证明了SpeechJudge-GRM的实用价值，而不仅仅是一个评测模型，为语音生成模型的RLHF对齐提供了具体方案。

### 🔬 细节详述

*   训练数据：
    *   数据集：SpeechJudge-Data（raw），规模99K对。
    *   来源：使用ARS、CosyVoice2、F5-TTS、MaskGCT等6种TTS模型，参考语音来自Emilia-Large、ParaSpeechCaps、KeSpeech等7种语料库。目标文本由DeepSeek-V3辅助生成或修正。
    *   预处理：过滤出偏好数据（去掉Tie），再进一步过滤WER差距<12%的样本得到高自然度子集（44K对），最后采样得到训练集（42K对）、验证集（1K）和评测集（1K）。
*   损失函数：
    *   SFT阶段：标准语言模型的交叉熵损失，但只在教师输出的CoT段计算损失，不对提示部分计算。
    *   RL阶段：GRPO损失函数。对于每个提示的每个回复，根据其判断与人类标签的匹配度分配奖励（+1/-1），然后计算策略梯度的损失。
*   训练策略：
    *   SFT：使用LoRA（rank=128）微调，优化器AdamW，学习率5e-5，最大序列长度4000 tokens。在SpeechJudge-Data (dev)上选择最佳检查点。
    *   RL：基于SFT模型继续使用LoRA（rank=64）训练。采用DAPO（GRPO增强版），每个提示生成8个回复，批大小32，学习率5e-6。同样在dev集上选择最佳模型。
*   关键超参数：基座模型为Qwen2.5-Omni-7B。LoRA秩（SFT:128， RL:64）。RL阶段每次迭代每个提示的rollout数为8。
*   训练硬件：未在正文中明确说明。
*   推理细节：生成时使用解码策略。论文重点展示了推理时缩放：对同一提示生成10次输出，通过多数投票确定最终判断，可提升约2%的准确率（表3）。

### 📊 实验结果

论文在SpeechJudge-Eval基准上进行了广泛实验，结果如下表所示：

| 模型类别 | 模型名称 | 常规语音准确率 | 表达性语音准确率 | 总准确率 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 客观指标 | WER | 59.3 | 57.0 | 57.9 | |
| | SIM | 47.5 | 42.5 | 44.5 | |
| | FAD | 50.3 | 47.5 | 48.6 | |
| MOS预测器 | DNSMOS | 61.0 | 55.8 | 57.9 | |
| | UTMOS | 54.0 | 53.5 | 53.7 | |
| AudioLLM | Qwen2.5-Omni-7B | 62.0 | 59.7 | 60.6 | |
| | Kimi-Audio-7B | 65.5 | 68.0 | 67.0 | |
| | Gemini-2.5-Flash | 73.5 | 66.2 | 69.1 | 当前最强基线 |
| | GPT-4o Audio | 71.5 | 64.7 | 67.4 | |
| 奖励模型 | SpeechJudge-BTRM | 77.5 | 69.5 | 72.7 | 基线奖励模型 |
| | SpeechJudge-GRM (SFT+RL) | 79.0 | 76.0 | 77.2 | 本文提出 |
| | SpeechJudge-GRM (SFT+RL) w/ Voting@10 | 80.5 | 78.7 | 79.4 | 最高性能 |

表1：SpeechJudge-Eval基准上的性能对比。 本文的SpeechJudge-GRM显著优于所有基线，包括BTRM和最强的闭源AudioLLM。

关键消融实验结果（来自表3）：
*   仅SFT：75.3% -> 加入RL后：77.2%，说明RL阶段有效。
*   单次推理：77.2% -> 投票@10：79.4%，展示了推理时缩放的价值。

下游应用实验结果：
*   样本选择（图5）：在人类盲测中，使用SpeechJudge-GRM选择的“最佳1/100”语音样本，相对于随机样本，在自然度比较中有43.0%的胜率，显著优于BTRM的39.5%，证明了GRM作为样本选择器的有效性。
*   TTS后训练（图6）：在Qwen2.5-0.5B-TTS模型上，使用SpeechJudge-GRM进行在线DPO对齐后，获得了最高的主观自然度CMOS分数（0.25±0.09），优于使用INTP数据（0.18±0.07）和离线GRM标注（0.21±0.12）的方法，证明了GRM作为奖励函数的实用性。

不同语言和风格的细分结果：论文在附录G.1中给出了详细分析（表8，表9，表10）。一个显著发现是，所有模型在涉及中文的设置上（如zh2zh, zh2mixed）普遍比纯英文设置（en2en）表现更好，这与中文子集中人类标注者之间更高的一致性相关。表达性语音比常规语音更难判断。

### ⚖️ 评分理由

- 学术质量：6.5/7。创新性属于中等偏上，将成熟的RLHF方法成功系统性地应用于语音自然度判断这一重要新场景，工程实现扎实。技术正确，实验设计全面（覆盖多模型、多指标、多语言、下游应用），证据充分可信。主要扣分点在于核心算法创新（SFT+RL）并非首创，更偏向应用创新。
- 选题价值：1.5/2。选题精准，直击语音合成领域人类对齐的基础性难题（缺乏大规模自然度偏好数据与奖励模型）。工作具有很高的实用价值和行业影响力，能直接服务语音合成研究者和开发者。
- 开源与复现加成：0.8/1。论文承诺并提供了极其全面的开源资源（数据集、评测集、模型、代码），并给出了详细的复现指南，这是巨大的贡献。小部分训练细节（如RL超参搜索过程）未完全公开，但已足够指导复现。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
