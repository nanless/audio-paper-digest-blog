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
| 🥇 | [Scalable Multilingual Multimodal Machine Translation with Sp](/audio-paper-digest-blog/posts/2026-05-03-scalable-multilingual-multimodal-machine) | 7.5分 | 前25% |
| 🥈 | [UniSS: Unified Expressive Speech-to-Speech Translation with ](/audio-paper-digest-blog/posts/2026-05-03-uniss-unified-expressive-speech-to-speech) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Scalable Multilingual Multimodal Machine Translation with Speech-Text Fusion](/audio-paper-digest-blog/posts/2026-05-03-scalable-multilingual-multimodal-machine)

✅ **7.5/10** | 前25% | #语音翻译 | #多模态模型 | #自进化 #多语言

👥 **作者与机构**

- 第一作者：Yexing Du（哈尔滨工业大学，鹏城实验室）
- 通讯作者：Youcheng Pan（鹏城实验室），Yang Xiang（鹏城实验室），Ming Liu（哈尔滨工业大学，鹏城实验室）
- 作者列表：Yexing Du（哈尔滨工业大学，鹏城实验室）、Youcheng Pan（鹏城实验室）、Zekun Wang（哈尔滨工业大学）、Zheng Chu（哈尔滨工业大学）、Yichong Huang（哈尔滨工业大学）、Kaiyuan Liu（哈尔滨工业大学，鹏城实验室）、Bo Yang（鹏城实验室）、Yang Xiang（鹏城实验室）、Ming Liu（哈尔滨工业大学，鹏城实验室）、Bing Qin（哈尔滨工业大学，鹏城实验室）

💡 **毒舌点评**

亮点：论文将语音模态引入多模态机器翻译，思路有新意，且实验结果显示在多语言和低资源场景下有明显提升，自进化机制为利用合成数据提供了可行方案。短板：核心创新（语音替代图像）的理论深度有限，更多是工程上的有效集成；实验虽全面，但对语音为何能提升翻译质量（如韵律信息具体如何作用于语义消歧）的分析较浅，消融实验未能完全解开“自进化机制”与“语音模态”各自的贡献。

🔗 **开源详情**

- 代码：论文中提供代码仓库链接：https://github.com/yxduir/LLM-SRT
- 模型权重：论文中提及“The code and models are released”，暗示会公开模型权重，但未具体说明是发布在Hugging Face Hub还是其他平台。
- 数据集：训练和评估所用的数据集（FLEURS， Common Voice 19， Multi30K， FLORES-200， WMT24++， CoVoST-2）均为公开数据集。论文未提及发布自定义数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文详细说明了模型架构、训练策略、超参数设置（学习率、优化器、硬件环境），并提供了分阶段训练细节，复现信息较为充分。
- 论文中引用的开源项目/模型：Whisper（语音编码器）、GemmaX2（LLM骨干）、CosyVoice2（TTS模型）、Q-Former（来自BLIP-2）。

📌 **核心摘要**

本文旨在解决现有图像引导的多模态机器翻译方法面临的语言覆盖有限和数据稀缺问题。方法核心是提出一个语音引导机器翻译框架，该框架将语音和文本作为融合输入，输入一个多模态大语言模型，并引入一个自进化机制，利用文本转语音模型生成合成数据进行迭代训练。与已有方法相比，新在：1）将辅助模态从图像转向更易获取且与文本对齐更紧密的语音；2）设计了一套自进化的数据生成与模型优化流程，减少对人工标注低资源数据的依赖。主要实验结果：在Multi30K多模态翻译基准测试上，SMT-9B模型取得了新的最优结果，在eng→deu、eng→fra等多个方向上显著超越了基于文本和基于图像的基线方法。在FLORES-200基准测试的108个翻译方向上，达到了平均水平的先进性能，尤其是在低资源语言对（如高棉语、老挝语）上表现突出。实际意义在于，该框架利用成熟的语音技术拓展了多模态翻译的语言覆盖范围，并为低资源翻译提供了可扩展的解决方案。主要局限性是框架的性能上限仍受制于其依赖的TTS模型所支持的语言种类。

---

### 🥈 [UniSS: Unified Expressive Speech-to-Speech Translation with Your Voice](/audio-paper-digest-blog/posts/2026-05-03-uniss-unified-expressive-speech-to-speech)

✅ **7.0/10** | 前25% | #语音翻译 | #端到端 | #自回归模型 #数据集

👥 **作者与机构**

- 第一作者：Sitong Cheng（未说明所属机构）
- 通讯作者：未说明
- 作者列表：Sitong Cheng（未说明）、Bianweizhen（未说明）、Xinsheng Wang（未说明）、Ruibin Yuan（未说明）、Jianyi Chen（未说明）、Shunshun Yin（未说明）、Yike Guo（未说明）、Wei Xue（未说明）

#

💡 **毒舌点评**

这篇论文在解决“既要翻译准、又要声音像、还要情绪到位”这个“既要又要”的痛点上，思路清晰，通过统一框架和自建大规模数据集（UniSS & UniST）展现了不错的系统设计能力和数据工程功底。然而，摘要中对核心实验结果的描述过于模糊，仅定性宣称“显著优于先前方法”，缺乏定量的、可置信的对比数据（比如具体的BLEU、MOS、说话人相似度分数），这让其“显著优于”的宣称大打折扣，也让人怀疑其实验对比是否充分。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及是否公开。
- 数据集：论文中提及构建并发布数据集UniST，但未说明具体获取方式（如网址、申请流程）。
- Demo：论文中提供了在线演示链接：https://cmots.github.io/uniss-demo/。
- 复现材料：未提及训练细节、配置、检查点、附录说明。
- 论文中引用的开源项目：未提及。

📌 **核心摘要**

1.  要解决的问题：表达性语音到语音翻译（S2ST）面临三大挑战：保留情感与说话人身份的配对数据稀缺、多阶段处理流水线复杂、以及大语言模型（LLM）的翻译能力难以有效迁移到语音领域。
2.  方法核心：提出UniSS，一个单阶段框架。它通过设计语音语义和风格建模模块，与现有的文本LLM框架集成，形成统一的文本-语音语言模型。为将翻译能力从文本迁移到语音，提出了跨模态思维链提示过程，逐步对齐音频语义与文本，并确保解码结果保留语音风格。
3.  与已有方法相比新在哪里：主要创新在于将多阶段流水线简化为单阶段端到端框架，并通过跨模态提示设计，更有效地利用LLM的翻译能力到语音生成中。同时，构建并发布了大规模、高质量的表达性S2ST数据集（UniST），旨在解决数据稀缺问题。
4.  主要实验结果：论文摘要声称，UniSS在翻译保真度和语音质量上“显著优于先前方法”，同时在保持语音、情感和时长一致性方面表现优异。（注意：摘要中未提供任何具体的实验数值、基线对比或量化指标。）
5.  实际意义：为构建更自然、更个性化的下一代语音翻译系统提供了更简单有效的范式，有助于实现保留说话人声音和情绪的实时跨语言交流。
6.  主要局限性：摘要中未明确说明局限性。从方法描述推断，其性能可能严重依赖于构建的UniST数据集的质量与覆盖度；跨模态提示的有效性也需要在更复杂的语境中验证。

#

---

