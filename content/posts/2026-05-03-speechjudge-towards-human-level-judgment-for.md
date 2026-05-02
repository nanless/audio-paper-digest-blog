---
title: "SpeechJudge: Towards Human-Level Judgment for Speech Naturalness"
date: 2026-05-03
draft: false
tags: [语音合成, 强化学习, 基准测试, 多语言]
categories: [iclr-2026]
description: "语音合成 | 8.5/10"
hiddenInHomeList: true
---

# 📄 SpeechJudge: Towards Human-Level Judgment for Speech Naturalness

#语音合成 #强化学习 #基准测试 #多语言

🔥 **8.5/10** | 前25% | #语音合成 | #强化学习 | #基准测试 #多语言

学术质量 6.5/7 | 选题价值 1.5/2 | 复现加成 0.8 | 置信度 高


### 👥 作者与机构

- 第一作者：Xueyao Zhang（香港中文大学（深圳））
- 通讯作者：Zhizheng Wu（香港中文大学（深圳）、澳门城市大学、深圳环区研究院、Amphion Technology Co., Ltd）
- 作者列表：Xueyao Zhang（香港中文大学（深圳））、Chaoren Wang（香港中文大学（深圳））、Huan Liao（香港中文大学（深圳））、Ziniu Li（香港中文大学（深圳））、Yuancheng Wang（香港中文大学（深圳））、Li Wang（香港中文大学（深圳））、Dongya Jia（ByteDance Seed）、Yuanzhe Chen（ByteDance Seed）、Xiulin Li（DataBaker Technology）、Zhuo Chen（ByteDance Seed）、Zhizheng Wu（香港中文大学（深圳）、澳门城市大学、深圳环区研究院、Amphion Technology Co., Ltd）

### 💡 毒舌点评

这篇论文最大亮点是构建了一个系统且规模庞大的语音自然度偏好对齐“全家桶”（数据集+基准+奖励模型），实验扎实，结论清晰，直接推动了语音生成模型从“能用”到“对齐人类感知”的关键一步。短板在于其核心数据集SpeechJudge-Data在语言和口音上存在偏科（主要反映中国双语人群偏好），且最终奖励模型的准确率（~79%）虽优于基线，但仍表明自动判断语音自然度是一个远未解决的难题。

### 🔗 开源详情

- 代码：提供代码仓库链接：https://github.com/AmphionTeam/SpeechJudge
- 模型权重：论文承诺将发布训练好的SpeechJudge-GRM模型检查点。
- 数据集：论文承诺将发布SpeechJudge-Data（包括原始数据及各个子集）、SpeechJudge-Eval基准。
- Demo：提供在线演示网站：https://speechjudge.github.io/，可试听音频样本。
- 复现材料：论文提供了详细的附录，说明了数据构建细节、标注指南、训练细节、超参数设置等。
- 引用的开源项目：论文依赖或对比的开源工具/模型包括：CosyVoice2, F5-TTS, MaskGCT, Qwen2.5-Omni-7B, LoRA, ms-swift (用于RL训练), Paraformer-zh (ASR), Whisper-large-v3 (ASR), WavLM (说话人嵌入), VGGish (FAD), UTMOS, DNSMOS, audiobox-aesthetics, AASIST, ADV等。

### 📌 核心摘要

1.  问题：将语音合成模型与人类感知对齐是一个关键挑战，尤其是在语音自然度这一最基础的主观指标上，缺乏大规模的人类偏好数据集和相应的奖励模型。
2.  方法：提出了SpeechJudge，包含三部分：(1) SpeechJudge-Data：一个99K对语音的人类偏好语料库，由6个先进零样本TTS模型生成，涵盖多语言和风格，标注了可懂度和自然度偏好。(2) SpeechJudge-Eval：一个基于高一致性标注构建的、用于评估语音自然度判断能力的基准。(3) SpeechJudge-GRM：基于Qwen2.5-Omni-7B的生成式奖励模型，通过两阶段训练（使用链式思考数据的SFT和基于人类偏好的GRPO强化学习）构建。
3.  创新：(1) 首次构建了专注于语音自然度的大规模人类偏好数据集。(2) 创建了专门的语音自然度判断基准，揭示了现有模型的不足。(3) 提出了采用两阶段训练（SFT+RL）的生成式奖励模型SpeechJudge-GRM，支持可解释的推理和推理时扩展。
4.  结果：
    *   基准测试显示，最强闭源模型Gemini-2.5-Flash在SpeechJudge-Eval上与人类判断的一致性不足70%。
    *   SpeechJudge-GRM在相同基准上达到77.2%的准确率，通过推理时投票（@10）提升至79.4%，显著优于经典的Bradley-Terry奖励模型（72.7%）。
    *   将其作为奖励函数，能有效改进TTS模型的后训练，提升自然度。

| 模型 | Regular | Expressive | Total |
| :--- | :--- | :--- | :--- |
| AudioLLMs (Closed-source) | | | |
| Gemini-2.5-Flash | 73.5 | 66.2 | 69.1 |
| Reward Models | | | |
| SpeechJudge-BTRM | 77.5 | 69.5 | 72.7 |
| SpeechJudge-GRM (SFT) | 77.8 | 73.7 | 75.3 |
| SpeechJudge-GRM (SFT+RL) | 79.0 | 76.0 | 77.2 |
| SpeechJudge-GRM (SFT+RL) w/ Voting@10 | 80.5 | 78.7 | 79.4 |
5.  意义：提供了完整的资源套件（数据、基准、模型），推动了语音生成模型的对齐研究，其奖励模型可作为改进生成质量的有效工具。
6.  局限：数据集语言覆盖有限（中英为主），标注人群偏中国，可能影响模型泛化；奖励模型在区分细微风格差异（如清晰但机械 vs. 轻微噪声但生动）时仍有不足。

### 🏗️ 模型架构

![SpeechJudge-GRM架构图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/I9ED9VWZq6-3.png)

图4：SpeechJudge-GRM的两阶段训练流程。

论文的核心模型是SpeechJudge-GRM (Generative Reward Model)，其整体架构和训练流程如上图所示。这是一个基于大型语言模型（LLM）的生成式奖励模型，旨在判断两段语音哪一段更自然。

1.  基座模型：采用 Qwen2.5-Omni-7B (Thinker) 作为基座。这是一个具有音频理解能力的多模态大语言模型（AudioLLM），能够接收文本和语音作为输入。
2.  核心思想：与输出标量奖励值的经典奖励模型（如BTRM）不同，SpeechJudge-GRM 将奖励建模任务转化为一个生成式任务。它需要理解输入的目标文本和两段语音，然后通过生成链式思考（Chain-of-Thought, CoT），最终输出一个关于哪段语音更自然的判断（A更好或B更好）。这种生成过程使得推理过程可解释，并支持通过多次采样投票（Majority Voting）来提升判断的准确性（推理时扩展）。
3.  两阶段训练流程：
    *   SFT阶段（冷启动）：旨在提升基座模型的指令遵循、推理和语音自然度理解能力。流程如下：
        *   使用一个强大的闭源教师模型（Gemini-2.5-Flash）作为“思考链生成器”。
        *   对于SpeechJudge-Data中的每个样本`(t, a1, a2)`，用CoT提示（见表1）让教师模型生成包含判断理由（rationale）和最终偏好的输出。
        *   只选取教师模型判断与人类标注一致的样本（约占60%），构成SFT训练集。训练时，模型被要求基于CoT提示生成与教师模型相同的输出。
    *   RL阶段（强化学习）：旨在让模型在更具挑战性、教师模型判断错误的样本上，直接与人类偏好对齐。
        *   选取教师模型判断与人类不一致的样本（约占40%）作为RL训练集。
        *   采用GRPO算法进行强化学习。对于每个样本，策略模型（即SFT后的GRM）生成多个推理路径（rollouts），每个路径会产生一个判断。人类标注的偏好被视为可验证奖励（Verifiable Reward）：如果模型的判断与人类标签一致，则奖励为+1；不一致则为-1。
        *   模型通过最大化这种基于人类偏好的奖励信号来优化其推理和判断能力。
4.  数据流：输入`(t, a1, a2)` -> 基座模型理解 -> 生成CoT推理 -> 输出最终偏好决策。在训练中，SFT阶段学习模仿教师模型的输出格式和推理过程；RL阶段则利用人类偏好作为奖励信号，通过强化学习微调整个生成过程，使其判断更准确。

### 💡 核心创新点

1.  构建首个大规模语音自然度人类偏好数据集 (SpeechJudge-Data)：
    *   局限：此前研究缺乏专门针对语音自然度（holistic naturalness）的大规模成对偏好数据。现有MOS数据集通常为逐点标注，且模型较旧。
    *   创新：使用6个最新零样本TTS模型生成语音对，涵盖多风格、多语言（中、英、混编），并组织专业标注员进行可懂度逐点评测和自然度成对偏好标注（5级CMOS），形成99K对带标注的语音对。
    *   收益：为语音领域的RLHF/DPO对齐和奖励建模研究提供了关键的基础设施。

2.  建立有挑战性的语音自然度判断基准 (SpeechJudge-Eval)：
    *   局限：缺乏统一、公开的基准来系统评估模型判断语音自然度的能力。不同论文自行组织听测，设置不一。
    *   创新：从SpeechJudge-Data中筛选出人类标注员完全一致（Full Agreement）的1000个高质量样本，构成一个成对比较的二分类基准任务。
    *   收益：量化揭示了现有客观指标、MOS预测器和AudioLLMs在该任务上的性能天花板（最强Gemini-2.5-Flash < 70%），明确了改进空间。

3.  提出基于两阶段训练的生成式奖励模型 (SpeechJudge-GRM)：
    *   局限：直接在AudioLLM上应用强化学习（RLVR）效果不佳（模型基础能力弱）；经典的Bradley-Terry奖励模型（BTRM）输出标量，缺乏可解释性和扩展性。
    *   创新：设计“SFT + RL”两阶段训练。SFT阶段用教师模型生成的CoT数据冷启动，增强指令遵循和推理；RL阶段使用GRPO算法，在人类偏好作为可验证奖励的条件下，直接优化模型在困难样本上的判断能力。模型采用生成式输出CoT和最终决策。
    *   收益：SpeechJudge-GRM不仅准确率高于BTRM（77.2% vs 72.7%），还支持推理时投票进一步提升性能（79.4%），并能提供判断理由。

### 🔬 细节详述

*   训练数据：
    *   数据集名称：SpeechJudge-Data (train)
    *   来源与规模：由原始的99K对经过筛选、投票合并、去除Tie和部分筛选后，得到约42K对偏好数据。进一步分为用于SFT的~25K对（教师模型判断正确）和用于RL的~17K对（教师模型判断错误）。
    *   预处理：使用多数投票确定最终标签；过滤了“Tie”样本；保留了WER差距小于12%的样本以聚焦自然度差异。
    *   数据增强：未明确提及，但数据构造过程已通过多模型、多风格、多语言确保了多样性。
*   损失函数：
    *   SFT阶段：标准的下一个Token预测损失（交叉熵），仅在教师模型输出的部分（Oteacher）计算损失。
    *   RL阶段：使用GRPO算法的损失函数。核心是策略梯度，其奖励信号来自基于准确率的规则奖励（与人类标签一致得+1，否则-1）。
*   训练策略：
    *   优化器：Adam (with weight decay)。
    *   学习率：SFT阶段 5e-5，RL阶段 5e-6。
    *   批次大小：SFT阶段最大token数4000/批；RL阶段批次大小32，每个提示的rollout数为8。
    *   训练步数/轮数：未在正文中明确说明总步数，但提到在验证集上选择最佳检查点。
    *   调度策略：未提及。
*   关键超参数：
    *   模型大小：基座模型Qwen2.5-Omni-7B，参数量7B。
    *   微调方法：SFT和RL阶段均使用LoRA，SFT阶段秩为128，RL阶段秩为64。
*   训练硬件：未在正文中明确说明。论文提及使用了ms-swift工具包进行RL训练。
*   推理细节：
    *   解码策略：生成式解码。在评估时，使用CoT提示进行推理。
    *   温度：未明确说明。
    *   投票（Voting）：支持推理时扩展，对于每个输入，生成10个独立输出，采用多数投票决定最终结果。
*   正则化或稳定训练技巧：使用了LoRA进行参数高效微调；RL阶段使用DAPO（GRPO的增强变体）进行稳定训练。

### 📊 实验结果

主要基准与数据集：SpeechJudge-Eval (1000样本)。

关键结果1：现有模型在SpeechJudge-Eval上的性能（表2）
| 模型类型 | 模型 | Regular | Expressive | Total |
| :--- | :--- | :--- | :--- | :--- |
| Objective Metrics | WER | 59.3 | 57.0 | 57.9 |
| | SIM | 47.5 | 42.5 | 44.5 |
| | FAD | 50.3 | 47.5 | 48.6 |
| MOS Predictor | UTMOS | 54.0 | 53.5 | 53.7 |
| Deepfake Detectors | AASIST | 40.5 | 50.8 | 46.7 |
| AudioLLMs (开源) | Qwen2.5-Omni-7B | 62.0 | 59.7 | 60.6 |
| | Kimi-Audio-7B | 65.5 | 68.0 | 67.0 |
| AudioLLMs (闭源) | Gemini-2.5-Flash | 73.5 | 66.2 | 69.1 |
结论：最强基线Gemini-2.5-Flash的准确率不足70%，表明该任务极具挑战性。

关键结果2：SpeechJudge-GRM与基线对比（表3）
| 模型 | Regular | Expressive | Total |
| :--- | :--- | :--- | :--- |
| Qwen2.5-Omni-7B | 62.0 | 59.7 | 60.6 |
| Gemini-2.5-Flash | 73.5 | 66.2 | 69.1 |
| SpeechJudge-BTRM | 77.5 | 69.5 | 72.7 |
| SpeechJudge-GRM (SFT) | 77.8 | 73.7 | 75.3 |
| SpeechJudge-GRM (SFT+RL) | 79.0 | 76.0 | 77.2 |
| SpeechJudge-GRM (SFT+RL) w/ Voting@10 | 80.5 | 78.7 | 79.4 |
结论：GRM模型（尤其是SFT+RL版本）显著优于BTRM和所有AudioLLM基线。Voting@10进一步提升了约2个百分点。

关键结果3：GRM用于高质量样本选择的主观评估（图5）
![样本选择主观评估](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/I9ED9VWZq6-4.png)
结论：使用GRM（或BTRM）从100个生成样本中选出的“最佳”样本，在人类听者对比中，其胜率显著高于随机选择的样本（GRM的胜率43.0% > BTRM的39.5%）。证明了GRM作为质量筛选器的有效性。

关键结果4：GRM作为奖励函数用于TTS后训练（图6a）
| 模型 | T-ACC | N-CMOS |
| :--- | :--- | :--- |
| Qwen2.5-0.5B-TTS | 84.0% | 0.00 ±0.00 |
| w/ INTP (DPO) | 87.0% | 0.18 ±0.07 |
| w/ SpeechJudge-Data (DPO) | 91.0% | 0.16 ±0.08 |
| w/ SpeechJudge-GRM (offline) | 91.0% | 0.21 ±0.12 |
| w/ SpeechJudge-GRM (online) | 90.0% | 0.25 ±0.09 |
结论：无论离线（用GRM重新标注偏好数据）还是在线（用GRM作为奖励函数）进行后训练，都能有效提升TTS模型在客观指标（文本准确率）和主观指标（自然度CMOS）上的表现，且基于GRM的方法通常优于仅使用原始数据的方法。

### ⚖️ 评分理由

- 学术质量：6.5/7：论文工作扎实、系统。数据集构建严谨，实验全面，有大量消融和对比实验（不同语言、风格、模型类型），支撑结论。方法上有创新，将生成式奖励模型与CoT、强化学习结合应用于语音领域，解决了直接应用RLVR效果不佳的问题。技术细节描述清晰。
- 选题价值：1.5/2：语音自然度判断是语音合成领域长期存在的核心评估难题，也是模型对齐的关键一环。该工作直击痛点，提供的资源（数据、基准、模型）将直接加速该领域的研究，对从事语音生成和评估的研究者有很高价值。
- 开源与复现加成：0.8/1：论文明确承诺在GitHub和项目网站上公开所有数据、基准、模型检查点和训练代码。附录提供了非常详细的实验设置、超参数和训练细节，复现路径清晰。这是一个优秀的开源工作。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
