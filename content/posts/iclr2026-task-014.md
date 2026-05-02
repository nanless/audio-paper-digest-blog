---
title: "ICLR 2026 - 视频摘要 论文列表"
date: 2026-05-02
draft: false
tags: ["视频摘要"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 视频摘要 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 视频摘要

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TripleSumm: Adaptive Triple-Modality Fusion for Video Summar](/audio-paper-digest-blog/posts/2026-05-02-triplesumm-adaptive-triple-modality-fusion-for) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [TripleSumm: Adaptive Triple-Modality Fusion for Video Summarization](/audio-paper-digest-blog/posts/2026-05-02-triplesumm-adaptive-triple-modality-fusion-for)

🔥 **8.0/10** | 前25% | #视频摘要 | #多模态模型 | #自适应融合 #基准测试

👥 **作者与机构**

- 第一作者：Sumin Kim（首尔国立大学）[论文中注明与Hyemin Jeong, Mingu Kang并列第一作者]
- 通讯作者：Yoori Oh, Joonseok Lee（首尔国立大学）
- 作者列表：Sumin Kim（首尔国立大学）、Hyemin Jeong（首尔国立大学）、Mingu Kang（首尔国立大学）、Yejin Kim（首尔国立大学）、Yoori Oh（首尔国立大学）、Joonseok Lee（首尔国立大学）

💡 **毒舌点评**

亮点在于直击了现有视频摘要模型“静态融合”或“忽视音频/文本”的痛点，并用一个设计巧妙的“融合令牌”自适应地解决了这个问题，效果立竿见影，同时构建了首个大规模三模态数据集，功在千秋。短板是其核心框架（时间窗口注意力+跨模态注意力）并未跳出Transformer的范畴，创新更多是组合与适配，且“先打分再选段”的两阶段范式本身限制了端到端优化的可能，论文也在结论中坦承了这一局限。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：`https://github.com/smkim37/TripleSumm`。
- 模型权重：未在论文正文中明确提及是否公开预训练模型权重。
- 数据集：论文明确介绍了新数据集MoSu，并提供了数据获取信息（基于YouTube-8M，遵循特定筛选标准），论文中未明确给出直接下载链接，但提供了获取方法。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详细的超参数表（表I）、训练硬件、数据预处理流程（附录B.4）、评估协议（附录B.5）以及完整的消融研究，复现信息非常充分。
- 引用的开源项目：依赖的主要预训练模型和库包括：CLIP (视觉编码器), RoBERTa (文本编码器), Audio Spectrogram Transformer (AST， 音频编码器), Qwen2.5-VL-7B-Instruct (用于外部数据集生成文本描述), SwiGLU (FFN层), KTS (视频分割)。

📌 **核心摘要**

本文针对视频摘要任务中现有方法无法动态、自适应地融合视觉、文本和音频模态信息的问题，提出了TripleSumm模型。该模型通过多尺度时间块（MST）在每一模态内部进行时序建模，并通过跨模态融合块（CMF）利用一个“融合令牌”作为中立查询，在每一帧动态选择和加权最相关的模态信息。与以往方法相比，其核心创新在于实现了帧级别的、自适应的模态重要性评估。为解决多模态训练数据稀缺的问题，论文还引入了首个大规模三模态视频摘要数据集MoSu，包含52,678个视频及其观看回放统计作为ground-truth。主要实验结果显示，TripleSumm在MoSu、Mr. HiSum、SumMe和TVSum四个基准上均显著超越了现有方法，例如在MoSu上，其Kendall‘s τ（0.351）和Spearman‘s ρ（0.472）大幅领先于此前最优的CFSum（0.277， 0.374）。该工作的实际意义在于提供了一个高效且可扩展的多模态视频摘要解决方案，并为未来研究奠定了可靠的大规模数据基础。主要局限性在于其摘要生成仍遵循“帧评分-片段选择”的传统两阶段流程，而非直接生成摘要片段，且模型架构的创新性主要体现在模块组合而非底层机制。

---

