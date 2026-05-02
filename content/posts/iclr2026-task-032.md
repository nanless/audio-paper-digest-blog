---
title: "ICLR 2026 - 音乐信息检索 论文列表"
date: 2026-05-02
draft: false
tags: ["音乐信息检索"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 音乐信息检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐信息检索

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Bridging Piano Transcription and Rendering via Disentangled ](/audio-paper-digest-blog/posts/2026-05-02-bridging-piano-transcription-and-rendering-via) | 8.0分 | 前25% |
| 🥈 | [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-02-llm2fx-tools-tool-calling-for-music-post) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Bridging Piano Transcription and Rendering via Disentangled Score Content and Style](/audio-paper-digest-blog/posts/2026-05-02-bridging-piano-transcription-and-rendering-via)

🔥 **8.0/10** | 前25% | #音乐信息检索 | #多任务学习 #解耦表示学习 | #多任务学习 #解耦表示学习

👥 **作者与机构**

- 第一作者：Wei Zeng（新加坡国立大学，综合科学与工程项目，计算学院）
- 通讯作者：Ye Wang（新加坡国立大学，综合科学与工程项目，计算学院）
- 作者列表：Wei Zeng（新加坡国立大学，综合科学与工程项目，计算学院）、Junchuan Zhao（新加坡国立大学，计算学院）、Ye Wang（新加坡国立大学，综合科学与工程项目，计算学院）

💡 **毒舌点评**

亮点在于其统一的框架设计与“内容-风格”解耦的清晰思路，巧妙地利用了EPR和APT的互逆性进行联合训练，并无需繁琐的音符级对齐数据，这在方法论上颇具启发性。短板是，虽然框架通用，但实验主要基于古典钢琴音乐，其对于更丰富多变的流行音乐等风格的泛化能力未被验证；此外，模型参数量（188M）显著高于一些基线，计算成本是一个需要考虑的实际问题。

🔗 **开源详情**

- 代码：论文明确表示“代码将在论文被接受后发布”，提供了项目主页链接（https://wei-zeng98.github.io/joint-apt-epr/），表明有开源计划。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：使用了公开的ASAP和ATEPP数据集，以及从MuseScore收集并过滤的公开乐谱数据。论文未提及是否提供已处理的未配对演奏MIDI数据。
- Demo：提供了在线演示页面（https://wei-zeng98.github.io/joint-apt-epr/），包含EPR渲染和风格迁移的示例。
- 复现材料：附录B提供了极其详细的模型实现细节（PyTorch Lightning、多任务训练设置、优化器、掩码策略等），是高质量的复现指南。
- 论文中引用的开源项目：提到了MidiTok（用于MIDI分词）、Aria-AMT（用于音频转MIDI）和Partitura（用于音乐处理）。
- 总体开源情况：论文有明确的开源承诺和详尽的复现材料，开源状态积极，但代码和权重尚未发布。

📌 **核心摘要**

这篇论文旨在解决钢琴演奏渲染（EPR）和自动钢琴转录（APT）两个基础但互逆的任务长期被独立研究的问题。其核心方法是构建一个基于Transformer的统一序列到序列（Seq2Seq）框架，通过解耦“音符级乐谱内容”和“全局演奏风格”两种表示，来联合学习这两个任务。与已有方法相比，其新意在于：1）首次将EPR和APT统一建模，实现双向监督；2）提出无需音符级对齐的Seq2Seq训练范式，降低了数据标注门槛；3）设计了一个独立的、基于扩散模型的演奏风格推荐（PSR）模块，能够仅从乐谱内容生成合适的风格嵌入。实验表明，该联合模型在ASAP数据集的APT任务上，达到了与最先进端到端模型（Beyer & Dai, 2024）可比的性能（例如，ScoreSimilarity平均误差Eavg从14.10降至12.48）。在EPR任务上，其客观指标（如速度MAE为0.37）和主观评价均优于或接近现有基线。消融实验验证了联合训练和无对齐数据的重要性。该工作的实际意义在于实现了音乐模态间转换的双向建模，并支持风格可控的演奏生成；主要局限性在于计算开销较大，且实验验证局限于古典钢琴音乐。

---

### 🥈 [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-02-llm2fx-tools-tool-calling-for-music-post)

🔥 **8.0/10** | 前25% | #音乐信息检索 | #大语言模型 #多模态模型 | #大语言模型 #多模态模型

👥 **作者与机构**

- 第一作者：SeungHeon Doh（KAIST， Sony AI）
- 通讯作者：Junghyun Koo（Sony AI）
- 作者列表：SeungHeon Doh（KAIST， Sony AI）， Junghyun Koo（Sony AI）， Marco A. Martínez-Ramírez（Sony AI）， Woosung Choi（Sony AI）， Wei-Hsiang Liao（Sony AI）， Qiyu Wu（Sony Group Corporation）， Juhan Nam（KAIST）， Yuki Mitsufuji（Sony AI， Sony Group Corporation）

💡 **毒舌点评**

亮点：论文构建了一个从数据集到模型框架再到评估体系的完整闭环，首次将LLM的结构化工具调用能力系统地引入音乐效果链生成任务，实现了生成效果链、链式思考和自然语言响应的统一，思路清晰且工程化程度高。短板：实验评估基本在可控的单乐器场景下进行，离真实世界复杂的多轨音乐制作（如混音）仍有距离；效果链生成的“一对多”固有模糊性问题在评估中未被充分考量，可能高估了模型在真实场景下的精确性。

🔗 **开源详情**

- 代码：论文中未提及公开的代码仓库链接。
- 模型权重：未提及公开的模型权重。
- 数据集：提出了LP-Fx数据集，但未提供公开下载链接。论文中描述了其生成流程，理论上可复现。
- Demo：提供了在线演示链接：https://seungheondoh.github.io/llm2fx-tools-demo/
- 复现材料：提供了详细的训练策略（两阶段）、学习率、batch size、优化步数、LoRA配置等。附���中给出了完整的数据生成提示词和评估提示词。但未提供预训练检查点或配置文件。
- 论文中引用的开源项目：Pedalboard (音频效果器库)， dasp-pytorch (用于基线DeepAFx-ST)。

📌 **核心摘要**

1. 问题：音乐后期制作中，从音频反向工程或风格迁移来确定合适的效果器链（Fx-chain）及其参数，需要专业经验且耗时耗力。
2. 核心方法：本文提出LLM2Fx-Tools，一个多模态LLM框架，利用链式思考（CoT）分解任务，并通过工具调用生成可执行的效果器链。模型以预处理后的干声、参考音频和指令作为输入，输出CoT推理、工具调用序列（效果器及参数）和自然语言回复。
3. 创新点：与传统回归或微分优化方法相比，该框架能动态选择效果器类型、确定顺序，并提供可解释的推理过程；将任务从单模态音频预测扩展到多模态指令跟随。
4. 实验结果：在LP-Fx数据集的反向工程任务中，LLM2Fx-Tools在效果器分类准确率（80%）和排序相关性（Spearman ρ=0.56）上显著优于基线；在听觉测试（MUSHRA）中，其得分（62.8）显著高于No Fx（39.1）、DeepAFx-ST（54.8）等方法。消融实验表明CoT和专用损失函数（NTL）对性能有显著贡献。
5. 实际意义：为音乐制作提供了可解释、可控制的自动化工具，降低了非专业用户的专业门槛，并展示了LLM作为音乐生产助手的潜力。
6. 主要局限：评估限于单乐器，未验证多轨混音场景；依赖Fx-Removal和归一化获得“伪干声”来解释预测；数据集规模有限；未评估对未知效果器模块的泛化能力。

---

