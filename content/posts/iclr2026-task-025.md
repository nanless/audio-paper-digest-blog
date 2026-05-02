---
title: "ICLR 2026 - 语音对话系统 论文列表"
date: 2026-05-03
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
| 🥇 | [ParaS2S: Benchmarking and Aligning Spoken Language Models fo](/audio-paper-digest-blog/posts/2026-05-03-paras2s-benchmarking-and-aligning-spoken-language) | 8.5分 | 前25% |
| 🥈 | [From Text to Talk: Audio-Language Model Needs Non-Autoregres](/audio-paper-digest-blog/posts/2026-05-03-from-text-to-talk-audio-language-model-needs-non) | 8.0分 | 前25% |
| 🥉 | [STITCH: Simultaneous Thinking and Talking with Chunked Reaso](/audio-paper-digest-blog/posts/2026-05-03-stitch-simultaneous-thinking-and-talking-with) | 7.5分 | 前25% |
| 4. | [WearVox: An Egocentric Multichannel Voice Assistant Benchmar](/audio-paper-digest-blog/posts/2026-05-03-wearvox-an-egocentric-multichannel-voice) | 7.5分 | 前25% |
| 5. | [Speech World Model: Causal State–Action Planning with Explic](/audio-paper-digest-blog/posts/2026-05-03-speech-world-model-causal-stateaction-planning) | 7.5分 | 前25% |
| 6. | [Human or Machine? A Preliminary Turing Test for Speech-to-Sp](/audio-paper-digest-blog/posts/2026-05-03-human-or-machine-a-preliminary-turing-test-for) | 7.0分 | 前25% |
| 7. | [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-03-can-speech-llms-think-while-listening) | 7.0分 | 前25% |
| 8. | [DrVoice: Parallel Speech-Text Voice Conversation Model via D](/audio-paper-digest-blog/posts/2026-05-03-drvoice-parallel-speech-text-voice-conversation) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [ParaS2S: Benchmarking and Aligning Spoken Language Models for Paralinguistic-aware Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-03-paras2s-benchmarking-and-aligning-spoken-language)

🔥 **8.5/10** | 前25% | #语音对话系统 | #强化学习 | #基准测试 #语音情感识别

👥 **作者与机构**

- 第一作者：Shu-wen Yang（台湾大学通讯工程研究所， 字节跳动Seed）†
- 通讯作者：Lu Lu（字节跳动Seed）†， Andy T. Liu（字节跳动Seed）† （论文中用†表示共同通讯）
- 作者列表：
  - Shu-wen Yang（台湾大学通讯工程研究所， 字节跳动Seed）
  - Ming Tu（字节跳动Seed）†
  - Andy T. Liu（字节跳动Seed）†
  - Xinghua Qu（字节跳动Seed）
  - Hung-yi Lee（台湾大学通讯工程研究所）
  - Lu Lu（字节跳动Seed）†
  - Yuxuan Wang（字节跳动Seed）
  - Yonghui Wu（字节跳动Seed）

💡 **毒舌点评**

亮点：论文巧妙地将强化学习的“探索-奖励”范式应用于解决高质量副语言标注数据稀缺的痛点，并用一个精心设计的、解耦内容与风格的多阶段自动评估器作为“裁判”，实现了数据高效的模型对齐。  
短板：那个号称能抵抗风格幻觉的多阶段评估器，其训练依赖的“PolyTone”数据集构建过程描述不够透明，且奖励模型最终是用LoRA微调一个闭源API（GPT-4o）来充当评分器吗？这多少让“可复现的开源框架”承诺打了一点折扣。

🔗 **开源详情**

- 代码：论文提及将开源代码，项目页面（https://paras2sbench.github.io/）已上线。论文中未直接提供代码仓库链接。
- 模型权重：论文提及将开源模型，包括奖励模型和最终的GRPO后训练模型。
- 数据集：ParaS2SBench测试集及SFT/RL训练数据将开源。
- Demo：项目页面提供了在线演示链接。
- 复现材料：论文附录详细说明了数据构建、自动评估器训练、RL训练的流程与超参数，为复现提供了良好基础。
- 引用的开源项目：Whisper-V3, AudioReasoner (基于Qwen-Audio 2), LoRA, Emotion2vec, Kimi-Audio, CosyVoice, YourTTS等。

📌 **核心摘要**

这篇论文旨在解决当前语音到语音（S2S）对话模型在响应用户情绪、语气等副语言线索时表现不佳的“tone-deaf”（不懂察言观色）问题。作者提出了一个名为ParaS2S的新框架，包含一个专门的基准测试ParaS2SBench和一个强化学习训练框架ParaS2SAlign。核心创新在于：1）设计了一个多阶段自动评估器，通过解耦语音内容和风格的转写与分析，避免了端到端大语言模型（如GPT-4o）在评分时产生的风格幻觉，其评分与人类偏好相关性高达0.78；2）证明了强化学习（采用GRPO算法） 比纯监督微调（SFT）在数据利用上更高效，能用更少的标注数据（仅10小时）训练出性能更优的模型。实验表明，在ParaS2SBench上，其强化学习后训练的模型在响应适当性上比SFT基线提升超过10%，并超越了包括Qwen2.5 Omni、GPT-4o语音模式在内的所有现有模型。该工作的意义在于为评估和提升语音模型的“情感智商”提供了首个完整的基准工具链和高效的训练方法。局限性在于其评估器的绝对性能仍有提升空间，且完全依赖合成数据构建的基准在评估真实世界复杂交互时可能存在偏差。

---

### 🥈 [From Text to Talk: Audio-Language Model Needs Non-Autoregressive Joint Training](/audio-paper-digest-blog/posts/2026-05-03-from-text-to-talk-audio-language-model-needs-non)

🔥 **8.0/10** | 前25% | #语音对话系统 | #扩散模型 | #预训练 #多模态模型

👥 **作者与机构**

- 第一作者：Tianqiao Liu（广东智能教育研究院暨南大学 & 好未来教育集团）
- 通讯作者：Xueyi Li（广东智能教育研究院暨南大学）
- 作者列表：Tianqiao Liu（广东智能教育研究院暨南大学 & 好未来教育集团）、Xueyi Li（广东智能教育研究院暨南大学）、Hao Wang（北京大学）、Haoxuan Li（北京大学）、Zhichao Chen（北京大学）、Weiqi Luo（广东智能教育研究院暨南大学）、Zitao Liu（广东智能教育研究院暨南大学）

💡 **毒舌点评**

亮点在于理论框架优雅，用吸收离散扩散模型的any-order AR特性统一了文本与音频生成的目标函数，从根本上回应了现有范式的缺陷；但论文中提出的三个训练策略（BANOM, PPM, SST）在核心贡献中被赋予过高权重，它们更多是工程上的“补丁”而非理论上的“基石”，且实验中“Pretrain+TtT”与“Pretrain+AR”在部分指标（如ASR）上的优势并不足以证明该混合范式在大规模预训练后仍具备决定性优势。

🔗 **开源详情**

-   代码：提供了公开代码仓库链接：https://github.com/ai4ed/TtT。
-   模型权重：论文中提到了公开发布权重（“Our code and model weights are publicly available”），但未在摘要或正文中给出直接链接，通常认为与代码仓库一同发布。
-   数据集：论文中详细列出了所有训练和评估数据集的名称和规模，并指出代码和数据公开。具体数据获取方式需查看其GitHub仓库。
-   Demo：论文中未提及提供在线演示。
-   复现材料：提供了非常详尽的复现材料，包括：1）完整的训练超参数（学习率、批大小、优化器、三项训练策略的具体概率）；2）模型架构细节（基于Qwen2.5、音频tokenizer/decoder选型）；3）推理时的扩散生成参数（步数、块长度、CFG比例）；4）训练数据格式的完整示例（图4-9）。
-   论文中引用的开源项目：主要依赖Qwen2.5-Base作为骨干模型，以���GLM-4-Voice的离散音频token化器和HiFi-GAN声码器。

📌 **核心摘要**

1.  要解决什么问题：现有端到端语音-语言模型（如Moshi, GLM-4-Voice）通常使用单一的自回归目标统一生成文本和音频token，忽略了文本（强目标-目标依赖）与音频（强源-目标依赖）在生成过程中本质不同的依赖结构，导致次优的训练动态和误差传播。
2.  方法核心是什么：提出了Text-to-Talk (TtT)框架，在一个统一的Transformer中集成自回归文本生成和基于吸收离散扩散模型的非自回归音频生成。文本部分使用标准的因果交叉熵损失，音频部分使用扩散模型的去噪损失（等价于any-order AR目标）。通过设计模态感知注意力机制和三项训练策略来弥合训练-推理差异。
3.  与已有方法相比新在哪里：1）理论创新：形式化了文本和音频的依赖不对称性，并利用吸收扩散与any-order AR的等价性，证明了其联合训练目标是对期望联合分布负对数似然的一个上界。2）架构创新：在单模型中混合了两种生成范式，音频生成可以并行化。3）训练策略创新：引入了BANOM、PPM和SST来稳定混合训练并提升可变长度生成能力。
4.  主要实验结果如何：在3B参数规模下，TtT在多项任务上超越了强AR和NAR基线。例如，在Audio-QA的LQ.任务上，TtT-3B得分为34.68，而Qwen2.5-3B (AR)为10.00；在ASR的AISHELL-2数据集上，TtT-3B的WER为12.53，而Qwen2.5-3B (AR)为54.94。经大规模多模态预训练后（Pretrain+TtT），在URO-Bench综合基准上取得了高效模型（≤3B）的最佳性能，甚至在部分任务上超过了数倍大的模型（如Moshi-7B）。
5.  实际意义是什么：为构建低延迟、高自然度的端到端语音交互系统提供了新的有效范式。混合生成方式允许音频并行合成，有望降低首token延迟，提升流式对话体验。
6.  主要局限性是什么：1）论文中对比的最强SOTA（如GLM-4-Voice-9B, Kimi-Audio-7B）参数量远大于TtT，TtT虽在部分任务上超越，但并未证明其在同等规模下的绝对统治力。2）引入的三个训练策略增加了训练流程的复杂性。3）对于最终语音输出的质量评估，论文主要依赖ASR转写后的文本评分，对音频本身的声学质量、韵律自然度等评估不够直接。

---

### 🥉 [STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models](/audio-paper-digest-blog/posts/2026-05-03-stitch-simultaneous-thinking-and-talking-with)

✅ **7.5/10** | 前25% | #语音对话系统 | #自回归模型 | #流式处理 #语音大模型

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Cheng-Han Chiang（未说明）、Xiaofei Wang（未说明）、Linjie Li（未说明）、Chung-Ching Lin（未说明）、Kevin Lin（未说明）、Shujie Liu（未说明）、Zhendong Wang（未说明）、Zhengyuan Yang（未说明）、Hung-yi Lee（未说明）、Lijuan Wang（未说明）

💡 **毒舌点评**

亮点在于“边想边说”的设计非常聪明，它没有为了加入思考过程而牺牲响应速度，反而巧妙地利用了音频播放的“垃圾时间”来进行推理，这在工程和应用上是一个很大的进步。短板是目前仅在数学推理任务上验证了其有效性，对于需要更复杂、多轮、开放式思考的真实对话场景（如日常闲聊、观点辩论）的表现是否同样出色，论文摘要未提供任何证据。

🔗 **开源详情**

- 代码：论文摘要提及了项目页面 `https://d223302.github.io/STITCH`，但未直接提供代码仓库链接。论文中未提及代码是否开源。
- 模型权重：未提及。
- 数据集：未提及。
- Demo：论文摘要提及“Some animations and demonstrations are on the project page”，表明提供了演示。
- 复现材料：论文中未提及训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：摘要中未提及任何依赖的开源工具或模型。

📌 **核心摘要**

1. 要解决什么问题：当前的语音语言模型（SLMs）缺乏在回答前进行内部、非语音的思考过程的能力，这限制了其产生清晰、简洁回复的能力。若采用传统的先完成完整思维链再回答的模式，会引入不可接受的额外延迟。
2. 方法核心是什么：提出STITCH方法，让模型交替生成“非语音的推理块”和“语音的回应块”。其核心洞察是：生成一小段语音回应音频的时间，远大于生成该音频片段对应文本标记（tokens）的时间。因此，模型可以利用播放当前语音块时的“空闲时间”，去生成下一轮推理所需的内部思考标记，从而实现“同时思考与说话”。
3. 与已有方法相比新在哪里：不同于要么无法思考（基线模型），要么思考完全阻塞回答（朴素CoT）的极端做法，STITCH创新地将思考过程与语音生成过程并行化、分块交错进行，在推理能力和响应延迟之间取得了最佳平衡。
4. 主要实验结果如何：在数学推理数据集上，STITCH匹配了无法进行内部思考的基线模型的延迟，同时性能（具体指标未说明）提升了15%。在非推理数据集上，其性能与基线模型相当。这表明该方法在提升特定任务能力的同时，没有损害通用性能。
5. 实际意义是什么：该方法使语音对话系统能够更像人类一样进行“即思即说”的交互，提升了回复的质量和逻辑性，同时保持了对话的流畅性和实时性，对构建下一代更智能、更自然的语音助手具有重要价值。
6. 主要局限性是什么：论文摘要未说明方法的具体实现细节（如块大小、调度策略）、更广泛的评估（如开放域对话、其他推理任务）以及模型架构的通用性。其效果可能依赖于特定任务和数据分布。

---

### 4. [WearVox: An Egocentric Multichannel Voice Assistant Benchmark for Wearables](/audio-paper-digest-blog/posts/2026-05-03-wearvox-an-egocentric-multichannel-voice)

✅ **7.5/10** | 前25% | #语音对话系统 | #基准测试 | #多通道 #语音大模型

👥 **作者与机构**

- 第一作者：Zhaojiang Lin（Meta）
- 通讯作者：未明确指定。根据投稿信息，邮箱包含zhaojiang@meta.com，可视为与第一作者一致。
- 作者列表：Zhaojiang Lin (Meta), Yong Xu (Meta), Kai Sun (Meta), Jing Zheng (Meta), Yin Huang (Meta), Surya Teja Appini (Meta), Krish Narang (Meta), Renjie Tao (Meta), Ishan Kapil Jain (Meta), Siddhant Arora (Carnegie Mellon University, 实习于Meta), Ruizhi Li (Meta), Yiteng Huang (Meta), Kaushik Patnaik (Meta), Wenfang Xu (Meta), Suwon Shon (Meta), Yue Liu (Meta), Ahmed A Aly (Meta), Anuj Kumar (Meta), Florian Metze (Meta), Xin Luna Dong (Meta)。

💡 **毒舌点评**

亮点：论文精准抓住了可穿戴设备语音交互中被现有基准忽视的核心痛点（自我中心视角、多通道、侧向对话抑制），并构建了一个高质量、高真实度的评测集，为该细分领域提供了急需的“标尺”。短板：论文中作为技术验证的“多通道语音大模型”（MC WearLlama）部分，训练细节（如数据增强的具体RIR来源、混合比例）和模型权重均未公开，使得最具前瞻性的技术贡献部分“可望而不可即”，削弱了论文的完整影响力。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/facebookresearch/wearvox。
- 模型权重：论文中未提及SC/MC WearLlama或其他用于评估的模型（如GPT-4o）的权重是否开源。
- 数据集：WearVox数据集已公开，可通过上述GitHub仓库链接获取。
- Demo：未提及在线演示。
- 复现材料：论文在附录中提供了一些补充信息，如音频录制设置（图4）、环境分布（图6、7）、以及模型评估的LLM Judge提示词（Listing 5, 6）。对于MC WearLlama，提供了架构示意图（图2、8）和训练方法概述（附录A.6），但如前所述，缺少关键训练细节和权重。
- 论文中引用的开源项目：论文在评估中引用了多个开源模型，包括Whisper（语音识别）、Gemma 3n、Kimi-Audio、Qwen2.5-Omni、Phi-4 Multimodal等。在构建MC WearLlama时，基于了Llama-4-Scout（开源LLM）和Conformer架构（已有开源实现）。

📌 **核心摘要**

1.  要解决什么问题：现有的语音助手基准（如VoiceBench, Spoken-CoQA）主要关注干净、通用的对话音频，无法有效评估在真实可穿戴设备（如AI眼镜）上面临的独特挑战，例如自我中心视角下的运动噪声、风噪、快速交互以及区分设备指令与旁人对话的需要。
2.  方法核心：本文提出了WearVox，第一个专门为可穿戴场景设计的多通道自我中心语音助手基准。它包含3842条通过AI眼镜录制的多通道音频，涵盖搜索问答、闭卷问答、工具调用、侧向对话抑制和语音翻译五种任务，并涵盖了丰富的室内/室外环境、噪声条件及多说话人角色（佩戴者、对话伙伴、旁观者）。
3.  与已有方法相比新在哪里：WearVox首次将评估重点从“通用干净对话”转向“真实可穿戴交互”，核心差异在于：a) 数据源：使用可穿戴设备真实录制，而非TTS或桌面麦克风；b) 音频特性：包含多通道、自我中心、带有运动和复杂环境噪声的音频；c) 任务设计：专门纳入了侧向对话抑制（Side-Talk Rejection）等可穿戴特有任务。
4.  主要实验结果如何：论文评估了多种先进的闭源（GPT-4o, Gemini 2.5 Flash）和开源（Qwen2.5-Omni等）语音大模型（SLLM）。主要发现是：a) 当前模型在WearVox上表现不佳，整体准确率在29%至59%之间；b) 在户外噪声环境下性能显著下降；c) 开启思维链模式（如Gemini 2.5 Flash Thinking）能提升准确率（从59.8%到71.3%）但大幅增加延迟（TTFT从~1.6秒到~5.5秒）；d) 关键案例研究：一个基于Llama-4构建的多通道SLLM（MC WearLlama）相比其单通道版本（SC WearLlama），在侧向对话抑制（93.9% vs 85.4%）和整体准确率（66.4% vs 61.9%）上均有提升，验证了多通道音频的空间信息对提升鲁棒性的价值。关键数据表格如下：

| 模型 | 搜索问答 | 闭卷问答 | 工具调用 | 侧向对话抑制 | 转写微平均 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| GPT-5 w/ Whisper | 57.8 | 70.6 | 35.7 | 73.8 | 57.8 |
| Gemini 2.5 Flash | 49.0 | 46.8 | 44.4 | 88.2 | 59.8 |
| Gemini 2.5 Flash Thinking | 48.8 | 61.4 | 68.1 | 91.4 | 71.3 |
| SC WearLlama | 43.3 | 42.5 | 58.5 | 85.4 | 61.9 |
| MC WearLlama | 43.3 | 42.2 | 63.9 | 93.9 | 66.4 |

5.  实际意义是什么：为可穿戴语音助手的研究和开发提供了一个标准化的、高真实度的测试平台，能够客观衡量系统在实际应用中的表现。其结论（如多通道音频的重要性、推理模式的延迟与性能权衡）直接指导了更鲁棒、更实用的可穿戴语音AI的设计。
6.  主要局限性是什么：a) 基准���据集规模（约3.8k）相对有限，可能无法覆盖所有长尾场景；b) 评估任务均为“文本输入，语音输入，文本输出”，未包含纯语音输出或流式交互评估；c) 作为技术验证的多通道模型（MC WearLlama）细节未完全开源，限制了其贡献的深度；d) 基准未包含多模态（如视觉）输入，而现实可穿戴设备常具备视觉能力。

---

### 5. [Speech World Model: Causal State–Action Planning with Explicit Reasoning for Speech](/audio-paper-digest-blog/posts/2026-05-03-speech-world-model-causal-stateaction-planning)

✅ **7.5/10** | 前25% | #语音对话系统 | #自回归模型 | #语音大模型 #可解释性

👥 **作者与机构**

- 第一作者：Xuanru Zhou
- 通讯作者：未说明
- 作者列表：Xuanru Zhou、Jiachen Lian、Henry Hong、Xinyi Yang、Gopala Anumanchipalli（均未说明所属机构）

💡 **毒舌点评**

这篇论文提出了一个极具野心和理论美感的模块化语音世界模型框架，试图为当前“暴力美学”式的端到端语音大模型提供一条可解释、可干预的新路径，这是其最大亮点。然而，致命短板在于摘要中未提供任何实验结果来证明这个精巧的“认知架构”在实际任务上是否有效，甚至没有提及与哪些基准进行了对比，这让其先进性成了空中楼阁，难以评估实际价值。

🔗 **开源详情**

根据论文摘要内容总结：
- 代码：论文中未提及具体的代码仓库链接。
- 模型权重：未提及具体的模型权重发布平台或链接，但论文结尾明确表示“我们将开源模型和数据”。
- 数据集：未提及具体数据集名称或获取方式，但承诺会开源数据。
- Demo：未提及在线演示。
- 复现材料：未提及训练细节、配置文件、检查点或附录说明。
- 依赖的开源项目：论文摘要中未提及。
- 总结：论文有明确的开源意向，但缺乏任何可操作的具体信息。论文中未提及开源计划的具体实施细节和时间表。

📌 **核心摘要**

1. 要解决的问题：当前主流语音语言模型将语音理解视为端到端的“黑箱”，虽然内容转录能力强，但在需要显式推理（如因果分析、状态预测）的方面表现薄弱，尤其是在监督数据稀缺时。
2. 方法核心：提出一种受认知科学启发的模块化“语音世界模型”。系统将语音理解分解为四个模块，通过一个因果图进行通信，构建一个认知状态搜索空间。利用该空间的后验轨迹，一个指令调优的语言模型生成简洁的因果分析和用户响应。
3. 与已有方法相比新在哪里：首次将基于图的模块化架构和显式的“状态-动作”规划与推理引入语音理解任务，强调决策的模块化和透明性，支持反事实干预和可解释性，与端到端黑箱模型形成对比。
4. 主要实验结果：论文摘要中 未提供任何具体的实验结果、数值或对比数据。无法得知该模型在标准任务（如ASR、SLU）上的性能。
5. 实际意义：为构建更可靠、可解释、可控的语音交互系统提供了新的理论框架和架构设计，尤其适用于需要严谨推理的医疗、司法等高风险对话场景，以及对模型行为有解释需求的应用。
6. 主要局限性：从摘要看，最大的局限是缺乏实验验证。其有效性、效率以及相较于强大端到端模型的性能差距完全未知。此外，模块化设计可能带来额外的训练复杂性和推理延迟。

---

### 6. [Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-03-human-or-machine-a-preliminary-turing-test-for)

✅ **7.0/10** | 前25% | #语音对话系统 | #模型评估 | #语音大模型 #多语言

👥 **作者与机构**

- 第一作者：Xiang Li (李翔)（北京邮电大学网络与交换技术国家重点实验室、深圳大数据研究院、香港中文大学（深圳）、深圳湾区研究院）
- 通讯作者：Jiale Han (韩嘉乐)（香港科技大学）
- 作者列表：Xiang Li（北京邮电大学网络与交换技术国家重点实验室等），Jiabao Gao（香港中文大学（深圳）），Sipei Lin（香港中文大学（深圳）），Xuan Zhou（香港中文大学（深圳）），Chi Zhang（香港中文大学（深圳）），Bo Cheng（北京邮电大学），Jiale Han（香港科技大学），Benyou Wang（香港中文大学（深圳）、深圳大数据研究院）

#

💡 **毒舌点评**

亮点：论文开创性地将图灵测试范式应用于现代语音到语音交互系统，并构建了一个包含18个维度的细粒度“人类相似性”诊断框架，其分析精准地指出当前系统的瓶颈已从语义理解转向副语言特征、情感表达和对话人格，这为行业研发提供了极具操作性的改进指南。短板：尽管提出了出色的评估框架和分析工具，但论文本身并未提出一种能显著缩小这一“拟人差距”的新型S2S模型或算法，核心贡献偏重于“诊断”而非“治疗”，其影响力很大程度上依赖于后续研究者如何利用这一工具。

#

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/Carbohydrate1001/Turing-Test
- 模型权重：论文中提到“我们公开了代码、数据和模型”，暗示已开源模型权重。具体为基于Qwen2.5-Omni-7B微调的评判器。
- 数据集：包含人-机、人-人、伪人对话的数据集已随代码开源。
- Demo：论文提到了用于收集图灵测试数据的游戏化在线平台，但未明确是否提供持续的公开在线演示。
- 复现材料：附录详细提供了训练细节、超参数搜索空间、模型配置、标注指南等，复现信息充分。
- 论文中引用的开源项目：依赖的主要开源项目包括Qwen2.5-Omni（骨干模型）、LoRA（用于微调）、以及构建数据集时使用的开源语音数据集（DailyTalk, IEMOCAP, MagicData）和TTS模型（Nari Dia-1.6B, Spark-TTS）。

📌 **核心摘要**

1. 问题：现代语音到语音（S2S）系统能否像人类一样自然对话？这是一个尚未被系统评估的关键问题。
2. 方法：论文首次对S2S系统进行图灵测试。构建了包含人-机、人-人、伪人（TTS合成）对话的高质量数据集。通过游戏化平台收集近3000个人类判断。开发了一个包含5大类、18个细粒度维度的“人类相似性”评估体系，并对所有对话进行标注。最后，设计了一个可解释的AI评判模型。
3. 创新点：a) 首次针对S2S系统的图灵测试；b) 提出细粒度的“人类相似性”分类诊断框架；c) 开发了一个基于有序离散化层（ODL）的可解释AI评判模型，能提供诊断性评分。
4. 实验结果：关键发现：a) 无一被测S2S系统通过图灵测试（成功率远低于0.5）。如图4a所示，人类说话者成功率高达70-87%，而最佳S2S系统成功率仅约30%。b) 瓶颈在于副语言特征、情感表达和人格，而非语义（图5）。c) 现成AI模型作为评判者表现不佳（平均准确率45.27%，见表2），而作者提出的可解释AI评判器准确率达96.05%，超越人类评判（72.84%）和所有基线（表3）。
5. 实际意义：为评估和改进对话AI的人类相似性提供了首个系统性框架和自动化工具，指明了研发方向。
6. 局限性：框架的有效性高度依赖标注质量和维度选择的完备性；提出的AI评判器虽性能优异，但其判断是否完全等同于人类感知的“拟人度”仍需进一步验证。

#

---

### 7. [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-03-can-speech-llms-think-while-listening)

✅ **7.0/10** | 前25% | #语音对话系统 | #链式思维 | #语音大模型 #流式处理

👥 **作者与机构**

- 第一作者：Yi-Jen Shih（论文中未提及所属机构）
- 通讯作者：论文中未说明
- 作者列表：Yi-Jen Shih（论文中未提及所属机构）、Desh Raj（论文中未提及所属机构）、Chunyang Wu（论文中未提及所属机构）、Wei Zhou（论文中未提及所属机构）、SK Bong（论文中未提及所属机构）、Yashesh Gaur（论文中未提及所属机构）、Jay Mahadeokar（论文中未提及所属机构）、Ozlem Kalinli（论文中未提及所属机构）、Mike Seltzer（论文中未提及所属机构）

💡 **毒舌点评**

这篇论文抓住了语音交互中“思考延迟”这个非常实际的痛点，提出的“边听边想”（思考与听同时进行）思路很人性化，且通过信息熵来量化“听完了没”是很有工程智慧的点子。不过，摘要读下来方法听起来巧妙，但缺少架构图和与现有复杂语音LLM的详细对比，让人怀疑其通用性和具体实现细节是否经得起推敲。

🔗 **开源详情**

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及
- 数据集：论文中未提及
- Demo：论文中未提及
- 复现材料：论文中未提及训练细节、配置、检查点、附录说明
- 论文中引用的开源项目：论文中未提及
- 论文中未提及开源计划

📌 **核心摘要**

这篇论文旨在解决当前语音大语言模型在处理复杂推理任务时响应延迟过高的问题。其核心方法是将文本领域的“链式思维”微调技术应用于多流语音大模型，并在音频输入流上引入一种基于熵的“问题完整性”指标，该指标用于判断用户何时已说完话，从而允许模型在用户尚未完全说完时就开始“思考”（即生成思维链），实现“边听边想”。与传统的启发式方法（如基于静音时长）相比，该指标能更精准地控制推理的启动时机，在相同的延迟条件下将ARC-Easy任务的准确率提升了4%。进一步地，通过直接偏好优化技术对模型进行微调，在保持准确率不变的情况下，将响应延迟大幅降低了70%。该研究的意义在于为构建低延迟、高智能的实时语音对话系统提供了有效方案。主要局限性在于，论文摘要未提及所使用的具体语音大模型架构、训练数据细节以及在更广泛、更复杂任务上的泛化能力。

---

### 8. [DrVoice: Parallel Speech-Text Voice Conversation Model via Dual-Resolution Speech Representations](/audio-paper-digest-blog/posts/2026-05-03-drvoice-parallel-speech-text-voice-conversation)

✅ **7.0/10** | 前25% | #语音对话系统 | #自回归模型 | #语音大模型 #端到端

👥 **作者与机构**

- 第一作者：未说明（论文未明确标注第一作者，作者列表为并列顺序）
- 通讯作者：未说明
- 作者列表：Chao-Hong Tan, Qian Chen, Wen Wang, Chong Deng, Qinglin Zhang, Luyao Cheng, Hai Yu, Xin Zhang, Xiang Lv, Tianyu Zhao, Chong Zhang, Yukun Ma, Yafeng Chen, Hui Wang, Jiaqing Liu, Xiangang Li, Jieping Ye (均隶属于 Tongyi Fun Team, Alibaba Group)

#

💡 **毒舌点评**

亮点：巧妙地通过“分组”和“解分组”机制，在并行语音-文本生成架构中实现了输入低帧率（5Hz）处理与输出高质量语音合成的兼顾，有效缓解了模态对齐问题并显著降低了计算成本（近50% GPU 时间）。  
短板：论文将SOTA归功于模型整体，但核心架构（并行生成）和多数组件（语音分组、SRH）并非首次提出，更像是对现有技术（Moshi, SpeechTokenizer, CoT等）的工程化整合与调优；此外，在真实场景下的语音鲁棒性（如噪声、口音）讨论和实验略显不足。

#

🔗 **开源详情**

- 代码：论文明确承诺“完整源代码”将随论文公开发布，并给出了GitHub仓库链接：`https://github.com/FunAudioLLM/Fun-Audio-Chat`。
- 模型权重：论文承诺将提供“所有预训练模型检查点”，并提及基于增强基座模型的检查点，但未说明权重是否已在论文发表时公开。
- 数据集：论文中使用的训练数据为合成数据，承诺提供必要的脚本和说明以复制该数据集。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了极其详细的实现细节（附录A）、训练策略、超��数设置以及各模块的初始化来源。
- 依赖的开源项目：明确依赖并整合了以下开源模型/工具：
    - Whisper-Large-v3（语音编码器）
    - CosyVoice（语音分词器S3Tokenizer与解分词器，用于数据合成和模型生成）
    - Qwen2.5系列（基础LLM）
    - HiFi-GAN（声码器）
    - DeepSpeed ZeRO（分布式训练）
- 论文未提及开源计划之外的模型或数据集。

📌 **核心摘要**

1.  问题：现有端到端语音-文本对话模型面临两大挑战：一是语音token帧率（12.5Hz或25Hz）远高于文本（~3Hz），导致计算开销大且模态频率不匹配；二是联合建模可能损害预训练大语言模型（LLM）原有的文本能力。
2.  方法核心：提出DrVoice，一个基于并行自回归建模的语音对话模型。其核心创新是双分辨率语音表示（DRSR）：在输入端通过“分组”机制将25Hz离散语音token聚合为5Hz表示输入LLM，降低计算成本；在输出端通过语音精炼头（SRH） 将LLM输出的低分辨率表示“解分组”并自回归生成原始分辨率的语音token，保证生成质量。此外，引入了链式模态（CoM） 训练策略和核心鸡尾酒（Core-Cocktail） 训练策略来提升推理连贯性和保留LLM知识。
3.  新颖性：相比已有的并行模型（如Moshi、Kimi-Audio），DrVoice系统性地提出了处理模态频率差异的DRSR方案，在保持联合建模优势的同时，大幅提高了效率和语言理解能力保留度。
4.  实验结果：DrVoice-7B在OpenAudioBench、VoiceBench、UltraEval-Audio和Big Bench Audio四大基准测试上均取得SOTA（例如VoiceBench Overall 80.17，UltraEval-Audio Overall 56.66）。消融实验证实了DRSR中分组（将帧率从12.5Hz降至5Hz带来~13.7% S2T提升）和SRH（带来~77% S2M生成提升）的关键作用。
5.  实际意义：该模型为构建高效、高质量的实时语音交互系统提供了有力方案，其低帧率设计对边缘部署和低延迟应用有重要价值。
6.  局限性：论文指出未来需实现全双工交互和扩展至音乐、环境声等更广泛的音频模态。

#

---

