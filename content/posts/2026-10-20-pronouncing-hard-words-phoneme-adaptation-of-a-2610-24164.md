---
title: "Pronouncing Hard Words: Phoneme Adaptation of a Pretrained Conversational Text to Speech Model"
date: 2026-10-20
draft: false
tags: [文本到语音, SFT, 语音, 医疗音频, 人类参与评测]
categories: [论文速递]
description: "本文要解决会话式语音合成读不准罕见药名的问题，用词表扩展加音素增强微调学会读 ARPAbet 音素，再用无需训练的上一轮参考发音稳定输出，在 7,500 条药物评测上把严格正确率从 54.6% 提高到 90.7%，但人工听感优势只在小子集上成立且置信区间重叠。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.24164"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "给难读药名加上音素控制：会话式语音合成的发音改造"
paper_digest_original_title: "Pronouncing Hard Words: Phoneme Adaptation of a Pretrained Conversational Text to Speech Model"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.24164v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.24164v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.24164v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"application","id":"application.medical","label":"医疗音频"},{"facet":"method","id":"method.human-evaluation","label":"人类参与评测"}]
paper_digest_primary_method: "SFT"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文要解决会话式语音合成读不准罕见药名的问题，用词表扩展加音素增强微调学会读 ARPAbet 音素，再用无需训练的上一轮参考发音稳定输出，在 7,500 条药物评测上把严格正确率从 54.6% 提高到 90.7%，但人工听感优势只在小子集上成立且置信区间重叠。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yashish M. Siriwardena"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dinesh K. Gnanasekaran"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tanmay Laud"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shinji Watanabe"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Subhabrata Mukherjee"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shanil Puri"}]
paper_digest_abstract_sha256: "c7c500854c2ac0a4c33a471d5c1a98b8f6bd0c7b7ead37e81d674028cb652e18"
paper_digest_sidecars: {"citation.bib":{"sha256":"4fa67674c77db103f17d5affa1b00108127fc280a20032e8eff74808dc457891","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24164/citation.bib"},"citation.json":{"sha256":"affb5b1a078d4c348938676607eec4539c23a15f7715be59b9176ea5faf038b0","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24164/citation.json"},"citation.ris":{"sha256":"b994e92a91419953112999f24743da302e839d6563c7f628631d182333204c86","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24164/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"a93719819b6e4145a31e6e7a7062d79235222af5114928bcf3366a744f76c41b","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24164/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "0757b7d9c5d3fcc624fd69db0b954ac159364109d24c8d9f8d84a97c0baae18d"
paper_digest_api_reader_plan_sha256: "d8676dfb48bcf53647fbcab80e347cf64dba007b509177de66f742f479632668"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2a9e1d8d1298f137f6e5f9311b311aa4eb1598fce3341323e2e950a1534ec13b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "88c0284575710a36b85b122964e2cf8531a5fad5c28d116ed6107195a9dad95a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f677cd3e52479527a08175834b2bfb69885c8597b809d567c7bd7c375207ba79"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5601a2a22126d460eef6ee5e1b251b4e60016ae8abf6eac1790478e9a0d9560a"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 给难读药名加上音素控制：会话式语音合成的发音改造

> 英文题目：*[Pronouncing Hard Words: Phoneme Adaptation of a Pretrained Conversational Text to Speech Model](https://arxiv.org/abs/2610.24164v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)
- **研究方法**：[SFT](/audio-paper-digest-blog/papers/?concept=method.sft)；[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **应用**：[医疗音频](/audio-paper-digest-blog/papers/?concept=application.medical)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yashish M. Siriwardena：机构信息未能在本次解析中与作者逐人可靠绑定
- Dinesh K. Gnanasekaran：机构信息未能在本次解析中与作者逐人可靠绑定
- Tanmay Laud：机构信息未能在本次解析中与作者逐人可靠绑定
- Shinji Watanabe：机构信息未能在本次解析中与作者逐人可靠绑定
- Subhabrata Mukherjee：机构信息未能在本次解析中与作者逐人可靠绑定
- Shanil Puri：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音代理常把文本回复交给对话式语音合成模型朗读，模型需结合对话历史调整表达，但罕见药名的正确读法无法从拼写推断，读错会影响信任。论文从已完成训练的FireRedTTS-2出发，只改文本侧接口，不改声学编码器和解码结构，以保留对话条件与零样本克隆能力。第一步扩展词表，新增131个ARPAbet（美国英语音素标注集）音素及起止边界特殊字符，占据嵌入表空闲序号而无需改变模型尺寸，得到可读混合输入的分词器。第二步用该分词器做音素增强的持续监督微调，以一定概率把普通词整体替换为ARPAbet特殊字符，再与16码本声学帧交织，由主干预测首个声学码本、深度解码器补全其余码本并联合优化，训练全程不见药名。推理时把目标句的音素标注结果与前一轮由另一说话人朗读的孤立药名录音拼接，前者提供准确发音内容，后者作为对话上下文稳定声学实现，再生成目标载体句。与只接受音素输入的传统模型不同，该方法同时利用文字语义、音素控制和多轮声学条件。在7500条临床药名评测上，选用模型达到Gemini判定正确率90.7%，高于无音素增强的54.6%，人类盲听子集上为84%正确。结论只适用于已知难词且有精选参考录音的英语ARPAbet情形，未验证其他音素体系和主干模型。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://phoneme-adaptation.netlify.app/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音助手为什么需要会话式语音合成

本文面向的语音助手是自动语音识别、语言模型、语音合成串起来的流水线。用户说话先被识别成文字，语言模型生成回复文字，最后由语音合成把这段文字读出来。关键在于，助手是多轮对话，当前轮的语气、语速和说话人应该与上文衔接。

会话式语音合成就是为这种场景设计的，它在生成当前句时，会把之前的用户输入和已生成的语音轮次作为条件，流式地生成下一段。原文提到的 FireRedTTS-2、MOSS-TTSD、CoVoMix2 和 Sesame CSM 都属于这一类。与之相对，无状态语音合成每次只合成孤立的一句话，不看历史，比如 Qwen3-TTS 和 CosyVoice 3 在本文的划分里就被归为无状态。

**会话式语音合成 × 无状态语音合成：** 会话式语音合成指合成当前轮时会以前文文本和音频轮次为条件，能保持跨轮连贯和说话人延续；无状态语音合成指每一句独立合成，不看历史轮次。本文的参考偏置之所以只对前者有效，正是因为它需要把上一轮音频作为上下文条件，而无状态模型没有这个输入位置。

对刚入门的读者来说，可以这样理解分工：会话式模型多了一个对话记忆接口，能接受跨轮的文本加音频历史；无状态模型没有这个接口，单句质量可能很好，但跨轮一致性和参考发音的利用方式完全不同。这也决定了后文的推理时参考偏置为什么只能在会话式骨干上实现。

### 已有工作提供了发音控制，但缺了对现成大模型的改造

经典语音合成流水线有词典和字音转换模块，明确管发音。端到端模型把字形到声音的映射做成了隐式决策，质量上去了，但想指定罕见名字的读法反而变难。此前有 3 条路线：混合字形和音素输入、做音素感知的文本编码器、合成后再纠正发音。

另一类是原生就接受音素的模型，比如 VITS、FastSpeech2 和 YourTTS。它们可以直接吃音素，但按原文的定位，它们是单句合成，缺少对话条件、零样本克隆和语音助手需要的表现力。也就是说，问题不是能不能做一个接受音素的新模型，而是能不能不重训一个大模型，就给已有的会话式大模型补上发音控制。

偏好优化类的后训练如 DPO 和 GRPO 需要额外优化，Qwen3-TTS 就用了 DPO。本文刻意避开这类需要新一轮重优化的路线，转而用继续微调加推理时干预。评测方面，常规做法是在干净单句上测 UTMOSv2、DNSMOS 或 Seed-TTS 集合，本文在此之外，专门为药物发音做了参考录音对齐的人工听感校验。

### 难词的发音为什么从拼写猜不出来

本文聚焦的难词是药物名，比如 Mounjaro 和 Xiidra。它们通常很短，但拼写与发音对应不规则，而且新药不断出现，词表增长很快。原文强调，这类实体太稀疏、变化太快，靠预训练、中训练或后训练的数据覆盖是不现实的。

**字形 × 音素：** 字形是文本的拼写形式，比如 Mounjaro 这串字母；音素是实际发音的离散单位，本文用 ARPAbet 符号表示。药名难就难在从字形猜不出音素，模型按常见拼读规律会读错，所以本文要允许在字形序列里直接插入一段明确的音素，让发音不再依赖猜测。

从任务角度看，输入是助手要读的句子文字，目标是生成自然、连贯且把其中药名读对的语音，必须保留的信息包括对话历史、说话人特征和目标药名的正确发音，输出是波形。读错一个药名，可能主导整轮交互的感知质量，在医疗场景还可能带来安全风险。这是本文把发音正确性单独拿出来评测的原因。

### 改造的总流程：先让模型认识音素，再用参考录音稳住难词

整体改造分两大步。第一步是训练侧的音素适配：扩展词表加入 ARPAbet 音素和边界标记，然后在约 50000 小时的多语料混合数据上继续做监督微调，训练时以一定概率把普通词替换成音素形式，让模型学会在文本流里读音素。第二步是推理侧的参考偏置：对已知难度的药名，在生成目标句之前先放一个人工录制的孤立药名轮次作为对话上下文，不改参数，靠对话条件把发音拉向参考。

下面这张图是理解全流程的关键，它把数据、增强、序列组织、模型结构和优化目标画在一条链路上，请按编号顺序看数据如何一步步变成可训练的序列。

> **看图路径：** 1. 先从左到右看 1 到 5 的编号，确认数据混合、随机增强、序列交错、双变换器、优化的先后关系；2. 看第 2 步分叉处 1-p 与 p 两条支路，确认普通词保留字形还是替换为音素；3. 看第 3 步中间橙色音素段与两侧灰色文本、蓝色音频的位置关系；4. 看第 4 步上下两个方框，区分主干生成 C0 与深度解码器生成 C1 到 C15

[![原论文 Figure 1：Overview of phoneme-aware continued SFT.](https://arxiv.org/html/2610.24164v1/figures/figure_1.jpeg)](https://arxiv.org/html/2610.24164v1/figures/figure_1.jpeg)

*论文图 1。原论文 Figure 1:：“Overview of phoneme-aware continued SFT.”。*

这张图确实可见 5 个阶段：左侧是约 50000 小时的混合数据，注明包含 Fisher English、HiFiTTS-2、UltraVoice、Expresso 和内部播客语料；第二步是按概率 p 做伯努利采样的随机增强，分出保留字形和替换为音素两条支路，并举例 Is this Mounjaro 如何变成带 arpa 标记的音素段；第三步把字形词元、音素词元和声学帧交错成一个序列；第四步画出主干生成第一个码本、深度解码器生成其余码本；第五步标出总损失由三部分组成并从预训练 checkpoint 初始化。这张图帮助读者建立样本视角：一个句子先被决定哪些词换成音素，再被排成文本加音频的交错序列，最后被双变换器建模。

### 词表扩展：新音素放在哪里，句子长什么样

起点是 FireRedTTS-2 的后训练 checkpoint。它是一个长时多说话人模型，核心是流式离散语音分词器加双变换器自回归解码器：大主干预测第一个声学码本，小深度解码器补其余码本，总参数约 1,700,000,000。每个时间步是一个 17 维帧，包括 16 个声学码本坐标和一个文本词元坐标。改造只动文本侧接口，声学分词器和解码结构不动。

词表上新增 131 个特殊词元，包括扩展的 ARPAbet 音素表和<|arpa_start|>、<|arpa_end|>两个边界标记。原文指出原词表有 151,665 个文本词元而嵌入表有 151,936 个位置，因此新符号占用空闲索引，不用改变模型尺寸。

**ARPAbet × 边界标记：** ARPAbet 是本文采用的一套英语音素书写方式，每个音素做成一个特殊词元；边界标记<|arpa_start|>和<|arpa_end|>是包在音素段前后的两个特殊词元，用来告诉模型这里开始是发音拼写、哪里结束。二者搭配后，模型可以在普通文本流里准确切出需要按音素读的子串，而不打乱周围文字。

举例来说，Please say hello again 这句话里，hello 可能被整体替换成<|arpa_start|>加一串<|arpa_HH|>、<|arpa_AH0|>等再加结束标记，周围单词仍是普通文本。这样每个音素和 span 边界都是独立的特殊词元，模型能明确知道哪一段要用发音拼写来读。需要强调的是，训练用的标注词来自 CMU 发音词典抽取的普通词，覆盖所有语料，不含药名和临床模板。

### 继续微调的损失在约束什么

继续微调保留 FireRedTTS-2 的交错文本音频格式。超参数 phoneme_tagging_rate 记为 p，取值在 0 到 1 之间，表示每个符合条件的普通词被替换成音素的概率。不被标注的词和样本保留字形，目的是减少在普通合成上的回退。p 在 0 到 100% 之间扫了 6 个值，用来选工作点。

训练目标是双变换器目标再加对新文本词元的强调，先说明它要约束什么：既要预测对声学码本，又要让新加入的音素和边界词元学到有用的表示。关键符号里，主干损失管第一个码本的交叉熵，深度解码器损失管其余码本且只在随机八分之 1 帧子集上计算，文本位置损失只作用于新增的 ARPAbet 和边界词元。

\[\mathcal{L}_{\mathrm{SFT}}=2\bigl((1-\lambda_{\mathrm{dec}})\mathcal{L}_{\mathrm{bb}}+\lambda_{\mathrm{dec}}\mathcal{L}_{\mathrm{dec}}\bigr)+\lambda_{\mathrm{text}}\mathcal{L}_{\mathrm{text}},\]

公式中系数按原文设置为深度解码器权重 0.6，文本损失权重 0.1，前面还有系数 2。其中 2 和 0.6 继承自 FireRedTTS-2 原目标，0.1 是为了加强新词元梯度且没有做消融。按实际运算顺序，模型先形成交错序列，接着主干和深度解码器分别产生各自码本的预测并计算三项损失，再加权求和用于更新。原文没有披露超出学习率、步数之外的梯度细节，因此不能从模型名猜测冻结或更新范围，只能说起点是后训练 checkpoint 并联合优化主干、深度解码器和文本损失。

**主干变换器 × 深度解码器：** 主干变换器是约 15 亿参数的解码器，负责根据交错的文本和音频历史预测第一个声学码本；深度解码器是约 2 亿参数的小变换器，负责在已知第一码本的基础上补齐其余 15 个码本。二者分工后，文本侧改造主要影响主干的发音选择，而音质细节仍由深度解码器完成，声学结构不用重做。

### 推理时参考偏置：不改参数如何利用上一轮录音

微调让模型能读 ARPAbet，但具体到某个难实体，多次独立生成仍可能不稳定。推理时参考偏置利用主干的多说话人对话条件来稳定已知难词。做法是：目标是生成 Take your Mounjaro dose today，就在它前面加一个[S1] 轮，内容只有 Mounjaro 这个词并配一段孤立人工录音，然后在[S2] 轮生成目标载体句。

**音素增强微调 × 推理时参考偏置：** 音素增强微调是通过继续训练让模型真正读懂新加的音素词元，属于参数更新；推理时参考偏置是不改参数、只在生成目标句之前先放一个已录好的孤立药名轮次，利用对话条件把发音往参考靠。前者解决能不能读音素，后者解决对已知难词稳不稳定，二者组合才得到最高的药物发音正确率。

这里要讲清信息条件：参考库里有多个说话人，[S1] 和[S2] 占据不同的说话人槽位；没有提供目标句的音频，孤立的[S1] 例子只作为先验对话上下文，而不是对[S2] 做教师强制。代价是每个目标实体都需要一条精选参考发音，没有它就无法使用该机制。原文明确说无状态基线每次独立合成一句话，无法接受等价的声学上一轮提示，这正是会话式结构带来的实际优势。

### 训练用了哪些数据和多大的计算

继续微调的数据混合约 50000 小时，包括 Fisher English 约 1960 小时负责对话，HiFiTTS-2 约 20000 小时负责干净朗读，UltraVoice 约 830 小时和 Expresso 约 46 小时负责富有表现力和副语言的内容，再加约 28000 小时内部对话语料。混合里不含药名和临床模板，因此后文 300 个药的评测全部是域外，测的是泛化发音而不是记忆。

训练从后训练 checkpoint 初始化，最多跑 30000 步、上限 50 轮，在 8 块 H200 上用融合 AdamW 和 bf16，峰值学习率 1 乘 10 的负 6 次方，余弦衰减，500 步预热，全局批量 256。原文没有报告消融文本损失权重或冻结策略的效果，也没有给出超出上述配置的显存和时间分解，复现时只能按相同量级准备多卡对话加朗读混合数据，并注意标注质量会影响音素学习。

### 评测如何组织：药物集、通用集与人工听音

自动评测用两套集合。drug_ref 是药物发音评测，共 7,500 条，由 300 个药乘 5 个模板乘 5 次生成构成。因为训练任何阶段都没见过这 300 个难药名，它测的是泛化。Seed-TTS 测通用合成和克隆能力。药物发音用多模态评判 Gemini-3.1-Pro 在温度 0 下对照人工参考录音判 correct、partial 或 wrong，报告严格正确率即 correct 占比，取 5 次生成的均值加标准差；另有一个 wav2vec 2.0 在实体片段上的音素错误率作为次要指标。

300 条 ARPAbet 和国际音标对照表是内部整理的，对应参考发音单独录制，并经语言学家和临床人员验证。用于 FireRed 参考偏置的[S1] 上下文和评判参考是同一条每药录音，但被评的[S2] 片段是不同说话人槽位和不同载体句，不是重建该录音。基线按近期、流式或低延迟以及是否带原生发音控制来选，分为会话式和无状态两组，但原文说明因硬件和指标定义不一致而不直接比较延迟数字。通用质量还报告 Seed-TTS-Eval 的词错误率、说话人相似度和在 drug_ref 上的 UTMOSv2。

人工评测是 12 名成年听众在 drug_ref 子集上用与 Gemini 相同的三档标准打分，系统身份盲化、顺序随机。子集按系统和 Gemini 标签分层选了 10 个药，每个药 5 个模板，每系统 50 条，每人评 73 到 75 条，每条有 3 到 4 个独立评分。多数投票规则是三分中至少两票 correct 或四分中至少三票 correct 才算人工正确，并列取较低的顺序中位数。报告多数投票正确率的 95% Wilson 区间、三档评分的顺序 Krippendorff 一致性，以及与 Gemini 在二分类和三分类上的一致率和 Cohen kappa。

### 主结果：药物发音大幅提升，通用质量基本不掉

比较的问题是：在同样的药物集上，音素适配加参考偏置是否比会话式基线和无状态基线读得更准，同时通用合成指标是否保持。公平条件是 FireRed 系列中除 phon_0 和原始基线用纯字形外，其余都给 ARPAbet 并加 FireRed 特有的参考偏置；CosyVoice3 给 CMU-ARPAbet，标注 IPA 的行给内联国际音标，其余外部系统给字形且都不加 FireRed 偏置。指标方向是药物正确率越高越好，音素错误率和词错误率越低越好，UTMOSv2 和说话人相似度越高越好。

| Model | #Params | Drug-pron ↑ | PER ↓ | UTMOSv2 ↑ | WER ↓ | SIM ↑ |
| --- | --- | --- | --- | --- | --- | --- |
| phon_0 | 1.7B | 54.6 ± 0.3 | 25.61 | 3.49 | 2.01 | 67.1 |
| phon_20 | 1.7B | 86.7 ± 0.7 | 22.39 | 3.48 | 1.81 | 67.2 |
| phon_40 | 1.7B | 90.9 ± 1.0 | 21.72 | 3.48 | 1.87 | 67.1 |
| phon_60 (ours) | 1.7B | 90.7 ± 0.6 | 22.20 | 3.49 | 1.80 | 67.2 |
| phon_80 | 1.7B | 91.5 ± 0.3 | 21.41 | 3.49 | 1.92 | 66.6 |
| phon_100 | 1.7B | 91.8 ± 0.4 | 21.13 | 3.50 | 1.81 | 65.6 |
| conversational TTS baselines |  |  |  |  |  |  |
| FireRedTTS-2 (base) | 1.7B | 52.3 ± 0.5 | 25.81 | 3.41 | 1.95 | 66.5 |
| MOSS-TTS-Realtime [11] | 1.9B | 53.0 ± 0.5 | 24.27 | 3.24 | 1.97 | 68.9 |
| stateless TTS baselines |  |  |  |  |  |  |
| CosyVoice3 (CMU-ARPA) | 1.5B | 82.6 ± 1.2 | 25.52 | 3.62 | 2.22 | 72.0 |
| VoxCPM2 | 2B | 86.1 ± 0.7 | 22.03 | 3.45 | 1.84 | 75.3 |
| ElevenLabs Turbo v2 (IPA) | — | 73.4 ± 0.5 | 20.51 | 3.46 | — | — |
| ElevenLabs v3 (plain) | — | 68.0 ± 0.6 | 20.03 | 3.38 | — | — |
| ElevenLabs v3 (IPA) | — | 60.9 ± 0.5 | 20.59 | 3.35 | — | — |
| Inworld TTS-2 (IPA) | — | 51.5 ± 1.1 | 26.06 | 3.69 | — | — |

这张大表显示，phon_60 达到 90.7% 加减 0.6%，phon_100 为 91.8% 加减 0.4%，都明显高于 FireRedTTS-2 原始基线的 52.3% 和 MOSS 的 53.0%，也高于最强的无状态基线 VoxCPM2 的 86.1% 和 CosyVoice3 的 82.6%。通用侧 phon_60 的词错误率 1.80% 是扫参中最低，UTMOSv2 为 3.49 保持平稳，说话人相似度 67.2 与基线接近，说明适配没有破坏已报告的通用质量。但要注意音素错误率只有 20% 到 26% 的窄带变化，分辨不出正确率的大幅差异，原文因此把它降为次要指标；专有接口的词错误率和相似度缺失也不能强行排名。

**自动评判正确率 × 人工多数投票正确率：** 自动评判正确率是 Gemini 对照人工参考录音给每条合成判 correct、partial 或 wrong 后统计的严格正确比例；人工多数投票正确率是三到四名听众按同样三档打分、少数服从多数得到的正确比例。前者能测 7,500 条的大规模差异，后者检验自动评判是否与人耳一致，本文用二者在 250 条配对上的 84.8% 一致率把两者联系起来。

### 人工听感是否认可自动评判

自动评判测了 7,500 条，但最终要人耳认可。人工子集每系统只有 50 条，按系统和 Gemini 标签分层抽取，因此数值不能直接与全量自动指标对比，只能看同一批片段上人与 Gemini 是否一致。指标方向仍是正确率越高越好，括号里是 95% Wilson 区间。

| System | Gemini (95% CI) ↑ | Human (95% CI) ↑ |
| --- | --- | --- |
| phon_60 (ours) | 96.0 [86.5,98.9] | 84.0 [71.5,91.7] |
| FireRedTTS-2 (base) | 70.0 [56.2,80.9] | 62.0 [48.2,74.1] |
| MOSS-TTS-Realtime | 68.0 [54.2,79.2] | 68.0 [54.2,79.2] |
| VoxCPM2 | 88.0 [76.2,94.4] | 82.0 [69.2,90.2] |
| ElevenLabs Turbo v2 | 76.0 [62.6,85.7] | 78.0 [64.8,87.2] |

表后解释需要谨慎：phon_60 人工多数投票为 42/50 即 84.0%，区间 71.5% 到 91.7%，VoxCPM2 为 82.0%，两者区间与所有基线在该 50 条子集上都重叠，所以不能说人工显著更优。同一批上 Gemini 给 phon_60 打了 96.0%，比人工高 12 个百分点，可能部分来自共享偏置和评判参考，但无偏置的 FireRed 基线也有 8 个百分点的差距，因此原文把 84% 当保守估计。全量 250 条配对上，人与 Gemini 二分类一致 84.8%，kappa 为 0.57，配对 McNemar 检验 p 为 0.07 不显著，说明 4.8 个百分点的总体差异在统计上站不住。听众之间两两完全一致 79.7%，顺序 Krippendorff 为 0.58，属中等一致，意味着难词听感本身有一定模糊性。

### 提升里多少来自微调，多少来自参考录音

要回答的第二个问题是：如果拿掉音素标注或拿掉推理时参考，效果掉多少。phon_0 对照组用了同样的继续微调混合和算力但不做音素增强，推理也用纯字形，结果只有 54.6%，只比未动的 FireRedTTS-2 基线高 2.3 个百分点，说明光是继续训练解释不了多少增益。从 20% 标注率开始，配合推理时给 ARPAbet，正确率跳到 86.7%，之后 40% 到 100% 都在 91% 附近平台，音素错误率也在 21% 到 22% 附近，因此原文把扫参当选型工具而不是越大越好。

下表专门分离参考偏置的作用，比较的是同一 checkpoint 加与不加[S1] 参考轮次的差异，指标仍是药物正确率越高越好。有偏置一侧依赖每种药一条精选录音提供上一轮发音，无偏置一侧只靠音素微调本身读取 ARPAbet。

| Variant | w/ biasing ↑ | no biasing ↑ |
| --- | --- | --- |
| phon_60 | 90.7 ± 0.6 | 84.2 ± 3.4 |
| phon_100 | 91.8 ± 0.4 | 83.2 ± 3.4 |

表后解释很直接：phon_60 从无偏置的 84.2% 加减 3.4% 提高到有偏置的 90.7% 加减 0.6%，phon_100 从 83.2% 加减 3.4% 提高到 91.8% 加减 0.4%，原文概括为提升约 6 到 9 个百分点、五次方差收紧约 6 到 9 倍。代价同样清楚：标准差大幅收紧依赖上下文提示，且需要为每个实体维护录音库。选 phon_60 而非数值最高的 phon_100 作为工作点，是因为它在发音接近顶部、通用词错误率最低且相似度更稳的综合排序下更均衡。

### 只给音素输入能否解决难词

第三个对照是诊断性的：经典音素输入系统是否已经解决了这个问题。比较对象是 FastSpeech2、VITS 和 YourTTS，在同样 drug_ref 和同样 Gemini 协议下分别测默认字音转换和直接注入正确 CMU ARPAbet 两种条件。条件不同不能与主模型比容量和数据规模，只能看接受音素是否等于读对难词。

| System | G2P front-end↑ | Oracle phonemes↑ |
| --- | --- | --- |
| FastSpeech2 / FastPitch | 31.0 | 66.3 |
| VITS (LJSpeech) | 41.7 | 55.2 |
| YourTTS | 32.6 | 39.6 |
| Ours (phon_60) | — | 90.7 |

结果是默认字音转换只有 31.0% 到 41.7%，即使给正确音素也只有 39.6% 到 66.3%，而本文 phon_60 为 90.7%。这支持原文的判断：能接受音素输入本身不保证把难实体的声学实现做对。限制也要讲清：这些系统与本文模型在容量和训练数据上不匹配，所以这张表是诊断而非同条件胜负，选型时不能据此说经典结构无用。

### 这些结论在什么条件下才成立

首先，90.7% 成立于有精选每药录音库的参考偏置条件，没有参考时 phon_60 是 84.2% 且波动更大。换到没有对话上下文的无状态部署，该机制无法等价使用，这是结构限制而非调参能解决的。

其次，人工 84% 对 82% 的比较成立于分层抽取的 50 条每系统子集，置信区间重叠，只能说自动指标方向与人工大体一致，不能宣称人工显著超越最强基线。全量 7,500 条的显著优势只在 Gemini 自动指标下成立，其有效性依赖 Gemini 与人工多数投票 84.8% 一致和 kappa 0.57 这一中等一致水平。

最后，配方只验证了英语和 ARPAbet，对其他音素字母表和其他骨干是否迁移仍是未来工作；它对音素标注质量敏感，且只能覆盖库中已知的难实体，新词需要先整理音素和录音。FireRedTTS-2 在这里是案例研究，不是架构无关的泛化证据。

### 复现第一步做什么，需要准备什么

复现先从词表和数据做起：按演示站点的 131 词元清单加入 ARPAbet 和边界标记并占用空闲索引，确认不用改变模型尺寸；用 CMU 发音词典对普通词按标注率做随机替换，绝不在训练中混入评测的 300 个药名和临床模板，否则域外结论不成立。训练侧按约 50000 小时混合、峰值学习率 1 乘 10 的负 6 次方、最多 30000 步的量级准备，推理侧为每个目标药准备一条孤立人工录音并放在不同说话人槽位做[S1] 上下文。

评测要同时跑自动和人工两条线：自动用 Gemini-3.1-Pro 温度 0 对照独立参考录音判三档并报告严格正确率的五次均值加标准差，通用侧用 Seed-TTS-Eval 的词错误率、说话人相似度和 UTMOSv2 确认没有回退；人工用盲化随机、3 到 4 人每条、多数投票的规则在分层子集上校验。关于资源可用性，原文只给出了第三方演示链接用于音频样本、评测标签和评判提示词，本次核验显示该链接可达，但它只证明论文提到了该链接，不能据此说作者已开源代码或权重，代码、权重和可运行系统要分开确认。

### 什么时候值得尝试，还缺哪项验证

当你的语音助手已经是会话式结构，且痛点集中在少量已知难实体如药名、人名时，这个配方值得尝试：先做音素增强微调获得读 ARPAbet 的能力，再为这些词维护参考录音以换取稳定性和更小的生成方差。如果部署是无状态单句合成，或者难词完全开放、无法预先建库，那么第二步的收益拿不到，只能得到无偏置约 84.2% 的水平。

还需要补的验证包括：更大规模、非员工志愿者的人工听感以收窄置信区间；跨骨干和跨音素体系的迁移；标注噪声和参考录音说话人变化时的鲁棒性；以及流式首包延迟和实时率等部署成本的实测。原文没有测量误判率、延迟和成本的改善，因此不能承诺这些会变好，训练资源、推理开销和实际延迟要分开讨论。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.24164v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
