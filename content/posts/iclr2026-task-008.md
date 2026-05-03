---
title: "ICLR 2026 - 数学推理 论文列表"
date: 2026-05-04
draft: false
tags: ["数学推理"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 数学推理 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 数学推理

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [VideoMathQA: Benchmarking Mathematical Reasoning via Multimo](/audio-paper-digest-blog/posts/2026-05-04-videomathqa-benchmarking-mathematical-reasoning) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [VideoMathQA: Benchmarking Mathematical Reasoning via Multimodal Understanding in Video](/audio-paper-digest-blog/posts/2026-05-04-videomathqa-benchmarking-mathematical-reasoning)

✅ **7.5/10** | 前25% | #数学推理 | #基准测试 | #跨模态 #模型评估

👥 **作者与机构**

- 第一作者：Hanoona Abdul Rasheed (MBZUAI)
- 通讯作者：未明确说明（论文作者列表未标注通讯作者，但通常最后一位Fahad Shahbaz Khan可能负责）
- 作者列表：
  - Hanoona Rasheed, Abdelrahman Shaker, Anqi Tang, Muhammad Maaz (MBZUAI)
  - Ming-Hsuan Yang (University of California Merced, Google Research)
  - Salman Khan (Australian National University, MBZUAI)
  - Fahad Shahbaz Khan (Linköping University, MBZUAI)

#

💡 **毒舌点评**

亮点：这是一份“体检报告”，用极其精细的标注和多维度评估，把当前多模态大模型在视频数学推理上的“虚胖”和“短板”照得一清二楚，尤其是错误分析部分，为后续模型改进指明了具体方向。
短板：作为一份“体检报告”本身，它无法开出“药方”——即提出新的、能在该基准上取得突破的模型或方法。模型们集体在“深度理解”上“挂科”（如图2a所示），也侧面反映出当前基于采样帧的范式可能已遇到瓶颈。

#

🔗 **开源详情**

- 代码：论文中提供了项目主页链接 (https://mbzuai-oryx.github.io/VideoMathQA)，并说明评估代码已集成到开源工具lmms-eval中，提供了运行评估的脚本。
- 模型权重：未提及。本文是评估工作，不涉及新模型发布。
- 数据集：论文明确了提供数据集，并可通过项目主页访问。未提及具体下载方式，但通常会附带指引。
- Demo：未提及。
- 复现材料：提供了详尽的复现信息：评估使用的具体模型列表及版本、各模型输入帧数、解码策略（贪心）、硬件（8xA100-80G）、评估工具（lmms-eval, vllm），以及所有评估提示词（CoT、后处理、步骤评估、错误分析、字幕处理等，详见附录F）。
- 论文中引用的开源项目：主要依赖lmms-eval (Li et al., 2024a) 和 vllm (Kwon et al., 2023) 作为评估框架和推理引擎。被评估的模型均为已开源或公开API的模型。

📌 **核心摘要**

1. 问题：现有数学推理基准大多基于静态图像，无法评估模型处理真实世界教学视频中随时间动态展开、多模态（视觉图表、手写板书、语音讲解）交织的复杂数学问题的能力。
2. 方法核心：提出VideoMathQA基准，包含420个专家标注的视频-问题对，覆盖10个数学领域，视频时长从10秒到1小时。每个问题设计为三种推理类型之一（直接求解、概念迁移、深度理解），并附有带时间戳的多步骤推理链标注，用于评估中间推理过程。
3. 与已有方法相比新在哪里：首次将视频时长、多模态融合（视觉+音频字幕+文本）、以及分层级的推理能力（从直接应用到深度理解）整合到一个统一的数学推理评估框架中。标注粒度细（步骤级），并引入多二元评估（MBin）减少猜测因素。
4. 主要实验结果：对30个模型（包括GPT-o4o, Gemini-2.0, Qwen2.5-VL等）进行评估。当前最强模型GPT-o4-mini在CoT MBin+字幕设置下准确率仅为44.8%，远低于人类的80.7%。模型在“深度理解”类问题和长视频上表现显著下降。字幕和更多视频帧采样对性能有提升，但小模型收益有限。主要错误源于问题误解和概念应用错误。
5. 实际意义：为评估和推动多模态大模型的高阶推理能力提供了关键的测试平台，揭示了当前模型在动态多模态推理上的严重不足，指明了未来模型需要加强长期时序关注、精细视觉理解及跨模态信息整合能力。
6. 主要局限性：数据集规模相对较小（420样本），构建成本高昂，限制了其扩展性。评估完全依赖现有的视频-语言模型框架，未探索如强化学习等新的训练范式以应对此挑战。

---

