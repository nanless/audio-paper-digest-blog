---
title: "Task-disentangled Low-Rank Adaptation for Versatile Audio-visual Multi-modal Learning Tasks within a Unified Framework"
date: 2026-08-26
draft: false
tags: [音视频理解, LoRA, 多任务学习, 多模态模型]
categories: [论文速递]
description: "音视频理解 | 7.4/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.24209"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 Task-disentangled Low-Rank Adaptation for Versatile Audio-visual Multi-modal Learning Tasks within a Unified Framework

标签：#音视频理解 #LoRA #多任务学习 #多模态模型

**7.4/10** | 创新 1.7/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

✅ **7.4/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #音视频理解 | #LoRA | #多任务学习 #多模态模型 | [arxiv](https://arxiv.org/abs/2608.24209)


### 👥 作者与机构

第一作者：Hanyu Xuan（School of Big Data and Statistics, Anhui University, Hefei 230039, China）
通讯作者：Junjun Mao；Zhiliang Wu
作者列表：Hanyu Xuan、Mengqi Zhang、Junjun Mao、Fei Wang、Kun Li、Guanghui Yue、Zhiliang Wu、Hehe Fan（机构：School of Big Data and Statistics, Anhui University, Hefei 230039, China；Institute of Artificial Intelligence, Hefei Comprehensive National Science Center, Hefei 230026, China；College of Information Technology, United Arab Emirates University, Abu Dhabi 15551, United Arab Emirates；School of Biomedical Engineering, Shenzhen University, Shenzhen 518060, China；College of Computing and Data Science, Nanyang Technological University, Singapore 639798, Singapore；School of Artificial Intelligence, Zhejiang University, Hangzhou 310007, China）

### 📌 核心摘要

这篇工作的可证伪判断是：在既定的 6 类音视频多模态任务中，把更新写成 A→Λ_t→B_i 能缓解共享低秩适配器的任务干扰，却没有消除它。矛盾来自两端的真实需求：定位、问答和分割都想复用共同的音频—视觉—语言主干与参数预算，但它们的监督、输出和有用更新方向并不相同。Crab 的 HydraLoRA 已让共享矩阵 A 与多个专家头服务多任务，但所有任务仍进入相同的低秩空间，且专家路由主要随输入变化；作者因此让每个已知任务先经过自己的 Λ_t，再按任务自适应权重汇入共享 B_i。

这不是把所有输出伪装成文字。波形与视频帧先分别对齐到 LLaMA-2-7B-Chat 的语言空间，文本类任务由语言头解码；AVS 与 RAVS 则从生成的 MASK token 取末层 embedding，连同视觉特征交给 SAM mask decoder 生成掩码。跨任务主表中，Ours 在 AVE、AVVP、ARIG、AVS 和 RAVS 均超过同主干 Crab，最有辨识度的是 Ref-AVS unseen 的 mIoU 从 45.6% 升至 52.1%。

反例同样决定结论边界：MUSIC-AVQA 没有超过同主干 Crab；从 3 个专家改为 4 个专家后，AVQA 与 AVS MS3 更好，但 RAVS mIoU 从 46.7 降至 39.0。因而该方法的价值在于把“何处共享、何处隔离、何处再协作”落实成可检查的参数路径，而不是证明专家越多或统一训练必然优于单任务。

### 🏗️ 方法概述和架构

每个样本由连续音视频片段和任务专用文字指令构成。视觉分支把均匀采样的视频帧送入 CLIP-ViT-L/14，音频分支把波形送入 BEATs；2 路特征各自经过 Q-Former 与 MLP，投影到 LLaMA-2-7B-Chat 的隐藏空间。文字指令则经 tokenizer 和词嵌入层得到文本 token。系统不在 encoder 输出处粗暴相加，而是将指令中的音频、视觉特殊 token 替换为相应对齐表示，再插入并串接为 \(H=g(H_v,H_a,H_{txt})\)。这一步的职责是统一输入协议：音频路径负责把声学证据译为语言主干可读的 token，视觉路径提供画面证据，文字路径保留任务与查询语义。

请在下图沿 waveform、video frames 与 task-specific textual instruction 3 条支路，追踪 Q-Former、MLP 和特殊 token 替换怎样构成统一输入。

[![Overview of our proposed unified framework for versatile AVMML tasks.](https://arxiv.org/html/2608.24209v1/figures/2.png)](https://arxiv.org/html/2608.24209v1/figures/2.png)

图中 audio 与 visual encoder 分列两侧，各自接 language alignment module；文字经 Tokenizer 与 Word Embedding 后合流，右端列出 AVEL、AVVP、ARIG、AVS、RAVS、AVQA。可见的并行输入路径解释了统一输入主干，但图本身未展示 MASK token 到 mask decoder 的像素输出接口。


这张总览图说明统一的是输入主干，而不是所有任务共用同一种输出头；输出接口的分叉将在下文展开。

共享主干中的关键更新不是普通 LoRA 的 \(BAH\)，而是 \(\Delta W_t=\sum_i p_{t,i}B_i\Lambda_tAH_t\)。A 先把任务 \(t\) 的输入压进所有任务共用的 rank-\(r\) 低秩基，承担可迁移的音视频知识；\(Λ_t\in\mathbb{R}^{r\times r}\) 再以 task id 选中，对这份共享表示做任务专用变换；最后多个 \(B_i\) 把变换后的表示映回输出维度，task-adaptive router 以温度 \(\tau\) 的 softmax 权重 \(p_{t,i}\) 混合这些跨任务专家。相邻模块不能互相替代：只保留 A 会让任务落在同一子空间；只做每任务私有 LoRA 会失去专家复用；只让输入决定专家又无法显式区分任务身份。

请在下图从共享主干的关键更新 A 开始追踪 task id 选中的 Λ_t，再观察 router 如何混合 B_i 并与 pretrained weights 的直通路径相加。

[![Architecture of the proposed task-disentangled LoRA, where A, 𝚲t\\mathbf{\\Lambda}_{t}, and Bi\\textbf{{B}}_{i} denote task-general low-rank matrix, task-specific modulation matrices, and cross-task collaboration expert heads, respectively.](https://arxiv.org/html/2608.24209v1/figures/3.png)](https://arxiv.org/html/2608.24209v1/figures/3.png)

图中 A 连到 Λ_1…Λ_T 的任务专用分支，选中的 Λ_t 再送入多个 B_i；彩色 router 权重在专家输出后汇合，雪花和火焰标记 frozen 与 trainable 路径。它显示相邻模块不能互相替代的共享、调制和协作职责，但仍依赖已知 task id。


\(Λ_t\) 从单位矩阵开始初始化，所以训练起点保持原有低秩乘法；随后每个任务的 Λ_t 接收独立梯度，可逐渐转向各自模式。论文的几何论证只说明不同 Λ_t 有机会让任务子空间不再共线，而非保证任何两任务都会自然分离；真正需要看的是后文的表示图和消融。

普通时序定位、事件解析、声源定位和问答沿语言头生成结构化文本。AVS、RAVS 的分割接口则扩展词表：模型生成多组 MASK token，取这些 token 的末层 embedding 作为 prompt，与视觉特征共同输入 SAM mask decoder，输出 \(\widehat M\in\mathbb{R}^{T\times C\times H\times W}\)。因此 LLM 负责共享理解与生成提示，mask decoder 负责像素空间的解码，后者并非语言头直接吐出掩码。

训练时，所有任务共享自回归交叉熵 \(\mathcal L_{txt}\)；有分割监督的任务额外使用 \(\mathcal L_{seg}\)，其中包含 BCE 与 Dice，两者组成 \(\mathcal L=\lambda_{txt}\mathcal L_{txt}+\lambda_{seg}\mathcal L_{seg}\)。这个接口把统一主干和异构监督接起来，但也意味着分割分支不是零成本附属组件。

### 💡 核心创新点

1. HydraLoRA 的共享 A 与输入依赖路由能够节省参数，却让不同任务先进入相同的低维坐标，再由没有显式 task id 的分支竞争专家。本文新增的 Λ_t 把任务身份放在共享 A 之后：共享基仍可吸收通用音视频规律，任务变换却可保存不同的梯度方向。Fig. 1 的 t-SNE 中，HydraLoRA 的 Low Rank Space 有大量多色重叠，而本文方法的同色点簇更紧、更分开；这与“已知任务的表征更可分”一致，但不证明未见任务会自动选到合适的 Λ_t。

请在下图比较上排 HydraLoRA 与下排 task-disentangled LoRA：观察 Low Rank Space 中多种任务颜色是否仍明显混叠。

[![T-SNE visualization of task-specific features extracted from the output linear layer of the final block in LLaMA-2-7B \[5\], comparing HydraLoRA \[6\] and the proposed LoRA after fine-tuning on six AVMML tasks.](https://arxiv.org/html/2608.24209v1/figures/T-sne.png)](https://arxiv.org/html/2608.24209v1/figures/T-sne.png)

图由 2×2 个散点面板组成，上排是 HydraLoRA、下排是 task-disentangled LoRA，左右分别标为 Low Rank Space 与 Full Rank Space；下排的同色簇更集中。它直观支持 Λ_t 在固定任务集合中提高表示可分性，但图中未见任务样本，尚未验证新任务会自动获得合适变换。


2. 每个任务并未独占完整的 B_i 集合，而是保留跨任务专家并用 task-adaptive router 分配权重。这层设计试图避免 2 种极端：全私有 LoRA 会把可迁移知识重复存多份，而无任务条件的专家会把冲突隐藏在输入路由里。最后 decoder block 的 o_proj 热图给出不同偏好：AVQA 对 B2 的权重为 0.56，RAVS 对 B3 为 0.42，ARIG 同时偏向 B1 的 0.42 与 B2 的 0.40。

请在下图读取 B1、B2、B3 在 AVQA、ARIG、RAVS 三列的权重，判断 task-adaptive router 是否为不同任务选择不同专家组合。

[![Visualization of task-specific expert preferences across diverse AVMML tasks.](https://arxiv.org/html/2608.24209v1/figures/headmap.png)](https://arxiv.org/html/2608.24209v1/figures/headmap.png)

热图是 3 行 7 列，单列 3 个权重约和为 1；AVQA 的 B2 为 0.56、RAVS 的 B3 为 0.42，ARIG 对 B1/B2 分别为 0.42/0.40。这些颜色差异支持 task-adaptive expert preference，但尚未证明全层专家的因果分工，因为证据来自末端 o_proj 层。


3. MASK token 把语言主干的末层表示变成 mask prompt，使 AVS、RAVS 能同定位和问答共用输入、主干与 LoRA。这个贡献不是“文本 LLM 已统一输出一切”，而是明确增加视觉特征与 SAM mask decoder 的接口。Ref-AVS unseen 的收益使这条桥接有实际价值，但掩码监督、额外训练阶段和 decoder 也保留了像素任务的专用成本。

4. 表示分离和热图只能说明相关性，Table X 才直接测试已训练模型依赖哪些部分：把 Λ 或任一 B_i 在推理时置零，所有列都会下降，B1 移除最严重。该实验与参数路径相符，却仍不是从头移除模块并重训的消融；它回答“此模型现在靠什么”，没有量化“换结构后训练能否仍达到同一最优点”。

### 📊 实验结果

先看同一统一主干是否真的覆盖了不同输出形态。Table II 将 Crab 和 Ours 放在 AVE、LLP、AVSBench、MUSIC-AVQA、Ref-AVS 的对应任务上比较；下表只保留每一能力域最便于横向阅读的一项指标，所有列均为越高越好。

| 能力域与设置 | 指标 ↑ | Crab | Ours | 差异 |
|---|---:|---:|---:|---:|
| AVEL / AVE | accuracy | 74.0 | 77.8 | +3.8 |
| AVVP / LLP | segment-level event F1 | 55.9 | 60.1 | +4.2 |
| ARIG / AVSBench | cIoU | 39.4 | 41.1 | +1.7 |
| AVQA / MUSIC-AVQA | accuracy | 76.4 | 76.1 | -0.3 |
| AVS MS3 / AVSBench | mIoU | 58.2 | 59.6 | +1.4 |
| RAVS unseen / Ref-AVS | mIoU | 45.6 | 52.1 | +6.5 |

在 AVE dataset 的 general-purpose unified comparison 中，Ours 相对 Crab [52] 的 accuracy 为 77.8，报告改善 +3.73 accuracy score，越高越好。它表明统一适配并未压低该时序定位任务，但这条结果的适用范围限于时序定位。

在 LLP dataset 的 AVVP segment-level 设置中，our method 相对 Crab [52] 的 F1 scores 报告改善 +4.20 F1 score，越高越好；同表的 event-level event F1 从 49.0 到 53.2，说明收益并非只出现在单一时间粒度。

在 AVSBench dataset 的 ARIG task，proposed method 对 Crab [52] 的 cIoU 为 41.1 cIoU，越高越好，AUC 也由 40.1 升至 41.7。空间声源定位因此支持统一接口可服务结构化空间输出。相反，MUSIC-AVQA 的 accuracy 为 76.1，低于 Crab 的 76.4，出现退化；这正是主表不宜概括成“6 任务全面提升”的原因。

在 Ref-AVS dataset 的 RAVS unseen subset，Ours 相对 Crab [52] 的 mIoU 为 52.1%，单位为 %，越高越好；Crab 为 45.6%，F1 也从 63.0% 升到 69.5%。这条证据更有价值，因为比较对象相同且测试对象是 unseen 子集；但它仍在 Ref-AVS 的既定任务与标注体系内，结论范围限于论文的任务身份与数据域。

Table X 的比较条件很关键：它不重新训练变体，而是在同一训练完成的模型推理时把 Λ 或某个 B_i 权重置零。因此表回答的是完整模型当前依赖哪些路径，而不是新结构从头优化后是否同样更好。

| 推理时保留的组件 | AVEL fully acc. ↑ | AVVP Seg.-level type ↑ | ARIG cIoU ↑ | AVQA acc. ↑ |
|---|---:|---:|---:|---:|
| 无 Λ，保留 B1/B2/B3 | 75.0 | 57.4 | 40.9 | 75.3 |
| 无 B1，保留 Λ/B2/B3 | 64.7 | 54.8 | 37.1 | 73.6 |
| 无 B2，保留 Λ/B1/B3 | 67.1 | 54.3 | 36.3 | 73.1 |
| 无 B3，保留 Λ/B1/B2 | 67.2 | 55.0 | 37.1 | 73.1 |
| 完整 Λ+B1+B2+B3 | 77.8 | 58.2 | 41.1 | 76.1 |

Λ 的置零将 AVEL fully accuracy 从 77.8 降到 75.0，而去掉任一专家下降更大，尤其 B1；这与“Λ_t 负责任务变换、B_i 负责可共享协作”的分工一致。Table IX 又给出反向提醒：在 Ref-AVS RAVS 的 expert number comparison，three-expert method 对 four-expert variant 的 Mix mIoU 为 46.7 unitless，越高越好，后者是 39.0；但四专家的 AVQA accuracy 为 76.4、三专家为 76.1，AVS MS3 mIoU 也为 60.8 对 59.6。增加容量改变的是任务间资源分配，不是稳定的全局增益。

### 🔬 细节详述

训练与测试覆盖 5 个公开来源：AVE（AVEL）、LLP（AVVP）、MUSIC-AVQA（AVQA）、AVSBench（ARIG、AVS S4/MS3）和 Ref-AVS（RAVS），合计 66,802 个训练样本、17,003 个测试样本。instruction tuning 使用由这些数据经显式推理增强得到的 AV-UIE。指标保持各任务原定义：AVEL/AVQA 为 accuracy，AVVP 为 segment/event F1，ARIG 为 cIoU/AUC，AVS 与 RAVS 为 mIoU/F1；RAVS 还报告越低越好的 null score。

每段视频均匀采样 10 帧、每帧缩放到 224×224。音频波形重采样到 16 kHz，随后用 25 ms Povey window、10 ms frame shift 计算 128 维 log-mel filterbank。视觉与音频的 Q-Former 各有 32 个 learnable query token，之后才经 MLP 接到语言空间；这些数值定义了音频与视觉 token 的实际前端，而非只给出 encoder 名称。

LLaMA-2-7B-Chat 是底座，task-guided LoRA 放在所有 linear layers，rank 为 8；每个 Λ_t 从单位矩阵开始，默认使用 3 个专家。第 1 阶段采用 AdamW，学习率 \(1\times10^{-4}\)，训练 5 epochs，per-device batch size 为 8、gradient accumulation 为 8，运行在 4 张 NVIDIA A40 上。

分割接口另使用 2 组 MASK token，分别对应视觉 encoder 的第 14 层和倒数第 2 层特征，每组 3 个 token；分割分支再训练 30 epochs，per-device batch size 为 8。\(\lambda_{txt}\)、\(\lambda_{seg}\)、\(\lambda_{bce}\)、\(\lambda_{dice}\) 分别为 1.0、0.5、1.0、0.5。推理时先确定 task id，文本任务经语言头完成，分割任务还要执行 mask decoder。

温度 \(\tau\) 的值、LoRA alpha 与 dropout、任务 batch 混合比例、哪些底座层额外解冻、AdamW 的 weight decay/\(\beta\)、调度与 warmup、随机种子、训练时长、mask 阈值均未说明。可训练参数量、FLOPs、显存峰值、latency 与 throughput 也未报告；复现者不宜以“低秩”直接推断真实部署成本。

训练与评测的接口也要按任务核对：文本类任务复用自回归目标，AVS 与 RAVS 在生成 MASK token 后才以末层 embedding 提示 SAM mask decoder。因而复现实验应分别记录主干微调和分割分支的样本批次、损失权重、特征层选择及推理后处理；论文已给出了 2 个视觉层、每组 3 个 token 和 30 epochs，却没有给出 mask 阈值、解码分辨率与内存占用。

### 🚨 局限与问题

实验覆盖 6 个任务和 5 个公开数据来源，但统一 instruction tuning 依赖 AV-UIE 的推理增强语料，尚未隔离数据增强与 LoRA 结构的贡献。直接消融集中于专家数量、Λ 和推理时置零专家，未报告随机种子、方差、任务采样比例、温度 τ、LoRA 缩放与 dropout、训练成本或真实部署延迟，因此还不能判断收益对优化配方和资源预算的稳定性。

### 进一步审视

统一训练不是每项任务都赢：Table II 中 AVQA 未超过 Crab，Table IX 中 4 个专家又在 AVQA 和 AVS MS3 领先。3 个专家在 RAVS 的优势和 4 个专家在其他局部任务的优势共同说明，共享专家的容量分配仍会制造取舍；任务解耦降低了干扰，并未把它归零。

\(Λ\) 与 B_i 的支持来自推理时置零。它可以确认已训练网络会使用这些组件，却无法代替删除模块后从头训练的结构性因果对照。RAVS unseen 的提升是公开泛化证据，但所有任务仍来自固定的 5 个数据来源，系统依赖已知 task id，未评测任务标签错误、新任务冷启动、任务持续增加或跨域噪声。

论文没有多随机种子均值、方差或显著性检验，因而无法判断 AVQA 的 -0.3 或其他小幅差异是否稳定。未披露的温度、任务采样、LoRA 配方与优化细节也可能改变 router 的偏好和负迁移程度。

更重要的是，没有真实资源或时延测量。分割路径额外调用 SAM mask decoder 并训练 30 epochs，实际成本可能显著高于纯文本任务；在报告参数、吞吐、显存和延迟前，“参数高效”只能说明更新结构，不足以说明部署效率。

### 🔗 开源与复现资源

本文未给出自有代码、checkpoint、新数据集或 HTTPS Demo。全文列出的公开评测数据链接为：AVE https://github.com/YapengTian/AVE-ECCV18，LLP https://github.com/YapengTian/AVVP-ECCV20，MUSIC-AVQA https://github.com/GeWu-Lab/MUSIC-AVQA，AVSBench https://github.com/OpenNLPLab/AVSBench，Ref-AVS https://github.com/GeWu-Lab/Ref-AVS；这些 GitHub 链接对应的是公开评测数据，AV-UIE 也继承自 Crab；它们能帮助取得数据，不能证明 task-disentangled LoRA 已可直接复现。现阶段复现只能按论文重建前端、A→Λ_t→B_i、主干与分割训练与 mask decoder 接口，并自行补全未披露的优化和部署配置。

### 💡 研究者判断

如果你的研究问题是“1 个适配器能否让音视频任务共享而不互相踩踏”，这篇论文给出了比平均分更有用的答案：A 保存公共低秩基，Λ_t 把任务身份落实为可学习的局部变换，B_i 再选择可复用的协作路径。RAVS unseen 与置零消融让这条设计有证据支撑；AVQA 退化、4 专家对 3 专家的任务反转、以及没有成本和方差报告，则提醒我们把它当作 1 个值得复现的多任务适配器，而不是已经解决开放式多任务扩展的通用配方。

<details>
<summary>⚖️ 评分理由（展开查看）</summary>

* 创新性 (1.7/2)：在 HydraLoRA 的共享低秩基与多专家头之间加入按已知 task id 选择的 Λ_t，把通用基、任务变换和专家协作拆开，且统一覆盖 6 类 AVMML 输出；但核心仍是对既有 LoRA/MoE 路径的组合式改造，给 1.7/2。

* 技术严谨性 (1.2/1.5)：论文给出 A→Λ_t→B_i 的更新式、Λ_t 的单位矩阵初始化和梯度/几何解释，并明确温度 τ 控制专家权重；这些论证没有量化任务冲突或给出理论保证，给 1.2/1.5。

* 实验充分性 (1.3/1.5)：6 个公开任务的主比较同时覆盖统一模型 Crab 与多类任务专用方法，RAVS unseen mIoU 为 45.6%→52.1%，并比较 3/4 专家和 Λ、B_i 的置零；不过组件表是在推理时把权重设零，未给从头重训、随机种子方差或算力对照，给 1.3/1.5。

* 清晰度 (0.9/1)：架构、公式、主表和消融表组织清楚，个别符号 T 同时用于片段与任务、正文数字口径 76.11/76.1 略显不统一，给 0.9/1。

* 影响力 (1.2/1.5)：统一处理时序定位、空间定位、像素分割与问答，并在 Ref-AVS unseen 上从 45.6% mIoU 提至 52.1%；但 AVQA overall accuracy 为 76.1，低于 Crab 的 76.4，且 4 专家在 AVQA、AVS MS3 更好，给 1.2/1.5。

* 开源 (0.0/1.5)：正文只有第三方数据集链接，没有本文代码、权重、新数据或 Demo 的发布证据，按 none 锚点给 0/1.5。

* 可复现性 (0.3/0.5)：论文给出主要预处理、rank、学习率、epoch、batch、损失权重和 A40 配置，但缺温度、采样、随机种子和优化器细节，给 0.3/0.5。

* 工程/实践价值 (0.8/1.5)：LoRA 覆盖全部线性层且 rank 为 8，显示参数高效适配的工程意图；但未报告可训练参数量、训练时长、latency、throughput、显存或同等精度成本，给 0.8/1.5。

</details>

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
