---
title: "ICLR 2026 - 音频编辑 论文列表"
date: 2026-05-04
draft: false
tags: ["音频编辑"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频编辑 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频编辑

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-04-smartdj-declarative-audio-editing-with-audio) | 7.8分 | 前25% |

---

## 📋 论文详情

### 🥇 [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-04-smartdj-declarative-audio-editing-with-audio)

✅ **7.8/10** | 前25% | #音频编辑 | #扩散模型 | #大语言模型 #空间音频

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Zitong Lan（宾夕法尼亚大学）、Yiduo Hao（宾夕法尼亚大学）、Mingmin Zhao（宾夕法尼亚大学）

💡 **毒舌点评**

这篇论文的核心创新点在于将声明式（Declarative）编辑范式引入音频领域，通过ALM将抽象指令分解为原子操作的“规划器-执行器”架构确实巧妙，解决了现有方法需用户逐步指定操作的痛点。然而，其原子操作集是固定的、封闭的，对于更复杂或细粒度的音频变换（如情感风格、特定声学效果模拟），模型的泛化与扩展能力存疑，这使其目前更像是一个精心设计的“特定指令集解释器”，而非通用的音频场景重构引擎。

🔗 **开源详情**

- 代码：论文中未提及具体代码仓库链接，但Reproducibility Statement明确承诺“upon acceptance”公开。
- 模型权重：未提及当前公开的预训练权重，但承诺后续发布。
- 数据集：论文中描述了用于训练ALM（240k对）和LDM（1M对）的合成数据集，并承诺公开。
- Demo：未提及。
- 复现材料：论文在附录中提供了极其详细的实现细节，包括数据合成Prompt、空间音频模拟参数、基线实现细节、模型架构配置（如DiT层数、维度）、训练超参数（学习率、batch size、优化器、训练步数）等，复现信息充分。
- 引用的开源项目：CLAP (Wu et al., 2023), Audio Flamingo 2 (Ghosh et al., 2025a), Qwen2.5, Stable-Audio-Open (Evans et al., 2024b), PyRoomAcoustics (Scheibler et al., 2018), DAC (Kumar et al., 2023)。
- 开源计划：论文明确表示将在论文被接收后公开代码、预训练模型和合成数据集。

📌 **核心摘要**

本文旨在解决现有音频编辑模型依赖用户逐步指定低层操作、无法理解高层语义指令，且局限于单声道音频的问题。核心方法是提出了SmartDJ框架，该框架包含一个音频语言模型（ALM）作为“规划器”，接收原始音频和用户声明式指令（如“让这个声音听起来像阳光下的森林”），将其分解为一系列原子编辑操作序列（如移除雨声、添加鸟鸣、改变方向等）。这些操作随后由一个潜在扩散模型（LDM）作为“执行器”顺序执行，生成最终的立体声音频。与已有方法相比，其新在于首次实现了对声明式、抽象编辑指令的端到端处理，并首次将音频编辑扩展到立体声场景，同时设计了一个可扩展的数据合成管线来生成训练所需的复杂编辑对。实验表明，SmartDJ在感知质量、空间真实性和语义对齐方面均优于现有基线方法，在声明式编辑任务中，其FD（Fréchet Distance）指标为10.60，远低于Audit的28.56；用户研究也显示，在音频质量和指令对齐方面，SmartDJ的偏好率均超过80%。该工作的实际意义在于简化了VR/AR、游戏、影视后期等领域的音频设计流程。主要局限性在于其原子操作集是预定义的，难以覆盖所有可能的音频变换；此外，ALM对相互矛盾或过于抽象的指令（如“诡异又欢快”）的推理能力有限。

---

