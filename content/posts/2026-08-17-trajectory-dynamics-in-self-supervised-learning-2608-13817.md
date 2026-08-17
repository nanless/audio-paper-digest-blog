---
title: "Trajectory Dynamics in Self-Supervised Learning Latent Space for Audio Deepfake Detection"
date: 2026-08-17
draft: false
tags: [语音伪造检测, 自监督学习, 鲁棒性, 模型评估]
categories: [论文速递]
description: "语音伪造检测 | 7.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.13817"
---

# 📄 Trajectory Dynamics in Self-Supervised Learning Latent Space for Audio Deepfake Detection

标签：#语音伪造检测 #自监督学习 #鲁棒性 #模型评估

**7.6/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 清晰 0.7/1 | 影响 1/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **7.6/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #语音伪造检测 | #自监督学习 | #鲁棒性 #模型评估 | [arxiv](https://arxiv.org/abs/2608.13817)


### 👥 作者与机构

- 第一作者：Tomás Andrade Weber（Barcelona Supercomputing Center, CASE Department）
- 通讯作者：未明确标注；唯一作者 Tomás Andrade Weber 提供联系邮箱，推断为通讯联系人（Barcelona Supercomputing Center, CASE Department）
- 作者列表：Tomás Andrade Weber（Barcelona Supercomputing Center, CASE Department）

### 💡 毒舌点评

该文用因果 LSTM 下一帧预测把 SSL 隐空间的轨迹动力学转成可用的 deepfake 检测信号，在 DE2024 和 MLAAD-EN 上的跨域增益确实值得关注；但正文 “outperforms all published competitors” 与表格中 BreathNet ASVspoof2019 0.23% EER 直接矛盾，而且缺少最关键的时序建模消融来排除“只是 LSTM 容量更大”的解释。整体思路有亮点，但实验结论需要更克制和更严格地支撑。

### 📌 核心摘要

本文要解决的问题是：基于 SSL 特征的音频 deepfake 检测在困难跨语料场景下，全局平均池化等静态读取方式容易失效。作者假设人类语音的生理约束体现为 SSL 隐空间中的轨迹结构，合成语音会破坏这种结构。方法上，使用 Wav2Vec2-Large-AntiDeepfake 帧级特征，在 ASVspoof 2019 的 bonafide 子集上训练因果 2 层 LSTM 做下一帧预测，并以平均预测误差作为异常分，称为 Stage 1；Stage 2 则在冻结 LSTM 隐状态上训练监督 MLP。与同一 backbone 的静态 GAP baseline 相比，动态轨迹方法在近域基准上优势有限，但在 MLAAD-EN 上 Stage 1 从 22.86% EER 降至 5.71%，在 DE2024 上从 52.52% 降至 30.35%。论文还报告 Stage 2 在 ASVspoof 2021 上取得 0.75% EER。实际意义在于提供了一种对未知合成方法更鲁棒的 one-class 检测路线。主要局限是缺少关键消融、部分外部基线协议不可比，以及个别“优于所有基线”的表述与表格数据不一致。

### 🔗 开源详情

- **代码与配置**：论文原文在 IV-B 明确给出 Zenodo 链接：https://doi.org/10.5281/zenodo.21879214 ，机器摘要据此判定 `has_code=是`。
- **模型权重**：原文未披露是否发布已训练 Stage 1 LSTM 或 Stage 2 MLP 权重，机器摘要判定 `has_model=未说明`。
- **数据集**：实验使用 ASVspoof 2019/2021、Codecfake、In-the-Wild、MLAAD-EN v9、Deepfake-Eval-2024 等公开基准，但原文未说明是否重新分发处理后的特征、切分或数据下载/使用说明；机器摘要判定 `has_dataset=未说明`。
- **许可证与复现材料**：未披露代码许可证、配置文件细节、环境依赖和完整运行脚本的进一步信息。

### 🏗️ 方法概述和架构

该工作是一个两阶段流水线系统。输入语音首先进行静音预处理：移除超过 500ms 的长静音，并替换为 200ms 的自然停顿，目的是消除 ASVspoof 2019 中可能被模型利用的录音填充伪影。随后使用 Wav2Vec2-Large-AntiDeepfake 作为固定特征提取器，得到 1024 维帧级 embedding，帧率约为 50 帧/秒。该 backbone 是在超过 56,000 小时真实语音和 18,000 小时合成语音上 post-training 得到的 deepfake 专用 SSL 模型；每个句子被表示为 embedding 序列。

Stage 1 是一个因果 LSTM 轨迹预测器。它采用 2 层 LSTM，隐藏维度为 512，逐帧读取当前及历史 embedding，并预测下一帧 embedding。训练时仅在 ASVspoof 2019 LA 训练集的 2,580 条 bonafide 语音上进行，目标是最小化预测下一帧与真实下一帧之间的均方误差。训练设置包括 500 个 epoch、AdamW、初始学习率 0.001、dropout 0.1，以及余弦退火与 warm restarts，最大序列长度为 500 帧。推理时，对每个句子计算逐帧预测误差的平均值作为异常分数：\(s(x)=\frac{1}{T-1}\sum_{t=1}^{T-1}\left\|\hat{\mathbf{h}}_t-\mathbf{h}_{t+1}\right\|^2\)，其中 \(\hat{\mathbf{h}}_t=f_\theta(\mathbf{h}_1,\ldots,\mathbf{h}_t)\)。分数越高，表示该轨迹越偏离 bonafide trajectory dynamics。该阶段不接触任何 spoof 标签，因此具有下游 one-class 学习性质。

Stage 2 是可选的有监督分类阶段。它冻结已训练好的 Stage 1 LSTM，只将其内部隐状态作为特征提取器。对每个句子，对所有时间步的 LSTM 隐状态做 mean pooling，得到 512 维句子级表示。然后用 ASVspoof 2019 LA 训练集的 2,580 条 bonafide 与 22,800 条 spoof 语音训练一个 MLP 分类器，结构为 512→256→128→1，dropout 为 0.3，输出 spoof 概率。该阶段引入合成语音监督，与纯 bonafide 的 Stage 1 形成对比。

此外，作者构造了一个静态基线：对同样特征做全局平均池化，并在 bonafide 训练向量上计算质心，推理时用 L2 距离作为异常分。该基线不保留任何时间顺序，用于隔离时序建模的贡献。整体设计的关键动机是：静态池化丢弃了帧之间的顺序结构，而语音生成中的生理约束应当体现在轨迹演化中。选择 LSTM 是为了使用因果、可逐帧预测的结构；冻结 backbone 则避免与 fine-tuning 混淆。该架构在实现上相当轻量，只需单张 H100 GPU，便于实际部署和复现。

### 💡 核心创新点

1. **将生理约束显式建模为 SSL 隐空间轨迹动力学**：之前多数工作使用静态 pooling 或局部 artifacts，本文提出用下一帧预测误差衡量整条 utterance 的全局轨迹合理性，这是一个不同于 FGFM、TRACE 和 BreathNet 的视角。证据是在 MLAAD-EN 和 DE2024 上动态轨迹明显优于静态 baseline。
2. **纯 bonafide 训练的 Stage 1 在困难跨域基准上反超监督 Stage 2**：该结果表明 ASVspoof 2019 的 spoof 监督可能过拟合已知攻击，one-class trajectory model 对未知合成方法更鲁棒。证据是 MLAAD-EN 上 Stage 1 为 5.71%，而 Stage 2 为 10.02%；DE2024 上 Stage 1 为 30.35%，而 Stage 2 为 35.41%。
3. **通过严格控制变量隔离时间信息贡献**：使用同一个 Wav2Vec2-Large-AntiDeepfake backbone 构建确定性静态 GAP baseline，使动态方法与静态方法之间的性能差异更能归因于轨迹建模，而非 backbone 质量。
4. **提出“难度梯度”现象并用 UMAP 给出机制解释**：随着 benchmark 困难度增加，bonafide/spoof embedding 重叠度上升，静态方法快速失效，而轨迹动力学提供更大增益。UMAP 参数为 \(n_{\text{neighbors}}=15\)、\(\text{min\_dist}=0.1\)、cosine metric。这为理解何时需要动态建模提供了可解释性依据。
5. **静音预处理去伪影**：作者识别并移除 ASVspoof 2019 中的长静音填充伪影，减少模型走捷径的风险。该细节对跨数据集评估公平性有实际影响。

### 📊 实验结果

下表保留原文 Table II 中与本文方法直接可比的 Static、Stage 1、Stage 2，以及 BreathNet、QAMO、SLIM、NII-GAP 在共享 benchmark 上的结果；关键组件消融论文未提供。

| Benchmark | Static | Stage 1 | Stage 2 | BreathNet | QAMO | SLIM | NII-GAP |
|---|---|---|---|---|---|---|---|
| ASVspoof 2019 | 1.51 | 2.57±0.12 | 1.11±0.10 | 0.23 | — | 0.30 | — |
| ASVspoof 2021 | 0.98 | 1.88±0.05 | 0.75±0.10 | 1.87 | 1.54 | 3.60 | — |
| Codecfake | 3.21 | 5.21±0.09 | 2.43±0.18 | — | — | — | — |
| In-the-Wild | 4.03 | 4.84±0.04 | 3.28±0.60 | 4.70 | 5.09 | 12.5 | 1.91 |
| MLAAD-EN | 22.86 | 5.71±0.03 | 10.02±1.22 | — | — | 10.7 | — |
| DE2024 | 52.52 | 30.35±0.15 | 35.41±2.62 | — | — | — | 33.36* |

论文在六个公开基准上评估：ASVspoof 2019 LA eval、ASVspoof 2021 DF、Codecfake、In-the-Wild、MLAAD-EN v9 和 Deepfake-Eval-2024。指标为 Equal Error Rate，越低越好。近域方面，ASVspoof 2021 上 Stage 2 达到 0.75% EER，低于 BreathNet 1.87%、QAMO 1.54% 和 SLIM 3.60%。但 ASVspoof 2019 上 BreathNet 为 0.23%，显著优于本文 Stage 2 的 1.11%，因此正文“outperforms all published competitors on these benchmarks”这一表述不成立。Codecfake 上 Stage 2 为 2.43%，优于 Static 的 3.21%。In-the-Wild 上外部 NII-GAP 为 1.91%，仍低于本文 Stage 2 的 3.28%。

困难跨域方面，MLAAD-EN 上 Stage 1 达到 5.71%，远低于 Static 22.86% 和监督 SLIM 10.7%；DE2024 上 Stage 1 为 30.35%，优于 Static 52.52% 和 NII-GAP 33.36%，但 NII-GAP 使用整文件推理，协议不完全对齐。作者未提供关键消融，因此无法从现有表中分离 LSTM 容量、silence preprocessing 或 stage 结构对性能的独立贡献。

下图通过嵌入空间可视化进一步解释了这种性能梯度。

![Fig. 1: UMAP visualisation of AntiDeepfake embedding space (red: bonafide, grey: spoof) across six benchmarks in increasing order of difficulty (left to right). Bonafide/spoof overlap grows progressively from tight separation (ASVspoof 2019](https://arxiv.org/html/2608.13817v1/figures/LS_eval_16.png)

图中可见，从左至右，bonafide与spoof的分布从紧密分离逐渐演变为高度重叠，直观印证了静态方法失效和轨迹动力学优势增大的趋势。

### 🔬 细节详述

- 训练数据：Stage 1 使用 ASVspoof 2019 LA train 的 2,580 条 bonafide 语音（约 8 小时）；Stage 2 使用同一集合的 2,580 条 bonafide 与 22,800 条 spoof（共 25,380 条）。评估数据包括 ASVspoof 2019 LA eval（约 28 小时）、ASVspoof 2021 DF eval（约 670 小时）、Codecfake（约 160 小时）、In-the-Wild（约 38 小时）、MLAAD-EN v9（约 220 小时，185K utterances，en_US + en_UK，bonafide 来自 M-AILABS）和 DE2024（约 21 小时）。预处理为移除超过 500ms 的长静音并替换为 200ms 停顿；数据增强未说明。
- 损失函数：Stage 1 使用预测下一帧与真实下一帧之间的均方误差；Stage 2 输出 spoof probability，但具体分类损失函数论文未明确说明。
- 训练策略：Stage 1 使用 AdamW，初始学习率 0.001，余弦退火配合 warm restarts，T0=50、Tmult=2，训练 500 epochs，dropout 0.1，最大序列长度 500 帧；Stage 2 训练 100 epochs，dropout 0.3。batch size、warmup 步数、weight decay 未说明。
- 关键超参数：Wav2Vec2-Large-AntiDeepfake 特征维度 1024，帧率 50fps；LSTM 2 层，隐藏维度 512；Stage 2 MLP 结构为 512→256→128→1。
- 训练硬件：单张 H100 GPU；具体训练时长未说明。
- 推理细节：Stage 1 对每个句子输出平均下一帧预测误差作为异常分；EER 阈值如何确定未说明。Stage 2 输出 spoof probability。DE2024 分割为 10 秒片段，但本文 Stage 1/2 的聚合策略未详细说明。
- 正则化或稳定训练技巧：dropout、warm restarts、静音移除。未说明 early stopping、梯度裁剪等。
- 方差估计：训练 5 个独立 Stage 1 模型（5 个随机种子），每个 Stage 1 模型训练 5 个独立 Stage 2 MLP，共 25 次运行。静态基线是确定性的，无重复运行。论文对 Stage 1 标准差的计算方式描述为“对每个 Stage 1 seed 内的 Stage 2 分数取平均后再统计”，这与 Stage 1 本身不依赖 Stage 2 的事实存在表述含混。
- 数据集协议：ASVspoof 2019/2021、Codecfake 和 MLAAD 的 spoof audio 均包含在 backbone post-training 数据中；仅 In-the-Wild 与 DE2024 对 backbone 完全 out-of-distribution。MLAAD 的 bonafide M-AILABS 不在 backbone 训练集中，因此 bonafide 轨迹模型对 MLAAD 是 zero-shot。
- UMAP 参数：\(n_{\text{neighbors}}=15\)，\(\text{min\_dist}=0.1\)，cosine metric，从每个数据集随机采样约 175,000 帧。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD][A_SUMMARY] 该文将生理约束显式建模为 SSL 隐空间轨迹动力学，并用因果 LSTM 下一帧预测误差作为 one-class 异常分，同时以同 backbone 的静态 GAP 基线隔离时间信息贡献，视角不同于静态池化路线。

*   技术严谨性 (1.2/1.5)：[A_METHOD] 两阶段流水线逻辑自洽：Stage 1 只在 bonafide 上训练因果 LSTM 预测下一帧，评分公式明确使用平均预测误差；Stage 2 冻结 LSTM 隐状态训练 MLP，并以固定 backbone 和静态基线控制变量，未见明显算法逻辑漏洞。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 论文在六个公开基准上与 BreathNet、QAMO、SLIM、NII-GAP 等进行比较并报告 25 次运行方差，但缺少关键时序建模消融，NII-GAP 的 DE2024 整文件推理和 SLIM 的 MLAAD v3 协议不完全可比，且 backbone 预训练数据泄漏使部分跨域收益归因受影响。

*   清晰度 (0.7/1)：[A_SUMMARY][A_LIMITS] 正文‘Stage 2 outperforms all published competitors on these benchmarks’与 Table II 中 BreathNet 在 ASVspoof2019 的 0.23% EER 明显矛盾，且 Stage 1 标准差计算方式描述含混，这些表述问题影响清晰度。

*   影响力 (1.0/1.5)：[A_SUMMARY][A_RESULTS] 在困难跨语料场景 MLAAD-EN 和 DE2024 上，Stage 1 将 EER 从静态基线 22.86%/52.52% 降至 5.71%/30.35%，为未知合成方法提供更鲁棒的 one-class 检测路线，对音频 deepfake 检测领域有实际意义。

*   开源 (1.2/1.5)：[A_OPEN] 原文明确给出 Zenodo 代码与配置链接，核心代码开放；但许可证、环境依赖与完整运行脚本等文档不完整，按固定锚点属于核心产物开放但文档不完整，计为 1.2。

*   可复现性 (0.3/0.5)：[A_METHOD][A_LIMITS] 已披露 LSTM 结构、训练 epoch、优化器、学习率、dropout、最大序列长度和单张 H100 等主要配置，但 Stage 2 分类损失、batch size、warmup 步数、weight decay、EER 阈值确定和 DE2024 片段聚合策略等少量关键项缺失，复现性因此受限。

*   工程/实践价值 (1.0/1.5)：[A_METHOD][A_RESULTS] 该方法使用固定 backbone 和轻量 LSTM/MLP，推理仅需平均预测误差或 MLP 概率，单张 H100 即可训练，并在困难基准上提供明显跨域增益，具备较好的部署和实用价值。

### 🚨 局限与问题

- **缺少关键消融**：论文未提供时序建模组件消融，无法从现有 Table II 分离 LSTM 容量、隐藏维度、层数、最大序列长度、静音预处理、Stage 1/Stage 2 结构等对性能的独立贡献；因此“轨迹动力学带来增益”的主结论仍受混淆变量影响。原文也仅在 VI Conclusion 留下未来工作，而未在本工作内完成消融。
- **外部基线协议不完全可比**：NII-GAP 在 DE2024 使用整文件推理，而本文按 10 秒片段处理；SLIM 使用 MLAAD-EN v3，而本文使用 MLAAD-EN v9；这些差异使部分跨系统 EER 的横向比较不严格。
- **个别结论表述与表格不一致**：正文“Stage 2 outperforms all published competitors on these benchmarks”与 Table II 中 BreathNet 在 ASVspoof 2019 上达到 0.23% EER、低于本文 Stage 2 1.11% 的事实直接矛盾，结论应更克制。
- **技术细节披露不足**：Stage 2 分类损失函数、batch size、warmup 步数、weight decay、EER 阈值确定方式、DE2024 片段聚合策略、静态基线质心训练域等原文均未披露；Stage 1 标准差的计算依赖 Stage 2 的实现方式在描述上也自洽性不足，可能影响复现与解释。
- **数据分布与 OOD 限制**：ASVspoof 2019/2021、Codecfake 和 MLAAD 的 spoof 语音均在 backbone post-training 数据中，仅 In-the-Wild 与 DE2024 对 backbone 完全 out-of-distribution；因此部分性能优势可能来自 backbone 预训练数据泄漏，而非轨迹动力学本身。
- **泛化范围受限**：本文仅评估英语及多语种合成检测的 DE2024/MLAAD-EN 子集，作者把多语言泛化、其他序列模型比较和 DE2024 in-domain fine-tuning 留作未来工作。

---

[← 返回 2026-08-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-17/)
