---
title: "Post-ASR Correction in Hindi: Comparing Language Models and Large Language Models in Low-Resource Scenarios"
date: 2026-09-11
draft: false
description: "论文把印地语后纠错做成高重叠文本编辑，对比微调的 mT5、ByT5 与提示或微调的大模型，发现小模型纠错后词错误率更低，而零样本大模型呈先升后降的 n 形曲线，代价是跨域仍会退化并需要混合多源假设来缓解。"
tags: ["SFT", "模型比较", "低资源", "语音", "语音识别"]
categories: ["eacl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eacl:2026:conference-paper-id:2026.eacl-short.45"
paper_digest_source_kind: conference
paper_digest_conference_id: "eacl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.eacl-short.45/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.eacl-short.45.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9dd834e2b835d720b2f857617e30271e20180839badb889181dc4186ab5a0091"
paper_digest_api_reader_plan_sha256: "bff3270bbb594614dc7ddaf98d5dc5d3b70a8f860edfe05a0608978bf5fabc4e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "87f83afad03b70da60082355a8fe84abb6946afceb45d9ab3c0f793899f73820"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "5c6361e2cd90d27d557f00ae5aa74bc97774be3594e1b365ae97cb47d41761a6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "120db0ab955044c8482dc68624a8e8a2c1ddb807ca091f2cf26cff072185596b"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "598f24883716889d70e4297d641c70ed40648fac8c726d684591ebfce0be45c9"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "SFT"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 小模型微调为何压过大模型提示：印地语后纠错的规模与领域证据

> 英文题目：*Post-ASR Correction in Hindi: Comparing Language Models and Large Language Models in Low-Resource Scenarios*

> 会议身份：`conference:eacl:2026:conference-paper-id:2026.eacl-short.45`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.45/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.45.pdf)

标签：#SFT #模型比较 #低资源 #语音 #语音识别

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究

## 👥 作者与机构

- Rishabh Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Amrith Krishna：机构信息未能从会议 PDF 纯文本可靠映射
- Ganesh Ramakrishnan：机构信息未能从会议 PDF 纯文本可靠映射
- Preethi Jyothi：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作研究印地语自动语音识别转写后的文本纠错，输入为含音素混淆、码混和切分错误的1-best假设，输出为最小编辑后的正确转写，难点在于标注语音稀缺与形态丰富及正字法多变。方法链分三步：先用域内语音训练声学模型并解码生成噪声假设与参考配对，再以配对数据监督微调字节级ByT5与多语mT5学习源相关错误模式，最后在保留假设上对比微调小模型与零样本或少样本大语言模型的纠错输出。微调负责注入领域词表与错误先验，上下文学习仅依赖通用知识，因而前者更保守忠实而后者易过度改写并产生域外漂移。在Lahaja测试集下，mT5-base的WER为16.17%，低于ByT5-small的17.46%。字节级建模使ByT5更擅长字符级音译与词语切分，子词语义覆盖使mT5更擅长语义不一致，相对大模型的宽泛泛化形成关键机制差异，实际意义是轻量微调更适配低资源纠错。该结论适用边界是域外数据比例过高时性能仍退化，马拉地语与泰卢固语仅为初步验证，尚未验证更大规模跨域外推。原文报告延迟显示mT5-small纠错延迟最低，显著快于大语言模型，推理开销更适合部署。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/cyfer0618/Post-ASR-Correction-in-Hindi> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/cyfer0618/Post-ASR-Correction-in-Hindi> — 链接可访问（HTTP 200）
- 第三方资源：<https://pytorch.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 低资源印地语识别错在哪里，为什么值得单独做纠错？

输入是印地语语音，目标是得到可用的文字转写。论文面对的起点是标注语音文本对很少，而纯文本相对多，同时印地语存在方言口音、语码混合、正字法多变和复合词形态，识别器容易在英文词音译、数字、欠表示字符、复合词拆分和词切分上出错。做法不是重训声学模型，而是把识别器输出的一最佳假设当作带噪文本，再用语言模型做最小改写，使其更接近参考转写。

学习依赖上，读者需要先接受后纠错只处理文本到文本的映射，声学信息不再进入纠错器，因此它能改的是语言层面可恢复的错误，不能补回声学完全丢失的内容。论文的代码与模型当前可用，地址在证据中的仓库链接，第三方依赖为 PyTorch，同样当前可用。

**自动语音识别 × 后纠错：** 自动语音识别负责把语音波形转成文字假设，分工是声学建模与解码；后纠错负责只改假设中的局部错误，分工是文本编辑。搭配理由是低资源下语音文本对少而纯文本多，组合意义是用文本知识弥补声学模型的系统性误识，而不重训声学模型。

本解读只讲论文实际做的印地语后纠错主线，以及附带的马拉地语和泰卢固语初步验证，不扩展到通用语音对话或多模态融合。必须保留的信息是实验条件、基线是否一致、指标方向和关键数字，输出按任务路线、方法全景、组件计算、构造训练、实验条件、结果反证、复现收束展开。

### 同输入同目标的已有路线与本文位置有何不同？

同输入同目标的路线包括对多候选重打分、把语音直接喂给大模型的语音上下文学习，以及把大模型当解码器的深度融合。论文指出这些路线要么需要大量标注语音，要么计算开销大，要么在低资源印地语下多候选重打分并不稳定。另一类相近工作是用一最佳假设做纠错，足以处理词切分、欠表示字符和复合词问题。本文选择一最佳假设到参考的监督编辑路线，运行阶段只在文本侧工作，不改声学模型参数。

这样的对照是有源的，因为输入都是识别假设，目标都是降低转写错误，监督都来自假设与参考对，区别只在是否引入语音编码与是否更新大参数。与类别不同的通用问答能力不能直接当作同条件胜负，论文因此把比较限定在同一评测集和同一假设来源下进行。

### 要回答的两个研究问题是什么，样本层面错误长什么样？

论文提出两个问题。第一，模型规模在印地语后纠错中如何起作用。第二，上下文学习的大模型与微调的小模型相比，在处理特定识别器错误时差在哪里。为理解错误，先沿一个样本走完全程。输入是一句含战车游行、故意、游客、43 分钟延误的印地语语音，识别假设把复合词拆开，把英文游客音译错，把数字词写错，并把句尾两个词粘连。

纠错器的表示是字符或子词序列，组件是字节级或多语种编码器解码器，目标是输出与参考更接近的词序列，输出是改写后的文本。教学例子仅用于说明错误类型，不附加论文之外的数值或效果。

下面导读图 3 有助于建立错误分类的直觉。该图把同一句的参考、假设和纠错后文本并排展示，并用颜色标出改动位置，底部归纳为英文词、数字、词切分、复合词和欠表示字符 5 类，初学者应先看懂分类再读模型对比。

> **看图路径：** 1. 先对照同一句的参考、假设与纠错后文本三行；2. 再看粉色与绿色高亮落在哪些词上，区分改对与未改对；3. 最后看底部五类错误标签与例句的对应关系

![原论文 Figure 3：Example of ASR hypothesis errors in Hindi, categorized by error types: English word…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eacl-2026/2074dce6cc36/figure-3.png)

*论文图 3。原论文 Figure 3：“Example of ASR hypothesis errors in Hindi, categorized by error types: English word transliteration (t.y ̄urest.a), number transcription (v ̄ana, tait ̄al ̄ısa), word…”。*

图 3 显示假设中的拆分、音译和粘连错误并未被一次性改全，纠错后文本仍残留数字词错误，这说明后纠错是局部编辑而非重写。粉色与绿色高亮对应改前与改后的差异位置，底部标签把每个差异映射到语言现象。复述方法是先抄下假设与参考的词对齐，再按 5 类标签计数，而不是只看总词错误率。

### 数据如何从语音变成纠错训练对，整体流程是什么？

方法全景是先用语音文本集训练或选用已有识别器，再用该识别器对语音解码得到一最佳假设，把假设与参考配成训练对，然后微调语言模型或用大模型做提示纠错，最后在留出测试集的假设上评测。域内指与评测集说话人、话题和词汇相近的数据，域外指风格话题不同的朗读或广播数据。论文用域内加域外、单识别器加多识别器来扩大错误多样性。推理时不再接触音频，只输入假设文本。

下面导读图 1 有助于看清 3 路数据如何汇合。该图底部是两段域内语音与一段域外语音，中部分别经不同识别器得到三份假设文档，顶部用加号合并后沿红色箭头训练出微调后的模型，初学者应沿从下到上的箭头先走主路径。

> **看图路径：** 1. 先从底部三段波形向上看，区分两个域内与一个域外分支；2. 再看三份假设文档上方的加号，确认是合并后统一训练；3. 最后沿右上红色训练箭头看假设到参考的配对方向

![原论文 Figure 1：Overview of the data preparation process illustrating how in-domain and out-of-domain speech are…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eacl-2026/2074dce6cc36/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of the data preparation process illustrating how in-domain and out-of-domain speech are used for fine-tuning LM and LLM models.”。*

图 1 解释了后文 D1 到 D4 的构造逻辑。左侧两路是域内语音经不同识别器产生的假设，右侧一路是域外语音产生的假设，三者合并意味着纠错器同时见到同域不同错和跨域错。红色箭头标注的假设到参考配对是唯一的监督来源，训练后得到可直接改写新假设的模型。

### mT5、ByT5 与大模型各自负责什么计算？

白话说，mT5 是多语种子词模型，先把文本切成子词再编码解码，英文名是 multilingual T5。ByT5 是无词表字节级模型，直接对字节操作，英文名是 byte-level T5。大模型侧包括 Nanda 10B 双语聊天模型和 GPT-4o mini 指令模型，以及不同规模的 LLaMA 变体。mT5 的分工是利用子词语义覆盖处理 broader 的语义不一致，ByT5 的分工是利用细粒度看到单字符扰动，大模型的分工是靠通用知识做零样本或少样本改写。

**mT5 × ByT5：** mT5 用子词切分，分工是捕捉词与语义层面的连贯性；ByT5 直接操作字节，分工是捕捉单字符增删替。搭配理由是印地语错误同时跨字符与词两层，组合意义是论文用两者对照定位哪类错误需要细粒度，哪类需要语义覆盖。

符号与输入先交代如下。训练集记为语音与参考的集合，其中单条语音记为语音 utterances，参考记为正确转写。解码后每条语音得到一最佳假设，假设与参考配成纠错训练对。原文给出集合定义的起始形式，含义是下标从 1 到 n 的配对集合，后续公式在此基础上定义假设集合与训练使用方式。

\[train = {(ai, ti) | 1 ≤i ≤n} de-\]

该公式只定义数据集合的记法，不包含损失或梯度路径。论文未报告优化器细节、冻结层数和学习率时，本解读指出具体缺项，不从模型名字推定实现。计算目标是给定假设生成更接近参考的文本，原文明确的实现是微调时用假设为输入、参考为目标，提示时用指令加示例约束只输出改写文本。

### 复合词错误如何被检测，算法步骤是什么？

为细粒度评估复合词，论文给出基于字典树的方法。先用词汇表建字典树，再把参考与假设分词，对参考词生成切分候选，用字典树验证切分是否合法，得到合法复合词集合，最后检查这些词是否完整出现在假设分词中，缺失或被拆开即记为错误。该算法支持对印地语这类形态丰富语言的词完整性评估。它的作用不是训练损失，而是错误分析工具，帮助区分模型是改对了复合词还是破坏了原词。实现上论文未给出阈值以外的可调参数，复现时按附录算法逐字实现即可，不补写拿掉某步必然怎样的推断。

### 训练用了哪些数据组合，提示又是如何构造的？

训练构造按 D1 到 D4 递进。D1 是域内单识别器假设，D2 加入域内另一识别器假设，D3 再加入域外假设，D4 是多识别器加多域。微调对象是 ByT5-small、ByT5-base、mT5-small、mT5-base，以及 Nanda 10B 在部分条件下的微调对照。GPT-4o mini 不微调，只做零样本、一样本和少样本提示，示例从域内语料经随机采样和句子嵌入相似度检索得到，以保证上下文相关。论文还做过 5 假设输入的试点，报告词错误率（WER，单位 %）为 45%，说明多假设信号若无针对性建模提升有限。

**微调 × 上下文学习：** 微调用假设到参考的平行对更新参数，分工是学到特定识别器的错误分布；上下文学习冻结参数只给示例，分工是靠通用语言能力做最小改写。搭配理由是比较领域偏置与通用能力，组合意义是检验大模型不更新参数时是否仍能做高保真编辑。

训练资源方面，论文报告使用两块 NVIDIA A100-SXM4-80 GB，单次训练需 4 到 48 小时，软件基于 PyTorch。原文未完整报告批大小、学习率和早停口径，因此复现时只能先按数据组合与模型规模对齐，不能推定梯度路径或收敛行为。提示复现需保留附录指令中对 6 类错误的约束和只输出最终文本的要求，否则大模型容易输出解释性文字而污染评测。

### 评测集、基线和指标条件是否一致？

评测用 Lahaja 印地语集，含 12.5 小时、132 名说话人、83 个地区，覆盖朗读、即兴和对话。微调用 IndicVoice，65 小时、287 名说话人，与 Lahaja 域和词汇有重叠。域外泛化用 Kathbath 朗读和 Shrutilipi 广播对话。基线是同一 Lahaja 测试集上的 IndicWav2vec 与 IndicConformer 假设，作为纠错前起点。指标是词错误率，越低越好，附带字符错误率观察字形层面。比较时必须核对同一假设来源、同一训练组合和同一聚合对象，数值相同不代表指标相同。

**域内 × 域外：** 域内指说话人分布、话题与词汇与评测集相近的语音，分工是提供目标错误模式；域外指朗读或广播等风格不同但量更大的语音，分工是扩大错误多样性。搭配理由是印地语域内语音文本对不足，组合意义是用混合比例在保真与泛化之间取舍。

**词错误率 × 字符错误率：** 词错误率按词统计替换删除插入，分工是反映可读转写的整体代价；字符错误率按字符统计，分工是反映发音与正字法层面的细小偏差。搭配理由是印地语有复合词拆分与变音符号问题，组合意义是同时看两率才能区分是改对了词还是只改对了字形。

下表先回答基线是否选对的问题。比较问题是哪个开源印地语识别器更适合当纠错起点，公平条件是同一 Lahaja 集上的词错误率与字符错误率，指标方向都是越低越好。

| ASR 系统 | 词错误率 | 字符错误率 | 相对表现 | 在本文的用途 |
| --- | --- | --- | --- | --- |
| IndicConformer | 18.015% | 6.458% | 最好 | 强基线假设来源 |
| IndicWav2vec | 28.605% | 10.54% | 较好 | 弱基线假设来源 |
| SALSA | 74.43% | 54.54% | 最差 | 说明不适合印地语 |

表后解释是 IndicConformer 起点明显低于 IndicWav2vec，因此后文纠错绝对值不能跨假设来源直接比大小，只能比相对起点下降。代价是 SALSA 这类高错误起点未被选作主线，论文未评测在极高噪声下纠错是否仍有效，这是明确的未评测边界。未胜出项是 IndicWhisper 与 Seamless 等更高错误系统，它们只用于说明基线选择，不进入主纠错对比。

### 微调小模型相对起点降了多少，大模型提示为何反而变差？

主结果按假设来源分别报告。起点是 IndicWav2vec 约 28.6%（WER，单位 %），IndicConformer 约 18.02%（WER，单位 %）。从 D1 到 D3，ByT5 与 mT5 的词错误率（WER，单位 %）持续下降，论文以 IndicConformer 假设上 mT5 从 D1 的 17.50% 降到 D3 的 16.31% 为例，支持多域多错暴露提升鲁棒性的判断，但同时承认这是数据规模与假设多样性的联合效应，不能单归因于多样性。D4 的多识别器加多域在 IndicConformer 上给出 mT5 最好结果，略优于单识别器域外训练。GPT-4o mini 的少样本随示例数增加有所改善，但在大模型侧整体仍落后于微调小模型。

下面导读图 2 是核心反直觉证据。该图横轴为 1B 到 70B 参数规模，纵轴为词错误率百分比，两条线分别对应两种假设来源，初学者应先确认纵轴向下为变好，再看中间规模的隆起。

> **看图路径：** 1. 先确认横轴为参数规模从 1B 到 70B，纵轴为词错误率百分比；2. 再比较蓝色与红色两条线在 8B 到 10B 处的峰值位置；3. 最后看 70B 处回落后的高度是否仍高于起点

![原论文 Figure 2：Inverse scaling phenomenon in Hindi post- ASR correction across varying LLaMA model sizes.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eacl-2026/2074dce6cc36/figure-2.png)

*论文图 2。原论文 Figure 2：“Inverse scaling phenomenon in Hindi post- ASR correction across varying LLaMA model sizes.”。*

图 2 显示零样本下从 1B 到 3B 再到 8B 到 10B，词错误率先升后在 70B 回落，形成 n 形逆扩展。蓝色线与红色线都在 10B 附近达到峰值，70B 回落后仍高于小规模起点，更远低于微调小模型的水平。论文用过度纠错、错误类型敏感性和域漂移三点解释，即大模型更易做语义合理但与参考词形不对齐的改写，且随规模更易偏离域内词汇。

下表把起点与最好区间的对应关系固定下来。比较问题是在相同假设来源下微调是否带来可部署收益，公平条件是同一 Lahaja 测试集与同一假设解码，指标为词错误率百分比越低越好。

| 训练条件 | 评估假设来源 | 纠错前基线词错误率（WER，单位 %） | 纠错后代表词错误率（WER，单位 %） | 支持的判断 |
| --- | --- | --- | --- | --- |
| D1 域内单识别器 | IndicConformer | 18.02 | 17.50 | 微调已低于起点 |
| D3 域内加域外 | IndicConformer | 18.02 | 16.31 | 加域外进一步下降 |
| D1 域内单识别器 | IndicWav2vec | 28.6 | 未报告同格最优 | 需按来源分别看表 |
| 零样本大模型 | 两种假设来源 | 28.6，18.02 | 高于起点后回落 | 规模不能代替领域偏置 |

表后解释是主要收益来自微调学到特定识别器错误分布，具体代价是需要构造假设到参考的平行对并承担微调时间。反例是零样本中型大模型反而抬高错误率，70B 回落仍未胜出。未胜出项包括微调的 LLaMA 与提示的 GPT-4o mini，它们在主结果中一致落后，因此不能用通用规模代替任务适配。

### 混合比例、错误类型和延迟分别支持什么与不支持什么？

消融先看域内外混合比例。论文在固定每批域内与域外比例下试验，3 比 7 的批次组成给出较好结果，支持批组成对保留域内错误模式很关键。但更高域外比例仍有残留退化，说明固定比例 alone 不够，论文提出域感知正则、排练约束或重要性加权可作待验证方向，原文明确这是开放问题。接着看错误类型，ByT5 在字符中心错误、语码混合、复合词拆分、词切分、数字误识和欠表示字形上纠正更多，得益于字节粒度，mT5 在语义覆盖上更稳，但对极细字符变化不敏感。延迟上 mT5-small 最快，显著快于大模型，但论文未把延迟与精度做联合优化，因此不能承诺精度最优即延迟最优。

下表是细粒度计数的原表选择。比较问题是 D4 模型在哪类错误上改对多、改错多，公平条件是同一 Lahaja 集与同一 D4 训练，指标是词级别改对、改错与未变计数。

| Experiments | IW →CW | CW →IW | No Change |
| --- | --- | --- | --- |
| Word Segmentation | 241 | 253 | 722 |
| Compound Words | 84 | 97 | 206 |
| English Words | 730 | 456 | 3087 |
| English Number | 19 | 22 | 119 |
| Hindi Number | 33 | 28 | 97 |
| Underrepresented Character | 2287 | 1798 | 3263 |

表后解释是该表显示欠表示字符与英文词是大头，改对数与引入新错数同时存在，说明编辑并非单向收益。具体代价是 ByT5 虽改对更多细粒度错误，也会引入更多改错，需要结合总词错误率判断净收益。反例是数字类样本少，计数波动大，不能据此推广到所有数字场景。马拉地语与泰卢固语的初步结果显示 mT5-base 更低，但缺乏语言学专家参与的深度分类，因此只支持趋势可能泛化，不支持已验证泛化。

### 哪些结论证据不足，哪些边界尚未评测？

论文直接报告的是印地语主结果、n 形曲线和混合训练收益，有限解释是对过度纠错与域漂移的机制归因，未验证推测是更大规模或新正则一定能同时保住域保真与泛化。缺失证据不是技术错误，但必须用可能与待验证表达。相关性不等于因果，数据量与多样性同时增长时不能单归因。未测量误判率细分布、实际部署延迟分布和标注成本时，不承诺这些量得到改善。训练资源与推理开销分开讨论，总体趋势不等于每组每步成立。其他边界包括只用 GPT-4o mini 做少样本而缺 GPT-4o 对照，原因是经费有限，以及马拉地语与泰卢固语缺详细分析，这些都在原文限制中明确交代。

### 复现应先做什么，需要保留哪些信息条件？

复现先做三件事。第一，用同一 Lahaja 测试集复现两个基线假设，核对 IndicWav2vec 与 IndicConformer 的起点是否与原文同一量级，再接入纠错。第二，按 D1 到 D4 重建假设到参考对，保留识别器来源与域内外标签，批混合比例先从 3 比 7 起步。第三，微调 ByT5-small 与 mT5-base 作为最小可运行对照，再跑 GPT-4o mini 的零到五样本提示，示例检索保留句子嵌入相似度分支。关键超参数与划分若原文未给，应记录为缺项而不猜测。

代码与模型当前可用，PyTorch 链接当前可用，但可用不等于开箱可运行，还需核对权重版本、依赖与解码脚本。评测只报词错误率不够，应同时报字符错误率与分错误类型计数，避免把自动指标当成人工可接受性。

### 何时值得尝试这条路线，一句话如何带走？

当已有可用的印地语识别器、能拿到域内假设到参考对、并能承担短时微调时，值得先试 mT5 或 ByT5 的一最佳假设纠错，尤其错误集中在音译、切分和复合词时优先试 ByT5，语义漂移明显时优先试 mT5。当只有域外大语料时，应做域内外混合而非全量域外，并监控域保真。零样本大模型可作快速探针，但不应期待它直接替代微调。还需补的验证是域感知正则、更多识别器来源和跨语言深度错误分析。带走的一句话是小模型因学到特定错误分布而胜出，大模型因通用改写而漂移，规模曲线呈 n 形，领域混合是当前最实际的缓解手段。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eacl-2026 论文汇总](/posts/conference-eacl-2026/)
