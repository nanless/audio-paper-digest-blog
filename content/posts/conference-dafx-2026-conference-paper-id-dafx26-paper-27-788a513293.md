---
title: "Fourier Neural Operators for Sample-Rate-Independent Virtual Analog Modeling"
date: 2026-09-13
draft: false
description: "论文把虚拟模拟看作固定时长区间上的算子学习，用傅里叶域参数化加帧重叠相加实现单采样率训练、多采样率推理，在 Big Muff Pi 输入级上上采样与基线相当且可直接下采样，代价是帧缓冲结构和内部上采样带来的计算量。"
tags: ["时频分析", "鲁棒性", "音乐", "音频生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_27"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ad8a855c617d359d5a8c55e9fd6288eec8631a4f198d750dc22656d405acf2f3"
paper_digest_api_reader_plan_sha256: "e34ec687c9ef0101222db226d8882b60c42f37d10051e9ccecefe309d74b12fa"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e61ef28bd3e8d163c4696f02ddd6e9486fb4fc6aca04ea573fbb2b5299e8d2f7"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c4b27970de0207bf4c9fb08d38bff9292ae803c6320ec3a7c16f63b2097e1d3c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "54cfe5cd712df8d20fb8a268d28e4afe3dfbb454600166df31f3835209a8878e"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "11d07bada585bdd1e38513e5067581807336e101717abf68efcb0bc37a2a83bb"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.time-frequency","label":"时频分析"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.audio-generation","label":"音频生成"}]
paper_digest_primary_task: "音频生成"
paper_digest_primary_method: "时频分析"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把采样率换掉而不重训：固定时长帧上的傅里叶神经算子如何做虚拟模拟

> 英文题目：*Fourier Neural Operators for Sample-Rate-Independent Virtual Analog Modeling*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_27`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf)

标签：#时频分析 #鲁棒性 #音乐 #音频生成

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Oliviero Massi：机构信息未能从会议 PDF 纯文本可靠映射
- Alessandro Ilic Mezza：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

虚拟模拟需把连续时间非线性电路映射为离散时间模型，输入为吉他干声与扫频信号，输出为经晶体管饱和的波形，难点是训练采样率被隐式编码进参数导致变采样率即变动力学。本文把固定时长区间上的帧映射定义为算子学习问题，先以加窗切帧把长信号转为固定支撑函数，为频域算子提供统一输入。再用改进傅里叶层在频域做带限线性变换并在时域加非线性，细化后特征送入砖墙低通与通道多层感知机投影并下采样回原分辨率。最后以重叠相加合成长信号，实现任意长度音频的连续重建。与延迟线插值的采样率无关循环网络相比，关键差异是谱权重只作用于低频模式且与快速傅里叶变换点数无关，因而同一算子可直接评估于不同密度网格并天然支持下采样。在留出吉他片段评测条件下，LIDL-RNN在96 kHz场景的指标MAE为2.333，高于其在48 kHz条件的指标MAE 2.173。该结论适用边界受限于单级Big Muff Pi输入级仿真数据与客观误差指标，尚未验证多拓扑电路、真实硬件测量与听感偏好；原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么换采样率会失效？

这篇论文的输入是连续时间音频信号，目标是虚拟模拟，也就是用数字模型复现模拟音频电路的输入输出行为。研究生刚进入该领域时容易把任务理解为给定采样点序列预测采样点序列，但论文强调更准确的视角是学习函数到函数的映射。训练时模型看到的是固定采样率下的离散观测，测试时采样率可能变成更高或更低。

若模型是逐样本循环网络，它的离散时间步长已经被吸收进结构和参数，改变采样率不是简单加密网格，而是改变了模型实际实现的动力学，因此直接换采样率往往失真。论文开场就交代了这一点，并说明已有补救包括整数与分数延迟改造以及在网络外包裹重采样，但前者只针对上采样设计，后者是外部适配。输出是固定时长帧的预测波形，再经重叠相加得到任意长信号。本文默认从原文独立写作，不引入外部代码或数据是否公开的判断。

**虚拟模拟 × 神经算子：** 虚拟模拟的分工是复现模拟音频电路从输入连续信号到输出连续信号的映射，神经算子的分工是直接在函数空间之间学习映射而不是固定维向量，二者搭配的理由是不同采样率可看作同一时间区间上不同密度的均匀离散化，组合意义是同一组学习到的谱权重可以在不同采样网格上求值，从而不为每个采样率重训模型。

论文把信号看作定义在固定时间区间上的连续函数，不同采样率只是同一区间上不同密度的均匀网格。这一视角是后文所有设计的学习依赖起点：只有先接受固定时长支撑，才能理解为什么傅里叶算子可以在不同分辨率上复用同一组参数，也才能理解为什么帧长决定了单帧内能捕获的系统动态跨度。

### 已有路线在同输入同目标下如何对照？

在相同输入和相同目标下，论文对照了 3 条路线。第一条是闭盒逐样本循环网络，代表是门控循环单元等结构，优点是算法延迟低且用内部状态编码时间依赖，缺点是采样率独立不是原生的。第二条是采样率无关循环网络改造，以线性插值延迟线为代表，它把单位样本延迟 reinterpret 为新采样网格上的延迟，整数上采样用标准延迟线，非整数用分数延迟插值，论文明确引用其结论是该构造不适用于下采样，会导致隐含的非因果延迟关系。

第 3 条是傅里叶与时频跨采样率思想，包括按物理单位而非样本定义分辨率的卷积迁移、调制效果的帧谱建模，以及把傅里叶灵感层当作快速卷积块放入循环网络的做法。论文指出最后一种做法是为了高效循环建模，而不是为了跨采样率学习。还有一类是混合物理结构与可微建模，但本文不走显式电路拓扑路线，而是保持闭盒帧映射。

这样的对照避免把类别差异当成同条件胜负：循环基线与本文方法在训练数据、训练采样率和参数量级上尽量对齐，再分别考察上采样和下采样的适用边界。

### 要解决的具体问题与必须保留的条件是什么？

具体问题是只在 48 kHz 训练 1 次，就能在 48 kHz、88.2 kHz、96 kHz 和 24 kHz 上推理，其中 88.2 kHz 是非整数上采样，96 kHz 是整数上采样，24 kHz 是下采样。必须保留的信息包括固定时长支撑、均匀网格、训练与推理网格可以不同、推理时内部上采样因子可调。论文把长信号切成固定时长 T 的帧，每帧的输入输出都是同一区间上的离散化，帧长 T 是关键设计参数。模型不跨帧传递隐状态，因此只能利用单帧内的时间依赖，这是与循环网络的本质区别。

初学者常误以为帧模型加了重叠就等价于有了记忆，实际上重叠只是为了重建连续波形，不提供跨帧的状态递推。另一个必须保留的条件是评估信号的重采样方法按原文引用执行，训练只用 48 kHz 数据，评估用留出的吉他片段在不同分辨率下比较。例子仅为教学说明：可以把同一段 20 毫秒吉他波形想象成用 960 点或 1920 点描述，物理时长不变，只是点的密度变化。

### 方法全景：一个样本如何走完输入到输出？

沿一个样本走完全程有助于建立全局图。取一段到达的连续输入，先按固定跳移切出时长 T 的帧并乘分析窗，得到输入帧向量。输入帧进入第一层改进傅里叶块，若该层内部上采样因子大于 1，则隐表示被放到更密的网格上，后续层保持该分辨率。经过多层傅里叶块后，高分辨率隐表示经砖墙低通滤波去掉高于原始奈奎斯特的成分，再经逐通道多层感知机投影并下采样回原始帧长，得到预测的加窗输出帧。最后对所有预测帧加合成窗并重叠相加，得到任意长输出。

训练时监督来自同一帧的目标加窗帧，推理时跳移决定输出更新率和吞吐。首帧可用零初始化并随新样本填入，跳移到单样本时趋近逐样本更新，但仍是缓冲结构。下图给出了三部分结构的对应关系，读图时先看主路径再看分支汇合。

> **看图路径：** 1. 沿左侧原始层从上到下看傅里叶分支与时域 W 分支在哪里相加再进激活；2. 对比中间改进层中 F 只算一次、W 只作用于 1 到 Ntilde 通带的画法；3. 沿右侧整帧链路数出 Phi 堆叠、低通、Q 和下采样的先后顺序；4. 注意中间层的上采样箭头与右侧最末下采样箭头的对称关系

[![原论文 Figure 1：Block diagrams of the considered Fourier-based ar- chitectures: (a) original FNO layer; (b)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/179349463039/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/179349463039/figure-1.png)

*论文图 1。原论文 Figure 1：“Block diagrams of the considered Fourier-based ar- chitectures: (a) original FNO layer; (b) modified Fourier layer proposed for VA modeling; (c) proposed frame-level architec-…”。*

该图左侧是原始傅里叶层，输入同时走傅里叶分支的截断谱变换和时域跳跃矩阵分支，相加后进激活。中间是本文改进层，只做 1 次傅里叶变换，谱卷积只作用于最低的约 64 个实模式对应的非冗余模式，跳跃矩阵只作用于原始通带内的非负频模式，两路在频域相加后统一零填充上采样，再经逆变换和激活。右侧是帧级链条，从输入帧经多个改进层、低通、通道多层感知机到下采样输出。这种安排把线性动态的谱处理与时域静态非线性分开，与块导向的非线性音频系统描述一致，也与交替线性滤波和非线性块的状态空间启发网络相似。

### 傅里叶层内部做了什么计算，为什么只保留低频模式？

原始神经算子层的思想是逐点线性变换加线性算子再加逐点非线性，堆叠多层逼近目标算子。傅里叶神经算子把线性算子参数化在傅里叶域：对隐表示做快速傅里叶变换，只保留最低的若干复数模式并用可学习的复数张量做线性变换，高频模式置零后再逆变换。由于保留模式数与快速傅里叶点数无关，权重形状不随网格变化，因此同一算子可在不同均匀离散化上求值，这在 1 维音频中直接对应采样率无关。

实现上利用实信号的 Hermitian 对称，只处理非冗余非负频模式，把可训练参数减半并降低计算量。论文设置保留实模式数为 64，隐通道为 8，层数为 3。只保留低频不是丢弃高频细节的随意选择，而是提供压缩的线性变换表示，高频的产生交给时域非线性，后续再用滤波控制。

**傅里叶层 × 跳跃连接：** 傅里叶层的分工是在频域用可学习的复数矩阵对低频模式做线性变换以表达动态，跳跃连接的分工是保留输入通带内的直接通道以稳定训练和传递宽带信息，二者搭配的理由是都需要与网格无关且都要控制混叠，组合意义是本文把跳跃连接也搬到频域只处理非冗余非负频模式，再与谱卷积相加后统一零填充上采样。

把跳跃连接搬到频域还有计算与混叠两方面的理由。原文分析指出，若跳跃仍在时域对每个高分辨率时间步做矩阵乘法，其浮点运算量随上采样因子放大，还会把高于原始奈奎斯特的谐波向深层传播，增加折叠风险。改为频域实现后，每个非负频复数仓对应 2 次实矩阵向量乘，运算量与原始通带点数成正比，带来与上采样因子相当的净收益。

**分析窗 × 合成窗：** 分析窗的分工是把长信号切成固定时长 T 的加窗帧以满足算子定义在固定支撑上的要求，合成窗的分工是在重叠相加时压制帧边界不连续，二者搭配的理由是傅里叶层隐含周期延拓而音频帧边界不周期，组合意义是论文用同一原型窗的平方根版本同时做分析和合成并满足 COLA 条件，使训练时预测加窗帧、推理时仍能重建任意长信号。

帧层面的加窗同样关键。分析窗与合成窗取为满足恒定重叠相加条件的同一原型窗的平方根版本，训练预测的是已加窗帧，重建时再加 1 次合成窗以压制边界不连续。这种双重加窗用条件补偿，是初学者复述时最容易漏掉的一步。

**内部上采样 × 砖墙低通滤波：** 内部上采样的分工是在非线性激活前把谱零填充到更密网格以容纳新产生的谐波，砖墙低通滤波的分工是在多层堆叠后把高于原始输入奈奎斯特的成分清零，二者搭配的理由是时域非线性必然产生高频而虚拟模拟要求回到原始分辨率，组合意义是先在高分辨率做非线性和 FFT/IFFT，再滤波并经通道 MLP 下采样回原始帧长，从而把混叠控制与学习到的谱处理分开。

上采样与下采样在频域分别对应零填充与截断，前者等价于理想 sinc 插值。论文允许每层的上采样因子在训练与推理时独立选择，实验中除首层在训练时取 2 外其余取 1，推理时则对比取 1 与取 2 的效果。

### 训练如何组织，监督信号和优化路径是什么？

训练对象是帧级映射，监督来源是同一帧的目标加窗帧。数据来自对 Big Muff Pi 输入级的数值仿真，激励包括不同幅度的干净吉他片段与指数扫频，以覆盖弱非线性和强非线性工作区，总时长约 130 秒。训练采样率为 48 kHz，其中 90% 用于训练，10% 留作评估。从全长信号中按 20 毫秒帧长提取帧，在训练分辨率下每帧 960 点，采用根汉窗，75% 重叠对应 5 毫秒跳移。帧对随机打乱后按 128 组成小批量。

模型用归一化均方误差作为损失，即预测帧与真值帧的平方误差除以真值帧能量。优化器用 Adam，默认系数 0.9 和 0.999，初始学习率 0.001，每 200 轮减半，共训练 1000 轮。训练在单张 12 GB Titan X 上进行。首层内部上采样因子在训练时设为 2，以减少非线性阶段产生的虚假混叠谐波。激活函数全部选用 SiLU，最终投影是隐维度为 8 的两层逐通道多层感知机。

论文报告总可训练参数为 17785，基线循环网络为 12929，量级相当。未报告的内容应明确指出：原文未给出权重衰减、梯度裁剪、早停或随机种子，不能从模型名称推定这些实现，也不能补写拿掉某组件后必然如何。

### 实验条件如何对齐，测什么指标？

评估用训练未见的吉他片段，分别在训练采样率与重采样后的 unseen 分辨率上测试。比较问题是同一训练模型在不同推理网格上是否保持精度，以及与可运行基线的差距。公平条件包括同一电路、同一数据生成流程、同一训练采样率、相近参数量，以及评估时用同一重采样方法得到不同分辨率的输入。基线是 64 隐单元门控循环单元加单层全连接线性层，在 0.1 秒序列、每 25 毫秒抽取的条件下同样以归一化均方误差训练 1000 轮，推理时用线性插值延迟线策略实现采样率无关。

指标有 2 个方向：平均绝对误差衡量时域波形一致性，越小越好；谱收敛衡量时频域一致性，越小越好。论文还用信号混叠噪声比衡量混叠，越大表示非混叠谐波能量占比越高、混叠越小。测试用持续 3 秒、幅度 0.35 伏的单频正弦逐频率探测，去掉窗口边界后取中央 1 秒合成理想带限谐波参考，再计算保留谐波与残差的能量比。时频分析用 2.5 秒从 100 赫兹到 8 千赫兹的指数扫频，输入取连续 20 毫秒窗。

下表先明确 4 种评估场景的采样条件，这是理解后文数字的前提。
下表把论文实际可运行的 4 种评估采样率放在同一框架下比较，指标方向是波形与谱误差越小越好，混叠比越大越好，公平条件是同一训练模型直接在不同网格上求值，基线仅在上采样可运行。

| 场景 | 采样率 | 与训练关系 | 重采样来源 | 模型是否可直接运行 |
| --- | --- | --- | --- | --- |
| 训练一致 | 48 kHz | 相同 | 无需重采样 | 两类模型均可 |
| 非整数上采样 | 88.2 kHz | 高于训练 | 评估信号重采样 | 两类模型均可 |
| 整数上采样 | 96 kHz | 高于训练 | 评估信号重采样 | 两类模型均可 |
| 下采样 | 24 kHz | 低于训练 | 评估信号重采样 | 仅傅里叶模型可直接运行 |

该表的采样率数字由原文连续句逐字覆盖，比较对象是真实可部署策略，没有用事后最优值代替。

表后需要强调的是下采样行的不对称性：不是基线表现差，而是其结构不能直接处理低于训练采样率的信号，若要比较需先把输入上采样，这已改变任务条件，因此论文把下采样单独报告。

### 主结果：在上采样相当、在下采样仍可用吗？

先看时域波形。论文在代表性吉他片段上比较预测与真值，上排是傅里叶模型在 48 kHz、88.2 kHz 和 96 kHz 的输出，下排是线性插值延迟线基线在同样 3 种采样率的输出。像素显示两类模型的预测曲线都紧贴真值虚线，包括负向尖峰附近，跨采样率没有出现明显发散。傅里叶模型在评估时内部上采样取最简单的 1，即无上采样部署。下图是该对比的直接证据，读图时应先按图例确认对象再判断贴合。

> **看图路径：** 1. 先看每子图标题的采样率区分上排 FNO 与下排 LIDL-RNN；2. 沿横轴样本方向检查预测实线与真值虚线在尖峰处的贴合程度；3. 对比 48 kHz 与 88.2 kHz、96 kHz 下两类模型的误差是否明显放大

[![原论文 Figure 2：Time-domain validation on representative guitar audio excerpt.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/179349463039/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/179349463039/figure-2.png)

*论文图 2。原论文 Figure 2：“Time-domain validation on representative guitar audio excerpt.”。*

该图上排三幅分别对应 48、88.2 和 96 kHz 下的傅里叶预测，下排三幅对应基线预测，纵轴为输出电压，横轴为样本序号。每幅中实线为模型预测，橙色虚线为真值。可见在训练采样率与两种上采样下，两类模型的波形都与真值高度重合，支持论文关于上采样场景精度相当的判断。像素不能精确读出的逐点误差不应硬写，应以表中的平均指标为准。
下表是全长预测的定量汇总，平均绝对误差与谱收敛分别以千分之与百分之单位报告，数值越小越好。表前已说明公平条件，表后将解释收益与代价。

| Metric Model | 24 | 48 | 88.2 | 96 |
| --- | --- | --- | --- | --- |
| FNO (Ours) | 2.894 | 2.897 | 2.898 | 2.898 |
| FNO (Ours) | 2.932 | 3.237 | 3.408 | 3.431 |

该表复用原文矩阵，行是不同指标下的傅里叶模型，列是 24、48、88.2 和 96 kHz 4 种采样率。论文正文同时报告基线在 48、88.2 和 96 kHz 的平均绝对误差约为 2.17 至 2.33 量级，谱收敛约为 3.85 至 3.93 量级，而傅里叶模型的平均绝对误差稳定在 2.89 量级附近，谱收敛从 3.23 到 3.43 随采样率略升。总体趋势是平均绝对误差偏向基线，谱收敛偏向傅里叶模型，但差距不大，支持上采样场景相当的结论。更重要的是下采样列：傅里叶模型在 24 kHz 的数值与高采样率同量级，表明低于训练采样率仍保持可比精度，而基线在该列不可直接运行。

**线性插值延迟线循环网络 × 下采样：** 线性插值延迟线循环网络的分工是通过把训练时的单位延迟 reinterpret 为新网格上的延迟并用分数延迟插值实现上采样推理，下采样的分工是要求模型直接处理低于训练采样率的输入，二者搭配的问题在于下采样会导出隐含的非因果延迟关系，组合意义是该基线在论文中只能报告上采样结果，而傅里叶算子因定义在固定时长上可直接在 24 kHz 上求值，形成对照。

下采样的时域证据是 24 kHz 吉他片段的单独波形，预测与真值同样贴合。论文提醒该列数值应与高采样率对照阅读，而不是孤立判断好坏。未胜出项也应保留：傅里叶模型的平均绝对误差并未超过基线，若只看时域平均误差会得出基线更好的结论，需要结合谱收敛一起理解。

### 推理时打开内部上采样能减少混叠吗，代价是什么？

论文把 24 kHz 下采样视为最能暴露混叠的场景，因为更低的奈奎斯特使新产生谐波更容易折回带内。为此固定同一训练模型，对比推理时内部上采样因子取 1 与取 2。输入是指数扫频，输出谱图的真值与两种预测并排比较。定性上，无内部上采样时扫频末端高频区出现更明显的折返分量，有内部上采样时谐波轨迹分离更清晰。下图是该时频对照，观察时应沿主轨迹向上看折返线。

> **看图路径：** 1. 先确认三幅谱图横轴时间 0 到 2.5 秒、纵轴频率到 12 kHz 的范围一致；2. 沿指数扫频的主谐波轨迹向上看高频端是否出现折返斜线；3. 对比中间无内部上采样与右侧有内部上采样在 2 秒后的杂散差异

[![原论文 Figure 4：Time-frequency analysis of the proposed FNO model in the downsampled fs = 24 kHz scenario.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/179349463039/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/179349463039/figure-4.png)

*论文图 4。原论文 Figure 4：“Time-frequency analysis of the proposed FNO model in the downsampled fs = 24 kHz scenario.”。*

该图左为真值谱，中为内部上采样取 1 的预测，右为取 2 的预测，横轴为时间、纵轴为频率、颜色为功率谱密度。像素显示中间图的右上区域出现与主轨迹交叉的折返斜线，而右侧图的对应区域更接近左图，支持内部上采样抑制折返的判断。该分析是定性视觉证据，还需下图的定量比值佐证。
定量上，论文用信号混叠噪声比随频率的曲线比较两种推理配置，频率从 100 赫兹到 8 千赫兹近似对数分布。低频段两条曲线基本重合，高频段取 2 的曲线明显更高，与谱图差异一致。下图是该曲线的直接证据。

> **看图路径：** 1. 先看横轴对数频率 0.1 到 8 kHz 与纵轴 SNRA 的 dB 方向，越高表示混叠越小；2. 找出 1 kHz 附近两条曲线重合的分界，再看高频段的分离趋势；3. 沿高频端逐点比较内部上采样取 2 相对取 1 的抬升幅度

[![原论文 Figure 5：SNRA curves at fs = 24 kHz for inference-time inter- nal upsampling factors ρ0 = 1 and ρ0 = 2.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/179349463039/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/179349463039/figure-5.png)

*论文图 5。原论文 Figure 5：“SNRA curves at fs = 24 kHz for inference-time inter- nal upsampling factors ρ0 = 1 and ρ0 = 2. Higher values indicate reduced aliasing-related spectral energy.”。*

该图横轴为对数频率、纵轴为信号混叠噪声比，蓝色圆点为内部上采样取 1，橙色方块为取 2，越高表示混叠相关能量越小。像素显示约 1 kHz 以下两者重合，1 kHz 以上蓝色迅速下降而橙色维持高位，支持高频段打开内部上采样有益的结论。代价是计算量上升，因为快速傅里叶、逆变换与逐点非线性都作用在扩展的内部网格上，但谱卷积分支与跳跃分支仍分别局限于保留实模式与原始通带，与上采样因子无关。总体趋势不等于每频点都成立，低频段两者相当即是反例。

### 哪些边界没有测，哪些结论不能推广？

首先是模型规模与电路覆盖的边界。论文只在 Big Muff Pi 输入级这一单管双极结型晶体管电路上验证，激励虽覆盖不同幅度的吉他与扫频，但未扩展到更多电路系统与工作条件，未来工作明确提出要扩展验证并系统分析参数量减小时的性能变化。其次是训练时内部上采样对学习权重的影响尚未研究，论文只报告推理时切换的效果，不能推定训练时取不同因子必然如何。第三是延迟与成本的边界。

论文讨论了跳移决定吞吐、首帧零初始化可使算法延迟任意小，以及滑动离散傅里叶变换可能加速高度重叠推理，但未测量实际延迟、逐帧耗时或误判率，不能承诺这些量得到改善。训练资源只报告了单卡型号与内存，推理开销只做定性分析。第四是基线比较的边界。下采样不是基线失败，而是其架构不直接适用，若强行先上采样再处理则任务条件已变，不能当成同条件胜负。

相关性不等于因果，谱图更干净与信号混叠噪声比更高支持混叠更小，但不能直接证明听感更好，因为未做主观评价。

### 复现先做什么，需要哪些超参数与信息条件？

复现应先固定时长与网格，再搭模型，最后对齐评估。第一步按 20 毫秒帧长、根汉窗、75% 重叠切帧，训练分辨率下每帧 960 点，批量 128。第二步搭 3 层改进傅里叶层，每层隐通道 8，保留实模式 64，最终投影为隐维度 8 的两层逐通道多层感知机，激活用 SiLU，训练时首层内部上采样取 2 其余取 1，总参数应接近 17785。第三步用归一化均方误差训练 1000 轮，Adam 初始学习率 0.001 每 200 轮减半。基线若要复现，用 64 隐单元门控循环单元加单层线性层，参数接近 12929，在 0.1 秒序列上同样训练，再用线性插值延迟线实现上采样推理。

评估时保留 10% 吉他片段，在 48、88.2、96 和 24 kHz 上分别比较平均绝对误差与谱收敛，下采样只测傅里叶模型。混叠验证用幅度 0.35 伏、时长 3 秒的单频探测并取中央 1 秒计算信号混叠噪声比。资源状态是正文开源声明的唯一依据，本次未发现来源绑定且完成验证的资源，因此不得声称代码、模型或数据已公开，复现应按论文文字与仿真流程自行实现。还需补的验证包括更多电路、更小参数量、训练时上采样的影响，以及实际延迟测量。

### 何时值得尝试这种方法？

当产品或实验需要在多个采样率上部署同一虚拟模拟模型，且包含低于训练采样率的场景时，这种固定时长帧加傅里叶算子的方法值得尝试。它的可复述要点是物理时长固定、网格可变、谱权重复用、时域非线性后滤波再下采样。若只做上采样且已有调好的循环模型，论文证据显示两者精度相当，切换收益主要在下采样的直接可用性与谱收敛的轻微优势。

若计算预算紧张，应注意内部上采样与重叠率都会增加帧评估次数与变换开销，需要在精度与吞吐之间权衡。教学上最易误解的是把重叠当记忆、把频域跳跃当普通残差、把下采样缺失当基线误差，正确理解是无跨帧状态、跳跃限带且分支在频域相加、下采样是结构适用性差异。综合来看，论文报告的是在单电路、单训练采样率下的可比精度与更宽的适用网格，支持进一步研究算子学习与物理先验结合，但待验证的是规模、电路广度与实时性。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=2)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=3)

[![原文数学表达区域 11，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/383b887059bf/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf#page=5)

另有 40 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
