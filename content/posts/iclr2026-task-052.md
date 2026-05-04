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
| 🥇 | [Incentivizing Consistent, Effective and Scalable Reasoning C](/audio-paper-digest-blog/posts/2026-05-04-incentivizing-consistent-effective-and-scalable) | 8.5分 | 前10% |
| 🥈 | [Echo: Towards Advanced Audio Comprehension via Audio-Interle](/audio-paper-digest-blog/posts/2026-05-04-echo-towards-advanced-audio-comprehension-via) | 8.5分 | 前10% |
| 🥉 | [Query-Guided Spatial–Temporal–Frequency Interaction for Musi](/audio-paper-digest-blog/posts/2026-05-04-query-guided-spatialtemporalfrequency-interaction) | 8.0分 | 前25% |
| 4. | [Can Vision-Language Models Answer Face to Face Questions in ](/audio-paper-digest-blog/posts/2026-05-04-can-vision-language-models-answer-face-to-face) | 8.0分 | 前25% |
| 5. | [Measuring Audio's Impact on Correctness: Audio-Contribution-](/audio-paper-digest-blog/posts/2026-05-04-measuring-audios-impact-on-correctness-audio) | 7.5分 | 前25% |
| 6. | [WorldSense: Evaluating Real-world Omnimodal Understanding fo](/audio-paper-digest-blog/posts/2026-05-04-worldsense-evaluating-real-world-omnimodal) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards](/audio-paper-digest-blog/posts/2026-05-04-incentivizing-consistent-effective-and-scalable)

🔥 **8.5/10** | 前10% | #音频问答 | #强化学习 | #音频大模型 #推理

👥 **作者与机构**

- 第一作者：Jiajun Fan (伊利诺伊大学厄巴纳-香槟分校 Siebel 计算与数据科学学院)
- 通讯作者：未说明
- 作者列表：Jiajun Fan (伊利诺伊大学厄巴纳-香槟分校)，Roger Ren (Amazon)，Jingyuan Li (Amazon)，Rahul Pandey (Amazon)，Prashanth Gurunath Shivakumar (Amazon)，Ivan Bulyko (Amazon)，Ankur Gandhe (Amazon)，Ge Liu (伊利诺伊大学厄巴纳-香槟分校)，Yile Gu (Amazon)

💡 **毒舌点评**

亮点在于系统性地诊断并解决了音频LLM推理的“测试时逆缩放”这一实际且重要的“反直觉”现象，并建立了一套从过程奖励到可扩展能力的完整方法论。短板是其基于GRPO的在线强化学习训练计算成本高昂（需要8块H200训练61小时），且多奖励组件的超参数调节（如α权重）虽经实验验证，但给实际复现增加了一定复杂度。

🔗 **开源详情**

- 代码：论文中明确承诺“所有源代码和训练模型将在出版后公开”，但当前未提供具体链接。
- 模型权重：论文承诺公开训练好的模型权重，未提供具体链接。
- 数据集：使用AVQA数据集进行训练，该数据集是公开的。论文通过模板进行了数据增强，增强模板在附录中说明。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详尽的复现指南，包括：完整的算法伪代码（附录C）、详细的训练超参数（附录B.4）、奖励函数计算细节及关键词列表（附录B.6）、评估基准说明、硬件信息等。复现材料非常充分。
- 论文中引用的开源项目：基于Qwen2.5-Omni-7B模型进行训练，其基线代码参考了Ke-Omni-R的开源实现。

📌 **核心摘要**

本文针对音频大语言模型（Audio LLMs）在引入链式思维（CoT）推理时性能反而下降的“测试时逆缩放”问题进行了深入研究。作者指出，问题根源不在于推理本身，而在于现有训练方法（监督微调或仅基于结果正确性的强化学习）未能对推理过程进行有效监督，导致模型产生幻觉、不一致且逻辑混乱的推理链。为此，论文提出了CESAR（Consistent, Effective, and Scalable Audio Reasoners）框架，其核心创新在于将强化学习的优化目标从仅关注答案正确性（结果奖励）扩展为同时激励推理过程的一致性、结构化模式、因果逻辑、领域知识整合以及推理深度的合理性（过程奖励），并使用GRPO算法进行在线训练。与仅使用结果奖励的基线方法（如Ke-Omni-R）相比，CESAR不仅解决了测试时逆缩放问题，还使推理链长度与性能呈现积极的缩放关系，并发现了模型特定的“推理甜点”。实验表明，CESAR在MMAU Test-mini基准上达到77.1%的准确率，超越了GPT-4o Audio（62.5%）和Gemini 2.5 Pro（71.6%），在MMSU推理任务上达到近人类水平（81.07%），并通过人类评估和AI评判证实了其推理质量的显著提升。论文还揭示了推理能力提升对模型感知能力的协同增强作用。主要局限性在于训练计算开销大，且当前音频模型的性能瓶颈已部分转移至基础感知能力。

---

### 🥈 [Echo: Towards Advanced Audio Comprehension via Audio-Interleaved Reasoning](/audio-paper-digest-blog/posts/2026-05-04-echo-towards-advanced-audio-comprehension-via)

🔥 **8.5/10** | 前10% | #音频问答 | #强化学习 | #音频大模型 #多模态模型

👥 **作者与机构**

- 第一作者：Daiqing Wu（中国科学院信息工程研究所 IIE， ByteDance中国）
- 通讯作者：Yangyang Kang（ByteDance中国）， Yu Zhou（南开大学 VCIP & TMCC & DISSec）
- 作者列表：
    - Daiqing Wu（IIE， ByteDance中国， 中国科学院大学）
    - Xuan Zhang（ByteDance中国）
    - Dongbao Yang（IIE）
    - Jiashu Yao（ByteDance中国）
    - Longfei Chen（上海科技大学信息科学与技术学院）
    - Qingsong Liu（ByteDance中国）
    - Sicheng Zhao（清华大学心理学与认知科学系）
    - Can Ma（IIE）
    - Yangyang Kang（浙江大学， ByteDance中国）（带†和‡标注，应为共同通讯或同等贡献）
    - Yu Zhou（南开大学 VCIP & TMCC & DISSec）（带†和‡标注，应为共同通讯或同等贡献）

💡 **毒舌点评**

这篇论文最亮眼的是提出了一个符合人类认知直觉的“音频交错推理”框架，并用一套从数据生成到训练的完整工程化方案将其落地，实验也做得扎实全面。然而，其性能提升高度依赖于自动合成的训练数据（EAQA），这本质上是用一个强大的“教师”（DeepSeek-R1）的知识来蒸馏模型，而数据生成的“天花板”和潜在偏差可能限制模型的上限；此外，模型当前只能“回放”原始音频片段，无法进行更复杂的音频分析操作（如慢放、滤波），这为未来的扩展留下了空间，但也是当前的局限。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/wdqqdw/Echo。
- 模型权重：论文中提到“We present Echo, a LALM...”，结合开源仓库链接，可推断已公开模型权重。
- 数据集：论文详细介绍了EAQA-SFT和EAQA-RL两个数据集的构建过程，并提及发布，应包含在开源仓库中。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了详尽的复现材料，包括：
    - 详细的训练超参数和配置（学习率、批量大小、KL系数等）。
    - 数据生成管道的完整提示词（prompt）。
    - 奖励函数的具体计算方式。
    - 推理伪代码（Algorithm 1）。
    - 评估使用的标准提示模板。
    - 硬件环境信息（NVIDIA A100 GPU）。
    - 模型评估的设置细节。
- 论文中引用的开源项目：在实现细节中提及使用了以下开源工具/引擎：ms-swift（用于SFT）， VERL（用于RL）， vLLM（用于推理评估）。

📌 **核心摘要**

这篇论文旨在解决当前大音频语言模型（LALM）在处理复杂音频推理任务时，因“一次编码”策略导致的信息丢失和推理瓶颈问题。核心方法是提出“音频交错推理”范式，使模型能在推理过程中根据需要动态“重听”原始音频的关键片段，将音频从静态上下文变为推理的主动组件。为实现此目标，作者设计了一个两阶段训练框架：首先通过监督微调（SFT）让模型学会定位关键音频片段并输出带时间戳标签的推理链，然后通过强化学习（RL）利用可验证奖励信号（包括准确性、格式、一致性和片段奖励）进一步优化模型灵活调用音频片段的能力。同时，作者开发了一套自动化的数据生成管道，利用现有音频数据集和LLM合成了大规模、高质量的音频问答（Audio-QA）及推理链数据集（EAQA）。在MMAR、MMAU等专家级和通用级音频理解基准上的实验表明，Echo模型在整体性能上超越了包括GPT-4o和Gemini-2.0-Flash在内的多个先进基线模型，证明了音频交错推理的有效性和高效性。该工作为提升LALM的复杂音频理解能力提供了一个有前景的新方向，其主要局限在于训练数据完全依赖自动合成，可能引入偏差，且模型目前仅限于重放原始音频，未探索更复杂的音频处理操作。

---

### 🥉 [Query-Guided Spatial–Temporal–Frequency Interaction for Music Audio–Visual Question Answering](/audio-paper-digest-blog/posts/2026-05-04-query-guided-spatialtemporalfrequency-interaction)

🔥 **8.0/10** | 前25% | #音频问答 | #多模态模型 | #音视频 #时频分析

👥 **作者与机构**

- 第一作者：Kun Li（University of Twente；IT University of Copenhagen）
- 通讯作者：Sami Sebastian Brandt（IT University of Copenhagen）
- 作者列表：Kun Li（University of Twente, IT University of Copenhagen）、Michael Ying Yang（University of Bath）、Sami Sebastian Brandt（IT University of Copenhagen）

💡 **毒舌点评**

这篇论文的亮点在于它为音乐音视频问答（AVQA）设计了一个从问题引导到最终预测的端到端框架，并创新性地将音频的频率域特征作为一等公民纳入时空交互中，有效解决了视觉线索微弱时（如演奏者动作不明显）的识别难题，消融实验也扎实地证明了各模块的必要性。然而，其主要短板在于提出的框架相对复杂，引入了多个预训练编码器（CLIP， VGGish， AST），整体计算开销和模型复杂度可能限制其在资源受限场景的应用，且实验主要集中在音乐场景这一相对小众的benchmark上。

🔗 **开源详情**

-   代码：提供了GitHub代码仓库链接：`https://github.com/lik1996/QSTar`。
-   模型权重：论文中未提及公开发布预训练模型权重。
-   数据集：实验使用的MUSIC-AVQA和AVQA均为公开数据集，论文中未提供独家数据。
-   Demo：论文中未提及提供在线演示。
-   复现材料：在论文附录A和正文中详细提供了实现细节，包括优化器（AdamW）、学习率（1e-4）、批次大小（64）、训练轮次（30）、硬件（单张NVIDIA H100 GPU）等。代码链接的提供极大便利了复现。
-   引用的开源项目：论文依赖并引用了CLIP、VGGish、AST、Token Merging等预训练模型或开源工具。

📌 **核心摘要**

本文针对音乐音视频问答（AVQA）任务中现有方法对音频利用不充分、问题信息引入较晚的问题，提出了一种名为QSTar（Query-guided Spatial–Temporal–Frequency Interaction）的新型方法。该方法的核心是在整个处理流程中引入问题引导（query guidance），并设计了一个空间-时间-频率交互（STFI）模块，以充分利用音频信号的频域特性来增强视听理解。具体地，方法包含三个主要组件：1）查询引导的多模态关联模块（QGMC），在早期阶段就用问题信息精炼音频和视觉特征；2）空间-时间-频率交互模块（STFI），在空间、时间和频率三个维度进行细粒度的跨模态交互，尤其利用音频频谱图变换器（AST）提取频率感知特征；3）基于提示的查询上下文推理模块（QCR），在最后阶段整合语言上下文进行推理。在MUSIC-AVQA基准上的实验表明，QSTar在所有问题类型上均取得了显著的性能提升，整体准确率达到78.98%，超越了先前的最优方法QA-TIGER（77.62%）和TSPM（76.79%），尤其在需要频率分析的音频类和音视频对比类问题上优势明显。消融研究验证了每个模块的有效性以及问题引导贯穿全流程的必要性。该工作的意义在于推动了多模态问答中对音频模态的精细化建模，其频率感知交互的设计为解决类似问题提供了新思路。局限性主要在于模型依赖多个预训练编码器，计算成本较高，且主要验证于音乐场景。

---

### 4. [Can Vision-Language Models Answer Face to Face Questions in the Real-World?](/audio-paper-digest-blog/posts/2026-05-04-can-vision-language-models-answer-face-to-face)

🔥 **8.0/10** | 前25% | #音频问答 | #基准测试 | #多模态模型 #音视频

👥 **作者与机构**

- 第一作者：Reza Pourreza（Qualcomm AI Research）
- 通讯作者：未明确说明
- 作者列表：Reza Pourreza（Qualcomm AI Research）， Rishit Dagli（University of Toronto / Qualcomm AI Research）， Apratim Bhattacharyya（Qualcomm AI Research）， Sunny Panchal（Qualcomm AI Research）， Guillaume Berger（Qualcomm AI Research）， Roland Memisevic（Qualcomm AI Research）

💡 **毒舌点评**

论文的亮点在于精准地抓住了当前多模态大模型从“离线理解”走向“实时交互”的关键瓶颈，并构建了一个极具针对性的真实世界问答基准，为社区指明了明确的改进方向。然而，其短板在于数据集规模相对有限（2900条），且核心评估指标依赖LLM judge，可能引入新的评估偏差，而提出的“流式基线”方法相对简单，更多是概念验证而非技术突破。

📌 **核心摘要**

本文旨在评估当前的视觉语言大模型在真实世界实时、面对面问答场景下的能力。论文指出，现有模型和基准大多关注离线视频理解，缺乏对实时交互中“情境感知”和“回答时机判断”能力的评估。为此，作者构建了一个新的数据集与基准——Qualcomm Interactive Video Dataset (QIVD)。该数据集包含2900个由用户通过手机或电脑录制的视频，视频中用户会基于看到的场景提出一个开放性问题，并提供了问题文本转录、答案以及最关键的“最佳回答时间戳”。通过与多个最先进（SOTA）模型（包括GPT-4o、Gemini、Qwen系列、VideoLLaMA系列等）的对比实验，论文发现现有模型在该任务上与人类表现存在巨大差距。例如，在离线设置（使用真值问题和时间戳）下，最强的GPT-4o模型正确率仅为58.76%，而人类基线达到87.33%。实验揭示了模型的三大主要失败模式：难以实时整合视听信息消歧、无法判断合适的回答时机、缺乏情境常识。论文进一步证明，通过在QIVD上对多模态模型（如VideoLLaMA2.1）进行微调，可以显著提升其在动作计数、音频视觉任务等类别上的性能。该工作的主要贡献是提出了一个全新的、用于评估实时交互式视觉推理的基准数据集，并系统地分析了当前模型的局限性。其局限性在于数据集规模相对较小，且评估高度依赖LLM judge。

---

### 5. [Measuring Audio's Impact on Correctness: Audio-Contribution-Aware Post-Training of Large Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-measuring-audios-impact-on-correctness-audio)

✅ **7.5/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #数据集

👥 **作者与机构**

- 第一作者：Haolin He（香港中文大学、蚂蚁集团）
- 通讯作者：Jian Liu（蚂蚁集团）， Qiuqiang Kong（香港中文大学）
- 作者列表：Haolin He（香港中文大学、蚂蚁集团）， Xingjian Du（罗切斯特大学）， Renhe Sun（蚂蚁集团）， Zheqi Dai（香港中文大学）， Yujia Xiao（香港中文大学）， Mingru Yang（蚂蚁集团）， Jiayi Zhou（蚂蚁集团）， Xiquan Li（上海交通大学）， Zhengxi Liu（香港中文大学）， Zining Liang（香港中文大学）， Chunyat Wu（香港中文大学）， Qianhua He（华南理工大学）， Tan Lee（香港中文大学）， Xie Chen（上海交通大学）， Wei-Long Zheng（上海交通大学）， Weiqiang Wang（蚂蚁集团）， Mark D Plumbley（伦敦国王学院）， Jian Liu（蚂蚁集团）， Qiuqiang Kong（香港中文大学）

#

💡 **毒舌点评**

亮点：论文敏锐地捕捉并量化了“音频语言模型不听音频”这一核心问题，提出的“音频贡献”度量与过滤方法逻辑自洽，且基于此设计的Weak-to-Strong和Mixed-to-Strong训练范式确实有效，在多个基准上取得了扎实的SOTA结果。
短板：整个框架高度依赖Qwen2.5-Omni作为基座模型验证，其结论在不同架构（如纯编码器-解码器模型）上的泛化性未可知；且“音频贡献”的定义（用静音替换音频）过于粗暴，无法区分解码器是“忽略”了音频还是“错误处理”了音频。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：论文发布了名为“AudioMCQ”的大规模数据集，包含571,118个样本，但未提供获取数据集的直接链接或平台（如Hugging Face）。数据集构建流程和质量标准描述详尽。
- Demo：未提供在线演示。
- 复现材料：提供了极其详尽的复现材料，包括：数据集构建的完整提示词模板（附录B）、质量控制流程说明（附录C）、所有训练的超参数配置表（表6、表7）、评���提示词格式（附录B.6， B.7）以及实验控制细节（附录E.2）。这些信息足以让同行复现其训练流程。
- 论文中引用的开源项目：主要依赖开源的大语言模型（Qwen3-235B）和大型音频语言模型（如Qwen2.5-Omni， A-Flamingo2， R1-AQA， Kimi-Audio）作为工具和基线。

📌 **核心摘要**

1. 问题：当前大型音频语言模型的后训练方法（如SFT后接RL）效果不佳，且缺乏适用于该阶段的大规模高质量数据集，同时模型普遍存在“零音频贡献”现象，即仅凭文本即可回答问题而无需真正处理音频。
2. 方法核心：构建了包含57.1万样本的多选题数据集AudioMCQ，并配有思维链标注。系统研究了“零音频贡献”现象，提出“音频贡献过滤”将数据分为弱、强贡献子集。基于此，设计了两种后训练范式：在弱贡献数据上SFT，再在强贡献数据上GRPO（Weak-to-Strong）；在混合数据上SFT，再在强贡献数据上GRPO（Mixed-to-Strong）。
3. 新颖之处：首次系统量化LALM对音频的依赖程度，并基于此发现优化多阶段训练的数据分配策略，将问题从“如何训练”推进到“用什么数据、按什么顺序训练”。
4. 实验结果：使用Weak-to-Strong策略在MMAU-test-mini（78.2%）和MMAU（75.6%）上取得SOTA；使用Mixed-to-Strong策略在MMAR（67.0%）和MMSU（71.7%）上取得SOTA。消融实验证明，仅在强音频贡献数据上进行RL能显著提升模型真正的音频感知能力。
5. 意义：为LALM后训练提供了高效的数据分配范式和高质量数据集，推动了模型向更真实的音频理解发展。
6. 局限：方法论深度绑定于现有模型（用于音频贡献评估）；“音频贡献”的定义（静音替换）可能过于简化；最终模型主干单一，结论普适性有待验证。

---

### 6. [WorldSense: Evaluating Real-world Omnimodal Understanding for Multimodal LLMs](/audio-paper-digest-blog/posts/2026-05-04-worldsense-evaluating-real-world-omnimodal)

✅ **7.0/10** | 前25% | #音频问答 | #基准测试 | #多模态模型 #视频理解

👥 **作者与机构**

- 第一作者：Jack Hong（小红书公司）
- 通讯作者：Weidi Xie（上海交通大学）
- 作者列表：Jack Hong（小红书公司）、Shilin Yan（小红书公司）、Jiayin Cai（小红书公司）、Xiaolong Jiang（小红书公司）、Yao Hu（小红书公司）、Weidi Xie（上海交通大学）

💡 **毒舌点评**

这篇论文最大的亮点在于它指出了一个残酷的现实：现有最强的多模态大模型在需要同时理解声音和画面的真实世界场景中，表现最好的也只达到了65.1%的准确率，离可靠应用还差得远。然而，它的短板也同样明显：作为一个评测基准论文，它更像是为其他研究者“立规矩”和“出考卷”，本身在模型架构或训练方法上的原创性贡献有限。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开模型权重。
- 数据集：公开。论文明确说明WorldSense数据集已公开发布，可在其项目主页和GitHub/HuggingFace获取。
- Demo：未提供在线演示链接。
- 复现材料：提供了详细的评估设置（如帧采样方法、API使用）、评估Prompt模板（附录A.4）和数据集统计信息，足以复现其评估实验。
- 论文中引用的开源项目：引用了多个被评估的开源模型，如OneLLM, VideoLLaMA2, Qwen2-VL, LLaVA-OneVision等，以及数据集来源FineVideo和MusicAVQA。
- 开源计划：论文中未提及除数据集之外的额外开源计划。

📌 **核心摘要**

该论文旨在解决当前多模态大语言模型（MLLM）评估中忽略音频模态、场景简单、任务单一的问题。为此，作者提出了WorldSense，这是首个专注于评估MLLM对真实世界音视频同步内容进行全模态理解的基准测试。该基准的核心创新在于设计了紧密耦合音视频的任务，使得单独依赖任一模态都无法正确回答问题。它包含1662个来自8大领域、67个子类别的音频同步视频，以及3172个跨越26种认知任务的高质量多选题QA对。所有问答对由80名专家标注员多轮校对，确保质量。实验对众多开源和闭源模型进行了广泛评估。结果表明，现有模型在真实世界场景下面临巨大挑战，最佳模型Gemini 2.5 Pro的准确率仅为65.1%，而许多开源音视频模型的表现甚至接近随机猜测（约25%）。消融研究证实了原始音频信号比文本转录包含更多信息（如韵律、情感），对提升理解至关重要。该基准旨在推动更全面的多模态理解研究，为构建能够整合上下文信息的模型提供平台。主要局限性在于其采用的多选题格式限制了对模型生成能力的评估。

---

