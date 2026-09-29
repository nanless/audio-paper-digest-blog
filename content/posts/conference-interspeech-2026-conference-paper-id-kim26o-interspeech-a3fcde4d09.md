---
title: "AdaTT: Text-Guided Instrument Timbre Transfer with Target-Adaptive Structural Control"
date: 2026-09-27
draft: false
description: "针对源乐器表情细节与目标音色冲突导致的音色模糊，AdaTT 在冻结的 Stable Audio Open 加 ControlNet 上用文本引导的帧级缩放调节 f0 与 RMS 控制，并在半自动构造的 1321 对迁移数据上微调，以 F1MIDI 0.302 的轻微代价实现 CLAP 0.490 与主观音色保真度 3.582。"
tags: ["Adapter", "扩散模型", "音乐", "音乐生成"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:kim26o_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/kim26o_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/kim26o_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2b798a4cb85011668e19b2673f90a649214044a79bf98cefdf86ab8e517ded31"
paper_digest_api_reader_plan_sha256: "936ee50804663652cd370f496b141359321306d1b793845f115f09abc77cbfd2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b998d84d684d8a65af3056cf2a0f6aea844631ab1f95da08a0001e742d021d37"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d14131fb914dba51a7311f0f957ff205042517f123c0050a816f3623ea5a5ed9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "457078b967238d4c834c3ee76da635347cedf1771d0be1f05ad8fe5ba8d30fee"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "96f8884e1014828c7ec5e01a95f08f20b053325430c4d05c1dbfe3a73397c904"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adapter","label":"Adapter"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "Adapter"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 留住旋律、换掉乐器：AdaTT 按目标乐器调节音高与响度控制

> 英文题目：*AdaTT: Text-Guided Instrument Timbre Transfer with Target-Adaptive Structural Control*

> 会议身份：`conference:interspeech:2026:conference-paper-id:kim26o_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/kim26o_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/kim26o_interspeech.pdf)

标签：#Adapter #扩散模型 #音乐 #音乐生成

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Dabin Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Junwon Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Juhan Nam：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

乐器音色迁移需将单声部演奏音频的乐器身份转为目标乐器，同时保留旋律节奏等乐谱级内容，难点在于基频与响度曲线中混杂着小提琴式颤音等乐器特异的表情细节，强加给目标乐器会造成音色模糊与不自然。所提目标自适应音色迁移 AdaTT 以冻结的 Stable Audio Open 为主干，先经基频与均方根响度双路控制的 ControlNet 注入源结构，再由文本引导的缩放预测器在输入端独立调节两路强度并在输出端调节整体强度，最后用合成的跨乐器配对数据微调缩放模块。相对单特征 ControlNet 与仅调输出强度的 SmartControl，关键差异是在输入端解耦异构控制并按目标乐器语义逐帧放大或抑制，从而保留乐谱内容又适配目标表达丰富性。在 2400 个文本音频对的迁移评测中 AdaTT 的 CLAP 得分为 0.490，追平主干上限并高于 ControlNet 的 0.463。结论限于 12 秒单声部、按音高聚类的 13 种乐器内迁移，未验证复调与混响等空间线索保留。该结论的适用边界受限于单声部合成数据，复调场景与真实混响条件尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，什么必须保留？

这篇论文研究的输入是三部分：一段单声部源演奏音频，一句指明目标乐器的文本提示，以及从源音频提取的两条时间结构曲线。目标输出是一段 12 秒的新音频，它听起来是目标乐器在演奏，同时保留源曲的旋律与节奏。必须保留的是乐谱级内容，也就是音符高低与时值骨架；必须更换的是乐器身份，包括稳态谐波形态与随时间变化的表情细节。

论文特别强调，颤音与起振不是中性装饰，例如小提琴的渐强起振与以音高为主的颤音本身就是小提琴身份的一部分，正如语音中韵律轮廓构成说话人身份的一部分。初学者容易误以为保留越多源细节越好，但论文的起点恰好相反：不加区分地保留会造成音色模糊。举例来说，若把小提琴的音高颤音硬压到长笛上，而长笛自然的颤音是以响度为主，就会既不像小提琴也不像长笛。

**音色迁移 × 乐谱级内容：** 音色迁移负责把演奏音频的乐器身份换成目标乐器，乐谱级内容负责界定必须保留的旋律与节奏骨架，二者搭配的原因是若把颤音、起振等乐器特有表情也原样保留就会污染目标音色，组合意义在于把时间结构拆成可保留的乐谱级部分和需适配的表情细节，AdaTT 只对后者做目标自适应缩放。

因此后文所有设计都围绕一个可复述的动作展开：先把时间结构看成乐谱级内容与乐器特有表情的混合，再按目标乐器的发声机制决定哪一路结构该增强、哪一路该减弱，而不是直接丢弃表情 richness。

### 已有两条路线为什么各有短板？

论文把基于文本到音乐先验的方法归为两类。第一类是基于 ControlNet 微调的显式条件路线，它把源音频提取的结构信号通过可训练适配器注入冻结的生成主干，以重建原音频为优化目标。优点是结构稳定，能精确跟随源旋律；代价是在零样本换乐器时也会刚性复制源的细粒度表情，把生成结果拉离目标音色的自然流形。论文指出，为缓解这种刚性，有工作退回到更粗的 12 平均律旋律序列，但代价是丢失滑音与演奏动态等丰富性。

第二类是推理时编辑路线，利用注意力或噪声注入等隐式结构引导，不做显式条件训练。优点是对目标音色更友好，不那么僵硬；代价是缺乏显式条件训练，经常出现结构漂移，音符保不住。论文还提到，从头训练的解耦与合成方法同样试图分离音色与音高，但在本任务的文本引导与高保真合成要求下，作者选择站在冻结的 Stable Audio Open 先验之上做适配。

理解这个对照很重要：后文 AdaTT 并不是第三种生成器，而是给第一类路线加一个目标自适应的阀门，让它在保持结构稳定的同时不再盲目复制。

### 小提琴到长笛的冲突具体长什么样？

论文用小提琴到长笛作为贯穿例子，因为两者的颤音机制几乎相反。小提琴靠手指揉弦改变弦长，主观听感是音高在抖；长笛靠气息压力改变射流偏转，主观听感是谐波幅度在抖。如果用标准 ControlNet 把小提琴的音高抖动曲线原样作为条件去生成长笛，模型会被迫在长笛音色上重现不属于长笛的音高抖动，结果就是音色含混与不自然伪影。论文把这个问题表述为异构结构控制的相对强度没有按目标调节。

所谓异构，是指基频与均方根响度在声学作用上不同，不能用同一个全局强度一刀切。
论文图 1 把这个矛盾画成了三行对照，值得初学者逐行读。首行是源小提琴，中间是标准 ControlNet 的长笛尝试，末行是本方法的结果，中间两列分别给出 f0 与 RMS 曲线的虚线框标注。

> **看图路径：** 1. 先看左侧三行频谱图，确认源、ControlNet 与本方法同为小提琴到长笛的同一片段；2. 再看中间两列 f0 与 RMS 曲线虚线框，比较复制细节与衰减放大的标注差异；3. 最后看右侧音色保真表情图标与底部小提琴音高主导、长笛响度主导的文字说明

[![原论文 Figure 1：Visual comparison of Violin-to-Flute timbre transfer.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2c7dafeab79b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2c7dafeab79b/figure-1.png)

*论文图 1。原论文 Figure 1：“Visual comparison of Violin-to-Flute timbre transfer.”。*

从像素可见，首行源的 f0 框内有明显起伏而 RMS 框相对平缓，对应音高主导；中间行 ControlNet 两列都标注为复制细节，右侧音色图标显示为困惑表情并同时出现小提琴与长笛问号；末行 f0 框标注为衰减细节而 RMS 框标注为放大细节，右侧变为微笑的长笛图标。底部文字进一步把机制写清：小提琴是手指摇动调制音高，长笛是气息压力调制谐波幅度。这个图的学习价值在于，它把抽象的音色模糊变成了可执行的操作：转长笛时应压低音高抖动、抬高响度抖动，而不是等比保留。

### AdaTT 全景：一个样本如何走完输入到输出？

沿着一个样本走一遍有助于记住全景。输入是一段源音频与一句目标乐器文本，例如指明小提琴的独奏文本。系统先从源音频提取两条曲线：用 CREPE 估计基频轮廓，直接计算均方根响度轮廓。然后把两条连续曲线分别量化成分档，查可学习嵌入表，再过 1 维卷积得到潜控制特征。两个特征经前馈卷积网络融合成统一结构信号，通过零初始化线性层加到噪声潜变量上，驱动冻结的 Stable Audio Open 扩散主干去噪，最终解码为目标音色音频。

关键在于，融合之前与注入之后各有一组轻量缩放模块。第一组在融合前按文本分别缩放 f0 与 RMS 两路，第二组在注入后按层按帧调节总体控制强度。两组模块都是新训练的，其余主干与已训好的 ControlNet 适配器保持冻结。论文把无缩放的基座称为 SAO-ControlNet，加入两组缩放后才称为 AdaTT。
下图展示了从源音频、文本提示到生成音频的完整数据流，粉色表示可训练，蓝色表示冻结。

> **看图路径：** 1. 从顶部源音频出发，沿 f0 估计器与 RMS 轮廓两条支路看到离散化与嵌入卷积；2. 找到中部 TG-CSPs 粉色块中两路乘法与相加汇合为结构控制信号的位置；3. 再看下部冻结的 Stable Audio Open 主干与右侧 ControlNet 适配器之间 CSPs 的回路

[![原论文 Figure 2：Overall architecture of AdaTT, integrating two sets of lightweight modules into frozen…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2c7dafeab79b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2c7dafeab79b/figure-2.png)

*论文图 2。原论文 Figure 2：“Overall architecture of AdaTT, integrating two sets of lightweight modules into frozen SAO-ControlNet.”。*

读图时注意三处汇合：顶部两条结构支路在中部相加为结构控制信号，中部文本提示同时送入两组缩放模块，下部噪声与结构信号相加后进入 ControlNet 适配器，再经层级缩放回注主干。这个全景说明 AdaTT 没有重训生成器，它只学习何时听源结构的哪一路、听多重。

### 两组缩放模块各自算什么，为什么要分开？

先说白话。控制尺度预测器可以理解为每层的总音量旋钮，它看当前主干特征与 ControlNet 输出，输出 0 到 1 之间的帧级系数，决定该帧注入多少结构信息。它的设计借鉴 SmartControl，用两层卷积加 SiLU 激活、零初始化卷积加 Sigmoid 实现，并把偏置初始化为正 3，使初始系数约 0.95，训练起点接近完整控制，再慢慢学会放松。文本引导的控制尺度预测器可以理解为混音台上的两路推子，它在融合前对 f0 与 RMS 分别预测 0 到 2 之间的系数，1 为保持原强度，大于 1 为放大，小于 1 为衰减。它的输入是各路控制特征与 T5 文本嵌入在时间维广播后的拼接，经过两层 1 维卷积与零初始化卷积实现，零初始化保证训练起点为 1，不破坏原控制能量。

**ControlNet × Stable Audio Open：** Stable Audio Open 分工是提供冻结的文本到音乐扩散先验与高质量合成能力，ControlNet 分工是把源音频提取的 f0 与 RMS 结构信号注入冻结主干，搭配理由是只训练适配器分支就能获得强结构约束而不破坏预训练生成流形，组合意义是形成 SAO-ControlNet 基座，AdaTT 再在其输入与输出级加入可调缩放来缓解刚性复制。

论文强调分开的理由是异构信号在 ControlNet 隐空间已深度纠缠，只调输出总量无法改变两路相对比例。要转长笛就压 f0 抬 RMS，要转小提琴则反向操作，这种相对平衡必须在融合前完成。

**控制尺度预测器 × 文本引导的：** 控制尺度预测器分工是对每层 ControlNet 输出做整体帧级强度调节，文本引导的分工是在 ControlNet 输入端对 f0 与 RMS 两路异构特征分别预测放大或衰减系数，搭配原因是两路信号在 ControlNet 隐空间已纠缠，仅调输出无法解耦音高与响度各自的贡献，组合意义是先按目标乐器平衡两路相对权重，再调节总体注入强度。

实现上先做路间平衡再做层间总量调节，二者都是帧级的，因此可以在一个长音内前半保持旋律、后半放松颤音约束。

**基频 × 均方根响度：** 基频分工是刻画音高随时间的形状，包含滑音与以音高为主的颤音，均方根响度分工是刻画响度包络随时间的形状，包含以响度为主的颤音与起振动态，搭配原因是单一声学维度无法区分小提琴式与长笛式颤音，组合意义是把二者离散化、嵌入并融合成统一结构信号，让模型能分别放大或抑制其中一路以匹配目标乐器发声机制。

复述时记住顺序：提取、量化嵌入、文本引导的路间缩放、融合、零线性注入、层级总量缩放、主干去噪。

### 没有真实配对时，如何造出可训练的迁移数据？

训练 AdaTT 需要源与目标音频对，它们乐谱内容一致但表情细节各属自家乐器，真实演奏中几乎不可能请乐手严格复刻。因此论文用半自动管线先造伪真值，再用它微调缩放模块。第一步按平均 f0 把 13 种乐器分成高、中、低 3 个音高簇，避免跨越过大音域硬转。每乐器取 40 个样本，只在簇内组跨乐器对。

第二步做 2 阶段网格搜索推理：先固定全局强度为 1，在 f0 与 RMS 缩放组合中搜索，约束两者之和为 2 以保持控制能量与默认配置可比，按 Chroma 分数排序取前三请专家听，选出结构与音色平衡最优的路间配比；再固定该配比，在全局强度中搜索，过滤掉 Chroma 低于 0.7 的候选，选感知保真最高者作为伪真值。专家会剔除旋律损坏、源乐器泄漏或不自然伪影的样本。最终得到 1321 对高质量迁移对，约占 ControlNet 训练集的 10%，对应 4.40 小时。

训练本身分 2 个阶段：先训 SAO-ControlNet 做乐器重建，再冻结它只训 AdaTT 的缩放模块，用 AdamW 与均方误差损失，第一阶段学习率经暖机后从 10 的负 4 次方衰减到 10 的负 5 次方，第二阶段固定为 10 的负 5 次方。文本提示用固定模板指明单声部独奏与乐器家族，并做同义词增广。这一节的要点是监督来源：缩放模块学到的是专家筛选后的伪真值中何时放大、压低哪一路，而不是人工逐帧标注。

### 数据、划分与指标如何对应到待回答的问题？

数据来自 URMP 与 Solos 2 个数据集，共 13 种乐器，全部重采样到 44.1 千赫并切成 12 秒片段，用 CLAP 与非音乐文本查询的余弦相似度过滤掉掌声与说话等非音乐段。训练集约 32.8 小时，含重建集与上节的迁移集；评测集是 2400 个文本音频对，由每种乐器 100 个留出样本与其音高簇内其他乐器配对而成。指标分 4 类：CLAP 分数衡量文本音频对齐即音色像不像，越高越好；Chroma 分数用 25 音分分辨率的色谱余弦衡量细粒度结构一致性，越高越好。

F1MIDI 分数用 YourMT3 转录源与生成音频后对比衡量乐谱级保留，越高越好；KAD 基于 MERT 嵌入衡量整体音频质量与真实分布距离，越低越好。主观评测请 22 名参与者对 20 个条目按 5 分制打分，维度包括音色保真度、音色自然度、结构保真度与总体质量。实现上生成长度固定为 256 乘 64 潜变量以控制计算。

**CLAP 分数 × F1MIDI 分数：** CLAP 分数分工是用文本与音频对齐度衡量是否听起来像目标乐器，F1MIDI 分数分工是用源与生成音频各自转录的 MIDI 对比衡量乐谱级内容是否保留，搭配原因是单看音色会忽略跑调，单看音符会忽略音色不像，组合意义是要求方法同时在音色保真与结构保留上报告，AdaTT 的取舍也正是用这两类指标共同判定。

复现时必须对齐三处：同一音高簇内配对、同一 12 秒与 44.1 千赫预处理、同一指标方向，否则 CLAP 上升可能是文本模板差异，F1 下降可能是转录器而非方法问题。

### 主结果：音色提升的收益与乐谱保留的代价是什么？

要回答的核心问题是，在与 ControlNet 相同的显式条件设定下，目标自适应缩放是否在不丢旋律的前提下让声音更像目标乐器。比较条件是相同的冻结 SAO 主干、相同的 f0 加 RMS 输入与相同的文本提示，区别仅在于是否加入层级缩放与文本引导的路间缩放。指标方向如上节所述，CLAP 与主观音色越高越好，F1MIDI 越高越好，KAD 越低越好。下表整理论文正文连续句中直接报告的 AdaTT 关键数字，以及可比的 SAO 上界说明，数值与单位保留原文写法。

| 系统 | CLAP | F1MIDI | KAD | 主观 TIM |
| --- | --- | --- | --- | --- |
| SAO 文本上界说明 | 0.490 | — | — | — |
| AdaTT | 0.490 | 0.302 | 0.495 | 3.582 |

表前比较问题已经提出：同等结构输入下谁更像目标乐器，谁更保旋律。表中 CLAP 0.490 表示达到 SAO 主干的客观上界，F1MIDI 0.302 表示相对 ControlNet 略降，KAD 0.495 表示在 ControlNet 类基线中最低，主观 TIM 3.582 表示听感上最像目标。表后解释是，收益来自按目标乐器重平衡两路控制，代价是自适应修饰起振与滑音等细节会让转录器打出略低的 F1，但人耳反而给出最高的结构保真度 4.148 与总体质量 3.307。论文同时报告 AdaTT 的主观自然度 3.484 为最高，而 SmartControl 仅调输出总量，在 KAD 上甚至略差于 ControlNet，说明不解耦异构控制是不够的。

未胜出的一项也要记住：客观 F1 上 ControlNet 仍略高，若任务要求刚性跟随源颤音，AdaTT 的感知优先策略反而不占优。
下面三行频谱对照直观展示了这种取舍，每行左侧为源，右侧三列为不同方法的生成。

> **看图路径：** 1. 按行确认三个迁移方向：双簧管到小提琴、萨克斯到巴松、低音提琴到长号；2. 按列比较源、ControlNet、SmartControl 与 Ours 四列频谱纹理的连续性；3. 聚焦每行白色虚线框与虚线箭头，观察本方法在框选区域新增或清理的谐波结构

[![原论文 Figure 3：Visual comparison of timbre transfer.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2c7dafeab79b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2c7dafeab79b/figure-3.png)

*论文图 3。原论文 Figure 3：“Visual comparison of timbre transfer.”。*

从像素看，首行双簧管到小提琴的虚线框内本方法补出了小提琴特有的颤音谐波，次行萨克斯到巴松框内压住了高频颤音伪影，末行低音提琴到长号框内出现了更清晰的长号起振瞬态。虚线箭头从 ControlNet 指向本方法，表明作者强调的是相对基线的修正位置，而非全曲重写。

### 控制粒度与推理时编辑对照说明了什么？

论文先做了一个预备研究：把 f0 与 RMS 的分档数调大，Chroma 结构一致性上升，但 CLAP 音色准确度下降。这说明更细的控制带来更强的源表情复制，对换音色是有害的。作者因此选择 144 档 f0 与 32 档 RMS 作为折中，后续实验都固定在此 operating 点上。这个对照回答了为什么不直接用最细控制：细粒度等于更强的源泄漏。其次与推理时编辑范式对比，MusicMagus 与 ZETA 即使在重建集上微调，CLAP 与 F1 仍低于 AdaTT，且对扩散反演步数等超参数敏感，要么音色失真要么乐谱崩塌。

论文报告微调后最优的 MusicMagus 在 KAD 上仍为 1.408，远高于 AdaTT 的 0.495，说明缺乏显式条件训练的隐式引导难以同时保住结构与音质。这个反证支持了方法选择：结构稳定性应来自 ControlNet 微调，音色适配应来自轻量目标自适应缩放，而不是在推理时临时调噪声水平。

### 哪些边界没有被测，哪些结论不能推广？

论文明确报告的局限有两处：仅限单声部音频，不处理复调；不保留原空间线索如混响。这意味着把方法直接用于乐队混音或带厅堂感的录音时，空间特征可能被改写或丢失，而原文没有测量这部分退化。其次，伪真值依赖专家筛选与 Chroma 阈值 0.7，主观评测仅 22 人 20 条目，结论是有限样本下的感知支持，不能读作对所有乐器对都成立。训练与推理成本方面，原文只给出轮数、批量与学习率安排，没有报告参数量、显存、推理步数与延迟，因此不能承诺实时性或低成本。

总体趋势也不等于每组都成立：按音高簇配对的设计本身就回避了跨大音域迁移，跨簇效果待验证。把相关性当因果也要避免：CLAP 高与缩放模块相关，但若文本模板或转录器改变，数字可能移动，需要按原协议复测。

### 要复现，先准备什么，按什么顺序跑？

复现的第一步是数据准备：合并 URMP 与 Solos，按 44.1 千赫重采样、切 12 秒、用 CLAP 过滤非音乐段，并按模板生成目标乐器文本。第二步训 SAO-ControlNet 做重建，冻结 SAO 主干，只训适配器与 f0、RMS 嵌入融合部分，配置为 1200 轮、批量 384、暖机 5 轮后从 10 的负 4 次方衰减到 10 的负 5 次方。第三步按音高簇组对并跑 2 阶段网格搜索造 1321 对伪真值，路间搜索时保持两者之和为 2，全局搜索时过滤 Chroma 低于 0.7，再经专家听辨剔除坏样本。第四步冻结 SAO-ControlNet，只训两组缩放模块 400 轮、批量 64、学习率固定 10 的负 5 次方。

下表把关键训练与数据规模整理为可核对的配置，数字与单位与原文连续句一致。

| 阶段 | 训练轮数 | 批量大小 | 学习率安排 | 数据规模 |
| --- | --- | --- | --- | --- |
| SAO-ControlNet 重建 | 1200 epochs | 384 | 10−4 到 10−5，5 轮暖机 | 32.8 小时训练集 |
| AdaTT 缩放微调 | 400 epochs | 64 | 固定 10−5 | 1321 对，4.40 小时 |

表前问题是复现需要哪些不可省略的条件，公平性要求冻结与更新范围与原文一致。表后说明是，若跳过伪真值构造直接用重建数据训缩放，模型学不到该变换或保留什么；若改变 12 秒长度或 44.1 千赫，潜变量形状与 f0、RMS 帧率都会错位。

关于可用性，本次收到的证据中资源状态为 NONE，未发现完成 HTTPS 验证的开源声明，因此不得声称代码、模型或数据已公开，复现应按论文文字与超参数从头实现，试听页链接在本次任务中不作为可达性依据。

### 何时值得尝试 AdaTT，何时不必？

当任务是单声部乐器换音色，且源表情与目标发声机制明显不同时，AdaTT 值得尝试，例如弦乐到管乐、双簧到铜管这类颤音与起振差异大的方向。它的价值在于用文本就能按帧调节两路结构的相对权重，保留旋律骨架的同时补上目标乐器应有的细节，而不是退回粗粒度旋律丢失表情。当任务要求逐帧刚性复刻源颤音，或输入是复调与强混响录音时，则不必硬套，因为前者与感知自然度目标冲突，后者超出原文验证范围。

动手前先复现 144 档 f0 与 32 档 RMS 的折中点，再验证 CLAP、F1MIDI、KAD 与小规模人听是否同向变化；若只看单一指标，很容易把转录器误差或文本模板差异误读为方法改进。记住论文的中心判断：音色保真不是保留得越多越好，而是按目标自适应地决定听哪一路、听多重。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
