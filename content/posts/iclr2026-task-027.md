---
title: "ICLR 2026 - 语音翻译 论文列表"
date: 2026-05-03
draft: false
tags: ["语音翻译"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音翻译 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音翻译

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [UniSS: Unified Expressive Speech-to-Speech Translation with ](/audio-paper-digest-blog/posts/2026-05-03-uniss-unified-expressive-speech-to-speech) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [UniSS: Unified Expressive Speech-to-Speech Translation with Your Voice](/audio-paper-digest-blog/posts/2026-05-03-uniss-unified-expressive-speech-to-speech)

🔥 **8.0/10** | 前25% | #语音翻译 | #语音大模型 | #多语言 #端到端

👥 **作者与机构**

- 第一作者：Sitong Cheng（香港科技大学）
- 通讯作者：Yike Guo（香港科技大学），Wei Xue（香港科技大学）
- 作者列表：Sitong Cheng（香港科技大学），Weizhen Bian（香港科技大学），Xinsheng Wang（Soul AI Lab），Ruibin Yuan（香港科技大学），Jianyi Chen（香港科技大学），Shunshun Yin（Soul AI Lab），Yike Guo（香港科技大学，通讯作者），Wei Xue（香港科技大学，通讯作者）

#

💡 **毒舌点评**

亮点是巧妙地将强大的文本大语言模型（Qwen2.5）“改造”成一个能直接处理语音并进行翻译的端到端系统，通过设计精巧的跨模态思维链提示，实现了“听懂-翻译-说出”的一体化，架构异常简洁优雅。短板在于模型对两个关键组件（BiCodec用于声码器和说话人编码，GLM-4用于内容理解）的依赖性较强，且论文主要验证了中英翻译，对于更广泛的语言支持和实际场景下的鲁棒性（如背景噪声）讨论不足，这更像是一个强大的概念验证而非即插即用的工业方案。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开模型权重。
- 数据集：论文中构建并发布了UniST数据集（General 44.8k小时，High-Quality 19.8k小时）。文中提供了数据集官网链接（https://cmots.github.io/uniss-demo/），并承诺数据集将公开发布，但未明确具体发布平台和获取方式。
- Demo：提供了在线演示网站（https://cmots.github.io/uniss-demo/），可访问音频样本。
- 复现材料：提供了详尽的训练细节（附录B）、超参数配置、评估指标实现细节（附录C）、数据集构建流程（附录E）等，复现性指南非常充分。
- 论文中引用的开源项目：Qwen2.5-Instruct（作为骨干）、BiCodec（用于语音标记/解码）、GLM-4 Speech Tokenizer（用于语言学标记）、SparkTTS（用于数据集合成）、Whisper（用于ASR过滤和评估）、Paraformer（用于ASR过滤）、CosyVoice 2（用于基线TTS）、SeamlessM4T系列（用于基线）、NLLB-200（用于基线MT）、Silero VAD（用于数据集后处理）、webMUSHRA（用于主观评估）、Megatron-LM（用于训练框架）、vLLM（用于推理部署）。

📌 **核心摘要**

这篇论文旨在解决表达性语音到语音翻译（S2ST）中同时保持翻译准确性、说话人音色和情感风格的难题。核心方法是提出UniSS，一个基于预训练文本大语言模型（Qwen2.5-1.5B）的单阶段统一框架。该框架通过引入说话人、语言学和语义三类语音标记器，将语音和文本统一建模为标记序列。其关键创新是设计了跨模态思维链（CoT）提示机制，引导模型在单次推理中执行“听（生成源文本）-说（生成目标文本）-译（生成目标语音语义标记）”的步骤，从而将大模型预训练的文本翻译能力有效迁移到语音领域。为训练该模型，论文构建并发布了大规模、高质量的中英表达性S2ST数据集UniST（44.8k小时）。实验表明，UniSS在翻译保真度（如CVSS-T数据集上EN-ZH方向Speech-BLEU达32.20）、语音质量、音色与情感保留以及时长一致性（SLC 0.2得分达0.98）等多个维度均显著优于已有的级联系统、多模态大模型（如GPT-4o）及端到端S2ST模型。该工作的实际意义是为下一代表达性S2ST系统提供了更简洁有效的范式。主要局限性在于当前模型仅支持中英双向翻译，且模型本身未开源。

#

---

