---
title: "ICLR 2026 - 语音大模型 论文列表"
date: 2026-05-03
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
| 🥇 | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer)

✅ **7.5/10** | 前25% | #语音大模型 | #自回归模型 | #多模态模型 #预训练

👥 **作者与机构**

- 第一作者：Yen-Ju Lu（JHU Center for Language and Speech Processing）
- 通讯作者：Srinivasan Iyer（Meta Superintelligence Labs）， Duc Le（Meta Superintelligence Labs）
- 作者列表：
    - Yen-Ju Lu（JHU Center for Language and Speech Processing）
    - Yashesh Gaur（Meta Superintelligence Labs）
    - Wei Zhou（Meta Superintelligence Labs）
    - Benjamin Muller（Meta Superintelligence Labs）
    - Jesus Villalba（JHU Center for Language and Speech Processing）
    - Najim Dehak（JHU Center for Language and Speech Processing）
    - Luke Zettlemoyer（Meta Superintelligence Labs）
    - Gargi Ghosh（Meta Superintelligence Labs）
    - Mike Lewis（Meta Superintelligence Labs）
    - Srinivasan Iyer（Meta Superintelligence Labs）
    - Duc Le（Meta Superintelligence Labs）

💡 **毒舌点评**

亮点：精准切中了语音-文本大模型效率低下的核心痛点，提出的“潜在语音补丁”机制设计巧妙，并通过“课程补丁”策略平衡了性能与工程复杂度，实验数据扎实且结论一致。  
短板：论文主要依赖现有HuBERT和Wav2Vec2模型，核心创新集中于“如何压缩序列”，而对压缩后潜空间本身的表示学习与结构探索较少；此外，对齐策略对辅助模型的依赖可能限制其在端到端系统中的应用便利性。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/facebookresearch/lst。
- 模型权重：论文中未提及是否公开预训练或微调后的模型权重。
- 数据集：训练使用的数据集（LibriLight, People’s Speech, MLS, Spotify）均为公开或半公开数据集，论文中提及了来源。评估使用了自建的Speech HellaSwag以及公开的Speech StoryCloze/TopicStoryCloze，并提供了改进的TTS版本用于评估。
- Demo：未提及提供在线演示。
- 复现材料：提供了非常详细的复现材料，包括：完整的模型架构配置（表7）、优化器与学习率设置、训练硬件与批次大小、数据混合比例、补丁策略的伪代码与调度描述、关键的消融实验设置。
- 论文中引用的开源项目/模型：Llama 2（分词器）， HuBERT（语音离散化）， Wav2Vec2+CTC（强制对齐）， Kokoro TTS（评估用）， Whisper（TTS评估转录）， HiFi-GAN（声码器，作为背景提及）。
- 总结：论文代码已开源，复现细节极为详尽，是高质量的可复现研究。主要缺失是预训练模型权重的发布。

📌 **核心摘要**

1. 要解决什么问题：现有的自回归语音-文本大模型由于语音token序列过长，导致计算效率远低于纯文本模型，这不仅浪费算力，也阻碍了有效的跨模态对齐和性能扩展。
2. 方法核心是什么：提出“潜在语音-文本Transformer”（LST），其核心是通过一个轻量级编码器将冗长的语音token序列动态聚合为更高级的“语音补丁”（Speech Patches）。一个全局Transformer在这些压缩后的补丁和文本token上进行自回归建模，然后通过一个解码器将补丁还原为语音token。
3. 与已有方法相比新在哪里：不同于直接使用BPE等方法压缩语音token（效果不佳），LST借鉴了文本领域的“字节潜在Transformer”（BLT），但专门针对语音特性设计了静态、基于文本对齐的以及课程学习的补丁策略。其中，“课程补丁”（Curriculum Patching）通过训练过程中逐步从依赖对齐的补丁策略过渡到简单的静态补丁策略，既利用了语义对齐信息，又无需在推理时依赖外部对齐模型。
4. 主要实验结果如何：在故事续写基准上，LST（课程补丁）在计算量控制下比基线绝对提升最高达6.5%（Speech HellaSwag），并同时提升了文本性能。在固定数据预算下，LST以约20%的计算节省实现了性能提升。在420M到1.8B的规模扩展中，LST的优势随模型增大而增加。在下游任务中，LST使ASR适配更稳定，并将TTS推理的自回归步长减少了约4倍，且未损失重建质量。

    | 模型 | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
    | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
    | 计算量控制实验 (表3) | | | | | | |
    | Base SpeechLLM | 39.0 | 47.0 | 59.1 | 67.8 | 87.5 | 95.7 |
    | LST (Curriculum) | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |
    | 数据量控制实验 (表4) | | | | | | |
    | Base SpeechLLM | 40.2 | 49.6 | 60.2 | 69.1 | 87.5 | 95.2 |
    | LST (Curriculum) | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |
    | 下游迁移 (表5， 1B模型) | | | | | | |
    | ASR (LibriSpeech WER%) | | | | | | |
    | Baseline (1k iter) | 140 / 202 | | | | | |
    | LST (1k iter) | 6.8 / 10.4 | | | | | |
    | TTS (LibriSpeech CER%) | | | | | | |
    | Baseline (20k iter) | 14.1 / 15.1 | | | | | |
    | LST (20k iter) | 14.1 / 16.2 | | | | | |

5. 实际意义是什么：LST为构建更高效、可扩展的语音-文本基础模型提供了实用方案。它能降低语音大模型的训练和推理成本，同时提升性能，有望加速语音理解和生成技术的实际应用。
6. 主要局限性是什么：研究目前局限于半双工（轮流交互）建模，未涉及实时对话；对齐补丁策略依赖于外部强制对齐工具，增加了系统依赖；尚未探索指令微调、全双工或扩展到图像/视频等更多模态。

---

