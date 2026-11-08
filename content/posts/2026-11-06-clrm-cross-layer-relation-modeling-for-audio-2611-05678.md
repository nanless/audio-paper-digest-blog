---
title: "CLRM: Cross-Layer Relation Modeling for Audio Deepfake Detection"
date: 2026-11-06
draft: false
tags: [音频深度伪造检测, 模型融合, 语音, 自监督学习]
categories: [论文速递]
description: "CLRM 针对同一话语在 XLS-R 不同层表示判别力不同却缺少显式比较的问题，复用冻结检测器的编码器构造 L8-L21 层间关系表示并与原分数融合，在五个外部数据集上把三类检测器的平均等错误率相对降低 7.8%-16.7%，代价是新增三个小型关系头与融合参数的源域训练。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.05678"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "跨层比较如何为语音伪造检测提供新证据：CLRM 解读"
paper_digest_original_title: "CLRM: Cross-Layer Relation Modeling for Audio Deepfake Detection"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.05678v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.05678v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.05678v1.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.model-combination","label":"模型融合"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"}]
paper_digest_primary_method: "模型融合"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "CLRM 针对同一话语在 XLS-R 不同层表示判别力不同却缺少显式比较的问题，复用冻结检测器的编码器构造 L8-L21 层间关系表示并与原分数融合，在五个外部数据集上把三类检测器的平均等错误率相对降低 7.8%-16.7%，代价是新增三个小型关系头与融合参数的源域训练。"
paper_digest_authors: [{"affiliations":["EURECOM","Sophia Antipolis, France"],"name":"Yangyang Qu"},{"affiliations":["The Hong Kong Polytechnic University","Hong Kong SAR, China"],"name":"Siqing Qin"},{"affiliations":["The Hong Kong Polytechnic University","Hong Kong SAR, China"],"name":"Kong Aik Lee"},{"affiliations":["EURECOM","Sophia Antipolis, France"],"name":"Massimiliano Todisco"}]
paper_digest_abstract_sha256: "d2e69699faa00411cd30077ccafd92e07b987340916cb6867bd005e5f5498162"
paper_digest_sidecars: {"citation.bib":{"sha256":"c0a635040a02e260ea952bd9904eb1d384685471a31233cfe72d809fd58a7bd1","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-05678/citation.bib"},"citation.json":{"sha256":"f6e014e95491ccd7d57d593d61bcd49efc5ad19d29c8f0c99107cd9259dd48cc","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-05678/citation.json"},"citation.ris":{"sha256":"d97ee81e44f8378ab9268fc6b0b5baacf0681f3036327d746efc8518dd6bf2f2","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-05678/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"2ad74c2605c3325dcf460feaf4a93a4c303757704b287fe71d89cb41e78e7d30","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-05678/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "8659bf59cb602efcb5417b3344c248198eebcfac4786b5fdccbc6a5d88598e86"
paper_digest_api_reader_plan_sha256: "f8331d35e36b6600fe2c1a7968ba70dcbda6544a54c82a18513ded28d1f10e98"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "2e610328a6817f348bbfc4dca1f44e65df5f11e88ff5ad4712c77837aa387fc6"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "6baa8e11e298d1031d254c38e8fb106ee8ae05c82909f1733aa3857de75bdc0d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "68d79393c727fe9a95b5cf9bfd7a013e40318b051758acf650eef9eb30ae6845"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "47b39eebb3f1e11a8b22e3955be5b05e9c3cc913ed028531db83e060ceb178a4"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 跨层比较如何为语音伪造检测提供新证据：CLRM 解读

> 英文题目：*[CLRM: Cross-Layer Relation Modeling for Audio Deepfake Detection](https://arxiv.org/abs/2611.05678v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-deepfake)
- **研究方法**：[模型融合](/audio-paper-digest-blog/papers/?concept=method.model-combination)；[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5


## 👥 作者与机构

- Yangyang Qu：EURECOM；Sophia Antipolis, France
- Siqing Qin：The Hong Kong Polytechnic University；Hong Kong SAR, China
- Kong Aik Lee：The Hong Kong Polytechnic University；Hong Kong SAR, China
- Massimiliano Todisco：EURECOM；Sophia Antipolis, France

## 📌 核心摘要

音频深度伪造检测需要判断输入语音是真实还是合成或篡改，难点在于生成方法和录制条件变化时判别线索容易失效。自监督语音编码器在不同深度给出同一句话的不同表示，各层真伪区分能力并不一致，常见加权聚合或合并预测没有把层间差异直接交给分类器。论文提出跨层关系建模（Cross-Layer Relation Modeling，CLRM），复用已冻结的XLS-R-300M编码器，先用真实语音的说话人相对几何组织初选深度间隔大但说话人统计相近的层对，再以源域留出攻击上的检测误差在Meta-dev上确定最终层对与融合配置。选定两层的摘要进入关系表示构造，在保留单层摘要的同时显式编码绝对差、逐元素乘积和余弦相似度，形成8193维输入，训练三个紧凑关系头并平均原始输出得到关系分数。该关系分数与原检测器分数分别用源域开发集统计标准化后做逻辑回归融合得到最终判决分，整个过程只训练关系头和融合参数。相对已有聚合方法，差异在于保留单层摘要的同时显式编码上述关系特征，同层摘要和相近参数量下显式关系特征在融合前后均取得更低平均等错误率。在五个外部数据集的平均等错误率上，XLSR-AASIST从7.170%降到5.972%，三个检测器相对下降为7.8%至16.7%。该结论适用于XLS-R-300M与论文所用源配置，共享真实语音的源划分、点估计评测以及未测量的推理代价仍是边界。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频伪造检测要判断什么，输入输出是什么

音频伪造检测的任务是判断一段语音是真实录制还是合成或篡改得到。输入是一段单声道 16 kHz 音频，论文中统一处理为 64600 个采样点，过长截断、过短重复。输出是一个检测分数，分数越高或越低代表倾向真或假，需要由阈值决定，评价时用等错误率衡量，数值越低表示真假两类错误同时越小。

难点在于生成方法和录音条件不断变化，训练时见过的攻击在测试时可能完全不同。论文把 ASVspoof 2019 逻辑访问作为源域做开发，把 ASVspoof 2021、ASVspoof 5、Fake-or-Real 和 In-the-Wild 等作为外部测试，要求源域定好的层对、头参数和融合系数原样搬到外部，不能针对外部重新调参。

自监督编码器 XLS-R 在这里的角色是特征提取器。它有 24 个 Transformer 块，记为 L1 到 L24，每个块输出帧级隐藏序列。以往研究发现不同层的真假区分能力差别很大，有的方法只用末层，有的方法加权聚合多层。论文要解决的具体缺口是：这些做法都没有把层与层之间的显式比较作为检测输入，分类器只能从拼接特征中间接学习比较。

**XLS-R 编码器 × 层表示：** XLS-R 编码器指论文复用的多语言自监督语音编码器 XLS-R-300M，它把一段音频逐块变换为 24 层隐藏表示；层表示指每一层输出的帧级向量序列，浅层更接近声学细节、深层更抽象，不同层对真假语音的区分能力不同，这是后文要比较跨层关系的前提。

### 已有路线如何用多层表示，本文与它们有何不同

第一条路线是多层选择与聚合。XLSR-SLS 学习与层相关的权重来聚合 XLS-R 特征，Pan 等人做 WavLM 中间表示的注意力合并，Xiao 和 Vu 合并各单层预测。这些方法证明多层信息有用，但输入端仍然是特征或预测的加权组合，没有直接写出两层之间的差异、乘性交互和角度关系。

第二条路线是建模跨层依赖或显式比较。HierCon 用层次注意力和对比学习建模时间帧与编码器层之间的依赖，Sentence-BERT 在句对分类中尝试包含逐元素差与乘积的组合。论文引用它们是说明显式比较在表示学习中有先例，但本文不是做通用表示学习，而是为伪造检测构造可直接送入检测头的跨层输入，并在冻结检测器条件下做分数融合。

第三条路线是跨数据集检测。包括零样本语音合成的跨域研究、大规模多语种数据集 SpeechFake、源与生成器多样性研究，以及用音频语言模型做上下文学习的 ICLAD。CLRM 与它们目标一致，都是提升对未见合成方法和录音条件的泛化，但手段不同：CLRM 不增加训练数据多样性，也不换主干，而是在已有 XLS-R 检测器上外挂关系证据。

### 为什么层间比较可能有用，论文如何验证这个想法

同一句话经过编码器不同深度，会得到同一内容的不同视角。浅层保留更多声学细节，深层更抽象，伪造痕迹可能在两层的变化方式上暴露出来。例如真语音的说话人结构在两层之间保持方式与假语音不同，这种不一致可以用向量差、乘积和夹角来刻画。直接拼接保留了两层向量，但要靠分类器自己发现比较规则，数据有限时可能学不到。

论文把这个直觉转化为可检验的问题：在层摘要、标准化、分类器容量和训练流程都相同的情况下，只把输入从拼接换成包含显式比较项的关系表示，源域和外部平均性能是否更好；再把辅助分数与原检测器分数融合，是否在不改原结构、不重训原参数的前提下进一步降低外部平均等错误率。几何选层只是为了高效找到值得比较的层对，最终结论依赖检测性能的选择与冻结配置下的外部评测。

### CLRM 整体流程：一条样本走过哪些部件

对一段输入音频 x，系统同时走两条支路。左支是原冻结检测器，它用自己的 XLS-R 编码器和原检测头给出基础分数。右支复用同一个冻结 XLS-R 编码器，取出选定两层 p 和 q 的隐藏序列，分别做成 utterance 级摘要，再拼成关系表示，送入 3 个小型关系头取平均得到关系分数。两分数分别用源域开发集的均值方差标准化，再经逻辑回归融合成最终分数。

下面这张总览图把常规做法与本文做法放在一起，读图时重点看输入如何分叉、在哪里汇合、哪些部件冻结。常规末层检测与多层聚合只用一类分数，CLRM 多出一条显式关系支路，最后才做分数级融合。

> **看图路径：** 1. 先看三列的输入是否都是同一段音频 x，再看每列用了编码器的哪些层输出；2. 对比(a) 只用末层、(b) 多层聚合、(c) 只选 Hp 与 Hq 两层做关系建模的差别；3. 沿(c) 右侧支路看关系建模到关系头再到关系分数的走向，以及左侧基础分数在哪里汇合；4. 注意雪花标记表示冻结的 XLS-R 与原检测器，只有关系头与融合参数可训练

[![原论文 Figure 1：CLRM for ADD. (a) Last-layer detection and (b) multilayer aggregation illustrate conventional…](https://arxiv.org/html/2611.05678v1/model.png)](https://arxiv.org/html/2611.05678v1/model.png)

*论文图 1。原论文 Figure 1:：“CLRM for ADD. (a) Last-layer detection and (b) multilayer aggregation illustrate conventional uses of SSL representations.”。*

图 1 包含三列。(a) 只取末层表示送检测头得到分数；(b) 取出 H1、H2 直到末层做层聚合再送检测头；(c) 是本文方法，同一段音频同时送入冻结的基于 XLS-R 的检测器得到基础分数，又从同一冻结 XLS-R 中取出 Hp 与 Hq 做跨层关系建模，经关系头得到关系分数，两分数经逻辑融合得到最终分数，雪花标记表示冻结。这张图帮助理解 CLRM 是外挂式增强：不改原编码器与原检测头，只增加关系表示、关系头与融合参数，且编码器只用一份，避免重复编码。

### 层摘要与关系表示：把两层变成一个 8193 维输入

第一步是把帧序列压成定长摘要。对第 l 层隐藏矩阵，先算时间均值向量与总体标准差向量，再把二者拼接为层摘要向量，维度是 2 倍隐藏维度。XLS-R-300M 的隐藏维度是 1024，因此单层摘要是 2048 维。每个坐标用 ASVspoof 2019 官方训练集估计的该层均值方差做标准化，开发与评测数据用同一套统计量，这是为了让不同层的数值范围可比。

\[\mathbf{z}_{l}(x)=[\boldsymbol{\mu}_{l}(x);\boldsymbol{\sigma}_{l}(x)]\in\mathbb{R}^{2d}.\]

上式就是单层摘要的构造：均值刻画该层整体位置，标准差刻画帧间起伏，二者拼接保留该层个体信息。论文强调几何选层用的嵌入与这里不同，几何用时间均值加归一化，而关系输入用均值加标准差并做坐标标准化，两者不要混淆。

第二步是构造两层之间的显式比较。对选定层 p 和 q 的标准化摘要，关系表示保留两个摘要本身，再加上绝对差、逐元素乘积和余弦相似度。绝对差表示逐坐标差异大小，乘积编码乘性交互，余弦相似度用一个标量概括两向量的夹角关系。因为操作对象是 utterance 级摘要，不需要两层做帧对齐。维度上两份 2048 维摘要加 2048 维差加 2048 维乘积加 1 维余弦，共 8193 维。

\[\mathbf{r}^{\mathrm{concat}}_{p,q}(x)=[\tilde{\mathbf{z}}_{p}(x);\tilde{\mathbf{z}}_{q}(x)]\in\mathbb{R}^{4d}.\]

上式是作为对照的直接拼接输入，只有两份标准化摘要共 4096 维。把它与关系表示对比，就能看出本文多提供了什么：拼接只给个体信息，关系表示在同样个体信息之外多给了 3 类比较项。对照实验用相同层摘要与相同标准化，只换输入形式，因此性能差别可以归于是否显式编码比较。

**直接拼接 × 显式跨层关系表示：** 直接拼接指把两个层的 utterance 摘要向量简单并排放进分类器，让分类器自己学如何比较；显式跨层关系表示指在输入端就算好绝对差、逐元素乘积和余弦相似度并与原摘要一起送入分类器，分工是前者保留信息但不点明差异，后者把差异与交互直接写成特征，组合后分类器同时看到个体信息和比较结果。

### 关系头如何把关系表示变成关系分数

关系表示送入 3 个独立初始化的前馈头。每个头结构相同：线性投影到 256 维隐藏层、GELU 激活、Dropout 率为 0.20、再线性输出为 1 维。每个头约 209.8 万可训练参数，3 个头合计约 629 万。编码器与原检测器全程冻结，只有这些头和后续融合参数需要拟合。

\[s^{\mathrm{rel}}_{p,q}(x)=\frac{1}{M}\sum_{m=1}^{M}g_{\phi_{m}}(\mathbf{r}_{p,q}(x)),\qquad M=3.\]

上式是关系分数的计算：3 个头各自对同一关系表示打分再取平均，M 等于 3。平均发生在方向校准、归一化和融合之前。训练时 3 个头在官方源训练集上独立拟合，用官方源开发集选检查点，损失是加权二元交叉熵，优化器为 AdamW，学习率 2×10-4，权重衰减 10-4，批量 2048，最多 15 轮，按开发集等错误率早停。推理时不需要说话人标签，几何统计也不进入该表示。

**关系头 × 关系分数：** 关系头指三个独立初始化的前馈网络，每个由线性投影、GELU 激活、Dropout 和线性输出组成，负责把关系表示映射为一维分数；关系分数指三个头原始输出的平均值，它是跨层证据的量化，还需经过方向校准、标准化和融合才能成为最终判决的一部分。

### 分数融合：两个分数如何变成最终判决

融合前先做分数标准化与方向选择。基础分数与关系分数各自用官方源开发集的均值与总体标准差做标准化。对 XLSR-SLS，关系分数的符号在 Meta-dev 上按加权组合指标选择，论文附录给出权重为 0.50 倍 Pooled 加 0.35 倍 Macro 加 0.15 倍 Worst，Worst 与 Pooled 作后续平局打破，全平则保留正方向。

\[s^{\mathrm{final}}(x)=a\tilde{s}^{\mathrm{base}}(x)+b\tilde{s}^{\mathrm{rel}}(x)+c,\]

上式是逻辑回归分数融合：标准化后的基础分数与关系分数分别乘系数 a 和 b 再加偏置 c，作为逻辑回归的线性决策分数。系数用 L-BFGS 在官方源开发集上拟合，逆正则强度 C 与层对一起在 Meta-dev 上按融合后 Macro 等错误率选择。这种分数级接口保留了原检测器的特征处理与判决通路，只增加关系证据，外部评测时层对、方向、归一化统计量与融合系数全部固定。

**基础分数 × 逻辑回归分数融合：** 基础分数指原冻结检测器对同一话语给出的检测分数，保留了原系统的特征处理与判决路径；逻辑回归分数融合指在源域开发集上拟合系数 a、b、c，对标准化后的基础分数与关系分数做加权相加，二者分工是基础分数提供原有判别力，关系分数提供跨层补充，融合后得到最终分数。

### 层对如何选出：几何短名单加检测性能定案

层对决定了比较哪两个处理阶段。论文先在 L1 到 L21 中要求最小间隔 8 层，共 91 个合法对，再用说话人相对几何排出短名单。对每层，用真语音做时间均值加归一化得到几何嵌入，与留一法得到的本说话人中心及其他说话人中心算余弦相似度，聚合为 4 个层级统计量。

\[\mathbf{g}_{l}=[R_{l};A_{l};M_{l}^{\max};M_{l}^{\mathrm{mean}}],\]

上式中 4 个量分别是正确说话人平均排名、首位准确率、与最强竞争者的平均间隔、与平均竞争者的平均间隔。每个分量在候选层间标准化后，算两层几何距离，再用深度间隔除以距离加极小量得到排序分，越大表示深度相隔越远且说话人组织越相似，取前 6 名作为候选。

读下面几何曲线有助于理解为何不用深度 alone。横轴是层深度，纵轴同时显示自说话人排名与最大竞争者间隔，二者随深度非单调变化，浅层排名低间隔高，中层排名升高间隔下降，深层又有变化，因此需要用几何向量而非只看层号来选对。

> **看图路径：** 1. 看横轴 XLS-R 层从 L1 到 L21，左侧纵轴是自说话人排名越低越好；2. 看右侧纵轴是最大竞争者间隔越高越好，两条曲线随深度呈非单调变化；3. 注意浅层排名低间隔高、中层排名升高间隔下降，说明只看深度不够；4. 思考为何论文要用四个几何统计量的标准化向量来度量层间相似

[![原论文 Figure 2：Speaker-relative statistics across XLS-R layers.](https://arxiv.org/html/2611.05678v1/geometry.svg)](https://arxiv.org/html/2611.05678v1/geometry.svg)

*论文图 2。原论文 Figure 2:：“Speaker-relative statistics across XLS-R layers.”。*

图 2 显示自说话人排名与最大竞争者间隔随 XLS-R 层变化的趋势，计算用主源协议下 ASVspoof 2019 评测集的真语音，只展示 L1 到 L21 以避免 L22 到 L24 量纲差异掩盖候选区间的变化。它支持的判断是各层说话人组织方式不同，深度间隔大但几何相似的层对值得优先比较。几何只决定短名单，不进入 utterance 级关系表示。每个候选在源训练集训头、在源开发集拟合融合，再在 Meta-dev 上按融合后 Macro 等错误率选出最终层对与 C，主协议选出 L8-L21。

**说话人相对几何 × 层对候选：** 说话人相对几何指用真语音在每层计算的四个统计量：正确说话人平均排名、首位准确率、与最强竞争者及平均竞争者的相似度间隔，用来刻画各层说话人组织方式；层对候选指在 L1-L21 中按深度间隔与几何距离选出的六个层对，分工是几何负责把搜索从 91 对压缩为有代表性的短名单，检测性能再决定最终用哪一对。

### 数据划分、检测器与评价指标如何设置

源域用 ASVspoof 2019 逻辑访问。官方训练集训关系头并估计层标准化统计量，官方开发集做检查点选择、分数归一化与融合拟合，官方评测集按攻击划分：A07、A09、A11、A13、A15、A17、A19 归 Meta-dev 做配置选择，A08、A10、A12、A14、A16、A18 归 Meta-test 做评估。主协议两分区共享 7355 条真语音，另有话语不重叠与说话人不重叠两种更严划分，用训练集真语音重建几何并重复选型。

评测用 3 类基于 XLS-R 的检测器：XLSR-SLS、基于时序通道建模的 XLSR-Conformer-TCM、XLSR-AASIST。层下标先在 XLSR-SLS 上选定，后两类检测器复用层号但各自重训关系头与融合系数，且都用各自冻结编码器的表示。外部五集为 ASVspoof 2021 LA 与 DF、ASVspoof 5 评测集、归一化 Fake-or-Real 测试集和 In-the-Wild，层对与参数冻结后直接评测。

**Macro 等错误率 × External-5：** Macro 等错误率指在源域按攻击分别算等错误率再无加权平均，反映对多种攻击的平均表现，Worst 取最差攻击，Pooled 把所有试验混在一起算；External-5 指五个外部数据集各自等错误率的无加权平均，等错误率越低越好，二者组合用来区分源域选型与跨数据集泛化的结论。

对照设计上，拼接控制用相同 L8-L21 摘要与标准化，Concat-256 匹配隐藏宽度 256，Concat-512 约匹配单头参数量，均为 3 个独立头。单层、去掉某一比较项、距离统计量等也在源端独立拟合。实现上音频单声道 64600 点，标准差下限与标准化分母下限分别设为 10-6 与 10-5，梯度裁剪 5.0，有效种子为 1411、1637、2326。

### 三个检测器在五个外部数据集上是否都变好

要回答的核心问题是外挂关系证据后，外部平均性能是否提升，且比较是否公平。论文保证每个基础检测器与其增强版在相同评测试验与相同评分器下比较，平均值为五集等错误率的无加权平均，相对变化用未舍入值计算，等错误率越低越好。

| Base detectors and CLRM augmentation |  |  |  |
| --- | --- | --- | --- |
| XLSR-SLS Zhang et al. (2024) | 2.95 | 18.76 | 7.16 |
| + CLRM | 2.56 | 16.32 | 6.46 |
| XLSR-Conformer-TCM Truong et al. (2024) | 2.30 | 16.16 | 6.85 |
| + CLRM | 2.23 | 14.55 | 6.32 |
| XLSR-AASIST Jung et al. (2022) | 1.27 | 15.27 | 7.17 |
| + CLRM | 1.17 | 14.41 | 5.97 |

上表比较每个基础检测器与其 CLRM 增强版。XLSR-SLS 的平均值从 7.16% 降到 6.46%，XLSR-Conformer-TCM 从 6.85% 降到 6.32%，XLSR-AASIST 从 7.17% 降到 5.97%，相对降幅分别为 9.7%、7.8% 和 16.7%。分数据集看，XLSR-AASIST 在五集上全部下降，其余两类在多数集上下降但个别集略有上升，例如 XLSR-SLS 在 2021 DF 从 1.77% 升到 1.91%、In-the-Wild 从 7.28% 升到 7.45%。这说明结论成立的条件是看五集平均，而不是每个单集必胜。

表下半部分还列出 4 类参考系统的汇总值，它们的来源见附录，只是背景参照，不能与 CLRM 做同条件胜负判断，因为训练与评测记录并不完全一致。论文未给出外部结果的置信区间与显著性检验，报告的是点估计，复现时应关注平均值附近的波动。

### 显式比较是否比直接拼接更有效

第二个关键问题是增益是否来自显式比较本身，而非用了更多参数或不同特征。控制实验固定 L8-L21 摘要与标准化，只换输入形式，并设置匹配隐藏宽度与约匹配单头参数量的拼接对照，训练与选择流程相同，分别看辅助分数单独表现与和 SLS 融合后表现。

| Auxiliary input | Source fused | Auxiliary only | Fused with SLS |
| --- | --- | --- | --- |
| Concat-256 | 0.114 | 16.949 | 7.422 |
| Concat-512 | 0.117 | 16.728 | 7.330 |
| Relation | 0.069 | 11.333 | 6.462 |

上表显示关系输入在源端融合后 Macro 等错误率为 0.069%，低于两种拼接的 0.114% 与 0.117%；外部平均上，单独辅助分数从约 16.7%-16.9% 降到 11.333%，与 SLS 融合后从 7.330%-7.422% 降到 6.462%。参数量上关系单头约 209.8 万，与 Concat-512 约 209.8 万接近，因此不能用参数更多来解释。

分数据集看，关系输入在融合后 4 个数据集上最低，仅在 2021 LA 上拼接略优；在单独辅助分数上同样四集最低。这加强了显式比较更有判别力的判断，但也表明结论依赖所选层对与分类器配置，换层或换容量后是否成立需要另做对照。论文还报告完整关系表示优于单层与去掉任一比较项的变体，支持保留全部 3 类比较项。

### 层对选择、分数组合与初始化有多稳健

先看层对短名单的质量。几何引导选出的 6 个候选中，L8-L21 在 Meta-dev 上 Macro 等错误率 0.0888% 最低而被选中。仅按深度间隔排序与仅按几何排序的配置在 Meta-test 上分别为 0.078% 与 0.103%，几何引导配置为 0.069%，随机 6 对短名单平均 0.076%，穷举 91 对为 0.071%。这说明短名单加检测选型能在远小于穷举的成本下接近穷举效果，但随机短名单中有个别也能达到 0.064%，因此几何的价值是平均效率而非每次必胜。

| Pair | Gap | \(R_{G}\) | Macro EER (%) |
| --- | --- | --- | --- |
| L8–L21 | 13 | 15.26 | 0.0888 |
| L7–L18 | 11 | 15.22 | 0.0892 |
| L10–L21 | 11 | 14.27 | 0.0965 |

上表列出几何排序前六候选的深度间隔、几何距离、排序分与 Meta-dev Macro 等错误率。L8-L21 间隔 13 层，几何距离 0.85，排序分 15.26，误差最低；L7-L18 误差 0.0892% 非常接近，说明相邻候选之间差距很小，换种子或划分可能选出邻近对。

分数组合方面需要结合下面消融图一起读。图前说明：左半比较不同输入形式在源端 3 种聚合指标下的表现，右半比较基础分数、关系分数、等权融合与源拟合逻辑融合，重点看 Macro 列，Worst 与 Pooled 列用来观察代价。

> **看图路径：** 1. 先看(a) 中 Full L8-L21 relation 在 Macro、Worst、Pooled 三列是否都是最短的条形；2. 对比 L21 only、拼接与距离统计量等对照的数值，理解保留全部比较项的作用；3. 再看(b) 中 XLSR-SLS、Relation only、等权融合与 CLRM 逻辑融合的 Macro 差异；4. 注意(b) Worst 列中 Relation only 略优于 CLRM，说明融合增益主要在平均指标上

[![原论文 Figure 3：Source-side representation and score-combination ablations (Meta-test EER, %).](https://arxiv.org/html/2611.05678v1/ablation_clrm.svg)](https://arxiv.org/html/2611.05678v1/ablation_clrm.svg)

*论文图 3。原论文 Figure 3:：“Source-side representation and score-combination ablations (Meta-test EER, %).”。*

图 3(a) 显示完整 L8-L21 关系在 Macro、Worst、Pooled 上分别为 0.0690%、0.2275%、0.1053%，均优于单层、拼接与距离统计量对照；图 3(b) 显示逻辑融合 Macro 为 0.0690%，优于关系单独的 0.0968% 与等权融合的 0.0747%，但 Worst 列中关系单独的 0.2071% 略优于逻辑融合的 0.2275%，说明融合主要改善平均表现，对最差攻击未必同时最优。初始化方面，固定 L8-L21 时 3 次 Macro 平均 0.070%，样本标准差 0.007 个百分点，重复选层 2 次选 L8-L21、1 次选 L9-L17，后者 Meta-test 为 0.092%，表明源端改进较稳定但层选择有波动。

| Detector | Base | Equal | Logistic |
| --- | --- | --- | --- |
| TCM | 6.849 | 6.295 | 6.316 |
| AASIST | 7.170 | 5.815 | 5.972 |

上表补充另两类检测器的融合情况。对 Conformer-TCM，基础、关系单独、等权、逻辑融合的外部平均分别为 6.849%、6.852%、6.295%、6.316%；对 AASIST 分别为 7.170%、5.980%、5.815%、5.972%。可见关系证据与基础分数互补，即使关系单独不强，融合仍可优于各自单独，源选的逻辑融合在外部略逊于等权融合，说明源选配置搬到外部时存在小幅失配。本表数值与单位依据论文 PDF。

### 这些结论在什么条件下才成立，还有哪些没测

结论的适用边界首先是主干与数据范围。实验只用 XLS-R-300M 表示，源域只用 ASVspoof 2019 逻辑访问做开发，外部只评测 5 个数据集，换编码器、换源域或更多野外数据时增益是否保持尚未验证。几何候选需要说话人标签，推理时不需要，但在无说话人标注的新源域上如何构造短名单需要另想办法。

其次是协议与统计。主 Meta-dev 与 Meta-test 共享真语音，虽然另有话语不重叠与说话人不重叠控制且 CLRM 在源端仍有下降，但外部结论仍基于点估计，没有报告置信区间，初始化与部件消融只在源端评估。关系系统新增 3 个预测头，论文明确延迟与内存尚未测量，因此不能承诺推理成本不变，训练资源、推理开销与实际延迟需要分开讨论。

最后是单集与最差攻击的反例。XLSR-SLS 加 CLRM 在 2021 DF 与 In-the-Wild 单集上略升，源端 Worst 指标上逻辑融合不如关系单独，外部另两检测器的逻辑融合略逊于等权融合。这些都说明平均改进不等于每集、每次攻击都改进，引用时应同时保留平均值与反例。

### 要复现第一步做什么，需要哪些配置与材料

复现应从源域流水线做起，而不是直接跑外部。先准备 ASVspoof 2019 逻辑访问的官方训练、开发与评测划分，按攻击把评测集分成 Meta-dev 与 Meta-test，主协议共享真语音。用冻结的 XLS-R-300M 提取 L1 到 L21 表示，对每层用训练集估计坐标标准化统计量，对每条音频算均值加标准差摘要并标准化。

再按几何方法构造短名单：用真语音做时间均值加归一化嵌入，算留一法本说话人中心与竞争中心，得到 4 个统计量并在层间标准化，按深度间隔除以几何距离排序取前六。对每个候选训 3 个关系头并在开发集拟合融合，在 Meta-dev 上选层对与 C，固定后再搬到外部。关键超参数包括隐藏宽 256、Dropout 0.20、AdamW 学习率与权重衰减、批量与早停 patience，以及融合 C 的候选集合。

关于可用性，现有证据无法确认作者资源已公开，因此不能声称代码、模型或数据已公开。附录提到对 XLSR-SLS 有对齐分数与融合设置的存档，可支持分数重放，但另两类检测器只有数据集结果与源配置，没有辅助检查点到分数的映射，复现时需自行训练。

### 什么时候值得尝试，以及还需补什么验证

当已有基于 XLS-R 的检测器不便改结构、不想重训主干，但希望加入跨层证据时，CLRM 值得尝试。它的改动集中在外挂支路：复用同一冻结编码器、训练小型关系头、做分数融合，适合已有系统做增量增强。预期收益是外部五集平均等错误率下降，论文中 3 类检测器相对降幅为 7.8% 到 16.7%，但应预留个别数据集持平或略升的可能。

复现第一步是重建 L8-L21 关系表示与 3 个关系头的源域训练，验证源端 Macro 从约 0.149% 降到约 0.069% 附近，再检查与基础分数融合后的外部平均是否下降。还需补的验证包括更多主干与源域下的重复、外部结果的区间估计、最差攻击与单集行为的系统记录，以及延迟与内存的实测。只有补齐这些，才能判断显式跨层比较在更广条件下的稳定性与部署代价。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.05678v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
