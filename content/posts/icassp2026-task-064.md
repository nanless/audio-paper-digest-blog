---
title: "ICASSP 2026 - 语音大模型 论文列表"
date: 2026-04-29
draft: false
tags: ["语音大模型"]
categories: [icassp-2026]
description: "共 3 篇 ICASSP 2026 语音大模型 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音大模型

共 **3** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Cross-Lingual Interleaving for Speech Language Models](/audio-paper-digest-blog/posts/2026-04-29-cross-lingual-interleaving-for-speech-language) | 7.5分 | 前25% |
| 🥈 | [Cross-Modal Knowledge Distillation for Speech Large Language](/audio-paper-digest-blog/posts/2026-04-29-cross-modal-knowledge-distillation-for-speech) | 7.0分 | 前25% |
| 🥉 | [SpeechMapper: Speech-To-Text Embedding Projector for LLMs](/audio-paper-digest-blog/posts/2026-04-29-speechmapper-speech-to-text-embedding-projector) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Cross-Lingual Interleaving for Speech Language Models](/audio-paper-digest-blog/posts/2026-04-29-cross-lingual-interleaving-for-speech-language)

✅ **7.5/10** | 前25% | #语音大模型 | #预训练 #多语言 | #预训练 #多语言

👥 **作者与机构**

- 第一作者：Adel Moumen（Department of Engineering, University of Cambridge, UK）
- 通讯作者：未说明
- 作者列表：Adel Moumen（Department of Engineering, University of Cambridge, UK）、Guangzhi Sun（Department of Engineering, University of Cambridge, UK）、Philip C. Woodland（Department of Engineering, University of Cambridge, UK）

💡 **毒舌点评**

亮点在于思路简洁直接：将单语序列训练推广到多语言交错序列，在不引入文本的前提下激发了SLM的跨语言潜力，实验设计也严格控制了训练语料总量这一关键变量。但短板同样明显：其核心验证仅依赖于由GPT-4合成的英法对齐数据集，且故事场景相对简单，这让人怀疑该方法在真实世界复杂声学环境和多样语义下的泛化能力是否被高估。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文中未提及公开的模型权重。
- 数据集：公开。论文明确指出并提供了Cross-Lingual TinyStories（EN-FR）以及spoken StoryCloze和TopicCloze基准的获取方式，通过HuggingFace Datasets（Adel-Moumen/Spoken TinyStories）。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了较为详细的训练超参数、数据处理流程（如使用GPT-4翻译、特定TTS系统、说话人选择标准）和评估方法，为复现提供了重要指导，但完整的训练代码和配置文件缺失。
- 论文中引用的开源项目：Mimi音频编解码器、WavLM（用于语音验证）、Llama 3.2和Qwen2模型初始化、Adam优化器。
- 总结：论文在数据集层面做出了有价值的开源贡献，但在代码和模型层面的开源信息不足。复现需要依赖文中描述的细节自行搭建训练流程。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 要解决什么问题：现有的语音语言模型（SLM）在多语言场景下进展缓慢，主要瓶颈在于缺乏不依赖文本监督的跨语言训练方法，以及适用于跨语言语义评估的语音基准。
2. 方法核心是什么：提出一种“跨语言交错”训练策略。具体做法是将来自不同语言、但句子级对齐的语音片段（token序列）拼接成一个长序列，然后在这个混合语言序列上进行标准的自回归语言建模训练。整个过程完全在离散语音token上进行，不使用任何文本。
3. 与已有方法相比新在哪里：与现有的文本-语音交错方法（如Spirit-LM）相比，本方法无需文本token，保持了“无文本”的纯净性。与简单的混合语言数据训练（Baseline EN+FR）相比，交错训练强制模型在同一上下文中处理多种语言，更有效地促进了跨语言表示空间的对齐。
4. 主要实验结果如何：在360M和1B参数规模的SLM上，交错训练带来了以下效果：
    *   跨语言能力涌现：在跨语言语义延续任务（sSC/sTC）上，交错训练显著优于混合数据基线。例如，360M模型在sTC上，EN->FR方向从基线的55.58%提升至65.20%，FR->EN方向从57.34%提升至65.84%。
    *   单语能力提升或保持：在英语单语任务（sBLiMP， sWUGGY）上，经过一个简短的双语微调阶段后，性能可恢复到接近纯英语基线。在法语单语任务上，性能甚至超过了法语单语基线（如1B模型在sSC上从55.31%提升至58.31%）。
    *   表示对齐增强：分析表明，交错训练产生了更强的跨语言隐层状态对齐（平均余弦相似度从0.73提升至0.76）。
    关键实验结果表格如下：

| 训练设置 | 参数 | 语料规模 | sSC (EN) | sSC (FR) | sTC (EN) | sTC (FR) | sSC (EN->FR) | sSC (FR->EN) | sTC (EN->FR) | sTC (FR->EN) | sBLiMP (EN) | sWUGGY (EN) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Baseline EN | 1B | 46.08 | - | - | 66.43 | - | - | - | - | - | 61.96 | 69.92 |
| Baseline FR | 1B | 15.36 | - | 55.31 | - | 67.07 | - | - | - | - | - | - |
| Baseline EN+FR | 1B | 61.44/15.36 | 55.79 | 57.83 | 66.86 | 71.24 | 52.32 | 50.77 | 57.93 | 58.36 | 62.29 | 62.24 |
| Cross-lingual Interleaving | 1B | 52.22/6.14 | 54.40 | 55.47 | 62.26 | 63.17 | 54.56 | 52.64 | 63.28 | 63.44 | 52.73 | 56.74 |
| Interleaving + FT | 1B | 61.44/15.36 | 55.63 | 58.31 | 67.45 | 70.39 | 55.21 | 55.05 | 62.90 | 63.35 | 61.75 | 69.15 |
| Baseline EN+FR | 360M | 61.44/15.36 | 55.26 | 57.93 | 66.00 | 69.48 | 50.56 | 51.25 | 55.58 | 57.34 | 61.17 | 67.71 |
| Cross-lingual Interleaving | 360M | 52.22/6.14 | 55.90 | 57.08 | 64.00 | 68.67 | 56.44 | 55.37 | 65.20 | 65.84 | 55.35 | 59.56 |
| Interleaving + FT | 360M | 61.44/15.36 | 55.74 | 57.50 | 67.07 | 70.55 | 55.10 | 53.92 | 59.86 | 62.28 | 61.08 | 68.62 |

5. 实际意义是什么：证明了构建真正“无文本”的多语言SLM的一条可行路径。通过简单的数据组织方式（交错），无需复杂的架构修改或外部对齐器，即可在现有SLM框架内注入跨语言能力，为后续更大规模、更多语言的SLM研究提供了基线方法和数据资源。
6. 主要局限性是什么：验证的语言对单一（英法），且都是高资源语言；训练和评估数据（TinyStories）均为合成生成，场景和词汇简单，可能无法代表真实世界语音的多样性；模型规模（1B）相对当前主流大语言模型较小；未提供详细的代码和模型权重，复现门槛较高。

---

### 🥈 [Cross-Modal Knowledge Distillation for Speech Large Language Models](/audio-paper-digest-blog/posts/2026-04-29-cross-modal-knowledge-distillation-for-speech)

✅ **7.0/10** | 前25% | #语音大模型 | #知识蒸馏 | #跨模态 #多任务学习

👥 **作者与机构**

- 第一作者：Enzhi Wang (南开大学计算机科学学院TMCC, 腾讯天籁音频实验室)
- 通讯作者：Qicheng Li (南开大学计算机科学学院TMCC)
- 作者列表：Enzhi Wang (南开大学计算机科学学院TMCC, 腾讯天籁音频实验室), Qicheng Li* (南开大学计算机科学学院TMCC), Zhiyuan Tang (腾讯天籁音频实验室), Yuhang Jia (南开大学计算机科学学院TMCC)

💡 **毒舌点评**

亮点在于系统性地诊断并量化了语音大模型“引入语音能力后文本和语音性能双降”这一普遍但缺乏深入研究的问题，并提出了一个直观有效的双向知识蒸馏框架来缓解。短板是其提出的方法核心（知识蒸馏）并非新算法，且实验中使用的合成语音质量（CosyVoice 2）和有限的训练数据（约6万条）可能在一定程度上限制了结论的普适性与效果上限。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及是否公开蒸馏后的模型权重。
- 数据集：实验使用了公开数据集Open-Orca和Clotho。论文未提及是否公开其合成的语音数据或特定蒸馏数据。
- Demo：未提及。
- 复现材料：论文详细描述了实验设置（骨干模型、TTS系统、数据集、超参数），可支持复现。但未提供检查点或更详细的配置文件。
- 引用的开源项目：CosyVoice 2 (TTS), Open-Orca (数据集), Cloths (数据集), Kimi-audio toolkit (评估工具)。
- 总体：论文中未提及开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 问题：在将预训练文本大模型（LLM）扩展为语音大模型（Speech LLM）时，普遍存在两种性能退化现象：(1) 灾难性遗忘，即引入语音能力后，模型在处理文本输入时的知识和推理能力下降；(2) 模态不平等问题，即同一模型处理语音输入时的性能显著低于文本输入。
2. 方法核心：提出一个跨模态知识蒸馏框架，将原始的文本LLM作为教师，语音LLM作为学生。通过两个互补的蒸馏通道进行训练：(a) 文本到文本（T→T）蒸馏，用教师模型的输出（或真实标签）监督学生模型处理文本输入，以缓解遗忘；(b) 语音到文本（S→T）蒸馏，将文本通过TTS转换为语音输入学生模型，同时教师仍基于原始文本生成监督信号，以增强跨模态对齐。
3. 新意：首次系统评估并定义语音大模型中的“灾难性遗忘”与“模态不平等问题”。首次将跨模态知识蒸馏显式地应用于解决语音大模型在对话问答任务中的性能退化问题，而非局限于声学分析任务。方法设计强调双向（T→T和S→T）协同训练。
4. 实验结果：在VoiceBench和MMAU-mini基准上验证。以Qwen2.5-Omni为基线，使用约6万样本进行蒸馏后，其语音输入（S→T）整体性能从75.08提升至77.19（表2）。同时，其文本输入（T→T）性能也从78.60提升至79.86（表3），证明了方法在缓解遗忘和提升模态性能上的有效性。在语音音频分析任务（MMAU-mini）上，加入额外声学问答数据后平均分从74.20提升至78.95（表4）。
5. 实际意义：为构建更鲁棒的语音大模型提供了一种实用、低成本的训练后优化范式，只需少量数据和微调即可同时增强模型的文本知识保持能力和跨模态语音理解能力。
6. 主要局限性：方法高度依赖TTS系统生成的合成语音质量。实验仅使用了约6万条指令微调数据，未在更大规模或更多样的数据上验证。未探索如何将声学特征的知识（如音色、情感）与语义知识更好地融合，以进一步缩小模态差距。

---

### 🥉 [SpeechMapper: Speech-To-Text Embedding Projector for LLMs](/audio-paper-digest-blog/posts/2026-04-29-speechmapper-speech-to-text-embedding-projector)

✅ **7.0/10** | 前25% | #语音大模型 | #预训练 | #零样本 #大语言模型

👥 **作者与机构**

- 第一作者：Biswesh Mohapatra (Inria Paris)
- 通讯作者：未说明
- 作者列表：Biswesh Mohapatra (Inria Paris), Marcely Zanon Boito (NAVER LABS Europe), Ioan Calapodescu (NAVER LABS Europe)

💡 **毒舌点评**

这篇论文的亮点在于其务实且高效的系统设计：通过将预训练阶段与LLM解耦，仅依赖嵌入层匹配，使得在消费级GPU上预训练投影器成为可能，且1K步的适应阶段就能达到强基线水平，这为资源受限团队快速接入语音能力提供了可行方案。不过，短板也明显：论文缺乏代码公开，且评估任务局限于ST和SQA，对于“Speech-to-Text Embedding Projector”这一名称所承诺的通用性，实验证据稍显单薄。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开的模型权重。
- 数据集：使用的是公开数据集（LibriSpeech, EuroParlST, CoVoST2, SpokenSQuAD, LibriSQA），但未说明如何获取其特定子集。
- Demo：未提及。
- 复现材料：论文提供了非常详细的训练设置（库、硬件、步数、学习率等）和损失函数公式，为复现提供了重要信息。但最终模型和代码的缺失仍是障碍。
- 论文中引用的开源项目：使用了Seamless-m4t-v2-large作为SFM，Llama-3.1-8B-Instruct和EuroLLM-9B-Instruct作为LLM，并引用了pasero[29]、torchtune[32]、transformers[33]等库。
- 论文中未提及开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：现有将语音基础模型（SFM）接入大语言模型（LLM）的方法（如联合微调）计算成本高昂，且容易在特定任务或提示上过拟合，泛化能力不足。
2.  方法核心：提出SpeechMapper，一个两阶段的语音到LLM嵌入投影器。第一阶段（预训练）仅使用LLM的嵌入层，通过最小化投影器输出与对应文本LLM嵌入的均方误差（MSE）来学习映射，无需LLM的前向计算。第二阶段（适应）仅用1K步指令调优（IT）将预训练好的投影器连接到冻结的LLM上。
3.  创新点：1) 解耦训练：预训练阶段独立于LLM，降低了硬件需求和计算成本。2) pad填充的MSE损失：通过向目标嵌入序列添加pad token来隐式对齐长度不匹配的语音和文本序列，避免了显式对齐器。3) 灵活的适应策略：在第二阶段通过调节MSE损失的权重σ，可以平衡零样本泛化（σ>0）与任务特定性能（σ=0）。
4.  主要实验结果：在语音翻译（ST）和口语问答（SQA）任务上，SpeechMapper表现优异。在零样本（任务无关）设置下，其最佳变体（使用EuroLLM）在SQA上与IWSLT25竞赛最佳系统（BEST-IWSLT25-IF）持平甚至超越；在任务特定设置下，仅用1K步训练便全面超越该基线。例如，在Spoken SQuAD上，其任务特定版本准确率达87.4%，与基线持平。

| 任务 | 指标 | 数据集 | SpeechMapper (零样本) | SpeechMapper (任务特定) | BEST-IWSLT25-IF | Transcripts + EuroLLM |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ST (COMET) | en-es | EuroParl | 79.9 | 85.4 | 83.5 | 85.9 |
| ST (COMET) | en-zh | CoVoST2 | 72.0 | 79.9 | 80.7 | 80.0 |
| SQA (Acc.) | PartII | LibriSQA | 64.3 | 68.1 | 62.5 | 73.4 |
5.  实际意义：提供了一种成本效益高、可扩展的方案，用于将现有文本LLM快速赋能语音能力，且能平衡零样本通用性与任务专精性，降低了语音AI应用开发的门槛。
6.  主要局限性：1) 评估仅限于两个任务（ST和SQA），对于其作为通用“嵌入投影器”的广泛适用性证明不足。2) 在更大型或不同架构的LLM上（如Llama 3.1 8B）效果不稳定，标准差较大。3) 论文未开源代码和模型。

---

