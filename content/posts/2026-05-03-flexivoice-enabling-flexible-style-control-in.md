---
title: "FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions"
date: 2026-05-03
draft: false
tags: [语音合成, 强化学习, 零样本, 语音大模型, 多语言]
categories: [iclr-2026]
description: "语音合成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions

#语音合成 #强化学习 #零样本 #语音大模型 #多语言

✅ **7.5/10** | 前25% | #语音合成 | #强化学习 | #零样本 #语音大模型

学术质量 6.5/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Dekun Chen (The Chinese University of Hong Kong, Shenzhen)
- 通讯作者：未说明
- 作者列表：Dekun Chen (The Chinese University of Hong Kong, Shenzhen), Xueyao Zhang (The Chinese University of Hong Kong, Shenzhen), Yuancheng Wang (The Chinese University of Hong Kong, Shenzhen), Kenan Dai (Huawei Technologies Co., Ltd.), Li Ma (Huawei Technologies Co., Ltd.), Zhizheng Wu (The Chinese University of Hong Kong, Shenzhen; Shenzhen Loop Area Institute; City University of Macau; Amphion Technology Co., Ltd.)

#

### 💡 毒舌点评

这篇论文的亮点在于清晰地诊断了指令TTS中的“风格-音色-内容冲突”并设计了系统性的PPT训练方案（DPO对齐→多目标GRPO解耦→ALM奖励泛化）来解决它，实验设计严谨，结果提升显著。短板在于其强大的性能高度依赖于精细调参和多阶段训练流程（总计约3.5天A800），且将风格控制能力部分归因于数据构建，其方法对于更开放的、非情感类指令的鲁棒性仍有待大规模验证。

#

### 🔗 开源详情

- 代码：论文中未提及具体代码仓库链接，但明确表示将发布“所有训练和推理代码”。
- 模型权重：论文中未提及具体权重链接，但明确表示将发布“模型检查点”。
- 数据集：将发布自建的“FlexiVoice-Instruct”指令语音数据集。
- Demo：提供了在线音频样例演示网站：https://flexi-voice.github.io/
- 复现材料：非常充分。论文正和附录详细描述了数据预处理、模型结构、训练策略、超参数、硬件环境（8xA800, 3.5天）、评估设置。附录A.10专门说明复现细节。
- 论文中引用的开源项目：Phi-3.5-mini-instruct (LLM), Emilia (数据集), DualCodec (语音分词器), Emotion2vec-Large (情感识别), CAM++ (说话人验证), Kimi-Audio-7B-Instruct (奖励模型), Vocos (声码器), Deepseek-V3 (数据标注)。

### 📌 核心摘要

本文旨在解决零样本TTS中同时控制语音风格（通过自然语言指令）和音色（通过参考语音）时存在的纠缠问题。核心方法FlexiVoice基于大语言模型（LLM），并提出一种创新的渐进式后训练（PPT）框架，该框架包含三个阶段：1）使用直接偏好优化（DPO）进行多模态对齐；2）使用多目标分组相对策略优化（GRPO）解耦风格与音色/内容；3）使用音频语言模型（ALM）奖励进行复杂指令泛化。与现有方法相比，其新意在于首次提出通过课程学习方式的强化学习策略，专门针对TTS中的多模态因素解耦。主要实验表明，FlexiVoice在多模态解耦评估（如英语TR-hard任务中，指令遵循准确率ACC-I达78.2%，而参考音色干扰ACC-R降至10.6%）和复杂指令遵循基准（InstructTTSEval英文平均79.3%，接近Gemini-Pro的80.3%）上均大幅超越基线模型。其实际意义在于推动了更灵活、精准的语音内容生成，主要局限性在于训练流程复杂，且风格控制能力可能受预训练数据分布影响。

#

### 🏗️ 模型架构

FlexiVoice采用分阶段生成架构，核心组件为一个自回归LLM和一个流匹配解码器。
![图3: FlexiVoice完整结构](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/F7GmbfyVg9-2.png)
1.  输入处理：输入包含三部分：文本（目标内容）、自然语言指令（控制风格）、参考语音（控制音色）。文本和指令按LLM模板格式化。参考语音通过一个冻结的语音分词器（DualCodec）转换为离散语义代码。
2.  LLM核心：采用Phi-3.5-mini-instruct作为骨干模型。参考语音的离散代码与经过LLM编码器处理后的文本/指令token拼接，共同作为LLM的输入。LLM以自回归方式生成目标语音的离散代码序列。
3.  流匹配解码器：将LLM生成的离散代码序列转换为梅尔频谱图。该模块在Emilia数据集上预训练，并使用参考语音代码作为条件，以帮助保持音色。
4.  声码器：最终使用Vocos声码器将梅尔频谱图转换为波形音频。
关键设计选择：使用LLM作为核心处理器，使其能利用强大的指令遵循能力；引入流匹配作为高质量解码器；将音色信息通过离散代码和条件注入两种方式结合，以增强控制。

#

### 💡 核心创新点

1.  渐进式后训练框架：这是论文最核心的贡献。它设计了一个三阶段课程（S1: DPO对齐 → S2: 多目标GRPO解耦 → S3: ALM奖励GRPO泛化），系统性地解决了风格、音色、内容三者冲突的难题。之前方法要么只处理单一模态，要么在多模态输入下性能下降。
2.  针对解耦的多目标GRPO优化：在S2阶段，论文创新性地构造了风格冲突的数据场景（如“快乐”指令配“悲伤”参考），并同时优化两个奖励：情感识别奖励（rser，保证风格遵循）和说话人验证奖励（rsv，保证音色一致）。通过联合优势函数，迫使模型主动分离这些因素。
3.  大规模高质量指令-语音数据集：论文构建了FlexiVoice-Instruct数据集（4316小时），利用DeepSeek-V3等LLM从语音的元数据和转录文本中自动生成自然、多样的语言指令，为模型提供高质量的预训练数据基础，覆盖广泛风格。

#

### 🔬 细节详述

- 训练数据：
    - 预训练：Emilia（大规模多样数据）、FlexiVoice-Instruct（4316小时）、ParaSpeechCaps、KeSpeech、NVSpeech及多个情感/年龄/方言专用数据集（详见表6）。
    - S1 DPO数据：来自ESD情感数据集。构建方式为：指令（模板）+ 目标情感标签 + 同句子同��话人不同情感的样本作为正/负对 + 中性参考语音。
    - S2 GRPO数据：约20,000条（中英文），来自NCSSD对话数据集。通过随机分配情感标签和中性/情感参考语音，构造风格对齐与冲突的场景。
    - S3 GRPO数据：约14,000条（中英文），包括从预训练数据采样的1,000条以及用DeepSeek-V3生成的13,000条复杂指令（涵盖声学参数字典、多特征描述、开放式场景）。
- 损失函数：
    - 预训练：标准的交叉熵损失，计算在生成token与ground-truth token之间。
    - S1：DPO损失（L_DPO），用于最大化偏好对中胜出样本的概率，同时最小化失败样本的概率。
    - S2 & S3：多目标GRPO优势函数。在S2，优势Ai = (ri_ser - mean)/std + (ri_sv - mean)/std。在S3，优势Ai_ins = (ri_llm - mean)/std，并与S2数据混合训练形成最终优势Ai。
- 训练策略：
    - S1 (Multi-modality DPO)：训练3轮，学习率1e-5，β=0.1。耗时约2小时。
    - S2 (Decoupling GRPO)：训练2轮，学习率1e-5，β=0.1，组大小G=8。在线采样生成4个候选完成。耗时约36小时。
    - S3 (Instruction GRPO)：训练2轮，组大小G=6。混合约10%的S2数据。使用Kimi-Audio-7B-Instruct作为奖励模型。耗时约42小时。
- 关键超参数：基于Phi-3.5-mini-instruct（约3.8B参数）。语音分词码本大小16384。
- 训练硬件：全部在8x NVIDIA A800 (80GB) GPU上完成，后训练总时长约3.5天。
- 推理细节：LLM自回归生成代码序列，流匹配解码器将其转换为梅尔频谱，Vocoder生成最终波形。论文未详细说明推理时的温度或beam search等解码策略。
- 正则化技巧：在S3阶段混合部分S2数据以缓解灾难性遗忘。在S2奖励设计中，选择说话人验证（二值）而非说话人相似度（连续值），以避免因情感表达带来的声学特征变化导致与音色奖励冲突（详见附录A.6图4）。

#

### 📊 实验结果

论文设置了两个主要评估维度：多模态解耦控制和复杂指令遵循。

1. 多模态解耦能力评估（自建数据集，MEAD+CSEMOTIONS）
![图4: S2阶段两种奖励信号对比](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/F7GmbfyVg9-3.png)
图4说明：该消融图证明了在解耦GRPO阶段，使用说话人验证信号（Speaker verification）比说话人相似度信号（Speaker similarity）在TR-hard任务上能获得显著更高的指令遵循准确率（ACC-I），因为后者会与情感表达奖励产生冲突。

关键结果汇总表：

| 模型 | 任务 | 指标 | EN Easy | EN Hard | ZH Easy | ZH Hard |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| FlexiVoice | TO | ACC-I ↑ | 97.4 | 89.4 | 99.8 | 98.4 |
| | | ACC-T ↓ | - | 6.6 | - | 0.8 |
| | TR | ACC-I ↑ | 89.4 | 78.2 | 81.8 | 75.8 |
| | | E-SIM ↑ | 0.90 | 0.87 | 0.85 | 0.80 |
| | | SV ↑ | 91.0 | 95.8 | 98.8 | 98.4 |
| | | ACC-R ↓ | - | 10.6 | - | 13.2 |
| VoxInstruct | TO | ACC-I ↑ | 70.6 | 17.8 | 48.6 | 29.0 |
| CosyVoice2 | TR (Hard) | ACC-I ↑ | - | 23.9 | - | 18.7 |
| FlexiVoice-Base | TR (Hard) | ACC-I ↑ | - | 32.2 | - | 38.0 |

结论：FlexiVoice在所有任务上均显著超越基线。尤其在困难设置（TO-Hard, TR-Hard）中，指令遵循准确率（ACC-I）大幅提升，同时干扰准确率（ACC-T, ACC-R）极低，证明了其强大的解耦能力。主观评价（表3）显示其质量MOS和比较MOS（CMOS）均接近或超越真实语音。

2. 复杂指令遵循评估（InstructTTSEval）
关键结果汇总表：

| 模型 | 类型 | 英文(EN) 平均准确率 | 中文(ZH) 平均准确率 |
| :--- | :--- | :--- | :--- |
| Ground-truth | - | 84.3 | 82.5 |
| FlexiVoice | 开放 | 79.3 | 70.8 |
| Gemini-pro | 商用 | 80.3 | 84.8 |
| GPT-4o-mini-TTS | 商用 | 68.5 | 51.1 |
| MiMo-Audio-7B | 开放 | 72.6 | 70.5 |
| VoxInstruct | 开放 | 50.4 | 47.5 |
| FlexiVoice-Base | - | 66.4 | 58.4 |

结论：FlexiVoice在开源模型中取得了最优性能（EN 79.3%, ZH 70.8%），大幅超越所有基线，并在英文任务上接近Gemini-pro（80.3%）。证明了其PPT策略有效提升了对复杂、开放式指令的泛化能力。

3. 消融实验（表5）
- 训练顺序：直接从S3开始（+S3）性能最差（72.3），说明需要S1的冷启动。倒序训练（+S3→S1→S2）导致灾难性遗忘（复杂指令能力降至74.8）。
- 渐进式 vs 联合训练：联合训练S2和S3（+S1→S2+S3 Joint）在两个基准上均弱于渐进式PPT（解耦平均84.1 vs 88.7；指令平均75.5 vs 79.3），因为梯度冲突。
- 渐进增益：逐步添加阶段带来稳定提升：+S1 → +S2（解耦能力大幅提升） → +S3（指令能力提升）。

4. 非情感风格控制（附录A.8）
在语速和音调控制任务上，FlexiVoice的斯皮尔曼相关系数显著高于基线（如英文语速相关0.86 vs VoxInstruct 0.75），证明了其对物理声学参数也有良好的可控性。

#

### ⚖️ 评分理由

- 学术质量：6.5/7：论文提出了一个新颖且系统的技术框架（PPT）来解决语音合成中一个具体而重要的难题（多模态冲突）。方法设计合理，基于成熟的强化学习技术但针对TTS问题进行了巧妙适配（如多目标GRPO、ALM奖励）。实验极其充分，覆盖了定量（多指标）、定性（主观评价）、消融（顺序、联合vs渐进）等多个层面，数据支持结论。扣分点在于对一些设计决策（如S3丢弃参考）的论证稍显简略，且整体方案依赖于多阶段训练和专用奖励模型，通用性分析有限。
- 选题价值：1.5/2：可控语音合成是当前语音AI的核心方向之一，融合指令控制与零样本克隆极具应用前景。论文直接面向这一前沿需求，其成果对语音助手、有声读物、影视配音等领域有明确价值。
- 开源与复现加成：+1.0/1：论文在复现性上堪称典范。提供了从数据集构建（处理流程、提示词）、模型配置（架构、超参数）、训练细节（三阶段具体设置、硬件时长）到评估脚本的全部信息，并承诺开源。附录尤为详尽。

#

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
