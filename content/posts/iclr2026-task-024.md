---
title: "ICLR 2026 - 语音对话系统 论文列表"
date: 2026-05-03
draft: false
tags: ["语音对话系统"]
categories: [iclr-2026]
description: "共 9 篇 ICLR 2026 语音对话系统 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音对话系统

共 **9** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-03-end-to-end-listen-look-speak-and-act) | 8.5分 | 前25% |
| 🥈 | [DrVoice: Parallel Speech-Text Voice Conversation Model via D](/audio-paper-digest-blog/posts/2026-05-03-drvoice-parallel-speech-text-voice-conversation) | 8.5分 | 前25% |
| 🥉 | [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-03-towards-true-speech-to-speech-models-without-text) | 8.5分 | 前25% |
| 4. | [Human or Machine? A Preliminary Turing Test for Speech-to-Sp](/audio-paper-digest-blog/posts/2026-05-03-human-or-machine-a-preliminary-turing-test-for) | 8.0分 | 前25% |
| 5. | [Closing the Gap Between Text and Speech Understanding in LLM](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech) | 8.0分 | 前25% |
| 6. | [STITCH: Simultaneous Thinking and Talking with Chunked Reaso](/audio-paper-digest-blog/posts/2026-05-03-stitch-simultaneous-thinking-and-talking-with) | 7.5分 | 前25% |
| 7. | [ParaS2S: Benchmarking and Aligning Spoken Language Models fo](/audio-paper-digest-blog/posts/2026-05-03-paras2s-benchmarking-and-aligning-spoken-language) | 7.5分 | 前25% |
| 8. | [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-03-can-speech-llms-think-while-listening) | 7.5分 | 前25% |
| 9. | [From Text to Talk: Audio-Language Model Needs Non-Autoregres](/audio-paper-digest-blog/posts/2026-05-03-from-text-to-talk-audio-language-model-needs-non) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-03-end-to-end-listen-look-speak-and-act)

🔥 **8.5/10** | 前25% | #语音对话系统 | #端到端 | #多模态模型 #机器人控制

👥 **作者与机构**

- 第一作者：Siyin Wang（清华大学）
- 通讯作者：Chao Zhang（清华大学）
- 作者列表：Siyin Wang (清华大学)、Wenyi Yu (清华大学)、Xianzhao Chen (字节跳动)、Xiaohai Tian (字节跳动)、Jun Zhang (字节跳动)、Lu Lu (字节跳动)、Yuxuan Wang (字节跳动)、Chao Zhang (清华大学)

💡 **毒舌点评**

这篇论文的亮点在于其宏大的系统集成视野和SA-MoE架构的巧妙设计，成功将语音交互大模型和视觉-语言-动作模型融合，实现了真正意义上的“耳眼口手并用”的AI智能体，展现了惊人的多任务能力。然而，短板也很明显：所有验证均停留在仿真环境（LIBERO），缺乏真实物理世界的闭环测试，其宣称的“更自然、更人类”的交互能力在嘈杂、非结构化的现实场景中能否成立，存在巨大问号，使得这项工作的实际落地价值仍需打上一个大大的问号。

🔗 **开源详情**

- 代码：论文明确承诺将公开代码，仓库链接为 `https://github.com/bytedance/SALMONN`。
- 模型权重：承诺将发布模型检查点。
- 数据集：训练数据集部分为公开数据集（如LibriSpeech, LIBERO），部分为合成或标注数据。论文承诺将发布所有数据。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了详尽的模型架构规格、训练细节、超参数、数据集说明以及评估基准描述（附录A-D）。还提供了用于评估的提示模板（附录E）。
- 论文中引用的开源项目：
    - LLM骨干：LLaMA-3.1-8B-Instruct
    - 语音编码器：Mamba
    - 语音合成器：CosyVoice2-0.5B
    - 视觉分词器：Emu3-VisionTokenizer
    - 动作分词器：FAST
    - 动作专家骨干：Emu3-Base, UniVLA
    - ASR过滤器：Whisper-medium-en
    - 评估用LLM：GPT-4.1, Gemini-2.5-Pro

📌 **核心摘要**

1.  要解决的问题：现有AI模型大多只能实现半双工、单模态的交互（如只能对话或只能执行指令），无法像人类一样同时处理多模态输入（听、看）并生成多模态输出（说、做），也难以应对实时对话中的打断、轮次切换等复杂动态。
2.  方法核心：提出了ELLSA模型，核心是SA-MoE（自注意力混合专家）架构。该架构将不同模态（语音/文本、视觉/动作）分配给专用的“专家”模块，并通过统一的自注意力机制将它们连接起来，在保持各专家模态专业性的同时实现跨模态信息融合。
3.  与已有方法相比新在哪里：
    *   首次实现：首个能同时进行听（语音输入）、看（视觉输入）、说（语音输出）、做（动作输出）的全双工、端到端统一模型。
    *   架构创新：SA-MoE架构高效解决了多模态融合中的干扰问题，并利用了预训练模型的知识。
    *   能力解锁：实现了前所未有的交互模式，如“边做边说”（说话时继续执行动作）、“动作打断”（听到中断指令立即停止动作）、以及需要结合所有模态信息的“上下文感知视觉问答”。
4.  主要实验结果：
    *   基础能力：在语音问答（Llama Questions准确率74.7%）、语音对话（AlpacaEval GPTScore 3.09）、语音条件机器人操作（LIBERO基准平均成功率89.4%）上，性能与专用模型持平或更优（见表1，表2）。
    *   高级能力：在全新设计的对话/动作轮次预测、缺陷指令拒绝、“边做边说”等任务上成功率接近100%（见表3），展示了强大的全双工控制能力。
    *   架构有效性：消融实验证明SA-MoE在性能和效率上显著优于单一密集模型（见表7）。
5.  实际意义：为构建更自然、更通用的交互式具身智能体（如家庭服务机器人）提供了可行的技术架构和范例，推动了多模态交互向更接近人类的方式演进。
6.  主要局限性：所有实验均在模拟环境（LIBERO）中进行，未在真实物理世界中进行验证；高级交互场景（如动作打断）的评估相对简单，尚未涉及更复杂的社交互动（如反馈信号“嗯嗯”）；模型在“边做边说”时性能有所下降，表明同时处理多个输出流仍存在挑战。

---

### 🥈 [DrVoice: Parallel Speech-Text Voice Conversation Model via Dual-Resolution Speech Representations](/audio-paper-digest-blog/posts/2026-05-03-drvoice-parallel-speech-text-voice-conversation)

🔥 **8.5/10** | 前25% | #语音对话系统 | #并行建模 | #大语言模型 #端到端

👥 **作者与机构**

- 第一作者：Chao-Hong Tan (阿里巴巴集团通义Fun团队)
- 通讯作者：Chao-Hong Tan (根据邮箱tanchaohong.ch@alibaba-inc.com判断)
- 作者列表：Chao-Hong Tan、Qian Chen、Wen Wang、Chong Deng、Qinglin Zhang、Luyao Cheng、Hai Yu、Xin Zhang、Xiang Lyu、Tianyu Zhao、Chong Zhang、Yukun Ma、Yafeng Chen、Hui Wang、Jiaqing Liu、Xiangang Li、Jieping Ye (所有作者均隶属于阿里巴巴集团通义Fun团队)

💡 **毒舌点评**

亮点：DrVoice的“双分辨率”设计堪称精妙，通过一个简单的“分组-解组”机制，既大幅压缩了LLM的输入序列长度（从25Hz到5Hz），降低了计算成本，又通过并行的语音细化头（SRH）保证了输出语音的细节质量，实现了效率与性能的漂亮平衡。短板：尽管在多个S2T和S2S基准上刷榜成功，但论文对于生成语音的情感、韵律等副语言特性的分析和控制讨论不足，这或许是“并行建模”架构为了追求对齐与效率而做出的潜在妥协。此外，模型重度依赖冻结的S3Tokenizer和CosyVoice作为上游组件，其自身贡献的“生成”部分更多是预测离散token，真正的端到端声学建模能力有待更细致的审视。

🔗 **开源详情**

- 代码：论文明确承诺在发表后于 `https://github.com/FunAudioLLM/Fun-Audio-Chat` 开源完整源代码。
- 模型权重：论文提到将开源基于增强基础模型的模型检查点（model checkpoint based on enhanced base model）。
- 数据集：论文说明训练数据使用公开的CosyVoice模型合成，并承诺提供复现数据集所需的脚本和说明。但不直接开源合成后的数据集本身。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了详细的实施细节（附录A），包括模型架构选择、超参数设置、训练设置（硬件、优化器、学习率计划等）；提供了系统提示模板（附录B）；进行了多方面的消融分析（附录C）。
- 论文中引用的开源项目：
    - 语音编码器：Whisper-Large-v3
    - 基础LLM：Qwen2.5-7B-Instruct， Qwen2.5-1.5B-Instruct
    - 语音分词器/解分词器：S3Tokenizer， CosyVoice（及其Flow Matching模型和HiFi-GAN声码器）
    - 训练框架：DeepSpeed ZeRO-2
    - 评估基准/工具：OpenAudioBench， VoiceBench， UltraEval-Audio， Big Bench Audio， G-Eval， UTMOS

📌 **核心摘要**

1.  要解决的问题：现有端到端语音对话模型主要面临两大挑战：一是文本生成与语音合成流程分离导致模态交互不足；二是并行生成时，语音token的高帧率（如12.5Hz）与文本token的低帧率（~3Hz）存在严重失配，导致LLM语义处理能力被稀释，且计算成本高昂。
2.  方法核心：提出DrVoice，一个基于并行语音文本联合自回归建模的语音对话模型。其核心是双分辨率语音表示（DRSR）机制：输入端通过分组将25Hz离散语音token压缩为5Hz表示输入LLM；输出端，LLM的隐状态经映射后，由自回归的语音细化头（SRH）以5Hz预测语音token，再解组恢复细节。
3.  新在哪里：与现有12.5Hz帧率的联合建模方法相比，DrVoice通过DRSR将LLM的输入/输出帧率降至5Hz，显著减少计算量并缓解模态频率不匹配。同时，创新性地设计了SRH来弥补分组带来的信息损失，并引入CoM-Mixing和Core-Cocktail训练策略来优化多模态交互与知识保留。
4.  主要实验结果：DrVoice-7B在四个权威基准上全面达到SOTA。在OpenAudioBench（音频理解）整体得分72.04，VoiceBench（语音助手）整体得分80.17，UltraEval-Audio（语音理解与生成）整体得分56.66，Big Bench Audio整体得分74.0。在语音质量上，其UTMOS（4.29）与Qwen2.5-Omni（4.28）持平，ASR-WER（8.36）优于大部分基线。关键消融实验表明，分组因子为5时，相比因子1可提升性能并减少近50% GPU 训练时间。
5.  实际意义：DrVoice为构建高效、高质量的开源语音对话基础模型提供了新的技术范式。其降低LLM输入帧率的思路对所有需要处理长序列的多模态大模型具有参考价值，使得在有限算力下训练和部署强大的语音交互模型成为可能。
6.  主要局限性：1) 论文未深入探讨生成语音在情感、语调等副语言特性上的表现与控制能力。2) 模型的输出质量部分依赖于冻结的上游语音分词器和解分词器，限制了整体架构的灵活性与可优化空间。3) 未来工作需进一步解决全双工交互和扩展至更广泛音频任务。

---

### 🥉 [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-03-towards-true-speech-to-speech-models-without-text)

🔥 **8.5/10** | 前25% | #语音对话系统 | #预训练 | #语音大模型 #端到端

👥 **作者与机构**

- 第一作者：Xingjian Zhao（复旦大学，上海创新研究院，MOSI.AI）
- 通讯作者：Xipeng Qiu（复旦大学）
- 作者列表：Xingjian Zhao（复旦大学，上海创新研究院，MOSI.AI）、Zhe Xu（复旦大学，上海创新研究院，MOSI.AI）、Luozhijie Jin（复旦大学，上海创新研究院，MOSI.AI）、Yang Wang（复旦大学，MOSI.AI）、Hanfu Chen（复旦大学，MOSI.AI）、Yaozhou Jiang（复旦大学，MOSI.AI）、Ke Chen（复旦大学，上海创新研究院，MOSI.AI）、Ruixiao Li（复旦大学，上海创新研究院，MOSI.AI）、Mingshu Chen（复旦大学，MOSI.AI）、Ruiming Wang（复旦大学，MOSI.AI）、Wenbo Zhang（复旦大学，上海创新研究院，MOSI.AI）、Qinyuan Cheng（复旦大学，MOSI.AI）、Zhaoye Fei（复旦大学，MOSI.AI）、Shimin Li（MOSI.AI）、Xipeng Qiu（复旦大学，上海创新研究院，MOSI.AI）

💡 **毒舌点评**

这篇工作最大的亮点在于其“模态层分割”设计巧妙地利用了跨模态表征在不同深度的对齐规律，并通过冻结策略有效保护了基座LLM的文本能力，在“Speech-to-Speech”和“Speech-to-Text”任务上取得了扎实的性能。不过，其声称“真正的无文本指导”在严格意义上可能仍需商榷，因为其预训练数据包含大量文本与语音的交错对，且SFT阶段也使用了文本指令，本质上是让模型学习了一种将文本能力“转译”为语音输出的映射，而非完全摆脱了文本监督信号的“影响”。

🔗 **开源详情**

- 代码：论文中未提及具体代码仓库链接，但明确表示“We will release our code and models”。
- 模型权重：论文中未提及公开权重，但承诺发布。
- 数据集：预训练数据来源（互联网音频、FineWeb-Edu）已说明，但未提供直接下载链接。SFT数据基于多个开源数据集构建，具体列表见附录表7，但合成后的语音数据集未提及公开。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的训练策略描述（两阶段）、超参数设置（学习率、batch size、epoch等）、架构细节（层分割点、分词器设计）以及评估指标和代码来源（如使用Whisper、Paraformer进行WER计算）。附录中包含更多技术细节（如层间相似度计算公式、解冻学习率调度）。
- 论文中引用的开源项目：CosyVoice 2 (TTS/解码器)、GLM-4-Voice Tokenizer (编码器基线)、Qwen3-8B (骨干LLM)、Seed-TTS (SFT语音合成)、pyannote (VAD)、Whisper, Paraformer (评估工具)、Librispeech, Seed-TTS-Eval (评估数据集)。

📌 **核心摘要**

1. 问题：现有的语音对话系统要么是级联管道（ASR→LLM→TTS），丢失了副语言信息；要么是文本指导的端到端模型，生成时仍依赖中间文本，引入了延迟和表达瓶颈。同时，在扩展LLM到语音模态时，如何保持其原有的文本推理能力是一个挑战。
2. 方法核心：提出了一种基于模态层分割（Modality-based Layer Split）和冻结预训练（Frozen Pre-training）的架构。模型初始化自预训练文本LLM（Qwen3-8B），在底层共享大部分Transformer层进行跨模态融合，在顶层将层分割为分别用于生成文本和语音token的模态特定分支。训练分两阶段：第一阶段冻结文本骨干，仅训练语音相关组件；第二阶段联合训练但引入大量纯文本数据以防止文本能力下降。
3. 新意：与主要依赖文本指导或简单词汇表扩展的方法不同，本文提出的架构设计直接源于对跨模态表征相似性随模型深度变化规律的观察（图2），并通过分阶段训练策略，旨在实现“真正的”端到端语音理解与生成，并更好地平衡新模态学习与旧知识保留。
4. 主要结果：在预训练评估中，模型在StoryCloze（语音续写）和MMLU/CMMLU（文本知识）上超越了GLM-4-Voice和SpiritLM（表4）。在监督微调后的语音问答任务（Speech-to-Speech设置）中，在LlamaQA、TriviaQA和WebQA上取得了最优或接近最优的性能（表5）。消融实验证实了模态层分割和冻结预训练的有效性（表6）。人工评估（附录H）显示模型在生成停顿、填充词等非语言行为上表现突出。
5. 实际意义：推动了端到端语音对话模型的发展，为构建更自然、低延迟、富有表现力的人机语音交互系统提供了新的技术路径，并证明了在保持LLM强大语言能力的同时赋予其原生语音模态的可行性。
6. 局限性：论文中未提及训练所使用的具体硬件和耗时。虽然承诺开源，但当前代码和模型权重未公开，影响即时复现性。其“无文本指导”的主张在技术路线上可能依赖于文本-语音对齐数据，与完全在语音信号上从头训练的范式仍有区别。

---

### 4. [Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-03-human-or-machine-a-preliminary-turing-test-for)

🔥 **8.0/10** | 前25% | #语音对话系统 | #基准测试 | #人机对话 #可解释性

👥 **作者与机构**

- 第一作者：Xiang Li (香港中文大学（深圳）、北京邮电大学网络与交换技术国家重点实验室、深圳大数据研究院、深圳 loop area institute)（论文中标注了*equal contribution）
- 通讯作者：Jiale Han (香港科技大学)
- 作者列表：Xiang Li（香港中文大学（深圳）、北京邮电大学网络与交换技术国家重点实验室）、Jiabao Gao（香港中文大学（深圳））、Sipei Lin（香港中文大学（深圳））、Xuan Zhou（香港中文大学（深圳））、Chi Zhang（香港中文大学（深圳））、Bo Cheng（北京邮电大学网络与交换技术国家重点实验室）、Jiale Han（香港科技大学）、Benyou Wang（香港中文大学（深圳）、深圳大数据研究院）

💡 **毒舌点评**

亮点： 这篇论文的“体检报告”做得异常漂亮——从构建包含9个最先进S2S系统的“考场”，到设计18维度的“诊断量表”，再到搭建游戏化评测平台并训练一个可解释的“AI医生”，整个评估体系设计得非常系统、严谨且具备前瞻性。
短板： 然而，它更像是一份详尽的病理学分析报告，明确指出了S2S系统“死于”副语言特征、情感表达和人格的缺失，却并未开出具体的“药方”——论文没有提出任何针对这些瓶颈的新型模型或训练方法，诊断出的问题也非新发现，这让其贡献停留在了“评估与诊断”层面，而非“解决”。

🔗 **开源详情**

- 代码：是，提供了代码仓库链接：`https://github.com/Carbohydrate1001/Turing-Test.`
- 模型权重：是，论文中提及“our code, dataset, and models”已公开，推测评判模型权重在代码仓库中。
- 数据集：是，构建的1486段对话（17.7小时）数据集已公开。
- Demo：论文提及部署了一个游戏化的在线评测平台，但未提供具体链接。
- 复现材料：非常充分。论文在正文中描述了数据集构建、平台设计、训练框架，并在附录中提供了所有模型的详细设置、超参数网格搜索过程、消融实验、标注指南、质量控制流程等。
- 引用的开源项目/模型：Qwen2.5-Omni（作为骨干模型和评判基线）、Nari Dia-1.6B和Spark-TTS（用于合成伪人类对话）、CosyVoice2（用于分布外测试）。

📌 **核心摘要**

1.  问题： 本文旨在解决一个关键问题：当前的语音到语音对话系统能否像人类一样对话？这是比文本图灵测试更难的挑战。
2.  方法核心： 论文首次针对S2S系统开展了大规模的图灵测试，并设计了一个综合评估框架。核心包括：构建包含人-人、人-机、伪人类（TTS）三类对话的高质量数据集；开发包含18个细粒度维度的人性化分类学进行诊断；以及训练一个可解释的AI评判模型。
3.  与已有的区别： 与现有聚焦于语音理解或任务完成的基准不同，本文是第一个专注于评估S2S系统在多轮语音交互中“人性化程度”的研究。它超越了二元通过/失败，提供了多维度诊断。
4.  主要实验结果：
    *   图灵测试成功率：所有9个评估的S2S系统均未通过测试，成功率在0.07到0.31之间，远低于人类-人类对话（英文0.87，中文0.70）。
    *   诊断发现：语义理解（如逻辑连贯性、记忆一致性）已不是主要瓶颈，得分接近人类。主要瓶颈在于副语言特征（节奏、语调机械）、情感表达（缺乏细微情绪）和对话人格（过于谄媚、表达正式）。
    *   AI评判模型性能：提出的可解释AI评判模型在二元分类上准确率高达96.05%，显著优于人类评判者（72.84%）和现有多模态大模型。
5.  实际意义： 为社区提供了首个针对S2S系统人性化水平的标准化评估框架、一个公开的多语言数据集以及一个可自动、诊断性评估的工具，为改进人性化对话系统指明了具体方向（应关注副语言、情感和人格）。
6.  主要局限性： 论文的核心贡献是评估和诊断，而非解决所发现的问题。它没有提出新的模型或训练方法来直接提升S2S系统在副语言、情感等瓶颈维度上的表现。

---

### 5. [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech)

🔥 **8.0/10** | 前25% | #语音对话系统 | #知识蒸馏 | #语音大模型 #大语言模型

👥 **作者与机构**

- 第一作者：Santiago Cuervo (Université de Toulon, Aix Marseille Université, CNRS, LIS)
- 通讯作者：未说明
- 作者列表：Santiago Cuervo (Université de Toulon, Aix Marseille Université, CNRS, LIS)、Skyler Seto (Apple)、Maureen de Seyssel (Apple)、Richard He Bai (Apple)、Zijin Gu (Apple)、Tatiana Likhomanenko (Apple)、Navdeep Jaitly (Apple)、Zakaria Aldeneh (Apple)

💡 **毒舌点评**

这篇论文的亮点在于它系统地剖析了“文本-语音理解差距”的两大根源——遗忘与跨模态失配，并据此提出了一套高效且可复现的解决方案（SALAD），在用数据量远少于竞品（如Qwen2.5-Omni）的情况下取得了接近甚至更优的性能，其分析过程和实验设计逻辑清晰、颇具启发性。短板则在于，其方法强依赖于使用特定TTS模型（Kokoro）合成特定领域数据来弥合分布差距，而实验中合成语音的质量和多样性（如单一说话人）是否能在更真实、更多变的交互场景中保持有效性，仍是一个开放问题，且论文未提供代码与模型权重。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用了公开数据集（LibriHeavy, Emilia, FineWeb-Edu），但论文未提供其处理后的数据版本。
- Demo：未提及。
- 复现材料：论文在附录（A.1-A.8）中提供了详细的模型架构、训练超参数、评估协议、聚类标注流程及部分消融实验细节，为复现提供了良好的文本指南。
- 论文中引用的开源项目：提到了使用Kokoro-TTS进行语音合成、Mimi作为语音编码器、BAAI/bge-large-en-v1.5用于文本嵌入、SmolLM用于缓解遗忘、Whisper-Large-v3用于级联基线。

📌 **核心摘要**

1.  问题：现有的语音适配大语言模型（Speech-Adapted LLMs）在语言理解任务上持续落后于其原始文本版本甚至级联系统，这一性能差距被称为“文本-语音理解差距”。
2.  方法核心：本文提出SALAD（Sample-efficient Alignment with Learning through Active selection and cross-modal Distillation），该方法分为两个阶段：首先在自然语音数据上进行跨模态知识蒸馏（以文本LLM为教师），然后通过主动学习选择性合成少量关键领域语音数据，以进一步弥合域分布差距。
3.  创新点：1） 量化并验证了“遗忘”和“跨模态失配”是导致理解差距的主要原因。2） 证明了跨模态蒸馏目标（α>0）在减少失配和遗忘方面显著优于标准最大似然估计（NLL）。3） 提出了一种基于模型失配信号的主动数据选择算法，用极少量合成数据覆盖自然语音语料库的领域盲区。
4.  实验结果：在3B和7B规模上，SALAD在六个广泛领域的语音理解基准（如StoryCloze, MMSU, OBQA等）上，性能与使用超大规模数据训练的强基线（如Qwen2.5-Omni-7B）具有竞争力，同时使用的语音训练数据量少一个数量级以上。具体地，SALAD-7B在平均准确率上达到75.4%，与Qwen2.5-Omni-7B的76.7%差距仅1.2%，且其平均文本-语音差距（6.2%）小于后者（5.0%）。关键消融实验证明，主动选择策略相比随机选择能带来显著提升（例如在MMSU上提升3%）。
5.  实际意义：该研究为构建高效、数据高效的端到端语音理解模型提供了清晰路径，减少了对大规模合成数据或专有数据集的依赖，推动了语音交互系统的开放与可复现研究。
6.  主要局限性：方法第二阶段依赖于使用单一TTS模型合成数据，合成语音的自然度、说话人多样性以及对噪声的鲁棒性可能影响泛化能力；论文主要关注从语音到文本的中间表征生成，未涉及语音输出的端到端生成。

---

### 6. [STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models](/audio-paper-digest-blog/posts/2026-05-03-stitch-simultaneous-thinking-and-talking-with)

✅ **7.5/10** | 前25% | #语音对话系统 | #自回归模型 | #语音大模型 #推理

👥 **作者与机构**

- 第一作者：Cheng-Han Chiang (台湾大学，微软)
- 通讯作者：Xiaofei Wang (微软)
- 作者列表：Cheng-Han Chiang (台湾大学，微软)、Xiaofei Wang (微软)、Linjie Li (微软)、Chung-Ching Lin (微软)、Kevin Lin (微软)、Shujie Liu (微软)、Zhendong Wang (微软)、Zhengyuan Yang (微软)、Hung-yi Lee (台湾大学)、Lijuan Wang (微软)

💡 **毒舌点评**

这篇论文的精髓在于它找到了一个聪明的“时间差”——利用语音解码播放音频的“空闲”时间来完成思考，从而将“思考-说话”从串行变成了流水线。然而，它本质上是一种针对特定架构（GLM-4-Voice）的高效解码策略，虽然实用，但更像是对现有模型能力的“调度优化”，而非模型能力的根本突破。此外，不提供代码的“闭门造车”模式，对于想要跟进的研究者来说相当不友好。

🔗 **开源详情**

- 代码：论文中未提及代码链接。作者提供了项目主页`https://d223302.github.io/STITCH`，但主要用于演示，未明确说明是否包含训练/推理代码。
- 模型权重：未提及公开权重。论文中使用的GLM-4-Voice是公开模型，但本文微调后的TBS、STITCH-R、STITCH-S模型未提及发布。
- 数据集：论文公开了评测用的数学问题音频`https://huggingface.co/datasets/dcml0714/speech_math`。训练数据需要读者根据论文描述的步骤自行使用GPT-4o等工具和公开数据集构建，论文中未提供处理好的训练数据集下载��
- Demo：提供了项目主页进行演示。
- 复现材料：提供了非常详尽的训练细节，包括：1）完整的训练YAML配置文件；2）所有训练数据集的来源、处理步骤和使用的提示词（Prompt）；3）微调所需的库（LlamaFactory）及大致硬件需求。这构成了高质量的复现指南。
- 论文中引用的开源项目：GLM-4-Voice（基础模型）、LlamaFactory（训练框架）、vLLM（推理加速）、CosyVoice（语音解码器）、Whisper（评估转录）、OpenAudioBench（评估工具包）。

📌 **核心摘要**

本文旨在解决语音语言模型（SLM）在生成语音响应前无法进行有效内部推理（CoT）的问题，以及简单先推理再说话（TBS）带来的高延迟矛盾。作者提出了STITCH方法，其核心是让模型交替生成“未说出的推理文本块”和“将要说出的响应文本/语音块”，利用语音块播放所需时间远长于生成这些块所需时间的特点，实现同步思考与说话。STITCH有两种变体：STITCH-R（先推理再说话，但分块）和STITCH-S（先说话再推理，初始延迟与无推理模型相同）。主要实验结果表明，在五个数学问答数据集上，STITCH-S相比不进行推理的基线模型准确率平均提升约15%，且首次响应延迟未增加；STITCH-R性能略优于STITCH-S。在非推理任务上，推理模型性能与基线持平或略优。实际意义在于为构建更智能、响应更自然的实时语音交互系统提供了有效方案。主要局限性是其创新点集中在解码流程上，且依赖于特定的语音分词器和模型架构，通用性有待验证。

---

### 7. [ParaS2S: Benchmarking and Aligning Spoken Language Models for Paralinguistic-aware Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-03-paras2s-benchmarking-and-aligning-spoken-language)

✅ **7.5/10** | 前25% | #语音对话系统 | #强化学习 | #基准测试 #模型评估

👥 **作者与机构**

- 第一作者：Shu-wen Yang（台湾大学通讯工程研究所 / 字节跳动Seed）
- 通讯作者：Lu Lu（字节跳动Seed）、Yuxuan Wang（字节跳动Seed）
- 作者列表：Shu-wen Yang（台湾大学通讯工程研究所, 字节跳动Seed），Ming Tu（字节跳动Seed），Andy T. Liu（字节跳动Seed），Xinghua Qu（字节跳动Seed），Hung-yi Lee（台湾大学通讯工程研究所），Lu Lu（字节跳动Seed），Yuxuan Wang（字节跳动Seed），Yonghui Wu（字节跳动Seed）

💡 **毒舌点评**

这篇论文像一个为“听不懂情绪”的语音大模型量身定做的“情商培训班”，系统性地设计了考题（ParaS2SBench）、考官（自动评估器）和培训方法（RL），思路完整，实验充分。短板在于，那个号称能准确打分的“考官”本身也是一个复杂模型，它的评估上限可能决定了最终训练效果的天花板，形成了“用模型评估模型”的循环依赖。

🔗 **开源详情**

- 代码：论文明确承诺将开源代码，并提供了项目主页链接（`https://paras2sbench.github.io/`）。论文中未直接提供GitHub仓库链接，但预计会通过项目主页发布。
- 模型权重：论文明确承诺将开源模型，包括训练的S2S模型（基于Kimi-Audio微调）和奖励模型。具体权重发布平台未说明。
- 数据集：ParaS2SBench基准数据集承诺开源。论文中说明了数据集构建流程，并提供了部分统计信息（表6）。
- Demo：项目主页包含演示链接（`https://paras2sbench.github.io/`）。
- 复现材料：论文在附录（A.2-A.4, A.5, A.8）中提供了非常详细的复现信息，包括数据集构建的具体步骤与提示词模板、自动评估器各组件的详细配置、SFT/RL训练的超参数设置（学习率、批次大小、GPU数量等）、以及评估使用的完整评分准则。复现材料非常充分。
- 论文中引用的开源项目/模型：Whisper-V3（转写）、AudioReasoner（语气描述）、Qwen2.5-Omni（奖励模型基础）、Kimi-Audio（S2S模型基础）、Emotion2vec（情感分析）、CosyVoice/YourTTS/Sesame（TTS合成）、LoRA（微调方法）、GRPO（RL算法）。

📌 **核心摘要**

这篇论文针对现有语音到语音（S2S）大模型无法理解并恰当回应用户话语中的副语言线索（如情绪、语气、说话人属性）这一核心问题，提出了ParaS2S框架。其核心创新包括：1) 构建了首个直接评估S2S输出语音自然度的基准数据集ParaS2SBench，其测试用例设计为内容中性但风格对比强烈；2) 提出了一个多阶段、内容-风格解耦的自动评估器，其评估结果与人类偏好高度相关；3) 基于该评估器，提出了一个强化学习框架ParaS2SAlign，用于在无需大量标注数据的情况下，提升模型在副语言感知交互上的能力。实验表明，现有S2S模型普遍表现不佳（如Qwen2.5 Omni平均分约3.2），而本文的强化学习方法（Kimi-Audio GRPO）在ParaS2SBench上实现了4.38的平均分，比监督微调（SFT，3.96分）提升了10%以上，并且仅需10小时的示范数据即可达到用100小时SFT数据训练的效果。该工作推动了更自然、更具共情能力的语音交互系统的研发，但其自动评估器的通用性和稳健性仍是未来需要验证的局限。

---

### 8. [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-03-can-speech-llms-think-while-listening)

✅ **7.5/10** | 前25% | #语音对话系统 | #链式思维推理 | #直接偏好优化 #语音大模型

👥 **作者与机构**

- 第一作者：Yi-Jen Shih（德克萨斯大学奥斯汀分校，Meta超级智能实验室）
- 通讯作者：论文中未明确标注通讯作者。
- 作者列表：
  - Yi-Jen Shih（The University of Texas at Austin, Meta Superintelligence Labs）
  - Desh Raj（Meta Superintelligence Labs）
  - Chunyang Wu（Meta Superintelligence Labs）
  - Wei Zhou（Meta Superintelligence Labs）
  - SK Bong（Meta Superintelligence Labs）
  - Yashesh Gaur（Meta Superintelligence Labs）
  - Jay Mahadeokar（Meta Superintelligence Labs）
  - Ozlem Kalinli（Meta Superintelligence Labs）
  - Michael L. Seltzer（Meta Superintelligence Labs）

💡 **毒舌点评**

亮点：论文将人类“边听边想”的认知机制巧妙地工程化，提出的“问题完整性格度”为动态决定推理起点提供了一个优雅且可解释的量化指标，比固定词数偏移的方法更具语义感知能力。短板：尽管方法系统，但核心创新（语音LLM中的CoT）并非全新，且高度依赖Moshi这一特定多流架构，其普适性有待在其他语音大模型架构上验证。此外，论文中未提及代码与模型开源，对于“可复现”这一顶会要求稍显不足。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文基于公开的Moshi模型进行微调，但未提及本文微调后的模型权重是否会公开。
- 数据集：本文使用的训练数据基于公开的CoT-Collection改造，但未提供直接获取改造后数据集的链接。构建的SRQA评测基准也未提供公开下载地址。
- Demo：未提及。
- 复现材料：在附录A.2中提供了SFT和DPO的部分训练超参数（如学习率、批次大小、步数），在A.6中提供了LLM改写和评判的提示模板。但完整的训练配置、检查点、数据预处理脚本未提供。
- 论文中引用的开源项目：引用了并基于Moshi（D´efossez et al., 2024）模型。使用了Pyannote VAD、Whisper、LLaMA-3.1作为评估工具。使用Llama3-8B-Chat估计问题完整性格度。使用了内部TTS引擎生成音频。
- 总体而言：论文中未提及开源代码或模型的计划，复现材料分散且不完整。

📌 **核心摘要**

1.  要解决什么问题：当前语音大模型在复杂推理任务上表现不佳，且其“听-思-答”的串行过程引入了不可忽略的响应延迟，影响交互自然度。
2.  方法核心是什么：提出一个结合文本链式思维微调与“边听边想”推理的系统框架。核心包括：在Moshi多流架构中训练模型进行文本CoT；提出基于信息熵的问题完整性格度（QC） 来确定最优的提前推理触发点；采用拒绝采样生成偏好数据，并通过DPO进一步优化模型在提前推理场景下的准确率与推理长度。
3.  与已有方法相比新在哪里：首次在多流语音LLM上系统研究文本CoT；创新性地提出“边听边想”范式，用语义驱动的QC指标替代启发式的固定延迟，实现更可控的精度-延迟权衡；通过DPO偏好学习动态调整推理过程。
4.  主要实验结果如何：在自建的口语推理问答（SRQA）基准上，CoT微调使Moshi基线在平均准确率上提升2.4倍。使用QC方法（θ=0.75）与基线CoT相比，在ARC-Easy任务上，在相似延迟下准确率提升4%。进一步通过长度偏好DPO训练，在不损失准确率的前提下，将延迟降低了约70%。关键消融实验证明，包含流式用户ASR对推理至关重要。
5.  实际意义是什么：该研究为构建更智能、响应更快的语音助手提供了切实可行的技术路径，使语音大模型能更自然地处理复杂查询，提升了人机语音交互的体验。
6.  主要局限性是什么：性能高度依赖于底层Moshi架构；评测基于自建的SRQA基准，该基准由文本基准转换而来，可能无法完全代表真实口语对话场景；论文未提供开源代码、微调后的模型权重或完整的训练数据获取方式，限制了立即复现与广泛应用。

---

### 9. [From Text to Talk: Audio-Language Model Needs Non-Autoregressive Joint Training](/audio-paper-digest-blog/posts/2026-05-03-from-text-to-talk-audio-language-model-needs-non)

✅ **7.5/10** | 前25% | #语音对话系统 | #扩散模型 | #语音大模型 #音频问答

👥 **作者与机构**

- 第一作者：Tianqiao Liu (Tianqiao Liu¹², liutianqiao1@tal.com) (¹ 广东省智能教育研究院，暨南大学；² 好未来教育集团)
- 通讯作者：Xueyi Li (Xueyi Li¹, lixueyi@stu2021.jnu.edu.cn) (¹ 广东省智能教育研究院，暨南大学)
- 作者列表：Tianqiao Liu（好未来教育集团、广东省智能教育研究院/暨南大学）、Xueyi Li（广东省智能教育研究院/暨南大学）、Hao Wang（北京大学）、Haoxuan Li（北京大学）、Zhichao Chen（北京大学）、Weiqi Luo（广东省智能教育研究院/暨南大学）、Zitao Liu（广东省智能教育研究院/暨南大学）

💡 **毒舌点评**

亮点在于论文一针见血地指出了用单一自回归目标训练文本和音频的“错配”问题，并提出了一个理论优雅、实现简洁的混合AR-NAR框架，实验也证明了其在3B参数量级上的有效性。短板是，论文在与当前最强基线（如Kimi-Audio）的对比中并未完全胜出，且其核心理论贡献（即证明训练目标是NLL的上界）对于实际训练效果的解释力稍显间接，更像一个“事后”的合理性辩护而非预测性指导。

🔗 **开源详情**

- 代码：论文中提供了公开代码仓库链接：`https://github.com/ai4ed/TtT`。
- 模型权重：未提及公开预训练或微调后的模型权重。
- 数据集：论文中未提及将自有训练或评测数据集公开。
- Demo：未提及在线演示。
- 复现材料：论文详细给出了训练细节（优化器、学习率、batch size、训练步数、策略超参数）、模型配置（基于Qwen2.5）、音频tokenizer/decoder来源（GLM-4-Voice）、评估协议和代码。附录中提供了数据格式示例。复现信息较充分。
- 论文中引用的开源项目：
    - LLM骨干：Qwen2.5-Base（1.5B, 3B）
    - 音频组件：GLM-4-Voice的音频tokenizer和decoder
    - 评估工具：Whisper-Large-v3（ASR）、Paraformer-zh（中文ASR）、Qwen3-30B-A3B（评估LLM）
    - 数据集：VoiceAssistant-400K, OpenHermes-2.5, Firefly-Train-1.1M, FineWeb-Edu等
- 开源计划：论文未提及开源模型权重或训练数据集。

📌 **核心摘要**

本文针对端到端音频语言模型（S2S）中统一使用自回归（AR）方法生成文本和音频所导致的目标失配问题，提出了一个名为Text-to-Talk (TtT)的混合框架。该方法的核心是：在一个统一的Transformer内，对遵循“目标-目标”因果依赖的文本模态采用标准的AR生成，而对主要遵循“源-目标”依赖的音频模态采用基于吸收离散扩散的非自回归（NAR）生成。为实现这一混合范式，论文设计了模态感知的注意力机制，并引入了三个训练策略（BANOM, PPM, SST）以弥合训练与推理时的差异。实验在Audio-QA、ASR、AAC和S2S对话基准上进行，结果表明，TtT在3B参数规模下，性能显著优于同规模的纯AR和纯NAR基线，并在多项指标上超越了部分更大的7B模型（如Moshi, SpeechGPT）。例如，在Audio-QA任务上，TtT-3B在LLaMAQuestions数据集上得分为34.68，而Qwen2.5-3B (AR) 仅为10.00。该工作证明了模态感知的混合生成范式对于构建高效、强大的S2S系统具有重要意义。主要局限性在于未直接与当前所有最强SOTA模型（如Kimi-Audio）进行全面对比，且大规模多模态预训练的增益可进一步分析。

---

