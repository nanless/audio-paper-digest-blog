---
title: "Measurement-Based Bitrate-Energy-Quality Analysis of Neural Audio Codec Decoders on Laptop and Phone Platforms"
date: 2026-09-30
draft: false
tags: [音频编码, 评测协议, 高效推理, 端侧运行]
categories: [论文速递]
description: "论文在笔记本与手机上实测四种神经音频解码器与 AAC-LC 和 Opus 的解码能耗与 ViSQOL 质量，报告神经端以更低码率达到相近质量但解码能耗更高，并用传输能量系数门限量化何时省下的传输能耗才能抵消多出的解码能耗，其中 EnCodec 门限最低而手机端 DAC 与 SNAC 多组超过 200 mJ/kbit 且全频段解码慢于实时。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.34524"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "低码率不等于省电：神经音频解码器在笔记本与手机上的码率能量质量实测"
paper_digest_original_title: "Measurement-Based Bitrate-Energy-Quality Analysis of Neural Audio Codec Decoders on Laptop and Phone Platforms"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.34524"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.34524.pdf"
paper_digest_primary_task: "音频编码"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-coding","label":"音频编码"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "论文在笔记本与手机上实测四种神经音频解码器与 AAC-LC 和 Opus 的解码能耗与 ViSQOL 质量，报告神经端以更低码率达到相近质量但解码能耗更高，并用传输能量系数门限量化何时省下的传输能耗才能抵消多出的解码能耗，其中 EnCodec 门限最低而手机端 DAC 与 SNAC 多组超过 200 mJ/kbit 且全频段解码慢于实时。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Seunghyeon Shin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Seokjin Lee"}]
paper_digest_abstract_sha256: "fe2a81e0a6e762098a257df3dbebe6961126c8eb6bb9ac843d46aa7885f36b7a"
paper_digest_sidecars: {"citation.bib":{"sha256":"828bae07ae85b6b84fe6519a1585fd911555fa7868c346537e104a796a34a643","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-34524/citation.bib"},"citation.json":{"sha256":"8c46f0163c7916357ec40835deac72f9ce77183601fa89e901f50fe380ef2834","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-34524/citation.json"},"citation.ris":{"sha256":"29c668eef79c5505b95df1e71f7fd12f7315da9650c6a5e225f481fd34273071","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-34524/citation.ris"},"rethink-context.json":{"sha256":"52759ad896d10a6b280962b671b58cd64470b7a2e559e714e5e6275b8241ce3a","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-34524/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8f19fa8e1fe344248245d7937b9b9745dfa4639d8944419bf49b90400e7779cf"
paper_digest_api_reader_plan_sha256: "3ace9157e38b5ac1a493dbd3b18f441c368c6fed4710261f930992750935aa5f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8a6cf2d2ff31182c9f54aaa84a86ab708563ce3ce4b0ca1ee1d635bfb24ad7c1"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "22191764aae52247db1797c5dd8f0938f7155205aee70a76af1c037ab6a55bf3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0cd71a5054e9fd0bf3d706b4f6b03d6058a82672e12b8586ba361835ac91ad7e"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ed32706b1cfc385b19572739c7933f82703276caf64f7ba9c95ae7f561a8a6dc"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 低码率不等于省电：神经音频解码器在笔记本与手机上的码率能量质量实测

> 英文题目：*[Measurement-Based Bitrate-Energy-Quality Analysis of Neural Audio Codec Decoders on Laptop and Phone Platforms](https://arxiv.org/abs/2609.34524)*

> 标签：#音频编码 | #评测协议 | #高效推理 | #端侧运行
>
> 评分：**6.7/10** | 创新 1/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Seunghyeon Shin：机构信息未在 arXiv HTML 中可靠披露
- Seokjin Lee：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

本文任务是在一对多回放边界下评估神经音频编码解码器的真实能效，输入为已编码码字索引或压缩比特流，输出为重建波形与单位音频时长解码能耗，难点在于低码率的传输节省与高合成计算量方向相反，且请求的加速器映射未必真实执行。方法链分为三步：先在原始参考 ViSQOL（Virtual Speech Quality Objective Listener）均值空间按公共重叠区间中点选取可比工作点，再经空闲基线相减与音频时长归一化得到 \(e_{dec}\)，最后以传输能量系数为参量解析盈亏阈值并用执行有效性筛除失效路径。相对已有码率-质量与延迟报道，差异在于把有效执行证据与参数化传输模型纳入比较，避免把标称加速与低码率直接等同于节能。在全频带音乐手机路径评测下，EnCodec相对AAC-LC的盈亏阈值指标为12.4 mJ/kbit，低于DAC相对AAC-LC的盈亏阈值指标139.2 mJ/kbit。全频带DAC与SNAC在该手机XNNPACK CPU路径上解码1 s音频的延迟为1.32 s与1.63 s，不满足实时可行，其适用边界受限于该单机单路径测量。结论仅适用于所测单台笔记本与单台手机、所列 ONNX Runtime 与 OpenVINO 路径及 ViSQOL 客观锚点，不支持主观等价或全设备排名。原文未披露训练、推理之外的部署成本细节，编码端能量明确排除在外。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要回答什么问题？

本文的输入是已经编码好的音频码流或离散索引，目标是在笔记本与手机两种客户端上完成解码重建并度量三件事：传输码率、解码端能量与客观质量。

研究对象是 4 种神经音频编解码器与两种传统基线，神经端包括 EnCodec、DAC、HILCodec 与 SNAC，传统端包括 AAC-LC 与 Opus。

初学者容易把低码率直接理解为省电，本文要纠正这个直觉：1 次编码多次播放时服务器编码只做 1 次，而传输与客户端解码每次播放都会发生。

码率降低能减少模型化的传输能量，但神经解码器本身可能显著增加客户端能量。输出是一套可复述的测量边界、匹配质量选择规则与成败分界门限，而不是一句神经更好或传统更好。

本文不训练新编解码器，不做主观听音排序，所有质量锚点都是客观 ViSQOL 分。本次没有发现来源绑定且完成验证的资源，因此不得声称代码模型或数据已公开。

### 同输入同目标的已有路线如何比较解码代价？

同输入同目标的路线首先是神经音频架构本身。白话说，残差向量量化就是用多层小码本逐级量化残差，英文为 residual vector quantization，缩写为 RVQ；多尺度量化就是在不同时间分辨率上分配量化器。

SoundStream 用全卷积编码解码加量化器丢弃实现单模型可变码率，EnCodec 沿流式 RVQ 路线加入多尺度频谱判别器。DAC 在 RVQGAN 基础上改进码本利用与周期偏置，HILCodec 用因果与深度可分离卷积做流式低复杂度解码，SNAC 把量化分布到多个时间分辨率。

这些工作主要报告码率质量、参数量、运算量或解码延迟，延迟刻画时间长短，能量需要平台实测，两者不能互换。第二条路线是传统嵌入式音频与视频解码能量研究。

传统音频工作曾跨编解码器与采样设置实测解码能耗，视频工作把基于码流特征的解码能量估计放进编码端率失真优化。移动推理研究强调模型运行时与加速器组合决定实测行为。

本文与它们同运行阶段，即客户端解码与播放阶段，但把有效执行证据与原始参考质量测量结合起来。明确排除请求了加速器但实际未有效使用的路径，这是本文与只报延迟工作的关键区别。

### 为什么等码率比较与只看延迟都不够？

第一个操作性问题是等码率不等于等感知质量。不同编解码器的码率梯子与可达质量区间不同，若固定码率比较，传统端在低码率可能质量很低，神经端在高码率可能质量封顶。

直接比能量会偏袒一方，因此需要在质量空间先对齐再比能量。第二个问题是延迟不等于能量。延迟是解码 1 秒音频需要的墙钟时间，能量是该过程在遥测层上多消耗的焦耳数。

同一延迟在不同功耗下能量可以差很多，低延迟路径也可能因为高功率而更耗电。第三个问题是请求的执行路径不等于有效执行路径。

开放神经网络交换格式的模型英文为 Open Neural Network Exchange，缩写为 ONNX，执行提供者决定模型跑在哪个后端。目标写着图形处理器或神经网络处理器时可能大量回退到中央处理器。

若不记录回退比例与会话成败，就会把混合执行的能量误记为纯加速执行的能量。本文因此把问题定义为在离散实测点上先对齐质量再比能量，并用参数化的传输能量系数做敏感性分析，而不是测一个具体无线接口的常数。

### 总能量模型与测量边界如何构成全景？

先沿一个样本走完流程。原始波形进入编码器得到低速率隐序列，量化器输出离散索引，传输的比特数决定码率。

客户端神经解码器根据索引合成重建波形，质量用原始参考 ViSQOL 度量，能量只在客户端解码段测量。编码与量化在能量边界之外，服务器编码不计入。

平台相关遥测在空闲基线与实测解码两段分别采样，得到运行能量与空闲功率，再做空闲相减并按解码音频时长归一化。得到每秒音频的解码能量，单位为焦耳每秒，数值上等价于实时播放下的平均附加解码功率，但不意味着每条路径都满足实时。

传输能量用系数乘以码率与播放时长建模，总能量是两项之和。成败分界的思想是令低码率神经配置与传统参考的总能量相等，解出传输能量系数门限。

实际系数大于门限时神经端在模型意义上更省。

**解码器能量 × 传输能量系数：** 解码器能量负责刻画客户端每播放 1 秒音频多付出的焦耳数，传输能量系数负责把每比特的传输代价参数化；两者搭配的理由是一次编码多次播放时总能量是两项之和，只有把解码多耗与码率节省放在同一单位下才能比较，组合意义是推导出成败分界的门限系数，超过该系数神经端的低码率才在模型意义上更省总能量。

下面 4 个关键公式按原文实现绑定，符号含义在段落中先说明：总能量由解码能量与传输能量组成，解码能量由运行能量减去空闲功率与运行时间乘积得到。

再除以解码音频时长归一化，传输能量由系数乘以码率与时间得到，门限由解码能量差除以码率节省得到。

\[E_{\mathrm{dec}}(c,p)=E_{\mathrm{run}}(c,p)-P_{\mathrm{idle}}\Delta t_{\mathrm{run}}(c,p).\]

\[e_{\mathrm{dec}}(c,p)=\frac{E_{\mathrm{dec}}(c,p)}{T_{\mathrm{audio}}(c,p)}.\]

\[E_{\mathrm{tx}}(R_{c},N,T)=\alpha_{N}R_{c}T.\]

\[\alpha^{*}_{A,B}=\frac{\Delta e_{A,B}}{\Delta R_{A,B}}=\frac{e_{\mathrm{dec}}(c_{A},p_{A})-e_{\mathrm{dec}}(c_{B},p_{B})}{R_{c_{B}}-R_{c_{A}}}.\]

上图把神经路径与传统路径的三量标注并列，编码与量化明确在边界之外，阅读时应把能量归因严格限定在解码器框内。

> **看图路径：** 1. 沿上方神经路径从原始波形经神经编码器与量化器看到离散码流；2. 确认码流下方标注的传输码率与神经解码器下方标注的解码能量位置；3. 对比下方传统路径的比特流与传统解码器是否对应相同三量标注

[![原论文 Fig. 1：Neural and conventional codec paths. R_c, e_dec, and ViSQOL denote transmitted bitrate, decoder-side…](https://arxiv.org/html/2609.34524v1/codec_paths.png)](https://arxiv.org/html/2609.34524v1/codec_paths.png)

*论文图 1。原论文 Fig. 1:：“Neural and conventional codec paths. R_c, e_dec, and ViSQOL denote transmitted bitrate, decoder-side energy, and original-reference quality, respectively; encoding and…”。*

该图上半为神经路径，从原始波形经神经编码器、量化器、离散码流、神经解码器到重建波形，下半为传统路径，从原始波形经传统编码器、比特流、传统解码器到重建波形。

两条路径都在码流处标注传输码率，在解码器处标注解码能量，在输出处标注质量，像素上箭头均为从左向右的单向数据流，没有反馈回路。

### 编码器量化器解码器各自承担什么计算？

编码器的分工是把波形映射为低速率隐序列，量化器的分工是用离散索引表示该序列，解码器的分工是从索引合成波形。

对于 EnCodec、DAC 与 HILCodec，评测的码率梯子主要通过改变激活的 RVQ 深度得到，保留更多码本则传输码率上升。对于 SNAC，低码率点通过只保留部分尺度或码本得到，原文明确这些是保留尺度派生的工作点，不是单独训练并正式发布的低码率检查点。

关键机制是减少传输码集不一定减少波形合成的主运算，解码代价随码本深度的变化远小于码率变化。因此不能从量化器配置推断解码代价，必须直接测量。

传统端 AAC-LC 用基于修正离散余弦变换的变换编码框架，Opus 结合线性预测的 SILK 层与基于变换的 CELT 层。它们的解码实现成熟，可作为客户端能量的实用参考点。

**神经音频编解码器 × 残差向量量化：** 神经音频编解码器负责从波形学习分析量化合成整条链路，残差向量量化负责把编码器输出的连续隐序列变成可传输的离散索引；两者搭配的理由是单层量化码本不够用时用多层残差逐级逼近，既保留可变码率能力，又让解码端只需根据索引做波形合成，组合意义在于码率由保留的量化层数决定而合成计算量主要由神经解码器决定。

复述时要固定简称：神经端四家分别简称为 EnCodec、DAC、HILCodec、SNAC，传统端简称为 AAC-LC 与 Opus。

码率记为 Rc，解码能量记为 edec，质量记为 ViSQOL，后文不再展开全称，便于唯一回指到本节定义。

### 本研究训练了什么，没有训练什么？

本研究没有训练任何新的神经音频模型，也没有微调被测解码器权重。真实计算过程是调用已发布检查点的导出与推理。

所有神经模型先导出为 ONNX，并分别生成单精度与半精度产物，笔记本侧基准在相同硬件但不同虚拟环境中完成导出与测试。手机侧把 ONNX 模型放进原生基准应用，用 ONNX Runtime 执行。

传统端直接调用成熟解码路径，笔记本用 FFmpeg 原生解码路径，手机用 MediaCodec 系统解码路径。基准输入是 32 个预生成的 1 秒产物按固定循环顺序供给。

神经路径接收码索引与可选尺度值，传统路径接收预加载压缩输入，被测能量窗口只覆盖稳态解码经重建音频输出。不包括建立、诊断分析与事后日志。

由于无训练，本文不报告优化器、梯度路径、监督损失与参数冻结情况。也不能把冻结参数理解为输出确定，运行时间探测、冷却与重复测量带来的波动仍需用中位数与极值呈现。

### 数据协议平台与运行路径如何保证条件一致？

数据与质量协议按域分开。语音域用 VCTK 并用 ViSQOL 语音模式，音乐域用 MUSDB18-HQ 并用 ViSQOL 音频模式。

每域构建 100 个 10 秒片段，VCTK 不足 10 秒时拼接同一说话人语句，MUSDB18-HQ 选 10 秒非静音摘录。每个片段先重采样到目标编解码器原生采样率再做编解码。

评价时参考与解码信号都重采样到 ViSQOL 模式的规范率，语音为 16 kHz，音乐为 48 kHz。主协议用原始参考设置，参考取原始片段重采样结果，因此带宽损失计入质量下降。

片段级分数按域、编解码器实例与工作点聚合为速率质量曲线，不确定性用 10000 次源曲目级自举的 95% 区间可视化，但不用于选点。

**ViSQOL × 原始参考协议：** ViSQOL 负责给出客观质量分，原始参考协议负责规定参考信号取原始重采样后的全带宽信号而不做带宽匹配；两者搭配的理由是要让带宽损失也计入质量下降，避免低采样编解码器占便宜，组合意义是速率质量曲线上的可比锚点都带有带宽惩罚，解读时不能当作主观等价。

平台方面，笔记本为集成中央处理器图形处理器与神经网络处理器的笔记本级系统，用处理器封装级遥测并保持接通外部电源。手机为移动片上系统的智能手机级系统，用 BatteryManager 放电遥测并在电池供电飞行模式下关闭蓝牙定位与常亮显示，屏幕保持最低固定亮度。

两平台遥测层级不同，绝对能量只在平台内比较。运行路径方面，笔记本神经路径评估 ONNX Runtime 中央处理器、DirectML 图形处理器目标、OpenVINO 中央处理器图形处理器与神经网络处理器插件，传统路径用 FFmpeg。

手机神经路径用 XNNPACK 中央处理器与 QNN 加速器目标路径，传统路径用 MediaCodec。主比较只纳入执行有效路径，会话创建成功且实测解码完成才算有效。

加速器目标路径在失败或无有效使用时排除，部分非目标执行保留为混合执行。测量流程与参数如下图所示，时序与迭代数按平台热特性分别设置，笔记本与手机的冷却与最小测量窗口逻辑不同。

> **看图路径：** 1. 从左侧输入会话建立沿箭头走完预热与时间探针再进入冷却；2. 确认虚线框内只有实测解码与空闲基线参与能量计算；3. 核对实测解码下方同时记录运行能量运行时间与解码音频时长

[![原论文 Fig. 2：Benchmark sequence and energy-calculation intervals.](https://arxiv.org/html/2609.34524v1/codec_measruements.png)](https://arxiv.org/html/2609.34524v1/codec_measruements.png)

*论文图 2。原论文 Fig. 2:：“Benchmark sequence and energy-calculation intervals. The idle baseline and measured decoding provide the quantities used for idle subtraction.”。*

该图从左到右为输入会话建立、预热、时间探针、探针与空闲冷却，随后先采空闲基线再做实测解码，虚线框标出参与能量计算的两段。

实测解码下方同时记录运行能量、运行时间与解码音频时长，空闲基线下方记录空闲功率，结果记录在框外。复现时必须保留相同的冷却与最小测量窗口逻辑，否则空闲相减会被平台漂移污染。

### 相近质量下谁更省码率，谁多付解码能量？

主协议是重叠区间中点匹配。白话说，先算同一队列中各实例处理级平均 ViSQOL 区间的公共交集，取中点为质量锚。

对每个实例选离锚最近的离散实测点。全频段音乐队列包括 44.1 kHz 的 AAC-LC、48 kHz 的 Opus 与 EnCodec、44.1 kHz 的 DAC 与 SNAC。公共重叠为 3.774 至 3.943，中点 3.858 为锚。

24 kHz 语音队列包括同采样率的 AAC-LC、EnCodec、DAC 与 HILCodec 语音配置，重叠为 2.903 至 3.810，中点 3.357 为锚。24 kHz 的 Opus 因梯子内无落入重叠的点未进入语音匹配队列，24 kHz 的 SNAC 因可达质量低于公共重叠被排除。

选点不是精确等质，音乐中 AAC-LC 与 Opus 点在锚与 EnCodec 点之上，会让神经节码显得更有利。语音中 AAC-LC 点在锚之下而神经点在锚处或之上，偏差方向相反，门限只对所选实测点成立。

**执行有效路径 × 回退比例：** 执行有效路径负责说明测量到的能量到底跑在哪种运行时与设备上，回退比例负责量化加速器目标运行中有多少执行时间被分给非目标设备；两者搭配的理由是只看请求的加速器标签会误判实际部署行为，组合意义是把混合执行与纯加速执行区分开，不满足有效使用的路径直接排除在主比较之外。

**匹配质量选择 × 指定码率分析：** 匹配质量选择负责在 ViSQOL 重叠区间中点附近为每个编解码器各选一个离散实测点，指定码率分析负责只在明确评测过的相同标称码率处比较而不插值不替代；两者搭配的理由是等码率不等于等质量而等质量又没有连续可调点，组合意义是一个回答相近质量下能量代价，一个回答同码率下质量与能量各自是多少，互为约束防止单视角误读。

为回答相近质量下的能量代价，先看全频段音乐的质量锚能量比较问题：在选定离散点与有效路径下，神经端是否以更低码率换来更高的解码能量，指标方向是 ViSQOL 越高越好而解码能量越低越好。下表整理音乐队列的选点码率与两平台中位数能量，笔记本神经取各自最低能耗有效路径，手机神经统一用 XNNPACK 中央处理器路径。

| 队列与编解码器 | 选点码率 | 笔记本解码能量 | 手机解码能量 |
| --- | --- | --- | --- |
| 音乐 EnCodec 48 kHz | 3 kbps | 0.123 J/s audio OV NPU | 0.570 J/s XNNPACK CPU |
| 音乐 DAC 44.1 kHz | 3.45 kbps | 0.947 J/s OV GPU FP16 混合 | 6.21 J/s XNNPACK CPU |
| 音乐 SNAC 44.1 kHz | 2.584 kbps | 1.47 J/s OV NPU | 6.96 J/s XNNPACK CPU |
| 音乐 AAC-LC 44.1 kHz | 48 kbps | 0.0103 J/s CPU | 0.0142 J/s MediaCodec |
| 音乐 Opus 48 kHz | 16 kbps | 0.0242 J/s CPU | 0.0162 J/s MediaCodec |

所选神经点码率确实更低但解码能量全面高于传统路径，笔记本上 EnCodec 最低而 SNAC 最高，手机上 DAC 与 SNAC 达到每秒音频 6 焦耳以上。

比传统路径高两个数量级；代价是传统点的质量反而更高，说明这不是精确等质比较，神经节码优势被传统高质量点部分抵消。阅读像素图时应同时核对条带长度与左侧质量标注而不是只看能量排序。

> **看图路径：** 1. 先看左右两栏区分笔记本与手机的不同遥测层级不跨平台比绝对值；2. 沿纵轴五个条带核对每个条带的码率与 ViSQOL 标注；3. 观察横轴为对数解码能量并读出条带末端的数值与路径标注

[![原论文 Fig. 5：Quality-anchor decoder-side energy for the full-band-class music cohort.](https://arxiv.org/html/2609.34524v1/Fig.3.png)](https://arxiv.org/html/2609.34524v1/Fig.3.png)

*论文图 5。原论文 Fig. 5:：“Quality-anchor decoder-side energy for the full-band-class music cohort.”。*

该图左右分栏为笔记本与手机，横轴为对数解码能量，上方 3 条神经条带明显长于下方两条传统条带。EnCodec 条带在神经中最短，DAC 条带标注为混合执行，手机栏中 DAC 与 SNAC 条带延伸到数焦耳每秒，传统 AAC 与 Opus 条带集中在 1% 焦耳量级，须线为 3 次重复的最小与最大而非置信区间。
为回答语音队列的同类问题，下表整理 24 kHz 语音选点的对应结果，比较问题与指标方向与音乐表相同，公平条件是同为 24 kHz 语音队列的匹配质量点，手机统一用中央处理器路径。

| 队列与编解码器 | 选点码率 | 质量 ViSQOL | 笔记本解码能量 | 手机解码能量 |
| --- | --- | --- | --- | --- |
| 语音 EnCodec 24 kHz | 6 kbps | 3.41 | 0.0527 J/s audio OV NPU | 0.257 J/s XNNPACK CPU |
| 语音 HILCodec 24 kHz | 3 kbps | 3.41 | 0.319 J/s OV NPU | 1.74 J/s XNNPACK CPU |
| 语音 DAC 24 kHz | 6 kbps | 3.86 | 0.529 J/s OV GPU FP16 混合 | 4.08 J/s XNNPACK CPU |

EnCodec 在神经中能量最低而 HILCodec 码率最低，DAC 质量最高但能量也最高；未胜出项是手机端 HILCodec 与 DAC 能量分别达到 1.74 与 4.08 焦耳每秒。

远高于 AAC 的 0.00909 焦耳每秒，且此处 AAC 质量低于锚而神经点在锚处或之上，与音乐队列的偏差方向相反，因此不能把两个队列的门限直接拼成统一排名。

> **看图路径：** 1. 确认左侧笔记本使用各神经最低能耗有效路径右侧手机统一用 CPU 路径；2. 核对三个神经点的码率选择与传统 AAC 点的位置关系；3. 观察横轴对数刻度下 EnCodec 条带明显短于 DAC 与 HILCodec

[![原论文 Fig. 6：Quality-anchor decoder-side energy for the 24-kHz speech cohort.](https://arxiv.org/html/2609.34524v1/Fig.4.png)](https://arxiv.org/html/2609.34524v1/Fig.4.png)

*论文图 6。原论文 Fig. 6:：“Quality-anchor decoder-side energy for the 24-kHz speech cohort.”。*

该图同样左右分栏，纵轴 4 个条带中 DAC 在上 EnCodec 居中 HILCodec 次之 AAC 在下，横轴对数能量下传统 AAC 条带最短。神经 3 条都长于它一个数量级以上，笔记本 DAC 标注混合执行，手机 3 条统一标注中央处理器，质量标注显示 DAC 最高而 AAC 最低，与选点偏差说明一致。

### 门限需要多大的传输代价才能让神经端回本？

为回答低码率何时能在总能量上回本，论文对匹配质量点做两两门限解析计算。音乐点分别对 AAC-LC 与 Opus，语音点只对 AAC-LC，因为 Opus 未进入语音匹配队列。

指标方向是门限越低越容易回本，右侧区间为神经有利区，超过 200 mJ/kbit 的值在图上边界标注精确值。下表集中呈现可运行策略的门限，全部来自所选中位数能量与码率的解析式而非对无线接口的实测。

| 队列与神经对比对象 | 相对传统基线 | 笔记本门限 | 手机门限 | 备注说明 |
| --- | --- | --- | --- | --- |
| 音乐 EnCodec | AAC-LC 与 Opus | 2.50 与 7.60 mJ/kbit | 12.4 与 42.6 mJ/kbit | 神经中最低 |
| 音乐 DAC | AAC-LC 与 Opus | 21.0 与 73.5 mJ/kbit | 139.2 与 493.7 mJ/kbit | 手机对 Opus 超限 |
| 音乐 SNAC | AAC-LC 与 Opus | 32.2 与 108.1 mJ/kbit | 153.0 与 517.6 mJ/kbit | 手机两组超限 |
| 语音 EnCodec | AAC-LC | 4.52 mJ/kbit | 24.8 mJ/kbit | 神经中最低 |
| 语音 HILCodec 与 DAC | AAC-LC | 24.0 与 52.2 mJ/kbit | 132.9 与 407.3 mJ/kbit | 手机 DAC 超限 |

EnCodec 在两队列两平台均为神经中最低门限，笔记本音乐对 AAC 低至 2.50 而对 Opus 为 7.60，差异来自相对 AAC 的节码量更大。

代价与反例是手机端 DAC 与 SNAC 多组超过 200 mJ/kbit，音乐 DAC 对 Opus 达 493.7、SNAC 对 Opus 达 517.6，语音 DAC 在手机达 407.3。这些值意味着需要极高的每比特传输代价才能抵消解码多耗，实际意义有限。
为回答固定码率下质量与能量如何交叉，次协议只纳入明确评测过的点，不插值不找邻近码率替代。少于两个系列的面板直接省略，因此全频段音乐只报告 12 与 24 kbps，3 与 6 kbps 因只有 EnCodec 被省略。

下表整理指定码率下的质量与能量对照，指标方向同样是 ViSQOL 越高越好而能量越低越好，公平条件是相同标称码率且均为明确评测点。

| 码率条件与编解码器 | 质量 ViSQOL | 笔记本解码能量 | 手机解码能量 | 对照结论 |
| --- | --- | --- | --- | --- |
| 12 kbps EnCodec | 4.22 | 0.123 J/s audio | 0.593 J/s audio | 质量最高但能量高 |
| 12 kbps AAC-LC 与 Opus | 1.49 与 1.93 | 0.0105 与 0.0209 J/s audio | 0.0136 与 0.0122 J/s audio | 质量低但能量低 |
| 24 kbps EnCodec 与 Opus | 4.30 与 4.26 | 0.123 与 0.0249 J/s audio | 0.595 与 0.0145 J/s audio | Opus 相近质量更省 |
| 语音 3 至 6 kbps 神经 | 2.85 至 3.86 | 0.0526 至 0.529 J/s audio | 0.257 至 4.08 J/s audio | 能量随码本变化小 |

支持的判断是 12 kbps 下 EnCodec 在该原始参考全频协议中质量更高，24 kbps 下 Opus 以相近质量实现显著更低解码能量。

语音固定码率覆盖 3、6、12 与 24 kbps，跨神经工作点的趋势是解码能量随码本深度变化不大，而 ViSQOL 变化更明显。该趋势只限所测运行时配置，不能推广到其他解码架构，未胜出项恰是质量最高的 DAC，其手机能量长期在 4 焦耳每秒量级。
失败条件与执行诊断进一步约束结论：笔记本 DirectML 路径不满足有效性，手机 QNN 路径无有效加速使用。OpenVINO 图形处理器半精度请求的非目标份额中 SNAC 为 98%、DAC 为 47%、HILCodec 为 21%、EnCodec 为 8%。

DAC 最低能量恰出自混合路径，应理解为混合执行而非纯图形处理器解码；延迟上笔记本所选路径全部小于 1 秒解码 1 秒音频。手机除全频段 DAC 需 1.32 秒与 SNAC 需 1.63 秒外其余满足，因此后两者的稳态能量值不证明该路径可实时播放。

### 哪些边界会改变结论的适用范围？

第一是设备与遥测边界。测量只来自一台笔记本与一部手机，实现能量随模型转换、片上系统、驱动与运行时版本变化。

笔记本为处理器封装级能量而手机为整机电池放电能量，跨平台绝对值不可比，只能在平台内比较相对关系。第二是重复与统计边界。

3 次重复只支持报告中位数与观测极值，不刻画完整分布，图中的须线是最小与最大而非置信区间。质量曲线的自举区间只用于可视化不用于选点。

第三是质量与队列边界。锚是客观度量工作点而非主观等价，客观与主观排序可能不一致。语音基线覆盖窄于音乐，因 Opus 无匹配语音点，报告的语音门限只是对 AAC-LC 的结果。

不能推广为对一切传统语音编码的排名；SNAC 低码率点是保留尺度派生而非正式低码率检查点。封闭或不可导出系统未纳入。

第四是执行边界。失败的 DirectML 与无效的手机 QNN 限制了对加速器辅助部署的结论，手机结果只刻画 XNNPACK 中央处理器执行。不能确立移动加速器路径的能量行为。

缺失证据不是技术错误，相关性不是因果，未测量误判率之外的延迟成本时不应承诺那些量得到改善。

### 复现应先固定什么，再测什么？

复现先固定信息条件与执行有效性。数据侧按原文重建每域 100 个 10 秒片段并记录重采样链。

先到编解码器原生率再到 ViSQOL 规范率，语音 16 kHz 音乐 48 kHz，保留原始参考的带宽惩罚。模型侧使用可导出验证的公开解码器并记录 ONNX 单精度与半精度产物、运行时版本与插件。

笔记本记录 ONNX Runtime 1.24.2 与 OpenVINO 2025.4.1 及 FFmpeg 8.0.1，手机记录 ONNX Runtime 1.24.2 的 XNNPACK 与 QNN 请求后端类型及 MediaCodec 路径。测量侧复刻基准序列：会话初始化、预热、时间探针、探针冷却、空闲冷却、空闲基线采集、实测解码。

笔记本预热 300 探针 100 与最小测量窗口 120 秒，手机预热 30 探针 150 与最小窗口 180 秒，空闲基线分别为 180 秒与 240 秒。迭代数不足时按探针估计自动增加。

遥测分别用处理器封装功率积分与 BatteryManager 每秒电流电压梯形积分，空闲功率按重复 5 秒子区间估计并相减。再除以解码音频时长得到 edec，取 3 次中位数并保留极值。

选点侧先算处理级平均 ViSQOL 公共重叠中点再取最近离散点，指定码率侧只用明确评测点。门限用解码能量差除以码率节省解析计算并以 mJ/kbit 报告。

还需补的验证是更多设备与运行时版本、有效移动加速器路径、更多重复次数，以及主观听音对客观锚的校准。

### 何时值得尝试神经端，何时坚持传统端？

当客户端有效解码路径足够高效且传输能量系数超过对应两两门限时，神经端的低码率才值得尝试。本文证据中最容易满足的是 EnCodec 在笔记本与手机的匹配点，其门限在两队列均为神经最低。

当服务码率落在 12 至 24 kbps 且客户端只有中央处理器或系统解码器时，坚持 AAC-LC 与 Opus 更稳妥。24 kbps 音乐下 Opus 已达相近质量且解码能量显著更低，语音 12 至 24 kbps 传统端同样是强质量能量基线。

当目标是 3 至 6 kbps 语音覆盖时神经端提供传统梯子没有的工作点，但要接受 EnCodec 之外更高的解码能量与手机端数百毫秒至近秒级的延迟。论文特有的误解需要澄清。

其一，码本越少不等于解码越省，主合成运算不随保留码集同比例下降；其二，请求加速器不等于跑在加速器上。DAC 最低能量的图形处理器半精度请求实为约一半非目标的混合执行。

其三，匹配质量点不是精确等质，音乐与语音的锚偏差方向相反，门限只对所选实测点成立。总体判断是低码率不足以确立客户端能量收益。

必须把解码器架构、运行时与设备映射、执行有效性、加速器可用性与传输系数放在同一边界下联合考虑，这正是本文测量边界与门限分析要保留的信息条件。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.34524)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-30/)
