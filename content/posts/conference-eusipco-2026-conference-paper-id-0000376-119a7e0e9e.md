---
title: "END-TO-END MULTI-MICROPHONE SPEAKER EXTRACTION USING RELATIVE TRANSFER FUNCTIONS"
date: 2026-09-13
draft: false
description: "该文研究混响加定向噪声下两人混合的多麦目标说话人提取，对比瞬时相对传递函数、已知波达方向和单通道声纹三种配准线索，随机位置上瞬时相对传递函数取得 9.2 dB 和 0.81 的分离与可懂度，同波达方向下仍保持 8.8 dB，代价是需要与目标同位置的无噪配准信号。"
tags: ["端到端学习", "麦克风阵列", "语音", "目标说话人提取"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000376"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "61c9cd7db0a70c232df44121b9e62312091cad92d8725699e8c31b6d432785ca"
paper_digest_api_reader_plan_sha256: "472523fceca6263d534228856f383b34964cf14ca4cd346ecaf40d5af121fdd3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2952541c6c41037eb5fc4be6fb9484e0d809fd4e149aa0b38c72dd562c117d6f"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "ca4249f3b6f39d6d69bf8976e8c8d5324fafe01b91c23d448c4bd8aa043b442d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2043ff4f8fa381ad70cfafd9759dc1f97c86fe1312622a2b8e2f95205e52f6a2"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "121d8d9f40601c27dcbffe3c5c4a6ef6d57ddd1d50f85b28565853db180dbf81"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"}]
paper_digest_primary_task: "目标说话人提取"
paper_digest_primary_method: "端到端学习"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 同位置配准的瞬时相对传递函数为何比声纹和波达方向更适合混响多麦提取

> 英文题目：*END-TO-END MULTI-MICROPHONE SPEAKER EXTRACTION USING RELATIVE TRANSFER FUNCTIONS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000376`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf)

标签：#端到端学习 #麦克风阵列 #语音 #目标说话人提取

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Eisenberg, Aviad：机构信息未能从会议 PDF 纯文本可靠映射
- Gannot, Sharon：机构信息未能从会议 PDF 纯文本可靠映射
- Chazan, Shlomo E.：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作处理混响加定向噪声下的双说话人多麦克风混合，输入为4通道混合语音与目标说话人在相同空间位置录制的无噪配准语音，输出为参考麦克风处的目标混响语音，难点在于混响多径使仅靠音色或单一波达方向难以稳定指向目标。方法链第一步由多通道混合编码器将短时傅里叶变换实虚部映射为混合嵌入，保留时频与通道结构供后续融合。第二步由配准编码器将按式估计的瞬时相对传递函数压缩并在时间维平均为单一说话人表示，使可变长配准变为固定空间条件。第三步由解码器将该表示与混合嵌入逐帧相乘融合，再经自注意力与转置卷积重构目标频谱，前两步输出均直接进入瓶颈融合。相对谱嵌入与波达方向条件，该机制直接提供与房间相关的通道间比值结构而非抽象身份或单一角度，因而在强混响及同向不同距离下更具空间选择性。在随机位置仿真测试集下，TSE-RTF的SI-SDR为9.2 dB，高于TSE-DOA的SI-SDR 8.4 dB。其适用边界在于配准需与目标同位置无噪语音且仅验证仿真LibriSpeech混响，同向不同距离外推与真实录音尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/audiolabs/anechoic-noise> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要回答什么？

本文的输入是两部分。第一部分是麦克风阵列收到的混合信号，场景里同时有两个说话人和一个定向噪声，再加传感器噪声，全部处在混响房间中。第二部分是配准信号，论文要求它与期望说话人来自完全相同的空间位置，用于提供空间线索。目标是从混合中恢复期望说话人在参考麦克风处的混响信号，而不是干净无混响的原始语音。

目标读者是刚进入语音音频的研究生，需要先建立的事实是，多通道目标说话人提取同时依赖身份线索和位置线索。身份线索回答这是谁的声音，位置线索回答声音从哪里来、经过怎样的房间传播到达阵列。论文要回答的问题是，在混响较重、存在定向噪声的 2 人混合中，瞬时相对传递函数、已知波达方向和单通道谱嵌入这 3 种配准方式，哪一种对端到端提取网络更有效。

输出是一个时域波形估计。训练用时域尺度不变信号失真比损失，评价用尺度不变信号失真比衡量分离误差，用短时客观可懂度衡量可懂度，两个指标都是越大越好。资源状态方面，本次收到的唯一第三方资源是无回声噪声库链接，状态为可用，论文用它生成定向噪声；这不代表全文代码或权重已公开。

### 已有的多通道分离和提取路线各解决哪一步？

论文把相关工作分成 3 条路线。第一条是直接处理多通道信号的深度网络，例如滤波求和网络的隐式实现，优点是端到端，缺点是缺少波束形成器结构，空间特性不易解释。第二条是估计波束形成准则或波束形成权重，保留滤波求和的空间结构，代表做法包括全深度学习的最小方差无失真响应波束形成器和复值空间自编码器。第 3 条是目标说话人提取，引入期望说话人的辅助信息，例如声纹、波达方向或视觉唇动。

单通道声纹路线在论文引用的工作中已经成熟，做法是从配准语音提取说话人嵌入，再去混合中找音色一致的成分。但论文指出，这类声纹即使工作在多通道观测上，也不显式编码空间传播特性，因此没有充分利用阵列的空间分集。另一条思路是把波达方向作为显式空间变量，与谱嵌入融合，论文引用了统一融合框架的工作。

**最小方差无失真响应波束形成器 × 端到端提取网络：** 最小方差无失真响应波束形成器分工是用估计的相对传递函数做线性空域滤波并最小化噪声加干扰，端到端提取网络分工是直接从多通道短时傅里叶变换实虚部学习非线性映射，搭配理由是前者可解释且依赖协方差估计质量，后者依赖数据驱动，组合意义在于用同一混响任务检验非线性提取是否超过经典波束形成。

论文的判断起点是，在混响环境中基于相对传递函数的波束形成器通常优于基于波达方向的波束形成器。由此提出把期望说话人的瞬时相对传递函数特征放进提取框架，并与谱嵌入、波达方向以及相对传递函数最小方差无失真响应波束形成器做系统比较。

### 混合是如何建模的，配准信号满足什么空间条件？

论文在短时傅里叶变换域建模。用 k 表示频率序号，t 表示时间帧序号。阵列观测向量写成两个说话人各自的干净语音乘以各自的声传递函数向量，再加定向噪声乘以噪声传递函数向量，以及传感器噪声。两个说话人记为期望源和干扰源。论文只研究两个并发说话人的情形。

关键的建模动作是区分干净语音和混响语音。混响语音定义为干净语音乘以传递函数向量。配准信号同样经过阵列，记为配准的混响观测。论文强调，配准语音必须从期望源的精确位置发出，以提供所需的空间线索。在仿真中，做法是取期望说话人的另一段不同话语，用同一个房间冲激响应卷积，保证期望源与其配准在空间上一致。

教学上可以这样走一个样本。先选两段不同说话人的语音，分别与各自位置的 4 通道房间冲激响应卷积，得到各自的混响多通道信号。再选一段期望说话人的不同话语，用期望位置的同一冲激响应卷积得到配准。再把期望混响、干扰混响、混响定向噪声和粉红传感器噪声相加得到混合。网络的输入是混合加配准，监督目标是期望的混响信号。

### 整体框架让混合和配准在何处汇合？

框架由三部分组成，多通道混合编码器、配准编码器和解码器。混合编码器处理混合信号的实部虚部。配准编码器处理 3 种备选配准特征之一，输出一个表示向量。解码器同时利用两者来分离目标说话人。论文明确说明不使用孪生编码器，因为两个编码器的输入性质不同。

具体汇合方式是瓶颈处的逐帧相乘。混合编码器输出混合嵌入，配准编码器输出的向量沿时间维与混合嵌入相乘，起到逐帧调制的作用。每种配准特征单独训练一个模型，再比较性能。解码器包含多个自注意力层和全连接层，并用转置卷积适配编码器中的卷积层以支持跳连接。

**目标说话人提取 × 相对传递函数：** 目标说话人提取负责在 2 人加噪声混合中只输出指定说话人的混响信号，相对传递函数负责提供该说话人到麦克风阵列的空间传播特征，二者搭配的理由是声纹只描述音色而丢失位置，相对传递函数补上位置约束后，解码器在每 1 帧用配准向量去选择与目标空间一致的时频成分。

论文的图 1 展示了 3 种配准分支，分别是来自干净配准的瞬时相对传递函数、单通道预训练模型产生的谱嵌入、已知波达方向映射的学习表示。本次没有收到该图的图像像素，因此不按像素描述模块位置，只依据正文确认汇合点在瓶颈相乘处。

### 混合编码器把多通道复谱变成什么表示？

混合编码器的输入是麦克风信号短时傅里叶变换的实部虚部。操作顺序是多层卷积，随后 2 维批归一化与线性整流激活，再把通道维和频率维合并，用全连接层降维，最后加一层自注意力。输出是混合嵌入，保留时间维以便后续逐帧调制。

配准编码器的结构随配准类型而变，但输出都被平均或变换成单一表示向量。对于瞬时相对传递函数，编码器结构与混合编码器平行，输出在帧维平均得到单个向量。对于波达方向，输入是一个整数角度，需要查表加自注意力。对于谱特征，调用单通道模型初级阶段的嵌入。

**混合编码器 × 配准编码器：** 混合编码器分工是把多通道混合的实虚谱经卷积、批归一化、激活、全连接和自注意力变成混合嵌入，配准编码器分工是把配准信号的瞬时相对传递函数、波达方向或谱特征变成单一表示向量，搭配理由是两者输入性质不同故不用孪生结构，组合意义是在瓶颈处按帧相乘，让配准向量逐帧调制混合嵌入以指向目标。

初学者容易误以为配准编码器只是压缩音色。这里需要区分，瞬时相对传递函数分支压缩的是空间传播，谱分支压缩的是音色，波达方向分支压缩的是角度身份。3 种向量虽然都在瓶颈相乘，但携带的信息维度不同，这是后文比较的前提。

### 三种配准特征各自如何计算？

第一种是相对传递函数特征。论文回顾相对传递函数定义为第 q 个声源的传递函数向量相对参考麦归一化，编码了空间信息。估计方法是瞬时相对传递函数，即配准的混响多通道短时谱除以参考麦的配准谱。论文假设配准是无噪的，因此可以直接做比值。实际中任何来自期望源同一空间位置的信号都可以作为空间配准，不一定是同一句话。

第二种是波达方向特征。论文给提取框架提供期望说话人的真实波达方向，属于 Oracle 条件。真实场景中波达方向必须估计，高混响下估计变难，可能影响提取。实现上用查找表为每个波达方向学一个嵌入向量，选中对应行后过自注意力，再送入瓶颈。

第 3 种是谱特征。做法是对第 m 个麦克风信号应用单通道模型初级阶段，得到配准的嵌入向量。这时模型注意的是说话人的语音特性，而不是空间信息。

**瞬时相对传递函数 × 波达方向：** 瞬时相对传递函数分工是逐时频点用参考麦比值保留直达与混响造成的多径结构，波达方向分工是只用一个整数角度指示直达波来向，二者搭配比较的理由是混响下角度估计变难且同一角度无法区分不同距离声源，组合意义在于检验保留完整传播结构的瞬时比值是否比单一角度更能支撑提取。

**谱嵌入 × 空间配准：** 谱嵌入分工是描述说话人音色身份，空间配准分工是描述说话人所在位置的声传播，搭配理由是两者统计信息互补，组合意义在于论文把只用音色、只用角度、只用瞬时相对传递函数做成 3 种独立训练的模型，从而分离出空间信息相对音色信息的增量。

一个样本的计算路径因此有 3 条可选项。同一混合分别搭配瞬时比值矩阵、角度编号或声纹向量，进入各自训练的网络，输出各自的目标估计。论文比较的是这 3 条路径的最终分离与可懂度。

### 损失如何构造，优化器和批量如何设置？

训练目标是时域尺度不变信号失真比损失，该损失在盲源分离任务中常用。论文进一步采用角色交换策略。对每个训练样本，同一混合被复用 1 次，交换期望源与干扰源的角色，并搭配各自对应的配准信号，得到两个损失项后平均。公式层面论文给出对两个声源求和再平均的形式。原文未给出梯度是否截断、配准编码器是否冻结等细节，因此不能从模型名称推定参数更新范围，只能确认混合编码器、配准编码器与解码器是为提取任务联合训练的，监督来源是混响目标信号。

优化器用 Adam，学习率为 0.001，批量大小为 14，网络权重随机初始化。训练时信号长度在不同批量间随机变化以提高鲁棒性。语音降采样到 8 kHz，短时傅里叶变换帧长 256 点，重叠一半，只处理前 129 个频点。这部分属于原文明确报告的设置。

**尺度不变信号失真比损失 × 角色交换平均：** 尺度不变信号失真比损失分工是在时域评价提取波形与目标混响信号的失真，角色交换平均分工是把同一混合中期望与干扰角色互换后分别计算损失再平均，搭配理由是避免模型偏向固定角色，组合意义是每个训练样本同时监督 2 个方向的提取能力。

需要提醒的是，波达方向分支的查找表向量是随网络学习的，谱分支调用的是单通道模型初级阶段，但论文没有说明该初级阶段在多通道训练中是否冻结或微调。缺失这项时，复现应先按联合训练实现并记录该假设，不把单通道预训练等同于冻结。

### 数据如何生成，房间与声源如何布置？

论文用仿真数据评估。先看划分与房间条件，下表把原文分散的句子整理成可核对的配置，数字与单位保留原文写法，条件列说明随机分布。表前的问题是，训练、验证与测试各有多少，房间尺寸、混响时间、阵列与声源位置如何随机，比较结果时是否处于同一仿真协议下。

| 划分与布置 | 数量与范围 | 语音与冲激来源 | 房间与阵列条件 | 位置条件 |
| --- | --- | --- | --- | --- |
| 训练集 | 40,000 utterances | LibriSpeech database | U[3, 10] m 房间尺寸 | U[0◦, 180◦] 声源角度 |
| 验证集 | 5,000 in the validation set | 4-channel room impulse response | U[0.2, 0.8] sec 混响时间 | U[1, 4] m 声源距离 |
| 测试集 | 300 in the test set | Image Method [37] | 8 cm 麦克风间距 | 0.7 m 距墙最小距离 |
| 噪声配置 | U[−5, 20] dB 定向噪声 | audiolabs’ dataset | 20 dB 粉红传感器噪声 | 同房间 4 通道冲激 |
| 配准生成 | 同一说话人另一段话语 | 同一 RIR 卷积 | 空间一致 | 无噪假设 |

表后需要说明代价与边界。40,000 条训练加 5,000 条验证的规模不小，但测试只有 300 条，随机位置下的均值可能受抽样波动影响。房间尺寸 3 米到 10 米、混响 0.2 秒到 0.8 秒覆盖了较宽条件，声源角度 0 度到 180 度、距离 1 米到 4 米也是均匀随机。定向噪声信噪比从负 5 分贝到 20 分贝，挑战了空间分辨率。配准用同一房间冲激响应保证空间一致，且假设配准无噪，这是有利条件，实际部署中配准含噪时性能可能下降，论文未评测该边界。

### 信号处理与基线条件是否对齐？

再看信号处理与基线，下表把采样、谱参数、优化与噪声设置放在一起，目的是核对复现时必须固定的处理链。表前的问题是，采样率、帧长、频点数、优化器与噪声电平各是多少，基线是否在同一混合上评价。指标方向是尺度不变信号失真比越高越好，短时客观可懂度越高越好。

| 处理与训练项 | 参数值 | 输入来源 | 噪声与干扰条件 | 评价指标方向 |
| --- | --- | --- | --- | --- |
| 采样率 | 8 kHz | respective databases | 20 dB 传感器噪声 | SI-SDR 越高越好 |
| 谱帧长 | 256 samples | STFT 50% overlap | directional noise | STOI 越高越好 |
| 频点数 | 129 frequency bins | DFT symmetry | Q 为 2 加定向噪声 | 分离效率与可懂度分开看 |
| 优化器 | learning rate of 0.001 | Adam optimizer [38] | batch size of 14 | 随机长度增强鲁棒性 |
| 基线组 | single-channel 与 MVDR | same mixture | oracle 与 estimated 之分 | 同数据集比较 |

表后解释比较的公平性。单通道基线是论文先前工作，只用单通道输入，不显式编码空间信息。波束形成器基线有两种，最小方差无失真响应估计式用噪声加干扰协方差与相对传递函数构造权重。Oracle 波束形成器假设有无噪配准并用特征分解估计相对传递函数，Estimated 波束形成器假设有 2 秒纯期望加噪声段和 2 秒纯噪声段并用协方差白化估计。两者估计干扰加噪声协方差时都假设能拿到只有干扰加噪声的片段，这在实际中是 Oracle 切分，因此 Oracle 波束形成器的数字不能直接当作可部署收益。

### 随机位置下哪种配准最好，好多少？

论文报告随机位置下的主结果在表格上半部分。下表按原文整理，条件列区分随机位置与同波达方向，指标列保留原文单位写法。表前的问题是，在同一仿真混合上，瞬时相对传递函数、波达方向、谱嵌入、单通道模型、两种波束形成器各达到多少，空间线索是否一致地超过谱线索。

| 条件 | 模型 | SI-SDR [dB] | STOI | 比较对象 |
| --- | --- | --- | --- | --- |
| Random Locations | Oracle MVDR | 9.7 | 0.85 | Unprocessed -2.6 与 0.54 |
| Random Locations | Single channel | 6.21 | 0.73 | Estimated MVDR 6.3 与 0.79 |
| Random Locations | TSE-RTF | 9.2 | 0.81 | TSE-DOA 8.4 与 0.8 |
| Random Locations | TSE-DOA | 8.4 | 0.8 | TSE-Spectral 8.18 与 0.8 |
| Same DOA | Oracle MVDR | 8.5 | 0.82 | TSE-RTF 8.8 与 0.79 |

表后给出支持的判断与代价。论文报告所有 3 种提取变体都超过单通道模型和 Estimated 波束形成器，其中瞬时相对传递函数最好，随机位置下为 9.2 分贝和 0.81，超过波达方向的 8.4 分贝和 0.8，也超过谱嵌入的 8.18 分贝和 0.8。这支持空间线索一致优于谱线索、瞬时相对传递函数是三者中最有效的结论。代价是 Oracle 波束形成器在随机位置达到 9.7 分贝和 0.85，仍高于瞬时相对传递函数提取，说明在有无噪配准和理想协方差切分的条件下，经典波束形成仍有竞争力。未胜出的单通道模型只到 6.21 分贝和 0.73，表明缺少空间信息的差距较大。论文还给出语谱图示例对比，但本次无像素，不对颜色与细节做断言。

### 同方向不同距离时波达方向为何失效，相对传递函数为何仍有效？

论文构造了一个反证场景。两个说话人与阵列中心对齐，具有相同的波达方向但距阵列距离不同，定向噪声来自不同方向。这种设置下，只依赖角度的模型无法区分两个说话人，因为角度相同。相对传递函数方法仍能区分，因为它捕获了房间混响与传播造成的多径到达差异。

数值上，同波达方向下瞬时相对传递函数提取达到 8.8 分贝和 0.79，Oracle 波束形成器为 8.5 分贝和 0.82。论文的表述是，Oracle 波束形成器在可懂度上更优，而所提方法在分离性能上更强。值得注意的是，8.8 分贝与随机位置下的 9.2 分贝接近，支持相对传递函数对角度重合不敏感。

这里要区分直接报告与有限解释。直接报告的是数字本身，有限解释是多径结构带来距离可分性，论文用定性语言说明相对传递函数捕获多次到达。未验证的推测是具体哪次反射起了决定作用，论文没有逐反射消融，因此不能把该机制当作已证明的因果。复现时应固定两个说话人角度相同、距离不同、噪声方向不同，再分别跑两种方法，避免把随机位置的结论推广到该特殊几何。

### 哪些有利假设限制了结论的外推？

第一个限制是配准无噪且空间严格一致。仿真用期望说话人的另一段话语经同一房间冲激响应卷积得到配准，并假设存在只有无噪期望说话人活动的短间隔。实际中配准可能含噪、与目标位置有偏差，论文未报告含噪配准或位置失配时的下降曲线，因此不能承诺同样增益。

第二个限制是波达方向与协方差的 Oracle 程度。波达方向分支用真实角度，真实场景需要估计，高混响下估计误差会传导到提取。两种波束形成器都需要干扰加噪声片段来估计协方差，Estimated 还需要 2 秒纯期望加噪声段，这些切分在实际连续语音中不易获得。

第三个限制是任务范围。只评估两个并发说话人、四麦克风、8 kHz、300 条测试的仿真条件，未测量误判率、延迟、计算量与实时因子，也未在实录房间验证。相关性不等于因果，瞬时相对传递函数最好不代表它在任何阵列孔径或任何混响时间下都最好。训练资源、推理开销与输出帧率应分开讨论，论文未给出这些量，因此不做改善承诺。

### 要复现应先固定什么，再跑什么？

先固定数据链。用 LibriSpeech 选两段不同说话人话语，用镜像法生成 4 通道房间冲激响应，房间尺寸在 3 米到 10 米均匀抽取，混响时间在 0.2 秒到 0.8 秒均匀抽取，麦克风间距 8 厘米且距墙至少 0.7 米，声源角度 0 度到 180 度、距离 1 米到 4 米均匀抽取。定向噪声来自无回声噪声库并经同房间冲激响应卷积，信噪比在负 5 分贝到 20 分贝均匀抽取，再加 20 分贝粉红传感器噪声。配准取期望说话人另一段话语，用期望位置的同一冲激响应卷积并保持无噪。

再固定处理链。降采样到 8 kHz，帧长 256 点、重叠一半，只用前 129 个频点。Adam 学习率 0.001、批量 14、权重随机初始化、批量内随机变长。混合编码器按卷积加 2 维批归一化加激活、合并通道频率维、全连接降维、一层自注意力实现，瓶颈逐帧相乘，解码器用 6 层自注意力加全连接并用转置卷积适配跳连接。3 种配准各训一个模型，损失用角色交换平均的时域尺度不变信号失真比。

先跑随机位置主表，再跑同波达方向对照。基线至少包含单通道模型和两种波束形成器中的可运行项，Oracle 项单独标注，不代替可部署收益。代码与权重方面，本次证据只确认噪声库链接当前可用，未确认全文代码或权重可下载，因此复现应按上述步骤自建仿真，不默认存在一键运行脚本。

### 何时值得尝试瞬时相对传递函数配准？

当阵列可用、混响不可忽略、存在定向噪声，且能拿到与目标同位置的干净配准或同位置信号时，值得尝试瞬时相对传递函数配准。它的增量来自保留完整传播结构，而不是只保留角度或只保留音色。在随机位置实验中，它同时超过谱嵌入和已知波达方向，在同角度不同距离的反例中仍保持接近随机位置的分离性能，这是角度方法做不到的。

不值得盲目尝试的情形是配准含噪严重、位置失配、只有单通道，或无法承担多通道训练与推理开销。此时应先补验证，包括含噪配准、位置偏移、实录房间与更多说话人数的测试，以及延迟与计算量的测量。

一句话收束，论文显示空间信息优于纯音色信息，瞬时相对传递函数是三者中最有效的配准，但该结论依赖无噪同位置配准与仿真协议，换条件前需要重新测量。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf#page=2)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf#page=3)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/e6d6db97584e/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf#page=4)

另有 3 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
