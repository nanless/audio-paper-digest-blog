---
title: "CrossEdit: Cross-Modal Training Enables Rich Audio-Visual Editing"
date: 2026-10-11
draft: false
tags: [音视频生成, 语音编辑, 流匹配, 迁移学习, 基准测试]
categories: [论文速递]
description: "论文要解决无成对电影声画编辑数据时如何执行组合指令，方法是把合成音频编辑与自监督声画掩码重建加入微调，在 CrossEditBench 上 AV-FES 达到 0.30 但仍远低于理想上限，且保留了原有单模态编辑能力。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.10264"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "CrossEdit：用音频编辑学会的指令能力去改电影声画"
paper_digest_original_title: "CrossEdit: Cross-Modal Training Enables Rich Audio-Visual Editing"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.10264v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.10264v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.10264v1.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"task","id":"task.speech-editing","label":"语音编辑"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.transfer","label":"迁移学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文要解决无成对电影声画编辑数据时如何执行组合指令，方法是把合成音频编辑与自监督声画掩码重建加入微调，在 CrossEditBench 上 AV-FES 达到 0.30 但仍远低于理想上限，且保留了原有单模态编辑能力。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"William Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Prem Seetharaman"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ke Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Oriol Nieto"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kevin Duarte"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Siddharth Srinivasan Iyer"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mamshad Nayeem Rizve"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiwen Cao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shinji Watanabe"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuanjun Xiong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jianming Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zeyu Jin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Justin Salamon"}]
paper_digest_abstract_sha256: "a468237b45cc36b9db37956aeab5dfc6ea9dbfaee80f9b985b360311c11daef6"
paper_digest_sidecars: {"citation.bib":{"sha256":"1bff4e91933ba798725ca744bdc5bec4f8ad5f54064068af2964b8b4927305fb","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-10264/citation.bib"},"citation.json":{"sha256":"4be1accc2fb4b99997b055f0b9e7022064ca5e483c9dba8b2db6a6ab2df12cb0","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-10264/citation.json"},"citation.ris":{"sha256":"16d96d955a8454407b25bed7284501e497ee4cb1ad3628c167a95b9315a87266","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-10264/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"4db806b8e9144d88efcda14aa75594f8ab23b0498bea2c37668f6d277e83896c","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-10264/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ee8629166d5dbf434ee423cc5db2083c43e2296f23b9de59a25027f978228948"
paper_digest_api_reader_plan_sha256: "cd6e4846de42158848b503f0517777851f52bb584b2e92848b00671e99b08599"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "cc893859f77f11e6e42fec1fa23e53afa2706467ba7e651be634ed01ebf3a2dc"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "8595f34ab36a43600140b321f5225df0ca4142870ed56ffe1b5229a6a0c84907"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9b1b5feee6a042402ccd6f0717c6906703a7d68ea1ce6c49b82fa76f8057ed01"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ab38c25586b3ac1bca2fe1cdedd880510663078a8fd46218df046389d1a840a6"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 CrossEdit：用音频编辑学会的指令能力去改电影声画

> 英文题目：*[CrossEdit: Cross-Modal Training Enables Rich Audio-Visual Editing](https://arxiv.org/abs/2610.10264v1)*

> 标签：#音视频生成 | #语音编辑 | #流匹配 | #迁移学习 | #基准测试
>
> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- William Chen：机构信息未在 arXiv HTML 中可靠披露
- Prem Seetharaman：机构信息未在 arXiv HTML 中可靠披露
- Ke Chen：机构信息未在 arXiv HTML 中可靠披露
- Oriol Nieto：机构信息未在 arXiv HTML 中可靠披露
- Kevin Duarte：机构信息未在 arXiv HTML 中可靠披露
- Siddharth Srinivasan Iyer：机构信息未在 arXiv HTML 中可靠披露
- Mamshad Nayeem Rizve：机构信息未在 arXiv HTML 中可靠披露
- Zhiwen Cao：机构信息未在 arXiv HTML 中可靠披露
- Shinji Watanabe：机构信息未在 arXiv HTML 中可靠披露
- Yuanjun Xiong：机构信息未在 arXiv HTML 中可靠披露
- Jianming Zhang：机构信息未在 arXiv HTML 中可靠披露
- Zeyu Jin：机构信息未在 arXiv HTML 中可靠披露
- Justin Salamon：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

多媒体编辑要求模型读懂组合式自然语言指令，只改动图像、音频和视频中被指定的元素，同时保持未提及内容和音画时间关系不变，现有系统多局限在单模态单属性修改。CrossEdit把输入指令、输入媒体序列和输出媒体序列建模为条件生成问题，各模态输入媒体先由各自的变分自编码器编码为潜表示，文本、图像和视频输入还得到预训练Qwen3-VL语义嵌入，两者与编辑指令共同作为条件送入共享的扩散变换器骨干。该骨干对输出潜表示去噪，得到的输出潜表示再交由各自的变分自编码器解码为图像、音频和视频。训练从内部预训练检查点CrossEdit-Base出发，加入两类数据微调，一类是利用声音波形可叠加性质大规模合成的复杂音频编辑对，另一类是以修复该视频为指令的音视频遮罩重建，前者教组合指令遵循，后者教在已有场景中生成贴合上下文的新内容。评测引入真实电影片段的人标基准CrossEditBench和音视频忠实编辑分数，该分数把指令遵循增益和一致性用调和平均结合。在CrossEditBench零样本音视频场景编辑上，以音视频忠实编辑分数衡量，CrossEdit为0.30，高于MiniMax H3的0.23。在CrossEditBench人评消融中，以音视频忠实编辑分数衡量，加入合成音频编辑对和遮罩重建使CrossEdit从CrossEdit-Base的0.26提升到0.43。适用范围限于短片段和已评测的编辑类型，嘈杂自制视频和长片编辑尚未验证；原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://wanchichen.github.io/crossedit/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 电影声画编辑要同时改对画面和声音吗

这篇论文处理的是指令式音视频编辑。输入是三样东西：一段原始视频画面、一轨原始音频加上一句自然语言指令，输出是一段新的带声视频。目标不是从零生成，而是按指令只改该改的部分，其余保持原样，还要让声音和画面在时间上对得上。比如往街景里加一辆摩托车，画面要出现车，声音要出现对应的引擎声，出现与消失的时刻要一致，街道其他人和背景不能被顺手改掉。

对刚入门的同学，关键是把编辑理解成条件生成：条件是原声画加文字，评价要同时看改了没有和有没有多改。论文把测试指令分成两个维度，一个是动哪个模态，另一个是是否需要跨模态同步，由此得到同步的语音加说话人编辑、同步音频编辑、非同步音频编辑、同步声画场景编辑、同步视频编辑、非同步视频编辑 6 类。同步与非同步的区分很重要，因为前者要求生成与另一模态对齐的新内容，后者要求严格不动另一模态，模型必须从指令隐式判断。

**同步编辑 × 非同步编辑：** 同步编辑指新增或改变的内容必须与另一模态在时间上对齐，例如脚步声起停要对上人物走动，非同步编辑指只动一个模态而另一模态应保持不动，例如去掉交通环境音而不改画面，二者搭配才能检验模型是否知道何时该联动、何时该隔离。

### 已有编辑路线为何做不了复杂声画联动

论文梳理的已有路线大多按模态分家。图像编辑常用合成三元组，视频编辑在图像扩散基础上加时序一致或用大编辑数据集，音频编辑用真实混合按预设操作做，再用大模型扩写指令。声画联合编辑的早期做法是级联，先用视频模型改画面，再用视频到音频模型配音，或者用单模态模型的采样技巧拼起来。近期端到端工作如 SpongeBob 和 InstructAV2AV 只做加减这类可用修复完成的简单指令，前者还需要每模态字幕、物体掩码和参考图，等于把改什么留给用户决定。

MiniMax H3 把图像音频视频生成与编辑统一在一个模型里，但论文强调 CrossEdit 首次证明基于指令的声画场景编辑可以靠跨模态迁移零样本获得。比较时要注意输入目标并不相同：级联在音频阶段缺少跨模态上下文，采样法靠近输入但增益低，智能体做法会损伤视频，这些都不是同一监督和同一运行条件下的简单胜负，而是路线差异带来的取舍。

### 零样本声画场景编辑的具体输入与判定

论文把零样本定义得很窄。训练中模型只见过两种声画到声画指令类型：口型同步语音编辑和掩码修复，指令分别是换台词和修复视频。图 1 展示的 6 类复杂指令在声画形态下从未出现，只在单模态编辑数据里出现过，例如改发色只在图像到图像里见过，去环境音只在音频到音频里见过。因此测试时要求模型把在其他模态学到的指令理解搬到声画联合场景，还要自己决定动音频、动视频还是都动，以及是否需要同步。

下面这张官方示例图就是考试题面，每格上方是类别名，下方是具体指令，中间是电影画面输入，读者可以先按同步与否预判正确输出应该长什么样。
读图说明：该图用两行三列展示 6 种考试题型，上方标题点明模型必须隐式判断改哪个模态并处理同步，像素细节有助于理解同步与非同步的差别。

> **看图路径：** 1. 先看每格标题区分同步与非同步、音频与视频与联合场景；2. 再看每格下方英文指令确认要改哪个模态；3. 对比左上换说话人与右下只改发色杯色的输入输出差异

[![原论文 Figure 1：Instruction types in CrossEditBench that CrossEdit must handle zero-shot.](https://arxiv.org/html/2610.10264v1/demo.png)](https://arxiv.org/html/2610.10264v1/demo.png)

*论文图 1。原论文 Figure 1:：“Instruction types in CrossEditBench that CrossEdit must handle zero-shot. Models must implicitly determine which modalities to edit and what to synchronize across audio and video.”。*

看图后可以确认：左上把男人换成女人并说指定台词属于双模态同步改变，中上加拖拽音效要求声音起停对上倒地动作，右上移除交通环境音要求画面完全不动，左下加背景摩托要求声画同增，中下按脚步声加行人要求画面生成对齐已有声音，右下改发色与杯色要求只动画面。例子仅为教学转述，不代表模型在该样本上的实际得分。

**口型同步语音编辑 × 语音加说话人编辑：** 口型同步语音编辑指只换同一出镜人说的内容并重生成对齐的口型与表情，语音加说话人编辑还要改变说话人属性例如把男声换女声并换脸，二者分工在于前者是训练中见过的声画到声画任务，后者是零样本任务，组合对比才能看出跨模态迁移是否超出了训练分布。

### CrossEdit 的整体流程经过哪些部件

CrossEdit 被建模成全模态编辑分布，输入序列与输出序列的元素个数和模态都可变，图像被当作单帧视频处理。底层是一个扩散 Transformer 加混合专家结构，活跃参数 3B，总参数 12B。编码侧用冻结的模态分词器：音频用 DAC 变分自编码器把 48 kHz 立体声压成 256 维、40 Hz 的连续隐表示，视频用 3D 变分自编码器把 540p、24 FPS 视频变成 60 乘 34、6 FPS、48 通道的隐表示，文本图像视频还额外经过预训练 Qwen3-VL 得到干净语义嵌入。

原文明确写 CrossEdit 由冻结的模态分词器加隐扩散主干组成，每个模态由各自预训练变分自编码器分词，因此不能说是否冻结未报告。主干以输入的干净变分自编码器隐表示和 Qwen3-VL 嵌入为条件，去噪输出侧的变分自编码器隐表示。推理时从标准正态噪声出发，用常微分方程求解器从时间 1 积分到 0，视频与音频默认用 50 步采样。对初学者可以这样记：下层分词器负责把声画压成紧凑隐变量且不更新，上层大 Transformer 负责按文字把噪声逐步变成符合编辑要求的隐变量，再解码回声画。

### 速度场训练目标与双重引导如何分工

训练用线性插值的流匹配目标。记干净目标为输出原点，噪声为标准正态，中间状态是二者的线性混合，模型学习的速度场要回归噪声减干净目标的向量，损失是均方误差。先沿一个样本走一遍：文字进 Qwen3-VL 得到文本嵌入，输入视频进 Qwen3-VL 与 3D 变分自编码器得到语义与细节条件，输入音频进 DAC 变分自编码器得到音频条件，待生成的噪声视频与噪声音频隐表示与这些条件一起进入扩散 Transformer，输出去噪后的视频与音频变分自编码器词元，再解码成画面与波形。

\[\mathcal{L}=\mathbb{E}_{(Y,X,\hat{Y}_{0}),\epsilon,t}\left[\left\|v_{\theta}(\hat{Y}_{t},t,Y,X)-(\epsilon-\hat{Y}_{0})\right\|^{2}\right].\]

训练时输入与指令会各自随机被替换为空标记，从而支持对输入保真与对指令服从的两个引导尺度。当前结构化证据只完整恢复了无条件基项的片段，完整引导还包括输入条件差值乘输入尺度与全条件差值乘指令尺度的两项，原文用单独两行给出，推理默认视频与音频的两个尺度分别取 5.0 与 3.0。

\[\displaystyle\tilde{v}_{\theta}(\hat{Y}_{t},t,Y,X)=v_{\theta}(\hat{Y}_{t},t,\varnothing,\varnothing)\]

**流匹配 × 分类器无关引导：** 流匹配指学习从噪声到目标隐表示的速度场并用常微分方程求解器从噪声积分回干净输出，分类器无关引导指训练时随机把输入与指令置空，推理时用带条件与无条件速度的差值加权来同时加强保真与服从指令，二者搭配后前者负责生成路径，后者负责平衡留存与修改。

### 掩码重建为何能补上场景填充缺口

仅靠挖掘与合成音频对，模型从未被要求在已有声画场景里生成新视觉内容，复杂场景编辑就会不足。掩码重建把遮挡片段当输入、干净片段当输出，统一指令下做自监督声画到声画编辑，恰好补上这一缺口。读图说明：该图展示 3 种遮挡形态的输入样子，左侧为视频黑块，右侧为声谱缺块，有助于理解模型推理时要补的内容类型。

> **看图路径：** 1. 先区分空间遮挡、时间遮挡、时空遮挡三行；2. 观察右侧声谱图黑色缺块与左侧视频黑块的对应关系；3. 注意时间行中间段音频被整体置零的形态

[![原论文 Figure 4：AV masked reconstruction schemes. All use the instruction “Inpaint this video”.](https://arxiv.org/html/2610.10264v1/masking.png)](https://arxiv.org/html/2610.10264v1/masking.png)

*论文图 4。原论文 Figure 4:：“AV masked reconstruction schemes. All use the instruction “Inpaint this video”.”。*

从像素可见：空间行是多帧同一位置的大黑块而音频完整，时间行是中间帧被整段遮黑且声谱中间段全黑，时空行是两者叠加。论文在微调混合里以 50% 概率把视频到视频与口型同步语音样本替换为掩码重建，意味着模型一半时间在学修复，从而学会生成与周围画面和声音衔接的内容。消融显示只加音频数据会损伤需要同步生成的能力，加上掩码重建才回升，这与该部件的分工一致。

**合成音频编辑 × 声画掩码重建：** 合成音频编辑指用混合与工具合成构造大规模音频前后对比对，负责教模型理解删除、增强、加入等组合指令，声画掩码重建指把遮挡后的声画片段作为输入要求复原完整片段，负责教模型在已有场景里生成能嵌入上下文的新内容，二者组合后前者给指令复杂度，后者给跨模态场景填充能力。

### 三路数据如何构造出指令迁移能力

论文假设复杂指令遵循与模态无关，一旦在一个模态学会就能迁移，另一假设是掩码声画重建本身就是自监督的声画编辑任务。为此构造了 3 路数据。第一路是挖掘的口型同步语音对：先用语言查询声源分离去掉非语音，再做说话人分离与转写得到 transcript 与时间段，做人脸检测跟踪丢掉缺脸或出画段，最后按说话人组装同一人说不同句子的前后对。过滤掉约 96% 源数据，但每人可组多对，总产出约 20%，例如 10 万片段得到 20,000 对，只覆盖换台词，不覆盖场景编辑。

第二路是合成音频编辑对，包括 2 到 4 个音频文件的随机混合，每文件来自语音、音乐、背景、音效 4 类之一，声学可信但语义不一定连贯，以及让工具调用大模型调用生成式音频模型合成更自然的场景，两路结合得到大量组合指令，弥补挖掘数据偏干净语音且前后背景不一致的缺点。

第 3 路是声画掩码重建，每样本随机选时间遮挡、空间遮挡或时空遮挡，时间是遮一段视频帧且一半概率把对应音频置零，空间是在所有帧上加最多 12 个 200 乘 200 像素块，统一用修复视频指令要求复原干净片段，从而逼模型在已有场景里生成能嵌入上下文的新视觉内容。
读图说明：该图是 3 路数据流水线而非编码器架构图，(a) 为四步挖掘流程，(b) 为随机混合采样与前后混合，(c) 为大模型写计划再渲染，适合对照理解监督从哪里来。

> **看图路径：** 1. 沿(a) 四步看原始视频如何变成按说话人配对的输入与目标；2. 对比(b) 随机混合与(c) 大模型写计划再渲染的场景构造差异；3. 注意每路最下方的模型输入与目标输出指令写法

[![原论文 Figure 3：Editing data sources. (a) Our pipeline for mining lip-synced speech editing pairs.](https://arxiv.org/html/2610.10264v1/data_pipeline.png)](https://arxiv.org/html/2610.10264v1/data_pipeline.png)

*论文图 3。原论文 Figure 3:：“Editing data sources. (a) Our pipeline for mining lip-synced speech editing pairs. (b) Random audio mixtures and (c) Synthetic audio scenes provide audio editing pairs.”。*

从像素可见：(a) 从原始视频加波形出发，经分离、分离加转写、人脸过滤配对，最终形成改台词的模型输入与目标输出；(b) 从 4 类真实片段采样 2 到 4 轨再按移除音乐等指令混合出输入与目标；(c) 先写含语音音效背景音乐的场景计划，再用语音与音频工具生成各轨并混合，编辑后再重渲染出加钢琴等指令的输入与目标。

训练分两段，先从内部预训练检查点 CrossEdit-Base 出发，它已见过挖掘的口型同步对但没见过合成音频与掩码重建，再加入后两路微调 10,000 步得到 CrossEdit，优化器用 AdamW，恒定学习率 1.2e-4，约 64 块 H100 上 2.5 天或 64 块 A100 上 5 天。Qwen3-VL 的冻结与梯度路径原文只证明了编码器提供干净语义嵌入作为条件，不能从模型名推测其余参数更新细节。

### 微调混合与已有能力保留的成本是多少

微调数据混合按词元与每批样本数配比，声画掩码重建以 50% 概率替换视频到视频与口型同步样本。该表列出监督微调各任务的词元总量与每批样本数，可以看出不同任务在训练成本与任务占比上的差异。

| Task | Tokens | Batch Samples |
| --- | --- | --- |
| Synthesized Audio Editing | 0.5B | 64 |
| Simulated Audio Editing | 2.5B | 208 |
| Speech Editing | 1.5B | 96 |
| Video to Video | 1.3B | 8 |
| Lip-Synced Speech Editing | 2.0B | 8 |
| Image to Image | 0.2B | 12 |

合成音频编辑为 0.5B 词元、每批 64 样本，仿真音频编辑为 2.5B 词元、每批 208 样本，占比最高，解释了为何音频指令多样性外溢到视频；图文音生成与动画任务仍保留，保证全模态能力。成本是 10,000 步微调约 64 块 H100 上 2.5 天。保留测试显示口型同步的人评视频一致从 4.22 到 4.42，视频编辑 6 项指标中有 5 项提升，图像编辑总分从 3.69 到 3.72，说明不是以牺牲已训任务换零样本。但图像背景类从 3.88 掉到 2.82，是尚未评测清楚的负结果，不能说全面无损。

### CrossEditBench 与 AV-FES 如何同时奖改对罚多改

CrossEditBench 是 100 段来自公共领域电影开源集 OSSL 评估划分的片段，每段由人工写一条编辑指令，并标注音频与视频各该怎么变，例如加牛并去音乐对应音频加牛叫去音乐、视频加牛，但本文评测只用指令不用细粒度标注。评价指标 AV-FES 先让评委对每个模态分别打 1 到 5 分的指令遵循与一致性，再算增益与一致性映射的调和平均。增益是输出遵循分减输入遵循分再除以满分减输入遵循分的剩余空间，并裁到 0 到 1，复制输入则增益接近 0；一致性把 1 到 5 线性映射到 0 到 1。

单模态分为二者调和平均，声画总分为视频分与音频分平均。直接复制因增益为 0 而得 0，全部重做即使指令对上也会被低一致性拉低。零剩余空间时若输入已满分则看一致性是否不低于 4 来定增益。实际中 Gemini 对完全相同的片段一致性也只给 4 左右，因此经验上限约 0.86 而非 1，但不影响排序。

\[g_{m}(\hat{Y})\;=\;\operatorname{clip}_{[0,1]}\!\left(\frac{\mathrm{Ins}_{m}(\hat{Y})-\mathrm{Ins}_{m}(Y)}{5-\mathrm{Ins}_{m}(Y)}\right),\]

\[\text{FES}_{m}(\hat{Y})\;=\;\frac{2\,g_{m}(\hat{Y})\,c_{m}(\hat{Y})}{g_{m}(\hat{Y})+c_{m}(\hat{Y})},\]

\[\text{AV-FES}(\hat{Y})\;=\;\tfrac{1}{2}\left(\text{FES}_{\mathcal{V}}(\hat{Y})+\text{FES}_{\mathcal{A}}(\hat{Y})\right).\]

**指令遵循 × 一致性：** 指令遵循指输出相对输入在多大程度上实现了文字指令要求的变化，一致性指除要求变化之外输出与输入保持相同的程度，二者搭配是因为只看前者会奖励全部重做，只看后者会奖励直接复制，组合后才能衡量改对且只改该改处。

### 零样本声画场景编辑的主结果与条件

主实验在 CrossEditBench 上用 Gemini 3.1 Pro 打分并算 ImageBind 对齐，比较级联、采样、智能体与端到端并发模型。比较问题是在完全没见过该类声画指令的条件下，谁的改对与少多改综合分更高，指标越大越好。
下表在同一批 100 段电影片段的零样本推理条件下整理综合分与分模态表现，AV-FES 与 V-FES 越大越好，音频指令遵循按 1 到 5 分越大越好。

| 系统 | 参数规模 | AV-FES 越大越好 | V-FES 越大越好 | 音频指令遵循越大越好 |
| --- | --- | --- | --- | --- |
| CrossEdit | 12B | 0.30 | 0.26 | 3.70 |
| MiniMax H3 | 33B | 0.23 | 0.24 | 2.77 |
| InstructAV2AV | 端到端 | 0.20 | 0.15 | 2.85 |

CrossEdit 综合分最高且双模态指令遵循最强，MiniMax H3 视频分 0.24 低于 CrossEdit 的 0.26 而非高于，音频指令遵循 2.77 明显低于 3.70，说明其偏向少改音频。

InstructAV2AV 双模态落后。12B 对 33B 是不到一半，不能说成一半多。级联因音频阶段重做配乐导致音频一致性崩塌，AvED 靠近输入故 ImageBind 最高但增益最低，这些限制说明综合分之外的对齐分不能单独解读。结论只在该 100 段电影短片段、该评委与 AV-FES 定义下成立，换 Qwen3-Omni 评委分值范围会宽 2 到 3 倍，只能在同一评委内比较。作者演示页当前可用，已公开模型输出与标注，但这不等于代码权重已开源。

### 分类型增益是否都来自同一机制

为避免把平均提升误读成处处同因，论文按 6 类拆开人工 AV-FES。比较问题是增量来自指令理解还是场景嵌入，条件是同一消融链条。
下表比较 6 类指令下基线、单加音频、完整模型的人评 AV-FES，分数越大越好，用于区分跟指令与对齐生成的不同贡献。

| 类别 | 基线 | 单加音频编辑 | 完整模型 |
| --- | --- | --- | --- |
| 语音加说话人 | 0.15 | 0.37 | 0.46 |
| 非同步视频 | 0.23 | 0.47 | 0.48 |
| 同步音频 | 0.31 | 0.18 | 0.34 |
| 同步视频 | 0.19 | 0.06 | 0.35 |
| 非同步音频 | 0.18 | 0.31 | 0.32 |

3 类主要考跟指令的类别单加音频就大涨，而两类同步生成类单加音频反而下跌，加掩码重建才反超基线达到 0.34 与 0.35，支持掩码重建负责生成贴合现有场景内容的解释。限制是每类样本量小，柱图未给置信区间，不能推广到长视频或家庭噪声录像。原文明确未在混响家庭视频与超 10 秒长片段上测试，理论上音频训到 30 秒但长声画编辑仍是开放难题。

### 两路新增训练各自带来了什么与代价

消融用人工打分 344 条每系统，比较基线、加音频编辑、再加声画掩码重建的增量效果，指标越大越好。最后一行音频分为 0.44，0.47 是音频增益而非音频分。
下表在同一批人工按四轴 1 到 5 分打分再算 FES 的条件下比较逐步加入训练部件后的综合分，分数越大越好，最后一列给出每系统的人评条数。

| 系统 | AV-FES 越大越好 | 是否加入音频编辑 | 是否加入掩码重建 | 每系统人评条数 |
| --- | --- | --- | --- | --- |
| CrossEdit-Base | 0.26 | 否 | 否 | 344 |
| 加音频编辑 | 0.35 | 是 | 否 | 344 |
| 加声画掩码重建 | 0.43 | 是 | 是 | 344 |

只加不含视觉的合成音频数据，双模态指令遵循与视觉一致都提升，AV-FES 从 0.26 到 0.35，支持跨模态迁移；再加掩码重建四轴全升到 0.43。基线视觉一致最低，说明常改动无关内容。代价在分类型结果里暴露：单加音频会损伤需同步生成的两类，后续才修复，因此不能只看平均分。

下面这张柱图按 6 类指令拆开人评 AV-FES，蓝橙绿三色对应基线、加音频、完整模型，纵轴 0 到 0.8，适合定位哪类最依赖场景填充。

> **看图路径：** 1. 按横轴六类对比蓝色基线、橙色加音频、绿色完整模型的柱高；2. 重点看同步音频与同步视频两组橙色柱的回落；3. 再看同步声画场景组绿色柱达到 0.62 的增幅

[![原论文 Figure 5：Human-rated AV-FES on CrossEditBench, by instruction category.](https://arxiv.org/html/2610.10264v1/av_fes_by_category.png)](https://arxiv.org/html/2610.10264v1/av_fes_by_category.png)

*论文图 5。原论文 Figure 5:：“Human-rated AV-FES on CrossEditBench, by instruction category.”。*

从这次收到的像素可见，同步声画场景从 0.41 经 0.51 到 0.62，语音加说话人从 0.15 经 0.37 到 0.46，非同步视频从 0.23 经 0.47 到 0.48，而同步音频从 0.31 掉到 0.18 再回到 0.34，同步视频从 0.19 掉到 0.06 再到 0.35，非同步音频稳步从 0.18 到 0.31 到 0.32。这说明音频数据主要教跟指令，掩码重建主要教按场景生成，两者互补，柱图未给置信区间故类间小差不宜过度解读。

### 哪些结论换条件就不成立

首先所有零样本结论都绑定 CrossEditBench 的 100 段公有领域电影短片段与 AV-FES 定义，换评委绝对值会变，Gemini 与 Qwen3-Omni 系统级相关约 0.90 但后者更宽容，只能同评委内比。其次自动对齐分 ImageBind 与人工 FES 方向不一致，AvED 对齐最高但增益最低，说明对齐好不等于改对。再次基线视觉一致在 Gemini 下仅 2.00，人工下 2.37，都是全场最低，意味着基线常乱改，任何提升都部分来自纠正乱改而非真正学会复杂组合。最后训练与评测都是最长 10 秒短片段，未测噪声混响家庭录像，长视频编辑仍开放。缺证据不等于技术缺陷，来源未确认也不是论文技术问题，例如演示链接当前可用但代码权重按伦理声明不开源，这是发布策略而非方法失败。

### 复现第一步要准备什么

复现不需先训大模型，第一步是复刻评测：从演示页获取已公开的 CrossEditBench 标注、评委提示与模型输出，按附录重算增益、一致性映射与调和平均，注意处理输入已满分时增益未定义的分支，以及未编辑输入按构造得 0。数据侧按原文三节重做：用语言查询分离加说话人分离加人脸跟踪挖掘口型同步对并记录约 20% 产出率，用 4 类音频随机混合加大模型工具合成构造组合指令音频对，按时间、空间、时空三式做掩码重建并统一用修复视频指令。

模型侧用冻结变分自编码器分词加扩散 Transformer 加 Qwen3-VL 语义条件，流匹配目标训练，推理用 50 步与视频 5.0、音频 3.0 的双引导。超参数与混合细节以原文第 3 章与附录 B 为准，不要从模型名猜测梯度路径。代码开源、权重可下载、在线可运行是三件事，本篇仅证明演示与评测集可获取，未证明代码权重已公开。

### 什么时候值得尝试还缺哪项验证

当任务是短电影片段的组合式声画编辑，且能接受约 0.30 到 0.43 量级的综合分与偶发多改时，值得尝试先用合成音频扩指令多样性，再用掩码重建补场景嵌入的路线，尤其同步声画场景与换说话人类指令预期收益最大。复现第一步是跑通 AV-FES 计算与人工四轴打分，保证复制输入得 0、全部重做被低一致性惩罚。还缺的验证是每类指令的置信区间与更大样本、另一批电影与家庭噪声下的迁移、长于 10 秒的时序稳定性，以及图像背景类下跌的原因分析。只有补上这些，才能判断该迁移是通用规律还是当前数据与评委条件下的表现。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.10264v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
