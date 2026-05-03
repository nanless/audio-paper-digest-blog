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
| 🥈 | [Compose and Fuse: Revisiting the Foundational Bottlenecks in](/audio-paper-digest-blog/posts/2026-05-04-compose-and-fuse-revisiting-the-foundational) | 8.5分 | 前25% |
| 🥉 | [Measuring Audio's Impact on Correctness: Audio-Contribution-](/audio-paper-digest-blog/posts/2026-05-04-measuring-audios-impact-on-correctness-audio) | 8.0分 | 前25% |
| 4. | [Echo: Towards Advanced Audio Comprehension via Audio-Interle](/audio-paper-digest-blog/posts/2026-05-04-echo-towards-advanced-audio-comprehension-via) | 8.0分 | 前25% |
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

### 🥈 [Compose and Fuse: Revisiting the Foundational Bottlenecks in Multimodal Reasoning](/audio-paper-digest-blog/posts/2026-05-04-compose-and-fuse-revisiting-the-foundational)

🔥 **8.5/10** | 前25% | #音频问答 | #多模态模型 | #基准测试 #大语言模型

👥 **作者与机构**

- 第一作者：Yucheng Wang（ETH Zurich, D-INFK）
- 通讯作者：Mrinmaya Sachan（ETH Zurich, D-INFK）
- 作者列表：Yucheng Wang（ETH Zurich, D-INFK）、Yifan Hou（ETH Zurich, D-INFK）、Aydin Javadov（ETH Zurich, MTEC）、Mubashara Akhtar（ETH Zurich, D-INFK）、Mrinmaya Sachan（ETH Zurich, D-INFK）

💡 **毒舌点评**

本文的亮点在于它通过一个精心设计的、基于逻辑的合成评估框架，系统性地解剖了多模态大语言模型（MLLM）在推理任务上“多模态反而可能有害”的深层原因，并指出了两个关键瓶颈：任务组合瓶颈和融合瓶颈，为未来模型改进指明了清晰方向。然而，其短板在于评估任务相对简单（单步逻辑推理），且合成数据可能与真实世界的复杂、多义、非结构化多模态场景存在差距，结论的普适性有待进一步验证。

🔗 **开源详情**

*   代码：论文中明确提供了代码仓库链接：`https://github.com/eth-sri/compose-and-fuse`。
*   模型权重：论文未提及公开其分析的或训练的模型权重，仅使用现有开源模型。
*   数据集：评估所用的合成数据集将随代码开源。
*   Demo：未提及。
*   复现材料：论文提供了极其详尽的补充材料，包括数据生成细节（附录A.1）、完整的实验设置（附录A.2）、所有六种交互模式及两步推理的完整提示模板（附录A.3），以及所有实验的完整结果表（附录B）。
*   论文中引用的开源项目：使用了CosyVoice 2进行TTS，Graphviz生成图像，以及引用了Clark et al. (2020)和Liang et al. (2023)的数据生成代码。评估的模型包括Baichuan-Omni、Qwen2.5-Omni、MiniCPM-o和Phi-4 Multimodal。

📌 **核心摘要**

1.  解决的问题：当前多模态大语言模型在推理中何时额外模态（如视觉、音频）有益或有害尚不明确，缺乏一个受控的评估框架来隔离和分析模态交互的影响。
2.  方法核心：提出一个基于命题逻辑的系统化评估框架，设计了六种规范化的模态交互模式（等价、替代、蕴含、独立、矛盾、互补），用以控制关键事实信息在不同模态中的分布方式及逻辑结合方式。
3.  与已有方法相比新在哪里：区别于以往黑箱式评估或零散的分析，该框架能精确控制变量，首次系统性地揭示了不同模态信息组合模式对模型推理能力的具体影响，并深入模型内部注意力机制探查了失败根源。
4.  主要实验结果：实验表明，额外模态仅在提供独立、充分的推理路径（替代模式）时略有帮助；冗余信息（等价模式）帮助不大；跨模态的多步推理链（蕴含模式）会显著损害性能。最强基线通常是纯文本。在互补模式下，模型甚至比任何单模态表现都差，揭示了融合偏差。
    | 交互类型 | Baichuan | Qwen | MiniCPM | Phi4 | 平均Delta |
    | :--- | :---: | :---: | :---: | :---: | :---: |
    | 替代 (∨) | 97.6 (+0.3) | 100.0 (+2.6) | 99.1 (+2.9) | 97.9 (+1.0) | +1.7 |
    | 等价 (≡) | 84.8 (-11.1) | 98.9 (-0.9) | 94.8 (-0.2) | 84.1 (-12.5) | -5.7 |
    | 蕴含 (→) T | 80.7 (-13.6) | 83.9 (-12.8) | 88.4 (-6.8) | 79.7 (-18.0) | -12.8 |
    | 互补 (∧) | 30.2 (-57.5) | 49.9 (-48.9) | 48.8 (-43.6) | 79.1 (-20.5) | -42.6 |
    （Delta值相对于相应最强单模态基线）
5.  实际意义：揭示了当前MLLM的核心瓶颈不在感知或单模态推理能力，而在于跨模态的组合与融合能力。为未来模型设计指明了方向：需要进行“组合感知训练”并控制早期融合过程中的偏差。
6.  主要局限性：评估任务局限于简单的单步逻辑推理，与复杂真实世界推理任务存在差距；合成数据可能无法完全捕捉真实模态的丰富性和复杂性。

---

### 🥉 [Measuring Audio's Impact on Correctness: Audio-Contribution-Aware Post-Training of Large Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-measuring-audios-impact-on-correctness-audio)

🔥 **8.0/10** | 前25% | #音频问答 | #强化学习 | #数据集 #监督微调

👥 **作者与机构**

- 第一作者：Haolin He (香港中文大学， 蚂蚁集团)
- 通讯作者：Jian Liu (蚂蚁集团)， Qiuqiang Kong (香港中文大学)
- 作者列表：Haolin He (香港中文大学， 蚂蚁集团)， Xingjian Du (罗切斯特大学)， Renhe Sun (蚂蚁集团)， Zheqi Dai (香港中文大学)， Yujia Xiao (香港中文大学)， Mingru Yang (蚂蚁集团)， Jiayi Zhou (蚂蚁集团)， Xiquan Li (上海交通大学)， Zhengxi Liu (香港中文大学)， Zining Liang (香港中文大学)， Chunyat Wu (香港中文大学)， Qianhua He (华南理工大学)， Tan Lee (香港中文大学)， Xie Chen (上海交通大学)， Wei-Long Zheng (上海交通大学)， Weiqiang Wang (蚂蚁集团)， Mark D Plumbley (伦敦国王学院)， Jian Liu (蚂蚁集团)， Qiuqiang Kong (香港中文大学)

#

💡 **毒舌点评**

亮点：论文没有停留在“刷点”上，而是敏锐地抓住了当前音频大模型“偷懒”（忽略音频）这一普遍且尴尬的问题，并系统性地提出了一套从数据划分到训练范式的解决方案，问题导向明确且实用价值高。  
短板：核心方法（基于多个模型投票的音频贡献过滤）本质上是一种启发式的启发式数据清洗策略，理论创新和解释性略显薄弱；此外，庞大的数据集构建严重依赖于强大的大语言模型（Qwen3-235B），其自身的偏见和能力会直接影响AudioMCQ的数据质量边界。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文中未提及公开本次实验所训练模型的权重。
- 数据集：AudioMCQ数据集已提供，论文中说明了其来源、规模和构建方法。具体获取方式（如申请链接）未在正文中明确说明，可能需联系作者或通过后续官方渠道。
- Demo：未提及。
- 复现材料：提供了非常详细的训练超参数（SFT和GRPO，见附录E.1）、实验控制说明（E.2）和评估协议（附录B.6, B.7）。这些信息足以复现实验。
- 引用的开源项目：依赖的开源模型/工具包括：Qwen3-235B（用于数据生成和评估）、Qwen2.5-Omni（作为训练骨干）、Audio-Flamingo2, R1-AQA, Kimi-Audio（用于ACF评估）。

📌 **核心摘要**

1.  问题：当前的大型音频语言模型（LALMs）在后训练阶段存在一个普遍问题——“零音频贡献”现象，即模型能够仅凭文本信息就回答正确，而不真正处理音频内容。这限制了多阶段训练的效果，且缺乏针对性的高质量数据。
2.  方法核心：提出了一种名为音频贡献过滤（Audio-Contribution Filtering, ACF） 的方法。通过使用静音音频替换原音频，评估多个现有LALMs的答题正确率，从而将数据划分为“弱音频贡献”子集（模型无需音频即可答对）和“强音频贡献”子集（模型必须依赖音频）。
3.  新意：1）首次系统性地量化了LALMs中的“零音频贡献”现象；2）构建了首个专为LALM后训练设计的大规模多选题数据集AudioMCQ（571k样本），包含结构化和非结构化的思维链标注；3）基于ACF，提出了两种新颖的后训练范式：Weak-to-Strong（在弱贡献数据上SFT，然后在强贡献数据上RL）和Mixed-to-Strong（在混合数据上SFT，然后在强贡献数据上RL）。
4.  实验结果：以Qwen2.5-Omni为基础模型进行实验。Weak-to-Strong策略在MMAU-test-mini上达到78.2%，在MMAU上达到75.6%；Mixed-to-Strong策略在MMAR上达到67.0%，在MMSU上达到71.7%。所有结果均为当时开源模型的新SOTA，并赢得了DCASE 2025音频问答竞赛第一名。具体关键结果见下表。

| 方法 | MMAU-test-mini | MMAU | MMAR | MMSU |
| :--- | :--- | :--- | :--- | :--- |
| All Data SFT (基线) | 75.2 | 75.0 | 64.6 | 64.0 |
| All Data GRPO | 78.1 | 75.4 | 63.0 | 70.2 |
| Weak-to-Strong | 78.2 | 75.6 | 65.3 | 69.3 |
| Mixed-to-Strong | 76.4 | 75.1 | 67.0 | 71.7 |

5.  实际意义：为如何高效利用数据进行多模态大模型后训练提供了新思路。证明了在RL阶段使用“强音频贡献”数据对提升模型的真实音频感知能力至关重要，而SFT阶段的数据选择应匹配下游任务的特性。
6.  主要局限性：1）音频贡献过滤方法依赖于一组预设的评估模型，其结论可能受这些模型偏见的影响；2）AudioMCQ数据集的构建过程复杂且依赖大模型，可能存在噪声或分布偏差；3）论文承认未来需要为AudioMCQ建立更鲁棒的划分标准。

#

---

### 4. [Echo: Towards Advanced Audio Comprehension via Audio-Interleaved Reasoning](/audio-paper-digest-blog/posts/2026-05-04-echo-towards-advanced-audio-comprehension-via)

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

