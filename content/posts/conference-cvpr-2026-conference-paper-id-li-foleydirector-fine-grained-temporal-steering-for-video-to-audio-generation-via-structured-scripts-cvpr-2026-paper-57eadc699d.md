---
title: "FoleyDirector: Fine-Grained Temporal Steering for Video-to-Audio Generation via Structured Scripts"
date: 2026-09-13
draft: false
description: "针对视频生音频中多事件时间不可控与画面线索不足的问题，FoleyDirector 用 1 秒一段的结构化时间脚本加适配器做细粒度时间控制，在 DirectorBench 上把总体 F1 从 0.2451 提升到 0.4819，代价是需要逐段脚本标注与双路推理。"
tags: ["基准测试", "数据集", "注意力机制", "音视频", "视频到声音生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3213de61da154990913f4d528198bc17010f0c1a681dce8fa3453841b7d54bbc"
paper_digest_api_reader_plan_sha256: "208578875df0c8084f2f03b16516ddd7642a6e2149e587183b717a4e2ee58b63"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c0e31fbdb3ad85810cc57ed595e47bbc13ac6944f9069e465b01ffab459f168c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "62394cc88c291c3d8558cf180251c5e5c6ee88dbb0117b585eb96c1de7da9209"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "62a22cf2e38e3561b29d4c395e12113bc89379934ac9bc9ae3db6d16492a035d"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5d3446503a3c5a2801eebc6fe310b5cc7d761f209d66fab47d66ca9a489fb090"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "注意力机制"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 当画面给不出声音线索时，导演脚本如何逐秒指挥视频生音频

> 英文题目：*FoleyDirector: Fine-Grained Temporal Steering for Video-to-Audio Generation via Structured Scripts*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper.pdf)

标签：#基准测试 #数据集 #注意力机制 #音视频 #视频到声音生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- You Li：机构信息未能从会议 PDF 纯文本可靠映射
- Dewei Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Fu Li：机构信息未能从会议 PDF 纯文本可靠映射
- Dongliang He：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Yang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

视频到音频生成以无声视频与全局文本为输入、输出语义一致且时间对齐的音频，难点在于全局描述无法指定多事件何时发声，且小目标遮挡与画外音缺乏视觉线索易被视觉主导而失控。FoleyDirector先将长视频切分为细粒度时段并为每段生成一句短描述构成结构化时序脚本，为每秒提供补充时序线索。接着脚本引导时序融合模块以新增时序脚本注意力与交错旋转位置编码将脚本特征交错注入预训练MMAudio-medium音频流，原联合注意力保持不变以保护音质。最后双帧声音合成框架并行渲染画内流与画外流再按时序拼接，实现反事实组合控制，关闭模块即可回退标准视频到音频模式。相对已有方法，其关键差异是不再依赖单一全局文本而引入可开关的逐段脚本控制，在保留基线生成能力的同时增强时序可控性。在DirectorBench基准下，Ours的Overall F1分数为0.4819，高于Hunyuan-Foley的Overall F1分数0.2451。该结论适用边界受限于8秒左右短视频与1秒脚本粒度训练，对更长时序与密集重叠事件尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，哪些信息必须保留？

这篇论文研究的是视频生音频任务。输入是一段无声视频和一段文字描述，输出是一段与视频在语义和时间上都对齐的音频。举例来说，输入是汽车驶近的 3 秒画面加一句汽车鸣笛，输出就应该是对应时刻有鸣笛声的波形。必须保留的信息有 3 类。第一是语义一致，画面里是火车就不能生成猫叫。

第二是时间同步，喇叭声要出现在按喇叭的那几秒，不能全段铺满。第三是音质不塌，控制时间不能把声音搞糊。初学者容易把这个任务理解成给模型一句话就能出好声音。论文要解决的恰恰是长描述里多个事件挤在一起时，模型只拿到粗粒度语义，不知道每个声音在第几秒出现，也不知道哪几秒该静音。更难的是画面线索不足的情况，比如声音在画外、目标很小、被遮挡，模型只看画面就猜不到何时出声。

论文的目标就是在保住基座模型音质的前提下，让用户能像拟音导演一样指定每一段出什么声。这需要一套能被模型读懂的逐段表示，一套不破坏原模型的接入方式，以及一套能同时画内画外渲染的推理结构。后续各节就按这个依赖展开，先讲路线差异，再走完一个样本的全流程，最后讲数据、评测与代价。

### 同输入同目标的路线各解决了什么，还缺什么？

先看文字生音频路线。它的输入是文字，目标是高质量音频，方法包括自回归离散建模与扩散建模，近年还有结合变换器与流匹配的混合设计。它的长处是文字控制灵活，短处是看不到画面，做不到与视频动作逐帧同步。再看视频生音频路线。早期工作用预训练文字生音频骨干加多模态引导，后来引入整流流、潜扩散、跨模态融合与辅助嵌入来加强同步，高帧率视觉特征与自回归结构进一步提升时间精度。

MMAudio 把文本、音频、视频条件放在一起做高质量生成，HunyuanVideo-Foley 与 Kling-Foley 把统一文本视频到音频建模做大，ThinkSound 引入思维链做交互式合成，MultiFoley 强调多模态控制。这些工作在同输入同目标下把音质和粗同步做得越来越好，但论文指出它们共用一个短板。文字是全局描述，只给粗语义，不给逐秒时间表。数据集的标注也短且缺时间标注，模型学不到细时间对应。于是遇到多事件组合或反事实要求时，模型会丢事件、混时间，或被强视觉带偏，把文字里与画面矛盾的属性忽略掉。

论文不是在音质上另起炉灶，而是补时间控制这一环。它保留 DiT 基座的生成能力，只加时间脚本条件与融合适配器，再用双路合成处理复杂组合。这一定位决定了后面的实验必须同时回答两个问题，控制是否变强，音质是否没掉。

### 哪三类失败定义了本文要攻的时间控制？

论文把失败归成 3 类，每类对应一种用户操作。第一类是时间控制。用户说 5 到 6 秒要汽车喇叭，其余保持静音。基座模型感知不到具体段，只能整段铺声音或完全不响应。第二类是视觉线索不足。

用户说 2 到 3 秒猫叫、4 到 6 秒人说话，但画面里找不到人。只靠画面就无法触发人声，需要文字补上时间与语义。第 3 类是复杂多事件。用户想要老虎打哈欠后突然发出猫叫并引出人群笑声，画面、反常识音色、画外笑声混在一起。基座模型难以同时渲染。

理解这 3 类就理解了评测为什么要分成时间控制与反事实控制。时间控制测有无与何时，是否在指定段出现、在非指定段静音。反事实控制测与画面矛盾的属性能否被保留，比如狗叫声中的异常组合、与动作不符的声音。
下面这张总览图把 3 类失败摆在一起，读图时先看用户要求的时间区间，再看基座与本方法的频谱差异。

> **看图路径：** 1. 先看三列顶部的视频帧与用户时间要求，确认控制是指定秒出声还是补画外音；2. 再对比中间基座回答与下方绿色 FoleyDirector 回答的承诺差异；3. 最后看底部两行频谱中矩形控制段内外的能量与置信曲线起伏是否只在指定秒抬起

[![原论文 Figure 1：FoleyDirector enables (a) temporal control of sound events, (b) supplemental cues when visual…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b7c45783b081/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b7c45783b081/figure-1.png)

*论文图 1。原论文 Figure 1：“FoleyDirector enables (a) temporal control of sound events, (b) supplemental cues when visual information is insufficient, and (c) robust handling of complex multi-event sound…”。*

从像素看，左列汽车喇叭的控制段内，本方法的频谱能量与绿色置信曲线只在矩形段内抬起，段外保持低平，而基座整段都有能量。中列猫叫加人说话的例子中，人说话段在画面无人的情况下仍被本方法渲染出来，说明补充线索起了作用。右列虎打哈欠加猫叫加人笑的例子中，3 段置信曲线各自在对应矩形内抬升，说明多事件被分段渲染而没有互相淹没。这张图不提供可抄的数值，它的作用是把任务定义可视化，后面的数字表再来量化这种分段准确性。

### 一个样本如何走完输入到输出的主路径？

沿一个 8 秒样本走一遍。输入是 8 秒无声视频、全局文字描述和用户给的 8 段脚本，每段对应 1 秒，比如第 0 秒切菜中响度中等，第 1 秒说话响度大。第一步是表示，把每段脚本用 CLIP 文本编码器编码后做池化，得到每段一个紧凑向量，再沿序列拼成全段表示。缺描述的段用空嵌入占位，保证长度对齐。第二步是组件，基座 MMAudio 的每个块先做原来的视频音频文本联合注意力，保持原生成路径不变，再把音频特征与脚本特征送入新增的时间脚本注意力做融合。

融合前先上采样到同一时间分辨率并交错排布加旋转位置，保证第 i 秒脚本只影响第 i 秒音频。第 3 步是目标，训练时让模型在有脚本条件下重建真实音频，同时随机丢弃脚本以支持无条件引导，推理时用 25 步与引导系数生成。第四步是输出，对复杂场景把音频潜变量复制成画内路与画外路，画内路看真实视频，画外路看可学习的空视觉嵌入，两路各自融合文本与脚本后再按时间段拼回，经解码器与声码器输出波形。

下面是方法总览，左侧是脚本提取，中间是融合模块，右侧是双路合成，读时抓住从左到右的数据流向。

> **看图路径：** 1. 沿左侧蓝色面板从视频加音频到感知识别再到逐段分类，追踪脚本从哪一步变成逐秒文本；2. 看中间紫色面板中视频音频文本先做联合注意力，再经交错编码进新增注意力；3. 看右侧粉色面板中音频潜变量如何复制成上下两路并在输出前按时间拼回

[![原论文 Figure 2：Overview of our method. (a) Extraction pipeline of segment-level STS features.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b7c45783b081/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b7c45783b081/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of our method. (a) Extraction pipeline of segment-level STS features.”。*

从像素看，左侧蓝色面板上方是视频帧经感知识别得到全局标题与事件标签，下方是频谱被切成若干段后做逐段分类，最终形成每段事件加响度的结构化脚本。中间紫色面板显示视频、音频、文本先汇入联合注意力，再与下方 CLIP 池化后的脚本一起经交错编码进入纵向的时间脚本注意力，且该结构重复多个块。右侧粉色面板显示音频潜变量被复制成上下两路，分别叠加真实视频特征与空嵌入后共用融合模块，再按画内画外拼成输出并经 VAE 出音频。这张图把 3 个组件的先后关系讲清，下一节逐个拆开讲计算与取舍。

### 结构化时间脚本如何把长描述变成逐秒可执行的控制？

白话说，结构化时间脚本就是导演分镜表。英文是 Structured Temporal Scripts，简称 STS。它不是一句话讲完整件事，而是把音频按 1 秒切段，每段写一句短控制，说明该秒有什么事件、响度与音色。做法分两步。先感知与识别，用 Qwen-Omni 7B 给整段音频写全局标题，再识别出有哪些声音类型，比如切菜声与说话声。

再做逐段分类，把音频切成 1 秒一段，对每个已识别事件判断本段有无，若有则补段内描述、响度与音色。训练只在视频生音频的 DirectorSound 上做，不用额外文字生音频数据。表示上，每段文本经 CLIP 编码后池化成一个向量，记作对应段的特征，再把所有段沿序列拼接。每段特征复制多份以匹配视频 token 数，保持时间一致并给足语义。若某段无显式描述则填空嵌入。

为什么选 1 秒加池化加复制。论文的考虑是段太长则时间细节少，段太短则标注易错且用户要写更多段。池化是为了降计算与简化对齐，复制是为了让每时刻音频都能查到同秒语义。

**结构化时间脚本 × 视频生音频：** 结构化时间脚本负责把长而含糊的全局描述拆成每 1 秒一段的短控制，说明该秒出现什么声、响度与音色；视频生音频负责看画面听同步生成声音。二者搭配的原因是画面在遮挡、画外音、小目标时给不出何时出声，脚本补上缺失的时间语义，组合后模型既跟画面走，又能在指定秒强制出声或静音。

需要记住的复述点是，STS 把全局控制变成段级全局控制，整个生成被看成多个短段的拼接，既给时间又给语义，且用户可直接手写脚本，不依赖自动标注。

### 融合模块与双路合成如何各司其职又不破坏基座？

白话说，脚本引导时间融合模块就是外挂适配器。英文是 Script-Guided Temporal Fusion Module，简称 SG-TFM。时间脚本注意力是其中的新增注意力层，简称 TSA。交错旋转位置编码是保证时刻对齐的位置方案，简称交错 RoPE。双帧声音合成框架是推理时的双路渲染结构，简称 Bi-Frame。

计算顺序是，在第 l 个 MMAudio 块中，音频、视频、全局文本先走原联合注意力得到更新后的音频特征，结构与参数路径不动。然后把该音频特征与上一块的脚本特征送入 TSA 做统一自注意力，得到融合后的音频特征。TSA 之前先把脚本上采样到音频时间分辨率，再把音频与脚本沿时间交错排布，加 RoPE 后再拆回并下采样到原长，最后做注意力。这样相邻时刻拿到相关位置编号，融合具有时间相干性。

Bi-Frame 在每块把音频潜变量复制成画内与画外 2 流，画内流条件是视频加文本加脚本，画外流把视频换成可学习空嵌入但保留同步特征，2 流并行过块后再按时间段拼回。训练在视频生音频数据上进行却保留了文字生音频侧的脚本可控性，因此推理时可把两路能力组合，实现属性解耦。关闭 SG-TFM 就退回普通视频生音频，这是保留基座能力的关键开关。

**脚本引导时间融合模块 × 时间脚本注意力：** 脚本引导时间融合模块是加在预训练 MMAudio 上的适配器，负责在不改原联合注意力结构的前提下引入新条件；时间脚本注意力是其中新增的一层注意力，负责让音频潜特征去查对应时刻的脚本特征。二者搭配是为了保留原生成能力并可一键关闭回到普通视频生音频，组合意义是只学时间控制增量而不破坏基座音质。

**交错旋转位置编码 × 时间对齐：** 交错旋转位置编码负责把上采样后的音频特征与脚本特征沿时间维交错排列后再加旋转位置，让相邻时刻拿到相关的位置编号；时间对齐负责让第 i 秒脚本只影响第 i 秒音频。搭配原因是直接拼接会丢掉谁对谁的时刻关系，交错编码显式构造邻接对应，组合后融合不再是全局语义平均而是逐秒可控融合。

**双帧声音合成框架 × 画内音与画外音：** 双帧声音合成框架负责把同一音频潜变量复制成两路并行走块，一路看画面一路看空视觉嵌入；画内音指画面可见事件的声音，画外音指旁白、反事实或被遮挡的声音。搭配原因是强视觉会压住与画面矛盾的文字要求，拆成两路做属性解耦，组合后可按时间段拼回，既讲清故事又不被画面带偏。

复述时要强调，联合注意力管保底音质与视听同步，TSA 管加时间控制，交错 RoPE 管时刻不错位，Bi-Frame 管复杂组合不互相压制。

### 数据如何构造，模型如何训练，推理如何运行？

数据构造沿用脚本提取管线。DirectorSound 由 VGGSound、AudioCaps 与一部分自有视频音频数据构成。VGGSound 是超 20 万片段、310 余类、约 550 小时的大规模视听对应数据。AudioCaps 基于 AudioSet 提供 10 秒音频的人工自然语言描述。自有数据用于扩多样性与覆盖。

所有数据都经感知识别加逐段分类得到逐秒脚本，用于训练。评测另建两个基准。DirectorBench 聚焦可控性，从 VGGSound 测试集与 Pexels 选 100 个视频，人工标出声音段，分时间控制与反事实控制两类，每类每视频约 1 到 4 个模板，共约 400 个测试样本。VGGSound-Director 聚焦质量，是 2.2 千视频的子集，用真实音频做时间标注，可比对生成与真实分布。

**DirectorSound × DirectorBench：** DirectorSound 负责提供带逐秒脚本标注的训练数据，让模型学到秒级控制；DirectorBench 负责提供 100 个视频约 400 个时间控制与反事实控制测试样本，用音频定位工具算交并比得到可控性分数。搭配原因是训练要学控制、评测要量控制，组合后形成从标注管线到可复述评测的闭环。

训练实现按原文交代，基座是 MMAudio-medium，做全模型训练，学习率 2e-5，批量 16，余弦调度，训练 1,200,000 步，用 8 卡 40 GB A800 约 3 天。训练时脚本特征以 0.1 概率随机丢弃并换成空文本特征，以支持无分类器引导。推理沿用 MMAudio 默认配置，走 25 步，引导系数 4.5。基线包括 MMAudio、HunyuanVideo-Foley、ThinkSound，可控性对比再加 Video-Foley。在 VGGSound-Director 上所有模型用原始 VGGSound 标题，在 DirectorBench 上手标时间标题，各用默认参数。资源状态方面，本次收到的证据中没有完成验证的代码模型数据链接，因此不能写代码已公开，只能写训练与推理配置如上，缺失的开源与权重可达性是待确认项。

### 评测在测什么，条件是否一致，指标往哪边看？

评测分两条线。DirectorBench 测可控性。用音频定位工具找到目标发声段，与人工标注的目标时间段算交并比，超过阈值算触发成功，再算精确率、召回率与 F1。分反事实、时间、总体 3 组报告，还用 FDVGG 看视觉质量，越低越好。VGGSound-Director 测质量与对齐。

分布匹配用 FD 与 KL，编码器包括 PaSST、PANNs、VGGish，越低越好。音频质量用无参考的 Inception Score，以 PANNs 为分类器，越高越好。语义对齐用 ImageBind 算视频音频余弦相似，越高越好。时间对齐用 Synchformer 预测的 DeSync 估计音画错位，越低越好。公平条件上，同一基准内各方法用同一标题来源与默认参数，时间标题在 DirectorBench 上手标，质量基准用原始标题。

需要提醒的是，F1 与 FD 量的是不同东西，数值接近不能互比。百分点提升与相对百分比也不同，论文写从 0.2451 到 0.4819 是绝对值翻倍量级，不能说成提升 96.6% 而不说明是相对比。不同指标的差值不能塞进模型列下比较，自动指标也不能当成人评。消融与成本在后两节展开，这里先把方向记牢，FD、KL、DeSync 向下好，ISC 与 IB 向上好。

### 可控性提升了多少，音质保住了吗？

先看可控性问题。比较对象是同一 DirectorBench 上的可运行基线，条件是同一手标时间标题与同一音频定位打分流程。表前的问题是，在时间控制与反事实控制两类上，本方法是否同时提升精确率召回率与 F1，且 FDVGG 不恶化。指标方向是精确率召回率 F1 越高越好，FDVGG 越低越好。

| 评测维度 | 指标 | 最强基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 反事实控制 | F1 | 0.2331 | 0.5284 | Hunyuan-Foley 对比 Ours |
| 时间控制 | F1 | 0.2572 | 0.4354 | Hunyuan-Foley 对比 Ours |
| 总体控制 | F1 | 0.2451 | 0.4819 | Hunyuan-Foley 对比 Ours |
| 总体控制 | 精确率 | 0.2275 | 0.4677 | Hunyuan-Foley 对比 Ours |
| 总体控制 | 召回率 | 0.4037 | 0.5962 | Hunyuan-Foley 对比 Ours |

表后解释是，总体 F1 从 0.2451 到 0.4819，反事实 F1 从 0.2331 到 0.5284，时间 F1 从 0.2572 到 0.4354，精确率与召回率同步抬升，说明不是靠全段铺声刷召回。FDVGG 从 7.51 降到 6.19，是表中最低，支持控制增强没有以视觉质量为代价。未胜出项也要点名，时间控制的绝对值低于反事实，说明指定秒静音与精确起止仍比反事实属性更难。
下面看定性频谱，矩形是控制段，曲线是对应类别的识别置信。

> **看图路径：** 1. 先确认每列顶部三帧视频内容与底部提示的控制区间是否对应；2. 再逐行对比同一列中基座与本方法在矩形控制段内外的频谱能量；3. 最后看叠加的类别置信曲线是否只在控制段内抬升而段外保持低平

[![原论文 Figure 3：Qualitative comparison. We visualize the spectrograms of generated audio (by prior works and our…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b7c45783b081/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b7c45783b081/figure-3.png)

*论文图 3。原论文 Figure 3：“Qualitative comparison. We visualize the spectrograms of generated audio (by prior works and our method) and the ground- truth.”。*

从像素看，左列火车鸣笛加静音的例子中，本方法在控制段内频谱能量集中且置信曲线呈方波抬起，段外迅速回落，而基座整段铺能量。中列先静音后婴儿牙牙语的例子中，本方法只在后段出现清晰谐波与置信峰，前段保持安静。右列人说话加狗叫的例子中，两段置信各自在对应矩形内抬升且互不串扰。这支持细脚本提供了段级全局控制，同时保留了视觉节奏。
再看质量问题。

比较的是 VGGSound-Director 上的分布、质量与对齐，条件是同一原始标题。

| 评测维度 | 指标 | 基线 MMAudio | 本方法 | 变化方向 |
| --- | --- | --- | --- | --- |
| 分布匹配 | FDVGG | 1.45 | 1.17 | 越低越好 |
| 分布匹配 | KLPANN | 1.67 | 1.42 | 越低越好 |
| 分布匹配 | KLPaSST | 1.47 | 1.23 | 越低越好 |
| 音频质量 | ISCPANN | 14.38 | 14.84 | 越高越好 |
| 语义时间对齐 | IB 与 DeSync | 0.32 与 0.439 | 0.33 与 0.432 | 高与低为好 |

表后解释是，FDVGG、两路 KL、DeSync 都下降，ISC 与 IB 上升，支持引入脚本后生成更接近真实且未损害同步。代价是 FDPANN 从 8.23 到 8.60、FDPaSST 从 92.80 到 94.27 略有上升，说明在部分分布距离上没有全面占优。去掉脚本只走基座的配置也接近原 MMAudio，支持可切换回普通视频生音频。

用户研究中 30 人对质量、可控性、对齐打 1 到 5 分，本方法三项高于 MMAudio 与 HunyuanVideo-Foley，与客观趋势一致，但它是小样本主观分，不能当成自动指标的替代。

### 哪个部件带来了增益，脚本时长如何取舍？

消融按加法组织。基座在总体上精确率 0.1448、召回率 0.1963、F1 0.1311。只加脚本注意力而不加交错 RoPE 时，精确率到 0.4102、召回率到 0.5432、F1 到 0.4252，说明逐秒脚本本身是主要增益。再加交错 RoPE 后总体 F1 到 0.4389，支持位置交错改善了时间对齐。再加 Bi-Frame 后总体 F1 到 0.4819。

在更难的区分画内画外子集上，不用双路时 F1 为 0.4178，用双路后为 0.4613，且都低于总体，说明子集本身更难，双路缓解了难度但没有抹平难度。

| 消融条件 | 指标 | 基座 | 本方法配置 | 结果 |
| --- | --- | --- | --- | --- |
| 加脚本 | 总体 F1 | 0.1311 | 0.4252 | 加 STS 后提升 |
| 加位置 | 总体 F1 | 0.4252 | 0.4389 | 加交错 RoPE 后提升 |
| 加双路 | 总体 F1 | 0.4389 | 0.4819 | 加 Bi-Frame 后提升 |
| 难子集 | 总体 F1 | 0.4178 | 0.4613 | 不用与用双路对比 |
| 难子集 | 总体精确率 | 0.3928 | 0.4449 | 不用与用双路对比 |

表后解释是，增益链条清晰，脚本给时间语义，位置给对齐，双路给复杂组合。代价是结构与推理更重，且难子集精度仍低于总体，说明遮挡与画外混合仍是边界。

脚本时长实验用只在 1 秒上训练的模型直接推理 0.5 秒与 2 秒。0.5 秒 F1 为 0.5197，1 秒为 0.4819，2 秒为 0.4646。支持的判断是，更短段给更多时间细节因而分数更高，但需要写更多段，比如 0.5 秒要 16 段，可用性下降，且过短片段缺上下文会增大标注误差。原文结论是 1 秒是控制、可用性、标注准确性的折中，不是越短越好。

### 还有哪些边界没有被测到？

先说已验证的限制。难子集的精度低于总体，时间控制弱于反事实，部分分布距离略升，这些都是原文数字直接显示的。双路需要复制潜变量并行过块再按段拼回，推理开销高于单路，但原文没有给出延迟、显存峰值与帧率的对照表，因此不能承诺实时性改善，只能说趋势是控制更强而成本更高。再说未评测的边界。标注管线依赖多模态大模型的感知与分类，过短片段的上下文不足会带来误差，但误差率没有被量化。

用户手写脚本的质量、响度与音色描述的粒度、空嵌入的比例，都会影响结果，但没有系统扫参。评测的触发判定依赖音频定位工具与交并比阈值，阈值选择会影响精确率召回率的绝对值，跨论文对比时要固定同一流程。资源方面，本次没有验证可达的代码与权重链接，不能写已公开，只能按训练配置复现。把这些边界讲清，是为了避免把总体 F1 的提升推广到每组每步都成立，也避免把自动指标的向好等同于人耳在所有场景下都更喜欢。

### 要复现先做什么，需要哪些信息条件？

复现分 3 步。第一步复数据。按论文管线先用多模态模型写全局标题并识别事件，再按 1 秒切段做有无分类并补响度音色，缺段填空文本。DirectorSound 的来源包括 VGGSound、AudioCaps 与自有数据，前两者可按原数据集获取，自有部分不可复，只能用前两者先搭通管线。第二步复模型。

在 MMAudio-medium 上加 SG-TFM，保持原联合注意力不动，新增时间脚本注意力。脚本经 CLIP 编码池化后复制对齐，上采样后与音频交错排布加旋转位置再做注意力。训练用学习率 2e-5、批量 16、余弦调度、1,200,000 步、脚本丢弃率 0.1，推理用 25 步、引导系数 4.5，8 卡 40 GB A800 约 3 天是预算参考。第 3 步复评测。DirectorBench 需 100 视频约 400 模板并分时间与反事实两类，用同一音频定位工具与同一交并比阈值算精确率召回率 F1。

VGGSound-Director 用 2.2 千视频的真实标注比分布，记录 FD、KL、ISC、IB、DeSync 及其编码器归属。先跑通去掉脚本的切换模式，确认回到基座水平，再打开脚本看控制增益。还需补的验证是阈值敏感性、0.5 秒与 2 秒的标注误差、双路的延迟显存，以及人评的大样本重复。区分 3 类可运行性，代码开源、权重下载、系统可运行是三件不同的事，本次证据只能确认方法与配置可重写，不能确认链接可达。

### 何时值得尝试这个方法？

当你的失败集中在何时出声而不是声音好不好听时，这个方法值得尝试。具体信号是，画面里找不到声源、声音在画外、多事件挤在几秒内、需要指定秒静音，或想要反事实组合而不被画面带偏。这时把长描述拆成每秒一句的短脚本，往往比调大基座更直接。反之，如果问题是音色本身难听或同步整体漂移，应先查基座与同步特征，而不是加更多脚本。动手时从 1 秒粒度起步，缺段填空，保持文本编码与池化一致，先验证可切换回基座，再开双路处理画内画外混合。

记住它的代价，脚本要逐段写或逐段标，双路推理更重，难场景的精度仍低于平均。只有在你愿意为时间精度付出标注与计算成本时，总体 F1 从 0.2451 到 0.4819 的增益才是可部署的收益，否则它只是一个在特定评测流程下的可控性提升。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed8e0c1e66db/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed8e0c1e66db/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper.pdf#page=4)

另有 10 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
