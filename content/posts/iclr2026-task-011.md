---
title: "ICLR 2026 - 机器翻译 论文列表"
date: 2026-05-04
draft: false
tags: ["机器翻译"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 机器翻译 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 机器翻译

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Scalable Multilingual Multimodal Machine Translation with Sp](/audio-paper-digest-blog/posts/2026-05-04-scalable-multilingual-multimodal-machine) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Scalable Multilingual Multimodal Machine Translation with Speech-Text Fusion](/audio-paper-digest-blog/posts/2026-05-04-scalable-multilingual-multimodal-machine)

🔥 **8.5/10** | 前25% | #机器翻译 | #多模态融合 | #语音翻译 #多模态模型

👥 **作者与机构**

- 第一作者：Yexing Du（哈尔滨工业大学，鹏城实验室）
- 通讯作者：Youcheng Pan（鹏城实验室），Yang Xiang（鹏城实验室），Ming Liu（哈尔滨工业大学，鹏城实验室）
- 作者列表：Yexing Du（哈尔滨工业大学，鹏城实验室）、Youcheng Pan（鹏城实验室）、Zekun Wang（哈尔滨工业大学）、Zheng Chu（哈尔滨工业大学）、Yichong Huang（哈尔滨工业大学）、Kaiyuan Liu（哈尔滨工业大学，鹏城实验室）、Bo Yang（鹏城实验室）、Yang Xiang（鹏城实验室）、Ming Liu（哈尔滨工业大学，鹏城实验室）、Bing Qin（哈尔滨工业大学，鹏城实验室）

💡 **毒舌点评**

该论文提出的语音-文本融合框架（SMT）优雅地解决了传统多模态翻译对图文对数据的依赖，利用丰富的语音数据实现了更好的语言覆盖和性能，在多个基准测试上刷新了记录，展现了跨模态信息融合的强大潜力。但自我进化机制中“用COMET分数筛选正负样本并迭代训练”的闭环设计，其有效性更多依赖实验观察，理论层面的解释稍显薄弱；同时，论文对合成语音与真实语音在噪声、情感等更复杂维度下的差异及其对翻译鲁棒性的影响探讨不足。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接（https://github.com/yxduir/LLM-SRT），论文发布时代码应可用。
- 模型权重：论文中提到“The code and models are released”，表明会开源模型权重，但未提及具体权重文件的发布平台或版本。
- 数据集：使用了公开数据集（FLEURS, Multi30K, CoVoST-2, FLORES-200, WMT24++），未提及自建或私有数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了模型架构参数（表2）、主要训练设置（GPU、优化器、学习率）、评估设置（vLLM， beam size）。但缺少如具体batch size、数据增强细节、自我进化每轮的具体迭代次数等。
- 论文中引用的开源项目：Whisper (speech encoder), GemmaX2-28-9B (LLM backbone), CosyVoice2 (TTS model), vLLM (inference), sacrebleu, wmt22-comet。

📌 **核心摘要**

1. 要解决什么问题：现有图像引导的多模态机器翻译方法受限于多语言图文对数据的稀缺，且在通用翻译数据上泛化能力有限。论文旨在寻找一种更通用、可扩展的辅助模态来提升机器翻译质量，特别是低资源语言的翻译。
2. 方法核心是什么：提出语音引导的机器翻译（SMT）框架，将文本和其合成的语音（通过TTS模型）作为融合输入送入一个基于LLM的多模态大模型（MLLM）。核心是“自我进化机制”：MLLM通过判断加入语音是否提升翻译质量（使用COMET分数）来自动筛选“正样本”，并利用这些正样本持续优化自身。
3. 与已有方法相比新在哪里：1）首次系统性地利用语音的韵律信息作为文本翻译的辅助模态，突破了图像模态的数据瓶颈。2）设计了一个自举式的自我进化训练框架，能自动利用合成数据增强模型性能，减少对人工标注数据的依赖。3）框架展现了优越的多语言可扩展性，支持28种语言。
4. 主要实验结果如何：在Multi30K多模态翻译基准上，SMT-9B模型取得了全新的SOTA，平均BLEU分数达52.0，超越所有基于图像的方法（最佳为49.9）。在FLORES-200通用翻译基准的108个翻译方向上，SMT-9B的平均spBLEU/COMET性能（31.1/87.7）超越了包括DeepSeek-V3.1在内的多个更大规模的文本单模态模型。消融实验证实，合成语音与真实语音对翻译性能的影响差异可忽略不计。
5. 实际意义是什么：为机器翻译，尤其是资源稀缺语言的翻译，提供了一种高效、可扩展的新范式。通过融合语音信息，模型能更好地利用韵律线索减少翻译中的“欠翻译”现象，提升翻译质量和鲁棒性。
6. 主要局限性是什么：1）框架的多语言覆盖能力最终受限于TTS模型所支持的语言数量。2）自我进化机制依赖翻译质量评估指标（COMET），其有效性与指标的准确性强相关。3）研究未充分探讨在更真实、带噪的语音输入场景下的鲁棒性。

---

