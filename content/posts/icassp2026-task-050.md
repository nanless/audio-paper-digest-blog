---
title: "ICASSP 2026 - 视频片段检索 论文列表"
date: 2026-04-29
draft: false
tags: ["视频片段检索"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 视频片段检索 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 视频片段检索

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Audio-Visual Feature Fusion for Calibrating Relevance Scores](/audio-paper-digest-blog/posts/2026-04-29-audio-visual-feature-fusion-for-calibrating) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Audio-Visual Feature Fusion for Calibrating Relevance Scores of Video Moment Retrieval](/audio-paper-digest-blog/posts/2026-04-29-audio-visual-feature-fusion-for-calibrating)

✅ **7.0/10** | 前25% | #视频片段检索 | #晚期融合 | #重评分 #音视频

👥 **作者与机构**

- 第一作者：Takehiro Imamura（名古屋大学，LY Corporation）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Takehiro Imamura（名古屋大学, LY Corporation）、Tatsuya Komatsu（LY Corporation）、Hokuto Munakata（LY Corporation）、Tomoki Toda（名古屋大学）

#

💡 **毒舌点评**

这篇论文的亮点在于它精准地识别并试图解决DETR类模型在VMR中“定位准但排序乱”的痛点，提出的LARS模块设计清晰且与主流的早期融合形成完美互补。然而，其短板也相当明显：作为一项融合工作，创新性略显平淡（本质是一个轻量级的重评分网络），且未能与近年来可能更强的SOTA基线（如基于大型视频-语言模型的方法）进行对比，削弱了结论的冲击力。

#

📌 **核心摘要**

1. 要解决什么问题：现有的DETR类视频片段检索（VMR）模型存在两个主要问题：（1）突变的视觉场景容易导致片段边界误检；（2）由于DETR的条件独立输出和sigmoid分数校准问题，模型输出的片段相关性分数不可靠，导致排序不佳。
2. 方法核心是什么：提出“晚期融合重评分模块”（LARS）。它在VMR模型（如QD-DETR）输出候选片段后介入，提取每个候选片段对应的音视觉融合特征，计算这些特征与文本查询的对齐分数（基于余弦相似度），然后将该分数与VMR模型原始的前景/背景分类分数拼接，通过一个MLP进行最终的分数重校准。
3. 与已有方法相比新在哪里：传统方法多采用“早期特征融合”（EFF），在模型输入阶段就拼接音视觉特征，这有助于改善片段定位，但无法解决DETR固有的分数校准问题。LARS则是一种“晚期特征融合”策略，在输出端对分数进行精炼，与EFF作用于模型的不同阶段，互为补充。
4. 主要实验结果如何：
    - 在QVHighlights、HiREST和Charades-Audiomatter三个基准上，单独使用LARS或单独使用EFF均能提升性能（如mAP avg.和R1@0.7）。
    - 两者结合（EFF+LARS）能取得最佳性能，证实了互补性。例如在QVHighlights上，CLIP+Slowfast+PANNs特征下，仅EFF的mAP avg.为41.83，仅LARS为42.44，结合后为42.57。
    - 消融实验显示，即使不使用音频特征，LARS也能提升性能，证明其对DETR分数的校准能力。
    - 定性分析表明，EFF主要改进了定位精度（图2），而LARS主要提升了分数可靠性（图3）。
5. 实际意义是什么：为VMR系统提供了一个即插即用的后处理模块，能有效利用音频信息来提升检索结果的排序质量，对于构建更精准的视频搜索、推荐和编辑工具有实用价值。
6. 主要局限性是什么：创新相对有限，是一个针对性很强的工程化改进。实验中未与当前最前沿（如基于大型多模态语言模型）的VMR方法进行对比。LARS的计算开销和其带来的性能提升之间的权衡未被充分讨论。

---

