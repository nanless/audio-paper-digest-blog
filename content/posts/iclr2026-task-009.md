---
title: "ICLR 2026 - 模型合并 论文列表"
date: 2026-05-03
draft: false
tags: ["模型合并"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 模型合并 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型合并

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OptMerge: Unifying Multimodal LLM Capabilities and Modalitie](/audio-paper-digest-blog/posts/2026-05-03-optmerge-unifying-multimodal-llm-capabilities-and) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging](/audio-paper-digest-blog/posts/2026-05-03-optmerge-unifying-multimodal-llm-capabilities-and)

🔥 **8.0/10** | 前25% | #模型合并 | #模型合并 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Yongxian Wei（清华大学）
- 通讯作者：Chun Yuan（清华大学，标注为*）
- 作者列表：Yongxian Wei（清华大学）、Runxi Cheng（清华大学）、Weike Jin（华为诺亚方舟实验室）、Enneng Yang（中山大学）、Li Shen（中山大学）、Lu Hou（华为诺亚方舟实验室）、Sinan Du（清华大学）、Chun Yuan（清华大学）、Xiaochun Cao（中山大学）、Dacheng Tao（南洋理工大学）

💡 **毒舌点评**

亮点：论文为多模态大模型（MLLM）的模型合并领域填补了重要的空白，提出了首个细粒度的能力合并基准，并证明了数据免费的合并方法在性能上可以与甚至超越需要大量数据的混合训练，这对社区是实实在在的贡献。短板：虽然实验在InternVL2.5-1B和Qwen2-VL-7B上验证了方法，但更大规模（如32B以上）模型的合并效果和泛化性仍有待验证；此外，模态合并实验仅限于Vision-Audio-Video三种模态，离真正的“全模态”模型尚有距离。

🔗 **开源详情**

- 代码：论文明确表示将公开所有代码（“All code and checkpoints are publicly available here”）。
- 模型权重：论文承诺公开所有训练得到的专家模型检查点（“we train expert models for each task and publicly release their weights”）。
- 数据集：论文中收集和使用的数据集均为公开数据集（见表1和表11），并提供了获取方式或引用。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极为详细的复现材料，包括：a) 详细的训练数据集列表和规模（表1，表11）；b) 完整的评估基准和评估工具（VLMEvalKit, LMMs-Eval）；c) 所有合并方法的超参数设置（如λ搜索范围、优化器、学习率、迭代次数）；d) OptMerge的关键设计细节（如秩k的取法）；e) 详细的硬件配置（8×V100）。
- 论文中引用的开源项目：引用了MergeKit, LLaVA, Qwen2-VL, InternVL2.5, Vicuna, CLIP, BEATs, LanguageBind等多个开源模型和工具。

📌 **核心摘要**

1.  问题：现有的模型合并研究主要针对视觉分类模型或文本LLM，缺乏针对多模态大语言模型（MLLM）的标准化基准和系统研究，特别是如何通过无数据的模型合并来统一MLLM的多种能力（如VQA、OCR）或融合不同模态。
2.  方法核心：本文提出名为OptMerge的模型合并方法。针对全参数微调模型，它先对任务向量去中心化并截断SVD，再基于去噪后的任务向量优化合并向量；针对LoRA微调模型，采用SGD优化器、均值初始化并直接进行低秩近似，以稳定优化过程。
3.  与已有方法相比新在哪里：a) 建立了首个针对MLLM的细粒度合并基准，包含5类能力任务的专门模型与评测；b) OptMerge方法通过任务向量去噪和鲁棒优化，解决了直接优化合并向量时的噪声干扰和范数失控问题；c) 首次系统研究了“模态合并”，证明了合并不同模态模型能构建更优的统一模型。
4.  主要实验结果：在能力合并上，OptMerge在InternVL2.5（全参数）和Qwen2-VL（LoRA）基准上平均性能分别比最强基线提升0.44%和4.65%（相比WUDI Merging）。合并后的模型性能在多个任务上可达到或超过专家模型和混合训练模型（如表2，Qwen2-VL OptMerge平均得分63.30，高于Qwen2-VL-Instruct的62.23）。在模态合并上，合并视觉、音频、视频模型后，在Audio-VQA任务（MUSIC-AVQA, AVQA）上平均得分67.00，超过任何单模态模型（表5）。与混合训练相比，OptMerge在计算资源和时间上具有显著优势（表7）。
5.  实际意义：提供了一种无需训练数据、低成本、高效率的后训练方法，用于整合开源社区中分散的、针对不同任务或模态微调的模型，快速构建更强大的多模态统一模型，推动了去中心化的模型开发与部署。
6.  主要局限性：实验评估的模型规模上限为7B和32B，更大规模模型的合并效果未知；模态合并实验仅涉及三种模态；收集的公开训练数据集可能存在质量问题；未能与所有最新的动态合并（如MoE-like）方法进行对比。

---

