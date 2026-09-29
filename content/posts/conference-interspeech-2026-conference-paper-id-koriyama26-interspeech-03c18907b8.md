---
title: "Benchmarking Large Language Models for Grapheme-to-Phoneme Conversion: A Japanese Case Study"
date: 2026-09-27
draft: false
description: "论文以 3000 句人工标注比较 30 多个大模型与传统形态分析器的日语字音转换，证明解析模式加规则后处理的最优假名错误率降到 0.52%，低于最强传统工具的 1.03%，但小模型、数字量词与推理模式仍有明确代价与边界。"
tags: ["数据集", "基准设计", "大语言模型", "语音学与音系", "文本到语音"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:koriyama26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/koriyama26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/koriyama26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c9eb8f4e1a21639540d7a95e8591db2501e83d1e48b26ac2b22e049d650cbfad"
paper_digest_api_reader_plan_sha256: "489504f4b22a8689ef6de82470e605d0b2534aadb49b2ec5ce2343deab9016d2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "883e871cdbb8e74c4d536e8dc3f47a0fd1185f27b39f28180726517692c8729c"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "933ccca84880b0d77deb02efc79e0c94461a7db90eb6bbffb158e86b789cb041"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0d39d10bda3edd781abd7366520df85949a4dbf0ad8f32d60deaa0ffa19a37cd"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4d80db73540a28f60da719bf531647707bf065a1f8fc844d994340d608a81f72"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"scientific_topic","id":"scientific_topic.phonetics","label":"语音学与音系"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_task: "文本到语音"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 把规则还给规则，把歧义留给大模型：日语注音的两条流水线之争

> 英文题目：*Benchmarking Large Language Models for Grapheme-to-Phoneme Conversion: A Japanese Case Study*

> 会议身份：`conference:interspeech:2026:conference-paper-id:koriyama26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/koriyama26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/koriyama26_interspeech.pdf)

标签：#数据集 #基准设计 #大语言模型 #语音学与音系 #文本到语音

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Tomoki Koriyama：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

日语字素到音素转换（Grapheme-to-Phoneme，G2P）需将无空格混排的汉字、假名、数字与拉丁字符映射为假名读音，难点在于词语切分、多音汉字消歧、助词变音、长音化以及数字量词连浊促音等上下文相关规则。该工作构建解析模式（Parse Mode）与直接模式（Direct Mode）两条链路，前者由大语言模型（Large Language Model，LLM）输出词语表层形与片假名读音的JSON形态素解析结果，再经规则后处理完成助词转换与长音归一化，后者由LLM一步直译整句片假名读音，最后统一以假名错误率（Character Error Rate，CER）评测并接入假名输入语音合成（Text-to-Speech，TTS）验证发音收益。与传统词典加规则管线相比，该组合将切分与读音估计交给预训练知识，把确定性发音规则剥离给确定性模块，减少了对词典覆盖的依赖。在3000句人工标注集上，最优LLM解析模式假名CER为0.52%，明显低于最优传统工具OpenJTalk的1.03%，且基于LLM假名的合成发音CER更接近真值假名条件。结论外推受限于新闻朗读类语料与通用词汇分布，对人名地名等专有名词与高度口语化文本尚未充分验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么端到端还不够？

这篇论文的输入是混合书写的日语句子，里面同时出现汉字、平假名、片假名、数字与拉丁字母，目标是输出与发音一一对应的假名串，再送给语音合成器。初学者要先建立的白话理解是，字音转换（grapheme-to-phoneme，简称 G2P）就是把怎么写变成怎么念。对于英语，难点是同形异音词需要看上下文；对于日语，难点更集中：文本没有空格，必须先做形态分析（morphological analysis）切词；汉字多音，今可以是 ima 也可以是 kon。

数字加量词会发生促音与浊化，1 本读 ippon 而不是 ichihon。论文开场就强调，即使端到端（end-to-end，简称 E2E）语音合成可以直接从文本生成波形，显式 G2P 仍然必要，理由是两个实际动作：用户要能指定人名地名的读音，端到端模型一旦读错会错得很不自然。也就是说，论文不是要取代合成器，而是要回答注音这一步交给大语言模型（large language model，简称 LLM）是否更准、更可控。必须保留的信息是后续所有比较的锚点：3000 句人工标注、假名字符错误率（character error rate，简称 CER）越低越好、传统工具的最强基线是 OpenJTalk。

输出是两条可复述的流水线与一组可核对的数字，而不是一句大模型更好。

### 同输入同目标的前人做了什么，本研究卡在哪里？

在同输入同目标同运行阶段的对照下，传统日语 G2P 是规则加词典路线，代表是 OpenJTalk 和基于 UniDic 词典的 MeCab，它们用词典查词加规则处理发音，优点是确定可复现，缺点是词典外的新词、外来语与专有名词容易读错。统计与神经网络路线尝试学习上下文，但仍需要任务数据。英语 G2P 一侧已有工作显示近期大模型能达到合理精度，并有人用检索增强改进 GPT-4，波斯语一侧则显示先转写为拉丁串再转音素的级联有效。形态切分、词性标注与文本规范化也有大模型介入的报告。

这些工作与本文的输入输出一致，但语言现象不一致，不能直接把英语的胜负搬到日语。论文的切入点是日语特有的三重负担：无空格切分、多音汉字消歧、助词与长音等发音规则。本文的增量是第 1 次在同一 3000 句集上覆盖 30 多个模型与 7 种传统分析器，并同时比较解析与直接两种提示策略，最后还把注音结果接到假名输入合成器，与端到端合成器比发音准确率与自然度。

### 日语注音难在哪一步，论文如何拆解问题？

论文把日语 G2P 拆成 4 个必须依次做对的动作。第一是分词，日文无空格，切错直接读错，例子是米原発可以切成米加原発，也可以切成米原加発，含义与读音完全不同。第二是读音推定（reading estimation），即为每个词给假名，假名词容易，汉字复合词难，行有多达数种读法，方在表示方向时读 hoo 而指人时读 kata。第三是发音规则（pronunciation rules），助词はをへ要按发音读成 wa、o、e，连续元音常实现为长音，如 otousan 中的 ou 要归一为 oo。第四是数字量词，2 人读 futari 而非 ninin，依赖数字与量词的组合变化。

论文的问题定义是：给定原文句子，输出规范化后的片假名串，评测前去掉标点并归一化长音写法，计算与人工标注的 CER。理解这个拆解才能理解为什么后文要设两条流水线：一条把第三步交给规则，另一条把 4 步全压给大模型。

### 两条流水线全景：解析模式与直接模式各让谁干什么？

论文评估的两种用法都以大模型为核心，但任务边界不同。解析模式（parse mode）让大模型替代传统形态分析器，只做切词与词读音推定，输出结构化 JSON，再由确定性规则做助词转换与长音规范化，得到最终假名。直接模式（direct mode）让大模型一步输出整句片假名，切词、读音、助词、长音全部由模型在提示约束下完成。作者说明设计理由来自预实验：如果在提示里塞入全部发音规则，指令变复杂反而增加错误，因此解析模式刻意让提示保持简单聚焦。

两种模式共用同一评测集与同一 CER 定义，传统工具一侧也施加与解析模式相同的规则后处理，使差距只反映形态分析能力的差异。下面先看解析模式的像素流程，再在组件节看直接模式的提示细节。

解析模式的导读是沿输入到输出追踪 1 次完整变换，重点是区分模型输出与规则改写的位置，图中蓝色框是提示摘录，中间白框是 JSON，底部黄框是规则，纵向箭头是主路径。

> **看图路径：** 1. 先沿顶部输入句向下追踪蓝色提示框到中间 JSON 输出框；2. 再看底部黄色规则后处理框如何把助词与长音改写为最终假名；3. 对照左右两侧箭头确认主路径是先分词后规则改写

[![原论文 Figure 1：Parse mode pipeline. The LLM performs morphologi- cal analysis and outputs JSON with word readings.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2085d134320e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2085d134320e/figure-2.png)

*论文图 2。原论文 Figure 1：“Parse mode pipeline. The LLM performs morphologi- cal analysis and outputs JSON with word readings. Rule-based post-processing applies pronunciation rules.”。*

这张图显示输入例今日は良い天気です先进入蓝色提示框，模型输出每个词的表层形、片假名读音、词性与活用形，例如今日读キョウ、は暂读ハ，再经黄色规则框把助词は改成ワ、把キョウ归一为キョー，最终得到キョーワヨイテンキデス。教学要点是模型只负责切与读，规则只负责改，错误可归因：切错或读错归模型，助词长音错归规则。

**解析模式 × 直接模式：** 解析模式让大模型只做形态分析并输出 JSON 词表，再由规则做发音变换，直接模式让大模型一步输出整句片假名，二者分工不同是因为前者用确定性规则兜底助词与长音，后者把全部负担压给模型，组合意义在于用对照实验测出规则兜底对多数模型尤其是小模型的增益。

### 提示与后处理组件：JSON 约束与长音例外如何写死？

解析模式的提示要求输出 JSON 数组，每个元素含 surface、reading、pos、cform 4 个字段，固有名词与复合词合并为一个 token，符号独立成 token，读音必须为片假名，并给出彼はそう思う的完整示例，强调不遗漏原文任何字符。规则后处理只做两类确定性改写：助词变换与长音规范化。直接模式的提示则相反，它用很长的自然语言规则约束输出：只允许全角片假名与日语逗号，禁止平假名汉字与字母数字；をへ按发音写成オ与エ，但即使与前后词连读也不做长音化。

e 段加い、o 段加う等分别映射为长音符号，但动词词尾与助词边界处禁止应用；并给出こんにちは世界与彼はそう思う的输入输出对作为参照，要求单行输出无解释。两者的搭配逻辑是解析用格式约束换可解析性，直接用语言规则换一步到位，但规则越多模型越容易违背。

直接模式的导读要先确认任务指令与禁令，再看长音条款的编号与例外，最后核对例子输出是否可执行，蓝色框内文字密集，需要逐段对应到真实约束。

> **看图路径：** 1. 先读蓝色框顶部的任务指令确认只要求输出片假名单行；2. 再逐条看转换规则中助词与长音例外条款的位置；3. 最后看底部两个 few-shot 例子如何约束输出格式

[![原论文 Figure 2：Direct mode pipeline. The LLM directly converts the input text to a kana reading in a single step.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2085d134320e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2085d134320e/figure-1.png)

*论文图 1。原论文 Figure 2：“Direct mode pipeline. The LLM directly converts the input text to a kana reading in a single step.”。*

这张图显示直接模式的提示框明确写出仅用全角片假名、助词按发音改写、长音插入严格限定条件、e 行加い变成长音符号、o 行加う变成长音符号、助词连续时不应用长音规则等条款，并用ハワイへの变成ハワイエノ、時計变成トケー、工場变成コージョー、を受ける变成オウケル而非オーケル等例子锚定行为。教学要点是直接模式把发音知识全部写进提示，模型必须同时记住格式与音韵例外，这解释了后文小模型在直接模式下错误率飙升的现象。

**形态分析 × 读音推定：** 形态分析负责在没有空格的日文中切分词边界并给出词性，读音推定负责为每个切分出的词给出片假名读音，二者搭配的原因是切错必然读错，论文把这两步都交给大语言模型，而把助词变换和长音规范化留给规则，从而让大模型专注于歧义最大的切分与多音汉字选择。

### 本研究训练了什么，没有训练什么，真实计算是什么？

本研究没有训练任何 G2P 大模型，也没有微调参与基准的 30 多个大模型，所有大模型结果均以推理调用得到，推理时关闭思考或把推理强度设低，默认比较的是非思考模式。论文明确说明的真实计算有 3 类。第一类是提示推理：解析模式调用模型做形态分析并解析 JSON，直接模式调用模型生成片假名单行，两类都带少样本示例。第二类是规则计算：对解析模式的模型输出与所有传统工具输出施加相同的助词转换与长音规范化，保证比较公平。

第 3 类是为验证 G2P 价值而做的合成器适配：把 CosyVoice 2 用 LoRA 在自发话语料 CSJ 上微调为接受假名输入，这一步是唯一的权重更新，但它不改变 G2P 基准的结论，只用于后文 G2P 加合成与端到端合成的对比。未报告的缺项是各专有模型的训练数据、解码温度与采样细节，论文未给出，因此不能从模型名称推定其实现，也不能把冻结参数等同于输出确定。复现时应把本节理解为无训练基准加 1 次独立的合成器微调，而不是端到端联合训练。

### 数据、划分、指标与基线条件如何保证可比？

数据集是 JVS 语料中 nonpara30 子集的 3000 句，覆盖拟声词与外来语等词典外现象，作者用 UniDic 形态分析估计其中汉字专有名词占 6.0%，片假名专有名词占 8.5%，含数字的句子占 14.2%，全部句子经人工标注假名作为参考。指标是预测与参考假名串之间的 CER，日语假名与音素近乎一一对应，可视为音素错误率，计算前去掉标点并归一化长音以容忍合法变体，指标方向是越低越好。模型侧分 3 类：专有 API 模型包括 Claude Opus 4.6、Sonnet 4.6、Gemini 3.1 Pro、3 Flash、2.5 Flash 与 GPT-5.2；开源权重模型覆盖 Gemma、Qwen、Llama、GLM、gpt-oss、Kimi 等从 2B 到 1T 的规模，其中 Swallow 表示经日语持续预训练，部分大模型经供应商 API 访问。

传统形态分析器包括 OpenJTalk、MeCab 加 IPAdic、MeCab 加 UniDic、KyTea、KWJA、Sudachi、Vaporetto。公平条件是传统工具与解析模式共享同一规则后处理，仅形态分析一步不同。合成对比侧用微调后的 Whisper 假名识别模型转写合成语音再算 CER，该识别器在 CSJ 测试集上为 2.22%，自然度用 UTMOS 估计。资源状态方面，论文脚注给出数据集与评测脚本的仓库链接，但本次证据未绑定可达的开源资源，不得声称代码数据当前可用。

### 谁最准，规模与版本带来多大改进？

要回答最准与规模效应，需要同时看绝对错误率与同家族单调性，指标方向都是 CER 越低越好，比较条件是同一 3000 句与同一后处理。下表把论文报告的关键数字整理为可运行策略之间的对照，不含搜索最优或事后挑选，传统工具保留实际可部署的最强项。

表前问题是：在相同数据与相同规则后处理下，大模型解析模式能否超过最强传统工具，同家族增大规模与换新版本各带来多少下降。公平条件是解析模式与传统工具共享后处理，直接模式单独比较，单位均为百分比。

| 比较维度 | 指标 | 最强传统工具 | 大模型解析模式 | 大模型直接模式 |
| --- | --- | --- | --- | --- |
| 最优精度 | 假名 CER | 1.03% | 0.52% | 0.53% |
| Gemma3 规模 | 假名 CER | 34.82% 4B | 14.15% 12B | 5.75% 27B |
| Qwen 规模 | 假名 CER | 43.27% 7B | 16.54% 32B | 6.27% 27B |
| 日语特化 | 假名 CER | 6.58% 基座 | 2.85% 特化 | 10.33% 基座对 5.74% 特化 |

表后解释是收益与代价并存。收益是 Claude Opus 4.6 解析模式 0.52% 与 Gemini 3.1 Pro 直接模式 0.53% 都低于 OpenJTalk 的 1.03%，Gemini 3 Flash 从非思考 0.94% 到思考 0.54% 也显示推理对高水平模型仍有增益。代价是小模型错误模式很重：无关联词替换、汉字误读、连平假名都保不住；未胜出项是多数小模型与旧版本，例如 Qwen2.5-7B 与 Gemma3-4B 仍在数十个百分点区间，不能只看最优点推广到全家族。版本效应支持新版在同规模更优，但总体趋势不等于每一步都单调，跨家族比较还受数据与训练差异影响。

规模曲线的导读要先确认坐标与图例，再看同色点随横轴右移是否下移，图中横轴为对数参数量，纵轴为 CER 百分比，颜色区分发布年份。

> **看图路径：** 1. 先确认横轴为对数参数量从 2B 到 1T 纵轴为 CER 百分比；2. 再按颜色区分 2024 年 2025 年 2026 年三组点的整体下移趋势；3. 最后观察同一年内随参数增大点位单调下降的斜率

[![原论文 Figure 3：Model size vs. kana CER (%) in parse mode for open- weight LLMs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2085d134320e/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/2085d134320e/figure-3.png)

*论文图 3。原论文 Figure 3：“Model size vs. kana CER (%) in parse mode for open- weight LLMs.”。*

这张图显示从 2B 到 1T 的开源模型点整体随规模增大而下降，同家族内单调性最清晰，2026 年绿色点在小参数段仍有高点，说明年份新不自动等于小模型可用，大参数段绿蓝点收敛到低错误区，与正文 Gemma3 与 Qwen3.5 的数字一致。教学动作是不要把最右端最低点当成全部模型的代表，要按家族与年份分别读斜率。

**假名字符错误率 × 语音合成自然度：** 假名字符错误率衡量预测假名串与人工标注的字符级差异，语音合成自然度用 UTMOS 估计听感，二者搭配的原因是发音对了不代表声音自然，论文同时报告两类指标，组合意义在于证明显式字音转换加假名输入合成能在不损失自然度的前提下降低发音错误。

### 接到语音合成后，发音与自然度各得到什么？

合成对比要回答显式注音是否值得多 1 级流水线，测的是合成语音经假名识别后的 CER 越低越好与 UTMOS 越高越好，条件是同一参考假名与同一识别器。下表只放论文实际运行的系统，oracle 真假名标明为上限参照，不作为可部署收益。

表前问题是：用大模型预测假名再送入假名输入合成器，能否在保持自然度的同时超过直接读原文的端到端系统。公平条件是发音都用同一假名识别器转写后算 CER，自然度都用 UTMOS 估计。

| 系统类型 | 输入 | 代表系统 | 发音 CER | 自然度 UTMOS |
| --- | --- | --- | --- | --- |
| 显式 G2P 加合成 | 假名 | Gemini 直接预测 | 2.38% | 3.82 |
| 端到端合成 | 原文 | Gemini Flash TTS | 3.96% | 3.75 |

表后解释是收益明确但边界也明确。收益是 Gemini 直接预测的 2.38% 接近真假名上限 2.10%，明显低于最强端到端 3.96% 与另两家 12% 以上系统，而自然度 3.82 与端到端 3.36 至 4.00 相当，支持显式 G2P 在不损自然度下改善发音。代价是识别器本身有 2.22% 误差底，合成 CER 包含识别噪声；未胜出项是 Qwen 3 TTS 自然度达 4.00 但发音 4.31%，说明自然度高不等于读得对，不能用自动自然度代替发音正确性。适用条件是需要可控读音的场景更值得用显式路线，纯追求自然度则需另行权衡。

### 解析为何多胜直接，日语特化与思考模式各在何处起作用？

论文用 3 组对照分离机制。第一组是解析对直接，对所有本地模型与多数 API 模型解析更优，小模型差距最大，Gemma3-4B 解析 34.82% 对直接 56.69%，原因是直接模式要求模型内部完成助词转换与长音归一，很多模型做不到，例如 Llama3.3-Swallow-70B 在母の死は例句中解析正确而直接输出 haha no shi ha 并漏掉长音归一，小模型甚至完全不遵指令，llm-jp-3.1-13b 直接达 86.02%，Qwen3-8B 达 100.15%。反例是 Gemini 3.1 Pro 与 GPT-5.2 直接略优，说明当模型能遵从长提示时，解析的切分误差反而成为负担，例如 2 人被切成 2 加人得到 ninin 而直接能给出 futari。

第二组是日语特化，Swallow 一致优于基座，Llama3.3-70B 从 6.58% 降到 2.85%，Qwen3-32B 从 17.07% 降到 9.30%，Gemma2-27B 从 10.33% 降到 5.74%，支持语言适配有效。第 3 组是思考模式，Qwen3-32B 与 gpt-oss-20b 差异可忽略，Gemini 3 Flash 从 0.94% 降到 0.54%，分析称思考改善了切分从而让长音规则正确跨词边界判断。这 3 组共同说明规则兜底、语言数据与推理分别作用于不同误差源。

**日语特化持续预训练 × 模型规模：** 模型规模指参数量带来的通用建模能力，日语特化持续预训练指在日语数据上继续训练以补足分词与读音知识，二者分工是规模决定上限而特化补足语言分布，搭配原因是同规模下比较 Swallow 与其基座能分离出语言适配的净增益，组合意义在于为本地部署选型提供两条可叠加的路线。

### 误差还剩在哪，哪些结论不能推广？

论文直接报告的剩余误差有两类。大模型在词典外词上强于传统工具，例如 OpenJTalk 把剣歯虎读成 kenpatora 而正确为 kenshiko，把海の幸读成 umi no koo 而正确为 umi no sachi，把甘味料读成 amamiryoo 而正确为 kanmiryoo；但大模型作为概率模型偶发常见词离谱错误，例如 Claude 把本名读成 honme 而正确为 honmyoo。数字量词是解析模式的结构性弱点，切分会破坏复合读音。未评测边界是专有名词的大规模专项评估缺失，作者在未来工作明确提出要补。

推理开销、延迟与成本未测量，不能承诺大模型路线更便宜或更快；相关性不等于因果，日语特化与规模的增益是在观测基准上成立，未做训练层面的因果分离。

**显式字音转换 × 端到端语音合成：** 显式字音转换先把文本变成确定可控的假名再送入假名输入合成器，端到端语音合成直接从原文生成波形并隐式学习发音，二者搭配比较的原因是前者可干预人名地名读音而后者省去中间模块，组合意义在于用量化的发音错误率回答何时值得保留显式模块。

### 要复述与复现，先做什么，需要哪些信息条件？

复述方法可沿一个样本走完：输入今日は良い天気です，先做形态分析得到今日、は、良い等 token 并给出キョウ、ハ、ヨイ等读音，再经规则把は改ワ、キョウ改キョー，拼接为キョーワヨイテンキデス；直接模式则是把原句与长音助词规则一起送入模型，一步得到同一假名串。复现基准先做三件事：取 JVS nonpara30 的 3000 句与人工标注，按论文去掉标点并归一化长音后算 CER；对传统工具与解析模式施加完全相同的助词与长音后处理；大模型侧用非思考默认配置并固定 JSON 解析，记录解析失败与指令违背的比例。

关键超参数与信息条件在原文缺失的是解码温度、采样种子与专有模型版本快照，复现时必须记录实际调用的模型版本与日期。合成复现需另行用 LoRA 把 CosyVoice 2 微调为假名输入，并在 CSJ 上校准 Whisper 假名识别器的 2.22% 基线，否则合成 CER 不可比。论文脚注的仓库链接在本次证据中无可达性验证，应写本次未能确认可达，不把链接当作已公开保证。

### 何时值得尝试这条路线，还需补哪项验证？

当任务是日语且读音可控性优先时值得尝试解析模式加规则后处理：先用最强可用大模型做切词与读音，再用确定性规则兜底助词与长音；若模型足够强且能稳定遵从长提示，可试点直接模式以规避数字量词的切分破坏。当本地部署受限时，优先选同家族更大规模与更新版本，并优先选经日语持续预训练的变体，论文中 Llama3.3-Swallow-70B 是本地最优的实例，但是否适用于新领域仍待验证。

还需补的验证是专有名词语料上的定向评测、思考模式在更多高水平模型上的重复性、以及延迟成本与误读率的人听评估。教学例子明确标为例子：上文今日与 2 人的 walkthrough 只用于说明流水线，不代表模型在所有上下文都如此输出。最终判断应保留为论文直接报告支持的范围：大模型在该 3000 句上显著降低 CER（%）并改善合成发音，而成本与全场景鲁棒性仍是未测量项。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
