---
title: "Temporal Taxation Compounds Under Post-Training Compression of Whisper Models"
date: 2026-09-25
draft: false
tags: [语音识别, 模型剪枝, 模型量化, 知识蒸馏, 公平性]
categories: [论文速递]
description: "论文在 Whisper 家族内比较剪枝、量化与蒸馏的部署后公平性，发现 50% Wanda 剪枝使 large-v3 的 Black/AA 与 Asian 时间税差扩大 111%，INT4 在小模型上使西非口音灾难循环成倍增加，而蒸馏在 27 格中 21 格缩小差距。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.28739"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "压缩后才加税：Whisper 权重压缩如何重分人口组的时间负担"
paper_digest_original_title: "Temporal Taxation Compounds Under Post-Training Compression of Whisper Models"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.28739"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.28739.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 8.0
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文在 Whisper 家族内比较剪枝、量化与蒸馏的部署后公平性，发现 50% Wanda 剪枝使 large-v3 的 Black/AA 与 Asian 时间税差扩大 111%，INT4 在小模型上使西非口音灾难循环成倍增加，而蒸馏在 27 格中 21 格缩小差距。"
paper_digest_authors: [{"affiliations":["The Ohio State University, Columbus, OH, USA"],"name":"Srishti Ginjala"},{"affiliations":["The Ohio State University, Columbus, OH, USA"],"name":"Eric Fosler-Lussier"},{"affiliations":["Air Force Research Laboratory, USA"],"name":"Christopher W. Myers"},{"affiliations":["The Ohio State University, Columbus, OH, USA"],"name":"Srinivasan Parthasarathy"}]
paper_digest_abstract_sha256: "c63748f59f297d928dbb73daff27c3b9daf2407ab19c64342e2622d4c16b36b9"
paper_digest_sidecars: {"citation.bib":{"sha256":"de9cfa7d7035a08eebbde313e4c38037dca6ad78170c44d9ac6e4e6806c772c8","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-28739/citation.bib"},"citation.json":{"sha256":"3177d5ba478add90a663ef7285bcd86d994735198d50afd1b5f9dd04e7841572","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-28739/citation.json"},"citation.ris":{"sha256":"bc5a5a5f15f20ad05e5b4889cf0be7db8af1d167ae721bf673dbb08fb9ed0ba1","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-28739/citation.ris"},"rethink-context.json":{"sha256":"cffce45eef58ea62bb22038edc71434d82a9b436a209e7760d4096029e6be4b9","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-28739/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "04371beb6d473a42795a17689dc0a096d012cdc75fd40255ad341ad601c12d96"
paper_digest_api_reader_plan_sha256: "66fd26eee42f284be996864e586325a2c30cf91fd0ecbd8a08d8e7767ed3b70a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "1afd20112dc814583299efd4305614cc24d40a0e64f36d844fe488aa1be60b6f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "59595017a8f99cb4f126c76ae4f3054ad969d33213dbc65e80994d386a1e2cd0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "38ae43487ebf21c7197420cfd92ac33d61fbd8338d6d5cce8af78782f02bb32f"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "148c40c93144c7349951989665c0c584f4a0e3a46f9a8eee93be79f6991381ce"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 压缩后才加税：Whisper 权重压缩如何重分人口组的时间负担

> 英文题目：*[Temporal Taxation Compounds Under Post-Training Compression of Whisper Models](https://arxiv.org/abs/2609.28739)*

> 标签：#语音识别 | #模型剪枝 | #模型量化 | #知识蒸馏 | #公平性
>
> 评分：**8.0/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Srishti Ginjala：The Ohio State University, Columbus, OH, USA
- Eric Fosler-Lussier：The Ohio State University, Columbus, OH, USA
- Christopher W. Myers：Air Force Research Laboratory, USA
- Srinivasan Parthasarathy：The Ohio State University, Columbus, OH, USA

## 📌 核心摘要

自动语音识别需将语音声学输入转写为文字，部署时经后训练权重量化、剪枝与蒸馏后的人口组误差再分配是实际难点。先以Whisper家族原始权重与LibriSpeech校准语音为输入，施加INT8、两种INT4量化、50% Wanda非结构化剪枝及配对Distil-Whisper蒸馏，职责是生成可部署变体，输出为压缩模型集合。再以该压缩模型集合与Fair-Speech等三套语料分组语音为输入，负责聚合分组词错误率并换算为时间税差值与最大最小比，输出的分组误差矩阵直接进入下一步校验。最后以分组误差矩阵为输入，用配对置换检验与信噪比回归负责显著性与混杂校验，输出分布偏移来源结论。与视觉长尾受损直觉不同，剪枝的复合效应随容量单调上升而蒸馏多呈抚平，量化则与配方强相关，三者不可互换，体现了权重压缩而非音频失真的公平性机制差异。在Fair-Speech基准下，Whisper-large-v3经50% Wanda剪枝后的Black/AA-vs-Asian组WER时间税差从FP16基线的WER时间税差30.14秒升至剪枝后的WER时间税差63.73秒每分钟语音，相对增幅达111.4%。结论适用边界受限于Whisper英语朗读语音，尚未验证自发语音、声调语言及GPTQ与AWQ路线的外推。计算量约为150 A100 GPU小时，硬件开销仅覆盖评测所需的A100计算。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 审计在全精度做，部署却在压缩后：问题从哪里来？

输入是待解读的论文原文与官方原图像素，目标是让刚进入语音领域的研究生能核对方法并复述实验条件。必须保留的信息包括模型家族与容量范围、3 种压缩的具体实现、3 个公平数据集的人口轴、时间税与最大最小比的定义、统计校正方式以及 headline 数字的适用条件。输出是 1 篇按学习依赖展开的中文技术解读，不做营销判断，不补无源数值。

语音识别的公平审计通常在全精度模型上报告各人口组的词错误率差距。论文指出，实际发到生产环境尤其是边缘设备的模型往往已经被量化、剪枝或蒸馏。也就是说，审计对象与部署对象不是同一个权重状态。如果压缩改变的是模型权重而不是音频信号，那么它可能重新分配错误负担。研究生首先要建立的直觉是：压缩不是均匀变差，它可能让本来就服务最差的组承担更多修正劳动。论文把这种劳动称为时间税，做法是把词错误率换算成每分钟语音需要多少秒的人工修正时间。

理解本文需要先区分两类压缩。第一类是音频或特征压缩，改变输入；第二类是训练后权重压缩，改变模型，包括量化降低数值精度、剪枝删除连接、蒸馏用小学生拟合大教师。本文只研究第二类。教学例子是：同一句非裔美国英语语音，输入波形不变，但剪枝后模型漏掉了习惯性 be 结构导致多错几个词，审稿人就要多花几秒改，这多花的秒数差就是组间时间税差。请注意这只是帮助理解的例子，论文并未给出该句的具体数值。

### 同输入同目标的先前工作如何划定本文位置？

在同输入同目标的语音公平审计线上，先前工作固定模型精度报告差距。Koenecke 等报告商业系统的种族差距，Tatman 等揭示性别与种族交互，Martin 等把部分差距归因于对非裔美国英语特征的处理，Veliche 等发布 Fair-Speech 基准，Koenecke 等记录幻觉危害。这些工作回答模型在谁身上失败，但不回答压缩后失败分布如何变化。Cheng 等引入语义轴审计但只在全精度评估。

在压缩与偏见线上，视觉与多语言工作预测压缩伤害长尾分布，文本大模型工作发现量化对偏见的影响复杂且随方法而变。语音侧唯一的例外是 Ferraz 对 Whisper 的 8 比特量化研究，发现资源与模型尺寸相关偏见放大而说话人相关偏见大致稳定，但未做到 8 比特以下，也未覆盖英语方言与口音轴。Feng 等与 Andreyev 等做低比特 Whisper 基准但不研究公平性。本文的对照点正在这里：把 Ferraz 的 8 比特扩展到 4 比特，把只看多语言轴扩展到英语族裔与口音轴，并首次系统加入剪枝与蒸馏。

另有一条相邻工作是 Ginjala 等研究声学输入退化与解码器架构对公平的影响。本文正交：它扰动模型权重而非声学输入，且两个实验矩阵没有共享的模型与条件单元。复述时不要把输入退化结论套用到权重压缩上。

### 要回答什么可证伪问题？什么不属于本文？

核心问题是：在固定架构、分词器与训练数据的前提下，仅改变权重精度或稀疏度或用蒸馏学生替换教师，人口组间的词错误率差距与时间税差距如何变化。论文给出 3 个可检验方向：剪枝是否扩大差距，4 比特量化是否在小模型上引发灾难循环，蒸馏是否同样加剧差距。每个方向都有明确的失败可能：差距可能缩小、可能不变、可能只在特定配方出现。

不属于本文的是音频压缩、特征压缩、量化感知训练、人口感知重训练。排除的量化方法包括 GPTQ 与 AWQ，排除的剪枝包括 SparseGPT 与 2:4 结构化剪枝，理由是参考库缺少编码器解码器语音模型的适配类或在小试验中输出崩溃，而非算法本身不适用。跨家族泛化只用 Granite-4.0 做 8 比特探针，不检验剪枝与 4 比特主张。英语之外的声调或黏着语、自然对话语体都不在主结论内。

### 方法全景：固定家族、只动权重、三个数据集如何分工？

为隔离压缩效应，主体分析限定在 Whisper 家族内。主干包括 tiny、base、small、medium、large-v3 共 5 个容量，从 39M 到 1.55B 参数，另加 3 个 Distil-Whisper 学生与其教师配对。排除 large-v3-Turbo，因为它本身已是层剪枝压缩，会混淆蒸馏臂。跨家族比较会混入架构、分词器、训练数据与音频编码器差异，因此主结论不做跨家族断言。

压缩覆盖 4 种精度：作为部署现实参考的全精度 16 位浮点，8 位整数量化，4 位 NF4 与 4 位 HQQ。NF4 与 HQQ 均为无数据配方，同比特不同优化路径，用于分离配方轴。剪枝采用 50% 非结构化 Wanda，覆盖编码器、解码器与交叉注意力的线性层，用 LibriSpeech train-clean-100 中 128 条与所有测试集不重叠的语音做校准。蒸馏直接取已发布的 Distil-Whisper 检查点并在同一量化扫描下评估。

数据集分工明确。Fair-Speech 提供受控朗读语音助手提示，共 26471 条、593 说话人，承载族裔、年龄、性别、地域与母语轴。Common Voice 25 取英语测试集 16398 条，按口音保留样本量不小于 50 的 7 组。AfriSpeech-200 提供 6318 条测试语音覆盖 44 个样本量不小于 50 的非洲口音。LibriSpeech test-clean 只做总体词错误率参考，不承载公平主张。解码默认贪心，只有消融节用束宽 5 的束搜索。

### 指标与统计组件：时间税、差距比与显著性如何计算？

逐条指标包括词错误率（word error rate，WER）、删除率、插入率与循环标志。循环标志的判定是假设中出现超过 5 个 5 元组重复，或假设长度超过参考长度 3 倍，阈值在全量扫描前固定。按模型、配置与数据集单元聚合时，报告按条加权的平均词错误率并用 200 次自举给出 95% 置信区间。每单元公平性用最大最小比（max-min ratio，MMR）汇总，即最差组词错误率除以最好组，再用压缩后比值相对全精度比值的变化作为复合指数。

headline 指标是时间税（temporal taxation）差。先用白话说：它把每组的词错误率乘以每次错误假设成本与每分钟词数，得到该组每分钟语音要花多少秒修正。符号含义是组词错误率乘以每错秒数再乘以语速，计算目标是可部署解释的时间单位，原文明确说明这只是线性重缩放，不作为算术贡献。关键性质是相对变化与成本假设无关，只有绝对秒数随成本缩放，论文在 2、5、8 秒每错下做敏感性分析。循环导致的成本非线性，另用循环率轴单独跟踪。

\[T_{g}\;=\;\mathrm{WER}_{g}\cdot C\cdot\mathit{wpm},\]

统计上用配对置换检验比较同条语音压缩前后词错误率差，每单元置换 2000 次，双侧检验，并在单元内跨人口组做 Benjamini-Hochberg 校正。模型按差距比的排序稳定性用 Kendall 相关系数衡量。Fair-Speech 另做信噪比混淆检验：计算每条信噪比代理，用最小二乘回归词错误率对信噪比，再在残差上重测人口组 F 统计量。

**时间税 × 词错误率：** 词错误率负责度量每组转写错多少词，时间税负责把该错误率乘以每错修正成本和语速换成每分钟语音要多花多少秒修正，二者搭配的理由是百分比不直观而时间可直接比较部署负担，组合后相对扩大比例与成本假设无关而绝对秒数随成本线性缩放。

**最大最小比 × 复合指数：** 最大最小比负责在一格内用最差组词错误率除以最好组得到不公平程度，复合指数负责用压缩后比值减全精度比值再除以全精度比值得到压缩带来的相对变化，二者搭配才能区分基线本来就不公平与压缩又加剧了多少，组合意义是跨模型和跨精度可比的公平变化量。

**Wanda 剪枝 × INT4 量化：** Wanda 剪枝负责按权重幅度乘以激活删掉一半非结构化连接，INT4 量化负责把权重数值精度降到 4 比特但保留全部连接，前者做选择性删除而后者做全局数值粗化，搭配比较的理由是同为把大模型塞进边缘设备却作用机制不同，组合意义是揭示剪枝集中伤害长尾组而量化伤害更分散且与配方有关。

**灾难循环率 × 删除率：** 删除率负责解释词错误率中漏字占多少，灾难循环率负责单独标记出现 5 元组重复超 5 次或假设长度超参考 3 倍的整句崩溃，前者是线性可加的小错而后者是非线性放大的单句大错，搭配的理由是平均词错误率会掩盖少数极端转写，组合意义是把可修正小错与需重写的循环分开审计。

**蒸馏学生 × 教师伪标签：** 教师伪标签负责提供教师模型在全分布上的输出作为训练目标，蒸馏学生负责在更小容量下拟合这些平滑目标而非原始人工标注，分工是教师传递决策边界而学生做压缩近似，搭配理由是学生损失被教师分布平均化可能正则掉最差组尖峰，组合意义是解释为何蒸馏总体变差却相对差距缩小。

### 本研究训练了什么？没有训练什么？真实计算是什么？

本研究没有从零训练任何 Whisper 模型，也没有重训检查点。所有对比都是同检查点内比较：同一份权重在全精度与压缩后的表现，训练轮次引入的方差大部分被差分抵消，但跨独立训练轮次的复合幅度是否可复现仍未测量。需要补的验证是多随机种子重训，但原文未做，不能从模型名推定实现细节。

真实计算分为 3 路。量化路是训练后直接把权重映射到低比特表示，HQQ 适配编码器解码器时做了实现修正并在保留集上用全精度验证。剪枝路是用 128 条校准语音估计激活，按幅度乘以激活准则删掉一半连接，不做重训练。蒸馏路是直接调用已发布的教师学生对做推理评估，不重新蒸馏。推理侧固定随机种子与确定性内核标志，同 100 条在同硬件上 2 次运行得到比特一致假设。论文未报告梯度路径、参数冻结细节与优化器状态，因为本研究不含训练循环，复述时应明确指出该缺项而不是猜测。

### 实验条件：基线、对照与聚合口径是否一致？

基线统一为全精度 16 位浮点，而不是 32 位，因为 16 位是部署现实参考。每个压缩单元都与同模型同数据集同解码下的全精度对比，保证条件一致。聚合对象是人口组内按条加权平均，显著性在条级别配对检验，避免把组均值直接相减当成显著。单位必须看清：百分点是压缩减全精度的绝对差，相对百分比是差除以基线，时间税差单位是每分钟语音的修正秒数，三者不可混用。

样本量是复现关键。Fair-Speech 中 Black/AA 为 7782 条与 7807 条在不同指标略有差异，Asian 为 3853 条；AfriSpeech 中 Kanuri 66 条、Hausa 196 条、Yoruba 648 条；Common Voice 25 中各口音从 53 到 1343 条不等。小样本口音的显著性更易受噪声影响，论文对 8 比特的例外明确指出落在样本量不大于 101 的口音层。

硬件预算约为 150 A100 小时。资源状态方面，未发现来源绑定且完成验证的资源，因此不得声称代码、模型或数据已公开，只能按论文文字说将在发表时发布。

### 主结果：剪枝加倍时间税，量化引爆循环，蒸馏反而缩小差距

先看剪枝 headline。比较问题是同模型同数据集下 50% Wanda 是否扩大最差与最好组的时间税差，公平条件是同为贪心解码与同为全精度参考，指标方向是差越大越不公平。表中同时给出时间税差、组级词错误率增量与束搜索下的残留，单位保留原文每分钟秒数与百分点。表后解释是伤害集中在已弱势组，代价是绝对修正时间从约 30 秒升至约 64 秒每分钟，而束搜索只能买回约五分之一。未胜出项是 Hispanic 与 White 未达显著，可作为反例说明并非所有组都被同等伤害。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 同上按组词错误率 | 组增量 | Asian 增加 0.43 百分点 | Black/AA 增加 7.89 百分点 | 差集中在弱势组 |
| 同上复合指数 | 差距比变化 | 贪心 0.584 | 束搜索 0.468 | 缓解但未消除 |

上述 headline 的相对扩大与每错成本无关，绝对秒数随成本线性缩放。论文还报告 medium 与 small 等多格复制，说明剪枝效应非孤立。需要强调的是剪枝在小容量上方向相反，tiny 上复合指数为负，这是后文容量曲线的伏笔。

上述 headline 相对扩大与成本无关的判断需要对照原图的前十排序来理解，图中同时给出绝对秒数条与相对百分比条，可以核对剪枝是否占主导。

> **看图路径：** 1. 先看左面板横轴每分钟修正秒数，对比每行蓝色全精度条与赭色压缩条的长度差；2. 再看右面板相对变化百分比条，确认首行 large-v3 剪枝达 111% 且前五行为剪枝；3. 检查左面板误差线随成本 2 到 8 秒的横向延伸，只改变绝对秒数不改变右面板排序；4. 数出前十格中仅一格为 INT4 量化，其余九格均为 Wanda 剪枝

[![原论文 Figure 1：Temporal-taxation differential under pruning and quantization, between the worst- and best-served…](https://arxiv.org/html/2609.28739v1/fig2_temporal_taxation.svg)](https://arxiv.org/html/2609.28739v1/fig2_temporal_taxation.svg)

*论文图 1。原论文 Figure 1:：“Temporal-taxation differential under pruning and quantization, between the worst- and best-served demographic groups, top ten cells by relative compounding.”。*

上图展示前十相对扩大格的绝对差与相对变化。左面板蓝色为全精度差，赭色为压缩后差，横向延伸为成本 2 到 8 秒的范围；右面板为与成本无关的相对扩大。可见首行 large-v3 剪枝达 111%，前五均为剪枝，只有一格为 tiny 加 INT4 量化。这支持剪枝是人口再分配效应最大的结论，同时说明量化在特定小模型格也能进入前十，不能说量化无影响。

再看组级伤害分布。比较问题是增量是否集中在已边缘组，公平条件是同为配对置换加校正，指标方向是增量百分点越大伤害越大。表后解释是 large-v3 剪枝下 Black/AA 一枝独秀，其余组低于 1.5 百分点；tiny 加 INT4 下前 25 口音除 akan 外全部显著。未胜出项是 akan 非显著，说明即使强复合格也有例外。

组级增量是否集中需要看显著性标记，赭色显著与灰色非显著的区分决定了伤害集中还是均匀的判断。

> **看图路径：** 1. 看左面板 Fair-Speech 各族裔增量，确认 Black/AA 条远长于其他组且标星显著；2. 对照图例赭色为显著灰色为不显著，找出 Hispanic 与 White 两条灰色非显著条；3. 看右面板 AfriSpeech 前 25 口音增量，确认除 akan 灰色外其余均为赭色显著

[![原论文 Figure 2：Per-group WER damage under pruning (a) and quantization (b) concentrates on already-marginalized…](https://arxiv.org/html/2609.28739v1/fig4_forest.svg)](https://arxiv.org/html/2609.28739v1/fig4_forest.svg)

*论文图 2。原论文 Figure 2:：“Per-group WER damage under pruning (a) and quantization (b) concentrates on already-marginalized groups.”。*

上图左面板显示 Fair-Speech 族裔增量，Black/AA 条远长于中东、太平洋岛民等组，灰色 Hispanic 与 White 未达显著阈值；右面板显示 AfriSpeech 前 25 口音增量普遍显著且幅度达十余百分点，只有 akan 为灰色。这支持伤害集中在已弱势组的判断，但也提示显著性受方差影响，束搜索下小增量反而更易显著，后文会展开。

### 循环与量化细节：边缘小模型的另一条成本轴

循环率是独立于平均词错误率的第二条轴。比较问题是 4 比特量化是否成倍提高灾难转写比例，公平条件是同口音内全精度为自身基线，指标方向是循环率越高体验越差。表中保留原文循环率百分比与倍数，样本量写在条件内以提示小样本不确定性。表后解释是 tiny 加 INT4 在西非口音上放大 5 到 7 倍，而大模型上无显著，代价是单句可能需数分钟重写。未评测边界是循环阈值扰动，论文在附录用宽松与严格阈值重算，3 个核心口音在所有阈值下显著，说明结论不依赖特定截断。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| Kanuri 共 66 条 tiny 加 INT4 HQQ | 循环率 | 4.55% | 30.30% | 6.67 倍 |
| Hausa 共 196 条同上 | 循环率 | 1.53% | 9.18% | 6.0 倍 |
| Yoruba 共 648 条同上 | 循环率 | 1.23% | 6.33% | 5.12 倍 |
| Fair-Speech Black/AA 共 7807 条同上 | 循环率 | 0.51% | 1.28% | 2.5 倍 |

上述循环倍数控制了各口音自身基线，因此分离了量化新增与基线难度。Kanuri 基线已高但主张是乘数而非绝对值，大模型附录无显著则限定了边缘容量的适用范围。

量化在词错误率轴上呈容量有界，比较问题是同比特不同配方与不同容量下差距比如何变化，公平条件是同数据集同模型对比，指标方向是复合指数为正表示扩大。表中保留原文百分点增量与最大最小比位移，表后解释是大模型上 HQQ 只在英国口音显著增加 0.73 百分点，位移更多来自极值组身份变化而非大幅增量；中容量四格甚至为负，因为最好组按比例坏得更多。未胜出项是 NF4 在 tiny 上显著组更少却更压平差距，说明配方公平后果不同。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| tiny 在 Common Voice 25 加 INT4 HQQ | 口音增量 | Canadian 增加 5.45 百分点 | African 增加 13.19 百分点 | 7 组全部显著 |
| large-v3 同数据集同配方 | 差距比位移 | 基线待比 | 位移 0.216 | 仅英国口音显著增加 0.73 百分点 |
| base 同数据集同配方 | 组相对增幅 | African 从 24.9% 到 27.8% | Canadian 从 9.6% 到 12.3% | 最好组按比例更差致差距缩小 |
| tiny 同数据集 NF4 对 HQQ | 复合指数 | HQQ 为 0.010 | NF4 为 -0.117 | 同比特不同方向 |

上述配方对比显示同为 4 比特但优化路径不同会把误差分给不同组，这与文本大模型中方法与偏见交互的发现一致，不能用单一比特数预测方向。

蒸馏方向相反。比较问题是学生相对教师是否缩小差距，公平条件是同精度同数据集配对，指标方向是差距扩大指数为负表示缩小。表中保留原文 27 格统计与总体变差范围。表后解释是学生每组都变差但最差组次线性增长故比值压缩，代价是绝对词错误率上升 0.07% 到 31.4%。结构性反例是 medium 到 distil-medium 在 Fair-Speech 族裔轴四精度全扩大 0.011 到 0.151，其余两格近零在噪声内。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 27 格教师学生精度数据集 | 缩小组数 | 扩大 4 格 | 缩小 21 格 | 另 2 格近零 |
| 总体词错误率 | 相对变化 | 最小增加 0.07% | 最大增加 31.4% | 27 格全部上升 |
| medium 到 distil-medium 在 Fair-Speech | 差距扩大指数 | 最小 0.011 | 最大 0.151 | 四精度全扩大 |
| large 到 distil-large | 近零格 | Common Voice 25 全精度 0.003 | Fair-Speech 加 INT4 HQQ 0.010 | 在噪声内 |

排序稳定性是实用提示。12 个数据集与精度单元中 11 个 Kendall 系数为 1.000，仅 Fair-Speech 加 INT4 HQQ 为 0.929 的相邻交换。论文报告这意味着按全精度选模型的相对排序在低比特下基本保留，但绝对差距不保留，不能用排序稳定代替部署审计。

### 消融与反证：束搜索、信噪比与容量曲线能否推翻主结论？

束搜索消融覆盖 small 与 large-v3 在全精度与 INT4 NF4 下的 Fair-Speech 与 Common Voice 25 共八格，另加 headline 剪枝格。八格中六格束宽 5 的差距比与贪心差小于 0.2，3 对中束搜索持平或略降复合指数，但 large-v3 加 INT4 NF4 在 Common Voice 25 上从 0.138 升至 0.296，反而放大。八格循环率全部上升。因此束搜索不是量化公平的修复法。剪枝格束搜索把复合指数从 0.584 降至 0.468，时间税扩大从 111% 降至 86%，Black/AA 增量从 7.89 百分点降至 5.63 百分点，但次大组仍低于 1.3 百分点且 6 组显著，形状未变。代价是约 2 倍推理成本换约五分之一缓解。

信噪比对照针对录音质量混淆。用每条信噪比代理回归词错误率后，34 个模型精度单元的人口 F 检验全部仍显著，调整后差距比反而平均大 15.0%，中位 13.9%，范围 4.7% 到 32.3%。这支持差距非信噪比可测质量所解释，且原始语料反而轻微低估差距。但信噪比不含混响与非线性失真，残余混淆不能排除，复述时须保留该限定。

容量曲线需要同时看剪枝单调上升与量化贴零或下行的反向，横轴为对数参数量可以区分小模型压平与大模型扩大的不同机制。

> **看图路径：** 1. 沿横轴对数参数量从左向右看紫色 Wanda 线在 Fair-Speech 中面板的单调上升；2. 对比同面板 INT4 线基本贴零或下行，确认剪枝与量化方向相反；3. 检查右面板 AfriSpeech 小模型处紫色线大幅为负，说明小模型剪枝压平差距的方式不同

[![原论文 Figure 3：Quantization and pruning compounding is method-specific and scales with capacity.](https://arxiv.org/html/2609.28739v1/fig3_compounding_scaling.svg)](https://arxiv.org/html/2609.28739v1/fig3_compounding_scaling.svg)

*论文图 3。原论文 Figure 3:：“Quantization and pruning compounding is method-specific and scales with capacity.”。*

上图横轴为对数参数量，纵轴为相对全精度的复合指数，实线为主干虚线为蒸馏，每面板一种数据集 4 种方法。中面板 Fair-Speech 紫色 Wanda 线从 tiny 的负 0.56 经负 0.34、负 0.02、正 0.35 单调升至 large-v3 的正 0.58，与 4 比特线方向相反。左与右面板显示小模型剪枝压平差距而大模型扩大，说明剪枝效应随容量单调，而量化效应随容量衰减。虚线蒸馏多在零附近，支持蒸馏相对中性。

循环复合集中在边缘容量的判断需要对照左右面板的口音与族裔条形，浅蓝全精度与深赭压缩的倍数差在大模型附录中消失。

> **看图路径：** 1. 看左面板 AfriSpeech 前 20 口音循环率，比较每组浅蓝全精度与深赭压缩条的倍数差；2. 找到 kanuri 首行深赭条超 30% 而浅蓝条仅约 4%，并确认星号显著标记；3. 看右面板 Fair-Speech 族裔循环率，确认 Black/AA 在 tiny 加 INT4 下跳升而其他组变化小

[![原论文 Figure 4：Catastrophic-loop rate under quantization and pruning compounds at edge capacity (\\bigstar =…](https://arxiv.org/html/2609.28739v1/fig1_loop_compounding.svg)](https://arxiv.org/html/2609.28739v1/fig1_loop_compounding.svg)

*论文图 4。原论文 Figure 4:：“Catastrophic-loop rate under quantization and pruning compounds at edge capacity (\bigstar = BH-FDR significant, q<0.05).”。*

上图左面板为 tiny 在 AfriSpeech 前 20 口音循环率，浅蓝为全精度深赭为 INT4，kanuri 首行深赭超 30% 而浅蓝仅约数个百分点且标星。右面板为 Fair-Speech 族裔循环率，4 种模型精度并列，Black/AA 在 tiny 加 INT4 下显著跳升。这支持循环复合集中在边缘容量的判断，且在大模型附录中无显著，不能推广到大模型。

### 边界与未验证推测：哪些结论不能外推？

第一，单家族限制。主结论只在 Whisper 内成立，Granite-4.0 探针只检验 8 比特：其全精度平均词错误率 10.72% 对 6.10%，族裔差距形状相近，最大最小比 2.88 对 2.99，8 比特后位移仅 0.004，循环率不变 0.45%，最大组增量 0.51 百分点。这支持 8 比特温和可外推到一个非 Whisper 架构，但剪枝与 4 比特未测，不能外推。

第二，英语朗读语体限制。评估全为朗读，含助手提示、朗读句与临床文本。已知自然对话与朗读的差距在非裔美国英语与 Black/AA 群体最大，而这些组恰是复合最大者，因此 headline 的 111% 可能是自然对话下限而非上限，但这只是方向性推测，论文未测量自然对话，复述须用可能与待验证表达。

第三，单实现限制。每种压缩只测一个参考实现，GPTQ、AWQ、SparseGPT 因缺少编码器解码器适配类被排除，2:4 结构化剪枝在 small 上 20 条试验得 194% 词错误率而被放弃。另有四项评审建议实验未完成：经 torchao 的 AWQ、DNSMOS 感知质量对照、FP8 E4M3 与 INT8 尺度搜索。结论只能读作覆盖 NF4、HQQ、默认尺度 INT8 与 50% 非结构化 Wanda。机制解释如长尾权重删除也只是与删除率分解一致，但不是决定性证据；要检验该机制，需要做权重归因或对校准集长尾构成做对照实验，论文明确留待未来工作。

### 复现先做什么？保留哪些超参数与信息条件？

先固定基线为 16 位浮点贪心解码，锁定数据集版本与口音样本量阈值，再在同检查点内加压缩。剪枝用 LibriSpeech train-clean-100 中 128 条做校准并确保与测试集不重叠，覆盖编码器、解码器与交叉注意力线性层，稀疏度 50%。量化对比 NF4 与 HQQ 两种无数据 4 比特配方并保留 8 比特对照。循环标志用重复超 5 次或长度超 3 倍，阈值在全量前固定，复现时先跑阈值敏感性再报 headline。

统计必须配对到条：同条比较压缩减全精度，2000 次置换双侧检验，单元内跨组校正，组均值用 200 次自举区间。时间税锚定每错 5 秒并报告 2 与 8 秒缩放，相对变化应与成本无关可作为自检。束搜索消融用束宽 5，注意循环率可能上升。硬件约 150 A100 小时，确定性标志与固定种子需记录。代码与配置按论文文字将在发表时发布，本次未能确认可达，复现前需先确认链接状态，不预设已公开。

### 何时值得尝试压缩审计？如何避免误读？

当模型要从全精度审计走向边缘部署时值得做压缩审计，至少加测一个 4 比特以下精度与一个剪枝条件，只测 8 比特不够，因为 8 比特在 3 个数据集 427 个组增量中仅 7 个显著且 Fair-Speech 大组最大仅 0.22 百分点。若在 large-v3 上二选一，50% Wanda 使时间税差翻倍而 INT4 位移小于 0.25 且仅一口音显著，公平含义不同，但这只适用于所测的无数据配方与非结构化剪枝，不能推广到未测的激活感知配方。

常见误读是认为复合论证应撤回边缘部署。论文伦理节明确反对该读法：边缘精度往往是唯一可行通道，撤回同样伤害边缘群体，正确方向是公平感知压缩与按部署审计。另一个误读是把相对排序稳定当成公平稳定，原文显示排序 Kendall 多为 1 但绝对差距仍扩大。蒸馏在口音轴多缩小差距但总体变差，适合相对公平优先而非绝对精度优先的场景，且需避开 medium 到 distil-medium 在 Fair-Speech 族裔轴的结构性例外。未来验证应补多轮次重训、自然对话、感知质量对照与缺失的量化剪枝臂。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2609.28739)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-25/)
