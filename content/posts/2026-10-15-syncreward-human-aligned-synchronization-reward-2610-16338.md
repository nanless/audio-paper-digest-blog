---
title: "SyncReward: Human-Aligned Synchronization Reward for Audio-Visual Generation"
date: 2026-10-15
draft: false
tags: [音画同步, 偏好优化, 数据集, 基准测试, 对比学习]
categories: [论文速递]
description: "论文针对联合生成的音画不同步问题，用 80K 条专业同步评分和两阶段奖励模型做评测与优化，在自建 1K 基准上与人类最一致，但只优化同步可能牺牲提示词保真度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.16338"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "生成视频声音对不上口型怎么办：SyncReward 如何学人类判断"
paper_digest_original_title: "SyncReward: Human-Aligned Synchronization Reward for Audio-Visual Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.16338v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.16338v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.16338v1.pdf"
paper_digest_primary_task: "音画同步"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-synchronization","label":"音画同步"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.contrastive","label":"对比学习"}]
paper_digest_primary_method: "偏好优化"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文针对联合生成的音画不同步问题，用 80K 条专业同步评分和两阶段奖励模型做评测与优化，在自建 1K 基准上与人类最一致，但只优化同步可能牺牲提示词保真度。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kaisi Guan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ying Ba"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenjing Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xihua Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chen Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jing Lyu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ruihau Song"}]
paper_digest_abstract_sha256: "2d4eac2f7678a3ce6246abbfe152266c8020888db2ae20fdb9c686e76076d863"
paper_digest_sidecars: {"citation.bib":{"sha256":"7df98de108a66a9a023b827a056c6f2f87a1d94e2645e765877fbe33c9ab2b5a","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-16338/citation.bib"},"citation.json":{"sha256":"e1bccd56702ae78aa2c9f8da65332ef63474843279ef6e5b393360d4282a7028","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-16338/citation.json"},"citation.ris":{"sha256":"5a3e6537a5c0f7d40442ae5dff7a9bb035b5662a41651838dc2f45bd2736bd0e","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-16338/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"dcef6f4e12db64f9811dfedb1dd17dbe169cba4fe5a1a0083eefb819efda0ddf","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-16338/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d797e69902c603623094331e2a86184e8a44cf6cc3913c8f334b1d7abd5f5032"
paper_digest_api_reader_plan_sha256: "7d32fd6b12523a065ac0c16d990a064593ace9a6f77fc4c82f85303034c2cfd7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2c04f3ea2762839e015c5b6eb5677c122224152f85f0d5fc9f7d523505ba6c45"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "9cefce82605e0767352242a85d396cd10eeb1cec6053102e997a3575ed2a6088"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c5f5c04f357b2820a7c8dd5a87688eb9f656b5e266d8b6fac119bfcf954e8f3e"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8b42de0f604493bdfd0ae300bad662bdf1e556b9ccd47bbd037c093cac23d13c"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 生成视频声音对不上口型怎么办：SyncReward 如何学人类判断

> 英文题目：*[SyncReward: Human-Aligned Synchronization Reward for Audio-Visual Generation](https://arxiv.org/abs/2610.16338v1)*

> 标签：#音画同步 | #偏好优化 | #数据集 | #基准测试 | #对比学习
>
> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Kaisi Guan：机构信息未在 arXiv HTML 中可靠披露
- Ying Ba：机构信息未在 arXiv HTML 中可靠披露
- Wenjing Wang：机构信息未在 arXiv HTML 中可靠披露
- Xihua Wang：机构信息未在 arXiv HTML 中可靠披露
- Chen Li：机构信息未在 arXiv HTML 中可靠披露
- Jing Lyu：机构信息未在 arXiv HTML 中可靠披露
- Ruihau Song：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

联合音视频生成需同时输出画面与声音，难点在于说话口型、撞击动作、乐器演奏与环境声要在时刻与语义上对应，而整体偏移估计无法刻画缺失、幻觉或不稳定对齐。本文按语音、触发音、乐器与环境四类体系引导提示构造并收集八个生成器的输出，由专业人员给出0、1、2三级同步评分，形成8万条训练数据与1000片段独立基准SyncReward-Bench。奖励模型先在真实片段上以语义—时间对比学习训练音视频编码器，再冻结编码器并在生成片段的人类评分上以回归加排序损失训练跨模态Transformer与分数头，输出0至2的片段级同步分数。该分数既可作为评测指标，也可用于候选选择与扩散后训练的在线强化，与已有偏移估计、嵌入相似度和通用全模态裁判相比更贴近生成内容的失败形态，同数据微调的基线仍全面落后。在SyncReward-Bench语音子集上按Spearman秩相关（ρ×100）比较，SyncReward为79.7，高于同数据微调的最强基线Qwen3-Omni-30B-A3B-FT的69.5。在SyncReward-Bench四个声音类别上按Spearman秩相关（ρ×100）与成对排序准确率比较，SyncReward较该最强基线分别提高1.9–10.2点和1.1–5.7点，语音上差距最大。结论适用于有可见发声源的片段，对无可见源的旁白与背景音乐不作评价，个别示例显示同步提升伴随乐器缺失；训练成本为第一阶段在4×8块NVIDIA H20上训练音视频编码器，第二阶段在2×8块NVIDIA H20上训练交互模块与分数头。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/WeChatCV/SyncReward> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 联合生成为什么总出现声音对不上画面

联合音画生成指给定文本提示词，模型同时生成一段视频画面和一条配音，输出是一个成对片段。理想情况下，说话时嘴在动，走路时脚步声落在脚着地瞬间，乐器演奏时手部动作与音符对应。论文指出，即使是当时较强的生成器，也会出现嘴不动却有说话声，或者撞击声早于或晚于物体接触的情况。这类错误不只是整体延迟，还包括声音语义含糊、该有的事件没声、不该有的声音凭空出现。

对刚入门的同学，要分清 3 个容易混的概念。感知质量指画面清不清晰、声音好不好听；提示词依从指生成内容是否按文字要求出现；同步指声音与可见声源在种类和时刻上是否吻合。本文只研究第 3 个，而且要求声音必须与可见场景相关，画外旁白和无可见来源的背景音乐被排除在目标事件之外。也就是说，先判断声音和画面有没有语义关系，再判断时间是否对齐。

已有两条路线都不够用。一条是专用同步指标，比如比较音频起始点和视觉运动峰值，或者估计整体时间偏移，或者算音视频嵌入相似度。它们在真实视频上有效，但生成视频的失败模式更复杂，不是平移一下就能对齐。另一条是通用多模态大语言模型，语义理解强，但没有被训练去捕捉细粒度时间错位。论文因此要同时补数据、基准和奖励模型三块短板。

### 已有生成器、奖励模型和同步评测各缺什么

从生成器看，论文把联合生成器分成双塔和单塔。双塔用跨模态层连接各自独立的音频和视频分支，可以复用预训练部件；单塔把音频和视频 token 放在同一个 Transformer 里处理。两类结构都能学跨模态关联，但生成目标本身并不直接优化人类感知的同步好坏。本文不改生成器结构，只研究如何评测同步以及如何用奖励去选候选或做后训练。

从奖励模型看，图像和视频领域已有 ImageReward、PickScore、VisionReward、VideoScore 等工作，学的是人类对画质、时间一致性、文本对齐的偏好。它们不直接判断声音是否落在可见动作上。本文要补的正是这个缺口：学一个专门针对音画同步的人类对齐分数。

从同步评测看，AV-Align 比对音频起始点和视觉运动峰值，SparseSelector 和 Synchformer 预测时间偏移，SyncNet、跨模态相似度方法 CAVP、FATE 算嵌入相似度，PEAVS 从人类评分学习同步分，SynthSync 则用真实视频加生成音频的偏好去适配多模态大模型。论文认为这些工作没有覆盖联合生成器原生输出的多样失败模式，因此用 8 个生成器的输出和专业标注重新建数据，并检验学到的分数能否真正改善生成。

### 本文要解决的具体问题与输出形式

输入是条件和生成片段。条件通常是文本提示词，生成片段包含视频流和音频流。任务是给每个片段打一个同步分，记为对视频和音频的函数，取值在 0 到 2 之间。0 代表明显不同步，1 代表部分同步或拿不准，2 代表很好地同步。标注时先判断音画是否相关，不相关则不打同步分；相关才进入 3 级评分。

这个分数有两个用途。做评测指标时，要求它与专业标注者的排序一致；做奖励时，要求用它选候选或微调生成器后，人类更偏好新结果。论文强调，比较时只比排序，不要求不同方法的绝对分值刻度相同。

**音画同步 × 语义对应 × 时间对齐：** 音画同步是本文的总目标，指声音和可见声源在内容和时刻上都吻合。语义对应管“声音种类对不对”，比如口型动时应出说话声而不是狗叫；时间对齐管“出现时刻准不准”，比如撞击声是否恰好落在物体接触那一帧。两者缺一都会被判为不同步，奖励模型必须同时检查这两路。

### 数据、基准和模型三部分如何分工

整体流程分三步。第一步建 SyncReward-Data-80K，用 3 级声音事件分类指导提示词采样和改写，再用 8 个生成器各生成约一批片段，请专业标注者按 2 阶段协议打分，得到约 80,000 条同步评分。第二步建 SyncReward-Bench，从不重叠的片段中抽 1000 条，每个由多人独立评分并交叉核对，作为检验各种指标与人类一致性的考试集。第三步训练 SyncReward 模型，先在真实片段上做语义加时间的对比预训练，再在生成片段的人类评分上学对齐，最后既当指标又当奖励去做挑选和后训练。

在看数据全貌图之前，先明确这张图要回答什么：80K 评分在 4 类事件和多个生成器上是否都有覆盖，以及不同分数长什么样，这决定了后面训练和评测的分布基础。

> **看图路径：** 1. 先看中间圆形图的三层结构：最内圈 80K 评分，往外是 4 大类，再往外是 16 中类；2. 再看四周八张小卡：每张的文字说明可见声源，左下角分数 0、1、2 代表同步程度；3. 对比左侧乐器缺声和右侧脚步声对齐的例子，体会语义缺失和时间对齐的区别

[![原论文 Figure 1：Illustration of SyncReward-Data-80K: human annotations of synchronization in generated…](https://arxiv.org/html/2610.16338v1/fig_teaser.png)](https://arxiv.org/html/2610.16338v1/fig_teaser.png)

*论文图 1。原论文 Figure 1:：“Illustration of SyncReward-Data-80K: human annotations of synchronization in generated audio–visual clips.”。*

这张总览图中间是环形占比，显示 80K 评分按语音、突发动作声、乐器、环境声四大家族和更细类别的分布，四周是采样帧加简短声源描述的例子。例子上标有生成器名和同步分，可以看到乐器演奏只有画面没有对应乐声会被打低分，而脚步声落在楼梯上的例子得分高。它说明数据集同时覆盖语义缺失和时间错位两类问题，而不是只收集延迟。

### 声音事件分类与提示词是怎么构造的

分类是 3 级：4 个事件家族、16 个中类、58 个细子类。四大家族是语音、突发动作声、乐器、环境声。语音指可见说话和唱歌；突发动作声这里是类别名，不是只指瞬间声，包括脚步、撞击、动物叫、设备声、体育和虚构事件等；乐器指可见演奏。

环境声指有可见来源的雨、交通、室内活动等。画外旁白和背景音乐一律排除。语音还另带 6 种语言标签，但语言是独立属性，不增加子类数。类别描述的是提示词想要的目标事件，不保证生成片段真的做出来了。

提示词构造分三步。先用多模态模型给 AudioSet 和 VGGSound 真实片段的描述做分类，得到不均衡的描述池；再按预设配额重采样，得到 3 组互不重叠的描述集合，压住高频类别；最后用大语言模型改写，要求每个声音都能找到可见声源并写明动作与声音的对应关系，把画外音转给画面内可见人物，把无可见来源的背景音乐删掉，保留机位和场景。改写只明确意图，生成结果仍可能不同步，这正是要检测的。

**SyncReward-Data-80K × SyncReward-Bench：** SyncReward-Data-80K 是约 8 万条生成片段的人类评分训练集，用来教模型什么是同步；SyncReward-Bench 是另外独立标注的 1000 条评测集，用来检验模型和人类有多一致。前者管学习，后者管考试，两者提示词和片段都不重叠，避免用训练数据自证效果。

在看细分类例图之前，先说明它的作用：把抽象的 4 类 16 中类落到具体可看的例子，并展示不同分数的含义，帮助理解标注尺度。

> **看图路径：** 1. 先看四个大色块标题行的评分数和类别数，确认覆盖是否均衡；2. 再看每张卡的三帧截图加一句话事件描述加生成器名加同步分；3. 注意同一大类下不同同步分的例子，理解标注区分的是同步而非画质

[![原论文 Figure 2：Sound-event taxonomy and human-rated examples.](https://arxiv.org/html/2610.16338v1/fig_taxonomy_cases_landscape_compact.png)](https://arxiv.org/html/2610.16338v1/fig_taxonomy_cases_landscape_compact.png)

*论文图 2。原论文 Figure 2:：“Sound-event taxonomy and human-rated examples.”。*

这张图按语音、乐器、突发动作声、环境声分 4 个大区，每个大区标题给出该区总评分数和中类数。每张小卡有 3 帧截图、一句事件描述、生成器名和同步分，0 为不同步，1 为部分同步，2 为完全同步。图注明确这些例子是为了展示覆盖面而挑选的，不代表数据集中分数的真实分布。结合像素可以看到，独白、合唱、动画角色、拨弦、脚步、流水、施工等都被分别覆盖，8 个生成器的名字分散在各卡上，说明失败模式来自多系统而非单一模型。

### 奖励模型的输入如何变成一个同步分

模型由音频编码器、视频编码器、跨模态 Transformer 和标量分数头组成。每个片段被切成 18 个重叠小段，每段 0.5 s、步长 0.25 s，音频重采样到 48 kHz。编码器输出每段的向量，再线性映射到 768 维。跨模态模块把可学习的奖励 token、视频序列、分隔符、音频序列拼在一起输入 3 层 Transformer，从奖励 token 的输出经两层感知机加 Sigmoid 再乘以 2，得到 0 到 2 的片段级分数。

先沿一个样本走一遍：视频帧序列和音频波形先各自切段编码，得到两组时间序列；拼上特殊 token 后，跨模态 Transformer 让音频段和视频段互相注意，奖励 token 汇总跨时刻跨模态的信息；分数头把它变成一个数。这个设计的含义是，同步判断不能只看全局相似度，必须让不同时刻的音画证据互相比较。

\[\begin{gathered}H=g_{\phi}\!\left([\mathrm{REW};V;\mathrm{MOD};A]\right),\\ R_{\phi,\psi}(x)=2\sigma\!\left(r_{\psi}(h_{\mathrm{REW}})\right).\end{gathered}\]

上式中 H 是跨模态 Transformer 的输出序列，REW 是汇总用的可学习 token，MOD 是区分模态的分隔符，V 和 A 分别是视频和音频段序列，h 代表奖励位置的向量，r 是分数头，Sigmoid 把输出压到 0 到 2 的人类评分区间。

在看 2 阶段训练示意图之前，先抓住它的分工：第一阶段只练两个编码器，第二阶段冻结编码器只练后面的交互和分数头，2 阶段监督来源完全不同。

> **看图路径：** 1. 沿左侧箭头看视频和音频如何被切分成多段再进各自编码器；2. 看中间相似度矩阵里对齐正样本与两类负样本的颜色区分；3. 看右侧第二阶段冻结与可训练模块的雪花和火焰图标分工

[![原论文 Figure 3：Two-stage training of SyncReward.](https://arxiv.org/html/2610.16338v1/main-wwj.png)](https://arxiv.org/html/2610.16338v1/main-wwj.png)

*论文图 3。原论文 Figure 3:：“Two-stage training of SyncReward. Stage 1 trains the audio and video encoders through contrastive learning with aligned segment pairs, within-clip temporal negatives, and…”。*

左半显示第一阶段用对齐段做正样本，用同片段不同时刻做时间负样本，用同批次不同片段做语义负样本；右半显示第二阶段把编码器冻住，用人类评分训练跨模态 Transformer 和分数头，火焰表示可训练，雪花表示冻结。像素中的相似度矩阵示意了正负样本的划分方式。

**语义负样本 × 时间负样本：** 第一阶段对比学习需要正负对。语义负样本指来自不同片段的音画对，内容本来就不同，用来学“什么声音配什么画面”；时间负样本指同一片段内不同时刻的音画对，内容相似但时刻错开，用来学“同一事件在时间上是否对齐”。两者搭配，编码器才不会只认内容而忽略错位。

### 两阶段训练的监督从哪里来

第一阶段用 AudioSet 加 VGGSound 共约 2.2M 真实片段做语义加时间混合对比学习。同一片段同一时刻的音视频段是正样本，同片段不同时刻是时间负样本，不同片段是语义负样本。目标是对称对比损失，2 个方向各算一次再平均。分母同时包含两类负样本，迫使模型既认内容又认时刻。实现上还用 ImageBind 音视频相似度过滤掉低于 0.2 的片段，去掉配乐或旁白与画面无关的视频。编码器从 Perception Encoder 音视频大模型初始化，温度从 0.07 开始学习。

第二阶段用 SyncReward-Data-80K 的人类评分做对齐。编码器冻结，只更新跨模态 Transformer、可学习 token 和分数头。损失是回归加排序，回归用 SmoothL1 拟合 0 到 2 的目标，排序对批内人类分数不同的对做两两比较，标签差至少 0.75 才构成有效对，无有效对时排序项记为 0。论文报告的模型训练 3 轮，按验证集 Spearman 相关选检查点。

\[\mathcal{L}=\mathrm{SmoothL1}(\hat{r},r;\,\beta{=}0.1)+\lambda\,\mathcal{L}_{\mathrm{rank}},\qquad\lambda{=}0.1,\]

上式中第一项是预测分与人类分的 SmoothL1，第二项是批内排序损失，权重为 0.1，平滑参数为 0.1。回归管绝对刻度，排序管相对顺序。

**回归损失 × 排序损失：** 回归损失要求模型输出的绝对分数接近人类给的 0、1、2 分，管刻度准确；排序损失要求在同一批内，人类评分更高的片段模型打分也更高，管相对顺序正确。两者相加后，模型既能给出可比的分数，又能在二选一时更少排错。

### 评测集、基线和指标在什么条件下比较

评测用 SyncReward-Bench，共 1000 条生成片段，8 个生成器各 125 条，按语音 321、突发动作声 276、乐器 169、环境声 234 分布。音乐主导片段已从评测集中去掉一部分，所以乐器子集较小。每条由 3 名专业标注者按同样两步协议评分，取有效同步分的均值作参考，不做标注者偏置校正。附录报告 3 人一致性 Fleiss 系数约 0.23，两两 Spearman 约 0.45 到 0.50，完全一致约 52 到 55，完全相反的 0 对 2 约 1.3 到 2.3，说明任务有主观性但极端分歧少。

基线分两组。一组是专用同步指标，包括 AV-Align、CAVP、SparseSelector、Synchformer、PEAVS；另一组是通用多模态大模型评委，包括 Qwen2.5-Omni-3B、Qwen3-Omni-30B-A3B、SynthSync，以及用同样 SyncReward-Data-80K 微调后的两个 Qwen 模型，保证数据匹配。指标是 Spearman 等级相关和两两排序准确率。排序对要求人类均分差至少 0.75，打平记 0.5 分，所有比较只比排序，不需校准分数。

奖励用法在 LTX-2.3 上验证。推理时 Best-of-16 指每提示词采 16 个候选，取奖励最高者；后训练用 DiffusionNFT，以奖励为信号微调 LTX-2.3。人类和 Gemini 偏好在匹配的留出提示词上测，另有 4 个自动同步指标在同样生成视频上计算。附录说明后训练用 1000 条训练提示词和 120 条监控提示词，排除基准和奖励模型验证集，LoRA 只加在注意力上，视频和音频流都更新。

### 作为评测指标时谁与人类最一致

下面这张整理表要回答的核心问题是：在语音和环境声两类上，哪个指标的排序与人类排序最一致。公平条件是所有方法都在同一基准上比较，所有比较都是基于排序且不需要分数校准。Spearman 列为 ρ×100 后的相关，Pair Acc 列以% 计，数值越大越好，表头保留原表单位写法，数据格保留原表裸数值。

| Method | Speech Spearman (ρ×100) | Speech Pair Acc (%) | Ambient Spearman (ρ×100) | Ambient Pair Acc (%) | Params |
| --- | --- | --- | --- | --- | --- |
| AV-Align (Yariv et al., 2024) | 4.4 | 51.8 | 15.3 | 55.9 | – |
| Qwen3-Omni-30B-A3B-FT | 69.5 | 79.4 | 77.2 | 82.9 | 30BA3B |
| SyncReward | 79.7 | 85.1 | 82.1 | 85.9 | 1.6B |

表中 SyncReward 在语音上相关为 79.7（ρ×100）、两两准确率为 85.1%，在环境声上相关为 82.1（ρ×100）、准确率为 85.9%，都高于数据匹配的最强基线微调后 Qwen3-Omni-30B-A3B-FT。专用指标 AV-Align 在两类上相关很低，两类准确率分别为 51.8% 和 55.9%，只在 50 出头，说明只靠真实视频代理目标难以迁移到生成内容。限制是乐器子集较小，且结果只在该基准的提示词分布和生成器范围内成立，换分布需重测。本表数值与单位依据论文 PDF。

**Best-of-N 挑选 × DiffusionNFT 后训练：** Best-of-N 挑选是不改生成器参数的用法：对同一提示词生成多个候选，用奖励分数选最高分保留，代价是推理时要多生成；DiffusionNFT 后训练是改生成器参数的用法：把奖励变成优化信号去微调 LTX-2.3，代价是一次性训练开销大但推理不变。前者验证奖励能否选好，后者验证奖励能否教会模型。

在看挑选与后训练的定性例子之前，先说明它补充了什么：数字表告诉我们偏好分数提高了，这张图让我们看到提高来自哪里，又丢了什么。

> **看图路径：** 1. 对比每组上下两排的三帧人脸框与下方声谱图虚线时刻；2. 看左组训练后口型变化与分数从 0.17 到 1.84 的对应关系；3. 看右组人声变清晰但乐器消失，体会同步提升与提示词保真度的矛盾

[![原论文 Figure 5：Qualitative effects of SyncReward-guided DiffusionNFT post-training.](https://arxiv.org/html/2610.16338v1/case-wwj.png)](https://arxiv.org/html/2610.16338v1/case-wwj.png)

*论文图 5。原论文 Figure 5:：“Qualitative effects of SyncReward-guided DiffusionNFT post-training.”。*

左组对话例子训练后嘴部开合更明显，SyncReward 预测从 0.17 升到 1.84；右组歌唱例子人声与可见歌手的对应更清晰，分数从 0.62 升到 1.63，但提示词要求的乐器在画面中缺席。虚线标出 3 帧时刻，声谱图显示声音能量分布的变化。这说明只优化同步可能换来提示词保真度的损失，需要互补目标。

### 作为奖励去挑选和微调时效果如何

这张表要回答的第二个问题是：把不同同步分数当奖励用，真正生成的新视频是否更被人类偏好。比较在同一 LTX-2.3 基座、同一留出提示词上进行，分推理时 Best-of-16 和 DiffusionNFT 后训练两段，每段内对比 AV-Align、Synchformer、SynthSync 和 SyncReward。人类和 Gemini 偏好分数越高越好，自动指标中 DeSync 越低越好，其余越高越好。论文注明当前偏好分是基于与基座比较的临时估计，将来会换成完整两两比较。

| Method | Human | Gemini | SyncR | DeSync | AV-Align | JavisScore |
| --- | --- | --- | --- | --- | --- | --- |
| LTX 2.3 Base | 32.31 | 47.97 | 0.935 | 0.327 | 0.306 | 0.191 |
| Best-of-16 AV-Align | 36.15 | 40.83 | 0.953 | 0.300 | 0.448 | 0.184 |
| Best-of-16 Synchformer | 38.90 | 41.16 | 0.985 | 0.125 | 0.293 | 0.192 |
| Best-of-16 SynthSync | 52.57 | 54.20 | 0.991 | 0.267 | 0.292 | 0.197 |
| Best-of-16 SyncReward | 63.67 | 71.94 | 1.269 | 0.205 | 0.313 | 0.207 |
| Post-train AV-Align | 40.73 | 37.89 | 0.897 | 0.380 | 0.420 | 0.185 |
| Post-train Synchformer | 45.03 | 35.17 | 1.053 | 0.185 | 0.299 | 0.220 |
| Post-train SynthSync | 53.71 | 52.63 | 0.885 | 0.417 | 0.311 | 0.189 |
| Post-train SyncReward | 65.78 | 67.86 | 1.129 | 0.187 | 0.323 | 0.223 |

挑选段 SyncReward 的人类偏好 63.67、Gemini 偏好 71.94，比次优高约 11.1 和 17.7 个点，同时在 SyncR 和 JavisScore 上第一，在 DeSync 和 AV-Align 上第二。AV-Align 和 Synchformer 各自在自己直接优化的指标上最好，但人类偏好低得多，说明单指标刷高不等于人类觉得同步好。后训练段 SyncReward 仍第一，人类 65.78、Gemini 67.86，领先次优约 12.1 和 15.2 个点，同样在 SyncR 和 JavisScore 第一、另两项第二。反例是 AV-Align 后训练把自身指标从 0.306 提到 0.420，却让另 3 个自动指标相对基座变差。结论的成立条件是 LTX-2.3、给定提示词池和 DiffusionNFT 配置，换生成器或奖励权重需重做。未胜出的基线和临时偏好估计的限制都要保留，不能把挑选的最优值当成部署必然收益。

### 两阶段和两类监督各起了多大作用

这张消融表要回答的是：去掉某个训练阶段或某类监督后，与人类的总体一致性掉多少。总体数是在基准上平均的 Spearman 和两两准确率，数值越大越好，表中为裸数值以保留原表写法。所有变体只动被测部分，其他设置尽量相同。

| Variant | Spearman | Pair Acc |
| --- | --- | --- |
| PE-AV init | 26.6 | 60.4 |
| Stage 1 only | 60.5 | 74.6 |
| Stage 2 only | 40.9 | 66.3 |
| w/o semantic | 74.1 | 81.4 |
| w/o temporal | 70.6 | 78.9 |
| w/o regression | 75.4 | 82.0 |
| w/o rank | 73.8 | 79.8 |
| SyncReward | 78.2 | 83.6 |

完整模型总体 Spearman 为 78.2，准确率为 83.6。只做第一阶段为 60.5 和 74.6，只做第二阶段直接从初始编码器学为 40.9 和 66.3，说明时间预训练后再做人类对齐最重要。第一阶段内去掉时间负样本比去掉语义负样本掉得更多，相关分别掉到 70.6 和 74.1，相差约 7.6 对 4.1 个点，支持时间对应超出语义相似的价值，但两者都保留最好。第二阶段去掉排序损失准确率掉 3.8 个点，去掉回归掉 1.6 个点，说明即使有绝对分，显式排序监督仍有帮助。表示分析进一步看，第一主成分与人类评分的绝对 Spearman 在 SyncReward 为 0.47，高于 Synchformer 的 0.29 和 Qwen3-Omni 的 0.04，线性探针也更高。但论文明确提醒，Qwen 在第一主成分上低不代表同步信息不在其他维度，不能反推它完全没有同步信号。

### 结论的边界与容易误解的地方

首先，同步好不等于整体好。论文的案例显示，同步分提高的同时可能丢掉提示词要求的乐器，因此不能把同步奖励当成唯一优化目标，实际部署需要搭配保真度和画质目标。其次，自动指标好不等于人类觉得好，AV-Align 和 Synchformer 各自刷高自己指标但偏好低就是证据。第三，大模型不等于同步判断强，未微调的 30B 多模态模型仍低于 1.6B 的专用奖励模型，关键在是否有生成视频的人类同步监督。

其次，数字都有适用范围。评测结论限于 SyncReward-Bench 的 4 类分布和 8 个生成器；奖励结论限于 LTX-2.3 基座、给定提示词池和 Best-of-16 或 DiffusionNFT 配置；偏好分还是临时估计。换生成器、换提示词分布、换采样数，结果都可能变。

最后，低一致性不代表方法无用，只说明它在生成内容的同步判断上与人类不一致；主成分分析的差异也只是线性可及性的提示，不能推出模型内部没有相关信息。

### 复现第一步要准备什么数据与配置

复现评测先准备数据划分。训练用 SyncReward-Data-80K，验证和测试与训练在提示词编号和模型组合上不重叠；评测用独立的 1000 条基准，8 个生成器各 125 条。标注沿用两步协议：先判相关再打 0 到 2 分，基准取均值不做偏置校正，两两比较要求人类分差至少 0.75。提示词构造需要原始描述池、分类配额和改写指令，语音保留原语言对白，改写后英文描述加原语言台词。

下面这张分类表是复现时最实用的对照，它定义了采样配额和评测分组的依据，复现第一步就是按它检查自己的提示词是否覆盖四大家族，表中括号内数字为每中类包含的细子类数。

| Family | Category | Subcategories |
| --- | --- | --- |
| Speech | Conversation 2 | Monologue; multi-speaker conversation. |
| Speech | Vocal performance 3 | Singing; expressive speech; challenging tongue twisters. |
| Speech | Stylized characters 5 | Japanese anime; Western cartoons; children animation; 3D film game characters; puppets and robots without conventional lips. |
| Onset | Human actions 4 | Body contact; eating and chewing; breathing actions; footsteps. |
| Onset | Object interactions 5 | Impacts and breakage; object manipulation; material processing; liquid interactions; tool use. |
| Onset | Mechanical and electronic events 4 | Device startup; electronic notification sounds; vehicle operation; rhythmic mechanisms. |
| Onset | Animals 2 | Animal vocalizations; animal movements. |
| Onset | Sports 5 | Ball sports; combat sports and martial arts; athletics and gymnastics; water sports; ice and snow sports. |
| Onset | Fictional events 4 | Cartoon character actions; fantastical creatures; magical and energy effects; in-world game feedback. |
| Instrument | Strings 2 | Plucked strings; bowed strings. |
| Instrument | Winds 3 | Woodwinds; brass; free-reed instruments. |
| Instrument | Keyboards 3 | Piano; organ; electronic keyboards. |
| Instrument | Percussion 2 | Drums; pitched percussion. |
| Ambient | Natural processes 5 | Rain; thunderstorms; wind; fire; flowing water. |
| Ambient | Urban and harbor environments 6 | Street traffic; crowds; construction; aircraft; ships and boats; trains and subways. |
| Ambient | Indoor environments 3 | Household appliances; kitchen activity; indoor crowds. |

表中列出语音下对话、演唱、风格化角色，突发动作声下人体动作、物体交互、机械电子、动物、体育、虚构事件，乐器下弦乐、管乐、键盘、打击乐，环境声下自然、城市港口、室内等 16 中类和 58 细子类。注意突发动作声是类别名而非只含瞬时声，语言标签单独记录。训练实现上，第一阶段切 18 段重叠窗口并先训练编码器，第二阶段冻结编码器只训交互层和分数头，回归加排序权重为 0.1。论文称将在公开代码仓库发布数据、基准、模型和代码，但本次证据中的链接是第三方镜像是否可达的记录，不能当成作者已开源或可运行的证明，代码可用、权重可下载、系统可运行要分开核实。

### 什么时候值得尝试以及还缺哪项验证

当你的任务是联合生成且用户抱怨嘴型对不上、动作声错位，或者你需要一个与人类排序一致的自动同步指标时，值得尝试 SyncReward 这条路线。它的代价很具体：要收集生成视频的人类同步评分，要做 2 阶段训练，推理挑选要多生成候选，后训练要跑 DiffusionNFT。附录给出的后训练一次约 1 到 200 GPU 小时量级，推理切 18 段也会增加开销，这些都要计入预算。

复现第一步建议从评测做起：先按分类表抽少量提示词，用自己的生成器各生成一批，请标注者按两步协议打分，算 Spearman 和两两准确率，看现有指标是否同样与人类不一致，再决定是否训练奖励。还需要补的验证包括：换生成器和提示词分布后的泛化、完整两两偏好替换临时估计、同步奖励加保真度联合优化是否解决乐器丢失问题，以及推理延迟和成本的实测。论文的价值在于证明了生成视频的人类同步标注不可替代，但没有承诺它能同时改善画质、保真度或延迟。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.16338v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
