---
title: "ICASSP 2026 - 视频到音频生成 论文列表"
date: 2026-04-29
draft: false
tags: ["视频到音频生成"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 视频到音频生成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 视频到音频生成

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [V2A-DPO: Omni-Preference Optimization for Video-To-Audio Gen](/audio-paper-digest-blog/posts/2026-04-29-v2a-dpo-omni-preference-optimization-for-video-to) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [V2A-DPO: Omni-Preference Optimization for Video-To-Audio Generation](/audio-paper-digest-blog/posts/2026-04-29-v2a-dpo-omni-preference-optimization-for-video-to)

✅ **7.5/10** | 前25% | #视频到音频生成 | #直接偏好优化 | #音视频 #流匹配

👥 **作者与机构**

- 第一作者：Nolan Chan（The Chinese University of Hong Kong, Hong Kong SAR, China）
- 通讯作者：Dingdong Wang（The Chinese University of Hong Kong, Hong Kong SAR, China）（论文脚注中对应邮箱 yjchen@se.cuhk.edu.hk）
- 作者列表：Nolan Chan（The Chinese University of Hong Kong, Hong Kong SAR, China），Timmy Gang（National Research Council Canada, Canada），Yongqian Wang（The University of Warwick, UK），Yuzhe Liang（Shanghai Jiao Tong University, China），Dingdong Wang（The Chinese University of Hong Kong, Hong Kong SAR, China）

💡 **毒舌点评**

这篇论文堪称“模范工程论文”：它没有声称发明了全新的生成范式，而是精准地识别了当前视频音频生成模型在“对齐人类审美与同步偏好”上的短板，并系统性地设计了一套包含自动评估、数据生成、课程训练的完整解决方案，实验结果也验证了其有效性。不过，其核心创新更偏向于应用层面的“术”而非基础理论层面的“道”，AudioScore本身是现有工具的集成而非原理创新，课程学习DPO的引入也较为直接。

🔗 **开源详情**

- 代码：论文中明确提供了代码仓库链接：`https://nolanchan23.github.io/V2A-DPO/`。
- 模型权重：论文中未提及是否公开优化后的V2A模型权重（如V2A-DPO优化的MMAudio或Frieren）。仅提及使用了公开的预训练基础模型。
- 数据集：论文构建的偏好对数据集（约48K对）的获取方式未在提供的文本中详细说明。基础数据集VGGSound是公开的。
- Demo：论文中明确提供了演示链接：`https://nolanchan23.github.io/V2A-DPO/`。
- 复现材料：论文提供了详细的训练细节（优化器、学习率、批大小、步数、硬件）、关键超参数（β, score_Δ, N, γ）以及数据集构建流程，复现信息较为充分。
- 引用的开源项目：论文依赖或对比了多个开源项目，包括：ImageBind, CLAP, Synchformer, PANNs (用于IS), PESQ, MMAudio, Frieren, V2A-Mapper, FoleyCrafter, Seeing&Hearing, V-AURA, ThinkSound等。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

本文针对基于流匹配的视频到音频（V2A）生成模型难以与人类偏好对齐的问题，提出了V2A-DPO优化框架。核心方法包括：1）设计了一个综合评分系统AudioScore，整合现有模型评估视频与生成音频的语义一致性、时间同步性和感知质量，并通过少量人类标注进行校准；2）基于AudioScore自动化地生成大规模偏好对数据；3）引入课程学习策略优化DPO训练过程，从易到难使用偏好对。与直接使用DDPO或未优化的基线模型相比，经V2A-DPO优化的Frieren和MMAudio模型在VGGSound测试集上的IS（感知质量）最高提升1.81（10.4%相对提升），IB-score（语义一致性）提升0.86（2.6%相对提升），DeSync（时间失同步）降低0.09（20.5%相对降低），其中优化后的MMAudio在多项指标上达到SOTA。该工作的实际意义在于提升了V2A模型的实用性和用户体验，局限性在于其优化框架高度依赖特定的预训练基础模型和基于现有指标构建的AudioScore，而后者对音频“审美吸引力”的评估仍不完善。

#

---

