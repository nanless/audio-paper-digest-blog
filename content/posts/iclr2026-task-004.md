---
title: "ICLR 2026 - 声音分离 论文列表"
date: 2026-05-03
draft: false
tags: ["声音分离"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 声音分离 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 声音分离

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AlignSep: Temporally-Aligned Video-Queried Sound Separation ](/audio-paper-digest-blog/posts/2026-05-03-alignsep-temporally-aligned-video-queried-sound) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AlignSep: Temporally-Aligned Video-Queried Sound Separation with Flow Matching](/audio-paper-digest-blog/posts/2026-05-03-alignsep-temporally-aligned-video-queried-sound)

🔥 **8.5/10** | 前25% | #声音分离 | #流匹配 | #音视频 #基准测试

👥 **作者与机构**

- 第一作者：Xize Cheng（浙江大学）
- 通讯作者：Zhou Zhao（浙江大学）
- 作者列表：Xize Cheng（浙江大学），Chenyuhao Wen（浙江大学），Tianhao Wang（浙江大学），Yongqi Wang（未说明），Zehan Wang（浙江大学），Rongjie Huang（浙江大学），Tao Jin（浙江大学），Zhou Zhao（浙江大学）。注：论文中“Independent Author2”指代不明，但作者列表第一行标注了浙江大学。

💡 **毒舌点评**

亮点在于开创性地将流匹配范式引入视觉引导的声音分离任务，并通过精巧的时序拼接和无交叉注意力的Transformer设计解决了多模态条件生成中的对齐难题。短板是作为生成式方法，其推理速度（2.17 FPS @ 25步）相比判别式方法（如OmniSep的11.2 FPS）存在显著差距，这在实际应用中可能是一个瓶颈。

🔗 **开源详情**

- 代码：论文中提到将公开代码，并提供了项目主页链接（https://AlignSep.github.io），但论文中未直接给出代码仓库链接。
- 模型权重：论文中提到将公开预训练模型。
- 数据集：使用了公开数据集MUSIC-Clean和VGGSound-Clean。新构建的VGGSound-Hard数据集承诺将公开。
- Demo：项目主页链接可能包含演示，但论文中未明确描述在线Demo。
- 复现材料：提供了详细的模型架构参数（附录A表4，表5）、评估协议（附录B表7）和部分实验设置。但完整的训练脚本、配置文件、检查点及训练过程的详细超参数列表未在文中提供。
- 论文中引用的开源项目：AudioLDM（用于音频VAE），CAVP（时序视觉编码器），BigVGAN（声码器），CLAP（用于构建VGGSound-Hard）。

📌 **核心摘要**

1.  要解决什么问题：现有视频查询声音分离（VQSS）方法在面对声学特征相似的干扰源（同质干扰）和重叠声轨时，因时序建模不足和音视频对齐能力弱，导致分离不完整或产生伪影。
2.  方法核心是什么：提出AlignSep，首个基于条件流匹配（Flow Matching）的生成式VQSS模型。它设计了一个时序对齐的向量场估计器，通过简单的特征拼接和无交叉注意力的Transformer编码器来强制保持音视频的时序一致性。
3.  与已有方法相比新在哪里：1）范式创新：从判别式掩膜预测转向生成式流匹配，能更好地处理重叠信号，避免频谱空洞。2）对齐机制：显式地设计了保持跨模态时序一致性的架构，而非依赖语义特征。3）评估基准：构建了新的VGGSound-Hard基准，专注于评估模型在同质干扰和强时序线索下的性能。
4.  主要实验结果如何：
    - 定量结果：在三个基准（MUSIC-Clean, VGGSound-Clean, VGGSound-Hard）上，AlignSep在语义一致性（SA-A， SA-V）和时间对齐（TA-V）指标上均达到最优。特别是在最具挑战性的VGGSound-Hard上，AlignSep的TA-V达到95.76%，远超最强基线OmniSep的76.27%。具体数据见下表。
    - 感知评估（MOS）：在噪声残留（NR）、音视频一致性（AVC）、音频质量（AQ）和总体得分（OS）四个维度上，AlignSep也全面领先。
    - 消融实验：证明了流匹配（比扩散模型性能更优）和基于拼接的时序融合策略（比交叉注意力效果好）的有效性。
5.  实际意义是什么：为复杂的视听场景分析、视频编辑中的音轨分离与增强、以及为听力障碍者提供视觉线索的声音增强等应用提供了更鲁棒的技术基础。
6.  主要局限性是什么：生成式模型的推理速度较慢；对时序视觉线索的依赖性较强（在无明显时序动作的场景下可能受限）；论文中未对比更多最新的基于扩散的分离模型。

实验结果对比表（关键指标）

| 方法 | 数据集 | SA-A ↑ | SA-V ↑ | TA-V ↑ |
| :--- | :--- | :--- | :--- | :--- |
| CLIPSep | VGGSound-Clean | 66.74 | 24.21 | 79.17 |
| OmniSep | VGGSound-Clean | 70.83 | 27.57 | 81.25 |
| AlignSep (ours) | VGGSound-Clean | 73.38 | 27.89 | 96.88 |
| | | | | |
| CLIPSep | VGGSound-Hard | - | - | 85.59 |
| OmniSep | VGGSound-Hard | - | - | 76.27 |
| AlignSep (ours) | VGGSound-Hard | - | - | 95.76 |

实验结果相关图表
![对比传统方法与AlignSep在处理时序错位和频谱空洞问题上的定性结果](icassp-img://DVDkFcxU1D/3.png)
上图（对应论文图4）展示了两个定性对比案例：(a) 时序错位案例，AlignSep能严格按鼓点节奏分离，而OmniSep在动作停止后仍产生鼓声；(b) 频谱空洞案例，AlignSep生成的频谱更连续完整，而传统方法出现断裂。

---

