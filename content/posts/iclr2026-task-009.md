---
title: "ICLR 2026 - 机器翻译 论文列表"
date: 2026-05-03
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
| 🥇 | [Scalable Multilingual Multimodal Machine Translation with Sp](/audio-paper-digest-blog/posts/2026-05-03-scalable-multilingual-multimodal-machine) | 9.0分 | 前10% |

---

## 📋 论文详情

### 🥇 [Scalable Multilingual Multimodal Machine Translation with Speech-Text Fusion](/audio-paper-digest-blog/posts/2026-05-03-scalable-multilingual-multimodal-machine)

🔥 **9.0/10** | 前10% | #机器翻译 | #多模态模型 #语音合成 | #多模态模型 #语音合成

👥 **作者与机构**

- 第一作者：Yexing Du（哈尔滨工业大学；鹏城实验室）
- 通讯作者：Youcheng Pan（鹏城实验室，panych@pcl.ac.cn）、Yang Xiang（鹏城实验室，xiangy@pcl.ac.cn）、Ming Liu（哈尔滨工业大学，mliu@ir.hit.edu.cn）
- 作者列表：Yexing Du（哈尔滨工业大学；鹏城实验室）、Youcheng Pan（鹏城实验室）、Zekun Wang（哈尔滨工业大学）、Zheng Chu（哈尔滨工业大学）、Yichong Huang（哈尔滨工业大学）、Kaiyuan Liu（哈尔滨工业大学；鹏城实验室）、Bo Yang（鹏城实验室）、Yang Xiang（鹏城实验室）、Ming Liu（哈尔滨工业大学；鹏城实验室）、Bing Qin（哈尔滨工业大学；鹏城实验室）

💡 **毒舌点评**

亮点在于用语音替代图像，巧妙解决了模态数据稀缺的瓶颈，并设计了自进化机制让模型“自己教自己”，减少了对人工标注的依赖。短板是论文声称模型对长文本合成语音的噪声有鲁棒性，但主要评估集中在较短文本（Multi30K平均59.3字符），对于真正长文本（如WMT24++中>200字符部分）的深入鲁棒性分析和应对策略讨论不足。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/yxduir/LLM-SRT。
- 模型权重：论文中提到“The code and models are released”，表明模型权重也已开源。
- 数据集：实验使用的Multi30K， FLORES-200， WMT24++， CoVoST-2， FLEURS， Common Voice等均为公开数据集，论文提供了获取指引。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了训练细节（硬件、优化器、学习率策略）、模型参数量、关键超参数（如LoRA设置、Q-Former配置）以及消融研究细节，复现信息较充分。
- 论文中引用的开源项目：主要依赖Whisper（语音编码器）， CosyVoice2（TTS模型）， GemmaX2-28-9B（LLM骨干）。

📌 **核心摘要**

这篇论文旨在解决现有图像引导的多模态机器翻译（MMT）方法面临的多语言数据稀缺的瓶颈问题。核心方法是提出一种语音引导机器翻译（SMT）框架，该框架将文本转语音（TTS）模型生成的合成语音与文本融合作为多模态大语言模型（MLLM）的输入，并设计了一套自进化机制，使模型能自主生成、筛选（基于翻译质量打分）并利用合成数据进行迭代优化。与传统图像方法相比，其新意在于利用语音作为辅助模态，语音具有与文本的天然对齐性和丰富的数据资源，从而支持更广泛的多语言覆盖。主要实验结果显示，该框架在Multi30K多模态机器翻译基准上取得了新的最佳成绩，平均BLEU分数达到52.0，超越了所有基于真实或合成图像的方法。在通用机器翻译基准FLORES-200上，其在108个翻译方向上也达到了最佳平均性能（如eng→xx方向平均spBLEU/COMET为40.4/89.5）。该工作的实际意义在于为低资源机器翻译提供了一种新颖的、数据可扩展的多模态增强方案，并证明了小参数模型通过多模态学习可媲美甚至超越大参数纯文本模型。主要局限性是该框架的多语言覆盖范围受限于现有开源TTS模型所支持的语言数量。

---

