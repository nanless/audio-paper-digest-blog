---
title: "AUDIO SPOTFORMING VIA POST-FILTERING USING CROSS-ARRAY NON-TARGET ESTIMATES"
date: 2026-09-13
draft: false
description: "针对目标与干扰在单个阵列看来同方向而波束形成失效的问题，该研究用几何约束线性解混做空间滤波、再用跨阵列非目标估计构建多通道维纳后置滤波，在三阵列混响实验中多数指标超过 NMF 与 NTF 基线，但稀疏先验强度与混响条件会带来失真与抑制的权衡。"
tags: ["信号处理", "麦克风阵列", "语音", "目标说话人提取"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000116"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2daf1ad2b91082b33ddb635507dcc569b006a47aaa5b5ae4f0d98cf95e4c202c"
paper_digest_api_reader_plan_sha256: "f88c6e0e293739f5a2288423a66607acb00bb6b6df0cfd9b264d709619348a46"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "544549f52cbca8f065fa6cda3d97b95db98864cb6086d249cd575527a3df66c2"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d86abb2ea2e79f9cd8ec981ce5793d130af858b5ad2e33adcc8eb3061cc0bab4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c922aaf5e591f0c1c89dbc4d4270a8a7fea6738073e4781650fe3340175f286d"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6ac1ac1e44de0d1b1451cd3ec2733494629f85afecc1e2706343c02bfb8bd2d5"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"}]
paper_digest_primary_task: "目标说话人提取"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 同向干扰难分开时：用跨阵列非目标估计做后置滤波的声点形成

> 英文题目：*AUDIO SPOTFORMING VIA POST-FILTERING USING CROSS-ARRAY NON-TARGET ESTIMATES*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000116`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf)

标签：#信号处理 #麦克风阵列 #语音 #目标说话人提取

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Ishikawa, Yuto：机构信息未能从会议 PDF 纯文本可靠映射
- Li, Li：机构信息未能从会议 PDF 纯文本可靠映射
- Seki, Shogo：机构信息未能从会议 PDF 纯文本可靠映射
- Yamaoka, Kouei：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

分布式麦克风阵列的目标语音提取以多阵列含噪混合为输入，以增强的目标语音为输出，实际难点是当干扰源在某一阵列视角与目标同向时单阵列线性空域滤波无法分离两者，残留干扰只能靠后级抑制。各阵列先用几何约束独立低秩矩阵分析做空间滤波，输出一路目标向通道与多路非目标通道，其输出进入后置滤波阶段作为可观测方差量。后置滤波将目标向方差建模为目标方差与跨阵列非目标方差的非负线性组合，并对目标方差施加逆伽马稀疏先验，再用大化均衡算法迭代估计方差与组合权重，估计结果用于构造多通道维纳滤波并对各阵列输出同步平均。与用非负矩阵分解或非负张量分解低秩谱模板直接构造后置滤波器不同，该方法用跨视角空间分离量替代难拟合的语音低秩假设，因而降低建模失配与计算复杂度。在3话筒近无混响设置下，所提无先验版本的SDR为22.68 dB，高于NTF基线的SDR 16.88 dB。该结论的适用边界是目标方位已知且阵列间残余异步在10个采样内，尚未验证真实录音、移动声源与方位误差下的外推能力。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么：为什么单阵列会在同方向上失效？

这篇论文的输入是多个分散布置的麦克风阵列同时录到的含混响混合语音，输出是对指定位置目标说话人的增强语音。必须保留的关键信息是：目标位置已知，干扰说话人与漫射噪声可能与目标在同一阵列看来处于同一方向，系统分空间滤波与后置滤波 2 阶段工作，最终输出是对各阵列提取结果做同步平均后的时域信号。

本文解读的目标是让研究生能复述何时需要多阵列、2 阶段各自解决什么、后置滤波的方差与权重如何估计与使用，以及实验在什么条件下比较了什么。
单阵列波束形成的白话含义是利用麦克风之间的相位差形成指向目标方向的空间指向性，只放大来自该方向的信号。它的英文是 beamforming，后文简称波束形成。

当干扰点声源与目标在该阵列看来方位相同，观测到的混合在空间上几乎不可分，线性空间滤波在理论上就难以同时保留目标又抑制干扰，这就是论文反复强调的根本困难。举例来说，左右两个阵列看同一房间，左侧阵列看来目标与绿色干扰说话人重叠，右侧阵列看来两者方位分开，那么仅用左侧阵列无法解开重叠，而右侧阵列的视角提供了额外信息，这正是需要声点形成的动机。

声点形成的白话含义是增强某个空间区域而非某个精确波达方向的技术，英文是 audio spotforming，后文简称声点形成。它与单阵列波束形成的区别在于输入是分布式多阵列，目标是利用目标成分在所有阵列都出现、而干扰的空间表现随视角变化这一事实。论文把任务限定为已知目标位置、干扰围绕目标存在的情形，观测在每个阵列建模为目标源像与全部非目标源像之和。理解这一建模是后续理解协方差分解与维纳滤波的基础。

### 已有路线如何做两阶段声点形成，瓶颈在哪里？

已有声点形成路线同样采用 2 阶段框架。第一阶段是空间滤波，英文为 spatial filtering，后文简称 SF，对每个阵列用波束形成或线性解混滤波增强来自目标方向的信号。第二阶段是后置滤波，英文为 post-filtering，后文简称 PF，对 SF 输出进一步压制残留非目标并增强跨阵列共有的目标成分。常规做法在 PF 阶段用非负矩阵分解或非负张量分解估计目标的低秩表示，再据此构建维纳型后置滤波器。
非负矩阵分解的英文是非 negative matrix factorization，后文简称 NMF。

非负张量分解的英文是非 negative tensor factorization，后文简称 NTF。NMF 路线假设目标语谱模式在多阵列间共现，NTF 路线把目标与非目标表示为不同谱模式以放宽共现假设，并提高对准误差的鲁棒性与可解释性。论文报告指出，这类方法直接把估计出的低秩表示用于构造后置滤波器，性能高度依赖基个数等模型复杂度，语音结构复杂时低秩假设本身存在失配。原文引用已有实验称需要大量基才能获得高性能，这会增加计算复杂度并降低实际效率。

因此教学上要区分两类局限：一是建模假设局限，即语音难以被准确低秩表示；二是实现代价局限，即放宽低秩需要更多基与更多迭代。后续新方法正是针对这两个局限，提出不依赖低秩、转而利用跨阵列非目标估计来构造后置滤波。

### 问题如何形式化：观测、目标源像与同向干扰怎样写？

论文用短时傅里叶变换系数描述观测。记阵列索引、频率、时间帧、麦克风索引分别为不同下标，观测向量包含该阵列全部麦克风在该时频点的复系数。在目标周围存在干扰与漫射噪声时，每个阵列的观测近似写成目标源像向量与全部非目标源像之和。当点声源干扰与目标在某阵列看来同方向，该阵列的线性空间分离在原理上难以区分两者，这是全文的问题起点。
要复述的关键判断是：困难不是信噪比低，而是空间可分性缺失。

单阵列仅靠方向信息无法给同向的两路信号分配不同增益，必然在保留目标的同时泄漏干扰。论文的解决思路不是在该阵列上强行区分，而是承认该阵列分不开，转而利用其他阵列上两者可分的事实。具体来说，对每个阵列应用线性解混后，来自目标方向的非目标成分在其他阵列的非目标通道中是可见且可分离的，于是可以用其他阵列的非目标估计来解释本阵列目标通道中的残留干扰。

这一思路决定了对 SF 阶段的新要求：常规声点形成在 PF 阶段只用对应目标方向的分离信号，而新方法还需要 SF 阶段同时给出非目标成分的估计。因此 SF 不能只用普通波束形成，而需要基于线性解混滤波的方法，并保证目标通道稳定对应目标方向。

### 新方法全景：一个样本如何从混合走到增强输出？

沿一个样本走完全流程有助于建立整体依赖。输入是 3 个阵列各自录到的多通道混合，先在每个阵列做基于线性解混的 SF，得到目标通道与多个非目标通道的分离信号。接着进入 PF 阶段，方法不再拟合目标语谱的低秩结构，而是估计每个时频点的目标方差、每个阵列非目标通道方差，以及跨阵列耦合系数，用它们解释本阵列目标通道中混入的干扰。最后用估计出的方差构建作用于该阵列观测的多通道维纳滤波器，提取目标源像，再把各阵列提取结果在时域同步平均得到最终输出。
SF 与 PF 的分工与搭配是理解全景的核心，下面用一个独立段落集中说明。

**空间滤波 × 后置滤波：** 空间滤波负责在每个麦克风阵列上利用到达方向增强目标方向信号并分离出非目标通道，后置滤波负责综合多个阵列的输出进一步压制目标方向上的残留非目标成分；两者搭配的原因是单阵列空间滤波无法区分同方向的目标与干扰，而多阵列后置滤波可以利用视角差异把在一个阵列上混叠的成分在另一个阵列上分开，组合后得到比单阶段更干净的目标估计。

在实现上，SF 采用几何约束独立低秩矩阵分析，英文为 geometrically constrained independent low-rank matrix analysis，后文简称 GC-ILRMA，它是带方向先验的独立低秩矩阵分析变体，能让特定滤波器持续对应目标方向。PF 则假设观测服从零均值多变量复高斯分布，用协方差矩阵的分解表示目标与非目标的空间特性，其中空间基取为解混矩阵的逆。目标方差与非目标方差都是随时间频率变化的正数，跨阵列耦合系数是非负标量，用于把其他阵列非目标方差线性组合成对本阵列目标方向干扰的解释。目标先验采用逆伽马分布以诱导稀疏，代价函数是全部阵列观测的负对数后验，优化变量正是上述 3 组参数。

### 空间滤波阶段需要什么样的解混矩阵与通道对应？

SF 阶段要求两类空间滤波器：一类增强位于目标方向的源，另一类抑制目标方向而增强主导非目标成分。记第几个阵列的解混矩阵由多个滤波器向量共轭转置堆叠而成，其中目标通道索引记为特定符号并在实验中取为最后一个通道。为了保证该通道在优化过程中不漂移到干扰上，方法采用方向先验做空间正则化，具体就是 GC-ILRMA。它的输入是观测，输出是分离信号向量与解混矩阵，解混矩阵的逆被后文直接用作空间传播特性的估计。
GC-ILRMA 与多通道维纳滤波器的关系需要紧接着讲清，因为前者的输出是后者的输入与参数来源。

**几何约束独立低秩矩阵分析 × 多通道维纳滤波器：** 几何约束独立低秩矩阵分析在空间滤波阶段提供带方向先验的线性解混矩阵，保证目标通道稳定对应目标方向并同时给出非目标通道，后者是后置滤波需要的观测；多通道维纳滤波器在后置滤波阶段利用估计出的目标方差与非目标方差对观测做最小均方意义的加权提取，搭配理由是前者提供可解释的空间基与分离信号，后者把方差估计转化为可直接作用于观测向量的提取操作。

对初学者而言，关键操作是：SF 不是只输出一路增强语音，而是输出目标路加多路非目标路；目标路用于初始化目标方差，非目标路用于初始化非目标方差与跨阵列解释。论文给出的初始化是目标方差取各阵列目标通道能量平均，非目标方差取对应通道能量平方，耦合系数在跨阵列且非目标通道时取均匀值否则取零。这种初始化把 SF 的分离结果直接转化为 PF 迭代的起点，保证了 2 阶段的数据连贯性。

### 后置滤波如何用其他阵列的非目标解释本阵列的残留干扰？

PF 的核心建模是对观测协方差矩阵做分解。协方差写成空间基乘以对角方差矩阵再乘以空间基共轭转置的形式，对角线上目标位置放目标方差，其余对角位置放各非目标通道方差。特别地，对应目标方向的非目标方差并不独立估计，而是写成其他阵列非目标通道方差的加权和，权重即跨阵列耦合系数。白话理解是：本阵列目标通道里的干扰能量，被假设为其他阵列已分离开的干扰能量的线性组合。
低秩近似与跨阵列非目标估计的对照是本节的教学重点。

**低秩近似 × 跨阵列非目标估计：** 低秩近似指用少量基表示目标语谱的常规做法，分工是刻画目标在多阵列间的共现谱结构；跨阵列非目标估计指用其他阵列已分离出的非目标通道方差来解释本阵列目标方向上的残留干扰，分工是直接建模干扰来源；搭配比较的意义在于前者依赖语音可低秩表示的假设而语音结构复杂时建模不足，后者绕开对目标精细建模，转而利用空间视角差异更直接地估计干扰，从而降低对基个数的依赖。

在得到方差估计后，提取操作是多通道维纳滤波器。它用目标空间成分占总协方差的比例对观测加权，公式含义是目标方差乘以目标空间向量再经总协方差逆映射到观测，等价地可写成对分离信号向量的加权形式，权重分母包含目标方差加跨阵列干扰解释项。最终每个阵列得到一路目标源像估计，再跨阵列同步平均。这种做法的优点是不需要为目标语谱学习大量基，复杂度只与阵列数与麦克风数有关；代价是依赖 SF 提供的非目标估计质量与阵列间视角差异，若所有阵列看来目标与干扰都重叠，则跨阵列解释也缺乏依据。

### 目标方差与非目标方差在优化中如何相互制约？

目标方差与非目标方差的含义与制约关系决定了迭代行为，下面集中说明。

**目标方差 × 非目标方差：** 目标方差描述目标语音在每个时频点能量的时变强度，非目标方差描述各阵列各通道干扰与噪声的时变强度；两者共同决定观测协方差矩阵中目标项与干扰项的比例，搭配理由是多通道维纳滤波器的权重本质上是目标能量占总能量的比例，只有同时估计准两者才能既保留目标又压制同向干扰，组合后输出的时频掩蔽式增益即由该比例计算得到。

论文把代价函数写成观测的负对数似然加目标方差先验项，展开后包含目标通道能量除以总方差、对数总方差、各非目标通道能量除以各自方差与对数方差，以及空间基行列式与逆伽马先验项。由于总方差中同时出现目标方差与跨阵列加权非目标方差，直接最小化是困难的，论文采用主化等距算法，英文为 majorization-equalization，后文简称 ME 算法，通过詹森不等式与凹函数切线不等式构造辅助函数。

辅助函数引入若干辅助变量，满足特定等式时与原代价相等，形式上化为关于各优化变量的线性项与倒数项之和，从而可以推导闭式更新。
更新规则按目标方差、非目标方差、耦合系数的顺序交替进行，每次更新后重算中间变量即总方差估计。

目标方差更新同时利用各阵列目标通道能量与先验参数，非目标方差更新同时利用本阵列对应通道能量与其他阵列目标通道经耦合系数加权后的能量，耦合系数更新则比较本阵列目标通道能量与提供解释的阵列非目标能量之间的匹配程度。论文把 PF 迭代次数设为 20，SF 的 GC-ILRMA 迭代为 100，常规方法 PF 迭代为 100，这一设置在比较计算量时需要一并记住。

### 没有神经网络训练时，什么在迭代，什么被固定？

本研究没有训练神经网络，也没有学习可迁移的权重，必须明确说明以免误解为端到端训练。真实计算过程是两类逐样本优化：SF 阶段用 GC-ILRMA 迭代估计解混矩阵与源模型，PF 阶段用 ME 算法迭代估计目标方差、非目标方差与跨阵列耦合系数。论文明确报告了基个数、迭代次数与初始化方式，但未报告基于梯度的反向传播路径，因为更新是闭式乘性更新而非梯度下降，也未报告早停或学习率等概念。
逆伽马先验与稀疏性的关系是本节需要讲清的唯一学习型机制。

**逆伽马分布 × 稀疏性：** 逆伽马分布在此处是加在目标方差上的先验分布，分工是通过形状参数与尺度参数控制目标方差的取值偏好；稀疏性指语音在时频面上只有部分点显著有能量的性质，搭配原因是逆伽马先验能在优化目标中对持续激活的目标方差施加惩罚从而诱导稀疏解，组合意义是让后置滤波更倾向于把能量判给干扰而非目标，有助于提升干扰抑制但过强时会损伤目标本身。

具体冻结与更新安排按证据交代：目标方向先验转向向量按自由场传播加距离衰减计算并用于构造 GC-ILRMA 的空间先验与解混矩阵初值，目标通道索引固定为最后一个通道；PF 阶段尺度参数固定为极小值，形状参数取多个离散值做对照并另设无先验消融；NMF 与 NTF 的基与激活用均匀随机初始化并用 10 个随机种子评估初始化依赖。

论文未报告的内容也要指出：未说明 ME 辅助变量的阻尼或数值下限，未说明同步平均前是否做相位对齐之外的幅度归一化，未报告每次迭代的收敛曲线。因此不能从方法名称推定其对所有混响都单调收敛，也不能把无训练等同于输出确定，因为随机初始化与仿真房间仍会带来方差。

### 实验测什么条件：房间、阵列、混合与评价如何构造？

实验要回答的问题是：在目标与干扰同向导致单阵列难分的条件下，新方法是否比依赖低秩的常规方法提取更准，且代价是否更低。比较对象是实际可运行的 3 种策略：常规 NMF 声点形成、常规 NTF 声点形成与本文方法，全部在 SF 阶段使用相同的 GC-ILRMA，保证差异来自 PF 阶段。评价指标方向是越高越好，包括源失真比、源干扰比、语音质量感知评价与短时客观可懂度，英文分别为 SDR、SIR、PESQ、STOI，后文用缩写。指标先按每个阵列用对应参考信号计算，再跨阵列平均得到每样本分数。

下表提出本实验的公平条件问题：在什么房间与阵列配置下比较，混合如何生成以保留残留异步。表前需要说明比较问题、公平条件与指标方向，表中条件必须与方法对照绑定。

| 配置项 | 取值一 | 取值二 | 阵列与信号设置 | 分析用途 |
| --- | --- | --- | --- | --- |
| 每阵列麦克风数 | 3 个 | 4 个 | 间距 2.83 厘米，采样率 16 千赫 | 检验通道数影响 |
| 语音与混合 | JVS 数据集 100 个目标说话人 | 每目标配 3 个干扰说话人 | 5 秒干声卷积图像法房间脉冲响应后等功率混合 | 保证多干扰与可重复混合 |
| 时频与先验 | 64 毫秒汉恩窗 32 毫秒移位 | 目标通道取末通道 | 自由场转向向量加距离衰减做先验 | 固定 SF 对应关系 |

表后解释必须说明主要收益与代价。

表中 4 种组合形成 4 种情形：情形一与情形三为近无混响分别配 3 与 4 麦克风，情形二与情形四为 200 毫秒混响分别配 3 与 4 麦克风。每样本做 100 个混合，NMF 与 NTF 变量用 10 个随机种子评估初始化依赖，共 1000 个分数取均值与标准差。残留异步通过对每阵列源像施加至多 10 个采样的随机时移模拟，这对跨阵列共现假设是更严格的考验。未评测的边界包括移动说话人、真实录音房间与阵列时钟漂移长期累积，这些限制了向实际部署的直接推广。

### 主结果显示什么：在哪些指标上超过了可运行基线？

主结果比较的问题是：在相同 SF 与相同混合下，仅改变 PF 估计方式能否提升提取质量。公平条件是三方法共享 GC-ILRMA 输出，常规方法 PF 基个数按已有报告取 NMF 为 50、NTF 为 300，本文方法 PF 迭代 20 次。指标方向均为越高越好，但 SDR 更反映总体失真，SIR 更反映干扰抑制，PESQ 与 STOI 更反映感知质量与可懂度，需要分开解读而不能只看单一指标。

| 方法 | SDR [dB] | SIR [dB] | PESQ | STOI [%] |
| --- | --- | --- | --- | --- |
| 输入混合 | 0.13 ± 0.12 | 0.13 ± 0.12 | 1.10 ± 0.05 | 53.12 ± 6.21 |
| 常规 NMF 方法 | 15.79 ± 0.53 | 18.89 ± 0.78 | 1.96 ± 0.25 | 89.80 ± 3.13 |
| 常规 NTF 方法 | 16.88 ± 1.78 | 29.79 ± 2.38 | 3.06 ± 0.28 | 94.74 ± 2.40 |
| 本文方法无先验 | 22.68 ± 1.62 | 29.91 ± 2.35 | 3.23 ± 0.32 | 97.57 ± 1.60 |

上表对应每阵列 3 麦克风、近无混响的情形一，数字为跨样本均值加减标准差。

表后解释是：无先验版本在 SDR、PESQ、STOI 上取得该表最高，分别超过 NTF 基线约 5.8 分贝、0.17 分与约 2.8 个百分点，报告显示新方法能更准确提取目标；但 SIR 最高是带先验版本而非无先验版本，说明稀疏先验有助于压制干扰却可能损伤目标本身。未胜出项必须指出：在该表 SIR 上无先验版本略低于带先验版本，在混响情形二中无先验版本的 SIR 明显低于 NTF 基线，表明干扰抑制优势并不在所有条件下成立。

总体趋势不等于每组都成立，混响会显著拉低所有方法的绝对分数，这是解读时不可忽略的适用条件。

### 增加麦克风与加入混响后，结论还成立吗？

第二个结果问题是：把每阵列麦克风从 3 增至 4，并把混响从近零增至 200 毫秒，优势是否保持。公平条件与上一节相同，只是阵列配置与房间改变，比较对象仍是实际可运行的 NMF、NTF 与本文方法不同先验强度。指标方向不变，仍需同时看失真与干扰抑制。

| 方法 | SDR [dB] | SIR [dB] | PESQ | STOI [%] |
| --- | --- | --- | --- | --- |
| 输入混合 | 0.13 ± 0.12 | 0.13 ± 0.13 | 1.10 ± 0.04 | 53.10 ± 6.21 |
| 常规 NMF 方法 | 15.91 ± 0.70 | 19.25 ± 0.82 | 1.97 ± 0.25 | 90.00 ± 3.06 |
| 常规 NTF 方法 | 16.72 ± 2.00 | 29.97 ± 2.45 | 3.05 ± 0.30 | 94.61 ± 2.46 |
| 本文方法无先验 | 22.85 ± 1.61 | 30.39 ± 2.19 | 3.27 ± 0.29 | 97.66 ± 1.43 |

上表对应每阵列 4 麦克风、近无混响的情形三。

表后解释是：在该更有利的空间自由度下，无先验版本依然在 SDR、PESQ、STOI 上领先，SIR 则以带先验版本最高，模式与情形一一致，支持跨阵列非目标估计在低混响下稳定有效。论文同时报告在 200 毫秒混响的情形二与情形四中，所有方法绝对分数大幅下降，例如情形二无先验版本 SDR 仅约 8.13 分贝，但仍高于 NTF 的约 7.47 分贝，而 SIR 则被 NTF 与带先验版本超过。具体代价是：混响破坏了时不变空间基假设，解混矩阵的逆不再准确表示传播特性，跨阵列解释的线性组合也会失配。

未评测边界是更长混响与真实房间脉冲响应，因此不能把近无混响的最强证据推广为所有房间都成立。

### 先验强度如何改变抑制与失真的权衡？

消融要回答的问题是：逆伽马先验的形状参数是否必要，不同强度带来什么变化。比较条件是固定其他设置，仅把形状参数取 1、0.1、0.01、0.001 并增设无先验版本。指标方向仍是越高越好，但需要把 SIR 的提升与 SDR、PESQ、STOI 的变化对照起来看。
论文报告显示带先验版本倾向于获得更高 SIR，无先验版本倾向于获得更高 SDR、PESQ 与 STOI。以情形一为例，形状参数 0.01 的 SIR 高于无先验版本，而 SDR 则低约 4 分贝。

形状参数取 1 时 SDR 进一步降至约 15.73 分贝，甚至低于常规 NTF，PESQ 与 STOI 也明显下降。论文对此的有限解释是：先验通过诱导目标方差稀疏有效压制非目标，但过大强度会过度强制稀疏从而衰减目标本身并引入失真，这属于支持该机制的解释而非因果证明。
复现时应注意的细节是：尺度参数固定为极小值，形状参数的搜索范围跨越 3 个数量级，不同混响与麦克风数下最优权衡点可能不同，不能默认 0.01 在所有场景最优。

未验证的推测是先验是否对不同性别或语速说话人有系统偏差，原文未按说话人属性分解结果，因此不应声称该权衡对所有语音一致成立。

### 哪些条件未被证明，哪些代价没有测量？

首先是建模假设的边界。方法假设观测服从复高斯、空间特性时不变、目标方向已知且 SF 能稳定分离非目标通道。在 200 毫秒混响下性能已明显下降，说明时不变与自由场先验在混响中失配；若目标位置误差较大或说话人移动，几何约束可能把错误通道当作目标，后续跨阵列解释会建立在错误基础上。论文未报告位置误差鲁棒性曲线，这是明确的缺项而非技术错误。

其次是计算与部署代价的边界。论文用每迭代算术操作数近似复杂度：本文方法约为阵列数平方乘麦克风数乘时频点数，常规方法正比于基个数乘阵列与时频规模。由于常规方法需要数十至数百基才能保证性能，而阵列与麦克风数通常远小于基数，论文据此认为新方法计算成本显著更低。但原文未测量实际运行时间、内存占用、输出帧率与端到端延迟，也未在嵌入式硬件上验证，因此不能承诺延迟与功耗得到改善，训练资源与推理开销需要分开讨论。

最后是评价的边界。指标均为客观自动指标，没有主观听音评价；百分点与相对百分比含义不同，STOI 百分点的提升不能直接换算为可懂词数的相对提升；同步平均假设残留异步较小，若分布式阵列时钟漂移大，平均本身会引入梳状失真。相关性不等于因果，分数领先支持方法有效，但未测量误判率与失败样本分布，不能排除少数样本上常规方法更好的可能。

### 复现先做什么：数据、仿真与参数如何固定？

复现的第一步是固定数据与仿真。按原文用 JVS 数据集中 100 个目标说话人，每目标随机选 3 个干扰说话人，每说话人拼接多个话语成 5 秒干声，再用图像法房间脉冲响应卷积生成源像。房间布局按原文图示布置 3 个阵列，混响分近零与 200 毫秒两档，每阵列 3 或 4 麦克风、间距 2.83 厘米、采样率 16 千赫、64 毫秒汉恩窗 32 毫秒移位。对每阵列源像施加至多 10 个采样的随机时移以模拟粗同步后的残留异步，再按全阵列全麦克风平均功率等功率混合，总计每种情形 100 个样本。
第二步是固定 2 阶段参数。

SF 用 GC-ILRMA，基个数 10，迭代 100 次，解混矩阵初值由目标先验转向向量与其正交补构造，目标通道固定为末通道，先验转向向量按自由场加距离衰减计算。PF 中常规 NMF 基 50、NTF 基 300、迭代 100 次，本文方法迭代 20 次，目标方差初值为各阵列目标通道能量平均，非目标方差初值为对应通道能量，耦合系数跨阵列非目标位置初值为均匀值。逆伽马尺度参数固定为极小值，形状参数扫描 1 至 0.001 并保留无先验对照，NMF 与 NTF 变量用均匀随机初始化并跑 10 个种子。
第三步是固定评价。

SDR、SIR、PESQ、STOI 先按每阵列对应参考计算再跨阵列平均，每样本多种子结果汇总为均值与标准差。资源状态必须如实说明：本次未发现来源绑定且完成验证的代码、模型或数据资源，因此不得声称代码已公开，复现需按上述文字自行实现仿真与优化。若要验证计算成本主张，应补测同硬件下的单次迭代耗时与总耗时，而不仅比较复杂度量级。

### 何时值得尝试这种跨阵列后置滤波，还需补哪项验证？

当任务满足 3 个信息条件时值得尝试：目标位置大致已知，至少有两个视角差异明显的阵列，且干扰在某个阵列看来与目标同向而在另一阵列可分。此时沿用普通波束形成加低秩后置滤波会同时遇到建模失配与基个数膨胀，而本文方法用其他阵列的非目标通道直接解释残留干扰，复杂度只随阵列与麦克风规模变化，更适合阵列数固定、时频点多的场景。

反之，若所有阵列视角都重叠、混响很长或目标位置误差大，则跨阵列解释缺乏依据，应优先改善定位与同步而非更换后置滤波。
常见的特有误解需要澄清：一是把无训练误认为确定性求解，实际上 SF 与 PF 都是逐样本迭代优化，随机初始化与仿真房间都会带来方差；二是将 SIR 高误认为整体最好，实际上强稀疏先验可能以损伤目标为代价换取干扰抑制，需要同时看 SDR、PESQ 与 STOI；三是把复杂度量级低误认为延迟一定低，实际延迟还取决于迭代次数、实现优化与硬件，必须实测。

还需补的验证包括位置误差鲁棒性、真实房间录音、移动声源、主观听音，以及实际耗时与内存测量。只有在这些条件下仍保持优势，才能支持向可部署系统的判断。目前的证据支持的是：在受控仿真、已知位置、轻混响与多视角条件下，跨阵列非目标估计是一种比直接依赖低秩更有效且更省基的后置滤波选择。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=3)

[![原文数学表达区域 12，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=4)

[![原文数学表达区域 13，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=4)

[![原文数学表达区域 14，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=5)

[![原文数学表达区域 15，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bb7fab9af3b1/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf#page=5)

另有 30 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
