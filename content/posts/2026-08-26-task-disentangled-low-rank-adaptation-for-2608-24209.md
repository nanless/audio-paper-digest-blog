---
title: "Task-disentangled Low-Rank Adaptation for Versatile Audio-visual Multi-modal Learning Tasks within a Unified Framework"
date: 2026-08-26
draft: false
tags: [音视频理解, LoRA, 多任务学习, 多模态模型]
categories: [论文速递]
description: "音视频理解 | 7.9/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.24209"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 Task-disentangled Low-Rank Adaptation for Versatile Audio-visual Multi-modal Learning Tasks within a Unified Framework

标签：#音视频理解 #LoRA #多任务学习 #多模态模型

**7.9/10** | 创新 1.8/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 清晰 0.9/1 | 影响 1.3/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 0.9/1.5

✅ **7.9/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #音视频理解 | #LoRA | #多任务学习 #多模态模型 | [arxiv](https://arxiv.org/abs/2608.24209)


### 👥 作者与机构

第一作者：Hanyu Xuan（School of Big Data and Statistics, Anhui University, Hefei 230039, China）
通讯作者：Junjun Mao；Zhiliang Wu
作者列表：Hanyu Xuan、Mengqi Zhang、Junjun Mao、Fei Wang、Kun Li、Guanghui Yue、Zhiliang Wu、Hehe Fan（机构：School of Big Data and Statistics, Anhui University, Hefei 230039, China；Institute of Artificial Intelligence, Hefei Comprehensive National Science Center, Hefei 230026, China；College of Information Technology, United Arab Emirates University, Abu Dhabi 15551, United Arab Emirates；School of Biomedical Engineering, Shenzhen University, Shenzhen 518060, China；College of Computing and Data Science, Nanyang Technological University, Singapore 639798, Singapore；School of Artificial Intelligence, Zhejiang University, Hangzhou 310007, China）

### 📌 核心摘要

核心问题是：同一个音视频大模型能否在共享参数效率的同时，为定位、分割与问答保留互不混淆的更新方向？现有音视频方法大多逐任务构建，统一模型 Crab 则以 HydraLoRA 做参数高效适配。HydraLoRA 让全部任务进入同一个低秩子空间，并主要依靠输入内容路由专家，因此不同目标的表示仍会缠结。本文在共享矩阵 A 与协作专家 B_i 之间加入按任务索引的调制矩阵 Λ_t，再用任务自适应权重组合专家，把共享、专用和迁移知识分到不同路径。

它覆盖 AVEL、AVVP、ARIG、AVS、RAVS 与 AVQA，横跨时序定位、空间定位、像素级理解和时空推理。在统一接口中，音频与视觉先分别对齐到语言空间，文本任务沿自回归头输出，而 AVS、RAVS 通过 MASK token embedding 调用 mask decoder 输出像素掩码，使异构任务共享主干但保留输出分支。统一模型在 RAVS unseen、AVVP 与 ARIG 上取得显著收益，直接消融也显示 Λ 和各专家头均有贡献。与此同时，AVQA 对 Crab 略有退化，且增加专家数会改变不同任务的赢家，说明任务解耦缓解了负迁移，但没有把它彻底消除。

### 🏗️ 方法概述和架构

输入包括被划分为 T 个连续、互不重叠片段的音视频序列，以及任务专用文本指令。视觉侧用 CLIP-ViT-L/14 提取逐片段 patch embedding；音频侧用 BEATs 形成逐片段 audio embedding。音频支路先由 BEATs 生成逐片段 embedding，再经音频 Q-Former 与 MLP 投入共享语言空间。视觉支路也经过独立的 Q-Former 与 MLP，因此音频与视觉模态先各自对齐到 LLaMA-2-7B-Chat 的语言嵌入维度，而不是在编码器输出上直接相加。

请在下图追踪 waveform、视频帧和 task-specific textual instruction 如何经过 Q-Former 与 MLP，再进入 Multi-modal LLM 与 Task-disentangled LoRA。

[![Overview of our proposed unified framework for versatile AVMML tasks.](https://arxiv.org/html/2608.24209v1/figures/2.png)](https://arxiv.org/html/2608.24209v1/figures/2.png)

图中音频和视觉 encoder 位于并行分支，分别接到对齐模块；文本经 tokenizer 与 word embedding 后汇入同一主干，右侧列出 AVEL、AVVP、ARIG、AVS、RAVS、AVQA。图只展示统一接口，没有展开 MASK decoder 的内部计算。


任务说明与查询先由 tokenizer 和 word embedding 变为文本 token。系统把指令中的音频、视觉特殊 token 替换为对应的对齐 embedding，并按序插入、拼接，得到统一序列 H。这样，不同任务共享同一种输入接口，但任务身份仍保留在指令和后续适配器选择中；定位标签、问答文本和分割提示可以沿同一 LLM 主干传播。

普通 HydraLoRA 先以共享 A 把 H 压到 rank-r 子空间，再让输入路由多个 B_i；问题在于所有任务看到同一个低维基，且路由没有显式 task id。本文把低秩更新改写为 \(\Delta W_t=\sum_i p_{t,i}B_i\Lambda_tA\)。共享矩阵 A 学习通用低秩基，任务专用 Λ_t 改写该基，专家 B_i 再把可迁移更新送回全维输出。权重 \(p_{t,i}\) 由任务自适应门控和温度 \(\tau\) 的 softmax 产生，因此同一专家可以服务多个任务，却不会抹掉任务专用变换。

请在下图沿低秩更新从共享 A 向下追踪 task id 选择 Λ_t、router 混合 B_i，再检查专家输出如何与 pretrained weights 相加。

[![Architecture of the proposed task-disentangled LoRA, where A, 𝚲t\\mathbf{\\Lambda}_{t}, and Bi\\textbf{{B}}_{i} denote task-general low-rank matrix, task-specific modulation matrices, and cross-task collaboration expert heads, respectively.](https://arxiv.org/html/2608.24209v1/figures/3.png)](https://arxiv.org/html/2608.24209v1/figures/3.png)

图中 A 先连接一排 Λ_1…Λ_T，选中的 Λ_t 再连接多个 B_i；彩色 router 权重在乘法节点作用于专家并经求和回到输出。火焰与雪花分别标出 trainable 和 frozen 路径，也仍只表明该结构依赖已知 task id。


每个 Λ_t 以单位矩阵初始化，初始时保持原低秩乘积不变，训练后再逐渐偏离单位变换。这个选择让新增任务参数不会在训练开端突然扰动主干，同时每个任务的 Λ_t 接收独立梯度。几何论证的核心是：不同 Λ_t 为任务子空间增加独立变换自由度，使它们不必像标准 LoRA 那样共线。

训练目标把全部任务的自回归文本损失与分割支路的 BCE、Dice 辅助损失联合起来。对于 AVS 与 RAVS，词表加入多组 MASK token；模型生成这些 token 后，取其末层 embedding 作为 prompt，并与视觉特征一起送入 SAM mask decoder。输出因此分成 2 条：普通任务沿语言头产生结构化文本，像素任务额外生成时序语义 mask，而共享 LLM 和任务解耦 LoRA 仍是共同计算骨架。

这一设计的取舍是用少量按任务增长的 r×r 矩阵换取显式隔离，同时保留共享 A 和共享专家以迁移知识。它比每任务独立 LoRA 更节省重复参数，也比完全共享 HydraLoRA 更能保留任务边界；代价则是推理前必须知道 task id，并且专家数、任务采样与温度都会影响共享容量如何分配。

### 💡 核心创新点

1. 既有 HydraLoRA 把全部任务投到共享低秩空间，输入路由又缺少显式 task id，因而特征可分性不足。本文在共享 A 后加入每任务独立的 Λ_t，让专用变换先分开梯度方向，再进入共享 B_i。t-SNE 中本文方法的任务簇比 HydraLoRA 更紧、更分离，Λ 置零也让全部目标退化；不过该证据只覆盖既定任务身份，不能说明未知任务能自动获得合适 Λ_t。

请在下图比较上排 HydraLoRA 与下排 task-disentangled LoRA，并重点观察 Low Rank Space 中不同任务颜色是否仍相互穿插。

![T-SNE visualization of task-specific features extracted from the output linear layer of the final block in LLaMA-2-7B \[5\], comparing HydraLoRA \[6\] and the proposed LoRA after fine-tuning on six AVMML tasks.](https://arxiv.org/html/2608.24209v1/figures/T-sne.png)

图中 HydraLoRA 的低秩空间含大量多色重叠点，而本文方法形成更紧的分色簇；Full Rank Space 也呈现类似分离。这个像素事实支持 Λ_t 提升已知任务可分性，但图内没有未知任务样本。


2. 每任务独立 LoRA 会阻断共享，而完全共享专家又容易负迁移。本文让 B_i 保持跨任务共享，仅把专家混合权重改为 task-adaptive router，从而把“哪些变换专用”和“哪些专家可复用”拆开。专家热图显示 AVQA 主要依赖 B2、RAVS 更偏 B3、ARIG 同时使用 B1 与 B2；但这张图来自末端 decoder block 的 o_proj，尚不足以代表全层因果分工。

请在下图读取 B1、B2、B3 的 3 行权重，比较 AVQA、RAVS 与 ARIG 是否选择了不同的 task-adaptive expert 路径。

[![Visualization of task-specific expert preferences across diverse AVMML tasks.](https://arxiv.org/html/2608.24209v1/figures/headmap.png)](https://arxiv.org/html/2608.24209v1/figures/headmap.png)

热图中 AVQA 对 B2 的权重为 0.56，RAVS 对 B3 为 0.42；ARIG 在 B1 与 B2 上分别为 0.42 和 0.40。列间偏好确实不同，但仍不能代表全层因果分工；数值仅限于最后 decoder block 的 o_proj。


3. 多模态 LLM 原生只能生成文本，难以统一像素级任务。作者以 MASK token 的末层 embedding 充当 mask prompt，并连接视觉特征与 SAM decoder，使 AVS、RAVS 和文本式定位、问答共用同一指令主干。RAVS unseen 的明显提升支持这一接口在未见概念上的价值；边界是分割分支仍需额外 decoder 和训练阶段，并非单一语言头包办所有输出。

4. 多任务架构常只给平均分，难以判断冲突是否真的被解除。本文同时提供单位矩阵初始化、任务感知梯度解释、子空间几何分析、专家偏好和推理时置零消融，形成从机制到结果的证据链。完整配置在 AVEL 上显著优于去除 Λ 的版本，去掉任一 B_i 后下降更大；但没有多随机种子方差，仍无法量化这些差异的统计稳定性。

### 📊 实验结果

先看统一训练是否在不同目标域都优于同主干 Crab，以及哪里仍出现负迁移。下表保留每个任务最能反映其核心输出的一项指标；除 RAVS 使用 unseen 子集外，其余按论文主表设置，所有指标均越高越好。

| 任务 / 数据集设置 | 指标 ↑ | Crab | Ours |
|---|---:|---:|---:|
| AVEL / AVE | accuracy | 74.0 | 77.8 |
| AVVP / LLP | segment-level F1 | 55.9 | 60.1 |
| ARIG / AVSBench | cIoU | 39.4 | 41.1 |
| AVQA / MUSIC-AVQA | overall accuracy | 76.4 | 76.1 |
| AVS MS3 / AVSBench | mIoU | 58.2 | 59.6 |
| RAVS unseen / Ref-AVS | mIoU | 45.6 | 52.1 |

这组结果显示统一模型并非只在单一输出上获益：时序、空间与像素任务都改善，RAVS unseen 的增幅最醒目；AVQA 则从 76.4 降到 76.1，出现退化并构成明确的负面结果。论文正文写 76.11%，而主表按 1 位小数列为 76.1；这里把表格口径用于横向比较，不把二者混成额外测量。

在 AVE dataset 的 general-purpose unified comparison 条件下，Ours 对比 Crab [52] 的 accuracy 达到 77.8%，并改善 +3.73 accuracy score，越高越好；这说明统一训练没有牺牲该目标域的时序定位上限。

在 LLP dataset 的 AVVP segment-level 条件下，our method 相对 Crab [52] 的 F1 改善 +4.20 F1 score，越高越好；event-level F1 同时改善 +4.22 score，收益不只来自单一时间粒度。

在 AVSBench 的 ARIG 条件下，Ours 对比 Crab [52] 的 cIoU 达到 41.1 unitless，越高越好；对应 AUC 为 41.7，同样超过 Crab 的 40.1，空间声源定位的增益与统一表一致。

在 Ref-AVS 的 RAVS unseen subset 上，Ours 对比 Crab [52] 的 mIoU 达到 52.1%，单位为 %，越高越好；基线为 45.6%，因此这条 public generalization 证据直接针对未见概念，而非训练内类别。

组件表要回答的是：收益来自 task id 控制的 Λ，还是仅仅来自多放几个专家。各变体在同一训练模型上把对应权重于推理时置零，因此是同主干直接消融。

| 推理配置 | AVEL fully acc. ↑ | AVVP Seg. type ↑ | ARIG cIoU ↑ | AVQA acc. ↑ |
|---|---:|---:|---:|---:|
| 置零 Λ | 75.0 | 57.4 | 40.9 | 75.3 |
| 置零 B1 | 64.7 | 54.8 | 37.1 | 73.6 |
| 置零 B2 | 67.1 | 54.3 | 36.3 | 73.1 |
| 置零 B3 | 67.2 | 55.0 | 37.1 | 73.1 |
| 完整 Λ+B1+B2+B3 | 77.8 | 58.2 | 41.1 | 76.1 |

在 AVEL 上，置零 Λ 后，task-disentangled LoRA without Λ 的 fully accuracy 为 75.0 points；完整配置为 77.8，指标越高越好，说明 task-specific modulation 的作用可以和共享专家区分开。去掉 B1 的下降最剧烈，但 B2、B3 也不是冗余头；与此同时，在 RAVS Mix 的专家数比较中，3 experts 的 mIoU 为 46.7 unitless，4 experts 为 39.0 unitless，越高越好；增加到 4 experts 虽把 AVQA accuracy 从 76.1% 提到 76.4%、AVS MS3 mIoU 从 59.6 unitless 提到 60.8 unitless，却使 RAVS 明显退化，揭示容量增加仍会重排任务收益。

### 🔬 细节详述

完整数据集由 AVE、LLP、MUSIC-AVQA、AVSBench 和 Ref-AVS 构成，训练集总计 66,802、测试集总计 17,003。AV-UIE 作为 instruction tuning 语料，由这些数据通过显式推理增强构建。任务指标各自保留原定义：分类或问答用 accuracy，AVVP 用 segment/event F1，ARIG 用 cIoU 与 AUC，AVS/RAVS 用 mIoU 与 F1，RAVS 另报告越低越好的 null score。

每个视频均匀采样 10 帧，并将各帧缩放到 224×224。音频统一重采样为 16 kHz，并提取 128 维 log-mel filterbank；Povey 窗长 25 ms、帧移 10 ms。CLIP-ViT-L/14 与 BEATs 分别作视觉和音频 encoder；两侧 Q-Former 各使用 32 个 learnable query token，再由 MLP 投影到 LLaMA-2-7B-Chat 的隐藏维。

LoRA 放入所有 linear layer，rank 为 8。Λ_t 以单位矩阵初始化，专家采用 3 个头；任务自适应 router 经 softmax 产生组合权重。论文没有给出温度 \(\tau\) 的具体值，也未说明 LoRA alpha、dropout、哪些 LLM 层是否另行解冻、任务 batch 混合比例和梯度裁剪。

第一阶段用 AdamW，学习率 1×10^-4，训练 5 epochs；per-device batch size 为 8，gradient accumulation 为 8，硬件是 4 张 NVIDIA A40。论文未给出 AdamW 的 weight decay、\(\beta\) 参数、学习率调度、warmup、随机种子和训练时长，因此复现实验仍需从作者实现确认这些项。

分割支路使用 2 组 MASK token，对应视觉 encoder 第 14 层与倒数第 2 层的 2 种尺度，每组 3 个 token。该支路额外训练 30 epochs，batch size 为 8。\(\lambda_{txt},\lambda_{seg},\lambda_{bce},\lambda_{dice}\) 依次设为 1.0、0.5、1.0、0.5；论文没有说明推理分辨率之外的 mask 后处理、阈值和内存占用。

推理时必须先确定任务类型，才能选择 Λ_t 并产生对应专家权重；文本任务经语言头输出，分割任务还要调用 mask decoder。作者没有报告 latency、throughput、可训练参数总量、FLOPs 或显存峰值，所以“参数高效”和实际部署成本之间仍缺少测量闭环。

### 🚨 局限与问题

实验覆盖 6 个任务和 5 个公开数据来源，但统一 instruction tuning 依赖 AV-UIE 的推理增强语料，尚未隔离数据增强与 LoRA 结构的贡献。直接消融集中于专家数量、Λ 和推理时置零专家，未报告随机种子、方差、任务采样比例、温度 τ、LoRA 缩放与 dropout、训练成本或真实部署延迟，因此还不能判断收益对优化配方和资源预算的稳定性。

### 进一步审视

### 由论文实验直接显示的边界

收益并非单调：AVQA 仍是未获益任务，4-expert 版本在 AVQA 与 AVS MS3 保有局部优势。3-expert 版本在多数任务更平衡，尤其 RAVS 明显更强，但这说明专家容量不是简单的越多越好；任务之间仍会通过共享专家竞争。消融主要在推理时把 Λ 或 B_i 置零，能证明组件对已训练模型的重要性，却没有替代从头训练的结构移除实验。

RAVS unseen 的提升支持公开泛化，但全部任务仍来自固定的 5 个数据来源和 AV-UIE 指令语料。框架依赖已知 task id 来选择 Λ_t，正文没有评测新任务冷启动、任务身份错误、跨数据域噪声或任务持续增加时的扩展行为，因此“versatile”应理解为对既定任务集合的统一适配。

### 从复现与部署角度仍需追问

论文没有多随机种子均值、方差或显著性检验，部分小幅收益可能受训练波动影响。温度 \(\tau\)、任务采样比例、LoRA alpha 与 dropout、优化器完整配置和解冻策略也未说明，这些变量都可能改变专家塌缩和负迁移程度。

系统没有给出可训练参数量、训练时间、显存、latency 或 throughput，因而只能确认结构上使用低秩更新，不能据此推断真实成本。分割输出另接 SAM mask decoder 且多训练 30 epochs，部署者还需测量它相对纯文本任务增加的资源占用。

### 🔗 开源与复现资源

本文没有给出自有代码、checkpoint、新数据集或在线 Demo 的 HTTPS 地址。正文逐项列出的是第三方数据资源：AVE 为 https://github.com/YapengTian/AVE-ECCV18，LLP 为 https://github.com/YapengTian/AVVP-ECCV20，MUSIC-AVQA 为 https://github.com/GeWu-Lab/MUSIC-AVQA，AVSBench 为 https://github.com/OpenNLPLab/AVSBench，Ref-AVS 为 https://github.com/GeWu-Lab/Ref-AVS；AV-UIE 也来自 Crab [52]。这些链接能帮助取得评测数据，却不能作为本文 task-disentangled LoRA 已开源的证据。复现者目前只能依据论文中的模型、数据和训练配置重建，未说明项仍需等待作者实现或补充材料。

### 💡 研究者判断

真正有价值的是把“共享什么、隔离什么、怎样再协作”落实为 A→Λ_t→B_i 的参数路径，并用 RAVS 未见类收益和置零消融证明这不是纯命名。遗憾也很具体：AVQA 没有获益，专家数改变任务间输赢，且没有随机种子统计和成本测量。它值得复现为多任务适配器，而不是已经证明可无限扩展的通用音视频系统。

`<details>`
`<summary>`⚖️ 评分理由（展开查看）`</summary>`

* 创新性 (1.8/2)：A→Λ_t→B_i 把共享低秩基、任务专用变换和跨任务专家明确分责，并针对 HydraLoRA 的任务耦合提出实质结构改动，给 1.8/2。

* 技术严谨性 (1.3/1.5)：公式、单位矩阵初始化、梯度方向与几何解释形成较完整技术链，但几何上界较弱且没有更严格的冲突度量，给 1.3/1.5。

* 实验充分性 (1.4/1.5)：实验覆盖 6 个公开任务、统一和任务专用基线、专家数及组件置零消融；缺少多随机种子统计与从头移除组件，给 1.4/1.5。

* 清晰度 (0.9/1)：架构、公式、主表和消融表组织清楚，个别符号 T 同时用于片段与任务、正文数字口径 76.11/76.1 略显不统一，给 0.9/1。

* 影响力 (1.3/1.5)：统一处理时序、空间、像素与问答任务，并在 RAVS unseen 上有明显收益；AVQA 轻微退化限制了普遍性，给 1.3/1.5。

* 开源 (0.0/1.5)：正文只有第三方数据集链接，没有本文代码、权重、新数据或 Demo 的发布证据，按 none 锚点给 0/1.5。

* 可复现性 (0.3/0.5)：论文给出主要预处理、rank、学习率、epoch、batch、损失权重和 A40 配置，但缺温度、采样、随机种子和优化器细节，给 0.3/0.5。

* 工程/实践价值 (0.9/1.5)：方法具有参数高效多任务适配潜力，却未报告可训练参数、训练成本、latency、throughput 或显存测量，工程分受上限约束为 0.9/1.5。

`</details>`

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
