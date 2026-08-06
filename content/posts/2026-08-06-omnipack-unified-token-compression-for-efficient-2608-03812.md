---
title: "OmniPack: Unified Token Compression for Efficient Omni-modal Large Language Models"
date: 2026-08-06
draft: false
tags: [音视频理解, 模型压缩, 音频理解, Transformer, 模型评估]
categories: [论文速递]
description: "音视频理解 | 7.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.03812"
---

# 📄 OmniPack: Unified Token Compression for Efficient Omni-modal Large Language Models

标签：#音视频理解 #模型压缩 #音频理解 #Transformer #模型评估

**7.7/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **7.7/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #音视频理解 | #模型压缩 | #音频理解 #Transformer | [arxiv](https://arxiv.org/abs/2608.03812)


### 👥 作者与机构

作者列表：Wanshun Su, Yang Shi, Feihu Liu, Ziwen Yu, Yan Min, Zhuoran Zhang, Qixun Wang, Haotian Wang, Shixuan Liu, Yuanxing Zhang, Peng Wu, Chengfu Huo, Liang Ding。  
标注信息：Wanshun Su 与 Yang Shi 为共同一作；Peng Wu 与 Liang Ding 为通讯作者。  
机构信息：1. Northwestern Polytechnical University；2. Peking University；3. Alibaba Group；4. Tsinghua University。  
开源链接：https://github.com/RowanSu/OmniPack

### 💡 毒舌点评

OmniPack 名义上是“统一压缩”，实际上是把重要性选择、DPC-KNN、token merging、文本注意力引导、音视频协同等一堆模块拼成两阶段流水线；真正能打的是它把实验铺得很满：3 个 backbone、5 个 benchmark、4 组保留率。可一旦看到 25% 保留率下相对原模型只掉了 2 个点，却号称 FLOPs 降到 16.7%，就明白“效率优势”主要是靠极低保留率换来的。更不用说压缩模块自身的 DPC-KNN 和合并开销完全没被计入 FLOPs，表 3 里 OmniPack 的 prefill 耗时反而比同量级 FLOPs 的 SEATS 更慢。好在低 token 预算下性能确实稳，勉强配得上这个分数。

### 📌 核心摘要

OmniPack 面向 Omni-modal 大语言模型推理中的视觉与音频 token 冗余问题，提出免训练（training-free）的统一 token 压缩框架。它在进入 LLM 之前通过模态特定重要性选择、全局覆盖选择和相似性感知合并去除结构冗余；在多模态交互充分的中间层内，再通过文本引导和音视频协同进一步聚合任务相关 token。在 Qwen2.5-Omni-7B 上，25% 保留率时 OmniPack 保留 98.0% 的原始性能，FLOPs 降至 16.7%；在 15%/7.5% 保留率时保留 95.6% 的原始性能，FLOPs 降至 10.0%；在 10%/5% 保留率时仍保留 92.9% 的原始性能，FLOPs 仅占 6.8%。在 Qwen2.5-Omni-3B 和 MiniCPM-o-2.6 上也取得了稳定的性能–效率权衡。

下图给出了 OmniPack 在五个基准上与现有方法的性能对比。

![Figure 1: Performance comparison on Qwen2.5-Omni-7B across five benchmarks. SEATS variants and OmniPack further reduce tokens from 15% to 7.5%, with OmniPack achieving the best overall performance.](https://arxiv.org/html/2608.03812v1/x2.png)

径向图中各扇区对应 AVUT、WorldSense、DailyOmni、VideoMME 与 LVOmniBench 的得分，OmniPack 在多数基准上取得最高或接近最高的平均分，体现了低 token 预算下的性能保持能力。

### 🔗 开源详情

论文首页提供了项目链接：https://github.com/RowanSu/OmniPack。  
根据机器摘要信息：has_code = 是，说明代码已公开；has_model = 否，表示未提供模型权重；has_dataset = 否，表示未提供数据集。  
开源协议、完整复现脚本依赖、预训练模型下载方式等细节在给定原文片段中未披露。

### 🏗️ 方法概述和架构

OmniPack 是一个面向 Omni-Modal 大语言模型的免训练（training-free）统一 token 压缩框架。其核心出发点是：视觉与音频输入经过编码器和投影器后会生成远长于文本的 token 序列，直接送入 LLM 会产生巨大的计算开销；而有效的压缩不能只在单一位置完成，而是需要在“进入 LLM 之前”和“LLM 内部经过充分多模态交互后”分别进行。因此，OmniPack 的整体处理链路为：

**输入**：视频帧与音频流分别由预训练视觉/音频编码器及模态投影器转换为视觉 token 序列 \(\mathbf{x}^v\) 和音频 token 序列 \(\mathbf{x}^a\)，与文本指令 token 序列共同构成 Omni-LLM 的输入。

**处理**：首先在进入 Omni-LLM 的 Transformer 之前，执行 Pre-LLM 压缩；然后在 Transformer 的特定中间层，执行 Inner-LLM 压缩。两个阶段均不更新任何参数。

下图展示了 OmniPack 两阶段压缩的整体框架。

![Figure 2: Overview of the OmniPack framework. Before the LLM, modality-specific compression performs importance selection, coverage selection,](https://arxiv.org/html/2608.03812v1/x3.png)

图中依次包含编码器与投影器、Pre-LLM 模态特定压缩（重要性选择、覆盖选择、相似性合并）以及 Inner-LLM 查询条件压缩，完整呈现了从原始音视频 token 到紧凑任务相关 token 的数据流。


**输出**：压缩后的音视频 token 与文本 token 继续经过剩余 Transformer 层，最终由语言模型头生成文本回答。

在 OmniPack 中，Pre-LLM 压缩的目标是去除“结构性冗余”。由于此时模型尚未见过文本指令，压缩只能依赖音视频 token 自身的特征与时空结构。为此，Pre-LLM 阶段由三个子模块组成：

下图进一步可视化了 Pre-LLM 与 Inner-LLM 两个阶段对音视频 token 的实际压缩过程。

![Figure 4: Visualization of the Pre-LLM and Inner-LLM token compression process.](https://arxiv.org/html/2608.03812v1/x5.png)

左侧音频压缩与右侧视频压缩均显示，Inner-LLM 在 Pre-LLM 基础上进一步降低冗余，且不同时间组的压缩程度存在明显差异。


该模块对视觉和音频 token 分别计算重要性得分，目的是保留最显著、最能代表局部结构的 token。不同模态拥有不同的特征分布和冗余模式，因此视觉与音频使用各自的得分函数，而不是共享同一个全局得分。对模态 \(m \in \{v, a\}\)，重要性选择输出一个集合：

\[
\mathcal{S}_{\mathrm{imp}}^m
\]

其中包含该模态下重要性得分最高的 token。这个集合保证了高显著性的局部证据不会在压缩初期被丢弃。

仅靠重要性选择会倾向于保留彼此相邻、特征相似的 token，从而丢失在时间或空间上分散但在下游任务中可能关键的证据。为弥补这一点，OmniPack 引入全局覆盖选择。其核心是联合距离（joint distance）：

\[
d_{ij}^m = 1 - \cos\left(\mathbf{x}_i^m, \mathbf{x}_j^m\right) + \lambda d_{ij}^{m,\mathrm{pos}}
\]

其中 \(d_{ij}^{m,\mathrm{pos}}\) 表示归一化后的位置距离：对音频是时间距离，对视频是时空距离；\(\lambda\) 控制位置距离的贡献。该距离同时考虑特征相似性与结构邻近性，避免两个特征相似但位置相距很远的 token 被误判为可互相替代。

基于该联合距离，模块采用 DPC-KNN（Density Peaks Clustering with K-Nearest Neighbors）识别“局部密度高、且与更高密度区域距离远”的代表性 token。DPC-KNN 是一种无需训练的聚类式选点方法：它估计每个 token 周围邻域密度，并根据与密度更高 token 的距离计算分离度，从而找到既能代表局部邻域、又分布在不同时空区域的“密度峰”。这些候选 token 在重要性集合 \(\mathcal{S}_{\mathrm{imp}}^m\) 之外，按照排名从高到低填充剩余 token 预算，形成覆盖集合：

\[
\mathcal{S}_{\mathrm{cov}}^m
\]

于是 Pre-LLM 阶段最终保留的 token 集合为：

\[
\mathcal{S}_{\mathrm{pre}}^m = \mathcal{S}_{\mathrm{imp}}^m \cup \mathcal{S}_{\mathrm{cov}}^m, \quad |\mathcal{S}_{\mathrm{pre}}^m| = K_m
\]

也就是说，重要性选择保证“显著证据不丢”，覆盖选择保证“全局时空分布不偏”。

对于没有被选入 \(\mathcal{S}_{\mathrm{pre}}^m\) 的 token，OmniPack 并没有直接丢弃，而是将其信息迁移到被保留的代表 token 上。具体而言，每个被丢弃的 token 会依据与代表 token 的特征余弦相似度和联合距离被分配到最相近的代表 token；然后代表 token 以加权平均的方式吸收这些被丢弃 token 的信息。合并权重同时考虑特征距离和位置距离，因此可以避免把两个相距很远但表面相似的 token 强行融合。这样，Pre-LLM 压缩后的 token 不仅数量减少，还保留了原本被丢弃 token 的部分语义。

在实现中，Pre-LLM 压缩不是简单地将视觉和音频按照同一个比例统一保留，而是根据 backbone 和总压缩率 \(R\) 使用模型特定的“视觉/音频 token 分配”。例如，当总保留率为 25% 时，不同模型会采用各自不同的视觉分配和音频分配比例；当总保留率为 15% 或 10% 时，同样按照模态差异分配。该设计的动机是：视觉和音频在不同 Omni-LLM 中的 token 数量、编码方式和冗余程度差异很大，统一比例会浪费某一模态的预算。

Pre-LLM 压缩完成后，剩余音视频 token 与文本 token 一起进入 Omni-LLM 的 Transformer 层。在经过一定层数的多模态交互后（Qwen2.5-Omni-7B 和 MiniCPM-o-2.6 上为第 18 层，Qwen2.5-Omni-3B 上为第 26 层），OmniPack 执行 Inner-LLM 压缩。这一阶段的目标是去掉“任务不相关”的语义冗余。

在 Transformer 的中间层，音视频 token 已经通过自注意力与文本 token 发生交互，因此可以获取文本指令的信息。Inner-LLM 压缩利用文本端表示计算每个音视频 token 与当前任务的相关性，例如对文本端 token 进行注意力汇聚得到一个指导向量，再与该层音视频 token 的隐藏状态计算相似度。相关性高的 token 更可能包含回答问题所需证据，因此在后续选择中会被保留。

除文本引导外，Inner-LLM 压缩还利用音频与视觉之间的跨模态关系。许多任务要求将声音事件与画面内容对应起来，例如判断“画面中的物体是否发出了对应声音”。OmniPack 通过比较音频 token 与视觉 token 的交互/对齐程度来增强这类跨模态信息。若一个音频 token 与多个关键视觉 token 高度相关，则它更可能是承载音视频联合事件的关键证据，反之亦然。该模块使压缩过程不再孤立地处理每种模态，而是利用模态间的一致性来筛选任务相关信息。

在文本引导和音视频协同的基础上，OmniPack 对每个剩余音视频 token 计算综合保留得分，再结合局部密度/邻域代表性进行选择与合并，最终在 Inner-LLM 层保留 Pre-LLM 阶段 token 数量的 50%。也就是说，表中所写的“15% / 7.5%”表示 Pre-LLM 保留原始 token 的 15%，Inner-LLM 再保留其中的 50%，最终进入后续层的音视频 token 只占原始数量的 7.5%。

### 数据流与模块交互
原文的架构图（图 4）直观展示了两阶段压缩过程：左侧为 Pre-LLM 压缩，原始稠密音视频 token 先经过重要性和覆盖性排序，选出代表 token，未选 token 再通过合并操作把信息注入代表 token；右侧为 Inner-LLM 压缩，在若干层 Transformer 交互后，剩余 token 在文本引导与音视频协同作用下进一步聚合，形成更紧凑但任务相关的 token 集合，随后继续参与后续层计算。

整个 OmniPack 的设计选择可以总结为三点：

- **两阶段压缩**：Pre-LLM 阶段无法访问文本任务信息，因此依赖模态自身的结构信息；Inner-LLM 阶段已经过文本和多模态交互，因此依赖语义相关性。二者互补，避免了“只在前端压缩导致任务关键证据丢失”和“只在内部压缩导致前期计算浪费”的问题。
- **选择与合并结合**：重要性/覆盖性选择负责找到代表性 token，相似性感知合并负责将未选 token 的信息保留下来，压缩不是简单的随机采样或硬性删除。
- **免训练部署**：OmniPack 不引入额外训练，也不改动 Omni-LLM 参数，只需给定保留比例、覆盖选择参数和合并参数即可部署到不同 backbone 上。实验中默认参数包括 \((\eta_v, \eta_a) = (0.25, 0.35)\)、\(\lambda = 0.20\)，合并参数为 \((\tau_v, \tau_a) = (0.10, 0.05)\)、\(\zeta = 0.10\)。

### 💡 核心创新点

- **两阶段免训练压缩框架**：将压缩拆分成 Pre-LLM 的结构压缩与 Inner-LLM 的任务相关语义压缩，分别处理“结构性冗余”和“任务不相关冗余”，并保持 Omni-LLM 参数不变。
- **Pre-LLM 端的三重结构保留策略**：模态特定重要性选择保证显著证据不被丢弃；全局覆盖选择通过 DPC-KNN 和联合距离维持全局时空分布；相似性感知合并将未选 token 信息融入代表 token，避免硬性删除。
- **Inner-LLM 端的查询条件压缩策略**：文本引导引入任务相关性，音视频协同引入跨模态一致性；二者结合使压缩后的 token 更适合下游问答。
- **统一的模型特定模态预算分配**：针对不同 Omni-LLM 的视觉/音频 token 数量和 tokenization 差异，分别设置视觉与音频保留比例，而不是简单使用全局统一比例。
- **极强的低预算性能保持能力**：在多个 backbone 和保留率下，尤其在 10%–15% 极低保留率下，OmniPack 仍能保持 92%–96% 的原始性能，优于现有方法。

下图以具体样例展示了 25% 保留率下 OmniPack 相较于 SEATS⋆ 的优势。

![Figure 5: Qualitative comparison at the 25% pre-LLM retention ratio. (a) SEATS⋆\\star misses key tokens and answers incorrectly. (b) OmniPack preserves them and answers correctly.](https://arxiv.org/html/2608.03812v1/x6.png)

SEATS⋆ 在关键帧丢失了与“应用打开后播放歌曲”相关的 token 而答错；OmniPack 保留了这些跨模态关键证据，从而给出正确答案。

### 📊 实验结果

- 原始 Qwen2.5-Omni-7B：FLOPs 73.2T，平均分 54.6，相对性能 100%。
- 25% / 12.5% 保留率：OmniPack 平均分 53.5，相对性能 98.0%，FLOPs 12.2T（16.7%）；OmniPack (w/o M) 平均分 53.6，相对性能 98.2%，FLOPs 14.9T（20.4%）。
- 20% / 10% 保留率：OmniPack 平均分 52.9，相对性能 96.9%，FLOPs 9.8T（13.3%）。
- 15% / 7.5% 保留率：OmniPack 平均分 52.2，相对性能 95.6%，FLOPs 7.3T（10.0%）；OmniPack (w/o M) 平均分 52.0，相对性能 95.2%，FLOPs 8.9T（12.1%）。
- 10% / 5% 保留率：OmniPack 平均分 50.7，相对性能 92.9%，FLOPs 5.0T（6.8%）；OmniPack (w/o M) 平均分 50.8，相对性能 93.0%，FLOPs 6.0T（8.2%）。
- 在所有保留率设置下，OmniPack 均取得现有方法中最优或接近最优的性能–效率权衡；在极端压缩时显著优于 Random、VisionZip-om、OmniSIFT∘ 和 SEATS 变体。

### 跨 backbone 结果（Table 2 与 Appendix Table 10）
- Qwen2.5-Omni-3B：15% / 7.5% 保留率下，OmniPack 平均分 49.6，相对性能 92.7%，FLOPs 3.4T（9.0%）。
- MiniCPM-o-2.6：15% / 7.5% 保留率下，OmniPack 平均分 47.9，相对性能 100.8%，FLOPs 7.3T（10.0%）。
- Appendix Table 10 补充显示，在 Qwen2.5-Omni-3B 上，OmniPack 在 25%、20%、10% 保留率下分别保持 95.0%、93.8%、89.5% 的原始性能，FLOPs 分别降至 15.5%、12.2%、6.1%；在 MiniCPM-o-2.6 上，25% 和 20% 保留率下分别达到 103.8% 和 103.4% 的原始性能，10% 保留率下保持 96.4%，FLOPs 降至 6.8%。

### 效率分析（Table 3）
- 在 Qwen2.5-Omni-7B 上，25% 保留率时 OmniPack (w/o M) 保持 98.2% 性能，FLOPs 降低 4.9 倍。
- 15% / 7.5% 保留率下，OmniPack 保持 95.6% 性能，FLOPs 降低 10.0 倍，prefill 加速 4.5 倍，并优于所有仅做 Pre-LLM 压缩的 25% 保留率方法。

### 消融实验（Tables 4–7）
- Pre-LLM 压缩中，全局覆盖选择在单独组件中表现最佳：相比重要性选择，在 WorldSense 和 LVOmniBench 上分别提升约 3.4% 和 6.1%；相比 token merging，分别提升 3.4% 和 3.0%。三者组合效果最好。
- 音视频协同消融：加入 A-V Collaboration 后，AVUT 从 57.8 提升到 58.1，WorldSense 从 44.5 提升到 44.6，DailyOmni 从 57.8 提升到 58.2。
- 文本引导机制消融：OmniPack 的 Text-Aware Guidance 在 AVUT / WorldSense / DailyOmni 上分别为 58.1 / 44.6 / 58.2，优于 General Query 和 Last-Token Attention。
- 与现有方法组合兼容性：将 OmniPack 的 Inner-LLM 压缩与 VisionZip-om、OmniSIFT∘、SEATS 等 Pre-LLM 方法组合时，性能仍有提升；完整 OmniPack 平均分 52.2，优于大多数组合。

### 参数敏感性（Table 15）
- 对 \((\eta_v, \eta_a)\)、\(\lambda\)、\((\tau_v, \tau_a)\)、\(\zeta\) 的敏感性分析显示，所有测试配置均优于现有方法；\(\lambda\) 变化最多造成 1.0 分差异，\((\tau_v, \tau_a)\) 和 \(\zeta\) 的变化分别控制在 0.5 分和 0.2 分以内。

### 🔬 细节详述

五个 benchmark 共包含 4,212 个视频和 9,817 个 QA 对：
- AVUT：使用 OmniZip 设置下的人类标注子集，691 个视频、1,734 个 QA 对，平均时长 69.1 秒；完整 AVUT 含 2,662 个视频和 11,609 个 QA 对。
- WorldSense：1,662 个同步音视频、3,172 个 QA 对，平均时长 140.7 秒。
- DailyOmni：684 个视频、1,197 个 QA 对，平均时长 43.2 秒。
- VideoMME：900 个视频、2,700 个 QA 对，平均时长 1,017.9 秒。
- LVOmniBench：275 个长视频、1,014 个 QA 对，平均时长 2,069.7 秒。

### 实现细节
- 模型：Qwen2.5-Omni-3B/7B、MiniCPM-o-2.6；硬件为 NVIDIA H20 GPU。
- 最大帧数：AVUT / WorldSense / DailyOmni 为 128，VideoMME / LVOmniBench 为 768。
- Pre-LLM 保留率：25%、20%、15%、10%，按模型使用不同的视觉/音频分配；Inner-LLM 保留 Pre-LLM token 的 50%，压缩层为 Qwen2.5-Omni-7B 和 MiniCPM-o-2.6 的第 18 层、Qwen2.5-Omni-3B 的第 26 层。
- 模型特定的视觉-音频分配：Qwen2.5-Omni 与 MiniCPM-o-2.6 的音频/视频 tokenization 差异很大，因此使用不同的 token 预算分配，具体见原文 Table 9。
- 评估工具：LMMs-Eval。
- 默认参数：\((\eta_v, \eta_a)=(0.25, 0.35)\)，\(\lambda=0.20\)，\((\tau_v, \tau_a)=(0.10, 0.05)\)，\(\zeta=0.10\)。

### 对比方法设置
- FastV：在第 2 个 LLM block 后按最后一个文本 token 的注意力分数剪枝；FastV-om 将同样策略应用到音频 token。
- VisionZip：使用 encoder attention 选择 dominant token，可额外做 contextual merging；实验中 contextual-token ratio 设为 0，所有预算分配给 dominant tokens；VisionZip-om 扩展至音频。
- FastVID：根据相邻帧相似度动态分段并分配视觉 token 预算，最小分段数 \(c=8\)，分段阈值 \(\tau=0.84\)，anchor-frame step \(p=4\)，非关键帧 token 预算缩放 0.7。
- VidCom2：基于多尺度高斯相似度识别特征离群 token 作为信息性 token。
- OmniZip：使用音频 encoder attention 选择 dominant audio tokens，并保留 5% contextual representatives；在 \(R=25\%\) 时因视频最大丢弃率限制，视觉和音频均设为 25%。
- OmniSIFT∘：OmniSIFT 的 inference-time 压缩版本，不做 alignment training。
- SEATS：SEATS† 使用原始配置；SEATS⋆ 关闭 late-layer token removal；两者都匹配最终模态保留率，且只在 28 层模型 Qwen2.5-Omni-7B 和 MiniCPM-o-2.6 上评估。

### 计算量评估方式
- 每层 prefill 成本近似为 \(4nd^2 + 2n^2d + 2ndm\)。
- 解码成本按生成 \(\mathcal{R}=100\) 个 token 估算。
- 总 FLOPs 公式按不同层的有效多模态序列长度累加；视觉/音频编码器、模态投影器、文本 token、token 选择操作和语言模型头不计入 FLOPs。
- 因此，DPC-KNN、重要性排序、合并等压缩模块自身的计算未包含在 FLOPs 数字中；表 3 的 prefill 时间是端到端测量，可部分反映额外开销。

### ⚖️ 评分理由

*   创新性 (1.2/2)：提出面向 Omni-LLM 的两阶段免训练统一 token 压缩，将 Pre-LLM 结构压缩与 Inner-LLM 的文本/音视频协同压缩结合，并给出模型特定模态预算分配（[A_METHOD][SCORING_SOURCE_1/26]）；但框架中的重要性选择、DPC-KNN、合并与注意力引导多为既有组件集成，新意主要体现在系统化组织（[A_METHOD][SCORING_SOURCE_7/26]）。

*   技术严谨性 (1.0/1.5)：两阶段压缩流程、联合距离、合并权重及免训练设定均有完整公式与逻辑链（[A_METHOD][SCORING_SOURCE_7/26]）；但效率口径将 token-selection/DPC-KNN/合并开销排除在 FLOPs 外，且表3中 OmniPack 的 prefill 耗时并不低于同 FLOPs 的 SEATS，效率声明存在口径漏洞（[SCORING_SOURCE_21/26][SCORING_SOURCE_13/26][A_LIMITS]）。

*   实验充分性 (1.1/1.5)：实验覆盖五个 benchmark、三个 Omni-LLM 骨干、多个保留率，并包含组件消融、参数敏感性和组合兼容性，跨数据集泛化证据较强（[A_RESULTS][SCORING_SOURCE_13/26][SCORING_SOURCE_14/26]）；但缺少统计检验/误差分析，SEATS 未在 Qwen2.5-Omni-3B 上评估，部分基线经适配后比较，跨模型公平性有限（[A_LIMITS][SCORING_SOURCE_10/26]）。

*   清晰度 (0.8/1)：方法按输入-处理-输出展开，Pre-LLM/Inner-LLM 边界清楚，公式、图4和主表能相互对应（[A_METHOD][SCORING_SOURCE_7/26][SCORING_SOURCE_11/26]）；但模型特定视觉/音频预算分配仅在附录 Table 9 给出，正文需依赖附录才能完整理解配置（[SCORING_SOURCE_17/26]）。

*   影响力 (1.0/1.5)：音频是本方法处理的两大核心模态之一，方法直接面向 Omni-modal 音频-视觉理解推理，领域相关性高；在 Qwen2.5-Omni-7B 上可保留 98.0%/92.9% 性能并显著降 FLOPs，对相关部署有实际价值（[SCORING_SOURCE_1/26][A_RESULTS]）；但应用面限于三个 backbone，对其他架构适用性未知（[A_LIMITS]）。

*   开源 (1.2/1.5)：论文首页提供 GitHub 链接且 has_code=是，核心代码已开放；但未披露开源协议，项目文档不完整，按固定锚点给 1.2（[A_OPEN][A_LIMITS]）。

*   可复现性 (0.3/0.5)：论文披露了 backbone、NVIDIA H20、最大帧数、保留率、默认压缩参数与 LMMs-Eval 等，大部分复现配置充分（[SCORING_SOURCE_10/26][A_METHOD]）；但完整依赖清单、预训练模型下载方式和端到端复现步骤未给出，属少量关键缺失（[A_OPEN][A_LIMITS]）。

*   工程/实践价值 (1.1/1.5)：免训练、不更新 Omni-LLM 参数，15%/7.5% 保留率下 FLOPs 降 10 倍、prefill 加速 4.5 倍，部署收益明确（[A_RESULTS][SCORING_SOURCE_13/26]）；但视觉/音频预算需按 backbone 手工配置，Inner-LLM 压缩层固定，限制即插即用的工程灵活性（[A_LIMITS][SCORING_SOURCE_17/26]）。

### 🚨 局限与问题

- 压缩模块自身开销未被完全透明化：FLOPs 公式明确排除了 token-selection 操作，DPC-KNN、距离计算和合并操作的实际耗时缺少单独报告。
- Inner-LLM 压缩层固定为第 18 或 26 层，没有根据样本难度或任务动态选择压缩位置。
- 视觉/音频预算分配需要针对不同 backbone 手工配置，Table 9 中的多组模型特定比例说明该方法不是一个完全无需调参的通用方案。
- SEATS 变体未在 Qwen2.5-Omni-3B 上评估，因为其层数配置与 SEATS 的官方 layer-selection schedule 不匹配；因此跨模型比较仍存在一定设置差异。
- 所有实验集中在三个 Omni-LLM 上，对其他 Omni-modal 架构（尤其是不同 tokenizer、不同音频/视频采样策略的模型）的适用性未知。
- 未发布模型权重和数据集，也没有披露开源协议；复现需要依赖外部代码、预训练模型和基准数据集。
- 论文声称 SOTA，但部分相对性能优势在 1–2 个百分点以内，且多种基线均被修改或适配到统一设置，绝对优势不够显著。

---

[← 返回 2026-08-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-06/)
