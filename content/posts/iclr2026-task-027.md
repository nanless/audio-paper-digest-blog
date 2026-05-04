---
title: "ICLR 2026 - 语音大模型 论文列表"
date: 2026-05-04
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
| 🥇 | [Closing the Gap Between Text and Speech Understanding in LLM](/audio-paper-digest-blog/posts/2026-05-04-closing-the-gap-between-text-and-speech) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-04-closing-the-gap-between-text-and-speech)

🔥 **8.5/10** | 前25% | #语音大模型 | #知识蒸馏 #主动学习 | #知识蒸馏 #主动学习

👥 **作者与机构**

- 第一作者：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS）
- 通讯作者：未说明
- 作者列表：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS）、Skyler Seto（Apple）、Maureen de Seyssel（Apple）、Richard He Bai（Apple）、Zijin Gu（Apple）、Tatiana Likhomanenko（Apple）、Navdeep Jaitly（Apple）、Zakaria Aldeneh（Apple）

💡 **毒舌点评**

论文对“文本-语音理解差距”的成因（遗忘与失准）进行了教科书级的清晰剖析，并据此设计了针对性的SALAD方法，数据效率极高，这种“分析驱动解决方案”的范式是最大亮点。然而，其主要验证集中于英语语音，对于跨语言泛化能力和TTS生成质量对下游性能的长期影响讨论不足，是一个有待拓展的短板。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用了公开数据集（LibriHeavy， Emilia， FineWeb-Edu），但论文本身未发布新数据集。
- Demo：未提及在线演示。
- 复现材料：论文提供了非常详细的附录，涵盖模型描述（A.1）、训练细节（A.2， A.3）、评估协议（A.5）、数据分析方法（A.4， A.6）等，为复现提供了坚实基础。
- 论文中引用的开源项目：Mimi语音分词器 (Défossez et al., 2024)、Kokoro-TTS (开源TTS模型)、SmolLM (Allal et al., 2025)、Whisper (用于评估)、BAAI/bge-large-en-v1.5 (用于聚类)、Qwen2.5 LLMs。

📌 **核心摘要**

这篇论文旨在解决一个核心问题：将文本大语言模型（LLM）适配到语音输入后，其在语言理解任务上的性能会显著低于其原始文本版本（即“文本-语音理解差距”）。
方法核心是提出了SALAD（Sample-efficient Alignment with Learning through Active selection and cross-modal Distillation），它包含两个阶段：1）在天然语音数据上进行跨模态知识蒸馏，让语音模型模仿其文本教师的输出分布，以减轻遗忘和失准；2）利用模型自身的失准信号，通过主动学习算法从大规模文本语料中选择最具挑战性的领域，合成少量语音数据进行针对性训练，以弥补领域差距。
与先前需要海量合成数据或专有数据集的方法相比，SALAD的创新在于结合了蒸馏目标（对齐效果好）与主动数据选择（数据效率高），两者协同作用。实验结果显示，在3B和7B参数规模的模型上，SALAD仅使用少于一个数量级的公开语音数据（约14万小时天然语音+1%的合成数据），就在6个广泛领域的知识与推理基准测试（如HellaSwag， ARC-C）上，达到了与当前最强开源模型（如Qwen2.5-Omni）相近的语音理解性能，平均差距仅为1.2%，并大幅超越了其他基线。
其实际意义在于证明了无需依赖天量数据或闭源资源，也能高效地缩小语音与文本模型的能力差距，为开发高效、可复现的语音大模型提供了新路径。
主要局限性是实验验证主要基于英语语音，且评估集中在多选题形式，对开放式生成或更复杂对话场景的验证有限。

---

