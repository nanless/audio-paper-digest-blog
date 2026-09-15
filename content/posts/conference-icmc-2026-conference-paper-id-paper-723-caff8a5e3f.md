---
title: "Hexagram-Based Semantic Composition: Discretizing Embedding Spaces into Symbolic Compositional States for Improvised Performance"
date: 2026-09-14
draft: false
description: "该文把作曲家定义的文本语料经语义嵌入、降维与量化压缩为可枚举的卦象状态，用以配置数字乐谱的结构条件而非生成声音，并以五句雨诗得到离散对偶输出的艺术实例展示其可解释与可重复的即兴逻辑，其代价是降维随机性带来的状态不稳定性。"
tags: ["向量量化", "音乐", "符号音乐生成"]
categories: ["icmc-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:icmc:2026:conference-paper-id:paper-723"
paper_digest_source_kind: conference
paper_digest_conference_id: "icmc-2026"
paper_digest_conference_record_url: "https://icmc2026.ligeti-zentrum.de/proceedings/"
paper_digest_conference_pdf_url: "https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4af0783ee4f5380e927029f4a1ada25b252c16d8956b237f084c018641c9e073"
paper_digest_api_reader_plan_sha256: "6abbb6da36e01a076e306272b151dfbef0ed0972492ee005f52410b895406999"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6f710f4da7c5a0e32f043210279662f053e5e251542162915448685457097b4d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4e83d8d1642f9715cc5b60b2fa7bb7daa4c41a17e84c229861dbb53222c8fcc7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2a3aaa4e9bee36af13de3a2df27229179c25db48fce4a90cebbe8bdd879ac2f4"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "29fe9ed639255d0a3c14263a1e2e6da3eae0f8ec36ba4a86e8216f670aff33f9"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.vector-quantization","label":"向量量化"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.symbolic-music","label":"符号音乐生成"}]
paper_digest_primary_task: "符号音乐生成"
paper_digest_primary_method: "向量量化"
paper_digest_score: 4.6
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把语义压缩成卦：用可枚举状态代替声音生成的作曲决策

> 英文题目：*Hexagram-Based Semantic Composition: Discretizing Embedding Spaces into Symbolic Compositional States for Improvised Performance*

> 会议身份：`conference:icmc:2026:conference-paper-id:paper-723`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

标签：#向量量化 #音乐 #符号音乐生成

评分：**4.6/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Yuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xinran Zhang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作输入为作曲家自选的中文文本语料，输出为用于数字乐谱的六爻符号状态，其难点在于连续语义计算与具身即兴演奏之间缺乏可数可命名可重复的中介，难以兼顾演奏者能动性与结构化约束。方法链第一步用语言无关BERT语句嵌入LaBSE将每句编码为高维语义向量，负责保留跨语言语义关系作为计算基础。第二步经t分布随机邻域嵌入t-SNE降至二维并归一化，再经均匀量化为1至8整数对，负责将连续变化压缩为粗糙可解释语义平面并输出可索引计算令牌。第三步将整数对映射为易经六爻结构并配置为六层乐谱条件交由HTML5 Canvas界面呈现，负责把符号状态转化为固定层与开放层配比及稳定与变化倾向的演奏约束。与直接用连续嵌入驱动声音合成或参数调制的主流做法不同，该方法刻意离散化以换取稳定性可重复性与象征兼容性，使语义计算支持作曲决策而非生成声音材料。在听雨五句语料演示场景下，量化下限条件的量化指标为1，低于量化上限条件的量化指标8。在小规模作曲家在场解释的即兴数字乐谱场景下结论适用边界受限，尚未验证自动作曲质量风格泛化或长期稳定性，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决什么矛盾？

本文的输入是作曲家自行选定的文本语料，示例中为五句与雨有关的中文诗句。目标不是让模型写出旋律或合成声音，而是回答在人工智能辅助作曲中如何保留可解释、可重复的决策，同时不剥夺演奏者的能动性。作者观察到的矛盾是常见系统把语义嵌入当作潜变量空间，直接驱动声音生成或连续参数调制，虽然能产出材料，却把语义表示坍缩为声音输出，减少了结构反思和可重复决策的机会。

为此作者提出反向压缩思路：有意减少并离散化连续嵌入空间，得到少量的可枚举索引，再把索引解释为符号化的作曲状态。每个状态不编码乐音材料，也不预测内容，只配置结构条件，例如固定层与开放层的比例、演奏者能动性的分布、趋向稳定或变化的程度。演奏者在这些条件内通过乐器手势实现音乐行为。本文属于方法加艺术实例的论文，没有以自动指标战胜基线的实验，必须保留的关键信息是离散化是有意的方法选择，而非精度损失。

卦象是六爻二进制框架，而非占卜世界观强加；当前没有公开代码、模型或数据的可用声明。

### 与直接驱动声音的语义控制路线有何不同？

过去十年人工智能进入作曲流程，既作为声音与符号的生成器，也作为表示、选择与约束音乐可能性的框架。来自文本或多模态语料的语义嵌入越来越多地用于音乐过程，但许多系统将其作为直接驱动声音生成或连续参数调制的潜控制空间。作者把这类路线归纳为连续调制与表达性插值，优点是材料产出效率高，缺点是决策过程难以复述，表演者只能跟随参数走。

本文路线建立在语义驱动数字乐谱的先前工作之上，强调数字乐谱作为音乐家创造力载体的可解释性。区别在于本文把语义计算放在决策端，把声音实现留给人。语义嵌入只做描述子，不做分类器、预测器或生成部件；模型不微调，也不在基准数据集上评测，只提供一致的预训练语义编码。这种分工使系统避免对特定语料过拟合，并在多次运行间保持相对稳定。

需要提醒初学者的是，稳定在这里指编码器本身固定，而非整个管线确定，因为后端的降维仍带随机性。

**状态选择 × 声音生成：** 状态选择指用语义计算决定采用哪一个卦象及其配置的条件世界；声音生成指由嵌入或潜变量直接驱动波形或参数连续变化。前者分工在作曲决策，后者分工在材料生产，作者选择前者的理由是防止语义表示坍缩为声音输出，从而保留演奏者能动性、结构反思与可重复决策，组合意义在于把人工智能辅助作曲重构为面向决策的实践。

### 为什么高维连续空间不适合直接做结构控制？

高维连续嵌入难以解释，不稳定，难以映射为可复现的结构控制。若直接用它做插值，每次微调都会改变声音，排练时无法说清我们现在处于哪一种世界。作者因此要求建立粗糙可读的语义平面，再做均匀量化。问题可分解为 3 步：如何从句子得到固定长度向量，如何把向量集合压缩为 2 维且归一化，如何把 2 维连续值变为整数对以便索引符号。原文明确指出降维不是为了保留最大方差或细粒度语义关系，而是为了建立适合稳健状态选择的粗平面。

量化也不是为了平滑控制，而是为了可重复、可解释与符号兼容。教学例子是把听雨等句子先看作中性语言制品，不分析其文学含义与文化指涉，只利用其可计算的语义属性作为后续决策的基底。这样语义空间成为中性基质，真正的作曲意义由后端的符号映射与乐谱条件赋予。

### 语义到符号的管线全景：一步接一步发生什么？

管线起点是文本语料，接着是嵌入提取、降维、量化、卦象状态，最后是乐谱条件。嵌入提取把每句独立编码为固定长度向量；降维把集合投影到 2 维并归一化；量化产生两个 1 至 8 的整数；该整数对索引一个卦象。

卦象配置数字乐谱的层、能动性与稳定变化倾向。关键分离是连续嵌入支持计算选择，离散符号支持作曲结构与演奏者解释。作者强调符号系统本身独立于语义计算，数字索引不编码音乐材料，也不预测或生成声音。

下面先看卦象作为状态结构的图示，理解六爻如何构成紧凑符号状态，再看管线总览如何把离散对偶与条件配置连接起来。

> **看图路径：** 1. 从下向上数六条横线，确认第 1 爻在底部、第 6 爻在顶部；2. 对照实线为阳、断线为阴，区分上卦与下卦各三爻；3. 观察该图仅展示状态结构，不包含音符或演奏动作符号

[![原论文 Figure 1：Hexagram as a six-line binary compositional state.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/2b299b058833/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/2b299b058833/figure-1.png)

*论文图 1。原论文 Figure 1：“Hexagram as a six-line binary compositional state.”。*

该图展示自下而上读取的六爻结构，实线为阳、断线为阴，上下各三爻组成紧凑状态。它不编码音高节奏与演奏技法，只作为可枚举可解释的状态标签，起到连续语义表示与离散作曲组织之间的中介作用。理解这一点后，才能明白后端的量化为何只需输出整数对，而不需要保留声音参数。

> **看图路径：** 1. 沿从左到右的箭头读出文本语料到乐谱条件的六个阶段；2. 定位量化框中标注的离散取值范围及其后接的卦象状态框；3. 确认末端指向的是条件配置而非声音材料生成

[![原论文 Figure 2：Overview of the semantic-to-symbolic pipeline: Text corpus → Embedding extraction → Dimensionality…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/2b299b058833/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/2b299b058833/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of the semantic-to-symbolic pipeline: Text corpus → Embedding extraction → Dimensionality reduction →Quantization (1–8, 1–8) → Hexagram state → Score conditions…”。*

该图为管线总览，箭头依次经过嵌入提取、降维、量化、卦象状态，到达乐谱条件。量化框明确标注离散取值，末端明确标注层、能动性与稳定变化，而非音乐材料或演奏动作。这张图的可执行价值在于复现时必须按此顺序检查：若跳过归一化直接量化，数值范围将随输入变化；若把索引直接解码为声音，就违背了状态配置而非材料生成的设计契约。

**数字乐谱 × 即兴表演：** 数字乐谱负责承载由卦象决定的结构条件，如 6 层动画界面的分层、提示文本与时间取向；即兴表演负责在这些约束内由演奏者用乐器手势实现具体声音。二者搭配的理由是避免由机器直接规定音高节奏，把决策层与执行层分离，组合后既维持结构连贯又保留开放协商空间。

### 嵌入与卦象各管什么？LaBSE 与六爻如何分工？

语义特征提取使用多语言句子编码器拉布斯，用白话说就是把语义相近的句子投到相近位置的预训练模型。英文名为 Language-agnostic BERT Sentence Embedding，缩写为 LaBSE。它在本工作中只做语义表示模型，不做分类、预测或生成。每句独立处理，得到固定长度向量，捕捉高层语义特征。这些向量被严格视为语义描述子，而非声音合成的潜变量。

模型既不微调，也不评测，其作用是提供一致的编码，避免语料特定的过拟合，保证跨次运行的稳定性。在此阶段不施加音乐、诗学或象征解释，文本仅被视为可计算的语言制品。卦象部分采用易经的六爻二进制图形，共 64 种离散配置。白话说就是 6 条横线，每条要么实要么断，上下各 3 条构成紧凑标签。作者声明此处不用作占卜或诠释体系，不把易经世界观强加给演奏者，而是借用其文化上明确、结构上显式的六线二进制框架来组织分层音乐行为。

卦象配置的条件包括固定与开放层的平衡、演奏者能动性分布、随时间趋向稳定、激活或消散的倾向。演奏者再用乐器特定手势实现这些条件。

**语义嵌入 × 卦象状态：** 语义嵌入负责把作曲家选定的文本句子映射为连续高维向量，保留粗粒度的语义邻近关系；卦象状态负责把连续变化收敛为六爻二进制的可枚举标签，提供固定层与开放层、能动性分配和稳定变化倾向的配置接口。二者搭配的理由是连续空间难以直接复现和解释，而离散符号易于排练与协商，组合后形成语义计算选状态、符号状态组织表演的分工。

### 降维与量化如何把连续向量变为可索引整数？

降维把提取的句子向量用 t-SNE 算法投影到 2 维语义空间。t-SNE 是常用的邻域保持降维方法，原文引用其可视化文献，但明确其目标不是保留最大方差或细粒度关系，而是建立粗糙可解释的平面。投影后的 2 维值做归一化，以保证不同文本输入的数值范围一致。接着做均匀量化，离散为 1 至 8 的整数。每个输入句子最终得到 1 对离散整数。

此时它们不再是连续空间坐标，而是为符号索引准备的计算令牌。原文强调这是有意的方法选择，而非精度损失，优先可重复性、可解释性与符号兼容性，而非平滑参数调制。与采用连续语义控制做表达性插值的方法相比，本文强调稳定可枚举的状态。符号系统本身保持独立，数值索引不编码音乐材料。

沿一个样本走完全程有助于理解：例如听雨一句先变为高维向量，再变为 2 维平面上的一个点，再变为某个整数对，再经映射选中一个卦象，再展开为 6 层乐谱条件与演奏提示。任何一步若保留连续值直接驱动声音，都将回到作者批评的坍缩路线。

**降维 × 量化：** 降维负责把高维嵌入投影到 2 维语义平面，建立粗糙可读的坐标系；量化负责把归一化后的连续坐标均匀切分为 1 至 8 的整数对，使每句输入变为计算令牌。二者搭配是因为 2 维平面仍是连续且受随机初始化影响的，必须再离散化才能获得稳定可索引的符号输入，组合意义在于以损失细节为代价换取可重复的状态选择。

### 本研究训练了什么，没有训练什么，随机性在哪里？

本研究没有训练神经网络，没有微调 LaBSE，没有在基准数据集上评估，也没有训练声音生成模型。真实计算过程是调用既有预训练模型做推理、做降维投影、做归一化与均匀量化、再做符号索引。参数冻结的是 LaBSE 的预训练权重；更新或搜索的不是网络梯度，而是 t-SNE 投影的邻域优化与量化边界。监督来源不是标签或奖励，而是作曲家选定的语料与预训练编码器的语义几何。

重置时机体现在每次运行 t-SNE 的随机初始化可能改变投影，从而改变整数对与卦象。原文明确指出降维阶段的随机初始化与邻域优化引入受控非确定性。通常这被视为算法的技术属性，但作者将其类比为传统起卦中蓍草或掷钱等偶然程序，认为它是启动状态所必需的。在本系统中该随机成分不被当作待消除的噪声，而是语义到符号过渡的组成部分。经降维、离散与符号索引，占筮随机性的逻辑被编码进数据管线，形成一种人工占筮过程。

初学者容易误以为冻结编码器就等于系统确定，必须纠正：前端编码稳定，后端投影仍随机，因此可重复性是有条件的，需要受控参数化或替代降维方法。

**t-SNE 随机性 × 占筮随机性：** t-SNE 随机性来自随机初始化与邻域优化，表现为同语料多次运行可能得到不同 2 维投影；占筮随机性来自蓍草或掷钱等偶然程序，用于启动卦象状态。前者是算法的技术属性，后者是传统仪式的构成部分，作者将二者并置的理由是都为从连续不确定性进入离散状态提供触发机制，组合后把数据管线本身解释为一种人工占筮过程。

### 艺术实例如何搭建：语料、管线与乐谱界面是什么条件？

为展示方法在表演中的运作，作者给出题为听雨的艺术实例。输入语料是作曲家选定的五句中文种子，包括听雨、轻雨润如酥、空山新雨后、急雨翻银河，以及风回雨定芭蕉湿的长句。处理流程与前述管线一致：嵌入、聚合成语料级表示、降到低维平面、量化为离散整数对。本次实例的离散输出为 8 与 4 的组合，索引为雷地豫卦。该卦不用作语义叙事解码为音乐材料，而是作为配置音乐行为涌现条件的符号作曲状态。

伴随状态选择有一段面向演奏者的简短提示，大意是雨声渐聚、大地回应，不要急于行动，动从内生。该文本被定位为姿态导向，而非指令集，框定积累、共鸣、内在驱动的即兴态度，具体音乐决定仍留给演奏者在状态约束与可供性内做出。乐谱实现为 6 层动画网页画布界面，对应六爻形式，分布固定与开放层、分配演奏者能动性、表达稳定激活或消散的结构倾向。

乐器或媒介角色从状态可供性中涌现，而非从固定材料出发，演奏者承担连续、积累、转化与事件 articulation 等互补功能，在共享结构约束下局部协商。

### 实例报告了什么结果，支持什么判断，不支持什么？

实例报告的是管线可走通且状态可解释：五句种子经计算得到确定的整数对与卦象，并可展开为表演可用的分层条件与提示文本。这支持了方法的可操作性与可复述性，即他人可按相同步骤复现从文本到状态的过程，并在排练中用卦象标签指代一种世界，而不必逐次描述连续参数。但这属于存在性展示，而非对照实验，没有基线、没有指标方向、没有统计聚合，因此不支持关于音乐质量、观众偏好或生成多样性的优劣判断。

作者自身的表述也很克制，称卦象既不编码音乐材料，也不规定演奏者动作，只作为选择与约束作曲世界的紧凑接口。表演层面的连贯性来自共享约束下的协商，而非来自模型对内容的预测。下表把管线各阶段的输入输出与离散依据整理为可核对的行，便于按阶段复现与排查。

表前比较问题是：连续语义在哪一步变为可枚举符号，每步的输出形态与可重复依据是什么？公平条件是同一预训练编码器与同一量化规则，不比较声音质量，只比较状态是否可索引。指标方向是越离散越可复述，但细节损失越大。

| 阶段 | 输入形态 | 计算操作 | 输出形态 | 状态可复述依据 |
| --- | --- | --- | --- | --- |
| 嵌入提取 | 作曲家选定文本句子 | 预训练多语言编码独立推理 | 固定长度高维向量 | 权重冻结且逐句独立编码 |
| 降维投影 | 句子向量集合 | 低维投影并归一化数值范围 | 2 维连续坐标 | 粗平面易读但受随机初始化影响 |
| 均匀量化 | 归一化 2 维坐标 | 均匀切分为 1 至 8 整数 | 离散整数对 | 整数可枚举可索引 |
| 符号映射 | 离散整数对 | 索引 64 种六爻配置之一 | 卦象状态标签 | 标签可在排练中直接指代 |
| 条件展开 | 卦象状态标签 | 配置层与能动性及稳定变化 | 6 层乐谱条件与姿态提示 | 条件约束表演但不规定声音 |

表后解释是主要收益为决策可命名：排练时可以说现在处于雷地豫所配置的积累共鸣世界，而不必记录连续参数。具体代价是投影随机性可能改变整数对，复现时必须固定随机种子或记录投影参数，否则同语料可能进入不同状态。未胜出项是细粒度语义保真度，本方法有意放弃，不适合需要连续表情插值的任务。未评测边界包括多人协商如何收敛、长时间表演中状态切换频率与认知负荷，这些在本文证据中没有测量。

### 若去掉离散化或换掉随机投影会发生什么？

原文没有提供消融实验的数字表，因此不能用数字声称拿掉某部件必然如何，只能按其方法论述做有限推断。若去掉量化而保留 2 维连续坐标，系统将回到连续参数调制，状态不可枚举，排练语言将失去稳定指称，这正是作者要避免的。若保留量化但换掉 t-SNE，例如改用确定性降维或固定投影，状态选择的稳定性可能提高，但粗平面上的邻域结构会变化，整数对分布也随之变化，需要重新验证可解释性。

原文在局限中明确指出降维与量化策略影响状态选择的稳定性，随机初始化与邻域优化可能影响离散索引的可复现性，建议未来做受控参数化或替代降维方法。这意味着当前实例的 1 次成功输出不能推广为每次运行必得同一卦象。下表把实例的输入规模与本次离散结果整理为可核对的行，便于他人在复现时对照是否进入同一状态。

表前比较问题是：给定相同的五句种子与相同管线，他人应核对哪些离散事实才能确认复现成功？公平条件是相同的语料聚合方式与量化区间，不比较声音实现。指标方向是离散输出一致即算管线复现，与演奏好坏无关。

| 实例要素 | 具体内容 | 计算阶段 | 本次离散事实 | 复现核对点 |
| --- | --- | --- | --- | --- |
| 标题 | 听雨的艺术实例 | 任务界定 | 面向即兴的语义到符号展示 | 确认不生成声音材料 |
| 语料规模 | 作曲家选定五句中文种子 | 嵌入与聚合 | 形成语料级表示再降维 | 核对句子数量与聚合方式 |
| 量化输出 | 2 维坐标均匀量化 | 离散化 | 输出整数对 8 与 4 | 核对区间与整数精度 |
| 符号索引 | 整数对索引卦象 | 状态选择 | 对应雷地豫状态 | 核对六爻结构而非占卜含义 |
| 表演提示 | 积累共鸣与内生驱动 | 条件展开 | 姿态导向而非指令集 | 核对演奏者仍有具体决定权 |

表后解释是该表的价值在于把可验证的离散事实与不可验证的审美判断分开。若复现得到不同整数对，应先检查随机种子、归一化范围与聚合方式，而非怀疑卦象含义。反例是即使进入同一卦象，不同演奏者的实现仍可完全不同，这不是失败，而是设计允许的开放性。负结果是本文未报告多次运行的分布，也未比较不同量化粒度下的状态稳定性，这些缺项需要在后续工作中补足。

### 哪些边界尚未验证，不能承诺什么改善？

作者明确承认的局限是降维与量化策略影响状态稳定性，随机成分可能损害离散索引的可复现性，需要受控参数化或替代方法。未来工作还包括扩展到更多输入模态，以及纳入以演奏者为中心的研究，评估符号状态乐谱在实践中如何被解释与协商。这意味着当前证据不支持关于误判率、延迟、计算成本或观众体验的改善承诺，也不支持总体趋势等于每组每次都成立。相关性不等于因果：语义相近导致状态相近只是几何邻近的可能结果，未经测量不能断言。

缺失证据不是技术错误，但复现者必须记录三项信息条件：预训练编码器版本与冻结状态、降维算法的随机种子与超参数、归一化与量化的区间划分。只有保留这些，才能判断 2 次进入不同卦象是方法本质还是配置漂移。此外卦象的文化 situated 性需要谨慎处理：作者已声明不用作占卜与叙事象征，不把世界观强加给演奏者，教学时不应将其还原为神秘主义解释，而应强调其作为显式六线二进制框架的结构功能。

### 要复现应先做什么，需要哪些超参数与信息条件？

复现的第一步是固定语料：逐字保留五句种子，明确聚合为语料级表示的具体方式，是平均池化还是其他聚合，因为不同聚合会改变投影点位置。第二步是固定编码器：记录 LaBSE 的具体版本与调用方式，确认不微调、逐句独立编码、输出维度与归一化前处理。第 3 步是固定降维：记录 t-SNE 的实现库、随机种子、困惑度与迭代次数，多次运行观察整数对的分布，评估稳定性。第四步是固定量化：确认归一化是按全局还是按批次，均匀量化的边界是否包含端点，整数为 1 至 8 闭区间。

第五步是固定映射：记录整数对到 64 卦的映射表，确认本次 8 与 4 对应雷地豫的查表逻辑，避免把爻的阴阳解释混入映射。第六步是搭建 6 层乐谱界面：按固定与开放层、能动性分配、稳定激活或消散 3 类条件展开，结合姿态提示进行排练，观察演奏者如何在约束内协商。资源状态方面，本次未发现来源绑定且完成验证的资源，不得声称代码、模型或数据已公开，因此复现需自行实现管线与界面。建议先做小规模重复性测试，再做表演研究，不要一开始就追求审美评价。

### 何时值得尝试这种压缩为状态的思路？

当作曲目标是塑造可排练的世界而非快速产出材料时，这种思路值得尝试。例如需要多人即兴在共享约束下协商，需要用简短标签在排练中指代复杂结构倾向，或需要在语义灵感与声音实现之间保留人的解释层，离散卦象都提供了紧凑接口。当任务需要精细连续表情、逐音符预测或高保真生成时，则不应采用，因为有意压缩会丢掉细节，且随机投影会带来不确定性。

复现的最小可运行策略是先实现文本到整数对的确定性记录，再接入符号到条件的展开，最后才引入表演协商；搜索最优或事后最优的卦象不能代替可部署收益，真正可部署的是每次可记录、可复述的选择过程。最终判断是该工作把人工智能辅助作曲从自动化声音生产重构为符号状态选择，用极紧凑的符号结构调和控制与自由在即兴与计算机介导音乐中的长期张力，同时以可控性代价提醒后来者补足稳定性验证与演奏者研究。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 20 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-1.png)

区域 1 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=20)

[![原文数学表达区域 2，PDF 第 20 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-2.png)

区域 2 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=20)

[![原文数学表达区域 3，PDF 第 20 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-3.png)

区域 3 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=20)

[![原文数学表达区域 4，PDF 第 20 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-4.png)

区域 4 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=20)

[![原文数学表达区域 5，PDF 第 20 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-5.png)

区域 5 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=20)

[![原文数学表达区域 6，PDF 第 20 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-6.png)

区域 6 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=20)

[![原文数学表达区域 7，PDF 第 44 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-7.png)

区域 7 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=44)

[![原文数学表达区域 8，PDF 第 44 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-8.png)

区域 8 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=44)

[![原文数学表达区域 9，PDF 第 44 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-9.png)

区域 9 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=44)

[![原文数学表达区域 10，PDF 第 44 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-10.png)

区域 10 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=44)

[![原文数学表达区域 11，PDF 第 45 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-11.png)

区域 11 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=45)

[![原文数学表达区域 12，PDF 第 45 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/36b81f27fffa/figure-12.png)

区域 12 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=45)

另有 31 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 icmc-2026 论文汇总](/posts/conference-icmc-2026/)
