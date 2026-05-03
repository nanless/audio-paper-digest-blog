---
title: "ICLR 2026 - 语音对话系统 论文列表"
date: 2026-05-04
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
| 🥇 | [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-04-end-to-end-listen-look-speak-and-act) | 9.0分 | 前10% |
| 🥈 | [Human or Machine? A Preliminary Turing Test for Speech-to-Sp](/audio-paper-digest-blog/posts/2026-05-04-human-or-machine-a-preliminary-turing-test-for) | 8.5分 | 前25% |
| 🥉 | [Speech World Model: Causal State–Action Planning with Explic](/audio-paper-digest-blog/posts/2026-05-04-speech-world-model-causal-stateaction-planning) | 8.0分 | 前25% |
| 4. | [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-04-can-speech-llms-think-while-listening) | 8.0分 | 前25% |
| 5. | [From Text to Talk: Audio-Language Model Needs Non-Autoregres](/audio-paper-digest-blog/posts/2026-05-04-from-text-to-talk-audio-language-model-needs-non) | 8.0分 | 前25% |
| 6. | [DrVoice: Parallel Speech-Text Voice Conversation Model via D](/audio-paper-digest-blog/posts/2026-05-04-drvoice-parallel-speech-text-voice-conversation) | 8.0分 | 前10% |
| 7. | [ParaS2S: Benchmarking and Aligning Spoken Language Models fo](/audio-paper-digest-blog/posts/2026-05-04-paras2s-benchmarking-and-aligning-spoken-language) | 7.5分 | 前25% |
| 8. | [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-04-towards-true-speech-to-speech-models-without-text) | 7.5分 | 前25% |
| 9. | [STITCH: Simultaneous Thinking and Talking with Chunked Reaso](/audio-paper-digest-blog/posts/2026-05-04-stitch-simultaneous-thinking-and-talking-with) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-04-end-to-end-listen-look-speak-and-act)

🔥 **9.0/10** | 前10% | #语音对话系统 | #多模态模型 | #端到端 #大语言模型

👥 **作者与机构**

- 第一作者：Siyin Wang (清华大学)
- 通讯作者：Chao Zhang (清华大学)
- 作者列表：Siyin Wang（清华大学）、Wenyi Yu（清华大学）、Xianzhao Chen（ByteDance）、Xiaohai Tian（ByteDance）、Jun Zhang（ByteDance）、Lu Lu（ByteDance）、Yuxuan Wang（清华大学）、Chao Zhang（清华大学）

💡 **毒舌点评**

亮点：论文首次将语音、视觉、文本和动作模态真正统一在一个全双工、流式的端到端架构中，并实现了“边说边做”、“动作打断”等以往AI无法做到的自然交互，其SA-MoE架构在融合多模态的同时有效缓解了模态干扰，技术路线清晰且实验效果显著。
短板：当前验证仍局限于仿真环境（LIBERO），对于如此强调“真实交互”的模型而言，缺少在真实物理世界机器人上的部署与测试是一个明显短板；此外，模型在同时执行多项任务时性能有所下降，说明其并行处理复杂多模态流的能力仍有提升空间。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接 `https://github.com/bytedance/SALMONN`，并承诺所有代码将开源。
- 模型权重：论文承诺将发布模型检查点（model checkpoints）。
- 数据集：论文中未提供独立数据集链接，但详细描述了训练所用的公开数据集（如LIBERO, LibriSpeech等）及为高级任务生成的数据。承诺将发布合成语音样本。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详尽的模型架构与规格（附录A）、训练数据细节（附录B）、评估细节（附录C）、任务细节（附录D）、提示词（附录E），复现指南非常充分。
- 论文中引用的开源项目：CosyVoice2（语音合成器）、UniVLA/Emu3（动作专家基础）、LLaMA-3.1-8B-Instruct（LLM骨干）、Whisper（用于数据过滤和评估）、Mamba（流式语音编码器）、FAST（动作tokenization）等。

📌 **核心摘要**

本文针对当前AI模型无法同时进行多模态感知与生成（如无法边听、边看、边说、边做）的局限，提出了首个全双工端到端多模态交互模型ELLSA。该模型的核心是创新的SA-MoE（自注意力混合专家）架构，它将不同模态（语音/文本、视觉/动作）路由到专门的专家模块，并通过统一的自注意力机制进行融合，在保留各专家预训练能力的同时实现了高效的跨模态理解。实验表明，ELLSA在标准的语音问答和机器人操作基准上达到了与专用模型相当的性能，并成功实现了多项前所未有的高级交互能力，如对话与动作的轮次预测、对缺陷指令的拒绝、边说边做（Speaking-while-acting）、基于上下文的视觉问答以及动作打断（Action barge-in）。例如，在LIBERO机器人操作基准上，ELLSA平均成功率达到89.4%，超过了所有对比的文本条件VLA模型。这标志着在构建更自然、更接近人类的交互智能体方面迈出了重要一步。主要局限是目前仅在仿真环境中进行了验证，且模型在并行处理多任务时性能会有所下降。

---

### 🥈 [Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-04-human-or-machine-a-preliminary-turing-test-for)

🔥 **8.5/10** | 前25% | #语音对话系统 | #模型评估 | #数据集 #多语言

👥 **作者与机构**

- 第一作者：Xiang Li（北京邮电大学网络与交换技术国家重点实验室、深圳大数据研究院、香港中文大学（深圳）、深圳_loop_area_institute）
- 通讯作者：Benyou Wang（香港中文大学（深圳））、Jiale Han（香港科技大学）
- 作者列表：Xiang Li（同上）、Jiabao Gao（香港中文大学（深圳）、深圳大数据研究院、深圳_loop_area_institute）、Sipei Lin（香港中文大学（深圳））、Xuan Zhou（香港中文大学（深圳））、Chi Zhang（香港中文大学（深圳））、Bo Cheng（北京邮电大学）、Jiale Han（香港科技大学）、Benyou Wang（香港中文大学（深圳））

#

💡 **毒舌点评**

论文开创性地将图灵测试范式系统性地应用于语音对话（S2S）系统评估，并首次通过大规模实验证明了当前所有顶级模型均未通过测试，其诊断框架清晰地指出了从“语义理解”到“副语言与情感表达”的瓶颈转移，极具启发性。然而，论文提出的可解释AI评委模型本质上是对现有大模型的微调应用，其核心贡献更侧重于评估方法论的构建和人类感知的深度分析，而非解决S2S系统本身的“非人”问题。

#

🔗 **开源详情**

- 代码：提供GitHub仓库链接：`https://github.com/Carbohydrate1001/Turing-Test`。
- 模型权重：论文中提及训练了可解释AI评委模型，并承诺在开源仓库中提供。
- 数据集：论文明确指出构建的对话数据集（人-机、人-人、伪人类）将公开。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了非常详细的附录，包括数据收集流程（B节）、图灵测试平台设计（C节）、细粒度标注指南与质量控制（D节）、AI评委的训练设置、超参数搜索空间、消融实验结果（E节），复现信息充分。
- 引用的开源项目：论文使用了多个开源模型（如Nari Dia-1.6B, Spark-TTS）和数据集（DailyDialog, IEMOCAP, MagicData等）用于数据构建和对比。

📌 **核心摘要**

本文旨在解决当前语音对话（S2S）系统是否具备“人类相似性”这一关键却悬而未决的问题。方法核心是首次针对S2S系统构建并实施图灵测试，并在此基础上建立了一套细粒度的诊断框架。与之前主要评估语音识别或文本生成智能的工作相比，本文的新颖之处在于：1) 聚焦于“人机交互中的整体人类相似性”这一更高阶目标；2) 提出了涵盖18个维度的评估体系，超越了二元通过/失败；3) 设计了一个可解释的AI评委模型。主要实验结果显示，所有9个参与评估的S2S模型成功率均远低于0.5的随机猜测阈值（最高仅约0.31），证实了当前技术的显著差距。细粒度分析表明，瓶颈并非语义理解（模型已接近人类水平），而在于副语言特征（如韵律、停顿）、情感表达和对话人格（如过度恭维）。本文的实际意义是为S2S系统的发展提供了明确的改进路线图和一套可自动化的评估工具。主要局限性在于，研究主要基于特定的录音场景和有限的对话主题，且提出的AI评委模型性能高度依赖其骨干模型（Qwen2.5-Omni）的表示能力。

#

---

### 🥉 [Speech World Model: Causal State–Action Planning with Explicit Reasoning for Speech](/audio-paper-digest-blog/posts/2026-05-04-speech-world-model-causal-stateaction-planning)

🔥 **8.0/10** | 前25% | #语音对话系统 | #多任务学习 | #语音情感识别 #语音大模型

👥 **作者与机构**

- 第一作者：Xuanru Zhou (浙江大学)
- 通讯作者：未说明
- 作者列表：Xuanru Zhou (Zhejiang University), Jiachen Lian (UC Berkeley), Henry Hong (UC Berkeley), Xinyi Yang (Zhejiang University), Gopala Anumanchipalli (UC Berkeley)

💡 **毒舌点评**

亮点：论文开创性地将认知科学中的模块化世界模型理念与因果图结合，为语音理解提供了可解释、模块化的推理框架，在情感识别等任务上展现出超越基线的强大能力。短板：框架依赖预定义的因果图和LLM生成的伪标签进行监督，其泛化性和标签定义的完备性有待更广泛的验证，且“超越商业模型”的结论可能受限于评测基准（如M.J. Score）的特异性。

🔗 **开源详情**

- 代码：论文承诺开源，提供仓库链接：https://github.com/eureka235/eureka235.github.io。
- 模型权重：论文中提及将开源模型，但未提供具体权重下载链接。
- 数据集：使用公开数据集（MELD, IEMOCAP, SLURP, VoxCeleb），并说明会提供生成的数据。
- Demo：论文图1提供了演示音频链接：http://bit.ly/4pBJuWP。
- 复现材料：论文附录（A.4-A.9）提供了极其详细的模型架构、超参数、训练设置、评估指标计算公式和实验配置，复现信息非常充分。
- 引用的开源项目：DistilBERT, WavLM, openSMILE, Vicuna-13b, Qwen2-Audio, Llama3.1-8B。

📌 **核心摘要**

1. 问题：当前的语音语言模型（SLM）在处理语音时，通常将其视为一个黑盒，导致在需要深层次推理（如理解意图、情绪、语境）的任务上表现薄弱，尤其在监督数据稀疏时。
2. 方法核心：提出Speech World Model（SWM），将语音理解分解为四个具有认知基础的模块：世界模型激活（WMA）、心智理论（ToM）、言语行为（SA）、语用意图（Prag）。这些模块通过一个预定义的因果有向无环图（DAG）连接，形成一个结构化的认知状态搜索空间。模型训练分为两阶段：首先训练因果图以推断各模块状态；然后将这些状态作为显式输入，指导经过指令微调的语言模型生成推理链和回复。
3. 创新点：与传统的端到端黑盒SLM或简单的链式思维（CoT）提示不同，SWM的核心创新在于引入了基于认知科学的模块化因子分解和显式的因果图结构，将语音理解转化为一个可解释的、受约束的动态过程，从而提升模型的推理能力和鲁棒性。
4. 主要实验结果：
    - 图训练效率：SWM的因果图在单张A6000 GPU上约2小时收敛，比随机图基线（约10.4小时）快约5倍。
    - 节点与因果效果：在完全监督和半监督设置下，SWM的因果图在节点分类准确率和因果效应指标（ACE, ICS）上均优于随机图基线（见表1）。半监督实验证明图能通过因果结构有效推断未标注模块。
    - 下游任务性能：在基于GPT-4o的模型-as-Judge评测中（表3），SWM模型在总体分数（Overall M.J. Score）上显著优于开源基线（如Qwen2-Audio, Voxtral），尤其在情感提及率（EM）和情感分类准确率（EA）上优势明显。例如，SWM（Llama3.1-8b）的EA为66.26%，而Qwen2-Audio-CoT仅为34.72%。
    - 成本对比：SWM整体训练成本远低于商业模型（如Gemini 2.5 Pro），例如因果图训练仅需20 GPU小时。

5. 实际意义：SWM为构建更可解释、推理能力更强的语音交互系统提供了一条新路径，其模块化和因果推理框架有助于降低幻觉，提升在复杂对话场景中的性能。
6. 主要局限性：1) 当前仅包含四个模块，可能无法覆盖所有语音动态；2) 因果图结构是预定义的，缺乏自适应性；3) 模型性能很大程度上依赖于LLM生成的标签质量，存在误差传播风险。

---

### 4. [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-04-can-speech-llms-think-while-listening)

🔥 **8.0/10** | 前25% | #语音对话系统 | #链式思维 | #语音大模型 #偏好学习

👥 **作者与机构**

- 第一作者：Yi-Jen Shih (The University of Texas at Austin, Meta Superintelligence Labs)
- 通讯作者：未说明
- 作者列表：Yi-Jen Shih (The University of Texas at Austin, Meta Superintelligence Labs)， Desh Raj (Meta Superintelligence Labs)， Chunyang Wu (Meta Superintelligence Labs)， Wei Zhou (Meta Superintelligence Labs)， SK Bong (Meta Superintelligence Labs)， Yashesh Gaur (Meta Superintelligence Labs)， Jay Mahadeokar (Meta Superintelligence Labs)， Ozlem Kalinli (Meta Superintelligence Labs)， Michael L. Seltzer (Meta Superintelligence Labs)

💡 **毒舌点评**

亮点：论文提出的“边听��想”（thinking while listening）范式极具启发性，它巧妙借鉴了人类认知机制，通过“问题完整性”度量让模型在接收不完整问题时就能开始推理，是提升语音交互实时性的关键一步。短板：该工作严重依赖一个高质量的流式ASR模块作为“拐杖”来驱动文本推理，如果脱离了这个强假设，模型自身的端到端推理能力是否足够稳健？此外，所有评估数据都是基于文本基准的语音化改写，缺乏真实、复杂声学场景下的原生语音推理测试，其普适性有待验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：研究基于公开的Moshi模型，但未提及是否公开本文微调后的模型权重。
- 数据集：训练数据源自公开的CoT-Collection（1.8M），并进行了改写。评估数据集SRQA由作者构建，但论文中未说明���否公开发布该基准。
- Demo：未提及。
- 复现材料：论文提供了相当详细的超参数（SFT和DPO的学习率、batch size、步数等）、训练硬件（8xA100）、数据处理细节（改写提示词、TTS流程）以及评估方法（LLM评判器提示词），复现信息较为充分。
- 论文中引用的开源项目：Moshi (语音大模型基座)、Mimi (音频编解码器)、Whisper (语音识别)、Pyannote (语音活动检测)、LLaMA-3.1-405B (LLM评判器)、CoT-Collection (训练数据集)。

📌 **核心摘要**

1.  要解决什么问题：当前的语音大模型（Speech LLMs）在复杂推理任务上表现不佳，且传统的“先听后想再答”模式会引入较大延迟，影响交互的自然性和实时性。
2.  方法核心是什么：本文提出在多流语音大模型（基于Moshi）中集成文本形式的链式思维（Chain-of-Thought, CoT），并通过微调让模型能够“边听边想”。其核心是引入了一个基于KL散度的“问题完整性”度量（ζ），用于动态判断用户问题何时包含了足够的信息以开始推理，从而让CoT的启动时机与用户问题的语义完成度同步。
3.  与已有方法相比新在哪里：a) 首次系统地将文本CoT应用于多流语音大模型，证明了其在语音推理任务上的有效性。b) 提出了基于语义的“问题完整性”度量，替代了启发式固定偏移或等待问题完全结束的做法，为控制准确率-延迟权衡提供了更精细的工具。c) 引入了基于DPO的偏好学习，通过正确性偏好数据改善早期推理的准确性，并通过长度偏好数据缩短CoT，进一步将延迟降低了70%而未损失准确率。
4.  主要实验结果如何：在构建的SRQA（语音推理问答）基准上，CoT微调使Moshi基线模型的平均准确率提升了2.4倍（绝对提升29.1%）。提出的“问题完整性”方法在同等延迟条件下，比固定字数偏移的基线在ARC-Easy任务上准确率提升4%。最终，通过长度偏好DPO训练，实现了平均延迟降低约30个令牌（约70%），同时保持或提升了准确率（详见表2，表4及图5）。
5.  实际意义是什么：这项工作为构建更智能、响应更及时的语音助手提供了重要技术路径。让模型能够像人一样在聆听过程中同步处理信息并进行推理，可以显著缩短用户等待响应的时间，提升语音交互的流畅度和用户体验。
6.  主要局限性是什么：模型在推理时仍然依赖一个外部的流式ASR模块（通过文本单通道实现）来转录用户语音，这增加了系统复杂性和对ASR性能的依赖。此外，评估任务均为基于文本基准的语音化改写，缺乏对自然对话中重叠语音、口音、噪音等真实挑战的测试。

---

### 5. [From Text to Talk: Audio-Language Model Needs Non-Autoregressive Joint Training](/audio-paper-digest-blog/posts/2026-05-04-from-text-to-talk-audio-language-model-needs-non)

🔥 **8.0/10** | 前25% | #语音对话系统 | #多模态模型 | #扩散模型 #大语言模型

👥 **作者与机构**

- 第一作者：Tianqiao Liu（广东智慧教育研究院暨南大学， TAL教育集团）
- 通讯作者：Xueyi Li（广东智慧教育研究院暨南大学）
- 作者列表：Tianqiao Liu（广东智慧教育研究院暨南大学， TAL教育集团）、Xueyi Li（广东智慧教育研究院暨南大学）、Hao Wang（北京大学）、Haoxuan Li（北京大学）、Zhichao Chen（北京大学）、Weiqi Luo（广东智慧教育研究院暨南大学）、Zitao Liu（广东智慧教育研究院暨南大学）

💡 **毒舌点评**

亮点：论文敏锐地指出了现有统一AR模型在处理文本和音频模态时忽略的依赖结构根本差异，并给出了一个理论上优雅（利用吸收离散扩散的任意阶AR性质）的混合架构解决方案，工程思路清晰。短板：虽然提出了新框架，但核心模块（如音频tokenizer/decoder）直接沿用GLM-4-Voice，创新主要在训练范式和架构集成上，本质上是“组合创新”，缺乏对底层音频生成机理的突破。此外，与GLM-4-Voice等9B模型对比时，3B的TtT在部分任务上仍有差距。

🔗 **开源详情**

- 代码：论文明确指出“我们的代码和数据公开可用”，并提供了GitHub仓库链接 `https://github.com/ai4ed/TtT`。
- 模型权重：论文中未明确提及是否已发布或计划发布预训练/微调后的模型权重。
- 数据集：训练所用的具体数据集（如表4所列）来源多样，部分为公开数据集（如AISHELL， LibriSpeech），部分为合成或构建数据。论文未提及这些构建数据（如使用TTS合成的对话数据）是否单独开源。
- Demo：论文中未提及在线演示链接。
- 复现材料：附录（A.6-A.9）提供了极其详尽的复现信息，包括：完整的训练数据集清单与规模、所有评估任务的详细协议与数据集划分、基线模型描述、训练超参数（优化器、学习率、batch size、调度策略、三个训练策略的具体概率）、硬件配置（4节点32张A100 GPU）、以及推理的具体设置（解码算法参数）。
- 论文中引用的开源项目：音频tokenizer和解码器沿用了GLM-4-Voice的实现；评估中使用了Whisper、Paraformer等ASR模型和Qwen3作为LLM-as-a-Judge。

📌 **核心摘要**

1.  要解决的问题：现有端到端音频-语言模型（如Moshi， GLM-4-Voice）普遍使用单一的自回归（AR）目标来生成文本和音频，忽略了文本生成强依赖于前序token（目标-目标依赖），而音频生成更依赖于输入文本（源-目标依赖）的根本差异，导致生成效率低且误差容易传播。
2.  方法核心：提出“Text-to-Talk (TtT)”框架，在单一Transformer中整合AR文本生成与基于吸收离散扩散的非自回归（NAR）音频生成。文本部分使用标准AR交叉熵损失训练，音频部分利用离散扩散（等效于任意阶AR目标）进行训练，两者通过统一的损失上界结合。同时设计了模态感知注意力机制和三种训练策略（BANOM, PPM, SST）来弥合训练与推理的差异。
3.  与已有方法的新颖之处：首次在统一模型中显式区分并针对不同模态的依赖特性采用不同的生成范式（文本用严格AR，音频用基于扩散的NAR），而非强制所有模态使用统一的AR目标。这从理论上（上界证明）和实践上提供了更优的建模选择。
4.  主要实验结果：在Audio-QA、ASR、AAC和URO-Bench（S2S对话）等多个基准测试上，TtT模型（1.5B和3B）显著优于纯AR和纯NAR基线。例如，在3B规模下，TtT-3B在AlpacaEval等Audio-QA任务上比Qwen2.5-3B (AR)高出3-25分；在ASR任务（如AISHELL-2）上WER降低约42点。其3B模型在部分任务上甚至能匹配或超越一些7B以上的模型（如SpeechGPT）。关键消融实验表明，三个训练策略（BANOM, PPM, SST）对性能均有贡献。
5.  实际意义：为构建更高效、自然、低延迟的端到端语音交互系统提供了新的架构范式，平衡了生成质量与推理速度，对实时语音助手等应用有直接价值。
6.  主要局限性：模型的整体性能仍受限于基础音频tokenizer/decoder（沿用现有设计）的质量；与更大规模（如9B）的SOTA模型（如GLM-4-Voice）相比仍存在差距；论文未探讨更复杂的对话场景（如超长多轮）下的表现。

---

### 6. [DrVoice: Parallel Speech-Text Voice Conversation Model via Dual-Resolution Speech Representations](/audio-paper-digest-blog/posts/2026-05-04-drvoice-parallel-speech-text-voice-conversation)

🔥 **8.0/10** | 前10% | #语音对话系统 | #端到端 | #语音大模型 #多模态模型

👥 **作者与机构**

-   第一作者：Chao-Hong Tan（阿里巴巴通义千问团队）
-   通讯作者：论文中未明确指定通讯作者，但提供了共同邮箱 `tanchaohong.ch, tanqing.cq, w.wang@alibaba-inc.com`。
-   作者列表：Chao-Hong Tan（阿里巴巴通义千问团队）， Qian Chen（阿里巴巴通义千问团队）， Wen Wang（阿里巴巴通义千问团队）， Chong Deng（阿里巴巴通义千问团队）， Qinglin Zhang（阿里巴巴通义千问团队）， Luyao Cheng（阿里巴巴通义千问团队）， Hai Yu（阿里巴巴通义千问团队）， Xin Zhang（阿里巴巴通义千问团队）， Xiang Lv（阿里巴巴通义千问团队）， Tianyu Zhao（阿里巴巴通义千问团队）， Chong Zhang（阿里巴巴通义千问团队）， Yukun Ma（阿里巴巴通义千问团队）， Yafeng Chen（阿里巴巴通义千问团队）， Hui Wang（阿里巴巴通义千问团队）， Jiaqing Liu（阿里巴巴通义千问团队）， Xiangang Li（阿里巴巴通义千问团队）， Jieping Ye（阿里巴巴通义千问团队）。

💡 **毒舌点评**

亮点：DrVoice通过巧妙的“双分辨率”设计（输入5Hz分组，输出25Hz细化），优雅地平衡了LLM处理语音的效率与生成质量，在多项评测中取得SOTA，是端到端语音大模型从“能用”到“好用”的一次扎实推进。
短板：性能高度依赖强大的基础组件（如CosyVoice作为语音分词/解词器，Whisper作为音频编码器），模型的核心创新更侧重于“整合与优化”而非“从零构建”，其核心的SRH预训练和Core-Cocktail策略在细节上仍有些“黑箱”色彩。

🔗 **开源详情**

-   代码：论文明确承诺开源，代码仓库链接在论文首页提供（`https://github.com/FunAudioLLM/Fun-Audio-Chat`），但PDF预览中链接不完整。根据文本，代码将包含模型、训练和评估脚本。
-   模型权重：论文明确承诺开源基于增强基础模型的DRVOICE模型检查点（checkpoint）。
-   数据集：论文未说明将开源训练数据集。但提到训练数据使用了公开的CosyVoice模型合成，并提供了相关脚本（待开源后）。
-   Demo：论文中未提及在线演示。
-   复现材料：提供了极其详尽的复现信息，包括：完整的架构描述、训练策略（Core-Cocktail， CoM-Mixing）、超参数（学习率、批大小、序列长度、分组因子等）、硬件配置、训练时长、以及各种交互模式的系统提示词（附录B）。还承诺将发布所有预训练模型检查点。
-   论文中引用的开源项目：Whisper（语音编码器）、CosyVoice（语音分词/解词器，S3Tokenizer和HiFi-GAN）、Qwen2.5（基础LLM）、DeepSpeed ZeRO-2（训练优化）。
-   开源计划：论文中明确表示所有源代码和模型检查点将在论文发表后公开。

📌 **核心摘要**

1.  要解决什么问题：现有端到端语音对话模型在并行生成语音和文本时，存在语音与文本令牌率严重不匹配（如12.5Hz vs. ~3Hz）的问题，导致LLM难以有效利用文本信息，且计算成本高昂。
2.  方法核心是什么：提出DrVoice，一个基于并行语音-文本生成的对话模型。其核心创新是双分辨率语音表示（DRSR）：在输入端，通过分组机制将25Hz的语音令牌压缩为5Hz送入LLM，缓解帧率差异；在输出端，使用一个独立的语音精炼头（SRH）从LLM的隐藏状态中以25Hz的帧率自回归生成细致的语音令牌。同时，引入了Chain-of-Modality（CoM）策略和Core-Cocktail训练策略来优化训练过程。
3.  与已有方法相比新在哪里：相比于Kimi-Audio等采用12.5Hz表示的模型，DrVoice将LLM的输入/输出帧率降至5Hz，大幅降低了计算成本（训练GPU时间减少近50%），同时通过SRH保证了语音生成质量。它避免了单纯降低帧率导致的生成质量下降问题。
4.  主要实验结果如何：DrVoice-7B在四大主流语音基准测试中均达到了新的SOTA。具体如下：
    | 基准测试 (类型) | DrVoice-7B 得分 | 最强基线得分 |
    | :--- | :--- | :--- |
    | OpenAudioBench (语音理解) | 72.04 | Kimi-Audio: 69.08 |
    | VoiceBench (语音助手) | 80.17 | Kimi-Audio: 76.93 |
    | UltraEval-Audio (语音理解与生成) | 56.66 | Qwen2.5-Omni: 50.46 |
    | Big Bench Audio (推理与理解) | 74.0 | Kimi-Audio: 55.2 |
    此外，在语音质量上，DrVoice的UTMOS（4.29）与最优模型相当，ASR-WER（8.36）表现良好。
5.  实际意义是什么：证明了通过精心设计的架构和训练策略，可以在显著降低计算开销的同时，构建性能领先、开源的语音基础模型，推动了端到端语音交互技术的发展和应用。
6.  主要局限性是什么：论文未明确说明，但可以推断：1) 模型性能依赖于高质量的语音分词/解词器和文本LLM基座；2) 训练依赖大量合成语音数据；3) 当前模型为半双工，未实现真正的全双工交互；4) 在极端情况下（如ASR-WER）的语音生成对齐精度仍有提升空间。

---

### 7. [ParaS2S: Benchmarking and Aligning Spoken Language Models for Paralinguistic-aware Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-04-paras2s-benchmarking-and-aligning-spoken-language)

✅ **7.5/10** | 前25% | #语音对话系统 | #强化学习 | #基准测试 #模型评估

👥 **作者与机构**

- 第一作者：Shu-wen Yang（National Taiwan University）
- 通讯作者：Ming Tu (leo19941227@gmail.com, bytedance.com), Lu Lu (lulu.0314@bytedance.com)
- 作者列表：Shu-wen Yang（National Taiwan University）， Ming Tu（ByteDance Seed）， Andy T. Liu（ByteDance Seed）， Xinghua Qu（ByteDance Seed）， Hung-yi Lee（National Taiwan University）， Lu Lu（ByteDance Seed）， Yuxuan Wang（ByteDance Seed）， Yonghui Wu（ByteDance Seed）

#

💡 **毒舌点评**

这篇论文的亮点在于其系统性：它不仅指出了S2S模型“不懂情绪”的痛点，还提供了一套从“出考题”（新基准）到“改卷子”（自动评判）再到“训练模型”（RL框架）的完整解决方案，思路非常清晰。然而，其软肋在于“考题”本身很大程度上依赖合成语音，虽然经过了多层过滤，但合成语音与真实人类情感表达的“鸿沟”可能仍被低估，这或许会影响基准的终极可信度。

#

🔗 **开源详情**

- 代码：论文承诺将开源代码，项目主页为 https://paras2sbench.github.io/，但论文中未直接提供代码仓库链接。
- 模型权重：论文提到将开源模型，但未说明具体是哪些模型（推测包括热身、RL后的S2S模型及奖励模型）。
- 数据集：承诺开源ParaS2SBench测试集及用于训练的合成/筛选数据，论文中给出了详细的构建流程和统计数据（表6）。
- Demo：项目主页可能包含演示，论文中未明确提及在线Demo链接。
- 复现材料：提供了极为详尽的附录，包括所有数据生成、评判和训练的prompt模板（A.8节）、评判指南（A.8.5）、完整的实验设置（超参数、硬件）和消融实验细节，复现信息非常充分。
- 论文中引用的开源项目：Whisper-V3， AudioReasoner， Qwen2.5-Omni， Kimi-Audio， LoRA， FSDP， GRPO， Emotion2vec， YourTTS， CosyVoice， Sesame， gpt-4o-mini-tts等。

📌 **核心摘要**

1. 要解决什么问题：现有的语音到语音（S2S）对话模型无法根据用户语音中的副语言线索（如情感、语调、性别、年龄）调整回应的内容和风格，表现出“tone-deaf”（不敏感）的问题，严重限制了对话的自然度和共情能力。
2. 方法核心是什么：提出ParaS2S框架，包含：a) ParaS2SBench基准：采用“对比风格”和“场景控制”的设计来测试模型是否真正“听”语音而非仅依赖文本内容。b) ParaS2SAlign训练框架：利用一个基于解耦分析（PolyTone训练）的多阶段自动评判器提供奖励信号，通过强化学习（GRPO算法）来微调S2S模型，使其学会生成风格合适的回应。
3. 与已有方法相比新在哪里：首次提出针对S2S模型副语言感知能力的端到端波形级基准。首次提出通过解耦内容与风格分析来构建一个可扩展、能与人类偏好高度相关的自动评判器。首次证明RL方法（而非纯SFT）在训练此类模型时更数据高效，且能有效缓解对昂贵、稀少的配对示范数据的依赖。
4. 主要实验结果如何：a) 评判器有效性：其多阶段自动评判器与人类评分的平均皮尔逊相关性达0.776，显著优于端到端的Audio LLM（0.618）。b) 模型性能：基于Kimi-Audio的GRPO模型在ParaS2SBench上相比SFT基线实现10%以上的相对提升，在合成和真实语音测试集上平均分达到4.382（满分5），超越所有现有开源和闭源模型。c) 数据效率：仅需10小时示范数据进行热身的RL训练，性能即可匹配使用50小时数据进行纯SFT训练的模型。
5. 实际意义是什么：为发展更自然、更有同理心的语音交互AI提供了关键的评估工具和高效的训练范式，推动了语音对话模型从“听懂话”向“听懂情绪”的进化。
6. 主要局限性是什么：基准中的“控制场景”高度依赖合成语音，其自然度和多样性可能无法完全覆盖真实世界复杂的情感表达。自动评判器虽好，但其本身也依赖一系列组件，存在误差传播风险，且对更细粒度的风格（如讽刺）判断仍有提升空间。

---

### 8. [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-04-towards-true-speech-to-speech-models-without-text)

✅ **7.5/10** | 前25% | #语音对话系统 | #预训练 | #语音大模型 #多语言

👥 **作者与机构**

-   第一作者：邢剑潇（复旦大学），论文中注明与第二作者Zhe Xu同等贡献（∗Equal contribution）
-   通讯作者：邱锡鹏（Xipeng Qiu）（复旦大学）
-   作者列表：
    -   邢剑潇（复旦大学， MOSI.AI）
    -   徐哲（复旦大学， 上海创新研究院， MOSI.AI）
    -   金洛之洁（复旦大学， 上海创新研究院， MOSI.AI）
    -   王洋（复旦大学， MOSI.AI）
    -   陈翰夫（复旦大学， MOSI.AI）
    -   蒋尧州（复旦大学， MOSI.AI）
    -   陈科（复旦大学， 上海创新研究院， MOSI.AI）
    -   李瑞晓（复旦大学， 上海创新研究院， MOSI.AI）
    -   陈明姝（复旦大学， MOSI.AI）
    -   王瑞明（复旦大学， MOSI.AI）
    -   张文博（复旦大学， 上海创新研究院， MOSI.AI）
    -   程清源（复旦大学， MOSI.AI）
    -   费昭烨（复旦大学， MOSI.AI）
    -   李世民（复旦大学）
    -   邱锡鹏（复旦大学， 上海创新研究院， MOSI.AI）

#

💡 **毒舌点评**

这篇工作巧妙利用了Transformer内部不同层对跨模态信息处理能力的差异，像搭积木一样设计出了一个“底层共享、顶层专精”的语音大模型，在端到端生成上确实比依赖文本中间件的前辈们更“纯正”。不过，其最核心的“模态分层”启发自对单个预训练模型的层间分析，这种设计是否具有普适性，还是对特定预训练模型（如Qwen3-8B）的定制优化，论文并未深究；另外，虽然号称“True Speech-to-Speech”，但其生成的语音在自然度上仍逊色于GLM-4-Voice等文本指导模型，证明完全抛弃文本“拐杖”这条路仍然道阻且长。

#

🔗 **开源详情**

-   代码：论文中明确表示“We will release our code and models to support further research”，但未提供具体代码仓库链接。
-   模型权重：同上，承诺发布，但未提供下载链接或平台信息。
-   数据集：预训练数据为互联网收集和合成数据，未公开。SFT数据基于多个开源数据集合成，具体处理后的版本是否公开未说明。
-   Demo：论文中未提及在线演示。
-   复现材料：论文中提供了非常详细的训练数据构造流程、超参数设置（学习率、batch size等）、模型架构细节和消融实验配置，为复现提供了较好的文本基础。
-   论文中引用的开源项目：Qwen3-8B、pyannote、CosyVoice 2、GLM-4-Voice Tokenizer、Seed-TTS、MOSS-TTSD、SenseVoice-Small ASR、WavLM-TDNN、whisper-large-v3、paraformer-zh等。

📌 **核心摘要**

1.  问题：现有的语音对话系统要么依赖级联管道（ASR-LLM-TTS）丢失副语言信息，要么采用文本指导的端到端方法，仍受中间文本表示限制，导致延迟和表达力不足。
2.  方法核心：提出一种“模态分层”架构，基于对预训练LLM内部跨模态相似性变化的分析，在Transformer骨干的第32层进行分支，共享层用于文本-语音融合，模态特异层用于分别生成文本和语音token。同时采用“冻结预训练”策略，分两阶段训练：先冻结文本骨干训练语音组件，再联合微调。
3.  创新点：不同于将语音token直接加入文本词表或使用并行生成，本文方法从架构设计上解耦了模态共享处理与模态特异性生成，更系统地继承了预训练文本LLM的知识。通过合成数据构建了大规模中英双语监督微调数据集。
4.  主要结果：
    -   预训练模型在StoryCloze等语音建模任务上达到SOTA，且在MMLU等文本任务上性能退化极小（仅从76.6降至67.19）。
    -   SFT后，在LlamaQA等口语问答任务中，直接生成（S->S）的准确率接近甚至超过使用文本指导（S->T）的GLM-4-Voice（例如WebQA上45.90 vs 39.22）。
    -   生成语音的客观质量（UTMOS 4.37）优于GLM-4-Voice（4.25），但在非语言行为生成的主观评估中，本模型（Ours）在静默、语气词和回复风格上均大幅领先于包括GLM-4-Voice、Kimi-Audio在内的多个强基线（如表8所示，静默得分4.17 vs 2.73）。
5.  实际意义：展示了构建无需文本中间环节的、具备竞争力的端到端语音大模型的可行性，为未来自然、高效、富有表现力的语音交互奠定了基础。
6.  主要局限性：生成的语音在客观听感指标（如DNSMOS）上与顶尖TTS系统相比无显著优势；“模态分层”策略的有效性可能依赖于底层预训练模型的特性；完全不依赖文本是否是通向更高性能的必经之路，仍需更多探索。

#

---

### 9. [STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models](/audio-paper-digest-blog/posts/2026-05-04-stitch-simultaneous-thinking-and-talking-with)

✅ **7.0/10** | 前25% | #语音对话系统 | #自回归模型 | #语音大模型 #流式处理

👥 **作者与机构**

- 第一作者：Cheng-Han Chiang（台湾大学 电子工程系）
- 通讯作者：Xiaofei Wang（Microsoft GenAI）
- 作者列表：Cheng-Han Chiang（台湾大学电子工程系）、Xiaofei Wang（Microsoft GenAI）、Linjie Li（Microsoft GenAI）、Chung-Ching Lin（Microsoft GenAI）、Kevin Lin（Microsoft GenAI）、Shujie Liu（Microsoft GenAI）、Zhendong Wang（Microsoft GenAI）、Zhengyuan Yang（Microsoft GenAI）、Hung-yi Lee（台湾大学）、Lijuan Wang（Microsoft GenAI）

💡 **毒舌点评**

亮点在于巧妙利用语音解码生成的“空闲时间”进行内部推理，STITCH-S版本实现了“推理增强但不增加首包延迟”的理想效果，在数学QA任务上带来了显著的性能提升（平均约15%）。短板则是其核心思想（交错生成）相对直观，且实验主要验证在数学推理任务上，对于更复杂的开放式对话或长程规划任务的泛化能力未得到充分探讨，理论贡献有进一步深化的空间。

🔗 **开源详情**

- 代码：论文中未提及代码开源链接。仅提供了项目演示页面链接：https://d223302.github.io/STITCH。
- 模型权重：未提及是否公开微调后的模型权重。
- 数据集：未提及是否开源构建的训练集。但论文提供了数据集构建方法和原始数据集下载链接（表3）。
- Demo：提供了项目主页链接用于展示动画和演示。
- 复现材料：附录中提供了极其详细的训练超参数、配置文件、数据集统计、评估脚本（使用Kimi-Audio-Evalkit）以及失败尝试的讨论，复现友好度高。
- 论文中引用的开源项目：GLM-4-Voice（基础模型），LlamaFactory（微调框架），vLLM（推理加速），CosyVoice（语音解码器），Whisper（转录基线），GPT-4o/4o-mini-TTS（数据合成与评估），OpenAudioBench（评估基准）。

📌 **核心摘要**

1. 问题：当前的语音语言模型（SLM）无法像人类一样在说话前进行内部、无声的复杂推理。直接生成完整的思维链（CoT）再说话会引入不可控的延迟。
2. 方法核心：提出STITCH框架，交替生成未发声的推理文本块和可发声的语音响应块。核心思想是，利用合成并播放一段语音音频所需的时长（tchunk），在此期间生成下一段推理和语音令牌，从而实现“边思考边说话”。
3. 创新点：与先前需要完整推理或不能推理的SLM相比，STITCH首次将无声推理过程引入语音模型，并设计了STITCH-R（推理先行）和STITCH-S（响应先行）两种变体。其中，STITCH-S的首包延迟与无推理基线完全相同。
4. 主要实验结果：在五个数学推理QA数据集上，STITCH系列方法相比无推理基线（GLM-4-Voice）平均准确率提升超过15%（例如STITCH-S: 78.04% vs. No reasoning: 62.98%）。在非推理数据集上性能与基线相当或略有提升。人类评估表明STITCH-S的响应速度感知优于STITCH-R和TBS。
5. 实际意义：为实时、高质量的语音交互提供了新方案，尤其适用于需要复杂推理的语音问答场景（如语音助手解数学题），同时保持了用户可接受的响应延迟。
6. 主要局限性：研究主要验证于数学推理任务，在其他需要深度推理或长程规划的语音任务上的有效性有待进一步证明；推理能力严重依赖于基础模型（GLM-4-Voice）的文本推理能力。

关键数据对比表（数学推理QA，平均准确率）
| 模型/方法 | Latency（首包令牌数） | 是否使用推理（训练/推理） | 平均准确率（%） |
| :--- | :--- | :--- | :--- |
| GLM-4-Voice | Ntext+Nspeech | - / ✘ | 53.08 |
| No reasoning | Ntext+Nspeech | ✘ / ✘ | 62.98 |
| TBS | Nfull+Ntext+Nspeech | ✔ / ✔ | 79.12 |
| STITCH-R | Nreason+Ntext+Nspeech | ✔ / ✔ | 78.70 |
| STITCH-S | Ntext+Nspeech | ✔ / ✔ | 78.04 |

---

