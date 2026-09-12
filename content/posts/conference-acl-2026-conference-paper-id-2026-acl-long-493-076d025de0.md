---
title: "Musical Score Understanding Benchmark: Evaluating Large Language Models’ Comprehension of Complete Musical Scores"
date: 2026-09-12
draft: false
description: "该研究针对完整乐谱的多级理解问题，选择 ABC 文本与 PDF 图像双模态生成问答评测，最强证据是文本问答约 49.44% 而视觉问答仅约 24.22%，代价是跨级全对的严格成功率迅速归零且微调仍难维持高层一致性。"
tags: ["基准测试", "基准设计", "音乐", "音乐理解"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.acl-long.493"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.acl-long.493/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.acl-long.493.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "734edd9764cf504354728bc0a0297c72521d904a22b67a4c9df96a8d6a781310"
paper_digest_api_reader_plan_sha256: "e74ec13e86992457ec7369f2405814c3e607239d3dc627fb19027b2a4dc20f52"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "1fba1a032c913edb6c887f8c7ed7bc53889ff36a7459ff4211ee7551b9577881"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "881ef099cdd8e167cf0d57b10d2ea66ca39650967721c32bf6a6b9ddea3a0535"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "afb9820008586f65f237446d1c3a5747a3c3b5684023a8eba5260b22ca973812"
paper_digest_api_reader_author_count: 15
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7059317708e4def7cd65ed8d64bbc46778042c3f947a15414588b721f1e519a7"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-understanding","label":"音乐理解"}]
paper_digest_primary_task: "音乐理解"
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 看完整总谱而不是猜标题：MSU-Bench 用四级定位问答逼出文本与视觉的差距

> 英文题目：*Musical Score Understanding Benchmark: Evaluating Large Language Models’ Comprehension of Complete Musical Scores*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.acl-long.493`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://aclanthology.org/2026.acl-long.493/) · [官方 PDF](https://aclanthology.org/2026.acl-long.493.pdf)

标签：#基准测试 #基准设计 #音乐 #音乐理解

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Congren Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Yue Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Krinos Li：机构信息未能从会议 PDF 纯文本可靠映射
- Huichi Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Shijie Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Enyang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Ge Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Hongran An：机构信息未能从会议 PDF 纯文本可靠映射
- Haosen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Peiyuan Jing：机构信息未能从会议 PDF 纯文本可靠映射
- Kinhei Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenxuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaobing Li：机构信息未能从会议 PDF 纯文本可靠映射
- Maosong Sun：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该基准输入为完整乐谱的PDF图像或ABC记谱文本与生成式问答，输出为开放式音乐学答案，难点在于多页全谱定位、多声部复调解析与跨小节和声曲式推理。方法链分为四步：从MuseScore收集150份完整乐谱并统一默认版式导出PDF与MusicXML转ABC，其次按起音信息到织体曲式的四级体系构造通用与曲目定制问题，再经约二十年训练经验的10名音乐博士候选人人工给出并核验1800对参考答案，最后用ChatGPT-5、Claude Sonnet 4、Gemini 2.5 Pro三模型多数投票的大语言模型裁判做语义等价判定。与仅覆盖片段、合成谱或选择题的前人基准相比，该设计强制要求小节级定位与完整谱推理并支持文本与视觉双通道对照。在1800题零样本单轮批量评测中，Gemini 2.5 Pro文本总体准确率为49.44%，显著高于视觉最优Claude Opus 4的24.22%，揭示了模态鸿沟。结论仅适用于巴洛克到印象主义西方艺术音乐短谱到中等长度总谱的外推，视觉长谱、多乐章复杂版式与非西方记谱尚未验证。原文未披露训练、推理或部署成本之外的商业成本，仅报告评测耗时与GPU配置。

## 🔗 开源与复现资源

- 第三方资源：<https://x.ai/news/grok-4> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，读完要能复述什么？

这篇解读的输入是会议论文的正文证据与官方原图像素，目标是让刚进入语音音乐音频方向的研究生能复述方法与实验条件。需要保留的信息包括任务定义、4 级能力划分、数据来源与规模、两种输入模态的构造方式、评测流程、主要对照条件与关键数字。输出是 1 篇可核对的技术解读，不做营销式判断，不补无源数值。

研究对象是完整乐谱理解。白话说，就是给模型一整首曲子的谱面，让它回答从谱头信息到小节细节再到和声与曲式的多层问题。英文对应为 musical score understanding，缩写后文如需使用会固定写法。任务不是片段分类或音频转录，而是符号谱面上的定位加推理。模型必须先找到被问的小节或声部，再读出记号、音高或和声功能，最后组织成答案。

学习依赖上，先要理解谱面有两种机器可读形态。一种是文本形态的 ABC 记谱，白话说就是用字母与符号把音高节奏小节写成一行行文本，英文为 ABC notation。另一种是视觉形态的乐谱便携文档图像，白话说就是从制谱软件直接导出的页面图片，英文为 PDF score。论文把前者当作结构上界模态，把后者当作端到端视觉考查，前后对比才能说明视觉定位到底难在哪里。

### 同输入同目标的前人路线如何对照？

先按同输入对照。符号路线常用光学乐谱识别把图像转成数字格式，再学习嵌入表示。论文提到这类工作把谱面转为 MIDI、MusicXML 与 LilyPond 等格式，目标是支撑风格识别等下游任务。与之不同，ABC 记谱路线直接用文本字符编码小节与演奏指示，格式更紧凑，对大语言模型更友好。论文明确指出 MusicXML 保留更丰富的记谱细节，但序列更长且序列化选择更多，因此在需要控制长度与小节结构时选择 ABC。

再按同目标对照。乐谱问答需要比纯乐理选择题更强的谱面理解。论文梳理了 MusicTheoryBench、MusiXQA、ZIQI-Eval、SSMR-Bench 与 WildScore 等基准。前两者分别侧重乐理选择题广度与合成图像生成问答，SSMR-Bench 侧重符号推理，WildScore 侧重真实场景的多选问答。MSU-Bench 的差异在于统一文本与视觉两种模态，要求处理完整总谱并显式涉及多声部织体，问答形式为人工核验的生成式问答而非多选题。

按同监督与同运行阶段看，MSU-Bench 的监督来自人工撰写再经资深专家核验的参考答案，运行阶段分为零样本直接评测与低秩适配后的评测。这种安排使对照集中在输入模态与问题层级上，而不是把类别差异当成同条件胜负。初学者容易误以为合成数据规模大就一定更难，论文的对照提醒要同时看是否为完整谱、是否为人工标注、是否为生成式回答。

### 为什么完整谱的小节定位是关键操作？

完整谱带来的首要困难是定位。白话说，谱面很长，小节很多，问题常指名道姓问第几小节的某个记号。如果模型没有真正找到该小节，就可能用顺眼的邻近小节或训练记忆来填空。英文对应为 bar localisation，幻觉对应为 hallucination。论文把这两者绑在一起考查：定位错了，高层分析再流畅也不可靠。

下面这张图用同一首穆索尔斯基作品的同一提问展示两种结局，左侧标红叉，右侧标蓝勾，问题都是第 7 小节用了哪种 articulation，左侧回答 staccato，右侧回答 tenuto，读图时注意框选位置与用词颜色是判定依据。

> **看图路径：** 1. 先对比左右两栏同一提问下红叉与蓝勾标注的小节框位置差异；2. 再读下方问答框中红色 staccato 与蓝色 tenuto 的用词差异；3. 最后确认谱例标题与作曲家信息在两栏中保持一致以排除换谱干扰

[![原论文 Figure 1：(a) Hallucination. When queried about specific score features in bars, VLMs often fabricate…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5ab1dd3eb58e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5ab1dd3eb58e/figure-1.png)

*论文图 1。原论文 Figure 1：“(a) Hallucination. When queried about specific score features in bars, VLMs often fabricate responses that are not grounded in the actual score.”。*

这张图左侧把框标在第一行谱的中间小节并给出错误奏法，右侧把框标在第二行谱的对应小节并给出正确奏法。教学要点是先确认问的是哪一小节，再读该小节内的具体符号，而不是先猜奏法名称再找位置。论文用这个例子说明，视觉模型常在未 grounded 到真实谱面时编造回答，而理想行为是先定位后分析，从而支撑可靠的高层音乐学推理。作为例子，它只讲机制，不提供可推广的准确率数值。

**小节定位 × 幻觉：** 小节定位要求先找到第几小节再读谱面细节，幻觉指跳过定位直接编造记号或音高，二者搭配的原因是完整总谱中错误往往始于找错位置，组合意义是把高层音乐学推理的可信度锚定在可核查的局部证据上。

### 四级理解与双模态评测的全景如何走通？

MSU-Bench 把理解分为 4 级。白话说，第 1 级考谱头元数据，第 2 级考小节内的音符与记号，第 3 级考和弦与和声功能，第 4 级考织体与曲式。英文依次为 Onset Information、Notation and Note、Chord and Harmony、Texture and Form。每级占全部 1800 对问答中的 450 对，4 级各占 25%。第 2 级到第 4 级有意包含小节定位任务，第 1 级侧重起始信息。

先沿一个样本走完输入到输出。以穆索尔斯基《展览会之画》中的漫步主题为例，输入可以是 PDF 页面图像，也可以是由 MusicXML 转写来的 ABC 文本。表示层把同一音乐内容存成两种形态：图像保留五线谱版式，ABC 用字符保留小节与声部结构。组件层按级别提问，从作曲家与速度，到第 5 小节最低音，再到第 3 小节是否存在 G 小调和弦，最后到动机在哪几小节出现。目标层要求答案与谱面证据一致，输出为开放文本，由多数投票判定语义是否等价。

**ABC 记谱 × PDF 总谱图像：** ABC 记谱负责把小节线、音高、节奏与奏法转写为可直接切分与检索的字符序列，PDF 总谱图像负责保留真实阅读时的版式与视觉定位难度，二者搭配的理由是前者给出结构上界、后者考查端到端视觉 grounding，组合意义在于用同一套问题量化符号推理与视觉识别之间的落差。

下面这张图把上述样本的 4 级标注、ABC 元数据、ABC 音乐正文与 4 级示例问答放在同一版面，是理解全景最省力的一张图，读时注意颜色框与级别标签的对应关系。

> **看图路径：** 1. 先沿顶部原始谱例走完四个蓝色标注对应的级别与小节跨度；2. 再对照左下元数据框中调号拍号速度与声部声明的字段写法；3. 最后核对右下四个示例问答如何从元数据逐步过渡到动机发展

[![原论文 Figure 2：Illustration of multi-level understanding in MSU-Bench using Mussorgsky’s Pictures at an Exhibition.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5ab1dd3eb58e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5ab1dd3eb58e/figure-2.png)

*论文图 2。原论文 Figure 2：“Illustration of multi-level understanding in MSU-Bench using Mussorgsky’s Pictures at an Exhibition.”。*

这张图顶部是带 4 级标注的谱例摘录，左下是标题作曲家拍号调号与声部声明，右中是带小节编号的音乐正文，底部是 4 级示例问答。它显示 ABC 头部支撑第 1 级问题，正文中的小节标记与和弦符号支撑第 2 级到第 4 级问题。例如第 3 小节的和弦符号与调号共同蕴含 G 小调和声，第 1 小节到第 2 小节的动机变形保留了乐句级信息。这种从输入到表示到问题的闭环，正是后文实验要分别用文本与图像去复现的路径。

### ABC 的头部与正文各自编码什么，如何支撑四级问题？

ABC 记谱分为头部元数据与音乐正文两部分。白话说，头部像封面信息卡，正文像按小节切好的音符流水账。头部字段包括编号、标题、作曲家、默认时值、速度、拍号、调号与声部分配。正文用感叹号标记奏法、用方括号标记和弦、用百分号标记小节序号，用逗号表示低八度位移。这种写法使小节索引显式可见，模型可以直接按编号取数。

以论文给出的例子看，头部写明标题为展览会之画、作曲家为穆索尔斯基、默认时值为四分音符、速度为每四分音符 112 拍、拍号在不同小节间变化、调号为降 B 大调，声部分为高音谱表与低音谱表。正文第 1 小节给出带保持音记号的动机，第 2 小节给出其变形，第 3 小节给出多组和弦，第 5 小节给出带保持音的低音细节。这些字符共同支撑从第 1 级的身份识别到第 4 级的动机追踪。

速度字段的原始写法需要先认清符号与输入再谈计算目标，该字段把时值单位与每分钟拍数绑定，模型读到它才能回答速度类问题。

\[Q:1/4=112\]

声部分配字段说明哪一行 ABC 属于哪一个谱表与乐器名，它决定跨声部问题到哪里取证据，避免把高音与低音混在一起。

\[V:1 treble nm=“Piano” snm=“Pno.”\]

需要提醒的是，ABC 在此工作中被定义为符号到理论推理的结构上界模态，前提是有可靠的小节与声部结构可用。它缓解视觉处理误差，但不等同于视觉理解已被解决。初学者常见误解是把 ABC 当成谱面的纯文本替身，论文强调应把它看作承载音乐理解的媒介，因为小节结构与演奏信息都已显式编码。

### 数据如何构造，答案与评分如何保证可复现？

构造起点是 150 份来自 MuseScore 的乐谱。白话说，采样单位是 1 次成曲实例，可以是整曲、乐章或自成一体的摘录，而不是去重后的作品标题。视觉问答用每份谱的 PDF，文本问答用对应 MusicXML 转成的 ABC。所有 PDF 来自 MuseScore 源文件并用一致的默认版式导出，避免扫描伪影，保持制谱清晰度。人工检查保证每行谱开头或每段可见小节号，使小节索引问题不受编号缺失干扰。

问题分两类。第 1 级到第 3 级用适用于所有谱的通用模板，覆盖记谱常识与和声概念。第 4 级按每首曲子的独特织体与主题定制，追问最常见的伴奏类型、主副主题位置、动机首次出现与发展方式、动机的主要结构特征等。若某概念在简单谱中未实质出现，则在同级定义内换用音乐学上等价的问法，而不是降为更 trivial 的变体。全部 1800 对问答都经过人工核验，参考答案先手写再由具有 20 年以上专业经验的领域专家复核，并与对应谱面显式对齐。

**生成式问答 × 多数投票评测：** 生成式问答负责允许同义不同形的开放回答，多数投票评测负责用 3 个不同大模型分别判对错再取多数，分工上前者保留表达多样性、后者压制单一评判的随机性，搭配理由是严格字符串匹配无法等价判定 V-I 与正格终止，组合后得到更贴近语义的自动评分。

评测采用集成的大模型当裁判框架。白话说，就是让 3 个不同模型各自判断生成答案与参考答案语义是否一致，再取多数。英文为 LLM-as-a-judge。论文用 ChatGPT-5、Claude Sonnet 4 与 Gemini 2.5 Pro 三者投票，以缓解随机性与偏置，并经人工抽查验证。报告显示人与自动评测的皮尔逊相关为 0.805 且显著，McNemar 检验无显著差异，四方一致率为 83.33%，置信区间为 79.44% 到 87.22%，支持该流程的稳定性。

下面这张图把数据、级别设置、评测与贡献放在四列中，读时重点看箭头方向与 2 阶段评测的衔接，它是复现数据管线的总览。

> **看图路径：** 1. 先沿最左侧数据列看 PDF 与 XML 如何汇入 ABC 记谱这一支路；2. 再比较中间两行通用模板题与每曲定制题的分工位置；3. 最后看右侧评测列中人工核验与多数投票两步的先后顺序

[![原论文 Figure 3：MSU-Bench data curation and evaluation framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5ab1dd3eb58e/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5ab1dd3eb58e/figure-3.png)

*论文图 3。原论文 Figure 3：“MSU-Bench data curation and evaluation framework.”。*

这张图左侧显示 150 份谱的 PDF 与 XML 汇入 ABC，中间上行是通用题、下行是定制题，右侧上半是人工核验参考答案、下半是多数投票判定生成答案。它说明监督来源是人工，自动评分只是语义等价判定器。复现时应先固定这条管线，再谈模型与提示词，否则分数不可比。资源状态方面，本次收到的第三方链接本次未能确认可达，因此不写其可用性结论。

### 划分、基线、指标与训练配置如何对齐？

划分按 6 比 2 比 2 切分 150 份谱，对应训练 90 份、验证 30 份、测试 30 份。测试集固定且从不用于训练，微调评测所用测试谱与零样本评测完全相同。多模态微调时因 token 上限移除了部分过长训练谱，且只在训练验证切分确定前从训练池移除，不影响固定测试集。被移除的长谱包括降 C 小调奏鸣曲、大提琴奏鸣曲、A 小调钢琴协奏曲、第二匈牙利狂想曲、两首叙事曲、Op.42 奏鸣曲与 A 小调第一协奏曲等，复现时需按此处理训练池。

基线覆盖文本与视觉两类。文本问答评测包含 ChatGPT-5 系列、Claude 系列、Gemini 系列、Grok 4、Qwen 系列、DeepSeek 与 Llama 系列等十余个模型。视觉问答评测包含 Claude、Gemini、ChatGPT-5-mini、Grok 4 与 Qwen-VL 系列。微调用 Qwen3 的 0.6B、1.7B、4B 与 Qwen2.5-VL-3B，适配方式为低秩适配，英文为 LoRA。Qwen2.5-VL-3B 设计 3 种输入：仅 PDF、仅 ABC、PDF 加 ABC 双输入。

指标有两层。单题正确率分级别与总体报告，总体为 1800 对上的平均。逐级成功率定义为从第 1 级到第 l 级全部答对的谱面比例，并用 Wilson 区间给出 95% 置信区间。推理在本地 A800 上用 vLLM 与统一模板进行，解码温度 0.95、top-p 0.7、top-k 50，裁判阶段温度置 0 且只生成一个判定 token。微调训练 20 轮，优化器为 AdamW，学习率 5 乘 10 的负 5 次方，余弦调度，10% 预热，批量大小 1，梯度累积 16，LoRA 秩为 8。

下表先回答通用知识是否被遗忘的问题，它比较微调前后在外部综合测试上的表现，公平条件是同一模型、同一外部题集，指标方向为越高越好，数值保留原文写法。

| Models | STEM | Humanities | Social Sciences | Other Subjects |
| --- | --- | --- | --- | --- |
| Qwen3-4B | 72.63 | 81.44 | 63.21 | 74.61 |
| Qwen2.5-VL-3B-Instruct | 60.60 | 75.63 | 58.72 | 69.65 |

该表显示 Qwen3-4B 与 Qwen2.5-VL-3B 在 STEM、人文、社科与其他科目上的基线分数，微调前后变化很小，支持低秩适配在提升乐谱理解的同时基本保留通用知识。但要注意这只是外部基准的保持情况，不能直接等同于乐谱任务本身的提升幅度，乐谱主结果需看下一节的双模态对照。

### 文本与视觉的主结果差距有多大，严格成功率说明什么？

主问题是测什么、在什么条件下比。测的是完整谱上 4 级问题的生成式回答正确率，对比的是同一题集下文本 ABC 输入与 PDF 图像输入的实际可运行模型，条件一致处在于问题与谱面一一对应，不一致处在于表示模态不同。指标方向为正确率越高越好，逐级成功率越到高层越难维持。

文本问答明显高于视觉问答。论文报告文本侧最好总体约一半左右，视觉侧最好总体约 20% 左右。级别上文本侧在第 1 级与第 2 级相对更高，视觉侧各级别普遍偏低。论文还报告同时给出同谱 12 题的批量提问优于逐题提问，提示低层答案可为高层提供上下文，但增益幅度因模型而异。标题-only 输入在各级表现弱，支持答案依赖谱面内容而非仅靠标题猜测。

**逐级成功率 × 单题正确率：** 单题正确率负责统计所有问答对中答对的比例，逐级成功率要求同一首曲子从第 1 级到第 l 级全部答对才计分，前者反映孤立解题能力、后者反映跨层一致性，搭配原因是高单题分数可能掩盖误差累积，组合意义是揭示多级理解比单点识别严格得多。

下面柱状图比较基线与适配后在测试集上的分级表现，读时先分清上排文本与下排视觉，再看颜色图例代表的基线与适配分支。

> **看图路径：** 1. 先按上排文本问答比较三个尺寸下灰色基线与蓝色适配柱的高度变化；2. 再按下排视觉问答比较仅 PDF、仅 ABC、双输入三组红色柱的差异；3. 最后固定 L1 到 L4 横轴观察哪一组随难度上升仍保持增长

[![原论文 Figure 5：Performance of baseline and LoRA-adapted models on MSU-Bench (testing set).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5ab1dd3eb58e/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5ab1dd3eb58e/figure-5.png)

*论文图 5。原论文 Figure 5：“Performance of baseline and LoRA-adapted models on MSU-Bench (testing set).”。*

这张图上排显示 Qwen3 从 0.6B 到 4B 随尺寸增大而文本正确率提升，4B 最稳，且从 L1 到 L4 并非单调下降，支持 ABC 下逻辑推理可部分应对难题。下排显示 Qwen2.5-VL-3B 在仅 ABC 输入时明显优于仅 PDF，很可能因为 ABC 减少了 PDF 中的视觉噪声。双输入组受 token 上限约束，表现介于两者之间。代价是长谱需从训练池移除，且视觉端到端能力仍未追平文本上界。

为保留可运行策略的数字对照，下表整理论文正文直接报告的零样本关键数字，比较问题是同一题集下谁在文本与视觉各领先，公平条件是单次运行内评测同谱 12 题，指标为分级与总体正确率。

| 条件 | 指标 | 领先模型 | Level 1 | Level 3 | Overall |
| --- | --- | --- | --- | --- | --- |
| 视觉问答 | 正确率 | Claude Opus 4 | 27.11% | 30.44% | 24.22% |

该表的主要收益是文本模态领先幅度大，视觉最强也仅略超 20%。具体代价与反例是第 4 级上 ChatGPT-5-mini 在文本侧曾达到 40.89% 居首，说明小尺寸模型在复杂推理上并非全败；视觉侧 Claude Sonnet 4 在第 1 级领先而总体仍低，说明单级领先不等于总体可用。未胜出项包括多个开源中小模型总体低于 40%，提示通用语言能力不直接转化为乐谱理解。逐级成功率进一步收紧结论：文本侧第 1 级约 25% 到 35%，到第 2 级跌破 10%，到第 3 级近乎归零；视觉侧从第 1 级 5% 到 10% 起步，到第 2 级几乎归零，剩余谱数文本侧约 41.5 份、视觉侧仅约 4.25 份。

### 哪些对照支持结论，失败案例与成本边界是什么？

论文做了至少两类特有细节对照。第一类是提问方式对照：逐题提问与同谱 12 题批量提问相比，后者总体更高，尤其在 Claude 与 Qwen-VL 上提升明显。这支持层级推理可利用共享谱面上下文，但论文只报告方向与幅度差异，未给出统一的因果机制，因此表述为支持而非证明。第二类是内容依赖对照：仅给标题时各级表现弱，支持模型在有谱面输入时确实使用局部音乐线索，而不是靠标题记忆作答。

**低秩适配微调 × 通用知识保持：** 低秩适配微调负责只更新小规模增量参数来学习乐谱问答，通用知识保持负责用外部综合测试检验是否遗忘数理与人文知识，前者提供乐谱能力增益、后者提供遗忘约束，搭配理由是专用提升不应以牺牲通用推理为代价，组合意义是验证增益是否可用且可部署。

失败条件集中在视觉定位。论文以 D 小调赋格为例给出 3 个代表性错误：第 2 级把第 15 小节最高音误判为 D5 而真值为 A4，属于音高范围高估；第 3 级对第 54 小节是否存在正格终止无法可靠判定而回避作答，属于和声关系未 grounded；第 4 级把动机首次出现从第 1 小节错锚到第 2 小节，属于对开头休止的先验误读。这些例子说明错误多始于小节级 grounding，而非单纯的乐理知识缺失。

成本方面，超过 40% 总体正确率的模型中，大型专有模型完整评测常需 11 小时以上，而 Qwen3-VL-235B 以约 1 小时达到 41.22%，呈现精度与效率的权衡。微调后通用测试基本稳定，Qwen3-4B 甚至在各科目小幅上升，Qwen2.5-VL-3B 在不同输入模态下偏差很小，支持遗忘有限。但总体趋势不等于每组每步都成立，长谱移除与批量提问增益的模型差异都是边界条件。

### 哪些结论不能推广，还缺什么验证？

首先是模态差距的解释边界。论文报告 ABC 缓解了部分视觉误差，但文本与视觉之间仍有巨大落差。按原文限定，ABC 应理解为符号推理的结构上界，而不是视觉理解已被解决的证据。未测量误判率细分布、延迟分解与实际部署成本时，不应承诺这些量得到改善。

其次是数据与训练的缺项。计算约束导致多模态微调排除了部分长谱，测试集虽不受影响，但训练分布已变，复现时必须说明该过滤。曲目范围主要集中在巴洛克到 20 世纪初的西方艺术音乐，浪漫派权重较高，非西方、当代与更多记谱实践尚未覆盖。论文明确把扩展曲目作为未来工作，当前结论不宜推广到所有记谱体系。

最后是评测的适用条件。多数投票依赖 3 个大模型与固定模板，温度置零以求确定性，但这不等于系统输出确定，因为被测模型的解码仍是随机采样。相关性不等于因果，批量提问更好可能来自上下文利用，也可能来自提示长度与注意分配变化，待进一步验证。缺少对每步推理的细粒度标注时，不能把高层得分直接当成高层理解的充分证明。

### 复现先做什么，需要保留哪些超参数与信息条件？

先固定数据管线。从 MuseScore 获取 150 份谱的 PDF 与 MusicXML，转写为 ABC，检查小节号在每行开头可见，按 90、30、30 划分并锁定 30 份测试谱。通用模板覆盖第 1 级到第 3 级，第 4 级按曲定制，全部参考答案经人工复核。问题文本与谱面模态一一对应，文本侧输入 ABC，视觉侧输入 PDF 页面图像。

再固定推理与评分。推理模板区分是否需要定位：定位题必须先找章节乐章段落小节拍谱表声部再读数，不确定时输出未知，非定位题用标准乐理作答。评分用 3 个裁判独立输出 0 或 1 再取多数，模板固定且温度为 0。被测模型解码按温度 0.95、top-p 0.7、top-k 50 复现，硬件为 A800 上的 vLLM 管线。微调按 LoRA 秩 8、20 轮、学习率 5 乘 10 的负 5 次方、余弦调度、10% 预热、批量 1、累积 16 复现，3 种输入分别跑仅 PDF、仅 ABC 与双输入。

下表整理可直接照抄的划分与训练配置对照，比较问题是复现时哪些数字必须一致，公平条件是同一测试集与同一优化设置，指标方向为按原文执行而非调优。

| 项目 | 配置 | 训练集 | 验证集 | 测试集 |
| --- | --- | --- | --- | --- |
| 数据划分 | 6 比 2 比 2 | 90 份 | 30 份 | 30 份 |
| 优化设置 | AdamW 加余弦调度 | 学习率 5×10−5 | 预热 10% | 累积 16 |
| 评测一致性 | 皮尔逊 0.805 | 显著 p 小于 0.001 | 一致率 83.33% | 区间 79.44% 到 87.22% |

该表的收益是给出最小可复现集合，代价是未包含提示词调优与长谱过滤的全部细节，复现长谱双输入时需预留 token 预算。代码开源、权重下载与系统可运行要分别确认：论文给出的是方法与配置描述，不是开箱即用的部署承诺。

### 何时值得尝试这套方法，下一步补哪项验证？

当你的任务需要模型读完整总谱并回答可定位的问题时，这套 4 级划分值得借鉴。它把谱头信息、局部记号、和声功能与织体曲式拆成依赖链，便于定位错误到底出在哪 1 级。当你只有 PDF 图像时，应先预期视觉正确率远低于 ABC 上界，并把小节定位作为首要优化目标，而不是直接堆高层推理。

当你考虑微调时，低秩适配在小参数模型上已显示分级提升，且通用知识保持基本稳定，适合在保留通用能力的前提下补乐谱能力。但要注意长谱 token 约束与批量提问带来的上下文增益，实际部署时需权衡推理时间与精度。约 1 小时与 11 小时以上的差距提示，选型不能只看总体分数。

下一步最值得补的验证是细粒度定位标注与跨风格扩展。一方面给每道定位题配上谱面坐标或小节框，使幻觉可被自动度量；另一方面引入非西方与当代记谱，检验 4 级定义是否仍然适用。只有补上这两项，才能把当前在西方曲目上的结构上界结论，推进为更一般的视觉乐谱理解判断。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
