---
title: "Difference in Task Performance on Sparse Speech Representations"
date: 2026-09-12
draft: false
description: "该文用 k-稀疏自编码器把三种语音自监督特征压成不同稀疏度，再在 SUPERB 六任务上测出最优 k 各不相同，并用信息瓶颈解释为说话人与情感偏压缩、音素与识别偏保留，而输入层质量只能小幅移动该权衡。"
tags: ["模型压缩", "自监督学习", "模型评估", "语音", "语音识别"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.acl-long.1303"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.acl-long.1303/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.acl-long.1303.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1a9e59d0e60e75c628bdd1c1e63db5c75f8a7b93bc9ee3899556011cbd3ef72b"
paper_digest_api_reader_plan_sha256: "cc91df75629d6be2a5020f820e6c988a0dc78035f5b21a24e5cf37528e583306"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "091a0c225ce0ef66a94daf7511866cf7b5d743d2b507ae6a256116f856f9b2b7"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f93352f72fff0baab67f26c7f1d1d4172173fd1194dd1a7383635a5f61c5ea24"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "eabe62a3e24b3dd3d3445d6428ad711091b9823425350c19932644fc0dea85dd"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ccec41f23d5b355640d637864b4a29ad97006ed7803713c7fc874200ab11ce55"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.compression","label":"模型压缩"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "模型压缩"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 稀疏度不是越稀越好：六个语音任务在压缩与保留之间的分岔

> 英文题目：*Difference in Task Performance on Sparse Speech Representations*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.acl-long.1303`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1303/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1303.pdf)

标签：#模型压缩 #自监督学习 #模型评估 #语音 #语音识别

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.4/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Wenjie Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Hain：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

通用语音表示需同时支撑语音增强、说话人辨识、情感识别、音素识别、语音识别与语义理解等任务，各任务对说话人、内容与语义信息的压缩与保留需求相互冲突，单一稠密特征难以兼顾去噪与保真。该方法首先冻结 wav2vec 2.0、HuBERT 与 WavLM等自监督模型的表征作为输入，其输出的连续特征进入下一步作为稀疏编码的学习对象；接着训练k稀疏自编码器并用TopK算子显式保留每帧前k个激活，其输出的冻结稀疏码进入下一步作为下游评测的输入；然后保持稀疏编码器冻结，仅训练SUPERB轻量下游头完成六项任务评测；最后基于信息瓶颈计算潜变量激活与任务标签间的互信息，以解释不同任务的最优稀疏度 trade-off。与已有稀疏方法相比，关键机制差异在于用k直接控制L0范数来调节压缩水平，而非用L1正则间接诱导稀疏，其实质意义是使压缩强度可控可比，从而揭示音素与词任务偏好高稀疏、说话人与情感任务偏好低稀疏的分化规律。在电话识别任务评测设置下，阈值τ为0.9999时的电话错误率Phone Error Rate为9.98，低于阈值τ为0.9时的12.22。其结论适用边界在于仅验证英语及野外采集说话人语料、Base规模编码器首末层与有限维度和k网格，尚未验证大规模模型、多语与流式场景下的外推表现。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/openai/sparse_autoencoder> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/s3prl/s3prl> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么好表示不能只看一个任务的分数？

输入是原始波形经过冻结的语音自监督模型得到的每帧 768 维稠密向量，目标是得到对多个下游任务都有用的通用表示，必须保留的信息是各任务标签所需的判别线索，输出是下游任务在冻结稀疏表示上的性能分数。初学者容易以为表示越能重构输入就越好，但语音 1 帧里同时混着说话人、情感、音素和词等多种属性，不同任务需要的恰好是不同的子集。

白话说，自监督学习（Self-Supervised Learning，简称 SSL）就是不靠人工标签，而是靠从输入自身构造的预测任务来训练模型，例如遮挡后重构或区分正负样本；通用表示则指同一套特征能直接喂给多个任务而不重新训练特征提取器。论文的起点正是已有 SSL 稠密表示在 SUPERB 上很强，但把它们变稀疏后各任务会如何分化还不清楚。免免费午餐定理在这里的含义很具体：没有任何一种归纳偏置能对所有任务同时最优，因此必须实测稀疏这个偏置在不同任务上的代价和收益。

从语音产生机理看，人只用少数发音器官的缓慢姿态变化就能产生丰富语音，这提示稀疏可能是一种自然的编码方式，但它是否对所有语音任务都友好，需要用可控实验回答。

### 稀疏编码与信息瓶颈此前分别解决了什么？

同输入的路线是语音 SSL 表示分析，例如逐层探测哪一层更关联音素或说话人，这类工作只观察稠密表示，不主动控制稀疏度。同目标的路线是为大语言模型做字典学习式的稀疏自编码器解释，目的是把稠密激活拆成可解释的稀疏特征，但对象是文本而非语音帧。同监督的路线是用 L1 正则或 TopK 来学稀疏表示，其中 L1 会把激活幅度整体压向零，而 k-稀疏自编码器直接固定非零个数，缓解了幅度收缩问题。

同运行阶段的路线是在下游微调时用信息瓶颈（Information Bottleneck，简称 IB）来平衡压缩与保留，但通常只针对单个任务调权衡。本文的不同在于把稀疏度作为自变量，把多任务性能差异作为因变量，再用信息瓶颈作为解释语言。白话说，信息瓶颈就是用两项互信息来要求表示：既要忘掉输入中与标签无关的细节，又要留住能预测标签的信息。相关工作已经证明稀疏有助于可解释性和压缩感知，但没有系统回答在语音通用表示中不同任务的最优点是否相同，这正是本文要补的缺口。

### 论文要回答的两个具体问题是什么？

第一个问题是当稀疏程度连续变化时，6 个任务的性能如何变化，是否有的任务很敏感、有的任务几乎不动。第二个问题是如果某个稀疏度对某个任务最优，能从信息论上学到什么，即该任务更需要压缩还是更需要保留。教学例子：可以把稀疏度想象成每帧只允许点亮 k 盏灯，灯总数是 h，问题就是问认人、认情绪、认音素、认词这几件事各需要点亮多少盏灯。论文明确把任务差异定义为不同学习到的表示上任务性能的差别，而不是任务本身难易的差别。

研究范围限定为 6 个 SUPERB 任务：语音增强、说话人识别、语音情感识别、音素识别、字符与词片两套语音识别、语义槽填充，覆盖生成、说话人、副语言、识别和语义 5 个域。约束是自编码器训练只用无标签的 LibriSpeech 数据，下游评估时自编码器冻结，只训练下游头，这样性能差异才能归因于表示本身。

### 从一帧语音到下游分数的完整链路是怎样的？

沿一个样本走一遍：取一段朗读英语波形，先用冻结的 WavLM base 把每 1 帧变成 768 维向量 x；把 x 减去预偏置后乘编码矩阵再加编码偏置，得到 h 维预激活；用 TopK 只保留最大的 k 个值，其余置零，得到稀疏码 z；再用解码矩阵把 z 映射回 768 维得到重构；训练时最小化重构均方误差加死单元辅助损失。

评估时冻结自编码器，把 z 作为 SUPERB 各任务的输入特征，只训练任务头并在开发集上打分。白话说，编码器负责把稠密特征展开到更高维，TopK 负责做硬稀疏选择，解码器负责验证这种稀疏选择是否还能还原输入。

**自监督学习 × 稀疏自编码器：** 自监督学习负责提供已经包含说话人、内容和语义混合信息的 768 维稠密语音特征，它的分工是给出起点表示；稀疏自编码器负责把该起点映射到更高维再只保留 k 个激活，分工是施加稀疏归纳偏置做 2 次编码；二者搭配的理由是前者信息混杂无法直接比较任务差异，后者用可控的 k 把压缩程度显式参数化，组合意义是得到一系列压缩程度不同但重构目标一致的表示，便于公平比较任务对稀疏度的敏感性。

该链路的关键是 k 同时控制压缩强度和保留上限：k 越小，每帧能携带的不同模式越少，压缩越强；h 越大，能容纳的不同语音构型总数越多。论文让 h 取 2 到 6 倍输入维度，让 k 取 32 到 256，形成 20 种组合逐一训练和评估，从而把容量效应与稀疏效应分开观察。

### TopK、权重绑定与死单元阈值各自做什么？

编码与解码的计算目标都是重构输入，但实现分工不同。编码是线性变换加 TopK 截断，解码是线性变换回原维度。原文明确的实现包括把解码权重初始化为编码权重的转置以稳定早期训练，以及用辅助损失让长期不激活的维度去拟合残差。死单元的判定在本工作中改为按批次内不激活帧比例是否超过阈值，而不是固定计数阈值，这样能更好处理变长语音序列的批量更新。训练时只有被 TopK 选中的单元能收到梯度，未选中单元在该步不更新，这是 k-稀疏与 L1 的本质区别：前者是硬选择，后者是软惩罚。

**TopK 操作 × 死隐单元：** TopK 操作的分工是在前向时只保留每帧最大的 k 个隐单元并将其余置零，从而把 L0 范数精确固定为 k；死隐单元指在大量语音帧上始终不被激活的维度，它是 TopK 过强竞争的副作用；二者搭配需要用辅助损失和死单元阈值来挽救长期不激活的维度，组合意义是在保持严格稀疏的同时维持表示容量，避免有效维度坍缩。

需要指出的缺项是原文没有给出编码器偏置和预偏置的初始化细节，也没有报告辅助损失中 k_aux 以外超参数的敏感性，复现时只能沿用引用的开源实现默认值。另一个缺项是互信息估计只用激活与否的伯努利建模，忽略了激活幅度的分布，论文在局限中也承认这一点。

### 自编码器如何训练，哪些参数冻结、如何选模型？

训练数据是 LibriSpeech 的 train-clean-360 共 360 小时干净朗读，输入特征来自冻结的 SSL 模型，SSL 本身在整个自编码器训练和评估中都不更新，监督来源完全是重构误差而非任何下游标签。优化器用 Adam，初始学习率 0.001，当开发集重构误差不再下降时乘 0.8 衰减，总批量 512，用 4 张 3090 约 4 小时跑 100 轮，选开发集重构最好的 checkpoint 做下游评估。

**稀疏度 × 表示维度：** 稀疏度的分工由每帧保留的非零个数 k 控制，k 越小压缩越强；表示维度的分工由隐层总维度 h 控制，h 越大容量上限越高；二者搭配的理由是只调 k 会混淆容量与稀疏的影响，论文因此让 h 在 1536 到 4608 之间与 k 正交扫描，组合意义是可以分离出在给定容量下任务对压缩的偏好，以及在给定稀疏下容量带来的增益。

下表把可复现的构造条件整理成宽表，便于对照容量与稀疏的正交设计，表中参数量与维度取自原文连续报告，死单元阈值的最优取值来自消融小节的独立实验。

| 构造条件 | 输入维度 | 隐层维度 h 候选 | 每帧保留 k 候选 | 参数量范围 | 死单元判定阈值 |
| --- | --- | --- | --- | --- | --- |
| 冻结 SSL 特征上训练 k-稀疏自编码器 | 768 | 1536，2304，3072，3840，4608 | 32，64，128，256 | 2.4M，3.5M，4.7M，5.9M，7.1M | 0.9999 |

该表说明容量从约 2 倍扩到 6 倍时参数量同步增长，而 k 始终远小于 h，保证了真正的稀疏；阈值 0.9999 意味着只有在几乎所有帧都不激活时才被判为死单元并触发辅助损失，阈值过大或过小都会让音素错误率回升。训练成本的含义是每个 h 和 k 组合都要独立训练 1 次，3 种 SSL 特征共 60 个自编码器，这是复现时主要的计算开销。

### 下游如何评估，指标方向和公平条件是什么？

评估协议沿用 SUPERB 原始实现，自编码器冻结，只训练下游模型，六任务的开发集分数直接比较。指标方向需要记牢：语音增强用 STOI 和 PESQ 越高越好，说话人准确率、情感准确率、槽填充 F1 越高越好，音素错误率、字符与词片词错误率、槽填充字符错误率越低越好。字符与词片两套识别分别用 32 和 300 个声学单元，目的是检验声学单元粒度是否改变对稀疏的选择。

数据集除说话人数据来自真实野外采集外，其余多为英语朗读，音素与识别共享语料而说话人与情感各用独立语料，因此跨任务比较时不能把语料差异误读为任务本质差异。基线是直接用 WavLM、HuBERT 和 wav2vec 2.0 最后一层特征跑同样下游，相对提升据此计算。互信息分析只取 4 个有明确帧级或 utterance 级标签的任务，在开发集上按说话人、情感、音素和词分别估计，音素与词去掉了静音并剔除了样本少于 50 的词，以保证经验概率估计稳定。

### 不同任务对稀疏度有多敏感，谁要稀疏、谁要稠密？

比较问题是：在冻结评估、同一 h 下改变 k 时，各任务的最优 k 是否一致，以及相对基线的提升幅度是否同量级。公平条件是同一 SSL 输入、同一 h 和同一 k 网格，指标方向按上一节记忆。下图先看 WavLM 输入下相对提升的全貌，横轴是 9 个任务指标，纵轴是相对基线的百分比，颜色区分 h，点大小区分 k。

> **看图路径：** 1. 先看横轴九个任务指标的排列顺序，确认纵轴是相对基线的相对提升百分比；2. 比较不同颜色 h 曲线在 PR_PER 处的下探深度，判断哪个任务对 k 最敏感；3. 观察 SID_Acc 处小 k 大点与大 k 小点的分布，确认说话人任务偏好低 k；4. 检查 SE 与 SF 两端曲线的起伏幅度，确认生成与语义任务的变化相对平缓

[![原论文 Figure 1：Relative improvement of sparse speech repre- sentations on the dev set for each task.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/a815be4b2038/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/a815be4b2038/figure-1.png)

*论文图 1。原论文 Figure 1：“Relative improvement of sparse speech repre- sentations on the dev set for each task.”。*

从像素可见，语音增强两条指标几乎贴着零线，说明对稀疏不敏感；说话人准确率在小 k 处上扬约 10 个百分点，而音素错误率在小 k 处深跌近 50 个百分点，表明音素任务对过强压缩最敏感；两套识别的词错误率也随小 k 明显变差；槽填充两端变化平缓。具体最优位置报告显示，音素与字符识别在给定 h 下总是最大 k 最好，且全局最优在最大 h 与最大 k 组合。

语音增强偏好较大 k；槽填充偏好中间 k；说话人与情感在给定 h 下偏好最小 k，其中说话人全局最优在最大 h 配最小 k，情感全局最优在中间 h 配最小 k。

**音素识别 × 说话人识别：** 音素识别的分工是检验细粒度语言内容是否被保留，对丢失音素细节非常敏感；说话人识别的分工是检验长时说话人特性是否在压缩后仍可分，更需要去掉内容等无关变化；二者搭配比较的理由是它们代表保留偏好与压缩偏好的两端，组合意义是揭示不存在对所有任务同时最优的单一 k，必须按任务族分别选择稀疏度。

下表把 3 种 SSL 输入下 9 个指标各自能达到的最佳相对提升并置，表中正值代表稀疏表示超过直接用最后一层稠密特征，负值代表未超过，该表承担结果宽表要求，数字与单位全部来自原文连续句。

| 任务指标 | WavLM 最佳相对提升 | HuBERT 最佳相对提升 | wav2vec 2.0 最佳相对提升 | 方向说明 |
| --- | --- | --- | --- | --- |
| 增强可懂度，情感准确率等九项 | 0.32%，1.22%，12.72%，4.24%，10.02%，1.90%，3.55%，0.79%，5.53% | 0.07%，1.07%，13.23%，2.81%，-3.39%，3.41%，0.47%，-0.02%，-0.17% | 0.09%，0.57%，7.20%，-1.36%，-16.61%，1.15%，3.28%，1.67%，6.26% | 正为超过稠密基线，负为未超过 |

表后解释是：WavLM 下九项全部为正且音素与识别提升显著，支持稀疏化在该输入上整体有效；HuBERT 在音素与槽填充出现轻微负值，wav2vec 2.0 在情感与音素出现明显负值，其中音素负向达 -16.61%，这与原文引用的层分析一致，即 wav2vec 2.0 顶层与音素标签相关性较弱。未胜出项必须保留：不能把 WavLM 的结论推广到所有 SSL，选错输入会让音素任务反而受损。总体趋势是输入质量不改变说话人与情感偏小 k、音素与识别偏大 k 的排序，但会改变能否超过基线。

### 互信息与输入层如何解释最优 k 的分岔？

本节承担解释职责：测表示与标签的互信息随 h 和 k 如何变化，以及换用第一层输入后最优 k 是否移动。互信息的白话含义是看稀疏码的激活模式能透露多少标签信息，估计时把每个隐单元是否激活看成伯努利变量，分别算无条件熵与给定标签后的条件熵再相减。实验显示在给定 h 下增大 k 会提高 4 个任务的互信息，说明大 k 确实保留更多标签相关信息；但最优性能并不都在最大互信息处取得。

**信息瓶颈 × 互信息：** 信息瓶颈的分工是给出评价标准，即好的表示要同时最小化输入与表示的互信息和最大化表示与标签的互信息；互信息的分工是把保留了多少标签相关信息量化为比特数；二者搭配的理由是仅看任务分数无法区分是压缩不足还是保留不足，组合意义是用互信息随 k 的变化曲线来解释为何不同任务的最优 k 不同。

下图展示 WavLM 输入下 4 个子图的互信息曲线，横轴是维度 h，纵轴是比特数，灰点大小代表 k，橙色方块标出各 h 下任务最优的 k。

> **看图路径：** 1. 先确认四个子图分别为说话人、情感、音素和词，纵轴都是互信息比特数；2. 对比灰色 k 曲线随 h 上升的斜率，确认增大 k 普遍提高标签信息保留量；3. 盯住橙色最优 k 方块所在高度，判断其在 SID 和 SER 中处于低互信息层

[![原论文 Figure 2：Mutual information in bits between latents and task-specific labels for speaker identity, emotion…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/a815be4b2038/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/a815be4b2038/figure-2.png)

*论文图 2。原论文 Figure 2：“Mutual information in bits between latents and task-specific labels for speaker identity, emotion state, phone and word, respectively. WavLM features were used as input for SAE.”。*

从像素可见，说话人与情感的橙色方块始终贴在最底部的小 k 曲线上，而音素与词的橙色方块跳到顶部的大 k 曲线上；这支持论文的判断，即说话人与情感的最优需要更强压缩、较少保留，而音素与识别需要更多保留。HuBERT 呈现相似分岔，wav2vec 2.0 在情感上例外，说明该解释在不同输入上大体成立但非绝对。

补充的输入层实验用 h 固定 4608、k 扫描四档：WavLM 做音素时最优 k 从顶层的 256 移到首层的 128，WavLM 做说话人时两层最优都是 32 但次优 64 在首层已接近最优，wav2vec 2.0 做音素时换到首层后从全部为负变为出现正提升。这支持输入质量会小幅移动压缩与保留的权衡，且即使首层更 noisy，稀疏化在某些配置下仍能带来增益。相关性不是因果，互信息高不直接证明分数高，还需结合下游头的容量来理解。

### 哪些结论不能推广，原文明确留了什么缺口？

论文直接报告的是基于 base 规模、英语为主、开发集分数的比较，有限解释是压缩与保留的偏好排序，未验证的推测是该排序能否指导通用稀疏表示学习器的设计。明确局限有三点：只用了 base 模型的特征，未测 large 模型的顶层与中层；训练与评估以英语为主，未做多语言验证；互信息只建模激活与否，忽略幅度分布，未来可用更复杂分布重新量化。另一个边界是超参数只在音素开发集上调了死单元阈值，再固定到所有任务，这可能对说话人与情感并非全局最优。

统计方面未报告多次随机种子的方差，也未测量延迟与推理开销，因此不能承诺稀疏化能省时或省内存。增强与槽填充各有两个指标，原文用相关分析说明它们在不同稀疏下一致，但这只是开发集上的相关，不代表测试集或新噪声下仍一致。

### 要复现这组比较，先做什么、去哪里找代码？

先准备 LibriSpeech 的 360 小时训练与开发集，用冻结的 WavLM、HuBERT 和 wav2vec 2.0 base 把波形转成 768 维帧特征，注意论文用的是转换后的社区 checkpoint 而非重新训练 SSL。接着按 h 与 k 的 20 宫格训练 k-稀疏自编码器，复用公开的稀疏自编码器实现做 TopK 与辅助损失，再用 SUPERB 的公开实现做冻结评估，下游训练时不要解冻自编码器。资源状态是正文开源声明的唯一依据：本次收到的两个代码资源当前可用，已公开，第一个是稀疏自编码器实现，第二个是 SUPERB 评估框架，可分别用于训练稀疏码和跑六任务分数。

复现时先跑通 h 为 1536、k 为 32 的最小配置与音素任务，再扩展到全网格；阈值先设 0.9999，若音素错误率异常偏高再小幅扫描。还需补的验证是固定随机种子重复训练以估计方差，以及在测试集上确认开发集选出的最优 k 是否稳定，避免把事后最优当成可部署收益。

### 何时值得尝试稀疏化，还需补哪项验证？

当你的任务更依赖长时稳定的说话人或情感判别，且输入混杂大量内容细节时，值得尝试较小的 k 以加强压缩；当任务是音素或识别这种细粒度内容转写时，应从较大 k 起步并配较大 h，以保证保留充分。选择 SSL 输入时若主任务是音素，优先选顶层与音素相关性更强的特征，否则稀疏化可能无法超过稠密基线。复现与选型时记住总体趋势不等于每组都成立：中间 h 对情感最好，最大 h 对说话人与音素最好，槽填充的 F1 与字符错误率对 h 的偏好还略有分歧。

下一步最值得补的验证是用大幅度与幅度感知的互信息重新解释最优 k，并在测试集与非英语数据上检验排序是否保持。只有在这些边界都被确认后，才能把按任务族分别设 k 的经验沉淀为通用稀疏表示学习器的设计规则。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=3)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-6.png)

区域 6 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-7.png)

区域 7 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-8.png)

区域 8 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=4)

[![原文数学表达区域 9，PDF 第 12 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-9.png)

区域 9 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=12)

[![原文数学表达区域 10，PDF 第 12 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-10.png)

区域 10 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=12)

[![原文数学表达区域 11，PDF 第 12 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-11.png)

区域 11 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=12)

[![原文数学表达区域 12，PDF 第 12 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-12.png)

区域 12 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=12)

[![原文数学表达区域 13，PDF 第 12 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-13.png)

区域 13 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=12)

[![原文数学表达区域 14，PDF 第 12 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-14.png)

区域 14 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=12)

[![原文数学表达区域 15，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-15.png)

区域 15 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=14)

[![原文数学表达区域 16，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-16.png)

区域 16 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=14)

[![原文数学表达区域 17，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-17.png)

区域 17 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=14)

[![原文数学表达区域 18，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/67c321ef22ef/figure-18.png)

区域 18 · [查看论文原页](https://aclanthology.org/2026.acl-long.1303.pdf#page=14)

另有 50 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.acl-long.1303.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
