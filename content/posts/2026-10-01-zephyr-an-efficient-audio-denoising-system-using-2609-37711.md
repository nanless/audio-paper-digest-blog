---
title: "Zephyr: An Efficient Audio Denoising System Using Spiking Neural Networks Enabled With A Sparsity-Aware Flexible FPGA PE Array"
date: 2026-10-01
draft: false
tags: [语音增强, 模型量化, 动态计算与早退, 高效推理, 实时处理]
categories: [论文速递]
description: "针对耳机助听器等电池供电设备的语音去噪功耗问题，Zephyr 把 Spiking-FullSubNet 改写为 INT8 硬件友好版本并配以稀疏感知的复用 PE 阵列，在 Intel N-DNS 上报告 14.54 dB 与 52.9nJ 每帧的估算能耗，代价是相对浮点原版约 0.66 dB 下降且能耗为 45nm 估算而非实测。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.37711"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把脉冲稀疏变成可执行的省电：Zephyr 如何让去噪网络同时算对异构算子"
paper_digest_original_title: "Zephyr: An Efficient Audio Denoising System Using Spiking Neural Networks Enabled With A Sparsity-Aware Flexible FPGA PE Array"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.37711"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.37711.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"method","id":"method.dynamic-computation","label":"动态计算与早退"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "模型量化"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对耳机助听器等电池供电设备的语音去噪功耗问题，Zephyr 把 Spiking-FullSubNet 改写为 INT8 硬件友好版本并配以稀疏感知的复用 PE 阵列，在 Intel N-DNS 上报告 14.54 dB 与 52.9nJ 每帧的估算能耗，代价是相对浮点原版约 0.66 dB 下降且能耗为 45nm 估算而非实测。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Cheng-En Chang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chi-Wei Kao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chung-Lun Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yan-Lin Jiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yi-Chen Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sebastian Fieldhouse"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kea-Tiong Tang"}]
paper_digest_abstract_sha256: "ebb8620e840d4a3d72e960c5a4c1cbf6dd1e46f58f63e63681e2f9751dcd3a3c"
paper_digest_sidecars: {"citation.bib":{"sha256":"2f0010f0298ec85ddf268fdc16528f7cae9b6cae96304a66488440e510ca5b6d","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-37711/citation.bib"},"citation.json":{"sha256":"90b8a7f76e4d084d40933b1dad904a9ab1b5e3d98759ba2e6b37f9974fef1192","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-37711/citation.json"},"citation.ris":{"sha256":"2c71c6ce9ab2414757d0ab7802251f756c37c6dc01701c872ae6ce9c1e8ea81b","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-37711/citation.ris"},"rethink-context.json":{"sha256":"f74e0cb4cfde2c6847798389b364848b454676504aa587b5831b176559a7611a","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-37711/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "489de7624ce6ee13f291f112bc660ddb0eee16802c3819550a64ee1cdc110df6"
paper_digest_api_reader_plan_sha256: "30f1459136ced193ae43a9c87e148130e08583463bff9d2dda6bd7a2f209c42d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e79e275d774c4305fb3e0bf49cf4bb1888fb26f0a48fbaab4d0484bcc1753533"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "437826e6bf64c9c232e2543b4a8b45baf30fc7691309636fb533ba0951d36291"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6350097a9b9d528965bf3a782d9fbd72bf2f7a4b65010dac2ab68fb546c1f84b"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5586fa7bae9b6d0c0eab1e4d6942ae7f36cad540441aae0f72bd9ec13ab4d95b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把脉冲稀疏变成可执行的省电：Zephyr 如何让去噪网络同时算对异构算子

> 英文题目：*[Zephyr: An Efficient Audio Denoising System Using Spiking Neural Networks Enabled With A Sparsity-Aware Flexible FPGA PE Array](https://arxiv.org/abs/2609.37711)*

> 标签：#语音增强 | #模型量化 | #动态计算与早退 | #高效推理 | #实时处理
>
> 评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Cheng-En Chang：机构信息未在 arXiv HTML 中可靠披露
- Chi-Wei Kao：机构信息未在 arXiv HTML 中可靠披露
- Chung-Lun Yang：机构信息未在 arXiv HTML 中可靠披露
- Yan-Lin Jiang：机构信息未在 arXiv HTML 中可靠披露
- Yi-Chen Huang：机构信息未在 arXiv HTML 中可靠披露
- Sebastian Fieldhouse：机构信息未在 arXiv HTML 中可靠披露
- Kea-Tiong Tang：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

面向智能手机、无线耳机与助听器等电池供电设备的语音增强任务，输入为含噪短时傅里叶变换频谱，输出为增强后语音频谱，难点在于全频带与子带建模需要大算力而端侧功耗与片上存储极受限。该工作以脉冲全子带网络为基线，先经量化感知训练与激活函数简化及批量归一化折叠得到对称整型权重与膜状态的硬件友好整数模型，权重存储由4MB降至1MB以适配片上静态存储。整数模型的门控预激活经255表项查表映射为门控系数，再经预计算整数乘子与移位重缩放维持膜电位更新结构，其输出的稀疏二值脉冲索引进入加速器参与调度。同一物理混合处理单元阵列经分时复用依次完成门控矩阵乘法、膜更新与多帧深滤波复数累加，事件驱动地址译码仅取活跃脉冲对应权重以跳过无效访存与运算。相比仅支持稠密乘累加的已有加速器，其机制差异在于以稀疏感知取数与同一阵列覆盖异构负载，在保持语音质量的同时降低运算与访存开销。在Intel N-DNS Challenge数据集评测任务下，Zephyr的SI-SNR为14.54 dB，低于Spiking-FullSubNet-XL的SI-SNR 15.20 dB。该结论仅适用于该数据集的离线评测与特定 45 nm 能量模型外推，未验证多噪声、混响与说话人泛化下的稳定性。原文未披露训练、推理或部署成本的完整实测功耗与端到端系统功耗，现场可编程门阵列验证仅提供延迟与实时因子证据。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么要在耳机上省电？

这篇论文研究的输入是带噪声语音的短时傅里叶变换复数频谱，输出是增强后的复数频谱再转回可听语音，目标是在手机、无线耳机和助听器这类靠电池供电的端侧设备上完成语音增强。初学者容易把去噪理解为把波形丢给模型直接回归干净波形，原文的数据流显示实际路径更结构化：先对幅度谱和相邻频点做全带与子带建模，再预测复数滤波系数，最后用多帧深滤波作用于当前帧和历史帧。

必须保留的关键信息是帧长条件与评估条件：摘要报告的 52.9nJ 对应每 32 ms 音频帧在 45nm 定制数字硬件下的计算能耗估算，FPGA 验证在 100 MHz 下实时因子为 0.727。输出不是通用大模型的文字或标签，而是 1 帧 1 帧的增强频谱，因此延迟和每帧能耗直接决定电池续航和通话实时性。论文没有声称代码、模型或数据已公开，本次证据中资源状态为无可用绑定，所以复述时只能讲方法与报告数字，不能写读者可下载运行。

白话说，任务是让耳机在不发热不断电的前提下把人声从噪声中捞出来，省电不是附加优点而是能否部署的前提。

### 同任务同数据的已有路线分在哪里？

在相同输入和相同去噪目标下，已有路线可分为传统人工神经网络去噪、全子带建模和脉冲化降功耗三支。RNNoise、DCCRN 和 FullSubNet 代表用神经网络辅助传统处理提升听感，但原文指出它们需要大量稠密乘累加和大内存，在无线耳机片上系统上部署困难。Spiking-FullSubNet 与 DPSNN 代表把网络脉冲化并利用稀疏二值激活降低复杂度，在 Intel-DNS 挑战赛数据集上曾报告 15.20 dB 与 14.70 dB 的水平。挑战赛的官方基线与优胜系统提供了同数据集对照，例如 Spiking-FullSubNet-XL 作为优胜者在浮点精度下报告 15.20 dB 与 3.03 的 DNSMOS，以及按操作数代理估算的 1.48 微焦量级能耗。

另一条稀疏路线 S5 的处理在原文脚注中被明确说明为按有效操作数 3.2 倍折算得到 0.463 微焦，属于派生估算而非硬件实测。相关工作的分歧点不在指标名称，而在能耗口径是否一致：浮点乘与脉冲累加的单位能量不同，是否跳零计数、是否计入膜更新与归一化都会改变结论。因此后文所有比较都必须先对齐数据集、精度、是否跳零以及 45nm 系数，才能判断改进来自算法还是来自口径。

### 脉冲网络省电的承诺卡在哪一个具体矛盾？

脉冲网络的省电承诺建立在 1 个条件上：硬件真能跳过零脉冲并只用加法完成脉冲驱动的累加。然而达到高精度的语音去噪脉冲网络往往不是纯脉冲操作，原文明确列出其计算是异构的：编码层可能需要矩阵乘法，门控与泄漏项需要逐元素乘法，深滤波需要复数乘累加，另有层归一化和批归一化等连续值操作。若加速器只支持同构乘累加，就无法完整推理；若为每种算子各做专用模块，又会浪费面积并增加搬数。

第二个矛盾是精度与存储：浮点权重约 4 MB，对助听器或蓝牙耳机片上静态随机存储器而言不可行，必须压缩到 1 MB 量级而不明显掉听感。第 3 个矛盾是评估口径：操作数代理只计突触与神经元操作数，不能反映 INT8 与浮点差异、查找表访问与通道级重整化开销，若直接把代理数字当成实测功耗会误导选型。Zephyr 要解决的正是这 3 个可操作问题：如何改写网络使其对硬件友好，如何用一套计算阵列覆盖异构负载并跳零，如何在统一数据集上给出可核对的精度与能耗条件。

### Zephyr 让一个样本走完哪条流水线？

沿一个含噪复数频谱帧走完全流程最容易建立全局观。输入复数频谱 X 同时分出 3 路：一路取幅度做 0.5 次幂压缩后送全带模型，一路与全带特征拼接成局部窗送子带模型，一路进帧缓冲保留当前帧加历史帧以供深滤波使用。全带分支先对 0 到 63 频点做层归一化，再经两层门控脉冲单元编码器与线性层得到全局频谱嵌入。子带分支把该全局嵌入与邻域频点拼接后，按低、中、高带分别做层归一化、两层门控脉冲单元与线性层，分别预测 5 抽头、3 抽头和 1 抽头的复数滤波系数。

多帧深滤波把这些系数作用于当前帧与前序短时傅里叶变换帧，重构出增强频谱 Y。硬件侧的对应动作是：帧缓冲与层归一化逻辑准备特征，事件驱动权重读取按活跃脉冲索引取权重，混合 PE 阵列分时完成门计算、膜更新与深滤波，循环状态静态随机存储器保存膜电位供下一时刻使用，顶层有限状态机协调阶段切换。
下面导读图 1 的模型数据流，读图前先明确该图只画推理阶段的频谱变换与系数预测，不含训练梯度与功耗测量。

> **看图路径：** 1. 先从左侧复数频谱输入沿箭头找到幅度分支、局部窗拼接分支和帧缓冲分支三条输入线；2. 再看上部全带模型如何输出全带特征并送入下部三个子带分支；3. 最后核对低中高带分别输出 5 抽头、3 抽头、1 抽头系数并汇入多帧深滤波得到增强频谱

[![原论文 Figure 1：Model data flow of Spiking-FullSubNet.](https://arxiv.org/html/2609.37711v1/zephyr-model.svg)](https://arxiv.org/html/2609.37711v1/zephyr-model.svg)

*论文图 1。原论文 Figure 1:：“Model data flow of Spiking-FullSubNet.”。*

图 1 左侧为复数频谱输入，中部上方虚线框为全带模型，下方虚线框为 3 个子带模型，右侧为多帧深滤波输出增强频谱。可见的教学要点是全带特征被广播到 3 个子带分支作为全局条件，而局部窗拼接提供邻域结构，低带用更多抽头捕捉低频谐波细节，高带只用单抽头，帧缓冲的箭头回连到深滤波说明滤波跨越时间帧。这种分工解释了为何计算必然异构：嵌入提取是矩阵与脉冲累加，门控是逐元素乘，深滤波是复数乘累加。

### 门控脉冲单元的三个式子各算什么？

门控脉冲单元是全文计算的核心，先讲符号再讲目标。以上标 l 表示第 l 层，t 表示当前时刻，o 的上标 l 减 1 表示上一层当前时刻的脉冲输出，o 的上标 l 带 t 减 1 表示本层上一时刻的脉冲输出，W 表示两组矩阵权重，b 表示偏置，i 表示输入电流，lambda 表示动态衰减门，u 表示膜电位。第一个式子算输入电流，它把前馈脉冲与循环脉冲分别经矩阵加权后相加，是稀疏脉冲驱动的累加，在二值脉冲下可用加法实现。

第二个式子算门系数，它对同样的两路加权和再过 S 形函数压缩到 0 到 1，用于决定记忆与更新的比例。第 3 个式子做膜更新，用门系数加权旧膜电位与新输入电流之和。原文浮点实现中每次膜更新包含 2 次逐元素乘，Zephyr 保留该结构但改用整数运算实现门控乘积与后续重放缩。

**门控脉冲神经元 × 动态衰减门：** 门控脉冲神经元是 Spiking-FullSubNet 的基本计算单元，负责把输入电流和历史膜电位融合成新状态并决定是否发放二值脉冲；动态衰减门是该单元内部由输入算出的 0 到 1 系数，负责权衡保留多少旧膜电位和采纳多少新输入电流，二者搭配的理由是语音频谱随时间连续变化需要可变的记忆长度，组合后使同一单元既能做稀疏脉冲累加又能做需要乘法的门控更新。

\[\displaystyle i^{l}(t)\]

该式的输入是两路脉冲经矩阵加权后的和加偏置，计算目标是当前层的输入电流，为后续门控融合提供新信息项。硬件友好改写不改变该式的求和结构，改变的是数值精度与累加位宽：矩阵运算在 INT32 中累加，权重为对称有符号 INT8，线性与门控矩阵权重按输出通道设尺度，连续激活按张量设尺度，循环膜状态按通道设尺度，二值脉冲单独表示。

门系数的 S 形函数在运行时不求指数，而是用 255 表项查找表把负 127 到 127 的有符号预激活映射为分母 255 的无符号 8 位门系数，再用预计算整数乘子与移位对齐门控乘积与状态更新的尺度。膜更新后的批归一化仿射变换被合并到对应偏置与重整化参数中以减少计算，该折叠不同于全带与子带路径中与数据相关的层归一化操作，后者仍需单独执行。

### 同一组 PE 如何分时算完三种不同算子？

加速器顶层分为推理模块、有限状态机和事件驱动权重读取存储三部分，推理模块内含帧缓冲、层归一化、特征寄存器、PE 阵列与循环状态存储，PE 控制器按推理阶段调度同一物理阵列。事件驱动部分含地址译码逻辑与基于块存储的参数存储，在矩阵脉冲计算时把已存活跃神经元索引翻译为对应的权重地址，只为活跃事件取数。
下面导读图 2 的加速器总体结构，读图前先区分黄色推理区与蓝色存取区以及顶部控制条。

> **看图路径：** 1. 先确认顶部 FSM 横跨左右两大区域的控制箭头走向；2. 再看左侧黄色推理模块内帧缓冲到层归一化到特征寄存器再到 PE 阵列的主数据流；3. 最后看右侧蓝色事件驱动权重读取如何经地址译码与参数 SRAM 向 PE 阵列供数并连接 DRAM

[![原论文 Figure 2：Overall architecture of the Zephyr accelerator.](https://arxiv.org/html/2609.37711v1/Accelerator_block_diagram.png)](https://arxiv.org/html/2609.37711v1/Accelerator_block_diagram.png)

*论文图 2。原论文 Figure 2:：“Overall architecture of the Zephyr accelerator.”。*

图 2 显示输入先进入帧缓冲再经层归一化逻辑到特征寄存器，PE 控制器驱动 PE 阵列并与循环状态存储双向交互，右侧地址译码逻辑连接片外动态随机存储器并向下供给参数静态随机存储器，参数存储再向 PE 阵列供数。该图说明稀疏收益的来源不是 PE 本身变快，而是译码阶段就丢弃了非活跃脉冲对应的取数与累加。
下面导读图 3 的混合 PE 阵列复用，读图前先明确三列是同一硬件在不同时间的用法而非 3 套硬件。

> **看图路径：** 1. 先看顶部同一物理混合 PE 阵列分出的门路径、膜到脉冲路径和深滤波路径三列；2. 再对比门路径的重整化库加门后处理加 Sigmoid 表与膜路径的重整化加串行器加脉冲判决的差异；3. 最后确认三列下方分别输出门系数、状态与活跃索引、深滤波结果

[![原论文 Figure 3：Time-multiplexed reuse of the same physical Hybrid PE array across different computation paths.](https://arxiv.org/html/2609.37711v1/pe_new_crop.svg)](https://arxiv.org/html/2609.37711v1/pe_new_crop.svg)

*论文图 3。原论文 Figure 3:：“Time-multiplexed reuse of the same physical Hybrid PE array across different computation paths.”。*

图 3 左列门路径用混合 PE 阵列做所需乘累加，经重整化库与门后处理再查 S 形表得到输入电流项与门系数；中列膜到脉冲路径复用同一阵列算膜状态更新，经串行器与共享重整化单元后做脉冲判决并由活跃索引写器记录索引；右列深滤波路径复用同一阵列做复数乘累加，把实部虚部映射到 PE 对上并在多抽头上累加，无需专用复数模块。这种安排的理由是 3 阶段异构但互斥，分时可提高利用率并保持灵活性。稀疏感知执行的对比是：稠密执行不论脉冲是否为零都取全部权重向量送阵列，稀疏执行先提取活跃索引，只取活跃索引对应的权重向量，从而同时省去无效访存与无效操作。

**混合 PE 阵列 × 分时复用：** 混合 PE 阵列是能执行矩阵乘、纯加和逐元素乘的同一组物理计算单元，分工是覆盖门计算、膜更新和复数深滤波三种异构负载；分时复用是指让该阵列在不同推理阶段切换数据通路和后处理单元，分工是避免为每种算子复制硬件，搭配理由是三阶段不同时执行，组合后以一套算力完成全流程并保持利用率。

**激活稀疏 × 事件驱动权重读取：** 激活稀疏指网络中大量脉冲取值为零从而对应计算可跳过的性质，分工是提供可省的理论空间；事件驱动权重读取是只记录活跃脉冲索引再由地址译码逻辑取对应权重列的过程，分工是把稀疏变成省访存和省累加的实际动作，搭配理由是矩阵脉冲乘中零脉冲对应的权重列乘零无用，组合后同时减少 DRAM 访问和 PE 操作。

### 量化与简化改了哪些参数，哪些没有训练？

本研究的训练含义需要准确界定：论文报告的是对 Spiking-FullSubNet 的硬件友好改写所用的量化感知训练与激活函数简化及批归一化移除，而非从零设计新网络结构。按证据可确认的是：神经网络权重、全部非脉冲激活和循环膜状态采用基于量化感知训练的对称有符号 INT8 量化，矩阵运算在 INT32 累加，门控乘积用更宽整数中间精度，尺度按上述通道与张量规则设置。激活函数简化指用 255 表项 S 形查找表代替运行时指数求值，批归一化指膜更新后的仿射变换被折叠到偏置与重整化参数。

未报告的具体缺项必须指出：原文未给出量化感知训练的优化器、学习率、轮数、直通估计器细节、校准集划分与重置时机，也未说明梯度是否截断于脉冲发放的不可微点，因此不能从模型名称推定梯度路径。FPGA 部分没有训练阶段，它执行的是已量化模型的推理验证与延迟测量。教学例子：若把 INT8 改写理解为推理后直接截断，会忽略训练中模拟量化误差的关键作用，但该例子仅为帮助理解，不附加任何数值效果。

**量化感知训练 × 重参数化折叠：** 量化感知训练是在训练前向中模拟 INT8 量化误差从而让权重适应低精度的过程，分工是保精度；重参数化折叠是把膜更新后的批归一化仿射变换合并到偏置和重整化乘子与移位中的过程，分工是省运行时计算，二者搭配是因为量化后的尺度对齐必须与归一化参数一致，组合后 INT8 推理不再单独执行批归一化。

### 在什么数据、指标和能量口径下比较？

评估数据为 Intel N-DNS 挑战赛数据集，语音增强质量用 SI-SNR 与 DNSMOS 总分表示，数值越高越好，能耗越低越好。硬件性能用板级环路延迟与持续实时因子衡量，实时因子小于 1 表示处理速度快于音频实时。必须区分两种能量口径。一种是与历史提交对照的操作数代理，其形式为突触操作数加 10 倍神经元操作数，该加权只反映操作数变化，不显式计入操作数精度、查找表访问或通道级重整化。

另一种是本文为 45nm 定制硅片所做的计算能耗估算，在跳零后按 INT8 乘 0.20pJ 与 INT32 加 0.10pJ 加权，并要求全模型计入膜更新、通道重放缩、查找表、归一化与深滤波，内存访问开销不在算术系数内，且该估算不代表 FPGA 实测能耗。历史基线的代理基于 45nm 下每浮点乘 4.6pJ 与每累加 0.9pJ，而 S5 的 0.463 微焦是按有效算力 3.2 倍折算的派生值。

\[P_{\mathrm{proxy}}=\mathrm{SynOps}+10\times\mathrm{NeuronOps},\]

该式输入为突触操作率与神经元操作率，目标是得到可跨提交比较的代理分数，权重 10 为代理赋予神经元操作的相对代价。实现上计算能耗按跳零后操作数加权，且因原 Spiking-FullSubNet 已计入脉冲活动，需保持一致计数规则以避免对稀疏收益双重计数。

**操作数代理能耗 × 定制硅片估算能耗：** 操作数代理能耗是按突触操作数加十倍神经元操作数计数的 Intel N-DNS 挑战赛比较口径，分工是统一不同提交的计数规则；定制硅片估算能耗是按 INT8 乘 0.20pJ 与 INT32 加 0.10pJ 等 45nm 系数对跳零后操作加权的本文估算，分工是反映量化与稀疏后的计算能耗，二者搭配是为了既能与历史基线同口径对照又能说明硬件友好改写的效果，组合后 52.9nJ 只能理解为估算而非 FPGA 实测。

### 部署成本的数字各自由哪句证据支撑？

部署成本需分开讨论训练资源、推理开销与实际延迟。训练资源在本次证据中未报告具体算力与时长，只能确认采用了量化感知训练。推理开销的证据包括 INT8 精度、INT32 累加、255 表项查找表与通道级重整化，以及全模型需计入的膜更新、归一化与深滤波，内存访问另计。实际延迟的证据为 PYNQ-Z1 上 32 个 PE 在 100 MHz 下平均 5.382 ms 与实时因子 0.727，资源对比涉及查找表与块存储占用，但本次原表选择已保留实现汇总，跨加速器的横向资源对比因证据矩阵不完整而不展开为宽表。

| 操作与精度条件 | 位宽与规模 | 报告值 | 口径与含义 | 可运行性 |
| --- | --- | --- | --- | --- |
| 权重与激活量化 | symmetric signed INT8 | weights and activations in INT8 | 量化感知训练对称有符号 | 硬件友好版实际采用 |
| 矩阵累加 | INT32 | accumulate in INT32 | 中间精度累加 | 硬件友好版实际采用 |
| 门查找表 | unsigned 8-bit denominator 255 | 255-entry sigmoid LUT maps [-127,127] | avoiding runtime exponential evaluation | 硬件友好版实际采用 |
| 权重存储 | 4 MB to 1 MB | reduces weights from 4 MB to 1 MB | SRAM feasibility for edge SoC | 硬件友好版实际采用 |
| 操作能量系数 | INT8 and INT32 | 0.20 pJ and 0.10 pJ per operation | 45nm 0.9V CMOS estimate | 估算而非实测 |

该表把存储、查表、能量系数与实测延迟分开，避免把估算能耗当成板级功耗。总体趋势是量化解决存得下，稀疏解决少算少搬，分时复用解决异构覆盖，但每组语音的稀疏度不同，不能把平均跳过率推广为每帧都成立。

### 精度掉了多少，能耗与速度换来什么？

比较的问题是：在同一 Intel N-DNS 数据集上，浮点优胜系统与脉冲基线的精度与能量代理口径如何对照，而 Zephyr 这一硬件友好 INT8 策略在定制硅片估算口径下报告了什么。公平条件要求对齐数据集与同一 SI-SNR 方向，并区分代理值与定制硅片估算值，派生折算值不能当作硬件实测。下表第一张为 FPGA 实现汇总的原表选择，保留平台与延迟稀疏证据；第二张为跨系统精度与能耗对照的整理表，保留浮点优胜对照与脉冲基线作为必要基线，以及 Zephyr 作为实际可运行策略，S5 折算另行说明为派生。

| Metric | Value | Metric | Value |
| --- | --- | --- | --- |
| Platform | PYNQ-Z1 | Device | XC7Z020-1 |
| Clock frequency | 100 MHz | Number of PEs | 32 |
| Mean latency | 5.382 ms | Request/op. skipa | 87.85% |
| Traffic reductionb | 54.47% |  |  |

上表说明实现条件为 PYNQ-Z1 器件 XC7Z020-1、100 MHz、32 个 PE，平均延迟 5.382 ms，请求或操作跳过率 87.85%，参数读取搬运减少 54.47%。这些数字支持稀疏机制跳过了大部分无效操作，但它们是延迟与访存收益而非精度证据，且搬运减少幅度小于操作跳过率，说明索引与控制本身仍有开销。

| 对照项 | 精度证据 | 能量证据 | 口径说明 | 运行属性 |
| --- | --- | --- | --- | --- |
| SFSN 与 DPSNN 高性能对照 | 15.20 dB and 14.70 dB on the Intel-DNS challenge dataset for SFSN and DPSNN respectively | 理论功耗与计算效率 | 高性能维持 | 非本方法基线 |
| Zephyr 硬件友好版 | QAT and activation function simplification | 52.9nJ per 32 ms audio frame | custom digital hardware in a 45nm process node | 实际可运行 INT8 策略 |
| S5 稀疏折算对照 | same 15.20 dB SI-SNR as Spiking-FullSubNet-XL | 0.463 μJ | operation-based energy-proxy methodology | 派生折算非直接硬件测量 |
| 能量代理系数 | — | 4.6 pJ per FP32 MAC and 0.9 pJ per AC operation | 45-nm CMOS energy model | 系数口径 |

该整理表显示 Zephyr 报告每 32 ms 音频帧 52.9nJ 的定制硅片估算，摘要称经量化与激活简化后功耗改善约 28 倍。必须强调口径限制：S5 的 0.463 微焦是按有效操作数成比例折算的派生值而非直接硬件测量，代理系数基于 45 纳米互补金属氧化物半导体能量模型，不能把不同口径的代理值与定制硅片估算直接相减得出绝对节电量。未胜出与边界是纯操作数口径下的对照仍存在，且 FPGA 侧报告实时因子 0.727 仅为延迟估计而非能耗实测。

### 若去掉稀疏与量化，数字会如何变化？

论文没有提供逐模块消融的独立精度表，因此本节只能按已报告的实现条件做有限对照，而不能编造拿掉某模块后的精度。能量侧的对照逻辑是：量化把权重从 4 MB 压到 1 MB，使片上静态存储可行，这是部署可行性的门槛而非单纯的能耗数字；稀疏侧报告操作跳过 87.85% 与搬运减少 54.47%，说明跳零主要省计算，对访存的节省较小，若关闭事件驱动读取则这两项收益消失。

精度侧的唯一可核对对照是浮点优胜系统 15.20 dB 与 INT8 版 14.54 dB 之差，它混合了量化、激活简化与归一化改写的影响，不能归因于单一改动。能量系数侧的对照是浮点乘 4.6pJ 与脉冲累加 0.9pJ 的代理系数对比 INT8 乘 0.20pJ 与 INT32 加 0.10pJ 的估算系数，精度与位宽同时变化时不能把系数下降全部记为稀疏功劳。失败条件方面，原文未报告极低稀疏度语音段的延迟上界，也未报告查找表量化边界外的门系数行为，这些是复现时需补测的边界。

### 哪些结论不能从现有证据推出？

第一，能耗结论的适用条件受限。52.9nJ 是按 45nm 系数对跳零后操作加权的计算能耗估算，原文明确说明不代表 FPGA 实测能量，且需全模型计入重整化与访存才能成立，因此不能承诺在助听器整机上同等节电。第二，精度结论的边界未 fully 覆盖。报告的 14.54 dB 与 3.00 是在 Intel N-DNS 上的平均表现，未报告噪声类型分组、低信噪比段与主观听感的误判分布，不能把平均值推广到所有场景。第三，对比口径存在冲突风险。

代理分数、定制硅片估算与派生折算三者系数不同，若混用会得出矛盾的倍数，复述时必须保留各自单位与条件。第四，硬件结论的外推受限。PYNQ-Z1 的 0.727 实时因子与资源占用是在 100 MHz 与 32 个 PE 下测得，不能直接推定为定制硅片频率或不同资源下的延迟。缺失证据不是技术错误，但相关性不是因果，未测量整机功耗、误触发率与极端稀疏段延迟时，不应声称这些量得到改善。

### 要复现应先固定什么，再补测什么？

复现先固定信息条件：同一 Intel N-DNS 数据集划分、同一短时傅里叶变换帧长与 32 ms 帧口径、同一 SI-SNR 与 DNSMOS 聚合方式，以及同一能量口径。第一步按证据实现硬件友好改写：对称有符号 INT8 量化权重、非脉冲激活与循环膜状态，矩阵在 INT32 累加，门控用宽整数中间精度，S 形用 255 表项映射负 127 到 127 到分母 255 的 8 位系数，膜后批归一化折叠到偏置与重整化参数而层归一化保留。第二步实现推理流水：全带嵌入广播到低中高子带，分别预测 5、3、1 抽头复数系数，再做多帧深滤波。

第三步实现加速器：同一混合 PE 阵列分时做门乘累加、膜更新与复数累加，活跃索引写器与地址译码只为活跃脉冲取数。还需补的验证是：量化感知训练的超参数与校准细节、查找表边界外行为、不同稀疏度下的帧延迟分布，以及整机功耗与主观听感。由于本次无可用代码与模型绑定，只能按论文文字重写，不应声称系统可直接运行。

### 何时值得尝试这种脉冲加复用阵列的路线？

当部署目标是电池供电且每帧预算以纳焦与毫秒计时，同时算法已呈现高激活稀疏但包含门控乘与复数滤波等异构操作时，该路线值得尝试。它的可复述要点是：用 INT8 与查表把网络改到存得下算得起，用活跃索引把稀疏变成少取数少计算，用同一阵列分时覆盖异构负载以省面积。支持判断的最强证据是同数据集上 14.54 dB 与 3.00 的质量保持，以及 87.85% 操作跳过与 54.47% 搬运减少对应的 0.727 实时因子。主要代价是相对浮点优胜系统约 0.66 dB 的下降，以及能耗数字停留在估算口径。

若你的场景稀疏度很低、或以主观听感与极端噪声为主要风险，则应先补分组评测与整机功耗测量，再决定是否采用。论文特有的易误解点是把 52.9nJ 当成 FPGA 实测，把 S5 折算值当成可部署收益，把平均延迟当成最坏延迟，避开这三点才能准确复述方法。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.37711)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-01/)
