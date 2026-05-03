---
title: "ICLR 2026 - 数据集 论文列表"
date: 2026-05-03
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
| 🥇 | [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-Visual Dyadic Interactive Human Generation](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset)

🔥 **8.5/10** | 前25% | #数据集 | #自回归模型 | #音视频 #端到端

👥 **作者与机构**

- 第一作者：Youliang Zhang (清华大学，StepFun)
- 通讯作者：Duomin Wang (StepFun), Xiu Li (清华大学深圳研究生院) [注：根据邮箱后缀†和‡标记推断]
- 作者列表：Youliang Zhang（清华大学，StepFun）、Zhaoyang Li（StepFun）、Duomin Wang（StepFun）、Jiahe Zhang（未说明）、Deyu Zhou（StepFun，香港科技大学（广州））、Zixin Yin（StepFun，香港科技大学）、Xili Dai（香港科技大学）、Gang Yu（StepFun）、Xiu Li（清华大学深圳研究生院）

💡 **毒舌点评**

这篇论文在构建大规模交互式虚拟人数据集上做得非常扎实，从数据收集、处理到多维度质量过滤的全流程设计堪称典范，为学界解决了一个“无米之炊”的基础性问题。然而，其基线模型的视觉生成质量（如FID、FVD）与当前顶尖的大型级联扩散模型（如论文中提到的Hallo3）仍有差距，且数据集本身存在的显著人口统计学偏差（如82%英文、57%白人）可能限制了其训练模型的泛化能力。

🔗 **开源详情**

- **代码**：论文明确承诺将公开“整个数据集，包括原始数据、标注和数据处理代码”，并提供了详细的实现细节（附录A.7-A.13）。但**论文中未提及具体的代码仓库链接**。
- **模型权重**：**未提及**是否公开基线模型的权重。
- **数据集**：承诺公开，包含视频URL列表和所有标注。数据集采用CC-BY-NC 4.0许可证，仅限非商业学术研究。获取需签署数据使用协议。
- **Demo**：**未提及**在线演示。
- **复现材料**：提供了极其详细的复现材料，包括：完整的数据处理流水线描述（Section 3）、模型架构细节（附录A.8）、生成过程详解（附录A.9）、训练超参数与硬件配置（附录A.7）、标注文件使用说明（附录A.11）、以及消融实验（表2，4）。这为复现提供了充分信息。
- **论文中引用的开源项目**：论文明确使用了多个开源模型/工具，包括：SceneDetect（场景分割）、3D-Speaker（说话人分离）、YOLO（人脸检测）、SyncNet（唇同步）、ArcFace（人脸识别）、Qwen2.5-VL/Qwen3（标注）、Whisper（ASR）、DWpose（姿态估计）、DOVER（视频质量评估）、Qwen2.5-Omni（多模态理解）、CosyVoice2（音频分词器/声码器）、VAE（3D变分自编码器）、NOVA/DiT（用于空间Transformer和扩散MLP）。

📌 **核心摘要**

本文针对“音视频双人交互式虚拟人生成”这一新兴且缺乏公开数据的任务，提出了首个大规模高质量数据集SpeakerVid-5M。该数据集包含超过8700小时的视频（520多万个片段），其中特别设计了包含77万对对话的“对话分支”，并提供了丰富的多模态标注（如ASR文本、骨骼序列、模糊度分数等）。数据集构建遵循了严格的“收集-处理-标注-过滤”流水线，最终形成大规模预训练子集和高质量SFT子集。论文同时提供了一个基于自回归范式的端到端基线方法，并构建了VidChatBench基准测试集。实验表明，该基线方法在双人交互设置下比纯文本条件生成效果更好（例如FID从34.72降至32.35），且在情感对齐和手部质量等指标上优于某些级联方案，推理速度也显著更快。该工作的核心意义是填补了交互式虚拟人研究领域的数据空白，并提供了系统化的构建方法和评估标准。主要局限性在于数据集存在明显的地域和人口统计偏差，且基线模型的视觉保真度与当前SOTA仍有距离。

---

