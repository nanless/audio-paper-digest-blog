---
title: "ICLR 2026 - 跨模态 论文列表"
date: 2026-05-04
draft: false
tags: ["跨模态"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 跨模态 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 跨模态

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TripleSumm: Adaptive Triple-Modality Fusion for Video Summar](/audio-paper-digest-blog/posts/2026-05-04-triplesumm-adaptive-triple-modality-fusion-for) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [TripleSumm: Adaptive Triple-Modality Fusion for Video Summarization](/audio-paper-digest-blog/posts/2026-05-04-triplesumm-adaptive-triple-modality-fusion-for)

🔥 **8.0/10** | 前25% | #跨模态 | #多模态模型 | #自适应融合 #视频摘要

👥 **作者与机构**

- 第一作者：Sumin Kim, Hyemin Jeong, Mingu Kang（论文注明“Equal contribution”，即同等贡献）
- 通讯作者：Yoori Oh†， Joonseok Lee†（论文注明“†Corresponding authors”）
- 作者列表：Sumin Kim（首尔国立大学 Seoul National University）， Hyemin Jeong（首尔国立大学）， Mingu Kang（首尔国立大学）， Yejin Kim（首尔国立大学）， Yoori Oh（首尔国立大学）， Joonseok Lee（首尔国立大学）

💡 **毒舌点评**

这篇论文在“让多模态融合更聪明”这件事上做得相当漂亮，特别是用一个中立的融合token逐帧动态分配模态权重的思路，优雅且有效。不过，它本质上还是在“特征融合-打分-选取”的传统框架下优化，对于如何从根本上突破“先打分再选取”这一范式、直接学习生成连贯摘要片段等更根本的问题，探讨得就不够深了。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/smkim37/TripleSumm。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文介绍了新构建的MoSu数据集，并说明其代码和数据集已开源（通过上述GitHub链接）。
- Demo：论文中未提及在线演示。
- 复现材料：论文附录（A.1节）详细列出了所有关键超参数（表I），包括嵌入维度、层数、窗口大小、学习率、批大小等。附录B详细说明了数据预处理步骤（视觉、文本、音频特征提取）、数据集划分（SumMe/TV的两种协议）、以及MoSu数据集的构建细节（包括Ground Truth处理、主题聚类方法）。这些信息非常充分，支持复现。
- 论文中引用的开源项目/模型：论文在方法描述和实验设置中引用了多个开源预训练模型，用于特征提取：
    - 视觉：CLIP (`openai/clip-vit-large-patch14`)
    - 文本：RoBERTa (`FacebookAI/roberta-base`)
    - 音频：Audio Spectrogram Transformer (AST, `MIT/ast-finetuned-audioset-10-10-0.4593`)
    - 图像生成（用于外部基准文本特征）：Qwen2.5-VL-7B-Instruct (`Qwen/Qwen2-VL-7B-Instruct`)

📌 **核心摘要**

1.  要解决什么问题：现有视频摘要方法大多仅依赖视觉信息，或使用静态、模态无关的融合策略，无法适应视频内容中模态重要性随时间动态变化的特性（例如，有时文本（对话）是关键，有时音视频（音乐、表演）更重要），导致摘要效果不理想。同时，缺乏大规模、提供完整三模态（视觉、文本、音频）特征和标注的基准数据集，限制了多模态视频摘要的研究。
2.  方法核心是什么：提出TripleSumm架构，包含两个核心组件：多尺度时间块（MST）和跨模态融合块（CMF）。MST通过分层滑动窗口自适应注意力机制，捕捉从局部到全局的时间依赖；CMF引入“融合token”，以该token为查询，通过跨注意力机制动态地、逐帧地加权融合视觉、文本和音频三种模态的信息。
3.  与已有方法相比新在哪里：a) 提出了自适应的帧级三模态融合机制，不同于以往静态或单模态优先的方法。b) 设计了分层的、由局部到全局的时间建模结构（MST），比固定窗口或全局注意力更高效且有效。c) 贡献了首个大规模、三模态视频摘要数据集MoSu（52， 678个视频），解决了数据瓶颈。
4.  主要实验结果如何：TripleSumm在四个基准上均达到SOTA。在MoSu上，其相关指标τ和ρ分别比次优模型高出约7.4%和9.8%，且参数量（1.37M）远小于多数强基线。在SumMe和TVSum（人工标注）上，即使标注仅基于视觉，其完整模型也显著优于所有基线。在长视频零样本测试中（平均70.4分钟），其τ和ρ分数也远超其他方法。消融实验验证了自适应融合、分层窗口和三模态输入的必要性。

关键实验结果表格（MoSu数据集）：

| 方法 | V | T | A | τ ↑ | ρ ↑ | mAP50 ↑ | mAP15 ↑ | Params ↓ | GFLOPs ↓ |
| :--- | :-: | :-: | :-: | :--- | :--- | :--- | :--- | :--- | :--- |
| CSTA (2024) | ✓ | | | 0.291 | 0.398 | 71.77 | 40.65 | 10.56M | 11.37G |
| UMT (2022) | ✓ | ✓ | | 0.239 | 0.334 | 68.83 | 36.73 | 4.66M | 1.39G |
| CFSum (2025) | ✓ | ✓ | ✓ | 0.277 | 0.374 | 70.97 | 38.20 | 19.83M | 8.52G |
| TripleSumm (Ours) | ✓ | ✓ | ✓ | 0.351 | 0.472 | 74.72 | 44.42 | 1.37M | 0.97G |

5.  实际意义是什么：该工作为多模态视频理解提供了一个高效且有效的融合框架，提升了自动生成视频摘要的质量。发布的MoSu数据集为后续研究提供了重要的数据基础。其自适应融合思想可推广到其他需要动态处理多模态流的任务。
6.  主要局限性是什么：a) 虽然提出了自适应融合，但融合策略（跨模态注意力）的可解释性仍有提升空间。b) 摘要生成仍依赖后处理的聚类与选择（0/1背包问题），非完全端到端。c) 评估指标主要基于帧级重要性与Ground Truth的相关性，对于最终摘要视频的连贯性、信息完整性等质量评估可能不够全面。

---

