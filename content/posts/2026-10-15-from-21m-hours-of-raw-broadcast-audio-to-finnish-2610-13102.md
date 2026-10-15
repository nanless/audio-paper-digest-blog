---
title: "From 2.1M Hours of Raw Broadcast Audio to Finnish Speech SSL: Confidence Filtering and Architectural Analysis at Scale"
date: 2026-10-15
draft: false
tags: [语音识别, 自监督学习, Conformer, 预训练]
categories: [论文速递]
description: "论文用 VAD、去重和 ASR 置信度把 210 万小时广播音频筛到 47.1 万小时做 wav2vec 2.0 预训练，并在相同参数量下比较四种编码器，Base 规模卷积增强结构域外优势最大，X-Large 规模差距缩小。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.13102"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "从 210 万小时广播音频做芬兰语语音自监督：质量筛选与编码器比较"
paper_digest_original_title: "From 2.1M Hours of Raw Broadcast Audio to Finnish Speech SSL: Confidence Filtering and Architectural Analysis at Scale"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.13102v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.13102v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.13102v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"method","id":"method.conformer","label":"Conformer"},{"facet":"setting","id":"setting.pretraining","label":"预训练"}]
paper_digest_primary_method: "自监督学习"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文用 VAD、去重和 ASR 置信度把 210 万小时广播音频筛到 47.1 万小时做 wav2vec 2.0 预训练，并在相同参数量下比较四种编码器，Base 规模卷积增强结构域外优势最大，X-Large 规模差距缩小。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yaroslav Getman"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tamás Grósz"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tommi Lehtonen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mikko Kurimo"}]
paper_digest_abstract_sha256: "4874d4c90462bd7cfc7f3df1b64c7f5885386991e65715f9399b0f4289dc05cc"
paper_digest_sidecars: {"citation.bib":{"sha256":"b3253f8ffaff8fbea35a142f10fbd130092908bcba74658a1012f1cb7833042d","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13102/citation.bib"},"citation.json":{"sha256":"f885fde48ae95c55bbbd994153c1607610902546e3efcd0b1caa2dcbb916e5ac","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13102/citation.json"},"citation.ris":{"sha256":"281dfa4a99e0aa55a7e33d35a21139124b6b7fb6a669d99069654d9eac11093e","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13102/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"584b12b3d93c54903ea21e1896d3aea7720df9e2b499012f1a7df38b5c76b99b","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13102/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "0d700d8096fd9d904daeed74638fac2cdc55ef25a430730aee3317aeef32386a"
paper_digest_api_reader_plan_sha256: "607fc49df55cfd38291fcab36284861c142f2a57d819ad9a0f3ebd220fb653ba"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "0f428a2e6e519089701dc18ab19681d7f9b54bac92db3f3a7b37c8eb7396e86c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "05b91d25f90e2f5b63b360d7690bcd8320a42560efc96abcf0719a07b22fd298"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0eecf1090aa4d90bb7e6ce052137ef1513171e005133b0675f08881123ae5a2f"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5aee268da7d5f8d4ef526a1b86cc1c39049afd29ba33b5dc50bc8d719989bff2"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 从 210 万小时广播音频做芬兰语语音自监督：质量筛选与编码器比较

> 英文题目：*[From 2.1M Hours of Raw Broadcast Audio to Finnish Speech SSL: Confidence Filtering and Architectural Analysis at Scale](https://arxiv.org/abs/2610.13102v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)；[Conformer](/audio-paper-digest-blog/papers/?concept=method.conformer)
- **研究条件**：[预训练](/audio-paper-digest-blog/papers/?concept=setting.pretraining)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yaroslav Getman：机构信息未在 arXiv HTML 中可靠披露
- Tamás Grósz：机构信息未在 arXiv HTML 中可靠披露
- Tommi Lehtonen：机构信息未在 arXiv HTML 中可靠披露
- Mikko Kurimo：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

芬兰语广播存档规模大但混杂音乐、广告、非语音和多语言片段，现有做法多用语音活动检测或语言识别保留语音，缺少按质量筛选的研究。论文以210万小时原始广播音频及VoxPopuli芬兰语部分、议会和Lahjoita puhetta数据为输入，在wav2vec 2.0框架下预训练可用于识别微调的语音表示。语音活动检测先将原始音频切分为最长30秒片段得到120万小时语音，其转录文本作为后两步的依据。芬兰语识别模型对片段转录后按相同文本去重至89万小时，去除重复广告和台标等内容，去重后文本再用于计算字符级识别置信度。置信度过滤以阈值保留高分片段至47.1万小时，该子集直接作为各编码器预训练数据，用于比较Transformer与卷积增强结构的差异。与只做语言识别过滤相比，置信度过滤在Base规模识别微调中带来3%到7%的相对词错率下降，且最终数据约99%为芬兰语。在6个芬兰语测试集上，Base规模卷积增强编码器比Transformer相对词错率降低最高约37%，而X-Large规模差距缩小。结论适用于含噪多语言广播存档的芬兰语预训练，跨语言效果未经验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/aalto-speech/large-scale-monolingual-speech-foundation-models> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/speechbrain/lang-id-voxlingua107-ecapa> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 芬兰语预训练要解决什么输入输出问题

这篇论文处理的是芬兰语语音自监督表示学习问题。输入是大量无标注音频，论文起点是芬兰国家视听研究所广播电视存档的 2,100,000 小时原始广播音频，覆盖 26 个电视频道、85 个广播电台和网络媒体，时间跨度 2009 年至 2025 年，内容从正式新闻到娱乐、广告和音乐，元数据很少。此外还加入 3 个芬兰语公开数据集的训练集，包括 VoxPopuli 芬兰语子集 14,300 小时、芬兰议会 3.1K 小时和捐赠语音 3.2K 小时。目标是学出对下游芬兰语语音识别有用的通用表示，输出是在 6 个测试集上的词错误率。

必须保留的信息是真实广播中的噪声、音乐、非语音和多语言片段，因为这正是筛选方法要处理的对象。读者需要理解，规模大不等于可直接用于预训练，质量筛选和结构选择是两个核心变量。

### 已有路线为什么只保证有语音而非高质量

论文梳理了两条已有路线。第一条是数据路线，以往单语自监督研究要么尽量用全部数据扩大规模，要么挑选部分广播节目和精选数据集，配合语音活动检测切分或基于 Whisper 的语句抽取。这些做法回答的是如何把语音从广播中取出，而没有系统回答如何按质量筛选。语音活动检测只能判断有没有人声，不能判断是否清晰、是否适合预训练。

第二条是结构路线，Transformer 编码器在 wav2vec 2.0 等框架中广泛使用，Conformer 和 E-Branchformer 也被引入自监督，但已有比较往往同时改变结构和参数量，例如某项研究中 Conformer 为 618M 参数而 Transformer 为 317M 参数，无法判断增益来自结构还是容量。置信度筛选在半监督和自训练中常用，但用自动语音识别置信度筛选自监督预训练数据此前未被研究，这就是本文的切入点。

### 论文把大存档可用性拆成哪两个可检验问题

论文把 2,100,000 小时存档能否用于预训练拆成两个可检验问题。第一个是数据质量问题：在语音活动检测和去重之后，是否需要进一步按质量过滤，以及用语言标识过滤还是用识别置信度过滤更有效。评价标准是在相同或相近数据保留率下，下游识别词错误率是否更低。第二个是结构效率问题：在固定参数量和固定预训练数据条件下，Transformer、Macaron-Net、Conformer 和 E-Branchformer 哪种编码器更有效，以及深而窄与浅而宽如何取舍。评价覆盖 Base 约 95M、Large 约 317M 和 X-Large 约 965M 3 个规模，测试集同时包含域内和域外，避免结论只在单一领域成立。两个问题都强调控制变量，而不是单纯扩大数据或模型。

### 从原始广播到预训练集的整体流程是什么

整体流程是四步漏斗。第一步是语音活动检测，用 pyannote.audio 从 2,100,000 小时原始音频中得到 1,200,000 小时语音段，并切成最长 30 秒的块。第二步是基于转写的去重，用芬兰语 wav2vec 2.0 Large 模型生成转写，相同转写只保留一份，以去除大量重复的台标、广告和重播节目，这一步从 1,200,000 小时降到 890,000 小时。第三步是置信度过滤，用识别置信度阈值进一步筛选到 471,000 小时。第四步是用筛选后数据做 wav2vec 2.0 预训练，再用 4.6K 小时转写数据微调为识别模型。

公开数据集的训练集也经过同样过滤流程以保持一致，其中议会和捐赠语音的转写部分同时用于微调。最终 471,000 小时中广播约 294,000 小时、电视约 133,000 小时，其余为媒体和其他来源。下图展示了这一漏斗的数量变化和每步的作用。

下图为论文的数据准备流水线导读，展示从原始广播总量经语音检测、去重和置信度过滤到最终预训练集的完整路径，适合对照每步保留的数据量理解筛选代价。

> **看图路径：** 1. 沿从左到右箭头看原始音频到预训练集的数量变化；2. 注意中间去重和置信度过滤两个步骤各自去掉的数据量；3. 观察最终预训练集中广播、电视和媒体的大致构成

![原论文 Fig. 2：Pretraining data preparation pipeline.](/audio-paper-digest-blog/images/papers/2610.13102/figure-2-819f3b8b319a408a.png)

*论文图 2。原论文 Fig. 2:：“Pretraining data preparation pipeline.”。*

该图从左到右依次为 2,100,000 小时原始音频、1,200,000 小时语音段、890,000 小时去重后内容和 471,000 小时预训练集，箭头上标注了语音活动检测、识别转写去重和置信度过滤。可见去重主要去掉重复性内容，置信度过滤进一步去掉约一半数据，代价是数据量大幅减少，换来的是论文报告的约 99% 芬兰语内容和更清晰的语音。最终构成仍以广播为主，说明筛选没有改变以广播为核心的数据来源。

### 置信度分数如何计算和决定去留

置信度分数是论文提出的预训练数据质量代理指标。直觉是训练好的识别模型对声学清晰语音会给出更高的 CTC 对数概率，而对噪声或无关音频给出更低概率。具体做法是对每个音频样本，用识别模型得到每帧预测字符，排除空白符号后，对剩余帧的对数概率取平均。平均且排除空白的设计被引为更稳健的置信度估计方式。样本保留条件是分数大于等于阈值，阈值在负 0.3 到负 0.1 之间试验，最终选择负 0.1。

作为对照的语言标识过滤要求音频语言标识模型和转写文本语言标识模型同时判为芬兰语才保留。分析发现存档中英语是第二大语言约 80,000 小时，而置信度过滤后的最终集合中约 99% 为芬兰语，因此不再需要显式语言过滤。

**自监督预训练 × 微调：** 自监督预训练指不使用人工标注，用掩码预测等任务从 47.1 万小时音频中学习通用语音表示；微调指冻结卷积特征编码器后，用 4.6K 小时议会和捐赠语音转写数据以 CTC 损失训练识别头，把通用表示转为芬兰语识别能力，二者分工为先学表示再学文字映射。

**语音活动检测 × ASR 置信度过滤：** 语音活动检测解决有没有人声的问题，用 pyannote.audio 把 210 万小时切出 120 万小时语音段；ASR 置信度过滤解决语音是否清晰可用的问题，用已训练芬兰语识别模型的平均字符对数概率保留高置信度片段，二者串联实现先提取语音再按质量筛选。

**语言标识过滤 × ASR 置信度过滤：** 语言标识过滤用 ECAPA-TDNN 音频模型加 fastText 文本模型判断是否为芬兰语，保证语言正确；ASR 置信度过滤用识别概率判断声学是否清晰，保证质量可用，论文比较发现后者在相近保留率下词错误率更低，并自然去除了大部分非芬兰语内容。

**Transformer × Conformer：** Transformer 编码器每层是多头自注意力加前馈网络，擅长建模全局依赖；Conformer 在 Macaron 双半步前馈结构上再串入卷积模块，同时建模全局依赖和局部声学模式，论文在相同参数量下比较二者，以区分结构带来的增益和单纯增加容量的增益。

**Macaron-Net × E-Branchformer：** Macaron-Net 把单个前馈网络拆成注意力前后两个半步前馈网络，用于检验双前馈结构本身的效果；E-Branchformer 把全局注意力分支和局部卷积门控 MLP 分支并行处理再用深度卷积融合，用于检验并行提取互补信息的效果，二者帮助分离深度、双前馈和卷积各自的作用。

置信度计算公式中符号含义如下：X 为输入音频，t 为帧索引，预测标签为该帧概率最大的字符，S 为非空白帧集合，C 为这些帧对数概率的平均值。该公式的目标是给出整段音频的声学清晰度代理分数，原文明确的实现是取平均且不合并重复字符。

\[C_{\text{char}}=\frac{1}{|S|}\sum_{t\in S}\log P(\hat{y}_{t}\mid X),\quad S=\{t\mid\hat{y}_{t}\neq\epsilon\}\]

可以这样理解单个样本的通过过程：一段 30 秒语音块先被识别模型逐帧打分，去掉空白帧后平均得到例如负 0.08 或负 0.25，前者高于负 0.1 阈值被保留，后者被丢弃。这个例子只是说明阈值比较逻辑，不是论文报告的实际分布。

### 四种编码器在同一层内分别做了什么

4 种编码器都放在 wav2vec 2.0 框架的编码器后端，论文固定参数量和预训练数据来隔离结构影响。标准 Transformer 每层是多头自注意力加一个前馈网络，各带残差和层归一化。Macaron-Net 把单个前馈网络换成注意力前后两个半步前馈网络，内部维度减半以保持参数量相当，用于单独检验双前馈结构的作用。Conformer 在 Macaron 结构基础上，在自注意力和最后前馈之间串入一个卷积模块，顺序捕捉全局依赖和局部模式。

E-Branchformer 则把全局注意力分支和局部卷积门控 MLP 分支并行处理，再用深度卷积融合模块合并，允许两路独立提取互补声学信息。论文在 Base 规模还试验不同层数与宽度组合，例如 Transformer 试验 6 层、12 层、18 层和 24 层，层数增加时通过减小宽度保持总参数量相近。

### 预训练和微调各用什么数据和更新方式

预训练在 512 块 AMD MI250X 上进行，微调用 128 块卡并基于 Fairseq 实现，其中 Macaron-Net 和 E-Branchformer 按原始结构扩展实现。Base 模型学习率 6e-4，每卡动态批量 3 分钟音频，训练 125,000 步；Large 模型学习率 4e-4，每卡 2 分钟，训练 167,000 步；X-Large 模型学习率 1e-4，每卡 1 分钟，训练 400,000 步。微调使用 CTC 损失，冻结卷积特征编码器，只更新上层编码器和识别层，学习率在 1e-5 到 1e-4 之间按验证集选择。

Base 微调每卡 2.5 分钟共 16,000 步，Large 每卡 2 分钟共 25,000 步，X-Large 每卡约 1 分钟共 40,000 到 45,000 步，具体批量和步数因结构显存占用而略有差异。微调数据为议会和捐赠语音中共 4.6K 小时转写数据，评测时报告 6 个测试集的词错误率。这种冻结底层、更新上层的设置是原文明确给出的，梯度不经过冻结的特征编码器。

### 评测集、基线和比较条件如何设置

评测分为域内和域外。域内是微调语料的测试划分，包括捐赠语音、议会 2016 和议会 2020 两个测试集。域外包括 Common Voice 16.1、FLEURS 以及作者从 Nova 和 Basso 两个电台各 1 小时广播人工转写的新 KAVI 测试集，用于检验真实广播条件。指标为词错误率，越低越好。过滤试验固定用 wav2vec 2.0 Base Transformer，在去重后语音活动检测数据子集上比较不进一步过滤、语言标识过滤和不同置信度阈值过滤，微调数据相同。

结构试验固定预训练数据，比较相同参数量下的不同后端和深度宽度配置。跨规模试验与此前芬兰语 wav2vec 2.0 基线使用相同 Transformer 配置，直接对比可分离预训练数据的贡献，因为基线用 158,000 小时较干净谈话广播加语音活动检测切分，而本文用 471,000 小时经严格过滤的无约束存档。

**词错误率 × 域内与域外评测：** 词错误率是识别错误词数占比，越低越好；域内评测指微调数据同分布的议会和捐赠语音测试集，检验拟合能力，域外评测指 Common Voice、FLEURS 和真实广播 KAVI 测试集，检验泛化能力，二者结合才能判断预训练是只记住微调领域还是真正提升泛化。

需要提醒研究生，域外好不等于所有条件都好，论文中不同域外集的最优结构并不完全一致，阅读结果时要按测试集分别看。

### Base 规模哪种结构在域外泛化最好

Base 规模是结构差异最大的区间。论文报告增加深度总体有帮助，但 Transformer 在 18 层后饱和，24 层减宽保持参数量后在 6 个集合中的 5 个上没有进一步提升。Macaron-Net 持续优于 Transformer，12 层已优于同等 Transformer，22 层进一步降低错误率。卷积增强结构提升最大，尤其在域外泛化上。下表整理了论文正文明确报告的 Base 规模关键数字，比较问题是在相近参数量下卷积增强结构相对 Transformer 的域外表现，指标为词错误率越低越好。

下表比较 Base 规模卷积增强编码器在域外基准上的表现，行是实际可运行的两种后端配置，列是 3 个域外测试集，指标方向为词错误率越低越好，用于说明结构带来的泛化增益及其领域差异。

| 后端配置 | Common Voice 词错误率 | FLEURS 词错误率 | KAVI 词错误率 | 适用条件说明 |
| --- | --- | --- | --- | --- |
| Conformer | 5.69% | 10.56% | — | 较干净朗读类基准最优 |
| E-Branchformer | — | — | 22.44% | 挑战性广播数据最优 |

上表显示 Conformer 在较干净朗读类基准上给出最低错误率，E-Branchformer 在挑战性广播数据上最优，二者没有一方全面主导，这正是论文同时将两者扩展到更大规模的原因。表的限制是只呈现论文正文明确写出的最优数字，未列出 Transformer 基线在同一表的完整对应值，完整多配置对比需回到原文大表，且该结论只在 Base 规模和固定预训练数据条件下成立，不能直接推广到更大规模。

### 更大规模下结构优势是否还存在

跨规模结果显示数据和结构的作用随规模变化。与相同配置的此前芬兰语基线相比，本文 Transformer 在域内表现相当，域外总体更好，在挑战性广播 KAVI 上最一致，带来 9.5% 到 12.8% 相对词错误率下降。这支持严格过滤的无约束存档比人工挑选较干净来源加最小预处理更有效的判断，且没有损伤域内性能。下表比较 X-Large 规模 Transformer 的广播泛化表现，指标仍为词错误率越低越好。

下表说明 X-Large 规模下 Transformer 在真实广播集上的表现及其相对基线的改进，比较条件是相同 Transformer 配置下仅预训练数据不同，指标方向为词错误率越低越好。

| 比较维度 | KAVI 词错误率 | 相对基线改进 | 参数规模 | 结论范围 |
| --- | --- | --- | --- | --- |
| X-Large Transformer | 19.54% | 9.5-12.8% 相对词错误率下降 | 约 965M | 广播域外最一致 |

上表的主要收益是即使结构不变，仅靠更大且经严格过滤的预训练数据也能改善真实广播泛化，代价是需要处理 2,100,000 小时原始音频和大规模预训练算力。限制是域内提升不大，且到 X-Large 规模后卷积增强结构扩展不均匀，出现特定领域退化，说明接近 1,000,000,000 参数时容量缩小了结构间差距，标准 Transformer 扩展最稳定。

### 加深模型在 Large 规模为何不再稳定

深度与宽度的权衡在 Large 规模出现转折。Base 规模更深配置有益，但 Large 规模 36 层变体域内有竞争力，泛化不一致。下表整理论文报告的深层变体代价，比较问题是固定参数量下继续加深减宽是否值得，指标为相对变化。

下表比较 Large 规模 36 层相对 24 层同结构在域外集上的变化，行是两种卷积增强后端，列是退化幅度和特定基准，负面结果用于说明加深的代价。

| 后端 | KAVI 相对变化 | Common Voice 相对变化 | 总体域外增益范围 | 公平条件 |
| --- | --- | --- | --- | --- |
| Conformer 深层 | 5.8% 相对退化 | — | 31.0-36.7% 相对词错误率下降区间内 | 同参数量加深减宽 |
| E-Branchformer 深层 | — | 21% 相对落后 | 31.0-36.7% 相对词错误率下降区间内 | 同参数量加深减宽 |

上表说明在 Large 规模平衡宽度与深度对稳定泛化很关键，Conformer 深层在 KAVI 上相对退化，E-Branchformer 深层在 Common Voice 上相对落后较多。另一方面，Base 和 Large 规模卷积增强编码器在域外总体优于 Transformer，在 Common Voice 上增益尤其大。限制是这些相对百分比是跨配置聚合描述，具体每个测试集的最优层数仍需查原文大表，且未胜出项表明加深并非普遍有效。

### 过滤阈值如何影响保留量和识别错误率

过滤试验回答质量与数量的权衡。论文报告在相近保留率约 72% 时，阈值负 0.2 的置信度过滤在 4 个验证基准中的 3 个上低于仅语言标识过滤。阈值从负 0.3 收紧到负 0.1 过程中，性能在负 0.15 到负 0.1 区间趋于稳定，负 0.1 在议会数据上最低且未出现性能下降，同时保留 471,000 小时即去重后数据的 53%，因此被选为后续试验阈值。论文总结为置信度过滤相对语言标识过滤有 3% 到 7% 相对词错误率改进，尽管训练集更小。

下图为过滤标准对验证词错误率和数据保留率影响的导读，横轴为不同过滤条件，左侧纵轴为词错误率越低越好，右侧纵轴为保留率，适合观察收紧阈值时错误率与数据量的变化是否同步。

> **看图路径：** 1. 先看横轴从 VAD、LID 到不同置信度阈值的排列顺序；2. 再比较四条词错误率曲线随阈值变严的变化趋势；3. 最后看虚线保留率曲线在 -0.1 处下降到约一半的位置

![原论文 Fig. 1：Impact of filtering criteria on downstream validation WER and pretraining data retention rate.](/audio-paper-digest-blog/images/papers/2610.13102/figure-1-08bb11054480d759.png)

*论文图 1。原论文 Fig. 1:：“Impact of filtering criteria on downstream validation WER and pretraining data retention rate. All confidence thresholds (C_char\geq\tau) are applied to deduplicated VAD segments.”。*

该图显示虚线保留率随阈值收紧持续下降，到负 0.1 时降至约一半，而 4 条词错误率曲线总体呈下降或平稳趋势，没有因数据减少而明显反弹。语言标识过滤的保留率与负 0.2 阈值相近，但前者在多数基准上错误率更高。图中可辨认的趋势支持论文选择负 0.1 的理由，即在保留足够数据量的前提下采用最严格且不损伤性能的阈值，但具体每个点的精确数值在图中难以读出，应以正文描述和后续表格为准。

### 结论在什么条件下才成立还有何缺口

结论成立依赖 3 个条件。第一，过滤结论依赖用芬兰语识别模型打分的设定，如果识别模型本身偏差大或目标语言资源极少，置信度代理质量可能不准，论文未报告误判率与语言覆盖的系统评估。第二，结构结论依赖固定参数量和固定 471,000 小时预训练数据，以及 6 个芬兰语测试集，换语言、换数据量或换评测领域后最优结构可能变化，尤其 X-Large 规模 Transformer 最稳的结论不能反推小规模也用 Transformer。

第三，存档因版权和广播许可不能再分发，他人无法完全复现相同预训练数据，只能复用公开模型或自建类似存档。此外，论文未测量延迟、推理开销和训练成本与精度的完整权衡，不能承诺卷积结构在部署延迟上也更优。相关性不等于因果，置信度高与识别好相关，但未证明去掉低置信度必然因果提升所有下游任务。

### 复现第一步做什么与资源如何获取

复现应从可获得的部分开始。第一步是准备语音活动检测和识别打分环境，按论文先对自有广播音频做语音活动检测切分，再用芬兰语识别模型生成转写并计算排除空白的平均字符对数概率，按阈值筛选，同时记录保留率与语言构成，避免只看词错误率而忽略数据量变化。第二步是固定微调数据和评测划分，用相同 4.6K 小时转写微调并在域内和域外分别评测。

资源方面，论文给出模型公开仓库链接为第三方托管地址，请求中该链接本次可达，但这只证明链接可访问，不证明作者已开源权重或可运行系统，需要读者自行核对仓库中的模型文件、许可和使用说明。语言标识模型链接本次未能确认可达，应视为来源未确认而非技术缺陷。广播存档本身不能再分发是版权限制，不是方法缺陷。

### 什么时候值得尝试与还需要补什么验证

当手头有大量无约束多语言广播存档，且已有质量尚可的目标语言识别模型可用于打分时，值得尝试先去重再用严格置信度阈值筛选，论文支持优先保证质量而非数量，尤其在 Base 等参数受限场景和域外广播测试中有望获得较大增益。当算力允许接近 1,000,000,000 参数时，标准 Transformer 可能是更稳的选择，而不必坚持卷积增强结构。

还需要补的验证包括在其他语言和更小数据量下重复过滤试验，报告筛选的误杀率和语言分布变化，以及补充训练与推理成本、延迟和不同随机种子的稳定性分析。对刚入门的研究生，建议复述关键步骤为：2,100,000 小时经语音检测到 1,200,000 小时，去重到 890,000 小时，置信度负 0.1 过滤到 471,000 小时，再做 wav2vec 2.0 预训练和 CTC 微调，最后分域内域外报告词错误率并说明比较条件。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.13102v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
