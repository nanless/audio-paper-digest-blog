---
title: "CONVEX DESIGN OF HIGHER ORDER ALLPASS TRANSFORMED DCT FILTER BANKS WITH PERFECT AND NEAR-PERFECT RECONSTRUCTION"
date: 2026-09-13
draft: false
description: "针对高阶全通变换 DCT 分析合成滤波器组相位与混叠失真难以同时补偿的问题，论文用凸最小二乘直接求解 FIR 合成子滤波器系数，以完全重建设计实现全局最优，并以混叠受限的近完全重建设计换取更好的合成滤波器频率选择性。"
tags: ["信号处理", "高效推理", "语音", "音频编码"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0002756"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "7ffd0284e1c5cc2ad75223a1b52d51170344dc108564f416325e804f26ecb2c5"
paper_digest_api_reader_plan_sha256: "f7738d3d4edd04f416ba3fdb38f74923f7289c22692053ea64158c5752be822c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "800d7a4b86558f45a52e83a8944cf9adc57a094c51bfc3a58ef7401001fee557"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "10981ad28c2756933146d4ecf89576d6daafa59bcdd11bff5b5d6b7741a63cea"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "1b4edc1df89f8458e6f7a9e42f6552d779a807d61ba051beee17ad39d4f2c6d4"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "e03d9c18f675cfc3cb776a3d7d2aecab4380a76da701146919b6ad6af6c3691f"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-coding","label":"音频编码"}]
paper_digest_primary_task: "音频编码"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 高阶全通 warping 下 DCT 合成滤波器为何能用凸最小二乘做到完全重建

> 英文题目：*CONVEX DESIGN OF HIGHER ORDER ALLPASS TRANSFORMED DCT FILTER BANKS WITH PERFECT AND NEAR-PERFECT RECONSTRUCTION*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0002756`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf)

标签：#信号处理 #高效推理 #语音 #音频编码

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Löllmann, Heinrich：机构信息未能从会议 PDF 纯文本可靠映射
- Kaup, André：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文处理非均匀DCT分析-综合滤波器组的重建问题，输入为经高阶全通变换与过采样抽取的子带信号，输出为重建全带信号，难点在于全通引入的附加相位失真与混叠难以仅靠综合原型自由度同时消除。先用多相网络刻画加窗调制与全通链结构，将分析综合关系表示为线性周期时变系统的传输与混叠分量，为后续约束提供显式矩阵形式。接着把综合滤波器表示为余弦调制矩阵与有限冲激响应子滤波器系数向量的线性函数，使上一阶段的频域传输条件转化为关于系数向量的线性方程。然后在频点采样上构建混叠消除与线性传输矩阵方程，分别用无约束最小二乘求解完全重建或用混叠能量阈值约束求解近似完全重建，形成可全局求解的凸二次规划链条。与逐通道抽取加解析相位均衡器的已有方案相比，该机制将综合设计统一为凸优化并显式控制混叠能量与频率选择性折中，其实测意义在于保留多相高效实现的同时获得实值子带的听觉滤波器组。原文未提供可核对的关键定量结果。结论的适用边界仅限所展示的过采样扭曲配置，向临界采样、复调制或实时听觉系统的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么需要非均匀时频划分？

本文的输入是时域信号 X(z)，经过分析滤波器组分解为多个子带信号，输出是合成滤波器组重建的信号 Y(z)。目标读者可以先把整个系统想象成一条流水线：输入信号先被 M 个分析滤波器切成不同频率片，每片降采样后得到子带信号，再在合成端上采样、滤波并相加，期望得到原信号的一个延迟版本。

论文处理的是语音与音频等需要非均匀时频分辨率的任务。均匀滤波器组把频率轴等宽切分，高频和低频占用同样带宽，而听觉感知在低频需要更细的频率分辨、在高频需要更好的时间分辨。原文在引言中把这种需求与图像视频压缩、语音音频处理联系起来，并提到学习式系统如 ConvTasNet 的编码器也会呈现类似听觉滤波器组的非均匀结构。因此任务不是简单地把声音丢给一个通用变换，而是要构造一个频率刻度可弯折、子带信号为实值、延迟较低的分析合成滤波器组。

本次解读的输入是论文正文证据与官方原图信息，目标是让研究生能复述方法与实验条件。必须保留的信息包括分析合成结构、调制方式、降采样关系、高阶全通参数、合成子滤波器形式、完全重建与近完全重建两种凸最小二乘设计、以及 M 等于 8 的验证配置。输出是 1 篇按学习依赖展开的技术解读，不评价论文档次，不引入证据之外的性能断言。没有收到任何 Figure 像素，因此下文只依据图注与正文文字归因引用图的内容，不描述坐标轴颜色曲线位置。

### 已有路线为什么不够：树结构、子带合并与合成端相位均衡的局限在哪里？

理解新设计之前需要先定位 3 条相关路线。第一条是树结构滤波器组与小波，它们能实现非均匀划分和实值子带与临界采样，适合信源编码，但原文明确指出其延迟随级数指数增长。这是低延迟语音处理难以接受的代价。

第二条是把均匀离散余弦变换滤波器组的子带滤波器直接合并，例如把相邻子带拼成更宽的子带。这种做法实现简单，但原文指出它降低频率分辨率的同时没有改善时间分辨率，没有真正改变时频铺砌的形态。

第 3 条是全通变换离散余弦变换滤波器组，把延迟单元替换为全通滤波器，从而弯折频率轴并保留多相高效实现。难点转移到合成端：全通变换给分析端带来附加相位与混叠失真，合成端必须同时补偿。原文回顾指出，已有合成端相位均衡器可以用解析闭式求解，但不补偿混叠；若对每个通道采用各自的降采样率，则分析与合成不能在低速率上运行，计算复杂度很高。论文强调，据作者所知，不存在针对这种全通变换离散余弦变换分析合成滤波器组的完全混叠消除乃至完全重建设计。

**凸最小二乘误差优化 × 相位均衡器：** 相位均衡器负责用解析闭式补偿全通引入的相位，但原文指出它不补偿混叠；凸最小二乘误差优化负责把合成系数向量 p 的求解写成无约束或 2 次约束的 2 次规划，直接最小化重建误差并保证全局最优。搭配比较的意义是前者是已有高阶全通离散余弦变换设计的参照做法，对应论文实验中无约束近完全重建的情形，后者是本文用数值优化同时处理相位与混叠的新路线。

另一条对照是全通变换离散傅里叶变换滤波器组的设计。原文指出二者看似接近，但复调制与余弦调制的混叠消除机制不同，把离散傅里叶变换的合成设计直接搬到离散余弦变换上会导致合成滤波器频率选择性较差。这正是本文要解决的迁移问题：把全通变换离散傅里叶变换滤波器组的设计思想成功扩展到全通变换离散余弦变换滤波器组，并分别给出近完全重建与完全重建的新设计。

### 要解决的具体问题是什么，什么算成功？

具体问题可以表述为：在给定高阶全通变换后的离散余弦变换分析滤波器组、多相实现结构和非临界降采样的条件下，如何确定有限冲激响应合成滤波器组的系数，使重建误差最小，并在需要时严格达到完全重建。

成功的判定在论文中有两层。第一层是重建意义上的成功：总体传输函数接近纯延迟，混叠失真被消除或压到阈值以下。论文用总体传输函数幅度与峰值混叠失真来评估。第二层是滤波器形态意义上的成功：合成滤波器应具有明显的带通特性，其频率选择性应接近分析滤波器，而不是为了压重建误差而变得平坦无选择性。

举一个教学用的例子帮助理解，但例子中的数值仅为示意，不代表论文结果：假设某个子带分析滤波器只通过某段频率，若合成端对应滤波器泄漏严重，即使总体相加后幅度接近平坦，单个子带信号也失去物理意义，后续若要对子带做增强或编码就会受影响。因此论文同时关心总体重建误差和单个合成滤波器的带通形状，这解释了为什么后文要在完全重建与近完全重建之间做权衡。

### 方法全景：沿一个样本走完输入到输出

先沿信号走一遍主路径。输入信号进入全通变换后的分析滤波器组，每个分析滤波器由原型低通 h[n] 经余弦调制并把其中的延迟替换为高阶全通链得到。分析多相网络先经过全通部分，再经过余弦调制矩阵，最后降采样得到 M 个子带信号。论文的验证配置取 M 等于 8，降采样因子 R 等于 2，满足 2M 除以 R 为整数的要求，因此分析端除全通部分工作在输入采样率外，其余运算在低速率上执行。

子带信号送入合成端，先上采样，再经过合成多相网络。合成滤波器由合成原型 g[n] 经余弦调制并级联有限冲激响应子滤波器 Qn(z) 构成。子滤波器是本设计真正优化的变量，论文把所有子滤波器系数拼成一个长向量 p。合成多相网络中只有子滤波器工作在输入采样率，其余运算在低速率上执行，这与分析端对称。最后各支路相加得到重建输出。

从失真角度看，整个分析合成系统是线性周期时变系统，周期为 R。论文用移位的单位冲激作为输入来定义总体传输函数，把输出分解为线性传输函数 Tlin(z) 与混叠传输函数 Dalias(z) 之和。设计目标就是让线性部分等于纯延迟，让混叠部分为零或足够小。完全重建设计把两者同时压向理想值，近完全重建设计则允许混叠保留在阈值以下，换取更好的合成带通特性。两种设计都被写成凸最小二乘或带 2 次约束的 2 次规划，因此存在全局最优且可用多项式时间算法高效求解。

### 分析端组件：原型、调制与高阶全通各自分工是什么？

分析端有 3 个可区分的组件。第一个是有限冲激响应原型低通 h[n]，长度为 L。论文采用过采样离散余弦变换滤波器组的设定，分析与合成原型长度相同且满足 L 等于 2M 乘以正整数 l0。原型决定均匀原型的基本低通形状，后续所有子带滤波器都由它调制而来。

第二个是分析调制因子，它是余弦函数，形式与通道索引 i 和时间索引 n 有关。调制的作用是把同一个原型搬移到不同中心频率，形成 M 个均匀子带。论文给出多相表示中的调制矩阵元素，把调制与多相支路分开，便于用快速离散余弦变换实现矩阵乘法。

第 3 个是 K 阶全通变换。它把原来延迟链中的 z 的负 l 次方替换为 Lambda(z) 乘以 Theta(z) 的 l 次方，其中 Theta(z) 是 K 个 1 阶全通节的级联，每个全通系数 ak 的模小于 1。Lambda(z) 是为保证因果性所需的附加延迟。1 阶全通常用的 warping 是它的特例。阶数 K 越高，控制时频分辨率的自由度越多，例如可以在同一频率区间内让子带带宽先增大后减小，这是论文实验部分强调的 1 阶变换做不到的形态。

**全通变换 × 离散余弦变换滤波器组：** 全通变换负责把均匀滤波器的延迟单元替换为全通链，从而把均匀频率刻度弯折为非均匀时频分辨率；离散余弦变换滤波器组负责提供实值子带信号和余弦调制的多相高效结构。二者搭配的理由是只改延迟部分就能保留多相网络和快速离散余弦变换实现，组合意义是得到低延迟、可灵活逼近听觉刻度的非均匀实值滤波器组，代价是引入需要合成端补偿的附加相位与混叠失真。

分析多相实现把全通变换后的滤波器写成 Lambda(z) 乘以各多相支路与调制系数及 Theta(z) 幂次的加权和。论文的框图含义是：只有全通滤波器工作在输入采样率，调制矩阵与降采样后的处理在低速率上执行。这是全通变换滤波器组保持高效的关键，也是后文合成端必须镜像这种结构的约束。

### 合成端组件：合成滤波器与多相子滤波器如何计算？

合成端同样由原型、调制与子滤波器三部分组成，但分工与分析端不同。合成原型 g[n] 也是长度为 L 的有限冲激响应低通，调制因子是另一组余弦系数，用于形成合成端的 M 个带通。关键新增部分是 L 个有限冲激响应子滤波器 Qn(z)，每个的阶数为 N 减 1，系数记为 qn[k]。合成滤波器的表达式是原型加权、调制加权与反序子滤波器 QL 减 1 减 n(z) 的乘积求和。

论文指出，仅靠合成原型系数 g[n] 的自由度不足以消除全通变换带来的附加失真，因此必须引入子滤波器。这种做法在全通变换离散傅里叶变换与离散余弦变换文献中都有先例。合成多相表示把合成滤波器写成合成多相支路与合成调制矩阵的组合，支路系数由 g 的样本与 Q 的多相组合构成。框图含义是：子带先上采样，只有子滤波器工作在输入采样率，其余运算在低速率上执行。均匀离散余弦变换分析合成系统是其特例，对应 Lambda(z) 等于 1、Theta(z) 等于 z 逆、Qn(z) 为纯延迟的情形。

**多相网络 × 子滤波器：** 多相网络负责把分析与合成滤波拆成并行的多相支路加余弦调制矩阵，使大部分运算能在降采样后的低速率上执行；子滤波器负责在合成端提供可优化的自由度，具体是公式中长度为 N 的有限冲激响应 Qn(z)。搭配的原因是仅靠合成原型滤波器 g[n] 的自由度不足以补偿高阶全通引入的失真，组合意义是用一组可设计的子滤波器在保持低速率运算结构的同时承担相位均衡与混叠抑制。

为便于优化，论文把合成滤波器写成矩阵形式：通道相关的行向量 wi 转置乘以与通道无关的矩阵 S(z) 再乘以系数向量 p。其中 p 是所有子滤波器系数的拼接，S(z) 由单位矩阵与延迟向量经 Kronecker 积构成。这种写法把与优化变量 p 有关的部分线性分离出来，使总体传输函数对 p 是线性的，从而可以直接写出最小二乘矩阵。

### 没有神经网络训练时，凸最小二乘在求解什么？

本研究没有神经网络训练阶段，没有梯度反传、没有可学习权重更新、没有训练集划分。本节的计算过程是数值优化求解合成系数，不是模型训练，不能把无训练等同于解析闭式确定性求解，也不能从参数冻结推定系统输出确定。真实计算是构造线性方程组并求解凸 2 次规划。

第一个求解是完全重建设计。论文把完全重建条件写成矩阵方程 TR(z) 乘以 p 等于纯延迟向量，要求对所有周期移位成立。然后在单位圆上取 N 个离散频率点 z 等于 WN 的 n 次方，把方程堆叠成大矩阵 D[N] 与右端向量 b[N]，求解无约束最小二乘问题，即最小化 D[N] 乘以 p 减 b[N] 的二范数平方。论文指出该设计瞄准完全重建，但不显式保证合成滤波器的高频率选择性。

**完全重建 × 近完全重建：** 完全重建要求总体传输函数等于纯延迟且混叠传输函数为零，不允许线性失真和混叠残留；近完全重建允许用混叠阈值松弛完全混叠消除条件，转而最小化线性失真以获得更好的带通选择性。二者搭配的理由是有限滤波器长度下两种失真难以同时压到最低，组合意义是论文给出同一凸框架下的两个工作点，让应用按能否容忍小重建误差来选择严格重建或更好频率选择性。

第二个求解是近完全重建设计。论文先把完全混叠消除条件改写为差分形式，要求不同周期移位的传输函数相等，并堆叠成差分矩阵 TDelta。若该条件成立，总体传输函数退化为线性部分。进一步把线性部分等于纯延迟的条件写成与原型卷积有关的形式，并用 Hadamard 积表示成矩阵 U(z)。同样在 N 个频率点上采样后，得到矩阵 U[N] 与向量 v[N]，以及差分矩阵 TDelta[N]。近完全重建设计是最小化线性误差的同时约束混叠误差的二范数不超过阈值 epsilon_a，即带 2 次约束的最小二乘问题。

**线性失真 × 混叠失真：** 线性失真指期望的线性传输函数 Tlin(z) 偏离纯延迟 z-d0 的程度，决定总体幅度与相位是否平坦；混叠失真指降采样与上采样引入的 r 不等于 0 的旁瓣项 Dalias(z)，决定不同子带泄漏造成的重建误差。搭配的原因是分析合成滤波器组输出同时包含这两部分，必须分别建模才能分别约束，组合意义是论文把混叠消除写成差分矩阵约束、把线性失真写成最小二乘目标，从而在凸优化中明确分工。

论文明确指出，这两个问题都是凸优化中的 2 次规划，提供全局最优且可在弱多项式时间内高效求解。需要补的缺项是具体求解器名称与运行时间在证据中未报告，因此复现时可选用任意可靠的凸 2 次规划求解器，但不应声称论文指定了某种求解器。论文还提到未来可通过最小化或约束系数向量 p 的稀疏性来引入低复杂度目标，但这只是展望，没有给出实现与结果。

### 实验条件：用什么滤波器组、什么参数、怎么评估？

评估用的是过采样全通多相离散余弦变换分析合成滤波器组，子带数与降采样因子固定，目的是在同一条件下比较完全重建与 3 种混叠阈值的近完全重建设计。公平条件是所有合成设计共用同一分析滤波器组、同一原型、同一子滤波器阶数与同一总体延迟，只有优化目标中的混叠约束不同。指标方向是总体传输函数幅度越接近 0 分贝越好，峰值混叠失真越小越好，同时合成滤波器幅度应呈现与分析滤波器相似的带通形状。

下表整理论文明确给出的可复现配置，比较问题是新设计在什么具体参数下被验证，公平条件是同一分析 warping 与同一合成自由度。表后解释其含义与复现要点。

| 配置项 | 参数名 | 取值一 | 取值二 | 说明 |
| --- | --- | --- | --- | --- |
| 分析合成规模 | 子带数 M 与降采样 R | M 等于 8 | R 等于 2 | 过采样多相结构 |
| 全通变换 | 阶数 K 与系数 | K 等于 2 | a1 等于负 0.5，a2 等于 0.5 | 实值高阶 warping |
| 合成自由度与延迟 | 子滤波器阶数 N 与延迟 d0 | N 等于 55 | d0 等于 51 | 所有设计共用 |
| 原型长度关系 | L 与 M 关系 | L 等于 2M | l0 为正整数 | 满足线性失真条件基础 |
| 设计对照 | 重建类型与阈值 | 完全重建 | 近完全重建阈值取 0、0.01、无穷 | 同一分析下的对照 |

上表把分散在正文中的参数集中呈现，便于复现时一次性核对。关键代价是子滤波器阶数 N 等于 55 并不小，意味着合成端子滤波器较长；总体延迟 d0 等于 51 是重建允许的延迟，复现时必须取相同延迟才能比较重建误差。未胜出项的边界在后文展开，但此处需先说明论文只评估了一种参数组合，并明确写出差异在其他设计参数下也可观察到，但没有给出多组扫描数据，因此不能把该组结论推广为所有 warping 系数下成立。

| 评估对象 | 指标名称 | 被评估设计 | 对照设计 | 指标方向 |
| --- | --- | --- | --- | --- |
| 总体线性部分 | 总体传输函数幅度 | 完全重建设计 | 3 种近完全重建设计 | 越平坦越好 |
| 混叠残留 | 峰值混叠失真 | 无约束近完全重建 | 阈值受限与完全重建 | 越小越好 |
| 单滤波器形态 | 合成低通幅度 | 所有 4 种设计 | 分析滤波器形状 | 越接近分析端越好 |
| warping 效果 | 分析滤波器带宽变化 | 2 阶全通 | 1 阶全通隐含对照 | 能实现先宽后窄 |
| 收敛趋势 | 随 N 增大变化 | 近完全重建 | 完全重建 | 趋向完全重建 |

上表说明论文的评估不是单一数字比较，而是重建误差与滤波器形态的联合检查。复现时应同时绘制合成低通幅度、总体传输函数幅度与峰值混叠失真 3 组曲线，缺任何一组都会误判。例如只看总体幅度会偏向无约束设计，只看混叠会偏向完全重建设计。论文对重建误差的定义来自总体传输函数的分解式，峰值混叠失真由该分解式导出，方向是越小越好。硬件与求解时间预算在证据中未报告，这是具体缺项。

### 主结果：四种设计在重建误差与频率选择性上如何取舍？

主结果围绕 4 种合成设计展开：一种完全重建设计与 3 种近完全重建设计，阈值分别取 0、0.01 与无穷大。比较问题是在同一分析 warping 下，哪种设计在重建误差上最干净，哪种在合成频率选择性上最好，代价各是什么。公平条件是共用分析滤波器、原型、子滤波器长度与延迟，指标方向是总体幅度平坦为好、混叠峰值为小好、合成带通形状接近分析端为好。

论文报告，分析滤波器在 2 阶全通下带宽在 0 到 pi 区间内先增后减，这是高阶 warping 灵活性的直接体现。所有 4 种设计的合成滤波器幅度都类似于分析滤波器，论文为清晰起见只展示合成低通。这意味着新设计隐式地获得了明显的频率选择性，不需要像离散傅里叶变换设计那样额外加入带通约束。完全重建设计没有可察觉的重建误差，但其合成滤波器的频率选择性在所有设计中最弱。

无约束近完全重建在所有近完全重建中总体传输误差最小、频率选择性最好，但混叠失真最高。论文指出无约束情形对应于用子滤波器做相位均衡器的闭式设计，可视为已有参照系统。把阈值收紧到 0 可以实现完全混叠消除，但会轻微增大线性失真并降低合成频率选择性。

下表把论文文字报告的定性排序整理为可核对的对照，表中不编造分贝数，只保留原文明确的方向判断，数字证据见绑定原文。

| 设计 | 总体传输误差 | 峰值混叠 | 合成频率选择性 | 论文对应描述 |
| --- | --- | --- | --- | --- |
| 完全重建 | 无明显误差 | 受控为零目标 | 4 种中最弱 | 无明显重建误差但选择性最低 |
| 近完全重建阈值为 0 | 轻微增大 | 完全消除 | 有所降低 | 混叠消除但线性失真略增 |
| 近完全重建阈值为 0.01 | 居中 | 受限 | 居中 | 控制混叠的折中 |
| 近完全重建无约束 | 4 种近完全中最小 | 最高 | 最好 | 选择性最好但混叠最高 |

上表的主要收益是把取舍讲清楚：若应用不容忍重建误差，应选完全重建或阈值为 0 的设计；若应用可容忍小误差且更看重子带处理所需的带通形状，应选阈值宽松的近完全重建。具体代价是选择性与重建精度不能兼得，有限长度 N 下压一端会抬起另一端。未胜出项是完全重建设计的频率选择性，它在该维度上输给所有近完全重建设计，这是论文明确承认的代价，不是复现失误。

论文还报告，随滤波器长度 N 增大，所有设计的合成幅度都趋近分析幅度，且近完全重建趋向完全重建，这支持用复杂度与延迟换重建精度的判断，但证据中没有给出 N 扫描曲线数值，因此只能表述为趋势，不能量化每增加 1 阶带来多少分贝改善。

### 关键对照：混叠阈值与滤波器长度改变了什么？

论文没有神经网络消融实验，这里的对照是设计参数对照。第一个对照是混叠阈值 epsilon_a 的作用。比较问题是阈值从无穷大收紧到 0.01 再到 0 时，两类失真如何移动。条件一致性是同一分析 warping 与同一 N 与 d0。论文显示，无约束对应纯相位均衡，线性误差最小但混叠最高。

阈值收紧后混叠被压住，线性误差与选择性付出代价；阈值取 0 实现完全混叠消除。这构成一个单调的权衡链，支持阈值是控制旋钮的判断。限制是论文只报告 3 个离散阈值，没有给出阈值连续扫描曲线，因此不能推断中间阈值的精确形态。

第二个对照是子滤波器长度 N 的趋势。论文报告，随 N 增大，合成滤波器幅度趋近分析滤波器，近完全重建趋向完全重建。这意味着若延迟与计算预算允许增大 N，可以同时改善选择性与重建，但代价是合成子滤波器更长、延迟与运算量上升。证据中没有给出不同 N 下的具体误差数值，因此该节只能讲趋势，不能列出数字表。

第 3 个隐含对照是把离散傅里叶变换合成设计直接用于离散余弦变换的失败条件。论文指出这种直接迁移会导致合成频率选择性较差，这构成反证：余弦调制与复调制的混叠消除机制不同，必须按离散余弦变换重新推导差分约束与线性矩阵。这也解释了为什么论文要把全通变换离散傅里叶变换的设计思想扩展而不是直接套用。

### 边界与未验证事项：哪些结论不能推广？

首先是评估范围的边界。论文明确只评估一种配置，即 M 等于 8、R 等于 2、2 阶全通系数取负 0.5 与 0.5、N 等于 55、d0 等于 51。虽然正文写出差异在其他设计参数下也可观察到，但没有提供多组参数的数值，因此不能把该组下的排序推广为所有 warping 系数、子带数或降采样因子下成立。复现时若改变任一参数，应重新求解并重新绘制 3 组曲线，而不是沿用本文的排序结论。

其次是比较范围的边界。论文明确写出，与多种其他类型非均匀离散余弦变换分析合成系统的全面比较超出范围，且它们难以实现相同或相似的时频分辨率。这意味着本文的优劣只在论文定义的分析合成结构内成立，不构成对树结构或子带合并等其他非均匀方案的同条件胜负判断。相关性不等于因果，趋势不等于每组都成立。

再次是未测量的量。证据中没有报告求解器运行时间、内存占用、实时延迟分解、误判率或听感评价，也没有代码与数据可用性声明。资源状态证据明确为无绑定资源，因此不得声称代码已公开或系统可直接运行。未测量延迟与成本时，不能承诺这些量得到改善。训练资源、推理开销、输出帧率与实际延迟应分别讨论，而本文只给出总体信号延迟 d0，没有给出每模块的时钟周期或帧率。

最后是理论缺项。线性失真条件中原型取相等时合成幅度等于分析幅度的证明因篇幅省略，复现时只能按论文给出的原型公式与长度关系使用，不能自行补证明步骤。稀疏性约束的低复杂度扩展只是未来工作，没有验证结果。

### 复现先做什么：按什么顺序核对才能重放结果？

复现的第一步是重建分析端。按论文设定原型长度关系与原型公式生成 h[n] 与 g[n]，取 M 等于 8、R 等于 2，构造 2 阶全通链并验证分析滤波器带宽在 0 到 pi 内先增后减。若这一步形态不对，后续合成优化无从谈起，应先检查全通系数符号与 Lambda(z) 的因果延迟是否正确实现。

第二步是构造优化矩阵。在单位圆上取 N 个频率点，对完全重建堆叠 TR 矩阵与右端延迟向量，对近完全重建分别堆叠差分矩阵与线性矩阵 U。注意周期时变系统的移位只需考虑 nu 从 0 到 R 减 1，因为 WR 的幂具有周期性。把所有子滤波器系数拼成向量 p 后，两种设计分别对应无约束最小二乘与带 2 次约束的最小二乘。求解器可自选，但应记录求解器、容差与迭代次数以保证可比性。

第三步是评估 3 组曲线。按论文分解式计算总体传输函数幅度与峰值混叠失真，并绘制合成低通幅度与分析幅度对照。只有 3 组同时符合论文描述才能判定复现成功：完全重建无明显误差但选择性最弱，无约束选择性最好但混叠最高，阈值为 0 实现混叠消除但线性误差略增。若只复现其中一组，不能声称复现全文。

何时值得尝试这种方法：当应用需要实值子带、低延迟多相实现、可调非均匀分辨率且能接受数值优化设计成本时值得尝试；当应用必须临界采样做信源编码，或要求解析闭式与极低设计成本时，应优先考虑树结构或纯相位均衡器，并接受混叠残留。还需补的验证是多组 warping 系数下的阈值扫描、不同 N 下的误差量化、以及求解时间与实时开销的测量。

### 收束：如何一句话记住两种设计的分工？

记住两句话即可：完全重建设计用无约束凸最小二乘把线性和混叠误差一起压向零，得到全局最优但合成选择性最弱；近完全重建设计用混叠阈值松开严格消除要求，把优化火力集中到线性失真上，从而隐式获得接近分析端的带通形状。

这种分工的适用条件是有限滤波器长度下的权衡。若长度 N 可以不断增大，论文报告近完全重建会趋向完全重建，说明复杂度与延迟可以换精度。若长度固定，则必须按应用能否容忍小重建误差来选工作点。论文特有的误解需要澄清：高阶全通不是简单地让 warping 更强，而是在同一频率区间内实现 1 阶做不到的带宽起伏；合成子滤波器不是后处理均衡器，而是合成多相网络中决定重建性质的核心自由度；把离散傅里叶变换设计直接搬过来不会自动变好，因为余弦调制的混叠消除需要重新推导。

最终复述方法时应按输入到输出的顺序：分析原型加余弦调制加高阶全通得到非均匀分析端，合成原型加余弦调制加可优化子滤波器构成合成端，总体传输分解为线性与混叠两部分，两种凸最小二乘分别对应严格重建与阈值松弛，实验在 M 等于 8 的配置下验证取舍。这条链条中的每个环节都有原文依据，没有引入外部数值或效果断言。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=1)

[![原文数学表达区域 3，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=1)

[![原文数学表达区域 4，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=1)

[![原文数学表达区域 5，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=1)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 16，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 17，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 18，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 19，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 20，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-20.png)

区域 20 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 21，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-21.png)

区域 21 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 22，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-22.png)

区域 22 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 23，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-23.png)

区域 23 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 24，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-24.png)

区域 24 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 25，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-25.png)

区域 25 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 26，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-26.png)

区域 26 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=2)

[![原文数学表达区域 27，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-27.png)

区域 27 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=3)

[![原文数学表达区域 28，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-28.png)

区域 28 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=3)

[![原文数学表达区域 29，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-29.png)

区域 29 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=3)

[![原文数学表达区域 30，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-30.png)

区域 30 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=3)

[![原文数学表达区域 31，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-31.png)

区域 31 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=3)

[![原文数学表达区域 32，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/977f23039546/figure-32.png)

区域 32 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf#page=3)

另有 52 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
