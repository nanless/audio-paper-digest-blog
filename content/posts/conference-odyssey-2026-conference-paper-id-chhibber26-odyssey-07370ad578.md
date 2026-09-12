---
title: "Advancing Zero-Shot Open-Set Speech Deepfake Source Tracing"
date: 2026-09-12
draft: false
description: "该文把攻击溯源做成验证问题，用自监督前端加角度间隔与混合正则训练与训练集完全隔离的嵌入器，在分布内用少样本后端取胜而在分布外用零样本余弦取胜，但两类等错率仍在 13% 至 30% 量级。"
tags: ["对比学习", "少样本", "零样本", "语音", "音频指纹"]
categories: ["odyssey-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:odyssey:2026:conference-paper-id:chhibber26_odyssey"
paper_digest_source_kind: conference
paper_digest_conference_id: "odyssey-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "bdf258c85e7ee7cbde5dad6961377c9c8aee9ab867dfbce8214179d03d2a29d7"
paper_digest_api_reader_plan_sha256: "8a882a91903386eb60f96535bae56a8489896c0f189568a89ce31aed364c33bb"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "fcb42ed40a3c4da56147dd6c59ecbecaed680e22164d1314b0b74597ab3b6b27"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d6406d526651e485deda9ccf343f492cb87f322c4367cbcbbae389e8b74310a9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "76144a4ae44d380a47295b9ff537fd55d53b07082d6bea101fe82c6973022103"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0c9f0c8a5413210e014746564717ef250f9c23f72ebd558ad456d32ac848c13a"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"setting","id":"setting.few-shot","label":"少样本"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.fingerprinting","label":"音频指纹"}]
paper_digest_primary_task: "音频指纹"
paper_digest_primary_method: "对比学习"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 训练没见过的攻击怎么验：把声纹验证搬到深度伪造溯源

> 英文题目：*Advancing Zero-Shot Open-Set Speech Deepfake Source Tracing*

> 会议身份：`conference:odyssey:2026:conference-paper-id:chhibber26_odyssey`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf)

标签：#对比学习 #少样本 #零样本 #语音 #音频指纹

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Manasi Chhibber：机构信息未能从会议 PDF 纯文本可靠映射
- Jagabandhu Mishra：机构信息未能从会议 PDF 纯文本可靠映射
- Tomi H. Kinnunen：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

开放集溯源要求输入待测语音并判定其是否来自某个已注册攻击指纹，难点在于生成方法持续涌现导致测试攻击与训练攻击完全不相交，且声学模型与声码器差异细微。方法链分四段推进：先用自监督学习（Self-Supervised Learning, SSL）前端加AASIST在9类训练攻击上学习攻击嵌入，接着对每种注册攻击平均多个参考嵌入形成指纹，再提取试听嵌入，最后用余弦相似度（Cosine Similarity）或孪生网络（Siamese Network）与多层感知机（Multilayer Perceptron, MLP）完成试听与指纹的验证打分。与既有交叉熵分类复用嵌入的做法不同，该工作引入加性角度间隔损失（Additive Angular Margin, AAM）收紧类内分布并用回归混合（Regression Mixup, RegMixup）平滑类间表示以提升未知攻击泛化。在STOPA数据集上，分布内攻击验证中少样本MLP达到13.11%等错误率（Equal Error Rate, EER），显著优于零样本余弦的29.91%，而分布外条件下零样本余弦以16.43%反超少样本方法。该结论仅适用于STOPA定义的声学模型与声码器组合划分及英文朗读式数据，跨语种、真实压缩传输与全新架构族尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，先保留哪些关键信息？

这篇解读的对象是刚进入语音与音频方向的研究生，目标是把 1 篇开集零样本溯源论文讲到可核对、可复述。输入只有论文正文与本次收到的 4 张官方原图像素，不引入外部评价。必须保留的信息包括任务定义、数据划分的隔离关系、嵌入器训练目标、指纹构造方法、4 种后端的工作条件、评测指标的两种试验构成，以及关键超参数与主要等错率数字。输出是 1 篇按学习依赖展开的中文技术解读，术语首次出现时先给白话再给英文。

要解决的问题不是判断语音是真是假，而是判断一段已知的假语音来自哪一种生成方法。白话说，检测回答是不是伪造，溯源回答像哪一台伪造机做的。英文叫 source tracing 或 attack attribution。难点在于生成方法不断出现，评测时一定会遇到训练时没见过的攻击，因此不能做成固定类别数的闭集分类。论文把这个问题类比为声纹验证，也就是 speaker verification：注册阶段为每个攻击存一个指纹，测试阶段把待测语音的向量与声称来源的指纹比对，高于阈值接受，低于阈值拒绝。

初学者容易把溯源误解为多分类准确率，原文的验证框架要求用等错率来度量。等错率英文是 equal error rate，缩写为 EER，数值越低越好。它由目标试验与非目标试验的分数分布决定，阈值取在误接受与误拒绝相等的位置。论文区分分布内试验与分布外试验：前者在已知注册攻击内部做目标与非目标比较，后者用已知目标对比未知攻击的非目标。理解这两类试验的构成，是读懂后面所有数字的前提。

### 已有路线分几支，本文站在哪一支上？

按论文梳理，开集溯源大致有两条路线。第一条先做分布内与分布外检测，再对分布内做来源识别，代表做法包括编码器解码器结构、深度度量学习加多类损失、自监督嵌入的免训练方法、能量引导训练、持续学习与变分信息瓶颈等。这条路线需要同时评价检测与识别，缺乏统一的开集度量。第二条直接借用声纹验证的思想，用在已知攻击上训练的嵌入器去做未知攻击的验证，包括基于自监督主干的度量学习、基于残差网络的模型，以及先做已知攻击分类再复用嵌入做验证的做法。

本文属于第二条路线，并延续作者此前提出的 STOPA 数据集与评测协议。STOPA 的关键设计是训练嵌入器所用的攻击与做指纹注册和试验的攻击完全隔离，注册阶段相当于为攻击录制指纹，试验阶段把未知语音与指纹比对。论文引用此前基线在分布内与分布外分别约为 39% 与 35% 的等错率，说明任务很难。本文的增量是改进嵌入器训练策略与后端打分：引入自监督前端、加性角度间隔损失、英文为 additive angular margin loss，缩写为 AAM loss，再加回归混合正则、英文为 regression mixup，缩写为 RegMixup，并用域外数据增加攻击多样性，同时引入孪生网络后端。

### 验证问题到底怎么形式化？

论文把识别与验证分开定义。识别是给定语音预测它属于已知攻击集合中的哪一类，必要时用阈值拒绝分布外攻击。验证是给定语音与声称的来源编号，计算相似度分数并与阈值比较，公式中记试验嵌入为 trial embedding，记声称来源的指纹嵌入为 fingerprint embedding，记打分函数为相似度。接受条件是分数大于等于阈值，否则拒绝。

关键的集合关系是训练集、指纹集与试验集的攻击类型满足隔离与包含。记训练划分为嵌入器训练集，指纹集为注册集，试验集为测试集，原文要求训练攻击与指纹和试验攻击不相交，而指纹攻击是试验攻击的子集。这意味着嵌入器在训练时从未见过评测阶段的任何攻击，注册时只见过其中一部分，试验时既有注册过的分布内攻击，也有完全未注册的分布外攻击。复述时必须说清这一点，否则会把少样本后端的训练数据误认为见过试验攻击。

另一个需要提前建立的概念是溯源粒度。论文不只做整条攻击流水线的溯源，还做声学模型层级与声码器层级，以及架构层级的验证。声学模型英文为 acoustic model，缩写为 AM，负责把文本转为声学特征；声码器英文为 vocoder model，缩写为 VM，负责把特征转为波形。同一攻击编号可以拆出声学模型编号与声码器编号，因此 1 次试验可以同时考察 3 个层级的分数。

### 整个流程如何从一条波形走到接受或拒绝？

论文给出 4 个阶段。第一阶段训练攻击嵌入提取器，输入原始波形，输出区分攻击的向量。第二阶段用同一提取器为每个注册攻击提取多条语音的向量并聚合成指纹。第三阶段为待测语音提取试验向量。第四阶段做后端打分，比较试验向量与声称指纹，给出接受或拒绝。下图是原文总览，重点看主路径与分支关系。

> **看图路径：** 1. 先沿左侧原始波形进入蓝色嵌入器再分叉到指纹与 trial 两路的主路径看数据流向；2. 再看右侧黄色打分模块输出接受或拒绝，确认这是验证而非闭集分类；3. 最后对照顶部与底部的指纹提取与 trial 提取标注，确认二者共用同一嵌入器

[![原论文 Figure 1：Overview of the proposed attribution framework, where a trial embedding derived from an attack…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/0dc1d31de98b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/0dc1d31de98b/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of the proposed attribution framework, where a trial embedding derived from an attack utterance is compared against enrolled fingerprints to attribute the utter- ance to…”。*

从像素看，左侧一条粉紫色波形进入浅蓝色矩形表示的攻击嵌入提取器，该矩形被虚线框标注为第一阶段训练。中间上方两条短波形指向多列小方块表示的指纹向量，下方一条短波形指向单列小方块表示的试验向量，右侧黄色大矩形为第四阶段打分，输出为接受或拒绝。教学上可以沿一条样本走完全程：一条训练波形先用于学习嵌入空间，一条注册波形先变成向量再参与均值得到指纹，一条试验波形变成试验向量后与指纹比对。原文强调试验向量可能来自分布内或分布外攻击，这正是开集的含义。

需要提醒的是，该图只讲数据流，不讲损失函数与后端内部结构。损失与后端的细节由更详细的第二张图承担，下一节展开。复现时先按这张图搭出数据划分与模块接口，再去填充训练目标与打分实现，就不会把指纹均值与后端训练混在一起。

### 嵌入器、指纹与四种后端各自做什么？

攻击嵌入提取器英文为 attack embedding extractor，记为从波形到向量的映射。论文对比自监督增强的 AASIST 与残差网络，分别记为 SSL-AASIST 与 SSL-ResNet34。前端自监督的作用是提供更通用的语音表示，后端分类器的作用是把表示压向攻击可分。指纹提取的计算很具体：对每个攻击选定数量为 r 的注册语音，逐条提取向量后取均值，原文用均值聚合降低单条语音的波动。r 的取值在相同文本条件下为 1、10、100、400，在不同文本条件下还包括 1000 与全部，这种设计让后面可以画出注册量曲线。

**攻击嵌入提取器 × 攻击指纹：** 攻击嵌入提取器负责把原始波形映射为区分攻击来源的向量，攻击指纹负责把同一攻击多条向量的均值存为可比对的注册模板，二者搭配的原因是验证时不能重训分类器，只能比对 trial 向量与指纹向量的相似度，组合意义是把开集多分类转化为开集验证。

后端有 4 种，条件必须分清。零样本余弦是直接计算试验向量与指纹向量的余弦相似度，不训练任何后端参数。零样本孪生网络是在嵌入器训练数据上训练一个孪生网络，攻击类型与指纹集不相交，测试时把映射后的向量再算余弦。少样本孪生网络是在指纹集的向量对上训练，少样本多层感知机则是在指纹集的向量上训练分类器，测试时取声称攻击对应的输出概率作为验证分数。多层感知机英文为 multilayer perceptron，缩写为 MLP。

孪生网络英文为 Siamese network。下图把这些分支画在同一框架里。

> **看图路径：** 1. 先从左下原始波形经第一阶段嵌入器，再看第二与第三阶段如何分别形成指纹与 trial 向量；2. 再看第四阶段三个并列后端：余弦直接打分、多层感知机输出类别概率、孪生网络映射后再算余弦；3. 最后看底部训练损失分支如何区分对比损失与交叉熵，以及零样本与少样本训练数据的不同来源标注

[![原论文 Figure 2：Verification-style source tracing framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/0dc1d31de98b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/0dc1d31de98b/figure-2.png)

*论文图 2。原论文 Figure 2：“Verification-style source tracing framework.”。*

从像素看，左上粉色小框标注的 AAM 指向嵌入器，表示训练目标；中部多行小方块分别标注指纹与试验向量，并汇入同一比较框；右上余弦分支直接输出分数，右中多层感知机分支在训练时用指纹向量、测试时用试验向量并输出多个攻击概率，右下孪生网络分支用共享权重的双路结构映射后再算余弦，底部菱形标注训练损失可在对比损失与交叉熵之间选择。读图时不要把孪生网络的映射误认为嵌入器本身，它只是后端的小网络，结构为 3 层线性层。

**零样本后端 × 少样本后端：** 零样本后端负责在不看注册攻击数据的情况下直接打分，少样本后端负责用注册阶段的指纹嵌入再训练一个小分类器或度量网络，二者搭配的原因是开集评测既要测完全未见攻击的泛化，也要测给定少量注册样本能否快速适配，组合意义是揭示分布内适配收益与分布外泛化损失的权衡。

初学者常见误解是把少样本理解为见过试验语音。实际上少样本只见过指纹集的注册语音，试验语音仍是未见过的句子与说话人，且分布外试验的攻击类型在注册阶段完全没有出现。因此少样本的优势只应在分布内成立，分布外仍考验嵌入器本身的泛化，这正是论文后面结果呈现的反转。

### 嵌入器与后端如何训练，参数与监督是什么？

嵌入器训练的监督是语音对应的攻击标签，训练集包含 STOPA 的 3 类攻击与 ASVspoof 2019 的 6 类攻击，共 9 类。优化目标由两项相加：原始样本的 AAM 目标与混合样本的 AAM 目标。AAM 的做法是在嵌入向量与类别权重向量的夹角上加一个角度间隔，再乘缩放因子后做归一化分类，它促使同类更紧、异类在角度上更远。回归混合的做法是从 Beta 分布采样插值系数，把两条波形按系数加权相加得到虚拟样本，把标签也按同样系数加权，再用同样的 AAM 目标优化。原文把总体损失写成两项之和，意图是让类间表示更平滑。

**加性角度间隔损失 × 回归混合：** 加性角度间隔损失负责在角度域拉开不同攻击类中心并压紧同类，回归混合负责用两样本插值构造虚拟训练样本并用插值标签做同种角度目标，二者搭配的原因是前者增强判别性但易过拟合训练攻击，后者平滑类间表示，组合意义是让嵌入器对未见攻击仍保持可分的指纹空间。

具体超参数按原文交代，不做推测。嵌入器用缩放因子与间隔的组合训练 100 轮，优化器与学习率、混合强度、孪生网络结构与训练对数、多层感知机隐层尺寸都有明确记录。训练与验证按 8 比 2 随机划分训练分区，依据验证损失选模型。需要指出的缺项是原文未报告批大小、采样策略与阈值选择细节，也未说明前端自监督参数是冻结还是联合更新，复述时应明确这是未报告项，不能从模型名称推定为冻结或微调。

后端训练的监督各不相同。零样本余弦无训练。零样本孪生网络在嵌入器训练分区构造等量正负试验与指纹对，用对比学习训练。少样本孪生网络在指纹分区的向量对上训练，少样本多层感知机在指纹分区的向量上用交叉熵训练。推理时前三者都回到余弦相似度打分，只有多层感知机用类别概率打分。这种不对称是理解结果差异的关键：多层感知机直接优化分布内类别边界，分布外没有对应输出，只能靠已知目标的概率做对比，因此分布外行为与余弦不同。

### 训练配置如何原样复现？

复现嵌入器时按原文配置组织超参数，下表把对象、优化器、学习率、轮数与关键结构放在同一行，便于逐项核对。需要强调的是表内数字来自原文连续句的逐字证据，千分位空格与小数精度保留原样，叙述时数字与单位之间留空格。

| 对象 | 优化器 | 学习率 | 训练轮数 | 关键参数 |
| --- | --- | --- | --- | --- |
| 嵌入器整体 | Adam | 0.0001 | 100 epochs | 缩放因子 30 间隔 0.5 |
| 混合正则 | Adam | 0.0001 | 100 epochs | 插值参数 0.2 |
| 孪生后端 | Adam | 0.001 | 100 epochs | 3 层 128 至 64 至 32 |
| 孪生训练对 | 对比学习 | 0.001 | 100 epochs | 50, 000 正负对 |
| 感知机后端 | Adam | 0.001 | 100 epochs | 隐层 128 单元 |

表后说明可运行性与代价。嵌入器与两个后端都是实际可训练的模块，验证集按 8 比 2 划分并依据验证损失选模型，这保证了选择标准与测试指标分离。代价是嵌入器参数量大，自监督 AASIST 约三亿一千八百万，残差网络约四千三百万，前者训练与存储成本更高。反例是零样本孪生网络同样训练 100 轮却未带来收益，说明计算量不等于泛化，复现时应先跑通零样本余弦基线，再叠加后端，避免一步到位难以定位问题。

### 数据、划分与指标如何保证开集条件？

STOPA 数据集按原文包含 699k 条伪造语音，来自 13 个攻击系统，由 8 个声学模型与 6 个声码器组合而成。每条语音标注攻击编号、声学模型编号与声码器编号，支持多层级溯源。说话人在各划分之间不相交，指纹阶段区分相同文本与不同文本 2 种条件，相同文本指内容相同的句子，不同文本指内容不同的句子，注册量从单条到全部设有多档。域外增强数据来自 ASVspoof 2019 的 6 类攻击约 121k 条语音，并入嵌入器训练集以增加多样性，所有语音先做静音裁剪。

**分布内试验 × 分布外试验：** 分布内试验负责用注册过的 5 类攻击做目标与非目标比对，分布外试验负责用注册目标对比未注册的 5 类攻击做非目标，二者搭配的原因是指纹集与试验集存在包含关系而训练集与它们完全隔离，组合意义是同时度量已知攻击的区分能力与未知攻击的误接受风险。

评测指标为 2 种等错率。分布内等错率在分布内目标与非目标试验之间计算，分布外等错率用分布内目标对比分布外非目标计算。方向都是越低越好。论文还报告声学模型、声码器及架构层级的等错率，层级越粗，类别合并越多，比较条件也随之变化，因此不能把攻击层级的数字直接与架构层级的数字比大小来论证方法优劣，只能在同一层级、同一试验构成下比较后端或嵌入器。

下表把数据集规模与划分整理为可核对的形式，数字与单位保留原文写法，条件列说明每行数字的适用范围，避免把训练攻击数与注册攻击数混为一谈。

| 条件 | 指标 | 训练分区 | 指纹分区 | 试验分区 |
| --- | --- | --- | --- | --- |
| 攻击系统总数 | 语音条数与系统数 | 9 类训练攻击 | 5 类注册攻击 | 10 类试验攻击 |
| STOPA 原始规模 | 伪造语音总量 | 3 类来自 STOPA | 10 个说话人 | 48 个说话人加注册类 |
| 声学与声码器组合 | 模型数 | 8 个声学模型 | 6 个声码器 | 多层级标签 |
| 域外增强 | 附加语音量 | 121k 附加语音 | 6 类 A01 至 A06 | 并入训练 |
| 说话人隔离 | 划分约束 | 20 个训练说话人 | 10 个注册说话人 | 48 个试验说话人 |

表后需要说明代价与边界。该划分的优点是训练与评测攻击严格隔离，能真正检验零样本泛化；代价是训练只见过 9 类攻击，嵌入器容量大时容易记住训练攻击的特有痕迹。说话人不相交减少了说话人泄漏，但相同文本与不同文本的语言内容影响仍需单独检验，论文后面用注册量曲线回答了这一点。未评测的边界包括真实语音的干扰、信道与压缩的影响，原文没有报告，不能引申。

### 评测时如何构造目标与非目标试验？

构造试验时先固定指纹集的 5 个攻击，再从试验集抽取语音。对分布内评测，目标试验是同一注册攻击的语音与指纹配对，非目标是不同注册攻击之间的配对；对分布外评测，目标仍是注册攻击的语音，非目标用未注册的 5 个攻击语音冒充注册攻击。这种构造保证分布外攻击在注册与后端训练中都未出现，任何利用注册标签的后端在分布外都面临类别外推。

实现上指纹向量是多条注册向量取均值，试验向量是单条语音的向量，打分用余弦或后端映射后的余弦，多层感知机除外。阈值比较决定接受或拒绝，等错率在分数集合上计算。复现时必须保持说话人不相交与攻击隔离，否则会高估性能。常见错误是把试验语音也加入后端训练，或把分布外攻击的标签泄露给多层感知机，这会破坏开集条件。

另一个细节是相同文本与不同文本的注册。相同文本指注册语音内容相同，不同文本指内容不同，论文报告二者差异不大，但复现时仍应分别评测，因为内容相关可能在其他语种或短语音条件下显现。注册量从单条到全部的曲线是检验指纹稳定性的最廉价方法，建议优先复现该曲线而非只复现单点。

### 主结果在什么条件下成立，反例是什么？

主结果使用最强的嵌入器组合，即自监督 AASIST 加 AAM 加回归混合，并在不同文本全部注册条件下比较 4 种后端。结论呈现清晰的交叉：在分布内试验中，少样本后端明显更好；在分布外试验中，零样本余弦更好。教学上应先讲条件再讲数字：嵌入器固定、注册量固定为全部、比较对象都是实际可运行的后端，没有用事后最优阈值或 oracle 类别代替。

| 场景 | 指标 | 零样本余弦 | 少样本孪生网络 | 少样本多层感知机 |
| --- | --- | --- | --- | --- |
| 分布内试验 | 攻击等错率 | 29.91% | 17.72% | 13.11% |
| 分布外试验 | 攻击等错率 | 16.43% | 23.47% | 21.57% |
| 分布内试验 | 声学模型等错率 | 29.91% | 17.72% | 13.11% |

表前已说明比较问题是固定嵌入器后哪种后端更适合哪种试验，公平条件是同一注册量与同一试验构成，指标方向为等错率越低越好。表后解释收益与代价：少样本多层感知机在分布内把攻击等错率从约 30% 降到约一成三，代价是分布外回升到 20% 以上；零样本余弦在分布外保持约一成六，但在分布内停留在约 30%。未胜出项也很重要：零样本孪生网络在两类试验中都差于零样本余弦，说明在训练攻击上学到的后端映射没有迁移到未见攻击，论文推测它需要更多试验对才能改善，但这属于有限解释而非已验证因果。

**声学模型溯源 × 声码器溯源：** 声学模型溯源负责判断合成流水线中声学模型子系统的来源，声码器溯源负责判断波形生成子系统的来源，二者搭配的原因是同一攻击标签可拆为声学模型编号与声码器编号两个层级，组合意义是检验嵌入究竟记住整条流水线指纹还是子模块痕迹，论文报告声学模型更难区分。

另一组主结果是嵌入器对照。基线 AASIST 只在 STOPA 上训练，分布内与分布外攻击等错率都在四成七左右；加入自监督前端与域外数据后明显下降；再加 AAM 与回归混合后最强组合在分布内攻击约 30% 一、分布外攻击约二成一。值得注意的是小模型 SSL-ResNet34 在分布外攻击上反而更好，论文将其归因于参数量较小可能减轻过拟合，但同时它在声学模型与声码器层级上弱于大模型，说明攻击整体指纹与子模块痕迹需要不同的容量。报告时用报告显示，解释时用可能与待验证，避免把参数量小直接当成泛化好的证明。

下图用降维散点展示指纹空间，左中右分别对应残差网络加间隔、自监督 AASIST 加间隔、自监督 AASIST 加间隔与混合。

> **看图路径：** 1. 先对照最右侧图例确认五种攻击类型的颜色与形状编码；2. 再比较左中右三块面板在相同注册量下标注点的聚集程度；3. 最后观察每块面板内随注册量从 1 到全部变化时同色点的收拢趋势

[![原论文 Figure 3：Scatter plot of averaged fingerprint embeddings using t-SNE: (a) ResNet34+AAM, (b) SSL-AASIST+AAM…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/0dc1d31de98b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/0dc1d31de98b/figure-3.png)

*论文图 3。原论文 Figure 3：“Scatter plot of averaged fingerprint embeddings using t-SNE: (a) ResNet34+AAM, (b) SSL-AASIST+AAM, (c) SSL- AASIST+AAM+RegMixup, shown for different enrollment sizes.”。*

从像素看，三块面板横纵轴都是降维坐标，点按攻击类型着色，图例在最右侧标出 5 类攻击编号，每个点附近标注相同或不同文本及注册量。左侧面板同色点沿对角拉长但仍有交叠，中部面板同色点更集中，右侧面板在加入混合后同色点更紧凑、异色点分离更明显。解释时只能说可视化支持嵌入更紧凑的判断，不能把 2 维距离直接等同于原始高维余弦分数的大小，降维会扭曲距离，原文也只把它作为辅助证据。

### 失败条件与负结果告诉我们什么？

最值得讲的负结果是零样本孪生网络全面落后于简单的余弦。它在分布内攻击约为四成二，分布外也接近四成三，而余弦在同样嵌入器下分别为约 30% 与约一成六。这说明在训练攻击上学到的非线性映射没有迁移到未见攻击，反而扭曲了原本可用的余弦空间。教学意义是后端容量要与注册数据量匹配，训练攻击与注册攻击不相交时，大容量后端更容易过拟合训练攻击的划分。

第二个反例是声学模型在分布外的困难。零样本余弦在分布外攻击上很好，但在分布外声学模型上回升到 30% 以上，少样本多层感知机反而稍好。这表明整体攻击指纹与子模块指纹的泛化行为不一致，攻击编号可分不代表声学模型编号可分。复述时不要把攻击层级的排序直接套用到子模块层级。

第 3 个边界是单条注册的脆弱性。注册量为一时零样本曲线普遍偏高，尤其是相同文本单条条件下波动大；增加到 10 条后大幅下降。这支持指纹需要多样本平均的实践建议，也提醒单样本注册的论文数字不宜作为系统承诺。若只能获得单条注册，应优先报告该条件下的分布内外数字，而不是用全部注册的数字代替。

### 注册量、文本内容与层级如何改变结论？

论文用注册量曲线做消融。横轴是每个攻击用于指纹的语音条数，纵轴是等错率，曲线区分零样本分布内、零样本分布外、少样本分布内、少样本分布外。总体趋势是注册量从单条增加到 10 条时提升最大，之后趋于平缓；分布内少样本始终低于零样本，分布外则相反。相同文本与不同文本两行没有显著差异，支持语言内容影响较小的判断，但这只在该数据集与该嵌入器下成立，不能推广为溯源与内容完全无关。

> **看图路径：** 1. 先看图例区分零样本分布内、零样本分布外、少样本分布内、少样本分布外四条曲线；2. 再看上下两行分别对应相同文本与不同文本，横轴为注册语句数从 1 到全部的变化；3. 最后逐列比较攻击、声学模型、声码器及架构级五组子图的曲线高低与交叉位置

[![原论文 Figure 4：SSL-AASIST + AAM + RegMixup: EER trends across attack-, acoustic model (AM)-, vocoder model (VM)-…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/0dc1d31de98b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/0dc1d31de98b/figure-4.png)

*论文图 4。原论文 Figure 4：“SSL-AASIST + AAM + RegMixup: EER trends across attack-, acoustic model (AM)-, vocoder model (VM)-, and architecture- level verification for zero-shot and few-shot backends under…”。*

从像素看，顶部一行对应相同文本的四档注册量，底部一行对应不同文本的六档注册量，每列是一个溯源层级。攻击检测子图中零样本分布外曲线从单条时的高位急剧下降到 10 条附近，少样本分布内曲线则一直处于低位；声码器架构检测中零样本分布内随注册量下降更明显，而少样本分布外几乎水平。读图时先确认纵轴是等错率所以向下为好，再区分单样本标记的波动与多样本后的平稳，不能把首点的高误差推广为全程，也不能把某子图的交叉推广到所有层级。

层级比较的细节值得单独复述。声码器通常优于声学模型，模型层级优于架构层级，意味着跨同一家族不同架构的溯源更难。这支持指纹更多记住具体模型配置而非抽象架构的解释，但同样是有限解释。未评测的边界是注册量超过全部之后的行为，以及注册语音说话人与试验说话人重叠时会发生什么，原文说话人不相交的设计恰好排除了后者，复现时不要自行放宽。

### 哪些结论还不能下，缺了哪项验证？

首先是性能绝对值仍高。即使最强组合，分布内少样本多层感知机约为一成三，零样本余弦分布内约为 30%，分布外约为一成六，距离可部署的取证要求还有明显差距。论文结论也承认可行但差距大，这属于直接报告。其次是后端选择的条件性：少样本只在分布内有效，零样本孪生网络在两种试验中都未胜出，说明后端改进没有统一最优，换数据集或换攻击家族后排序可能变化。

其次是机制解释的限度。回归混合让散点更紧凑、分布外更好，这由数字与可视化共同支持；但小模型泛化更好的说法只是可能，因为参数量、结构与训练动态同时变化，没有控制变量的消融。声学模型比声码器更难区分也是现象描述，未测量频谱、相位或时长等具体线索的贡献，不能断言是某一声学因素导致。

最后是未测量的量。原文没有报告延迟、计算开销、阈值在不同场景下的稳定性，也没有报告误判率随阈值的完整曲线，只用等错率单点比较。等错率相等的位置在实际系统中不一定可用，因此不能把等错率低直接承诺为误接受低。训练资源只提到使用计算中心，未给出可复算的时长与显存，推理开销与输出帧率也未讨论，选型时需补测。

### 复现先做什么，如何核对每一步？

第一步复现数据划分。按 3 类训练、5 类注册、10 类试验的攻击隔离组织 STOPA，并入 6 类域外数据做增强，保持说话人不相交，对注册语音分别构造相同文本与不同文本的多档集合。核对方法是统计每类攻击的语音数与说话人数，确认训练攻击未出现在注册与试验名单中。

第二步复现嵌入器。用自监督前端加 AAM 目标训练，再加回归混合，验证损失选模型后冻结嵌入器，为每个注册攻击计算多档均值指纹。核对方法是先跑零样本余弦的注册量曲线，确认随注册量增加而下降且相同与不同文本差异小，再与论文的相对排序对照，而不是只对单点。

第三步复现后端。在指纹向量上训练少样本孪生网络与多层感知机，在训练分区向量上训练零样本孪生网络，统一用等错率评测分布内与分布外。核对方法是复现交叉结论：分布内少样本更好，分布外余弦更好，若出现全面反转，应检查是否泄露了试验标签或混淆了目标与非目标构成。

关于代码与数据可得性，论文正文给出实现链接与 STOPA 公开的表述，但本次解读未获得完成验证的资源状态依据，因此不作当前可用或已公开的断言。复现前需自行确认链接可达性、权重与数据许可，不把正文中的链接文字等同于可运行保证。引用时以论文报告为准，缺失的批大小与前端更新策略需在复现报告中明确标注为未报告项。

### 何时值得尝试这种验证式溯源？

当任务必须面对未见过的生成方法，且只能为已知方法存少量注册语音时，这种验证式框架值得尝试。它的优点是把开集问题转化为阈值比较，不需要为每个新攻击重训大模型；注册量从一到十的提升最明显，工程上应优先保证每个注册攻击至少 10 条不同说话人与不同内容的语音。嵌入器选择上，若更关心分布外攻击整体溯源，简单的余弦配合正则化嵌入器已具竞争力；若场景封闭、攻击名单固定，少样本多层感知机能进一步压低分布内等错率，但要接受分布外回升的代价。

不适合的场景包括需要细粒度架构归因、或只能提供单条注册且要求低误接受的取证场景，论文显示架构层级与单样本条件下的误差仍然偏高。后续验证应补三项：在新攻击家族上的跨库测试、阈值在不同误接受约束下的操作点曲线、以及嵌入器容量与注册量的联合消融。只有补齐这些，才能把等错率单点结论转化为可部署的操作建议。总体上，这项工作证明了零样本溯源的可行方向，也用清晰的反转结论提醒我们，适配与泛化不可兼得，选型必须先明确试验构成。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf#page=2)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-6.png)

区域 6 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-7.png)

区域 7 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-8.png)

区域 8 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/3bcb555ccfcc/figure-9.png)

区域 9 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf#page=3)

另有 7 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 odyssey-2026 论文汇总](/posts/conference-odyssey-2026/)
