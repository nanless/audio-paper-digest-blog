---
title: "Unified Shared Encoder in Spoof-Aware Speaker Verification with Hybrid Wavelet Prompt Tuning"
date: 2026-10-11
draft: false
tags: [说话人验证, 前缀微调, 语音伪造检测, 语音]
categories: [论文速递]
description: "论文用冻结的 W2V-BERT 2.0 加两套混合小波提示分别适配说话人验证与伪造检测分支，仅训练约 7M 参数就在 SpoofCeleb 评测上得到 0.03% 伪造检测等错率与 0.038 最小 a-DCF，代价是推理时要做两次提示条件前向。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.08845"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "一个冻结编码器如何同时做说话人确认与伪造检测"
paper_digest_original_title: "Unified Shared Encoder in Spoof-Aware Speaker Verification with Hybrid Wavelet Prompt Tuning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.08845v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.08845v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.08845v1.pdf"
paper_digest_primary_task: "说话人验证"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speaker-verification","label":"说话人验证"},{"facet":"method","id":"method.prefix-tuning","label":"前缀微调"},{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "前缀微调"
paper_digest_score: 7.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文用冻结的 W2V-BERT 2.0 加两套混合小波提示分别适配说话人验证与伪造检测分支，仅训练约 7M 参数就在 SpoofCeleb 评测上得到 0.03% 伪造检测等错率与 0.038 最小 a-DCF，代价是推理时要做两次提示条件前向。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Aref Farhadipour"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Srikanth Madikeri"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Teodora Vukovic"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Volker Dellwo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Petr Motlicek"}]
paper_digest_abstract_sha256: "1e5415094cd27890617cfef7f037f6d00c128ae7cc5309684dac6781def0d7c3"
paper_digest_sidecars: {"citation.bib":{"sha256":"4a08ae0e5772f86eb35ed9e3af3f86f41b398cd49f95df9768568a906382b458","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08845/citation.bib"},"citation.json":{"sha256":"82dd8746b0b845d5116147dc82542f1a5ceacb80992984e4baea5657fb6dfc3c","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08845/citation.json"},"citation.ris":{"sha256":"204190b5aac91ce14f67d30f5a1c89c5e1c98beb5b09343a5576d00197f2df77","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08845/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"ca6be2c24c155fb2c95924cf1adb3e86aec1ffddfad18ce9a9f5bff2775a2f3d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08845/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1388b468e83648709b287ddae71e14c796430aeb93c92b74c0941f0c2762556c"
paper_digest_api_reader_plan_sha256: "873e1a7dc9125af9fb5555f7d5edffcb17e8fd92a45d38b589c45b2e4fd56e54"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6caafb4296e4d843e7979a66cdaf5ea9b6d6be9432418f795bb9183d91eb5a19"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "8ad2d8e02899da9f1962cf6751da8a73c565d75655e37c76c43a76b5a130bb7a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a7de2006b5e2088e154079934e30722446737ddc071d53a1dd63643062b11fc4"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "bdc7d047fe1b8d544dbe1713087cbc34126ac915453db9af85034f005e0f9abb"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 一个冻结编码器如何同时做说话人确认与伪造检测

> 英文题目：*[Unified Shared Encoder in Spoof-Aware Speaker Verification with Hybrid Wavelet Prompt Tuning](https://arxiv.org/abs/2610.08845v1)*

> 标签：#说话人验证 | #前缀微调 | #语音伪造检测 | #语音
>
> 评分：**7.9/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Aref Farhadipour：机构信息未在 arXiv HTML 中可靠披露
- Srikanth Madikeri：机构信息未在 arXiv HTML 中可靠披露
- Teodora Vukovic：机构信息未在 arXiv HTML 中可靠披露
- Volker Dellwo：机构信息未在 arXiv HTML 中可靠披露
- Petr Motlicek：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

欺骗感知说话人验证以注册语音和测试语音为输入，输出联合接受分数，需同时确认身份归属与语音真实性，难点在于身份线索与伪造痕迹依赖不同层次特征并在单一表示中互相干扰。与维护两个独立大编码器的级联结构不同，论文采用统一共享编码器，以冻结的W2V-BERT 2.0为公共主干，每个任务用独立混合小波提示微调提示组在各层注入任务条件，提示参与键与值投影，为音频查询提供不同虚拟上下文。说话人验证分支先对多层输出做静态分层加权，再经注意力池化与映射得到说话人嵌入，推理时注册与测试嵌入的余弦相似度即为身份分数，伪造检测分支以同批分层特征为输入，改用跨层注意力捕捉多尺度伪影并输出真实语音概率，该概率与经Sigmoid校准的身份分数在推理时相乘得到最终分数。与两编码器级联基线相比，该系统在SpoofCeleb评估集上最小a-DCF从0.047降至0.038、CM-EER从0.16%降至0.03%。增加在VoxCeleb2数据上训练的第二个说话人验证头后，扩展配置在SpoofCeleb评估集上最小a-DCF从基础系统的0.038进一步降至0.035，但因引入域外数据而不构成同等条件比较，仅证明可独立挂接新头。在ASVspoof5评估集上，该系统仅用官方提供数据取得0.092最小a-DCF，其挑战赛排名优于封闭条件下的所有系统。结论适用于含噪声、混响、编解码失真和多种合成攻击的野外数据，但攻击间和重压缩条件下误差明显升高；两分支独立训练，推理需两次经过共享编码器的提示条件前向。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/areffarhadi/unified-SASV> — 链接可访问（HTTP 200）

- 模型相关资源：<https://github.com/areffarhadi/unified-SASV> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 防伪造说话人验证要同时回答哪两个问题

防伪造说话人验证的输入是一段测试语音，有时还有一段注册语音，目标是同时回答这是不是目标说话人以及这段语音是不是真实录制而非合成或转换。只有两个答案都为是，系统才应接受。必须保留的信息包括说话人的全局身份特征和合成过程留下的局部声学痕迹，输出通常是说话人相似度、真实语音后验以及两者结合的最终分数。真实语音后验在这里指模型判断输入语音为真实录制的概率。

评价时既看说话人验证等错率、伪造检测等错率与联合等错率，也看考虑漏检与误接受代价的最小 a-DCF，数值越小表示在给定代价下越好。刚入门时容易把真伪判断当成说话人判断的附带阈值，但论文强调两者需要的表示层次不同，身份偏向深层稳定的语义特征，真伪还需要浅层谱细节，因此需要分开设计适配与融合方式。

### 级联与端到端在原文中是如何被比较的

论文在相同 SpoofCeleb 划分上比较了两条已有路线。级联路线是伪造检测模块先判，独立的说话人模块再判，代表系统是 WavLM-ECAPA-TDNN 做说话人验证加 WPT-XLSR 接 AASIST 做伪造检测，共约 320M 可学习参数。端到端路线是官方 WildSpoof 基线 E2E SASV，用 SKA-TDNN 单主干同时学多分类说话人与二分类真伪分支，约 31M 参数，试图从同一表示解出 2 个任务。比较的输入都是 SpoofCeleb 语音，目标都是联合判决，运行阶段都在开发集与评测集上测 SASV 等错率与最小 a-DCF。

原文报告级联在评测集最小 a-DCF 为 0.047，端到端为 0.230，前者在该条件下明显更好，但代价是维护两个大规模自监督编码器，扩展新任务还要加新主干。论文没有把不同输入或不同监督下的类别差异写成同条件胜负，而是把这两者作为效率与专用性权衡的两端，引出共享编码器的动机。

### 单嵌入与双主干各自卡在哪里

论文要解决的具体问题是效率与专用性难以兼得。双主干级联保留了任务模块性，但同一段输入要过两个大编码器，计算冗余大，且两个子系统独立优化、表示层从不交互，分数融合难以捕捉身份与活体之间的依赖，容易出现误差传递。端到端单嵌入则把身份与真伪两个冲突目标压到同一个向量空间，联合优化时一方迁就另一方，在 SASV 上往往不如模块化基线。作者提出的关键区分是共享冻结的通用知识，但不共享最终嵌入。

每个任务拥有自己的提示集合与任务头，推理时才做分数相乘。这样新任务只需挂新提示与新头，不用重训已有分支，也不用新增 600M 量级主干。论文选择 W2V-BERT 2.0 的理由是 Conformer 同时建模局部声学细节与长程上下文，且在 4,500,000 小时多语数据上预训练，适合作为服务双任务的通用底座；选择提示微调而非全量微调的理由是保持主干权重不动，才能让多分支共享同一份内存中的编码器。

### 共享编码器加双分支的整体流程是什么

整体流程可以沿着一个样本走一遍。测试语音先经特征提取进入冻结的 W2V-BERT 2.0，共 24 层 Conformer，隐层维度为 1024。每一层输入处同时注入两套任务相关提示，论文图 1 用同色两箭头表示常规与小波提示的同时注入。说话人分支与伪造检测分支各有自己的 24 套提示，分别做 1 次条件前向，得到各自视角下的 24 层隐状态。随后说话人头做因子化层加权融合与注意力时间池化，输出 256 维说话人嵌入，注册与测试嵌入算余弦相似度。

伪造检测头做跨层注意力融合与池化，输出真实语音后验，即模型判断语音为真实录制的概率。最后把余弦相似度经 sigmoid 校准到 0 到 1 区间，与真实语音后验相乘得到最终 SASV 分数，相当于只有两边都接受才给高分。该规则固定、无参数、与试验无关。训练时 2 分支在各自目标上独立训练 10 轮，不做联合多任务反向传播；推理时共享同一个 600M 主干内存，执行 2 次提示条件前向。Refiner 首次出现时指压缩与调整池化表示的瓶颈模块，两头共用同一类结构。

下面这张结构图把主干、双头与分数汇合画在了一起，读图时先看主路径再看分支差异。

> **看图路径：** 1. 先从底部波形经特征提取进入 Conformer 层 1 到层 24 的主链路；2. 再看每层两侧两种颜色箭头如何分别指向说话人验证头与伪造检测头；3. 最后看顶部余弦相似度与两类分类器如何汇成 SASV 分数

[![原论文 Fig. 1：Proposed USE architecture for the SASV task.](https://arxiv.org/html/2610.08845v1/g564.png)](https://arxiv.org/html/2610.08845v1/g564.png)

*论文图 1。原论文 Fig. 1:：“Proposed USE architecture for the SASV task. At each transformer layer, two arrows of the same color denote the simultaneous injection of regular and wavelet prompt sets.”。*

从图中可见底部是波形与特征提取，中部粉色大框是 W2V-BERT 2.0 的层堆叠，每层左右两侧分别伸出指向蓝色说话人验证头与紫色伪造检测头的箭头，表示同一主干被两套提示分别调节。蓝色头内自下而上是加权和、因子化层聚合、多头注意力池化、Refiner 与余弦相似度；紫色头内是跨层注意力、DSU 增广、多头注意力池化、Refiner 与两类分类器。顶部是说话人分数与真实语音分数汇成 SASV 分数的节点，右侧图例区分了说话人提示、伪造检测提示、可训练与冻结部分。

### 混合小波提示是如何在每层改变注意力的

混合小波提示微调是本文的适配核心。混合小波提示微调首次出现时可以理解为每层学两组小向量，常规提示 15 个、小波提示 8 个，维度都与模型隐层一致为 1024，只更新这些向量与任务头，主干冻结。处理过程是小波提示不直接拼接，而是先把 8 乘 1024 的提示矩阵看成 2 维图，做单层 2 维 Haar 离散小波变换，分解为一个低频近似子带与 3 个高频细节子带，再沿子带轴拼接并重整回原尺寸，得到变换后的小波提示。

随后把变换后小波提示、常规提示与音频隐状态沿序列轴拼接，作为该层的增广输入。在冻结的多头自注意力中，只有音频帧生成查询，键与值来自包含提示的增广序列，提示因此只作为冻结键值上下文提供虚拟条件。经过 Conformer 块更新后，丢弃前面的提示位置，只把音频帧传到下一层，下一层再注入新的层专属提示。原文在开发集上调参选定 15 与 8 的搭配，训练时两套提示随机初始化。

代价是每层序列长度从 T 变为 T 加 23，注意力计算量略增，但可训练量仅为层数乘提示总数乘维度，远小于微调整个主干。

**W2V-BERT 2.0 × 混合小波提示微调：** W2V-BERT 2.0 指 24 层 Conformer 组成、约 600M 参数的冻结语音编码器，负责提供通用多层声学表示；混合小波提示微调指每层同时加入常规提示与经过 Haar 小波变换的小波提示，只更新提示与任务头。两者搭配时，编码器权重不动保证共享，提示作为键与值中的虚拟上下文把注意力引向各自任务，组合后一个编码器能同时给出偏身份与偏真实性两种视角。

增广输入的拼接形式如下，符号含义是波浪线小波提示、常规提示与上层音频隐状态拼成送入本层的矩阵。

\[\hat{\mathbf{H}}_{\ell-1}=[\tilde{\mathbf{P}}^{w}_{\ell};\mathbf{P}^{r}_{\ell};\mathbf{H}_{\ell-1}]\in\mathbb{R}^{M\times D}.\]

查询只来自音频、键值来自增广序列的投影关系如下，冻结投影矩阵不变，梯度只经过提示。

\[\mathbf{Q}=\mathbf{H}_{\ell-1}\mathbf{W}_{Q},\quad\mathbf{K}=\hat{\mathbf{H}}_{\ell-1}\mathbf{W}_{K},\quad\mathbf{V}=\hat{\mathbf{H}}_{\ell-1}\mathbf{W}_{V},\]

这样设计的作用是常规提示保持灵活偏移，小波基给注意力一个多分辨率先验，更易捕捉局部高频合成痕迹，而主干通用知识不被破坏。

**常规提示 × 小波提示：** 常规提示指每层 15 个直接参与注意力的可学习向量，负责灵活的任务偏移；小波提示指每层 8 个先经过单层二维 Haar 离散小波变换再参与注意力的可学习向量，负责引入多分辨率先验。因为合成伪影常表现为局部高频扰动，小波基更易引导注意力关注这类细节，常规提示保留通用适配能力，两者拼接后一起作为键与值的增广上下文。

**深层提示注入 × 多层特征聚合：** 深层提示注入指在每一层输入处重新拼接新的层专属提示，音频帧作查询、提示加音频作键与值，层输出后丢弃提示位置只传音频帧；多层特征聚合指任务头同时读取 24 层输出再融合，而不是只用最后一层。前者解决每一层都需要任务条件的问题，后者解决单层表示兼顾身份与伪影不足的问题，组合后每层被提示调节、顶层再按任务需求融合全部深度。

### 说话人分支如何从 24 层得到身份嵌入

说话人验证头首次出现时可以理解为把 24 层输出按层加权求和再做时间池化的身份提取器。具体做法是分别学两组经 softmax 归一化的层权重，一组用于键流，一组用于值流，对 24 层逐帧加权求和得到融合后的键序列与值序列。softmax 在这里指把两类或多类输出分数转换为总和为 1 的概率分布。论文强调这里用静态加权和而不用随输入变化的融合，理由是身份是全局稳定属性，固定层重要性更稳定、方差更低。融合后用多头注意力时间池化，键来自融合键流，查询与值来自融合值流，再经轻量 Refiner 瓶颈与嵌入多层感知机映射到 256 维。

训练用 ArcFace 损失，间隔为 0.3、尺度为 30，余弦相似度在归一化嵌入与类原型之间计算。推理时注册嵌入与测试嵌入算余弦相似度，范围在负 1 到 1 之间，后续再经 sigmoid 校准。sigmoid 在这里指把相似度映射到 0 到 1 区间的函数。层权重分析显示身份更依赖深层，第 17 到 21 层权重突出，说明高层语义对区分说话人更重要。

**说话人验证头 × 伪造检测头：** 说话人验证头指用因子化加权和融合 24 层、再做多头注意力时间池化与 Refiner 得到 256 维说话人嵌入的分支，用 ArcFace 训练；伪造检测头指用跨层注意力逐帧融合 24 层、加 DSU 扰动、再池化得到 256 维真伪表示的分支，用加权交叉熵训练。两者分工是身份用全局稳定的层权重，真伪用随输入自适应的层间重标定，组合后分别输出余弦相似度与真实语音后验再相乘。

键流与值流的因子化加权求和形式如下，权重分别归一化，目标是解耦注意力条件与内容聚合。

\[\bar{\mathbf{K}}=\sum_{\ell=1}^{N}\alpha^{k}_{\ell}\,\mathbf{H}^{(\ell)},\qquad\bar{\mathbf{V}}=\sum_{\ell=1}^{N}\alpha^{v}_{\ell}\,\mathbf{H}^{(\ell)},\]

### 伪造检测分支为何用跨层注意力与扰动

伪造检测头与说话人头共享池化与 Refiner 结构，主要差别在层融合。Refiner 是压缩与调整池化表示的瓶颈模块。伪造检测头首次出现时可以理解为逐帧在层间做自注意力的真伪提取器。在每 1 帧把 24 层输出堆成 24 乘 1024 的矩阵，做 4 头跨层注意力，再对层维平均得到该帧融合向量，拼成全序列。原文理由是不同攻击的伪造线索出现在不同抽象层级，自适应重标定比静态加权更适合。训练时在时间池化前以 0.3 概率对融合序列做不确定性域偏移扰动，扰动特征统计量以提升对未见攻击与编解码失配的鲁棒性。

随后经 8 头注意力时间池化、相同的 Refiner 瓶颈与嵌入多层感知机得到 256 维表示，做真实语音与伪造二分类。损失是加权交叉熵，真实语音与伪造权重为 10 比 1，用以对抗训练集中伪造偏多且攻击类型多达 10 种的不平衡。推理时直接输出真实语音后验，即模型判断语音真实的概率，范围已在 0 到 1 之间。最终 SASV 分数是校准后说话人分数与该后验的乘积，形式固定。

跨层融合在每 1 帧的计算目标是让各层互相比对后再平均，原文实现如下。

\[\mathbf{F}_{t}=\frac{1}{N}\sum_{n=1}^{N}\Big[\mathrm{softmax}\!\Big(\tfrac{(\mathbf{S}_{t}\mathbf{W}_{Q})(\mathbf{S}_{t}\mathbf{W}_{K})^{\top}}{\sqrt{d_{h}}}\Big)(\mathbf{S}_{t}\mathbf{W}_{V})\Big]_{n},\]

分数结合的计算目标是让只有双任务都接受才给高分，相当于逻辑与门。

\[s_{\mathrm{SASV}}=\sigma(s_{\mathrm{ASV}})\cdot p_{\mathrm{bona}}.\]

### 冻结了什么、更新了什么、监督从哪里来

训练组织是 2 分支独立、各学各的。冻结的是约 600M 参数的 W2V-BERT 2.0 全部权重，包括特征提取与 24 层 Conformer 的查询键值投影。更新的是每分支各自的常规提示与小波提示，以及任务头内的层权重、注意力池化、Refiner 与嵌入层。说话人头约 1.5M 可训练参数，伪造检测头约 5.5M，合计约 7.0M。监督方面，说话人分支来自说话人标签的 ArcFace，伪造分支来自真实语音与伪造标签的加权交叉熵，没有联合多任务反向传播。

优化器为 AdamW，学习率 1e-4，SpoofCeleb 上批量 16、固定音频长度 64600 采样点，各训 10 轮。ASVspoof5 上为应对评测中的 7 种编解码，训练时以每条 0.35 概率做编解码增广。梯度只经过提示与头，不进入主干；每层提示是层专属、逐层重新注入，不跨层复用。原文未报告提示初始化之外的随机种子方差与搜索细节，复现时应把 15 与 8 的提示数、单层 Haar 变换与 0.3 的 DSU 概率当作固定配置先跑通，再做小范围验证。

### 在哪些数据与指标下验证结论才成立

主要基准是 SpoofCeleb，它源自 VoxCeleb1，保留野外噪声、混响与信道失真，含 1251 名说话人、约 150,000 条真实语音与约 2,400,000 条由 23 种合成系统生成的伪造语音。次基准是 ASVspoof5 第二轨道，源自众包多语 LibriSpeech，含 1922 名说话人与约 680,000 条语音，评测集有原文报告的 32 种含对抗样本的伪造攻击并经 7 种编解码如 Opus 与 Speex 处理。划分用官方开发集与评测集，指标为等错率与最小 a-DCF，代价参数为漏检 1、误接受 10，先验为目标 0.9405、非目标 0.0095、伪造 0.05。结论成立的条件包括同一划分与同一代价先验、SpoofCeleb 上只用域内数据训练两头、ASVspoof5 上只用提供数据加编解码增广。

跨数据集、更换代价或引入外部大规模说话人数据时，数字不能直接对比，论文在可扩展实验中也明确提醒辅助头用了域外 VoxCeleb2 数据，因此基座与扩展设置不可同条件比较。

### 在 SpoofCeleb 上相对基线得到了什么

要回答的核心问题是共享冻结编码器能否在更少可训练参数下超过双编码器级联。比较条件是同一 SpoofCeleb 开发集与评测集，指标方向是等错率与最小 a-DCF 越小越好。下表是原文表一的完整呈现，含基线、本文方法、消融、可扩展与 ASVspoof5 部分，阅读时先看 SpoofCeleb 基座三行。

| Dataset | Setting | Sub-System | Sub-System | Params | Dev | Dev | Dev | Dev | Eval | Eval | Eval | Eval |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | ASV | CM | #Learnable | SASV | CM | ASV | a-DCF | SASV | CM | ASV | a-DCF |
| SpoofCeleb | Baseline | E2E SASV [20] | – | 31M | 11.29 | 47.64 | 11.83 | 0.256 | 10.74 | 49.62 | 11.64 | 0.230 |
| SpoofCeleb | Baseline | WavLM-ECAPA-TDNN [6] | W2V-AASIST | 320M | 3.38 | 0.44 | 3.36 | 0.043 | 3.93 | 0.16 | 3.86 | 0.047 |
| SpoofCeleb | USE (ours) | W2VBert-ASV | W2VBert-CM | 7.0M | 3.27 | 0.26 | 4.05 | 0.040 | 3.24 | 0.03 | 3.65 | 0.038 |
| SpoofCeleb | Ablation | W2VBert-ASV | w/o Cross L. Att. | 3.2M | 3.48 | 0.36 | 4.07 | 0.047 | 3.26 | 0.05 | 3.79 | 0.039 |
| SpoofCeleb | Ablation | w/o Refiner | w/o Refiner | 7.0M | 4.05 | 0.27 | 5.73 | 0.054 | 3.91 | 0.15 | 4.51 | 0.055 |
| SpoofCeleb | Ablation | w/o Multilayer | w/o Multilayer | 3.0M | 4.60 | 0.42 | 5.45 | 0.059 | 4.93 | 0.28 | 5.51 | 0.058 |
| SpoofCeleb | Ablation | w/o WP | w/o WP | 7.0M | 4.24 | 0.48 | 5.02 | 0.056 | 3.56 | 0.15 | 4.13 | 0.044 |
| SpoofCeleb | Ablation | w/o All Prompts | w/o All Prompts | 6.2M | 8.67 | 1.33 | 9.19 | 0.134 | 7.40 | 0.42 | 8.47 | 0.086 |
| SpoofCeleb | Scalability | {SC, VC2} ASV Heads | W2VBert-CM | 8.7M | 2.94 | 0.26 | 3.51 | 0.037 | 2.73 | 0.03 | 3.15 | 0.035 |
| ASVspoof5 | USE (ours) | W2VBert-ASV | W2VBert-CM | 7.0M | 3.31 | 0.24 | 3.98 | 0.043 | 5.23 | 3.60 | 4.27 | 0.092 |

表中可见评测集上端到端基线 SASV 等错率 10.74%、最小 a-DCF 为 0.230；级联基线 SASV 等错率 3.93%、伪造检测等错率 0.16%、最小 a-DCF 为 0.047；本文 USE 为 SASV 等错率 3.24%、伪造检测等错率 0.03%、说话人验证等错率 3.65%、最小 a-DCF 为 0.038，可训练参数仅 7.0M，约为级联 320M 的一小部分。开发集趋势一致，本文方法最小 a-DCF 为 0.040。论文据此称在该划分与代价下超过了所实现的强级联，并在官方榜单语境中排名靠前。

限制是说话人验证单项并非两集合都最优：评测集本文 3.65% 低于级联的 3.86%，开发集本文 4.05% 高于级联的 3.36%，说明联合最优不等于每项都最优。层重要性图进一步解释了双任务需要不同深度，下一段结合原图说明。

读这张层重要性图时，先看上下两幅的标题与坐标，再对比深色前 5 层的位置。

> **看图路径：** 1. 对比上下两幅柱状图中深色前五重要层的层号分布；2. 观察说话人分支在 17 到 21 层的集中高度与伪造分支在第 3 层与第 19 层的双峰；3. 注意纵轴为重要性百分比，横轴为 1 到 24 层

[![原论文 Fig. 2：Learned layer weights of the 24 W2V-BERT layers for the ASV and CM heads.](https://arxiv.org/html/2610.08845v1/figure_1.svg)](https://arxiv.org/html/2610.08845v1/figure_1.svg)

*论文图 2。原论文 Fig. 2:：“Learned layer weights of the 24 W2V-BERT layers for the ASV and CM heads. Darker colors indicate the five most important layers.”。*

上图说话人模型的重要性在 17、18、19、20、21 层最高，分别约为 11.9%、8.2%、12.6%、10.7%、5.1%，其余层多在 2% 到 4% 之间；下图伪造检测模型在第 3 层约 25.7% 与第 19 层约 25.2% 形成双峰，第 20 层约 9.6%、第 2 层约 5.8%、第 21 层约 4.1%，其余层普遍较低。这支持了身份依赖深层、真伪需兼顾浅层谱模式与深层长程依赖的判断，也解释了为何两头要用不同融合。图中数值较密时以深色前 5 层为准，浅色小柱不必逐个复述。

**SASV 分数 × 最小 a-DCF：** SASV 分数指把说话人余弦相似度经 sigmoid 映射到 0 到 1 区间后与伪造检测头输出的真实语音后验直接相乘得到的最终分数，只有两边都高才高；最小 a-DCF 指在目标、先验与误判代价给定的检测代价函数的最小值，论文用 Cmiss 为 1、Cfa 为 10 与目标等先验，越小越好。前者是待评价的系统输出规则，后者是综合漏检与误接受代价的评价标尺。

### 在 ASVspoof5 上编解码与攻击类型带来了什么差异

要回答的问题是设计在含对抗攻击与编解码失真的野外条件下是否仍成立。条件是 ASVspoof5 官方划分，仅用提供数据加 7 种评测编解码增广，指标方向是等错率越小越好。下表先看编解码维度的伪造检测等错率分解。

| System | C02 | C10 | C01 | C03 | C09 | C08 | C11 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| USE (ours) | 2.88 | 3.05 | 3.13 | 3.19 | 3.32 | 3.49 | 4.48 |

表中可见 C01 到 C10 的其余 6 种编解码下伪造检测等错率在 2.88% 到 3.49% 之间，压缩最重的 C11 升至 4.48%，编解码间差距相对窄。再看攻击维度的分解，比较问题是误差是否集中在少数难攻击上。

| System | A29 | A17 | A26 | A21 | A24 | A22 | A25 | A20 | A19 | A23 | A18 | A32 | A27 | A30 | A31 | A28 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| USE (ours) | 0.48 | 0.76 | 0.88 | 0.99 | 1.36 | 1.49 | 1.61 | 2.09 | 3.22 | 3.44 | 3.48 | 4.16 | 4.16 | 4.65 | 4.97 | 7.74 |

表中可见所列攻击中最好的是 A29 为 0.48% 与 A17 为 0.76%，最难的是 A28 为 7.74% 与 A31 为 4.97%，其余分布在 0.88% 到 4.65% 之间，从不足 1% 到近 8% 的跨度解释了总体评测集伪造检测等错率 3.60% 与最小 a-DCF 为 0.092 明显高于 SpoofCeleb 的原因。论文在 SpoofCeleb 上不做按攻击分解，理由是该集伪造检测已近 0.03% 上限、细分增量信息少。限制是这两张分解表只报告伪造检测单项，未给出按攻击的联合 SASV 指标，且 ASVspoof5 开发集与评测集之间仍有差距，开发集最小 a-DCF 为 0.043，评测集为 0.092，说明泛化损失主要来自未见攻击而非编解码。

### 拿掉跨层注意力与提示各会损失多少

消融要回答每个组件的贡献与代价，条件仍是 SpoofCeleb，数字见前文完整表一的消融区。把伪造检测头的跨层注意力换成加权和，总参数从 7.0M 降至 3.2M，评测集最小 a-DCF 从 0.038 升至 0.039，数值略升对应性能略降，说明在该集上自适应融合的增益有限。去掉 Refiner 后评测集最小 a-DCF 退到 0.055，去掉多层融合只用单层后 SASV 等错率评测集升至 4.93%、最小 a-DCF 为 0.058，说明多层接入与瓶颈精炼不可或缺。提示的作用最大，去掉全部提示后评测集最小 a-DCF 退到 0.086；只保留常规提示时回到 0.044，再加入小波提示后到 0.038，且伪造检测等错率从 0.15% 降至 0.03%，参数预算同为 7.0M。

教学例子是若把提示比作给冻结编码器的任务便签，去掉便签等于让通用表示直接做两件专事，误差上升最多。可扩展性演示是新增一个在 VoxCeleb2 上训练的第二说话人头，仅加 1.5M 参数，两说话人头分数平均后再与伪造头相乘，开发集 SASV 等错率为 2.94%、最小 a-DCF 为 0.037，评测集 SASV 等错率为 2.73%、最小 a-DCF 为 0.035，但因引入域外数据，不能当作基座架构的同条件提升，只能读作可挂新头而不动已有模块的证据。

### 哪些范围还没有被测到

首先是未胜出与负结果。说话人验证单项在开发集上不如级联，跨层注意力在 SpoofCeleb 上的增益很小，ASVspoof5 上 A28 等少数攻击仍高达 7.74%，C11 压缩下也升至 4.48%，说明难攻击子集是主要瓶颈。其次是尚未评测的范围。论文没有报告延迟、吞吐、显存峰值与误判率随阈值的完整曲线，也没有给出多次随机种子的方差，推理开销只定性描述为共享主干内存加 2 次前向，不能换算成具体毫秒数。训练资源与推理帧率分开看，训练是每分支 10 轮的小参数更新，推理是 600M 主干常驻加两遍提示条件计算。

再者是条件边界。最小 a-DCF 依赖特定代价与先验，换代价后排序可能变化；SpoofCeleb 近上限的 0.03% 不能推广到 ASVspoof5 的 3.60%；可扩展实验用了域外数据，不能与基座直接比大小。缺证据不等于技术有错，只是这些点需要补验证才能谈部署。

### 复现第一步要固定哪些设置

复现从数据与代码开始。论文给出代码与模型链接，资源链接当前可以访问，其中代码材料与模型材料有可访问地址，具体功能以仓库文档为准，完整系统一键可运行尚无法确认，需按仓库说明配环境与数据。第一步固定主干为 W2V-BERT 2.0 冻结，隐层 1024、24 层，不做全量微调；提示设为每层常规 15 加小波 8，单层 Haar 变换，随机初始化；说话人头用因子化加权和、ArcFace 间隔 0.3 尺度 30，伪造头用 4 头跨层注意力、DSU 概率 0.3、8 头时间池化、加权交叉熵权重 10 比 1。

音频固定 64600 采样点，AdamW 学习率 1e-4，批量 16，各训 10 轮，2 分支独立训练。分数侧用 sigmoid 校准余弦相似度后乘真实语音后验。ASVspoof5 需加 7 种评测编解码增广、每条概率 0.35。核对时数据集、基线、阶段、指标、单位与聚合对象一起看，等错率单位为百分比，最小 a-DCF 无百分比，百分点与相对百分比不要混用。

### 什么时候值得尝试以及还需补哪项验证

什么时候值得尝试。当已有大语音编码器但不想维护双主干，又需要身份与真伪分开演进时，该设计值得尝试，因为新头可独立挂载而不重训旧头；当伪造线索偏局部高频而身份偏全局稳定时，混合小波提示加不同层融合的搭配更有针对性。复现第一步是先在 SpoofCeleb 官方划分上跑通冻结主干加双头与分数相乘，复刻 7.0M 参数下评测集 0.03% 伪造检测等错率与 0.038 最小 a-DCF 的数量级，再做层权重与消融检查。

还需要补的验证包括难攻击如 A28 的误差分析与针对性改进、在新代价先验下的阈值与最小 a-DCF 重估、多次种子的稳定性，以及在目标硬件上的双前向延迟与显存实测。容易产生的误解是把共享编码器当成共享嵌入，实际上共享的是冻结通用知识，嵌入与提示都是任务专属；另一个误解是把可扩展实验的 0.035 当成基座的同条件更优，实际上它用了域外 VoxCeleb2 数据，只能证明模块化可扩展。

总体看，证据支持在给定数据与代价下以小参数达到强级联以上的联合效果，但野外难攻击与压缩条件下的余量仍待补强。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.08845v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
