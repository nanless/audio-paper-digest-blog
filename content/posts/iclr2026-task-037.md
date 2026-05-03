---
title: "ICLR 2026 - 音视频描述 论文列表"
date: 2026-05-03
draft: false
tags: ["音视频描述"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音视频描述 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频描述

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal O](/audio-paper-digest-blog/posts/2026-05-03-avocado-an-audiovisual-video-captioner-driven-by) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration](/audio-paper-digest-blog/posts/2026-05-03-avocado-an-audiovisual-video-captioner-driven-by)

✅ **7.5/10** | 前25% | #音视频描述 | #强化学习 | #多模态模型

👥 **作者与机构**

- 第一作者：Xinlong Chen（中国科学院自动化研究所；中国科学院大学；快手科技Kling团队）
- 通讯作者：Qiang Liu（中国科学院自动化研究所）
- 作者列表：Xinlong Chen（中国科学院自动化研究所/中国科学院大学/快手科技Kling团队），Yue Ding（中国科学院自动化研究所/中国科学院大学），Weihong Lin（快手科技Kling团队），Jingyun Hua（快手科技Kling团队），Linli Yao（北京大学），Yang Shi（北京大学），Bozhou Li（北京大学），Qiang Liu（中国科学院自动化研究所），Yuanxing Zhang（快手科技Kling团队），Pengfei Wan（快手科技Kling团队），Liang Wang（中国科学院自动化研究所）

💡 **毒舌点评**

亮点在于为音视频描述任务“量身定制”了一套从高质量数据构建（两阶段融合法）到强化学习奖励函数（清单奖励、对话奖励、长度奖励）的完整技术栈，实验结果在所选基准上确实“能打”。短板则在于其核心优化环节（奖励计算）严重依赖闭源商业模型（Gemini-2.5-Pro， GPT-4.1），这不仅抬高了复现门槛，也让“奖励信号”的稳定性和可控性打了个问号，算是“站在巨人肩膀上”但也“受制于巨人”。

🔗 **开源详情**

- 代码：论文中提及“Project webpage: https://avocado-captioner.github.io/”，并声明“This model will be open-source to facilitate future research”。但未在文中直接给出代码仓库的具体链接。
- 模型权重：承诺将开源模型权重。
- 数据集：论文构建的10.7K数据集未提及是否公开，但详细说明了数据来源（均为公开数据集），并公开了用于生成和过滤该数据集的提示词，理论上读者可以自行复现数据构建过程。
- Demo：未提及在线演示。
- 复现材料：提供了极其详尽的训练细节（超参数、硬件、阈值选择依据）和完整的提示词（用于数据生成、关键点分解、奖励计算、QA评估），复现材料充分。
- 引用的开源项目/模型：主要依赖Qwen2.5-Omni作为基础模型；在数据构建和奖励计算中使用了Gemini-2.5系列和GPT-4.1系列闭源API。

📌 **核心摘要**

本文针对现有视频描述模型大多忽视音频信息、且简单拼接视听描述会导致时序错位的问题，提出了一种由视听时序协同驱动的音视频视频描述模型AVoCaDO。该模型基于Qwen2.5-Omni构建，其核心贡献在于一个精心设计的两阶段后训练流程：1）在作者团队构建的10.7万个高质量、时序对齐的音视频描述数据集上进行监督微调（SFT）；2）采用针对音视频描述特性设计的三个奖励函数（清单、对话、长度）进行组相对策略优化（GRPO）。实验表明，AVoCaDO在四个音视频描述基准测试（video-SALMONN-2 testset, UGC-VideoCap, Daily-Omni, WorldSense）上显著超越了现有开源模型，甚至在UGC-VideoCap上超越了Gemini-2.5系列；同时在VDC Detailed和DREAM-1K等纯视觉基准上也具有竞争力。消融研究证实了各训练阶段及奖励函数的有效性。该工作的实际意义在于提升了生成能同时准确描述画面和声音事件且时序正确的视频描述的能力，其局限性在于训练流程依赖外部强大模型进行数据构建和奖励计算，可能影响复现的完全独立性和稳定性。

### 实验结果关键数据（基于论文表格）：

表1：音视频视频描述基准直接评估
| 模型 | 参数量 | 模态 | video-SALMONN-2 testset (Total ↓) | UGC-VideoCap (Avg. ↑) |
| :--- | :--- | :--- | :--- | :--- |
| Gemini-2.5-Pro | - | A+V | 31.3 | 72.6 |
| Qwen2.5-Omni | 7B | A+V | 57.1 | 57.7 |
| video-SALMONN-2* | 7B | A+V | 38.8 | 67.2 |
| AVoCaDO (Ours) | 7B | A+V | 37.3 | 73.2 |

表2：QA式评估（基于生成的文本描述回答问题）
| 模型 | Daily-Omni | WorldSense |
| :--- | :--- | :--- |
| Gemini-2.5-Pro | 60.2 | 33.8 |
| Qwen2.5-Omni | 13.4 | 8.6 |
| video-SALMONN-2 | 29.9 | 18.2 |
| AVoCaDO (Ours) | 50.1 | 25.7 |

表4：消融研究（关键指标）
| 配置 | RD | RC | RL | Daily-Omni Avg. ↑ | RepCol (%) ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-Omni | - | - | - | 13.4 | 8.1 |
| AVoCaDO-SFT | - | - | - | 48.1 | 5.1 |
| AVoCaDO-GRPO (full) | ✓ | ✓ | ✓ | 50.1 | 1.0 |

---

