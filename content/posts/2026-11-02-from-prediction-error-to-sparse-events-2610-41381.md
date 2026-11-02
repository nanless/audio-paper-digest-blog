---
title: "From prediction error to sparse events: Biologically inspired signed-dyadic coding for Mandarin keyword spotting"
date: 2026-11-02
draft: false
tags: [关键词检测, 脉冲神经网络, 硬件系统设计与验证, 语音]
categories: [论文速递]
description: "论文针对连续脉冲关键词识别中输入界面密集搬运相关语音帧的问题，提出只在声学输入处做预测与符号二进编码，在 720 条整数评测上达到 90.00% 准确率并降低约三成访存与周期，单条布线芯片实测降低约 39.49% 增量推理能量，但结论依赖特定网络、权重与单片段能量条件。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.41381"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用预测误差把连续语音变成稀疏事件：面向普通话关键词识别的输入编码"
paper_digest_original_title: "From prediction error to sparse events: Biologically inspired signed-dyadic coding for Mandarin keyword spotting"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.41381v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.41381v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.41381v1.pdf"
paper_digest_primary_task: "关键词检测"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.keyword-detection","label":"关键词检测"},{"facet":"method","id":"method.spiking-neural-network","label":"脉冲神经网络"},{"facet":"method","id":"method.hardware-system-design","label":"硬件系统设计与验证"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "脉冲神经网络"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "论文针对连续脉冲关键词识别中输入界面密集搬运相关语音帧的问题，提出只在声学输入处做预测与符号二进编码，在 720 条整数评测上达到 90.00% 准确率并降低约三成访存与周期，单条布线芯片实测降低约 39.49% 增量推理能量，但结论依赖特定网络、权重与单片段能量条件。"
paper_digest_authors: [{"affiliations":["Sivy Limited, Hangzhou, China"],"name":"Zijian Zhou"},{"affiliations":["Sivy Limited, Hangzhou, China"],"name":"Rui Liu"},{"affiliations":["Sivy Limited, Hangzhou, China"],"name":"Rongxiang Nie"},{"affiliations":["Sivy Limited, Hangzhou, China"],"name":"Rui Ma"},{"affiliations":["Sivy Limited, Hangzhou, China"],"name":"Ziyao Zhang"},{"affiliations":["The Cavendish Laboratory, Department of PhysicsUniversity of Cambridge, Cambridge, UK Corresponding authors."],"name":"Xin Du"}]
paper_digest_abstract_sha256: "4a17cb9c8f57f94464f2e26a2453b4a5604fa2a444284a2f6610964821937748"
paper_digest_sidecars: {"citation.bib":{"sha256":"13383f71fc120ed42c3b320707e858ef465d5dc24d3001d5a5b36ede7260561f","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41381/citation.bib"},"citation.json":{"sha256":"d59d2c284cc183a5975b7361efb3c50bccdef10c8f7cfb1fe6950b7f09ee52f0","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41381/citation.json"},"citation.ris":{"sha256":"4a30967e984887bc1e5d300331d696cd69020f696d4a10317170a245513afdd4","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41381/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"35944dd7161f64156b6d090479d9589eee7fce6d55ac9c7484371fff0b940ab0","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41381/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "27a481b5562beed1d15078fa179edbe981d034630e4aa385b46c08a690a8af3f"
paper_digest_api_reader_plan_sha256: "e15daf513a5886d5bb918cd46df5be52f3ac82e693e07896d63050f76c9103ca"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "47b2366ab0a673db22a35e5df091d7d846245a6523254131942c541e24fce271"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "d17193db181bec50f16149b940375b00a7dff0b62cc4638b845d77735ee40f88"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ad8428866a558e4b87e498fdfac9be7c17cd7eb66a8ff6fd6a8d09e8f840468b"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "e855d595d7a9069a3dcfb3bd3f3d43d4497fcb85cfa508cdec2e3f34b77b8feb"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用预测误差把连续语音变成稀疏事件：面向普通话关键词识别的输入编码

> 英文题目：*[From prediction error to sparse events: Biologically inspired signed-dyadic coding for Mandarin keyword spotting](https://arxiv.org/abs/2610.41381v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[关键词检测](/audio-paper-digest-blog/papers/?concept=task.keyword-detection)
- **研究方法**：[脉冲神经网络](/audio-paper-digest-blog/papers/?concept=method.spiking-neural-network)；[硬件系统设计与验证](/audio-paper-digest-blog/papers/?concept=method.hardware-system-design)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.3/1.5


## 👥 作者与机构

- Zijian Zhou：Sivy Limited, Hangzhou, China
- Rui Liu：Sivy Limited, Hangzhou, China
- Rongxiang Nie：Sivy Limited, Hangzhou, China
- Rui Ma：Sivy Limited, Hangzhou, China
- Ziyao Zhang：Sivy Limited, Hangzhou, China
- Xin Du：The Cavendish Laboratory, Department of PhysicsUniversity of Cambridge, Cambridge, UK Corresponding authors.

## 📌 核心摘要

连续关键词检测需逐帧处理40维对数梅尔特征序列并输出5个关键词类别，相邻帧时间相关性强，稠密接口每帧搬运数据并触发后续计算，即使隐藏层活动稀疏，输入侧开销依然存在。预测性符号双比特编码为每个通道维护本地预测并做漏泄更新，先计算输入与预测的残差，只有残差幅度超过学习阈值才发送事件，事件携带符号和2的负幂次幅度。接收端用定点比较、移位与加减重建更新并送入后端的深度脉冲网络分类，时域聚合后产生关键词得分，不经过通用乘法器，阈值未被越过的小残差保持静默。论文比较稠密输入、只在声学输入用编码、输入与隐藏边界都用编码三种部署，并在前馈深度脉冲网络和因果LIF时序卷积网络上训练验证，发现隐藏层尖峰已稀疏，再编码反而增加负担。整数评测在720个测试片段上显示，INPUT-PG达到90.00%准确率，平均SRAM读取减少33.87%，推理周期减少32.77%，比较对象为同权重DIRECT的89.58%。布线后单片段评测显示增量推理能量下降39.49%，但该能量数字只来自一个固定片段且不含权重加载，软件工作量均值来自全部720个片段，两者评测范围不同。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 连续关键词识别要处理什么样的流式输入

这篇论文研究的任务是普通话关键词识别的连续处理。输入是麦克风采集后转成的 40 通道对数梅尔特征流，每条样本最多 560 帧，测试平均每条有 248.311 个有效帧，即 9,932.444 个密集特征值需要逐帧送入网络。目标是在流式条件下一次读入 1 帧并给出 5 个关键词类别中的一个，输出通过对时间的聚合得到分数。

难点在于相邻帧在时间上高度相关，内容变化很小，但传统的密集输入界面仍然每 1 帧都搬运全部 40 个通道，并触发后续的访存与神经计算。即使隐层脉冲已经很稀疏，输入侧的重复工作依然存在。论文把要保留的信息理解为偏离预测的显著变化，而把可预测的平稳部分留在本地不传输，这是后续编码设计的出发点。

### 生物启发与已有事件编码各解决了什么

论文回顾的生物机制包括预测处理、感觉适应和高效编码。共同的模式是神经回路维持对输入的内部估计，对持续的可预测刺激减弱响应，而对变化恢复响应，把有限资源分配给更不可预测的成分。论文把这一模式抽象为带本地状态的预测器加稀疏定向更新，而不是直接模拟生物神经元细节。

在硬件事件编码方面，论文区分了速率编码、首脉冲时间编码、Delta 类编码和 Sigma-Delta 调制。速率编码用时间窗内的重复事件表示幅度，首脉冲时间编码用脉冲延迟表示幅度，Delta 类编码用相对参考状态的变化触发事件。论文指出编码放在哪里与用什么码同样重要，因为对已经阈值化的隐层脉冲再做变化编码，可能同时为上升和下降跳变产生事件，反而增加流量。

### 输入界面为什么是主要代价来源

在连续脉冲关键词识别里，隐层已经利用稀疏脉冲跳过很多计算，但输入界面如果保持密集，就会在每 1 帧重复搬运特征并激活输入突触的访存与累加。论文要回答的是能否在不明显损失准确率的前提下，把输入侧的密集搬运变成稀疏事件，并用无乘法器的定点路径重建。

为此论文设置 3 种部署方式作对照。DIRECT 是每帧密集编码加普通隐层脉冲，INPUT-PG 只在声学输入处使用预测编码，ALL-PG 在输入和隐层边界都使用预测编码。比较的核心是预测在时间冗余仍存在的输入处是否划算，而在已经稀疏二值的隐层处是否会带来额外的包、状态与解码开销。

### 预测符号二进编码的整体流程是什么

方法的整体流程可以沿着一条样本理解。40 通道特征逐帧到达后，每个通道先与本地预测值比较得到残差，只有归一化残差超过学习阈值的通道才发送一个事件包，包内包含地址、符号和指数。接收端用符号扩展、按指数移位和加减累加来重建该通道的输入，再送入四层前馈脉冲网络，最后对帧级分数做时间聚合得到关键词分数。

下面这张总览图展示了从声学输入、残差门、移位解码、重建特征到 Deep-SNN 与时间聚合的完整链路，适合先建立输入如何变稀疏又如何被恢复的直观印象。

> **看图路径：** 1. 先沿从左到右的声学输入到关键词分数的主路径看数据流向；2. 再看局部预测器与残差门如何决定发出还是保持沉默；3. 注意移位解码与重建特征进入 Deep-SNN 的位置

[![原论文 Figure 1：Predictive signed-dyadic coding and its interface with keyword classification.](https://arxiv.org/html/2610.41381v1/figure1.svg)](https://arxiv.org/html/2610.41381v1/figure1.svg)

*论文图 1。原论文 Figure 1:：“Predictive signed-dyadic coding and its interface with keyword classification.”。*

图中可见当前帧与上 1 帧状态先进入局部预测器形成共享预测，残差曲线超过阈值时标出发送，小残差处标出无事件。解码侧按通道路由稀疏修正，经过重建后再进入线性与脉冲层，有效帧被存储用于后续聚合。这种先预测再只传显著失配的设计，是全文所有评测对象的基础。

### 每个通道的预测、残差与门限如何计算

对每个编码边界、时刻与地址，论文记当前有符号输入为该通道特征，本地预测状态初始化为零。预测值是预测状态乘以系数得到，残差是当前输入减去预测值。系数、尺度和归一化阈值都是可训练参数，训练后在芯片实验中冻结为定点常数。

\[\widehat{x}_{t,a}=\alpha p_{t,a},\qquad r_{t,a}=x_{t,a}-\widehat{x}_{t,a}.\]

上式说明预测与残差先形成，其中预测是对历史状态的泄漏保留，残差衡量意外变化。接着把残差绝对值除以尺度得到归一化幅度，并与阈值比较得到硬门。

\[u_{t,a}=\frac{|r_{t,a}|}{s},\qquad g_{t,a}=\mathbf{1}\!\left[u_{t,a}\geq\tau\right].\]

门为 1 表示该地址在该时刻需要发送事件，否则该地址保持沉默并让状态经共享预测器推进。训练时门使用平滑函数加直通估计，使前向仍是硬事件而反向可以传播梯度，指数选择也用类似的直通构造。

**局部预测 × 稀疏事件：** 局部预测指每个输入通道在本地维护对当前帧的估计并随时间衰减更新，稀疏事件指只有残差超过阈值时才发送的数据包；二者搭配的意义是把可预测的连续语音成分留在本地，用少量偏离事件代替逐帧搬运，从而减少输入活动。

### 符号二进幅度如何实现无乘法重建

当门打开时，论文从有限指数集合中选择最接近归一化幅度的 2 的幂等级，解码残差为门乘符号乘尺度乘 2 的负幂。传输包只带地址、残差符号和指数，接收端把尺度移位相应位数再按符号加减到预测上。指数的本质是移位位数，因此不需要通用乘法器、浮点指数运算或大查找表。

重建与状态更新规则区分有效帧与填充帧，有效帧输出重建值并用同一值更新下一时刻预测，填充帧输出零并保持原状态。对有效但低于阈值的地址，解码残差为零，状态经预测推进而不发送。

\[\left(\widetilde{x}_{t,a},p_{t+1,a}\right)=\begin{cases}\left(\widehat{x}_{t,a}+q_{t,a},\widehat{x}_{t,a}+q_{t,a}\right),&m_{t}=1,\\ \left(0,p_{t,a}\right),&m_{t}=0.\end{cases}\]

论文报告从零训练的 INPUT-PG 学到的尺度、阈值与预测系数在 Deep-SNN 上平均为 0.2118、0.2306、0.8917，在 LIF-TCN 上平均为 0.2186、0.2321、0.8949，布线版本冻结为相应的定点整数。这些旋钮共同决定准确率、活动量与能量的折中。

**符号 × 二进幅度：** 符号保留残差的方向，即当前帧高于还是低于预测，二进幅度是从有限个 2 的负幂中选出的粗略大小等级；组合后每个事件只用符号加指数就能被接收端用移位和加减重建，避免乘法器和大查找表。

### 为什么只在输入放预测编码更划算

下面这张放置对比图有助于理解 3 种方案的边界语义，建议重点看 PG 模块出现在哪些线性层之前，以及下半部分对输入与隐层不同信号形态的示意。

> **看图路径：** 1. 对比 DIRECT、INPUT-PG、ALL-PG 三行中 PG 模块的放置数量；2. 看下半部分输入端小残差沉默与大偏差发事件的示意；3. 看右侧隐层脉冲的上升与下降变化被 PG 编码时的事件数

[![原论文 Figure 2：Selective PG placement and boundary semantics.](https://arxiv.org/html/2610.41381v1/figure2.svg)](https://arxiv.org/html/2610.41381v1/figure2.svg)

*论文图 2。原论文 Figure 2:：“Selective PG placement and boundary semantics.”。*

图中上半部分显示 DIRECT 没有任何 PG，INPUT-PG 只在第一个线性层前放一个 PG，ALL-PG 在每个学习映射前都放 PG。下半部分左侧显示输入端小残差沉默、大失配发送一个带符号事件，右侧示意隐层普通脉冲的两次变化会触发额外的开关事件。直观含义是输入帧仍有时间冗余可压缩，而隐层已是稀疏二值脉冲，再编码其跳变容易增加包流量。

论文用一个放置条件表达这一判断，即编码后期望代价加 PG 自身代价应小于普通边界的期望代价。

\[\mathbb{E}\!\left[C_{\mathrm{encoded},\ell}\right]+C_{\mathrm{PG},\ell}<\mathbb{E}\!\left[C_{\mathrm{ordinary},\ell}\right].\]

该条件用于解释 3 种变体的实测差异，而不是在训练中逐层自动搜索放置。

**INPUT-PG × ALL-PG：** INPUT-PG 只在声学输入与第一个线性层之间使用预测编码，ALL-PG 在输入和所有隐层边界都使用预测编码；对比二者的意义是检验预测在哪种边界上收益大于包头、状态与解码代价，论文证据指向只做输入端更有用。

### 网络、数据与训练过程如何保证公平比较

语料包含 4545 条普通话语音，来自 101 位说话人，共 5 个关键词类别，训练、验证与测试划分为 3150、675 和 720 条，且说话人不重叠。音频从 48 kHz 重采样到 16 kHz，提取 40 通道对数梅尔特征，归一化使用训练集统计，填充帧不计入事件与活动统计。

Deep-SNN 为 40 到 256 到 256 到 128 到 5 的前馈结构，含三层流式脉冲隐层，泄漏系数 0.9，阈值 1.0，采用减法复位，共 109841 个参数。LIF-TCN 为 4 个因果残差卷积加脉冲模块，空洞为 1、2、4、8，加掩码时间池化与五分类器，共 99284 个参数。每种变体从零训练 50 轮，批量 128，学习率 0.001，权重衰减 0.0001，使用 3 个随机种子，用验证准确率选检查点，测试集不参与选轮次。同一结构与种子下各变体共享相同的初始化指纹后再施加 PG，这是为了让 DIRECT 与 PG 的比较不受初始化差异干扰。

RATE-T8 与 TTFS-T8 只在 Deep-SNN 输入端实现，保留原帧循环与隐层动态，训练超参数与划分不变。RATE-T8 把幅度量化到 0 到 8 级并把级数计为事件数，TTFS-T8 用量级 0 到 7 并对每个非零级计一个事件，软件侧重放带符号量化幅度，芯片侧分别按多次单位贡献或单次解码幅度实现。

### 三条评测轨道分别测量什么

论文的评测分为从零训练、整数推理与布线能量 3 条轨道，外加一个小型可移动存储结构的前沿探索。从零训练在两种结构与 3 个种子上测量任务准确率与通信活动代理，整数推理用冻结的种子 17 权重在全部 720 条测试上测量准确率与平均工作量，布线实验在固定片段上测量周期、访存、功率与能量。

通信活动代理的定义区分 DIRECT 的密集输入值加普通隐层脉冲、INPUT-PG 的输入事件加普通隐层脉冲、ALL-PG 在所有编码边界的事件，填充位置不计入。准确率是分类正确的测试比例在种子上的均值与样本标准差，配对比较用 3 个种子上的双侧 95% 配对区间。工作量与布线指标用相对 DIRECT 的变化率表示，减少为负值，其正值幅度记为降低率。

布线实现采用 Sky130 工艺典型角、25 摄氏度、1.8 伏、标称 10 MHz 时钟，报告 resident 能量为扣除空闲基线后的增量动态能量且不含权重装载，transported 能量再加固定 220948 字节权重装载。整数推理中特征与 PG 状态用 15 位小数，权重用 9 位小数，膜电位累加用 24 位小数，PG 用 6 个指数槽并比较完整整数乘积。

### 从零训练时准确率与活动量发生了什么

从零训练的结果需要同时看准确率均值、种子间波动与活动量下降是否稳定。下面这张软件结果图把准确率与完整活动量放在同一坐标系，并用下半部分柱状图展示事件发生在哪些边界，读图时先区分分布点与单样本标记的含义。

> **看图路径：** 1. 先看上面两幅准确率随完整活动量变化的均值与误差线位置；2. 再看虚线所示 DIRECT 准确率与 INPUT-PG 点的左右关系；3. 最后看下面两幅各边界事件柱状图中输入柱与隐层柱的高低

[![原论文 Figure 3：Software accuracy and complete communication activity.](https://arxiv.org/html/2610.41381v1/figure3.svg)](https://arxiv.org/html/2610.41381v1/figure3.svg)

*论文图 3。原论文 Figure 3:：“Software accuracy and complete communication activity.”。*

图中上半部分可见 INPUT-PG 的点在水平方向明显左移，表示完整活动量下降，而垂直方向与 DIRECT 虚线接近，表示准确率接近。下半部分可见 Deep-SNN 输入边界平均约 2.92 千事件，而 3 个隐层边界分别约 10.66、10.74 和 3.48 千事件，LIF-TCN 各块边界事件也高于输入边界。这解释了为何 ALL-PG 的完整活动量高于 INPUT-PG。

具体到数字，Deep-SNN 上 INPUT-PG 平均准确率为 88.47%，DIRECT 为 88.84%，输入事件从每条 9,932.444 个密集值降到 2806.5 个，完整代理下降 20.07%。LIF-TCN 上 INPUT-PG 为 88.10%，DIRECT 为 88.75%，输入事件降到 2684.8 个，完整代理下降 19.74%。但 3 种子配对区间较宽，例如 Deep-SNN 上 INPUT-PG 与 DIRECT 差值为−0.37 个百分点，区间为−5.73 到 4.99，说明在仅有 3 个种子时不能断言准确率无差异，只能说观测值接近且活动量一致更低。

**通信活动代理 × 布线后能量：** 通信活动代理是对每条样本统计的输入数值或事件数加隐层脉冲数，用于在软件侧比较工作量，布线后能量是在 Sky130 工艺下由周期、访存与功率积分得到的物理耗能；前者诊断哪里变稀疏，后者回答硬件上是否真的省能量，二者量纲不同不能互相替代。

### 冻结权重的整数推理能否保持准确并降低访存

整数推理轨道回答的是同一套冻结权重下预测编码是否同时保持任务表现并降低可测工作量。该轨道使用种子 17 的 Deep-SNN 权重，在全部 720 条测试上统计每条平均输入活动、访存读次数与推理周期，参数装载不计入。下表比较的问题是在相同权重与相同测试集下，INPUT-PG 与 ALL-PG 相对 DIRECT 的准确率与平均工作量差异，指标方向是准确率越高越好，活动、访存与周期越低越好。

| Method | Accuracy (%) | Input activity/clip | SRAM reads/clip | Inference cycles/clip |
| --- | --- | --- | --- | --- |
| DIRECT | 89.58 | 9,932.44 | 5,054,116.01 | 10,448,419.24 |
| INPUT-PG (ours) | 90.00 | 2,813.53 | 3,342,360.28 | 7,024,907.79 |
| ALL-PG (ours) | 89.58 | 2,932.49 | 5,016,142.84 | 10,372,472.91 |

表中可见 INPUT-PG 准确率为 90.00%，对应 648 条正确，DIRECT 与 ALL-PG 均为 89.58%，对应 645 条正确。INPUT-PG 每条平均输入活动为 2813.53，相对 DIRECT 的 9932.44 下降 71.67%，平均访存从 5054116.01 降到 3342360.28，降幅 33.87%，平均周期从 10448419.24 降到 7024907.79，降幅 32.77%。ALL-PG 虽然准确率与 DIRECT 相同，但访存与周期接近 DIRECT，明显高于 INPUT-PG。这支持预测放在输入端，而不扩展到每个隐层边界。

需要强调的是该表是整数软件工作量，不是芯片能量，访存计数只包含权重与偏置读取，周期由事件调度推算。90.00% 只在该冻结权重与该 720 条划分下成立，换权重或换数据时数字会变化。

### 单片段布线实测的周期与能量如何变化

整数推理与布线能量是两个不同总体，不能混读。下面这张图前五幅是种子 17 固定片段 3826 的布线后估计，最后一幅是 720 条整数软件准确率，读图时要先分清单片段物理估计与多片段软件统计的范围。

> **看图路径：** 1. 先看 A 至 C 三幅中 INPUT-PG 柱相对 DIRECT 柱的高度下降；2. 再看 D 幅动态功率各柱几乎持平而 E 幅面积略增；3. 最后看 F 幅整数准确率三柱高度接近的独立评测含义

[![原论文 Figure 4：Routed energy estimates and integer software accuracy.](https://arxiv.org/html/2610.41381v1/figure4.svg)](https://arxiv.org/html/2610.41381v1/figure4.svg)

*论文图 4。原论文 Figure 4:：“Routed energy estimates and integer software accuracy.”。*

图中 F 幅显示整数软件准确率，DIRECT 为 89.58%，INPUT-PG 为 90.00%，ALL-PG 为 89.58%，A 至 E 幅为独立的单片段布线后估计，不能与 F 幅混读为同一总体。其中 INPUT-PG 在该固定片段上周期与访存分别减少 33.76% 与 34.70%，瞬时动态功率略高 1.23%，但执行时间缩短使增量能量下降 39.49%。

下表给出同一整数推理实验的完整数字，比较问题是在相同冻结权重与 720 条总体下，3 种实现在准确率、每条输入活动、每条 SRAM 读数与每条推理周期上的差异。

| Method | Accuracy (%) | Input activity/clip | SRAM reads/clip | Inference cycles/clip |
| --- | --- | --- | --- | --- |
| DIRECT | 89.58 | 9,932.44 | 5,054,116.01 | 10,448,419.24 |
| INPUT-PG (ours) | 90.00 | 2,813.53 | 3,342,360.28 | 7,024,907.79 |
| ALL-PG (ours) | 89.58 | 2,932.49 | 5,016,142.84 | 10,372,472.91 |

结合正文报告，DIRECT 输入活动每条 9,932.44，SRAM 读数每条 5,054,116.01，推理周期每条 10,448,419.24；INPUT-PG 输入活动每条 2,813.53，SRAM 读数每条 3,342,360.28，推理周期每条 7,024,907.79，相对 DIRECT 平均 SRAM 读数减少 33.87% 与推理周期减少 32.77%；ALL-PG 输入活动每条 2,932.49，SRAM 读数每条 5,016,142.84，推理周期每条 10,372,472.91，工作量明显高于 INPUT-PG。这些结论只对该冻结权重与 720 条整数软件评测成立，不能直接推广为布线后单片段的能量结论。

### 不同编码与放置的得失在哪里

要判断 PG 的优势是否来自编码本身，需要看同一输入边界上的 RATE-T8 与 TTFS-T8，以及同一 PG 在不同放置下的表现。下表给出相对 DIRECT 的配对准确率差异，单位为百分点，区间为 3 个种子上的 95% 配对区间，区间包含零表示在当前种子数下不能确认差异方向，完整六行都应保留以避免只挑有利行。

| Architecture | Comparison | Mean [95% CI] |
| --- | --- | --- |
| Deep-SNN | INPUT-PG (ours)–DIRECT | −0.37 [−5.73, 4.99] |
| Deep-SNN | ALL-PG (ours)–DIRECT | −0.19 [−3.99, 3.62] |
| Deep-SNN | RATE-T8–DIRECT | −0.23 [−2.34, 1.88] |
| Deep-SNN | TTFS-T8–DIRECT | −1.90 [−3.29, −0.50] |
| LIF-TCN | INPUT-PG (ours)–DIRECT | −0.65 [−6.73, 5.43] |
| LIF-TCN | ALL-PG (ours)–DIRECT | −1.90 [−8.27, 4.48] |

表中 Deep-SNN 上 INPUT-PG 与 DIRECT 差值为−0.37 个百分点，区间为−5.73 到 4.99；ALL-PG 差值为−0.19 个百分点，区间为−3.99 到 3.62；RATE-T8 差值为−0.23 个百分点，区间为−2.34 到 1.88；TTFS-T8 差值为−1.90 个百分点，区间为−3.29 到−0.50，后者在 3 个种子上一致更低。LIF-TCN 上 INPUT-PG 差值为−0.65 个百分点，区间为−6.73 到 5.43，ALL-PG 差值为−1.90 个百分点，区间为−8.27 到 4.48。活动量方面 RATE-T8 完整代理增加 9.84%，TTFS-T8 减少 7.39%，INPUT-PG 减少 20.07% 且为 5 种变体中最低。本表数值与单位依据论文 PDF。

下表汇总 PG 两种放置相对 DIRECT 的平均配对差异，进一步说明放置的影响，数字为百分点而非相对百分比。

| Architecture | INPUT-PG (ours)–DIRECT | ALL-PG (ours)–DIRECT |
| --- | --- | --- |
| Deep-SNN | −0.37 | −0.19 |
| LIF-TCN | −0.65 | −1.90 |

表中 Deep-SNN 上 INPUT-PG 与 ALL-PG 分别低 0.37 和 0.19 个百分点，LIF-TCN 上分别低 0.65 和 1.90 个百分点。结合边界事件计数，隐层边界本身已是稀疏二值活动，对其跳变再编码会引入包与解码代价，这是 ALL-PG 完整活动量与工作量高于 INPUT-PG 的机制解释。本表数值与单位依据论文 PDF。

**RATE-T8 × TTFS-T8：** RATE-T8 把量化后的幅度重放为多个单位事件，TTFS-T8 把非零幅度编码为每个通道至多一个事件，二者都只作用于输入并保留原有帧循环；它们与 PG 的对比用于说明在同一输入边界上不同编码方式对活动量和周期的不同影响。

### 这些结论在什么条件下才成立

首先是样本与种子范围的限制。从零训练的准确率结论基于 720 条测试与 3 个种子，配对区间普遍较宽，只能说观测准确率接近 DIRECT，不能证明在更多种子或更多说话人下依然无差异。整数推理的高准确率基于冻结的种子 17 权重，换一个种子或换一个训练检查点，90.00% 与 89.58% 的相对关系可能改变。

其次是能量与工作量的口径差异。软件活动量是通信代理，每个 PG 事件还携带地址、符号、指数与控制信息，比较器、预测器、解码器、时钟与布线的活动都会影响硬件功耗。布线能量只测了一个固定片段，且排除了模拟前端、特征提取、封装与片外存储，权重装载按固定字节单独计算。因此周期与访存下降不等于所有片段平均下降，瞬时功率略升而能量下降的现象也只在该执行时长缩短的条件下成立。

小型可移动存储实验使用不同的 40 到 64 到 5 结构，其 DIRECT 准确率 83.33% 与能量基线与主实验不可直接比较，其中 Previous-K6 PG 能量最低但准确率降到 79.72%，说明换结构后需要重新评估折中。

### 复现第一步需要准备什么

复现应从数据与整数推理开始，而不是直接做芯片布线。第一步是按原文划分准备 4545 条中的 720 条测试集，确保说话人不重叠，并用训练集统计做特征归一化，填充帧在计数时排除。接着用种子 17 的冻结 Deep-SNN 权重运行整数评估器，核对 INPUT-PG 能否复现 90.00% 与访存、周期下降约三成的量级，同时检查输入事件数是否在每条 2800 左右。

第二步是核对从零训练的公平条件，包括相同初始化指纹、50 轮训练、验证选点、6 个指数槽与直通估计的门控实现。第三步才是布线复现，需要相同的存储组织、权重镜像、工艺角与时钟，并用同一固定片段核对周期与访存，再用空闲基线扣除得到增量能量。论文未提供可验证的公开代码与模型资源信息，因此不能声称作者资源当前可用，复现时缺失的超参数与 RTL 细节需要以原文为准，不应从模型名称猜测实现。

容易产生的误解是把完整活动量下降 20% 直接理解为节能 20%，或把单片段 39.49% 理解为平均节能。实际上前者是软件计数，后者是单片段增量能量，二者需要分别复现与报告。

### 什么时候值得尝试这种输入预测编码

当系统满足 3 个条件时值得考虑类似设计。第一是输入帧时间相关性强且尚未稀疏，例如连续对数梅尔特征流，第二是输入访存与调度是主要开销而隐层已足够稀疏，第三是硬件允许用移位加减代替乘法并能承担少量预测状态与解码面积。论文中 INPUT-PG 增加约 1.00% 面积，ALL-PG 增加约 1.33%，这是为稀疏化付出的具体代价。

还需要补充的验证包括更多种子与更多说话人下的准确率分布、多片段平均的布线能量、不同噪声与语速下的鲁棒性，以及与模拟前端和特征提取一起的全链路功耗。只有在这些条件下，才能判断输入侧预测编码是否从单点原型变为可部署的低功耗语音接口。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.41381v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-02/)
