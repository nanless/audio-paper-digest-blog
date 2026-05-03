---
title: "ICLR 2026 - 语音合成 论文列表"
date: 2026-05-03
draft: false
tags: ["语音合成"]
categories: [iclr-2026]
description: "共 8 篇 ICLR 2026 语音合成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音合成

共 **8** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS](/audio-paper-digest-blog/posts/2026-05-03-flexivoice-enabling-flexible-style-control-in) | 9.0分 | 前10% |
| 🥈 | [MambaVoiceCloning: Efficient and Expressive Text-to-Speech v](/audio-paper-digest-blog/posts/2026-05-03-mambavoicecloning-efficient-and-expressive-text) | 8.5分 | 前25% |
| 🥉 | [Gogo: Group-wise granularity-ordered codec for stable and ef](/audio-paper-digest-blog/posts/2026-05-03-gogo-group-wise-granularity-ordered-codec-for) | 8.5分 | 前25% |
| 4. | [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Re](/audio-paper-digest-blog/posts/2026-05-03-hierarchical-semantic-acoustic-modeling-via-semi) | 8.5分 | 前25% |
| 5. | [VibeVoice: Expressive Podcast Generation with Next-Token Dif](/audio-paper-digest-blog/posts/2026-05-03-vibevoice-expressive-podcast-generation-with-next) | 7.5分 | 前25% |
| 6. | [SpeechJudge: Towards Human-Level Judgment for Speech Natural](/audio-paper-digest-blog/posts/2026-05-03-speechjudge-towards-human-level-judgment-for) | 7.5分 | 前25% |
| 7. | [Toward Complex-Valued Neural Networks for Waveform Generatio](/audio-paper-digest-blog/posts/2026-05-03-toward-complex-valued-neural-networks-for) | 7.5分 | 前25% |
| 8. | [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-03-flexicodec-a-dynamic-neural-audio-codec-for-low) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions](/audio-paper-digest-blog/posts/2026-05-03-flexivoice-enabling-flexible-style-control-in)

🔥 **9.0/10** | 前10% | #语音合成 | #强化学习 | #大语言模型 #多语言

👥 **作者与机构**

- 第一作者：Dekun Chen（香港中文大学（深圳）、Shenzhen Loop Area Institute）
- 通讯作者：Zhizheng Wu（香港中文大学（深圳）、Shenzhen Loop Area Institute、澳门城市大学、Amphion Technology Co., Ltd.）
- 作者列表：Dekun Chen（香港中文大学（深圳）、Shenzhen Loop Area Institute），Xueyao Zhang（香港中文大学（深圳）），Yuancheng Wang（香港中文大学（深圳）），Kenan Dai（华为技术有限公司），Li Ma（华为技术有限公司），Zhizheng Wu（香港中文大学（深圳）、Shenzhen Loop Area Institute、澳门城市大学、Amphion Technology Co., Ltd.）

💡 **毒舌点评**

亮点在于其“渐进式后训练”策略如同精准的外科手术，系统地解决了风格、音色、内容三者纠缠的顽疾，使得自然语言指令能真正“驯服”语音合成模型。短板是其在追求极致风格表达时，生成语音的字错率（WER）较基座模型略有上升，且对参考语音的依赖仍是一个需要平衡的点。

🔗 **开源详情**

- **代码**：论文明确表示将公开训练和推理代码，但未提供具体仓库链接（可能在发表时放出）。
- **模型权重**：论文承诺发布模型检查点。
- **数据集**：将开源自建的FlexiVoice-Instruct数据集。
- **Demo**：提供了在线示例页面：https://flexi-voice.github.io/。
- **复现材料**：附录A.10提供了详尽的训练超参数、硬件配置和训练时长；附录A.9说明了主观评价配置；全文详细描述了数据构建和评估流程。
- **论文中引用的开源项目**：Phi-3.5-mini-instruct (LLM), DualCodec (语音分词器), Vocos (声码器), Emotion2vec-Large (情感识别), CAM++ (说话人验证), Kimi-Audio-7B-Instruct (奖励模型)。

📌 **核心摘要**

1.  **问题**：在零样本文本转语音（TTS）中，同时用自然语言指令控制说话风格和用参考语音克隆音色时，存在“风格-音色-内容冲突”，模型容易忽略指令，而受到参考语音或文本内容中固有风格的干扰。
2.  **方法核心**：提出FlexiVoice，一个基于大语言模型（LLM）核心的零样本TTS系统。其创新点在于提出“渐进式后训练（PPT）”框架，分三步走：首先用多模态DPO让模型初步学会同时遵循指令和参考语音；然后用解耦GRPO，在冲突场景下强制模型分离风格与音色/内容；最后用指令GRPO，借助音频语言模型奖励，增强对复杂开放指令的泛化能力。
3.  **新在何处**：不同于以往简单地将指令和参考语音作为输入条件，FlexiVoice通过PPT框架，显式地将“条件化”问题转化为一个主动的“解耦”过程，并构建了大规模、高质量的指令-语音数据集FlexiVoice-Instruct作为支撑。
4.  **主要实验结果**：在自建的多模态解耦评估集上，FlexiVoice在英语/中文的“文本+参考语音”困难任务中，指令遵循准确率（ACC-I）分别达到78.2%/75.8%，远高于基线（如VoxInstruct为23.9%/18.7%）。在复杂指令基准InstructTTSEval上，平均准确率（英语79.3%，中文70.8%）超越所有开源基线，逼近Gemini-pro等闭源系统（80.3%/84.8%）。主观评价CMOS均为正，表明其表达力被人类评审认可。
    | 模型 | InstructTTSEval (EN) Avg. | InstructTTSEval (ZH) Avg. |
    | :--- | :---: | :---: |
    | Ground-truth | 84.3 | 82.5 |
    | Gemini-pro | 80.3 | 84.8 |
    | MiMo-Audio-7B-Instruct | 72.6 | 70.5 |
    | VoxInstruct | 50.4 | 47.5 |
    | **FlexiVoice** | **79.3** | **70.8** |
5.  **实际意义**：该系统为实现更自然、灵活的人机语音交互提供了有力工具，用户可通过自然语言描述所需情感、语速、语调等，并配合任意音色参考，生成定制化语音，在配音、虚拟助手、有声读物等领域有广阔应用前景。
6.  **局限性**：推理阶段涉及LLM自回归生成和流匹配，速度可能受硬件限制。虽然解决了主要冲突，但在极端风格转换时仍可能对参考语音的音色相似度造成轻微影响（SV分数略有下降）。

---

### 🥈 [MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control](/audio-paper-digest-blog/posts/2026-05-03-mambavoicecloning-efficient-and-expressive-text)

🔥 **8.5/10** | 前25% | #语音合成 | #扩散模型 #状态空间模型 | #语音克隆 #扩散模型

👥 **作者与机构**

- 第一作者：Sahil Kumar（叶史瓦大学数学系博士项目）
- 通讯作者：Youshan Zhang（滁州学院人工智能学院）
- 作者列表：
    - Sahil Kumar（叶史瓦大学数学系博士项目）
    - Namrataben Patel（叶史瓦大学数学系博士项目）
    - Honggang Wang（叶史瓦大学计算机科学与工程系）
    - Youshan Zhang（滁州学院人工智能学院）

💡 **毒舌点评**

**亮点**：这篇论文像一个严谨的“外科手术”，精准地针对现有Mamba-TTS混合架构中的Attention“残留”进行切除，并用门控融合和AdaLN等“微创缝合”技术进行优化，证明了纯SSM推理路径的可行性，实现细节堪称教科书级别。**短板**：尽管在控制变量下取得了统计显著的提升，但性能增益的绝对值（如MOS +0.07）略显温吞，且扩散解码器依然是那个无法绕开的“延迟黑洞”，使得整个工作的工程吸引力打了折扣——好比用顶级发动机（SSM编码器）去拉一辆老旧的蒸汽火车（扩散解码器）。

🔗 **开源详情**

- **代码**：论文提供了代码仓库链接：`https://github.com/sahilkumar15/MVC`。
- **模型权重**：论文中未提及是否公开预训练模型权重。
- **数据集**：论文使用的是公开数据集（LJSpeech, LibriTTS, VCTK, CSS10），但未提供数据集获取方式或预处理脚本。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：论文提供了非常充分的复现材料，包括：完整的训练算法（Algorithm 1）、详细的优化设置和超参数（附录C.2）、所有消融实验的配置细节（附录B.6, E.3）、基线模型的具体架构说明（表14）以及评估协议。
- **论文中引用的开源项目**：论文依赖 `phonemizer` 进行音素化，并对比了 `StyleTTS2`、`VITS`、`JETS` 等开源基线模型。声码器使用了 `HiFi-GAN` 和 `iSTFTNet`。

📌 **核心摘要**

1.  **问题**：传统基于Attention或RNN的TTS系统在推理阶段存在计算复杂度高、内存占用大、长序列处理不稳定以及流式部署困难等问题。现有Mamba-TTS混合系统虽引入SSM，但在推理时仍保留Attention模块，限制了其优势。
2.  **方法核心**：提出MambaVoiceCloning（MVC），一个在推理阶段条件建模路径完全基于状态空间模型（Mamba）的TTS系统。其包含三个核心SSM模块：(1) 门控双向Mamba文本编码器，用于建模文本；(2) 时间Bi-Mamba，用于节奏/时长对齐（训练时辅以一个轻量对齐器，推理时移除）；(3) 带AdaLN调制的表达性Mamba，用于韵律建模。系统固定使用StyleTTS2的扩散解码器和声码器。
3.  **创新之处**：与已往Mamba-TTS系统相比，MVC首次在推理时完全移除了注意力机制和显式RNN循环，实现了全SSM推理路径；引入了门控双向Mamba融合机制和AdaLN，提升了长文本韵律稳定性；进行了严格的容量匹配和协议控制实验，以隔离架构设计带来的影响。
4.  **主要实验结果**：在LJSpeech数据集上，MVC的MOS自然度达到4.22（相比StyleTTS2的4.15），MCD为4.91（最优），PESQ为3.85（最优），RTF为0.0169（最优），编码器参数减少至21M，吞吐量提升1.6倍。在VCTK零样本说话人和CSS10跨语言（西/德/法）测试中，MVC表现与或优于基线。在2-6分钟的长文本Gutenberg测试集上，MVC的MOS从短句的4.22仅微降至4.16，而StyleTTS2则从4.15降至3.91，显示了更强的稳定性。

| 模型 | MOS-N (↑) | MOS-S (↑) | F0 RMSE (↓) | MCD (↓) | WER (↓) | PESQ (↑) | RTF (↓) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **VITS** | 3.69 | 3.54 | 0.667 | 4.97 | 7.23% | 3.64 | 0.0211 |
| **StyleTTS2** | 4.15 | 4.03 | 0.651 | 4.93 | 6.50% | 3.79 | 0.0174 |
| **MVC (ours)** | 4.22 | 4.07 | 0.653 | 4.91 | 6.52% | 3.85 | 0.0169 |

*表：在LJSpeech数据集上的客观指标对比（来自论文Table 4）。*

5.  **实际意义**：证明了基于SSM的纯线性时间复杂度、有界激活的条件建模路径可以匹配甚至略微超越基于Attention的TTS质量，同时显著提升编码器效率和长文本处理稳定性，为构建高效、可部署、流式友好的TTS系统提供了新的架构选择。
6.  **主要局限性**：性能提升幅度相对温和；系统的最终延迟和生成质量仍严重依赖于扩散解码器，SSM编码器的优化无法根本解决这一瓶颈；模型在精细情感控制和多语言（仅英文训练）上仍有提升空间。

---

### 🥉 [Gogo: Group-wise granularity-ordered codec for stable and efficient speech generation](/audio-paper-digest-blog/posts/2026-05-03-gogo-group-wise-granularity-ordered-codec-for)

🔥 **8.5/10** | 前25% | #语音合成 | #流匹配 | #语音大模型 #低比特率

👥 **作者与机构**

- 第一作者：Weidong Chen (香港中文大学电子工程系)
- 通讯作者：Xixin Wu (香港中文大学电子工程系)
- 作者列表：Weidong Chen (香港中文大学电子工程系), Helen M. Meng (香港中文大学电子工程系), Xixin Wu (香港中文大学电子工程系)

💡 **毒舌点评**

亮点在于其提出的“分组粒度排序”量化范式巧妙地解决了语音编解码器在自回归友好性与重建质量之间的根本矛盾，并通过两阶段生成框架显著提升了长序列生成的稳定性。短板是其模型规模（基于Llama-3.2-1B）和47Hz的token率，在追求极致压缩或超大规模模型扩展方面仍有探索空间。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：`https://github.com/HappyColor/gogo`。
- 模型权重：论文未明确提及权重是否公开，但附录D和表格标题暗示训练细节和配置已给出，结合GitHub链接，大概率会开源。
- 数据集：训练使用Emilia英文子集，论文未说明其是否公开或如何获取。评估使用的LibriTTS和Seed-TTS test-en为公开数据集。
- Demo：提供在线演示页面：`https://happycolor.github.io/gogo`。
- 复现材料：论文提供了详尽的实现细节（第4节）、模型配置（附录C）、训练与推理细节（附录D）、评估指标定义（附录G）以及所有依赖的开源基线模型链接（附录E/F）。
- 论文中引用的开源项目：SoundStream, EnCodec, DAC, SpeechTokenizer, Mimi, SNAC, WavTokenizer, MagiCodec, X-codec2, TAAE, DualCodec, FireRedTTS-1S, F5-TTS, XTTS-v2, Llasa, CosyVoice 2, VoiceCraft, Vocos声码器, LLaMA, ConvNeXt V2等。

📌 **核心摘要**

1.  解决的问题：现有语音语言模型（SLM）所依赖的语音编解码器面临两难：帧级量化（如EnCodec）虽能高质量重建，但局部性强，不利于捕捉自回归建模所需的高层语义信息；语义增强的编解码器（如SpeechTokenizer）虽注入了高层信息，但帧级范式未变，且未考虑语音信息分布不均（如静音段），导致编码效率低下。
2.  方法核心：提出了 Gogo 编解码器和 GogoSpeech 两阶段SLM。Gogo将连续帧分组，并为每个组生成从粗到细、信息粒度排序的tokens（粗粒度token编码高层抽象，细粒度token恢复声学细节）。GogoSpeech第一阶段以极低token率（~14 Hz）生成“语音骨干”（粗粒度token），第二阶段逐步补充细粒度token以丰富细节。此外，设计了一个基于群组相对策略优化（GRPO） 训练的Token分配器，根据组复杂度自适应分配token预算。
3.  新在何处：(1) 打破了传统的帧级量化范式，提出“分组+粒度排序”的新量化单元与顺序；(2) 基于此特性设计了先“骨架”后“血肉”的两阶段生成架构，显著提升长序列稳定性；(3) 利用强化学习（GRPO）训练的分配器实现了对非均匀信息密度的自适应编码。
4.  主要实验结果：
    *   编解码器重建：在LibriTTS test-clean集上，Gogo（47 Hz）在多数指标（UTMOS、DNSMOS、SIM）上达到SOTA，甚至UTMOS（4.19）和DNSMOS（3.99）超过原始语音。
    *   零样本TTS：在Seed-TTS test-en集上，GogoSpeech（47 Hz）的SMOS（4.381）和CMOS（+1.832）均为最佳，在长语音生成稳定性上（SIM 0.725， WER 1.788）同样领先。
    *   效率提升：Token分配器将平均token率从47 Hz降至36 Hz，性能仅轻微下降（SMOS 4.253， CMOS +1.587）。
    *   关键消融实验：移除粒度排序机制（嵌套丢弃或损失平衡器）或ASR模块，会导致GogoSpeech性能显著下降（表7）。
5.  实际意义：该工作为构建高效、稳定且高质量的语音生成系统提供了新的技术路径。分组粒度排序的思路可能启发其他时序信号处理，GRPO训练的分配器为资源自适应分配提供了范例。
6.  主要局限性：(1) 流匹配解码器中的占位符（placeholder）偶尔会引入伪影；(2) 47 Hz的token率高于部分低比特率编解码器（如25 Hz）；(3) 基于Llama-3.2-1B的模型，其向更大规模LLM扩展的能力有待验证。

---

### 4. [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Residual Representations for Expressive End-to-End Speech Synthesis](/audio-paper-digest-blog/posts/2026-05-03-hierarchical-semantic-acoustic-modeling-via-semi)

🔥 **8.5/10** | 前25% | #语音合成 | #流匹配 #分层建模 | #流匹配 #分层建模

👥 **作者与机构**

- 第一作者：Yixuan Zhou（清华大学深圳国际研究生院）
- 通讯作者：Zhiyong Wu（清华大学深圳国际研究生院）
- 作者列表：Yixuan Zhou（清华大学深圳国际研究生院）、Guoyang Zeng（ModelBest Inc.）、Xin Liu（ModelBest Inc.）、Xiang Li（清华大学深圳国际研究生院）、Renjie Yu（清华大学深圳国际研究生院）、Ziyang Wang（ModelBest Inc.）、Runchuan Ye（清华大学深圳国际研究生院）、Weiyue Sun（ModelBest Inc.）、Jiancheng Gui（ModelBest Inc.）、Kehan Li（清华大学深圳国际研究生院）、Zhiyong Wu（清华大学深圳国际研究生院）、Zhiyuan Liu（清华大学计算机科学与技术系）

💡 **毒舌点评**

本文巧妙地将“离散化瓶颈”从一个被规避的缺点，转化为了实现端到端分层学习的有力工具（FSQ），这显示了出色的架构设计洞察力。但其高达100万小时以上的训练数据需求，可能让其优异性能在普通复现场景下大打折扣，凸显了当前TTS研究对“数据富人”的依赖。

🔗 **开源详情**

- **代码**：论文明确表示“我们将发布代码和模型以支持未来研究”（We will release code and models），并在摘要中提供了Demo页面链接（https://voxcpm.github.io/VoxCPM-demopage/）。具体代码仓库链接未在文中提供。
- **模型权重**：未提及公开权重的具体链接，但根据承诺，未来应会开源。
- **数据集**：使用了公开的Emilia数据集，但主要训练数据为内部数据集，未公开。
- **Demo**：提供了在线演示页面链接。
- **复现材料**：在附录中提供了详细的模型架构表（表5）、训练配置（表6）、超参数设置、评估指标说明等，复现信息非常充分。
- **论文中引用的开源项目**：提到了使用MiniCPM-4语言模型作为TSLM的初始化基础，并提到了Megatron训练框架。

📌 **核心摘要**

1.  **要解决的问题**：现有端到端TTS模型面临核心权衡：离散token表示稳定但牺牲表现力，连续表示保留细节但易产生误差累积。依赖预训练离散tokenizer的多阶段流水线则割裂了语义与声学建模，不利于端到端优化和表现力生成。
2.  **方法核心**：提出一种基于半离散残差表示的分层语义-声学建模框架（VoxCPM）。其核心是一个可微分的有限标量量化（FSQ）瓶颈，它自然地将信息流分离：一个文本语义语言模型（TSLM）专注于生成稳定的语义-韵律规划（骨架），一个残差声学模型（RALM）专注于恢复量化损失的细粒度声学细节。两者输出相加，共同指导一个基于流匹配的局部扩散解码器（LocDiT）生成最终语音潜在表示。
3.  **与已有方法相比新在哪里**：与离散token方法相比，避免了不可逆的信息损失和对外部tokenizer的依赖；与连续模型相比，通过FSQ瓶颈显式分离了任务，减轻了长序列误差累积；与多阶段流水线相比，实现了功能分离但架构统一的端到端训练。
4.  **主要实验结果**：在超过100万小时双语数据上训练的0.5B参数模型，在多个基准上达到开源SOTA。在SEED-TTS-EVAL上，英文WER 1.85%，中文CER 0.93%，说话人相似度SIM（EN）72.9% / （ZH）77.2%，显著优于多数开源基线。在更具挑战性的CV3-EVAL上同样表现优异。

    | 模型 | 参数量 | 训练数据(h) | EN WER↓ | EN SIM↑ | ZH CER↓ | ZH SIM↑ | Hard CER↓ |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | CosyVoice2 | 0.5B | 170K | 3.09 | 65.9 | 1.38 | 75.7 | 6.83 |
    | IndexTTS 2 | 1.5B | 55K | 2.23 | 70.6 | 1.03 | 76.5 | 7.12 |
    | **VoxCPM** | **0.5B** | **1.8M** | **1.85** | **72.9** | **0.93** | **77.2** | **8.87** |

    *表：SEED-TTS-EVAL基准主要结果摘录*

    消融研究证实：1）纯连续模型（无FSQ）在困难样本上CER高达24.92%，表明任务纠缠导致不稳定；2）FSQ维度是重要权衡，256维取得最佳性能；3）RALM的残差连接是性能关键。

5.  **实际意义**：为构建统一、高效且表现力强的端到端TTS系统提供了新的技术范式，其分层设计思想可应用于其他生成任务。
6.  **主要局限性**：性能高度依赖大规模训练数据（100万小时），模型通用性和数据效率有待进一步验证；作为0.5B模型，在某些主观自然度评测上略逊于个别更大模型（如IndexTTS2）。

---

### 5. [VibeVoice: Expressive Podcast Generation with Next-Token Diffusion](/audio-paper-digest-blog/posts/2026-05-03-vibevoice-expressive-podcast-generation-with-next)

✅ **7.5/10** | 前25% | #语音合成 | #扩散模型 | #大语言模型 #零样本

👥 **作者与机构**

- 第一作者：Zhiliang Peng (Microsoft Research) （*号标注为Core contributor）
- 通讯作者：Furu Wei (Microsoft Research) （菱形标注）
- 作者列表：Zhiliang Peng (Microsoft Research), Jianwei Yu (Microsoft Research), Wenhui Wang (Microsoft Research), Yaoyao Chang (Microsoft Research), Yutao Sun (Microsoft Research), Li Dong (Microsoft Research), Yi Zhu (Microsoft Research), Weijiang Xu (Microsoft Research), Hangbo Bao (Microsoft Research), Zehua Wang (Microsoft Research), Shaohan Huang (Microsoft Research), Yan Xia (Microsoft Research), Furu Wei (Microsoft Research)。注：论文中所有作者单位均为Microsoft Research。

💡 **毒舌点评**

亮点在于其精巧的系统设计：用解耦的超低帧率声学/语义分词器“榨干”了长序列的计算预算，再用LLM+扩散头的混合范式优雅地平衡了语义连贯与声学保真。但论文所构建的“播客生成”闭环，其公开评估集（VIBEVOICE-Eval）与真实世界未清洗播客的质量和多样性差距，以及模型在面对更复杂的、非预设对话结构时的鲁棒性，仍是其宣称“表达性”和“自然感”需要经受实践检验的短板。

🔗 **开源详情**

-   **代码**：提供GitHub链接：https://github.com/microsoft/VibeVoice
-   **模型权重**：论文中声明“Code and checkpoint are available at...”，表明提供检查点下载。
-   **数据集**：论文提及构建了**VibeVoice-Eval**评估集（108个样本，约28.9小时），但未说明是否公开。训练数据为内部伪标注播客集合，未公开。
-   **Demo**：论文中未提及在线演示链接。
-   **复现材料**：提供极其详细的训练超参数表（表9）、数据处理流水线细节（附录A）、评估工具列表（表4），以及模型不同规模的训练配置说明。
-   **论文中引用的开源项目**：Silero VAD、Whisper-large-v3-turbo、Nemo ASR、WeSpeaker、Qwen-Audio（评估工具）、Seed-TTS-eval（评估工具）。
-   论文明确提供了开源代码和权重链接，并给出了充分的复现细节。

📌 **核心摘要**

本文针对传统TTS系统难以生成长篇、多说话人、自然对话音频（如播客）的问题，提出了VibeVoice框架。其核心方法是采用两个超低帧率（7.5Hz）的连续语音分词器（声学分词器基于σ-VAE，语义分词器通过ASR代理任务训练）来获得高效且信息丰富的混合表示，并将其输入基于LLM（Qwen2.5）的下一token扩散生成框架。与已有方法相比，VibeVoice的新颖之处在于：1）首次将语音表征压缩至7.5Hz仍保持高保真度；2）通过解耦的声学/语义表示显式支持长序列建模；3）开发了自动化数据标注流水线以利用原始播客数据训练。实验表明，在主观评估中VibeVoice-7B获得最高平均分（3.76），超越包括Google Gemini 2.5 Pro TTS在内的多个强基线；在客观评估的VibeVoice-Eval数据集上，其在长时长（12-30分钟）和多说话人（4人）场景下的词错率（WER-W: 1.24）和说话人相似度（SIM-O: 0.75）均显著优于对比模型。该工作标志着端到端生成式播客系统的重要进展。其主要局限性在于：评估依赖于其自建数据集，且模型性能仍受限于训练数据的规模和多样性。

---

### 6. [SpeechJudge: Towards Human-Level Judgment for Speech Naturalness](/audio-paper-digest-blog/posts/2026-05-03-speechjudge-towards-human-level-judgment-for)

✅ **7.5/10** | 前25% | #语音合成 | #强化学习 | #数据集 #基准测试

👥 **作者与机构**

- 第一作者：Xueyao Zhang（香港中文大学（深圳））
- 通讯作者：论文中标注为Zhizheng Wu（未明确标注“通讯作者”，但根据作者列表后的†符号判断）。
- 作者列表：Xueyao Zhang（香港中文大学（深圳）），Chaoren Wang（香港中文大学（深圳）），Huan Liao（香港中文大学（深圳）），Ziniu Li（香港中文大学（深圳）），Yuancheng Wang（香港中文大学（深圳）），Li Wang（香港中文大学（深圳）），Dongya Jia（字节跳动 Seed），Yuanzhe Chen（字节跳动 Seed），Xiulin Li（DataBaker Technology），Zhuo Chen（字节跳动 Seed），Zhizheng Wu（香港中文大学（深圳）/深圳湾区实验室/澳门城市大学/Amphion Technology Co., Ltd）

💡 **毒舌点评**

**亮点**：在语音合成领域，首次系统性地构建了大规模（99K对）且聚焦于“自然度”的人类偏好数据集，并配套提出了一个经SFT+RL训练的、支持CoT推理和测试时扩展的生成式奖励模型（GRM），填补了该方向从数据到评估工具的关键空白。**短板**：评估基准（SpeechJudge-Eval）与训练数据同源且经过筛选，其挑战性可能被高估；提出的GRM虽然优于BTRM，但在处理“干净但机械”与“略有噪声但生动”这类复杂权衡时仍存在已知失败案例。

🔗 **开源详情**

- **代码**：论文中提供代码仓库链接：https://github.com/AmphionTeam/SpeechJudge
- **模型权重**：论文中提及将发布训练好的SpeechJudge-GRM模型检查点。
- **数据集**：论文中提及将发布SpeechJudge-Data语料库、SpeechJudge-Eval基准数据集。
- **Demo**：论文中提供音频样本展示网站：https://speechjudge.github.io/
- **复现材料**：论文附录中提供了详细的数据构建协议、标注指南、实验设置（如LoRA配置、训练超参数），复现性信息充分。
- **论文中引用的开源项目**：SpeechJudge-GRM基于**Qwen2.5-Omni-7B**（Xu et al., 2025）。SFT阶段使用**Gemini-2.5-Flash**生成数据。RL训练使用**ms-swift**工具包。下游TTS实验基线模型基于**Qwen2.5-0.5B**。数据构建中使用了**DeepSeek-V3**进行文本校正与生成。

📌 **核心摘要**

1.  **问题**：语音合成领域缺乏大规模、聚焦于整体“自然度”的人类偏好反馈数据集，阻碍了与人类感知真正对齐的模型的发展与评估。
2.  **方法核心**：提出SpeechJudge套件，包含三部分：a) **SpeechJudge-Data**：使用多种先进零样本TTS模型生成99K对语音，由人类标注清晰度和自然度偏好。b) **SpeechJudge-Eval**：基于高一致性样本构建的自然度判断基准。c) **SpeechJudge-GRM**：一个基于Qwen2.5-Omni-7B的生成式奖励模型，通过两阶段训练：SFT（使用教师模型Gemini-2.5-Flash生成的CoT数据）和RL（GRPO算法，以人类偏好为可验证奖励）。
3.  **创新点**：1）构建了首个大规模、多语言、多风格的语音自然度人类偏好数据集。2）设计了专门的自然度判断评估基准，揭示了现有方法（包括强AudioLLM）的局限性。3）提出了经SFT+RL训练的GRM，它不仅能输出判断，还能提供CoT推理过程，并支持通过多数投票进行推理时性能扩展。
4.  **主要实验结果**：
    *   **评估基准**：在SpeechJudge-Eval上，最强闭源模型Gemini-2.5-Flash准确率<70%，凸显任务挑战性。
    *   **模型对比**：SpeechJudge-GRM（SFT+RL）达到77.2%准确率，超过经典BTRM（72.7%）；通过多数投票（@10）可进一步提升至79.4%。
    *   **下游应用**：将GRM用于高自然度样本选择和TTS模型后训练的奖励函数，均提升了主观自然度评价（详见图5、图6）。
5.  **实际意义**：提供了可复用的数据、基准和模型，可用于客观评估语音合成系统的自然度，并能直接作为奖励函数指导TTS模型的偏好对齐训练，推动了语音生成领域的RLHF发展。
6.  **主要局限性**：1）数据集和标注者主要反映中英文双语听众偏好，对其他语言覆盖不足。2）自然度标注为句子级，无法捕捉细粒度局部瑕疵。3）GRM的CoT能力部分继承自教师模型（Gemini），可能存在偏见，且未对中间推理过程进行大规模人工验证。

---

### 7. [Toward Complex-Valued Neural Networks for Waveform Generation](/audio-paper-digest-blog/posts/2026-05-03-toward-complex-valued-neural-networks-for)

✅ **7.5/10** | 前25% | #语音合成 | #生成模型 | #信号处理 #波形生成

👥 **作者与机构**

- 第一作者：Hyung-Seok Oh (高丽大学人工智能系)
- 通讯作者：Seong-Whan Lee (高丽大学人工智能系)
- 作者列表：Hyung-Seok Oh (高丽大学人工智能系)， Deok-Hyeon Cho (高丽大学人工智能系)， Seung-Bin Kim (高丽大学人工智能系)， Seong-Whan Lee (高丽大学人工智能系)

💡 **毒舌点评**

论文的最大亮点在于系统性地将复数值神经网络引入iSTFT声码器的生成器和鉴别器，提出了一个优雅且理论上更合理的技术框架，其分块矩阵优化方案也展现了良好的工程实践价值。主要短板在于，尽管实验充分，但论文对于“复数建模”为何优于“实数建模+增大参数”的解释仍停留在“能捕获实虚部相关性”的层面，缺乏更直观的分析或可视化证据来彻底说服持怀疑态度的读者，且复数值运算带来的显存与计算开销问题在实际部署中仍是需要权衡的现实挑战。

🔗 **开源详情**

- **代码**：论文提供了官方代码仓库链接：`https://hs-oh-prml.github.io/ComVo/`。
- **模型权重**：论文中提及提供了代码，但未明确说明是否公开预训练的模型权重文件。
- **数据集**：使用公开的LibriTTS和MUSDB18-HQ数据集，论文中未提供自定义数据集。
- **Demo**：论文提供了音频样本演示页面，链接在代码仓库主页。
- **复现材料**：论文在附录中提供了非常详尽的训练超参数表（表20）、评估指标的实现来源（表18）、所有对比基线的官方实现来源（表17），以及分块矩阵计算的详细数学证明（附录D）和速度对比实验（附录E, F, G）。复现信息非常充分。
- **论文中引用的开源项目**：HiFi-GAN, BigVGAN, Vocos, iSTFTNet的开源实现；`auraloss`（用于MR-STFT损失）；`complextorch`（用于对比高斯乘法技巧）；UTMOS, PESQ, CARGAN相关评估工具。

📌 **核心摘要**

1. **解决的问题**：当前基于iSTFT的声码器（如Vocos）虽高效，但使用实数值神经网络处理复频谱图，将实部和虚部分开处理，这破坏了频谱系数固有的复数值结构，限制了模型对幅度和相位耦合关系的建模能力。
2. **方法核心**：提出ComVo，一个完全在复数值域工作的GAN声码器。其生成器和鉴别器（cMRD）均采用原生复数值卷积、归一化等操作。引入了相位量化层（Phase Quantization）作为归纳偏置来稳定训练，并设计了分块矩阵计算方案，将复数运算融合为单次矩阵乘法以提升训练效率。
3. **创新之处**：据称是首个将复数值网络同时应用于iSTFT声码器生成器与鉴别器的工作；提出了针对复数值的相位量化层；设计了能加速训练的分块矩阵计算方案。相比实数值基线，ComVo在模型参数量相近的情况下，通过更合理的复数域参数化取得了更好的效果。
4. **主要实验结果**：在LibriTTS和MUSDB18-HQ数据集上，ComVo在多项客观指标（UTMOS, MR-STFT, PESQ等）上超越了HiFi-GAN、iSTFTNet、BigVGAN、Vocos等强大基线。在端到端TTS测试中也表现最佳。消融实验表明，复数值生成器和鉴别器的组合（GCDC）带来最大提升，相位量化（Nq=128）能改善感知质量，分块矩阵方案将训练时间缩短25%。
5. **实际意义**：为高质量、低延迟的波形生成提供了一种新思路。ComVo可直接替换现有TTS系统中的声码器以提升合成语音质量，并且其复数域处理框架可能推广到其他需要处理复数信号的音频任务。
6. **主要局限性**：当前实现采用split设计（如对实虚部分别应用hinge loss），并非“完全”复数处理；复数值网络的内存占用约为实数值的两倍；多GPU分布式训练优化不足，论文仅报告了单GPU结果；部分创新（如相位量化）的有效性可能依赖于特定的网络架构。

---

### 8. [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-03-flexicodec-a-dynamic-neural-audio-codec-for-low)

✅ **7.5/10** | 前25% | #语音合成 | #自回归模型 | #音频生成 #预训练

👥 **作者与机构**

- 第一作者：Jiaqi Li（香港中文大学（深圳）；Amphion Technology Co., Ltd.）
- 通讯作者：未说明
- 作者列表：Jiaqi Li（香港中文大学（深圳）; Amphion Technology Co., Ltd.）、Yao Qian（Microsoft, USA）、Yuxuan Hu（Microsoft, USA）、Leying Zhang（上海交通大学）、Xiaofei Wang（Microsoft, USA）、Heng Lu（Microsoft, USA）、Manthan Thakker（Microsoft, USA）、Jinyu Li（Microsoft, USA）、Sheng Zhao（Microsoft, USA）、Zhizheng Wu（香港中文大学（深圳）；深圳湾区实验室；澳门城市大学；Amphion Technology Co., Ltd.）

💡 **毒舌点评**

**亮点：** 动态帧率分配是个聪明的设计，它让编解码器能像人说话一样“看菜下饭”，在音素密集处多给点预算，在静音或长元音处节省点，这比一刀切的固定帧率更贴合语音信号的非平稳特性，在超低帧率（6.25Hz）下依然能保住不错的语义信息（WER 4.15%），这很不容易。**短板：** 虽然效果不错，但整体架构对预训练ASR模型（SenseVoice-Small）有强依赖，这相当于给你的编解码器请了个“语义顾问”，一旦离开这个顾问（比如换到其他语言或领域），模型的语义编码能力就可能打折扣，论文在多语言实验中的表现也印证了这一点。此外，动态帧率虽然灵活，但引入了额外的帧长属性存储和动态合并/解合并操作，增加了系统的复杂性和部署时的工程考量。

🔗 **开源详情**

- **代码**：论文提供了代码仓库链接：`https://github.com/amphionteam/flexicodec`。
- **模型权重**：论文中未明确提及是否公开预训练模型权重链接。但根据GitHub仓库的常规做法，很可能随代码一同发布。
- **数据集**：训练使用的LibriLight-Large、评测使用的LibriSpeech和TIMIT均为公开标准数据集，论文提供了获取信息的引用。
- **Demo**：提供了在线音频演示网站：`https://flexicodec.github.io`。
- **复现材料**：论文详细描述了训练数据、损失函数、优化器、学习率、批大小、训练步数、硬件环境等几乎所有关键复现细节，并在附录中提供了更多配置信息。
- **论文中引用的开源项目**：论文依赖或比较了多个开源项目，包括：
    - **编解码器/模型**：DAC, DualCodec, Encodec, SpeechTokenizer, Mimi, WavTokenizer, TS3-Codec, SNAC, TaDiCodec, XY-Tokenizer。
    - **SSL/ASR模型**：HuBERT, WavLM, w2v-bert-2, SenseVoice-Small, Whisper。
    - **语音生成/理解工具包**：Amphion。
    - **其他**：Vocos (vocoder), E2TTS测试套件。

📌 **核心摘要**

1.  **解决的问题：** 现有神经音频编解码器在推向极低帧率（如6.25Hz、8.3Hz）时，会因语义-声学解耦不足和固定下采样丢失瞬态语音细节，导致语义信息严重损失。
2.  **方法核心：** 提出FlexiCodec，一个动态帧率的神经音频编解码器。其核心是**基于ASR特征引导的动态帧合并机制**，能够自适应地将语义相似的帧合并，从而在信息稀疏区域使用更少的帧。同时，采用**ASR特征辅助的双流编码架构**（语义流使用预训练ASR编码器，声学流使用传统编解码器编码器）和**Transformer瓶颈**来增强表示与重构能力。
3.  **新在何处：** 与之前工作的主要不同在于：(1) 首次在**低于10Hz**的平均帧率下探索高质量音频编解码；(2) 引入了**内容自适应的动态帧率分配**，而非固定帧率；(3) 使用**任务导向更强的ASR特征**而非通用SSL特征来指导语义编码和帧合并；(4) 单一模型支持**推理时可控的连续帧率**（3-12.5Hz）。
4.  **主要实验结果：** 在LibriSpeech测试集上，FlexiCodec在6.25Hz、8.3Hz和12.5Hz平均帧率下，其语义信息保持（基于RVQ-1重建的WER）和音频重构质量均优于重训练的基线系统（DAC, DualCodec）。例如，在最具挑战性的6.25Hz下，FlexiCodec的RVQ-1 WER为4.15%，远低于最佳基线DualCodec的31.5%。动态帧率机制被证明有效：其帧率与输入语音的音素率呈强正相关（Pearson r=0.775）。在下游TTS任务中，FlexiCodec-TTS（AR阶段使用6.25Hz FlexiCodec）在保持竞争力的语音质量（NMOS 3.32, QMOS 3.40）同时，实现了相比CosyVoice AR阶段**7.3倍**的加速。
5.  **实际意义：** 为构建高效、低延迟的语音大模型和TTS系统提供了新的基础组件。低帧率能显著缩短序列长度，降低自回归模型的计算成本；动态可控帧率则为资源自适应应用（如边缘设备、可变质量传输）提供了灵活性。
6.  **主要局限性：** 模型性能对预训练的ASR模型（SenseVoice-Small）依赖性强，可能限制其在缺乏此类模型的语言或领域的泛化能力。动态帧率增加了系统复杂性。虽然在低帧率下语义保持较好，但全量RVQ（RVQ1:8）的声学指标（PESQ, SIM）相比12.5Hz基线有下降，表明声学细节在极低帧率下仍会受损。

---

