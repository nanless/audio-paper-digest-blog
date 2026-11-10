---
title: "FUSEMOS: Perceptual Evaluation of Text-to-Music Generation with Dual-Encoder Fusion and Ranking-Aware Composite Loss"
date: 2026-11-09
draft: false
tags: [音频质量评估, 多模态学习, 音乐, 对比学习]
categories: [论文速递]
description: "针对文本生成音乐需要同时评价整体音乐印象和文本对齐的问题，FUSEMOS 用 CLAP 加 MERT 双编码器做分数级融合，并用截断回归加对比排序的组合损失训练，在 MusicEval 上同时改善了误差和排序一致性，但结论只在该基准划分与指标下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.07562"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用两个听觉视角预测音乐好坏与图文匹配：FUSEMOS 解读"
paper_digest_original_title: "FUSEMOS: Perceptual Evaluation of Text-to-Music Generation with Dual-Encoder Fusion and Ranking-Aware Composite Loss"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.07562v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.07562v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.07562v1.pdf"
paper_digest_primary_task: "音频质量评估"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-quality","label":"音频质量评估"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"method","id":"method.contrastive","label":"对比学习"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对文本生成音乐需要同时评价整体音乐印象和文本对齐的问题，FUSEMOS 用 CLAP 加 MERT 双编码器做分数级融合，并用截断回归加对比排序的组合损失训练，在 MusicEval 上同时改善了误差和排序一致性，但结论只在该基准划分与指标下成立。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jing Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haoyu Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ningning Pan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhao Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianxuan Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gongping Huang"}]
paper_digest_abstract_sha256: "53fc6637fe91c0665c21c4803573be4d15467ecc8ffd41c15e5eb4f41b451d2d"
paper_digest_sidecars: {"citation.bib":{"sha256":"8fb0588e2d1914b7caa16c9a60201549dfb9d86e9a1d1e3b2a40399e3eb5adbd","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07562/citation.bib"},"citation.json":{"sha256":"19184db3cac82f7f155cf72dd60111e2056bf0d6dbe4476df3dd79dc285b41ba","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07562/citation.json"},"citation.ris":{"sha256":"5af07515c3ac4a245ecd5418d5c8da82498a54e6b9554bc6f1eec55eec7dfd24","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07562/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"338c9923ec20ad84416767e376f9fe853ac46d43e2684cb5a5aab05fb1d19bd9","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07562/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "4b28658c46d78db9f02434740f749e32a573abb51e325066f44fe2c71d68c811"
paper_digest_api_reader_plan_sha256: "06ffc752a5af490429cd31570ec23061629d61b4501f48e0570f2767beb2e8f2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d438d44423e783e0ccc15eddbea6dfaddc340f142d5d728910f64086bb4692c3"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "d7ad79ee43a899a6da7955992ee536479d197dcebeeee1c725fbc1f8479b1b77"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d6991a10b18556b98994abeb5f2ae853551ff8d855899de806983b5d6c8d7928"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "f1122db5424220a98044f26422e49327e751c5553cf168c3afd4034744a97f05"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 用两个听觉视角预测音乐好坏与图文匹配：FUSEMOS 解读

> 英文题目：*[FUSEMOS: Perceptual Evaluation of Text-to-Music Generation with Dual-Encoder Fusion and Ranking-Aware Composite Loss](https://arxiv.org/abs/2611.07562v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频质量评估](/audio-paper-digest-blog/papers/?concept=task.audio-quality)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[对比学习](/audio-paper-digest-blog/papers/?concept=method.contrastive)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jing Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Haoyu Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Ningning Pan：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhao Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianxuan Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Gongping Huang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

文本到音乐生成需同时保证语义贴合与音乐质量，人工平均意见分被视为金标准但采集成本高，而Fréchet音频距离等客观指标与听感相关性较弱。已有MusicEval基线只用对比语言音频预训练模型抽取音频与文本特征，再用多层感知机回归整体音乐印象与文本对齐分数，难以刻画音色节奏和声等细节，且回归损失只约束绝对误差而忽略样本间相对优劣。FUSEMOS先用对比语言音频预训练模型分支提取生成音乐与文本提示的语义对齐嵌入并输出中间分数，再用大规模音乐数据自监督模型分支提取该段音乐的结构表示并输出另一组中间分数，最后把两路中间分数送入轻量线性头做分数级融合，并用截断回归加对比排序的复合损失同时约束绝对误差与排序一致性。在MusicEval基准官方训练验证测试划分上，与MusicEval基线相比，FUSEMOS把整体音乐印象的语句级均方误差从0.560降到0.260，把系统级均方误差从0.217降到0.027。在MusicEval基准官方训练验证测试划分上，与MusicEval基线相比，FUSEMOS把文本对齐的语句级Spearman相关系数从0.495提高到0.644，把系统级Spearman相关系数从0.861提高到0.940。结论目前只在MusicEval的2748条片段与31个生成模型范围内验证，未验证跨数据集与跨标注群体稳定性。训练成本披露为单张NVIDIA H800显卡，训练批量大小为4、验证为2，推理与部署开销原文未披露。

## 🔗 开源与复现资源

- 第三方资源：<https://www.aishelltech.com/AISHELL_7A> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/lukewys/laion_clap/blob/main/music_audioset_epoch_15_esc_90.14.pt> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/m-a-p/MERT-v1-95M> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文本生成音乐要评价什么

文本生成音乐的输入是一段文字提示，输出是一段生成的音乐波形。评价时要回答两个不同问题。第一个是音乐本身质量如何，论文称为整体音乐印象，包括旋律、节奏、表现力与连贯性。第二个是音乐与文字是否对应，论文称为文本对齐。

人工平均意见分被视为金标准，也就是请人听后打分再平均。但人工听音费时费力且难以复现，不适合快速迭代。另一类客观指标如 Fréchet audio distance 和 inception score 计算方便可复现，但原文指出它们与人类偏好常常相关较弱。

因此论文要做的是一种可扩展的自动感知评价：输入生成音乐加对应文本，输出两个预测分数，分别逼近人工的整体音乐印象分和文本对齐分。理解后文的关键是，这两个分数对象不同，所需信息也不同，一个偏向音频内部质量，一个必须联合文字和音频判断。

### 已有路线为什么只用 CLAP 不够

MusicEval 基准首次为文本生成音乐提供了专家标注的整体音乐印象和文本对齐分数，使系统性评价成为可能。该基准自带的方法只用对比语言音频预训练模型提取联合的文本和音频特征：音频嵌入接多层感知机预测整体音乐印象，音频文本拼接特征用于文本对齐回归。

论文认为这条单编码器路线有缺口。CLAP 通过对比学习把语义相近的音频和文本拉到共享嵌入空间，擅长跨模态语义匹配，但它主要为跨模态对齐优化，不一定能充分表示音色、节奏、和声与结构连贯性等音乐内部属性。

举例来说，同样是描述为轻快的钢琴曲，两段生成结果可能文字关键词都命中，但一段节奏松散、音色干瘪，另一段律动稳定、音色自然。只看语义相似度容易给两者相近的文本对齐分，也难以区分整体音乐印象的差距。这就是论文引入第二个音乐专用编码器的动机。

### 论文要解决的两个具体困难

第一个困难是表示互补。需要同时保留高层语义对齐能力和细粒度音乐结构刻画能力。论文选择 CLAP 负责前者，选择在大规模音乐数据上自监督预训练的 MERT 负责后者，MERT 被描述为能捕捉音色、节奏与和声进行等结构。

第二个困难是训练目标与人类判断的性质不匹配。常用均方误差只看绝对分差，容易忽略人类评价中固有的相对偏好，也就是多段音乐之间谁更好。论文因此要设计一个既管绝对误差稳定，又管样本对排序一致的目标函数。

论文的输入输出很明确：输入为生成音乐信号加对应文本描述，输出为预测的整体音乐印象分和文本对齐分。方法分工是双编码器分别给出中间估计，再融合；损失分工是回归部分保准确，排序部分保顺序。

### FUSEMOS 让一个样本走完哪些步骤

沿一个样本看完整过程。左侧同时进入两路：一路是音乐波形进入 MERT 编码器和 CLAP 音频编码器，另一路是文字提示进入 CLAP 文本编码器。MERT 输出随时间变化的隐藏状态，CLAP 输出两个已做归一化的嵌入向量，分别代表文字和音乐在共享语义空间中的位置。

中间是两条独立的打分路径。CLAP 分支直接用余弦相似度给出文本对齐的粗估计，用音频嵌入接多层感知机给出整体音乐印象的粗估计；MERT 分支先做注意力池化得到定长音乐表示，再分别接多层感知机给出另一组整体音乐印象和文本对齐中间分。最后的晚期融合把同任务的两个中间分拼起来，经线性头得到最终分数。

下图是论文的总体结构，右侧还画出每个最终分数各自的组合损失，说明训练时 2 个任务分别计算排序损失和回归损失再加权求和。

读这张结构图时，先区分虚线框内可训练与冻结的部分，再盯住中间分数到最终分数的汇合点，这样能看清分支在哪里独立、在哪里合并。

> **看图路径：** 1. 先从左侧音乐波形和文字提示出发，沿箭头找到 MERT 和 CLAP 两条分支；2. 再看中间四路中间分数如何进入晚期融合得到最终两个分数；3. 最后看右侧每个最终分数各连一组排序损失和回归损失的组合

[![原论文 Figure 1：The architecture of the proposed FUSEMOS framework for TTM perceptual evaluation.](https://arxiv.org/html/2611.07562v1/new.png)](https://arxiv.org/html/2611.07562v1/new.png)

*论文图 1。原论文 Figure 1:：“The architecture of the proposed FUSEMOS framework for TTM perceptual evaluation.”。*

从图中可见，MERT 编码器参数被冻结，CLAP 提供文字嵌入给 MERT 分支做拼接，4 个中间分数分别进入整体音乐印象和文本对齐的融合块，最终输出两个分数后各自接入对比排序与截断回归的组合。这张图帮助理解后文为什么说融合发生在分数层，而不是特征层。

### CLAP 分支如何给出两个粗估计

CLAP 分支处理的对象是 CLAP 文本嵌入和 CLAP 音乐嵌入，记为文本向量与音乐向量，维度为 D1。两者处于共同语义空间，可直接点积比较，这是对比学习带来的性质。

对文本对齐，论文不训练复杂映射，而是直接计算两个嵌入的余弦相似度作为粗估计。做法符合 CLAP 的设计本意：既然训练时就是把匹配的音频文本拉近，那么测试时直接用相似度衡量对齐程度，比再学一个变换更直接。消融实验也验证了这一点，把余弦相似度换成可学习多层感知机会明显变差。

对整体音乐印象，语义相似度不够用，因为它反映的是一般音乐质量而非文本内容。论文把音乐嵌入送入专用的多层感知机得到粗估计。

\[\hat{y}_{\text{CLAP}}^{\text{TA}}=\frac{\mathbf{E}_{\text{CLAP}}^{\text{Text}}\cdot\mathbf{E}_{\text{CLAP}}^{\text{Music}}}{\left\|\mathbf{E}_{\text{CLAP}}^{\text{Text}}\right\|\left\|\mathbf{E}_{\text{CLAP}}^{\text{Music}}\right\|}.\]

\[\hat{y}_{\text{CLAP}}^{\text{OMI}}=\text{MLP}^{\text{OMI}}_{\text{CLAP}}\left(\mathbf{E}_{\text{CLAP}}^{\text{Music}}\right).\]

上面两式分别对应文本对齐的余弦计算和整体音乐印象的多层感知机映射。第一个式子分子是点积，分母是模长乘积，结果是标量相似度；第二个式子输入是音乐嵌入向量，输出是标量分数。它们都是后文融合的输入之一。

**整体音乐印象 × 文本对齐：** 整体音乐印象指生成音乐本身好不好听，包括旋律、节奏和表现力等总体质量；文本对齐指音乐内容与输入文字描述的符合程度。两者分工不同，前者主要看音频内部质量，后者必须同时看文字和音频是否对应，所以论文用两套预测路径分别输出这两个分数，组合起来才算对文本生成音乐系统的完整评价。

### MERT 分支如何把长时音乐压成一个表示

MERT 分支处理的对象是 MERT 最后一层隐藏状态，形状为 1 乘时间步数 T 乘特征维 D2。它是随时间变化的序列，不能直接用于打分，需要聚合成定长向量。

论文用可学习查询向量的多头注意力池化来做聚合。查询向量是可学习参数，键和值都是原始隐藏状态，注意力机制让模型动态关注感知上重要的音乐片段，再加权平均成最终音乐表示。这种做法比简单平均更灵活，例如自动更重视高潮或转折处，而不是静音或重复段。

得到 MERT 音乐表示后，整体音乐印象同样用专用多层感知机直接映射。而文本对齐不能用余弦，因为 MERT 与 CLAP 文本编码器独立训练，不共享表示空间。论文把 MERT 音乐表示与 CLAP 文本嵌入拼接成联合特征，先做层归一化，再送入多层感知机得到文本对齐的中间估计。

\[\mathbf{E}_{\text{MERT}}=\text{MultiheadAttn}(\mathbf{q},\mathbf{E}_{0},\mathbf{E}_{0}),\]

\[\mathbf{E}_{\text{MC}}=(\mathbf{E}_{\text{MERT}}\oplus\mathbf{E}_{\text{CLAP}}^{\text{Text}})\in\mathbb{R}^{(D_{1}+D_{2})},\]

前者说明注意力池化如何从序列得到定长向量，其中查询向量、可学习查询与原始序列的角色不同；后者说明联合特征是两个向量拼接而成，维度为 2 者之和。拼接后的向量用于文本对齐分支，而单独的 MERT 向量用于整体音乐印象分支。

**CLAP × MERT：** CLAP 是在大规模音频文本对上做对比学习得到的双编码器模型，音频和文字被映射到可直接比较的共享语义空间，擅长判断语义是否对齐；MERT 是在大规模音乐音频上自监督预训练的音频表示模型，擅长刻画音色、节奏、和声进行等细粒度音乐结构。两者搭配的理由是语义对齐和音乐细节互补，组合后既能看懂文字要求，又能听出音乐内部的质感。

### 为什么在分数层融合而不是特征层拼接

融合位置是本文的关键设计。论文采用晚期融合，也就是每个分支先独立给出中间分数，再把同任务的两个标量拼起来经轻量线性头得到最终分。整体音乐印象融合 CLAP 路径和 MERT 路径的两个分数，文本对齐同样融合两个对应分数，融合头自适应加权各自贡献。

这样做的好处是保留各自完整性。CLAP 路径偏向语义，MERT 路径偏向音乐结构，如果在特征层直接拼接不同分布的向量，容易互相干扰各自的归纳偏置。分数层融合让每条路径独立建模自己擅长的感知方面，最后只在标量层面集成。

论文还比较了两种早期或特征层融合作为对照。一是直接拼接，把 MERT 与 CLAP 音乐嵌入拼接后送多层感知机预测，文本对齐再额外拼文本嵌入；二是可学习注意力融合两种音乐嵌入后再用类似 MERT 的头预测。结果都弱于晚期融合，支持了独立路径到分数层再合并的选择。

**晚期融合 × 早期拼接：** 早期拼接指把 CLAP 和 MERT 的特征向量先拼在一起再送入同一个回归网络；晚期融合指让两个分支各自先给出中间分数，再在分数层面用轻量线性头加权合并。论文选择晚期融合是为了保留各自的归纳偏置，避免异构表示互相干扰，组合后每个分支仍独立建模自己擅长的感知方面，最后只在分数上集成。

### 组合损失如何同时管准度和顺序

训练目标需要同时回答分值准不准和顺序排得对不对。论文把对比排序损失与截断回归损失加权求和，总损失为两项分别乘系数后相加，系数在验证集上调优，论文报告取 0.5 和 1.0。

截断回归损失处理绝对误差，但与平均绝对误差不同，它设阈值忽略小误差。指示函数只在预测与真实差的绝对值超过阈值时才计入该样本的绝对误差，目的是防止对噪声标签或精确分值过拟合。论文取阈值为 0.3。

对比排序损失处理样本对。先算真实分差与预测分差的绝对偏差，再减去容忍裕度，论文取 0.2。若偏差小于裕度则不惩罚，否则计入损失，最后在批量内对所有有序对平均。这种设计避免对微小误差过度惩罚，同时约束预测的相对差距与真实相对差距一致，增强判别能力。

\[\displaystyle\mathcal{L}_{\text{sum}}=\beta\cdot\mathcal{L}_{\text{con}}+\gamma\cdot\mathcal{L}_{\text{trun}},\]

该式即总损失的加权求和形式，其中两项分别对应排序约束和回归稳定。训练时整体音乐印象和文本对齐各自计算这样一组组合损失。优化器用随机梯度下降，学习率 5 乘 10 的负 4 次方，动量 0.9，所有多层感知机均为三层全连接加 LeakyReLU。

**截断回归损失 × 对比排序损失：** 截断回归损失只惩罚绝对误差超过阈值的样本，作用是稳定绝对分值预测并减少对噪声标注的过拟合；对比排序损失约束样本对的预测分差与真实分差一致，作用是保持相对好坏顺序。两者搭配是因为人对音乐的判断既有绝对打分也有相对偏好，组合后模型同时学准分值和排对顺序。

### 在什么数据和条件下验证

实验在 MusicEval 上进行，论文描述为首个针对文本生成音乐自动评价的专家标注数据集，同时含整体音乐印象和文本对齐的人工分。原文给出 2748 段音乐，由 31 种不同模型在 384 种文字提示下生成，采用官方训练验证测试划分以保证可比，作者还复现了基线并在本地系统上评测。

模型设置上，CLAP 用音乐专用检查点初始化后微调，以增强跨模态语义对齐；MERT 模型冻结，以保留预训练的音乐结构表示。训练在一块 NVIDIA H800 上进行，训练批量 4，验证批量 2。超参数中截断阈值与排序裕度凭经验选择，加权系数经验证集优化。

评价分话语级与系统级两类。话语级对每条音频文本对单独算，系统级把同一生成模型的全部样本聚合后再算。指标包括均方误差和线性相关、Spearman 秩相关、Kendall tau 等秩相关指标，均方误差越小越好，相关系数越大越好。

**话语级指标 × 系统级指标：** 话语级指标是对每一条音频文本对单独计算预测与人工分的误差和相关；系统级指标是把同一生成模型的全部样本聚合后再比较，反映模型之间的整体排序。两者分工是前者看单曲预测精度，后者看跨系统 benchmarking 能力，论文同时报告这两类才能说明方法既准又能排对生成系统。

### 主结果在误差和排序上改善了多少

要回答的核心比较问题是，在相同 MusicEval 划分下，双编码器晚期融合加组合损失是否同时优于只用 CLAP 的基准。公平条件是官方划分一致，基线经复现后在本地评测，指标方向明确为误差越低越好、相关越高越好。

下表整理原文结果句中直接报告的关键数字，聚焦整体音乐印象的误差降幅与排序相关，以及文本对齐的排序相关提升。

| 评价对象 | 指标 | 本方法 |
| --- | --- | --- |
| 整体音乐印象 | 话语级均方误差降幅 | 话语级 Spearman 相关 0.811 |
| 整体音乐印象 | 系统级均方误差降幅 | 系统级 Spearman 相关 0.977 |
| 文本对齐 | 话语级 Spearman 相关 | 0.644 |
| 文本对齐 | 系统级 Spearman 相关 | 0.940 |

上表显示，整体音乐印象的话语级与系统级误差大幅下降，同时排序相关达到较高水平；文本对齐的话语级与系统级排序相关均高于基线。这支持论文的判断，即双编码器框架在音乐质量与语义保真两方面都更贴近人类判断。

但限制也要讲清。这些是该基准与该划分下的结果，不能直接推广到其他音乐类型、其他提示分布或真实用户场景。系统级聚合会放大模型间差距，单看系统级高相关不能代替话语级精度，论文同时报告两类正好避免只看一面。

### 拿掉每个设计会发生什么

消融要回答每个组件是否必要。比较的问题包括是否需要双编码器、是否必须晚期融合、组合损失两项是否缺一不可、CLAP 分支的余弦机制是否必要。为公平，部分消融统一用 L1 损失训练后再与组合损失版本比较。

双编码器方面，只用 MERT 的变体在整体音乐印象和文本对齐上都明显下降，而只用 CLAP 的基线与只用 MERT 结果相近，说明两者提供互补特征，缺一都会损失。晚期融合方面，直接拼接与注意力特征融合都弱于分数层融合，说明保留独立路径更利于集成异构表示。余弦机制方面，把 CLAP 文本对齐的直接相似度换成可学习多层感知机后各项指标明显退化，说明直接利用共享空间的相似度更有效。

下表整理原文对损失两项单独使用时的报告，比较问题是只留一项会付出什么代价。

| 损失配置 | 整体音乐印象系统级 Spearman 相关 | 文本对齐系统级 Spearman 相关 | 均方误差变化 |
| --- | --- | --- | --- |
| 只用截断回归 | 0.867 | 0.888 | 保持稳定准确 |
| 只用对比排序 | 0.963 | 0.938 | 均方误差升至 7.887 和 12.50 |

上表说明，只用截断回归能保准确但排序相关回落，只用对比排序能保排序但误差大幅上升。两者结合才能在回归准确与排序一致间取得平衡，这正是组合损失的设计依据。未胜出的例子也很清楚：任何单编码器、特征层融合或单项损失都不是全面最优，实际选用时不能只看排序相关而忽略误差代价。

### 这些结论在什么边界内才成立

首先是数据边界。MusicEval 规模为两千多段、三十余模型与数百提示，覆盖的是该基准的生成系统与提示分布。换成更长的曲式、更多乐器或更开放的文字描述时，CLAP 与 MERT 的互补程度可能变化，晚期融合的权重也可能需要重调。

其次是指标边界。论文用均方误差与 3 类相关系数评价，没有报告误判率、延迟或推理成本。排序相关高不等于绝对分可直接用于阈值决策，误差低也不等于能解释为什么某段音乐更好听。自动指标仍是对人工评价的逼近，不能替代听音。

还有实现边界。MERT 冻结而 CLAP 微调，这意味着音乐结构表示固定、语义对齐可调。若反过来冻结 CLAP 或联合微调两者，结果可能不同，原文没有给出该对照。此外超参数在验证集上选择，换数据集时阈值与加权系数可能不再最优，需要重新验证。

### 想复现第一步要准备什么

复现的第一步是按官方划分拿到 MusicEval 数据与人工分，并准备两个预训练起点：音乐专用的 CLAP 检查点与 MERT 检查点。论文给出的第三方链接在本次核验中可达，但这只证明论文提到该链接，不证明作者已开源本项目代码，代码开源、权重可下载与系统可运行是三件不同的事，要分开确认。

第二步是按原文设置模型与训练。MERT 冻结只做特征提取加注意力池化，CLAP 做微调，所有多层感知机为三层全连接加 LeakyReLU，优化器与批量大小按原文设置，损失阈值与权重先用原文值起步，再在验证集上复调。

还需补的验证包括跨划分稳定性、不同随机种子的波动，以及在新生成模型上的泛化。若要用于实际选型，建议同时看话语级误差与系统级排序，并保留人工抽检，因为自动分只能作为筛选信号。

### 什么时候值得尝试 FUSEMOS

当任务同时需要评价音乐本身质量与图文匹配，且已有 CLAP 单编码器基线但发现它听不出音色与结构差距时，值得尝试这种双编码器思路。MERT 提供音乐细节，CLAP 提供语义对齐，晚期融合让两者分工明确，组合损失同时约束分值与顺序。

复现时抓住三处关键：MERT 序列必须经注意力池化成定长表示后才打分；MERT 与文本不能算余弦，只能拼接后走回归；融合必须在分数层，用线性头合并同任务的两个中间分。损失方面先保证截断回归稳定，再用对比排序校准相对顺序。

最终结论应限定为，在 MusicEval 官方划分与所用指标下，FUSEMOS 在整体音乐印象与文本对齐的误差和排序相关上优于所复现的单编码器基线，且消融支持双编码器、晚期融合、组合损失与余弦机制各自的贡献。超出该条件的效果仍待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.07562v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
