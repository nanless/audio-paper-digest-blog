---
title: "DynaForcing: Overcoming Dynamic Collapse in Self-Forcing Distillation for Streaming Avatar Generation"
date: 2026-08-19
draft: false
tags: [音视频生成, 生成模型, 扩散模型, 强化学习, 实时处理]
categories: [论文速递]
description: "音视频生成 | 8.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.17707"
---

# 📄 DynaForcing: Overcoming Dynamic Collapse in Self-Forcing Distillation for Streaming Avatar Generation

标签：#音视频生成 #生成模型 #扩散模型 #强化学习 #实时处理

**8.0/10** | 创新 1.7/2 | 严谨 1.3/1.5 | 实验 1.3/1.5 | 清晰 0.9/1 | 影响 1.3/1.5 | 开源 0/1.5 | 复现 0.2/0.5 | 工程 1.3/1.5

🔥 **8.0/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #音视频生成 | #扩散模型 | #生成模型 #强化学习 | [arxiv](https://arxiv.org/abs/2608.17707)


### 👥 作者与机构

- 第一作者：Yubo Huang（中国科学技术大学）；通讯作者：Enhong Chen。
- 合作者来自中国科学技术大学、南京大学、合肥工业大学和清华大学。

### 💡 毒舌点评

DynaForcing 把“看起来清晰”与“真的在动”这两个目标拆开，是 talking avatar 领域很实用的诊断。它的三件套并不神秘：给 rollout 一个真实动态锚点、给损失补 motion reward、给参考图加扰动；真正的贡献在于把这三层作用和 collapse 的反馈回路对上。遗憾是训练仍依赖 14B WanS2V 和八张 H100，普通团队复现门槛不低。

### 📌 核心摘要

DynaForcing 研究流式音频驱动 avatar 在 DMD self-forcing 蒸馏中的 dynamic collapse：学生模型可能生成静态但画质不错的头像，导致唇形、表情和手势时间动态消失。作者将原因归结为反向 KL 偏向低运动模态，以及无锚定自条件形成的反馈回路，并提出三层干预：Hybrid Forcing 以概率把 ground-truth 动态注入 rollout，Dynamics-Aware Reward Regularization 通过同步与表情奖励惩罚静态输出，Reference Perturbation 破坏参考图静态细节使模型依赖音频。另用 computation graph pruning 和 gradient replay 降低训练显存。

### 🔗 开源详情

代码/模型：正文未提供明确公开仓库。
数据：使用 AVSpeech、GenBench-ShortVideo 和 GenBench-LongVideo 等已有资源；本文没有发布新数据。
复现状态：训练超参数和评价指标较完整，但缺少实现、权重和完整数据处理脚本。

### 🏗️ 方法概述和架构

模型建立在 WanS2V 14B 和 diffusion-forcing 预训练之上，视频按块生成并缓存 KV。Hybrid Forcing 在每个训练样本的 rollout 起点以 p_data=0.3 选择加噪 ground-truth，否则从纯噪声开始；这样学生在保持 train-test 对齐的同时获得真实唇动和表情轨迹锚点。 Dynamics-Aware Reward Regularization 把 DMD 看成奖励优化，在损失中加入 Sync-C 和 expression 两个运动相关信号，权重 λsync=1.0、λexp=0.5，并用 balancing factor α=0.1 抑制静态解。Reference Perturbation 对参考图做扰动，削弱身份和静态纹理的捷径，迫使模型从音频条件恢复运动。 为处理长 rollout 的显存问题，作者剪枝不需要反传的计算图，在 replay 阶段逐块恢复中间 latent 和 KV，再执行有限的 forward/backward。这以额外前向换取约 K 倍峰值激活节省。训练 4,000 step、8 张 H100，推理为 720×400，并采用 TPP 流式策略。

全文方法与训练段落给出的可复现设置如下：

第 1 个证据块：论文明确写到“DynaForcing: Overcoming Dynamic Collapse in Self-Forcing Distillation for Streaming Avatar GenerationCCS: Computing methodologies Computer visionCCS: Computing methodologies Video generation Yubo Huang email: snake1124@mail.ustc.edu.cn OrcID: 0009-0005-8870-0216 Affiliation: University of Science and Technology of China, Hefei, China, Sirui Zhao email: sirui@mail.ustc.edu.cn OrcID: 0000-0001-8103-0321 Affiliation: University of Science and Technology of China, Hefei, China, Xinchen Yao email: xinchenyao@smail.nju.edu.cn OrcID: 0009-0008-7045-0337 Affiliation: Nanjing University, Nanjing, China, Zhengye Zhang email: zhengyezhang@mail.ustc.edu.cn OrcID: 0009-0008-1558-827X Affiliation: University of Science and Technology of China, Hefei, China, Jinyang Huang email: hjy@hfut.edu.cn OrcID: 0000-0001-5483-2812 Affiliation: Hefei University of Technology, Hefei, China, Fengqi Cui email: fengqi_cui@mail.ustc.edu.cn OrcID: 0000-0002-0454-940X Affiliation: University of Science and Technology of China, Hefei, China, Shiwei Wu email: davidwu16@sz.tsinghua.edu.cn OrcID: 0000-0002-3206-6827 Affiliation: Tsinghua University, Shenzhen, China and Enhong Chen Note: Corresponding author. email: cheneh@ustc.edu.cn OrcID: 0000-0002-4835-4102 Affiliation: University of Science and Technology of Chi”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 2 个证据块：论文明确写到“Experiments show that DynaForcing recovers dynamics to teacher-comparable levels (Dyn-Deg: 0.31→\to0.73, Sync-C: 7.03→\to7.68) while improving visual quality, resolving the quality–dynamics trade-off throughout training without early stopping.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 3 个证据块：论文明确写到“Recent large-scale video diffusion models (34; 1) have significantly advanced visual fidelity, and self-forcing (11; 5) has emerged as a leading distillation paradigm, leveraging Distribution Matching Distillation (DMD) (43) to convert these models into causal, few-step streaming generators that enable real-time, infinite-length avatar generation at 14B-parameter scale (12; 28).”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 4 个证据块：论文明确写到“We find that self-forcing training systematically drives the student model toward what we term dynamic collapse (Figure 1), where generated videos exhibit high perceptual quality scores but near-zero temporal dynamics: mouths barely move, expressions freeze, and the rich motion present in the teacher model vanishes.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

第 5 个证据块：论文明确写到“We verify this empirically: under identical training horizons, CausVid’s GT-anchored conditioning maintains stable dynamics while self-forcing collapses to near-zero, as demonstrated in Figure 2c.”。这段信息用于确定输入表示、核心模块、训练目标以及推理时的中间状态，不能只用“端到端”一词替代。对照原文可知，这个设置还决定了实验条件、计算开销和最终输出的解释边界。

![Figure 1. Dynamic collapse in self-forcing distillation for streaming avatar generation. Given the same reference image and driving audio (left), the self-forcing baseline (top) produces visually appealing but temporally frozen outputs—nearly identical lip shapes across 10 seconds of speech (see mouth crops). DynaForcing (bottom) restores faithful audio-driven dynamics with natural expression variation and accurate lip articulation, at 45.2 FPS real-time streaming.](https://arxiv.org/html/2608.17707v1/dynaforcing_teaser_v6.png)

![Figure 3. Overview of DynaForcing. Three strategies intervene at different levels of the self-forcing training pipeline: (a) Hybrid Forcing at the input level, (b) dynamics-aware reward regularization at the loss level, and (c) reference perturbation at the conditioning level.](https://arxiv.org/html/2608.17707v1/overview_v3.png)

### 💡 核心创新点

1. 明确把 dynamic collapse 定义为视觉质量高但 Dyn-Deg、同步和表情动态接近零的失败模式。
2. 以数据、损失、条件三层互补机制同时打破低运动反馈回路。
3. 将图裁剪和梯度回放纳入方法，使长视频 self-forcing 更可训练。

### 📊 实验结果

在 GenBench-ShortVideo 上，DynaForcing 的 Sync-C 为 7.68、Dyn-Deg 为 0.73；在 GenBench-LongVideo 上 Sync-C 为 8.05、Dyn-Deg 为 0.68，显著高于发生 collapse 的自 forcing 基线。短视频表中 DynaForcing 的实时吞吐约 45.2，Sync-D、IQA、ASE 和 DINO-S 维持在具有竞争力的水平；与 CausVid 的 GT 锚定对照也显示动态更稳定。

下面把全文实验段落中的设置、数字和比较关系逐项列出；指标方向沿用论文定义。

全文实验证据 1：Figure 2 demonstrates that dynamic collapse is not task-specific but a general pathology of self-forcing distillation.11 1 Reproduction details for Figure 2 are provided in the supplementary material.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 2：Figure 2c validates this analysis: under identical evaluation, CausVid (44), which conditions each block on noisy ground-truth frames, maintains stable dynamics (mean 0.43) while self-forcing collapses to 0.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 3：Table 1 (bottom) shows that the dynamics advantage of DynaForcing holds on long-form generation (>>5 min).。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

全文实验证据 4：Table 8 compares different distributions for sampling tstartt_{\text{start}} in data-anchored mode (Eq.。这项结果对应论文明确的评价条件，数字、比较方向和统计口径均按原文保留。

| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Figure 2 demonstrates that dynamic collapse is not task-specific but a general pathology of self-forcing distillation.11 1 Reproduction details for Figure 2 are provided in the supplementary material. |
| 主要结果 | Figure 2c validates this analysis: under identical evaluation, CausVid (44), which conditions each block on noisy ground-truth frames, maintains stable dynamics (mean 0.43) while self-forcing collapses to 0. |
| 对照、消融或部署指标 | Table 1 (bottom) shows that the dynamics advantage of DynaForcing holds on long-form generation (>>5 min). |

![Figure 3. Overview of DynaForcing. Three strategies intervene at different levels of the self-forcing training pipeline: (a) Hybrid Forcing at the input level, (b) dynamics-aware reward regularization at the loss level, and (c) reference perturbation at the conditioning level. - 图2](https://arxiv.org/html/2608.17707v1/overview_v3.png)

![Figure 4. Qualitative comparison on GenBench-LongVideo. Frames sampled at 2 s, 200 s, and 400 s from the same driving audio. Please refer to the supplementary video for dynamics comparison.](https://arxiv.org/html/2608.17707v1/qualitative.png)

### 🔬 细节详述

训练数据来自 AVSpeech 预处理后的约 400,000 个十秒以上片段；评测使用 100 个约十秒 GenBench-ShortVideo 样本和 15 个五分钟以上 GenBench-LongVideo 样本。报告 Q-Align IQA/ASE、Sync-C/Sync-D、DINOv2 身份相似度、ExpVar、Dyn-Deg 和吞吐。ArcFace 阈值为 0.9，student/fake-score 学习率为 1e-5/2e-6，DMD 更新频率比为 5。

全文中还能定位到以下数据、训练或实现细节。它们补充了方法段没有展开的采样、数据规模、优化和部署边界：

- 细节证据 1：DynaForcing: Overcoming Dynamic Collapse in Self-Forcing Distillation for Streaming Avatar GenerationCCS: Computing methodologies Computer visionCCS: Computing methodologies Video generation Yubo Huang email: snake1124@mail.ustc.edu.cn OrcID: 0009-0005-8870-0216 Affiliation: University of Science and Technology of China, Hefei, China, Sirui Zhao email: sirui@mail.ustc.edu.cn OrcID: 0000-0001-8103-0321 Affiliation: University of Science and Technology of China, Hefei, China, Xinchen Yao email: xinchenyao@smail.nju.edu.cn OrcID: 0009-0008-7045-0337 Affiliation: Nanjing University, Nanjing, China, Zhengye Zhang email: zhengyezhang@mail.ustc.edu.cn OrcID: 0009-0008-1558-827X Affiliation: University of Science and Technology of China, Hefei, China, Jinyang Huang email: hjy@hfut.edu.cn OrcID: 0000-0001-5483-2812 Affiliation: Hefei University of Technology, Hefei, China, Fengqi Cui email: fengqi_cui@mail.ustc.edu.cn OrcID: 0000-0002-0454-940X Affiliation: University of Science and Technology of China, Hefei, China, Shiwei Wu email: davidwu16@sz.tsinghua.edu.cn OrcID: 0000-0002-3206-6827 Affiliation: Tsinghua University, Shenzhen, China and Enhong Chen Note: Corresponding author. email: cheneh@ustc.edu.cn OrcID: 0000-0002-4835-4102 Affiliation: University of Science and Technology of Chi。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 2：Experiments show that DynaForcing recovers dynamics to teacher-comparable levels (Dyn-Deg: 0.31→\to0.73, Sync-C: 7.03→\to7.68) while improving visual quality, resolving the quality–dynamics trade-off throughout training without early stopping.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 3：Recent large-scale video diffusion models (34; 1) have significantly advanced visual fidelity, and self-forcing (11; 5) has emerged as a leading distillation paradigm, leveraging Distribution Matching Distillation (DMD) (43) to convert these models into causal, few-step streaming generators that enable real-time, infinite-length avatar generation at 14B-parameter scale (12; 28).。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 4：We find that self-forcing training systematically drives the student model toward what we term dynamic collapse (Figure 1), where generated videos exhibit high perceptual quality scores but near-zero temporal dynamics: mouths barely move, expressions freeze, and the rich motion present in the teacher model vanishes.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

- 细节证据 5：We verify this empirically: under identical training horizons, CausVid’s GT-anchored conditioning maintains stable dynamics while self-forcing collapses to near-zero, as demonstrated in Figure 2c.。该信息用于解释实验为什么在相应条件下成立，以及哪些条件不能外推。

### ⚖️ 评分理由

创新性: 1.7/2 从反向 KL 与无锚定自条件解释 dynamic collapse，并在数据、损失和条件三层提出互补机制。
技术严谨性: 1.3/1.5 给出训练概率、奖励、数据集和 GPU 设置，机制分析与对照实验相互支持。
实验充分性: 1.3/1.5 短视频、长视频、实时基线和动态指标覆盖较全，报告 Sync、画质、身份与动态。
清晰度: 0.9/1 三种策略和计算图优化的职责边界清楚。
影响力: 1.3/1.5 动态保持是流式 talking avatar 的关键瓶颈，方法可迁移到实时视频蒸馏。
开源: 0.0/1.5 正文未给出明确代码或模型仓库。
可复现性: 0.2/0.5 训练数据、步数、学习率和硬件写得较细，但实现未公开。
工程/实践价值: 1.3/1.5 梯度回放和图裁剪降低显存，直接改善长时流式训练成本。

### 🚨 局限与问题

1. 评测集中在 talking-head avatar，其他视频生成或非人类动态是否同样受益仍未知。
2. 主要结果依赖 WanS2V 14B、特定分辨率和训练配方，算力与工程门槛较高。
3. 动态奖励的权重和 p_data 对不同说话风格的敏感性还需更系统的消融。
4. 未公开代码和模型，长视频真实用户体验、音画延迟与安全问题未充分讨论。

---

[← 返回 2026-08-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-19/)
