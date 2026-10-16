---
title: "ONCship: A Large-Scale Underwater Acoustic Corpus for Ship Recognition"
date: 2026-10-16
draft: false
tags: [音频分类, 数据集, 数据集构建, 自监督学习]
categories: [论文速递]
description: "论文从 20000 小时原始水声存档中整理出 4521 小时带船只轨迹关联的 ONCship 语料，用同一模型的三种预训练来源对比和两类下游任务检验其作用，联合预训练在 DeepShip 上达到 62.45% 准确率而单船身份识别 Top-1 超过 53%。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.19722"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "ONCship：用 4521 小时水下录音研究船只类型与单船身份识别"
paper_digest_original_title: "ONCship: A Large-Scale Underwater Acoustic Corpus for Ship Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.19722v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.19722v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.19722v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文从 20000 小时原始水声存档中整理出 4521 小时带船只轨迹关联的 ONCship 语料，用同一模型的三种预训练来源对比和两类下游任务检验其作用，联合预训练在 DeepShip 上达到 62.45% 准确率而单船身份识别 Top-1 超过 53%。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhe Cao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jichao Zhang"},{"affiliations":["organization=School of Marine Science and Technology, Northwestern Polytechnical University, city=Xi’an, postcode=710072, country=China","organization=Research and Development Institute of Northwestern Polytechnical University in Shenzhen, city=Shenzhen, postcode=518063, country=China"],"name":"Xiao-Lei Zhang"}]
paper_digest_abstract_sha256: "ea54b43f2ca7025410eee38cdec265fc8750d906905d64d7771acba38e2c5e53"
paper_digest_sidecars: {"citation.bib":{"sha256":"dad6acd7bb54993e810cd8c4a5fc0a34bd4858b8d214a0aabbc95f64b113665a","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19722/citation.bib"},"citation.json":{"sha256":"477f12f89d60ac37b6856408f50189db21db056df9166bbfa2ecb4d85392d019","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19722/citation.json"},"citation.ris":{"sha256":"a3bbcf37389bac3ea25599f62e8d4602a8642e160b4c8591108d1cbef426f542","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19722/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"82465a17b7294d32b5d890905b2e63364cf5d290d98fd64315d36394492675e8","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19722/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b3c365d17e73a307daf01ec64de3f2d3909c3deaaa7543ed8b79a170b7cc65a6"
paper_digest_api_reader_plan_sha256: "fbf2e8e5960bc5bc0ad0c865bcfa686ed397a73b8ce6d200f91c998c3e2489d8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a17a95a0c331fd6c510fdf43ecf4e74c086606d34ded58ab85d5dac9fddede59"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "08974f9765ee44ce90f0cb1c2c89e4dc0757d3b4ea2855f384aaf4cadc76ac00"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "81775320a67a0539fba9f343ce369c0c690b0353d72f40863eb2176dffa06d5d"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b0b6fc0fdb7cd39dd6779050d60508906cfadac7b5835c9045f12f20d02d1e17"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 ONCship：用 4521 小时水下录音研究船只类型与单船身份识别

> 英文题目：*[ONCship: A Large-Scale Underwater Acoustic Corpus for Ship Recognition](https://arxiv.org/abs/2610.19722v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)；[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zhe Cao：机构信息未能在本次解析中与作者逐人可靠绑定
- Jichao Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiao-Lei Zhang：organization=School of Marine Science and Technology, Northwestern Polytechnical University, city=Xi’an, postcode=710072, country=China；organization=Research and Development Institute of Northwestern Polytechnical University in Shenzhen, city=Shenzhen, postcode=518063, country=China

## 📌 核心摘要

水下船舶识别以水听器记录为输入，输出船只类型或具体船只身份，难点在于传播衰减、环境噪声和多船混叠使同类声音差异大，而公开标注数据只有几十小时。ONCship 从加拿大海洋网络（Ocean Networks Canada，ONC）6 个站点的长期记录出发，用 AIS 轨迹做空间关联与时间分箱，筛选出单船、多船与无船片段并采样为固定时长音频，附带船型与海上移动业务标识码（Maritime Mobile Service Identity，MMSI）元数据。同一 EAT 编码器分别在通用音频、ONCship 及两者联合数据上预训练后冻结，再用逻辑回归做线性探测，以比较训练分布的作用；另一路把 ONCship 作为辅助标注数据与 DeepShip 联合微调，并按水听器是否相同划分加入条件；第三路把 50 个 MMSI 各自跨航次的片段作为 50 类目标做个体分类。在 DeepShip 上，联合预训练的冻结特征经线性探测达到 62.45% 准确率，高于仅用通用音频预训练的 61.75%；BEATs 在 DeepShip 上微调并加入本站 ONCship 数据后准确率为 69.41%，高于仅用 DeepShip 的 68.11%。MMSI 级分类 Top-1 准确率超过 53%，Top-5 接近 69%，说明跨时间相遇的个体声纹具有可分性，但结论限于 50 个身份、100 小时子集与站内划分条件。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://www.openstreetmap.org/copyright> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 水下听船要解决什么输入输出问题

这篇论文面对的输入是长期布放在海里的水听器录下的连续声音波形，目标是从声音判断水面船只的属性。最常见的目标是船只类型分类，例如判断一段录音来自拖船、货船、客船还是油轮，输出是 1 个类别标签。更细的目标是单船身份识别，也就是判断两段相隔很远时间的录音是否来自同一条已知船只，这时输出是船只的海上移动业务标识，即 MMSI 编号。

论文强调，水下声音受到传播衰减、环境噪声和多船混叠的影响，同一条船在不同航次、不同距离下听起来会有变化，因此训练数据必须覆盖这种变化，评价时也要把时间相邻的片段分开，否则会高估泛化能力。对于刚进入音频领域的研究生，可以把任务想象成先有连续录音和零散的船只位置报告，需要先对齐两者得到带标签的片段，再训练模型完成分类。

下面 4 张频谱图是论文给出的直观例子，每张是一段录音的对数梅尔频谱，横轴是时间，纵轴是频率，颜色亮度表示该时频位置的能量高低。初学者可以先感受低频能量集中和横向纹理的差异，但不要把单张图的亮带当作分类规则，因为传播条件和背景噪声都会改变外观。

> **看图路径：** 1. 先看四个面板的标题，确认是拖船、货船、客船和拖带四种最常见船型各一段录音；2. 再看横轴时间 0 到 10 秒、纵轴频率 0 到 4096 赫兹以上，比较低频亮带的位置和连续横纹的多少；3. 注意这只是单段示例，不能把某一条亮纹直接当作该船型的判别标准

[![原论文 Figure 1：Example log-mel spectrograms for the four most frequent vessel types in ONCship: Tug, Cargo,…](https://arxiv.org/html/2610.19722v1/fig1_spectrograms.png)](https://arxiv.org/html/2610.19722v1/fig1_spectrograms.png)

*论文图 1。原论文 Figure 1:：“Example log-mel spectrograms for the four most frequent vessel types in ONCship: Tug, Cargo, Passenger, and Towing. Each panel shows one recording.”。*

4 张图分别对应拖船、货船、客船和拖带船，每张只是一次录音的例子。论文用它们说明 ONCship 中主要船型的信号都集中在较低频率，但具体纹理仍有差别。真正的结论要靠后面受控划分下的统计指标，而不是靠肉眼比较这 4 张图。

### 已有数据集和路线卡在哪里

在 ONCship 之前，常用的公开基准规模都很小。ShipsEar 约 2.8 小时，采集自西班牙维戈港附近，包含 11 种船型；DeepShip 约 47.1 小时，由加拿大海洋观测网络 ONC 在 2016 到 2018 年的录音整理而来，分为货船、客船、油轮和拖船 4 类；千岛湖的 QiandaoEar22 约 31.4 小时，Oceanship 约 121.2 小时，巴西桑托斯盆地的 IARA 约 129.6 小时。这些数据适合做小规模监督分类，但难以支撑大规模表示学习。同期也出现了更大的 ONC 衍生语料，例如 UniqueShip 包含约 3437 小时音频和 4218 条不同船只，并指出如果同一条船同时出现在训练和测试中，船型分类的泛化估计会被抬高。

方法路线上，早期系统用 LOFAR 线谱、DEMON 包络谱和梅尔倒谱等手工特征加传统分类器，之后是卷积网络直接学习时频图模式，再到 Transformer 建模序列关系。模型容量变大后，有限且不够多样的标注录音更容易导致过拟合，单纯加深网络不能替代采集条件的多样性。另一条路线是自监督预训练，先在大量无标签音频上学习通用表示，再用少量标签适配。

已有工作包括掩蔽词元学习和在 ONC 录音上的对比学习，但它们用的数据分布、模型和评价协议不同，难以直接回答领域内大规模水声数据相对通用音频数据能带来多少增益。论文因此把问题收敛为 3 个可比的问题：预训练数据源的影响、补充标注数据对船型分类的影响，以及跨时间相遇的单船可分性。

### 论文要回答的三个具体问题

论文明确提出 3 个互补问题。第一，预训练数据源如何影响表示质量和分类迁移，比较通用音频、领域内水声以及两者联合 3 种来源。第二，补充标注录音如何影响 DeepShip 船型分类，比较只用基准训练与加入来自相同或不同水听器的 ONCship 数据的效果，且补充数据的 MMSI 与 DeepShip 完全不重叠。第三，声音信息是否支持跨越时间分隔的已知船只身份识别，即 MMSI 级别分类，要求同一原始录音的所有片段只出现在一个数据划分中。3 个问题共用 ONCship，但协议不同：第一个冻结编码器只训练轻量分类器，第二个端到端微调整个模型，第 3 个在 50 个 MMSI、共 100 小时的子集上微调并比较损失函数。

理解这 3 个问题的边界很重要。第一个问题不涉及端到端微调的增益，第二个问题固定测试集为 DeepShip 测试集，第 3 个问题只针对已知船只的闭集识别，不涉及开放海域的未知船只检测。论文的所有结论都只在这些划分和指标下成立，不能直接推广到任意海域或任意布放。

### ONCship 从原始存档到可用语料的总流程

ONCship 的起点是约 20000 小时原始水听器录音，终点是 4521 小时整理后的语料。数据来自加拿大不列颠哥伦比亚沿岸和东北太平洋的 ONC 有线观测网，论文使用了 DIIP、FAE、LSBBL、BIIP、CRIP 和 USSLP 6 个水听器站点，时间跨度为 2016 年 3 月到 2026 年 5 月，所有录音统一重采样到 32 千赫。船只身份和类型来自岸基 AIS 接收站 IONA、CRSS 和 DISS 提供的 MMSI、船型和位置报文，其中 USSLP 没有下载对应的 AIS 记录，因此只作为无 AIS 关联的子集保留。

整理流程可以概括为采集、清洗插值、空间关联、时间标注、合并与采样五步。先收集水听器波形和 AIS 动态报文，再按 MMSI 组成单船轨迹并剔除静止轨迹，然后计算船只与水听器的距离并划分近距离和中距离区间，接着把观测期切成 30 秒时间窗并标为无船、单船或多船，最后合并相邻同类窗并随机采样固定时长片段。预训练时还排除了 DeepShip 使用过的 FAE 和 LSBBL 两个站点，剩下 3905 小时，避免预训练数据与下游基准来自完全相同的布放位置。最终语料包含带船型标注的单船、多船、无船以及无 AIS 的 USSLP 录音，并进一步切成 10 秒片段使用。

### 轨迹清洗与插值做了什么

AIS 报文在时间上是离散的，论文先在水听器周围 50 公里内按 MMSI 收集动态记录并组成轨迹。静止船只的轨迹会被丢弃，判断条件包括轨迹点少于两个、平均对地航速低于 1 节、80% 以上点低于 1 节，或起点到终点位移小于 0.3 公里。这一步的目的是去掉锚泊或漂移船只，避免把长时间停留的弱信号当作航行船只样本。

对保留的轨迹，当相邻两次观测间隔在 30 秒到 30 分钟之间时，每 30 秒插入一个中间点，纬度、经度和航速分别按时间线性插值。插值只补齐轨迹的时间密度，不改变端点观测值，之后用哈弗辛公式计算船只位置与水听器之间的地表距离。初学者可以这样复述：先按船只编号连点成线，去掉不动的线，再把稀疏的线按时间补密，最后算每条线离水听器多远。

**水听器录音 × 船舶自动识别系统 × 单船区间：** 水听器录音提供连续的声音波形，船舶自动识别系统提供同一时间附近船只的位置、航速和船型编号，单船区间是两者按时间和距离对齐后筛选出的只保留一条近距离船只轨迹的时间段，三者搭配才能把一段声音标上是哪类船、哪条船，为后续预训练和监督任务提供可用的样本。

### 距离关联与时间窗标注如何得到标签

距离关联分为两类区间。持续位于水听器 2 公里以内的连续段被视为近距离区间，还要满足时长不超过 1.5 小时、平均航速不低于 3 节且低于 3 节的点不超过 40%，才保留为船只存在；位于 2 到 50 公里之间的连续段记为中距离存在，不再做航速过滤。论文说明 2 公里是为了让船声相对背景更可分，传播路径短通常传输损失小，但这只是信噪比上的考虑，不是实测的声学探测边界，因为源强和传播条件也会影响接收级。

观测期被切成 30 秒窗。被保留近距离区间覆盖的窗进入近船集合，被中距离区间覆盖的窗标记为中距离；既无近船又无中距离的窗标为无船，有中距离但无近船的窗直接舍去，只有一条近船轨迹的窗标为单船并记录 MMSI、平均航速和船型，有多条近船轨迹的窗标为多船并记录数量。舍去中距离独占窗是为了减少较远航运噪声混入背景负样本。这里的无船、单船、多船都是按保留轨迹定义的，不是经人工核实的绝对无船。

**自监督预训练 × 高效音频 Transformer × 线性探测：** 自监督预训练指不使用船型标签、只从音频自身构造学习目标来训练表示，高效音频 Transformer 是论文统一使用的编码器结构，线性探测指冻结编码器只训练一个轻量分类器，三者组合的意义是固定模型和目标，只改变预训练数据，从而比较 AudioSet 与 ONCship 带来的表示差异。

### 片段合并采样与语料组成

状态相同且时间间隔不超过 30 秒的连续窗会被合并成段，单船段还要求 MMSI 相同。来自同一水听器不同设备和日期的段再按类别合并，无船和多船直接合并，单船按有无有效船型信息分开合并。合并条件是前一段结束时间等于后一段开始时间且除时间外元数据完全相同，然后累积每类总时长。

固定时长片段从合并后的时间线上随机采样。每类取 60 秒片段，起点在段内均匀采样且同一段内起点间隔至少 120 秒，单船段每个 MMSI 至多采样 1500 个片段，最后再细分为 10 秒片段。最终时长为带标签单船 3106.8 小时、无标签单船 38.4 小时、多船 929.1 小时、无船 7.4 小时，USSLP 单独计 439.3 小时，总计 4521 小时。船型上保留 22 个有效类型，拖船、货船、客船和拖带占多数，但各类型片段数相差可达几个数量级，呈明显的长尾分布。

**船只类型分类 × MMSI 单船身份分类 × 航次分离：** 船只类型分类是把不同船只归入拖船、货船等粗类别，MMSI 单船身份分类是把海上移动业务标识相同的录音归为同一条船，航次分离要求同一条船不同时间、间隔 6 小时以上的航段分开划分，三者搭配才能区分粗粒度泛化与细粒度身份记忆，避免用相邻片段的高相似性冒充跨时间识别能力。

### 评价用的模型与两种使用方式

论文不提出新结构，而是用已有音频模型检验数据的作用。高效音频 Transformer 即 EAT 是基于教师学生自举和句子帧目标的自监督框架，用于 3 组预训练对比；BEATs 是通过掩蔽离散词元预测迭代学习分词器和表示的框架，用于检验加入 ONCship 是否改善下游微调；ResNet18 和 ResNet50 作为卷积基线，分别对照已报道的对比学习结果和监督微调效果。

使用方式分为冻结与微调两种。冻结时把预训练编码器固定，对特征做时间平均池化得到片段级向量，再训练多项逻辑回归，评价的是表示本身；微调时在编码器后加线性分类头，端到端更新全部参数，评价的是数据加模型联合适应的效果。预训练音频都切成 10 秒片段，波形重采样到 16 千赫并转成 128 维对数梅尔频谱，窗长 25 毫秒、帧移 10 毫秒，掩蔽比例 0.8 且不做额外增强。理解冻结与微调的分工，就能明白为什么同一份 ONCship 在两类实验中扮演不同角色。

**冻结表示评价 × 端到端微调 × 水听器站点匹配：** 冻结表示评价只训练分类头来检验预训练特征本身的可分性，端到端微调允许编码器和分类头一起更新以适应目标基准，水听器站点匹配指补充训练数据是否来自与测试集相同的布放位置，三者搭配可以判断增益来自通用表示还是来自采集环境更接近。

### 指标各自在量什么

分类指标包括准确率、前 5 准确率、加权 F1、宏 F1 和宏召回。准确率是总体分对比例，前 5 准确率只在类别超过 5 个的 MMSI 任务中报告，指正确答案出现在得分前 5 即算对。类别不均衡时只看准确率会偏向大类，因此需要按类别平均的宏指标和按样本数加权的加权指标互补。冻结表示评价还用归一化互信息和检索 AUC，前者比较特征聚类与真实标签的一致性，后者把每个样本当查询，同类为正、异类为负，用余弦相似度计算排序的 ROC 曲线下面积再平均，衡量的是特征可分性而非分类器概率。

**归一化互信息 × 检索 AUC × 准确率：** 归一化互信息比较特征聚类结果与真实标签的一致程度，检索 AUC 用余弦相似度把同类样本排在异类之前的程度来衡量特征可分性，准确率则是在训练分类器后统计分对的比例，三者从无分类器、近邻排序到有分类器三个层面互补，尤其在类别不均衡时需要对照看。

### 数据构建与预训练的实际计算过程

构建过程的计算量主要在轨迹处理和音频采样。轨迹侧要对 50 公里内报文分组、过滤、插值和测距，音频侧要把 20000 小时原始录音按规则筛选到 4521 小时并统一到 32 千赫，再切成 60 秒和 10 秒 2 级片段。论文没有报告构建耗时和存储开销，复现时需要准备 ONC 原始录音访问和 AIS 下载，以及按站点和日期组织的大规模批处理。

预训练过程固定使用 12 层、隐维度 768 的 EAT 结构，3 组数据分别为 AudioSet 约 5000 小时、ONCship 排除 FAE 和 LSBBL 后的 3905 小时、两者联合 8905 小时，均从随机初始化训练 30 轮，不加载已有检查点。优化用 Adam 加余弦学习率，峰值学习率为 5 乘 10 的负 4 次方，预热 75000 步，批量 128，bf16 精度。目标是同时预测帧级和句子级教师表示的均方误差。下图把五步流程画成框图，中间横条是主链路，上下方展开空间关联和时间标注的细节，跟着箭头走一遍就能复述从波形加报文到可用片段的完整链条。

> **看图路径：** 1. 沿中间灰色横条从左到右看五个步骤的流向；2. 对照上方第 3 步的 2 公里与 50 公里同心圆，理解近距离与中距离的划分；3. 对照下方第 4 步的颜色条，理解无船、单船、多船时间窗是如何标出的

[![原论文 Figure 2：ONCship construction pipeline.](https://arxiv.org/html/2610.19722v1/data_collection1_1.png)](https://arxiv.org/html/2610.19722v1/data_collection1_1.png)

*论文图 2。原论文 Figure 2:：“ONCship construction pipeline. The five steps collect hydrophone and AIS data, clean and interpolate vessel trajectories, associate trajectories with hydrophones, label 30s time…”。*

从像素上看，左上是水听器与 AIS 报文示意，中间是 2 公里蓝色内圆和 50 公里橙色外环，右上是合并时间窗后再截取 60 秒波形，下方分别展开轨迹插值和 30 秒窗着色。这张图不包含任何性能曲线，只能用来核对流程，不能读出哪种数据更好。下图进一步给出语料分布，初学者可先记住带标签单船占近 70%、无船极少、船型长尾这三点。

> **看图路径：** 1. 先看上图各类别时长占比，确认带标签单船占多数、无船极少；2. 再看下图各船型片段占比，确认拖船最高、尾部类别占比很低的长尾形态

[![原论文 Figure 4：ONCship distribution. (a) Duration by recording category.](https://arxiv.org/html/2610.19722v1/fig_distribution.svg)](https://arxiv.org/html/2610.19722v1/fig_distribution.svg)

*论文图 4。原论文 Figure 4:：“ONCship distribution. (a) Duration by recording category.”。*

上图按时长占比显示带标签单船、多船、USSLP、无标签单船和无船 5 类，下图按片段占比显示拖船约 21.2%、货船、客船、拖带各约 16 到 17%、其余依次下降。这种分布意味着监督训练时大类主导梯度，小类需要用宏平均指标才能被看见。

### 划分规则与公式如何防止泄漏

DeepShip 采用按时间划分，2017 年 12 月之前用于训练、之后用于测试，并进一步保证训练和测试在船只级别不重叠，即同一条船不出现在两侧。ShipsEar 采用按船只身份 8 比 2 划分，同样保证船只级独立。划分后再在各自内部把录音切成 30 秒段、重叠 15 秒，避免切分引入跨划分泄漏。微调实验固定 DeepShip 测试集不变，只在训练侧加入来自相同或不同水听器的 ONCship 数据，且补充数据的 MMSI 与 DeepShip 完全不相交。MMSI 任务用 50 个 MMSI 共 100 小时，每个 MMSI 的 1 分钟源段来自间隔至少 6 小时的不同航次，再细分为 10 秒片段，且同一 1 分钟源段的所有 10 秒片段只进训练、验证、测试中的一个。

类别级召回与 F1 的定义如下，符号分别表示真正例、假正例和假负例的数量。

\[\mathrm{Recall}_{c}=\frac{TP_{c}}{TP_{c}+FN_{c}},\qquad\mathrm{F1}_{c}=\frac{2TP_{c}}{2TP_{c}+FP_{c}+FN_{c}}.\]

该式先对每个类别算召回和 F1，宏平均是对所有类别等权平均，加权 F1 按样本数加权。检索 AUC 的定义如下，对每个同时有正负候选的查询算一次 AUC 再平均。

\[\mathrm{AUC}=\frac{1}{|\mathcal{Q}|}\sum_{i\in\mathcal{Q}}\mathrm{AUC}_{i},\]

理解这两个公式就能明白论文表格中宏指标与检索指标的来源：前者依赖分类器的混淆计数，后者依赖冻结特征的余弦排序。

### 不同预训练来源带来什么变化

冻结编码器加逻辑回归的结果回答第一个问题。在 DeepShip 上，只用 ONCship 预训练的 EAT-onc 在归一化互信息和检索 AUC 上高于只用 AudioSet 的 EAT-as，两者联合的 EAT-as 与 onc 进一步取得检索 AUC 0.6540 和准确率 62.45%。在 ShipsEar 上，EAT-as 的归一化互信息和检索 AUC 最好，但联合预训练的准确率最高，达 76.18%，比 EAT-as 高 5.78 个百分点。这说明领域内数据提供了互补信息，但增益随数据集和指标而变化，不是所有指标都被联合预训练同时拿下。

下表是 3 组预训练在两个基准上的直接对比，比较条件是同一 EAT 结构、同一目标、冻结评价，指标方向都是越大越好。与下一张对照外部基线的表一起看，可以判断联合预训练的优势在不同参照下是否仍然成立。

| Model | DeepShip | DeepShip | DeepShip | ShipsEar | ShipsEar | ShipsEar |
| --- | --- | --- | --- | --- | --- | --- |
| Model | NMI | AUC | ACC (%) | NMI | AUC | ACC (%) |
| EAT-as | 0.1877 | 0.6297 | 61.75 | 0.4280 | 0.7284 | 70.40 |
| EAT-onc | 0.2021 | 0.6437 | 61.35 | 0.3727 | 0.7127 | 62.36 |
| EAT-as&onc | 0.1993 | 0.6540 | 62.45 | 0.3882 | 0.7264 | 76.18 |

从表中可见，DeepShip 上联合模型在检索和准确率占优，ShipsEar 上联合模型只在准确率占优，归一化互信息和检索仍是 AudioSet 模型更高。这种不一致提示我们，预训练分布与目标基准分布的匹配程度会影响不同层面的表示质量。与外部对比学习基线的比较进一步显示，3 组 EAT 都高于 ResNet18 的两种优化器结果，尤其在 ShipsEar 上差距更大，但这仍是冻结加轻量分类器协议下的结论，不能等同于端到端微调后的排序。

| Model | DeepShip | DeepShip | ShipsEar | ShipsEar |
| --- | --- | --- | --- | --- |
| Model | ACC (%) | Weighted F1 (%) | ACC (%) | Weighted F1 (%) |
| ResNet18 (Adam) | 53.94 | 49.00 | 21.40 | 8.00 |
| ResNet18 (LARS) | 57.78 | 56.00 | 43.94 | 42.00 |
| EAT-as | 61.75 | 61.93 | 70.40 | 70.85 |
| EAT-onc | 61.35 | 61.13 | 62.36 | 61.85 |
| EAT-as&onc | 62.45 | 62.49 | 76.18 | 77.25 |

该表保留了 ResNet18 加 Adam 和加 LARS 两条实际可运行的基线，以及 3 组 EAT 的准确率和加权 F1。联合模型在 DeepShip 上为 62.45% 和 62.49%，在 ShipsEar 上为 76.18% 和 77.25%，均是该表内最高。需要强调的是，基线来自已报道的对比学习方法，训练细节与 EAT 不同，因此只能说在各自报告的评价下联合预训练具有竞争力，不能理解为同等算力下的严格胜负。右侧 MMSI 示意帮助区分粗分类与细分类的目标差异，左图把不同货船都指向货船标签，右图把每条船指向各自 MMSI 编号。

> **看图路径：** 1. 先看左侧把不同货船录音都指向同一船型标签的汇聚箭头；2. 再看右侧每条船单独成框、指向各自编号的对应关系；3. 注意右侧同框内多个频谱块表示同一条船不同时间的录音

[![原论文 Figure 5：Comparison between conventional vessel-type classification and MMSI-Level Vessel Classification.](https://arxiv.org/html/2610.19722v1/experients_3.png)](https://arxiv.org/html/2610.19722v1/experients_3.png)

*论文图 5。原论文 Figure 5:：“Comparison between conventional vessel-type classification and MMSI-Level Vessel Classification.”。*

从像素上看，左侧同一船型下有多张船照片和多块频谱共用一个标签，右侧每条船单独成框并标注不同的 MMSI 数字，框内多块频谱表示同一条船不同时间的录音。这张图只讲任务定义，不包含性能数字，真正的单船可分性要看后面的数字表。

### 加入 ONCship 做微调何时有帮助

微调实验固定 DeepShip 测试集，比较只用 DeepShip、加入不同水听器 ONCship、加入相同水听器 ONCship 3 种训练配置，所有模型端到端微调 10 轮并重复三次报告均值与标准差。BEATs 在 3 组配置下都是三者中最高，相同水听器配置下准确率达 69.41%。EAT-as 从 65.64% 提升到相同水听器的 68.16%，而不同水听器仅微升到 65.95%。ResNet50 则在加入额外数据后下降，从 39.45% 降到 37.63% 和 36.38%，且标准差较大，说明在该协议下卷积基线未能从补充数据受益。

下面整理 MMSI 任务的数字表，比较问题是同一 EAT-as 骨干加不同损失函数能否区分 50 条已知船只，指标越大越好。交叉熵和 ArcFace 的 Top-1 分别为 0.5312 和 0.5320，前 5 分别为 0.6957 和 0.6892，宏 F1 分别为 0.5307 和 0.5333。

| Model | Top-1 ACC | Top-5 ACC | Macro-F1 |
| --- | --- | --- | --- |
| EAT(CE) | 0.5312 | 0.6957 | 0.5307 |
| EAT(ArcFace) | 0.5320 | 0.6892 | 0.5333 |

具体来看，两者在 Top-1 和宏 F1 上都超过 0.53、前 5 接近 0.69，ArcFace 在 Top-1 和宏 F1 略高，交叉熵在前 5 略高，差距很小。结合论文的航次分离和源段内划分规则，可以说声音中含有可用于区分已知个体的信息，但这是在 50 类闭集、100 小时子集上的可行性结果，未评测开放集检测或跨海域泛化。微调增益的另一面是站点依赖：相同水听器增益大于不同水听器，说明采集环境接近程度会影响迁移，换一个海域或设备不能默认有同样提升。

下面用原文连续句子整理的语料组成表回答数据量问题，比较的是各类别在最终 4521 小时中的占比，数字与单位以原文为准。

| 类别 | 时长 |
| --- | --- |
| 带标签单船 | 3106.8 小时 |
| 多船 | 929.1 小时 |
| 无标签单船 | 38.4 小时 |
| 无船 | 7.4 小时 |
| USSLP 无 AIS | 439.3 小时 |

该表说明带标签单船是主体，多船次之，无船极少，USSLP 单独存放是因为未下载 AIS。总量大不等于类别均衡，长尾船型在监督训练中仍是少数类，评价时需要看宏平均指标。预训练时还要记住已排除 FAE 和 LSBBL，实际用于预训练的是 3905 小时而非全部 4521 小时。

### 哪些对照说明增益的边界

把 3 组预训练放在一起看，最清晰的边界是增益随指标和基准变化。在 DeepShip 上领域内预训练提升了聚类一致性和检索排序，联合进一步提升检索和准确率；在 ShipsEar 上领域内预训练反而低于通用预训练的聚类和检索，只有联合的准确率反超。这说明不能把领域预训练理解为全面优于通用预训练，互补与否取决于目标分布。微调侧的边界是模型与站点双重依赖：Transformer 能从补充数据获益且同站增益更大，ResNet50 在同样协议下下降，提示容量、预训练起点和优化稳定性都会调节数据的作用。

未胜出的项也要保留。EAT-onc 在 ShipsEar 准确率仅 62.36%，低于 EAT-as 的 70.40%；EAT-as 与 onc 在 DeepShip 归一化互信息 0.1993，低于 EAT-onc 的 0.2021；MMSI 任务中 EAT(ArcFace) 的 Top-5 ACC 为 0.6892，低于 EAT(CE) 的 0.6957，原表该列均以小数表示，不带百分号。这些反例说明没有一种配置在所有列上最好。

此外，论文没有做去掉某一船型或某一站点的逐项消融，也没有报告训练时长、显存和推理延迟，因此无法从证据中得出成本与速度的结论。任何关于部署开销的说法都属于待验证的推测。

### 结论在什么条件下才成立

第一，所有迁移结论都依赖船只级独立的划分。DeepShip 按时间加船只不重叠划分，ShipsEar 按船只身份划分，MMSI 按源段划分并要求不同航次间隔 6 小时以上。如果改成随机切分让同一条船的相邻片段分居训练和测试，指标会被抬高，论文引用的 UniqueShip 分析已经提醒了这一点。第二，预训练对比固定了 EAT 结构和目标，结论只说明数据源的作用，不能推广到其他结构或目标。第三，微调增益固定了 DeepShip 测试集和 MMSI 不相交的补充集，同站增益大于异站，换设备、换海域或换标签体系需要重新验证。

第四，MMSI 结果是 50 类闭集上的可行性，Top-1 约 0.53、前 5 约 0.69，不能理解为任意数量未知船只都能达到该水平。第五，语料本身长尾且无船仅 7.4 小时，背景建模能力有限，中距离独占窗被舍去也意味着背景定义是规则定义的，而非经核实的绝对无船。

### 复现第一步要准备什么

复现应从数据链路开始，而不是先调模型。先确认 ONC 6 个站点的录音可访问性和 AIS 接收站的报文覆盖，复刻 50 公里收集、静止轨迹过滤、30 秒插值、2 公里与 50 公里关联、30 秒窗标注、合并与 60 秒采样这些阈值，再核对最终 5 类时长是否接近 3106.8、929.1、38.4、7.4 和 439.3 小时。预训练复现要严格排除 FAE 和 LSBBL，用 3905 小时 ONCship 加 5000 小时 AudioSet 构成 8905 小时联合集，统一切 10 秒、16 千赫、128 维对数梅尔频谱、掩蔽 0.8、30 轮、批量 128 的设置。评价复现要先实现船只级独立划分和源段内不跨划分的切分，再分别跑冻结逻辑回归和端到端微调。

论文未说明代码与权重是否公开，本文不作可下载或可运行的承诺；需要补的验证包括跨站点、跨海域的泛化、开放集单船识别，以及训练与推理成本的实测。

### 什么时候值得尝试 ONCship

当你的下游任务也是水下船声分类，且已有通用音频预训练模型时，值得尝试把 ONCship 作为联合预训练或同站补充数据，尤其在 DeepShip 这类 ONC 衍生基准上。预期是检索类指标和准确率可能提升，但聚类一致性不一定同步提升，需要同时看归一化互信息、检索 AUC 和准确率三者。当目标是跨设备或跨海域部署时，不应默认异站数据带来同样增益，应先做小规模站点匹配实验。

当目标是区分已知船只个体时，可以借鉴 MMSI 任务的航次分离和源段划分做法，把跨时间识别作为独立指标，而不是只报告随机切分下的准确率。归根结底，ONCship 的价值在于提供了大规模、可按 MMSI 分组的水声存档，但它的所有增益都附带分布、站点和划分条件，离开这些条件谈提升都会夸大论文的实际证据。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.19722v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
