---
title: "ICLR 2026 - 数据集 论文列表"
date: 2026-05-04
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
| 🥇 | [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-](/audio-paper-digest-blog/posts/2026-05-04-speakervid-5m-a-large-scale-high-quality-dataset) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-Visual Dyadic Interactive Human Generation](/audio-paper-digest-blog/posts/2026-05-04-speakervid-5m-a-large-scale-high-quality-dataset)

🔥 **8.5/10** | 前25% | #数据集 | #自回归模型 | #音视频 #音频生成

👥 **作者与机构**

- 第一作者：Youliang Zhang（清华大学、StepFun）
- 通讯作者：Xiu Li（清华大学深圳国际研究生院）
- 作者列表：
  - Youliang Zhang（清华大学、StepFun）
  - Zhaoyang Li（StepFun）
  - Duomin Wang（StepFun，共同第一作者/责任作者†）
  - Jiahe Zhang（未说明具体机构）
  - Deyu Zhou（香港科技大学（广州）、StepFun）
  - Zixin Yin（香港科技大学、StepFun）
  - Xili Dai（StepFun）
  - Gang Yu（StepFun）
  - Xiu Li（清华大学深圳国际研究生院‡）

💡 **毒舌点评**

亮点：论文构建数据集的工程严谨性堪称典范，从多源数据收集到基于多种信号（SyncNet、ArcFace、3D-Speaker）的交叉验证，再到涵盖画面质量、运动模糊、音频清晰度的多层级过滤，流程完整且考虑周全，为社区贡献了一个定义明确、质量可控的“交钥匙”式基准数据集。短板：基线模型虽然设计完整，但模型体量（0.8B）与当前主流的视频生成模型（动辄数十亿甚至百亿参数）差距明显，其在视频生成核心指标（FID、FVD）上虽自身消融提升显著，但与更大更强的级联模型（如HalLo3）相比仍处下风，一定程度上削弱了其作为“标准答案”的说服力，更像一个“可行性验证”。

🔗 **开源详情**

- 代码：论文明确承诺将公开数据处理代码和基线模型代码，但未提供具体的代码仓库链接（如GitHub地址）。论文中写有“Both the dataset and the data processing code will be publicly released.”和“We will open-source the entire dataset, including the raw data, annotations, and data processing pipeline”。因此，判定为 有开源承诺，但具体链接未在文中给出。
- 模型权重：论文中未提及公开预训练或微调后的基线模型权重。
- 数据集：论文明确承诺完全开源数据集，并说明发布形式为YouTube视频ID/URL列表、时间戳和生成的标注，不托管原始视频/音频。开源方式清晰。
- Demo：未提及在线演示。
- 复现材料：提供了极其充分的复现材料，包括：详尽的数据收集、预处理、标注和过滤流程（第3节）；基线模型的架构细节、训练策略（三阶段）、超参数、硬件配置（附录A.7, A.8）；VidChatBench的构建方法和评估指标详细说明（第6.1节）；数据标注文件的具体格式和使用指南（附录A.11）；以及多处提示会开源代码。
- 论文中引用的开源项目：
  - 数据处理工具：SceneDetect, 3D-Speaker, YOLO, SyncNet, ArcFace, Qwen2.5-VL, Qwen-3, Whisper, DWpose, PaddleOCR。
  - 模型/架构组件：Qwen2.5-Omni（理解模块）, CosyVoice2（音频分词器与声码器）, 3D-VAE（视频编解码）, NOVA（空间Transformer）。
  - 评估工具：DOVER（视频质量评估）, Deep3DFaceRecon（表情特征提取）, CLIP（文本相似度计算）。

📌 **核心摘要**

1. 问题：当前数字人研究正从单向驱动的“肖像生成”向双向交互的“虚拟人对话”迈进，但学术界严重缺乏为此类任务设计的大规模、高质量公开数据集。
2. 方法：论文提出SpeakerVid-5M数据集，从YouTube收集视频，通过场景分割、说话人分离、人脸检测、唇音同步、身份矫正等步骤预处理，并利用多模态大模型（Qwen2.5-VL）和多种模型进行丰富标注（文本、骨骼、模糊度等），最后进行严格的质量过滤。同时，提供了一个基于自回归（AR）框架的音视频联合生成基线模型。
3. 创新：① 首个针对“音频-视觉双人交互”任务的大规模数据集（5.2M片段，8.7K小时，其中双人对话770K对）。② 构建了多维度、分层级的数据质量控制与组织流程���对话分支、单人分支、聆听分支、多轮分支；预训练子集与SFT子集）。③ 定义并发布了VidChatBench评测基准。
4. 实验：基线模型在VidChatBench上进行评测。消融实验表明，联合音视频生成、空间Transformer优化和训练噪声注入对提升视频质量（FVD从55.06降至28.82）、唇音同步（SyncNet得分从-升至2.698）和情感一致性（FIDEmotion从3.45降至3.22）有显著效果。与级联方案（Qwen+CosyVoice+Sonic/Hallo3）对比，本方法在情感和手势质量上占优，推理速度快一个数量级（3.17s/帧 vs 31-45s/帧）。
5. 实际意义：该数据集填补了交互式虚拟人研究的数据空白，其丰富的标注也适用于人体动画、多模态对话等任务，将加速该领域的基础模型研究。
6. 局限性：数据集来源存在人口统计偏差（偏英语、西方、男性）。基线模型规模较小，视频生成保真度与顶级扩散模型仍有差距，其主要价值在于验证数据集和AR框架的可行性。

---

