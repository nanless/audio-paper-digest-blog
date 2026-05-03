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
| 🥇 | [TripleSumm: Adaptive Triple-Modality Fusion for Video Summar](/audio-paper-digest-blog/posts/2026-05-03-triplesumm-adaptive-triple-modality-fusion-for) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TripleSumm: Adaptive Triple-Modality Fusion for Video Summarization](/audio-paper-digest-blog/posts/2026-05-03-triplesumm-adaptive-triple-modality-fusion-for)

✅ **7.5/10** | 前25% | #视频摘要 | #多模态模型 | #音视频 #跨模态

👥 **作者与机构**

- 第一作者：Sumin Kim (首尔大学)
- 通讯作者：Yoori Oh (首尔大学)， Joonseok Lee (首尔大学)
- 作者列表：Sumin Kim（首尔大学）、Hyemin Jeong（首尔大学）、Mingu Kang（首尔大学）、Yejin Kim（首尔大学）、Yoori Oh（首尔大学）、Joonseok Lee（首尔大学）

💡 **毒舌点评**

亮点是作者不仅提出了一个设计精巧、性能领先的融合模型（TripleSumm），还“顺手”解决了一个领域痛点——构建了第一个真正意义上大规模、三模态对齐的视频摘要基准数据集MoSu，这对后续研究是重大贡献。短板在于，其核心的“自适应”融合虽然有效且经过消融验证，但本质上仍是基于注意力权重的软选择，缺乏对模态间更深层次语义依赖关系的建模探索。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接 `https://github.com/smkim37/TripleSumm`。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：引入了新的大规模三模态数据集MoSu，并说明代码和数据集均已开源，获取方式指向上述GitHub仓库。
- Demo：论文中未提及在线演示。
- 复现材料：论文附录提供了极其详细的实现细节，包括完整的超参数表（表I）、数据预处理步骤、摘要生成流程、以及详细的消融实验设置，复现基础非常扎实。
- 引用的开源项目/模型：论文使用了多个开源预训练模型进行特征提取，包括：视觉- CLIP (`openai/clip-vit-large-patch14`)、文本- RoBERTa (`FacebookAI/roberta-base`)、音频- AST (`MIT/ast-finetuned-audioset-10-10-0.4593`)、以及用于生成文本描述的VL模型 `Qwen/Qwen2-VL-7B-Instruct`。

📌 **核心摘要**

1. 问题：现有视频摘要方法多采用静态或单一模态融合策略，无法动态捕捉视频内容中不同模态（视觉、文本、音频）重要性随时间变化的特点，且缺乏全面的三模态基准数据集。
2. 方法核心：提出TripleSumm模型，其核心包含两个组件：多尺度时间模块（MST）和跨模态融合模块（CMF）。MST采用层级滑动窗口注意力捕获不同时间尺度的依赖关系；CMF则以一个中立的“融合token”作为查询，通过交叉注意力动态地对同一时间步的三种模态特征进行加权融合。
3. 新意：与已有简单或静态的融合方法不同，TripleSumm实现了帧级别的自适应模态权重学习。此外，论文发布了首个大规模三模态视频摘要数据集MoSu（52,678个视频，涵盖视觉、文本、音频），解决了该领域长期的数据瓶颈。
4. 主要结果：在包括MoSu在内的四个基准测试中取得SOTA性能。在MoSu上，其Kendall’s τ (0.351) 和 Spearman’s ρ (0.472) 显著超越最强基线CFSum (0.277, 0.374)。消融实验证实了自适应融合（Dynamic）优于静态（Static）和全局（Global）融合策略，以及多模态输入优于单/双模态。模型参数量（1.37M）远小于多数基线，计算效率高。
5. 实际意义：为海量短视频内容的高效浏览、长视频快速理解提供了更优解决方案，尤其适用于音乐、教程、体育等音频或文本信息关键的场景。新数据集为多模态视频理解研究奠定了基础。
6. 主要局限性：论文遵循传统的“帧重要性评分-分割-选择”流程，而非端到端生成摘要视频片段，这在一定程度上限制了摘要的连贯性和创造性。此外，模型的融合机制仍偏向于数据驱动的注意力加权，缺乏显式的、可解释的模态间逻辑推理。

---

