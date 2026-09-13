---
title: "POLAR COORDINATE SEPARATION LEARNING FOR FREQUENCY-DOMAIN ADAPTIVE PERSONAL SOUND ZONES"
date: 2026-09-13
draft: false
description: "针对听音者移动导致声传递函数变化时时域 FxLMS 加 RLS 在线建模计算重、重收敛慢的问题，论文提出频域极坐标 FxNLMS 加 NLMS 声路径跟踪与声对比度驱动变步长，在 10 扬声器仿真中把每帧计算量降低约 99.94% 并把移动后重收敛时间常数从 33.11 s 缩短到 3.71 s，代价是仍只在自由场白噪声仿真中验证且依赖多组 Sigmoid 参数整定。"
tags: ["自适应滤波", "高效推理", "麦克风阵列", "空间音频信号", "主动降噪"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000031"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "6e1c9df1ef73c9c5e9e3b107f387382f6cd1a3c8381480cc83cce8c256cfade8"
paper_digest_api_reader_plan_sha256: "7990d84f3fb6c149d149439cc5a0c59746a1ef43e9a1136b2e25c11716050cbd"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e99e67f0032d14181b26b5199e349914b01f6845d21769a353ee7d81984ba525"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4927824fedb301e196cab8434cfaa98805dcd1e231bda430135295a8b65f3070"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "644a716f346c375ea99737475f8928aa566b702a6d35b716850b05b4da5a0a34"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f8090429eff3f688398b4bf3d0a3c619e2e787a8e9133ca5cd59b48e0dd1a16a"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adaptive-filtering","label":"自适应滤波"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"signal","id":"signal.spatial-audio","label":"空间音频信号"},{"facet":"task","id":"task.active-noise-control","label":"主动降噪"}]
paper_digest_primary_task: "主动降噪"
paper_digest_primary_method: "自适应滤波"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 相位对不准就白做：用极坐标分开调幅度和相位的频域个人声区

> 英文题目：*POLAR COORDINATE SEPARATION LEARNING FOR FREQUENCY-DOMAIN ADAPTIVE PERSONAL SOUND ZONES*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000031`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf)

标签：#自适应滤波 #高效推理 #麦克风阵列 #空间音频信号 #主动降噪

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Gonaikawa, Yutaka：机构信息未能从会议 PDF 纯文本可靠映射
- Sugiura, Yosuke：机构信息未能从会议 PDF 纯文本可靠映射
- Shimamura, Tetsuya：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

个人声区需以10通道扬声器阵列同时在亮区重放目标声并在暗区抑制串扰，听者移动导致传递函数时变、稳态对比度与重收敛速度难以兼顾是实际难点。方法先在频域估计扬声器到亮区与暗区的传递函数，并由亮区误差与暗区加权误差构造代价函数与频点梯度。接着将控制滤波器分解为幅度与相位两支路，分别取梯度实部与虚部并用归一化参考功率求更新。然后由声对比度驱动的Sigmoid相位幅度比率与全局缩放因子动态放大相位步长，使上一步输出的对比度下降直接进入下一步的步长分配以优先纠正相位失配。与时域滤波-x最小均方加递归最小二乘在线建模相比，该机制以逐频点归一化更新替代矩阵求逆，实现了非稳态下的低复杂度大步长重收敛。在100 s自由场仿真且30 s处声区平移0.28 m的设置下，提出方法的声对比度AC指标为16.96 dB，高于常规方法的声对比度AC指标7.94 dB。该结论适用边界受限于无混响自由场、白噪声带通信号与固定阵列几何，音乐语音与混响真实器件场景尚未验证；原文以每帧浮点运算衡量计算量由844 MFLOPS降至0.48 MFLOPS，复杂度下降约99.94%。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么：为什么移动一下就要重算？

这篇论文的输入是同一路参考声信号，要同时驱动 10 个扬声器，在共享空间里造出两个区域。输出是每个扬声器的驱动信号，目标是让亮区（Bright Zone，简称 BZ）听到想要的声音，让暗区（Dark Zone，简称 DZ）尽量听不到。必须保留的信息是评价标准和约束：亮区保真用声压匹配思想衡量，暗区抑制用能量衡量，两者加权成代价函数；计算量必须能实时跑，重收敛必须跟得上人的移动。

本文解读按学习依赖展开：先讲任务与已有路线，再讲方法全景与组件计算，再讲无神经网络训练时的真实仿真流程，接着讲实验条件、主结果与反例，最后讲可复现清单。
研究生先建立直觉：房间里从扬声器到耳朵的路变了，原来在暗区互相抵消的声波就对不齐了。论文把这条路叫作声路径或声学植物，用从扬声器到麦克风的冲激响应向量表示。听音者沿 y 轴移动 0.28 米，相当于所有通道系数整体漂移，控制滤波器必须跟着改。

时域方法每个采样点都要做多通道卷积，还要用递归估计器跟踪通道，所以通道一多就很重。

**个人声区 × 声对比度：** 个人声区指用扬声器阵列让亮区能听清目标声、暗区尽量安静的分区重放任务，声对比度指亮区与暗区平均声压能量比并取对数得到的评价量；前者定目标，后者定成功标准，论文把声对比度下降解读为相位失配信号，并用它直接驱动步长放缩。

白话说，个人声区（Personal Sound Zone，简称 PSZ）就是分区放音，声对比度（Acoustic Contrast，简称 AC）就是亮区比暗区响多少，分贝数越高说明分区越干净。论文反复用声对比度判断是否失配：声对比度掉下去，就认为主要是相位没对准，而不是所有参数都坏了。这个判断是后文优先调相位的依据，也是变步长的传感器。

### 已有路线走到哪里，为什么还缺低计算加快速跟踪？

按同输入、同目标、同运行阶段对照，已有路线分 3 类。第一类是物理指向性做法，例如有源头枕、参量阵列扬声器、点重放系统，计算省事但低频与灵活性受限。第二类是静态线性优化，例如声对比度控制（Acoustic Contrast Control，简称 ACC）与压力匹配（Pressure Matching，简称 PM），以及后续的鲁棒与宽带扩展，环境一变就敏感。第 3 类是自适应跟踪，例如把滤波 x 最小均方（Filtered-x Least Mean Square，简称 FxLMS）用于车内声区，以及用递归最小二乘（Recursive Least Squares，简称 RLS）做在线植物建模，还有变步长、同时跟踪传递函数、子带处理与深度学习方法。

论文的判断是直接报告的缺口：自适应声区系统里同时做到低计算量与快收敛仍然困难。教学例子是：静态 ACC 好比事先量好房间尺寸配好眼镜，头一动就不清楚了；自适应方法好比持续验光，但每次验光都做 1 次大矩阵求逆，镜片越多越算不动。本文只讲论文实际研究的频域自适应任务，不把类别差异当成同条件胜负去排名。

### 问题到底难在哪里：代价、梯度与重收敛如何互相拖累？

困难来自 3 个互相牵制的动作。第一，控制滤波器输出要经过真实房间才能被麦克风收到，更新控制量必须把参考信号先经过估计出的声路径滤波，这就是滤波 x 结构的由来。第二，声路径本身也在变，所以要另开一个估计器持续跟踪声路径，这就是在线植物建模（Online Plant Modeling，简称 OPM）。第三，亮区要像目标，暗区要安静，权重系数要在两者之间折中，调得偏向一边就会牺牲另一边。
传统基线的做法是时域的滤波 x 归一化最小均方加 RLS 在线建模。

控制部分用滤波后参考矩阵与亮区暗区误差构造梯度，植物部分用指数加权预测误差加正则项做 RLS 更新。论文报告的问题是 RLS 涉及矩阵求逆，复杂度随植物维度平方增长，加上每个通道每个采样点都要做时域卷积，大规模系统难以实时。这是一个可核对的机制判断，不是修辞：通道数与滤波器长度上去后，计算量先撑不住，然后才谈得上收敛快慢。

### 方法全景：一个样本如何走完输入到输出？

沿一个频帧走一遍。输入是参考信号的频谱，用符号记为当前帧与频点的参考谱。表示是控制滤波器的频域系数，论文把它写成幅度与相位的极坐标形式。组件有两个：控制更新器与植物跟踪器。目标是频域代价，一项奖励亮区误差小，一项惩罚暗区残留大，暗区权重用系数控制。

输出是控制谱乘以参考谱得到的各扬声器输出谱，再经估计出的亮区暗区传递函数得到观测谱。
具体动作是：先用当前估计的传递函数算出亮区暗区观测谱，再与亮区期望响应相减得到误差谱；然后求代价对控制共轭的梯度，并把梯度投影到当前相位方向上拆成幅度梯度与相位梯度；最后用各自步长除以功率归一化项去更新幅度与相位。

植物跟踪器并行工作，用麦克风实测谱减去估计传递函数与输出谱的乘积得到植物误差，再用归一化步长修正估计的传递函数。频域的好处是卷积变成乘法，且植物更新不再需要矩阵求逆。
需要提醒的边界是资源状态：本次收到的证据中没有发现来源绑定且完成超文本传输安全协议状态验证的资源，因此不得声称代码、模型或数据已公开。复现只能依赖论文文字给出的仿真条件与参数表，不能假设有官方实现可下载。

### 为什么把一个复系数拆成幅度加相位两路来调？

白话是：声音抵消靠的是波峰对波谷，差一点相位就抵消不掉，而幅度差一点往往还能接受。英文名是极坐标控制（Polar-coordinate control）。论文明确给出安排理由：声对比度对相位误差高度敏感，即使很小的相位扰动也会显著降低对比度，因此重收敛要优先纠正相位，而不是均匀地改所有系数。
实现上，每个频点的控制量写成幅度乘以相位旋转。梯度先在复数域算出，再乘以反向旋转，把实部当幅度方向、虚部当相位方向。

这种拆分让两路各有物理分工：幅度管响度包络，相位管对齐关系。后文的步长设计就是建立在这个分工上的：失配时给相位更大的相对步长，稳态时回到接近 1 比 1。

**在线声路径建模 × 滤波 x 归一化最小均方：** 在线声路径建模负责在听音者移动时持续估计从各扬声器到各麦克风的传递函数，滤波 x 归一化最小均方负责用经过声路径滤波的参考信号来更新控制滤波器；前者提供当前通道知识，后者决定控制量怎么改，两者搭配才能在通道变化后重建亮区相长与暗区相消。

初学者容易误以为滤波 x 只是普通最小均方加了个滤波器。准确动作是：因为误差是经过房间后的结果，参考信号必须先经过估计房间滤波，才能指出控制量该往哪调；植物估计错了，这个指向就错了。所以控制与建模必须同时跑，论文把两者都搬到频域正是为了让同时跑变得便宜。

### 三组步长如何分工：频率基线、相位偏重与全局放缩？

第一组是频率相关的基线步长。白话是高频更不稳，所以步长随频率线性下降，低频给较大步长，高频给较小步长。论文在 100 赫兹到 1000 赫兹控制带内设置低频与高频两端步长，并配图说明随频率下降的形状。这一步与环境无关，只管频率本身的数值稳定性。
第二组是相位相对幅度的倍率。

白话是声对比度低时多调相位，声对比度恢复后两路回到相当。实现是用声对比度经过 Sigmoid 函数映射，参数包括初始倍率、收敛倍率、中心与宽度。第三组是全局放缩因子。白话是整体胆子大小：用位移量与目标差决定基础放缩，再用声对比度经另一个 Sigmoid 得到权重，在非收敛时放大步长、稳态时回到 1 附近。论文还给出放缩范围与偏移、灵敏度、目标比等参数。

**极坐标控制 × 幅相分离更新：** 极坐标控制指把每频点控制系数写成幅度乘以相位旋转的形式，幅相分离更新指对幅度梯度和相位梯度用不同步长分别迭代；分工是幅度管能量包络、相位管干涉对齐，搭配理由是原文指出声对比度对相位误差高度敏感，组合意义是移动后优先放大相位修正而不必同等扰动全部系数。

**声对比度加权 × 全局放缩因子：** 声对比度加权指用当前声对比度经 Sigmoid 映射得到相位相对幅度的倍率，全局放缩因子指再用位移量与声对比度共同决定的标量整体放大或缩小幅相步长；前者管方向性偏重，后者管整体激进程度，组合后在失配时同时加大总量并偏向相位，收敛后回到接近 1 的稳态。

归一化分母是功率平滑项，用遗忘因子对亮区暗区加权功率做滑动平均，再加小正则常数防止除零。植物跟踪用独立的归一化最小均方步长。整体效果是 3 层叠加：频率定起点，对比度定偏向，全局定总量，归一化定数值安全。

### 没有神经网络训练时，真正的计算与整参过程是什么？

本研究没有训练神经网络模型，因此不存在冻结主干、反向传播更新权重、早停或重置优化器的环节。该节的真实计算是自适应滤波的在线迭代与仿真参数搜索。控制系数与植物估计都是从初始值开始，每帧按误差与步长递推，没有离线训练集上的梯度下降轮次。

**递归最小二乘 × 归一化最小均方：** 递归最小二乘指传统方法中用指数加权与矩阵求逆来估计声路径的算法，归一化最小均方指提出方法中按输入功率归一化后做 1 阶修正的算法；前者收敛记忆性强但复杂度随通道数平方增长，后者省去矩阵求逆，论文用后者替换前者正是把复杂度从 2 次降为线性的关键替换。

论文报告了减少人工整参依赖的做法：Sigmoid 控制范围先做理论约束，再用贝叶斯优化工具在信号失真比、语音质量与稳态声对比度约束下搜索参数。需要指出的缺项是论文没有给出搜索空间、试验次数、每组约束阈值与最优参数的选择曲线，也没有说明位移量是如何从信号中计算得到的。因此复现时只能先照抄参数表中的中心、宽度、偏移与灵敏度，不能推定其位移估计实现。把无训练等同于确定性求解是错误的：同样的参数遇到不同房间与不同位移，迭代轨迹仍会不同。

### 仿真房间、信号与移动条件是否对齐，才能比收敛？

测什么很明确：分区干净程度随时间的变化、移动后多久恢复、语音质量是否被牺牲、每帧浮点运算量。与谁比也很明确：传统方法是时域滤波 x 归一化最小均方加 RLS 在线植物建模，提出方法是极坐标滤波 x 归一化最小均方加归一化最小均方在线植物建模。条件一致性方面，两者用同一房间、同一阵列、同一输入带宽与同一移动时刻，只有更新域、植物估计器与步长机制不同。
数据与协议按原文交代：用 Pyroomacoustics 库做无反射仿真，房间 10 米乘 8 米乘 4 米，镜像源阶数为 0，采样率 4000 赫兹。

10 通道扬声器按半径 1.5 米弧形布置，亮区暗区各 8 个麦克风组成线阵，间隔 0.04 米，距离 0.8 米。帧长与滤波器长度都是 128，实验时长 100 秒，输入是经 100 赫兹到 1000 赫兹 6 阶带通的高斯白噪声，在 30 秒时刻把区域沿 y 轴平移 0.28 米。传统方法步长 0.1，遗忘因子 0.99995；提出方法低频高频基线步长分别为 0.15 与 0.10，植物步长 0.1，暗区权重 10.0，功率平滑因子 0.85，扬声器增益上限 2.0。
指标方向要先讲清：声对比度越高越好，信号失真比越高越好，语音质量评估越高越好，重收敛时间常数越小越好，每帧浮点运算量越小越好。

论文没有报告多次随机种子的方差与显著性检验，这是后续验证需要补的口径。

### 移动前后声对比度差多少，多久能回来？

比较问题是：在同一移动冲击下，提出方法是否在更高起点上更快恢复分区，而传统方法是否长期回不来。公平条件是同一房间、同一阵列、同一带通白噪声与同一 30 秒 0.28 米位移。指标方向是声对比度越高越好，时间常数越小越好。下表把原文连续句子中实际出现的关键数字整理成可核对的对照，条件列保留原文时间窗，数值与单位保留原文写法。

| 条件 | 指标 | 传统方法 | 提出方法 | 对比对象 |
| --- | --- | --- | --- | --- |
| 25–30 s 稳态 | 声对比度 | 7.94 dB | 16.96 dB | 同房间同阵列基线 |
| 30 s 位移后重收敛 | 时间常数 | 33.11 s | 3.71 s | 同位移冲击下恢复速度 |

论文报告：变化前 25 到 30 秒平均声对比度传统方法 7.94 分贝，提出方法 16.96 分贝；30 秒位移后传统方法掉到约负 2 分贝，提出方法掉到约 0 分贝；提出方法约 5 秒内恢复到 15 分贝以上，传统方法近 50 秒才回到约 3 分贝；拟合的重收敛时间常数传统方法 33.11 秒，提出方法 3.71 秒，约 9 倍缩短。

表后解释是：收益不仅是恢复快，而且起点更高、终点更高，稳态 95 到 100 秒传统方法约 3.36 分贝而提出方法约 16.13 分贝。但代价与反例也要看到：位移瞬间两者都大幅下跌，说明没有做到无缝跟踪；传统方法在移动后长时间低对比度，意味着同样参数下它对 0.28 米位移的跟踪能力不足；论文未给出混响与音乐信号下的曲线，不能把该恢复速度推广到真实房间。

### 步长真的在移动时刻变大吗，算力省在哪里？

比较问题是：加速是否来自步长在失配时刻的主动放大，以及计算量下降是否主要来自省掉矩阵求逆。公平条件仍是同一帧长 128 与同一 10 扬声器 16 麦克风配置。指标方向是失配时步长应变大、恢复后应回落，每帧运算量越小越好。下表整理原文连续句子中关于配置与总降幅的数字，操作级细分数字见表后文字转述，避免为凑宽度编造无源列。

| 条件 | 指标 | 传统方法 | 提出方法 | 说明 |
| --- | --- | --- | --- | --- |
| L = 10，M = 16，N = K = J = 128 | 每帧浮点运算量口径 | 高 2 次复杂度 | 低线性复杂度 | 同帧长下比较 |
| 128 samples 帧，4000 Hz 采样 | 计算成本降幅 | 基准 | 降低约 99.94% | 同条件总降幅 |

论文报告的步长行为支持加速解释：变化前幅度与相位步长约 0.13 到 0.15，30 秒时刻增大到约 0.48 到 0.52，约 3.5 到 4 倍，随着声对比度恢复再回到标称水平。计算量方面，传统方法每采样点约 2 次项加卷积项，提出方法每采样点约对数项加线性项。

在 128 点帧下原文表格给出传统方法总量约 844、提出方法约 0.48 的每帧百万浮点运算量，降幅约 99.94%，其中植物更新从约 839 降到约 0.16 是主要来源。表后必须讲代价：步长放大约 3.5 到 4 倍必然带来瞬态波动风险，论文用功率归一化、增益上限与 Sigmoid 限幅来约束，但未报告不同位移距离下的失稳边界；未胜出项是传统方法在稳态前 30 秒的声对比度本身就低，说明即使不移动，其参数在该仿真中也未达到提出方法的起点公平性需要读者注意。

### 哪些结论还没被验证，不能直接承诺？

论文直接报告的是自由场、白噪声、单次 0.28 米平移下的声对比度、信号失真比、语音质量与浮点运算量。有限解释是相位优先与变步长支持了更快重收敛，步长曲线与声对比度恢复在时间上同向变化。未验证推测是把该机制推广到混响房间、音乐信号、连续行走或多人遮挡仍同样有效，原文结论部分只把音乐信号与混响实时实现列为未来工作，因此不能承诺这些场景下同样省算力或同样快。

相关性不是因果：声对比度下降与相位失配同时出现，不等于每次下降都只是相位问题，幅度与植物估计误差也可能参与。缺失证据不是技术错误，但需要明确：论文未测量实际硬件延迟、每帧 wall-clock 时间随通道数的扩展曲线、多随机种子的统计分布，也未报告误判为失配时的误触发代价。总体趋势不等于每步都成立，稳态声对比度高不等于每帧语音质量都高，位移后信号失真比曾掉到约 3 分贝、语音质量曾掉到约 2.8，恢复到 3.6 到 3.8 用了约 10 秒，这段瞬态损伤是真实代价。

### 要复现，先照抄什么，再补哪项验证？

何时值得尝试：如果你的声区系统已遇到通道数增加后 RLS 跑不动，或听音者小幅移动后传统自适应长时间恢复不过来，且你能接受频域分帧带来的实现改动，那么极坐标分离加声对比度驱动步长的思路值得试。复现先做什么：按原文搭建无反射房间与弧形阵列，采样率、带通、帧长、阵列几何与 30 秒 0.28 米平移先对齐；传统分支用步长 0.1 与遗忘因子 0.99995，提出分支用低频 0.15 高频 0.10 个基线、植物步长 0.1、暗区权重 10.0、功率平滑 0.85、增益上限 2.0 与两组 Sigmoid 中心宽度照抄。

先复现声对比度时间曲线与重收敛时间常数，再看信号失真比与语音质量是否满足约束。
还需补哪项验证：同一位移做多次随机噪声与随机初始相位的重复，报告均值与方差；扫位移距离与方向、扫混响时间、换音乐与语音信号；记录每帧实际耗时而不仅是浮点运算量。信息条件要区分：本次没有可用资源状态可写当前可用或已公开，只能说链接当前不可用或未能确认可达之外的中性事实是无绑定资源，因此复现不依赖代码下载，完全依赖文字参数。

常见误解是把暗区权重 10.0 当成亮区权重，原文控制代价中它是暗区抑制的相对权重，与传统方法的亮区暗区折中权重符号体系不同，照抄时不要直接混用。

### 一句话收束：它解决了什么，又把难度留在了哪里？

它解决的是用频域与 1 阶植物跟踪替换时域矩阵求逆，从而把大规模声区的每帧计算从难以实时降到线性可扩展，同时用声对比度感知的幅相分离步长把单次平移后的重收敛从数十秒级拉回秒级。它把难度留在了整参与泛化：两组 Sigmoid 与全局放缩引入了多个中心、宽度、偏移与灵敏度，论文虽用贝叶斯优化约束搜索但未公开搜索细节；验证仍停留在自由场白噪声与单次平移，混响、音乐、连续移动与硬件延迟都待验证。

给研究生的可复述方法链是：参考谱乘极坐标控制谱得到输出谱，经估计传递函数得到亮区暗区观测谱，与期望相减得到误差谱，求复梯度后投影为幅相梯度，按频率基线、对比度偏重与全局放缩 3 层步长做归一化更新，同时用另一路归一化最小均方更新传递函数估计。记住判断顺序：先看声对比度是否掉下去，再看步长是否在 30 秒附近放大 3 到 4 倍，最后看声对比度是否在约 5 秒内回到 15 分贝以上，3 个环节对上才算复现了论文主张的因果链。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=1)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 16，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 17，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 18，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=2)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-20.png)

区域 20 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-21.png)

区域 21 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-22.png)

区域 22 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-23.png)

区域 23 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-24.png)

区域 24 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 25，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-25.png)

区域 25 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 26，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-26.png)

区域 26 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 27，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-27.png)

区域 27 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 28，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-28.png)

区域 28 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 29，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-29.png)

区域 29 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 30，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-30.png)

区域 30 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 31，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-31.png)

区域 31 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

[![原文数学表达区域 32，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/91667f8c369a/figure-32.png)

区域 32 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf#page=3)

另有 15 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
