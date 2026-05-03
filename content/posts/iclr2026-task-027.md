---
title: "ICLR 2026 - 语音理解 论文列表"
date: 2026-05-03
draft: false
tags: ["语音理解"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音理解 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音理解

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MMSU: A Massive Multi-task Spoken Language Understanding and](/audio-paper-digest-blog/posts/2026-05-03-mmsu-a-massive-multi-task-spoken-language) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MMSU: A Massive Multi-task Spoken Language Understanding and Reasoning Benchmark](/audio-paper-digest-blog/posts/2026-05-03-mmsu-a-massive-multi-task-spoken-language)

✅ **7.5/10** | 前25% | #语音理解 | #基准测试 | #语音大模型 #数据集

👥 **作者与机构**

- 第一作者：Dingdong Wang（香港中文大学）
- 通讯作者：未说明
- 作者列表：Dingdong Wang（香港中文大学）、Junan Li（香港中文大学）、Jincenzi Wu（香港中文大学）、Dongchao Yang（香港中文大学）、Xueyuan Chen（香港中文大学）、Tianhua Zhang（香港中文大学）、Helen M. Meng（香港中文大学）

💡 **毒舌点评**

本文最大的亮点在于**系统性地将语言学理论（语音学、韵律、修辞、句法、语义、副语言学）引入语音理解基准设计，提出了一个覆盖面极广（47个任务）且注重真实音频的评估框架**，有效揭示了当前模型在语音细微声学特征感知和复杂推理上的普遍短板。但其短板在于，作为一个评估框架，**对“如何解决”这些短板缺乏更深入的模型设计或训练策略上的探讨**，更像是提出了一个“考卷”并展示了现有“考生”的不足，而对“教学改进”的指导性有限。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。
- **模型权重**：未提及。
- **数据集**：是，已公开。论文提供了Hugging Face数据集链接：https://huggingface.co/datasets/ddwang2000/MMSU。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文提供了基准设计哲学、任务定义、数据构建流程（四阶段）的详细描述，以及部分提示设计的附录说明，有助于理解和复现评估过程。未提供评估时使用的具体提示文本。
- **论文中引用的开源项目**：论文评估了多个开源SpeechLLMs（如Qwen-Audio, Kimi-Audio, DIVA等）和OmniLLMs（如MiniCPM, Phi-4-Multimodal等），并引用了多个用于数据构建的开源音频数据集（如Common Voice, GigaSpeech, MELD, RAVDESS等）。
- **论文中未提及开源计划**：未明确提及未来是否会开源评估代码或训练模型。

📌 **核心摘要**

本文旨在解决当前语音大模型（SpeechLLMs）评估体系不全面、缺乏语言学理论指导、以及过度依赖合成语音等问题。核心方法是构建了MMSU（Massive Multi-task Spoken Language Understanding and Reasoning Benchmark）基准，包含5000个经专家标注的音频-问答三元组，覆盖47个从感知到推理的任务，并系统整合了多个语言学子领域的理论。与已有基准相比，MMSU的新意在于其任务设计的理论深度、对真实音频的强调（76.74%来自开源数据集，13.44%为专业录制），以及前所未有的任务广度。对22个模型的评估显示，性能最优的Gemini-1.5-Pro平均准确率仅为60.68%，远低于人类评估者的89.72%，暴露出模型在语音学感知（如近同音词、音节感知）和需要整合副语言/声学信息的复杂推理任务上存在显著不足。该基准的实际意义在于为未来语音大模型的发展提供了更严格、更全面的评估标准和明确的改进方向。主要局限性在于其规模（5000个样本）相对有限，可能无法完全覆盖所有实际场景的复杂性。

---

