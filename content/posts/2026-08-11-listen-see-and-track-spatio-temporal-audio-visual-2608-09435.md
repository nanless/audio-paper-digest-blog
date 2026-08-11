---
title: "Listen, See and Track: Spatio-Temporal Audio-Visual Sound Event Reasoning for Omni-Modal Language Models"
date: 2026-08-11
draft: false
tags: [音视频问答, 多模态模型, 空间音频, 强化学习]
categories: [论文速递]
description: "音视频问答 | 6.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.09435"
---

# 📄 Listen, See and Track: Spatio-Temporal Audio-Visual Sound Event Reasoning for Omni-Modal Language Models

标签：#音视频问答 #多模态模型 #空间音频 #强化学习

**6.7/10** | 创新 1.4/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1.2/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.7/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：中 | #音视频问答 | #多模态模型 | #空间音频 #强化学习 | [arxiv](https://arxiv.org/abs/2608.09435v1)


### 👥 作者与机构

- 第一作者：Zhi Zeng（标注为共同一作，机构编号 1；机构名称未在正文中说明）
- 共同一作：Cheng Zhang、Zesheng Yang（机构编号 1）、Rendong Pi（机构编号 2）
- 作者列表：Zhi Zeng¹、Cheng Zhang¹、Zesheng Yang¹、Rendong Pi²、Jiaying Wu³、Di Zhang¹、Zihan Ma¹、Guodong Li⁴、Zhou Yang¹、Yu Xiang²、Yifei Zheng⁵、Minnan Luo¹（前四位标注 equal contribution；通讯作者未说明；1–5 为机构编号，机构名称未在论文中给出）

### 💡 毒舌点评

- 亮点：把"移动声源的时空跟踪与视觉绑定"正式定义为四级 QA 任务，并用模态必要性约束从构造上堵死单模态捷径，定位精准；ST-Omni-R1 平均 77.83% 领先最强闭源基线 Gemini-2.5-Pro（37.28%）达 40.55 个百分点，差距显著。
- 短板：核心产物（ST-OmniQA 数据、STA-encoder 代码、模型权重）完全未开源，一个基准论文拿不出基准本身，是最大的硬伤；全部数据来自 Matterport3D+SoundSpaces 2.0 单一仿真管线，真实场景只有音频模态的部分迁移证据；高度相关的近作 ST-AudioLM 在正文中被点名却未入表对比；且所有通用基线均为零样本，与经过同分布 SFT 的本文方法并不对等，"碾压式"领先需要打折解读。

### 📌 核心摘要

- 要解决的问题：现有音频语言模型（LALM）多以全局事件语义表示整段音频，视觉语言模型缺乏空间音频线索，SELD 则受限于固定词表与结构化输出，三者均无法对移动声源执行"定位—跟踪—跨模态绑定"的联合开放推理。
- 方法核心：构建 ST-OmniQA 基准（40K 全景视频 + 400K QA，四级能力 A/B/C/D，式 (2) 模态必要性约束），提出 ST-Omni-R1 模型，由 STA-encoder（1 个语义 token + 40 个时序轨迹 token）、Qwen2.5-VL-7B-Instruct 视频分支、两层 MLP 音频连接器组成，经 Stage A→D 渐进课程学习与推理树强化学习（RT-GRPO）训练。
- 新在哪里：基准层面要求答案仅在联合视听证据下唯一可解（\(|\mathcal{C}_A|>1, |\mathcal{C}_V|>1, |\mathcal{C}_{AV}|=1\)）；表示层面将 FOA 的时变声强向量转为有序轨迹 tokens，并与全景视觉实例绑定。
- 主要实验结果：ST-OmniQA 上 ST-Omni-R1（SFT+RT-RL）平均语义准确率 77.83%，最强闭源基线 Gemini-2.5-Pro 为 37.28%；TAU-NIGENS/L3DAS22/STARSS23 三个公开空间音频基准上总体均优于 BAT（注意 TAU-NIGENS 的 Elevation 子项上 BAT 50.00 略高于本文 49.50）。
- 实际意义：为"空间音频+全景视频"的动态声源推理提供了基准与基线系统，可能推动音视频问答、具身智能中声源跟踪与视觉绑定方向的研究。
- 主要局限：训练与评测均来自 Matterport3D+SoundSpaces 2.0 同一仿真引擎，真实场景仅有音频/音视频迁移的部分证据；模型、数据、代码均未开源；RT-GRPO 奖励权重与树节点打分细则未披露；Level C 仅 55.70% 且无失败模式分析。

下图展示了ST-OmniQA基准中的一个单源音频-视觉接地任务示例。

![Figure 1: Representative ST-OmniQA tasks spanning four capability groups: (a) single-source audio-visual grounding; (b) multi-source spatial reasoning;](https://arxiv.org/html/2608.09435v1/x1.png)

图中显示了全景视频中的猫，以及对应的时间线和问题，说明模型需要关联声音和视觉物体。

### 🔗 开源详情

未披露。论文正文未提供代码、模型权重或数据集的下载链接；机器摘要中 has_code=未说明、has_model=未说明、has_dataset=未说明。

### 🏗️ 方法概述和架构

ST-Omni-R1 是一个端到端的多模态语言模型推理系统，其核心目标是联合建模动态声源的“语义—空间—时间—视觉绑定”关系。给定一段 10 秒的全景视频 \(\mathbf{V}\)、与之时间同步的一阶 Ambisonics（First-Order Ambisonics, FOA）音频波形 \(\mathbf{X}^{\mathrm{FOA}}\)，以及用户的文本问题 \(q\)，系统建模条件概率 \(p_{\boldsymbol{\theta}}(y \mid \mathbf{V}, \mathbf{X}^{\mathrm{FOA}}, q)\)，输出文本答案 \(y\)。答案可能涉及声事件识别、到达方向（Direction of Arrival, DoA）估计、声源与听者距离判断、运动轨迹推理，或与时间对齐的视觉场景推理。FOA 是一种空间音频格式，包含一个全向分量 \(W\) 和三个正交方向分量 \(X,Y,Z\)，能够捕捉声场在三维空间中的方向性信息。

整体架构如图 2 所示，由四个核心部分组成：**STA-encoder**（Spatio-Temporal Audio Encoder）、**Qwen2.5-VL-7B-Instruct 视频编码器**、**音频连接器（audio connector）** 和**多模态语言解码器**。STA-encoder 负责从 FOA 波形中提取一个语义 token 和 \(K=40\) 个按时间顺序排列的轨迹 token；视频编码器将全景视频转换为视觉 token；音频连接器是一个两层 MLP，将音频 token 投影到语言模型的嵌入空间；最后，多模态语言解码器以自回归方式生成答案。在整个调参过程中，预训练的感知编码器保持冻结，仅训练连接器与语言侧模块，使声学轨迹能够与可见物体和场景关系对齐。

下图展示了ST-Omni-R1的整体架构。

![Figure 2: Overview of ST-Omni-R1.](https://arxiv.org/html/2608.09435v1/x5.png)

图中包括STA-encoder、视频编码器、音频连接器和语言解码器，以及渐进式课程学习的四个阶段。


论文按照 AmbiX/ACN 约定存储 FOA 波形，原始通道顺序为 \((W,Y,Z,X)\)，在构造笛卡尔空间特征时重排为 \((W,X,Y,Z)\)。设 \(W_{t,f}\)、\(X_{t,f}\)、\(Y_{t,f}\)、\(Z_{t,f}\) 分别为时间 \(t\)、频率 \(f\) 处的复频谱值。为提取声源的空间方向信息，论文计算归一化声强向量（即 active intensity 的归一化形式）：

\[
\mathbf{I}_{t,f}=\frac{\operatorname{Re}\!\left(W_{t,f}^{*}[X_{t,f},Y_{t,f},Z_{t,f}]^{\top}\right)}{|W_{t,f}|^{2}+|X_{t,f}|^{2}+|Y_{t,f}|^{2}+|Z_{t,f}|^{2}+\epsilon},
\]

其中 \(W_{t,f}^{*}\) 是 \(W_{t,f}\) 的复共轭，\(\epsilon\) 为防止除零的小常数。该向量近似指代瞬时声能流动的方向，其三个分量 \(I_x, I_y, I_z\) 分别对应声源在笛卡尔坐标系中的方向投影。随后，四个原始通道各自提取 log-Mel 谱，得到 \(\mathbf{M}^W, \mathbf{M}^X, \mathbf{M}^Y, \mathbf{M}^Z\)；同时将声强向量的三个分量经过 Mel 滤波器组投影，得到 \(\operatorname{Mel}(I_x), \operatorname{Mel}(I_y), \operatorname{Mel}(I_z)\)。最终将 7 个特征图在通道维拼接：

\[
\mathbf{Z}=\left[\mathbf{M}^W;\mathbf{M}^X;\mathbf{M}^Y;\mathbf{M}^Z;\operatorname{Mel}(I_x);\operatorname{Mel}(I_y);\operatorname{Mel}(I_z)\right].
\]

其中分号表示通道拼接。\(\mathbf{Z}\) 经过一个通道融合层（channel-fusion layer），将 7 个通道融合为统一的时频表示，再输入 Audio Spectrogram Transformer（AST）。

AST 是一个 12 层的 Transformer，初始化为 Spatial-AST 的权重。融合后的特征被划分为不重叠的时频 patch，送入 AST 编码。AST 输出一个时频网格 \(\mathbf{H}\in\mathbb{R}^{T'\times F'\times d_a}\)，其中 \(T'\)、\(F'\) 分别是时间和频率维的 patch 数，\(d_a\) 是音频特征维度。\(\mathbf{H}\) 随后沿两条路径分别处理：

**语义路径**：学习到的全局 token（class token）编码事件语义、整段音频的 DoA 以及源-听者距离。在 STA-encoder 的静态预训练阶段，该 token 会接受这些属性的监督；在预训练完成后的下游音频接口中，仅保留语义 token \(\mathbf{s}\)，用于表示整段音频的事件类别和全局空间属性。

**轨迹路径**：为了保留声源随时间变化的运动信息，论文对 \(\mathbf{H}\) 沿频率维求平均：

\[
\widetilde{\mathbf{H}}=\operatorname{Interp}_{K}\!\left(\frac{1}{F'}\sum_{f=1}^{F'}\mathbf{H}_{:,f}\right)\in\mathbb{R}^{K\times d_a},
\]

即先将每个时间步的频域特征聚合为一个向量，再通过插值将时间序列调整为 \(K=40\) 个有序的时间 bin。这里的 \(K\) 个 bin 对应均匀划分的 40 个时段，每个 bin 表示该时段内声源的平均状态。随后，对这些时间序列施加 temporal self-attention（时间维自注意力），捕捉相邻时间段之间的依赖关系，得到轨迹 tokens \(\boldsymbol{\tau}_{1:K}\)。最终音频表示为：

\[
\mathbf{A}=[\mathbf{s};\boldsymbol{\tau}_{1};\ldots;\boldsymbol{\tau}_{K}]\in\mathbb{R}^{(K+1)\times d_a},
\]

即一个语义 token 拼接 40 个轨迹 token。这样的表示既保留了整段音频的类别语义，又能以时间有序的方式描述声源在每个时段的活动状态、方向和距离变化，为后续语言模型提供细粒度的时变空间信息。

在 ST-Omni-R1 整体训练之前，STA-encoder 需要经过两阶段初始化。第一阶段是**静态感知预训练**，学习事件语义、整段 DoA 和源-听者距离。第二阶段是**动态适应**，引入逐时间 bin 的密集监督。为保证动态学习不损害静态语义能力，论文将静态编码器作为冻结教师（frozen teacher），在动态适应时约束语义 token 不偏离原静态表示。

设第 \(t\) 个 bin 的真实活动标签为 \(a_t\in\{0,1\}\)，单位方向向量为 \(\mathbf{d}_t\)，log 距离为 \(\ell_t=\log r_t\)（\(r_t\) 为源-听者距离）。辅助头预测 \(\hat{a}_t\)、\(\hat{\mathbf{d}}_t\)、\(\hat{\ell}_t\)。轨迹损失为：

\[
\mathcal{L}_{\mathrm{traj}}=
\frac{1}{K}\sum_{t=1}^{K}\operatorname{BCE}(\hat{a}_t,a_t)
+\frac{1}{\sum_{t}a_t+\epsilon}\sum_{t=1}^{K}a_t\left(\lVert\hat{\mathbf{d}}_t-\mathbf{d}_t\rVert_{2}^{2}+(\hat{\ell}_t-\ell_t)^{2}\right).
\]

其中第一项是活动检测的二元交叉熵，第二项仅对声源活跃的 bin 计算方向向量和 log 距离的回归损失。整体初始化目标为：

\[
\mathcal{L}_{\mathrm{STA}}=\mathcal{L}_{\mathrm{traj}}+\lambda_{\mathrm{sem}}\left\|\hat{\mathbf{z}}_{\mathrm{sem}}-\mathbf{z}^{T}_{\mathrm{sem}}\right\|_{2}^{2}+\lambda_{\mathrm{evt}}\operatorname{BCE}(\hat{\mathbf{e}},\mathbf{e}),
\]

其中 \(\mathbf{z}^{T}_{\mathrm{sem}}\) 是冻结教师提供的语义特征，\(\mathbf{e}\) 是事件类别目标。该损失中的语义保持项可以有效缓解“语义编码退化”问题——即模型过度关注空间定位而丢失事件类别信息。预训练完成后，辅助头被移除，STA-encoder 只输出公式 (7) 中的语义 token 和轨迹 token。

视频分支采用 Qwen2.5-VL-7B-Instruct 的视觉编码器，将全景视频按 2 fps 采样并转换为视觉 token 序列 \(\mathbf{V}_{\mathrm{tok}}\)。音频 token \(\mathbf{A}\) 经过一个可训练的两层 MLP 连接器投影到语言嵌入空间：

\[
g(\mathbf{a})=\operatorname{LN}\!\left(\mathbf{W}_{2}\operatorname{GELU}(\mathbf{W}_{1}\mathbf{a})\right),
\]

其中 \(\mathbf{W}_1, \mathbf{W}_2\) 是线性投影矩阵，GELU 为激活函数，LN 为层归一化。投影后的音频 token 序列记为 \(\mathbf{A}_{\mathrm{tok}}=g(\mathbf{A})\)。随后，视觉 token、音频 token 与问题 token 拼接为单一的解码器上下文：

\[
\mathbf{C}=[\mathbf{V}_{\mathrm{tok}};\mathbf{A}_{\mathrm{tok}};\mathbf{Q}_{\mathrm{tok}}].
\]

多模态语言解码器（即 Qwen2.5-VL-7B-Instruct 的 LLM 部分）可以同时关注全景视觉上下文、声事件语义、有序声源轨迹和问题。这样的设计使得模型能够执行跨模态推理，例如将声音轨迹与某一可见实例绑定、判断遮挡期间声源的运动状态，或比较多个声源的时空关系。

ST-Omni-R1 的训练采用四个阶段的课程学习，逐步增加推理难度。每个阶段都以前一阶段为基础，引入更复杂的声源数量、时间依赖和跨模态关系。给定上下文 \(\mathbf{C}\) 和 token 化答案 \(\mathbf{y}=(y_1,\ldots,y_L)\)，优化目标为响应部分的下一 token 交叉熵：

\[
\mathcal{L}_{\mathrm{SFT}}=-\sum_{t\in\mathcal{I}_{\mathrm{resp}}}\log p_{\boldsymbol{\theta}}(y_t\mid\mathbf{C},y_{(t)}),
\]

其中 \(\mathcal{I}_{\mathrm{resp}}\) 表示助手回复的位置，prompt、padding、视频占位符和音频占位符的 token 不参与损失计算。

- **Stage-A**：单声源声学感知，包括事件识别、活动检测、DoA、距离和运动状态。模型仅需基于音频判断单个声源的属性。
- **Stage-B**：多声源空间感知，要求在存在竞争声源的情况下识别目标源、区分相同类别的不同实例并定位目标。
- **Stage-C**：时空关系推理，建模时间条件化的空间关系、事件的时间顺序以及跨声源的轨迹比较，例如“哪个声源先向右移动再靠近听者”。
- **Stage-D**：场景级音视频推理，包括声源-实例绑定、地标定位、遮挡理解、可见性转换以及声源从视野消失后的持续跟踪。此阶段必须同时依赖音视频证据才能得到唯一答案。

表 4 中的消融实验显示，仅训练 Stage-A 时，C/D 级别准确率分别只有 4.00% 和 12.70%，而完成 A→D 全部阶段后 C/D 显著提升至 54.40% 和 90.90%，说明课程学习对复杂推理能力的培养至关重要。

课程学习之后，模型进入第二阶段：推理树强化学习（Reasoning-Tree GRPO, RT-GRPO）。其目标是通过结构化奖励增强模型在时空音视频推理中的内部一致性。对每个问题，根据 ST-OmniQA 的标注构建一棵推理树：根节点编码多模态上下文，中间节点表示声源状态、空间轨迹、音视频绑定和场景关系，叶节点指定候选答案。模型采样的每个响应被视为一条从根到叶的推理路径。

**树感知奖励**：奖励由三部分组成：格式得分 \(r_j^{\mathrm{fmt}}\)、树结构得分 \(\mathcal{T}_j\) 和答案得分 \(r_j^{\mathrm{ans}}\)。树结构得分定义为：

\[
\mathcal{T}_{j}
=\frac{1}{|\mathcal{N}_j|}\sum_{n\in\mathcal{N}_j}u_{j,n}-\lambda_{\mathrm{con}}p^{\mathrm{con}}_{j},
\]

其中 \(u_{j,n}\in[0,1]\) 衡量推理节点 \(n\) 的正确性，\(p^{\mathrm{con}}_{j}\) 量化父子依赖违反程度。节点正确性通过将推理语句与 ST-OmniQA 标注对比得到，自由形式回答则使用固定的语义等价评估器打分。总体奖励为：

\[
r_{j}
=\lambda_{\mathrm{fmt}}r^{\mathrm{fmt}}_{j}+\lambda_{\mathrm{tree}}\mathcal{T}_{j}+\lambda_{\mathrm{ans}}r^{\mathrm{ans}}_{j},
\]

其中 \(\lambda_{\mathrm{fmt}}+\lambda_{\mathrm{tree}}+\lambda_{\mathrm{ans}}=1\)。

**策略优化**：采用 GRPO（Group Relative Policy Optimization）。对同一上下文 \(\mathbf{C}\) 采样 \(G\) 个响应，归一化优势为 \(A_{j}=(r_{j}-\overline{r}_{\mathbf{C}})/(s_{\mathbf{C}}+\epsilon)\)，其中 \(\overline{r}_{\mathbf{C}}\) 是组内平均奖励，\(s_{\mathbf{C}}\) 是组内奖励标准差。设策略比 \(\rho_{j,t}=\pi_{\boldsymbol{\theta}}(y_{j,t}\mid\mathbf{C},y_{j,<t})/\pi_{\mathrm{old}}(y_{j,t}\mid\mathbf{C},y_{j,<t})\)，优化目标为：

\[
\mathcal{L}_{\mathrm{RT\text{-}GRPO}}=
-\frac{1}{\sum_{j}|y_j|}\sum_{j,t}\min\!\left(\rho_{j,t}A_{j},\operatorname{clip}\!\left(\rho_{j,t},1-\varepsilon,1+\varepsilon\right)A_{j}\right).
\]

该目标仅在组内奖励存在差异时产生非零优化信号，从而促使模型优先采信那些推理链一致且答案准确的路径。实验表明，经过 SFT 和 RT-RL 后，ST-Omni-R1 在 ST-OmniQA 上的平均语义准确率从纯 SFT 的 75.28% 提升到 77.83%，其中 Level D 从 90.90% 提升至 94.70%，说明推理树强化学习增强了复杂的跨模态绑定与跟踪推理能力。

完整的数据流如下：10 秒 FOA 音频 → AmbiX/ACN 重排 → 7 通道 log-Mel+声强特征 → 通道融合层 → AST 编码 → 语义 token（全局）与 40 个轨迹 token（时间有序）→ 音频连接器投影 → 与全景视频 token、问题 token 拼接为统一上下文 → Qwen2.5-VL-7B-Instruct 解码器自回归生成答案。训练阶段先通过静态和动态 FOA 监督初始化 STA-encoder，再执行 Stage-A→D 的课程 SFT，最后进行 RT-GRPO 强化学习。整个架构的关键设计在于：将 FOA 的时变声强向量转化为有序轨迹 token，而不是仅保留全局事件语义；并通过课程学习逐步培养多源时空推理能力，再通过推理树强化学习增强推理链的节点一致性和父子依赖约束，从而实现“听声—定位—跟踪—跨模态绑定”的联合开放推理。

### 💡 核心创新点

- 提出 ST-OmniQA 基准：包含 40K 全景视频和 400K 问答对，组织为 A/B/C/D 四级能力，覆盖事件识别、DoA、距离、运动轨迹、实例绑定、地标定位、遮挡理解和时序跟踪；通过模态必要性约束（式 2）和可执行推理图实现受控评估。
- 提出 STA-encoder：将 FOA 波形转换为 1 个语义 token 和 40 个时序轨迹 token；采用静态感知预训练 + 动态适应两阶段初始化，并用冻结教师保持语义不退化，解决“语义编码退化”问题。
- 提出 ST-Omni-R1：融合音频语义、有序轨迹和全景视觉上下文，通过渐进式课程学习（Stage-A 至 Stage-D）建立从单源感知到场景级音视频推理的能力，再经推理树强化学习（RT-GRPO）增强中间推理步骤的一致性。
- 实验贡献：在 ST-OmniQA 上大幅领先现有通用模型和空间音频模型，并在 TAU-NIGENS、L3DAS22、STARSS23 三个真实空间音频基准上验证了时空表示的可迁移性。

下图展示了ST-OmniQA基准中一个动态多源轨迹推理任务的示例。

![Figure 4: Dynamic multi-source trajectory reasoning task in ST-OmniQA, with cat, dog, and person sound-source timelines.](https://arxiv.org/html/2608.09435v1/x4.png)

图中显示了三个声源（猫、狗、人）的时间线，以及问题如何要求模型推理声音源的出现和移动轨迹。

### 📊 实验结果

在 ST-OmniQA 主测试集（4,000 题）上，ST-Omni-R1（SFT+RT-RL）平均语义准确率达到 77.83%，显著优于最强闭源基线 Gemini-2.5-Pro（37.28%）。消融实验表明，课程学习从 Stage-A 到 Stage-D 的完整训练将 Level D 从 12.70% 提升至 90.90%；音频和视频模态互补，完整模型比纯视频输入高 6.20 个平均点、比纯音频输入高 30.83 个平均点。跨数据集迁移实验显示，ST-Omni-R1 在三个真实世界空间音频基准上整体优于 BAT，但 TAU-NIGENS 的 Elevation 子项上 BAT 为 50.00，本文为 49.50。

表 1：ST-OmniQA 上与代表性基线的语义准确率对比（%）
| 模型 | A | B | C | D | Avg |
|------|-------|-------|-------|-------|-------|
| Qwen2.5-Omni-7B | 13.63 | 11.88 | 43.81 | 32.24 | 27.20 |
| Gemini-2.5-Pro | 42.10 | 29.50 | 49.80 | 27.70 | 37.28 |
| GPT-Audio | 16.50 | 12.90 | 46.30 | 23.20 | 24.73 |
| BAT | 17.20 | 9.80 | 47.50 | 17.30 | 22.95 |
| ST-Omni-R1 (SFT) | 81.50 | 74.30 | 54.40 | 90.90 | 75.28 |
| ST-Omni-R1 (SFT+RT-RL) | 84.70 | 76.20 | 55.70 | 94.70 | 77.83 |

表 2：课程学习与输入模态的消融实验（平均语义准确率 %）
| Setting | A | B | C | D | Avg |
|------|-------|-------|-------|-------|-------|
| SFT Stage-(A) | 79.60 | 50.40 | 4.00 | 12.70 | 36.68 |
| SFT Stage-(A+B) | 81.40 | 69.40 | 7.20 | 11.10 | 42.28 |
| SFT Stage-(A+B+C) | 83.30 | 74.50 | 57.80 | 23.50 | 59.78 |
| SFT Stage-(A+B+C+D) | 81.50 | 74.30 | 54.40 | 90.90 | 75.28 |
| Video-only Input | 78.90 | 70.50 | 51.60 | 85.50 | 71.63 |
| Audio-only Input | 35.80 | 31.00 | 52.50 | 68.70 | 47.00 |
| Full Model | 84.70 | 76.20 | 55.70 | 94.70 | 77.83 |

### 🔬 细节详述

- **实现细节**：STA-encoder 为 12 层 AST，初始化为 Spatial-AST，使用 10 秒音频片段，覆盖 75 个事件类别和 40 个 bin 的声源轨迹。音频采样率 32 kHz，输入由四个 log-Mel 通道和三个 acoustic-intensity 特征组成。ST-Omni-R1 采用 Qwen2.5-VL-7B-Instruct 作为视频编码器和语言解码器，全景视频按 2 fps 采样，STA-encoder 输出 1 个语义 token 和 \(K=40\) 个轨迹 token。训练时每个课程阶段训练 1 个 epoch，学习率 \(10^{-5}\)，BF16 精度，有效 batch size 128。Stage II 每提示采样 8 个响应，学习率 \(10^{-6}\)。所有实验在 4 张 NVIDIA A800 GPU 上进行。
- **评估协议**：ST-OmniQA 测试集包含 4,000 个问题；训练与测试划分在场景身份和时间间隔上均不重叠。跨数据集迁移评估使用 TAU-NIGENS、L3DAS22 Task 2、STARSS23 的固定真实世界测试子集。除特别说明外，所有模型使用 greedy decoding；通用基线统一答案格式，BAT 保留原有 free-form prompting 协议。语义准确率由 DeepSeek-v4-flash 评估。ST-OmniQA 评估中，通用公开基线未做任务特定微调。
- **基准构建细节**：ST-OmniQA 的 40K 视频基于 Matterport3D 场景网格和 SoundSpaces 2.0 声学模拟渲染，包含单静态（S）、单动态（D）、双静态（SS）、一静一动（SD）、双动态（DD）五种声源配置。每个片段由 50 个同步时间状态表示，答案通过可执行推理图生成；Level D 问题经过式 (2) 的模态必要性筛选，确保音频、视频单独均无法确定唯一答案。

### ⚖️ 评分理由

*   创新性 (1.4/2)：[A_METHOD] ST-OmniQA以模态必要性约束（式2）和执行推理图将动态声源时空跟踪与视觉绑定系统化为四级QA任务，STA-encoder将FOA转为1个语义token与40个轨迹token，形成新的基准设计与表示方法。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 基准构建有结构化标注：50个时间状态、事件/活动/DoA/距离/运动/可见性，记录经时间对齐、轨迹有效性、目标唯一性等过滤，并按scene-room单元分割防止泄漏，设计逻辑严谨。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 提供了4000题测试、代表基线与课程/模态消融，并在三个真实空间音频基准做迁移；[A_LIMITS] 但通用基线为零样本而本文经同分布SFT，且ST-AudioLM未入表、Level C无失败模式分析，对比公平与诊断证据不充分。

*   清晰度 (0.8/1)：[SCORING_SOURCE_1/1] 论文用公式和分步架构把FOA特征、token生成、课程学习和RT-GRPO讲得完整，但四级能力与Stage A-D训练阶段同用A-D字母，正文需特意说明二者不同，易造成混淆。

*   影响力 (1.2/1.5)：[A_SUMMARY] ST-OmniQA与ST-Omni-R1为空间音频加全景视频的动态声源推理提供基准与基线系统，可能推动音视频问答、具身智能中声源跟踪与视觉绑定方向研究。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 已披露STA-encoder初始化、两阶段预训练、课程SFT与RT-GRPO目标，以及batch size、学习率、BF16、4×A800等训练配置；[A_LIMITS] 但RT-GRPO奖励权重λ与树节点打分细则未披露，属关键配置缺失，故为0.3。

*   工程/实践价值 (1.0/1.5)：[A_METHOD] 基准构建工程链完整：Matterport3D场景加SoundSpaces 2.0声学仿真生成40K视频与400K QA，五种声源配置和可执行推理图支撑规模化生成；ST-Omni-R1的端到端训练流程也体现了实际系统雏形。

### 🚨 局限与问题

- 训练与评测均来自 Matterport3D + SoundSpaces 2.0 同一仿真引擎，真实场景只有音频/音视频迁移的部分证据，泛化性存疑。
- 核心产物（ST-OmniQA 数据、STA-encoder 代码、模型权重）未开源，基准与基线系统无法复现或直接使用。
- RT-GRPO 的具体奖励权重 \(\lambda_{\mathrm{fmt}},\lambda_{\mathrm{tree}},\lambda_{\mathrm{ans}}\) 和树节点打分细则未披露。
- Level C 仅 55.70%，且未提供失败模式分析，难以判断时空关系推理瓶颈。
- 高度相关的近作 ST-AudioLM 在正文中被点名，但未纳入对比实验。
- 所有通用基线均为零样本，未在同分布 SFT 条件下比较，与本文方法的性能差异包含训练数据优势。

---

[← 返回 2026-08-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-11/)
