---
title: "The NPU-ASLP System for Music Restoration in the CCF-AATC 2026 Challenge"
date: 2026-10-15
draft: false
tags: [音频修复, 混合专家模型, 时频分析, 音乐]
categories: [论文速递]
description: "针对播放器染色、空间传播与手机录音链路耦合导致的音乐退化，该系统用尺度感知编码加直接复数谱映射的双轴 Top-1 稀疏专家模型复原，并以 202 种条件下 1572.12 小时对齐仿真数据提供监督，最终以 2.951M 参数取得盲测 LSD 1.273、FAD 2.540、ViSQOL 3.495 的第三名成绩。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.15464"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "手机翻录音乐如何复原：NPU-ASLP 系统的尺度感知与对齐仿真"
paper_digest_original_title: "The NPU-ASLP System for Music Restoration in the CCF-AATC 2026 Challenge"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.15464v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.15464v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.15464v1.pdf"
paper_digest_primary_task: "音频修复"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-restoration","label":"音频修复"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"method","id":"method.time-frequency","label":"时频分析"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对播放器染色、空间传播与手机录音链路耦合导致的音乐退化，该系统用尺度感知编码加直接复数谱映射的双轴 Top-1 稀疏专家模型复原，并以 202 种条件下 1572.12 小时对齐仿真数据提供监督，最终以 2.951M 参数取得盲测 LSD 1.273、FAD 2.540、ViSQOL 3.495 的第三名成绩。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zeyu Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yike Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xingchen Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chaoren Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jingyi Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yurun Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jierui Guo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chunjiang He"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lei Xie"}]
paper_digest_abstract_sha256: "13a825fa178fa0e95d87c5f230efb48b7b178bdf92fc8f528ad1bb3605653f08"
paper_digest_sidecars: {"citation.bib":{"sha256":"54fa0e85e65bc04afca91579c3a3b1d07a7db89c63bcea087672ffe75dc28820","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15464/citation.bib"},"citation.json":{"sha256":"ec41a774b7c1772179be37c8615d3a26f06177022f124f21e980873a7989e87a","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15464/citation.json"},"citation.ris":{"sha256":"c8d52b3df57e8d51468f8a0069af4a2531e274ec5040f05f31e81817de0cafe3","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15464/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"70bbb453e88f9aeccc05137a566de11a1917ecaf10053245721d1699576221d0","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15464/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e16c25deb70a1cc6960df04435b7cf02a30867cd5b34fc1050301147be6d1dcb"
paper_digest_api_reader_plan_sha256: "7768dfa4046e49d432f4f55c5359ed35eba28af04e5b6aa99341769a59c5e8ad"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "1820137879bf402189d98bf4050284674a341f9a52e3ab76f726e2e1a7472a11"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "7392d859d46412442707fd081e3b2177c94e3e3aab6d358fe268bc62f6824504"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "922ad325a51c6eed21aabad8ca8c43c896ca14348f7b32b7502b4debac5c4794"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "34c0d8a4232019b6f05b93437fcbb52a6674023994f088db454bf675efe5815d"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 手机翻录音乐如何复原：NPU-ASLP 系统的尺度感知与对齐仿真

> 英文题目：*[The NPU-ASLP System for Music Restoration in the CCF-AATC 2026 Challenge](https://arxiv.org/abs/2610.15464v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频修复](/audio-paper-digest-blog/papers/?concept=task.audio-restoration)
- **研究方法**：[混合专家模型](/audio-paper-digest-blog/papers/?concept=method.moe)；[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing) → [时频分析](/audio-paper-digest-blog/papers/?concept=method.time-frequency)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zeyu Zhu：机构信息未在 arXiv HTML 中可靠披露
- Yike Zhu：机构信息未在 arXiv HTML 中可靠披露
- Xingchen Li：机构信息未在 arXiv HTML 中可靠披露
- Chaoren Yu：机构信息未在 arXiv HTML 中可靠披露
- Jingyi Wang：机构信息未在 arXiv HTML 中可靠披露
- Yurun Li：机构信息未在 arXiv HTML 中可靠披露
- Jierui Guo：机构信息未在 arXiv HTML 中可靠披露
- Chunjiang He：机构信息未在 arXiv HTML 中可靠披露
- Lei Xie：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

输入是 16 kHz 单声道手机录音，输出是与干净音乐参考接近的波形，难点在于扬声器染色与非线性、距离衰减、混响、环境噪声和手机增益控制耦合在一起，且多处退化直接改变各频带能量。系统把录音短时傅里叶变换得到的复数谱按 Mel 方式分成子带，尺度感知编码器同时保留归一化后的带内结构和每带能量大小，再由 6 个时频混合专家模块分别建模跨频带和时间依赖，最后由复数映射解码器直接预测干净复数谱并经逆变换得到波形。训练监督来自挑战赛校准的播放、传播和录音仿真器生成的严格对齐数据，弥补官方约 10 小时且存在时延的真实配对的不足。与直接沿用频带归一加掩码估计的做法相比，该组合保留了幅度尺度线索，也不再把输出限制为输入的逐点乘积。在 25 条官方真实开发录音的全曲评测中，提交系统在分布差距指标上达到 3.549 的 FAD，低于本地复跑基线的 6.430。结论适用于挑战赛定义的低质播放和多扬声器混响重放两类条件，样本级对齐鲁棒性和更低算量仍是原文承认的局限，原文披露了 10 秒输入的推理算量，未披露完整训练耗时。

## 🔗 开源与复现资源

- 第三方资源：<https://www.npu-aslp.org> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的是什么样的录音问题

这篇论文参加的是 CCF-AATC 2026 挑战赛第一赛道，任务是音乐复原。输入是 16 千赫单声道手机录音，目标是恢复出接近干净参考的自然清晰音乐。录音不是简单加了噪声，而是经过完整物理链路：音乐先被播放设备放大播出，经历扬声器染色和非线性，再经过空气传播的距离衰减和混响，加上环境噪声，最后被手机麦克风、前置放大和自动增益控制录下来。多种退化耦合在一个观测里，有些直接改变各频带的能量强弱。音乐本身又包含宽带谐波、细泛音、打击瞬态、人声和多种乐器，既要恢复精细的复谱结构，也要恢复跨频带的能量关系。

官方只提供约 10 小时真实配对数据，且作者分析发现部分输入与目标存在不可忽略的时间偏移，平均绝对延迟 89 毫秒，80% 配对延迟超过 20 毫秒，这会污染逐样本对齐的谱监督。同时模型大小和计算量有严格预算，官方基线 AudioFlow 虽可行但 550.87M 参数和 4.49T 计算量无法满足要求。理解这个输入链路，是理解后文为什么要保留带能量、为什么要做仿真对齐的前提。

### 已有方法提供了什么，还缺什么

论文回顾了 3 条线。官方 AudioFlow 基线做隐空间迭代流匹配，证明生成式复原可行且对未对齐训练数据较稳健，但复杂度远超预算。Band-Split RNN 证明非均匀子带加跨带与时间交替建模对音乐有效。Time-Frequency Mixture-of-Experts 即时频混合专家，在此基础上在频率轴和时间轴都加入稀疏激活专家，用激活计算量换模型容量。

论文认为直接迁移时频混合专家仍保留上述 3 个不匹配：带归一化丢幅度尺度、掩蔽头约束输出形式、不提供对齐监督。所以本文不是另起新范式，而是在该主干上做两处任务适配，加一个挑战校准的仿真器来补监督。比较时输入、目标、监督和运行阶段需对齐，本文后续开发集比较是在同一全曲评估器下重跑基线得到的，盲测则是官方排行榜结果，不能把不同评估器下的数字直接混比。

### 为什么常规的频带归一化和掩蔽不够用

论文指出 3 个具体不匹配。第一，频带划分表示适合音乐非均匀频率结构，但常规做法是按帧按带做归一化，会丢掉输入幅度尺度，跨带电平线索被削弱，而本任务恰恰需要用这些线索补偿耦合退化。第二，掩蔽式输出把估计约束为输入的逐点乘积形式，当某些成分被强烈衰减或非线性扭曲时，这种依赖输入的乘法形式不够灵活。第三，有限且未对齐的真实配对无法直接提供大规模严格对齐监督。

因此论文要同时回答：如何在有限参数内恢复耦合退化，如何保留输入幅度尺度线索，以及如何获得与挑战条件匹配的大规模严格对齐监督。最终系统控制在 2.951M 参数、10 秒输入 82.659 GMACs，盲测得到 -49.067 dB SI-SNR、1.273 LSD、2.540 FAD 和 3.495 ViSQOL，其中后三项第 3 名。这些数字的比较条件后文会分别交代，不能跨评估器直接相减。

### 系统从录音到干净音乐经历了哪些步骤

系统主干输入是录音波形的复谱 Y，属于复数矩阵，维度为频点数 F 乘时间帧数 T。先用 32 毫秒 Hanning 窗、8 毫秒移位做短时傅里叶变换，再把 F 个频点切成 K 等于 80 的 Mel 式子带。尺度感知带编码器把每个带内频点编码成 N 等于 32 维特征，得到 N 乘 K 乘 T 的 3 维表示。接着堆叠的 TF-MoE 块沿频率轴和时间轴依次处理，最后映射解码器合并子带特征，直接估计目标复谱，再经逆短时傅里叶变换重建波形。堆叠 6 层、隐维 32、80 带的配置以方法正文和图注为准。

下图展示了这条从频谱提取、带划分编码、TF-MoE 建模到映射解码的主路径，是理解各组件分工的总览。图内可见的是 Mel80 带划分框、Z 与 Q 特征维度框和 TF-MoE 箭头，框内并无 6 层或 x6 字样，层数请以图注 R 等于 6 和方法中的 6 层描述为准，不要在图内寻找不存在的层数标注。

> **看图路径：** 1. 先沿输入复谱到输出复谱的箭头看主路径；2. 再看图内 Mel80 带划分与 Z/Q 特征维度的框注；3. 注意 TF-MoE 框内没有层数标注，R 等于 6 以图注和方法为准

[![原论文 Figure 1：Overview of the restoration backbone.](https://arxiv.org/html/2610.15464v1/backbone.svg)](https://arxiv.org/html/2610.15464v1/backbone.svg)

*论文图 1。原论文 Figure 1:：“Overview of the restoration backbone.”。*

从图中可见，输入输出都是全频带复谱，中间是压缩的子带特征。带划分和合并负责频率分辨率的转换，TF-MoE 负责时频依赖建模，编码器和解码器的改动分别解决尺度保留和耦合修复问题。推理时采用 10 秒分块、5 秒跳跃的交叠相加，用平方正弦余弦窗平滑边界，复杂度统计包含短时傅里叶变换和逆变换，按官方 11M MAC 等于 2 FLOPs 换算，不含窗交叠部分。

### 尺度感知编码如何同时保留形状和响度

传统子带归一化只保留归一化后形状，丢了该带原来有多响。尺度感知编码把绝对幅度尺度做成显式特征。对第 t 帧第 b 带，把实部虚部系数拼成向量 z，带宽为 Wb。先算每带均方根 r，即向量二范数平方除以 2Wb 再开方，加极小值防止除零。然后一路用 r 去除 z 得到单位均方根方向 d，保留相位和带内相对谱关系且数值范围受控。

另一路对 r 做对数压缩，告诉模型该带实际有多强。两路拼接后经带专属投影到 N 维。

下图把这一分两路再拼接投影的过程画得很清楚，左侧是复数带输入，中间上方是带均方根加对数尺度，中间下方是频谱形状，请重点看两路在哪里汇合。

> **看图路径：** 1. 看实虚拼接后分出的上下两条支路；2. 看对数尺度支路与频谱形状支路在哪里汇合；3. 看带专属线性层输出的维度标注

[![原论文 Figure 2：Scale-aware band encoding.](https://arxiv.org/html/2610.15464v1/scale-aware.svg)](https://arxiv.org/html/2610.15464v1/scale-aware.svg)

*论文图 2。原论文 Figure 2:：“Scale-aware band encoding. One branch divides the complex spectrum by its per-band RMS to preserve phase and within-band structure, while the other branch computes the…”。*

图中两路在加号处汇合再经线性层输出 N 维向量。这种设计让归一化稳定性与能量线索得以兼得，消融显示替换传统编码器后四项指标均有改善，具体数值见后文消融表。

**频带划分 × 尺度感知编码：** 频带划分是把全频带按 Mel 规律切成 80 个不等宽子带，以适应音乐高低频结构差异大的特点；尺度感知编码是在每个子带内同时保留归一化后的形状和对数压缩后的每带能量，二者搭配让模型既看到数值稳定的频谱细节，又知道该频带原来有多响，从而补偿扬声器和距离衰减对带能量的改变。

### 双轴稀疏建模怎样分频带和时间两路工作

6 个 TF-MoE 块顺序建模跨带结构和时间动态，分别由频率轴模块和时间轴模块承担。每个模块采用 Conformer 式设计，包含四头自注意力、核长 31 的卷积和两个混合专家前馈层。每个混合专家层有 E 等于 12 个两层前馈专家，扩展因子为 4。对 token 表示 hi，Top-1 路由器只激活概率最高的单个专家，其输出乘以选中门控值，这样总容量大但每次激活计算有界。硬选择本身不可微，但选中门控值把重建梯度传回路由器，再配合负载均衡损失防止路由器坍缩到少数专家。

\[p_{i}=\operatorname{softmax}(W_{g}h_{i}),\qquad e_{i}^{*}=\arg\max_{e}p_{i,e},\qquad\operatorname{MoE}(h_{i})=p_{i,e_{i}^{*}}\mathcal{E}_{e_{i}^{*}}(h_{i}).\]

上式说明路由器先经线性加 softmax 得到概率，取最大者为选中专家，输出为门控值乘专家输出。频率轴路由按带选择专家，时间轴路由按时间选择专家，两者互补。每个块在频时两轴各有两层专家前馈，共 4 个路由器损失，块内求和后再在 6 层间平均。

**频率轴建模 × 时间轴建模：** 频率轴建模负责看同一帧内不同乐器谐波和泛音之间的跨带关系，时间轴建模负责看同一频带随时间的混响拖尾和瞬态变化，两者交替堆叠 6 层，使每个时频表示同时带有音色结构和时间连续性信息。

**混合专家 × Top-1 路由：** 混合专家是每一层准备 12 个前馈网络专家来增大条件容量，Top-1 路由是每个 token 只选概率最高的一个专家进行计算，二者组合用稀疏激活换容量，即总参数可以较多，但每次实际计算量只相当于一个专家，从而满足严格的复杂度预算。

### 直接映射解码器与掩蔽有何不同

解码器不再估计掩蔽去乘输入，而是直接预测目标复谱实部虚部。它仍以退化输入 Y 为条件，但每点估计不再约束为 Y 的逐点乘积，对被强烈衰减或非线性失真的成分更灵活。举例来说，如果某频带被扬声器严重压低，掩蔽需要用一个很大的乘数把小信号放大，估计不稳；映射则直接画出该带应有的复谱值，不必经过输入缩放。

下图对比了两种解码路径，上支掩蔽需先得掩蔽再回乘输入，下支映射由合并后特征直接解码输出，请对比箭头是否回到输入。

> **看图路径：** 1. 对比上支掩蔽需要回乘输入、下支映射直接输出的箭头；2. 注意两支都从带划分出发但解码约束不同

[![原论文 Figure 4：Complex masking versus the proposed direct mapping decoder.](https://arxiv.org/html/2610.15464v1/map.drawio.svg)](https://arxiv.org/html/2610.15464v1/map.drawio.svg)

*论文图 4。原论文 Figure 4:：“Complex masking versus the proposed direct mapping decoder.”。*

从图中可见，掩蔽支路多了一个回乘输入的环节，映射支路则是一条直达输出的箭头，直观体现了约束是否解除。从实现代价看，混合头每时频点预测加性复分量加复掩蔽，共 4 个实数输出，掩蔽和映射头各预测两个实数，因此混合头输出投影稍宽，解码参数和计算略多。消融中映射在多项最好，混合在 FAD 上最低，掩蔽四项均未胜出，作者综合多指标权衡选择映射。

**复数掩蔽 × 复数映射：** 复数掩蔽是估计一个掩蔽与输入复谱逐点相乘得到输出，输出必然受输入控制；复数映射是直接预测目标复谱的实部和虚部，不再约束为输入的乘积形式，二者相比，映射对被严重衰减或非线性失真的成分更灵活，是本文修复耦合退化的关键选择。

### 训练目标由哪些损失组成，权重如何变化

训练目标包含重建、感知和专家均衡 3 类。重建含多分辨率短时傅里叶损失，组合压缩幅度与复域均方误差项，加时域平均绝对误差损失。感知项是用冻结 VGGish 模型计算的特征损失。均衡项是 Switch 式负载均衡损失，用软重要性与硬负载乘积推动专家利用均衡，其中硬负载经停止梯度视为常数，只经可微重要性传梯度。总损失为多分辨率损失加 0.2 倍时域损失加感知权重乘 VGGish 损失加 0.001 倍均衡损失。感知权重在前 2000 优化步内从 0 线性热身到 0.05，避免早期感知项主导。

\[\mathcal{L}=\mathcal{L}_{\mathrm{MRSTFT}}+0.2\,\mathcal{L}_{\mathrm{time}}+\lambda_{\mathrm{perc}}(s)\,\mathcal{L}_{\mathrm{VGGish}}+0.001\,\mathcal{L}_{\mathrm{bal}}.\]

\[\lambda_{\mathrm{perc}}(s)=0.05\min\!\left(\frac{s}{2{,}000},1\right),\qquad s\geq 0,\]

上两式分别给出总损失组合与感知权重随全局步数 s 的热身规则。训练从随机初始化开始，种子 42，用裁剪更新，优化器为 AdamW，学习率 3 乘 10 的负 4 次方，权重衰减 0.01，2000 步线性热身加余弦衰减，8 卡每卡 12，全局批量 96。

**多分辨率短时傅里叶损失 × VGGish 感知损失：** 多分辨率短时傅里叶损失是在多个窗长下比较压缩幅度和复谱误差，保证不同时间频率分辨率下的谱结构准确；VGGish 感知损失是用冻结的音频分类网络提取特征再比较差异，推动输出在听感分布上接近高质量音乐，两者分别约束信号保真和感知质量。

### 仿真器如何按真实录音校准并保证对齐

官方配对约 10 小时，覆盖器件、距离、场景和音乐类型，但有限且不对齐，故只用于估计场景、设备、距离和电平分布，不作为唯一逐样本监督。仿真源包括网上收集经自动标注加试听筛选的高质量音乐 180436 条、噪声 821144 条、Pyroomacoustics 生成的 50000 条房间冲激响应。噪声池的具体构成如下表所示，包含公开集与内部收集，这是理解仿真多样性的基础。

| Dataset |  |
| --- | --- |
| DNS Challenge 3/5 [20, 5] | MUSAN noise [23] |
| TAU Urban Acoustic Scenes [10] | FSD50K [7] |
| DEMAND [24] | UrbanSound8K [21] |

该表列出仿真噪声池的来源，左右两列均为数据集名称，覆盖城市声景、事件声与背景噪声，更多噪声来源与音乐条目见原文表格。仿真共设 202 种场景设备质量距离条件，每条件采样 1000 段，合计 202000 对齐对，1572.12 小时。物理顺序严格按录制先后：预处理准备活跃音乐片段并匹配官方干净均方根轮廓，保留 3 秒真实上下文前缀供混响压缩和自动增益状态稳定，该前缀不计入监督段；播放模拟输入增益、可选动态压缩、软非线性和扬声器频响。

传播对每扬声器通道卷积各自冲激响应、独立增益加小延迟后求和，常规设备 1 到 2 声源，阵列用 6、12 或 18 声源，定位直达声补偿卷积延迟使监督同一起始样点，再按 1 到 50 米距离衰减加 -15 到 20 dB 信噪比的噪声；录音经麦克风响应滤波预放、自动增益、按真实电平校准加防削波线性安全增益。

下图是该链路总览，请按高质量音乐到劣化录音的顺序看 4 个阶段，并注意前缀与 3 段退化的先后依赖。

> **看图路径：** 1. 按高质量音乐到劣化录音的顺序看四个阶段；2. 注意 3 秒上下文前缀在最前端的作用；3. 看播放、传播、录音三段的先后依赖

[![原论文 Figure 5：Overview of the challenge-calibrated simulation pipeline.](https://arxiv.org/html/2610.15464v1/simu-process.png)](https://arxiv.org/html/2610.15464v1/simu-process.png)

*论文图 5。原论文 Figure 5:：“Overview of the challenge-calibrated simulation pipeline.”。*

图中从左到右依次是高质量音乐经电平条件化、播放、传播、录音得到劣化手机录音，所有参数按官方数据按场景和播放设备质量调校。训练用 200000 仿真段随机 4 秒对齐裁剪，验证用 25 首官方开发录音的头中尾 10 秒裁剪加 500 固定仿真段，选型兼顾仿真与真实域，盲测从未用于训练调参选型或仿真校准。

### 在真实开发录音上系统比基线好在哪里

开发集评估对象是全部 25 首官方真实录音共 180 秒，比较方法是劣化输入、本地重跑的官方基线和提交系统，采用同一全曲评估器，指标方向为 SI-SNR 和 ViSQOL 越高越好，LSD 和 FAD 越低越好。下表整理论文报告的相对基线的提升幅度，用于在同一评估器下看收益与代价。

| 比较对象 | SI-SNR 提升 | LSD 相对降低 | FAD 相对降低 | ViSQOL 提升 | 参数比例 | 计算比例 |
| --- | --- | --- | --- | --- | --- | --- |
| 本系统相对基线 | 10.73 dB | 25.6% | 44.8% | 0.105 | 1/187 | 1/54 |

表中本系统相对基线 SI-SNR 提升 10.73 dB，LSD 相对降低 25.6%，FAD 相对降低 44.8%，ViSQOL 提升 0.105，而参数约基线 187 分之一，计算约 54 分之一。提升最明显的是 LSD 和 FAD，说明频谱结构恢复和输出与高质量音乐分布差距缩小有效，ViSQOL 也显示感知改善。但 SI-SNR 绝对值仍为负且普遍偏低，论文指出其对样本级对齐敏感，在本任务参考价值有限，不能单凭它判断好坏。该结论仅在该 25 首真实开发录音与同一评估器下成立，换评估器或数据集结论可能变化。

### 官方盲测排名在什么条件下取得

盲测是官方发布的六支决赛队排行榜，本文队号 T010，获第 3 名，在 LSD、FAD、ViSQOL 上均第三。比较条件是官方盲测集与官方评估，与开发集评估器可能不同，故数字不能与上一表直接相减。下表给出本系统在盲测中的绝对成绩与复杂度，用于说明排名的代价条件。

| 系统 | SI-SNR | LSD | FAD | ViSQOL | 参数量 | 10 秒输入计算量 |
| --- | --- | --- | --- | --- | --- | --- |
| T010 本系统 | -49.067 dB | 1.273 | 2.540 | 3.495 | 2.951M | 82.659 GMACs |

表中本系统为 -49.067 dB SI-SNR、1.273 LSD、2.540 FAD、3.495 ViSQOL，参数 2.951M，10 秒输入 82.659 GMACs。可见该系统不属于最小模型，但属于官方评估中少于 5M 参数的最高档之一。六队 SI-SNR 普遍偏低，再次说明该指标在本任务下区分度受限。排名结论只在官方盲测集与复杂度预算下成立，换数据集或放宽预算结论可能变化，也不能把自动指标等同于人工听感。

### 编码器、输出头和损失各带来多少变化

消融回答各组件贡献，但训练配置与提交系统略有不同，组内除所列因素外其余设置相同，每组只变该因素。下表分 3 组报告相对变化，分别对应编码器、输出头和损失函数的对照。

| 对比组 | SI-SNR 变化 | LSD 变化 | FAD 变化 | ViSQOL 变化 |
| --- | --- | --- | --- | --- |
| 尺度感知相对传统编码 | 增加 2.895 dB | 降低 0.003 | 降低 0.269 | 增加 0.008 |
| 映射相对混合估计 | 增加 0.723 dB | 降低 0.035 | 增加 0.446 | 增加 0.027 |
| 竞赛损失相对传统损失 | 增加 5.159 dB | 降低 0.460 | 降低 16.693 | 增加 0.205 |

编码器组固定映射与竞赛损失，尺度感知比传统编码 SI-SNR 高 2.895 dB，ViSQOL 高 0.008，LSD 降 0.003，FAD 降 0.269，四项均优。输出头组固定尺度感知与竞赛损失，映射相对混合 SI-SNR 高 0.723 dB、LSD 低 0.035、ViSQOL 高 0.027，代价是 FAD 高 0.446，故选映射是多指标权衡而非全胜，掩蔽头四项均未胜出。损失组固定尺度感知加混合头，竞赛损失比传统损失 SI-SNR 高 5.159 dB，ViSQOL 高 0.205，LSD 降 0.460，FAD 降 16.693，差异来自谱损失形式改变、去除尺度不变项并加入波形 L1 与冻结 VGGish 项。但消融最优不等于盲测最优，组内结论不能直接推广到全系统。

### 论文自己承认的短板和未测范围是什么

论文结论明确两点局限：SI-SNR 较弱，剩余计算成本仍高。SI-SNR 弱与样本对齐敏感性有关，系统未专门做对齐鲁棒优化，未来工作指向样本对齐鲁棒性与更低计算。未评测范围包括：真实大距离与强混响阵列下的分条件性能未细分报告；仿真虽覆盖 202 条件但仍是参数调校近似，真实器件非线性与手机自动增益的长时状态差异未量化；感知评估仅用 ViSQOL 与 FAD 自动指标，无人工听音；推理延迟与逐帧实时性未测量，不能承诺实时改善。

复杂度按 10 秒输入统计，换更长输入或不同分块跳跃时代价会变。把自动指标等同人工评价或把开发集提升推广到所有场景都会夸大结论，这也是阅读本文实验结论时必须守住的边界。

### 要复现这个系统第一步做什么

复现先对齐数据与评估，再跑模型。数据侧需准备 16 千赫单声道音乐、噪声与房间冲激响应，按论文 202 条件与电平轮廓重建仿真链，特别注意 3 秒上下文前缀只用于状态稳定而不计入监督，直达声对齐保证监督同一起始样点，信噪比 -15 到 20 dB。模型侧按 80 带、N 等于 32、6 层、每层 12 专家、Top-1 路由、四头注意力加 31 核卷积搭建，主干输入输出为复谱。

训练用随机种子 42、AdamW 上述学习率与热身余弦、全局批量 96、4 秒随机裁剪，用 25 首开发录音头中尾 10 秒裁剪加 500 固定仿真段选型。推理用 10 秒块 5 秒跳交叠相加。来源方面，论文列出的 <https://www.npu-aslp.org> 经核验为第三方可用链接，仅证明论文提到该地址，不证明作者已开源代码或权重；本文未报告代码开源与权重下载，不可将三者混为一谈。复现时应先用小规模仿真验证对齐与评估器一致，再扩大到全量。

### 什么时候值得尝试，还缺哪项验证

当任务是手机翻录类耦合退化、带能量线索重要、且只有少量未对齐真实对时，值得尝试尺度感知编码加直接映射加校准仿真的组合；当已有大规模对齐真实对或预算极小如 1M 参数以下时，需重新权衡，更小模型在 FAD 或 ViSQOL 上各有取舍。关键超参数与信息条件要保留：80 带、N32、6 层、12 专家 Top-1、感知权重 0.05 经 2000 步热身、总损失中时域 0.2 均衡 0.001。

还需补的验证是人工听音、分场景分距离的细化评估、对齐误差下的 SI-SNR 敏感性分析，以及推理延迟与内存实测。举例说明：若把本系统比作先量每乐器音量再修音色，尺度分支就是量音量的尺子，映射解码就是不拘泥原录音形状的重绘笔，但尺子准不准取决于仿真校准是否覆盖真实场景，这正是盲测第三但 SI-SNR 仍低的原因。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.15464v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
