---
title: "Enhance-then-Balance Modality Collaboration for Robust Multimodal Sentiment Analysis"
date: 2026-09-13
draft: false
description: "针对文本主导、音频视觉被压制且噪声鲁棒性差的问题，EBMC 用解耦加补偿先增强弱模态、再用能量协调与样本级信任蒸馏拉平贡献，在 MOSI/MOSEI/IEMOCAP 上取得可复述的提升，代价是两阶段多损失联合调参与额外蒸馏计算。"
tags: ["多模态学习", "鲁棒性", "音视频", "语音情感识别"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "11f736ea67ce5c83e19c8239e7634f7dea2d2ec22961c0ed9bea9756c6feec68"
paper_digest_api_reader_plan_sha256: "71235dbd713132ee12e24fc7af94bcad4ba5c995378953054cfc5973ad301933"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "05c3f0e92c9dc37de24cafff23c61f3d1be6961121b817e9d81f771fc2de9e3c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b4f3667d24041b46b4b4343f9a4deca9d09a13af0cdfd9a15aef5ae9531d20b9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2a75238d2933eb3b289d0b6c40130100c907272bcb47876a8849c9b663b09f76"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "cea55971f865a3ec6a8b9c050af7797519dad1127595cc534cf4d833a982a35e"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 先增强弱模态再拉平贡献：EBMC 如何缓解文本主导的多模态情感竞争

> 英文题目：*Enhance-then-Balance Modality Collaboration for Robust Multimodal Sentiment Analysis*

> 会议身份：`conference:cvpr:2026:conference-paper-id:He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf)

标签：#多模态学习 #鲁棒性 #音视频 #语音情感识别

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Kang He：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzhe Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Xinrong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Fei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chong Teng：机构信息未能从会议 PDF 纯文本可靠映射
- Donghong Ji：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

多模态情感分析以文本、音频、视觉三路序列为输入，预测情感强度分数或情绪类别，难点在于文本模态主导训练并压制弱模态，而噪声与缺失进一步加剧竞争失衡。本文提出先增强后平衡协作框架EBMC，第一步由模态语义解耦负责分离共享语义与特有语义并保留单模态判别力，其输出的解耦特征进入第二步。第二步由跨模态互补增强为音频与视觉等弱模态注入他模态线索，放大其判别性表示并为后续协调提供更完备输入。第三步由能量引导模态协调构建多模态能量景观并拉平模态能量，以能量梯度隐式再平衡各模态贡献，缓解文本主导的融合失衡。第四步由实例感知模态可信蒸馏按样本级不确定性估计各模态可靠性，动态调节融合权重并将可靠知识蒸馏至联合表示。与显式缩放学习率或截断梯度不同，该方法把竞争建模为能量景观上的均衡与梯度流，具有隐式协调与细粒度可信加权的实际意义。在CMU-MOSI基准下，EBMC的7分类准确率Acc-7为50.34，高于Semi-IIN的7分类准确率Acc-7 46.50。其结论适用边界受限于短视频评论与表演式情感语料，对强噪声口语与长时对话等外推尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/kangverse/EBMC> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要预测什么，必须记住哪些信息？

这篇论文研究的是多模态情感分析，输入是同一段 opinion 视频或对话片段中的 3 路信号：文本、视觉、声学。文本是转录语句，视觉是面部动作单元序列，声学是韵律与频谱类描述子。目标有两类写法：在 CMU-MOSI 与 CMU-MOSEI 上预测情感强度分数，范围从负 3 到正 3，既可做回归也可按阈值转成二分类与七分类准确率；在 IEMOCAP 上预测离散情绪类别，论文评估 happy、sad、angry、neutral 4 类。读者复述时必须保留三件事：第一，模态异质且可靠性不等，文本通常情感判别力最强。

第二，评价既看分类准确率与 F1，也看相关系数与平均绝对误差，方向是前者越高越好、后者越低越好；第三，鲁棒性评价包含模态缺失与帧级随机丢失，丢失率从 0 到 0.9 取平均。输出是融合后的情感预测，由最后的情感分类器给出。论文代码当前可用，地址为公开仓库链接，本文写作时资源状态显示可用，因此可以写已公开可获取。后续所有方法与实验讨论都围绕同一个样本流程展开：3 路特征序列进入编码器得到模态表示，再经过增强与平衡模块，最后融合分类。

### 已有路线解决了什么，还缺哪一块？

按同输入同目标对照，已有工作可分为表示学习与融合两条线。表示学习线如 MISA 及其扩展，用共享与特有分解、蒸馏与对比学习刻画各模态对情感的贡献；融合线包括早期融合、晚期融合与混合融合，以及注意力、图、门控与层次模型，近期还有先对齐再融合的思路。这些工作提高了特征表达与跨模态交互，但原文指出它们隐含假设各模态均衡可靠，对模态不平衡与鲁棒性处理有限。

第二条线是不平衡多模态学习，现象是联合训练时主导模态梯度更大、不断强化自身，弱模态更新不足，形成马太效应。对策包括按损失或学习动态调学习率与梯度、用 Fisher 信息正则、解耦融合流、分离单模态编码器加对比目标、原型再平衡等。这类方法多在优化层面动手，对弱模态的语义增强有限。第 3 条线是鲁棒多模态学习，应对噪声、退化与缺失，包括不确定性建模、原型更新、自蒸馏与跨模态重构、共享特有表示学习、提示对齐、多尺度注意力与文本中心对抗提示等。

EBMC 的定位是把鲁棒性嵌入核心学习过程：先在表示层增强弱模态，再在优化与融合层自适应压制噪声模态并补偿跨模态信息。理解这 3 条线的分工，就能明白后文为什么需要 2 阶段设计，而不是只调梯度或只做融合。

### 文本主导为什么会拖累整体？

论文要解决的核心矛盾是模态竞争。文本表达力强、梯度贡献大，训练中容易占据主导；音频视觉线索更弱更稀疏，且更易受噪声样本与缺失信号影响，难以被充分优化。时间一长，弱模态越来越边缘化，尤其在噪声或真实缺失条件下，融合性能与鲁棒性都下降。图 1 把这一矛盾画成了可核对的示意图，左侧是问题，右侧是解法总览。

下图展示模态不平衡的直观形态与 2 阶段思路的对应关系，阅读时把左右两半分开看，先看问题再看分工。

> **看图路径：** 1. 先看左侧球体中文本音频视觉三团特征与黑色噪声点的分布位置；2. 再看文本被标注主导与模态不平衡红色双箭头的指向；3. 最后对照右侧第一阶段解耦加补偿与第二阶段协同加信任的四个小图标

[![原论文 Figure 1：Illustration of modality imbalance: text tends to domi- nate learning while weaker modalities are…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6e0f4412952d/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6e0f4412952d/figure-1.png)

*论文图 1。原论文 Figure 1：“Illustration of modality imbalance: text tends to domi- nate learning while weaker modalities are easily suppressed and affected by noisy samples.”。*

该图左侧用 3 维球体表示表示空间，文本团块被标注主导，音频与视觉团块混入黑色噪声点，红色双箭头标出模态不平衡的距离；右侧上方为第一阶段的解耦与补偿图标，下方为第二阶段基于能量的梯度流与模态信任蒸馏图标，箭头表示先增强再平衡的顺序。它的教学价值在于把后文 4 个模块 1 次定位：解耦管干净切分，补偿管跨模态搬运，能量协同管全局平衡，信任蒸馏管样本级可靠加权。需要提醒的是，该图是示意不是实测分布，不能从中读出具体数值或收敛步数，定量判断以后文表格为准。

### EBMC 的两阶段流水线是怎样串起来的？

沿一个样本走一遍有助于建立依赖顺序。输入是 3 路特征序列，记为文本、视觉、声学的序列矩阵。先经各自编码器得到模态表示向量。第一阶段做增强：模态语义解耦把每个表示拆成共享成分与特有成分，跨模态互补增强再为每个模态引入其他模态的共享与特有成分，生成增强特征，同时保留原始语义结构与下游可判别性。第二阶段做平衡：能量引导的模态协同构建多模态能量面，通过能量差与能量梯度动力学调节优化贡献。

实例感知的模态信任蒸馏用教师概率分布的方差估计样本级可靠性，自适应调整融合与蒸馏权重。最后把平衡后的多模态特征送入情感分类器，输出情感强度或类别。

**能量差最小化 × 能量梯度流：** 能量差最小化负责把各模态能量标量拉向均衡，惩罚主导模态过低能量带来的压制，能量梯度流负责对表示施加沿能量负梯度的更新并惩罚不稳定尖锐梯度，二者搭配的理由是只对齐能量大小不够、还需约束优化轨迹的平滑性，组合意义是形成可微的负反馈训练动力学，实现隐式梯度再平衡。

下图是整体架构图，包含从特征提取到分类器的四列，先确认列间箭头主路径，再看每列内部符号。

> **看图路径：** 1. 沿最左侧文本视觉声学三路输入向右追踪到第一阶段与第二阶段再到分类器；2. 观察第一阶段上方解耦补偿点云与下方增强交叠云中星形补偿符号的位置；3. 查看第二阶段能量梯度流曲面箭头与概率嵌入加柱状信任权重的对应关系

[![原论文 Figure 2：The overall architecture of our proposed model EBMC.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6e0f4412952d/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6e0f4412952d/figure-2.png)

*论文图 2。原论文 Figure 2：“The overall architecture of our proposed model EBMC.”。*

该图从左到右依次为多模态特征提取、解耦与补偿、协同与信任、情感分类器。第一列显示文本语句、视觉人像帧与声学波形各自经网络编码；第二列上方点云加星形表示补偿后的分布，下方交叠云与损失符号表示增强约束；第三列上方为能量梯度流曲面与柱状能量均衡示意，下方为概率嵌入分布与信任柱状图；第四列为融合后的多模态特征云与多层线性加激活分类器，底部色条表示从负向到正向。

阅读时不要把星形当成真实样本点，它表示补偿引入的成分；也不要从柱状高度读精确数值，精确比较以后文数字表为准。

### 第一阶段如何先把弱模态变强？

第一阶段包含两个紧耦合的组件。模态语义解耦用两个轻量多层感知子网络，从每个模态表示中分别抽取跨模态共享语义与模态特有信息。为了让二者分工明确，论文施加三项约束：共享成分跨模态用对比损失做不变对齐，特有成分用批内余弦相似度最小化去冗余，每个特有成分再经单模态预测器计算任务损失以保留预测能力，三项按权重组合成解耦总损失。这样做的目的是压制语义干扰，给后续跨模态协作提供干净可控的特征。

跨模态互补增强针对文本仍占优、视觉听觉线索微妙的问题，为每个模态把自身的共享与特有成分与来自其余模态的共享与特有成分一起送入轻量增强网络，生成增强特征，可选加入随机扰动增加多样性。训练目标包括重构项与任务项：前者约束增强特征不偏离原始语义结构，后者用下游预测头保证增强后仍可判别。按原文表述，该模块放大了弱模态贡献，为能量协同模块提供更具信息量的表示。

**模态语义解耦 × 跨模态互补增强：** 模态语义解耦负责把每个模态表示拆为共享成分与特有成分并施加对齐与去冗余约束，跨模态互补增强负责把其他模态的共享与特有成分补给当前模态，二者搭配的理由是先拿到干净可控的成分再做跨模态搬运，避免直接融合时文本噪声与语义干扰淹没弱模态，组合后新增的作用是让音频视觉在保留自身预测能力的同时获得可判别的情感细节。

复述时要注意依赖顺序：必须先有解耦得到的成分划分，增强网络才有明确的搬运来源；若跳过解耦直接搬运原始特征，容易把主导模态的干扰一起搬过去。原文没有给出增强网络的具体层宽与扰动分布细节，复现时应以公开代码为准，正文只保留上述输入输出与两项损失的搭配关系。

**共享语义 × 特有语义：** 共享语义指跨文本音频视觉可对齐的情感公共部分，用对比不变性约束拉近，特有语义指韵律、表情等单模态独有细节，用批内余弦去冗余与单模态预测损失保留，二者搭配的理由是既要可融合又不能丢失弱模态的独特线索，组合意义是为后续增强网络提供明确的搬运对象与保留底线。

### 第二阶段如何拉平贡献并应对噪声样本？

第二阶段同样包含 2 个组件，分管全局优化与样本级融合。能量引导的模态协同把多模态协同重新解释为基于能量的模型问题，不直接手调损失权重或梯度，而是构造结构化能量面并通过能量差最小化与能量梯度动力学来协调。每个模态的能量势综合三项：表示幅度、模态任务损失与预测不确定性，其中不确定性是教师预测分布的熵的期望。弱模态通常因噪声或判别力不足而能量更高。

能量差目标惩罚模态间能量平方差，促使各模态趋向均衡，使欠利用模态获得更多优化关注。能量梯度流采用沿能量负梯度的表示更新，形成负反馈：能量过低的过自信主导模态受到抑制性梯度，高能量模态自然获得更大修正量；完整目标还惩罚能量梯度范数以促进平滑稳定收敛。实例感知的模态信任蒸馏解决融合阶段的样本级脆弱性。

对每个样本，解耦阶段的教师模型给出预测分布，取其均值与方差，方差表示该模态对该样本的不确定性，经指数转换为置信度，再经对数归一化因子平滑以抑制过大方差的不稳定影响，二者相乘归一化得到自适应蒸馏权重。学生融合预测与教师输出之间计算带温度的置信加权 KL 散度，可靠模态权重高、噪声模态被降权。原文强调该机制在推理时能动态估计可靠性，重度损坏的模态会被压制，更可靠的模态被上调，这是固定权重或模态级融合策略做不到的。

**能量引导的模态协同 × 实例感知的模态信任蒸馏：** 能量引导的模态协同负责在优化动力学层面拉平各模态能量与能量梯度，抑制过低能量的主导模态、放大高能量弱模态的修正量，实例感知的模态信任蒸馏负责在每个样本上估计各模态预测方差并转化为融合与蒸馏权重，二者搭配的理由是前者解决全局训练竞争、后者解决样本级噪声与缺失，组合后新增的作用是全局平衡加局部可信加权的同时实现鲁棒融合。

### 总目标如何组织训练，哪些细节已交代、哪些缺失？

总训练目标把任务损失与 4 个模块损失加权相加，权重分别控制解耦、增强、能量协同与信任蒸馏的贡献。任务损失采用交叉熵或回归损失的形式，论文在方法部分给出分类写法的公式，回归时按任务损失替换。实现上每个阶段训练 100 个轮次，批量大小为 64，在单张大显存 GPU 上进行，超参数中有多个 0.1 与一个 0.5 的设置，依据验证集性能选择。特征层面为保证公平比较沿用前人设置：语言用预训练语言模型隐状态加词向量，视觉用面部动作单元特征，声学用低层声学描述子。

需要明确指出的缺项是：原文未完整报告各编码器是否冻结、何时重置、梯度在增强网络与教师学生之间的确切截断位置，以及 2 阶段是串行冻结还是联合微调的全部调度细节。除已给出的损失权重与训练轮次外，不应从模块名称推定实现，复现时必须核对公开代码中的优化器、学习率调度与阶段切换逻辑。本文不补写拿掉某项后必然如何，只在消融节引用原文已验证的对照结果。

### 在什么数据、划分与指标下比较，条件是否一致？

实验覆盖 3 个常用基准：CMU-MOSI 含 2000 余条观点视频片段，CMU-MOSEI 含 2 万余条视频片段，两者均带负 3 到正 3 的情感强度标注，支持细粒度回归评价；IEMOCAP 含 4000 余条视频片段，带类别情绪标注，论文按 4 类情绪评估 F1。MOSI 与 MOSEI 的指标包括二分类准确率、七分类准确率、F1、相关系数与平均绝对误差，其中二分类准确率与 F1 按零的包含与否报告两种形式；IEMOCAP 按 4 类 F1 与平均值评估。所有结果为 5 次不同随机种子的平均。

比较对象包括面向完整模态的表示与融合基线，以及面向缺失模态的鲁棒基线。特征抽取与前人保持一致以保证公平。鲁棒性协议分两类：一是模态级缺失，在 MOSEI 上测试仅音频、仅文本、仅视觉及两两组合共 6 种条件；二是模内缺失，按不同比例随机丢弃帧级特征并在多个丢失率上取平均。硬件与批量等预算已在训练节交代。

阅读数字时要注意聚合对象是测试集平均而非单样本，百分点差与相对百分比含义不同，不能混用；不同指标的差值也不能放在同一模型列下比较。

### 主结果在完整模态下赢在哪里，代价是什么？

本节回答完整模态下的判别力问题：与可运行的已有方法相比，EBMC 是否在相同特征与协议下取得更高准确率与更好的强度拟合。评价方向是准确率、F1 与相关系数越高越好，平均绝对误差越低越好。下图先从贡献分布与准确率的联动上给出机制解释，再用数字表核对。

下图比较有无能量协同时的模态贡献堆叠与对应准确率，重点看文本段高度与右侧准确率柱的联动。

> **看图路径：** 1. 对比每组数据集中左侧 EBMC 堆叠条与右侧去掉能量协同后堆叠条的文本段高度变化；2. 核对左侧贡献百分比轴与右侧准确率轴的双轴对应关系；3. 观察三个数据集上去掉协同后准确率橙色柱的一致下降幅度

[![原论文 Figure 4：The impact of EMC on modality contributions and over- all performance.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6e0f4412952d/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6e0f4412952d/figure-4.png)

*论文图 4。原论文 Figure 4：“The impact of EMC on modality contributions and over- all performance.”。*

该图对 MOSI、MOSEI 与 IEMOCAP 3 组分别画出两根贡献堆叠条与两根准确率柱。可见去掉能量协同后文本段占比超过一半并压制音频视频，加入协同后文本占比下降、音频视频占比上升，同时右侧准确率柱一致升高。像素不能精确读出百分比小数，因此只做方向性判断：协同带来了更均衡的利用与性能增益，精确数值以数字表为准。

**教师置信度 × 蒸馏权重：** 教师置信度由解耦阶段单模态教师的预测方差经指数与对数归一化得到，方差越小置信越高，蒸馏权重把各模态置信归一化后用于加权学生融合预测与教师分布的 KL 散度，二者搭配的理由是让可靠模态在样本级主导蒸馏、噪声模态被压制，组合意义是在帧丢失与模态缺失下仍能做细粒度重加权，这是固定权重融合做不到的。

下表是 IEMOCAP 4 类情绪的 F1 对照，原表可直接选择，包含多条可运行基线与 EBMC，适合核对细粒度情绪上的普适性。表前问题是：在对话情绪识别这种文本之外的韵律表情更关键的任务上，EBMC 是否仍有增益。公平条件是相同 4 类划分与 F1 指标，方向是越高越好。

| Self-MM [60] | 90.8 | 86.7 | 88.4 | 72.7 | 84.65 |
| --- | --- | --- | --- | --- | --- |
| MCTN [35] | 83.1 | 82.8 | 84.6 | 67.7 | 79.55 |
| TransM [51] | 85.5 | 84.0 | 86.1 | 67.1 | 80.68 |
| SMIL [28] | 86.8 | 85.2 | 84.9 | 68.9 | 81.45 |
| GCNet [26] | 87.7 | 86.9 | 85.2 | 71.1 | 82.73 |
| UMDF [21] | 87.9 | 86.5 | 85.8 | 70.5 | 82.68 |
| CorrKD [22] | 87.5 | 85.9 | 86.1 | 71.5 | 82.75 |
| DMD [24] | 91.1 | 88.4 | 88.6 | 72.2 | 85.08 |
| EBMC | 92.0 | 89.5 | 90.3 | 73.6 | 86.35 |

该表显示 EBMC 在 happy、sad、angry、neutral 及平均值上均处于首位，平均值高于次强的解耦蒸馏基线，支持跨任务泛化判断。但也要看到未胜出维度的含义：该表未报告缺失与噪声下的表现，不能把完整模态的胜出推广为鲁棒性胜出，鲁棒性需看后文缺失协议。代价方面，论文未测量延迟与推理开销，不能承诺更快；多模块联合训练的调参负担是实际代价，复现时需预留验证集调参预算。下表把 MOSI 与 MOSEI 上最关键的七分类准确率与 F1 增量整理为宽表，便于 1 次核对提升幅度与基线对象，数字均来自原文连续句的逐字证据。表前问题是：细粒度七分类与 F1 是否同时提升，基线是否为原文实际运行的已有方法。

| 条件 | 指标 | EBMC | 最强基线 | 提升幅度 |
| --- | --- | --- | --- | --- |
| CMU-MOSI | 七分类准确率 | 50.34% | 46.50% | 1.89% |
| CMU-MOSEI | 七分类准确率 | 57.32% | 55.89% | 1.10% |
| CMU-MOSI | F1 | 87.79% | 86.60% | 1.19% |
| CMU-MOSEI | F1 | 88.07% | 86.40% | 1.67% |

表后解释需要同时给出收益与限制。收益是七分类这种对微妙情感更敏感的指标提升明显，说明弱模态补偿带来了判别信息；F1 的同步提升说明不是牺牲某类换来的。限制是平均绝对误差与相关系数的细节未在此表展开，且该表只覆盖完整模态，不能回答缺失时的下降幅度；另外基线结果部分引自原论文、部分为复现，引用时应保留原文标注，不宜视为同一代码环境下的严格同机复跑。

### 拿掉每个模块会发生什么，特征分布如何变化？

本节回答反证问题：4 个模块各自是否必要，弱模态增强是否真实改变了特征可分性。下图用降维可视化给出直观证据，三幅图条件相同、颜色越红表示越正向。

下图对比 3 种训练设置下的 2 维特征分布，重点观察颜色混杂与分区边界的变化。

> **看图路径：** 1. 从左到右比较去掉解耦、去掉增强与完整模型三幅散点图的颜色混杂程度；2. 观察完整模型右图中两条虚线对负向蓝色与正向红色的分区效果；3. 注意中间过渡带浅色散点仍有混杂，说明模糊样本的弱模态信号有限

[![原论文 Figure 3：T-SNE visualization of features distrubution on CMU-MOSI.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6e0f4412952d/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6e0f4412952d/figure-3.png)

*论文图 3。原论文 Figure 3：“T-SNE visualization of features distrubution on CMU-MOSI.”。*

该图左幅去掉解耦时正负颜色大面积混杂、边界不清，说明未对齐时融合困难；中幅加入解耦后情感过渡更有序但仍有散点，说明共享对齐改善了分布但未完全补偿弱信号；右幅完整模型形成从左蓝到右红的渐变并出现两条虚线分区，散点向各自情感类别聚集，支持增强模块改善了弱模态表示的判断。同样不能从散点位置读出准确率数值，定量 still 以消融数字为准。下表把原文报告的消融与跨任务增益整理为宽表，表前问题是：去掉解耦、增强、协同与信任蒸馏各自带来多大 F1 变化，IEMOCAP 平均增益是多少。公平条件是同数据集同指标，方向是下降幅度越大说明该模块越关键。

| 条件 | 指标 | EBMC | 对照或下降 | 说明 |
| --- | --- | --- | --- | --- |
| IEMOCAP 平均 | F1 | 86.35% | 85.08% | 强基线平均值 |
| IEMOCAP 平均 | 提升 | 1.27% | 86.35% | EBMC 相对增益 |
| 去掉解耦 | F1 下降 | 1.63% | 1.76% | MOSI 与 MOSEI |
| 去掉协同 | F1 下降 | 2.43% | 2.87% | MOSI 与 MOSEI 最大降幅 |
| 去掉信任蒸馏 | F1 下降 | 1.02% | 0.98% | MOSI 与 MOSEI |

表后解释要区分直接报告与推测。原文报告显示去掉能量协同的降幅最大，支持模态竞争是主要瓶颈的判断；去掉解耦次之，支持干净切分是增强的前提；去掉增强与信任蒸馏也有稳定下降，支持二者分别在表示层与样本级的作用。未胜出项与边界是：该消融未报告单模态缺失下的分模块贡献，信任蒸馏在缺失场景的重要性需结合鲁棒性节的帧丢失平均结果理解；同时消融只给平均下降，未给方差与显著性，不能断言每次运行都同等幅度。

### 哪些结论还不能下，边界在哪里？

首先，原文在模态缺失与帧丢失协议下报告 EBMC 下降更小、相关系数更好，但未测量误判率分布、延迟、显存与实际帧率，因此不能承诺这些量得到改善，训练资源与推理开销应分开讨论。其次，特征依赖预训练语言模型与特定视觉声学工具链，若更换编码器或领域，文本主导程度可能变化，结论的外推需要重新验证，这属于待验证而非技术错误。

第三，表格中部分基线结果引自原论文或按引用来源复现，聚合口径与划分细节以原文为准，若表头与正文算术出现冲突，应明确标注冲突而不是自行拼凑划分来圆成一致。第四，可视化与贡献条形图只支持方向性判断，像素不能精确辨别的数值与步数不应硬写。最后，超参数中多个 0.1 与 0.5 的取值基于验证集，换数据集时可能需要重调，复现时应保留调参记录而不是沿用为定值。

### 要复现 EBMC，先做什么、用什么条件？

第一步确认资源：论文声明代码已公开且本次资源状态显示可用，因此可以按仓库链接获取代码；若链接不可达，应写本次未能确认可达而不是断言未公开。第二步准备数据与特征：按原文工具链抽取文本、视觉动作单元与声学描述子，保持与基线相同的维度与划分；不要自行更换更强的语言模型，否则公平性不再成立。

第三步按 2 阶段组织训练：先跑解耦与增强以获得干净成分与增强特征，再加入能量协同与信任蒸馏做平衡与可靠融合，总目标权重与训练轮次、批量大小按原文设置起步，并在验证集上微调。第四步复刻评价：完整模态下核对二分类与七分类准确率、F1、相关系数与平均绝对误差的两种零处理形式；鲁棒性下复刻 6 种模态组合缺失与多丢失率帧丢弃平均。记录 5 次随机种子的均值与波动，避免把单次最优当作可部署收益。

缺失的梯度截断与阶段冻结细节以代码为准，遇到与正文不一致时以代码实际行为为准并在记录中注明。

### 何时值得尝试 EBMC，如何一句话记住它？

当任务中文本明显强于音频视觉、且测试时可能遇到噪声或缺失，就值得尝试先增强再平衡的思路：先用解耦拿到可搬运的共享与特有成分，再用跨模态补偿补强弱模态，最后用能量动力学拉平全局贡献、用样本级信任权重压制不可靠模态。若数据本身各模态均衡且干净，额外模块的收益可能变小，调参成本反而显现。常见误解是把能量协同理解为手调权重，实际上它是可微的能量差与梯度惩罚形成的隐式再平衡。

另一个误解是把信任蒸馏理解为固定融合，实际上它是按样本方差动态变化的。记住它的顺序也有助于排查问题：若弱模态仍无提升，先检查解耦是否干净；若完整模态好但缺失时差，重点检查信任蒸馏的方差估计与权重归一化。总体上，EBMC 提供了一个把表示增强与模态协调统一起来的可复用框架，但是否采用仍取决于噪声条件、缺失协议与可承担的训练预算。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 9，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 10，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 11，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b32e4dba69de/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf#page=5)

另有 10 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
