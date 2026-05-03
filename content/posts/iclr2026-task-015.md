---
title: "ICLR 2026 - 统一音频模型 论文列表"
date: 2026-05-03
draft: false
tags: ["统一音频模型"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 统一音频模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 统一音频模型

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [UALM: Unified Audio Language Model for Understanding, Genera](/audio-paper-digest-blog/posts/2026-05-03-ualm-unified-audio-language-model-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [UALM: Unified Audio Language Model for Understanding, Generation and Reasoning](/audio-paper-digest-blog/posts/2026-05-03-ualm-unified-audio-language-model-for)

✅ **7.0/10** | 前25% | #统一音频模型 | #自回归模型 | #音频大模型 #音频生成

👥 **作者与机构**

- 第一作者：Jinchuan Tian（卡内基梅隆大学，CMU；与NVIDIA合作）
- 通讯作者：Wei Ping（NVIDIA）
- 作者列表：Jinchuan Tian（CMU†），Sang-gil Lee（NVIDIA），Zhifeng Kong（NVIDIA），Sreyan Ghosh（NVIDIA†, UMD），Arushi Goel（NVIDIA），Chao-Han Huck Yang（NVIDIA），Wenliang Dai（NVIDIA），Zihan Liu（NVIDIA），Hanrong Ye（NVIDIA），Shinji Watanabe（CMU），Mohammad Shoeybi（NVIDIA），Bryan Catanzaro（NVIDIA），Rafael Valle（NVIDIA），Wei Ping（NVIDIA）。†表示工作在NVIDIA实习期间完成，*表示同等贡献。

#

💡 **毒舌点评**

亮点在于系统性地提出了一个“三位一体”的音频模型框架，并在统一训练上给出了有效的工程解决方案（数据比例、模态对齐），使得单一模型能在多项基准上达到或接近SOTA。短板是其“推理”能力目前更像是一种受控生成的引导机制，距离人类作曲家那种真正的多模态创造性反思还有很大距离，且作为统一模型，其处理未见过的复杂混合音频任务的能力有待验证。

#

📌 **核心摘要**

1. 问题：当前音频语言模型将理解与生成任务分开处理，且生成任务以扩散模型为主流，自回归模型质量有差距。音频领域的多模态推理（超越纯文本推理）也未被充分探索。
2. 方法核心：提出统一音频语言模型（UALM）。首先构建UALM-Gen，一个基于自回归LLM（初始化自Qwen2.5）的文本到音频生成模型，通过大规模数据（30M样本）、无分类器引导（CFG）和直接偏好优化（DPO）达到SOTA生成质量。然后，通过精心设计的数据混合（图2）和模态对齐训练，将音频理解、生成和文本推理统一到一个模型（UALM）。最后，提出UALM-Reason，通过引入“富文本描述（Rich Caption）”作为中间计划，并使用两阶段SFT-DPO训练，赋予模型多模态生成推理能力（丰富化、对话、自我反思）。
3. 创新：①首次在一个自回归LLM框架内成功统一音频理解、生成和推理；②证明了通过适当的训练策略，自回归模型可以在音频生成上媲美扩散模型；③提出了面向生成任务的多模态推理范式（如自我反思），超越了现有仅限于理解任务的文本推理。
4. 实验结果：在音频生成（表1）上，UALM-Gen和UALM在AudioCaps和SongDescriber数据集上的多项客观指标（FD, KL, CL, AES）和主观评分（OVL, REL）达到或超过ETTA、Stable Audio Open等扩散模型基线。在音频理解（表2）上，UALM在MMAU和MMAR基准上匹配或超越Audio Flamingo 3、Qwen2.5-Omni等专门模型。在文本能力（表3）上，UALM相比基座LLM（Qwen2.5-7B）仅有极小性能损失。多模态推理的主观评估（表4）显示，UALM-Reason在富化、对话、自我反思三种推理场景下均优于基线UALM。
5. 实际意义：为构建通用音频AI提供了可行的技术路径，有望统一音频相关应用，提升模型在复杂创意任务（如音乐创作）中的可控性和智能性。
6. 主要局限性：目前音频表示未完全统一（输入用连续编码器，输出用离散编解码器）；合成数据（尤其是富文本描述）存在质量瓶颈；缺乏能精确评估复杂生成音频和多模态推理链的评估指标。

#

---

