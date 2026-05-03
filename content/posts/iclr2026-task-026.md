---
title: "ICLR 2026 - 语音翻译 论文列表"
date: 2026-05-03
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
| 🥇 | [UniSS: Unified Expressive Speech-to-Speech Translation with ](/audio-paper-digest-blog/posts/2026-05-03-uniss-unified-expressive-speech-to-speech) | 8.0分 | 前10% |
| 🥈 | [Scalable Multilingual Multimodal Machine Translation with Sp](/audio-paper-digest-blog/posts/2026-05-03-scalable-multilingual-multimodal-machine) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [UniSS: Unified Expressive Speech-to-Speech Translation with Your Voice](/audio-paper-digest-blog/posts/2026-05-03-uniss-unified-expressive-speech-to-speech)

🔥 **8.0/10** | 前10% | #语音翻译 | #语音大模型 | #端到端 #多语言

👥 **作者与机构**

- 第一作者：Sitong Cheng（香港科技大学）
- 通讯作者：Yike Guo（香港科技大学）、Wei Xue（香港科技大学）
- 作者列表：Sitong Cheng（香港科技大学），Weizhen Bian（香港科技大学），Xinsheng Wang（Soul AI Lab），Ruibin Yuan（香港科技大学），Jianyi Chen（香港科技大学），Shunshun Yin（Soul AI Lab），Yike Guo（香港科技大学），Wei Xue（香港科技大学）

💡 **毒舌点评**

UniSS 巧妙地利用预训练 LLM 作为“大脑”，并通过精心设计的语音 token 和跨模态思维链提示，将复杂的语音翻译任务分解为可管理的步骤，其在翻译保真度和时长一致性上的表现确实令人印象深刻。不过，该框架依赖了三个来自不同模型的语音 tokenizer（GLM-4， BiCodec的说话人和语义tokenizer），这种“拼装”设计在提升性能的同时，也增加了系统复杂度和未来统一优化的难度。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及是否公开 UniSS 的模型权重。
- 数据集：公开。构建了并发布了大规模 UniST 数据集（44.8k 小时），论文中提供了详细的数据构建流程、来源数据列表和质量分析。网站 `https://cmots.github.io/uniss-demo` 提供了演示。
- Demo：提供在线音频示例演示，网站为 `https://cmots.github.io/uniss-demo`。
- 复现材料：论文在附录 B 中提供了极为详细的训练配置（三阶段的超参数、学习率、batch size 等）、基线模型实施细节（表 B2）和评估指标说明，复现友好度高。
- 论文中引用的开源项目：Whisper-large-v3 (ASR)， NLLB-200 (MT)， CosyVoice 2 (TTS)， SeamlessM4T-v2-Large (S2TT)， Qwen2.5-1.5B-Instruct (LLM主干)， BiCodec (语音 tokenizer)， GLM-4 Speech Tokenizer， SparkTTS (数据合成)， Paraformer (ASR过滤)， Silero VAD， webMUSHRA (评估)。

📌 **核心摘要**

1.  要解决什么问题：现有语音到语音翻译（S2ST）系统面临三大挑战：缺乏保留表达风格的并行数据、多阶段架构复杂且误差累积、未能���效迁移大语言模型（LLM）的文本翻译能力。
2.  方法核心是什么：提出 UniSS，一个单阶段自回归模型，直接基于预训练的文本 LLM（Qwen2.5-1.5B-Instruct）构建。核心包括：（1）设计说话人、语言、语义三类语音 token，分别建模全局风格、内容和生成；（2）引入跨模态思维链（CoT）提示，将 S2ST 分解为“听-译-说”步骤，显式转移 LLM 的文本翻译能力；（3）提出三阶段渐进式训练策略。
3.  与已有方法相比新在哪里：不同于需要复杂架构或非自回归模型的先前工作，UniSS 在单个自回归模型内完成了语音翻译，架构更简洁。同时，它首次将 LLM 的预训练文本翻译能力显式且有效地迁移到了语音翻译任务中。
4.  主要实验结果如何：在 CVSS-T 测试集上，UniSS (Q) 在英译中和中译英方向分别达到 32.20 和 24.28 的 Speech-BLEU，显著优于之前的端到端（如 Seamless-Ex）和级联系统。在时长一致性（SLC 0.2）上近乎完美（0.98/0.87）。主观评估中，其情感相似度 MOS 达 4.51，优于 Seamless-Ex 的 3.56。在 FLEURS 数据集上也表现出强大的鲁棒性。

| 模型 (类别) | 参数规模 | Speech-BLEU (EN-ZH) | Speech-BLEU (ZH-EN) | SLC 0.2 (EN-ZH) | SLC 0.2 (ZH-EN) | UTMOS (EN-ZH) | UTMOS (ZH-EN) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UniSS (Q) (本文) | 1.5B | 32.20 | 24.28 | 0.98 | 0.87 | 3.76 | 3.86 |
| Seamless-Ex (E2E) | ~1.7B | 24.45 | 15.84 | 0.68 | 0.52 | 2.46 | 2.90 |
| 2-Stage (级联) | 2.8B | 26.94 | 20.86 | 0.67 | 0.52 | 3.79 | 3.48 |
| GPT-4o (MLLM) | 未公开 | 31.64 | 19.27 | 0.47 | 0.37 | 3.46 | 4.18 |

![论文中的实验结果图](icassp-img://5o0ZvYzh6B/2.png)
图3：UniST数据集构建流程概览、时长比分布及语音时长分布。

5.  实际意义是什么：为构建下一代表达性 S2ST 系统提供了一种更简单、更有效的范式。通过合成数据流水线构建了大规模高质量数据集 UniST，为社区研究解决了数据瓶颈问题。
6.  主要局限性是什么：当前仅支持中英双语；语音表示依赖三个独立的 tokenizer，增加了词汇表大小和系统复杂度；性能仍受合成训练数据质量的限制。

---

### 🥈 [Scalable Multilingual Multimodal Machine Translation with Speech-Text Fusion](/audio-paper-digest-blog/posts/2026-05-03-scalable-multilingual-multimodal-machine)

✅ **7.5/10** | 前25% | #语音翻译 | #多模态模型 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Yexing Du（Harbin Institute of Technology， Pengcheng Laboratory）
- 通讯作者：Youcheng Pan（Pengcheng Laboratory）， Yang Xiang（Pengcheng Laboratory）， Ming Liu（Harbin Institute of Technology， Pengcheng Laboratory）
- 作者列表：Yexing Du（Harbin Institute of Technology， Pengcheng Laboratory）， Youcheng Pan（Pengcheng Laboratory）， Zekun Wang（Harbin Institute of Technology）， Zheng Chu（Harbin Institute of Technology）， Yichong Huang（Harbin Institute of Technology）， Kaiyuan Liu（Harbin Institute of Technology， Pengcheng Laboratory）， Bo Yang（Pengcheng Laboratory）， Yang Xiang（Pengcheng Laboratory）， Ming Liu（Harbin Institute of Technology， Pengcheng Laboratory）， Bing Qin（Harbin Institute of Technology， Pengcheng Laboratory）

💡 **毒舌点评**

亮点是另辟蹊径，用语音的韵律信息作为多模态翻译的补充模态，巧妙地绕开了图像数据稀缺的瓶颈，并提出了一个能自主优化训练数据的自进化机制，对低资源翻译有实际帮助。短板在于对语音信号的理解比较浅层，主要依赖预训练语音编码器提取特征，自进化机制高度依赖COMET评分来筛选“正样本”，其本身可能存在偏差且缺乏理论保证。

📌 **核心摘要**

这篇论文旨在解决传统图像引导的多模态机器翻译（MMT）因多语言图像-文本对数据稀缺而导致的扩展性问题。为此，作者提出了一种语音引导的机器翻译（SMT）框架，核心是将语音与文本作为融合输入，利用多模态大语言模型（MLLM）生成更高质量的翻译。与已有方法相比，其新意在于：1）引入语音作为新模态，利用其丰富的韵律线索且数据更易获取；2）提出了一个自进化机制，利用TTS模型合成语音，通过MLLM自我评估筛选出对翻译有益的样本（正样本）进行迭代训练，以缓解对真实数据的依赖。实验结果表明，该框架在Multi30K多模态翻译基准上超越了所有现有方法，达到了新的SOTA。在通用机器翻译数据集FLORES-200上，其在108个翻译方向上取得了平均SOTA性能（平均spBLEU 31.1 / COMET 87.7），甚至优于规模大得多的纯文本模型。消融实验证实了合成语音与真实语音对翻译质量的影响可忽略不计，且自进化机制能有效提升低资源语言的翻译性能。该工作的实际意义在于为低资源语言翻译提供了一种利用丰富语音数据的可扩展新路径。其主要局限性在于框架的最终性能仍受限于TTS模型所支持的语言数量。

---

