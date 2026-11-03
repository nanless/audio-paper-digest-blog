---
title: "Deployment-constrained key estimation with a DSP-guided transformer reranker"
date: 2026-11-03
draft: false
tags: [音乐分析, Transformer, 音乐, 高效推理]
categories: [论文速递]
description: "针对本地音乐应用在导入时需快速、小体积估计调性的问题，论文用确定性色度模板打分做初排，再用 2 万参数的 Transformer 结合帧级色度上下文做残差纠正，在 1000 首密封 FMAKv2 上把 MIREX 从 61.08 提高到 73.55，代价是增加 115 KB 模型和 76.7 MB 含 ONNX Runtime 的安装体积与每首 0.32 ms 推理。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.02408"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "小模型如何纠正色度模板的调性判断：DSP 引导的重排序器"
paper_digest_original_title: "Deployment-constrained key estimation with a DSP-guided transformer reranker"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.02408v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.02408v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.02408v1.pdf"
paper_digest_primary_task: "音乐分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-understanding","label":"音乐分析"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "Transformer"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "针对本地音乐应用在导入时需快速、小体积估计调性的问题，论文用确定性色度模板打分做初排，再用 2 万参数的 Transformer 结合帧级色度上下文做残差纠正，在 1000 首密封 FMAKv2 上把 MIREX 从 61.08 提高到 73.55，代价是增加 115 KB 模型和 76.7 MB 含 ONNX Runtime 的安装体积与每首 0.32 ms 推理。"
paper_digest_authors: [{"affiliations":["Cue Labs"],"name":"Pardis Noorzad"}]
paper_digest_abstract_sha256: "69d9f62fa1beffa41552518b096e55360a31b84703bb4b2afd32728a57b96e80"
paper_digest_sidecars: {"citation.bib":{"sha256":"5430829b581e96dcbe81a544d8eda4d151953b421bf0435f1494aa71ba77d3ab","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02408/citation.bib"},"citation.json":{"sha256":"6848a7f037e73c7a447cffbf7d1d32b552bcc4778b298fcc33d2e0653bd6aa77","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02408/citation.json"},"citation.ris":{"sha256":"b2d1c5953042e01a3fe87ca5f5742f19ff267b513899630eabbf340bd1ce6413","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02408/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"5784f353dbdec36efb4e78b1fa9abde140aefe4bad49d7d081f0ec96c0c21164","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02408/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "2f1717da2aeea96680e052a6924059c079b644ce8ea7fe1436d42b0f69d20870"
paper_digest_api_reader_plan_sha256: "b977f4e1fb4a9613428a17519ebbdb50e186afc1f2f7d16a52a2fc84f6da0b97"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "182e8518f570cb1a0ad5195ab7009270054f1fa65c13e95a554f92d2246bc62c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "cc51e8651fc28627ac5f241252b260764ccfa671a30378c26e8fc292354400a9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "5b81c4a402c2cae202b3b21c9f869a5b9c4802f00fa69115411dcf92205a8a7c"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "536f3fb07ee8ca225578f18a12a4635d4389d8512cdefb8bf76949fa6d4570a2"
paper_digest_api_reader_resource_count: 6
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 小模型如何纠正色度模板的调性判断：DSP 引导的重排序器

> 英文题目：*[Deployment-constrained key estimation with a DSP-guided transformer reranker](https://arxiv.org/abs/2611.02408v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding)
- **研究方法**：[Transformer](/audio-paper-digest-blog/papers/?concept=method.transformer)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Pardis Noorzad：Cue Labs

## 📌 核心摘要

本地音乐应用需在用户进程内随曲库导入分析整首歌曲音频并输出全局调性标签，流行与电子音色多变而安装体积与耗时预算极紧。两种色度前端分别以固定窗Goertzel滤波器组与常量Q变换提取帧级音高分布，经归一化平均为聚合色度后与24个大小调模板做皮尔逊相关并平均，得到24维相关分数向量。该向量与帧级色度序列共同进入小型编码器后端，序列经循环卷积与单层变换池化为24维序列对数几率，分数向量经单位矩阵初始化投影保留原始排序后相加，取最大值即为最终调性，使学习部分只做残差修正。循环卷积跨音高共享权重以保持移调结构，单位矩阵初始化使训练前对数几率已含原始打分，与取代分析器的做法不同。在密封的1000首FMAKv2子集上以三种子平均计，KL-FMAK的MIREX从KL-DSP的61.08提高到73.55±0.46，方向为高于基线。在同一密封的1000首FMAKv2子集上以三种子平均计，KL-FMAK的exact准确率从KL-DSP的52.30提高到67.07±0.65，方向为高于基线，同期同文件本地madmom参考的MIREX为74.16，KL-FMAK平均低0.61。该结论限于流行与电子训练域，古典声乐等更广语料尚未充分验证；在含ONNX Runtime口径下模型文件为115 KB、安装体积为76.7 MB、单曲增加延迟约0.32 ms。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/djpardis/trailmix/releases/tag/key-lime-paper-v1> — 链接可访问（HTTP 200）

- 第三方资源：<https://doi.org/10.5281/zenodo.23866516> → <https://zenodo.org/records/23866516> — 链接可访问（HTTP 200）

- 第三方资源：<https://usecueport.com> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/mixxxdj/libkeyfinder> — 链接可访问（HTTP 200）

- 第三方资源：<https://crates.io/crates/stratum-dsp> — 链接不可用（HTTP 404）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 本地导入场景为什么既要准又要小

这篇论文研究的任务是全局调性估计，输入是一首完整录音，输出是 24 类中的一类，即 12 个主音分别配大调或小调。对刚接触音乐信息检索的读者，可以把调性理解为全曲最可能的音高中心与调式，估计正确有助于显示、混音时的和声衔接。本地音乐应用在用户导入曲库时要在用户电脑进程内完成分析，一次可能处理几千首，因此二进制体积、依赖大小和单首耗时与准确率同样重要。

紧凑的色度模板法体积很小但在这批流行与电子音乐上准确率落后，而卷积或自监督大模型更准但安装体积达到上 100 MB。论文的目标就是保留原有本地分析器，只加一个很小的学习部件来纠正模板打分的排序错误。论文把确定性 trail mix 调性打分器称为 KL-DSP，把学习重排器称为 KL-FMAK，学习部分为 21528 参数的 Transformer，导出为 115 KB 的 fp32 ONNX 文件，在确定性 DSP 打分之上每首增加 0.32 毫秒推理，安装足迹 76.7 MB 中主要为 ONNX Runtime，部署比较中 madmom 与 S-KEY 分别为 174 MB 与 436 MB。

### 模板匹配、卷积网络与自监督路线有何不同

传统路线把帧级色度按时间聚合成直方图，再与 24 个固定调模板做 Pearson 相关，取相关最高者为调。论文提到 Krumhansl-Kessler 与 Temperley 模板面向古典调性，Faraldo 的 EDM 模板面向电子舞曲语汇，这说明模板的选择本身就带风格假设。卷积路线以 madmom KeyCNN 为代表，直接从标注色度帧学习音高类别间的相关，比固定模板更灵活，但需要模型文件与推理运行环境。

自监督路线以 STONE、S-KEY 和 MT2 为代表，利用移调一致性做免费监督，即同一音频移高 n 个半音，模型表示也应在调空间平移 n 格，通过跨功率谱密度等损失在大规模无标注数据上预训练。工具层面，Essentia、libKeyFinder 与 stratum-dsp 代表无独立学习运行时的本地 DSP 部署形态，论文把它们纳入体积比较，但准确率比较只在相同 1000 首清单上对本地可运行的 madmom 做同清单点估计，已发表的 S-KEY 与 madmom 全量 5489 首分数只作背景引用。

论文明确本方法是紧凑的全局调 DSP 分数重排器，保留本地部署形态，只增加 115 KB 模型与 ONNX Runtime 依赖，而非把分析器换成更大的学习系统，Essentia 报告 EDMM 档因其面向电子舞曲而非在密封集上挑选档。

### 基线差在哪里，重排序器要解决什么

论文的起点是 Rust 本地分析器 trail mix 中的调性打分器，文中称为 KL-DSP。它在密封的 1000 首 FMAKv2 子集上得到 61.08 的 MIREX，而同一批文件上的本地 madmom KeyCNN 为 74.16，差距约 13 个点。KL-DSP 本身已经计算了速度、拍点、波形摘要和 24 维调分数，重排序器的输入正是它已算好的东西，不另起一套大前端。要解决的具体问题是：在不把整个分析器换成大模型的前提下，能否用帧级色度的时间上下文对这 24 个分数做一次很便宜的重排，把一部分模板误判纠正过来。

论文明确只评全局调，不评局部转调，置信度定义为前 2 名相关的差值，但后续重排并不直接用该置信度做门控，而是报告无门控的重排结果。选择 trail mix 作基础打分器是因为它是目标本地分析器，已同时算出 24 维分数向量可直接被重排器消费，而对其他打分器分数向量的重排留作未来工作。

### 从波形到调名：两条支路在哪里汇合

沿一首歌走一遍流程会更清楚。音频先经两套互补的色度前端，一套是固定窗 Goertzel 滤波器组，一套是恒 Q 变换，二者归一化后平均得到帧级色度序列。DSP 支路把全曲聚合色度与来自多个模板族的 24 个模板做相关并在模板族间平均，得到 24 维原始相关分数向量。学习支路把前 256 帧色度送入一个很小的 Transformer 编码器，256 帧按约 8 Hz 的色度率对应约 32 秒，不足的曲目补零到同样长度，且导出模型不做填充掩码，均值池化时把补零帧也按训练时同样方式计入。

编码器输出经序列头得到 24 维序列 logits，再与经可学习矩阵变换的 DSP 分数相加，取和后最大下标为预测调。这种设计让模型容量集中用于改变排序的帧证据，而不是重学一套独立分类器。

下面这张结构图展示了序列支路、DSP 分数支路与参数分布，先看主路径再看汇合点。

> **看图路径：** 1. 从顶部帧级色度输入沿圆形卷积、位置编码、单层编码器、均值池化看到序列支路；2. 看右侧 DSP 分数如何经可学习的 W 与序列 logits 在 Sum logits 处相加；3. 核对各模块标注的参数量如何加总到 21528

[![原论文 Figure 1：KL-FMAK architecture and trainable parameter split.](https://arxiv.org/html/2611.02408v1/key-lime-architecture.svg)](https://arxiv.org/html/2611.02408v1/key-lime-architecture.svg)

*论文图 1。原论文 Figure 1:：“KL-FMAK architecture and trainable parameter split.”。*

图中可见顶部输入为帧级色度，经过 12 参数的循环音高卷积、位置编码、单层编码器、均值池化与层归一化，再经序列输出头得到 888 参数的分支；右侧 DSP 分数经学习矩阵与之相加后做 24 类取最大。6 个块加总为 21528 参数，对应 115 KB 的 fp32 ONNX 文件，这与正文的参数与体积陈述一致。编码器具体为单层、模型宽 36、四注意力头、72 维前馈块，训练用丢弃率 0.3 与权重衰减 0.05，DSP 分数向量是未经归一化的原始平均 Pearson 相关向量，直接送入单位阵初始化的投影，编码器学其上的残差修正。

### DSP 打分器如何得到 24 个分数

KL-DSP 的计算对象是全曲聚合后的色度向量与 24 个调模板。模板来自 Krumhansl-Kessler、Temperley、Faraldo EDM 以及一个在存档版本中用 GiantSteps Key 基准输出拟合的模板，论文特别说明该拟合模板没有使用 FMAK 或 FMAKv2 的音频与标签，因此不存在用评测标签反向拟合模板的问题。打分用 Pearson 相关，对大调小调模板对 across 不同模板族做平均，胜者定全局调，前 2 名相关差为置信度。这个向量未经归一化就直接交给重排序器的单位阵初始化投影，这是残差形式的关键：训练前 DSP 分数已经存在于 logits 中，编码器只需学修正量。论文还报告只训练该投影而不看序列的消融低于 DSP 基线，说明增益不是对 DSP 分数做查找表重加权就能得到。

**KL-DSP × KL-FMAK：** KL-DSP 是确定性色度模板打分器，负责对全曲聚合色度与 24 个大小调模板做相关并给出 24 维分数向量；KL-FMAK 是学到的重排序器，负责读入帧级色度序列并输出残差修正。二者搭配的意义在于保留本地分析器已算好的排序，只让小模型学习纠正排序错误的残差，而不是从零学一个独立分类器。

\[z=z_{\text{seq}}+W\,s_{\text{dsp}},\qquad\hat{y}=\arg\max_{k}z_{k},\]

上式要计算的是融合后的 logits 与预测，其中 z_seq 是池化后编码器的 24 维输出，s_dsp 是 24 维原始 DSP 分数，W 是 24×24 可学习矩阵并初始化为单位阵，预测取 z 中最大分量。符号都是向量与矩阵，运算是先变换 DSP 分数再逐分量相加，结果用于 softmax 与交叉熵。残差含义在于保留高置信 DSP 决策，把有限容量花在色度上下文能改变排序的帧上。部署含义同样明确：本地分析器已算出有用的 24 维 DSP 排序，学习后端只在小体积预算内纠正该排序，而非替换为独立分类器，帧序列正是让残差分支改善模板排序的证据来源。

### 循环输入卷积与等变结构省了什么参数

序列支路的输入级没有用普通的线性投影，而是用一个在 12 个音高类别上循环共享的 3 通道三抽头卷积。单通道色度进入后产生每帧 12×3 共 36 维特征，正好对接模型宽度 36。对一个半音旋转，即把音高轴循环平移 t 格的输入，卷积输出也做同样平移，这就是输入级的移调等变。动机是让有限训练数据不必为每个主音各学一套首层模式，跨调共享统计量。论文强调保证只在输入级成立，模型其余部分不受约束，因此不能把整个模型说成完全等变。参数上该级只用 12 个可学习权重，而线性投影需要 468 个，约 39 倍的差距，但 3 种子平均下两者准确率范围相近。

**chroma × 24 维 DSP 分数向量：** chroma 是按 12 个音高类别折叠的帧级能量表示，保留和声进行随时间的变化；24 维 DSP 分数向量是对整曲聚合色度与 24 个调模板做 Pearson 相关的全局打分。前者提供时间上下文证据，后者提供先验排序，重排序器把二者相加融合，帧证据决定是否推翻模板初排。

**circular input convolution × identity 初始化的 W：** circular input convolution 是在 12 个音高类别上共享权重的循环一维卷积，负责让输入级对半音移调具有等变结构；identity 初始化的 W 是 24×24 的 DSP 分数投影，初始化为单位阵使训练前 logits 中已包含原始 DSP 分数。二者分工是前端共享跨调统计、后端保留 DSP 先验，组合后小模型能以很少参数实现残差纠正。

\[g(R_{t}\,x)=R_{t}\,g(x),\]

上式约束的是输入变换 g 与移调操作 R_t 可交换，x 是 12 维音高向量，g 是共享核的循环卷积。它先在输入上移调再做卷积，等价于先卷积再对输出移调，这为跨调共享提供了结构先验，但后续注意力与前馈仍可学任意映射。论文将其与 STONE 和 MT2 以跨功率谱密度损失实现移调目标的精神关联，但此处是输入级的结构等变而非大规模预训练损失，最终模型保留该循环输入与单位阵初始化因其以可忽略的参数代价编码了移调与 DSP 残差结构。

### 训练用了哪些标签、增强与软目标

训练只用标签，没有用蒸馏作为最终模型。数据是 4040 首 FMAK 训练加 449 首验证，验证 MIREX 做早停，最多 25 轮，优化器为 AdamW，学习率 0.001，批量 16，丢弃率 0.3，权重衰减 0.05，24 类做类别平衡。课程学习按 DSP 前 2 名分数差排序，前 5 轮从高间隔易例线性过渡到全集。移调增强把输入序列、标签与 DSP 先验一致地旋转全部 12 个半音。软目标把 0.2 的质量按 MIREX 权重分给纯五度、关系调与同主音调邻居，纯五度含同调式两个五度方向，关系调遵循有向 MIREX 约定。蒸馏消融用冻结 madmom 做教师，权重 0.3、温度 4，但最终模型不用它，因为标签训练在 3 种子均值上已略高且差距未被样本分辨。

\[\mathcal{L}=\mathrm{CE}(q,p),\]

上式是 MIREX 感知的软目标交叉熵，p 是对融合 logits 的 softmax，q 是把 1 减 λ 放在真调独热上、把 λ 按 MIREX 权重分给邻调的目标分布，λ 取 0.2。它要约束的是让模型对音乐上相近的调也分配合理概率，而不是只优化硬分类，这与评测时给五度与关系调部分分的规则相呼应。编码器配置为单层、宽 36、四头、72 维前馈，输入取前 256 帧约 32 秒，短曲补零且无填充掩码，课程按 DSP 双候选间隔排序，早停用验证 MIREX，训练与验证划分见数据划分节的确定性哈希定义。

### 数据划分、指标与统计检验如何保证公平

FMAKv2 共有 5489 首带调标注的免费音乐档案音频，论文先密封 1000 首作为 holdout 并记录指纹，剩余 4489 首按确定性哈希分成 4040 训练与 449 验证，曲目 ID 无重叠。训练池用 FMAK 标签，holdout 用 FMAKv2 标签，后者修订约 200 处标注，因此标签源不完全相同，基线 61.08 也是用存档版本在该密封清单上重新生成。指标上 MIREX 加权分给部分分，exact 只计全对，方向都是越高越好。与确定性基线比较时，先对每首把 3 种子 MIREX 平均再减基线分，对 1000 个每首差值做自举得到 paired 95% 区间；McNemar 用精确二项检验比较配对的 exact 是否命中，不用于加权分。

与本地 madmom 的比较是同清单同文件的确定性点估计，再用种子平均的配对自举看差距是否被样本分辨。holdout 上的消融与灵敏度检查只作诊断，不用于选模型。

**MIREX 加权分 × exact 准确率：** MIREX 加权分按音乐关系给部分分，完全正确 1.0 分、纯五度 0.5 分、关系大小调 0.3 分、同主音大小调 0.2 分，否则 0 分；exact 准确率只计完全猜中调名调式的比例。前者衡量 harmonic 相近错误的宽容得分，后者衡量严格命中率，论文同时报告以区分纠正了多少近似错误与彻底错误。

**FMAK 训练集 × FMAKv2 密封 holdout：** FMAK 训练集是 4040 首带标注音频加 449 首验证，用于训练与早停选检查点；FMAKv2 密封 holdout 是事先用指纹锁定的 1000 首不参与选型的评测集，且标注版本有约 200 处修订。二者搭配的意义是用前者学参数、用后者做最终诊断，避免在评测集上调参带来的乐观偏差。

配对比较的具体执行是每首先对 3 个 KL-FMAK 种子取 MIREX 均值，再减去同首确定性基线分数，对 1000 个每首差值重采样得到自举区间；MIREX 权重为全对 1.0、纯五度 0.5、关系调 0.3、同主音 0.2、其余 0 分，密封指纹与曲目划分在存档发布中记录，训练用 FMAK 而评测用 FMAKv2 的标签差异需在解读增益时一并保留。

### 主结果：在同批 1000 首上提高了多少

核心结论只在密封 1000 首上成立。3 种子平均下重排序器把 MIREX 提高 12.47 点，把 exact 提高 14.77 点，代表种子 1729 因最接近均值被选为发布构件。论文报告代表种子的配对区间为正 9.51 到正 15.40 点，exact 的 McNemar p 值极小，说明相对 DSP 的提升在该样本上是可分辨的。与本地 madmom 相比，3 种子均值低 0.61 点 MIREX 但 exact 高 0.37 点，而种子平均的配对自举区间为负 3.27 到正 2.03，说明该点差距未被 1000 首样本分辨，不能说成超越或等价。已发表的 S-KEY 60k、1M 与 madmom 全量分数用的是全部 5489 首协议，与本地同清单数不能直接排名，论文把它们放在表中只作背景。

错误分析显示代表种子把 DSP 的 477 首非全对中的 244 首转为全对，同时把 97 首原来全对的降级，净增 147 首，这对应 exact 从 52.30% 到该种子 67.00% 的变化，降级分散在五度、关系、同主音与其他错误中。

下表比较的是同清单可运行策略的主结果，指标方向都是越高越好，公平条件是同一 1000 首密封集。

| 条件 | 指标 | DSP 基线 | 本方法均值 | 本地参考 |
| --- | --- | --- | --- | --- |
| 密封 1000 首 FMAKv2 | MIREX | 61.08 | 73.55 ± 0.46 | 74.16 |
| 密封 1000 首 FMAKv2 | exact 准确率 | 52.30 | 67.07 ± 0.65 | 高 0.37 点 |

上表的主要收益是重排序器在保持 DSP 分析器的前提下大幅缩小与本地卷积参考的差距，限制是与 madmom 的 0.61 点差距未被分辨，且已发表全量分数因协议不同不能混排。软目标质量的单种子灵敏度在 0.1、0.2、0.3 下未显示尖锐最优，因此 0.2 只是该样本下的可行选择。

下面这张散点图把准确率与安装体积放在一起，横轴为对数体积，需结合指标方向阅读。

> **看图路径：** 1. 横轴为对数刻度的安装体积，纵轴为 FMAKv2 MIREX，注意方向都是右侧和上方更好；2. 区分实心本地同清单点与空心 S-KEY 点，后者是本地体积加已发表分数的组合；3. 比较 KL-DSP、KL-FMAK 与 madmom 本地点在体积与分数上的相对位置

[![原论文 Figure 2：FMAKv2 MIREX against installed footprint (Table 3).](https://arxiv.org/html/2611.02408v1/fmakv2-accuracy-footprint.svg)](https://arxiv.org/html/2611.02408v1/fmakv2-accuracy-footprint.svg)

*论文图 2。原论文 Figure 2:：“FMAKv2 MIREX against installed footprint (Table 3).”。*

图中可见 KL-DSP 在最左侧低体积低分数处，KL-FMAK 跳到 70 分以上且体积约 76.7 MB，本地 madmom 在其上方附近但体积更大，S-KEY 空心点体积最大。libKeyFinder 与 stratum-dsp 在左侧中等分数，Essentia 因低于纵轴范围未画入，这说明体积比较的是可部署软件生态而非仅参数量。

### 增益来自序列证据还是调参技巧

消融要回答的是哪个部件真正提供了证据。只学 W 而不看序列的分支在 3 种子均值上低于 DSP 基线，这证明没有帧序列就无法改善模板排序，注意力之外的其他序列结构仍未穷举。去掉 DSP 间隔课程后为 73.16，接近最终行；随机初始化 W 与单位阵初始化数值相近；循环输入与线性输入在 3 种子均值上未区分，但前者输入级参数少得多。

标签训练与蒸馏的差距为 1.05 点，但配对区间包含零，因此蒸馏可选而非必需。检查选中种子的 W 发现对角平均 0.80，非对角绝对均值 0.225，音乐相邻项为正而其余为负，说明学到了提高相邻备选的结构，但光有它不够，还需帧证据。

下表整理消融中可被连续原句支持的差值与接近最终行的数值，比较问题是序列证据是否必要、课程与蒸馏是否带来可分辨增益。

| 比较 | MIREX 差值或数值 | 区间或结论 |
| --- | --- | --- |
| 标签减蒸馏 | +1.05 | 95% 区间[-0.43,+2.51]，未分辨 |
| 去课程 | 73.16 ± 0.62 | 接近最终行 |

上表说明被支持的增益来源是帧序列支路，课程、循环输入、单位阵初始化与蒸馏在 3 种子下显示相近均值而无可分辨增益。论文保留循环输入与单位阵初始化的理由是它们以可忽略参数代价编码了移调与残差结构，而非因为测得显著提升。跨语料只在 24 首舒伯特冬之旅 SC06 上检查，重排序器得 93.33 对 DSP 的 83.33，配对区间宽至负 3.75 到正 25.00，剩余两处皆为同主音混淆，因此只能说同一构件能纠正部分非和声错误， corpus 级泛化仍需更大古典库验证。

### 哪些结论不能推广，哪些误差仍在

首先是协议限制，已发表分数与本地同清单分数的曲目量与标注版本不同，不能直接说超过 S-KEY，只能说在密封 1000 首上接近本地 madmom 且差距未被分辨。其次是样本量限制，古典跨域只有 24 首，区间很宽，两个残留平行调错误提示同主音大小调仍是难点。第三是门控缺失，97 首降级说明无门控重排以平均 exact 最大化为目标，若部署更怕降级，需要另做置信门控保留部分 DSP 预测，而论文未评测该规则。第四是结构保证的范围，等变只在输入级成立，后续无约束，不能推广为全模型移调等变。最后是体积口径，76.7 MB 是含解压后 macOS arm64 ONNX Runtime 的实测评估包，不是纯 Rust 集成体积，去掉该运行时后约为 2.1 MB，但最终 Rust 应用构建体积尚未测量。

### 复现第一步做什么，需要哪些版本

复现应从论文锁定的版本起步，而不是自行重分数据。先获取 trail mix 的 key-lime-paper-v1 标签发布与 Zenodo 存档，核对分裂指纹、种子与证据标识，再用存档版本在密封清单上重算 61.08 的 DSP 基线，确认与本地 madmom 同清单点估计的流程一致。训练需 4040 加 449 的确定性哈希划分、256 帧输入、12 半音一致旋转、λ 为 0.2 的 MIREX 软目标与验证 MIREX 早停，3 种子报告均值与总体标准差。体积需区分模型文件 115 KB、trail mix 二进制 2.0 MB 与 ONNX Runtime 74.58 MB 三项，延迟需用批量为 1 的 ONNX Runtime CPU 执行、195 首导出夹具、预热一首后的条件复测，注意该夹具取自 holdout 池但仅用于延迟，不用于选型。论文提供的属于第三方可达的仓库与存档链接，不等同于作者已开源的声明，引用时应按链接现状核对。

下表是部署体积比较，问题是同为可安装软件生态时模型文件与依赖各占多少，单位为 MB，方向是越小越省。

| 系统 | 安装合计 |
| --- | --- |
| KL-FMAK | 76.7 |
| madmom | 174 |
| S-KEY | 436 |

上表显示 KL-FMAK 的模型文件远小于两者，安装合计约为 madmom 的 2.3 分之一、S-KEY 的 5.7 分之一，但主体是 ONNX Runtime 而非权重。KL-DSP 本身仅 2.0 MB，stratum-dsp 1.4 MB、libKeyFinder 0.8 MB 更小但在该 holdout 上分数更低，Essentia EDMM 体积 48.4 MB 而分数最低，这说明省体积仍需付出准确率代价。每首 0.32 ms 是叠加在 486 ms DSP 分析之上的批量为 1 CPU 推理，只在指定桌面与运行时版本下成立。

### 什么时候值得尝试，还缺哪项验证

当你已有一个本地 DSP 分析器且已算好色度与 24 维模板分数，又希望在不引入上 100 MB 大模型的前提下缩小调性差距时，这个残差重排思路值得尝试。它的适用条件很具体：输入是整首的帧级色度加 DSP 分数向量，输出是 24 类全局调，训练域是流行与电子为主的 FMAK，评测成立域是密封 1000 首 FMAKv2 与 24 首古典小样本。第一步应先复现 DSP 基线与本地 madmom 同清单点，再跑 3 种子验证序列支路的必要性，不要只看单种子最优。

还缺的验证是更大古典库的跨语料评估、更多学习基线的同清单测量，以及面向避免降级的置信门控评估。理解这三点后，就能准确复述关键步骤：双前端色度、模板相关初排、循环卷积加单层 Transformer 读上下文、与 DSP 分数残差相加取最大，并知道增益来自序列证据而非调参技巧。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2611.02408v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
