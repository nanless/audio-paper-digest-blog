---
title: "ICLR 2026 - 音频问答 论文列表"
date: 2026-05-04
draft: false
tags: ["音频问答"]
categories: [iclr-2026]
description: "共 6 篇 ICLR 2026 音频问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频问答

共 **6** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Query-Guided Spatial–Temporal–Frequency Interaction for Musi](/audio-paper-digest-blog/posts/2026-05-04-query-guided-spatialtemporalfrequency-interaction) | 8.5分 | 前25% |
| 🥈 | [OptMerge: Unifying Multimodal LLM Capabilities and Modalitie](/audio-paper-digest-blog/posts/2026-05-04-optmerge-unifying-multimodal-llm-capabilities-and) | 8.0分 | 前25% |
| 🥉 | [Echo: Towards Advanced Audio Comprehension via Audio-Interle](/audio-paper-digest-blog/posts/2026-05-04-echo-towards-advanced-audio-comprehension-via) | 8.0分 | 前25% |
| 4. | [Measuring Audio's Impact on Correctness: Audio-Contribution-](/audio-paper-digest-blog/posts/2026-05-04-measuring-audios-impact-on-correctness-audio) | 7.5分 | 前25% |
| 5. | [Incentivizing Consistent, Effective and Scalable Reasoning C](/audio-paper-digest-blog/posts/2026-05-04-incentivizing-consistent-effective-and-scalable) | 7.0分 | 前25% |
| 6. | [OmniVideoBench: Towards Audio-Visual Understanding Evaluatio](/audio-paper-digest-blog/posts/2026-05-04-omnivideobench-towards-audio-visual-understanding) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Query-Guided Spatial–Temporal–Frequency Interaction for Music Audio–Visual Question Answering](/audio-paper-digest-blog/posts/2026-05-04-query-guided-spatialtemporalfrequency-interaction)

🔥 **8.5/10** | 前25% | #音频问答 | #多模态模型 | #时频分析 #预训练

👥 **作者与机构**

- 第一作者：Kun Li（University of Twente， IT University of Copenhagen）
- 通讯作者：Sami Sebastian Brandt（IT University of Copenhagen）
- 作者列表：Kun Li（University of Twente， IT University of Copenhagen）、Michael Ying Yang（University of Bath）、Sami Sebastian Brandt（IT University of Copenhagen）

💡 **毒舌点评**

本文的亮点在于敏锐地抓住了音乐音视频问答中“频率域”特征的重要性，并通过一个精心设计的三模块（查询引导、时空频交互、查询推理）流水线将其系统性地融入模型，取得了扎实的SOTA提升。但短板在于其验证主要局限于音乐场景下的特定数据集，在更通用、声学特性更杂乱的真实世界音视频问答场景中的泛化能力仍待考察。

🔗 **开源详情**

- 代码：论文提供了GitHub代码仓库链接：https://github.com/lik1996/QSTar。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：使用了公开的MUSIC-AVQA和AVQA数据集。
- Demo：论文中未提供在线演示链接。
- 复现材料：论文在实现细节部分提供了模型训练的关键超参数（优化器、学习率、batch size、epochs）、特征提取器型号（CLIP-ViT-L/14， VGGish， AST）和硬件环境（NVIDIA H100 GPU），为复现提供了较好基础。
- 引用的开源项目：论文明确依赖以下开源项目/模型：CLIP (Radford et al., 2021)， Token Merging (Bolya et al., 2023)， VGGish (Gemmeke et al., 2017)， AST (Gong et al., 2021)， AdamW (Loshchilov et al., 2017)。

📌 **核心摘要**

这篇论文针对音乐音视频问答任务中现有方法对音频利用不足、查询信息整合过晚的问题，提出了一种名为QSTar的新型框架。其核心方法是在整个处理流程中引入查询引导，并设计了一个空间-时间-频率交互模块，显式地建模音频的频域特征以增强跨模态理解。与先前主要聚焦视觉处理或简单晚期融合的方法相比，QSTar的新颖之处在于早期将问题语义注入音频和视觉特征学习，并引入提示（prompting）机制指导最终推理。在MUSIC-AVQA基准测试集上，QSTar取得了78.98%的平均准确率，显著超越了此前的SOTA方法（如QA-TIGER的77.62%）。该工作的实际意义在于提升了复杂音乐场景（如多乐器合奏）下的自动问答能力。主要局限性在于其有效性验证主要集中于音乐领域，模型在更广泛或更具挑战性的视听场景中的性能有待进一步证明。

---

### 🥈 [OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging](/audio-paper-digest-blog/posts/2026-05-04-optmerge-unifying-multimodal-llm-capabilities-and)

🔥 **8.0/10** | 前25% | #音频问答 | #模型合并 | #多模态模型 #多任务学习

👥 **作者与机构**

- 第一作者：Yongxian Wei（清华大学）
- 通讯作者：Chun Yuan（清华大学）
- 作者列表：
    - Yongxian Wei（清华大学）
    - Runxi Cheng（清华大学）
    - Weike Jin（华为诺亚方舟实验室）
    - Enneng Yang（中山大学）
    - Li Shen（中山大学）
    - Lu Hou（华为诺亚方舟实验室）
    - Sinan Du（清华大学）
    - Chun Yuan（清华大学，通讯作者）
    - Xiaochun Cao（中山大学）
    - Dacheng Tao（南洋理工大学）

#

💡 **毒舌点评**

这篇论文最大的亮点在于首次为多模态大语言模型（MLLM）建立了专门的模型合并基准，并系统地将合并任务从“能力”和“模态”两个维度进行分类，填补了该领域的重要空白。然而，其提出的OptMerge方法虽然有效，但核心创新（对任务向量的低秩近似与优化）更像是对现有优化合并方法的工程化改进，理论深度和通用性有待更强的论证，且实验规模（1B-7B参数）限制了结论的普适性。

#

🔗 **开源详情**

- 代码：论文中明确提及“所有代码和检查点都在此公开”，并提供了链接（https://github.com/xxx/OptMerge），表明将开源。
- 模型权重：论文中训练的专家模型权重将公开发布。
- 数据集：收集的训练数据集和评估用数据集均为公开可用数据集，论文中已汇总说明。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了极其详细的实现细节（附录C），包括检查点构建、训练数据处理、评估协议、合并算法具体参数（学习率、优化器、迭代次数、λ搜索范围等），复现指引充分。
- 引用的开源项目：使用了VLMEvalKit、LMMs-Eval评估工具，以及CLIP-ViT、BEATs、LanguageBind等模态编码器，Vicuna、InternVL、Qwen2-VL等基础模型。

📌 **核心摘要**

本文旨在解决基础模型训练成本高与领域专用模型快速迭代之间的矛盾，提出了一种无需训练数据、通过合并多个专家模型来构建更强多模态大语言模型（MLLM）的高效方法。论文的核心贡献是：(1) 构建了首个专门针对MLLM的模型合并基准，涵盖VQA、几何、图表、OCR和Grounding五大能力，并探索了视觉-语言、音频-语言、视频-语言模型的跨模态合并；(2) 提出了一种名为OptMerge的新颖合并算法，该算法通过对任务向量进行低秩近似以去除噪声，并基于任务向量间的交互设计损失函数来鲁棒地优化合并向量。实验表明，OptMerge在基准测试上平均性能提升2.48%。主要结果包括：在Qwen2-VL模型上，合并后的模型在几何推理（48.66%）和图表理解（74.08%）上显著超越了单一任务专家模型；在模态合并任务中，合并视觉、音频、视频模型后的全模态模型在MUSIC-AVQA上达到53.50%，超过了所有单模态模型。该工作证明了模型合并是构建更优MLLM的有前景的、低成本的途径，但其验证主要集中在中小规模模型上，对更大规模模型的适用性尚未充分探索。

#

---

### 🥉 [Echo: Towards Advanced Audio Comprehension via Audio-Interleaved Reasoning](/audio-paper-digest-blog/posts/2026-05-04-echo-towards-advanced-audio-comprehension-via)

🔥 **8.0/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #基准测试

👥 **作者与机构**

- 第一作者：Daiqing Wu（中国科学院信息工程研究所，IIE；中国科学院大学；字节跳动）
- 通讯作者：Yangyang Kang（字节跳动）；Yu Zhou（南开大学，计算机科学学院，VCIP & TMCC & DISSec实验室）
- 作者列表：
  - Daiqing Wu（中国科学院信息工程研究所，IIE；中国科学院大学；字节跳动）
  - Xuan Zhang（字节跳动）
  - Dongbao Yang（中国科学院信息工程研究所，IIE）
  - Jiashu Yao（字节跳动）
  - Longfei Chen（上海科技大学，信息科学与技术学院）
  - Qingsong Liu（字节跳动）
  - Sicheng Zhao（清华大学，心理与认知科学系）
  - Can Ma（中国科学院信息工程研究所，IIE）
  - Yangyang Kang（浙江大学；字节跳动）
  - Yu Zhou（��开大学，计算机科学学院，VCIP & TMCC & DISSec实验室）

#

💡 **毒舌点评**

Echo提出的“音频交错推理”确实巧妙地模拟了人类反复聆听关键音频片段的认知过程，为突破当前LALMs的“一次性编码”瓶颈提供了直观且有效的思路，其在多个高难度基准上的SOTA结果证明了该范式的威力。然而，论文的软肋在于其高质量训练数据完全依赖一个自动化的“LLM生成+过滤”管道，这既引入了DeepSeek-R1等生成模型本身的偏见风险，也让最终模型的性能天花板受制于当前合成数据的质量，而非纯粹的人类专家标注。

#

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/wdqqdw/Echo
- 模型权重：论文中未提及公开已训练好的Echo模型权重。
- 数据集：论文中未提及公开其构建的EAQA-SFT和EAQA-RL数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的复现材料，包括：完整的两阶段训练框架描述（Section 3.1, Appendix D）、数据生成管道详述（Section 3.2, Appendix F）、评估设置（Section 4, Appendix G）、所有提示词模板（Appendix E）、奖励函数设计细节、以及训练超参数。这些信息足以支持复现。
- 引用的开源项目：基础模型使用Qwen2.5-Omni；数据生成使用DeepSeek-R1；训练引擎使用ms-swift (SFT)和VERL (RL)；推理引擎使用vLLM。

📌 **核心摘要**

1.  问题：当前大型音频语言模型（LALM）在处理复杂音频推理任务时，普遍采用一次性编码音频内容后完全依赖文本进行推理的范式，这造成了关键的信息瓶颈，导致模型难以保留和利用音频中的细粒度信息。
2.  方法核心：提出“音频交错推理”新范式，将音频作为活跃的推理组件而非静态上下文。设计了一个两阶段训练框架：首先通过监督微调（SFT）让模型学会定位并引用关键音频片段；然后通过强化学习（RL）与可验证奖励，训练模型在推理过程中动态、灵活地重新收听（re-listen）相关音频段。同时，构建了一个结构化的数据生成管道来产出高质量训练数据。
3.  新意：与传统的“音频条件文本推理”不同，新范式允许模型在推理过程中多次、按需地访问原始音频信号，从而实现更深入、基于感知的分析。训练上，创新性地将RL应用于优化这种多模态交错推理行为。
4.  主要实验结果：Echo模型在MMAR、MMAU-mini和MMAU三个音频理解基准上均取得了领先性能。在MMAR（专家级推理任务）上，平均准确率达69.99%，超越了GPT-4o-Audio (64.09%) 和 Gemini-2.0-Flash (67.90%)。在MMAU-mini和MMAU（通用音频理解）上，Echo的平均准确率也分别达到了80.41%和76.61%，优于其他开源和闭源模型。
5.  实际意义：为构建更接近人类感知与推理机制的音频理解模型提供了一个有前景的方向，有望推动LALMs在需要精细音频分析的实际场景（如多媒体内容理解、智能监控、辅助医疗等）中发挥更大作用。
6.  主要局限性：训练数据（特别是CoT标注）完全由LLM自动生成，其质量受限于生成模型和过滤策略，可能包含偏见或幻觉。模型的重新收听能力目前限于直接插入原始音频段，尚未探索更复杂的音频处理操作（如慢放、频段分离）。

#

---

### 4. [Measuring Audio's Impact on Correctness: Audio-Contribution-Aware Post-Training of Large Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-measuring-audios-impact-on-correctness-audio)

✅ **7.5/10** | 前25% | #音频问答 | #强化学习 | #数据集 #音频大模型

👥 **作者与机构**

- 第一作者：Haolin He（香港中文大学，蚂蚁集团）
- 通讯作者：Jian Liu（蚂蚁集团），Qiuqiang Kong（香港中文大学）
- 作者列表：Haolin He（香港中文大学，蚂蚁集团），Xingjian Du（罗切斯特大学），Renhe Sun（蚂蚁集团），Zheqi Dai（香港中文大学），Yujia Xiao（香港中文大学），Mingru Yang（蚂蚁集团），Jiayi Zhou（蚂蚁集团），Xiquan Li（上海交通大学），Zhengxi Liu（香港中文大学），Zining Liang（香港中文大学），Chunyat Wu（香港中文大学），Qianhua He（华南理工大学），Tan Lee（香港中文大学），Xie Chen（上海交通大学），Wei-Long Zheng（上海交通大学），Weiqiang Wang（蚂蚁集团），Mark D Plumbley（伦敦国王学院），Jian Liu（蚂蚁集团），Qiuqiang Kong（香港中文大学）

#

💡 **毒舌点评**

亮点：论文敏锐地指出了大型音频语言模型“不听音频也能答对”的“零音频贡献”现象，并基于此提出了优雅的数据分配方案，实验结果令人信服地证明了其有效性。
短板：其构建的大规模数据集AudioMCQ严重依赖现成的大语言模型生成，虽然做了质量控制，但数据的“纯净度”和真实世界分布仍存疑；训练方法本质上是基于现有模型（Qwen2.5-Omni）的“配方优化”，缺乏对模型内部机制的更深入探索。

### 📌 核心摘要
本文旨在解决大型音频语言模型（LALM）多阶段后训练（如监督微调SFT后接强化学习RL）中数据分配策略不佳的问题。研究首先构建了一个包含57.1万个高质量音频多选题的数据集AudioMCQ，并引入了链式思维标注。核心发现是，现有LALM普遍存在“零音频贡献”现象，即模型能仅凭文本信息正确回答问题。为此，论文定义了“音频贡献”度量，并提出了“音频贡献过滤”方法，将数据分为“弱音频贡献”和“强音频贡献”子集。基于此，论文提出了两种后训练范式：在弱音频贡献数据上SFT，然后在强音频贡献数据上RL的“Weak-to-Strong”策略；以及在混合数据上SFT，然后在强音频贡献数据上RL的“Mixed-to-Strong”策略。实验表明，这些策略在多个基准上取得了当前最优性能，例如Weak-to-Strong在MMAU-test-mini和MMAU上分别达到78.2%和75.6%，Mixed-to-Strong在MMAR和MMSU上分别达到67.0%和71.7%。本文为LALM后训练中的数据高效利用提供了重要的实证依据和实用策略。其主要局限在于，数据集构建依赖大语言模型，可能引入偏差；所提范式高度依赖现有模型和“音频贡献”过滤的有效性，其泛化性有待更多验证。

### 详细分析

#### 01. 模型架构
本文未提出新的模型架构。研究工作基于现有的大型音频语言模型，主要是Qwen2.5-Omni（骨干模型）进行后训练。后训练流程包括两个阶段：
1.  监督微调（SFT）：使用AudioMCQ数据集对Qwen2.5-Omni进行微调，模型学习以问答对形式（输入音频、问题、选项，输出答案和推理链）响应。
2.  强化学习（GRPO）：在SFT模型基础上，使用分组相对策略优化（GRPO）进行进一步对齐。GRPO对同一问题采样一组输出，通过比较组内输出的奖励来优化策略，无需单独的价值网络。

关键组件在于数据处理与训练策略的设计，而非模型结构本身。核心流程图如下：

![数据集AudioMCQ构建流程概览图](icassp-img://sJ0jUO9Mxr/0.png)
图1展示了AudioMCQ数据集的构建流程。首先从多个原始音频-文本数据集（如Clotho, AudioCaps等）收集数据，将其转换为统一的问题-答案格式。然后，使用Qwen3-235B生成新的、聚焦于音频依赖理解的多选题（包括问题、选项、正确答案和问题类型）。接着，生成两种形式的链式思维（CoT）标注：一种是结构化的三阶段CoT（问题类型分析、音频内容分析、答案选择），另一种是简化的非结构化CoT。最后，通过基于LLM的五维质量评估和过滤，得到最终的AudioMCQ数据集。

#### 02. 核心创新点
1.  发现并定义“零音频贡献”现象：指出LALM可能绕过音频，仅从文本线索得出正确答案。论文将其形式化定义为`AC=0`，并系统地在多个基准上验证了该现象的普遍性（如MMAU-test-mini上平均49.8%的准确率可由静音音频达到）。这揭示了现有评估和训练数据的一个关键缺陷。
2.  提出“音频贡献过滤”方法：设计了一种基于多个模型在静音输入下表现的数据划分方法，将数据集自动分为“弱音频贡献”和“强音频贡献”子集。这为针对性地训练模型不同能力（文本推理 vs. 真实音频感知）提供了可操作的数据策略。
3.  开发两种有效的多阶段后训练范式：提出了Weak-to-Strong和Mixed-to-Strong两种数据分配策略。实验证明，它们比简单的混合数据训练（Mixed-to-Mixed）更有效，尤其在强化学习阶段使用强音频贡献数据，能显著提升模型在音频感知型基准（如MMAR， MMSU）上的性能。
4.  构建大规模高质量数据集AudioMCQ：发布了一个包含57.1万样本、四种问题类型（声音、音乐、语音、时序）、并带有两种CoT标注的音频多选题数据集。数据集构建流程严谨，包含质量控制和过滤。

#### 03. 细节详述
- 训练数据：
    - AudioMCQ数据集：571,118个样本，来源于7个数据集（Clotho, AudioCaps, CompA-R, MusicCaps, LP-MusicCaps, SpeechCraft, TACOS）。问题类型分布：语音47.0%，声音39.1%，音乐8.1%，时序5.8%。使用Qwen3-235B生成和过滤。
    - 训练划分：SFT和GRPO训练数据严格不重叠。Weak-to-Strong范式使用313,177个弱音频贡献样本做SFT，再使用45.2%的强音频贡献样本做GRPO。Mixed-to-Strong使用混合数据做SFT，强音频贡献数据做GRPO。
- 损失函数：
    - SFT阶段使用标准的语言建模交叉熵损失。
    - GRPO阶段使用GRPO目标函数（公式13），其中包含策略比率裁剪项、KL散度惩罚项（β=0.001），奖励基于模型对同一问题生成一组回答的正确性来计算。
- 训练策略：
    - SFT超参数（表6）：全参数微调，学习率1e-6，序列长度1024，批大小20/卡，训练2个epoch，使用DeepSpeed ZeRO-2。
    - GRPO超参数（表7）：全参数训练，学习率1e-6，生成组大小8，温度1.5，训练1000步，使用DeepSpeed ZeRO-2。
- 关键超参数：未提供模型具体层数、隐藏维度等信息（因使用的是现成模型Qwen2.5-Omni）。关键训练超参见上。
- 训练硬件：论文未明确说明具体GPU型号和数量，但提到所有实验使用相同硬件设置。
- 推理细节：评估时，模型根据提示选择答案（见附录B.7）。最优检查点基于MMAU-test-mini-4k（每个问题正确选项出现在所有位置）选择。

#### 04. 实验结果
论文在四个主要基准（MMAU-test-mini， MMAU， MMAR， MMSU）上评估了所提方法。基线包括多种现有LALM和单阶段训练方法。关键结果对比如表所示：

表5：与现有方法的性能对比
| 方法 | MMAU-test-mini | MMAU | MMAR | MMSU |
| :--- | :---: | :---: | :---: | :---: |
| Qwen2.5-Omni (骨干模型) | 71.5 | 71.0 | 56.7 | 60.6 |
| All Data SFT (本论文) | 75.2 | 75.0 | 64.6 | 64.0 |
| All Data GRPO (本论文) | 78.1 | 75.4 | 63.0 | 70.2 |
| Weak-to-Strong (本论文) | 78.2 | 75.6 | 65.3 | 69.3 |
| Mixed-to-Strong (本论文) | 76.4 | 75.1 | 67.0 | 71.7 |
| Audio-Thinker | 78.0 | 75.4 | 65.3 | – |
| Omni-R1 | 77.0 | 75.0 | 63.4 | – |

关键结论：
- 使用AudioMCQ进行SFT或GRPO单阶段训练，已显著超越骨干模型基线。
- Weak-to-Strong 范式在MMAU-test-mini和MMAU上取得最佳性能（78.2%， 75.6%）。
- Mixed-to-Strong 范式在MMAR和MMSU上取得最佳性能（67.0%， 71.7%）。
- 消融实验（图5）显示：在强化学习阶段使用“强音频贡献”数据至关重要，它能显著提升模型在各类基准及其“强音频贡献子集”上的表现；而SFT阶段的数据选择应与下游任务特性对齐（弱音频贡献任务如MMAU适用Weak-to-Strong， 强音频贡献任务如MMAR/MMSU适用Mixed-to-Strong）。

![不同训练策略在MMAU-test-mini-4k上的性能曲线](icassp-img://sJ0jUO9Mxr/3.png)
图4展示了Weak-to-Strong、Mixed-to-Strong和Mixed-to-Mixed三种训练策略在验证集MMAU-test-mini-4k上的性能随训练步数变化的曲线，用于选择最优检查点。Weak-to-Strong策略在SFT后接GRPO阶段获得了最高的最终分数。

![不同训练策略在多个基准上的详细性能对比](icassp-img://sJ0jUO9Mxr/4.png)
图5详细比较了三种训练方法在四个基准（MMAU-test-mini， MMAR， MMSU）及其各自的强音频贡献子集（-ACstrong）上的性能随训练步数的变化。它清晰地显示了：1) 使用强音频贡献数据进行GRPO能带来普遍且显著的提升；2) SFT数据的选择会影响最终在不同类型基准上的表现。

#### 05. 评分理由
- 学术质量：6.0/7：论文动机明确，问题发现有价值，提出的“音频贡献”度量与过滤方法逻辑清晰、可操作。Weak-to-Strong和Mixed-to-Strong范式简单有效，实验设计合理，结果具有说服力。扣分点在于：1) 核心创新是方法论和数据策略，而非模型架构；2) 数据集AudioMCQ的构建严重依赖一个外部LLM（Qwen3-235B），其生成质量的上限可能影响最终结论的普适性。
- 选题价值：1.5/2：选题精准，解决了多模态模型后训练中实际且重要的数据分配问题。“音频贡献”的概念具有启发性，对优化类似多模态任务的数据使用具有参考价值。应用空间明确，直接服务于提升LALM的能力。
- 开源与复现加成：0/1：论文提供了非常详细的实验设置、超参数和数据集构建描述，有利于复现。但未明确提及代码或模型权重的开源计划，因此此项无加成。

### 开源详情
- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开训练后的模型权重。
- 数据集：AudioMCQ数据集描述详细，但论文未明确说明是否公开以及如何获取。
- Demo：未提及在线演示。
- 复现材料：提供了详细的超参数配置（附录E）、训练协议（固定数据量、数据增强、检查点选择等）、评估提示模板（附录B）和质量控制流程（附录C），复现信息较为充分。
- 论文中引用的开源项目：依赖的开源模型/工具包括Qwen2.5-Omni、Qwen3-235B、Audio-Flamingo2、R1-AQA、Kimi-Audio等。数据集来源包括Clotho， AudioCaps等公开数据集。
- 开源计划：论文中未提及开源计划。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开训练后的模型权重。
- 数据集：AudioMCQ数据集描述详细，但论文未明确说明是否公开以及如何获取。
- Demo：未提及在线演示。
- 复现材料：提供了详细的超参数配置（附录E）、训练协议（固定数据量、数据增强、检查点选择等）、评估提示模板（附录B）和质量控制流程（附录C），复现信息较为充分。
- 论文中引用的开源项目：依赖的开源模型/工具包括Qwen2.5-Omni、Qwen3-235B、Audio-Flamingo2、R1-AQA、Kimi-Audio等。数据集来源包括Clotho， AudioCaps等公开数据集。
- 开源计划：论文中未提及开源计划。

---

### 5. [Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards](/audio-paper-digest-blog/posts/2026-05-04-incentivizing-consistent-effective-and-scalable)

✅ **7.0/10** | 前25% | #音频问答 | #强化学习 | #音频大模型

👥 **作者与机构**

- 第一作者：Jiajun Fan (伊利诺伊大学厄巴纳-香槟分校 Siebel 计算与数据科学学院 & Amazon)
- 通讯作者：未明确说明（论文未指定通讯作者；共同第一/作者邮箱包含 @illinois.edu 和 @amazon.com）
- 作者列表：Jiajun Fan (伊利诺伊大学厄巴纳-香槟分校 Siebel 计算与数据科学学院 & Amazon), Roger Ren (Amazon), Jingyuan Li (Amazon), Rahul Pandey (Amazon), Prashanth Gurunath Shivakumar (Amazon), Ivan Bulyko (Amazon), Ankur Gandhe (Amazon), Ge Liu (伊利诺伊大学厄巴纳-香槟分校 Siebel 计算与数据科学学院), Yile Gu (Amazon)

💡 **毒舌点评**

论文精准地诊断了音频大模型推理的“测试时反向缩放”病灶——只奖励结果不训练过程，并开出了一套由一致性、模式、领域知识等构成的“组合药方”（过程奖励），实验证明疗效显著，在MMAU上超越了GPT-4o Audio。然而，这剂“药”煎起来很费算力（需采样多个响应），且治标的同时也暴露了“感知能力”这个更底层的瓶颈，说明模型还是听得不够清楚。

🔗 **开源详情**

- 代码：论文中未提及具体代码链接，但承诺将在论文发表后公开。
- 模型权重：未提及具体下载链接，但承诺将在论文发表后公开。
- 数据集：训练使用公开的AVQA数据集，并自行进行了数据增强。评测基准（MMAU, MMSU, MMAU-Pro）均为公开数据集。
- Demo：未提及在线演示。
- 复现材料：提供了详细的超参数设置（学习率、批大小、奖励权重等）、训练硬件规格、训练时长估算、奖励函数的具体计算方式（包括关键词列表），以及测试时缩放的操作方法。
- 引用的开源项目：依赖并基于Ke-Omni-R (Zhao et al., 2025) 的代码库和Qwen2.5-Omni-7B (Xu et al., 2025) 基座模型��
- 开源计划：论文明确表示“所有源代码和训练好的模型将在论文发表后公开”，因此有明确的开源计划。

📌 **核心摘要**

1. 要解决什么问题：音频大模型在引入链式推理后性能反而下降的“测试时反向缩放”问题。根本原因是现有训练方法（SFT、结果奖励RL）未能引导模型生成一致、逻辑合理的推理过程，导致错误在长链条中累积。
2. 方法核心是什么：提出CESAR框架，使用Group Relative Policy Optimization (GRPO) 进行在线强化学习，核心创新是设计了一套多方面的推理过程奖励函数，不仅奖励答案正确性和格式，还奖励推理与答案/问题的一致性、结构化分析模式、领域知识使用，并惩罚过度冗长的推理。
3. 与已有方法相比新在哪里：从传统的“结果验证”范式转变为“过程奖励”范式。相比仅奖励最终答案正确性的RLVR方法（如Ke-Omni-R），CESAR显式地监督和塑造了推理过程的质量，旨在将推理从随机涌现的现象转变为可训练、可控制的技能。
4. 主要实验结果如何：
    - 在MMAU Test-mini基准测试上，CESAR（使用推理）达到77.10%的准确率，超越了Gemini 2.5 Pro (71.60%) 和 GPT-4o Audio (62.50%)，并显著高于其基线Qwen2.5-Omni-7B (68.60%)和Ke-Omni-R (74.60%)。
    - 在MMSU基准测试上，CESAR在推理任务上接近人类水平（81.07% vs 人类86.77%），在感知任务上优于其他模型但仍低于人类（48.45% vs 人类91.24%）。
    - 消融研究证明，去除任何一个过程奖励组件（一致性、关键词奖励、过度思考惩罚）都会导致性能下降，证明了各组件的贡献。
    - 通过测试时缩放分析，CESAR发现了“推理最佳点”（约35-40 tokens），性能在此达到峰值，解决了反向缩放问题。

![测试时缩放与推理质量评估](icassp-img://DUr48hxO2h/2.png)
图：左侧展示了不同模型在测试时随着最大思考长度增加的性能变化。CESAR方法的性能曲线先升后降，存在明显的“推理最佳点”，而基线模型性能持续下降（反向缩放）。右侧的AI裁判评估显示CESAR的推理过程在对比中具有压倒性的胜率。

5. 实际意义是什么：为音频大模型训练可靠的推理能力提供了一个系统的方法论，即通过精心设计的过程奖励进行强化学习。这有望提升模型在需要复杂听觉理解和逻辑推理的任务（如音乐分析、事件理解）中的表现，并揭示了推理能力与感知能力之间的协同效应。
6. 主要局限性是什么：(1) 训练计算成本高，GRPO需要采样多个响应；(2) 模型存在“感知瓶颈”，推理能力接近人类但感知能力与人类差距仍大；(3) 多方面奖励引入了额外的超参数调优复杂度。

---

### 6. [OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs](/audio-paper-digest-blog/posts/2026-05-04-omnivideobench-towards-audio-visual-understanding)

✅ **7.0/10** | 前25% | #音频问答 | #基准测试 | #音视频 #多模态模型

👥 **作者与机构**

- 第一作者：Caorui Li（南京大学，东南大学）
- 通讯作者：Jiaheng Liu（南京大学）
- 作者列表：Caorui Li（南京大学，东南大学）、Yu Chen（南京大学，东南大学）、Yiyan Ji（南京大学）、Jin Xu（阿里巴巴集团）、Zhenyu Cui（东南大学）、Shihao Li（南京大学）、Yuanxing Zhang（快手科技）、Zhenghao Song（M-A-P）、Dingling Zhang（南京大学）、Ying He（北京科技大学）、Haoxiang Liu（北京科技大学）、Yuxuan Wang（阿里巴巴集团）、Qiufeng Wang（东南大学）、Jiafu Tang（南京大学）、Zhenhe Wu（M-A-P）、Jiehui Luo（中央音乐学院）、Zhiyu Pan（南京大学）、Weihao Xie（华中科技大学）、Chenchen Zhang（M-A-P）、Zhaohui Wang（南京大学）、Jiayi Tian（阿里巴巴集团）、Yanghai Wang（南京大学）、Zhe Cao（南京大学）、Minxin Dai（南京大学）、Ke Wang（M-A-P）、Runzhe Wen（南京大学）、Yinghao Ma（伦敦玛丽女王大学）、Yaning Pan（复旦大学）、Sungkyun Chang（伦敦玛丽女王大学）、Termeh Taheri（伦敦玛丽女王大学）、Haiwen Xia（北京大学）、Christos Plachouras（伦敦玛丽女王大学）、Emmanouil Benetos（伦敦玛丽女王大学）、Yizhi Li（曼彻斯特大学）、Ge Zhang（M-A-P）、Jian Yang（M-A-P）、Tianhao Peng（M-A-P）、Zili Wang（M-A-P）、Minghao Liu（2077AI）、Junran Peng（北京科技大学）、Zhaoxiang Zhang（中国科学院）、Jiaheng Liu（南京大学）

#

💡 **毒舌点评**

亮点在于构建了一个高质量、强调“真融合”而非“单模态可解”的音视频理解基准，并通过详实的错误分析（如图8-12所示）揭示了当前模型在跨模态融合、时序推理和非语音音频理解上的具体短板。短板是，作为一篇评估论文，其核心贡献是一个“尺子”而非“造尺子”的新方法，且最前沿模型（如Gemini 2.5 Pro）在音乐理解等任务上仍有显著不足（低于50%），说明问题定义虽好，但模型能力的天花板尚未被真正触及。

#

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/NJU-LINK/OmniVideoBench。论文中未详细说明仓库内包含的具体内容（如评估脚本）。
- 模型权重：未提及。论文评估的是已有的闭源和开源MLLM权重。
- 数据集：承诺将发布OmniVideoBench数据集。未说明具体发布平台和获取方式。
- Demo：未提及。
- 复现材料：提供了详细的附录，包括视频分类表（表5）、视频收集原则（附录B）、所有评估使用的提示词（附录C）。实验设置描述较为清晰。
- 论文中引用的开源项目：引用了Gemini系列模型、DeepSeek-V3、Voxtral-Mini-3B（用于ASR）等作为评估或数据处理工具。

📌 **核心摘要**

1. 问题：现有MLLM评估基准未能全面评估模型在音视频协同推理时的模态互补与逻辑一致性，常将音频视为辅助，或仅处理短片段。
2. 方法核心：提出OmniVideoBench，一个包含628个视频、1000个QA对的大规模基准。其核心设计在于要求每个问题必须依赖视觉与音频的协同推理才能解答，且每个QA对都附带由模态、证据、推理三步组成的原子推理链（如图1所示）。
3. 新意：与以往基准相比，OmniVideoBench覆盖了更长的视频时长（数秒至30分钟）、更多样的音频类型（语音、环境声、音乐），并强制要求模态互补，避免了答案可通过单模态推断的情况。数据构建经过了严格的人工标注与基于Gemini 2.0 Flash和DeepSeek-V3.1的多轮过滤（如图2流程）。
4. 主要实验结果：在OmniVideoBench上，当前MLLM表现均不佳，最好的Gemini 2.5 Pro准确率仅为58.90%，开源模型接近随机水平。模型在音乐相关视频上表现最差（Gemini 2.5 Pro准确率仅38.46%）。在13类任务中，背景与音乐理解任务最难，而关系推理和摘要任务相对容易。消融实验表明，仅提供ASR文本比纯视觉输入能提升性能，但仍远不及完整音频输入（图6）。详见下表：

| 模型 | 音乐准确率 | 环境声准确率 | 语音准确率 | 总体准确率 |
| :--- | :--- | :--- | :--- | :--- |
| Gemini-3.0-Pro | 52.81 | 55.17 | 64.13 | 61.80 |
| Gemini-2.5-Pro | 38.46 | 57.72 | 61.66 | 58.90 |
| Qwen3-Omni-30B-A3B | 37.36 | 34.67 | 39.26 | 38.40 |
| Qwen2.5-Omni-7B | 23.07 | 25.33 | 30.70 | 29.30 |

5. 实际意义：为评估和推动具备真正跨模态推理能力的MLLM提供了一个更严格、更全面的基准，揭示了当前模型在长视频理解、音乐情感/氛围解码以及多模态信息平衡整合方面的核心缺陷。
6. 局限性：作为评估基准，其改进依赖于模型自身的进步。论文承认在长视频和音乐理解任务上仍有巨大提升空间，且当前模型与人类表现（82.69%准确率）差距显著。

#

---

