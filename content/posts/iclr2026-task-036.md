---
title: "ICLR 2026 - 音视频生成 论文列表"
date: 2026-05-02
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
| 🥇 | [JavisDiT++: Unified Modeling and Optimization for Joint Audi](/audio-paper-digest-blog/posts/2026-05-02-javisdit-unified-modeling-and-optimization-for) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [JavisDiT++: Unified Modeling and Optimization for Joint Audio-Video Generation](/audio-paper-digest-blog/posts/2026-05-02-javisdit-unified-modeling-and-optimization-for)

✅ **7.5/10** | 前25% | #音视频生成 | #流匹配 | #扩散模型 #多模态模型

👥 **作者与机构**

- 第一作者：Kai Liu, Yanhao Zheng, Kai Wang（共同第一作者）
  - Kai Liu：浙江大学，与HiThink Research有关
  - Yanhao Zheng：未明确说明机构
  - Kai Wang：多伦多大学
- 通讯作者：Hao Fei（新加坡国立大学）
- 作者列表：
  - Kai Liu (浙江大学, HiThink Research)
  - Yanhao Zheng (未说明具体机构)
  - Kai Wang (多伦多大学)
  - Shengqiong Wu (新加坡国立大学)
  - Rongjunchen Zhang (HiThink Research)
  - Jiebo Luo (罗切斯特大学)
  - Dimitrios Hatzinakos (多伦多大学)
  - Ziwei Liu (南洋理工大学)
  - Hao Fei (新加坡国立大学，通讯作者)
  - Tat-Seng Chua (新加坡国立大学)

💡 **毒舌点评**

论文的最大亮点在于提出了一个简洁且高效的统一框架（MS-MoE + TA-RoPE），显著缩小了开源联合音视频生成模型与商业模型Veo3之间的差距。然而，所有实验仅在标准学术基准（JavisBench）上进行，缺乏对真实世界长尾场景、复杂语义或大规模生成能力的验证，其声称的“里程碑”意义有待更广泛的应用场景检验。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://JavisVerse.github.io/JavisDiT2-page
- 模型权重：提供预训练模型权重。
- 数据集：提供了用于音视频SFT的330K筛选数据集和用于DPO的25K数据集。
- Demo：项目主页可能提供演示（未在论文文本中明确说明，但提供了链接）。
- 复现材料：论文正文和附录详细描述了三阶段训练流程、所有超参数、数据处理方法、评估基准和指标，复现信息充分。
- 引用的开源项目：依赖并冻结了Wan2.1（视频VAE、文本编码器）、AudioLDM2（音频VAE）、多个奖励模型（VideoAlign, AudioBox, SynchFormer, ImageBind）、以及用于数据处理的工具（FunASR, OpenSora的筛选策略）。

📌 **核心摘要**

1. 要解决什么问题：现有开源的联合音频-视频生成（JAVG）模型在生成质量、时间同步性和与人类偏好对齐方面，仍落后于如Veo3等先进的商业模型。
2. 方法核心是什么：论文提出了JavisDiT++框架，其核心包括三部分：(1) 模态特定混合专家（MS-MoE），在共享注意力层后使用独立的音频和视频FFN，以增强跨模态交互同时保持单模态质量；(2) 时间对齐旋转位置编码（TA-RoPE），通过统一的时间轴ID显式实现音频和视频token的帧级同步；(3) 音视频直接偏好优化（AV-DPO），首次将人类偏好对齐引入JAVG，通过多维度奖励模型构建偏好数据对模型进行微调。
3. 与已有方法相比新在哪里：相比于之前复杂的双流DiT（如JavisDiT, UniVerse-1），本文设计了一个更简洁高效的统一骨干网络。TA-RoPE比ST-Prior或缝合策略提供了更精确、无额外开销的时间对齐机制。AV-DPO则是首次在JAVG任务中应用偏好优化。
4. 主要实验结果如何：基于Wan2.1-1.3B-T2V构建的模型，在仅使用约1M公开数据训练后，在JavisBench基准上全面超越了JavisDiT和UniVerse-1。关键对比数据见下表：

| 模型 | 视频质量 (FVD↓) | 音频质量 (FAD↓) | 文本一致性 (TV-IB↑) | 音视频一致性 (AV-IB↑) | 音视频同步 (JavisScore↑, DeSync↓) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| JavisDiT (3.1B) | 204.1 | 7.2 | 0.263 | 0.197 | 0.154, 1.039 |
| UniVerse-1 (6.4B) | 194.2 | 8.7 | 0.272 | 0.104 | 0.077, 0.929 |
| Ours (2.1B) | 141.5 | 5.5 | 0.282 | 0.198 | 0.159, 0.832 |

   表1：JavisBench上主要结果对比（数据来自论文）
5. 实际意义是什么：该工作为开源联合音视频生成提供了一个性能优异、架构简洁且可高效训练的解决方案，有望成为该领域的一个重要基准和起点。
6. 主要局限性是什么：论文作者指出的局限包括：训练数据规模（~1M）有限可能限制泛化性；模型骨干（1.3B）相对较小；依赖于参数高效微调（LoRA）而非全参数训练；在可控生成（如音乐、语音的细粒度控制）和更多跨模态任务上的扩展能力尚未探索。

---

