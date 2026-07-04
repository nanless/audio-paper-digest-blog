---
title: "Stream RAG: Instant and Accurate Spoken Dialogue Systems with Streaming Tool Usage"
date: 2026-07-04
draft: false
tags: [流式处理]
categories: [icml-2026]
description: "流式处理 | 7.2/10"
hiddenInHomeList: true
---

# 📄 Stream RAG: Instant and Accurate Spoken Dialogue Systems with Streaming Tool Usage

#流式处理

**7.2/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 清晰 0.7/1 | 影响 0.9/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 1.3/1.5

✅ **7.2/10** | 前50% | #流式处理 | #流式处理 | [arxiv](https://openreview.net/forum?id=NMMmwSbzRx)


### 👥 作者与机构

- 第一作者：Siddhant Arora（Meta AI / Carnegie Mellon University）
- 通讯作者：Siddhant Arora（siddhana@meta.com）、Zhaojiang Lin（zhaojiang@meta.com）
- 作者列表：Siddhant Arora（Meta AI, USA / Carnegie Mellon University, USA）、Haidar Khan（Meta AI, USA）、Kai Sun（Meta AI, USA）、Xin Luna Dong（Meta AI, USA）、Sajal Choudhary（Meta AI, USA）、Seungwhan Moon（Meta AI, USA）、Xinyuan Zhang（Meta AI, USA）、Adithya Sagar（Meta AI, USA）、Surya Teja Appini（Meta AI, USA）、Kaushik Patnaik（Meta AI, USA）、Sanat Sharma（Meta AI, USA）、Shinji Watanabe（Carnegie Mellon University, USA）、Anuj Kumar（Meta AI, USA）、Ahmed A Aly（Meta AI, USA）、Yue Liu（Meta AI, USA）、Florian Metze（Meta AI, USA）、Zhaojiang Lin（Meta AI, USA）

### 💡 毒舌点评

本文提出了一种将语音对话系统的工具调用从“端点后”推进到“流式并行”的工程框架，其“边听边查”的思路以及对延迟的大幅改善（结合vLLM后达57%）无疑是务实且有效的。然而，这也是一篇典型的工业界系统工程论文：核心的Model-Triggered策略本质上是对LLM的一次精巧适配和指令微调，学术深度有限，未能对“为何流式查询不损害准确率”提供理论层面的洞见。此外，论文回避了Reflector机制在关键实体后置时的失效问题，且对多轮、嘈杂环境的鲁棒性验证严重不足，使其宣称的泛化能力打了折扣。

### 📌 核心摘要

本文针对在端到端（E2E）语音对话系统（SDS）中集成外部工具检索（RAG）后，响应延迟大幅增加的问题，提出了Stream RAG框架。其核心思想是利用流式语音输入的时序特性，在用户说话过程中并行地发起工具查询（如网页搜索、知识图谱查询），从而将工具调用延迟隐藏在用户话语的时间窗口内。论文提出了两种具体策略：1）Fixed-Interval Stream RAG，以固定时间间隔发起工具查询，并引入一个Reflector模块，通过将中间查询结果与最终查询结果对比来保证检索质量；2）Model-Triggered Stream RAG，通过后训练教会模型根据累积的部分语音输入和历史查询，自主决定何时触发新查询，并设计了一种负样本注入策略，以增强模型在部分观测下从错误查询中自我纠正的能力。

与传统的Retrieve-after-endpoint方法相比，Stream RAG首次将工具调用从“说完再查”推进到“边说边查”的流式并行模式。实验在自建的AudioCRAG（合成+真人语音）基准和公开的SLUE-SQA基准上进行，主要结果包括：
- 在AudioCRAG上，Model-Triggered Stream RAG使Qwen-OMNI的QA准确率从11.1%提升至34.2%（绝对提升23.1%），并在集成vLLM后，于真人语音上将首Token延迟降低57%（3.16s \(\\to\) 1.36s）；
- 在SLUE-SQA上，Stream RAG以55.8%的EM准确率超越了包括WavRAG在内的所有对比系统，并实现了-0.68s的负首Token延迟（即回答开始生成早于用户语音结束）。

该工作为构建低延迟、更自然的语音AI助手提供了一个实用的工程范式，但其流式查询质量的保障强依赖于启发式的Reflector规则和后训练数据的伪标签质量，在多轮对话和复杂推理场景下的表现也有待深入探索。

| 模型 | 设置 | AudioCRAG-Synthetic准确率(%) | AudioCRAG-Human准确率(%) | 首Token延迟(s) Syn./Hum. |
|------|------|-------------------------------|---------------------------|----------------|
| Qwen-OMNI | Closed Book | 11.1 | 13.1 | 1.34/1.24 |
| OpusLM | Closed Book | 18.4 | 15.5 | 5.67/7.07 |
| Kimi Audio | Closed Book | 16.7 | 16.0 | 0.85/0.89 |
| Qwen-OMNI | Open Book | 26.3 | 26.9 | 5.90/5.40 |
| Qwen-OMNI | Stream RAG | 34.2 | 37.4 | 5.32/3.60 |

### 🔗 开源详情

- 代码：论文中未提供代码链接。作者在结论部分声明“We will open source our training code”，但未给出具体URL。
- 模型权重：论文主要基于公开预训练模型进行实验，未提及发布新的微调模型权重。
  - Qwen-OMNI (Qwen2.5-Omni-7B): https://huggingface.co/Qwen/Qwen2.5-Omni-7B
  - OpusLM: 论文引用 (Tian et al., 2025)，权重链接未在论文中给出
  - Kimi-Audio: 论文引用 (Ding et al., 2025)，权重链接未在论文中给出
- 数据集：
  - AudioCRAG‑Synthetic：基于公开CRAG数据集经TTS生成，未提供独立下载。
  - AudioCRAG‑Human：复用WearVox数据集的子集构建，WearVox (Lin et al., 2025) 论文未提供公开访问链接。
  - SLUE‑SQA 基准：https://github.com/yshon0512/SLUE-sqa-survey
  - 后训练使用TriviaQA子集：https://nlp.cs.washington.edu/triviaqa/
  - 多轮评估使用CORAL数据集：https://github.com/princeton-nlp/CORAL
- Demo：未提及。
- 复现材料：论文附录提供了提示模板（§A.18）、评估设置（§A.12）及训练超参（Table 19-21）；未提供训练检查点或Docker镜像。
- 论文中引用的开源工具：
  - BGE‑large‑en‑v1.5 (Xiao et al., 2023): https://huggingface.co/BAAI/bge-large-en-v1.5
  - vLLM (Kwon et al., 2023): https://github.com/vllm-project/vllm
  - CRAG 基准 (Yang et al., 2024d): https://github.com/facebookresearch/CRAG
  - OWSM CTC v4 1B (Peng et al., 2025): https://github.com/espnet/espnet/tree/master/egs2/owsm_v4
  - Whisper (Radford et al., 2023): https://github.com/openai/whisper
  - VITS (Hayashi et al., 2020): https://huggingface.co/espnet/kan-bayashi_ljspeech_vits

## 标签
#语音对话 #检索增强生成 #端到端模型 #流式处理
主任务标签：#语音对话
主方法标签：#检索增强生成
补充标签：#端到端模型 #流式处理 #延迟优化 #基准数据集

### 🏗️ 方法概述和架构

Stream RAG框架的核心思路是将传统RAG的“同步-顺序”工具调用流程改造为“异步-并行”的流式工具调用流程，其方法论建立在E2E语音对话系统的两阶段推理框架之上。

1. 整体两阶段推理流程：
E2E语音对话系统接收原始音频问题 \(Q\)，并输出语音回答 \(A\)。工具集成遵循两阶段模式（见论文图2）：
- Stage 1: Query Generation：模型处理完整的音频输入 \(Q\)，为每个外部工具（如网页搜索API、知识图谱API）生成一个对应的文本查询 \(Q^T\)，通过最大化后验概率 \(P(Q^T|Q)\) 实现。每个工具调用会触发一个标准的检索流程：(i) top-k文档检索，(ii) 文档分块，(iii) 对文本块进行重排序。其中，分块和重排序步骤是首Token延迟的主要瓶颈。
- Stage 2: Response Generation：将检索结果 \(R\) 与输入音频 \(Q\) 拼接，输入模型以生成最终的语音回答 \(A\)，即最大化 \(P(A|Q,R)\)。

![图2](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/NMMmwSbzRx-p2-e1091abd3.jpg)

这种两阶段设计的关键特征是查询生成阶段仅依赖音频输入，与工具结果解耦的，这为后续的流式查询生成提供了结构基础。

2. Stream RAG的流式扩展：
Stream RAG在上述两阶段框架上引入了时间维度上的并行化。输入音频 \(Q\) 被切分为 \(B\) 个固定长度的块 \(Q = \{Q_b|b=1,\dots,B\}\)。核心问题变为：在累积接收到部分音频 \(Q_{1:b}\) 时，系统是否能提前发起一个工具查询 \(Q_b^T\)，而不是等待完整的音频 \(Q_{1:B}\)。

该框架定义了三个关键设计组件：
1.  Trigger（触发器）：决定何时基于当前部分音频发起一个新的工具查询。这是流式调度的核心。
2.  Threads（线程）：系统中同时存在的并行工具查询线程数量。
3.  Reflector（反射器）：一个决定中间查询结果是否充分、可用于最终回答生成的验证模块。

3. Fixed-Interval Stream RAG的具体实现：
该方法在每一个音频块边界无条件触发工具查询。处理完第 \(b\) 块时，模型基于累积音频预测查询 \(\hat{Q}_b^T = \arg\max P(Q^T|Q_{1:b})\)。这会产生 \(B\) 个并行工具调用线程。

![图3](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/NMMmwSbzRx-p2-v2c9d5d88.jpg)

- Reflector机制：等待完整音频结束后，获得最终查询 \(\hat{Q}_B^T\)。Reflector模块然后向后扫描所有已缓存的中间查询 \(\{\hat{Q}_b^T\}\)，寻找满足条件的最早块索引 \(b^*\)，使得其查询结果与最终查询的结果一致。判断标准如下：
  - 网页查询：\(\hat{Q}_{b^*}^T\) 和 \(\hat{Q}_B^T\) 检索到的top-5文档完全匹配。
  - 知识图谱查询：两次查询的API返回结果完全相同。
- 随后，系统立即终止所有其他并行线程，并使用 \(b^\) 块的检索结果 \(R_{b^}\) 来生成最终回答。
- 设计动机与权衡：这是一个“即插即用”的方案，无需任何模型再训练，能与任意E2E SDS兼容。Reflector通过等价性检查提供了强质量保证。但其缺点也很明显：(1) 并行线程数多，计算开销大；(2) Reflector的运行依赖于等待完整的最终查询 \(\hat{Q}_B^T\)，因此仍未完全消除对语音端点的依赖，延迟节省较为有限。

4. Model-Triggered Stream RAG的具体实现：
该方法将“何时触发查询”的决策权交给模型本身，通过后训练让模型学会根据部分语音内容智能地决定是否发起新的工具查询。

![图10](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/NMMmwSbzRx-p4-e5d98befd.jpg)

- 决策形式：在处理第 \(b\) 块音频后，模型接收累积音频 \(Q_{1:b}\) 和当前最近的非空查询 \(Q_b^{\text{prev}}\)，然后预测：\(\hat{Q}_b^T = \arg\max P(Q^T|Q_{1:b}, Q_b^{\text{prev}})\)。模型的输出要么是一个新的文本查询，要么是一个特殊的标记 `NO_QUERY`（表示无需更新查询）。
- 单线程管理：一旦模型输出了一个新的查询（非 `NO_QUERY`），系统会立即终止之前可能正在进行的工具调用线程，并启动新线程。因此，系统中始终最多只有一个活跃的工具调用线程。
- 无Reflector架构：由于决策由模型自主完成，系统不再需要Reflector进行验证。在用户说完话（第\(B\)块）后，系统直接使用当前最新的查询 \(Q_B^{\text{prev}}\) 对应的检索结果来驱动回答生成。这彻底消除了对端点的依赖。
- 后训练流程（关键创新）：
  1.  伪标签生成：从TriviaQA文本QA数据出发，利用ASR（OWSM CTC v4 1B）获取词级时间戳。对每个500ms的时间块 \(b\)，获得部分文本 \(X_b^{\text{asr}}\)，并使用LLAMA-4-Maverick为该部分文本生成一个对应的“理想”工具查询 \(Q_b^T\) 作为伪真值。
  2.  相似度标签策略：这是教会模型“何时触发新查询”的核心。对于块 \(b\)，将其伪真值查询 \(Q_b^T\) 与上一个非空查询 \(Q_b^{\text{prev}}\) 进行比较，使用启发式相似度函数 \(f()\) 判定：
      - 若 \(f(Q_b^T, Q_b^{\text{prev}}) = \text{True}\)（例如网页查询的top-5文档不变，或KG查询完全一致），则训练标签设为 `NO_QUERY`，教导模型当前信息无增量，无需重新查询。
      - 否则，训练标签设为 \(Q_b^T\)，教导模型出现了新信息，需要更新查询。
  3.  负样本注入策略：为解决训练-推理不一致问题（即训练时 \(Q_b^{\text{prev}}\) 总是正确的，而推理时可能已出错），以10%的概率将训练数据中的 \(Q_b^{\text{prev}}\) 替换为随机的错误查询 \(Q_b^{\text{neg}}\)。此时，强制将训练标签设为伪真值 \(Q_b^T\)，教导模型即使从错误的前序查询出发，也要能根据当前音频恢复出正确的查询。
- 多任务微调目标：模型同时优化两个目标：(a) 流式工具查询生成，优化\(P(Q^T|Q_{1:b}, \hat{Q}_b^{\text{prev}})\)；(b) 回答生成，优化 \(P(A|Q,R)\)。

### 💡 核心创新点

1.  首个流式工具查询调度框架：首次在E2E语音对话系统中提出了“边说边查”的流式工具调用范式，将工具查询从“等待完整输入”的同步模式转变为“与语音输入并行”的异步模式，从原理上挖掘了语音流天然的时序重叠潜力来隐藏延迟。
2.  模型驱动的触发决策与鲁棒训练策略：提出了Model-Triggered Stream RAG，让模型学会从部分语音和自身历史查询中自主判断是否发起新查询。特别是设计的负样本注入训练策略，有效缓解了部分观测下的错误查询雪崩效应，赋予了模型从错误前序查询中自我纠正的能力，这是流式设置下一个关键且实际的难题。
3.  AudioCRAG基准构建：将CRAG文本基准通过TTS和真人录音转化为语音形式，构建了AudioCRAG（含合成和真人语音两个版本），为工具增强型语音对话系统提供了一个在动态知识和长尾实体场景下的评测基准，弥补了该方向评测资源的空白。
4.  即插即用的训练无关基线：提出的Fixed-Interval Stream RAG无需任何再训练即可应用于任意E2E语音对话模型，并通过Reflector模块提供检索结果的质量保证，为流式RAG提供了一个简单而有效的零样本基线。

### 📊 实验结果

主要实验在三个基准上进行评估：自建的AudioCRAG（合成和真人语音）、公开的SLUE-SQA和CORAL（多轮对话）。评测模型包括Qwen-OMNI、OpusLM和Kimi Audio。

1. AudioCRAG上的主要结果（Table 1）：
- 封闭书（Closed Book，无工具）下，所有模型准确率均低于20%。
- 开放书（Open Book，传统RAG）显著提升准确率，Qwen-OMNI从11.1%提升至26.3%，但首Token延迟从1.34s暴增至5.90s（增加约3.4倍）。
- Stream RAG（Model-Triggered）进一步将Qwen-OMNI准确率提升至34.2%（合成）/37.4%（真人），同时实现了延迟降低。在真人语音上，由于端点检测的消除，工具使用延迟降低了53.4%。

2. SLUE-SQA上的主要结果（Table 2）：
- Stream RAG（Qwen-OMNI）取得了55.8%的EM准确率，显著超过了所有WavRAG变体（如WavRAG-CoT GPT-4o的49.2%）和级联系统（36.6%）。
- 更关键的是，Stream RAG实现了-0.68s的负首Token延迟，意味着在用户说话结束前系统就已经开始生成回答了。错误分析表明，正确的和错误的预测具有近乎相同的中位延迟节省（-0.70s vs -0.66s），说明过早的工具调用并非导致错误的主要原因。

3. 消融实验（Table 6）：
- 对比了“后训练的序列RAG”和“后训练的Stream RAG”，两者准确率几乎相同（Qwen-OMNI: 34.9% vs 34.2%）。这有力地证明了Stream RAG的流式机制在保持准确率的同时，获得了纯延迟上的优势。

4. 延迟剖析与vLLM加速（Table 4）：
- 在没有vLLM优化时，Stream RAG将Qwen-OMNI在合成音频上的P50首Token延迟从5.90s降至5.32s。
- 集成vLLM后，优化效果被显著放大。在AudioCRAG-Human上，Model-Triggered Stream RAG的P50首Token延迟从3.16s降至1.36s，降低了57%。工具结果生成（Tool Results Gen）是延迟的主要瓶颈，Stream RAG通过提前发起调用，将中位耗时从2.78s降至2.20s。

5. 多轮对话与鲁棒性测试：
- 在CORAL多轮对话数据集上，Stream RAG在第二轮对话中实现了1.83s的延迟降低，同时ROUGE-L得分与开放书相比仅有轻微下降（12.9 vs 13.6）或持平。这表明其延迟优势可拓展至多轮场景。
- 通过故意注入误导性前序查询进行的压力测试显示，模型能够实现65.4%的恢复准确率，验证了负样本注入训练带来的自纠正鲁棒性。

| 模型 | 设置 | EM准确率(%) | 首Token延迟(s) |
|------|------|-------------|----------------|
| Cascade (Whisper→Qwen2.5→VITS) | - | 36.6 | 1.53 |
| WavRAG GPT-4o | - | 40.1 | 0.56 |
| WavRAG QwenAudio | - | 30.6 | 0.56 |
| WavRAG-CoT GPT-4o | - | 49.2 | 4.34 |
| WavRAG-CoT QwenAudio | - | 34.0 | 4.34 |
| Stream RAG Qwen-OMNI | - | 55.8 | -0.68 |

### 🔬 细节详述

- 训练数据：
  - 后训练数据：从TriviaQA数据集随机抽取16,000个文本问答对，并通过TTS转为语音Token。问题被LLAMA-4-Maverick转换为对话风格。
  - 时间戳生成：使用OWSM CTC v4 1B模型获取训练数据的词级时间戳，用于构建500ms间隔的部分语音输入。
  - 伪标签生成：使用LLAMA-4-Maverick为每个部分文本生成伪真值工具查询（网页查询和KG查询）。
- 训练策略：后训练采用多任务微调策略，同时优化流式查询生成和回答生成两个目标。损失函数形式未在正文中明确给出，仅描述为最大化后验概率 \(P(Q^T|Q)\) 等，通常对应交叉熵损失。多任务权重在论文图13（Table 19）中给出：流式查询生成为1.0，响应生成为0.5。
- 关键超参数：具体训练超参数在论文附录的Table 19中给出，包括：模型尺寸（7B）、学习率调度（cosine, 2e-5到0）、峰值学习率（2e-5）、权重衰减（0.01）、全局批大小（512）、训练步数（2000）、warmup步数（100）。这增强了实验的可复现性。

![图13](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/NMMmwSbzRx-p8-ee7ccbf21.jpg)

- 其他超参数：
  - 音频块大小：Fixed-Interval为1秒；Model-Triggered为500毫秒。
  - 检索设置：网页检索使用BGE-large-en-v1.5作为重排序器，检索top-50文档，后分块进行重排序。KG查询使用CRAG模拟API。
- 推理细节：集成vLLM进行生产级推理优化。Model-Triggered Stream RAG每500ms执行一次前向传播。工具查询生成（Query Gen）的延迟极低（P50: 0.05s），模型决策开销可忽略不计。
- 训练硬件：未说明GPU型号、数量与训练时长。

### ⚖️ 评分理由

*   创新性 (1.2/2)：将工具调用从“等待完整输入”变为“流式并行”的idea在语音对话领域是新颖的。Model-Triggered的决策学习策略和负样本注入是解决流式设置下错误传播的有效手段。然而，这也是一项典型的工程创新，其核心的“从部分输入预测查询”是增量处理思想的直接应用，方法学上的理论创新深度有限。

*   技术严谨性 (1.2/1.5)：算法的两阶段推理和两种流式策略的设计逻辑清晰。训练数据构建流程（伪标签、相似度判断、负样本注入）考虑周全，特别是对训练-推理不一致问题的解决方案是严谨且有效的。不足在于，用于判断查询等价性的启发式函数 \(f()\)（top-5匹配或KG结果完全一致）是粗糙的，且其正确性高度依赖于一个由完整语音生成的“最终查询”作为真值，这在本质上引入了新的偏差。同时，缺乏对流式查询影响最终生成质量的机理分析。论文在附录（Table 19-21）中提供了详细超参数，弥补了正文的不足。

*   实验充分性 (1.1/1.5)：实验覆盖了3个SOTA语音模型、AudioCRAG（合成/真人）和SLUE-SQA等基准，基线比较全面。消融实验有效地解耦了后训练和流式机制的贡献。人类评估和详细的延迟剖析提升了结果的说服力。主要不足在于：1）对多轮对话的验证仅在CORAL的一个子集上进行了二轮测试，远不足以支撑其处理长程对话的能力；2）缺乏在更复杂工具（如多步API调用）、不同噪声等级或口音下的鲁棒性评估；3）训练数据规模（16k）对最终性能的影响没有进行消融分析。

*   清晰度 (0.7/1)：论文整体结构合理，核心方法（图1-3）通过图示解释较为直观。然而，方法论部分的关键细节分散在正文和附录中，正文对训练流程（特别是伪标签生成过程）的描述不够清晰，图3的排版也略显拥挤。虽然附录提供了超参数，但论文主体对多任务损失函数、具体提示模板等关键信息的交代仍有缺失，若非附录补充，可复现性将大打折扣。

*   影响力 (0.9/1.5)：该工作直接解决了语音AI系统中一个核心的实用痛点——延迟问题，具有很高的工业应用价值，很可能影响下一代实时语音助手的设计范式。来自Meta FAIR的背书以及公开基准上的SOTA结果也增加了其被关注的可能。然而，其贡献偏向系统工程，对语音、NLP、强化学习等基础研究领域的理论启发价值有限，这限制了其在纯学术圈的影响力。

*   开源 (0.5/1.5)：论文声称将开源训练代码并发布AudioCRAG基准，但目前提供的链接仅指向CRAG原项目，未包含论文自身的代码仓库及AudioCRAG数据集。作者承诺开源，但当前状态尚不可验证。

*   可复现性 (0.3/0.5)：论文在附录中提供了关键训练超参数（图13/Table 19）和提示模板，极大改善了方法的可复现性。然而，伪标签生成、数据增强等流程的具体实现细节以及训练硬件需求仍有模糊之处，完全复现仍可能存在障碍。

*   工程/实践价值 (1.3/1.5)：这是一个具有高工程价值的系统级工作。其模块化的设计思想（Trigger, Threads, Reflector）、即插即用的零样本基线、以及与vLLM的集成优化，为工业界构建低延迟实时语音产品提供了清晰的参考架构和直接可用的解决方案。但论文缺少在真实嘈杂环境下的性能报告，略微降低了其作为大规模部署方案的说服力。

### 🚨 局限与问题

论文明确承认的局限：
1.  当前的Stream RAG框架主要处理单轮工具调用，未来需要扩展到更复杂的多跳、多查询检索场景。
2.  模型触发的流式查询依赖于后训练中用伪标签定义的“理想”查询，这可能与实际最优查询之间存在偏差。
3.  对于知识图谱查询，判断查询相似度的启发式标准（是否完全一致）过于严格。

审稿人发现的潜在问题：
1.  Reflector机制的强假设缺陷：Fixed-Interval Stream RAG的核心——Reflector，基于一个强假设：部分查询与最终查询会返回相同结果。当问题的关键实体或条件出现在话语末尾时，前期的中间查询几乎不可能命中正确信息，Reflector将完全失效，导致所有并行调用被浪费，系统最终仍需等待最终查询结果。论文并未分析这种最坏情况的占比。
2.  多轮对话验证不充分：论文仅在CORAL数据集的第二轮对话上进行了评测，这远不能证明其能处理真正的多轮对话。后续轮次的查询往往需要结合多轮历史进行指代消解和信息融合，而论文仅将前轮音频作为输入，模型是否能在更长的上下文中依然保持高效的触发决策质量，是存疑的。
3.  文本到语音的模态鸿沟未解：Table 3揭示了一个明显现象：语音输出的准确率（34.2%）远低于文本输出（39.8%）。论文将此归咎于实体发音困难。但这恰恰暴露了一个更深层的问题：Stream RAG成功检索到了包含生僻词的正确信息，但下游的语音生成模块却无法正确朗读，这反而可能导致生成的语音回答比混入内部知识的版本更令人困惑，构成了检索增强与语音生成之间的一个新矛盾，而论文并未对此提出任何解决思路。
4.  评估指标的局限性：对人类语音回答的评估，仅通过ASR转录后计算EM或LLM-Judge分数，完全忽略了对语音自然度、韵律、流畅度的评估。一个延迟极低但听感机械的语音回复，其用户体验可能非常糟糕，而当前的实验体系无法捕捉这一点。
5.  鸣谢与利益冲突声明：论文未包含标准的Acknowledgements或利益冲突声明（如资助信息），不符合部分顶会的投稿规范。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
