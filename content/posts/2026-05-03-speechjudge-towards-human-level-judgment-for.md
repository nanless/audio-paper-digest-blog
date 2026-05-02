---
title: "SpeechJudge: Towards Human-Level Judgment for Speech Naturalness"
date: 2026-05-03
draft: false
tags: [语音合成, 语音大模型, 强化学习, 数据集, 基准测试]
categories: [iclr-2026]
description: "语音合成 | 7.0/10"
hiddenInHomeList: true
---

# 📄 SpeechJudge: Towards Human-Level Judgment for Speech Naturalness

#语音合成 #语音大模型 #强化学习 #数据集 #基准测试

✅ **7.0/10** | 前25% | #语音合成 | #强化学习 | #语音大模型 #数据集

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 -0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Xueyao Zhang (香港中文大学（深圳）)
- 通讯作者：Zhizheng Wu (香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd)
- 作者列表：Xueyao Zhang（香港中文大学（深圳））、Chaoren Wang（香港中文大学（深圳））、Huan Liao（香港中文大学（深圳））、Ziniu Li（香港中文大学（深圳））、Yuancheng Wang（香港中文大学（深圳））、Li Wang（香港中文大学（深圳））、Dongya Jia（字节跳动 Seed）、Yuanzhe Chen（字节跳动 Seed）、Xiulin Li（DataBaker Technology）、Zhuo Chen（字节跳动 Seed）、Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd）

### 💡 毒舌点评

亮点在于其“基建”属性：提供了语音自然度评估领域久缺的大规模、高质量成对偏好数据集与标准化基准，这对整个社区的推进价值可能超过其GRM模型本身。短板是数据集标注者主要为中国普通话母语者，对英语等语言自然度的“人类判断”基准可能存在文化偏差，这为结论的普适性埋下了隐患，也让“Towards Human-Level Judgment”的标题显得略有野心。

### 🔗 开源详情

- 代码：论文中提供代码仓库链接：https://github.com/AmphionTeam/SpeechJudge。
- 模型权重：论文中提到“will publicly release all key resources... including the trained model checkpoints for SpeechJudge-GRM”，并指向GitHub仓库，但未直接提供权重下载链接。可以推断权重将通过该仓库发布。
- 数据集：论文中提到会公开发布SpeechJudge-Data。
- Demo：提供音频样本在线演示网站：https://speechjudge.github.io/。
- 复现材料：论文正文和附录详细描述了数据构建协议、评估基准构建细节、训练超参数、工具（如ms-swift）等，复现信息非常充分。
- 论文中引用的开源项目：主要依赖的开源项目包括：Qwen2.5-Omni-7B（基座模型）、CosyVoice2、F5-TTS、MaskGCT、Ints（TTS数据生成模型）、ms-swift（RL训练工具包）、Whisper-large-v3、Paraformer-zh（用于WER计算）、WavLM（用于SIM计算）、VGGish（用于FAD计算）、AASIST和ADV（深度伪造检测基线）。

### 📌 核心摘要

1.  问题：语音合成模型难以与人类感知对齐，核心障碍在于缺乏大规模、聚焦于“自然度”这一基础指标的人类偏好反馈数据集和相应的奖励模型。
2.  方法核心：提出SpeechJudge套件，包含三个部分：1）SpeechJudge-Data：一个包含99K对合成语音的人类反馈数据集，标注了可懂度与自然度偏好；2）SpeechJudge-Eval：一个包含1000个高一致性样本的语音自然度判断基准；3）SpeechJudge-GRM：一个基于Qwen2.5-Omni-7B的生成式奖励模型，通过两阶段后训练（监督微调SFT+基于GRPO的强化学习）来学习人类偏好。
3.  新意：首次构建了大规模、多语言、多风格、多TTS模型输出的成对自然度偏好数据集；揭示了现有最优模型（如Gemini-2.5-Flash）在此任务上性能仍不足70%，设立了更具挑战性的评估标准；相比传统Bradley-Terry奖励模型（BTRM），提出的GRM能生成思维链推理，并支持推理时计算扩展，性能更优。
4.  主要实验结果：在SpeechJudge-Eval基准上，SpeechJudge-GRM（SFT+RL）达到77.2%的准确率，经过10次推理投票后可达79.4%，显著优于SpeechJudge-BTRM（72.7%）和所有测试的现有模型（最佳为Gemini-2.5-Flash的69.1%）。GRM作为奖励函数用于TTS模型后训练，能有效提升语音自然度。
    关键数据表格：
    | 模型 | 常规语音 | 表现语音 | 总体准确率 |
    | :--- | :---: | :---: | :---: |
    | Gemini-2.5-Flash | 73.5 | 66.2 | 69.1 |
    | SpeechJudge-BTRM | 77.5 | 69.5 | 72.7 |
    | SpeechJudge-GRM (SFT) | 77.8 | 73.7 | 75.3 |
    | SpeechJudge-GRM (SFT+RL) | 79.0 | 76.0 | 77.2 |
    | SpeechJudge-GRM (SFT+RL, Voting@10) | 80.5 | 78.7 | 79.4 |
5.  实际意义：为语音生成模型的人类对齐研究提供了关键的数据资源、评估标准和训练工具，可直接用于样本筛选和强化学习训练，推动语音合成质量向人类水平迈进。
6.  主要局限性：数据集和评估集的语言与文化覆盖面有限（主要反映中英双语听众偏好）；GRM的思维链推理能力部分源自闭源教师模型（Gemini-2.5-Flash），可能存在偏见；模型对自然度的判断是句子级别的，无法定位局部瑕疵。

### 🏗️ 模型架构

SpeechJudge-GRM是一个基于生成式奖励模型（GRM） 的架构，其核心是让模型以自然语言推理的形式输出对语音自然度的判断，而非直接输出标量分数。

*   整体流程：输入为目标文本 `t` 和一对语音样本 `(a1, a2)`。模型需要分析两者，判断哪一个更自然。其输出包括一个思维链（Chain-of-Thought）推理过程和一个最终的偏好结论（A更好或B更好）。
*   基础模型：采用 Qwen2.5-Omni-7B (Thinker) 作为基座。这是一个具备音频理解能力的多模态大语言模型。
*   关键组件与数据流：
    1.  提示构建：使用一个固定的提示模板（Table 1），指导模型评估语音的韵律、节奏、发音清晰度和整体自然度，并要求输出特定格式的结论。
    2.  监督微调（SFT）阶段：作为“冷启动”，使用Gemini-2.5-Flash 作为教师模型，为SpeechJudge-Data中的样本生成思维链推理和判断。对于教师判断与人类标签一致的样本，将其（提示+教师输出）作为SFT数据，训练GRM模仿其推理和判断格式。
    3.  强化学习（RL）阶段：使用GRPO算法进行训练。对于SFT阶段教师模型判断错误的“困难样本”，模型对每个提示进行多次采样（rollout），解析出每次采样的判断结果。将人类标注的偏好作为可验证奖励（判断正确得+1分，错误得-1分），以此奖励信号优化模型，使其自主学习如何进行更准确的推理和判断，而非模仿特定教师。
    4.  推理与扩展：在推理时，模型可以生成多次输出，并通过多数投票（Majority Voting） 来选择最终判断，这即是“推理时计算扩展”，能进一步提升准确率（如Voting@10）。

![论文中的架构图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/I9ED9VWZq6-3.png)
上图展示了SpeechJudge-GRM的训练流程。(a) 使用Gemini-2.5-Flash生成思维链数据用于SFT阶段。(b) 将人类偏好作为可验证奖励，使用GRPO算法对模型进行强化学习训练。

### 💡 核心创新点

1.  构建大规模自然度偏好数据集（SpeechJudge-Data）：此前语音领域缺乏大尺度、成对的、专注于自然度的人类偏好数据。本文收集了99K对语音样本，并进行了多轮人工标注，填补了这一空白。
2.  建立标准化评估基准（SpeechJudge-Eval）：设计了一个成对比较的二分类任务，并构建了高一致性（全同意级别）的测试集，为语音自然度判断能力的量化评估提供了统一标准，揭示了现有模型的不足。
3.  提出生成式语音自然度奖励模型（SpeechJudge-GRM）：创新性地将生成式奖励模型（GRM） 应用于语音自然度评估，使其能输出可解释的推理过程，并支持通过多次采样投票提升性能。相比传统的判别式BTRM，GRM在准确性和可解释性上均更优。
4.  设计“SFT+RL”两阶段训练范式：针对开源AudioLLM指令跟随能力弱的问题，先使用高质量教师生成的数据进行SFT“冷启动”，再利用困难样本进行RL微调，有效提升了模型在自然度判断任务上的性能。

### 🔬 细节详述

- 训练数据：
    - SpeechJudge-Data (train)：约42K对语音样本。由SpeechJudge-Data (hq)子集衍生而来，首先过滤掉全不同意（FD）级别的样本，对剩余样本进行多数投票确定最终标签，并剔除“平局”样本。
    - SFT数据：从上述训练集中，筛选出教师模型（Gemini-2.5-Flash）判断与人类标签一致的约25K样本，构造（提示， 思维链输出）对。
    - RL数据：使用上述训练集中教师模型判断错误的约17K样本。
- 损失函数：
    - SFT阶段：标准的下一个token预测损失，但仅在教师生成的输出段 `Oteacher` 上计算损失，以学习推理格式。
    - RL阶段：使用GRPO（Group Relative Policy Optimization） 算法。奖励函数为基于准确率的规则奖励：`R = 1 if y_M == y_H else -1`。
- 训练策略：
    - SFT：使用LoRA（rank=128），优化器Adam，学习率5e-5，最大token数4000/批，在SpeechJudge-Data (dev)上选最佳检查点。
    - RL (DAPO/GRPO)：基于SFT模型初始化，使用LoRA（rank=64），每个提示采样8次（rollouts），批大小32，学习率5e-6，在SpeechJudge-Data (dev)上选最佳检查点。使用ms-swift工具包。
- 关键超参数：基座模型为Qwen2.5-Omni-7B。LoRA秩在SFT和RL阶段分别为128和64。
- 训练硬件：论文中未具体说明GPU型号和数量。
- 推理细节：使用CoT提示，支持生成多次输出进行多数投票（如Voting@10）。论文未具体说明解码策略（如温度）的细节。
- 正则化技巧：使用了LoRA进行参数高效微调。

### 📊 实验结果

论文在多个维度上进行了实验验证。
1.  SpeechJudge-Eval基准测试（表2，表3）：这是核心实验，评估各模型判断语音对哪个更自然的能力（准确率）。
    关键对比表格：
    | 模型类别 | 模型名称 | 总体准确率 |
    | :--- | :--- | :---: |
    | 目标指标 | WER | 57.9 |
    | MOS预测器 | DNSMOS | 57.9 |
    | 深度伪造检测器 | AASIST | 46.7 |
    | 开源AudioLLM | Kimi-Audio-7B-Instruct | 67.0 |
    | 闭源AudioLLM | Gemini-2.5-Flash | 69.1 |
    | 奖励模型 | SpeechJudge-BTRM | 72.7 |
    | 奖励模型 | SpeechJudge-GRM (SFT+RL) | 77.2 |
    结论：现有指标和模型性能有限（均低于70%），本文提出的GRM显著优于最强基线。
2.  高质量样本选择实验（图5）：比较了使用BTRM和GRM从100个样本中选出的“最佳”样本，与随机样本进行人类主观对比的胜率。
    ![论文中的实验结果图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/I9ED9VWZq6-0.png)
    上图显示，由SpeechJudge-GRM选出的样本相比随机样本，在人类评价中获得了更高的“Win”比例（43.0% vs 39.5%），优于BTRM。
3.  TTS模型后训练实验（图6）：将GRM作为奖励函数，用于提升一个TTS模型（Qwen2.5-0.5B-TTS）的自然度。
    ![论文中的实验结果图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/I9ED9VWZq6-1.png)
    上图(a)显示，使用GRM作为奖励的“online”后训练方法，在自然度CMOS（N-CCMOS）上取得了最高分（0.25），优于其他方法。图(b)���示后训练对说话人相似度的影响。
4.  细分结果：论文在附录中提供了按语言（表8，表9）、按语音风格（表10）以及在一个分布外测试集（人类录音 vs. 商业TTS克隆，表11）上的详细结果。例如，GRM在中文相关的判断任务上普遍表现更好（表8中zh2zh达85.4%），这可能与标注者偏好有关。在分布外测试中（表11），GRM（62.4%）远超基线BTRM（50.4%）。

### ⚖️ 评分理由

- 学术质量：6.0/7：工作扎实，逻辑链条完整（问题-数据-基准-模型-应用），技术方案有创新（GRM用于语音评估，SFT+RL训练），实验对比充分，结论有数据支撑。主要扣分点在于数据集标注者的文化偏差可能影响结论的普适性，以及模型本身（GRM）的创新更多是将已有范式（GRM, GRPO）迁移到新领域，而非提出全新的网络结构或理论。
- 选题价值：1.5/2：选题针对一个明确且重要的工业与学术痛点（语音自然度评估与对齐），提供的资源（数据集、基准）具有很高的社区实用价值。其影响力是渐进式提升领域基础设施，而非开辟全新赛道。
- 开源与复现加成：-0.5/1：承诺开源并提供了极佳的细节描述（附录详尽），是加分项。轻微扣分是因为在当前提供的文本中，对于“模型权重是否已立即可用”这一具体信息确认不足。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
