---
title: "ICLR 2026 - 音频修复 论文列表"
date: 2026-05-03
draft: false
tags: ["音频修复"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频修复 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频修复

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-03-token-based-audio-inpainting-via-discrete) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-03-token-based-audio-inpainting-via-discrete)

✅ **7.0/10** | 前25% | #音频修复 | #扩散模型 | #音频生成 #预训练

👥 **作者与机构**

- 第一作者：Tali Dror（未说明）
- 通讯作者：未说明
- 作者列表：Tali Dror（未说明）、Iftach Shoham（未说明）、Moshe Buchris（未说明）、Oren Gal（未说明）、Haim H. Permuter（未说明）、Gilad Katz（未说明）、Eliya Nachmani（未说明）
（注：论文摘要中未提供任何作者的所属机构信息。）

💡 **毒舌点评**

这篇论文的亮点在于勇敢地将离散扩散模型“嫁接”到预训练音频tokenizer的离散空间上，首次尝试解决音乐修复中令人头疼的长间隙问题，并设计了两个看似有效的训练技巧。短板在于其描述略显“黑箱”，关键组件（如具体音频tokenizer型号、吸收转移的详细机制）和更深层的消融实验细节在摘要中未充分展现，让人对“复现”和“理解其全部威力”打了点折扣。

🔗 **开源详情**

- 代码：论文中提到“Visit our project page for examples and code”，说明代码将在项目页面提供。
- 模型权重：论文中未提及是否公开预训练或训练好的模型权重。
- 数据集：使用了公开的MusicNet和MAESTRO数据集，但论文未说明其获取方式或处理脚本。
- Demo：论文中未提及是否提供在线演示。
- 复现材料：论文摘要未提供详细的训练配置、超参数设置或附录说明。
- 论文中引用的开源项目：摘要中未提及任何依赖的开源项目或模型。可以推断其依赖一个预训练的音频Tokenizer（具体型号未说明）。

📌 **核心摘要**

1. 要解决什么问题：音���音频修复（Audio Inpainting），即恢复录音中缺失的大片段音频。传统扩散模型在处理长间隙时性能下降。
2. 方法核心是什么：提出首个基于离散扩散模型的方法。流程是：先将音频用预训练的音频Tokenizer离散化为token序列，然后在token序列上训练一个离散扩散模型，通过反向扩散过程预测并填充缺失的token，最后解码回音频。
3. 与已有方法相比新在哪里：首次将离散扩散应用于token化的音乐表示；引入了两种新的训练方法：1）导数正则化损失，强制生成序列在时间上平滑过渡；2）基于跨度的吸收转移机制，在扩散过程中为中间token引入结构化的破坏，帮助模型学习。
4. 主要实验结果如何：在MusicNet和MAESTRO数据集上进行实验，修复时长高达750ms的间隙。结果表明，对于150ms及以上的间隙，该方法在各项指标上持续优于所有强基线。论文中未给出具体数值表格。
5. 实际意义是什么：推进了音乐音频修复技术，尤其对长时缺失段的修复有效，为历史录音修复、音频编辑等应用提供了新方案。同时为离散扩散模型在音频领域的训练提供了新思路。
6. 主要局限性是什么：论文摘要未提及具体局限性。可推测的潜在局限包括：依赖预训练tokenizer的质量；扩散过程的计算开销可能较大；对于极短间隙或非音乐音频的泛化性未验证。

---

