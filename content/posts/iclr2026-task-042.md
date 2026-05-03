---
title: "ICLR 2026 - 音频到视频生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音频到视频生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频到视频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频到视频生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Syncphony: Synchronized Audio-to-Video Generation with Diffu](/audio-paper-digest-blog/posts/2026-05-03-syncphony-synchronized-audio-to-video-generation) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Syncphony: Synchronized Audio-to-Video Generation with Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-03-syncphony-synchronized-audio-to-video-generation)

🔥 **8.0/10** | 前25% | #音频到视频生成 | #扩散模型 | #跨模态注意力 #CycleSync

👥 **作者与机构**

- 第一作者：Jibin Song（延世大学人工智能系，CineLingo）
- 通讯作者：未明确说明（通常第一作者或末位作者，文中邮箱sjbpsh1@yonsei.ac.kr对应Jibin Song）
- 作者列表：Jibin Song（延世大学人工智能系，CineLingo），Mingi Kwon（延世大学人工智能系，CineLingo），Jaeseok Jeong（延世大学人工智能系，CineLingo），Youngjung Uh（延世大学人工智能系）

💡 **毒舌点评**

论文的亮点在于其系统性：将“对齐”问题拆解为训练时的监督（Motion-aware Loss）和推理时的引导（Audio Sync Guidance），并配合新的评估指标（CycleSync）形成闭环，技术方案完整且各部分动机清晰。短板在于，其核心的CycleSync指标高度依赖一个外部的视频到音频（V2A）模型，这使得评价标准本身成为一个“黑箱”，且论文承认该V2A模型可能引入数据集偏差（如青蛙叫声、保龄球背景音乐），这在一定程度上削弱了评估的绝对客观性。

🔗 **开源详情**

- 代码：论文声明将公开代码，项目主页已提供（https://jibin86.github.io/syncphony_project_page），但论文中未提供具体的代码仓库链接。
- 模型权重：论文声明将发布训练好的模型，但未提供下载链接。
- 数据集：使用的是公开数据集AVSync15和TheGreatestHits，论文未提及自己发布新数据集。
- Demo：项目主页可能包含演示视频，但论文中未明确提供在线交互式Demo链接。
- 复现材料：附录（A-J）提供了极其详细的训练细节、超参数、架构选择、评估设置和消融实验，复现信息非常充分。
- 论文中引用的开源项目：依赖Pyramid Flow作为视频骨干、DenseAV作为音频编码器、CLIP/T5作为文本编码器、V-AURA作为V2A模型用于CycleSync评估，以及librosa进行峰值检测。
- 开源计划：论文明确表示将公开以支持未来研究，但具体发布时间点未说明。

📌 **核心摘要**

1.  解决的问题：现有文本到视频（T2V）和图像到视频（I2V）生成模型难以精确控制动作时序，而音频天然包含丰富的时序线索，是理想的同步条件。但现有音频到视频（A2V）模型因间接条件机制或有限的时序建模能力，难以实现精细的音视频同步。
2.  方法核心：提出Syncphony框架，基于预训练的视频骨干网络（Pyramid Flow），在Transformer的后部模块中插入音频交叉注意力层进行条件注入。核心技术创新包括：(1) Motion-aware Loss：在训练中，根据相邻帧潜变量差异（代表运动强度）加权损失，使模型更关注高动态区域，从而更准确地学习与音频事件对应的运动时机和幅度。(2) Audio Sync Guidance (ASG)：在推理时，构建一个跳过音频层的“off-sync”弱模型，通过对比完整模型与弱模型的输出差异来放大音频信号的引导作用，无需额外训练即可增强同步性。
3.  与已有方法相比的新颖性：不同于以往将音频映射到文本空间或基于振幅调制的方法，Syncphony通过直接交叉注意力注入音频特征。其提出的ASG引导机制巧妙地利用了架构中音频路径的独立性，避免了传统分类器自由引导（CFG）对音频条件（包括“静音”）进行随机丢弃导致的训练不一致问题。同时，提出了首个支持高帧率并基于V2A重建循环的同步评估指标CycleSync。
4.  主要实验结果：在AVSync15和TheGreatestHits数据集上，Syncphony在CycleSync指标和用户研究中均显著优于现有方法。例如，在TheGreatestHits数据集上，Syncphony的CycleSync得分为16.18±1.26，而基线AVSyncD为9.89±0.84，甚至略高于真实视频的15.99±1.5。在AVSync15的用户研究中，74%的参与者认为Syncphony的同步性更好，90%认为图像质量更好。

| 模型 | 输入 | FVD ↓ | CycleSync ↑ (AVSync15) |
| :--- | :--- | :--- | :--- |
| Pyramid Flow (fine-tuned) | I+T | 294.6 | 12.34±1.14 |
| AVSyncD | I+T+A | 491.5 | 16.38±1.38 |
| Syncphony (Ours) | I+T+A | 293.1 | 16.48±1.28 |
| Groundtruth | - | - | 22.15±1.8 |

5.  实际意义：为需要精确音视频同步的内容创作（如动画、游戏过场、音乐视频）提供了新的生成工具和技术路径。提出的Motion-aware Loss和ASG方法对其他需要时序对齐的跨模态生成任务也有借鉴意义。
6.  主要局限性：1) 模型生成的视频分辨率（380×640）和时长（最长5秒）仍有限；2) 训练数据集（AVSync15, TheGreatestHits）规模较小且场景类型有限；3) CycleSync指标依赖外部V2A模型，其质量直接影响评估准确性；4) Motion-aware Loss基于帧间运动，可能无法完全区分与音频无关的运动（如相机移动、背景变化）。

---

