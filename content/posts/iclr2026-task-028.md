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
| 🥇 | [UniSS: Unified Expressive Speech-to-Speech Translation with ](/audio-paper-digest-blog/posts/2026-05-04-uniss-unified-expressive-speech-to-speech) | 8.0分 | 前25% |
| 🥈 | [Scalable Multilingual Multimodal Machine Translation with Sp](/audio-paper-digest-blog/posts/2026-05-04-scalable-multilingual-multimodal-machine) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [UniSS: Unified Expressive Speech-to-Speech Translation with Your Voice](/audio-paper-digest-blog/posts/2026-05-04-uniss-unified-expressive-speech-to-speech)

🔥 **8.0/10** | 前25% | #语音翻译 | #大语言模型 | #自回归模型 #端到端

👥 **作者与机构**

- 第一作者：Sitong Cheng（香港科技大学）
- 通讯作者：Yike Guo（香港科技大学），Wei Xue（香港科技大学）
- 作者列表：Sitong Cheng（香港科技大学），Weizhen Bian（香港科技大学），Xinsheng Wang（Soul AI Lab），Ruibin Yuan（香港科技大学），Jianyi Chen（香港科技大学），Shunshun Yin（Soul AI Lab），Yike Guo（香港科技大学），Wei Xue（香港科技大学）

💡 **毒舌点评**

这篇论文的亮点在于它用一个极其简洁的单阶段框架和一个巧妙的跨模态思维链提示，成功“借用”了现成文本大语言模型的翻译能力来搞定复杂的语音翻译任务，并发布了大规模高质量数据集。但短板也很明显：目前只支持中英两个语言对，且核心代码和模型权重都未开源，大大限制了其即时影响力和可复现性验证。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：论文构建并发布了UniST数据集，声称包含44.8k小时数据，并提供了项目网站链接（https://cmots.github.io/uniss-demo/），但未明确说明数据集的具体获取方式或是否已公开。
- Demo：提供了音频样例网站（https://cmots.github.io/uniss-demo/）。
- 复现材料：附录B提供了详细的训练配置（各阶段数据、学习率、批大小、轮数），附录C详细描述了所有评估指标的实现，附录E描述了数据集构建流程。超参数设置完整。
- 论文中引用的开源项目：Qwen2.5-1.5B-Instruct (骨干LLM), BiCodec (语音分词器), SparkTTS (数据集合成), GLM-4 (语言分词器), Paraformer, Whisper, CosyVoice 2, SeamlessM4T, NLLB-200, Megatron-LM, vLLM, webMUSHRA。

📌 **核心摘要**

1.  问题：当前富有表现力的语音到语音翻译（S2ST）面临三大挑战：保留说话人风格和情感的配对语音数据稀缺、多阶段处理流程复杂、以及难以有效利用大型语言模型（LLM）已有的文本翻译能力。
2.  方法核心：论文提出了UniSS，一个单阶段的S2ST框架。它基于预训练的文本LLM（Qwen2.5-1.5B-Instruct）构建，通过精心设计的三重语音分词器（语言、说话人、语义）将语音和文本统一为token序列。核心创新在于跨模态思维链（CoT）提示，引导模型在单次推理中依次执行“听（转录）- 说（翻译）- 言（合成语音）”的步骤，从而将LLM强大的文本翻译能力迁移到语音领域。
3.  与已有方法相比新在哪里：
    *   架构简化：相比于复杂的多模型级联或双阶段生成系统，UniSS采用单一自回归模型完成所有任务，消除了架构复杂性和错误累积。
    *   能力迁移：不同于将LLM仅视为通用序列转换器，UniSS通过显式的CoT提示，主动利用LLM内部预训练的文本翻译知识。
    *   统一建模：将语音的内容（语言token）、风格（说话人token）和生成目标（语义token）在同一个LLM框架内统一建模。
4.  主要实验结果：
    *   翻译保真度：在CVSS-T测试集上，UniSS (Q) 模式取得 32.20 (EN-ZH) / 24.28 (ZH-EN) 的 Speech-BLEU，显著超越所有基线模型。
    *   时长一致性：UniSS (Q) 在SLC 0.2指标上达到 0.98 / 0.87，优于最强基线Seamless-Ex的 0.68 / 0.52。
    *   语音质量：UTMOS分数为 3.76 / 3.86，与顶级级联系统持平并超越所有端到端系统。
    *   情感与说话人保持：主观MOS评估显示，UniSS (Q) 在情感相似度(4.51)、说话人相似度(4.42)和自然度(4.45)上均取得最佳或接近最佳的成绩。
    *   数据集：发布了包含 44.8k 小时的 UniST 中英 S2ST 数据集。
5.  实际意义：UniSS为构建下一代富有表现力的S2ST系统提供了一个更简单、更有效的新范式，展示了如何将现有文本大模型的能力高效、低成本地扩展到语音领域。
6.  主要局限性：
    *   语言支持：目前仅在中英双语上进行训练和评估，多语言扩展是未来方向。
    *   分词器设计：使用了来自不同来源的三套语音分词器，导致词汇表膨胀，未来需要统一。
    *   开源缺失：论文未提供代码、模型权重或具体的训练数据集下载链接，复现依赖于作者未来可能的开源。

---

### 🥈 [Scalable Multilingual Multimodal Machine Translation with Speech-Text Fusion](/audio-paper-digest-blog/posts/2026-05-04-scalable-multilingual-multimodal-machine)

✅ **7.5/10** | 前25% | #语音翻译 | #多模态模型 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Yexing Du（哈尔滨工业大学，鹏城实验室）
- 通讯作者：Youcheng Pan（鹏城实验室），Yang Xiang（鹏城实验室），Ming Liu（哈尔滨工业大学，鹏城实验室）
- 作者列表：Yexing Du（哈尔滨工业大学，鹏城实验室），Youcheng Pan（鹏城实验室），Zekun Wang（哈尔滨工业大学），Zheng Chu（哈尔滨工业大学），Yichong Huang（哈尔滨工业大学），Kaiyuan Liu（哈尔滨工业大学，鹏城实验室），Bo Yang（鹏城实验室），Yang Xiang（鹏城实验室），Ming Liu（哈尔滨工业大学，鹏城实验室），Bing Qin（哈尔滨工业大学，鹏城实验室）

#

💡 **毒舌点评**

这篇论文的实验结果非常亮眼，在多个公开基准上刷新了SOTA，证明了用“语音”代替“图像”作为辅助模态是解决多模态翻译数据瓶颈的一条可行路径，特别是自进化机制对低资源语言的提升很实在。不过，理论层面对“为什么语音韵律信息能帮助翻译”的解释稍显表面，主要依赖“减少漏译”的案例分析，缺乏更普适的机理探讨。

#

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/yxduir/LLM-SRT。
- 模型权重：论文中提及“the code and models are released”，表明公开了模型权重。
- 数据集：使用了多个公开数据集（Multi30K, FLORES-200, WMT24++, CoVoST-2, FLEURS等），论文中未提及创建新数据集。
- Demo：论文中未提及提供��线演示。
- 复现材料：论文详细提供了训练数据设置、模型架构参数、训练策略、超参数、评估指标和硬件信息，复现材料充分。
- 引用的开源项目：论文依赖的主要开源项目/工具包括：Whisper（语音编码器）、CosyVoice2（TTS模型）、GemmaX2-28-9B（LLM）、Q-Former（来自BLIP-2）、vLLM（推理引擎）、sacrebleu（计算BLEU）、COMET（评估指标）。

📌 **核心摘要**

1.  问题：传统多模态机器翻译（MMT）依赖图像，但多语言图像-文本对稀缺，限制了模型的可扩展性和多语言覆盖能力。
2.  方法核心：提出语音引导的机器翻译（SMT）框架。将语音（由TTS生成）与文本作为融合输入，送入多模态大语言模型（MLLM）。核心是一个自进化机制，让模型自主生成合成语音，通过对比纯文本翻译与语音-文本融合翻译的质量，筛选出对翻译有提升的“正样本”，并持续训练MLLM以自我增强。
3.  创新点：
    - 模态替换：首次大规模验证将语音（富含韵律线索）作为辅助模态，克服了图像数据稀缺的瓶颈，支持更多语言。
    - 自进化闭环：设计了“经验获取-经验精炼-模型更新-模型评估”的自驱动循环，利用合成数据迭代优化模型，尤其提升低资源语言性能。
    - 多语言可扩展性：基于强大的TTS和MLLM，框架天然支持多语言，在108个翻译方向上取得了平均SOTA性能。
4.  主要实验结果：
    - 在Multi30K多模态翻译基准上，SMT-9B模型在所有测试集上的BLEU和COMET分数均大幅超越所有传统和基于合成图像的MMT模型，取得新SOTA。
    - 在通用机器翻译基准FLORES-200上，SMT-9B在108个翻译方向（eng→27, jpn→27, kor→27, cmn→27）的平均spBLEU和COMET分数超越了DeepSeek-V3-671B、Gemma3-27B等多个远大于自身参数规模的模型，达到SOTA水平。
    - 消融实验证实，合成语音与真实语音对翻译质量影响可忽略；自进化机制对低资源语言（如高棉语、老挝语、缅甸语）的COMET分数有显著提升（约+1.7到+2.0）。
5.  实际意义：为突破多模态机器翻译的数据限制提供了新方案，利用语音的普遍可获得性，构建可扩展的多语言多模态翻译系统，在跨语言沟通和低资源语言服务方面有潜在应用价值。
6.  主要局限性：框架的可扩展性最终受限于TTS模型的语言覆盖能力。虽然当前支持28种语言，但若TTS无法合成某种语言的语音，则该语言无法被框架处理。

---

