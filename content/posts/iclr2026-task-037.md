---
title: "ICLR 2026 - 音视频交互生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音视频交互生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音视频交互生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频交互生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-Visual Dyadic Interactive Human Generation](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset)

🔥 **8.0/10** | 前25% | #音视频交互生成 | #自回归模型 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Youliang Zhang (清华大学 & StepFun)
- 通讯作者：Duomin Wang (StepFun), Xiu Li (清华大学深圳研究院)
- 作者列表：Youliang Zhang (清华大学 & StepFun), Zhaoyang Li (StepFun), Duomin Wang (StepFun), Jiahe Zhang (未说明), Deyu Zhou (StepFun & 香港科技大学(广州)), Zixin Yin (StepFun & 香港科技大学), Xili Dai (StepFun), Gang Yu (StepFun), Xiu Li (清华大学深圳研究院)

💡 **毒舌点评**

这篇论文最大的贡献是“开门立派”，为虚拟人交互生成这个潜力巨大但缺乏标准训练数据的新兴任务，提供了一个规模空前��注释详尽的专用数据集（SpeakerVid-5M）和评测基准（VidChatBench），填补了关键空白。不过，作为一篇以数据集为主的论文，其提出的基线模型（自回归音视频生成框架）虽然验证了数据集的可用性，但架构创新性有限，且在与现有强力扩散模型级联方案的对比中，视觉生成质量上并不占优，主要优势集中在推理速度和端到端的情感/手部质量保留上。

🔗 **开源详情**

- 代码：论文中明确表示“数据集处理代码将公开”，并承诺提供基线模型的代码。但未在文中提供具体代码仓库链接（如GitHub）。
- 模型权重：论文中未提及是否公开预训练的基线模型权重。
- 数据集：公开。论文明确声明将开源整个数据集，包括原始视频URL、注释和处理代码。获取方式是通过提供的URL列表自行下载原始视频（需遵守YouTube条款和论文的使用协议）。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文提供了详尽的数据集构建流程（Section 3）、基线模型架构描述（Section 5 & Appendix A.8-A.9）、部分训练细节（Appendix A.7，如硬件、分辨率、帧率）以及详细的评测基准VidChatBench。这为复现提供了较好的指导。
- 论文中引用的开源项目：论文引用并使用了多个开源工具/模型，包括：SceneDetect, 3D-Speaker, YOLO, SyncNet, ArcFace, Qwen2.5-VL, Qwen-3, Whisper, DWpose, DOVER, Qwen2.5-Omni, CosyVoice2, NOVA, CosyVoice flow matching vocoder, PaddleOCR。
- 论文中未提及开源计划：未提及具体代码仓库地址和模型权重发布计划。

📌 **核心摘要**

这篇论文旨在解决音频-视觉双人交互虚拟人生成任务缺乏大规模、高质量专用数据集的问题。作者构建了SpeakerVid-5M，这是一个包含超过8743小时、520万视频片段的大规模数据集，其核心创新在于首次系统性地提供了双人对话数据（770万对）和丰富的结构化注释（包括ASR、姿态、模糊度、结构化文本描述等）。与现有专注于单人说话头或通用视频的数据集不同，该数据集明确按交互类型（对话、单人、倾听、多轮）和数据质量（预训练子集与SFT子集）进行组织。论文还提出了一个基于自回归（AR）范式的音视频联合生成基线模型，并创建了名为VidChatBench的评测基准。实验表明，该基线模型在VidChatBench上能有效进行双人交互生成，且端到端生成在情感一致性和手部质量上优于级联管线方案，推理速度显著更快。然而，其视觉保真度指标（如FID、FVD）暂时落后于基于大规模扩散模型的级联方案。该数据集和代码将开源，有望极大推动虚拟人交互、多模态对话等领域的研究。

---

