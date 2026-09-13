---
title: "JOINT WEIGHTED AVERAGE FUSION METHOD FOR ROBUST MULTIMODAL (AUDIO VIDEO) DEPRESSION DETECTION"
date: 2026-09-13
draft: false
description: "该文在 AVEC2014 上用固定的两层感知机隔离融合设计的影响，以线性加权平均管模态可靠性、有序加权平均管特征显著性做向量保留式联合加权，在分类取得 85.7% 准确率与 0.88 的 AUC、回归取得 8.1 的均方根误差与 0.44 的一致性相关系数的同时，在 0 分贝强噪声下仍保持相对可控的退化，代价是可靠性打分依赖的信号质量指示与排序后权重构造细节未完全公开。"
tags: ["多模态学习", "鲁棒性", "音视频", "病理语音评估"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0001522"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "532300380d2e7fe2ab0140c9f906531855aa6088ff53044f4a50371ed3cfd99f"
paper_digest_api_reader_plan_sha256: "ca974040aaefd619ffffd348b788da1b8c39f754e6e02abf7e9475b1ebdb98a3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "eb0130938d090813af1d2ffa6f35d25ca3d9915bd99695876ee0368ea0bd180a"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "81f87491588382bc1a02d863775a3cbc83aff858a8479b178692513303e558da"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9419a513deabde944524afa6ec2b533eabd6a1ec37e8f5f5b9c51157b36fbdc2"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "46c9c55093f1fd561f9b4567f413175a57d0208415e2e1a7c7a4b63251b1ea38"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.pathological-speech","label":"病理语音评估"}]
paper_digest_primary_task: "病理语音评估"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 5.0
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不加参数的融合为什么能抗住坏掉的音频：联合加权平均的可靠性与显著性分工

> 英文题目：*JOINT WEIGHTED AVERAGE FUSION METHOD FOR ROBUST MULTIMODAL (AUDIO VIDEO) DEPRESSION DETECTION*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0001522`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf)

标签：#多模态学习 #鲁棒性 #音视频 #病理语音评估

评分：**5.0/10** | 创新 1.1/2 | 技术严谨 0.9/1.5 | 实验充分 0.9/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Andini, Dianthika Puteri：机构信息未能从会议 PDF 纯文本可靠映射
- Naqvi, Syed Mohsen：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为访谈场景下的同步语音与面部视频，输出为二分类抑郁标签与连续 Beck抑郁量表（Beck Depression Inventory, BDI-II）分数，难点在于双模态可靠性随噪声、遮挡和被试差异而异质变化。首先用 openSMILE按 eGeMAPS配置提取音频韵律与频谱特征，用 OpenFace提取动作单元、注视与头姿视频特征，经标准化、对齐与定长窗口切分后拼接为多模态向量。接着由信噪比、语音活动与人脸检测成功率等信号质量指标估计模态可靠性并扩展为线性加权平均（Linear Weighted Average, LWA）权重，同时对特征幅值排序并赋予有序加权平均（Ordered Weighted Averaging, OWA）显著性权重。然后将两组权重按排序对齐后逐元相乘并做L1归一化，得到联合加权平均（Joint Weighted Average, JWA）向量并送入固定两层多层感知机（Multilayer Perceptron, MLP）完成分类或回归。与隐式端到端融合不同，该方法不增加可学习融合参数而显式解耦可靠性与显著性。在 AVEC2014上固定 MLP设置下取得分类准确率85.7%与AUC 0.88，回归均方根误差（Root Mean Square Error, RMSE）为8.1，优于早期融合、晚期融合与梯度调制融合基线。结论仅在该数据集与受控白噪声退化音频条件下验证，未验证跨库、真实噪声、缺失模态与重度遮挡的外推能力。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://www.who.int/news-room/fact-sheets/detail/depression> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：这篇解读要帮你复述什么？

本文解读的对象是 1 篇研究音频加视频抑郁检测中融合设计的论文，目标读者是刚进入语音、音乐或音频方向的研究生。解读只依据本次收到的论文原文证据写作，不引入外部评价。需要保留的关键信息包括任务定义、特征来源、融合计算的输入输出形态、固定骨干网络的对照逻辑、分类与回归两套评价、噪声鲁棒性实验的条件，以及可复述的数字与单位写法。

输出按学习依赖展开，先讲任务与相关路线，再讲方法全景与组件计算，然后讲训练与实验条件，最后讲结果、反证与复现要点。抑郁检测在这里不是做临床诊断，而是利用说话韵律、频谱特征、面部动作单元、注视与头部姿态等行为信号，估计被试的抑郁状态或贝克抑郁量表第二版分数。白话说，模型要回答的是这个人当前的语音和表情模式更接近抑郁组还是对照组，以及严重程度分数大概是多少。英文术语是 depression detection，对应分类，depression severity estimation 或 BDI-II score prediction，对应回归。

理解这一点很关键，因为后文所有融合改进都要同时接受这两类目标的检验，而不是只在某一类指标上好看。

### 已有路线在解决什么，卡在哪里？

在自动抑郁检测里，多模态长期被视为有效策略。论文回顾指出，在受控条件下音视频联合系统往往优于单模态系统，基准数据集 AVEC2014 推动了这类系统评价。机器学习方法覆盖从经典分类器到深度网络，输入覆盖语音、文本、生理与视频信号，还有针对注意力缺陷多动障碍等相关心理健康任务的视频行为建模与声学加语言特征研究。这些工作说明多模态行为筛查有潜力，但也暴露出 3 个反复出现的困难。

第一是模态可靠性异质，音频会被噪声污染，视频会被遮挡、光照变化与被试差异影响。第二是可解释性不足，许多融合把权重交给端到端学习隐式决定，遇到退化时难以控制哪一路该被压制。第三是鲁棒性验证不足，干净集上的提升不等于噪声下的稳定。早期融合（Early Fusion，简称 EF）与晚期融合（Late Fusion，简称 LF）是两类常用基线，前者拼接特征，后者融合判决，论文还引入梯度调制融合（Gradient Modulation Fusion，简称 GMF）作为较强的可比对象。

聚合算子理论提供了另一条思路，用显式加权平均算子调节多模态贡献与特征显著性，已在情感与心理健康应用中显示出结构化融合行为。本文的定位不是提出更大的骨干网络，而是把融合设计本身作为自变量，检验显式可靠性与显著性建模能否带来稳定增益。

**早期融合 × 晚期融合：** 早期融合是在特征层直接拼接音频和视频向量再送入模型，晚期融合是各模态各自判决后再平均或投票，二者分工不同但都缺少对异质可靠性的显式控制，早期融合容易被污染模态拖累，晚期融合难以利用细粒度特征互补，本文用联合加权平均替代它们的原因正是要在拼接之后、学习之前插入一个可解释的可靠性与显著性调节环节。

### 问题到底是什么：异质可靠性带来什么具体麻烦？

论文要解决的问题可以沿着一个会话样本具体化。假设一段人机访谈同时录到音频和视频，音频端混入白高斯噪声，视频端人脸检测基本正常。如果采用直接拼接，噪声音频的每 1 维特征都会进入后续网络，网络只能靠学到的参数隐式忽略它们，一旦训练时没见过这种噪声，测试时就容易被带偏。如果采用各模态独立判决再平均，音频分支的错误判决会直接拉低平均结果，而音频内部仍可能有部分相对鲁棒的特征被浪费。

更麻烦的是可靠性随时间变化，同一被试在不同窗口的语音活动、信噪比与人脸检测成功率并不相同，固定权重无法适应。因此问题不是缺一个更大的时序模型，而是缺一个在融合点就能表达现在更信谁、特征里更看重谁的机制。论文把这个问题拆成两层，第一层是模态级可靠性，第二层是特征级显著性，要求融合在不增加可学习融合参数的前提下同时表达这两层，并且输出仍保持向量形态以便送给标准骨干网络。

这个约束决定了后文为什么选择两个加权平均算子的组合，而不是引入注意力模块或门控网络。

### 方法全景：一个样本如何走完输入到输出？

沿一个样本走一遍流程最容易抓住全貌。输入是同步的音频波形与视频图像序列。音频侧用 openSMILE 按 eGeMAPS 配置提取特征，视频侧用 OpenFace 提取包括动作单元、注视与头部姿态在内的面部表情特征。白话说，eGeMAPS 是一组为情感与副语言分析设计的语音参数集，OpenFace 是一套人脸行为分析工具，二者把原始信号变成定长的特征向量。接着对特征做标准化、时间对齐并切成固定长度窗口，得到音频向量与视频向量。

融合阶段把两路向量拼接成一个多模态向量，再用联合加权平均（Joint Weighted Average，简称 JWA）算出与原向量同维度的加权表示。这个表示送入骨干网络得到输出，分类用 Sigmoid 输出抑郁概率，回归用恒等映射输出连续分数，最后用多数投票或均值池化聚合成会话级预测。需要强调的是，论文用 4 种骨干做一致性检验，包括两层多层感知机（Multilayer Perceptron，简称 MLP）、1 维卷积网络（1D-CNN）、双向长短期记忆网络（Bi-LSTM）与轻量 Transformer，但主表都固定用两层 MLP，目的是把结构复杂度锁死，让性能差异只能归因于融合设计。

图注描述的框架包含两个子图，一是 JWA 结合可靠性与显著性，二是固定的两层 MLP 训练路径，但本次未收到图像像素，因此不描述图中坐标、颜色或模块位置，只按正文复述数据流向。

### 可靠性一路如何计算：线性加权平均管什么？

线性加权平均（Linear Weighted Average，简称 LWA）管的是模态值得信多少。做法是先给每个模态算一个可靠性分数，音频侧依据信噪比与语音活动，视频侧依据人脸检测成功率，然后把这些分数归一化成模态权重。归一化的含义是所有模态权重之和为 1，权重越大代表该模态当前越可靠。接着把模态权重扩展到特征维度，同一模态的所有特征共享同一个权重。例如音频有权重，视频有权重，那么拼接向量中属于音频的每 1 维都乘以音频权重，属于视频的每 1 维都乘以视频权重。

聚合形式是加权求和，即每个特征值乘以对应权重再相加。LWA 的优点是控制直接，噪声来了就压低整路，但缺点也很明显，它假设同一模态内所有特征同等重要，无法区分该模态内部哪些维度更具判别力。论文明确指出这一点，所以只用 LWA 是不够的，必须引入第二路对特征个体差异建模。

**线性加权平均 × 有序加权平均：** 线性加权平均负责模态级可靠性分工，它给同一模态内所有特征共享同一个权重，音频不可靠时整体压低音频、有序加权平均负责特征级显著性分工，它先把拼接后的多模态特征按取值大小排序再给排在前面的位置分配更大权重，二者搭配的理由是只压模态会误伤该模态中仍好的特征、只排序会无视模态整体被噪声污染，组合后形成既看模态质量又看单个特征排序位置的联合权重。

### 显著性一路如何计算：有序加权平均管什么？

有序加权平均（Ordered Weighted Averaging，简称 OWA）管的是特征里谁排前面。做法是把拼接后的多模态特征按取值从大到小排序，得到排序后的向量与排序索引，同时准备一组显著性权重，要求每个权重非负且总和为 1。聚合形式是排序后的特征依次乘以对应位置权重再求和，排在前面的特征获得更大的影响。白话说，OWA 不看特征原来属于音频还是视频，只看排序后的名次，名次靠前就多听它的。

这种设计能突出当前样本中取值显著的维度，但它本身不感知模态质量，如果噪声把某些音频特征顶到很大，OWA 可能反而放大噪声。因此 LWA 与 OWA 单独使用都有盲区。论文的联合加权平均把两路结合起来，先把可靠性权重按同样的排序索引重排，使其与排序后的特征对齐，再把重排后的可靠性权重与显著性权重逐元素相乘并做归一化，得到最终的联合权重。

关键区别是传统 LWA 或 OWA 输出标量，而这里的 JWA 输出与输入同维度的向量表示，即联合权重与排序后特征逐元素相乘，保留特征级结构的同时显式编码两类信息。该表示可直接送给标准骨干网络，且不引入额外的可学习融合参数。

**模态可靠性 × 特征显著性：** 模态可靠性回答这个模态现在值不值得信，依据是信噪比、语音活动、 faces 检测成功率这类信号质量指示，特征显著性回答在这批特征里谁应该排前面，依据是排序后的位置权重，二者搭配的原因是真实采集里会出现音频整体变差但视觉个别动作单元依然清晰的情况，组合意义是让融合同时完成整体降权和个体提权，而不是用一个标量把所有差异抹平。

### 训练与推理如何组织：什么被更新，什么被固定？

训练部分需要先说清什么在学、什么不学。融合本身没有可学习参数，联合权重由可靠性分数与排序位置决定，不通过梯度更新。被更新的是骨干网络的参数。论文报告所有骨干都用 Adam 优化器，固定学习率为 10 的负 3 次方，并用验证集早停防止过拟合。任务损失按目标区分，二分类抑郁检测用二元交叉熵，连续分数预测用均方误差。

输出映射也按目标区分，二分类用 Sigmoid 得到概率，回归用恒等映射直接输出分数。推理时先按固定窗口切分并逐窗预测，再做会话级聚合，分类用多数投票，回归用均值池化。骨干的具体形态按原文交代，两层 MLP 用全连接加 ReLU 作为低复杂度参照，1 维卷积用两层卷积加全局池化捕捉局部时序模式，双向长短期记忆网络用堆叠双向循环层建模时序依赖，Transformer 用多头自注意力捕捉更长范围交互。

原文未报告批大小、窗口长度、早停耐心值、随机种子与参数量，梯度如何穿过排序与逐元素加权等细节也未给出显式说明，因此不能从模型名称推定具体实现，只能复述已报告的优化器、学习率、损失与聚合规则。缺失的不是技术错误，但在复现时必须补记。

### 实验条件：数据、划分与指标方向是什么？

实验在 AVEC2014 音视频抑郁数据集上进行，该数据集包含超过 300 段人机交互访谈并标注贝克抑郁量表第二版分数。官方任务侧重连续分数回归，但本文同时做回归与二分类以检验融合在不同学习目标下的表现。分类把量表分数以 14 为阈值划为抑郁与对照两类，遵循多模态抑郁检测中的常见做法。特征处理链为归一化、时间对齐与固定窗口切分，会话级聚合规则如前所述。

比较对象包括单模态音频、单模态视频、早期融合、晚期融合、梯度调制融合，以及只用 LWA 与只用 OWA 的消融变体。主表统一用固定的两层 MLP 骨干，以隔离融合效应，另用多骨干实验考察趋势是否随结构变化。评价指标方向明确，分类看准确率、F1 分数与 ROC 曲线下面积（Area Under Curve，简称 AUC），越高越好，回归看均方根误差（Root Mean Square Error，简称 RMSE）与平均绝对误差（Mean Absolute Error，简称 MAE），越小越好，以及一致性相关系数（Concordance Correlation Coefficient，简称 CCC），越大越好。鲁棒性通过向音频模态加白高斯噪声构造 10 分贝与 0 分贝两种退化条件，观察相对干净条件的性能下降。

**分类 × 回归：** 分类把贝克抑郁量表第二版分数以 14 为界划为抑郁与对照两类并用多数投票得到会话级标签，回归直接预测连续的量表分数并用均值池化得到会话级分数，二者共用同一套特征提取与融合流程，搭配评价的理由是分类看判别能力、回归看严重程度估计精度，只有两类任务同时稳定才能说明融合不是只对某一种损失函数有效。

### 主结果显示什么：在干净条件下谁赢，赢多少？

先提出比较问题，在骨干固定为两层 MLP、特征与训练流程相同的条件下，联合加权平均是否同时在分类三项指标与回归三项指标上优于单模态与常用融合。指标方向按上节约定，分类越高越好，回归误差越小越好、一致性越大越好。下表整理分类侧的可运行对照，单模态与本方法数字均有原文连续原句覆盖，早期融合与晚期融合等基线的完整数字见原文表格，解读时不把未被连续原句覆盖的数字硬写入本表。

| 方法 | 数据集 | 准确率 | F1 分数 | AUC | 条件说明 |
| --- | --- | --- | --- | --- | --- |
| 音频单模态 | AVEC14 | 76.4% | 0.74 | 0.78 | 可运行单模态基线 |
| 视频单模态 | AVEC14 | 80.1% | 0.77 | 0.82 | 可运行单模态基线 |
| 本方法 JWA | AVEC14 | 85.7% | 0.83 | 0.88 | 同骨干下联合加权融合 |

表后解释需要同时看到收益与代价。分类侧本方法相对两路单模态都有提升，相对视频单模态准确率提升约 5.6 个百分点，F1 与 AUC 也同步提高，报告显示它还优于早期融合、晚期融合、梯度调制融合以及单独使用两路加权的变体。回归侧原文报告本方法取得 8.1 的均方根误差、6.1 的平均绝对误差与 0.44 的一致性相关系数，优于主表中的全部基线。

这里要区分百分点与相对百分比，准确率从 80.1% 到 85.7% 是 5.6 个百分点的绝对提升，不能说成提升 5.6%。未胜出项也应点名，视频单模态在干净条件下强于音频单模态与早期融合，说明直接拼接并不总是带来增益，这正是融合设计需要显式可靠性控制的证据。

**均方根误差 × 一致性相关系数：** 均方根误差衡量预测分数与真实量表分数的绝对偏离，越小越好，一致性相关系数同时衡量相关性和绝对一致性，越大越好，二者搭配的原因是只看误差可能掩盖系统性偏置，只看相关可能掩盖偏离幅度，组合起来才能判断回归既贴近数值又保持趋势一致。

### 回归与外部对照如何读：数字口径一致吗？

第二个比较问题是回归侧的绝对误差与外部代表性方法如何对照，以及不同指标口径能否直接比较。公平条件是同一数据集上的已发表数值，但外部对照的特征、划分与实现细节并不完全一致，因此只能做定位参考，不能当成同条件胜负。下表用原文连续原句可覆盖的数字整理回归定位，早期与晚期融合等主表基线的逐项数字仍以原文表格为准，本表只呈现有逐字证据的行。

| 方法 | 数据集 | RMSE | MAE | CCC 与备注 | 口径 |
| --- | --- | --- | --- | --- | --- |
| 音频单模态 | AVEC14 | 9.6 | 7.3 | 连续原句未给 CCC | 本研究复现基线 |
| 视频单模态 | AVEC14 | 9.1 | 6.9 | 连续原句未给 CCC | 本研究复现基线 |
| 本方法 JWA | AVEC14 | 8.1 | 6.1 | 0.44 | 同骨干下联合加权融合 |
| He 2018 音频方法 | AVEC13 | 10.01 | 8.20 | 外部文献报告值 | 跨数据集仅供定位 |
| Jan 2018 音视方法 | AVEC14 | 7.96 | 8.42 | 外部文献报告值 | 同数据集但实现不同 |

表后解释要强调口径差异。原文的表 3 汇总了多项代表性方法的报告值，包括回归误差更低的某些多模态工作，因此不能把本方法 8.1 的均方根误差理解为全文献最优。

论文的措辞是可比或更优，且强调自身用更简单的骨干与显式聚合机制。支持的判断是，在固定两层 MLP 的内部对照里联合加权一致优于单模态与常用融合。限制是跨文比较受数据集版本、特征与划分影响，例如 He 的工作在 AVEC13 上报告，Jan 等人的数值口径与本研究不完全对齐，直接排序会误导。复现时应优先复现内部主表，而不是只盯着外部表 3 的数字。

### 拿掉一路会怎样：消融与噪声反证支持什么？

消融要回答可靠性与显著性是否缺一不可。论文设置只用 LWA 与只用 OWA 两个变体，在同一两层 MLP 下比较。原文报告两路单独使用只能带来部分提升，都达不到联合配方的均衡表现，分类与回归趋势一致。这支持有效融合需要同时建模模态可靠性与特征显著性的判断，但应表述为在该数据集与该骨干下观察到的支持关系，而不是拿掉后必然如何的因果断言。噪声反证更关键，鲁棒性实验把音频分别降到 10 分贝与 0 分贝。

原文描述所有方法误差都上升，但联合加权的退化更平缓，在 0 分贝时仍保持明显更低的均方根误差，分类在 0 分贝仍保留有意义的判别能力。机制解释是联合权重压制了不可靠音频分量，同时保留稳定的视觉互补信息。多骨干趋势提供另一层反证，两层 MLP 在干净条件下取得最强整体表现且在噪声下稳定，Transformer 在干净回归上取得稍高的一致性相关系数，但 1 维卷积与双向循环结构误差稍高且对低信噪比更敏感。

这支持性能增益主要来自融合而非结构堆叠，但总体趋势不等于每组每步都成立，复杂结构在某些指标上仍可能反超。

### 边界在哪里：哪些验证还没有做？

区分已报告、有限解释与未验证推测很重要。已报告的是 AVEC2014 上固定骨干的分类与回归提升，以及受控白噪声下的退化曲线。有限解释的是可靠性分数的具体计算，原文只举例信噪比、语音活动与人脸检测成功率，未给出阈值、平滑窗口或跨模态归一化的完整公式，因此不同复现者可能算出不同的模态权重。

未验证的是真实部署中的复杂退化，实验只对音频加白高斯噪声，未评测混响、压缩失真、多人声干扰、视频遮挡与光照剧烈变化，也未报告延迟、参数量、训练时长与推理开销。论文提到未来扩展到更多模态与注意力缺陷多动障碍等任务，这属于待验证方向，不能当成已有效果。此外，世界卫生组织抑郁事实页在本文证据中状态可用，但它只提供疾病背景，不支撑任何模型效果判断。

相关性也不是因果，语音与表情特征和量表分数相关，不代表模型理解抑郁成因，更不承诺降低误诊率。教学例子必须标明是例子，例如用音频全程静音来想象可靠性权重应趋于零，这只是帮助理解分工的假设，不代表原文评测过该条件。

### 要复述与复现：先做什么，按什么顺序检查？

复现的第一步是锁死信息条件。按原文准备 AVEC2014 的访谈数据与量表标签，用 openSMILE 的 eGeMAPS 提音频特征，用 OpenFace 提动作单元、注视与头部姿态，做归一化、时间对齐与固定窗口切分，分类阈值取 14，早停基于验证集，优化器用 Adam 且学习率固定为 10 的负 3 次方。第二步是先实现固定两层 MLP 的单模态、早期融合与晚期融合基线，确认视频强于音频、直接拼接不一定增益的现象可重现，再加入只用 LWA 与只用 OWA 的变体，最后实现联合权重的排序、对齐、逐元素相乘与归一化。

检查顺序建议按样本级向量维度、排序索引与权重对齐、会话级投票与池化、分类与回归指标方向逐项核对。数值核对要同时核对数据集、模型、阶段、指标、单位与聚合对象，准确率带百分号，F1、AUC 与一致性相关系数为裸值，均方根误差与平均绝对误差为分数单位，信噪比条件 10 分贝与 0 分贝的末尾单位覆盖整组写法不要拆开。

代码开源、权重下载与系统可运行是三件不同的事，原文未提供可运行仓库信息，因此复现成功只能定义为按上述流程重放出同方向的内部对照趋势，而不是复刻某个绝对数字。还需补做的验证包括报告随机种子方差、补齐可靠性分数的完整计算、增加视频退化与真实噪声，以及测量训练与推理成本。

### 何时值得尝试这种融合：收束判断是什么？

当任务同时满足 3 个条件时，这种显式融合值得优先尝试。第一是输入包含可靠性明显异质的两路信号，例如语音易被噪声污染而视频相对稳定。第二是希望融合点可解释可控制，不想把可靠性判断完全交给黑箱参数。第三是骨干预算有限，只能用两层感知机这类轻量结构，此时把精力放在加权设计上可能比堆结构更有效。论文显示，在满足这些条件时，联合加权在分类与回归上都带来一致增益，并在强噪声下退化更平缓。

但当噪声类型超出白高斯假设、可靠性指示本身失效，或特征维度与窗口划分大幅改变时，排序与权重行为需要重新验证。最终判断应保留为报告级表述，原文报告联合加权优于内部基线并具竞争力，支持融合设计重于骨干堆叠的解释，可能的推广到其他模态与相关疾病仍待验证。学习时记住分工口诀，可靠性决定哪一路值得信，显著性决定这批特征先听谁的，联合权重让二者在同一向量表示里同时生效。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=2)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6ef6df1639b/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf#page=3)

另有 8 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
