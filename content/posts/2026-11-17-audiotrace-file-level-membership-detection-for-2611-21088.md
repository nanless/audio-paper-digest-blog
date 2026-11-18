---
title: "AudioTrace: File-Level Membership Detection for Audio Large Language Models"
date: 2026-11-17
draft: false
tags: [音频隐私攻击与防御, 不确定性估计与校准, 基准测试, 数据集]
categories: [论文速递]
description: "论文把音频文件是否参与微调当作审计目标，用目标模型自己为录音出题再按回答的不确定性打分并取最可疑的几题平均，在三套音频大模型上把区分度从随机猜测提升到 0.55 到 0.60 左右，代价是每个文件要做三十多次生成与打分且证据仍较弱。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.21088"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "不知道训练用了什么问题，还能判断音频是否被训练过吗"
paper_digest_original_title: "AudioTrace: File-Level Membership Detection for Audio Large Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.21088v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.21088v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.21088v1.pdf"
paper_digest_primary_task: "音频隐私攻击与防御"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.privacy-attack-defense","label":"音频隐私攻击与防御"},{"facet":"method","id":"method.uncertainty-estimation","label":"不确定性估计与校准"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "不确定性估计与校准"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把音频文件是否参与微调当作审计目标，用目标模型自己为录音出题再按回答的不确定性打分并取最可疑的几题平均，在三套音频大模型上把区分度从随机猜测提升到 0.55 到 0.60 左右，代价是每个文件要做三十多次生成与打分且证据仍较弱。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Guangzhi Sun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiao Zhan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shuai Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jose Such"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Phil Woodland"}]
paper_digest_abstract_sha256: "8853c5399852766cd6c4d3f823c39d58e41dce5cabc2d3dcb622c64e07811a86"
paper_digest_sidecars: {"citation.bib":{"sha256":"a7632cab3adceaca08d29cd9942228a01347b82b0f3ed813b0b233d46f09058f","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-21088/citation.bib"},"citation.json":{"sha256":"013c79245c314ec4f025ae9a5ef9a55341ad5ab57edbe9cf7d8f1e4db7f1ab01","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-21088/citation.json"},"citation.ris":{"sha256":"ded7b03115bbb66e015632df790cfd694110e47634f48d6a3fcb2f0ae1198eaa","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-21088/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"45ad21d35bc05f2c84a94a1be42bb72d41a19bc3f0a2dc8ad8ae9de2e23c4bb3","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-21088/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "2cbc654796e638f975a78f7ca086b1f37cc16bf447846c445780c9a9b5f77c17"
paper_digest_api_reader_plan_sha256: "b0901c50a59b524d21b9865292ef6263a7cb7e06aa4f8c4083c8febf419ac725"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "303dee0cb9551ecaaa881724b16f514aa9e72a600a5448e98e0dd2ec5da23fee"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "e07332f4549a220239c83c6f3d172c00388882091066f6799b68420c2aed7e7d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "ab55d3149d05e2f3d317176d52dfd0f9d27584314a32ddc40e1a620cdc6b4c04"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3bccd4d0057ad98255ef0e84c114b181b9ebd8dd72228b742484db89da553881"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 不知道训练用了什么问题，还能判断音频是否被训练过吗

> 英文题目：*[AudioTrace: File-Level Membership Detection for Audio Large Language Models](https://arxiv.org/abs/2611.21088v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频隐私攻击与防御](/audio-paper-digest-blog/papers/?concept=task.privacy-attack-defense)
- **研究方法**：[不确定性估计与校准](/audio-paper-digest-blog/papers/?concept=method.uncertainty-estimation)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Guangzhi Sun：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiao Zhan：机构信息未能在本次解析中与作者逐人可靠绑定
- Shuai Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jose Such：机构信息未能在本次解析中与作者逐人可靠绑定
- Phil Woodland：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

该研究处理音频文件级成员判断，输入是一段候选录音与目标音频大模型的问答接口，输出是该录音是否出现在监督微调集合的判定分数。难点是训练时的文字指令与参考答案对审计者不可见，录音常含连续重叠声学事件，时间结构本身难以指示成员身份。AudioTrace先让待审计的目标模型根据录音内容生成30个代理问题，再加1个转写查询与1个字幕查询，共32个问题。然后用同一模型回答这些问题并记录每个回答标记的词概率分布，对每个回答计算低概率标记平均负对数似然与熵类不确定性分数，最后取分数最高的2个问题平均得到文件级分数。与直接在音频对应位置计算困惑度或逆序音频块比较熵变的方法不同，该方法把证据放在模型对相关提问的回答不确定性上，并用目标模型自身偏好逼近未知训练分布。在包含640条成员与645条非成员的AudioTraceBench上，已知训练问答的特权对照合并分数AUROC在Qwen2.5-Omni上为0.8152，高于生成代理问题的0.5515，在SALMONN-2上为0.8234，高于0.5902，表明未知标注带来大幅下降。该结论只适用于受控监督微调与3轮低秩适配条件，0 dB加噪使代理信号接近随机，单模型3轮微调在单张NVIDIA A100上约需20小时，生成并评估多组代理问题约需直接音频级方法5倍的推理计算量。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频大模型训练为何需要文件级审计

音频大语言模型已经能听懂录音并完成转写、描述和问答，训练时常用网上公开的播客和视频音频，配上开发者自己写的转写、标题和问答对去做监督微调。对录音主人来说，真正关心的问题很具体：我的这段录音有没有被拿去微调过。

这个问题的难点在于信息不对称。录音是公开的，但训练时配了什么文字指令和标准答案往往不公开，审计者手里只有音频文件本身。如果要求审计者必须先拿到原训练问答，那就等于假设了最难获得的那部分信息，现实中做不到。

已有文本模型的成员推理多是判断一段文字序列是否见过，多模态里也有判断视频是否见过的工作。直接搬到音频上并不顺利，因为音频是连续且事件重叠的信号，时间结构本身不像视频帧那样直观可分，而且同一录音在训练中可能对应多条不同指令。于是论文把任务定为文件级：只看录音，不假设知道任何训练标注，判断它是否以任何形式参与过微调。

### 已有成员推理与本任务有何不同

文本和监督模型的成员推理有成熟套路，例如看损失、似然比、Min-K% 概率这类词元级置信度，或者用影子模型校准。搬到多模态后，人们会看音频文本对齐、困惑度、熵等统计量，也有人研究说话人级成员或整个数据集级推断。

视频方向有两个代表性思路被本文拿来改造。Vid-SME 观察时间顺序打乱前后模型不确定性的变化，VideoMIA 则让模型做时序推理题，看它能否排对片段顺序。这些思路都依赖视频帧的可分性和时序可验证性。

音频文件级与它们的关键差别在输入和监督条件。说话人级问的是某人的声音是否出现过，数据集级问的是一堆录音整体是否被用过，样本级问的是某个音频加问题加答案三元组是否见过。本文问的是单个录音文件是否见过，且明确不给原问题和原答案。比较是否公平，取决于任务、数据划分和输入条件是否一致，不能把已知原问答下的高分和未知监督下的分数直接对比胜负。

### 文件级成员推理要判定什么，攻击者知道什么

论文把微调数据集写成多个三元组的集合，每个成员是录音、文字指令和回答。文件级成员指示器只关心录音是否在其中出现过一次以上，不关心具体是哪道题。形式化定义如下式，存在一组问答使该录音参与训练即记为成员。

\[m(a)=\mathbb{I}\left[\exists(q,y)\quad\text{such that}\quad(a,q,y)\in\mathcal{D}_{\mathrm{train}}\right].\]

审计者手里有候选录音，能反复用该录音加任意文字指令去查询目标微调模型，观察生成文本。论文区分两种能力：只能看到文本的回答访问，以及还能看到词元概率的概率访问。AudioTrace 用的是后者，它需要概率来算不确定性，但不需要模型参数和梯度。

决策方式是先为录音算一个成员分数，再与阈值比较。阈值不同会得到不同的误报和漏报权衡，论文用曲线下面积和低误报下的检出率来评价。

直接沿用旧方法时，论文先在音频关联位置上取输出分布。由于这些位置没有标准词表答案，就把每个位置概率最大的词当作伪标签，再算困惑度、Min-K% 和各种熵。另一条线是把录音按固定时长切块并倒序，比较倒序前后 2 阶 Rényi 熵的变化，记为 Audio-SME，其逐位置差异形式如下。

\[\Delta_{t}(a)=H_{2}(p_{t})-H_{2}(p_{t}^{\mathrm{rev}}).\]

**文件级成员推理 × 样本级成员推理：** 样本级成员推理问的是某一个音频加指令加回答的三元组是否在训练集里，文件级成员推理问的是某个录音是否以任何一种指令和回答形式出现过，前者需要知道原训练问题，后者只给录音，两者输入条件不同，所以不能把已知问答下的高分直接当作文件级可用的效果。

### AudioTrace 如何把一个录音变成一个分数

直接看音频位置的分布效果不好，论文的判断是微调记忆更多藏在模型对相关问题的回答里，而不是音频编码本身。但原训练问题未知，所以要先构造一批能激发记忆的探测问题。AudioTrace 的做法是用被测模型自己为这段录音出题，再用同一模型回答这些题，最后把回答的不确定性汇总成文件分数。

要读懂下图，先明确输入输出。输入是一段候选录音，输出是一个文件级成员分数，分数越高越倾向判为成员。中间经过出题、回答加打分、聚合三步，不需要任何原训练标注。

> **看图路径：** 1. 先从左栏看录音如何进入目标模型并变成多道代理问题；2. 再看中栏同一模型如何对每题生成回答并算出 Min-K% 和熵；3. 最后看右栏多道题的分数如何经 Top-K 平均变成一个文件分数

[![原论文 Fig. 1：AudioTrace membership inference method.](https://arxiv.org/html/2611.21088v1/audiotrace.png)](https://arxiv.org/html/2611.21088v1/audiotrace.png)

*论文图 1。原论文 Fig. 1:：“AudioTrace membership inference method.”。*

这张图确实可见三栏从左到右的流水线。左栏目标录音进入目标音频大模型，产出多道代理问题，示例包括转写这段语音、关键信息是什么、描述背景音乐。中栏同一模型对每道题生成回答，并对每个回答算 Min-K% 和熵两类指标得到题级分数。右栏把多个题级分数做 Top-K 平均得到文件分数，再判成员或非成员。它的教学价值在于把分支汇合点说清了：问题分支各自独立打分，只在最后聚合处汇合，共享的是同一录音和同一模型。

### 代理问题怎样生成、打分与聚合

第一步是代理问题生成。给定录音和一个固定的出题指令，调用目标模型一次产生 N 道题，论文默认以温度 T=1 采样产生 30 道问答题，再加一道转写和一道描述，共 32 道。出题指令鼓励覆盖说话内容、说话人和背景声，不刻意去重，因为重复本身可能反映模型的偏好。生成过程可写成如下形式。

\[Q(a)=\{q_{1},\ldots,q_{N}\}=\operatorname{Generate}_{f_{\theta}}(a,q_{\mathrm{gen}}).\]

第二步是回答生成与指标收集。对每道代理问题，把原录音和该问题一起喂给同一目标模型，用贪心解码得到回答，由此得到音频加问题加模型自答的三元组。注意这里没有标准答案，用的是模型自己的输出词元来算概率。形式如下。

\[\hat{y}_{j}=\operatorname{Generate}_{f_{\theta}}(a,q_{j}),\qquad j=1,\ldots,N.\]

对每个回答，取出其每个词元位置的条件分布，算 3 类统计量。Min-K% 只取对数概率最低的一小部分词求负对数平均，熵（预测分布香农熵）则在每个位置算分布的分散度再沿回答平均，Rényi 熵用最大熵位置的 Top 比例平均。论文在回答级把分数方向统一为越大越不确定、越像非成员，而评估时统一以越大越像成员为正方向报告，主表 AUROC 按后者理解，不要按直觉反推。

第三步是文件级聚合。不同题的证据强度不同，直接平均会被弱题稀释，所以只保留最高的 k 个再平均，默认 k=2。不同指标各自独立聚合，另有一个组合分数把 Min-30%、Min-60% 和 Max-30% Rényi-2、Max-60% Rényi-2 组合起来求稳。

**代理问题 × 目标模型自生成：** 代理问题是审计时临时构造的探测指令，目标模型自生成指用被审计的同一个音频大模型来出这些题，这样出题偏好更可能贴近它在微调时见过的指令分布，从而让后续回答的不确定性差异更容易显现，组合后是在不知道原监督时逼近有效探测上下文的手段。

**Min-K% 概率 × 熵（预测分布香农熵）：** Min-K% 概率只看回答中最不确定的那一小部分词元的对数概率平均，熵（预测分布香农熵）看每个位置整个词表分布的分散程度，前者对个别记忆深刻的词更敏感，后者反映整体犹豫程度，两者都把数值越大解释为越不确定，并在本文回答级都作为越可能是非成员的证据方向。

**问题级分数 × Top-K 平均聚合：** 问题级分数是针对一道代理问题算出的不确定性值，Top-K 平均聚合是只保留其中最高的 k 个再取平均，它的作用是丢掉那些与训练监督不贴近的弱探测题，只让最可疑的证据决定文件级分数，避免被大量平庸问题稀释。

### 受控基准如何保证标签可靠

要可靠评价，必须知道每个录音到底有没有参与微调，且成员与非成员不能在来源上系统性不同。论文自建 AudioTraceBench，收集 2026 年 1 月 1 日之后发布的 YouTube 视频音频，用 2026 年之前的模型检查点做微调，从而在时间上拉开距离，并优先选新闻访谈等有时效事件的内容，降低预训练已见过的风险。
下图是该基准的构造流水线，读图时抓住 3 段的输入输出变化。

> **看图路径：** 1. 看左栏搜索词如何限定在新闻访谈等时效性内容并抽出音频；2. 看中栏内容密度、2026 年之后信息和时长小于 5 分钟三道过滤；3. 看右栏成员集做微调与非成员集留作审计的随机划分去向

[![原论文 Fig. 2：Data generation and curation pipeline for AudioTraceBench.](https://arxiv.org/html/2611.21088v1/audiotracebench.png)](https://arxiv.org/html/2611.21088v1/audiotracebench.png)

*论文图 2。原论文 Fig. 2:：“Data generation and curation pipeline for AudioTraceBench.”。*

这张图确实可见三栏。左栏用面向谈话和新闻的检索词搜索视频并抽出音频，示例包括新闻、播客访谈和会议报告。中栏对转写和描述做信息密度过滤，要求原子事实多于 20 条、转写词数多于 100 词且时长不超过 5 分钟，并保留 2026 年之后信息。右栏把过滤后录音随机分成成员集和非成员集，成员集用 Gemini 3.5 Flash 生成一条转写、一条描述和多条问答后用于监督微调，非成员集留作审计。

最终基准共 1285 段录音，其中 640 段成员占 49.8%，645 段非成员占 50.2%。成员平均时长 138.3±35.2 秒，非成员 136.7±35.0 秒，时长分布接近。类别上覆盖日常闲聊、企业财报、新闻访谈、学术报告、法律分析和独立播客 6 类，数量占比分别为 22.3%、20.1%、15.3%、18.0%、17.0% 和 7.4%，以语音为中心。

微调覆盖 Qwen2.5-Omni、SALMONN-2 和 Step-Audio-2-mini 3 套 7B 到 8B 量级模型，均用低秩适配微调，秩为 128，缩放为 256，只调大模型自注意力与前馈的线性层而冻结音频编码器，学习率 2×10-5，有效批量 8，默认训练 3 轮，单卡约 20 小时。每个成员录音平均配 7.45 组问答，构成转写加描述加问答的典型组合。评价时每个录音只给一个分数，指标是曲线下面积和 5% 误报下的检出率，随机猜测对应 0.5 和 0.05。

**时间分离 × 受控成员划分：** 时间分离指只用 2026 年 1 月 1 日之后发布的视频音频去测 2026 年之前的模型检查点，降低预训练已见过的可能，受控成员划分指把过滤后的录音随机分成 640 个成员和 645 个非成员并只用成员做监督微调，两者组合才能让成员标签明确且两组来源一致，使对照公平。

### 主结果是否说明旧方法接近随机猜测

本节回答第一个核心问题：在不知道训练标注时能否推断成员。比较条件是同一批 640 个成员和 645 个非成员、同一微调后模型，每个录音一个分数。指标方向是曲线下面积越大整体区分越好，5% 误报下检出率越大在低误报预算下越有用。

下表是 3 模型上的完整主结果，行是攻击方法与档位，列是各模型的两个指标。它保留了直接概率类、Audio-SME、VideoMIA-Audio、固定问题库和 AudioTrace 等实际可运行策略，是理解提升幅度的关键对照。

| Attack Method | Setting | Qwen2.5-Omni | Qwen2.5-Omni | SALMONN-2 | SALMONN-2 | Step-Audio-2-mini | Step-Audio-2-mini |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Attack Method | Setting | AUROC | TPR@5%FPR | AUROC | TPR@5%FPR | AUROC | TPR@5%FPR |
| PPL |  | 0.4957 | 0.0419 | 0.4970 | 0.0403 | 0.5207 | 0.0636 |
| Entropy |  | 0.4953 | 0.0419 | 0.4958 | 0.0372 | 0.5200 | 0.0698 |
| Min-K% | Min-10% | 0.4987 | 0.0279 | 0.4916 | 0.0388 | 0.5141 | 0.0589 |
| Min-K% | Min-30% | 0.4946 | 0.0481 | 0.4933 | 0.0310 | 0.5173 | 0.0667 |
| Min-K% | Min-60% | 0.4959 | 0.0459 | 0.4959 | 0.0372 | 0.5204 | 0.0636 |
| Max-K% Rényi Entropy | Max-10% (α=0.5) | 0.5000 | 0.0341 | 0.5001 | 0.0388 | 0.5119 | 0.0604 |
| Max-K% Rényi Entropy | Max-30% (α=0.5) | 0.4992 | 0.0512 | 0.4972 | 0.0341 | 0.5152 | 0.0589 |
| Max-K% Rényi Entropy | Max-60% (α=0.5) | 0.4998 | 0.0465 | 0.4956 | 0.0326 | 0.5172 | 0.0651 |
| Max-K% Rényi Entropy | Max-10% (α=2) | 0.5013 | 0.0248 | 0.4944 | 0.0372 | 0.5137 | 0.0558 |
| Max-K% Rényi Entropy | Max-30% (α=2) | 0.4952 | 0.0527 | 0.4925 | 0.0310 | 0.5168 | 0.0667 |
| Max-K% Rényi Entropy | Max-60% (α=2) | 0.4965 | 0.0465 | 0.4947 | 0.0372 | 0.5195 | 0.0636 |
| Audio-SME | Audio-SME Max 10% | 0.5106 | 0.0264 | 0.5005 | 0.0419 | 0.5194 | 0.0465 |
| Audio-SME | Audio-SME Max 30% | 0.5115 | 0.0512 | 0.5068 | 0.0434 | 0.5214 | 0.0574 |
| Audio-SME | Audio-SME Max 60% | 0.5072 | 0.0372 | 0.5133 | 0.0481 | 0.5229 | 0.0620 |
| VideoMIA-Audio | Trial = 5 | 0.5027 | 0.0372 | 0.5015 | 0.0403 | 0.5133 | 0.0562 |
| VideoMIA-Audio | Trial = 15 | 0.5049 | 0.0337 | 0.5184 | 0.0496 | 0.5179 | 0.0602 |
| Fixed Question Bank | Entropy | 0.5224 | 0.0295 | 0.5390 | 0.0620 | 0.5250 | 0.0576 |
| Fixed Question Bank | Min-60% | 0.5199 | 0.0357 | 0.5440 | 0.0481 | 0.5213 | 0.0525 |
| Fixed Question Bank | Max-60% Rényi-2 | 0.5159 | 0.0341 | 0.5455 | 0.0574 | 0.5178 | 0.0469 |
| AudioTrace (ours) | Entropy | 0.5505 | 0.0589 | 0.5809 | 0.0822 | 0.5897 | 0.0930 |
| AudioTrace (ours) | Min-30% | 0.5525 | 0.0589 | 0.5896 | 0.0961 | 0.5949 | 0.1054 |
| AudioTrace (ours) | Min-60% | 0.5555 | 0.0512 | 0.5881 | 0.0977 | 0.5939 | 0.1008 |
| AudioTrace (ours) | Max-30% Rényi-2 | 0.5537 | 0.0558 | 0.5917 | 0.0946 | 0.5958 | 0.1039 |
| AudioTrace (ours) | Max-60% Rényi-2 | 0.5563 | 0.0558 | 0.5899 | 0.1023 | 0.5948 | 0.0977 |
| AudioTrace (ours) | Combined | 0.5515 | 0.0574 | 0.5902 | 0.0992 | 0.5952 | 0.1039 |

这张大表支撑的判断是直接音频信号基本无效而自生成问题带来稳定提升。困惑度、熵、Min-K% 和 Max-K% Rényi 在 3 模型上多在 0.49 到 0.52 之间，Audio-SME 最好也只到 0.51 到 0.52 左右，VideoMIA-Audio 同样贴近随机。固定 30 题库略好但有限，而 AudioTrace 各项多在 0.55 到 0.59 之间，相对固定题库绝对提升在 Qwen2.5-Omni 约 4.4 个百分点、SALMONN-2 约 4.7 个百分点、Step-Audio-2-mini 约 7.1 个百分点。低误报下组合分数的检出率在 3 模型上为 0.0574、0.0992 和 0.1039，约为固定题库的 2 倍，但绝对值仍低，说明证据是统计性的而非决定性的。

为排除成员与非成员本身就可分，还需看与目标模型无关的盲基线。下表比较只用音频和内容特征训练的线性分类器，任务相同但信息来源独立于被审计模型。

| Method | Accuracy |
| --- | --- |
| Pitch and Duration | 51.25% |
| Text Embeddings | 52.77% |
| Acoustic Embeddings | 53.32% |

3 类特征准确率分别为 51.25%、52.77% 和 53.32%，均贴近 50% 的随机水平，支持随机划分没有引入易检的系统性差异。同时论文在微调前用原检查点加已知问答算困惑度等分数，曲线下面积也在 0.49 到 0.50 附近，说明指定成员在微调前并无优势。这个结论只在该受控划分和所测特征范围内成立，不能推广为任何音频都无分布差异。

### 代理问题与训练监督的贴近程度如何影响检测

本节回答为何代理问题重要。先看谁来出题更好的对照，条件是同一打分与聚合流程，只换出题来源，并用重标 BERTScore 衡量代理题与原训练题的最大相似度。

| Model | Source of Query | Similarity | AUROC |
| --- | --- | --- | --- |
| Qwen2.5-Omni | self-gen. | 0.4109 | 0.5515 |
| Qwen2.5-Omni | Qwen3-Omni gen. | 0.3870 | 0.5383 |
| SALMONN-2 | self-gen. | 0.4166 | 0.5902 |
| SALMONN-2 | Qwen3-Omni gen. | 0.3870 | 0.5562 |

自生成题的相似度在 Qwen2.5-Omni 为 0.4109、对外部模型 0.3870，在 SALMONN-2 为 0.4166 对 0.3870，对应曲线下面积从 0.5383 提升到 0.5515、从 0.5562 提升到 0.5902。这支持目标模型出题更贴近其训练监督，但差距不大，说明对齐有帮助而非决定性。

若只保留与原训练题最相似的 M 道题，效果变化更直接。下表按相似度取前 M 题再评价，M 越小越贴近训练分布。

| Model | MM | Max-60% Rényi-2 | Combined |
| --- | --- | --- | --- |
| Qwen2.5-Omni | 3 | 0.5995 | 0.6209 |
| Qwen2.5-Omni | 5 | 0.5791 | 0.5973 |
| Qwen2.5-Omni | 10 | 0.5527 | 0.5669 |
| Qwen2.5-Omni | 20 | 0.5568 | 0.5527 |
| Qwen2.5-Omni | 30 | 0.5563 | 0.5515 |
| SALMONN-2 | 3 | 0.6778 | 0.6822 |
| SALMONN-2 | 5 | 0.6253 | 0.6285 |
| SALMONN-2 | 10 | 0.6179 | 0.6212 |
| SALMONN-2 | 20 | 0.5959 | 0.5983 |
| SALMONN-2 | 30 | 0.5899 | 0.5902 |

只用最相似的 3 题时组合分数在 2 模型上分别达到 0.6209 和 0.6822，明显高于用全部 30 题时的 0.5515 和 0.5902。随着 M 增大到 30，分数单调回落到主结果水平。这表明贴近训练监督的题证据更强，混入不相关题会稀释信号。但该实验用到了原训练题来选 M，属于事后分析，不能当作部署时可获得的提升。

再看题数与题型的作用。下图是代理问题数对组合分数的影响，读图抓住趋势与稳定性。

> **看图路径：** 1. 看横轴代理问题数从 3 增加到 50 时两条曲线的上升幅度；2. 对比 Qwen2.5-Omni 与 SALMONN-2 在哪一段趋平；3. 注意阴影代表的一倍标准差随题数增加如何变窄

[![原论文 Fig. 4：Variation of AUROC against the number of proxy questions generated for Qwen2.5-Omni and SALMONN-2…](https://arxiv.org/html/2611.21088v1/proxy_question_count_same_plot.svg)](https://arxiv.org/html/2611.21088v1/proxy_question_count_same_plot.svg)

*论文图 4。原论文 Fig. 4:：“Variation of AUROC against the number of proxy questions generated for Qwen2.5-Omni and SALMONN-2 using AudioTrace Combined score.”。*

这张图确实可见两条随题数上升的曲线。横轴为 3、5、10、30、50，纵轴为曲线下面积，蓝色 SALMONN-2 从约 0.57 升至约 0.59，红色 Qwen2.5-Omni 从约 0.54 升至约 0.55，10 题后 Qwen 趋平而 SALMONN 在 30 题后趋平，阴影标准差随题数增加变窄。说明多采样能覆盖更多问题空间并稳定估计，但收益递减。

题型组成也有互补。下表比较只用描述加转写、只用问答和三者全用的组合分数。

| Composition | Qwen2.5-Omni | SALMONN-2 | Step-Audio-2-mini |
| --- | --- | --- | --- |
| Caption + ASR | 0.5276 | 0.6037 | 0.5549 |
| QA | 0.5450 | 0.5723 | 0.5845 |
| All | 0.5515 | 0.5902 | 0.5952 |

全用在 Qwen2.5-Omni 为 0.5515、在 Step-Audio-2-mini 为 0.5952，均最高，在 SALMONN-2 为 0.5902 略低于描述加转写的 0.6037。说明不同理解任务暴露的记忆互补，混合可避免依赖单一题型，但具体哪类最强与模型有关。Top-K 的消融也显示取过大的 K 会引入弱题而下降约 1 到 2 个百分点，因此默认取 2 是保守而稳健的选择。

**已知训练问答 × 未知监督：** 已知训练问答是微调时真正用过的转写、描述和问答对，未知监督是审计者实际面临的只给录音不给问题的情况，前者是用来衡量信息上限的特权对照，后者才是 AudioTrace 要解决的部署条件，两者差距说明了文件级任务的难度来源。

### 训练暴露与音频内容如何改变信号

本节回答信号来自音频记忆还是文字记忆，以及训练配置如何放大信号。论文设置了一个特权对照：对成员音频直接用原训练问答打分，其余流程与 AudioTrace 相同。同时做两种音频扰动，一是 0 dB 强噪声大幅破坏声学内容，二是用离散音频编解码重建，波形改变但听感内容保留。

特权对照在原音频上曲线下面积可达 0.81 到 0.82，5% 误报下检出率超 0.40，而 AudioTrace 在未知监督下仅 0.55 到 0.59、检出率最高约 0.06 到 0.10。这个巨大差距说明原问答本身携带强记忆证据，但审计者拿不到时不能把该上限当作实际效果。加 0 dB 噪声后特权对照跌至 0.58 左右仍高于随机，残留信号与模型记住了文字问答有关，而 AudioTrace 跌至 0.50 到 0.52 接近随机，说明它依赖声学信息而非背诵文字。编解码重建后两者基本不变，AudioTrace 仍为 0.55 到 0.59，说明它不要求波形精确匹配。

训练数据组成也有影响。只用描述加转写或只用问答重训 3 轮时，AudioTrace 仍高于随机和直接基线，但加入问答监督的组合通常更高。一种解释是证据集中在某类查询上而其他题稀释了聚合，但审计者事先不知道组成，无法针对性选题，这正是文件级威胁模型的动机。

下图是训练轮数与低秩秩数的消融，读图时把记忆信号与任务性能分开看。

> **看图路径：** 1. 先看上半 SALMONN-2 随训练轮数增加时 AudioTrace 与 Audio-SME 的区分；2. 再看下半 Qwen2.5-Omni 在同样轮数下的变化是否一致；3. 对照每组右侧词错误率与问答准确率，区分记忆信号与任务性能

[![原论文 Fig. 6：Ablation studies on training configurations, including the number of repetitions of the samples…](https://arxiv.org/html/2611.21088v1/train_ablation.svg)](https://arxiv.org/html/2611.21088v1/train_ablation.svg)

*论文图 6。原论文 Fig. 6:：“Ablation studies on training configurations, including the number of repetitions of the samples (represented by the number of epochs), and the number of trainable parameters…”。*

这张图确实可见上下两大块分别对应 SALMONN-2 和 Qwen2.5-Omni，每块含轮数曲线和秩柱状图及其右侧的词错误率与问答准确率。随轮数从 1 到 5 增加，AudioTrace 曲线下面积在 SALMONN-2 从 0.56 升至 0.63，Audio-SME 仍贴近随机，词错误率持续下降而问答准确率反而下降。随秩从 32 到 512 增大，AudioTrace 从 0.56 升至 0.67 左右，词错误率和问答准确率多同步改善。说明更多重复暴露和更大适配容量会增强可探测记忆，且更强泄漏可以与下游性能提升并存，不能简单理解为过拟合才泄漏。

这些结论只在受控微调、3 轮默认、低秩适配和所测扰动强度下成立。更大更多样的数据、其他监督策略和不同暴露次数下的表现仍待验证。

### 方法的代价与边界是什么

首先是计算代价。每个录音默认要生成 30 道问答加转写和描述共 32 题，并对每题贪心解码回答再算概率统计，论文报告约为直接音频方法的 5 倍推理开销。大规模审计时这会成为瓶颈，需要在题数与稳定性之间权衡，图 4 显示 10 到 30 题后收益已趋平。

其次是证据强度。主结果曲线下面积最高约 0.60，低误报下检出率约 0.05 到 0.10，虽稳定高于基线但远非确证。论文明确提示应将其视为统计证据而非成员的决定性证明，实际维权或审计需要更可靠且校准良好的证据。

第三是评估范围。实验是受控监督微调，成员标签明确且数据量有限，真实训练可能更大更多样、监督策略不同、样本暴露不均。黑盒变体用多次采样一致性代替概率，在 Qwen2.5-Omni 上组合分数 0.5515 对应 ROUGE-L 为 0.5253、BERT 评分为 0.5441，说明无概率时仍有微弱信号，但同样有限。有效代理问题的自动选择仍未解决，如何在不知道训练细节时稳定找到高亲和问题是后续关键。

### 复现第一步做什么，需要哪些信息条件

复现应从数据与检查点的时间分离做起。按论文收集 2026 年之后发布的时效性语音内容，过滤出信息密度高且时长不超过 5 分钟的录音，随机划分成员与非成员，只用成员生成转写、描述和问答并微调 2026 年之前的检查点。成员与非成员的时长分布要接近，并用与目标模型无关的音高时长、文本嵌入和声学嵌入分类器检查是否接近随机，以排除易检偏差。

微调按论文用低秩适配，秩 128、缩放 256、学习率 2×10-5、有效批量 8，冻结音频编码器，默认 3 轮。推理时固定贪心解码回答代理问题，温度采样生成代理问题，块扰动用 2 秒切块，Top-K 默认取 2。评价固定同一批录音，每个录音一个分数，报告曲线下面积和 5% 误报下检出率。

本篇未确认作者资源当前可用，不应默认代码、权重或数据已公开。论文正文提到用匿名链接提供微调、推理与打分代码，但本次未获得可验证的可用资源状态，复现应按已披露超参数自行实现。缺少的是有效代理问题的选择策略和大规模真实训练下的验证，复现时不要把已知原问答的特权分数当作可部署效果。

### 什么时候值得尝试，还需要补什么验证

当审计者只有录音而拿不到训练问答，且能获得目标模型的词元概率时，AudioTrace 是值得尝试的起点。它不需要原标注，不依赖波形精确匹配，对编解码重建稳健，且在 3 套模型上一致高于直接概率、时序扰动和固定题库。操作顺序是先为录音自生成多道覆盖内容、说话人和背景的问题，再对回答算 Min-K% 和熵并取最高的 2 题平均，优先看组合分数的稳健性。

容易产生的误解有三点。其一，已知原问答下 0.82 左右的高分不代表文件级已解决，它只是信息上限。其二，只用最相似 3 题时 0.62 到 0.68 的提升是事后用原题选出的，不能部署。其三，更大秩或更多轮数下信号增强伴随任务性能变化，不能简单归因于模型变差。

还需补的验证包括在更大更多样训练、其他监督配比和不同暴露次数下的表现，以及低误报下更可靠的校准证据和高效的自适应选题方法。在此之前，结论的适用条件应限定为受控微调、语音为中心、短于 5 分钟且信息密集的录音，以及概率可用的审计接口。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.21088v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-17/)
