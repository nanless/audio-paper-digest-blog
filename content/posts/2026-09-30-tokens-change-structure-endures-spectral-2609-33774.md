---
title: "Tokens Change, Structure Endures: Spectral Watermarking for Generated Speech"
date: 2026-09-30
draft: false
tags: [音频水印, 信号处理, 语音, 鲁棒性]
categories: [论文速递]
description: "针对语音语言模型生成后须经编码器重读记号并发生替换的问题，Redwing 用替换图谱基与分离求解的嵌入检测函数实现可复现的鲁棒水印，在 Moshi 经 8 次 Mimi 重合成后保持 80.7% 检出率，代价是与 KGW 相当的语音质量变化。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.33774"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "记号会变，结构留下：面向重编码的语音谱水印"
paper_digest_original_title: "Tokens Change, Structure Endures: Spectral Watermarking for Generated Speech"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.33774"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.33774.pdf"
paper_digest_primary_task: "音频水印"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.watermarking","label":"音频水印"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对语音语言模型生成后须经编码器重读记号并发生替换的问题，Redwing 用替换图谱基与分离求解的嵌入检测函数实现可复现的鲁棒水印，在 Moshi 经 8 次 Mimi 重合成后保持 80.7% 检出率，代价是与 KGW 相当的语音质量变化。"
paper_digest_authors: [{"affiliations":["Institute of Neuroinformatics, University of Zurich and ETH Zurich, Switzerland"],"name":"Kanghwi Lee"},{"affiliations":["Institute of Neuroinformatics, University of Zurich and ETH Zurich, Switzerland"],"name":"Kyeongseok Jeong"},{"affiliations":["Institute of Neuroinformatics, University of Zurich and ETH Zurich, Switzerland"],"name":"Jeongmin Liu"}]
paper_digest_abstract_sha256: "30b40538a9b7e729bee8f531ce1d2a54e34bd593793ae4d7a420abdb53fb6dd5"
paper_digest_sidecars: {"citation.bib":{"sha256":"d03014d96608f9d8b677c51689bb03724f1f73917e74e20046308070d574fbd0","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33774/citation.bib"},"citation.json":{"sha256":"0ed2e55a19c0ff01ae0359d26ab31e9c360d676bffb2c043591256c6af5b5b15","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33774/citation.json"},"citation.ris":{"sha256":"7fb2036ba8f284b1fcc4cce090eff60910a26fd6ead8f8f996268a5da597c24c","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33774/citation.ris"},"rethink-context.json":{"sha256":"103897913db8904282293913834167157235c98b85dd51373b63bd21894bffc1","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33774/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d907f553e48bdbc9fb9b8508ab7552bb9328588e9e88fa909e7bb3dd91f56d55"
paper_digest_api_reader_plan_sha256: "704e42e9504bb65fb71d5ade1b998464bb5c3615839ddfc8dbd6da6bc95b2a23"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4e784e496ceeec8ee46104a415d447d3c3ef32b49954eda0648247c7fae01822"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "89e1513f90034bf54f2189e627994fdae313d8b8958653db3096e0dad0ed560a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6733cf9c7c19f5739b553c1149073e50688bec7629048606deb8bbb6a4aaa078"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "db4b5ba3d8749fb88580d9eb79dc88d0abb2101594684752f209e9dd9a36b461"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 记号会变，结构留下：面向重编码的语音谱水印

> 英文题目：*[Tokens Change, Structure Endures: Spectral Watermarking for Generated Speech](https://arxiv.org/abs/2609.33774)*

> 标签：#音频水印 | #信号处理 | #语音 | #鲁棒性
>
> 评分：**7.7/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Kanghwi Lee：Institute of Neuroinformatics, University of Zurich and ETH Zurich, Switzerland
- Kyeongseok Jeong：Institute of Neuroinformatics, University of Zurich and ETH Zurich, Switzerland
- Jeongmin Liu：Institute of Neuroinformatics, University of Zurich and ETH Zurich, Switzerland

## 📌 核心摘要

语音语言模型输入提示输出经神经编解码器离散化的token语音，检测端须把波形重编码为token，而解码再编码的往返会替换部分token身份并随多次重合成累积，使依赖精确token身份的水印迅速失效。为此Redwing先在LibriSpeech语料上统计编解码往返替换计数并构建对称替换图，取归一化图拉普拉斯最小特征值对应的平滑基，使易互换token取值相近，该基输出进入下一步优化。再在该基上用无水印生成的采样分布估计信号矩阵A、代价矩阵B与零假设协方差C，并交替求解带幅值约束的嵌入函数g与检测函数h，分别适配低KL代价与低零假设噪声。相对共用随机绿名单的KGW与微调编解码器的WMAR，该设计以实值平滑函数容忍替换并解耦嵌入与检测优化，因而无需训练水印生成器即可保持信号。在Moshi测试集经8次Mimi重合成的评测条件下，Redwing的TPR指标为80.7%，高于KGW的TPR指标8.3%。该结论适用边界受限于低比特率神经重合成与足够长语音，短语音、裁剪与变速等为失败条件，高保真编解码与强信号处理外推尚未验证。完整代码待法律审查后发布，原文未披露训练硬件与推理延迟成本。

## 🔗 开源与复现资源

- 演示资源：<https://hwiora.github.io/redwing-demo/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决哪一步？

本文输入是语音语言模型的研究设置与 3 组可核对的实验证据，目标是让研究生能复述 Redwing 的构造与评测条件。必须保留的信息包括任务定义、替换通道的计数方法、谱基与嵌入检测函数的求解、强度选择规则、阈值标定方式、攻击遍数与关键数字。本文输出是 1 篇按学习依赖展开的技术解读，不做营销判断。语音生成模型直接生成神经编码器的离散记号，再由解码器变成波形。来源追溯要求提供方能识别自家模型产生的语音。

水印的作用是藏入只有持密钥检测器能发现的信号。难点在于检测器必须把收到的波形重新编码为记号，即使音频未被处理，部分记号也会在往返中改变，每多 1 次重合成，依赖记号精确身份的水印就弱 1 分。

**重编码 × 替换通道：** 重编码指把已生成的波形再送入神经编码器得到记号 Y 的过程，替换通道指从生成记号 X 到回收记号 Y 的随机映射，二者搭配的原因是检测器看不到 X 只能看到 Y，组合意义是把攻击建模为可计数的通道而非无结构噪声，后续设计都围绕该通道展开。

论文把这种解码再编码称为重编码，把平台转码或故意处理统称为攻击，其中神经编解码器重合成是最强的攻击之一。教学例子是：模型采样得到记号序列，解码为波形后检测器编码得到另一序列，两序列不必逐帧相等。例子只用于理解流程，不附加效果数值。

### 已有路线如何划分，本文与哪条路线直接可比？

已有路线按作用阶段分为两类。事后音频水印在成品波形上嵌入信号，代表有 WavMark、AudioSeal、Timbre、SilentCipher 与 CRAW，做法是联合训练嵌入与检测网络并在中间加失真，CRAW 还加入神经编解码器重合成，Latent-Mark 则移动编解码器隐变量。原文报告这类方法在接近原波形的编解码下较强，但在低码率神经编解码器反复重合成下多数被去除。生成时水印在生成过程中嵌入，代表有潜变量水印、记号级偏置水印。KGW 给密钥绿名单加偏置并统计绿名单记号相对于零假设的超出量，HiPT 把易混淆记号聚类后对簇标签用 KGW，WMAR 保留 KGW 但微调 Mimi 使更多记号存活，Aligned-IS 是无失真语音记号水印。

**生成时水印 × 事后水印：** 生成时水印负责在采样记号时加入密钥偏置，事后水印负责在成品波形上训练嵌入与检测网络，二者分工对应作用阶段不同，搭配比较的原因是前者天然活在编码器可重建的记号中、后者直接读波形，组合意义是二者对低码率重合成与波形保真编解码呈现互补的存活模式。

本文属于生成时记号水印，与 KGW、WMAR、HiPT 同输入同目标同运行阶段，可在相同采样代价下直接比较。与事后方法比较时必须注意运行阶段不同：事后方法读波形，记号方法读重编码记号，二者对时间平移、裁剪与音高变化的敏感性不同，不能只看单一攻击下的高低。

### 为什么文本水印的做法不能直接搬到语音？

文本检测器读到的是模型采样的记号本身，语音检测器读到的是波形经编码器恢复的记号。原文用示意强调即使无攻击，每次往返也有记号改变。进一步重复重合成就是重复往返。KGW 依赖每个记号是否落在绿名单，替换后绿名单记号只能靠运气保留，因此每遍都会损失被改动的记号。WMAR 试图让编解码器更多存活，但原文在 Moshi 上发现重复 Mimi 重合成下它并不优于 KGW。

HiPT 用硬聚类使簇内替换不影响水印，是最接近的工作，但本文认为硬划分之外可以用实值光滑函数更细地描述替换结构。问题的关键于是从对抗替换转向利用替换：先数出哪个记号常被换成哪个，再让水印函数在常互换的记号上取值相近。

### Redwing 让一个样本走完哪条流水线？

沿一个样本走完全程有助于定位每个组件。拟合阶段先在 LibriSpeech 上收集替换计数，建图并求谱基，再在无水印生成上估计信号、代价与噪声矩阵并求解嵌入与检测函数。生成阶段对选定流的每帧按密钥符号加偏置采样，解码为波形发布。检测阶段把收到的音频用语言模型自带编码器编码，用检测函数打分并与密钥符号求相关，在正负 2 帧偏移内取最大得到统计量，与标定阈值比较。

全文方法只需替换计数与无水印生成的统计，不改动已发布模型与编解码器。Moshi 上加水印的流是 1 至 4 流，MOSS-TTS 上是 32 流中的 1 至 16 流，CosyVoice3 是单流。密钥为每流每帧定义正负 1 符号，流延迟与帧网格偏移由检测式中的延迟与偏移吸收。

### 偏置如何写入，分数如何算出？

嵌入是作用于对数几率的加性偏置。记流在帧的原始对数几率为向量，密钥符号为正负 1，嵌入函数为每个词表项的实值，强度为参数，则偏置后采样前要做的就是把符号与函数乘积加到对数几率上。符号为正的帧偏爱函数值大的记号，符号为负的帧偏爱函数值小的记号。符号含义与实现如下列原式所示。

\[\ell^{\prime}_{s,t}(i)=\ell_{s,t}(i)+\delta\,b_{s,t}\,g_{s}(i),\qquad i\in\{1,\ldots,V\},\]

检测是对回收记号打分后与符号对齐求和。分子是各加水印流各帧符号与检测函数值的乘积和，分母是分数平方和的平方根，起到按分数大小归一化的作用。检测器在正负 2 帧内搜索偏移并取最大，以吸收重编码引起的帧网格平移。在无水印音频上，若符号视为独立公平符号且与记号独立，则固定偏移的统计量均值为零、方差为 1，加水印后一致性随帧数累积，期望随帧数平方根增长。阈值不依赖正态假设，而是按经验标定。原式如下。

\[Z(\tau)=\frac{\sum_{s\in\mathcal{S}}\sum_{t}b_{s,t+\tau+d_{s}}\,h_{s}(Y_{s,t})}{\sqrt{\sum_{s\in\mathcal{S}}\sum_{t}h_{s}(Y_{s,t})^{2}}},\qquad Z^{\star}=\max_{|\tau|\leq 2}Z(\tau),\]

**嵌入函数 × 检测函数：** 嵌入函数负责在生成时偏置采样分布，检测函数负责在回收记号上与密钥符号求相关，二者分工不同是因为前者要便宜地写入信号、后者要在未加水印语音上噪声小，搭配求解的原因是同一绿名单无法同时兼顾写入代价与读出噪声，组合意义是允许两组系数取不同值。

上述两式把写入与读出分开：写入函数要改动采样分布足够便宜，读出函数要在未加水印语音上足够安静，二者不必相同。

### 替换图与谱基如何计算，为何去掉自环？

基的输入是替换计数。对每段录音先编码，再解码再编码，按帧对齐后统计源记号被回收为另一记号的帧数。只保留源出现至少 50 次的支撑集。在支撑集上建无向图，边权为双向计数平均且去掉自环，度与归一化拉普拉斯按常规定义计算。原式如下。

\[W_{ij}=\tfrac{1}{2}\left(N_{ij}+N_{ji}\right)\mathbf{1}\{i\neq j\},\qquad D_{ii}=\textstyle\sum_{j}W_{ij},\qquad L=I-D^{-1/2}WD^{-1/2}.\]

对拉普拉斯求特征向量并做度加权缩放，得到词表上的函数。特征值等于边权加权的平方差和，因此小特征值函数在常互换的记号上取值相近。原文丢弃特征值为零的常数函数，保留接下来 16 个函数为基，记每个记号的基值为 16 维向量。线性组合的光滑性有上界保证，组合的加权平方差不超过第 16 个特征值乘以其平方大小。

**替换图 × 谱基：** 替换图负责记录哪些记号经常互换，谱基负责给出在互换记号上取值相近的实值函数，二者搭配的原因是拉普拉斯小特征值函数在强连接节点间变化缓慢，组合意义是任何基的线性组合经替换后数值变化都很小，从而保留水印信号。

去掉自环是关键安排。保留自环时，常存活的记号主要连向自身，导致前导模态集中在单个记号上，携带的水印很少。去掉自环后，基描述的是替换而非存活。下表比较 Moshi8 个流中有无自环时的模态分布，参与比可理解为有效覆盖的记号数，最后一行是保留自环时集中在单记号上的模态个数。表前问题是：自环是否把基变成存活指示器？公平条件是同一 Mimi 通道与同一支撑集，指标方向是参与比越大越分散、单记号模态越少越好。

| Stream | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Survival share | 0.72 | 0.39 | 0.26 | 0.25 | 0.20 |
| Participation, without | 116 | 161 | 228 | 172 | 99 |
| Participation, with | 79 | 151 | 1.2 | 1.1 | 1.1 |
| Single-token modes, with | 0 | 2 | 15 | 14 | 15 |

表中可见流 1 参与比从 116 降到 79 但尚无单记号模态，流 3 至流 5 在保留自环时参与比跌到约 1 并出现较多单记号模态，支持去掉自环。代价是该表只针对 Moshi 自带通道，其他模型上变窄但几乎不产生单记号模态，结论的强度因编解码器而异。

\[g(i)=a^{\top}\phi(i),\qquad h(i)=c^{\top}\big(\phi(i)-\mu_{0}\big),\qquad a,c\in\mathbb{R}^{K}.\]

上式说明嵌入与检测函数都是基的线性组合，检测函数额外减去无水印均值以在零假设下均值为零。支撑集之外的记号基值为零，嵌入值为零，检测值为常数负项，幅值界对全词表生效。

### 信号、代价与噪声如何变成可优化的目标？

基的效果由 3 个矩阵度量。存活信号矩阵度量生成记号基值与回收记号期望基值的协方差，按帧平均；写代价矩阵度量基在模型可能采样的记号间的变化，按帧平均；零假设均值与协方差度量无水印语音上基值的分布。转移矩阵由计数行归一化得到，包含对角存活项，与建图时去掉自环不同。

**写代价 × 零假设方差：** 写代价负责度量偏置引起的散度，零假设方差负责度量未加水印语音上检测分数的波动，二者搭配的原因是阈值定在未加水印音频上，评价必须同时看信号、代价与噪声，组合意义是目标同时除以代价与噪声的平方根，实现单位代价与单位噪声下的信号最大化。

在 1 阶近似下，单帧对分子的均值贡献正比于嵌入与检测系数经信号矩阵的双线性型，单帧散度代价正比于嵌入系数的 2 次型，无水印单帧平方分数期望等于检测系数的 2 次型。固定每帧代价预算并把强度代入，可得期望统计量正比于预算、帧数与目标的乘积，目标只依赖两组系数。原式如下。

\[\mathbb{E}[Z]\approx\sqrt{2\varepsilon n}\;J(a,c),\qquad J(a,c)=\frac{a^{\top}Ac}{\sqrt{a^{\top}Ba}\,\sqrt{c^{\top}Cc}}.\]

该目标的最大值对应典型相关分析的领先奇异值，解为代价与噪声矩阵白化后的领先奇异向量。对固定嵌入，最优检测是匹配滤波器形式，即经转置信号到达的信号再经噪声逆协方差折扣。原文明确该式是近似而非推导结果：它把比值的均值换成均值之比，把分母视为接近均值，只保留 1 阶项，且不保证检出率排序，最终检出率直接测量。

### 没有神经网络训练时，什么被拟合，什么被冻结？

本研究没有训练生成模型、编解码器或水印网络，必须明确说明。被冻结的是语言模型权重、采样器之外的全部生成逻辑、自带编解码器权重，以及基线事后水印的发布权重。被计算的是替换计数、转移矩阵、谱基、信号代价噪声矩阵，以及嵌入与检测系数。无训练不等于确定性求解：交替优化的联合问题非凸，数值求解只保证单调上升至容差，不保证全局最优；采样本身随机，输出仍随机。

无界最大化会给罕见记号极大值，罕见记号对代价矩阵几乎无惩罚，但一旦进入候选就会强制或排除该记号，使 1 阶代价失效并损害语音质量。原文因此求解有界代理问题：在代价与噪声 2 次约束下最大化信号，并对全词表逐记号限幅，界取 5。固定一侧后问题是 2 阶锥规划，交替求解直至目标相对变化小于阈值或达到迭代上限，从 3 个领先奇异向量对出发取最优。

基维度 16 是 2 的幂中在各流上距平台 5% 内的最小值，界 5 是在检测每单位散度基本持平且质量未骤降的已测试值中选出的较小值。监督来源是无水印生成的采样分布与回收记号，不使用人工标注。

### 模型、数据、强度、攻击与阈值如何对齐？

主模型是全双工对话模型 Moshi，生成 Mimi 的 8 流记号，每流词表 2048，每秒 12.5 帧，音频温度 0.8 且取前 250，文本流另设温度。迁移模型是 CosyVoice3 与 MOSS-TTS，分别读出给定文本，前者单流每秒 25 帧，后者 32 流每秒 12.5 帧且流延迟逐流递增。替换计数统一用 20 小时 LibriSpeech，与所有生成语音不重叠。Moshi 用 1000 个 WildVoice 口语问题分为拟合 150、验证 250、测试 600，强度与加水印流在验证集选定，所有报告结果来自测试集，阈值来自另取的校准无水印回答且不再他用。TTS 各有验证 250 与测试 600，校准约 1000。

比较公平性靠代价对齐：预算取同流上 KGW 强度 2 的验证散度，Redwing 在网格中取代价不超预算的最大强度，Moshi 选 0.7，两个 TTS 选 0.9。KGW 用同流、同绿名单比例 1/4，WMAR 共享 KGW 记号但用微调编解码器解码，事后方法用水印无水印输出的发布权重嵌入。攻击分编解码器反复重合成与 1 次性信号处理两类，每次编解码器遍都从上遍输出开始并保持时长，阈值标定后不再按攻击重标定。每个检测器阈值按校准集至多 1% 误报设定，报告的检出率都是固定阈值下的真阳性率，区间为 95% 区间。

语音质量用多种预测器打分，Moshi 空回答另行处理。下表列出部分攻击编解码器的实现与设置，表前问题是：不同遍数是否作用于同一波形链？公平条件是所有方法面对同一重采样与存储精度，指标是设置本身而非效果。

| Codec | Implementation | Setting |
| --- | --- | --- |
| Mimi | Mimi of Moshi (kyutai/moshiko-pytorch-bf16) | 8 quantizers |
| EnCodec | facebook/encodec_24khz | 6 kbps |
| SpeechTokenizer | speechtokenizer_hubert_avg | all quantizers, 24 kHz input |
| SNAC | hubertsiuzdak/snac_24khz | all quantizers |

表中 Mimi 为 Moshi 自带 8 量化器设置，外来低码率编解码器分别覆盖主要失真来源。未列出的信号处理攻击设置见原文对应表格，复现时须按相同种子与时长保持规则执行。

### 经多次重合成后，谁还留得下，代价是什么？

要回答的核心问题是：在相同采样代价与固定误报阈值下，经 8 次低码率重合成后哪种水印真阳性率最高？指标方向是检出率越高越好，误报越低越好，质量分越高越好。下表整理 Moshi 经 8 次自带 Mimi 重合成后的关键数字，条件是测试集、固定阈值、校准误报至多 1%，比较对象是实际可运行的 KGW 与 WMAR。表中数值与单位与原文连续句逐字一致。

| 模型与条件 | 指标 | Redwing | KGW | WMAR 上限 |
| --- | --- | --- | --- | --- |
| Moshi 经 8 次 Mimi 重合成 | 检出率 | 80.7 % | 8.3 % | 7.3 % |
| Moshi 无攻击校准 | 误报率 | 1 % | 1 % | 1 % |

上表显示 Redwing 在 80.7% 处仍可检出，而 KGW 跌至 8.3%，WMAR 至多 7.3%。具体代价是语音质量下降约与 KGW 相当，Moshi 非空回答上预测分均下降约 0.1，Redwing 在其他预测器上保持同行最高。反例是 DAC16 上事后 CRAW 优于本文方法，本文方法仍优于所有记号域基线。AudioSeal 在部分编解码器下检出率回升但同时误报大量未加水印回答，例如 Mimi 八遍后误报 10.5%，因此其高检出率不能直接解读为水印存活。下图展示 Moshi 上每种编解码器逐遍的完整衰减，横轴为遍数 0 至 8，纵轴为检出率百分比，0 遍为恒等条件即直接重编码 1 次。图前导读已说明观察顺序，重点是区分逐渐衰减与首遍即消失的两类模式。

> **看图路径：** 1. 先看横轴遍数从 0 到 8 与纵轴检出率百分比的范围，确认每子图对应一种编解码器；2. 再对比蓝色 Redwing 曲线与其他曲线随遍数下降的速度差异；3. 最后观察空心标记位置，确认哪些条件下未加水印误报已超过 5%

[![原论文 Figure 6：Detection on Moshi after every pass of each codec.](https://arxiv.org/html/2609.33774v1/r_a_passes_moshi.svg)](https://arxiv.org/html/2609.33774v1/r_a_passes_moshi.svg)

*论文图 6。原论文 Figure 6:：“Detection on Moshi after every pass of each codec.”。*

从像素可见，蓝色 Redwing 曲线在多数子图中随遍数缓慢下降，而橙色 KGW 与粉绿 WMAR 曲线在 Mimi 等子图中首遍后即大幅跌落。事后方法在首遍 Mimi 后几乎归零，CRAW 维持稍久但四遍后消失。DAC16 子图中各曲线交织，Redwing 并非最高，这是必须保留的未胜出项。高保真子图中多条曲线保持高位，说明本文优势集中在低码率神经编解码器反复重合成，而非所有压缩。

### 换到 TTS 与外来编解码器，结论还成立吗？

迁移问题是：为每个 TTS 自带编解码器重建基与函数后，原生 8 遍与外来 8 遍是否仍最高？公平条件是各自模型上同样的代价对齐与固定阈值。下表整理原生 8 遍的关键数字，数值与单位与原文连续句逐字一致。

| 模型与条件 | 指标 | Redwing | KGW | 事后上限 |
| --- | --- | --- | --- | --- |
| CosyVoice3 原生 8 遍 | 检出率 | 84.7 % | 9.2 % | 32.4 % |
| MOSS-TTS 原生 8 遍 | 检出率 | 99.8 % | 6.2 % | 32.4 % |

上表支持迁移结论：CosyVoice3 上 84.7% 对 9.2%，MOSS-TTS 上 99.8% 对 6.2%，事后方法至多 32.4%。新增对照是外来编解码器：在 14 组模型与外来低码率编解码器配对中 12 组保持 50% 以上，最弱的是 MOSS-TTS 经 Mimi，但该格无其他方法超过 10%。质量代价是 CosyVoice3 上各预测器变化至多 0.01，MOSS-TTS 上预测分下降 0.12 而 KGW 下降 0.09。下两图分别给出两个 TTS 逐遍结果，原生为各自原生重合成。图前导读要求先看原生再看外来，重点是验证原生优势是否延续到外来。

> **看图路径：** 1. 先确认第一子图原生结果为模型自带编解码器的逐遍结果；2. 再看外来 Mimi 与语音记号化器子图中两条曲线的分叉点；3. 最后检查高保真子图中各曲线是否都保持高位

[![原论文 Figure 7：Detection on CosyVoice3 after every pass of each codec.](https://arxiv.org/html/2609.33774v1/r_a_passes_cosyvoice3.svg)](https://arxiv.org/html/2609.33774v1/r_a_passes_cosyvoice3.svg)

*论文图 7。原论文 Figure 7:：“Detection on CosyVoice3 after every pass of each codec.”。*

在 CosyVoice3 像素中，原生与外来子图的蓝色曲线全程居顶，外来 Mimi 对该模型仍有明显压制但仍高于橙色 KGW。空心标记多出现在 AudioSeal 曲线上，对应误报超 5% 的格子，解读时应排除。

> **看图路径：** 1. 先看原生子图中蓝色曲线是否全程接近顶部而橙色曲线快速跌落；2. 再对比外来 Mimi 子图中蓝色曲线的下降幅度；3. 最后观察其他子图中事后方法的起伏与空心标记

[![原论文 Figure 8：Detection on MOSS-TTS after every pass of each codec.](https://arxiv.org/html/2609.33774v1/r_a_passes_moss.svg)](https://arxiv.org/html/2609.33774v1/r_a_passes_moss.svg)

*论文图 8。原论文 Figure 8:：“Detection on MOSS-TTS after every pass of each codec.”。*

在 MOSS-TTS 像素中，原生子图蓝色曲线几乎水平居顶，外来 Mimi 子图蓝色曲线下降最明显但仍高于其他曲线。高保真子图中多方法保持高位，再次说明高保真条件下事后方法本就很强，本文的增量主要在低码率反复重合成。

### 去掉哪一块，8 次 Mimi 后的检出率掉得最多？

消融按每次去掉一个组件组织，测的是 Moshi 测试集 8 次 Mimi 后检出率，条件是各自预算匹配强度。随机基加同样有界求解保留 52.3%，转移矩阵前导奇异向量基保留 68.5%，而本文谱基为 80.7%，支持替换图结构的作用。固定随机函数只保留 16.8%，用嵌入函数代替检测函数保留 76.5%，支持分离求解但差距小于基的选择。无幅值界时预算只允许强度 0.07，保留 18.7% 且预测分明显低于所有变体，支持限幅把偏置分散到多记号。

例外仍是 DAC16，该格上替代基与用嵌入函数检测反而更好，说明拟合自带通道的基对外来通道并非普遍最优。短回答是另一失败条件：无攻击下几乎所有漏检与八遍后多数漏检来自至多 4 秒回答，8 秒以上回答无攻击下全部检出。信号处理攻击中，本文方法在噪声、滤波与混响下接近无攻击水平，10 分贝噪声与 4 比特量化损失最大，音高变化下去除全部事后水印而本文保持 67 至 100%，但子帧平移、速度变化与裁剪会移除多数记号水印，事后方法不受平移与裁剪影响，二者互补。

### 哪些边界本文未评测或明确偏弱？

第一，优势边界是低码率神经编解码器重合成，对接近原波形的高保真编解码器应选事后方法。第二，帧对齐是短板：检测器只搜正负 2 帧整数偏移，整帧平移无代价，子帧平移、速度变化与裁剪会错开帧网格并移除多数水印，原文未验证多子帧偏移编码的检测器，只指出它可能恢复分数平移但不能处理变速，且会增加计算与阈值。第三，函数拟合于单一自带编解码器，对多编解码器计数联合建基的想法只提出未验证。

第四，短音频证据少，阈值固定时长无关，短回答天然处于劣势。第五，比较中 HiPT 因名义 1% 水平下误报几乎所有未加水印 Moshi 回答而被略去，Aligned-IS 移植后在 Moshi 上接近误报率而未进入主比较，复现时不应把这两者的缺席理解为同条件落败。第六，质量只用自动预测器度量，未测量人评误判率与延迟，不能承诺这些量同步改善。

### 要复现，先准备什么，按什么顺序算？

先准备数据与模型：20 小时 LibriSpeech 固定种子抽取，Moshi、CosyVoice3、MOSS-TTS 发布权重与各自编解码器，WildVoice 问题与文本划分按拟合验证测试校准分离，替换计数与生成统计互不重叠。再按顺序计算：编码解码再编码并在正负 3 帧内按首流一致选偏移，对齐后计数并取支撑集，建无自环图与拉普拉斯，取 16 个非平凡特征向量为基，记录无水印生成的采样分布得信号与代价矩阵，回收记号得零假设均值与协方差，交替求解有界问题得系数。

强度选择必须用验证集实测散度而非 1 阶预测，尤其 CosyVoice3 因截断重抽与重归一化使预测低估，应选实测代价不超 KGW 预算的最大网格值。阈值按校准集第 1% 分位设定并全程冻结，WMAR 阈值须用其微调编解码器重编解码的无水印回答重标。评估时报告固定阈值检出率、受攻击未加水印误报率、质量预测器与每帧散度 3 类量。演示页当前可用，地址为原文给出的演示链接，完整代码待法律审查后发布，因此第三方当前只能按描述重算而不能直接运行官方库。资源状态是正文开源声明的唯一依据，本次收到演示资源状态为可用，故可写当前可用。

### 何时值得尝试，还需补哪项验证？

当部署的语音模型经低码率神经编解码器分发、且调用方允许与 KGW 相当的采样扰动时，值得尝试把替换结构做成谱基并分离求解读写函数。不值得的情形是渠道以高保真压缩为主、音频很短、或必须容忍裁剪与变速，此时事后水印或同步更强的检测器更合适。复现先做替换计数与参与比检查，确认深流是否存在单记号模态，再做预算匹配的强度网格与固定阈值评估。

还需补的验证包括多编解码器联合计数是否改善外来通道、子帧同步检测器的误报代价、人评质量与实际延迟。中心判断是重编码不是纯噪声，其转移结构可作为设计原则，但该原则的有效半径止于帧对齐与拟合通道的邻域。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.33774)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-30/)
