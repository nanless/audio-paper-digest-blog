---
title: "Emotion Across Speech and Faces: Shared Affective Mechanisms in Multimodal Foundation Models"
date: 2026-08-19
draft: false
tags: [音视频理解, 多模态模型, 语音情感识别, 可解释性, 模型评估]
categories: [论文速递]
description: "音视频理解 | 7.4/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.17102"
---

# 📄 Emotion Across Speech and Faces: Shared Affective Mechanisms in Multimodal Foundation Models

标签：#音视频理解 #多模态模型 #语音情感识别 #可解释性 #模型评估

**7.4/10** | 创新 1.5/2 | 严谨 1/1.5 | 实验 0.8/1.5 | 清晰 1/1 | 影响 1/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

✅ **7.4/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音视频理解 | #多模态模型 | #语音情感识别 #可解释性 | [arxiv](https://arxiv.org/abs/2608.17102)


### 👥 作者与机构

- 第一作者：Xiutian Zhao（Johns Hopkins University, Center for Language and Speech Processing (CLSP), USA）
- 通讯作者：未说明
- 作者列表：Xiutian Zhao（Johns Hopkins University, CLSP, USA）、Luqi Sun（Johns Hopkins University, CLSP, USA）、Björn Schuller（Imperial College London, Group on Language, Audio & Music (GLAM), UK）、Berrak Sisman（Johns Hopkins University, CLSP, USA）

### 💡 毒舌点评

这篇论文把语音情感识别里已有的“情感敏感神经元”套路横向搬到了面部表情识别，并靠跨模态置零/放大声称发现了共享的情感功能单元。想法有趣，但因果证据几乎完全建立在“只从模型已经答对的样本里挑神经元”的后验挖掘上；没有统计显著性检验、没有非情感高激活对照、没有关键超参消融，也没有排除“这些神经元只是在编码共享的答案决策变量”这一更平凡的解释。结论是“部分共享”，但论证力度只能支撑“部分相关”，离真正的机制性结论还有距离。

### 📌 核心摘要

论文研究现代多模态基础模型（MFM）在语音与面部情感识别中是否依赖共享的情感功能单元，而非完全独立的模态特定通路。作者以语音情感识别（SER）和面部表情识别（FER）为探针，在 Gemma-4-12B-it、MiniCPM-o-4.5 和 Qwen2.5-Omni-7B 的解码器 MLP 中，用 ConAct 对比激活边距识别“情感敏感神经元”（ESN），并通过去激活（置零）与引导（放大）验证其因果作用。主要发现包括：FER 导出的视觉 ESN 对面部情感识别具有选择性因果效应；SER 导出的声学 ESN 与视觉 ESN 在匹配情感上存在更高的神经元集合重叠，且层分布均偏向中后层；跨模态干预呈现双向因果迁移，声学 ESN 影响 FER、视觉 ESN 影响 SER，且匹配情感效应强于随机掩码。论文据此认为 MFM 的语音与面部情感处理在解码器层面存在部分共享的稀疏组件。局限在于仅覆盖五种情感、两个数据集、未做统计显著性检验与超参消融，且 ESN 从正确样本中选取可能引入后验偏差。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：
  - Gemma-4-12B-it：https://huggingface.co/google/Gemma-4-12B-it（Apache License 2.0）
  - MiniCPM-o-4.5：https://huggingface.co/openbmb/MiniCPM-o-4_5（Apache License 2.0）
  - Qwen2.5-Omni-7B：https://huggingface.co/Qwen/Qwen2.5-Omni-7B（Apache License 2.0）
- 数据集：
  - SER 任务：MSP-Podcast（论文中未给出具体获取链接或开源协议）
  - FER 任务：AffectNet（论文中未给出具体获取链接或开源协议）
- Demo：论文中未提及。
- 复现材料：
  - 附录 A 提供了数据集统计信息（TABLE III）与模型来源/许可证信息（TABLE IV）。
  - 第 IV 节报告了 ESN 识别所用的数据集样本量、提示与解码设置（贪婪解码、temperature=0、最大生成长度 20 tokens）、神经元选择标准（ConAct，top \(r=0.5\%\)）以及干预参数（乘法增益 \(\alpha=0.5\)）。
  - 论文中未提及代码仓库、训练配置文件或检查点下载链接。
- 论文中引用的开源项目：
  - Gemma-4-12B-it：https://huggingface.co/google/Gemma-4-12B-it（Apache License 2.0）
  - MiniCPM-o-4.5：https://huggingface.co/openbmb/MiniCPM-o-4_5（Apache License 2.0）
  - Qwen2.5-Omni-7B：https://huggingface.co/Qwen/Qwen2.5-Omni-7B（Apache License 2.0）

### 🏗️ 方法概述和架构

整体流程可分为四个阶段：情感条件激活采集、ESN 选择、因果干预、结构对齐与跨模态迁移评估。输入为语音片段或人脸图像，并配以多选式情感识别文本提示；模型在冻结权重、贪心解码条件下生成选项索引，完成 SER 或 FER。

**1. 情感条件激活采集。** 论文对三个 MFM 的解码器 MLP 模块进行打点，记录 SwiGLU 结构中 gate 投影经激活函数后的门控输出。对每个任务模态 \(q\in\{\mathrm{SER},\mathrm{FER}\}\) 和情感 \(e\)，只在模型正确识别的样本上采集激活，以减少失败样本噪声。对每个有效 token 位置 \(t\)，用二值掩码 \(m_t\in\{0,1\}\) 排除 padding 与指令 token，计算每个（层 \(l\)、神经元 \(n\)）在情感 \(e\) 下的正激活概率
\[
P_{l,n}^{(q,e)}=\frac{K_{l,n}^{(q,e)}}{T^{(q,e)}}=\frac{\sum_t m_t\mathbb{I}(a_{l,n,t}^{(q,e)}>0)}{\sum_t m_t},
\]
即 gate 输出为正的 token 比例。

**2. ESN 选择。** 采用 ConAct（Contrastive Activation Margin）准则：对每个神经元，找出使其正激活概率最大的情感 \(e_{l,n}^{(1)}(q)=\arg\max_e P_{l,n}^{(q,e)}\)，以及第二大的情感，计算概率差
\[
s_{l,n}^{(q,e)}=
\begin{cases}
P_{l,n}^{(1)}(q)-P_{l,n}^{(2)}(q), & e=e_{l,n}^{(1)}(q),\\
0, & \text{otherwise},
\end{cases}
\]
作为该神经元的 ConAct 得分；仅当该神经元对 \(e^{(1)}\) 的得分最高时才将其分配给该情感。然后对每种情感选取 top \(r=0.5\%\) 的解码器 MLP 神经元，构成声学 ESN 集 \(\mathcal{I}^{(\mathrm{SER},e)}\) 或视觉 ESN 集 \(\mathcal{I}^{(\mathrm{FER},e)}\)。同时构造同等大小的随机神经元掩码作为基线，并在 5 次独立随机采样上取平均。

**3. 因果干预。** 干预直接作用于 gate 向量 \(g_{l,t}=\mathrm{act}(\mathrm{gate\_proj}(x_{l,t}))\)。去激活将选中神经元对应维度置零：\(\tilde{g}_{l,t}^{\mathrm{deact}}=g_{l,t}\odot r_l\)，其中 \(r_{l,n}=0\) 当 \(n\in\mathcal{I}^{(q,e)}\)，否则为 1。引导则将选中维度乘以一个增益：\(\tilde{g}_{l,t}^{\mathrm{steer}}=g_{l,t}\odot s_l(\alpha)\)，其中 \(s_{l,n}(\alpha)=1+\alpha\)（默认 \(\alpha=0.5\)）当 \(n\in\mathcal{I}^{(q,e)}\)，否则为 1。修改后的 gate 向量仍然进入标准 SwiGLU 计算
\[
\mathrm{down\_proj}(\tilde{g}_{l,t}\odot \mathrm{up\_proj}(x_{l,t})),
\]
因此无需重新训练。两种干预互为损失/获得功能测试。

**4. 评估与跨模态迁移。** 同模态验证中，V-ESN 掩码用于 FER、A-ESN 掩码用于 SER；跨模态验证中，A-ESN 掩码应用于 FER、V-ESN 掩码应用于 SER。评价指标为五类情感的非加权平均召回率（UAR），并定义 Self-Emotion（掩码对应情感的识别准确率）、Avg. Cross-Emotion（其余情感的平均准确率）以及 Self-Cross Gap。结构对齐分析则计算 A-ESN 与 V-ESN 之间的 Jaccard 相似度，并按解码器层统计 ESN 分布。

设计上，选择 decoder MLP 而非注意力头，是因为 MLP 层是多模态表示在生成文本前经过的大规模非线性变换；使用 gate 激活而非 down 投影输出，是因为 gate 的正激活模式更稀疏、更易于解释。随机选项顺序与仅输出选项索引的设计旨在削弱输出词元的词汇混淆，但作者也承认模型仍可能在中后层编码类别决策变量。

### 💡 核心创新点

1. **将情感敏感神经元分析从语音拓展到视觉。** 已有工作主要在音频-语言模型中发现并验证 SER 的 A-ESN；本文首次在 FER 任务中识别出视觉 ESN，并通过去激活/引导证明其对面部情感识别具有选择性因果作用。

2. **揭示声学 ESN 与视觉 ESN 的结构对齐。** 尽管两种 ESN 来自不同数据集、输入模态和任务，但相同情感类别的神经元集合之间存在更高的 Jaccard 重叠，且层分布均偏向中后层，提示二者在解码器中并非完全独立。

为说明声学 ESN 与视觉 ESN 的集合重叠，下图给出了 MiniCPM-o-4.5 上两类神经元的 Jaccard 相似度矩阵。

![(b) MiniCPM-o-4.5](https://arxiv.org/html/2608.17102v1/figures/overlap/CrossModal_MiniCPM-o-4_5_CAM_100_top0.005_JSC.png)

对角线单元格的 JSC 值高于非对角线，反映相同情感的跨模态神经元集合存在更高的重叠，但绝对重叠值仍然较小。

3. **展示跨模态双向因果迁移。** A-ESN 干预会影响 FER，V-ESN 干预也会影响 SER，并且匹配情感上的效应明显强于随机掩码；这为“共享情感功能单元”提供了超越相关性的因果证据。

4. **提出可复用的跨模态可解释性流程。** 将 ConAct 选择、零参数去激活/引导与多选情感评测结合，形成一套无需训练即可定位并操控 MFM 内部情感组件的方法。

5. **聚焦多模态基础模型中的情感机制。** 与单模态可解释性工作不同，本文直接比较语音与面部两条通路的内部表示，为理解 MFM 如何组织跨模态情感信息提供了新的视角。

### 📊 实验结果

论文在三个开源 MFM 上进行了单模态与跨模态实验。原文在去激活与引导两种设置下分别报告了无干预 UAR，表中用“/”分隔对应数值。

下图展示了同模态去激活实验中，Gemma-4-12B-it 的面部情感神经元（V-ESN）对各类别识别准确率的影响。

![(a) Deactivation, Gemma-4-12B-it](https://arxiv.org/html/2608.17102v1/figures/mono/FER_AffectNet_to_AffectNet_gemma4_CAM_100_top0.005_ablate_Accuracy.png)

主对角线上的情感类别出现显著负向变化，而随机掩码行接近零，说明 V-ESN 对对应面部情感具有较强的选择性因果效应。

**表1：同模态 ESN 干预的 Self-Cross Gap（单位：UAR 百分点）**

| 模型 | 任务 | 未掩码 UAR | 去激活 Gap | 引导 Gap |
|---|---|---|---|---|
| Gemma-4-12B-it | FER (V-ESN) | 60.47 / 60.13 | -28.33 | +21.01 |
| Gemma-4-12B-it | SER (A-ESN) | 35.87 / 35.65 | -16.30 | +12.27 |
| MiniCPM-o-4.5 | FER (V-ESN) | 64.00 / 63.99 | -11.16 | +4.80 |
| MiniCPM-o-4.5 | SER (A-ESN) | 27.47 / 27.33 | -7.00 | +4.66 |
| Qwen2.5-Omni-7B | FER (V-ESN) | 48.60 / 47.76 | -10.65 | +3.88 |
| Qwen2.5-Omni-7B | SER (A-ESN) | 36.93 / 36.83 | -13.47 | +4.60 |

表 2 展示了跨模态干预：用 A-ESN 掩码作用于 FER、用 V-ESN 掩码作用于 SER。Gemma-4-12B-it 上的跨模态效应最显著，其余模型也呈现一致的匹配情感效应，且随机掩码接近零效应。

跨模态干预的情感选择性还可以通过逐类别热力图来观察，下图以 MiniCPM-o-4.5 上从语音情感神经元（A-ESN）迁移到面部情感识别（FER）的去激活实验为例。

![(a) Deactivation, A-ESN on FER](https://arxiv.org/html/2608.17102v1/figures/cross/FER_MSP-PODCAST-Publish-1.12_to_AffectNet_mini_CAM_100_top0.005_ablate_Accuracy.png)

图中匹配情感位置的变化幅度整体大于随机掩码及非匹配情感，说明声学 ESN 的干预能够部分影响面部情感判断。

**表2：跨模态 ESN 干预的 Self-Cross Gap（单位：UAR 百分点）**

| 模型 | 目标任务 | 未掩码 UAR | 去激活 Gap | 引导 Gap |
|---|---|---|---|---|
| Gemma-4-12B-it | FER with A-ESN | 60.47 / 60.13 | -18.93 | +8.28 |
| Gemma-4-12B-it | SER with V-ESN | 35.87 / 35.65 | -9.37 | +4.87 |
| MiniCPM-o-4.5 | FER with A-ESN | 64.00 / 63.99 | -5.06 | +2.08 |
| MiniCPM-o-4.5 | SER with V-ESN | 27.47 / 27.33 | -4.87 | +3.80 |
| Qwen2.5-Omni-7B | FER with A-ESN | 48.60 / 47.76 | -6.47 | +4.40 |
| Qwen2.5-Omni-7B | SER with V-ESN | 36.93 / 36.83 | -8.43 | +3.36 |

结构分析方面，A-ESN 与 V-ESN 的 Jaccard 相似度矩阵呈现对角占优：相同情感的跨模态神经元集合重叠高于不同情感，但绝对值较小（因只选 top 0.5%）。层分布热力图显示 ESN 稀疏地分布在中后层，早期层较少，且三种模型的 FER/SER 分布轮廓大致相似。其中 Gemma-4-12B-it 的 ESN 分布相对弥散，MiniCPM-o-4.5 集中于中后段，Qwen2.5-Omni-7B 则呈现更集中的中间层条带。

下图以 MiniCPM-o-4.5 为例，展示了从 FER 任务识别出的视觉 ESN 在解码器各层的分布情况。

![图1](https://arxiv.org/html/2608.17102v1/figures/layers/layer_dist_emotions_MiniCPM-o-4_5_AffectNet_CAM_100_log.png)

颜色深浅表示各层中不同情感 ESN 的数量（对数尺度），可见 ESN 主要稀疏地分布在中后层，早期层相对较少。

### 🔬 细节详述

- **训练数据**：论文未进行模型训练，仅使用预训练 MFM 做零样本推理。所用数据集为 MSP-Podcast（SER）与 AffectNet（FER），均限制在愤怒、恐惧、快乐、中性、悲伤五类情感。附录 TABLE III 给出的原始类别规模为：愤怒 36,260 / 25,382、恐惧 1,943 / 6,878、快乐 58,684 / 134,915、中性 79,117 / 75,374、悲伤 24,629 / 25,259（SER / FER）。
- **样本设置**：ESN 识别时从正确识别样本中每类情感抽取 100 例；评测时 SER 每类 150 条、FER 每类 300 张。数据集整体类别分布极不平衡，但评测/识别子集按类采样。
- **损失函数**：不适用；无训练。
- **训练策略/优化器**：不适用；模型冻结。
- **关键超参数**：ESN 选择比例 \(r=0.5\%\)；引导增益 \(\alpha=0.5\)；贪心解码温度 0；最大生成长度 20 个 token；选项顺序随机化。
- **训练硬件**：未说明。
- **推理细节**：确定性贪心搜索；模型被指令只输出选项索引（字母），输出经轻量后处理提取索引。
- **正则化/稳定技巧**：未说明。
- **激活收集细节**：记录所有解码器 MLP 的 SwiGLU gate 输出；使用二值掩码排除 padding 与指令 token；以 gate 值为正的比例作为激活概率。
- **随机性控制**：数据集采样与选项顺序使用固定种子；随机掩码结果取 5 次独立采样平均。

### ⚖️ 评分理由

* 创新性 (1.5/2)：[A_METHOD] [SCORING_SOURCE_5/17] 将语音情感识别中的 ESN 分析首次拓展到面部情感识别，并提出跨模态因果迁移分析，揭示多模态基础模型中语音与面部情感处理可能共享稀疏解码器组件；但 ConAct 与置零/引导干预主要基于已有工具，创新幅度中等。

* 技术严谨性 (1.0/1.5)：[A_RIGOR]  方法采用去激活与引导互为补充的功能测试，并设置同等大小随机掩码作对照，整体逻辑自洽；但 ESN 仅从模型正确识别的样本中选取，可能偏向后验决策路径，且作者承认后期层 ESN 可能编码类别决策变量，因果解释力度受限。

* 实验充分性 (0.8/1.5)：[A_RESULTS]  实验在三个开源 MFM 上覆盖同模态与跨模态场景，但缺少统计显著性检验、置信区间与多重比较校正，也未对关键超参 r、α、每类样本量进行敏感性分析，且缺乏非情感高激活对照和打乱标签等更严格控制。

* 清晰度 (1.0/1)：[A_CLARITY]  论文对 ESN 识别、ConAct 得分、去激活/引导干预及跨模态评估指标的定义与流程描述清晰，图表与公式可对应；部分因果推断局限在结论中虽有说明，但对后验选择偏差的讨论可更前置。

* 影响力 (1.0/1.5)：[A_IMPACT] [SCORING_SOURCE_1/17] 研究面向语音与面部情感识别这一核心情感计算任务，对理解多模态基础模型内部跨模态情感组织机制具有启发；但受限于仅五种情感、两个数据集及概念验证性质，广泛影响仍较有限。

* 开源 (1.0/1.5)：[A_OPEN]  论文评估的三个 MFM 均给出 HuggingFace 链接与 Apache 2.0 许可证，但论文未提供自身代码仓库、完整提示模板、数据集获取链接或 Demo，核心产物仅部分开放。

* 可复现性 (0.3/0.5)：[A_REPRO]  论文披露了神经元选择比例 r=0.5%、引导增益 α=0.5、贪心解码、每类样本量及随机掩码设置，但缺少完整提示模板、随机种子、硬件信息以及可下载的代码或检查点，复现仍有明显障碍。

* 工程/实践价值 (0.8/1.5)：[A_ENGINEERING]  提出的零训练干预流程可直接在现有 MFM 上定位并操控情感相关神经元，为可解释性与可控情感计算提供了潜在工程路径；但缺乏真实场景验证与部署评估，实践价值仍处于概念阶段。

### 🚨 局限与问题

**主要局限包括：**
- 仅研究五种共享情感类别，未覆盖更细粒度或维度化的情感空间。
- 中性表情/情感的 ESN 模式较弱，因为中性更接近情感缺失而非明确的情感类别。
- 后期层的 ESN 可能部分编码类别决策变量或答案选择过程，需谨慎解释为“感知层面”的共享单元。
- 跨模态转移是部分的，效应量小于同模态，说明共享程度有限。

**审稿人发现的潜在问题：**
- 缺少统计显著性检验、置信区间与多重比较校正，Self-Cross Gap 的可靠性难以判断。
- 仅使用模型已正确识别的样本进行 ESN 选择，可能使 ESN 偏向后验决策路径，而非真正的情感感知表征。
- 随机掩码基线过于简单，应补充高激活非情感控制、打乱情感标签控制等更严格对照。
- 关键超参数（\(r\)、\(\alpha\)、每类样本数）未做敏感性分析。
- 所用数据集原始类别分布极不平衡，虽在子集中平衡采样，但仍可能受原始分布影响。
- 跨模态共享的证据可能被共享的情感标签/答案处理所驱动，论文对此的排除不够彻底。
- 未公开代码与完整提示模板，削弱了可复现性。

---

[← 返回 2026-08-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-19/)
