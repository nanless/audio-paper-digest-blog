---
title: "From Attention to Semantics: Detecting and Mitigating Sound Event Hallucinations in Large Audio-Language Models"
date: 2026-11-20
draft: false
tags: [音频字幕生成, 检索增强, 幻觉与忠实度, 音频大模型]
categories: [论文速递]
description: "论文发现真实与幻觉事件可获得相当的音频注意力但关注位置与语义支撑不同，据此提出无需训练的先检测后差分掩蔽框架，在三个模型与两个数据集上提升事件级检测与再生时的幻觉压制，同时尽量保住已支撑内容。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.25789"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "注意力相当却语义不符：大音频语言模型的事件幻觉检测与差分掩蔽"
paper_digest_original_title: "From Attention to Semantics: Detecting and Mitigating Sound Event Hallucinations in Large Audio-Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.25789v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.25789v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.25789v1.pdf"
paper_digest_primary_task: "音频字幕生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "检索增强"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文发现真实与幻觉事件可获得相当的音频注意力但关注位置与语义支撑不同，据此提出无需训练的先检测后差分掩蔽框架，在三个模型与两个数据集上提升事件级检测与再生时的幻觉压制，同时尽量保住已支撑内容。"
paper_digest_reader_sections: [{"heading":"问题本质：注意力总量相当时幻觉为何仍会出现","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：输入波形如何走完检测再到掩蔽再生","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"检测机制：高关注位置的隐状态如何变成可投票的语义支撑","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"缓解机制：差分选择如何护住真实区再静音幻觉区","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"检测效果：语义支撑在稠密与稀疏幻觉下为何更稳","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"缓解效果：压低幻觉的同时覆盖率付出了什么代价","index":6,"kind":"result","roleLabel":"主实验验证"},{"heading":"关键选择验证：预算与策略怎样改变压制和保留的权衡","index":7,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"适用边界：何时值得尝试以及复现时先核对什么","index":8,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["Shanghai Jiao Tong University"],"name":"Tianyi Sun"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Minghao Lv"},{"affiliations":["Guangdong OPPO Mobile Telecommunications Corp., Ltd."],"name":"Chunyang Yu"},{"affiliations":["Guangdong OPPO Mobile Telecommunications Corp., Ltd."],"name":"Shenyue Wang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Mengyue Wu"}]
paper_digest_abstract_sha256: "59a862bdb2cb5770a40f3d5649c5c6e90ffed9d67ae7da190752fa3e6bf3169b"
paper_digest_sidecars: {"citation.bib":{"sha256":"c45fb7153ba6e47162c6e95cefd3e73f61838e54b0479d5c3099acb9604e2f38","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25789/citation.bib"},"citation.json":{"sha256":"c384f3af3ece33e550e2bc1f2be1d86563079e33fc0585a113e11ec1df664aba","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25789/citation.json"},"citation.ris":{"sha256":"261f6bc0400ab4ae3a5042ad45f783465b311974f1b232f7698081d33c43897f","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25789/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"44e2e6bf8d3a88b9c0ee09eb94932c062a5e0bc85a5c80e1dad93729eb9dec43","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25789/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "257d490118faa10918a77e467fee9934acc4ede777564779fa237a7d3a2af706"
paper_digest_api_reader_plan_sha256: "5ff0f4a3d9179d427c8973d01eb8fdbad02c19e98a40a7a98e45677defd91746"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "05197e028eb1b8649413fbb1d7d81b96ff06955748e721a1b6b15a0d579c834d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "0fd4005b704958d3272321da2be65918f3712c3661ea12e801c12866007ec16a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1d1196d84ddfd3a81c6e7c2505857acccbc36fd76dcb1abf4993c77ca4a46879"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9488a104668855eb19d63858ff19e7d5973dad7bda68659dc764f6b169ac7677"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 注意力相当却语义不符：大音频语言模型的事件幻觉检测与差分掩蔽

> 英文题目：*[From Attention to Semantics: Detecting and Mitigating Sound Event Hallucinations in Large Audio-Language Models](https://arxiv.org/abs/2611.25789v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-paper-digest-blog/papers/?concept=task.audio-captioning)
- **研究方法**：[检索增强](/audio-paper-digest-blog/papers/?concept=method.retrieval-augmented)
- **研究重点**：[幻觉与忠实度](/audio-paper-digest-blog/papers/?concept=research_focus.hallucination-faithfulness)
- **模型家族**：[音频大模型](/audio-paper-digest-blog/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.4/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Tianyi Sun：Shanghai Jiao Tong University
- Minghao Lv：Shanghai Jiao Tong University
- Chunyang Yu：Guangdong OPPO Mobile Telecommunications Corp., Ltd.
- Shenyue Wang：Guangdong OPPO Mobile Telecommunications Corp., Ltd.
- Mengyue Wu：Shanghai Jiao Tong University

## 📌 核心摘要

**问题与瓶颈：** 输入是一段环境声音与描述提示，输出是一段自然语言描述，描述中包含多个声音事件名称，任务要求每个事件都能在输入音频中找到依据。已有工作把幻觉归因于模型对音频注意不足，并试图在解码时放大音频证据。论文在Audio Flamingo 3等模型上发现，真实事件与幻觉事件分到的音频注意力总量可以接近，但集中在不同的音频位置，只看注意力强度无法区分两者，直接把高注意力音频段静音又会同时删掉真实内容。

**核心思路与方法架构：** 核心洞察是受关注的音频表征是否在语义上支持所生成的事件名称。系统在冻结模型下工作，保留一次生成时的注意力权重与音频隐藏状态，用同一文本大模型在无音频条件下抽取事件短语并映射到本体词汇。对每个事件在注意力集中的层段内平均多头与核心词元注意力，取出每层最受关注的3个音频位置，用潜在透镜在离线文本参考库中检索最邻近的上下文文本表示，若检索文本映射到的本体标签与事件标签相同或存在祖先后代关系则记一票，多层多位置票数相加低于阈值判为幻觉。缓解时先保护被判为有支持的事件最受关注的10个位置，再从被判为幻觉的事件排序中跳过保护位置补足10个掩码位置，把对应波形段置零后用原提示贪心再生。

**关键实验与核心代价：** 评测用AudioSet Strong评测划分与DCASE2019的fbsnr_30dB家居混合子集，模型为Audio Flamingo 3、Qwen2.5-Omni-7B和Step-Audio 2 mini，每个数据集模型组合测500条，幻觉为正类报告精确率、召回率、F1与PR-AUC，再生报告ECHO-I与ECHO-S越低越好和Coverage越高越好。在AudioSet Strong上Audio Flamingo 3事件级F1为0.7466，高于事件级最强可比基线Perplexity的0.5992，事件级PR-AUC为0.7944，高于最强基线RAUQ Entropy的0.5814，样本级F1为0.7897。缓解在AudioSet Strong上Audio Flamingo 3的ECHO-I为14.9%，低于音频条件对比方法AAD的20.6%和贪心解码的22.7%，ECHO-S为23.0%，低于AAD的29.2%和贪心解码的34.0%，Coverage为34.1%，略低于AAD的34.2%但高于贪心解码的31.8%，Qwen2.5-Omni同时取得三项最好21.4%、37.0%、38.6%。代价是每次需要第二次解码与跨层检索，掩码预算取10在多数组合最好，个别设置下Coverage会低于贪心解码，如Qwen2.5-Omni在DCASE2019上为54.7%，低于贪心解码的59.7%。

**适用边界与深读导览：** 结论仅在冻结模型、200条选参冻结后各500条评测、本体规则固定时成立，AudioSet Strong用祖先后代匹配而DCASE2019用精确匹配，改变层段、检索预算或票数阈值会改变F1与分数排序。幻觉稀少时权衡会退化，如DCASE2019上Audio Flamingo 3仅2.7%事件为幻觉，Step-Audio 2 mini在AudioSet Strong样本级PR-AUC为0.6170，未超过RAUQ Entropy的0.6191，Qwen2.5-Omni在DCASE2019上Coverage为54.7%，低于贪心解码的59.7%，检测误判还会直接带偏保护与掩码集合。尚未验证三模型与两数据集之外的语言、长音频与训练介入方案，且检测表队列系观察结果后选定，不作额外独立测试。若需复核层段、预算与本体规则对排序和掩码取舍的影响，可查阅下方长文中检测设置、消融与精度召回曲线对应章节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：注意力总量相当时幻觉为何仍会出现

刚接触音频语言模型的研究生容易把幻觉理解成模型没有听音频，这篇论文要纠正的正是这种直觉。它研究的大音频语言模型由音频编码器、连接器和语言模型组成，输入是一段波形加文字提示，输出是一段开放式描述，幻觉指描述里出现了输入中并不存在的声音事件，例如把水声环境说成背景里有山羊叫。此前有工作把原因归于音频注意力不足，并提出在解码时加大音频证据权重，但本文的起点是总量够了仍可能出错。

作者在 495 段音频描述样本上记录解码器每一层的注意力，并按事件的核心词平均注意力。左上面板显示音频注意力在中间层形成一组峰，作者据此把该连续区间称为音频注意力阶段，在所用模型上该阶段是第十五层到第二十二层。左下柱状图进一步显示，真实事件与幻觉事件在该阶段的平均音频注意力占比相近，误差线也有重叠，说明只看分了多少注意力并不能把两类事件分开。

**声音事件幻觉 × 音频注意力 × 语义支撑：** 声音事件幻觉指描述中出现输入音频并不支持的事件名称，音频注意力只说明生成时分了多少权重给音频，语义支撑则追问被关注的音频表示在内容上是否真的讲了这件事，三者搭配才能把看得多与看得对分开。

真正的区别出现在关注位置上。右侧例子中同一句回答同时包含真实的水流声与幻觉的山羊叫，两者在第十五层、第十九层和第二十一层的热图峰位落在不同的时间附近，虚线框标出的最关注位置并不重合。这就引出论文的核心追问：不同的关注位置是否携带不同的语义，被关注的音频表示到底支不支持模型写下的事件名称。如果只加强注意力总量，模型可能依然在听错的位置上自信地生成，因此需要把注意力定位与语义内容联合起来判断。

下面这张图把总量相当与位置不同放在同一案例里，是理解后文为何要做语义检索的关键，建议按总量、位置、语义三步来读。

[![原论文 Figure 2：A typical case with audio attention analysis.](https://arxiv.org/html/2611.25789v1/figure1.png)](https://arxiv.org/html/2611.25789v1/figure1.png)

*论文图 2：A typical case with audio attention analysis（原论文 Figure 2）。*

这张图左侧说明了在哪几层看音频才有意义，右侧说明了即使总量相近也要继续看位置。总量相近否定了只用注意力强度做检测的充分性，位置不同则为后文的干预埋下伏笔：直接盖住幻觉关注区可能同时盖住真实事件的证据，所以掩蔽前必须先区分哪些位置值得保护。下一节将沿着一个样本走通从生成到再生的完整闭环，再展开检测与掩蔽各自的计算。

### 方法全景：输入波形如何走完检测再到掩蔽再生

把一次完整流程想成两遍生成加一次判断，会更容易跟上本文框架。第一遍是正常描述生成，模型读入音频记号、系统记号和文字记号，自回归地输出描述文本，同时保留每一层的注意力权重与音频隐状态。第二遍是干预后的再生，只有当检测器判定存在幻觉时才会发生。两遍共用同一个原始提示与贪心解码设置，区别只在于第二遍输入波形的某些时间区间被置零。

**音频注意力阶段 × 高关注音频位置 × 隐状态：** 音频注意力阶段是按层级注意力分布选出的连续解码器层窗口，高关注音频位置是在该窗口内按事件平均注意力挑出的音频记号，隐状态是这些位置在各层的内部表示，后续语义检索正是解读这些隐状态而不是只看注意力数值。

中间的判断分为定位与检索两步。定位是事件级的：先用模型自身的文字语言模型在无音频条件下抽取事件短语并映射到数据集本体，未能映射的事件不打分；再对每个已映射事件，把其核心词在音频注意力阶段内按头平均、按词平均，得到每层每个音频位置的平均注意力，从中挑出每层最受关注的若干位置。检索是语义级的：把这些位置的隐状态拿去参照文本库中做最近邻查找，看邻居文本是否在本体意义上支持该事件，得分低的判为幻觉。

掩蔽则是差分式的。系统先把被判为有支撑事件的高关注位置组成保护集合，再为每个被判为幻觉的事件在其关注排序中从高到低挑选落在保护集合之外的位置，合并成最终掩蔽集合。掩蔽集合按音频记号数换算成均匀时间区间，对应波形采样点置零后重新生成。若没有事件被判为幻觉，则直接保留原始回答，不做任何改动。

下图把上述 3 段画在同一张总览里，左侧是定位，中间是检索与投票，右侧是保护与掩蔽的选择与再生，建议先看主路径再看分支汇合处。

[![原论文 Figure 4：Overview of our detect-then-mitigate framework.](https://arxiv.org/html/2611.25789v1/main.png)](https://arxiv.org/html/2611.25789v1/main.png)

*论文图 4：Overview of our detect-then-mitigate framework（原论文 Figure 4）。*

这张总览的价值在于明确信息流向：注意力只决定去哪里看，检索结果才决定是否支持，保护集合则把检测结论变成掩蔽时的约束。没有训练过程，全部计算都是冻结模型的推理、检索与波形操作。接下来两节分别深挖检测打分如何算出，以及掩蔽区间如何选出并落到波形上。

### 检测机制：高关注位置的隐状态如何变成可投票的语义支撑

检测要回答的是每个已映射事件是否得到其所关注音频的语义支持。第一步定位已经把每个事件在每一层压缩成平均注意力向量，做法是对注意力头求平均再对事件核心词求平均，然后在该层取注意力最高的 3 个音频位置。这里的层不是任意的，而是各模型各自的音频注意力阶段，论文给出 3 个模型的窗口分别为 15 到 22 层、18 到 24 层和 15 到 23 层，均为解码器层序号。窗口的作用是把同一事件在多个表示上的证据累加起来，而不是只看单个峰值层。

第二步是把音频隐状态翻译成可读的文本证据。直接用词表投影去读音频位置的隐状态往往得到不相关甚至语言错乱的词，因为声学表示与用于预测下词的文本表示存在表征差异。作者改用适配到音频的潜在透镜方法：事先把参照文本库的文本经过冻结的文字语言模型得到带上下文的文本表示建成库，对查询的音频隐状态做预处理与归一化后按余弦相似度找最近的若干文本邻居，返回邻居的上下文文本作为解释。参照库在主实验中来自带描述的音频文本数据，跨输入复用。

\[\mathcal{N}_{j}\!\left(h_{t}^{(\ell)}\right)=\underset{n\in\{1,\ldots,N\}}{\operatorname{Top}\text{-}j}\frac{\left(h_{t}^{(\ell)}\right)^{\top}r_{n}}{\left\|h_{t}^{(\ell)}\right\|_{2}\left\|r_{n}\right\|_{2}}.\]

上式要计算的是查询隐状态与库中文本表示之间的归一化内积排序，符号中分母是各自的二范数，分子是内积，取前若干个最大值对应的邻居。关键在于查询与库表示都经过与层相关的预处理与归一化，跨层检索时允许查询层与库层不同，同一事件的多个位置与多层会各自产生一组邻居文本。直觉上这相当于问：在文本世界里，哪些句子的内部表示最像当前这段被关注的音频。

得到邻居文本后还要映射到本体标签才能投票。每个不重复的检索上下文用同一文字语言模型抽取事件并映射到本体，若邻居标签与待判事件标签相同或是祖先与后代关系则算匹配，兄弟关系共用祖先不算匹配。每个被选中的层与位置组合最多投一票，只要其任一邻居中出现任一匹配标签就投一票，与该位置命中多少邻居无关。把所有层与位置的票相加得到支撑分，低于阈值则判为幻觉。

\[\rho(z,z^{\prime})=\mathbf{1}\left[z=z^{\prime}\;\lor\;z\in\operatorname{Anc}(z^{\prime})\;\lor\;z^{\prime}\in\operatorname{Anc}(z)\right],\]

上式把匹配规则写成指示函数，条件是相等或一方是另一方的祖先，排除了仅共享祖先的兄弟匹配。论文用该规则同时处理生成标签与参考标签的粒度差异，例如具体水声与上位水声概念之间的对应。这种按位置投票再求和的设计，使得支撑分的上界等于层数乘以每层位置数，检索深度只影响找邻居的范围，阈值则决定需要多少位置给出支持才放行。

**LatentLens × 上下文文本表示 × 语义支撑：** LatentLens 把难读的音频隐状态放到文本表示空间里找邻居，上下文文本表示是参照文本库中带前后文的词表示，语义支撑是看邻居文本是否映射到同一事件本体标签，三者组合把听觉证据转成可判读的文本证据。

下图用左右两列直观呈现了支撑与失配：同一段音频的高关注区间在检索后分别返回与水流相关的文本和与山羊无关的爆炸、海浪、人声等文本，前者被标为得到支持，后者被标为语义失配。建议对照左右文本逐条读，看支持是如何从邻居文本中来的。

[![原论文 Figure 3：Through LatentLens, the semantics decoded from high attention frames in the Audio Attention Stage…](https://arxiv.org/html/2611.25789v1/semantic-evidance.png)](https://arxiv.org/html/2611.25789v1/semantic-evidance.png)

*论文图 3：Through LatentLens, the semantics decoded from high attention frames in the Audio Attention Stage lend semantic support to real sound event tokens while withholding it from…（原论文 Figure 3）。*

该图说明注意力与语义是两回事：模型可以一边关注音频一边写出与所关注表示不一致的事件。检测器正是利用这种失配来打分，它可解释，因为每个投票都能回溯到具体的层、位置与邻居文本。阈值与检索深度按数据集与模型分别在 200 段样本上选定并冻结，主实验固定每层取 3 个位置，阈值的具体取值随条件变化，后文结果节会交代其影响边界。

### 缓解机制：差分选择如何护住真实区再静音幻觉区

缓解要解决的是直接掩蔽会误伤真实内容的问题。论文用一个干预实验说明了代价：把幻觉山羊叫最关注的 10 个音频位置映射到时间窗并置零后重新生成，山羊叫确实消失，但原来真实的水流声也不见了，只剩下人群说话。这说明幻觉与真实事件的关注位置可能重叠，幻觉关注到的音频未必与其他事件无关，因此不能只按幻觉注意力去盖。

**差分音频掩蔽 × 保护区 × 掩蔽区：** 差分音频掩蔽不是只盖住幻觉关注区，保护区是被判为有支撑事件的最高关注位置集合，掩蔽区是幻觉事件关注中落在保护区之外的并集，两路相减后再静音再生才能压制幻觉又少伤真实内容。

差分选择的具体做法是先平均再分组。把每个事件在音频注意力阶段各层的平均注意力再按层平均，得到该事件在每个音频位置上的总体关注度。对每个被判为有支撑的事件，取其总体关注度最高的 10 个位置组成保护集合；对每个被判为幻觉的事件，则沿其总体关注度从高到低依次挑选落在保护集合之外的位置，直到凑够 10 个，跳过保护位置后要继续向下补足。所有幻觉事件的掩蔽位置取并集，且与保护集合不相交。若没有事件被判为有支撑，则保护集合为空；若没有幻觉，则不掩蔽。

选出离散的音频位置后还要落到波形上。设音频共有若干采样点、共有若干音频记号，则按均匀时间区间换算每个记号的起止采样索引，被选中的区间置零，其余保持原波形，再用原始提示与贪心解码重新生成。对于时间分辨率更粗的模型，论文把每个映射区间的中央一半置零，以避免一次盖住过宽。保护与掩蔽的预算在主实验中统一为 10 个位置，预算的影响在消融中单独考察。

这种设计的物理含义是把注意力排序当作定位信号，把检测结论当作保护约束。注意力告诉哪里可能相关，检测结论告诉哪里更可能是真实事件的证据，掩蔽只动后者之外的区域。它不修改模型权重，也不引入新的训练目标，代价是需要两次生成加一次检索与映射，计算量高于单次解码。若检测把真实事件误判为幻觉，仍可能掩蔽掉有用证据，这是后文需要用覆盖率来衡量的原因。

### 检测效果：语义支撑在稠密与稀疏幻觉下为何更稳

检测实验要回答语义支撑是否比注意力幅度和预测不确定性更能区分幻觉。评测用两个数据集：层级词汇的音频集强标注评测划分，以及 10 类家庭混合声的固定信噪比划分。模型为 3 个不同的音频语言模型。每个数据集先取 200 段做超参数选择并冻结，再从剩余中取 500 段做检测测试，不同模型的数据集划分独立抽样。基线包括困惑度、基于熵的不确定性、注意力分数与随机猜测，在事件级与样本级两个粒度上以幻觉为正类报告精确率、召回率、综合值与排序质量指标，事件级把每个映射事件单独计分，样本级只要回复含任一不受支持的映射事件即判正。

同一组 500 段内所有方法共用样本与真值标签，阈值冻结后算综合值，排序质量看阈值无关的平均精度，幻觉占比在稠密集与稀疏集上差异很大，因此跨数据集比较绝对数值没有意义，应看同组内的相对排序。

|  | Event-Level | Event-Level | Event-Level | Event-Level | Event-Level | Event-Level | Sample-Level | Sample-Level | Sample-Level | Sample-Level | Sample-Level | Sample-Level |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | GT Hal. | Pred. Hal. | Prec. | Recall | F1 | PR-AUC | GT Hal. | Pred. Hal. | Prec. | Recall | F1 | PR-AUC |
| AudioSet Strong |  |  |  |  |  |  |  |  |  |  |  |  |
| Audio Flamingo 3 |  |  |  |  |  |  |  |  |  |  |  |  |
| Random | 38.7 | 47.9 | 0.3241 | 0.4011 | 0.3585 | 0.3535 | 51.0 | 52.0 | 0.3846 | 0.3922 | 0.3883 | 0.4329 |
| Perplexity | 38.7 | 88.4 | 0.4307 | 0.9842 | 0.5992 | 0.5416 | 51.0 | 94.4 | 0.5360 | 0.9922 | 0.6960 | 0.6298 |
| RAUQ Entropy | 38.7 | 42.2 | 0.5725 | 0.6253 | 0.5977 | 0.5814 | 51.0 | 69.0 | 0.6145 | 0.8314 | 0.7067 | 0.7037 |
| Attention Score | 38.7 | 58.0 | 0.4982 | 0.7467 | 0.5977 | 0.4733 | 51.0 | 92.2 | 0.5445 | 0.9843 | 0.7011 | 0.5297 |
| Ours | 38.7 | 29.4 | 0.8646 | 0.6570 | 0.7466 | 0.7944 | 51.0 | 65.0 | 0.7046 | 0.8980 | 0.7897 | 0.9096 |
| Qwen2.5-Omni |  |  |  |  |  |  |  |  |  |  |  |  |
| Random | 31.1 | 48.2 | 0.3134 | 0.4865 | 0.3812 | 0.3236 | 50.2 | 49.0 | 0.4735 | 0.4622 | 0.4677 | 0.5029 |
| Perplexity | 31.1 | 93.5 | 0.3150 | 0.9485 | 0.4729 | 0.3679 | 50.2 | 100.0 | 0.5020 | 1.0000 | 0.6684 | 0.5652 |
| RAUQ Entropy | 31.1 | 81.2 | 0.3292 | 0.8610 | 0.4763 | 0.4024 | 50.2 | 99.0 | 0.5030 | 0.9920 | 0.6676 | 0.5802 |
| Attention Score | 31.1 | 75.9 | 0.3595 | 0.8790 | 0.5103 | 0.4407 | 50.2 | 95.0 | 0.5116 | 0.9681 | 0.6694 | 0.5101 |
| Ours | 31.1 | 32.3 | 0.5983 | 0.6229 | 0.6103 | 0.6067 | 50.2 | 61.4 | 0.6808 | 0.8327 | 0.7491 | 0.7537 |
| Step-Audio 2 mini |  |  |  |  |  |  |  |  |  |  |  |  |
| Random | 23.8 | 51.9 | 0.2510 | 0.5467 | 0.3441 | 0.2585 | 37.0 | 55.6 | 0.3273 | 0.4919 | 0.3931 | 0.3485 |
| Perplexity | 23.8 | 47.5 | 0.3415 | 0.6800 | 0.4547 | 0.3857 | 37.0 | 77.4 | 0.4160 | 0.8703 | 0.5629 | 0.5552 |
| RAUQ Entropy | 23.8 | 47.9 | 0.3429 | 0.6889 | 0.4579 | 0.4110 | 37.0 | 64.2 | 0.4548 | 0.7892 | 0.5771 | 0.6191 |
| Attention Score | 23.8 | 83.8 | 0.2668 | 0.9378 | 0.4154 | 0.3535 | 37.0 | 52.2 | 0.4636 | 0.6541 | 0.5426 | 0.4922 |
| Ours | 23.8 | 40.1 | 0.4327 | 0.7289 | 0.5430 | 0.5010 | 37.0 | 55.8 | 0.5627 | 0.8486 | 0.6767 | 0.6170 |
| DCASE2019 |  |  |  |  |  |  |  |  |  |  |  |  |
| Audio Flamingo 3 |  |  |  |  |  |  |  |  |  |  |  |  |
| Random | 2.7 | 49.1 | 0.0292 | 0.5263 | 0.0552 | 0.0743 | 3.2 | 56.6 | 0.0247 | 0.4375 | 0.0468 | 0.0260 |
| Perplexity | 2.7 | 1.9 | 0.5385 | 0.3684 | 0.4375 | 0.3544 | 3.2 | 1.4 | 0.7143 | 0.3125 | 0.4348 | 0.3393 |
| RAUQ Entropy | 2.7 | 1.6 | 0.6364 | 0.3684 | 0.4667 | 0.3726 | 3.2 | 1.4 | 0.7143 | 0.3125 | 0.4348 | 0.3229 |
| Attention Score | 2.7 | 1.1 | 0.8750 | 0.3684 | 0.5185 | 0.3794 | 3.2 | 1.4 | 0.8571 | 0.3750 | 0.5217 | 0.3613 |
| Ours | 2.7 | 1.7 | 0.7500 | 0.4737 | 0.5806 | 0.4761 | 3.2 | 2.2 | 0.7273 | 0.5000 | 0.5926 | 0.4806 |
| Qwen2.5-Omni |  |  |  |  |  |  |  |  |  |  |  |  |
| Random | 13.4 | 49.2 | 0.1459 | 0.5340 | 0.2292 | 0.1415 | 12.8 | 54.4 | 0.1250 | 0.5313 | 0.2024 | 0.1693 |
| Perplexity | 13.4 | 31.3 | 0.2250 | 0.5243 | 0.3149 | 0.2569 | 12.8 | 75.6 | 0.1455 | 0.8594 | 0.2489 | 0.1652 |
| RAUQ Entropy | 13.4 | 70.0 | 0.1754 | 0.9126 | 0.2942 | 0.2298 | 12.8 | 68.6 | 0.1574 | 0.8438 | 0.2654 | 0.1498 |
| Attention Score | 13.4 | 23.1 | 0.2655 | 0.4563 | 0.3357 | 0.2086 | 12.8 | 25.0 | 0.2160 | 0.4219 | 0.2857 | 0.1726 |
| Ours | 13.4 | 14.0 | 0.4953 | 0.5146 | 0.5048 | 0.3337 | 12.8 | 14.2 | 0.5352 | 0.5938 | 0.5630 | 0.5422 |
| Step-Audio 2 mini |  |  |  |  |  |  |  |  |  |  |  |  |
| Random | 9.0 | 49.4 | 0.1104 | 0.6071 | 0.1868 | 0.1109 | 10.0 | 50.4 | 0.0952 | 0.4800 | 0.1589 | 0.0979 |
| Perplexity | 9.0 | 10.6 | 0.4394 | 0.5179 | 0.4754 | 0.4387 | 10.0 | 7.0 | 0.4286 | 0.3000 | 0.3529 | 0.3253 |
| RAUQ Entropy | 9.0 | 5.6 | 0.5714 | 0.3571 | 0.4396 | 0.4253 | 10.0 | 30.6 | 0.2353 | 0.7200 | 0.3547 | 0.3571 |
| Attention Score | 9.0 | 4.0 | 0.6400 | 0.2857 | 0.3951 | 0.3006 | 10.0 | 7.2 | 0.5278 | 0.3800 | 0.4419 | 0.3577 |
| Ours | 9.0 | 8.3 | 0.5577 | 0.5179 | 0.5370 | 0.5002 | 10.0 | 4.4 | 0.8182 | 0.3600 | 0.5000 | 0.5000 |

上面这张检测表覆盖 3 个模型在两个数据集、两个粒度上的全部基线与本文方法的真值幻觉率、预测幻觉率及四项指标。重点不是背下每个数字，而是看 3 个现象。第一，在全部 12 组比较中本文方法的综合值最高，随机基线只提供偶然参考，本文方法对其的超出说明不是靠猜。第二，排序质量在 12 组中的 11 组上最优，唯一的例外是某个模型在稠密集样本级上略低于熵基线，但其综合值仍更高，说明排序与单点阈值结论可能分离。第三，高召回可能是把大量回复都判为幻觉换来的，例如某模型困惑度基线把全部样本判正，精确率只在 50% 左右，而本文方法把精确率提到约六成八同时保留约八成三召回，误报更少。

在幻觉稀疏的划分上，幻觉事件占比可低至 2.7%，此时注意力分数基线精确率最高但漏掉更多幻觉，本文方法找回更多幻觉因而综合值更高。这说明收益不是单向地偏向精确或偏向召回，而是在既定阈值下更平衡。附录的精确率召回曲线也显示语义支撑分数是离散的，阈值扫描的步进较大，应结合曲线下面积与工作点一起读，不能只看单点。总体上证据支持把被关注表示的语义是否支持生成事件作为检测信号，它与注意力幅度和不确定性互补，但在阈值、层窗与本体匹配规则选定后才成立，换规则会改变数值，附录会给出敏感性范围。

### 缓解效果：压低幻觉的同时覆盖率付出了什么代价

缓解实验要回答检测信号能否在生成时真正减少幻觉且不丢掉真实内容。评测仍用上述两个数据集与 3 个模型，但为减少与检测共用同一抽样的依赖，排除超参数选择的 200 段后重新抽取 500 段做缓解测试。比较对象包括贪心解码、束搜索、核采样以及两种音频感知的免训练基线。指标中两个幻觉率越低越好，覆盖率越高越好。幻觉率分别统计预测类别中有多大比例不受支持，以及含有不受支持类别的回复占比；覆盖率统计参考类别中有多大比例被预测覆盖，且用一对一匹配避免同一参考被重复计数。

所有方法共用同一组 500 段、同一映射与匹配规则、同一原始提示，本文方法沿用检测节冻结的事件级配置，保护与掩蔽预算统一为 10 个位置，掩蔽后用贪心解码再生。若未检出幻觉则保留原回复，因此再生次数与改动幅度随检测结果而变。

|  | AudioSet Strong | AudioSet Strong | AudioSet Strong | DCASE2019 | DCASE2019 | DCASE2019 |
| --- | --- | --- | --- | --- | --- | --- |
| Method | ECHO-I ↓ | ECHO-S ↓ | Coverage ↑ | ECHO-I ↓ | ECHO-S ↓ | Coverage ↑ |
| Audio Flamingo 3 |  |  |  |  |  |  |
| Greedy | 22.7 | 34.0 | 31.8 | 2.9 | 3.4 | 60.1 |
| Beam | 25.9 | 36.6 | 30.9 | 2.6 | 2.8 | 60.0 |
| Nucleus | 29.8 | 43.6 | 29.6 | 3.1 | 3.6 | 59.5 |
| AAD | 20.6 | 29.2 | 34.2 | 2.5 | 2.8 | 62.3 |
| TCD | 22.0 | 33.8 | 32.0 | 3.2 | 3.4 | 64.1 |
| Ours | 14.9 | 23.0 | 34.1 | 2.2 | 2.6 | 60.3 |
| Qwen2.5-Omni |  |  |  |  |  |  |
| Greedy | 30.5 | 46.0 | 35.5 | 7.9 | 9.0 | 59.7 |
| Beam | 32.3 | 51.2 | 33.3 | 9.6 | 11.6 | 62.0 |
| Nucleus | 40.8 | 63.4 | 31.6 | 12.2 | 14.2 | 58.1 |
| AAD | 28.9 | 45.2 | 38.4 | 7.5 | 7.8 | 55.6 |
| TCD | 28.5 | 44.2 | 35.5 | 8.7 | 10.2 | 61.7 |
| Ours | 21.4 | 37.0 | 38.6 | 6.5 | 6.6 | 54.7 |
| Step-Audio 2 mini |  |  |  |  |  |  |
| Greedy | 19.7 | 31.6 | 30.5 | 7.3 | 8.4 | 60.5 |
| Beam | 20.6 | 30.2 | 30.4 | 6.9 | 8.0 | 59.7 |
| Nucleus | 24.8 | 35.0 | 29.6 | 5.7 | 6.6 | 58.9 |
| AAD | 20.6 | 29.4 | 29.1 | 6.4 | 7.6 | 58.5 |
| TCD | 22.0 | 32.4 | 30.2 | 6.7 | 7.8 | 59.8 |
| Ours | 19.4 | 28.6 | 27.8 | 6.4 | 7.4 | 58.3 |

上面这张缓解表保留了 6 组数据集与模型组合下 6 种策略的两个幻觉率与覆盖率。核心结论是本文方法在 6 组中的 5 组上同时取得最低的两个幻觉率，在稠密集的 3 个模型上全部最低，在稀疏集上对 2 个模型最低。更重要的是压制与保留可以兼得：在稠密集某模型上本文方法三项全最优；在另一模型上幻觉率最低且覆盖率仅比最高值低 0.1 个百分点；在稀疏集某模型上幻觉率最低同时覆盖率保持在 60% 左右。这与保护设计一致：只动保护区之外的幻觉关注区。

代价与反例也要讲清。某模型在稠密集上的覆盖率低于基线最好值，说明压制仍可能伴随少量真实内容丢失；在稀疏集某模型上覆盖率也不是最高，掩蔽区即使避开保护区仍可能影响上下文。直接掩蔽对照在附录中幻觉率高于差分掩蔽，随机与反向掩蔽更差，从反面说明保护的必要性。总体上该表支持针对性音频干预的有效性，但结论限定在所用提示、贪心再生与固定预算下成立，换解码或预算会改变权衡。

下图给出一个具体再生案例的读法：顶部回答同时包含幻觉与真实事件，中部频谱标出参考范围，下部热图与检索文本分别解释为何一个得到支持而另一个失配，底部是掩蔽后的新回答。建议先看热图峰位再读检索文本，最后对照新回答确认哪部分被删掉哪部分被保留。

[![原论文 Figure 7：Attention heatmaps, LatentLens decoding results, and hallucination mitigation for Audio Flamingo 3.](https://arxiv.org/html/2611.25789v1/heatmap-af3.png)](https://arxiv.org/html/2611.25789v1/heatmap-af3.png)

*论文图 7：Attention heatmaps, LatentLens decoding results, and hallucination mitigation for Audio Flamingo 3（原论文 Figure 7）。*

这张图把检测解释与缓解结果连在一起：左侧幻觉事件的邻居文本多为闹钟、狗吠等与待判事件无关的内容，右侧真实事件的邻居文本出现笑声与说话，掩蔽后幻觉事件消失而真实事件保留。它只是一个样本，不能证明所有样本都如此干净，统计结论仍要回到上表。

### 关键选择验证：预算与策略怎样改变压制和保留的权衡

消融要回答保护与掩蔽的选择是否真的必要，以及预算多大合适。第一组改变差分掩蔽的预算，分别取每个事件保护 10 个不变而掩蔽取一个、5 个、10 个、15 个，跳过保护后向下补足，检测配置与其余设置固定。总体趋势是中等预算在多数组合上幻觉率最低，预算过小盖不住，预算过大则容易波及更多上下文，覆盖率随之波动。论文主实验统一用 10 个位置，正是在该权衡下选的折中，不是越大越好。

4 种掩蔽策略的对比共用缓解实验的同一样本、同一检测结论与同一再生方式，只改变位置选择逻辑，指标仍是两个幻觉率越低越好、覆盖率越高越好。

| Model | Method | ECHO-I ↓ | ECHO-S ↓ | Coverage ↑ |
| --- | --- | --- | --- | --- |
| Audio Flamingo 3 | Contrast Masking | 30.1 | 44.2 | 29.7 |
| Audio Flamingo 3 | Random Masking | 26.7 | 39.8 | 31.6 |
| Audio Flamingo 3 | Direct Masking | 16.8 | 25.0 | 33.5 |
| Audio Flamingo 3 | Differential Masking (Ours) | 14.9 | 23.0 | 34.1 |
| Qwen2.5-Omni-7B | Contrast Masking | 43.0 | 66.4 | 31.4 |
| Qwen2.5-Omni-7B | Random Masking | 38.7 | 57.8 | 32.1 |
| Qwen2.5-Omni-7B | Direct Masking | 23.4 | 39.0 | 36.7 |
| Qwen2.5-Omni-7B | Differential Masking (Ours) | 21.4 | 37.0 | 38.6 |
| Step-Audio 2 mini | Contrast Masking | 40.5 | 59.8 | 21.5 |
| Step-Audio 2 mini | Random Masking | 35.2 | 52.4 | 23.6 |
| Step-Audio 2 mini | Direct Masking | 19.4 | 28.8 | 27.8 |
| Step-Audio 2 mini | Differential Masking (Ours) | 19.4 | 28.6 | 27.8 |

上面这张策略对比表呈现稠密集 3 个模型上的结果。反向掩蔽专门盖住被判为有支撑事件的高关注区，结果幻觉率最高且覆盖率最低，说明误伤真实证据的代价很大。随机掩蔽居中，直接掩蔽按幻觉注意力取前十而不设保护，已经明显优于前两者，但差分掩蔽在 2 个模型上进一步压低幻觉率并提升或持平覆盖率，在第三个模型上与直接掩蔽基本持平。这组对照支持保护集合的增量价值：注意力定位告诉哪里可疑，保护约束决定哪里不能动。

另一组验证是再生回答的整体质量。在音频描述测试集的子集上，只看原始回答含幻觉的样本，比较掩蔽前后回答与原始音频的跨模态相似度以及与多条参考描述的文本指标，全部越高越好。

| Model | Original Hal. (%) | Caption | CLAP | BLEU-4 | METEOR | ROUGE-L | CIDEr |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Audio Flamingo 3 | 24.35 | Original | 0.4705 | 0.2303 | 0.2526 | 0.4893 | 0.4963 |
| Audio Flamingo 3 | 24.35 | After masking | 0.4690 | 0.2785 | 0.2855 | 0.5172 | 0.6098 |
| Qwen2.5-Omni-7B | 41.35 | Original | 0.5259 | 0.0157 | 0.1409 | 0.1635 | 0.0004 |
| Qwen2.5-Omni-7B | 41.35 | After masking | 0.5248 | 0.0168 | 0.1447 | 0.1736 | 0.0022 |
| Step-Audio 2 mini | 19.79 | Original | 0.4473 | 0.0474 | 0.1760 | 0.3478 | 0.2948 |
| Step-Audio 2 mini | 19.79 | After masking | 0.4626 | 0.0516 | 0.1828 | 0.3439 | 0.3333 |

上面这张质量表给出 3 个模型掩蔽前后在上述子集上的跨模态相似度与四项文本指标。重点是代价侧：掩蔽后文本指标多为持平或提升，跨模态相似度基本持平或略升，说明在该子集上压制幻觉没有把描述质量拉垮。但要注意该比较限定在原始含幻觉的样本上，且文本指标依赖参考描述的覆盖，不能推广为所有样本的通用提升。框架需要额外的一次检索、一次映射与一次再生，实际部署时要把这些开销算进去。阈值、检索深度与层窗的局部扰动在附录中会使综合值上下浮动几个百分点，说明结论对超参数并非完全不敏感，复现时应沿用按数据集与模型冻结的配置再做小范围核查。

### 适用边界：何时值得尝试以及复现时先核对什么

把结论放回适用条件里读会更稳。这项工作的证据来自英文描述提示下的两个有参考标注的数据集，事件是否幻觉依赖本体映射规则，层级词汇用祖先或后代匹配，家庭混合声用精确匹配，换本体或换匹配规则会改变真值与得分。检测阈值、检索深度与层窗按数据集与模型分别冻结，跨条件直接套用可能不最优。评测排除了未能映射到本体的描述，样本级只要含任一不受支持的映射事件即判正，这些聚合选择都会影响绝对数值。

方法假设也值得复现前核对。第一，它假设高关注位置的隐状态经文本最近邻可解释，附录用真实音频、静音、随机检索与打乱真值做了对照，真实音频的命中率明显高于对照，但这只说明检索信号非随机，不等于每个邻居都可靠。第二，它假设保护集合能代表真实事件的证据，若检测把真实事件误判为幻觉，掩蔽仍会伤及真实内容，覆盖率正是为此而设的约束。第三，它没有训练任何权重，也不承诺降低延迟，两次生成加检索的成本高于单次解码，实时场景需另测。

如果要在自己的音频描述管线上尝试，建议按原文顺序先复现检测再做缓解。先用同一模型的文字部分抽取事件并映射到所用本体，确认映射覆盖率；再按各模型的音频注意力阶段取每层前 3 位置，用参照文本库做跨层或同层检索并按祖先关系投票，冻结阈值后看事件级与样本级的精确率、召回率与排序质量；最后固定保护与掩蔽各 10 个位置做差分掩蔽并贪心再生，同时报告幻觉率与覆盖率。需要补的验证包括中文或其他提示下的表现、长音频与重叠事件下的定位精度，以及不同解码与预算下的稳定性。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.25789v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
