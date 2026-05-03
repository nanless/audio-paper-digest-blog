---
title: "ICLR 2026 - 语音对话系统 论文列表"
date: 2026-05-03
draft: false
tags: ["语音对话系统"]
categories: [iclr-2026]
description: "共 11 篇 ICLR 2026 语音对话系统 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音对话系统

共 **11** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Closing the Gap Between Text and Speech Understanding in LLM](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech) | 10.0分 | 前10% |
| 🥈 | [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-03-end-to-end-listen-look-speak-and-act) | 9.5分 | 前25% |
| 🥉 | [From Text to Talk: Audio-Language Model Needs Non-Autoregres](/audio-paper-digest-blog/posts/2026-05-03-from-text-to-talk-audio-language-model-needs-non) | 8.0分 | 前25% |
| 4. | [DrVoice: Parallel Speech-Text Voice Conversation Model via D](/audio-paper-digest-blog/posts/2026-05-03-drvoice-parallel-speech-text-voice-conversation) | 8.0分 | 前25% |
| 5. | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer) | 8.0分 | 前25% |
| 6. | [STITCH: Simultaneous Thinking and Talking with Chunked Reaso](/audio-paper-digest-blog/posts/2026-05-03-stitch-simultaneous-thinking-and-talking-with) | 7.5分 | 前25% |
| 7. | [ParaS2S: Benchmarking and Aligning Spoken Language Models fo](/audio-paper-digest-blog/posts/2026-05-03-paras2s-benchmarking-and-aligning-spoken-language) | 7.5分 | 前25% |
| 8. | [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy](/audio-paper-digest-blog/posts/2026-05-03-voxprivacy-a-benchmark-for-evaluating) | 7.5分 | 前25% |
| 9. | [WearVox: An Egocentric Multichannel Voice Assistant Benchmar](/audio-paper-digest-blog/posts/2026-05-03-wearvox-an-egocentric-multichannel-voice) | 7.5分 | 前25% |
| 10. | [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-03-towards-true-speech-to-speech-models-without-text) | 7.5分 | 前25% |
| 11. | [Human or Machine? A Preliminary Turing Test for Speech-to-Sp](/audio-paper-digest-blog/posts/2026-05-03-human-or-machine-a-preliminary-turing-test-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech)

🔥 **10.0/10** | 前10% | #语音对话系统 | #知识蒸馏 | #跨模态 #数据高效

👥 **作者与机构**

- 第一作者：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS）
- 通讯作者：未明确说明（第二作者 Skyler Seto 来自 Apple，可能是联系人）
- 作者列表：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS）、Skyler Seto（Apple）、Maureen de Seyssel（Apple）、Richard He Bai（Apple）、Zijin Gu（Apple）、Tatiana Likhomanenko（Apple）、Navdeep Jaitly（Apple）、Zakaria Aldeneh（Apple）

💡 **毒舌点评**

亮点在于，本文没有陷入“用更多数据砸出性能”的惯性思维，而是先用定量工具手术刀般剖开了“差距”的病灶（遗忘与失对齐），然后精准用药（蒸馏+主动选择），用极低的数据成本就让一个3B/7B模型达到了媲美更大、更耗数据模型的水平。短板是，尽管是“端到端”模型，但当前工作仅完成了从语音到文本生成这一步，距离能自然输出语音的完整语音助手尚有距离，这更像是一个关键的中继站而非终点。

🔗 **开源详情**

- **代码**：论文中未提及代码链接。
- **模型权重**：未提及公开权重计划。
- **数据集**：使用了公开数据集LibriHeavy、Emilia和FineWeb-Edu。合成语音部分使用了Kokoro-TTS。
- **Demo**：未提及在线演示。
- **复现材料**：在附录（A.1-A.3， A.5）中提供了极其详细的模型描述、训练细节（优化器、学习率、调度、混合比例）、评估协议（模板、few-shot设置），可复现性极高。
- **论文中引用的开源项目**：Kokoro-TTS, Mimi speech tokenizer, Qwen2.5 LLMs, Whisper (用于部分分析), BAAI/bge-large-en-v1.5 embeddings, SmolLM, Hugging Face transformers/datasets。

📌 **核心摘要**

1. **解决的问题**：现有的将文本大语言模型适配为能处理语音输入的模型（语音适配LLM）在语言理解任务上性能显著下降，始终落后于原始文本模型乃至级联系统。作者将此现象定义为“文本-语音理解差距”。
2. **方法核心**：提出SALAD（Sample-efficient Alignment with Learning through Active selection and cross-modal Distillation）方法。该方法通过两阶段训练：第一阶段在自然语音数据上使用跨模态知识蒸馏（以文本LLM为教师）来对齐模态并缓解遗忘；第二阶段使用主动学习算法，优先选择那些模型自身跨模态失对齐程度最高的文本样本进行语音合成，以高效地填补领域空白。
3. **与已有方法相比的新意**：首次系统量化并分析了“遗忘”和“跨模态失对齐”这两个因素如何分别影响文本和语音性能，并发现它们均可预测最终差距。不同于依赖海量合成数据或私有数据集的方法，SALAD在公开数据上实现了数据高效（训练数据量少一个数量级）且性能可比的解决方案。
4. **主要实验结果**：在3B和7B模型上，SALAD显著缩小了理解差距。以7B模型为例，在六个广泛领域的知识推理基准测试中，SALAD-7B的语音文本差距平均为6.2%，明显优于大多数端到端基线（如DiVA的26.1%，GLM-4-Voice的20.1%），并接近最强闭源模型Qwen2.5-Omni（5.0%）。关键对比数据见下表：

| 模型 | 平均语音理解准确率(%) | 平均文本-语音差距(%) | 备注 |
| :--- | :--- | :--- | :--- |
| ASR + Qwen2.5-7B (级联) | 79.4 | 2.2 | 强基线 |
| Qwen2.5-Omni-7B | 76.7 | 5.0 | 最强闭源端到端模型 |
| **SALAD-7B** | **75.4** | **6.2** | **本方法** |
| GLM-4-Voice-9B | 63.4 | 20.1 | |
| DiVA-Llama3.1-8B | 52.6 | 26.1 | |

5. **实际意义**：证明了通过精细的问题分析和巧妙的训练目标设计，可以显著降低构建高性能语音语言模型对数据的需求，为资源受限的研究和应用开辟了更可行的路径。
6. **主要局限性**：本研究聚焦于语音理解（生成文本），并未解决语音生成（输出语音）的问题，因此构建的模型尚非完整的语音交互助手。其有效性高度依赖于底层文本LLM（教师模型）的能力和公开语音数据的质量。

---

### 🥈 [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-03-end-to-end-listen-look-speak-and-act)

🔥 **9.5/10** | 前25% | #语音对话系统 | #多模态模型 | #全双工 #端到端

👥 **作者与机构**

- 第一作者：Siyin Wang（清华大学）
- 通讯作者：Chao Zhang（清华大学）
- 作者列表：Siyin Wang（清华大学）、Wenyi Yu（清华大学）、Xianzhao Chen（字节跳动）、Xiaohai Tian（字节跳动）、Jun Zhang（字节跳动）、Lu Lu（字节跳动）、Yuxuan Wang（未说明）、Chao Zhang（清华大学）

💡 **毒舌点评**

ELLSA真正做到了“听、看、说、做”四件事同时开工，像个人类一样在说话的同时还能干活，这在当前以“分时处理”为主的多模态大模型中绝对是里程碑式的突破。但别高兴太早，论文里所有“干活”的部分都在LIBERO这种纯模拟器里完成，真到了真实厨房或工厂，机械臂会不会因为“一心二用”打翻酱油罐，还未经考验。

🔗 **开源详情**

- **代码**：论文承诺将代码开源，GitHub仓库为 https://github.com/bytedance/SALMONN。
- **模型权重**：论文承诺将提供模型检查点。
- **数据集**：论文承诺将发布所有数据。训练数据细节见附录B表6，部分数据（如缺陷指令、上下文VQA标注）由模型生成，附录E提供了相关提示词。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了完整的模型规格（附录A）、训练细节（附录B）、评估细节（附录C）、任务定义（附录D）、实验用提示词（附录E）以及大量消融实验结果（附录F-I），复现材料非常充分。
- **论文中引用的开源项目**：
    - **模型/架构**：LLaMA-3.1-8B-Instruct, Emu3 (Emu3-Base, Emu3-VisionTokenizer), UniVLA, FAST, Mamba, CosyVoice2-0.5B, SPEAR。
    - **数据集**：LibriSpeech, GigaSpeech, LIBERO, Alpaca-52k, Web Questions, TriviaQA, SQuAD, Natural Questions, VoiceAssistant-400k, UltraChat。
    - **工具**：Whisper-medium-en/large-v3（用于数据过滤和评估）。

📌 **核心摘要**

这篇论文旨在解决当前AI模型无法像人类一样进行实时、多模态、全双工交互的问题。现有模型要么“能说会道”但无法行动（如语音大模型），要么“能干活”但无法说话（如VLA模型），且大多采用半双工、轮流发言的模式。为解决此问题，作者提出了ELLSA（End-to-end Listen, Look, Speak and Act）模型，这是首个在单一架构内统一处理视觉、语音、文本和动作的全双工端到端模型。其核心是创新的SA-MoE（自注意力混合专家）架构，将不同模态路由给专门的专家模块（语音专家处理语音/文本，动作专家处理视觉/动作），并通过统一的自注意力机制进行融合，从而在保持各专家性能的同时实现跨模态信息交互。实验结果表明，ELLSA不仅在语音交互和机器人操作基准测试上达到了与专用模型相当的性能（如在LIBERO基准上平均任务成功率达89.4%，超过π0-FAST的85.5%），更实现了前所未有的高级交互能力，包括边说边做（speaking-while-acting）、基于上下文的视觉问答、拒绝错误指令和动作中断。其实际意义在于为构建更自然、通用的人机交互智能体提供了可行的技术路径。主要局限性是目前仅在模拟环境中验证，尚未在真实物理世界进行部署和测试。

---

### 🥉 [From Text to Talk: Audio-Language Model Needs Non-Autoregressive Joint Training](/audio-paper-digest-blog/posts/2026-05-03-from-text-to-talk-audio-language-model-needs-non)

🔥 **8.0/10** | 前25% | #语音对话系统 | #扩散模型 | #自回归模型 #多模态模型

👥 **作者与机构**

- 第一作者：Tianqiao Liu (Guangdong Institute of Smart Education, Jinan University; TAL Education Group)
- 通讯作者：Xueyi Li (Guangdong Institute of Smart Education, Jinan University)
- 作者列表：
    - Tianqiao Liu (Guangdong Institute of Smart Education, Jinan University; TAL Education Group)
    - Xueyi Li (Guangdong Institute of Smart Education, Jinan University)
    - Hao Wang (Peking University)
    - Haoxuan Li (Peking University)
    - Zhichao Chen (Peking University)
    - Weiqi Luo (Guangdong Institute of Smart Education, Jinan University)
    - Zitao Liu (Guangdong Institute of Smart Education, Jinan University)

💡 **毒舌点评**

**亮点**：论文精准地抓住了现有统一语音模型中“用单一自回归目标训练文本和音频”这一根本矛盾，并给出了一个理论上优美、实践中有效的混合解决方案（TtT），其训练策略（如SST）设计得非常工程化且有针对性。
**短板**：虽然实验结果强劲，但模型的可扩展性尚未得到充分验证（仅测试了3B规模），且NAR扩散生成的200步迭代在推理效率上是否真能优于大型自回归模型，论文未提供直接的延迟数据对比，这使得其“高效”的实际落地优势有待商榷。

🔗 **开源详情**

- **代码**：论文提供了GitHub仓库链接：https://github.com/ai4ed/TtT。
- **模型权重**：论文中提及“code and data are publicly available”，但未明确说明是否包含预训练或微调后的模型权重。
- **数据集**：训练数据集为多个公开数据集的组合（详见表4），论文未提及会提供额外的合成或处理后的训练数据。评估数据集（表7）均为公开基准。
- **Demo**：论文中未提及提供在线演示。
- **复现材料**：论文在附录中提供了极其详细的训练数据格式、数据集构成、评估协议、超参数设置、算法伪代码以及硬件配置，为复现提供了充分信息。
- **依赖的开源项目**：
    - **模型骨架**：Qwen2.5-Base (1.5B/3B)。
    - **音频编解码器**：沿用GLM-4-Voice的设计。
    - **ASR模型**：Whisper-Large-v3 (英语), Paraformer-zh (中文) 用于评估。
    - **评估模型**：Qwen3-30B-A3B 用作LLM-as-a-Judge。
    - **训练框架**：DeepSpeed。

📌 **核心摘要**

1. **要解决什么问题**：现有的端到端语音对话模型（如Moshi, GLM-4-Voice）通常使用统一的自回归（AR）范式生成文本和音频令牌，但这忽略了文本生成（强目标-目标依赖）与音频生成（强源-目标依赖）在依赖结构上的根本不对称性，导致训练动态不佳和误差传播。
2. **方法核心是什么**：提出Text-to-Talk (TtT)框架，在一个Transformer中集成AR生成用于文本和基于吸收离散扩散的非自回归（NAR）生成用于音频。关键设计包括：1）利用吸收扩散的任意顺序AR特性建立统一训练目标；2）设计模态感知注意力机制（文本用因果注意力，音频跨度内双向注意力）；3）引入三个训练策略（BANOM, PPM, SST）来弥合训练-测试差异。
3. **与已有方法相比新在哪里**：不同于现有方法对两种模态采用相同的AR训练目标，TtT首次在统一的模型和目标中明确地为文本和音频分配了最适合其特性的生成范式（AR vs. NAR扩散），并提供了理论分析和专门的训练策略来解决由此产生的挑战。
4. **主要实验结果如何**：
    - **Audio-QA与ASR**：在1.5B和3B规模上，TtT一致性优于纯AR和纯NAR基线。例如，TtT-3B在AlpacaEval上得分17.46，而AR基线为14.42；在AISHELL-2 ASR上WER为12.53，AR基线为54.94。
    - **与SOTA对比**：在≤3B模型组中，Pretrain+TtT在Audio-QA和ASR上达到最优，并在URO-Bench（一个综合S2S基准）上取得最佳表现（如基础任务总分：理解57.63，推理39.30，口语对话45.68）。
    - **消融实验**：移除任何一个训练策略（BANOM, PPM, SST）都会导致性能下降，证实了每个策略的贡献。例如，移除SST后，LLaMAQuestions分数从34.68降至10.20。

    | 模型 (3B) | Audio-QA (↑) | ASR (↓) | URO-Bench Basic (↑) |
    | :--- | :--- | :--- | :--- |
    | **数据集** | AE. LQ. TQA. WQ. | Fzh. A2. A1. WS m. WS n. Fen. | 理解 推理 口语 |
    | Qwen2.5-3B (AR) | 14.42 10.00 0.60 0.70 | 90.32 54.94 72.01 80.01 73.64 74.47 | - - - |
    | Qwen2.5-3B (NAR) | 11.31 0.67 1.21 0.70 | 68.94 212.27 160.58 89.22 111.29 83.51 | - - - |
    | **TtT-3B** | **17.46 34.68 6.53 11.61** | **55.67 12.53 13.65 53.83 44.29 64.31** | - - - |
    | Pretrain+TtT | 26.73 40.07 11.07 21.43 | 18.99 6.80 5.78 27.59 19.85 19.10 | **57.63 39.30 45.68** |

5. **实际意义是什么**：为构建更高效、自然且延迟更低的端到端语音对话系统提供了一种新的架构范式。其混合生成思想可能对其他需要处理不同模态生成特性的多模态AI应用有启发。
6. **主要局限性是什么**：1) 论文仅验证了1.5B和3B的规模，更大模型的性能和稳定性未知；2) NAR音频生成的推理步数（200步）可能带来实际延迟，与流式AR模型的对比分析不足；3) 音频生成质量（如URO-Bench中的NMOS/UTMOS分数）与最强模型相比仍有差距。

---

### 4. [DrVoice: Parallel Speech-Text Voice Conversation Model via Dual-Resolution Speech Representations](/audio-paper-digest-blog/posts/2026-05-03-drvoice-parallel-speech-text-voice-conversation)

🔥 **8.0/10** | 前25% | #语音对话系统 | #自回归模型 | #语音大模型 #端到端

👥 **作者与机构**

- 第一作者：Chao-Hong Tan (Tongyi Fun Team, Alibaba Group)
- 通讯作者：论文中未明确指定唯一通讯作者，但列出了联系邮箱，作者列表首位为Chao-Hong Tan，机构为阿里巴巴通义听觉团队。
- 作者列表：Chao-Hong Tan, Qian Chen, Wen Wang, Chong Deng, Qinglin Zhang, Luyao Cheng, Hai Yu, Xin Zhang, Xiang Lv, Tianyu Zhao, Chong Zhang, Yukun Ma, Yafeng Chen, Hui Wang, Jiaqing Liu, Xiangang Li, Jieping Ye（均来自 Tongyi Fun Team, Alibaba Group）

💡 **毒舌点评**

**亮点**：DrVoice的双分辨率机制（DRSR）是一个巧妙的工程创新，通过简单的分组策略将LLM的输入帧率从12.5Hz降至5Hz，不仅显著降低了计算成本（训练时间减少近50%），还缓解了语音与文本令牌频率不匹配的问题，实验结果全面SOTA，效率与性能兼得。  
**短板**：论文在语音生成质量（ASR-WER）的对比上存在不足，虽然UTMOS得分有竞争力，但ASR-WER（8.36）落后于Qwen2.5-Omni（3.48），作者归因于架构设计，但这表明其语音与文本的对齐精度仍有提升空间。此外，所有实验均基于英文数据集，缺乏多语言或跨语言能力的验证。

🔗 **开源详情**

- **代码**：提供代码仓库链接：`https://github.com/FunAudioLLM/Fun-Audio-Chat`。
- **模型权重**：论文中明确表示将发布基于增强基座模型的所有源代码和模型检查点。
- **数据集**：训练数据未公开，但论文说明了数据合成方法（使用CosyVoice）和筛选流程，并提供了复现所需的脚本和说明。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：提供了详尽的附录（A.实现细节），包括所有超参数（学习率、批量大小等）、训练配置、硬件规格（64x A800 GPU）和训练时长。
- **论文中引用的开源项目**：Whisper-Large-v3（语音编码器）、CosyVoice（语音分词器/解码器/S3Tokenizer）、Qwen2.5（基础LLM）、HiFi-GAN（声码器）、DeepSpeed（训练框架）。

📌 **核心摘要**

1.  **要解决的问题**：现有端到端语音-文本联合生成模型（如Kimi-Audio）面临两个挑战：一是使用12.5Hz的音频表示导致计算成本高昂；二是高帧率的语音令牌与低帧率（~3Hz）文本令牌之间存在频率不匹配，这削弱了LLM的语义处理能力。
2.  **方法核心**：提出DrVoice，一个并行的语音-文本对话模型，其核心是双分辨率语音表示（DRSR）。在输入端，通过分组机制将25Hz的离散语音令牌压缩为5Hz的表示，送入LLM；在输出端，设计了一个语音精炼头（SRH），以自回归方式从LLM的隐藏状态中逐个生成原始25Hz的语音令牌，以恢复细节。
3.  **与已有方法相比新在哪里**：相比采用固定12.5Hz输入/输出的Kimi-Audio等模型，DrVoice首次引入了输入低分辨率（5Hz）与输出高分辨率（25Hz）的双分辨率架构。这既保证了LLM处���效率，又通过SRH保障了生成语音的自然度。此外，论文还提出了CoM-Mixing（链式模态混合）和Core-Cocktail（核心鸡尾酒）两种新颖的训练策略。
4.  **主要实验结果**：DrVoice-7B在多个权威基准上取得了SOTA性能。在OpenAudioBench（语音理解）上总体得分72.04（第二名69.08），在VoiceBench（语音助手）上得分80.17（第二名76.93），在UltraEval-Audio（语音理解与生成）上得分56.66（第二名50.46），在Big Bench Audio（推理与理解）上得分74.0（第二名55.2）。计算效率方面，由于将LLM输入帧率降至5Hz，训练GPU小时数减少了近50%。语音质量方面，其UTMOS得分（4.29）与最佳模型相当。
5.  **实际意义**：DrVoice为构建高效、高质量的端到端语音对话系统提供了一个有力的开源基线模型。其双分辨率设计思路对其他多模态生成任务（如音视频）有启发意义，降低了在资源受限设备上部署复杂语音模型的门槛。
6.  **主要局限性**：1) 语音生成质量的对齐指标（ASR-WER）并非最优；2) 论文未报告模型在多语言场景下的性能；3) 消融研究显示，移除连续语音编码器（CSE）或语音精炼头（SRH）会导致性能显著下降，表明模型对某些组件依赖较强。

---

### 5. [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer)

🔥 **8.0/10** | 前25% | #语音对话系统 | #自回归模型 | #多模态模型 #预训练

👥 **作者与机构**

- 第一作者：Yen-Ju Lu（约翰霍普金斯大学语言与语音处理中心；论文注明工作于Meta）
- 通讯作者：Srinivasan Iyer, Duc Le（Meta超级智能实验室）
- 作者列表：Yen-Ju Lu（约翰霍普金斯大学语言与语音处理中心, Meta超级智能实验室），Yashesh Gaur（Meta超级智能实验室），Wei Zhou（Meta超级智能实验室；论文注明工作于约翰霍普金斯大学），Benjamin Muller（Meta超级智能实验室），Jesus Villalba（约翰霍普金斯大学语言与语音处理中心），Najim Dehak（约翰霍普金斯大学语言与语音处理中心），Luke Zettlemoyer（Meta超级智能实验室），Gargi Ghosh（Meta超级智能实验室），Mike Lewis（Meta超级智能实验室），Srinivasan Iyer（Meta超级智能实验室），Duc Le（Meta超级智能实验室）

💡 **毒舌点评**

亮点是“潜在补丁”机制优雅地解决了语音和文本在信息密度上的根本性失衡问题，让两种模态能在同一“粒度”下进行高效交互，这在多模态大模型构建中是个被忽视但至关重要的思路。短板在于其性能提升严重依赖于预训练阶段的强制对齐（或逐渐移除对齐的课程学习），这引入了额外的、可能出错的预处理步骤，且论文聚焦于半双工交互，离真正的实时对话系统还有距离。

🔗 **开源详情**

- **代码**：提供了代码仓库链接：https://github.com/facebookresearch/lst
- **模型权重**：论文中未提及是否公开预训练模型权重。
- **数据集**：使用了四个公开语音数据集（LibriLight, People’s Speech, MLS, Spotify），但论文未提供其整合处理脚本或直接下载链接。文本数据来自Llama 2子集，也未明确获取方式。
- **Demo**：未提及在线演示。
- **复现材料**：论文附录详细说明了模型架构、训练设置、数据处理流程（特别是交错数据构建）、超参数和稳定性分析，复现信息非常充分。
- **引用的开源项目**：论文依赖或比较了多个开源工具/模型，包括：HuBERT, Wav2Vec2, Llama 2, SentencePiece, Kokoro TTS, HiFi-GAN, Whisper等。

📌 **核心摘要**

1. **要解决什么问题**：现有自回归语音-文本模型存在严重的模态不平衡问题。语音令牌序列比文本令牌序列长得多，导致预训练和推理的计算资源被过度分配给语音，阻碍了有效的跨模态对齐和模型性能的高效扩展。
2. **方法核心是什么**：提出**潜在语音-文本变换器**。其核心是一个**潜在补丁机制**：通过一个轻量级的“补丁编码器”将一段连续的语音令牌聚合成一个更高层的、信息更密集的“语音补丁”。全局变换器在由文本令牌和这些语音补丁组成的混合序列上进行自回归建模。一个轻量级“补丁解码器”再将补丁预测还原为令牌级别的语音输出。
3. **与已有方法相比新在哪里**：不同于将语音和文本令牌直接混合或简单下采样，LST首次将**动态分块补丁**的概念系统性地应用于语音-文本联合建模。它引入了**对齐补丁**（基于文本-语音对齐信息）和**课程补丁**（从对齐训练逐渐过渡到静态训练）策略，使补丁既能对齐文本单元，又能在推理时摆脱对齐工具的依赖。
4. **主要实验结果如何**：在多个故事完成基准测试（如HellaSwag, StoryCloze）上，LST在计算控制和数据控制设置下均显著超越基线。例如，在计算控制设置下，LST在语音HellaSwag上获得最高**+6.5%**的绝对提升。在从420M到1.8B的扩展实验中，LST的优势随规模增长而扩大，并在7B参数、固定令牌预算下持续有效。下游任务显示，LST稳定了ASR适配过程，并将ASR和TTS推理时的有效自回归序列长度减少约**4倍**，降低了计算成本且不牺牲质量。
5. **实际意义是什么**：该方法为构建更高效、可扩展的语音-文本基础模型提供了一条新路径。它通过统一建模粒度，显著降低了训练和推理成本，同时提升了两种模态的表现，有助于推动语音语言模型向更大规模和更广泛应用发展。
6. **主要局限性是什么**：1) 部分高级补丁策略（对齐补丁、课程补丁）依赖于外部的强制对齐工具，增加了系统复杂性。2) 论文主要关注预训练阶段和半双工交互，未探索指令微调或全双工对话。3) 实验局限于语音和文本模态，尚未扩展到图像或视频。

---

### 6. [STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models](/audio-paper-digest-blog/posts/2026-05-03-stitch-simultaneous-thinking-and-talking-with)

✅ **7.5/10** | 前25% | #语音对话系统 | #生成模型 | #流式处理 #多模态模型

👥 **作者与机构**

- 第一作者：Cheng-Han Chiang（台湾大学 / 微软）
- 通讯作者：Xiaofei Wang（微软）
- 作者列表：Cheng-Han Chiang（台湾大学/微软），Xiaofei Wang（微软），Linjie Li（微软），Chung-Ching Lin（微软），Kevin Lin（微软），Shujie Liu（微软），Zhendong Wang（微软），Zhengyuan Yang（微软），Hung-yi Lee（台湾大学），Lijuan Wang（微软）

💡 **毒舌点评**

**亮点**：精准捕捉了当前语音大模型（SLM）“不会思考就开口说话”的核心短板，并用“分块推理+利用音频时长”的巧妙设计，几乎零额外延迟地实现了“边想边说”，是一个工程与算法结合得相当漂亮的解决方案。
**短板**：所有实验均基于GLM-4-Voice这一单一架构，虽然作者解释了选择原因，但结论的普适性（例如对TTS主导或端到端非离散token模型）仍存疑；此外，“推理”主要在数学QA上验证，对于开放式对话、多轮交互等更体现“思考”价值的场景，其收益是否依然稳健，论文并未充分探讨。

🔗 **开源详情**

- **代码**：论文中未提及公开的代码仓库链接。但提供了项目页面（https://d223302.github.io/STITCH）用于演示和展示。
- **模型权重**：未提及是否公开微调后的STITCH模型权重。
- **数据集**：论文详细描述了训练数据（`DTBS`）的构建方法（使用GPT-4o生成推理、GPT-4o-mini-TTS合成音频），并列出了来源数据集（VoiceAssistant400K, Tulu-3系列，NQ, TriviaQA）的下载链接。**并非**提供了处理好的最终数据集。
- **Demo**：提供项目页面，可能包含演示。
- **复现材料**：附录中提供了部分训练超参数和DeepSpeed配置代码片段，以及用于数据构建的提示词（Prompts）。
- **论文中引用的开源项目**：GLM-4-Voice（基线模型）、LlamaFactory（微调框架）、vLLM（推理引擎）、CosyVoice（语音解码器）、Whisper（转录评估）、GPT-4o（数据构建与评估）。

📌 **核心摘要**

1. **问题**：当前的语音语言模型（SLM）直接生成语音回答，缺乏像人类一样在说话前进行内部推理（Chain-of-Thought）的能力，导致在需要复杂推理的任务（如数学）上表现不佳。而简单地生成完整CoT再说话会引入不可控的额外延迟。
2. **方法核心**：提出STITCH（Simultaneous Thinking and Talking with Chunked Reasoning）生成框架。核心思想是让模型交替生成**未说出的推理块**（reasoning chunks）和**说出的文本/语音块**（text/speech chunks）。由于生成一段语音token对应的实际音频时长（~2秒）远大于生成这些token所需的时间，因此可以利用这段“空闲时间”来生成下一个推理块，从而实现“边想边说”。
3. **创新点**：包含两个变体：STITCH-R（先推理后说话，有少量初始延迟）和STITCH-S（先说话后推理，零额外初始延迟）。这是首次将内部推理机制引入SLM生成流程。
4. **主要实验结果**：在5个数学QA数据集上，STITCH-S（无额外延迟）的平均准确率比无推理的基线GLM-4-Voice提升了**15.06%**（78.04% vs 62.98%），与有延迟的TBS方法（79.12%）性能相当。在非推理任务上，性能与基线持平或略有提升。人类评估表明STITCH-S的响应速度被感知为与无推理模型相当。
5. **实际意义**：为实现更自然、准确、低延迟的语音交互提供了新范式，使语音助手能像人一样“思考后再回答”，尤其适用于需要推理的场景。
6. **主要局限性**：性能验证局限于GLM-4-Voice架构和特定数学推理数据集；分块大小（N_reason=100）与硬件强相关；模型本身仍需较大计算资源。

---

### 7. [ParaS2S: Benchmarking and Aligning Spoken Language Models for Paralinguistic-aware Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-03-paras2s-benchmarking-and-aligning-spoken-language)

✅ **7.5/10** | 前25% | #语音对话系统 | #强化学习 | #语音大模型 #基准测试

👥 **作者与机构**

- 第一作者：Shu-wen Yang (台湾大学电信工程研究所，与字节跳动Seed联合)
- 通讯作者：Ming Tu， Lu Lu (字节跳动Seed)
- 作者列表：Shu-wen Yang (台湾大学电信工程研究所)， Ming Tu (字节跳动Seed)， Andy T. Liu (字节跳动Seed)， Xinghua Qu (字节跳动Seed)， Hung-yi Lee (台湾大学电信工程研究所)， Lu Lu (字节跳动Seed)， Yuxuan Wang (字节跳动Seed)， Yonghui Wu (字节跳动Seed)

💡 **毒舌点评**

亮点在于定义了一个重要但被忽视的“副语言感知S2S对话”问题，并构建了首个直接在语音波形层面进行端到端评估的基准测试，其多阶段自动评判器设计有效解决了端到端大模型风格幻觉问题。短板在于论文将“情感”、“语气”、“性别”、“年龄”等不同维度的副语言信息笼统地归类并处理，可能简化了这些因素在真实交互中复杂的相互作用，且对“风格”本身的定义略显宽泛。

🔗 **开源详情**

- **代码：** 论文明确承诺将开源代码，但未提供具体链接（论文中未提及具体代码仓库链接）。
- **模型权重：** 论文明确承诺将开源训练后的模型权重（SFT、GRPO、奖励模型）。
- **数据集：** 论文明确承诺将开源ParaS2SBench数据集及训练数据（PolyTone数据、SFT数据、RL数据）。
- **Demo：** 论文提供了项目主页和Demo链接：https://paras2sbench.github.io/。
- **复现材料：** 在附录A中提供了详细的超参数设置（A.5）、人类评估方案（A.6）、所有数据生成与评分的Prompt（A.8），复现指导性较强。
- **论文中引用的开源项目：** Whisper-V3, Emotion2vec, AudioReasoner, Qwen2.5-Omni, Kimi-Audio, YourTTS, CosyVoice等。

📌 **核心摘要**

本文针对当前语音到语音对话模型无法根据用户语音中的副语言线索（如情感、语气、说话人属性）做出恰当内容与风格回应的问题，提出了ParaS2S框架。其核心是通过强化学习（RL）而非大量监督微调（SFT）来对齐模型。该框架包含两个关键部分：1）ParaS2SBench基准测试，它首次在波形级别联合评估输入输出语音对的内容与说话风格匹配度，其测试用例设计要求模型必须“听”声音而非仅凭文本内容推断；2）ParaS2SAlign，一个基于自动评判器的RL对齐框架。为实现可靠的自动评估，论文提出了一种多阶段评判器，通过分离分析语言内容与副语言风格来避免端到端大语言模型的风格幻觉。实验表明，现有S2S模型在ParaS2SBench上表现不佳，往往生成“音盲”回应。而本文的RL方法（ParaS2SAlign）相比纯SFT，将回应内容和说话风格的恰当性提升了10%，并且仅需十分之一的监督数据即可达到与百小时SFT相当的效果。该工作强调了构建可扩展、准确的自动评估器对于发展副语言感知语音交互的重要性。

主要实验结果如下：

**表2：自动评判器与人类评分的相关性对比（Pearson相关系数）**

| ID | 方法类型 | Input Age | Input Gender | Input Emotion | Input Sarcasm | Output Emotion | Output Tone | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| B1 | Audio LLMs (baseline) | - | - | - | - | - | - | 0.618 |
| O1 | 多阶段评判器（无输出样式） | 0.851 | 0.705 | 0.742 | 0.731 | - | - | 0.757 |
| O2 | 多阶段评判器（有语气描述） | 0.862 | 0.702 | 0.760 | 0.779 | - | ✓ | 0.776 |
| O5 | 多阶段评判器（使用模型预测标签） | ✓ | ✓ | ✓ | ✓ | - | ✓ | 0.723 |

*结论：多阶段自动评判器与人类评分的相关性显著优于端到端Audio LLM基线（约高出15%）。使用自然语言语气描述（O2）比使用离散情感标签（O3/O4）效果更好。PolyTone训练（O5）对情感和讽刺的预测质量提升明显。*

**表4：ParaS2SBench评分对比（主观评测）**

| 模型 | 合成语音 (年龄/情感/性别/讽刺/平均) | 真实语音 (IEMOCAP/MELD/平均) | 总平均 |
| :--- | :--- | :--- | :--- |
| **基线** | | | |
| Whisper-GPT-TTS | 3.050 / 3.121 / 2.916 / 3.005 / 3.022 | 3.562 / 3.412 / 3.487 | 3.176 |
| **闭源模型** | | | |
| GPT-4o voice mode | 3.205 / 3.633 / 3.342 / 2.957 / 3.284 | 3.770 / 3.508 / 3.639 | 3.403 |
| **开源模型** | | | |
| Qwen2.5 Omni | 3.170 / 3.653 / 3.236 / 2.935 / 3.248 | 3.626 / 3.599 / 3.612 | 3.369 |
| Kimi-Audio | 3.141 / 2.673 / 3.091 / 2.665 / 2.892 | 1.365 / 1.166 / 1.265 | 2.350 |
| **本文方法** | | | |
| Kimi-Audio SFT | 4.393 / 4.090 / 3.530 / 4.291 / 4.076 | 4.121 / 3.307 / 3.714 | 3.955 |
| **Kimi-Audio GRPO** | **4.496 / 4.490 / 4.239 / 4.538 / 4.441** | **4.394 / 3.927 / 4.161** | **4.382** |
| **上界** | | | |
| GPT-TTS | 4.525 / 4.691 / 4.812 / 4.791 / 4.705 | 4.710 / 4.824 / 4.766 | 4.725 |

*结论：1. 现有S2S模型（包括GPT-4o、Qwen2.5 Omni）表现与忽略风格的基线管道（Whisper-GPT-TTS）相近，说明它们无法根据副语言线索调整回应。2. 本文的SFT模型已大幅超越所有现有模型。3. 基于RL的GRPO模型在SFT基础上进一步提升，在合成与真实数据上平均分达到4.382，显著优于SFT（3.955）和最强开源模型Qwen2.5 Omni（3.369）。*

实际意义：该研究为语音对话系统注入“情商”提供了系统化的基准与可行的训练方法，有望推动更自然、共情的人机语音交互发展。主要局限性在于：1) 自动评判器虽优于基线，但与人类评分的相关性（0.776）仍有提升空间，且其评估维度（情绪、语气等）的定义可能存在简化；2) RL训练依赖于一个经过监督微调的“热启动”模型，其效果可能受限于初始SFT数据的质量；3) 实验主要基于Kimi-Audio模型，结论的泛化性有待验证。

---

### 8. [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy of Speech Language Models](/audio-paper-digest-blog/posts/2026-05-03-voxprivacy-a-benchmark-for-evaluating)

✅ **7.5/10** | 前25% | #语音对话系统 | #基准测试 | #语音大模型 #隐私保护

👥 **作者与机构**

- 第一作者：Yuxiang Wang（香港中文大学（深圳））
- 通讯作者：未说明
- 作者列表：Yuxiang Wang（香港中文大学（深圳））、HongYu Liu（香港中文大学（深圳））、Dekun Chen（香港中文大学（深圳））、Xueyao Zhang（香港中文大学（深圳））、Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd.）

💡 **毒舌点评**

亮点在于精准定义了“交互隐私”这一被忽视的语音AI安全维度，并设计了极具巧思的三级评估任务，从听从指令到自主推理，层层递进地暴露了当前模型“认声不认主”的短板。短板则是它本质是一个“找茬”基准，虽然诊断出了问题（开源模型在Tier 2/3接近50%随机猜），但提出的解决方案（特定数据微调）更像是示范而非通用解法，对于如何从根本上让模型理解“语境完整性”缺乏更深层的方法论创新。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文承诺发布微调后的模型（Ours: Kimi-Audio-sft），但未提及具体获取方式。
- 数据集：论文承诺公开VoxPrivacy基准（32小时）、Real-VoxPrivacy真人录制子集以及4000小时训练集。Demo页面提供：https://myflashbarry.github.io/VoxPrivacy.github.io/。
- Demo：提供在线演示页面（见上）。
- 复现材料：论文提供了详细的附录，包含数据生成提示词、评估标准、训练配置、对抗攻击设计等。核心依赖的开源项目/模型包括：CosyVoice2（用于TTS）、Whisper-large-v3（用于ASR和音频编码）、Deepseek-V3和Gemini-2.5-Pro（作为LLM裁判）、以及多个被评测的语音大模型。

📌 **核心摘要**

1. **要解决什么问题**：在语音语言模型（SLM）从单用户设备走向多用户共享环境（如智能家居）时，模型必须能够区分不同说话人并管理信息流，防止将一个用户的私人信息泄露给另一个用户，即“交互隐私”。现有基准未能评估此能力。
2. **方法核心是什么**：提出VoxPrivacy基准，包含三级递增难度的任务：Tier 1（遵循直接保密指令）、Tier 2（基于说话人声音验证的条件访问）、Tier 3（无指令时自主推断并保护隐私）。构建了包含7107个样本（32.86小时）的双语（中英）合成数据集，并提供了小规模真人录制验证集（Real-VoxPrivacy）。
3. **与已有方法相比新在哪里**：这是首个专门针对语音语言模型交互隐私的评估基准。与现有基准相比，它不只测试对话能力或多说话人识别，而是评估模型在识别说话人后，是否能做出“上下文适当”的响应以保护隐私，填补了从“听懂”到“守密”的评估空白。
4. **主要实验结果如何**：对9个模型（包括开源和闭源）的评估显示，大多数开源SLM在条件隐私决策（Tier 2/3）上表现接近随机（约50%准确率）。闭源Gemini系列模型表现较好，但仍远低于理论上限（用文本ID标签模拟的LLM上界）。微调后的模型（Ours: Kimi-Audio-sft）性能显著提升，与Gemini-2.5-pro相当。真人录制数据验证了合成数据上观察到的失败模式是真实的。关键结果如下表所示：
   **表3：条件隐私任务表现（EN/ZH）**
   | 模型 | Tier 2 准确率(EN) | Tier 2 F1(EN) | Tier 3 准确率(EN) | Tier 3 F1(EN) |
   | :--- | :--- | :--- | :--- | :--- |
   | LLM (上界) | 88.37% | 90.64% | 85.21% | 86.71% |
   | Gemini-2.5-pro | 76.05% | 76.39% | 66.28% | 67.06% |
   | Kimi-Audio | 49.61% | 59.14% | 50.13% | 55.39% |
   | Ours: Kimi-Audio-sft | 83.93% | 82.65% | 77.57% | 77.83% |
5. **实际意义**：为开发更安全、值得信赖的多用户语音助手提供了关键的评估工具和数据集，揭示了当前模型在隐私保护方面的严重缺陷，并指明了通过特定数据微调的改进路径。
6. **主要局限性**：基准依赖合成语音，可能缺乏真实交互中的韵律和情感细微差别；隐私规范具有文化特异性，当前分类可能无法完全普适；解决方案依赖监督微调，未探索强化学习等更复杂的决策训练。

---

### 9. [WearVox: An Egocentric Multichannel Voice Assistant Benchmark for Wearables](/audio-paper-digest-blog/posts/2026-05-03-wearvox-an-egocentric-multichannel-voice)

✅ **7.5/10** | 前25% | #语音对话系统 | #基准测试 | #多通道 #鲁棒性

👥 **作者与机构**

- 第一作者：Zhaojiang Lin (Meta)，Yong Xu (Meta)，Kai Sun (Meta) （论文明确标注三人共同第一作者）
- 通讯作者：未说明（论文未明确标注通讯作者，但提供了zhaoliang@meta.com等邮箱）
- 作者列表：
    - Zhaojiang Lin, Yong Xu, Kai Sun, Jing Zheng, Yin Huang, Surya Teja Appini, Krish Narang, Renjie Tao, Ishan Kapil Jain, Siddhant Arora†, Ruizhi Li, Yiteng Huang, Kaushik Patnaik, Wenfang Xu, Suwon Shon, Yue Liu, Ahmed A Aly, Anuj Kumar, Florian Metze, Xin Luna Dong （来自Meta）
    - Siddhant Arora† （同时隶属于Carnegie Mellon University）

💡 **毒舌点评**

亮点在于填补了可穿戴语音助手评估的空白，构建了一个极具现实感的多任务、多环境、多角色评测基准，其“问题意识”和实验设计远超许多“为了用而用”的论文。短板则是基准的绝对规模仍然偏小（不到4K对话），且作为一篇提出基准的论文，其自身提出的“解决方案”（MC WearLlama）只是一个概念验证案例，并未展现出颠覆性的模型架构创新，略显保守。

🔗 **开源详情**

- **代码**：提供了数据集的GitHub仓库链接：https://github.com/facebookresearch/wearvox。该仓库预计包含数据下载、评测脚本等。
- **模型权重**：未提及案例研究模型（MC/SC WearLlama）的权重是否开源。评测的其他SLLM（如GPT-4o, Gemini）为闭源API。
- **数据集**：WearVox数据集通过上述GitHub链接公开。
- **Demo**：未提及在线演示。
- **复现材料**：在附录中详细给出了各任务的提示词（Listing 1-4）、LLM裁判的提示词（Listing 5-6）、数据收集流程（Figure 4-5）、噪声环境分布（Figure 6-7）以及模型架构细节（Section A.6），复现信息较为充分。
- **引用的开源项目**：论文依赖了多个开源模型和工具，包括Whisper, Llama 3.3/4系列, Qwen2.5-Omni, Gemma 3n, Kimi-Audio, Phi-4 Multimodal等作为评测基线。

📌 **核心摘要**

这篇论文旨在解决可穿戴设备（如AI眼镜）语音助手缺乏专用评测基准的问题。现有基准忽略了第一视角音频、运动噪声、快速交互和区分设备定向语音等特有挑战。为此，作者构建了**WearVox**，首个专门用于评估可穿戴语音助手的基准，包含3842个多通道、第一视角音频录音，覆盖5类任务（搜索问答、闭书问答、侧向对话拒绝、工具调用、语音翻译）。与已有基准相比，其核心新意在于**首次系统性地聚焦于可穿戴场景的真实复杂性**，特别是多通道空间音频和动态对话环境。主要实验结果显示，当前主流实时语音大语言模型在WearVox上的准确率仅为29%-59%，且在噪声户外环境下性能显著下降，证明了该基准的挑战性和现实性。通过案例研究，论文证明了**多通道音频输入能显著提升模型抗噪性和区分设备定向/背景语音的能力**（例如侧向对话拒绝准确率从85.6%提升至93.9%）。该工作的实际意义是为可穿戴语音AI研究提供了一个全面的测试平台，明确了性能瓶颈和未来研究方向（如空间音频的重要性）。主要局限性是基准数据集规模相对有限，且提出的多通道模型仅为概念验证，未完全开源。

---

### 10. [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-03-towards-true-speech-to-speech-models-without-text)

✅ **7.5/10** | 前25% | #语音对话系统 | #预训练 | #语音大模型 #流匹配

👥 **作者与机构**

- 第一作者：Xingjian Zhao（复旦大学，上海创新研究院，MOSI.AI）*并列第一作者
- 第一作者：Zhe Xu（复旦大学，上海创新研究院，MOSI.AI）*并列第一作者
- 通讯作者：Xipeng Qiu（复旦大学，上海创新研究院，MOSI.AI）
- 作者列表：
    - Xingjian Zhao (复旦大学, 上海创新研究院, MOSI.AI)
    - Zhe Xu (复旦大学, 上海创新研究院, MOSI.AI)
    - Luozhijie Jin (复旦大学, 上海创新研究院, MOSI.AI)
    - Yang Wang (复旦大学, MOSI.AI)
    - Hanfu Chen (复旦大学, MOSI.AI)
    - Yaozhou Jiang (复旦大学, MOSI.AI)
    - Ke Chen (复旦大学, 上海创新研究院, MOSI.AI)
    - Ruixiao Li (复旦大学, 上海创新研究院, MOSI.AI)
    - Mingshu Chen (复旦大学, MOSI.AI)
    - Ruiming Wang (复旦大学, MOSI.AI)
    - Wenbo Zhang (复旦大学, 上海创新研究院, MOSI.AI)
    - Qinyuan Cheng (复旦大学, MOSI.AI)
    - Zhaoye Fei (复旦大学, MOSI.AI)
    - Shimin Li (MOSI.AI)
    - Xipeng Qiu (复旦大学, 上海创新研究院, MOSI.AI)

💡 **毒舌点评**

亮点在于，通过“模态层分割”和“冻结预训练”两个关键设计，系统性地解决了将文本LLM能力迁移到语音模态时，如何平衡性能与知识保持这个核心工程难题。但短板也同样明显：该模型高度依赖一个强大且已经预训练好的文本LLM骨干（Qwen-3-8B），其核心创新更多体现在适配与整合策略上，而非一个从零开始、具有独立生命力的语音原生基础模型。

🔗 **开源详情**

- **代码**：论文明确表示“我们将发布代码和模型以支持进一步研究”，但文中未提供具体的GitHub等代码仓库链接。
- **模型权重**：论文表示将发布模型，但未提及具体的权重下载地址或发布平台。
- **数据集**：预训练数据主要来自互联网收集和合成，未整体公开。监督微调数据基于多个开源数据集构建，论文列出了使用的数据集名称（见附录B表7），但最终构建的语音SFT数据集未提及公开。
- **Demo**：论文中未提及提供在线演示。
- **复现材料**：提供了详细的预训练和微调策略、数据处理流程（包括数据统计、VAD、对齐方法）、关键超参数、消融实验设置，以及分析工具（层相似度计算）的描述，复现信息较为充分。
- **引用的开源项目**：Qwen3-8B（骨干）、CosyVoice 2（分词器解码器）、GLM-4-Voice Tokenizer（分词器编码器基础）、Seed-TTS（语音合成）、SenseVoice-Small（质量过滤）、pyannote（VAD）、FineWeb-Eu（数据）、Librispeech（评估）等。

📌 **核心摘要**

1. **问题**：传统的语音对话系统采用“ASR-LLM-TTS”级联架构，会丢失语音中的副语言信息（如情感、语气），且延迟较高。近期的端到端方法虽有改进，但仍依赖中间文本表示进行生成，形成信息瓶颈。
2. **方法核心**：提出一种真正的语音到语音大模型架构。核心是**基于模态的层分割**（在Transformer深层将隐藏状态路由到文本和语音两个专用输出分支）和**冻结预训练**策略（第一阶段冻结文本骨干参数，仅训练语音相关组件）。语音分词器采用基于ASR训练的编码器（语义强）和流匹配解码器（高保真）。
3. **创新点**：1) 架构上，通过层分割实现深层的模态融合与专用生成，避免了浅层适配带来的能力损失。2) 训练策略上，冻结预训练有效保持了文本LLM的知识和推理能力，同时让语音模块与之对齐。3) 实现了无需文本指导的、端到端的语音理解与生成，同时支持文本/语音混合输入输出。
4. **主要实验结果**：在语音问答任务上（LlamaQA, TriviaQA, WebQA）达到或超过现有文本指导系统（如GLM-4-Voice）的性能。在文本能力保持上，MMLU（67.19）和CMMLU（69.53）分数远超同样具备语音能力的SpiritLM（MMLU 36.90）。消融实验证实，层分割和冻结预训练对性能与能力保持均有显著贡献。双盲人工评估显示，在处理停顿、填充词等非言语行为时，本模型（MOS 4.17-4.25）显著优于GPT-4o、Gemini等基线。
    | 模型 | LlamaQA (S→S) | TriviaQA (S→S) | WebQA (S→S) | MMLU | CMMLU |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | GLM-4-Voice | 50.70 | 26.50 | 15.90 | 57.49 | 54.39 |
    | **Ours** | **63.67** | 28.80 | **36.71** | **67.19** | **69.53** |
    *表：关键性能对比（部分数据，Ours为本模型）*
5. **实际意义**：推动了语音对话系统从“文本指导”向“真正端到端”的范式转变，为构建更自然、高效、富有表现力的语音交互AI奠定了基础。
6. **主要局限性**：1) 模型能力严重依赖于所采用的文本LLM骨干，非语音原生架构。2) 高质量监督微调数据仍需大量合成，可能存在领域偏差。3) 对极端低资源或噪声环境下的鲁棒性未充分验证。

---

### 11. [Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-03-human-or-machine-a-preliminary-turing-test-for)

✅ **7.0/10** | 前25% | #语音对话系统 | #基准测试 | #模型评估 #多语言

👥 **作者与机构**

- 第一作者：Xiang Li (李翔)（北京邮电大学网络与交换技术国家重点实验室；深圳大数据研究院；香港中文大学（深圳）；深圳 loop 区研究院）
- 通讯作者：Jiale Han（香港科技大学）
- 作者列表：Xiang Li（同上）、Jiabao Gao（香港中文大学（深圳））、Sipei Lin（香港中文大学（深圳））、Xuan Zhou（香港中文大学（深圳））、Chi Zhang（香港中文大学（深圳））、Bo Cheng（北京邮电大学）、Jiale Han（香港科技大学）、Benyou Wang（王本友）（深圳大数据研究院；香港中文大学（深圳）；深圳 loop 区研究院）

💡 **毒舌点评**

**亮点**：论文首次系统性地对S2S对话系统进行了图灵测试级别的“拟人性”评估，构建的18维诊断分类法和发现“瓶颈在情感韵律而非语义”的结论，为该领域提供了清晰的改进地图，工程价值显著。
**短板**：研究的本质是“评估”而非“构建”，虽然评估框架本身有创新，但容易给人“评测论文”的印象；其提出的AI评判器虽有效，但技术新颖度有限，主要依赖于对现有大模型的微调与投影层设计。

🔗 **开源详情**

- **代码**：提供代码仓库链接：`https://github.com/Carbohydrate1001/Turing-Test`。
- **模型权重**：论文中提到公开了模型，但未明确链接。根据README，应通过上述代码仓库获取。
- **数据集**：论文中描述已公开，可通过上述代码仓库获取。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：提供了极其详尽的复现材料，包括：完整的对话数据集构建过程（附录B）、图灵测试平台设计（附录C）、细粒度标注指南与流程（附录D）、AI评判器的完整训练细节、超参数设置、消融实验与敏感性分析（附录E）。
- **论文中引用的开源项目**：Qwen2.5-Omni（骨干模型），用于对话合成的Nari Dia-1.6B和Spark-TTS。用于数据筛选的开源数据集：DailyTalk, IEMOCAP, MagicData。

📌 **核心摘要**

1. **问题**：随着语音对话系统（S2S）的发展，一个根本问题是：它们能否像人类一样对话？现有评估多侧重智能或理解能力，缺乏对“拟人性”的整体图灵测试。
2. **方法核心**：本文构建了首个针对S2S系统的图灵测试框架。收集了人类-人类、人类-机器、伪人类（TTS合成）对话数据集。通过游戏化平台收集近3000个人类判断，评估9个S2S系统。进一步开发了18维人类相似性细粒度分类法，对对话进行标注以诊断失败原因。最后，提出一个可解释的AI评判模型，用于自动化拟人性评估。
3. **新意**：是首个针对端到端S2S系统的图灵测试评估；超越了二元的“通过/失败”结果，提供了细粒度的诊断分析；发现现有AI模型作为评判者不可靠，并提出了一个性能更优且可解释的替代方案。
4. **主要实验结果**：
    - **图灵测试通过率**：没有一个S2S系统通过测试（成功率均远低于0.5）。人类-人类对话成功率最高（英语0.87，中文0.70）。伪人类对话成功率优于大多数S2S系统。
    - **诊断分析（见下图）**：细粒度评分显示，当前S2S系统在**记忆一致性**、**逻辑连贯性**和**发音准确性**上接近人类水平，但在**韵律、语调**（如节奏、重音）、**情感表达**（文本情感、声学情感）以及**机械人格**（谄媚、书面化表达）上存在显著短板。
    - **AI评判器性能（见下图）**：本文提出的可解释AI��判器总体分类准确率达**96.05%**，显著高于人类评判者的**72.84%**和原版Qwen2.5-Omni的**41.63%**。
5. **实际意义**：为S2S系统的发展提供了明确的优化方向：应重点关注提升副语言特征、情感表达能力和对话人格，而不仅仅是语义理解。同时，提供了一个可自动、可诊断的评估工具。
6. **主要局限性**：评估基于主观的人类判断，可能受评判者文化背景和熟悉度影响；所提出的AI评判器虽然性能优异，但其在更广泛、更真实世界场景下的泛化能力仍需持续验证。

**图5：细粒度人类相似性维度评分（1-5分）**
![图5](icassp-img://Pv5l6cvfno/4.png)
图5展示了18个人类相似性维度的众包评分结果。可以清晰地看到，S2S系统在“记忆一致性”、“逻辑连贯性”和“发音准确性”等维度上得分较高（接近4分），而在“节奏”、“语调”、“重音”、“文本情感”、“声学情感”和“谄媚行为”等维度上得分显著较低（约2-3分），这直观地揭示了当前系统的拟人性瓶颈。

**表2：不同AI模型在图灵测试数据上的分类准确率**
| Model                     | ACC(H-H)↑ | ACC(H-M)↑ | ACC(PH)↑ | Overall↑ |
|---------------------------|------------|------------|----------|----------|
| Human Judgement           | 0.7028     | 0.8357     | 0.6384   | 0.7284   |
| Gemini 2.5 pro            | 0.5775     | 0.7292     | 0.5764   | 0.6279   |
| ... (其他8个模型，准确率均更低) |            |            |          |          |
| **Average of Model Judgement** | **0.6238** | **0.4011** | **0.3130** | **0.4527** |
此表显示，9个现有的多模态AI模型作为图灵测试评判者时，整体准确率平均仅为0.4527，远低于人类评判者（0.7284），且普遍存在分类偏差。

**表3：二元分类准确率比较**
| Data Type       | Qwen2.5-Omni | Qwen2.5-Omni(LoRA) | Human Judge | **Ours** |
|-----------------|--------------|---------------------|-------------|----------|
| Human-Human↑    | 0.7817       | 0.9230              | 0.7028      | **0.9507** |
| Human-Machine↑  | 0.2361       | 0.6319              | 0.8357      | **0.9722** |
| Pseudo Human ↑  | 0.2361       | 0.0972              | 0.6384      | **0.9306** |
| **Overall ↑**   | **0.4163**   | **0.5744**          | **0.7284**  | **0.9605** |
此表证明，本文提出的可解释AI评判器在各类数据上的分类准确率全面超越了基线模型和人类评判者，达到最先进的水平。

---

