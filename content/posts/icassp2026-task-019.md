---
title: "ICASSP 2026 - 多模态模型 论文列表"
date: 2026-04-29
draft: false
tags: ["多模态模型"]
categories: [icassp-2026]
description: "共 6 篇 ICASSP 2026 多模态模型 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 多模态模型

共 **6** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [RCAL: Reinforced Cross-Modal Alignment for Multimodal Sentim](/audio-paper-digest-blog/posts/2026-04-29-rcal-reinforced-cross-modal-alignment-for) | 8.5分 | 前25% |
| 🥈 | [Mitigating Language Prior-Induced Hallucinations via Bi-Leve](/audio-paper-digest-blog/posts/2026-04-29-mitigating-language-prior-induced-hallucinations) | 7.5分 | 前25% |
| 🥉 | [An End-to-End Multimodal System for Subtitle Recognition and](/audio-paper-digest-blog/posts/2026-04-29-an-end-to-end-multimodal-system-for-subtitle) | 7.0分 | 前50% |
| 4. | [Multimodal Transformer with Multiperspective Training for Pr](/audio-paper-digest-blog/posts/2026-04-29-multimodal-transformer-with-multiperspective) | 7.0分 | 前25% |
| 5. | [Multimodal Fusion-Based IPCLIP Network for Mixed Reality Sur](/audio-paper-digest-blog/posts/2026-04-29-multimodal-fusion-based-ipclip-network-for-mixed) | 6.5分 | 前50% |
| 6. | [Selective Hub Fusion with Modality-Heterogeneous Experts for](/audio-paper-digest-blog/posts/2026-04-29-selective-hub-fusion-with-modality-heterogeneous) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [RCAL: Reinforced Cross-Modal Alignment for Multimodal Sentiment Analysis with Sparse Visual Frames](/audio-paper-digest-blog/posts/2026-04-29-rcal-reinforced-cross-modal-alignment-for)

🔥 **8.5/10** | 前25% | #多模态模型 | #对比学习 | #稀疏输入 #跨模态

👥 **作者与机构**

- 第一作者：Xinwei Song（Northeastern University, Khoury College of Computer Science, Portland, ME, United States）
- 通讯作者：未说明
- 作者列表：Xinwei Song（Northeastern University），Xinran Tao（Northeastern University），Jiachuan Wu（Northeastern University），Tala Talaei Khoei（Northeastern University）

💡 **毒舌点评**

这篇论文的亮点在于其“问题导向”的设计哲学，精准地击中了多模态情感分析从实验室走向真实部署时的核心痛点——视觉信息的稀疏与不稳定，并为此构建了一个闭环的记忆修复系统。然而，其消融实验虽证明了各模块有效性，但未能更深入地揭示在不同稀疏程度（如少于5帧）下各组件贡献度的变化规律，框架的复杂度提升与性能增益之间的权衡关系值得进一步量化。

📌 **核心摘要**

1.  问题：现有的多模态情感分析方法大多依赖密集、高质量的视频流，但在远程医疗、驾驶员监控、隐私保护等真实场景中，视觉输入往往极度稀疏（仅5-10帧），导致视觉线索不完整且不稳定，破坏了其在多模态融合中的锚点作用。
2.  方法核心：提出RCAL（强化跨模态对齐）框架，以视觉为中心，专门处理极端视觉稀疏下的情感分析。其核心是三个互补组件：(i) 迭代记忆精炼，通过闭环循环从有限帧中逐步重建情感相关线索；(ii) 强化学习门控，自适应地决定何时将对齐后的音频-文本线索注入视觉记忆；(iii) 情感感知对比损失，根据情感相似性结构化视觉嵌入空间。
3.  与已有方法相比新在哪：不同于先前假设密集视觉并进行单次前馈融合的方法（如ALMT），RCAL引入了持久的视觉记忆（`hv_hyper`），并设计了“更新-反馈”的迭代精炼循环，主动修复缺失的视觉证据。同时，使用离散的强化学习门控（而非软门控）来做出更尖锐的“开/关”决策，以更好地过滤噪声跨模态线索。
4.  主要实验结果：RCAL在MOSI、MOSEI和CH-SIMS三个基准数据集上取得了SOTA性能。关键结果如下表所示（指标：MAE↓， Corr↑， Acc-7/5↑）。即使只使用5帧输入，RCAL也超过了使用全帧的多数基线模型；使用全帧输入时性能进一步提升。
| 数据集 | 模型 | MAE | Corr | Acc |
| :--- | :--- | :--- | :--- | :--- |
| MOSI | RCAL (5帧/全帧) | 0.665/0.641 | 0.819/0.848 | 48.03/52.14 |
| | 次优基线 (KuDA) | 0.705 | 0.795 | 47.08 |
| MOSEI | RCAL (5帧/全帧) | 0.527/0.503 | 0.753/0.787 | 54.19/55.26 |
| | 次优基线 (KuDA) | 0.529 | 0.776 | 52.89 |
| CH-SIMS | RCAL (5帧/全帧) | 0.407/0.395 | 0.604/0.612 | 45.08/47.92 |
| | 次优基线 (KuDA) | 0.408 | 0.613 | 43.54 |
消融实验表明，记忆精炼模块是性能最关键的贡献者。
5.  实际意义：为带宽受限、隐私敏感或实时性要求高的实际情感计算应用（如远程诊疗、司机状态监控）提供了一个高效、鲁棒的实用解决方案，推理延迟低于5毫秒。
6.  主要局限性：(1) 框架引入了多个组件和迭代循环，其计算开销和训练复杂度相对于简单融合模型有所增加；(2) 论文主要关注固定稀疏度（如5帧）的性能，对动态变化或极端稀疏（如1-2帧）情况下的自适应能力探讨有限；(3) 视觉记忆的迭代精炼本质上是序列化操作，可能影响并行化效率。

---

### 🥈 [Mitigating Language Prior-Induced Hallucinations via Bi-Level Contrastive Decoding](/audio-paper-digest-blog/posts/2026-04-29-mitigating-language-prior-induced-hallucinations)

✅ **7.5/10** | 前25% | #多模态模型 | #对比学习 | #音频问答 #模型评估

👥 **作者与机构**

- 第一作者：Tianze Xia†， Hongcheng Liu† （上海交通大学）
- 通讯作者：Yu Wang* （上海交通大学）
- 作者列表：Tianze Xia†（上海交通大学）， Hongcheng Liu†（上海交通大学）， Lina Yang（上海交通大学）， Yu Wang*（上海交通大学）

💡 **毒舌点评**

这篇论文的亮点在于清晰地识别出语言先验在“输入层”和“层间”的两个不同作用机制，并设计了一个优雅、即插即用的统一解码公式来同时抑制它们，在多个视觉和音频基准上取得了稳健提升。短板在于其核心论证“动态层选择”策略的理论基础和普适性略显薄弱（为何选择最大差异度层作为先验代表？），且缺少对失败案例的深入分析，使得方法更像一个“work well”的工程方案而非深刻揭示机制。

📌 **核心摘要**

1. 要解决什么问题：多模态大语言模型（MLLM）在生成时严重依赖语言先验（文本提示和模型内部的统计规律），导致输出与视觉/音频证据不符的幻觉现象。
2. 方法核心是什么：提出双层对比解码（BCD），一种无需训练的即插即用解码策略。它在每个解码步骤同时进行两项修正：a) 输入层修正：对比完整多模态输入和纯文本输入的输出分布，以强化多模态证据的引导；b) 层间修正：对比模型最终层输出和通过动态策略选择的中间层输出，以抑制信息在层间传播中累积的语言先验。
3. 与已有方法相比新在哪里：现有对比解码方法（如VCD， SID）通常只关注单一来源的先验（如图像扰动或内部状态），而BCD首次将输入层和层间这两个关键阶段的先验抑制统一到一个框架内，并通过动态层选择策略自适应地定位内部先验的最强表征层。
4. 主要实验结果如何：BCD在多个主流模型（LLaVA-1.5， Qwen2.5-VL， Qwen2-Audio， MU-LLaMA）和基准上均提升了性能。具体地，在POPE（视觉幻觉）基准上，LLaVA-1.5模型的平均准确率从83.01%提升至87.32%；在MMAR（音频理解）基准上，Qwen2-Audio模型的平均准确率从30.00%提升至36.90%。消融实验证实了两个修正组件的互补性。

| 模型 | 基准 | 设置 | 基线 Greedy (Acc./F1) | BCD (Acc./F1) |
| :--- | :--- | :--- | :--- | :--- |
| LLaVA-1.5 | POPE | Rand. | 87.17 / 85.64 | 90.57 / 90.33 |
| LLaVA-1.5 | POPE | Pop. | 82.76 / 83.36 | 87.83 / 87.87 |
| LLaVA-1.5 | POPE | Adv. | 79.11 / 80.92 | 83.57 / 84.28 |
| Qwen2.5-VL | POPE | Adv. | 84.20 / 81.63 | 86.27 / 84.67 |

5. 实际意义是什么：提供了一种实用、有效、无需额外训练的解码改进方案，可直接应用于现有MLLM，增强其输出的可靠性和可信度，对部署在医疗、安防等关键领域的多模态AI系统具有重要价值。
6. 主要局限性是什么：a) 方法引入了额外的推理计算开销（需要运行前向传播以获取L_text和L_inter）；b) 动态层选择策略的有效性可能依赖于模型结构，其普适性有待更多验证；c) 超参数α和β需要针对不同任务/模态进行调整，缺乏自动化的选择机制。

---

### 🥉 [An End-to-End Multimodal System for Subtitle Recognition and Chinese-Japanese Translation in Short Dramas](/audio-paper-digest-blog/posts/2026-04-29-an-end-to-end-multimodal-system-for-subtitle)

✅ **7.0/10** | 前50% | #多模态模型 | #端到端 | #语音识别 #机器翻译

👥 **作者与机构**

- 第一作者：Jing An (北京第二外国语学院人工智能与语言科学学院)
- 通讯作者：Yanbing Bai (中国人民大学统计学院应用统计研究中心)
- 作者列表：Jing An (北京第二外国语学院人工智能与语言科学学院)、Haofei Chang (中国人民大学信息学院)、Rui-Yang Ju (京都大学信息学研究生院)、Jinhua Su (中国人民大学统计学院应用统计中心 & Simashuhui Ltd.)、Yanbing Bai (中国人民大学统计学院应用统计研究中心)、Xin Qu (北京第二外国语学院人工智能与语言科学学院)

💡 **毒舌点评**

亮点：系统设计思路清晰务实，将OCR和ASR两条路径的结果通过简单有效的融合策略进行互补，直接解决了短剧字幕识别中“文字准”与“时间准”难以兼得的痛点。  
短板：论文最大的弱点在于“端到端”的宣称与实验的割裂——虽然架构图展示了从视频到日语字幕的流水线，但实验部分的“识别”和“翻译”模块是分开评估的，缺乏对整个系统在端到端指标上的验证；同时，构建的翻译数据集规模极小（仅79集短剧），其泛化能力存疑。

📌 **核心摘要**

本文针对中国短剧出海所面临的字幕识别与中日翻译难题，提出了一个端到端的多模态系统。问题核心在于短剧字幕具有口语化、无标点、片段化、上下文缺失等特殊性，且识别过程需同时应对复杂画面和背景噪音。方法核心是采用双通道并行识别：视觉通道使用Qwen2-VL进行OCR提取帧内文字，音频通道使用Whisper进行ASR转写，并设计了一种基于时间对齐和文本相似度的融合策略来选择最优结果。随后，通过LoRA微调Qwen2.5模型，在自建的短剧数据集上进行中日翻译。与已有方法相比，该系统的新颖之处在于其多模态融合策略能有效结合OCR的高精度专有名词识别与ASR的流畅性和精准时间戳，同时采用了将整集字幕作为整体输入LLM进行翻译的策略，以保留上下文。主要实验结果显示，融合策略在字幕识别任务上（表1）优于单独的Qwen2-VL和Whisper（CER从0.2984/0.2491降至0.1598）；微调后的翻译模型（表2）在chrF++和COMET指标上也优于零样本Qwen2.5基线。该工作的实际意义在于为短剧这一新兴内容的本地化提供了一套可落地的技术方案。其主要局限性在于翻译数据集规模较小，且系统各模块（识别、融合、翻译）是独立评估，未对完整端到端流程进行一体化性能测试与优化。

表1：字幕识别性能比较
| 模型 | CER↓ | Accuracy↑ | BLEU↑ | chrF++↑ |
| :--- | :---: | :---: | :---: | :---: |
| Qwen2-VL [10] | 0.2984 | 0.9216 | 72.3279 | 70.4881 |
| Whisper [11] | 0.2491 | 0.7819 | 81.2538 | 57.5461 |
| Ours | 0.1598 | 0.9174 | 85.5974 | 77.963 |

表2：字幕翻译性能比较（五折交叉验证）
| 模型 | BLEU↑ | chrF++↑ | COMET↑ |
| :--- | :---: | :---: | :---: |
| Qwen2.5 [13] | 9.7665 | 27.8855 | 0.6160 |
| Ours\* | 9.8440 | 29.9883 | 0.6437 |

![图2：每集字幕片段数量分布](pdf-image-page4-idx1)
图2描述了自建数据集中，各集短剧包含的字幕片段（subtitle segments）数量的分布情况。图中显示，大多数集的字幕片段数量在40到60之间，但有部分集（如第35、62集）包含的字幕片段数量显著偏多（超过80），表明不同剧集间的字幕密度存在差异。

---

### 4. [Multimodal Transformer with Multiperspective Training for Predicting Self-Expression Skills from Video Interview](/audio-paper-digest-blog/posts/2026-04-29-multimodal-transformer-with-multiperspective)

✅ **7.0/10** | 前25% | #多模态模型 | #多模态模型 | #多模态学习 #数据集

👥 **作者与机构**

- 第一作者：Ryo Masumura（NTT, Inc., Japan）
- 通讯作者：未说明
- 作者列表：Ryo Masumura（NTT, Inc., Japan）、Shota Orihashi（NTT, Inc., Japan）、Mana Ihori（NTT, Inc., Japan）、Tomohiro Tanaka（NTT, Inc., Japan）、Naoki Makishima（NTT, Inc., Japan）、Suzuka Yamada（NTT, Inc., Japan）、Taiga Yamane（NTT, Inc., Japan）、Naotaka Kawata（NTT, Inc., Japan）、Satoshi Suzuki（NTT, Inc., Japan）

💡 **毒舌点评**

亮点：论文开创性地定义了“自我表达技能”的多视角自动评估任务，并巧妙设计了多视角训练策略，让模型既能进行多模态融合判断，也能对单一维度进行评估，实验显示其性能可比肩人类评估员。  
短板：所用数据集和模型均未开源，对于一个标注成本高昂的新任务而言，这无疑大大限制了后续研究的跟进和验证，使得其“有效模型”的结论暂时只能停留在论文层面。

📌 **核心摘要**

1. 问题：如何自动、客观地评估个人在视频面试中展现出的“自我表达技能”（即有效传达思想情感的能力），这是一个有重要应用价值但未被深入研究的任务。
2. 方法核心：提出一个基于多模态Transformer的模型，它整合了语音内容、语音风格、手势和面部表情四个视角的编码器。关键创新是多视角训练，即在训练时，模型不仅学习从所有模态联合预测四个视角的分数，还学习仅从对应模态的编码器预测单个视角的分数。
3. 创新性：(1) 首次定义并标注了自我表达技能的多视角预测任务；(2) 提出多视角训练策略，能更好地学习每个模态特有的判别性特征；(3) 构建了一个包含新标注的大规模视频面试数据集。
4. 主要实验结果：在新标注的数据集上，所提方法（全模态+多视角训练）取得了最佳性能，四个视角的皮尔逊相关系数分别达到0.480、0.710、0.679、0.750，准确率均超过90%。关键消融实验表明，多模态输入优于单模态，多视角训练策略（`Lmulti + Lsingle`）在所有设置下都稳定提升性能。最终模型性能与人类评估员的结果相当。
5. 实际意义：可为自动化招聘筛选、求职者面试练习工具、甚至心理咨询中的自我接纳评估提供技术支持。
6. 主要局限性：模型性能依赖于特定的日语面试视频数据集，其跨语言、跨文化泛化能力未验证；提出的多模态Transformer架构本身创新性一般；未提供开源资源。

---

### 5. [Multimodal Fusion-Based IPCLIP Network for Mixed Reality Surgical Assistance](/audio-paper-digest-blog/posts/2026-04-29-multimodal-fusion-based-ipclip-network-for-mixed)

✅ **6.5/10** | 前50% | #多模态模型 | #数据增强 | #跨模态 #工业应用

👥 **作者与机构**

- 第一作者：Jiahui Sun（济南大学信息科学与工程学院）
- 通讯作者：Tao Xu*（济南大学信息科学与工程学院）
- 作者列表：Jiahui Sun（济南大学信息科学与工程学院）、Tao Xu*（济南大学信息科学与工程学院）、Xiaohui Yang（济南大学信息科学与工程学院）、Tongzhen Si（济南大学信息科学与工程学院）、Xiaoli Liu（济南大学信息科学与工程学院）

#

💡 **毒舌点评**

论文在工程集成上做得扎实，成功将一个多模态识别模型与机器人控制、MR显示结合成一个可演示的手术辅助系统，这种端到端的应用思维值得肯定。但所谓的“改进CLIP网络”更像是搭建积木，核心的融合模块与视觉Token裁剪方案缺乏理论深度和新颖性，且关键代码、模型、数据集均未开源，让其创新性打了折扣，也给复现研究设置了高墙。

#

📌 **核心摘要**

1.  问题：在混合现实（MR）手术辅助中，需要准确理解医生的多模态指令（如语音、手势），但现有方法在特征融合效率、推理速度和对罕见场景的适应性上存在挑战。
2.  方法核心：提出IPCLIP框架，基于CLIP模型，集成了一个结合CNN与Transformer的多模态自适应融合模块（MFF）；采用视觉Token裁剪策略进行模型轻量化；并利用DeepSeek生成领域知识库来增强数据，提升少样本场景下的推理能力。
3.  创新之处：将针对视觉Token的轻量化策略引入多模态融合模块以加速推理；提出利用大语言模型（DeepSeek）生成并扩展领域特定知识库来增强模型鲁棒性和泛化能力。
4.  主要实验结果：在自建的ARHands数据集上，完整模型（CLIP-1）取得91.46% 的准确率。加入视觉Token裁剪后（Lightweight 5），准确率进一步提升至92.22%，同时FLOPs和推理时间降低。在严重图像与文本双重退化下，模型仍能保持83.54% 的准确率，显示了良好的鲁棒性。
5.  实际意义：该框架已成功部署到基于Kinova机械臂和HoloLens2的MR手术辅助原型系统中，实现了语音/手势指令控制机械臂抓取和传递手术器械，验证了其在复杂临床环境中的应用潜力。
6.  主要局限性：创新性有限，多为已有技术的组合优化；实验仅在自建的、规模相对有限的数据集上进行；未公开代码、模型和数据集，可复现性差；论文部分章节（如第3节公式）表述略显简略。

---

### 6. [Selective Hub Fusion with Modality-Heterogeneous Experts for Multimodal Emotion Recognition](/audio-paper-digest-blog/posts/2026-04-29-selective-hub-fusion-with-modality-heterogeneous)

✅ **6.5/10** | 前25% | #多模态模型 | #混合专家 | #跨模态 #情感识别

👥 **作者与机构**

- 第一作者：Huan Zhao（湖南大学计算机科学与电子工程学院）
- 通讯作者：Kehan Wang（湖南大学计算机科学与电子工程学院，邮箱：wangkh@hnu.edu.cn）
- 作者列表：Huan Zhao（湖南大学计算机科学与电子工程学院），Ling Xiong（湖南大学计算机科学与电子工程学院），Kehan Wang（湖南大学计算机科学与电子工程学院）

💡 **毒舌点评**

这篇论文的“选择性Hub融合”机制确实巧妙地解决了直接跨模态注意力带来的计算冗余和噪声放大问题，像一个精准的路由器；但其“模态异质专家”的设计相对直观，主要差异在于使用1D卷积处理音频、2D卷积处理视觉，对于是否真正深刻捕捉了模态特异性情感模式的论证稍显薄弱，更像是一种工程上的有效组合而非理论洞察。

📌 **核心摘要**

1. 要解决什么问题：现有方法在进行多模态情感识别时，直接融合音频和视觉模态会引入大量冗余和噪声（如环境噪音、背景运动），同时传统方法忽略了不同模态对情感识别的差异性贡献，导致单模态情感特征提取不足。
2. 方法核心是什么：提出SH-MHMoE模型，包含两个核心模块：a) 选择性Hub中介融合（SHMF）：引入少量（L=8）容量受限的Hub token作为中间枢纽，所有跨模态信息交换都必须经过这些Hub，通过路径约束过滤冗余信息。b) 多模态异构混合专家（MHMoE）：为文本、音频、视觉分别设计结构不同的专家网络（MLP、1D卷积、2D卷积），并通过稀疏门控网络激活少量专家，以增强每个模态独特的情感表达能力。
3. 与已有方法相比新在哪里：a) 相比直接跨模态注意力、特征拼接等融合方式，SHMF通过Hub token实现了更高效、低冗余的信息交换。b) 相比使用同质专家（如所有模态都用FFN）的MoE方法，MHMoE针对不同模态信号特点设计了异构专家，更符合归纳偏置。
4. 主要实验结果如何：在CMU-MOSI数据集上，SH-MHMoE在ACC-2（88.2%）、F1（88.1%）上超越所有对比方法，MAE（0.691）最低；在CMU-MOSEI数据集上，Corr（0.798）、ACC-2（87.6%）、F1（87.5%）、ACC-7（56.1%）均为最佳，MAE（0.516）次佳。
   关键实验对比表（CMU-MOSI）：
   | 模型 | MAE ↓ | Corr | ACC-2% | F1% |
   |---|---|---|---|---|
   | MMA | 0.693 | 0.803 | 86.4 | 86.4 |
   | Ours | 0.691 | 0.797 | 88.2 | 88.1 |
   关键实验对比表（CMU-MOSEI）：
   | 模型 | MAE ↓ | Corr | ACC-2% | F1% | ACC-7% |
   |---|---|---|---|---|---|
   | AcFormer | 0.531 | 0.786 | 86.5 | 85.8 | 54.7 |
   | Ours | 0.516 | 0.798 | 87.6 | 87.5 | 56.1 |
   消融实验（CMU-MOSEI）：移除SHMF或MHMoE模块都会导致性能明显下降，验证了模块有效性。替换SHMF为其他融合方式或MHMoE为同构专家，性能均不如原设计。
5. 实际意义是什么：为多模态情感识别提供了一个更鲁棒、高效的融合框架，能够抑制噪声并挖掘各模态特有情感信息，对提升人机交互、心理健康分析等应用的性能有直接帮助。
6. 主要局限性是什么：论文未讨论模态缺失情况下的鲁棒性；Hub token的具体选择和更新机制还有优化空间；异构专家的设计更多是基于模态信号特性的直观工程选择，缺乏更深入的理论分析。

---

