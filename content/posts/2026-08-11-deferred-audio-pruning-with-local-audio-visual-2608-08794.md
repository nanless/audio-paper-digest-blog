---
title: "Deferred Audio Pruning with Local Audio-Visual Dynamics for Omni-LLMs"
date: 2026-08-11
draft: false
tags: [模型剪枝, 多模态模型, 高效推理, 模型压缩]
categories: [论文速递]
description: "模型剪枝 | 8.4/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.08794"
---

# 📄 Deferred Audio Pruning with Local Audio-Visual Dynamics for Omni-LLMs

标签：#模型剪枝 #多模态模型 #高效推理 #模型压缩

**8.4/10** | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.2/1.5 | 清晰 1/1 | 影响 1.2/1.5 | 开源 0.5/1.5 | 复现 0.5/0.5 | 工程 1.2/1.5

🔥 **8.4/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #模型剪枝 | #多模态模型 | #高效推理 #模型压缩 | [arxiv](https://arxiv.org/abs/2608.08794v1)


### 👥 作者与机构

- 第一作者：Kyeongyoon Lee（标注机构1，论文未提供机构名称）
- 通讯作者：未说明
- 作者列表：Kyeongyoon Lee（机构1）、Hongyeob Kim（机构1）、Youngeun Kim（机构2）、Sungeun Hong（机构1）
- 说明：所有机构仅以编号形式出现，论文原文未给出机构名称。

### 💡 毒舌点评

把“何时压缩”和“压缩哪个模态”拆开处理是本文最值得肯定的洞察：音频保留到查询条件化之后再用 query attention 剪枝，确实比所有 pre-LLM 统一压缩更合理。短板也很明显：所有对比都限定在 training-free 方法，缺少与可学习压缩/蒸馏方案的对照；“code will be released upon acceptance”意味着当前无法直接核验实现细节。此外，全部实验只在 Qwen2.5-Omni 单一骨干上进行，跨架构泛化尚未验证。

### 📌 核心摘要

论文解决的是 omni-modal LLM 中长音频-视频序列导致 prefill 计算和 KV-cache 开销过大的问题。现有压缩方法大多在进入 LLM 之前就决定音频和视频 token 的去留，而此时 query 尚未与多模态上下文融合，相关性估计不完整。A-PACK（Audio-Prioritized Allocation with Context-aware KV-Cache Pruning）提出两阶段训练无关压缩：在 LLM 之前保留全部音频，只压缩视频，并用局部窗口 CKA 的音频-视觉动态指导视觉 token 分配；进入 LLM 后，再从中间层开始用 query attention 对音频和视觉 token 及其 KV-cache 条目做渐进式剪枝，从而实现延迟音频剪枝。在 Qwen2.5-Omni-7B/3B 的 AVUT、WorldSense、Video-MME、DailyOmni 上，A-PACK 是所评估 training-free 方法中平均准确率最高的；在更激进的 25% prefill-FLOPs 设定下，7B 模型可减少约 78% prefill FLOPs，最终 token 保留率仅 5.6%，平均相对准确率仍保持 97.0%。该方法无需训练即可降低预填充、显存和解码开销，但作者也承认激进压缩可能损害细粒度或长程音频证据，且局部共变信号对时间偏移敏感；目前代码尚未发布。

下图通过遮蔽实验量化了音频与视频token的任务相关信息密度，揭示了延迟音频剪枝的设计动机。

![(a) Per-token importance](https://arxiv.org/html/2608.08794v1/x4.png)

实验表明，遮蔽单个音频token引起的模型输出KL散度平均是视频token的9.8倍，这一数量级差异直接支持了论文保留全部音频token直到查询交互后再进行剪枝的核心设计。

### 🔗 开源详情

论文正文未提供代码仓库、模型权重或数据集链接。作者声明“code will be released upon acceptance”，即当前阶段无可用资源。机器摘要中 has_code、has_model、has_dataset 均为“未说明”。因此，该工作的代码、模型与数据尚未公开，完整复现所需的实现细节需等待录用后的官方发布。

### 🏗️ 方法概述和架构

A-PACK（Audio-Prioritized Allocation with Context-aware KV-Cache Pruning）是一个与训练无关的两阶段 token 压缩流水线，目标是在不微调 Omni-LLM 的前提下，降低长音频-视频序列带来的 prefill 计算量和 KV-cache 内存开销。其输入为原始音频 token 序列 \(A=\{a_1,\dots,a_{N_A}\}\)、视频 token 序列 \(V=\{v_1,\dots,v_{N_V}\}\) 以及用户文本查询 \(Q\)；输出为经过两级压缩后的 token 序列，该序列仍保留对回答查询最关键的多模态证据，并被送入 Qwen2.5-Omni 的解码器生成答案。

整体流程分为两个阶段：**pre-LLM 阶段**和 **inner-LLM 阶段**。pre-LLM 阶段发生在多模态 token 进入 LLM 之前，其设计原则是“保留全部音频，仅压缩视频”；inner-LLM 阶段发生在 LLM 解码器内部，在查询 token 已与多模态上下文交互后，利用最后查询 token 的注意力分数对音频和视觉 token 及其 KV-cache 条目进行渐进式剪枝。两个阶段共同实现“延迟音频剪枝”（deferred audio pruning），即音频的实质性删减被推迟到 query-conditioned 信息可用之后，而不是像现有方法那样在进入 LLM 前就盲目丢弃。

下图展示了A-PACK两阶段训练无关压缩框架的整体流程：首先在pre-LLM阶段保留全部音频并压缩视频，然后在LLM内部进行渐进式查询感知剪枝。

![Figure 3: Overview of our method. Stage 1 (pre-LLM) preserves audio tokens and compresses only video.](https://arxiv.org/html/2608.08794v1/x6.png)

图中清晰区分了两个核心阶段：左侧的局部冗余感知压缩（pre-LLM）负责基于音频-视觉动态分配视觉预算，右侧的渐进式查询感知压缩（inner-LLM）则根据注意力分数逐步剪枝并移除对应的KV-cache条目。


### Pre-LLM 阶段：局部音频-视觉动态引导的视觉预算分配
pre-LLM 阶段由三个子模块组成：帧级表示构建、局部对齐分数计算、视觉 token 分配与去重。

**帧级表示构建。** 由于音频与视频的原始采样率不同，首先将音频嵌入重采样到视频帧的时间轴上，使每个视频帧都有对应的音频嵌入。随后对每一帧的所有视频 token 执行 mean pooling，得到该帧的视觉表示 \(V_f \in \mathbb{R}^{d}\)；对应帧的音频表示记为 \(A_f \in \mathbb{R}^{d}\)。这一步的目的是将原始 token 级序列转换为成对的帧级表示，以便在时间维度上进行跨模态对齐。

**局部对齐分数计算。** 使用长度为 \(w=3\) 的滑动窗口，将连续三帧的音频和视觉表示分别中心化后堆叠为矩阵 \(A_f, V_f \in \mathbb{R}^{3\times d}\)。然后计算线性 CKA（Centered Kernel Alignment）作为第 \(f\) 帧的局部音频-视觉对齐分数：
\[
c_f = \frac{\langle \operatorname{vec}(A_f^\top A_f),\ \operatorname{vec}(V_f^\top V_f)\rangle}{\lVert A_f^\top A_f\rVert_F\ \lVert V_f^\top V_f\rVert_F}.
\]
线性 CKA 衡量两个模态在短时间窗口内协方差结构的相似程度：若音频和视觉在相邻几帧内共同变化，则分数高；若仅语义相关但时间上不同步，则分数低。这避免了静态逐点匹配把时间上不共现的事件错误关联的问题。

**门控机制。** 短窗口 CKA 对“声音先于画面”或“画面先于声音”的时间偏移情况不敏感。为此，A-PACK 引入门控：计算整个视频片段上平均 CKA \(\bar{c}\)，若 \(\bar{c} \ge \tau=0.78\)，则使用纯局部 CKA 作为最终分数；若 \(\bar{c} < \tau\)，则表明存在系统性时间偏移，改用局部 CKA \(c_f\) 与 min-max 归一化后的音频-视觉直接距离分数 \(1-\hat{d}_f\) 的加权混合：
\[
s_f = (1-\beta)\,c_f + \beta\,(1-\hat{d}_f), \quad \beta=0.90.
\]
其中 \(\hat{d}_f\) 是第 \(f\) 帧音频与视觉表示经过 min-max 归一化后的欧氏距离。门控机制确保了在时间不同步的视频中，依然能捕获到跨模态对应关系。

**视觉 token 分配与去重。** 得到每帧的对齐分数 \(s_f\) 后，A-PACK 将其归一化为每帧的视觉预算权重。具体地，视频帧被划分成若干片段（segment），每个片段内部具有相似的音频-视觉动态模式。每个片段的第一帧被选为**锚点帧（anchor frame）**，其余为非锚点帧。对于锚点帧，使用**密度感知最远点采样（DA-FPS）**选取一个具有多样性且高覆盖率的 token 子集：DA-FPS 优先选择与已选 token 差异最大的代表 token，从而在有限预算内覆盖不同空间区域。对于非锚点帧，将其每个 token 与锚点帧中相同空间位置的 token 比较，保留最不相似的 token（即新出现的证据），丢弃与锚点冗余的 token。这样做既保留了时间上新增的信息，又避免了重复的视觉内容占用预算。

在预算分配方面，pre-LLM 预算中音频 token 全部保留，即 \(N_A\) 个音频 token 始终进入 LLM。若总预算为 \(B\)，则视频可用的预算为 \(B - N_A\)。据此可计算视频保留比例，并按各帧的 \(s_f\) 分数分配具体 token 数量。当音频本身信息密度更高时，保留全部音频是合理的；实验也证明，在固定总预算下提高音频保留比例能显著提升准确率（AVUT 上提升约 10%，WorldSense 上提升约 8%）。

### Inner-LLM 阶段：查询感知的渐进式 KV-Cache 剪枝
经过 pre-LLM 阶段后，压缩后的音频（全部）和视频（部分）token 与查询 token 一起进入 LLM。inner-LLM 阶段从中间层 \(L_{\mathrm{mid}}\) 开始进行逐层剪枝。对于 7B 模型，\(L_{\mathrm{mid}}=14\)（即第 14 层，约等于总层数的一半）；对于 3B 模型，\(L_{\mathrm{mid}}=18\)。从该层起，每一层都执行以下操作：

1. 计算最后一个查询 token 对当前所有音频和视觉 token 的注意力分数。
2. 保留分数最高的 \((1-P)\) 比例的 token，丢弃剩余 \(P\) 比例的 token。
3. 同步裁剪被丢弃 token 对应的 KV-cache 条目，以缩短后续层和自回归解码阶段的序列长度。

每层的剪枝比例 \(P\) 在 35% prefill-FLOPs 配置下为 10%，在 25% 配置下为 15%。这种渐进式剪枝意味着序列长度从上到下逐步缩小，而不是一次性截断，从而保留更多早期层的上下文信息，并在深层及解码阶段获得更大的计算节省。由于剪枝依据的是查询 token 的注意力，因此该阶段是 query-conditioned 的，能够根据实际任务需求保留与回答最相关的多模态证据。

### 关键设计选择与动机
- **为何保留全部音频直到 inner 阶段？** 论文分析发现，音频 token 比视频 token 具有更高的任务相关信息密度（掩蔽一个音频 token 对答案分布的影响是视频 token 的 9.8 倍）和更高的表示多样性（有效秩高 1.7 倍）。因此，在 pre-LLM 阶段过早剪枝音频会丢弃紧凑但关键的证据，必须将音频剪枝推迟到 query 信息可用之后。
- **为何使用局部 CKA 而非逐点匹配？** 逐点匹配容易将时间上相距较远但语义相似的音频-视觉事件关联起来，导致错误对齐。局部窗口 CKA 强调短时间内的共变关系，能更真实地反映“同一事件在音频和视觉通道中的同步出现”。门控机制进一步补偿了时间偏移场景。
- **为何结合 pre-LLM 和 inner-LLM 两个阶段？** 消融实验表明，仅使用 pre-LLM 阶段即可获得大部分准确率提升，而 inner-LLM 阶段能在更低 FLOPs 下进一步恢复剩余的准确率并大幅缩短解码序列。两个阶段互补：pre-LLM 负责快速降低序列长度，inner-LLM 负责根据查询动态去除低价值 token。

整体数据流为：\(A,V,Q \xrightarrow{\text{pre-LLM}} A_{\text{all}}, V_{\text{sel}}, Q \xrightarrow{\text{LLM layers}} \text{inner-LLM pruning} \to \text{decoder}\)。算法流程可概括为：先计算局部 CKA 分数并做门控混合，将视频帧分段并应用锚点 DA-FPS 与非锚点去重，将保留的音频和视觉 token 送入 LLM，在中间层开始按查询注意力渐进式剪枝并同步裁剪 KV-cache，最终返回压缩后的 token 序列。该架构在不改变模型参数的前提下，实现了高达 78% 的 prefill FLOPs 节省，最终 token 保留率仅为 5.6%，同时平均相对准确率保持在 97.0%。

### 💡 核心创新点

1. **延迟音频剪枝范式**：与现有 omni-modal 压缩方法在进入 LLM 前就同时丢弃音频和视觉 token 不同，A-PACK 在 pre-LLM 阶段完整保留音频，仅压缩视频，将音频的具体删减推迟到 LLM 内部、query 与多模态上下文完成交互之后，从而避免早期剪枝丢失紧凑但关键的声音证据。
2. **局部音频-视觉动态引导的视觉选择**：提出使用局部窗口线性 CKA 度量短时音频-视觉共变关系，并引入门控机制处理时间偏移，替代传统的逐点相似度匹配或全局最优传输，使视觉 token 分配更贴近真实跨模态事件同步关系。
3. **两阶段训练无关压缩框架**：将 pre-LLM 的音频优先视觉压缩与 inner-LLM 的查询感知渐进式 KV-cache 剪枝结合。pre-LLM 阶段降低序列长度，inner-LLM 阶段按最后一个查询 token 的注意力分数逐步剔除低相关 token 并同步裁剪 KV-cache，两个阶段无需微调即共同实现 prefill 计算、显存和解码延迟的三重降低。
4. **音频信息密度与多样性分析**：通过遮蔽实验和表示有效秩分析，发现音频 token 的任务相关信息密度约为视频的 9.8 倍，表示多样性约为视频的 1.7 倍，为“保留音频作为引导、压缩视频作为预算来源”的设计提供直接依据。
5. **密度感知最远点采样（DA-FPS）与锚点去重**：在视觉预算分配中，对段内锚点帧使用 DA-FPS 获取多样性高覆盖的 token 子集，非锚点帧通过与锚点的相似性去重，在有限视觉预算下兼顾空间覆盖与时间新增信息。

### 📊 实验结果

实验在 Qwen2.5-Omni-7B/3B 上、五个音频-视觉理解基准（AVUT、WorldSense、DailyOmni、Video-MME、AVHBench）上进行，采用训练无关压缩设置，所有对比方法均不微调骨干。主结果按 35% 和 25% 两个 prefill-FLOPs 档位评估。A-PACK 在 7B 模型的 35% 档位保留 98.8% 相对准确率，同时减少约 66% prefill FLOPs；在 25% 档位保留 97.0% 相对准确率，减少约 78% prefill FLOPs，最终 token 保留率仅 5.6%。3B 模型在对应档位保留 97.3% 和 95.5% 平均相对准确率，趋势一致。A-PACK 在 AVUT、WorldSense、DailyOmni、Video-MME 上均为所评估 training-free 方法中的最高平均准确率。

消融实验显示：仅使用 pre-LLM 阶段即可在 7B 上以 44.6% prefill FLOPs 保持 97.7% 相对准确率；加入 inner-LLM 阶段将 prefill FLOPs 进一步降至 29.9%，平均相对准确率保持 97.8%。在固定总 token 预算下，将音频保留比例从 20% 提升到 80%，AVUT 相对准确率提升约 10%，WorldSense 提升约 8%。与静态余弦对齐相比，局部 CKA + 门控在 WorldSense 全部八个域均获得提升，精确 McNemar 检验 p=0.0117。效率方面，A-PACK 在 25% 档位达到 51.4 tok/s 解码吞吐，显著高于 OmniZip 的 31.1 tok/s 和 DyCoke 的 35.1 tok/s；在 AVUT 上取得最高准确率、最低显存占用及最高 prefill/端到端加速。下表给出 Qwen2.5-Omni-7B 在 AVUT 25% prefill-FLOPs 档位的代表性效率对比。

消融实验进一步验证了保留音频作为引导的重要性，如下图所示，在固定预算下，将音频token从剪枝转为保留显著提升了模型在AVUT和WorldSense上的准确率。

![Figure S7: Per-category audio-keep sweep, decomposing Figure 6(a) by the query-modality buckets of Figure S6 (mean category accuracy vs. audio keep ratio; WorldSense 66 audio-/2020 visual-centric categories, AVUT 44/22).](https://arxiv.org/html/2608.08794v1/x27.png)

与直接剪枝音频的基线相比，保留音频可将AVUT准确率提升约5.1%，WorldSense提升约1.8%，这为‘音频优先’的压缩策略提供了直接证据。


| 方法 | 准确率 (%) | 显存 (GB) | Prefill 加速 | 端到端加速 |
|:---|:---:|:---:|:---:|:---:|
| Full Tokens | 64.5 | 24.0 | 1.00× | 1.00× |
| FlashVID | 60.2 | 22.5 | 1.65× | 1.73× |
| DyCoke | 58.3 | 22.5 | 1.67× | 1.77× |
| FastV | 52.1 | 22.6 | 1.80× | 1.89× |
| UniComp | 56.9 | 22.4 | 1.68× | 1.77× |
| OmniZip | 59.3 | 21.9 | 1.75× | 1.86× |
| A-PACK | 62.2 | 21.7 | 1.85× | 1.96× |

下图将预填充时间（TTFT）分解为不同模块，直观展示了A-PACK在25% FLOPs预算下的效率优势来源。

![Figure 4: Inference efficiency of Qwen2.5-Omni-7B at the 25%25\\% prefill-FLOPs tier. (a) TTFT breakdown into the vision tower, preprocessing with pre-LLM compression, and the LLM backbone with inner-LLM compression. (b) Decoding throughput.](https://arxiv.org/html/2608.08794v1/x7.png)

与基线方法相比，A-PACK主要通过将LLM骨干内的计算量大幅降低至832ms（全量为2687ms），实现了整体1.47倍的预填充加速，验证了inner-LLM剪枝对计算瓶颈的针对性优化。

### 🔬 细节详述

**分段与预算分配细节。** 在 pre-LLM 阶段，A-PACK 首先将音频嵌入重采样到视频帧时间轴，并对每帧视频 token 做 mean pooling。随后对帧级表示做高斯平滑（σ=1.0），并计算相邻帧余弦相似度；当相似度低于连续性阈值 τ_sim=0.97 时，开始一个新的时间分段。每个分段的分值由查询相关性和时长共同决定：使用 (max r + mean r) · √dur 作为分段权重，其中 r 为帧级查询相关性，dur 为分段时长，从而避免长片段主导预算分配。帧级最终视觉分数 b_f = γ u_f + (1-γ) c_f，其中 γ=0.90 为视觉分值权重，u_f 为分段查询相关性广播到帧的分数，c_f 为局部窗口 CKA。若视频片段的平均 CKA 低于门控阈值 τ=0.78，则将 c_f 与归一化的帧级音频-视觉距离 d_f 按 β=0.90 混合，得到 s_f。最终按 s_f 将视频预算 B - N_A 分配到各帧。

**锚点 DA-FPS 与非锚点去重。** 每个分段的第一帧作为锚点帧，锚点 token 通过 DA-FPS 选取：从密度最大的原型开始，每次加入使 (1 - sim_max^sel) · ρ 最大的 token，其中 sim_max^sel 是当前 token 与已选集的最大余弦相似度，ρ 是该 token 的平均 top-k 余弦相似度按覆盖 token 数的加权密度。DA-FPS 的密度参数 k=5，幂指数=0.5，锚点优先级=0.3。非锚点帧将每个 token 与锚点帧中相同空间位置的 token 比较，保留最不相似的 token（去重覆盖率阈值=0.8），丢弃冗余内容。音频 token 在该阶段完全不剪枝，全部保留并进入 LLM。

**Inner-LLM 剪枝细节。** 内层剪枝从 L_mid 层开始，7B 为第 14 层，3B 为第 18 层。剪枝评分使用最后一个查询 token 的缩放点积注意力：I_i = exp(q^T k_i / √d) / Σ_j exp(q^T k_j / √d)，多头时对注意力头取平均。评分不需要额外前向，因为 query-key 交互已在解码器中计算。每个剪枝层保留分数最高的 (1-P) 比例，并同步裁剪对应 KV-cache 条目。P 在 35% 档位为 10%，在 25% 档位为 15%。35% 档位对应 pre-LLM 保留率 R_pre=0.50，25% 档位 R_pre=0.35。所有超参数在表 S1 中给出。

**FLOPs 与效率测量协议。** 计算采用解析式估计：单层 transformer 在序列长度 n 下的 FLOPs 为 φ(n) = 4nd² + 2n²d + 2ndm，其中 d 为隐藏维度，m 为 FFN 中间维度。效率指标包括 prefill FLOPs 与 Full Tokens 的比值、TTFT 及模块级分解、解码吞吐、端到端延迟、峰值显存。实验使用 bfloat16、FlashAttention-2、贪婪解码，在 NVIDIA A6000 48GB GPU 上测量。

**音频信息密度测量协议。** 为量化音频与视频 token 的任务相关信息密度，论文采用均值替换遮挡法：记录原始解码器输出分布 p_base，将某个时间块内的 token 替换为其均值嵌入，保持序列长度和位置编码不变，仅重跑解码器得到 p_occ，计算每个 token 的平均 KL 散度（KL/token）。一个块为视频中的一帧，对应的音频块覆盖相同时间宽度。表示多样性用有效秩衡量。测量结果支持音频 token 信息密度更高、更值得保留。

### ⚖️ 评分理由

*   创新性 (1.5/2)：[A_SUMMARY][A_METHOD] 提出延迟音频剪枝的两阶段训练无关压缩框架，将pre-LLM保留音频/压缩视频与inner-LLM查询感知KV剪枝结合，并用局部窗口CKA加门控指导视觉分配，具有可核对的新颖组合。

*   技术严谨性 (1.3/1.5)：[A_METHOD] 局部CKA公式、门控混合、DA-FPS和渐进式剪枝均有完整算法定义与设计动机；[SCORING_SOURCE_13/31] 相关消融和统计检验支持其逻辑一致性，未发现推导矛盾。

*   实验充分性 (1.2/1.5)：[A_RESULTS] 覆盖AVUT、WorldSense、DailyOmni、Video-MME及AVHBench，含35%/25%两档FLOPs、阶段消融、参数敏感性和McNemar p=0.0117；[A_LIMITS] 但缺少可学习压缩方法对照、跨架构验证且AVHBench未入主均值，故未给满分。

*   清晰度 (1.0/1)：[A_METHOD] 对pre-LLM与inner-LLM两阶段、局部CKA公式、门控机制、锚点去重和数据流均给出明确符号与流程说明，方法整体清楚，没有明显文体或图表扣分点。

*   影响力 (1.2/1.5)：[A_SUMMARY][A_RESULTS] 针对omni-modal长音频-视频序列的prefill和KV-cache开销，在保持97.0%相对准确率的同时减少约78% prefill FLOPs，对音频相关的高效推理场景有实际价值。

*   开源 (0.5/1.5)：[A_OPEN] 论文明确承诺未来开放核心产物，但当前尚未发布可用代码、模型权重或数据资源。

*   可复现性 (0.5/0.5)：[A_METHOD][SCORING_SOURCE_16/31] 论文给出两阶段算法、关键公式、默认配置、Qwen2.5-Omni骨干、NVIDIA A6000硬件及FLOPs/效率测量协议，训练无关方法的论文层复现信息充分。

*   工程/实践价值 (1.2/1.5)：[A_RESULTS] 在AVUT 25%档位实现21.7GB显存、1.85× prefill加速和1.96×端到端加速，解码吞吐达51.4 tok/s且无需训练，工程部署收益明确。

### 🚨 局限与问题

1. **对比范围局限**：所有对比方法均为 training-free 压缩器，未与可学习的 token 压缩、蒸馏或轻量化微调方法对照，无法说明 A-PACK 相对“允许训练”路线的优势边界。
2. **骨干泛化未验证**：全部实验在 Qwen2.5-Omni-7B/3B 上进行，没有在 LLaVA-Omni、Qwen2-Audio 等其他 omni-modal 架构上测试，局部窗口 CKA 和 inner-LLM 剪枝的跨架构有效性未知。
3. **激进压缩可能损害细粒度或长程音频证据**：在 25% prefill-FLOPs 档位下最终 token 保留率仅 5.6%，高压缩比可能丢失需要长程或精确时序推理的音频证据，论文在定性失败案例中也承认这类问题。
4. **局部共变信号对时间偏移敏感**：门控机制缓解了系统性时间偏移，但更复杂的时间错位（如音频-视频延迟在不同片段中动态变化）仍可能使 CKA 分数失真；实验未专门评估该场景。
5. **实现与复现问题**：代码未发布，仅承诺录用后开放；目前无法直接核验实现细节、FLOPs 计算和所有附录结果。部分基线（如 OmniZip 的 25% 档位）需要自行调整压缩比例，可能引入微小不公平性。
6. **AVHBench 的整合略弱**：AVHBench 作为幻觉基准主要用于对齐评分的消融，未进入主准确率均值；对“压缩是否导致幻觉”的系统性分析仍不充分。

---

[← 返回 2026-08-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-11/)
