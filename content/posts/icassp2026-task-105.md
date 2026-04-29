---
title: "ICASSP 2026 - 音乐检索 论文列表"
date: 2026-04-29
draft: false
tags: ["音乐检索"]
categories: [icassp-2026]
description: "共 3 篇 ICASSP 2026 音乐检索 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音乐检索

共 **3** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Controllable Embedding Transformation for Mood-Guided Music ](/audio-paper-digest-blog/posts/2026-04-29-controllable-embedding-transformation-for-mood) | 7.5分 | 前25% |
| 🥈 | [HarmoNet: Music Grounding by Short Video via Harmonic Resamp](/audio-paper-digest-blog/posts/2026-04-29-harmonet-music-grounding-by-short-video-via) | 7.0分 | 前25% |
| 🥉 | [Hierarchical Tokenization of Multimodal Music Data for Gener](/audio-paper-digest-blog/posts/2026-04-29-hierarchical-tokenization-of-multimodal-music) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Controllable Embedding Transformation for Mood-Guided Music Retrieval](/audio-paper-digest-blog/posts/2026-04-29-controllable-embedding-transformation-for-mood)

✅ **7.5/10** | 前25% | #音乐检索 | #对比学习 | #音乐理解 #嵌入变换

👥 **作者与机构**

- 第一作者：Julia Wilkins（SiriusXM-Pandora, USA；New York University, New York, USA）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：
    - Julia Wilkins（SiriusXM-Pandora, USA；New York University, New York, USA）
    - Jaehun Kim（SiriusXM-Pandora, USA）
    - Matthew E. P. Davies（SiriusXM-Pandora, USA）
    - Juan Pablo Bello（New York University, New York, USA）
    - Matthew C. McCallum（SiriusXM-Pandora, USA）

#

💡 **毒舌点评**

论文精准地抓住了音乐推荐系统从“千人千面”到“一键微调”的体验升级需求，并设计了一个工程上可行的嵌入变换框架，其“相似但不同情绪”的检索范式非常直观且实用。然而，整个方法高度依赖于高质量的MULE预训练嵌入和标签，在嵌入空间本身质量不高的情况下效果必然大打折扣，且“情绪”这一高度主观的属性用四个离散标签来定义和变换，其颗粒度和泛化能力值得怀疑。

#

📌 **核心摘要**

1. 问题：现有音乐嵌入（如MULE）虽然能很好地表示音乐，但缺乏对单一属性（如情绪）进行细粒度控制的能力，用户无法便捷地找到“类似但更快乐”的歌曲。
2. 方法核心：提出一种在嵌入空间进行情绪引导变换的框架。核心是设计一个轻量级MLP模型，输入种子歌曲的MULE嵌入、种子情绪标签和目标情绪标签，输出一个变换后的嵌入，该嵌入应指向目标情绪，同时保留种子歌曲的其他属性（如流派）。模型训练依赖于一种创新的最近邻采样策略，以构建情绪不同但其他方面相似的“种子-目标”嵌入对。
3. 创新点：a) 定义了情绪引导的可控音乐嵌入变换任务；b) 提出了利用最近邻采样生成训练数据对的机制；c) 设计了包含余弦相似度、三元组损失和余弦BCE的联合损失函数，以平衡情绪对齐与属性保持。
4. 主要实验结果：在大规模私有数据集和MTG-Jamendo上，本方法在情绪变换精度（Mood P@1）和属性保持（Genre P@1， Inst. J@1）上显著优于随机、平均情绪等基线，且接近理论Oracle上界（Rand-100）。消融研究证明三个损失函数互补，缺一不可。
    | 数据集/模型 | Mood P@1 | Genre P@1 | Inst. J@1 |
    | :--- | :--- | :--- | :--- |
    | 私有数据集 - 本文方法 | 0.96 | 0.32 | 未提供 |
    | 私有数据集 - 随机基线 | 0.25 | 0.05 | 未提供 |
    | 私有数据集 - 平均情绪向量 | 1.0 | 0.10 | 未提供 |
    | 私有数据集 - Oracle (Rand-100) | 1.0 | 0.38 | 未提供 |
    | MTG-Jamendo - 本文方法 | 0.83 | 0.29 | 0.45 |
    | MTG-Jamendo - 随机基线 | 0.25 | 0.01 | 0.04 |
    | MTG-Jamendo - Oracle (Rand-100) | 1.0 | 0.07 | 0.24 |
5. 实际意义：为音乐流媒体服务提供了一种新的个性化检索维度，用户可基于一首歌快速探索特定情绪下的相似内容，有望提升发现体验和用户粘性。其思路可推广到对其他连续或离散音乐属性的可控检索。
6. 主要局限性：a) 高度依赖预训练MULE嵌入的质量和标签的准确性；b) 实验中的情绪被简化为4个离散类别，与连续的情绪谱系有差距；c) 论文未公开代码和模型，限制了复现和直接应用。

#

---

### 🥈 [HarmoNet: Music Grounding by Short Video via Harmonic Resample and Dynamic Sparse Alignment](/audio-paper-digest-blog/posts/2026-04-29-harmonet-music-grounding-by-short-video-via)

✅ **7.0/10** | 前25% | #音乐检索 | #注意力机制 | #跨模态 #对比学习

👥 **作者与机构**

- 第一作者：Yaomin Shen（浙江大学南昌研究院XR系统应用研究中心）
- 通讯作者：未明确说明，但第一作者Y. Shen提供了邮箱 `coolshennf@gmail.com`。
- 作者列表：
  - Yaomin Shen（浙江大学南昌研究院XR系统应用研究中心）
  - Wei Fan（独立研究员）
  - Haichuan Hu（阿里云）
  - Xinqi Liu（香港大学工程学院）
  - Min Yang（浙江大学南昌研究院XR系统应用研究中心）
  - Rui Jia（华东师范大学上海人工智能教育研究院）
  - Junbiao Cai（独立研究员）

#

💡 **毒舌点评**

亮点：论文针对“短视频配乐”这一具体场景的痛点分析透彻，HRM的多尺度音乐重采样与DSA的动态稀疏注意力机制设计巧妙，且实验消融做得非常扎实，充分验证了每个组件的贡献。
短板：任务定义非常垂直，研究成果的普适性有待观察；更关键的是，作为一篇方法论论文，完全没有提供代码或模型开源计划，这在2026年的顶会上显得有些“古典”，严重制约了工作的影响力和可复现性。

#

📌 **核心摘要**

1. 问题：本文致力于解决“短视频音乐定位”（MGSV）任务，即给定一个短视频，自动从候选音乐库中不仅匹配最合适的音乐曲目，还要定位出该曲目中最适合做背景音乐的时间片段。现有方法忽略了音乐旋律的多尺度特性和节奏变化导致的序列重要性动态变化。
2. 方法：提出了HarmoNet框架，包含两个核心模块：谐波重采样模块和动态稀疏对齐策略。
3. 创新点：HRM将音乐信号在多个时间尺度上重采样为不同层级的表征，以捕捉全局旋律、片段结构和细粒度节奏，并与视频特征进行层级匹配。DSA策略结合可学习的高斯偏置和TopK稀疏选择，动态地强调重要的跨模态对应关系，抑制噪声，提升定位精度。
4. 实验结果：在MGSV-EC基准上，HarmoNet在所有指标上超越了先前的SOTA方法MaDe。具体提升如下表所示：
   | 模型 | mIoU↑ | R1↑ | R5↑ | R10↑ | MoR1↑ | MoR10↑ | MoR100↑ |
   | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
   | MaDe (基线) | 0.725 | 8.9 | 16.7 | 18.9 | 8.3 | 17.5 | 30.9 |
   | HarmoNet (Ours) | 0.735 | 10.7 | 19.5 | 22.8 | 9.6 | 19.7 | 32.8 |
   表：HarmoNet与基线方法MaDe在MGSV-EC基准上的关键结果对比。
   消融实验（如表2所示）证明了HRM对音乐检索（MoR指标）至关重要，而DSA对片段定位（mIoU）有显著提升。
5. 实际意义：该方法有望提升短视频创作平台的自动化配乐效率，增强内容表达力和观众参与度。
6. 主要局限性：任务场景相对特定，对更广泛的音视频理解任务的迁移性未验证；未开源代码和模型，限制了其实际应用和学术复现。

#

---

### 🥉 [Hierarchical Tokenization of Multimodal Music Data for Generative Music Retrieval](/audio-paper-digest-blog/posts/2026-04-29-hierarchical-tokenization-of-multimodal-music)

✅ **7.0/10** | 前25% | #音乐检索 | #大语言模型 | #多模态模型 #工业应用

👥 **作者与机构**

- 第一作者：Wo Jae Lee（Amazon Music, San Francisco, USA）
- 通讯作者：未说明
- 作者列表：Wo Jae Lee（Amazon Music）、Rifat Joyee（Amazon Music）、Zhonghao Luo（Amazon Music）、Sudev Mukherjee（Amazon Music）、Emanuele Coviello（Amazon Music）

💡 **毒舌点评**

亮点： 论文提出的多模态分层tokenization框架思路清晰，将复杂的音乐元数据系统地转化为LLM可处理的离散序列，并在工业规模的数据集上验证了其有效性，为构建统一的多模态音乐推荐系统提供了一个不错的工程范例。
短板： 核心的RQ-VAE应用和LLM微调部分创新有限，更偏向于系统集成；而实验完全建立在无法公开的私有数据之上，如同“自说自话”，极大削弱了其学术价值和可复现性，使得其性能提升难以被外部独立验证。

📌 **核心摘要**

本文针对生成式音乐检索任务中如何让大语言模型（LLM）有效表示和理解多模态音乐数据的问题，提出了一种名为3MToken的多模态音乐分层离散化方法。该方法将音频、语义标签、艺术家传记等九种模态的音乐数据，通过模态特定的残差量化变分自编码器（RQ-VAE）转化为层次化的离散token序列。基于此，进一步提出了3MTokenRec，一个经过指令微调的LLM，它能够根据查询意图自适应地加权不同模态，并生成对应的3MToken序列来检索音乐。实验表明，3MToken在内容检索（CBR）任务上，Hit@5分别比最强多模态基线（K-means）高27%（CP数据集）和32%（CO数据集）；在文本到音乐检索（T2MR）任务上，3MTokenRec（带模态选择）的平均Precision@K比不带模态选择的版本高10.8%。该研究为工业级音乐推荐系统提供了新的技术路径，但其主要局限在于所有实验均在未公开的专有数据集上进行，且未开源代码与模型，可复现性差。

---

