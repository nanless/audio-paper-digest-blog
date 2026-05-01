---
title: "ICASSP 2026 - 视频生成 论文列表"
date: 2026-04-29
draft: false
tags: ["视频生成"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 视频生成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 视频生成

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [StyHarmo: Efficient Style-Specific Video Generation with Mus](/audio-paper-digest-blog/posts/2026-04-29-styharmo-efficient-style-specific-video) | 6.5分 | 前50% |
| 🥈 | [VT-Heads: Voice Cloning and Talking Head Generation from Tex](/audio-paper-digest-blog/posts/2026-04-29-vt-heads-voice-cloning-and-talking-head) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [StyHarmo: Efficient Style-Specific Video Generation with Music Synchronization](/audio-paper-digest-blog/posts/2026-04-29-styharmo-efficient-style-specific-video)

✅ **6.5/10** | 前50% | #视频生成 | #扩散模型 | #音乐同步

👥 **作者与机构**

- 第一作者：Jialin Wang（华南师范大学人工智能学院）
- 通讯作者：Chaoqun Wang†（华南师范大学人工智能学院）
- 作者列表：Jialin Wang（华南师范大学人工智能学院）、Chaoqun Wang（华南师范大学人工智能学院）、Junjie Cai（华南师范大学人工智能学院）、Tianming Chen（华南师范大学人工智能学院）

#

💡 **毒舌点评**

这篇论文的亮点在于将“推理缓存”这一加速技巧从与内容无关的通用策略（如AdaCache），改进为同时考虑扩散过程阶段（时间步）和视频帧间动态（运动分数）的自适应策略，这在工程上是细致且有效的。然而，其核心的音乐-视频同步方法（公式7）实质是简单的参数映射（音高、响度随运动强度线性/指数变化），对于捕捉复杂的音乐结构和情感节奏显得过于粗浅，更像是一个为了完整性而添加的演示模块，而非真正的跨模态同步创新。

#

🔗 **开源详情**

论文中未提及代码、模型权重、数据集或Demo的任何公开链接或开源计划。论文中引用的开源项目包括：
- 主干模型：CogVideoX-2B [22]
- 缓存加速基线：AdaCache [12]
- 音频生成/同步相关工作：SonicVisionLM [13], MMAudio [14], Video2Music [15], Vidmuse [16]
- 评估指标相关：ImageBind [26], LanguageBind [27]

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 要解决的问题：现有文本到视频生成模型在推理效率（长视频生成慢）和音频-视频同步（生成的视频与音乐节奏不匹配）两方面存在不足，且缺乏能同时高效生成特定风格视频并实现音乐同步的统一框架。
2. 方法核心：提出StyHarmo框架。为提升效率，引入“步骤与运动感知缓存”（SMACache），这是一个无需训练的机制，它结合去噪步骤的进度（早期步骤少缓存以构建结构，后期步骤多缓存以细化细节）和每帧的运动活跃度（通过多帧特征差异计算运动分数），动态决定复用Transformer层特征的比例，从而跳过冗余计算。为实现音视频同步，提出一种运动能量驱动的音频融合策略，根据视频帧的平均光流强度（运动能量）动态调制音乐的音高和响度参数。
3. 与已有方法的相比新在哪里：1）在加速方面，相比AdaCache等仅基于帧间差异的缓存策略，SMACache额外考虑了扩散过程的阶段特性，并利用多帧历史信息更精确地评估运动，从而在加速时更少损害视觉质量。2）在同步方面，现有方法或独立生成音乐，或从视频合成新音乐，StyHarmo则专注于如何将已有的或生成的音乐参数与视频运动动态进行调制耦合。3）提出一个同时解决高效风格化视频生成与音乐同步的统一框架。
4. 主要实验结果：在“Family Guy”风格数据集上：
   - 效率：SMACache相比基线CogVideoX-2B实现1.273倍加速，延迟从99.8秒降至78.4秒（30帧）。
   - 视觉质量：VBench得分（79.58%）略高于基线（80.42%）和AdaCache（79.32%-79.56%），LPIPS（0.4344）和PSNR（16.31）也优于两个基线。
   - 音频同步：加入同步模块后，IB-score从8.90%提升至12.79%，LB-score从13.39%提升至14.36%，表明同步性有显著提升。
5. 实际意义：为动画、短视频等垂直领域的低成本、快速内容创作提供了一个潜在工具，能够生成风格一致的视频片段并自动配上节奏匹配的音乐。
6. 主要局限性：1）实验仅在“Family Guy”这一单一、特定的动画风格上进行，框架对通用视频风格、真实世界视频的泛化能力未被验证。2）音乐同步策略非常基础，无法处理复杂的音乐结构、和声或情感变化。3）未提供代码、模型或数据集，限制了学术社区的复现与跟进。

#

---

### 🥈 [VT-Heads: Voice Cloning and Talking Head Generation from Text Based on V-DiT](/audio-paper-digest-blog/posts/2026-04-29-vt-heads-voice-cloning-and-talking-head)

✅ **6.5/10** | 前50% | #视频生成 | #扩散模型 | #语音克隆 #多模态模型

👥 **作者与机构**

- 第一作者：Yali Cai（国防科技大学计算机学院）
- 通讯作者：Peng Qiao, Dongsheng Li（国防科技大学计算机学院，并行与分布式计算国家重点实验室）
- 作者列表：Yali Cai, Peng Qiao, Dongsheng Li（国防科技大学计算机学院，并行与分布式计算国家重点实验室）

#

💡 **毒舌点评**

亮点：论文将语音克隆、多模态融合和视频扩散模型（V-DiT）整合成一个端到端框架，并创新性地为T2S模块引入帧级时间锚点以改善音视频同步，整体技术路线清晰。
短板：T2S模块中“动态节奏控制”的具体机制（公式f(S, Θ)）描述过于模糊，核心创新点之一缺乏技术细节支撑；实验部分的对比方法（如表3）更新不够及时，且部分指标（如多样性Diver）在所有方法中几乎无差异，难以证明其优越性。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了公开数据集HDTF[16]和40个YouTube视频。未说明YouTube视频的具体来源或获取方式。
- Demo：未提及。
- 复现材料：给出了部分训练超参数（优化器、学习率、EMA衰减率、T2S模块的batch size和epoch数）和数据集信息。未提供模型架构图的详细尺寸、损失函数、完整的数据预处理流程等。
- 论文中引用的开源项目：引用了FastSpeech 2 [13]、FREEVC [22]、VITS2 [23]等作为对比或基础。
- 论文中未提及明确的开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文旨在解决文本驱动会说话头部生成（THG）中存在的唇部同步不准确和面部表情多样性有限的问题。方法核心是提出一个多模态融合框架VT-Heads，它包含三个关键部分：1）一个带有帧级时间锚点和动态节奏控制的T2S模块，用于生成与视频帧节奏同步的语音；2）一个基于注意力的多模态融合模块，用于细粒度融合文本和语音特征；3）一个以条件V-DiT为骨干的扩散模型，将视频生成建模为时序迭代去噪过程。与现有两阶段方法（先T2S再驱动视频）不同，VT-Heads通过多模态融合增强了文本语义与视觉生成的关联。实验表明，在HDTF数据集和YouTube视频上，VT-Heads在图像质量（FID↓10.12）、唇形同步（Sync↑5.99/6.21）等指标上优于部分基线。其实际意义在于为文本驱动的数字人内容生成提供了一种更同步、更自然的方案。主要局限性在于T2S模块的技术细节不够透明，且与最新SOTA方法的对比有待加强。

#

---

