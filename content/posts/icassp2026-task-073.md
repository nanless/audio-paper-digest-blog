---
title: "ICASSP 2026 - 语音编码器 论文列表"
date: 2026-04-29
draft: false
tags: ["语音编码器"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 语音编码器 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音编码器

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Auden-Voice: General-Purpose Voice Encoder for Speech and La](/audio-paper-digest-blog/posts/2026-04-29-auden-voice-general-purpose-voice-encoder-for) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Auden-Voice: General-Purpose Voice Encoder for Speech and Language Understanding](/audio-paper-digest-blog/posts/2026-04-29-auden-voice-general-purpose-voice-encoder-for)

✅ **7.5/10** | 前25% | #语音编码器 | #多任务学习 | #说话人识别 #副语言理解

👥 **作者与机构**

- 第一作者：Mingyue Huo（University of Illinois Urbana-Champaign）
- 通讯作者：未说明（论文作者列表为三位，未明确标注通讯作者）
- 作者列表：Mingyue Huo（University of Illinois Urbana-Champaign）、Wei-Cheng Tseng（University of Texas at Austin）、Yiwen Shao（Tencent AI Lab, USA）、Hao Zhang（Tencent AI Lab, USA）、Dong Yu（Tencent AI Lab, USA）

#

💡 **毒舌点评**

这篇论文的亮点在于其系统性的消融研究，像做实验一样把ASR初始化、单任务监督、多任务学习、CLAP微调挨个试了一遍，用翔实的数据揭示了“多任务学习在平衡性上优于CLAP”这一实用结论，为后续设计指明了方向。但其短板也明显：多任务学习与CLAP的简单叠加（Enc 2.4）在多数任务上性能反而下降，说明二者存在冲突或优化目标不兼容，论文对此的分析和解决方案略显不足；此外，在LLM-QA上的验证较为初级，未能充分展现该编码器在驱动复杂推理方面的潜力。

#

🔗 **开源详情**

- 代码：提供了GitHub仓库链接（https://github.com/AudenAI/Auden/tree/main/examples/voice），论文明确表示将公开代码和训练配方。
- 模型权重：提到了“the resulting Auden-voice encoder”将开源，但未在正文中给出具体下载链接，推测包含在上述代码仓库中。
- 数据集：未提供新的或专有数据集。训练所用数据集（VoxCeleb2, CREMA-D, ParaSpeechCaps等）均为公开数据集，论文未提供获取方式的详细说明。
- Demo：未提及。
- 复现材料：提供了详细的训练超参数（学习率0.0045、优化器、数据增强SpecAugment）、模型规格（156M参数、768维输出）和评估设置。代码仓库承诺包含“training recipes”。
- 引用的开源项目：依赖的开源工具/模型包括：Zipformer [35]（基础架构）、Whisper [7]（对比基线）、wav2vec2.0 [39]（对比基线）、emotion2vec [26]（对比基线）、Wespeaker [25]（对比基线）、RoBERTa [42]（CLAP文本编码器）、PyAnnote 3.1 [40]（说话人分离评估）、Qwen2.5-7B-Instruct [45]（LLM-QA）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 问题：现有大型音频-语言模型（LALM）的声学编码器（如Whisper）主要为转录优化，对说话人身份和副语言信息（如情感、语调）理解不足，成为感知能力的瓶颈。
2. 方法：以Zipformer为骨干，系统研究了从ASR预训练出发，通过说话人识别（SID）与副语言分类的多任务学习，以及对比语言-音频预训练（CLAP）微调，来构建通用语音编码器。
3. 创新：不同于以往专注于单一任务的编码器或仅关注某一方面的统一模型，本文首次系统性地对比了不同训练策略（初始化、多任务、CLAP）对说话人、副语言及音频-语言任务的影响，并基于此提出了平衡两者能力的Auden-voice编码器。
4. 结果：
    - 初始化与监督（Table 2）：ASR预训练后，SID监督利于说话人任务，副语言监督利于属性任务；多任务学习（Enc 1.4）在Linear Probing平均准确率（93.8%）和Zero-shot平均分数（91.6）上达到最佳平衡。
    - CLAP影响（Table 3）：CLAP微调显著提升语音-文本检索性能（平均Recall@1提升31.1%），但会损害大部分Linear Probing和Zero-shot分类任务的性能（Enc 2.4相比Enc 1.4，平均LP Acc下降2.7%，ZS Avg下降35.5）。
    - LLM-QA（Table 4）：在冻结编码器和LLM的情况下，仅训练适配器，多任务编码器（Enc 1.4）在多个子任务上优于多任务+CLAP编码器（Enc 2.4），并与端到端模型基线具有竞争力。
5. 意义：证明了通过适当的多任务训练可以构建一个在说话人身份和副语言理解上平衡的通用语音编码器，并且能作为有效的声学前端与LLM集成。
6. 局限：CLAP微调与多任务学习目标存在冲突，未能实现“既...又...”的理想提升；在更复杂的LLM推理任务上的验证不足；训练数据规模与CLAP的成功案例（如视觉-语言）相比仍有差距。

#

---

