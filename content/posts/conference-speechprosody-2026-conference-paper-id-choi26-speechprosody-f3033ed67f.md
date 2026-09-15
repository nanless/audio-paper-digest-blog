---
title: "Speech Prosody in Schizophrenia Spectrum Disorders: Perceptual Evaluation and Machine Classification"
date: 2026-09-14
draft: false
description: "该研究用自适应低通滤波去掉可懂语义后，比较 33 名评分者对 25 人语音的韵律判断与 108 个声学时序特征训练的逻辑回归分类器在 251 人数据上的表现，两者准确率均为 80.0%，代价是灵敏度中等且韵律标记与症状总分无显著关联。"
tags: ["语音生物标志物", "人类参与评测", "韵律", "语音", "病理语音评估"]
categories: ["speechprosody-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:speechprosody:2026:conference-paper-id:choi26_speechprosody"
paper_digest_source_kind: conference
paper_digest_conference_id: "speechprosody-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "22ce73253b5daf8d5dface1ce8c01411cc983354d5c447e8694c30d79f602ee7"
paper_digest_api_reader_plan_sha256: "16f1cd8e25c71728d54f9911cfcc84a409add49cade5aab35e52bffbf4d2520d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2c27a57972c863cbc9f0d1a2f22a00501756d557516541b9240eef8c1b1cd3fd"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "dc71200789dc137c034709f72e1d076ab3061ccbad94c78a021564d34c598963"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5d5bc02014ab0806fe8dbf01466ace5d498652f3c31b181760ef7125a9751f52"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c341ee6cee16fb916bcf30acfdfc390567f36266df3952e6add8dbc7162c9c34"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"application","id":"application.speech-biomarker","label":"语音生物标志物"},{"facet":"method","id":"method.human-evaluation","label":"人类参与评测"},{"facet":"scientific_topic","id":"scientific_topic.prosody","label":"韵律"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.pathological-speech","label":"病理语音评估"}]
paper_digest_primary_task: "病理语音评估"
paper_digest_primary_method: "人类参与评测"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 只留韵律能听出精神分裂症谱系障碍吗：人类感知与机器分类的平行验证

> 英文题目：*Speech Prosody in Schizophrenia Spectrum Disorders: Perceptual Evaluation and Machine Classification*

> 会议身份：`conference:speechprosody:2026:conference-paper-id:choi26_speechprosody`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.html) · [官方 PDF](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf)

标签：#语音生物标志物 #人类参与评测 #韵律 #语音 #病理语音评估

评分：**5.5/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究

## 👥 作者与机构

- Anna Seo Gyeong Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Ryan Partlan：机构信息未能从会议 PDF 纯文本可靠映射
- Alex Richardson：机构信息未能从会议 PDF 纯文本可靠映射
- Sandy Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Nourhan Zalat：机构信息未能从会议 PDF 纯文本可靠映射
- Katharina Brosch：机构信息未能从会议 PDF 纯文本可靠映射
- Amir Nikzad：机构信息未能从会议 PDF 纯文本可靠映射
- Simran Bhola：机构信息未能从会议 PDF 纯文本可靠映射
- Khatiya Moon：机构信息未能从会议 PDF 纯文本可靠映射
- Sunghye Cho：机构信息未能从会议 PDF 纯文本可靠映射
- Sunny X. Tang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文输入为自发临床访谈的滤波语音，输出为精神分裂症谱系障碍与健康对照的二分类判断，难点在于去除可懂语义后仅靠音高轮廓与节奏等超音段线索仍需可辨。方法链分三步：先以基于基频估计的自适应低通滤波去除可懂度并保留韵律轮廓与节奏，再组织33名不同资历评分者对每人首尾15秒片段做4级似然判断并按均值聚合，其次在251人样本上抽取声学与停顿特征训练逻辑回归等分类器并做被试级划分评测。相对混用语义与韵律的完整语音分类，该机制差异在于强制信息瓶颈在韵律层，从而同时检验人类感知显著性与机器可计算性，为语言无关筛查提供依据。在人类感知与机器分类对比任务下，人类聚合评分的AUC为0.820，高于Logistic Regression的AUC 0.805。人机均达约八成准确率且临床经验与评分准确率无显著关联，提示可辨性更多依赖一般社会感知而非专科训练。该结论适用边界受限于英语单中心采集的短片段滤波语音，尚未验证跨语言筛查与重症程度追踪的外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要保留什么？

这篇解读的输入是 2026 年 Speech Prosody 会议论文，作者来自康奈尔信息科学、诺斯韦尔精神科、宾大语言数据联盟和语言学系。研究对象是精神分裂症谱系障碍的语音，目标是检验只保留韵律、去掉可懂语义后，人和机器能否区分患者与健康对照。

目标读者是刚进入语音或临床语音方向的研究生。解读要保留可复述的方法链条：谁的语音、如何滤波、人类如何评分、机器用什么特征和划分、指标如何聚合。凡是涉及准确率、样本量、滤波公式和统计检验的数字，都以论文原文为准，不引入外部经验值。

输出按学习依赖组织。先讲任务为什么不是直接做语音识别，再讲相关路线如何定位本研究，接着沿一个语音样本走完滤波到判断的全程，然后展开人类实验与机器实验的条件与结果，最后讲复现要点与边界。教学举例会明确标为例子，不作为论文证据。

### 已有路线研究了什么，本研究卡在哪个缺口？

精神分裂症谱系障碍的言语异常长期被临床记录，既有内容层面的思维紊乱、切题偏离和连贯性下降，也有超音段层面的基频变化缩小、语速节奏异常和单调性。已有荟萃分析报告跨语言的嗓音模式标记，计算语音学工作把基频变异降低与平淡情感评分联系起来，谐噪比等嗓音质量指标也被考察为阴性症状的客观标记。

方法路线上，低通滤波曾被用于分离韵律与音素信息，自适应方法按说话人基频动态调整截止频率，以保留音高轮廓而去除识别音素所需的共振峰结构。临床评估常规记录平淡或不稳情感、单调或生硬言语，但系统研究听者如何感知患者韵律异常、临床经验是否提高检出率的工作仍然有限。以往情感韵律研究多关注患者感知他人情绪的能力，而非听者感知患者韵律异常的能力。

自动分析路线上，已有机器学习用完整语音区分患者与对照并取得可观准确率，但完整语音同时包含韵律与语义，专门只用滤波后韵律做临床分类的工作很少。作者前期工作还提醒跨工具特征提取一致性是临床部署的隐患。因此本研究的缺口很具体：在同一批滤波处理下平行比较人类感知与机器分类，看韵律单独能提供多少可判别信息。

### 要回答的三个问题是什么，为什么要滤掉语义？

论文提出 3 个具体问题。第一，人类评分者仅凭韵律信息能否区分患者与健康对照，临床专长是否影响这种能力。第二，用声学与时序特征训练的机器学习分类器能否准确区分两组。第三，人类感知与自动分类利用韵律信息的方式有何异同。

滤掉语义是关键操作。如果保留词句，判断可能依赖思维紊乱或语义连贯性，而非语调节奏本身。只有让语音变得不可懂但保留音高轮廓与节奏，才能分离出韵律的独立贡献。这既有理论意义，即检验韵律异常是否足够显著到可被独立感知，也有实践意义，即韵律标记若成立则可能成为语言依赖较小的筛查线索。

举例说明：比如同样一句问候，语义相同但一个人音高几乎平直、停顿分布异常，另一个人有自然起伏。滤波后听者听不清字词，只能听到高低快慢与停顿，这正是实验要保留的对比维度。

### 从一段录音到一个判断，全景如何走通？

先沿一个样本走完全程。输入是 1 名被试在开放式言语任务中产生的自然式自发语音，附带简明精神病评定量表与阴性症状量表评分。研究者取该录音开头与结尾各 15 秒并排除静音段，对每段估计基频并计算自适应截止频率，再用 5 阶巴特沃斯低通滤波器滤波并归一化到最大幅度的 80%，得到两段只剩韵律的刺激。

人类路径把这两段一起交给评分者，评分者只依据节奏、语调和言语模式在四点量表上给出一个分数，1 表示非常不像患者，4 表示非常像患者。机器路径把同样滤波后的音频按 16 千赫采样、60 毫秒帧长和 10 毫秒帧移提取特征，在被试层面平均聚合后做分类。两条路径用同样的滤波处理对齐输入，这是平行比较的前提。

数据规模上，人类感知实验从合并数据集中随机抽取 25 人，其中 15 名患者和 10 名健康对照，按简明精神病评定量表总分分为轻中重 3 层。机器分类使用全部可用被试 251 人，其中 162 名健康对照和 89 名患者。人类实验的输出是每名被试的平均评分与阈值化类别，机器实验的输出是测试集上的准确率、F1 与 ROC 曲线下面积。

### 自适应滤波如何保留韵律而去掉可懂度？

刺激制备遵循近期方言分类工作的方法。每段先用 Librosa 在 50 到 400 赫兹范围内估计基频，再按公式计算截止频率并限制在 200 到 500 赫兹之间，目的是保留基频及其低次谐波而去除共振峰结构。论文报告使用 5 阶巴特沃斯滤波器，随后做幅度归一化。帧级处理参数在机器特征提取处明确为 16 千赫采样、60 毫秒帧、10 毫秒跳帧，以与人类刺激处理一致。

**自适应低通滤波 × 韵律信息：** 自适应低通滤波负责按每段语音估计的基频动态设定截止频率并滤除共振峰结构，韵律信息负责保留基频轮廓、强度起伏和节奏停顿，两者搭配的理由是只有去掉音素可懂度才能检验超音段本身是否携带诊断信息，组合后得到人类听得见节奏语调但听不懂词句的刺激。

白话解释：基频是声带振动快慢决定的音高基础，共振峰是声道形状决定的音素线索。自适应是指截止频率不固定，而是随说话人音高调整，音高高则截止稍高，音高低则截止稍低，从而在不同嗓音间保持可比的保留范围。归一化则是把响度差异压平，避免评分者或模型把单纯音量大小当成诊断线索。

### 人类评分与机器特征各自记录什么？

人类实验有 33 名评分者，对被试诊断设盲。评分者临床经验分为 5 个等级，从最少经验 7 人到 10 年以上丰富经验 2 人不等，同时报告韵律语音学研究经验。指导语明确告知音频已去除语义但保留韵律，要求只依据节奏、语调和言语模式判断。每名被试对应首尾两段滤波音频，评分者听完给出一个 1 到 4 的整体分，刺激随机呈现并允许重播。

机器特征分两路。声学路用 OpenSMILE 的 eGeMAPS 配置得到 88 个参数，包括基频统计、强度、频谱、嗓音质量和谐振峰倒谱系数。时序路单独提取停顿统计与语速等 107 个时间参数。两路合计 194 个特征，在被试层面按录音平均聚合，剔除超过一半为零或缺失的特征后剩 108 个，其中时序 20 个、声学 88 个，剩余缺失用中位数填补。

**eGeMAPS 声学特征 × 时序特征：** eGeMAPS 声学特征负责刻画基频统计、强度、频谱、嗓音质量和谐振峰倒谱等音色维度，时序特征负责刻画停顿统计和语速等时间组织维度，两者搭配的原因是韵律既包括音高音质如何变化也包括何时停顿加速，组合后形成分布在多维度的韵律表征而非单一单调性指标。

这里的术语先白话化：eGeMAPS 是一套为副语言和临床语音常用的最小化声学参数集，英文名为 extended Geneva Minimalistic Acoustic Parameter Set；谐噪比衡量周期性声带振动相对噪声的比例，抖动与闪烁分别衡量基频周期与幅度的微扰。时序特征则记录说了多久、停了多久、停了几次等组织信息。

### 本研究训练了什么，没有训练什么？

本研究没有训练神经网络，也没有微调语音大模型，因此不存在梯度路径、冻结层数或学习率调度需要交代的问题。实际计算是传统分类器训练与特征约简比较。论文对每种特征约简策略评估 4 种分类器：带 L2 正则的逻辑回归、100 棵树的随机森林、100 棵树学习率为 0.1 的梯度提升、带径向基核的支持向量机。特征约简包括不约简基线、方差阈值、相关性剔除、F 统计单变量选前 50、互信息选前 50、以随机森林做递归特征消除选前 50、随机森林重要性排序选前 50，以及主成分分析取 50 个成分。

划分采用被试层面分组随机划分，训练测试比为 70 比 30，确保同一人的多任务录音只出现在训练或测试一侧。特征标准化只在训练集上拟合再作用于测试集，随机种子固定为 42 以保证可重复。评估指标为准确率、F1 与 ROC 曲线下面积。论文未报告硬件耗时与推理延迟，这是复现时需要补记的缺项，不能从模型名称推定其运行成本。

**被试层面分组划分 × 标准化：** 被试层面分组划分负责把同一人的多段录音整体放入训练集或测试集以防止信息泄漏，标准化负责只在训练集上估计均值方差再作用于测试集，两者搭配是为了在保持说话人独立的同时让线性模型系数可比，组合意义是测得的准确率反映对新人的泛化而非对同一人另一段录音的记忆。

需要纠正一个常见误解：没有神经网络训练不等于确定性求解。随机森林与分组划分仍涉随机性，固定种子只是让本次划分可重放，换种子或换划分比例结果会波动。论文只报告单次 70 比 30 划分下的测试性能，未报告交叉验证分布，这是解释 80.0% 时必须保留的不确定性。

### 数据、分组与指标口径如何对齐？

数据来自内部两个采集协议不同的数据集，分别称为 ACES 与 Remora。所有被试完成开放式言语任务以诱发自然式自发语音，症状严重度用简明精神病评定量表评估，阴性症状用量表评估。人类实验 25 人的年龄、性别、种族与受教育年限等特征在论文表 1 中列出，教育年限组间差异显著而年龄差异不显著，但该表在本次结构化证据中因表头缺失被判为不可直接选择，因此解读中不转写该表数值，只保留分组逻辑。

人类聚合口径是先对 33 名评分者取平均得到每名被试的平均分，再以 2.5 为阈值 2 分类，该阈值按 F1 最大化确定。个体评分者准确率、评分者间平均两两斯皮尔曼相关、不同经验组的单因素方差分析与斯皮尔曼相关共同刻画感知表现。机器口径是在被试层面划分后的保留测试集上计算准确率、F1 与 ROC 曲线下面积，准确率方向是越高越好，ROC 曲线下面积同样越高越好。

公平条件值得注意。人类与机器共享同样的低通滤波处理，但样本量与评估对象不同：人类只评 25 人，机器测 251 人划分后的测试集，两者的 80.0% 分母不同，不能直接当成同一样本上的胜负。人类阈值经 F1 优化，机器阈值是分类器默认决策边界，两者在阈值选择上也不完全对等。

### 人类仅凭韵律能区分到什么程度？

下面这张表回答的核心问题是：在阈值 2.5 下，33 人平均分对 25 名被试的分类表现如何，指标方向均为越高越好。表前需要明确公平条件：所有评分者对诊断设盲，只听滤波后首尾两段音频，聚合后再阈值化，因此表中数字反映的是群体平均判断而非单个专家水平。

| 评价对象 | 准确率 | 灵敏度 | 特异度 | 综合判别 |
| --- | --- | --- | --- | --- |
| 33 名评分者平均对 25 人 | 80.0% 准确率，20/25 正确 | 73.3% 灵敏度，11/15 患者正确 | 90.0% 特异度，9/10 对照正确 | 阳性预测值 91.7%，阴性预测值 69.2%，ROC 曲线下面积 0.820，95% 置信区间 0.657 至 0.984 |

表后解释主要收益与代价。收益是特异度高达 90.0%，即韵律异常一旦被判定为患者则很少误伤健康人，阳性预测值 91.7% 支持这一点。代价是灵敏度只有 73.3%，有 4 名患者被漏判，阴性预测值 69.2% 说明判为健康时仍有相当不确定性。ROC 曲线下面积 0.820 表示整体判别良好，但置信区间下限接近 0.657，反映 25 人小样本的不确定性。未胜出项是单个评分者平均准确率仅 66.2%，中位数 68.0%，范围 44.0% 到 80.0%，说明平均化带来了明显增益。

组间差异上，患者平均分 2.79 分高于对照 2.03 分，差异 large，报告效应量较大。个体层面 2 名患者几乎被一致判为患者，平均分 3.84 与 3.74 且全部评 3 或 4 分，1 名对照被一致判为对照，平均分 1.58 且无人给 4 分。但也有 4 名患者被一致误判为对照，其中 3 名为中度严重度，1 名对照被误判为患者，平均分 3.23，提示韵律标记并非与总分单调对应。

**特异度 × 灵敏度：** 特异度负责衡量健康对照被正确判为非患者的比例，灵敏度负责衡量患者被正确判为患者的比例，两者搭配的原因是只看总准确率会掩盖漏检与误报的不对称，组合后才能判断韵律异常出现时很特异但并非每位患者都表现明显。

### 评分者一致性与临床经验是否带来增益？

这张表要回答的比较问题是：平均判断可靠吗，个体差异与经验差异有多大。公平条件是同一组 25 套刺激、同一四点量表，指标方向是组间差异越大、相关越高则一致性越好，而经验与准确率的相关接近零则表示无增益。

| 比较维度 | 组别或对象 | 均值与离散 | 统计量 | 显著性与效应 |
| --- | --- | --- | --- | --- |
| 患者与对照平均分 | 患者组对比健康对照组 | 患者 2.79 分标准差 0.61，对照 2.03 分标准差 0.56 | t 值为 3.15，自由度 23，效应量 d 为 1.31 | p 为 0.0045，差异显著 |
| 评分者间一致性 | 两两评分者 | 平均斯皮尔曼相关 0.39，中位数 0.43，范围负 0.43 至 0.80 | 中等一致 | 感知策略存在较大个体差异 |

表后解释需强调反例。临床经验 5 组间方差分析不显著，F 值为 1.39，p 为 0.263，韵律研究经验 4 组间也不显著，F 值为 0.11，p 为 0.957。斯皮尔曼相关显示临床经验与准确率弱负相关，r 为负 0.17，p 为 0.369，研究经验几乎为零相关。丰富经验组平均 60.0% 反而低于部分经验组 71.4%，且无单调关系。论文的解释是韵律显著到未经训练者也能察觉，或临床训练更重内容而非超音段，这属于有限解释而非因果结论。严重度分层也不显著，F 为 1.21，p 为 0.33，轻度平均 3.02 反而数值上高于中度 2.67 与重度 2.51，总分与评分相关接近零，支持特质性而非状态依赖的推测，但待验证。

### 机器用哪些特征与模型能复现人类水平？

本节的比较问题是：在同样滤波输入下，哪种分类器与特征约简组合在保留测试集上最好，指标方向是准确率、F1 与 ROC 曲线下面积越高越好，公平条件是同一被试层面划分与标准化流程。下表直接选用原文结果表，保留可运行的基线与约简策略，不删除不利基线。

| Model Acc. F1 | AUC | N Feat. |
| --- | --- | --- |
| LR (All) 80.00 69.57 | 80.53 | 108 |
| LR (PCA-50) 78.57 68.09 | 78.12 | 50 |
| LR (Corr) 77.14 66.67 | 80.36 | 94 |
| LR (Uni-50) 75.71 60.47 | 75.37 | 50 |
| RF (PCA-50) 74.29 62.50 | 72.35 | 50 |

表后解释主要收益与代价。最佳为逻辑回归用全部 108 特征，准确率 80.00%，F1 为 69.57，ROC 曲线下面积为 80.53，特征数 108。该配置打败了相关性剔除后的 94 特征版本与主成分 50 成分版本，说明判别信息分散在多维，压缩或剔除反而损失互补信息。逻辑回归平均 75.7% 优于支持向量机 72.9%、随机森林 70.7% 与梯度提升 70.4%，单变量或互信息选前 50 普遍弱于变换压缩类方法。未胜出项同样重要：随机森林与支持向量机在主成分 50 下均为 74.29%，梯度提升同条件下 72.86%，说明非线性集成并未带来额外增益。需要保留的限制是该 80.0% 来自单次划分的 251 人数据的测试子集，与人类 25 人上的 80.0% 分母不同，只能说数值可比，不能说同题对决获胜。

**相关性特征剔除 × 主成分分析：** 相关性特征剔除负责删掉相关系数高于 0.95 的近冗余特征而保留原始物理含义，主成分分析负责把 108 维压缩为 50 个正交成分而保留方差结构，两者搭配是为了检验判别信息是集中在少数特征还是分散在多维，组合结果支持信息分散分布因而保留全量特征的线性模型表现最好。

### 哪些边界尚未验证，不能推广到哪里？

首先是样本与刺激边界。人类实验仅 25 人，其中重度仅 3 人，检验严重度与韵律关系的功效不足。刺激为首尾各 15 秒的滤波片段，不能完全代表 extended 自发对话中的韵律变化，滤波保留音高轮廓但去掉了其他可能有诊断价值的声学信息。

其次是泛化边界。机器实验虽有 251 人，但为内部 2 数据集混合，未做跨语言验证，也未检验对其他精神疾病的特异性。论文讨论中提出语言无关筛查的潜力，这属于待验证推测，不能当成已证结论。中等灵敏度意味着单独用韵律不足以诊断，只能作为综合评估的补充。

第三是资源与可解释性缺项。原文未报告训练耗时、推理延迟与部署成本，也未用可解释人工智能定位是哪些韵律参数驱动分类。评分者池 33 人对经验效应的检验同样功效有限。把相关性当因果、把总体趋势当每组每步都成立，都是需要避免的误读。误判案例提醒健康人偶发类似韵律轮廓，说话风格与录制时情感状态都可能是混杂因素。

### 要复现需要先做什么，关键参数如何保留？

复现人类部分先做刺激制备。用 Librosa 在 50 到 400 赫兹估计基频，按截止等于 420.2 乘以 1 减 e 的负 0.0124 乘基频次方计算并截断到 200 到 500 赫兹，用 5 阶巴特沃斯低通滤波并归一化到最大幅度的 80%。每名被试取首尾各 15 秒去静音段，随机呈现并允许重播，用 1 到 4 量表只评节奏语调。聚合时先跨评分者平均再以 2.5 阈值分类，该阈值按 F1 最大化得到，复现时应报告阈值敏感性而非只报最优点。

复现机器部分先对齐音频处理为 16 千赫、60 毫秒帧、10 毫秒跳帧，再用 OpenSMILE 提取 eGeMAPS 与时序特征并在被试层面平均。剔除超半数零或缺失特征后剩 108 个，中位数填补。划分用分组随机划分 70 比 30 并固定种子 42，标准化只在训练集拟合。先跑逻辑回归全特征基线，再跑相关性剔除与主成分 50 等约简分支，报告准确率、F1 与 ROC 曲线下面积三项。

资源状态是正文开源声明的唯一依据。本次未发现来源绑定且完成超文本传输安全协议状态验证的资源，因此不得声称代码模型或数据已公开。复现前应假设需自行实现滤波与特征管线，并补记运行环境与耗时。还需补的验证包括换种子多划分的稳定性、跨数据集测试，以及用可解释方法检查重要特征是否集中在基频变异与停顿组织上。

### 何时值得尝试韵律线索，何时不应单独依赖？

当任务是多语言或语义不可比场景下的初步筛查或纵向监测，且已有开放式自发语音可做同样滤波处理时，值得尝试韵律线索。人类与机器在本研究中均达约 80% 准确率，说明超音段本身携带实质信息，且感知不依赖长期临床训练，这对日常社交功能受损的解释提供了可感知的链条。

当任务是确诊、鉴别其他精神疾病或小样本高风险决策时，不应单独依赖韵律。灵敏度中等意味着会漏掉部分患者，健康人也可能因说话风格被误判，且韵律评分与简明精神病评定量表总分、阴性症状总分均无显著相关，不能当成严重度标尺。

给研究生的行动建议是：先复现滤波与被试层面划分两处最易泄漏的环节，再扩展到症状维度与跨语言检验，最后才谈部署。论文特有的误解是把两个 80.0% 当成同一考试的并列第一，实际上两者样本量、分母与阈值选择都不同，可比的是信息充分性而非模型优劣。未来需要检验韵律是否随症状变化、跨语言是否稳定、对谱系之外疾病是否特异，以及语用训练能否改善韵律并传导到社会职业功能，这些在原文中均为未验证方向。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-6.png)

区域 6 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/beb3e813d07d/figure-7.png)

区域 7 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf#page=3)

另有 34 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/speechprosody_2026/choi26_speechprosody.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 speechprosody-2026 论文汇总](/posts/conference-speechprosody-2026/)
