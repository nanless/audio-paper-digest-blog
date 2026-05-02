---
title: "ICLR 2026 - 数据集 论文列表"
date: 2026-05-02
draft: false
tags: ["数据集"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 数据集 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 数据集

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-](/audio-paper-digest-blog/posts/2026-05-02-speakervid-5m-a-large-scale-high-quality-dataset) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-Visual Dyadic Interactive Human Generation](/audio-paper-digest-blog/posts/2026-05-02-speakervid-5m-a-large-scale-high-quality-dataset)

✅ **7.5/10** | 前25% | #数据集 | #自回归模型 | #音视频 #多模态模型

👥 **作者与机构**

- 第一作者：Youliang Zhang（清华大学，邮箱：zhangyou24@mails.tsinghua.edu.cn）
- 通讯作者：Duomin Wang (wangduomin@gmail.com), Xiu Li (li.xiu@sz.tsinghua.edu.cn) （论文中标注了†和‡，通常表示通讯作者）
- 作者列表：
  - Youliang Zhang（清华大学）
  - Zhaoyang Li（StepFun）
  - Duomin Wang†（StepFun）
  - Jiahe Zhang（未说明）
  - Deyu Zhou（StepFun；香港科技大学（广州））
  - Zixin Yin（StepFun；香港科技大学）
  - Xili Dai（StepFun；香港科技大学）
  - Gang Yu（StepFun）
  - Xiu Li‡（清华大学（深圳））

💡 **毒舌点评**

本文最大的亮点在于其填补了“音频-视觉双人交互虚拟人生成”这一关键任务的数据空白，以工业级的系统性和透明度构建了一个规模（520万片段）和质量（1080P+）俱佳的专用数据集，为后续研究铺平了道路。然而，其短板在于“新瓶装旧酒”感略强——基线模型采用的自回归+扩散架构并非全新，且在绝对视频生成质量上并未超越更庞大的级联扩散模型（如Hallo3），其主要优势更多体现在端到端带来的推理速度与情感保持上。

🔗 **开源详情**

- 代码：论文明确表示将开源“the entire dataset, including the raw data, annotations, and data processing pipeline”，即包含数据处理代码。但未提供具体仓库链接。
- 模型权重：论文中提到了其基线模型，但未明确说明是否会公开训练好的模型权重。
- 数据集：公开。论文明确表示将公开完整的SpeakerVid-5M数据集，包括视频URL、标注和处理代码。获取方式是通过提供的URL自行下载原始视频（遵循YouTube条款）。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了极其详尽的复现材料，包括：
    - 数据处理全流程描述（第3节）。
    - 模型架构细节（附录A.7-A.9）。
    - 训练硬件、阶段、超参数（附录A.7）。
    - 标注文件使用指南（附录A.11）。
    - 使用的提示词（附录A.13）。
- 论文中引用的开源项目：主要依赖以下开源工具/模型：
    - 数据处理：SceneDetect, 3D-Speaker, YOLO, SyncNet, ArcFace, Qwen2.5-VL, Qwen-3, DWpose, Whisper。
    - 基线模型：Qwen2.5-Omni（作为理解模块），CosyVoice2（音频tokenizer/解码器），3D VAE。
    - 质量评估：DOVER。
- 开源计划：论文中明确提及“Both the dataset and the data processing code will be publicly released.”，但未提供具体的发布平台和链接。

📌 **核心摘要**

这篇论文针对“音频-视觉双人交互虚拟人类生成”这一新兴但缺乏专用大规模数据集的任务，提出了第一个专用数据集SpeakerVid-5M。该数据集包含超过520万、总计8700多小时的单人说话视频片段，以及77万对（1800小时）双人对话音频-视觉对，覆盖多种身体构图和视角，并附有丰富的结构化标注（姿态、模糊度、ASR、文本描述等）。与已有数据集相比，其创新在于首次系统性地针对“交互”任务构建数据，并按交互类型和质量进行分层设计。论文同时提供了一个基于自回归框架（整合Qwen2.5-Omni与CosyVoice）的基线生成模型，并构建了评估基准VidChatBench。实验表明，该基线在VidChatBench上能有效工作，且端到端方法在情感对齐和推理速度上优于级联管线。该工作为虚拟人交互研究提供了关键基础设施，但数据集存在语言和人口统计偏差。主要局限性包括：数据集主要来自YouTube，存在固有偏见；基线模型在纯视觉质量指标上仍落后于顶级扩散模型。

---

