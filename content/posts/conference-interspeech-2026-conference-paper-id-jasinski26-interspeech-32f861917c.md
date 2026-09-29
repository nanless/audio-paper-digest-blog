---
title: "From Text Metrics to Model Internals: A Study of Whisper ASR Hallucination Detection"
date: 2026-09-27
draft: false
description: "该研究在真实语音人工标注上对比文本特征、大语言模型与 Whisper 解码器内部探测三条路线，最强可部署证据是内部序列 BLSTM 在无参考下达到 F1 65.5%，而文本与内部融合进一步达到 F1 68.3%，代价是失去零样本可用性并需要直接访问模型内部。"
tags: ["RNN", "模型评估", "语音", "语音识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:jasinski26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/jasinski26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/jasinski26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "50e60ab476377c1e36b5098bc1cb96d1d52c1abaacd5b57fd858aff7167dad43"
paper_digest_api_reader_plan_sha256: "e30573755c8cb4001aaa21d51e04c952d09617f914cffe372d2ce4546be96b2a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3c88089b92a364a2604869f11924a7722db8f314aeb0efec1f049f4f75be755c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "50c3760edc260177eaa5a282b15b87e505c8ced9cb7f4e1e18e3af6cf937c45d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ebd13ba76721cb9f1e65297672ff24d70df4dbb8cd1a9b3e323d1dc9192146c5"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "87097635ef34365ded23fb8747ca9be106bfdbfecadfd9cf22f8e53c408be4b3"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.rnn","label":"RNN"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "RNN"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 没有参考文本时，幻觉还能被抓住吗：从文本指标到解码器内部的检测对比

> 英文题目：*From Text Metrics to Model Internals: A Study of Whisper ASR Hallucination Detection*

> 会议身份：`conference:interspeech:2026:conference-paper-id:jasinski26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/jasinski26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/jasinski26_interspeech.pdf)

标签：#RNN #模型评估 #语音 #语音识别

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Jan Jasiński：机构信息未能从会议 PDF 纯文本可靠映射
- Mateusz Barański：机构信息未能从会议 PDF 纯文本可靠映射
- Julitta Bartolewska：机构信息未能从会议 PDF 纯文本可靠映射
- Marcin Witkowski：机构信息未能从会议 PDF 纯文本可靠映射
- Konrad Kowalczyk：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务输入为真实语音及其自动语音识别 Automatic Speech Recognition 转写假设，输出为话语级是否含幻觉 Hallucination 的二分类判断。实际难点在于流畅编造与普通音似错误在文本表面高度相似且部署时无参考转写可用，纯文本线索在参考缺失时判别力急剧下降。方法链分为文本特征、语言模型与内部状态三路：先从假设与参考中抽取误差与语义特征并送入树集成分类器，输出幻觉概率作为第一路信号。再以领域病理知识与少样本改写提示驱动大语言模型 Large Language Model 做二分类，输出第二路判断以补充语义失实视角。最后对 Whisper large v3 解码器中间层完整解码序列做池化探测与双向长短时记忆网络 Bidirectional Long Short-Term Memory 分类，输出第三路参考无关概率，三路中文本与内部概率经逻辑回归元分类器做晚融合，相对已有方法的关键差异在于用中间层系统性漂移取代单点不确定性并实现跨范式互补，具有参考无关部署意义。在 HALAS 上 Whisper large v3 子集的测试中，晚融合取得 F1 为 68.3% 与 ROC AUC 为 90.0%，优于单范式检测器。该结论仅适用于短至中长英文财报类朗读语音与 Whisper 系编码器解码器架构，对单字功能词插入与长尾非典型幻觉仍大量漏检。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/DSP-AGH/asr_hallucination_> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么要读这篇？

本文的输入是语音识别模型的转写结果及其对应的音频与可选的标准答案文本，目标是判断一整句转写是否为幻觉。初学者可以这样理解白话含义：语音识别幻觉是指模型输出听起来流利完整，但与实际说出的声音没有语音依据，例如凭空添加短语、编造句子或陷入重复循环。英文对应为 hallucination。论文聚焦的模型是 Whisper large v3，英文为 Whisper large v3，数据是真实语音的人工标注集合。必须保留的信息包括 3 条检测路线的条件差异、是否需要标准答案、以及各自在同一数据集上的可复述数字。

本文的输出是一套可核对的方法解读：先讲任务与已有路线的局限，再走完一个样本在 3 种路线下的处理流程，最后讲实验条件、主结果、失败情形与复现要点。

**词错误率 × 幻觉：** 词错误率负责统计转写与参考文本之间字词层面的增删改总体偏差，幻觉负责指代其中一类特殊错误即流利但与音频无语音依据的虚构内容，二者搭配的原因是仅看错误率高低无法区分听错与凭空编造，组合的意义是把检测目标从一般转写质量收窄到需要单独拦截的高风险虚构片段。

论文反复强调的一个判断是，词错误率等总体误差指标不能直接等同于幻觉检测。词错误率的白话含义是把预测文本与标准答案对齐后统计字词错误的比例，英文为 Word Error Rate，缩写为 WER。幻觉只是高错误中的一种模式，听错一个词与凭空编造一段话可能得到相近的错误率，但风险与处理方式完全不同。因此论文把检测定义为二分类问题：给定一句预测，输出是否为幻觉，而不是预测错误率数值。

### 已有路线在输入、监督和运行阶段上有何不同？

第一类是基于文本误差指标的评估路线，输入是预测文本加标准答案，监督来自人工或自动对齐后的错误计数，运行阶段主要在模型开发与评测时使用。论文提到的代表包括词错误率、字符错误率、英文为 Character Error Rate、插入错误率、英文为 Insertion Error Rate、长度比、英文为 Length Ratio、BERTScore 与 SeMaScore，以及近期评估框架 SHALLOW。这类方法的优点是计算简单且可解释，但论文指出它们被设计为预言机条件，即需要标准答案，因而不能直接部署为零样本检测器。

第二类是大语言模型路线，输入是预测文本加提示词，可选地加入标准答案与示例，监督来自提示中给出的幻觉与非幻觉错误的定义与示例，运行阶段依赖外部商用模型在线推理。论文复现了要求模型区分语义虚构与声学听错的零样本提示，并指出已有工作多在同时给出预测与标准答案时使用，同样属于预言机条件。

第 3 类是内部表示路线，输入是被测语音识别模型解码过程中产生的嵌入序列，监督来自人工标注的整句幻觉标签，运行阶段不需要标准答案，但需要能够读取被测模型的中间状态。论文引用了用最终结束符嵌入区分高低错误率的工作，并将其扩展为针对幻觉这一特定错误模式的层级探测。

### 论文要解决的具体问题与评测口径是什么？

论文要回答的问题是：在真实语音、人工标注的条件下，哪种信息最能可靠地检出 Whisper 的幻觉，特别是在没有标准答案的部署条件下。为此作者使用 HALAS 数据集，该数据集基于 Earnings-22 音频，由 7 种先进语音识别模型生成预测并经人工标注。本文只研究其中 Whisper large v3 的子集，报告为 3611 条预测中有 858 条被标为幻觉，占比 23.8%，另有 18 条含循环重复的幻觉，占比 0.5%，其余为非幻觉。标注原本是片段级，但本文统一为整句级检测。

评测沿用数据集预定义的训练与测试划分，交叉验证时再按幻觉率与音频时长分层切为五折，并要求同一说话人的录音分在同一折，避免说话人泄露。指标同时报告受试者工作特征曲线下面积、英文为 Area Under the Receiver Operating Characteristic Curve，缩写为 ROC AUC，以及准确率、精确率、召回率与 F1 分数。其中 ROC AUC 反映排序能力，F1 反映在某一阈值下的精确率与召回率平衡。论文明确指出，数值相同不代表指标相同，百分点变化与相对百分比变化含义不同，比较时必须核对数据集、模型、阶段与聚合对象。

### 三条路线如何组成一次完整对比？

可以沿一个样本走完全程。假设有一段会议录音及其 Whisper 转写结果，文本路线先计算该转写与标准答案之间的误差与语义距离，再把这些数值拼成特征向量送入 XGBoost 等分类器，输出幻觉概率。大语言模型路线把预测文本、可选的标准答案、Whisper 已知病态短语表与少量标注示例拼成提示，调用 GPT-4o mini 或 Gemini 系列模型，要求其返回二分类标签。内部路线不看标准答案，而是在 Whisper 解码时取出每一层、每一步的嵌入序列，经池化或双向长短期记忆网络建模后输出幻觉概率。

最后的融合路线把文本分类器与内部探测器的概率加音频时长送入逻辑回归元分类器，输出最终判决。3 条路线的关键差异在于信息条件：前两条的最强形态都需要标准答案，内部路线始终不需要标准答案，但需要模型访问权限。论文对每条路线都做了针对性改进：文本路线引入树集成与递归特征消除，大语言模型路线逐步加入病理知识与领域示例，内部路线从单点结束符嵌入扩展为全序列与多层搜索。

### 文本特征与语言模型提示各自计算什么？

文本特征分为两组。预言机组的白话含义是必须有标准答案才能算，英文为 oracle，包括词错误率、字符错误率、插入错误率、长度比、BERTScore、英文为 BERTScore、SeMaScore、英文为 SeMaScore，以及通用幻觉短语检测器、英文为 Common Hallucinated Phrase detector，缩写为 CHP。该检测器的动作是检查某条已知病态短语是否出现在预测中却不在标准答案中。参考无关组的白话含义是只用预测文本与音频元信息即可计算，英文为 reference-free，包括 5 元组重复率、英文为 5-gram Repetition rate、停用词比例、英文为 Stopword Ratio、GPT-2 困惑度、英文为 GPT 2 Perplexity、每秒字符数、英文为 Characters Per Second，缩写为 CPS、wav2vec 强制对齐置信度、英文为 wav2vec Forced Alignment，以及朴素通用幻觉短语检测器、英文为 Naive CHP detector，缩写为 NCHP，后者只检查预测中是否出现已知病态短语，不对照标准答案。

**预言机特征 × 参考无关特征：** 预言机特征分工是借助标准答案计算结构与语义偏离，例如词错误率、字符错误率、BERTScore 和 SeMaScore，参考无关特征分工是只用预测文本与音频元信息判断异常，例如重复率、困惑度、每秒字符数与强制对齐置信度，二者搭配是为了对比有答案时与部署时无答案时的检测上限与下限，组合意义在于揭示文本路线对参考答案的依赖程度。

**通用幻觉短语检测器 × 朴素：** 通用幻觉短语检测器分工是在有参考时判断已知病态短语是否出现在预测中却不在标准答案中，朴素分工是在无参考时只检查预测中是否出现这些已知病态短语，二者搭配是为了把同一份非语音诱发的先验知识分别用于可评估与可部署两种条件，组合意义是检验模型特有病理知识在多大程度上可以迁移为零样本规则。

大语言模型路线的计算过程是提示工程而非训练被测模型。基线复现了文献中的零样本提示，内容包括幻觉与非幻觉错误的区分说明、5 个示例与二分类输出要求。改进分 3 步：先把推理模型从 GPT-4o mini 与 Gemini 2.0 Flash 升级到 Gemini 3.0 Flash 以提高推理能力；再把 Whisper 在非语音音频上已知的幻觉短语表写入提示，注入模型特有病理知识；最后加入 10 条来自 HALAS 训练集的针对性少样本示例。

参考无关版本则删除标准答案，并把判断标准改为内在文本异常与错误模式识别。论文提供了全部提示的外部链接，但本次资源状态显示该链接当前不可用，因此复现时不能依赖该链接直接获取提示文本，只能按正文描述重建。

### 内部状态探测如何从解码序列得到判决？

Whisper 采用动态回退解码策略，初始为 5 路束搜索，若内部置信度不足则转向更高温度的随机采样，置信度启发式包括平均对数概率、英文为 Average Log-probability、压缩比、英文为 Compression Ratio 与非语音概率、英文为 No-Speech Probability。论文首先验证仅用这 3 个启发式训练逻辑回归检测幻觉，得到 F1 仅 23.6%，说明它们无法区分幻觉与一般声学退化。真正的内部探测取出解码器每一层在每一步的嵌入，并区分自注意力输出、英文为 Self-Attention，缩写为 SA、交叉注意力输出、英文为 Cross-Attention，缩写为 CA，以及经过多层感知机后的块输出、英文为 decoder block output，记为 D。

线性探测阶段用逻辑回归分别检验最终结束符嵌入、英文为 End-of-Sequence，缩写为 EOS，以及对全序列做均值池化、最大池化及其逐步差分、英文为 deltas 后的固定向量，以 ROC AUC 衡量线性可分性。序列检测阶段则用双向长短期记忆网络、英文为 Bidirectional Long Short-Term Memory，缩写为 BLSTM，直接对完整嵌入序列建模，并通过网格搜索选择最优层组合与是否拼接差分。

**解码器内部探测 × 双向长短期记忆网络分类器：** 解码器内部探测分工是取出 Whisper 解码过程中各层自注意力、交叉注意力与前馈输出后的嵌入序列，双向长短期记忆网络分类器分工是沿解码时间步同时向前向后建模这些嵌入的变化关系，二者搭配的原因是单步嵌入只能看到局部不确定性而幻觉表现为整句生成轨迹的系统性偏移，组合意义是把分布在中间层的置信度痕迹转化为整句级的参考无关判决。

该设计的安排理由是幻觉不是单个嵌入值的尖峰，而是整句生成轨迹的系统性偏移，因此均值类聚合与序列建模应优于最大池化，中间层应比过早或过晚的层保留更多可分信息，这些预期在后续层级曲线中得到验证。

### 哪些部分需要训练，哪些只是调用与搜索？

本研究没有训练 Whisper 本身，也没有微调大语言模型。需要训练的是 3 类检测器。文本分类器包括逻辑回归、英文为 Logistic Regression、随机森林、英文为 Random Forest 与 XGBoost、英文为 XGBoost，在 HALAS 训练划分上训练，并用递归特征消除、英文为 Recursive Feature Elimination，缩写为 RFE 选择特征，分别在全特征与严格参考无关两种条件下优化。内部线性探测的逻辑回归与序列 BLSTM 同样在训练划分或五折交叉验证下训练，网格搜索决定最优提取层与表示位置，标准差报告不超过 3 至 3.5 个百分点。

融合阶段的元分类器为防止数据泄露，先用五折交叉验证生成训练集的折外预测，再用折外概率加音频时长训练逻辑回归。大语言模型部分没有参数更新，只是调用商用模型接口并做提示与示例搜索。原文未报告文本分类器与 BLSTM 的具体学习率、轮数、早停与梯度路径细节，也未报告大语言模型调用的温度与采样参数，因此复现时应明确记录这些为缺项，不从模型名称推定实现。所有监督信号最终都来自 HALAS 的人工整句幻觉标签，而非自动误差指标。

### 数据、划分、基线与指标方向如何保证可比？

数据条件已在问题节交代，关键是同一说话人不跨折，且训练与测试沿用预定义划分。基线设置上，文本路线以逻辑回归为线性基线，对比随机森林与 XGBoost，以检验非线性交互是否有增益。大语言模型路线以开箱即用的 GPT-4o mini 与 Flash 2.0 为基线，逐步升级到 Flash 3.0 并加入病理知识与少样本，以分离模型能力与提示知识的贡献。内部路线以最终结束符嵌入与单层线性探测为参照，对比全序列池化与 BLSTM，以检验序列建模的增量。

指标方向为 ROC AUC、准确率、精确率、召回率与 F1 均越高越好，但论文强调高召回常以低精确率为代价，阅读时不能只看 F1。成本方面，文本特征计算量极小，大语言模型有显著计算开销与延迟，内部 BLSTM 需要访问模型中间状态但推理时无需标准答案。论文未测量端到端延迟与误判导致的下游损失，因此不能从 F1 提升直接承诺部署成本下降。

### 单特征与文本分类器给出什么上限与下限？

比较的问题是单个文本指标本身能否区分幻觉，公平条件是同一 HALAS 检测任务下的 ROC AUC，方向为越高越好。下表整理论文报告的代表性单特征区分度，数值保留原文写法。表前说明已满足相邻段落要求，表后将解释整体得失。

| 特征组 | 特征 1 | 特征 2 |
| --- | --- | --- |
| 预言机特征 ROC AUC | BERT 82.3% | CER 81.9% |
| 参考无关特征 ROC AUC | CPS 68.2% | PPL 66.0% |

该表显示预言机单特征区分度明显更强，语义与结构维度分别达到 80% 以上，而参考无关单特征最高仅为每秒字符数的 68.2% 与困惑度的 66.0%，停用词比例与重复率接近随机。

这支持论文的判断：无参考时单阈值规则不足，需要融合多个弱信号。未胜出项同样重要：重复率在真实语音上几乎无效，说明循环检测规则主要针对极端重复，对更常见的单句虚构帮助有限。

> **看图路径：** 1. 先对比同一分类器下绿色全部特征柱与紫色参考无关柱的高度落差；2. 再横向比较三种分类器在全部特征下的排序；3. 最后读出每个柱顶标注的具体 F1 数值

[![原论文 Figure 1：F1 scores for text metric hallucination detection across classifiers using all vs reference-free…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0a0b13ce9783/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0a0b13ce9783/figure-1.png)

*论文图 1。原论文 Figure 1：“F1 scores for text metric hallucination detection across classifiers using all vs reference-free features.”。*

上图比较 3 种分类器在全特征与参考无关两种条件下的 F1 分数。可见 XGBoost 在全特征下最高，逻辑回归最低，而切换到参考无关条件后三者均大幅下跌，其中 XGBoost 从 62.8 跌至 37.7，逻辑回归跌至 22.4。解释是失去语义与结构参考锚点后，模型变得过度保守，逻辑回归召回率仅 15.5%。这说明文本路线计算代价虽小，但在部署条件下可靠性不足，只能用于过滤最离谱的预测。

| 指标 | 全特征 XGBoost | 全特征逻辑回归 | 参考无关 XGBoost | 参考无关逻辑回归 | 指标方向 |
| --- | --- | --- | --- | --- | --- |
| Recall | 74.1% | 未报告 | 未报告 | 15.5% | 越高越好 |

该表的主要收益是确认树集成通过非线性交互优于线性基线，代价是仍依赖标准答案。反例是参考无关 XGBoost 的 F1 甚至低于全特征逻辑回归，说明特征条件比分类器选择更关键。

**晚融合 × 元分类器：** 晚融合分工是保留文本分类器与内部探测器各自独立训练与输出概率，只在决策层合并信息，元分类器分工是以逻辑回归接收两个概率加音频时长并学习最终加权，二者搭配的原因是两种路线错误模式部分互补但特征空间完全不同不宜早期拼接，组合意义是用极轻量的堆叠换取整体检测性能的提升。

### 大语言模型提示改进带来多大增益，又在何处失效？

比较的问题是在同样需要标准答案的预言机条件下，大语言模型能否超过轻量文本分类器，以及去掉标准答案后会损失多少。公平条件是同一 HALAS 测试任务，指标为精确率、召回率与 F1，方向越高越好。开箱即用的 GPT-4o mini 与 Flash 2.0 的 F1 约为 41%，其中 Flash 2.0 召回率仅 35.7%，GPT-4o mini 召回率较高为 62.6% 但精确率仅 30.1%，表现为激进但误报多。升级到 Flash 3.0 后 F1 升至 49.3%，加入 Whisper 幻觉特征描述后再升至 56.2%，提高 6.9 个百分点，结合领域少样本示例后达到最优 F1 58.7% 与准确率 88.4%。即便如此仍低于 XGBoost 文本分类器的 62.8%，且需要巨大计算开销与延迟。

> **看图路径：** 1. 先沿横轴从 GPT-4o mini 到增加参考无关条件的六个配置走一遍；2. 再区分蓝色精确率虚线、橙色召回率虚线与红色 F1 实线的走势；3. 最后观察最右侧参考无关处三条线的共同下跌

[![原论文 Figure 2：Impact of iterative prompt enhancements and refer- ence availability on LLM hallucination…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0a0b13ce9783/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0a0b13ce9783/figure-2.png)

*论文图 2。原论文 Figure 2：“Impact of iterative prompt enhancements and refer- ence availability on LLM hallucination detection performance.”。*

上图展示随提示增强 F1 稳步爬升，又在切换到参考无关条件时跌至 32.8% 的过程。蓝色精确率线整体高于红色 F1 线，橙色召回率线在 GPT-4o mini 起点较高，说明不同模型的保守程度不同。解释是语言模型拥有丰富的语义知识，但零样本幻觉检测本质上被缺少标准答案所约束，只能依赖内在异常与模式记忆。未胜出项是大语言模型在单字幻觉上崩溃最严重，召回率仅 0.40，而文本与内部路线分别为 0.67 与 0.59，说明缺少音频依据的单功能词插入最难仅凭文本判断。

### 融合与误差分析揭示哪些互补与共性失败？

比较的问题是不同范式是否捕捉到不重叠的信号，以及融合是否值得以失去零样本可用性为代价。论文报告两两一致度仅 0.64 至 0.73，文本分类器召回率最高为 0.73 但精确率仅 0.53，大语言模型最保守，精确率最高为 0.64 但召回率最低为 0.51，内部探测器最平衡，F1 为 0.62。晚融合逻辑回归输入为文本概率、内部概率与音频时长，在测试集上达到准确率 90.7%、精确率 71.0%、召回率 65.7%、F1 68.3%、ROC AUC 90.0%，超过任一单路线。

更复杂的决策树与随机森林元分类器并未进一步提高 F1，且决策树分析显示音频时长只出现在叶节点边界情形，并非主要路由信号。

| 指标 | 文本 XGBoost | 内部 BLSTM | 逻辑回归晚融合 | 指标方向 |
| --- | --- | --- | --- | --- |
| F1 | 62.8% | 62.1% | 68.3% | 越高越好 |

该表的主要收益是精确率与整体排序能力明显提升，代价是召回率略低于文本单模型，且因重新引入文本特征而失去参考无关可用性。

未评测边界是融合后对长音频的优势是否保留，原文仅报告内部模型在 8 秒以上音频召回率升至 0.75，而文本模型在 3 至 8 秒召回率最高为 0.80，融合模型的时长分段表现未完整给出。

> **看图路径：** 1. 先看顶部蓝色与红色柱标注的交集百分比数值；2. 再对照底部三行圆点判断每根柱对应哪几个检测器的独有或共有检出；3. 最后找到无圆点红色柱对应的三者全漏比例

[![原论文 Figure 4：Hallucination detections by detector combination.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0a0b13ce9783/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0a0b13ce9783/figure-4.png)

*论文图 4。原论文 Figure 4：“Hallucination detections by detector combination.”。*

上图为 upset 风格的检出交集分布，三者共同检出占 39%，对应较易的多词虚构，三者全漏占 12%，几乎全是单字功能词插入，例如 was 与 The，没有音频信号时难以区分。其余柱显示文本与内部共同检出占 18%，各路线独有检出分别占约 5% 至 11%，支持二者部分互补的判断，也解释了晚融合的有效来源。

### 解码器哪一层、哪种池化真正携带幻觉信号？

要回答的消融问题是幻觉信息是否集中在某一层或某种表示中。方法是固定用逻辑回归做线性探测，比较结束符嵌入、全序列均值池化与最大池化及其差分在 0 至 31 层的 ROC AUC。方向为越高表示线性可分性越强。

> **看图路径：** 1. 先确认横轴为 0 到 31 层解码器层号纵轴为 ROC AUC 百分比；2. 再比较红色均值池化差分与蓝色均值池化序列在中层的位置；3. 最后观察紫色最大池化差分在深层明显偏低的轨迹

[![原论文 Figure 3：Detection of hallucinations using 5-fold CV based on internal state probes (standard deviation ≤3…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0a0b13ce9783/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0a0b13ce9783/figure-3.png)

*论文图 3。原论文 Figure 3：“Detection of hallucinations using 5-fold CV based on internal state probes (standard deviation ≤3 AUC points).”。*

上图显示所有曲线都呈中间高、两端低的轨迹，早期 0 至 5 层与晚期 27 至 31 层明显较差，中间层差异较小。其中均值池化差分在第 15 层达到最高的 82%，均值池化嵌入在第 16 层达到 81%，结束符嵌入在第 14 层达到 81%，三者差异很小，说明幻觉标记不限于某一种表示类型。最大池化方法整体偏低，支持论文的机制解释：幻觉表现为系统性偏移而非孤立尖峰。反例是最大池化差分在深层进一步走低，说明对噪声更敏感的聚合方式在深层并不稳定。

该消融的意义是后续 BLSTM 应优先在中后层提取序列，而不必只盯着最终层。
进一步的 BLSTM 网格搜索显示，最终块输出略优于自注意力与交叉注意力表示，序列差分单独使用弱于标准嵌入，拼接后也未带来互补增益。最优配置在第 21 与 24 层附近取得平衡，交叉验证 F1 为 66.1%，测试集 AUC 为 87.6%、F1 为 65.5%、精确率 68.1%、召回率 63.4%。该结果在无参考条件下超过文本路线全特征的 62.8%，且避开了文本路线在零样本下的崩塌与大语言模型的开销。

### 哪些结论有边界，哪些不能推广？

论文直接报告的是在 HALAS 的 Whisper large v3 子集上的结果，显示内部探测在参考无关条件下最强，融合在预言机条件下整体最强。有限解释是中间层编码幻觉痕迹、均值聚合优于最大聚合、时长影响不同范式的召回率，这些得到多层曲线与分段召回率的支持，但仍属于相关性观察而非因果证明。待验证的推测包括该方法是否适用于其他自回归编码器解码器语音识别模型，以及专用轻量微调语言模型能否弥合商用零样本语言模型与监督文本分类器之间的差距。

缺失证据不是技术错误，但必须明确：原文未测量实际延迟、输出帧率与误判成本，未评估非英语与强噪声下的稳定性，也未公开可直接运行的提示链接，资源状态为不可用。总体趋势不等于每组都成立，例如内部模型整体平衡，但在短音频上未必优于文本模型。引用图表与正文若出现数值口径冲突，应以明确标注冲突为准，本文未发现核心 F1 与 AUC 的主结果存在此类冲突，但交叉验证与测试集的同一模型数值应区分阶段引用，不能混用。

### 复现应先做什么，需要哪些配置与检查？

复现的第一步是获取 HALAS 的 Whisper large v3 划分，核对总数 3611、幻觉 858 条与循环幻觉 18 条，并按预定义训练测试划分与分层五折规则组织数据，确保同一说话人不跨折。第二步重建文本特征：预言机侧计算词错误率、字符错误率、插入错误率、长度比、BERTScore、SeMaScore 与通用幻觉短语检测器，参考无关侧计算重复率、停用词比例、困惑度、每秒字符数、对齐置信度与朴素检测器，再用递归特征消除训练逻辑回归、随机森林与 XGBoost，分别记录全特征与参考无关两套结果。

第 3 步重建内部探测：抽取解码器 0 至 31 层在自注意力、交叉注意力与块输出处的嵌入序列，先做结束符与均值最大池化线性探测定位中层，再训练 BLSTM 并网格搜索层组合，记录交叉验证与测试集两个阶段的准确率、精确率、召回率、F1 与 ROC AUC。第四步重建大语言模型对比时，应固定模型版本与提示文本，分别记录预言机与参考无关条件，避免把搜索最优或事后阈值当作可部署收益。最后用折外概率加音频时长训练逻辑回归元分类器，并检查音频时长是否仅为边界修正。

代码开源方面，正文提及的提示仓库链接本次显示不可用，应写为链接当前不可用，不写已公开或当前可用。

### 何时值得尝试这套方法，还需补哪项验证？

当部署场景没有标准答案、但可以直接访问 Whisper 解码器中间状态时，最值得尝试内部序列探测，因为它是论文中唯一同时满足参考无关与高 F1 的路线。当只能拿到最终文本而拿不到模型内部时，参考无关文本规则只能作为轻量过滤，不能承诺可靠检测，此时应补测业务数据上的误报率与人工复核成本。

当有标准答案的离线评估允许使用文本与融合时，可以采用 XGBoost 加内部概率的晚融合以换取更高的精确率与排序能力，但要接受失去零样本可用性与增加维护两套模型的代价。当必须使用大语言模型时，应至少注入被测模型特有的幻觉短语表与领域少样本，否则开箱即用的召回率与精确率难以平衡。还需补充的验证包括跨模型与跨语言的迁移测试、长音频分段策略的对照、以及延迟与计算预算的实测。

只有补齐这些，才能把论文在受控数据集上的排序能力转化为线上稳定拦截虚构转写的能力。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
