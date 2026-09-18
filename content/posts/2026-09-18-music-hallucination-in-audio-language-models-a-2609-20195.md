---
title: "Music Hallucination in Audio-Language Models: A Hierarchical Formulation and Empirical Study"
date: 2026-09-18
draft: false
tags: [音乐理解, 评测协议, 音乐, 音频大模型]
categories: [论文速递]
description: "论文把音乐幻觉定义为五层感知接地失败，用矛盾判定加三范式诊断九个模型，发现人声误听普遍而调性感知分化架构，两种免训练干预在辨别式探针有效却常不能迁移到自由生成。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.20195"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "音乐幻觉不是一句话说错，而是五层感知逐层失守"
paper_digest_original_title: "Music Hallucination in Audio-Language Models: A Hierarchical Formulation and Empirical Study"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.20195"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.20195.pdf"
paper_digest_primary_task: "音乐理解"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.music-understanding","label":"音乐理解"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文把音乐幻觉定义为五层感知接地失败，用矛盾判定加三范式诊断九个模型，发现人声误听普遍而调性感知分化架构，两种免训练干预在辨别式探针有效却常不能迁移到自由生成。"
paper_digest_authors: [{"affiliations":["Institute of Information Engineering, CASSchool of Cyber Security, UCASBeijingChina"],"name":"Yu Liu"},{"affiliations":["Central Conservatory of MusicBeijingChina"],"name":"Jiahui Liu"},{"affiliations":["University of Electronic Science and Technology of ChinaChengduChina"],"name":"Zhilin Liu"},{"affiliations":["Institute of Information Engineering, CASBeijingChina"],"name":"Cong Cao"},{"affiliations":["Institute of Information Engineering, CASBeijingChina"],"name":"Fangfang Yuan"},{"affiliations":["Institute of Information Engineering, CASSchool of Cyber Security, UCASBeijingChina"],"name":"Yuling Yang"},{"affiliations":["Institute of Information Engineering, CASSchool of Cyber Security, UCASBeijingChina"],"name":"Pin Xu"},{"affiliations":["Institute of Information Engineering, CASSchool of Cyber Security, UCASBeijingChina"],"name":"Yanbing Liu"}]
paper_digest_abstract_sha256: "ae51c5aad1fc9bf22a463053cec1eafa810cf7c6d0151203718b201c5e1636ce"
paper_digest_sidecars: {"citation.bib":{"sha256":"68492ac5c848f7fa15255f0e73d4ea6cdeacbe9875567a82710346e0976a8c81","url":"/audio-paper-digest-blog/data/papers/2026-09-18/2609-20195/citation.bib"},"citation.json":{"sha256":"60e2d5a519b0129133efac5b653a270f4241b7608eb73dcd71f59bddc3e9c958","url":"/audio-paper-digest-blog/data/papers/2026-09-18/2609-20195/citation.json"},"citation.ris":{"sha256":"b99ff43f546690475d76176d85cba700c5a3d89ca8d6389a08b5fd008a21c333","url":"/audio-paper-digest-blog/data/papers/2026-09-18/2609-20195/citation.ris"},"rethink-context.json":{"sha256":"adc8aaac306be9a2c663d3a00f249e6b723a8aec7d8e3283f621cbb65737b709","url":"/audio-paper-digest-blog/data/papers/2026-09-18/2609-20195/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d4c614d3f743a159f136c076db162b8c1aa5c2dd99a6a775f5cc5056abd67453"
paper_digest_api_reader_plan_sha256: "8beb0b112db6ea674c1d9f4dfd48fe9b2cbf1b61d73ee090fb71007bd9462b8e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "35e09fa3fb3852a5ebddd1f1a01d4ed315b146c978e66f439995d4a425a25dfb"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "74745f7895b5b7afcca3662ecba39b38d0a011ed54a0768515e089edb6170574"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6fd6cea09ebb99b42046e78eab78e9e4481ef570635d35455886111208de7139"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0c6933d754fdf33075b4359ccd19529148bb2061135e29b2f50943fda8954a2c"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 音乐幻觉不是一句话说错，而是五层感知逐层失守

> 英文题目：*[Music Hallucination in Audio-Language Models: A Hierarchical Formulation and Empirical Study](https://arxiv.org/abs/2609.20195)*

> 标签：#音乐理解 | #评测协议 | #音乐 | #音频大模型
>
> 评分：**7.4/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yu Liu：Institute of Information Engineering, CASSchool of Cyber Security, UCASBeijingChina
- Jiahui Liu：Central Conservatory of MusicBeijingChina
- Zhilin Liu：University of Electronic Science and Technology of ChinaChengduChina
- Cong Cao：Institute of Information Engineering, CASBeijingChina
- Fangfang Yuan：Institute of Information Engineering, CASBeijingChina
- Yuling Yang：Institute of Information Engineering, CASSchool of Cyber Security, UCASBeijingChina
- Pin Xu：Institute of Information Engineering, CASSchool of Cyber Security, UCASBeijingChina
- Yanbing Liu：Institute of Information Engineering, CASSchool of Cyber Security, UCASBeijingChina

## 📌 核心摘要

该研究处理音频语言模型面对音乐片段与文本提示时生成无依据描述的问题，输出为含乐器、人声、速度、调性、风格与情感断言的文本，难点在于五层属性可验证性不同且参考字幕存在选择性省略。诊断框架MuseDiag先以判别式探针、自由描述与结构化问询三范式采集模型输出，并按声事件、时间属性、调性、风格与情感五层路由断言。其次硬层断言送入信号工具验证而软层断言送入语义裁判验证，上一步的层标签决定证据通道与矛盾判定阈值。再以与参考字幕矛盾而非缺失作为幻觉判定并附带覆盖率与不可判定态，避免把未提及的有效属性误判为幻觉。相对通用音频幻觉基准的关键差异在于按可验证性划分证据通道并设置不可判定态，从而使层间不可比的验证特异性得以显式隔离。在MusicCaps片段的结构化调性任务评测下，Qwen2.5-Omni的准确率为68.6%，高于MiMo-V2-Omni的准确率0.0%。结论仅适用于短片段与可审计属性，对复调密集、长结构与表演细节等现象尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要保留什么？

本文解读的对象是 arXiv ID 2609.20195 的论文，主题是音频语言模型在音乐上的幻觉。输入是一个音乐音频片段加一个文字提示，模型输出一段文字描述或回答。目标是判断输出中关于音乐的主张是否被输入音频支撑。论文明确把事实记忆类幻觉排除在外，例如编造作曲家或发行年份不算本文的感知幻觉，只研究模型是否听准并说准音乐内容。

对于刚进入语音音乐音频领域的研究生，需要保留的关键信息有 3 组。第一是 5 层划分：声音事件、时间属性、调性属性、风格、情感，前 3 层可用信号工具客观验证，后两层只能做语义矛盾检查。第二是三范式评估：辨别式是否探针、自由描述、结构化逐属性提问，三者不折成一个总分。第三是实验条件：9 个模型、四开四闭加一个混合架构细节、440 个可用 MusicCaps 片段加 IRMAS 乐器集、工具门限全局固定。输出上，本文解读按学习依赖展开，先讲为何音乐幻觉不同于物体存在幻觉，再讲诊断管线与干预，最后讲证据可靠性与复现条件。

上半视觉例子只问看见什么，回答长椅上有猫可以直接判无猫，属于一种能力 1 次检查。下半音乐例子从同一个问答框分出 5 类问题：乐器与人声、节拍快慢、调性、流派风格、情感，每类需要的证据不同，失败方式也不同。正是这种多能力多失败方式的对比，说明需要分层诊断框架，而不是把音乐当成宽泛音频域中的一个标签。

> **看图路径：** 1. 先看上半视觉分支的单一核查路径：长椅图加猫的主张被直接判无猫；2. 再看下半音乐分支从同一问答框分出的五条虚线问题链；3. 对照顶部灰色标签从一种能力一次检查变为多种能力多种失败方式

[![原论文 Figure 1.：Conventional object-existence hallucination checks target a single claim type; music…](https://arxiv.org/html/2609.20195v1/x1.png)](https://arxiv.org/html/2609.20195v1/x1.png)

*论文图 1。原论文 Figure 1.：“Conventional object-existence hallucination checks target a single claim type; music hallucination spans multiple abilities with distinct failure modes, motivating a hierarchical…”。*

图 1 用上下两栏把视觉与音乐的检查难度并置。上栏图像加问答框加眼睛箭头构成单一核查闭环，下栏波形加问答框经绿色虚线扇出到吉他、节拍器、键盘、风格树与笑脸 5 个图标，右侧对应 5 类文字问题。顶部的灰色虚线标签点明了从一到多的变化，教学上可以直接把该图当作全文动机：后文的 5 层、3 种证据工具与三范式都是为了覆盖这 5 条分支。

### 同输入同目标的已有路线差在哪里？

第一条路线是宽泛音频幻觉基准。论文点名的 AHa-Bench 与 HalluAudio 做广义音频幻觉，Nishimura 等与 AVHBench 做音视频不一致。这些工作把音乐只当成音频大类中的一个子域，没有按音乐感知分层，也没有把开放式音乐主张路由到音乐信息检索工具。因此它们能报告音频模型是否幻觉，但不能回答哪一音乐层在幻觉。

第二条路线是音乐理解能力评测。MusicCaps 与 Song Describer 提供字幕资源，MuChoMusic、CMI-Bench、MQAD、MUSIC-AVQA 测多模态理解、指令跟随、问答或音视推理。论文指出这类评测常用严格匹配或固定选项，而音乐字幕是选择性描述，参考没提 tempo 不代表模型说 tempo 就是错。若沿用缺失即幻觉的假设，会把有效但被省略的属性误判为幻觉。

第 3 条路线是幻觉缓解的解码与提示方法。视觉侧有 VCD、M3ID、OPERA，音频侧有 Audio-Aware Decoding 与 AVCD，还有用专家视觉证据锚定的提示法。论文认为这些方法没有围绕音乐感知层组织，也没有证明在二值探针上的提升能迁移到自由或结构化音乐生成。因此本文的对照不是在同条件上比谁分高，而是指出已有路线在输入相似但目标与监督不同：前者测通用幻觉或能力，后者要做分层可审计的音乐接地诊断。

### 音乐幻觉被形式化成什么问题？

论文把 1 次评测写成三元组：音频片段、提示、模型输出。从输出中抽出音乐主张集合，每个主张对照该片段的证据做三值判定。证据包括客观标签、信号工具输出与参考字幕。判定只在证据主动矛盾时记为幻觉，若证据支持或相容则记为非幻觉，若证据不足则记为未定。未定主张不计入幻觉率分母，但保留在覆盖率分析中。这种保守设计是为了防止因字幕省略而多算幻觉。

5 层按可验证性组织，而不是按任务难度。L1 声音事件含乐器与人声，L2 时间属性含速度与节奏，L3 调性属性含调与和声，这 3 层为硬知识，可用信号处理工具验证。L4 风格含流派与年代，L5 情感含情绪与 affect，这两层为软知识，涉及主观解释，需要基于矛盾的语义检查。论文举例说调性估计虽难，但可用带置信门限的工具验证，因此仍归硬层。

**矛盾判定 × 未定态：** 矛盾判定的分工是只在证据主动反驳主张时记为幻觉，避免把参考字幕没提到的正确属性误判；未定态的分工是当证据不足或落在模糊门限时明确 abstain，不计入幻觉率分母的强制判断；二者搭配的原因是音乐描述天然是选择性提及，必须用保守的未定来防止漏提被当成幻觉，组合意义是让幻觉率成为可评估主张上的条件矛盾率，同时用覆盖率报告可判比例。

符号上，记片段证据为该片段的客观与字幕证据，主张为输出中的一条音乐陈述，判定函数输出 1 表示被反驳，0 表示被支持或相容，未定表示证据不足以可靠判断。幻觉率是可评估主张中被判 1 的比例，覆盖率是可评估主张占全部抽取主张的比例。论文强调硬层与软层因证据特异性不同，只在组内加权汇总，不宜直接跨组比较能力高低。

\[h(c;E_{x})=\begin{cases}1,&c\text{ contradicted by }E_{x},\\[4.0pt] 0,&c\text{ supported by or compatible with }E_{x},\\[4.0pt] \bot,&E_{x}\text{ insufficient for reliable judgment.}\end{cases}.\]

该公式的教学要点是 3 个分支互斥。第一支要求证据明确矛盾才算幻觉，第二支把支持与相容合并为非幻觉，第三支把证据弱或缺失显式 abstain。沿一个样本走一遍：模型说这是快速的 140 拍而工具估计 104 拍且落在中速区，若类别矛盾则判 1；若字幕只说键盘伴奏而模型说钢琴，字幕特异性不足则判未定；若字幕说强说唱而工具语音比很高，模型说无人声则判 1。

### MuseDiag 的全景管线如何走通？

MuseDiag 的全景是三范式输入、5 层路由、两类证据、三值输出。左侧是音乐片段进入音频语言模型，上中下 3 条色带分别是辨别式探针、自由描述、结构化提问。辨别式探针输出是否并统计准确率与肯定偏置，自由描述先做主张抽取再进 5 层路由，结构化提问按属性直接算准确率。中间 5 层路由把 L1 至 L3 送往客观工具，把 L4 与 L5 送往大模型裁判，最右统一为支持、矛盾即幻觉、未定。

三范式被当作诊断仪表盘而不是合成总分。辨别式探针例如问是否含钢琴，用于隔离肯定偏置并做受控敏感性分析。自由描述用统一提示 soliciting 乐器、风格、情绪、速度与调，要求可识别才说，用于捕捉无约束生成中的幻觉。结构化提问对乐器、人声、速度、流派、情绪、调逐属性提问，提供近均匀覆盖。自由与结构化的分歧本身就有信息量，能揭示范式特异的失败。

管线从输入到输出的导读需要先看 3 条范式如何共享同一模型，再看主张路由的分叉点，最后看证据如何收敛到同一三值。硬层优先用客观信号证据，若无客观证据但有特异字幕证据则回退到语义检查，软层直接走大模型裁判，缺乏可靠客观与特异字幕证据则记未定。所有门限全局固定并对所有模型一致，防止事后调参。

> **看图路径：** 1. 沿左侧音乐片段经音频语言模型分出的三条范式色带向右追踪；2. 看自由描述经主张抽取进入五层路由后如何分叉到客观工具与大模型裁判；3. 确认最右三元判定把矛盾等于幻觉而把未定单独保留

[![原论文 Figure 2.：MuseDiag pipeline. Three paradigms feed into five-layer claim routing; hard layers (L1–L3) are…](https://arxiv.org/html/2609.20195v1/figures/MM_Muse_overview.png)](https://arxiv.org/html/2609.20195v1/figures/MM_Muse_overview.png)

*论文图 2。原论文 Figure 2.：“MuseDiag pipeline. Three paradigms feed into five-layer claim routing; hard layers (L1–L3) are verified by Silero VAD, librosa, and essentia; soft layers (L4–L5) by DeepSeek V3…”。*

图 2 的像素细节支持上述走读。顶部蓝色长带是辨别式探针，从是否含钢琴经是否框指向准确率与肯定偏置。中间米色块是自由描述经主张抽取到 c1、c2 等，底部粉色块是结构化提问经逐属性准确率。中间五色路由块明确标出 L1 至 L5 的属性括号，右侧客观工具列出语音检测、节拍库、调性库与 IRMAS，大模型裁判标出具体裁判模型，最右绿红灰三块对应支持、矛盾与未定。

### 主张路由与证据工具具体做什么计算？

硬层 3 组工具各有明确的门控。L1 乐器对照已验证标签集，IRMAS 用闭集标签，MusicCaps 用字幕线索；人声用语音活动检测算浊音帧比并与固定阈值比较，论文提醒这只是人声存在的代理而非完美歌唱检测，矛盾推断偏保守。L2 用节拍跟踪估计每分钟拍数并映射到慢速小于 80、中速 80 至 120、快速大于 120，边界附近 75 至 85 与 115 至 125 的片段直接判未定，避免在类别边界强行二选一。L3 用调性轮廓匹配估计调与置信度，置信门限 0.8 以上才可评估，以上比较模型声称的调与算法估计是否矛盾，以下判未定。

软层用字幕接地的语义矛盾检查，裁判只做窄任务的矛盾检测，输出蕴含、矛盾或不确定，分别映射到 0、1 与未定。论文用人类专家审计裁判，并把低特异输出路由到未定而不是记为正确，因此报告幻觉率时必须同时看覆盖率，防止泛泛回答显得可靠。

**硬层 × 软层：** 硬层的分工是处理可用信号工具客观验证的声音事件、时间属性与调性属性，分别路由到语音检测、节拍跟踪与调性估计；软层的分工是处理缺乏客观真值的风格与情感，只能做字幕接地的语义矛盾判断；搭配理由是可验证性不同决定了证据类型不同，组合意义是同一条自由描述中的多个主张被拆到不同证据通道，避免用单一裁判同时判客观与主观。

层幻觉率的计算是可评估主张中矛盾主张的占比，硬幻觉率与软幻觉率分别在硬组与软组内按主张加权汇总。辨别式探针的肯定偏置定义为正确为否时模型答是的条件概率，用于隔离无支撑内容的肯定倾向。论文的可靠性审计放在结果之前，目的是先确认门控区内工具可信，再谈模型差异。

\[\mathrm{HR}_{\ell}=\frac{\sum_{c\in\mathcal{C}^{(\ell)}_{\text{eval}}}\mathbf{1}[h(c;E_{x})=1]}{|\mathcal{C}^{(\ell)}_{\text{eval}}|}.\]

该公式中分子是对可评估主张的指示求和，分母是可评估主张数。教学上注意分母已排除未定，因此它不是全部生成主张中的幻觉比例；若要得到全部抽取主张中的确认矛盾比例，需要用覆盖率乘以该层幻觉率。

**肯定偏置 × 音频依赖分数：** 肯定偏置的分工是在正确答案为否定时统计模型回答是的概率，刻画输出层爱肯定的倾向；音频依赖分数的分工是在每个解码步比较有音频与消融音频时词分布的差异，刻画词元层是否真在听音频；搭配原因是输出偏置相同不代表内部对音频的敏感过程相同，组合意义是用门控率补充静态偏置，区分高熵低依赖的脆弱步与一般的肯定回答。

肯定偏置与音频依赖分数的互补在后文有实证：高偏置的 2 个模型门控率明显不同，低门控的模型仍有人声幻觉，说明词元层音频敏感性与输出层幻觉不能互相替代。

### 没有训练时，ADD-M 与 TPA 实际计算什么？

本研究没有训练任何音频语言模型权重，该节讲的是两种免训练诊断干预的真实计算。ADD-M 在 logit 空间操作，TPA 在上下文空间操作，二者作用点不同。ADD-M 需要架构适配的音频消融：对部分模型用纯文本消融，对另一些用音频置零消融，因为不同架构融合音频的方式不同。所有缓解增量都用完全相同提示的配对比较，API 模型因不暴露 logit 与消融而不参与 ADD-M。

ADD-M 先定义音频依赖分数为全音频条件分布与消融条件分布的分布差异，差异大表示该步预测对音频消融敏感，差异小表示有无音频预测相似。v1 版用固定强度做均匀对比修正，放大音频敏感词元并抑制无音频也持续出现的词元。v2 版引入自适应门控，权重在依赖分数低时更大，门只在模型不确定且受音频影响弱时打开，门控率即门打开步的比例。

> **看图路径：** 1. 看左侧有音频与无音频两路模型输出的 logit 分布如何算出依赖分数；2. 看左下不确定与忽视音频双条件门如何决定是否修正词分布；3. 看右侧先感知探针形成锚定上下文再回答目标问题的两阶段箭头

[![原论文 Figure 3.：Left: ADD-M computes an Audio Dependency Score (ADS) via logit contrast and applies correction…](https://arxiv.org/html/2609.20195v1/x2.png)](https://arxiv.org/html/2609.20195v1/x2.png)

*论文图 3。原论文 Figure 3.：“Left: ADD-M computes an Audio Dependency Score (ADS) via logit contrast and applies correction through a dual-condition gate (high entropy + low ADS).”。*

图 3 左侧画出有音频与无音频两路模型输出的分布对比，中间算出依赖分数，左下用熵大于阈值与依赖小于阈值构成双条件门，修正前后示例从平滑人声快速 tempo 变为器乐中速。右侧画出 5 层分类左侧栏，先用乐器、是否有人声、速度、情绪四道探针自生成绿色对勾答案并拼成锚定上下文，再带着该上下文回答是否含人声，示例中把无锚定的肯定回答纠为器乐无人声。

**ADD-M × TPA：** ADD-M 的分工是在 logit 空间做音频消融对比并放大音频敏感词元，抑制无音频也出现的先验词元；TPA 的分工是在上下文空间先用四道分层感知探针自生成锚定上下文，再带着该上下文回答目标问题；搭配理由是分别干预解码时刻与生成之前的上下文，组合意义是检验诊断画像能否预测不同干预点的行为，而不是假设一种修正能通吃所有层与范式。

TPA 的计算是把生成分布从给定音频与问题改为给定音频、问题与锚定上下文，锚定上下文由四道分层感知探针的回答拼接而成，探针直接来自 5 层分类。实验用四道探针，不改解码算法，只提供结构化自生成的感知上下文以减少对语言先验的依赖。

\[\mathrm{ADS}_{t}=D_{\mathrm{KL}}(p_{t}^{a}\,\|\,p_{t}^{u}),\]

该式中左端是第 t 步的依赖分数，右端是两分布的散度，输入是同一前缀下有音频与消融的词分布，目标是量化该步对音频消融的敏感度。v1 的固定修正与 v2 的自适应修正分别对应均匀放大与按需放大，原文给出 v1 强度为 1.0，v2 用熵与依赖的双阈值门。

\[G_{t}=\mathbf{1}[H(p_{t}^{a})>\tau_{H}]\cdot\mathbf{1}[\mathrm{ADS}_{t}<\tau_{\mathrm{ADS}}]\]

该门由两个指示相乘，高熵表示不确定，低依赖表示弱受音频影响，只有同时满足才修正。教学例子：若某步分布平坦且有无音频分布几乎相同，门打开并施加较强修正；若分布尖锐或有无音频差异已大，门关闭以保留原预测。

\[p_{\theta}(y\mid x,q)\;\longrightarrow\;p_{\theta}(y\mid x,q,z),\]

该式把无锚定的生成分布改写为带锚定上下文的条件分布，z 即四道探针回答的拼接，目标不是改权重而是改变生成时的信息条件。

### 数据、模型、指标与证据门限如何对齐？

数据集分两块。MusicCaps 抽 500 片并按属性覆盖启发式采样，过滤不可用音频后剩 440 片，用于自由描述与结构化提问，字幕只作矛盾证据而不作闭集真值。IRMAS 测试集 2874 片、11 类乐器，用于 L1 乐器的闭集监督验证。辨别式探针每模型约 6500 道是否问，自由与结构化在适用处用 440 片，任务分母经证据过滤后各异。

模型共 9 个，四开为 Qwen2-Audio-7B、SALMONN-7B、Audio-Flamingo-3、Qwen2.5-Omni-7B，均为 7B 量级但编码器与投影设计不同；五闭为 Gemini 2.5 Flash、Gemini 2.5 Pro、Gemini 3 Pro、GPT-4o Audio、MiMo-V2-Omni。指标分 3 组：自由描述报告分层幻觉率与硬软汇总，辨别式报告准确率与肯定偏置，结构化报告逐属性准确率。主要结果带 95% 置信区间，探针、自由、L3 调与逐样本结构化均值用 10000 次百分位自助，其余二值结构化准确率用 Wald 区间。

实现上硬证据用 Silero 做人声、librosa 做拍速、essentia KeyExtractor 做调并设 0.8 置信门，速度模糊区判未定；软层风格与情感由 DeepSeek V3 做裁判。推理用贪心解码温度为 0。开源实验在两块大显存 GPU 上运行，API 模型经 HTTP 访问。ADD-M 与 TPA 只在四开模型上评估，且用完全相同提示的配对比较，附录给出端点、分母、消融变体与超参数。

### 三范式下哪些模式最稳定，哪些排名会变？

主结果的总体信息是 Audio-Flamingo-3 在 3 组汇总上领先，但其下排名随范式大幅重排。辨别与自由的相关仅 0.17，辨别与结构化相关 0.80，自由与结构化相关 0.18。范式敏感指数显示 Gemini 2.5 Pro 最敏感而 Audio-Flamingo-3 与 Qwen2.5-Omni 排名稳定。论文提醒硬幻觉率与软幻觉率因证据不同应分别解读，不宜直接比作能力分。

分层看，人声误听是普遍弱点，同一语音检测管线下自由人声幻觉率在 9 模型中处于 45.9% 至 61.3% 的窄带，而结构化人声准确率高达 75.7% 至 89.5%，说明直接问能答对但开放生成仍幻觉。调性感知是架构分化轴，同一调性管线下结构化调准确率从 MiMo-V2-Omni 的 0.0% 到 Qwen2.5-Omni 的 68.6%，SALMONN 仅 5.1%，自由调幻觉率跨度从 34.8% 到 90.5%。SALMONN 的 L1 乐器探针准确率 95.3% 伴随 98.5% 的极端肯定偏置，GPT-4o 很少列乐器且列出的多无支撑，Audio-Flamingo-3 软层最好但情绪仍是其结构化最弱项。

**辨别式探针 × 自由描述：** 辨别式探针的分工是用约 6500 道是否问隔离每属性的敏感性与肯定偏置，条件受控；自由描述的分工是用统一开放提示让模型 unconstrained 生成，再抽取主张并路由验证，贴近真实部署；搭配原因是模型可能在一范式成功而在另一范式失败，组合意义是把跨范式分歧本身当作诊断信号，而不是把三范式折成一个总分。

为回答跨范式是否可比，论文把自由排序用 100 减幻觉率使高为好，再算秩标准差。结果是领先者稳定而中部重排，这意味着选模型必须看目标格式，高范式敏感指数指向范式特异失败而非统一能力缺口。

下表把证据可靠性审计整理为五列宽表，比较问题是门控区内工具与裁判是否可信，公平条件是同一专家审计集与固定门限，指标方向是一致率越高且提取 F1 越高越好。表后解释是硬工具在确定区可靠而模糊区已 abstain，软裁判与专家一致 79.6% 且提取精确率 93.0%，因此后文的模型差异可归因到感知而非完全归因到证据噪声，但覆盖率必须同读。

| 证据层 | 验证工具或裁判 | 审计样本数 | 一致率或 F1 | 门控与说明 |
| --- | --- | --- | --- | --- |
| L1 人声 | Silero 语音检测 | 90 | 83/90 = 92.2% | 确定区，模糊低比区判未定 |
| L3 调性 | essentia 调估计 | 67 | 79.1% | 置信门限 0.8 以上，大调 88.9% |
| L4 风格与 L5 情感 | DeepSeek V3 语义裁判 | 108 | 86/108 = 79.6% | Kappa 0.739，音频接地复核一致 |
| 全部自由层 | 主张抽取 | 100 | 93.0% / 80.0% / 0.860 | 精确率/召回率/F1，低特异判未定 |

该表的主要收益是给出可复述的门限与审计基线，具体代价是 L2 一致率仅 72.6% 且半拍倍拍歧义仍可见，L5 规则抽取召回在困难子集仅 63.5%，需用大模型辅助抽取把召回提到 94.1% 才验证幻觉率仅变约 1 个百分点。未胜出项是速度工具并非完美，论文因此把阈值附近判未定而不是强行记幻觉。

### 干预收益能否跨范式迁移？

跨范式边界是本文最强的反证。固定 100 片子集上，ADD-M v1 把辨别准确率提 1.0 至 4.7 个百分点，却把 4 模型的自由幻觉率推高 1.3 至 5.9 个百分点。TPA 只把 Audio-Flamingo-3 的自由幻觉率降 0.8 个百分点，对另 3 模型分别推高 5.7、7.5 与 10.5 个百分点。结构化迁移也模型特异：Qwen2-Audio 在 ADD-M 下提 1.9 个百分点、在 TPA 下提 11.8 个百分点且速度与调准确率大幅上升，而另 3 模型在两种方法下均降 1.5 至 8.8 个百分点。SALMONN 出现符号反转，探针获益但另两范式恶化，说明基线偏置不是跨范式预测器。

下表把跨范式符号反转整理为五列宽表，比较问题是探针收益是否等于开放生成更安全，公平条件是同一 100 片种子子集与完整抽取验证管线，指标方向是自由幻觉率降为好、结构化准确率升为好。表后解释是探针偏置修正不足以证明开放生成更安全，干预选择必须同时绑定模型画像与目标生成范式，单范式评估会漏掉方向甚至符号。

| 模型与基线偏置 | 辨别准确率变化 | 自由幻觉率变化 | 结构化准确率变化 | 结论 |
| --- | --- | --- | --- | --- |
| 跨范式相关 | Disc.-Free 0.17 | Free-Struct. 0.18 | Disc.-Struct. 0.80 | 辨别与自由几乎无关 |

该表的主要收益是让多范式仪表盘从口号变为操作必需：ADD-M 与 TPA 是有用的干预探针而非通用解法。未评测边界是长结构、密集复调与空间声场等更丰富现象需要新的可审计证据，当前门控只覆盖人声乐器、速度、调、流派与情绪等可规模验证的属性。

### 肯定偏置、生成格式与感知极限各解释了多少？

论文把归因写成收敛诊断而非严格因果。肯定偏置总量跨度从 20.2% 到 99.0%，但不简单跟踪总幻觉率。人声肯定偏置跨度 26.4% 到 91.2%，而人声幻觉率只在窄带内，说明偏置 alone 不能解释普遍人声幻觉。分层看，Audio-Flamingo-3 的 L2 速度偏置高于其总量，Qwen2-Audio 的 L1 乐器偏置高于其总量，说明偏置在选定层有选择性贡献。

生成格式解释人声分歧。结构化人声准确率高而自由人声幻觉率高，指标构造不同不能直接相减，论文用 100 片对照：去掉提示中所有属性 hint 后，主张加权人声幻觉率仅从 50.2% 变到 52.3%，覆盖率从 70.8% 变到 69.3%，而结构化准确率仍 78.5%。因此显式提到人声不是主因，问题与开放生成格式相关，但论文表述为格式关联而非因果认定。词频负对照也支持谨慎：自由输出的人声词频低于字幕，结构化因反复问人声而更高，词频受格式与冗长混杂，不能当作幻觉机制。

层特异感知极限主导 L3。结构化调准确率把强弱模型分开，Qwen2.5-Omni 68.6% 与 Audio-Flamingo-3 65.3% 对 Qwen2-Audio 3.0%、SALMONN 5.1%、GPT-4o 8.1%，MiMo-V2-Omni 对 334 道调问题返回空而记 0.0%，提示调性指令覆盖缺失。GPT-4o 呈另一失败形：调肯定偏置仅 1.9%、探针接近随机 48.9%，自由调幻觉却高达 87.6%，说明不是爱肯定而是调性接地缺失。综合起来，偏置影响选定 L1 与 L2 错误，格式暴露人声幻觉，调性揭示架构特异极限，因此不应期待单一干预修好所有层。

下表把干预在辨别式探针上的配对效应整理为五列，比较问题是诊断画像能否预测干预行为，公平条件是完全相同提示与统一首词是否归一，指标方向是准确率增为好、肯定偏置减为好。表后解释是固定对比修正最一致而自适应门控降偏置更猛但准确率几乎不动，且门控率揭示相同偏置下内部状态频率不同，TPA 则模型依赖。未胜出项是 Qwen2.5-Omni 在 v2 与 TPA 下变差，说明低偏置模型不宜套用为高偏置设计的强修正。

| 模型 | 干预变体 | 准确率变化 | 肯定偏置变化 | 门控率 |
| --- | --- | --- | --- | --- |
| SALMONN | ADD-M v1 固定修正 | +4.7 pp | -16.4 pp | - |
| Qwen2-Audio | ADD-M v1 固定修正 | +1.9 pp | -9.2 pp | - |

该表的主要收益是 v1 在 4 模型上均提准确率 1.0 至 4.7 个百分点，高偏置的 SALMONN 获益最大；具体代价是 v2 准确率在 -1.3 至 +0.8 个百分点间徘徊，却把 SALMONN 偏置降 56.6 个百分点而把低偏置的 Qwen2.5-Omni 推高 5.0 个百分点。门控率补充了偏置之外的信息：SALMONN 与 Qwen2-Audio 偏置都高但门控率 63.6% 对 47.0%，Audio-Flamingo-3 门控仅 18.7% 却仍有人声幻觉，进一步分离词元音频敏感与输出幻觉。

### 哪些结论不能从当前证据推出？

第一，幻觉率是保守下界而非穷举检出。因为矛盾规则把欠特异主张判未定，覆盖率必须同读，泛泛回答不会显得可靠也不会被记为正确。第二，硬软汇总不可直接比能力，因为验证特异性不同，论文用主张加权汇总组内行为但明确不做跨组能力排序。第三，归因是相关与收敛证据而非形式因果识别，肯定偏置、生成格式与感知极限是互补解释信号，不能写成谁导致谁。

第四，干预结论限于诊断性探针。ADD-M 与 TPA 是免训练的干预探针，混合迁移结果说明部署格式特异验证必要，不能把探针增益当作通用幻觉缓解。第五，证据工具有已知盲区：语音检测在低比区对微弱背景人声与合唱最弱，速度存在半拍倍拍歧义与阈值附近不稳定，调性存在纯四纯五与关系大小调歧义，论文用模糊门与未定吸收这些区域，但残余误差仍在专家审计中可见。第六，资源状态是正文开源声明的唯一依据，本次未发现来源绑定且完成验证的资源，因此不得声称代码模型或数据已公开，复现需按论文附录的端点与版本自行搭建。

### 要复述与复现，先固定哪些步骤？

先固定数据与划分。MusicCaps 按属性覆盖启发式抽 500 片，过滤后保留 440 可用片用于自由与结构化，IRMAS 测试集用于乐器闭集验证。辨别式探针每模型约 6500 问，自由与结构化用 440 片并经证据过滤确定任务分母，跨范式干预用种子 42 的固定 100 片子集，生成模式对照用 100 片 3 条件比较。

再固定提示与归一。辨别用固定是否提示并做首词归一，不可解析输出记错；自由用跨模型共享的统一提示并做确定性主张抽取与证据路由；结构化用确定性逐属性提示并报告任务特异分母。干预用完全相同提示的配对比较，ADD-M 的消融按架构区分纯文本与音频置零，v1 强度 1.0，v2 用熵与依赖双门，TPA 用四道感知探针。

然后固定证据门限与统计。速度映射慢小于 80、中 80 至 120、快大于 120，模糊区 75 至 85 与 115 至 125 判未定；调置信门 0.8；人声浊音比用固定阈值并把模糊低比区判未定；软层用同一裁判部署并映射蕴含矛盾不确定到三值。

主要诊断结果报告 95% 区间，探针自由调与逐样本结构化均值用 10000 次百分位自助，其余二值结构化用 Wald 区间。硬件按原文记录双卡与库版本，API 模型记录访问方式，推理用贪心解码。先跑通三范式基线与覆盖率，再跑配对干预并在同一目标格式内验证，避免用探针增益外推自由生成。

### 何时值得尝试这种诊断，收束判断是什么？

当你的任务是开放音乐描述而参考字幕天然不完备时，值得尝试矛盾判定加未定机制，它能避免把省略当幻觉，同时用覆盖率暴露可判边界。当你要在多个音频语言模型间选型且部署格式已定为开放生成或逐属性问答时，值得跑三范式仪表盘，因为本文显示辨别与自由相关仅 0.17，单看探针会误选。当你考虑免训练修正高肯定偏置模型时，可先试固定对比修正并用配对探针验证，但必须在目标格式重测，因为探针提升 1 至 5 个百分点可能伴随自由幻觉率上升。

收束判断有 3 条。第一，音乐幻觉是分层接地失败，人声是跨 9 模型的共享弱点，调性是架构分化的主轴，Audio-Flamingo-3 稳定领先但其下大幅重排。第二，偏置、格式与感知极限是互补而非互斥的解释，词频等表层计数是负对照，真正的证据来自主张级矛盾率与受控提示比较。第三，缓解必须分范式验证，ADD-M 与 TPA 的方向常随模型与范式改变，部署前需在部署格式内复测。以上均按原文证据表述，未验证的因果与未测量的延迟成本不做承诺。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.20195)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-18/)
