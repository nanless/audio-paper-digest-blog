---
title: "ICLR 2026 - 语音翻译 论文列表"
date: 2026-05-04
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
| 🥇 | [UniSS: Unified Expressive Speech-to-Speech Translation with ](/audio-paper-digest-blog/posts/2026-05-04-uniss-unified-expressive-speech-to-speech) | 8.0分 | 前25% |

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

