---
title: "ICLR 2026 - 语音合成 论文列表"
date: 2026-05-02
draft: false
tags: ["语音合成"]
categories: [iclr-2026]
description: "共 7 篇 ICLR 2026 语音合成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音合成

共 **7** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-02-flexicodec-a-dynamic-neural-audio-codec-for-low) | 8.8分 | 前10% |
| 🥈 | [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS](/audio-paper-digest-blog/posts/2026-05-02-flexivoice-enabling-flexible-style-control-in) | 8.5分 | 前25% |
| 🥉 | [VibeVoice: Expressive Podcast Generation with Next-Token Dif](/audio-paper-digest-blog/posts/2026-05-02-vibevoice-expressive-podcast-generation-with-next) | 8.5分 | 前25% |
| 4. | [Gogo: Group-wise granularity-ordered codec for stable and ef](/audio-paper-digest-blog/posts/2026-05-02-gogo-group-wise-granularity-ordered-codec-for) | 8.5分 | 前25% |
| 5. | [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Re](/audio-paper-digest-blog/posts/2026-05-02-hierarchical-semantic-acoustic-modeling-via-semi) | 8.5分 | 前25% |
| 6. | [Toward Complex-Valued Neural Networks for Waveform Generatio](/audio-paper-digest-blog/posts/2026-05-02-toward-complex-valued-neural-networks-for) | 7.5分 | 前25% |
| 7. | [From Natural Alignment to Conditional Controllability in Mul](/audio-paper-digest-blog/posts/2026-05-02-from-natural-alignment-to-conditional) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-02-flexicodec-a-dynamic-neural-audio-codec-for-low)

🔥 **8.8/10** | 前10% | #语音合成 | #流匹配 | #流式处理 #模型评估

👥 **作者与机构**

- 第一作者：Jiaqi Li（The Chinese University of Hong Kong, Shenzhen; Amphion Technology Co., Ltd.）
- 通讯作者：未明确说明（论文未明确指定通讯作者）
- 作者列表：
  - Jiaqi Li（The Chinese University of Hong Kong, Shenzhen; Amphion Technology Co., Ltd.）
  - Yao Qian（Microsoft, USA）
  - Yuxuan Hu（Microsoft, USA）
  - Leying Zhang（Shanghai Jiao Tong University）
  - Xiaofei Wang（Microsoft, USA）
  - Heng Lu（Microsoft, USA）
  - Manthan Thakker（Microsoft, USA）
  - Jinyu Li（Microsoft, USA）
  - Sheng Zhao（Microsoft, USA）
  - Zhizheng Wu（The Chinese University of Hong Kong, Shenzhen; Shenzhen Loop Area Institute; City University of Macau; Amphion Technology Co., Ltd.）

💡 **毒舌点评**

FlexiCodec的核心亮点在于将“动态帧率”的概念系统化地引入超低比特率音频编解码，并巧妙地利用ASR特征进行语义引导，实验设计严谨，在6.25Hz的极致压缩下仍能保持可观的语义清晰度，对语音大模型的效率提升极具吸引力。不过，其多语言泛化能力在零样本设置下几乎崩溃，仅能通过微调部分缓解，这暴露了其当前方案对特定语言（英语）特征的强依赖，限制了其作为通用语音基础模型组件的适用范围。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/amphionteam/flexicodec
- 模型权重：论文中未明确提及是否公开预训练模型权重，但提供了代码仓库和演示链接，暗示可能公开或未来公开。
- 数据集：训练使用Librilight-Large（公开），评估使用LibriSpeech, TIMIT, Emilia（部分公开）。论文未提及提供新数据集。
- Demo：提供在线音频演示：https://flexicodec.github.io
- 复现材料：提供了详尽的训练数据、配置、超参数、模型架构（附录G, H），以及消融实验设置，复现指引清晰。
- 论文中引用的开源项目：SenseVoice-Small (ASR模型), HuBERT (ASR探测), WavLM (说话人验证), Vocos (声码器), HiFi-GAN (判别器), Amphion (TTS系统框架)。

📌 **核心摘要**

1. 问题：现有神经音频编解码器在追求极低帧率（<12.5Hz）时，会严重丢失语义信息，主要原因是固定采样率无法适应语音中动态的音素复杂度，且语义与声学信息解耦不充分。
2. 方法：提出FlexiCodec，一个动态帧率神经音频编解码器。其核心是采用ASR模型提取的语义特征来指导帧合并过程，自适应地对信息稀疏区域（如长元音、静音）进行合并，从而在保持语义的前提下降低平均帧率。架构采用ASR特征与波形特征的双流编码，分别通过有限标量量化（FSQ）和残差向量量化（RVQ）得到语义token和声学token。
3. 创新点：与已有固定帧率编码器（如Mimi, DualCodec）不同，FlexiCodec实现了：a）动态帧率：根据语音内容自适应分配时间分辨率；b）推理时可控帧率：通过调整阈值τ在3Hz-12.5Hz间灵活选择；c）ASR语义增强：利用预训练ASR特征而非SSL特征来引导编码，提升语义保留。
4. 主要实验结果：
   - 编解码器评估：在平均帧率为6.25Hz时，FlexiCodec的RVQ-1 token重建WER仅为4.15%（表5），远低于同等条件下重新训练的DualCodec（31.5%）和DAC（88.2%），接近12.5Hz DualCodec的5.93%水平，且音频质量（PESQ、UTMOS）保持有竞争力。
   - 动态帧率消融：动态帧率相比固定帧率在8.3Hz和6.25Hz下分别带来19%和26%的RVQ-1 WER相对降低（表3），证明了其在语义保留上的优势。
   - 下游TTS：基于FlexiCodec的TTS系统（FlexiCodec-TTS）在使用6.25Hz AR和50Hz NAR时，实现了3.2%的WER和3.32的NMOS（表6），与CosyVoice（WER 3.2%, NMOS 3.17）性能相当，同时AR阶段速度提升7.3倍。
5. 实际意义：为语音大模型（如TTS、多模态模型）提供了一个高效、灵活的语音离散化表示方案，能显著缩短序列长度，降低计算成本，其可控帧率特性允许在质量与效率间灵活权衡。
6. 主要局限性：a）多语言泛化弱：在零样本设置下，对中文、日文等非英语语言的语义token几乎失效（WER极高），需为目标语言微调（表12）。b）依赖预训练模型：性能依赖于预训练的SenseVoice-Small ASR模型，引入了额外依赖。c）声学质量瓶颈：在极低帧率下，声学细节的恢复仍受限，动态帧率对声学质量（PESQ等）提升有限（表4）。

---

### 🥈 [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions](/audio-paper-digest-blog/posts/2026-05-02-flexivoice-enabling-flexible-style-control-in)

🔥 **8.5/10** | 前25% | #语音合成 | #强化学习

👥 **作者与机构**

- 第一作者：Dekun Chen（香港中文大学，深圳）
- 通讯作者：未明确说明（论文末尾提供了Dekun Chen和Zhizheng Wu的邮箱，但未标注“通讯作者”字样）
- 作者列表：Dekun Chen（香港中文大学，深圳）、Xueyao Zhang（香港中文大学，深圳）、Yuancheng Wang（香港中文大学，深圳）、Kenan Dai（华为技术有限公司）、Li Ma（华为技术有限公司）、Zhizheng Wu（香港中文大学，深圳；深圳环域研究院；澳门城市大学；Amphion Technology Co., Ltd.）

💡 **毒舌点评**

这篇论文最亮眼的是其“渐进式后训练”框架，像一个精心设计的课程表，一步步教会模型在指令、音色和内容三者间保持清醒，实验也证明其解耦能力确实碾压同类基线。但短板在于，对非情感类精细风格（如口音、个性）的验证主要依赖外部基准测试，自身构造的验证集场景相对单一，且核心的复杂指令奖励模型依赖于一个未经深入验证的外部大模型（Kimi-Audio），这使得整个训练管线的“闭源可控性”打了折扣。

🔗 **开源详情**

- 代码：论文中未提及具体代码链接，但表示会发布所有训练和推理代码。
- 模型权重：论文中未提及已公开的模型权重链接，但表示会发布模型检查点。
- 数据集：论文表示会发布FlexiVoice-Instruct数据集。
- Demo：提供了在线演示网站 https://flexi-voice.github.io/。
- 复现材料：附录（A.1-A.11）提供了极其详尽的复现细节，包括模型结构、数据处理流程、训练策略、超参数设置、硬件配置和评估协议。
- 论文中引用的开源项目：DualCodec (Li et al., 2025), Phi-3.5-mini-instruct (Abdin et al., 2024), Flow Matching (Lipman et al., 2023), Vocos (Siuzdak, 2023), Emotion2vec-Large (Ma et al., 2024), CAM++ (Wang et al., 2023), Kimi-Audio-7B-Instruct (Ding et al., 2025), Deepseek-V3 (Liu et al., 2024a), Emilia (He et al., 2024), ParaSpeechCaps (Diwan et al., 2025), NVSpeech (Liao et al., 2025)。
- 总结：论文中详细阐述了开源计划，并提供了大量可复现的技术细节，但截至目前，公开发布的主要是演示页面。

📌 **核心摘要**

本文旨在解决零样本语音合成（TTS）中同时遵循自然语言风格指令和保持音色一致性的“风格-音色-内容冲突”问题。核心方法是提出FlexiVoice系统及其创新的“渐进式后训练”框架。该框架通过三个阶段逐步增强模型能力：1）多模态DPO建立对指令和参考语音的基本对齐；2）解耦GRPO通过构建冲突场景（如快乐指令对悲伤参考）来强制模型分离风格与音色/内容；3）指令GRPO使用音频语言模型奖励来提升对复杂、开放式指令的遵循能力。此外，论文构建了大规模指令-语音数据集FlexiVoice-Instruct。实验结果表明，在多模态控制解耦评估（英文与中文）的多个困难设置中，FlexiVoice在指令遵循准确率（ACC-I）上大幅领先基线（例如，在英文TR-hard任务上达到78.2% vs. VoxInstruct的49.7%），同时保持了高说话人验证准确率（SV）。在复杂指令跟随基准InstructTTSEval上，FlexiVoice平均准确率达79.3%（英文）和70.8%（中文），显著超越所有开源基线，并接近商业闭源系统。该工作的实际意义在于提供了一个能灵活、精准控制语音风格的零样本TTS框架。主要局限性在于其风格控制能力的验证仍以情感和预定义指令集为主，对极其抽象或文化特定指令的泛化能力有待进一步证明，且核心训练依赖外部大模型作为奖励模型，成本较高。

---

### 🥉 [VibeVoice: Expressive Podcast Generation with Next-Token Diffusion](/audio-paper-digest-blog/posts/2026-05-02-vibevoice-expressive-podcast-generation-with-next)

🔥 **8.5/10** | 前25% | #语音合成 | #扩散模型 | #语音大模型 #多说话人

👥 **作者与机构**

- 第一作者：Zhiliang Peng（Microsoft Research）
- 通讯作者：Furu Wei（Microsoft Research）
- 作者列表：Zhiliang Peng（Microsoft Research）、Jianwei Yu（Microsoft Research）、Wenhui Wang（Microsoft Research）、Yaoyao Chang（Microsoft Research）、Yutao Sun（Microsoft Research）、Li Dong（Microsoft Research）、Yi Zhu（Microsoft Research）、Weijiang Xu（Microsoft Research）、Hangbo Bao（Microsoft Research）、Zehua Wang（Microsoft Research）、Shaohan Huang（Microsoft Research）、Yan Xia（Microsoft Research）、Furu Wei（Microsoft Research）

💡 **毒舌点评**

这篇论文通过超低帧率的连续语音分词器和下一个token扩散框架，为“像人一样聊一小时”这个语音生成领域的终极难题提供了一个工程上非常扎实且效果显著的方案，尤其在长篇、多人对话生成上取得了SOTA。但论文的“多说话人”实验部分，对于超过4人或存在激烈抢话、声音重叠等极端复杂对话场景的鲁棒性验证略显不足，现实世界的播客可能比测试集更“混乱”。

🔗 **开源详情**

*   代码：提供代码仓库链接 `https://github.com/microsoft/VibeVoice`。
*   模型权重：提及检查点可用（checkpoint are available），但未明确是否全部公开。代码仓库链接暗示可能包含预训练权重。
*   数据集：创建了VIBEVOICE-Eval评测集（108个样本，约28.9小时），并说明了构建方法。论文未提及是否公开该评测集。
*   Demo：论文中未提及在线演示链接。
*   复现材料：提供了详细的训练超参数（表9）、分词器和模型架构细节、数据处理流程描述（附录A）、以及使用的主要开源工具列表（表4）。复现信息非常充分。
*   引用的开源项目：Silero VAD, Whisper-large-v3-turbo, Nemo ASR, WeSpeaker (vblinkp模型), 以及用于评估的WER和SIM-O工具包。

📌 **核心摘要**

本文旨在解决传统文本转语音（TTS）系统在生成长篇幅、多说话人、自然对话式音频（如播客）时面临的可扩展性、说话人一致性以及自然轮替等挑战。核心方法VibeVoice提出了一个新颖的框架，其技术核心在于两个方面：1）设计了工作在7.5Hz超低帧率下的连续声学与语义分词器，以高效且高保真地压缩和表示语音；2）采用了基于下一个token扩散的端到端大语言模型（LLM）架构，结合混合语音表示（声学+语义）进行生成。与已有方法相比，该框架新在能以零样本方式端到端生成长达90分钟、多达4个说话人的对话，显著超越了以往模型在生成时长和说话人数量上的限制，并能自然地生成呼吸、咂嘴等副语言特征。主要实验结果显示，VibeVoice-7B在主观评测（真实感、丰富度、偏好度均最高）和客观评测（WER-W 1.29, SIM-O 0.692）上均优于包括Google Gemini 2.5 Pro TTS和ElevenLabs v3 alpha在内的多个强基线模型。其实际意义在于为自动化、高质量的播客内容创作提供了可行的技术路径。主要局限性可能在于对更极端、更混乱的对话场景（如多人同时发言）的处理能力未被验证，且模型规模较大（7B参数）。

---

### 4. [Gogo: Group-wise granularity-ordered codec for stable and efficient speech generation](/audio-paper-digest-blog/posts/2026-05-02-gogo-group-wise-granularity-ordered-codec-for)

🔥 **8.5/10** | 前25% | #语音合成 | #流匹配 | #自回归模型 #零样本

👥 **作者与机构**

- 第一作者：Weidong Chen (香港中文大学电子工程系)
- 通讯作者：Xixin Wu (香港中文大学电子工程系)
- 作者列表：Weidong Chen (香港中文大学电子工程系), Helen M. Meng (香港中文大学电子工程系), Xixin Wu (香港中文大学电子工程系)

💡 **毒舌点评**

论文的亮点在于巧妙地将“组级量化”与“粒度排序”结合，从根源上解决了语音编解码器既要“高层抽象利于建模”又要“低层细节保证音质”的矛盾，设计思路清晰且优雅。但短板在于其框架组件繁多（编解码器、两阶段生成模型、额外训练的分配器），训练流程复杂，且token分配器的优化与主模型分离，可能并非全局最优，工程实现的门槛不低。

🔗 **开源详情**

- 代码：论文中未提及官方代码仓库链接。
- 模型权重：未提及公开预训练模型权重。
- 数据集：训练使用Emilia（英文子集），评估使用LibriTTS和Seed-TTS，均为已有公开数据集。论文未提及提供新的数据集。
- Demo：提供了在线演示链接：https://happycolor.github.io/gogo。
- 复现材料：附录（A-M）提供了极其详细的实现细节、训练配置、评估设置、消融实验说明和可视化，复现信息非常充分。
- 论文中引用的开源项目：Vocos (声码器), LLaMA-3.2-1B-Instruct (SLM基础模型), PyTorch等常见框架。对比实验中引用了EnCodec, DAC, SpeechTokenizer, Mimi, SNAC, WavTokenizer等众多开源编码器模型。

📌 **核心摘要**

本文旨在解决当前语音语言模型中核心的语音编解码器面临的双重挑战：传统帧级量化难以捕获高层语义信息，以及固定比特率分配忽略了语音信号信息分布的不均匀性。为此，作者提出了Gogo编解码器，它创新性地将连续帧分组，并为每组生成从粗到细、粒度有序的令牌，粗令牌编码高层抽象，细令牌逐步恢复声学细节。基于此，设计了GogoSpeech两阶段语音生成模型：第一阶段以极低令牌率生成高层语音骨架，第二阶段再丰富细节。此外，引入了一个基于GRPO训练的令牌分配器，根据语音片段的复杂度自适应分配细粒度令牌的预算，以提升效率。实验表明，在47 Hz的令牌率下，Gogo在多项重建指标（如UT-MOS 4.19, DNS-MOS 3.99）上优于其他SOTA编解码器。在零样本语音合成任务中，GogoSpeech取得了最佳的说话人相似度（SIM 0.667）和综合质量评分（SMOS 4.381, CMOS +1.832），并证明了令牌分配器能在几乎不损质量的前提下将平均令牌率从47 Hz降至36 Hz。这项工作为高效、稳定的语音生成提供了新的范式。其局限性在于依赖固定的分组策略，且令牌分配器的训练与主生成模型解耦，可能存在优化不足。

---

### 5. [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Residual Representations for Expressive End-to-End Speech Synthesis](/audio-paper-digest-blog/posts/2026-05-02-hierarchical-semantic-acoustic-modeling-via-semi)

🔥 **8.5/10** | 前25% | #语音合成 | #自回归模型 | #零样本 #扩散模型

👥 **作者与机构**

- 第一作者：Yixuan Zhou（清华大学深圳国际研究生院）
- 通讯作者：Zhiyong Wu（清华大学深圳国际研究生院）
- 作者列表：Yixuan Zhou（清华大学深圳国际研究生院）、Guoyang Zeng（ModelBest Inc.）、Xin Liu（ModelBest Inc.）、Xiang Li（清华大学深圳国际研究生院）、Renjie Yu（清华大学深圳国际研究生院）、Ziyang Wang（ModelBest Inc.）、Runchuan Ye（清华大学深圳国际研究生院）、Weiyue Sun（ModelBest Inc.）、Jiancheng Gui（ModelBest Inc.）、Kehan Li（清华大学深圳国际研究生院）、Zhiyong Wu（清华大学深圳国际研究生院，通讯作者）、Zhiyuan Liu（清华大学计算机科学与技术系）

#

💡 **毒舌点评**

论文巧妙地利用有限标量量化（FSQ）作为“强制分心”的瓶颈，逼着语言模型先管好内容和语调的大局，再把声学细节的脏活累活交给另一个模块，这种设计既有理论优雅性又有工程实用性；不过，尽管在客观指标和克隆相似度上表现亮眼，论文在主观自然度（N-MOS）上并未全面碾压IndexTTS2等强敌，暗示着“稳定”与“极致自然”之间可能还存在细微的权衡，尤其是在中文的韵律控制上可能还有提升空间。

#

🔗 **开源详情**

- 代码：论文明确表示“We will release code and models to support future research”，但未提供具体的代码仓库链接。附录中给出了推断代码的占位符 `codes.zip`。
- 模型权重：承诺发布，但未说明具体平台或链接。
- 数据集：使用了公开的Emilia数据集（9.5万小时），并提及了内部大规模双语数据集（超过100万小时，未公开）。
- Demo：提供了在线演示页面链接：https://voxcpm.github.io/VoxCPM-demopage/。
- 复现材料：提供了非常充分的复现材料，包括：详细的模型架构参数表（附录表5）、训练阶段的学习率调度与批处理大小（附录表6）、所有消融实验的设置、硬件配置（GPU型号与数量）、以及多处关于训练技巧的说明（如WSD策略的重要性）。附录F部分包含了大量实验的细节和结果表格。
- 论文中引用的开源项目：主要引用了作为基线的其他TTS系统（如CosyVoice, F5-TTS等），以及预训练的语言模型MiniCPM-4。在实现上，使用了Megatron框架。

📌 **核心摘要**

1.  要解决的问题：端到端语音合成中表达力（连续表示）与稳定性（离散表示）之间的根本性矛盾。离散化会损失细节，而连续建模则因任务纠缠（语义规划与声学渲染混杂）容易导致长序列上的误差累积和不稳定。
2.  方法核心：提出一个统一的端到端框架，通过“层次化语义-声学建模”和“半离crete残差表示”来解决上述矛盾。核心是在文本语义语言模型（TSLM）和残差声学语言模型（RALM）之间插入一个可微分的有限标量量化（FSQ）瓶颈。该瓶颈自然诱导了任务分离：TSLM专注于生成稳定的语义-韵律“骨架”，RALM负责恢复被量化的细粒度声学细节。两者生成的条件信号共同指导一个基于扩散的局部Transformer解码器（LocDiT）生成最终语音。
3.  与已有方法相比新在哪里：
    *   新在统一框架：将显式的层次化设计（语义 vs. 声学）与残差学习结合在一个可端到端训练的统一框架内，避免了传统多阶段流水线的割裂和对外部预训练分词器的依赖。
    *   新在瓶颈机制：不同于将量化作为预测目标，本工作将FSQ作为正则化瓶颈和归纳偏置，强制信息流进行分层，从而在保持可微性的同时实现了隐式的任务解耦。
    *   新在训练范式：整个层次化模型（包括量化瓶颈）仅使用简单的扩散目标进行端到端训练，简化了流程并实现了协同优化。
4.  主要实验结果：
    *   主实验：在超过100万小时的双语数据上训练的0.5B参数模型VoxCPM，在开源模型中取得了最先进（SOTA）的零样本TTS性能。在SEED-TTS-EVAL基准上，英文WER为1.85%，中文CER为0.93%，说话人相似度（SIM）分别为72.9%（EN）和77.2%（ZH），优于CosyVoice2, IndexTTS2等模型。
    *   关键对比数据：
        | 模型 | 参数量 | 训练数据 | 英文WER↓ | 英文SIM↑ | 中文CER↓ | 中文SIM↑ |
        |---|---|---|---|---|---|---|
        | CosyVoice2 | 0.5B | 170K hrs | 3.09 | 65.9 | 1.38 | 75.7 |
        | IndexTTS 2 | 1.5B | 55K hrs | 2.23 | 70.6 | 1.03 | 76.5 |
        | VoxCPM | 0.5B | 1.8M hrs | 1.85 | 72.9 | 0.93 | 77.2 |
    *   消融实验：证实了FSQ瓶颈和残差声学模型（RALM）是性能关键。移除FSQ导致中文硬例句CER从18.19%飙升至24.92%；移除RALM（退化为单一连续模型）导致性能显著下降。FSQ维度选择也至关重要，256维是较优平衡点。
    *   可视化分析：t-SNE可视化显示TSLM-FSQ输出形成与文本内容相关的语义结构，而RALM残差输出则聚类为说话人相关的声学特征，验证了隐式解耦。
5.  实际意义：提供了一种新的、统一的端到端语音合成架构范式，证明了通过精心设计的瓶颈结构可以在连续空间中实现稳定且富有表达力的生成，无需外部离散编码器。这对于推动开源、高质量、可定制的语音合成技术具有重要意义。
6.  主要局限性：论文中已提及和暗示的局限包括：在极致语音自然度（N-MOS）上并非所有场景都绝对领先（如中文部分测试落后于IndexTTS2）；实时流式合成能力虽被提及（因果VAE、低延迟），但实验未深入展示其在长序列对话等复杂流式场景下的稳定性与表现；模型依赖大规模高质量数据（超过100万小时）以达最佳性能，其在低资源场景下的有效性未充分验证。

---

### 6. [Toward Complex-Valued Neural Networks for Waveform Generation](/audio-paper-digest-blog/posts/2026-05-02-toward-complex-valued-neural-networks-for)

✅ **7.5/10** | 前25% | #语音合成 | #生成模型 | #对抗学习 #音频生成

👥 **作者与机构**

- 第一作者：Hyung-Seok Oh（高丽大学人工智能系）
- 通讯作者：Seong-Whan Lee（高丽大学人工智能系）
- 作者列表：Hyung-Seok Oh（高丽大学人工智能系）、Deok-Hyeon Cho（高丽大学人工智能系）、Seung-Bin Kim（高丽大学人工智能系）、Seong-Whan Lee（高丽大学人工智能系）

💡 **毒舌点评**

这篇论文首次将复值神经网络完整地引入iSTFT基声码器的生成器和判别器，构建了一个优雅的复数域对抗框架，理论动机清晰，并通过详实的实验（尤其是消融研究）证明了复值建模相比简单参数扩增的优越性。然而，其主要短板在于工程实用性：复值网络内存占用翻倍，且论文坦承多GPU训练优化不足，导致其训练效率提升有限，实际部署时的内存与计算成本仍是显著瓶颈。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://hs-oh-prml.github.io/ComVo/。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用了公开的LibriTTS和MUSDB18-HQ数据集，论文中说明了获取和使用方式。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了非常详细的训练配置、超参数表（表20）、架构细节、损失函数公式（附录C）、数值验证结果（附录F）和计算图可视化（附录G），复现材料充分。
- 论文中引用的开源项目：引用了iSTFTNet、HiFi-GAN、BigVGAN、Vocos、APNet、APNet2、FreeV等基线的开源实现；评估工具引用了UTMOS、auraloss（MR-STFT）、PESQ、cargan（Periodicity/V-UV）；辅助工具引用了complextorch库用于实现高斯技巧。

📌 **核心摘要**

1.  问题：现有iSTFT基声码器使用实值神经网络处理复数频谱图的实部和虚部，这种分离处理的方式限制了模型对频谱复数内在结构（实-虚部耦合关系）的建模能力。
2.  方法核心：提出ComVo，一个端到端复值神经网络声码器。其生成器和判别器（复值多分辨率判别器cMRD）均采用原生复数运算。创新点包括：引入相位量化层作为非线性正则化；提出分块矩阵计算方案以减少冗余运算，提升训练效率。
3.  新在何处：据作者所知，这是首个同时在生成器和判别器中使用复值神经网络进行iSTFT波形生成的声码器，建立了真正的复数域对抗训练框架。
4.  主要实验结果：在LibriTTS数据集上，ComVo在多项客观指标（UTMOS 3.6901, PESQ 3.8239）和主观评价（MOS 4.07）上优于Vocos、BigVGAN等强基线。在MUSDB18-HQ音乐数据集上也表现最佳。消融实验表明，复值生成器+复值判别器（GCDC）组合效果最佳，且复值建模优于将参数量翻倍的实值模型。分块矩阵方案将训练时间减少25%。
5.  实际意义：为语音合成中的频谱建模提供了新范式，有望通过更好地建模相位信息来生成更自然的语音波形。
6.  主要局限性：模型内存占用约为实值模型的2倍；多GPU训练存在未优化的问题；相位量化等模块采用了“分离式”设计，尚未探索更深入的复数域非线性。

---

### 7. [From Natural Alignment to Conditional Controllability in Multimodal Dialogue](/audio-paper-digest-blog/posts/2026-05-02-from-natural-alignment-to-conditional)

✅ **6.5/10** | 前25% | #语音合成 | #数据集 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Zeyu Jin（清华大学计算机科学与技术系）
- 通讯作者：Xiaoyu Qin（清华大学计算机科学与技术系）、Jia Jia（清华大学计算机科学与技术系 / BNRist，清华大学）
- 作者列表：
    - Zeyu Jin（清华大学计算机科学与技术系）
    - Songtao Zhou（清华大学计算机科学与技术系）
    - Haoyu Wang（清华大学计算机科学与技术系）
    - Minghao Tian（Rice University）
    - Kaifeng Yun（清华大学深圳国际研究生院）
    - Zhuo Chen（ByteDance）
    - Xiaoyu Qin（清华大学计算机科学与技术系）
    - Jia Jia（清华大学计算机科学与技术系 / BNRist，清华大学）

💡 **毒舌点评**

亮点在于其“基建”思维，为多模态对话生成这个嘈杂的领域，搭建了一套清晰的“路标”（任务定义）、“高速公路”（大规模标注数据集）和“考题”（跨模态一致性基准）。短板则是论文止步于“出题”和“阅卷”，并未提出一个能在这条新路上跑得更快的“新车”（统一的端到端生成模型），实验部分更多地是在证明现有模型“考不及格”。

🔗 **开源详情**

- 代码：论文在“ETHICS STATEMENT”中承诺：“Our experimental code and data curation pipeline will be made publicly available upon acceptance of the paper.” 但未提供具体仓库链接。
- 模型权重：论文中提到的基线模型（如Higgs-Audio-V2, Dia）是外部开源项目��但本文未贡献新的生成模型权重。
- 数据集：论文承诺开源MM-DIA和MM-DIA-BENCH。获取方式应是根据提供的标注（时间戳、转录、风格标签等）自行对齐公开的影视内容。
- Demo：未提及（论文中未提及在线演示链接）。
- 复现材料：论文提供了详尽的附录，包括数据处理细节、验证结果、指标解释等，有利于复现。
- 论文中引用的开源项目：
    - 生成模型基线：Higgs-Audio-V2 (Boson AI), Dia (Nari Labs), CosyVoice, Zero-Shot Dialogue Generation (ZSDG), MoonCast, Har-moniVox。
    - 视频生成基线：FLOAT, MultiTalk, Sonic, Wan-2.2, HunyuanVideo。
    - 工具/模型：Gemini 2.5-pro (Google), Qwen2.5-VL-7B, GPT-5 (OpenAI), Insightface (用于人脸识别)，以及语音质量评估工具（如UTMOS）。
- 开源情况总结：论文承诺将在接受后开源核心数据集和处理代码，但目前尚未提供。论文本身严重依赖上述引用的开源模型和工具进行实验和标注。

📌 **核心摘要**

1.  问题：当前多模态对话生成研究主要关注单模态（如语音或视觉）的内容真实性，而忽略了跨模态（语音、视觉、文本）在交互风格（如情感、关系、互动模式）上的系统性对齐与精细可控性，导致生成内容的表达力和可控性不足。
2.  方法核心：提出了一套从电影/电视剧中自动提取对话、并进行细粒度交互风格标注的数据处理流水线。基于此构建了大规模多模态对话数据集MM-DIA，并定义了可控多模态对话生成（MDG）任务，将其形式化为带显式/隐式条件变量的条件生成问题。同时，建立了专门评估跨模态风格一致性的基准MM-DIA-BENCH。
3.  创新点：
    *   首次针对“对话表达力”而非“对话内容”构建大规模多模态数据集。
    *   提出两种互补的表达力标注范式：结构化“情感三元组”和自由风格描述。
    *   建立了首个专门评估音频-视频风格一致性的对话生成基准MM-DIA-BENCH。
4.  实验结果：
    *   在风格可控语音合成（Task 1）上，使用MM-DIA微调基线模型（如Higgs-Audio-V2）能显著提升性能。例如，WER从31.25降至4.45，指令遵循度（Human-MOS）从3.11提升至4.13（见表4）。
    *   在视觉条件语音合成（Task 2）和语音驱动对话视频生成（Task 3）上，现有模型（如HarmoniVox、Wan-2.2）在MM-DIA-BENCH上暴露出明显的跨模态风格对齐不足（如指令遵循度、自发性得分较低），揭示了现有技术的局限（见表5，表6）。
5.  实际意义：为可控多模态对话生成提供了标准化的定义、高质量的数据基础和严格的评估工具，有望推动该领域从“内容生成”向“可控交互生成”演进，对电影配音、虚拟人交互等应用有潜在价值。
6.  局限性：工作重心在于数据集和评估框架的构建，未提出一个能统一处理多模态输入输出的端到端生成模型；数据集来源于影视作品，与真实日常对话可能存在域差距；部分依赖Gemini等大型多模态模型进行标注，引入了潜在偏差。

---

