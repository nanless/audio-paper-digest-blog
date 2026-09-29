---
title: "Don't Listen to Me: A Lightweight, Low-Latency Model for Own-Voice Cancellation in Far-Field Speech Enhancement"
date: 2026-09-28
draft: false
description: "该文把远场回传增强中的本人声音当作已知干扰来删除，用注册语音条件化的时域掩蔽模型实现去噪加删人声，主证据是因果 2 ms 延迟下 Mamba-MinGRU 达到与 TD-SpeakerBeam 可比的 SDR 而主网络计算量从 4.97 GMAC/s 降到 0.33 GMAC/s，代价是小模型与多说话人时 SDR 明显下降且线性 RNN 辅助编码器在去噪条件 D 上有所回落。"
tags: ["RNN", "高效推理", "流式处理", "语音", "目标说话人提取"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:stergaard26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/stergaard26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/stergaard26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8215dbf4c716c272fe10e7f459f9551c3c92939fe0d87dbfe59779d2719cb838"
paper_digest_api_reader_plan_sha256: "7aa5b3d08f608aec06bd60113eee3aebec7348b27b74fa98c3fa610a91d294fc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "0c6744631d4cfd94a2fce050d5818b41e85fd04a0a4eba94ddcbfa969ac8b2da"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4b194f01dd04b56d0efdf075044dd6782caa25488ace35784de4c0fcc156dc56"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "16645b16c7c01dfc183896b587b30d0d8fb4f00e55aed942c4ae2a4606c95d33"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6ef8b94a8b7be41c5f23c61f9fce3a41edb484a40b164aeab4ccac2df76d8f88"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.rnn","label":"RNN"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"}]
paper_digest_primary_task: "目标说话人提取"
paper_digest_primary_method: "RNN"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 不听我：把已注册的人声删掉来避开远场回传延迟

> 英文题目：*Don't Listen to Me: A Lightweight, Low-Latency Model for Own-Voice Cancellation in Far-Field Speech Enhancement*

> 会议身份：`conference:interspeech:2026:conference-paper-id:stergaard26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/stergaard26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/stergaard26_interspeech.pdf)

标签：#RNN #高效推理 #流式处理 #语音 #目标说话人提取

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Mads Østergaard：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Neergaard Zahid：机构信息未能从会议 PDF 纯文本可靠映射
- Karl Ulbæk：机构信息未能从会议 PDF 纯文本可靠映射
- Andreas Bagge：机构信息未能从会议 PDF 纯文本可靠映射
- Kenny Falkær Olsen：机构信息未能从会议 PDF 纯文本可靠映射
- Rasmus Lindrup：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

自有语音消除以含注册说话人、干扰说话人与环境噪声的单通道混合为输入，输出剔除注册说话人并保留其余语音的去噪波形，难点在于远场回传延迟易引发可感知的自声失真且需在极低延迟下区分音色相近说话人。该方法先由编码器将混合与注册语音变换到时域隐表示，并由辅助网络从注册语音提炼说话人嵌入，嵌入经后段适配乘法注入主干表示。接着掩蔽网络以Mamba块加MinGRU时序混合估计抑制掩蔽，并作用于混合表示以压制注册语音成分。最后解码器将掩蔽后表示重建为保留语音波形。与基于卷积的时域SpeakerBeam相比，其机制差异在于以Mamba块加MinGRU时序混合替代扩张卷积堆叠，并以双向线性循环编码器替代卷积辅助网络，从而保持因果流式能力并大幅降低计算量。在按基频分层划分说话人的测试条件下，被注册者为低音的异音高混合条件的SDR为12.24 dB，高于被注册者为高音的异音高混合条件的SDR 11.45 dB。该结论目前仅适用于至多1个干扰说话人的非混响合成场景，同音高与3至5人混合时抑制能力明显下降。小模型已可在单CPU线程实现低于实时的流式推理，但大模型实时系数仍高于1，原文未披露训练硬件与训练时长成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 远场回传为什么会让自己的声音变成问题？

输入是远场设备麦克风收到的混合声，包含使用者本人的声音、其他说话人和环境噪声。目标是对混合做增强后回传给使用者听，过程中必须保留环境中其他人的语音和干净背景，同时把使用者自己的延迟回传成分压下去。必须保留的信息是其他说话人的可懂度、整体去噪效果和极低的系统延迟，输出是删掉本人声音后的增强波形。

论文的动机不是把通用增强做到极限，而是解决一条具体的感知链路：当远场桌面麦克风采集、增强再串流回放时，声学往返时间很容易超过 10 ms，而超过 15 到 20 ms 的延迟被广泛报告为令人困扰，会产生类似回声的本人语音失真。助听器文献中 4 到 10 ms 已可感知，15 ms 以上多被评为不可接受，原因是延迟信号与经由骨传导和直达声的本人声音发生干涉。教学例子是开免提会议时听到慢半拍的自己会忍不住停顿，例子只帮助理解延迟感知，不代表本文测量了主观困扰阈值。

本文把本人声音视为已知身份的干扰源，用一段短注册语音提前告诉模型要删谁，这就把问题从盲分离变成了条件化删除。资源状态方面，本次收到的证据中没有发现来源绑定且完成 HTTPS 验证的资源，因此不得声称代码、模型或数据已公开，只能按论文文字复述方法与实验条件。

### 与目标提取、分离和回声消除相比删自己有何不同？

同输入同目标的最近路线是目标说话人提取，例如 SpeakerBeam、Listen only to me、TEA-PSE、SpeakerBeam-SS 等，它们都用辅助嵌入网络把短注册语音变成条件向量，再指导主网络提取目标。同输入不同目标的路线是通用语音分离与增强，例如 TasNet 和 ConvTasNet，其中 ConvTasNet 常被当作基线。同现象不同机制的是声学回声消除，它删的是已知播放信号漏回麦克风的部分，依赖远端参考信号，而本文的本人语音消除只有短注册语音，没有回放参考信号，因此适用场景不同。

近期线性循环路线包括用于分离的 SepMamba、把 ConvTasNet 时域卷积换成 S4D 的 SpeakerBeam-SS，以及提出最小门控递推 MinGRU 的工作，特点是保持全局时间上下文同时支持因果流式推理。本文的定位是把目标提取的方法取补集用于删除，并把重型时域卷积掩蔽器换成 Mamba 加 MinGRU 的轻量结构，同时把辅助网络也换成线性循环编码器。理解这条谱系很重要，否则容易把删除本人误认为回声消除，或把条件化删除误认为先分离再选路。

### 删除与提取的方向正好相反吗？

论文把混合记为目标本人语音加其他说话人加噪声，目标输出是去掉本人后剩下的其他说话人之和。训练时最多使用一个其他说话人，测试时再考察多人泛化。评估分两种条件：完整混合条件记为 F，指本人存在，此时既要删本人又要去噪；仅去噪条件记为 D，指本人缺席，此时目标是去噪后的另一说话人。如果另一说话人缺席则目标对应静音，如果注册人缺席则目标是去噪后的另一说话人。下面的示意图把这种互补关系画成从同一混合出发的两个箭头，左侧只删注册人，右侧只留注册人，两侧都联合去噪。

为理解互补方向，先看中间混合同时包含注册人、干扰说话人和噪声，再对比左右两侧哪一个身份被淡化。

> **看图路径：** 1. 先看中间混合块里同时出现的已注册人、另一说话人和噪声图标；2. 再看向左箭头指向的输出中哪个图标变淡表示被删除；3. 再看向右箭头指向的输出中哪个图标被保留以对比删除与提取方向；4. 确认两侧都标注联合去噪即噪声图标同时变淡

[![原论文 Figure 1：Difference between own voice cancellation (OVC) and target speaker extraction (TSE).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a335ee0935d4/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a335ee0935d4/figure-1.png)

*论文图 1。原论文 Figure 1：“Difference between own voice cancellation (OVC) and target speaker extraction (TSE).”。*

该图显示中间是多人加噪的混合输入，向左的本人语音消除分支把标为已注册的身份淡化而保留其余说话人，向右的目标提取分支则相反地只保留已注册身份，两侧的噪声区域都表示被联合抑制。像素中三块不规则区域分别标注混合、删除输出和提取输出，箭头方向明确表达了同一条件信息下的相反监督目标。这支持把删除理解为提取的补任务，而不是独立的降噪开关。

### 从注册语音到输出波形要走哪几步？

沿一个样本走完全程有助于建立依赖顺序。输入有两路：一段 2 秒的注册语音和一段 3 秒的待处理混合，采样率均为 16 kHz。注册语音先经自己的编码器变成表示，再经辅助网络压缩成说话人嵌入。混合语音经另一个不共享参数的编码器变成时域表示，进入掩蔽网络。嵌入经自适应层以逐元素相乘的方式作用于掩蔽网络中间表示，若主网络使用跳连则辅助网络为跳连路径和残差路径各输出一个嵌入。

掩蔽网络输出掩蔽，与编码表示相乘后再经解码器重建为波形。非因果版本允许双向上下文，因果流式版本只用过去信息，所有因果配置的算法延迟均为 2 ms。下面的高层框图把两路编码器、辅助网络、掩蔽器和解码器的连接画了出来。

为读懂条件化位置，先沿上下两条编码器路径找到汇合点，再确认嵌入箭头落在哪里。

> **看图路径：** 1. 先沿上方注册语音路径看编码器到辅助网络再到掩蔽网络的箭头；2. 再沿下方混合语音路径看编码器到掩蔽网络再到相乘与解码器的主路径；3. 确认上下两个编码器分开且辅助输出经自适应层进入掩蔽网络

[![原论文 Figure 2：High-level architecture of a time-domain conditioned ConvTasNet.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a335ee0935d4/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a335ee0935d4/figure-2.png)

*论文图 2。原论文 Figure 2：“High-level architecture of a time-domain conditioned ConvTasNet.”。*

该图显示上方参考分支经过编码器进入辅助网络，向下箭头进入掩蔽器，下方混合分支经过编码器后一路进入掩蔽器、另一路直接跳到掩蔽器后的乘法节点，最后经解码器输出。像素中两个编码器框分开绘制，对应正文说明二者不共享参数，辅助到掩蔽的单向箭头对应自适应相乘的控制关系。

**辅助网络 × 掩蔽网络：** 辅助网络负责从注册语音中提炼说话人嵌入向量，掩蔽网络负责把混合语音编码后在嵌入指导下生成掩蔽，搭配理由是嵌入通过自适应层做逐元素相乘来告诉掩蔽网络删谁，组合意义是解决可辨识性问题，即提前告知要删的身份而不用盲分离再选。

这一步的关键是身份信息只通过嵌入进入，不直接提供干净参考波形，因此注册语音的质量和长度决定了删除的选择性，后文的音高分析和多人退化都与这种弱条件方式有关。

### 轻量掩蔽块内部如何做时间建模？

主网络是时域 TasNet 变体，掩蔽网络完全由 Mamba 块堆叠而成，时间混合器选用 MinGRU，论文记为 Mamba-MinGRU。每个块是前置归一化的残差块，步骤按原文顺序是层归一化、按扩展因子 K 做线性扩展并拆分为两路、短因果深度可分离 1 维卷积加激活、MinGRU 递推做时间混合、门控相乘再线性投影回输入通道。扩展因子 K 取 2.0，基础配置模型维度 192、小配置 128，均使用 15 个块，自适应层放在第 8 个块之后，编解码器配置与 TD-SpeakerBeam 网络共享。

MinGRU 递推可写成线性递推形式，用门控与 token 的逐元素运算表达，并可用并行关联扫描实现高效训练，双向版本用 Hydra 双向方式实现。基线 TD-SpeakerBeam 的超参数为编码维度、窗长、通道与重复数等组合，其中窗长 32 在 16 kHz 下对应 2 ms 算法延迟。下面的细节图把归一化、投影、块内分支与最终投影画成从左到右的流水线。

为看清门控与递推的分工，先找到入口的归一化与投影，再沿 3 路线性分支看到卷积与递推的串联。

> **看图路径：** 1. 先从左向右看归一化与线性投影进入重复块的入口顺序；2. 再看虚线框内三路线性分支经卷积与递推后做门控相乘的位置；3. 确认框外最后的线性投影与 Sigmoid 构成输出掩蔽的出口

[![原论文 Figure 3：Detailed architecture of the Mamba-MinGRU masker.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a335ee0935d4/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a335ee0935d4/figure-3.png)

*论文图 3。原论文 Figure 3：“Detailed architecture of the Mamba-MinGRU masker.”。*

该图显示最左侧是纵向的归一化与线性投影框，中间虚线框内 3 路线性分支分别进入卷积与递推，其中一路经激活后与递推输出做逐元素相乘，再经线性与残差加法构成重复单元，最右侧经线性投影与非线性输出掩蔽。像素中重复次数标为乘以 N，对应正文 15 个块的堆叠，非线性在图注中说明为 Sigmoid。这种结构把局部平滑交给短卷积，把长时依赖交给线性递推，把选择性交给门控。

**Mamba 块 × MinGRU 时间混合：** Mamba 块负责提供带门控和短因果卷积的残差外壳结构，MinGRU 时间混合负责在块内做跨时间的线性递推建模，搭配理由是 MinGRU 可写成线性递推并用并行扫描训练同时保持流式递推，组合意义是在保持全局上下文的同时把主网络计算量大幅降低并天然因果。

辅助网络有两种选择：一是单重复的 ConvTasNet 网络，二是仅 5 个块的双向线性循环网络。自适应仍是嵌入与中间表示的逐元素相乘。把辅助也换成线性循环是本文降本的关键之一，后文结果会量化其在完整混合与纯去噪条件下的不同走向。

### 训练用什么混合与损失来教删除？

训练数据是动态混合的数据集，语音取自 LibriSpeech 的 train-clean-360 分区，噪声取自 WHAM，测试指标在 test-clean 上报告。每次生成混合时从 LibriSpeech 抽两个不同说话人，从噪声库抽一段噪声，从注册目标说话人抽两句，一句作注册参考，另一句放入混合，从另一说话人只抽一句。两路语音先按采样自负 5 到 5 dB 的信噪比混合，再按采样自 0 到 25 dB 的信噪比加入噪声。训练中以独立概率丢弃另一说话人和注册说话人，概率分别记为丢弃概率与注册缺席概率并均设为 10%，以此构造完整混合、纯去噪和应输出静音的情形。

优化目标是带阈值的负信号失真比损失并扩展到处理静音：当除注册人之外的说话人存在时用主动损失逼近目标，当只有注册人时用非主动损失把预测能量压低，两处软阈值分别设为千分之一和 1%，避免在已分好的混合上继续过度优化。优化器用 AdamW 配合线性衰减到零的学习率调度，初始学习率对所有实验设为 5 乘 10 的负 4 次方，批量大小 8，训练 1,000,000 步，每批注册时长 2 秒、混合时长 3 秒。

**主动损失 × 静音损失：** 主动损失负责在除注册人之外的说话人存在时逼近干净目标语音，非主动即静音损失负责在只剩注册人时逼近静音，搭配理由是训练中以概率丢弃另一说话人来构造两种监督情形，组合意义是让同一模型既学会删除又学会在无人需保留时输出静音并用阈值避免过度优化已分好的样本。

推理分因果与非因果两种，实时系数在 Intel Core i7-13700 CPU 上以单线程流式模式测量，每次处理 16 个采样点即 16 kHz 下 1 ms，去掉前 5 次热身后取 1000 次前向的中位数。需要复现时应先对齐采样率、窗长、丢弃概率和双条件评估，否则 SDR 与预测平均意见分的绝对值不可比。

### 在什么数据与指标下比较才算公平？

测试集是动态生成的本人语音消除测试集，测试条件分两档：两说话人都在时信噪比均匀采样自 10 到 20 dB，记为完整混合评估；评估去噪时信噪比均匀采样自 0 到 10 dB，记为去噪评估。多说话人场景基于 LibriMix 的混合脚本改造为支持多于两说话人，用 3 到 5 人的混合测泛化。指标有两个且方向都要先讲清：信号失真比越高越好，反映目标语音能量与误差能量的对数比。

预测平均意见分用 DistillMOS 对每条增强波形打分再平均，分数越高表示预测感知质量越好，同样分完整混合与去噪两种条件报告。基线是 TD-SpeakerBeam，分别在目标提取与本人消除两种任务目标、因果与非因果两种推理模式下训练和评估，以隔离任务难度与因果损失。待测模型包括非因果与因果的线性循环主网络、是否搭配线性循环嵌入的组合，以及参数减半的小配置。

计算量以每秒乘加操作数报告并拆分主网络与辅助网络，参数量以百万为单位拆分，实时系数只在因果流式模式下报告。公平比较要求同一采样率、同一窗长对应的 2 ms 算法延迟、同一混合生成流程和同一指标聚合对象，否则跨表对比会把任务难度、信噪比区间和因果约束混在一起。

### 轻量模型是否真能在 2 毫秒下接近基线？

先看任务难度与因果代价。论文报告本人消除与目标提取难度相当，在完整混合条件下都达到约 13 dB 的信号失真比，转为因果后两者都出现中等程度下降。基线 TD-SpeakerBeam 在本人消除上的非因果与因果表现为从高到中的回落，这为轻量模型的比较锚定了上限。再看主网络替换的效果：把 TD-SpeakerBeam 掩蔽网络换成 Mamba-MinGRU 后，非因果性能相当但主网络计算量从 4.97 GMAC/s 降到 0.33 GMAC/s，因果版本也接近因果基线而效率远高。辅助网络的替换进一步把辅助计算量从 1.67 GMAC/s 降到 0.26 GMAC/s，且在完整混合上不降反升，非因果达到 13.57 dB。下面的曲线把多人混合下的退化画成随说话人数增加的下降趋势。

为判断多人泛化，先看横轴人数增加时纵轴改善量的整体斜率，再对比非因果大模型与因果小模型的相对位置。

> **看图路径：** 1. 先确认横轴是混合中说话人数 3 到 5 纵轴是 SDR 改善量 dB；2. 再按图例区分非因果与因果模型的线型与标记走向；3. 观察从 3 人到 4 人时所有曲线的下降幅度再看 4 人到 5 人的平坦段

[![原论文 Figure 4：SDR improvement (dB) for mixtures with multiple in- terfering speakers.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a335ee0935d4/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a335ee0935d4/figure-4.png)

*论文图 4。原论文 Figure 4：“SDR improvement (dB) for mixtures with multiple in- terfering speakers. Model IDs in the legend correspond to those shown in Table 1.”。*

该图显示横轴为混合中说话人数 3、4、5，纵轴为 SDR 改善量 dB，所有被测模型的曲线都随人数增加而明显下降，从 3 人到 4 人的下降约 2 dB 量级，从 4 人到 5 人趋于平坦。像素中非因果大模型在 3 人时最高，因果小模型在 4 到 5 人时相对更平稳，但绝对值仍低于训练时的双人条件。这支持论文的判断，即训练只用至多一个干扰说话人时，多人场景的声学复杂度会显著增加删除难度。

**算法延迟 × 实时系数：** 算法延迟负责描述编码器窗长决定的理论最小等待时间，实时系数负责描述在 CPU 上流式处理一块音频的实际耗时与音频时长的比值，搭配理由是低延迟结构仍可能因计算重而跑不实时，组合意义是同时报告 2 ms 算法延迟和 RTF 才能判断是否可部署于流式设备。

下表把核心可运行策略的完整混合 SDR、计算量、算法延迟与实时系数放在同一行内比较，指标方向为 SDR 越高越好、计算量与实时系数越低越好，条件均为论文报告的动态测试集与因果或非因果标注。

| 条件与模型 | 完整混合 SDR | 主网络计算量 | 算法延迟 | 实时系数 |
| --- | --- | --- | --- | --- |
| 非因果基线与轻量相当 | ∼13 dB SDR | 4.97 GMAC/s | 2 ms | 未报告 |
| 线性 RNN 主网络 | ∼13 dB SDR | 0.33 GMAC/s | 2 ms | 未报告 |
| 线性 RNN 嵌入非因果 | 13.57 dB | 0.33 GMAC/s | 2 ms | 未报告 |
| 因果小模型 | 11.47 dB SDR on F | 0.18 GMAC/s 隐含 | 2 ms algorithmic latency | 0.82 |
| 因果基础模型 | 未单独列出 | 未单独列出 | 2 ms | 1.69 |

表前已提出比较问题是轻量是否在同延迟下接近基线且可实时，公平条件是同为本人消除任务、同为完整混合条件并区分因果。表后解释是主要收益来自主网络计算量数量级下降而 SDR 基本保持，具体代价是因果本身带来数 dB 下降，且基础因果模型的实时系数为 1.69 仍高于实时，小模型以 0.82 进入实时但 SDR 低于大模型。未胜出项是因果 TD-SpeakerBeam 基线在效率上明显落后，负结果是线性循环嵌入虽提升完整混合却在去噪条件上回落，边界是多人混合与混响尚未充分训练与评估。

### 换掉辅助网络与缩小模型会付出什么代价？

消融围绕两个可替换部件展开：主网络是否用线性循环，辅助网络是否用线性循环嵌入，以及模型维度缩小后的可扩展性。论文显示主网络替换在非因果下保持竞争力，在因果下接近基线。辅助替换在所有设置下都降低辅助计算量并在完整混合上改善或持平，但在去噪条件 D 上出现 trade-off，且主网络表达能力越强这种分化越明显。缩小版把主网络参数减半后，因果完整混合仍具竞争力，说明该设计可向资源受限设备下探。

音高分析进一步把被试按基频均值以 160 Hz 为界分成高低两组，发现当双说话人音高同组时更难删除，当注册人基频较低时相对更容易，这与依赖说话人嵌入做选择性删除的机制一致。训练配置与混合参数的细节决定了这些消融的可比性，下表把它们集中呈现。

| 训练与构造项 | 取值一 | 取值二 | 批量与步数 | 优化设置 |
| --- | --- | --- | --- | --- |
| 学习率与丢弃概率 | 5 × 10−4 | 10% | 批量大小为 8 训练 1 million steps | AdamW 加线性衰减到零 |
| 注册与混合时长 | 2 seconds | 3 seconds | 同一批内配对 | 16 kHz 采样 |
| 语音混合信噪比 | [−5, 5] dB | [0, 25] dB 加噪 | 动态混合 | LibriSpeech 加 WHAM |
| 窗长与延迟 | 32 | 2 ms at 16 kHz | 全配置共享 | 因果与非因果同窗 |
| 测试信噪比 | [10, 20] dB 完整混合 | [0, 10] 去噪评估 | 均匀采样 | 区分 F 与 D |

表前问题是替换与缩小是否在同等训练预算下公平，公平条件是同窗长、同延迟、同混合区间与同优化调度。表后解释是主要收益为辅助计算量大幅下降与小模型实时可跑，代价是去噪条件下降与多人泛化下降，反例是同音高组的删除更难，说明嵌入对音色相近说话人的区分力仍是瓶颈。未评测边界包括超过 5 人的混合、混响条件和真实远场录音，这些都留作未来工作。

### 哪些结论还不能推广到真实远场？

论文直接报告的是在 LibriSpeech 加 WHAM 动态混合上的信号失真比与 DistillMOS 预测分，支持的是轻量结构在受控混合下接近基线且计算量更低。有限解释是音高分组与多人曲线的趋势，它们支持嵌入区分度与场景复杂度是主要困难，但相关性不等于因果，未测量误判率、真实延迟分布与功耗。未验证推测包括在混响房间、真实桌面麦克风、长时流式状态累积误差下的表现，以及注册语音过短或带噪时的鲁棒性。

训练只用至多一个干扰说话人，因此 3 到 5 人的结果属于分布外泛化，不能把末端平稳段推广为人数再增加也不下降。预测平均意见分是模型预测而非人听实验，不能当作人评。总体趋势不等于每组每步都成立，例如线性循环嵌入在完整混合上更好但在去噪上更差，选型时需按本人出现频率权衡。原文明确把扩展到更多同时说话人与混响评估列为未来工作，这正是复现后最值得补的验证。

### 要复现先对齐哪些信息条件？

先按学习依赖准备数据：用 train-clean-360 做训练、test-clean 报告指标，噪声用 WHAM，按先混语音再加噪的顺序生成，语音混合信噪比采样自负 5 到 5 dB，加噪信噪比采样自 0 到 25 dB，测试分 10 到 20 dB 的完整混合与 0 到 10 dB 的去噪两档。模型侧固定采样率 16 kHz、窗长 32 对应的 2 ms 延迟、15 个块与自适应层在第 8 块后、扩展因子 2.0、基础维度 192 与小维度 128、辅助线性循环仅 5 块且双向。训练侧固定批量 8、1,000,000 步、AdamW、初始学习率 5 乘 10 的负 4 次方、线性衰减到零、两种丢弃概率均为 10%。

评估侧同时报告完整混合与去噪的信号失真比与预测平均意见分，并拆分主辅网络的参数量与每秒乘加数，因果模型再补单线程每次处理 16 采样点的实时系数中位数。基线必须包含同任务同因果的 TD-SpeakerBeam，否则无法分离任务难度与因果损失。多说话人泛化用改造后的 LibriMix 脚本生成 3 到 5 人混合，音高分析用 PYIN 估计每人平均基频再以 160 Hz 分层。按证据状态，当前没有可用资源可写已公开，因此应以文字配置从零实现，不假设存在可下载权重或可运行系统。

### 何时值得尝试删除自己的路线？

当系统必须把远场增强音频实时回传给说话人本人，且往返延迟不可避免地超过感知阈值时，值得把本人声音当作已知身份干扰来删除，而不是一味压低整体延迟或只做通用降噪。复现时先跑通双人动态混合与双条件评估，再做主网络轻量化与辅助替换的对照，最后补多人与音高分层以确认选择性瓶颈。若本人很少出现则需权衡线性循环嵌入在去噪条件上的回落，若设备算力极紧则优先验证小配置的实时系数而非只看非因果上限。还需补的验证是混响、真实远场录音、注册语音鲁棒性和长时流式稳定性。

**本人语音消除 × 目标说话人提取：** 本人语音消除负责把已注册说话人的声音从含噪混合中删掉并保留其余语音，目标说话人提取负责只保留已注册说话人并删掉其余声音，二者输入都是含噪多人混合加一段注册语音，搭配理由是同一条件化掩蔽框架只需把监督目标取反就能复用，组合意义是把远场回传延迟造成的本人回声问题转化为可训练的删除任务。

记住这条主线：注册语音提供删谁的信息，掩蔽网络执行删除与去噪，低延迟与低算力决定能否装进流式设备，而音高相近与人数增加决定了当前方法的边界。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
