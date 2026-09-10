---
title: "Voice or Stereotype? Disentangling Acoustic and Content-Based Gender in Speech-to-Speech Models"
date: 2026-09-11
draft: false
tags: [语音属性识别, 评测协议, 公平性, 多语言, 语音]
categories: [论文速递]
description: "该研究用男声女声交叉朗读男性刻板、中性、女性刻板长文本检验五款英西汉语音到语音模型，报告输出声音无可靠漂移但说出的性别判断全部跟随内容，错配时集中误判而固定音色审计看不见该偏差。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.09263"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "固定音色查不出偏置：语音到语音模型跟内容误判说话人性别"
paper_digest_original_title: "Voice or Stereotype? Disentangling Acoustic and Content-Based Gender in Speech-to-Speech Models"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.09263"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.09263.pdf"
paper_digest_primary_task: "语音属性识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "该研究用男声女声交叉朗读男性刻板、中性、女性刻板长文本检验五款英西汉语音到语音模型，报告输出声音无可靠漂移但说出的性别判断全部跟随内容，错配时集中误判而固定音色审计看不见该偏差。"
paper_digest_authors: [{"affiliations":["Centific Research"],"name":"Xiaoqun Liu"},{"affiliations":["University of Washington"],"name":"Tanu Mitra"},{"affiliations":["Centific Research"],"name":"Harshit Rajgarhia"},{"affiliations":["Centific Research"],"name":"Abhishek Mukherji"}]
paper_digest_abstract_sha256: "4502ba7e99e0dc58a1782c3fac55446f3d575741120a35e954520c59628316b8"
paper_digest_sidecars: {"citation.bib":{"sha256":"55ceb46f53bfc4a2e83cc7dee9f41c59fb025150ff5d441439600c2d0d9ebb9b","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-09263/citation.bib"},"citation.json":{"sha256":"4b4bdc41f05ccde5177e47a1778cab7201e53eca7f4ecd46bde8c99d20962d31","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-09263/citation.json"},"citation.ris":{"sha256":"c5aded864b9dafacd675d6ff1d83c90072d3172635f9443f19b1b7538c3e70fd","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-09263/citation.ris"},"rethink-context.json":{"sha256":"f9a2d8ebca88b6885cadcbc01b8fed4be52a180dc16f8e2e008bcd06e6148d91","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-09263/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "13f4d7423ba2a3508965fca8f6b54527e1965de881da8655b8d95c74f646c9fc"
paper_digest_api_reader_plan_sha256: "5b43f62fe4021ff2d8dc678077a3324eef363d69b0821b16454bebfb86699ad8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9009f9eb7574848f967a26381bc29c281815bb6a73c74bf50b442e4f2c3605b0"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "bf8ea97d57306be32717193470a9f2ee718b7da5fc0e51d30c26b9e938f7cd23"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b63b9da6139bb2f52394a6061b35a63822757f8fd7dbaa3dc43b7b4e05530cff"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0e0d9786478c07bfbb9e75f2e667874071f56c217f77981047cfce2dd1cef19b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 固定音色查不出偏置：语音到语音模型跟内容误判说话人性别

> 英文题目：*[Voice or Stereotype? Disentangling Acoustic and Content-Based Gender in Speech-to-Speech Models](https://arxiv.org/abs/2609.09263)*

> 标签：#语音属性识别 | #评测协议 | #公平性 | #多语言 | #语音
>
> 评分：**7.0/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Xiaoqun Liu：Centific Research
- Tanu Mitra：University of Washington
- Harshit Rajgarhia：Centific Research
- Abhishek Mukherji：Centific Research

## 📌 核心摘要

输入为男性或女性合成语音朗读的男性刻板、女性刻板与中性长文本，输出为模型重读语音的声学性别与对说话人性别的显式判断，难点在于主流模型输出语音固定，传统声音漂移探针结构性失明而漏检文本偏见。方法分三步推进：先以职业偏见种子生成第一人称无性别文本并经强度筛选与人工校验得到中性载体文本，再用男女声合成并经分类器与声学门控认证载体无泄漏后进入评测，然后施加复述、释义、概括、翻译与性别描述五种任务并分别以复合声学 femininity 与逻辑回归归因度量双通道。相对文本偏见问答与语音多选评测，关键机制差异在于以跨声音与内容正交的不变性为判据而非正确率，直接分离听到的声音与说的内容，因而能定位偏见藏于归因而非渲染，具有部署审计意义。在性别归因任务评测下，内容与声音错位条件下的误判错误率为90%，高于内容与声音一致条件下的2%。渲染语音无可靠漂移而归因全面内容驱动，闭源模型的内容敏感度约为开源模型的十倍，证实偏见是通用属性而非单厂商问题。结论适用边界仅为二元男女声与英西中三语，不覆盖非二元、真实人声与保留原声架构，属尚未验证的外推范围。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，什么必须保留？

这篇论文研究的是语音到语音模型（speech-to-speech model），也就是直接听音频再用音频回答的端到端系统，场景包括配音、翻译和语音助手中的复述与改写。输入是一段由合成声音朗读的长篇第一人称独白，声音性别已知，文字本身按构造不携带性别。输出有两个通道，一是模型说回去的声音听起来有多女性化，二是模型用词做出的性别承诺，例如说男或女，或在总结里选用他或她。
必须保留的信息是输入声音的性别。

按论文的判定标准，话题变了而声音没变时，判断不应该移动，因为话题本身不说明说话人是谁。开场先把这条线画清，后面所有对照都是看模型跟住了声音还是跟走了内容。
论文的起点是一个容易误判的现象。受测的 5 个系统回答时都不保留原说话人的音色，而是用单一固定的输出音色说话。开放模型经过单一内置音色渲染，封闭模型原生生成但实验中固定为一个声音。

于是最直观的探针，也就是输出声音是否被内容带偏，在结构上就很难失败。
固定声音没有可漂移的余地，论文报告这正是审计风险所在。只查声音会得到干净的结论，而真正的偏差藏在必须做性别承诺的文本判断里。后续各节按学习依赖展开，先讲相关路线，再讲构造与测量，最后讲条件、结果与复现。

### 文本偏置路线和语音公平路线各解决了什么？

文本偏置测量多用模板或多选题。职业刻板与代词消解的共指基准、延续文本中刻板与反刻板的评分、把社会偏置写成模糊语境问答的基准，都属于这一路。更接近本研究的是开放生成中的误称性别，包括延续的人口偏移、跨性别与非二元代词、长文本改写中的误称。
这些工作多为英文纯文本，本文不拿它们当评测数据，只是借用其职业词等有劳工统计支撑的刻板种子去写新的长篇说话人匿名段落。

区别在于本文输入是语音，声音给出文本没有的性别真值，且覆盖 3 种语言，段落按构造保持词汇性别中性。
语音公平此前的移植多是把文本多选题搬到口语提示上，例如把刻板评分搬到能感知说话人的语音模型，区分内容与声学贡献的口语问答，以及语音大模型中与性别有关的位置效应。但已有分析指出这类基准换声音换格式就不稳定，主张转向长篇、以声音为真值的生成式评估。

本文的回应是做视角转换式生成，让模型在实际会做的复述、总结、改写中漏出偏置，并交叉声音性别与话题刻板得到因果对照。本文与一般公平探针争论的衔接点是检测能力本身。有工作指出脱离语境的取巧测试预测不了部署形态任务中的偏置，本文给了一个语音原生的更尖锐机制，固定音色架构下自然的声音漂移探针不是代表性不足，而是结构性失明。

### 为什么固定声音会让只听声音的审计失效？

设想一个男声在谈女性刻板话题，或一个女声在谈男性刻板话题。模型在配字幕、总结选代词或为下游智能体选人设时，应该跟声音还是跟内容。按论文的规范要求，应该跟声音，因为内容刻板指向另一性别时，跟内容就会在恰好打破刻板的人身上误判。
困难在于商业语音到语音模型不保留原声，输出是单一固定声音。检查输出声音是否向刻板漂移，相当于检查一个不能动的东西动了没有，通过是必然的，但通过证明不了公平。

论文因此提出两个研究问题。
第一个是声音重现（voice rendering），模型复述输入时，词中的刻板是否改变输出声音的感知性别。第二个是性别归因（gender attribution），模型说出说话人性别时，跟的是声音还是内容。第二个问题的标准是不变性，不是准确率，话题变化时判断不应移动。
教学上可以举一个例子帮助理解，但它只是例子，不代表论文的测量值。

例如同一段谈修发动机的话，先后用女声和男声读出，若总结都写他，说明跟了内容，若分别写她和他，说明跟住了声音。论文的正式做法是把这种对照做成全因子设计，用大量不同主题的段落重复同样的比较，并用统计模型估计内容净效应。

### 同一批声音和内容如何同时回答两个问题？

总体设计是 3 乘 3 乘二全因子，语言取英语、西班牙语、普通话，内容刻板取男性向、中性、女性向，声音性别取男和女。每个语言与刻板组合保留 10 个不同主题的段落，每个段落合成男声版和女声版，共 180 条带声音的段落，每格 10 条。错配格是男声配女性内容或女声配男性内容，中性格作为基线，所有效应相对中性报告。
如果模型跟声音，错配格看起来像对齐格，如果跟内容，重现的声音与性别判断都会向刻板一侧移动。语言选择按论文的解释承担分离作用。

英语靠必须出现的他或她做局部共指锚定，西班牙语靠广泛可听的形态一致且常常省略主语代词，普通话口语的他或她同音，从而分离声学通道。

**语音到语音模型 × 文本转语音系统：** 语音到语音模型是被测对象，它直接听音频再用音频回答，实验要看它被内容带偏后在声音和用词两处留下什么痕迹；文本转语音系统是测量工具，只负责用性别稳定的男声和女声把同一段文字读出来，提供已知真值的输入。两者搭配的理由是只有工具端声音性别可控且不受内容影响，才能把下游的变化归因于被测模型覆盖了声音，而不是合成器先把刻板漏进声学。

下面这张流程图把工具与对象的分工画了出来，左边是段落生成与合成，中间是载体门检验，接着是 5 个语音到语音任务，最右是双通道评估的分叉结论，读图时先走主路径再看分叉结论的数值框。

> **看图路径：** 1. 从左到右沿四栏走一遍：段落生成与合成、载体门、模型处理、双通道评估；2. 在载体门菱形处确认不通过则重合成或删除的回路；3. 在最右侧对比有界零结果与内容覆盖结果的数值框

[![原论文 Figure 2：Design pipeline. TTS is the measuring instrument, the S2S models are the systems under test.](https://arxiv.org/html/2609.09263v1/pipeline.svg)](https://arxiv.org/html/2609.09263v1/pipeline.svg)

*论文图 2。原论文 Figure 2:：“Design pipeline. TTS is the measuring instrument, the S2S models are the systems under test.”。*

这张图的可执行读法是先确认测量工具在载体门通过后才进入模型处理，5 个任务中只有逼出第三人称承诺的任务才暴露归因面，第一人称任务是阴性对照。右侧两框直接给出分离，声音侧是有界零，判断侧是内容覆盖，理解这一点后，后面所有数字都有了归属位置，工具与对象的责任边界也已划清。

### 输入段落和五个任务各自承担什么测量职责？

带声音的段落分 4 步写成。先用共指与问答偏置基准中的职业与活动主题做刻板种子，这些基准本身不用作评测数据。再让大语言模型围绕每颗种子写第一人称说话人匿名段落，要求不出现性别代词、性别名词，西班牙语还要避免指说话人的性数配合形态，使性别只能从音频恢复。
然后用模型评委打刻板强度，每个语言与每一极保留强度最高的 10 个不同主题段落。最后由 1 名近母语水平的三语志愿者核查词汇性别中性、自然度、极性归属和信息量窗口。

信息量按语言匹配，英语约 65 词，西班牙语约 80 词，普通话约一百一十字。合成用 Azure 神经语音，每种语言 1 男 1 女，共 6 个性别稳定且内容不变的音色。

**声音重现 × 性别归因：** 声音重现指模型复述时输出语音听起来有多女性化，用基频、共振峰和分类器边际合成的复合指数衡量；性别归因指模型用词说出说话人是男是女，例如直接说男或女，或在总结中选用他或她。前者通道被固定输出音色锁死，几乎没有可动空间，后者是必须做性别承诺的文本通道。两者搭配才能解释为何听声音的检查干净而看用词的检查失守，组合意义是把审计从听音色转向查判断。

5 个任务用源语言下达指令，不经过英语中转。原样复述要求逐字重复，内容恒定，用于分离纯声音漂移，是基线。改写保持第一人称，是自发性别化的阴性对照。总结强制第三人称单句，必须为说话人选代词，是间接归因探针。
翻译只跑西班牙语和普通话到英语，因音素集合变化，声音结果单独报告。

直接说性别要求只说一个词回答听起来是男是女，固定输出声音挡不住它，是直接归因探针。任务按改写自由度递增排列，用于检验自由度越大刻板是否越容易进入声音。

**错配单元 × 中性基线：** 错配单元指男声读女性刻板内容或女声读男性刻板内容，是检验跟声音还是跟内容的关键对照；中性基线指同一声音读中性内容时的表现，用于减掉固定输出音色带来的恒定偏移。两者搭配的理由是只看错配的绝对值会混入音色本身的男女差，只有错配减中性才能得到内容造成的净移动，组合后得到基线校正的对比量。

为把任务分工说死，论文强调只有强制第三人称承诺的任务才暴露归因面，第一人称任务即使看到性别词也属于对照异常而非主效应。这种分工让声音漂移与文本归因的证据互不串扰，后续的声音复合指数与代词斜率各有归属。

### 声音侧用复合指数算什么，对照如何相减？

声音侧对每条输出算复合女性化指数，是基频、第一至第三共振峰指数、两个独立语音性别分类器对数边际经标准化后等权平均。每个输出都与自己的输入相减，得到输出减输入的增量，每次试验自带对照。用分类前对数边际而不用后验概率，因为干净合成声音下后验会钉在零或一附近，丢掉性别内部的等级顺序。

估计量是基线校正的错配减中性对比，按输入性别分别计算并预设符号，女性内容应使输出更女性化，这样固定输出音色带来的恒定偏移在相减中抵消。检验分两路，先用 Welch t 检验把每个错配格与其对应的中性基线比较。
再用混合效应模型检验更尖锐的交互问题，内容对重现女性化的效应是否依赖于说话的是哪个声音，模型带话语随机截距，按模型乘语言拟合，吸收段落特质，使少数特殊段落冒充不了内容效应。翻译因音素变化单独报告声学结果。
文本侧分两路。

直接说性别把口语回答映射到男或女，不合规的回答剔除，然后以内容女性化等级为序数自变量、控制真实声音拟合判女概率的逻辑回归，报告每步内容的几率比。总结则统计模型自带文本流中的第三人称代词注入情况，只在注入性别代词的子集中算从男性内容到女性内容时判她概率的斜率。

### 本研究训练了什么，没有训练什么，真实计算是什么？

本研究没有训练任何语音到语音模型，也没有微调被测系统。5 个被测对象是现成系统，两个闭源走接口调用，3 个开源取现成检查点，全部以单一固定输出声音运行。论文实际做的计算集中在三处，一是输入构造与筛选，包括段落生成、强度打分选优与人工核查。
二是载体门检验，对全部 180 条输入做分类器是否翻转与内容效应检验，三是推理与评分，对每条输入跑 5 个任务，再对输出音频算声学复合指数、对输出文本算归因统计。论文未报告被测模型的训练数据、优化器、梯度路径与参数冻结情况，不能从模型名称推定实现。

**载体门 × 内容与声音交互：** 载体门是在任何模型听到输入之前，先检查合成语音本身是否干净，即同一固定声音下内容不改变其声学性别；内容与声音交互是在输出端检验内容效应是否依赖于是男声还是女声在说，这是刻板拉动必须留下的签名。前者排除工具污染，后者确认模型偏置的方向性，搭配后才能说下游的移动是模型覆盖了声音，而不是输入声音先被内容染色。

载体门必须通过才能把下游变化归于模型。硬标准是两个性别分类器在任何输入上都不翻转既定声音性别，每种语言都是零翻转。软标准是在固定声音内，内容对性别敏感输入测量的单因素检验应无效应， headline 是复合指数，3 种语言均通过，平均基频与第二分类器边际同样无效应。

唯一偏离的是西班牙语第一分类器边际，论文用三点论证它是良性的，女性减男性方向对比接近零且不显著，中性格略低于两极而非刻板排序，格均值差异相对约 13 对数的男女声音分离极小，且估计量经错配减中性会抵消该中性格偏移。接口模型的采样与解码设置未给出完整可复现细节，复现时只能按固定声音、源语言提示与逐条独立调用来对齐条件。

### 测什么，和谁比，条件是否一致，指标方向是什么？

实验按两个问题组织。声音侧测输出女性化复合指数的基线校正对比，方向是向刻板一侧移动为正效应，比较对象是同一声音同一语言下的中性基线，公平条件是每试验自带输入对照并按声音与语言分格相减。归因侧测判女概率随内容女性化的移动，方向同样是向内容刻板一侧为正，比较对象是控制真实声音后的内容梯度。
公平条件是声音真值已知且词汇性别中性，只能从声音恢复性别。

被测模型共 5 个，闭源是 OpenAI 的音频模型与谷歌原生音频模型，开源是三款不同规模的检查点。输出声音区分两种固定路线，闭源原生生成但固定，原则上漂移可能，开源经固定解码器音色渲染，结构上没有漂移空间。
比较公平性时要注意三点，提示全部用源语言书写，翻译不跑英语源，总结与直接说性别是唯一强制性别承诺的任务。

评分时声音用复合指数与分类器边际，文本用几率比与代词斜率，聚合时直接说性别以三语言 pooled 拟合为主要推断，因为每语言每格样本小常出现完全分离。
下表是论文给出的输入载体与五任务分工清单，表前问题是声音工具与任务分工是否可控可比，公平条件是每语言男女各一且默认合成设置，指标方向是后续声学测量只认既定性别为真值且任务自由度递增。

| 任务 | 输出形式 | 设计角色 | 测量通道 | 自由度与报告 |
| --- | --- | --- | --- | --- |
| readback | verbatim repeat | isolates pure voice drift | A: voice | baseline |
| describe | forced gender word | direct attribution probe | B: judgment | bypasses fixed-voice floor |
| summarize | forced third person | indirect attribution probe | B: pronoun | must commit to he/she |
| paraphrase | reworded first person | negative control | control | keeps first person |
| translate | zh/es to en first person | cross-lingual control | control | phoneme set changes |

这张表的主要收益是把真值锚定在工具端并把任务按自由度排序，代价是只用每语言 1 男 1 女各一个音色，论文在局限中承认每格样本小且单音色是面板而非普查。未胜出的理解是不能把某个音色特别清晰误读为模型能力强，清晰只是让覆盖更容易被看见，工具清晰不等于模型公平。

### 声音为什么干净，判断为什么失守？

先看图一的 2 例错配，女声谈修发动机而输出写他，男声谈时装购物而输出写她，直观展示内容覆盖声音的形态，读图时不要把输入高亮的内容线索当成输出，输出的性别承诺只看代词。图一上半为例一汽车维修的女声配男性刻板内容，下半为例二时装购物的男声配女性刻板内容，输出分别落到他与她，图例区分男性编码内容线索、女性编码内容线索与输出性别代词。

> **看图路径：** 1. 先看上下两例的输入标注：女声配男性刻板内容、男声配女性刻板内容；2. 再看输出首词的性别代词是否倒向了内容一侧而非声音一侧；3. 最后看底部图例如何区分男性编码内容线索、女性编码内容线索和输出代词

[![原论文 Figure 1：A male and a female example of content overriding the voice in gendered reference.](https://arxiv.org/html/2609.09263v1/example.svg)](https://arxiv.org/html/2609.09263v1/example.svg)

*论文图 1。原论文 Figure 1:：“A male and a female example of content overriding the voice in gendered reference.”。*

这张图共两个矛盾格示例，声音与内容指向相反性别而输出代词倒向内容一侧，它与主结果的对应关系是总结任务中代词跟内容走的个例呈现，正式证据还要看 pooled 几率比与代词斜率，个例只负责建立直觉而非证明普遍量级。

**直接归因 × 间接归因：** 直接归因是直接说性别任务逼模型只说一个词回答说话人听起来是男是女；间接归因是总结任务逼模型用第三人称总结从而必须选用他或她。前者每条输入都强制二选一，适合用逻辑回归估计内容每步的几率比，后者允许模型不注入代词，只在注入的子集中算女性代词率随内容的斜率。两者搭配可以互相印证，一个看明示判断，一个看生成中自然漏出的代词，组合意义是证明内容覆盖声音不是某一种提问方式的假象。

声音侧的回答是没有可靠漂移。3 个开源检查点的 pooled 复合增量绝对值很小，论文称其零是结构性的，通道没有可动空间。两个闭源模型各出现孤立显著格，但在几 10 个闭源错配任务格中只占少数，无一在另一任务或语言复现，复述的混合模型内容乘声音交互在任何模型与语言都不显著。
判断侧的回答是内容覆盖声音。直接说性别中内容每女性化一步，判女几率在 5 个模型全部显著上升，闭源几率比远大于开源。

错配格 pooled 误判很高而对齐时很低，英语中谈 nursery 的男声被判女达很高比例。总结中注入代词的子集里判她概率同样随内容上升。
下表把被测系统的固定声音路线与语言覆盖列在一起，表前问题是谁在什么条件下被比较，公平条件是全部固定单音色且覆盖英西汉，指标方向是声音侧看有界零、判断侧看内容梯度。

| 模型 | 厂商 | 规模 | 输出声音路线 | 语言覆盖 |
| --- | --- | --- | --- | --- |
| gpt-audio | OpenAI | closed | generative fixed | en/zh/es |
| Gemini 2.5 Live | Google | closed | generative fixed | en/zh/es |
| GLM-4-Voice | Zhipu | open | fixed decoder timbre | en/zh/es |
| Kimi-Audio | Moonshot | open | fixed decoder timbre | en/zh/es |
| Step-Audio-2-mini | StepFun | open | fixed decoder timbre | en/zh/es |

这张表说明闭源原生固定声音原则上可漂移而开源固定解码器音色结构上不可漂移，代价是声音干净不能解读为公平，未评测边界是换音色或保留原声架构时量级可能不同，结论只在固定单音色条件下成立。

### 分语言与分模型看，方向会反转吗？

论文强调方向从不反转，只要逐语言效应可估计且显著，内容都把判断拉向自身刻板。开源逐语言格功效不足但从未显著反向。没有单一最差语言，语言画像是模型属性，有的模型在三语都是内容主导，有的三语都漏但排序相反，有的在英西守住声音却在普通话违反不变性。
类型学解释出现在该出现的位置。英语是各模型训练最好的语言，行为最决断，既有完全分离的高误判，也有完全守住声音的个例。

普通话口语他或她同音，是唯一没有模型守住声音的语言，且是唯一出现改写滑动的语言，书面必须选他或她而口语从不暴露，模型默认阳性他。
下表整理直接归因与间接归因的核心对照，表前比较问题是内容梯度有多大、错配代价有多集中，公平条件是控制真实声音且 pooled 估计为主，指标方向是错配误判越高表示覆盖越重、对齐误判越低表示声音证据可用。

| 条件 | 通道 | 声音干净证据 | 判断失守证据 | 可运行策略含义 |
| --- | --- | --- | --- | --- |
| 错配格 | 声音重现 | The rendered voice shows no stereotype drift. | 结构性无漂移 | 只查声音会放行 |
| 错配格 | 直接归因 | 控制声音后仍跟内容 | But every model decides the speaker’s gender from the content, not the voice. | 必须加归因任务 |
| 错配格 | 错配代价 | 对齐时低误判 | When the content clashes with the voice, the worst model misgenders the speaker in 90% of cases. | 内容违背刻板即高风险 |
| 对齐格 | 对齐对照 | 声音证据可用 | When they agree, it misgenders in only 2%. | 声音不是听不见而是被覆盖 |

表后解释是主要收益为闭源判断的内容驱动最大，但代价解读要小心，开源中性格基线误差更高会把几率比推向一，可能是衰减而非更公平。

未胜出项是最守声音的英语判断来自开源模型，说明效应是当前语音到语音模型的一般属性而非某一家特有，选型不能只看开放或闭源标签。

### 哪些对照证明效应只出现在被迫承诺时？

论文做了 3 组阴性与特异性对照。第一组是第一人称任务，改写与翻译保持第一人称，几乎不注入性别第三人称指称，5 模型一致，说明效应特定于被迫第三人称的任务，不是逢生成必性别化。普通话改写的少数滑动多为默认阳性他，且在女性与男性内容间大致均分，即不与刻板对齐。
第二组是按输入声音拆分的代词斜率。若内容而非说话人决定代词，则男女声上都应有可观斜率，部分模型正是如此，有的女声格因判她已触顶而斜率被压缩，男声斜率依然很高。

注入率低与默认判她会掩盖梯度，但不构成反向证据。
第 3 组是声音侧的任务特异性。在全部声学评分任务中仅少数拟合达到显著，且全在输出文本随条件变化的总结或翻译上，复述的交互全不显著， pooled 相反摆动相互抵消。这支持残余移动是噪声或词汇内容带入声学测量的结果。

下表整理代词斜率的特异性，表前问题是代词是否跟说话人走，公平条件是只在注入性别代词的子集中比较并按声音拆分，指标方向是女性内容更易出她为正效应，改写翻译因不注入而无可比主效应。

| 任务 | 注入形态 | 证据句 | 条件 | 策略含义 |
| --- | --- | --- | --- | --- |
| 总结 | 高注入 | In summarize, the injected pronoun follows the content stereotype, not the speaker: among summaries that inject a gendered pronoun (92% of outputs overall) | 第三人称强制承诺 | 审计应保留总结 |
| 改写翻译 | 几乎不注入 | paraphrase and translate inject almost no gendered pronouns (5%/0%, uniform across all five models), so the effect is specific to tasks that force third person. | 第一人称对照 | 阴性对照通过 |

表后解释是主要收益为高斜率模型在男女声上都有梯度，直接支持内容决定代词，代价是注入率差异使模型间比较必须条件化，未胜出项是部分模型斜率小但并非反向，论文将其归于少承诺与默认她，而非声音忠实，阴性对照的通过反而加强了主效应的特异性。

### 样本、标注、二元设定与转录链路还有什么缺口？

逐语言格小是首要限制。每格 10 段、每语言每性别一个音色，逐语言逻辑回归常出现完全分离或奇异拟合，因此 pooled 估计为主要推断，逐语言格只作说明性展示。不合规的直接回答被剔除而非编码，复现时要保留同样的剔除口径而非强行归类。
复述时先沿一个样本走完输入到输出。取一个女性刻板主题段落，用女声与男声各合成一遍，保证文字无性别词，西班牙语还要检查指说话人的形容词与分词无性数配合。

然后分别跑原样复述与直接说性别，前者算输出减输入的复合女性化增量并减去同声音中性基线，后者记录判女或判男并在控制声音后估计内容梯度。若跟声音，两声音版本判断应分别跟住各自声音，若跟内容，两版本都会倒向女性。
下表解释为何选西班牙语而非法语作高形态条件，表前问题是三语分工是否公平可比，公平条件是语音可听性与代词省略机制不同，指标方向是形态可听且能分离语法负载与代词锚定为优。

| Dimension | Spanish | French | Implication for our study |
| --- | --- | --- | --- |
| Audibility of gender inflection | -o/-a almost always pronounced and contrastive (cansado/cansada) | Frequently homophonous (né/née, employé/employée); gender often silent | In French, gender is often absent from the audio, undermining a speech-based probe |
| Pro-drop | Yes; subject pronoun usually omitted | No; subject pronoun obligatory (je/il/elle) | Spanish dissociates grammatical load from pronoun-anchor strength; French would be redundant with English and collapse the triangulation |
| Liaison & elision | Limited | Pervasive; blurs word boundaries | French complicates segmental cue extraction and S2S resynthesis alignment |
| 3rd-person pronoun in speech | Distinct (él/ella) | Distinct (il/elle) | Tie; not a differentiator |
| Gender-annotated speech data | Available (MuST-SHE) | Available (MuST-SHE) | Comparable; the choice rests on phonetics and design, not data availability |
| Global reach | Among the most spoken languages by L1 speakers, exceeding French | Large, but smaller L1 base | Both are high-resource and widely used; a slight edge to Spanish |

表后解释是主要收益为西班牙语形态可听且可省略主语，能与英语和普通话形成三角分离，代价是结论只在该三语组合下成立，换法语会因形态多沉默且主语强制出现而塌缩一轴。未评测边界是其他高资源语言的形态与韵律条件，复现若换语言需重做载体门与词汇中性核查。

### 要复述方法并复现，先做什么，需要什么条件？

标注链路是单人核查加模型打分选优。段落由大语言模型生成并打强度，志愿者独立核验词汇性别中性、自然度、极性与信息量，极性一致出现天花板。论文自己说明这是已过滤集合上的验证门而非评分者信度研究，用大语言模型文本探查大语言模型系统原则上可共享先验，多评分者验证会更强。
设计与编码是二元男女，与要审计的他或她、男或女二元行为匹配，但对非二元指称沉默。转录链路要区分对待。

除个别系统外分析的是各系统自己的文本流，个别系统的转录来自输出转录服务，在普通话他或她同音处书面代词可能部分反映该层语境选择而非对话模型，但部署字幕展示的正是这份转录。
复现先做载体门。用两个独立语音性别分类器对全部输入做是否翻转计数，再在固定声音内做内容单因素检验， headline 看复合指数，同时看平均基频与两分类器边际。硬标准零翻转，软标准 headline 不显著。

若西班牙语第一分类器边际出现中性格偏低而女性减男性方向对比接近零，按论文论证处理并依赖错配减中性抵消，不要直接判工具污染。运行条件按原文交代。段落信息量按语言匹配而非字数相等，提示用源语言原文，翻译不跑英语源，输出声音全程固定，声学用输出减输入，文本用 pooled 逻辑回归为主。

资源状态方面，本次未发现来源绑定且完成验证的资源，不得声称代码模型或数据已公开，复现应按自建段落、自选稳定音色与自搭评分链路来做，并记录不合规剔除数与注入率。何时值得尝试是当系统要输出字幕、代词或人设，或要把语音保留改为固定音色时，先加直接说性别与强制第三人称总结两项不变性检查，再谈声音是否干净。

下表是声学性别分类器的配置，表前问题是声音测量是否独立可信，公平条件是两分类器规模与语料不同而结论需一致，指标方向是分类前对数边际越大越女性化且保持等级，表后需交代二元设定的代价。

| role | checkpoint (Hugging Face) | backbone / corpus |
| --- | --- | --- |
| primary | alefiury/wav2vec2-large-xlsr-53-gender-recognition-librispeech | wav2vec2-large (24L/1024d); LibriSpeech |
| secondary | prithivMLmods/Common-Voice-Gender-Detection | wav2vec2-base (12L/768d); Common Voice |

表后解释是双分类器一致比单一分类器更强，代价是两者都是二元说话人性别识别，论文在伦理声明中明确不背书该能力为产品，只因部署系统已在选代词、人设与字幕时隐式做此类决定才审计其不可靠性。未评测边界是非二元与真实人声的泛化，最后 5 模型三语言是面板而非普查，固定单音色下限适用于任何单音色架构。

### 结论是什么，审计应改到哪里？

论文报告两个相反答案。声音重现有界零， pooled 对比与零不可区分，交互全不显著，残余显著靠近机会率且方向不一致、无跨任务跨语言复现。性别归因全线跟内容，每步内容女性化使判女几率上升，错配 pooled 误判很高而对齐仅很低。开放与闭源都有问题，闭源判断的内容驱动最大，开源中性格基线误差更高。
对审计的含义很直接。

固定声音下干净的漂移结果提供不了公平证据，因为没有可漂移的东西，偏置只在逼模型承诺说话人性别的任务中现身。应加入此类任务并按不变性打分，即话题单独变化而声音不变时判断不应移动。稳定的输出声音不是系统性别公平的证据。
对部署的提醒是当内容违背刻板时，模型会用内容覆盖声音误判真人，这种失败直达字幕、代词与人设选择。

论文建议值得测试的缓解包括抑制主动性别推断、让声音权重压过内容先验、允许拒绝或表达不确定，但这些在本文未被测量与验证，复现与选型时不应承诺它们一定有效，还需补上真实人声、多音色与非二元指称的验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.09263)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-11/)
