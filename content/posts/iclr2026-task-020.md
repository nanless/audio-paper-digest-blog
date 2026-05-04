---
title: "ICLR 2026 - 视频摘要 论文列表"
date: 2026-05-04
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
| 🥇 | [TripleSumm: Adaptive Triple-Modality Fusion for Video Summar](/audio-paper-digest-blog/posts/2026-05-04-triplesumm-adaptive-triple-modality-fusion-for) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TripleSumm: Adaptive Triple-Modality Fusion for Video Summarization](/audio-paper-digest-blog/posts/2026-05-04-triplesumm-adaptive-triple-modality-fusion-for)

🔥 **8.5/10** | 前25% | #视频摘要 | #多模态模型 | #音视频 #自注意力

👥 **作者与机构**

- 第一作者：Sumin Kim（首尔大学）， Hyemin Jeong（首尔大学）， Mingu Kang（首尔大学）（表示同等贡献）
- 通讯作者：Yoori Oh†（首尔大学）， Joonseok Lee†（首尔大学）（†表示通讯作者）
- 作者列表：Sumin Kim（首尔大学）， Hyemin Jeong（首尔大学）， Mingu Kang（首尔大学）， Yejin Kim（首尔大学）， Yoori Oh（首尔大学）， Joonseok Lee（首尔大学）

💡 **毒舌点评**

论文提出了一个设计精巧的多模态视频摘要模型TripleSumm，其自适应帧级融合机制和引入的大规模三模态数据集MoSu是扎实的贡献，显著推动了视频摘要领域的多模态研究。然而，其核心创新点（自适应注意力融合）在多模态学习中并非前所未见，且在标准小数据集（SumMe/TVSum）上的绝对性能提升幅度有限，新数据集的“Most Replayed”监督信号本身的普适性也有待更广泛验证。

🔗 **开源详情**

- 代码：论文提供了GitHub代码仓库链接：`https://github.com/smkim37/TripleSumm`。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：MoSu数据集已公开，论文提供了获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录中提供了非常详细的超参数设置（表I）、摘要生成算法、数据预处理细节、评估协议说明以及各种消融实验的配置，复现信息充分。
- 论文中引用的开源项目：依赖了预训练模型CLIP、RoBERTa、AST以及用于生成文本描述的Qwen2.5-VL。

📌 **核心摘要**

1. 要解决什么问题？ 现有视频摘要方法通常采用静态或模态无关的融合策略，无法动态捕捉不同视频帧中视觉、文本和音频模态重要性的变化，导致理解复杂视频能力不足。同时，缺乏包含三模态特征的大规模基准数据集也阻碍了该领域的发展。
2. 方法核心是什么？ 论文提出了TripleSumm架构，其核心包括：a) 多尺度时间块，采用层次化的滑动窗口自注意力，从局部到全局捕捉视频的时序模式；b) 跨模态融合块，使用一个中性的“融合令牌”作为查询，动态地对三种模态的特征进行加权聚合，实现帧级别的自适应融合。
3. 与已有方法相比新在哪里？ 相比于现有模态静态或简单融合的方法，TripleSumm在帧级别动态地学习并分配各模态的权重。此外，论文首次提出了大规模、三模态的视频摘要基准数据集MoSu。
4. 主要实验结果如何？ TripleSumm在四个基准测试上均达到了SOTA性能。在提出的MoSu数据集上，其Kendall‘s τ和Spearman’s ρ分别达到0.351和0.472，大幅超越次优方法CFSum（0.277/0.374）。在Mr. HiSum，SumMe（TVT）和TVSum（TVT）数据集上，其全模型版本也均取得最优或并列最优的相关性指标。消融实验证实了三模态输入、层次化窗口和自适应融合机制的有效性。
5. 实际意义是什么？ 该工作推动了视频摘要向更符合人类多模态感知的方向发展，提出的MoSu数据集和TripleSumm模型为未来研究提供了可靠的基础和强大的基线，有助于从海量视频中高效提取关键信息。
6. 主要局限性是什么？ 论文指出，当前遵循的“帧重要性评分-分割-选择”流程并非端到端可训练，未来可探索直接学习选择连贯摘要片段的端到端模型。此外，数据集的监督信号基于聚合的“Most Replayed”数据，可能无法完全反映个体或多样化的用户需求。

---

