---
title: "Text-to-music Generation via Structured Captions AND Interpretable Evaluation"
date: 2026-11-03
draft: false
tags: [音乐生成, 流匹配, 模型评估, 音乐信息检索]
categories: [论文速递]
description: "该文把自由文本换成固定字段的结构化字幕来微调流式扩散变换器，并用两步补全和问答式对齐评价来验证，在报告的两个生成集上对齐和质量都有提升，但结论依赖内部训练库与所选评价器组合。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.00685"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "结构化字幕如何改变文本生成音乐的训练、补全与评价"
paper_digest_original_title: "Text-to-music Generation via Structured Captions AND Interpretable Evaluation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.00685v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.00685v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.00685v1.pdf"
paper_digest_primary_task: "音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-generation","label":"音乐生成"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"},{"facet":"scientific_topic","id":"scientific_topic.music-information","label":"音乐信息检索"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "该文把自由文本换成固定字段的结构化字幕来微调流式扩散变换器，并用两步补全和问答式对齐评价来验证，在报告的两个生成集上对齐和质量都有提升，但结论依赖内部训练库与所选评价器组合。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junkai Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhepei Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ge Zhu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sarah Hye-yeon Lee"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mari Ostendorf"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nicholas J. Bryan"}]
paper_digest_abstract_sha256: "e7235c453318308cb0d752cbfe65446ab8a5e88fb05ff0ccc75fcd6575fcc97e"
paper_digest_sidecars: {"citation.bib":{"sha256":"b7c80cf0ab5bbcc5e9e1f7b8a3d3839ae6bf8e871d1306a0de8410780af69bb2","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-00685/citation.bib"},"citation.json":{"sha256":"e2af8f9ec8055d1b9b7db0b27b5453139b3856c11ab3093d9536bd96d0c2c5b3","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-00685/citation.json"},"citation.ris":{"sha256":"5b0e797d75a1ee747d24181b522d56042fe1d8c441f7cce1b107b875666c4ce8","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-00685/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"0703d6b8f83ea4e679d32823a8a502dc4fa80b8c0aa86cefb9634188ce5ce855","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-00685/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "4e5e212de388c6e85e3d2d8a10becdd32bd71a16b14b229c867a6c4bcfecf312"
paper_digest_api_reader_plan_sha256: "9099353739ef9cf4b1410818640134216f5d92f77598e0cdb9f62d7192f58670"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "1b33a6e53699a45cc07f6d9e8d45ddb7f3b5d1bfc28c43d1cf069b74d1eb42d3"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "16bea069835895e64802c10650ea3afaa58ea3365c96faac352cddc9878d61b6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8d7c2455abd1baadfe6dae2c3f50084ff561fb7940d073edec2a6b8be9382fc7"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0df5b7eeb761efabea43be203bd1bdd3957aee57fd429f1ef551d2091c08117a"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 结构化字幕如何改变文本生成音乐的训练、补全与评价

> 英文题目：*[Text-to-music Generation via Structured Captions AND Interpretable Evaluation](https://arxiv.org/abs/2611.00685v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐生成](/audio-paper-digest-blog/papers/?concept=task.music-generation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)
- **研究重点**：[模型评估](/audio-paper-digest-blog/papers/?concept=research_focus.evaluation)
- **科学主题**：[音乐信息检索](/audio-paper-digest-blog/papers/?concept=scientific_topic.music-information)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Junkai Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhepei Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Ge Zhu：机构信息未能在本次解析中与作者逐人可靠绑定
- Sarah Hye-yeon Lee：机构信息未能在本次解析中与作者逐人可靠绑定
- Mari Ostendorf：机构信息未能在本次解析中与作者逐人可靠绑定
- Nicholas J. Bryan：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

文本到音乐生成需要根据文字提示合成符合描述且听感良好的音乐，难点在于训练配对文本信息量不足、格式不统一，以及缺乏可解释的文本符合度度量。论文把自由文本替换为结构化标题，即用固定字段记录流派、情绪、能量、调性、速度、拍号、乐器、人声和关键词的文本条件，并比较全局整轨标注与局部时变标注，以及完整保留字段与训练时随机丢弃字段的设置。推理时用两阶段改写器把自由提示先抽取为部分结构化标题，再补全缺失字段，然后送入微调后的流匹配扩散变换器生成音乐。评价侧把提示拆成原子是非问题，再用音乐问答系统打分并按问题类型加权聚合，得到可解释的符合度分数。与已有方法的区别在于分离了忠实抽取用户意图和补全音乐相容信息两个步骤，并建立了依赖感知的问答聚合。在 Song Describer 子集上，全量全局结构化条件配合补全改写器在对齐指标上达到 CLAP 0.344 和 Music DSG 0.738，相对自由文本基线的 0.320 和 0.689 有同步提升，音频质量指标 FAD 从 7.63 降至 6.68。结论适用于 32 秒短片段生成和所用内部训练分布，长时结构、开放提示和跨库泛化尚未充分验证，训练成本仅披露了在 32 块 A100 上微调 150k 步，未披露完整时长与推理开销。

## 🔗 开源与复现资源

- 第三方资源：<https://mu-scap.github.io/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文本生成音乐要解决什么输入输出问题

文本生成音乐的输入是一段描述音乐的文字，输出是一段波形或压缩音频。读者可以把任务理解为在给定文字约束下补出声音：文字说明希望出现什么风格、乐器、情绪、速度和调性，模型要生成一段听起来像音乐、且与这些描述相符的音频。

难点在于文字和音乐之间不是一一对应。同一句上扬的 lo-fi 嘻哈可能对应很多种配器和编曲，而一段音乐又可以用详略不同的文字来描述。训练时常用的自由文本字幕，即一句自然语言，往往缺字段、措辞不统一，模型难以稳定地把每个词和声音属性对齐。评价时常用的整体相似度分数也只给一个数，错在哪里说不清。

这篇论文把文本侧的设计当作独立变量来研究。它不换生成器的主体结构，而是比较训练字幕是自由句还是固定字段的结构化字幕，信息是完整还是部分缺失，描述是整曲全局还是随时间变化，并配套做推理时改写和细粒度评价。后续所有方法都是围绕这三件事展开的。

### 已有路线在文本侧和评价侧做了什么

在模型路线上，原文提到自回归语言模型、扩散或流匹配模型，以及语言模型规划加扩散渲染的混合方法。它们的主要精力放在架构、音频表示、训练规模和采样算法上，文本侧往往沿用大规模配对的自由描述。

在文本侧，已有工作意识到信息量重要。例如给描述补充和弦、节拍和调性，为全曲合成按段的时间结构化描述，把音乐表示成结构化元数据再转成自由字幕并补缺失字段。推理时也有把短查询扩写成歌曲蓝图、把自由提示改写成结构化标签的做法。论文认为这些工作没有把结构、覆盖度和时间粒度拆开做受控对照，也没有把忠实抽取和相容补全分开。

在评价侧，常用做法是在联合嵌入空间算音乐文本相似度，例如 CLAP，以及在其上训练预测器来估计音乐性和对齐。另一类是问答式评价，把复杂指令拆成可验证的是非题或细粒度规则，再对生成结果逐项检查。论文的 Music DSG 属于后一类，但专门针对音乐属性设计，并用神经网络检测器和大音频语言模型分别回答不同题型。

### 论文具体要回答哪几个对照问题

论文把一个大问题拆成训练、推理和评价 3 组小问题。训练侧问的是字幕格式、信息量和时间粒度各自起什么作用：自由文本对结构化字段，完整字段对随机丢字段，全曲共享的全局字幕对局部窗口的时间变化字幕。

推理侧问的是用户只给一句话时怎么办。用户提示通常是不完整的结构化信息，直接喂给按完整结构化字幕训练的生成器会有分布错位。论文问能否先忠实抽取已说的内容，再用音乐常识补全没说的内容，同时不改写用户的显式约束。

评价侧问的是如何可解释地衡量文本对齐。整体相似度不能指出哪类属性失败，论文问能否把提示拆成原子问题并逐个验证，最后聚合成与人类偏好更一致的可信度分数。这 3 个问题分别对应后文的微调对照、2 阶段改写器和 Music DSG。

### 整体流程如何把训练推理评价连起来

从一个样本看完整过程会更清楚。训练时从一首曲目里采样音频片段，配上对应的结构化字幕去微调生成器；推理时把用户的一句话先转成部分结构化字幕，再补成完整结构化字幕，然后交给同一个生成器出音乐；评价时把原始提示拆成小问题，用问答系统检查生成音乐是否满足每条，再汇总成对齐分。

下图把 3 段放在一起，左边是裁剪与字幕配对，中间是改写与生成，右边是分解问答与打分。读图时重点看文本形态在每一步如何变化，以及音频在何处被条件和被检查。

**结构化字幕 × 自由文本字幕：** 结构化字幕指固定字段的 genre、mood、energy、key、bpm、time signature、instruments、vocal 和 keywords 的组合，生成器每次都按相同位置读取这些属性；自由文本字幕指一句自然语言描述，属性混在句子里、缺省和措辞都不固定。二者搭配的意义在于用对照微调分离出格式本身的影响：同样的音频、模型和目标下，只换文本侧的组织方式，看对齐和质量是否变化。

下面先看总览图的行走路线，再分别解释每个部件的输入处理和作用。

> **看图路径：** 1. 先看面板 a 中音频裁剪与 TSCAP、GSCAP 的配对箭头，再看 SCAP 选择汇入生成器的位置；2. 再看面板 b 中 Transcribe 部分字幕与 Infer 补全字幕如何先后进入同一个生成器；3. 最后看面板 c 中提示分解、音乐问答与可信度分数三步的输入输出关系

![原论文 Figure 1：Overview of training, inference, and evaluation.](/audio-paper-digest-blog/images/papers/2611.00685/figure-1-20a0ad4e6af08b80.png)

*论文图 1。原论文 Figure 1:：“Overview of training, inference, and evaluation.”。*

这张总览图确实把 3 个阶段画成了 3 个面板。面板 a 显示多个音频裁剪分别指向对应的时间变化字幕，另有一份整曲全局字幕作为备选条件，最终经选择进入生成器微调；面板 b 显示一句自由提示先变成部分字幕再变成完整字幕，然后进入已适配的生成器得到音乐；面板 c 显示提示被拆成多个是否问题，生成音乐分别接受检查并汇总成 0.75 这样的可信度分数。它帮助理解的关键是文本从自由句到部分字段再到完整字段的形态变化，以及评价从整体相似到逐项验证的变化。

### 结构化字幕里固定字段装什么信息

结构化字幕在这里指固定字段的表格式描述。论文规定每份字幕包含 genre、mood、energy、key、bpm、time signature、instruments、vocal 和 keywords。演奏技法、效果器、时间顺序和力度等放不进前几项的信息保留在 keywords 里，用短语保存。

举例说明时可以这样理解，假如用户只写了欢快的 lo-fi 嘻哈加钢琴，结构化之后就是 genre 填 lo-fi hip-hop，mood 填 upbeat，instruments 填 piano，而 bpm 和 key 等空着等第二步补。这只是一个教学例子，用来说明字段分工，不是论文报告的实测数值。

**GSCAP × TSCAP：** GSCAP 是整首曲目级别的全局标签，所有从该曲目采出的片段共享同一份描述；TSCAP 是局部时间窗口的描述，用重叠窗口逐段标注以反映段落变化。前者实现简单但可能把局部没有的内容也强加给片段，后者更贴合局部内容但需要逐窗伪标签。论文把二者作为时间粒度的独立对照轴，与覆盖度正交组合。

时间粒度上有两种来源。GSCAP 来自曲目级元数据，同一首歌采出的所有片段共享同一份；TSCAP 是每 30 秒窗口、10 秒步长产生的局部伪标签，每个 32 秒训练裁剪配时间重叠最大的那个窗口。TSCAP 的伪标签来自在内部曲目级目标上微调过的 Qwen2.5-Omni，这是原文交代的构造方式，外部无法从公开证据复核其标注质量。

### 生成器微调只换了什么、控制了什么

生成器沿用预训练的基于流的扩散变换器，保留原有的隐音频表示和流匹配目标，主要变化是把条件从自由文本字幕换成对应的 GSCAP 或 TSCAP。因此基线和微调模型的差异主要归因于文本条件，这是论文强调的受控比较逻辑。

**Full SCAP × Partial SCAP：** Full SCAP 指保留全部可用字段的完整字幕，Partial SCAP 指训练时随机丢掉一部分字段的不完整字幕。前者给模型更丰富的信息，后者模拟用户提示常常缺字段的现实。论文用覆盖度对照来回答信息量本身是否有用，并与推理时是否补全字段形成对应。

来源与覆盖度正交组合出 4 种配置：Full 加 Temporal 记为 FT，Partial 加 Temporal 记为 PT，Full 加 Global 记为 FG，Partial 加 Global 记为 PG。Full 保留全部可用字段，Partial 在训练时随机丢掉一部分字段。长时推理时每个生成块以前一块音频为条件，这一点在 4 种配置下保持一致。

需要提醒初学者的是，微调只改变条件侧的读取方式，不等于模型学会了新的声学知识。信息更完整时模型更容易把文字属性和声音对应起来，但如果标签本身有噪声，完整也可能把噪声一起学进去，这正是后文要用对照来验证的原因。

### 两阶段改写器如何先保意图再补缺省

推理时用户给的仍是自由句，而生成器期望的是完整结构化字幕。改写器分两步桥接这个差距。第一步 Transcribe 只抽取原话明确写出的信息填到对应字段，其他字段留空，不明确的信息放进 keywords 做短语；第二步 Infer 把空字段用音乐上相容的信息补全，且要求与用户意图一致。

**Transcribe × Infer：** Transcribe 是改写器的第一步，只把用户原话中明确写出的音乐信息抽到对应字段，做成不完整的结构化字幕；Infer 是第二步，把空字段用与用户意图相容的音乐常识补成完整字幕。分开做的理由是先保住显式约束再补缺省，避免补全值覆盖用户已指定的内容，最终只输出一份符合生成器训练格式的字幕。

原文用颜色区分两类信息有助于理解：蓝色是转录得到的显式信息，红色是推断补上的缺省信息。最终只输出一份最能代表输入提示的完整字幕，不再区分全局还是时间变化。2 阶段都用免训练的大语言模型提示实现，默认转录用 Qwen3.5-35B，补全比较多种闭源、开源和多模态模型。

代价也很直接。多一次大模型调用就多一份延迟和不确定性，补全的质量取决于语言模型的音乐常识，而不是对具体生成器的针对性优化。随机补全的对照正是为了说明仅仅填满字段不够，填得是否音乐相容才是关键。

### Music DSG 如何把一句话变成可检查的问题集

Music DSG 分解、问答、打分三步。分解器把音乐字幕变成原子是非题，分两层。第一层覆盖乐器、人声、段落存在，genre、mood、energy、bpm、key、time signature，以及排除否定；第二层覆盖属性、计数和关系。多数第二层问题依赖一个第一层父问题，关系问题可依赖多个父问题，例如钢琴是否在小提琴之前依赖两个乐器的存在问题。同类题可出现多次，例如提到几种乐器就各有一个存在问题。

**Music DSG × CLAP：** CLAP 是在联合音频文本嵌入空间算整体相似度的分数，一次给出 holistic 的对齐度，但看不出哪个属性错了；Music DSG 是把提示拆成原子是非问题、逐个用音乐问答验证再按题型加权平均的分数，能定位到乐器、调性、速度等具体项。论文用两者并报，并检验谁与听众偏好更一致。

问答阶段对每题返回二值分数和是的概率形式的置信度。实现上用 Qwen3-Omni 做语言类问题，用内部检测器处理 key、bpm 和 time signature，其中调性检测沿用 S-KEY，速度和拍号用时序卷积节拍跟踪加动态贝叶斯后滤波。语言类置信度定义为 p yes 除以 p yes 加 p no，检测器类用与目标值距离相关的渐变分数。

打分阶段先在每种题型内分别平均二值和置信度，再按题型加权平均。依赖规则是若任一父问题回答为否，则子问题答案置否，置信度乘以父置信度均值。权重上存在、genre、mood、bpm 和排除否定为 1.5，energy、属性和计数为 1.0，key、拍号和关系为 0.5。这些权重是论文的设定选择，不是测出来的最优值。

### 微调和伪标签的训练设置是什么

基线是在随机采样的 32 秒片段加自由字幕上训练的。GSCAP 训练把曲目级字幕配给该曲目采出的每个片段，FG 和 PG 都如此；TSCAP 训练把每个 32 秒裁剪配给时间重叠最大的 30 秒窗口，FT 和 PT 都如此。

4 种结构化配置都从基线初始化，在内部音乐库上微调 150k 步，用 32 张 A100。架构、隐表示、流匹配目标、音频数据、裁剪采样和前块条件都保持固定，对照只改变字幕结构、字段覆盖度和时间粒度。这是论文能把差异归因于文本侧的前提，换了数据集或步数结论可能不同。

本节没有给出优化器、学习率和批量大小等超参数，也没有报告伪标签训练的损失曲线。复现时只能沿用原文已披露的步数、卡数、裁剪长度和窗口设置，缺失项需要自己补验证，不能从模型名字猜实现。

### 在什么数据和指标上比较生成与评价

评价分两条线。Music DSG 验证线用人与自动分数的一致性，用 Spearman 相关衡量。MusicEval 有 129 个提示的 413 个生成片段，用其中的 utterance 级对齐评分；内部集有 200 个提示的 600 个片段，由 3 个文本生成音乐模型渲染，收集 128 名普通听众约每对 5 票和 13 名专业乐手 400 对约每对 3 票的成对对齐偏好。

生成流水线评价用 Song Describer 的纯器乐子集 586 个片段、每提示生成 4 次，以及内部 genre9k 的 18 个 genre 各 500 个片段。指标同时报对齐和质量：对齐用 CLAP 和 Music DSG，质量用带神经自编码器主干的 FAD 和 MuQ。CLAP 越高越好，DSG 越高越好，FAD 越低越好，MuQ 越高越好，平均相对提升是对 4 个指标相对基线变化的平均，对 FAD 取逆后再算相对增量。

改写器对照固定转录为 Qwen3.5-35B，补全比较 Claude、GPT、多档 Qwen、Qwen-Omni、FireRed Audio，以及随机采样和留空两种基线。分解用 Qwen3.5-35B，问答用 Qwen3-Omni，调性速度拍号用专用检测器，这些组合条件是理解后文数字的前提。

### 新评价指标与人类偏好的一致性如何

这张表要回答的问题是在相同的人类偏好数据上，哪种自动对齐分数更接近人的判断。比较条件是同一批内部普通组、内部专业组和 MusicEval 数据，指标方向都是 Spearman 越高越好。包含的对照有两种 Music DSG 变体、AnyAudio-Judge，以及 CLAP、CLaMP 3、MuQ-MuLan 3 个对比嵌入方法。

| Metric | Internal (general) | Internal (pro) | MusicEval |
| --- | --- | --- | --- |
| DSG-conf (ours) | 0.421 | 0.414 | 0.248 |
| AnyAudio-Judge | 0.414 | 0.385 | 0.225 |
| CLAP | 0.165 | 0.211 | 0.235 |

从选出的行可以看到，置信版 DSG 在内部普通组 0.421、内部专业组 0.414、MusicEval 0.248，都高于二值版和 CLAP。CLAP 在这 3 组只有 0.165、0.211、0.235。也就是说，在这组听众和这组提示下，逐项问答加置信度平均比整体嵌入相似度更接近人的成对偏好，二值硬判又比置信版低一截，说明置信度带来了额外信息。

限制也要说清。相关系数本身不高，尤其 MusicEval 上所有方法都在 0.2 左右，说明自动指标离完全替代人工还很远。内部集的标注者和曲目分布、检测器在调性速度上的误差都会影响分数，不能把该表读成新指标在所有音乐和所有人群上都最优。

### 字幕来源覆盖度和补全方式如何影响生成

这两张大表要回答的是同一流水线问题：在固定基线和相同改写条件下，4 种字幕配置加补全与否、以及不同补全模型，是否同时改善对齐和质量。公平条件是同一基线初始化、同一训练步数和同一评测集，指标方向是 CLAP、DSG、MuQ 越高越好，FAD 越低越好，平均变化相对基线计算。

|  |  | Song Describer | Song Describer | Song Describer | Song Describer | Song Describer | genre9k | genre9k | genre9k | genre9k | genre9k |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DiT | Infer | CLAP ↑ | DSG ↑ | FAD ↓ | MuQ ↑ | Avg. Δ ↑ | CLAP ↑ | DSG ↑ | FAD ↓ | MuQ ↑ | Avg. Δ ↑ |
| Base | – | 0.320 | 0.689 | 7.63 | 3.95 | 0.0% | 0.354 | 0.744 | 7.44 | 3.93 | 0.0% |
| PG | Qwen3.5-35B | 0.338 | 0.723 | 6.59 | 3.96 | +6.2% | 0.380 | 0.775 | 6.56 | 3.96 | +6.1% |
| PG | Null | 0.331 | 0.712 | 7.16 | 3.77 | +2.1% | 0.372 | 0.769 | 6.89 | 3.79 | +3.1% |
| PT | Qwen3.5-35B | 0.342 | 0.735 | 7.12 | 4.02 | +5.5% | 0.386 | 0.787 | 6.99 | 4.02 | +5.8% |
| PT | Null | 0.334 | 0.715 | 7.23 | 3.82 | +2.5% | 0.373 | 0.767 | 7.03 | 3.84 | +2.9% |
| FG | Qwen3.5-35B | 0.344 | 0.738 | 6.68 | 3.99 | +7.0% | 0.387 | 0.791 | 6.59 | 3.99 | +7.1% |
| FG | Null | 0.332 | 0.722 | 6.96 | 3.75 | +3.1% | 0.376 | 0.780 | 6.71 | 3.76 | +4.2% |
| FT | Qwen3.5-35B | 0.351 | 0.756 | 7.12 | 4.00 | +6.8% | 0.392 | 0.803 | 6.96 | 4.01 | +6.8% |
| FT | Null | 0.335 | 0.730 | 7.39 | 3.71 | +2.0% | 0.379 | 0.781 | 7.06 | 3.76 | +3.2% |

主要收益是所有结构化变体在补全后都超过基线。以 Song Describer 为例，FT 补全后 CLAP 0.351、DSG 0.756，FG 补全后平均提升 +7.0%，都是该列较好的位置；留空的 Null 行平均提升只有 2% 到 3% 左右，说明补全带来了明显增量。时间粒度上呈现权衡：时间变化字幕的 FT、PT 对齐更高，全局字幕的 FG、PG 的 FAD 更低，论文推测是因为改写器输出更接近短时完整的全局训练分布。

未胜出项同样重要。MuQ 趋势混杂，不是每个结构化配置都最好；FAD 上 FT 并不占优，说明对齐好不等于分布距离一定小。第二张补全模型表进一步显示，随机补全反而让对齐下降到 CLAP 0.298、DSG 0.657，平均变化 -0.2%，证明只是填满字段没有用，填得音乐相容才有用。

| Infer | CLAP ↑ | DSG ↑ | FAD ↓ | MuQ ↑ | Avg. Δ ↑ |
| --- | --- | --- | --- | --- | --- |
| Closed-source LLMs |  |  |  |  |  |
| Claude Opus 4.8 | 0.347 | 0.744 | 6.88 | 3.98 | +6.8% |
| GPT-5.6 Sol | 0.351 | 0.748 | 6.85 | 4.00 | +7.5% |
| Open-source LLMs |  |  |  |  |  |
| Qwen3.5-35B | 0.344 | 0.738 | 6.68 | 3.99 | +7.0% |
| Qwen3.5-112B | 0.349 | 0.747 | 6.80 | 4.01 | +7.5% |
| Qwen3.5-397B | 0.347 | 0.746 | 6.98 | 3.99 | +6.6% |
| Multimodal LLMs |  |  |  |  |  |
| Qwen3-Omni-30B | 0.345 | 0.738 | 6.90 | 4.00 | +6.4% |
| FireRed Audio | 0.342 | 0.740 | 6.97 | 3.97 | +5.8% |
| Baselines |  |  |  |  |  |
| Random | 0.298 | 0.657 | 6.90 | 3.99 | −0.2% |

在这张固定 FG 生成器的补全对照中，开源的 Qwen3.5-112B 平均 +7.5% 与 GPT 相当，多模态模型提升较小但仍高于基线。这些结论只在 Song Describer 和所用改写提示下成立，换提示、换语言模型版本或换曲风分布都可能变化。论文因此把 FG 作为默认，不是因为它在每项都第一，而是平均提升在两个集上都最高。

### 这些结论在什么条件下才成立

第一个条件是数据。微调和伪标签都依赖内部音乐库，TSCAP 的质量取决于微调后标注器的准确性，外部读者看不到该库的分布和噪声。Song Describer 只用了纯器乐子集，genre9k 是内部集，因此结论不能直接推广到带人声、长结构或非西方音乐。

第二个条件是评价器本身。Music DSG 的问答依赖大音频语言模型和 3 个专用检测器，检测器错了分数也会错，权重也是人为设定。相关性验证只在 MusicEval 和内部两组听众上做过，系数绝对值并不高，说明它更好但远非完美。

第 3 个条件是成本与可复现性。微调需要 32 张 A100 跑 150k 步，推理多了一到两步大模型调用，论文没有报告延迟和费用。内部数据和部分模型未公开时，他人只能复现思想和流程，不能复现完全相同的数字。把缺证据说成技术缺陷是不对的，但也不能把相对提升当成部署保证。

### 如果要复现第一步该做什么

先从评价侧入手成本最低。用公开的 Song Describer 子集和 CLAP 把基线跑通，再实现提示分解到原子是非题、按题型加权平均的流程，哪怕先用人工抽查代替检测器，也能验证可解释评价是否比单个相似度更能定位错误。

再做文本侧对照。把已有字幕整理成固定字段，保留 genre、mood、energy、key、bpm、拍号、乐器、人声和 keywords，缺失字段先留空。训练时做完整与随机丢字段的对照，推理时做只转录与转录加补全的对照，观察对齐是否随信息量单调变化。

关于资源状态，论文文末给出的项目页在本次核验中是第三方链接且当前可达，这只证明论文提到了该链接，不证明作者已开源代码或权重。代码开源、权重可下载、系统可运行是三件事，需要分别确认，未确认前不要写作者资源已公开。

### 什么时候值得尝试这种做法

当你的生成器已经稳定，但用户提示常常缺字段、整体相似度又说不清错因时，这套做法值得尝试。把训练条件整理成固定字段能让缺省显式化，两步改写能在不改写用户显式约束的前提下补齐分布，问答式评价能指出是乐器、调性还是速度出了问题。

需要补的验证是跨库和跨评价器的稳健性：在公开库上重做来源与覆盖度对照，在更多曲风和带人声数据上检验时间粒度权衡，并用新的听众组重测置信版分数是否依然领先。只有这些都成立，才能说字幕设计、提示补全和可解释评价是可组合的通用组件，否则它们只是这组数据和这组模型下的有效选择。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.00685v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
