---
title: "ICLR 2026 - 语音对话系统 论文列表"
date: 2026-05-02
draft: false
tags: ["语音对话系统"]
categories: [iclr-2026]
description: "共 13 篇 ICLR 2026 语音对话系统 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音对话系统

共 **13** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-02-towards-true-speech-to-speech-models-without-text) | 9.1分 | 前10% |
| 🥈 | [Human or Machine? A Preliminary Turing Test for Speech-to-Sp](/audio-paper-digest-blog/posts/2026-05-02-human-or-machine-a-preliminary-turing-test-for) | 9.0分 | 前25% |
| 🥉 | [ParaS2S: Benchmarking and Aligning Spoken Language Models fo](/audio-paper-digest-blog/posts/2026-05-02-paras2s-benchmarking-and-aligning-spoken-language) | 8.5分 | 前25% |
| 4. | [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-02-end-to-end-listen-look-speak-and-act) | 8.5分 | 前25% |
| 5. | [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-02-roboomni-proactive-robot-manipulation-in-omni) | 8.5分 | 前10% |
| 6. | [DrVoice: Parallel Speech-Text Voice Conversation Model via D](/audio-paper-digest-blog/posts/2026-05-02-drvoice-parallel-speech-text-voice-conversation) | 8.5分 | 前25% |
| 7. | [TASTE: Text-Aligned Speech Tokenization and Embedding for Sp](/audio-paper-digest-blog/posts/2026-05-02-taste-text-aligned-speech-tokenization-and) | 8.0分 | 前25% |
| 8. | [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy](/audio-paper-digest-blog/posts/2026-05-02-voxprivacy-a-benchmark-for-evaluating) | 8.0分 | 前25% |
| 9. | [STITCH: Simultaneous Thinking and Talking with Chunked Reaso](/audio-paper-digest-blog/posts/2026-05-02-stitch-simultaneous-thinking-and-talking-with) | 7.5分 | 前25% |
| 10. | [WearVox: An Egocentric Multichannel Voice Assistant Benchmar](/audio-paper-digest-blog/posts/2026-05-02-wearvox-an-egocentric-multichannel-voice) | 7.5分 | 前25% |
| 11. | [Closing the Gap Between Text and Speech Understanding in LLM](/audio-paper-digest-blog/posts/2026-05-02-closing-the-gap-between-text-and-speech) | 7.5分 | 前25% |
| 12. | [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-02-can-speech-llms-think-while-listening) | 7.5分 | 前25% |
| 13. | [From Text to Talk: Audio-Language Model Needs Non-Autoregres](/audio-paper-digest-blog/posts/2026-05-02-from-text-to-talk-audio-language-model-needs-non) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-02-towards-true-speech-to-speech-models-without-text)

🔥 **9.1/10** | 前10% | #语音对话系统 | #大语言模型 #端到端 | #大语言模型 #端到端

👥 **作者与机构**

- 第一作者：Xingjian Zhao (Fudan University, MOSI.AI)
- 通讯作者：Xipeng Qiu (Fudan University, Shanghai Innovation Institute)
- 作者列表：Xingjian Zhao (Fudan University, MOSI.AI)、Zhe Xu (Fudan University, Shanghai Innovation Institute, MOSI.AI)、Luozhijie Jin (Fudan University, Shanghai Innovation Institute, MOSI.AI)、Yang Wang (Fudan University, MOSI.AI)、Hanfu Chen (Fudan University, MOSI.AI)、Yaozhou Jiang (Fudan University, MOSI.AI)、Ke Chen (Fudan University, Shanghai Innovation Institute, MOSI.AI)、Ruixiao Li (Fudan University, Shanghai Innovation Institute, MOSI.AI)、Mingshu Chen (Fudan University, MOSI.AI)、Ruiming Wang (Fudan University, MOSI.AI)、Wenbo Zhang (Fudan University, Shanghai Innovation Institute, MOSI.AI)、Qinyuan Cheng (Fudan University, MOSI.AI)、Zhaoye Fei (Fudan University, MOSI.AI)、Shimin Li (MOSI.AI)、Xipeng Qiu (Fudan University, Shanghai Innovation Institute)
- 机构：复旦大学、上海创新研究院、MOSI.AI。

💡 **毒舌点评**

这篇工作真正意义上逼近了“无文本指导”的语音大模型愿景，其“模态分层”设计从隐藏状态相似性分析中获得灵感，是工程直觉与理论分析的漂亮结合。然而，其高质量合成数据的依赖（特别是助理端语音）和庞大的模型参数量，可能使其在“真实性”和部署门槛上面临现实挑战，离真正廉价、通用的语音交互还有一步之遥。

🔗 **开源详情**

- 代码：论文中明确表示“我们将会发布代码和模型”（We will release our code and models），但未提供具体链接。状态为承诺发布。
- 模型权重：同上，承诺发布。
- 数据集：预训练和SFT数据集多为公开或可获取（如Librispeech, FineWeb-Eu），但论文构建的SFT数据集未提及公开。论文中未提及将公开其合成SFT数据集。
- Demo：未提及。
- 复现材料：论文详细提供了预训练和SFT的数据规模、流程、关键超参数、消融实验设置。附录包含数据适应提示词、相似度计算公式、解冻学习率调度等，对复现非常友好。
- 引用的开源项目：论文中引用并依赖的主要开源项目/工具有：Qwen-3-8B（骨干）， CosyVoice 2（语音分词器基础）， Librispeech（评测）， FineWeb-Eu/Chinese FineWeb-Edu V2.1（数据）， pyannote（VAD）， Seed-TTS（语音合成）， SenseVoice-Small（质量过滤）。
- 整体开源计划：论文承诺开源核心代码和模型，复现指引详细，但未提及发布合成SFT数据集。

📌 **核心摘要**

本文旨在解决当前语音对话系统依赖文本中间表示所带来的延迟高、信息损失（副语言线索丢失）和表现力受限的根本问题。核心方法是构建一个真正的端到端语音到语音大语言模型。模型架构上，创新性地采用“模态分层”设计，在Transformer骨干的第32层将共享表示路由到模态特定的输出分支（文本4层，语音4层），以利用底层融合并支持模态特异性生成。训练上，采用两阶段“冻结预训练”策略：先冻结预训练的文本LLM骨干，仅训练新增的语音组件以实现对齐；再进行联合微调，同时引入文本数据以保持文本能力。实验结果表明，该模型在语音问答（如LlamaQA达77.33%/63.67% S→T/S→S）任务上达到了SOTA水平，同时在文本理解基准（MMLU 67.19, CMMLU 69.53）上几乎保持了原LLM的性能（Qwen3-8B）。消融研究证实了模态分层和冻结预训练策略对于平衡语音学习和文本能力保持的关键作用。该工作为建立更具表现力和效率的端到端语音交互范式奠定了基础。主要局限性包括对大规模高质量合成数据的依赖，以及模型本身较大的参数规模可能带来的部署成本。

---

### 🥈 [Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-02-human-or-machine-a-preliminary-turing-test-for)

🔥 **9.0/10** | 前25% | #语音对话系统 | #模型评估 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Xiang Li（北京邮电大学网络与交换技术国家重点实验室、深圳大数据研究院、香港中文大学（深圳）、深圳环西丽湖实验室）
- 通讯作者：Jiale Han（香港科技大学）
- 作者列表：
    - Xiang Li（北京邮电大学网络与交换技术国家重点实验室、深圳大数据研究院、香港中文大学（深圳）、深圳环西丽湖实验室）
    - Jiabao Gao（香港中文大学（深圳））
    - Sipei Lin（香港中文大学（深圳））
    - Xuan Zhou（香港中文大学（深圳））
    - Chi Zhang（香港中文大学（深圳））
    - Bo Cheng（北京邮电大学网络与交换技术国家重点实验室）
    - Jiale Han（香港科技大学）
    - Benyou Wang（深圳大数据研究院、香港中文大学（深圳）、深圳环西丽湖实验室）

💡 **毒舌点评**

这篇论文的亮点在于其开创性和系统性：它首次将图灵测试从文本或语音合成领域完整地迁移到端到端语音对话系统评估，并构建了首个包含18维度的细粒度诊断框架，这为“何为类人语音交互”设立了新的评估标准。然而，其短板在于实验设计的简化，例如角色扮演和特定开场白的提示可能无法完全模拟真实世界中开放、自发的对话场景，且测试对话长度较短（20-60秒），对长程记忆和动态人格塑造的评估有所欠缺。

🔗 **开源详情**

*   代码：论文明确提供了公开的代码仓库链接：`https://github.com/Carbohydrate1001/Turing-Test`。
*   模型权重：论文提到公开了模型，但具体权重获取方式需参考上述代码仓库（`has_model: 是`）。
*   数据集：论文明确提供了公开的数据集，并通过上述代码仓库发布（`has_dataset: 是`）。
*   Demo：论文中未提及提供在线演示的链接。
*   复现材料：论文在附录中详细说明了数据收集流程（B节）、图灵测试平台设计（C节）、细粒度标注协议（D节）、以及AI评判器的训练设置、嵌入读取选择、模型消融、超参数调优和敏感性分析（E节），复现信息非常充分。
*   论文中引用的开源项目：论文引用了多个开源模型和数据集，包括：
    *   S2S模型：GPT-4o, Gemini2.5-Pro, Qwen3, Kimi-K1.5, ChatGLM-4.5, Hunyuan-TurboS, Doubao-Pro 1.5, Claude-Sonnet 4, iFLYTEK-Spark。
    *   TTS模型：Nari Dia-1.6B, Spark-TTS。
    *   对话数据集：DailyDialog, DailyTalk, IEMOCAP, MagicData。
    *   AI评判器骨干模型：Qwen2.5-Omni。
    *   其他技术：LoRA（低秩适应）。

📌 **核心摘要**

本文旨在解决如何评估现代语音到语音（S2S）系统是否能够像人类一样自然对话这一核心问题。为此，研究者首次针对S2S系统开展了图灵测试。方法核心是构建一个高质量、多类别（人-人、人-机、伪人类）的对话数据集，并通过一个游戏化的在线平台收集大规模人类判断（2,968条）。与仅提供“通过/失败”的传统评估不同，本文进一步开发了一个包含5大类、18个细粒度维度的类人性诊断标注体系，并基于此训练了一个可解释的AI评判模型。与已有工作相比，本文的新意在于：1）首次对端到端S2S系统进行图灵测试；2）从“是否像人”的视角进行诊断，发现当前瓶颈不在语义理解，而在副语言特征、情感表达和对话人格；3）开发了一个显著优于通用多模态模型且可提供诊断依据的专用AI评判器。主要实验结果显示，所有被评估的9个S2S系统的成功率均远低于0.5的人类基准，无人类通过测试；细粒度分析显示S2S系统在“记忆一致性”、“逻辑连贯性”等方面接近人类，但在“韵律”、“情感声学表达”、“谄媚行为”等方面差距明显。所提出的AI评判器在测试集上的整体分类准确率达到96.05%，远超人类评判者的72.84%和通用AI模型的平均水平45.27%。这项工作的实际意义在于为S2S系统提供了一个超越功能性、聚焦于“类人性”的评估基准和诊断工具，明确指出了下一代语音对话AI需要突破的关键方向。主要局限性在于评估的对话场景和长度相对有限，且“伪人类”对话作为对照组的引入虽然增加了测试难度，但其与S2S系统固有缺陷的直接关联性值得进一步探讨。

---

### 🥉 [ParaS2S: Benchmarking and Aligning Spoken Language Models for Paralinguistic-aware Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-02-paras2s-benchmarking-and-aligning-spoken-language)

🔥 **8.5/10** | 前25% | #语音对话系统 | #强化学习 | #知识蒸馏 #基准测试

👥 **作者与机构**

- 第一作者：Shu-wen Yang (台湾大学电气工程学系研究生院 / 字节跳动 Seed)
- 通讯作者：Lu Lu (字节跳动 Seed)， Hung-yi Lee (台湾大学电气工程学系)
- 作者列表：
    - Shu-wen Yang (台湾大学电气工程学系研究生院， 字节跳动 Seed)
    - Ming Tu (字节跳动 Seed)
    - Andy T. Liu (字节跳动 Seed)
    - Xinghua Qu (字节跳动 Seed)
    - Hung-yi Lee (台湾大学电气工程学系)
    - Lu Lu (字节跳动 Seed)
    - Yuxuan Wang (字节跳动 Seed)
    - Yonghui Wu (字节跳动 Seed)

💡 **毒舌点评**

这篇论文最大的亮点在于精准定义了“语音对话模型听不懂弦外之音”这一痛点，并系统性地设计了从评估基准（ParaS2SBench）到强化学习训练（ParaS2SAlign）的完整解决方案，堪称“对症下药”的范例。但其短板也明显：核心的强化学习框架（GRPO）和奖励模型蒸馏技术并非首次提出，创新更多体现在将这些技术成功适配到一个全新的、定义良好的问题域中，而非算法本身的突破；此外，自动评估器虽与人类评分高度相关，但其“风格幻觉”问题可能并未完全根除，依然依赖于其精心构建的特征提取流水线。

🔗 **开源详情**

- 代码：论文明确承诺将开源代码，但未提供具体仓库链接（论文中未提及代码链接）。
- 模型权重：承诺开源训练好的模型（ParaS2SAlign）及蒸馏出的奖励模型（未提及具体权重文件）。
- 数据集：承诺开源ParaS2SBench测试集、PolyTone训练数据、SFT数据、奖励模型蒸馏数据（未提及具体下载方式）。
- Demo：提供了项目页面和Demo链接：https://paras2sbench.github.io/
- 复现材料：在附录A.2-A.8中提供了非常详细的数据集构建步骤、模型细节、训练超参数（如学习率、batch size）、评估指南和所有使用的提示模板，复现信息充分。
- 论文中引用的开源项目：Whisper-V3 (Radford et al., 2023), AudioReasoner (Xie et al., 2025), Emotion2vec (Ma et al., 2024), Qwen2.5-Omni (Xu et al., 2025), Kimi-Audio (Ding et al., 2025), LoRA (Hu et al., 2022), FSDP (Zhao et al., 2023)。
- 总体情况：论文有强烈的开源意愿和详细的复现指南，但截至论文发布时，具体的开源资源链接可能需要关注其项目主页更新。

📌 **核心摘要**

1.  问题：当前的语音到语音（S2S）对话模型大多无法根据用户语音中的副语言信息（如情绪、语气、说话人特征）调整其回应的内容和说话风格，表现为“tone-deaf”（听不懂语气）。这主要是由于缺乏高质量、富有表现力的配对数据以及缺乏直接评估波形级响应风格的基准。
2.  方法核心：本文提出了ParaS2S框架，包含两个核心组件：(1) ParaS2SBench，一个首个评估S2S模型副语言感知能力的基准，它通过设计“对比说话风格”和“场景控制”的查询，联合评估输入-输出对的内容与风格自然度；(2) ParaS2SAlign，一个强化学习（RL）框架，利用从自动评估器蒸馏出的奖励模型，引导S2S模型从无标签语音中学习。
3.  创新与区别：
    *   新基准：ParaS2SBench是首个直接在波形级别评估响应内容与说话风格的基准，其“对比风格”设计能有效检测模型的风格感知能力。
    *   新评估器：提出了一种多阶段自动评估器，通过PolyTone训练和解耦分析（分别提取内容、风格标签），解决了端到端音频大语言模型（ALLM）容易产生“风格幻觉”的问题，与人类评分相关性更高。
    *   新训练范式：证明了利用可扩展的AI反馈（自动评估器）进行RL训练，比纯监督微调（SFT）更数据高效，能减少对昂贵配对演示数据的依赖。
4.  主要实验结果：
    *   现有S2S模型（包括GPT-4o、Qwen2.5 Omni、Kimi-Audio）在ParaS2SBench上表现不佳，平均得分约为3.0，与忽略风格的流水线基线相当。
    *   RL训练效果：以Kimi-Audio为基座，经过SFT热身和GRPO强化学习后，模型在ParaS2SBench上的平均得分从基线约3.0提升至4.382（见下表），相比纯SFT（4.076）有约10%的相对提升，在合成和真实数据上均超越了所有现有模型。
    *   数据效率：仅使用10小时SFT数据进行热身，配合RL训练，即可达到使用50小时SFT数据训练的同等性能，凸显了RL的数据效率。
    *   评估器有效性：多阶段自动评估器与人类评分的皮尔逊相关系数（0.776）显著高于ALLM基线（0.618），且能保持人类评分对不同系统排序的一致性。
| 模型 | 合成数据平均分 | 真实数据平均分 | 总平均分 |
| :--- | :--- | :--- | :--- |
| Whisper-GPT-TTS (基线) | 3.022 | 3.487 | 3.176 |
| GPT-4o-audio-preview | 3.284 | 3.639 | 3.403 |
| Qwen2.5 Omni | 3.248 | 3.612 | 3.369 |
| Kimi-Audio (基座) | 2.892 | 1.265 | 2.350 |
| Kimi-Audio SFT | 4.076 | 3.714 | 3.955 |
| Kimi-Audio GRPO (Ours) | 4.441 | 4.161 | 4.382 |
（表4关键数据摘要）
5.  实际意义：该工作为开发能够进行富有情感、风格感知的自然语音对话系统提供了重要的评估标准和高效的训练方法，推动了语音AI向更人性化交互迈进。
6.  主要局限性：方法的性能上限在一定程度上依赖于其自动评估器的准确性；构建的合成查询集可能无法完全覆盖现实世界对话的复杂性；虽然承诺开源，但核心训练数据（特别是表达性强的演示）的收集成本依然存在。

---

### 4. [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-02-end-to-end-listen-look-speak-and-act)

🔥 **8.5/10** | 前25% | #语音对话系统 | #混合专家 | #多模态模型 #机器人控制

👥 **作者与机构**

- 第一作者：Siyin Wang (清华大学), Wenyi Yu (清华大学) (共同第一作者)
- 通讯作者：Chao Zhang (清华大学)
- 作者列表：Siyin Wang (清华大学), Wenyi Yu (清华大学), Xianzhao Chen (字节跳动), Xiaohai Tian (字节跳动), Jun Zhang (字节跳动), Lu Lu (字节跳动), Yuxuan Wang (字节跳动), Chao Zhang (清华大学)

💡 **毒舌点评**

这篇论文在架构设计上确实有巧思，将全双工多模态交互与MoE范式结合，实现了首个能“听说读写做”的端到端模型，在模拟环境中的全面表现也很亮眼。但核心实验全在���真环境里打转，离真正理解“人类如何一边聊天一边倒水”还有巨大鸿沟，且其声称的“首个”全双工多模态端到端模型，在缺乏与同期所有相关工作进行系统性对比的情况下，说服力稍显不足。

🔗 **开源详情**

*   代码：论文中承诺将在 https://github.com/bytedance/SALMONN 发布所有代码，但未说明是否已发布。
*   模型权重：论文中承诺将发布模型检查点（model checkpoints），未说明具体形式（完整模型/LoRA权重等）。
*   数据集：论文中承诺将发布所有数据。部分数据集为公开基准（如LibriSpeech, LIBERO），部分为作者合成或生成（如高级交互任务数据）。
*   Demo：未提及在线演示。
*   复现材料：提供了极其详尽的复现材料，包括：
    *   完整的模型规格（各组件维度、参数量）
    *   详细的三阶段训练策略和超参数（学习率、批大小、步数）
    *   所有训练数据集的名称、规模、来源和预处理方法
    *   评估基准的具体设置和指标
    *   新任务（上下文VQA、缺陷指令拒绝、动作打断）的详细定义和示例
    *   所有实验的完整结果表格和消融研究
    *   用于生成数据和评估的LLM提示词（附录E）
*   论文中引用的开源项目：LLaMA-3.1-8B-Instruct, Emu3 (Emu3-VisionTokenizer, Emu3-Base), UniVLA, CosyVoice2-0.5B, Mamba, SPEAR (Yang et al., 2025), Whisper (Radford et al., 2023), LIBERO, FAST (Pertsch et al., 2025)。
*   总结：论文在复现材料的详尽程度上做得非常出色，承诺的开源计划也很有吸引力，但因其具体发布状态未明，不能给予完整的开源加分。

📌 **核心摘要**

1. 问题：当前的人工智能模型要么是“能说不能做”的对话模型，要么是“能做不能说”的具身操作模型，无法像人类一样同时、流畅地处理多种模态的输入（视觉、听觉）并产生多种模态的输出（语言、动作），实现自然的“全双工”交互（如边说边做、即时打断）。
2. 方法核心：提出ELLSA模型，其核心是SA-MoE（自注意力混合专家） 架构。该架构将不同模态的处理分配给专门的专家模块（语音专家处理语音和文本，动作专家处理视觉和动作），并通过一个统一的自注意力机制将这些专家连接起来，实现跨模态信息的高效融合与交互。
3. 新意：这是第一个在单一架构中、以端到端流式方式，统一视觉、文本、语音和动作感知与生成的全双工模型。与以往分离的对话或操作模型不同，ELLSA能够自主决策何时开始/停止说话或行动，并支持如“边说边做”、“基于上下文的视觉问答”和“动作打断”等前所未有的高级交互行为。
4. 主要实验结果：
    * 基础能力：在语音交互基准（Llama Questions等）和机器人操作基准（LIBERO）上，性能与专用模型相当或更优。例如，在LIBERO LONG任务上，ELLSA的平均成功率达到89.4%，超越了此前最强的VLA模型（85.5%）。
    * 高级能力：
        | 能力 | 任务类型 | 性能（成功率） |
        | :--- | :--- | :--- |
        | 对话轮换 | 语音交互任务 | 100.0% (Llama Q.等) |
        | 动作轮换 | 机器人操作任务 | 96.4% - 100.0% |
        | 缺陷指令拒绝 | 机器人操作任务 | 96.4% - 100.0% |
        | 边说边做 | 语音交互（S2T） | 相比单独说话性能有下降（如TriviaQA: 35.1 vs 45.2） |
        | | 机器人操作 | 相比单独操作性能略有下降（如LONG: 73.2% vs 84.4%） |
        | 上下文VQA | 视觉问答 | 平均准确率约82.5%（人工评估） |
    * 消融研究：SA-MoE架构显著优于单一稠密模型（在S2T任务上，SA-MoE的TriviaQA准确率为45.2%，而从语音专家初始化的稠密模型仅为29.7%）。
5. 意义：展示了构建更自然、通用的交互式智能体的可行架构范式，将对话AI与具身AI统一，向通用人工智能迈进了一步。
6. 局限性：所有实验均在模拟环境（LIBERO）中进行，未在真实世界部署验证；目前仅支持有限的交互场景（如轮换、打断），未涉及反馈信号（backchannel）等更复杂的交互动态。

---

### 5. [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-02-roboomni-proactive-robot-manipulation-in-omni)

🔥 **8.5/10** | 前10% | #语音对话系统 | #多模态模型 | #端到端 #数据集

👥 **作者与机构**

-   第一作者：Siyin Wang（复旦大学，上海创新研究院）
-   通讯作者：Jinlan Fu (N/A), Xipeng Qiu (复旦大学，上海创新研究院)（论文标注†为共同通讯作者）
-   作者列表：Siyin Wang（复旦大学，上海创新研究院）、Jinlan Fu（新加坡国立大学）、Feihong Liu（复旦大学）、Xinzhe He（复旦大学）、Huangxuan Wu（复旦大学）、Junhao Shi（复旦大学，上海创新研究院）、Kexin Huang（复旦大学）、Zhaoye Fei（复旦大学）、Jingjing Gong（上海创新研究院）、Zuxuan Wu（复旦大学，上海创新研究院）、Yu-Gang Jiang（复旦大学）、See-Kiong Ng（新加坡国立大学）、Tat-Seng Chua（新加坡国立大学）、Xipeng Qiu（复旦大学，上海创新研究院）

#

💡 **毒舌点评**

亮点：这篇论文真正让机器人“听懂”了对话的弦外之音（比如“嗯…橙汁”的嫌弃语气）并主动发起询问确认，而不是傻等一句“把可乐放桌上”的明确指令，这在人机交互的自然性上是个重要进步。短板：虽然构建了庞大的合成数据集，但真实世界交互的复杂性（比如多人同时说话、声音重叠、远场噪声）与合成数据之间的差距可能仍然存在，论文在应对这些极端边缘案例时的鲁棒性上限有待进一步验证。

#

🔗 **开源详情**

-   代码：提供GitHub仓库链接：https://github.com/OpenMOSS/RoboOmni
-   模型权重：未提及是否公开预训练权重，但论文中提到将“开源模型检查点”。
-   数据集：公开OmniAction数据集，承诺将开源获取。
-   Demo：未提及在线演示。
-   复现材料：提供了非常详细的训练细节（硬件、超参数、优化器设置）、数据集构建流程（三阶段）、实验设置（基线模型描述）和附录中的更多示例。
-   引用的开源项目：论文中引用的开源项目包括OpenVLA、OpenVLA-OFT、π0、NORA、LIBERO、Whisper、FAST+分词器、Qwen2.5-VL/Omni、DINOv2、SigLIP等。

📌 **核心摘要**

1.  问题：现有的视觉-语言-动作（VLA）模型严重依赖用户发出的显式、直接的指令（如文本命令），但在真实场景中，人类意图常通过对话上下文、语气、环境音等隐式线索表达，机器人缺乏主动推断和确认意图的能力。
2.  方法核心：提出RoboOmni，一个基于端到端全模态大语言模型（如Qwen2.5-Omni）的Perceiver-Thinker-Talker-Executor框架。该模型能同时处理视觉、音频（包含语音和副语言线索、环境声）和文本对话历史，统一进行意图推理、生成确认性语音回复和执行机器人动作。
3.  新意：a) 定义了“跨模态上下文指令”新范式。b) 提出了统一感知、推理、交互和执行的端到端框架，无需ASR管道，保留了副语言信息。c) 构建了首个大规模、专用于此任务的数据集OmniAction（14万 episodes），包含6种上下文指令类型。
4.  主要实验结果：在模拟基准OmniAction-LIBERO上，RoboOmni平均成功率85.6%，大幅超越最强文本基线NORA（25.9%）。在真实人类语音测试（OmniAction-LIBERO-Real）中，成功率76.6%，优于π0（73.8%）。真实机器人实验成功率73.9%，远超ASR+VLA基线（52.2%）。消融实验证明，移除音频后意图识别准确率从88.89%暴跌至11.11%。
5.  实际意义：推动了机器人从“命令执行者”向“主动协作者”的转变，为下一代更自然、智能的人机交互提供了可行的技术路径和评估基准。
6.  主要局限性：a) 依赖大规模合成数据，虽然通过真人录音补充，但数据与真实交互的鸿沟可能依然存在。b) 模型的成功高度依赖预训练的全模态LLM基座（Qwen2.5-Omni）的能力。c) 在非常复杂的、需要深层社会认知推理的意图识别上仍有提升空间。

---

### 6. [DrVoice: Parallel Speech-Text Voice Conversation Model via Dual-Resolution Speech Representations](/audio-paper-digest-blog/posts/2026-05-02-drvoice-parallel-speech-text-voice-conversation)

🔥 **8.5/10** | 前25% | #语音对话系统 | #大语言模型 | #端到端 #自回归模型

👥 **作者与机构**

- 第一作者：Chao-Hong Tan (未明确标注，但作者列表首名)
- 通讯作者：论文中未明确指定通讯作者。
- 作者列表：Chao-Hong Tan, Qian Chen, Wen Wang, Chong Deng, Qinglin Zhang, Luyao Cheng, Hai Yu, Xin Zhang, Xiang Lv, Tianyu Zhao, Chong Zhang, Yukun Ma, Yafeng Chen, Hui Wang, Jiaqing Liu, Xiangang Li, Jieping Ye (Tongyi Fun Team, Alibaba Group)

💡 **毒舌点评**

亮点：DrVoice 提出的双分辨率语音表示（DRSR）设计精巧，通过分组将输入帧率降至5Hz，大幅降低了计算成本（训练时间减少近50%），并成功缓解了语音与文本token的频率失配问题，在保持甚至超越SOTA性能的同时提升了效率。短板：模型在语音质量（UTMOS）上与最强基线（如Qwen2.5-Omni）持平，但在语音与文本对齐（ASR-WER）上仍有差距，说明其生成的语音在精确还原文本内容上还有提升空间，且全双工交互能力未实现。

📌 **核心摘要**

1.  问题：现有端到端语音对话模型在联合生成语音和文本时，面临计算成本高、以及语音token（高频率）与文本token（低频率）之间的频率失配问题，这限制了LLM能力的有效利用。
2.  方法核心：提出DrVoice，一种基于并行联合语音-文本建模的对话模型，其核心创新是双分辨率语音表示（DRSR）。该方法在语音理解侧通过分组机制将25Hz的语音token映射为5Hz的表示输入LLM；在语音生成侧，则设计了一个语音精细化头（SRH），以自回归方式从LLM的隐藏状态中生成原始的、未分组的语音token。同时引入了链式模态（CoM）混合训练和核心鸡尾酒（Core-Cocktail）训练策略。
3.  创新点：与已有方法（如Kimi-Audio的12.5Hz或Moshi的并行预测）相比，DrVoice将LLM的输入/输出帧率大幅降低至5Hz，有效减少了计算负担和频率失配；其SRH模块专门用于提升语音生成质量，避免了简单分组带来的细节损失。
4.  实验结果：DrVoice-7B在OpenAudioBench（72.04分）、VoiceBench（80.17分）、UltraEval-Audio（56.66分）和Big Bench Audio（74.0分）四个主流基准上均取得了新的SOTA成绩。消融实验证实了DRSR（分组因子k=5）、SRH、CoM混合训练等组件的有效性。具体数据见下表。

    | 模型 | FR(In/Out) | OpenAudioBench (Overall) | VoiceBench (Overall) | UltraEval-Audio (Overall) | Big Bench Audio (Overall) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | Kimi-Audio (7B) | 12.5/12.5 | 69.08 | 76.93 | 42.79 | 55.2 |
    | Qwen2.5-Omni (7B) | 25/τ | 66.34 | 72.83 | 50.46 | 53.9 |
    | DRVOICE (7B) | 5/5 | 72.04 | 80.17 | 56.66 | 74.0 |

    表：关键基准性能对比（摘自论文Table 2）。τ表示每秒语音对应的平均文本token数。
5.  实际意义：DrVoice证明了在大幅降低计算成本（近50%训练时间节省）的前提下，仍然可以构建性能顶尖的开源语音对话模型。其双分辨率架构和训练策略为构建更高效、更自然的语音交互系统提供了新的技术路径。
6.  主要局限性：模型尚未实现全双工交互（如Parrot那样允许用户在模型发言时插话），限制了实时对话的自然度；生成的语音在内容对齐（ASR-WER）上并非最佳；未来还需扩展对一般音频（如音乐、环境声）的处理能力。

---

### 7. [TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling](/audio-paper-digest-blog/posts/2026-05-02-taste-text-aligned-speech-tokenization-and)

🔥 **8.0/10** | 前25% | #语音对话系统 | #端到端 | #语音大模型 #大语言模型

👥 **作者与机构**

- 第一作者：Liang-Hsuan Tseng (刘亮轩) (台湾大学电机工程学系研究所；MediaTek Research实习)
- 通讯作者：未明确说明。作者列表中第二作者Yi-Chang Chen（联发科技研究中心）和第四作者Da-shan Shiu（联发科技研究中心）提供了邮箱，可能负责主要联络。
- 作者列表：
    - Liang-Hsuan Tseng (台湾大学电机工程学系研究所, MediaTek Research实习)
    - Yi-Chang Chen (MediaTek Research)
    - Kuan-Yi Lee (台湾大学电机工程学系研究所, MediaTek Research实习)
    - Da-shan Shiu (MediaTek Research)
    - Hung-yi Lee (台湾大学人工智能研究卓越中心)

💡 **毒舌点评**

这篇论文的亮点在于它跳出了“先有语音token，再想办法与文本对齐”的常规思路，从源头设计了一种与文本一一对应的语音标记，巧妙解决了SLM建模中的长度不匹配痛点，使得联合建模变得“straightforward”，效果立竿见影。然而，其高度依赖ASR（Whisper）来获取文本锚点，这意味着模型性能上限可能受限于ASR的准确性和泛化能力，且对于非语言声音（如笑声、环境声）的处理存在明显短板，暴露了当前“文本中心主义”语音建模范式的局限性。

🔗 **开源详情**

- 代码：论文提供了官方代码仓库链接（https://github.com/mtkresearch/TASTE-SpokenLM.github.io），并提供了模型权重和演示。
- 模型权重：已提供预训练模型权重下载。
- 数据集：训练使用的Emilia（公开）和LibriTTS（公开）是公开数据集，但论文未说明其具体处理版本是否开源。
- Demo：提供了在线演示页面。
- 复现材料：论文附录包含了详细的训练超参数、配置和评估细节，复现性较高。
- 引用的开源项目：Whisper (ASR编码器), LLaMA (语言模型基础), S3 token (用于对比和作为目标单元), Flow+HiFi-GAN Vocoder, DeepSpeed, Liger Kernel等。

📌 **核心摘要**

本文提出了一种名为TASTE（文本对齐语音标记化与嵌入）的新型方法，旨在解决文本-语音联合口语语言建模中的模态差距和序列长度不匹配问题。核心方法是在语音标记化阶段，利用一个基于注意力的聚合器，以文本转录序列为查询，对预训练语音编码器（Whisper）的隐藏状态进行聚合，生成与文本token一一对应的离散或连续语音表示。与现有方法相比，其创新性在于首次端到端地利用重建目标学习专为联合建模设计的、与文本对齐的语音标记，从而避免了后续建模中的启发式对齐操作。实验表明，TASTE能在极低比特率（~150 bps）下实现高质量的语音重建和相似性保持；基于TASTE构建的SLM在语音续写和似然度评估任务上，以较小的模型规模（1.3B参数）超越了多个7B规模的预训练SLM。其实际意义在于简化了SLM系统架构，提升了语义一致性。主要局限性包括：依赖ASR转录、未处理非语言声音、且目前仅针对英语进行了评估。

---

### 8. [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy of Speech Language Models](/audio-paper-digest-blog/posts/2026-05-02-voxprivacy-a-benchmark-for-evaluating)

🔥 **8.0/10** | 前25% | #语音对话系统 | #基准测试 | #隐私保护 #多用户

👥 **作者与机构**

- 第一作者：Yuxiang Wang（香港中文大学（深圳），深圳湾区研究院）
- 通讯作者：未明确说明（根据署名惯例，最后一位作者Zhizheng Wu可能为通讯作者，但论文未明确标注）。
- 作者列表：
  - Yuxiang Wang (香港中文大学（深圳），深圳湾区研究院)
  - Hongyu Liu (香港中文大学（深圳）)
  - Dekun Chen (香港中文大学（深圳）)
  - Xueyao Zhang (香港中文大学（深圳）)
  - Zhizheng Wu (香港中文大学（深圳），深圳湾区研究院，澳门城市大学，Amphion Technology Co., Ltd.)

💡 **毒舌点评**

亮点：论文像一位敏锐的侦探，为“语音大模型在共享环境中如何保守秘密”这一被忽视的关键问题立了案、建了卷宗（三层级基准），并通过大规模“审讯”（评估）揪出了当前模型“嘴不严”（交互隐私能力弱）的通病，为领域敲响了警钟。  
短板：然而，论文的“破案”能力（分析）远强于“结案”能力（解决方案）。其提出的微调路径更像是一个证明方向可行的“示例”，而非一个完整、鲁棒的解决方案。同时，整个“案发现场”（基准）完全由合成语音构成，尽管做了验证，但“真实犯罪现场”（真实隐私泄露场景）的复杂性可能被低估。

🔗 **开源详情**

- 代码：论文中未提及具体代码仓库链接，但承诺将开源基准数据集、训练集和微调模型。
- 模型权重：承诺开源基于Kimi-Audio微调的模型权重（“Ours: Kimi-Audio-sft”）。
- 数据集：承诺公开VoxPrivacy基准数据集（32.86小时）、Real-VoxPrivacy验证子集（586 utterances）以及用于训练的4000+小时数据集。具体获取方式未在提供的内容中说明。
- Demo：论文开头提供了一个Demo页面链接：https://myflashbarry.github.io/VoxPrivacy.github.io/。
- 复现材料：附录提供了详尽的材料，包括：所有提示模板（生成、润色、评估）、评估标准详细规则（A/B/C分类）、训练集统计数据与示例、对抗攻击详情、说话者验证能力分析等。
- 论文中引用的开源项目：CosyVoice2（TTS）， Whisper-large-v3（ASR）， Deepseek， Gemini， ChatGPT（用于数据生成）， 以及多个用于构建训练集的公开语音/音频数据集。

📌 **核心摘要**

1. 问题：随着语音语言模型（SLS）进入智能家居等多用户共享环境，模型需要区分不同说话者以管理信息流。一个关键的未被评估的能力是“交互隐私”——即防止���个用户的私密信息被泄露给另一个用户。现有基准要么只评估对话能力，要么只关注全局敏感信息，忽略了依赖上下文和说话者身份的隐私。
2. 方法核心：提出VoxPrivacy，首个系统评估SLS交互隐私的基准。其核心是设计了三层级任务结构：Tier 1（遵循“别告诉别人”的直接命令）、Tier 2（使用声纹作为密钥，只向主人披露）、Tier 3（在无明确指令下，自主推断信息是否私密并加以保护）。基准包含7107个样本，32.86小时英中双语合成音频，并构建了一个小型真人录音子集（Real-VoxPrivacy）用于验证。
3. 创新性：与已有工作相比，VoxPrivacy首次将交互隐私和说话者感知的响应生成作为独立的评估维度；其三层任务设计覆盖了从简单指令到复杂常识推理的能力谱；基准构建结合了多LLM生成、自动清洗、人工验证和可控TTS合成，保证了质量和多样性。
4. 主要实验结果：对9个SLS的评估显示，交互隐私是当前模型的重大缺陷。大多数开源模型在Tier 2和Tier 3上的准确率接近50%（随机猜测）。强闭源模型（如Gemini-2.5-pro）表现更好，但在更难的Tier 3（主动推理）上也出现明显性能下降。关键数据见下表。在Real-VoxPrivacy上的评估证实了合成数据上的结论。

表2: Tier 1（直接命令）部分模型性能（Accuracy (%)）
| 模型 | 英语准确率 | 中文准确率 |
| :--- | :--- | :--- |
| LLM (上界) | 98.01 | 99.10 |
| Gemini-2.5-pro | 81.95 | 84.03 |
| Qwen2.5Omni | 39.41 | 30.50 |
| Kimi-Audio | 71.38 | 40.77 |
| Ours (微调后) | 87.92 | 80.23 |

表3: 条件隐私任务（Tier 2&3）部分模型性能（F1 Score (%)）
| 模型 | Tier 2 (英) | Tier 2 (中) | Tier 3 (英) | Tier 3 (中) |
| :--- | :--- | :--- | :--- | :--- |
| LLM (上界) | 90.64 | 93.64 | 86.71 | 88.16 |
| Gemini-2.5-pro | 76.39 | 76.31 | 67.06 | 67.18 |
| Qwen2.5Omni | 44.63 | 19.76 | 40.61 | 22.16 |
| Kimi-Audio | 59.14 | 26.47 | 55.39 | 29.73 |
| Ours (微调后) | 82.65 | 78.50 | 77.83 | 71.68 |

5. 实际意义：为评估和开发更安全、更符合用户隐私期望的SLS提供了首个专用工具和明确目标。诊断出的问题（如无法整合声纹与隐私规则）指明了未来模型需要加强多说话者上下文建模。
6. 主要局限性：基准完全基于合成数据（尽管进行了验证），可能无法完全模拟真实世界隐私语境的细微差别（如情感、潜台词）。提出的解决方案（监督微调）是初步的，论文承认未来需要探索更优的方法（如强化学习）。

---

### 9. [STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models](/audio-paper-digest-blog/posts/2026-05-02-stitch-simultaneous-thinking-and-talking-with)

✅ **7.5/10** | 前25% | #语音对话系统 | #自回归模型 | #语音大模型 #流式处理

👥 **作者与机构**

- 第一作者：Cheng-Han Chiang（台湾大学；微软）
- 通讯作者：Xiaofei Wang（微软）
- 作者列表：
  Cheng-Han Chiang (台湾大学, 微软), Xiaofei Wang (微软), Linjie Li (微软), Chung-Ching Lin (微软), Kevin Lin (微软), Shujie Liu (微软), Zhendong Wang (微软), Zhengyuan Yang (微软), Hung-yi Lee (台湾大学), Lijuan Wang (微软)

💡 **毒舌点评**

这篇论文巧妙地利用“音频播放时间”来“偷”时间进行内部推理，为语音大模型引入“边想边说”能力，解决了传统“先想后说”带来的延迟问题，思路很工程化且有效。但论文的“突破性”有限，核心是将文本CoT技术适配到特定语音模型架构（GLM-4-Voice）的生成流程上，并非提出全新的模型范式；同时，实验主要局限于英语数学问答，对多语言、复杂对话场景的验证有待加强。

📌 **核心摘要**

1. 要解决的问题：当前的语音语言模型（SLM）缺乏在回答前进行内部、无声思考过程的能力，而直接生成完整思维链（CoT）再说话会导致响应延迟不可控。
2. 方法核心：提出STITCH（Simultaneous Thinking and Talking with Chunked Reasoning），使模型在生成语音响应的音频片段（chunk）的播放时间内，交替生成无声推理块（reasoning chunks）和文本-语音响应块，实现“同时思考与说话”。其两个变体：STITCH-R（先推理后说话）和STITCH-S（先说话后推理）。
3. 与已有方法相比新在哪里：首次将无声音频推理能力引入语音语言模型。相比“先说后想”的基线，STITCH在数学推理任务上性能大幅提升（平均提升15%），同时STITCH-S的初始响应延迟与无推理模型相同。
4. 主要实验结果：
   在数学推理数据集上（GSM8K等），TBS（先完整思考再说话）的平均准确率为79.12%，STITCH-R为78.70%，STITCH-S为78.04%，远高于无推理基线（62.98%）。在非推理任务上，STITCH系列性能与基线持平或略优。人类评估显示STITCH-S的响应速度优于STITCH-R和TBS。关键对比数据见下表：

| Id | Config | Latency | Average Accuracy (Math QA) |
|---|---|---|---|
| 2 | No reasoning | Ntext + Nspeech | 62.98 |
| 4 | TBS | Nfull + Ntext + Nspeech | 79.12 |
| 6 | STITCH-R | Nreason + Ntext + Nspeech | 78.70 |
| 7 | STITCH-S | Ntext + Nspeech | 78.04 |

5. 实际意义：为构建更智能、响应更自然的语音助手提供了一种新范式，能在不增加用户等待时间的前提下，提升模型处理复杂推理任务的能力。
6. 主要局限性：实验集中在英语数学和问答任务；方法强依赖于所选SLM（GLM-4-Voice）的特定文本-语音交替生成架构；未探讨更长、更复杂的推理链如何影响语音输出的连贯性。

---

### 10. [WearVox: An Egocentric Multichannel Voice Assistant Benchmark for Wearables](/audio-paper-digest-blog/posts/2026-05-02-wearvox-an-egocentric-multichannel-voice)

✅ **7.5/10** | 前25% | #语音对话系统 | #基准测试 | #多通道 #语音大模型

👥 **作者与机构**

- 第一作者：Zhaojiang Lin（Meta，标记为联合第一作者）
- 通讯作者：未说明（论文未明确指定通讯作者，但提供了邮箱zhaojiang@meta.com, sunkaicn@meta.com, yongxu@meta.com, lunadong@meta.com）
- 作者列表：Zhaojiang Lin（Meta）、Yong Xu（Meta，联合第一作者）、Kai Sun（Meta，联合第一作者）、Jing Zheng（Meta）、Yin Huang（Meta）、Surya Teja Appini（Meta）、Krish Narang（Meta）、Renjie Tao（Meta）、Ishan Kapil Jain（Meta）、Siddhant Arora（Carnegie Mellon University，工作于Meta）、Ruizhi Li（Meta）、Yiteng Huang（Meta）、Kaushik Patnaik（Meta）、Wenfang Xu（Meta）、Suwon Shon（Meta）、Yue Liu（Meta）、Ahmed A Aly（Meta）、Anuj Kumar（Meta）、Florian Metze（Meta）、Xin Luna Dong（Meta）

💡 **毒舌点评**

亮点在于它精准地定义了可穿戴语音助手独有的“坑”（自我中心音频、多通道、运动噪声、旁听对话），并用一个设计精良、场景丰富的测试集（WearVox）把这些坑量化了，直接戳穿了当前所谓“先进”语音大模型在真实世界中的脆弱性。短板则是案例研究部分提出的多通道模型（MC WearLlama）虽然验证了方向，但更像是一个概念验证（PoC）而非一套完整的解决方案，模型本身未开源，且多通道处理方式（仅拼接两个通道）相对简单，离真正的端到端多模态融合还有距离。

🔗 **开源详情**

- 代码：是。提供了GitHub仓库链接：https://github.com/facebookresearch/wearvox，包含测试集和评估代码。
- 模型权重：否。论文未提及SC/MC WearLlama或其基础模型权重的公开计划。
- 数据集：是。WearVox测试集已公开，可通过上述GitHub仓库获取。
- Demo：论文中未提及在线演示。
- 复现材料：提供了附录，包含任务提示（Prompt）、LLM评委提示、数据集收集细节（角色、环境分布）和模型实现概述。但缺少完整的训练配置、检查点和详细超参数。
- 论文中引用的开源项目：
    - 模型：Llama 4 Scout (Team, 2025b), Qwen2.5-Omni (Xu et al., 2025), Kimi-Audio (Ding et al., 2025), Gemma 3n (Team, 2025a), Phi-4 multimodal (Abouelenin et al., 2025), GPT-4o (Hurst et al., 2024), Gemini 2.5-flash (Comanici et al., 2025)。
    - 工具/框架：Whisper (Radford et al., 2023), Conformer (Gulati et al., 2020), BEST-RQ (Chiu et al., 2022), AudioChatLlama (Fathullah et al., 2024), SeamlessM4T (Barrault et al., 2023)。
    - 数据集：CRAG (Yang et al., 2024), Head-to-tail (Sun et al., 2024)。

📌 **核心摘要**

1.  要解决什么问题：现有语音助手基准测试集大多基于干净或通用的对话音频，忽略了可穿戴设备（如AI眼镜）实际使用中面临的独特挑战，包括自我中心视角的音频、运动与噪声干扰、快速微交互以及区分设备指令与背景对话的需求。
2.  方法核心是什么：提出了WearVox，这是首个专门为评估可穿戴语音助手设计的基准测试集。它包含3,842个多通道、自我中心的音频录音，来自AI眼镜，涵盖五个任务（搜索增强问答、闭源问答、旁听对话拒绝、工具调用、语音翻译），并在多样化的室内外环境与声学条件下录制。
3.  与已有方法相比新在哪里：首次系统性地针对可穿戴场景构建基准，其核心区别在于：(1) 采用设备采集的多通道、第一人称音频，而非单声道或TTS合成；(2) 强调对话动态（如旁听对话、中断）；(3) 覆盖广泛的声学环境（包含58%的噪音数据），并提供丰富的元数据。
4.  主要实验结果如何：对多种SOTA语音大语言模型（SLLMs）的评估显示，在WearVox上的准确率普遍较低（29%-59%），且在嘈杂户外环境中性能显著下降。例如，GPT-4o Audio在工具调用任务上仅得8.9%，而Gemini 2.5 Flash在开启思考模式后，整体任务微平均分从59.8%提升至71.3%，但延迟（TTFT）大幅增加（平均5546ms vs 1592ms）。案例研究表明，使用多通道音频输入的模型（MC WearLlama）在旁听对话拒绝（93.9% vs 85.4%）和工具调用（63.9% vs 58.5%）上优于单通道模型（SC WearLlama），证实了空间音频线索的价值。
5.  实际意义是什么：为评估和研发真正实用的、上下文感知的可穿戴语音AI提供了标准化的测试平台。研究结果强调了多通道/空间音频对于提升设备在复杂真实场景下的鲁棒性和智能性的关键作用，为硬件设计和算法优化指明了方向。
6.  主要局限性是什么：(1) 基准测试集规模（约3.8K条）相对较小；(2) 案例研究中的多通道模型尚未开源；(3) 讨论的模型主要基于现有单通道SOTA，对更深度集成多通道处理的端到端模型探索有限；(4) 未涵盖更多模态（如视觉、IMU）的融合评估。

---

### 11. [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-02-closing-the-gap-between-text-and-speech)

✅ **7.5/10** | 前25% | #语音对话系统 | #知识蒸馏 | #端到端 #大语言模型

👥 **作者与机构**

- 第一作者：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS；论文注释表明工作在Apple实习期间完成）
- 通讯作者：未明确说明
- 作者列表：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS），Skyler Seto（Apple），Maureen de Seyssel（Apple），Richard He Bai（Apple），Zijin Gu（Apple），Tatiana Likhomanenko（Apple），Navdeep Jaitly（Apple），Zakaria Aldeneh（Apple）

💡 **毒舌点评**

这篇论文最大的亮点是把“语音LLM为什么不如文本LLM”这个模糊问题，清晰地拆解成了“遗忘”和“跨模态错位”两个可测量的指标，并据此设计了高效的两阶段训练策略，在数据量远小于同行的情况下取得了有竞争力的结果。但不足之处也很明显：方法验证严重依赖特定的合成语音（Kokoro TTS），其生成的语音质量与自然语音的差异，以及对非英语内容、复杂领域的覆盖，可能被低估了，而这些恰恰是真实场景中的关键挑战；此外，Stage II的主动选择策略虽然有效，但提升幅度有限，且需要预先为大量文本生成语音进行“探针”测量，其实际部署的成本效益比值得商榷。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接或开源计划。
- 模型权重：论文中未提及是否公开SALAD-3B/7B等模型的权重。
- 数据集：论文使用的语音数据集（Emilia, LibriHeavy）和文本数据集（FineWeb-Edu）是公开的。合成语音数据未提及是否公开。
- Demo：未提及提供在线演示。
- 复现材料：论文在附录中提供了非常详细的模型架构（A.1）、训练细节（A.2, A.3）、评估协议（A.5）和超参数，复现指南清晰。
- 引用的开源项目：论文中引用并依赖了多个开源项目，包括Mimi语音编码器（D´efossez et al., 2024）、Kokoro TTS模型、Qwen2.5 LLMs、Whisper ASR模型、SmolLM数据集、BGE嵌入模型等。

📌 **核心摘要**

本文研究了将大型语言模型适配于语音输入时普遍存在的“文本-语音理解差距”问题，即语音适配模型在语言理解任务上的表现显著弱于其文本基座模型。作者将该差距归因于两个因素：(1) 适配过程中文本能力的遗忘；(2) 语音与文本表征之间的跨模态错位。基于此分析，提出了SALAD方法，该方法包含两个阶段：第一阶段在自然语音数据上使用跨模态知识蒸馏目标进行训练，有效缓解错位和遗忘；第二阶段通过一种主动学习算法，从大规模文本语料中识别并合成少量覆盖模型“缺失领域”的语音数据，以进一步缩小分布差距。

与依赖大规模私有语音数据或大规模合成数据的先前方法相比，SALAD在仅使用约1/10的公开数据量下，在知识、推理和语言理解等广域基准上达到了与最先进端到端模型（如Qwen2.5-Omni）和级联系统相竞争的性能。例如，SALAD-7B在平均语音理解准确率上达到75.4%，而使用数据量超过14万小时，远低于竞争对手可能使用的数百万小时级别数据。主要局限性在于，方法在合成语音上进行大量验证，可能无法完全代表复杂多变的真实语音环境，且主动选择策略需要额外的合成与测量步骤。

### 01.模型架构
论文提出的模型遵循典型的语音适配LLM架构，包含三个主要组件：
1.  语音编码器：采用冻结的、轻量级的Mimi语音分词器（D´efossez et al., 2024），它从原始波形中提取低级语音表征Z。这是一个因果编码器，适合流式处理。
2.  适配器：一个由12层Transformer解码器堆叠而成的网络（122M参数），负责将低级语音表征Z转换为更高级、更接近文本的表征Z’，使其能够被语言模型处理。适配器与语言模型在训练中共同更新。
3.  语言模型：从预训练的文本LLM（如Qwen2.5-3B/7B）初始化，处理由文本嵌入和语音适配器输出组成的交错多模态序列H，并输出下一个文本token的概率分布。

数据流：音频波形 -> 语音编码器 -> 适配器 -> 语言模型（与文本token交错）-> 文本输出。该架构选择（如因果、非文本友好表征的编码器）被设计为一个“最坏情况”下的输入对齐场景，旨在证明方法的有效性并适用于低延迟流式应用。

![模型架构图](https://production-cdn.annas-archive.org/d1/08/d108e3789d4e5f0a484127115d3d402f3b6d6b482c0b2627c67444c4b0c96c93.png)
图1：模型架构及性能概览。左图显示随着训练数据量的增加，不同模型的文本-语音理解差距变化，SALAD模型在数据效率上显著优于其他基线。右图展示了在多个广域基准上，文本基座模型（文本输入）与语音适配模型（语音输入）的性能对比。

### 02.核心创新点
1.  问题量化框架：首次明确将“文本-语音理解差距”分解为“遗忘”（Eq. 3）和“跨模态错位”（Eq. 2）两个可测量的统计指标，并证明它们与广域基准上的性能高度相关（R²>0.7）。这为诊断和改进语音LLM提供了清晰的分析工具。
2.  两阶段样本高效训练策略（SALAD）：结合了跨模态知识蒸馏（解决错位与遗忘）和主动学习数据选择（以最小代价扩展领域覆盖）的两阶段方法。这区别于依赖单一目标（如NLL）或大规模数据堆叠的先前工作。
3.  基于错位的主动选择算法：在Stage II中，提出了一种利用模型自身在文本聚类上的“错位”信号作为重要性权重，从小规模合成数据中选择性采样以覆盖领域差距的方法（Eq. 8-9）。这比随机或全量合成数据更高效。
4.  高效性验证：在多个广域基准上证明，使用SALAD训练的3B和7B模型，其性能可以匹配或超过使用数倍至数十倍数据训练的其他端到端语音LLM（如GLM-4-Voice, DiVA），并接近强大的级联系统。

### 03.细节详述
- 训练数据：
    - 自然语音：使用公开的Emilia（对话式）和LibriHeavy（朗读式）数据集，总计约14.1万小时。
    - 广域文本：FineWeb-Edu的一个10B token子集，用于合成语音研究领域覆盖。
    - 合成语音：使用Kokoro-TTS模型（af-heart声音）从文本数据合成语音。Stage II主动选择时，合成预算为自然语音数据量的1%，最终SALAD-3B额外训练了1.9B token，SALAD-7B额外训练了1.9B token。
    - 混合训练：训练中混合了SmolLM语料库（Allal et al., 2025）数据以缓解遗忘，Stage I中混合概率为1/3。
- 损失函数：
    - 主损失为插值损失（Eq. 4）：`L(D, θ) = α  LDIST(D, θ) + (1-α)  LNLL(D, θ)`。
    - `LDIST`（Eq. 5）是跨模态蒸馏损失：最小化语音输入下模型预测分布与文本基座模型（教师）预测分布的KL散度。仅在位置是文本token时计算。
    - `LNLL`（Eq. 6）是标准的最大似然估计损失。
    - 在SALAD方法中，Stage I使用α=1.0（纯蒸馏），Stage II联合最小化在`Dspeech`和`Dactive`上的蒸馏损失。
- 训练策略：
    - 优化器：AdamW，权重衰减0.1。
    - 学习率：采用warmup-stable-decay调度。适配器学习率（如1e-3或1e-4）高于语言模型学习率（如5e-5或5e-6）。
    - 批大小：约1M tokens。
    - 上下文窗口：2048 tokens。
    - Stage II：从Stage I学习率衰减前的检查点恢复，继续训练1.9B tokens，学习率线性衰减至零。
- 关键超参数：
    - 适配器：12层Transformer解码器，残差维度960，MLP维度2560，15个注意力头，5个KV头。
    - 蒸馏目标α：在分析实验中测试了{0, 0.25, 0.5, 0.75, 1}。
    - 主动选择参数：聚类数K=128，选择性参数γ=5。
- 训练硬件：论文未明确说明GPU型号、数量及总训练时长。
- 推理细节：评估时采用few-shot prompting，计算每个答案选项的归一化对数概率，选择概率最高的选项作为预测。对于开放生成评估（Appendix A.9），使用top-k采样（k=250），温度0.7。
- 正则化/稳定训练：使用了权重衰减、学习率warmup，以及在训练中混合文本预训练数据。

### 04.实验结果
论文在6个广域基准的文本和语音版本上进行了评估。核心结果显示，SALAD方法能有效缩小文本-语音理解差距，并在数据效率上取得优势。

主要性能对比（表3摘录）：
| 模型 | 类型 | StoryCloze (Acc./Gap) | MMSU (Acc./Gap) | OBQA (Acc./Gap) | HellaSwag (Acc./Gap) | ARC-C (Acc./Gap) | PIQA (Acc./Gap) | 平均Gap |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ASR+Qwen2.5-7B | 级联 | 84.2 / 0.8 | 67.1 / 3.7 | 84.0 / 5.0 | 74.7 / 2.0 | 86.5 / 1.9 | 79.9 / 0.0 | 2.2 |
| Qwen2.5-Omni-7B | 端到端 | 80.1 / 4.9 | 61.0 / -9.8 | 85.5 / 3.5 | 68.4 / 8.3 | 87.1 / 1.3 | 78.0 / 1.9 | 5.0 |
| GLM-4-Voice-9B | 端到端 | 78.2 / 20.6 | 38.6 / 27.6 | 57.6 / 30.1 | 68.6 / 11.9 | 64.6 / 28.7 | 72.6 / 1.9 | 20.1 |
| SALAD-3B (Stage II) | 端到端 | 75.8 / 7.1 | 52.5 / 9.4 | 76.7 / 5.1 | 68.7 / 2.3 | 79.9 / 1.9 | 78.1 / 0.5 | 4.6 |
| SALAD-7B (Stage II) | 端到端 | 81.5 / 3.5 | 57.5 / 13.3 | 75.1 / 13.9 | 74.0 / 2.7 | 84.0 / 4.4 | 80.3 / 0.4 | 6.2 |

关键结论：
1.  数据效率：图1显示，SALAD模型在远少于基线的数据量下（例如，SALAD-7B训练数据约为Qwen2.5-Omni的1/10）达到了有竞争力的性能。
2.  目标函数影响：图4和表2表明，蒸馏目标（α>0）在缓解跨模态错位上比标准NLL目标（α=0）更有效，且呈现良好的缩放特性。NLL训练在窄域数据上会导致错位随数据量增加而恶化。
3.  主动选择有效性：表4显示，在Stage II中，主动选择（Active Sel.）比随机选择（Uniform）在MMSU（+3.0%）、OBQA（+4.8%）和ARC-C（+1.0%）上带来更大提升，这些任务涉及更多科学和技术领域。
4.  保持文本能力：表5显示，与其它语音适配模型相比，SALAD在文本输入下的性能最接近其文本基座模型，甚至略有超越（Gap为负值），证明了蒸馏目标有效缓解了遗忘。
5.  消融与分析：附录中的消融实验（图6，表8）表明，Stage II的增益并非仅来自额外训练，主动选择策略比随机选择更优，且聚类数K的选择影响较小。

![图4：训练目标、数据规模与领域对性能的影响](https://production-cdn.annas-archive.org/d1/08/d108e3789d4e5f0a484127115d3d402f3b6d6b482c0b2627c67444c4b0c96c93.png)
图4：展示了不同训练目标（α值）、训练token数和数据集选择对错位（上图）、遗忘（中图）和平均语音性能（下图）的影响。关键结论：蒸馏（α=1）在窄域数据上能有效降低错位；数据域匹配（FineWeb-Edu）与蒸馏结合效果最佳。

![图3：错位/遗忘与性能的关系](https://production-cdn.annas-archive.org/d1/08/d108e3789d4e5f0a484127115d3d402f3b6d6b482c0b2627c67444c4b0c96c93.png)
图3：左图显示语音平均性能与错位（对数尺度）负相关（R²=0.75）；右图显示文本平均性能与遗忘负相关（R²=0.74）。这为论文的分析框架提供了实证支持。

### 05.评分理由
- 学术质量：6.5/7
    - 创新性（2.5/3）：清晰的问题分解框架和针对性的两阶段训练方法是扎实的创新，主动数据选择策略设计巧妙。但核心组件（蒸馏、主动学习）并非全新，创新更多体现在组合与应用到特定问题上。
    - 技术正确性与实验充分性（2.5/2.5）：方法设计合理，实验控制变量严谨，提供了丰富的消融实验和分析（如目标函数、数据域、选择策略），证据链完整。基准选择广泛，涵盖知识、推理和理解。
    - 证据可信度（1.5/1.5）：所有结论都有对应的实验数据或图表支持，统计分析（如ANOVA、LOOCV R²）增强了结论的说服力。

- 选题价值：1.5/2
    - 前沿性与影响（1.5/2）：解决LLM的多模态理解差距是前沿热点，尤其是向语音交互的扩展。数据高效的方法对开源社区和资源受限场景有实际价值。但研究聚焦于特定子问题（理解差距），且语音生成部分未涉及。

- 开源与复现加成：-0.5/1
    - 论文提供了极其详细的训练配置、超参数和数据处理细节，具备很高的可复现性。然而，论文未提供代码仓库或预训练模型权重的链接，也未明确说明是否开源，这降低了复现的便捷性。因此给予轻微负分。

### 开源详情
- 代码：论文中未提及代码仓库链接或开源计划。
- 模型权重：论文中未提及是否公开SALAD-3B/7B等模型的权重。
- 数据集：论文使用的语音数据集（Emilia, LibriHeavy）和文本数据集（FineWeb-Edu）是公开的。合成语音数据未提及是否公开。
- Demo：未提及提供在线演示。
- 复现材料：论文在附录中提供了非常详细的模型架构（A.1）、训练细节（A.2, A.3）、评估协议（A.5）和超参数，复现指南清晰。
- 引用的开源项目：论文中引用并依赖了多个开源项目，包括Mimi语音编码器（D´efossez et al., 2024）、Kokoro TTS模型、Qwen2.5 LLMs、Whisper ASR模型、SmolLM数据集、BGE嵌入模型等。

---

### 12. [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-02-can-speech-llms-think-while-listening)

✅ **7.5/10** | 前25% | #语音对话系统 | #大语言模型 | #思维链 #偏好学习

👥 **作者与机构**

- 第一作者：Yi-Jen Shih (The University of Texas at Austin, Meta Superintelligence Labs)
- 通讯作者：未明确说明（论文标注两位共同第一作者：Yi-Jen Shih, Desh Raj，以及共同作者：Chunyang Wu, Wei Zhou等）
- 作者列表：Yi-Jen Shih (The University of Texas at Austin, Meta Superintelligence Labs)， Desh Raj (Meta Superintelligence Labs)， Chunyang Wu (Meta Superintelligence Labs)， Wei Zhou (Meta Superintelligence Labs)， SK Bong (Meta Superintelligence Labs)， Yashesh Gaur (Meta Superintelligence Labs)， Jay Mahadeokar (Meta Superintelligence Labs)， Ozlem Kalinli (Meta Superintelligence Labs)， Michael L. Seltzer (Meta Superintelligence Labs)

💡 **毒舌点评**

论文成功地将“思维链”和“边听边想”的概念从文本大模型工程化移植到语音大模型领域，提出了“问题完整度”这一新颖的触发指标，并用DPO优化了推理启动时机与长度，工程设计思路清晰。然而，最大的短板在于所有实验基于未公开的内部模型和数据集（虽用了公开的Moshi，但训练数据为私有），这使得其提出的“问题完整度”度量的普适性和复现性存疑，论文的结论严重依赖其特定的训练流程和私有数据。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开模型权重。研究基于Moshi模型进行微调，但Moshi本身是开源的。
- 数据集：训练数据集为私有构造（基于CoT-Collection处理）。论文承诺会发布SRQA评估基准，但具体获取方式未在文中说明。
- Demo：未提及。
- 复现材料：论文提供了详细的训练参数（学习率、批次大小、步数等）、数据处理流程描述以及LLM评审的提示词模板。这是主要的复现信息来源。
- 论文中引用的开源项目：Moshi（语音文本基础模型）、CoT-Collection（文本推理数据集）、Mimi（音频编解码器）、Llama3-8B-Chat（用于估计QC）、LLaMA-3.1 405B（用于评审）、Pyannote（VAD工具）、Whisper（ASR模型）。

📌 **核心摘要**

这篇论文旨在解决语音大模型（Speech LLMs）在复杂推理任务上表现不佳且推理过程会增加响应延迟的问题。方法核心是：1）在多流语音大模型Moshi的“文本独白”流中引入文本思维链（CoT），并训练模型同时进行流式语音识别（ASR）以提升理解；2）提出一个基于熵的“问题完整度”（QC）指标，用于判断用户问题何时已包含足够信息让模型开始推理，从而实现“边听边想”；3）利用拒绝采样构造偏好数据，通过DPO（直接偏好优化）来进一步优化模型在早期推理场景下的准确性和推理链长度。与已有方法相比，新在：首次在多流语音大模型中探索文本CoT；提出的QC指标比固定窗口启发式方法在控制准确性-延迟权衡上更优；DPO偏好调优能同时优化推理准确性和延迟。主要实验结果表明，在自建的SRQA（语音推理问答）基准上，CoT微调使Moshi在推理任务上的平均准确率提升了2.4倍；QC方法在同等延迟下比启发式方法在ARC-Easy上准确率提升4%；基于长度偏好的DPO训练在保持准确率的同时，将延迟降低了约70%。其实际意义在于推动语音助手向更智能、响应更自然的对话代理演进。主要局限性在于实验所用训练集和部分评估基准为私有构造，且“问题完整度”指标的计算依赖一个外部LLM（Llama3-8B-Chat），其在实际流式推理中的开销和适用性未充分讨论。

---

### 13. [From Text to Talk: Audio-Language Model Needs Non-Autoregressive Joint Training](/audio-paper-digest-blog/posts/2026-05-02-from-text-to-talk-audio-language-model-needs-non)

✅ **7.5/10** | 前25% | #语音对话系统 | #扩散模型 | #语音大模型 #端到端

👥 **作者与机构**

- 第一作者：Tianqiao Liu（广东智慧教育研究院、好未来教育集团）
- 通讯作者：Xueyi Li（广东智慧教育研究院）
- 作者列表：Tianqiao Liu（广东智慧教育研究院、好未来教育集团）、Xueyi Li（广东智慧教育研究院）、Hao Wang（北京大学）、Haoxuan Li（北京大学）、Zhichao Chen（北京大学）、Weiqi Luo（广东智慧教育研究院）、Zitao Liu（广东智慧教育研究院）

💡 **毒舌点评**

亮点在于敏锐地指出了用单一自回归目标训练文本和音频模态的“结构性不匹配”，并巧妙地利用离散扩散模型的任意序自回归特性，构建了一个理论自洽的混合生成框架。短板在于，虽然模型在多个任务上超越了基线，但其性能与一些大型（7B以上）模型仍有差距，且实验部分主要依赖合成数据进行扩展，其在大规模真实交互场景中的鲁棒性和长期对话能力尚待更深入的验证。

🔗 **开源详情**

- 代码：是，提供了GitHub仓库链接：https://github.com/ai4ed/TtT。
- 模型权重：未提及是否公开模型检查点或权重。
- 数据集：论文中详细列出了训练所用数据集名称和部分规模，但未说明是否公开整合后的训练数据集或提供下载方式。
- Demo：未提及在线演示。
- 复现材料：提供了非常详尽的训练细节（优化器、学习率、批量大小、随机策略概率等）和推理配置（扩散步数、块大小、引导尺度等），并说明了评估使用的具体ASR和LLM-as-a-Judge模型。附录包含数据格式示例。
- 论文中引用的开源项目：明确使用了Qwen2.5作为主干模型，并沿用了GLM-4-Voice的音频Tokenizer和Decoder设计。训练数据引用了VoiceAssistant-400K， CosyVoice2， FineWeb-Edu等。评估中使用了Whisper， Paraformer-zh， Qwen3-30B-A3B等。

📌 **核心摘要**

1.  问题：现有的端到端语音对话模型（如Moshi, GLM-4-Voice）普遍采用单一自回归（AR）方法同时生成文本和音频，但这忽视了两种模态的本质依赖差异：文本生成是强目标间（target-target）依赖，而音频生成更依赖源-目标（source-target）依赖，即主要由输入文本决定。
2.  方法核心：提出了Text-to-Talk (TtT)，一个统一的音频-文本多模态大语言模型框架。其核心是将AR用于文本生成，与基于吸收离散扩散的非自回归（NAR）方法用于音频生成，整合到同一个Transformer中。文本生成遵循标准因果顺序，而音频段内的生成被建模为可以任意顺序进行（得益于扩散模型的性质），但整体仍受制于因果的跨段依赖。
3.  创新点：
    *   理论框架：利用吸收离散扩散模型等价于“任意序自回归模型”的理论，为混合AR-NAR训练目标提供了上界分析，证明了其合理性。
    *   架构设计：设计了模态感知注意力机制，强制对文本使用因果注意力，而对音频段内允许双向注意力，同时保持跨段的因果依赖。
    *   训练策略：提出了三项训练策略（批量AR/NAR混合、前缀保留掩码、随机段截断）来弥合训练时部分掩码音频与推理时完整音频之间的差异。
4.  主要实验结果：在多个基准测试（Audio-QA, ASR, AAC, URO-Bench）上，TtT（3B参数）持续优于强大的纯AR和纯NAR基线模型。例如，在Audio-QA的LLaMAQuestions数据集上，TtT-3B得分34.68，而纯AR的Qwen2.5-3B仅得10.00；在AISHELL-2 ASR任务上，TtT-3B的WER为12.53，显著低于AR基线的54.94。与更大的模型相比，TtT在某些任务上也展现出竞争力。
5.  实际意义：为构建更高效、更自然的端到端语音对话系统提供了一种新的架构范式，通过尊重模态差异来减少误差传播，并实现音频的并行生成，有望降低延迟。
6.  主要局限性：当前实验主要基于3B参数的模型，其能力上限和在更复杂推理任务上的表现有待更大规模模型的验证；部分训练数据依赖TTS合成，可能引入领域偏差。

---

