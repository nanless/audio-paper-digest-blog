---
title: "Iterative Self-Learning for Expressive Text-to-Speech Synthesis"
date: 2026-08-18
draft: false
tags: [语音合成, 自监督学习, 语音情感识别, 扩散模型, 低资源]
categories: [论文速递]
description: "语音合成 | 6.1/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.15910"
---

# 📄 Iterative Self-Learning for Expressive Text-to-Speech Synthesis

标签：#语音合成 #自监督学习 #语音情感识别 #扩散模型 #低资源

**6.1/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.9/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

✅ **6.1/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #语音合成 | #自监督学习 | #语音情感识别 #扩散模型 | [arxiv](https://arxiv.org/abs/2608.15910)


### 👥 作者与机构

- 第一作者：Nicholas Sanders（机构未说明）
- 通讯作者：未说明
- 作者列表：Nicholas Sanders（未说明）、Gustav Eje Henter（未说明）、Simon King（未说明）、Korin Richmond（未说明）
- 资助信息中提及 University of Edinburgh、Huawei、Wallenberg AI 等，但论文正文未说明作者所属机构。

### 💡 毒舌点评

本文将 Invert-Classify 嵌入迭代自训练，抓住了生成式 TTS 中标签质量与合成质量可能解耦这一关键点，并用两个任务、多档低资源条件验证了迭代收益。但方法仍只在一个轻量 Matcha-TTS 骨干上验证，缺少与分类器/预训练模型伪标注的公平对比，极端低资源下不稳定，且部分主观测试置信区间宽到接近无差异；距离一套可复现的低资源工程方案还有明显距离。

### 📌 核心摘要

论文要解决的问题是表达性 TTS 中离散表达标签（词级 prominence 和句级 emotion）人工标注稀缺、成本高，而现有半监督 TTS 主要解决文本-语音配对稀缺，不解决表达标签稀缺。方法核心是将 Invert-Classify 伪标注嵌入 Iterative Self-Learning 循环：用少量标注训练种子模型，冻结后通过梯度反演给无标注语音打伪标签，合并数据继续训练并迭代。与已有单次 Invert-Classify 相比，新点在于让生成模型作为不断更新的教师，逐步精炼伪标签，并用 Select-and-Retrain 解耦标签质量与模型状态。低资源下取得提升：1% ESD 情感下 emo2vec F1 从 26.58 提升到 29.87，5% ESD 从 39.38 提升到 49.58；主观 A/B 中 5% ESD ISL 胜率 0.633，1% prominence ISL 胜率 0.678。实际意义在于降低表达 TTS 对大批量人工表达标注的依赖。主要局限是只验证了 Matcha-TTS 一个骨干，极端 0.5% 情感条件下几乎不收益，且未提供代码或与外部分类器伪标注的对比。

### 🔗 开源详情

- 代码：论文中未提及代码链接，未提供任何代码仓库。
- 模型权重：论文中未提及。
- 数据集：论文使用 ESD（Emotional Speech Dataset）和 Naver-Prosody 数据集；论文中未提及下载链接或开源协议。
- Demo：论文中未提及。
- 复现材料：论文未提供代码、权重或检查点发布。文本给出的主要复现配置包括：种子模型训练 100 epochs；每轮 self-training 训练 3/10/50 epochs 对比；Adam 优化器，学习率 \(4\times10^{-4}\)，无权重衰减，梯度裁剪 5.0，batch size 32；文本前端使用 phonemizer + espeak-ng；伪标签采用 Invert-Classify，并固定 timestep \(t=0.9\) 与固定噪声；ESD 按 Speaker ID 与 Emotion Class 分层抽样，Naver-Prosody 按 lexical group 抽样（1% split 指 1% 词法组/四元组）；评估指标含 Macro F1、Binary F1、F0 RMSE、TTSDS、Emo2vec、Allosaurus、HuBERT、pYIN 等。
- 论文中引用的开源项目：Matcha-TTS、phonemizer、espeak-ng、pYIN、Allosaurus、HuBERT、Emo2vec、TTSDS、Grad-TTS、StrawNet、Invert-Classify（论文中提及这些名称，但未给出具体 URL）。

### 🏗️ 方法概述和架构

整体上，这是一个多阶段迭代自训练框架，而非单一的端到端新架构。输入包含少量带表达标签的语音-文本-标签三元组，以及大量无表达标签的语音-文本对；输出是可控制表达属性的 TTS 声学模型，以及为无标签语音生成的离散表达伪标签。

**骨干声学模型：Matcha-TTS**。论文使用 Matcha-TTS 作为声学生成模型，目标是从文本和表达条件生成 80 维 mel-spectrogram。文本前端使用 phonemizer 和 espeak-ng 做 grapheme-to-phoneme，模型内部通过 Monotonic Alignment Search 学习文本-语音对齐，避免依赖外部强制对齐。Matcha-TTS 采用 Optimal Transport Conditional Flow Matching（OT-CFM）训练，其损失为：

\[ \mathcal{L}_{\text{Total}} = \mathcal{L}_{\text{OT-CFM}} + \lambda_{\text{dur}}\mathcal{L}_{\text{dur}} + \lambda_{\text{enc}}\mathcal{L}_{\text{enc}} \]

其中 OT-CFM 学习从高斯噪声到 mel-spectrogram 的近似直线传输路径，\(\mathcal{L}_{\text{dur}}\) 是时长预测辅助损失，\(\mathcal{L}_{\text{enc}}\) 是编码器先验/稳定性辅助损失。相比标准扩散 SDE，OT-CFM 以 ODE 形式训练，能在较少采样步数内完成生成。论文选择 Matcha-TTS 而非 StyleTTS2、XTTS、MaskGCT 等大型系统的原因在于：其从零训练、无额外预训练依赖、内部 MAS 避免强制对齐，适合重复自学习实验的轻量可控环境。

**表达条件注入**。对词级 prominence，系统在音素序列的词边界插入 `<PROM>` 或 `<NOTPROM>` 二值标签，并用独立的 embedding table 学习标签表示，从而与音素表征解耦。对句级 emotion，系统学习目标情感类别的 embedding，并将其拼接到文本编码器输出上。这一设计覆盖局部词级和全局句级两种尺度。

**Invert-Classify 伪标注组件**。给定一个冻结的当前模型 \(M_i\) 和无标签语音 \(X_U\)，Invert-Classify 先初始化缺失标签表示为所有可能标签 embedding 的均值，然后用与训练相同的总损失 \(\mathcal{L}_{\text{Total}}\) 对该连续 embedding 做梯度下降，使其向“最能解释观测语音”的方向更新；随后将连续向量通过余弦相似度分配到最近的真实标签 embedding，得到离散伪标签。该方法与 classifier-free guidance 概念上有相似之处——都利用生成模型本身作为条件空间的信号来源，但机制与目的不同：CFG 在推理时操纵条件以改善样本质量，Invert-Classify 则在输入层面优化条件以恢复缺失离散标签。

**面向 flow matching 的确定性反演**。标准 flow matching 训练会随机采样时间步 \(t\) 和噪声 \(x_0\)，这会导致反演时目标函数不断抖动，难以收敛。论文在反演阶段固定 \(t=0.9\)，并对同一输入固定噪声张量 \(x_0\)，使梯度主要反映标签条件的影响。论文称 \(t=0.9\)（靠近插值终点）在给定任务和数据集上产生了更大的条件梯度幅度，但未对 \(t\) 值进行系统消融。这是该方法在 flow-matching 骨干上可用的关键实现选择。

**迭代自学习循环**。第 0 轮在少量真值标注上训练种子模型 100 个 epoch。之后每一轮冻结当前模型，对无标签集执行 Invert-Classify 得到伪标签数据集 \(D_{PL}\)，再把真值标注集 \(D_L\) 与 \(D_{PL}\) 合并，继续训练若干 epoch。论文比较了 3、10、50 个 epoch/轮，发现 50 epoch 容易发生模型崩坏，10 epoch 更稳定。

**Select-and-Retrain 策略**。为避免模型状态在迭代中累积噪声，论文在每轮结束后用验证集评估伪标签 F1，选择最佳轮次 \(i^*\)，然后从随机初始化重新训练一个最终模型，只用该轮生成的固定合并数据。该设计将“更好的伪标签”和“迭代中可能学坏的模型状态”解耦。

整个数据流为：少量真值标注 → 种子模型 → 冻结并反演无标签语音 → 离散伪标签 → 合并训练 → 新一轮模型 → 验证集选择最优伪标签 → 从零重训练最终 TTS 模型。声学输出再经固定 HiFi-GAN vocoder 重建波形。

### 💡 核心创新点

1. **将迭代自学习引入表达性 TTS 标签稀缺问题**。此前半监督 TTS 主要解决配对文本-语音或转写稀缺；本文首次在生成式 TTS 中针对离散表达标签稀缺建立 ISL 闭环，用生成模型自身逐步精炼 prominence/emotion 伪标签。
2. **把 Invert-Classify 单次伪标注扩展为迭代教师-学生过程**。单次 Invert-Classify 只依赖固定种子模型，标签质量受限于种子；本文让模型每轮更新后重新反演标注，证据显示低资源下伪标签 F1 和下游表达控制均超过 single-pass 控制。
3. **提出 flow-matching 反演的确定性条件**。固定时间步 \(t=0.9\) 和固定噪声张量，避免随机采样导致反演目标漂移，使梯度主要反映表达标签条件。这是使 Invert-Classify 在 OT-CFM 框架下可收敛的关键设计。
4. **提出 Select-and-Retrain 选择机制**。不直接用迭代终点模型，而是监控验证集伪标签 F1，选最佳标签轮次，并从随机初始化重训；缓解了自训练中的确认偏置和错误累积。

### 📊 实验结果

论文用 ESD（英语情感，5 类，10 说话人，约 14.5 小时）和 Naver-Prosody（单说话人 prominence，约 26.7 小时）做低资源实验。主要与 single-pass control 和 100% GT 参考模型比较；论文未与外部 SOTA 或分类器伪标注方法做直接对比。

迭代动态实验覆盖 0.5%、1%、5%、20% 四档数据量，以及 3/10/50 三种每轮训练时长。核心发现：50 epoch 条件下两个任务均出现模型崩坏（如 1% prominence F1 从约 0.45 跌至约 0.24）；10 epoch 稳定性最好；3 epoch 偶尔获得更高后期性能但一致性不如 10 epoch。在 20% 数据下，ISL 收益基本消失，说明其主要作为低资源干预手段有效。0.5% ESD 情感条件下伪标签 F1 保持平坦，表明存在监督信号下限。

下图展示了prominence任务在20%数据比例下，不同训练时长设置中伪标签F1分数的迭代动态。

![(d) 20% Data Split](https://arxiv.org/html/2608.15910v1/NP-Figures/20percent-pl-val.png)

图中可见，在20%的相对充足数据比例下，所有设置的F1分数在迭代后均未明显提升，甚至有所下降，这支持了论文中“20%数据下ISL收益基本消失”的结论。


下图展示了prominence任务在1%数据比例下，不同训练时长设置中伪标签F1分数的迭代动态。

![(b) 1% Data Split](https://arxiv.org/html/2608.15910v1/NP-Figures/1percent-pl-val.png)

图中可见，3个epoch的设置（蓝线）在后期达到了最高的F1分数，而50个epoch的设置（绿线）在后期显著下降，这与论文中“3 epoch偶尔获得更高后期性能但一致性不如10 epoch”的观察相符。


下图展示了情感任务在0.5%数据比例下，不同训练时长设置中伪标签F1分数的迭代动态。

![(a) 0.5% Data Split](https://arxiv.org/html/2608.15910v1/ESD-Figures/0.5percent-pl-val.png)

图中可见，在0.5%的极端低资源条件下，所有设置的F1分数均较低且提升有限，远低于100%数据参考线，这支持了论文中关于“存在监督信号下限”的结论。


下图展示了情感任务在5%数据比例下，不同训练时长设置中伪标签F1分数的迭代动态。

![(c) 5% Data Split](https://arxiv.org/html/2608.15910v1/ESD-Figures/5percent-pl-val.png)

图中可见，10个epoch的设置（橙线）在迭代过程中表现最佳，其F1分数甚至超过了100%数据参考线（红色虚线），直观印证了论文中“5% ISL比control高10.2个点，且超过100% GT参考模型”的发现。


最终合成实验聚焦于收益最明显的低资源档位：ESD 取 1% 和 5%，Naver-Prosody 取 0.5% 和 1%。表一中保留主方法、最强基线与参考上限。表一为 emotion 任务在 1% 和 5% 数据下，ISL 与 single-pass control 以及 100% GT 参考的客观结果摘要：

| 条件 | Emo2vec F1 ↑ | F0 RMSE ↓ | TTSDS Prosody Avg ↑ | TTSDS Speaker Avg ↑ | TTSDS Intelligibility Avg ↑ | TTSDS General Quality Avg ↑ | TTSDS Overall ↑ |
|---|---|---|---|---|---|---|---|
| 1% Control | 26.58 | 5.39 | 85.70 | 87.52 | 88.01 | 95.59 | 88.70 |
| 1% ISL | 29.87 | 5.33 | 88.18 | 88.59 | 87.58 | 96.12 | 89.90 |
| 5% Control | 39.38 | 5.55 | 86.68 | 88.56 | 86.92 | 95.80 | 89.18 |
| 5% ISL | 49.58 | 4.73 | 87.76 | 88.57 | 87.96 | 96.17 | 89.85 |
| 100% GT Ref. | 45.95 | 4.04 | 91.30 | 89.37 | 90.75 | 96.54 | 92.02 |
| Vocoded GT | 69.32 | 2.56 | 93.68 | 91.76 | 91.42 | 98.02 | 93.71 |

情感标签遵循度上，1% ISL 比 control 高 3.29 个 emo2vec F1；5% ISL 比 control 高 10.2 个点，且超过 100% GT 参考模型的 45.95。但论文指出 emo2vec 对合成语音可能存在域偏移，因此该数值需谨慎解释。整体 TTSDS 分数在 1% 和 5% 下也有小幅提升。

表二为 prominence 任务在 0.5% 和 1% 数据下的摘要：

| 条件 | F0 RMSE ↓ | TTSDS Prosody Avg ↑ | TTSDS Intelligibility Avg ↑ | TTSDS General Quality Avg ↑ | TTSDS Overall ↑ |
|---|---|---|---|---|---|
| 0.5% Control | 2.66 | 90.52 | 90.69 | 93.34 | 91.37 |
| 0.5% ISL | 2.57 | 93.33 | 93.16 | 93.37 | 93.15 |
| 1% Control | 2.68 | 91.00 | 91.44 | 93.06 | 91.57 |
| 1% ISL | 2.91 | 90.55 | 94.61 | 93.86 | 92.66 |
| 100% GT Ref. | 2.55 | 93.74 | 92.45 | 93.26 | 93.23 |
| Vocoded GT | 2.01 | 96.53 | 96.03 | 97.03 | 96.53 |

prominence 任务没有可靠预训练分类器，因此表达遵循度主要依赖主观测试。主观 A/B 显示，0.5% prominence 下 ISL 胜率 0.656±0.117，1% 下 0.678±0.078；1% emotion ISL 与 control 打平（0.500±0.094），5% emotion ISL 胜率 0.633±0.037。5% emotion ISL 与 100% GT 相比，GT 被偏好（胜率 0.633±0.042），说明仍有差距。ISL 训练模型在 seed 数据增加时（0.5% NP vs 1.0% NP；1% ESD vs 5% ESD）均未表现出显著提升，说明在测试范围内表达性并未随额外种子数据线性增强。

论文还报告了 TTSDS Pitch 指标在 Naver-Prosody 上的异常：Vocoded GT 得分低于所有 TTS 系统，原因是 TTSDS 使用的 DIO F0 提取器对自然语音中低 F0 区域存在 voicing detection 失败（97.7% 的自然 GT 句子包含低于 DIO 72 Hz 音高下限的浊音段），因此论文改用 pYIN 计算 F0 RMSE 作为 pitch 可靠指标。

### 🔬 细节详述

- 训练数据：
  - ESD：英语子集，10 个英语母语者，约 14.5 小时，5 类情感（Neutral、Happy、Angry、Sad、Surprise），16 kHz 重采样至 22.05 kHz。0.5% split 包含恰好 50 个样本（每个说话人每个情感类别一个样本）。
  - Naver-Prosody：约 26.7 小时，约 36,600 条 utterance，单女性美式英语说话人，使用对比焦点组构造二值 prominence 标签，排除疑问句。
  - ESD 采用按 Speaker ID 和 Emotion Class 分层采样；Naver-Prosody 按词法组级别采样，1% 表示 1% 的对比焦点组。
  - 数据增强：未说明。
- 损失函数：
  - 总损失 \(\mathcal{L}_{\text{Total}} = \mathcal{L}_{\text{OT-CFM}} + \lambda_{\text{dur}}\mathcal{L}_{\text{dur}} + \lambda_{\text{enc}}\mathcal{L}_{\text{enc}}\)。
  - \(\mathcal{L}_{\text{OT-CFM}}\) 用于 flow matching 生成 mel-spectrogram；\(\mathcal{L}_{\text{dur}}\) 稳定时长预测；\(\mathcal{L}_{\text{enc}}\) 稳定编码器表示。
  - \(\lambda_{\text{dur}}\)、\(\lambda_{\text{enc}}\) 的具体数值未说明。
- 训练策略：
  - 优化器：Adam，学习率 \(4\times10^{-4}\)，无 weight decay，梯度裁剪 5.0，batch size 32。
  - 种子模型训练 100 epoch；最终 Select-and-Retrain 训练 1000 epoch。
  - 迭代训练时长设置：Conservative 3 epoch/轮、Standard 10 epoch/轮、Saturation 50 epoch/轮。
- 关键超参数：
  - 模型隐藏维度、层数、注意力头数、参数量、码本大小等未说明；论文仅说明沿用 Matcha-TTS 原始代码设置。
- 训练硬件：GPU/TPU 型号、数量、训练时长均未说明。
- 推理细节：
  - Euler ODE sampler，温度 1.0，40 步。
  - Vocoder：HiFi-GAN V1，80-bin mel-spectrogram，22.05 kHz，训练 500,000 步，batch size 16，Adam 初始学习率 \(2\times10^{-4}\)，指数衰减。
- 反演细节：
  - emotion embedding 更新 200 步，学习率 0.01；prominence embedding 更新 100 步，学习率 \(10^{-4}\)。
  - 反演 batch size 32，固定 \(t=0.9\)，固定噪声张量。
- 正则化或稳定训练技巧：
  - 梯度裁剪 5.0；Select-and-Retrain 防止迭代模型状态累积噪声；固定 HiFi-GAN vocoder 以隔离声学模型差异。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_METHOD] 将单次Invert-Classify扩展为生成模型作为持续更新教师的迭代自学习闭环，并引入Select-and-Retrain与面向flow-matching的确定性反演设计，在表达TTS离散标签稀缺这一具体瓶颈上有明确方法新意。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 对Matcha-TTS骨干、条件注入、Invert-Classify反演和迭代循环给出了完整定义，固定t与噪声使flow-matching反演目标稳定，方法整体逻辑自洽且未发现明显推导或假设错误。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 虽覆盖两个任务/数据集、多档低资源与3/10/50训练时长消融，并与single-pass control及100% GT参考比较，但缺少外部SOTA或分类器伪标注基线、统计检验，部分主观CI跨0.5，反演超参未消融，验证集选择与最终评估独立性未说明，且只在单一轻量Matcha-TTS骨干上验证，泛化证据受限。

*   清晰度 (0.8/1)：[A_METHOD][A_RESULTS] 方法流程、关键公式、数据流和实验表组织清晰，评估指标说明较完整，未发现明显影响阅读的符号或图表表达问题。

*   影响力 (0.9/1.5)：[A_SUMMARY][A_RESULTS] 面向表达性TTS的离散表达标签稀缺提出低资源自训练路线，并在情感和prominence低资源条件下显示伪标签与下游控制提升，对语音合成低资源可控性具有实际参考价值。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD][A_OPEN] 论文披露了优化器、学习率、batch size、训练epoch、反演步长/学习率和评估指标，但模型隐藏维度、层数、参数量等仅称沿用Matcha-TTS原设置未具体给出，训练硬件也未说明，复现配置存在缺口。

*   工程/实践价值 (0.8/1.5)：[A_METHOD][A_RESULTS] Select-and-Retrain以验证集伪标签F1选择最佳轮次并从随机初始化重训，配合固定HiFi-GAN vocoder隔离变量，提供了一条工程上可操作的低资源表达TTS伪标注路线，并在多个低资源条件下相对single-pass control取得提升。

### 🚨 局限与问题

1. **论文明确承认的局限**：
   - 只在 Matcha-TTS 骨架上验证，是否适用于更大扩散/LM-based TTS 尚不清楚。
   - 未与外部分类器伪标注或预训练表达分类器管线做公平对比，因为不同分类器架构、监督需求和任务定义差异很大。
   - 极端 0.5% 情感条件下伪标签 F1 保持平坦，说明需要最低限度的监督信号。
   - emo2vec 对合成语音可能存在域偏移，5% ISL 超过 100% GT 参考的合理性存疑。
   - 未研究连续 prominence 表示、valence-arousal-dominance 等替代表达标注方案。
   - 未纳入 confidence-based data selection、adaptive stopping 等 ASR 中常见的自训练正则技术。

2. **审稿人发现的潜在问题**：
   - 方法对反演超参数 \(t=0.9\)、反演学习率和更新步数较敏感，但论文未做消融，读者难以判断跨任务/数据集的可迁移性。
   - 采用验证集 F1 选择最佳伪标签轮次，再用相同验证目标指导后续最终模型，可能导致模型选择偏乐观；论文未明确测试集独立性。
   - 客观提升中多个 TTSDS 子项差距小于 1 分，且没有统计检验；主观 A/B 有些置信区间跨过 0.5，结论强度应更谨慎。
   - 没有与“固定 Invert-Classify 但增加最终训练数据量”之外的更强 control 对比，无法完全区分增益来自伪标签质量提升还是训练数据量增加。
   - prominence 下游表达遵循度缺少可靠自动指标，只依赖主观测试，且部分 pairwise 对比的数量不足以稳定估计小效应。
   - 20% 数据下 ISL 收益消失这一发现未被进一步分析，未讨论该转折点是否随任务/数据集/标签类型变化，也不清楚是否有明确的数据量阈值规律。
   - 论文声称“伪标签准确率是下游控制性的可靠指标”，但该结论主要基于两个任务上的相关性观察，缺少对指标选择偏好的独立性验证，不能排除评价指标与伪标签 F1 之间的耦合。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
