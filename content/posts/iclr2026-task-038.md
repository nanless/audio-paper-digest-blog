---
title: "ICLR 2026 - 音视频生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音视频生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音视频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [JavisDiT: Joint Audio-Video Diffusion Transformer with Hiera](/audio-paper-digest-blog/posts/2026-05-03-javisdit-joint-audio-video-diffusion-transformer) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization](/audio-paper-digest-blog/posts/2026-05-03-javisdit-joint-audio-video-diffusion-transformer)

✅ **7.5/10** | 前25% | #音视频生成 | #扩散模型 #多模态模型 | #音视频 #扩散模型

👥 **作者与机构**

- 第一作者：Kai Liu（浙江大学，新加坡国立大学）
- 通讯作者：Hao Fei（新加坡国立大学）
- 作者列表：Kai Liu（浙江大学，新加坡国立大学）、Wei Li（中国科学技术大学）、Lai Chen（浙江大学）、Shengqiong Wu（新加坡国立大学）、Yanhao Zheng（浙江大学）、Jiayi Ji（新加坡国立大学）、Fan Zhou（浙江大学）、Jiebo Luo（罗切斯特大学）、Ziwei Liu（南洋理工大学）、Hao Fei（新加坡国立大学）、Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

论文的核心创新“分层时空先验”（HiST-Sypo）思想很优雅，试图用结构化的方式（“什么、哪里、何时”）引导音视频同步，比简单拼接或单向适配更有说服力；然而，其训练依赖规模有限的音视频三元组（约61万），且模型（3.14B参数）在单卡H100上生成4秒240P视频需30秒，训练数据规模和推理效率仍是实际落地的现实瓶颈。

🔗 **开源详情**

- **代码**：提供代码仓库链接（`https://javisverse.github.io/JavisDiT-page/`）。
- **模型权重**：论文明确表示将公开模型权重。
- **数据集**：JavisBench基准数据集将公开。训练数据来源已说明（MMTrail， TAVGBench）。
- **Demo**：论文未提及在线演示链接。
- **复现材料**：提供了非常详细的复现说明，包括模型配置、三阶段训练策略（学习率、轮数等）、数据构造流程、损失函数设计、评估指标实现等，见附录。
- **引用的开源项目**：OpenSora (用于视频骨干和编解码器)、AudioLDM2 (用于音频编解码器和基线)、ImageBind (用于时空先验估计器)、FunASR (用于语音过滤)、Qwen系列模型 (用于数据标注)。

📌 **核心摘要**

1.  **问题**：现有端到端联合音视频生成（JAVG）方法存在两大挑战：一是音视频单模态生成质量不足，二是音视频间的精细时空对齐（即“哪里”发生、“何时”发生）不充分，导致同步效果差。
2.  **方法核心**：提出JavisDiT模型，基于强大的扩散Transformer（DiT）架构，包含音视频两个分支。核心创新是设计了“分层时空同步先验估计器”（HiST-Sypo Estimator），它从文本提示中提取全局语义先验和精细的时空先验（空间先验指明事件发生区域，时间先验指明事件起止时间），并注入到DiT的跨注意力层中，以精细指导音视频生成过程的对齐。
3.  **新在哪里**：a) 在DiT架构中引入了专门针对时空对齐的精细条件注入机制（HiST-Sypo），超越了先前工作简单的参数共享或粗粒度对齐；b) 提出了一个更全面、更具挑战性的JAVG评估基准JavisBench（10,140个样本），包含多维度、多事件的复杂场景；c) 设计了更鲁棒的同步性评估指标JavisScore。
4.  **主要实验结果**：在JavisBench和现有数据集（Landscape， AIST++）上，JavisDiT在视频/音频质量、语义一致性及音视频同步性等多项指标上均优于或持平现有最佳方法。例如，在JavisBench上，其JavisScore（0.154）超过了最强基线FoleyCrafter（0.151）；在Landscape数据集上，FVD（94.2）和FAD（8.5）均为最优。消融实验证实了DiT骨干、HiST-Sypo模块和双向交叉注意力（BiCA）的有效性。
5.  **实际意义**：推动了高质量、高同步性音视频内容自动生成的边界，为视频制作、游戏开发等领域提供了新工具。提出的JavisBench和JavisScore为未来JAVG研究提供了更可靠的评测标尺。
6.  **主要局限性**：训练数据规模（约61万三元组）相对有限；模型推理计算开销较大（30步采样需30秒/4秒视频）；在极端复杂的多事件同时发生的场景下，同步性仍有提升空间。

---

