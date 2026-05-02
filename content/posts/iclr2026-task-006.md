---
title: "ICLR 2026 - 实时视听问答 论文列表"
date: 2026-05-03
draft: false
tags: ["实时视听问答"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 实时视听问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 实时视听问答

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Can Vision-Language Models Answer Face to Face Questions in ](/audio-paper-digest-blog/posts/2026-05-03-can-vision-language-models-answer-face-to-face) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Can Vision-Language Models Answer Face to Face Questions in the Real-World?](/audio-paper-digest-blog/posts/2026-05-03-can-vision-language-models-answer-face-to-face)

🔥 **8.0/10** | 前25% | #实时视听问答 | #基准测试 | #音频问答 #音视频

👥 **作者与机构**

- 第一作者：Reza Pourreza（高通AI研究），Rishit Dagli（多伦多大学）并列第一贡献
- 通讯作者：未说明
- 作者列表：Reza Pourreza（高通AI研究）、Rishit Dagli（多伦多大学）、Apratim Bhattacharyya（高通AI研究）、Sunny Panchal（高通AI研究）、Guillaume Berger（高通AI研究）、Roland Memisevic（高通AI研究）

💡 **毒舌点评**

亮点在于数据集QIVD的设计非常巧妙，它捕捉了“实时交互”中时间对齐和指代消歧的核心挑战，为评估AI的“情境感知”能力提供了迄今为止最逼真的舞台。短板则是论文的核心模型架构（流式ASR+视频LLM）是现有组件的拼接，并未提出全新的端到端融合模型来解决这一问题，更像是一个优秀的“系统集成与诊断报告”。

🔗 **开源详情**

- 代码：论文中未提及提供代码仓库链接。
- 模型权重：论文评估了多个开源模型（如VideoLLaMA系列、Qwen系列），这些模型的权重本身是公开的。微调后的特定模型权重是否公开未明确说明。
- 数据集：论文公开了QIVD数据集，提供了访问链接：https://www.qualcomm.com/developer/software/qualcomm-interactive-video-dataset-qivd
- Demo：论文中未提及提供在线演示。
- 复现材料：论文在附录中提供了极其详细的复现材料，包括：
    - 微调时冻结与可训练模块的划分（表D.1）
    - 详细的训练超参数配置（表D.2，包括学习率、优化器、批量大小等）
    - Stream-Qwen-Omni的适配格式和训练细节（附录D.3）
    - LLM裁判使用的完整提示词（表D.3， D.4）
    - 针对GPT-4o的评测提示词（表D.5）
- 论文中引用的开源项目：Whisper (Radford et al., 2023), Whisper-Streaming (Machácek et al., 2023), SigLIP (Zhai et al., 2023), BEATs (Chen et al., 2022), 以及多个作为评估基线的开源视觉语言模型（如InstructBLIP, VideoLLaMA系列, Qwen系列等）。

📌 **核心摘要**

1.  解决的问题：当前视觉语言模型（VLM）在处理需要实时、动态理解正在展开的场景并回答“面对面”口头提问时表现不佳，现有评估基准无法衡量这种能力。
2.  方法核心：提出Qualcomm Interactive Video Dataset (QIVD)，一个包含2900个真实世界短视频的问答数据集，每个视频包含用户提问、人工转录的文本问题、答案以及关键的“何时可以合理回答”的时间戳。设计了一个简单的基线流式处理方法：使用流式ASR（Whisper-Streaming）转录问题并检测结束时间，然后将视频和转录文本输入视频LLM生成答案。
3.  与已有方法相比的新颖之处：这是首个专门为评估模型实时、在线视听问答能力而构建的基准。与离线数据集不同，QIVD要求模型处理同步的视听流，并解决指代表达（如“这个”、“这里”）、动作计数、音频视觉线索整合等真实交互挑战。
4.  主要实验结果：实验显示，即使是GPT-4o等SOTA模型，在QIVD上的正确率（约58%）也远低于人类基线（约87%）。主要瓶颈是时间推理（如动作计数，人类85.7% vs 模型<35%）和视听融合。微调（如VideoLLaMA2.1-7B-AV）可显著缩小差距，尤其在动作理解和音频视觉任务上提升明显（分别+10%, +17.4%）。精确识别“何时回答”对性能有决定性影响（图3）。
    | 模型 | 正确率（离线/GT设置） | BERT | METEOR | BLEU | ROUGE-L |
    |---|---|---|---|---|---|
    | GPT-4o | 58.76 | 89.36 | 51.18 | 15.72 | 42.55 |
    | VideoLLaMA3-7B | 56.38 | 91.63 | 48.56 | 12.72 | 43.84 |
    | 人类 | 87.33 | 93.01 | 53.21 | 17.40 | 49.76 |
5.  实际意义：为开发能与人实时交互的AI助手（如客服、教育、生活指导机器人）提供了关键的评估标准和改进方向，指明了当前模型在动态情境理解上的短板。
6.  主要局限性：数据集规模（2900视频）相对较小；录制环境虽多样但仍有控制成分；基线流式方法并非端到端，仍依赖独立的ASR和LLM模块，未能完全解决跨模态实时融合问题。

---

