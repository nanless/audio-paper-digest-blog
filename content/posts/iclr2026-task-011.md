---
title: "ICLR 2026 - 模型比较 论文列表"
date: 2026-05-04
draft: false
tags: ["模型比较"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 模型比较 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型比较

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OptMerge: Unifying Multimodal LLM Capabilities and Modalitie](/audio-paper-digest-blog/posts/2026-05-04-optmerge-unifying-multimodal-llm-capabilities-and) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging](/audio-paper-digest-blog/posts/2026-05-04-optmerge-unifying-multimodal-llm-capabilities-and)

✅ **7.0/10** | 前25% | #模型比较 | #迁移学习 | #多模态模型 #模型评估

👥 **作者与机构**

- 第一作者：Yongxian Wei (清华大学)
- 通讯作者：Chun Yuan (清华大学)
- 作者列表：Yongxian Wei (清华大学)， Runxi Cheng (清华大学)， Weike Jin (华为诺亚方舟实验室)， Enneng Yang (中山大学)， Li Shen (中山大学)， Lu Hou (华为诺亚方舟实验室)， Sinan Du (清华大学)， Chun Yuan (清华大学)， Xiaochun Cao (中山大学)， Dacheng Tao (南洋理工大学)

#

💡 **毒舌点评**

亮点在于提出了首个系统性的MLLM能力融合基准和“无数据”的模态融合思路，为社区提供了重要的评估框架和基线。短板是论文标题中的“Omni-language model”在实验中仅限于简单的音视频问答融合，与真正意义上的通用全能模型差距较大，且核心方法OptMerge在理论层面更像是对现有技术的巧妙组合。

#

🔗 **开源详情**

- 代码：论文明确表示“All code and checkpoints are publicly available here”，并提供了开源承诺，但具体链接需从论文或官方页面获取。
- 模型权重：承诺公开基准中训练的所有专家模型检查点（InternVL2.5和Qwen2-VL系列，以及模态融合用的Vicuna-7B变体）。
- 数据集：使用的训练数据来自多个公开数据集，论文在表1和表11中列出了详细清单。基准本身所收集整理的数据是否作为独立数据集发布未说明。
- Demo：未提及在线演示。
- 复现材料：提供了非常详细的训练超参数（学习率、优化器、epoch数、LoRA秩等）、评估设置（使用的评测库、提示模板）和硬件信息（8xV100），复现指引充分。
- 论文中引用的开源项目：依赖多个开源模型和库，如InternVL2.5， Qwen2-VL， Vicuna， CLIP， BEATs， LanguageBind， VLMEvalKit， LMMs-Eval， mergekit等。

📌 **核心摘要**

本文针对多模态大语言模型（MLLM）能力整合与模态统一的需求，研究模型融合这一低成本、无数据的技术路径。论文的核心工作是：(1) 构建了首个针对MLLM的细粒度能力融合基准，涵盖VQA、几何推理、图表理解、OCR和视觉定位五种能力，并探索了跨模态（视觉-音频-视频）的模型融合；(2) 提出了一种新的模型融合算法OptMerge，通过低秩近似去除任务向量噪声，并基于任务向量间的交互优化合并参数，实验表明其在多种设置下平均性能提升2.48%；(3) 通过大量实验证明，在无需训练数据的情况下，模型融合能够构建性能媲美甚至超越多任务混合训练的增强型MLLM，并有效整合不同模态信息。其主要局限性在于，当前实验规模限于7B参数模型，且“全能模型”的探索尚处于初步阶段。

#

---

