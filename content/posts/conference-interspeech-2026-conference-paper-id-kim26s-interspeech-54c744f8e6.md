---
title: "Do Modern Video-LLMs Need to Listen? A Benchmark Audit and Scalable Remedy"
date: 2026-09-27
draft: false
description: "论文用单帧静音探针审计 10 个视频基准揭示视觉捷径，再在 LLaVA-OneVision 上外挂语音编码器并以因果 Mamba 周期查询把 25 Hz 音频压到 1 Hz，在过滤后语音与跨模态任务上取得稳定增益而视觉任务基本不受影响，代价是延迟从 1.00 秒升至 1.60 秒。"
tags: ["模型压缩", "评测协议", "状态空间模型", "音视频问答"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:kim26s_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/kim26s_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/kim26s_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "bb16e6d906a8bde7248cb9adad60e540a11cb613d49fbe52369bd1707b517356"
paper_digest_api_reader_plan_sha256: "4d0d41b45fcadcca983afb9026dcc83daed6f39730d2c2e4beafb31621df252c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "89131fb46db4a9c5f82807834852f9ab4d9a2901ed39f5fa7b122d95ce4fa09e"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5feb77283497febe59cdbcc413017d88a33ead5dab349048f84d019b1bd82bc3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e0e7a0d128f0c92bc23519191c6fd49d49a9ed6eaf3c2aa32eb434a913e54f2f"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "716ecf3aa4ff268554b9e43108f1931d93b4d550ef1bc1d97f828e5c54c536bf"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.compression","label":"模型压缩"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "模型压缩"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 不听也能答：视频基准的视觉捷径与 25 倍音频压缩的补救

> 英文题目：*Do Modern Video-LLMs Need to Listen? A Benchmark Audit and Scalable Remedy*

> 会议身份：`conference:interspeech:2026:conference-paper-id:kim26s_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/kim26s_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/kim26s_interspeech.pdf)

标签：#模型压缩 #评测协议 #状态空间模型 #音视频问答

评分：**7.7/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.5/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Geewook Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Minjoon Seo：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

视频问答输入为采样视频帧加连续语音与环境声，输出为自然语言答案，难点在于讲座与会议等长视频必须依赖听觉，而25 Hz音频前端一小时即产生约9万标记，迅速耗尽上下文并形成具体瓶颈。作者先用无音频中央单帧送GPT-4o两次独立判对即剔除的保守探针系统性审计10个基准，量化视觉捷径并发布过滤划分。再在LLaVA-OneVision上外挂Qwen2-Audio的Whisper系编码器，经周期查询压缩器降采样至约1 Hz，最后按时间对齐交错送入Qwen2-7B统一推理。与平均池化、注意力重采样、单向与双向Mamba相比，因果门控Mamba即UniMambaMia在保持因果性的同时退化最平缓，可兼容流式推理并保留时序共现。在Music-AVQA基准下，本文模型的得分为79.5，高于Qwen2.5-Omni的得分45.7。结论仅适用于语音理解与跨模态 grounded任务，视觉中心基准增益消失甚至轻微干扰，这明确了其适用边界。延迟在单张A100 80GB上VideoMME平均耗时本文模型1.60 s，Qwen2.5-Omni为4.12 s，峰值显存分别约34 GiB与约62 GiB。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要保留什么？

本文的输入是带声音的视频与自然语言问题，目标是让视频大语言模型在回答时真正用到语音与音频线索，而不只是看画面猜答案。读者对象是刚进入语音音乐音频领域的研究生，因此需要先把链路讲清：波形转特征、视觉帧转 token、两者如何拼成大语言模型的输入序列。论文要保留的关键信息有 3 类。第一是审计证据：用单帧静音探针测出 10 个基准中有大量题目不听也对，例如 AVQA 约 76% 可由单帧答对。

第二是建模动作：在 LLaVA-OneVision 上外挂 Qwen2-Audio 的 Whisper 风格编码器，只用编码器不用其完整音频大语言模型，再以 25 倍压缩把 25 Hz 压到 1 Hz。第三是实验条件：32 帧按 1.0 帧每秒采样、编码器冻结、3 随机种子平均、区分过滤前与过滤后分数。本文不做营销式判断，只按原文复述可核对的动作与数字。资源状态方面，本次未发现来源绑定且完成验证的资源，因此不得声称代码模型数据已公开，只能说原文写了将开源仓库地址。

后续各节按学习依赖展开：先讲任务与相关路线，再讲审计问题与方法全景，然后讲压缩组件与训练推理，最后讲实验条件结果反证与复现收束。

### 同输入同目标的已有路线在做什么？

视频大语言模型路线以 LLaVA 系列与 Qwen-VL 系列为代表，典型做法是默认按无音频的视频转文本评估，在训练与评测中静音处理。论文指出这种做法不是因为语音编码器不行，而是因为主流基准不要求听。另一条路线是音频视觉模型，例如 VideoLLaMA2 依赖学习查询重采样来压缩 token，但其压缩研究多集中在 2 维视觉 token，对 1 维因果音频 token 缺乏系统比较。基准路线可分为 3 类。第一类是视觉中心套件，如 ActivityNetQA、NExTQA、TempCompass，主要考视觉识别与时间结构。

第二类是标榜音频视觉问答的套件，如 AVQA 与 Music-AVQA，但论文审计显示它们仍存在严重单帧捷径。第 3 类是近年更紧耦合音频视觉线索的套件，如 AV-Odyssey、OmniBench、SAVVY、AVSpeakerBench 与 WorldSense，论文用它们来检验真听力。压缩路线上，视觉侧已有聚合、学习查询重采样与状态空间模型等做法，从稀疏采样转向保留更多帧再压缩。本文的差异是首次系统比较音频 token 的 5 种压缩结构，并追问视觉上有效的双向设计是否能搬到因果音频流。

理解这 3 条路线后，才能明白本文为何既做基准审计又做压缩器对照，而不是只加一个音频编码器就结束。

### 为什么很多题不听也能答对？

论文提出的第一个问题是当前基准是否真的需要听。为此设计了一个保守的单帧探针。具体动作是只取时间中心的 1 帧，不给音频也不给其他帧，送给 GPT-4o 的固定版本在两种不同温度下各跑 1 次，只有 2 次都答对的题目才被判为单帧可解并在过滤子集中去掉。同时用拒绝感知的解析器把我无法判断这类拒绝回答不计为正确，避免拒绝文本中偶然出现选项字母被误判为猜对。

这个设计是下界估计：它只去掉确定能靠单帧答对的题，剩下的题不一定都必须听，但至少去掉了最明显的视觉捷径。
审计结果显示过滤率差异很大。TempCompass 约 80%、AVQA 约 76% 可由单帧答对，而 WorldSense 只去掉约 4%、AVSpeakerBench 只去掉约 1%，几乎全部保留。论文举例 AVSpeakerBench 中谁说话最轻的问题：判断谁在说话需要听，定位灰色毛衣的女人需要看，单帧无法同时解决。教学上可以这样理解：若一个基准大部分题看一张图就能答对，那么在此基准上加音频没有提升也不能证明音频无用，只能证明基准没有给听的机会。

**单帧探针 × 视觉捷径：** 单帧探针负责只给时间中心 1 帧且静音去测基准是否可答，视觉捷径负责解释为何不听不看全片也能猜对，二者搭配的原因是只有先量化捷径比例，才能判断后续加音频的增益是真听懂还是沾了视觉的光，组合意义是给出过滤前后对照的公平尺子。

以下导读先看审计分布的整体形状，再看首尾两端的极端对比，该图是后文过滤前后对照的依据。

> **看图路径：** 1. 从横轴百分比读出各基准单帧可解比例的高低排序；2. 对比顶部 TempCompass 与 AVQA 长条与底部 WorldSense 和 AVSpeakerBench 短条；3. 注意中间 Music-AVQA 与 VideoMME 等黄色中段的位置；4. 把该分布与后文过滤后分数下降幅度对应起来

[![原论文 Figure 3：Fraction of items solvable from a single muted frame (GPT-4o, two runs at different temperatures,…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8a3fd901e2b4/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8a3fd901e2b4/figure-2.png)

*论文图 2。原论文 Figure 3：“Fraction of items solvable from a single muted frame (GPT-4o, two runs at different temperatures, both correct).”。*

该图显示横轴为单帧静音可解比例，纵轴为 10 个基准。顶部红色长条对应 TempCompass 与 AVQA，说明传统与早期音频视觉套件捷径最重；中部黄色对应 Music-AVQA 约 45.2%、VideoMME 约 35.9%、ActivityNetQA 约 31.3% 等；底部蓝色短条对应 LongVideoBench 约 24.0%、WorldSense 约 4.0%、AVSpeakerBench 约 1.4%，说明新套件更需要跨帧或跨模态信息。读图时不要把比例直接等同于音频依赖度，它只是视觉捷径的下界，但它解释了为何后文 AVQA 过滤后分数从约 92 掉到约 73。

### 整体链路如何从视频走到答案？

论文以 LLaVA-OneVision 为底座，视觉侧用 SigLIP2 编码器，每帧 384 乘 384 产生 576 个 token，对齐到 Qwen2-7B 大语言模型。音频侧用 Qwen2-Audio 的基于 Whisper 的编码器，只用编码器部分：原始波形先转对数梅尔谱，再经 Transformer 堆栈与平均池化得到 25 Hz 特征。即使在这个码率下，1 小时视频也会产生约 90K 音频 token，直接送入会迅速占满上下文，这就是必须压缩的动机。
输入序列有 3 种策略。第一是纯视觉，只有视觉 token。

第二是非交错，把全部视觉 token 放前面、全部音频 token 放后面。第三是时间对齐交错，把音频 token 放到时间对应的帧 token 旁边。论文比较这 3 种，是为了分离两个问题：加音频是否有用，以及音频放在哪里更有助于时间共现与流式推理。

**语音编码器 × 视频大语言模型：** 语音编码器负责把波形经对数梅尔谱与 Transformer 堆栈转成 25 Hz 音频特征，视频大语言模型负责把 SigLIP2 视觉 token 与大语言模型对齐，二者搭配的原因是原视频链路默认丢掉音轨导致讲座会议类问题缺信息，组合意义是让模型同时看到帧与听到语音再统一送入大语言模型推理。

以下导读先沿输入到输出的主路径看，再比较 3 种序列排布，该图是理解交错与非交错差异的起点。

> **看图路径：** 1. 沿左侧胶片与波形看到视觉 V1-V3 与音频 A1-A3 两条输入分支；2. 对比右侧三种送入大语言模型的序列排布差异；3. 确认交错是 V1 A1 V2 A2 交替而非交错是 V 全在前 A 全在后；4. 记住音频分支标注可经图 2 压缩后再送入

[![原论文 Figure 1：Three input policies for feeding vision and audio to- kens to the LLM.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8a3fd901e2b4/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8a3fd901e2b4/figure-1.png)

*论文图 1。原论文 Figure 1：“Three input policies for feeding vision and audio to- kens to the LLM. Audio tokens may be compressed via Fig. 2.”。*

该图左侧画出视频胶片与声波分别经投影得到 V1 到 V3 与 A1 到 A3，右侧画出 3 种送入大语言模型的排布。纯视觉只有 V1 V2 V3；非交错是 V1 V2 V3 后接 A1 A2 A3；交错是 V1 A1 V2 A2 V3 A3 相间。像素上可用方框与圆圈区分视觉与音频，交错的优势在后文被表述为保留时间共现，且配合因果压缩器是唯一支持音频随视频帧增量到达的流式配置。需要记住的是本图尚未画压缩细节，压缩发生在音频 token 进入大语言模型之前，由下一节的周期查询模块完成。

### 周期查询如何把 25 Hz 压到 1 Hz？

压缩模块插在音频编码器与大语言模型之间。核心想法是周期查询设计：给定音频特征序列与步长 R，每隔 R 步插入一个共享可学习查询，把增广序列送过两层压缩网络，只保留查询位置的输出，其余位置丢弃。这样得到 R 倍缩减，输出长度约为原长除以 R，并与墙钟时间对齐。当 R 取 25 时，1 小时约 90K token 被压到约 3.6K，即每秒约 1 个 token。论文强调虽然查询参数共享，但每个查询吸收的上下文不同，因此输出并不相同。

5 种压缩结构共享相同的输入输出形状以保证公平。平均池化是无参数基线，后接多层感知机投影，约 17M 参数；重采样器是基于注意力的学习查询压缩；单向 Mamba 是因果状态空间模型；双向 Mamba 是视频 token 常用但用于音频的双向变体。

UniMambaMia 是把视频侧 MambaMia 的双向主干换成因果 Mamba，同时保留门控注意力按池化上下文重加权压缩 token，学习型压缩器各约 130M 参数。选择因果的关键理由是流式：音频在实际应用中随时间增量到达，双向需要未来上下文，无法做流式。

**周期查询 × 压缩率：** 周期查询负责每隔 R 个音频特征插入一个可学习共享查询并只保留查询位置输出，压缩率负责决定 R 取多大与每秒剩几个 token，二者搭配的原因是 1 维因果音频不适合直接全量送入上下文，组合意义是用固定步长把 90K 量级长音频压到 3.6K 量级而保留墙钟对齐。

以下导读先看压缩器如何从波形到查询输出，再看问题示例为何必须同时听与看，该图把压缩动作与任务需求连在一起。

> **看图路径：** 1. 沿底部波形向上看周期查询方块如何每隔一段插入；2. 跟踪蓝色箭头如何把压缩后查询输出送到上部语言模型序列；3. 对照右侧谁说话最轻问题理解为何需听又需看；4. 确认图例区分压缩层绿色条与周期查询蓝色方块

[![原论文 Figure 2：Mamba-based audio compressor with an AVSpeaker- Bench \[13\] example.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8a3fd901e2b4/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8a3fd901e2b4/figure-3.png)

*论文图 3。原论文 Figure 2：“Mamba-based audio compressor with an AVSpeaker- Bench [13] example.”。*

该图下部画出声波与多段音频特征，绿色条为压缩层，蓝色方框为周期查询，每隔固定间隔取一个输出并用蓝色箭头送到上部语言模型序列。上部同时给出 AVSpeakerBench 示例：黄色问题问在说话的人中谁总体最轻，红色答案指向灰色毛衣的女人。像素上可执行观察是数查询方块的间隔是否均匀、箭头是否只指向查询位置、问题与答案的颜色标注如何对应听与看。该图说明压缩不是简单降采样，而是让每个保留 token 吸收一段上下文后再参与跨模态推理。

### 交错与因果为何要配在一起？

交错与因果是两个正交选择，但论文把它们绑在一起。交错解决的是位置问题：把音频放在对应帧旁边，大语言模型更容易学到同时发生的关系；非交错把模态分块堆放，时间对应关系要靠位置编码远距离恢复。因果解决的是方向问题：单向只看过去，双向同时看未来。在 2 维视频 token 中双向常占优，因为空间上下文前后都有用。

但在 1 维音频流中，未来信息增量有限，且会破坏流式。
论文的对照显示交错相对非交错只有适度精度提升，但作者仍采用交错，理由有两条。第一是保留时间共现，第二是只有交错加因果压缩器才兼容流式推理。双向 Mamba 在任何基准上都没有相对单向的明确优势，这进一步支持因果设计。换句话说，若只看平均分，双向与单向接近，但若考虑部署时音频增量到达，只有因果可用。

教学例子是直播字幕：模型不能等整小时音频到齐再回答，必须边到边处理，此时双向结构在推理时不成立。

**时间对齐交错 × 因果压缩：** 时间对齐交错负责把压缩后音频 token 放到时间对应的视频帧 token 旁边，非交错则是视觉全在前音频全在后，因果压缩负责只用过去信息处理音频以支持流式到达，二者搭配的原因是要同时保留跨模态共现与增量推理能力，组合意义是交错加因果成为唯一兼容流式推理的配置。

该组合的代价是压缩器需要训练对齐，且音频在视觉中心任务上可能引入轻微干扰，后文结果节会给出 ActivityNetQA 与 TempCompass 等反例。理解这一点后，就不会把交错误解为单纯的涨点技巧，而是可部署性的必要条件。

### 训练分几步，哪些参数更新？

训练分 3 段。第一段是图像级指令调优，沿用 ELVA 的做法先打好视觉与语言对齐。第二段是只训练音频压缩器的模块对齐，在 LLaVA-Video-Set 与 FineVideo-Set 的子集上更新压缩器，两个编码器保持冻结。第 3 段是解冻大语言模型做视频指令调优，视频指令数据由 LLaVA-Video-Set、FineVideo-Set、Music-AVQA 第二版训练集、音频视觉场景感知对话训练集与 AVQA 训练集构成。消融用约 188K 样本，最终模型用 420K 样本。

所有实验用 32 帧按 1.0 帧每秒采样，编码器为效率保持冻结，模块对齐学习率约 1 乘 10 的负 4 次方，大语言模型调优学习率约 2 乘 10 的负 5 次方，结果在 3 个随机种子上平均。
需要明确的是监督来源是问答与对话指令，不是音频重建或对比学习；梯度路径在第二段只进压缩器，在第 3 段才进大语言模型。原文未报告优化器细节与重置时机等缺项，复现时应按常用做法补齐并记录，不从模型名推定实现。

包含 Music-AVQA 与 AVQA 训练集并不保证对应测试集必涨，后文显示 AVQA 涨而 Music-AVQA 不涨，说明基准设计决定模型是学听还是学捷径。训练成本方面原文未给总时长与硬件预算，只给了推理延迟与峰值显存对比，因此不能用本文数字承诺训练开销的改善。

### 在什么数据与协议上测，指标方向是什么？

评估覆盖 10 个基准：视觉中心套件含 VideoMME、TempCompass、ActivityNetQA、NExTQA、LongVideoBench；音频视觉问答含 Music-AVQA、AVQA，其中 AVQA 是仓库记录的可检索约 9K 子集；近期音频视觉套件含 AVSpeakerBench、VideoMMMU、WorldSense。每个基准下方标注了近似平均与最大视频时长，例如 AVQA 约 2 分平均 45 分最大，LongVideoBench 约 12 分平均 1 小时，VideoMME 约 17 分平均 1 小时，这些时长解释了为何长视频更需要音频。
协议分未过滤与单帧过滤两套，过滤子集只去掉单帧静音 2 次都答对的题。

指标为各基准准确率，越高越好，平均分为 10 基准平均。比较条件上，表 1 的消融统一用平均池化 25 倍以隔离输入策略的影响，表 2 在交错 25 倍下比较 5 种压缩器，表 3 在统一评测下比较现代视频大语言模型并同时报告原始与过滤分数。延迟是 VideoMME 上单张 A100 80 GB 的每样本墙钟均值。统计上主结果取 3 随机种子均值与标准差。需要区分百分点与相对百分比：后文加 3.0 个百分点不是提升 3%。

不同基准分数不可直接相减跨基准排名，自动指标也不等同于人评。TempCompass 过滤后只剩 324 题，而 AVQA 剩 2194 题、VideoMME 剩 1731 题，因此小样本基准的过滤分数天然更 noisy，解读时要更谨慎。

### 加音频后哪些任务变好，哪些基本不动？

先看 token 与延迟的基本盘。1 小时视频在 25 Hz 下约 90K token，25 倍压缩后约 3.6K；未压缩送入的模型延迟明显更高。本文模型以交错加压缩把延迟控制在 1.60 秒相对纯视觉的 1.00 秒，而未压缩音频的模型达 4.12 秒且峰值显存约 62 吉字节相对本文约 34 吉字节。这说明不压缩的长音频视觉理解在实际中不可行，压缩是可扩展性的前提而非可选优化。

以下表格整理该基本盘的比较问题是：在同为 1 小时视频时，不同压缩比与是否压缩带来多少 token 与延迟差异，公平条件是同一音频前端码率，指标方向是 token 越少延迟越低越好但精度不能大跌。

| 条件 | 音频码率 | 1 小时 token | 压缩后 token | 延迟对照 |
| --- | --- | --- | --- | --- |
| 未压缩送入 | 25 Hz | ∼90K | ∼90K | 4.1 s |
| 峰值显存对照 | 25 Hz | ∼90K tokens/hour | ∼3.6K tokens per hour | ∼62 GiB vs ∼34 GiB |

该表的主要收益是 25 倍压缩把 1 小时音频从约 90K 降到约 3.6K，延迟从 4 秒量级降到 1.6 秒量级，代价是仍比纯视觉慢约 0.6 秒。

未胜出项是若视频很短或任务纯视觉，这部分额外 token 与延迟几乎不换来精度，需要按任务决定是否开音频。
再看精度。未过滤时加音频加交错在 10 个中有 6 个提升，最大的是 AVSpeakerBench 加 3.0、VideoMME 加 2.4、WorldSense 加 2.7，集中在语音理解或跨模态 grounding。过滤后 AVQA 从约 92 掉到约 73，证实大量题本就可看图答对；过滤后仍有 5 个基准明确提升：AVSpeakerBench 加 3.0 个百分点、WorldSense 加 2.7、VideoMME 加 2.4、LongVideoBench 加 1.9、AVQA 加 1.4。

VideoMME 按时长拆分后过滤增益从短的加 0.6 扩到中的加 1.8 再到长的加 4.4，原因是帧预算固定时长越长采样越稀，音频补得越多。

**过滤前后对照 × 音频增益：** 过滤前后对照负责分别报告含视觉可解题与去掉单帧可解题后的分数，音频增益负责度量加音频相对纯视觉的变化，二者搭配的原因是不过滤会把捷径红利误算成听觉能力，组合意义是只有过滤后仍存在的提升才被判为真正的听与跨模态 grounding 收益。

以下表格整理过滤前后增益的比较问题是：在去掉单帧可解题后音频提升是否还存在，公平条件是同压缩同交错同种子平均，指标方向是准确率越高越好。

| 基准 | 任务类型 | 过滤前现象 | 过滤后增益 | 关键对照 |
| --- | --- | --- | --- | --- |
| AVSpeakerBench | 说话人听看 | +3.0 | +3.0 pp | 保留几乎全部题 |
| WorldSense | 全模态理解 | +2.7 | +2.7 pp | 保留 96% 题前后一致 |
| VideoMME | 长视频理解 | +2.4 | +2.4 pp | 长时段 +4.4 |
| AVQA | 音频视觉问答 | 提升 | +1.4 pp | ∼92 to ∼73 |
| LongVideoBench | 长上下文 | 提升 | +1.9 pp | 语音与 grounding |

该表说明真增益集中在需要听的任务，代价与反例是 ActivityNetQA、Music-AVQA、NExTQA、TempCompass 几乎不动甚至轻微下降。Music-AVQA 含约 45% 单帧捷径且以音乐内容为主，超出语音编码器领域，说明只加训练数据不保证有用，基准设计决定是否学听。

### 哪种压缩器在 25 倍下最稳？

在确认即使最简单的平均池化也能显出音频价值后，论文追问哪种结构在 25 倍下信息保留最好。比较在过滤子集、交错、25 倍下进行。结论分 3 层。第一，Mamba 类压缩器优于平均池化，说明视觉侧发展的 token 压缩技术可迁移到音频。第二，双向 Mamba 相对单向无明确优势，符合音频 1 维因果特性，未来上下文帮助有限。

第三，UniMambaMia 在 6 个基准中的 5 个上最好或并列最好，是最稳的选择；鉴于单双向精度接近，选因果是因为只有它支持流式。
以下导读先看压缩比与 token 数的陡降，再看两种压缩器随压缩比的衰减斜率，该图是选择 UniMambaMia 的直接依据。

> **看图路径：** 1. 在左图按 1 倍 5 倍 10 倍 25 倍读出音频 token 从 90K 降到 3.6K；2. 在右图对比蓝色平均池化与红色 UniMambaMia 随压缩比的变化；3. 注意 25 倍处红色衰减更小且误差棒更稳；4. 把压缩比选择与长视频上下文预算联系起来

[![原论文 Figure 4：(a) Audio token count for a one-hour video; without compression, 90K tokens are consumed (e.g.,…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8a3fd901e2b4/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8a3fd901e2b4/figure-4.png)

*论文图 4。原论文 Figure 4：“(a) Audio token count for a one-hour video; without compression, 90K tokens are consumed (e.g., Qwen2.5-Omni).”。*

该图像素左图为 1 小时音频 token 柱状图，横轴为压缩比 1 倍 5 倍 10 倍 25 倍，纵轴为 token 数，未压缩约 90K 并标注 Qwen2.5-Omni，25 倍处约 3.6K，中间经约 18K 与约 9.0K 过渡。右图为 10 基准过滤平均分随压缩比曲线，蓝色为平均池化，红色为 UniMambaMia，在 5 倍时约 55.5 对约 55.0，10 倍时同为约 54.9，25 倍时红色约 54.5 高于蓝色约 53.7，原文概括为 25 倍下衰减约负 0.5 个百分点对负 1.8 个百分点。可执行观察是对比 25 倍处两条线的垂直差距与误差棒宽度，确认 UniMambaMia 退化更平缓。不能把末步差距推广为全程都差这么多，也不能从平均趋势断言每个基准都如此。

以下表格整理压缩器选择的比较问题是：在 25 倍高压缩下谁的平均过滤分更高，公平条件是同交错同训练数据同种子平均，指标方向是分数越高越好。

| 压缩器 | 压缩比 | 平均池化对照 | UniMambaMia | 差距 |
| --- | --- | --- | --- | --- |
| 25× | 25× | −1.8 pp | −0.5 pp | −0.5 pp vs −1.8 pp |
| 显存 | ∼34 GiB | ∼62 GiB | ∼90K tokens/hour | ∼62 GiB vs ∼34 GiB |
| token | 25× | ∼90K | ∼3.6K tokens per hour | ∼90K to ∼3.6K |
| 码率 | 25 Hz | 25–50 Hz | 1 token/s | 25 Hz to 1 Hz |

该表的主要收益是 UniMambaMia 在 25 倍下多保留约 1.3 个百分点的平均分，代价是学习型压缩器约 130M 参数相对平均池化约 17M 更大。未胜出项是重采样器与双向 Mamba，它们在部分基准接近但整体不如 UniMambaMia 稳定；未评测边界是更高压缩比与流式实时延迟，原文未给出完整扫表。

### 与现代视频大模型对比时条件一致吗？

最终模型选定交错加 UniMambaMia 加 25 倍，在统一评测下与 Qwen2-VL、LLaVA-OneVision、LLaVA-Video 等同 Qwen2-7B 模型比较，在 10 基准中的 7 个上最好或并列最好，过滤分确认增益在去掉视觉捷径后仍存在。与 Qwen2.5-Omni 的差异不能直接判为音频通路胜负，因为后者是 Qwen2.5-7B 主干加私有数据，在 VideoMMMU 上领先，而本文在 Music-AVQA 上以 79.5 对 45.7 领先，更多反映主干与训练规模差异。论文明确标注双线上下用不同主干或论文报告数，粗体与下划线分别表示不同组内最好。
公平性上，同主干组内延迟与 token 预算接近，跨主干组只能定性参考。

部署含义是本文以约 3.6K 每小时音频 token 换来可接受延迟，而未压缩需约 90K 每小时 token 与约 62 吉字节峰值显存。反例是部分视觉中心基准加音频后轻微下降，说明音频 token 在无任务相关信号时可能轻微干扰；TempCompass 过滤后样本太少，分数噪声大，不宜据此断言音频有害。总体趋势是语音与跨模态任务受益、视觉任务基本不受影响，但不等于每组每步都成立。

### 哪些结论还不能下，缺了什么验证？

第一，单帧探针是保守下界，只去掉确定可单帧答对的题，不能证明剩余题都必须听，也不能给出音频依赖度的精确值。TempCompass 过滤后仅剩 324 题，结论天然更 noisy，不宜过度解读小幅涨跌。第二，编码器是语音导向的 Whisper 风格结构，在音乐为主的 Music-AVQA 上无增益是预期内的领域失配，不能推广为音频无用，也不能反推换音乐编码器必涨，因为原文未做该对照。第三，压缩器比较固定在 25 倍与 32 帧每秒 1 帧条件下，帧数、采样率、更长视频与流式实时延迟的联合影响未充分扫描。

第四，训练资源与总成本未报告，推理延迟与显存只在 VideoMME 与单 A100 上测得，不能承诺其他硬件与其他基准同样改善。第五，与不同主干模型的对比混杂了数据与主干差异，相关性不是因果。缺失证据不是技术错误，但复现时应补上误判率分析、音乐与环境声编码器对照、以及不同压缩比下的每基准曲线，才能更完整判断何时值得开音频。

### 要复现应先做什么，需要什么条件？

先复现审计再复现模型。审计需固定 GPT-4o 版本为 2024 年 8 月 6 日版本，两种温度各跑 1 次，只取时间中心帧且静音，配合拒绝感知解析避免把拒绝文本误判为正确，然后按原文释放的过滤划分评估。模型侧先准备 LLaVA-OneVision 底座、SigLIP2 视觉编码器、Qwen2-7B 与 Qwen2-Audio 编码器，注意只用音频编码器而非完整音频大语言模型。压缩器按周期查询实现，步长先取 25，学习型变体约 130M 参数，平均池化基线约 17M 参数加多层感知机投影。

训练按 3 段走：图像指令调优、冻结编码器只训压缩器、再解冻大语言模型做视频指令调优，帧数固定 32 帧按 1.0 帧每秒，学习率分别用约 1 乘 10 的负 4 次方与约 2 乘 10 的负 5 次方，3 种子平均。评估要同时报告原始与过滤分数、延迟与显存，并区分百分点与百分比。资源状态本次为无绑定验证，因此不得声称代码权重数据已可下载；若按原文地址尝试，需先确认链接当前可达再写可用，否则写未能确认。

关键超参数与信息条件是 25 Hz 到 1 Hz、R 等于 25、冻结编码器、交错加因果，这些是复现可运行策略的最小集合。

### 何时值得听，何时可以静音？

当任务涉及讲了什么、谁在说、声音与画面是否对应，或视频很长而帧预算固定导致画面采样稀疏时，值得开音频并用时间对齐交错加因果压缩接入；此时预期在 AVSpeakerBench、WorldSense、VideoMME 长时段、LongVideoBench 与 AVQA 过滤子集上看到明确增益。当任务是纯视觉识别、时间排序或音乐内容超出语音编码器领域，且基准本身单帧可解比例高时，开音频可能无收益甚至轻微干扰，此时静音更省延迟与显存。

实践上先用单帧探针估计基准的捷径比例，再看过滤后增益是否仍存在，最后在 25 倍压缩下比较平均池化与 UniMambaMia 的衰减斜率来选压缩器。论文的中心判断是现代视频大语言模型确实需要听，但前提是基准要求听；建模上用轻量因果压缩加交错是在长视频下保留听力又控制上下文的可扩展配方。未来要补的验证是音乐与环境声编码器、流式延迟实测与更大压缩比下的每任务曲线。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
