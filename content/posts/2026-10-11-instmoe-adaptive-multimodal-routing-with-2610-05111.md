---
title: "InstMoE: Adaptive Multimodal Routing with Specialized Experts"
date: 2026-10-11
draft: false
tags: [语音情感识别, 混合专家模型, 多模态学习, 对比学习]
categories: [论文速递]
description: "针对同一融合通路难以适应不同输入证据组合的问题，InstMoE 用五个单模态与跨模态专家加实例路由和对比语义对齐，在 CMU-MOSEI 与 CH-SIMS v2 上以 3.49M 至 3.53M 参数取得有竞争力的情感预测结果，但结论只在固定预提取特征与官方划分条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.05111"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "InstMoE：按输入特点选择证据通路的多模态情感分析"
paper_digest_original_title: "InstMoE: Adaptive Multimodal Routing with Specialized Experts"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.05111v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.05111v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.05111v1.pdf"
paper_digest_primary_task: "语音情感识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.contrastive","label":"对比学习"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对同一融合通路难以适应不同输入证据组合的问题，InstMoE 用五个单模态与跨模态专家加实例路由和对比语义对齐，在 CMU-MOSEI 与 CH-SIMS v2 上以 3.49M 至 3.53M 参数取得有竞争力的情感预测结果，但结论只在固定预提取特征与官方划分条件下成立。"
paper_digest_authors: [{"affiliations":["Guangdong University of Technology"],"name":"Guimin Hu"},{"affiliations":["University of Copenhagen"],"name":"Xiang He"},{"affiliations":["Pengcheng Laboratory"],"name":"Yingjian Li"},{"affiliations":["Tongji University"],"name":"Zheng Lian"},{"affiliations":["Guangdong University of Technology"],"name":"Boyan Xu"},{"affiliations":["Guangdong University of Technology"],"name":"Ruichu Cai"}]
paper_digest_abstract_sha256: "5e9291597b1b402bac90b0121c73317a2c38e0801f06ca3227bb15f3d61e1e38"
paper_digest_sidecars: {"citation.bib":{"sha256":"6501b8b0df9ac659f6275fe1969fcf6caf46110645ae78334d089e439503ae68","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05111/citation.bib"},"citation.json":{"sha256":"ca025bb7ff56b5a01f17c3173e225819be5614fccdba4e67cd25f0d7b1f92260","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05111/citation.json"},"citation.ris":{"sha256":"128f86eecee40944162b99210debdcdc79f52aa4d79231cf12b1d15a652f377a","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05111/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"9ab4712d566a25d8e4c9b4e46af5c905614af1bef6f7b95642fad50355b31c04","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05111/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "7251dcfb99132641a5c7c029e8b497a0110886c497f97d4f8394ae7fde11d8c4"
paper_digest_api_reader_plan_sha256: "9f9a962a017fb3e5d95162bc0a643f9f212cfae4904bda7662d4e5e46e05270a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e9f26b527c09358f8059c48d1c6a4c329468f495e9f488e7f0a8a6fa3e39ce8d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "209968d7f338141446f65c137197f0bb4bdc10c70aa7b80ba44c1a2a127b026e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5bdad209cca2d2d2c7f3824d04435bb2cdfcc7846217ccc035ee00e2f4cbff46"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7a2505224aa70bf126fb5d3cc131468bcbe74d8612e4f7f9e7e5ba91f3247ceb"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 InstMoE：按输入特点选择证据通路的多模态情感分析

> 英文题目：*[InstMoE: Adaptive Multimodal Routing with Specialized Experts](https://arxiv.org/abs/2610.05111v1)*

> 标签：#语音情感识别 | #混合专家模型 | #多模态学习 | #对比学习
>
> 评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Guimin Hu：Guangdong University of Technology
- Xiang He：University of Copenhagen
- Yingjian Li：Pengcheng Laboratory
- Zheng Lian：Tongji University
- Boyan Xu：Guangdong University of Technology
- Ruichu Cai：Guangdong University of Technology

## 📌 核心摘要

多模态情感分析的输入包含文本、音频和视频序列，输出是情感强度回归值与正负二分类标签，难点在于不同输入依赖的可靠模态不同，固定融合会让强势或含噪模态压制互补证据。InstMoE先用各模态轻量Transformer编码器与注意力池化得到定长表示，再用模态投影头与对称InfoNCE目标把语义相近的跨模态表示拉近，把同一批内不同样本的表示推远。随后文本表示作为查询去注意音频与视频序列，得到文本-音频与文本-视频两路关系证据，与三路单模态表示共同构成五条候选通道。路由器把五路证据拼接后输出五维权重，对五个专用专家输出加权求和得到融合表示，再送入回归与分类头，从而每个输入走不同的证据组合而非共享融合。在中文CH-SIMS v2评测设置下，InstMoE的F1-Score（非零，越高越好）为84.87，超过前最佳CaReFlow的82.90。结论适用于已抽取BERT、COVAREP、Facet、openSMILE和OpenFace特征的短视频情感数据，对未对齐变长原始数据的效果尚未验证。原文披露在CH-SIMS v2测量条件下参数量为3.49M，在单块NVIDIA 4060Ti GPU上训练约65s/轮，推理约1.5ms/样本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 情感分析要从哪些输入预测什么

这篇论文研究的是多模态情感分析，输入是同一段话对应的 3 路信号：文本转录、音频波形特征序列、视频人脸与表情特征序列，目标是预测说话人的情感强度与正负极性。输出一方面是连续的情感分值，用平均绝对误差和皮尔逊相关评价，分值越接近人工标注越好；另一方面是去掉中性样本后的二分类，用准确率和 F1 评价，正负判断越准越好。

必须保留的信息是任务相关的语义，例如表示肯定或否定的词义、语调中的迟疑或讽刺、表情中的难过或愉悦，而说话人音色、录制背景、外貌等与情感无关的变化应当被抑制。论文的起点是不同样本依赖的证据组合不同，有时只看文本就够，有时需要文本加音频或文本加视频，有时 3 路都要看，因此值得研究能否让每个样本走不同的处理通路。

### 已有融合路线为什么不够灵活

原文把相关工作分成 3 条线。第一条是多模态融合，从张量融合、低秩融合到跨模态 Transformer、门控与互信息方法，做法不同，但多数是所有样本共用同一套融合结构，输入变了，模态组合方式基本不变。第二条是表示解耦，例如把模态不变与模态特有表示分开，或用多任务自监督保留互补信息，重点是把表示学得更干净，而不是改变每个样本的计算路径。

第 3 条是混合专家，靠路由把输入分给不同专家做条件计算，已有人用于多模态与多任务，但专家多是隐式学出的潜专家，分工不直接对应模态。本文与它们在输入、目标和运行阶段上可比，都是给定文本音频视频预测情感，但方法归属不同：本文把专家直接按文本、音频、视频、文本音频、文本视频 5 路证据定义，再做实例级路由，这与共享融合和隐式专家的路线形成对照，不能把类别差异直接说成同条件胜负。

### 为什么每个样本需要的证据通路不同

论文用 4 个示意例子说明问题。第一句是明确的喜爱表达，配中性语调与中性表情，文本一路就够；第二句文字是反话，配讽刺语调，需要文本加音频；第三句文字含糊，配悲伤表情，需要文本加视频；第四句文字迟疑，配低能量声音与悲伤表情，需要 3 路一起看。

例子只是教学示意，不代表模型在这些句子上一定如此路由。由此引出的具体困难有两个：一是各模态的可靠性随样本变化，强势模态可能淹没互补证据，不可靠模态可能注入噪声；二是路由本身可能被模态特有变化误导，把样本送错专家。因此方法需要同时解决按样本选择通路，以及让选择依据更偏向语义而非风格。

### InstMoE 的整体处理流程是什么

InstMoE 的流程可以沿着一个样本自下而上理解。底部是 3 路预提取特征序列，文本来自 BERT，音频在英文集用 COVAREP、中文集用 openSMILE，视频在英文集用 Facet、中文集用 OpenFace，论文不微调这些大骨干，只训练后面的轻量结构。接着每个模态各自过一个轻量 Transformer 编码器并做注意力聚合，得到固定长度的单模态表示。然后文本表示作为查询去注意音频与视频序列，得到两路关系证据。5 路证据各自进一个专属专家，路由器把 5 路证据拼接后输出 5 个权重，加权求和得到融合表示，最后送入回归头与分类头。下面的总览图把这条主路径、跨模态分支与多任务头画在了一起，先看箭头走向再看模块分工会更清楚。

**固定融合 × 自适应路由：** 固定融合指所有样本共用同一套模态组合与权重计算方式，自适应路由指路由器按当前输入的五路证据拼接向量给出专属权重；前者省设计但难以处理某个模态不可靠的样本，后者多出按样本加权专家输出的步骤，因而能在文本充分时偏向文本、在需要补充时调高跨模态通路。

下面这张总览图展示了从原始 3 模态输入到融合表示再到 2 个任务头的完整链路，读图时先沿底部到顶部的箭头看主路径，再看跨模态注意力与路由器分别在何处分叉与汇合。

> **看图路径：** 1. 从底部音频文本视频输入向上追踪单模态编码器到拼接与跨模态注意力的箭头；2. 看中间路由器如何同时指向五个专家并汇成融合表示；3. 看顶部回归与分类头如何共用融合表示并受主损失监督

[![原论文 Figure 1：Overview of InstMoE.](https://arxiv.org/html/2610.05111v1/InstMOE.png)](https://arxiv.org/html/2610.05111v1/InstMOE.png)

*论文图 1。原论文 Figure 1:：“Overview of InstMoE.”。*

从图中可见，底部单模态编码器各自输出一路表示，中间跨模态注意力用文本查询音频与视频形成两路新增表示，路由器在中上部同时连接 5 个专家并输出融合向量，顶部回归与分类头共用该向量。这种布局的实际含义是计算分两步：先把证据准备齐，再按样本决定信任谁，而不是一开始就把所有模态平均混合。

### 单模态编码与语义对齐做了什么

单模态部分的作用是把异构特征变成同一维度且保留任务信息。每个模态有独立的轻量 Transformer 建模模内依赖，再经注意力聚合得到向量，记为文本、音频、视频表示。为了让路由依据更干净，论文把这些表示经各自投影头映射到共享隐空间，用以文本为中心的对称 InfoNCE 目标做对比语义对齐，简称 CA。直观说就是同一条样本的文本与音频、文本与视频在共享空间里要靠近，不同样本之间要分开，温度系数可学习。

对齐损失只通过反向传播影响编码器，原始单模态表示仍保留下来作为后续直接证据。对齐不是把风格显式拆成某个向量，而是用对比目标隐式压制无关变化，论文在局限中也承认哪些特征算风格尚缺显式可解释性。

**对比语义对齐 × 实例路由：** 对比语义对齐指把文本与音频、文本与视频的同一样本表示拉近、不同样本表示推远，使编码器受说话风格与背景等无关变化的影响减小，实例路由指按拼接证据输出五路专家权重；前者负责净化输入给路由的依据，后者负责按依据分配计算，搭配后路由不易被风格差异带偏。

下面第一条公式是文本到另一模态的对比损失，符号含义是批量内同一样本为正对、不同样本为负对，用余弦相似度加温度归一化计算，目标是提高正对的相对相似度。

\[\mathcal{L}_{t\rightarrow m}=-\frac{1}{N}\sum_{i=1}^{N}\log\frac{\exp(\operatorname{sim}(z_{t,i},z_{m,i})/\tau)}{\sum_{j=1}^{N}\exp(\operatorname{sim}(z_{t,i},z_{m,j})/\tau)}\]

下面第二条公式是把 2 个方向、两个辅助模态的损失平均成对称对齐目标，集合包含音频与视频，系数是对方向数与模态数的平均，目标是得到统一的语义监督。

\[\mathcal{L}_{\mathrm{contrastive}}=\frac{1}{2|\mathcal{M}|}\sum_{m\in\mathcal{M}}\left(\mathcal{L}_{t\rightarrow m}+\mathcal{L}_{m\rightarrow t}\right)\]

这两条公式的代价是训练时需要批量内负样本，批量大小与温度会影响梯度，推理时不对齐分支不额外计算相似度。监督来源是样本对应关系本身，不需要额外的风格标注，但这也意味着它只能利用共现语义，不能保证完全去掉所有无关变化。

### 关系证据与五个专家如何分工

有些线索单独看不出来，需要看配合，例如文字含糊但表情悲伤。论文因此构造两路关系证据，用文本表示查询编码前的音频与视频特征序列，做跨模态注意力，得到文本音频与文本视频表示。加上原来的 3 路单模态表示，一共 5 路候选通路，分别对应文本、音频、视频、文本音频、文本视频。每个通路由一个专属专家处理，专家结构是线性变换加 ReLU 再加层归一化，参数各自独立，计算量比复杂注意力或样条结构更轻。专家按模态语义预先定好分工，而不是让模型从零学出 5 个无名分工，这样路由的选择具有可解释的证据含义。

**单模态证据 × 关系证据：** 单模态证据指文本、音频、视频各自编码聚合后得到的向量，直接反映单个模态的信息，关系证据指以文本为查询对音频或视频序列做跨模态注意力得到的向量，反映模态间配合才能显现的线索；两者分工不同，组合后路由可以在直接证据不足时补充交互证据。

下面公式说明关系证据的计算，输入是聚合后的文本向量与另一模态的特征序列，输出是融合了对方键值信息的交互向量，查询固定为文本意味着交互以语言为中心展开。

\[f_{t\rightarrow m}=\operatorname{Attn}(f_{t},X_{m}),\]

这种以文本为中心的代价是当文本本身被严重遮挡或噪声污染时，查询质量会下降，论文后面的退化实验正是为了检验此时路由能否转向更可靠的模态。t-SNE 可视化显示 5 路专家输出各自成团，支持它们学到了不同子空间，但这只是定性证据，不能直接换算成精度提升。

### 路由器如何给出每个样本的权重

路由器的输入是 5 路证据的拼接向量，输出是 5 个非负且和为一的权重。网络实现是带残差的多层感知机加四头自注意力再加两层感知机，输出经 Softmax 归一化。融合表示是 5 个专家输出按权重加权求和，再送入任务头。行为上可以这样复述：若文本已足够，路由器可以给文本专家高权重；若需要补充，就调高音频、视频或跨模态专家的权重。

权重是软分配，不是只选一个专家硬切换，因此每个样本走的是加权组合出的专属路径。为了缓解专家坍缩，论文用训练集上每路表示的经验均值向量初始化对应专家的偏置，权重矩阵仍用常规保方差初始化，均值只算 1 次且训练中固定，只提供起点而不改变权重初始化。

**专家 × 路由器：** 专家指各自处理一路证据的线性加激活加归一化模块，路由器指把五路证据拼接后映射为概率分布的网络；专家分工保存不同证据的变换方式，路由器决定当前样本更信任哪几路，组合后最终表示是专家输出的加权和。

下面公式是最终融合的加权求和，符号中权重来自路由器，专家输出来自各自通路，目标是按样本构造输入相关的多模态表示。

\[h_{\mathrm{moe}}=\sum_{k\in\mathcal{K}}w_{k}E_{k}(x_{k}).\]

这一步的代价主要是拼接向量维度较大带来的路由网络参数，以及训练时需要同时优化主任务、辅助单模态监督与对齐损失，超参数更多，需要按数据集调权重。梯度路径上，主损失经融合表示同时影响专家与路由器，对齐损失主要影响编码器，辅助损失保留单模态任务信息，三者联合优化证据质量与组合方式。

### 训练时优化了哪些目标与超参数

论文是端到端训练，包含主回归与主分类损失、单模态辅助回归与分类损失、对比对齐损失。实现细节是 PyTorch，单卡 4060Ti，批量 32，优化器 AdamW，最大 50 轮，关键学习率与损失权重用 Optuna 按数据集搜索。报告的搜索值为英文 CMU-MOSEI 初始学习率 6.09e-05、中文 CH-SIMS v2 为 2.27e-04，对齐权重两集都在 0.314 左右，主回归与主分类权重以及各模态辅助权重见附表，模态丢弃与焦点损失参数也分别给出。这些是最优搜索值，不是部署时天然可得的提升，换数据或换特征时需要重调。训练用固定预提取特征，不更新 BERT 等大骨干，这样能 isolate 融合结构的效果，但也意味着结论依赖于这些特征的质量，若换更强的语言模型，专家分工可能变化，论文把这点列为未来工作。

### 数据划分与评价条件是什么

实验用两个公开情感基准，英文 CMU-MOSEI 与中文 CH-SIMS v2，均提供文本音频视频 3 路序列。划分按官方，评价用回归的平均绝对误差越小越好、皮尔逊相关越大越好，以及去掉中性样本后的二分类准确率与 F1 越大越好。基线覆盖张量融合、跨模态 Transformer、解耦表示、动态加权与近期高效模型，英文集基线多引自前人汇总，中文集部分结果来自作者代码复跑。比较的公平条件是文本都用固定 BERT 特征，音频视频特征按各自协议提取，划分一致。下面的数据集表给出了样本量、划分与对齐情况，读表时注意中文集未对齐、英文集已对齐，这会影响跨模态注意力的输入条件。

**回归指标 × 分类指标：** 回归指标指对情感强度连续分值的误差与相关度量，分类指标指去掉中性样本后按正负两类计算的准确率与 F1；前者看分值拟合精度，后者看正负判断能力，两者搭配才能同时反映强度估计与极性判断。

下表比较的问题是 2 个数据集的规模与对齐条件是否相同，公平条件是都用官方划分，指标方向在后文主结果中按越小越好或越大越好区分。

| Dataset | Lang. | Total Samples | Split (Train/Valid/Test) | Alignment |
| --- | --- | --- | --- | --- |
| CH-SIMS v2 | Zh | 4,002 | 2,400 / 800 / 802 | Unaligned |
| CMU-MOSEI | En | 22,856 | 16,326 / 1,871 / 4,659 | Aligned |

该表说明英文集样本量远大于中文集，且对齐方式不同，因此在小数据上学到的路由偏好不能直接推广到大数据，反之亦然。它的限制是只给出数量与对齐标签，没有给出说话人重叠、时长分布与标注一致性，复现时需回到官方划分与特征协议核对。

### 中文 CH-SIMS v2 上的精度与开销如何

中文集上的比较问题是相同特征与划分下，自适应路由能否在精度与参数量上同时占优，指标方向是误差越小越好、相关与分类指标越大越好、参数与耗时越小越好。论文报告 InstMoE 在相关、准确率、F1 三项上为最优，误差与此前最优持平，且经 5 次随机种子的配对 t 检验显著优于前最优，F1 提高 1.97 个百分点。开销上参数约 3.49M，训练每轮 65s，推理每样本 1.5 ms，轻于表中更大的基线与约 3.95M 的近期高效模型。读图时注意强负样本更偏文本专家，强正样本视频专家权重更高，中性组在文本与文本视频之间分配更分散，这支持路由随输入变化，但只是平均权重的相关观察，不等于因果。

下图为 CH-SIMS v2 上按情感强度分组的平均专家权重，读图时先看横轴 3 组，再在组内对比五色柱高，纵轴是权重，越高表示该组平均更信任该路。

> **看图路径：** 1. 对比三组情感强度下文本专家柱高的变化；2. 看强正样本中视频专家是否为组内最高；3. 看中性组文本与文本视频两路是否同时保持较高

[![原论文 Figure 2：Average weight allocation per expert across sentiment intensity groups (CH-SIMS v2).](https://arxiv.org/html/2610.05111v1/figs/router_weights_fig2_final_framed.png)](https://arxiv.org/html/2610.05111v1/figs/router_weights_fig2_final_framed.png)

*论文图 2。原论文 Figure 2:：“Average weight allocation per expert across sentiment intensity groups (CH-SIMS v2).”。*

从像素可见，中间强负组的文本柱明显最高，左侧强正组的视频柱为组内最高，右侧中性组的文本柱仍最高但文本视频柱也较高，整体柱形分布随组别变化。这支持不同情感条件偏好不同通路，但限制是组平均会掩盖组内差异，且权重高不直接等于该路单独精度高。

下表比较的问题是中文集上各模型精度与效率的权衡，公平条件是同数据集与同类预提取特征，指标方向按表头箭头判断。

| Model | Venue | MAE ↓ | Corr ↑ | Acc-2 ↑ | F1-Score ↑ | Params (M) ↓ | Train / ep. (s) ↓ | Infer. (ms) ↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CubeMLP* Sun et al. (2022) | ACM MM 2022 | 0.334 | 0.648 | 71.95 | 78.53 | ∼\sim6.5 | ∼\sim210 | ∼\sim3.8 |
| CENet†\dagger Wang et al. (2022) | TMM 2022 | 0.310 | 0.699 | 79.56 | 79.63 | ∼\sim6.4 | ∼\sim210 | ∼\sim3.7 |
| ALMT* Zhang et al. (2023) | EMNLP 2023 | 0.308 | 0.700 | 71.86 | 79.51 | ∼\sim12.4 | ∼\sim310 | ∼\sim5.4 |
| KuDA* Feng et al. (2024) | EMNLP 2024 | 0.289 | 0.741 | 76.21 | 82.11 | ∼\sim10.6 | ∼\sim280 | ∼\sim5.0 |
| KAN-MCP* Luo et al. (2025) | ACM MM 2025 | 0.281 | 0.742 | 81.60 | 81.70 | ∼\sim3.95 | ∼\sim140 | ∼\sim2.8 |
| CaReFlow Mai and Han (2026a) | CVPR 2026 | 0.277 | 0.745 | 82.90 | 82.90 | ∼\sim7 | ∼\sim210 | ∼\sim4.0 |
| CmIR Mai and Han (2026b) | ACL 2026 | 0.286 | 0.742 | 81.90 | 82.00 | ∼\sim4.1 | ∼\sim80 | ∼\sim2.5 |
| InstMoE | Ours | 0.271‡\ddagger | 0.751‡\ddagger | 85.85‡\ddagger | 84.87‡\ddagger | 3.49 | 65 | 1.5 |

该表的主要收益是 InstMoE 以更少参数取得更高的相关与分类分数，代价是结论依赖固定特征与该划分，若换特征或重划分，排名可能变化。未胜出项是误差仅为持平而非大幅领先，且训练推理耗时是在作者硬件与批量下的测量，换硬件不能直接对比。

### 英文 CMU-MOSEI 上的结论在什么条件下成立

英文集上的比较问题相同，但数据更大且为对齐序列，指标还多出七分类准确率。论文报告 InstMoE 的二分类准确率 87.96 与 F1 88.67 为最优，F1 比表中实际最优基线 CaReFlow 的 88.00 高 0.67 个百分点并通过显著性检验，但平均绝对误差 0.548 与相关 0.771 并不占优，七分类 55.54 为最优。参数约 3.53M，训练每轮 95s，推理每样本 1.6 ms，仍轻于多数 Transformer 基线。解释时要分开说：分类头受益于自适应组合，回归误差并未同步最优，说明路由与对齐对极性判断帮助更大，对强度拟合帮助有限。适用条件是大数据量、对齐输入、固定 BERT 与 COVAREP 加 Facet 特征，缺任一条件，结论都需要重验。

下表比较的问题是英文大集上精度与效率能否兼得，公平条件是同官方划分与同协议特征，指标方向仍按表头箭头，误差越小越好，其余越大越好。

| Model | Venue | MAE ↓ | Corr ↑ | Acc-2 ↑ | F1-Score ↑ | Acc-7 ↑ | Params (M) ↓ | Train / ep. (s) ↓ | Infer. (ms) ↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UniMSE Hu et al. (2022) | EMNLP 2022 | 0.523 | 0.773 | 87.46 | 87.50 | 54.39 | ∼\sim12.1 | ∼\sim300 | ∼\sim5.2 |
| HyCon Mai et al. (2023) | TAC 2023 | 0.590 | 0.792 | 86.50 | 86.40 | 52.80 | ∼\sim7.6 | ∼\sim200 | ∼\sim3.8 |
| DMD Li et al. (2023) | CVPR 2023 | - | - | 85.00 | 84.90 | 53.70 | ∼\sim9.8 | ∼\sim210 | ∼\sim4.0 |
| MMML Wu et al. (2024a) | NAACL 2024 | 0.517 | 0.790 | 86.49 | 86.50 | 54.95 | ∼\sim8.4 | ∼\sim230 | ∼\sim4.1 |
| EMOE Fang et al. (2025) | CVPR 2025 | 0.536 | - | 85.30 | 85.30 | 54.10 | ∼\sim10.1 | ∼\sim250 | ∼\sim4.7 |
| CaReFlow Mai and Han (2026a) | CVPR 2026 | 0.504 | 0.799 | 87.90 | 88.00 | 54.10 | ∼\sim7 | ∼\sim210 | ∼\sim4.0 |
| CmIR Mai and Han (2026b) | ACL 2026 | 0.513 | 0.793 | 87.80 | 87.70 | - | ∼\sim3 | ∼\sim80 | ∼\sim2.5 |
| InstMoE | Ours | 0.548 | 0.771 | 87.96‡\ddagger | 88.67‡\ddagger | 55.54 | 3.53 | 95 | 1.6 |

该表显示 InstMoE 在分类指标与参数效率上占优，但在回归误差与相关上并未领先，这是一个明确的未胜出项，说明不能把该方法说成所有指标通吃。限制还包括基线数据多为引用汇总而非统一复跑，硬件耗时也非同一环境严格对齐，只能看量级趋势，不能当作精确延迟承诺。

### 拿掉每个组件后性能掉多少

消融要回答每个组件是否必要，条件是中文集、同一训练流程，只改一处。论文报告拿掉混合专家改直接拼接后 F1 从 84.87 掉到 81.52，下降 3.35 个百分点，为最大降幅；拿掉对比对齐后掉到 82.05，下降 2.82 个百分点，居第二；拿掉质心初始化与辅助损失分别下降 1.74 与 1.15 个百分点。误差与相关也同步变差，说明动态融合与对齐是主要驱动，初始化与辅助监督是支撑训练稳定的策略。下面的专家输出可视化从另一角度看分工，5 个专家点云分离且重叠少，支持它们互补而非冗余，但 t-SNE 距离不代表语义距离，不能据此推断某路一定更重要。

下图为 CH-SIMS v2 测试集上 5 路专家输出的 2 维投影，读图时先看图例颜色与专家名的对应，再看每种颜色是否自成一团，团间是否有明显空隙。

> **看图路径：** 1. 看五个专家点云是否各自成团且重叠较少；2. 对比单模态专家与跨模态专家团块的位置分离；3. 注意这只是输出分布可视化，不直接等于分类精度

[![原论文 Figure 3：t-SNE visualization of all expert network outputs (CH-SIMS v2), colored by expert type.](https://arxiv.org/html/2610.05111v1/figs/tsne_experts_styled_v2.png)](https://arxiv.org/html/2610.05111v1/figs/tsne_experts_styled_v2.png)

*论文图 3。原论文 Figure 3:：“t-SNE visualization of all expert network outputs (CH-SIMS v2), colored by expert type.”。*

从像素可见，左下红色音频团、顶部黄色视频团、右上紫色文本音频团、右下绿色文本视频团、中下蓝色文本团各自集中，团间空隙明显，重叠较少。这支持专家学到了不同表示子空间，但限制是投影受随机性与参数影响，且未按情感极性着色，不能说明路由正确性。

下表比较的问题是各组件对最终精度的边际贡献，公平条件是同数据同流程单变量替换，指标方向是误差越小越好、其余越大越好。

|  | MAE↓ | Corr.↑ | Acc-2↑ | F1-Score↑ |
| --- | --- | --- | --- | --- |
| InstMoE | 0.271 | 0.751 | 85.85 | 84.87 |
| w/o MoE Module | 0.302 (↑\uparrow 0.031) | 0.721 (↓\downarrow 0.030) | 82.81 (↓\downarrow 3.04) | 81.52 (↓\downarrow 3.35) |
| w/o CA module | 0.298 (↑\uparrow 0.027) | 0.737 (↓\downarrow 0.014) | 83.94 (↓\downarrow 1.91) | 82.05 (↓\downarrow 2.82) |
| w/o Centroid Init | 0.284 (↑\uparrow 0.013) | 0.743 (↓\downarrow 0.008) | 84.35 (↓\downarrow 1.50) | 83.13 (↓\downarrow 1.74) |
| w/o Aux Loss | 0.283 (↑\uparrow 0.012) | 0.747 (↓\downarrow 0.004) | 84.82 (↓\downarrow 1.03) | 83.72 (↓\downarrow 1.15) |

该表的主要收益是确认了动态融合与对比对齐的排序，代价是消融只在中文集上报告，未在英文集上重复，且每次消融的方差与显著性未完整给出。尚未评测的范围包括只保留单一路专家、随机路由等更细的对照，缺这些对照就不能说权重一定学到了最优组合。

### 还有哪些情况没有验证

论文自述的局限有三点。第一，依赖预对齐的固定长度序列，对未对齐或变长真实场景的适用性有限，中文集虽为未对齐，但仍是处理好的特征序列，不是原始长视频流。第二，只用标准 BERT 特征以对齐基线协议，换 RoBERTa、DeBERTa 或大模型嵌入后专家分工是否还成立没有验证。第三，风格解耦是对比目标隐式学到的，没有显式指出哪些特征算风格，可解释性不足。

此外，路由退化实验中部分数值为初步占位，文本用片段掩码、音频视频用时间掩码，掩码比例 20% 到 80%，结论是权重向可靠模态转移，但这是在人工退化下的行为，不能等同于真实噪声下的鲁棒性。表示探针显示加对齐后说话人与片段来源可预测性下降而情感精度基本保持，扰动实验显示音高、语速、加噪下的一致性提高与精度跌幅减小，这些都支持对齐压制了无关变化，但探针用线性分类、扰动只改音频，范围有限，相关不等于因果。

### 复现第一步要准备什么

复现第一步是按原文协议拿到官方划分与预提取特征，而不是自己重提特征。英文集准备 BERT 文本、COVAREP 音频、Facet 视频的对齐特征，中文集准备 BERT 文本、openSMILE 音频、OpenFace 视频特征，划分分别用 16326/1871/4659 与 2400/800/802，批量 32，最大 50 轮，优化器 AdamW。接着实现 3 路轻量 Transformer 编码加注意力聚合、共享空间投影与对称对比损失、文本查询的跨模态注意力、5 路专家与拼接路由、回归分类双头与单模态辅助损失，专家偏置用训练表示均值初始化 1 次并固定。超参数先用报告值起步，再按验证集重调学习率与损失权重。

需要分开说的是本文未提供经校验可用的代码模型数据链接，本次来源核验为无可用资源，因此代码开源、权重可下载、系统可运行三件事都不能声称，只能按论文文字复写。训练资源、推理开销、输出帧率与实际延迟也要分开记录，原文的秒每轮与毫秒每样本只在作者硬件下有意义。

### 什么时候值得尝试以及还缺什么验证

当任务是文本音频视频 3 路情感预测、已有固定预提取特征、且观察到不同样本依赖不同模态时，值得尝试这种按样本加权 5 路专家的做法，它可能以较小参数改善正负判断。复现时先跑通 5 路证据与路由加权，再加对比对齐与辅助损失，最后做分组权重与退化检查。还缺的验证包括在英文集上补消融、在真实未对齐长序列上测路由、在更强语言模型特征上看分工是否稳定，以及报告多次种子的方差与显著性细节。

对初学者的提醒是容易误解的三点：权重高不等于该模态单独最准，只是当前组合更信任它；t-SNE 成团只说明输出分布分离，不证明分类一定更好；参数少且快是在原文特征与硬件下的结果，换条件要重测。总体上，证据支持在给定条件下自适应计算比固定融合更灵活，但回归拟合与跨条件泛化仍待验证，不宜夸大为通用多模态最优解。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.05111v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
