---
title: "Enhancing Automatic Chord Recognition via Pseudo-Labeling and Knowledge Distillation"
date: 2026-09-13
draft: false
description: "针对和弦标注稀缺与分布不平衡问题，该工作先用预训练 BTC 教师在 1000 多小时无标注音频上生成伪标签训练学生，再用少量真值标签加选择性知识蒸馏做数据增量持续训练，最强 BTC 学生在七个 mir_eval 指标上超过教师与监督基线，代价是依赖教师质量并需保存完整软目标带来额外显存开销。"
tags: ["知识蒸馏", "半监督学习", "音乐", "和弦识别"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_22"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d09b85d300da8ea016d1c95aa6a90d70e67f88313f53a672b70206a188656981"
paper_digest_api_reader_plan_sha256: "f316b69549e2b4df42a4d352baafbabdf4acf735cbb70b959888c82f3b571c00"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9df7905d780408a54a4411f05b2a7ab21cdb038964f9717bd43895bdaab48bf5"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9d7f5c0f028918a85f541edc5d13e650f1923e2f5240c00c0937388183c50416"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2bd4b25991e0bda20413bff5c5df816ea1587629b66c384a866fa2135e70807c"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "db4e4451871d9fdc167c5b5991c66ecdf722c77539b09094d321f1fe8e43ec59"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.semi-supervised","label":"半监督学习"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.chord-recognition","label":"和弦识别"}]
paper_digest_primary_task: "和弦识别"
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 先跟教师学一千小时再用真值纠错：两阶段和弦识别为何能超过教师

> 英文题目：*Enhancing Automatic Chord Recognition via Pseudo-Labeling and Knowledge Distillation*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_22`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf)

标签：#知识蒸馏 #半监督学习 #音乐 #和弦识别

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Nghia Phan：机构信息未能从会议 PDF 纯文本可靠映射
- Rong Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Gang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Dong：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

自动和弦识别以音频恒Q变换特征为输入，输出逐帧和弦标签序列，难点在于对齐标注获取昂贵、公开标注集规模与多样性受限且大调与小调帧主导下稀有和弦质量识别困难。该流水线先用预训练双向变换器BTC教师对1000小时以上无标注音频以帧级最大后验生成硬伪标签，为学生提供大规模近似监督。随后轻量双编码器2E1D或BTC学生在仅伪标签上训练至收敛以继承教师分布，其收敛权重直接作为下一阶段持续学习的初始化起点。最后以该学生为起点在人工标注上做数据增量持续学习，并以选择性知识蒸馏锚定教师软分布以防灾难性遗忘并抑制标注噪声过拟合。与单轮混合真伪标签的已有半监督方法不同，解耦设计允许无标签时先行训练、有标签时增量适配而不重训教师，其实测意义在于教师权重可得而私有训练数据不可得时仍能迁移知识。在ground-truth测试集评测设置下，2E1D-All配置的Majmin指标为77.29±1.1，高于2E1D-FMA短片段配置的Majmin指标74.49±1.2。稀有和弦提升集中但短片段伪标签边界抖动仍存，其适用边界受限于长时谐进行一致性与干净对齐标注的覆盖范围。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/ptnghia-j/ChordMiniApp> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/ptnghia-j/ChordMini> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/ptnghia-j/ChordMini> — 链接可访问（HTTP 200）
预印本/扩展版链接未在会议页展示；会议版来源见页首官方记录与 PDF。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决什么矛盾？

本文输入是音乐音频，目标是自动和弦识别，也就是按时间输出每帧的和弦标签，例如大三和弦与小三和弦与属七和弦等。初学者可以把任务理解为给音频逐帧粘贴和声标签，评估时既要看根音是否正确，也要看三音与七音与整体和弦类型是否正确。论文面对的核心矛盾是精确对齐的和弦标注需要人工听辨与边界校准，词汇量大且分布极不平衡，公开标注数据在规模与多样性上都受限。

另一方面，开放权重的预训练模型比其私有训练数据更容易获得，作者因此提出不把标注与无标注数据混在一个训练轮次里。方法是解耦为两个阶段，先在标注完全不可用时只用伪标签训练，再在标注可用时做持续训练。本文解读只讲该论文实际做的 2 阶段伪标签加知识蒸馏路线，教学举例会明确标为例子。

输出上作者还提供可在本地运行的和弦识别网页应用，便于在自有音频上验证模型。本文收到的资源状态显示两个代码与模型链接当前可用，第三方预印本链接也可达。后续各节按任务路线与方法全景与组件计算与训练推理与实验条件与结果反证与复现收束展开，每节只承担一个教学任务。

### 同任务的已有路线为何仍需要解耦？

伪标签是半监督学习的常用手段，做法是用已训练好的教师模型给无标注数据打标签，再用这些合成标签训练学生。白话说就是先让教师抄作业，再让学生照着教师的作业练习。英文名为 pseudo-labeling，知识蒸馏英文为 knowledge distillation，持续学习英文为 continual learning。后文简称伪标签与蒸馏与持续学习。

在通用领域已有 Noisy Student 与 FixMatch 与 Mean Teacher 与 Meta Pseudo Labels 等扩展，分别从噪声注入与一致性正则与权重滑动平均与师生联合优化等角度改进。在音频里伪标签已用于语音识别与钢琴转谱与音乐标签，和弦方向上已有工作把它与对比预训练或置信度过滤结合。

但论文指出这些和弦方法通常从一开始就需要真值，把伪标签与真值混合在同一管线里训练。当标注初始不可用或训练数据不公开时，这种紧耦合就不适用。知识蒸馏原本多用于模型压缩与正则化，用温度平滑后的软目标传递类间关系，在持续学习里也有用蒸馏保留旧知识的做法。本文区别是把两者放在解耦的 2 阶段里，第一阶段只用伪标签做覆盖，第二阶段才用真值做纠错并用选择性蒸馏做锚定。

相关工作的对比条件并不完全一致，例如复现的先前方法使用较弱的监督模型生成伪标签，而本文使用更强的 BTC 教师。因此不能只看最终数字高低，还要看教师强度与数据规模的差异。这种差异是理解后文超越教师结论的前提。

### 数据与评估的困难具体在哪里？

第一个困难是调性不平衡，常用标注集偏向 C 与 G 大调等常用调，带多个升降号的调时长很少。若不用变调增强，模型容易过拟合到特定调的频谱形态，换调就失效。第二个困难是和弦质量不平衡，大三与小三和弦占训练时长主体，减和弦与减七与增和弦与挂留和弦等只占很少比例。

第 3 个困难是边界模糊与标注主观性，和弦切换时刻与和声解释本身有歧义，不同标注者或未校准的网络标签会在非和弦段与边界处产生噪声。评估因此采用多层次指标，根音与三音与三和弦与七和弦与四音与大小调与 MIREX 构成层级，数值越高越好。

分割指标用过分割与欠分割的最小值衡量边界一致性，加权召回按时长加权，平均和弦质量准确率对所有质量等权平均。后者对稀有和弦更敏感，是读懂后文表格的前提。理解这些指标方向后，才能判断何为提升何为退化，不能把不同指标的差值直接相减比较。

### 两阶段管线让一个样本经历什么？

先沿一个无标注样本走完全程，原始波形先做常数 Q 变换得到时频特征，频率 144 频点与每八度 24 频点与跳长 2048 点，在 22.05 千赫采样率下每帧约 93 毫秒。再用教师统计量做标准化，预训练的 BTC 教师对该特征逐帧输出 170 类上的概率，取每帧最大概率类别作为硬伪标签。

全部帧都保留且不做置信度过滤，保持序列边界完整，由此得到频谱加伪标签的成对数据。学生模型在这些成对数据上训练到收敛，得到伪标签学生。等标注音频可用时，同样做常数 Q 变换与标准化得到频谱加真值数据，以伪标签学生为初始化继续训练得到持续学习学生。

同时用原始教师的选择性蒸馏做正则，防止新标签冲掉旧表示。若后续还有标注到达，可继续以该学生为起点做下一轮持续训练。

**伪标签 × 知识蒸馏：** 伪标签负责在无标注音频上提供大规模硬目标，让学生在没有真值时也能学到和弦模板与时序结构；知识蒸馏负责提供教师输出的完整概率分布，保留类间相似关系并在第二阶段锚定学生表示。二者搭配的理由是硬伪标签规模大但带有系统误差，软分布能正则化纠错过程，组合后实现先用覆盖建立表示再用纠偏提升稀有类。

下面这段导读先帮你定位总览图的上半第一阶段与下半第二阶段，以及两条颜色主线各自的起点与终点，读图时请重点区分实线训练路径与虚线可选路径。

> **看图路径：** 1. 先沿上半绿色主路径观察无标注音频到频谱加伪标签再到伪标签学生的训练流向；2. 再看预训练教师指向伪标签的推理分支以及可选知识蒸馏虚线汇入位置；3. 最后沿蓝色初始化箭头与选择性蒸馏箭头理解第二阶段如何得到持续学习学生

[![原论文 Figure 2：Illustration of the proposed two-stage training pipeline.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c250ffdc95dd/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c250ffdc95dd/figure-2.png)

*论文图 2。原论文 Figure 2：“Illustration of the proposed two-stage training pipeline.”。*

该图上半为第一阶段，下半为第二阶段，第一阶段有频谱加伪标签的主训练实线与可选蒸馏虚线，第二阶段有频谱加真值训练线与来自原始教师的选择性蒸馏线。另有一条从第一阶段学生指向第二阶段学生的初始化线，读图时不要把虚线当成必选，也不要把第二阶段教师当成学生上一时刻快照。

### 伪影、编码器与选择性蒸馏各自算什么？

白话说，常数 Q 变换是对数频率刻度的时频表示，适合观察谐波，英文为 Constant-Q Transform。变调增强是用 Rubber Band 等相位声码器把音频整体升高或降低若干半音，同时把标签平移。本节教学例子是把一段大调片段上移若干半音，理想情况下所有谐波线整体平移，但实际算法会在瞬态处产生涂抹与虚假能量。

**变调增强 × 自然根音覆盖：** 变调增强靠信号处理把同一段音频移调到 12 个调上以补齐根音不平衡，但相位声码器会引入瞬态涂抹与频谱伪影；自然根音覆盖靠 FMA 与 DALI 与 MAESTRO 等多风格大库本身包含不同调性，聚合后接近均匀分布。二者分工是前者人工补数据，后者用数据多样性替代人工移调，论文因此在 2 阶段管线中完全省略变调以避免伪影。

下面这段导读带你进入四宫格伪影证据图，请先区分上排幅度谱与下排伪影强度的色标含义，再带着寻找低频扩散与高频噪声的目的去观察青色标注。

> **看图路径：** 1. 对比上排原始与移调后常数 Q 变换谐波线条的清晰度与位置变化；2. 观察下排伪影强度图中低频能量扩散与高频碎点的空间分布；3. 注意上下两排色标含义不同，上排为对数幅度而下排为伪影强度

[![原论文 Figure 1：Constant-Q Transform (CQT) comparison revealing pitch-shifting artifacts.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c250ffdc95dd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c250ffdc95dd/figure-1.png)

*论文图 1。原论文 Figure 1：“Constant-Q Transform (CQT) comparison revealing pitch-shifting artifacts.”。*

该图上排色标为对数幅度，下排色标为伪影强度，横轴为时间秒，纵轴为常数 Q 频点。下排青色箭头指向的低频扩散与高频碎点就是变调引入的非音乐成分，若在训练中大量使用这类信号，模型可能把伪影当成和声特征。作者的替代方案是依靠大库的自然覆盖，后文训练节用量化分布验证。

**BTC × 2E1D：** BTC 是较深的双向 Transformer 教师与自蒸馏学生基线，先做帧级投影再堆叠注意力层与前馈层；2E1D 是更宽更轻的纯 Transformer 实验结构，用频率编码器学习谐波关系与时间编码器学习和弦进行，再做交叉注意力融合。二者搭配是为了验证方法可跨结构迁移，同时对比深结构与宽结构在噪声标签下的稳定性差异。

模型侧 BTC 是较深的堆叠式双向 Transformer，先做帧投影再逐层做注意力与前馈。2E1D 是更宽的双编码器纯 Transformer 结构，频率编码器把频点分组学习跨频带谐波关系，时间编码器学习和弦进行，再用交叉注意力融合分类。推理时对每类输出做高斯平滑并用重叠滑窗投票以减少抖动，选择性蒸馏则按教师置信度加权，低于下限置零而高于上限降权。

### 两阶段如何训练，梯度从哪里来？

第一阶段用 AdamW 优化器，批量 256 与序列长 108 帧约 10 秒，学习率从较小值热身到峰值再做余弦退火。留部分伪标签数据做验证与 held-out 测试，耐心 10 轮早停，不做任何数据增强。损失在无蒸馏时就是学生预测与硬伪标签的交叉熵，若加蒸馏则再加教师软目标与学生软目标的散度。

第二阶段把学习率降到更小量级并在验证停滞时衰减，以第一阶段学生为初始化，在真值交叉熵与选择性蒸馏损失之间按权重加权。原文第二阶段统一用 0.3，温度统一用 3.0，直观梯度是两部分之和，一部分把学生推向真值硬标签，另一部分把学生拉向教师软分布。

当真值与教师冲突时后者起刹车作用，当两者一致时不阻碍适应。监督基线与此不同，从零开始在 420 首全量标注上训练并使用负 5 到正 6 半音的变调增强。

**灾难性遗忘 × 持续学习：** 灾难性遗忘指第二阶段只拟合小规模真值标签时会冲掉第一阶段从伪标签学到的广覆盖表示；持续学习指把第二阶段组织为数据增量任务，任务与词表不变而新标注数据陆续到达。论文用来自原始教师的选择性蒸馏作为正则项约束持续学习，使学生在适应新真值时不偏离教师的泛化分布。

下面这段导读带你进入十二根音分布柱状图，请先确认横轴根音与纵轴占比以及红色均匀虚线，再比较高柱与低柱的差距以判断是否需要人工变调。

> **看图路径：** 1. 先看横轴十二个根音与纵轴时长占比，再找到红色均匀虚线对应的位置；2. 比较 C 与 G 等高柱与升号调低柱的高度差距，确认没有极端缺失的调；3. 结合图注中接近均匀分布的说明理解为何可以省略变调增强

[![原论文 Figure 3：Duration-weighted chord root distribution across pseudo- labeled datasets (Section 4.1).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c250ffdc95dd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c250ffdc95dd/figure-3.png)

*论文图 3。原论文 Figure 3：“Duration-weighted chord root distribution across pseudo- labeled datasets (Section 4.1).”。*

该图横轴为 12 个根音，纵轴为时长占比，红色虚线为均匀线 8.33%。各柱在 5% 到 12% 之间波动，香农熵接近最大值，对应约 98.4% 均匀度。教学含义是多数据集聚合后调性自然铺开，学生在第一阶段已见过各调模板，因此第二阶段再加变调并无提升。但该均匀度是伪标签根音的统计，若教师本身有系统偏差则分布会被污染。

### 数据、划分与指标如何保证可比？

无标注侧用 3 个大库，Free Music Archive 约 100,000 条 30 秒短片段风格多样，MAESTRO 约 200 小时高质量钢琴录音，DALI 超 5000 首完整歌曲。三者合计超 1000 小时，分析时覆盖 101575 轨约 1300 小时用于伪标签统计。有标注侧聚合多个公开集共 600 首固定子集，按 7 比 1 比 2 划分为 420 首训练与 60 首验证与 120 首测试。

持续学习实验中的 50% 与全量指用 210 首与 420 首训练，作者还准备干净与噪声两版标签。干净版人工对齐，噪声版直接用网络标签且主要影响非和弦段边界，用于隔离蒸馏的正则作用。预处理全流程一致，常数 Q 变换参数与标准化统计量固定。

评估在干净集的 120 首测试集上进行，报告 7 个层级指标与分割分数与加权召回与等权平均准确率。学生结果报告多次种子的均值与标准差，硬件预算与显著性检验方法原文未交代，这是复现时需补记的缺项。先前方法的对比是按原文描述复现并在相同预处理与测试划分下评估，但教师强度与词表兼容性不同。

### 只用伪标签能学到教师的几成？

本节回答第一阶段问题，在没有任何真值时仅靠教师伪标签能恢复多少性能。比较的问题是不同无标注子集的覆盖是否有用，公平条件是同一教师与同一学生结构与同一测试集。指标方向为层级指标越高越好，帧级指标衡量与教师的一致性。

| 条件 | 根音 | 三音 | 三和弦 | 七和弦 | 四音 | 大小调 | MIREX |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BTC 教师 | 81.89 | 78.49 | 76.85 | 66.29 | 63.72 | 79.00 | 78.65 |
| BTC 学生全量伪标签 | 81.54 | 77.86 | 76.08 | 66.29 | 63.54 | 78.29 | 77.84 |
| 2E1D 学生全量伪标签 | 80.37 | 76.63 | 74.91 | 64.37 | 61.50 | 77.29 | 76.35 |

表后解释需要同时看到收益与代价，收益是三库全量组合最强，长曲库因完整和声进行而帧级更稳定。最佳 BTC 学生达到教师约 99%，2E1D 达到约 96 到 98%，显示跨结构迁移可行。代价是全用硬伪标签时再加蒸馏会使层级指标略降而帧级一致性上升，且需存储完整软目标带来开销。但蒸馏把收敛从 50 到 70 轮压缩到 30 到 40 轮，未胜出项是单用短片段或单用长曲库的配置。

### 加上真标签后能否超过教师与监督基线？

本节回答第二阶段问题，用真值持续训练后是否既超过监督基线又超过教师。比较包含监督基线与教师与持续学习学生，条件是相同干净测试集与相同预处理。持续学习统一用选择性蒸馏权重 0.3，指标方向仍为越高越好。

| 条件 | 根音 | 三和弦 | 七和弦 | 四音 | MIREX | 等权平均 |
| --- | --- | --- | --- | --- | --- | --- |
| BTC 监督基线 | 81.52 | 76.12 | 65.93 | 63.44 | 77.79 | 29.0 |
| BTC 持续学习全量 | 83.03 | 78.33 | 69.38 | 67.00 | 80.16 | 39.5 |
| 2E1D 监督基线 | 79.39 | 74.53 | 64.53 | 61.67 | 76.24 | 24.4 |
| 2E1D 持续学习全量 | 81.55 | 76.85 | 68.19 | 65.49 | 78.52 | 36.1 |

表后解释要指出结构性收益，BTC 持续学习全量在全部 7 个指标上同时超过教师与监督基线。2E1D 持续学习全量超过自身监督基线并接近教师，层级上七和弦与四音获益最大。等权平均的跃升远大于按时长加权的跃升，说明复杂与稀有和弦是主要来源。样本效率上仅用 50% 标注的持续学习学生已超过全量监督基线，边界是少数常见类可能持平。

### 噪声标签下蒸馏权重如何改变训练动态？

本节用反证组织，把第二阶段的干净标签换成未校准的网络噪声标签，其他初始化与数据不变。比较的问题是权重为零与 0.1 与 0.3 到 0.5 时谁能在噪声下保持性能，指标方向仍为越高越好。损失曲线越低且后期不上扬越好，这是判断过拟合的直接依据。

| 结构与权重 | 现象 | 结论 |
| --- | --- | --- |
| BTC 无蒸馏 | 全指标下降且验证损失后期上升 | 过拟合噪声标签 |
| BTC 权重 0.3 | 恢复至峰值并保持平稳 | 深结构所需正则中等 |
| 2E1D 无蒸馏 | 崩塌更严重 | 宽结构对噪声更敏感 |
| 2E1D 权重 0.5 | 恢复并稳定 | 宽结构需更强正则 |
| 干净标签加 0.3 | 不阻碍适应并超过基线 | 正则具有选择性 |

表后解释需点明机制与反例，无蒸馏时验证损失随轮数上升是过拟合噪声的直接信号。增大权重后学生被锚定在教师分布上，保留第一阶段的伪标签知识，BTC 在 0.3 处达峰而 2E1D 需 0.5 才稳定。反例是权重并非越大越好，BTC 在 0.4 处已不再提升，说明过强锚定会限制对真值的适应。

下面这段导读带你进入两组验证损失曲线，请先区分左右子图各自的结构与图例权重，再重点观察无蒸馏曲线的后期上扬与加蒸馏曲线的平稳差异。

> **看图路径：** 1. 对比左图 BTC 与右图 2E1D 在无蒸馏时验证损失随轮数上升的形态差异；2. 观察增大蒸馏权重后曲线最低点下移与后期平稳性的变化趋势；3. 注意两图纵轴量级完全不同，只能比较各自内部升降而不能跨图比绝对值

[![原论文 Figure 8：Evaluation loss of student models during continual train- ing with different KD weights α.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c250ffdc95dd/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c250ffdc95dd/figure-8.png)

*论文图 8。原论文 Figure 8：“Evaluation loss of student models during continual train- ing with different KD weights α.”。*

该图左为 BTC 而右为 2E1D，横轴为轮数至 16 轮，纵轴为验证损失。无蒸馏曲线在后期上扬或高位徘徊，加蒸馏曲线更低且更平，2E1D 随权重增大逐级下移。由于两图纵轴量级不同，只能比较各自内部的升降趋势，不能跨图比较绝对好坏，也不能把前 16 轮趋势推广到更长训练。

### 哪些结论有边界，什么还没被验证？

论文直接报告的是，在给定 BTC 教师与给定测试划分下，2 阶段加选择性蒸馏能恢复教师性能。并在干净标签下超过教师与监督基线，且对稀有和弦提升不成比例，这些数字支持方法有效。但适用条件明确，教师需足够强且泛化良好，否则偏差会通过伪标签传给学生。

这是作者自述的关键局限，未验证的推测是换更强教师与多教师集成或更大无标注库是否继续提升。原文只列为未来工作，不能当成已证收益，缺失证据不是技术错误。超参数阈值的搜索过程与显著性检验与训练时长与推理延迟均未系统报告，因此不能承诺延迟或成本改善。

总体趋势不等于每组都成立，例如加蒸馏在第一阶段略降层级指标，过大权重限制适应。都是需要按结构与噪声水平单独调参的信号，相关性也不等于因果。自然覆盖与省略变调的相关不能证明变调在所有数据下都有害，只能说在本文的大库覆盖下省略变调仍能学到调性不变表示。

### 要复现应先做什么，需要哪些信息条件？

先复现数据管线再复现训练，数据侧按原文固定常数 Q 变换为 144 频点与每八度 24 频点。跳长 2048 与采样率 22.05 千赫并用教师统计量标准化，无标注用三库而有标注用 600 首聚合集。按 420 与 60 与 120 划分，50% 条件用 210 首训练，这是保证可比的第一步。

训练侧第一阶段用 AdamW 与批量 256 与序列 108 帧，热身加余弦退火而不做增强，早停耐心 10 轮。第二阶段学习率降到更小量级，蒸馏权重 0.3 与温度 3.0 并用选择性加权，阈值下限 0.1 与上限 0.9 可作为起点。但需在验证集上重调，基线侧监督训练需打开负 5 到正 6 半音变调，而 2 阶段管线保持无变调。

代码与模型方面，本文收到的资源状态显示和弦应用与模型仓库当前可用。但权重下载与本地可运行仍需按仓库说明核对环境与推理脚本，本文未给出完整硬件预算。复现时应记录显存占用尤其是软目标存储开销，并固定随机种子以复现方差下降。若只有噪声标签，应优先扫描蒸馏权重并监控验证损失是否后期上扬。

### 何时值得尝试这种解耦，何时不必？

当标注初始不可用与采集昂贵或训练数据不公开但有开放权重教师时，这种先伪标签覆盖再真值纠错的解耦值得尝试。尤其目标包含稀有和弦或需跨调泛化时，仅用伪标签已能以较小精度代价获得可用模型。有 50% 标注时已能超过全量监督基线，这是样本效率上的直接依据。

当标注干净充足且调性覆盖已通过增强解决时，单阶段监督可能更简单。不必引入 2 阶段与蒸馏的额外复杂度，当教师本身较弱或偏向特定风格时。不应盲目蒸馏，需先评估教师在目标风格与稀有类上的可靠性，否则会固化系统误差。

论文特有的误解需要澄清，学生超过教师不是蒸馏必然发生。而是更大无标注覆盖加真值纠错共同作用的结果，蒸馏在噪声下是刹车而在干净标签下不阻碍适应。宽结构与深结构所需正则强度不同，不能共用同一权重。补做的验证应包括新风格测试集与显著性检验与部署成本测量，确认收益可迁移。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf#page=2)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf#page=4)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/735cc502f8a1/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf#page=5)

另有 37 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
