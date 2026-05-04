---
title: "ICLR 2026 - 语音对话系统 论文列表"
date: 2026-05-04
draft: false
tags: ["语音对话系统"]
categories: [iclr-2026]
description: "共 8 篇 ICLR 2026 语音对话系统 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音对话系统

共 **8** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DrVoice: Parallel Speech-Text Voice Conversation Model via D](/audio-paper-digest-blog/posts/2026-05-04-drvoice-parallel-speech-text-voice-conversation) | 9.5分 | 前10% |
| 🥈 | [STITCH: Simultaneous Thinking and Talking with Chunked Reaso](/audio-paper-digest-blog/posts/2026-05-04-stitch-simultaneous-thinking-and-talking-with) | 8.5分 | 前25% |
| 🥉 | [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-04-end-to-end-listen-look-speak-and-act) | 8.5分 | 前25% |
| 4. | [From Text to Talk: Audio-Language Model Needs Non-Autoregres](/audio-paper-digest-blog/posts/2026-05-04-from-text-to-talk-audio-language-model-needs-non) | 8.5分 | 前25% |
| 5. | [ParaS2S: Benchmarking and Aligning Spoken Language Models fo](/audio-paper-digest-blog/posts/2026-05-04-paras2s-benchmarking-and-aligning-spoken-language) | 8.0分 | 前25% |
| 6. | [Human or Machine? A Preliminary Turing Test for Speech-to-Sp](/audio-paper-digest-blog/posts/2026-05-04-human-or-machine-a-preliminary-turing-test-for) | 7.5分 | 前25% |
| 7. | [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-04-can-speech-llms-think-while-listening) | 7.5分 | 前25% |
| 8. | [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-04-towards-true-speech-to-speech-models-without-text) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [DrVoice: Parallel Speech-Text Voice Conversation Model via Dual-Resolution Speech Representations](/audio-paper-digest-blog/posts/2026-05-04-drvoice-parallel-speech-text-voice-conversation)

🔥 **9.5/10** | 前10% | #语音对话系统 | #自回归模型 | #多模态模型 #语音合成

👥 **作者与机构**

- 第一作者：Chao-Hong Tan (Tongyi Fun Team, Alibaba Group)
- 通讯作者：未明确说明，根据邮箱推测为团队负责人（如tanchaohong.ch@alibaba-inc.com）
- 作者列表：Chao-Hong Tan, Qian Chen, Wen Wang, Chong Deng, Qinglin Zhang, Luyao Cheng, Hai Yu, Xin Zhang, Xiang Lv, Tianyu Zhao, Chong Zhang, Yukun Ma, Yafeng Chen, Hui Wang, Jiaqing Liu, Xiangang Li, Jieping Ye (所属机构均为 Tongyi Fun Team, Alibaba Group)

💡 **毒舌点评**

亮点：DrVoice的“双分辨率”设计堪称点睛之笔，通过一个简洁的分组/解分组机制，巧妙平衡了语音处理的计算效率（输入降至5Hz）与生成保真度（SRH在25Hz下精细化生成），在降低近半训练开销的同时性能不降反升，工程落地潜力巨大。
短板：论文专注于单向语音生成的对话模式，但真实的人机语音交互需要全双工能力（即能边听边说），作者在局限性中也承认了这一点。目前模型更像一个强大的“单口相声”演员，而非能自然打断和回应的真正对话伙伴。

🔗 **开源详情**

- 代码：论文明确承诺将在发表后开源所有源代码、训练和评估脚本。代码仓库链接：https://github.com/FunAudioLLM/Fun-Audio-Chat
- 模型权重：论文明确承诺将开源基于增强基础模型的预训练模型检查点。
- 数据集：合成语音数据基于公开的CosyVoice模型，论文承诺提供复现数据集的脚本和说明。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了极其详尽的实施细节（附录A），包括模型初始化、学习率调度、优化器、硬件配置、训练时长等。
- 论文中引用的开源项目：Whisper-Large-v3（语音编码器）、CosyVoice/S3Tokenizer（语音分词/解码）、Qwen2.5（基础LLM）、HiFi-GAN（声码器）。

📌 **核心摘要**

1. 解决的问题：现有端到端语音对话模型面临两大挑战：一是语音token（通常12.5Hz或更高）与文本token（约3Hz）的帧率严重不匹配，导致LLM难以同时高效处理两种模态；二是联合生成过程中，语音生成易干扰LLM原有的文本能力。
2. 方法核心：提出DrVoice，一个基于联合自回归建模的并行语音-文本对话模型。其核心创新是双分辨率语音表示（DRSR）：在输入理解阶段，将25Hz的离散语音token通过分组机制（grouping）压缩为5Hz表示送入LLM；在输出生成阶段，通过语音精炼头（SRH） 将LLM隐藏状态解分组（ungrouping）并自回归生成25Hz的原始语音token。此外，引入了链式模态（CoM） 训练策略和核心鸡尾酒（Core-Cocktail） 两阶段训练策略。
3. 与已有的不同：与Kim-Audio（12.5Hz）等模型相比，DrVoice将LLM处理的帧率降至5Hz，大幅减少了计算成本（训练GPU小时减少近50%），同时通过SRH机制保证了高质量的语音生成，有效缓解了模态间频率差异。
4. 主要实验结果：DrVoice-7B在多个主要基准上取得SOTA。具体结果见下表：

| 基准测试 | 任务类型 | DrVoice | 最强对比基线 (模型) | DrVoice优势 |
| :--- | :--- | :--- | :--- | :--- |
| OpenAudioBench | S→T (音频理解) | 72.04 | 69.08 (Kimi-Audio) | +2.96 |
| VoiceBench | S→T (语音助手) | 80.17 | 76.93 (Kimi-Audio) | +3.24 |
| UltraEval-Audio | S→S (语音对话) | 56.66 | 50.46 (Qwen2.5-Omni) | +6.20 |
| Big Bench Audio | S→T & S→S | 74.0 | 55.8 (MiniCPM-o 2.6) | +18.2 |

5. 实际意义：DrVoice为构建高效、高质量的开源语音对话基础模型提供了新范式。其低帧率设计意味着更低的推理延迟和资源消耗，使得在实际设备或大规模部署中应用复杂的语音对话模型成为可能。
6. 主要局限性：模型目前不支持全双工交互（即无法处理用户在模型生成语音时的输入）。此外，语音生成的质量（ASR-WER）虽佳，但与Qwen2.5-Omni等专门优化过的模型相比仍有提升空间。

---

### 🥈 [STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models](/audio-paper-digest-blog/posts/2026-05-04-stitch-simultaneous-thinking-and-talking-with)

🔥 **8.5/10** | 前25% | #语音对话系统 | #流式处理 | #自回归模型 #语音大模型

👥 **作者与机构**

- 第一作者：Cheng-Han Chiang（National Taiwan University， Microsoft GenAI）
- 通讯作者：Xiaofei Wang（Microsoft）
- 作者列表：Cheng-Han Chiang（National Taiwan University, Microsoft）， Xiaofei Wang（Microsoft）， Linjie Li（Microsoft）， Chung-Ching Lin（Microsoft）， Kevin Lin（Microsoft）， Shujie Liu（Microsoft）， Zhendong Wang（Microsoft）， Zhengyuan Yang（Microsoft）， Hung-yi Lee（National Taiwan University）， Lijuan Wang（Microsoft）

#

💡 **毒舌点评**

亮点在于将人类“边想边说”的模式形式化为一个可计算的交错生成框架，并在几乎不增加首包延迟的前提下显著提升了数学推理任务的准确率，堪称“偷时间”的艺术。短板在于对生成的“思考链”本身的质量和可靠性缺乏更深入的分析，且实验场景集中于英文数学题，对更复杂对话场景的泛化能力有待验证。

#

🔗 **开源详情**

- 代码：论文提供了项目主页链接 `https://d223302.github.io/STITCH`，但未明确说明完整代码库的开源链接。论文中提到使用LlamaFactory进行微调。
- 模型权重：未提及公开发布微调后的STITCH模型权重。
- 数据集：论文中用于微调和测试的部分数据集（如语音数学数据）已发布在Hugging Face (`https://huggingface.co/datasets/dcml0714/speech_math`)，但完整的训练数据集（约40万条）未整体公开，需按论文描述的步骤从原始数据集构建。
- Demo：项目主页包含动画和演示。
- 复现材料：附录中提供了详细的训练YAML配置、数据构造prompt、评估脚本等，复现细节较为透明。
- 引用的开源项目：LlamaFactory (LlamaFactory)， GLM-4-Voice (THUDM/glm-4-voice-9b)， Cosyvoice (语音解码器)， Whisper (用于转写评估)， Kimi-Audio-Evalkit (OpenAudioBench评估)。

📌 **核心摘要**

这篇论文旨在解决当前语音语言模型（SLM）缺乏内部推理能力的问题。人类在说话前通常会进行内部思考，而现有SLM直接生成回答。作者提出了STITCH方法，通过交替生成不发声的推理token块和可发声的文本-语音token块，实现了SLM的“同时思考和说话”。其核心创新在于利用语音解码器播放一个音频块（tchunk秒）所需的时间，远长于模型生成该块对应token所需的时间（ttoken秒），因此模型可以利用播放时的“空闲时间”生成下一个推理块，从而将推理延迟隐藏在语音播放过程中。与传统方法“先完整推理再说话”相比，STITCH显著降低了延迟；与不推理的基线相比，在五个数学推理数据集上准确率平均提升超过15%，同时在非推理任务上性能相当。例如，在GSM8K数据集上，STITCH-S的准确率（56.72%）远高于无推理基线（35.73%）。其实际意义在于为构建更智能、响应更及时的语音对话系统提供了新思路。主要局限性是推理链的质量和完整性依赖于训练数据构造，且当前实验环境相对单一。

---

### 🥉 [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-04-end-to-end-listen-look-speak-and-act)

🔥 **8.5/10** | 前25% | #语音对话系统 | #端到端 | #多模态模型 #大语言模型

👥 **作者与机构**

- 第一作者：Siyin Wang (清华大学)， Wenyi Yu (清华大学) [论文中注明两人贡献相等]
- 通讯作者：Chao Zhang (清华大学)
- 作者列表：Siyin Wang (清华大学)， Wenyi Yu (清华大学)， Xianzhao Chen (字节跳动)， Xiaohai Tian (字节跳动)， Jun Zhang (字节跳动)， Lu Lu (字节跳动)， Yuxuan Wang (字节跳动)， Chao Zhang (清华大学)

💡 **毒舌点评**

这篇论文的亮点在于其清晰的架构设计（SA-MoE）和全面的任务验证，成功地将“说”和“做”这两个通常分离的能力整合到了一个全双工框架中，向类人交互迈出了扎实的一步。但短板也同样明显：目前所有验证都停留在模拟环境（LIBERO, CALVIN），缺乏真实世界复杂场景的考验，且“同时说话和操作”时性能出现可感知的下降，暴露出当前模型在处理真正高强度并发多任务时仍显吃力。

🔗 **开源详情**

- 代码：论文明确承诺将在GitHub (https://github.com/bytedance/SALMONN) 上开源所有代码。
- 模型权重：论文明确承诺将开源模型检查点（checkpoints）。
- 数据集：论文明确承诺将开源数据，并在附录中详细列出了训练所用的所有公开数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其充分的复现材料，包括：详细的模型架构图与规格（Section 3， Appendix A），三阶段训练策略与具体超参数（Section 3.3， Appendix B），完整的训练数据集列表与处理方式（Appendix B），评估基准、指标和详细结果（Section 4， Appendix C），以及所有高级任务的具体设计、示例和Prompt模板（Appendix D， E）。
- 论文中引用的开源项目：LLaMA-3.1-8B-Instruct， Emu3（及其VisionTokenizer）， UniVLA， CosyVoice2-0.5B， Mamba， FAST action tokenizer， Whisper（用于ASR过滤和评估）， Gemini-2.5-Pro（用于数据生成和评估）。

📌 **核心摘要**

本文旨在解决当前AI模型在类人多模态交互方面的根本缺陷：要么是只能“听、看、说”但不能“做”的对话模型，要么是只能根据文本指令“做”但不能自然语音交互的VLA模型。核心方法是提出了ELLSA模型，其核心是SA-MoE（自注意力混合专家）架构，通过将处理语音/文本的“语音专家”和处理视觉/动作的“动作专家”通过统一的自注意力机制连接起来，实现了在单一架构中同时进行多模态感知和并发生成。与现有方法相比，ELLSA是首个支持全双工、流式、多输入多输出（MIMO）的端到端模型，能够实现诸如“边说边做”、基于上下文的视觉问答、拒绝错误指令和动作被打断等前所未有的交互行为。实验表明，ELLSA在语音交互（如TriviaQA S2T准确率45.2%）和机器人操作（LIBERO平均成功率89.4%）等基础任务上匹配或超越了专用基线模型，并在高级交互任务上取得了高成功率（例如，在执行动作时处理中断指令的成功率达94.3%-100%）。该工作的实际意义在于验证了统一全双工多模态交互模型的可行性，为构建更自然、通用的交互式智能体提供了新范式。主要局限性在于尚未在真实物理世界中进行验证，且在同时执行多任务（边说边做）时性能会有所下降。

---

### 4. [From Text to Talk: Audio-Language Model Needs Non-Autoregressive Joint Training](/audio-paper-digest-blog/posts/2026-05-04-from-text-to-talk-audio-language-model-needs-non)

🔥 **8.5/10** | 前25% | #语音对话系统 | #扩散模型 | #端到端 #多模态模型

👥 **作者与机构**

- 第一作者：Tianqiao Liu（好未来教育集团 TAL Education Group，暨南大学 Guangdong Institute of Smart Education）
- 通讯作者：Xueyi Li（暨南大学 Guangdong Institute of Smart Education）
- 作者列表：Tianqiao Liu（好未来教育集团，暨南大学）、Xueyi Li（暨南大学）、Hao Wang（北京大学）、Haoxuan Li（北京大学）、Zhichao Chen（北京大学）、Weiqi Luo（暨南大学）、Zitao Liu（暨南大学）

💡 **毒舌点评**

论文对端到端语音模型中文本与音频生成范式错配问题的洞察一针见血，并给出了一个理论上优雅、实验上有效的混合训练框架，是当前S2S建模思路的一次重要升级。但论文对模型推理时块级扩散的计算开销分析着墨不多，且训练数据依赖大量合成语音（如CosyVoice2生成），其在真实复杂声学环境下的泛化能力仍是潜在挑战。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：`https://github.com/ai4ed/TtT`。
- 模型权重：论文中未提及预训练模型权重（如Pretrain+TtT的检查点）的公开下载链接。
- 数据集：论文中使用的训练数据大多为公开数据集（如AISHELL, LibriSpeech, VoiceAssistant-400K等），但具体的数据处理脚本和混合配方未完全开源。评估数据集如URO-Bench、Audio-QA集等为公开基准。
- Demo：论文中未提及提供在线演示（Demo）。
- 复现材料：论文提供了极其详细的训练细节（超参数、优化器设置、训练策略概率）、模型配置（基于Qwen2.5）、以及架构和注意力机制的示意图（图2, 3），并附有详尽的附录。这些构成了坚实的复现基础。
- 引用的开源项目：论文依赖并引用了多个开源项目作为基础组件，主要包括：
    - 音频分词器/解码器：GLM-4-Voice (Zeng et al., 2024)。
    - 主干LLM：Qwen2.5系列。
    - ASR评估工具：Whisper (Radford et al., 2023)、Paraformer。
    - TTS数据生成：CosyVoice2。
    - 训练框架：DeepSpeed。
- 论文中提及的开源计划：论文中未提及额外的开源计划（如未来发布模型权重或扩展数据）。

📌 **核心摘要**

本文针对现有端到端语音到语音（S2S）模型用统一自回归（AR）方法建模文本和音频所存在的范式错配问题，提出了“Text-to-Talk”（TtT）框架。核心问题在于，文本生成是强序列依赖的（目标-目标依赖），而音频生成更依赖输入源（源-目标依赖），强行用AR约束音频会引入不必要的误差传播。方法核心是设计一个混合生成框架，在同一个Transformer中，对文本使用标准AR建模，对音频段使用吸收离散扩散（一种NAR范式）建模，并证明了这种联合训练目标是目标联合分布的上界。与已有方法相比，新在两点：1）首次识别并形式化了文本与音频在依赖结构上的不对称性；2）提出了一个统一的架构和训练框架来适配这种不对称性，而非强行统一生成范式。主要实验结果显示，TtT在Audio-QA、ASR、AAC和URO-Bench等多个基准上，一致超越了纯AR和纯NAR的基线模型。例如，在3B参数规模下，TtT在多个ASR数据集上的WER大幅优于Qwen2.5-3B (AR)，在Audio-QA任务上也显著提升。实际意义在于，为构建更自然、高效、符合生成特性的端到端语音交互系统提供了新思路。主要局限性包括：1）块级扩散推理的效率需要进一步评估；2）模型性能对大规模多模态预训练数据（约200B tokens）有一定依赖；3）尽管在轻量级模型中表现优异，但与某些超大参数量模型（如GLM-4-Voice）在综合基准上仍有差距。

关键实验结果表格（摘录）：

| 模型 | 参数量 | Audio-QA (LQ.) ↑ | ASR (AISHELL-2) ↓ | URO-Bench Basic Understanding ↑ |
| :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-3B (AR) | 3B | 10.00 | 54.94 | 34.32 |
| Qwen2.5-3B (NAR) | 3B | 0.67 | 212.27 | 7.22 |
| TtT (Pretrain+TtT) | 3B | 40.07 | 6.80 | 57.63 |
| GLM-4-Voice | 9B | 62.67 | - | 85.82 |

---

### 5. [ParaS2S: Benchmarking and Aligning Spoken Language Models for Paralinguistic-aware Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-04-paras2s-benchmarking-and-aligning-spoken-language)

🔥 **8.0/10** | 前25% | #语音对话系统 | #强化学习 | #语音大模型 #语音合成

👥 **作者与机构**

- 第一作者：Shu-wen Yang（台湾大学通讯工程研究所）
- 通讯作者：Ming Tu（字节跳动 Seed），Lu Lu（字节跳动 Seed）
- 作者列表：Shu-wen Yang（台湾大学通讯工程研究所，字节跳动 Seed†），Ming Tu（字节跳动 Seed†），Andy T. Liu（字节跳动 Seed），Xinghua Qu（字节跳动 Seed），Hung-yi Lee（台湾大学通讯工程研究所），Lu Lu（字节跳动 Seed†），Yuxuan Wang（字节跳动 Seed），Yonghui Wu（字节跳动 Seed）

#

💡 **毒舌点评**

亮点：论文系统性地定义了副语言感知的S2S交互评估难题，并构建了从基准测试到自动评测再到强化学习训练的完整闭环，其提出的“PolyTone”训练策略和多阶段评测框架有效缓解了音频大模型的风格幻觉问题，实验结果令人信服。短板：整个框架高度依赖复杂的多阶段流程和多个外部模型（如Whisper， AudioReasoner， Qwen2.5-Omni），虽然论文提供了蒸馏后的奖励模型方案，但最终模型的轻量化和部署效率存在疑问，且核心RL方法（GRPO）并非原创。

#

🔗 **开源详情**

- 代码：论文明确承诺开源代码（项目页面：https://paras2sbench.github.io/），但未在文中提供具体GitHub仓库链接。
- 模型权重：承诺开源模型（文中提到“开源...模型”），但未具体说明开源哪个阶段的模型（SFT模型、奖励模型还是RL模型）。
- 数据集：承诺开源ParaS2SBench基准测试数据集以及用于训练的合成数据。
- Demo：项目页面提供演示。
- 复现材料：提供了详细的数据构建步骤（附录A.2）、评测器细节（附录A.3）、RL框架公式化（附录A.4）、消融实验设置（附录A.5）、人工评测说明（附录A.6）、以及所有用于数据生成和评测的Prompt模板（附录A.8），复现信息较为充分。
- 引用的开源项目：依赖Whisper-V3（转录）、AudioReasoner（语气提取）、Emotion2vec（情绪分���）、Qwen2.5-Omni（奖励模型基础）、Kimi-Audio（S2S基础模型）、CosyVoice/YourTTS（语音合成）等多个开源项目。

📌 **核心摘要**

这篇论文针对现有语音到语音（S2S）模型无法根据用户语音中的副语言特征（如情绪、语气、年龄、性别）生成合适内容和风格回应的问题，提出了一个完整的解决方案框架ParaS2S。首先，论文构建了首个直接评估波形级S2S交互自然度的基准测试ParaS2SBench，它包含合成和真实语音查询，每个查询都设计了对比性的说话风格，要求模型必须“听”音频而非仅依赖文本内容。其次，针对当前端到端音频大模型（ALLM）作为评测器会产生的风格幻觉问题，论文提出了一个基于“PolyTone”训练策略的多阶段自动评测器，通过将内容和风格分析解耦，其与人类评分的相关性显著优于ALLM基线（Pearson相关性高出10%-15%）。最后，论文利用该自动评测器指导强化学习（RL）训练流程ParaS2SAlign，通过一个轻量级的SFT热启动和奖励模型蒸馏，在仅使用10小时配对数据的情况下，使基础模型（Kimi-Audio）在ParaS2SBench上的性能比纯SFT方法提升了10%以上，并超越了所有已有的开源和闭源模型。实验表明，RL方法在数据效率上远优于SFT，且能保持模型原有的通用对话能力。主要局限性在于框架复杂，且副语言交互评估本身依赖于多个组件的准确性。

#

---

### 6. [Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-04-human-or-machine-a-preliminary-turing-test-for)

✅ **7.5/10** | 前25% | #语音对话系统 | #模型评估 | #基准测试 #多模态模型

👥 **作者与机构**

- 第一作者：Xiang Li（北京邮电大学网络与交换技术国家重点实验室，深圳大数据研究院，香港中文大学（深圳），深圳环域研究院）
- 通讯作者：Jiale Han（香港科技大学）
- 作者列表：Xiang Li（北京邮电大学网络与交换技术国家重点实验室，深圳大数据研究院，香港中文大学（深圳），深圳环域研究院），Jiabao Gao（香港中文大学（深圳）），Sipei Lin（香港中文大学（深圳）），Xuan Zhou（香港中文大学（深圳）），Chi Zhang（香港中文大学（深圳）），Bo Cheng（北京邮电大学网络与交换技术国家重点实验室），Jiale Han（香港科技大学），Benyou Wang（深圳大数据研究院，香港中文大学（深圳），深圳环域研究院）

💡 **毒舌点评**

亮点是首次对语音到语音系统进行了图灵测试，并构建了一个包含18个细粒度维度的诊断框架，不仅指出了“通过/失败”，更深入剖析了“为何失败”，将瓶颈精准定位在非语义层面。短板在于，作为开创性工作，其评估的S2S系统数量和对话场景多样性仍有限，且伪人对话的脚本部分由GPT-4o生成，可能引入了额外的偏差。

🔗 **开源详情**

-   代码：论文中提供了GitHub仓库链接：https://github.com/Carbohydrate1001/Turing-Test。
-   模型权重：论文中明确提到公开了模型（“Our code, dataset, and model are publicly available”），但未直接提供权重下载链接，需从上述GitHub仓库获取。
-   数据集：论文中明确提到公开了数据集，同样需从上述GitHub仓库获取。
-   Demo：论文中提到了部署了一个游戏化的在线评测平台，但未提供公开的在线演示链接。
-   复现材料：提供了极其详细的复现信息，包括：
    -   数据收集的完整流程、参与者画像、初始化策略（附录B）。
    -   Turing测试平台的设计细节（附录C）。
    -   18个细粒度维度的定义、标注指南、标注员信息及质量保证流程（附录D）。
    -   AI评委模型的训练框架、嵌入读取策略消融、模型消融、超参数调优（网格搜索与敏感性分析）的完整细节（附录E）。
-   论文中引用的开源项目：论文在构建伪人对话数据集时，引用了两个开源TTS模型：Nari Dia-1.6B (nari-labs, 2025) 和 Spark-TTS (Wang et al., 2025c)。在评估模型泛化性时，引用了CosyVoice2、Fisher和MultiDialog数据集。

📌 **核心摘要**

本文旨在回答一个关键问题：当前的语音到语音（S2S）系统能否像人类一样进行对话？为解决此问题，作者首次对S2S系统实施了图灵测试。核心方法是构建一个包含人-人、人-机和伪人（TTS合成）对话的高质量数据集，通过一个游戏化的在线平台收集了近3000次人类判断。与已有工作相比，新在于将图灵测试范式首次全面引入端到端S2S评估，并超越二元通过/失败的结论。主要实验结果显示，所有评估的9个最先进的S2S系统均未通过图灵测试，成功率最高仅为0.31（人类为0.87）。为了诊断失败原因，论文提出了一个包含5大类18个细粒度维度的“拟人度”分类法，并对数据进行了人工标注。分析表明，当前S2S系统的瓶颈不在语义理解（如逻辑连贯性、记忆一致性接近人类水平），而在于韵律特征（如节奏、重音）、情感表达不足以及过度恭维、书面化的“机械人格”。此外，论文探索了使用AI作为评委的可能性，发现9个现成多模态模型表现不佳，因此提出了一个基于Qwen2.5-Omni微调的可解释评委模型，该模型先预测18个细粒度维度分数，再通过线性分类器做出人/机判断，其在测试集上的二分类准确率达到96.05%，显著优于人类评委（72.84%）和基线模型。这项工作的意义在于为S2S系统建立了一个系统化的拟人度评估与诊断框架，并指明了超越语义理解、在副语言和情感个性化方面突破的研究方向。主要局限性是评估的系统和场景覆盖范围可能无法代表整个S2S领域，且伪人对话的脚本部分依赖大语言模型生成。

---

### 7. [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-04-can-speech-llms-think-while-listening)

✅ **7.5/10** | 前25% | #语音对话系统 | #微调 | #语音大模型 #自回归模型

👥 **作者与机构**

- 第一作者：Yi-Jen Shih（The University of Texas at Austin, Meta Superintelligence Labs）
- 通讯作者：Michael L. Seltzer（Meta Superintelligence Labs）
- 作者列表：Yi-Jen Shih（The University of Texas at Austin, Meta Superintelligence Labs）、Desh Raj（Meta Superintelligence Labs）、Chunyang Wu（Meta Superintelligence Labs）、Wei Zhou（Meta Superintelligence Labs）、SK Bong（Meta Superintelligence Labs）、Yashesh Gaur（Meta Superintelligence Labs）、Jay Mahadeokar（Meta Superintelligence Labs）、Ozlem Kalinli（Meta Superintelligence Labs）、Michael L. Seltzer（Meta Superintelligence Labs）

💡 **毒舌点评**

这篇论文最大的亮点在于将“边听边想”从一个人机交互概念落实为一套可训练、可控制的技术方案，尤其是提出的“问题完整度”指标，巧妙地将语义完备性与生成时机联系起来。然而，一个显眼的短板是，其核心指标“问题完整度”的计算严重依赖于外部LLM（如Llama-3-8B-Chat）的预测概率，这在部署时可能带来额外的计算开销和延迟，且该指标的泛化能力（是否对不同LLM稳定）并未充分验证。

🔗 **开源详情**

*   代码：论文中未提及公开的代码仓库链接。
*   模型权重：未提及公开Moshi微调后的模型权重。
*   数据集：
    *   训练数据源：使用了公开的CoT-Collection数据集，并描述了详细的改写和TTS转换流程。
    *   评测基准：作者构建并公开了SRQA（Spoken Reasoning QA）基准，包含从ARC, PIQA, SIQA, GSM8K等转化而来的语音问答数据集（详见附录A.3），但论文未明确说明该基准的公开下载地址。
*   Demo：未提及在线演示。
*   复现材料：提供了非常充分的训练细节（超参数、硬件、损失函数）、评估方法（LLM-judge Prompt、VAD+Whisper流水线）以及大量定性结果示例，复现友好度高。
*   引用的开源项目：论文依赖并微调了开源的Moshi模型，并引用了Llama-3作为骨干和评估裁判、Whisper用于转录、pyannote.audio用于VAD、Llama-2/3和Gemma等作为文本基线对比。

📌 **核心摘要**

这篇论文旨在解决当前语音大语言模型（Speech LLMs）在复杂推理任务上表现不佳且响应延迟高的问题。作者提出通过在多流语音LLM（基于Moshi模型）的文本单声道流中进行思维链（CoT）微调来提升推理能力，并引入了“边听边想”范式以降低CoT带来的额外延迟。其核心创新在于：1) 首次系统探索了在多流架构中使用文本CoT进行微调；2) 提出一种基于KL散度的“问题完整度（QC）”指标，用于语义感知地判断何时可以开始推理；3) 利用DPO偏好优化，结合正确性和长度偏好数据，进一步优化了精度-延迟权衡。实验结果表明，CoT微调平均将语音推理任务的准确率提升2.4倍；QC指标比简单的词数偏移方法提供了更优的精度-延迟控制；最终通过DPO训练，在保持精度的同时将响应延迟降低了约70%。本文构建了首个语音推理问答基准（SRQA），并证明了文本CoT在效率上优于语音CoT。该工作推动了语音助手向更智能、响应更自然的对话代理迈进。

---

### 8. [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-04-towards-true-speech-to-speech-models-without-text)

✅ **7.5/10** | 前25% | #语音对话系统 | #端到端 | #大语言模型 #预训练

👥 **作者与机构**

- 第一作者：Xingjoint Zhao（复旦大学）
- 通讯作者：Xipeng Qiu（复旦大学）
- 作者列表：Xingjoint Zhao¹³（1.复旦大学，2.上海创新研究院，3.MOSI.AI），Zhe Xu¹²³，Luozhijie Jin¹²³，Yang Wang¹³，Hanfu Chen¹³，Yaozhou Jiang¹³，Ke Chen¹²³，Ruixiao Li¹²³，Mingshu Chen¹³，Ruiming Wang¹³，Wenbo Zhang¹²³，Qinyuan Cheng¹³，Zhaoye Fei¹³，Shimin Li³，Xipeng Qiu¹²³†

#

💡 **毒舌点评**

亮点：论文直击当前语音对话模型“伪端到端”（依赖文本指导）的痛点，提出的模态分层架构和冻结预训练策略，为在LLM中集成原生语音能力并保留文本智能提供了一个有原理性支撑且实验有效的解决方案。短板：尽管自称为“真”语音到语音模型，但其语音理解与生成的底层仍严重依赖于强大的文本LLM骨干和高质量的文本-语音配对数据，其“无文本指导”更多体现在生成阶段，训练阶段对文本的依赖并未摆脱；此外，对于更复杂的、富含副语言信息的开放式对话场景，模型的表现力有待进一步验证。

#

📌 **核心摘要**

本文旨在解决现有语音对话系统依赖文本中间环节导致的延迟增加、副语言信息丢失和表达力受限的问题。核心方法是构建一个真正的、无需文本指导的语音到语音大语言模型，其技术核心是模态分层架构（在Transformer顶层为文本和语音设置独立分支）与冻结预训练策略（第一阶段冻结预训练文本LLM，仅训练语音相关模块；第二阶段再联合微调）。与已有方法相比，其创新在于明确观察并利用了跨模态表示在模型深度上的演变规律（先融合后分化），并设计了对应的架构进行适配，同时通过冻结策略有效防止了文本能力的灾难性遗忘。主要实验结果表明：1）在口语问答任务上（如LlamaQA），模型的语音到语音（S→S）性能（63.67%）达到了与文本指导系统（GLM-4-Voice*：65.67%）可比的水平，并在WebQA上（36.71%）超越了后者（38.34%），在部分任务上取得SOTA；2）模型在文本能力基准（MMLU: 67.19， CMMLU: 69.53）上相比引入语音前的文本LLM（Qwen3-8B: MMLU 76.6， CMMLU 77.35）的下降幅度远小于SpiritLM等模型；3）语音编码器/解码器在WER、SIM等指标上具备竞争力。该工作为构建高效、富有表现力的端到端语音交互系统建立了新的范式。主要局限性在于训练依赖大规模、高质量的语音-文本数据（包括合成数据），且模型在复杂对话、长时交互和极端副语言场景下的能力尚未充分评估。

---

