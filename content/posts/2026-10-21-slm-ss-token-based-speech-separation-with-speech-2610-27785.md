---
title: "SLM-SS: Token-Based Speech Separation with Speech Language Models"
date: 2026-10-21
draft: false
tags: [语音分离, 自回归模型, 神经编解码与离散单元, 语音]
categories: [论文速递]
description: "SLM-SS 把多人分离变成先用自回归模型生成零阶码本的说话人串接序列、再用非自回归模块补高阶残差码本的符号生成问题，在 Libri2Mix 上以可听质量和可懂度为主要收益，代价是依赖编解码器上限、序列变长和离线解码开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.27785"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "SLM-SS：把多人混合语音变成离散符号再逐个生成"
paper_digest_original_title: "SLM-SS: Token-Based Speech Separation with Speech Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.27785v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.27785v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.27785v1.pdf"
paper_digest_primary_task: "语音分离"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-separation","label":"语音分离"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.neural-codec","label":"神经编解码与离散单元"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "SLM-SS 把多人分离变成先用自回归模型生成零阶码本的说话人串接序列、再用非自回归模块补高阶残差码本的符号生成问题，在 Libri2Mix 上以可听质量和可懂度为主要收益，代价是依赖编解码器上限、序列变长和离线解码开销。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chenda Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianhua Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yiming Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wei Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiahe Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xin Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yanmin Qian"}]
paper_digest_abstract_sha256: "211a3b4bac0bfa396dc2bd6d8ee015e86f933f74b12e88cb0a1e558e33e4a50e"
paper_digest_sidecars: {"citation.bib":{"sha256":"9b4a6e98059ca001253f703d2ae25a64324d10de4d73aff93bb8277e28d9deae","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27785/citation.bib"},"citation.json":{"sha256":"39e903c76ad4b3403ab0e646fbcaf10f5dc46c4041833eeb6309216f72a9a5c0","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27785/citation.json"},"citation.ris":{"sha256":"0046053a89cb1c30b1798b55c45486cf46c88369d6d3c75389818b04e054666c","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27785/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"6a40f358a0ff457c0ed138924e6795aa460eeadd5bdb695f9ee2ef66ef4eaad8","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27785/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "87de5fdb912ad0f30e0f5cd70401328851a532ae39cae049b890035f13a694ea"
paper_digest_api_reader_plan_sha256: "cd64e99eda50c6bbbf0480a63954d50c8cbb950820f4f9b456b2b3b1afe74fc4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "73cb30304aeed63a85c3efc10e7741c99811e62ad0d897f20ce22b5cd9939aeb"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "a8b60a812bb309588819b524bfb3a3cf39a4293c09687fe877ad2362465980f4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bd0f160d25cef5c3bf40cf0851013c8332a661f61bf5b1a3e39831b8e138f834"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6d39b1522d4aee3ceea5c223ca99101d1cf8efc481a1893396e344439092dd09"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 SLM-SS：把多人混合语音变成离散符号再逐个生成

> 英文题目：*[SLM-SS: Token-Based Speech Separation with Speech Language Models](https://arxiv.org/abs/2610.27785v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation) → [语音分离](/audio-paper-digest-blog/papers/?concept=task.speech-separation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[向量量化](/audio-paper-digest-blog/papers/?concept=method.vector-quantization) → [神经编解码与离散单元](/audio-paper-digest-blog/papers/?concept=method.neural-codec)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chenda Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianhua Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yiming Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Wei Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiahe Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xin Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Yanmin Qian：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是单通道多说话人重叠混合波形，困难是既要分开各说话人波形，又要保持语言内容可懂，处理过程是把混合声连续编码再生成各说话人的离散表示并解码回波形。方法把干净语音先用神经编解码器（neural codec）离散为多码本 token 序列，再用串行输出训练（Serialized Output Training，SOT）把多说话人序列拼接为一个目标序列。自回归（autoregressive，AR）编码器-解码器预测含说话人切换符的零阶码本，确定说话人顺序和粗略语义内容。非自回归（non-autoregressive，NAR）模块以低阶码本为条件补全高阶残差码本，或按说话人分段独立补全以降低复杂度。在 Libri2Mix 测试集上，带按说话人 NAR 的 Encodec 版本词错误率（word error rate，WER）为 6.92%，低于 SepFormer 的 17.77% 和 BSRNN 的 20.02%，但高于 TF-LocoFormer 的 5.88%。单码本 WavTokenizer 版本省去 NAR，在 6 个受试系统盲听中平均分最高，其非侵入式质量优势在带噪和中文混合上仍然存在。结论适用于模拟混合和给定的编解码器配置，长序列下说话人边界错误和四说话人数据不足仍是失败来源。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多人混合语音要解决什么输入和输出问题

输入是一段包含两个或更多说话人同时说话的单通道混合波形，有时还混有噪声，目标是输出每个说话人各自干净的单人波形。评价时既要看波形是否接近原干净语音，也要看分离结果能不能被语音识别和说话人相似度等下游任务直接使用。

传统判别式方法直接学掩码或映射，用波形级目标优化，重建波形分数容易做高，但输出常带有失真和伪影，会损伤可懂度和语言结构。生成式思路则希望建模干净语音本身的分布，输出更连贯自然，但扩散和流模型需要多次迭代采样，速度慢且可能产生不存在的内容。SLM-SS 选择第三条路：把语音先离散成符号，再用语音语言模型做序列生成。

### 已有分离和语音语言模型各负责什么

时频域分离在语谱图上预测掩码或映射再反变换，代表有 Deep-CASA 和 BSRNN，需要处理相位；时域分离直接在波形或学到的隐表示上加掩码，代表有 TasNet、Conv-TasNet、SepFormer、MossFormer2 和 TF-LocoFormer，近年还出现支持可变说话人数的提示和吸引子机制。

语音语言模型一侧，VALL-E 和 Seed-TTS 把编解码器符号和文本拼成统一词表做自回归续写，Seed-ASR 和 FireRedASR 把大语言模型用于识别，TSELM、UniSep、OpenSep、SEL M 等把离散符号用于目标说话人提取、增强和通用分离。TokenSplit 还同时做分离、识别和合成。本文的不同在于不依赖条件提示和外部属性，直接对多说话人结构做显式序列建模。

### 为什么波形指标好不等于下游任务好

论文要解决的具体矛盾是：按信号失真优化的分离系统在波形指标上好看，但分离语音送入识别和说话人确认时错误仍然多。原因一是掩码估计会在重叠严重或能量不平衡处产生过抑制，把某些音段直接抹掉；二是逐点波形损失不直接约束语言连贯性。

因此作者把分离重新定义为可懂度优先的符号生成：输入仍是混合波形，中间目标是每个干净语音经编解码器量化后的多码本符号序列，输出是经解码器重建的单人波形。必须保留的信息是说话人个数、每段的语言内容和说话人特性，允许牺牲与原波形逐点对齐的精度。

### 一条混合语音如何变成多段分离语音

整体流程沿一个混合样本可以分成四步。第一步是标签准备：把构成该混合的每段干净语音分别送进 Encodec 编码器，得到多码本符号，再按说话人出现先后拼成一条串接序列。第二步是自回归模型读混合波形，一次生成零阶码本的串接序列，确定说话人顺序和粗内容。第三步是非自回归模型以低阶符号为条件，逐阶补出高阶残差码本。第四步按切换符把完整序列切成单人多码本，再各自送编解码器解码成波形。

下图是论文给出的总览，4 个面板正好对应上述四步，箭头标明了混合特征、零阶预测和低阶符号在不同阶段的流向。

**连续混合编码器 × 离散符号输出：** 连续混合编码器负责直接从叠加波形提取可分离的声学表示，离散符号输出负责把重建目标限定在干净语音的码本分布上，前者避免把混合语音先送进只见过单人语音的编解码器，后者让生成结果更偏向连贯可懂的语音而不是波形逐点拟合。

> **看图路径：** 1. 先看左上面板干净语音如何变成码本再拼成一条标签；2. 再看左下面板混合语音如何经编码器和交叉注意力生成零阶序列；3. 再看右下面板低阶符号如何逐阶变成高阶符号；4. 最后看右上面板预测序列如何按切换符切开再送解码器

[![原论文 Fig. 2：Overview of SLM-SS. (a) Encodec quantizes single-talker audio into multi-codebook sequences, then…](https://arxiv.org/html/2610.27785v1/pipeline.svg)](https://arxiv.org/html/2610.27785v1/pipeline.svg)

*论文图 2。原论文 Fig. 2:：“Overview of SLM-SS. (a) Encodec quantizes single-talker audio into multi-codebook sequences, then merges them using SOT for the training label preparation.”。*

上图确实可见训练标签、混合编码、零阶生成、高阶精修和切分重建 5 个关键对象，以及编码器到解码器的交叉注意力连接。它帮助理解为什么连续端处理混合、离散端只负责输出：混合端的纠缠表示不适合直接量化，而输出端用干净语音的符号约束生成方向。

\[\mathbf{O}=[\mathbf{o}_{0},\mathbf{o}_{1},\dots,\mathbf{o}_{M-1}],\]

### 干净语音如何变成可训练的串接符号

Encodec 对每段单人语音做残差向量量化。零阶码本携带最主要的谱时间结构，高阶码本编码剩余残差。每阶基础词表大小都是 1024，再统一加入起始符、说话人切换符和结束符，得到每阶大小为 1027 的词表。不同阶即使编号相同也不共享含义，只有 3 个特殊符号在各阶语义一致。

对一个混合样本，假设它由若干段干净语音叠加而成，先对每段分别量化得到多码本序列。对第 m 阶，把各说话人的符号按先入先出顺序排列，相邻说话人之间插入切换符，首尾加起始和结束符，就得到该阶的训练标签。举例说明：若说话人 A 先出现、B 后出现，则零阶标签形如起始、A 的零阶符号、切换、B 的零阶符号、结束。

**神经音频编解码器 × 残差向量量化：** 神经音频编解码器负责把连续波形压成离散符号，残差向量量化负责把这种压缩分成多层：零阶码本保留主要的谱和时间结构，高阶码本只编码前一层剩下的残差细节，二者搭配后分离模型只需先生成信息量最大的零阶序列，再逐步补细节。

**串接式输出训练 × 说话人切换符：** 串接式输出训练负责把多个说话人的符号流拼成一条训练目标，说话人切换符负责在其中标出分界，组合后模型可以用一个序列同时学会说话人排序、切分位置和每段的内容，而推理时数切换符就能知道有几个说话人。

\[\mathcal{L}_{\mathrm{AR}}=-\sum_{n=1}^{N}\log{q}_{0}^{n}\!\left(o_{0}^{n}\right),\]

### 自回归模型怎样定下顺序和粗内容

编码器采用预训练 WavLM-large 并做微调，把混合波形各层表示经线性融合和层归一化聚成统一混合表示。解码器沿用 Whisper-medium 的维度配置但从零训练，层数减到 16 层，总参数约 600M。训练时以教师强制方式输入零阶历史符号和混合表示，逐位置预测下一个零阶符号，损失是标准交叉熵。

推理时用束搜索生成完整零阶串接序列，束宽为 20，并加空白抑制和 N 元组阻塞以避免空输出和无限重复。零阶序列一旦生成，说话人个数就由切换符个数决定，切分边界也随之确定，后续所有高阶精修和波形重建都依赖这一步。论文指出自回归长度随说话人数线性增长，因此编码器容量不足时错误会沿序列累积。

温度实验表明默认温度 1.0 最稳，偏低会过于自信而僵硬，偏高会导致符号轨迹不稳和内容漂移，这与编解码语言模型中温度控制保真度和多样性的经验一致。

### 非自回归模块如何补出高阶残差

非自回归解码器与自回归主干结构相同，但去掉单向注意力掩码，可以并行预测整条高阶序列。关键设计是为每 1 阶准备独立的符号嵌入层并共享位置嵌入，再加一个由目标阶索引编码得到的任务嵌入，明确告诉模型当前要预测第几阶。预测第 m 阶时，把 0 到 m 减 1 阶的符号分别嵌入后相加，再加位置和任务嵌入，得到总输入嵌入，送入 Transformer 做深层交互，最后投影到第 m 阶的嵌入空间得到词表分布。

下图展示了这种多嵌入相加和任务嵌入注入的结构，左侧是低阶信息的汇合，右侧是当前阶的投影输出。

> **看图路径：** 1. 看左侧多路低阶符号如何各自过独立嵌入层再相加；2. 看位置嵌入和任务嵌入在何处加入总嵌入；3. 看右侧输出如何经层归一化和投影回到当前阶词表

[![原论文 Fig. 3：Detail of NAR Decoder. NAR decoder integrates all low-order sequence information by employing…](https://arxiv.org/html/2610.27785v1/NARdetail.svg)](https://arxiv.org/html/2610.27785v1/NARdetail.svg)

*论文图 3。原论文 Fig. 3:：“Detail of NAR Decoder. NAR decoder integrates all low-order sequence information by employing multiple independent token embeddings.”。*

上图可见低阶符号先各自嵌入再求和，位置和任务嵌入随后加入，底部还有来自混合编码器的交叉注意力。这解释了该模块为何比纯符号条件的 VALL-E 精修更依赖声学条件：它同时看混合表示和已生成的低阶符号。

训练目标是对所有高阶码本求交叉熵之和。直接对每个样本求全部阶的和会因条件依赖而显存过大，实际做法是每个样本随机采样一个目标阶做无偏近似。主实验只建模前 8 阶而非全部 32 阶，因为阶数越高需要联合的条件越多，收敛越慢，而前 8 阶已保留大部分可懂度和语言信息。

\[\mathbf{E}_{m}=\Bigg(\sum_{\ell=0}^{m-1}\mathrm{Emb}\big(\mathbf{o}_{\ell};\mathbf{W}_{\ell}\big)\Bigg)+\mathbf{P}+\mathbf{T}_{m},\]

\[\mathcal{L}_{\mathrm{NAR}}=-\sum_{m=1}^{M-1}\sum_{n=1}^{N}\log{q}_{m}^{n}\!\left(o_{m}^{n}\right).\]

### 逐说话人精修和单码本方案省了什么

联合多说话人精修要在一条含切换符的长序列上同时建模说话人切换和高阶残差，计算量随码本数二次增长。逐说话人方案先用零阶预测的切换符把序列切成单人段，再对每段独立运行非自回归模型：输入是混合表示加该说话人已累积的低阶符号，输出是该说话人当前阶符号，逐阶追加直到补齐，最后各自解码。这样高阶阶段不再建模跨说话人切换，任务更简单，稳定性更好。

WavTokenizer 方案则换用单码本编解码器，每段语音只用一层符号表示，词表从 1024 变为 4096，自回归主干直接生成完整目标，不再需要任何非自回归模块。代价是单层必须同时承担粗内容和细节，词表更大更冗余，论文因此比较了贪心、束搜索和 Top-30 随机采样 3 种解码。

**自回归解码器 × 非自回归精修模块：** 自回归解码器负责逐个符号向前生成零阶序列，决定说话人顺序和粗略语言内容，非自回归精修模块负责一次性并行补出高阶码本，前者解决分离和排序难题，后者解决多码本重建的效率问题，二者分工后长序列建模和细节重建不再挤在一个模型里。

**Encodec 多码本 × WavTokenizer 单码本：** Encodec 多码本用八层甚至更多层保留细节但需要额外精修模块，WavTokenizer 单码本用一层高信息密度符号完成重建，组合比较后可以看出编解码器设计本身决定了分离系统要不要第二阶段、训练多复杂以及偏向可懂度还是偏向听感。

### 模型用什么数据和步骤训练

训练数据是 LibriMix 的 16 kHz 最大长度干净版本，用 100 小时和 360 小时子集训练并在测试集评估，混合按原流程仿真得到，干净源已知可直接做监督。预处理先用语音活动检测切掉静音，既减少无用符号，也避免可变静音导致串接序列中说话人相对顺序错乱。模型训练 30 轮，初始学习率为 5 乘 10 的负 5 次方，前 3 轮线性 warm-up 后余弦衰减。

非自回归训练采用分阶段策略：先只训练由自回归零阶预测第 1 阶的任务，此时高阶嵌入不参与计算，再用得到权重在全部非零阶任务上继续训练，以稳定多阶收敛。推理束搜索、温度和解码策略的选择都在验证逻辑上与训练目标一致，没有引入额外的信号级损失。

### 在什么条件下比较判别式和生成式系统

基线包括 BSRNN、SepFormer、TF-LocoFormer 和 MossFormer2，都在同一 LibriMix 干净训练集上训练。评价分客观和主观两类。客观包括说话人相似度、用预训练 Whisper-base 算的词错率、Levenshtein 音素相似度、SpeechBERTScore、宽带 PESQ，以及非侵入式的 UTMOS 和 DNSMOS，还算了零阶符号与真值零阶符号之间的符号错率。需要注意两种编解码器的符号错率不可比，比较模型统一用 Encodec 算符号错率。

主观是 30 名不同年龄性别职业听众的盲听多刺激评价，每次只比 6 个版本以免难以判断，对象是从 8 个混合中抽出的 16 个单源样本，内容包括 3 种 SLM-SS 配置、2 个强判别基线和原始录音。公平性上判别基线输出按源活动时间截断，保证都在有效语音段上比较。由于自回归生成不强制与参考等长，PESQ 只能做延迟对齐和补零，仍会残留整体时长差异的影响。

上限设置也很关键：有效上限不是原始波形，而是同码本数重建的语音，例如 Encodec 前 8 阶重建被视为实际上限，因为离散化和截断本身就会带来不可逆损伤。

### 主结果在哪些指标上占优又在何处受限

先看核心比较问题：在相同 LibriMix 训练和测试条件下，SLM-SS 及其变体相对判别基线和编解码上限，在语言一致性、信号质量和听感上各有什么位置。指标方向是说话人相似度、音素相似度、SpeechBERTScore、PESQ、UTMOS、DNSMOS 和主观分越高越好，词错率和符号错率越低越好。

|  | Speaker & Linguistic Consistency | Speaker & Linguistic Consistency | Speaker & Linguistic Consistency | Speaker & Linguistic Consistency | Speaker & Linguistic Consistency | Signal | Non-intrusive | Non-intrusive | Subjective |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | Spk Sim.↑ | WER↓ | TER↓ | LPS↑ | SBS↑ | PESQ↑ | UTMOS↑ | DNSMOS↑ | Score↑ |
| GT | - | 5.19 | - | 1.000 | 1.000 | 4.64 | 4.09 | 3.59 | 78.41 ± 4.08 |
| GT-Encodec32 | 93.5 | 6.03 | 24.7 | 0.975 | 0.957 | 3.14 | 3.18 | 3.50 | - |
| GT-Encodec8 (UB) | 92.8 | 6.31 | 39.0 | 0.970 | 0.944 | 2.62 | 2.95 | 3.38 | - |
| GT-WavTokenizer | 92.7 | 7.58 | ∗47.3 | 0.964 | 0.939 | 2.33 | 4.01 | 3.67 | - |
| BSRNN | 92.9 | 20.02 | 65.1 | 0.916 | 0.903 | 2.37 | 2.96 | 3.02 | - |
| SepFormer | 93.4 | 17.77 | 70.0 | 0.949 | 0.910 | 2.78 | 3.21 | 3.15 | - |
| TF-LocoFormer | 91.6 | 5.88 | 68.3 | 0.973 | 0.919 | 3.51 | 3.79 | 3.56 | 79.23 ± 3.84 |
| MossFormer2 | 92.2 | 8.78 | 62.6 | 0.944 | 0.916 | 2.95 | 3.27 | 3.24 | 71.59 ± 4.56 |
| SLM-SS | 91.7 | 7.24 | 45.8 | 0.954 | 0.913 | 2.17 | 2.64 | 3.21 | 74.58 ± 4.21 |
| + Per-talker NAR | 92.3 | 6.92 | 41.7 | 0.959 | 0.925 | 2.30 | 2.88 | 3.36 | 76.83 ± 4.22 |
| + WavTokenizer | 92.3 | 8.97 | ∗66.8 | 0.923 | 0.921 | 2.06 | 3.95 | 3.65 | 81.41 ± 3.69 |

上表完整保留了原文的全部方法和指标列。可见 SLM-SS 词错率为 7.24%，明显好于 BSRNN 的 20.02% 和 SepFormer 的 17.77%，也好于 MossFormer2 的 8.78%，但不如 TF-LocoFormer 的 5.88%。加入逐说话人精修后词错率降到 6.92%，接近前 8 阶上限的 6.31%，各项指标全面提升。WavTokenizer 版本词错率回升到 8.97%，但 UTMOS 和 DNSMOS 以及主观均分最高，说明它偏向感知质量而非识别精度。PESQ 上生成式整体低于判别式，部分原因是时长漂移而非单纯波形失真。

下图从波形和梅尔语谱图直观解释了这种分化，左侧为两说话人、右侧为三说话人样本，行分别为混合、真值、前 8 阶重建、SepFormer 和 SLM 精修结果。

> **看图路径：** 1. 对比同一列 GT 和 GT8 在高频处的亮度变化；2. 观察 SepFormer 行中青色圆圈处是否出现能量空洞；3. 观察 SLM_NAR 行对应位置是否保留了谐波竖纹

[![原论文 Fig. 4：Comparison of time series and mel-frequency spectrograms across different models.](https://arxiv.org/html/2610.27785v1/demo_transposed_marked.png)](https://arxiv.org/html/2610.27785v1/demo_transposed_marked.png)

*论文图 4。原论文 Fig. 4:：“Comparison of time series and mel-frequency spectrograms across different models.”。*

上图可见前 8 阶重建丢失高频细节但共振峰结构保留，SLM 输出与其谱特性接近；SepFormer 保留更细谱分辨率，但在重叠严重或能量不平衡处出现青色圆圈标出的过抑制空洞，而 SLM 对应位置仍保留谐波竖纹。这支持了生成式保可懂度、判别式保波形细节但易抹掉弱音段的判断。

再看说话人数变化时的稳健性问题：只在两说话人或三说话人上训练测试与联合训练有何差别。

| Train | Test | Spk sim | WER | TER | LPS | SBS |
| --- | --- | --- | --- | --- | --- | --- |
| 2Mix | 2Mix | 90.2 | 8.84 | 51.1 | 0.936 | 0.900 |
| 3Mix | 3Mix | 87.3 | 12.12 | 63.7 | 0.895 | 0.870 |
| Joint | 2Mix | 90.2 | 8.80 | 50.7 | 0.939 | 0.903 |
| Joint | 3Mix | 88.8 | 9.94 | 61.3 | 0.915 | 0.875 |

上表选择了原文关于可变说话人数的全部行列。可见三说话人明显更难，单独训练时词错率从 8.84% 升到 12.12%。联合训练保持两说话人性能的同时把三说话人词错率降到 9.94%，其余指标也同步改善，说明更长的串接序列需要更多样的话者数组合来稳定边界预测。

### 温度码本数解码器规模如何影响结果

第一个消融回答自回归温度是否需要调。比较问题是在同一 SLM-SS 下温度取 0.5 到 1.5 时的说话人相似度、词错率、符号错率、音素相似度和 SpeechBERTScore，方向同主表。

| Temperature | Spk Sim.↑ | WER↓ | TER↓ | LPS↑ | SBS↑ |
| --- | --- | --- | --- | --- | --- |
| 0.5 | 38.9 | 49.08 | 69.3 | 0.581 | 0.695 |
| 0.9 | 73.1 | 10.20 | 56.9 | 0.900 | 0.845 |
| 1.0 | 91.7 | 7.24 | 45.8 | 0.954 | 0.913 |
| 1.1 | 77.8 | 9.73 | 52.0 | 0.949 | 0.895 |
| 1.5 | 54.2 | 64.55 | 87.8 | 0.178 | 0.497 |

上表完整保留了原文温度消融的全部行列。可见温度 1.0 时各项最好，偏离后迅速恶化，0.5 时词错率高达 49.08%，1.5 时达 64.55%。这说明默认温度已是稳健工作点，不需要额外调参也能避免欠多样或幻觉漂移。

第二个消融回答码本数与效果的关系。下图横轴为码本数 1 到 8，左轴词错率越低越好，右轴音素相似度越高越好。

> **看图路径：** 1. 看横轴码本数从 1 到 8 时蓝色 WER 曲线的下降速度；2. 看橙色 LPS 曲线在 6 个码本之后是否明显变平；3. 对比左右纵轴确认两条曲线方向相反但趋势一致

[![原论文 Fig. 5：Performance variation of WER and LPS with the number of codebooks.](https://arxiv.org/html/2610.27785v1/abla.svg)](https://arxiv.org/html/2610.27785v1/abla.svg)

*论文图 5。原论文 Fig. 5:：“Performance variation of WER and LPS with the number of codebooks.”。*

上图可见码本从 1 增到 4 时词错率急剧下降、音素相似度快速上升，超过 6 个后改善明显放缓。这与残差特性一致：前几层补的是可懂度关键信息，后几层多为细节，且建模成本随阶数上升而增大，因此选前 8 阶是兼顾效果和可行性的折中。

第 3 个消融回答解码策略和编解码器选择。比较问题是在 WavTokenizer 下贪心、Top-30 随机采样和束搜索在两说话人和三说话人上的差异。

| Dataset | Decode method | Spk Sim.↑ | WER↓ | LPS ↑ | SBS↑ |
| --- | --- | --- | --- | --- | --- |
| 2Mix | Greedy Search | 91.9 | 9.66 | 0.904 | 0.915 |
| 2Mix | Top-30 RS | 92.0 | 9.08 | 0.917 | 0.919 |
| 2Mix | Beam Search | 92.3 | 8.97 | 0.923 | 0.921 |
| 3Mix | Greedy Search | 87.2 | 11.41 | 0.906 | 0.910 |
| 3Mix | Top-30 RS | 87.8 | 11.03 | 0.908 | 0.911 |
| 3Mix | Beam Search | 88.8 | 10.18 | 0.915 | 0.913 |

上表完整保留了原文解码策略比较的全部行列。可见束搜索在两种话者数下都最好，Top-30 随机采样一致好于贪心，作者归因于更大更冗余词表对偶发过自信选择的容忍。这也说明单码本简化了流程，但解码充分性仍影响最终精度。

### 哪些结论超出当前证据就不再成立

上限首先受编解码器限制。即使恢复全部 32 阶，重建仍有信息损失，只保留前 8 阶时损伤更大，因此 SLM-SS 不可能超过同码本重建的上限。增加码本有助于可懂度，但每预测 1 阶都要条件于所有低阶，优化难度和计算随阶数增长，这是信息完备性和可训练性的直接权衡。

说话人数增加会拉长串接序列，使自回归对早期切换符错误更敏感，可能出现边界偏移、说话人混淆或人数误判。四说话人实验仅用小规模数据微调 3 轮后验证损失即上升，混淆矩阵显示四说话人准确率明显低于两三说话人，且多为低估，说明高话者数结论依赖数据规模和早停。

域外泛化只在带 WHAM!噪声的 Libri2Mix 和基于 AISHELL1 仿真的中文两说话人混合上验证，且训练仍是干净英文。非侵入听感优势在噪声和中文上保持，但词错率和字符错率上大模型仅在噪声集超过判别基线，在中文集仍略逊于 TF-LocoFormer，不能推广到真实混响、信道失配和自发语音。

### 复现第一步要准备什么

复现应从数据仿真和符号准备开始：按 LibriMix 流程生成混合，保留每段干净源的活动时间戳，先做语音活动检测去静音，再用对应编解码器分别量化得到多码本标签并按先入先出拼成串接序列。编码器用 WavLM-large 初始化并微调，解码器按 Whisper-medium 维度从零训练但减到 16 层，训练时只优化符号交叉熵。

关键超参数是束宽 20、温度 1.0、学习率 5 乘 10 的负 5 次方、30 轮加前 3 轮 warm-up 和余弦衰减，非自回归先单阶后多阶的分阶段训练。评估要用同一 Whisper-base 算词错率并按活动段截断，符号错率分编解码器各自计算不可跨比，主观评价每次不超过 6 个版本。

关于可用性，本文证据中没有任何归属明确且完成可达验证的作者资源，因此不能声称代码模型或数据已公开，需要按原文描述自行实现或联系作者获取。

### 什么时候值得尝试还缺什么验证

当下游更看重可懂度和听感而非逐点波形拟合时值得尝试 SLM-SS，例如多说话人识别前处理或助听等对伪影敏感的场景。逐说话人精修适合想在不大幅增加流程下接近码本上限的情况，WavTokenizer 单码本适合想省掉第二阶段、换取更好主观听感的情况。

还缺的验证包括真实噪声混响下的端到端识别收益统计显著性、长时多轮对话中的说话人切换稳定性，以及编解码器与分离目标联合优化能否同时保住词错率和听感。未来工作应放在更少码本更高信息密度的符号设计、切换符的显式约束，以及更快解码和流式支持上。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.27785v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-21/)
