---
title: "Inverse Text Normalization in Romanian: A Comparative Study of Rule-Based, Neural, and Large Language Model Approaches"
date: 2026-09-28
draft: false
description: "该研究在 24753 对罗马尼亚语口语-书面语数据上比较规则文法、微调模型与大模型提示，显示少样本大模型提示域内平均词错率 1.21% 与域外 2.57% 最接近人类 2.45%，而规则系统以约 60 句每秒的中央处理器吞吐保持低成本可用。"
tags: ["数据集", "基准设计", "大语言模型", "模型比较", "语音识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:sirbu26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/sirbu26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/sirbu26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1cd4429a58cd6959415b33650cf7630695fd7285efd2996dda172218709a33fc"
paper_digest_api_reader_plan_sha256: "49571ce706e816be0b6c54a92a1c28eef9eea877c88c7045d935b0af174d3ef2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d6adc22c5425208f70d492a6ac37b9d59a3a52775438d12976218b37dc1763f2"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a0a7fc88b2a22dd1e907dd723db00f8817e4cdeb3543993c598f94081d3daafb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "397a446023a27267124a0b78daa56bfeaa1bb48e4a3d337c8cd8376ffe773d6d"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9952210676f593512ca442025ba3cda58b237f4d982e4d84d872b3da0705dd72"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 罗马尼亚语逆文本规范化：规则精度与大模型泛化的取舍

> 英文题目：*Inverse Text Normalization in Romanian: A Comparative Study of Rule-Based, Neural, and Large Language Model Approaches*

> 会议身份：`conference:interspeech:2026:conference-paper-id:sirbu26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/sirbu26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/sirbu26_interspeech.pdf)

标签：#数据集 #基准设计 #大语言模型 #模型比较 #语音识别

评分：**7.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准

## 👥 作者与机构

- Oana Sirbu：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandra Diaconu：机构信息未能从会议 PDF 纯文本可靠映射
- Sergiu Nisioi：机构信息未能从会议 PDF 纯文本可靠映射
- Bogdan Alexe：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

罗马尼亚语逆文本归一化（Inverse Text Normalization，简称ITN）需把语音识别输出的口语形式转为标准书面形式，难点在数词与名词性数一致、罗马数字纪年、机构命名及日期货币分隔符。作者先制定覆盖8类的语言学指南并经3人标注加两轮校验构建24753对语料，再以全局加复制加归一化词错误率统一评测5类系统。相比英语中心工作，该研究把规则可解释性、神经模型数值不稳定性与大模型上下文推理放在同一罗马尼亚语基准下比较，具有选型意义。在域外400句四领域评测设置下，LLM Prompting的Mean WER为2.57%，低于NeMo/Pynini的Mean WER 4.56%。该结论适用边界受限于新闻训练分布与文学加儿童故事加影视对白加播客构成的域外集，专有大模型训练语料未公开故泛化证据尚未验证需谨慎解读。语法系统CPU约60句每秒且无API成本，少样本提示约0.21句每秒且单句约0.0073美元，精度与成本矛盾突出。从部署看语法系统在CPU硬件上吞吐约60句每秒而少样本提示推理开销约0.21句每秒，延迟与费用差距决定选型。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/RoITN> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/RoITN> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/doccano/doccano> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出必须保留什么？

本文的输入是自动语音识别系统输出的口语风格文本，目标是把它转成符合书面规范的文本。举例来说，识别器可能输出英文例子 one hundred euro 这样的词语串，而书面要求是 100 EUR 这样的紧凑规范形式。对初学者而言，白话解释是：机器听懂了每个词，但还没有把数字、日期、货币、单位写成人类阅读和检索习惯的样子。

逆文本规范化，英文名为 Inverse Text Normalization，缩写为 ITN，就是完成这一步口语到书面的后处理。它与文本规范化方向相反，后者英文为 Text Normalization，是把书面转成口语以服务语音合成。必须保留的信息有两类：一是不该改的上下文词要原样复制，二是该改的半符号表达式要数值完全正确且格式符合罗马尼亚语惯例。输出是整句书面语文本。

**逆文本规范化 × 文本规范化：** 文本规范化负责把书面语展开成口语形式以服务语音合成，逆文本规范化则负责把语音识别输出的口语形式压缩回标准书面语以服务阅读与检索，二者方向相反但都处理半符号表达式，本文只研究后者即识别后处理阶段的口语到书面转换。

本解读的输入是论文正文证据与两张官方原图像素，目标是让研究生能核对并复述方法，输出是按学习依赖展开的技术讲解。罗马尼亚语此前未被系统研究过逆文本规范化，其难点包括数词与名词的性数一致，例如 doi copii 与 două persoane 的不同形式，以及世纪用罗马数字、机构命名如 Pilonul III 与 Legea nr. 95/2006 等惯例。论文因此先制定语言学指南，再构建数据，再统一比较 5 类做法。

### 已有路线在相同任务上解决了什么？

在相同输入、相同目标、相同运行阶段下，已有路线可分为 3 类。第一类是确定性加权有限状态文法，代表是 NeMo 逆文本规范化框架，它把每个类别写成标注文法与 verbalization 文法，用转换器组合完成改写，优点是可控可部署，缺点是覆盖依赖人工规则。第二类是神经序列与转换器标注器，包括卷积、统一转换器框架与流式预训练语言模型做法，它们需要大量口语与书面配对数据做监督，在英语上有效，但在多语言与低资源语言上受数据稀缺限制。第 3 类是近期指令调优大模型做口语到书面转换，用上下文学习免微调完成任务。

论文引用了数据增强、语言无关数据驱动与鲁棒性改进等工作，指出跨范式系统比较在英语之外仍然有限，原因是标注对稀缺且各语言时间数字分隔符等格式差异大。本文的对照意义在于把规则文法、多语言微调、领域微调大模型、直接少样本大模型与工具增强智能体放在同一罗马尼亚语基准与同一拆分指标下比较，而不是把类别差异当成同条件胜负。

### 要回答的部署问题是什么？

论文要回答 3 个实践问题。第一，确定性文法在何时足够用。第二，多语言预训练是否带来好处，神经模型是否存在数字不稳定。第三，大模型能否在领域漂移下可靠泛化。任务形式化为：给定口语风格句子，输出书面规范句子，评测时把词分成应复制与应规范化两类分别计错。

数据来源是 RO-N3WS 罗马尼亚语识别基准，包含超过 126 小时的 ProTV News 与 Observator News 广播新闻语音，选择广播新闻是因为数字时间机构表达密集且频道风格多样。域外评估另取文学有声书、儿童故事、电影对白与会话播客，覆盖叙述与自发口语，用于检验分布漂移。论文报告这是首个罗马尼亚语逆文本规范化的实证研究，并公开指南、数据集与评测脚本，当前可用地址为 <https://github.com/RoITN>，标注界面使用第三方工具 Doccano，相关链接当前可用。

### 全景如何从指南走到可比较的分数？

全景可沿一个样本走完。假设输入是一句含口语数字的广播新闻句子，先用罗马尼亚语指南判定它属于基数词、序数词、货币、度量单位、日期时间、百分比、half 表达或特殊结构中的哪一类，再按该类规则产生标准书面形式并保持其余词不变，最后用对齐工具把预测与参考比较得到全局、拷贝与规范化三项词错率。

下图展示了这种从语言规则到数据再到评估最后到基准实验的闭环，是理解全文方法依赖的关键，建议按箭头顺序阅读 4 个方框及其标注。

> **看图路径：** 1. 先从左上罗马尼亚语指南框沿 rules applied 箭头看到右上数据集创建框；2. 再沿 computed metrics 箭头向下看到评估框架框确认三类词错率；3. 最后沿 analyzed results 箭头向左看到基准实验框核对五类方法覆盖

[![原论文 Figure 1：Overview of the experimental framework for ITN evaluation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/febb7acf2f2e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/febb7acf2f2e/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of the experimental framework for ITN evaluation.”。*

该图左上是罗马尼亚语指南与语言规则类别框，箭头标注 rules applied 指向右上数据集创建与标注框，框内写明 24753 spoken-written pairs。右上框向下箭头标注 computed metrics 指向右下评估框架框，框内写明 Global / Copy / Norm WER-CER。右下框向左箭头标注 analyzed results 指向左下基准实验框，框内列出 NeMo、Seq2Seq、mT5、LLM 与 Agentic。这一闭环说明指南驱动标注，标注支撑统一评估，评估支撑受控比较，没有指南就无法保证跨系统公平。

### 评估组件如何区分改错与乱改？

评估组件的输入是三元组：原始口语输入、人工参考书面句与模型预测句。表示是对三者做词级别对齐，论文使用 difflib.SequenceMatcher 识别替换、删除与插入。组件是三项词错率：全局词错率在整句上计算，拷贝词错率只在应不变词上计算且忽略预测多出的词，规范化词错率只在应改写词上计算。目标是同时看到总体准确、忠实保持与转换精度。输出还包括平均词错率，定义为三者非加权平均，用一个汇总分保持对保持与转换的平衡敏感。

**拷贝片段 × 规范化片段：** 拷贝片段指应当原样保留的词，规范化片段指必须改写数字与符号表达的词，前者考查模型不乱改的能力，后者考查模型改对的能力，二者搭配才能把总词错率拆成保持忠实与转换正确两个可诊断的分量。

对初学者而言，例子是：如果模型把不该动的词改了，拷贝词错率上升；如果把四十度写成 40 但多加了度符号，规范化词错率会反映这种过度规范化。论文采用该框架正是因为书面形式可能有多种可接受写法，直接比整句会混淆两种错误来源。

### 规则与大模型各自负责什么计算？

规则基线使用 NeMo Text Processing 1.1.0 与 Pynini 2.1.6 加权有限状态转换器框架，每个规范化类别写成 1 对标注与 verbalization 文法，遵循已有设计原则。每类平均约 15 条规范化规则，由熟悉罗马尼亚语数词形态与领域惯例且熟悉转换器组合调试的母语专家设计，开发耗时约 80 人时，含迭代设计测试与误差分析。计算过程是确定性转写，无需专用推理硬件。

**加权有限状态转换器 × 大语言模型提示：** 加权有限状态转换器用人工编写的标注与 verbalization 文法做确定性改写，分工是高精度与可控复制，大语言模型提示用任务指令加指南加示例引导生成，分工是利用预训练语境做模糊与跨域泛化，二者组合对比揭示了精度效率与覆盖灵活性的权衡。

直接少样本提示使用 o4-mini-2025-04-16 经开放接口调用，提示包括简洁任务指令、完整指南与每类一个代表性示例，再加待规范化句子，检验无任务微调的大模型能否匹配专用系统。智能体做法使用 LangChain 0.2.5 与 ChatOpenAI 接口，以 GPT-4o 为控制器，按步骤分析输入识别相关片段、调用对应类别工具、再把转换结果整合回句结构，设计目标是可解释与细粒度追踪。微调路线包括 mT5-small 与 OpenLLM-Ro 的 RoLlama3.1-8b-Instruct，前者多语言预训练后微调，后者为罗马尼亚语适配模型做全量微调。

**全局词错率 × 平均词错率：** 全局词错率在整句上计算替换删除插入，平均词错率是全局、拷贝与规范化三项词错率的非加权平均，前者反映总体可用性，后者避免规范化词被大量不变词稀释，二者搭配让总体分数同时对保持与转换敏感。

**智能体文本规范化 × 直接少样本提示：** 智能体文本规范化由控制器先识别片段再调用各类别专用工具并回填整句，分工是可解释的分布动作，直接少样本提示 1 次输入指南与示例直接生成整句，分工是端到端语境整合，二者搭配对比了分步调用带来的可追踪性与一步生成带来的连贯性差异。

沿样本看差异：规则系统看到 iunie 2017 若无上下文感知可能触发规则输出 iunie 2.017；大模型提示看到发烧四十可能输出 40° 而幻觉出度符号；微调模型看到六十 bani 可能输出 0,60 lei，单位换算看似合理但违背原语音；智能体看到 două mii douăzeci 可能因未调用工具而原样漏改。这些例子均为论文列举的代表性失败模式，不是教学虚构。

### 哪些模型被训练，哪些只是被调用？

本研究没有统一训练所有模型，需要逐项说明。规则系统没有训练阶段，其计算是人工编写文法后的确定性组合，监督来源是罗马尼亚语指南与专家知识，更新时机是 80 人时的迭代调试，不是梯度更新。直接少样本大模型与智能体控制器没有任务微调，其计算是接口调用与上下文推理，监督来源是提示中的指南与示例，论文未报告温度或采样种子等解码细节，因此不能从参数冻结推定输出确定。

被训练的是两个微调模型。mT5-small 在 101 种语言上预训练后微调 5 轮，学习率 2×10−4，批量 16，权重衰减 0.01，最大输入输出长度 128，优化器为 AdamW 加线性调度与梯度范数裁剪至 1.0，基于验证损失早停，在单张 80 GB 显存的 H100 上不到 2 小时。论文还尝试了 mT5-base 与 large、不同上下文长度与学习率，结果一致较差。RoLLaMA 使用 Axolotl 框架全量微调 2 轮，有效批量 32，8 比特 AdamW，学习率 2×10−5，余弦调度，100 步热身，权重衰减 0.001，训练启用样本打包以提高吞吐，评估用非打包批次。论文未给出梯度路径的逐层公式，因此只记录优化器与调度等已报告项，缺失的随机种子与精确训练步数应视为复现缺项。

### 数据划分、标注与指标条件是什么？

语料构建先用正则表达式与 spaCy 的 ro_core_news_lg 3.8.5 模型抽取含数字或符号表达的句子。广播新闻样本用于训练验证与域内测试，域外子集专用于鲁棒性评估。标注协议覆盖 8 类：基数词、序数词、货币、度量单位、日期时间、百分比、half 表达与特殊结构，每类规定口语到标准书面形式的转换，并处理数词与名词一致、世纪罗马数字与机构命名等现象，规则倾向在可读性保留前提下用简洁数字形式。

3 名母语标注者在 Doccano 界面按指南标注，经两轮校验：第一轮规范标点空格，第二轮验证终稿。每条存口语 text 与规范 label，共 24753 对。其中 1988 例留作测试，含 ProTV 的 992 例与 Observator 的 996 例，其余 22365 例用于训练验证。域外测试共 400 例，每域 100 句，覆盖有声书、儿童故事、电影对白与会话播客。训练验证测试划分按类别分层以保持比例。人类评估另招 5 名母语者按指南在域外数据上做规范化，作为可比上界。

指标方向均为越低越好，聚合对象是测试样本上的均值并报告均值标准误差。硬件预算按原文交代，微调需 H100 级硬件，规则系统可在中央处理器运行，大模型调用产生约 90 美元接口费用。代码与数据在 <https://github.com/RoITN> 当前可用，第三方标注工具在 <https://github.com/doccano/doccano> 当前可用，资源状态是公开可达的唯一依据。

### 主结果在域内与域外如何排序？

主结果用平均词错率汇总，左为域内右为域外，越低越好，误差线为测试样本上均值的标准误差。阅读时先确认纵轴是平均词错率百分比，再比较柱高排序，最后看误差线重叠程度，不要把单柱高低直接推广为全程显著。

> **看图路径：** 1. 先对比左图域内五根柱子的高度与顶部 1.21 到 8.38 的标注顺序；2. 再对比右图域外五根柱子与人类 2.45 基准的相对位置；3. 最后观察每根柱子上的标准误差线在域外明显变长的现象

[![原论文 Figure 2：Aggregated performance across strategies.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/febb7acf2f2e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/febb7acf2f2e/figure-2.png)

*论文图 2。原论文 Figure 2：“Aggregated performance across strategies.”。*

左图域内从低到高依次为大模型提示 1.21%、RoLLaMA 1.75%、NeMo/Pynini 1.92%、智能体 2.84%、mT5-small 8.38%，右图域外依次为大模型提示 2.57%、人类 2.45%、RoLLaMA 3.97%、NeMo/Pynini 4.56%、智能体 6.59%。可见直接提示在两域均为自动系统最优且最接近人类，规则系统在域内与 8B 微调模型相当，mT5-small 明显落后且为使可视化清晰在右图中被略去。论文称 RoLLaMA 与 NeMo 的标准误差重叠，提示二者差异可能不显著。

为同时核对可运行策略的全局、拷贝与规范化分量，下表提出比较问题：在域外 400 例四域测试上，各系统是输在乱改还是改错，公平条件是同一测试集与同一对齐计分，指标方向均为越低越好。

| 方法 | 全局词错率(%) | 拷贝词错率(%) | 规范化词错率(%) | 平均词错率(%) |
| --- | --- | --- | --- | --- |
| 大模型提示 | 1.49 | 0.70 | 5.51 | 2.57 |
| RoLLaMA 微调 | 5.23 | 0.24 | 6.45 | 3.97 |
| NeMo 规则 | 1.94 | 0.11 | 11.62 | 4.56 |
| 智能体 | 2.67 | 0.80 | 16.27 | 6.59 |
| 人类平均 | 1.46 | 0.66 | 5.24 | 2.45 |

表后解释是：大模型提示在全局 1.49% 与规范化 5.51% 上最优且最接近人类 1.46% 与 5.24%，支持其跨域规范化能力最强；规则系统拷贝 0.11% 最优，报告显示确定性规则在忠实复制上高度可靠，但规范化 11.62% 明显偏高，支持其在未见风格下灵活性有限；智能体规范化 16.27% 最高，主要代价来自控制器漏调工具与回填时引入意外修改；RoLLaMA 表现均衡但两项关键准确率落后于直接提示。未胜出项是智能体整体最差，负结果是 mT5 系列多配置均高误差，边界是域外人类平均 2.45% 仍是最优参照。

### 成本与速度的反证是什么？

若只看准确率会得出全用大模型提示的结论，反证来自成本与吞吐。下表比较问题是：在可部署收益下，准确率领先需要付出多少单句成本与速度代价，公平条件是论文同一实验设置，指标方向为词错率越低越好、速度越高越好、成本越低越好。

| 系统 | 域内平均词错率(%) | 域外平均词错率(%) | 单句成本(美元) | 推理速度(句每秒) |
| --- | --- | --- | --- | --- |
| 大模型提示 | 1.21 | 2.57 | 0.0073 | 0.21 |
| RoLLaMA 微调 | 1.75 | 3.97 | 未报告 | 需专用硬件 |
| NeMo 规则 | 1.92 | 4.56 | 可忽略 | 60 |
| 智能体 | 2.84 | 6.59 | 0.002 | 0.45 |

表后解释是：大模型提示域内 1.21% 与域外 2.57% 的收益代价是单句约 0.0073 美元与每秒约 0.21 句，且依赖远端处理；智能体单句 0.002 美元更经济且每秒约 0.45 句更快，但两域词错率更高，反而低于高质量确定性文法；规则系统以每秒约 60 句中央处理器吞吐与可忽略运行成本取得域内 1.92% 与域外 4.56%，在时延敏感与隐私敏感部署中最具吸引力；RoLLaMA 需专用硬件高效运行，适合数据隐私重要且有算力的场景。论文明确速度测量依赖硬件与接口，仅作指示性基准。另一反证是专有大模型训练语料未公开，不能排除见过罗马尼亚新闻或类似规范模式，因此域外领先应视为实用参照而非决定性泛化证据，可能待验证。

### 哪些结论不能从证据外推？

首先，相关性不是因果，mT5-small 的高误差不能直接归因于多语言预训练本身，论文只报告该结果在多配置下一致，未做消融分离模型容量与数据量的因果。其次，人类一致性方面，5 人两两词错率均值 1.65% 加减 0.37%，剩余差异多为可接受的替代写法或指南应用细微差别，而非转录错误，这支持任务定义良好，但不等于所有风格变体都已覆盖。第三，未测量误判率延迟分布与完整成本曲线时，不能承诺这些量得到改善，总体趋势不等于每组每步成立。第四，域外仅 400 例四域样本，误差线较宽，跨域结论需更大样本验证。第五，规则系统约 80 人时的专家成本未计入运行成本比较，复现时需考虑人力投入。

### 复现先做什么，需要补哪项验证？

复现先做三件事。第一，从 <https://github.com/RoITN> 获取指南、数据集与评测脚本，确认当前可用，并按分层类别恢复 1988 例域内测试与 400 例域外测试划分。第二，用 difflib.SequenceMatcher 实现词级对齐，分别计算全局、拷贝与规范化词错率及其非加权平均，核对方向越低越好。第三，先运行规则基线 NeMo 1.1.0 与 Pynini 2.1.6 以建立可本地运行的参照，再在有 H100 条件时复现 mT5-small 5 轮与 RoLLaMA 两轮微调超参数，最后用相同提示结构调用大模型接口并记录单句成本。

还需补的验证包括：固定解码温度与种子后重复大模型实验以评估方差，按类别拆分规范化词错率以定位数字不稳定来源，补充各系统在中央处理器与图形处理器上的延迟分布而非单点吞吐。代码开源不等于权重可下载与系统可一键运行，需区分指南公开、数据公开与远端模型依赖。若链接本次不可达，应写本次未能确认可达，而不是推定已公开。

### 何时值得尝试哪条路线？

当部署要求低延迟、低成本或本地隐私处理，且领域格式相对封闭时，值得尝试精心设计的规则系统，它在域内接近 8B 微调模型且复制最忠实。当有领域标注数据与专用硬件且需本地运行，值得尝试微调开放权重模型，它表现均衡但需承担训练与运维成本。当追求跨域最高准确且能接受远端成本与较高延迟时，可尝试少样本大模型提示，它最接近人类但需警惕过度规范化如幻觉符号与单位改写。

智能体路线当前在规范化分量上不占优，仅当需要可解释的工具调用追踪时再考虑，并需先修复漏调工具与回填漂移。所有选择都应回到同一三项词错率框架下用域内与域外两套测试核对后再决定。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
