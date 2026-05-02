---
title: "ICLR 2026 - 音频-视觉交互生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音频-视觉交互生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频-视觉交互生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频-视觉交互生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset) | 8.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-Visual Dyadic Interactive Human Generation](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset)

🔥 **8.0/10** | 前50% | #音频-视觉交互生成 | #数据集 | #基准测试 #多模态模型

👥 **作者与机构**

- 第一作者：Youliang Zhang (清华大学)
- 通讯作者：Duomin Wang (StepFun, 邮箱为 wangduomin@gmail.com)， Xiu Li (清华大学)
- 作者列表：Youliang Zhang (清华大学), Zhaoyang Li (StepFun), Duomin Wang (StepFun), Jiahe Zhang (未说明), Deyu Zhou (香港科技大学（广州）), Zixin Yin (香港科技大学), Xili Dai (香港科技大学), Gang Yu (StepFun), Xiu Li (清华大学)

💡 **毒舌点评**

这篇论文的核心贡献是填补了“音频-视觉双人交互”虚拟人生成功能领域的数据空白，并提供了配套的基准测试。其数据集规模（5.2M clips，8.7K小时）和丰富的多模态标注（文本、姿态、模糊度等）是最大的亮点。然而，作为一篇以数据集为核心的论文，其提出的基础生成模型方法描述相对简略，架构细节和训练策略更多在附录中，对“如何有效利用这些数据解决交互生成问题”的技术深度探讨不足。伦理声明部分非常详尽，体现了严谨性，但也侧面反映了使用网络爬取数据的固有复杂性。

🔗 **开源详情**

- 代码：论文承诺将开源“数据处理代码”和提供基线方法。文中未提及具体代码仓库链���。
- 模型权重：论文未提及是否公开预训练模型权重。
- 数据集：将完全公开，包括原始YouTube视频链接、时间戳和所有标注。采用“零资源托管”政策，不提供视频下载，仅提供获取指引。
- Demo：未提及。
- 复现材料：提供了详尽的数据集构建流程、评测基准（VidChatBench）的构造方法和评测指标、基线模型的架构描述、训练阶段划分以及超参数设置（如分辨率、帧率、训练硬件、学习率），附录中包含更多实施细节。
- 论文中引用的开源项目：SceneDetect (用于场景分割)、3D-Speaker (说话人分离)、YOLO (人脸检测)、SyncNet (唇形同步)、ArcFace (人脸识别)、Qwen2.5-VL/Qwen3 (用于标注)、Whisper (ASR)、DWpose (姿态估计)、DOVER (视频质量评估)、PaddleOCR (PII过滤)、Qwen2.5-Omni (多模态理解)、CosyVoice (音频tokenizer/声码器)、3D-VAE (视频编解码)、NOVA (空间Transformer来源)。

📌 **核心摘要**

1.  要解决什么问题：现有研究缺乏面向“音频-视觉双人交互式虚拟人生成功能”这一新兴任务的大规模、高质量公开数据集。
2.  方法核心是什么：构建了名为SpeakerVid-5M的数据集。流程包括从YouTube收集原始视频，经过场景分割、说话人分离、人脸检测、唇形同步、ID校正等多步预处理，并利用大模型进行丰富的多模态标注（结构化文本、ASR、姿态、模糊度等），最后通过严格的质量过滤（亮度、视频质量、清晰度、模糊度、音频质量）得到最终数据集。
3.  与已有方法相比新在哪里：首次专门针对“双人交互”场景构建大规模数据集，包含了完整的问答对。数据集规模远超以往相关数据集（如VoxCeleb2），并提供了前所未有的丰富标注（如每帧的脸部/手部模糊度、运动程度评分）。同时，提出了配套的评测基准VidChatBench。
4.  主要实验结果如何：论文提供了基础的自回归生成模型基线。在VidChatBench上，双人交互设置（直接从音视频生成回答）在多项指标上优于仅文本条件设置。与级联的扩散模型管线相比，本方法在情绪对齐（FIDEmotion 3.22 vs 3.73/4.15）和手部质量（0.49 vs 0.21/0.42）上更优，且单帧推理时间（3.17s）显著快于级联方法（31.43s/45.82s）。关键定量结果见下表。

| 方法 | FID↓ | FVD↓ | PSNR↑ | SSIM↑ | ArcFace↑ | CLIPdialog↑ | Syncconf↑ | FIDEmotion↓ | SIM-o↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 本方法（Dyadic） | 32.35 | 28.82 | 17.55 | 0.66 | 0.772 | 0.643 | 2.698 | 3.22 | 0.65 |
| 级联（Qwen2.5-omni + CosyVoice + Sonic） | 33.26 | 30.52 | 17.38 | 0.61 | 0.692 | – | 2.972 | 3.73 | – |
| 级联（Qwen2.5-omni + CosyVoice + Hallo3） | 28.43 | 27.65 | 17.31 | 0.69 | 0.775 | – | 3.324 | 4.15 | – |

5.  实际意义是什么：为音频-视觉双人交互虚拟人这一前沿方向提供了关键的数据基础和评测标准，有望推动该领域研究从模块化系统向端到端生成模型发展。
6.  主要局限性是什么：数据集主要来源于YouTube，存在显著的地理、语言和人口统计学偏差（如英语内容占82%，白人占57%）。论文中提出的基础生成模型并非主要贡献，其架构细节和训练策略的深度有待加强。伦理处理（如非自愿数据）的复杂性需要长期关注。

---

