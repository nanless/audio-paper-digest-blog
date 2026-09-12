---
title: "An Exploration of Mamba for Speech Self-Supervised Models"
date: 2026-09-12
draft: false
description: "该文把 HuBERT 的 Transformer 层替换为 Mamba 做语音自监督预训练，在因果与长上下文语音识别上验证线性复杂度与更低计算量优势，并以音素纯度、典型相关分析和 SUPERB 探测说明表征特点，代价是 Base 尺寸双向 Mamba 整体探测分数落后于 Transformer。"
tags: ["自监督学习", "状态空间模型", "长音频处理", "语音识别"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.acl-long.470"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.acl-long.470/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.acl-long.470.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9b9fe6a862a3e9483b757110250b71bb33fc6055b28414b5ea2a74df9ecb8602"
paper_digest_api_reader_plan_sha256: "c5159b23e859fcb0d7626ed616552b85441e5fc84ebf809538cfb1fb5dcc0e1a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d4097e35faebecf12cd40c58b14121ffdd71f3fb65d8cff922abceb15335edb7"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "40e1049844c6d47cfb1c2166a032b4811e920cba6112176e01e720d1fb8a1000"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ddb256ba3814852042ffeb6fd6087f82233f7edce5e3c8d9ce334776059eeadf"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "93d13c6792c446aed2c8d77ac6fd8149533477d4aa7c835826eacf3e1c529da5"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"setting","id":"setting.long-audio","label":"长音频处理"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把 Transformer 换成 Mamba 做语音自监督：长语音更快，但双向扩展仍有代价

> 英文题目：*An Exploration of Mamba for Speech Self-Supervised Models*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.acl-long.470`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.acl-long.470/) · [官方 PDF](https://aclanthology.org/2026.acl-long.470.pdf)

标签：#自监督学习 #状态空间模型 #长音频处理 #语音识别

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Tzu-Quan Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Heng-Cheng Kuo：机构信息未能从会议 PDF 纯文本可靠映射
- Tzu-Chieh Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Hsi-Chun Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Chun Wei Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hsien-Fu Hsiao：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Tsao：机构信息未能从会议 PDF 纯文本可靠映射
- Hung-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该研究处理语音自监督表示学习向识别与理解任务迁移的问题，输入为16 kHz原始波形或TEDLIUM3中长达数分钟的连续讲座语音，输出为音素与说话人属性更可分的表示及低词错率转写，难点在于Transformer自注意力的二次复杂度导致长语音显存爆炸，且流式场景只能利用过去信息。方法链条分为三步，首先以7层卷积编码器将波形降采样为20 ms帧序列以保留局部声学结构，其次用Mamba或外部双向Mamba替换Transformer块进行HuBERT式掩码预测预训练以学习上下文表示，最后将学到的深层表示送入冻结骨干加轻量探测头或整体微调加联结时序分类解码器完成识别与SUPERB评估。相对全局成对加权的自注意力，Mamba以输入依赖的离散化步长与状态转移实现内容选择和线性递推，天然因果且计算量随长度线性增长，因而更适配长上下文与实时建模。在TEDLIUM3长上下文ASR评测任务下，ExtBiMamba Base文档级条件的词错率WER为11.08%，低于话语级条件的13.37%。该结论的适用边界受限于LibriSpeech 960小时英语朗读预训练与单次训练报告，双向Base规模在完整SUPERB上仍落后Transformer且多语噪声场景尚未验证。预训练在单块NVIDIA V100硬件上以8倍于原HuBERT的单卡批量完成，长序列下Mamba的计算量与实时因子显著低于因果Transformer且后者在80秒以上出现显存不足。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么长语音和实时识别难做？

这篇论文的输入是原始语音波形，目标是先在无标注语音上预训练一个通用表示模型，再把它用到语音识别和多种语音理解任务。研究生复述时要先抓住语音的两个难点。第一是序列很长，一段演讲可能是几分钟甚至几十分钟，如果每 1 帧都要和所有其他帧做两两比较，计算量和显存会随长度快速增长。第二是实时场景只能看过去不能看未来，模型在写当前文字时不能偷看后面的音频，这要求预训练时的因果约束与下游使用一致。

论文的出发点是 Transformer 在语音自监督中很强，但它的多头自注意力是 2 次方复杂度，长语音部署成本高。Mamba 用选择性状态空间把复杂度降到线性，理论上更适合长上下文和流式场景。但此前语音领域对 Mamba 的检验多是单个任务，且常落后于 Transformer 变体，或者靠加入辅助块追回精度却丢掉线性扩展优势。因此作者要做的是系统性探索：按 HuBERT 流程训练 Mamba 版语音自监督模型，既看微调识别效果，也看冻结表示的通用性。

本文解读只依据论文原文证据写作，不引入外部实现细节。凡是论文没有报告训练轮次平均、显著性细节或硬件之外的绝对耗时，都如实指出缺项，不做推广。后续各节按学习依赖展开：先讲相关路线，再讲模型如何从波形走到表示，然后讲训练与评测条件，最后讲结果、反例与复现要点。

### 同输入同目标的已有路线如何对照？

在语音表示学习这条线上，输入同样是无标注音频、目标同样是得到可复用的表示，代表方法是 wav2vec 2.0 和 HuBERT。前者用掩码加对比学习，在很少标注下接近全监督识别效果；后者用聚类伪标签做掩码预测，进一步改善识别与生成。SUPERB 则规定了同运行阶段的对照方式：冻结预训练骨干，只训练轻量任务头，在识别、意图、说话人、情感等任务上比较表示质量。这种冻结比较能把表示本身与微调技巧分开。

在 Mamba 用于语音这条线上，语音分离增强多把 Mamba 放进 U 形网络利用长序列建模，但常只达到相当或略差的精度，且多是混合结构。流式识别方向有人利用前视、单调聚合与早停来降延迟。另一支工作用 Mamba 自监督模型分析 Mamba 行为，而本文强调把 Mamba 版 HuBERT 当作语音基础模型和特征抽取器，全面检验微调、探测与表示属性。通用音频的自监督音频 Mamba 工作则不聚焦语音实验，因此不能直接当作同任务基线。

对照时要注意类别差异不能当同条件胜负。例如把双向训练的 Transformer 直接加因果掩码拿来用，与从预训练起就按因果方式训练的模型并不公平，论文也用实验说明前者明显更差。理解这一点后，再看方法全景就不会把结构差异与训练条件差异混为一谈。

### 论文到底要回答哪几个可验证的问题？

论文把大问题拆成 4 个可核对的子问题。第一，Mamba 版 HuBERT 在计算效率上是否真随长度线性扩展，指标是每秒乘加运算次数与实时因子，输入长度从 5 秒拉到 320 秒。第二，能否把整篇演讲不切句直接做长上下文识别，指标是词错误率，比较对象是同尺寸 Transformer 能否跑通。第三，因果约束下只用过去信息做识别时，参数更少的 Mamba 是否还能更好。第四，学到的表示在音素、说话人、情感等属性上分布如何，以及在 SUPERB 子集和全集上的探测分数是否支持因果强、双向扩展难的判断。

每个问题都有明确的比较条件和指标方向。词错误率、音素错误率越低越好，说话人、情感、意图准确率越高越好，综合分数越高越好，计算量与实时因子越低越好。论文还报告了失败条件，例如 Transformer 处理整篇文档时内存不足，以及大尺寸外部双向 Mamba 训练不稳定。这些反例与正结果同等重要，复现时要一起核对。

### 从波形到识别结果，主路径是怎样走通的？

先沿一个样本走完主路径。输入是一段波形，先经过标准的 7 层卷积特征编码器，论文注明感受野为 25 毫秒、帧移为 20 毫秒，再经过基于卷积的位置编码器，得到帧级声学表示。接着这些帧表示进入堆叠的编码层，基线是 Transformer 块，实验组是 Mamba 块，默认 Mamba 块后不加前馈多层感知机，若加了则记为 Mamba 加多层感知机。预训练目标沿用 HuBERT 的掩码预测伪标签做法，第一轮用梅尔频率倒谱系数相关特征作目标训练，第二轮用第一轮第六层输出聚类后的标签重新从头训练。

下游有两条用法。微调用法是在表示模型后接 12 层卷积编码器之类的识别头，用联结时序分类损失把整个模型一起更新，直接输出文字并计算词错误率。探测用法是冻结骨干，只训练轻量头，用音素识别、说话人识别、情感识别、意图分类等任务检验表示。理解这两条路径后，就能明白为什么同一模型会在微调表和探测表中有不同排名。

**自监督学习 × HuBERT：** 自监督学习负责在没有人工标注的情况下从大量无标注语音中抽取可复用的表示，HuBERT 负责给出一种具体做法：先用声学特征或上一轮模型表示做聚类得到伪标签，再用掩码预测让模型学习上下文；两者搭配的意义是把通用预训练与语音单元预测目标结合，使同一骨干既能微调做识别，也能冻结做特征抽取。

需要提醒的是，论文没有把代码可运行性作为本文可验证的资源状态，解读中不声称代码、权重或数据当前可用。复现应以原文给出的预训练数据、轮数、优化器设置为准，下文训练一节会逐项列出。

### Mamba 层与双向变体各自做了什么计算？

Mamba 层的白话理解是带选择的循环状态。每个时刻维护一个状态向量，根据当前输入决定保留多少历史、吸收多少新信息，再把状态映射为输出。与 Transformer 对所有历史帧做加权平均不同，它是顺序递推，因此计算量随长度线性增长。论文给出离散形式的状态更新与输出映射，并说明离散参数由连续系统经零阶保持转换得到，实际训练的是连续矩阵，每次前向再转成离散形式。选择机制让输入经线性投影动态调整系统参数，使模型能根据当前语音内容改变状态转移与输出映射。

双向是为了让预训练能同时看左右上下文。两种做法都要处理原序与反序。外部双向把前向与后向做成两套完全独立的 Mamba 编码器层，各自有输入输出投影，后向输出再翻转与前向相加。内部双向共享投影，只复制卷积与状态空间模块。从参数上看，外部双向在 Base 尺寸约 94.3M，内部双向标准版约 82.9M，加多层感知机后约 94.7M，这直接影响训练稳定性与探测分数的比较。

**选择性状态空间 × Mamba：** 选择性状态空间负责用随输入变化的系统参数控制状态如何记住或遗忘当前帧，Mamba 负责把这种机制实现为可训练的序列层并保持线性时间复杂度；两者搭配的理由是保留对内容的选择能力，同时避开自注意力的 2 次方计算，使长语音的每秒计算量不再随长度快速膨胀。

**外部双向 Mamba × 内部双向 Mamba：** 外部双向 Mamba 负责用两套完全独立的前向与后向编码器分别处理原序和反序，再把后向输出翻转相加，内部双向 Mamba 负责共享输入输出投影、只复制卷积与状态空间模块来做双向；两者分工不同导致参数量与训练稳定性不同，搭配比较的意义是检验双向结构在语音自监督中哪种扩展更划算。

因果设置则不同。Mamba 本身是因果的，只能用过去信息；因果 Transformer 是在标准多头自注意力上加下三角掩码，训练与推理都限制为只看过去。论文还设了一个不公平但有教学意义的对照：双向训练好的 Transformer 测试时硬加因果掩码，用来说明预训练阶段是否因果至关重要。

### 预训练与微调按什么步骤构造？哪些没有报告？

预训练数据是完整的 960 小时 LibriSpeech。流程分两轮，第一轮以梅尔频率倒谱系数特征为目标训练 250k 步，第二轮用第一轮第六层输出作目标从头重新训练 400k 步。除批量大小外，超参数沿用 HuBERT Base 默认设置。优化器是 Adam，先线性预热占总步数的 8%，再线性衰减。峰值学习率分两档：双向 Mamba Base 用 5e-5，其他配置用 5e-4。

计算预算是单张 NVIDIA V100，单卡批量是原文 32 卡设置的 8 倍，但总音频时长仍约为原文的 1/4。为公平，Transformer 基线也在同样设置下从头训练。论文说明结果基于单次训练，没有多轮平均。

微调设置沿用 wav2vec 2.0 与 HuBERT 的做法。长上下文实验用 TEDLIUM3 的训练集微调、开发集验证、测试集评估，并去掉长于 20 分钟的演讲，模型后接 12 层卷积编码器并用联结时序分类损失整体更新。因果识别用 LibriSpeech 100 小时训练、在干净测试集评估，且所有模型都不用前视。SUPERB 探测沿用默认评测设置，冻结骨干只训任务头，并用 4 个代表任务计算综合分。

未报告的缺项要明确。论文没有给出随机种子、多轮方差、完整超参数表之外的梯度裁剪与混合精度细节，也没有说明聚类数之外的伪标签细节。训练稳定性部分用损失缩放曲线定性说明溢出频率，但没有给出溢出次数的定量统计。复现时应先按原文批量与学习率跑通，再谈扩展到多卡或更大批量。

### 评测条件如何保证公平？指标与聚合是什么？

效率评测固定在单张 NVIDIA RTX A6000 48 GB 上，序列长度取 5、10、20、40、80、160、320 秒。报告的乘加运算以每秒为单位，使不同长度可比，每个实时因子值是 10 次运行的平均。长上下文与因果识别分别固定数据集与是否允许看未来，避免把切句与整篇、因果与双向混在一起比较。表示分析固定用同一层的特征做 k 均值聚类再算音素纯度，聚类数主结果取 100，附录补 500 与 1000 以检验趋势是否一致。典型相关分析分别对音素标签、说话人嵌入、情感嵌入计算各层相似度，音素用独热向量与平均到音素级的表示比较，说话人与情感用时间平均后的表示比较。

SUPERB 部分选音素识别、说话人识别、情感识别、意图分类 4 个任务，综合分是对各任务相对基线特征与最优结果的线性缩放后平均，再乘以 1000 以便阅读。论文明确全集综合分与四任务综合分不可直接比较。附录给出 10 任务全集以验证子集趋势。硬件与批量等预算条件在局限一节有说明，解读结果时必须把绝对数值与相对趋势分开。

**微调 × 探测：** 微调负责更新骨干与新增识别头以直接优化识别错误率，探测负责冻结预训练骨干、只训练轻量任务头以检验表示本身的质量；两者搭配的意义是分别回答模型能不能在具体任务上跑通，以及表示是否通用，论文同时做两类实验正是为了避免把微调技巧的增益误认为表示变好。

下面进入结果，先看长上下文与因果识别两张数字表，再看探测与表示分析。

### 长语音更快吗？识别与表示给出了什么证据？

效率问题的结论是 Mamba 随长度扩展更平缓。论文报告 Mamba 版 HuBERT 的每秒乘加运算在所有长度上几乎保持恒定，而 Transformer 版随长度急剧上升。实时因子随长度都上升，但 Mamba 始终更低。关键边界是因果 Transformer 在超过 80 秒后出现内存不足，无法继续评测。这支持长上下文场景选 Mamba 的判断，但要注意这是单卡与当前实现下的边界，换显存或优化内核会改变绝对可跑长度，相对趋势更值得记住。

长上下文识别要回答整篇输入是否有收益。比较的问题是：在同样允许看全文时，谁能跑通且错误率更低，指标是词错误率越低越好。下表整理论文报告的双向模型在切句级与文档级的结果，包含未能运行的基线以保留公平信息。

| 条件 | 指标 | Transformer Base | ExtBiMamba Base | 可运行性说明 |
| --- | --- | --- | --- | --- |
| 切句级 | 词错误率 | 11.86% | 13.37% | 两者均可运行 |
| 文档级 | 词错误率 | 内存不足 | 11.08% | Transformer 无法处理文档级输入 |

表后解释要同时看到收益与代价。外部双向 Mamba 从切句级的 13.37% 降到文档级的 11.08%，论文报告文档级优于切句级的配对检验显著，定性上对多次出现的罕见词更一致，这支持全文上下文的价值。代价是切句级单看时它落后于 Transformer 的 11.86%，且 Transformer 在文档级直接无法运行，因此不能说 Mamba 在所有切分下都更准，只能说在本文预算下它是唯一能跑通文档级的方案。未评测的边界是更长演讲已被去掉，超长文档仍待验证。

因果识别的比较问题是：在只能看过去且不许前视时，参数更少的 Mamba 能否更好。下表保留参数量与词错误率，方向是越低越好。

| 条件 | 指标 | Causal Transformer Base | Mamba Base | 参数量对照 |
| --- | --- | --- | --- | --- |
| 无前视因果识别 | 词错误率 | 16.66% | 15.77% | 94.7M 对 78.2M |

表后解释是 Mamba 以约少 17% 参数取得更低错误率，支持因果结构适合流式识别的判断。但这只是 LibriSpeech 100 小时训练、干净测试集上的单点结果，不能推广到噪声、远场或真实流式延迟，论文也未测量延迟与误触发等指标。

> **看图路径：** 1. 先看左图横轴序列长度从 5 秒到 320 秒，纵轴是每秒 MACs，对比 Mamba 曲线是否水平与 Transformer 曲线是否上扬；2. 再看右图纵轴实时因子随长度的变化，确认 Mamba 始终低于 Transformer 的位置关系；3. 找到因果 Transformer 在 80 秒之后缺失的数据点，对应正文所述的内存不足而无法运行

[![原论文 Figure 1：MACs (G/sec) and Real-Time Factor (RTF) of different HuBERT models at varying sequence lengths.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/52efe6c860e2/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/52efe6c860e2/figure-1.png)

*论文图 1。原论文 Figure 1：“MACs (G/sec) and Real-Time Factor (RTF) of different HuBERT models at varying sequence lengths.”。*

上图是效率随序列长度的变化，左为每秒乘加运算，右为实时因子。可见 Mamba 与外部双向 Mamba 的左图曲线近乎水平，而因果 Transformer 与 Transformer 快速抬升；右图 Mamba 始终处在更低位置，因果 Transformer 在 80 秒后中断，这与正文内存不足的说明一致。复述时不要把右图纵轴数值方向误读，重点是位置高低与缺失点。

表示质量先看音素纯度。论文报告除因果 Transformer 外，纯度多从浅层上升、在中后层达峰、末层略降。因果设置下 Mamba 峰值高于因果 Transformer，双向设置下外部双向 Mamba 在某些中后层略超 Transformer，尽管它的切句级微调反而落后。这说明量化一致性好不等于线性探针可分性强，论文用类内一致与类间可分的区分来解释。下图展示分层纯度，可执行地核对峰的位置与分组。

> **看图路径：** 1. 沿横轴层号从 1 到 12 追踪四条曲线的升降，区分因果模型与双向模型的两组高度；2. 对比第 8 层附近外部双向 Mamba 的峰值与 Transformer 的平台，确认谁更高；3. 观察因果 Mamba 在浅层起点较低、随后缓慢上升的形态

[![原论文 Figure 2：Layer-wise phone purity of HuBERT models.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/52efe6c860e2/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/52efe6c860e2/figure-2.png)

*论文图 2。原论文 Figure 2：“Layer-wise phone purity of HuBERT models.”。*

上图横轴为层号、纵轴为音素纯度。可见双向两条曲线整体高于因果两条，外部双向在第 8 层附近达到最高，Transformer 随后趋平，Mamba 在因果组中后期反超因果 Transformer。不要硬读像素小数，只记分组、峰位与交叉。

典型相关分析进一步区分属性。音素相似度随层加深而上升、末层附近达峰，Mamba 早期起点更低但爬升更陡。说话人相似度在浅层更高，Mamba 整体高于 Transformer，换用其他说话人嵌入趋势大多相似。情感相似度向中后层上升，双向高于因果，Mamba 在末层没有明显回落。下图为 3 组相似度，可按子图分别核对。

> **看图路径：** 1. 先看左子图音素相似度随层数上升的共同趋势，比较 Mamba 早期起点是否更低；2. 再看中子图说话人相似度在浅层高、深层分化的形态，确认 Mamba 是否维持更高；3. 最后看右子图情感相似度中双向模型高于因果模型的整体位置关系

[![原论文 Figure 3：Layer-wise analysis results for different HuBERT models.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/52efe6c860e2/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/52efe6c860e2/figure-3.png)

*论文图 3。原论文 Figure 3：“Layer-wise analysis results for different HuBERT models. Each plot below shows the CCA similarity to different label types: phone labels, speaker embedding, and emotion embedding.”。*

上图左中右分别对应音素、说话人、情感。左图 4 条线终点接近但起点与斜率不同，中图 Mamba 在中高层维持更高，右图外部双向与 Transformer 高于因果模型。结合纯度看，Mamba 对说话人特征更分明，这与它在说话人相关探测任务上的优势一致，但不能直接推出因果关系。

**音素纯度 × 典型相关分析：** 音素纯度负责衡量聚类后的量化表示与真实音素标签的一致程度，典型相关分析负责衡量连续表示与音素、说话人、情感等属性在各层的相似度；两者搭配的原因是一个看离散化后是否适合作语音单元，另一个看连续表示在不同层保留了哪类信息，组合起来才能区分量化质量好与下游可分性强这两件事。

因果探测的综合比较如下表，指标方向是音素错误率越低越好、其余准确率与综合分越高越好。

| 条件 | 指标 | Causal Transformer | Mamba 加多层感知机 | Mamba 标准版 |
| --- | --- | --- | --- | --- |
| Base 因果探测 | 音素错误率 | 13.87% | 11.72% | 11.68% |
| Base 因果探测 | 综合分 | 805.44 | 823.15 | 817.94 |

表后解释是两种 Mamba 都优于同尺寸因果 Transformer，Mamba 加多层感知机综合分最高。未胜出项是因果 Transformer 在情感与意图上仍占优，说明 Mamba 的优势集中在音素与说话人相关任务。直接加因果掩码的双向 Transformer 明显更差，支持预训练必须因果的结论。小尺寸下 Mamba 加多层感知机仍最高，标准 Mamba 与因果 Transformer 综合分接近，表明小规模下仍具竞争力。

### 双向结构与规模怎样改变结论？失败条件是什么？

双向探测的比较问题是：同为 Base 尺寸时，外部双向 Mamba 能否替代 Transformer，指标方向与上节相同。下表保留 Base 与 Small 两档，避免只看一档得出片面结论。

| 条件 | 指标 | Transformer | ExtBiMamba | 规模说明 |
| --- | --- | --- | --- | --- |
| Base 双向探测 | 音素错误率与综合分 | 7.49% 与 868.93 | 10.65% 与 815.38 | 94.7M 对 94.3M |
| Small 双向探测 | 音素错误率与综合分 | 12.21% 与 802.63 | 11.38% 与 809.18 | 23.5M 对 23.2M |

表后解释是规模相关：Base 档 Transformer 全面领先，Small 档外部双向在音素、说话人、情感与综合分上反超，仅意图落后。这支持双向 Mamba 扩展性有挑战的判断，也提示小规模结论不能外推到大规模。论文还指出高纯度不保证探针可分，且下游头结构会影响排名，因此不要把纯度高直接等同于识别一定好。

结构消融进一步比较外部与内部双向。问题是：同样预算下哪种双向更划算。下表聚焦 Base 档的关键数字。

| 条件 | 指标 | ExtBiMamba | InnBiMamba 加多层感知机 | InnBiMamba 标准版 |
| --- | --- | --- | --- | --- |
| Base 双向消融 | 音素错误率 | 10.65% | 9.00% | 9.62% |
| Base 双向消融 | 综合分 | 815.38 | 825.17 | 832.31 |

表后解释是 Base 档内部双向全面优于外部双向，标准内部双向以更少参数取得最高综合分，并在说话人与情感上也好，而 Small 档外部双向仍优于内部双向。这说明最优双向设计随规模变化。失败条件是外部双向 Base 训练中损失缩放持续振荡，内部双向早期频繁溢出后趋稳，单向 Mamba 几乎不溢出。下图展示损失缩放随步数的变化，可作为不稳定的直接证据。

> **看图路径：** 1. 先确认横轴训练步数与纵轴损失缩放的对数刻度，区分三条曲线的高度区间；2. 观察外部双向 Mamba 全程上下振荡的锯齿形态，对比内部双向 Mamba 后期趋平的形态；3. 找到初始虚线位置，比较单向 Mamba 从高位快速下降后保持平稳的过程

[![原论文 Figure 10：Training dynamics of the loss scale for different Mamba variants.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/52efe6c860e2/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/52efe6c860e2/figure-10.png)

*论文图 10。原论文 Figure 10：“Training dynamics of the loss scale for different Mamba variants.”。*

上图横轴为训练步数、纵轴为损失缩放，蓝色单向 Mamba 从高位下降后平稳，绿色内部双向先升后平，橙色外部双向全程锯齿振荡。这支持论文把外部双向 Base 差距归因于训练不稳定的假设，但仍是待验证的解释，未来可能需要混合注意力或蒸馏等辅助机制。复现时应先监控溢出频率与缩放曲线，再比较分数。

全集 SUPERB 用于检验子集趋势是否成立。比较问题是：10 任务综合分是否仍显示因果强、双向难。下表保留两组综合分。

| 条件 | 指标 | 因果组综合分 | 双向组综合分 | 结论指向 |
| --- | --- | --- | --- | --- |
| 因果全集 | 综合分 | 651.6 对 608.1 | 不适用 | Mamba 加多层感知机优于因果 Transformer |
| 双向全集 | 综合分 | 不适用 | 772.4 对 683.59 | Transformer 优于外部双向 Mamba |

表后解释是全集与子集趋势一致：因果 Mamba 在内容与说话人任务占优，但在情感与语义任务有差距；双向 Base 仍是 Transformer 领先。未胜出项与边界要如实保留，不能只讲平均分。

### 哪些结论不能推广？原文自己划了什么边界？

论文把局限写得很具体，复述时要原样保留。第一是可复现优先于规模：单卡训练，总音频时长约为原文 1/4，自训 Transformer 也低于官方发布模型的分数，因此大规模下的双向扩展难题是否依然成立，还需在更大参数、更大批量与更多语料上验证。第二是效率数字依赖单卡与当前实现，换硬件或底层优化会改变绝对值，相对趋势更可靠，长文档下标准 Transformer 在本文预算内触及显存上限，不等于所有实现都不可跑。第三是评测范围受控：长上下文去掉了超长演讲，流式只做了无前视的因果识别而未测真实延迟，情感与语义任务的差距说明 Mamba 并非全面替代。

方法上的缺项也不是技术错误。单次训练没有多轮平均，配对检验只报告了长上下文文档级优于切句级的显著性，其他比较没有统计检验。训练不稳定的解释是假设，得靠后续实验确认。理解这些边界后，就不会把总体趋势误认为每组每步都成立，也不会把未测量的延迟与成本当作已改善。

### 要复现这篇工作，先后做什么？

先准备数据与流程。预训练用 960 小时 LibriSpeech，按两轮 HuBERT 流程构造伪标签，第一轮 250k 步、第二轮从头 400k 步，特征编码器与位置编码器保持原文设置。优化器用 Adam，8% 步数预热后线性衰减，峰值学习率按双向 Base 用 5e-5、其余用 5e-4。单卡预算下先把批量调到能放进显存的最大值，并记录总时长约为原文 1/4，以便与论文的公平基线对齐。自训 Transformer 基线必须同设置从头训练，不能直接拿官方权重比较。

再跑 3 类验证。效率验证固定单卡，按 5 秒到 320 秒测每秒乘加运算与实时因子，实时因子取 10 次平均，记录因果 Transformer 何时内存不足。识别验证分两支：长上下文用 TEDLIUM3 整篇与切句两种粒度，统一用联结时序分类损失微调；因果用 100 小时训练集且禁用前视。表示验证固定层、固定聚类数算音素纯度，并按音素、说话人、情感 3 组做典型相关分析，SUPERB 先跑四任务子集再跑全集，注意两种综合分不可混比。

先做小规模再做 Base。Small 档可先验证外部双向的优势是否存在，Base 档重点监控损失缩放是否持续振荡。若复现外部双向 Base 落后，先检查溢出频率与学习率，再尝试内部双向对照。所有数字核对要同时对齐数据集、模型、阶段、指标、单位与聚合对象，词错误率降低几个百分点与相对百分之几是不同表述，不可混用。

### 何时值得尝试 Mamba 版语音自监督？

当任务满足以下条件时值得尝试。输入很长且希望整篇建模，或者只能用过去信息做实时转写，且计算与显存预算紧张，此时 Mamba 的线性扩展与因果结构带来实际可运行性。论文证据是文档级长上下文唯一跑通并从 13.37% 降到 11.08%，因果识别以 78.2M 参数做到 15.77% 优于 94.7M 因果 Transformer 的 16.66%，因果探测综合分 823.15 与 817.94 优于 805.44。当需要离散语音单元做口语语言模型输入时，Mamba 较高的音素纯度与说话人区分度也是加分项。

当任务是 Base 尺寸双向通用表示、且意图与语义任务权重很高时要谨慎。证据是 Base 双向 Transformer 以 868.93 领先外部双向的 815.38，全集以 772.4 领先 683.59，内部双向虽追到 832.31 左右仍未全面反超。此时可先在 Small 档验证，或把内部双向作为首选对照，并预留训练稳定性调试时间。

一句话收束：Mamba 版 HuBERT 是长序列与实时语音的有力互补方向，但在双向大规模扩展上仍有未解决的稳定性与分数差距，后续验证应补多轮平均、更大批量与真实延迟测量。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.acl-long.470.pdf#page=2)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.acl-long.470.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.acl-long.470.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.acl-long.470.pdf#page=3)

[![原文数学表达区域 5，PDF 第 12 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.acl-long.470.pdf#page=12)

[![原文数学表达区域 6，PDF 第 12 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-6.png)

区域 6 · [查看论文原页](https://aclanthology.org/2026.acl-long.470.pdf#page=12)

[![原文数学表达区域 7，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-7.png)

区域 7 · [查看论文原页](https://aclanthology.org/2026.acl-long.470.pdf#page=13)

[![原文数学表达区域 8，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/e28695bc5c86/figure-8.png)

区域 8 · [查看论文原页](https://aclanthology.org/2026.acl-long.470.pdf#page=13)

另有 12 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.acl-long.470.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
