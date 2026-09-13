---
title: "MULTICLASS FAIRNESS ANALYSIS OF QWEN2-AUDIO IN SPEECH EMOTION RECOGNITION"
date: 2026-09-13
draft: false
description: "论文在五个语音情绪数据集上零样本评测 Qwen2-Audio 并用多组多类公平指标审计，发现其总体预测分布较均衡但总体准确率平等性差距大，且解码温度超过 0.7 会同时损害准确率与公平性。"
tags: ["评测协议", "音频大模型", "公平性", "零样本", "语音情感识别"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000176"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4a5b822c957f0bcd45cbb8ffdf40b5c101005d5ba99728910e0eb985de28e4bf"
paper_digest_api_reader_plan_sha256: "aa55869dba6f4695b530de052bce719dc2ac5f9725d0d3c8f04e565b0a4c7ebc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7aed0ce4b6990550375cd71b145a7a68f34fc075f6a18b3e01536ca075e9f941"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "727013c4fbd3ac72af2d5167c10fce699cb7792bdcdbd838e7ae7cb889271b68"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "00ade854940805ffc80739a1d0548f7b681aab50c979afa9faa133a816245276"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3eeedbe950cfbabe515cf90c9d206e4ee108faa98ba45b95c95c91c48bb1bac9"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "评测协议"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 零样本能认情绪，却认得不公平：Qwen2-Audio 多类别公平性审计

> 英文题目：*MULTICLASS FAIRNESS ANALYSIS OF QWEN2-AUDIO IN SPEECH EMOTION RECOGNITION*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000176`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf)

标签：#评测协议 #音频大模型 #公平性 #零样本 #语音情感识别

评分：**6.0/10** | 创新 1.1/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究

## 👥 作者与机构

- D'Asaro, Federico：机构信息未能从会议 PDF 纯文本可靠映射
- Marquez Villacis, Juan Jose：机构信息未能从会议 PDF 纯文本可靠映射
- Bottino, Andrea：机构信息未能从会议 PDF 纯文本可靠映射
- Rizzo, Giuseppe：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音情感识别需从语音声学信号映射到 Happy 与 Sad 等离散情绪类别，难点在于口音与说话风格差异大且性别与年龄和族裔等敏感属性易引入系统性偏差。该工作先用音频编码器与连接器和大语言模型构成的 Qwen2-Audio 做零样本生成，再由任务提示词限定候选标签集约束输出空间，随后经 Levenshtein 相似度后处理将自由文本归一化为合法标签，最后按类别二值化与组间两两平均计算统计均等与机会均等和总体准确率均等。与已有二分类单属性公平评测相比，关键差异是将每个情绪类转为一对多二值子问题并在类别与多分组上双重平均，从而同时暴露分布平衡与召回公平和精度公平。在 CREMA-D 上零样本 macro-F1 达 76.56%，接近微调 Whisper large v3 的 76.60%，但 RAVDESS 性别总体准确率均等差距高达 46.58%，说明高精度并不能保证跨群体可靠。结论仅适用于英文表演类与会话类语料的诊断性审计，未验证缓解方法与跨语言泛化。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 模型相关资源：<https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要保留什么？

本文解读的对象是 1 篇关于语音情绪识别公平性的审计论文，输入是论文正文证据与本次收到的官方原图像素，目标是让刚进入语音、音乐、音频领域的研究生能够核对方法并复述流程。必须保留的信息包括任务定义、所用模型与数据集、公平指标的计算口径、零样本调用方式、温度实验条件、主要数字及其适用边界，输出是 1 篇按学习依赖展开的中文技术解读。

语音情绪识别是指从说话声音中判断说话人情绪类别，例如高兴、悲伤、惊讶等，本文只讨论论文实际研究的类别型情绪分类任务，不涉及连续维度情绪或音乐情绪。论文使用的模型是 Qwen2-Audio-7B-Instruct，这是一个能同时接受音频和文本指令并生成文本回答的音频语言模型，英文名为 Audio-Language Model，后文简称音频语言模型。论文的目标不是提出新的去偏方法，而是做诊断性审计，也就是先量出不公平在哪里、有多大，再把可复用的评测流程留给后续工作。

理解这一点很重要，否则会误把温度调节当成论文提出的缓解算法。

**音频语言模型 × 零样本语音情绪识别：** 音频语言模型负责把语音波形编码并与文本指令一起送入大语言模型生成回答，零样本语音情绪识别负责在不为情绪任务专门训练分类头的情况下直接用该生成能力做情绪分类，二者搭配的理由是前者提供了通用音频文本对齐能力，后者把这种能力复用到情绪标签上，组合意义是可以用同一模型通过更换提示词评测多个情绪数据集。

论文明确说明只做诊断而不做缓解，相关代码仓库地址在摘要中给出，但本次解读的事实依据只限于下方引用的论文原文证据与官方原图像素。资源状态方面，论文脚注给出的模型下载链接为<https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct>，本次资源核验状态为暂时未能确认可达，因此只能写本次未能确认该链接可达，不能写当前已公开可用或当前不可用。对于初学者，一个可操作的理解是把 1 次评测看作一个样本走完全程：输入一段语音波形和一段写明候选情绪标签的提示词，模型生成一段文本，再经后处理映射为标签，最后与真实标签比较算分并按性别、年龄、族群分组算公平差距。

### 以前的情绪识别与公平研究各解决了什么？

语音情绪识别早期主要依赖手工设计的声学特征，例如韵律、频谱和音质线索，再配合近邻、支持向量机、朴素贝叶斯等传统分类器。随后深度学习引入卷积网络和 Transformer 结构，再到在大规模音频语料上自监督预训练的大语音模型，许多工作把冻结的语音表示接一个小分类头来做情绪识别。最近的音频语言模型把大语言模型扩展为能吃音频加文本并零样本完成语音任务，这是本文的运行阶段。

与之并行的公平研究在 2010 年代随自动化决策普及而兴起，核心概念是敏感属性，即性别、年龄、族群等具有社会伦理意义的人群划分维度，误用可能带来歧视性后果。公平度量通常分为群体公平与个体公平，前者比较按敏感属性划分的子群体间预测性能差异，后者要求相似个体得到相似输出，本文只做群体公平。已有公平指标大多为二分类设计，而情绪识别天然是多类任务，且敏感属性常是多组，例如年龄和族群不止两类，这就是论文要解决的双重 mismatch。

论文采用近期从二分类多组扩展到多类多组的方法，把每个情绪类别化为 1 对多的二分类子问题再平均，这是理解后文公式安排的关键。同输入同目标的对照是同样做零样本情绪识别的开源音频语言模型，同运行阶段的对照是同样在推理时调用而不在情绪数据上微调的模型，类别差异不能当作同条件胜负，例如微调模型与零样本模型的分数不能直接比高低。

### 要回答的公平问题是什么，难在哪里？

论文要回答的问题是作为零样本情绪识别器表现最好的开源音频语言模型 Qwen2-Audio，在不同数据集和敏感属性上是否公平，以及生成温度是否改变公平性。难处有两点。第一，敏感属性是多组，例如 CREMA-D 同时标注性别、年龄、族群，族群和年龄天然多于两组，两两比较需要有聚合规则。第二，情绪标签是多类，例如 CREMA-D 有 6 类，RAVDESS 有 8 类，MELD 有 7 类，常用的统计均等、机会均等、总体准确率平等性原本是二分类定义，不能直接套用。

论文把问题限定为只关心模型情绪预测是否在群体间均等，而不关心生成文本的表面形式是否相同，也就是先把生成回答映射为类别标签，再在标签层面算均等、检出率和准确率。教学上可以举一个例子来理解，但例子不带论文数值：假设某情绪类别下 A 组 100 个真实样本中模型判对 80 个，B 组 100 个中判对 50 个，那么两组真正例率差距就是不公平的信号，论文的机会均等和总体准确率平等性就是把这类差距系统化。

论文还强调诊断而非缓解，因此即使发现差距大，也只报告差距并分析温度影响，不训练去偏模块。

### 审计流水线全景：从语音到公平数值走哪几步？

审计流水线可以按一个样本的旅程来复述。第一步是输入准备，取一段语音波形和一个写明该数据集候选情绪标签的任务提示词，提示词的作用是告诉大语言模型只能在给定标签集合中选择。第二步是模型推理，音频编码器从波形提取音频特征，连接器把音频特征投影并降采样到语言模型嵌入空间，再与提示词向量拼接后送入大语言模型逐词生成文本回答。

第三步是后处理，因为生成模型可能输出形容词、大小写或多词变体，需要用基于编辑距离相似度的方法归一化到标准标签。第四步是评分与分组，先算总体宏平均 F1 反映识别能力，再按性别、年龄、族群分组计算统计均等、机会均等、总体准确率平等性 3 类不公平度。第五步是温度扫描，对同一流程在多个解码温度下重复多次运行，观察准确率与公平度如何变化。

整个流程中没有为情绪任务更新模型权重，所有模型调用都是零样本推理，公平计算只依赖预测标签、真实标签和群体成员关系。复述时要注意前置概念先于依赖它的结论，也就是先讲清什么是群体、什么是类别，再讲跨群体对平均和跨类别平均，否则会把多类多组平均误解为简单总体差值。

### 三个公平指标各算什么，如何扩展到多类多组？

论文使用的 3 个指标分工不同。统计均等要求各群体被判为正类的概率相同，计算的是两组间正类预测率绝对差，它只看输出分布是否平衡，不看判得对不对。机会均等要求各群体真正例率相同，计算的是在真实为正类的条件下两组被判为正类的概率绝对差，它只看有病检出、无罪释放这类正确检出能力。总体准确率平等性要求各群体总体准确率相同，计算的是两组总体判对概率绝对差，它看的是端到端可靠性。论文把不公平度统一记为 0 到 1 之间的小数，并以百分比形式报告为 0 到 100，数值越低越公平，0 代表完全公平。

**统计均等 × 机会均等：** 统计均等负责比较不同群体被判为正类的比例是否相同，机会均等负责比较在真实为正类的样本中不同群体被正确判对的比例是否相同，二者搭配的理由是前者只看输出分布平衡、后者只看正确检出能力，组合意义是可以区分输出均衡但检出不均衡的情况，这正是论文发现统计均等低而机会均等较高时的解释工具。

多组扩展的做法是对所有群体两两组合计算两组不公平度再取平均，论文给出组合数为 m 个群体时除以 m 乘 m 减 1 除以 2 的平均，这一步把多组问题化为多对两组平均。多类扩展的做法是把 K 加 1 个情绪类别中的每一类看作一个 1 对其余的二分类子问题，对每一类分别算出二分类不公平度，再对所有类别取平均得到多类不公平度。

**总体准确率平等性 × 多类多组平均：** 总体准确率平等性负责比较不同群体上总体判对的准确率是否相同，多类多组平均负责把二分类两组间的差距先对所有群体对求平均再对所有情绪类别求平均，二者搭配的理由是情绪任务既有多类标签又有多个人群划分，组合意义是得到一个能反映每类情绪上跨群体准确率差异的单一不公平度量。

需要特别记住论文的一个处理细节：总体准确率平等性只在群体层面报告，不再按类别拆分报告，而统计均等和机会均等会先按类别算再平均。初学者常犯的误解是把统计均等低等同于公平，论文后文的反证正是统计均等低但总体准确率平等性差距大，说明只看输出均衡会掩盖准确率差距。

### 有没有训练？实际计算过程是什么？

本研究没有训练阶段，没有为任何情绪数据集更新 Qwen2-Audio 权重，也没有训练新的分类头或去偏模块，因此不存在优化器、梯度路径、参数冻结与更新比例、早停或学习率等训练细节，原文也未报告这些内容，不能从模型名称推定其预训练实现。实际计算过程是零样本推理加规则后处理加指标统计。

推理时文本生成是逐词进行的，先由模型输出词表上的对数分数，再经温度参数换算为概率分布后采样下一个词，温度高则分布更平坦更随机，温度低则分布更尖锐更确定，论文测试 0.0、0.3、0.7、1.0、1.2、1.5 共六档温度。后处理时若生成回答不是精确匹配，先归一化并分词，再对每个词与每个目标标签计算莱文斯坦相似度，公式为 1 减去编辑距离除以标签与词长度之和，低于 0.57 的分数丢弃，取总相似度最高的标签作为最终预测。

**生成温度 × 莱文斯坦后处理：** 生成温度负责控制词表采样分布的平坦程度从而控制输出随机性，莱文斯坦后处理负责把自由生成的文本归一化映射到候选情绪标签上，二者搭配的理由是温度改变的是原始字符串的多样性而后处理决定多样性如何折算成标签，组合意义是低温加归一化可以得到更稳定可比较的零样本分类结果。

指标统计时对每个实验配置独立运行 10 次并报告均值与标准差，以应对生成随机性和小群体方差。不能把无训练等同于确定性求解，因为温度大于 0 时采样本身带来随机性，即使温度为 0，后处理阈值与数据划分仍会影响结果分布。

### 在哪些数据、划分和模型上测，指标方向是什么？

论文在 5 个常用语音情绪数据集上评测。CREMA-D 有 96 位演员，性别各 48 人，并覆盖不同族群与年龄组，情绪 6 类，敏感属性包括性别、年龄、族群。IEMOCAP 有 10 位说话人，性别各 5 人，情绪 4 类，敏感属性为性别。EmoV-DB 有 4 位说话人，情绪 5 类，敏感属性为性别。RAVDESS 有 24 位说话人，性别各 12 人，情绪 8 类，敏感属性为性别。

MELD 是来自情景剧对话的会话语料，论文只分析有演员信息的 6 个主要角色，共 2610 个测试样本中的 2156 个，情绪 7 类，敏感属性为性别。数据集实现遵循 EmoBox 提供的折划分，MELD 的特殊取样条件在比较时必须保留，否则会误把样本过滤当成模型能力差异。对比模型包括 Qwen2-Audio、Audio-Flamingo-3、SALMONN-7B、Voxtral-Mini 4 个零样本音频语言模型，以及 HuBERT large、WavLM large、data2vec large、data2vec 2.0 large、Whisper large v3 等经微调的 EmoBox 基线，基线是每数据集专门微调带任务头，仅作参考而非直接对比。

评测模型本体为 Qwen2-Audio-7B-Instruct，性能指标为宏平均 F1，越高越好，公平指标为统计均等、机会均等、总体准确率平等性不公平度，越低越公平。论文未报告训练资源、推理延迟与部署成本等开销指标，因此不能承诺这些量得到改善。

### 零样本谁最强，与微调基线差距多大？

比较问题是 4 个开源音频语言模型在零样本条件下谁的情绪识别能力最稳定，以及最强者距离每数据集微调基线还有多远，公平条件是同一数据集、同一 EmoBox 划分、同一宏平均 F1 指标，指标方向是 F1 越高越好。下表整理论文报告的核心数字，Qwen2-Audio 列为可部署的零样本策略，最强微调基线列为任务参考上限，另一零样本模型列为同条件对照，表中数字保留原文精度与写法，不做四舍五入。

| 数据集 | 指标 | Qwen2-Audio 零样本 | 最强微调基线参考 | 同条件零样本对照 |
| --- | --- | --- | --- | --- |
| CREMA-D | 宏平均 F1 | 76.56 | 76.60 Whisper | Audio-Flamingo-3 低于 Qwen2-Audio |
| IEMOCAP | 宏平均 F1 | 70.42 | 73.11 Whisper | SALMONN-7B 与 Voxtral-Mini 常低于 32 |
| EmoV-DB | 宏平均 F1 | 69.64 | 99.45 WavLM | Audio-Flamingo-3 83.85 |
| RAVDESS | 宏平均 F1 | 67.48 | 75.19 Whisper | SALMONN-7B 与 Voxtral-Mini 常低于 32 |
| MELD | 宏平均 F1 | 28.11 | 32.95 Whisper 区间 24.99-32.95 | 同条件零样本对照普遍低 |

上表以宏平均 F1 为统一标尺呈现零样本与微调参考的相对位置，Qwen2-Audio 的数值与对照模型的强弱关系均来自正文原句证据，低分段的解释需要结合数据集固有难度来理解。
上表显示 Qwen2-Audio 在多数数据集上是零样本中最强，论文报告 Audio-Flamingo-3 在多数数据集上低于 Qwen2-Audio，仅在 EmoV-DB 上更强，而 Voxtral-Mini 与 SALMONN-7B 明显更差，常低于 32 分，这支持后文只审计 Qwen2-Audio 的选择。

主要收益是 Qwen2-Audio 在 CREMA-D 上以 76.56 接近 Whisper 微调的 76.60，在 IEMOCAP 上以 70.42 接近 73.11，说明零样本已能捕捉情绪相关声学线索。具体代价与反例是 EmoV-DB 与 MELD 绝对分低，但 MELD 上微调基线也低于 33 分且 Qwen2-Audio 的 28.11 落在 24.99 至 32.95 区间内，因此低分反映数据集固有难度而非模型特有弱点。未胜出项必须指出：EmoV-DB 上 Audio-Flamingo-3 的 83.85 高于 Qwen2-Audio 的 69.64，说明最强结论是总体而非每数据集成立。

**微调基线 × 零样本音频语言模型：** 微调基线负责在每个数据集上专门训练分类头以给出任务上限参考，零样本音频语言模型负责不经该数据集训练直接推理，二者搭配的理由是前者反映数据集本身难度、后者反映通用模型迁移能力，组合意义是可以判断低分是模型特有弱点还是数据集固有困难，例如 MELD 上两者都低就支持后者。

后处理消融也支持归一化的价值，论文报告引入莱文斯坦后处理后 F1 在多个数据集上持续提升，证实把生成文本映射到标准标签是有效的。

### 公平审计的主结果：哪项差距最大？

比较问题是 Qwen2-Audio 在性别、年龄、族群上的 3 类不公平度各有多大，公平条件是同一模型、同一数据集划分、同一多类多组平均口径，指标方向是不公平度越低越公平。下表整理论文报告的公平数字，单位为百分比，数值含义是组间绝对差，总体准确率平等性一列可理解为组间准确率相差多少个百分点。

| 数据集 | 敏感属性 | 统计均等越低越公平 | 机会均等越低越公平 | 总体准确率平等性越低越公平 |
| --- | --- | --- | --- | --- |
| CREMA-D | 性别 | 3.12 | 7.80 | 10.18 |
| IEMOCAP | 性别 | 9.84 | 9.92 | 14.54 |
| EmoV-DB | 性别 | 4.93 | 7.39 | 36.96 |
| RAVDESS | 性别 | 2.30 | 12.39 | 46.58 |
| MELD | 性别 | 4.89 | 9.93 | 19.27 |

上表后解释显示统计均等多为低值，性别统计均等在 RAVDESS 仅 2.30，在 IEMOCAP 最高也仅 9.84，说明总体预测分布跨群体较相似。机会均等略高，性别差距在 RAVDESS 为 12.39，在 IEMOCAP 为 9.92，而 CREMA-D 上年龄为 5.01、族群为 6.54，说明正确检出能力已出现中等差异。最大差距出现在总体准确率平等性，性别总体准确率平等性在 RAVDESS 高达 46.58，在 EmoV-DB 为 36.96，在 MELD 为 19.27，CREMA-D 上年龄为 15.62、族群为 8.19。

论文明确解释统计均等、机会均等、总体准确率平等性分别是正类预测率、真正例率、总体准确率的组间绝对差，因此 RAVDESS 性别 46.58 意味着组间准确率相差 46.58 个百分点，足以在情绪感知医疗等部署中造成系统性可靠性不均。主要代价是小群体与类别不平衡会放大方差，标准差较大，所以数值应在数据集内解读而不宜跨数据集直接排名。未评测边界是除 CREMA-D 外其他数据集只报告性别，未覆盖年龄与族群。

### 温度改变了什么，什么稳定什么波动？

论文把温度当作免费的推理时旋钮，测试同一模型在不同随机性下准确率与公平性的变化。以下导读帮助按像素核对图 2，图 2 为本次实际收到像素的官方原图，包含多个数据集面板，每个面板上半为宏平均 F1 随温度变化曲线，下半为 3 类不公平度随温度变化曲线，横轴均为温度 0.0 至 1.5，阴影带为多次运行的标准差。

> **看图路径：** 1. 先看每块面板上横轴温度从 0.0 到 1.5、纵轴上方为分数下方为不公平度的刻度含义；2. 再对比蓝色宏平均 F1 曲线随温度升高的下降幅度与拐点位置；3. 然后观察绿色总体准确率平等性曲线波动幅度是否大于紫色统计均等与橙色机会均等曲线；4. 最后注意阴影带宽度在不同数据集和温度段的变化以判断小群体方差

[![原论文 Figure 1：illustrates how Qwen2-Audio’s macro-F1 and fairness metrics evolve as the decoding temperature…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a69094182099/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a69094182099/figure-1.png)

*论文图 1。原论文 Figure 1：“illustrates how Qwen2-Audio’s macro-F1 and fairness metrics evolve as the decoding temperature changes.”。*

从可见像素看，右上与右下等面板中蓝色宏平均 F1 曲线随温度升高总体下行，尤其在 0.7 之后下降更陡，说明增加随机性损害持续输出一致情绪标签的能力。公平曲线响应不均，紫色统计均等与橙色机会均等曲线大多平坦，说明整体输出比例与正类召回被随机性同等扰动，而绿色总体准确率平等性曲线在 CREMA-D、RAVDESS、MELD 等面板上起伏明显，论文解释为随机性与每组类别混淆结构相互作用从而放大组间准确率差距。

实践含义是低温到中等温度即 0.7 及以下能较好兼顾准确率与公平，高温同时损害两者，因此受控生成对公平的零样本情绪识别很关键。但总体趋势不等于每组每步都成立，个别温度点可能出现波动，复现时应报告均值加标准差而非单次最优。

### 哪些结论有边界，什么还没有验证？

论文直接报告的是 Qwen2-Audio 在 5 个英语数据集上的零样本性能与多类多组不公平度，以及温度对两者的影响，这些是有数字支持的结论。有限解释是温度通过随机性与类别混淆结构交互影响总体准确率平等性，这能解释波动方向但未做因果干预验证，因此用支持而非证明来表述。未验证的推测包括把温度调节当成通用去偏方法，以及把英语结论推广到其他语言，论文明确把缓解方法与多语言扩展留作未来工作。

缺失证据不是技术错误，例如未测量误判率分布细节、推理延迟、显存与成本，未报告超参数搜索之外的解码策略，因此不能承诺公平审计能同时改善延迟或成本。另一个边界是 MELD 只保留 6 个主要角色样本，其他角色因缺演员信息被排除，复现时若用全量样本会得到不可比的结果。相关性不等于因果，例如总体准确率平等性高只说明组间准确率不同，不足以断定某一群体必然被系统性误判为某一情绪，还需结合混淆矩阵进一步验证。

### 要复现这篇审计先做什么，需要什么条件？

复现应先准备数据与划分，再跑零样本推理，最后算多类多组公平。第一步按 EmoBox 提供的折划分准备 CREMA-D、IEMOCAP、EmoV-DB、RAVDESS、MELD，其中 MELD 只取 6 个主要角色的 2156 个测试样本，保留原文过滤条件。第二步用 Qwen2-Audio-7B-Instruct 做零样本调用，提示词中明确列出该数据集候选情绪标签，对温度 0.0、0.3、0.7、1.0、1.2、1.5 各跑 10 次独立运行并记录均值与标准差。第三步对生成文本做归一化分词与莱文斯坦相似度映射，阈值 0.57 以下丢弃，取总分最高标签为预测。

第四步先算宏平均 F1，再对每个情绪类别做 1 对其余的二分类转换，分别算统计均等、机会均等，总体准确率平等性只在群体层面算，最后按群体对平均与类别平均汇总为百分比。何时值得尝试这种审计，是当模型要用于医疗、教育、人机交互等对群体可靠性敏感的场景，且手头有性别、年龄、族群等分组标注时。还需补的验证包括非英语语料、更多音频语言模型、不同提示词措辞与后处理阈值的敏感性。

代码开源与权重下载是两回事，论文给出的是评测代码仓库，模型权重需另行获取，本次未能确认所给权重链接可达，复现前需先自行确认可达性与版本一致性。

### 带走的一句话方法与一个易错点是什么？

带走的方法是先用候选标签提示词做零样本生成，再用编辑距离映射为标签，最后用多类多组平均算出 3 类不公平度并扫描温度，低温段优先。这个流程的可核对点在于每一步都有明确输入输出：语音加提示词进模型出文本，文本经阈值映射出标签，标签加真实值加分组出差距。最强的证据是 Qwen2-Audio 在 CREMA-D 与 IEMOCAP 上接近微调基线，但在 RAVDESS 性别总体准确率平等性上仍有约 47 个百分点的组间差距，说明能力强不等于公平。

最易错的点是把统计均等低当成公平已达标，论文的反证恰是统计均等低而总体准确率平等性高，两者必须分开审计。另一个易错点是把微调基线当成可直接超越的对手，原文已说明基线是每数据集微调带任务头，仅作参考。后续若要改进，应在保留分组准确率审计的前提下再谈缓解，并补充多语言与多模型验证，避免把单次高温或低温最优值当成可部署收益。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf#page=2)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/db919bdcadb7/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf#page=3)

另有 9 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
