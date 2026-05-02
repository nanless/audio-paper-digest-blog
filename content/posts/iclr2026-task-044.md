---
title: "ICLR 2026 - 音频检索 论文列表"
date: 2026-05-03
draft: false
tags: ["音频检索"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 音频检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频检索

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with ](/audio-paper-digest-blog/posts/2026-05-03-omnicvr-a-benchmark-for-omni-composed-video) | 8.5分 | 前25% |
| 🥈 | [SupCLAP: Controlling Optimization Trajectory Drift in Audio-](/audio-paper-digest-blog/posts/2026-05-03-supclap-controlling-optimization-trajectory-drift) | 8.0分 | 前25% |
| 🥉 | [Beyond Instance-Level Alignment: Dual-Level Optimal Transpor](/audio-paper-digest-blog/posts/2026-05-03-beyond-instance-level-alignment-dual-level) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with Vision, Audio, and Text](/audio-paper-digest-blog/posts/2026-05-03-omnicvr-a-benchmark-for-omni-composed-video)

🔥 **8.5/10** | 前25% | #音频检索 | #对比学习 | #基准测试 #多模态模型

👥 **作者与机构**

- 第一作者：Junyang Ji（清华大学，快手科技，南方科技大学）
- 通讯作者：Zhihai He（南方科技大学），Wenming Yang（清华大学）
- 作者列表：Junyang Ji（清华大学，快手科技，南方科技大学），Shengjun Zhang（快手科技），Da Li（快手科技，中国科学院大学），Yuxiao Luo（快手科技，北京大学），Yan Wang（快手科技），Di Xu（快手科技），Biao Yang（快手科技），Wei Yuan（快手科技），Fan Yang（快手科技），Zhihai He（南方科技大学），Wenming Yang（清华大学）

💡 **毒舌点评**

亮点在于首次系统性地将音频模态引入组合视频检索（CVR）基准，填补了重要的评估空白，其大规模、自动化且经过双重验证的构建流程也颇具工程价值；短板是所提出的AudioVLM2Vec模型本质上是现有组件的串联（音频转文本+视觉语言模型），架构创新有限，且评估集规模（5K测试集）对于一个旨在挑战复杂推理的基准来说仍显不足。

🔗 **开源详情**

- 代码：论文承诺开源，但��在文中提供具体代码仓库链接。
- 模型权重：论文承诺开源AudioVLM2Vec模型权重，但未提及具体链接。
- 数据集：论文承诺开源OmniCVR基准数据集，并提供了获取链接：https://huggingface.co/datasets/Jun-Yang/OmniCVR。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录G中提供了用于数据生成和标注的完整提示词（Prompts），这对于复现数据构建过程至关重要。模型训练的具体配置和超参数未详细说明。
- 论文中引用的开源项目：主要依赖以下开源模型/框架：
    *   视觉编码器：CLIP。
    *   音频生成模型：Qwen2-Audio-7B-Instruct (Chu et al., 2024)。
    *   视觉语言模型骨干：Qwen2-VL (Wang et al., 2024)。
    *   数据分割工具：PySceneDetect。
    *   训练框架：Tevatron 2.0 (Ma et al., 2025)。
    *   其他基线模型：CLIP, BLIP, CoVR, ImageBind, OmniEmbed, VLM2Vec。

📌 **核心摘要**

本文旨在解决现有组合视频检索（CVR）基准普遍忽略音频模态，无法评估模型在涉及声音（如对白、音乐、音效）变换的复杂检索场景下能力的问题。为此，论文提出了首个专注于全模态（视觉、音频、文本）组合检索的大规模基准OmniCVR。其核心方法是构建一个可扩展的自动化数据生成管道（包含视频分割、多模态标注、三元组挖掘），并在此基础上提出了一个名为AudioVLM2Vec的模型，该模型通过利用Qwen2-Audio为视频音频轨道生成精细文本描述，并将其注入查询中，从而增强检索模型的音频感知能力。与主要关注视觉修改的现有基准（如WebVid-CoVR, EgoCVR）相比，OmniCVR是首个将音频作为一等模态的基准，且其数据集中“集成”（同时修改视觉和音频）类查询占比超过57%，更能反映真实世界的多模态复杂性。主要实验结果表明，现有的强大基线模型（如VLM2Vec）在音频中心查询上性能严重下降（R@1仅12.4），而AudioVLM2Vec则大幅领先（R@1达77.2），证明了显式建模音频语义的必要性。该基准和模型为推动音视频联合理解与检索研究提供了重要的测试平台。其主要局限在于为注入音频语义而引入的音频转文本步骤显著增加了推理延迟（约为VLM2Vec的2.77倍）。

---

### 🥈 [SupCLAP: Controlling Optimization Trajectory Drift in Audio-Text Contrastive Learning with Support Vector Regularization](/audio-paper-digest-blog/posts/2026-05-03-supclap-controlling-optimization-trajectory-drift)

🔥 **8.0/10** | 前25% | #音频检索 | #对比学习 | #多语言 #零样本

👥 **作者与机构**

- 第一作者：Jiehui Luo（中央音乐学院）
- 通讯作者：Yuguo Yin（北京大学）
- 作者列表：Jiehui Luo（中央音乐学院），Yuguo Yin（北京大学），Yuxin Xie（北京大学），Jinghan Ru（北京大学），Xianwei Zhuang（北京大学），Minghua He（北京大学），Aofan Liu（北京大学），Zihan Xiong（电子科技大学），Dongchao Yang（香港中文大学）

💡 **毒舌点评**

亮点：论文对对比学习中“推力垂直分量”这一抽象概念的“力分解”分析非常直观且富有启发性，并据此设计的SVR模块逻辑自洽，实验增益稳定。短板：引入“支持向量”和“语义半径”等概念稍显包装化，DynamicSVR的设计引入了额外的预测网络和约束项，其工程复杂度和实际收益相比更简单的StaticSVR是否完全值得，论文中的消融研究对此阐述得不够深入。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用了公开的AudioCaps和Clotho数据集。多语言数据集是通过翻译生成的，但论文未提及是否公开翻译后的文本或提供获取方式。
- Demo：未提及。
- 复现材料：提供了详细的训练设置、超参数配置（表14包含训练时间和显存开销）和部分消融实验结果。附录中有更多分析。
- 论文中引用的开源项目：引用了CED-Base音频编码器、SONAR-TE文本编码器、ML-CLAP、ATRI等模型或框架。
- 总体：论文中未提及明确的开源计划（如代码仓库、模型发布）。

📌 **核心摘要**

这篇论文针对音频-文本对比学习中因负样本推力垂直分量失控导致的“优化轨迹漂移”和训练不稳定问题进行研究。其核心方法是提出SupCLAP框架，通过引入支持向量正则化（SVR） 项来主动控制这一垂直分量。与已有方法（如InfoNCE， SigLIP）仅隐式处理负样本不同，SVR显式构建了指向正样本方向的文本“支持向量”，通过调整其与原始文本向量的距离（由“语义半径”R控制）来重塑梯度空间，选择性抑制垂直漂移同时保留负样本的有用信息。论文探索了R的两种无监督建模策略：StaticSVR（全局可学习标量）和DynamicSVR（基于批次相似度的自适应预测器）。在AudioCaps、Clotho等数据集上的实验表明，该方法在单语/多语检索和零样本分类任务上显著优于InfoNCE和SigLIP基线。例如，在AudioCaps数据集上，bi-DynamicSVR使InfoNCE的文本到音频检索R@1从41.87%提升至44.16%，音频到文本R@1从56.72%提升至59.66%（图1证实了SVR能有效缓解轨迹漂移）。其实际意义在于为提升对比学习稳定性和性能提供了新的理论视角和高效工具，且额外计算开销可忽略。主要局限在于方法引入了新的超参数（如SVR权重α）和可学习模块（如半径预测器），增加了调参和训练的复杂性。

---

### 🥉 [Beyond Instance-Level Alignment: Dual-Level Optimal Transport for Audio-Text Retrieval](/audio-paper-digest-blog/posts/2026-05-03-beyond-instance-level-alignment-dual-level)

✅ **7.0/10** | 前25% | #音频检索 | #对比学习 | #跨模态 #数据增强

👥 **作者与机构**

- 第一作者：Wenqi Guo（上海交通大学）
- 通讯作者：Shikui Tu（上海交通大学），Lei Xu（上海交通大学；广东人工智能与数字经济实验室（深圳））
- 作者列表：Wenqi Guo（上海交通大学）、Shikui Tu（上海交通大学）、Lei Xu（上海交通大学；广东人工智能与数字经济实验室（深圳））

💡 **毒舌点评**

论文敏锐地指出了现有实例级跨模态对齐方法在“小批次+噪声通道”下的理论软肋，并用最优传输理论从特征维度给出了优雅的正则化方案，理论和实验的闭环做得不错。然而，方法引入的额外计算复杂度（需在每个批次计算特征间的UWD）是其工程化落地时必须面对的挑战，且其优越性高度依赖于可靠性统计量的有效计算与稳定更新，这在更复杂、更长的序列建模中可能成为新的瓶颈。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用的是公开数据集AudioCaps, Clotho, ESC-50。
- Demo：未提及。
- 复现材料：论文声称提供了补充材料（算法伪代码、RAM实现细节、理论证明、硬件和超参数设置），这些在PDF附录中有详细说明，是复现的重要依据。
- 论文中引用的开源项目：引用了多个基线工作（如Luong et al., 2024; Chen et al., 2023），但这些是作为比较对象，而非直接依赖的开源工具/模型。
- 总体开源情况：论文中未提及开源计划。

📌 **核心摘要**

1. 要解决什么问题：现有的跨模态检索（如音频-文本）方法主要基于实例级对齐（如对比学习），在小批量训练和数据稀缺/噪声条件下，由于假设所有特征维度同等重要且忽略维度间噪声，导致学习信号不稳定且有偏。
2. 方法核心是什么：提出DART（双层对齐鲁棒传输）框架，将实例级的逆最优传输（IOT）目标与一个特征级的非平衡Wasserstein距离（UWD）正则项相结合。同时，设计了可靠性感知边缘（RAM），基于方差、峰度和跨模态相关性统计，自适应地为每个特征通道赋权，引导传输计划偏向稳定、语义相关的通道。
3. 与已有方法相比新在哪里：首次从特征分布对齐的角度为跨模态检索引入正则化，突破了传统方法仅从实例对齐的局限。理论上，推导并对比了实例级与特征级目标的集中界，证明后者受传输计划Frobenius范数控制，对噪声和离群点更鲁棒。实践上，RAM提供了轻量级的通道可靠性先验，无需额外复杂网络。
4. 主要实验结果如何：在AudioCaps、Clotho和ESC-50三个音频相关基准上达到SOTA。例如，在AudioCaps上（ResNet38+BERT），相比最强基线Luong et al. (2024)，文本到音频R@1提升1.1%（40.20 vs 39.10），音频到文本R@1提升4.5%（55.27 vs 49.94）。在噪声标签（20%/40%）和小批量（batch size=32）设置下，DART展现出显著的鲁棒性优势。零样本声音事件检测（ESC-50）R@1达到80.75%，优于所有对比方法。

### 主要实验结果表格（音频文本检索）

表1：主要基准性能对比（部分关键数据）

| 方法 | 编码器 | 数据集 | T→A R@1 | A→T R@1 |
| :--- | :--- | :--- | :--- | :--- |
| Luong et al. (2024) | ResNet38 + BERT | AudioCaps | 39.10 | 49.94 |
| DART w/ RAM | ResNet38 + BERT | AudioCaps | 41.67 | 55.27 |
| Wang et al. (2023) | CNN + BPE | AudioCaps | 33.72 | 39.14 |
| DART w/ RAM | CNN + BPE | AudioCaps | 33.42 | 43.30 |
| Chen et al. (2023) | Beats + BERT | AudioCaps | 54.2 | 66.9 |
| DART w/ RAM | Beats + BERT | AudioCaps | 56.9 | 72.1 |

表2：噪声标签与半监督设置下的性能（AudioCaps, batch size=32）

| 条件 | 方法 | T→A R@1 | A→T R@1 |
| :--- | :--- | :--- | :--- |
| 半监督（20%无标签） | Contrastive loss | 28.58 | 35.63 |
| | Luong et al. (2024) | 32.93 | 39.81 |
| | DART | 34.85 | 45.03 |
| 噪声标签（20%噪声） | Luong et al. (2024) | 31.32 | 38.35 |
| | DART | 32.87 | 43.57 |

5. 实际意义是什么：为构建更鲁棒、更可靠的跨模态检索系统提供了新的训练范式，特别是在数据质量不佳、标注成本高或需要快速迭代的场景中，其优势尤为明显。方法也可推广至其他跨模态匹配任务（如图像-文本检索）。
6. 主要局限性是什么：引入的特征级UWD计算增加了训练时的计算开销（尽管作者声称可控）。可靠性统计量的计算与更新机制需要额外设计，可能对超参数敏感。在通用多模态大规模预训练（如CLIP式训练）中的有效性尚未验证。

---

