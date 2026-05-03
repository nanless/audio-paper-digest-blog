---
title: "ICLR 2026 - 多模态问答 论文列表"
date: 2026-05-04
draft: false
tags: ["多模态问答"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 多模态问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多模态问答

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OptMerge: Unifying Multimodal LLM Capabilities and Modalitie](/audio-paper-digest-blog/posts/2026-05-04-optmerge-unifying-multimodal-llm-capabilities-and) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging](/audio-paper-digest-blog/posts/2026-05-04-optmerge-unifying-multimodal-llm-capabilities-and)

🔥 **8.0/10** | 前25% | #多模态问答 | #模型合并 | #多模态模型 #跨模态

👥 **作者与机构**

- 第一作者：Yongxian Wei (清华大学)
- 通讯作者：Chun Yuan (清华大学)
- 作者列表：
  - Yongxian Wei (清华大学)
  - Runxi Cheng (清华大学)
  - Weike Jin (华为诺亚方舟实验室)
  - Enneng Yang (中山大学)
  - Li Shen (中山大学，通讯作者)
  - Lu Hou (华为诺亚方舟实验室)
  - Sinan Du (清华大学)
  - Chun Yuan (清华大学，通讯作者)
  - Xiaochun Cao (中山大学)
  - Dacheng Tao (南洋理工大学)

💡 **毒舌点评**

亮点：论文为多模态大模型合并领域建立了首个细粒度能力划分的系统性基准，并将“模态合并”（构建全模态模型）这一前瞻性任务纳入评估，为研究者提供了清晰的赛道和标尺。提出的OptMerge方法通过任务向量去噪和优化策略改进，在多个场景下取得了稳定的性能提升，证明了其有效性。
短板：尽管OptMerge平均性能最优，但从实验表格看，在个别单项任务上（如InternVL2.5的Geometry），其性能并非总是最高，甚至偶尔输给简单的TIES或TIES w/ DARE，这表明“无损”合并所有能力仍是开放挑战。此外，理论分析部分（定理3.1）的假设较强，结论对实践的直接指导作用有限。

🔗 **开源详情**

- 代码：论文明确表示“所有代码和检查点都将在此公开”，但未提供具体链接。通常意味着代码将在论文接收或会议召开时开源。
- 模型权重：承诺开源，包括为基准训练的所有专家模型检查点。
- 数据集：收集了涵盖五大任务的公开训练数据，未提及是否发布整合后的数据集，但指明了所有原始数据集的来源。
- Demo：论文中未提及。
- 复现材料：提供了极其详尽的实现细节，包括：数据集列表与规模、模型训练超参数（学习率、优化器、warmup比例、batch size隐含在硬件中）、合并算法的具体实施（k值选择、λ搜索范围、优化器设置）、评估库版本（VLMEvalKit, LMMs-Eval）、硬件配置（8×V100）。
- 引用的开源项目：VLMEvalKit, LMMs-Eval, MergeKit, Hugging Face Transformers, 以及多个作为基座和微调对象的开源模型（InternVL2.5, Qwen2-VL, Vicuna, CLIP, BEATs, LanguageBind等）。

📌 **核心摘要**

1.  问题：基础模型训练成本高昂，社区中存在大量针对特定任务或模态微调的专家模型。如何高效地将这些模型的能力或不同模态整合到一个统一模型中，且无需访问原始训练数据，是一个重要且未被充分解决的问题。现有模型合并研究在多模态大模型（MLLM）领域缺乏标准的评估基准。
2.  方法核心：本文提出了OptMerge方法，旨在改进基于任务向量的优化式合并。其核心是：a) 去噪：通过SVD对任务向量进行低秩近似，去除冗余噪声；b) 鲁棒优化：针对全参数微调和LoRA微调的不同特性，设计了差异化的优化策略（如替换优化器为SGD，调整初始化方式），以稳定优化过程并避免合并向量范数异常增长。
3.  创新点：a) 构建了首个针对MLLM能力（VQA、几何、图表、OCR、定位）和模态（视觉-语言、音频-语言、视频-语言）合并的基准；b) 提出了OptMerge方法，通过去噪和针对性优化改进合并效果；c) 通过理论和实验，证明了模型合并可以超越数据混合训练（Mixture Training），且是一种数据无关的高效方法。
4.  主要实验结果：在InternVL2.5（全参数微调）和Qwen2-VL（LoRA微调）两个基准上，OptMerge在大多数任务上取得了最优平均性能。例如，在Qwen2-VL上，OptMerge的平均分（63.30）比次优的TIES w/ DARE（61.88）高出1.42分，比WUDI Merging（58.65）高出4.65分。在模态合并任务上，合并模型在音频-视频问答上的平均性能（66.88）也超越了单模态基线（视觉：63.16， 音频：37.75， 视频：64.11）。关键对比结果如下表所示：

| 方法 | InternVL2.5平均分 | Qwen2-VL平均分 |
| :--- | :--- | :--- |
| Weight Average | 49.12 | 60.55 |
| Task Arithmetic | 56.18 | 60.29 |
| TIES Merging | 56.70 | 61.24 |
| TIES w/ DARE | 56.76 | 61.88 |
| TSV Merging | 54.37 | 60.63 |
| WUDI Merging | 57.00 | 58.65 |
| OptMerge (Ours) | 57.44 | 63.30 |
| Mixture Training | 57.66 | N/A (使用Qwen2-VL-Instruct作为上界：62.23) |

5.  实际意义：该工作为开发者提供了一种无需数据、计算成本低廉的方式来整合和提升MLLM的能力，促进了开源社区模型的模块化、去中心化开发与复用。为构建全模态大模型（Omni-LLM）提供了一条可行的技术路径。
6.  局限性：a) 理论分析在简化假设下进行，与复杂深度学习场景有差距；b) 合并后的模型在部分任务上仍可能略逊于专家模型或数据混合训练模型；c) 实验主要基于1B-7B规模的模型，更大规模模型的合并效果有待验证；d) 合并系数λ仍需搜索。

---

