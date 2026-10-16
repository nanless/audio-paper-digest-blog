---
title: "Shared Sentiment Evidence from Frozen Multimodal Models for Continuous Sentiment Prediction"
date: 2026-10-16
draft: false
tags: [多模态情感极性分析, 多模态学习, 音视频, 语音]
categories: [论文速递]
description: "论文用文本音频视频四个视角下五个情感选项的分布加熵与分布差异组成 28 维向量训练 CatBoost 回归器，在 CH-SIMS-v2 和 MOSI 上优于只学联合视角分布的对照，代价是每个片段需四次冻结模型查询。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.19981"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "冻结多模态大模型输出如何做连续情感预测"
paper_digest_original_title: "Shared Sentiment Evidence from Frozen Multimodal Models for Continuous Sentiment Prediction"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.19981v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.19981v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.19981v1.pdf"
paper_digest_primary_task: "多模态情感极性分析"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文用文本音频视频四个视角下五个情感选项的分布加熵与分布差异组成 28 维向量训练 CatBoost 回归器，在 CH-SIMS-v2 和 MOSI 上优于只学联合视角分布的对照，代价是每个片段需四次冻结模型查询。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shuobo Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ruiqi Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shaobo Qiao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shixu Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Feng Xu"}]
paper_digest_abstract_sha256: "20305c51a11433feea2d27060755589dcc46d4debb4f28de46c873ca3efdec1f"
paper_digest_sidecars: {"citation.bib":{"sha256":"3b16c6b6edff1e02f4bd8a8307c3aafc56648f7630c5734b157de78c90c42712","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19981/citation.bib"},"citation.json":{"sha256":"f33cc14adbbaae490e62f455b8a9e3df1bea041b81aa5c37e9ad1acf05dcfde6","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19981/citation.json"},"citation.ris":{"sha256":"477dfc1bb7179e5e4669d9e3ae87b12a6a05870882d58953e16da5c05fbabba9","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19981/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"995a9e16ee0abde040bc0dc1be50d0facf21499d997178d93ff82b7f4786d2db","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19981/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ef6d14b99bb5d02a02d24ac7f68f8b04e4f96ac0ad6e1245637b96154e082812"
paper_digest_api_reader_plan_sha256: "2360a574ff34b62b1cd86d3eb8e7ab7e1b9fb8a9032c1b936fcc11ab5dd94358"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "adcba3c43d20141778397e8a419bccae5e8f845860c6a3b51e3659b0fd131541"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "6ae26f4f79ffe25262ba49a5a8e64584aa6ce1f2e91193df48c08e94712eb1e8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a42e1f43cdef71245218447cdc33585870c05209141222c6a6eddc3441220067"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "60226f574d36f0fc4f9ea6d0d338c7c8242451e47fc259958b47686d8a86e490"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 冻结多模态大模型输出如何做连续情感预测

> 英文题目：*[Shared Sentiment Evidence from Frozen Multimodal Models for Continuous Sentiment Prediction](https://arxiv.org/abs/2610.19981v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-paper-digest-blog/papers/?concept=task.multimodal-sentiment)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)；[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Shuobo Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Ruiqi Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Shaobo Qiao：机构信息未能在本次解析中与作者逐人可靠绑定
- Shixu Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Feng Xu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

连续多模态情感分析把同一片段的文本、音频和视频线索映射为表示极性和强度的实数值，难点是各线索可能指向不同情感，且证据强度与标注尺度的对应关系需要学习。方法先对同一冻结骨干分别送入文本、音频、视频和联合输入并提问，在强烈负面到强烈正面的5个固定选项上取候选分数并归一化，得到4组5选项分布，为每个片段提供20个概率。再把这20个概率作为输入，计算每组分布的熵以刻画集中程度，并计算单模态视图两两之间以及联合分布与单模态均值之间的Jensen-Shannon散度以刻画跨视图分歧，连同原概率拼接成28维向量。然后把该28维向量直接送入CatBoost回归器，由训练标注学习从分布形态到数据集连续尺度的映射，每个骨干与数据集组合分别拟合读出头，骨干权重保持冻结。在CMU-MOSI测试集上，Qwen2.5-Omni-7B的共享情感证据取得平均绝对误差0.5660，低于同缓存下仅用联合分布的CatBoost结果0.5910。在CH-SIMS-v2上平均绝对误差对应数值是0.2483对0.2794，成对自举区间不包含零。缓存建成后，12组超参数搜索在25线程CPU上约用5.86秒和5.05秒，额外骨干的固定读出拟合约用2.7秒到3.0秒，但每个片段需要4次视图查询，一次性多模态推理仍是主要成本。该结论依赖坐标定义固定且每个骨干与数据集单独拟合读出头，尚未验证缺失模态、跨数据集校准和自适应采集下的表现，视图缺失或来源分布变化时效果可能下降。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 连续情感预测要从哪些信号估计什么

这篇论文研究的任务是连续多模态情感分析。输入是一个短视频片段，包含说话人的文字转写、声音和画面三部分，目标是输出一个实数，表示情感的极性和强度。例如中文数据集 CH-SIMS-v2 的标注范围是负 1 到正 1，英文数据集 CMU-MOSI 的标注范围是负 3 到正 3，负表示消极，正表示积极，绝对值越大强度越大。难点在于 3 个模态可能给出不同暗示，比如文字中性但语气不满，或者表情积极但用词消极，重要性也随片段变化。

模型既要把这些证据合起来，又要学会证据强度与标注尺度的对应关系。评价用平均绝对误差 MAE，越小越好，以及皮尔逊相关系数 Corr，越大越好，还会把连续预测按阈值转成二分类、三分类等多分类准确率做参考。读者需要记住，分类准确率都是从同一组连续预测派生出来的，不是另外训练的分类器。

### 已有路线在表示层融合还是在输出层利用大模型

论文把已有工作分成两类。第一类是任务专用融合，在表示或融合通路里放监督，例如 TFN 建模跨模态交互，MulT 用方向性注意力处理未对齐流，MISA 分离共享与模态特有表示，Self-MM 用自动生成的辅助监督学单模态特征，还有语言引导、情感知识、置信度注意力、混合专家和围绕冻结语言模型训练稀疏适配分支的 MEERA。这些方法即使冻结骨干，仍需学习一个接到内部表示的接口。

第二类是利用多模态大模型，MSE-Adapter 和 SentiLLM 学习接到语言模型表示的接口，提示引导的师生学习和上下文示例走另一条路，但后者多做图文情感分类，而本文目标是音视频连续情感。还有对比式零样本分类 MSACC，以及 QLoRA 微调后读隐藏状态的路线。论文选择的是输出侧路线，即不碰隐藏状态也不更新多模态骨干，只学习候选输出分数到连续值的映射，相关参照是多提示的隐藏状态与校准类别分数解码策略 MPD。

理解这个划分很重要，后面所有对照都在同一输出证据下比较，不涉及改内部表示。

### 硬判决和固定期望为什么会丢失信息

论文指出的问题很具体。冻结大模型对每个视角可以给出 5 个情感选项的支持度，例如强烈消极、消极、中性、积极、强烈积极。如果只取概率最大的选项做硬判决，两个都选积极的片段可能在相邻强度上的支持完全不同，这种差异就被丢掉了。如果用固定权重把 5 个概率加权平均成一个分数，例如把选项映射为负 1、负 0.5、0、0.5、1 再求期望，等于在学习之前就压缩了分布形状，回归器没有机会学习分布形状与标注尺度的真实关系。

如果只学习联合视角的 5 个概率，分布形状保留了，但单模态视角各自支持什么极性就看不到了。因此论文希望保留 4 个视角的完整分布，再加上描述集中度和视角间关系的确定性汇总，让回归器同时看到备选项、分歧和综合判断。例子：文字视角偏积极而音频视角偏消极时，联合视角可能中性，只有保留分视角才能让回归器学到这种分歧对应什么标注值。

### 四个视角查询到 28 维向量再到回归的全流程

整体流程分三步。第一步是对同一个片段做四次查询，分别只给文本、只给音频、只给视频，以及三者一起给联合输入，四次都用同一套冻结权重和同一套 5 个有序情感选项，提示要求用数字 0 到 4 回答说话人表达的情感强度。每个视角取出回答位置上 5 个候选数字的下一个词元对数几率或对数概率，做 softmax 归一化得到概率分布，4 个视角共 20 个概率。第二步是计算每个分布的熵和两两之间的 JS 散度等共 8 个汇总量，与 20 个概率拼成 28 维共享情感证据向量。

第三步是用 CatBoost 回归器从这个向量拟合训练标注，CH-SIMS-v2 直接拟合负 1 到 1，MOSI 除以 3 后拟合、预测再乘以 3 还原。每个骨干与数据集组合单独拟合一个头，但向量定义和选好的 CatBoost 超参数跨骨干复用。缓存分布后，拟合与消融不再重复跑大模型。
读图说明：下图是论文图 1，分 4 个编号面板展示输入查询、共享证据、连续读出和跨骨干复用，适合对照上面的三步流程看各模块的输入输出。

> **看图路径：** 1. 先从左上一个视频片段的四条输入箭头看四个视角查询如何进入同一个冻结模型；2. 再看中间四个视角各五个方块的相对高度表示选项支持度；3. 对照右侧 CatBoost 头与下方三个备用骨干共用同一中间接口的箭头；4. 注意图下方标注方块高度只是示意不是真实概率

[![原论文 Figure 1：Shared Sentiment Evidence for continuous readout across frozen multimodal backbones.](https://arxiv.org/html/2610.19981v1/framework_cross_backbone.svg)](https://arxiv.org/html/2610.19981v1/framework_cross_backbone.svg)

*论文图 1。原论文 Figure 1:：“Shared Sentiment Evidence for continuous readout across frozen multimodal backbones.”。*

图中有四部分。左上是一个片段的文本、音频、视频和联合 4 条输入进入 Qwen2.5-Omni-7B，标注完全冻结且四视角共享权重。中间是 4 个视角各 5 个方块表示选项支持度，右侧列出 4 个熵和 4 个跨视角 JS，底部标出 28 维等于 20 概率加 4 熵加 4JS。右上是 CatBoost 回归器输出连续分数，并区分两个数据集不同的后处理。下方是 Gemma、Phi、Nemotron 3 个备用冻结骨干同样做四视角查询，走同一接口定义但各自拟合单独的头。

方块高度按图注只是示意，不能读出具体数值。
为得到每个视角的分布，论文对候选分数做归一化，符号含义是视角 v 下选项 k 的候选分数，输出是该视角 5 个选项的概率。

\[p_{v,k}(x)=\frac{\exp\ell_{v,k}(x)}{\sum_{j=0}^{4}\exp\ell_{v,j}(x)},\quad k=0,\ldots,4.\]

该式说明所有 5 个分数都要取，不做 top-k 截断，每个视角概率和为 1，概率表示选项相对支持，不是经验校准的置信度。

### 四个视角的五个选项概率是什么输入和代价

4 个视角的集合记为文本、音频、视频、联合。联合查询保留集成判断，单模态查询保留各自判断。实现上用 Qwen 的 Thinker 和各骨干自带的媒体处理器，Qwen 跑在 bfloat16，音频用 16 kHz 单声道，视频按每秒 1 帧、上限 200704 像素，MOSI 用分组缩放点积注意力批量处理独立视觉序列但保持序列内注意力，权重、提示、帧率和分辨率不变。每个未缓存片段需要四次视角查询，而只用联合视角的基线只需一次，这是多视角的直接代价。好处是缓存一次后可反复用于读出选择与消融。5 个选项固定为强烈消极到强烈积极，数字 0 到 4，跨骨干保持同样的选项语义，这是后面跨骨干复用的前提。

**文本视角 × 音频视角：** 文本视角指只给 transcript 让冻结模型对五个情感选项打分，音频视角指只给音频信号做同样打分，二者分工是保留单模态证据，搭配后可暴露文本与声音判断不一致的情况，组合起来让回归器看到模态分歧而不仅是融合后的结论。

概率向量保留了备选项信息，例如同样获胜选项为积极时，对强烈积极的支持高低仍体现在向量里，回归器有机会学到它与强度的关系，这是硬判决做不到的。

### 熵与 JS 汇总如何拼成 28 维向量

在 20 个概率之外，论文加入 8 个确定性汇总。熵描述单个分布的集中程度，JS 散度描述两个分布的差异。具体关系特征是文本与音频、文本与视频、音频与视频 3 对差异，再加联合分布与 3 个单模态平均分布的差异，共四项。3 个单模态的平均分布是 3 个概率向量直接平均。自然对数下熵在 0 到 log5 之间，JS 在 0 到 log2 之间，定义跨骨干固定。

这些汇总不引入新的骨干证据，只是概率的非线性函数，但改变了学习器访问信息的方式。对线性模型它们提供非线性基函数，对有限深度树模型它们允许直接按集中度和分歧切分。最终向量把 4 个分布、4 个熵、四项 JS 按顺序拼接成 28 维。

\[z=\phi(x)=\big[p_{T};p_{A};p_{V};p_{J};\{H(p_{v})\}_{v\in\mathcal{V}};d\big]\in\mathbb{R}^{28}.\]

该式给出向量构造，符号 z 是 28 维共享情感证据，pT 等是各视角 5 维分布，H 是熵，d 是 4 维关系项。

**视频视角 × 联合视角：** 视频视角指只给视频画面做五个选项打分，联合视角指同时给音频视频文本做打分，前者保留视觉证据，后者保留模型综合判断，二者搭配可比较综合判断与单模态平均是否偏离，组合后既有分视角证据又有集成参考。

**熵 H(p) × JS 散度：** 熵 H(p) 指对一个视角的五个概率求负加权对数和，用来描述该分布是集中还是分散，JS 散度指两个分布到其中点的 KL 距离平均，用来描述两个视角分歧大小，二者都是概率的确定性函数，搭配后给回归器直接可用的集中度和分歧度坐标。

理解代价时要分清，汇总计算是 CPU 上的确定性公式，开销可忽略，真正的额外开销是前面多三次大模型查询。

### 固定期望基线把分布压缩成什么

为说明固定压缩的问题，论文设了一个无训练的联合视角期望基线。它把联合视角 5 个概率按固定系数加权求和，系数是选项减 2 再除以 2，即负 1、负 0.5、0、0.5、1，CH 乘 1，MOSI 乘 3 以对应量程。这个基线不学习，直接把分布压成一个数。对比实验显示学习 5 个联合概率的 CatBoost 已明显优于它，说明即使同一组概率，学习到的尺度映射也比固定映射好。而本文的 28 维接口进一步允许学习器利用单模态分布和分歧信息。

\[\hat{y}_{\mathrm{direct}}=s\sum_{k=0}^{4}c_{k}p_{J,k},\quad c_{k}=\frac{k-2}{2},\]

该式中 s 是量程系数，c 是固定有序系数，pJ 是联合视角分布。它的作用是作为最弱的对照，帮助区分提升来自学习映射还是来自更丰富的接口。

### 哪些参数冻结哪些参数实际学习

本研究没有训练或微调任何多模态骨干，骨干和模态适配器全程冻结，也不读取隐藏状态。实际学习的参数只有读出头。主读出是 CatBoost 回归器，目标是均方根误差 RMSE。Qwen 的读出族和超参数按验证集 MAE 选择，搜索 12 种组合，深度 4、6、8，学习率 0.03、0.1，L2 叶子正则 3、10，树数 500。Qwen 的 SSE 选出深度 6、学习率 0.03、正则 3，联合 5 维基线在同样流程下选出深度 4。

对照用的 Ridge 回归先标准化训练特征，再从 0.01 到 1000 中按验证 MAE 选正则系数。对照使用同样的缓存、划分、目标和评价，选型在各自学习器族内进行。CH 预测裁剪到负 1 到 1，MOSI 用连续无裁剪预测，数据集特定的后处理在对照间共享。跨骨干时复用 Qwen 选好的深度 6 配置，不再重调，以隔离接口的作用。每个骨干与数据集对在各自训练划分上单独拟合。

**冻结骨干 × CatBoost 回归器：** 冻结骨干指 Qwen2.5-Omni-7B 等多模态大模型参数不更新只做查询打分，CatBoost 回归器指在 28 维向量上学习到标注尺度映射的梯度提升树模型，前者提供可复用的输出坐标，后者承担任务适配，搭配后把大模型推理与秒级 CPU 训练分开。

初学者容易误以为冻结等于确定性求解，这里冻结只表示不更新权重，模型输出仍依赖采样、模板和媒体处理，论文做的是缓存输出后做监督回归，不是解析求解。

### 数据划分指标与外部比较条件是什么

CH-SIMS-v2 用 2722 训练、647 验证、1034 测试，MOSI 用 1284、229、686。MAE 和 Corr 用各自原始标注尺度，准确率和 F1 是百分比。CH 报告二分类、三分类、五分类准确率，MOSI 的七分类把裁剪后预测和标签四舍五入，二分类分含零与去零两种。评测沿用给定划分，CH 的源视频跨划分出现，MOSI 源不重叠。外部比较中星号表示作者按所述适配跑了公开代码，剑号表示引用已发表结果，例如 KuDA 保留其路由，MSE-Adapter 用官方特征存档，SentiLLM 保留结构并在官方验证集上按 CH 五分类准确率和 MOSI 的 MAE 选检查点，测试编号只留作最终评价。

统计比较用按源视频分组的 5000 次自助法，给出配对 MAE 差异的 95% 区间，整组重采样估计片段加权差异，刻画给定已拟合头下的测试样本不确定性。下游成本单独计时，Qwen 输出缓存后 12 组 CatBoost 搜索在 25 线程 CPU 上 CH 用 5.86 秒、MOSI 用 5.05 秒，每个新增骨干固定读出拟合评价约 2.7 到 3.0 秒，Nemotron 全缓存阶段用 23.2 分钟、峰值 31.2GiB 显存。

### 主结果在两个数据集上达到什么精度

主结果回答连续预测精度。Qwen 加 SSE 加 CatBoost 在 CH 达到 MAE 0.248 左右、Corr 0.816 左右，在 MOSI 达到 MAE 0.566 左右、Corr 0.887 左右。论文称在 CH 低于复现的外部基线，但已发表的 CICA 为 0.245 仍略低，在 MOSI 优于所列系统包括复现的 SentiLLM。MOSI 的二分类与七分类指标也随连续预测改善，CH 不同指标排名不完全一致，KuDA 在五分类准确率领先。理解结论的条件很关键，这是 Qwen 骨干、验证选型固定后在测试集上的一次结果，且 CH 存在源视频跨划分，MOSI 源不重叠，两者的泛化含义不同。

下表整理联合分布基线与 SSE 在同一 CatBoost 族和验证选择流程下的对比，说明更丰富接口相对已学习的联合映射的增益，指标方向是 MAE 越小越好。

| 数据集 | 指标 | 联合分布基线 | SSE 本方法 | 比较条件 |
| --- | --- | --- | --- | --- |
| CH-SIMS-v2 | MAE | 0.2794 | 0.2483 | 同 CatBoost 族验证选择 |
| CMU-MOSI | MAE | 0.5910 | 0.5660 | 同 CatBoost 族验证选择 |
| CH-SIMS-v2 | Corr | 0.762 | 0.816 | 同上测试集 |
| CMU-MOSI | Corr | 0.877 | 0.887 | 同上测试集 |

从联合 5 维到 28 维，CH 的 MAE 下降约 0.031，MOSI 下降约 0.025，配对源视频区间排除零，支持接口更丰富带来提升。但这是在 Qwen 缓存和固定选择流程下的结果，不能推广到所有骨干或所有超参数。

代价是每片段四次查询，且 Corr 提升幅度小于 MAE 下降幅度，分类派生指标也非全线领先，说明连续误差与分类准确率不完全同向。未胜出项是 CH 上 CICA 的 0.245 仍低于本方法，CH 五分类上 KuDA 领先，这些限制了最优结论的范围。

### 同一接口换三个冻结骨干是否仍优于联合基线

跨骨干问题回答接口复用性。Gemma-4、Phi-4、Nemotron-3 复用同样的选项语义、接口定义和 Qwen 选好的深度 6 配置，各自拟合单独的头。结果是 4 个骨干在两个数据集上 SSE 的 MAE 点估计都低于直接固定期望和已学习的联合 5 维基线。例如 Phi 在相同深度 6 下 CH 从 0.3301 到 0.3069，MOSI 从 0.7780 到 0.6825，Gemma 和 Nemotron 在两数据集也改善。相对联合基线，Qwen 的 MAE 降低 11.1% 和 4.2%，其余 6 组降低 1.5% 到 12.3%。

但配对区间只有 Phi 在两数据集和 Nemotron 在 CH 排除零，其余 3 组包含零，而 6 组 Corr 点估计都提升。因此证据强度不均，最强的是 Phi 两数据集和 Nemotron 在 CH。另一个细节是直接分数最低的不一定是读出后最好的，Nemotron 直接 MAE 在 MOSI 最低，Qwen 读出后在两数据集最低，说明直接分数不能完全刻画分布对监督预测的价值。
下表用原文连续句支持的 Phi 与 Qwen 相对改善整理跨骨干复用的幅度，MAE 越小越好，比较都在固定深度 6 与单独拟合头条件下。

| 对象 | 数据集 | 联合基线 MAE | SSE MAE | 相对改善说明 |
| --- | --- | --- | --- | --- |
| Phi-4 | CH-SIMS-v2 | 0.3301 | 0.3069 | 配对区间排除零 |
| Phi-4 | CMU-MOSI | 0.7780 | 0.6825 | 配对区间排除零 |
| Qwen2.5 | CH-SIMS-v2 | 0.2794 | 0.2483 | 降低 11.1% |
| Qwen2.5 | CMU-MOSI | 0.5910 | 0.5660 | 降低 4.2% |

点估计都偏向 SSE，但统计上只有部分区间排除零，其余 3 组包含零意味着在当前测试样本量下不能确认差异非零。限制是未重调超参数，固定配置可能对某些骨干不利，且每个新增骨干需 26408 个视角查询的两数据集缓存，Nemotron 全缓存 23.2 分钟，这是复用的真实成本。直接期望与联合基线都保留在比较中，避免只与最弱基线比。

### 多视角概率汇总与非线性映射各自贡献多少

消融在同一 Qwen 缓存内变化表示与学习器，回答增益来源。先看常规特征对照，数据集自带音视频文本特征加 Ridge 在 CH 为 0.3097、MOSI 为 0.9993，而联合概率加 Ridge 为 0.3064 和 0.6203，说明紧凑联合输出在线性下已有竞争力，尤其在 MOSI。再看从联合到四视角，Ridge 下 CH 从 0.3064 到 0.2828、MOSI 从 0.6203 到 0.5932，CatBoost 下从 0.2794 到 0.2613、从 0.5910 到 0.5681，两种学习器一致改善，支持多视角概率是主要共享增益。再加熵与 JS，Ridge 到 0.2693 和 0.5921，CatBoost 到 0.2483 和 0.5660，MAE 和 Corr 在两学习器下都逐步改善，但汇总的额外改善在 CH 更明显，提示汇总参数化的用处有数据集依赖性。最后把 Ridge 换成 CatBoost，SSE 下 CH 从 0.2693 到 0.2483、MOSI 从 0.5921 到 0.5660，支持保留分布并学习尺度映射。

**联合分布基线 × 四视角概率：** 联合分布基线指只用联合视角五个概率训练的回归器，四视角概率指文本音频视频联合共 20 个概率，前者检验只学综合判断能到什么精度，后者检验加入单模态证据是否有增益，对比后能区分多视角证据与汇总特征各自的贡献。

下表整理 Ridge 与 CatBoost 下从联合到四视角的步骤，MAE 越小越好，同缓存同划分。

| 学习器 | 数据集 | 联合概率 MAE | 四视角概率 MAE | 步骤含义 |
| --- | --- | --- | --- | --- |
| Ridge | CH-SIMS-v2 | 0.3064 | 0.2828 | 增加视角证据 |
| Ridge | CMU-MOSI | 0.6203 | 0.5932 | 增加视角证据 |
| CatBoost | CH-SIMS-v2 | 0.2794 | 0.2613 | 同上非线性读出 |
| CatBoost | CMU-MOSI | 0.5910 | 0.5681 | 同上非线性读出 |

两行 Ridge 与两行 CatBoost 都显示四视角优于联合，说明增益不依赖特定非线性。但从四视角到 SSE 的增益小于从联合到四视角，且在 MOSI 更小，因此不能说汇总是主要因素。限制是这些消融只在 Qwen 缓存上验证，换骨干后各步骤幅度可能变化，且未报告缺失模态或跨数据集校准，汇总在缺失视角下是否稳定尚未评测。

### 结论在什么条件下成立还有哪些未验证

论文的结论有明确边界。主结果依赖 Qwen2.5-Omni-7B 的媒体处理、提示模板和验证选型，换模板或帧率可能改变分布。跨骨干复用固定了选项顺序、特征与读出设置并单独拟合头，证据是点估计全优但只有 3 组配对区间排除零，其余不能确认。数据集方面 CH 源视频跨划分出现，MOSI 源不重叠，两者的误差含义不同，不能直接比较数值大小。方法上熵与 JS 只是概率的确定性函数，没有新增证据，其增益在 CH 更大，说明对数据集敏感。

未验证范围包括缺失模态、跨数据集校准、自适应视角采集的查询与标注成本，论文在结论中列为未来工作。也没有测量误判率、延迟或实际部署成本随精度的权衡，不能承诺更快或更便宜。把相关当因果要谨慎，例如分歧大对应标注更极端只是统计关联，需进一步分析。

### 复现第一步做什么需要哪些信息条件

复现应从缓存 4 个视角的 5 个候选分数开始，而不是先调 CatBoost。需要按论文实现冻结骨干推理：Qwen2.5-Omni-7B 用 bfloat16，16 kHz 单声道音频，每秒 1 帧、上限 200704 像素，用各骨干自带媒体处理器和聊天模板，在回答位置取出 0 到 4 5 个数字的对数几率或对数概率并做 softmax，不做 top-k 截断。4 个视角用同一权重，联合为一次真实联合查询。得到 20 个概率后按自然对数算熵与 JS，拼成 28 维，CH 标签在负 1 到 1 直接拟合，MOSI 除以 3 拟合、预测乘以 3 还原，CH 预测裁剪、MOSI 不裁剪。

CatBoost 按深度、学习率、L2 的 12 组在验证 MAE 选型，Qwen 的 SSE 选出深度 6、0.03、3 可作起点，但新骨干仍需在各自训练划分单独拟合。关键超参数和信息条件是 5 个有序选项、4 个视角定义、熵与 JS 公式、RMSE 目标、500 棵树。公开资源方面，现有证据无法确认作者是否已公开代码模型数据链接，复现需自己实现查询与缓存，成本上每片段四次查询，Nemotron 全缓存曾用 23.2 分钟与 31.2GiB 显存作参考。

### 什么时候值得尝试以及还需补哪项验证

当你已有冻结多模态大模型且不能或不想动其权重，又需要连续情感分数而非硬分类时，这个输出空间接口值得尝试。它把任务适配压缩到 28 维向量上的秒级 CPU 回归，缓存后可反复做选择与分析，跨骨干只需换分数重拟合头。复现第一步是先跑通四视角五选项的分数提取与 softmax，确认每个视角和为 1 再谈回归。还需要补的验证是缺失模态下的鲁棒性、跨数据集的校准误差，以及固定超参数在新骨干上是否次优，这些直接决定能否部署。

总的来看，论文支持的判断是保留多视角分布形状并学习其尺度映射优于只学联合分布，汇总特征提供额外但数据集相关的改善，非线性读出进一步降低误差，而最强统计证据集中在 Phi 与部分 Nemotron 对比上，其他跨骨干差异仍待更大样本确认。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.19981v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
