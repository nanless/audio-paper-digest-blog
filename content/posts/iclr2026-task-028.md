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
| 🥇 | [Scalable Multilingual Multimodal Machine Translation with Sp](/audio-paper-digest-blog/posts/2026-05-03-scalable-multilingual-multimodal-machine) | 8.5分 | 前25% |
| 🥈 | [UniSS: Unified Expressive Speech-to-Speech Translation with ](/audio-paper-digest-blog/posts/2026-05-03-uniss-unified-expressive-speech-to-speech) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Scalable Multilingual Multimodal Machine Translation with Speech-Text Fusion](/audio-paper-digest-blog/posts/2026-05-03-scalable-multilingual-multimodal-machine)

🔥 **8.5/10** | 前25% | #语音翻译 | #多模态模型 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Yexing Du (哈尔滨工业大学、鹏城实验室)
- 通讯作者：Youcheng Pan (鹏城实验室)，Yang Xiang (鹏城实验室)，Ming Liu (哈尔滨工业大学、鹏城实验室)
- 作者列表：Yexing Du (哈尔滨工业大学、鹏城实验室)、Youcheng Pan (鹏城实验室)、Zekun Wang (哈尔滨工业大学)、Zheng Chu (哈尔滨工业大学)、Yichong Huang (哈尔滨工业大学)、Kaiyuan Liu (哈尔滨工业大学、鹏城实验室)、Bo Yang (鹏城实验室)、Yang Xiang (鹏城实验室)、Ming Liu (哈尔滨工业大学、鹏城实验室)、Bing Qin (哈尔滨工业大学、鹏城实验室)

💡 **毒舌点评**

论文亮点在于提出了一个新颖的“语音引导”范式，通过TTS生成合成语音与文本融合，并利用自进化机制自我优化，在多模态机器翻译（MMT）和通用机器翻译（MT）任务上取得了非常亮眼的成绩，有效解决了传统图像引导方法数据稀缺、语言覆盖窄的痛点。然而，论文的核心创新“模态无关假设”更多是一个启发式的指导原则而非严格理论，且实验对比中最新、最强的大规模语言模型（如DeepSeek-V3.1）在部分任务上仍具竞争力，SMT框架的优势在某些高资源语言上并不显著。

🔗 **开源详情**

-   代码：是，提供了GitHub仓库链接：https://github.com/yxduir/LLM-SRT。
-   模型权重：是，论文中声明发布了模型。
-   数据集：使用了公开数据集（Multi30K, FLORES-200, CoVoST-2, FLEURS, Common Voice等），但未提及创建新的公开数据集。
-   Demo：论文中未提及。
-   复现材料：论文详细说明了模型架构（表2）、训练数据（表9）、评估基准（表10）、实验设置（优化器、学习率、硬件），并提供了关键的超参数。附录中有更详细的结果表格（表11， 表12）。
-   论文中引用的开源项目：Whisper（语音编码器）， GemmaX2-28-9B（LLM骨干）， CosyVoice2（TTS模型）， vLLM（推理加速）， sacrebleu（评估工具）， HuggingFace模型/数据集（NLLB， COMET等）。

📌 **核心摘要**

1.  问题：现有基于图像的多模态机器翻译（MMT）方法受限于多语言图像-文本对数据的稀缺性，限制了其语言覆盖范围和泛化能力。
2.  方法：提出语音引导的机器翻译（SMT）框架，将文本转换为合成语音，与原始文本一起作为融合输入送入多模态大语言模型（MLLM），以利用语音中的韵律信息增强翻译质量。
3.  创新：1) SMT框架：首次将语音作为辅助模态引入多模态翻译，利用语音与文本的自然对齐及丰富的语音数据实现可扩展的多语言支持。2) 自进化机制：设计了一个四阶段循环（经验获取、经验优化、模型更新、模型评估），通过TTS模型自主生成合成语音数据，并利用基于COMET评分的正/负样本采样策略，迭代优化MLLM对语音信息的利用能力，尤其提升了低资源语言的翻译质量。3) 多阶段预训练：采用渐进式课程学习，依次进行语音识别（ASR）、语音到文本翻译（S2TT）和SMT训练，有效对齐语音与文本模态。
4.  结果：在Multi30K多模态翻译基准测试中，SMT-9B模型取得了新的SOTA结果（平均BLEU 52.0），显著超越了现有的基于图像（真实或合成）的MMT模型和文本基线模型。在FLORES-200基准的108个翻译方向上，其平均性能（spBLEU/COMET）也达到了SOTA水平（例如，英→27语言平均spBLEU 40.4），超越了参数量更大的纯文本大模型（如DeepSeek-V3.1）。消融实验证实，合成语音与真实语音对翻译质量的影响差异可忽略不计；自进化机制对低资源语言（如高棉语、老挝语、缅甸语）的COMET分数提升显著（最高达+2.0）。
5.  意义：证明了语音作为辅助模态在多模态翻译中的巨大潜力，为构建更通用、可扩展、低资源友好的翻译系统提供了新思路。
6.  局限：框架的性能仍受TTS模型本身语言覆盖范围的限制。此外，在超长文本上，合成语音可能引入噪声，尽管模型表现出了一定的鲁棒性。

---

### 🥈 [UniSS: Unified Expressive Speech-to-Speech Translation with Your Voice](/audio-paper-digest-blog/posts/2026-05-03-uniss-unified-expressive-speech-to-speech)

✅ **7.5/10** | 前25% | #语音翻译 | #语音大模型 | #自回归模型 #多语言

👥 **作者与机构**

- 第一作者：Sitong Cheng（香港科技大学）
- 通讯作者：Yike Guo（香港科技大学），Wei Xue（香港科技大学）
- 作者列表：Sitong Cheng（香港科技大学），Weizhen Bian（香港科技大学），Xinsheng Wang（Soul AI Lab），Ruibin Yuan（香港科技大学），Jianyi Chen（香港科技大学），Shunshun Yin（Soul AI Lab），Yike Guo（香港科技大学），Wei Xue（香港科技大学）

💡 **毒舌点评**

亮点：论文成功构建了一个简洁而统一的单阶段模型，将预训练大语言模型（LLM）强大的文本翻译能力有效迁移到了语音领域，通过“听-译-说”的思维链提示实现了效果和效率的灵活平衡。短板：目前仅支持中英双语，数据集和模型的泛化能力有待验证；虽然架构简洁，但其性能高度依赖于特定的语音分词器（BiCodec和GLM-4），未来统一这些组件是必要的。

🔗 **开源详情**

- 代码： 论文未提及代码仓库链接。但提供了演示网站：https://cmots.github.io/uniss-demo/。
- 模型权重： 论文中未提及公开模型权重。
- 数据集： 论文贡献了UniST数据集，并提供了构建流水线细节。数据集本身是否公开下载，论文未明确说明。
- Demo： 提供了在线演示网站：https://cmots.github.io/uniss-demo/。
- 复现材料： 提供了非常详细的训练配置（三阶段数据集、学习率、batch size等）、模型超参数、评估协议、基线模型实现细节以及数据来源列表，复现信息充分。
- 引用的开源项目： 明确依赖并使用了BiCodec（语音分词器）、GLM-4语音分词器、SparkTTS（数据合成）、Qwen2.5系列（LLM backbone）、SeamlessM4T、CosyVoice 2、Whisper、vLLM等开源项目。

📌 **核心摘要**

本文旨在解决表达性语音到语音翻译（S2ST）中的三大挑战：配对数据稀缺、多阶段流程复杂、LLM翻译能力迁移不足。为此，作者提出了UniSS，一个基于预训练Qwen2.5-1.5B-Instruct的单阶段统一框架。其核心在于设计了三元组语音分词器（提取说话人、语言和语义信息），并通过跨模态思维链（CoT）提示，将LLM的文本翻译能力渐进地对齐到语音领域，实现了“听-译-说”的推理过程。与以往需要复杂多阶段架构或无法充分利用LLM预训练知识的方法相比，UniSS以单一自回归模型完成了内容与风格的联合建模。实验结果显示，在CVSS-T数据集上，UniSS（质量模式）在翻译保真度（Speech-BLEU: EN-ZH 32.20）和时长一致性（SLC-0.2: 0.98/0.87）上显著超越了所有基线模型，并在主观评价中取得了优异的说话人相似度（4.42）和情感相似度（4.51）。论文还构建并发布了大规模高质量数据集UniST（44.8k小时）。该工作为构建下一代表达性S2ST系统提出了一个更简单、有效的范式。主要局限性包括当前仅支持中英双语，以及依赖于多个外部语音分词器。

---

