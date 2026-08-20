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

We verify this empirically: under identical training horizons, CausVid’s GT-anchored conditioning maintains stable dynamics while self-forcing collapses to near-zero, as demonstrated in Figure 2c.。

To address dynamic collapse, we propose DynaForcing, a training framework with three complementary strategies operating at different levels of the training pipeline: (1) Hybrid Forcing (§4.2), a data-level strategy that probabilistically replaces self-forcing rollout starting points with noised ground-truth latents.。

Real-time self-forcing models (LiveAvatar, SoulX-FlashTalk) achieve strong visual quality but suffer severely on dynamics: LiveAvatar’s ExpVar (0.69) is 62% lower than its teacher WanS2V (1.81), and its Dyn-Deg (0.31) is less than half of OmniAvatar (0.75), confirming dynamic collapse as a systematic issue.。

Experiments show that DynaForcing recovers dynamics to teacher-comparable levels (Dyn-Deg: 0.31→\to0.73, Sync-C: 7.03→\to7.68) while improving visual quality, resolving the quality–dynamics trade-off throughout training without early stopping.。

因此，结论应限定在论文实际报告的数据、模型与评价协议内。

### 🔗 开源详情

代码/模型：正文未提供明确公开仓库。
数据：使用 AVSpeech、GenBench-ShortVideo 和 GenBench-LongVideo 等已有资源；本文没有发布新数据。
复现状态：训练超参数和评价指标较完整，但缺少实现、权重和完整数据处理脚本。

### 🏗️ 方法概述和架构

模型建立在 WanS2V 14B 和 diffusion-forcing 预训练之上，视频按块生成并缓存 KV。Hybrid Forcing 在每个训练样本的 rollout 起点以 p_data=0.3 选择加噪 ground-truth，否则从纯噪声开始；这样学生在保持 train-test 对齐的同时获得真实唇动和表情轨迹锚点。 Dynamics-Aware Reward Regularization 把 DMD 看成奖励优化，在损失中加入 Sync-C 和 expression 两个运动相关信号，权重 λsync=1.0、λexp=0.5，并用 balancing factor α=0.1 抑制静态解。Reference Perturbation 对参考图做扰动，削弱身份和静态纹理的捷径，迫使模型从音频条件恢复运动。 为处理长 rollout 的显存问题，作者剪枝不需要反传的计算图，在 replay 阶段逐块恢复中间 latent 和 KV，再执行有限的 forward/backward。这以额外前向换取约 K 倍峰值激活节省。训练 4,000 step、8 张 H100，推理为 720×400，并采用 TPP 流式策略。

This provides a ground-truth anchor that counteracts mode collapse in the distillation objective. (2) Dynamics-Aware Reward Regularization (§4.3), a loss-level strategy that leverages the RL interpretation of DMD (20) to introduce explicit dynamics rewards (lip-sync accuracy and expression variance) as auxiliary training signals that directly penalize static outputs. (3) Reference Perturbation (§4.4), a complementary conditioning-level strategy that perturbs reference images to decouple identity from extraneous visual details (pose, background, lighting), preventing the model from taking a shortcut of copying the reference frame instead of generating audio-driven motion.。

Additionally, we present efficient self-forcing training (§4.5) via computation graph pruning and gradient replay, reducing GPU requirements by over 10×10\times while preserving quality.。

Three strategies intervene at different levels of the self-forcing training pipeline: (a) Hybrid Forcing at the input level, (b) dynamics-aware reward regularization at the loss level, and (c) reference perturbation at the conditioning level. 3.。

![Figure 1. Dynamic collapse in self-forcing distillation for streaming avatar generation. Given the same reference image and driving audio (left), the self-forcing baseline (top) produces visually appealing but temporally frozen outputs—nearly identical lip shapes across 10 seconds of speech (see mouth crops). DynaForcing (bottom) restores faithful audio-driven dynamics with natural expression variation and accurate lip articulation, at 45.2 FPS real-time streaming.](https://arxiv.org/html/2608.17707v1/dynaforcing_teaser_v6.png)

![Figure 3. Overview of DynaForcing. Three strategies intervene at different levels of the self-forcing training pipeline: (a) Hybrid Forcing at the input level, (b) dynamics-aware reward regularization at the loss level, and (c) reference perturbation at the conditioning level.](https://arxiv.org/html/2608.17707v1/overview_v3.png)

从实现边界看，系统的输入、表示、核心模块、训练或推理路径和输出评价需要连成一条可复核的数据流：输入先经过论文定义的预处理或表示，再进入模型、检索框架或评估协议；中间状态承载特征变换、对齐、重构、生成或决策信息，最后由明确的预测、分数、序列或部署信号完成任务。训练目标、推理顺序、数据划分、资源限制和失败条件共同决定结果能否复现。正文没有披露的网络尺寸、优化器、随机种子、硬件或阈值保持为未说明，不能用常见实现替代；对于实时系统，还应同时核对窗口、上下文、延迟、内存和功耗约束。

### 💡 核心创新点

1. 明确把 dynamic collapse 定义为视觉质量高但 Dyn-Deg、同步和表情动态接近零的失败模式。 具体体现在We verify this empirically: under identical training horizons, CausVid’s GT-anchored conditioning maintains stable dynamics while self-forcing collapses to near-zero, as demonstrated in Figure 2c.。该贡献同时限定了训练信号、数据条件与部署前提。

2. 以数据、损失、条件三层互补机制同时打破低运动反馈回路。 论文给出的实现边界是To address dynamic collapse, we propose DynaForcing, a training framework with three complementary strategies operating at different levels of the training pipeline: (1) Hybrid Forcing (§4.2), a data-level strategy that probabilistically replaces self-forcing rollout starting points with noised ground-truth latents.。收益来源仍需在相同数据、后处理和评价协议下验证。

3. 将图裁剪和梯度回放纳入方法，使长视频 self-forcing 更可训练。 实验或消融显示Real-time self-forcing models (LiveAvatar, SoulX-FlashTalk) achieve strong visual quality but suffer severely on dynamics: LiveAvatar’s ExpVar (0.69) is 62% lower than its teacher WanS2V (1.81), and its Dyn-Deg (0.31) is less than half of OmniAvatar (0.75), confirming dynamic collapse as a systematic issue.。比较结果仅适用于相应数据、基线和指标口径；未报告独立消融时不作组件因果归因。

4. 工程含义必须和条件一起解读：Experiments show that DynaForcing recovers dynamics to teacher-comparable levels (Dyn-Deg: 0.31→\to0.73, Sync-C: 7.03→\to7.68) while improving visual quality, resolving the quality–dynamics trade-off throughout training without early stopping.。测量结果与作者解释仍需和未覆盖的部署条件区分。

5. 可复现边界是上述证据中的数据规模、输入预处理、训练/推理设置和评价指标；这些条件若没有同步满足，不能把论文的局部结果概括成普遍能力。

因此，缺失的配置、样本范围和统计检验会影响复现性与外部有效性。

### 📊 实验结果

在 GenBench-ShortVideo 上，DynaForcing 的 Sync-C 为 7.68、Dyn-Deg 为 0.73；在 GenBench-LongVideo 上 Sync-C 为 8.05、Dyn-Deg 为 0.68，显著高于发生 collapse 的自 forcing 基线。短视频表中 DynaForcing 的实时吞吐约 45.2，Sync-D、IQA、ASE 和 DINO-S 维持在具有竞争力的水平；与 CausVid 的 GT 锚定对照也显示动态更稳定。

实验结果与数据划分、基线、指标方向及统计口径一并报告。

We compare with methods spanning two paradigms: (1) Non-real-time multi-step diffusion models: WanS2V (10) (teacher), OmniAvatar (9), Hallo3 (4), StableAvatar (3), EchoMimic-V2 (2); (2) Real-time streaming models: Ditto (16), LiveAvatar (12), SoulX-FlashTalk (28).。

Perturbation 3.52 7.58 1.92 DynaForcing (full) 3.5 7.68 2.02 Table 3 presents component contributions.。
| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | Real-time self-forcing models (LiveAvatar, SoulX-FlashTalk) achieve strong visual quality but suffer severely on dynamics: LiveAvatar’s ExpVar (0.69) is 62% lower than its teacher WanS2V (1.81), and its Dyn-Deg (0.31) is less than half of OmniAvatar (0.75), confirming dynamic collapse as a systematic issue. |
主要结果 | Experiments show that DynaForcing recovers dynamics to teacher-comparable levels (Dyn-Deg: 0.31→\to0.73, Sync-C: 7.03→\to7.68) while improving visual quality, resolving the quality–dynamics trade-off throughout training without early stopping. |
| 对照、消融或部署指标 | We compare with methods spanning two paradigms: (1) Non-real-time multi-step diffusion models: WanS2V (10) (teacher), OmniAvatar (9), Hallo3 (4), StableAvatar (3), EchoMimic-V2 (2); (2) Real-time streaming models: Ditto (16), LiveAvatar (12), SoulX-FlashTalk (28). |

![Figure 3. Overview of DynaForcing. Three strategies intervene at different levels of the self-forcing training pipeline: (a) Hybrid Forcing at the input level, (b) dynamics-aware reward regularization at the loss level, and (c) reference perturbation at the conditioning level. - 图2](https://arxiv.org/html/2608.17707v1/overview_v3.png)

![Figure 4. Qualitative comparison on GenBench-LongVideo. Frames sampled at 2 s, 20 s, and 40 s from the same driving audio. Please refer to the supplementary video for dynamics comparison.](https://arxiv.org/html/2608.17707v1/qualitative.png)

上述结果应结合数据集、基线、指标方向和测量条件理解。

### 🔬 细节详述

训练数据来自 AVSpeech 预处理后的约 400,000 个十秒以上片段；评测使用 100 个约十秒 GenBench-ShortVideo 样本和 15 个五分钟以上 GenBench-LongVideo 样本。报告 Q-Align IQA/ASE、Sync-C/Sync-D、DINOv2 身份相似度、ExpVar、Dyn-Deg 和吞吐。ArcFace 阈值为 0.9，student/fake-score 学习率为 1e-5/2e-6，DMD 更新频率比为 5。

数据、训练、实现和部署条件共同决定结果的可复现范围。

- This provides a ground-truth anchor that counteracts mode collapse in the distillation objective. (2) Dynamics-Aware Reward Regularization (§4.3), a loss-level strategy that leverages the RL interpretation of DMD (20) to introduce explicit dynamics rewards (lip-sync accuracy and expression variance) as auxiliary training signals that directly penalize static outputs. (3) Reference Perturbation (§4.4), a complementary conditioning-level strategy that perturbs reference images to decouple identity from extraneous visual details (pose, background, lighting), preventing the model from taking a shortcut of copying the reference frame instead of generating audio-driven motion.。

- Additionally, we present efficient self-forcing training (§4.5) via computation graph pruning and gradient replay, reducing GPU requirements by over 10×10\times while preserving quality.。

- Three strategies intervene at different levels of the self-forcing training pipeline: (a) Hybrid Forcing at the input level, (b) dynamics-aware reward regularization at the loss level, and (c) reference perturbation at the conditioning level. 3.。

- We compare with methods spanning two paradigms: (1) Non-real-time multi-step diffusion models: WanS2V (10) (teacher), OmniAvatar (9), Hallo3 (4), StableAvatar (3), EchoMimic-V2 (2); (2) Real-time streaming models: Ditto (16), LiveAvatar (12), SoulX-FlashTalk (28).。

- Perturbation 3.52 7.58 1.92 DynaForcing (full) 3.5 7.68 2.02 Table 3 presents component contributions.。

- Removing Hybrid Forcing causes the largest drop in both dynamics (ExpVar 2.02→\to1.18) and lip-sync (Sync-C 7.68→\to6.78), confirming data-level anchoring as the most critical component; notably, ASE slightly increases (3.5→\to3.57), consistent with the quality–dynamics trade-off observed in the pdatap_{\text{data}} sweep.。

论文未报告的参数、硬件、随机种子和失败案例仍是复现与外推的不确定性。

上述实现条件共同限定了结果的复现边界。

### ⚖️ 评分理由

创新性: 1.7/2 从反向 KL 与无锚定自条件解释 dynamic collapse，并在数据、损失和条件三层提出互补机制。 技术严谨性: 1.3/1.5 给出训练概率、奖励、数据集和 GPU 设置，机制分析与对照实验相互支持。 实验充分性: 1.3/1.5 短视频、长视频、实时基线和动态指标覆盖较全，报告 Sync、画质、身份与动态。 清晰度: 0.9/1 三种策略和计算图优化的职责边界清楚。 影响力: 1.3/1.5 动态保持是流式 talking avatar 的关键瓶颈，方法可迁移到实时视频蒸馏。 开源: 0.0/1.5 正文未给出明确代码或模型仓库。 可复现性: 0.2/0.5 训练数据、步数、学习率和硬件写得较细，但实现未公开。 工程/实践价值: 1.3/1.5 梯度回放和图裁剪降低显存，直接改善长时流式训练成本。

评分依据方法结构、实验数字、资源披露和适用条件。

* 技术严谨性（1.3/1.5）：检查输入、训练目标、推理输出、假设和实现条件是否相互一致。

* 实验充分性（1.3/1.5）：检查数据划分、基线、消融、指标方向、统计口径和失败案例是否覆盖。

* 清晰度（0.9/1）：检查读者能否沿数据流复述输入、模块、中间表示和输出。

* 影响力（1.3/1.5）：结合问题范围、证据强度和外部有效性判断，不把单一数据集结果外推。

* 开源（0.0/1.5）：只评价论文明确提供的代码、模型、数据或可验证链接。

* 可复现性（0.2/0.5）：检查数据、预处理、训练/推理配置、硬件和随机性披露。

* 工程/实践价值（1.3/1.5）：结合延迟、吞吐、资源、稳定性和真实部署限制判断。

### 🚨 局限与问题

1. 评测集中在 talking-head avatar，其他视频生成或非人类动态是否同样受益仍未知。 2. 主要结果依赖 WanS2V 14B、特定分辨率和训练配方，算力与工程门槛较高。 3. 动态奖励的权重和 p_data 对不同说话风格的敏感性还需更系统的消融。 4. 未公开代码和模型，长视频真实用户体验、音画延迟与安全问题未充分讨论。

此外，Experiments show that DynaForcing recovers dynamics to teacher-comparable levels (Dyn-Deg: 0.31→\to0.73, Sync-C: 7.03→\to7.68) while improving visual quality, resolving the quality–dynamics trade-off throughout training without early stopping. 当前结果只在论文报告的数据、模型、硬件和评价协议下成立。

因此，局限不仅包括作者明确承认的缺口，也包括样本规模、数据分布、基线选择、统计不确定性、资源消耗和真实场景迁移尚未被实验覆盖的部分。对于未报告的失败样例、显著性检验、跨设备测试和长期稳定性，读者只能把它们视为待验证问题，不能从单一数据集的结果推导出普遍部署保证。还需要区分作者没有测量的因素与已经证明不存在的问题，避免把沉默误读成正面结论。

---

[← 返回 2026-08-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-19/)
