---
title: "AudioStealer: Extracting Audio Prompts via Shapley Value-Guided Query Search"
date: 2026-09-12
draft: false
description: "针对文本到音乐模型的黑盒提示词窃取问题，AudioStealer 用相似度引导的启发式搜索定方向、再用沙普利值量化各语义单元贡献做精修，在 InspireMusic 上以语义 59.4%、音乐 70.1% 的可复现流程实现最强证据，代价是依赖本地影子模型的多次查询与精修计算。"
tags: ["数据集", "提示学习", "音频安全", "音乐", "音乐生成"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.688"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.688/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.688.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "629a924961f3f4dee6f0e1b8201453b70871885c2684563f7a7496ccf431f230"
paper_digest_api_reader_plan_sha256: "a72fbac9e7139385ab4a5a2654efaf6b4e038df9fec25d4cd3ac16ce06be0607"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7c1469e4a509b4fd4f3519b7322dc8c6c622babf8bd6185c76c8838b921831c6"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8366ca9da54c04c7bc3f133b98438285ff13bebd4fbc22aed937bb47f6fe6219"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a42a9bb41b2f75b7ada8fe6ee6a8f3e0805928778f3591651a66e23f4cac32ad"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ebd0111473ef0add4b07e144bded864178de555f2766e010acc6d6b542d5e2ff"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.prompt-learning","label":"提示学习"},{"facet":"research_focus","id":"research_focus.security","label":"音频安全"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "提示学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 音频提示词为何难偷：先做启发式锚定，再用沙普利值解开纠缠

> 英文题目：*AudioStealer: Extracting Audio Prompts via Shapley Value-Guided Query Search*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.688`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.688/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.688.pdf)

标签：#数据集 #提示学习 #音频安全 #音乐 #音乐生成

评分：**7.0/10** | 创新 1.6/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yingbin Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Xingjian Du：机构信息未能从会议 PDF 纯文本可靠映射
- Hanjun Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Zihao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Haibo Hu：机构信息未能从会议 PDF 纯文本可靠映射
- XiaoFeng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xinfeng Li：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

文本到音乐窃取需仅凭30秒目标音频逆向可复用的原始文本提示，输出需同时还原风格配器情绪结构，难点在于音乐概念在时频域连续纠缠且无词符级定位导致直接描述易语义漂移。AudioStealer先用音乐标注模型生成粗糙初始描述，再以CLAP嵌入相似度为奖励做束搜索全局探索以锚定语义方向，其输出的最优候选进入精修阶段。精修阶段将其解构为风格、情绪、配器与结构四类原子元素并用沙普利值估计各元素在不同子集下的平均边际增益，指导大语言模型迭代重组更高分组合，全程仅查询本地影子模型。与改编自图像的窃取基线及通用音频大模型直接拼接标签不同，该方法显式建模元素间协同与冗余并剪除无信息内容，优先保证感知声学保真而非字面文本匹配。在Prompt2Music评测设置下，AudioStealer的Sem分数为59.4，高于Stage1 Only基线的53.1。该结论适用边界受限于器乐英文提示与西方风格及开源生成器，跨声乐、多语言与商业闭源系统的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://prompti.ai/> — 链接可访问（HTTP 200）
- 第三方资源：<https://howtopromptsuno.com> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，什么信息必须保留？

这篇解读的输入是一段已经生成的音乐音频，目标是倒推出一段能再次生成相似音乐的文本提示词。必须保留的信息有 3 类：目标音频本身、本地可查询的影子生成器、以及用来衡量两段音频像不像的相似度定义。输出是一段可直接喂给文本到音乐模型的自然语言提示词。举例来说，攻击者听到一段目标音乐后，不去问原模型要参数，而是在本地不断试写提示词、生成音频、比较像不像，最终交出一句能复现风格的描述。论文把这个任务称为提示词逆向。

为什么它值得研究生关注，是因为提示词已经成为可交易的智力资产。论文提到浏览示例音频再购买对应提示词的商业模式，以及头部卖家的销售规模，说明复现一段高质量音乐的文字配方有真实价值。偷提示词不同于 benign 的音乐描述，它要求功能有效，即拿偷来的词能重新生成听感接近的音乐。

**提示词窃取 × 音乐标注：** 音乐标注负责从目标音频中听出显著的乐器、节奏与风格标签，提示词窃取负责把这些线索还原成能重新生成相似音乐的功能性提示词，前者是起点，后者是终点，搭配的理由是音频概念不是离散词符，必须先有一个可搜索的文本落点才能开始优化。

音频的难点在于概念不是离散词符，风格、配器、情绪、速度在时频域弥散分布并相互纠缠。直接把文本或图像领域的分类式、局部特征式方法搬过来会失效，这正是后文 2 阶段设计的起点。

### 文本、图像的偷提示词路线为何不能直接搬到音频？

文本领域的提示词窃取常被建模为分类或模式匹配，因为语言输出是结构化离散词符。图像领域已有代表性工作先用图像描述模型找主体，再用多标签分类器找修饰词，逐步拼回原提示词。这两条路线都依赖一个前提：概念有比较明确的落点，文字是词，图像有空间区域。

音频不满足这个前提。音乐是连续非结构化信号，概念不遵循可预测的模式，也不在频谱图的某个固定坐标上。论文为此专门构造了一个适配版图像窃取基线作为反证：保留主体加修饰词的总体结构，但把主体生成器换成音乐标签系统，把图像修饰词检测器换成基于对比语言音频预训练的音乐检索任务，用标准音乐标签集合做修饰词宇宙，并设阈值筛选。即使这样最大限度适配，效果仍明显弱于 AudioStealer。

这个对照的教学意义是，同输入、同目标、同运行阶段下，类别差异不能当作同条件胜负。图像方法输不是因为实现不用心，而是因为它假设修饰词可独立解耦，而音频的修饰词是交织塑造频谱结构的。理解这一点，才能明白后文为何要用博弈论做贡献归因，而不是再加一个分类器。

### 黑盒逆向的形式化目标是什么？

论文把文本到音乐生成器记为从提示词空间到音频信号的映射，给定目标音频样本，目标是找到一个提示词，使它生成的音频与目标音频的相似度最大。关键约束是黑盒：整个探索与利用过程只查询本地影子模型，不要求目标模型的内部参数，也尽量避免对目标的高成本、受限或被监控的查询。

相似度的操作定义在后文组件节展开，这里先记住它的角色：它是唯一的优化信号。搜索的每一步都要回答，当前候选生成的音频离目标近了还是远了。阈值与最大轮数则控制何时停止，避免无限试错。

一个样本的完整旅程是这样的：一段 30 秒的目标音乐先被音乐标签模型转成粗糙的初始提示词，例如放克贝斯线或切分鼓点；然后本地大语言模型不断改写提示词，影子模型把每个改写变成音频，音频编码器算出相似度并排序保留；最后对优胜者做元素级精修，输出可复用的被盗提示词。

### 两阶段总览如何分工解决非局部化与纠缠？

AudioStealer 的核心直觉是由粗到细。第一阶段解决非局部化问题，用全局启发式搜索锚定语义方向；第二阶段解决非线性纠缠问题，用博弈论归因把每个提示词元素的影响分开量化。论文明确反对依赖静态分类或独立修饰词解耦的策略，而把恢复建模为黑盒相似度目标下的近似逆向问题。

**启发式搜索 × 影子模型：** 启发式搜索负责在庞大的提示词空间中提出候选并决定保留哪一路，影子模型负责把每个候选变成可听的音频并给出与目标音频的相似度分数，二者搭配的理由是攻击者不能查询目标生成器，只能用本地可控的影子模型做代理评估，组合后形成不依赖目标内部参数的黑盒优化闭环。

**探索阶段 × 利用阶段：** 探索阶段负责广度，用波束搜索从音乐标签生成的粗糙起点找到稳定的语义锚点，利用阶段负责精度，用沙普利值精修锚点的元素组合，二者搭配形成由粗到细的工作流，前者避免陷入局部措辞，后者解决探索后仍残留的冗余与措辞不准。

下面这张总览图把上述分工画成了左右两个大框，左侧是启发式搜索，右侧是沙普利值精修，中间用最佳提示词衔接，右侧末端输出被盗提示词，读图时重点看数据如何从音频变成文字、又从文字变成音频再变回分数。

> **看图路径：** 1. 先从左侧目标音乐沿灰色大箭头向右追踪两大方框的主路径；2. 再看左侧方框内探索大语言模型与影子模型加音频编码器的分支如何汇入相似度评估；3. 最后看右侧方框内原子化元素与沙普利值模块如何回送给精修大语言模型

[![原论文 Figure 1：AudioStealer is a two-stage, black-box framework that integrates similarity-guided heuristic…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5b4b7cbdc534/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5b4b7cbdc534/figure-1.png)

*论文图 1。原论文 Figure 1：“AudioStealer is a two-stage, black-box framework that integrates similarity-guided heuristic search for global exploration with Shapley value-guided refinement for precise…”。*

从像素看，左侧框顶部是音乐标签模型到初始提示词的短链，下方是探索大语言模型提出分叉、相似度评估器打分保留的迭代环，环内还嵌套了影子模型加音频编码器的虚线评估块，示例分数 0.63 被保留、0.32 被舍弃。右侧框顶部把最佳提示词原子化为吉他独奏、怀旧感、快 tempo 等元素，中部是沙普利值公式与多行组合记忆矩阵，底部是精修大语言模型与相似度评估器的第二轮迭代，示例分数从 0.65 提升到 0.81。这种左右衔接正是先锚定再解纠缠的可执行证据。

### 搜索、编码与沙普利精修各自算什么？

探索阶段从 OPENJMLA 生成的初始提示词出发。它是基于对比语言音频预训练的零样本音乐标签模型，能抓住配器、节奏、流派等显著属性，虽然粗糙，但把无结构的提示词空间大幅缩小。随后采用受 Tree-of-Attacks with Pruning 启发的迭代波束搜索：每轮保留得分最高的前 B 个提示词组成波束，每个提示词交给本地大语言模型 Qwen3-14B，结合历史成功提示词生成 K 个变体，形成 B 乘 K 个候选。

**对比语言音频预训练 × 音乐相似度：** 对比语言音频预训练负责把音频映射到可比的向量空间，音乐相似度负责用该空间中两个音频向量的余弦值度量听感与语义接近程度，前者提供表示，后者提供优化目标，组合后搜索的每一步都有连续可排序的分数可依。

每个候选用影子模型合成音频，再用预训练的对比语言音频编码器取音频向量，计算与目标音频向量的余弦相似度。所有新候选按分数排序，只保留前 B 个进入下一轮。探索在分数超过第一阈值 t1 或达到最大轮数 N1 时停止，默认 B 为 3、K 为 4、t1 为 0.7、N1 为 10。

**沙普利值 × 语义纠缠：** 语义纠缠指风格、配器、情绪、结构等描述在时频域共同决定声音、无法独立拆分，沙普利值负责用博弈论的平均边际增益量化每个语义单元对最终相似度的贡献，搭配的理由是只有先把纠缠的贡献分开，才能指导大语言模型控制器做有依据的增删，而不是盲目改词。

进入利用阶段，先用大语言模型把优胜提示词拆成原子语义单元集合，分为风格流派、情绪氛围、配器音色、结构速度 4 类，构成封闭的元素宇宙，目标是找出最优子集而非引入新语义。每个元素的沙普利值定义为它在所有不含它的子集上的平均边际增益，边际增益是加入该元素前后相似度的差。精确计算随元素数指数增长，因此用 T 次蒙特卡罗随机排列近似，默认 T 为 30，并用记忆矩阵记录每种组合的存在向量与得分。

精修大语言模型读取当前最优、元素集、沙普利值与记忆矩阵，提出必须覆盖 4 类、且未在历史中出现过的新组合，评估后只在严格更高分时更新全局最优，直到超过第二阈值 t2 或达到最大轮数 N2，默认 t2 为 0.8、N2 为 5。

### 本研究训练了什么，没有训练什么？数据集如何构造？

本研究没有训练新的音乐生成器、音频编码器或大语言模型，实际计算是调用既有模型做推理、检索与搜索。OPENJMLA、对比语言音频编码器、Qwen3-14B、影子生成器都是现成调用，唯一的优化发生在提示词文本空间，用查询分数驱动选择与组合，没有反向传播更新模型权重。因此不存在梯度路径、冻结与重置的神经训练问题，成本主要来自影子模型的音频合成次数与编码器前向次数。

为此论文构造了 Prompt2Music 基准数据集。流程是先按音乐提示词工程实践定模板，要求每条提示词覆盖风格流派、配器音色、情绪氛围场景、结构速度动态四部分；请音乐专业人士手写 100 条高质量种子，再用 GPT-4O 扩到 5000 条并过滤重复与过于简单的条目，抽样请专业人士审计。然后把每条结构化提示词分别喂给 Stable Audio Open、MusicGen、InspireMusic、ACE-Step 4 个不同架构的开源模型，用固定随机种子生成 30 秒纯器乐音频，共 5000 组、20000 个音频文件，形成 1 对多的提示词到多模型音频映射，便于跨模型比较。

下图是 5000 条提示词用文本向量做降维可视化的结果，用于检查语义多样性，读图时不要把它当成攻击效果曲线，它只说明数据集本身是否够散、够杂。

> **看图路径：** 1. 先确认横轴与纵轴是降维后的两个维度而非原始音乐特征；2. 再看右侧颜色条代表点密度并找到右下黄色高密度区；3. 最后比较分散的小簇与大簇说明语义覆盖的广度

[![原论文 Figure 3：t-SNE visualization of 5,000 text prompts in Prompt2Music dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5b4b7cbdc534/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5b4b7cbdc534/figure-3.png)

*论文图 3。原论文 Figure 3：“t-SNE visualization of 5,000 text prompts in Prompt2Music dataset.”。*

从像素看，横轴与纵轴是降维后的第一维与第二维，右侧颜色条表示点密度，黄色为高密度、深紫为低密度。图中既有右下角明亮的黄色大簇，也有散布全图的几十个中小簇，没有单一主导簇，支持论文所称的流派、情绪、配器、速度多维覆盖。这个分布是后文跨模型与跨数据集泛化讨论的前提，若数据本身挤在一团，跨域结论就不可信。

### 用什么数据、基线、指标与条件保证可比？

主实验从 Prompt2Music 随机抽 100 组提示词音频对，目标模型与影子模型的组合按需更换，默认后续消融以 InspireMusic 为目标。泛化实验另从 MusicCaps、LP-MusicCaps、MusicBench、Wikimt-x 各抽 100 条描述，用统一的 InspireMusic 按相同参数合成音频，再把这些描述当作待还原的真实值。论文明确区分了提示词与描述性题注：前者是为生成而写的配方，后者是对已有音乐的事后描述，这会影响语义相似度的解读。

基线覆盖 4 条不同技术路线：零样本标签器 OPENJMLA 把标签直接拼接成提示词；适配版图像窃取基线用音乐检索代替视觉分类器并设 0.6 阈值筛选修饰词；专用音乐理解模型 Mu-LLaMA；通用多模态模型 Qwen2-Audio。后两者收到相同指令，要求输出可用于生成的详细提示词。

指标有 3 类自动指标加一类人评。语义相似度用文本编码器算被盗提示词与真实提示词的余弦值，方向是越高越像原文措辞。音乐相似度用音频编码器算两段音频向量的余弦值，越高表示听感越接近。ByteCover3 相似度把被盗音频当作目标的翻唱版本，用翻唱识别模型提向量再算余弦，数值尺度因最大均值匹配机制而天然偏低，不能与前两者直接比大小。人评是 10 位领域专家对 25 首抽样音乐用 5 级量表打分，越高表示整体风格结构越像。所有实验用 3 个随机种子取平均，服务器为 Ubuntu 加 A100，固定种子保证可复现。

### 主结果在说什么，代价与反例是什么？

要回答的核心问题是，在相同目标模型下，AudioStealer 是否同时在文字忠实度与音频可听性上超过可运行的基线。公平条件是同一目标音频、同一目标生成器、同一自动指标与人评流程，指标方向均为越高越好，但 ByteCover3 的绝对值天然偏低。下表把 InspireMusic 为目标时的关键数字与跨公开数据集的区间放在一起，列数满足五列的可比要求，数值保留原文精度。

| 目标与数据条件 | 指标 | AudioStealer | 可比上限或区间 | 比较对象 |
| --- | --- | --- | --- | --- |
| InspireMusic 目标 | 语义相似度 | 59.4% | 63.8% | 同构影子模型上限 |
| InspireMusic 目标 | 音乐相似度 | 70.1% | 77.6% | 同构影子模型上限 |
| InspireMusic 目标 | 翻唱识别相似度 | 27.8% | 36.4% | 同构影子模型上限 |

表后解释需要同时讲收益与代价。论文报告，在 InspireMusic 为目标时 AudioStealer 达到语义 59.4%、音乐 70.1%、翻唱识别 27.8%，在 ACE-Step 与 MusicGen 上也保持领先，人评分别达到 3.32、3.28、2.66，高于基线的 2.1 至 2.9 区间。跨公开数据集时音乐相似度与翻唱识别仍最高，但在 LP-MusicCaps 与 MusicBench 上语义相似度略低于 Qwen2-Audio，论文的解释是那些数据集本来就是描述性题注而非生成配方，攻击优先保证再生音频像，而不是文字复述像。代价是查询与计算开销，以及 MusicGen 上所有方法音乐相似度偏低，论文认为与其输出多样性更高、直接声学匹配更难有关。未胜出项本身就是重要边界：文字像不等于听感像。

效率曲线进一步说明查询代价的形态，横轴是影子模型查询次数，纵轴是音乐相似度，读图时注意起点是标签基线而非零。

> **看图路径：** 1. 先确认横轴是影子模型查询次数、纵轴是音乐相似度；2. 再看 0 次起点 0.643 与 20 次、40 次、80 次的爬升幅度；3. 最后观察 80 次到 100 次曲线趋平说明的收益递减

[![原论文 Figure 4：Efficiency analysis of Music Similarity scores across shadow model queries.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5b4b7cbdc534/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5b4b7cbdc534/figure-4.png)

*论文图 4。原论文 Figure 4：“Efficiency analysis of Music Similarity scores across shadow model queries.”。*

从像素看，0 次查询起点为 0.643，20 次跃升约 11.2%，40 次达约 16.3%，60 次约 19.1%，80 次约 20.7%，100 次约 21.0%，曲线在 80 次后明显趋平。论文据此称 80 次内接近最优，这意味着可部署策略可以用有限查询换取大部分收益，但也说明超过 80 次后继续查询的边际回报很低，不能把末步结果推广为全程线性增长。

### 拿掉一阶段会怎样，不同部件有多敏感？

要回答的第二个问题是，2 阶段是否互补，以及影子模型、音频编码器、起始模型的选择是否决定成败。下表把单阶段与关键部件对照的数字放在同一五列结构下，便于看出哪一环掉了最多。

| 对照条件 | 指标 | 单阶段或替换件 | AudioStealer 默认 | 差距指向 |
| --- | --- | --- | --- | --- |
| 仅探索阶段 | 音乐相似度 | 68.9% | 70.1% | 精修补足听感 |
| 仅探索阶段 | 语义相似度 | 53.1% | 59.4% | 精修清理措辞 |
| 最优编码器 | 音乐相似度 | 70.1% | 70.1% | 对比编码器持平上限 |
| 最优编码器 | 翻唱识别 | 28.3% | 28.3% | 翻唱识别持平 |
| 替换起始模型 | 音乐相似度 | 70.6% | 70.7% | 起始差异可被追回 |

表后解释先讲互补性。论文报告，仅探索阶段音乐相似度已达 68.9%，但语义只有 53.1%，说明纯搜索听感有效却措辞杂乱；仅利用阶段从简单初始提示词起步则更弱，说明没有好的锚点，精修无从发力。两者结合才达到语义 59.4%、音乐 70.1%、翻唱识别 27.8%，支持缺一不可的判断，但这只是基于该默认超参数的有限解释，不能推广为任何参数下都如此。

下图是 3 组部件消融的可视证据，读图时先按图例分清三色柱子，再跨组比较高矮，不要把同色误认为同对象。

> **看图路径：** 1. 先对照图例确认蓝色为语义、红色为音乐、浅绿为翻唱识别三组柱子；2. 再在 A 组比较同构影子模型与异构影子模型的柱高差异；3. 最后在 B 组与 C 组分别找出表现最低的编码器与起始模型

[![原论文 Figure 2：Component ablation analysis.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5b4b7cbdc534/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/5b4b7cbdc534/figure-2.png)

*论文图 2。原论文 Figure 2：“Component ablation analysis. We evaluate the impact of (A) different shadow models for generating audio, (B) different audio encoders for computing similarity, and (C) different…”。*

从像素看，A 组影子模型比较中，同构 Inspire 柱最高，语义 63.8%、音乐 77.6%、翻唱 36.4%，而 Stable、MusicGen、ACE-Step 做影子时仅小幅下降，支持黑盒迁移可行。B 组音频编码器中对比语言音频编码器最优，语义 59.4%、音乐 70.1%、翻唱 28.3%，Wav2CLIP 紧随其后，MERT 因偏向模内音乐理解而偏低。C 组起始模型中 OPENJMLA 与 Qwen2-Audio 几乎持平，Mu-LLaMA 略低，说明 2 阶段精修能从次优起点追回大部分损失，但更好起点仍有微弱优势。负结果是适配版图像窃取基线有时不如单独的 OPENJMLA，论文认为硬拼检索到的修饰词会加剧语义混淆。

### 哪些结论还不能下，缺了哪项验证？

论文明确承认的局限有两层。一是语言与文化覆盖：研究聚焦英语提示词与西方音乐风格为主，没有系统检验多语言、多文化流派与乐器，核心机制可能适用，但需要合适的嵌入空间与多文化数据集才能验证，目前属于待验证推测。二是社会与法律影响未充分展开：重建保真度与语义准确度不等于版权侵权或合理使用的法律判断，经济影响也需要跨学科对话，技术发现不能直接当成政策结论。

从方法角度看，还有三项未测量就不能承诺的量。论文未报告误判率、端到端延迟与完整货币成本，因此不能说该方法在所有部署场景更快更便宜，只能说它把对目标的查询转移到了本地影子模型。训练资源、推理开销、输出时长与实际延迟是四件不同的事，总体趋势不等于每组每步都成立，例如 MusicGen 上的声学匹配更难就是反例。

人评部分虽经伦理审查与知情同意，且标准差显示评分一致性尚稳，但抽样仅 25 首、每对 10 位专家，仍是小样本感知证据，只能作为自动指标的补充，不能替代自动指标。

### 要复现应先准备什么，关键参数如何设置？

复现的第一步是准备数据与模型，而不是调参。需要拿到 Prompt2Music 的 5000 条提示词与对应音频，或按模板自建小规模种子集；准备 4 个开源生成器中的至少一个做目标，另选一个做本地影子模型，默认可用 Stable Audio Open；准备对比语言音频编码器、音乐标签模型与本地大语言模型。官方代码与数据集在论文中声明已公开，但本次解读的资源状态以正文开源声明为准，这里只转述论文的说法，不额外断言链接当前可达。

第二步是冻结评估协议。音频统一处理为单声道并重采样到编码器要求的采样率，文本相似度用指定文本编码器，音乐相似度与翻唱识别按固定种子计算，人评若要做需沿用 5 级标准并报告均值与标准差。目标音频时长统一为 30 秒且为纯器乐，避免人声生成能力差异引入混淆。

第三步才是运行 2 阶段搜索。探索阶段设置波束宽 3、分支 4、阈值 0.7、最大 10 轮；利用阶段设置蒙特卡罗预算 30、阈值 0.8、最大 5 轮；每次运行换随机种子重复 3 次取平均。建议先跑影子与目标同构的上限，再换异构影子看迁移下降，最后换编码器与起始模型，顺序与论文消融一致，便于定位问题。若要省查询，可先跑 80 次以内的效率曲线，确认趋平后再决定是否继续。

### 何时值得尝试，还需补哪项验证？

当你的任务是从一段音乐反推可复用的生成配方，且只能黑盒访问目标时，这个由粗到细的流程值得尝试。它的适用条件很具体：有本地可反复查询的影子生成器、有可靠的音频相似度代理、有能改写与精修提示词的大语言模型。若缺其中之一，例如没有可用的影子模型或相似度与人耳严重背离，就不应硬套。

复现时最容易误解的是把语义相似度当成唯一目标。论文在公开描述性数据集上的结果恰好说明，文字不像但音频更像才是窃取的成功标准，评价时必须 3 类自动指标加人评一起看，且不能跨尺度比较翻唱识别分数。另一个误解是把无训练等同于确定性求解，实际上搜索有随机性，必须多种子平均并固定种子。

还需补的验证包括多语言与非西方音乐的攻击有效性、防御侧的检测与水印鲁棒性、以及更大规模人评与成本统计。只有补上这些，才能从 1 次可复现的漏洞演示，走向对生成式音频平台真正可执行的知识产权保护建议。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/264ff35e704b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/264ff35e704b/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.findings-acl.688.pdf#page=4)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/264ff35e704b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/264ff35e704b/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.findings-acl.688.pdf#page=5)

另有 14 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.findings-acl.688.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
