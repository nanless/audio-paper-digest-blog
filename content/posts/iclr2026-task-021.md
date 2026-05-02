---
title: "ICLR 2026 - 语音大模型 论文列表"
date: 2026-05-02
draft: false
tags: ["语音大模型"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音大模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音大模型

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-02-latent-speech-text-transformer) | 8.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-02-latent-speech-text-transformer)

🔥 **8.5/10** | 前10% | #语音大模型 | #预训练 | #自回归模型 #语音识别

👥 **作者与机构**

- 第一作者：Yen-Ju Lu (Center for Language and Speech Processing, Johns Hopkins University)
- 通讯作者：Srinivasan Iyer†, Duc Le† (†联合末位作者， Meta Superintelligence Labs)
- 作者列表：
  - Yen-Ju Lu† (Center for Language and Speech Processing, Johns Hopkins University)
  - Yashesh Gaur (Meta Superintelligence Labs)
  - Wei Zhou† (Meta Superintelligence Labs)
  - Benjamin Muller (Meta Superintelligence Labs)
  - Jesus Villalba (Center for Language and Speech Processing, Johns Hopkins University)
  - Najim Dehak (Center for Language and Speech Processing, Johns Hopkins University)
  - Luke Zettlemoyer (Meta Superintelligence Labs)
  - Gargi Ghosh (Meta Superintelligence Labs)
  - Mike Lewis (Meta Superintelligence Labs)
  - Srinivasan Iyer† (Meta Superintelligence Labs)
  - Duc Le† (Meta Superintelligence Labs)

💡 **毒舌点评**

这篇论文的最大亮点在于精准诊断了语音-文本模型效率低下的“病因”（信息密度不匹配），并开出了一剂对症的“药方”（潜语音块），实验证明该药方不仅能提升语音任务表现，甚至对纯文本任务也有增益，思路清晰且效果显著。然而，其“药引子”——对齐补丁和课程学习策略——严重依赖外部对齐模型（Wav2Vec2+CTC），这为实际部署引入了额外的复杂性和潜在的误差传递，在追求“无对齐”的端到端理想模型道路上，这或许是一个迂回但务实的选择。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/facebookresearch/lst。
- 模型权重：论文中未提及公开模型权重。
- 数据集：论文使用了多个公开语音数据集（LibriLight, People’s Speech, MLS, Spotify Podcast）和标准文本数据，部分数据集的许可信息在附录中列出。论文未提及是否开源其使用的数据集处理脚本。
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常详细的训练细节，包括：
    - 文本和语音数据的具体来源、规模及处理方式。
    - 交错数据的构建流程。
    - 完整的模型架构参数表（各模块层数、维度、头数）。
    - 优化器、学习率调度、批次大小、训练时长、硬件配置等训练超参数。
    - 分块策略的详细定义和课程学习调度公式。
    - 评估数据集的构建方法（使用Kokoro TTS重新合成语音）。
- 论文中引用的开源项目：主要依赖的开源工具/模型包括：HuBERT（语音分词器）、Wav2Vec2+CTC（用于强制对齐）、Llama 2 Tokenizer（文本分词器）、Kokoro TTS（用于生成评估语音）、SentencePiece、HiFi-GAN等。
- 开源计划：论文中未提及开源计划（除代码外）。

📌 **核心摘要**

1.  问题：现有的自回归语音-文本模型由于语音token序列远长于文本token，导致训练和推理的计算效率极低，并阻碍了有效的跨模态对齐。
2.  方法核心：提出潜语音-文本Transformer (LST)。核心是引入“潜语音块”机制，通过一个轻量级编码器将一段连续的语音token聚合为一个更高层级的“块”表示，作为全局Transformer自回归建模的基本单位。
3.  创新之处：相比直接对语音token做子词分词（BPE）失败的方法，LST的块编码器能保留信息。论文系统比较了三种分块策略：静态分块（固定长度）、对齐分块（基于文本对齐边界）和课程分块（训练中从对齐过渡到静态），其中课程分块效果最佳且无需推理时对齐。
4.  实验结果：在故事完成基准（HellaSwag， StoryCloze等）上，LST在计算可控和数据可控设置下均显著优于基线。例如，在计算可控训练中，课程分块LST在语音HellaSwag上比基线提升+6.5%（39.0% -> 45.5%），在文本上提升+5.2%（47.0% -> 52.2%）。LST在从420M到1.8B的参数扩展中收益持续增长。此外，LST大幅加速了下游ASR适应（WER从140%降至6.8% @1k迭代），并在TTS推理中减少了约4倍的生成步骤且不损失质量。
5.  实际意义：LST通过统一建模粒度，有效弥合了语音与文本的信息密度鸿沟，提升了大模型的训练和推理效率，为构建更高效、可扩展的语音-文本基础模型提供了实用路径。
6.  主要局限性：论文主要关注半双工（轮流发言）建模，未涉及全双工对话；对齐和课程策略依赖预训练时的强制对齐数据，虽然课程策略降低了推理时的依赖，但完全消除对齐依赖仍是挑战。

---

