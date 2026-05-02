---
title: "ICLR 2026 - 音频问答 论文列表"
date: 2026-05-03
draft: false
tags: ["音频问答"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 音频问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频问答

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Echo: Towards Advanced Audio Comprehension via Audio-Interle](/audio-paper-digest-blog/posts/2026-05-03-echo-towards-advanced-audio-comprehension-via) | 8.5分 | 前25% |
| 🥈 | [Incentivizing Consistent, Effective and Scalable Reasoning C](/audio-paper-digest-blog/posts/2026-05-03-incentivizing-consistent-effective-and-scalable) | 8.0分 | 前25% |
| 🥉 | [Measuring Audio's Impact on Correctness: Audio-Contribution-](/audio-paper-digest-blog/posts/2026-05-03-measuring-audios-impact-on-correctness-audio) | 8.0分 | 前10% |
| 4. | [Query-Guided Spatial–Temporal–Frequency Interaction for Musi](/audio-paper-digest-blog/posts/2026-05-03-query-guided-spatialtemporalfrequency-interaction) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Echo: Towards Advanced Audio Comprehension via Audio-Interleaved Reasoning](/audio-paper-digest-blog/posts/2026-05-03-echo-towards-advanced-audio-comprehension-via)

🔥 **8.5/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #多模态模型

👥 **作者与机构**

- 第一作者：Daiqing Wu (中国科学院信息工程研究所；中国科学院大学；字节跳动中国)
- 通讯作者：Yangyang Kang (字节跳动中国)、Yu Zhou (南开大学)
- 作者列表：Daiqing Wu (IIE, CAS; UCAS; ByteDance)， Xuan Zhang (ByteDance)， Dongbao Yang (IIE, CAS)， Jiashu Yao (ByteDance)， Longfei Chen (ShanghaiTech)， Qingsong Liu (ByteDance)， Sicheng Zhao (Tsinghua University)， Can Ma (IIE, CAS)， Yangyang Kang (ByteDance; Zhejiang University)， Yu Zhou (Nankai University)。

💡 **毒舌点评**

亮点：论文成功地将“动态重听”这一人类认知机制形式化并引入大模型推理，其提出的音频交织推理范式和配套的SFT+RL训练框架逻辑自洽且有效，实验全面，在多个基准上刷新了开源模型性能，展现了扎实的系统工程能力。
短板：数据生成流水线严重依赖第三方模型（Qwen2.5-Omni进行音频描述，DeepSeek-R1生成QA-CoT），其引入的潜在偏差和错误会在训练中传播，尽管有重评估步骤，但这种“模型蒸馏模型”的方式可能放大偏见，且限制了数据的多样性与上限。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/wdqqdw/Echo
- 模型权重：未明确提及是否公开训练好的Echo模型权重，但提到了基座模型为Qwen2.5-Omni。
- 数据集：论文中提及构造的数据集名为EAQA-SFT和EAQA-RL，但未在文中明确说明是否公开。从项目主页链接推测可能开源���
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常详细的训练框架（Section 3.1）、数据生成管道（Section 3.2）、评估设置（Section 4）以及附录中的伪代码、提示模板、更多实现细节等，复现指导非常充分。
- 论文中引用的开源项目：依赖并基于Qwen2.5-Omni (7B)进行开发；数据生成使用了DeepSeek-R1；训练引擎使用了ms-swift和VERL；推理引擎使用了vLLM。

📌 **核心摘要**

1.  问题：现有大型音频语言模型（LALMs）在处理复杂音频推理任务时，普遍采用“音频条件文本推理”范式，即对音频进行一次性编码后，推理过程完全脱离音频，导致严重的信息瓶颈，无法保持对音频细节的持续关注。
2.  方法核心：提出音频交织推理（Audio-Interleaved Reasoning） 范式，使模型能在推理过程中根据需求动态地定位并重新“聆听”相关的音频片段。为实现此范式，设计了一个两阶段训练框架：第一阶段通过监督微调（SFT）让模型学会生成包含音频片段引用的推理链（`<seg>`标签）；第二阶段通过强化学习（RL）利用可验证奖励，优化模型动态插入和处理音频片段的能力。同时，构建了一个结构化数据生成管道，利用已有带时间戳的音频数据集，合成了高质量的Audio-QA训练数据。
3.  创新点：与传统的“思考音频”不同，该工作实现了“与音频一起思考”。将音频从静态的上下文变为推理中活跃的组成部分，打破了单次编码的信息瓶颈。这是对多模态推理形式的革新，模仿了人类“反复聆听、逐步推理”的认知过程。
4.  主要实验结果：Echo在多个权威音频理解基准测试上取得了优异成绩。在MMAR（专家级推理）上，平均准确率达69.99%，超越了GPT-4o-Audio（64.09%）和Gemini-2.0-Flash（67.90%）。在MMAU-mini上平均准确率80.41%，在MMAU上76.61%，均为开源模型最佳。消融实验证明了该训练框架和数据管道的有效性。
5.  实际意义：为LALMs处理需要精细时序分析、复杂声学事件推理的真实世界任务提供了更强大、更类人的解决方案，推动了音频智能从基础感知向深度理解的迈进。
6.  主要局限性：当前的数据生成流程缺乏人工启发式规则，完全依赖于自动化流程，可能引入偏差。模型对音频的“重听”操作相对简单（仅是片段提取），未探索如慢放、频段分离等更高级的音频处理方式。

---

### 🥈 [Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards](/audio-paper-digest-blog/posts/2026-05-03-incentivizing-consistent-effective-and-scalable)

🔥 **8.0/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #推理

👥 **作者与机构**

- 第一作者：Jiajun Fan（伊利诺伊大学厄巴纳-香槟分校，Siebel School of Computing and Data Science；工作完成于亚马逊实习期间）
- 通讯作者：未说明
- 作者列表：Jiajun Fan（伊利诺伊大学厄巴纳-香分校 / 亚马逊）、Roger Ren（亚马逊）、Jingyuan Li（亚马逊）、Rahul Pandey（亚马逊）、Prashanth Gurunath Shivakumar（亚马逊）、Ivan Bulyko（亚马逊）、Ankur Gandhe（亚马逊）、Ge Liu（伊利诺伊大学厄巴纳-香分校）、Yile Gu（亚马逊）

💡 **毒舌点评**

这篇论文的亮点在于它非常巧妙地将“过程奖励”这个思想从文本推理（如DeepSeek-R1）迁移到了音频LLM，并通过精心设计的多面奖励函数（一致性、模式、领域知识、过度思考惩罚）解决了音频推理特有的“越想越错”问题，实验结果令人信服。然而，其短板在于所有实验都基于同一个基座模型（Qwen2.5-Omni-7B），其结论在其他音频大模型上的普适性有待验证；此外，过程奖励的计算依赖关键词匹配和语义相似度，这种启发式方法在面对更复杂的开放式推理或非英语音频时可能不够稳健。

🔗 **开源详情**

- 代码：论文中提到“All source code and trained models will be made publicly available upon publication”，但未提供具体的代码仓库链接。
- 模型权重：承诺将公开训练好的模型权重。
- 数据集：训练数据为公开的AVQA数据集；评估基准（MMAU, MMSU, MMAU-Pro）均为公开数据集。
- Demo：论文���未提及提供在线演示。
- 复现材料：提供了极其详细的复现信息，包括：1) 基座模型和训练数据集；2) 详细的训练超参数（学习率、batch size、K值、奖励权重）；3) 奖励函数的完整计算公式和关键词列表（附录B.6）；4) 数据增强模板示例；5) 算法伪代码（附录C）；6) 训练硬件配置和耗时。
- 论文中引用的开源项目：基于 Ke-Omni-R (Zhao et al., 2025) 的开源代码库和 Qwen2.5-Omni-7B (Xu et al., 2025) 模型构建。

📌 **核心摘要**

1.  要解决的问题：在音频大模型（Audio LLMs）中引入链式思维推理（CoT）往往会导致性能下降，论文将此现象定义为“测试时逆规模缩放”，即更长的推理链会累积错误，导致结果更差。根本原因在于模型缺乏对推理过程的正确引导，产生了幻觉、不一致和逻辑错误的推理。
2.  方法核心：提出CESAR框架，通过基于组相对策略优化（GRPO）的在线强化学习，将训练范式从仅奖励最终答案（结果验证）转向同时奖励推理过程的质量。核心是一个多面奖励函数，包括：答案正确性、格式合规性、推理与答案/问题的一致性、结构化分析模式、逻辑严谨性、领域知识整合以及防止过度思考的惩罚。
3.  与已有方法相比新在哪里：不同于之前仅使用结果奖励（如Ke-Omni-R）或监督微调（SFT）模仿推理模板的方法，CESAR显式地对推理过程的质量进行奖励和塑造，旨在培养可控制、可扩展的推理能力，而非任其随机涌现。
4.  主要实验结果：CESAR在多个基准上达到SOTA。在MMAU Test-mini上，以77.10%的总准确率大幅超越GPT-4o Audio (62.50%) 和 Gemini 2.5 Pro (71.60%)，并解决了测试时逆规模缩放问题，发现了模型特有的“推理甜点”。在MMSU上，推理能力接近甚至超越人类（如语义推理88.72% vs 人类82.16%），同时感知能力也有提升。消融实验证明各组件（一致性、关键词、过度思考惩罚）均带来可量化的性能增益。
    *   MMAU Test-mini 关键结果：
        | 方法 | 开启推理 | 总准确率 |
        | :--- | :---: | :---: |
        | CESAR (本文) | ✓ | 77.10 |
        | Ke-Omni-R | ✓ | 74.60 |
        | Qwen2.5-Omni-7B (基座) | ✗ | 68.60 |
        | GPT-4o Audio | - | 62.50 |
        | Gemini 2.5 Pro | - | 71.60 |
5.  实际意义：为构建可靠、高效的音频推理AI提供了原则性方法，证明了通过过程奖励可以培养出稳健的推理技能，使推理从“负担”变为“资产”，并能通过测试时缩放（调整推理长度）获得免费性能提升。
6.  主要局限性：1) 训练计算开销大（需要生成多个响应）；2) 所有评估和结论均基于单一基座模型（Qwen2.5-Omni-7B），普适性未知；3) 识别出“感知瓶颈”是未来主要挑战，当前模型感知能力仍远低于人类；4) 过程奖励部分组件（如关键词、概念重叠）的实现方式相对启发式。

---

### 🥉 [Measuring Audio's Impact on Correctness: Audio-Contribution-Aware Post-Training of Large Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-measuring-audios-impact-on-correctness-audio)

🔥 **8.0/10** | 前10% | #音频问答 | #强化学习 | #音频大模型 #数据集

👥 **作者与机构**

- 第一作者：Haolin He (香港中文大学， 蚂蚁集团)
- 通讯作者：Jian Liu (蚂蚁集团)， Qiuqiang Kong (香港中文大学)
- 作者列表：Haolin He (香港中文大学， 蚂蚁集团)， Xingjian Du (罗切斯特大学)， Renhe Sun (蚂蚁集团)， Zheqi Dai (香港中文大学)， Yujia Xiao (香港中文大学)， Mingru Yang (蚂蚁集团)， Jiayi Zhou (蚂蚁集团)， Xiquan Li (上海交通大学)， Zhengxi Liu (香港中文大学)， Zining Liang (香港中文大学)， Chunyat Wu (香港中文大学)， Qianhua He (华南理工大学)， Tan Lee (香港中文大学)， Xie Chen (上海交通大学)， Wei-Long Zheng (上海交通大学)， Weiqiang Wang (蚂蚁集团)， Mark Plumbley (伦敦国王学院)， Jian Liu (蚂蚁集团)， Qiuqiang Kong (香港中文大学)

💡 **毒舌点评**

亮点：敏锐地发现了大型音频语言模型（LALMs）中普遍存在的“零音频贡献”现象（即模型仅凭文本就能答对），并针对性地提出了基于音频贡献度的数据筛选与两阶段训练范式（Weak-to-Strong， Mixed-to-Strong），这种从“问题诊断”到“方案设计”的闭环研究思路非常扎实且富有启发性。短板：作为一项以“数据”为核心驱动力的工作，其自建的AudioMCQ数据集（571k样本）规模相较于当前动辄数百万甚至十亿级的预训练语料仍显有限，且论文中未明确说明该数据集是否开源以及如何获取，这在一定程度上限制了其贡献的完整性和社区的可复现性。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开微调后的模型权重。
- 数据集：构建了新数据集AudioMCQ，但论文中未明确说明其是否公开及获取途径。
- Demo：未提供在线演示。
- 复现材料：提供了详细的训练与评估超参数（表6，表7）、所有实验的提示模板（附录B）、数据集构建的质量控制流程（附录C）和实验控制细节（附录E.2），复现信息较为充分。
- 论文中引用的开源项目：主要依赖或对比了以下开源模型/数据集：Qwen2.5-Omni， Qwen3-235B， Audio-Flamingo2， R1-AQA， Kimi-Audio，以及Clotho, AudioCaps, CompA-R, MusicCaps, LP-MusicCaps, SpeechCraft, TACOS等数据集。

📌 **核心摘要**

1.  解决的问题：现有大型音频语言模型（LALMs）的后训练研究，尤其是SFT（监督微调）与RL（强化学习）两阶段范式的效果并不总是优于单阶段方法，且缺乏专门为后训练设计的大规模高质量数据集。此外，研究中忽视了模型可能不依赖音频信息就能得出正确答案的“零音频贡献”现象。
2.  方法核心：首先构建了大规模音频问答数据集AudioMCQ（571k样本，含结构化与非结构化CoT标注）。其次，系统性地探究了“零音频贡献”现象，并提出了“音频贡献过滤”方法，将数据划分为弱音频贡献子集（Weak）和强音频贡献子集（Strong）。基于此，提出了两种高效后训练范式：1）Weak-to-Strong：在弱贡献数据上SFT，然后在强贡献数据上GRPO（一种RL算法）；2）Mixed-to-Strong：在混合数据上SFT，然后在强贡献数据上GRPO。
3.  与已有方法相比新在哪里：新在：a) 系统性诊断：首次系统量化了现有LALM在主流基准测试上依赖文本作答的“零音频贡献”比例（如MMAU-test-mini上平均达49.8%）。b) 数据驱动视角：提出了基于模型行为（音频贡献度）的数据划分新维度，而非仅依赖任务或来源划分。c) 范式创新：提出的Weak-to-Strong和Mixed-to-Strong训练范式，明确将数据分配策略与音频依赖性挂钩，为多阶段后训练提供了新思路。
4.  主要实验结果：使用AudioMCQ数据集，并在Qwen2.5-Omni骨干模型上验证：
    *   数据集质量验证：全量数据GRPO训练后，在MMAU-test-mini上达到78.1%，MMAU上达到75.4%，MMSU上达到70.2%（首次突破70%），表明数据集质量高。
    *   新训练范式：Weak-to-Strong策略在MMAU-test-mini（78.2%）和MMAU（75.6%）上取得SOTA；Mixed-to-Strong策略在MMAR（67.0%）和MMSU（71.7%）上取得SOTA。关键消融实验表明，RL阶段使用强贡献数据至关重要，且SFT数据的选择应匹配下游任务的音频依赖性特征。
    *   竞赛成绩：使用AudioMCQ获得DCASE 2025音频问答挑战赛第一名。
5.  实际意义：为提升LALMs对音频信息的真正感知与利用能力提供了有效方法，揭示了当前评估基准和模型训练中的一个重要盲点（文本偏见）。提出的训练范式和数据划分思路对多模态大模型的后训练具有通用参考价值。
6.  主要局限性：a) 数据规模与多样性：AudioMCQ数据集虽质量高，但规模（571k）相对有限，且来源以语音描述类为主，可能影响泛化性。b) 评估范围：主要验证集中在问答任务，对于其他音频理解任务（如事件检测、ASR）的普适性有待验证。c) 可复现性：论文未明确AudioMCQ数据集的开源状态和获取方式，也未提供代码。

---

### 4. [Query-Guided Spatial–Temporal–Frequency Interaction for Music Audio–Visual Question Answering](/audio-paper-digest-blog/posts/2026-05-03-query-guided-spatialtemporalfrequency-interaction)

✅ **7.5/10** | 前25% | #音频问答 | #多模态模型 | #时频分析 #音视频

👥 **作者与机构**

- 第一作者：Kun Li（代尔夫特理工大学，联合培养博士生期间在IT大学哥本哈根完成工作）
- 通讯作者：Sami Sebastian Brandt（IT大学哥本哈根）
- 作者列表：Kun Li（代尔夫特理工大学；IT大学哥本哈根）、Michael Ying Yang（巴斯大学）、Sami Sebastian Brandt（IT大学哥本哈根）

💡 **毒舌点评**

亮点：论文巧妙地将“问题引导”设计为贯穿模型始终的“主线任务”，而非后期简单的特征融合，这使得模型从一开始就聚焦于与问题相关的信息。短板：框架整体复杂度不低（融合了CLIP、VGGish、AST等多个预训练模型），对于资源有限的场景可能不太友好，且其优势在相对结构化的音乐数据集上验证，推广到更混乱的真实世界音频事件场景有待考察。

🔗 **开源详情**

- 代码：提供了GitHub代码仓库链接：https://github.com/lik1996/QSTar
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：实验使用公开的MUSIC-AVQA和AVQA数据集，论文中提供了获取方式的引用。
- Demo：论文中未提及在线演示。
- 复现材料：论文在“实现细节”部分提供了训练超参数（优化器、学习率、衰减策略、batch size、epoch数）和硬件信息（NVIDIA H100），并在附录中提供了更多实现细节。
- 引用的开源项目：主要依赖：CLIP（视觉/文本特征提取），VGGish（音频特征提取），AST（音频频谱特征提取），Token Merging（ToMe，用于压缩视觉块特征）。

📌 **核心摘要**

1.  解决的问题：现有音视频问答（AVQA）方法大多以视觉为主，将音频视为辅助，且问题信息仅在最后阶段简单融合，导致多模态融合不充分，尤其在需要精细音频理解的音乐场景中性能受限。
2.  方法核心：提出QSTar（Query-guided Spatial–Temporal–Frequency Interaction）框架。核心是三个模块：a) 查询引导多模态相关模块（QGMC），在早期阶段利用问题词特征去精炼和对齐音频与视觉特征；b) 时空频交互模块（STFI），其中空间-时间交互（STI） 对齐视觉块特征与音频，时间-频率交互（TFI） 引入AST模型提取的音频频域特征，并通过频率注意力突出与问题相关的频带；c) 查询上下文推理模块（QCR），在最后阶段使用基于提示的上下文来引导特征融合和预测。
3.  与已有方法相比新在哪里：a) 将问题引导（Query Guidance）深度融入模型的前、中、后三个阶段，而非仅后期；b) 显式建模音频的频域特征（通过AST和频率注意力），以捕捉乐器独特的频谱“指纹”；c) 提出一个统一的、与问题语义相关的提示词构造方法（类型、时长、位置、顺序、响度），用于最终推理。
4.  主要实验结果：在MUSIC-AVQA基准测试上，QSTar平均准确率达到78.98%，显著超越之前的SOTA方法QA-TIGER（77.62%）和TSPM（76.79%）。具体地，在音频问答（Audio QA）和音视频问答（Audio-Visual QA）类别上分别达到80.63%和75.98%。消融实验证明每个模块（QGMC， STI， TFI， QCR）都对性能有正向贡献，去除任一模块都会导致下降。
    关键对比表（MUSIC-AVQA测试集， 准确率%）：
| 方法 | Audio QA Avg | Visual QA Avg | Audio-Visual QA Avg | 总体平均 |
| :--- | :---: | :---: | :---: | :---: |
| TSPM (Li et al., 2024a) | 76.91 | 83.61 | 73.51 | 76.79 |
| QA-TIGER (Kim et al., 2025) | 78.58 | 85.14 | 73.74 | 77.62 |
| QSTar (ours) | 80.63 | 84.17 | 75.98 | 78.98 |

5.  实际意义：为音乐场景的音视频理解提供了一个更强大的基线模型。其“全流程问题引导”和“多维度交互”的设计理念，对其他需要精细多模态对齐的问答任务有借鉴意义。
6.  主要局限性：a) 模型在视觉定位（Visual QA - Location）类问题上仍略低于SOTA（QA-TIGER），表明其空间感知能力仍有提升空间；b) 框架依赖多个预训练模型（CLIP， VGGish， AST），推理开销和部署复杂性增加；c) 实验主要在音乐场景数据集验证，在更广泛、声音事件更多样的真实世界AVQA数据集（如AVQA）上，提升幅度相对有限（见附录）。

---

