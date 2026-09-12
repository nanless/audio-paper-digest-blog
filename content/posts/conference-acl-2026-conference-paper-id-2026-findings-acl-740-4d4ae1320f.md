---
title: "Self-EmoQ: Plutchik-Guided Value-based Planning to Drive Streaming Emotional TTS"
date: 2026-09-12
draft: false
description: "针对流式语音对话必须在文本生成前给出情绪条件的问题，Self-EmoQ 用话语级马尔可夫决策过程加模仿奖励与普鲁契克理论奖励学习情绪规划器，四个对话数据集上报告了情绪排序与回复质量的提升，代价是依赖大模型打分与离散情绪集合。"
tags: ["强化学习", "大语言模型", "流式处理", "语音", "文本到语音"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.740"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.740/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.740.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "49600bc5752f7207e0e4719c163d45bacabfbc6ee9b8a87c8a7166943b32b98b"
paper_digest_api_reader_plan_sha256: "29008cf4297df740708adf208a2dd9fcc5567be2687c0bf6273ddc4fe1874547"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ca62ac65d11850c63f78b5054b219806b0b88400d08c272d90490d7ee8ba4ba0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "244bcff3a156fc71c4fad966db0c817acd1754cb145efcda918c53c7ec4713ba"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e8fe8af8d2a94fd4128430d5f8a6fcd8564e3778dc569e08d821840a980201d8"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "d3df93babb5cc181c31429e2ba3a217b5dbccbed47053adba02f57cc850779b7"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_task: "文本到语音"
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 先定情绪再说话：Self-EmoQ 把情绪当作可规划的动作

> 英文题目：*Self-EmoQ: Plutchik-Guided Value-based Planning to Drive Streaming Emotional TTS*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.740`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.740/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.740.pdf)

标签：#强化学习 #大语言模型 #流式处理 #语音 #文本到语音

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yue Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Hongyan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Luo Ji：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作处理多轮对话中系统自我情绪先验决策，输入为对话历史、用户话语与背景描述，输出为离散情绪标签、情绪化文本回复与对应语音，难点在于流式合成要求情绪在文本解码前就绪而传统识别只能事后标注。方法先将对话建模为话语级马尔可夫决策过程，以对话状态为输入、以候选情绪为动作，将情绪选择定义为最大化累积折扣奖励的决策问题。再用混合奖励训练即插即用规划器，模仿项贴合数据集标注而理论项由大模型按普拉切克情绪轮结构打分，学到的Q值排序输出最优情绪。最后以上一步选定的最优情绪同时条件化大语言模型文本生成与情绪语音合成，使部分文本边生成边转为情绪一致语音。与提示先行解码和监督模仿情绪预测相比，关键差异是把情绪当作可优化的长期决策变量并用贝尔曼自举做跨轮规划，因而能超越数据集轨迹优化整轮对话质量。在DailyDialog语料下，Self-EmoQ的Reward指标为0.57，高于w/ SFT基线的Reward指标0.45。该结论适用边界受限于离散情绪集合与四类英文对话语料，尚未验证混合情绪、跨语言与真实打断场景，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么要提前定情绪？

这篇论文研究的是面向实时对话的流式情绪语音系统。输入是多轮对话场景，包含背景描述、此前用户与系统的交替话语，以及当前用户新说的一句话。输出是两部分，先是系统下一轮应取的情绪标签，再是按该情绪生成的文字回复与对应语音。目标读者是刚进入语音与对话领域的研究生，需要先建立时间约束的概念。

在工业级联系统中，常见链路是语音识别转文字、大模型生成文字、语音合成播报。为了降低等待感，工程上采用流式衔接，文字每生成一个片段就立刻送去合成声音。这就带来一个矛盾，情绪条件必须在合成开始前给出，否则合成器只能用中性语气读出开头，后面再改就来不及。论文把这一点作为起点，强调不是先把声音丢给模型就能自然有感情，而是要在文字生成之前就完成 1 次情绪决策。

需要保留的关键信息是，情绪在这里不是事后分析标签，而是前置控制信号。系统在每一轮都要输出三元组，当前用户话语、系统情绪、系统回复，历史则不断累积这些三元组。后续的文本生成器与语音合成器都以同一个情绪为条件，这样文字用词与声音韵律才一致。论文声明的资源状态是本次未发现完成验证的公开资源，因此不能说代码模型数据已公开，只能按正文讨论方法与实验。

### 已有路线为什么接不上流式语音？

与本工作同输入同目标的相关路线主要有 3 条。第一条是对话情绪识别，输入是已产生的上下文与当前完整话语，目标是判断说话人表达的情绪。这类方法善于利用上下文与说话人关系建模，生成式做法还能引入多粒度监督。但它的运行阶段在文本生成之后，对流式合成没有帮助，因为等它算出情绪时语音开头已经播出。

第二条是对话情绪预测，输入是过去的话语与情绪轨迹，目标是预测对方下一轮会出现什么情绪。它在时间上更靠前，但监督目标是复现数据集中标注的未来情绪，缺乏对长期交互质量的优化，也难以探索语料中少见但合理的情绪。第 3 条是情绪语音合成，输入是文本加预先给定的情绪标签，目标是合成可控韵律与表现力的语音。已有零样本与细粒度控制方法把情绪当作静态输入，没有建模情绪在多轮中如何演进。

因此论文的判断是，缺的不是更准的事后识别器，而是一个能在回复前做决策、并考虑未来多轮影响的规划器。这一定位决定了后文把情绪建模为动作，把理论约束建模为回报，而不是再训练一个分类器。

### 三条流水线的时间差在哪里？

为了讲清时间差，论文用一张三行对比图说明同一条时间轴上的不同做法。第一行是无情绪考虑的普通流水线，用户说话后大模型生成文字，语音合成直接播报，全程没有情绪信号。第二行是常规情绪认知的做法，文字生成完整后才调用识别模块得到情绪，此时再想回头指导已经开始的合成，在流式设定下是来不及的。第三行是本文做法，在用户输入到达后先调用规划器确定情绪，再把该情绪同时送给文本生成与语音合成。

> **看图路径：** 1. 先沿顶部时间轴看三行从用户输入到语音波形的先后顺序；2. 再看中间一行情绪识别模块的箭头何时才产生情绪并被打叉；3. 最后看底行新增规划模块如何同时指向文本生成与语音合成

[![原论文 Figure 1：Comparison of different streaming, emotional LLM-TTS paradigms.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/94606bc08a57/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/94606bc08a57/figure-1.png)

*论文图 1。原论文 Figure 1：“Comparison of different streaming, emotional LLM-TTS paradigms.”。*

从像素上看，该图顶部有一条向右的时间箭头，三行都从左侧人物与对话气泡出发，经过语言模型方块与文稿图标再到语音合成方块与波形。中间一行的识别模块位于文稿之后，另有一条指向情绪图标再指向合成器的箭头被打叉，表示此路不通。底行新增的规划模块位于最左侧输入之下，输出的情绪图标分两路分别指向上游的文本生成与下游的语音合成，且最终波形上叠加了情绪图标。这组箭头说明，关键不是识别准不准，而是情绪信号出现的位置必须早于解码开始。

### Self-EmoQ 如何把一次对话走成状态动作回报？

Self-EmoQ 的全景可以沿一个样本走一遍。假设当前状态由背景描述、此前多轮三元组历史和当前用户问句拼接而成。规划器先从候选情绪集合中选一个作为动作，例如愤怒或悲伤。然后固定的文本生成器以状态加该情绪为条件写出回复，语音合成器再以同一情绪为条件合成声音。环境给出的回报综合了是否命中数据集标注与是否符合心理学理论，历史更新后进入下一轮。

论文把上述过程形式化为话语级马尔可夫决策过程。状态转移包含两步，一是把当前用户话语、所选情绪与生成回复追加进历史，二是等待用户给出下一句话。策略目标是最大化折扣累计回报，而不是只让当前轮最像标注。这种建模把情绪从描述性标签提升为可控决策变量，是全文的核心抽象。

训练与部署时模块的角色不同。训练时规划器从预训练语言模型初始化，通过价值学习调整参数；部署时它作为即插即用模块位于大模型与语音合成上游，每轮用价值最大原则选情绪，不再更新参数。下面的框架图展示了这种左右分工。

> **看图路径：** 1. 先看左侧输入分为状态段与动作段并在顶部做平均的标注；2. 再看中间当前价值与下一状态目标价值如何连到损失公式；3. 最后看右侧情绪行为对照表如何经由回报箭头参与训练

[![原论文 Figure 2：Framework of Self-EmoQ, which is post-trained on pretrained LLM, and produces Q-values by…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/94606bc08a57/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/94606bc08a57/figure-2.png)

*论文图 2。原论文 Figure 2：“Framework of Self-EmoQ, which is post-trained on pretrained LLM, and produces Q-values by averaging output token logprobs.”。*

该图左侧是标注为预训练的规划器方块，下方箭头区分状态段与动作段，顶部标有平均操作，含义是对动作选项对应输出标记的对数概率取平均得到价值。中间是当前价值与下一状态目标价值连到损失的示意，右侧是多轮对话样例与情绪行为对照表，对照表经由回报箭头参与损失计算。这说明训练信号既来自对话样本，也来自理论指导的打分，而不是单一分类交叉熵。

### 状态动作与混合回报具体怎么算？

状态的构造是直接拼接。论文给出状态为背景、历史与当前用户问句的组合，历史本身是此前每轮用户话语、系统情绪与系统回复的序列。动作就是系统情绪，候选集合大小取决于数据集，例如部分数据集为 7 类，部分为 10 类。回复由固定的预训练大模型按状态加情绪生成，这意味着规划器只负责选情绪，不负责写句子，文本质量仍依赖下游大模型。

**对话情绪识别 × 自我情绪规划：** 对话情绪识别负责在完整回复产生后判断说话人表达了什么情绪，分工是事后理解；自我情绪规划负责在回复产生前决定系统下一轮应采取什么情绪，分工是事前决策。二者搭配的理由是流式语音合成不能等待全文完成再补情绪，必须提前拿到条件。组合意义是把情绪从被识别的标签变成驱动文本与语音的控制变量。

回报是两项的线性加权。一项是模仿奖励，用指示函数判断所选情绪是否等于数据集标注，命中得 1 分，否则零分。另一项是普鲁契克分数，由外部大模型按 3 个维度打分后取平均，维度分别是情绪对齐、情绪转移合理性、情绪功能一致性。权重控制理论项占比，权重越大越强调符合人类情绪演化规律，越小越贴近语料标注。论文用附录给出打分提示词，并用人类抽查验证打分一致性。

价值估计的实现值得初学者注意。规划器把状态编码为指令模板，列出全部候选情绪，再把每个候选动作拼在后面，形成多选题式的状态动作提示。语言模型对该提示做前向推理，取对应选项输出标记的对数概率平均值作为该状态动作的价值。部署时对所有候选动作算价值并取最大者，训练时按贝尔曼方程用即时回报加折扣后的下一状态最大价值构造目标，用平方误差更新网络，并定期同步目标网络。

**话语级马尔可夫决策过程 × 深度 Q 网络：** 话语级马尔可夫决策过程负责定义状态为对话背景加历史加当前用户话语、动作为系统情绪、回报为长期情绪收益，分工是给出序列决策的形式；深度 Q 网络负责用预训练语言模型估计每个状态动作对的价值并按贝尔曼方程更新，分工是给出可学习的求解器。搭配理由是情绪选择影响后续多轮发展，需要估计长期回报而非单轮分类。组合意义是得到即插即用的情绪价值模块。

普鲁契克情绪轮本身是心理学理论，认为 8 种基本情绪按圆周排列，相邻转移更自然，对立转移若无中介则不太可信，且每种情绪对应典型行为与功能，例如悲伤对应求助、愤怒对应攻击、惊讶对应冻结、恐惧对应逃离。论文用该拓扑约束打分，抑制突兀的情绪跳变。

> **看图路径：** 1. 先确认花瓣按圆周排列的八种基本情绪与由内向外的强度分层；2. 再找相对位置相反的两瓣理解对立关系；3. 最后看相邻花瓣交叠处标注的复合情绪名称

[![原论文 Figure 3：The Plutchik’s wheel of emotions.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/94606bc08a57/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/94606bc08a57/figure-3.png)

*论文图 3。原论文 Figure 3：“The Plutchik’s wheel of emotions.”。*

该轮形图像素呈放射状花瓣，中心向外分为多层强度，圆周上不同颜色花瓣代表不同情绪家族，相邻花瓣交叠处标有复合情绪。对初学者而言，不必背下全部名词，关键是记住两条可操作规律，一是优先在对角线及其邻域内转移，二是对立位置转移需有上下文理由。这两条规律后文会在转移矩阵与期望转移比例中被验证。

**模仿奖励 × 普鲁契克分数：** 模仿奖励负责对照数据集中标注的真实情绪给命中动作加分，分工是贴近语料分布；普鲁契克分数负责由大模型按情绪对齐、转移合理性与情绪功能一致性 3 维打分，分工是引入心理学理论约束。搭配理由是只模仿会复制标注噪声与局限，只讲理论会脱离语料。二者线性加权组合后，既学语料模式又抑制对立情绪跳变等不自然转移。

**情绪条件文本生成 × 情绪条件语音合成：** 情绪条件文本生成负责把规划出的情绪注入回复指令模板，影响用词与情感强度，分工是管文字内容；情绪条件语音合成负责把同一情绪嵌入调制韵律、语速与声学风格，分工是管声音表现。搭配理由是两者共享同一个前置决策才能口径一致。组合意义是文本一边流式解码，语音一边按已定情绪合成，不必等全文再补情绪。

一个教学例子是，用户说遭遇离婚打击并抱怨同居很累，系统若选悲伤并回应共情安慰，在对齐与功能上得分较高；若突然转到强烈喜悦且无过渡，则转移合理性会被扣分。该例子只说明打分逻辑，不代表论文报告了该样本的具体分数。

### 训练时参数谁更新，谁冻结，数据如何流转？

训练的起点是从预训练语言模型初始化规划器，下游负责写回复的大模型在训练中保持固定。论文报告情绪规划主干采用小规模指令模型，回复生成采用更大规模指令模型，但原文未给出下游大模型是否参与梯度更新之外的全部工程细节，因此只能按证据说规划器是被微调的模块，下游生成器是固定的条件生成器，不从模型名称推定额外实现。

数据流转按伪代码组织。先把原始数据集装入回放池，每步抽取一批样本拼成状态，用贪心加探索策略选情绪，按混合回报公式算分并生成回复，再把转移存回回放池。随后从池中采样计算时序差分目标，即即时回报加折扣后的下一状态最大目标价值，最小化当前价值与该目标的平方误差。每隔固定步数把目标网络同步为当前网络。论文报告了序列长度、探索率、更新间隔、批量大小、学习率、折扣因子与回放池容量的具体取值，复现时应按原文设置，不自行替换优化器细节。

损失曲线按不同理论权重分别绘制，4 个数据集上总体呈下降并收敛，但下降速度与抖动不同。论文称训练稳定，这属于对曲线的直接描述。需要指出，原文未报告每次更新的墙钟时间与显存占用，因此不能从收敛曲线推定训练成本很低，成本需另行测量。

### 在哪些数据与基线上测，用什么指标看好坏？

实验使用 4 个对话情绪数据集，分别是日常对话、情景喜剧转录的两套不同标注版本，以及视听双人交互语料。它们覆盖日常闲聊与戏剧化对话，轮数与情绪类别数不同。论文给出各数据集在训练验证测试上的会话数与话语数，以及情绪类别数，复现时应按原文划分取数，不自行重新切分。

基线分为 3 类。提示类包括直接推理、思维链式先判情绪再写策略回复、计划求解式先列子目标再执行、元认知式自我反思修订。监督类包括在情绪标注样本上微调，以及按上下文情绪策略回复转移建模的状态机微调。强化类包括在情绪决策过程上做表格型 Q 学习的基线。这些基线与本文方法在回复生成阶段共用或对齐生成条件，比较时需注意提示基线未更新参数，监督基线更新了参数，表格型强化基线与本文的深度价值规划器容量不同。

指标分 3 层。情绪决策层用排序指标，把候选情绪按价值排序后与回报信号比较，报告召回、平均倒数排名与归一化折损累计增益，数值越大表示把高回报情绪排得越靠前。回复文本层用双元组精确率、基于最长公共子序列的召回型度量、语料级共识度量与多样性度量，前三者越大越接近参考回复，最后一个越大表示用词越不重复。语音层用基于语音表征的相似度与感知语音质量客观分，前者看内容与参考的接近程度，后者看听感质量。人类评价另设流利度、情绪、接受度、有效性、敏感性、对齐度与满意度，由实习生按量表打分并做显著性检验。

### 主结果在测什么，赢在哪里，代价是什么？

主结果要回答两个问题，情绪是否选得更符合长期回报，选对情绪后回复与语音是否更好。比较条件是同一数据集划分与同一生成流程，指标方向如上节所述均为越大越好。论文报告，在 4 个数据集上本文方法在回报与排序指标上达到最高或接近最高，回复的相似度与多样性也优于提示与监督基线，下游语音在流式与非流式两种设定下保持稳定，而部分基线在流式设定下明显下滑。

为说明人类与自动打分的一致性，论文抽取子集让人按同一理论维度重打普鲁契克分数，并报告均值、标准差与相关系数。下表提出的问题是，自动打分与人类打分在均值上是否接近、在排序上是否一致。公平条件是同一批样本、同一量表与同一维度。指标方向是均值越接近越好，相关系数与一致性系数越大越好。

| kappa κ between | them, to | indicate | their | correlation |
| --- | --- | --- | --- | --- |
|  | mean | std | ρ | κ |
| GPT-4o | 4.31 | 1.00 | 0.87 | 0.58 |
| GPT-4o | 4.13 | 1.16 | 0.96 | 0.78 |

表后解释是，自动打分在均值上与人类略有偏差，但在排序相关上达到较高水平，这支持用它作为训练回报，但不支持把它当作人类判断的完全替代。具体代价是，打分依赖外部大模型，会引入额外计算开销与潜在偏置，且原文未报告该打分在全部数据上的误判率，因此不能承诺其在所有场景下都可靠。另一张切分同一矩阵的表进一步展示不同维度的取值，便于核对数值是否对应同一实验阶段与同一聚合对象。

| kappa κ between | them, to | indicate | their | correlation |
| --- | --- | --- | --- | --- |
|  | mean | std | ρ | κ |
| GPT-4o | 4.13 | 1.16 | 0.96 | 0.78 |
| GPT-4o | 3.86 | 1.33 | 0.95 | 0.72 |

结合该表看，情绪对齐与功能维度的相关性较高，但这仍是相关性而非因果，不能据此说理论打分导致了回复质量提升，只能说两者变化方向一致。未胜出项也需记录，例如在个别数据集的个别排序指标上，监督基线与本文方法差距较小，说明当语料标注干净且对话较短时，单纯模仿也能排得不错。本文的优势更多体现在需要长期一致性的长对话与需要抑制突兀跳变的场景。

### 拿掉哪一块会变差，超参数如何随数据而变？

消融要回答规划器的增益来自哪里。论文报告了 4 组对照，一是先做监督微调再做强化学习，二是用额外多层感知机头从零学习价值，三是去掉对话历史，四是去掉情绪描述。结果是，直接做价值学习优于先监督再强化，原因是先监督会让探索变难；用平均输出标记概率估计价值优于新增随机初始化的价值头；去掉历史或描述都会导致回报下降，说明两者都为决策提供了必要信息条件。这些结论只在论文报告的 4 个数据集与指标范围内成立，不补写拿掉后必然怎样的一般规律。

超参数敏感性分两条。第一条是折扣因子，论文在不同取值下报告平均回报，并发现最优值与平均对话长度相关。长对话语料偏好更大的折扣，因为远期一致性更重要；短对话在较小折扣下即达峰值。下面的曲线用于核对这一趋势。

> **看图路径：** 1. 先确认横轴为折扣因子纵轴为平均回报及四条数据集曲线；2. 再比较短对话与长对话曲线的峰值位置差异；3. 最后观察过大折扣是否在部分数据集上带来回报回落

[![原论文 Figure 5：Average rewards on different choices of γ.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/94606bc08a57/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/94606bc08a57/figure-5.png)

*论文图 5。原论文 Figure 5：“Average rewards on different choices of γ.”。*

该图像素横轴为折扣因子，纵轴为回报，4 条曲线分别对应 4 个数据集。随着横轴增大，长对话曲线的峰值更靠右，短对话曲线更早出现平顶或回落。这支持按数据特点调折扣，而不支持用单一折扣套用全部任务。像素不能精确读出的具体数值不应硬写，应以原文表格与正文报告为准。

**折扣因子 × 普鲁契克权重：** 折扣因子负责调节未来回报在当前价值中的比重，分工是控制看多远；普鲁契克权重负责调节理论分数与模仿分数的比例，分工是控制听谁的。搭配理由是长对话更需要远期一致性，噪声大的语料更需要理论约束。组合意义是通过两组敏感性分析找到不同数据集上的折中点，而不是用一组固定超参数套用全部场景。

第二条是理论权重，权重越大越听理论，越小越听标注。论文报告不同权重下的平均回报在各数据集上峰值位置不同，说明语料噪声与情绪模糊程度不同，需要分别权衡。该分析的限制是，权重搜索本身带来额外训练成本，原文未报告完整搜索耗时，因此复现预算需自行测量。

### 哪些边界没有测，哪些结论不能推广？

论文在结尾明确了两项限制。一是回报打分依赖大语言模型，带来额外计算开销与评价偏置风险。二是情绪规划限于离散集合，难以表示更细粒度或混合情绪。这两点决定了方法适用边界，若真实场景需要连续情感维度或复合情绪表达，当前动作空间是不够的。

未评测的边界还包括，原文未测量端到端延迟、实时率与推理开销的分解，因此不能承诺流式部署一定更快，只能说方法在时间位置上支持流式，即情绪先于解码产生。人类评价虽报告了显著性检验与标注者一致性，但评价者为实习生群体，样本为每测试集抽取的有限会话，推广到其他人群与场景时需谨慎。

另一个常见误解是把总体趋势当作每步都成立。论文报告的转移矩阵显示多数转移落在对角线及其邻域，对立转移被抑制，但这不等于每 1 次转移都符合理论，个别上下文仍可能出现跳变。期望转移比例高只能说整体更贴近理论模式，不能据此断言单轮决策永不出错。

### 复现先做什么，需要哪些信息条件？

复现应先重建信息条件，再跑训练。第一步按原文划分准备 4 个数据集，保留背景描述、历史三元组与当前问句的拼接格式，以及各数据集的情绪类别数。第二步实现状态动作提示模板，把候选情绪列为多选题，价值取对应选项输出标记对数概率的平均值，部署时取价值最大者。第三步实现混合回报，先算模仿命中项，再调用大模型按 3 维打分并取平均，最后按权重加权。

关键超参数按原文记录，包括序列长度、探索率、目标网络同步间隔、批量大小、学习率、折扣因子与回放池容量。折扣与理论权重需按数据集分别搜索，不直接沿用一组数值。下游回复生成与语音合成分别采用原文报告的大模型与流式合成器，情绪嵌入同时控制文本指令与语音韵律语速。

需要补的验证包括，记录训练与推理的硬件、显存与耗时，测量首包延迟与实时率，抽查理论打分在自有数据上的相关性，并在新场景下检查对立情绪跳变是否被有效抑制。由于本次未发现完成验证的公开资源链接，不能按已公开来写，应把代码权重数据视为需自行实现或另行确认可达。

### 何时值得尝试这条路线？

当系统必须在文本开始生成前就确定语气，且对话有多轮依赖时，这条路线值得尝试。典型信号是，非流式下事后识别很准，一切到流式就掉线；或者监督模型在短对话上够用，一到长对话就出现情绪断裂。此时把情绪显式建模为动作、用长期回报优化，比在提示词里加一句先想情绪更稳定。

不值得盲目套用的情况是，语料本身很短且标注干净，或者应用只要求中性播报。此时额外的大模型打分与价值学习可能得不偿失，直接微调或固定情绪模板更省成本。若决定尝试，建议先在小规模上验证两件事，一是理论权重在自有数据上的峰值位置，二是折扣因子是否随平均轮数移动，再决定是否全量训练。

回到中心矛盾，流式要求的不是更准的事后理解，而是更早的可用决策。Self-EmoQ 的回答是用价值规划把未来影响折现到当前选择，用理论约束把不自然的跳变扣分，最终让同一个前置情绪同时驱动文字与声音。理解了位置、回报与价值三者的分工，就抓住了全文可复述的方法。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=3)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-6.png)

区域 6 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-7.png)

区域 7 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=4)

[![原文数学表达区域 8，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-8.png)

区域 8 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=13)

[![原文数学表达区域 9，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-9.png)

区域 9 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=13)

[![原文数学表达区域 10，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-10.png)

区域 10 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=13)

[![原文数学表达区域 11，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-11.png)

区域 11 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=13)

[![原文数学表达区域 12，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-12.png)

区域 12 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=13)

[![原文数学表达区域 13，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-13.png)

区域 13 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=13)

[![原文数学表达区域 14，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-14.png)

区域 14 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=14)

[![原文数学表达区域 15，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-15.png)

区域 15 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=14)

[![原文数学表达区域 16，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-16.png)

区域 16 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=14)

[![原文数学表达区域 17，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-17.png)

区域 17 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=14)

[![原文数学表达区域 18，PDF 第 17 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9664d660fde8/figure-18.png)

区域 18 · [查看论文原页](https://aclanthology.org/2026.findings-acl.740.pdf#page=17)

另有 52 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.findings-acl.740.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
