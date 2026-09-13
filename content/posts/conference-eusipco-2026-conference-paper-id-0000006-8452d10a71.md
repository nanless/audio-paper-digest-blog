---
title: "UNCERTAINTY QUANTIFICATION FOR ACOUSTIC-BASED DRONE DETECTION AND LOCALIZATION UNDER ADVERSE NOISE CONDITIONS"
date: 2026-09-13
draft: false
description: "该研究在八麦克风声学无人机检测定位任务上对比保形预测、证据学习与异方差回归，报告显示保形方法按构造实现名义覆盖、证据不确定性与分类错误相关而异方差回归定位误差最低，但纯噪声输入下模型仍保持 0.93 以上置信度而无法拒绝无效目标。"
tags: ["统计分析", "鲁棒性", "麦克风阵列", "音频分类", "声源定位"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000006"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "42b37b135a655201b533b9ffaa2cafd1c19ac00b1f3b2a9eb5435375c295c0bf"
paper_digest_api_reader_plan_sha256: "301b2a9938d4f07477834c601cf53bc7ba582cb393af3ae85cf218beeb07195c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a5973d963df345457c7f779ece8d77470d7abb1c7e0765394cda16472b5c1f08"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6a697c1d225ca6bd0b532ae36b37a0a2fdca56345410435c4fd18b69295961e3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a6ae84cc7b75710d8b68027d89d9e4a86f1be55275b69f8f1a013be364350681"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "058ee2e293964619ac9a418c9f448997cfa20ad504d3a40e555ddf828c87d1a1"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"task","id":"task.localization","label":"声源定位"}]
paper_digest_primary_task: "声源定位"
paper_digest_primary_method: "统计分析"
paper_digest_score: 5.4
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 低信噪比下声学无人机检测定位：覆盖保证与误差相关不确定性的互补权衡

> 英文题目：*UNCERTAINTY QUANTIFICATION FOR ACOUSTIC-BASED DRONE DETECTION AND LOCALIZATION UNDER ADVERSE NOISE CONDITIONS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000006`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf)

标签：#统计分析 #鲁棒性 #麦克风阵列 #音频分类 #声源定位

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Çaylı, Özkan：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao, Pei：机构信息未能从会议 PDF 纯文本可靠映射
- Wang, Wenwu：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文面向8通道麦克风阵列采集的含噪短时音频，需同时完成DJI Mini对PRO4二分类与方位距离回归，难点在于低信噪比下信号被环境声淹没且点概率常虚高，导致精度与可信度同步退化。对数梅尔谱先经轻量卷积跨通道融合为紧凑时频表示，再送入结合全局自注意与局部卷积的Conformer块并池化为片段嵌入，为后续不确定性头提供共享输入。分类分支以该嵌入分别驱动共形预测与证据狄利克雷头，前者用校准集构造分布无关预测集，后者单次前向输出狄利克雷参数以分解认知与偶然不确定性，其置信与空虚度直接进入选择性预测与分布外判断。定位分支同样承接该嵌入并行比较异方差高斯、共形区间与正态逆伽马证据回归，分别输出输入相关方差、覆盖可控区间与位置后验分布，从而兼顾点精度与区间校准。在-5 dB条件下，Conformal的准确率为0.990，高于Evidential的准确率0.957，定位上Plain场景异方差欧氏误差更低而共形覆盖仍保持名义水平，说明覆盖保证与误差相关性分属不同优势。纯白噪声异分布检验显示Plain训练模型仍输出0.992最大概率与0.015空虚度，暴露无背景类建模时拒识失效的失败条件，其适用边界受限于已知两类无人机与合成信噪比范围，尚未验证开放环境迁移，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要交付什么？

本文解读的对象是声学无人机检测与定位研究，输入是八麦克风阵列采集的多通道音频，目标是同时回答有没有无人机、是哪一种无人机以及它在什么方位和距离。输出包括可复述的方法流程、可核对的实验条件和可对照的结果数字。本文默认只依据论文原文证据独立写作，不引入外部评价。需要保留的关键信息是模型结构主干、3 种不确定性方法的计算分工、4 种噪声条件的构造方式以及分类与定位各自的评价指标。

读者学完应能说清一个样本如何从对数梅尔谱经过卷积融合与构形模块变成类别概率和位置估计，又如何得到集合大小、证据不确定性或方差区间。后文按学习依赖展开，先讲任务难点与相关路线，再讲方法全景与组件计算，然后讲训练构造与实验条件，最后讲结果反证与复现要点。凡是教学举例都会明确标为例子，不虚构数值。

### 为什么已有声学模型在安全任务中还不够用？

声学检测定位已经有卷积网络、循环网络和基于变换器的成熟做法，在相关音频任务上取得了很强的点预测性能。论文指出这类模型的概率输出常常校准不良，容易在噪声或分布偏移下给出过度自信的错误。对于无人机这类安全关键应用，过度自信比单纯答错更危险，因为下游会据此做告警或跟踪决策。相关路线中有 3 类 1 次前向即可给出不确定性的方法而被选中。第一类是温度缩放等概率校准，它调整置信度使其更接近经验正确率。

第二类是保形预测，它输出集合而非单点，并承诺长期覆盖率。第 3 类是证据深度学习，它用狄利克雷分布同时表达预测与信心。在定位侧，对应路线是异方差建模输出与输入有关的方差，保形回归输出无分布假设的预测区间，以及证据回归输出正态逆伽马分布以分离数据不确定性与模型不确定性。论文强调此前这些方法在无人机听觉中缺乏系统比较，因此要做统一框架下的基准测试。

### 任务的输入表示与输出目标如何定义？

研究把无人机型号分类定义为二分类问题，类别是迷你型与专业型两种无人机。给定声学信号的嵌入向量，分类头先计算线性对数值，再经激活函数映射为属于其中一类的概率。定位任务被定义为回归问题，目标不是直接回归角度，而是回归方位角的正弦值与余弦值以及到麦克风阵列的距离。这种表示避免了角度周期不连续带来的回归困难，后续可由正弦余弦还原方位，再结合距离构成 2 维空间位置。

困难主要来自两处，一是低信噪比下目标信号被环境声淹没，二是需要区分有效目标与纯噪声失败情形。举例来说，同一段无人机谐波在干净条件下清晰可辨，在 -45 分贝混合噪声下则几乎不可听，模型既要给出位置，又要诚实表达不可靠程度。评价因此分为两条线，分类看准确率与校准误差，定位看方位误差、距离误差与欧氏误差及区间覆盖率。

### 统一框架让一个样本走完哪条流水线？

框架的起点是对 8 通道音频提取对数梅尔谱，轻量卷积网络先把多通道信息融合成紧凑表示，再交给结合全局自注意力与局部卷积的构形模块处理序列。序列输出被池化为片段级嵌入，随后分叉为分类、定位与不确定性估计头。沿一个样本走完全程，输入是 0.1 秒长的多通道波形帧，中间表示是融合后的时频嵌入与构形编码，目标是类别标签、方位正弦余弦与距离真值，输出是类别概率、位置点估计以及对应的不确定性度量。

3 种不确定性策略共享同一主干以保证公平比较。保形方法在分类中构造预测集，在定位中构造预测区间。证据方法在分类中预测狄利克雷参数，在定位中预测正态逆伽马参数。异方差基线只用于定位，额外预测每个维度的方差。这种设计使准确率、校准与覆盖可以在相同输入与相同主干下对照，避免把主干差异误读为不确定性方法的差异。

### 分类侧的保形集合与证据分布各自算什么？

分类侧的保形预测先在校准集上计算不符合分数，分数定义为一减去模型赋予真类的概率。然后取校准分数的特定分位数作为阈值，该分位数由用户指定的覆盖水平决定。推理时把所有满足一减类别概率不超过阈值的类别纳入预测集，集合可能为空集、单元素或双元素。理论承诺是真类落入集合的概率不低于预设水平，且该承诺不依赖分布假设。证据学习则把预测看作对 2 个类别的证据分配，输出狄利克雷分布的两个正参数。

期望类别概率等于各自参数除以总证据量，总证据越小表示不确定性越大。训练最小化证据损失，其中包含基于双伽马函数的拟合项与惩罚无根据确信的散度正则项。直观理解是模型既要把证据投给正确类，又不能在没有依据时虚增总证据。

**保形预测 × 覆盖保证：** 保形预测负责用校准集上的不符合分数构造预测集或预测区间，覆盖保证负责给出集合包含真值的概率下界不低于 1 减显著性水平，二者搭配的原因是前者提供不依赖分布假设的构造动作，后者提供可验证的统计承诺，组合意义是输入越难集合越大但长期覆盖率仍可控。

**证据学习 × 认知不确定性：** 证据学习负责在单次前向中输出狄利克雷或正态逆伽马分布的参数以累积证据量，认知不确定性负责度量模型因证据不足而对自身预测的怀疑程度，二者搭配的原因是总证据越小不确定性越大，组合意义是不经集成或采样就能把预测错误风险与不确定性大小关联起来。

### 定位侧的均值方差与区间如何得到？

定位侧的异方差回归为距离等每个目标维度同时预测均值与方差，假设观测服从以该均值方差为参数的高斯分布。网络实际输出均值与对数方差，训练最小化高斯负对数似然，其中包含对数方差项与平方误差除以方差项。这使模型可以对清晰观测给出小方差，对含噪观测给出大方差，方差直接参与损失加权。保形回归的做法更简单，先计算校准集上绝对残差作为不符合分数，再取相应分位数为阈值，推理时在点预测上下各扩展该阈值形成区间。

对 2 维定位，可把正弦、余弦与距离各自的区间组合成空间中的覆盖可控区域。证据回归假设预测服从正态逆伽马分布，参数包括预测均值、证据强度以及控制方差分布的两个参数，损失鼓励在大误差时给出谨慎的不确定性，并用散度正则惩罚过度自信。3 种定位方法的区别在于异方差直接建模输入相关噪声，保形提供覆盖控制区间，证据回归给出可分解数据与模型不确定性的后验分布。

**异方差回归 × 偶然不确定性：** 异方差回归负责为每个定位维度同时输出均值与随输入变化的方差，偶然不确定性负责解释观测噪声本身带来的不可约误差，二者搭配的原因是清晰观测应学到小方差而强噪声观测应学到大方差，组合意义是定位点估计与噪声水平在同一个高斯负对数似然损失下联合优化。

### 数据混合、划分与监督信号如何构造？

训练数据来自论文团队此前构建的多通道无人机检测定位数据集，音频采样率为 96 kHz，按 0.1 秒分帧，每帧 9600 个采样点，包含无人机型号、方位与距离标注。数据集按 70% 训练、10% 验证、20% 测试划分。为了模拟挑战性声学条件，研究把无人机录音与环境声音数据集中的随机片段混合，该环境数据集包含 2000 段 50 个类别的声音。对每个目标信噪比，按信号功率与缩放后噪声功率之比满足分贝公式来缩放噪声。

由于无人机录音有 8 个通道，噪声对每个通道独立做时间平移，使模型不能简单利用通道间差异猜测方位。训练与测试覆盖干净条件以及 15 分贝、负 5 分贝、-45 分贝 3 种混合条件。分类监督来自型号标签，定位监督来自方位正弦余弦与距离，纯噪声信号另作分布外评测的输入。原文未报告优化器类型、学习率与训练轮数等超参数细节，这部分属于缺项，复现时需要回到数据集论文或代码核对，不能从模型名称推定。

### 实验在什么条件下比较，指标方向如何读？

实验按噪声条件组织比较，要求同一信噪比下比较不同不确定性方法，避免跨噪声比较造成不公平。分类报告准确率与调和平均分数度量正确性，布赖尔分数与负对数似然度量概率质量，受试者工作特征曲线下面积与精确率召回曲线下面积度量区分能力，风险覆盖曲线下面积度量选择性预测能力。校准以期望校准误差为准，原文明确指出布赖尔分数与负对数似然会奖励过度自信的正确预测，因此校准判断应看期望校准误差。

保形分类评价覆盖率、平均与中位集合大小、空集率、单元素率及单元素条件准确率。证据可靠性评价认知不确定性与错误的相关性。定位报告方位平均绝对误差、距离平均绝对误差与欧氏平均绝对误差，误差越小越好。校准评价在 68%、95% 与 99.7% 名义水平下的经验覆盖率，越接近名义值越好。所有模型在 4 种背景噪声下分别训练与测试，硬件与耗时预算原文未报告。

### 分类准确率与校准在不同信噪比下如何分化？

比较的问题是高低信噪比下点准确率是否还有区分度，以及校准误差由谁更优。公平条件是同一信噪比内对比保形主干与证据模型，指标方向是准确率越高越好，期望校准误差越小越好。原文报告在高信噪比下准确率饱和，低信噪比下保形分支略高而证据分支校准更好。下表整理正文中连续句子实际出现的准确率与校准数字，不引入原表矩阵未在正文复述的其余指标。

| 条件 | 指标 | 保形分支报告 | 证据分支报告 | 阅读说明 |
| --- | --- | --- | --- | --- |
| 15 dB 与干净 | 准确率 | 大于等于 0.99 | 大于等于 0.99 | 高信噪比饱和 |
| 负 45 dB | 准确率 | 0.819 | 0.808 | 保形略高 |
| 负 5 dB | 准确率 | 0.99 | 0.957 | 证据下降较多 |
| 负 45 dB | 期望校准误差 | 0.451 | 0.123 | 证据校准更优 |

表后解释需要同时看到收益与代价。收益是证据模型在各噪声下期望校准误差更低，支持其概率更诚实的判断。代价是其在负 5 分贝准确率下降更明显，说明校准改善不等于点准确率提升。未胜出项是保形方法本身不提升点准确率，它只改变集合输出。限制是布赖尔分数与负对数似然在此会偏向过度自信的正确预测，因此不能用它们代替校准结论。

**期望校准误差 × 保形集合大小：** 期望校准误差负责度量预测置信度与经验准确率之间的失配，保形集合大小负责度量模型为维持覆盖而不得不给出的候选多少，二者搭配的原因是前者评价点概率是否诚实而后者评价集合是否因困难而扩大，组合意义是校准好的点预测仍可能需要大集合来覆盖低信噪比样本。

### 证据不确定性能否指示错误，又能否拒绝纯噪声？

这里测两件事，一是证据认知不确定性与分类错误的相关性，二是白高斯纯噪声输入是否触发高不确定性。公平条件是同一训练信噪比下的模型接受同一纯噪声测试，指标方向是错误样本的不确定性应更高，分布外输入的真空度应更高而最大概率应更低。原文报告认知不确定性随任务难度缩放，但在纯噪声上反而过度自信。下表整理正文连续句子中的相关系数、误差率与分布外置信度数字。

| 条件 | 指标 | 报告值 | 对照值 | 阅读说明 |
| --- | --- | --- | --- | --- |
| 负 5 dB | 误差与认知不确定相关 | 0.370 | 15 dB 为 0.290 | 中等难度相关最强 |
| 负 45 dB | 误差与认知不确定相关 | 0.188 | 干净为 0.006 | 极难下区分变弱 |
| 干净训练 | 纯噪声最大概率与真空度 | 0.992 与 0.015 | 误差率 0.1% | 干净模型最过度自信 |
| 噪声训练 | 纯噪声平均置信 | 高于 0.93 | 真空度约 0.12 | 仍未触发高不确定 |
| 干净条件 | 认知均值 | 0.000 | 负 45 dB 为 0.013 | 简单任务正确收缩 |

表后解释要区分两种不确定性。支持的判断是证据学习能为模糊但有效的无人机信号给出与错误相关的不确定性，且在干净任务下不确定性收缩到零，行为符合预期。反例是纯噪声输入下即使噪声训练的模型归一化熵升到约 0.33、真空度升到约 0.12，平均置信仍高于 0.93，高不确定样本比例为零。这显示该方法能量化模糊目标的风险，但没有背景类建模就不会把无效输入判为未知，这是关键失败条件。

### 定位精度与区间覆盖由谁兼顾得更好？

比较的问题是在不同信噪比下哪种定位策略点误差更小，以及谁的经验覆盖更接近名义水平。公平条件是同一信噪比下对比保形、证据与异方差 3 种头，指标方向是欧氏误差越小越好，覆盖率越接近 68%、95%、99.7% 越好。下表只用正文连续句子中出现的欧氏误差范围与覆盖数字。

| 条件 | 指标 | 异方差报告 | 对照方法报告 | 阅读说明 |
| --- | --- | --- | --- | --- |
| 干净到 15 dB | 欧氏误差 | 14 到 26 m 范围 | 异方差低至 14.22 m 与 23.90 m | 干净下异方差最优 |
| 负 5 dB | 欧氏误差 | 35.58 m | 约 36 到 38 m 范围 | 中等噪声仍最优 |
| 负 45 dB | 欧氏误差 | 约 74 m | 三方法均约 74 m | 极难下全部失效 |
| 负 45 dB | 覆盖率 | 接近名义 | 保形 68.3% 与 95.2% 与 99.7% | 保形按构造命中 |
| 干净条件 | 低置信覆盖 | 高于名义 | 证据 91.3% 对 68% | 证据偏保守 |

表后解释要同时给精度与校准结论。精度上异方差回归在干净、15 分贝与负 5 分贝下欧氏误差最低，支持其直接建模输入相关噪声的判断。校准上保形几乎精确命中名义覆盖，证据在低置信水平常超出名义而偏保守，异方差在 95% 与 99.7% 接近名义但在 68% 常偏高。未胜出项是 -45 分贝下三者欧氏误差都收敛到约七十四米，说明方法差异被任务本身难度淹没。未评测边界是区间宽度与计算开销的权衡原文未量化，不能据此承诺延迟改善。

### 哪些结论有支持，哪些还只是待验证？

论文直接报告的是保形预测可靠保证统计覆盖，证据学习在可解区间内使不确定性与预测错误相关，异方差回归在定位点精度上持续最优。这些有跨信噪比数字支持，可以用报告或显示来表述。有限解释的是保形集合大小随难度自适应扩大，以及证据不确定性在干净任务下收缩到零，这支持方法行为合理，但只在给定主干与给定混合方式下成立。

未验证推测是混合策略能同时获得精度、校准与可靠性，原文结论建议混合，但没有给出混合实现与数字，因此只能用可能或待验证来表述。缺失证据不是技术错误，原文未测量推理延迟、边缘端帧率与训练成本，也未提供统计显著性检验。相关性不是因果，误差与不确定性相关不等于不确定性导致错误减少。总体趋势不等于每组都成立，例如证据覆盖在高阈值可靠但在低阈值保守，需要按名义水平分别阅读。

**分布外检测 × 真空度：** 分布外检测负责判断纯噪声输入是否属于有效无人机目标，真空度负责在证据框架下度量缺乏支持任何类别的证据空白程度，二者搭配的原因是理想的未知输入应表现为高真空度和高不确定性，组合意义是检验不确定性方法能否从处理模糊目标推广到拒绝无效输入。

### 要复现应先固定什么，再补哪项验证？

复现先固定数据与混合口径。按原文用 8 通道 96 kHz 录音，按 0.1 秒分帧，按 7 比 1 比二划分训练验证测试。对每个目标信噪比用信号功率与缩放噪声功率之比的分贝公式缩放环境片段，并对 8 通道独立时间平移噪声。再固定主干流程为对数梅尔谱、轻量卷积通道融合、构形块与片段池化，然后分别挂载 3 种头。分类侧复现保形的不符合分数与分位数阈值，证据侧复现狄利克雷参数与散度正则。

定位侧复现高斯负对数似然、绝对残差分位数区间与正态逆伽马损失。评价时分类同时看准确率与期望校准误差，定位同时看欧氏误差与三档覆盖率，纯噪声测试单独记录最大概率、归一化熵与真空度。还需补的验证是原文缺项，包括优化器与超参数、随机种子方差、区间平均宽度、边缘端延迟与功耗，以及显式背景类或阈值拒绝机制能否真正降低纯噪声误报。资源状态方面，本次未发现来源绑定且完成验证的资源，因此不得声称代码模型或数据已公开。

### 何时值得尝试这三种方法，如何记住取舍？

当任务同时要求点准确与诚实的不确定性时值得尝试。若下游需要可审计的覆盖承诺，例如按 95% 覆盖做告警区间，应选保形预测，但要接受它不提高点准确率且困难时集合变大。若需要在单次前向中得到与错误相关的风险分数，应选证据学习，但要接受它在纯噪声上仍可能过度自信，必须另加背景建模或拒绝阈值。若定位精度优先且能接受低置信区间略偏宽，应选异方差回归。

常见误解是把校准误差小等同于准确率高，把覆盖率高低等同于模型更好，以及把相关性高误读为能自动拒绝分布外输入。记住取舍的方法是回到同一信噪比下的对照，高信噪比看饱和后的校准差异，中等信噪比看相关性峰值，极低信噪比看三者共同失效的边界，纯噪声看置信度是否回落。只有同时核对数据集、阶段、指标、单位与聚合对象，才能把数字读成可复述的方法结论。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e471f5572db5/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf#page=2)

另有 11 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
