---
title: "FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions"
date: 2026-05-03
draft: false
tags: [语音合成, 语音大模型, 强化学习, 零样本, 多语言]
categories: [iclr-2026]
description: "语音合成 | 7.0/10"
hiddenInHomeList: true
---

# 📄 FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions

#语音合成 #语音大模型 #强化学习 #零样本 #多语言

✅ **7.0/10** | 前25% | #语音合成 | #强化学习 | #语音大模型 #零样本

学术质量 5.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Dekun Chen（香港中文大学，深圳）
- 通讯作者：未说明（论文署名列表未明确标注）
- 作者列表：Dekun Chen（香港中文大学，深圳），Xueyao Zhang（香港中文大学，深圳），Yuancheng Wang（香港中文大学，深圳），Kenan Dai（华为技术有限公司），Li Ma（华为技术有限公司），Zhizheng Wu（香港中文大学，深圳 / 深圳湾区研究院 / 澳门城市大学 / Amphion Technology Co., Ltd.）

### 💡 毒舌点评

亮点：论文提出的“渐进式后训练”（PPT）框架设计精巧，将复杂的多模态解耦问题分解为“对齐-解耦-泛化”三步走的课程学习，消融实验清晰地验证了其设计顺序的必要性，方法论上很有说服力。
短板：核心创新点高度依赖特定的“解耦”训练阶段（S2）和外部奖励模型（如语音情感识别、说话人验证、ALM），这可能导致系统的复杂性和泛化能力受限于这些辅助模型的性能天花板，且未深入探讨奖励信号噪声或冲突时的鲁棒性。

### 🔗 开源详情

- 代码：论文中提到“We will release the instruction–speech dataset, model checkpoints, and all training and inference code”，表明有开源计划。
- 模型权重：同上，计划发布模型检查点。
- 数据集：计划发布FlexiVoice-Instruct数据集。
- Demo：提供了在线音频样本演示链接：https://flexi-voice.github.io/.
- 复现材料：附录A.10提供了详细的硬件配置（8×A800）、训练时长（3.5天）、各阶段（S1/S2/S3）的具体超参数（学习率、epoch数、组大小、β值）。
- 论文中引用的开源项目：
    - 基础模型：Phi-3.5-mini-instruct
    - 语音分词器：DualCodec
    - 声码器：Vocos
    - 语音理解/奖励模型：Emotion2vec-Large (情感识别), CAM++ (说话人验证), Kimi-Audio-7B-Instruct (ALM奖励), Whisper-Large-V3 (英文ASR), Paraformer-zh (中文ASR)。
    - 数据：Emilia, ParaSpeechCaps, NVSpeech, ESD, NCSSD, KeSpeech 等。
- 论文中未提及开源计划：对于训练中使用的具体数据构造脚本、LLM标注时的详细提示词模板（附录A.3仅给出示例）的完整版本未明确说明是否会完整发布。

### 📌 核心摘要

1.  问题：现有的指令式零样本TTS系统在同时接收自然语言风格指令和参考语音（控制音色）时，面临“风格-音色-内容冲突”，模型容易忽略指令，或从参考语音中泄漏风格，无法实现灵活的解耦控制。
2.  方法：提出FlexiVoice系统，其核心是基于预训练大语言模型（LLM），并引入创新的“渐进式后训练”（PPT）框架。PPT包含三个阶段：S1（多模态DPO）对齐指令和参考；S2（解耦GRPO）通过构造冲突场景，用多目标强化学习强制分离风格、音色和内容；S3（指令GRPO）使用音频语言模型奖励，泛化到复杂指令。
3.  新意：相较于简单地将指令和参考作为条件输入，PPT框架主动地、分阶段地解决了多模态输入带来的纠缠问题。同时，构建了大规模、高质量的指令语音数据集FlexiVoice-Instruct（4316小时），为预训练提供了基础。
4.  结果：实验表明，FlexiVoice在解耦能力上大幅超越基线。例如，在英文“文本+参考”（TR）困难任务（指令“Happy” vs. 参考“Sad”）上，FlexiVoice的指令遵循准确率（ACC-I）为78.2%，而最强的基线VoxInstruct仅为49.7%。在复杂指令跟随评测集（InstructTTSEval）上，FlexiVoice平均准确率（英文79.3%，中文70.8%）接近商用闭源模型（如Gemini-pro）。
5.  意义：为需要同时灵活控制音色和说话风格的TTS应用场景（如个性化语音合成、有声书制作）提供了一个有效且可复现的解决方案。
6.  局限：S3阶段依赖的ALM奖励模型可能不稳定；在复杂指令任务上，中文表现弱于英文；多模态冲突场景下的生成稳定性仍可进一步提升。

### 🏗️ 模型架构

FlexiVoice的架构基于自回归LLM与声码器的结合，主要流程如下：
1.  输入处理：文本和自然语言指令经过模板格式化。参考语音通过一个冻结的语音分词器（DualCodec）转换为离散语义token。
2.  LLM核心：采用Phi-3.5-mini-instruct作为基础模型。格式化后的文本/指令embedding与参考语音的语义token拼接，作为输入序列送入LLM。LLM以自回归方式生成表示目标语音的离散语义token序列。
3.  流匹配解码：生成的语义token序列与作为条件的参考语音语义token一起，送入基于流匹配（Flow Matching）的解码器，生成梅尔频谱图。
4.  波形合成：梅尔频谱图通过Vocos声码器转换为最终的音频波形。

关键设计：预训练阶段不使用参考语音，仅在后训练阶段引入，以分阶段解锁多模态控制能力。LLM处理所有输入（文本、指令、参考token），实现了端到端的多模态条件生成。

![FlexiVoice 完整结构图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/F7GmbfyVg9-2.png)
(图3展示了FlexiVoice的完整结构：输入文本/指令与参考语音分词后拼接送入LLM，LLM输出语义token，经流匹配和声码器生成音频。)

### 💡 核心创新点

1.  渐进式后训练（PPT）框架：这是本文最核心的创新。它将多模态TTS的对齐过程设计成一个由易到难的课程：先对齐（S1 DPO），再主动解耦（S2 GRPO），最后泛化（S3 GRPO）。这种设计解决了传统方法中多模态条件相互干扰的问题。
2.  大规模指令语音数据集（FlexiVoice-Instruct）：通过LLM（Deepseek-V3）为大规模语音数据（Emilia， 游戏配音）自动生成自然、多样的风格描述指令，解决了高质量指令-语音配对数据稀缺的问题，为模型的预训练奠定了基础。
3.  基于强化学习的显式解耦策略（S2阶段）：在S2阶段，通过精心构造风格冲突的训练场景（如“Happy”指令 vs. “Sad”参考），并使用多目标奖励（情感正确性+说话人一致性）进行GRPO优化，迫使模型在优化过程中主动分离风格、音色和文本内容因子，而非仅仅学习条件输入。

### 🔬 细节详述

- 训练数据：
    - 预训练数据：包括Emilia（大规模多语言语音）、FlexiVoice-Instruct（4316小时，LLM标注）、ParaSpeechCaps、NVSpeech以及多个情感、辩论、方言等数据集（总计详见附录表6）。对于无指令的数据，使用默认指令“Speak the following text”。
    - S1（DPO）数据：来自情感语音数据集（如ESD），同一说话人同一句子不同情感构成偏好对，使用中性语音作为参考。
    - S2（GRPO）数据：基于NCSSD对话数据，随机分配情感指令，并随机组合中性/情感参考语音，构造约2万条中英文冲突场景数据。
    - S3（GRPO）数据：混合S2部分数据（约1000条）并使用LLM生成1.4万条复杂指令-文本对。
- 损失函数：
    - S1阶段：DPO损失。\( L_{DPO} = -E[\log \sigma(\beta \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)})] \)，用于最大化正确响应与错误响应的对数概率差。
    - S2/S3阶段：多目标GRPO的联合优势函数。例如，S2的优势 \( A_i = \frac{r_{ser}^i - mean(r_{ser})}{std(r_{ser})} + \frac{r_{sv}^i - mean(r_{sv})}{std(r_{sv})} \)，结合了情感奖励（\( r_{ser} \)）和说话人验证奖励（\( r_{sv} \)）。
- 训练策略：
    - 优化器：未说明具体优化器，但给出了关键超参数。
    - 学习率：S1/S2/S3阶段均为 \( 1 \times 10^{-5} \)。
    - 训练轮数：S1: 3 epochs; S2: 2 epochs; S3: 2 epochs。
    - 批次大小：未说明全局batch size。
    - 关键超参数：DPO/GRPO中的 \( \beta = 0.1 \)；GRPO组大小G在S2为8，S3为6。
    - KL惩罚：在DPO中通过 \( \beta \) 项隐式实现。
- 硬件与耗时：
    - 硬件：8× NVIDIA A800 (80GB) GPU。
    - 总训练时长：后训练PPT流程约3.5天。S1约2小时，S2约36小时，S3约42小时。
- 推理细节：未详细说明解码策略（如温度、采样方法）。模型为自回归生成。

### 📊 实验结果

论文在两个主要评测集上进行了评估：多模态解耦评测（表2）和复杂指令跟随评测InstructTTSEval（表4）。

表2：多模态控制与解耦能力评测结果（部分关键数据）

| 模型 | 任务类型 | 指标 | 英文易 | 英文难 | 中文易 | 中文难 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ground-truth | TO | ACC-I↑ | 93.4 | - | 61.6 | - |
| | TR | ACC-I↑ | 93.4 | - | 61.6 | - |
| VoxInstruct | TO | ACC-I↑ | 70.6 | 17.8 | 48.6 | 29.0 |
| | TR | ACC-I↑ | 58.5 | 23.9 | 19.4 | 23.2 |
| FlexiVoice-Base | TO | ACC-I↑ | 72.4 | 39.4 | 78.4 | 66.8 |
| | TR | ACC-I↑ | 58.8 | 32.2 | 25.2 | 38.0 |
| FlexiVoice | TO | ACC-I↑ | 97.4 | 89.4 | 99.8 | 98.4 |
| | TR | ACC-I↑ | 89.4 | 78.2 | 81.8 | 75.8 |

TO: Text-Only, TR: Text and Reference. FlexiVoice在所有设置下均大幅超越基线。

表4：复杂指令跟随评测（InstructTTSEval）结果

| 模型 | InstructTTSEval-EN | | | | InstructTTSEval-ZH | | | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | APS | DSD | RP | Avg. | APS | DSD | RP | Avg. |
| Gemini-pro (闭源) | 87.6 | 86.0 | 67.2 | 80.3 | 89.0 | 90.1 | 75.5 | 84.8 |
| VoxInstruct | 54.9 | 57.0 | 39.3 | 50.4 | 47.5 | 52.3 | 42.6 | 47.5 |
| FlexiVoice-Base | 63.6 | 75.0 | 60.6 | 66.4 | 56.7 | 59.1 | 59.5 | 58.4 |
| FlexiVoice | 81.2 | 85.2 | 71.4 | 79.3 | 71.0 | 71.8 | 69.7 | 70.8 |

FlexiVoice在开源模型中取得最佳，英文平均分接近Gemini-pro，中文超过MiMo-Audio-7B-Instruct。

![奖励信号选择对比图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/F7GmbfyVg9-3.png)
(图4展示了在S2解耦GRPO阶段，使用说话人验证奖励（Speaker verification）相比说话人相似度奖励（Speaker similarity）能取得更稳定的性能提升。)

消融实验（表5） 关键结论：训练顺序至关重要（S1->S2->S3最优）；联合训练（Joint Training）性能低于渐进式训练，验证了课程学习的必要性。

### ⚖️ 评分理由

- 学术质量：5.0/7。论文技术路线清晰，PPT框架的设计逻辑性强，实验设置全面，包含消融研究，证据链完整。主要贡献在于工程化地整合现有技术（LLM、DPO、GRPO）解决一个具体问题（多模态解耦），而非提出底层的新模型或理论，因此创新性属于中等偏上。
- 选题价值：1.5/2。研究的是可控TTS的核心痛点（多模态控制与解耦），具有明确的应用价值和市场需求，是领域内持续关注的热点方向。
- 开源与复现加成：+0.5/1。论文明确承诺开源代码、模型和数据集，并在附录中提供了极其详细的训练配置、数据构造流程和超参数，复现指引非常充分。但“已开源”状态需以实际发布为准。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
