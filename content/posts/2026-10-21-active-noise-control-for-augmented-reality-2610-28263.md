---
title: "Active Noise Control for Augmented Reality Glasses using Virtual Sensing with Directional Robustness"
date: 2026-10-21
draft: false
tags: [主动降噪, 自适应滤波, 鲁棒性, 理论分析]
categories: [论文速递]
description: "论文针对 AR 眼镜缺耳处误差麦克风且参考麦克风因果性受限的问题，采用辅助滤波器做虚拟传感，分析并验证了其随噪声方向失配而退化的规律，再用按方向选择的有限滤波器组恢复性能，代价是需要方向信息和多组离线标定。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.28263"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "AR 眼镜上没有耳边麦克风怎么做主动降噪：辅助滤波器的方向敏感性与滤波器组"
paper_digest_original_title: "Active Noise Control for Augmented Reality Glasses using Virtual Sensing with Directional Robustness"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.28263v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.28263v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.28263v1.pdf"
paper_digest_primary_task: "主动降噪"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.active-noise-control","label":"主动降噪"},{"facet":"method","id":"method.adaptive-filtering","label":"自适应滤波"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"research_focus","id":"research_focus.theory","label":"理论分析"}]
paper_digest_primary_method: "自适应滤波"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文针对 AR 眼镜缺耳处误差麦克风且参考麦克风因果性受限的问题，采用辅助滤波器做虚拟传感，分析并验证了其随噪声方向失配而退化的规律，再用按方向选择的有限滤波器组恢复性能，代价是需要方向信息和多组离线标定。"
paper_digest_authors: [{"affiliations":["School of Electrical and Computer Engineering","Ben-Gurion University of the Negev"],"name":"Nitay Peled"},{"affiliations":["Beer-Sheva, Israel"],"name":"Boaz Rafaely"}]
paper_digest_abstract_sha256: "892c491f43d9645faedf70a9e2cc92486de953620fd6a268b9de3bd08c1823d4"
paper_digest_sidecars: {"citation.bib":{"sha256":"a3ca045e19ea9b234115fa3d2fa43ec422c3e33b9afe3e0e6add2de63da4affd","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28263/citation.bib"},"citation.json":{"sha256":"83cdb1ce7e5a75dd3be096606e701218d5e65dd730b9536ea989660918a527e7","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28263/citation.json"},"citation.ris":{"sha256":"def94a6207ceea5ebeb80909aed8b1d8ddce936da4c188f2de6daa782b46af97","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28263/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"228126ba61e11bb9e2341757943972ebe969c7e79363466579726fbdc26d5af5","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28263/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "bdb7148c3e26c0f1a42957845cde36fde4fbc4d7968db1d180a443ff52876ac5"
paper_digest_api_reader_plan_sha256: "457decad4ec1c1748f44c237efadcf282702bdb2a3d0d68593c4282d6057b12b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "80c8aeb3f48067b16d0bd2cba269dee8ef4ce1a36d4cd0fcf0d9e9c35b5aaf5b"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "0b1d2363700175458741434217ec5f8d2b8366dd15bcf42eace2ce89fd8b4265"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c38fc8419a51d57879835bce108b680015764b5770b20e3f1a3a2b15504209b1"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "adde12a5f626a1c3e4f41b09c005a58f2086a00963292b04938e1ce39773a552"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 AR 眼镜上没有耳边麦克风怎么做主动降噪：辅助滤波器的方向敏感性与滤波器组

> 英文题目：*[Active Noise Control for Augmented Reality Glasses using Virtual Sensing with Directional Robustness](https://arxiv.org/abs/2610.28263v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[主动降噪](/audio-paper-digest-blog/papers/?concept=task.active-noise-control)
- **研究方法**：[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing) → [自适应滤波](/audio-paper-digest-blog/papers/?concept=method.adaptive-filtering)
- **研究重点**：[鲁棒性](/audio-paper-digest-blog/papers/?concept=research_focus.robustness)；[理论分析](/audio-paper-digest-blog/papers/?concept=research_focus.theory)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Nitay Peled：School of Electrical and Computer Engineering；Ben-Gurion University of the Negev
- Boaz Rafaely：Beer-Sheva, Israel

## 📌 核心摘要

增强现实眼镜要在佩戴者耳处降低噪声，但耳处没有可用的误差传声器，而镜架上的监听传声器测到的信号与耳处信号并不一致，直接用它驱动控制会留下残差。论文沿一个噪声样本说明处理过程：参考传声器获取噪声输入 \(X(\omega)\)，经控制滤波器 \(W(\omega)\) 生成扬声器信号，监听传声器信号减去辅助滤波器 \(H(\omega)\) 对参考信号的预测得到替代误差，再用该误差更新控制滤波器，使耳处虚拟传声器的残差趋零。离线校准阶段虚拟传声器暂时可用，用于求出最优辅助滤波器，在线控制阶段虚拟传声器不可用，辅助滤波器保持固定。理论分析把主要路径写成点声源自由场延时，推导最优辅助滤波器对声源方位角的导数，指出失配灵敏度随偏离参考与监听连线方向增大。在基于Project Aria镜架几何的自由场单噪声源仿真评测设置下，在因果方位范围 \(\phi_0\pm90^{\circ}\)内以虚拟传声器处平均衰减为指标按方位平均时，5个均匀校准方向构成的滤波器组按最近方向选择取得25.3 dB，低于每个方向单独校准的29.1 dB，差距为3.7 dB。结论只在单声源自由场和因果方位成立，非因果方位所有方法都明显退化，混响与多声源尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### AR 眼镜主动降噪的输入是什么、要在何处安静

这篇论文处理的是单通道前馈式主动噪声控制。输入是参考麦克风拾取的噪声信号，目标是让佩戴者耳处的声压尽量小，输出是眼镜架上扬声器发出的抵消声。必须保留的信息是噪声到达耳处的幅度和相位关系，因为只有反相等幅才能相消。

AR 眼镜的特殊处在于麦克风和扬声器都固定在镜架上，耳处没有物理麦克风。评价只能在虚拟的耳处麦克风位置上进行，而控制器运行时只能看到镜架上的信号。这就带来两个困难：一是如何知道耳处残差，二是当噪声从某些方向先到耳朵后到参考麦克风时，控制器来不及反应。

论文把实验限定在自由场、单个点源噪声、低频段的仿真条件下。读者需要先接受这个简化，才能理解后文关于方向敏感性和滤波器组的所有数字，它们都不直接代表混响房间或多人噪声下的效果。

### 已有 AR 眼镜降噪研究缺了哪一块

论文回顾了耳机、头枕等已有主动降噪应用，指出它们通常可以在误差点附近放麦克风，而 AR 眼镜不行。一项 AR 眼镜仿真实现了方向性降噪，但依赖双耳误差麦克风，在实际产品中可能不可用。另一些头戴式研究把误差麦克风放得很靠近耳朵，或针对磁共振噪声场景，与 AR 眼镜可行的镜架布局和日常噪声条件不同。

在通用虚拟传感方面，论文把重点放在辅助滤波器方法上，引用了该方法的系列分析和比较工作。已有文献指出该方法需要离线标定，训练与控制条件失配时会退化，需要重训练，近年有人提出在线自适应和用一组已训练滤波器覆盖多种条件。但这些滤波器组思路此前没有在 AR 眼镜几何下研究过。

因此本文的定位不是提出全新的虚拟传感原理，而是在 AR 眼镜几何下验证必要性、量化方向失配的影响，并检验有限滤波器组这一实用折中。

### 为什么固定在镜架上的麦克风不够用

如果直接把镜架上的监测麦克风当作误差点做自适应，控制器会努力让监测点安静，但耳处与监测点之间的主路径和次级路径都不同，监测点安静不等于耳处安静。论文用仿真对比了三者在耳处测得的衰减：以监测点为目标的归一化滤波-x 最小均方算法、以耳处为目标的同一算法，以及按每个方向单独标定的辅助滤波器方法。

结果是监测目标与耳处目标差距明显，而按方向重标定的辅助滤波器能接近耳处直接自适应的上限。这说明问题不在自适应算法本身，而在误差信号定义的位置。虚拟传感就是要构造一个替代误差，让控制器在看不到耳处时仍朝着耳处最优解更新。

方向敏感性的核心结论可以先记为一个近似关系：最优辅助滤波器随方向的变化率正比于方向偏离参考监测轴的正弦绝对值。

\[\displaystyle\left|\frac{\partial H_{0}}{\partial\phi}\right|\approx|F(\omega)|\,|\sin(\phi-\phi_{0})|,\]

该式意味着在参考监测轴方向附近变化缓慢，偏离 90 度附近变化最快，后文仿真中固定滤波器在不同标定角附近保持性能的角度宽度不同，正是这一性质的体现。

### 系统运行时信号经过了哪些模块

训练阶段所有麦克风都可用，控制阶段虚拟麦克风不可用。运行时只有 3 类实测信号：参考信号、监测麦克风信号和扬声器到监测点的声学贡献。控制器根据参考信号生成扬声器信号，扬声器声音与原始噪声在耳处和监测点分别做声学叠加。

下图是理解全文的关键总览，建议按输入到输出的主路径先读，再看修正支路在哪里汇入自适应环路。图中上方是虚拟耳处的声学求和，下方是监测点的声学求和，中间是辅助滤波器和控制滤波器支路，最下方是经监测次级通路估计后的自适应更新。

> **看图路径：** 1. 先沿最上方参考信号到虚拟误差和监测误差的两条主路径看信号流向；2. 再看辅助滤波器支路如何从监测信号中减去一部分得到替代误差；3. 最后看替代误差如何经监测次级通路估计进入自适应更新并调控制滤波器

[![原论文 Fig. 1：Block diagram of the ANC system including the AF.](https://arxiv.org/html/2610.28263v1/control.svg)](https://arxiv.org/html/2610.28263v1/control.svg)

*论文图 1。原论文 Fig. 1:：“Block diagram of the ANC system including the AF.”。*

从像素上可以看到：参考信号同时送往虚拟主路径、监测主路径、辅助滤波器和控制滤波器；控制滤波器输出同时送往虚拟次级通路和监测次级通路；监测误差减去辅助滤波器输出得到替代误差，再送入最小均方更新；更新所用的参考需先经过监测次级通路估计滤波。这种结构保证了自适应看到的是与耳处相关的误差，而不是原始监测误差。

### 参考、监测、虚拟和扬声器各自承担什么

几何上以参考麦克风为坐标原点，眼镜朝向正 x 轴，参考与监测麦克风位于 x-y 平面，噪声源限定在 x-y 平面内用方位角描述。论文在理论部分假设自由场、点源，并忽略扬声器到参考麦克风的贡献以简化分析。仿真则采用 Project Aria 眼镜的麦克风位置子集，扬声器装在镜架上，虚拟麦克风放在耳位置。

下图展示了眼镜示意、4 个角色的颜色标记以及噪声源距离和方位角的定义，绿色和红色张角分别对应参考到监测轴和参考到虚拟轴的相对角度，灰色虚线标出了参考监测轴方向。

> **看图路径：** 1. 辨认图例中参考、监测、虚拟和扬声器的颜色标记及其在镜架上的相对位置；2. 观察噪声源距离箭头与方位角 phi 的旋转范围；3. 注意参考到监测轴与参考到虚拟轴的两个张角示意

[![原论文 Fig. 2：AR glasses setup illustrating the positions of the microphones, along with the primary and…](https://arxiv.org/html/2610.28263v1/analysis_setup.png)](https://arxiv.org/html/2610.28263v1/analysis_setup.png)

*论文图 2。原论文 Fig. 2:：“AR glasses setup illustrating the positions of the microphones, along with the primary and secondary sources. This arrangement is used throughout the analysis and simulations.”。*

像素细节支持后文的一个近似：监测麦克风放在镜架上耳朵上方，与虚拟耳处位置接近，因此论文假设两者相对参考的方向角近似相等。这一近似让理论推导能把 2 个方向合并为同一变量，是得到正弦敏感性形式的前提，若两者距离较远则该近似不再成立。

**参考麦克风 × 监测麦克风 × 虚拟麦克风：** 参考麦克风提供噪声源的前向输入，监测麦克风提供镜架上可实测的残余误差，虚拟麦克风代表耳朵处不可实测的真实评价点，三者分工让训练阶段能建立监测与虚拟之间的映射，控制阶段只用前两者推断耳处效果。

### 辅助滤波器和控制滤波器如何配合

虚拟耳处信号由两部分组成：噪声经虚拟主路径到达的部分，加上控制信号经虚拟次级路径到达的部分。监测信号结构相同，只是把路径换成监测主路径和监测次级路径。控制滤波器决定扬声器发出什么，辅助滤波器决定从监测信号中扣除多少参考相关成分以构造替代误差。

替代误差的定义是监测信号减去辅助滤波器对参考信号的滤波输出。当辅助滤波器取最优值且控制滤波器收敛到耳处最优解时，替代误差趋于零。直观例子是：假设某方向下监测点比耳处多了一段可预测的直达差异，辅助滤波器就学会这段差异的映射，运行时把它减掉，剩下的就近似代表耳处没抵消干净的部分。

最优取值的频域形式如下，先看虚拟信号构成，再看替代误差和两个最优解。

\[\displaystyle E_{v}(\omega)=P_{v}(\omega)X(\omega)+S_{v}(\omega)W(\omega)X(\omega),\]

该式中第一项是噪声直达耳处的成分，第二项是控制器经扬声器到耳处的成分，两者相加为耳处残差。符号分别表示虚拟主路径、虚拟次级路径、控制滤波器和参考信号，均为频率的函数。

\[\displaystyle E_{h}(\omega)=E_{m}(\omega)-H(\omega)X(\omega),\]

该式把监测信号减去辅助滤波器输出，得到用于自适应的替代误差。它是时域自适应在频域的等效表达，实际仿真用有限冲激响应滤波器实现。

\[\displaystyle H_{0}(\omega)=P_{m}(\omega)-\frac{S_{m}(\omega)}{S_{v}(\omega)}P_{v}(\omega).\]

该式说明最优辅助滤波器等于监测主路径减去经次级路径比值换算后的虚拟主路径，它依赖于具体方向的声学路径，因此换方向后需要更换。

\[\displaystyle W_{0}(\omega)=-\frac{P_{v}(\omega)}{S_{v}(\omega)}.\]

该式是耳处最优控制，即用虚拟主路径与虚拟次级路径之比的负值完全抵消直达声，它是评价上限对应的理想控制器，但运行时因看不到虚拟路径而无法直接求得。

**辅助滤波器 × 控制滤波器：** 控制滤波器负责从参考信号生成扬声器驱动信号以抵消噪声，辅助滤波器负责把监测信号修正为接近虚拟误差的替代误差，二者搭配使自适应更新朝着降低耳处噪声的方向进行，而不是只降低监测点噪声。

### 辅助滤波器标定和控制滤波器更新各用什么数据

论文没有训练神经网络，这里的训练指两步自适应滤波过程。第一步是辅助滤波器标定：按文献流程用最小均方算法离线学出监测与虚拟之间的映射，学完后在控制阶段固定。第二步是控制阶段：固定辅助滤波器，用改进的滤波-x 最小均方算法在线更新控制滤波器，更新用的参考经过了监测次级通路估计的预滤波。

仿真中所有自适应滤波器都是 256 抽头的有限冲激响应滤波器，初值为零。次级通路估计假设完全已知，这是重要的理想化条件，实际中估计误差会进一步影响性能，但本文不评估这一项。控制滤波器对每个方向单独做步长搜索，报告的是多个步长中的最好稳态结果，而不是固定步长的单次结果。

需要补的验证缺口是：论文未报告标定阶段的收敛曲线、步长选择和计算开销，也未说明标定噪声时长与控制噪声是否独立实现。复现时应把标定与控制的噪声实现分开，并记录标定收敛所需的样本数，否则可能把标定不充分误读为方向失配。

### 仿真把哪些条件固定了、用什么指标衡量

几何取自 Project Aria 规范的子集，声场为自由场点源，采样率 24 kHz，无额外处理或硬件延迟。每个方位角仿真 5 s 实现，噪声源距参考麦克风 3 m，以近似理论分析中的平面波假设。噪声为高斯白噪声经 4 阶巴特沃斯滤波限带到 100 至 800 Hz，覆盖主动控制最有效的低频段。指标是虚拟麦克风处干扰与残差的均方衰减，以 dB 表示，取每段 5 s 实现的最后 15% 以反映稳态，数值越大表示耳处越安静。

下表整理了本次仿真中固定下来的关键配置，阅读结果时应把它们视为结论成立的前提，改变任一项都可能改变衰减绝对值。

| 配置项 | 取值 |
| --- | --- |
| 采样率 | 24 kHz |
| 自适应滤波器长度与初值 | 256 抽头，零初值 |
| 控制步长搜索范围 | 1e-4 至 1e-1 中取最优 |
| 稳态统计窗口 | 每段最后 15% |

该表数字与单位均来自原文连续句，采样、时长、距离、频带、抽头数、步长集合与统计窗口共同定义了可比性。若在混响、有延迟或次级通路估计不准的条件下重测，衰减数字会整体下移，但方向敏感性的相对趋势仍需重新验证。

**主动噪声控制 × 虚拟传感：** 主动噪声控制负责用扬声器发出反相声波抵消噪声，虚拟传感负责在没有物理麦克风的耳处估计或等效出误差信号，二者搭配才能在 AR 眼镜上把降噪目标定在耳朵处，否则只能降低镜架上监测点的噪声。

### 耳处直接控制与镜架监测控制差距有多大

为回答是否需要虚拟麦克风，论文在极坐标图上按噪声方位角画出耳处衰减，角度表示噪声方向，径向表示衰减 dB。3 种曲线分别是：以监测点为目标的归一化滤波-x 最小均方、以耳处为目标的同一算法，以及每个方向单独标定的辅助滤波器方法。读图时先对比蓝色与橙色曲线的径向开口，再看绿色曲线贴近哪一条。

> **看图路径：** 1. 比较蓝色监测自适应曲线与橙色虚拟自适应曲线在径向衰减上的开口差异；2. 观察绿色按方向重标定的辅助滤波器曲线更靠近哪一条；3. 注意偏离参考监测轴正负 90 度以外曲线向中心收缩的区域

[![原论文 Fig. 4：Polar plot of attenuation at the virtual microphone (at the ear) versus source azimuth.](https://arxiv.org/html/2610.28263v1/necessity_100-800.png)](https://arxiv.org/html/2610.28263v1/necessity_100-800.png)

*论文图 4。原论文 Fig. 4:：“Polar plot of attenuation at the virtual microphone (at the ear) versus source azimuth.”。*

像素可见：在参考监测轴附近约 327 度方向，橙色耳处直接控制和绿色逐方向标定都向外张得很大，蓝色监测目标曲线明显内收；在偏离该轴正负 90 度以外的区域，3 条曲线都向中心收缩，衰减很低。论文解释为该轴方向上参考与监测或虚拟之间的相对传播延迟最大，因果条件最有利，而偏离超过约正负 90 度后噪声先到监测或虚拟点后到参考点，需要非因果控制器，因此所有方法都退化。

这 1 对比支持的判断是：在因果角范围内，监测目标与耳处目标存在实质差距，而逐方向标定的辅助滤波器能把差距弥合到接近上限。但该结论依赖自由场、单源、低频和完全已知次级通路等理想条件，且非因果区本身不可控，不能误读为辅助滤波器失效。

**因果性 × 监测自适应：** 因果性指参考信号是否先于噪声到达耳处和监测点，只有先到控制器才有时间产生反相声，监测自适应若直接以监测点为目标会忽视耳处时延差异，因此在非因果方向上即使监测点收敛耳处也难以获得衰减。

### 固定辅助滤波器换方向后还能保持多远

第二组实验把单个方向标定的辅助滤波器固定下来用到其他方向，标定角分别取参考监测轴、轴偏 30 度和轴偏 70 度附近，并与每个方向单独标定的上限对比。原文图注与正文对第三个角度的写法存在不一致，像素图例实际标为 327 度、357 度和 37 度，对应轴偏 0 度、30 度和 70 度，解读时以图例像素为准。

像素趋势是：在标定角附近固定滤波器能贴近上限曲线，但偏离一段角度后迅速内收；在轴上标定的曲线保持贴近的角度宽度明显大于在偏 70 度处标定的曲线。这与理论敏感性正比于偏离正弦绝对值的预测一致：在轴上导数最小，变化缓慢，鲁棒区间宽；偏离后导数增大，同样角度失配引起更大的滤波器偏差。

该结果的限制是：它只说明固定滤波器在失配下退化且退化速度与标定位置有关，没有给出可用的角度容差阈值，因为阈值取决于对衰减下降多少 dB 可接受，而论文未定义这一阈值。实际部署不能直接引用某一度数作为切换间隔。

### 用 5 个方向的滤波器组能挽回多少

为避免每个方向都重标定，论文在因果范围内均匀标定有限个辅助滤波器，运行时按最接近噪声源方向的标定角选用其一。非因果区因本身不可控而不纳入滤波器组构建范围，评价平均也只在参考监测轴正负 90 度内计算。读图任务是找到菱形标定点，对比滤波器组与逐方向标定两条曲线的贴合程度。

> **看图路径：** 1. 找到菱形标定的 5 个均匀标定方向；2. 比较蓝色滤波器组曲线在标定点附近与橙色逐方向标定曲线的贴合程度；3. 观察两曲线之间出现明显缺口的角度段

[![原论文 Fig. 6：Polar plot of attenuation at the virtual microphone (at the ear) versus source azimuth.](https://arxiv.org/html/2610.28263v1/5_AF.png)](https://arxiv.org/html/2610.28263v1/5_AF.png)

*论文图 6。原论文 Fig. 6:：“Polar plot of attenuation at the virtual microphone (at the ear) versus source azimuth.”。*

像素可见：蓝色 5 滤波器组曲线在多数角度上紧随橙色逐方向标定曲线，但在两个标定点之间会出现向内折的缺口，说明失配仍带来损失，只是比单个固定滤波器小得多。该图只展示尺寸为 5 的一种划分，不能从中读出 3 或 7 个时的曲线形状，具体平均数需看原文表格。

下表比较的是因果角范围内的平均衰减，比较问题是有限组相对逐方向重标定还差多少，指标方向是平均衰减越大越好、与上限差距越小越好。表前已说明公平条件为同一几何、同一频带、同一稳态统计和同一完全已知次级通路。

| AF Bank Size | Mean Attenuation [dB] | Gap to Fully Calibrated [dB] |
| --- | --- | --- |
| 3 | 22.7 | 6.3 |
| 4 | 24.0 | 5.0 |
| 5 | 25.3 | 3.7 |
| 6 | 26.0 | 3.0 |
| 7 | 26.5 | 2.5 |
| Fully calibrated | 29.1 | 0 |

表中可见从 3 个到 7 个滤波器，平均衰减单调上升，与完全标定 29.1 dB 的差距逐步缩小，其中 5 个时为 25.3 dB、差距 3.7 dB。论文据此称 5 个滤波器仅带来小幅平均退化。需要强调的是这是因果区平均，未胜出的事实是即使 7 个仍有差距，且平均会掩盖某些中间角度的较大缺口，部署时若噪声常出现在缺口附近，体验会差于平均数。

**噪声到达方向 × 辅助滤波器组：** 噪声到达方向决定了各传声路径的相对时延和辅助滤波器的理想取值，辅助滤波器组则是在因果角范围内按方向离散标定多个滤波器，运行时按最接近的方向选用其一，用有限存储换取对方向变化的鲁棒性。

### 这些结论在什么条件下才成立、缺了哪些验证

所有定量结论都绑定自由场单点源、固定仰角的方位变化、3 m 近似平面波、100 至 800 Hz 低频、完全已知次级通路、256 抽头零初值和事后选最优步长的评价方式。一旦加入混响、多噪声源、多通道控制、头部遮挡、扬声器到参考的反馈或硬件延迟，路径模型和因果边界都会变化，滤波器组的数量与间隔需要重做。

未评测的范围包括：方向估计误差下的选择性能，噪声在标定点之间快速移动时的切换瞬态，次级通路估计误差的影响，以及计算与存储开销。论文的滤波器组选择假设已知最接近的标定方向，实际需要到达方向估计模块，其误差会吃掉部分增益，但本文没有量化这一链路。

容易产生的误解是把因果区外的低衰减归为辅助滤波器不好。原文明确指出偏离超过约正负 90 度后需要非因果控制器，所有方法都退化，这是物理可实现性限制，不是某种算法的缺陷。同样，平均差距缩小不等于每个方向都足够好，极坐标缺口提醒我们要看分布而不仅看平均。

### 要复现仿真第一步做什么、去哪里找几何

复现第一步是按 Project Aria 几何摆好参考、监测、虚拟和扬声器的 3 维坐标，并以参考为原点实现自由场点源到各点的延迟与衰减。论文图 3 图例给出了厘米单位下的坐标，仿真只用其中标色子集，其余为未用麦克风。建议先用 3 m 单方位白噪声限带信号验证主路径延迟，再接入 256 抽头自适应环路。

评价要严格复制：每个方向 5 s 实现、最后 15% 算均方衰减 dB、控制步长在 10 的负 4 次方到负 1 次方中取最优并注明是事后最优。辅助滤波器先按文献流程离线标定再固定，控制阶段次级通路估计设为理想已知，以便与原文数字对齐，之后再逐步放宽为估计版本以观察差距。

关于资源可用性，本次仅依据论文原文和官方原图，未发现经校验的代码、模型或数据公开链接，因此不得声称作者已开源。极坐标图的数字是复现对齐的基准，几何坐标是搭建声场的依据，两者缺一不可。

### 什么时候值得尝试这种滤波器组、还需补什么

当产品形态确定耳处无法放麦克风、噪声以低频单源为主、且噪声方向会在因果角范围内缓慢变化时，值得尝试按方向预标定有限辅助滤波器组并配合方向估计做选择。它避免了连续重标定，用存储换鲁棒性，5 个规模在本文条件下已能把平均差距收窄到 3.7 dB。

但若场景包含强混响、多源并发、宽带高频或参考信号本身被扬声器严重污染，则应先补更现实的声场和多通道建模，再谈滤波器组数量。下一步验证至少应包括：带方向估计误差的端到端评价、切换瞬态的主观与客观影响，以及次级通路失配下的敏感性。

一句话总结：在本文的理想化单源自由场低频仿真内，逐方向标定的辅助滤波器接近耳处直接控制的上限，固定滤波器随方向失配退化且退化速度符合正弦敏感性预测，有限滤波器组是实用的折中，但所有 dB 数字和所需组数都不宜直接推广到真实房间。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2610.28263v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-21/)
