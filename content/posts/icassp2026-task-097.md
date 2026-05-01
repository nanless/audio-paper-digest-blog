---
title: "ICASSP 2026 - 跨模态检索 论文列表"
date: 2026-04-29
draft: false
tags: ["跨模态检索"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 跨模态检索 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 跨模态检索

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Auto-MatchCut: An Audio-Visual Retrieval Framework for Seaml](/audio-paper-digest-blog/posts/2026-04-29-auto-matchcut-an-audio-visual-retrieval-framework) | 7.0分 | 前50% |
| 🥈 | [CoVA: Text-Guided Composed Video Retrieval for Audio-Visual ](/audio-paper-digest-blog/posts/2026-04-29-cova-text-guided-composed-video-retrieval-for) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Auto-MatchCut: An Audio-Visual Retrieval Framework for Seamless Match Cutting](/audio-paper-digest-blog/posts/2026-04-29-auto-matchcut-an-audio-visual-retrieval-framework)

✅ **7.0/10** | 前50% | #跨模态检索 | #音频检索 | #视频检索 #跨模态

👥 **作者与机构**

- 第一作者：Hongjie Chen (Dolby Laboratories)
- 通讯作者：未说明
- 作者列表：Hongjie Chen (Dolby Laboratories), Hanyu Meng (The University of New South Wales), Gautam Bhattacharya (Dolby Laboratories), Lie Lu (Dolby Laboratories), Josh Kimball (Dolby Laboratories), Ryan Rossi (未说明)

#

💡 **毒舌点评**

亮点：框架设计巧妙，通过独立控制音频和视觉距离参数（τ_a, τ_v），为用户提供了在“平滑”与“创意对比”之间灵活调节的杠杆，这是对现有单一模态方法的一个有意义扩展。  
短板：评估方法过于依赖主观打分（人类和LLM），缺乏如剪切点帧级精确度、跨视频语义连贯性等客观、可量化的指标，使得“超过60%平滑”的结论说服力打折扣；且整个系统严重依赖所选编码器（CLAP/CLIP）的性能，未探讨其边界与失效情况。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开框架使用的编码器（CLAP/CLIP）以外的任何模型权重。
- 数据集：使用的是公开的AudioSet数据集，但论文未说明其处理后的具体版本或发布信息。
- Demo：提供了一个演示视频链接：https://bit.ly/4kjT6CP。
- 复现材料：未提供训练细节、配置文件或检查点。论文中给出了核心算法公式，但工程实现细节缺失。
- 论文中引用的开源项目：依赖的开源模型/工具包括 CLAP [17] 和 CLIP [18]。

📌 **核心摘要**

1. 解决的问题：视频匹配剪辑（Match Cutting）是一个耗时耗力的电影剪辑技术，需要找到视觉或听觉上能平滑过渡的镜头对。现有方法多局限于单一模态（仅视觉或仅音频），导致转场效果不完整。
2. 方法核心：提出AutoMatchCut，一个免训练的检索框架。它将视频片段编码为音频和视觉嵌入，存入两个独立的向量数据库。给定查询视频，系统在音频和视觉嵌入空间中，寻找与查询片段最“远”但仍在用户设定的阈值（τ_a, τ_v）内的候选片段，以此生成兼具关联性与对比性的转场。
3. 与已有方法相比新在哪里：这是首个整合音频和视觉双重距离控制进行匹配剪切检索的框架，强调了通过可控的“距离”来丰富观感，而不仅仅是追求相似性。
4. 主要实验结果：在AudioSet数据集上进行实验。消融研究表明，通过调整τ_a和τ_v可以控制检索结果的类别重叠率（α）。例如，当(τ_a=0.15, τ_v=1.00)时，重叠率最高为16.8%。主观评估中，人类和视频LLM（Video-Llava, LlaVa-NeXT）对生成的转场进行评分，超过60%的结果被认为在音频或视觉上是平滑的（得分≥2）。
5. 实际意义：为视频创作者提供了一个快速、可定制的自动匹配剪辑工具原型，能显著降低创作门槛和时间成本。
6. 主要局限性：框架高度依赖预训练编码器（如CLAP, CLIP）的质量，其嵌入空间的特性直接决定了检索效果；评估方法依赖主观打分，缺乏公认的客观基准和对比；未提供可复现的代码和模型。

#

---

### 🥈 [CoVA: Text-Guided Composed Video Retrieval for Audio-Visual Content](/audio-paper-digest-blog/posts/2026-04-29-cova-text-guided-composed-video-retrieval-for)

✅ **6.5/10** | 前25% | #跨模态检索 | #多模态模型 | #音视频 #对比学习

👥 **作者与机构**

- 第一作者：Gyuwon Han (Chung-Ang University)
- 通讯作者：Chanho Eom (Chung-Ang University)
- 作者列表：Gyuwon Han (Chung-Ang University)、Young Kyun Jang (Google DeepMind)、Chanho Eom (Chung-Ang University)

💡 **毒舌点评**

论文最大的亮点是提出了一个非常实际且被忽视的问题——用户可能因为音频不同而对视觉相似的视频有不同需求，并为此构建了首个音视频组合变化的检索基准，填补了领域空白。短板在于其提出的AVT融合模块本质上是为多模态特征学习一个加权平均，技术复杂度较低，核心模型架构创新有限。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/perceptualai-lab/CoVA/
- 模型权重：论文中未明确提及是否公开预训练或微调后的模型权重。
- 数据集：论文中构建了AV-Comp基准数据集，并提供了在线演示页面，但未明确说明数据集的公开下载方式。数据集地址：https://perceptualai-lab.github.io/CoVA/
- Demo：提供了在线演示：https://perceptualai-lab.github.io/CoVA/
- 复现材料：论文提供了实验设置、关键超参数（学习率、批大小、轮数）和训练硬件信息。未提供训练日志、配置文件或检查点。
- 论文中引用的开源项目：
  1.  CLIP（视觉和文本编码器）
  2.  AST（音频编码器）
  3.  Qwen2.5-VL-32B-Instruct（用于生成视频描述）
  4.  Gemini（用于生成修改文本）
  5.  AudioCaps 2.0（提供人工标注的音频描述）

📌 **核心摘要**

1. 要解决什么问题：现有的组合视频检索（CoVR）方法仅考虑视觉内容的修改，忽略了音频对用户检索意图的关键影响，导致视觉相似但音频不同的视频被错误地视为语义等价。
2. 方法核心是什么：提出了CoVA任务和AV-Comp数据集。方法上，提出了AVT Compositional Fusion模块，该模块通过一个简单的MLP为来自参考视频、修改文本（拆分为对象、动作、属性、音频四个方面）的每个特征分量预测一个权重，然后进行加权融合，以动态适应查询语义。
3. 与已有方法相比新在哪里：首次将音频模态的变化作为组合检索的核心考量因素。构建了首个支持音视频对齐变化查询的数据集AV-Comp。提出的AVT模块相比简单的平均融合，能更有效地利用多模态信息。
4. 主要实验结果如何：在AV-Comp测试集上，CoVA（使用CLIP-L编码器）达到了35.9% R@1，显著优于LanguageBind（27.17%）和ImageBind（20.2%）。消融实验证明移除任何文本组件（对象、动作、属性、音频）都会导致性能下降，证实了四个组件的必要性。主要结果对比如下表：

| 方法         | R@1↑ | R@5↑  | R@10↑ | MnR↓ |
| :----------- | :--- | :---- | :---- | :--- |
| ImageBind    | 20.2 | 50.5  | 65.4  | 14.6 |
| LanguageBind | 27.17| 61.44 | 77.12 | 8.7  |
| CoVA (Ours)  | 35.9 | 73.7  | 86.4  | 6.2  |

5. 实际意义是什么：为音视频内容的精细检索提供了新的范式和评估基准，推动多模态检索模型更全面地理解人类的多感官意图。
6. 主要局限性是什么：AVT模块设计相对简单，其性能提升部分依赖于更换了更强的文本编码器（CLIP-L）。数据集构建过程依赖于现成的视觉/音频描述生成模型（Qwen2.5-VL, Gemini），可能引入偏差。方法的可扩展性和在更复杂场景下的鲁棒性有待验证。

---

