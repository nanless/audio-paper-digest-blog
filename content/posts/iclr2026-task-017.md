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
| 🥇 | [TripleSumm: Adaptive Triple-Modality Fusion for Video Summar](/audio-paper-digest-blog/posts/2026-05-03-triplesumm-adaptive-triple-modality-fusion-for) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [TripleSumm: Adaptive Triple-Modality Fusion for Video Summarization](/audio-paper-digest-blog/posts/2026-05-03-triplesumm-adaptive-triple-modality-fusion-for)

🔥 **8.0/10** | 前25% | #视频摘要 | #注意力机制 | #多模态模型 #数据集

👥 **作者与机构**

- 第一作者：未说明（论文中标注了“∗Equal contribution”给前三位作者）
- 通讯作者：Yoori Oh†（首尔大学）， Joonseok Lee†（首尔大学）
- 作者列表：Sumin Kim（首尔大学）， Hyemin Jeong（首尔大学）， Mingu Kang（首尔大学）， Yejin Kim（首尔大学）， Yoori Oh（首尔大学）， Joonseok Lee（首尔大学）

💡 **毒舌点评**

这篇论文最大的亮点在于“基建”贡献——提出了首个大规模、高质量的三模态视频摘要基准数据集MoSu，这对社区价值甚至超过了其模型本身；然而，其核心融合机制（基于查询的跨模态注意力）在思想上并不新颖，且依赖于YouTube“最常回放”统计数据作为监督信号，可能引入系统性偏差。

🔗 **开源详情**

- 代码：论文在摘要中提供了代码仓库链接：https://github.com/smkim37/TripleSumm。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文引入并开源了MoSu数据集，并通过同一GitHub链接提供。
- Demo：论文中未提及在线演示。
- 复现材料：论文在正文和附录中提供了极其详细的复现指南，包括完整的超参数设置（表I）、模型架构描述、数据预处理每一步的工具和参数、训练策略、以及所有评估实验的具体划分和协议。
- 论文中引用的开源项目：论文依赖或提及了以下开源项目/模型：
    - 特征提取：CLIP (视觉), RoBERTa (文本), Audio Spectrogram Transformer (AST) (音频)。
    - 数据处理：YouTube-8M数据集。
    - 基线模型：VASNet, PGL-SUM, CSTA, A2Summ, SSPVS, Joint-VA, UMT, CFSum等。
    - 图像描述生成（用于外部基准）：Qwen2.5-VL-7B-Instruct。
- 开源计划：论文中明确提供了开源链接，因此不存在“未提及开源计划”的情况。

📌 **核心摘要**

1.  解决的问题：现有视频摘要方法大多仅使用视觉模态，或使用静态、模态无关的融合策略，无法动态适应视频中不同帧处各模态重要性的变化。
2.  方法核心：提出TripleSumm模型，包含两个关键组件：(1) 多尺度时间块（MST）：采用可变窗口大小的滑动窗口自注意力，逐层从局部到全局捕获时间依赖；(2) 跨模态融合块（CMF）：以中立的融合令牌为查询，通过注意力机制自适应地为每个时间步的视觉、文本、音频特征分配权重并融合。
3.  新意所在：相比先前使用固定融合或偏向视觉模态的方法，TripleSumm在帧级别动态评估各模态的重要性。此外，引入了首个提供完整三模态特征和大规模标注的视频摘要数据集MoSu。
4.  主要实验结果：TripleSumm在MoSu数据集上显著超越所有基线，例如在Kendall’s τ上达到0.351，高于最强基线CFSum的0.277。在Mr. HiSum、SumMe、TVSum等外部基准上也达到SOTA。消融实验证明MST和CMF模块及动态融合机制的有效性。具体对比结果见下表。

| 方法 | 模态 (V/T/A) | τ ↑ | ρ ↑ | mAP50 ↑ | mAP15 ↑ | 参数量 ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| CFSum | V, T, A | 0.277 | 0.374 | 70.97 | 38.20 | 19.83M |
| TripleSumm (Ours) | V, T, A | 0.351 | 0.472 | 74.72 | 44.42 | 1.37M |

![表2: MoSu数据集上的性能对比](icassp-img://x74NsHGywD/3.png)

5.  实际意义：为多模态视频摘要提供了一个强效模型和一个可靠的大规模评测基准，推动了视频理解向更综合的多模态方向发展。
6.  主要局限性：模型性能在完全缺失某一模态时会下降（虽然比偏向单一模态的基线更鲁棒）；数据集MoSu的监督信号来源于用户回放行为，可能不完美反映人类对内容“重要性”的判断；模型目前仍遵循“打分-分割-选择”的流程，而非端到端的摘要生成。

---

