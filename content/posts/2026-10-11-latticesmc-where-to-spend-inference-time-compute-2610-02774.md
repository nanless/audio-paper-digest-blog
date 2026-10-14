---
title: "LatticeSMC: Where to Spend Inference-Time Compute in Chunked Sequence Generators"
date: 2026-10-11
draft: false
tags: [音乐生成, 扩散模型, 流匹配, 形式化分析, 众包评测]
categories: [论文速递]
description: "论文把分块序号与去噪步看成一张二维格子，用两个可叠缩的权重恒等式决定何时重采样，在相同去噪器调用预算下用块边界打分提升长序列奖励，并用奖励到达时机与集合内可预测性解释何时该果断提交、何时值得前瞻。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.02774"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "分块生成器该把推理计算花在哪里：LatticeSMC 解读"
paper_digest_original_title: "LatticeSMC: Where to Spend Inference-Time Compute in Chunked Sequence Generators"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.02774v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.02774v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.02774v1.pdf"
paper_digest_primary_task: "音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-generation","label":"音乐生成"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.formal-analysis","label":"形式化分析"},{"facet":"method","id":"method.crowdsourced-evaluation","label":"众包评测"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把分块序号与去噪步看成一张二维格子，用两个可叠缩的权重恒等式决定何时重采样，在相同去噪器调用预算下用块边界打分提升长序列奖励，并用奖励到达时机与集合内可预测性解释何时该果断提交、何时值得前瞻。"
paper_digest_authors: [{"affiliations":["School of Computer Science","The University of Sydney","Sydney, NSW, Australia"],"name":"Xuanchen Wang"},{"affiliations":["School of Computer Science","The University of Sydney","Sydney, NSW, Australia"],"name":"Heng Wang"},{"affiliations":["School of Computer Science","The University of Sydney","Sydney, NSW, Australia"],"name":"Weidong Cai"}]
paper_digest_abstract_sha256: "7dfba95411874f1afd8b02bb968e95bcf0150661225e92b308ffb006d2b0b0c3"
paper_digest_sidecars: {"citation.bib":{"sha256":"9be75a84768ab26212e7071e56536cf28701a18051b704320bd8ab0c33170767","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02774/citation.bib"},"citation.json":{"sha256":"df01500691c3d6f91703871bba82820551ea0f8c5d3a830d98acbd636abbb29d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02774/citation.json"},"citation.ris":{"sha256":"d48baa3152d0ab9cec15ea5390a1795eefdcfa40fea3f33156ea88439b28086f","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02774/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"57c81908a88f0d48d7da214bb74048c8acc2e781f7c9723d5b94e6bdd4903883","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02774/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "04e588fa3bf68ed9e54f4d74f8af2044f5a1aef861156c7e48d8f5d2b21dec81"
paper_digest_api_reader_plan_sha256: "e08526cab79879b6175c97d436a78a474298af940ebb48210b68fe1d56147bd4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "295ffd1558a84e6099a74e68905096a94e264b854eff8b839514dff90b31aed2"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "b5de38e1d756da8a7b325a3d208fafc57eb57ddae58264b86a9407249dcc0015"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "545618a37e3c1c286c023c53dc441ea56673f5fe14cb780d684a0d5f09a4cc68"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "39894bbe8360baac4e638567fd3435b0f4912a1796414f44a1faf131746c50f3"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 分块生成器该把推理计算花在哪里：LatticeSMC 解读

> 英文题目：*[LatticeSMC: Where to Spend Inference-Time Compute in Chunked Sequence Generators](https://arxiv.org/abs/2610.02774v1)*

> 标签：#音乐生成 | #扩散模型 | #流匹配 | #形式化分析 | #众包评测
>
> 评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Xuanchen Wang：School of Computer Science；The University of Sydney；Sydney, NSW, Australia
- Heng Wang：School of Computer Science；The University of Sydney；Sydney, NSW, Australia
- Weidong Cai：School of Computer Science；The University of Sydney；Sydney, NSW, Australia

## 📌 核心摘要

长序列按块生成时每块内部还需多步去噪，而关心的奖励定义在完整序列上，论文引入预算匹配的分块引导任务，在固定去噪器求值次数下最大化序列级奖励，并区分抽样返回与取最优返回两种目标。LatticeSMC在块索引与去噪步构成的二维格点上放置势函数，对块可加奖励用块奖励项、对终值奖励用前缀分数增量加终值修正，使整条轨迹对数势求和与序列奖励一致。粒子先经生成核由已有前缀扩展出下一块，扩展得到的新前缀直接进入块边界加权，权重乘以该块势函数形成加权粒子集。加权集计算有效样本量（Effective Sample Size，ESS），若低于粒子数一半则做系统重采样并重置权重，否则原样保留，所得粒子集作为下一块生成的输入；插件式奖励打分免费时在块内固定去噪步放置同权重势函数，以同样加权与门控提前重采样。最后按权重抽取或返回最高奖励粒子，两项叠缩结果保证目标正确：块可加奖励下两轴权重完全相同，终值奖励下任意前缀分数都给出精确中间势。在舞蹈40条件4种子、N=32粒子相同去噪器求值取最优返回下，节拍对齐奖励从0.234提高到0.441，超过同期最优基线0.415。在音乐40条件2种子、N=32粒子相同去噪器求值取最优返回下，音乐提示依从的CLAP分数从0.470提高到0.560，且留出质量指标保持在基线水平。结论适用范围限于4块到8块、两种测试生成器与四种奖励，块内密集打分在潜变量音乐模型上带来4倍解码调用与约3.6倍墙钟成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长序列为什么要一块一块生成

这篇论文研究音乐配舞蹈和文本生成音乐这类长序列任务。输入是音乐或文本提示，输出是几十秒的动作或音频，必须保留整段的节拍、提示一致性和首尾呼应。模型一次做不完这么长，就把序列切成块，每块用迭代去噪从噪声变成干净样本，下一块再以干净前缀为条件继续延长。例如舞蹈侧每块是 5 秒共 150 帧，音乐侧每块是 10 秒，4 块拼成 40 秒。

对刚入门的读者，可以把粒子理解成并行养着的多个候选序列。每个粒子独立去噪，但到块边界时可以根据分数复制好的、丢掉差的，这就是重采样。预算指去噪器的前向次数，每个粒子每步算一次，带分类器无关引导会翻倍。解码器调用和奖励计算另计，在隐变量音乐模型里每次打分都要先解码再算 CLAP 分数。

**分块生成器 × 去噪步：** 分块生成器指一次只产生一段序列、再把干净前缀作为条件产生下一段的模型，去噪步指把噪声逐步变干净的迭代次数；两者组合后，一条完整序列的生成轨迹同时沿分块序号向前和沿去噪步向下推进，奖励却定义在整条序列上，所以需要在两个时钟上分配计算。

### 已有推理 steering 各管哪一个轴

论文把已有方法放在同一张格子上比较。Best-of-N 是把完整序列各抽 N 个、最后留最好的，相当于只在终点放一个权重。Feynman-Kac steering 是在去噪步上用即插即用预测打分，即把当前噪声状态先猜一个干净块再算奖励差。流式视频里的块剪枝是在每块结束保留前 M 个再复制展开，是一种贪心的确定性复制。学习扭曲函数的方法则是训练一个网络去预测未来奖励。

这些方法原来比较时返回规则不同、预算口径也不同，有的没把解码和打分需要的调用算进去。论文的统一视角是，它们都是格子 Feynman-Kac 模型上不同位置的势函数与不同重采样算子的选择，因此可以在相同的核、相同的噪声流和相同的去噪器预算下重跑比较。

### 预算匹配的分块 steering 任务是什么

任务给定分块基模型、序列级奖励和固定的去噪器调用预算 B，要求返回一条序列。目标有两种并都要报告：采样是希望返回分布接近奖励倾斜目标，搜索是希望返回奖励本身最高。奖励倾斜目标正比于基模型概率乘以奖励指数，温度控制倾斜强度。

**块可加奖励 × 终止奖励：** 块可加奖励指能写成每块增量之和、每到一个块边界就能算出当前块贡献的奖励，终止奖励指只有完整序列才能给出数值、中间只能靠辅助的前缀分数猜测的奖励；前者决定了块轴与去噪轴权重是否相同，后者决定了是否需要估计未来，两种搭配决定了中间权重的写法。

论文区分了两种奖励形态。节拍对齐是块可加且块局部的，每块的贡献在前缀走到该块时就能算；重复度是块可加但长程的，第 k 块要和第 k-2 块比较，前两块完全没有信号。提示一致性是终止但可在任意前缀上解码评估的，动机重现是只在最后边界才有前缀分数的。温度在音乐侧用基样本的事先规则定，在舞蹈侧报告整组扫描并让所有方法共用。

### 格子模型与 LatticeSMC 一趟流程

把块序号 k 和去噪步看成格子，每个格点有一个势函数，整条轨迹的权重是基模型概率乘以所有势函数的积。如果沿轨迹的势函数乘积正比于完整奖励指数，边缘分布就是想要的倾斜目标，粒子滤波随 N 增大收敛到它。不同方法只是在不同格点放非 1 势函数。
下面这张图是理解全文的关键，先看整体循环再看位置差异。

> **看图路径：** 1. 先看上面一排：干净前缀如何进入分块生成器，再到打分与重采样，最后回到下一块；2. 再看左下四种方法在块序号与去噪步格子上的打分位置差异；3. 最后看右下两行叠缩恒等式如何把多个小权重乘成一个块权重

[![原论文 Figure 1：The lattice Feynman-Kac model and LatticeSMC.](https://arxiv.org/html/2610.02774v1/fig1_framework.svg)](https://arxiv.org/html/2610.02774v1/fig1_framework.svg)

*论文图 1。原论文 Figure 1:：“The lattice Feynman-Kac model and LatticeSMC.”。*

从像素可见，上面一排是 N 个粒子带着干净前缀进入分块生成器，经过 S 步去噪得到完整前缀，再算块奖励或前缀分数得到势函数，当块未结束且有效样本量低于一半时做系统重采样并复制谱系，最后返回加权抽取或最高奖励粒子。左下显示 Best-of-N 只在终点放菱形，FK steering 在块内多步放圆圈，块剪枝在块边界放菱形，LatticeSMC 在块边界放实圈、块内可选虚圈。下面会解释为什么块边界的权重可以写得精确且无需学习。

### 块可加奖励：两轴权重为何相同

对块可加奖励，论文证明块内去噪轴上一系列差分势函数的乘积恰好等于该块的块轴势函数。直观说，每一步用当前猜测的块奖励减去上一步的值再求指数，连乘时中间项相消，只剩块结束时的真实块奖励除以温度。重采样只是整体复制谱系，不改变这条恒等式。

\[\textstyle\prod_{\tau\in\mathcal{T}_{k}}G_{k,\tau}\;=\;\exp\!\big(r_{k}(x^{(\leq k)})/\alpha\big),\]

这个恒等式意味着去噪轴和块轴定义了相同的倾斜目标和每块权重，差别只在允许重采样的时刻。于是设计变成成本问题：当即插即用打分免费时，块内多放事件能更早筛选；当每次打分都要解码时，块边界一次打分最省。论文在舞蹈侧用稠密调度，在音乐侧用边界调度，并验证两者在采样规则下奖励接近。

**势函数 × 有效样本量门控：** 势函数指在格子每个点上乘到粒子权重上的非负因子，决定了目标分布向高奖励倾斜多少，有效样本量门控指用权重不均匀程度判断粒子集是否已经分化、再决定是否重采样的开关；两者搭配后，有信息的边界才触发复制优良谱系，无信息的边界保持多样性，避免盲目提交。

### 终止奖励：前缀分数如何成为精确扭曲

对终止奖励，任取只依赖前缀、终点等于完整奖励的前缀分数，论文给出中间增量与最后修正的写法。中间块用分数增量，最后一块用真实奖励减去加权的前一分数，全部相乘后只差一个常数，仍正比于奖励指数。因此任何前缀分数都不改变目标，差的分数只增大中间权重方差。

\[G_{k}\;=\;\exp\!\Big(\tfrac{\beta}{\alpha}\,(s_{k}-s_{k-1})\Big)\ \ \text{for }1\leq k<K,\qquad G_{K}\;=\;\exp\!\Big(\tfrac{1}{\alpha}\,(r-\beta\,s_{K-1})\Big).\]

若奖励本身能在前缀上评估，自然取前缀上的奖励值，此时没有估计也没有额外去噪器开销。在音乐提示一致性上，前缀 CLAP 增量就是这种免费而精确的扭曲。系数为零时退化为终点重要性采样，即 Best-of-N 的采样形式。

**边界调度 × 稠密调度：** 边界调度指只在每块结束时计算一次权重并可能重采样，稠密调度指还在块内若干去噪步上用即插即用预测打分并提前重采样；对块可加奖励两者每块总权重相同，只是重采样时刻不同，当前者打分免费时后者更早筛选，当每次打分都要解码时前者更省。

算法实现上，每个粒子维护对数权重，块内稠密事件先加上差分并可能重采样，块结束再补足剩余的块项或前缀增量项。若有效样本量低于一半则系统重采样并清零权重。最后按权重抽取或按奖励取最大。论文用双精度校验沿返回谱系的对数势函数之和与奖励除以温度的最大偏差在极小量级。

### 本研究没有训练什么，实际调用了什么

LatticeSMC 本身是免训练的采样器，没有为 steering 学习任何组件。两个基模型的处理不同，需要分开说。舞蹈扩散是在 EDGE 表示上为本研究训练的小模型，有 4M 和 38M 两种，用 300 帧窗口、前半干净前缀加后半加噪块训练，只在后半算损失，根节点位移从前缀积分保证接缝连续。音乐流模型是冻结的 Stable Audio 3 Medium，用修复式外推一次延长 10 秒，每步把前缀隐变量覆盖回去，解码器按提示固定种子以保证可复现。
下面这张图把两条流水线并排放出，有助于复现时核对条件。

> **看图路径：** 1. 对比上半音乐到舞蹈的输入窗口与下半文本到音乐的固定前缀隐变量；2. 注意舞蹈侧根节点位移从前缀积分、音乐侧每次解码都要计费的标注；3. 记住四个奖励分别挂在哪一侧、哪一对块上

[![原论文 Figure 4：Two chunked generators. Top: music-to-dance diffusion on AIST++.](https://arxiv.org/html/2610.02774v1/fig2_testbeds.svg)](https://arxiv.org/html/2610.02774v1/fig2_testbeds.svg)

*论文图 4。原论文 Figure 4:：“Two chunked generators. Top: music-to-dance diffusion on AIST++.”。*

从像素可见，上半去噪器输入音乐特征加节拍、干净前缀和噪声块，输出干净动作并算节拍对齐与跨块重复；下半文本提示与固定前缀隐变量进入流变换器，经音频解码器再进 CLAP 算提示一致性与首尾动机相似。注意音乐侧每次前缀打分都要一次解码加一次 CLAP，论文都计入成本。舞蹈侧即插即用奖励是运动学计算，视为免费。

### 比较条件与四个奖励的度量方式

所有方法跑在同一循环、相同核与每槽噪声流下，预算是 N 取 1 到 32 时的去噪器行数，舞蹈侧每序列是 100 乘块数乘粒子数行，音乐侧是 8 乘块数乘粒子数行。结果在舞蹈 40 个条件乘 4 种子、音乐 40 个条件乘 2 种子上平均，区间是条件上的百分位自助区间，方法差是配对自助。

节拍对齐用音乐节拍附近运动学极小点的指数核均值，块可加形式与完整形式平均差很小。重复度是第 k 块与第 k-2 块根相对关节距离的指数，前两块为零，真人舞者得分低于基模型，说明它是受控的长程探针而非质量目标。提示一致性是整段 CLAP 音频嵌入与文本嵌入的余弦，前缀分数是前缀解码的同样余弦。动机重现是末块与首块 CLAP 嵌入余弦，前缀分数只在最后边界可得。 held-out 指标如足部接触、真实感统计、速度、美学、接缝通量和多样性从不参与 steering。

### 相同预算下奖励提升了多少

先看奖励随预算的曲线，横轴已经对齐为去噪器调用，纵轴是返回序列的奖励。

> **看图路径：** 1. 横轴是去噪器调用次数而非粒子数，比较的是相同预算下的奖励；2. 区分实线加权抽取与虚线取最优两套返回规则的高度；3. 观察四个子图里哪条曲线在预算增大后仍继续上升

[![原论文 Figure 2：Reward against denoiser evaluations at matched budget.](https://arxiv.org/html/2610.02774v1/fig4_curves.svg)](https://arxiv.org/html/2610.02774v1/fig4_curves.svg)

*论文图 2。原论文 Figure 2:：“Reward against denoiser evaluations at matched budget.”。*

从像素可见，四子图都随预算上升，虚线取最优普遍高于实线加权抽取，LatticeSMC 与 FK steering 在舞蹈侧贴近，在音乐侧边界调度随预算继续上升而稠密调度较早变平。数值上 32 粒子时节拍对齐与提示一致性的提升最大，长程重复与动机重现也有稳定领先，且 held-out 质量基本保持在基线区间。

下表把终点数值放在一起，比较问题是固定去噪器预算与返回规则时，块边界选择是否优于终点选择。

| 条件 | 指标 | 基线 | Best-of-N 取最优 | LatticeSMC 取最优 |
| --- | --- | --- | --- | --- |
| 舞蹈节拍 | 节拍对齐 | 0.234 | 0.354 | 0.441 |
| 舞蹈重复 | 重复度 | 0.718 | 0.901 | 0.962 |
| 音乐提示 | CLAP 一致性 | 0.470 | 0.530 | 0.560 |
| 音乐动机 | 动机相似 | 0.814 | 0.918 | 0.929 |

上表显示块边界加权在 4 个奖励上都高于终点选择，舞蹈节拍从 0.234 到 0.441、音乐提示从 0.470 到 0.560 是最直观的两项。限制是这些是取最优返回下的搜索数值，加权抽取下的差距更小；重复度与动机重现的绝对值受各自归一化影响，不能跨奖励比较大小。块剪枝在节拍上达到 0.415、在提示上达到 0.551，仍低于 LatticeSMC 的对应调度。

**加权抽取 × 取最优粒子：** 加权抽取指按最终权重随机返回一个粒子，用于逼近奖励倾斜后的分布，取最优粒子指直接返回奖励最高的粒子，用于搜索最大值；同一组粒子用不同返回规则会得到不同数值，比较不同重采样方法时必须固定返回规则，否则分不清是采样更好还是返回规则更贪。

### 返回规则与三种成本轴的代价

返回规则本身的价值值得单独看。从加权抽取换到取最优，在 32 粒子时增加 0.012 到 0.042 且随 N 增大。于是与贪心剪枝比较必须固定规则。按粒子数画出的配对差显示，剪枝在最小预算下领先，因为它每步都果断提交；LatticeSMC 在节拍上约 32 粒子处反超，在提示上约 8 粒子处反超，在动机上约 4 粒子处反超，在重复上从 4 粒子起就领先，因为剪枝在前两块无信号时仍盲目复制。38M 模型复现了同样的交叉。

下表整理交叉方向，比较问题是相同取最优规则下重采样时机的影响。

| 条件 | 指标方向 | 小预算谁领先 | 大预算谁领先 | 反超点 |
| --- | --- | --- | --- | --- |
| 舞蹈节拍 | 越高越好 | 块剪枝 | LatticeSMC | 16 到 32 之间 |
| 舞蹈重复 | 越高越好 | LatticeSMC | LatticeSMC | 4 起领先 |
| 音乐提示 | 越高越好 | 块剪枝 | LatticeSMC | 8 附近 |
| 音乐动机 | 越高越好 | 基本持平 | LatticeSMC | 4 附近 |
| 返回规则 | 越高越好 | 取最优高于抽取 | 差距随 N 增大 | 0.012 到 0.042 |

上表说明反超不是某个奖励的偶然，而是预算增大后有效样本量门控保留多样性的结果。限制是小预算用户若只能用 2 到 4 粒子，贪心剪枝在节拍与提示上仍可能更高，需要按预算选方法。

成本上舞蹈侧三轴一致，音乐侧稠密调度在 32 粒子时解码调用是边界调度的 4 倍，挂钟约 3.6 倍而奖励相同，因此论文为音乐开出边界调度，为舞蹈开出稠密调度。

### 倾斜强度与序列变长时发生什么

倾斜强度由温度与剪枝保留数共同控制。块剪枝保留 1 个可看作温度趋于零的极限。结果按奖励到达时机分叉：在每边界都有信号的节拍与提示上，最尖锐的倾斜最好，节拍达 0.473、提示达 0.564；在早期无信号的重复与动机上，最尖锐反而最差，保留一半的剪枝最好，而有效样本量门控在任意温度下都能跳过无信息边界。

下表比较不同保留强度的剪枝，比较问题是倾斜该设多尖。

| 条件 | 奖励 | 最尖保留 1 | 中等保留 8 | 最宽保留 16 | 门控重采样 |
| --- | --- | --- | --- | --- | --- |
| 舞蹈节拍 | 越高越好 | 0.473 | 0.415 | 0.386 | 0.428 |
| 舞蹈重复 | 越高越好 | 0.850 | 0.887 | 0.916 | 0.947 |
| 音乐提示 | 越高越好 | 0.564 | 0.551 | 0.543 | 0.560 |
| 音乐动机 | 越高越好 | 0.909 | 0.918 | 0.924 | 0.929 |
| 早期信号 | 有无 | 每步有 | 每步有 | 晚到 | 门控跳过 |

上表的主要收益是给出设计规则：搜索目标下按奖励到达允许的最尖设置，采样目标下温度定义目标不能乱调。限制是该扫描只在 32 粒子与固定温度下做，换预算或换温度时最优点可能移动。

horizon 上舞蹈做到 6 块 30 秒与 8 块 40 秒。重复是块对之和，每对领先保持，长程优势不消失。节拍是全序列节拍均值，块项幅度随块数缩小，固定温度会让每边界倾斜变弱、门控触发率下降，此时剪枝反超；把温度按块数成比例调小后，门控触发率回到 90% 以上并重新领先。音乐 8 块因滚动上下文改变了基模型， tempo 一致性下降超预设门限而未跑， horizon 结论只靠舞蹈支撑。

**集合内可预测性 × 扭曲函数：** 集合内可预测性指固定同一条件后、当前前缀能在多大程度上决定未来奖励的方差占比，扭曲函数指对未来奖励指数矩的估计、乘到权重里实现前瞻；只有当前缀确实能区分同条件粒子的未来时，扭曲函数才有排序信号，否则跨条件的拟合优度再高也会在归一化权重中被抵消。

### 内容轴前瞻何时值得花钱

前瞻是否有用取决于同一条件下前缀能否预测未来。把总方差拆成前缀间可排序的部分与前缀内 rollout 噪声，占比就是集合内可预测性。实测提示一致性在 1 到 3 块后分别解释 0.47、0.62 和 0.66 的终点方差，节拍对齐的指数目标占比不超过 0.14，重复的跨条件占比虽高但同条件集合内 rollout 目标散布大、蒙特卡洛误差占比高。
下面示意图把方差拆分与跨提示拟合的陷阱画了出来。

> **看图路径：** 1. 先看左图同一条件下前缀内与前缀间的散布分别代表什么；2. 再看中图跨提示拟合好为何不代表同一粒子集内排序好；3. 最后看右图三种前瞻来源在是否需要拟合与是否耗费解码上的区别

[![原论文 Figure 3：When lookahead pays (schematic).](https://arxiv.org/html/2610.02774v1/fig3_lookahead.svg)](https://arxiv.org/html/2610.02774v1/fig3_lookahead.svg)

*论文图 3。原论文 Figure 3:：“When lookahead pays (schematic). (a) Within-set predictability: prefixes drawn under one condition are each continued M times; the spread within a prefix is rollout noise, the…”。*

从像素可见，左图同一条件下每个前缀延续多条， prefix 内散布是噪声、prefix 间散布是排序信号；中图跨提示散点可因提示偏移而拟合很好，但同一粒子集内散点几乎随机；右图 3 种来源分别是免费精确的前缀奖励、耗费的 rollout 均值和需要集合内排序的学习预测器。

\[\mathrm{Var}[S_{k}\mid c]\;=\;\underbrace{\mathrm{Var}_{x^{(\leq k)}}\big[\mathbb{E}[S_{k}\mid x^{(\leq k)},c]\big]}_{\text{between-prefix spread: ranking signal}}\;+\;\underbrace{\mathbb{E}_{x^{(\leq k)}}\big[\mathrm{Var}[S_{k}\mid x^{(\leq k)},c]\big]}_{\text{within-prefix spread: rollout noise}},\]

下表把学习扭曲的失败具体化，比较问题是跨提示拟合好能否代表重采样有用。

| 条件 | 跨提示拟合 | 集合内相关 | 残差 | 相对精确势的效应 |
| --- | --- | --- | --- | --- |
| 精确势 | 无 | 无 | 无 | 0 |
| 学习回归 38M | 0.91 | 未测 | 3.3 nats | -0.018 |
| 集合内训练 | 未测 | 0.01 | 未测 | -0.014 |
| 16 条 oracle | 未测 | 1 | 约 0.6 nats | +0.058 |

上表说明跨提示 0.90 的拟合主要来自条件间结构，在归一化权重中被抵消，权重误差达数个 nat 足以把排序淹没。限制是 oracle 未计预算，其正向增益是上限而非可部署提升；rollout 在匹配成本下输给增加粒子，学习预测器受限于每粒子 rollout 误差。设计规则是先测集合内可预测性，能用前缀分数就用满强度，否则必须用集合内相关与 nat 残差验证。

### 结论在什么条件下才成立

第一， horizon 外推只在舞蹈上验证，音乐 80 秒因滚动上下文改变基模型而未跑，不能把长程结论直接搬到音乐长上下文。第二，舞蹈模型是为本研究训练的小模型，38M 复现了排序但仍不是大生产模型。第三，人评只覆盖节拍对齐与提示一致性两个有直接感知读数的奖励，重复与动机未做人评。第四，未比较梯度引导，它与位置选择正交，可以叠加。第五，两个命题固定的是目标分布而非有限粒子行为，集合内可预测性与增量权重方差之间的界仍是开放问题。

容易误解的是，无训练不等于确定性求解。LatticeSMC 免训练指没有学习扭曲，但粒子仍用随机噪声流推进，重采样与最终抽取也消耗随机数，固定种子可复现不代表输出唯一。另一个误解是稠密一定更好，实际上在需要解码的隐变量模型上稠密只改变重采样时刻而不改变权重，额外解码会把曲线向右平移。

### 复现第一步做什么

复现先固定预算口径与返回规则。把去噪器行数、解码调用与奖励调用分别计数，去噪器调用按每行累加，分类器无关引导的双倍 batch 计两次。所有方法用相同核与按种子、块、槽生成的噪声流跑 N 为 1 到 32 的网格，温度事先定好并共用。先跑 Best-of-N 的抽取与取最优两条基线，再跑边界调度的 LatticeSMC，最后才在打分免费时打开稠密调度。

核对时用论文的比特复现检查：势函数全为 1 时应逐比特回到基采样，沿返回谱系的对数势函数之和应与奖励除以温度一致，前缀增量与即插即用差分的乘积应在极小误差内一致。held-out 指标单独算，不参与任何选择。作者资源方面，本次收到的证据未发现可验证的公开代码链接，不得声称代码已公开，需要按论文描述自行实现循环。

### 什么时候值得尝试还缺哪项验证

当序列必须分块生成、奖励在整段上有意义、且能在块边界算出精确增量或前缀分数时，值得尝试边界调度的 LatticeSMC 并用有效样本量门控代替每步必剪。当打分免费且块内预测后期较准时，可再开稠密调度；当每次打分都要解码时，优先保持边界调度。当奖励晚到时，不要把剪枝调到最尖；当序列变长且奖励是均值归一化时，按块数成比例调小温度以保持每边界倾斜。

还缺的验证是更大基模型与更长 horizon 下的门控触发率，以及把集合内可预测性做成预算分配前的常规诊断。若未来奖励在同条件集合内不可预测，就不要为内容轴前瞻花钱；若前缀可评估，就用满强度前缀增量；若只能学习扭曲，就必须报告集合内相关与 nat 级残差，而非跨提示拟合优度。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.02774v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
