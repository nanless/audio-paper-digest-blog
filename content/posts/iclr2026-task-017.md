---
title: "ICLR 2026 - 视频摘要 论文列表"
date: 2026-05-03
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
| 🥇 | [TripleSumm: Adaptive Triple-Modality Fusion for Video Summar](/audio-paper-digest-blog/posts/2026-05-03-triplesumm-adaptive-triple-modality-fusion-for) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TripleSumm: Adaptive Triple-Modality Fusion for Video Summarization](/audio-paper-digest-blog/posts/2026-05-03-triplesumm-adaptive-triple-modality-fusion-for)

🔥 **8.5/10** | 前25% | #视频摘要 | #模态融合 | #多模态模型 #数据集

👥 **作者与机构**

- 第一作者：Sumin Kim、Hyemin Jeong、Mingu Kang（共同第一作者，未明确排序）
- 通讯作者：Yoori Oh、Joonseok Lee
- 作者列表：Sumin Kim、Hyemin Jeong、Mingu Kang、Yejin Kim、Yoori Oh、Joonseok Lee（均来自首尔国立大学 Seoul National University）

💡 **毒舌点评**

本文核心亮点在于提出的“动态加权融合”机制，通过一个中立的融合令牌让模型自主学习在每个视频帧中为视觉、文本和音频分配重要性，这比简单拼接或静态注意力更符合多模态信息的流变特性。然而，论文对音频模态的利用仍显初级，仅用了预训练的AST编码器特征，在消融实验中也显示音频单独效果最弱，如何更深入挖掘音频中的韵律、环境声等信息，以真正发挥其“三模态”的全部潜力，还有探索空间。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/smkim37/TripleSumm。
- 模型权重：未明确提及是否公开预训练权重，但代码仓库通常会包含。
- 数据集：MoSu数据集已公开，可通过论文中提供的链接获取。
- Demo：论文中未提及在线演示。
- 复现材料：附录中提供了非常详细的模型超参数（表I）、数据预处理细节（B.4）、评估协议（B.5）、架构消融（C节）等，复现信息充分。
- 引用的开源项目：依赖的预训练模型包括CLIP、RoBERTa、AST。用于外部数据集文本生成的有Qwen2.5-VL-7B-Instruct。

📌 **核心摘要**

1.  要解决的问题：现有视频摘要方法多依赖视觉单模态或采用静态/固定的多模态融合策略，无法适应视频内容中各模态重要性随时动态变化的特点，导致摘要质量受限。
2.  方法核心：提出TripleSumm模型，核心是设计了多尺度时间块（MST）和跨模态融合块（CMF）的分层“精炼-融合”架构。MST通过可变窗口的自注意力捕获不同时间尺度的模态内时序依赖；CMF则使用一个中立的“融合令牌”作为查询，通过交叉注意力自适应地从三个模态中聚合最相关的信息。
3.  与已有方法相比新在哪里：首次提出在视频摘要任务中进行帧级、自适应的三模态（视觉、文本、音频）加权融合，动态判断当前帧应主要依赖哪个模态。同时，为解决数据瓶颈，构建并发布了首个大规模、野外、提供三模态特征的视频摘要数据集MoSu。
4.  主要实验结果：在MoSu、Mr. HiSum、SumMe和TVSum四个基准上均取得SOTA。在MoSu数据集上，TripleSumm在所有指标上显著超越现有方法，例如Kendall’s τ达到0.351（最强基线为0.277），且模型参数量仅1.37M，效率极高。消融实验验证了动态融合、多尺度窗口及每个组件的有效性。
5.  实际意义：推动了多模态视频理解的发展，使模型能更智能地利用视频中的多种信息流（如音乐视频中的音频、教学视频中的文本）。新发布的MoSu数据集为后续研究提供了坚实的评测基础。
6.  主要局限性：模型在音频模态上的特征表示和利用方式相对简单，未能充分挖掘音频的深层语义或声学特性。此外，最终的摘要生成仍依赖后处理的分割与选择，而非端到端的片段生成。

---

