---
title: "Nepali-English Code-Mixed Speech Recognition: Data Preparation and Adaptation of a Speech Foundation Model"
date: 2026-11-12
draft: false
tags: [语音识别, SFT, 数据集构建, 代码转换]
categories: [论文速递]
description: "论文针对尼泊尔语中混入英语且书写要求分脚本的问题，用 172.8 小时六领域语料在保留分词器下做数字双语口语化与全参数微调，把测试词错误率从 48.6% 降到 16.3%，代价是域外读写差异仍带来损失且数字标签需再核验。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.13512"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "尼泊尔语英语混读语音识别：数据准备与语音基础模型适配"
paper_digest_original_title: "Nepali-English Code-Mixed Speech Recognition: Data Preparation and Adaptation of a Speech Foundation Model"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.13512v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.13512v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.13512v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"setting","id":"setting.code-switching","label":"代码转换"}]
paper_digest_primary_method: "SFT"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文针对尼泊尔语中混入英语且书写要求分脚本的问题，用 172.8 小时六领域语料在保留分词器下做数字双语口语化与全参数微调，把测试词错误率从 48.6% 降到 16.3%，代价是域外读写差异仍带来损失且数字标签需再核验。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jeevan Neupane"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Janardan Bhetwal"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kshitiz Paudel"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Anup Aryal"},{"affiliations":[", Nepal"],"name":"Bipin Bashyal"}]
paper_digest_abstract_sha256: "d60fbb8d1c145eb69a0dce783d6dd09238441888f5e7ecadb2bbbc1e03dd7e08"
paper_digest_sidecars: {"citation.bib":{"sha256":"f9fafa643a4461e508e66bb504bc939d0ab0293391b184a0ae32c9f610b0eb81","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13512/citation.bib"},"citation.json":{"sha256":"d9d491ce3c6516aefdce813677a9d67a3ac1c519eaae074d304839b70d511967","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13512/citation.json"},"citation.ris":{"sha256":"745338926b529c22e14f78248d378cc66a3c776d2b271749aeb853c306c1321f","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13512/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"57e76b690453fdc7abf93c90720551e1448a166969c01172c685d90834180f03","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13512/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "e41544b8c920ee9bf4d637c208c1c540307c44fb588c0037187f62325ec909ed"
paper_digest_api_reader_plan_sha256: "79eb1c859f63691f1b4a7b2567ef4e851ac01b9339276a252832595a77d0629d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e4721f752634b8cb853d6972274a8dc9aa5d3c98b77b1dfde02145e6176b9d74"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "90c92f4aae717fd3f4c1b02566917c167edc1fd3668075cc187d29ec149cface"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "9ac400bc697b8a43c2a7f103588862e530a9b3ad9c90acc68debcf7070097ccb"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "77f1af2a987e9f82cca52fc1197121f2998f6d5254d97c596872b5c51c473f2f"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 尼泊尔语英语混读语音识别：数据准备与语音基础模型适配

> 英文题目：*[Nepali-English Code-Mixed Speech Recognition: Data Preparation and Adaptation of a Speech Foundation Model](https://arxiv.org/abs/2611.13512v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[SFT](/audio-paper-digest-blog/papers/?concept=method.sft)；[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual) → [代码转换](/audio-paper-digest-blog/papers/?concept=setting.code-switching)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jeevan Neupane：机构信息未能在本次解析中与作者逐人可靠绑定
- Janardan Bhetwal：机构信息未能在本次解析中与作者逐人可靠绑定
- Kshitiz Paudel：机构信息未能在本次解析中与作者逐人可靠绑定
- Anup Aryal：机构信息未能在本次解析中与作者逐人可靠绑定
- Bipin Bashyal：, Nepal

## 📌 核心摘要

尼泊尔语日常会话常混入英语词，书面要求尼泊尔语用天城体、英语词用小写拉丁字母，模型即使听对词也可能写错文字，常规词错误率会把文字错误记为识别错误。输入是16 kHz单通道语音，输出是符合上述书写规范的混写文本，难点在于数字与符号没有唯一读法，且基础模型的5000片段词表无法表示数字与常见符号。处理先把音频与文本清洗并按长度与词表兼容性过滤，再对含数字的句子生成尼泊尔语和英语两种读法，用基线模型的发音近似输出做距离选择。接着保留原词表与两个输出头，对449M参数的SraVaani编码器加Token-and-Duration Transducer与CTC联合损失做全参数微调，编码器用较小学习率。相对官方只训练解码器的做法，该工作更新编码器并保留数字样本，相对Whisper大模型微调则用更小参数达到相近内测精度。在同一9.08小时六领域测试集上以词错误率衡量，6轮全参数微调从未适应的48.6%降到17.1%，12轮进一步降到16.3%，低于冻结编码器的25.5%，与微调后Whisper large-v3-turbo在同一测试集上的16.4%接近。结论适用于保留原词表的同类混写适配，未验证说话人无关划分与多书写规范训练，六轮训练约3小时单卡，峰值显存19.1 GiB，原文未披露推理部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/AI-Lab-Pvt-Ltd/nepali-codemixed-asr> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/ailabpvtltd/sravaani-nepali-english-codemix-asr> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/ailabpvtltd/whisper-large-v3-turbo-nepali-english-codemix-asr> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/ailabpvtltd/indicconformer-nepali-english-codemix-asr> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/datasets/ailabpvtltd/nepali-english-codemix-asr-test-outputs> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要识别的语音是什么，输出要写成什么样

这篇论文处理的是尼泊尔语日常语音里夹杂英语的识别任务。输入是 16 kHz 的单声道语音片段，时长从约 1 秒到近 29 秒，平均 5.40 秒，内容覆盖朗读、工科讲座、播客、新闻访谈、日常混读对话和技术面试。目标输出是一串转写文本，但有一个硬性书写约定：尼泊尔语词用天城体，英语词用小写拉丁字母，标点去掉，数字和百分号等符号要写成当时说出的语言对应的单词。

这个约定带来两个初学者容易低估的困难。第一，听对不等于写对，模型即使听出是 television，若写成天城体，在词错误率下仍算错。第二，数字本身不标语言，1947 可以是尼泊尔语读法也可以是英语读法，而讲座里还有 6 into 10 的 power、FXK+1、T.remove teacher 这类代码和公式表达，直接删掉含数字的片段会丢掉大量技术语音，生硬地统一替换成一种语言又会让标签与音频对不上。

评价沿用语音识别常用的词错误率和字错误率，都是越低越好。论文还强调不能只看一个总词错误率，因为脚本选择、英语和尼泊尔语各自的错误、语言切换点附近的错误会被平均掉，后文会用细分指标把它们拆开。理解这一点，才能看懂为什么域外实验要做两种参考文本。

### 已有大模型解决了什么，还剩什么没解决

在输入、目标和监督都相同的条件下比较，Whisper、MMS 这类多语模型和 IndicVoices、Vistaar、VAANI 等印度语系工程提供了起点，它们都覆盖尼泊尔语，也见过一定朗读语音。SraVaani 是论文选定的基础模型，它在约 31000 小时 VAANI 语音上预训练再在相近规模转写数据上训练，结合了 FastConformer 编码器与 TDT 加 CTC 双输出头，词表是 5000 个 SentencePiece 片段。

但论文指出起点不等于终点。SraVaani 主要见过单脚本句子，在本文测试集上零样本输出常把英语写成天城体，短尼泊尔语音频甚至出现其他印度文字脚本。它的分词器不支持数字和常见符号，不支持的字符会被映射为未知标记，训练标签里若保留它们就无法使用。相关工作里已有 MUCS 的印地英语和孟加拉英语评测、转写感知的评价指标、尼泊尔语播客和 Whisper 适配研究，本文的不同在于聚焦固定分词器下如何准备混合脚本标签、如何处理双语数字、以及编码器是否必须参与适配。

### 论文要回答的三个实际问题

论文把任务收敛为 3 个可检验的问题。第一，在不替换分词器、不丢弃含数字符号片段的前提下，如何把转写改成可编码且与发音语言一致的字符串。第二，更新编码器和保留数字语音是否真正带来识别增益，还是只改变了输出习惯。第三，报告的错误率里有多少来自书写约定本身，换一套参考写法会不会反转结论。

为此作者准备了 172.8 小时共 115107 个片段的语料，训练 152.91 小时，验证 10.77 小时，测试 9.08 小时，其中 43.8% 的片段含至少一个英语词，英语占参考总词数的 24.2%，共有 69158 个不同词其中 14876 个是拉丁拼写。然后做全参数微调与冻结编码器、去掉数字片段、去掉朗读数据的消融，再与微调后的 Whisper large-v3-turbo 和 IndicConformer 对比，并在 FLEURS 尼泊尔语域外集上用原参考和混合脚本参考各评 1 次。论文明确说明目标是找出哪些改动有效，而非宣称通用最优。

### 从原始视频到可训练语料要走哪几步

整体流程分两大段。第一段是语料收集与清洗：选视频、下载音频、分离人声并做 300 Hz 到 8 kHz 带通与去噪，按至少 500 毫秒停顿切成目标 3 到 20 秒的块，先用 Gemini 出初稿再经大模型二遍修正，最后人工对照录音核对。第二段是与固定分词器兼容的规范化：统一大小写标点和 Unicode 形式，把不支持字符改写为口语词，对数字生成双语候选并借助基线输出挑选，再做长度与打包检查。

下面这张图展示的是第一段中 YouTube 野外语音的收集链路，读图时重点看文本、音频、文本三行的分工和交接物是什么。

> **看图路径：** 1. 先看上方紫色文本行：关键词搜索到筛选视频的入口；2. 再看中间蓝色音频行：下载、去噪到按停顿切分的顺序；3. 最后看下方橙色文本行：初稿、修正到人工核对的闭环

[![原论文 Figure 1：YouTube speech collection: video selection, audio processing, segmentation and transcript…](https://arxiv.org/html/2611.13512v1/fig1.svg)](https://arxiv.org/html/2611.13512v1/fig1.svg)

*论文图 1。原论文 Figure 1:：“YouTube speech collection: video selection, audio processing, segmentation and transcript verification.”。*

图中可见三行分工很清楚。上方文本行只管找片源，用关键词搜索加人工筛选决定用哪些视频。中间音频行管声音变干净和切分，用 yt-dlp 下载后做语音提取和去噪，再按停顿切成 3 到 20 秒。下方文本行管文字变可信，Gemini 初稿加模型修正后必须经过人工核对。这张图帮助理解后文数据表的领域差异：讲座和访谈的噪声、语速和英语密度与朗读完全不同，清洗代价也不同。

### 分词器不支持数字符号时标签如何改写

SraVaani 的 5000 片段词表能表示尼泊尔语和英语字母，但不能表示数字、百分号、常见标点和撇号。论文选择保留原词表以复用预训练的预测网络和输出头，代价是英语长词可能被切成多个短片段。所有最终标签必须通过编码再解码往返不变且不出现未知标记的检查，训练目标统一为尼泊尔语天城体、英语小写拉丁、去标点、数字符号按发音展开，连字符变空格、撇号删除。

改写量并不小。下表比较的是各来源中有不可编码字符的片段比例，可以看出野外域与朗读域的负担差异。

| Subset | Clips | Unenc. % | Digits % | Punct. % |
| --- | --- | --- | --- | --- |
| OpenSLR Nepali | 72,283 | 7.5 | 7.4 | 0.1 |
| Lectures | 20,138 | 86.3 | 38.9 | 47.3 |
| Podcast | 7,165 | 62.7 | 24.1 | 38.6 |
| News & talk | 14,820 | 42.2 | 14.4 | 27.8 |

表中全量 116175 个源片段里 29.7% 含不可编码字符，其中 14.8% 含数字、14.9% 只含标点符号。OpenSLR 朗读仅 7.5% 受影响，而讲座高达 86.3%、访谈 93.5%，播客和新闻也在 40% 以上。这解释了为什么不能简单丢弃：丢掉就是丢掉最有混读价值的技术语音。也说明规范化规则必须能处理公式和代码，而不只是整数年份。

**SraVaani × FastConformer 编码器 × TDT 解码器：** SraVaani 是待适配的整体模型，FastConformer 编码器负责把声学特征变成逐帧表示，TDT 解码器负责把帧表示加已输出历史变成词片段序列并同时预测持续时长，三者组合后编码器提供听觉证据、解码器决定写什么和跳多快，适配时一起更新才能同时改听和写。

**双语数字口语化 × 零样本识别输出 × 发音近似键：** 双语数字口语化是为同一数字串生成尼泊尔语和英语两种读法候选，零样本识别输出是未适配基线模型直接解码得到的有噪声证据，发音近似键是把候选和证据都转成粗糙罗马化后比较编辑距离的桥梁，三者组合后才能在不换分词器情况下选出与音频更相符的语言读法。

### 数字有两种读法时如何生成候选并挑选

规则口语化器覆盖 40 多种模式，包括整数、年份、小数、范围、百分比、序数、时间、分数、上下标、字母数字混合和代码表达式，对每个数字同时构造尼泊尔语和英语读法，每片段最多保留 32 个完整句子候选。例如源文本里的 1947、1 和 50、32 27 等都会展开成两种语言的数词序列，6 into 10、FXK+1、T.remove teacher 则展开成 six into ten、f x k plus one、t dot remove teacher 这类形式。

挑选依靠基线 SraVaani 对音频的零样本输出。它的输出常把英语发音写成天城体，直接比字符串不公平，所以论文把候选和基线输出都映射到粗糙罗马化发音键，合并常见拼写差异后按编辑距离打分，先选整句最接近者再对单个数字尝试替换。若最好的两种读法打平则拒收 644 个片段，若最近候选仍与输出距离过远则按归一化距离 0.5 阈值再拒收 315 个片段。最终 resolved 的 35157 个数字里 45.1% 用尼泊尔语读法、53.1% 用英语读法，OpenSLR 里 99.0% 是尼泊尔语读法而工科讲座里 75.6% 是英语读法，符合领域直觉。

下面这张真实讲座例子展示了候选、罗马化比较和距离选择的全过程。

> **看图路径：** 1. 对比上方源转写与基线假设的脚本差异；2. 观察中间四条候选罗马化形式与距离数字的对应；3. 确认下方绿色终选标签保留了哪种语言的读法

[![原论文 Figure 2：Spelling out numbers, on a real lecture clip.](https://arxiv.org/html/2611.13512v1/fig2.svg)](https://arxiv.org/html/2611.13512v1/fig2.svg)

*论文图 2。原论文 Figure 2:：“Spelling out numbers, on a real lecture clip.”。*

图上源转写是 6 into 10 的 power，规则对 10 给出尼泊尔语和英语两种读法，罗马化后与基线输出比较距离，英语读法 six into ten 距离为 2 而尼泊尔语读法距离为 5 或 9，因此终选英语读法。这说明该步骤不是语言偏好投票，而是用音频证据在发音空间里做最近邻选择。论文也承认风险：150 个数字片段人工抽查发现 5 处错误，约 3.3%，多因缺规则，后补规则改变了 634 个受影响片段中 539 个的选择，但最终标签仍需独立听音核验。

\[U\leq T-2,\qquad U+R\leq T.\]

上式是长度合法性约束，编码器每 80 毫秒出 1 帧，时长 d 秒对应 T 帧，CTC 标签词片段数 U 与相邻重复数 R 必须满足该不等式，否则 CTC 无法对齐。该检查去掉 109 个片段，训练再限 20 秒又跳过 33 个，验证和测试保留长片段以检验泛化。

### 模型内部两条解码路径如何分工

SraVaani 前端把 16 kHz 音频变成 128 维对数梅尔特征，窗长 25 毫秒、帧移 10 毫秒，经 3 级卷积下采样 8 倍再经 17 个 Conformer 块得到宽度 1024 的编码状态，编码器约 433M 参数。主解码器是带时长的 Transducer，用 640 单元 LSTM 预测网络表示已输出历史，再用联合网络把声学状态与历史表示相加经激活映射到 5006 维，其中 5000 是词表、1 是空白、5 是时长选择 0 到 4，允许 1 次跳多帧。另一路 CTC 头在每帧独立预测词表加空白。

**CTC 输出头 × TDT 损失 × CTC 损失：** CTC 输出头是每帧独立预测词片段或空白的辅助分支，TDT 损失是对所有词加时长路径求和的序列损失，CTC 损失是对所有对齐路径求和的帧级损失，论文按 0.7 和 0.3 加权让主分支学显式时长对齐、辅助分支稳定帧表示，两路共享同一编码器和词表。

解码时默认用贪心 TDT 解码，不加外部语言模型，每步选词和时长、空白不增词并按时长前移，每帧最多输出 10 个词。CTC 对比解码则是取每帧最大符号再折叠重复和空白。保留双头的好处是训练时两路监督共享编码器，推理时可以比较主辅路径的差距，论文后文用 CTC 解码词错误率高 2.0 个点来说明主解码器的时长建模有实际作用。

### 微调时更新哪些参数，用什么损失和学习率

主实验更新全部约 448.8M 参数，编码器峰值学习率取解码器的一半，即编码器 5×10-5、预测网络和输出头 1×10-4，官方脚本是冻结编码器只训 2 轮，本文改为训练 6 轮并加做 12 轮。与官方相比，每次更新片段数从 32 提到 64，预热从 10 步改为总步数的 5%，余弦退火到 1×10-6，精度用 bf16 混合，联合张量子批量从 4 降到 1 以省显存，验证每轮做 2 次并按验证词错误率选最优而非取最后权重。优化器是 AdamW，权重衰减 1×10-3，梯度全局范数裁到 1，SpecAugment 用 2 个频域掩膜和 10 个时域掩膜。6 轮在单张 RTX 5090 上约 3 小时，峰值显存 19.1GiB。

下图展示 1 次微调步骤的数据流和更新粒度，重点看批量、共享与梯度累积的关系。

> **看图路径：** 1. 沿 8 个片段小批量到对数梅尔特征再到下采样的主路径；2. 比较 CTC 头与 TDT 联合加预测网络两条解码分支的汇合；3. 注意底部每 64 片段梯度裁剪后才做一次更新的标注

[![原论文 Figure 3：One fine-tuning step of SraVaani.](https://arxiv.org/html/2611.13512v1/fig3.svg)](https://arxiv.org/html/2611.13512v1/fig3.svg)

*论文图 3。原论文 Figure 3:：“One fine-tuning step of SraVaani. The two decoders share the encoder and the 5,000-piece vocabulary.”。*

图中最上方是 8 个最长 20 秒片段的小批量，经特征加增强后进卷积下采样和 Conformer 编码器，两路解码头共享编码器和 5000 词表，TDT 联合同时连向预测网络，损失按加权求和后每累积 64 片段做 1 次 AdamW 更新。这对应后文冻结编码器消融的含义：冻住图中紫色大块只调橙色小块，听觉表示不变只改书写习惯。

**编码器冻结 × 全参数微调 × 解码器学习率：** 编码器冻结指只更新预测网络和输出头而不动声学编码器，全参数微调指连同 433M 左右的编码器一起更新，解码器学习率指输出侧使用的峰值步长而编码器只取其一半，三者组合的意义是检验增益来自改写习惯还是真正听懂，论文用对照证明必须动编码器。

\[\mathcal{L}=0.7\,\mathcal{L}_{\mathrm{TDT}}+0.3\,\mathcal{L}_{\mathrm{CTC}}.\]

上式是保留自检查点的损失加权，TDT 占 0.7、CTC 占 0.3，另保留对数欠归一化和偶发 RNN-T 损失的原设置。学习率按分段余弦调度，6 轮时预热 494 步、总 9888 步，12 轮时预热 989 步、总 19776 步，每轮 1648 次更新，8 个工作进程读 32 个训练分片并每轮重排。

### 用什么数据划分和对照来检验结论

域内测试集是 4610 个片段共 9.08 小时，来自 6 个来源，另有 1125 个含数字符号的源转写片段用于看数字效果。模型选择只用验证集。域外用尼泊尔语 FLEURS 测试集 586 个片段约 1.8 小时，去掉 138 个含数字的片段因为参考未标明读法，音频不变且所有系统评同一子集。为分离书写约定的影响，作者用大模型把 FLEURS 原参考里英语借词和外国名转成小写拉丁并剥离尼泊尔语后缀，390 句被改动、拉丁词占 9.3%，但未经逐句听音验证，只能算书写风格检验而非新的口语切换基准。

对照包括未适配 SraVaani、6 轮全量微调、第二随机种子、12 轮、冻结编码器、去掉数字片段、去掉 OpenSLR，以及 CTC 解码。跨模型对照是在同一训练划分上微调 Whisper large-v3-turbo 共 809M 参数 3 轮和重训分词解码器的 IndicConformer 约 128M 参数 6 轮。所有评分先小写去标点，报告语料级词错误率和字错误率，诊断指标含分语言词错误率、英语精确匹配、错脚本率、罗马化词错误率和切换点错误率，区间用 1000 次按片段配对自助法给出，但不考虑同一说话人相关。

**词错误率 × 罗马化词错误率 × 语言相关词错误率：** 词错误率是按词统计替换删除插入后除以参考词数的严格拼写得分，罗马化词错误率是先把天城体和拉丁拼写映射到近似发音再比较以减轻脚本惩罚，语言相关词错误率是把错误按参考词所属语言分别统计以区分英语和尼泊尔语谁更差，三者搭配才能把认错词和写错脚本分开。

最终语料的领域构成如下表所示，读图时注意训练与测试的小时数和混读比例差异。

| Subset | Domain | Clips | h | Clips | h | CM % | EN % |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OpenSLR Nepali | read speech | 69,133 | 57.62 | 1,500 | 1.25 | 15.1 | 6.6 |
| Lectures | engineering/CS lectures | 15,867 | 44.53 | 1,574 | 4.25 | 98.4 | 35.9 |
| Podcast | podcast / talk show | 6,305 | 28.47 | 358 | 1.63 | 85.1 | 13.1 |
| Total |  | 105,448 | 152.91 | 4,610 | 9.08 | 43.8 | 24.2 |

表中训练 105448 片段 152.91 小时，验证 5049 片段 10.77 小时，测试 4610 片段 9.08 小时。讲座、播客、新闻、对话、访谈的含英语片段比例都在 85% 以上，访谈甚至 100%，英语词占比讲座 35.9%、对话 36.2%、访谈 47.0%，而 OpenSLR 朗读仅 15.1% 和 6.6%。这意味着总词错误率会被朗读拉低，细分领域和分语言指标才是判断混读能力的关键。

### 微调后总体和分领域准确率变成多少

域内主结果是未适配 SraVaani 词错误率 48.6%，6 轮全量微调后 17.1%，换种子 17.0%，12 轮 16.3%，增益遍及 6 个领域但自发播客和新闻仍难于朗读。12 轮 SraVaani 与微调 Whisper 的 16.4% 总体接近，配对自助下差异不显著，但参数量是 449M 对 809M。微调后 IndicConformer 为 19.9%。未适配 Whisper 在该设置下高达 121.5%，部分因 388 个输出出现重复循环导致大量插入。

下表集中比较零样本与微调后的总体、分语言、罗马化和分领域词错误率，阅读时先看总体再看英语与尼泊尔语分开的变化。

| Model | Params | WER | CER | EN-WER | NE-WER | Rom-WER | FLEURS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SraVaani | 449M | 48.6 | 33.3 | 80.4 | 36.1 | 41.3 | 22.6 |
| Whisper large-v3-turbo | 809M | 16.4 | 7.5 | 14.8 | 17.0 | 14.8 | 36.9 |
| IndicConformer | 128M | 19.9 | 11.3 | 26.5 | 17.4 | 18.4 | 32.2 |
| SraVaani, 6 epochs | 449M | 17.1 | 8.0 | 20.1 | 15.9 | 15.5 | 31.1 |

表中 SraVaani 6 轮把英语词错误率从 80.4% 降到 20.1%、尼泊尔语从 36.1% 降到 15.9%，12 轮进一步到 18.8% 和 15.3%。罗马化词错误率从 41.3% 降到 15.5% 再到 14.7%，说明不只是脚本改对，发音层面的识别也在变好。分领域看 OpenSLR 从 62.5% 降到 12.4%、讲座从 43.7% 降到 15.4%，但播客和新闻仍在 20% 左右。Whisper 微调后英语更好 14.8% 对 18.8%，SraVaani 在尼泊尔语 15.3% 对 17.0% 和朗读 12.1% 对 16.8% 占优，IndicConformer 差距主要在英语 26.5%。该表支持的结论限于同一训练划分和贪心解码，Whisper 只训 3 轮且验证仍在下降，不能当作其最优配置的比拼。

按是否含英语切分，混读片段 6 轮词错误率 17.4%、纯尼泊尔语 15.2%，12 轮为 16.6% 和 14.4%。英语精确匹配从 21.2% 升到 82.3% 再到 83.6%，错脚本率从 11.6% 降到 0.3%。切换点附近错误率从 65.9% 降到 14.3%，与非切换处 15.2% 已接近，说明模型初步学会在语言边界处切换脚本。

### 域外 FLEURS 上书写约定解释了多少损失

标准 FLEURS 原参考下 SraVaani 从零样本 22.6% 升到 6 轮微调 31.1%，看似域外退化。但换成混合脚本参考后，零样本 30.0% 变为微调 23.4%，方向反转。这是因为原参考把很多英语借词写成天城体，而微调模型按训练约定写成拉丁字母，单看原词错误率会把书写差异计为识别错误。Whisper 和 IndicConformer 微调后也有类似模式，混合脚本下分别为 29.0% 和 26.4%。

但不能说问题只是拼写。若忽略脚本和空格看罗马化字错误率，SraVaani 仍从 5.1% 升到 7.6%，说明存在真实识别损失。微调后输出拉丁词占比从 0.0% 升到 10.1%，冻结编码器也有损失，表明解码器输出习惯是原因之一。论文未测试双约定混合训练，因此只能说部分损失来自转写不匹配、部分是真损失，解决办法待验证。

### 编码器必须参与更新吗，训练轮数还有收益吗

官方做法冻结编码器在本文得到 25.5% 词错误率，比全量微调 17.1% 差 8.4 个点，区间为 8.0 到 8.8。冻结模型的罗马化词错误率仍有 23.5% 对 15.5%，说明差距不只是输出脚本，而是编码器没学会新领域的发音。验证曲线上冻结运行更早走平，6 轮全量验证词错误率终点 12.94% 而冻结终点约 19.9%。12 轮比 6 轮测试再降 0.8 个点到 16.3%，区间为负 1.0 到负 0.6，且终点仍在改善，论文明确说这不能证明已收敛。

下图是 6 轮验证词错误率随轮数的变化，读图时重点比较全量、冻结、去数字、去朗读 4 条线的起点与斜率。

> **看图路径：** 1. 横轴为轮数、纵轴为验证词错误率，先确认四条曲线的图例；2. 比较深蓝色全量微调与红色冻结编码器的全程差距；3. 观察去掉数字片段的绿色虚线在中后段是否追上主曲线

[![原论文 Figure 4：Six-epoch validation WER for the main configuration and ablations.](https://arxiv.org/html/2611.13512v1/fig4.svg)](https://arxiv.org/html/2611.13512v1/fig4.svg)

*论文图 4。原论文 Figure 4:：“Six-epoch validation WER for the main configuration and ablations. Validation is performed twice per epoch.”。*

图中深蓝色全量微调下降最快且终点最低约 12.9%，红色冻结编码器全程最高终点 19.9%，绿色去数字和浅蓝第二种子介于中间，橙色去朗读早期接近主曲线后期略高。这直观支持编码器更新是最大单因素，去数字主要影响特定子集而非全程。另一张 12 轮对比图显示 6 轮曲线停在约 12.9% 而 12 轮延续下降到约 12.4%，但两条用了各自总轮数的余弦调度，比较的不是同一步长下的外推，需按原文理解为更长调度的结果。

### 去掉数字语音和朗读语音各付出什么代价

去掉源转写含数字符号的训练片段后，训练从 152.9 小时降到 120.1 小时，总体词错误率从 17.1% 升到 19.8%，差 2.7 个点。在 1125 个数字测试片段上从 14.3% 升到 21.3%，而其余片段只差 0.26 个点，区间包含零。这说明损失高度集中在数字语音，保留数字训练是值得的。去掉 OpenSLR 后总体从 17.1% 升到 18.5%，其中 OpenSLR 测试从 12.4% 恶化到 29.3%，5 个混读域合计只差 0.27 个点，域外 FLEURS 从 31.1% 升到 36.2%，说明单语朗读主要保尼泊尔语和域外稳定性。

数字词层面的统计更直接。下表按英语和尼泊尔语数词分别统计替换加删除的错词比例。

| System | English (1,617 words) | Nepali (3,744 words) |
| --- | --- | --- |
| Zero-shot | 88.0 | 32.6 |
| No numeric clips | 16.6 | 29.8 |
| Fine-tuned, 6 epochs | 4.9 | 6.4 |

表中全量微调英语数词错误率仅 4.9%、尼泊尔语 6.4%，而去掉数字训练后升到 16.6% 和 29.8%，零样本时更是 88.0% 和 32.6%。英语数词 1617 词、尼泊尔语 3744 词的分母不同，比较时应看各自变化而非跨语言绝对值。该结果支持保留口语化数字，但论文提醒挑选依赖基线输出可能继承其偏置，最终标签仍需独立审核，不能把该表读成数字问题已彻底解决。

### 哪些结论在什么条件下才成立，还有什么没测

域内结论依赖继承的划分，该划分不保证说话人互斥，因此 17.1% 到 16.3% 可能偏乐观，换成说话人分离划分结果会变。数字标签的自动选择用基线输出做证据，审计已发现缺规则导致的错误，补规则后仍缺逐句听音验证。FLEURS 混合脚本参考由大模型初转加自动检查，未经人工逐句听音，且 FLEURS 本身是朗读、英语含量有限，不能代表自发域外混读。

训练比较也有边界。只有主配置做了第二种子，Whisper 验证分仍在改善，12 轮 SraVaani 终点仍在下降，都说明没测到收敛上限。自助区间只反映片段抽样，不反映说话人相关和多次训练波动。微调后测试集已无大面积错脚本，残留错误多为短虚词脱落、拼写变体和罕见英文名与技术词，部分还是参考本身拼写不一致，论文用实例展示但未量化每类占比，复现时应自己做错误抽样。

### 要复现第一步做什么，需要哪些代码和权重

复现先从数据规范而非模型开始。按论文把音频转 16 kHz 单声道 16 位，用强制对齐修边界，去重跨划分音频和流入测试的训练句，再对每条标签做分词器往返检查，不通过则按四规则改写，数字必须走双语候选加罗马化距离选择并记录拒收原因。打包用 NeMo 分片格式并校验时长、编号、哈希、覆盖率，通过长度约束后再训练。

论文列出的项目链接包括代码库、三份适配模型和测试输出数据集，链接在原文第 8 节给出，第三方可达不等于作者已开源训练音频，训练音频因原始权利未发布。按本次核验，代码与模型页面当前可达，但应以实际下载和能否运行区分代码可用、权重可下载、系统可运行三件事。环境记录为单张 32 GB RTX 5090、NeMo 2.7.3，6 轮约 3 小时，联合子批量取 1、峰值 19.1GiB 是显存紧张时的关键设置。

### 什么时候值得尝试这种做法，下一步还需补什么

当任务要求尼泊尔语天城体加英语小写拉丁的混合书写，且语料含大量讲座公式和代码、基础模型分词器又不支持数字符号时，本文的保留词表加双语口语化路线值得尝试。预期收益是混读测试大幅下降且切换点错误接近非切换处，代价是必须做候选生成与距离筛选的人工审计，以及全量更新编码器的算力。

不值得盲目照搬的情况是域外读写约定不同或说话人高度重叠时，单看原词错误率会误判。下一步应补独立听音核验数字标签、说话人分离划分、双书写约定混合训练，以及对 Whisper 等对照补足轮数后再比。论文的价值在于给出可操作的准备流程和可量化的代价位置，而非一个通用最优分数。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2611.13512v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
