---
title: "Transfer Learning for Rhythm Game Chart Generation from Music Transcription and Across Games"
date: 2026-10-15
draft: false
tags: [符号音乐生成, 音乐转录, 迁移学习, 多任务学习, 音乐]
categories: [论文速递]
description: "论文研究如何用冻结的自动音乐转录编码器加谱面解码器生成节奏游戏谱面，并在谱面最少的模式上用跨模式联合训练把事件 F1 从 0.492 提到 0.506，而与 Clone Hero 联合反而降到 0.482。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.14955"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "从音乐转录借耳朵，为节奏游戏写谱：冻结编码器与跨游戏联合训练"
paper_digest_original_title: "Transfer Learning for Rhythm Game Chart Generation from Music Transcription and Across Games"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.14955v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.14955v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.14955v1.pdf"
paper_digest_primary_task: "符号音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.symbolic-music","label":"符号音乐生成"},{"facet":"task","id":"task.transcription","label":"音乐转录"},{"facet":"method","id":"method.transfer","label":"迁移学习"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "迁移学习"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文研究如何用冻结的自动音乐转录编码器加谱面解码器生成节奏游戏谱面，并在谱面最少的模式上用跨模式联合训练把事件 F1 从 0.492 提到 0.506，而与 Clone Hero 联合反而降到 0.482。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sojeong An"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nathan Pruyne"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chris Donahue"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dasaem Jeong"}]
paper_digest_abstract_sha256: "1cc993f1156a2ec5807ca995067bb5d63fb172714ec71d54f21d9b9b0fbf623f"
paper_digest_sidecars: {"citation.bib":{"sha256":"6aca71139066b21199eea706490f23a2a817f219e2e418a71c05e2b7e1f91fc0","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14955/citation.bib"},"citation.json":{"sha256":"a508d531505e45c89246be9387d94d5e7774e4612e318cc8a19d553e7add819b","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14955/citation.json"},"citation.ris":{"sha256":"ae48b43013196acb622cd1cc9b13e37ac0d8b2e8b683fd8d901cdabe969390a6","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14955/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e0a3c5db014ed739732543d22fd81e1adbe06a8d2bbf8004d375b5606e99c6d9","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14955/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e6f2a3764a102eecd63839c46e8019e1f9108266acd67e1a48b96cab78460a14"
paper_digest_api_reader_plan_sha256: "8d9b9eec52e80c6e9bf8723e6219732a50da80975d9f825c16ac43c556c0f967"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3efe4e51f2ac168bbc706f11d1bbec33292651ff23f6982f4f1eec043f82719b"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f7e0ba73ef2239d38519910d29dec8f49f9917fc8954b9d09355959be28a5803"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "be78d8cb02a9771567dc737c8e68b1161c0aa6424313899ce09e2c8965d756d9"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "172e98dfcac03848d20dae540dabfa11719cbc28948920f1b9c1fc73f24e0a32"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 从音乐转录借耳朵，为节奏游戏写谱：冻结编码器与跨游戏联合训练

> 英文题目：*[Transfer Learning for Rhythm Game Chart Generation from Music Transcription and Across Games](https://arxiv.org/abs/2610.14955v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐生成](/audio-paper-digest-blog/papers/?concept=task.music-generation) → [符号音乐生成](/audio-paper-digest-blog/papers/?concept=task.symbolic-music)；[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [音乐转录](/audio-paper-digest-blog/papers/?concept=task.transcription)
- **研究方法**：[迁移学习](/audio-paper-digest-blog/papers/?concept=method.transfer)；[多任务学习](/audio-paper-digest-blog/papers/?concept=method.multitask)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5


## 👥 作者与机构

- Sojeong An：机构信息未在 arXiv HTML 中可靠披露
- Nathan Pruyne：机构信息未在 arXiv HTML 中可靠披露
- Chris Donahue：机构信息未在 arXiv HTML 中可靠披露
- Dasaem Jeong：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

节奏游戏谱面生成要求根据录音输出一系列带时间的操作，时间多与可听到的音符起始重合，但作者还要选择标记哪些声音、强调方式与难度曲线，因此同一录音允许多个合理谱面，这使任务介于转录与符号音乐生成之间，时间对齐与类型选择需同时兼顾听感与可玩性。论文研究两类迁移，第一类冻结预训练音频编码器，只训练线性投影层与Transformer解码器，解码器以音频表示为交叉注意力条件，按5秒分段逐段生成含时间戳与类型标记的token序列，再拼接成完整谱面并以星级难度为条件控制密度。音频侧对比自动音乐转录模型MuScriptor与YourMT3+、自监督音乐编码器MERT与从零训练的卷积循环与Transformer编码器，以检验定位起始点的转录表示能否直接带来更准的时间与类型，其余解码器、数据与指标保持一致。跨游戏侧以同一模型联合训练osu!内三种模式并共享时间戳词表，再以mania加Clone Hero联合为对照，以检验共享操作形式在谱面风格与音乐分布不同时能否依然迁移。与相同结构从零训练相比，冻结MuScriptor在standard上事件F1从0.323升至0.433，osu!三模式联合使mania事件F1从0.492升至0.506，而加入Clone Hero则降至0.482。结论适用范围限于所用osu! ranked谱面与Chorus Encore吉他谱，以及25 ms容差与给定难度条件、推理沿用原谱拍速点换算滑键长度的生成设置，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://catboy.best> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.enchor.us> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 节奏游戏谱面要从音频里决定什么

节奏游戏的输入是一段录音，输出是一张谱面，也就是按时间排列的动作序列。每个动作至少有一个时间，在不同玩法里还带有一个通道、类型或 2 维位置。比如 osu!的 standard 把圆圈自由放在 2 维场地上，taiko 是单通道的鼓点，mania 是四列上的点按或长按，Clone Hero 是吉他式的品位加拨弦。谱面必须保留可玩性，时间要落在听众能听到的发声处，类型要和声音性质对应，整体密度和难度要符合标定的星级。

论文强调谱面不是唯一的正确转录，同一首歌可以有多张都合理的谱面，作者会选择标哪些声音、强调什么、难度如何起伏。所以任务处在转录和符号音乐生成之间，既要听准，又要做解释。

**谱面 × 自动音乐转录 × 时间戳：** 谱面是带时间的动作序列，每个动作有时间戳和类型；自动音乐转录负责找出录音里音符的开始时间；时间戳是把连续时间切成约 10 毫秒一格的离散位置。谱面里大多数时间戳正好落在可听见的音符开始处，所以转录能提供对齐耳朵，但谱面还要做取舍和难度设计，这是转录本身不决定的部分。

对刚入门的同学，可以把谱面想象成老师给的例子：录音是课文朗读，谱面是老师划的重点。重点大多落在关键词的开头，这对应音符开始，但划哪些词、划多密，取决于老师想让这节课多难。自动谱面生成就是学着当老师，听录音后输出带时间和类型的重点序列。评价时既看时间找得准不准，也看类型放得对不对，还要用模型给参考谱面的似然来照顾 1 对多的合理性。

### 以前的谱面生成走了哪两条路

论文梳理了两条已有路线。第一条是 2 阶段流水线，先找时间再定类型。Dance Dance Convolution 的卷积加循环网络先找时间，mania 上也有支持向量机找时间加规则放列，或在模糊时间标签上训练的卷积循环网络，后来有人加入节拍条件和多时间尺度改进时间阶段，有人用基于时间的切分去匹配人类谱面的节奏再复制类型。从 Dance Dance Convolution 到基于时间切分的方法，类型阶段只看时间和节奏特征，不直接听音频。第二条是联合预测时间和类型，比如 TaikoNation 和 AutoOsu，以及把谱面写成词序列的端到端做法，它们都把难度标签作为输入，这和本文用星级难度的条件是一致的。

在表示迁移上，已有工作试过冻结神经音频编解码器，或微调语音与音乐理解模型，但都没有和从零训练的同结构编码器在同解码器、同数据、同指标下比较。Mapperatorinator 一类的社区系统在一个类 Whisper 结构上训练 4 个 osu!模式，但没有发表评测。唯一已发表的跨游戏迁移是在同为四键的 osu!mania 和 StepMania 之间做预训练加微调。

也就是说，不同场地的玩法之间能否迁移，当时还没有被测量过。更关键的是，以前借用的预训练任务是压缩、语音识别或一般音乐理解，没有一个是自动音乐转录，而谱面时间大多是音符开始，这正是转录模型被训练去定位的量。

### 论文要回答的两个迁移问题是什么

论文把问题拆成两个迁移维度。第一个维度是音频编码器能否从预训练里借力，特别是从自动音乐转录模型里借力。做法是把预训练编码器冻结，只训练线性投影和 Transformer 解码器去写谱面，然后和从零训练的编码器在完全相同的解码器、数据和指标下比较。如果冻结的转录编码器更好，且同结构下只差在编码器权重，就能把增益归于预训练而不是结构。第二个维度是跨游戏和跨模式迁移，做法是把 standard、taiko、mania 放在一个模型里联合训练，看谱面最少的 mania 是否受益，再把 mania 和玩法外形相似但跟谱习惯不同的 Clone Hero 放在一起，看相似物件是否足够带来增益。

输入处理上，每首歌被切成不重叠的 5 秒段，这正好是 MuScriptor 的输入窗。每段谱面写成一个词序列，段内时间戳是 500 个约 10 毫秒一格的位置，taiko 每个音符是时间加 6 种类型之一，mania 是时间加四列之一加 3 种类型，Clone Hero 是时间加 5 个品或空拨之一加 4 种类型，standard 则把 512 乘 384 的场地按 16 量化成横向 32 纵向 24 个位置，圆圈加坐标，滑条加曲线类型、锚点、拍数长度和折返数，转盘不加坐标。mania 里跨段的长按会在段首加一个词说明哪些列正被按住。联合模型取各模式词表的并集并共享时间戳，3 个 osu!模式并集是 606 个词，mania 加 Clone Hero 是 536 个词。

### 系统从音频到谱面词序列经过了什么

整个系统的输入是 5 秒音频段，输出是该段的谱面词序列，多段结果拼接成整首歌的谱面。音频先经过编码器变成特征帧，再经线性投影和层归一化对齐到解码器维度，解码器在星级难度和模式的条件下自回归地一次预测一个词。推理时还用到谱面自带的 timing points，也就是速度和拍位信息，但论文明确说它们不是模型输入，也不改变音符时间，只把滑条的拍数长度换算成时间，这样比较就不依赖节拍跟踪。采样用核采样，standard 用温度 1.1 和阈值 0.9，taiko 和 mania 用 1.0 和 0.8，因为同样节奏在 standard 里可以有多种合理落点，需要更发散的采样。

下图是论文给出的系统总览，先看主路径再看分支对比，有助于理解冻结和从零训练的区别。

> **看图路径：** 1. 先从顶部音频输入沿箭头看到音频编码器，再看到线性加层归一化到解码器；2. 对比左侧冻结预训练分支的三个候选与右侧从零训练的两个候选；3. 注意解码器框里星级难度和模式两个加号输入，以及右侧虚线回路的已生成词

[![原论文 Figure 1：Overview of the system.](https://arxiv.org/html/2610.14955v1/system_v7.png)](https://arxiv.org/html/2610.14955v1/system_v7.png)

*论文图 1。原论文 Figure 1:：“Overview of the system.”。*

图中顶部是波形表示的音频输入，向下进入大的音频编码器框。框内左侧是冻结预训练分支，列出 YourMT3+ 编码器输出、MuScriptor 某层隐状态、MERT 某层隐状态 3 个候选，右侧是从零训练分支，列出卷积循环和类 MuScriptor Transformer 两个候选。编码器输出经过线性加层归一化进入 Transformer 解码器，解码器框内标出交叉注意力、星级难度加号和模式加号，以及已训练标记。解码器向下输出从起始符到终止符的谱面词序列，右侧虚线把已生成词送回解码器，表示自回归。注意冻结分支在图里带雪花标记，从零和解码器带火焰标记，含义是前者不动、后者要学。

**冻结编码器 × 线性投影 × Transformer 解码器：** 冻结编码器指预训练好的音频网络参数不再更新，只负责把音频变成特征帧；线性投影加层归一化把不同编码器的帧维度对齐到解码器维度；Transformer 解码器用交叉注意力看音频特征、用自回归预测下一个谱面词。三者分工是耳朵不动、转接头对齐、写谱的人只训练转接头和写谱部分。

### 三种冻结编码器各提供了什么样的特征帧

论文比较了 3 个冻结编码器，取的都是隐状态而不是转录出的离散音符表，理由是让解码器看到表示本身。MuScriptor 是只解码器结构的 Transformer，以 5 秒梅尔谱为前缀，取 24 层中第 19 层的隐状态，经线性 onset 探针选出，给出每秒 100 帧、每帧 1024 维、共 501 帧的特征。YourMT3+ 用 Perceiver 结构的编码器，把 2.048 秒谱图映射成 110 帧每帧 24 个隐变量再展平成每帧 3072 维，因为窗口比 5 秒段短，就以 55 帧约 1.03 秒为步长滑窗并只保留中间 55 帧，最后给出每秒 53 帧、共 267 帧的特征。

MERT 是直接吃 24 千赫波形的自监督编码器，同样用探针选出 24 层中第 6 层，给出每秒 75 帧、每帧 1024 维、共 374 帧的特征。3 个编码器全部冻结，只学它们到解码器之间的线性投影和层归一化，论文说在预实验里微调整个编码器会在他们的数据上过拟合。

**起始符 × 终止符 × 星级难度：** 起始符和终止符标出一段 5 秒谱面词序列的开头和结尾，让解码器逐段独立生成后再拼接；星级难度是 osu!自带的难度标量，越高越难，经两层网络变成向量加到每个词嵌入上。起始符管边界，星级难度管生成多密多难，两者一起控制同一段音频在不同难度下写出不同谱面。

举个例子帮助复述，一段 5 秒的鼓点录音进入 MuScriptor 后变成 501 个向量，每个向量概括了约 10 毫秒附近的声音，解码器每写一个词都会用交叉注意力回看这 501 个向量，再结合已写的词和难度条件决定下一个是时间词还是类型词。冻结意味着这 501 个向量的写法在谱面训练中不变，模型只学怎么看它们。

### 从零训练的两个编码器为什么要设两个

为了公平，论文设了两个从零训练的对照。第一个是 Dance Dance Convolution 风格的卷积循环网络，两层卷积加两层循环，输入是 3 种窗长的 3 通道对数梅尔谱，每 10 毫秒一跳，参数量约 0.7M，加宽到约 11.4M 的版本在验证集上也没有更好，说明不是把模型做大就能追上。第二个是为了隔离预训练的作用，特意做了和 MuScriptor 前端和结构相同但随机初始化的 Transformer，19 层因果层宽 1024，对应到 MuScriptor 第 19 层之前。这样它和冻结 MuScriptor 吃同样的单通道对数梅尔谱、走同样的结构，唯一区别是编码器权重是随机学出来的还是预训练带来的。

如果冻结版更好，就能说增益来自预训练任务学到的东西。解码器方面，单模式实验在 standard 用 6 层 512 维，在 taiko 用 4 层 256 维，联合模型和 mania 相关模型统一用 8 层 768 维，这样跨行比较时只有训练数据不同。

### 训练时优化了什么以及怎么抽样和选模型

训练目标是下一个词的交叉熵，用 Adam 优化，批量 64，学习率 0.0003 加权重衰减 0.0001，学习率先在前 2% 步数线性热身再余弦衰减到零。standard 和联合模型跑 800000 步，taiko 跑 450000 步。联合模型按各模式训练样本比例抽样，mania 约占 26%，mania 加 Clone Hero 的模型保持这个比例。还做了两种平衡，一是把每首歌按 1 秒间隔切 5 种偏移混在一个批量里做增强，二是按星级区间用逆频率加权抽样，Clone Hero 没有明确难度就按音符密度加权，让稀有难度和常见难度都能被看到。选模型只看验证集损失最低的检查点，联合模型看的是所有模式的总验证损失。

**联合训练 × 模式嵌入 × 按样本比例抽样：** 联合训练指把 standard、taiko、mania 三种谱面放在一个模型里一起学；模式嵌入是加到每个词上的可学向量，告诉解码器现在写的是哪种玩法；按样本比例抽样决定每个模式被抽到的频率，mania 约占 26%。模式嵌入区分玩法，抽样比例维持数据平衡，两者让共享解码器既能共用时间感又不混淆规则。

难度条件的做法值得单独记。星级经两层网络映射成和模型同维的向量，加到每个词嵌入上再做层归一化，最后一层零初始化让训练开始时条件不起作用。联合模型再加一个同样零初始化的模式嵌入。零初始化的用意是先让模型学会不依赖条件也能写，再慢慢学会用难度和模式去调整密度和规则。

### 数据从哪里来以及怎么划分才不泄漏

osu!数据取 2019 年 5 月到 2025 年 12 月之间通过排名流程的谱面集，保留其中的 standard、taiko 和四列 mania 谱面。来源脚注指向 catboy.best 的检索页，Clone Hero 数据用 Chorus Encore 语料，只保留每张谱的专家级主音吉他声部，来源脚注指向 enchor.us。论文按归一化标题加音频校验和把同一首歌归组，再按歌曲分 80%、10%、10%，同一首歌在不同模式下放在同一划分里，避免同一录音同时出现在训练和测试。Clone Hero 用语料自带的划分，并抽了 210.6 小时，和 taiko 加 standard 的量相当。

下表是论文报告的数据规模，先看比较问题是各模式和跨游戏的数据量是否可比，再看星级范围和每歌谱面数。

| Mode | Songs | Charts | Charts/song | Hours | Stars |
| --- | --- | --- | --- | --- | --- |
| standard | 2,111 | 8,687 | 4.12 | 117.9 | 1.03–13.15 |
| taiko | 1,845 | 7,734 | 4.19 | 92.6 | 0.63–10.36 |
| mania | 1,955 | 6,268 | 3.21 | 99.5 | 0.59–10.07 |
| Clone Hero | 2,782 | 2,782 | 1.00 | 210.6 | — |

表里 standard 有 2111 首歌 8687 张谱，每歌约 4.12 张，共 117.9 小时，星级从 1.03 到 13.15；taiko 有 1845 首歌 7734 张谱，每歌约 4.19 张，共 92.6 小时；mania 有 1955 首歌 6268 张谱，每歌约 3.21 张，共 99.5 小时，是三者里谱面最少的，这正是后面把 mania 当迁移受益方的原因；Clone Hero 有 2782 首歌 2782 张谱，每歌只有 1 张，共 210.6 小时，没有星级。解释这张表的限制时要记住，小时数多不等于谱面多，Clone Hero 一歌一谱的风格和 osu!一歌多难度多谱面的风格不同，直接比小时会误判监督信号的密度。

### 生成时怎么评时间准和类型对

评测时对测试集每张参考谱按它的星级生成一张谱。时间比较用 25 毫秒容差的一一匹配，按时间顺序让每个生成打击去占最早的未匹配参考打击，这种贪心能达到转录里最大匹配的标准做法。mania 里同时的多个音符算多个打击。在此基础上报告打击的准确率、召回率和 F1，以及事件 F1 和类型准确率。事件 F1 要求时间和类型都对，类型指各模式编码的类型，所以 mania 的列和 standard 的位置不在事件 F1 里。

类型准确率只在已匹配的时间对上算。因为一首歌有多张合理谱面，还报告模型给参考谱的负对数似然，用教师强制的每词交叉熵表示，能覆盖多种合理性。另外用人类谱面两两比较做参照，较简单的那张充当生成谱，分别看相邻星级和任意两张的结果。

**打击 onset × 事件 × 类型准确率：** 打击是指谱面里一个发声时刻，不管它是什么物件；事件是时刻加类型一起算对，比如 taiko 里鼓点是 don 还是 kat 要对；类型准确率只在时刻已配对成功的前提下看类型对了多少。三者层层收紧，分别回答时间找得准不准、时间和玩法一起对不对、时间对了以后物件选得好不好。

初学者容易把打击 F1 和事件 F1 混为一谈。打个比方，打击 F1 只看有没有在鼓点上敲，事件 F1 还要看敲的是低音鼓还是高音鼓。论文后面 MERT 和 MuScriptor 在打击上接近、事件上有差距，说的正是时间都找到了，但落子选得不一样准。

### 冻结转录编码器比从零训练好在哪里

要回答的核心比较是编码器相同解码器下谁更贴近人类谱面。论文在 standard 和 taiko 上都报告，冻结 MuScriptor 在负对数似然、事件 F1 和类型准确率上优于卷积循环网络，打击 F1 相当；和同结构的随机初始化 Transformer 比，事件 F1 从 0.323 升到 0.433，负对数似然也更低。因为输入和结构相同，增益只能来自预训练权重。两个转录模型里，MuScriptor 在两个模式的所有分数上都领先 YourMT3+，而 MuScriptor 本身在帧级转录上更强，这支持转录质量会连带提升谱面质量，包括时间和物件两部分。

下表整理原文直接报告的关键数字，比较问题是同解码器下预训练是否带来增益，指标方向是事件 F1 越高越好。

| 比较维度 | 编码器条件 | 同结构起点事件 F1 | 冻结后事件 F1 | 原文结论 |
| --- | --- | --- | --- | --- |
| standard 同结构对比 | MuScriptor 冻结相对随机初始化 | 0.323 | 0.433 | 预训练带来增益 |
| 跨编码器定性对比 | MERT 相对从零训练 | 从零训练更低 | 与 MuScriptor 打击接近但类型稍低 | 预训练占大头，转录目标小幅改善落子 |

从收益和代价看，这组对比意味着只训练约 0.5M 的投影就能超过训练约 240.2M 的 Transformer，训练量和过拟合风险都小。代价是编码器完全不动，如果目标游戏的音乐和转录预训练差距很大，冻结表示可能不够灵活，论文没有报告解冻后能否在更大数据上反超。限制是这里只在 standard 和 taiko 上做了编码器对比，mania 的编码器结论是沿用 MuScriptor 的选择，而不是重新比一遍。未胜出项是 YourMT3+，它在所有分数上都不如 MuScriptor，说明不是任意转录模型都一样好。

### 自监督编码器和转录编码器差在什么地方

第二个要回答的问题是预训练本身和转录目标各占多少。MERT 是没有转录标签的自监督音乐编码器，它在所有分数上也超过从零训练的 Transformer，在打击 F1 上和 MuScriptor 相当，但在两个模式的类型准确率上都更低。这说明大部分增益来自预训练这件事，转录目标只是在每个时间上放什么物件这一步再推一把。论文的措辞很克制，说预训练解释了大部分超过从零训练的增益，转录目标小幅改善了落子。

对初学者来说，可以这样复述，耳朵灵不灵决定能不能卡准时间，懂不懂乐器决定敲下去是什么音。MERT 把时间听得很准，MuScriptor 还多懂一点音符身份，所以在类型上多对一点。这个差距在 standard 和 taiko 两个场地都出现，不是某一个玩法的偶然。适用条件是结论依赖 25 毫秒容差和事件定义，如果换更严的容差或把位置列也算进事件，差距大小可能会变，论文没有给出那种设定下的数字。

### 三个 osu 模式联合训练给谁带来了提升

跨游戏部分把 mania 当作受益方，因为它的谱面最少。固定 MuScriptor 编码器和 8 层 768 维解码器，只改变训练数据，mania 单独训练和 mania 加 standard 加 taiko 联合训练相比，打击 F1 从 0.728 升到 0.738，事件 F1 从 0.492 升到 0.506。论文还排除了训练步数的解释，单独模型跑满 800000 步也只有 0.728 和 0.491，和跑 208544 步基本一样。单独模型的负对数似然反而更低，0.473 对 0.501，但这是因为联合模型的检查点是按所有模式的总验证损失选的，不是按 mania 最优选的。按物件拆开看，提升落在三模式共享的点按上，从 0.599 升到 0.612，而长按的开始和结束两类反而下降。

下表整理跨游戏联合的关键数字，比较问题是同样模型下只换训练数据能否提升谱面最少的模式。

| 训练数据 | 打击 F1 | 事件 F1 | 原文判断 |
| --- | --- | --- | --- |
| 仅 mania | 0.728 | 0.492 | 基线 |
| mania 加 standard 加 taiko | 0.738 | 0.506 | 有提升 |
| mania 加 Clone Hero | 0.707 | 0.482 | 低于基线，无益 |

表后解释要带上反例和限制。收益是跨玩法共享了时间感，代价是长按两类变差，说明共享主要帮了最常见的点按。反例是 mania 加 Clone Hero 把两项分数拉到 0.707 和 0.482，都低于单独训练。限制是联合模型的词表、抽样比例和选检查点方式都和单模型不同，负对数似然的比较并不完全公平。尚未评测的是如果按 mania 最优选检查点，联合的似然差距会不会缩小，论文没有报告。

### 为什么外形相似的 Clone Hero 没有帮上忙

Clone Hero 和 mania 都是按通道落子，外形相似，但联合后反而变差。论文推测有两个不同。一是跟谱习惯不同，Clone Hero 跟单一声部的旋律，多为吉他，osu!3 个模式跟整首歌的节拍并在乐器间切换，同样音频下谱的是不同东西，下降主要落在时间而不是类型上，3 个模型的事件 F1 与打击 F1 之比都在 0.68 到 0.69 之间，说明类型给定时间后的准确度没变，丢的是时间本身。二是音乐覆盖不同，Clone Hero 里金属和摇滚占 69%，mania 里电子、动漫和游戏音乐占 70%。所以共享物件只有在谱什么和谱什么音乐都一致时才有用。

这个结论成立的条件要讲清。它依赖 25 毫秒的事件定义、只用专家级主音吉他声部、按音符密度代替星级做条件，以及 210.6 小时的特定语料构成。如果换鼓谱、换难度、换风格比例，结论可能不同。论文自己也把这部分写成推测，用的是可能和一致的措辞，没有做因果验证。初学者不要把外形相似等同于任务相似，通道数 1 样不代表耳朵该听的地方一样。

### 这些结论在什么边界外就不能用了

先说直接报告和推测的边界。编码器部分直接报告的是冻结 MuScriptor 在 standard 和 taiko 上优于同结构从零训练和卷积循环网络，以及 MuScriptor 优于 YourMT3+ 和 MERT 在类型上略优于 MERT。跨游戏部分直接报告的是三模式联合提升 mania 的打击和事件 F1，而 mania 加 Clone Hero 降低两项。推测的是转录质量传导和跟谱习惯加音乐风格导致跨游戏失败，这两处都没有干预实验。

再说测量边界。所有时间分数都绑在 25 毫秒容差上，事件不计 mania 的列和 standard 的位置，采样温度和阈值是预实验选的，standard 更发散。换容差、换事件定义、换采样都会改数字。数据边界是 osu!只用到 2019 到 2025 年通过排名的谱面，Clone Hero 只用专家级主音吉他，划分按歌曲不泄漏，但风格分布差异很大。

没有测量的是延迟、推理成本、人工可玩性评价，以及解冻编码器在大规模数据上的表现。训练资源只给了步数、批量和优化器，没有给硬件和时长，所以不能从本文承诺训练多快或推理多便宜。

### 要复现第一步该准备什么

复现第一步不是先调模型，而是先把数据和切分做对。按论文做法，把 osu!谱面集按归一化标题加音频校验和归组，按歌曲分 80%、10%、10%，同一首歌在不同模式下放同一划分，Clone Hero 用语料自带划分并只取专家级主音吉他。每首歌切成不重叠的 5 秒段，段内时间量化成 500 格，mania 跨段长按要在段首加已按住集合，standard 按 16 量化坐标并保留滑条的拍数长度和折返数。音频特征按编码器要求准备，MuScriptor 取第 19 层，MERT 取第 6 层，YourMT3+ 按滑窗取中间帧，全部冻结后只训练线性投影、层归一化和解码器。难度条件用星级经两层网络加到每个词嵌入，最后一层零初始化，联合模型再加模式嵌入。

训练按下一个词交叉熵，用 Adam 批量 64 学习率 0.0003 权重衰减 0.0001，前 2% 热身后余弦衰减，standard 和联合跑 800000 步，taiko 跑 450000 步，联合按样本比例抽样并对星级或密度做逆频率平衡。评测时按参考谱星级生成，用核采样，standard 用 1.1 和 0.9，其他用 1.0 和 0.8，滑条拍数用自带拍位换算成时间但不改变时间分数。来源方面，论文脚注提到的两个链接在本次核验中是第三方可达，不代表作者已开源代码或权重，代码开源、权重可下载、系统可运行要分开确认，本篇没有给出可运行仓库的证据。

### 什么时候值得试以及还缺哪项验证

什么时候值得试，答案藏在条件里。如果你的谱面时间大多是可听见的音符开始，且标注谱面不多，值得试冻结的转录编码器加小解码器，因为它只学很少的投影就能贴近人类谱面。如果你的多个玩法都跟整首歌的节拍且音乐风格接近，值得试联合训练去帮谱面最少的那个玩法，预期提升在事件 F1 上约 0.014，论文里是从 0.492 到 0.506。如果目标游戏跟的是单一声部旋律，或音乐风格差异很大，即使通道外形相似也不要指望联合有提升，论文里反而从 0.492 掉到 0.482。

还需要补的验证有三项。一是把转录质量和谱面质量的关联做成可控对比，而不是只看 2 个模型的排序。二是把跟谱习惯和音乐风格拆开，找风格接近但习惯不同、习惯接近但风格不同的配对，才能说清跨游戏失败的主因。三是补人工可玩性评价和更严容差下的表现，因为自动分数不等于好玩，位置和列的准确度在当前事件定义里没有被惩罚。常见误解是把负对数似然更低等同于生成更好，论文里 mania 单独模型的似然更低但 F1 更低，原因是选检查点的目标不同，两者要分开看。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.14955v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
