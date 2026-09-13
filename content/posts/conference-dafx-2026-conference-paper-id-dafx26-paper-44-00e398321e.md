---
title: "Exploring Parallelism and Energy Efficiency in a Multistage Linear-Phase Octave Filter Bank"
date: 2026-09-13
draft: false
description: "该文不改滤波器设计，只把拉伸有限冲激响应级联做成块流加环形状态的串行基线，再用开放多处理任务流水线并行，在英伟达 Jetson Orin Nano 上以串行超每秒 118 万采样、6 线程加速超 4.5 倍为证据，代价是最小能耗点不在最高性能点。"
tags: ["信号处理", "高效推理", "端侧运行", "音频分离"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_44"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "bcb7ccd40066c18bb7ff53909b19769003b0b5035661c88234154bb6494ccf89"
paper_digest_api_reader_plan_sha256: "cd2f7e61c98fdfba557c2ae739aa64b1269426e55334319026f28d0f7daaa837"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "55641f28de7091b0e937def4ed183c160c83ec82d918d1ce53ab59283f9e9dd6"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d9c075a4768e6b613949bcecd1baec9b3a2b5623ef2531a3e2a1ce3dfea96948"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "10be807c630a6f7a652776b7d0d7628a0eb10bc0fe159f3a7db1627ac3497dac"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7f95fa5318b7d185875c17d602610f78ae5b9fea54f9d8d175238a21e44d3790"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"},{"facet":"task","id":"task.audio-separation","label":"音频分离"}]
paper_digest_primary_task: "音频分离"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 级联不拆相位、并行不抢状态：多级线性相位八度滤波器组的吞吐与能耗折中

> 英文题目：*Exploring Parallelism and Energy Efficiency in a Multistage Linear-Phase Octave Filter Bank*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_44`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf)

标签：#信号处理 #高效推理 #端侧运行 #音频分离

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Jose M. Badia：机构信息未能从会议 PDF 纯文本可靠映射
- Jose A. Belloch：机构信息未能从会议 PDF 纯文本可靠映射
- Vesa Välimäki：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文面向边缘片上系统块式音频均衡，输入为分块流入的音频流，输出为经十个八度子带增益加权后对齐叠加的线性相位信号，难点在于拉伸原型滤波的跨块状态依赖、互补支路对齐延迟与片上内存搬运开销。方法第一步以紧凑环形状态实现拉伸半带原型滤波，按块乒乓复用两块缓冲并在块间传递延迟行，避免物化零插值系数。方法第二步将级与块交叉组织为OpenMP任务流水线，以级间数据流依赖保证级联顺序并以状态令牌保护级内可变状态，使多块同时处于不同级。方法第三步采用线程本地累加与分段归约完成全局输出累加，消除多任务对同一输出的竞争。与直接长有限冲激响应或快速傅里叶变换卷积相比，关键差异在于用内插有限冲激响应结构加索引对齐累加替代全长延迟子带存储，并用显式任务依赖替代细粒度同步，其实质意义是把算术量转化为可控的数据局部性与可扩展流水。在Jetson Orin Nano能量性能评测设置下，单核顺序版本的能量指标为0.43 mJ，低于六核并行版本的能量指标0.5 mJ。结论适用边界受限于可容忍固定群延迟的块式内核，不适用于超低延迟监听与回调级调度，其顺序基线吞吐超过118万样本每秒而六线程流水线加速比超过4.5。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文交付什么？

本文的输入是一段待做倍频程谱整形的单通道音频采样序列，目标是在边缘片上系统中央处理器上高效算出线性相位八度滤波器组的输出。同时要讲清吞吐与能耗如何随块大小、线程数和频率变化。

必须保留的信息有三点。第一，滤波器设计本身来自已有工作，本文不改设计，只研究实现。第二，评价对象是操作预分配缓冲的分块滤波内核，不是完整音频回调或插件宿主。第三，资源状态为本次未能确认可达，因此不写代码已公开或可下载，只按正文描述复述方法与实验条件。

输出是一套可核对的实现路径：先做缓存友好的串行分块调度，再在其上做任务级流水线并行，最后在固定频率下测量时间、功率和能量。研究生复述时要能说出样本从哪进、状态在哪留、对齐累加在哪做、并行任务之间靠什么依赖保序。

本文面向刚进入语音音乐音频的研究生，白话先行。所谓线性相位，就是不同频率成分经过滤波后延迟相同，叠加回去不引入相位染色。所谓八度滤波器组，就是把频谱按倍频程切成多个子带，每个子带可独立加增益再叠加。所谓边缘片上系统，就是中央处理器、图形处理器、内存挤在一块板上的嵌入式平台，算力较强但受功耗和访存限制。

### 同任务同目标的已有路线有何不同？

先看同输入同目标的均衡路线。经典有限冲激响应直接实现能保相位，但要么阶数很高，要么依赖快速傅里叶变换卷积。改目标响应时代价大、延迟也大。布鲁斯基等人的内插有限冲激响应八度均衡结构用半带原型低通及其拉伸版本加互补支路构造倍频程分解。

该结构算术量远小于直接长滤波器，延迟也小于快速傅里叶变换方案。后续还有把最低带换成无限冲激响应搁架滤波的混合扩展，以准线性相位换更低延迟。本文明确保留全线性相位多级设计，不做此类结构改动。

再看同运行阶段的并行实现路线。已有工作在异构平台、嵌入式 4 核平台和多通道并行均衡上探索过跨滤波器、跨通道或跨部件的粗粒度并行，也报告过吞吐与能量折中。本文面对的是级联相关、每级有状态的线性相位级联，因此不能直接照搬按通道分任务的做法。

第三看访存与平台映射路线。稀疏卷积和汽车音频芯片组的研究都指出，嵌入式音频性能不能只看乘加次数，缓存、数据布局和硬件映射同样关键。本文的串行优化正是沿这条路线：不物化补零后的拉伸系数，用紧凑环形状态加块内连续缓冲减少数据搬运。

### 级联滤波器组为何难并行、难省电？

困难先来自语义。每 1 级的低通输出要送下 1 级，每 1 级的高通带要用本级延迟输入减本级低通得到。所有子带还要按同步偏移对齐后才能相加。延迟值必须在当前采样写入状态前读出，否则互补分裂的流语义就错了。

若把块顺序打乱或把同级状态并发写，就会读到未来或被覆盖的历史。困难再来自多核映射。块太小则任务创建、依赖管理、调度和归约开销盖过有用计算。块太大则块数变少，流水线填不满，深度等于级数的流水线长期处于填充和排空阶段。

线程数增加还会放大调度压力和线程局部输出归约代价。频率与核数同时影响时间和功率，降频省功率但拉长时间，动态调压调频下的能量曲面可能非单调。

因此本文把问题拆成两步回答。第一步，能否写出与数学行为一致、但访存更友好的串行分块基线。第二步，能否在该基线上定义 1 级一包的任务图，用显式依赖保住级间顺序和级内状态顺序，同时用线程局部输出避免热路径同步。

### 方法全景：一个采样如何走完全程？

沿一个采样走一遍有助于建立全局图。输入采样先进入第零级的历史状态，当前级用拉伸低通算出低通输出。用进入前读到的延迟输入减低通得到本级频带贡献，按该级同步偏移算出对齐输出下标并乘增益累加到输出。

低通输出则作为下 1 级的输入继续向下走。最后 1 级的残余低通也按同样对齐规则累加。这样全部分支在最终求和点时间对齐，线性相位得以保持。

实现上串行版本把上述逐采样过程按块组织。外层按块推进，内层按级推进，最内层按块内采样推进，用两个长度为块大小的乒乓缓冲在级间传递低通块。并行版本保留同样的三重循环概念结构，但把 1 级一包映射为可并发任务。

多个块同时处在不同级，输出侧不再直接写全局数组，而是先写线程私有累加，再由归约任务按输出段刷回。下面先看总体框图导读，再进入组件细节，该导读有助于定位级联与对齐求和的位置。

> **看图路径：** 1. 先从左侧输入沿低通链向下追踪每一级分出的高通支路走向；2. 再看右侧每条支路增益符号与同步偏移标注如何随级数变化；3. 最后确认最下一条残余低通与上一条高通在同一对齐位置汇合

[![原论文 Figure 1：Block diagram of the multistage linear-phase octave filter bank with Nf = 9 stages, yielding 10…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/dd5fe38bedd1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/dd5fe38bedd1/figure-1.png)

*论文图 1。原论文 Figure 1：“Block diagram of the multistage linear-phase octave filter bank with Nf = 9 stages, yielding 10 frequency bands.”。*

该框图显示 9 级级联得到 10 个频带，每级标出低通分支与高通分支的分叉。右侧给出每条支路的增益符号与同步偏移数值，最下 1 级残余低通的偏移为零。像素可见左侧输入逐级下探，右侧多路对齐累加形成垂直求和链。由此可确认并行化对象是纵向级联加横向对齐求和。

### 串行基线做了哪些缓存友好动作？

串行基线的第一个动作是不物化拉伸滤波器。拉伸只是改变取历史采样的步长，每输出采样仍只需原型抽头数的乘加次数，不必把补零后的长系数存出来。第二个动作是为每级维护紧凑环形状态，新采样到来时推进写指针取模写入。

第三个动作是用两个块缓冲乒乓传递级间低通块，使中间数据在块内连续，提高缓存驻留。第四个动作是直接对齐累加，不存全长延迟子带信号，而是把输出下标平移后累加。关键顺序必须复述准确。

最内层对每个块内采样先读延迟值，再算拉伸低通并写入下 1 级缓冲，最后做对齐输出累加。分块遍历只改变执行顺序和中间数据局部性，不改变滤波器组数学行为。

**拉伸有限冲激响应 × 互补支路：** 拉伸有限冲激响应负责用同一原型低通抽头以步长取样实现越来越窄的低通，互补支路负责用延迟输入减低通得到对应高通带；二者搭配的理由是只存一套原型系数即可得到倍频程划分，组合意义是每级同时产出本级频带和送往下 1 级的更窄低通，且全程保持线性相位。

**分块流调度 × 环形状态：** 分块流调度负责把长输入切成固定块并按块推进级联以改善局部性，环形状态负责为每级保存流式所需的历史采样并用写指针取模更新；二者搭配的理由是块推进需要跨块记忆而不能每块清零，组合意义是中间信号不必存成全长数组，只保留紧凑状态加块缓冲即可复现数学行为。

下面观察并行流水线的时间组织导读，这一步为理解块如何在不同级之间错开在飞做好准备，重点看填充与稳态的划分。

> **看图路径：** 1. 先看顶行从输入经装载、各级滤波到归约输出的主流水方向；2. 再按时间行观察同一块如何逐级向右推进、不同块如何错开在飞；3. 最后确认首个归约输出要在首块走完最后一级后才出现

[![原论文 Figure 2：Timing diagram of the initial steps of the task-parallel pipeline for a multistage filter (Nf = 9…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/dd5fe38bedd1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/dd5fe38bedd1/figure-2.png)

*论文图 2。原论文 Figure 2：“Timing diagram of the initial steps of the task-parallel pipeline for a multistage filter (Nf = 9 stages).”。*

该时序图顶部给出从输入经装载、各级滤波到归约输出的主路径，时间向下推进。像素可见装载任务每步注入一个新块，级块任务沿对角线向右下推进。首块走完最后 1 级后才出现首个归约输出，之后多块同时在飞。这正好对应填充阶段与稳态阶段的划分。

### 任务图如何保序又避免热路径同步？

任务图有 3 类任务。装载任务把输入块搬进滑动窗口，级块任务对一块做 1 级滤波并把低通块递交给下 1 级。归约任务把线程局部贡献合并到全局输出的对应时间段。开放多处理结构是单个线程入队任务、所有线程执行任务。

正文强调并行思想不限于该运行时，其他用依赖计数、队列或期值的线程池也可实现同样数据流。依赖分两类。级间数据流保证同块的下 1 级在上 1 级产出该块输出后才启动。级内状态令牌保证同级的连续块串行访问该级状态。

归约任务在该块走完最后 1 级后才释放，保证该输出段所需贡献已就绪。滑动窗口按二的幂取大以支持位掩码取模，且窗口要能容纳最大同时在飞块数，防止下游未消费数据被覆盖。

**级间依赖 × 级内状态依赖：** 级间依赖负责保证同一数据块必须按级联顺序从浅级流向深级，级内状态依赖负责保证同一级的连续块按时间顺序串行更新滤波器记忆；二者搭配的理由是前者管数据可用、后者管状态正确，组合意义是不同块可以在不同级同时在飞，而同一级的历史读写不被打乱。

**线程局部累加 × 归约任务：** 线程局部累加负责让每个工作线程把对齐后的频带贡献先写进私有输出缓冲以避免输出下标冲突，归约任务负责在某输入块走完最后 1 级后再把对应输出段从各私有缓冲加回全局输出；二者搭配的理由是热路径不能加细粒度锁，组合意义是滤波任务全程无锁并行，只有段级归约做 1 次合并。

归约正确性依赖两条非负与闭包论证。对齐偏移非负，且当某输入块走完最后 1 级时，截至该块末尾的所有任务已因依赖传递闭包而完成。因此落在该输出段内的贡献已在线程局部缓冲中，未来下标的贡献留待后续段刷回。融合装载变体让第 1 级直接读输入缓冲，数值输出不变。

### 本研究训练了什么，没有训练什么？

本研究没有神经网络训练阶段，也没有学习参数更新、梯度路径、损失监督或权重重置。原型抽头、增益向量、级数、块大小、线程数和频率都是实验配置，不是可训练参数。

所谓构造过程是按给定原型和增益搭建级联滤波器组，所谓推理过程是对输入采样序列执行分块滤波与对齐累加的确定性信号处理计算。需要明确的缺项是原文未报告原型系数如何设计、增益如何选取、是否存在自适应更新。

复现时应把这些当作外部给定，不从方法名推定实现。若教学举例说明均衡效果，必须标为例子，不添加无源的频响数值或听感结论。并行部分也没有学习调度策略，任务划分、依赖声明和归约时机都是手写规则。

性能差异来自粒度、负载均衡和运行时开销，而非模型拟合。理解这一点可以避免把加速比变化误读为学习曲线，也避免把频率扫描误读为超参数优化。

### 在什么平台、用什么配置测量时间与能量？

目标平台是英伟达 Jetson Orin Nano 开发者套件，系统模块为 6 核 Arm Cortex-A78AE 中央处理器加 Ampere 级嵌入式图形处理器。内存为 8 吉字节位宽 128 位低功耗内存，理论峰值带宽每秒 68 吉字节，支持可选功耗档。

软件为 Ubuntu 20.04.5 加 JetPack 5.1.1，用 GCC 9.4.0 加高优化与本地架构选项编译。C 语言实现并用开放多处理 4.5 任务模型管理级联依赖。评价对象是分块滤波内核，不含音频回调调度、唤醒开销和截止期保证。

频率控制是关键条件。默认按需调频被覆盖，中央处理器频率被固定到平台暴露的 20 个离散值，从 115.2 兆赫到 1510.4 兆赫逐点测量。功率用增强版功率库以 10 赫兹采样板载传感器。

报告的中央处理器功率指动态功率，即滤波时测量功率减去同频率空闲基线，能量为平均动态功率乘执行时间，按块换算为毫焦。后续能量与时间实验统一用 2048 采样块，因其在 6 线程下加速高且能维持足够块级并发。

### 串行基线与流水线加速各达到多少？

先提出比较问题。在相同滤波语义下，缓存友好的串行基线本身吞吐如何，任务流水线在不同块大小和线程数下相对该基线的加速比如何。指标方向是吞吐越高越好、加速比大于 1 才算有效并行。公平条件是同一原型、同一增益、同一分块语义。

下面整理原文连续句覆盖的核心数字，表内单位保留原文写法，不做四舍五入。

| 条件 | 指标 | 串行基线 | 并行结果 | 比较对象 |
| --- | --- | --- | --- | --- |
| 全块大小区间 | 吞吐 | more than 1.18 M samples/s | 未单独列出 | 标准音频采样率单通道 |
| 合适大块，6 线程 | 加速比 | 1 | above 4.5× | 优化后串行基线 |
| 充分大块，3 线程 | 加速比 | 1 | approach the ideal speedup of 3 | 优化后串行基线 |

表后解释主要收益与代价。串行基线已远超单通道实时所需，说明访存优化本身价值大。3 线程在大块接近理想加速，表明级块分解在开销摊薄后负载均衡良好。6 线程最优块加速超 4.5 但低于理想 6。

代价是同级状态串行依赖与归约随线程数增长的线性开销。未胜出项是块小于 32 采样的细粒度区，并行接近或低于基线，线程越多调度与归约压力越大，加核不一定更快。

下面看加速比曲线的导读与解释，该导读先明确坐标与曲线身份，再定位阈值与大块收敛行为，便于判断有效加速区间。

> **看图路径：** 1. 先确认横轴为块大小、纵轴为相对串行基线的加速比含义；2. 再比较 3 线程与 6 线程曲线在中小块与大块区间的相对位置；3. 最后观察阈值水平线，判断何种块大小才进入有效加速区

[![原论文 Figure 3：Speedup vs. block size for the task-pipeline and fused- load variants with 3 and 6 CPU threads.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/dd5fe38bedd1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/dd5fe38bedd1/figure-3.png)

*论文图 3。原论文 Figure 3：“Speedup vs. block size for the task-pipeline and fused- load variants with 3 and 6 CPU threads. The threshold marks the sequential-baseline break-even point.”。*

该图横轴为块大小，纵轴为加速比，含原始流水线与融合装载各配 3 线程和 6 线程 4 条曲线。另有阈值水平线标记串行基线盈亏点。像素可见小块区 4 条曲线均在阈值附近或下方，大块区 3 线程线收敛到 3 附近、6 线程线爬升到 4.5 上下后趋平。这支持正文判断。

### 频率、核数与能量如何折中？

比较问题是固定频率下每 2048 采样块的处理时间、动态功率和总能量如何随频率和核数变化。指标方向是时间越小越好、功率越小越好、能量为二者乘积越小越好。公平条件是同一块大小、同一实现、同一动态功率口径。

| 条件 | 指标 | 低频端 | 高频端 | 关键折中 |
| --- | --- | --- | --- | --- |
| 串行单核，2048 采样块 | 时间 | 23.5 ms，115.2 MHz | 1.8 ms，1510.4 MHz | 13×时间下降 |
| 1 核最低频到 6 核最高频 | 动态功率 | 0.52 W | 2.39 W | 核数与频率推高瞬时功率 |
| 单核 1036.8 MHz | 能量 | 0.43 mJ，最低观测值 | 相邻频率同样低 | 最省电不在最快点 |

表后解释需结合非单调性。降频在最低三四档时间恶化最剧烈，之后改善呈收益递减。多核降低频率敏感度，6 核最高频每块最快约 0.3 毫秒。功率随频率和核数单调走高，单核在所有频率功率最低。

但能量最低点是单核 1036.8 兆赫的 0.43 毫焦，同频 6 核约 0.5 毫焦，说明省下的时间可抵消更高功率。反例是最低频双核能量峰值达 3.60 毫焦，因时间增长快于功率下降，属典型动态调压调频效应。

**吞吐 × 动态能耗：** 吞吐负责衡量单位时间能滤完多少采样，动态能耗负责衡量滤波本身多花的平均动态功率与时间的乘积；二者搭配的理由是边缘设备同时受速度和电池约束，组合意义是频率和核数同时推高功率并压低时间，能耗曲面因此非单调，最省电点不必是最快点。

下面看能量热图的导读与解释，该导读先明确热图三要素的映射关系，再引导读者定位最低与最高能量格，适合核对非单调结论。

> **看图路径：** 1. 先确认横轴为线程数、纵轴为固定中央处理器频率、格内为每块毫焦；2. 再找颜色最深的低频双核区与颜色最浅的中频单核区位置；3. 最后沿同一列上下比较，确认降频并不总是省能量

[![原论文 Figure 6：Total energy (mJ) consumed by the application in the CPU to filter each 2048-sample block as a…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/dd5fe38bedd1/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/dd5fe38bedd1/figure-6.png)

*论文图 6。原论文 Figure 6：“Total energy (mJ) consumed by the application in the CPU to filter each 2048-sample block as a function of fixed CPU frequency and number of CPU cores.”。*

该热图横轴为线程数、纵轴为中央处理器频率、格内数字为每块毫焦，右侧色条从低到高指示能量。像素可见底部低频双核格偏红数值最大，顶部高频与中频单核区偏蓝数值最小。最小格落在中部单核行附近。这与正文报告的最低 0.43 毫焦、最差 3.60 毫焦一致。

### 哪些实现选择真正影响开销？

按问题组织消融式对照。测什么：装载任务融合、块大小、线程数对加速比的影响。与谁比：原始流水线对融合装载、3 线程对 6 线程、并行对串行基线。条件是否一致：同一滤波语义、同一块划分，融合变体数值输出不变。

| 对照 | 指标 | 小块行为 | 大块行为 | 代价或边界 |
| --- | --- | --- | --- | --- |
| 原始对融合装载 | 加速比 | below 32 samples 接近或低于基线，融合更早进入有效区 | 差异变小，级块滤波主导 | 融合不改变高吞吐区行为 |
| 3 线程对 6 线程 | 加速比 | 6 线程调度与归约压力更大 | 3 线程近理想 3，6 线程超 4.5 但低于 6 | 线程局部归约随线程数线性增长 |
| 块 1024 与 2048 | 综合 | 任务开销占比下降 | 流水线填充块数减少 | 二者为 tested 最佳平衡 |

表后解释机制。极小块有用计算盖不住任务创建、依赖管理与输出归约，6 线程反而更差。中等块融合省掉的装载任务占比可见，大块滤波主导后差异消失。过大块虽摊薄单任务开销，却减少同时在飞块数。

未评测边界包括回调集成下的唤醒与空闲行为、图形处理器或音频数字信号处理器映射，本文结论限于分块中央处理器内核。稳态占比下降的直观来源正是填充阶段长度相对变长。

### 结论的适用边界与未测量项是什么？

直接报告的边界有 3 条。第一，固定群延迟的全线性相位结构不适合超低延迟监听，目标是可容忍、补偿或用相位相干换延迟的场景。如播放与母带均衡、多通道空间音频均衡和并行多带链路。

第二，评价的是分块滤波内核，不含宿主调度、唤醒成本、空闲状态和截止期保证，回调级系统需另做实验。第三，最优块大小、线程数、频率与底层滤波核需按平台重调。在浮点主导而非访存主导的处理器上，对称系数、单指令多数据向量化或状态布局可能更重要。

有限解释是能量最优点平台相关，不可当作通用最优。未验证推测包括把趋势外推到每组每步、把吞吐改善等同于延迟改善、把相关性当因果。本文未测量误判率以外的听感评价，也未给出完整延迟分解。

复述时应使用报告显示、支持、可能待验证 3 级措辞，不承诺未测量量得到改善。资源状态为本次未能确认可达，复现前需自行确认链接可达性。

### 复现应先做什么，需要哪些超参数？

先复现串行基线。按原文算法实现分块外层循环、级联内层循环和块内采样循环，顺序固定为先读延迟、再算拉伸低通并递交低通块、最后对齐累加。每级用环形状态存流式历史，块缓冲用双缓冲乒乓。

输出下标平移代替全长延迟子带存储。先用单线程验证与直接实现逐采样一致，再测滤 1,000,000 采样的时间与每秒采样数，确认块从 1 到 16384 变化时时间稳定。再复现并行流水线。

用开放多处理单结构入队、团队线程执行，声明级间输入输出依赖与同级状态串行令牌，滑动窗口取二的幂并保证容纳在飞块数。输出先写线程局部缓冲再按段归约。块大小从小到大扫描，分别测 3 线程与 6 线程相对串行基线的加速比。

最后复现能量扫描。固定中央处理器频率到 20 个离散值，固定块为 2048 采样，逐个核数测每块毫秒时间，用 10 赫兹板载采样减同频空闲基线得动态功率。关键超参数是 9 级十带、块 2048、线程 1 到 6、频率 115.2 兆赫到 1510.4 兆赫。

### 何时值得尝试这种实现？

当任务需要倍频程谱整形且重组后相位关系不能乱，而设备只有中央处理器可用、或音频数字信号处理器不开放编程、或音频处理需与中央处理器侧大负载集成时，本文路线值得尝试。先用串行分块加环形状态拿到正确且局部性好的基线。

再在块数远大于级数时开任务流水线，用 2048 左右块起步扫描，避免一上来就用极小块加满线程。若目标是最低能量而非最低延迟，应做固定频率全扫描，优先看单核中频附近与 6 核同频附近的毫焦对比。

不把最高频默认当最优。若目标是最高吞吐，可用 6 核最高频，但要接受更高瞬时功率与归约开销。若需超低监听延迟或回调级保证，则本文内核不够，还需持久流水线状态、调频器感知调度和专用硬件映射等另行验证。

记住核心判断：最快点不必最省电，块大小同时控制开销占比与流水线占用，二者平衡点随平台而变。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=3)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=4)

[![原文数学表达区域 9，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=4)

[![原文数学表达区域 10，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=4)

[![原文数学表达区域 11，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=5)

[![原文数学表达区域 12，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/076aac9379a1/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf#page=5)

另有 18 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
