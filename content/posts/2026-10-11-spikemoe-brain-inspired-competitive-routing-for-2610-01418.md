---
title: "SpikeMoE: Brain-Inspired Competitive Routing for Flexible Spiking Mixture-of-Experts"
date: 2026-10-11
draft: false
tags: [语音情感识别, 混合专家模型, 多模态学习, 高效推理, 鲁棒性]
categories: [论文速递]
description: "论文针对传统 softmax 门控与脉冲计算不兼容以及多模态输入缺失时选路脆弱的问题，提出基于侧抑制与不应期的 k-WTA 路由器和两阶段缺失模态补全，在视觉、语言与情感分析任务上以较低理论能耗达到与人工网络可比的精度，但结论依赖特定编码器、缺失模拟方式与理论能耗估计。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.01418"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用脉冲竞争选专家：SpikeMoE 如何兼顾稀疏计算与缺失模态"
paper_digest_original_title: "SpikeMoE: Brain-Inspired Competitive Routing for Flexible Spiking Mixture-of-Experts"
paper_digest_arxiv_version: 2
paper_digest_arxiv_versioned_id: "2610.01418v2"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.01418v2"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.01418v2.pdf"
paper_digest_primary_task: "语音情感识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 5.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对传统 softmax 门控与脉冲计算不兼容以及多模态输入缺失时选路脆弱的问题，提出基于侧抑制与不应期的 k-WTA 路由器和两阶段缺失模态补全，在视觉、语言与情感分析任务上以较低理论能耗达到与人工网络可比的精度，但结论依赖特定编码器、缺失模拟方式与理论能耗估计。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaoli Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yujie Liang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jialin Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenxiao Dou"},{"affiliations":["School of Computer Science and Engineering,","University of Electronic Science and Technology of China"],"name":"Malu Zhang"}]
paper_digest_abstract_sha256: "30a7c16baffa994b206bbfe54ba18bb0e480262627df4cf010fb101a480f6e5f"
paper_digest_sidecars: {"citation.bib":{"sha256":"d988071e26845dc14a828c2c2ab12c1bf1dd02b6dcf8b1e0b55f4b7679f5b0ed","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-01418/citation.bib"},"citation.json":{"sha256":"4c0cdfbf8ae1e45d598284046f644410e51ed40af7bd40fbb3e31c51d8d17a3b","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-01418/citation.json"},"citation.ris":{"sha256":"c4ee6ac872358f4fcdf9dd5476466a8a60c5c13661d9b584c0bb158688f89190","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-01418/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"1ca4b1b82d40c03c2b87eac6ce91b6b81861fdc850b27a5e2728a26ddb322682","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-01418/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "36fc7b0bd1f4bb3b0c0868120aba623a89dedac24d7718d047bfdbb1120f9ea4"
paper_digest_api_reader_plan_sha256: "22b39b3cfe3af367344d51496928f512f6e49175f2f0f9ac115f29b4e0343954"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "31cad01b08974a12e0b8fc7f03f7fb5bfc480860b478759c547c7f3af03eb053"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "97a3fbf7b8055d240d673e6964b04a60ed00afe63469d3c9a6d4b7ca381d1ba5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7e16d96f77348fe9030ee63a9eec7f09b286de79e8a9250d6125006b955478b1"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8914c60d64bffebf49fdfc3be64477cb06f7bbfd0b67779d8e9f246ec4a2930f"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用脉冲竞争选专家：SpikeMoE 如何兼顾稀疏计算与缺失模态

> 英文题目：*[SpikeMoE: Brain-Inspired Competitive Routing for Flexible Spiking Mixture-of-Experts](https://arxiv.org/abs/2610.01418v2)*

> 标签：#语音情感识别 | #混合专家模型 | #多模态学习 | #高效推理 | #鲁棒性
>
> 评分：**5.9/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Xiaoli Liu：机构信息未在 arXiv HTML 中可靠披露
- Yujie Liang：机构信息未在 arXiv HTML 中可靠披露
- Jialin Li：机构信息未在 arXiv HTML 中可靠披露
- Chenxiao Dou：机构信息未在 arXiv HTML 中可靠披露
- Malu Zhang：School of Computer Science and Engineering,；University of Electronic Science and Technology of China

## 📌 核心摘要

论文处理的不完整多模态感知任务输入是视频、文本、音频等模态的脉冲编码特征，输出是类别或情感极性分数，难点是传统混合专家模型（Mixture-of-Experts，MoE）用连续 Softmax 打分选专家，与脉冲神经网络（Spiking Neural Networks，SNN）的离散事件计算不兼容，且缺失模态会破坏路由依据。脉冲 k-WTA 路由器（k-Winner-Take-All Router）把输入电流送入泄漏积分发放神经元，用可学习侧抑制矩阵压低已发放专家对应其他专家的膜电位，再用不应期计数器阻止同一专家连续独占，最后按 \(t\) 个内部仿真步内的脉冲计数取 Top-K 并按计数比例分配权重。两阶段缺失模态建模先从训练集观测模态池中采样 \(K\) 个同模态实例取均值补全，池不可用时回退到模态专属可学习嵌入，使各模态编码器仍能接收完整输入序列。补全后的多模态脉冲特征经过多头脉冲自注意力与脉冲专家多层感知机处理并输出任务损失。与直接替换前馈层的脉冲基线和连续 Softmax 门控相比，该组合保留了稀疏条件计算并减少了乘加操作。在 CMU-MOSI 缺失率为 50% 的随机丢弃设置下，SpikeMoE 的 F1 为 43.54%，AUC 为 67.30%，在同表 SNN 方法中居首并接近 FuseMoE 等人工神经网络方法。结论适用于论文测试的图像分类、语言理解和三模态情感与视听分类范围，视频加音频组合效果仍偏弱，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的输入输出是什么

论文处理 3 类输入。视觉任务输入是 224×224 图像，目标是输出 1000 类分类标签；语言任务输入是文本词序列，目标是在 GLUE 的 8 个子集上输出分类或回归值，例如情感、相似度与蕴含判断；多模态情感任务输入是视频、文本、音频 3 路特征，目标是输出情感极性相关分数，评价用 F1 和 AUC，值越高越好。信息维持涉及两个层面：在神经元层面维持脉冲离散事件特性，沿用加法与掩码运算。

在模型层面维持只计算少数专家的稀疏性。输出除预测标签，还包括路由器 Top-K 选择与权重。论文关注的情形是真实多模态输入常常只保留一路或两路，输入变少同时影响专家表征与路由依据，简单填零或全局插值在多种模态组合下性能波动明显。后续设计围绕脉冲计算条件下选择专家，以及在部分输入缺失时仍给出可用多模态表示。

### 已有路线做了什么与没解决什么

原文把相关工作分成两条线。第一条是脉冲多模态学习，包括视听分类与情感识别，例如用多阈值脉冲神经元同步视听脉冲、用视觉听觉单模态子网加注意力跨模态子网做融合、以及把 Transformer 改成脉冲版本。这类工作验证了脉冲编码器处理多模态的可行性，路由多为稠密或连续加权，专家选择的脉冲化是本篇着力点。

第二条是缺失模态学习，人工网络中有用生成对抗网络估计缺失模态的半监督方法，有用共享与特有表示加多损失学习缺失估计的 ShaSpec，也有把多种缺失组合分配给各个专家的 FuseMoE。论文指出 ShaSpec 需要多个辅助损失、优化代价大，FuseMoE 仍用 softmax 门控。比较的公平条件是原文在多模态实验中统一模态编码器架构，人工网络用与脉冲编码器结构对等的版本，以隔离编码器差异的影响。

因此已有路线与本篇的差别在于运行阶段的计算约束各异：本篇要求路由全程只依赖 0/1 脉冲累加，而此前多数门控依赖浮点分数。

### 为什么 softmax 选路与脉冲计算冲突

传统混合专家对输入矩阵乘以路由权重后做 softmax 再取 Top-K，得到连续权重后加权专家输出。softmax 需要对所有专家分数做指数与全局归一化，这与脉冲神经网络希望用加法与掩码代替乘加、侧重局部运算的原则差异明显。论文把问题拆成机制层与感知层。机制层是直接用脉冲活动选专家：既要比较专家优劣，又要维持高频神经元与低频神经元之间的动态平衡，维持路由多样性，使选择结果覆盖多个专家。

感知层是在模态缺少时仍稳定选路：缺少使路由器看到的上下文部分残缺，若只用全局可学习向量填充而缺少对已观测模态的结合，补全表示与真实分布可能错位。论文以海马 CA1 区的竞争抑制现象为灵感，提出用发放次数排序代替 softmax 分数，用侧抑制与间隔等待维持竞争动态平衡，再用 2 阶段补全保证多种缺失组合下仍有输入可算。

### SpikeMoE 的整体流程是怎样的

一个样本先经过各模态专属的脉冲编码器得到脉冲序列，缺失模态先由 2 阶段模块补出表示，再与存在模态拼接并加上脉冲位置嵌入，进入多头脉冲自注意力与 SpikeMoE 层堆叠，最后经分类头输出。SpikeMoE 层内部包含一个 k-WTA 路由器和多个脉冲多层感知机专家，每个专家是批量归一化、线性层与脉冲神经元层的两段堆叠。路由器为每个样本独立运行一段 wta 时间步，统计每个专家神经元的发放总数，取前 K 个作为被选专家并按计数比例分配权重，只有被选专家的输出参与加权求和。

在 ImageNet 与 GLUE 实验中做法更加轻量：把基线模型中的前馈网络层替换为 k-WTA 路由器加专家的结构，其余主干维持原样，以验证路由器的通用性。在多模态实验中使用完整 SpikeMoE，包含注意力、专家与缺失建模。

**脉冲神经网络 × 混合专家模型：** 脉冲神经网络指用 0/1 脉冲序列传递信息、只在膜电位越过阈值才发放的计算方式，负责神经元尺度的稀疏事件驱动；混合专家模型指为每个输入只激活 Top-K 个专家子网络的条件计算结构，负责模型尺度的稀疏选路。二者搭配的意义是把两种稀疏性叠加：脉冲保证单次运算便宜，专家选择保证每次只算少数参数，SpikeMoE 用脉冲发放次数来决定选哪个专家，使两种机制在同一路由信号上衔接。

下面先看总体框架图以建立输入到输出的空间位置感，这张图展示了编码器、注意力、路由与补全模块的连接关系。

> **看图路径：** 1. 沿底部模态编码器经相加到注意力再到 SpikeMoE 层最后到分类头的主路径看数据流向；2. 对比右侧普通脉冲神经元与下方带不应期和侧抑制标注的专家神经元的差异；3. 注意右侧缺失模态建模虚线框如何回接到黄色缺失模态编码器

[![原论文 Figure 1：(a) Overall general framework; (b) Spike expert neuron.](https://arxiv.org/html/2610.01418v2/main_figure.png)](https://arxiv.org/html/2610.01418v2/main_figure.png)

*论文图 1。原论文 Figure 1:：“(a) Overall general framework; (b) Spike expert neuron.”。*

从图中可见底部 3 个模态编码器向上汇入同一加法节点，再进入中间的注意力与 SpikeMoE 层，右侧虚线框的缺失模态建模通过黑色回线接到缺失模态的编码器位置，说明补全发生在编码之前，先于分类头。右侧上下对比显示普通脉冲神经元只有树突求和、胞体积分与阶跃发放，而专家神经元额外标出间隔等待与侧抑制回路，这正是后文公式要量化的两处改动。

### 路由器如何用膜电位与侧抑制做竞争

路由器为每个样本维护一批专家神经元，每个神经元对应一个专家。每个仿真步先按改进的漏积分发放模型更新膜电位，输入电流来自主干的二进制脉冲序列的加权求和，因此满足脉冲驱动的定义，即只对发放为 1 的前突触做加法。随后用上一时刻的发放向量经可学习抑制矩阵与掩码矩阵做 Hadamard 积并乘以抑制强度系数，从当前膜电位中减去，得到抑制后的膜电位。对角线置零，抑制在各个专家之间作用，矩阵随机初始化且标准差为 0.1。

这一减法使刚发放的专家压低其余专家的膜电位，从而在下一步降低其余专家越阈的可能，形成横向竞争。原文还用钳制操作把膜电位与计数值限制在大于等于零的范围，维持掩码计算的稳定。

\[V[t]=V[t-1]\cdot(1-\frac{1}{\tau})+I[t],\]

上式说明膜电位由上一时刻衰减项与当前输入电流组成，其中时间常数控制漏电速度，输入电流本身是脉冲加权和。

\[V_{inhibit}[t]=V[t]-S[t-1]\cdot(L\odot M)\cdot\gamma,\]

上式说明抑制后膜电位等于原始膜电位减去上一时刻发放经抑制矩阵调制后的量，系数控制竞争强度。图 2 的上半部分给出生物侧的 3 种抑制模式，论文实际建模的是其中侧向抑制一种；下半部分的 4 条时间曲线用红色向下箭头表示抑制作用，用橙色圈标出钳制位置，直观显示发放后如何被压低。

**侧抑制 × 不应期：** 侧抑制指一个专家神经元发放后通过可学习权重矩阵降低其他专家神经元膜电位的机制，负责在同一时刻制造竞争；不应期指神经元发放后计数器被置为固定步数、期间即使越阈也不发放的机制，负责在时间上阻止同一神经元连续垄断。二者搭配使竞争既有空间上的互斥又有时间上的轮换，组合后路由器能在多个仿真步内分散激活，避免单个专家长期占优。

读这张竞争示意图时注意抑制箭头与发放尖峰的先后关系，它解释了高频神经元优势随时间受到制约的原因。

> **看图路径：** 1. 看上面一行三种抑制模式中侧抑制对应的连接方向；2. 看左下四条膜电位曲线中红色向下箭头与橙色 clamp 标记出现的位置；3. 看右下路由器柱状计数如何只点亮其中两个专家的深色块

[![原论文 Figure 2：(a) Common inhibitory patterns in the hippocampus; (b) Competitive selection in k-WTA Router; (c)…](https://arxiv.org/html/2610.01418v2/k-WTA_Router.png)](https://arxiv.org/html/2610.01418v2/k-WTA_Router.png)

*论文图 2。原论文 Figure 2:：“(a) Common inhibitory patterns in the hippocampus; (b) Competitive selection in k-WTA Router; (c) Expert selection.”。*

图中左下 4 条曲线共用阈值虚线，越过虚线且处于可发放状态时画出红色发放尖峰，发放后紧跟的红色下箭头表示对其他通道的抑制，底部橙色 clamp 圈出被截断的数值，右下柱状计数最高的两个专家被点亮为深色，另两个置灰，说明最终选择依据的是整段时间的累积而非单步峰值。

### 不应期与脉冲计数如何决定权重

为控制同一专家在同一输入内反复发放，路由器引入不应期计数器。发放条件要求抑制后膜电位达到阈值且计数器已经归零，发放后膜电位重置为 0 且计数器置为间隔长度，此后每步减 1 直到 0，期间暂停发放。默认间隔长度为 2 步。这种时间阻断与空间抑制配合，使 Top-K 选择维持多样覆盖。路由权重采用计数比例分配，对 wta 时间步内的发放做求和得到每个专家的计数，取计数最高的 K 个，加小随机扰动打破并列，再在被选集合内按计数比例归一化，落选专家权重为 0。默认 Top-K 为 2。

\[S[t]=\begin{cases}1\ \ \text{if}\ V[t]\geq V_{th}[t]\ \text{and}\ R[t]\leq 0\\ 0\ \ \text{otherwise}\end{cases},\]

上式是发放判决，2 个条件同时满足，分别对应空间竞争后的电位与时间上的可发放状态。

\[c_{i}=\sum^{t}_{t=1}S_{b,i}[t],\ \text{for}\ i=1,2,...,E,\]

上式是计数统计，对 wta 时间步内的 0/1 序列求和，t 与主干时间步解耦，默认取 14。

\[w_{i}=\begin{cases}\frac{c_{i}+\varepsilon}{\sum_{j\in\mathcal{E}_{selected}}(c_{j}+\varepsilon)}\ \ \text{if}\ i\in\mathcal{E}_{selected}\\ 0,\ \ \text{otherwise}\end{cases}.\]

上式是权重分配，只在被选集合内归一化，扰动项有助于计数相等时完成排序。

**wta 时间步 × 主干时间步：** 主干时间步指主干脉冲 Transformer 对输入序列做时域编码展开的外层时间维度，负责表征学习；wta 时间步指路由器内部为积累专家发放次数而单独运行的仿真步数，负责路由决策。二者解耦的意义是路由可以用更长的积分窗口观察竞争动态而不必加深主干，论文默认主干用 4 或 6 步而路由用 14 步，代价是路由带来少量额外延迟但原文报告占比很低。

**脉冲计数 × 专家权重：** 脉冲计数指在 wta 时间步内每个专家神经元发放 1 的累加值，负责把离散竞争结果量化为可排序的分数；专家权重指仅对 Top-K 专家按计数加小扰动后归一化的系数，负责决定各被选专家输出如何加权求和。二者搭配把不可微的发放过程转化为稀疏加权，组合后路由不需要 softmax 的指数和全局除法即可完成选择与加权。

理解这组公式的关键是分清信号与决策：膜电位与抑制决定每步是否发放，计数与归一化决定整个样本用哪几个专家以及各占多大比例，梯度与监督细节见附录伪代码。

### 两阶段缺失模态补全具体补什么

补全对象是缺失模态在编码器输入端的表示。第一阶段定义二值掩码标记每个样本每种模态是否缺失，并约束每个样本至少保留一种模态。模态池收集训练集中所有观测到的该模态实例，当某模态缺失时从池中采样 K 个实例取平均作为填补，默认 K 为 10。第二阶段是每种模态各自的可学习嵌入，当池中可用实例为空、数据质量偏低或上下文匹配度低时作为兜底。

最终每种模态的表示按掩码选择：存在则用各自编码器输出，缺失则用池采样均值或可学习嵌入，论文称此举使各模态编码器在训练时只遇到完整形态的输入，同时兼顾模态间交互与全局表示。模态组合总数按组合数计算，原文给出总量为 2 的模态数次方减 1。

**模态池 × 可学习嵌入：** 模态池指从训练集中收集到的各模态真实观测样本的集合，负责提供有经验依据的补全来源；可学习嵌入指为每种模态维护的、与具体样本无关的参数向量，负责在池为空或质量差时兜底。两阶段策略先从池中采样 K 个实例取平均构造缺失表示，不可用时再用可学习嵌入，组合后既利用观测到的模态间关联又保证任意缺失组合都有表示可用。

看下图时重点区分两种实验设置下虚线缺失块的位置，以及右侧两种补全来源的箭头去向。

> **看图路径：** 1. 区分左侧蓝色虚线框的设置一与橙色虚线框的设置二在缺失块分布上的不同；2. 跟踪右侧虚线箭头从模态池和可学习嵌入指向左侧虚线缺失位置的补全方向

[![原论文 Figure 3：Two-stage missing modality modeling.](https://arxiv.org/html/2610.01418v2/two-stage.svg)](https://arxiv.org/html/2610.01418v2/two-stage.svg)

*论文图 3。原论文 Figure 3:：“Two-stage missing modality modeling.”。*

图中左侧上方蓝色虚线框对应随机丢弃的设置一，缺失块分散在各个模态与样本之间；下方橙色虚线框对应缺失集中的设置二。右侧上方灰色区为待补的缺失模态，中间黄色虚线框为模态池，蓝色点线箭头表示从池中取已有实例填补，下方蓝色虚线框为可学习嵌入，橙色点划线表示兜底路径。虚线与实线方块的对比说明补全前后表示槽位维持一致，只是来源各异。

### 训练目标与优化设置是什么

论文报告的训练目标由任务损失与负载均衡损失相加构成，任务损失为交叉熵，均衡损失包含利用率方差与对数专家数减熵的组合，系数控制均衡项强度，目的是鼓励专家被均匀使用。脉冲神经元用阈值 0.5、初值 0 的漏积分发放模型，反向用参数为 4 的 sigmoid 作为替代梯度。优化器与学习率调度等细节在正文引用附录，原文附录超参数表给出学习率 5e-5、隐藏维度 128、MoE 层数 2、丢弃率 0.3、训练 300 轮与随机种子 42、43、44。

原文附录超参数表还给出：专家数为 ImageNet 与 GLUE 用 4 个、多模态用 6 个或 4 个，Top-K 均为 2，主干时间步 TT 为 4 或 6，wta 时间步为 14，间隔长度为 2，抑制强度为 0.3，采样 K 为 10。这些取值出自附录正文与超参数表，后文结果表聚焦基线与路由器行的精度与能耗对比，阅读时以来源原表与附录为准。路由与专家参数均参与学习；脉冲驱动指前向电流是脉冲加权和，输出仍由发放动态决定。

### 数据集、缺失模拟与评价条件是什么

视觉用 ImageNet-1K，约 130 万训练图与 5 万验证图，输入固定为 224×224；语言用 GLUE 的 8 个子集，QQP 与 MRPC 报 F1，STS-B 报 Spearman 相关，其余报准确率；多模态用 CMU-MOSI、CMU-MOSEI 与 UrbanSound8K-AV，前两者为视听文本 3 模态情感数据，分别有 1284/229/686 与 16326/1871/4659 的训练验证测试划分，后者为 8732 个图文音频样本按 7 比 3 划分。多模态统一用 F1 与 AUC，UrbanSound8K-AV 用准确率，指标越大越好。缺失模拟有两种：设置一为随机模态丢弃，按固定比例在训练与测试中丢弃并保证每样本至少留一种。

设置二为非对称缺失，训练时随机丢一半模态，测试时每样本只保留一种或两种，以考查不同组合的泛化。硬件上 ImageNet 用 4 块 H100，其余用 8 块 4090，能耗为理论估计而非硬件实测，脉冲运算按发放率乘时间步乘浮点运算量折算为累加次数。比较的基线包括人工网络的 ShaSpec、TF、mmFormer、FuseMoE 与脉冲网络的 Weight Attention、SCA、S-CMRL 等，编码器架构已对齐以保证条件一致。

下表是原文超参数表，说明复现时必须对齐的专家数、步数与强度等关键量。

| Parameter | Value |
| --- | --- |
| Number of Expert | 4 for ImageNet-1K and GLUE, 6 for CMU-MOSI and CMU-MOSEI, 4 for UrbanSound8k-AV |
| Top-K Expert | 2 |
| K for Sampling | 10 |
| wta-timesteps tt | 14 |
| Refractory Period | 2 |

本表仅收录专家数、Top-K、采样 K、wta 时间步与不应期共 5 行。来源原表另有主干时间步 TT 为 4 或 6、抑制强度为 0.3 等行，待审表未收录，不应写成表中显示；主干时间步与抑制强度的取值引自正文与附录的超参数说明，而非本表。这些取值是后文敏感性分析的基准，改变其中一项时其余保持不变，因此结论只在该基准附近成立。

### 视觉与语言任务上路由器带来多大变化

在视觉任务上比较的问题是同一主干下把前馈层换成 k-WTA 路由加专家后，精度与理论能耗如何变化，条件是时间步均为 4 且参数量相近，指标为 Top-1 准确率，越高越好。

| Methods | Architecture | Param (M) | Energy Con- sumption (mJ) | Time Step | Top-1 Acc (%) |
| --- | --- | --- | --- | --- | --- |
| Spikformer (Zhou et al., 2022) | Spikformer-8-384 | 16.81 | 12.43 | 4 | 70.24 |
|  | Spikformer-8-384 | 16.03 | 11.39 | 4 | 73.22 |
| Spike-driven Transformer (Yao et al., 2023) | SD-Transformer-8-384 | 16.81 | 3.90 | 4 | 72.28 |
|  | SD-Transformer-8-384 | 16.03 | 3.54 | 4 | 74.52 |

本表仅显示其中 4 行，方法列为空的单元格对应同一分组的 k-WTA Router 行。本表可见 Spikformer-8-384 从 70.24% 提升到 73.22%，SD-Transformer-8-384 从 72.28% 提升到 74.52%，时间步均为 4，参数量与能耗略降。其余 512 通道、Spikingformer 等多组数字见来源原表，不应写成表中可见。限制是能耗为理论估计，且带星号的 SEMM 行为作者复现值，不是原作者直接报告，跨硬件的实际延迟需另测。图 4 的掩码可视化显示同一图像下不同专家负责不同空间区域，说明路由具有条件计算特性，但这只是单样本示例，不能推广为所有图像都如此分工。

在语言任务上比较的问题是 SpikeLM 换上路由器后与人工与脉冲基线的差距，条件是时间步为 4，平均分为 8 个子集的平均，越高越好。

| Model | Energy (mJ) | QNLI | STS-B | RTE | Avg. |
| --- | --- | --- | --- | --- | --- |
| BERTbase (Devlin et al., 2019) | 51.41 | 90.7 | 89.4 | 69.3 | 83.2 |
| SpikeLM (Xing et al., 2024) | 13.74 | 85.3 | 84.9 | 69.0 | 76.5 |
| SpikeLM+k-WTA Router | 12.45 | 86.6 | 86.4 | 69.7 | 77.7 |

表中可见 SpikeLM 平均 76.5，加入路由器后为 77.7，提高 1.2 个百分点，与 BERT 基线的 83.2 差距从 6.7 缩小到 5.5，能耗从 13.74 mJ 降到 12.45 mJ。限制是 Q2BERT 等量化基线在部分子集得 0 分，说明其实现或适配存在异常，不宜把该表读成所有人工基线都弱；LIF-BERT 的两种实现差异也提示脉冲语言模型的基线选择对结论影响大。该提升只在替换前馈层、保持主干与训练流程不变的条件下成立。

### 缺失模态下性能如何随缺失比例变化

在 CMU-MOSI 与 CMU-MOSEI 的设置一中，比较的问题是在 0% 到 50% 随机丢弃下各方法 F1 与 AUC 的鲁棒性，条件是训练测试同比例丢弃且每样本至少保留一种。原文报告在多数比例下 SpikeMoE 在脉冲基线中最优，与人工网络的 FuseMoE 接近，例如 50% 缺失时 CMU-MOSI 的 F1 为 43.54、AUC 为 67.30，CMU-MOSEI 的 F1 为 49.82、AUC 为 68.80。UMAP 可视化显示填补模态与真实模态分布相近，支持补全保持了语义对齐，但这只是分布层面的定性证据，不等于逐样本重建准确。

在设置二中测试固定保留某种组合，论文发现视频加音频组合整体较差，可能与 2 模态交互较弱有关，而本方法在单模态与双模态下 F1 与 AUC 差异较小，显示对缺失组合不敏感。需要强调的是这些结论依赖特定的随机丢弃实现与 3 次种子的均值方差，换一种缺失机制或划分可能改变排序；原文也指出 ShaSpec 因多任务目标难优化而偏弱，这与主干强度有关，不能读成生成式补全本身无效。

下表整理消融中报告的关键下降幅度，用于量化 2 阶段与抑制的作用，数字来自原文连续句而非新计算。

| 条件 | 指标 | 完整模型 | 去掉后 | 下降幅度 |
| --- | --- | --- | --- | --- |
| CMU-MOSI 50% 缺失，2 阶段全去 | F1 | 完整较高 | 补零替代 | 5.12% |
| CMU-MOSI 50% 缺失，2 阶段全去 | AUC | 完整较高 | 补零替代 | 5.27% |
| CMU-MOSEI 50% 缺失，2 阶段全去 | F1 | 完整较高 | 补零替代 | 4.96% |
| CMU-MOSEI 50% 缺失，2 阶段全去 | AUC | 完整较高 | 补零替代 | 5.58% |
| CMU-MOSI 50% 缺失，去抑制强度 | F1 | 完整较高 | 无抑制 | 3.13% |
| CMU-MOSI 50% 缺失，去抑制强度 | AUC | 完整较高 | 无抑制 | 2.71% |

表中下降幅度越大说明被去掉的部分越重要，可见 2 阶段整体去掉的损失大于单阶段，而抑制强度去掉的损失在路由消融中最严重。但这些差值是百分点差而非相对百分比，且只在 50% 缺失与默认超参数下测得，不能推广到所有缺失比例；UrbanSound8K-AV 上 2 阶段全去准确率下降 3.97% 的结论同样只在设置一 50% 缺失下成立。

### 拿掉抑制、不应期与补全阶段会发生什么

消融要回答的是路由器的竞争机制与补全的 2 阶段是否必要，条件是 CMU-MOSI 50% 缺失。去掉侧抑制、不应期或整个抑制强度都会使 F1 与 AUC 下降，其中去抑制强度下降最多，F1 降 3.13 个百分点、AUC 降 2.71 个百分点。去掉补全第一阶段比去掉第二阶段下降更大，2 阶段全去则 F1 降 5.12 个百分点、AUC 降 5.27 个百分点，说明模态池捕获的模态交互更关键。敏感性分析显示专家数从 4 到 8、层数从 2 到 5 时指标稳步上升，wta 时间步在 14 最优、过短则膜电位积累不足、过长则引入噪声，抑制强度在 0.3 最优、过弱则竞争不足、过强则过度压制。复杂度上 SpikeMoE 在 50% 缺失时理论能耗 5.29 mJ，低于 FuseMoE 的 11.71 mJ 与 mmFormer 的 40.39 mJ，但运算量与参数量的比较依赖理论折算而非实测。

下图对比有无不应期时的专家激活分布，是理解坍缩最直接的证据。

> **看图路径：** 1. 横向比较上下两排同一专家编号在样本维上的颜色连续性；2. 重点看下排 3 号专家整行偏黄绿而上下排 0 号与 5 号深色块的分布变化

[![原论文 Figure 6：Visualization of expert activation.](https://arxiv.org/html/2610.01418v2/router_refractory_period.png)](https://arxiv.org/html/2610.01418v2/router_refractory_period.png)

*论文图 6。原论文 Figure 6:：“Visualization of expert activation.”。*

图中横轴为样本序号，纵轴为专家编号，颜色越亮表示路由比例越高。上排带不应期时亮色分散在不同专家行，下排去掉不应期时 3 号专家整行持续偏亮，说明同一专家垄断了多数样本，即论文所称的专家坍缩。这支持不应期对负载均衡的作用，但热力图的数值精度有限，不宜读出确切比例；且该对比只在当前超参数与缺失比例下展示，换条件后垄断的专家编号可能变化。

### 结论的边界与尚未验证的范围是什么

论文明确的局限包括尚未扩展到更大模型与更多模态，以及尚未在神经形态硬件或 FPGA 上部署验证，实际延迟与读写开销仍待优化。除此之外还有三处边界。第一，能耗与延迟多为理论估计与单卡吞吐分析，路由器占比 3.7% 到 4.4%、wta 步数从 8 到 20 仅增加约 1 ms 的结论依赖特定批量与 GPU，不能直接当作硬件功耗承诺。第二，缺失模拟是人工随机丢弃并保证每样本至少保留一种，与真实传感器失效的分布可能不同，设置二的组合结论也只覆盖视频文本音频 3 模态。

第三，基线中部分量化与脉冲语言模型得分异常低，说明实现细节对排序影响大；视觉与语言的提升是在替换前馈层且参数略减的条件下取得，若主干或训练轮数变化，提升幅度可能变化。未胜出的例子是视频加音频组合下所有方法都偏弱，以及专家数与层数增加虽提升精度但会增加参数与运算，需要在性能与成本间权衡。

### 复现第一步要做什么与需要哪些条件

复现应先对齐超参数表与评价设置，再跑通路由器伪代码。第一步是按表配置专家数、Top-K、主干与 wta 时间步、不应期、抑制强度与采样 K，并在两种缺失设置下划分数据，保证每样本至少保留一种模态且记录随机种子。其次实现改进的漏积分发放神经元、前向脉冲加权和、侧抑制减法、阈值加不应期的发放判决、计数排序与归一化，以及模态池采样平均与可学习嵌入的 2 级 fallback。训练时使用交叉熵加负载均衡损失，脉冲阈值 0.5、替代梯度 sigmoid 参数 4。

评价时对多模态报告 F1 与 AUC 的均值方差，对视觉报告 Top-1 准确率，对语言按子集规则报告 F1、相关或准确率再平均。来源方面，现有证据无法确认作者代码、模型或数据资源已公开；能量估计方法是引用已有文献的理论公式，不是硬件测量，复现能耗需注明为理论值。原文未说明梯度经过排序的具体实现与部分参数的冻结策略，遇到缺失项应标记为待确认而非猜测。

### 什么时候值得尝试与还需要补什么验证

当任务同时满足 3 个条件时值得尝试：计算预算敏感且希望用脉冲加法降低单次运算，需要条件计算以避免每次都算全量参数，以及输入存在随机或非对称缺失而需要稳定的补全。复现的第一步是先在完整模态下验证路由器替换前馈层是否带来预期变化，再在 50% 随机缺失下验证 2 阶段与抑制的消融方向是否一致，最后才扩展到其他缺失组合与更大专家规模。

还需要补的验证包括在真实缺失分布而非人工丢弃下测试，在神经形态或 FPGA 平台上实测延迟与功耗，以及报告多次种子下的统计显著性而非仅均值方差。此外应补充梯度路径与参数更新范围的说明，以便他人准确复现竞争机制的学习动态。总体上论文显示了脉冲稀疏与专家稀疏叠加的可行性，但其价值应表述为在给定编码器、缺失模拟与理论能耗口径下的权衡结果，而非对所有语音音乐音频任务的普遍承诺。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.01418v2)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
