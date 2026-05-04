---
title: "ICLR 2026 - 语音翻译 论文列表"
date: 2026-05-04
draft: false
tags: ["语音翻译"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 语音翻译 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音翻译

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Scalable Multilingual Multimodal Machine Translation with Sp](/audio-paper-digest-blog/posts/2026-05-04-scalable-multilingual-multimodal-machine) | 8.5分 | 前25% |
| 🥈 | [UniSS: Unified Expressive Speech-to-Speech Translation with ](/audio-paper-digest-blog/posts/2026-05-04-uniss-unified-expressive-speech-to-speech) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Scalable Multilingual Multimodal Machine Translation with Speech-Text Fusion](/audio-paper-digest-blog/posts/2026-05-04-scalable-multilingual-multimodal-machine)

🔥 **8.5/10** | 前25% | #语音翻译 | #多模态模型 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Yexing Du（哈尔滨工业大学，鹏城实验室）
- 通讯作者：Youcheng Pan（鹏城实验室）， Yang Xiang（鹏城实验室）， Ming Liu（哈尔滨工业大学，鹏城实验室）
- 作者列表：Yexing Du（哈尔滨工业大学，鹏城实验室）、 Youcheng Pan（鹏城实验室）、 Zekun Wang（哈尔滨工业大学）、 Zheng Chu（哈尔滨工业大学）、 Yichong Huang（哈尔滨工业大学）、 Kaiyuan Liu（哈尔滨工业大学，鹏城实验室）、 Bo Yang（鹏城实验室）、 Yang Xiang（鹏城实验室）、 Ming Liu（哈尔滨工业大学，鹏城实验室）、 Bing Qin（哈尔滨工业大学，鹏城实验室）

💡 **毒舌点评**

亮点：论文思路非常聪明，绕过了图像多模态翻译的数据瓶颈，利用语音（尤其是TTS生成的合成语音）作为补充信息源，实现了多语言覆盖的飞跃。短板：框架对上游TTS模型的质量和语言覆盖有强依赖，论文中自进化机制的“正样本”筛选标准（S2 > S1）略显简单粗暴，可能无法捕获语音信息更复杂的交互模式。此外，论文声称“语音提供韵律线索”，但在实验中缺乏对韵律特征的具体分析或可视化，更多是效果验证。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接 `https://github.com/yxduir/LLM-SRT`。
- 模型权重：论文中提及“code and models are released”，表明已开源模型权重。
- 数据集：使用的所有数据集（Multi30K， FLORES-200， WMT24++， CoVoST-2， FLEURS， Common Voice）均为公开数据集。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了模型架构细节、训练超参数（优化器、学习率、warmup步数）、硬件配置（4x A100 GPU）、推理设置（vLLM， beam size=1， temperature=0）、评估指标（BLEU， spBLEU， COMET）等关键信息，复现性较高。
- 引用的开源项目/模型：Whisper (编码器)， GemmaX2-28-9B (LLM)， CosyVoice2 (TTS模型)， Q-Former (来自BLIP-2)， vLLM (推理加速)。

📌 **核心摘要**

本文针对现有图像引导的多模态机器翻译（MMT）方法面临的语言覆盖有限、数据稀缺等问题，提出了一种新颖的语音引导机器翻译框架（SMT）。该框架的核心是将合成或真实的语音与文本融合作为多模态大语言模型（MLLM）的输入，以提升翻译质量。与依赖图像的方法不同，SMT利用了语音与文本的自然对齐以及丰富的语音数据集，实现了更好的可扩展性。

方法核心是集成了一个文本到语音（TTS）模型和一个MLLM。MLLM基于GemmaX2-28-9B大语言模型，采用Whisper编码器提取语音特征，并通过Q-Former适配器与文本特征融合。训练分为三阶段课程学习：ASR预训练、S2TT训练和SMT训练。此外，论文引入了自进化机制，使模型能自主利用TTS生成的合成语音进行迭代优化：通过比较仅有文本和文本+语音输入时的翻译COMET分数，筛选出语音对翻译有益的“正样本”，用于持续训练模型。

与已有方法相比，新在：1）首次系统性地将语音作为统一的多模态信息源，用于增强文本机器翻译，突破了图像模态的语言限制；2）设计了自进化框架，能自主生成、筛选训练数据，缓解了低资源语言数据稀缺问题。

主要实验结果：在Multi30K多模态翻译基准上，SMT-9B模型达到了新的SOTA，例如在英德翻译上BLEU分数达到47.0，显著超越了包括图像引导MMT和更大文本模型（如DeepSeek-V3.1）在内的所有基线。在FLORES-200通用机器翻译数据集上，模型在108个翻译方向（涉及英、日、韩、中到27种目标语言）取得了平均最优性能。消融实验证实，使用合成语音与真实语音的性能差异可忽略不计，且自进化机制对提升低资源语言（如高棉语、老挝语、缅甸语）的翻译效果显著。

实际意义在于证明了语音作为辅助模态在提升翻译质量，尤其是低资源语言翻译上的巨大潜力，为构建更通用、可扩展的多模态翻译系统提供了新方向。主要局限性是框架目前受限于TTS模型所支持的语言数量，尽管这比图像数据集的语言覆盖已大大扩展。

---

### 🥈 [UniSS: Unified Expressive Speech-to-Speech Translation with Your Voice](/audio-paper-digest-blog/posts/2026-05-04-uniss-unified-expressive-speech-to-speech)

🔥 **8.0/10** | 前25% | #语音翻译 | #大语言模型 | #语音合成 #端到端

👥 **作者与机构**

- 第一作者：Sitong Cheng（香港科技大学）
- 通讯作者：Yike Guo（香港科技大学），Wei Xue（香港科技大学）
- 作者列表：Sitong Cheng（香港科技大学）、Weizhen Bian（香港科技大学）、Xinsheng Wang（Soul AI Lab）、Ruibin Yuan（香港科技大学）、Jianyi Chen（香港科技大学）、Shunshun Yin（Soul AI Lab）、Yike Guo（香港科技大学）、Wei Xue（香港科技大学）

💡 **毒舌点评**

该论文的亮点在于其“大道至简”的哲学，用一个基于标准LLM的单阶段模型同时解决了翻译、声音和情感保持的复杂问题，性能数据非常亮眼。然而，其核心竞争力部分建立在自建的、通过TTS合成的超大规模数据集UniST之上，这使得结果的说服力打了些折扣——毕竟，如果给其他SOTA模型同样规模的定制数据，结果差距可能会缩小。此外，其多标记符的复杂分词策略在工程实现和通用性上是否是最优解，也值得商榷。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。仅提供了演示网站。
- 模型权重：基于Qwen2.5-1.5B-Instruct，论文未明确说明是否提供训练后的UniSS模型权重下载。但演示网站可能托管了模型。
- 数据集：UniST数据集已构建，论文提到“公开”（release），但未提供具体的获取方式链接。数据构建流程和数据源已详细说明。
- Demo：提供了在线演示网站：https://cmots.github.io/uniss-demo/
- 复现材料：在附录B.1中提供了极其详细的训练配置（阶段、数据、学习率、批次大小等），在附录C和E中提供了评估指标和数据构建细节。复现信息相当充分，主要缺省是官方代码仓库。
- 论文中引用的开源项目：Qwen2.5-1.5B-Instruct (LLM骨干), BiCodec (语音分词/解码器), GLM-4 (语音分词器), Paraformer (数据清洗ASR), SparkTTS (合成TTS), Whisper (评估ASR), vLLM (推理加速), Megatron-LM (训练框架), webMUSHRA (主观评估) 等。

📌 **核心摘要**

这篇论文要解决的是表达式语音到语音翻译（S2ST）中的三大挑战：保留说话人声音和情感的配对数据稀缺、处理流程复杂、以及难以迁移文本LLM的翻译能力。方法核心是提出一个名为UniSS的单阶段、统一的文本-语音语言模型，它基于预训练的Qwen2.5-1.5B-Instruct构建，使用三种语音标记（说话人标记、语言标记、语义标记）来分别编码风格、内容和生成目标。其关键创新是引入了跨模态思维链（CoT）提示，在推理时将复杂的S2ST任务分解为“听、译、说”三个顺序步骤，从而显式地利用LLM强大的文本翻译能力来指导语音生成。为了训练该模型，论文还构建了一个大规模、高质量的合成数据集UniST（44.8k小时）。实验结果（主要见表1）表明，在CVSS-T数据集上，UniSS（质量模式）在翻译保真度（Speech-BLEU: EN-ZH 32.20, ZH-EN 24.28）、时长一致性（SLC 0.2: 0.98/0.87）和语音质量（UTMOS: 3.76/3.86）上均显著优于现有的端到端和级联系统。主观评估（表2）也证实其在情感相似度（MOS 4.51）和说话人相似度（4.42）上的优势。该工作的实际意义在于提供了一种更简洁、有效的下一代表达式S2ST系统构建范式。主要局限性是目前仅支持中英双语，且其分词器来自不同模型，导致词表膨胀。

![UniSS框架与性能对比图](icassp-img://5o0ZvYzh6B/0.png)

---

