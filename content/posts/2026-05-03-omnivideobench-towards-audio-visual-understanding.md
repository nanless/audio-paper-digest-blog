---
title: "OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs"
date: 2026-05-03
draft: false
tags: [基准测试, 多模态模型, 音视频, 音频理解, 模型评估]
categories: [iclr-2026]
description: "基准测试 | 8.0/10"
hiddenInHomeList: true
---

# 📄 OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs

#基准测试 #多模态模型 #音视频 #音频理解 #模型评估

🔥 **8.0/10** | 前25% | #基准测试 | #多模态模型 | #音视频 #音频理解

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Caorui Li (Nanjing University, Southeast University)
- 通讯作者：Jiaheng Liu (Nanjing University)
- 作者列表：Caorui Li (Nanjing University, Southeast University)、Yu Chen (Nanjing University, Southeast University)、Yiyan Ji (Nanjing University, Southeast University)、Jin Xu (Alibaba Group)、Zhenyu Cui (Southeast University)、Shihao Li (Nanjing University, Southeast University)、Yuanxing Zhang (Kuaishou Technology)、Zhenghao Song (M-A-P)、Dingling Zhang (Nanjing University, Southeast University)、Ying He (University of Science and Technology Beijing)、Haoxiang Liu (University of Science and Technology Beijing)、Yuxuan Wang (Alibaba Group)、Qiufeng Wang (Southeast University)、Jiafu Tang (Nanjing University, Southeast University)、Zhenhe Wu (M-A-P)、Jiehui Luo (Central Conservatory of Music)、Zhiyu Pan (Nanjing University, Southeast University)、Weihao Xie (Huazhong University of Science and Technology)、Chenchen Zhang (M-A-P)、Zhaohui Wang (Nanjing University, Southeast University)、Jiayi Tian (Alibaba Group)、Yanghai Wang (Nanjing University, Southeast University)、Zhe Cao (Nanjing University, Southeast University)、Minxin Dai (Nanjing University, Southeast University)、Ke Wang (M-A-P)、Runzhe Wen (Nanjing University, Southeast University)、Yinghao Ma (Queen Mary University of London)、Yaning Pan (Fudan University)、Sungkyun Chang (Queen Mary University of London)、Termeh Taheri (Queen Mary University of London)、Haiwen Xia (Peking University)、Christos Plachouras (Queen Mary University of London)、Emmanouil Benetos (Queen Mary University of London)、Yizhi Li (University of Manchester)、Ge Zhang (M-A-P)、Jian Yang (M-A-P)、Tianhao Peng (M-A-P)、Zili Wang (M-A-P)、Minghao Liu (2077AI)、Junran Peng (University of Science and Technology Beijing)、Zhaoxiang Zhang (Chinese Academy of Sciences)、Jiaheng Liu (Nanjing University)

#

### 💡 毒舌点评

亮点：数据构建流水线堪称严谨典范——从视频筛选、多轮人工标注到基于先进模型的过滤，最终为每个问题都附带了原子化的推理链，这使得评估结果既可靠又能深入诊断模型弱点。短板：作为评测集本身，其设计虽全面，但“创新”主要体现在工程整合与规则设计上，缺乏理论层面的突破；此外，评估完全依赖选择题格式，对模型开放式生成能力的考察略显不足。

#

### 🔗 开源详情

- 代码：论文提供了GitHub仓库链接 `https://github.com/NJU-LINK/OmniVideoBench`，但说明将在未来发布代码和数据。论文中未提及当前是否有可用代码。
- 模型权重：论文评估了多个开源模型（如Qwen3-Omni， Qwen2.5-Omni， Baichuan-Omni等），这些模型的权重由其原始团队发布。本文不提供新的模型权重。
- 数据集：论文的核心贡献是OmniVideoBench数据集，承诺将公开发布。论文中未提供直接的下载链接，但提供了获取方式（通过GitHub仓库）。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了详细的复现声明，涵盖了数据构建、统计、任务定义、提示词和实验稳定性说明。附录中给出了视频分类表（表5）、收集原则（附录B）和完整的提示词模板（附录C）。
- 论文中引用的开源项目/模型：Gemini系列（闭源）、Qwen系列（开源）、Baichuan-Omni（开源）、HumanOmni（开源）、MiniCPM-o（开源）、VideoLLaMA2（开源）、VITA-1.5（开源）、DeepSeek-V3/V3.1（开源）、Voxtral-Mini-3B（用于ASR，开源）。

### 📌 核心摘要

1. 问题：现有的多模态大模型（MLLMs）音视频理解评估基准存在明显缺陷：要么忽视音频，要么模态整合逻辑不一致，无法全面评估模型的协同推理能力。
2. 方法核心：构建了OmniVideoBench，一个大规模、高质量的评测集。它包含628个时长可达30分钟的真实视频，1000个精心设计的多选题，并为每个问题标注了逐步的、分模态的推理链。
3. 创新点：与已有基准相比，新在三点：a) 强调模态互补性与逻辑一致性，强制要求答案依赖音视频协同信息；b) 覆盖长视频和多样化的音频类型（语音、环境音、音乐）；c) 提供显式的推理轨迹，便于分析模型的推理过程。
4. 主要实验结果：当前顶尖模型（如Gemini-2.5-Pro）在本基准上的准确率仅为58.90%，远低于人类水平的82.69%。开源模型（如Qwen2.5-Omni-7B）表现接近随机猜测（约29.3%）。具体而言，模型在音乐理解（最佳准确率38.46%）和背景理解任务上表现尤其糟糕，而在关系推理和摘要任务上较好。下表列出了部分关键结果：

| 模型 | 平均准确率 | 音乐准确率 | 语音准确率 | (0,1]分钟视频准确率 | (10,30]分钟视频准确率 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Gemini-2.5-Pro | 58.90% | 38.46% | 61.66% | 57.83% | 55.94% |
| Gemini-2.0-Flash | 41.50% | 29.67% | 43.21% | 49.40% | 34.87% |
| Qwen3-Omni-30B-A3B | 38.40% | 37.36% | 39.26% | 45.78% | 35.11% |
| Qwen2.5-Omni-7B | 29.30% | 23.07% | 30.70% | 41.57% | 26.72% |
| 人类性能 | 82.69% | 未提供 | 未提供 | 未提供 | 未提供 |

![OmniVideoBench与现有基准的对比](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/ItRYEe8E61-3.png)
图4展示了OmniVideoBench相较于其他基准（如Daily-Omni）对模型更具挑战性，多数模型表现接近随机水平（红线）。

5. 实际意义：为音视频大模型的评估设立了更严格、更贴近真实需求的标准，揭示了当前模型在跨模态融合、长程时序建模及非语音音频理解上的重大不足，为后续研究指明了方向。
6. 主要局限性：评测集本身的规模（1000个QA对）相对有限；评估方式限于选择题，可能无法完全反映模型开放式回答的综合能力；数据集构建依赖了部分先进模型（如Gemini）进行过滤，可能存在一定的偏差。

#

### 🏗️ 模型架构

本文的核心贡献是提出一个评测基准，而非提出一个新的模型架构。因此，论文中未说明具体的模型架构细节。基准的“架构”体现在其数据构建与评估流程上，如图2所示。

![数据收集、标注与精炼的完整流程](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/ItRYEe8E61-1.png)
图2展示了OmniVideoBench的构建流程：(1) 收集与初步标注，生成初始QA对；(2) 过滤，使用VLM和LLM分别剔除仅依赖单模态或文本信息的题目；(3) 精炼，人工复核并添加逐步推理链，最终得到高质量数据集。

#

### 💡 核心创新点

1.  强调模态互补与逻辑一致的基准设计：创新点在于系统性地要求每个问题及其答案必须逻辑上依赖于视觉和音频信息的协同，而非可选项。这解决了现有基准中音频被边缘化或模态整合松散的问题。
2.  长视频与多样化音频覆盖：将评估范围扩展到长达30分钟的视频，并细致分类音频为语音、环境音、音乐三类。这能更好地测试模型对长期依赖的理解和对非语义音频信息的感知能力，超越了以短片为主的现有基准。
3.  原子化推理链标注：为每个QA对提供平均5.68步的推理链，每步明确标注所用模态、证据和推论。这超越了只提供最终答案的评估，使得对模型失败原因的定量分析（如音频理解错误、多模态融合错误）成为可能。

#

### 🔬 细节详述

- 训练数据：基准测试本身即为评测数据。由628个真实世界视频构成，来源于YouTube和Bilibili，视频发布日期在2024年6月之后，以减少与训练集重叠。包含8大类68个子类，平均时长384.24秒，最低分辨率480p。
- 损失函数：未说明，因为本文不涉及模型训练。
- 训练策略：未说明，因为本文不涉及模型训练。
- 关键超参数：未说明，因为本文不涉及模型训练。论文中提到了对输入帧数（32, 64, 128, 256）的消融实验。
- 训练硬件：未说明，因为本文不涉及模型训练。
- 推理细节：评估使用统一的多选题格式。论文附录C提供了具体的评估提示词，要求模型直接输出选项字母，对于能力受限的模型也要求做出选择。
- 数据增强/正则化：未说明，因为本文不涉及模型训练。但数据构建过程本身有严格的过滤和精炼规则以控制质量。

#

### 📊 实验结果

论文对多个开源和闭源MLLM进行了全面评估。以下是部分关键结果表格：

表3：不同模型在OmniVideoBench上的结果（按音频类型和视频时长划分）
| 模型 | 音乐 | 声音 | 语音 | (0,1]分钟 | (1,5]分钟 | (5,10]分钟 | (10,30]分钟 | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gemini-3.0-Pro | 52.81 | 55.17 | 64.13 | 62.42 | 66.18 | 57.02 | 59.76 | 61.80 |
| Gemini-2.5-Pro | 38.46 | 57.72 | 61.66 | 57.83 | 64.43 | 55.02 | 55.94 | 58.90 |
| Gemini-3.0-Flash | 49.45 | 50.34 | 56.69 | 58.43 | 55.10 | 55.90 | 52.29 | 55.10 |
| Qwen3-Omni-30B-A3B | 37.36 | 34.67 | 39.26 | 45.78 | 37.03 | 38.86 | 35.11 | 38.40 |
| Qwen2.5-Omni-7B | 23.07 | 25.33 | 30.70 | 41.57 | 27.41 | 25.33 | 26.72 | 29.30 |
| 人类性能 | 未提供 | 未提供 | 未提供 | 未提供 | 未提供 | 未提供 | 未提供 | 82.69 |

关键发现：
- 音频类型影响显著：所有模型在音乐主导视频上的准确率普遍最低。Gemini-2.5-Pro在音乐、声音、语音上的准确率分别为38.46%， 57.72%， 61.66%。
- 视频时长影响复杂：对于多数开源模型（如Qwen3-Omni），随着视频变长，准确率下降明显。但闭源模型（如Gemini-2.5-Pro）在长视频上仍保持相对稳健。
- 任务难度差异大：图5展示了模型在13个任务上的表现。背景与音乐理解任务最难（Gemini-2.5-Pro准确率<50%），关系推理和摘要任务相对容易（>80%）。

![不同模型在13个任务上的表现对比](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/ItRYEe8E61-4.png)
图5显示，闭源模型在几乎所有任务上都优于开源模型，尤其在关系推理、空间推理等需要复杂推理的任务上优势明显。背景与音乐理解任务是所有模型的短板。

- ASR文本无法替代原始音频：图6的消融实验表明，仅使用ASR文本+视觉的模型（如Qwen2.5-VL-7B）性能优于直接处理音频+视觉的同参数开源模型（如Qwen2.5-Omni-7B）。但对于音乐和环境音任务，ASR无法提供帮助，表明当前模型的音频理解能力薄弱。

![不同输入条件下模型的准确率](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/ItRYEe8E61-5.png)
图6(a)显示，提供ASR文本后，视觉模型的性能显著提升，但端到端的音视频模型（Omni）性能反而可能下降，说明当前模型融合音视频的能力不足。图6(b)显示，对于音乐和环境音，ASR基本无效。

- 更多帧数有益：图7的实验表明，增加输入帧数（从32到256）可以稳定提升模型性能，尤其是在长视频上，这强调了密集时序采样对音视频推理的重要性。

![不同帧数设置下的模型表现](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/ItRYEe8E61-6.png)
图7(a)显示，随着输入帧数增加，两个模型的准确率均稳步提升。图7(b)显示，这种提升在更长的视频上更为明显。

- 错误分析：论文对模型错误进行了深入归因，分为六大类：多模态融合错误、时序推理错误、音频理解错误、视觉理解错误等。图12显示，对于开源模型，这三类错误是主要瓶颈。

![模型错误类型分布](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/ItRYEe8E61-11.jpg)
图12表明，对于开源模型Qwen2.5-Omni和Qwen3-Omni，时序推理、音频理解和多模态融合是主要错误来源。

#

### ⚖️ 评分理由

- 学术质量（6.0/7）：论文在工程实践上表现出色：数据构建流程设计严谨（见图2），多轮过滤和人工验证保证了数据质量；评估框架全面，覆盖多维度；实验分析深入，包含大量对比表格和错误归因分析（如表3，图5，图6，图12）。不足在于，其核心创新是构建一个评测集，而非解决一个学术难题，因此在“原创性”和“技术深度”上相较于提出新模型或新算法的工作稍显平淡。
- 选题价值（1.5/2）：音视频协同理解是通向真正通用人工智能的关键一步，本工作精准地指出了当前评估体系的缺陷，并提供了一个高质量的“标尺”。它对于驱动社区解决模型在真实世界复杂场景下的推理短板具有明确价值。主要限制是其受众相对垂直，主要面向多模态大模型的研究与开发人员。
- 开源与复现加成（0.5/1）：论文在GitHub上提供了仓库链接（`https://github.com/NJU-LINK/OmniVideoBench`），并承诺发布数据集和代码。复现说明详尽，包括数据构建原则（附录B）、评估提示词（附录C）和错误分析方法（附录D）。目前代码和数据尚未发布，因此加成有限。论文中引用的主要开源模型/工具包括：Gemini系列、Qwen系列、DeepSeek-V3、Voxtral-Mini-3B（用于ASR）。

#

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
