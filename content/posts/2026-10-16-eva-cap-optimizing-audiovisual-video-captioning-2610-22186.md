---
title: "EVA-Cap: Optimizing Audiovisual Video Captioning via Event-Centric Alignment"
date: 2026-10-16
draft: false
tags: [音视频理解, 强化学习, 音视频, 数据集]
categories: [论文速递]
description: "EVA-Cap 把视听解说拆成带模态、类型、人物和内容的原子事件，用 63K 自建数据的监督微调加两轮 GRPO 优化完整性、人物归属和跨模态同步三类奖励，在事件对齐评测上提升明显，但长输出的幻觉与快速转场仍有限制。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.22186"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把长视频解说拆成事件再对齐：EVA-Cap 解读"
paper_digest_original_title: "EVA-Cap: Optimizing Audiovisual Video Captioning via Event-Centric Alignment"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.22186v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.22186v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.22186v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "EVA-Cap 把视听解说拆成带模态、类型、人物和内容的原子事件，用 63K 自建数据的监督微调加两轮 GRPO 优化完整性、人物归属和跨模态同步三类奖励，在事件对齐评测上提升明显，但长输出的幻觉与快速转场仍有限制。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiapeng Shi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiuxia Hou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiaqi Leng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junke Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yanhao Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haonan Lu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ziyi Ye"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zuxuan Wu"}]
paper_digest_abstract_sha256: "d7be4fc9c0925b6d399802f227409ebd9742f6a60f8c05f84826e029639804af"
paper_digest_sidecars: {"citation.bib":{"sha256":"6f911f748004f39b7a33037d2d7b4209b525e3fc5907f7428a4c0defaccf40dd","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-22186/citation.bib"},"citation.json":{"sha256":"59cce74af403063822da16c94843d85bf568924232e0d7046f69e92e7c31b0c8","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-22186/citation.json"},"citation.ris":{"sha256":"3cae6d2253059d34ef1131c62cf43db3de7a9c7ba149a9ac0036230d13fed1ef","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-22186/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"2e8e03abc3686e3eebf97bcea961ab0f1b6371b57673af1ae42282f60492868a","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-22186/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "224c79a2acf0a84dd7dbdbcbf5c7842c73ee4c4b8495996e42c505c1d63ffa44"
paper_digest_api_reader_plan_sha256: "c38de8ecafd0171a0efb81957e00b8649722f2c82f996ddcf3035e3843d8d214"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "600075c0944cf07dcb4728cfa12da6034c0e1d739245ac119e39cccb46709043"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "8c2df4c2f65c66ac0b566609188f3557c013bc33d8ab10f85d5d2574d44356f0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "33578928548077c76dad40967d2e7c4ee5be034c5c8e5ae8f1d8e9ce44d32b97"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c7e29b5e1fadebfd9b2c749ffe7f3b6744104baad101cbf796d73005d313854c"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把长视频解说拆成事件再对齐：EVA-Cap 解读

> 英文题目：*[EVA-Cap: Optimizing Audiovisual Video Captioning via Event-Centric Alignment](https://arxiv.org/abs/2610.22186v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jiapeng Shi：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiuxia Hou：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiaqi Leng：机构信息未能在本次解析中与作者逐人可靠绑定
- Junke Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yanhao Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Haonan Lu：机构信息未能在本次解析中与作者逐人可靠绑定
- Ziyi Ye：机构信息未能在本次解析中与作者逐人可靠绑定
- Zuxuan Wu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

视听视频描述输入为含画面流和声音流的视频片段，输出为交代场景动作语音音效及时间关系的长字幕，难点是听觉与视觉事件密集交织致整体文本监督易漏记弱显著事件或错配人物与同步关系。EVA-Cap先用AVoCaDO生成初稿，再用Gemini-2.5-Pro结合原始音画信号修订同步与人物归属，接着用带时间戳的事件元组做命中率过滤得到EVA-Data，监督微调使Qwen2.5-Omni-7B学会详细描述格式。随后分组相对策略优化（Group Relative Policy Optimization，对组内多个采样输出按奖励归一化求优势再做裁剪更新的强化学习方法）用事件召回奖励补全漏记事件，用人物匹配奖励纠正说话人归属，用音频到视觉检索F1奖励约束跨模态同步，并分两轮先学全局与同步再加入人物细节。与已有整体监督和只关注对话或物体属性的方法不同，该方法把字幕表示为可逐项核对的模态化事件序列。在ChronusAV事件对齐评测与AV-SpeakerBench说话人归属问答级联评测中，EVA-Cap视觉到音频推理准确率为55.4%高于DiaDem的45.9%，音频到视觉定位准确率为56.2%高于DiaDem的47.7%，说话人归属准确率为40.1%高于DiaDem的32.7%。在问答级联评测中EVA-Cap在WorldSense上问答准确率超出已有开源模型3.3%。结论适用于200秒以内以可描述事件为主的视频，对快速转场和画外音多人物仍不可靠，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/OPPO-Mente-Lab/EVA-Cap> — 链接不可用（HTTP 404）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 视听描述的输入输出是什么

这篇论文研究的输入是一段同时带有画面和声音的视频，时长多在 200 秒以内，输出是一段几百词的自然段落，要把场景、人物动作、镜头变化、说话内容、环境声和它们的时间关系都写出来。评价时既看有没有漏写重要内容，也看有没有编造不存在的内容，还看音频和画面是否在正确的时间点被绑在一起。

对刚入门的同学，关键是把视听描述理解成信息保留任务：模型看完视频后，后续问答只能基于它写的文本回答，如果文本漏了关键事件或把说话人写错，后面就答不对。论文的起点是全知语言模型，也就是把音频和视频编码成统一时间交错的词元序列再送入大语言模型的结构，基座用的是 Qwen2.5-Omni-7B。

**全知语言模型 × 视听视频描述：** 全知语言模型指同时接受视频画面和音频并生成文本的模型，视听视频描述指要求文本同时覆盖看到的动作场景和听到的说话声、环境声的任务，二者搭配的意义是让同一模型看到交错的时间信号后直接写出融合两种模态的长描述，而不是只看画面猜声音。

### 已有路线为什么还对不齐事件

原文把已有工作分成两类来对比。第一类是视听描述的数据与模型路线，例如 AVoCaDO 用时间编排构造大规模视频与解说对，UGC-Captioner 用整体解说级监督，DiaDem 和 D-ORCA 只盯对话或说话人等局部方面，TimeChat-Captioner 优化时间戳对齐。论文认为它们的共同局限是把解说当成无结构的整段文本来监督，缺少事件级校验和细粒度时间对齐。第二类是视觉描述的强化学习路线，例如 CapRL、RubiCap、OwlCap、VideoCap-R1 用可验证规则或关键信息匹配来优化，视听域的 D-ORCA 偏重对话奖励。

这些工作在输入、目标和运行阶段与本文不同，本文要解决的是同一视频里多音频事件与多视觉事件的交叉对齐，而不是单模态稠密描述。比较时要注意监督粒度不同，不能把只做对话属性的工作与全事件对齐工作放在同一条件下比全面性。

### 论文要解决的具体错位

论文指出两类典型错误。第一类是语言通顺但结构错位，例如解说提到了正确的说话内容，却把说话人安到另一个人身上，或者把某句对白同步到了相邻镜头。第二类是为降低幻觉而大量漏写，基线模型为了不犯错干脆不写音频事件，导致遗漏率很高。作者把原因归为缺少统一结构语义的解说表示，以及缺少带事件级保真度的高质量数据和对应的后训练框架。因此论文把任务重新定义为组装离散原子视听事件序列，同时优化事件内容和事件之间的对应关系，解说中用 as、at the same time 等显式同步连接词把对齐的事件绑在一起。

### 整体流程如何从视频走到解说

整个方法分数据和训练两条线。数据线是自动 3 阶段管线，先用 AVoCaDO 生成初始解说并过滤重复与异常长度，再把原视频加初始解说送给 Gemini-2.5-Pro 做内容精修和时间对齐，最后用 Gemini-2.5-Pro 从原视频抽带时间戳的事件元组，再用 GPT-4.1 逐事件校验精修解说是否命中，要求音频和视觉事件都被蕴含且时间同步一致，命中率低于 0.8 的样本丢弃，最终从 100K 视频得到 63K 视频与解说对。训练线是先在 63K 上做监督微调，再在 3.2K 回放视频上做两轮组相对策略优化，奖励分完整性、归属和同步 3 路。

下面这张图把事件表示与对齐目标画成了从左到右的三栏，值得对照着看。
读图说明：该图顶部是一组码头演示装置的连续画面，下方三栏分别展示原子事件的时间条带、中间对齐机制与右侧合成的解说段落，颜色区分音频与视觉，箭头表示从事件到解说的组装方向，适合理解事件如何被切分再拼回文本。

> **看图路径：** 1. 先看顶部视频帧的时间走向，再看下方音频与视觉事件条带如何对齐到同一时间轴；2. 再看中间一列事件内归属与事件间同步的箭头分别连接了哪些元素；3. 最后看右侧解说中同步词与人物指称是如何把事件串成段落的

[![原论文 Figure 1：Illustration of the event-centric representation of audiovisual captions, where aligned…](https://arxiv.org/html/2610.22186v1/event2cap_submit.png)](https://arxiv.org/html/2610.22186v1/event2cap_submit.png)

*论文图 1。原论文 Figure 1:：“Illustration of the event-centric representation of audiovisual captions, where aligned audiovisual events are composed into the predicted caption.”。*

图中左侧把一段讲解切成口播、动作和屏幕文字 3 类事件并放在同一时间轴上，中间明确区分事件内人物与内容是否挂对、事件之间内容是否同步，右侧解说用同时等词把配重讲解与画面动作绑在一起。这说明模型的目标不是背句子，而是先有事件清单再组织语言，漏事件、挂错人、时间错位都会在中间一栏被检查出来。

**原子视听事件 × 解说文本：** 原子视听事件指不可再拆的一个模态动作或声音单元，带有模态、类型、人物和内容四个槽位，解说文本是把多个事件按时间顺序用同步连接词串起来的段落，二者搭配后，优化目标从整段像不像变成每个事件是否被提到、人物是否挂对、时间是否对上。

### 事件如何表示与打分

论文把解说表示成按模态划分的事件序列，每个事件是模态、类型、人物和内容的四元组，模态只取视觉或音频，人物可为空，内容是具体做了什么或说了什么。参考解说对应参考事件集，分音频集与视觉集，另有一组音频到视觉的同步查询，每个查询包含一个音频事件、若干候选视觉事件和参考同步下标。

\[E=(e_{1},e_{2},\ldots,e_{K}),\quad e_{k}=(m_{k},\tau_{k},c_{k},d_{k}),\quad m_{k}\in\{\mathrm{vis},\mathrm{aud}\},\]

全局完整性奖励是参考事件在生成解说中的召回率，用大模型判断每个参考事件的内容是否被生成解说语义支持，加总后除以总数，只管有没有提到，不管人物对不对。

\[\small\mathcal{R}_{\mathrm{comp}}(y,\mathcal{E}^{\star})=\frac{\sum_{m\in\{\mathrm{aud},\mathrm{vis}\}}\sum_{i=1}^{N_{m}}\mathbb{I}_{\mathrm{cov}}^{m}(e_{i}^{m},y)}{\sum_{m\in\{\mathrm{aud},\mathrm{vis}\}}N_{m}}.\]

事件内归属奖励只统计带显式人物的事件，要求事件既被覆盖且生成解说与参考解说把同一内容归于同一人物，不带人物的事件不计入，避免用背景声稀释分数。

\[\small\mathcal{R}_{\mathrm{attr}}(y,y^{\star},\mathcal{E}^{\star})=\frac{\sum_{m\in\{\mathrm{aud},\mathrm{vis}\}}\sum_{i=1}^{N_{m}}\delta_{i,\mathrm{char}}^{m}\mathbb{I}_{\mathrm{cov}}^{m}(e_{i}^{m},y)\mathbb{I}_{\mathrm{attr}}^{m}(e_{i}^{m},y,y^{\star})}{\sum_{m\in\{\mathrm{aud},\mathrm{vis}\}}\sum_{i=1}^{N_{m}}\delta_{i,\mathrm{char}}^{m}},\]

事件间同步奖励把对齐变成检索问题，对每个音频事件让裁判模型从候选视觉事件中选出在生成解说里与之同步的下标集合，再与参考集合算精确率、召回率与 F1，两边都为空记 1 分，仅一边为空或交集为空记 0 分，最后在查询上平均。

\[\small\mathcal{R}_{\mathrm{sync}}(y,\mathcal{Q}^{\star})=\frac{1}{M}\sum_{i=1}^{M}F_{i}.\]

3 路奖励按系数加权求和得到总奖励，空集合对应项记 0 分，第一轮只开完整性与同步，第二轮三项全开，实现从粗到细的渐进对齐。

\[\mathcal{R}_{\mathrm{EVA}}(y,y^{\star})=\lambda_{\mathrm{comp}}\mathcal{R}_{\mathrm{comp}}(y,\mathcal{E}^{\star})+\lambda_{\mathrm{attr}}\mathcal{R}_{\mathrm{attr}}(y,y^{\star},\mathcal{E}^{\star})+\lambda_{\mathrm{sync}}\mathcal{R}_{\mathrm{sync}}(y,\mathcal{Q}^{\star}).\]

下图用海滩清理的例子展示了 3 路判断如何同时工作，适合理解一次预测如何被拆开扣分。
读图说明：该图左上是参考解说切出的音频与视觉事件编号，左下是模型预测解说与骨干结构，右下三栏分别对应完整性逐事件勾叉、人物匹配正误与视觉候选检索的 F1 示例，红色与绿色标记了对错，适合对照 3 类奖励的分工。

> **看图路径：** 1. 先看左上参考解说如何被切成音频与视觉事件列表；2. 再看下方预测解说进入骨干模型后分出三路奖励判断；3. 注意中间人物写错与右侧候选视觉检索失败的具体标记

[![原论文 Figure 4：Illustration of the event-centric alignment with GRPO for EVA-Cap.](https://arxiv.org/html/2610.22186v1/reward_final.png)](https://arxiv.org/html/2610.22186v1/reward_final.png)

*论文图 4。原论文 Figure 4:：“Illustration of the event-centric alignment with GRPO for EVA-Cap.”。*

图中预测把浅色外套的女士误写成紫蓝色外套，完整性仍可给内容覆盖打勾，但归属路会判人物不匹配而扣分，同步路则检查音频事件选出的视觉候选是否与参考一致。这正好说明 3 路缺一不可：只看召回会放过挂错人的错误。

**事件完整性 × 事件内归属 × 事件间同步：** 事件完整性管有没有漏掉参考事件，事件内归属管同一事件的内容是否挂到正确人物身上，事件间同步管音频事件和哪个视觉事件在同一时间发生，三者分工覆盖漏检、挂错人和时间错位，组合后才能同时约束内容和对应关系。

### 数据如何建成与两阶段如何训练

数据来源是从 LLaVA-Video、FineVideo 和 Shot2Story 收集的 100K 视频，每段不超过 200 秒，建成后平均时长 73.7 秒，平均解说 504.3 词，抽样 20K 分析显示音频与视觉事件数量相当，没有明显模态偏置。

参考结构构造时先筛出在第 3 阶段命中率为 100% 的 6.4K 视频，用奖励裁判模型 Qwen3.5-27B 从参考解说抽音频与视觉事件组成统一列表，每个音频事件配 5 个邻近视觉候选构成同步查询，跨度超过 5 个序号的长背景音被丢弃，再做 8 次回放生成并按同步与归属奖励的均值与标准差筛选，保留同步奖励均值在 0 到 0.75 之间、有至少 5 个有效查询且联合奖励波动最大的前 50%，得到 3.2K 有效视频。

训练时冻结视觉与音频编码器，只更新适配器与大模型参数，视频按 2 帧每秒采样，最大生成长度 2048，监督微调 batch 128、学习率 1×10-5 训两轮，组相对策略优化 batch 16、学习率 2×10-6、KL 惩罚 0.04、组大小 8 训两轮。
读图说明：该图左侧是原始视频帧，中间三行分别展示初始生成、精修生成与事件清单校验的文本变化与模型分工，右侧给出命中结果示例，箭头表示数据从上 1 阶段流向下一个阶段，适合复述每一步的输入处理与作用。

> **看图路径：** 1. 沿左侧视频帧到三个阶段的箭头看数据流向；2. 对比第一阶段初始解说与第二阶段精修解说在人物和同步词上的变化；3. 看第三阶段清单示例的命中判断与命中率数值

[![原论文 Figure 2：Illustration of the designed data annotation pipeline, comprising three stages: initialization,…](https://arxiv.org/html/2610.22186v1/data_pipeline_new.png)](https://arxiv.org/html/2610.22186v1/data_pipeline_new.png)

*论文图 2。原论文 Figure 2:：“Illustration of the designed data annotation pipeline, comprising three stages: initialization, refinement and event-centric quality control.”。*

图中第 1 阶段用 AVoCaDO 产出连贯初稿，第二阶段用原视频信号强化同步与人物归属并保留叙事风格，第 3 阶段用独立抽出的同步事件清单逐项核对解说是否同时命中音频、视觉与同步关系，命中率 9/10 的例子说明过滤阈值 0.8 的实际含义。代价是全程依赖外部大模型做精修与校验，会引入教师偏置并增加调用成本。

**监督微调 × 组相对策略优化：** 监督微调是让模型按 63K 高质量解说做下一词预测，先学会长描述格式和基本事件覆盖，组相对策略优化是对同一视频采样一组输出并按事件奖励算组内相对优势再更新策略，二者搭配是先打底再用细粒度奖励纠偏，避免直接强化时格式崩坏。

### 评测条件与指标方向

通用描述分直接质量与问答级联两套。直接质量用 video-SALMONN-2 测试集看遗漏率越低越好、幻觉率越低越好与总错误率越低越好，用 UGC-VideoCap 看音频、视觉、细节与平均分越高越好，裁判分别是 GPT-4.1 与 GPT-4o。问答级联用 Daily-Omni 与 WorldSense，先用模型写解说再用 Gemini-2.5-Pro 只看解说答题，正确率越高越好。事件对齐用 ChronusAV 的 1066 个 200 秒内视频做视觉到音频与音频到视觉定位，用 METEOR、准确率与 VDC 分数评估，先由 Gemini-2.5-Pro 基于解说作答再由 Seed-1.6 打分，用 AV-SpeakerBench 的 422 个说话人识别选择题看归属准确率。所有模型最大生成长度同设 2048，附录还做了按长度分段的幻觉对照。

**直接质量评估 × 问答级联评估：** 直接质量评估是让裁判模型直接给解说的遗漏和幻觉打分，问答级联评估是先只用模型生成的解说回答问题再算答题正确率，前者看文本错误率，后者看解说是否保留了足够可推理的信息，二者搭配才能同时看到写得像不像和有没有用。

### 通用描述上赢在哪里

在直接质量与问答级联的比较中，问题是同一裁判与同一长度上限下，事件对齐训练是否在不明显增加幻觉的前提下降低遗漏并保留可推理信息，指标方向为遗漏与幻觉越低越好、各项得分与答题正确率越高越好。下表保留了原文的全部基线与 EVA-Cap 的完整对照，适合核对相对位置。

| Model | Size | video-SALMONN-2 testset | video-SALMONN-2 testset | video-SALMONN-2 testset | UGC-VideoCap | UGC-VideoCap | UGC-VideoCap | UGC-VideoCap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Size | Miss.↓ | Hall.↓ | Total↓ | Audio↑ | Visual↑ | Detail↑ | Avg.↑ |
| Gemini-2.5-Pro [8] | - | 18.1 | 13.3 | 31.3 | 69.5 | 74.7 | 73.7 | 72.6 |
| Gemini-2.5-Flash [8] | - | 19.3 | 13.9 | 33.3 | 69.1 | 75.8 | 74.0 | 73.0 |
| HumanOmniV2 [49] | 7B | 49.2 | 12.3 | 61.6 | 45.6 | 66.3 | 59.5 | 57.1 |
| ARC-Hunyuan-Video [12] | 7B | 45.7 | 12.5 | 58.2 | 52.7 | 56.0 | 55.8 | 54.8 |
| Qwen2.5-Omni [45] | 7B | 41.7 | 15.4 | 57.1 | 46.9 | 66.1 | 60.0 | 57.7 |
| MiniCPM-o-2.6 [52] | 8B | 42.2 | 14.3 | 56.5 | 38.6 | 68.5 | 57.7 | 54.9 |
| UGC-VideoCaptioner [43] | 3B | 31.6 | 17.0 | 48.6 | 61.4 | 58.4 | 57.5 | 59.1 |
| Qwen3-Omni-Instruct [46] | 30B-A3B | 32.0 | 13.6 | 45.6 | 67.5 | 74.8 | 72.3 | 71.5 |
| Qwen3-Omni-Captioner [46] | 30B-A3B | 31.0 | 16.6 | 47.6 | 69.0 | 75.5 | 72.3 | 72.3 |
| video-SALMONN-2 [29] | 7B | 21.2 | 17.6 | 38.8 | 61.8 | 71.4 | 68.5 | 67.2 |
| AVoCaDO [4] | 7B | 21.1 | 16.2 | 37.3 | 73.0 | 74.6 | 71.8 | 73.2 |
| DiaDem [5] | 7B | 21.1 | 15.5 | 36.5 | 75.4 | 76.8 | 74.6 | 75.6 |
| EVA-Cap | 7B | 17.6 | 17.0 | 34.6 | 76.9 | 79.0 | 74.7 | 76.9 |

表中 EVA-Cap 总错误率 34.6% 为同表最低，遗漏率 17.6% 也是最低，幻觉率 17.0% 高于部分保守模型，但原文指出保守模型往往以高遗漏换低幻觉，例如 HumanOmniV2 幻觉 12.3% 但遗漏高达 49.2%。UGC-VideoCap 平均 76.9 同样居首。限制是幻觉绝对值仍高于最保守基线，且该表是单次裁判打分，没有报告多次采样的统计显著性。
下面是问答级联的完整对照，问题是只看解说能否支撑后续推理，条件是同一答题模型只读解说文本。

| Model | Size | Daily- Omni | World- Sense |
| --- | --- | --- | --- |
| Gemini-2.5-Pro [8] | - | 60.2 | 33.8 |
| Gemini-2.5-Flash [8] | - | 55.3 | 31.0 |
| HumanOmniV2 [49] | 7B | 8.2 | 6.6 |
| ARC-Hunyuan-Video [12] | 7B | 8.6 | 8.7 |
| MiniCPM-o-2.6 [52] | 8B | 9.8 | 7.2 |
| Qwen2.5-Omni [45] | 7B | 12.4 | 8.6 |
| UGC-VideoCaptioner [43] | 3B | 17.0 | 11.2 |
| Qwen3-Omni-Instruct [46] | 30B-A3B | 17.5 | 12.7 |
| Qwen3-Omni-Captioner [46] | 30B-A3B | 27.2 | 14.1 |
| video-SALMONN-2 [29] | 7B | 29.9 | 18.2 |
| AVoCaDO [4] | 7B | 50.1 | 25.7 |
| TimeChat-Captioner [51] | 7B | 52.8 | 22.6 |
| EVA-Cap | 7B | 56.1 | 29.0 |

表中 EVA-Cap 在 Daily-Omni 得 56.1，在 WorldSense 得 29.0，均高于同表开源模型，原文称相对之前方法在 WorldSense 高 3.3%。限制是闭源 Gemini 仍更高，且级联分数同时受解说质量与答题模型能力影响，不能直接等同于人工评价。下面用动画对白的例子直观展示同步与归属的差异。
读图说明：该图顶部是小狗与男孩的 5 个镜头与两条语音标注，中间与下方分别是基线与本方法的长解说段落，红色与绿色区分错误与正确，粗体与下划线分别标记同步与归属相关措辞，适合观察同一事件的不同写法。

> **看图路径：** 1. 先看顶部视频帧与两条语音标注的说话人归属；2. 对比中间与下方两段解说对同一句话的说话人认定；3. 注意同步描述与人物认定在颜色标记上的差异

[![原论文 Figure 5：Case analysis of EVA-Cap and AVoCaDO, with features relevant to audiovisual synchronization in…](https://arxiv.org/html/2610.22186v1/vis_new.png)](https://arxiv.org/html/2610.22186v1/vis_new.png)

*论文图 5。原论文 Figure 5:：“Case analysis of EVA-Cap and AVoCaDO, with features relevant to audiovisual synchronization in bold, and accurate event attribution underlined.”。*

图中基线把小狗的台词归于男孩并同步到斑马线场景，本方法把同一台词归于小狗并同步到人行道交谈场景，同时用 Simultaneously 等词绑定画面切换。这说明事件级监督带来的主要是人物挂对与时间绑对，而不是单纯写得更长。

### 事件对齐上强在何处

在事件中心的比较中，问题是解说是否同时支持跨模态定位与说话人归属，指标为视觉到音频与音频到视觉的准确率与 VDC 分数越高越好，说话人选择题正确率越高越好。下表保留了 TimeChat、AVoCaDO、DiaDem 与 EVA-Cap 的完整对照。

| Model | Size | V2A | V2A | V2A | A2V | A2V | A2V | AV-Speaker |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Size | M | Acc | Score | M | Acc | Score | Acc |
| Gemini-2.5-Pro [8] | - | 2.4 | 61.2 | 2.4 | 1.2 | 61.0 | 2.4 | 49.1 |
| TimeChat [51] | 7B | 1.2 | 31.6 | 1.2 | 0.7 | 30.1 | 1.2 | 23.7 |
| AVoCaDO [4] | 7B | 1.8 | 40.9 | 1.6 | 1.1 | 44.9 | 1.8 | 26.8 |
| DiaDem [5] | 7B | 1.8 | 45.9 | 1.7 | 1.1 | 47.7 | 1.9 | 32.7 |
| EVA-Cap | 7B | 2.4 | 55.4 | 2.2 | 1.2 | 56.2 | 2.2 | 40.1 |

表中 EVA-Cap 视觉到音频准确率 55.4%，音频到视觉准确率 56.2%，说话人归属准确率 40.1%，均高于同表 3 个开源基线，但仍低于 Gemini-2.5-Pro 在说话人上的 49.1%。这支持事件对齐训练确实改善了细粒度同步与归属的判断，限制是评测依赖生成解说再答题的 2 阶段协议，答题与打分模型本身的误差会进入分数，且只选了 1066 与 422 的子集，推广到全集需谨慎。

### 每一步与每个奖励贡献了什么

消融要回答的是提升来自数据还是奖励，以及 3 路奖励是否冲突，条件是同一基座与同一评测协议。下表从基线到监督微调再到两轮 GRPO 的不同奖励组合给出了完整数字。

| Setting | Reward | Reward | Reward | V2A | V2A | V2A | A2V | A2V | A2V | AV-Speaker | Daily-Omni |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Setting | ℛcomp | ℛsync | ℛattr | M | Acc | Score | M | Acc | Score | Acc | Acc |
| Baseline | - | - | - | 0.1 | 8.4 | 0.2 | 0.3 | 11.9 | 0.5 | 3.1 | 12.4 |
| SFT | - | - | - | 2.0 | 44.8 | 1.7 | 1.0 | 46.1 | 1.8 | 31.8 | 50.1 |
| SFT → GRPO stage1 | ✓ | - | - | 2.2 | 53.3 | 2.0 | 1.2 | 52.9 | 2.0 | 33.9 | 53.8 |
| SFT → GRPO stage1 | ✓ | ✓ | - | 2.3 | 53.8 | 2.1 | 1.2 | 55.0 | 2.1 | 37.0 | 55.0 |
| SFT → GRPO stage1 | ✓ | ✓ | ✓ | 2.1 | 47.9 | 1.8 | 1.1 | 50.8 | 1.9 | 35.6 | 52.9 |
| SFT → GRPO stage2 | ✓ | ✓ | - | 2.2 | 56.5 | 2.2 | 1.3 | 55.5 | 2.2 | 37.0 | 55.1 |
| SFT → GRPO stage2 | ✓ | ✓ | ✓ | 2.4 | 55.4 | 2.2 | 1.2 | 56.2 | 2.2 | 40.1 | 56.1 |

表中基线视觉到音频仅 8.4%、音频到视觉仅 11.9%，监督微调后分别升至 44.8% 与 46.1%，说明 63K 事件级数据本身纠正了音频漏写。第一轮只加完整性奖励后多项提升约数个百分点，再加同步奖励后音频到视觉与说话人继续提升，若第一轮就同时加归属奖励反而多项回落，第二轮渐进加入归属后说话人升至 40.1% 且通用分数升至 56.1。限制是附录用精简 1.6K 与不同裁判重复时数值会变化，且增加事件精度奖励虽缩短长度、降低绝对幻觉，却提高遗漏并恶化长度归一化幻觉，说明保守输出不是免费午餐。

### 哪些情况仍然会错

原文用失败案例总结了两类未解决范围。第一类是快速场景切换视频，视觉描述仍会漏写且音画绑定错位。第二类是多人物加画外音场景，说话人容易绑错。作者认为根源是对复杂动态场景中实例与关键信息的捕捉不足，未来想引入带空间时间定位的描述。数据层面，多阶段管线虽可扩展，但依赖专有大模型做生成与质检，可能引入教师偏置并残留自动校验后的标注误差，计划用多模型交叉验证来缓解。

附录的长度分段显示，本方法在短中长度幻觉低于 DiaDem，在最长段仍落后，说明细节与幻觉的权衡尚未解决。这些都不是部署时能自动消失的误差，使用解说作为事实摘要时需要人工核对。

### 复现第一步与成本边界

如果要复现，值得尝试的场景是需要同时保留声音与画面细节的长视频解说，且能接受大模型裁判带来的额外调用成本。第一步不是直接跑强化学习，而是先按 3 阶段复刻数据过滤：用已有视听描述器生成初稿，过滤重复与异常长度，再用原视频信号精修同步与人物，最后独立抽事件清单并按 0.8 命中率过滤。训练上以 Qwen2.5-Omni 为基座，冻结两路编码器，只训适配器与语言模型，监督微调后再构造参考事件与同步查询并做回放筛选。

分工上，完整性奖励管事件是否漏写，人物归属奖励管说话人与动作是否安到对的人，同步奖励管声音事件与画面事件的时间对应。执行顺序是先做监督微调学会长描述格式，再做两轮优化：第一轮只用完整性与同步奖励打基础，第二轮才加入人物归属奖励。回放时对备选视频各生成 8 个候选，按同步奖励与归属奖励之和的波动筛选，查询层面只保留平均同步分在 0 与 0.75 之间的查询，视频层面要求有效查询不少于 5 个并取前一半，最终留下 3.2K 条视频用于优化。

参考结构来自命中率为 100% 的 6.4K 条视频，每个音频事件配 5 个相邻视觉候选，跨度过大的背景音会被舍去。原文报告训练用 32 张 H20，奖励裁判用 Qwen3.5-27B，评测裁判涉及 GPT-4.1、GPT-4o、Gemini-2.5-Pro 与 Seed-1.6。需要补的验证是同一随机种子多次回放的方差、不同裁判下奖励一致率之外的端到端波动，以及推理延迟与输出长度的实际开销，原文未报告延迟与每 token 成本，不能承诺效率提升。

论文给出代码链接但本次校验显示链接当前不可用，因此只能说论文提到了该链接，不能说作者资源已公开可下载，权重与可运行状态也需另行确认。

### 结论在什么条件下成立

综合来看，论文直接报告的是事件表示加 3 路奖励的后训练能同时降低遗漏并改善同步与归属，在所选通用与事件评测上高于同表开源基线，且数据与奖励各自在对照中都有增益。证据支持的解释是完整性奖励补回被漏写的音频事件，同步奖励纠正时间绑定，归属奖励纠正人物挂靠，渐进式两轮比一轮全开更稳定。推测部分是更细的实例定位能进一步解决快速转场与画外音问题，这还待验证。

容易误解的是把问答正确率等同于解说完全无幻觉，以及把搜索到的最优权重当成部署必得的提升，实际部署仍受裁判模型、长度上限与子集选择的影响。在这些条件下，事件中心对齐是一条更忠实、时间更连贯的视听描述路径，但不是零幻觉的保证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.22186v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
