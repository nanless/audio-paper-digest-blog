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
| 🥇 | [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-04-smartdj-declarative-audio-editing-with-audio) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-04-smartdj-declarative-audio-editing-with-audio)

🔥 **8.0/10** | 前25% | #音频编辑 | #音频大模型 | #空间音频 #扩散模型

👥 **作者与机构**

- 第一作者：Zitong Lan（宾夕法尼亚大学）
- 通讯作者：未明确说明（论文首页仅列出三位作者）
- 作者列表：Zitong Lan（宾夕法尼亚大学）、Yiduo Hao（宾夕法尼亚大学）、Mingmin Zhao（宾夕法尼亚大学）

💡 **毒舌点评**

亮点：首次将音频语言模型（ALM）引入音频编辑作为高层“规划器”，实现了从声明式指令到可执行编辑步骤的智能分解，这一“分而治之”的设计思路清晰且有效。
短板：框架依赖固定的原子操作集合，对于超出预定义操作的编辑需求（如改变特定声源的音色为某种未见过的类型）尚无扩展能力，这限制了其通用性。

🔗 **开源详情**

- 代码：论文中提供了项目主页链接（https://waves.seas.upenn.edu/projects/smartdj），并承诺在论文被接受后开源代码。
- 模型权重：论文明确表示将开源预训练模型。
- 数据集：论文明确表示将开源其合成的声明式编辑数据集和单步编辑数据集。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文提供了完整的架构描述、损失函数、训练配置（优化器、学习率、批量大小、训练轮次/步数）、硬件信息以及数据合成管线的详细提示词（Base Prompt）。
- 论文中引用的开源项目：CLAP（音频编码器）、FLAN-T5（文本编码器）、AF2（ALM初始化基座）、Qwen2.5-3B（LLM部分）、DAC/Stable-Audio-Open（VAE架构参考）、PyRoomAcoustics（声学仿真）、GPT-4o（数据合成）。

📌 **核心摘要**

本文针对现有音频编辑模型依赖模板化指令、仅支持单声道、需用户指定低级操作等问题，提出了SmartDJ框架。该框架首次将音频语言模型（ALM）作为编辑规划器，接收用户高级声明式指令（如“让这段音频听起来像晴朗的森林”）和原始音频，自动分解为一系列原子编辑操作（如添加、移除、调整空间位置等）。随后，一个支持立体声的潜在扩散模型（LDM）编辑器顺序执行这些操作，完成音频转换。为解决监督数据缺乏问题，论文设计了可扩展的数据合成管线，结合LLM设计器和信号处理作曲器，生成了大规模训练数据。实验表明，SmartDJ在感知质量、空间真实性和语义对齐度上显著优于现有方法（如Audit, SDEdit）。其主要局限在于原子操作集固定，且顺序执行效率有待优化。

---

