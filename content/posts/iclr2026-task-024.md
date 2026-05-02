---
title: "ICLR 2026 - 语音情感识别 #语音对话系统 论文列表"
date: 2026-05-02
draft: false
tags: ["语音情感识别 #语音对话系统"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音情感识别 #语音对话系统 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音情感识别 #语音对话系统

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Speech World Model: Causal State–Action Planning with Explic](/audio-paper-digest-blog/posts/2026-05-02-speech-world-model-causal-stateaction-planning) | 9.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Speech World Model: Causal State–Action Planning with Explicit Reasoning for Speech](/audio-paper-digest-blog/posts/2026-05-02-speech-world-model-causal-stateaction-planning)

🔥 **9.0/10** | 前25% | #语音情感识别 #语音对话系统 | #多任务学习 #大语言模型 | #语音情感识别 #语音对话系统

👥 **作者与机构**

- 第一作者：Xuanru Zhou（Zhejiang University， 浙江大学）
- 通讯作者：未说明
- 作者列表：Xuanru Zhou（Zhejiang University）、Jiachen Lian（UC Berkeley， 加州大学伯克利分校）、Henry Hong（UC Berkeley）、Xinyi Yang（Zhejiang University）、Gopala Anumanchipalli（UC Berkeley）

#

💡 **毒舌点评**

亮点在于其将认知科学的世界模型概念和模块化思维（如心智理论ToM、言语行为SA）严谨地工程化为一个可学习的因果图结构，为语音模型提供了迄今最清晰、最可解释的“思考路径”，这比无脑堆数据和参数要高级得多。短板则是在“标签生成”环节重度依赖LLM（Vicuna-13b）作为教师模型，这不可避免地会引入教师模型的偏差和错误，论文中对此风险的缓解措施描述有限。

#

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/eureka235/eureka235.github.io`。承诺开源实现、训练和评估脚本。
- 模型权重：论文中提到“we will open source the model”，承诺开源模型权重。
- 数据集：论文使用了四个公开数据集（MELD, IEMOCAP, SLURP, VoxCeleb），未提供新数据集。未提及是否提供经过处理的特定数据版本。
- Demo：提供了演示音频链接：`http://bit.ly/4pBJuWP`。
- 复现材料：论文提供了极其详尽的复现材料，包括：模型架构细节（A.7）、训练设置与超参数（A.5）、评估指标计算方法（A.8）、用于标签生成和指令微调的完整系统提示（A.4.2, A.5.2）、以及所有消融实验的结果（A.6）。
- 引用的开源项目：论文中引用并依赖的主要开源项目/工具包括：DistilBERT、WavLM、opensmile、Vicuna-13b（用于标签生成）、Llama-3.1-8B、Qwen2-Audio、LoRA。
- 开源计划：论文明确表述了开源意图，并提供了代码链接和详尽的复现文档。

📌 **核心摘要**

1. 解决的问题：当前语音语言模型（SLMs）在语音理解上表现良好，但在需要深层推理（如情感归因、意图推断、反事实分析）的任务上表现薄弱，尤其在监督数据稀疏时，其推理过程不透明且易产生幻觉。
2. 方法核心：提出语音世界模型（SWM），其核心是一个预定义的因果图，将语音理解分解为四个认知模块：场景激活（WMA）、心智理论（ToM）、言语行为（SA）和语用意图（Prag）。该图建模了模块间的因果依赖关系。训练分两阶段：1）训练因果图以学习稳定的结构化状态表示；2）将图的输出作为显式提示，用于指令微调大语言模型（LLM或SLM），生成推理链和响应。
3. 创新之处：首次将基于认知科学的因果图结构作为语音理解的先验框架，取代了传统黑盒编码器或启发式CoT。它实现了模块化、可解释的推理，并利用因果结构实现了高效的半监督学习和更紧凑的搜索空间。
4. 主要实验结果：
    *   因果图验证：所提出的因果图比随机连接图收敛快约5倍，且在半监督设置下能有效推断未标注模块（如在无WMA标签时，其下游SA模块准确率仍达70.7%）。
    *   推理性能对比：在基于GPT-4o的模型评分中，SWM（Llama3.1-8B）的总体得分（7.81）大幅超越Qwen2-Audio-CoT基线（5.18），并在情感提及率（EM）和情感分类准确率（EA）上超越所有基线，包括GPT-4o（EM: 68.20%， EA: 45.16%），EA达66.26%。
    *   训练效率：整个训练过程仅需约20 GPU小时，远低于训练大型商业模型。
5. 实际意义：为构建可解释、高效且推理能力强的语音理解系统提供了新范式。该框架降低了训练成本，并为在部分标注数据下进行有效学习提供了解决方案，有望加速语音AI在需要复杂理解的交互场景（如智能助手、情感计算）中的应用。
6. 主要局限性：当前仅使用了四个预定义的认知模块，可能无法涵盖所有复杂的语音动态；因果图结构是预定义的，缺乏对新依赖关系的自适应学习能力；模型性能在一定程度上受限于其依赖的LLM生成的训练数据的质量。

---

