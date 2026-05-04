---
title: "ICLR 2026 - 视频描述生成 论文列表"
date: 2026-05-04
draft: false
tags: ["视频描述生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 视频描述生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 视频描述生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal O](/audio-paper-digest-blog/posts/2026-05-04-avocado-an-audiovisual-video-captioner-driven-by) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration](/audio-paper-digest-blog/posts/2026-05-04-avocado-an-audiovisual-video-captioner-driven-by)

🔥 **8.5/10** | 前25% | #视频描述生成 | #强化学习 | #多模态模型 #音频视觉对齐

👥 **作者与机构**

- 第一作者：Xinlong Chen（快手技术 Kling 团队，中国科学院自动化研究所 NLPR，中国科学院大学）
- 通讯作者：Qiang Liu（中国科学院自动化研究所 NLPR，中国科学院大学）
- 作者列表：Xinlong Chen（快手技术 Kling 团队，中国科学院自动化研究所 NLPR，中国科学院大学）、Yue Ding（中国科学院自动化研究所 NLPR，中国科学院大学）、Weihong Lin（快手技术 Kling 团队）、Jingyun Hua（快手技术 Kling 团队）、Linli Yao（北京大学）、Yang Shi（北京大学）、Bozhou Li（北京大学）、Qiang Liu（中国科学院自动化研究所 NLPR，中国科学院大学）、Yuanxing Zhang（快手技术 Kling 团队）、Pengfei Wan（快手技术 Kling 团队）、Liang Wang（中国科学院自动化研究所 NLPR，中国科学院大学）

💡 **毒舌点评**

亮点： 论文没有满足于简单的多模态拼接，而是通过精心设计的 checklist 和 dialogue 奖励函数，将“音视频事件在时间轴上对齐”这一核心需求显式地融入了强化学习目标，这种针对具体问题定制 RL 奖励的思路比通用 GRPO 应用更有价值。
短板： 整个流程高度依赖强大的教师模型（如 Gemini-2.5-Pro）来构建 SFT 数据和评估奖励，这使得方法的泛用性和在资源受限场景下的可行性存疑，且可能隐含了将教师模型偏见传递给学生模型的风险。

🔗 **开源详情**

- 代码： 论文明确表示“AVoCaDO will be open-sourced”，并提供了项目主页链接 (`https://avocado-captioner.github.io/`)。论文中未直接提供代码仓库链接，但项目主页很可能包含后续链接。
- 模型权重： 论文声明模型将开源，但未提供具体的权重下载链接或平台。
- 数据集： 论文详细描述了数据集的构建方法、来源和规模（107K），但未提及是否公开发布原始数据集或经过处理的描述数据集。获取构建数据集所需的原始视频相对容易（来自公开数据集），但重新生成所有描述需要访问Gemini API。
- Demo： 论文未提及是否提供在线演示。
- 复现材料： 论文提供了丰富的复现细节：包括所有训练超参数（学习率、batch size等）、硬件配置、以及用于数据构建、关键点分解、奖励计算的所有Prompt（见附录图10-17）。这些信息对复现工作至关重要。
- 论文中引用的开源项目： 依赖的开源项目主要是基础模型 `Qwen2.5-Omni-7B`，以及用于评估的基准测试集（如`Daily-Omni`, `WorldSense`）。构建数据时使用了`TikTok-10M`, `Shot2Story`, `FineVideo`等公开数据集。

📌 **核心摘要**

1. 解决的问题： 现有视频描述生成方法大多以视觉为中心，忽略了音频信息，或者无法生成视觉和音频事件在时间上精确对齐的描述，这限制了模型对视频内容的全面理解。
2. 方法核心： 提出了 AVoCaDO，一个由音视频时序协调驱动的描述生成模型。其核心是一个两阶段后训练流水线：第一阶段（SFT）在精心构建的 10.7 万条高质量、时序对齐的音视频描述数据集上进行监督微调；第二阶段（GRPO）利用三个专门设计的奖励函数（清单奖励、对话奖励、长度正则化奖励）进行强化学习，以进一步优化时序连贯性和描述准确性。
3. 创新点： 相比已有方法，主要新在：1) 构建了大规模、高质量的音视频对齐描述数据集；2) 提出了针对音视频描述任务特性的组合式奖励函数设计，同时关注内容完整性、对话准确性和生成稳定性；3) 证明了在通用多模态模型上通过特定后训练即可显著提升音视频描述能力。
4. 主要实验结果： 在四个音视频描述基准测试上，AVoCaDO (7B) 显著超越了所有现有开源模型，并在 UGC-VideoCap 上超越了商业模型 Gemini-2.5-Pro。关键结果如下表所示。

| 模型 | 视频-SALMONN-2测试集 (Total ↓) | UGC-VideoCap (Avg. ↑) | Daily-Omni (Avg. ↑) | WorldSense (Avg. ↑) |
| :--- | :--- | :--- | :--- | :--- |
| AVoCaDO (Ours) | 37.3 | 73.2 | 50.1 | 25.7 |
| video-SALMONN-2* | 38.8 | 67.2 | 29.9 | 18.2 |
| Qwen2.5-Omni | 57.1 | 57.7 | 13.4 | 8.6 |
| Gemini-2.5-Pro | 31.3 | 72.6 | 60.2 | 33.8 |

5. 实际意义： 提升了视频描述模型对包含对话、音乐、环境音等复杂音视频内容的理解和描述能力，为视频理解、检索和生成等下游任务提供了更高质量的文本表示，推动了多模态大模型向更全面的视听感知发展。
6. 主要局限性： 模型性能高度依赖于大规模、高质量的监督数据构建（使用了强大的教师模型），这可能限制其在不同文化或低资源语言场景下的快速迁移。此外，奖励函数的设计虽然针对性强，但也引入了额外的计算开销和复杂度。

---

