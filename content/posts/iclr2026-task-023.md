---
title: "ICLR 2026 - 语音对话系统 论文列表"
date: 2026-05-03
draft: false
tags: ["语音对话系统"]
categories: [iclr-2026]
description: "共 10 篇 ICLR 2026 语音对话系统 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音对话系统

共 **10** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Human or Machine? A Preliminary Turing Test for Speech-to-Sp](/audio-paper-digest-blog/posts/2026-05-03-human-or-machine-a-preliminary-turing-test-for) | 10.0分 | 前10% |
| 🥈 | [Closing the Gap Between Text and Speech Understanding in LLM](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech) | 10.0分 | 前10% |
| 🥉 | [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-03-end-to-end-listen-look-speak-and-act) | 9.5分 | 前25% |
| 4. | [ParaS2S: Benchmarking and Aligning Spoken Language Models fo](/audio-paper-digest-blog/posts/2026-05-03-paras2s-benchmarking-and-aligning-spoken-language) | 8.0分 | 前25% |
| 5. | [From Text to Talk: Audio-Language Model Needs Non-Autoregres](/audio-paper-digest-blog/posts/2026-05-03-from-text-to-talk-audio-language-model-needs-non) | 8.0分 | 前25% |
| 6. | [DrVoice: Parallel Speech-Text Voice Conversation Model via D](/audio-paper-digest-blog/posts/2026-05-03-drvoice-parallel-speech-text-voice-conversation) | 8.0分 | 前25% |
| 7. | [STITCH: Simultaneous Thinking and Talking with Chunked Reaso](/audio-paper-digest-blog/posts/2026-05-03-stitch-simultaneous-thinking-and-talking-with) | 7.5分 | 前25% |
| 8. | [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy](/audio-paper-digest-blog/posts/2026-05-03-voxprivacy-a-benchmark-for-evaluating) | 7.5分 | 前25% |
| 9. | [WearVox: An Egocentric Multichannel Voice Assistant Benchmar](/audio-paper-digest-blog/posts/2026-05-03-wearvox-an-egocentric-multichannel-voice) | 7.5分 | 前25% |
| 10. | [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-03-towards-true-speech-to-speech-models-without-text) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-03-human-or-machine-a-preliminary-turing-test-for)

🔥 **10.0/10** | 前10% | #语音对话系统 | #模型评估 | #数据集 #多语言

👥 **作者与机构**

- 第一作者：Xiang Li（北京邮电大学网络与交换技术国家重点实验室；香港中文大学（深圳）；深圳大数据研究院；深圳河套研究院）
- 通讯作者：Jiale Han（香港科技大学）
- 作者列表：Xiang Li（北京邮电大学，香港中文大学（深圳）等）、Jiabao Gao（香港中文大学（深圳））、Sipei Lin（香港中文大学（深圳））、Xuan Zhou（香港中文大学（深圳））、Chi Zhang（香港中文大学（深圳））、Bo Cheng（北京邮电大学）、Jiale Han（香港科技大学）、Benyou Wang（香港中文大学（深圳），深圳大数据研究院等）

💡 **毒舌点评**

亮点：这篇论文在“评估方法论”上做到了教科书级别的严谨与完整，从测试平台设计、细粒度诊断维度构建到可解释AI评判器的开发，形成了一套可直接复用的工具链，对推动整个语音交互领域的“人性化”进程有实实在在的贡献。短板：虽然框架优秀，但论文的测试集规模（约2小时伪人对话）和覆盖的S2S系统数量（9个）仍属“初步”探索，结论的普适性有待更大规模数据验证；且其定义的“人类相似性”18个维度主要基于文献和专家经验，缺乏更底层的心理声学或认知科学验证。

📌 **核心摘要**

本文针对现代语音到语音（S2S）系统是否真正具备“类人”对话能力这一核心问题，首次开展了系统性的图灵测试。作者构建了包含9个S2S系统、28位人类参与者、涵盖中英双语和多话题的高质量对话数据集（人机、人人、伪人对话），并通过一个游戏化的在线平台收集了近3000条人类判断。核心实验结果是：没有任何一个被评估的S2S系统通过图灵测试，其成功率（被判定为人的比例）均显著低于50%的机会水平（见论文下图）。
![论文中的实验结果图](icassp-img://Pv5l6cvfno/3.png)
图4(a)显示，所有S2S系统的成功率（蓝色和橙色点）都远低于0.5的随机线，而人人对话（灰色点）成功率高，证实了评估设计的有效性。
为深入诊断失败原因，论文提出了一个包含5大类18个细粒度维度的人类相似性分类法，并进行了大规模众包标注。分析发现，S2S系统的瓶颈并非语义理解，而是在副语言特征（如韵律）、情感表达和对话人格方面存在显著差距（见论文下图）。
![论文中的实验结果图](icassp-img://Pv5l6cvfno/4.png)
图5展示了18个维度上，S2S系统（蓝线）与人类（绿线）的平均评分对比。在“记忆一致性”、“逻辑连贯性”等语义维度上差距较小，但在“节奏”、“语调”、“情感表达”等维度上差距明显。
此外，论文发现现成的AI模型作为图灵测试评委表现不佳（平均准确率45.3%）。为此，作者提出了一种可解释的AI评判模型，该模型首先学习预测18个细粒度维度的评分，再基于这些评分进行人类/机器分类。该模型在测试集上达到了96.05%的整体准确率，显著超越人类评委（72.84%）和其他基线模型。本工作为S2S系统建立了首个全面的人类相似性评估框架和诊断工具，指明了未来向更自然、更具人性的对话AI发展的关键方向。

---

### 🥈 [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech)

🔥 **10.0/10** | 前10% | #语音对话系统 | #知识蒸馏 | #跨模态 #数据高效

👥 **作者与机构**

- 第一作者：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS）
- 通讯作者：未明确说明（第二作者 Skyler Seto 来自 Apple，可能是联系人）
- 作者列表：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS）、Skyler Seto（Apple）、Maureen de Seyssel（Apple）、Richard He Bai（Apple）、Zijin Gu（Apple）、Tatiana Likhomanenko（Apple）、Navdeep Jaitly（Apple）、Zakaria Aldeneh（Apple）

💡 **毒舌点评**

亮点在于，本文没有陷入“用更多数据砸出性能”的惯性思维，而是先用定量工具手术刀般剖开了“差距”的病灶（遗忘与失对齐），然后精准用药（蒸馏+主动选择），用极低的数据成本就让一个3B/7B模型达到了媲美更大、更耗数据模型的水平。短板是，尽管是“端到端”模型，但当前工作仅完成了从语音到文本生成这一步，距离能自然输出语音的完整语音助手尚有距离，这更像是一个关键的中继站而非终点。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重计划。
- 数据集：使用了公开数据集LibriHeavy、Emilia和FineWeb-Edu。合成语音部分使用了Kokoro-TTS。
- Demo：未提及在线演示。
- 复现材料：在附录（A.1-A.3， A.5）中提供了极其详细的模型描述、训练细节（优化器、学习率、调度、混合比例）、评估协议（模板、few-shot设置），可复现性极高。
- 论文中引用的开源项目：Kokoro-TTS, Mimi speech tokenizer, Qwen2.5 LLMs, Whisper (用于部分分析), BAAI/bge-large-en-v1.5 embeddings, SmolLM, Hugging Face transformers/datasets。

📌 **核心摘要**

1. 解决的问题：现有的将文本大语言模型适配为能处理语音输入的模型（语音适配LLM）在语言理解任务上性能显著下降，始终落后于原始文本模型乃至级联系统。作者将此现象定义为“文本-语音理解差距”。
2. 方法核心：提出SALAD（Sample-efficient Alignment with Learning through Active selection and cross-modal Distillation）方法。该方法通过两阶段训练：第一阶段在自然语音数据上使用跨模态知识蒸馏（以文本LLM为教师）来对齐模态并缓解遗忘；第二阶段使用主动学习算法，优先选择那些模型自身跨模态失对齐程度最高的文本样本进行语音合成，以高效地填补领域空白。
3. 与已有方法相比的新意：首次系统量化并分析了“遗忘”和“跨模态失对齐”这两个因素如何分别影响文本和语音性能，并发现它们均可预测最终差距。不同于依赖海量合成数据或私有数据集的方法，SALAD在公开数据上实现了数据高效（训练数据量少一个数量级）且性能可比的解决方案。
4. 主要实验结果：在3B和7B模型上，SALAD显著缩小了理解差距。以7B模型为例，在六个广泛领域的知识推理基准测试中，SALAD-7B的语音文本差距平均为6.2%，明显优于大多数端到端基线（如DiVA的26.1%，GLM-4-Voice的20.1%），并接近最强闭源模型Qwen2.5-Omni（5.0%）。关键对比数据见下表：

| 模型 | 平均语音理解准确率(%) | 平均文本-语音差距(%) | 备注 |
| :--- | :--- | :--- | :--- |
| ASR + Qwen2.5-7B (级联) | 79.4 | 2.2 | 强基线 |
| Qwen2.5-Omni-7B | 76.7 | 5.0 | 最强闭源端到端模型 |
| SALAD-7B | 75.4 | 6.2 | 本方法 |
| GLM-4-Voice-9B | 63.4 | 20.1 | |
| DiVA-Llama3.1-8B | 52.6 | 26.1 | |

5. 实际意义：证明了通过精细的问题分析和巧妙的训练目标设计，可以显著降低构建高性能语音语言模型对数据的需求，为资源受限的研究和应用开辟了更可行的路径。
6. 主要局限性：本研究聚焦于语音理解（生成文本），并未解决语音生成（输出语音）的问题，因此构建的模型尚非完整的语音交互助手。其有效性高度依赖于底层文本LLM（教师模型）的能力和公开语音数据的质量。

---

### 🥉 [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-03-end-to-end-listen-look-speak-and-act)

🔥 **9.5/10** | 前25% | #语音对话系统 | #多模态模型 | #全双工 #端到端

👥 **作者与机构**

- 第一作者：Siyin Wang（清华大学）
- 通讯作者：Chao Zhang（清华大学）
- 作者列表：Siyin Wang（清华大学）、Wenyi Yu（清华大学）、Xianzhao Chen（字节跳动）、Xiaohai Tian（字节跳动）、Jun Zhang（字节跳动）、Lu Lu（字节跳动）、Yuxuan Wang（未说明）、Chao Zhang（清华大学）

💡 **毒舌点评**

ELLSA真正做到了“听、看、说、做”四件事同时开工，像个人类一样在说话的同时还能干活，这在当前以“分时处理”为主的多模态大模型中绝对是里程碑式的突破。但别高兴太早，论文里所有“干活”的部分都在LIBERO这种纯模拟器里完成，真到了真实厨房或工厂，机械臂会不会因为“一心二用”打翻酱油罐，还未经考验。

🔗 **开源详情**

- 代码：论文承诺将代码开源，GitHub仓库为 https://github.com/bytedance/SALMONN。
- 模型权重：论文承诺将提供模型检查点。
- 数据集：论文承诺将发布所有数据。训练数据细节见附录B表6，部分数据（如缺陷指令、上下文VQA标注）由模型生成，附录E提供了相关提示词。
- Demo：论文中未提及在线演示。
- 复现材料：提供了完整的模型规格（附录A）、训练细节（附录B）、评估细节（附录C）、任务定义（附录D）、实验用提示词（附录E）以及大量消融实验结果（附录F-I），复现材料非常充分。
- 论文中引用的开源项目：
    - 模型/架构：LLaMA-3.1-8B-Instruct, Emu3 (Emu3-Base, Emu3-VisionTokenizer), UniVLA, FAST, Mamba, CosyVoice2-0.5B, SPEAR。
    - 数据集：LibriSpeech, GigaSpeech, LIBERO, Alpaca-52k, Web Questions, TriviaQA, SQuAD, Natural Questions, VoiceAssistant-400k, UltraChat。
    - 工具：Whisper-medium-en/large-v3（用于数据过滤和评估）。

📌 **核心摘要**

这篇论文旨在解决当前AI模型无法像人类一样进行实时、多模态、全双工交互的问题。现有模型要么“能说会道”但无法行动（如语音大模型），要么“能干活”但无法说话（如VLA模型），且大多采用半双工、轮流发言的模式。为解决此问题，作者提出了ELLSA（End-to-end Listen, Look, Speak and Act）模型，这是首个在单一架构内统一处理视觉、语音、文本和动作的全双工端到端模型。其核心是创新的SA-MoE（自注意力混合专家）架构，将不同模态路由给专门的专家模块（语音专家处理语音/文本，动作专家处理视觉/动作），并通过统一的自注意力机制进行融合，从而在保持各专家性能的同时实现跨模态信息交互。实验结果表明，ELLSA不仅在语音交互和机器人操作基准测试上达到了与专用模型相当的性能（如在LIBERO基准上平均任务成功率达89.4%，超过π0-FAST的85.5%），更实现了前所未有的高级交互能力，包括边说边做（speaking-while-acting）、基于上下文的视觉问答、拒绝错误指令和动作中断。其实际意义在于为构建更自然、通用的人机交互智能体提供了可行的技术路径。主要局限性是目前仅在模拟环境中验证，尚未在真实物理世界进行部署和测试。

---

### 4. [ParaS2S: Benchmarking and Aligning Spoken Language Models for Paralinguistic-aware Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-03-paras2s-benchmarking-and-aligning-spoken-language)

🔥 **8.0/10** | 前25% | #语音对话系统 | #强化学习 | #基准测试 #语音大模型

👥 **作者与机构**

- 第一作者：Shu-wen Yang（台湾大学电气工程研究所，字节跳动Seed团队）
- 通讯作者：Ming Tu（字节跳动Seed团队）、Lu Lu（字节跳动Seed团队）
- 作者列表：Shu-wen Yang（台湾大学电气工程研究所，字节跳动Seed团队）、Ming Tu（字节跳动Seed团队）、Andy T. Liu（字节跳动Seed团队）、Xinghua Qu（字节跳动Seed团队）、Hung-yi Lee（台湾大学电气工程研究所）、Lu Lu（字节跳动Seed团队）、Yuxuan Wang（字节跳动Seed团队）、Yonghui Wu（字节跳动Seed团队）

💡 **毒舌点评**

亮点：论文一针见血地指出了当前所有S2S模型在面对用户情绪、语气变化时“呆若木鸡”的共性问题，并提出了一套从“考试”（ParaS2SBench）到“教官”（自动评估器）再到“训练营”（ParaS2SAlign RL）的完整解决方案，系统性极强。
短板：作为核心的“教官”——自动评估器，虽然相关性优于基线，但其上限似乎卡在了0.8以下，这意味着它可能无法完美模拟人类评委的微妙判断，从而给RL训练设置了“天花板”；另外，论文虽然展示了RL的高效性，但其训练的稳定性、对基础模型能力的潜在影响等细节未充分讨论。

🔗 **开源详情**

- 代码：论文中明确声明将开源代码，但未提供具体链接。
- 模型权重：论文中明确声明将开源模型，但未提供具体下载方式或链接。
- 数据集：论文中明确声明将开源ParaS2SBench数据集，但未提供下载链接。
- Demo：论文提供了项目主页和在线演示链接：https://paras2sbench.github.io/。
- 复现材料：论文附录（A.2-A.8）提供了非常详细的数据构造流程、模型配置、训练超参数、评估指南和所有使用的提示词模板，复现信息充分。
- 引用的开源项目：Whisper-V3, AudioReasoner, Emotion2Vec, Kimi-Audio, Qwen2.5-Omni, CosyVoice, YourTTS, LoRA等。

📌 **核心摘要**

1.  问题：现有的语音到语音（S2S）模型虽然能进行对话，但普遍缺乏对用户语音中的副语言信息（如情绪、语气、年龄、性别）的感知和恰当回应能力，导致对话“不通情达理”。同时，缺乏能够评估这种能力的公开基准。
2.  方法核心：提出了ParaS2S框架，包含两大部分：1) ParaS2SBench，一个专门设计来测试模型副语言意识的基准，其特点是使用内容中立但风格对比强烈的查询；2) ParaS2SAlign，一个强化学习（RL）框架，利用一个分阶段的自动评估器作为奖励信号来训练模型。
3.  与已有方法相比新在哪里：1) 首次为S2S模型构建了端到端评估副语言意识的基准（以往基准止步于文本评估）。2) 提出了一种“语言解耦”的多阶段自动评估器（PolyTone训练+LLM判断），有效缓解了端到端音频大模型判断时的“风格幻觉”问题，其评分与人类更相关。3) 证明了利用该评估器进行RL训练，可以在极少的人工标注数据下，超越使用大量数据的监督微调（SFT）方法。
4.  主要实验结果：
    *   评估器有效性：多阶段自动评估器与人类评分的皮尔逊相关系数最高达到0.776（O2行），显著优于端到端音频LLM基线（0.618）。
    *   模型性能：在ParaS2SBench上，经过RL（GRPO）训练的Kimi-Audio模型（4.382分）相比纯SFT（3.955分）提升约10.8%，并超越所有现有开源和闭源模型。具体分数见下表。

    | 模型/方法 | 合成数据平均分 | 真实数据平均分 | 总平均分 |
    | :--- | :--- | :--- | :--- |
    | Whisper-GPT-TTS (基线) | 3.022 | 3.487 | 3.176 |
    | GPT-4o Voice Mode | 3.284 | 3.639 | 3.403 |
    | Qwen2.5 Omni | 3.248 | 3.612 | 3.369 |
    | Kimi-Audio SFT (本文) | 4.076 | 3.714 | 3.955 |
    | Kimi-Audio GRPO (本文) | 4.441 | 4.161 | 4.382 |
    | GPT-TTS (Topline) | 4.705 | 4.766 | 4.725 |

5.  实际意义：为开发更自然、更有同理心的语音交互系统提供了关键的评估工具和高效的训练范式，证明了通过RL和可扩展的自动评估，能以更低的数据成本提升模型的副语言意识，推动S2S模型从“能说会道”向“善解人意”迈进。
6.  主要局限性：自动评估器虽优于基线，但相关性仍未达到完美（<0.8），可能成为RL训练的性能天花板；评估主要围绕英语展开，跨语言适用性未验证；训练和评估的查询在主题和TTS音色上做了隔离，但模型在更复杂真实场景中的泛化能力仍需观察。

---

### 5. [From Text to Talk: Audio-Language Model Needs Non-Autoregressive Joint Training](/audio-paper-digest-blog/posts/2026-05-03-from-text-to-talk-audio-language-model-needs-non)

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

亮点：论文精准地抓住了现有统一语音模型中“用单一自回归目标训练文本和音频”这一根本矛盾，并给出了一个理论上优美、实践中有效的混合解决方案（TtT），其训练策略（如SST）设计得非常工程化且有针对性。
短板：虽然实验结果强劲，但模型的可扩展性尚未得到充分验证（仅测试了3B规模），且NAR扩散生成的200步迭代在推理效率上是否真能优于大型自回归模型，论文未提供直接的延迟数据对比，这使得其“高效”的实际落地优势有待商榷。

🔗 **开源详情**

- 代码：论文提供了GitHub仓库链接：https://github.com/ai4ed/TtT。
- 模型权重：论文中提及“code and data are publicly available”，但未明确说明是否包含预训练或微调后的模型权重。
- 数据集：训练数据集为多个公开数据集的组合（详见表4），论文未提及会提供额外的合成或处理后的训练数据。评估数据集（表7）均为公开基准。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文在附录中提供了极其详细的训练数据格式、数据集构成、评估协议、超参数设置、算法伪代码以及硬件配置，为复现提供了充分信息。
- 依赖的开源项目：
    - 模型骨架：Qwen2.5-Base (1.5B/3B)。
    - 音频编解码器：沿用GLM-4-Voice的设计。
    - ASR模型：Whisper-Large-v3 (英语), Paraformer-zh (中文) 用于评估。
    - 评估模型：Qwen3-30B-A3B 用作LLM-as-a-Judge。
    - 训练框架：DeepSpeed。

📌 **核心摘要**

1. 要解决什么问题：现有的端到端语音对话模型（如Moshi, GLM-4-Voice）通常使用统一的自回归（AR）范式生成文本和音频令牌，但这忽略了文本生成（强目标-目标依赖）与音频生成（强源-目标依赖）在依赖结构上的根本不对称性，导致训练动态不佳和误差传播。
2. 方法核心是什么：提出Text-to-Talk (TtT)框架，在一个Transformer中集成AR生成用于文本和基于吸收离散扩散的非自回归（NAR）生成用于音频。关键设计包括：1）利用吸收扩散的任意顺序AR特性建立统一训练目标；2）设计模态感知注意力机制（文本用因果注意力，音频跨度内双向注意力）；3）引入三个训练策略（BANOM, PPM, SST）来弥合训练-测试差异。
3. 与已有方法相比新在哪里：不同于现有方法对两种模态采用相同的AR训练目标，TtT首次在统一的模型和目标中明确地为文本和音频分配了最适合其特性的生成范式（AR vs. NAR扩散），并提供了理论分析和专门的训练策略来解决由此产生的挑战。
4. 主要实验结果如何：
    - Audio-QA与ASR：在1.5B和3B规模上，TtT一致性优于纯AR和纯NAR基线。例如，TtT-3B在AlpacaEval上得分17.46，而AR基线为14.42；在AISHELL-2 ASR上WER为12.53，AR基线为54.94。
    - 与SOTA对比：在≤3B模型组中，Pretrain+TtT在Audio-QA和ASR上达到最优，并在URO-Bench（一个综合S2S基准）上取得最佳表现（如基础任务总分：理解57.63，推理39.30，口语对话45.68）。
    - 消融实验：移除任何一个训练策略（BANOM, PPM, SST）都会导致性能下降，证实了每个策略的贡献。例如，移除SST后，LLaMAQuestions分数从34.68降至10.20。

    | 模型 (3B) | Audio-QA (↑) | ASR (↓) | URO-Bench Basic (↑) |
    | :--- | :--- | :--- | :--- |
    | 数据集 | AE. LQ. TQA. WQ. | Fzh. A2. A1. WS m. WS n. Fen. | 理解 推理 口语 |
    | Qwen2.5-3B (AR) | 14.42 10.00 0.60 0.70 | 90.32 54.94 72.01 80.01 73.64 74.47 | - - - |
    | Qwen2.5-3B (NAR) | 11.31 0.67 1.21 0.70 | 68.94 212.27 160.58 89.22 111.29 83.51 | - - - |
    | TtT-3B | 17.46 34.68 6.53 11.61 | 55.67 12.53 13.65 53.83 44.29 64.31 | - - - |
    | Pretrain+TtT | 26.73 40.07 11.07 21.43 | 18.99 6.80 5.78 27.59 19.85 19.10 | 57.63 39.30 45.68 |

5. 实际意义是什么：为构建更高效、自然且延迟更低的端到端语音对话系统提供了一种新的架构范式。其混合生成思想可能对其他需要处理不同模态生成特性的多模态AI应用有启发。
6. 主要局限性是什么：1) 论文仅验证了1.5B和3B的规模，更大模型的性能和稳定性未知；2) NAR音频生成的推理步数（200步）可能带来实际延迟，与流式AR模型的对比分析不足；3) 音频生成质量（如URO-Bench中的NMOS/UTMOS分数）与最强模型相比仍有差距。

---

### 6. [DrVoice: Parallel Speech-Text Voice Conversation Model via Dual-Resolution Speech Representations](/audio-paper-digest-blog/posts/2026-05-03-drvoice-parallel-speech-text-voice-conversation)

🔥 **8.0/10** | 前25% | #语音对话系统 | #自回归模型 | #语音大模型 #端到端

👥 **作者与机构**

- 第一作者：Chao-Hong Tan (Tongyi Fun Team, Alibaba Group)
- 通讯作者：论文中未明确指定唯一通讯作者，但列出了联系邮箱，作者列表首位为Chao-Hong Tan，机构为阿里巴巴通义听觉团队。
- 作者列表：Chao-Hong Tan, Qian Chen, Wen Wang, Chong Deng, Qinglin Zhang, Luyao Cheng, Hai Yu, Xin Zhang, Xiang Lv, Tianyu Zhao, Chong Zhang, Yukun Ma, Yafeng Chen, Hui Wang, Jiaqing Liu, Xiangang Li, Jieping Ye（均来自 Tongyi Fun Team, Alibaba Group）

💡 **毒舌点评**

亮点：DrVoice的双分辨率机制（DRSR）是一个巧妙的工程创新，通过简单的分组策略将LLM的输入帧率从12.5Hz降至5Hz，不仅显著降低了计算成本（训练时间减少近50%），还缓解了语音与文本令牌频率不匹配的问题，实验结果全面SOTA，效率与性能兼得。  
短板：论文在语音生成质量（ASR-WER）的对比上存在不足，虽然UTMOS得分有竞争力，但ASR-WER（8.36）落后于Qwen2.5-Omni（3.48），作者归因于架构设计，但这表明其语音与文本的对齐精度仍有提升空间。此外，所有实验均基于英文数据集，缺乏多语言或跨语言能力的验证。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/FunAudioLLM/Fun-Audio-Chat`。
- 模型权重：论文中明确表示将发布基于增强基座模型的所有源代码和模型检查点。
- 数据集：训练数据未公开，但论文说明了数据合成方法（使用CosyVoice）和筛选流程，并提供了复现所需的脚本和说明。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了详尽的附录（A.实现细节），包括所有超参数（学习率、批量大小等）、训练配置、硬件规格（64x A800 GPU）和训练时长。
- 论文中引用的开源项目：Whisper-Large-v3（语音编码器）、CosyVoice（语音分词器/解码器/S3Tokenizer）、Qwen2.5（基础LLM）、HiFi-GAN（声码器）、DeepSpeed（训练框架）。

📌 **核心摘要**

1.  要解决的问题：现有端到端语音-文本联合生成模型（如Kimi-Audio）面临两个挑战：一是使用12.5Hz的音频表示导致计算成本高昂；二是高帧率的语音令牌与低帧率（~3Hz）文本令牌之间存在频率不匹配，这削弱了LLM的语义处理能力。
2.  方法核心：提出DrVoice，一个并行的语音-文本对话模型，其核心是双分辨率语音表示（DRSR）。在输入端，通过分组机制将25Hz的离散语音令牌压缩为5Hz的表示，送入LLM；在输出端，设计了一个语音精炼头（SRH），以自回归方式从LLM的隐藏状态中逐个生成原始25Hz的语音令牌，以恢复细节。
3.  与已有方法相比新在哪里：相比采用固定12.5Hz输入/输出的Kimi-Audio等模型，DrVoice首次引入了输入低分辨率（5Hz）与输出高分辨率（25Hz）的双分辨率架构。这既保证了LLM处���效率，又通过SRH保障了生成语音的自然度。此外，论文还提出了CoM-Mixing（链式模态混合）和Core-Cocktail（核心鸡尾酒）两种新颖的训练策略。
4.  主要实验结果：DrVoice-7B在多个权威基准上取得了SOTA性能。在OpenAudioBench（语音理解）上总体得分72.04（第二名69.08），在VoiceBench（语音助手）上得分80.17（第二名76.93），在UltraEval-Audio（语音理解与生成）上得分56.66（第二名50.46），在Big Bench Audio（推理与理解）上得分74.0（第二名55.2）。计算效率方面，由于将LLM输入帧率降至5Hz，训练GPU小时数减少了近50%。语音质量方面，其UTMOS得分（4.29）与最佳模型相当。
5.  实际意义：DrVoice为构建高效、高质量的端到端语音对话系统提供了一个有力的开源基线模型。其双分辨率设计思路对其他多模态生成任务（如音视频）有启发意义，降低了在资源受限设备上部署复杂语音模型的门槛。
6.  主要局限性：1) 语音生成质量的对齐指标（ASR-WER）并非最优；2) 论文未报告模型在多语言场景下的性能；3) 消融研究显示，移除连续语音编码器（CSE）或语音精炼头（SRH）会导致性能显著下降，表明模型对某些组件依赖较强。

---

### 7. [STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models](/audio-paper-digest-blog/posts/2026-05-03-stitch-simultaneous-thinking-and-talking-with)

✅ **7.5/10** | 前25% | #语音对话系统 | #自回归模型 | #大语言模型 #流式处理

👥 **作者与机构**

- 第一作者：Cheng-Han Chiang（台湾大学， 微软实习期间完成工作）
- 通讯作者：Xiaofei Wang（微软）
- 作者列表：Cheng-Han Chiang（台湾大学）， Xiaofei Wang（微软）， Linjie Li（微软）， Chung-Ching Lin（微软）， Kevin Lin（微软）， Shujie Liu（微软）， Zhendong Wang（微软）， Zhengyuan Yang（微软）， Hung-yi Lee（台湾大学）， Lijuan Wang（微软）

#

💡 **毒舌点评**

亮点在于其“分块推理”（Chunked Reasoning）的设计思路，将内部思考与外部语音输出在时间线上交错缝合，巧妙地在不增加首包延迟的前提下为语音模型注入了推理能力，工程思维值得称赞。短板在于其依赖GPT-4为训练数据生成高质量的推理链（CoT），这在实际部署中可能是一个瓶颈，且验证场景集中在数学题，模型在更复杂、开放域的推理任务上是否同样有效还需打个问号。

#

🔗 **开源详情**

- 代码：论文提供了项目页面链接 (https://d223302.github.io/STITCH)，其中可能包含示例和部分代码，但论文中未明确提及完整代码库的链接。
- 模型权重：论文中未提及会公开微调后的模型权重。
- 数据集：论文公开了测试用的语音数学数据集链接 (https://huggingface.co/datasets/dcml0714/speech_math)，训练数据构造流程详细，但依赖原始数据集和GPT-4生成。
- Demo：项目页面可能包含演示动画（Animations and demonstrations）。
- 复现材料：提供了非常充分的复现材料，包括：详细的超参数配置（附录C）、训练数据构造的完整流程和提示词（附录B）、训练硬件和时长、关键的消融实验设置、甚至包括了LoRA微调失败等负面结果（附录F）。
- 引用的开源项目：LlamaFactory (用于微调)、vLLM (用于推理)、CosyVoice (语音解码器)、Whisper (用于转写评估)、OpenAudioBench (用于评估)等。

📌 **核心摘要**

这篇论文针对当前语音语言模型（SLM）缺乏内部思考过程、难以处理复杂推理任务的问题，提出了STITCH（Simultaneous Thinking and Talking with Chunked Reasoning）生成框架。其核心是让SLM在生成语音回应的同时，交错生成用于内部思考的“推理token”。与传统的“先完成完整思考链再说话”（TBS）方法相比，STITCH利用语音块播放所需的时间来生成下一段推理token，从而实现了“同步思考与说话”，大幅降低了响应延迟。论文提出了两种变体：STITCH-R（先思考再说话）和STITCH-S（先说话再思考），其中STITCH-S能达到与不具备推理能力的基线模型相同的首包延迟。主要实验结果表明，在五个数学问答数据集上，STITCH-S相比不具备推理能力的基线平均准确率提升了约15%，与TBS相比性能接近但延迟显著降低；在非推理数据集上性能与基线相当。该工作的实际意义在于为构建更智能、响应更及时的语音对话助手提供了一种新思路。主要局限性是其高质量推理训练数据依赖于GPT-4等强模型生成，且验证任务以数学推理为主。

#

---

### 8. [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy of Speech Language Models](/audio-paper-digest-blog/posts/2026-05-03-voxprivacy-a-benchmark-for-evaluating)

✅ **7.5/10** | 前25% | #语音对话系统 | #基准测试 | #说话人识别 #音频大模型

👥 **作者与机构**

- 第一作者：Yuxiang Wang（香港中文大学（深圳））
- 通讯作者：未说明（论文未明确标注）
- 作者列表：Yuxiang Wang¹， HongYu Liu¹， Dekun Chen¹， Xueyao Zhang¹， Zhizheng Wu¹,²,³,⁴ (¹香港中文大学（深圳）， ²深圳大数据研究院， ³澳门城市大学， ⁴Amphion Technology Co., Ltd.)

💡 **毒舌点评**

亮点：论文开创性地定义了“交互隐私”这一极具现实意义的评估维度，并用一个分层、双语、涵盖合成与真实语音的基准体系进行了严谨的量化评估，直指当前语音大模型在多用户场景下的核心安全短板。短板：尽管评估体系设计精巧，但论文提供的“解决方案”（基于SFT微调）相对保守，更侧重于诊断问题而非提出具有范式革新性的模型架构或训练方法来根本性解决该问题，解决方案的“天花板”可能受限于基础模型的表达能力。

🔗 **开源详情**

- 代码：论文中未提及代码链接。但提到将发布微调模型，通常伴随推理代码。
- 模型权重：承诺发布在“未来”释放的VoxPrivacy资源中，包括微调后的Kimi-Audio模型。具体链接未提供。
- 数据集：VoxPrivacy基准数据集、Real-VoxPrivacy验证子集以及4000小时训练集均承诺发布，具体获取方式未说明（通常通过项目主页或Hugging Face）。
- Demo：提供了Demo页面链接：https://myflashbarry.github.io/VoxPrivacy.github.io/。
- 复现材料：附录（A、C、D、F、G、J）提供了详细的提示模板、训练数据构成、对抗攻击设计、评估标准等，复现性指导较充分。
- 引用的开源项目：CosyVoice2 (TTS)， Whisper-large-v3 (ASR)， Deepseek， Gemini等模型作为评判工具。评测集使用了AISHELL-2， WenetSpeech的说话人池。

📌 **核心摘要**

1.  要解决什么问题：本文旨在解决语音语言模型（SLMs）在多用户共享环境（如智能家庭）中面临的一项新型隐私挑战——交互隐私。即模型必须能根据说话人身份，正确管理信息流向，防止一个用户共享的私密信息被其他用户查询到。
2.  方法核心是什么：核心是提出并开源VoxPrivacy基准测试框架。该框架定义了三个难度递增的任务层级来系统评估交互隐私：Tier 1（直接服从保密指令）、Tier 2（基于声纹验证的条件保密）、Tier 3（无需指令的主动隐私保护推断）。基准包含7107个样本，总计32.86小时的中英双语音频，并包含一个小规模的人工录制验证集（Real-VoxPrivacy）。
3.  与已有方法相比新在哪里：与现有基准相比，VoxPrivacy填补了三大空白：1）超越了说话人无关的对话能力测试（如VoiceBench）；2）超越了仅分析“谁说了什么”但不评估“模型如何响应”的多说话人分析基准（如MSU-Bench）；3）区别于仅关注全局敏感信息（如密码）的隐私评估（如AudioTrust），首次系统性地评估基于上下文的敏感信息（如个人日程）管理能力。
4.  主要实验结果如何：对9个SLM的评估显示，交互隐私是当前模型的普遍弱点。在需要说话人感知的Tier 2和Tier 3任务上，大多数开源模型准确率接近随机猜测（~50%）。闭源的Gemini系列模型表现更好，但在更难的Tier 3上仍有显著差距。人类录音验证集证实了合成数据上的发现。通过在一个4000小时数据集上微调Kimi-Audio，模型性能大幅提升，达到与闭源模型可比的水平。关键结果数据见下表（Tier 1 & Tier 2/3摘要）：

| 模型 | Tier 1 (EN) 准确率 | Tier 2 (EN) 准确率 | Tier 3 (EN) 准确率 |
| :--- | :---: | :---: | :---: |
| LLM (上界) | 98.01% | 88.37% | 85.21% |
| Gemini-2.5-pro | 81.95% | 76.05% | 66.28% |
| Qwen2.5Omni | 39.41% | 48.27% | 50.18% |
| 微调模型 (Ours) | 87.92% | 83.93% | 77.57% |

5.  实际意义是什么：该工作为开发安全、可信的共享环境语音助手提供了关键的评估标尺和改进方向。揭示的模型缺陷（特别是缺乏说话人意识和上下文隐私推理能力）直接指导了未来模型训练需要超越单说话人数据，并集成更精细的声纹-语义绑定能力。
6.  主要局限性是什么：1）评估主要基于合成语音，尽管有人类录音验证，但真实场景的复杂性（如环境噪声、说话人重叠、自然对话流）可能未被完全覆盖。2）所提出的解决方案是监督微调，未探索强化学习等可能更擅长处理复杂决策的方法。3）隐私规范具有文化特异性，当前基准的“秘密”类别可能无法完全覆盖所有文化语境下的隐私定义。

---

### 9. [WearVox: An Egocentric Multichannel Voice Assistant Benchmark for Wearables](/audio-paper-digest-blog/posts/2026-05-03-wearvox-an-egocentric-multichannel-voice)

✅ **7.5/10** | 前25% | #语音对话系统 | #基准测试 | #多通道 #鲁棒性

👥 **作者与机构**

- 第一作者：Zhaojiang Lin (Meta)，Yong Xu (Meta)，Kai Sun (Meta) （论文明确标注三人共同第一作者）
- 通讯作者：未说明（论文未明确标注通讯作者，但提供了zhaoliang@meta.com等邮箱）
- 作者列表：
    - Zhaojiang Lin, Yong Xu, Kai Sun, Jing Zheng, Yin Huang, Surya Teja Appini, Krish Narang, Renjie Tao, Ishan Kapil Jain, Siddhant Arora†, Ruizhi Li, Yiteng Huang, Kaushik Patnaik, Wenfang Xu, Suwon Shon, Yue Liu, Ahmed A Aly, Anuj Kumar, Florian Metze, Xin Luna Dong （来自Meta）
    - Siddhant Arora† （同时隶属于Carnegie Mellon University）

#

💡 **毒舌点评**

亮点在于填补了可穿戴语音助手评估的空白，构建了一个极具现实感的多任务、多环境、多角色评测基准，其“问题意识”和实验设计远超许多“为了用而用”的论文。短板则是基准的绝对规模仍然偏小（不到4K对话），且作为一篇提出基准的论文，其自身提出的“解决方案”（MC WearLlama）只是一个概念验证案例，并未展现出颠覆性的模型架构创新，略显保守。

#

🔗 **开源详情**

- 代码：提供了数据集的GitHub仓库链接：https://github.com/facebookresearch/wearvox。该仓库预计包含数据下载、评测脚本等。
- 模型权重：未提及案例研究模型（MC/SC WearLlama）的权重是否开源。评测的其他SLLM（如GPT-4o, Gemini）为闭源API。
- 数据集：WearVox数据集通过上述GitHub链接公开。
- Demo：未提及在线演示。
- 复现材料：在附录中详细给出了各任务的提示词（Listing 1-4）、LLM裁判的提示词（Listing 5-6）、数据收集流程（Figure 4-5）、噪声环境分布（Figure 6-7）以及模型架构细节（Section A.6），复现信息较为充分。
- 引用的开源项目：论文依赖了多个开源模型和工具，包括Whisper, Llama 3.3/4系列, Qwen2.5-Omni, Gemma 3n, Kimi-Audio, Phi-4 Multimodal等作为评测基线。

📌 **核心摘要**

这篇论文旨在解决可穿戴设备（如AI眼镜）语音助手缺乏专用评测基准的问题。现有基准忽略了第一视角音频、运动噪声、快速交互和区分设备定向语音等特有挑战。为此，作者构建了WearVox，首个专门用于评估可穿戴语音助手的基准，包含3842个多通道、第一视角音频录音，覆盖5类任务（搜索问答、闭书问答、侧向对话拒绝、工具调用、语音翻译）。与已有基准相比，其核心新意在于首次系统性地聚焦于可穿戴场景的真实复杂性，特别是多通道空间音频和动态对话环境。主要实验结果显示，当前主流实时语音大语言模型在WearVox上的准确率仅为29%-59%，且在噪声户外环境下性能显著下降，证明了该基准的挑战性和现实性。通过案例研究，论文证明了多通道音频输入能显著提升模型抗噪性和区分设备定向/背景语音的能力（例如侧向对话拒绝准确率从85.6%提升至93.9%）。该工作的实际意义是为可穿戴语音AI研究提供了一个全面的测试平台，明确了性能瓶颈和未来研究方向（如空间音频的重要性）。主要局限性是基准数据集规模相对有限，且提出的多通道模型仅为概念验证，未完全开源。

#

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

#

💡 **毒舌点评**

亮点在于，通过“模态层分割”和“冻结预训练”两个关键设计，系统性地解决了将文本LLM能力迁移到语音模态时，如何平衡性能与知识保持这个核心工程难题。但短板也同样明显：该模型高度依赖一个强大且已经预训练好的文本LLM骨干（Qwen-3-8B），其核心创新更多体现在适配与整合策略上，而非一个从零开始、具有独立生命力的语音原生基础模型。

#

🔗 **开源详情**

- 代码：论文明确表示“我们将发布代码和模型以支持进一步研究”，但文中未提供具体的GitHub等代码仓库链接。
- 模型权重：论文表示将发布模型，但未提及具体的权重下载地址或发布平台。
- 数据集：预训练数据主要来自互联网收集和合成，未整体公开。监督微调数据基于多个开源数据集构建，论文列出了使用的数据集名称（见附录B表7），但最终构建的语音SFT数据集未提及公开。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了详细的预训练和微调策略、数据处理流程（包括数据统计、VAD、对齐方法）、关键超参数、消融实验设置，以及分析工具（层相似度计算）的描述，复现信息较为充分。
- 引用的开源项目：Qwen3-8B（骨干）、CosyVoice 2（分词器解码器）、GLM-4-Voice Tokenizer（分词器编码器基础）、Seed-TTS（语音合成）、SenseVoice-Small（质量过滤）、pyannote（VAD）、FineWeb-Eu（数据）、Librispeech（评估）等。

📌 **核心摘要**

1. 问题：传统的语音对话系统采用“ASR-LLM-TTS”级联架构，会丢失语音中的副语言信息（如情感、语气），且延迟较高。近期的端到端方法虽有改进，但仍依赖中间文本表示进行生成，形成信息瓶颈。
2. 方法核心：提出一种真正的语音到语音大模型架构。核心是基于模态的层分割（在Transformer深层将隐藏状态路由到文本和语音两个专用输出分支）和冻结预训练策略（第一阶段冻结文本骨干参数，仅训练语音相关组件）。语音分词器采用基于ASR训练的编码器（语义强）和流匹配解码器（高保真）。
3. 创新点：1) 架构上，通过层分割实现深层的模态融合与专用生成，避免了浅层适配带来的能力损失。2) 训练策略上，冻结预训练有效保持了文本LLM的知识和推理能力，同时让语音模块与之对齐。3) 实现了无需文本指导的、端到端的语音理解与生成，同时支持文本/语音混合输入输出。
4. 主要实验结果：在语音问答任务上（LlamaQA, TriviaQA, WebQA）达到或超过现有文本指导系统（如GLM-4-Voice）的性能。在文本能力保持上，MMLU（67.19）和CMMLU（69.53）分数远超同样具备语音能力的SpiritLM（MMLU 36.90）。消融实验证实，层分割和冻结预训练对性能与能力保持均有显著贡献。双盲人工评估显示，在处理停顿、填充词等非言语行为时，本模型（MOS 4.17-4.25）显著优于GPT-4o、Gemini等基线。
    | 模型 | LlamaQA (S→S) | TriviaQA (S→S) | WebQA (S→S) | MMLU | CMMLU |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | GLM-4-Voice | 50.70 | 26.50 | 15.90 | 57.49 | 54.39 |
    | Ours | 63.67 | 28.80 | 36.71 | 67.19 | 69.53 |
    表：关键性能对比（部分数据，Ours为本模型）
5. 实际意义：推动了语音对话系统从“文本指导”向“真正端到端”的范式转变，为构建更自然、高效、富有表现力的语音交互AI奠定了基础。
6. 主要局限性：1) 模型能力严重依赖于所采用的文本LLM骨干，非语音原生架构。2) 高质量监督微调数据仍需大量合成，可能存在领域偏差。3) 对极端低资源或噪声环境下的鲁棒性未充分验证。

#

---

