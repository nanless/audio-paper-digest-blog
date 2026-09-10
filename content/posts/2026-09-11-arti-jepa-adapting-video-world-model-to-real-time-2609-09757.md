---
title: "Arti-JEPA: Adapting Video World Model to Real-Time MRI of the Vocal Tract for Speech-Production Analysis"
date: 2026-09-11
draft: false
tags: [静默语音接口, 自监督学习, 领域适应, 言语障碍]
categories: [论文速递]
description: "论文把 V-JEPA 2 延续到约 62 小时无标注声道实时核磁上，用冻结编码器加轻探针测跨域音素、口吃二分类与舌切除前后迁移，最强证据是跨域音素 κ 升至 0.352 而口吃仅小幅提升，代价是单卡小批量、短窗与三例临床样本的局限。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.09757"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把互联网视频先验搬进声道核磁：Arti-JEPA 何时帮得上音素，何时帮不上"
paper_digest_original_title: "Arti-JEPA: Adapting Video World Model to Real-Time MRI of the Vocal Tract for Speech-Production Analysis"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.09757"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.09757.pdf"
paper_digest_primary_task: "静默语音接口"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.silent-speech","label":"静默语音接口"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"method","id":"method.domain-adaptation","label":"领域适应"},{"facet":"scientific_topic","id":"scientific_topic.speech-disorders","label":"言语障碍"}]
paper_digest_primary_method: "自监督学习"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把 V-JEPA 2 延续到约 62 小时无标注声道实时核磁上，用冻结编码器加轻探针测跨域音素、口吃二分类与舌切除前后迁移，最强证据是跨域音素 κ 升至 0.352 而口吃仅小幅提升，代价是单卡小批量、短窗与三例临床样本的局限。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hong Nguyen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sean Foley"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Christina Hagedorn"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yijing Lu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sudarsana Reddy Kadiri"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dani Byrd"},{"affiliations":["organization= Ming Hsieh Department of Electrical and Computer Engineering, University of Southern California, city=Los Angeles, state=CA, country=USA","organization=Department of English, College of Staten Island, City University of New York, city=New York, state=NY, country=USA","organization=Department of Linguistics, University of Potsdam, country=Germany","organization=Department of Linguistics, University of Southern California, city=Los Angeles, state=CA, country=USA"],"name":"Shrikanth Narayanan"}]
paper_digest_abstract_sha256: "7d8caf8ec975bee864c1021e3d960ea1182e4e2d43cc71f7b67257ca8a5b4bbc"
paper_digest_sidecars: {"citation.bib":{"sha256":"5f7982a540e3fa069ffde28cb2a0227d05e631eeeefcf472c7c4902ddda7c7b4","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-09757/citation.bib"},"citation.json":{"sha256":"a9bee40f3573974271ec8a681bb249d6286a19752aa9c85cd404282ddc0d96b1","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-09757/citation.json"},"citation.ris":{"sha256":"d2b822c48a1a75c864f31ad3e0b628336692e8e80f0a0bdcea36e6f7317e93fd","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-09757/citation.ris"},"rethink-context.json":{"sha256":"0986185ff0acb5a06a07462aedfd024f63f24b1042773a560479a4bea545119d","url":"/audio-paper-digest-blog/data/papers/2026-09-11/2609-09757/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "af29faf14d44a9838c89a34e1983ff77771e9b40096774d422efbd6fc6b3ef16"
paper_digest_api_reader_plan_sha256: "d3cad848aa96348f00a0ae08ef5d80e35862f49414429dcf88127ba41ef4a89e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2c21e21b22907002ba9b58c0f19e99f24d97fed50f807bda5f73380fa193c79a"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "9ecc1885af23e94eb5d9d8fa90d5e1d38d954a6b6884eca27cb5e78506a7a87b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "497ae226f689ee995c0f2cc43d1b568e981a007bd0c5bc1bf3c4bdc0ecbc2894"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "48759471ef20cee20bc761212d5cb5e7fb4999ff2b35229f49322748e7d80e1e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把互联网视频先验搬进声道核磁：Arti-JEPA 何时帮得上音素，何时帮不上

> 英文题目：*[Arti-JEPA: Adapting Video World Model to Real-Time MRI of the Vocal Tract for Speech-Production Analysis](https://arxiv.org/abs/2609.09757)*

> 标签：#静默语音接口 | #自监督学习 | #领域适应 | #言语障碍
>
> 评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.4/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Hong Nguyen：机构信息未在 arXiv HTML 中可靠披露
- Sean Foley：机构信息未在 arXiv HTML 中可靠披露
- Christina Hagedorn：机构信息未在 arXiv HTML 中可靠披露
- Yijing Lu：机构信息未在 arXiv HTML 中可靠披露
- Sudarsana Reddy Kadiri：机构信息未在 arXiv HTML 中可靠披露
- Dani Byrd：机构信息未在 arXiv HTML 中可靠披露
- Shrikanth Narayanan：organization= Ming Hsieh Department of Electrical and Computer Engineering, University of Southern California, city=Los Angeles, state=CA, country=USA；organization=Department of English, College of Staten Island, City University of New York, city=New York, state=NY, country=USA；organization=Department of Linguistics, University of Potsdam, country=Germany；organization=Department of Linguistics, University of Southern California, city=Los Angeles, state=CA, country=USA

## 📌 核心摘要

输入为静音中矢状面实时磁共振视频，输出为逐帧音素身份与流利与否及术前术后发音区分，难点在于标注稀缺、音素仅持续数十毫秒且单切片灰度低分辨率与自然视频差异大。方法先复用V-JEPA 2 ViT-L先验并复制灰度通道以适配预训练块嵌入，将约62小时无标注声道视频按50帧率与256像素网格切分为时空管块。接着在掩码潜变量预测目标下继续自监督训练转向构音流形，并以崩溃监控在留出说话人上跟踪表征统计以避免常数坍缩。最后冻结编码器并缓存时空嵌入，仅训练轻量注意力及双向长短时记忆探针完成帧级与片段级解码，前一步的冻结表征直接作为后一步探针的输入。与像素重建的VideoMAE相比，联合嵌入预测只要求预测指数滑动平均编码器的潜向量，丢弃不可预测的光度细节而保留可预测的运动动力学，因而更适配低对比构音运动。在Annot-16训练、USC LSS跨域测试的帧级音素识别任务下，Arti-JEPA的帧级指标Cohen κ为0.352，高于V-JEPA 2的0.156。该结论适用边界在于长时失流利类型划分与大范围切除后重建尚未验证，类型分类召回坍缩且仅三例声门切除患者受限。训练成本受限于单块V100 32GB硬件，有效批量128与26875次更新远小于八卡并行的1024批量与72000次更新，且浮点精度与激活检查点亦受限。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要回答哪三个问题？

本文的输入是声道实时核磁视频，即正中矢状面单通道灰度序列，分辨率在 84×84 到 104×104 像素量级，帧率在不同库中从 61 到 99 帧每秒不等，配有同步音频但预训练只用静音视频。目标是得到一个冻结后可复用的构音编码器，用轻探针读出音素与临床相关信息，而不是为每个库训练专用识别器。必须保留的信息包括数据来源与时长、是否冻结、探针训练与测试的说话人划分、指标方向与聚合方式。

学习门槛在于三点。第一是标注稀缺，稠密分割与音素对齐成本高，可用有标注集很小。第二是时间尺度快，音素持续约 40 到 200 毫秒，要求 20 毫秒级采样才能分辨快速辅音收紧。第三是视觉域特殊，低分辨率灰度核磁纹理与互联网彩色自然视频差异大，直接套用通用视频模型会退化。

论文把问题写成 3 个研究问题。第一是潜预测与像素重建哪种更适合构音动力学。第二是潜空间能否读出声学对齐的音素内容，域自适应能否增强。第三是同一表示能否支撑口吃、发育与舌切除等临床分析。

**实时核磁 × 视频世界模型：** 实时核磁负责给出声道正中矢状面灰度运动，直接看到舌根、软腭等深部结构；视频世界模型负责从大量自然视频学到通用运动先验。搭配理由是标注稀缺时先借通用运动表示，再用无标注声道视频把先验转到构音流形上，组合后得到可复用的冻结构音编码器，而不是每个任务重训专用模型。

阅读顺序建议先看任务与相关路线，明确与有监督识别和声学到构音反演的区别，再看方法全景中掩码潜预测如何延续，最后看训练与评测条件如何保证说话人不泄漏。只有先固定这些依赖，后面的 κ 与错误率比较才有意义。

### 同输入同目标的已有路线与本文探针范式有何不同？

同输入同目标的已有工作包括直接在正中矢状视频上做有监督音素识别。原文提到 Foley 等人报告视频-only 音素错误率 0.49 而音频为 0.21，Park 等人在单说话人上结合原始视频与感兴趣区和光流达到 0.34，适配到核磁的 AV-HuBERT 先预测文本再解耦扫描仪噪声，在 USC-TIMIT 上词错误率为 15.18%。这些系统是有监督且库专用的，目标本身就是识别或合成。

另一条线是反方向的声到构音反演与构音编码器，以及语音到视频扩散，同样依赖监督。还有构音分割与跟踪，但跨扫描仪泛化仍难。本文不同之处是把音素预测只当冻结特征探针，用来度量表示是否编码构音状态，而不是把识别器当最终系统。

自监督视频分两族。像素重建族以 VideoMAE 为代表，重建被遮挡像素，被迫建模外观细节。潜预测族以 I-JEPA 与 V-JEPA 为代表，预测被遮挡内容的表示，只学可预测结构。V-JEPA 2 扩展到 1000000 小时级互联网视频，用 ViT 编码器、2×16×16 管状分块与 3 维相对旋转位置编码，后者使编码器可泛化到不同网格与片段长度，本文正是利用该性质做变分辨率适配。

**联合嵌入预测 × 像素重建：** 联合嵌入预测在表示空间预测被遮挡块的特征，允许丢弃不可预测的光度细节；像素重建要求还原被遮挡的像素本身，被迫建模外观细节。搭配比较的理由是声道核磁噪声大而构音细节细，前者可能更贴合运动，后者可能保留更多细节，论文用同一冻结探针比较二者在音素上的强弱。

已有域延续预训练思想在自然语言处理与视觉中成熟，参数高效变体如 LoRA 可降低升级成本。本文的 T-SSL 即视频 JEPA 版本的继续预训练。需要提醒初学者，类别差异不能当同条件胜负，像素族与潜族的比较必须在相同 ViT-L 主干、相同冻结探针与相同跨域测试下才成立，论文第 4 节正是这样组织的。

### 为什么选无声视频探针与 κ 指标？

论文刻意用无声视频做探针。原因是若允许音频参与，就无法判断分数来自构音运动还是声学泄漏。只给视频、再对照人工对齐的音素标签，才能说表示编码了构音状态。音素由收紧位置与程度定义，因此能预测音素是构音编码的必要非充分证据。

指标选择照顾类别不平衡。帧级以 Cohen 的 κ 为 headline，机会校正后对高频元音与静音主导不敏感，同时报告微平均音素错误率。片段级 4 组分类以宏平均 F1 为主，使低频辅音不被多数类淹没。口吃二分类同样用宏平均 F1 并在留一说话人下聚合。

任务分两层。帧级连续识别问模型能否从原始帧恢复稠密时序信息，可部署但受边界理想化影响。片段级按标注起止切出单个音素整体分类，问元音、辅音、方式、部位等组内对比是否在潜空间可分，可诊断但不可直接部署。协同构音使相邻手势在时间上重叠，人工边界是弱边界，因此两层必须联合解读。

### Arti-JEPA 整体分哪两段，冻结线画在哪里？

整体分两段。左段是域自适应预训练，在约 50 小时以上高帧率声道核磁池上继续掩码潜预测目标。右段是冻结评测，编码器固定后接轻探针，分别做连续音素识别、分组音素分类、口吃分类与舌切除分析。冻结线画在编码器输出之后，所有下游只训练探针头。

下图是论文框架总览，左为自适应、右为冻结评测，阅读时先走主路径再看分支如何复用同一编码器。该图对理解便宜优先阶梯很关键，即先探针冻结编码器，再继续 JEPA 掩码去噪目标，最后才考虑微调。

> **看图路径：** 1. 先从左下掩码输入沿箭头走到编码器、预测器与右侧目标编码器，确认损失只连预测与目标；2. 再看虚线标注的指数滑动平均方向，确认目标分支不回传梯度；3. 最后看右半部分编码器冻结后分出两类探针，再分叉到四个下游任务

[![原论文 Figure 1：Arti-JEPA framework overview. Left: domain-adaptive pretraining on the largest available pool of…](https://arxiv.org/html/2609.09757v1/artiJEPA.png)](https://arxiv.org/html/2609.09757v1/artiJEPA.png)

*论文图 1。原论文 Figure 1:：“Arti-JEPA framework overview. Left: domain-adaptive pretraining on the largest available pool of vocal-tract real-time MRI, approximately 50 hours of high-frame-rate video, using…”。*

从像素看，左半给出掩码、在线编码器、预测器与指数滑动平均目标编码器三者关系，损失标为 L1。右半给出声道核磁帧序列进入带雪花标记的冻结编码器，再分出两类注意探针，最后指向 4 个任务，外加一条声到构音反演支路。这一布局说明适配与评测解耦，适配不接触任何下游标签，评测不更新编码器。

**域自适应预训练 × 冻结探针：** 域自适应预训练负责不换目标只换数据，把掩码潜预测目标延续到无标注声道视频；冻结探针负责固定编码器只训练轻读出头。搭配原因是只有冻结才能把分数归因于表示本身而非任务专有拟合，组合意义是先低成本探针、再自适应、最后才考虑微调的递进阶梯。

实现上沿一个样本走一遍有助于建立直觉。取一段 32 帧、50 帧每秒、约 640 毫秒的片段，按 2×16×16 管状分块并做多块掩码，可见块进在线编码器，掩码位置加可学习标记进预测器，预测目标是目标编码器对完整片段的表示，损失只在被掩码位置算 L1。下游取同一编码器的时空 token，探针做交叉注意力池化再线性分类，训练用逐 token 交叉熵，推理在滑动窗或整句上进行。

### 编码器、预测器与位置编码各自做什么？

编码器与预测器都是视觉 Transformer。输入先切成时间 2、空间 16×16 的管状 token，掩码策略采用多块策略，位置信息由 3 维旋转嵌入给出，特征维分成近似三等份分别旋转时间、高、宽轴。这种相对位置设计使网格变化无需重学绝对位置，是适配 256 像素与不同帧率的基础。

训练目标是掩码潜预测。记完整片段为 y，部分可见视图为 x，在线编码器记为 E，预测器记为 P，掩码标记记为增量，目标编码器参数是 online 参数的指数滑动平均并加停止梯度。损失只在掩码位置比较预测与目标的 L1 距离，无负样本、无像素解码器、无标签。

\[\min_{\theta,\phi,\Delta_{y}}\;\lVert P_{\phi}\left(\Delta_{y},\,E_{\theta}(x)\right)-\operatorname{sg}\!(E_{\bar{\theta}}(y))\rVert_{1},\]

上式中符号含义按原文理解。θ 是可训练编码器参数，φ 是预测器参数，Δ 是掩码位置标记，上横线 θ 是其滑动平均，sg 表示不回传梯度。计算目标是让基于上下文的预测逼近目标表示，而不是还原像素。原文明确说常数编码器也能精确满足该目标，因此损失本身不能区分学习与坍缩，必须另行监控表示。

**指数滑动平均目标编码器 × 停止梯度：** 指数滑动平均目标编码器负责缓慢跟踪在线编码器产生稳定的预测目标；停止梯度负责切断目标分支的梯度回传。搭配原因是潜预测无负样本无像素目标，常数解也能满足目标，二者共同构成不对称性以防止表示坍缩，组合后训练损失只在被遮挡位置计算特征损失。

时间分辨率选择有语音学依据。超喉构音事件约 40 到 200 毫秒，50 帧每秒对应 20 毫秒周期，可分辨快速收紧，32 帧对应 640 毫秒，可覆盖最长单个音素。灰度通道复制三份以复用预训练块嵌入卷积，强度做分位数截断与 z 分数归一化，不复用 ImageNet 统计。增强只做小平移、轻强度抖动、高斯噪声与时间裁剪，禁止左右上下翻转与大旋转，因为前后镜像会破坏语音学意义。

### 在什么数据上继续预训练，如何确认没有坍缩？

预训练完全无标注，只用静音正中矢状视频。两源合并，一是 USC 75 人库训练部分，71 人、2243 个视频、19.3 小时、5,770,000 帧，原生约 83 帧每秒。二是内部纵向库，21 人、7110 个视频、42.6 小时、14,350,000 帧，原生 61 到 99 帧每秒。合计 92 人、9353 个视频、61.9 小时、20,100,000 帧，重采样到 50 帧每秒训练网格。划分保证说话人不泄漏，预训练、验证与评测无解剖重叠。论文摘要与方法对小时数的表述有约数差异，正文以 61.9 小时明细为准，摘要称约 62 小时，图注称约 50 小时，应理解为不同阶段池大小而非矛盾。

优化用 AdamW 单余弦调度，5 轮热身到 5×10 的负 4 次方再衰到 10 的负 5 次方，权重衰减 0.04，目标动量从 0.998 到 1.0。单张 V100 上微批量 32、累积 4 倍得有效批量 128，每轮 125 步、共 215 轮、26875 步，float16 加梯度缩放是硬件约束而非配方选择。编码器 ViT-L 约 303.9M，预测器 12 层 384 维 12 头约 22.1M。

坍缩监控是本节教学重点。每轮把在线编码器置评估模式，在留出说话人上关增强、每视频取中心片段，token 特征均值池化为每片段 1024 维向量，记录三统计。特征标准差看整体收缩，有效秩看方差是否只剩少数方向，平均绝对余弦看是否被共享分量对齐。三者分别量尺度、维度与方向，单看其一会被另两类失效蒙蔽。合并运行稳定在特征标准差约 1.42、有效秩约 40/1024、平均绝对余弦约 0.44，L1 在约 0.40 平台，确认无坍缩且无标签泄漏。第二阶段平均绝对余弦回升到 0.63 而有效秩从 33 升到 68，解读为共享分量增强但子空间更丰富，而非方向丢失。

下表整理预训练池与跨域 headline 的对应关系，阅读时注意小时数、帧率与分辨率 3 轴同时变化，比较必须固定探针与测试集。

| 条件 | 指标 | 预训练前基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 跨域音素帧级，USC LSS，冻结探针 | κ | 0.156 | 0.352 | V-JEPA 2 对 Arti-JEPA |
| 同域音素帧级，Annot-16 子集，冻结探针 | κ | 0.362 | 0.505 | V-JEPA 2 对 Arti-JEPA |
| 预训练池，71 人库训练部分 | 小时数 | 19.3 | 61.9 | 单库对合并池 |
| 预训练池，原生帧率 | 帧每秒 | 约 83 | 61 到 99 混合 | 单一对混合 |

上表显示合并池把时长推到 60 小时以上并引入同一说话人纵向变化，与 JEPA 预测目标匹配。代价是单卡小批量与 26,000 步远少于 8 卡 20,000 步级配方，学习率与动量为小批量手调而非扫描，性能可能低于全规模重跑。未报告项是完整超参扫描与多随机种子的预训练方差，论文只给下游 3 种子，预训练本身单次运行。

### 评测库、划分与探针如何保证公平？

音素评测用两库。Annot-16 是 75 人库中 16 人子集，84×84 像素、83.3 帧每秒、1,150,000 帧、88447 个音素区间、静音占 7.9%，提供金标准 Praat 文本网格 ARPABET 对齐，共 41 个音素。USC LSS 是单个典型成人，104×104 像素、99 帧每秒、68.4 万视频中 220,000 帧、25355 个区间、静音占 2.1%，同样 41 个音素。划分是 14 人训练 384 条、验证用 sub030 共 30 条、同域测试用 sub043 共 30 条、跨域测试用全部 LSS 共 684 条，探针从未见过跨域说话人。标签与 token 按秒对齐，每个时间 token 取其中心时刻覆盖的音素，因此 99 帧每秒跨域无需特殊处理。

**帧级音素识别 × 片段级音素分类：** 帧级音素识别用固定滑窗逐帧解码连续语音，考察能否从视频恢复稠密时序信息但受协同构音边界模糊影响；片段级音素分类按标注切出单个音素整体分类，考察元音、辅音、方式、部位等组内对比但不可直接部署。二者互补，前者问能不能解码，后者问解码的是哪类语音学内容。

探针分两种。帧级用一层交叉注意力在展平的时空网格上池化再线性分类，逐 token 交叉熵训练 30 轮，在验证说话人上选最优。片段级把标注起止切出变长片段，同样的空间注意力逐时间步池化后接双向 LSTM，取双向末隐态为音素向量再分类。4 个头分别做元音 15 类、辅音 25 类、方式 5 类、部位 8 类，跨域支持为元音 9716 段、其余 15103 段。基线固定为 ViT-L 主干的 6 个冻结编码器，适配与否、潜与像素、视频与单帧图像 3 维对照。

临床两库另行组织。口吃库是 7 名成人，104×104 像素约 99 帧每秒，失流畅层 2108 个事件、中位 2.12 秒、均值 2.55 秒，正样本 2070 段、负样本从词层去除失流畅后按正样本时长分布采样得 1831 段，共 3901 段，留一说话人 7 折。舌切除库是 3 人术前术后配对，同 41 音素但无典型人同域对照，病理与采集差异不能完全分离。附录指出 15 帧每秒过稀被丢弃、刺激文本跨库重叠，因此帧级跨人不可比，主结论依赖片段级。

### 跨域音素上潜预测是否打赢像素重建？

先看帧级连续识别的 3 条稳定模式。视频编码器全面胜过单帧图像，尤其跨域。原生视频在 LSS 上 κ 约 0.16 到 0.19 而图像仅 0.03 到 0.07，同域差距则小得多，说明时间建模在域外最关键。自适应帮助大，跨域 κ 约翻倍，Arti-JEPA 同域 0.505 对原生 0.362，跨域 0.352 对 0.156。匹配自适应下潜预测领先像素重建，而原生两者近乎打平，潜优势在自适应后出现。

下表把上下文消融单独列出，固定冻结编码器与交叉熵，只换读出与时序上下文，从 640 毫秒短窗变为整句双向 LSTM。

| 条件 | 指标 | 短窗读出 | 整句读出 | 适用编码器 |
| --- | --- | --- | --- | --- |
| 同域测试，冻结 | κ | 0.505 | 0.672 | Arti-JEPA |
| 跨域测试，冻结 | κ | 0.352 | 0.421 | Arti-JEPA |
| 跨域测试，冻结 | 音素错误率 | 0.655 | 0.468 | Arti-JEPA |
| 跨域测试，冻结 | 音素错误率 | 1.040 | 0.694 | V-JEPA 2 |

上表说明读整句是探针侧最大收益，原生跨域错误率从 1 以上拉回 0.69，自适应跨域 κ 从 0.35 升到 0.42。但循环模型与更长上下文同时变化，不能归因于架构单一因素。损失消融显示焦点损失与交叉熵在种子噪声内打平，CTC 不降错误率且更不稳定，因此过发射的治愈是上下文而非损失。

片段级同样支持自适应。Arti-JEPA 在元音、辅音、方式、部位 4 组全面领先，原生编码器跨域宏平均 F1 约腰斩而自适应只掉约 10%。辅音最难，自适应最好也仅同域 0.4、跨域 0.33，低频如 zh 仅 29 样本，混淆向 l、r、v 集中。误差非随机，罕见类塌向视觉相近的高频类， affricate 塌向 plosive，postalveolar 塌向 alveolar。单正中矢状面对需要舌尖与舌背收紧的 alveolar 与 dental 更友好，鼻音召回可达 0.899 但需看精度，V-JEPA 2 鼻音精度 0.36 对 Arti-JEPA 的 0.52 说明高召回可能是过分配。

下图是舌切除元音混淆矩阵，按人与会话展开，行归一化，阅读时先看标题样本量再看对角线。

> **看图路径：** 1. 先按每行标题确认说话人与术前术后会话及样本量，再看行归一化含义；2. 对比第一行两块面板的对角线清晰度，判断术后是整体变糊还是局部重分布；3. 重点看第三列术前小样本面板的深色对角点，再看同列术后预测向少数类的集中

[![原论文 Figure 4：Arti-JEPA vowel segment-level confusion matrices: per glossectomy speaker \\times session…](https://arxiv.org/html/2609.09757v1/confmat_glossphg_vowels_perspk_ppt.png)](https://arxiv.org/html/2609.09757v1/confmat_glossphg_vowels_perspk_ppt.png)

*论文图 4。原论文 Figure 4:：“Arti-JEPA vowel segment-level confusion matrices: per glossectomy speaker \times session (row-normalized).”。*

从像素看，第一行 spk1 术前 1405 段对术后 406 段，术后对角略清晰但新增 ay 与 aa、uh 混淆。第二行 spk2 术前 603 段对术后 797 与 667 段，ae、eh、ey 术前分散，术后 uh、oy 部分可分。第三列 spk3 术前 138 段对术后 749 段，术前对角最清晰而术后向 ah、uw、ih 集中，ow 与 oy 混淆加重。总体是 spk1 与 spk2 术后分数反升但对比重分布，spk3 大幅下降，合并平均会掩盖个体轨迹。

下图是分元音 t-SNE 跨说话人投影，阅读时注意同一元音内颜色是否分离。

> **看图路径：** 1. 先看底部图例确认颜色代表说话人、形状代表术前术后与典型人；2. 逐个元音小面板比较灰色典型点群与彩色患者点群是否分离；3. 对照每面板标题的说话人轮廓分数，找出分离最强的双元音面板

[![原论文 Figure 5：t-SNE projections of segment-level embeddings for GLOSS speakers versus USC LSS speakers on…](https://arxiv.org/html/2609.09757v1/tsne_gloss_vowels_repA_segment.png)](https://arxiv.org/html/2609.09757v1/tsne_gloss_vowels_repA_segment.png)

*论文图 5。原论文 Figure 5:：“t-SNE projections of segment-level embeddings for GLOSS speakers versus USC LSS speakers on different vowels.”。*

从像素看，aw、ay、ey、oy 等面板灰色典型点与彩色患者点分离更明显，标题轮廓分数分别为 0.268、0.133、0.126、0.308，而 ah、ao、ih 等接近 0。这说明即使元音身份可解码，同一元音的潜表示仍保留说话人与域结构，可解码不等于域不变。

### 舌切除前后信号是丢失还是错位？

本节全推理，编码器与探针头冻结，不在舌切除数据上训练。解读用阶梯，每行加一层位移。同域未见说话人、典型域外 LSS、术前合并、术后合并依次加严。必须记住库中无典型人同域对照，病理与采集差异不能完全分离。

下表是分组阶梯，宏平均 F1 与 κ 并列，阅读时先看元音再看部位，粗体仅一格超典型域外锚点。

| 阶段 | 元音 15 类 κ | 辅音 25 类 κ | 方式 5 类 κ | 部位 8 类 κ |
| --- | --- | --- | --- | --- |
| 同域未见人 | 0.543 | 0.440 | 0.525 | 0.572 |
| 典型域外 | 0.470 | 0.360 | 0.464 | 0.408 |
| 术前合并 3 人 | 0.282 | 0.343 | 0.359 | 0.545 |
| 术后合并 3 人 | 0.253 | 0.307 | 0.311 | 0.393 |

上表报告术前元音已从 0.470 掉到 0.282，手术额外 pooled 仅降 0.029，因此术后全部差距不能归因于切除。术前下降可能反映肿瘤相关解剖生理变化或协议差异，但与 LSS 同 0.55T 扫描仪不同协议，硬件差异单独解释力有限。粗结构更稳，术前部位 κ0.545 超典型锚点 0.408 并接近同域 0.572，靠高支持的 alveolar、bilabial、velar 驱动，低支持 postalveolar 与 glottal 近地板。排序为部位远强于方式、辅音、元音，术前术后同序，支持不同构音参数鲁棒性分层。

个体轨迹分化大。spk1 术前 1405 元音段到术后 406 段，元音 F1 从 0.333 到 0.419，部位从 0.551 到 0.520。spk2 术前 603 段到术后 797 与 667 段，元音从 0.171 到 0.282 与 0.273。spk3 术前仅 138 元音与 216 辅音段，元音 0.556 到术后 0.152，部位 0.564 到 0.177，是最广泛切除的半舌加咽切除。论文明确 3 例不足以建立切除范围与解码的系统映射，术后比较也不应解读为一般康复轨迹。域内探针能解码患者至少不差于典型人的说法，应理解为残余差距主要是跨人跨域错位而非信号全失，且术后未系统性低于术前，而非每人每类都成立。

### 口吃二分类与三分型为何一易一难？

口吃任务问表示是否检出紊乱构音。二分类用全网格注意探针，留一说话人、时长匹配负样本，在 3901 段上池化宏平均 F1。适配两族都提升，Arti-JEPA 0.817 对原生 0.789，VideoMAE 适配 0.807 对原生 0.790，差距超 3 种子波动但绝对带宽仅 0.03，说明大部分检出功劳来自通用视频先验，适配主要体现在 block 主导的折上。

下表对比二分类与三分型的落差，条件是同一特征缓存与冻结编码器。

| 条件 | 指标 | 二分类 | 三分型 | chance 参考 |
| --- | --- | --- | --- | --- |
| 冻结 Arti-JEPA，全网格探针 | 宏平均 F1 | 0.817 | 0.381 | 0.333 |
| 冻结 Arti-JEPA，同上 | κ | 未报告 | 0.110 | 0 |
| 三分型分项，block 693 段 | 精确率到召回 | 0.388 到 0.722 | F1 0.505 | 不适用 |
| 三分型分项，repetition 694 段 | 精确率到召回 | 0.407 到 0.183 | F1 0.252 | 不适用 |

上表显示类型信息非全无，精度 0.39 到 0.49 高于均匀猜测，但召回塌陷，repetition 仅 0.183，prolongation 0.318。类权按训练说话人计算，无法校正留出说话人的先验差异，AWS6 以重复为主时探针在 224 段中 222 段判为 block 且 3 种子一致。验证宏平均 F1 在 0.72 到 0.80 而留出在 0.11 到 0.41，说明探针对说话人外观敏感而非对区分类型的运动敏感。

失败条件还包括时长错配。失流畅平均 2.5 秒而预训练窗仅 640 毫秒，32 帧均匀采样把长事件稀疏化，丢失快速动力学。原生全速约 99 帧每秒条件因缓存达 204 吉字节、每轮约 14 分钟而未跑，这是约束而非设计选择。需要高效长序列探针或分层状态空间建模才能正确评估，这是明确的未评测边界。

声条件 rollout 是否利用音频用下式诊断，打乱音频看自回归误差增量。

\[\centering\mathrm{gap}_{\mathrm{audio}}=L_{1}^{\mathrm{AR}}(\text{shuffled audio})-L_{1}^{\mathrm{AR}}(\text{real audio}),\@add@centering\]

上式中 L1 上标 AR 为自回归分支误差，输入是打乱与真实音频而种子帧固定。若模型真做声到构音反演则必下降，接近 0 表示只在外推视觉动力学。4 种注入下 gap 仅千分之几，gap 与增量比最高 5.5%，交叉注意力误差最低但 gap 不更大，且 gap 在训练早期大、后期小一个量级，延长 2.5 倍训练 teacher-forced 从 0.501 到 0.450 而 gap 停在 0.0022，报告为阴性结果。原因是 0.64 秒内声道运动平滑，种子帧已决定大部未来，音频非必要而仅可用。

### 计算、数据与解释上还有哪些硬边界？

计算约束具体而非附带。单卡有效批量 128 对 1024，总步数 26875 对 72000，Volta 无 bfloat16 而用 float16 加缩放，4096 token 网格强制激活检查点，学习率与动量为小批量手调。token 随片段长与分辨率 2 次增长，口吃需 2 到 3 秒证据而预训练窗仅 640 毫秒，联合时空注意力在所需速率下需数倍窗口，须配内存高效注意力或分层状态空间，本文未做。

数据约束同样硬。舌切除仅 3 人且 spk3 术前最小格，口吃 7 人且 2 人占约半数事件，儿童库规格待定，典型同域舌切除对照缺失。刺激文本跨库重叠使帧级跨人不可比，15 帧每秒过稀被弃导致每人刺激子集不同，主结论才依赖片段级。t-SNE 与注意力权重是描述性读出，空间注意力指向代偿区的说法是展望而非验证。

解释需分级。直接报告用报告显示，机制归因用支持，跨域泛化与临床效用用可能待验证。相关性不是因果，未测误判率、延迟与成本时不承诺改善。总体趋势不等于每组每步成立，例如自适应在细粒度音素帮助大而在粗二分类帮助小，不能推广为自适应无用或万能。

下表汇总 collapse 监控与算力，说明无坍缩结论的证据与成本边界。

| 监控量 | 稳定值 | 损失平台 | 硬件 |
| --- | --- | --- | --- |
| 特征标准差 | 约 1.42 | L1 约 0.40 | 单张 V100 32 吉字节 |
| 有效秩 | 约 40 每 1024 | 后期升到 68 | 有效批量 128 |
| 平均绝对余弦 | 约 0.44 到 0.63 | 初值 0.995 到最低 0.390 | float16 加缩放 |

上表代价是监控只证无坍缩不证最优，下游 κ 在预训练完成前饱和，继续跑到终点同域从 0.46 到 0.51、跨域从 0.25 到 0.35，提升存在但边际递减。未胜出项是 CTC 与焦点损失、声条件 rollout、口吃三分型，这些阴性结果与正结果同等重要，避免把单指标胜利误读为全能。

### 要复现先做什么，需要哪些超参与信息条件？

先复现预处理再跑探针。强度按视频分位数 1 到 99 截断再 z 分数，用训练集单灰度均值方差，不用自然图像统计。时间用基于索引线性插值到 50 帧每秒均匀网格，非整数比不能丢帧。空间双 3 次缩放到 16 像素倍数，主配置 256 像素。灰度复制 3 通道复用块嵌入卷积。增强只做小平移、轻强度抖动、高斯噪声与时间裁剪，禁翻转、大旋转与颜色抖动。

再核对划分与缓存。音素训练 14 人 384 条、验证 sub030、测试 sub043 与 LSS 684 条，说话人严格不交。片段特征缓存后四头共享，元音、辅音、方式、部位独立训练。口吃按 7 折留一说话人，负样本时长从正样本池抽取但受流畅区长度约束，实际负仍偏短，32 帧均匀采样跨片段归一化时长。评测固定 3 种子，帧级报告均值正负标准差，片段级主表种子 0，口吃报告池化与折均值及 κ。

关键超参保留原文值。ViT-L、预测器 12 层 384 维 12 头、管状 2、掩码 8 块 0.15 加 2 块 0.70、时间 1.0、AdamW 0.9 与 0.999、热身 5 轮、峰值 5×10 负 4 到终值 10 负 5、衰减 0.04、动量 0.998 到 1.0、微批量 32 累积 4、125 步每轮 215 轮。资源状态方面，本次未发现来源绑定且完成验证的资源，不得声称代码模型数据已公开，复现应按论文附录表 10 与表 11 自建流程，权重下载与系统可运行状态以官方发布为准。

常见误解是把冻结等同于确定性。冻结只说参数不更新，不保证输出确定，数据增强、采样与探针初始化仍引入方差。另一误解是把无训练等同于无计算，本文恰有约 10 GPU 天的继续预训练与大量缓存特征计算，复现预算须包含这部分。

### 何时值得尝试这条路线，还需补哪项验证？

当任务是无标注声道视频加小标注探针、且测试涉跨人跨扫描仪时，这条路线值得尝试。先用冻结通用视频编码器建基线，再花小算力继续潜预测到声道域，最后才考虑微调。若目标是细粒度跨域音素，预期收益大。若目标是粗二分类口吃检出，通用先验已给大部精度，适配仅小幅提升，应把预算投向长窗探针与可变长固定帧率采样。若目标是舌切除纵向读出，应按音素类跟踪 F1 与 κ，并同步比较音频-only 与核磁基分类器，以确定构音成像超出声学的增量。

还需补三项验证。一是全规模重跑与多种子预训练，确认小批量结论在 1024 批量与 70,000 步下成立。二是典型同域舌切除对照与多术后时间点纵向库，分离病理、手术与采集位移，并检验代偿策略的个体差异。三是长序列高效探针与使声学必要的任务设计，如更长预测、残差预测或判别性构音项，否则声条件 rollout 仍会被视频外推架空。

收束判断是互联网视频先验是构音科学的实用起点，但不是免验证的通用解。冻结域自适应编码器可作可复用测量工具，前提是严格说话人不泄漏、机会校正指标与个体级混淆分析同行，任何合并平均的胜利都须回到分人分层的反例中检验。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.09757)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-11/)
