---
title: "TVPara: Paralinguistic Captioning of Expressive TV-Series Speech in Complex Acoustic Environments"
date: 2026-10-16
draft: false
tags: [音频字幕生成, 数据集构建, 数据集, 语音, SFT]
categories: [论文速递]
description: "TVPara 针对电视剧中强烈情感与场景背景声共存时大音频语言模型描述不准的问题，用预标注加人工校对构建单句与多句两类描述数据，并在两款开源模型上微调后以四维相似度打分验证了复杂声学下的提升与跨域迁移，同时暴露了适配器容量不足时的拟合偏差代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.19678"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "电视剧语音的副语言描述：TVPara 如何同时处理强烈情感与复杂背景声"
paper_digest_original_title: "TVPara: Paralinguistic Captioning of Expressive TV-Series Speech in Complex Acoustic Environments"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.19678v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.19678v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.19678v1.pdf"
paper_digest_primary_task: "音频字幕生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"method","id":"method.sft","label":"SFT"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "TVPara 针对电视剧中强烈情感与场景背景声共存时大音频语言模型描述不准的问题，用预标注加人工校对构建单句与多句两类描述数据，并在两款开源模型上微调后以四维相似度打分验证了复杂声学下的提升与跨域迁移，同时暴露了适配器容量不足时的拟合偏差代价。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ziyang Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wenyi Yu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wen Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xuenan Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chao Zhang"}]
paper_digest_abstract_sha256: "a3ee8a6003cacf100078b4443df4882faf9a7f8d05a532a9bd3684ddd3ada5e6"
paper_digest_sidecars: {"citation.bib":{"sha256":"e199bdae071daa4f49e2925dd7e53d8cfc00101fdf76da284d56565b3c55071a","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19678/citation.bib"},"citation.json":{"sha256":"38766e9fae7765d529cd12a25d46029fdb83c304cbd279e913e132083f0357b8","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19678/citation.json"},"citation.ris":{"sha256":"5cf19d32db70d7b90dd87015c31db5ab806af2f61674f3f6a230d70010c631eb","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19678/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"0e1fd5330650c6d5a21d537ef5310971c3818582bcb8fd8d2a2858f7b7fb6404","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19678/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "fb5273185837d16d53809edc137c9992cb6f95c3e0eebd0f731e22073cb46932"
paper_digest_api_reader_plan_sha256: "b862149704085486019c519438a77a4f8488ebd717b210f190ba48d920ab1d3a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a5d6320a415739db4e9d1acbfa6f7bbdef44e58524ca5f2e73b58c7b8e32e23e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "568916b700dd2466804195e14793f69aa3e30f7e382dabbeaf17f1cac485233d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "12917c7e241922decb416ab67900937dbd920010bfce147d9c6cbe8995645b42"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f3d309ac7e3f1cd292bd16b2137acf6e496f808a146a771af49616f3c35253e8"
paper_digest_api_reader_resource_count: 7
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 电视剧语音的副语言描述：TVPara 如何同时处理强烈情感与复杂背景声

> 英文题目：*[TVPara: Paralinguistic Captioning of Expressive TV-Series Speech in Complex Acoustic Environments](https://arxiv.org/abs/2610.19678v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-paper-digest-blog/papers/?concept=task.audio-captioning)
- **研究方法**：[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)；[SFT](/audio-paper-digest-blog/papers/?concept=method.sft)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Ziyang Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Wenyi Yu：机构信息未能在本次解析中与作者逐人可靠绑定
- Wen Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Xuenan Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Chao Zhang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

电视剧语音常把强烈的情绪表达与剧情相关的背景声叠加在一起，大型音频语言模型在此类音频上生成的副语言说明会变得粗糙不准确。TVPara针对单句说明与多句按时间顺序说明两项任务，要求模型输出情绪、语速、音高和音量等属性及其跨句变化的自然语言说明，难点在于背景声干扰感知以及相邻话语间情绪快速切换。构建时先用语音活动检测切分单句片段，再由预标注模型生成初稿并经大语言模型润色措辞，专业标注员对照声音删改幻觉与遗漏，多句数据则按时间顺序把相邻多句的人工校对说明合并为一段并保留声学连续性。与依赖干净录音或仅提供类别标签的已有语料相比，该工作同时保留了复杂声学环境与细粒度自由文本标注，并覆盖了跨句变化描述。在TVPara预留测试集上，以大语言模型评判的情绪等四属性相似度评分零到四分为指标，两款开源大型音频语言模型经监督微调后相对零样本基线的按格平均相对提升为31.26%。该提升向未见剧集和更干净的跨域访谈语音迁移仍成立，且在有背景声片段上按格平均相对提升为32.4%而无背景声为19.9%，但Qwen2.5-Omni在音量上预测与实测能量相关系数微调前后均约0.03、仅拟合标签分布，语速在部分迁移设置中也未提升，说明结论目前仅在英语电视剧语音及相近评测条件下得到验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://windowso.github.io/TVPara/> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/bytedance/SALMONN> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/tsinghua-ee/SALMONN> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen2.5-Omni-7B> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/modelscope/ms-swift> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么电视剧语音更难描述

刚接触语音的研究生可以先把任务想成听人说话并写旁白。输入是一段含人声的音频，有时还混着街道声、音乐、房间混响或特效声，目标是用自然语句写出这个人是怎么说的，包括情绪是怎样的、说话快还是慢、声音高还是低、大声还是小声。必须保留的信息是这 4 个维度的可听依据，输出是一段几 10 个词的描述，而不是转写说了什么字。

论文的起点是，大音频语言模型在干净录音室语音上能写出像样的描述，可一旦遇到电视剧里那种情绪强烈又带背景声的语音，描述就变得笼统甚至写错。原因是训练数据大多来自录音室、干净语音库的重标注或语音合成，本身就缺少强烈情绪与背景声同时出现的例子，而野外采集的播客或电视剧数据又多是类别标签而非自由文本，模型没见过足够多带复杂声学的细粒度例子。

### 已有数据路线缺了哪一块

按输入、目标和监督来比，已有路线可以分成 3 类。第一类是录音室录制或干净语音库改标的数据，输入干净、目标多为单句属性，监督是类别或维度标签，优点是标注准、易评价，缺点是情绪平、几乎没有背景声。第二类是语音合成的数据，输入可控、目标明确，但声学过于干净且表现力有限。第 3 类是播客或电视剧采集的数据，输入更真实、带有背景声，但已有工作多只给类别或维度标签，没有自由文本描述，而且基本是逐句独立标注，不处理相邻话语之间的变化。

TVPara 要补的正是缺失的那块：在保持真实电视剧声学连续性的前提下，提供细粒度的自由文本描述，并专门覆盖多句话之间的属性变化。理解这点很重要，后面单句与多句 2 个任务的分工就是从这里来的。

### 论文要解决的具体问题是什么

论文解决的具体问题是，如何让模型在强烈情感与复杂声学环境共存时，仍能准确描述副语言属性，并能描述属性随时间的变化。输入是电视剧原声音频切出的短片段，单句片段平均约几秒，多句片段覆盖相邻的几句话并保留原场景的声学连续性。输出是自由文本描述，单句版本写清当前话语的情绪、语速、音高和音量，多句版本按时间顺序写清每个话语的属性并强调转变，例如从反讽转为兴奋。

评价时不直接比整段文字像不像，而是把描述拆成 4 个原子属性再逐项打分，分数越高表示与人工校对标签越接近。这个设计把听觉感知与文字风格分开，听得准才能在情绪等维度上得分。

**副语言信息 × 自由文本描述：** 副语言信息指说话内容之外的怎么说，包括情绪、语速、音高、音量；自由文本描述指不用固定类别而用自然语句把这些属性写出来，二者搭配的意义是保留程度与变化等细节，但也因此需要逐属性抽取再打分才能评价。

### 两个任务的输入输出长什么样

在看数据构造之前，先建立对 2 个任务的直观印象。单句任务的输入是一个话语的音频加文字内容，输出是一段描述，例如说话人保持中等音量和语速，句尾音调上扬，带有一层反讽。多句任务的输入是同一集中相邻几个话语的连续音频，可能换人，输出是按话语顺序组织的一段长描述，第一句是什么状态，第二句转到高音快速，第三句兴奋达到顶峰。下图用颜色区分了音量语速、音高和情绪在文本中的位置，可以帮助初学者理解描述不是整体印象，而是多个可核对的属性拼成的。

读图说明：下面这张任务总览图上半为单句、下半为多句，建议按输入音频到输出描述的主箭头阅读，并注意多句部分如何用 3 段子描述对应 3 个话语。

> **看图路径：** 1. 先看上半单句分支：从音频输入到一段描述，颜色对应音量语速、音高、情绪；2. 再看下半多句分支：三个相邻话语如何按顺序对应三段子描述；3. 注意多句描述中从反讽到兴奋等变化词出现的位置；4. 对比单句只写状态、多句强调转变的措辞差异

[![原论文 Figure 1：Overview of the two TVPara tasks. (a) Single-Utterance Paralinguistic Captioning describes the…](https://arxiv.org/html/2610.19678v1/task_fig.png)](https://arxiv.org/html/2610.19678v1/task_fig.png)

*论文图 1。原论文 Figure 1:：“Overview of the two TVPara tasks. (a) Single-Utterance Paralinguistic Captioning describes the paralinguistic attributes of a single utterance, including emotion, pace, pitch,…”。*

图中可见，单句示例把中等音量语速、上扬语调和反讽分别标出，多句示例则把第一句的中等音量语速与上扬语调、第二句的高音快速加中等音量、第三句的愉快高音快速高音量串起来，变化词如转为和最终出现在句子开头。这种写法提示模型不仅要听准每一句，还要写清转折，这是只看单句的模型学不到的。

### 数据从哪里来：十九部电视剧与切分方式

TVPara 取自十九部英文电视剧，覆盖情景喜剧、剧情、侦探、动画和纪录片等类型，例如朋友们、亿万、波罗、辛普森一家和穿越虫洞等，论文称详细名单见其项目页面。音频从这些剧集官方视频渠道截取，论文说明只发布副语言标注连同来源视频链接和切段时间戳，而不分发音频。单句数据先用语音活动检测把约 1 小时的整集音频切成几秒的短片段，多句数据则直接从源录音切出更长的片段，每个覆盖 3 到 5 个相邻话语且来自同一集，从而保留原始场景的声学连续性。

切分后用时间戳找到落在多句片段内的单句片段及其人工校对描述，再由语言模型按时间顺序合并。这种做法的好处是多句音频本身是连续录音而非拼接，背景声和混响不会断裂。

**单句描述 × 多句描述：** 单句描述针对几秒钟的一个话语，写清当时的情绪、语速、音高和音量；多句描述针对同一集中相邻的 3 到 5 个话语，按时间顺序写清每个话语的属性并强调如何变化，二者分工是单句保精度、多句保连续变化，组合后才能覆盖电视剧对话中常见的情绪转折。

读图说明：下面的标注流程图左侧为单句的人机协同链，右侧为多句的合并链，建议重点看预标注模型回训的回路和多句合并的两路输入。

> **看图路径：** 1. 沿左侧音频加提示词到大音频语言模型再到人工校对的主链看一遍；2. 注意下方回训箭头：已校对数据如何把预标注模型从 Mp 变为 Mf；3. 看右侧多句分支：长录音切段与单句描述合并为多句描述的两路来源；4. 对照示例中被删掉的兴奋一词理解去幻觉的含义

[![原论文 Figure 3：Annotation pipeline of TVPara.](https://arxiv.org/html/2610.19678v1/data_annotation.png)](https://arxiv.org/html/2610.19678v1/data_annotation.png)

*论文图 3。原论文 Figure 3:：“Annotation pipeline of TVPara. (a) Single-Utterance Annotation: each clip is pre-annotated by an LALM from the audio and a prompt, the caption is polished by an LLM, and it is…”。*

图中左侧可见音频与标注提示词进入大音频语言模型得到初版描述，再经润色后交人工校对，下方有一条把已收集的人工校对数据拿回微调预标注模型的回路，模型记为从 Mp 到 Mf。右侧可见长录音按话语切分后，每句话的单句描述再被合并为一个多句描述。示例中初版写了反讽和兴奋，人工校对后删掉了音频不支持的兴奋，只保留反讽，这正是去幻觉的含义。

### 标注流水线：模型先写人再改

单句标注采用人机协同。论文用 SALMONN-13B 做预标注，先为每个短片段生成初版描述，再用 GPT-4o-mini 润色措辞，然后交给商业音频标注公司的专业标注员对照音频修改：删掉音频不支持的情绪等幻觉内容，补上漏写的属性，改掉与音频不符的描述。开始约 1 小时的子集由 2 名标注员独立修改，在是否需要修改上的判断一致率为 87%，其余片段每段由 1 名标注员校对。在积累约 50 小时校对数据后，团队用这些数据微调预标注模型，再用新模型标注剩余音频。

效果直接体现在修改率上，初期标注员要改约 38% 的预标注，预标注模型被微调后修改率降到约 17%。这说明回训确实让初版更接近人耳判断，但仍有近两成需要人工动手，不能理解为已可无人值守。多句描述由语言模型把单句人工校对描述按顺序合并，重点写清跨话语的变化，抽查 5 小时样本时标注员只改了约 4%，因此其余多句描述未再逐条人工校对，这是后续使用时要注意的证据强度差异。

**大音频语言模型预标注 × 人工校对：** 大音频语言模型预标注指由模型先听音频生成初版描述，速度快但会幻觉出音频不支持的情绪或漏写属性；人工校对指专业标注员对照音频删改增补，准确但耗时，二者搭配是先用模型铺量再用人保真，并用已校对数据回训预标注模型以降低后续修改率。

### 拿数据训练模型时动了哪些参数

论文没有从零训练新模型，而是对两个开源大音频语言模型做监督微调，分别是 SALMONN 和 Qwen2.5-Omni-7B。训练时音频编码器冻结，只微调跨模态适配器，语言模型部分用低秩适配微调，秩为 8，缩放系数为 32。单句和多句训练数据打乱混在一起训练，得到一个同时服务 2 个任务的检查点。训练跑 10 个轮次，批量为 24，采用余弦学习率计划，峰值学习率为 3 乘以 10 的负 6 次方，预热占 5%，硬件为英伟达 H200。SALMONN 用其官方代码库训练，Qwen2.5-Omni 用 ms-swift 训练。

理解冻结与更新的位置很关键：编码器不动意味着底层声学特征提取不变，适配器负责把声学表示转成语言模型可用的音频 token，低秩适配负责学会描述的措辞与结构。论文后面发现 Qwen2.5-Omni 在音量上像是在拟合标签分布而非真听见了音量，并将其归因于其适配器可训练参数量仅约 SALMONN 的六百九十分之一，音频 token 在微调中变化很小，缺少所需信息时后端只能拟合目标分布。

**音频编码器 × 跨模态适配器 × 低秩适配：** 音频编码器把波形变成声学表示，跨模态适配器把声学表示转成语言模型能读的音频 token，低秩适配只在语言模型侧加小参数微调，三者分工是编码器保声学细节、适配器做模态对齐、低秩适配学描述风格，适配器容量太小时音频 token 缺失关键信息，后端只能去拟合标签分布。

### 怎么切分测试集与怎么打分

数据划分有两种测试集。未见剧集测试集是完整留出一部剧，该剧说话人不出现在训练中，取其中约 1 小时的一集做测试。留出测试集则是对其余每部剧的每一集随机选一段连续部分做测试，其余部分做训练，单句和多句测试片段都从该测试部分切出，保证训练与测试音频不重叠，留出测试集约 5 小时，训练约 487 小时。此外还有一个 VoxCeleb 测试集，共 134 个单句片段，用同样流水线标注，用于考察向更干净的访谈语音迁移的效果，其背景较轻且多为中性平静情绪。

打分采用大模型裁判做法，推理时模型听音频加提示词生成描述，评价时另起一个语言模型分别从生成描述和人工校对标签中抽取情绪、语速、音高、音量，再逐项比较并按 0 到 4 的离散分打分，越高表示越接近标签。裁判不听音频，听觉依据完全来自人工校对标签，因此标签质量决定了分数上限。

读图说明：下面的推理与评价流程图左侧为带冻结与微调标记的推理链，右侧为抽取加打分链，建议先看音频与提示词如何汇入大模型，再看标签与生成文本如何被拆成原子属性。

> **看图路径：** 1. 先看左侧推理链：音频经编码器和适配器与提示词一起进入大语言模型；2. 再看中间两路文本：标签描述与生成描述分别被抽取为原子属性；3. 看右上 0 到 4 分的规则文字，明确分数越大表示含义越接近；4. 看右下示例中情绪得 3 分而其余得 4 分的原因

[![原论文 Figure 4：Illustration of the inference and LLM-as-a-Judge evaluation pipeline.](https://arxiv.org/html/2610.19678v1/infer_eval.png)](https://arxiv.org/html/2610.19678v1/infer_eval.png)

*论文图 4。原论文 Figure 4:：“Illustration of the inference and LLM-as-a-Judge evaluation pipeline.”。*

图中左侧音频编码器标为冻结、适配器与大语言模型标为微调，提示词要求分析情绪、重音、语调、语速等特征。右侧标签描述与生成描述分别被抽取出情绪、音高、语速和音量，再按 0 为完全不同到 4 为含义相同等规则打分，示例中情绪因多写了兴奋而得 3 分，其余三项得 4 分。这说明即使整体流畅，只要多出音频不支持的属性就会在对应维度扣分。

**原子属性抽取 × 大模型打分：** 原子属性抽取指从生成描述和标准描述中分别取出情绪、语速、音高、音量四项；大模型打分指逐项比较相似度并给出 0 到 4 分，二者搭配是把长文本比较拆成对齐后的小项比较，避免整体印象掩盖某一维度的错误，但打分模型本身只看文本不听音频。

### 数据集本身有多情绪多背景声

在看模型分数之前，先确认数据确实具备论文想要的两种多样性。下表是两类任务的规模，单句与多句在片段数、时长、平均时长和描述长度上差异明显，多句片段更长、描述更长，符合需要写变化的要求。该表回答数据量是否足以支撑微调与多句建模，比较对象是单句与多句两列，无需公平条件，数字越大表示规模越大。

| Statistic | Single | Multi |
| --- | --- | --- |
| Total audio clips | 256,212 | 45,402 |
| Total duration (h) | 492 | 213 |
| Avg. clip duration (s) | 6.91 | 16.89 |
| Avg. caption length (words) | 32.8 | 58.1 |

上表显示单句共 256212 个片段约 492 小时，平均每段 6.91 秒，描述平均 32.8 词，多句共 45402 个片段约 213 小时，平均每段 16.89 秒，描述平均 58.1 词。规模上的代价是标注成本，多句虽总量小时数可观，但其描述多由模型合并且仅抽查校对，证据强度弱于逐条人工校对的单句。下表进一步回答情绪与背景声是否确实比干净语音更丰富，比较的是 TVPara 与 VoxCeleb，指标方向是带非中性情绪、带背景声和相邻话语情绪变化的比例越高表示越 expressive 越复杂。

| Statistic | TVPara | VoxCeleb |
| --- | --- | --- |
| Clips with non-neutral emotion | 67.2% | 2.9% |
| Clips with background sound | 36.2% | 8.0% |
| Adjacent utterances with emotion change | 55.5% | – |

上表显示 TVPara 有 67.2% 片段带非中性情绪，而 VoxCeleb 仅 2.9%，TVPara 有 36.2% 片段带背景声，约为 VoxCeleb 的 8.0% 的 4.5 倍，多句话中 55.5% 的相邻话语情绪类别不同。结合词云图来看，TVPara 一侧大词为兴奋、热情、紧急、平静、讽刺等并伴随沮丧、讽刺和愤怒等小词，VoxCeleb 一侧大词为中性并伴随犹豫等小词。限制是背景声由 BEATs 检测得到，检测器本身的误检会影响比例的精确值，且 VoxCeleb 无多句数据故该格为空。

读图说明：下面的情绪词云左为 TVPara 右为 VoxCeleb，建议先找每侧最大的词，再看小词的情绪强度与多样性。

> **看图路径：** 1. 对比左右两团词云中最大单词：左侧热情类词与右侧中性词；2. 注意左侧同时出现讽刺、沮丧、愤怒等强烈情绪词；3. 看右侧以中性为主、其余词小而散的分布形态；4. 把词云印象与非中性比例的统计数字对照起来读

[![原论文 Figure 2：Emotion word clouds of (a) TVPara and (b) VoxCeleb.](https://arxiv.org/html/2610.19678v1/wordcloud.png)](https://arxiv.org/html/2610.19678v1/wordcloud.png)

*论文图 2。原论文 Figure 2:：“Emotion word clouds of (a) TVPara and (b) VoxCeleb.”。*

图中可见左侧大词密集且情绪色彩强，右侧以中性占据主导，其余词小而散。这种直观印象与上表 67.2% 对 2.9% 的非中性比例一致，支持论文关于电视剧语音情绪更多样的判断，但词云只反映标注用词频率，不能直接等同于声学难度。

### 在复杂声学下微调带来多大提升

主结果回答在留出测试集上微调是否改善复杂声学下的副语言理解。比较条件是同一基座模型在零样本与监督微调之间的对比，4 个属性各按 0 到 4 分打分，分数越高越好，论文报告平均每个单元格相对提升为 31.26%，且几乎每项增益在按片段分数的 Wilcoxon 符号秩检验下显著，阈值为小于 0.01。该表比较 Qwen2.5-Omni 与 SALMONN 各自的零样本与微调版本在单句与多句任务上的 4 维分数，条件一致，方向为分数越高越好。

| Model | Training | Single-Utterance Task | Single-Utterance Task | Single-Utterance Task | Single-Utterance Task |  | Multi-Utterance Task | Multi-Utterance Task | Multi-Utterance Task | Multi-Utterance Task |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Training | Emotion | Pace | Pitch | Volume |  | Emotion | Pace | Pitch | Volume |
| Qwen2.5-Omni | Zero-shot | 0.74 | 2.02 | 1.41 | 2.43 |  | 0.99 | 1.29 | 1.26 | 1.12 |
| Qwen2.5-Omni | SFT | 0.99 | 2.40 | 2.45 | 2.33 |  | 1.46 | 1.55 | 1.48 | 1.35 |
| SALMONN | Zero-shot | 1.45 | 2.74 | 2.32 | 2.31 |  | 1.09 | 1.21 | 1.10 | 1.04 |
| SALMONN | SFT | 1.52 | 2.73 | 2.44 | 3.58 |  | 1.60 | 1.60 | 1.70 | 1.81 |

上表显示零样本时 2 模型在多数属性尤其是多句任务上分数偏低，微调后普遍上升。以单句情绪为例，Qwen2.5-Omni 从 0.74 到 0.99，SALMONN 从 1.45 到 1.52，多句情绪从 0.99 到 1.46 和从 1.09 到 1.60，SALMONN 单句音量从 2.31 到 3.58 提升最显眼。代价与反例是提升并不均匀，SALMONN 单句语速从 2.74 到 2.73 基本没动，Qwen2.5-Omni 单句音量从 2.43 到 2.33 还略降。论文进一步用相关性验证部分增益来自听觉而非背标签分布：单句上微调后 SALMONN 预测的低中高音量与实测片段能量之间的 Spearman 相关从 0.03 升到 0.85，多句上 Qwen2.5-Omni 描述的话语数与真实话语数之间的相关从 0.05 升到 0.83。但 Qwen2.5-Omni 的音量预测与实测能量相关前后都在约 0.03，微调只是把输出分布推向训练标签，这与小适配器容量解释一致。

### 换到没见过的剧与更干净的语音还能用吗

这一节回答泛化问题：学到的能力是只记住训练剧集，还是能转到未见剧集与跨域干净语音。比较的仍是各模型零样本与微调版本，测试集换成未见剧集的单句与多句以及 VoxCeleb 的单句，方向仍是分数越高越好。该表比较同一模型在分布外测试上的零样本与微调分数，重点看未见剧集是否保持提升，以及在干净语音上是否退化，分数越高越好。

| Model | Training | Unseen Series (Single) | Unseen Series (Single) | Unseen Series (Single) | Unseen Series (Single) |  | Unseen Series (Multi) | Unseen Series (Multi) | Unseen Series (Multi) | Unseen Series (Multi) |  | VoxCeleb (Single) | VoxCeleb (Single) | VoxCeleb (Single) | VoxCeleb (Single) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Training | Emo. | Pace | Pitch | Vol. |  | Emo. | Pace | Pitch | Vol. |  | Emo. | Pace | Pitch | Vol. |
| Qwen2.5-Omni | Zero-shot | 0.74 | 2.21 | 1.45 | 1.47 |  | 1.07 | 1.36 | 1.26 | 1.11 |  | 0.84 | 2.24 | 1.45 | 1.80 |
| Qwen2.5-Omni | SFT | 0.95 | 1.78 | 2.30 | 2.44 |  | 1.19 | 1.28 | 1.42 | 1.08 |  | 0.96 | 1.86 | 2.43 | 2.22 |
| SALMONN | Zero-shot | 1.35 | 2.64 | 2.08 | 1.65 |  | 1.17 | 1.48 | 1.30 | 1.13 |  | 1.25 | 2.70 | 2.02 | 1.79 |
| SALMONN | SFT | 1.52 | 2.89 | 2.48 | 3.51 |  | 1.64 | 1.55 | 1.76 | 1.83 |  | 1.39 | 2.85 | 2.34 | 3.69 |

上表显示在未见剧集上 SALMONN 4 个属性在单句与多句上全部提升，Qwen2.5-Omni 在单句三项、多句两项上提升。在 VoxCeleb 干净语音上 SALMONN 四项全升，Qwen2.5-Omni 除语速外其余上升，例如 VoxCeleb 单句音量 SALMONN 从 1.79 到 3.69，Qwen2.5-Omni 从 1.80 到 2.22。论文还报告在未见剧集上带背景声片段的平均每格相对提升为 32.4%，高于不带背景声的 19.9%，说明提升在更复杂的片段上更大。限制与未胜出项同样清楚：Qwen2.5-Omni 在未见剧集单句语速从 2.21 降到 1.78，多句音量从 1.11 降到 1.08，在 VoxCeleb 单句语速从 2.24 降到 1.86，说明其语速与部分音量并未泛化。

支持听觉解释的证据是训练集中音量多标为中等而两个分布外测试集多标为高，标签分布已漂移，但 SALMONN 预测音量与实测能量仍分别保持 0.87 和 0.73 的相关，因此至少音量上的增益不只是背住了训练分布。

### 哪些结论成立需要前提

读结论时要把成立条件摆清楚。第一，31.26% 的平均相对提升是多个模型、多个任务与多个属性单元格相对提升的平均，不是某一项的绝对百分点，也不是人工听感的直接百分比，换测试集或换打分模型数值会变。第二，打分依赖 GPT-5-mini 这类语言模型做抽取与比较，它只看文本不听音频，若抽取错了或对情绪近义词宽严不一，分数会受影响，论文未报告打分者与人的一致率。

第三，多句标签多为模型合并且仅抽查约 5 小时中改了约 4%，其余未经逐条人工校对，因此多句分数的标签噪声大于单句。第四，背景声比例来自 BEATs 检测，检测阈值与误检会影响 4.5 倍等表述的精确度。第五，Qwen2.5-Omni 在音量上的反例表明小适配器可能让模型走捷径，平均提升不代表每个属性都真正听见了。这些限制不否定主趋势，但决定了复述时必须带上条件。

### 如果要复现第一步做什么

复现要分开看三件事：代码是否可运行、权重能否下载、数据能否拿到。论文给出的是训练已有开源模型的方法，SALMONN 用其官方代码库，Qwen2.5-Omni 用 ms-swift，文中还列出 SALMONN 与 Qwen2.5-Omni 的权重页面以及 ms-swift 仓库，但这些是第三方资源，只能证明论文提到了这些链接，不能当作作者已开源本研究代码。数据方面论文明确不分发音频，只发布副语言标注连同来源视频链接和切段时间戳，音频需按时间戳自行截取，这会引入版本与清晰度差异。

第一步建议先按论文划分复刻留出测试与未见剧集测试的切分逻辑，并跑通单句加多句混合监督微调的流程，冻结音频编码器、只训练适配器与语言模型低秩适配，超参数从 10 轮、批量 24、峰值学习率 3 乘以 10 的负 6 次方、5% 预热、余弦计划起步。接着实现原子属性抽取加 0 到 4 分打分的评价链，并固定打分模型版本，否则分数不可比。最后补上能量与音量、话语数与描述话语数的相关性检查，用来区分真听见与背分布。

### 什么时候值得尝试还缺哪项验证

当你的场景也是情绪强烈且背景声不可避免，例如影视解说、客服录音或现场访谈，并且需要自然语句而非固定类别时，TVPara 这类数据值得尝试，尤其是需要写清情绪转折的多句描述时。复现第一步是先拿到标注与时间戳并按论文方式切出无重叠的训练与测试音频，再跑通冻结编码器的混合微调与 4 维打分链。

还需要补的验证包括：换一个打分模型或加人工抽查看分数是否稳定，报告按有无背景声分层的分数以确认复杂声学下的收益，以及测量训练与推理成本，因为论文未报告时长、显存占用与延迟，无法从分数推断部署代价。总之，论文支持的判断是在其划分与打分规则下，微调改善了复杂声学下的副语言理解并能部分迁移到未见剧集与干净语音，但具体属性、具体模型与有无背景声都会影响幅度，Qwen2.5-Omni 的音量反例就是提醒。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.19678v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
