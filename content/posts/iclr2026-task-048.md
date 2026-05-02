---
title: "ICLR 2026 - 音频问答 论文列表"
date: 2026-05-03
draft: false
tags: ["音频问答"]
categories: [iclr-2026]
description: "共 5 篇 ICLR 2026 音频问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频问答

共 **5** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Query-Guided Spatial–Temporal–Frequency Interaction for Musi](/audio-paper-digest-blog/posts/2026-05-03-query-guided-spatialtemporalfrequency-interaction) | 8.0分 | 前25% |
| 🥈 | [OmniVideoBench: Towards Audio-Visual Understanding Evaluatio](/audio-paper-digest-blog/posts/2026-05-03-omnivideobench-towards-audio-visual-understanding) | 7.5分 | 前25% |
| 🥉 | [Measuring Audio's Impact on Correctness: Audio-Contribution-](/audio-paper-digest-blog/posts/2026-05-03-measuring-audios-impact-on-correctness-audio) | 7.5分 | 前25% |
| 4. | [Incentivizing Consistent, Effective and Scalable Reasoning C](/audio-paper-digest-blog/posts/2026-05-03-incentivizing-consistent-effective-and-scalable) | 6.5分 | 前50% |
| 5. | [Echo: Towards Advanced Audio Comprehension via Audio-Interle](/audio-paper-digest-blog/posts/2026-05-03-echo-towards-advanced-audio-comprehension-via) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [Query-Guided Spatial–Temporal–Frequency Interaction for Music Audio–Visual Question Answering](/audio-paper-digest-blog/posts/2026-05-03-query-guided-spatialtemporalfrequency-interaction)

🔥 **8.0/10** | 前25% | #音频问答 | #时频分析 | #音乐理解 #音视频

👥 **作者与机构**

- 第一作者：Kun Li（未说明）
- 通讯作者：未说明
- 作者列表：Kun Li（未说明）、Michael Ying Yang（未说明）、Sami Sebastian Brandt（未说明）

💡 **毒舌点评**

亮点：该工作敏锐地指出现有AVQA方法中音频被弱化、问题引导不足的痛点，并创新性地引入音频信号的频率域特征（而非仅作为声学特征）与问题线索进行时空频多维度交互，这种“问题驱动+频率感知”的设计思路逻辑自洽且有一定新颖性。短板：摘要中仅定性描述“显著性能改进”，缺乏任何具体数字（如提升了多少个百分点）与直接对比的最强基线方法，这在一定程度上削弱了其“显著改进”主张的说服力，也使得评估其实际技术增量变得困难。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/lik1996/QSTar
- 模型权重：未提及。
- 数据集：未提及数据集的具体获取方式。
- Demo：未提及。
- 复现材料：摘要中未提及训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：摘要中未提及依赖的其他开源工具或模型。

📌 **核心摘要**

1.  要解决什么问题：现有音视频问答（AVQA）方法过度依赖视觉信息，将音频视为视频的补充，且文本问题仅在最后阶段参与推理，未能充分、早期地引导模型对音频-视觉内容的联合理解。
2.  方法核心是什么：提出名为QSTar（Query-guided Spatial–Temporal–Frequency Interaction）的新方法，其核心是在问题（Query）的引导下，不仅利用传统的空间���时间特征，还显式地挖掘音频信号的频域特征，实现跨维度的交互。同时，引入受提示启发的查询上下文推理（QCR）模块，引导模型更精准地聚焦于语义相关的音视频特征。
3.  与已有方法相比新在哪里：1) 将问题信息深度融入到音视频特征的交互过程中，而非仅在后期融合；2) 显式建模音频的频率域特性，将其作为空间、时间特征之外的第三个关键维度进行交互；3) 设计专门的QCR模块以增强问题引导下的上下文聚焦能力。
4.  主要实验结果如何：论文中未给出具体数值，但声称在AVQA的两个基准测试上，该方法相比已有的音频问答、视觉问答、视频问答及AVQA方法均取得了显著的性能提升。
5.  实际意义是什么：该方法有望提升机器对音乐等富含音频信息的视频内容的深度理解能力，推动多模态问答系统在音乐教育、内容检索、辅助创作等领域的应用。
6.  主要局限性是什么：摘要中未说明；可能的局限包括引入频率域交互和额外模块带来的计算开销，以及在更广泛AVQA场景（非音乐类）下的泛化能力尚未在摘要中论证。

---

### 🥈 [OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs](/audio-paper-digest-blog/posts/2026-05-03-omnivideobench-towards-audio-visual-understanding)

✅ **7.5/10** | 前25% | #音频问答 | #基准测试 | #多模态模型 #音视频

👥 **作者与机构**

- 第一作者：Caorui Li（东南大学，南京大学）
- 通讯作者：Jiaheng Liu（南京大学）
- 作者列表：Caorui Li（东南大学，南京大学），Yu Chen（东南大学，南京大学），Yiyan Ji（南京大学），Jin Xu（阿里巴巴集团），Zhenyu Cui（东南大学），Shihao Li（南京大学），Yuanxing Zhang（快手科技），Zhenghao Song（M-A-P），Dingling Zhang（南京大学），Ying He（北京科技大学），Haoxiang Liu（北京科技大学），Yuxuan Wang（阿里巴巴集团），Qiufeng Wang（东南大学），Jiafu Tang（南京大学），Zhenhe Wu（M-A-P），Jiehui Luo（中央音乐学院），Zhiyu Pan（南京大学），Weihao Xie（华中科技大学），Chenchen Zhang（M-A-P），Zhaohui Wang（南京大学），Jiayi Tian（阿里巴巴集团），Yanghai Wang（南京大学），Zhe Cao（南京大学），Minxin Dai（南京大学），Ke Wang（M-A-P），Runzhe Wen（南京大学），Yinghao Ma（Queen Mary University of London），Yaning Pan（复旦大学），Sungkyun Chang（Queen Mary University of London），Termeh Taheri（Queen Mary University of London），Haiwen Xia（北京大学），Christos Plachouras（Queen Mary University of London），Emmanouil Benetos（Queen Mary University of London），Yizhi Li（曼彻斯特大学），Ge Zhang（M-A-P），Jian Yang（M-A-P），Tianhao Peng（M-A-P），Zili Wang（M-A-P），Minghao Liu（2077AI），Junran Peng（北京科技大学），Zhaoxiang Zhang（中国科学院），Jiaheng Liu（南京大学）

💡 **毒舌点评**

这篇论文在“评估什么”这件事上做到了当前最细粒度和最严谨的实践之一，尤其是对音频模态（语音、音效、音乐）的区分和推理链标注，直指现有模型的软肋。然而，作为一个即将发布的“基准测试”，其说服力很大程度上依赖于后续社区的使用和认可，目前论文更像是一份详尽的“产品设计说明书”，模型能力差距的“诊断报告”虽然详细，但“药方”（如何改进模型）还留待后续研究。

🔗 **开源详情**

- 代码：论文中未提及代码链接，但承诺“We will release OmniVideoBench to foster the development...”并在结论中表示“We promise to release the experimental code for evaluation in the future”。
- 模型权重：未提及��本文是评测工作，不产出模型）。
- 数据集：论文中承诺将发布OmniVideoBench数据集，但未提供具体下载链接或获取方式。
- Demo：未提及。
- 复现材料：论文在附录B详细说明了视频收集原则，附录C提供了评测所用的完整提示词（Prompt），为复现评测过程提供了关键信息。论文中引用的主要开源模型包括：Qwen2.5-Omni/XL，Qwen3-Omni，Baichuan-Omni-1.5，HumanOmni，MiniCPM-o，VideoLLaMA2，VITA-1.5，Qwen2.5-VL系列，DeepSeek-V3.1，Gemini系列（闭源），以及用于过滤的Gemini-2.0-Flash和DeepSeek-V3.1。

📌 **核心摘要**

1.  解决的问题：现有的多模态大语言模型（MLLM）评估基准无法全面评估模型在音视频协同推理方面的能力，往往忽略音频模态或未能逻辑一致地整合音视频信息。
2.  方法核心：提出了一个大规模、设计严谨的基准测试集OmniVideoBench。其核心在于收集了628个涵盖多种类型和时长的真实视频，并构建了1000个高质量、多选题形式的问答对。每个问答对都附带有逐步的、明确标注模态（视觉/音频）和证据的推理链，强调模态互补和逻辑一致性。
3.  与已有方法相比新在哪里：与现有音视频基准相比，OmniVideoBench在多个维度上进行了提升：（1）覆盖更广的视频时长（数秒到30分钟）和更丰富的现实场景（vlog、新闻、纪录片等）；（2）通过严格的三阶段过滤流程（单模态过滤、文本偏差过滤、人工修正）确保问题必须依赖音视频协同推理；（3）提供原子化的推理链标注，而不仅仅是最终答案，有助于分析模型推理过程。
4.  主要实验结果：实验评估了多种开源和闭源模型，发现：（1）当前模型表现普遍不佳，最优模型Gemini-2.5-Pro准确率仅为58.90%，远低于人类表现的82.69%；（2）开源模型（除最新的Qwen3-Omni外）表现接近随机猜测；（3）模型对音乐类音频的理解能力最差；（4）在不同任务类型上性能差异巨大，背景音乐理解和计数任务较难，关系推理和总结较易。具体结果见下表：

    | 模型 | 类型 | 平均准确率 |
    | :--- | :--- | :--- |
    | Gemini-2.5-Pro | 闭源 | 58.90% |
    | Gemini-3.0-Flash | 闭源 | 55.10% |
    | Qwen3-Omni-30B-A3B | 开源 | 38.40% |
    | Qwen2.5-Omni-7B | 开源 | 29.30% |
    | 人类表现 | - | 82.69% |

5.  实际意义：OmniVideoBench为社区提供了一个标准化的、高难度的评估工具，能够更公平、更深入地诊断和推动MLLM在真实、复杂的音视频理解场景下的能力发展，特别是针对音频-视觉协同推理、长时间建模和抽象音频理解等核心挑战。
6.  主要局限性：（1）作为评估基准，其自身不提出新的模型架构或训练方法；（2）问题类型虽多，但仍可能未覆盖所有现实世界的音视频推理场景；（3）依赖人工标注，规模（1000 QA对）相对有限，尽管质量很高。

---

### 🥉 [Measuring Audio's Impact on Correctness: Audio-Contribution-Aware Post-Training of Large Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-measuring-audios-impact-on-correctness-audio)

✅ **7.5/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #数据集

👥 **作者与机构**

- 第一作者：Haolin He（香港中文大学，蚂蚁集团）
- 通讯作者：Jian Liu（蚂蚁集团）， Qiuqiang Kong（香港中文大学）
- 作者列表：Haolin He（香港中文大学，蚂蚁集团），Xingjian Du（罗切斯特大学），Renhe Sun（蚂蚁集团），Zheqi Dai（香港中文大学），Yujia Xiao（香港中文大学），Mingru Yang（蚂蚁集团），Jiayi Zhou（蚂蚁集团），Xiquan Li（上海交通大学），Zhengxi Liu（香港中文大学），Zining Liang（香港中文大学），Chunyat Wu（香港中文大学），Qianhua He（华南理工大学），Tan Lee（香港中文大学），Xie Chen（上海交通大学），Wei-Long Zheng（上海交通大学），Weiqiang Wang（蚂蚁集团），Mark Plumbley（伦敦国王学院），Jian Liu（蚂蚁集团），Qiuqiang Kong（香港中文大学）

💡 **毒舌点评**

亮点：论文敏锐地发现并系统量化了大型音频语言模型（LALMs）中普遍存在的“零音频贡献”现象，即模型主要依赖文本而非音频内容答题，并基于此提出了创新的“音频贡献感知”后训练范式（Weak-to-Strong和Mixed-to-Strong），有效提升了模型在真正依赖音频任务上的性能。
短板：尽管构建了大规模数据集AudioMCQ，但其生成过程重度依赖LLM（Qwen3-235B），这可能将LLM的偏见或错误（如逻辑推理而非真实音频理解）引入数据集中，削弱了“音频贡献”定义的纯粹性；且论文对“强音频贡献”子集上的GRPO训练为何能带来提升的机制解释仍停留在现象层面，缺乏更深入的分析。

🔗 **开源详情**

*   代码：论文中未提及代码仓库链接。
*   模型权重：未提及是否公开微调后的模型权重。
*   数据集：论文中构建的AudioMCQ数据集已公开，并可通过指定链接申请获取（论文中提���了链接）。
*   Demo：未提及在线演示。
*   复现材料：提供了详细的超参数配置表（Table 6, Table 7）、数据划分比例、实验设置（如SFT/GRPO步数、数据隔离策略），以及用于评估的模型（A-Flamingo2, R1-AQA, Kimi-Audio）的提示词模板（Appendix B.6）。
*   论文中引用的开源项目：
    *   基座模型：Qwen2.5-Omni
    *   数据生成与评估：Qwen3-235B
    *   对比模型/方法：A-Flamingo2, R1-AQA, Kimi-Audio, Audio-Reasoner, SARI, Omni-R1, Audio-Thinker, GPT4o-Audio, Gemini-2.0-Flash。
*   开源计划：论文中未提及代码开源计划。

📌 **核心摘要**

1.  解决的问题：现有针对大型音频语言模型（LALMs）的两阶段后训练（如SFT+RL）效果不理想，且缺乏大规模高质量数据集来研究如何在不同训练阶段有效分配数据。同时，论文发现LALMs存在严重的“零音频贡献”现象，即模型能不依赖音频内容仅通过文本信息得出正确答案。
2.  方法核心：首先构建了一个包含57.1万个样本的高质量音频多项选择题数据集AudioMCQ。其次，提出“音频贡献过滤（ACF）”方法，通过将音频静音后用多个LALMs评估，将数据分为“弱音频贡献”和“强音频贡献”子集。最后，基于此提出两种新的后训练范式：Weak-to-Strong（在弱贡献数据上SFT，再在强贡献数据上GRPO）和Mixed-to-Strong（在混合数据上SFT，再在强贡献数据上GRPO）。
3.  创新性：与已有工作相比，本文首次系统性地研究并量化了LALMs的“零音频贡献”问题，并创新性地将数据的“音频贡献度”作为后训练阶段数据分配的关键指标，提出了两个简单有效的新训练范式。
4.  主要实验结果：使用Qwen2.5-Omni作为基座模型，Weak-to-Strong策略在MMAU-test-mini和MMAU上分别达到78.2%和75.6%，Mixed-to-Strong策略在MMAR和MMSU上分别达到67.0%和71.7%，均超越了此前的所有已知方法，建立了新的最佳水平（SOTA）。具体实验结果对比如下：

| 方法 | MMAU-test-mini | MMAU | MMAR | MMSU |
| :--- | :---: | :---: | :---: | :---: |
| Audio-Thinker | 78.0 | 75.4 | 65.3 | - |
| Omni-R1 | 77.0 | 75.0 | 63.4 | - |
| All Data GRPO | 78.1 | 75.4 | 63.0 | 70.2 |
| Weak AC SFT + Strong AC GRPO | 78.2 | 75.6 | 65.3 | 69.3 |
| Mix AC SFT + Strong AC GRPO | 76.4 | 75.1 | 67.0 | 71.7 |

    表格显示，提出的两种方法在不同基准测试上分别达到了最优性能。
5.  实际意义：为LALMs的后训练提供了新的、高效的范式指导，明确了在不同训练阶段应选择何种数据（按音频贡献度划分）以最大化模型能力，对提升模型在真实音频理解任务上的性能有直接指导价值。
6.  主要局限性：数据集构建流程对LLM的依赖可能引入偏见；所提出的ACF方法依赖于多个LALMs的性能，其本身可能受“零音频贡献”问题影响；论文未提供代码和模型权重，影响可复现性。

---

### 4. [Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards](/audio-paper-digest-blog/posts/2026-05-03-incentivizing-consistent-effective-and-scalable)

✅ **6.5/10** | 前50% | #音频问答 | #强化学习 | #音频场景理解 #音频大模型

👥 **作者与机构**

- 第一作者：Jiajun Fan（根据作者列表顺序推断，论文未明确标注“第一作者”字样）
- 通讯作者：未说明
- 作者列表：Jiajun Fan（未说明）、Roger Ren（未说明）、Jingyuan Li（未说明）、Rahul Pandey（未说明）、Prashanth Gurunath Shivakumar（未说明）、Ivan Bulyko（未说明）、Ankur Gandhe（未说明）、Ge Liu（未说明）、Yile Gu（未说明）
注：作者具体所属机构信息在摘要中未提供。

💡 **毒舌点评**

亮点在于精准捕捉并命名“测试时逆缩放”现象，并跳出“只验证答案对错”的窠臼，用多维度的过程奖励来规训推理链，思路颇具启发性。短板则是作为一项声称“状态最先进”的工作，摘要中给出的关键实验对比数据（如在MMAU上的具体得分和与GPT-4o的差值）过于简略，且缺乏与同赛道推理优化方法的横向比较，说服力打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：未提及。
- Demo：未提及。
- 复现材料：未提及训练细节、配置、检查点或附录说明。
- 引用的开源项目：摘要中未提及。
- 总结：论文中未提及开源计划。

📌 **核心摘要**

1.  要解决什么问题：在音频大模型（Audio LLM）中引入推理过程往往会导致性能下降（测试时逆缩放），即更长的推理链会带来更差的结果。论文认为这源于训练不足，导致模型产生幻觉、不一致且错误累积的推理。
2.  方法核心是什么：提出CESAR框架，采用在线强化学习，核心是过程奖励而非结果奖励。它使用Group Relative Policy Optimization（GRPO）和一套多方面奖励函数，激励推理过程的正确性、格式、一致性、结构化分析模式、因果推理、领域知识整合以及推理深度的校准。
3.  与已有方法相比新在哪里：从传统的、只关注最终结果正确性的验证（outcome verification），转向对整个推理过程（reasoning process）进行精细化、多维度的奖励和优化。这是针对音频LLM推理不稳定问题的首创性训练框架。
4.  主要实验结果如何：在MMAU Test-mini基准测试上取得了SOTA结果，大幅优于Gemini 2.5 Pro和GPT-4o Audio。在MMSU推理任务上达到了近人类水平。研究还揭示了模型存在特定的“推理甜点”，即在此处性能随推理深度增加而达到峰值。增强推理能力同时提升了模型的多模态推理和感知能力。
   注：由于提供的摘要中未包含具体数值的表格，无法列出详细数据。
5.  实际意义是什么：为开发稳健、可扩展的音频LLM推理能力提供了一种原则性的方法，有望推动音频AI从模式识别迈向更可靠的复杂推理与理解。
6.  主要局限性是什么：论文摘要中未充分展示与其他先进推理方法（而不仅仅是商业黑盒模型）的对比；未说明CESAR框架对模型基础架构的改造程度；缺乏代码和训练细节，阻碍了复现与验证。

---

### 5. [Echo: Towards Advanced Audio Comprehension via Audio-Interleaved Reasoning](/audio-paper-digest-blog/posts/2026-05-03-echo-towards-advanced-audio-comprehension-via)

✅ **6.5/10** | 前50% | #音频问答 | #强化学习 | #音频大模型 #预训练

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Daiqing Wu, Xuan Zhang, Dongbao Yang, Jiashu Yao, Longfei Chen, Qingsong Liu, Sicheng Zhao, Can Ma, Yangyang Kang, Yu ZHOU（所有作者所属机构均未说明）

#

💡 **毒舌点评**

亮点在于其“音频交错推理”的思路颇具想象力，试图让模型像人一样“回听”和“细听”，这是对当前主流“一锤子买卖”式音频理解范式的一次有趣挑战。但短板也同样明显，仅凭摘要中的“全面优于”和“综合分析证实”等定性描述，缺乏硬核数字和消融实验的支撑，让这项工作的实际效能打上了一个大大的问号。

#

🔗 **开源详情**

- 代码：提供了项目页面和GitHub仓库链接（https://github.com/wdqqdw/Echo）。
- 模型权重：论文摘要中未提及是否公开模型权重。
- 数据集：论文摘要中未提及是否公开其使用的数据集或生成的数据。
- Demo：论文摘要中未提及是否提供在线演示。
- 复现材料：论文摘要中未详细说明是否提供训练配置、检查点或详细的复现说明。提到有“结构化数据生成管道”，但未说明其是否随代码开源。
- 论文中引用的开源项目：论文摘要中未提及依赖的任何开源项目或工具。

📌 **核心摘要**

1. 解决的问题：当前大型音频语言模型（LALMs）在处理复杂音频时，普遍采用一次性将整个音频编码为表征的方法，这造成了“信息瓶颈”，限制了模型对音频内容的深入、细致理解。
2. 方法核心：提出“音频交错推理”范式，将音频视为推理过程中可主动、持续参与的组件。为此，设计了一个两阶段训练框架：第一阶段通过监督微调（SFT）教模型定位信息丰富的音频片段；第二阶段通过强化学习（RL）激励模型在需要时主动“回访”这些片段进行感知和分析。
3. 与已有方法相比新在哪里：打破了将音频作为静态上下文进行一次性处理的惯例，转变为动态、按需的、迭代式的音频感知与推理过程，更接近人类认知。
4. 主要实验结果：摘要中声明Echo在音频理解基准测试的专家级和通用任务上“全面优于”现有方法，但未提供任何具体数值。论文中未给出具体数值。
5. 实际意义：为构建更强大的音频理解模型提供了新的范式，有望提升模型在语音对话、音频事件理解、音视频分析等复杂场景下的性能。
6. 主要局限性：摘要未提及模型的具体性能指标、参数量、训练成本等关键信息，也未讨论该方法可能引入的额外计算开销或对音频时序敏感任务的潜在影响。其有效性与通用性仍需更全面的实验来验证。

---

