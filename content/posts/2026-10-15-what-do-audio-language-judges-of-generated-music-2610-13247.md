---
title: "What Do Audio-Language Judges of Generated Music Listen For? Four Probes with Controls from Expert Ratings"
date: 2026-10-15
draft: false
tags: [音频质量评估, 评测协议, 音乐, 音频大模型]
categories: [论文速递]
description: "论文针对音频语言模型评价生成音乐时相关性无法说明依据的问题，用去掉音频、同提示替换、成对调序和改写指令四个带对照探针检验五个公开评判模型，发现对齐评分都跟随实际播放的音频而质量评分只有部分跟随，且小模型的成对选择跟随位置而指令措辞的影响可达更换模型量级。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.13247"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "生成音乐评判模型到底在听什么：四个带对照的探针"
paper_digest_original_title: "What Do Audio-Language Judges of Generated Music Listen For? Four Probes with Controls from Expert Ratings"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.13247v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.13247v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.13247v1.pdf"
paper_digest_primary_task: "音频质量评估"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-quality","label":"音频质量评估"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对音频语言模型评价生成音乐时相关性无法说明依据的问题，用去掉音频、同提示替换、成对调序和改写指令四个带对照探针检验五个公开评判模型，发现对齐评分都跟随实际播放的音频而质量评分只有部分跟随，且小模型的成对选择跟随位置而指令措辞的影响可达更换模型量级。"
paper_digest_authors: [{"affiliations":["Institute of Computer Science, Warsaw University of Technology"],"name":"Mateusz Modrzejewski"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tomasz Radzikowski"}]
paper_digest_abstract_sha256: "6eb1e4f92a5f30795c8d6412f6154648db6c65ceb104f05e7256a91df7a1456c"
paper_digest_sidecars: {"citation.bib":{"sha256":"9cd6209aae10a620f961597174e238b75b35d7879734394568c7f68816585979","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13247/citation.bib"},"citation.json":{"sha256":"9f3e316303c54cfcabfd278fb977d09e57dfc8af2ab4279bf19197251940fd21","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13247/citation.json"},"citation.ris":{"sha256":"5cf1a820769f9f342a76d82bfd690e50f0037e2772d491ca78acae8b95bb45cc","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13247/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"8703cbc0f4859cea5e30f1087f94c8805d0910d31d2e2df95c5fa974fde7b440","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13247/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2cd13a437b8488e66fa61672bb914c897996bf1aaf943a7399fe90a54246391c"
paper_digest_api_reader_plan_sha256: "3b929ed72f9cf808bdce7df1f74eedf4cda1c726c13c562511a90b805473a7e9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "60caac4cd60dd6ab73b12bd45628f14558b99e01ec81e53d04fefb1d2f53a15e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b99a395444e971a13a678ba26c849a2c5f7c2915fef414b0e3db38d816b1991e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0ec162df61ce1e98d9d5ba962fb10bf2d2570ade769d5a4b5be06fa9736f41cc"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6c9a1fce912da0b5017032dd46d3fc5536f2ca3119323c3151e73fe52175ff53"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 生成音乐评判模型到底在听什么：四个带对照的探针

> 英文题目：*[What Do Audio-Language Judges of Generated Music Listen For? Four Probes with Controls from Expert Ratings](https://arxiv.org/abs/2610.13247v1)*

> 标签：#音频质量评估 | #评测协议 | #音乐 | #音频大模型
>
> 评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Mateusz Modrzejewski：Institute of Computer Science, Warsaw University of Technology
- Tomasz Radzikowski：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

生成音乐评判器输入为生成片段及其文本提示词，输出1到5分的质量分或对齐分，难点是与专家分相关高可能来自音乐本身，也可能来自提示词好坏或提问方式。本文在MusicEval全部2748个片段上测五个开源评判器，先以五个数字下一词概率期望值读出分数并算与专家评分的Spearman相关性，再做四个探针并对照人类评分算出的下限：去掉音频只留文字，同一提示词下换播另一模型片段，成对比较交换先后顺序，改写指导语。在MusicEval全部2748个片段上以与专家评分的Spearman相关性为指标，去掉音频后质量相关为0.01到0.05，未超过提示词单独的下限0.08，对齐相关为0.02到0.07，均显著低于提示词下限0.19。在2327次同提示词替换中以评判分数对播放片段与被替换片段专家评分的标准化回归系数为指标，评对齐时五个评判器播放系数均高于替换系数，评质量时仅Audio Flamingo 3以0.17对0.07和Qwen3-Omni以0.24对0.07的播放减替换差显著大于零。在600对拼接比较中以两次选择同一位置的比例为指标，四个小评判器为69%到99%且不随专家差距分组变化，高于Qwen3-Omni的25%，后者与专家一致率为67%。在300个片段三种措辞下以与专家质量评分的Spearman相关性为指标，Music Flamingo为-0.01到0.21，Audio Flamingo 3为0.01到0.17，Qwen3-Omni为0.12到0.24，措辞极差最高达0.24，与更换评判器的差异相当。结论仅适用于30秒以内MusicEval片段与单次1到5分评判，SongEval仅验证顺序交换与改写两项且用30秒节选，闭源评判器、其他时长与措辞尚未验证，专家质量与对齐评分高度相关限制了分解。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文本生成音乐现在是怎么被自动评价的

文本生成音乐的输入是一段文字提示，比如风格、乐器、情绪和节奏的描述，输出是一段十几秒到 30 秒的音乐音频。研究者希望自动给这段音频打分，以替代每次都请专家试听。一种做法是用音频语言模型当评判模型：把生成的片段和它的提示一起喂给模型，再用指令问它音乐质量如何或与提示相符程度如何，让它输出 1 到 5 的分数。论文研究的就是这类零样本评判模型。

验证方式通常是计算模型分数与专家分数的斯皮尔曼相关性，相关越高被认为越接近专家。但相关只说明两者变化方向一致，没有说明模型依据的是音频、提示文字还是提问方式。对于刚入门的同学，关键是记住输入有两路，音频和文本，输出是一个分数，评价指标是与专家的一致性，而一致性本身不揭示原因，这正是论文要补的缺口。

### 已有评判研究和走捷径的发现处在什么位置

生成音乐的自动分数原来有两类，一类是比较生成分布与参考分布差异的指标，另一类是在人类评分上训练的预测器，论文提到其中有预测器实际跟随的是流派而不是质量。零样本音频语言评判模型在 MusicEval 上的已有报告给出从接近零到中等的相关，但都没有做探针。文本评判领域已经发现分数会随提示格式和候选项位置漂移。语音评判的审计走得更远：成对比较存在位置偏好，且差距越小偏好越明显。

有的评判模型不听音频也能在问答基准上保留 60% 到 70% 准确率；还有工作用生成者身份和描述长度等不看内容的探针来检验情感描述评判。本篇把无音频和调序探针转到音乐，并利用音乐特有的条件增加了同提示替换，因为同一提示被很多模型渲染过，可以固定文字只换音频，这是语音审计没有的条件。

### 相关性高为什么还不能说明评判模型在听音乐

论文要解决的具体问题是：评判模型与专家的相关性可能来自 3 个不同来源，第一是真的听到了音乐差异，第二是看到了提示文字的难易，比如有的提示本身就容易生成好音乐，第三是评测协议，比如指令措辞、分数读数或成对时的位置。如果只报告一个相关数字，这三者混在一起。更麻烦的是 MusicEval 有两个评分目标，音乐质量和提示对齐，模型可以被要求回答其中任一个。

对齐任务天然需要看文字，质量任务理论上应主要听音频，但专家的两种评分本身相关， within 模型内达到 0.74，这让分解变得困难。论文因此不是提出新的打分模型，而是提出 4 个每个都带对照的探针，让每次报告的相关都能被追问到底来自哪一路信号。

**音乐质量 × 提示对齐：** 音乐质量指片段本身听起来好不好的整体音乐印象，提示对齐指片段内容与文本提示描述是否相符；前者只看音频，后者需要同时对照音频和文本，论文让同一评判模型分别回答这两个目标，才能区分它是听音乐还是看提示文字。

### 四个探针整体上如何分工

4 个探针分别对应音乐、文字和协议 3 类来源。第一个探针去掉音频，只给指令和提示，看模型还能保留多少相关，并与从人类评分算出的提示单独基线比较。第二个探针是同提示替换，保持提示和问题不变，只把音频换成另一模型为同一提示生成的片段，再看评分跟随实际播放的还是原来那个被替换的。第 3 个探针是调序，把同一提示的两个片段拼在一起，先后顺序交换各判 1 次，看 verdict 是否跟随片段还是跟随槽位。

第 4 个探针是改写指令，用 3 种同义措辞在相同片段上重测，看相关波动有多大。附带还有回答格式和两轮对话等协议变体。论文强调每个探针都有对照：提示单独基线、同提示回归中的被替换片段系数、按专家差距分箱的同槽位率、改写区间与更换模型的离散度比较，这样单个相关数字才能被定位。

### 无音频和同提示替换分别控制了什么

无音频探针的做法是保留原来带音频时的指令，只是删掉音频输入，另一个变体是放 30 秒数字静音。它的作用是测模型只看文字能得多少分。对照是提示单独基线，做法是用其他模型在同一提示下的片段的人类评分来估计提示效应能达到的等级相关。在 MusicEval 的全部 2748 个片段上，质量的基线是 0.08，对齐的基线是 0.19，只在能算出基线的 2501 个片段上做配对检验。模型内增益是同一模型内有音频减无音频的相关差，用来说明在固定提示集合后音频到底增加了多少。

**无音频对照 × 提示单独基线：** 无音频对照是把音频拿掉只给文字让模型打分，提示单独基线是用人类评分算出仅凭提示文字能达到的相关性；两者搭配的意义是，如果模型无音频时的相关性没有超过人类提示效应，就不能说它从文字里学到了超出提示难度的捷径。

同提示替换的做法是找同一提示下另一模型时长相差 2 秒以内的片段来播放，指令和提示都不变，一共 2327 次替换。分析时把模型的标准化分数同时对播放片段的专家分和被替换片段的专家分做回归，得到两个标准化系数。会听的模型应是播放片段系数大、被替换片段系数接近零或为负。论文还报告了播错提示时的平均降分，以及把质量分数同时对专家质量分和专家对齐分做模型内分解，以处理两种专家分高度相关带来的混淆。

**同提示替换 × 播放片段与被替换片段：** 同提示替换是保持提示不变，把应评价的片段换成另一模型为同一提示生成的片段；播放片段是模型实际听到的，被替换片段是原来应评价的，比较评分回归系数跟随哪一个，就能判断评分是否真的跟随耳朵听到的声音。

### 调序和改写指令如何暴露协议的影响

调序探针用同一提示的 600 对片段，每段截 12 秒，中间加短提示音拼成先 A 后 B，让模型回答 A 或 B 哪个质量更好，然后交换顺序再问 1 次。同槽位率指两次选同一槽位的比例，此时偏好的片段随顺序改变；第二槽位率指偏好落在第二个的比例；顺序平均后与专家的一致率指把两次 verdict 平均后再与专家比较。为了排除拼接本身的影响，对其中 3 个模型还用分开输入两个音频的方式重测，并在相同 12 秒上单独逐个打分作为对照。

按专家质量差距分箱可以检验偏好是否随难度变化。改写指令探针是在 300 个片段上用 3 种措辞分别测质量和对齐的相关，全部 2748 个片段上对其中 2 个模型补全 3 种措辞。回答格式把 1 到 5 分换成一到 7 分、一到九分和是否问题，是否问题读是否中是的词概率。两轮对话先让模型写出匹配概率再打分，看第二轮打分更跟随自己的文字概率还是单轮打分。

### 本研究没有训练什么，实际计算是怎样做的

本研究没有训练任何新的评分模型，也没有微调评判模型，所有模型都是直接调用已有的公开权重做推理。需要说清的是打分读数：模型被要求输出 1 到 5 的数字，分数取下一个词概率中 5 个数字的期望值，而不是只取概率最大的那个贪心数字。在 413 个测试片段上，这种期望读数与已发表的相关相差在 0.05 以内，而贪心数字对 Qwen2-Audio 只有 0.005。重复运行分数相同，换一种显卡和软件构建的相关在 0.99 以上。

最大的 Qwen3-Omni 用社区 FP8 量化跑在两块显卡上，其余跑在一块卡上，未量化的 Qwen3-Omni 在主要表格上变化不超过 0.02。统计上相关带 95 步自助区间，全部片段上按片段重采样，模型层面先重采样模型再在模型内重采样片段，模型内值是 25 个共享提示模型上逐模型相关的均值，差异用配对自助加 Holm 校正。原文没有报告梯度路径和参数更新，因为本来就没有训练环节。

### 数据、评判模型和评分条件是什么

MusicEval 有 2748 个片段，来自 31 个文本生成音乐模型，由 14 位音乐专家按 5 分制评整体音乐印象和与提示的相符程度。其中 25 个模型共享同一套 100 个提示，6 个模型用各自展示页的提示，全部去重后有 260 种提示文本。超过 30 秒的 48 个片段只取前 30 秒。单个专家与他人均值的一致性是全部片段上 0.605，模型内只有 0.252，这是评判模型相关的参照。

SongEval 是第二套评分集，有 2399 首生成的歌曲，按 5 个美学维度评分，没有提供提示和模型标识，因此只能做调序和改写区间，取每首从 30 秒起的 30 秒，分数取维度和评分者均值。5 个评判模型是 Qwen2-Audio-7B-Instruct、Qwen2.5-Omni-7B、Audio Flamingo 3、Music Flamingo 和 Qwen3-Omni-30B-A3B，版本和精度见下表。质量和对齐用不同问句，成对时问 A 或 B 哪个更好。

下表说明要比较的模型版本是否一致，这是复现时核对权重和运行环境的基础，表中参数和精度差异也提示推理代价不同，但论文没有系统报告延迟和成本。

| Judge | Hugging Face identifier | Revision | Params | Precision | Software |
| --- | --- | --- | --- | --- | --- |
| Qwen2-Audio | Qwen/Qwen2-Audio-7B-Instruct | 0a095220c3 | 8.4B | bf16 | transf. 5.17.0 |
| Qwen2.5-Omni | Qwen/Qwen2.5-Omni-7B | ae9e169054 | 10.7B | bf16 | transf. 5.17.0 |
| Audio Flamingo 3 | nvidia/audio-flamingo-3-hf | 7d4bae64ee | 8.3B | bf16 | transf. 5.17.0 |
| Music Flamingo | nvidia/music-flamingo-2601-hf | 6b5be086d5 | 8.3B | bf16 | transf. 5.17.0 |
| Qwen3-Omni | sammysun0711/Qwen3-Omni-30B- A3B-Instruct-FP8-Dynamic | 622f7242c4 | 35.3B (MoE) | FP8 (dynamic) | vLLM 0.30 |

表中 Qwen3-Omni 是混合专家结构，参数量明显大于其余 4 个七到八 B 量级的模型，且以 FP8 动态量化运行。复现时若用未量化版本，主要结论变化很小，但 SongEval 同槽位率会升高，这是理解量化影响的边界条件。

### 去掉音频后还剩多少与专家的相关

先看最直接的对照。全部片段上带音频时质量相关在 0.11 到 0.31 之间，去掉音频后降到 0.01 到 0.05，放静音时是 0.00 到 0.04，而仅凭提示从人类评分算出的基线是 0.08。配对检验显示质量上没有模型显著低于基线，对齐上每个模型都在 0.02 到 0.07 之间，显著低于 0.19 的基线。也就是说，不听音频时没有任何模型超出提示本身在人类评分中允许的程度，评对齐时反而低于它。模型内看，每种主要措辞下音频都带来可测增益，质量增益 0.05 到 0.23，对齐增益 0.08 到 0.31。

但在另外两种措辞的 300 片段子集上，每个模型至少有一种措辞的质量音频增益区间包含零。模型层面，25 个共享提示模型会被任何只看提示的模型打成平手，31 个模型上的相关至多 0.28。

下表列出参与比较的 5 位评委的版本、参数量、精度和运行软件，说明本次无音频对照是在哪些具体对象上做的，数值越大表示与专家越一致，模型层面区间很宽，解读时不能只看点估计。

| Judge | Hugging Face identifier | Revision | Params | Precision | Software |
| --- | --- | --- | --- | --- | --- |
| Qwen2-Audio | Qwen/Qwen2-Audio-7B-Instruct | 0a095220c3 | 8.4B | bf16 | transf. 5.17.0 |
| Qwen2.5-Omni | Qwen/Qwen2.5-Omni-7B | ae9e169054 | 10.7B | bf16 | transf. 5.17.0 |
| Audio Flamingo 3 | nvidia/audio-flamingo-3-hf | 7d4bae64ee | 8.3B | bf16 | transf. 5.17.0 |
| Music Flamingo | nvidia/music-flamingo-2601-hf | 6b5be086d5 | 8.3B | bf16 | transf. 5.17.0 |
| Qwen3-Omni | sammysun0711/Qwen3-Omni-30B- A3B-Instruct-FP8-Dynamic | 622f7242c4 | 35.3B (MoE) | FP8 (dynamic) | vLLM 0.30 |

从版本信息看，4 位小评委参数量在 8.3B 到 10.7B 之间，最大的评委为 35.3B 混合专家结构并以动态量化运行，这有助于理解无音频相关普遍偏低的背景。无音频相关低不等于模型完全不用文字，模型内增益说明主要措辞下音频确实用了，但增益依赖措辞，且提示基线的估计只在有共享提示的片段上定义。把全部片段的相关当成听觉能力会夸大结论，必须同时看模型内增益。

**成对评判 × 逐个打分：** 成对评判是把两个片段拼在一起问哪一个更好，逐个打分是分别给每个片段打一到五分再比较大小；前者多了一层位置和拼接处理，后者只依赖各自的分数，两者对照可以看出成对时的位置偏好是不是来自音乐本身。

### 评分跟随实际听到的片段还是跟随提示

同提示替换的结果分目标而不同。评对齐时 5 个模型都跟随实际播放的片段，被替换片段的系数没有正效应，配对自助差值经校正后全部显著。评质量时只有 Audio Flamingo 3 和 Qwen3-Omni 的播放减被替换差值显著大于零，分别为 0.10 和 0.17，Qwen2.5-Omni 的差值是负 0.06 且区间包含零，说明它的质量分没有跟随听到的片段。播错提示时 4 个小模型的对齐分平均下降最多 0.46 分，质量分最多下降 0.11 分，而 Qwen3-Omni 分别下降 1.57 和 1.05 分，量级明显更大。

模型内同时用两种专家分预测质量分时，Qwen2.5-Omni 的质量分正载荷在专家对齐上而在专家质量上为负，Flamingo 2 个模型更偏质量，Qwen2-Audio 两者相当，Qwen3-Omni 的质量分在专家对齐上的载荷 0.37 远大于在专家质量上的 0.07。这提示最强的质量分反而更像在评对齐。

下面左图是同提示替换的可视化，右图是改写区间，读图时注意左图比较实心与空心，右图比较同一颜色内三点的分散。

> **看图路径：** 1. 先看左图实心点与空心点的上下关系，判断评分跟随播放片段还是被替换片段；2. 再看左图质量目标与对齐目标的差异，比较听音频的可靠性；3. 最后看右图同一模型三个措辞点的分散程度，对照模型之间的差距

[![原论文 Figure 1：Two of the four probes for the five judges, with 95% bootstrap intervals.](https://arxiv.org/html/2610.13247v1/fig2_swap_paraphrase.svg)](https://arxiv.org/html/2610.13247v1/fig2_swap_paraphrase.svg)

*论文图 1。原论文 Figure 1:：“Two of the four probes for the five judges, with 95% bootstrap intervals.”。*

左图可见对齐目标下实心普遍高于空心，质量目标下只有部分模型拉开差距；右图可见质量相关随措辞明显移动，而 Qwen3-Omni 的对齐在 3 种措辞下几乎不动。图的区间是自助区间，样本只是 300 片段子集，不能直接推广到全部 2748 片段，完整全量结果要看后面的数字表。

下表给出替换回归和调序的数字，播放与被替换是标准化系数，同槽位率越高越说明跟随位置， chance 基准分别是 0.50、0.25 和 0.50。

|  | Swap, qual. | Swap, qual. | Swap, al. | Order swap | Order swap | Order swap |
| --- | --- | --- | --- | --- | --- | --- |
| Judge | played | repl. | played | same | 2nd | agree |
| Qwen2-Audio | 0.10 | 0.06 | 0.12 | 0.95 | 0.86 | 0.46 |
| Qwen2.5-Omni | 0.02 | 0.08 | 0.12 | 0.69 | 0.42 | 0.55 |
| Audio Flamingo 3 | 0.17 | 0.07 | 0.19 | 0.78 | 0.40 | 0.50 |
| Music Flamingo | 0.15 | 0.11 | 0.23 | 0.99 | 0.99 | 0.66 |
| Qwen3-Omni (FP8) | 0.24 | 0.07 | 0.31 | 0.25 | 0.21 | 0.67 |

表中最突出的是 Music Flamingo 同槽位率 0.99 且几乎总选第二个，Qwen3-Omni 只有 0.25 且顺序平均后与专家一致率 0.67 最好。调序按专家差距分箱后，4 个小模型几乎不变，最多差 0.05，而 Qwen3-Omni 从小差距的 0.30 降到大差距的 0.19，呈现语音评判中报道过的随差距缩小偏好增强的模式。逐个打分时 Audio Flamingo 3 和 Qwen2-Audio 反而比自己的成对 verdict 更接近专家，这是否定成对优于逐个的反例。

### 换一种问法结果变化有多大

改写指令主要影响质量。对 300 片段，Music Flamingo 的质量相关从负 0.01 到 0.21，Audio Flamingo 3 从 0.01 到 0.17，Qwen3-Omni 从 0.12 到 0.24；全量上 Music Flamingo 从 0.00 到 0.25，配对差 0.24，Qwen3-Omni 从 0.13 到 0.31。对 5 个模型中的 4 个，这种改写区间与 5 个模型之间的离散度没有显著区别，只有 Qwen2.5-Omni 的区间更小。对齐的区间更窄，Qwen3-Omni 全量上是 0.34 到 0.35，基本不动。

回答格式上，1 到 5、一到七、一到九三种 graded 量表之间的分数相关在 4 个模型上 0.95 以上，而是否问题的词概率与它们的分数相关只有 0.58 到 0.96，且在是否问题下 3 个模型之间的专家相关差异区间包含零。两轮对话中 3 个小模型第二轮打分更跟随自己上一轮写的概率而非单轮打分，但与专家的一致性没有提升，且文字概率取值很少，前三高频覆盖 54% 到 98%。

下表比较 3 种措辞在相同 300 片段上的相关，指标方向同样是越大越接近专家，解读时要同时看区间是否重叠。

| Judge | Target | Wording 1 | Wording 2 | Wording 3 |
| --- | --- | --- | --- | --- |
| Qwen2-Audio | quality | 0.09 [-0.02, 0.20] | -0.01 [-0.12, 0.11] | -0.04 [-0.16, 0.08] |
| Qwen2.5-Omni | quality | 0.04 [-0.08, 0.16] | 0.06 [-0.07, 0.18] | 0.03 [-0.08, 0.15] |
| Audio Flamingo 3 | quality | 0.17 [0.06, 0.28] | 0.01 [-0.11, 0.12] | 0.15 [0.05, 0.26] |
| Music Flamingo | quality | 0.15 [0.04, 0.26] | 0.21 [0.10, 0.32] | -0.01 [-0.11, 0.10] |
| Qwen3-Omni (FP8) | quality | 0.24 [0.12, 0.35] | 0.17 [0.05, 0.29] | 0.12 [0.00, 0.24] |

表后要指出未胜出项：Qwen2.5-Omni 的质量区间很小，但它的绝对相关本身也低；是否问题下 Audio Flamingo 3 的质量相关反而升到 0.32，但这不代表是否问题更好，因为它与 graded 分数的自身一致性只有 0.67 到 0.72。措辞敏感意味着只用一种措辞报告模型排序是不稳的。

**指令改写区间 × 回答格式：** 指令改写区间是用三种同义但措辞不同的指令测相关性变化范围，回答格式是把一到五分换成一到七分、一到九分或是否问题；前者检验措辞敏感性，后者检验读数方式敏感性，组合起来说明协议本身能带来多大波动。

### 这些结论在什么条件下才成立

论文自己列出的边界很具体。只测了能装进单工作站的公开模型，闭源模型可能不同。最大模型用的是社区 FP8 量化，虽然未量化版本主要格变化不超过 0.02，但同槽位率等格仍有移动。主要结果来自 MusicEval，片段至多 30 秒，提示可能进过评判模型的训练数据。SongEval 只支持两个探针，且只用每首歌 30 秒摘录。

专家质量与对齐高度相关，限制了回归分解的解释力。每个片段每种条件只判 1 次。调序用的是 12 秒裁剪且只问整体质量，分开输入只覆盖 3 个模型。主要表格用一种措辞，改写区间对 3 个模型、回答格式和对话探针只基于 300 片段。模型层面相关只基于 31 个模型，区间很宽。

理解这些才能明白为什么论文说评判模型排序不能在评分集之间迁移：在 SongEval 上 Qwen2.5-Omni 从 MusicEval 质量最弱变成 4 个小模型中最强，Audio Flamingo 3 随措辞从 0.32 变到 0.50，而 Qwen3-Omni 在两套集上都是最高，但绝对值从 MusicEval 的 0.3 左右升到 SongEval 的 0.55 到 0.67，这与专家分数离散度和有无提示都有关。

### 要复现第一步该做什么，需要哪些信息

复现第一步不是重新训练，而是按附录版本固定权重、精度和软件，再实现期望读数。具体是让模型对 1 到 5 每个数字的下一个词概率归一化后求期望，成对时对 A 和 B 同样处理。音频处理要与原文一致：MusicEval 超过 30 秒取前 30 秒，SongEval 取从 30 秒起的 30 秒，不足 60 秒则取前 30 秒，单声道 16 kHz，调序用 12 秒裁剪加 0.6 秒提示音。指令要逐字使用附录 3 种措辞和是否问题，不能自己改写。

统计复现需要 1000 次按片段自助算区间，配对差异用 10000 次同片段或同对自助加 Holm 校正。模型内相关要在 25 个共享提示模型上逐模型算再平均。论文没有提供可运行代码包的确认信息，因此代码可用、权重可下载和系统可运行要分开核对，不能把论文提到链接当成作者已开源。关键超参数主要是解码用贪心、读数用期望、Qwen3-Omni 用 FP8 动态量化，这些都要保留，否则分数分布会变。

### 什么时候值得尝试这类评判，还缺什么验证

如果只是要一个与专家大致同向的排序，且任务是提示对齐，这类评判模型在固定措辞和逐个打分下值得一试，因为 5 个模型都跟随实际播放的音频。但如果是音乐质量，尤其是要用成对 verdict 来排名模型，4 个小模型的 verdict 主要跟随槽位，此时更应看它们各自的逐个分数，只有 Qwen3-Omni 的成对 verdict 略优于逐个。任何时候都不应只报告一个相关就说模型会听音乐，论文建议的质量指标卡包括模型内音频增益、替换的播放与被替换系数、同槽位率、措辞区间和成对与逐个的一致差。

还缺的验证包括更长乐曲、闭源模型、多次采样的稳定性、提示泄露的排查，以及把探针从相关推广到实际选模型时会不会选错。容易产生的误解是把无音频相关低当成没有文字捷径，实际上那只说明没超过人类提示效应；把 Qwen3-Omni 质量分高当成听觉好，实际上它的质量分更载荷在专家对齐上；把 SongEval 相关更高当成模型更强，实际上那套专家分更分散且没有提示，条件并不相同。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.13247v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
