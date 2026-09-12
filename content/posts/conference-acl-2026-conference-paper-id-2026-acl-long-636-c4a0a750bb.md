---
title: "Omni-RewardBench: Toward a Comprehensive Evaluation of Generative Reward Models Across Modalities"
date: 2026-09-12
draft: false
description: "论文把同时含文本、音频、图像或视频的问答做成 1375 组优选对，用桥接加人工核验构造基准，报告榜单分数与下游 Best-of-N 表现为同分布 0.94、异分布 0.72 相关，但原生全模态模型仍弱于桥接后的双模态大模型。"
tags: ["基准测试", "基准设计", "音视频", "音视频问答"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.acl-long.636"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.acl-long.636/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.acl-long.636.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1f50621f8ed874840331e3a1d4f1548aa3a0e2f3e9280667ec4281612ebb3a8c"
paper_digest_api_reader_plan_sha256: "1c31dde8bf3553da38835c94bb697e6a4602e5384ca22cfdfe50ce597335f57e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "133415570e613b09b6e1dfd4637979e43f017a221797ca3b3f7477edf3e799c0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6f224a28e52e9a23d45ef2b2df1ea3d14d40e2cd3e747524ea4be7c9b72e46be"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8b197a5ca1f802702bf3e64a7aa7bfdf0d5556a9eb9124947df54483dc5d1241"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "dff78f14479954306bfaeaf2fce5532beb1e866cfdbed071a33cf635b61334d0"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 同时听看读才能判对：Omni-RewardBench 逼奖励模型做三模态排序

> 英文题目：*Omni-RewardBench: Toward a Comprehensive Evaluation of Generative Reward Models Across Modalities*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.acl-long.636`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://aclanthology.org/2026.acl-long.636/) · [官方 PDF](https://aclanthology.org/2026.acl-long.636.pdf)

标签：#基准测试 #基准设计 #音视频 #音视频问答

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Chi-Min Chan：机构信息未能从会议 PDF 纯文本可靠映射
- Yujin Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Pengcheng Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Boqin Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaming Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Juntao Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Sirui Han：机构信息未能从会议 PDF 纯文本可靠映射
- Yike Guo：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务输入为同时包含文本、音频与图像或视频的全模态问题，输出为对选中与拒绝回答的二元偏好判定，难点在于三模态联合感知与推理必须同时成立且任一模态缺失即判错。先从OmniBench等四个开源库汇聚必须三模态协同的多选题，职责是保证输入完备，输出为覆盖8大类的全模态题库。再以该题库为输入，用文本字幕桥接缺失模态并调用8个双模态与全模态模型生成多样回答，职责是构造可比候选，输出为每题多回答集合。最后以回答集合为输入，交由另一组8个不重叠评估器按整合度等五维打分，再经方差过滤的博尔达计数聚合选出首尾回答并经人工核验，职责是消除量纲差异与高分歧噪声，输出为偏好明确的选中拒绝样本。与已有文本或双模态奖励基准相比，该机制首次覆盖三模态输入并以排序聚合代替均值聚合，具有补齐全模态对齐评估的意义。在Omni-RewardBench基准成对评测设置下，Gemini-2.5-Flash的平均成对准确率为83.81%，高于Qwen-Omni-7B的74.03%。该结论适用边界仅限多选式成对偏好判别与所覆盖场景，对开放生成与奖励训练优化尚未验证，评估硬件为NVIDIA H800集群且评估温度为0.0。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么三模态一起判才算数？

这篇论文的输入是同时包含三部分的题目：一段文字问题与选项，一段音频，一张图像或一段视频。目标不是让模型直接回答问题，而是让奖励模型当裁判：给定同一个问题的两个候选回答，判断哪一个更好。必须保留的信息是题目 3 模态必须同时可用，裁判必须输出偏好顺序，评价只看是否选对了人工认定的优选回答。

对刚进入语音音乐音频领域的同学，白话是这样：以前很多奖励模型只看文字回答好不好，现在不行了，因为回答好坏可能取决于有没有听清鼓点、有没有看清窗口是开是关。只给文字的裁判会漏掉关键证据。论文把这种同时依赖听、看、读的裁判任务叫做全模态奖励建模。用英文说就是 Omni-modality Reward Model，缩写 ORM；能同时处理 3 模态输入的大模型叫做全模态大语言模型，即 Omni-modality Large Language Model，缩写 OLLM。

**全模态大语言模型 × 全模态奖励模型：** 全模态大语言模型负责同时读文本、听音频、看图像或视频并生成回答，全模态奖励模型负责对两个候选回答排序、选出更符合人类偏好的一个；前者是被评价的作答者，后者是做评价的裁判，本基准只测裁判能力而不测作答流畅度。

本解读的输出是一套可复述的方法：数据从哪里来、候选回答怎么生成、偏好标签怎么定、实验怎么比、数字怎么读。阅读顺序按学习依赖安排：先讲任务与已有路线的差别，再讲 4 阶段构造全景，然后拆每个组件的计算，最后讲实验条件、主结果、反证与复现要点。

### 附：术语与符号速查

全模态大语言模型指同时处理文本、音频、视觉的生成模型；全模态奖励模型指对候选回答排序的裁判模型；模态桥接指经文本字幕补齐缺失模态的做法；博达计数指按排名加总的聚合方法；成对评价与直接打分是两种裁判协议。

位置偏置指因回答顺序导致的系统性偏向。符号上问题记为 question，选中与拒绝回答分别记为 chosen 与 rejected，裁判输出记为偏好判断，准确率只在选对时记 1 否则记 0。

### 已有路线在测什么？缺的那块是什么？

论文把相关工作分成两条线。第一条是多模态模型评测，视觉语言方向已有很多空间感知和推理基准，音频语言方向有语音识别、音频问答基准，但大多是双模态。第二条是奖励模型评测，文本奖励模型有 RewardBench，视觉语言有 VL-RewardBench，多模态过程奖励也有探索，但同样停在单模态或双模态。

缺的那块是 3 模态同时在场的奖励评测。论文的判断是：没有这个基准，就无法知道裁判在音频加视觉同时出现时会不会只看一端、会不会把两个模态拼错。这就是 Omni-RewardBench 要补的位置。它不训练新的奖励模型，只提供裁判考试卷和评分规则。

需要区分的是作答能力与裁判能力。一个模型能答对 3 模态问题，不等于它能稳定判断两个回答哪个更好。论文的全部实验都围绕后者展开。

### 裁判任务到底怎么定义？答对算什么？

论文采用三元组格式：问题、被选中的回答、被拒绝的回答。裁判有两种做法。第一种是成对比较，把两个回答同时摆出来直接选优。第二种是直接打分，对每个回答独立打分再比较大小。两种做法最后都折算成二选一准确率：选对得 1 分，选错得 0 分。

为检查位置偏置，论文把同一对回答调换顺序测 2 次，记为原始顺序和打乱顺序。2 次准确率的差异幅度用来衡量裁判是否因为回答摆在前面就偏向它。这个设计对初学者很重要：以后复现时不能只报 1 次顺序的结果，必须报 2 次并算偏置，否则会高估稳定性。

举个教学例子：问题是窗户发生了什么，音频是滑轨声，图像是开着的窗台。好的回答应同时用上滑轨声和开窗画面排除门和火，差的回答只听音频就猜成拉门。裁判必须能看出前者整合了两个模态。这个例子只说明任务形态，不附带任何效果数字。

### 四阶段流水线如何从原始数据走到考试卷？

论文的方法全景是 4 个阶段。第一阶段收集全模态题目，第二阶段生成多个候选回答，第三阶段自动打分并聚合出优劣对，第 4 阶段人工核验并过滤。整个过程的目标是可扩展又可靠：机器负责批量生产，人工负责守住质量。

数据来源是 4 个已有的开源社区数据集，覆盖音乐、日常生活、跨模态幻觉、驾驶等场景。论文报告最终整理出 1375 组三元组，覆盖 8 个大类和 22 个子类。分类包括多模态理解、内容分析、艺术文化、娱乐媒体等，内圈是大类占比，外圈是细分类占比。

下图是构造流水线的总览，先看模型池与 3 条桥接支路，再看回答生成与标注如何衔接。

> **看图路径：** 1. 先从左侧模型池看三类来源：视觉语言、音频语言和全模态模型；2. 再看右侧三条支路如何把缺失模态补成文本字幕；3. 最后看回答生成与偏好标注两块绿色框如何汇入人工核验

[![原论文 Figure 1：Pipeline for constructing Omni-RewardBench.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/6fe60bfe583d/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/6fe60bfe583d/figure-1.png)

*论文图 1。原论文 Figure 1：“Pipeline for constructing Omni-RewardBench.”。*

读完这张图应抓住一条主线：凡是模型原生不支持的模态，都先转成文本字幕再输入；凡是自动打分分歧大的样本，都进不了最终考试卷。后面三节分别展开桥接、聚合与核验的细节。

### 模态桥接怎么做？文本为什么是中间语言？

因为原生支持文本加音频加视觉的模型很少，论文用文本当统一中介。对于视觉语言模型，把音频转写成文字描述一起输入；对于音频语言模型，把图像或视频转写成文字描述一起输入。这样双模态强模型也能处理 3 模态题目。

具体操作是：在回答生成阶段用 8 个模型造多样性，包括 2 个全模态模型、2 个音频语言模型、4 个视觉语言模型；在自动标注阶段换另外 8 个不同的模型做评价，避免自己评自己。2 阶段相乘，每个回答得到 64 个偏好分数。这个数量是设计出来的，不是偶然：8 个回答者乘 8 个评价者。

**模态桥接 × 原生全模态：** 模态桥接指把不支持的模态先转写成文本再交给双模态模型，原生全模态指一个模型直接吃 3 模态输入；桥接分工是补输入兼容性，原生分工是做端到端联合感知，二者搭配的原因是当前原生模型少且弱，桥接让更强的视觉和音频模型也能参加同一排序任务。

两种裁判方式的分工也要讲清。成对评价 1 次看到两个回答，容易受顺序影响；直接打分每次只看一个回答，容易受标尺漂移影响。论文同时测两种，复现时也要同时实现两种提示词，不能只做容易的那一种。

**成对评价 × 直接打分：** 成对评价把优选回答和劣质回答同时给裁判并二选一，直接打分对每个回答独立给 1 到 5 分再比较大小；前者考相对偏好，后者考绝对标尺，论文同时保留两种是因为成对易受位置偏置影响，直接打分能暴露标尺不一致的问题。

### 没有训练时，64 个分数如何变成一对优劣标签？

本研究没有训练任何新模型，这一节讲的训练等价物是标注聚合计算。输入是每个回答的 8 个评价者打分，输出是选出最高分当选中回答、最低分当拒绝回答，但前提是方差足够小。

直觉是：平均分不可靠，因为不同评价者打分尺度不同；方差大不可靠，因为评价者之间分歧大。论文因此用方差控制的博达计数。做法是每个评价者内部先排名，用名次加总代替原始分数加总，再算每个回答 across 评价者的分数方差，方差超过阈值的回答直接过滤，剩下的按博达分排序取头尾。
下图展示了聚合表的样子，重点看方差列如何决定去留。

> **看图路径：** 1. 先看同一回答下多行打分条与右侧排名数字的对应关系；2. 再对比方差 1.1 与 1.5 保留、2.5 丢弃的阈值动作

[![原论文 Figure 2：Illustration of variance-controlled borda count ranking method.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/6fe60bfe583d/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/6fe60bfe583d/figure-2.png)

*论文图 2。原论文 Figure 2：“Illustration of variance-controlled borda count ranking method.”。*

图中第一行回答排名靠前且方差低于阈值被保留，最后一行虽然排名垫底但方差高于阈值会被丢弃，真正当拒绝回答的是另一行低方差的低排名回答。这个细节说明论文不是简单取最高最低，而是先过滤再取头尾。

**博达计数 × 方差过滤：** 博达计数把每个标注器内部的排序名次加总得到聚合排名，方差过滤把 8 个标注器打分分歧过大的回答直接丢弃；前者解决不同模型打分尺度不一不能直接平均的问题，后者解决分歧大即不可靠的问题，组合后只留下低分歧且排名稳定的优劣对。

第 4 阶段是人工核验。招募熟悉多模态评测的计算机专业研究生，要求不预设机器排序正确，逐个检查回答正确性与推理质量，改写或丢弃与人类判断冲突的排序。只有人类一致认可且无明显错误的样本才保留。这一步是防止自偏好和长度偏置的关键守门动作。

### 测谁？在什么条件下比才公平？

评测对象是 20 多个前沿模型，分两类。原生全模态类包括 Ola、Video-LLaMA2、Vita、Qwen-Omni、Baichuan-Omni、MiniCPM、Gemini-2.5-Flash 等；桥接类包括 InternVL、Qwen-2.5-VL、DeepSeek-VL、GPT-4o 做视觉侧，Qwen2-Audio、Kimi-Audio 做音频侧，缺失模态用字幕模型补齐。默认解码温度设为 0，运行在英伟达 H800 集群。

比较条件要求一致：同一题目、同一对回答、同一提示词，只换裁判模型；每个模型都测原始顺序和打乱顺序两种，并报告偏置幅度；同时报告成对准确率和直接打分准确率。指标方向都是越高越好，偏置越小越好。

下游验证用推理时扩展。做法是对 OmniBench 和 DailyOmni 两个下游任务采样多个候选，用被测奖励模型挑最好一个，看下游任务分数是否随榜单分数上升。这个设计把榜单从静态考试变成了选择器能力的预测器。

### 谁判得准？榜单分数能预测下游吗？

论文报告当前全模态模型当裁判普遍不够强，而桥接后的双模态大模型反而更稳。定性结论是 Gemini-2.5-Flash 在原生组领先，InternVL-78B 与 Qwen-2.5-VL-72B 在桥接组靠前，小尺寸桥接模型明显掉队。更重要的是榜单与下游 Best-of-16 表现呈强相关，同分布相关约 0.94，异分布相关约 0.72，支持榜单可作为实际能力的预测信号，但相关不等于因果。

下图把榜单表现放横轴、下游表现放纵轴，每个点是一个模型，虚线是线性拟合。

> **看图路径：** 1. 先确认横轴是榜单准确率、纵轴是下游任务表现；2. 再区分蓝色圆点与红色三角分别对应的两个下游集

[![原论文 Figure 5：Correlation between leaderboard performance and downstream task performance (Best-of-16).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/6fe60bfe583d/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/6fe60bfe583d/figure-5.png)

*论文图 5。原论文 Figure 5：“Correlation between leaderboard performance and downstream task performance (Best-of-16). Dashed lines represent linear regression fits.”。*

读图时先确认横轴是榜单准确率、纵轴是下游任务分数，再看蓝色圆点对应异分布集、红色三角对应同分布集。论文显示分数越高的裁判在下游挑出的回答也越好，且随采样数增大趋势保持稳定。

**推理时扩展 × 奖励模型：** 推理时扩展指对同一问题采样多个候选再让奖励模型挑最好一个，奖励模型在此处充当选择器；前者提供候选数量这个操作变量，后者提供选择质量，论文用 Best-of-N 把榜单准确率和下游任务增益连起来，验证榜单能否预测真实对齐效果。

下面两张表把论文明确报告的数字整理成可核对的形态。第一张聚焦缺模态会发生什么，第二张聚焦数据规模与预测相关的证据。表前先说明比较问题与公平条件：同一模型、同一指标，只改变输入模态是否完整或只改变统计口径，指标方向都是准确率越高越好、相关系数越高越好。

第一张表回答缺一个模态是否还判得准。比较对象是完整 3 模态输入与只留视觉或只留音频，模型与指标保持不变。

| 条件 | 指标 | 模型 | 完整输入 | 缺失模态后 |
| --- | --- | --- | --- | --- |
| 仅留视觉 | 成对准确率 | Qwen-Omni-7B | 70.72% | 69.42% |
| 仅留视觉 | 成对准确率 | Gemini-2.5-Flash | 83.18% | 80.69% |
| 仅留音频 | 成对准确率 | Qwen-Omni-3B | 70.72% | 60.13% |
| 仅留音频 | 成对准确率 | Qwen-Omni-7B | 74.03% | 66.33% |

表后解释是：视觉缺失或音频缺失都带来下降，只留音频时下降更剧烈，Qwen-Omni-3B 从 70.72% 掉到 60.13% 就是反例。这支持 3 模态都是必要的，未胜出项是只用单模态的配置，它们在任何模型上都没有超过完整输入。同时论文提到缺模态时位置偏置有时反而变小，但这不能解读为变好了，因为准确率本身已经下降。

第二张表回答基准规模与预测效度的证据。比较维度是样本量与相关系数，数值全部来自正文原句。

| 条件 | 指标 | 对象 | 报告值 | 含义 |
| --- | --- | --- | --- | --- |
| 基准规模 | 三元组数量 | Omni-RewardBench | 1,375 triplets | 最终保留的优劣对 |
| 下游预测 | 相关系数 | 同分布 | r = 0 .94 | 榜单越高下游越好 |
| 下游预测 | 相关系数 | 异分布 | r = 0 .72 | 跨分布仍正相关但更弱 |
| 标注密度 | 偏好分数 | 每个回答 | 64 total preference scores | 8 乘 8 的评价矩阵 |

表后解释是：1375 的规模支撑了 8 大类 22 子类的细粒度分析，64 个分数支撑了方差过滤的可行性，而 0.94 与 0.72 的差距说明同分布预测更可靠，异分布存在衰减。代价是数据仍小于单双模态基准，跨分布的预测误差更大，使用时不能把相关系数当成每组都成立的保证。

### 拿掉一个模态会怎样？字幕质量影响多大？

论文做了两类特有消融。第一类是模态缺失：只给视觉或只给音频。结果是视觉模型无法处理纯音频，音频模型无法处理纯视觉，原生全模态模型在单模态下全面下降。这反证了基准确实需要联合感知，不是靠单模态捷径就能拿高分。

第二类是换字幕模型。把音频字幕从 Qwen2-Audio 换成更强的 Gemini-2.5-Pro，或把视觉字幕换成 GPT-4o，桥接模型的成对与直接准确率一致提升。这说明桥接链路的信息损失主要卡在字幕质量，字幕越忠实，裁判越能对齐多模态信息。复现时若要提升桥接成绩，应先换字幕模型而不是先调裁判提示词。

下图是 3 类典型失败模式，每组都给出问题、两个候选与裁判理由，红色高亮标出误判位置。

> **看图路径：** 1. 先看每组左侧问题与音频视频缩略图的输入组合；2. 再看中间被标为 Chosen 与 Reject 的两个回答差异；3. 最后看右侧裁判理由中红色高亮的误判位置

[![原论文 Figure 7：Failure mode of ORMs on Omni-RewardBench.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/6fe60bfe583d/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/6fe60bfe583d/figure-7.png)

*论文图 7。原论文 Figure 7：“Failure mode of ORMs on Omni-RewardBench.”。*

第一组是感知失败：音频明明是短促重复的鼓点，裁判却把它当成持续的铜管乐，还选了更详细的错误分析。第二组是模态主导失败：音频里水声持续不断，裁判只看画面说没有水花就判水没响。第三组是跨模态融合失败：每个模态都看对了，却没推出第三人称拍摄下声音与画面可以合理共存。这些案例说明错误不只来自听不清或看不清，还来自拼不对。

### 哪些结论不能下？边界在哪里？

论文明确承认三点局限。第一，规模相对较小，1375 组虽然覆盖广，但在统计稳健性和真实交互覆盖上不如单双模态大基准。第二，只做评测与案例分析，没有提出训练或优化方法，原因是缺乏大规模高质量全模态偏好数据，算法设计超出基准论文范围。第三，人工核验者主要是计算机专业研究生，技术严谨但人口与学科多样性窄，可能引入偏好偏差。

未验证的推测要单独标记：字幕越好裁判越好是实验支持的，但换更强字幕是否在所有类别都成立待验证；榜单与下游相关是报告的，但能否直接推出强化学习后对齐质量提升是可能而非已证明。缺失证据不是技术错误，只是不能承诺延迟、成本或误判率也一起改善。

资源状态也要如实写：本次收到的证据中没有来源绑定且完成验证的开源资源，不得声称代码、模型或数据已公开。复现只能按论文文字重做流程，不能假设有官方仓库可直接下载。

### 要复现，先准备什么、按什么顺序做？

先准备 4 类来源数据与模型。数据侧找 OmniBench、AV-Odyssey、WorldSense、AVHBench 的 3 模态题目；模型侧准备回答生成用的 8 个模型与标注用的另外 8 个模型，尽量保持论文的模型名单以减少分布偏移；字幕侧准备音频转写与视觉描述 2 个模型；人工侧准备熟悉多模态评测的核验者与书面指南。

操作顺序是：收集 3 模态题并统一成文字加音频加图像或视频格式；用桥接方式生成 8 个候选回答；用另一组 8 个评价者按 5 个维度打分，维度包括整合、相关、完整、清晰、一致，再给总体分；对每个回答算方差并做博达聚合，先过滤高方差再取头尾组成三元组；人工逐个核验正确性与推理质量，不通过则改写或丢弃。

评价时实现两种提示词：成对二选一与独立打分；每个模型跑原始与打乱两种顺序并算偏置；温度设 0 以减少随机性。关键超参数与信息条件要保留：8 乘 8 等于 64 个分数、方差阈值、取头尾数量、提示词中的模态字幕字段。若阈值原文未给具体数值，应记为缺项而不猜。

### 何时值得用这个基准？下一步补什么验证？

当你的任务同时依赖声音与画面、且需要模型在多个回答中选优时，这个基准值得尝试。典型情况是音视频问答的答案选择、全模态助手的回复排序、幻觉检测中的优劣判断。若任务只是纯语音识别或纯图像分类，用它就是杀鸡用牛刀。

复现后先做两项验证：模态缺失对照，确认完整输入确实高于单模态；字幕替换对照，确认更强字幕是否带来稳定提升。这两项能帮你判断自己的链路是卡在感知还是卡在融合。

还需补的验证是扩大核验者多样性、增加样本量后的相关系数稳定性、以及把榜单高分裁判真正接入 Best-of-N 与强化学习看下游增益是否持续。只有补完这些，才能从相关走向可用。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
