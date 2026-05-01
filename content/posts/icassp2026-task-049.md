---
title: "ICASSP 2026 - 视频检索 论文列表"
date: 2026-04-29
draft: false
tags: ["视频检索"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 视频检索 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 视频检索

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Caption and Audio-Guided Video Representation Learning with ](/audio-paper-digest-blog/posts/2026-04-29-caption-and-audio-guided-video-representation) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Caption and Audio-Guided Video Representation Learning with Gated Attention for Partially Relevant Video Retrieval](/audio-paper-digest-blog/posts/2026-04-29-caption-and-audio-guided-video-representation)

✅ **7.0/10** | 前25% | #视频检索 | #多模态模型 | #注意力机制 #视觉语言模型

👥 **作者与机构**

- 第一作者：Dan Jiang（湖南大学计算机科学与电子工程学院）
- 通讯作者：Bin Jiang（湖南大学计算机科学与电子工程学院，标注可能为通讯作者）
- 作者列表：Dan Jiang（湖南大学计算机科学与电子工程学院），Bin Jiang*（湖南大学计算机科学与电子工程学院），Chao Yang（湖南大学计算机科学与电子工程学院），Jianbo Zheng（湖南大学计算机科学与电子工程学院）

💡 **毒舌点评**

论文的亮点在于将视觉大语言模型（VLLM）生成的帧级字幕作为一种“语义高亮”工具，并与音频信号一起，通过一个精心设计的门控融合模块整合进视频表示学习，思路清晰且有效。短板在于，其核心创新——利用现成VLLM生成字幕作为辅助模态——更像是一种巧妙的工程应用，而非根本性的方法论突破，且在音频模态的利用上相对浅层，未能深入挖掘其时序动态特性。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/LexingtonJd/CAVIGATE
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用的是公开数据集（ActivityNet Captions, TVR），未提供自制数据集。
- Demo：未提及在线演示。
- 复现材料：论文给出了主要超参数（推理时的α, β）、使用的VLLM（BLIP）和硬件信息（NVIDIA 4070 Ti Super），但未提供完整的训练脚本、配置文件或检查点。
- 引用的开源项目：主要依赖的开源工具/模型包括：CLIP, Wav2Vec2, BLIP（作为VLLM），以及相关的基线方法代码（如GMMFormer等）。

📌 **核心摘要**

1.  问题：部分相关视频检索（PRVR）中，长视频包含大量冗余的视觉和听觉语义，而只有与查询相关的显著子集决定了相关性。现有方法平等对待所有视觉内容，且忽略音频线索，导致视频表示冗余且不全面。
2.  核心方法：提出了CAVIGATE框架，包含两个对称分支：视频-字幕（VC）分支和视频-音频（VA）分支。每个分支通过一个模态门控融合（MGF）Transformer，利用可学习的门控函数动态调节字幕或音频特征对视频帧特征的贡献，以突出显著视觉语义并融合互补音频信息，同时抑制噪声。此外，引入了一种衰减的查询多样化损失，防止同一视频的不同查询在嵌入空间中过度聚集。
3.  新意：首次将VLLM生成的帧级描述性字幕作为指导信号，显式地用于突出视频帧中的显著语义；设计了MGF模块自适应融合多模态信息；提出的衰减查询损失旨在缓解语义坍塌，鼓励模型捕获时序演变的语义。
4.  实验结果：在ActivityNet Captions和TVR两个基准测试上，CAVIGATE在大多数指标上达到了当时的最先进水平。例如，使用CLIP-ViT-B/32骨干网络时，在ActivityNet Captions上取得了R@1=15.0， SumR=184.5；在TVR上取得了R@1=26.4， SumR=231.2，显著超越了AMDNet等基线方法。消融实验验证了每个组件（VC/VA分支、MGF、查询损失）的有效性。
5.  实际意义：为从长、无剪辑视频中进行精准文本检索提供了更鲁棒的视频表示学习方案，可应用于视频内容理解、视频数据库搜索等场景。
6.  主要局限性：方法的性能部分依赖于VLLM（如BLIP）生成字幕的质量，引入了额外的计算开销；对音频的利用相对直接（Wav2Vec2编码+简单融合），未充分探索更复杂的音视频交互建模。

---

