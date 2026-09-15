---
title: "Variation de la charge fonctionnelle en français en fonction de la position dans le mot et la syllabe"
date: 2026-09-14
draft: false
description: "该研究以法语词库最小对立为对象，用词频加权且只差一个区别特征的计数估计音位、对立和特征的功能负荷，显示音节首与韵尾、词首词尾的排序差异很大，而归一化与转写选择是主要代价与限制。"
tags: ["统计分析", "语音学与音系", "语音", "语音属性识别"]
categories: ["jep-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:jep:2026:conference-paper-id:audibert26b_jep"
paper_digest_source_kind: conference
paper_digest_conference_id: "jep-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/jep_2026/audibert26b_jep.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/jep_2026/audibert26b_jep.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4164d5f9e180e72b19fac0a47e6f1e2ad5fef199fb04fd66130581b54eff3c3f"
paper_digest_api_reader_plan_sha256: "313fae6292b4dd8553215adf34fd24f6201027405863920fc4ab382e851164e4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "45067cec52ab8ce5a692f937a6e5904e4e1b9a4841d21fb3ef2e0089b6267f14"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "05dcc82e64510694bc1c8683b3deed9faf16e7a02637e7ddf4a147d90931e0c8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ddf8c9239a25ed3a724683201dc32eb2e1b5ad2b534bac0c6281c59346362ab3"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "bb6e21c5ff7c037ebb8c4eb395dde35b69903acddced53158c3efece717d63c8"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"scientific_topic","id":"scientific_topic.phonetics","label":"语音学与音系"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"}]
paper_digest_primary_task: "语音属性识别"
paper_digest_primary_method: "统计分析"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 位置不同，对立的作用就不同：法语功能负荷的位置依赖解读

> 英文题目：*Variation de la charge fonctionnelle en français en fonction de la position dans le mot et la syllabe*

> 会议身份：`conference:jep:2026:conference-paper-id:audibert26b_jep`



> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/jep_2026/audibert26b_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/audibert26b_jep.pdf)

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Nicolas Audibert：机构信息未能从会议 PDF 纯文本可靠映射
- Naomi Yamaguchi：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该研究输入为法语词典音系形式、词类与口语频率，输出为按词内与音节位置划分的音位、音位对与区别特征的功能负载，难点在于罕见词会扭曲计数且位置效应长期被全局平均掩盖。方法第一步基于法语词库以正字形、音系转写与词类组合定义词形并做鼻元音合并等规范化，其输出的清洗词表进入第二步的位置标注。第二步为每个音段标注词首、词中、词末及辅音攻击与韵尾、元音开放与闭合音节等位置，输出带位置标签的候选集进入第三步的对比计数。第三步穷举同词类内可成词的全部替换对并过滤为仅差一个区别特征的最小对，以两词频率乘积加权求和得到功能负载。相对多特征最小对计数与基于熵的方法，该机制避免了低频位置出现虚高估计并能分离特征贡献，具有位置可比的实际意义。原文未提供可核对的关键定量结果。结论的适用边界受限于标准法语词典法语，尚未验证自发口语与历时音变预测等外推范围。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/nicolasaudibert/position_dependent_functional_load> — 链接可访问（HTTP 200）
- 演示资源：<https://shiny.laboratoirephonetiquephonologie.fr/pairesMin_fr/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要回答什么位置问题？

本文的输入是法语标准语的词库转写与词频，目标是估计音位、音位对和区别特征的功能负荷，并回答该负荷是否随词内位置和音节内位置变化。功能负荷在这里先按白话理解为一个对立在区分不同词时有多顶用，英文为 functional load，缩写为 CF 或 FL。作者要检验的不是全语言一个总排名，而是把同一套对立放到词首、词中、词末，以及音节首、韵尾、开音节、闭音节中分别排名。输出是一组可复述的排序与量级结论，外加公开代码与最小对立浏览工具。

需要保留的关键信息是数据来自 Lexique 词库，频率来自影视字幕，计数只保留恰好差一个特征的最小对立并按两词频率乘积加权，作图时取对数。本解读默认从原文独立写作，不引入外部评价。资源状态方面，代码链接当前可用，演示应用链接当前可用，分别对应仓库与交互式最小对立浏览器，复现时应以本次收到的可用状态为准。

### 已有两条量化路线与位置研究的空白是什么？

第一条路线是 Martinet 的最小对立计数，称为 rendement fonctionnel，直观但曾被批评为给罕见词过大权重。第二条路线是 Hockett 提出的熵方法，后经 Surendran 与 Niyogi 更新，思路是中和某个音位或对立后看系统熵的变化。原文引用 Oh 等人的多语言比较，结论是只要对最小对立按词频加权，计数结果就与熵方法非常接近，因此本文选择加权最小对立计数。

位置方面，已有工作比较过辅音与元音整体信息量在词内位置或音节上的差异，也有针对英语按词内位置比较功能负荷的工作，但作者指出按音节位置系统比较各单位功能负荷的工作仍然缺失。类型学上许多过程恰好是位置条件化的，例如韵尾或词尾的 obstruante 清化，以及开闭音节中的元音中和，这构成按位置拆分功能负荷的动机。

教学例子是清浊对立：若只看全库排名，它可能显得重要，但在词尾若中和严重，其位置功能负荷就可能很低，例子只用于理解位置拆分的必要性，不代表本文已测量该清化程度。

### 为什么全库一个排名不够用？

全库排名把一个对立在所有位置的贡献加总，容易掩盖结构性差异。同一个特征在词首可能靠一组音位对支撑，在词中或韵尾可能靠另一组音位对支撑，加总后特征排名看似稳定，实际承载者已经更换。若研究者只报告全库功能负荷，就会把不同位置的机制混为一谈，也难以解释为何某些音系过程只发生在特定位置。本文因此把问题形式化为在固定位置条件下重新估计功能负荷，再比较排序的一致性。

比较工具包括名次散点与相关系数，相关接近零或为负表示位置子系统排序差异大，相关为中等正值表示相对一致。需要强调的是，相关性描述的是排序相似程度，不是因果证明，也不能直接推出必然发生音变。

### 方法全景：从词库到位置功能负荷经过哪几步？

第一步是确定词形集合与频率。作者以 Lexique 3.83 为基础，把正字形、音系转写与词类三元组视为不同词形，用影视字幕频率列作为口语频率的近似，并对标准法语做两处转写调整。第二步是标注每个音段的词内位置与音节位置，辅音区分为音节首与韵尾，元音区分为开音节与闭音节，同时累积各位置的音位频次。第三步是抽取同词类内的全部最小对立，先按 Oh 等人的宽口径抽取任意特征距离的词对以便复用，再在分析时收窄到只差一个相关特征的对立。

第四步是按位置分别求加权计数并取对数展示，同时提供按音位频率归一化的版本。整个流程没有训练神经网络，也没有优化器更新，计算是确定性的计数与加权求和。

**charge fonctionnelle × paires minimales：** charge fonctionnelle 负责回答一个对立在维持词库区分上有多重要，paires minimales 负责提供可计数的证据单元，二者搭配的理由是只有在相同词法类别中仅替换一个位置并仍成词的词对才能归因到具体音位或特征，组合后新增的作用是把抽象的区分重要性变成可按位置切分的求和量。

### 组件如何分工：对立集合、位置标注与加权计数是什么？

对立集合组件负责界定什么算可比的最小差异。作者采用面向标准法语的特征方案，得到辅音、元音与半元音 3 组仅差一个特征的音位对，半元音在展示时归入辅音一侧，因为其音节地位更接近辅音。元音开口度按 4 级处理，以区分法语多层开口对立。位置标注组件负责把每个音段实例映射到词首、词中、词末，以及音节首、韵尾或开闭音节，这是后文一切位置比较的前提。

加权计数组件负责把每 1 对最小对立的贡献记为两词频率乘积，常用词之间的对立贡献大，罕见词之间的对立贡献可忽略，由此缓解罕见形式主导计数的批评。作者明确拒绝熵方法的一个理由是当某位置样本极少时熵估计会膨胀，极端情况下单个词形就可得到 100% 的功能负荷，而加权计数不会产生这种假象。作者也不做按出现次数阈值的过滤，避免引入阈值选择的随意性与删除边缘但真实词形的问题。

**trait distinctif × paire de phonèmes：** paire de phonèmes 负责指明哪两个音段真正构成最小对立，trait distinctif 负责指明这对音段究竟在哪一个特征上不同，二者搭配的理由是同一特征可以被多对音位承载而同一对音位只对应一个特征，组合后新增的作用是可以同时回答特征整体重要和该重要由哪些具体对立撑起来的位置差异。

**attaque × coda：** attaque 负责标记音节首辅音位置，coda 负责标记音节尾辅音位置，二者搭配的理由是法语及类型学过程常在这两个位置施加不同限制，组合后新增的作用是把原来混在一起的全库功能负荷拆成两个排序几乎无关的子系统来检验音节表征差异。

**syllabe ouverte × syllabe fermée：** syllabe ouverte 负责标记元音后无韵尾辅音的环境，syllabe fermée 负责标记元音后有韵尾辅音的环境，二者搭配的理由是法语位置规则直接以开闭音节条件化中元音的分布，组合后新增的作用是检验元音功能负荷是否跟随同一条音系规则出现可预测的升降。

### 没有训练阶段时，真实计算与冻结对象是什么？

本研究没有训练阶段，没有模型参数、梯度路径、监督更新或重置时机需要报告。真实计算是词库预处理、位置标注、最小对立枚举与分组求和，外加排序与相关计算。所谓冻结的对象是外部给定的词库转写、词类标注与频率列，以及选定的特征理论，本文在使用时不再更新它们。调用过程是离线 1 次性生成预计算最小对立集合，后续分析只是在该集合上按位置与特征筛选并求和。原文未报告随机种子、硬件预算与运行时间，因为计数过程不存在随机优化。若把无训练误读为结果天然无噪声是不对的，噪声主要来自转写选择、频率近似与口语覆盖不足，这些在限制节另行说明。

**fréquence lexicale × fréquence phonémique：** fréquence lexicale 负责给每个词形加权以区分常用词和罕见词，fréquence phonémique 负责统计某个音位在语料中出现多少次，二者搭配的理由是前者进入功能负荷求和而后者只反映出现频次，组合后新增的作用是得到归一化版本，用以判断高功能负荷究竟来自区分作用还是单纯因为出现得多。

### 数据、划分、指标与展示约定如何保证可核对？

数据是 Lexique 3.83 的全部词形而非仅高频 20000 词，频率取自影视字幕列，版本与 Oh 等人使用的版本不同，因此数值不可直接对齐。转写上有两处明确调整，一是合并不在标准法语中对立的鼻化元音，二是把腭鼻辅音的符号改写为序列，因为作者不将其视为独立音位。划分不是训练集与测试集划分，而是按语言学位置划分，词内分首中尾，音节分首尾，开闭音节针对元音核。指标是加权最小对立计数及其对数，名次越小表示功能负荷越高，另有按音位频次归一化的比例版本。

聚合对象是音位、音位对与特征 3 个层级，位置条件分别计算。展示时因量级跨度大而取以 10 为底的对数，比较排序时用相关系数。下表把对照设计中最关键的数量条件整理成可核对的形式，数字写法保留原文精度。
表前比较问题是：在复现前需要先确认哪些数据规模与对立集合条件是一致的，公平条件是同词库版本、同转写调整与同频率列，指标方向是计数越大功能负荷越高。

| 条件 | 指标 | 基线口径 | 本方法口径 | 比较对象 |
| --- | --- | --- | --- | --- |
| 辅音对立集合 | 仅差一个特征的对立数 | 27 对 | 27 对 | 辅音特征承载 |
| 元音对立集合 | 仅差一个特征的对立数 | 22 对 | 22 对 | 元音特征承载 |
| 半元音对立集合 | 仅差一个特征的对立数 | 2 对 | 2 对 | 音节边缘行为 |
| 词频来源 | 影视字幕覆盖规模 | 9474 部影片与剧集 | 9474 部影片与剧集 | 口语频率近似 |
| 词形定义 | 去重与词类约束 | 正字形加转写加词类 | 正字形加转写加词类 | 同词类最小对立 |

表后解释是：该表的收益在于把复现时最易错的集合规模与频率来源固定下来，代价是它不能替代真正的功能负荷数值表，读者不能把对立数多误读为功能负荷高。

未胜出项是宽口径多特征词对计数，它在方法比较中作为参照出现，但在位置分析中不作为主指标，未评测边界是自发口语中的重复与迟疑等现象在该词库中没有完整体现。

### 全库结果与方法对照显示了什么，又没有显示什么？

全库层面，作者报告功能负荷不能等同于音位出现频率。按出现频率从高到低看，某些高频辅音与高频元音的功能负荷相对偏高，而最常见的流音与某些高频元音及半元音的功能负荷相对偏低。方法对照把本方法与 Oh 等人的多特征计数方法比较，两者施加相同的频率加权后仍有差异。辅音中某些擦音与浊塞音在本方法下排名更高，而鼻音与边音等在多特征口径下会被高估。元音整体受计数口径影响较小，只有个别中元音在多特征口径下被低估。

无论口径如何，齿龈擦音与塞音以及开元音都位于高功能负荷一端，这与既有文献对齿龈音与开元音的观察一致。腭鼻音在全库中功能负荷最低，这与其边缘音位地位的讨论相呼应。特征层面，元音鼻音化与辅音浊音特征的功能负荷都较高，但作者指出这与类型学上的罕见或弱稳健性并不矛盾，因为功能负荷是语言内词库区分度量，不是跨语言普遍性度量。

下面这段导读帮助阅读方法对照散点，横轴是只差一个特征口径下的名次，纵轴是多特征口径下的名次，虚线为一致对角线，偏离越远表示口径选择影响越大。

> **看图路径：** 1. 先看左右两面板的横轴与纵轴分别代表哪一种计数方法下的名次；2. 再找偏离对角虚线最远的辅音点并读出其音标；3. 比较左图辅音散点与右图元音散点哪一边更贴近对角线；4. 确认左下角名次小的点对应功能负荷更高的音位

[![原论文 Figure 1：Rangs des phonèmes comparés entre la charge fonctionnelle estimée à partir des paires](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ab2dd7a0ff9b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ab2dd7a0ff9b/figure-1.png)

*论文图 1。原论文 Figure 1：“Rangs des phonèmes comparés entre la charge fonctionnelle estimée à partir des paires”。*

该图显示左面板辅音点明显偏离对角线，右面板元音点更贴近对角线，报告的含义是计数口径对辅音排名影响更大，对元音影响较小。支持的判断仅限于口径敏感性，不支持任何音位正在合并或分裂的因果结论。
位置比较的核心证据是排序相关很低，辅音对在音节首与韵尾之间、辅音在 2 位置之间、元音在开闭音节之间的名次相关都接近零或为负，说明位置子系统差异大。具体例子是清浊塞音对在音节首功能负荷高而在韵尾低，鼻音对则相反。

响音在韵尾的功能负荷更高，这与响度与韵尾偏好响音的类型学观察方向一致。元音方面，开闭音节的功能负荷格局符合位置规则的大趋势，但个别圆唇中元音对的行为比预期更突出，作者将其标为有待谨慎对待的惊奇点而非定论。
下面这段导读帮助阅读音节首与韵尾的名次比较，左为音位对层面，右为音位层面，横轴均为韵尾名次，纵轴均为音节首名次，斜线为趋势线。

> **看图路径：** 1. 先确认横轴为韵尾名次而纵轴为音节首名次；2. 再找出左图中位于右下与左上的极端对立并读出标记；3. 观察右图中响音在两个轴上的相对位置变化

[![原论文 Figure 3：Comparaison pour les consonnes des rangs des paires (a, gauche)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ab2dd7a0ff9b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ab2dd7a0ff9b/figure-3.png)

*论文图 3。原论文 Figure 3：“Comparaison pour les consonnes des rangs des paires (a, gauche)”。*

该图显示点云分散且趋势线近乎水平，报告的含义是 2 位置排名几乎无关，响音与清浊对立是主要的错位来源。
下面这段导读帮助阅读开闭音节元音条形图，左右分别为开音节与闭音节，条带越长表示对数功能负荷越高。

> **看图路径：** 1. 先比较左右两面板同一元音条带长度的相对顺序；2. 再定位开音节中排在末尾的中元音与闭音节中排在末尾的元音；3. 注意横轴为对数刻度因而条带差代表数量级差

[![原论文 Figure 4：Charge fonctionnelle des voyelles par phonème, classée par ordre décroissant, pour les](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ab2dd7a0ff9b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ab2dd7a0ff9b/figure-4.png)

*论文图 4。原论文 Figure 4：“Charge fonctionnelle des voyelles par phonème, classée par ordre décroissant, pour les”。*

该图显示同一元音在左右两面板的相对长度顺序发生变化，开音节末端与闭音节末端的元音不同，报告的含义是元音功能负荷确实随开闭音节重排，且大体符合位置规则，个别对立的高值需要回到转写核对。

### 换一种算法或换一个位置，结论还稳吗？

把多特征计数换成单特征计数可以看作 1 次方法消融，结果是辅音排名变化大而元音排名变化小，因此全库结论中关于辅音的部分对口径更敏感。把全库 pooling 换成按位置拆分可以看作 1 次条件消融，结果是大量全库稳定的表象被打破，例如浊音特征全库很高，但在词首与音节首主要由唇擦音对支撑，在词中词尾与韵尾主要由齿塞音对支撑。这说明特征重要不等于处处由同一批词对贡献。

特征在词内 3 位置之间的一致性为中等，唯一落差大的是连续性特征，它在词首与词尾高而在词中低，作者联系到词中多为元音间环境与常见的擦化中和方向，但明确限定法语当代并未记录该过程，因此只是方向性呼应而非证据。下表把位置相关的排序一致性证据集中整理，相关系数保留原文符号与精度。

表前比较问题是：在相同加权计数下不同位置的排名是否可互换，公平条件是同对立集合与同频率加权，指标方向是相关越高表示越可互换，越低或为负表示越不可互换。

| 条件 | 指标 | 基线位置 | 本方法位置 | 比较对象 |
| --- | --- | --- | --- | --- |
| 辅音对排名 | 名次相关 | 音节首 | 韵尾 | 相关为 -.134 |
| 辅音排名 | 名次相关 | 音节首 | 韵尾 | 相关为 .093 |
| 元音排名 | 名次相关 | 开音节 | 闭音节 | 相关为 .137 |
| 辅音特征排名 | 名次相关区间 | 词首词中词尾两两比较 | 词首词中词尾两两比较 | 相关区间为 .464 至 .679 |
| 连续性特征 | 位置落差 | 词首与词尾高 | 词中低 | 元音间擦化方向 |

表后解释是：主要收益是证明位置不可忽略，前三行接近零或为负意味着不能用一个位置的排名代替另一个位置，最后一行中等相关意味着特征层面相对稳但仍有例外。

代价是相关系数只刻画单调一致性，不反映绝对量级差，反例是即使特征相关中等，具体承载对立仍可完全更换。未评测边界包括词中位置内部的形态边界差异与语速条件，原文没有进一步切分。
下面这段导读帮助阅读词内 3 位置的特征条形图，三面板分别为词首词中词尾，条带为对数功能负荷。

> **看图路径：** 1. 先按词首词中词尾三面板自上而下读特征排序；2. 再定位连续性特征在中间面板与其他两面板的名次落差；3. 确认横轴同样为对数功能负荷以避免把条带差误读为线性差

[![原论文 Figure 5：Charge fonctionnelle des consonnes par trait distinctif, classée par ordre décroissant,](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ab2dd7a0ff9b/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ab2dd7a0ff9b/figure-5.png)

*论文图 5。原论文 Figure 5：“Charge fonctionnelle des consonnes par trait distinctif, classée par ordre décroissant,”。*

该图显示连续性特征在左右两面板居首而在中间面板明显下移，报告的含义是该特征的位置敏感性最强，支持将其作为位置解释音系过程的候选，但仍属于待验证的联系。

### 哪些转写与语料边界会动摇个别数值？

作者明确提示中元音的成对分析要谨慎。词库中个别词形的转写可能值得重新考虑，例如涉及圆唇中元音交替的高频词对会直接抬高相应对立的功能负荷，对开闭音节比较的影响更大，但按音位聚合的大趋势仍符合位置规则。语料边界是词库不能完全代表自发口语，重复、迟疑与语体差异没有完整还原，影视字幕只是会话用法的近似。

音位决策也有影响，不把腭鼻后鼻音段视为独立音位的影响可忽略，合并不对立鼻化元音则会改变个别鼻元音与高元音在词首词尾的名次。缺失证据不是技术错误，本文未测量误听率、反应时、产出可懂度或运行延迟，因此不能把高功能负荷直接承诺为高感知权重或优先教学顺序，相关应用讨论应读作展望而非已验证效果。

### 复现先做什么，需要哪些信息条件？

复现的第一步是取得相同版本的词库与频率列，核对转写调整是否完整实现，包括鼻化元音合并与腭鼻序列改写。第二步是复刻位置标注规则，确认词内首中尾的切分与音节首尾及开闭音节的判定与原文一致，并累积各位置音位频次。第三步是先复用预计算的全部最小对立集合，再筛选同词类且仅差一个特征的子集，按两词频率乘积求和并取对数展示。第四步是复算名次与位置间相关，检查是否复现接近零的音节位置相关与中等的词内特征相关。

关键超参数其实是语言学选择而非数值旋钮，包括特征理论、对立集合规模与频率列选择。代码以自由许可发布并附带预计算对立集合，交互应用可用于逐对核查转写可疑点。区分三者很重要：代码开源不等于词库可再分发，交互应用可运行不等于本地一键复现，复现报告应写清三者的获取状态。

### 何时值得尝试这种位置功能负荷，还需补哪项验证？

当研究问题涉及位置条件化过程、习得顺序或对立稳固性时，值得尝试按位置拆分的功能负荷，因为它能揭示全库排名掩盖的承载者更换与排序反转。当问题只是全语言 inventory 比较而不涉及位置时，全库排名已够用，不必增加切分复杂度。复现后还需补的验证包括用大规模口语语料重算以检验字幕频率近似的稳健性，对可疑中元音转写做人工核查与敏感性分析，以及把位置功能负荷与产出或感知数据关联起来再谈解释力。

教学上的常见误解是把功能负荷等同于出现频率或等同于音变必然性，本文的归一化比较与位置反例恰好反驳这两种误读。最终判断应表述为报告显示位置作用大，证据支持音节首尾与开闭音节是不同子系统，而具体音变预测仍是可能而待验证的推测。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

另有 4 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/jep_2026/audibert26b_jep.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 jep-2026 论文汇总](/posts/conference-jep-2026/)
