---
title: "Long-Term Memory-Guided Enhancement for Target Perception in Audio-Language Models"
date: 2026-09-30
draft: false
tags: [音频分类, 检索增强, 基准测试, 音频大模型]
categories: [论文速递]
description: "论文针对目标声被三个干扰源淹没时音频大语言模型感知崩溃的问题，提出不训练模型只在音频到语言边界上用类别长期记忆做重构加插值的方法，在二十类四声源混合上把分类准确率平均提升 29.53 至 46.15 个百分点，而语音转写需再加逐词元门控才能把词错误率从 23.07% 降到 14.77%。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.36577"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在四个声源混在一起时，用干净记忆把目标声音推回语言模型眼前"
paper_digest_original_title: "Long-Term Memory-Guided Enhancement for Target Perception in Audio-Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.36577v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.36577v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.36577v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "检索增强"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对目标声被三个干扰源淹没时音频大语言模型感知崩溃的问题，提出不训练模型只在音频到语言边界上用类别长期记忆做重构加插值的方法，在二十类四声源混合上把分类准确率平均提升 29.53 至 46.15 个百分点，而语音转写需再加逐词元门控才能把词错误率从 23.07% 降到 14.77%。"
paper_digest_authors: [{"affiliations":["Nanyang Technological University Beijing University of Posts and Telecommunications"],"name":"Zhenhong Zhou"},{"affiliations":["Nanyang Technological University Beijing University of Posts and Telecommunications"],"name":"Xuanyue Zhao"},{"affiliations":["Nanyang Technological University Beijing University of Posts and Telecommunications"],"name":"Youji Liu"},{"affiliations":["Nanyang Technological University Beijing University of Posts and Telecommunications"],"name":"Yuanhe Zhang"},{"affiliations":["Nanyang Technological University Beijing University of Posts and Telecommunications"],"name":"Xiaoyu Ma"},{"affiliations":["Nanyang Technological University Beijing University of Posts and Telecommunications"],"name":"Lianyu Hu"},{"affiliations":["Nanyang Technological University Beijing University of Posts and Telecommunications"],"name":"Yang Liu"}]
paper_digest_abstract_sha256: "966e2db2dd339c510a0724ea4f5758f2ead44878ae26a08e5bcadd12e0d48bf9"
paper_digest_sidecars: {"citation.bib":{"sha256":"2c2f70a46d1574eb0074c96fada15de68626da09a70535d9f758d8570a8d3756","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-36577/citation.bib"},"citation.json":{"sha256":"5ec645e813a9d968cadaf4d599d4271f542c2b571a7c33f68f6e5973dc67c270","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-36577/citation.json"},"citation.ris":{"sha256":"5db88a33fc55bba63c9b9ebeb56d6a5efa31c54f389c60639f54e2c0259a6562","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-36577/citation.ris"},"rethink-context.json":{"sha256":"676ac7b5aa7d7830c261e00bb82e9601bc730986118ac21fe01d22c1ef11bd8c","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-36577/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f7aa8190011ab7d14734403dabd055a8eb0a329a75eb2cd743bf12e0173a4e55"
paper_digest_api_reader_plan_sha256: "f46972d4c9eac6034c3eea9020f75562a4a840e5167526d3782edf53356d7c58"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "966baa14e8297bcdca48b2e16b787327669bb583209b0c2d29eaea0acd10faf2"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "f8537bbac064daf8b619b65fa81be730a75ab3edb007700df9e656007e513392"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "64118c81a7e570d9a4bbbd16edba7f9a49a5d5101ab7dd0842a4ad78f01a1c25"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "be090a4f0493f3b0187dd07f964692a26076c2f3ca7f6fe4be1b738cd824dbd7"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在四个声源混在一起时，用干净记忆把目标声音推回语言模型眼前

> 英文题目：*[Long-Term Memory-Guided Enhancement for Target Perception in Audio-Language Models](https://arxiv.org/abs/2609.36577v1)*

> 标签：#音频分类 | #检索增强 | #基准测试 | #音频大模型
>
> 评分：**7.4/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.9/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Zhenhong Zhou：Nanyang Technological University Beijing University of Posts and Telecommunications
- Xuanyue Zhao：Nanyang Technological University Beijing University of Posts and Telecommunications
- Youji Liu：Nanyang Technological University Beijing University of Posts and Telecommunications
- Yuanhe Zhang：Nanyang Technological University Beijing University of Posts and Telecommunications
- Xiaoyu Ma：Nanyang Technological University Beijing University of Posts and Telecommunications
- Lianyu Hu：Nanyang Technological University Beijing University of Posts and Telecommunications
- Yang Liu：Nanyang Technological University Beijing University of Posts and Telecommunications

## 📌 核心摘要

输入是目标与 3 个干扰以目标对总干扰比 \(-10\) dB 混合的三秒音频，以及用户指定的目标类别，输出是音频大模型（Audio Large Language Model，ALLM）对该目标的受限分类、自由描述或语音转写，难点是强干扰压制目标表示且非语音目标难用文本引导分离。长期记忆引导音频增强（Long-Term Memory-Guided Audio Enhancement，LTM-AE）为每类缓存干净音频在语言主干入口嵌入空间的均值向量 \(\mu_c\) 与主方向矩阵 \(U_c\)，对混合 token \(z_t\) 求其在目标子空间的投影重构 \(\hat{z}_t\)，再以插值权重 \(\alpha_c\) 融合原始与重构得到 \(z'_t\) 并送入冻结语言主干解码，语音转写分支另加逐 token 门控调节融合强度。与波形分离或去噪器不同，该方法不重建波形、不训练音频大模型本体，只在嵌入空间做类别条件投影与残差衰减。在 MultiPerception 上以 Qwen2-Audio 为例，受限分类准确率从混合基线 9.60% 提升至 47.20%，无提示检索从 8.25% 恢复至 86.75%。其边界是必须预先知道目标类别、自由描述多类仍为零，且门控转写需额外训练 80 例加 20 例选择。原文未披露训练硬件与推理时延实测。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/aynlp/ltm-audio-code> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，读完要能复述什么？

这篇解读的输入是论文正文证据与官方原图像素，目标是让刚进入语音音乐音频方向的研究生能复述方法并核对实验条件。必须保留的信息包括记忆存在哪一层表示、用什么数据构造和标定、推理时改了什么和没改什么、3 个模型 3 种读出的基线与增强数字、语音分支何时需要门控。读完应能说清一个样本从混合波形到语言输出经历了哪些可操作步骤，而不是只记住准确率涨了。

任务是选择性目标感知，也就是用户先指定一个聆听目标类别，例如钢琴、汽车喇叭或人类语音，模型要在一个目标加 3 个干扰源的混合里更准确地感知该目标。白话说，模型本来在干净音频上能推理，混进更强的背景和竞争声后就听不清目标了。论文把人类长期记忆做比方：听过很多次某类声音后，再在嘈杂里听到一点线索就能把它分离出来。

但比方之后要落到真实组件，论文的做法不是在波形上做分离，而是在音频通路与语言主干交界处的连续音频嵌入上做增强。音频词元这个术语首次出现需要解释，它指输入音频经音频编码器加投影或适配器后、送入语言模型输入空间的连续向量序列，记作每个时刻一个向量。长期记忆则指从与评测无关的干净参考录音里提炼的该类均值加主方向，推理时只用存好的均值方向和标定好的两个超参数。

相关路线要先分清，否则容易把不同条件下的数字直接比大小。一条是波形增强与文本引导分离，目标是在信号层面恢复波形；一条是给音频大语言模型加去噪或说话人恢复，干净录音定义要保留的内容；论文的不同点是处理多个更强竞争源共存、且包含大量非语音目标，并在不训练音频大语言模型参数的前提下只改送入语言主干的音频表示。输出是 3 类诊断读出加语音转写：受限分类给二十选一的字母选项，自由分类让模型写短描述再映射到类别，无提示检索不经过语言生成而比较增强后表示与干净图库的相似度，转写则看恢复当前录音里具体词的能力。

### 同输入同目标的工作与本文的分工有何不同？

按同输入、同目标、同监督和同运行阶段对照更公平。人类听觉记忆一侧，论文引用了初级听皮层长期记忆痕迹、对陌生声音的记忆、学习到的分离图式等，作用是提供动机而非直接可比基线，不应把这些发现当成方法有效性的证明。文本大语言模型记忆一侧，检索增强生成、复用历史表示、智能体经验等处理的是离散知识或对话历史，输入不是连续音频词元，运行阶段也不同，因此不能把那边的提升幅度搬来预期音频效果。

音频去噪与鲁棒性一侧，早期谱减、统计谱估计、小波收缩与后来的回归增强、对抗波形生成、扩散恢复都在波形或频谱层面操作；近期针对音频大语言模型的工作包括声学变化问答、噪声域适配、用音频处理工具推理、复杂场景事件评测、语音与环境声干扰评测、常规去噪器前处理等。论文明确把表示去噪和任务相关波形增强列为更近的对照，区别在于本文用类别长期记忆在模型自有嵌入空间里做重构加插值，且语言主干收不到单独的目标提示。

教学例子：同样是听到狗叫加语音加长笛的混合，波形分离路线输出一段更干净的波形，本文路线输出一组更偏向指定目标类别的音频词元，再让冻结的语言模型去说或去检索。例子不携带任何效果数值。

### 混合条件与评测问题是如何定义的？

问题设置里用户指定类别记作目标线索，混合记作被多个更强源遮蔽目标的输入。记音频到语言输入空间的映射为音频通路，输出是长度不变的音频词元序列。增强的目标是把这组词元变成另一组同长度同位置的词元，替换原来位置后送入语言主干，文本词元数量顺序不变，语言主干不另收目标线索。这一点很关键，复述时不能说成给语言模型加了文本提示。

为逼近真实干扰，论文合成了 MultiPerception 基准，20 个目标类别覆盖乐器、人类语音、动物叫声和环境事件，每个混合是一个目标加 3 个干扰源。构造上先把每个干扰源的均方根幅度与目标对齐，再把干扰总和缩放到目标与合计干扰之比为负 10 分贝。注意原文写法是目标与合计干扰比为负 10 分贝，不是每个干扰各负 10 分贝。钢琴和狗目标固定用语音长笛管风琴做干扰，语音目标用狗长笛管风琴，其余类别轮换。每类有互不重叠来源的记忆、验证和评测各 100 段干净片段，验证和评测各 2000 个混合，同一套评测音频给 3 个模型用。3 个模型是 Qwen2-Audio、Kimi-Audio 和 Step-Audio-2-mini，记忆分别建在各自输入嵌入空间里，不能跨模型共用。

### 方法全景：一个样本走完需要哪三段？

沿一个样本走一遍最清楚。离线阶段，对每个类别取若干段干净参考，经同一音频通路得到词元，不做时间池化也不逐词元归一化，全部堆成参考矩阵。算均值并做主成分类分解，存下均值向量与按解释方差排序的方向矩阵，这就是该类长期记忆。再用配对的混合与干净目标词元在验证集上选保留秩与插值权重。在线阶段，对输入混合同样提取词元，用用户指定的类别选出记忆与超参数，每个词元算自己在保留方向上的系数并映射回嵌入空间，再与原词元插值，保持词元数与时间位置不变。最后把增强序列放回语言模型输入的音频位置解码。

下图是论文给出的总览，左中右三栏分别对应离线记忆与标定、在线增强、读出与评测加语音门控分支，读懂它就能复述主路径。

> **看图路径：** 1. 先从左栏看离线记忆与标定：干净参考如何变成均值加方向，配对验证如何选秩和权重；2. 再看中栏在线路径：混合词元经目标线索选记忆，重构加插值后位置不变地送入冻结语言主干；3. 最后看右栏读出与语音分支：三种诊断协议都不另给目标提示，门控分支对每个词元单独给权重

[![原论文 Figure 1：Overview of LTM-AE. Clean audio hidden states form category long-term memory, while paired…](https://arxiv.org/html/2609.36577v1/overview.png)](https://arxiv.org/html/2609.36577v1/overview.png)

*论文图 1。原论文 Figure 1:：“Overview of LTM-AE. Clean audio hidden states form category long-term memory, while paired validation recordings calibrate the retained rank and interpolation weight.”。*

该图显示左栏从干净参考经冻结音频通路得到词元序列，再形成每个主干每个类别一份的均值加方向记忆，并用验证集上混合与干净词元对做网格选择。中栏显示评测混合为目标加 3 个非目标干扰，目标线索只选记忆与参数，增强后词元数与位置不变再注入冻结语言主干。右栏显示 3 种诊断协议都不另给目标提示，报告宏平均首一准确率，下方语音分支对每个词元学一个门控权重。需要强调冻结含义：音频大语言模型全部参数不动，离线只算记忆与选超参数，语音分支额外学的只是门控网络。

### 记忆存什么，增强算什么？

记忆构造的输入是干净参考词元矩阵，输出是均值向量与正交方向矩阵。均值描述该类平均表示，方向描述围绕均值的 dominant 变化。对保留秩，方向取使中心化干净词元重构误差最小的前若干列，可用随机化主成分分析或全奇异值分解实现，论文默认用随机化求解并以全分解做交叉核对。参考片段数决定估计记忆用了多少干净片段，部署后占用只与嵌入维度和保留秩有关，与片段数无关。

**长期记忆 × 音频词元：** 长期记忆负责存住某类干净声音在嵌入空间里的平均位置和主要变化方向，音频词元负责携带当前混合录音每一时刻的具体内容；两者搭配的理由是记忆提供类别先验而词元提供当前位置证据，组合后每个词元用自己算出的系数在记忆子空间里重构，再与原词元插值，既向目标类别靠拢又保留当前细节。

增强计算的输入是当前混合的单个词元与选定记忆，输出是插值后词元。具体是先减均值、投影到保留方向得到系数，再映射回空间得到重构，最后按权重在原词元与重构之间插值。权重为零退回原词元，为一完全用重构。所有词元共享同一记忆，但系数逐词元独立，因此同一记忆在不同位置产生不同修正。

\[\begin{gathered}a_{t}=U_{c,k}^{\top}(z_{t}-\mu_{c}),\qquad\widehat{z}_{t}=\mu_{c}+U_{c,k}a_{t},\\ z^{\prime}_{t}=z_{t}+\alpha_{c}(\widehat{z}_{t}-z_{t}),\end{gathered}\]

上式中符号含义是逐词元先中心化再投影重构再插值，计算目标是让增强词元向该类干净结构靠拢，同时用权重控制靠拢强度。把重构代入插值可改写成保留分量权重为一、正交残差权重为一减插值权重的形式，这解释了方法的作用是保留记忆能表示的分量、衰减其余分量，但也可能丢掉记忆表示不了的目标细节。

\[z^{\prime}_{t}=\mu_{c}+P_{c}(z_{t}-\mu_{c})+(1-\alpha_{c})(I-P_{c})(z_{t}-\mu_{c}).\]

**保留秩 × 插值权重：** 保留秩决定记忆里留下几个主方向从而决定保留哪部分变化，插值权重决定重构结果与原始词元混合的比例从而决定压掉多少正交残差；两者必须联合标定的原因是秩选大了会留住干扰、权重给大了会丢掉目标细节，论文用配对验证集上的干净目标重构误差同时选二者。

该分解还可写成相对干净目标词元的误差形式，最后一项记录干净目标落在保留子空间之外的分量，验证目标评估的是包含该项的完整误差，因此秩与权重必须一起选。

### 没有训练模型时，哪些量被优化、梯度走哪里？

本研究的主体分类与检索部分没有训练阶段，这是需要明确说的无训练含义：3 个音频大语言模型的参数全程固定，记忆的方向矩阵也不用梯度更新。真实计算是两类非梯度过程，一是用矩阵分解从干净词元估计均值与方向，二是在有限候选网格上按验证集重构误差选保留秩与插值权重。选择准则是在对齐的混合与干净目标词元对上算增强输出与干净目标的均方误差，对词元与嵌入维度平均，每个类别每种参考数单独选 1 次，选好后与记忆一起存盘，推理时只查表使用。

\[(k_{c},\alpha_{c})=\underset{(k,\alpha)\in\mathcal{G}}{\operatorname{argmin}}\;\frac{1}{|\mathcal{V}_{c}|d}\sum_{(z,z^{\mathrm{clean}})\in\mathcal{V}_{c}}\left\|H_{c,k,\alpha}(z)-z^{\mathrm{clean}}\right\|_{2}^{2},\]

上式中输入是对齐的混合词元与干净目标词元，计算目标是在候选集合里找误差最小的秩权重组合，实现是网格评估而非反向传播，因此不存在经语言主干的梯度路径。语音转写分支是例外，它额外训练一个词元级门控网络，记忆与大模型参数仍固定，只有门控参数更新，训练细节与损失放在消融节讲。本节对应缺项是论文未报告网格候选的具体取值范围与搜索耗时，未测量该部分不能承诺延迟或成本改善。

### 数据划分、基线条件与指标方向是什么？

数据来自多来源组合，乐器有人声之外的多种集合，语音用 LibriSpeech，动物与环境事件用各自专用集加通用集，附录列出每类来源。预处理统一为 3 秒单通道 16 千赫兹，去重并按来源分组划分，保证记忆验证评测不重叠。记忆用记忆分区中每类 20 或 50 或 100 段，验证与评测各用对应目标的干净片段配 2000 个混合，检索图库另有每类 100 段干净片段并排除重叠窗。混合信噪比固定为负 10 分贝，干净条件用同一混合对应的目标录音，增强条件操作在同一混合上。

比较条件分 5 种：干净目标、原始混合、3 种记忆量的增强。主文聚合比较固定用每类 20 段记忆的增强，附录再给 50 与 100 的结果。读出上受限分类用固定 20 个字母选项并映射回类别，自由分类让模型写短描述再用固定关键词规则映射，恰好命中一类才算对，无命中或多命中不算对。检索是把查询词元序列时间平均归一化，与图库每段同样平均归一化后的向量算余弦，每类取最大的 5 个相似度平均，得分最高类为预测。

指标方向是分类与检索准确率越高越好，词错误率越低越好。准确率先在每类 100 条内算正确比例再跨 20 类宏平均，增益指增强减原始混合的百分点差，不是相对百分比。语音实验用 Qwen2-Audio 英语混合，记忆用 500 段干净语音并固定秩与权重，100 个开发混合按种子分为 80 训练 20 选择，再在 100 个未见测试混合上评 1 次。

### 主结果：增强改变了表示，也改变了语言输出吗？

要回答的核心比较问题是，在同一套混合、同一通用提示、不给语言端目标线索的公平条件下，类别条件增强是否同时改善表示对齐与语言输出，指标方向为准确率高者好。下表是 3 模型乘 3 种读出的宏平均准确率，包含干净、原始混合与每类 20 段记忆增强三列，是判断主收益的必要基线与可运行策略对照。

| Model | Readout | Clean | Mixed | LTM-AE |
| --- | --- | --- | --- | --- |
| Qwen2-Audio | C | 66.90 | 9.60 | 47.20 |
|  | F | 32.05 | 4.80 | 26.25 |
|  | R | 87.90 | 8.25 | 86.75 |
| Kimi-Audio | C | 58.20 | 8.30 | 59.70 |
|  | F | 38.45 | 4.90 | 45.80 |
|  | R | 80.40 | 11.25 | 75.60 |
| Step-Audio-2-mini | C | 72.50 | 10.25 | 42.05 |
|  | F | 57.30 | 7.15 | 42.45 |
|  | R | 88.95 | 10.45 | 78.50 |

表后解释需要同时说收益与代价。语言输出上 Qwen2-Audio 受限分类从 9.60% 到 47.20%，自由分类从 4.80% 到 26.25%；Kimi-Audio 从 8.30% 到 59.70% 以及从 4.90% 到 45.80%；Step-Audio-2-mini 从 10.25% 到 42.05% 以及从 7.15% 到 42.45%。表示层检索提升更大，Qwen2-Audio 从 8.25% 到 86.75% 接近其干净的 87.90%，另 2 模型也从 11.25% 到 75.60% 和从 10.45% 到 78.50%。

代价是增强后分类仍明显低于干净，说明干扰未被完全消除。未胜出项是部分类别自由分类无改善，例如蛙叫检索大涨但开放描述仍说不出，表明表示对齐不等于能说对。

**受限分类 × 无提示检索：** 受限分类负责检验语言主干解码后是否说出指定目标类别，无提示检索负责检验增强后音频表示在解码前是否更接近该类干净样例；两者搭配的理由是前者看端到端可说性后者看表示对齐，组合意义是区分增强只改善了嵌入还是真正传到了语言输出。

下图把上表三列画成柱状，更直观显示检索几乎追平干净而分类仍有缺口，读图时先确认每组三根柱子的条件再比较高度。

> **看图路径：** 1. 对比三组柱子：每组内浅灰原始混合、深绿增强、更浅干净目标的高度关系；2. 先看检索面板增强柱几乎追平干净柱，再看分类两面板增强与干净仍有差距

[![原论文 Figure 2：Diagnostic readouts under acoustic interference.](https://arxiv.org/html/2609.36577v1/fig_final20_n20.svg)](https://arxiv.org/html/2609.36577v1/fig_final20_n20.svg)

*论文图 2。原论文 Figure 2:：“Diagnostic readouts under acoustic interference.”。*

该图分受限、自由、检索三面板，每面板内按模型分组，每组三根柱子为原始混合、增强与干净目标，纵轴为宏平均准确率。可见检索面板增强柱与干净柱高度接近，分类两面板增强柱明显高于原始混合但低于干净。像素不能精确读出的数值以表格为准。

跨模型增益幅度见下表，语言平均增益为两分类协议的平均，检索增益单独列出，单位均为百分点。

| Readout | Qwen2- Audio | Kimi- Audio | Step-Audio- 2-mini |
| --- | --- | --- | --- |
| Constrained classification | +37.60 | +51.40 | +31.80 |
| Free-form classification | +21.45 | +40.90 | +35.30 |
| Mean language- output gain | +29.53 | +46.15 | +33.55 |
| Prompt-free retrieval | +78.50 | +64.35 | +68.05 |

表后补充，Kimi 语言平均增益 46.15 个百分点最大，Qwen 为 29.53 个百分点，Step 为 33.55 个百分点；检索增益 Qwen 最大 78.50 个百分点，说明同一增强在不同接口的转化效率不同。类别热图进一步显示检索每类每模型全为正，而分类存在零与负格。

> **看图路径：** 1. 按行看类别：检索三列几乎全为正增益，分类两列出现零和负值格；2. 按列看模型差异：同一类别在三个模型同一协议下的增益数字并不相同

[![原论文 Figure 3：MultiPerception class-wise accuracy gains.](https://arxiv.org/html/2609.36577v1/fig_final20_classwise_gain.png)](https://arxiv.org/html/2609.36577v1/fig_final20_classwise_gain.png)

*论文图 3。原论文 Figure 3:：“MultiPerception class-wise accuracy gains.”。*

该图像素为 3 模型乘三协议的九列、二十行的增益矩阵，每格是该类最优记忆量减原始混合的百分点，最右列为均值。可见检索三列绿色占主导，分类两列出现浅色零值与个别红褐负值，例如 Qwen 婴儿哭受限为负、门拍自由为负，复述时必须提这些反例，不能只说平均涨。

### 语音内容恢复为何必须逐词元调权重？

语音分支要测的是类别只指定语音、具体词未知时能否恢复内容，这是与类别响应不同的任务。固定全局插值的无门控增强在匹配测试集上反而把词错误率从 23.07% 抬到 33.75%，说明同一权重作用于全部词元会抹掉细节。于是引入逐词元标量门控，输入是原词元与记忆修正量的拼接，经层归一化、两层线性加激活、Sigmoid 输出每位置一个权重，作用是把已含全局权重的修正量再按位置缩放，零保留原嵌入、一恢复无门控增强。

\[z_{t}^{\mathrm{gate}}=z_{t}+g_{t}\delta_{t}=z_{t}+g_{t}\alpha_{c}(\widehat{z}_{t}-z_{t}).\]

上式符号中门控值逐位置独立但网络跨位置共享，计算目标是让需要去干扰的位置多用修正、需要保词细节的位置少用修正，词元数与顺序不变。训练时记忆与大模型固定，只有门控参数更新，损失为词元重构均方误差加转写交叉熵的加权和，转写损失用教师强制并排除提示与填充位置，梯度穿过语言主干回传到门控。

\[\mathcal{L}(\phi)=\lambda_{\mathrm{tok}}\operatorname{MSE}(Z^{\mathrm{gate}},Z^{\mathrm{clean}})+\lambda_{\mathrm{text}}\mathcal{L}_{\mathrm{CE}}(y\mid Z^{\mathrm{gate}}),\]

**类别长期记忆 × 词元级门控：** 类别长期记忆负责给出全序列共享的语音类别结构，词元级门控负责在每个时间位置决定用多少记忆修正量；搭配的原因是转写要恢复的是类别未指定的具体词内容而非类别名，全局插值会抹掉细节，门控让需要保留原声的位置少修正、需要去干扰的位置多修正。

门控权重的选择过程是固定转写权重为 1，对词元重构权重在 0.0 到 1.0 每 0.1 扫 1 次，每配置在 80 例上训 4 轮、学习率千分之一，在 20 例选择集上算词错误率，0.1 与 0.8 同达最低 20.57% 时按预定取小规则选 0.1，再在 100 个开发混合上重训并在 100 个未见测试混合上评 1 次。下表是该分支的测试对照，含必要基线与实际可运行的门控策略。

| 条件 | 词错误率 | 与原始混合差值百分点 | 参考词总数 | 选择集词数 |
| --- | --- | --- | --- | --- |
| 原始混合 | 23.07% | 0.00 | 880 | 175 |
| 无门控增强 | 33.75% | +10.68 | 880 | 175 |
| 选中门控 | 14.77% | -8.30 | 880 | 175 |

表后解释，选中门控在 880 个参考词上共 130 错，含 63 替换 48 删除 19 插入，比原始混合少 8.30 个百分点，而无门控多 10.68 个百分点，支持逐位置控制才能把记忆引导用于内容恢复的判断。代价是该结论只在 Qwen2-Audio 英语 3 秒混合上验证，未在另 2 模型复测。权重扫描细节见下表与下图。

| 候选权重 | 选择集词错误率 | 与最优差距百分点 | 训练例数 | 选择例数 |
| --- | --- | --- | --- | --- |
| 0.1 | 20.57% | +0.00 | 80 | 20 |
| 0.8 | 20.57% | +0.00 | 80 | 20 |

上表只列出有逐字证据的代表性权重，完整 0.0 到 1.0 步进 0.1 的扫描以原图为准，避免为凑宽度编造无源格。下图是验证选择的像素证据，读图先确认横轴为重构权重、纵轴为验证词错误率。

> **看图路径：** 1. 看横轴权重从 0.0 到 1.0 每格的验证词错误率数字；2. 看第二行与最优的差距：0.1 与 0.8 同为 0.00，按取小规则选 0.1

[![原论文 Figure 4：Validation-based selection of the token-level gate.](https://arxiv.org/html/2609.36577v1/fig_lambda_sweep.png)](https://arxiv.org/html/2609.36577v1/fig_lambda_sweep.png)

*论文图 4。原论文 Figure 4:：“Validation-based selection of the token-level gate. WER on the 20-example selection split for \lambda_tok\in\0.0,0.1,\ldots,1.0\.”。*

该图显示每格顶行是验证词错误率、底行是与最优的百分点差距，0.1 格标为选中、0.8 格标为并列最优，0.9 格颜色偏红对应 22.29% 最高。像素数字与正文 20.57% 最低一致，支持取小规则选 0.1 的复述。

### 哪些类别没变好，哪些边界没有测？

限制要分 3 层说。已报告的负结果包括部分类别自由分类零增益与个别负增益，例如热图像素显示 Qwen 婴儿哭受限负 11、门拍自由负 6、乌鸦自由负 4，Kimi 中音萨克斯受限负 3，Step 长笛受限负 3，说明平均趋势不等于每类都成立。表示与语言脱节也是限制，蛙叫 3 模型检索增益 95 以上但自由分类几乎无改善，表明嵌入更接近目标类不保证能说出类别名。目标缺席时的误触发检查只做了 Qwen 加钢琴记忆在 100 条无钢琴录音上的自由描述，原始与增强均为零提及，该结果支持未诱发幻听的判断，但可能待验证的是仅测了 1 个类别一个模型，不能推广到全部 20 类。

未评测边界包括混合恒为负 10 分贝、每混合固定三干扰，未测其他信噪比与干扰数；语音只测英语 3 秒 LibriSpeech 混合与 Qwen 单模型，未测其他语言与模型；未测量误判率分解、延迟、算力与输出帧率，因此不能承诺这些量得到改善。相关性不是因果，检索与分类同涨支持增强有用，但不能证明语言改善完全来自检索对齐。论文还报告随机化主成分与全奇异值分解在 Qwen 检索上 60 组类别记忆量配置选出相同参数且逐类准确率相同，支持两种求解实现同一目标，但这只是实现交叉核对而非性能消融。

### 复现先做什么，需要哪些代码与数据？

复现顺序建议按学习依赖来。先按模型取音频到语言边界的表示，Qwen2-Audio 用音频编码器经多模态投影后的输出，Kimi-Audio 用离散语义词元嵌入与连续 Whisper 特征经适配器融合后的嵌入，Step-Audio-2-mini 用音频适配器输出，同一模型内参考与混合走同一映射。接着每类堆干净词元算均值并分解得方向矩阵，默认随机化方法求 128 个方向再验证选前缀，全量分解只用于核对。随后在配对验证上网格选保留秩与插值权重，目标是最小化增强与干净目标的均方误差，存下记忆与参数。推理时按指定类别查表，对每词元算系数重构插值，保持位置不变送入冻结语言主干，文本提示保持通用且不透露目标。

资源状态是正文开源声明的唯一依据，当前代码链接本次可达并已公开，可用于核对实现与评测脚本，但权重下载与系统可运行需按仓库实际说明另行确认。数据需自行按附录来源准备 20 类干净片段并合成负 10 分贝混合，注意来源分组不重叠与检索图库排除重叠窗。语音门控分支需按种子划分 80 训练 20 选择，先扫重构权重再全量重训 1 次评测，避免用测试集选权重。关键超参数保留原文：语音记忆 500 段、秩 8、权重 0.7，门控隐宽 256、训练 4 轮、学习率千分之一、转写权重 1、选中重构权重 0.1。记录每类 100 条的正确比例再宏平均，增益报百分点差，词错误率按替换加删除加插入除以参考词数。

### 何时值得尝试这种记忆引导，还需补哪项验证？

当任务是用户能事先指定目标类别、干扰来自多个更强声源、且允许改音频表示而不动大模型参数时，这种方法值得尝试，尤其非语音目标与检索对齐要求高的场景。复现后若要在自己数据上用，先做小规模验证选秩与权重，再看检索与分类是否同向变化，若出现检索涨分类不涨，应检查语言端命名规则与提示是否限制了类别表达。当目标是恢复具体词或事件细节而非只答类别时，应直接考虑逐词元门控而非全局插值，因为无门控在语音上报告了变差。

还需补的验证包括多信噪比与可变干扰数、更多语言与模型上的转写、目标缺席多类别的误触发率、以及推理开销与存储的实测。常见误解是把不训练等同于确定性求解，实际上冻结参数只说明参数不变，解码采样与实现仍可能带来波动；把记忆比作人脑长期记忆时，也要对应到均值加方向的真实计算，不能把比方当性质证明。总体上论文报告显示记忆引导把先验听觉经验变成了可复用的嵌入修正，并在多模型多类别上得到支持，但每类每协议是否成立需回到表格与热图逐格核对。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.36577v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-30/)
