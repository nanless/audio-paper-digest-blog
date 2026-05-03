---
title: "ICLR 2026 - 视频问答 论文列表"
date: 2026-05-04
draft: false
tags: ["视频问答"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 视频问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 视频问答

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Can Vision-Language Models Answer Face to Face Questions in ](/audio-paper-digest-blog/posts/2026-05-04-can-vision-language-models-answer-face-to-face) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Can Vision-Language Models Answer Face to Face Questions in the Real-World?](/audio-paper-digest-blog/posts/2026-05-04-can-vision-language-models-answer-face-to-face)

✅ **7.5/10** | 前25% | #视频问答 | #多模态模型 | #音频问答 #基准测试

👥 **作者与机构**

- 第一作者：Reza Pourreza (Qualcomm AI Research)
- 通讯作者：未明确说明（论文中注明作者1和作者2贡献相等）
- 作者列表：Reza Pourreza（Qualcomm AI Research）、Rishit Dagli（多伦多大学，实习期间工作于Qualcomm AI Research）、Apratim Bhattacharyya（Qualcomm AI Research）、Sunny Panchal（Qualcomm AI Research）、Guillaume Berger（Qualcomm AI Research）、Roland Memisevic（Qualcomm AI Research）

#

💡 **毒舌点评**

亮点：这篇论文做了一件“脏活累活”——收集并发布了一个高度真实、包含同步音频视频和时间戳注释的在线问答数据集（QIVD），为评估模型在真实世界交互能力上立了一个扎实的靶子，其“当回答时”的时间戳注释设计尤为精巧。短板：所提的流式处理基线（Whisper-Streaming + LMM）更像是一个工程组合而非优雅的端到端解决方案，且论文标题提出的问题“能否回答”最终答案更多是“目前不能，但可通过微调部分改善”，结论的突破性稍显不足。

#

🔗 **开源详情**

- 代码：论文中未提及提供基线方法或Stream-Qwen-Omni的代码仓库链接。
- 模型权重：未提及提供微调后模型的权重。
- 数据集：QIVD数据集已公开。论文提供了获取链接：`https://www.qualcomm.com/developer/software/qualcomm-interactive-video-dataset-qivd`。
- Demo：未提及。
- 复现材料：在论文附录（Section D）中详细提供了VideoLLaMA和Stream-Qwen-Omni的微调超参数、训练设置、评估所用提示词（Table D.3, D.4），以及GPT-4o的输入提示词（Table D.5），这些信息对于复现评估实验是充分的。
- 论文中引用的开源项目：列出了大量作为基线或组件的开源模型，包括InstructBLIP, Video-ChatGPT, VideoChat2, LLaVA-NeXT, LLaMA-VID, VideoLLaMA系列, Flash-VStream, Qwen2.5-VL, Qwen2.5-Omni, Qwen3-VL等，以及Whisper, BEATs, SigLIP等基础组件。

📌 **核心摘要**

1.  解决的问题：评估视觉语言模型（LMMs）能否在实时、面对面的场景中，基于持续输入的相机和麦克风数据，恰当地回答用户提出的开放式问题。这关乎AI助手与具身智能的实用性。
2.  方法核心：引入了一个新的数据集和基准——高通交互式视频数据集（QIVD）。它包含2900个真实世界短视频，每个视频都包含用户在录制时提出的问题、对应的答案，以及关键的答案最佳时间戳（标记何时回答最合适）。同时，提出了一种基线流式方法：使用流式ASR检测问题结束时刻，将此时的视频和转录文本输入LMM生成答案。
3.  与已有方法相比新在哪里：与以往视频问答数据集相比，QIVD是在线、交互式的（问题和视频同时生成），而非对预录视频的离线标注。其关键创新在于引入了时间维度（何时回答）的标注，这更贴近真实对话的动态性。评估从单纯的“答案正确性”扩展到了“时机把握”。
4.  主要实验结果：现有顶尖模型表现远低于人类（如GPT-4o离线正确率58.76% vs. 人类87.33%）。主要失败模式包括：难以理解指代（如“这个”）、动作计数、时序推理和音视频整合。关键消融实验表明：1）提供准确答案时间戳能大幅提升性能；2）微调后的音视频多模态模型（VideoLLaMA2.1-7B-FT-AV）在大多数任务上优于仅用视觉的版本；3）但模型在动作计数等时序任务上即使微调后仍严重落后（29.91%）。
5.  实际意义：为研究和开发真正能与人实时互动的AI系统提供了关键的评测标尺和数据基础，指明了当前模型在情境理解、时序推理和多模态融合方面的具体短板。
6.  主要局限性：数据集规模相对较小（2900样本）；问题类型虽多样但均为单轮QA，不涉及多轮对话；场景多样性可能受限于众包录制环境。

#

---

