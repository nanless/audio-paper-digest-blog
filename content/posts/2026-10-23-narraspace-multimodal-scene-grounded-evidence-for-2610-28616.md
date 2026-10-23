---
title: "NarraSpace: Multimodal Scene-Grounded Evidence for Picture-Description Dementia Classification"
date: 2026-10-23
draft: false
tags: [病理语音评估, 多模态学习, 语音, 可解释性]
categories: [论文速递]
description: "NarraSpace 针对 Cookie Theft 看图说话的痴呆分类问题，用固定场景图式把词语、语音时间和事件取回文本组织成可检查的证据，再用冻结语言模型做事件级类比打分与常规分类器结合，在官方 48 人测试集上平均准确率 80.88%，代价是小样本下家族贡献不确定且评估仍属探索性。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.28616"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "NarraSpace：把图画描述分类连回场景证据"
paper_digest_original_title: "NarraSpace: Multimodal Scene-Grounded Evidence for Picture-Description Dementia Classification"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.28616v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.28616v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.28616v1.pdf"
paper_digest_primary_task: "病理语音评估"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.pathological-speech","label":"病理语音评估"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "NarraSpace 针对 Cookie Theft 看图说话的痴呆分类问题，用固定场景图式把词语、语音时间和事件取回文本组织成可检查的证据，再用冻结语言模型做事件级类比打分与常规分类器结合，在官方 48 人测试集上平均准确率 80.88%，代价是小样本下家族贡献不确定且评估仍属探索性。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qingming Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ruiyan Sun"},{"affiliations":["The Chinese University of Hong Kong Shenzhen"],"name":"Satoshi Nakamura"}]
paper_digest_abstract_sha256: "d2034a541407b979868f92610cf1a8cf42ae3273628b6ad55b0f9a6778f996f0"
paper_digest_sidecars: {"citation.bib":{"sha256":"4e11270eb2e5496116980a04967335b76db2ec6ae0af8b1e83ca07f386f93420","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28616/citation.bib"},"citation.json":{"sha256":"ddfe865953d0087026cce3b914d826b439bb8d1747afaf1261e835e5293df775","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28616/citation.json"},"citation.ris":{"sha256":"3ced7f3ebbb15585638e003b2d2b7347748406484539aad2c3a56c6af2b387a8","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28616/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"ba6aa8c29331c86143857434f39c4687246a9bb2068aeb8390064b8252abda98","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28616/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "dca8a7b3e439fbf603fe8c94b378232bb0634c4aa80c2f19b0f19de02913a5f4"
paper_digest_api_reader_plan_sha256: "0e1c1ae865c5215b86f7ecc09e2e29783f66701dd46672c2c9a7df2fd66cb02e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d7647164e54195e0d89abb241f815594fc23e4b226849838c1c18128e142c273"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "c77ea6de122bc2ad6a60ade8151a6ed38dc42645e6dfa1b860651c70271b3779"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ec79e2d5e297b57b3025ea1245a6dc84df1fd92e3db07f85be7cd25e1fb2dce5"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1d9759782bc4642a95dce4fbcae33404e80c27a3ea550d00f7086da9b87260c7"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 NarraSpace：把图画描述分类连回场景证据

> 英文题目：*[NarraSpace: Multimodal Scene-Grounded Evidence for Picture-Description Dementia Classification](https://arxiv.org/abs/2610.28616v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[病理语音评估](/audio-paper-digest-blog/papers/?concept=task.pathological-speech)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **研究重点**：[可解释性](/audio-paper-digest-blog/papers/?concept=research_focus.interpretability)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Qingming Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Ruiyan Sun：机构信息未能在本次解析中与作者逐人可靠绑定
- Satoshi Nakamura：The Chinese University of Hong Kong Shenzhen

## 📌 核心摘要

读者需要理解的对象是Cookie Theft看图说话录音和转写，困难是整篇转写给出的分数无法指出它来自哪个画面内容和哪句话，处理过程是把词语连到语音时间和画面元素，再按事件取出语句并度量其语言特征。论文构建的NarraSpace先把带时间的词序列映射到15个场景锚点，场景锚点指命名的画面元素如水槽，由此形成可检查的访问序列并度量覆盖、路径与停留关系，得到70个叙事空间特征。同一访问序列再按7个预定事件取出完整语句形成事件文本，并保留词语、语音区间与词汇命中的来源记录，该事件文本直接作为下一步打分的输入。冻结的Qwen2-7B在阿尔茨海默病组和健康对照组示例下分别打分并求差，与转写困惑度和覆盖计数共同构成场景似然流。70个叙事空间特征与20列场景似然流等共236个特征加20个缺失标记，经互信息与Mann–Whitney排序选出60个输入，交给径向基支持向量机输出患病概率。在ADReSS官方48人测试集上，以50种子平均准确率为指标，完整系统80.88%高于去除叙事空间特征后的78.21%。同一48人测试集上，聚合概率后完整系统准确率为81.25%且曲线下面积为91.32%，去除叙事空间特征后聚合准确率仍为81.25%而聚合曲线下面积降至87.67%，结论只适用于该英语基准的探索性评估且此前已有测试集接触，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 看图说话分类要解决什么信息保留问题

输入是同一张 Cookie Theft 图画、每位参与者的录音和官方转录文本，目标是判断说话人属于阿尔茨海默病组还是健康对照组。ADReSS 基准固定了 108 人训练、48 人测试的参与者划分，所有人都描述同一场景，所以理论上可以比较谁提到了什么、按什么顺序、花了多少时间。

临床常用的信息单元计数会看是否说出画中物体、动作和事实，但常规分类器往往只输出一个总分。这个总分说不清它来自哪句话、哪个画面位置。NarraSpace 要解决的就是这种断裂：测量值必须能沿记录找回原话、语音区间和提取规则，否则医生无法检查分数是怎么来的。

本文的输出因此有两层，一是参与者级的 AD 概率与二分类决策，二是每个事件分数背后保留的原句、锚点命中和词表命中。论文反复强调后者是来源归属，不是决策归因，也不证明能提高临床判断速度或准确率。

### 特征数量与事件定义的速查

本节把数量关系集中速查，方便复述关键步骤时核对。完整系统是 236 个构造特征加 20 个缺失标记得到 256 候选，再选 60 个输入。31 个事件记录摘要只供检查，不进入构造、候选与选中 3 个阶段。

下表核对完整系统的特征记账，比较问题是各证据家族各贡献多少构造列，以及缺失标记如何扩大候选池，单位为列数。

| Evidence family | Representation | Added indicators |
| --- | --- | --- |
| Speech timing | 21 | 0 |
| Acoustic | 88 | 0 |
| Linguistic | 27 | 0 |
| Image–text relevance | 10 | 0 |
| Narrative-spatial | 70 | 0 |
| Scene-likelihood and coverage | 20 | 20 |
| Total | 236 | 20 |

上表说明语音 timing 占 21 列、声学占 88 列、语言学占 27 列、图文相关占 10 列、叙述空间占 70 列，场景打分与覆盖占 20 列并另加 20 个缺失标记，合计 236 个构造特征加 20 个标记。数量本身不证明重要性，各家族实际选中数随拟合而变。

原文另行说明候选池为 256 列、选中输入为 60 列，31 个事件记录摘要独立于上述 3 阶段只供来源检查。原表末两行在存档中各为跨两列的合并单元格，不表示存在 256 或 60 个缺失标记，此处为避免误读将其移为表外说明，表内只保留 0 到 7 行的家族与合计行。

下表核对 7 个规范事件的名称，比较问题是后续打分与报告按什么事件索引存放。

| Identifier | Canonical scene event |
| --- | --- |
| E1 | Boy reaching for cookies |
| E2 | Stool instability |
| E3 | Girl observing |
| E4 | Woman dishwashing |
| E5 | Sink overflow |
| E6 | Woman unaware of the hazard |
| E7 | Global kitchen context |

上表是 E1 到 E7 的完整名称，分别对应拿饼干、凳子不稳、女孩旁观、洗碗、溢水、未察觉危险和整体厨房语境。取回、打分与报告都按此索引存放，E7 没有完形模板，缺取回文本时配对对比无定义。

下表核对 70 维叙述空间特征的分组，比较问题是覆盖、顺序与时间组织各由哪组描述。

| Subfamily | Count | Represented property |
| --- | --- | --- |
| Narrative profile | 40 | Coverage, duration, path, graph structure, and mapping status |
| Reference deviation | 3 | Coverage, first-mention order, and dwell allocation relative to a healthy-control reference |
| Timing–space interaction | 10 | Relationships between pauses, dwell, and anchor transitions |
| Temporal segmentation | 14 | Changes between the first and second halves of the visit interval |
| Transition sequences | 3 | Repetition and entropy of anchor pairs and triples |
| Total | 70 |  |

上表是 70 维的 5 组划分，40 加 3 加 10 加 14 加 3 等于 70，其中前后半段变化 14 维与转移序列 3 维不可遗漏。家族删除评估的是整组，紧凑替代只用 6 个指定坐标，不能从组名推断每维都必要，其中映射状态 3 维还编码了提取过程本身的行为。

下表核对 20 列打分流的构成与处理，比较问题是哪些列依赖类示例重聚合、哪些列复用存档。

| Descriptors | Count | Control group | Evaluation handling |
| --- | --- | --- | --- |
| Cloze mean, minimum, positive count | 3 | Event scores | Reaggregated |
| Cloze defined-event coverage | 1 | Coverage | Reaggregated |
| Seven paired contrasts, mean, positive count | 9 | Event scores | Reaggregated |
| Scene mean, maximum, variance; vague, action, object surprisal | 6 | Surprisal | Reused |
| Unmatched-concept count | 1 | Coverage | Reused |

上表共 3 加 1 加 9 加 6 加 1 等于 20 列，其中完形已定义事件覆盖 1 列不可遗漏，完形与配对共 12 列属事件分数需重聚合，惊讶度 6 列与未匹配计数复用存档。删整流同时删 20 个标记，不能把效应全归于似然值，目标对照因此保留标记只换数值组。

### 已有路线提供了信号，但缺事件级可检查链接

ADReSS 上的已有工作包括语言与声学描述子、时序整合、带停顿的语言模型、集成和提示学习，转录本的构建方式本身也会影响信息。另一条路线是空间语义图、词与图像区域对齐、图文一致性，把描述连回画面。

与本文最接近的是 Xiao 等用两套分别适配 AD 和 HC 的模型对整篇转录本算困惑度再对比。NarraSpace 的不同在于不用两个微调模型，而用一个冻结的 Qwen2-7B，对同一事件取回文本分别加 AD 示例和 HC 示例做条件打分，并把事件、被打分文本、对比方式和提取规则一起保留。

比较时要注意条件并不相同：Xiao 复现用测试集导出的等错误率阈值，NarraSpace 用训练验证概率选阈值；主干、适配方式、打分粒度都不同。原文因此明确说文献值只提供背景，不能排成同一协议下的名次。

### 为什么必须把分数固定到事件和语音时间

同一张图下，两段描述可能提到相同的物体，但重访次数、停顿和顺序完全不同。如果只用整篇困惑度或整篇向量，就把这些组织差异压扁了。更麻烦的是标量分数无法回答它对应溢水、凳子不稳还是洗碗。

论文把问题拆成表示问题：如何让分类器输入保留语言测量与具体场景内容之间的连接。做法是先设 15 个命名图画元素作为锚点，再设 7 个预定义事件作为取回容器，所有后续打分都按事件索引存放。

这样做的好处是检查者可以从显示的事件分数倒查原句、词表命中和场景锚点，看到哪些字段是词表没有命中的未检出证据，而不是把缺失当成被试者一定没说。

### 整体流程：两条分支如何汇成一个分类向量

流程起点是录音、官方 CHAT 转录本和共享图片。转录处理分两支：语言模型打分只用去掉考官轮次、任务指令、标注符和尖括号内回溯文本后的被试说话；语言学特征额外使用原始形态句法标注和原始不流利标记。WhisperX 只做强制对齐给出词时间，不重新生成转录本。

中间是两条 NarraSpace 特有流。叙述空间流把已对齐词映射到锚点形成访问序列，计算覆盖、路径、图、时间等 70 维；场景打分流为每个事件取回完整 utterances，用冻结语言模型算配对与完形对比，再加转录惊讶度和覆盖计数，共 20 列。加上 21 维语音 timing、88 维声学、27 维语言、10 维图文相关，共 236 维，再为 20 个打分列各加一个缺失标记，得到 256 个候选，从中选 60 个送入支持向量机。

下图是全文的总览，先看主路径再看两条特有流的位置，特别注意事件记录摘要只供检查，不进入分类器。

> **看图路径：** 1. 沿从左到右的箭头看输入、对齐、两条 NarraSpace 流、特征向量到分类器的主路径；2. 看紫色叙述空间块与绿色场景打分块分别输出什么，再看下方基础特征条如何汇合；3. 注意最右侧可检查报告中事件、锚点、语音片段与配对差值的对应关系

[![原论文 Figure 1：NarraSpace constructs features while retaining links to their source text and speech times.](https://arxiv.org/html/2610.28616v1/F1.svg)](https://arxiv.org/html/2610.28616v1/F1.svg)

*论文图 1。原论文 Figure 1:：“NarraSpace constructs features while retaining links to their source text and speech times.”。*

图显示从输入到对齐、再到两条流、再到 236 维向量与标准分类器的链条。紫色块对应叙述空间的覆盖转移轨迹示意，绿色块对应冻结语言模型对同一事件片段的打分，右侧报告示例把 E5 溢水事件、sink 与 water 锚点、原片段与配对差值连在一起，说明分数与来源是同时呈现的。

### 词语如何落到 15 个锚点和 7 个事件

15 个锚点是固定的：男孩、女孩、女人、凳子、饼干罐、饼干、水槽、水、盘子、窗帘、窗户、柜台、地板、花园和晾盘动作。前 14 个指画中实体或位置，最后一个指动作，每个都有参考图上的固定框中心。映射顺序是先短语规则，再词表查找，最后用 all-mpnet-base-v2 的原型相似度兜底，要求余弦至少 0.45 且与第 2 名的差距至少 0.08，否则保持未分配。

**场景锚点 × 访问：** 场景锚点是预先命名的图画元素，如水槽、凳子、饼干罐，负责把自由文本固定到共享画面的位置；访问是按语音起始时间排序后把连续提到同一锚点的词合并成一段，记录起点、终点和锚点中心，二者搭配把离散的词语变成可在时间与空间上追踪的叙述轨迹。

7 个事件覆盖拿饼干、凳子不稳、女孩旁观、洗碗、溢水、女人未察觉危险和整体厨房语境。只要一句的规范化词命中该事件任一字段词表，或其已接受锚点落在该事件锚点集合，就取回整句。所有取回句按叙述顺序拼接成事件文本，可能在原文中不连续，也可在多个事件间共享。字段只要在任一取回句中有命中就记为已填，不处理否定，也不做语义蕴含判断。

**事件记录 × 事件文本：** 事件记录是为七个预定义场景事件各设的容器，用行动者、动作、客体、地点、后果五个词表字段记录命中情况；事件文本是为该事件取回的全部完整 utterances 按叙述顺序拼接的结果，前者说明按什么规则取回，后者是真正送入语言模型打分的对象，二者一起保留打分依据。

这一步的代价是词表即规则：running 会被切成 runn 而对不上规范词，否定句也会贡献命中，paraphrase 若不在词表就会显示为空字段。单标注者对 404 个已接受短语与原型映射的审计精确率为 96.04%，但审计只查已接受映射的精确率，不估计召回与事件级语义准确度。

### 叙述空间 70 维在算什么组织差异

去掉未分配词后按起始时间排序，相邻同锚点合并为 1 次访问，即使中间隔着未分配词或长停顿也不切断。记每次访问的锚点、起止语音区间和固定图像质心，覆盖率是不同锚点数除以 15，停留是访问时长求和，转移距离是相邻质心欧氏距离，重访指回到已到过的锚点。

70 维分成 5 组：40 维叙述画像管覆盖、时长、路径、图与映射状态，3 维相对健康对照参考的偏离，10 维停顿与空间的交互，14 维前后半段的变化，3 维二元三元转移的重复与熵。其中参考偏离用训练中健康对照的常见锚点、平均首提顺序和平均时长分布，分别算未覆盖比例、一减 Kendall 秩相关和 KL 散度。

**叙述空间特征 × 场景打分流：** 叙述空间特征描述提到了哪些锚点、以什么顺序和时间分配提到，共 70 维，不依赖类示例；场景打分流是用冻结语言模型对事件文本做的似然对比、转录惊讶度和覆盖计数，共 20 列，依赖训练参与者构成的示例池，前者刻画覆盖与组织，后者刻画在类语境下的可预测性，分类器把两路与声学语言等基础特征一起使用。

需要留意 3 维映射状态特征编码了提取过程本身的行为，不是独立的认知测量。论文在附录中说明删掉 70 维并不删掉全部场景信息，因为语言学家族另有 3 维也量锚点覆盖或重复。

### 同一段话在两类示例下如何打分

打分模型是冻结的 Qwen2-7B 基础因果语言模型，不做疾病微调，标签只在 prompt 外决定用哪池示例，不写入 prompt。每个事件从允许的训练参与者中为 AD 和 HC 各抽同样数量示例，目标文本跟在示例后，只有目标词元参与平均。示例数规则是若较小池不足 10 则全用，否则取较小池的 70% 与 30 中较小者，每个事件每种子抽 2 对独立上下文再平均。

下图先看两个输入的并列结构，再看只计目标词元的含义，完形与配对的区别在计分范围。

> **看图路径：** 1. 对比上下两个输入：同一目标文本前分别接 AD 示例和 HC 示例；2. 确认只有目标词元被计分，示例只作为条件；3. 区分下方完形似然与配对似然在计分范围上的不同

[![原论文 Figure 2：Two inputs, one scoring model: AD training examples followed by the target event text, and HC…](https://arxiv.org/html/2610.28616v1/F2.svg)](https://arxiv.org/html/2610.28616v1/F2.svg)

*论文图 2。原论文 Figure 2:：“Two inputs, one scoring model: AD training examples followed by the target event text, and HC training examples followed by that same text.”。*

图上半是整篇打分与事件局部打分的区别，下半给出目标平均对数似然公式与两类对比的符号含义，正差为 AD 倾向，负差为 HC 倾向，完形模板手写但不作为模型输入。

\[\mathcal{L}_{C}(\mathcal{T}_{e})=\frac{1}{|\mathcal{T}_{e}|}\sum_{i\in\mathcal{T}_{e}}\log p_{\theta}(x_{i}\mid C,x_{\lt i})\quad[\mathrm{nats/token}].\]

上式计算在示例语境 C 下事件文本目标位置集合的平均对数似然，单位是每词元奈特，xi 是目标词，x<i 是其前文，theta 是冻结参数。分母是目标词元数，示例词元不计入。

\[\Delta_{e}=\mathcal{L}_{C_{\mathrm{AD}}}(\mathcal{T}_{e})-\mathcal{L}_{C_{\mathrm{HC}}}(\mathcal{T}_{e}).\]

上式是配对事件对比，AD 语境下的均值减 HC 语境下的均值，正值表示冻结模型在 AD 示例下给这段话更高平均似然，不是事件级诊断，也不直接等于分类器贡献。完形对比把求和限制在与填充词表匹配的子词表面，如 overflow、spill、leak，E7 无模板；无取回文本则配对无定义，无匹配子词则完形无定义。

**配对事件对比 × 完形对比：** 配对事件对比是对同一事件文本分别在阿尔茨海默病示例和健康对照示例下计算平均目标对数似然再相减，反映在冻结模型中哪类语境更能预测这段话；完形对比只对其中与手写填充词表匹配的子词位置做同样的相减，更聚焦溢出、洒落等关键词，二者分工为整体风格相似与局部关键词可预测性各提供一路测量。

20 列的构成为 4 个完形汇总、9 个配对相关、6 个转录惊讶度汇总和 1 个未匹配概念计数，其中完形已定义事件覆盖 1 列不可遗漏。转录惊讶度在原文自身上下文中算负对数似然，先整词匹配再收其内子词，与完形的逐子词表面匹配规则不同。非有限值用拟合分区中位数填补并配二进制缺失标记，共 40 列候选。

### 没有训练语言模型时实际拟合了什么

本研究没有训练语言模型和声学编码器：Qwen2-7B、CLIP ViT-L/14、WAV2VEC2 对齐检查点和句子编码器都是冻结调用，实际计算是检索、映射、拼接 prompt 和前向打分。需要拟合的是中位数填补、互信息与 Mann-Whitney 双排序选 60 维、标准化、健康对照参考、示例池抽样和带 RBF 核的支持向量机，核为 exp 负 gamma 距离平方，C 取 30，gamma 取 0.001。

拟合边界是修正重点：每个外部折用另四折构建示例池与对照参考，拟合目标还要从自身语境中排除自己；验证行只套用拟合好的变换。最终模型用 108 个各自在所属折被 held-out 时的特征版本拟合，测试行用全部 108 人参考。分类器内部另有五折 sigmoid 把决策值转成概率，不重做上游选择。

**来源归属 × 分类器决策解释：** 来源归属指能从一个数值沿记录找回它来自哪句话、哪个语音区间、哪次词表命中和哪个锚点映射；分类器决策解释指把最终判为 AD 或 HC 归因到某个特征的贡献，本文只做前者，明确说明不证明某个分数导致了分类结果，也不证明这种呈现能改善临床判断。

50 个种子只改变示例抽样和分类器随机性，参与者折划分固定。阈值在拼接的训练验证概率上按 Youden 统计量在 0.10 到 0.90 每 0.01 搜索，取最小并列值。AUC 与阈值无关。

### 数据划分、指标与不确定度如何定义

数据是 ADReSS Cookie Theft，108 训练、48 测试，AD 为正类。主指标是 50 种子平均测试准确率，离散度用总体标准差；聚合指标先对每人平均 50 个概率再用训练选出的阈值判定，聚合 AUC 用平均概率排序。48 人意味着 1 人改变对应约 2.08 个百分点，50 种子不增加独立被试数。

参与者不确定度用 10000 次按诊断分层的自助法，同一组索引在两系统间配对，拟合与阈值固定，只反映测试参与者抽样，不含训练集选择和方法开发的不确定度。McNemar 精确双侧检验比较聚合决策的不一致数。

家族删除每次都重做填补、选择、拟合与阈值；删打分流同时删其 20 个标记。目标对照在测试暴露后指定，保留全部 20 个标记，只问事件分数值在覆盖、惊讶度和标记之外是否加信息，以及 6 维紧凑空间替代是否够用，不选新主系统。

### 主系统在 48 人测试集上得到什么

固定主系统在分区隔离流程下平均准确率 80.88%，平均 AUC 90.65%，聚合后 39 对 48 正确，准确率 81.25%，AUC 91.32%，训练选出阈值 0.56。参与者自助 95% 区间平均准确率为 70.75 到 89.88 之间，聚合准确率为 68.75 到 91.67 之间，聚合 AUC 为 82.47 到 97.57 之间，区间宽反映 48 人小样本的抽样不确定，标准差反映种子间波动。

下表汇总完整表示的绝对表现与去掉某一证据家族后的变化，比较问题是同一支持向量机和 60 个输入下家族删除是否改变分类结果，准确率分母都是 48 人，AUC 越高排序越好。

|  | Fifty-seed mean | Fifty-seed mean | Aggregated probability | Aggregated probability |
| --- | --- | --- | --- | --- |
| Removed evidence family | Accuracy | AUC | Accuracy | AUC |
| None (full) | 80.88 ± 2.56 | 90.65 ± 1.32 | 81.25 | 91.32 |
| Speech timing | 83.25 ± 2.24 | 91.14 ± 1.42 | 85.42 | 92.19 |
| Acoustic | 81.08 ± 2.49 | 90.89 ± 1.39 | 79.17 | 91.15 |
| Linguistic | 80.88 ± 2.63 | 89.76 ± 1.71 | 81.25 | 90.97 |
| Image–text relevance | 81.25 ± 2.57 | 91.23 ± 1.20 | 79.17 | 91.84 |
| Narrative-spatial | 78.21 ± 3.80 | 86.80 ± 1.69 | 81.25 | 87.67 |
| Scene-grounded likelihood | 81.63 ± 2.97 | 88.89 ± 0.02 | 81.25 | 88.89 |

上表显示完整系统平均 80.88% 而去叙述空间降到 78.21% 降幅最大，但完整减删除的配对区间包含零，聚合准确率不变。去掉语音 timing 后平均准确率为 83.25%，聚合 41 正确，反而高于完整系统，其配对优势区间同样包含零，因此不能据此认定删除更好，指定的完整系统仍为主要系统。

下图把分数连回原话，左侧为 AD 参与者，右侧为健康对照，先看取回句与锚点链接，再看事件字段填充与配对差值符号。

> **看图路径：** 1. 对比左右两例的填充字段数、覆盖锚点数与配对差值符号；2. 看 S191 与 S163 的取回原句及其橙色锚点链接标注；3. 看底部 AD 概率与阈值无关的原始分值，再结合正文阈值理解决策

[![原论文 Figure 3：Inspecting scene-linked measurements through their source speech.](https://arxiv.org/html/2610.28616v1/F4_corrected.svg)](https://arxiv.org/html/2610.28616v1/F4_corrected.svg)

*论文图 3。原论文 Figure 3:：“Inspecting scene-linked measurements through their source speech.”。*

图中 S163 的取回句描述水从水槽溢出，对应溢出事件，S191 的椅子表述通过映射连到凳子锚点。2 例展示取回文本、场景锚点匹配与事件字段覆盖如何并列呈现，E7 无对齐片段表示该事件没有可用对比，2 位参与者在有无打分流时都被正确分类，例子只说明输入可检查，不证明分数导致正确。

### 去掉一路特征与只加事件分数各说明什么

家族删除回答整组特征对拟合系统的影响，不是单个特征的因果效应。有无打分流的聚合系统都是 39 对 48 正确，但 10 人的聚合决策发生变化，加流纠正 5 人又新错 5 人，因此聚合准确率不变伴随错误在两组间转移。S197 的例子说明概率变化与决策变化须一起读：其 AD 概率上升但阈值也上升，决策反而从 AD 变为 HC。

下表比较事件分数与紧凑空间替代的目标对照，比较问题是在保留覆盖、惊讶度与全部 20 个缺失标记时，数值型事件分数是否带来额外信息，以及 70 维空间特征能否被 6 维替代，指标方向均为越高越好，每池都重选 60 个输入。

|  |  | Fifty-seed mean | Fifty-seed mean | Aggregated | Aggregated |
| --- | --- | --- | --- | --- | --- |
| Pool | Candidates | Accuracy | AUC | Accuracy | AUC |
| Full reference | 256 | 80.88 ± 2.56 | 90.65 ± 1.32 | 81.25 | 91.32 |
| Coverage + flags | 238 | 79.33 ± 0.57 | 89.93 ± 0.00 | 79.17 | 89.93 |
| Coverage + surprisal + flags | 244 | 80.17 ± 1.73 | 92.01 ± 0.00 | 79.17 | 92.01 |
| Coverage + event scores + flags | 250 | 79.88 ± 2.91 | 89.73 ± 1.81 | 81.25 | 90.63 |
| Compact spatial | 192 | 77.96 ± 3.78 | 87.92 ± 1.47 | 83.33 | 89.06 |
| Two-coordinate removal | 254 | 80.96 ± 2.64 | 90.74 ± 1.52 | 81.25 | 92.19 |
| Mapping quality removed | 253 | 80.29 ± 2.71 | 90.60 ± 1.33 | 79.17 | 91.67 |

上表显示事件分数在已有覆盖与惊讶度之外只带来 0.71 个百分点的均值变化，紧凑替代在均值上更低但在聚合上反超，方向随指标而异。这些对照在测试暴露后指定，不选新主系统，8 组均值区间的配对区间都不排除零，McNemar 检验均为 1.00，既不证明完整设计必需，也不证明决策规则等价。映射审计的 96.04% 精确率只适用于被接受的短语与原型映射，放在此处仅作提取质量背景，未分配候选与事件分配不在审计框内。

### 结论在什么条件下才成立

评估是探索性的：官方测试集此前已被查看，修正保留了分类器与参数，48 人小样本使自助区间很宽，所有家族删除的配对区间都包含零。训练与测试参考池大小不同，修正不声称消除这种分布差异。原始打分记录缺示例标识，示例隔离靠冻结生成器与折键支持，不是逐记录审计。

表示本身有缺口：事件取回不处理否定与蕴含，规范化会把 running 变成 runn，同一句可在多事件共享，空字段记为未检出证据而非确认遗漏。图节点数与语言锚点数在全部 156 人中恒等，4 个坐标高度冗余，去两坐标的对照并未去掉全部冗余。

临床可用性与解释忠实度都未测量。AD 倾向对比与 HC 预测可以并存，因为分类器还组合了其他被选特征。是否能提高检查准确率或速度仍是待验证的经验问题。

### 复现第一步要准备什么

先申请 ADReSS 原始音频与 CHAT 转录本，按附录规则做参与者-only 清洗：去掉考官轮次与指令，去掉填充码、回溯标记、标准形目标、错误标记和不可懂标记，删掉整个尖括号回溯片段，保留口语原形。不要把自动识别当转录来源，WhisperX 3.8.5 只用强制对齐配英文 WAV2VEC2 检查点。

再固定 15 锚点原型、7 事件五字段词表、完形填充词表和 Qwen2 分词器版本 453ed1575b739b5b03ce3758b23befdb0967f40e，用 bfloat16 与缩放点积注意力重算目标-only 似然。示例池与健康对照参考必须按五折外部划分重建，目标自身排除，中位数、选择、标准化只用拟合行。环境为 Python 3.10.12、NumPy 1.24.4、pandas 2.2.1、SciPy 1.13.1、scikit-learn 1.5.0。

来源状态方面，未发现绑定且完成 HTTPS 验证的作者资源，不得声称代码模型数据已公开。手稿存档只有论文与图片，没有完整流水线与拟合产物，复现需自行实现解析对齐与分折编排。

### 什么时候值得尝试与还缺哪项验证

当任务有共享画面且需要把每个分数指回原句与时间时，这套按锚点轨迹加事件取回再加类语境对比的组织值得借鉴。它把覆盖顺序时间与可预测性分开存放，又用记录把提取选择留在分数旁边，适合做可审查的量化摘要。

若只追求测试准确率，本文证据不支持把完整设计当必选项：去语音 timing 更高，去叙述空间与加事件分数的区间都含零，紧凑替代在聚合上反超。选择应看是否需要检查映射与共享文本，而不是看单点胜负。

还缺的验证是独立队列的迁移、事件级人工标注的召回与语义准确度、同模型下局部与整篇打分的匹配比较，以及检查准确率与工作量的实测。只有补上这些，才能判断来源链接是否真正帮助人工复核。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.28616v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
