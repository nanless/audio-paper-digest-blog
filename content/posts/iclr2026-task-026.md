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
| 🥇 | [Speech World Model: Causal State–Action Planning with Explic](/audio-paper-digest-blog/posts/2026-05-03-speech-world-model-causal-stateaction-planning) | 8.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [Speech World Model: Causal State–Action Planning with Explicit Reasoning for Speech](/audio-paper-digest-blog/posts/2026-05-03-speech-world-model-causal-stateaction-planning)

🔥 **8.5/10** | 前10% | #语音理解 | #因果图 | #显式推理 #世界模型

👥 **作者与机构**

- 第一作者：Xuanru Zhou（浙江大学）
- 通讯作者：Gopala Anumanchipalli（UC Berkeley）
- 作者列表：Xuanru Zhou（浙江大学）， Jiachen Lian（UC Berkeley）， Henry Hong（UC Berkeley）， Xinyi Yang（浙江大学）， Gopala Anumanchipalli（UC Berkeley）

#

💡 **毒舌点评**

这篇论文的亮点在于，它并非简单地将大模型应用于语音，而是从认知科学出发，为语音理解设计了一套可解释的“骨架”（因果图），并用它来引导大模型进行结构化推理，这比单纯堆数据或参数更“聪明”。然而，其短板在于，这套“骨架”的模块划分（WMA, ToM, SA, Prag）带有一定的人为预设性，其完备性和对更复杂、开放式对话的泛化能力有待进一步验证。

#

🔗 **开源详情**

- 代码：论文承诺在 `https://github.com/eureka235/eureka235.github.io` 开源代码、训练和评估脚本，但当前链接可能为占位符。论文中未提供具体的可用代码仓库链接。
- 模型权重：论文中未明确提及是否公开预训练好的因果图或指令微调后的模型权重。
- 数据集：所用数据集（MELD, IEMOCAP, SLURP, VoxCeleb）均为公开数据集，论文未提及提供新的数据集。
- Demo：图1中提供了一个音频演示链接 `http://bit.ly/4pBJuWP`。
- 复现材料：提供了极其详细的实验设置（附录A.5）、模型架构（附录A.7）、评估指标计算方法（附录A.8）、数据生成提示词（附录A.4.2）等，复现指南完备。
- 引用的开源项目/模型：主要依赖预训练模型，包括：文本编码器（distil-BERT）、声学编码器（WavLM）、指令微调基础模型（LLaMA-3.1-8B, Qwen2-Audio-7B-Instruct）、标签生成教师模型（Vicuna-13b-v1.5）、评估模型（GPT-4o）。

📌 **核心摘要**

1.  要解决的问题：当前的语音语言模型（SLM）将语音理解视为黑盒，在复杂推理（尤其是需要结合情感、意图、语境的深层理解）和稀疏监督下表现不佳，缺乏可解释的推理过程。
2.  方法核心：提出Speech World Model（SWM），受认知科学启发，将语音理解因子化为四个模块（世界模型激活WMA、心智理论ToM、言语行为SA、语用意图Prag），并通过一个预定义的因果图建模它们之间的动态依赖关系。系统分两阶段训练：1）训练因果图以学习状态间的因果关系，形成结构化的认知状态搜索空间；2）将因果图的推理结果作为显式条件，对指令微调后的语言模型进行引导，生成结构化推理链和回应。
3.  与已有方法相比新在哪里：
    - 从黑盒到白盒：首次提出基于认知因果图的模块化语音模型，为推理提供了透明、可解释的“中间状态”。
    - 从模式匹配到因果推理：利用因果图约束语言模型的搜索空间，使其推理过程更符合人类认知逻辑，而非单纯的统计关联。
    - 高效的半监督学习：因果图结构允许在部分模块标签缺失时，通过梯度反向传播有效利用数据，提高训练效率。
4.  主要实验结果：
    - 训练效率：因果图训练收敛速度比无结构的随机图基线快约5倍（2.07小时 vs 10.39小时）。
    - 推理能力：在指令微调后，SWM在推理指标（Model-as-Judge评分）上显著超越Qwen-Audio、Voxtral等开源模型，并在情绪识别准确率（EA）上甚至超过了GPT-4o（71.02% vs 45.16%）。
    - 性能与效率平衡：整体M.J.得分略低于Gemini 2.5 Pro（7.59 vs 8.12），但训练成本极低（仅约20 GPU小时），证明了该范式的效率优势。
    - 关键对比数据见下表：

| 方法 | Prompt Style | Overall M.J. Score | Reasoning Score | Response Score | EM (%) | EA (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SWM (Qwen2-Audio) | CoT | 7.59 | 7.26 | 8.08 | 91.80 | 71.02 |
| Qwen2-Audio-CoT (调优基线) | CoT | 5.18 | 4.76 | 5.82 | 92.11 | 34.72 |
| Voxtral | CoT | 2.92 | 2.52 | 3.52 | 10.89 | 5.56 |
| GPT-4o | CoT | 7.41 | 6.98 | 8.06 | 68.20 | 45.16 |
| Gemini 2.5 Pro | CoT | 8.12 | 8.02 | 8.28 | 82.47 | 51.29 |

5.  实际意义：为构建更可解释、可信、高效的语音交互系统提供了新范式，证明了结构化认知先验可以引导较小模型达到接近甚至超越超大模型的特定任务性能，对资源受限场景有重要价值。
6.  主要局限性：1）当前模块数量有限（仅4个），可能无法捕捉所有语音动态；2）因果图结构是预定义的，缺乏对未知依赖关系的适应性；3）指令微调数据依赖于LLM生成，存在误差传播风险。

#

---

