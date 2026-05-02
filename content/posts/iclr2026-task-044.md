---
title: "ICLR 2026 - 音频生成 #音乐生成 论文列表"
date: 2026-05-02
draft: false
tags: ["音频生成 #音乐生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频生成 #音乐生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频生成 #音乐生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-02-continuous-audio-language-models) | 9.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-02-continuous-audio-language-models)

🔥 **9.5/10** | 前10% | #音频生成 #音乐生成 | #自回归模型 #流匹配 | #音频生成 #音乐生成

👥 **作者与机构**

- 第一作者：Simon Rouard（Kyutai；IRCAM-CNRS Sorbonne Univ.）
- 通讯作者：未说明（论文未明确指定，通常对应邮箱作者为Simon Rouard和Alexandre Défossez）
- 作者列表：Simon Rouard（Kyutai；IRCAM-CNRS Sorbonne Univ.），Manu Orsini（Kyutai），Axel Roebel（IRCAM-CNRS Sorbonne Univ.），Neil Zeghidour（Kyutai），Alexandre Défossez（Kyutai）

💡 **毒舌点评**

这篇论文的亮点在于其系统性思维，它没有孤立地提出一个新模块，而是为“连续音频生成”这个目标设计了一整套涵盖编码、建模、采样和蒸馏的完整流水线（CALM），并通过“Pocket TTS”将学术想法落到了实处。然而，其短板在于音乐生成的实验数据集规模（400K歌曲）相比工业级模型仍显局促，这或许限制了其在最复杂音乐场景下潜力的完全展现，且论文未公开其训练数据集。

🔗 **开源详情**

- 代码：论文中提及了代码仓库链接：github.com/kyutai-labs/pocket-tts (用于Pocket TTS)。主论文代码链接在摘要中提及为：iclr-continuous-audio-language-models.github.io。
- 模型权重：明确提供了开源的“Pocket TTS”模型权重（100M参数），可在上述GitHub仓库获取。对于论文中的大型实验模型（如1.35B音乐模型），未提及是否开源。
- 数据集：论文详述了训练所用的数据集名称（如Emilia, LAION-Disco-12M等）和规模，但未提供统一的下载链接，部分数据集可能是公共的，部分可能为内部或受限数据集。
- Demo：摘要中提到了示例音频网站 iclr-continuous-audio-language-models.github.io。
- 复现材料：提供了极其详尽的附录，包括：表14（VAE超参数）、表15（模型与训练超参数）、各任务的具体数据处理细节（附录D、F、G）、消融实验（表6， 表10）、补充实验（表7， 表8， 表9， 表11， 表12， 表13）、以及人类评估方法详细说明（附录H）。
- 论文中引用的开源项目：论文主要基于并引用了以下开源项目/模型：Mimi (Défossez et al., 2024b), WavLM (Chen et al., 2021b), Helium-1 (Kyutai, 2025), Mistral 7B (Jiang et al., 2023), CLAP (Elizalde et al., 2023), SentencePiece (Kudo & Richardson, 2018), fairseq (Ott et al., 2019), Whisper (Radford et al., 2022)。

📌 **核心摘要**

1. 要解决什么问题：现有音频语言模型（ALM）依赖有损的离散音频令牌（如RVQ），导致生成高质量音频必须生成更多令牌，从而在保真度和计算成本之间存在根本矛盾。
2. 方法核心是什么：提出连续音频语言模型（CALM），在VAE的连续潜空间中进行自回归建模。核心是一个大型因果Transformer（长上下文）处理带噪声的历史潜变量，一个轻量Transformer（短上下文）处理干净的近期潜变量，两者结合后条件化一个小型一致性模型（MLP），以单步生成下一个干净的连续潜变量。
3. 与已有方法相比新在哪里：完全避免了有损量化，用一致性模型替代了离散模型的RQ-Transformer头或扩散模型的多步采样头，实现了质量与效率的同步提升。创新性地提出了“噪声长上下文+干净短上下文”的双Transformer设计、潜在分类器引导（Latent CFG）和潜在蒸馏（Latent Distillation）等技术。
4. 主要实验结果如何：在语音延续、文本到语音（TTS）和音乐延续任务上全面超越了最先进的离散模型基线。
   - TTS任务（表3）：CALM模型WER为1.81，优于F5-TTS的2.42和DSM的1.95，声学质量MUSHRA得分61.1。
   - 音乐延续任务（表4）：CALM一致性模型（4步）的FAD（0.71）优于32-RVQ RQ-Transformer基线（1.06），整体推理速度提升1.9倍，采样头速度提升5.4倍。
   - 语音延续任务（表2）：CALM在声学质量和有意义性上均超越8-RVQ RQ-Transformer。
   - 消融研究（表6）：证明短上下文Transformer和噪声增强是模型高性能的关键。
5. 实际意义是什么：使得在轻量级设备（如笔记本电脑CPU）上运行高质量的实时音频生成成为可能。开源的“Pocket TTS”（100M参数）模型实现了这一目标，具有极高的实际应用价值。
6. 主要局限性是什么：论文中音乐生成的训练数据集规模（约20K小时）相对有限；连续表示可能在某些细粒度控制上（如精确的音高、时长编辑）面临挑战；论文未提供其主训练数据集的下载链接。

---

