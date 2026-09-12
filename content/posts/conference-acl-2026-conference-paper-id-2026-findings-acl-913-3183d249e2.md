---
title: "RSA-Bench: Benchmarking Audio Large Models in Real-World Acoustic Scenarios"
date: 2026-09-12
draft: false
description: "论文用四种真实声景按 1 到 4 个干扰源叠加构造十万级评测，报告高阶推理在户外强干扰下功能性崩溃而性别感知相对稳定，且常用去噪反而加重词错误率等代价。"
tags: ["基准测试", "基准设计", "音频大模型", "鲁棒性", "音频理解"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.913"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.913/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.913.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "23d1880417d61fe2f39b44ab640728a80e69f8c7de2ec6e4f23dc35dd191c2eb"
paper_digest_api_reader_plan_sha256: "139ca26286a12dd2abb7fe1b5165d5df7328ef8b087fa6a6d520a4fc3309c3d3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e037d64b67ca3f12e5785f40a6744d4c2a41127dbe14359fa507b32900061b98"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "70b905e2650a5807aa2b027421da05eac6e2e09af89075012b81cb94c5306890"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b86b3cec0997e07845b87739073177242c990a708a9bbfb2b66eb16440ea7332"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "eb7a840fb6f54a84383b385a1adbd829354173f12c1d736033608f4decef4ba7"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"}]
paper_digest_primary_task: "音频理解"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 真实现场压垮推理：RSA-Bench 用声学生态测出音频大模型的感知-认知断层

> 英文题目：*RSA-Bench: Benchmarking Audio Large Models in Real-World Acoustic Scenarios*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.913`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.913/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.913.pdf)

标签：#基准测试 #基准设计 #音频大模型 #鲁棒性 #音频理解

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Yibo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiwen Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Liang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Shilinlu Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Jin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yaoqi Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Yitian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yalan Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhong Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Kun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Li Sun：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该基准输入为叠加真实环境干扰的语音音频，输出覆盖转写、性别与情感识别到数学推理与指令执行的六类答案，难点在于多声源非平稳掩蔽与类人声干扰会同时破坏声学可懂度与语义连贯性。构建先从公开语音库与环境声库采集干净语音与干扰源，再按均方根能量计算自适应缩放因子以对齐噪声与语音能量并控制信噪比，接着线性叠加并截幅生成不同干扰源数量的评测样本，最后用WER、准确率与LLM-as-a-Judge评分同步度量感知与认知退化，其中能量对齐后的样本直接进入叠加步骤形成有效输入。相比高斯噪声或单源干扰，该设计强调声学生态有效性，用连续宽带噪声形成频谱掩蔽、用生物声考验注意分离，实际意义在于暴露认知功能性崩塌并检验增强前端的副作用。在K=1干扰条件ASR任务评测下，Audio-Denoising处理的WER从基线4.24%升至5.62%，高于未增强基线。其结论适用边界受限于所选四类场景与能量对齐区间内的英语语音任务，尚未验证混响、远场采集与多语泛化下的失败条件。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：本文要解决的真实部署落差

本文的输入是论文原文与官方原图像素，目标是让刚进入语音与音频方向的研究生能复述评测方法并核对实验条件。必须保留的信息包括 4 种声景的构成、干扰源个数 K 的定义、6 个任务的划分、十万量级样本的组合逻辑、11 个被测模型的范围、词错误率与裁判打分的指标方向，以及去噪反而变差的关键反例。输出是 1 篇按学习依赖展开的中文技术解读，不做营销式判断。

研究背景是白话说的听得懂不等于扛得住吵。音频大模型把音频编码器与预训练语言模型接在一起，在干净语音上能做转写、翻译与推理，但真实部署中目标语音总是和雨声、风声、动物叫声、键盘声、儿童玩耍声缠在一起。已有评测多用高斯白噪声或单一声源，难以复现这种多源、非平稳、语义相关的掩蔽。论文因此提出 RSA-Bench，强调生态效度优先于人为难度，用自然叠加的真实环境声考验模型。

**音频大模型 × 声学生态：** 音频大模型负责把语音波形编码再交给语言模型做识别与推理，声学生态负责描述目标语音与多层背景声在真实物理空间中互相缠绕的干扰结构，二者搭配的理由是只测干净语音会高估可用性，把生态叠加作为输入条件才能暴露注意力与推理在掩蔽下的真实边界。

论文的中心矛盾是干净环境的高能力不能直接换算为复杂物理环境的可靠性。作者报告大多数模型随环境复杂度上升出现急剧下滑，尤其需要精确语义推理的任务下滑更陡。理解这一点后，后续所有构造细节都是为了让下滑可度量、可归因、可复现，而不是只给一个笼统的变差结论。

### 术语速查：初次见面用白话记住

音频大模型是能听音频再用语言模型回答的系统，声学生态是目标语音与多层背景声交织的真实声场。感知任务回答听到了什么属性，认知推理回答基于听到内容能算对什么、答对什么。干扰源个数 K 是叠加了几路环境声，越大越复杂。词错误率统计转写错了多少词，大模型裁判打分是让语言模型按参考答案给开放回答打分。语音增强是先降噪再识别，伪影是降噪留下的新失真。这些术语在前文已按首次出现解释，后文简称固定，便于复述方法时指代唯一。

### 已有路线在测什么：通用能力与传统鲁棒性的边界

按同输入、同目标、同监督来对照，已有音频评测主要测通用能力，例如识别、理解与指令跟随，输入多为高质量音频，目标是验证语义与指令能力。传统语音鲁棒性路线输入是低信噪比语音，目标多为降低词错误率，监督来自转写标注，运行阶段集中在前端信号处理。两条路线都没有系统回答环境噪声如何同时打击感知与认知。

另一条相关路线是把环境声当作攻击或干扰项，研究其绕过安全机制或干扰文本推理，但系统性地针对以音频为中心的认知任务的证据仍然不足。语音增强本是传统链路的解法，但在预训练大编码器时代，其与大模型的交互变得复杂。论文的定位不是再提一种降噪器，而是先量化理想与噪声条件的差距，再实证检验现成增强工具能否恢复性能。

初学者容易误以为降噪越干净越好，或把自动指标与人工判断混为一谈。论文用对照表明，感知人类可懂并不等价于保留大模型所需的声学特征，激进滤波可能带来新的失真。这一判断为后文的去噪悖论埋下伏笔，也提示不能把类别差异当成同条件胜负。

### 同条件对照：与通用评测和传统增强的区别

按同输入与同目标再做 1 次有源对照。通用音频评测的输入多为干净音频，目标是测上限能力。传统增强评测的输入为含噪语音，目标是提升可懂度或降低词错误率，运行阶段在前端。本文的输入是可控生态叠加的带噪语音，目标是同时测感知保真与推理一致性，运行阶段在模型推理之后打分。三者输入与目标不同，不能直接比大小。

本文与安全绕过、干扰文本推理等工作的区别在于，它聚焦以音频为中心的认知任务，而非只看安全拒绝或文本链。这一差异决定了任务选择与指标选择，也解释了为何需要问答与指令这类高阶任务。若只看转写，会低估噪声对推理的打击。

### 问题如何切分：六个任务与三个研究问题

论文把 6 个任务切成两类。第一类是感知与副语言，包括语音识别、性别识别与情感识别，考察能否在干扰下保住信号保真度与属性抽取。第二类是认知推理，包括数学推理、语音问答与语音指令跟随，考察能否基于音频输入做逻辑加工。举例来说，性别识别更依赖粗粒度的生物声学特征，情感识别依赖韵律与语气的细微变化，数学推理还要求准确抽取数字并算对。例子仅用于帮助理解分工，不附加原文之外的效果数值。

**感知任务 × 认知推理：** 感知任务分工是保真地抽取声学属性，例如转写、性别与情感，认知推理分工是在抽取结果上做数值计算、问答与指令执行，二者搭配的原因是论文要分离底层听得清与高层想得对，组合意义在于发现干扰主要压垮后者，形成感知减缓而认知崩溃的断层。

3 个研究问题分别对应强度、场景与架构。第一个问题看干扰强度 K 增大时感知、推理与转写如何分化。第二个问题固定 K 比较 4 种声景，看频谱与时间结构如何影响模型。第 3 个问题在相同声学压力下比较不同架构的鲁棒边界。这样的切分让每一组数字都有明确的比较对象，避免把不同场景或不同 K 的数字直接混排。

### 方法全景：一个样本如何走完构造与评测

先沿一个样本走完全程。输入是一段干净语音与一个目标声景类别。系统从该声景随机选 K 个噪声片段，K 取 1 到 4，做时长对齐与能量对齐后线性叠加并限幅，得到带噪评测音频。再把该音频与任务指令一起送入被测音频大模型，得到文本回答，最后按任务用词错误率、数值准确率或大模型裁判打分。每个原始样本会生成 4 种场景乘 4 种强度的 16 种带噪版本，加上原始干净版本，共 17 种测试条件。

下图是论文给出的整体框架导读，左侧是干净与噪声波形的叠加过程，中间是评测主体，右侧是前沿模型群与关键发现，下方用性别与情感两个查询展示对抗输出与期望回答的落差。阅读时先抓主路径，再看回指结论的箭头。

> **看图路径：** 1. 先沿左侧干净与噪声波形经叠加箭头进入中间评测的路径看主流程；2. 再看右侧前沿模型群经评测回指关键发现的箭头方向；3. 对比下方性别与情感两组对抗输出与期望回答的标注差异

[![原论文 Figure 1：A framework of our RSA-Benchmark for evaluating Audio-LLM robustness across six different tasks.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8c94e82e8a0f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8c94e82e8a0f/figure-1.png)

*论文图 1。原论文 Figure 1：“A framework of our RSA-Benchmark for evaluating Audio-LLM robustness across six different tasks.”。*

该框架图的教学价值在于把构造与评测闭环画清。叠加不是 1 次性加噪，而是可控的生态组合。评测不是只看转写，而是同时看感知与推理。下方的例子显示模型可能在噪声下给出自信但错误的性别或情感判断，这正是后文用大规模数字验证的现象。图中文字若辨认不清，以正文对任务与发现的描述为准，不猜测图中未写明的模块位置。

### 组件与计算：对齐与叠加做了什么

构造分 4 步。第一步是来源收集，干净流来自 6 个任务对应的代表性数据集，噪声流来自环境声分类数据的子集并人工归为牧场、极端天气、教室与户外 4 类。第二步是时间对齐，用取模操作把噪声铺满干净语音时长，短则循环铺，长则截断，保证背景连续覆盖。第三步是基于均方根能量的能量对齐，计算干净语音与对齐后噪声的能量并求缩放因子，实验中把因子固定为 1，使信噪比范围与主流分离基准可比。第 4 步是叠加与动态约束，把干净语音与缩放后的 K 路噪声相加并限幅到合法区间。

**时间对齐 × 能量对齐：** 时间对齐分工是让长短不一的噪声覆盖整段干净语音，不够则循环铺满，过长则截断，能量对齐分工是用均方根能量把噪声缩放到与语音可比的强度，二者搭配的理由是只有时长和强度都受控，干扰源个数 K 才能成为可比较的复杂度标尺，组合后得到可复现的叠加样本。

4 种声景各有针对性。牧场以牛、狗、鸡、羊等非平稳动物叫声考验对突发声音的稳定。极端天气把持续暴雨大风与突发雷声及风铃声混合，考验不同声压下的稳定。教室用钟表滴答、咳嗽、键盘与饮水等室内持续但细微的人类活动，考验目标语音与背景活动的竞争。户外合成儿童玩耍、鸟鸣、溪流与草地脚步等开放声景，考验对非结构化事件的适应。论文明确说户外中类似人声的非言语声与目标语音频段重叠更严重，这是后文户外最难的机制解释之一。

### 有无训练：本研究没有训练新模型，计算在哪里

本研究没有训练新的音频大模型，也没有报告梯度路径、参数冻结或更新、优化器与训练预算等训练细节，因此不能从模型名称推定其内部实现。真实的计算过程是数据构造计算与推理评测计算。构造侧的计算是取模铺排、均方根能量估计、缩放与限幅叠加。评测侧的计算是把带噪音频送入既有模型做推理，再按任务计算指标。

下图是数据构成导读，纵轴是 6 个任务，横条长度代表样本量层级，每条标注基数乘 16，底部 4 个图标对应 4 种声景。阅读时先比长度，再理解乘 16 来自四场景乘四强度，最后对照声景图标。

> **看图路径：** 1. 先按纵轴六个任务条的长度对比样本量层级；2. 再核对每条内部标注的基数乘 16 配置的含义；3. 最后看底部四个圆形图标对应的牧场极端天气教室户外声景

[![原论文 Figure 2：Overview of the RSA-Bench data composi- tion, which covers 6 tasks, 4 real-world acoustic scenar-…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8c94e82e8a0f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8c94e82e8a0f/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of the RSA-Bench data composi- tion, which covers 6 tasks, 4 real-world acoustic scenar- ios, and totals over 100,000 samples.”。*

该图说明规模来自组合设计而非简单堆量。转写与性别任务基数较大，情感与问答居中，指令与数学基数较小，但每条都要乘 16 展开噪声条件，总量超过十万。这种设计让强度曲线与场景对比都有足够的样本支撑。论文未公开代码与数据的可达状态，解读中不声称资源已公开，复现时应以论文描述的来源数据集与叠加步骤为准。

### 实验条件：测谁、怎么比、指标方向

被测对象覆盖开源与闭源的代表性音频大模型，包括 Qwen2-Audio、Qwen2.5-Omni、SeaLLMs-Audio、MERaLION、Phi-4 多模态、Step-Audio-2-mini、SALMONN、MiniCPM、Qwen 系列 Omni 变体与 GPT-4o-Audio 等，共 11 类。比较条件是同一批干净样本在 17 种声学条件下的表现，先测干净基线，再测 16 种带噪配置，强度 K 从 1 到 4，场景覆盖 4 类。

指标方向必须先讲清。语音识别用词错误率，越低越好，高于 100% 是可能的，因为插入错误可以超过参考词数。数学推理用数值精确匹配的准确率，越高越好。其余问答、指令、情感与性别用大模型裁判打分，裁判为 GPT-4o-mini，按与参考答案的语义正确性与指令遵循度给 0 到 5 分，再换算为 100 分制呈现，越高越好。

**词错误率 × 大模型裁判打分：** 词错误率分工是按词级增删改统计转写偏离，越低越好，大模型裁判打分分工是对问答、指令、情感与性别等开放回答按语义正确性给 0 到 5 分，二者搭配的原因是转写可用确定性计数而理解需要语义判断，组合意义是避免把流畅但答非所问的回答误判为正确。

下图是裁判提示模板的导读，上部是严格评判的系统指令，中部是 0 到 5 分的 rubric，下部是问题、参考答案、模型预测与解释加评分的固定槽位。阅读时先确认评分只看与参考的对齐，不看流畅度。

> **看图路径：** 1. 先看系统指令中对准确性与相关性的严格要求；2. 再看 0 到 5 分 rubric 如何区分拒绝回答与部分对齐；3. 最后核对输入数据与输出解释加评分的固定槽位

[![原论文 Figure 4：Uniform Evaluation Prompt for the LLM-as-a-Judge framework used in RSA-Bench.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8c94e82e8a0f/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8c94e82e8a0f/figure-4.png)

*论文图 4。原论文 Figure 4：“Uniform Evaluation Prompt for the LLM-as-a-Judge framework used in RSA-Bench.”。*

该模板的意义是统一尺度。0 分处理拒绝或完全偏离，1 到 2 分处理主题相关但关键错误，3 到 4 分处理大体对但缺细节，5 分要求基本完美对齐。论文把提示细节放在附录，正文只说明裁判模型与评分维度。复现时应原样保留槽位与评分区间，否则跨任务分数不可比。

### 主结果：强度越大，推理先崩，转写后崩

比较问题是户外场景下 K 从 0 到 4 增大时，3 类能力如何分化。公平条件是同一户外样本集、同一模型、同一指标方向。指标方向是词错误率越低越好，其余分数越高越好。下表把论文在户外报告的关键数字整理成可核对的对照，列数满足宽表要求，数字与单位以原文连续句为准。

| 条件 | 指标 | 干净基线 | 强干扰 K 等于 4 | 对比对象 |
| --- | --- | --- | --- | --- |
| 户外性别识别 | 裁判分数 | 95.92 | 88.94 | Qwen3-Omni |
| 户外情感识别 | 裁判分数 | 52.99 | 10.57 | Qwen-Turbo |
| 户外情感识别 | 裁判分数 | 55.33 | 29.42 | MiniCPM |
| 户外数学推理 | 准确率 | 75.00 | 6.00 | StepAudio2 |
| 户外指令跟随 | 裁判分数 | 62.00 | 3.60 | SeaLLMs |
| 户外语音识别 | 词错误率 | 5.70% | 557.20% | Qwen3-Omni |

表后解释需要同时讲收益与代价。性别识别显示相对韧性，Qwen3-Omni 在最高强度仍保持较高分数，说明粗粒度生物特征较抗掩蔽。情感识别则脆弱得多，Qwen-Turbo 与 MiniCPM 都大幅下滑，说明细微 affective 线索易被扭曲。推理任务下滑更陡，StepAudio2 的数学分数从干净到 K 等于 1 就腰斩，到 K 等于 4 只剩个位数，SeaLLMs 的指令分数从 60 以上跌到个位数，支持感知减缓而认知崩溃的判断。转写在低干扰时尚可，但在极端噪声下出现崩溃，Qwen3-Omni 的词错误率从个位数飙到数百个百分点。

论文还报告两种异常模式，一是模型不转写反而解释音频内容，二是单个词无限重复，这提示极端噪声可能让模型偏离文本指令。未胜出项同样重要，例如情感任务中 MERaLION 相对稳定，说明不是所有模型在同一任务上同步崩溃，架构差异仍然存在。

下图是一个性别误判案例的导读，顶部是二选一问题，中部是模型把男性判为女性并编造打喷嚏与健康状况，底部是裁判依据参考答案判错。

> **看图路径：** 1. 先读顶部性别二选一问题的限定条件；2. 再对比中间模型回答中性别误判与打喷嚏等无关细节；3. 最后看底部裁判如何依据参考答案判定为错误

[![原论文 Figure 3：Evaluation case study: In an audio gender recognition task, the model misidentifies a male…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8c94e82e8a0f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8c94e82e8a0f/figure-3.png)

*论文图 3。原论文 Figure 3：“Evaluation case study: In an audio gender recognition task, the model misidentifies a male speaker as female and includes irrelevant details.”。*

该案例的教学点是幻觉与偏离并存。模型不仅判错性别，还补充了音频中无法支撑的细节，裁判抓住与参考不一致的关键点给低分。这类失败在噪声下更常见，但不能把单个案例推广为全量结论，全量结论仍以后文表格的统计数字为准。

### 场景与去噪对照：哪里最难，为何越降噪越差

比较问题有两个。第一是固定 K 等于 3 时 4 种声景谁最难，第二是加 4 种去噪后性能回升还是回落。公平条件是同一 K、同一模型、同一任务，指标方向不变。下表整理论文报告的场景差距与去噪回归，数字与单位来自原文连续句。

| 条件 | 指标 | 较易场景 | 困难场景 | 对比对象 |
| --- | --- | --- | --- | --- |
| 语音识别 K 等于 3 | 词错误率 | 4.77% | 259.56% | Qwen3-Omni 教室对比户外 |
| 数学推理 | 准确率 | 72.00 | 18.00 | Qwen3-Omni 教室峰值对比户外 K 等于 3 |
| 去噪语音识别 K 等于 1 | 词错误率 | 4.24% | 12.90% | Qwen2-Audio 基线对比 noisereduce |
| 去噪语音识别 K 等于 1 | 词错误率 | 4.24% | 5.62% | Qwen2-Audio 基线对比 Audio-Denoising |
| 去噪指令跟随 K 等于 1 | 裁判分数 | 47.20 | 43.00 | Qwen2-Audio 基线对比 DeepFilterNet |

**语音增强 × 去噪伪影：** 语音增强分工是在推理前用信号处理或神经网络压制背景声，去噪伪影分工指增强过程引入的频谱失真与语义损伤，二者搭配的原因是论文要检验先降噪再识别的传统链路是否仍成立，组合意义在于揭示自然噪声虽吵但结构完整，而激进滤波会破坏大模型依赖的细粒度线索。

表后解释先讲场景。户外代价最大，论文的机制解释是儿童玩耍等人声样干扰与目标语音频段重叠，模型难以做听觉注意分离。教室相对最好，离散有节奏的键盘声等留下间歇静音，模型能抓住语音片段。极端天气则像频谱毯子，连续宽带雨声均匀模糊细节，转写更难。未胜出项是教室并非对所有模型都最优，个别模型在其他场景也有峰值，说明场景敏感性存在模型差异。

再讲去噪。4 种方法包括基于谱门的 noisereduce、混合信号处理与循环网络的 RNNoise、基于小波或卷积的方法 Audio-Denoising，以及低延迟深度滤波的 DeepFilterNet。论文在牧场与教室对 Qwen2-Audio、MERaLION 与 StepAudio2 做消融，结果多为回落而非恢复。传统方法破坏更大，深度方法虽相对温和仍难超带噪基线。论文的有限解释是模型对自然背景声更鲁棒，而对增强引入的失真更敏感。可能与待验证的部分是具体哪类频谱损伤最致命，原文没有逐频带归因，不宜断言因果。

### 能说什么、不能说什么：证据的边界

论文直接报告的是大规模带噪评测下的性能差距与排序变化，支持的判断是推理任务更脆弱、户外人声样干扰更具破坏性、现成增强常带来回归。可能但待验证的是注意力机制失效的具体链路、某种降噪器在另一超参数下是否反转结论，以及裁判打分与人类判断的一致性强度。相关性不等于因果，分数下滑与干扰共现不能直接证明模型内部哪一层先失效。

缺失证据不是技术错误，但必须点名。论文未测量误判率之外的延迟、算力与部署成本，未做训练时噪声增强或对抗训练，未验证裁判在情感等主观任务上的偏差，未公开可达的代码与数据链接。因此不能承诺降噪改进延迟，不能承诺某模型在未测语种或未测麦克风下同样排序。总体趋势不等于每组都成立，例如个别模型在个别场景的分数会出现小幅回升，解读时应保留这些反例。

另一个常见误解是把词错误率超过 100% 当成笔误。论文的转写失败案例显示，大量插入与重复会让错误词数超过参考词数，因而出现数百个百分点的数值。这不是单位错误，而是插入主导的崩溃模式，应按越低越好的方向理解。

### 复现先做什么：数据、参数与评测的最小闭环

复现的第一步是重建数据划分与采样。干净流按任务取自 LibriSpeech、IEMOCAP、MELD、SpokenMQA、SLUE Phase-2 与 OpenHermes 等来源，噪声流按 4 类声景人工归类。每个样本对四场景乘四强度展开，K 取 1 到 4，加上干净基线共 17 个条件。时间对齐用取模铺排，能量对齐把缩放因子固定为 1，叠加后限幅。论文未给出信噪比的逐样本数值，只说范围与主流基准可比，复现时不要自行编造划分或聚合口径。

第二步是锁定推理与评分条件。被测模型用原文列出的 11 类，提示与任务指令保持一致。转写用词错误率，数学用数值精确匹配，其余用同一裁判模型与同一 0 到 5 分模板。聚合对象是按任务、场景与 K 分别平均，原文表格以百分比呈现，小于 1 的数已乘 100，引用时保留原始精度与百分号位置。

第三步是先跑最小闭环再扩展。建议先选一个模型与教室场景跑 K 从 0 到 4 的转写与性别两条曲线，确认干净基线可复现，再加户外与数学推理验证断层是否出现，最后才加 4 种去噪对照。去噪侧需记录采样率、前后端分帧与阈值等实现细节，论文把实现放在附录，复现时应逐项对齐，否则回归幅度不可比。

### 何时值得尝试：给新生的行动清单

当你的任务要从干净演示走向真实房间、街道或户外时，这篇论文值得尝试。它提醒先做压力测试再谈上线，先区分感知与推理的失败，再决定补数据、改提示还是换架构。如果你的场景多为离散室内声，教室的结论更有参考性。如果场景含儿童玩耍或动物叫声等人声样与生物声干扰，应优先看户外的数字，因为这类干扰对注意分离的挑战更大。

行动清单包括按 K 画出自己模型的强度曲线，按场景拆分误差，检查转写是否出现解释式回答或重复循环，检查情感任务是否把鸟鸣等背景声赋予拟人化情绪，以及用一到两种深度增强做小规模对照但不默认其有效。若要深入，下一步需要补的验证是人类评测与裁判的一致性、不同麦克风与混响下的排序稳定性，以及噪声感知指令微调是否真能修复推理而不损伤干净性能。论文的结论是呼吁从外部补丁转向内生鲁棒性，这一方向是否成立，仍需训练时干预的实证来回答。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=4)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-6.png)

区域 6 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-7.png)

区域 7 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 8，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-8.png)

区域 8 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 9，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-9.png)

区域 9 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 10，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-10.png)

区域 10 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 11，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-11.png)

区域 11 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 12，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-12.png)

区域 12 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 13，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-13.png)

区域 13 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 14，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-14.png)

区域 14 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 15，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-15.png)

区域 15 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 16，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-16.png)

区域 16 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=5)

[![原文数学表达区域 17，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-17.png)

区域 17 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 18，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-18.png)

区域 18 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 19，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-19.png)

区域 19 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 20，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-20.png)

区域 20 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 21，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-21.png)

区域 21 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 22，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-22.png)

区域 22 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 23，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-23.png)

区域 23 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 24，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-24.png)

区域 24 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 25，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-25.png)

区域 25 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 26，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-26.png)

区域 26 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 27，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-27.png)

区域 27 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 28，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-28.png)

区域 28 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 29，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-29.png)

区域 29 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 30，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-30.png)

区域 30 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 31，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-31.png)

区域 31 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

[![原文数学表达区域 32，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/874db31cf889/figure-32.png)

区域 32 · [查看论文原页](https://aclanthology.org/2026.findings-acl.913.pdf#page=7)

另有 327 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.findings-acl.913.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
