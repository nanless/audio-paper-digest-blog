---
title: "Understanding Machine Taste: Aesthetic Agreement Across Foundation Models in K-pop"
date: 2026-10-15
draft: false
tags: [音乐分析, 评测协议, 数据集, 模型比较, 音乐]
categories: [论文速递]
description: "该文把审美评价做成同艺人组内两两比较再汇总排序，用音频语言模型评歌曲、用视觉语言模型只看画面评 MV，发现视觉排序的模型间一致性明显高于音频，而音频与视觉共识几乎不对齐，与早期 YouTube 播放量的正相关也因艺人组而异。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.17731"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "机器品味是否存在：K-pop 歌曲与 MV 的跨模型审美一致性解读"
paper_digest_original_title: "Understanding Machine Taste: Aesthetic Agreement Across Foundation Models in K-pop"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.17731v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.17731v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.17731v1.pdf"
paper_digest_primary_task: "音乐分析"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-understanding","label":"音乐分析"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "该文把审美评价做成同艺人组内两两比较再汇总排序，用音频语言模型评歌曲、用视觉语言模型只看画面评 MV，发现视觉排序的模型间一致性明显高于音频，而音频与视觉共识几乎不对齐，与早期 YouTube 播放量的正相关也因艺人组而异。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kaishen Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yucheng Pan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xuehao Cui"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hanling Tian"},{"affiliations":["University of Maryland, College Park"],"name":"Heng Huang"}]
paper_digest_abstract_sha256: "114e7182a648bd4cdb68f4624c0e0193dd45e1089467696dcecc76030b7cea43"
paper_digest_sidecars: {"citation.bib":{"sha256":"af9121888c60c6f843c3892fe31c0cf651e52f3970a7a78417a38d587fd75ff4","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17731/citation.bib"},"citation.json":{"sha256":"86413fed279a586a7e7820ffdbb0217a3ecf07aef3672f31436c44a26ae88afb","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17731/citation.json"},"citation.ris":{"sha256":"59039c00646ec1c1e56094254afd3d3c6115ca1db15d3624fb0c11d04f23dc5a","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17731/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"8fdd91d070f6e287398d7066f5a8d33ecc5339c3aa2b991cab8afcbed93df26b","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17731/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8dd45afa525813175c3e68cd877fd1b2dd24343baf6f17a6104e5bd7d3e1af3a"
paper_digest_api_reader_plan_sha256: "324e31dc7ed10a2383e9569f222e6c0efdd47107bd4788eb5f906785c48928e4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "71a78d65bcaa11004b7b1695244050f6303028cfc04487db94440291aadd9c1e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "927e4dc33f9f60710db455e0b61d2921f8275181de775d303c3347b68389aecc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b814c6667b357f32f2c490d4b32bbbbe95319398fd0a57898f85249447af6db9"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c0ef4db234315d657ac6b9ee5bef965999815f5d7365d796cce9bc69d68e948b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 机器品味是否存在：K-pop 歌曲与 MV 的跨模型审美一致性解读

> 英文题目：*[Understanding Machine Taste: Aesthetic Agreement Across Foundation Models in K-pop](https://arxiv.org/abs/2610.17731v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)
- **研究重点**：[模型评估](/audio-paper-digest-blog/papers/?concept=research_focus.evaluation) → [模型比较](/audio-paper-digest-blog/papers/?concept=research_focus.comparison)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Kaishen Wang：机构信息未在 arXiv HTML 中可靠披露
- Yucheng Pan：机构信息未在 arXiv HTML 中可靠披露
- Xuehao Cui：机构信息未在 arXiv HTML 中可靠披露
- Hanling Tian：机构信息未在 arXiv HTML 中可靠披露
- Heng Huang：University of Maryland, College Park

## 📌 核心摘要

本文研究基础模型评价K-pop歌曲与音乐视频时是否表现出可重复的审美偏好，输入是同一女子组合的多首歌曲音频或对应音乐视频的纯视觉流，输出是每个模型在该组合内的偏好排序，难点在于审美没有标准答案，只能通过模型之间是否排序一致来间接判断。方法让音频语言模型只听音频、视觉语言模型只看纯视觉流且均不提供歌名与播放量等外部信息，对同一组合内全部无序对做两种顺序的二选一并在每种顺序下重复五次，再把胜次累加为分数并排序。随后用斯皮尔曼秩相关衡量模型两两排序相似度，用肯德尔和谐系数衡量同一组合内全部模型的群体一致度，最后在共有歌曲子集上重算音频排序并比较音频共识排序与视觉共识排序。与更关注与人类对齐或提升评价可靠性的已有审美评价研究不同，本文把模型间分歧本身作为研究对象，并同时覆盖音频与视觉两个模型群体。在AESPA、IVE与TWICE音乐视频上，以斯皮尔曼秩相关系数为指标衡量视觉共识排序与发布约七天早期YouTube播放量的组内关联，结果分别为0.661、0.363和0.406，AESPA高于IVE与TWICE。在14个女子组合共有歌曲子集上，以斯皮尔曼秩相关系数为指标衡量音频模型排序与视频模型排序的跨模态一致性，全部音频—视频模型对均值为0.060而最强模型对为0.288，最强值仍接近于零。结论适用于所选女子组合与所评模型集合，跨模态弱对齐是否推广到其他音乐类型与模型仍未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文到底在解决什么审美难题

论文的起点是创意行业里没有标准答案的判断，比如选歌、定视觉概念、评价作品好坏。基础模型已经能听音频、看视频，但它们做出的主观偏好是否彼此相似，过去并没有系统证据。作者把 K-pop 选作试验场，原因是同一艺人既有录音室歌曲又有官方 MV，音乐风格和视觉概念都很丰富，而且音频和画面天然配对，适合在控制艺人身份后比较听觉偏好和视觉偏好。

论文不追求给出谁最好听或最好看的客观冠军，而是问 3 个可测量的问题：不同模型给出的名次像不像，同一艺人组内全部模型有没有共同倾向，听觉名次和视觉名次能不能对上。最后再加一个现实对照：视觉共识名次与 YouTube 早期播放量名次是否同向。整篇工作的输入是歌曲音频和 MV 画面流，输出是每个模型在每个艺人组内的完整排序，以及由这些排序算出的两两相似度和集体一致性，结论只在 14 个女团、所选模型和组内比较条件下成立。

把机器品味理解为这些排序中表现出的相对偏好结构，而不是某种绝对分数高低，是读懂全文的前提。

### 它和已有的多模态与审美评价研究有何分工

相关工作分为两条线。第一条是能处理创意内容的多模态模型，音频语言模型可以直接听音乐，视觉语言模型可以理解视频，但已有评测多集中在感知、定位、问答和推理，关心的是答对与否。第二条是审美评价和作为裁判的模型，研究发现模型能捕捉到一些审美信号，但与人类或专家仍有差距，还存在位置偏好、呈现效应等系统偏差，提高一致性的方法多是为了更可靠、更对齐人类。

本文的不同在于不以人类偏好为参照系，也不优化裁判准确率，而是把分歧本身当作研究对象：在相同输入和相同组内比较规则下，独立开发的模型是否自发形成相似的相对偏好，并且这种相似是否跨模态保持。因此它不能被理解为谁的审美更正确，也不能把视觉一致性高直接解读为视觉模型能力更强，因为两边用的模型群体、候选数量和判断维度本来就不同。

原文明确说关注的是模型间审美一致而非评价准确性，这个分工决定了后面所有指标都是排序相似性，而不是打分正确率。

### 为什么不用打分而用两两比较排出名次

审美没有唯一正确答案，如果让模型直接打绝对分，不同模型的量尺不同，而且容易给多首歌打出相近分数，区分度不足。论文把评价形式化为成对排序问题：每次只比较两首歌或两个 MV，强制二选一，再把所有配对结果汇总为名次。这样做的好处是只保留相对偏好，避开跨模型绝对分不可比的问题。代价是比较次数随候选数平方增长，作者因此限定在同一艺人组内比较，单个组最多 30 首音频、MV 更少，从而把计算量控制在可接受范围。

另一个设计是每个无序对都测两种出场顺序，把顺序影响平均掉，但保留每次独立判断，不强行要求 2 次一致。提示词明确要求按音乐性或视觉制作质量判断，不看标题、不猜歌名、不考虑热度和原创性，输入也确实不提供这些外部信息，这是后面讨论结果时必须记住的公平条件。可以把例子想成校内歌手比赛只比同年级选手，评委每次只看 2 人表演投票，最后按总胜场排年级名次。

### 从输入到名次再到三种一致性的完整流程

整个流程可以沿着一个艺人组走一遍。先为该组准备候选集，音频集是该艺人的歌曲集合，视觉集是其中有合格官方 MV 的子集，音频数量一般多于视频。音频语言模型每次拿到两首歌的音频，视觉语言模型每次拿到两个 MV 的纯画面流，分别按音乐质量或视觉执行质量二选一。每个配对做两种顺序、每种顺序重复 5 次，汇总为每个候选项的总分并排序，得到每个模型在该组的名次表。

之后进入分析层：用两两 Spearman 秩相关衡量任意 2 个模型在 14 个组平均下来有多像，用 Kendall 一致性系数衡量同一组内全部模型是否共享一个倾向，再把音频和视觉限制到共有歌曲上比较跨模态是否对齐。图 1 把这条链路画成了 5 个阶段，从创意域、两类裁判、成对评价、汇总排序到 3 个研究问题，刚好对应上述输入、处理和目标。

**成对比较 × 偏好得分 × 排序：** 成对比较指每次只给模型两个候选项二选一；偏好得分指把该模型在所有配对、两种出场顺序下的胜次累加为每个候选项的总分；排序指按总分从高到低排出该模型对该艺人组的完整名次，三者组合把难以直接对齐的绝对打分转化为可比的相对名次。

下面先看总览图，理解分流和汇总的位置，再进入具体计分和指标公式。

> **看图路径：** 1. 从左到右看输入如何从歌曲音频和 MV 画面分流到两类模型；2. 看中间成对比较框是否要求两种出场顺序都测；3. 看右侧三个研究问题分别对应两两一致、组内共识和跨模态对齐

[![原论文 Figure 1：Overview of our study of machine taste in K-pop.](https://arxiv.org/html/2610.17731v1/kpop_teaser_editable3.png)](https://arxiv.org/html/2610.17731v1/kpop_teaser_editable3.png)

*论文图 1。原论文 Figure 1:：“Overview of our study of machine taste in K-pop.”。*

总览图左侧是歌曲音频波形和 MV 胶片，中间把音频流送给音频语言模型、视频流送给视觉语言模型，第三列强调每次比较两个候选并交换顺序，第四列把多次胜负聚合成每个模型的排序，右侧则把排序分别用于模型两两比较、组内共享排序和音频对视觉的对齐检验，最终追问是否存在共享的机器品味。图中还标出输入模态包括文本、图像、视频和音频，但本次审美判断只用音频和视频信号，标题等文本信息是被隔离掉的。

### 偏好如何累加为总分并变成名次

记模型在一次比较中是否偏好先呈现的候选项为二值判断，偏好记 1 否则记 0。每个候选项的总分是它在所有对手、两种顺序下的胜场之和，具体实现是把正序判断与逆序判断的互补部分相加，这样无论哪种顺序获胜都能计 1 分。得到全部候选项总分后再按分数排序，即为该模型的组内名次。这种计分不比较不同模型的原始分数，只比较各自内部的相对顺序，因此家族、量程和打分习惯差异不会直接污染跨模型比较。需要理解的是，总分越高名次越靠前，名次数字越小表示越受该模型偏好，后文案例表中的第 1 名都是该配置下最偏好的歌曲或视频。

\[s_{m}(c_{i})=\sum_{j\neq i}\left[y_{m}(c_{i},c_{j})+1-y_{m}(c_{j},c_{i})\right].\]

\[R_{m}=\operatorname{Rank}\left(s_{m}(c_{1}),s_{m}(c_{2}),\ldots,s_{m}(c_{N})\right).\]

上述两式分别对应胜场累加和按总分排序，输入是同一组内所有配对的二选一结果，输出是每个模型的完整名次表。

**音频语言模型 × 视觉语言模型 × 模态隔离：** 音频语言模型指直接处理声音信号的 MOSS 和 Qwen3-Omni 系列配置，视觉语言模型指处理 MV 画面流的 Qwen、InternVL、GLM 和 MiniCPM 系列配置，模态隔离指音频评测只给声音、视觉评测只给画面且都不给标题和热度信息，目的是让音频偏好和视觉偏好分别只反映各自模态的制作质量。

### 两两相似与集体共识分别怎么算

有了名次之后，一致性分析分为两层。两两层面对 2 个模型在同一艺人组的两份名次算 Spearman 秩相关，再在 14 个组上取平均，得到该模型对跨组平均有多像。集体层面把同一组内全部模型的名次放在一起算 Kendall 一致性系数，取值 0 到 1，等于 1 表示完全相同的排序。跨模态时先把音频名次重算到与视频共有的歌曲子集上，保证两边比较的是同一批候选，再在模型两两层面和共识层面分别算 Spearman 相关。Spearman 对顺序差异敏感，个别歌曲的首尾翻转会明显拉低相关；Kendall 系数则反映全部模型是否指向同一整体顺序，候选越多、模型越多时维持高值越难。

\[\rho_{i,j}^{(g)}=\rho_{\mathrm{S}}\left(R_{m_{i},g},R_{m_{j},g}\right),\]

\[\bar{\rho}_{i,j}=\frac{1}{G}\sum_{g=1}^{G}\rho_{i,j}^{(g)}.\]

\[W_{g}=W\left(R_{m_{1},g},R_{m_{2},g},\ldots,R_{m_{M},g}\right),\]

三式分别对应单组两两相关、跨组平均和组内全体一致性，输入都是名次表而非原始音频视频，输出是可比的相关系数。

**Spearman 秩相关 × Kendall 一致性系数 × 共识排序：** Spearman 秩相关指比较两个模型给出的两份名次表有多相似，取值越高表示两份排序越一致；Kendall 一致性系数指同时比较同一艺人组内全部模型的名次表，取值在 0 到 1 之间，越接近 1 表示集体越一致；共识排序指把多个模型的名次平均后再重排得到的代表性名次，用于做跨模态和与播放量对比时的组级别代表。

### 本文训练了什么，实际计算花在哪里

本文没有训练新的音频或视觉模型，也没有微调权重，所有偏好都来自对已有基础模型的推理采样。实际计算集中在成对推理和重复采样：每个组内所有无序对都要测两种顺序，每种顺序独立重复 5 次，音频侧是 6 种模型配置，视觉侧是 28 种模型配置。模型选择考虑了能否在同一上下文放下两个音频输入以便直接比较，音频侧因此只用了 MOSS 和 Qwen3-Omni 两个家族，视觉侧则覆盖 Qwen3.5、InternVL3.5、GLM-4.6V-Flash、MiniCPM-V-4.5 和 Qwen3-VL 多个尺度与两种推理模式。

提示词和解码配置在同一模型设置内对所有候选保持一致，这是保证公平比较的条件。论文未报告梯度路径、参数冻结细节和完整推理耗时，复现时缺的是精确的采样开销和硬件预算，只能按候选数和重复次数估算比较次数，不能把无训练理解为输出确定，因为重复采样本身就引入了随机性。

**Instruct 配置 × Thinking 配置 × 重复采样：** Instruct 配置指直接给出偏好判断的推理模式，Thinking 配置指同一模型族中允许显式思考过程的推理模式；重复采样指每个配对的每种出场顺序独立重复 5 次再汇总，组合起来是为了在不训练新模型的前提下，检验同一模型在不同推理模式和随机采样下排序是否稳定。

### 数据、模型与跨模态可比性是如何构造的

数据集覆盖 14 个 K-pop 女团，音频共 373 首，视频共 278 个 MV。构造规则是先为每组收集至多 30 个有官方 MV 的歌曲，对应音频同时进入音频集；若合格 MV 不足 30，再用同艺人其他流行歌曲把音频补到至多 30 首，曲目不足 30 的组则保留全部。因此视频集是音频集的子集，音频评价的候选更广，跨模态比较时必须收缩到共有歌曲并重算音频名次，否则候选不同就不可比。输入隔离严格执行：音频模型只听声音，视觉模型只看 MV 画面，不给标题、榜单和播放量。下表给出部分组的规模与总量，说明为什么不同组的排序长度不同。

以下表格说明候选规模的比较问题：在组内排序任务中，候选越多则排序越难一致，比较不同组的一致性时必须考虑候选数差异。

| Group | # Audio | # Video |
| --- | --- | --- |
| RED VELVET | 30 | 28 |
| TWICE | 30 | 30 |
| AESPA | 30 | 23 |
| Total | 373 | 278 |

表中总量 373 对 278 表明音频任务平均候选更多，TWICE 等组音视频数量完整，属于候选最完整的对照，而 MEOVV 等新团候选明显更少，其组内一致性天然基于更短的排序。限制在于该表只呈现数量，不呈现发行年份、风格跨度和 MV 可得性偏差，因此不能用它解释为什么某组一致性高，只能用来理解排序长度和计算量的边界。

### 音频模型之间的偏好有多不一致

音频侧 6 种配置的两两 Spearman 平均相关整体偏低，最强的 1 对也只有 0.526，其余多在 0.3 以下，还有接近零和负值。特别的是 Qwen3-Omni-Thinking 与其他配置的一致性持续偏弱，出现负相关，说明推理模式切换会明显改变音乐偏好排序。组级别 Kendall 系数在 0.137 到 0.427 之间，14 组中有 11 组在 p 小于 0.05 水平显著，但数值本身仍属中等偏弱，意味着组内存在可检测的共享倾向，但远非高度一致。理解该结论的条件很关键：音频候选一般多于视频，且音乐判断维度包括旋律、演唱、制作和结构，本身比视觉更抽象，因此低一致不能直接推广为音频模型能力差。

以下热图导读帮助定位音频分歧的结构：先看深色集中位置，再看蓝色行列的归属，判断分歧来自个别配置还是整体分散。

> **看图路径：** 1. 先看对角线以外的深红格集中在哪些模型对；2. 再看最后一行和最后一列的蓝色格对应哪个配置；3. 对比色条范围，记住音频热图的最大值约在 0.5 附近

[![原论文 Figure 2：Pairwise ranking agreement between ALMs.](https://arxiv.org/html/2610.17731v1/audio_model_spearman_heatmap.png)](https://arxiv.org/html/2610.17731v1/audio_model_spearman_heatmap.png)

*论文图 2。原论文 Figure 2:：“Pairwise ranking agreement between ALMs.”。*

热图中 MOSS-8B-Thinking 与 Qwen-Instruct 的 0.526 格是全图最深的红色之一，而最下一行的 Qwen-Think 整行偏蓝，与其他五列都是零附近或负值。色条从负到正跨越零点，说明音频两两相似度分布在弱正相关附近摆动，而非系统性强一致。右侧纵轴为平均 Spearman 相关，颜色越红表示两份排序越相似，越蓝表示越不相似。

以下表格整理音频两两相关的比较问题：在相同 14 组平均、相同 Spearman 指标下，哪些配置对更像，Thinking 切换带来多大变化。

| Model | MOSS-4B-Inst | MOSS-4B-Think | MOSS-8B-Inst | MOSS-8B-Think | Qwen-Inst | Qwen-Think |
| --- | --- | --- | --- | --- | --- | --- |
| MOSS-4B-Inst | – | 0.018 | 0.091 | 0.176 | 0.106 | -0.043 |
| MOSS-8B-Think |  |  |  | – | 0.526 | -0.144 |
| Qwen-Inst |  |  |  |  | – | -0.086 |
| Qwen-Think |  |  |  |  |  | – |

表中 MOSS-8B-Think 与 Qwen-Inst 的 0.526 是最高值，MOSS-8B-Inst 与 MOSS-8B-Think 的 0.433 次之，而 MOSS-4B-Inst 与其他配置多在 0.1 上下，Qwen-Think 一列全部为负或接近零。该表是跨组平均，掩盖了组间波动，AESPA 案例显示同一首歌在不同配置下可从靠前掉到末位，因此平均值偏低背后是个体排序的大幅摆动。未胜出项是 MOSS-4B-Instruct，它与几乎所有配置的相关都很弱，说明小尺寸直接回答模式在音乐偏好上最孤立。

**组内比较 × 跨模态对齐 × 播放量关联：** 组内比较指所有两两对比只在同一艺人组内进行，避免跨艺人风格和人气差异干扰；跨模态对齐指把音频和视觉放在共有歌曲子集上比较两套排序是否一致；播放量关联指把视觉共识排序与发行后约 7 天的历史观看量排序比较，三者分工是先保证可比，再看听觉与视觉是否同向，最后看机器偏好与市场早期反应是否同向。

### 视觉模型为何显示出更强且更稳的共识

视觉侧 28 种配置的两两 Spearman 普遍明显高于音频，不仅同家族内高，跨家族也有大量 0.5 以上的正相关，热图呈现清晰的块状结构，说明家族和推理模式仍影响排序，但共享的视觉偏好更强。组级别 Kendall 系数在 0.470 到 0.769 之间，14 组全部在 p 小于 0.001 水平显著，最高是 BLACKPINK 的 0.769，最低是 ILLIT 的 0.470。即使最低的视觉组也高于音频侧最高的 0.427，这种差距是在不同模型群体和不同候选规模下观察到的，因此只能说在本文设置下视觉共识更强更稳，不能说视觉任务本身更容易。

以下热图导读用于确认视觉一致的结构而非单个数值：先看家族块，再看跨块颜色，注意小尺寸列是否偏浅。

> **看图路径：** 1. 先看按家族分块后对角块颜色是否普遍偏红；2. 再找左上小块与右下大块之间的跨家族颜色深浅；3. 注意最左侧小尺寸模型列的颜色是否明显偏浅

[![原论文 Figure 3：Pairwise ranking agreement between VLMs.](https://arxiv.org/html/2610.17731v1/video_model_spearman_heatmap.png)](https://arxiv.org/html/2610.17731v1/video_model_spearman_heatmap.png)

*论文图 3。原论文 Figure 3:：“Pairwise ranking agreement between VLMs.”。*

热图中 InternVL 中大尺寸块、MiniCPM 块、Qwen3.5 中大尺寸块内部多为深红，GLM 两行与多数列也有 0.6 左右的广泛正相关，而 InternVL3.5-1B 非思考模式一列颜色明显偏浅。右侧色条上限接近高值，整体底色比音频热图红得多，直观支持视觉两两相似度系统性更高，但块状边界说明家族和思考模式仍在塑造细节排序。

### 同一首歌的好听与好看是否对得上

跨模态比较把音频和视觉限制到共有歌曲后，全部音频视频模型对的平均 Spearman 只有 0.060，多数接近零，最强的 1 对也只有 0.288，说明听觉偏好一般不能搬到视觉上。组级别共识对齐在 -0.219 到 0.475 之间，只有 TWICE 的 0.475 达到显著，其余多为接近零或负值。TWICE 案例显示部分歌曲在两边名次完全相同，但也有歌曲出现巨大撕裂，说明即使整体对齐相对最强，单首歌仍可大幅背离。结论的适用条件是音频名次已为共有子集重算，且两边模型群体不同，因此弱对齐反映的是两种模态评价逻辑的分离，而非同一模型前后矛盾。

以下热图导读用于判断跨模态数值的整体量级：先看底色，再找少数深色，区分整体独立与局部峰值。

> **看图路径：** 1. 先整体看颜色是否以浅色为主，判断跨模态数值量级；2. 再定位颜色最深的少数格子在哪一行；3. 对比纵轴音频模型行之间的颜色差异

[![原论文 Figure 4：Cross-modal ranking agreement between ALMs and VLMs.](https://arxiv.org/html/2610.17731v1/crossmodal_model_spearman_heatmap.png)](https://arxiv.org/html/2610.17731v1/crossmodal_model_spearman_heatmap.png)

*论文图 4。原论文 Figure 4:：“Cross-modal ranking agreement between ALMs and VLMs.”。*

热图整体以浅色为主，大量格子在零附近，纵轴上 MOSS-8B-Think 一行和 Qwen-Inst 一行相对偏红，横轴上少数列出现 0.27 到 0.29 的深色，但即使这些峰值在视觉热图的尺度下仍属弱相关。颜色分布支持音频与视觉名次基本独立的判断，纵轴为音频模型、横轴为视频模型，色条中心在零附近。

以下表格用 TWICE 的成对名次说明跨模态的比较问题：在同一批共有歌曲上，音频共识与视觉共识的单首歌差异有多大。

| Song | Audio Rank | Visual Rank |
| --- | --- | --- |
| Fancy | 2 | 2 |
| Feel Special | 5 | 5 |
| Scientist | 23 | 9 |
| YES or YES | 1 | 20 |
| Doughnut | 6 | 26 |

表中既有 Fancy 等歌曲在两边名次完全一致，也有 YES or YES 音频第 1 而视觉第 20、Doughnut 音频靠前而视觉靠后的巨大撕裂，说明组级别正相关主要由部分歌曲的一致驱动，不能推广为每首歌都对齐。尚未评测的范围是同一模型同时听看的联合判断，本文视觉侧完全屏蔽音频，因此不能回答音画结合时会发生什么，这是理解弱对齐时必须保留的边界。

### AESPA 个案如何暴露音频分歧的具体形状

把 AESPA 的部分歌曲按 6 种音频配置展开，可以看到平均相关掩盖的极端摆动。下表选择共识头部、中部和尾部的代表性歌曲，比较不同配置给出的具体名次，检验分歧是顺序微调还是首尾翻转。

以下表格说明个体分歧形态的比较问题：在同一 30 首候选、同一计分规则下，头部共识是否等于人人看好，尾部一致是否更稳定。

| Song | M4-I | M4-T | M8-I | M8-T | Q-I | Q-T | Consensus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Savage | 10 | 2 | 2 | 1 | 6 | 16 | 1 |
| Welcome To MY World | 7 | 3 | 1 | 5 | 5 | 24 | 2 |
| Drama | 5 | 14 | 8 | 2 | 3 | 23 | 3 |
| Hold On Tight | 2 | 30 | 15 | 30 | 21 | 13 | 23 |
| Black Mamba | 21 | 26 | 23 | 21 | 8 | 29 | 28 |
| Can’t Help Myself | 28 | 19 | 26 | 23 | 22 | 30 | 30 |

表中 Savage 在多数配置下靠前，MOSS-8B-Thinking 给第 1，但 Qwen-Thinking 只给第 16，共识仍排第 1，说明共识第 1 不等于人人看好。Hold On Tight 在 MOSS-4B-Instruct 排第 2，在两个 Thinking 配置下却排末位，Next Level 也有从第 4 到第 27 的摆动，只有 Can’t Help Myself 在六列都靠后。这一组对照的意义在于区分两种不一致：一种是头部争夺的顺序差异，另一种是首尾翻转的方向差异，后者对 Spearman 的拉低作用更大。该个案也提示重复 5 次聚合并未消除配置间差异，分歧来自模型与推理模式本身，而非单次采样的噪声。

### 这些结论在什么边界内才成立

第一，样本边界是 14 个 K-pop 女团，不能推广到男团、其他语种或其他创意领域，且各组候选数从 7 到 30 不等，短排序的系数天然更易波动。第二，模型边界是所选的两个音频家族和 5 个视觉家族，音频与视觉比较的是不同模型群体，视觉一致性高不能直接归因于模态本身，也可能来自视觉模型训练数据的重叠或评价维度更外显。第三，输入边界是严格模态隔离，视觉侧完全听不到声音，现实中观众是音画一起消费，因此跨模态弱对齐不等于真实 MV 评价中音画无关。

第四，市场边界是 YouTube 早期观看量，它受发行时间、推荐算法和粉丝动员影响，只是人气的代理而非审美标准。作者对 AESPA、IVE 和 TWICE 收集发行后约 7 天的历史观看量，分别获得 19、19 和 26 个有效快照，视觉共识与观看量排序都为正，但强度因组而异，只有 AESPA 在多重比较校正后仍显著。论文在讨论和局限中明确了这些边界，并提醒模型排序可能继承训练偏差，不应替代艺术家、观众和专业人士的判断。

### 要复现排序与一致性第一步做什么

复现的第一步是按附录歌单重建同艺人组候选，并严格执行输入隔离：音频只喂波形，视觉只喂画面流，不提供标题、榜单和播放量，提示词要求按音乐性或视觉制作质量二选一且只输出一行偏好。第二步是对组内每个无序对跑两种顺序、每种顺序重复 5 次，用胜场累加得到总分并排序，再按 Spearman 算两两平均相关、按 Kendall 算组内一致性，跨模态时先收缩到共有歌曲并重算音频名次。

关键条件是重复次数 5、观察窗口 7 天正负 2 天，以及组内比较和共有子集这两个信息条件，缺一就会改变数值含义。关于资源可用性，证据清单中未发现完成验证的作者资源绑定，因此不能声称代码、模型或数据已公开；第三方链接只证明论文提到过，不证明作者已开源。复现时需要自行准备版权范围内的音频与 MV，并用互联网档案馆快照补历史播放量，缺失快照的视频只能按原文做法在该窗口分析中剔除。

### 什么时候值得参考这套方法还缺哪项验证

当任务是相对排序而非绝对评分、当候选来自同一艺人或同一风格池、当需要比较多模型的偏好结构而非争对错时，这套两两比较加排序聚合的框架值得尝试，因为它避开了量尺不可比，且能同时给出两两相似、集体共识和跨模态对齐 3 层读数。但使用时要保留 3 个提醒：音频与视觉必须用共有候选才能对比，观看量只能作为早期市场反应的弱信号，Thinking 与 Instruct 切换本身就会改变排序，因此报告结果时要同时注明模型配置和重复采样设置。

还缺的验证包括人类听众与观众的对照、音画联合输入下的偏好、男团与其他曲风的扩展，以及宣发和粉丝规模等混杂的控制。只有补上这些，才能判断视觉共识更强究竟来自画面信号更共享，还是来自当前模型群体的训练重叠，也才能把机器品味真正接到选歌、回归规划和艺人定位等决策中，而不只是停留在排序相似性的描述。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2610.17731v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
