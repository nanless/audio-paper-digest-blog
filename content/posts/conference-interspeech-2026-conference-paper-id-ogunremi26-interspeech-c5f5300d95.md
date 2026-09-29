---
title: "Turning Speech Language Models into Multilingual Listeners"
date: 2026-09-28
draft: false
description: "论文用翻译加语音合成批量构造多语言语音问答数据来解决多语言指令数据稀缺问题，最强证据是微调后的 Qwen2.5-Omni 在 23 种语言上平均以 60.6% 胜率超过微调前版本，代价是合成语音自然度偏低且部分语言仍需大量人工改写翻译。"
tags: ["数据集", "指令微调", "多语言", "音频问答"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:ogunremi26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/ogunremi26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/ogunremi26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e4ad7bc3308c8260ed085be74415e599e0fd44952a9d0b28227265d712bd1147"
paper_digest_api_reader_plan_sha256: "fcb179f314de0372f7fe80ca35288518e5f279bfea2b3019683ad1d6b04aac2d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b0e790b694be952949e63b5aba7e0b9a8f365cd14aa2c9f9fe14a319c627b5c0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f7457f34ae419823ce2eebfda442a80064fb9217584a3ff0807b6c3dda8c74a9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c77196356acc41e007c97abf7d42df26a33bbe05b73e5a36f3bdf6fc844a45fe"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c6e638d831fcbb25da412ab58476c5b4363a455796ea205b86cf00b4b7985f2f"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.instruction-tuning","label":"指令微调"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "指令微调"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 合成语音问答能否把语音语言模型带到二十三种语言

> 英文题目：*Turning Speech Language Models into Multilingual Listeners*

> 会议身份：`conference:interspeech:2026:conference-paper-id:ogunremi26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/ogunremi26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/ogunremi26_interspeech.pdf)

标签：#数据集 #指令微调 #多语言 #音频问答

评分：**7.6/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前25% | 文档类型：数据集与基准

## 👥 作者与机构

- Tolúlọpẹ́ Ògúnrẹ̀mí：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Jurafsky：机构信息未能从会议 PDF 纯文本可靠映射
- Christopher D. Manning：机构信息未能从会议 PDF 纯文本可靠映射
- Ahnmet Üstün：机构信息未能从会议 PDF 纯文本可靠映射
- Martijn Bartelds：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音语言模型需以语音提问为输入、开放式文本回答为输出，实际难点是多语种口语指令数据稀缺且复杂任务评测长期局限于英语。先以英语Voice Assistant 400K问答文本为输入，用Seamless M4T v2 Large翻译并输出22种语言译文，再以该译文为合成底本，用XTTS、Seamless M4T与MMS按语言分工合成问题端多说话人语音并输出语音问题加文本答案三元组，最后以测试划分每语言200对三元组为输入，经Prolific母语校对并拼接CommonVoice与CoVoST-2输出MULTISPEECH-BENCH供大模型偏好裁判。与已有英语中心合成数据相比，关键差异是以翻译修正率加合成自然度与内容可懂度双维评分显式验证23语种可训练性，使合成质量可追溯到下游增益。在 MULTISPEECH-BENCH 口语问答（Spoken Question Answering / SQA）上，经 MULTISPEECHQA 微调的 Qwen2.5-Omni 以60.6%平均胜率优于未微调版本，方向为微调更优并成为开源最优。该增益在希伯来语、希腊语、波斯语和捷克语等合成质量较低语言上明显减弱为大量平局，且自动语音识别（Automatic Speech Recognition / ASR）平均词错率从49.7%微升至50.4%、语音翻译（Automatic Speech Translation / AST）平均BLEU从22.7降至21.0，基本未提升。该结论的适用边界受限于合成语音质量，低自然度语言失败条件突出且真实口语外推尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 模型相关资源：<https://multispeech.github.io> — 链接可访问（HTTP 200）
- 数据相关资源：<https://huggingface.co/datasets/Mihaiii/qa-assistant> — 暂时无法访问
- 第三方资源：<https://github.com/quocanh34/Bud500> → <https://github.com/apluka34/Bud500> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么多语言语音问答不只是把语音转成文字？

这篇论文的输入是真实用户用语音直接提问，目标是模型听懂语音并用对应语言生成开放式文本答案。初学者容易把任务理解为先识别再回答，但论文要解决的是语音语言模型本身的多语言能力。白话说，语音语言模型就是能听声音、会用文字推理和回答的大模型组合，英文名是 Speech Language Model，缩写为 SLM。它的典型做法是把预训练语音编码器的输出，通过一个模态适配器映射到预训练大语言模型的输入空间，再做指令微调，使模型能按自然语言指令处理语音。

论文的起点是开放权重 SLM 主要支持英语和少数高资源语言，例如 SALMONN 主要用英语数据训练，Phi-4-Multimodal、Qwen2Audio 和 Qwen2.5-Omni 只支持 8 种语言左右。这意味着数以百万计的其他语言使用者无法使用同样的语音问答、情感识别、音频描述等能力。瓶颈不是模型结构想不到，而是多语言语音指令微调数据稀缺。传统多语言语音数据集多覆盖识别和翻译，例如 FLEURS 和 ML-SUPERB 2.0，而开放式口语问答数据只有英语的 Voice Assistant 400K 相对丰富。

**语音语言模型 × 级联系统：** 语音语言模型指直接把语音编码器输出映射到大语言模型输入空间、端到端处理语音并生成文本回答的模型，分工是保留声学信息并执行语音原生任务；级联系统指先用 Whisper Large v3 转写语音、再把文本转录送入 Aya Expanse 8B 回答的分步流水线，分工是让识别和问答各自由专长模型完成。二者搭配比较的理由是级联在传统语音任务上往往很强，能检验端到端是否真的学会了多语言语音理解，组合意义是论文用同一基准同时测两条路线，区分架构优势和数据不足的影响。

因此论文的目标不是提出全新编码器结构，而是验证一条数据路线是否成立：如果只有机器翻译和语音合成可用，能否批量生成足够好的多语言语音指令数据，并有效提升 SLM。理解这一点很关键，后面所有翻译质量、合成自然度、人工校验和微调胜率，都是围绕这条数据假设展开的证据链。

### 同类工作在输入、目标和监督上有什么不同？

按同输入、同目标、同监督来对照，论文把 SLM 分成 3 类架构路线。第一类是语音分布建模，第二类是语音文本联合分布建模，第 3 类是预训练文本大语言模型加语音编码器。第 3 类利用文本大模型的指令跟随能力，通常需要较少训练数据，能在情感、描述、问答等任务上做零样本或少样本泛化。Gemini 2.5、GPT-4o、Phi-4-Multimodal、SALMONN、Qwen2Audio 和 Qwen2.5-Omni 都属于这一大思路。论文的工作处在第 3 类路线上，没有改编码器加语言模型的基本组合，而是补多语言数据。

在评测侧，已有 AudioBench、SLUE、BLAB、AHELM 和 AIR-Bench 等基准，但论文指出它们在复杂开放式任务上只有英语覆盖。这与本文的多语言开放式指令跟随目标直接不同，所以不能把那些英语基准上的分数直接当成多语言能力的证据。在数据侧，Voice Assistant 400K 提供多样的英语问答对，但只有英语；Phi-4-Multimodal 已证明用翻译加合成语音可以增强问答，论文是把这一做法从少数语言扩展到 23 种类型多样语言，并配套人工校验和多任务基准。

这种对照说明论文的增量不在提出新模态融合公式，而在系统地回答合成数据在多大语言范围内可用。初学者复述时不要把 Whisper 识别率高直接等同于问答能力强，因为识别只要求转写正确，问答还要求理解问题、组织答案并用合适语言表达。

### 论文到底要测什么任务？

论文把评价固定为 3 个任务。第一个是口语问答，英文名是 Spoken Question Answering，缩写为 SQA。输入只有语音问题，没有附加文本提示，输出是开放式文本答案。举例来说，模型听到一段葡萄牙语语音问题，需要直接用文字回答关于蓝莓适宜酸碱度之类的问题。第二个是自动语音识别，英文名是 Automatic Speech Recognition，缩写为 ASR。

输入是语音加转写指令，输出是同语言转写文本。第 3 个是自动语音翻译，英文名是 Automatic Speech Translation，缩写为 AST。论文主要做从其他语言语音翻译到英语，输入是语音加翻译指令，输出是英语文本。
3 个任务的难度和指标不同。SQA 是开放生成，没有唯一正确答案，论文用成对偏好胜率评价。

ASR 用词错率评价，中文和日文用字错率，数值越低越好。AST 用 BLEU 和 chrF 评价，数值越高越好。这种任务划分决定了后面的结论必须分开表述：SQA 提升不等于 ASR 和 AST 同时提升，论文也确实分别报告了 3 类结果。

### 从一条英文语音问答出发，数据流水线做了什么？

先沿一个样本走完全程。起点是英语 Voice Assistant 400K 中的一条文本指令问答对，它来自 Trivia 选择题、QA Assistant 对话问答、Alpaca GPT-4 指令、语音助手身份问答和 Anthropic 的 RLHF 等来源。第一步是翻译，用 Seamless M4T v2 Large 把问题和答案一起翻译成 22 个目标语言，加上英语原文共 23 种语言。选择该模型的理由是公开免费可用，且在同等规模下初步实验优于 NLLB 等模型。第二步是合成，只合成问题侧语音，答案保持文本形式。

对 XTTS 支持的 15 种语言用 XTTS 合成，对其余语言用 Seamless M4T v2 Large 或特定语言的 MMS 语音合成模型合成。终点是每种语言约 470,000 对问答，全量约 10,800,000 对语音问题加文本问题加文本答案，总计约 9200 小时。
下图是论文给出的数据构造总览，阅读时先看主路径再看分支分工，有助于理解为什么不同语言质量不同。

> **看图路径：** 1. 先从左到右沿灰色英文数据经黄色翻译框到绿色合成框再到紫色数据集的箭头看主路径；2. 再看绿色框内 XTTS 与 Seamless M4T 与 MMS 三个子框各自列出的语言代码；3. 最后核对最右侧紫色框中三类各 10.8M 的数量说明

[![原论文 Figure 1：Summary of the dataset creation process.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d62b9f3d5933/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d62b9f3d5933/figure-1.png)

*论文图 1。原论文 Figure 1：“Summary of the dataset creation process.”。*

从像素可见，主路径是 4 个色块从左到右排列。最左灰色块标注英语 Voice Assistant 400K 问答数据，箭头指向黄色翻译块，注明用 Seamless M4T 翻译到 Aya Expanse 语言，再指向绿色多语言合成大框，最后指向紫色数据集块。绿色框内并列 3 个子框，蓝色 XTTS 框列出一组语言代码，紫色 Seamless 框列出印尼语、波斯语、罗马尼亚语、乌克兰语和越南语等，橙色 MMS 框列出希腊语和希伯来语。紫色结果框明确写出 3 种各 10.8M 的数量。这种分支设计直接解释了后面人工评分中 XTTS 语言自然度更高的现象。

为增加说话人多样性，论文对 XTTS 支持的语言利用其声音克隆能力，从 LibriVox 短片段中随机选取感知为男性或女性的声音，共形成 37 种不同声音。训练集与测试集在可能时使用不同说话人，避免说话人重叠带来虚高效果。

### 翻译、合成与人工校验各自承担什么质量责任？

翻译组件承担文本正确性，合成组件承担语音可懂度和自然度，人工校验承担质量抽查和基准清洗，三者分工不同。翻译没有逐条人工全检，而是靠后续抽样和基准子集的人工修正来暴露问题。合成按语言支持情况分流，XTTS 优先用于多数语言，其余用 Seamless 或 MMS 补齐。人工校验分两层，一层是对训练数据每语言抽 20 条问答，由至少 2 名母语者按 5 分制评价语音自然度和内容可懂度，捷克语未能获得评分；另一层是对评测用的每语言 200 条做 Prolific 语言专家复核和修正。

**机器翻译 × 语音合成：** 机器翻译负责把英文指令问答对转写成 22 个目标语言的文本，分工是解决文本侧语言覆盖；语音合成负责把翻译后的问题读成对应语言的语音，分工是解决语音侧输入覆盖。二者搭配的理由是只要某语言有可用翻译和合成系统，就能从已有英文数据派生出该语言的语音指令数据，组合意义是论文用 Seamless M4T v2 Large 做翻译、用 XTTS 与 Seamless 和 MMS 做合成，形成低成本扩展 23 种语言的流水线。

下表把论文报告的数据规模与质量数字放在一起，比较问题是合成数据的量是否足够大、质是否足够可懂。公平条件是同一套翻译加合成流水线、同一 5 分制人工标准。指标方向是自然度和可懂度越高越好，需要人工改写的比例越低越好。

| 数据与质量维度 | 指标 | 总量或范围 | 分组表现 | 对照含义 |
| --- | --- | --- | --- | --- |
| 合成自然度 | 5 分制自然度 | 1.8 至 4.0，平均约 3.0 | XTTS 组 15 种语言平均 3.3 | 合成上限决定自然度 |
| 内容可懂度 | 5 分制可懂度 | 2.4 至 4.9，平均约 4.1 | XTTS 组 15 种语言平均 4.2 | 内容可懂明显好于自然 |
| 翻译需改写率 | 基准 200 条人工修正比 | 总体 72% 需编辑 | 土耳其语 43%，中文 86% | 基准必须人工清洗后才可用 |

表后解释是，主要收益是量大且内容基本可懂，平均可懂度 4.1 高于自然度 3.0，说明模型能听清问题但声音不够自然。

具体代价是翻译错误不可忽视，评测子集总体 72% 需要编辑，中文高达 86%，土耳其语最低也有 43%。未胜出项是 MMS 和 Seamless 合成语言的自然度明显低于 XTTS 语言，希腊语和希伯来语等低资源语言受合成上限影响更大。这意味着训练数据可用，但不能把合成语音当成真实录音的同等质量。

**语音编码器 × 模态适配器：** 语音编码器负责把波形变成连续语音特征，分工是提供多语言声学表示，论文从头训练的消融模型沿用 Whisper 编码器以获得稳定多语言特征；模态适配器负责把语音特征投影到语言模型的文本输入空间，分工是实现语音与文本表示对齐。二者搭配的理由是预训练编码器已有声学能力、预训练语言模型已有问答能力，训练重点变为学习投影，组合意义是多语言扩展时不一定需要重学全部能力，而是补齐跨模态映射。

### 微调和从头训练分别更新了哪些参数？

论文做了两类训练，监督来源和参数更新范围都不同。第一类是用 MULTISPEECHQA 微调现成最强开源模型 Qwen2.5-Omni。方法是低秩适配微调，英文名是 Low-Rank Adaptation，缩写为 LoRA。做法是在每层 Transformer 的所有线性模块上加秩为 32 的低秩增量，训练约 3 轮。监督来源是合成的多语言语音问题加文本答案，训练时不附加额外文本提示，要求模型仅从语音问题学会回答。论文报告微调后 SQA 明显提升，而 ASR 和 AST 基本保持稳定，说明更新主要补了问答指令跟随，没有破坏原有识别和翻译能力。

**低秩适配微调 × 窗口级 Q-Former：** 低秩适配微调指只在 Transformer 每层线性模块上训练低秩增量、分工是用少量参数调整已有大模型行为，论文用它微调 Qwen2.5-Omni 以保留原有识别和翻译能力；窗口级 Q-Former 指在从头训练的 SALMONN 结构中连接语音编码器与语言模型的中间查询模块，分工是更高效地学习语音到文本的中间表示。二者搭配的理由是前者适合验证数据集对现成开源模型的提升，后者适合做语言数量与任务混合的受控消融，组合意义是论文同时回答数据是否有用和数据应如何混合两个问题。

第二类是从头训练 SALMONN 架构的受控消融模型，用于回答语言数量和任务混合问题。第一阶段做 ASR 训练，更新窗口级 Q-Former 和 LoRA 适配器，每语言用 20 小时 CommonVoice 数据，不足部分用 Bud500、Ivrit.ai、印度低资源语言数据和 Zeroth-Korean 补齐，指令是转写这句话，目标是先对齐语音与文本表示。第二阶段做问答训练，用 MULTISPEECHQA 的 Trivia、QA Assistant 和 Alpaca 全量样本，但 Anthropic-RLHF 只抽 1000 条以平衡分布，总计 2,070,000 样本在 23 种语言间平均分布。部分变体再加入 20% 比例的 CoVoST-2 语音翻译数据，用混合批次做多任务指令微调。

超参数方面 2 阶段学习率均为 1e-5，预热步数分别为 800 和 400，LoRA 秩均为 64，第一阶段 10 轮、第二阶段 3 轮，批量分别为 128 和 256。论文未给出梯度是否截断等更细实现，复述时应明确这是缺项，不从模型名推定。
4 个消融模型是全 23 语言加翻译数据、全 23 语言不加翻译数据、10 种精选语言加翻译数据、10 种精选语言不加翻译数据。10 种语言为英语、法语、荷兰语、土耳其语、德语、阿拉伯语、西班牙语、俄语、印尼语和波兰语。

### 评测基准、基线和裁判条件是否一致？

MULTISPEECH-BENCH 的构造是三部分拼接。SQA 部分从测试划分中每语言抽 200 对，经人工修正后作为高质量评测集。ASR 部分直接用对应语言的 CommonVoice 测试集。AST 部分用 CoVoST-2 中与 23 种语言重叠的语音到英语方向。划分上训练、开发和测试先按与 Voice Assistant 400K 相同的来源分布抽样，开发集 2000 对、测试集 1000 对，其余为训练集。
下图展示 3 个任务的输入输出形态，阅读时重点区分有无文本指令，这决定了模型是否被允许看到文字提示。

> **看图路径：** 1. 先对比左中右三列标题确认口语问答与识别与翻译三个任务；2. 再看每列输入侧是否带有附加文本指令以及输出示例的语言标注；3. 最后观察口语问答列强调无文本提示而另两列带有英文指令的区别

[![原论文 Figure 2：MULTISPEECH-BENCH covers three tasks: (1) Spoken Question Answering (SQA), where models are…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d62b9f3d5933/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d62b9f3d5933/figure-2.png)

*论文图 2。原论文 Figure 2：“MULTISPEECH-BENCH covers three tasks: (1) Spoken Question Answering (SQA), where models are prompted with speech only (no text prompt); (2) Automatic Speech Translation (AST)…”。*

从像素可见，三列分别为浅绿 SQA、浅蓝 ASR 和浅紫 AST。SQA 输入只有波形图，示例输出包括 Trivia 日食、Alpaca 葡萄牙语酸碱度、QA Assistant 俄语章鱼等文本答案。ASR 输入是波形加大括号加转写指令，示例输出包括阿拉伯语、西班牙语、希腊语和土耳其语转写。AST 输入是波形加翻译成英语指令，示例输出包括从日语、印尼语和德语翻出的英语句子。这种设计使 SQA 最考验端到端语音理解，而 ASR 和 AST 更接近传统任务。

**口语问答 × 大语言模型裁判：** 口语问答指只给语音问题、不给文本提示、要求模型直接生成开放式文本答案的任务，分工是检验指令跟随和生成能力；大语言模型裁判指用 Command-A 和 GPT-4o 对 2 个模型答案做成对偏好判断，分工是在 23 种语言上提供可扩展的一致评价。二者搭配的理由是开放式回答难以用词错率等固定指标衡量，而为每种语言招募大量人工裁判成本过高，组合意义是论文用双裁判加部分人工校验来支撑多语言生成评测，但也引入裁判偏差需要核对。

基线是强级联系统，先用 Whisper Large v3 转写，再用 Aya Expanse 8B 根据转录回答。Whisper 支持 96 种以上语言并可做语音到英语翻译，Aya Expanse 8B 支持 23 种语言问答。被测开源模型为 Qwen2-Audio、Qwen2.5-Omni 和 Phi-4-Multimodal，商业模型为 GPT-Audio 和 Gemini 2.5 Flash、Flash Lite 与 Flash Pro。SQA 用 Command-A 和 GPT-4o 双裁判做成对胜率，并对阿拉伯语、德语、希伯来语、印地语、韩语、葡萄牙语、土耳其语和中文 8 种语言做人工三标注一致性校验。ASR 和 AST 用固定指标自动评分，不与人工偏好混用。

### 级联基线赢了谁，又输给了谁？

比较问题是在相同 SQA 语音输入下，端到端 SLM 能否超过先转写后回答的级联。公平条件是同一 MULTISPEECH-BENCH 语音问题、同一裁判模型。指标方向是胜率越高越好，平局单独统计。
下图是 Command-A 裁判下的平均胜率条形图，GPT-4o 裁判趋势一致，可作为校准。

> **看图路径：** 1. 先看每行左侧 Whisper 加 Aya 基线与右侧被测模型的对照关系；2. 再比较绿色基线段与彩色模型段的长度以判断谁胜率高；3. 最后注意中间斜线小段代表的平局比例在不同模型间的变化

[![原论文 Figure 3：Win rates on MULTISPEECH-BENCH averaged across languages for the open-weight and commercial SLMs…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d62b9f3d5933/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d62b9f3d5933/figure-3.png)

*论文图 3。原论文 Figure 3：“Win rates on MULTISPEECH-BENCH averaged across languages for the open-weight and commercial SLMs against the baseline cascading system of Whisper combined with Aya Expanse 8B…”。*

从像素可见，每行左侧都是 Whisper 加 Aya 基线，右侧是被测模型。顶部 GPT-Audio 和 Gemini 2.5 Pro 的彩色段约占 70%，基线绿色段约占 30%，说明商业强模型超过基线。中间 Gemini 2.5 Flash 仍超基线，Flash Lite 则被基线以约 69.5% 对 28.5% 反超。底部 3 个开源模型中基线段高达 85.7% 至 93.3%，Qwen2.5-Omni 仅占 12.6%，Phi-4-Multimodal 和 Qwen2-Audio 更低。GPT-4o 裁判下数字略有变化，例如基线对 Qwen2.5-Omni 为 86.3% 对 13.2%，但胜负格局不变。

论文报告 Qwen2.5-Omni 是开源中最强，但在其支持语言上才相对接近基线，不支持语言差距更大。商业模型中 GPT-Audio 最好，Gemini 2.5 Pro 紧随其后，只有 Gemini 2.5 Flash Lite 输给基线。ASR 平均错误率基线为 17.8，开源中 Qwen2.5-Omni 为 49.7，明显更差；AST 平均 BLEU 基线为 21.0，Qwen2.5-Omni 为 22.7，反而略超基线。这说明不能用单一任务代替整体结论，开源模型在翻译上尚可，在识别和开放问答上仍弱。

下表把微调收益、识别翻译代价和裁判可信度放在一起，比较对象都是论文中实际可运行的模型和策略。

| 评价维度 | 指标 | 微调前或基线 | 微调后或对照模型 | 论文报告的判断 |
| --- | --- | --- | --- | --- |
| SQA 微调收益 | 对原模型胜率 | Qwen2.5-Omni 为参照 | 微调版平均 60.6% 胜出 | 合成数据有效提升问答 |
| ASR 稳定性 | 平均识别错误率 | 49.7 | 微调后 50.4 | 识别能力基本不变 |
| AST 稳定性 | 平均 BLEU 与 chrF | 22.7 与 46.6 | 微调后 21.0 与 45.2 | 翻译能力基本不变 |
| 裁判一致性 | 人与模型判断一致率 | Qwen2.5-Omni 组 75.6% | GPT-Audio 组 52.4% | 前者可信度更高，后者输出接近致分歧大 |
| 翻译数据增益 | 加 AST 对不加 AST 胜率 | 不加 AST 为参照 | 加 AST 组 46.8% 胜出 | 未带来一致明显提升 |

表后解释是，主要收益是 SQA 胜率从落后基线变为对原模型 60.6% 胜出，且对基线也达到开源最好。

具体代价是 ASR 错误率（%）从 49.7 微升到 50.4，BLEU 从 22.7 降到 21.0，说明问答提升没有顺带提升识别翻译。未胜出项包括希伯来语、希腊语、波斯语和捷克语等语言微调后多为平局，以及 GPT-Audio 人工一致性仅 52.4%，表明在高质量商业模型之间裁判区分度有限。

### 语言更多会稀释能力吗？加翻译数据有帮助吗？

论文用从头训练的 SALMONN 模型回答两个受控问题。第一个是 10 种语言训练是否比 23 种语言更好，第二个是加入语音翻译数据是否提升问答。公平条件是相同编码器、语言模型、Q-Former 结构和问答数据分布，只改变语言数量或是否加入 20% 翻译数据。
下图是按语言细分的微调前后对比，阅读时不要只看平均值，要看哪些语言是例外。

> **看图路径：** 1. 先看纵轴 23 种语言代码与横轴胜率百分比的坐标范围；2. 再对比每行橙色微调模型段与蓝色原模型段以及灰色平局段的长度；3. 最后找出灰色段特别长的希伯来语与波斯语与希腊语与捷克语等行

[![原论文 Figure 5：Win rates comparison: Qwen2.5-Omni vs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d62b9f3d5933/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d62b9f3d5933/figure-6.png)

*论文图 6。原论文 Figure 5：“Win rates comparison: Qwen2.5-Omni vs.”。*

从像素可见，纵轴为 23 个语言代码，横轴为胜率百分比。每行橙色微调段在多数语言超过 60%，例如中文 74.8%、波兰语 85.5%、意大利语 86.6%。但希伯来语灰色平局段达 50.6%、波斯语 46.2%、希腊语 46.9%、捷克语 52.6%，橙色胜段仅 10% 至 20% 左右。印地语和越南语等提升幅度也相对较小。这支持总体有效但低资源或合成质量较差语言收益有限的判断。

对于语言数量，23 语言模型总体胜率高于 10 语言模型，论文认为在 23 语言规模尚未出现容量稀释。可能的原因是编码器和语言模型已预训练，训练主要是学习语音到语言模型的投影，而不是从零学习问答能力，该解释属于有限解释而非因果证明。对于翻译数据，加入 AST 的模型对不加入的模型胜率为 46.8%，未形成一致提升。论文给出两个可能原因，一是翻译数据仅占 20% 可能太少，二是 Whisper 本身已支持多语言到英语翻译，少量指令微调监督增量有限，这仍是待验证推测。

复述时应保留这种不确定性，不把单次消融写成翻译数据无用的定论。

### 哪些边界没有被测到？

论文明确承认合成数据的两类上限。一是机器翻译可能出错，导致部分问题提示不自然甚至不正确。二是语音合成质量受模型上限限制，部分语言自然度较低。人工评分中自然度平均 3.0 低于可懂度 4.1，MMS 组和 Seamless 组低于 XTTS 组，低资源语言如波斯语和希腊语受影响更大。评测集虽经人工修正，但训练集仍是合成翻译加合成语音，没有逐条人工清洗。

未评测边界包括真实录音环境下的噪声、口音和自发口语，论文数据来自朗读式合成问题，与真实人声提问仍有差距。SQA 依赖大语言模型裁判，人工校验只覆盖 8 种语言，且 GPT-Audio 组一致性较低，说明裁判在强模型之间可能不稳定。训练资源、推理延迟和部署成本未系统报告，因此不能从胜率改善推定延迟或成本也改善。总体趋势不等于每种语言都成立，希伯来语、波斯语、希腊语和捷克语的平局比例已给出反例。

### 要复现这条路线，先准备什么？

复现应从数据流水线开始，而不是直接调模型。先获取英语 Voice Assistant 400K 的各来源文本问答，再用 Seamless M4T v2 Large 翻译到目标语言，然后按语言支持选择 XTTS 或 Seamless 或特定语言 MMS 合成问题语音。对 XTTS 语言可从 LibriVox 短片段构建多说话人声音池，注意训练与测试使用不同说话人。评测用的每语言 200 条必须经过母语者修正，因为原文报告总体 72% 翻译需要编辑，直接用机翻做评测会混入翻译错误。
模型方面，验证数据价值的最短路径是用 LoRA 微调 Qwen2.5-Omni，秩 32、约 3 轮、不加文本提示，只用语音问题监督。

若要研究数据混合，则按 SALMONN 公开代码搭建 Whisper 编码器加 Aya Expanse 8B 加窗口级 Q-Former 结构，先做每语言 20 小时 ASR 对齐，再做问答微调。ASR 不足语言需按论文用 Bud500、Ivrit.ai、印度低资源数据和 Zeroth-Korean 补齐，问答阶段注意 RLHF 只抽 1000 条以免分布失衡。
资源状态方面，论文项目页当前可用，地址为公开的 multispeech 页面；第三方 Bud500 代码库当前可用；QA Assistant 数据集链接本次未能确认可达，复现前需另行确认可达性和版本。

还需补的验证是真实录音上的表现、更多语言的人工裁判一致性，以及微调后在噪声和口音下的稳定性。

### 何时值得尝试这条合成数据路线？

当目标语言已有可用的机器翻译和语音合成，但缺乏真实语音问答数据时，这条路线值得尝试。论文显示它能把开源模型的开放式语音问答明显推高，同时不明显损害识别和翻译，适合快速扩展语言覆盖。反之，如果目标语言连翻译和合成都不成熟，或应用对语音自然度和文化恰当性要求极高，则不应期待合成数据 1 次解决问题，仍需真实录音和人工撰写问答。

对研究生而言，可复述的方法是翻译问题答案加合成问题语音加文本答案监督加人工校验基准，再用级联基线、双裁判和固定识别翻译指标三线评价。应记住的数字关系是量级为 10,800,000 对和 9200 小时，质为可懂度高于自然度，评测翻译需改写率高达 70%，微调胜率平均 60% 但低资源语言多为平局。下一步验证应放在真实语音、更广人工评价和部署成本上，而不是只追平均胜率。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
