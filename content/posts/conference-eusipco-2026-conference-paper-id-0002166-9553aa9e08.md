---
title: "SPMuS-L2.5: INLIER MAXIMIZATION FOR ROBUST DIRECTION-OF-ARRIVAL ESTIMATION IN AD-HOC MICROPHONE NETWORKS"
date: 2026-09-13
draft: false
description: "针对特设麦克风网络中到达时差含大量离群点时方向估计易陷入局部极小的问题，该文把估计写成内点数最大化并用两点临界点枚举保证全局最优，在合成数据上 80% 离群率下仍保持可用、在 13 段室外无人机实录上优于离散化与最小二乘，代价是计算量随测量数平方增长且依赖内点界的选取。"
tags: ["信号处理", "鲁棒性", "麦克风阵列", "声源定位"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0002166"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "7e1a60f30c50428495fb01955aae4bc0cbbdce7b15eab5b2fb5c48ea55752351"
paper_digest_api_reader_plan_sha256: "a544055e8041bdd10d7b94c69c5dab40fc7b9ce01cf1e6fe20626f8184c48c6b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2ed6ec314cdbb7cdb909fbb38c4b4d85afe1d2b1399d80411888cbef3b209660"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6555333210df3021a3b0ae291a821a61c9bbadfcc4467372ec4e950e4362c51e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3c050b3d4eb25c66c30eb246bdbb81b75dcb8a43d07722b126ad628ee7ba8239"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "09d48a7d5309950dfad5e6fc3151b0e4d5a69491121c9126a9ee78aa155f4759"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"task","id":"task.localization","label":"声源定位"}]
paper_digest_primary_task: "声源定位"
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 在离群点占多数时仍要全局最优：用内点最大化做远场声源方向估计

> 英文题目：*SPMuS-L2.5: INLIER MAXIMIZATION FOR ROBUST DIRECTION-OF-ARRIVAL ESTIMATION IN AD-HOC MICROPHONE NETWORKS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0002166`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf)

标签：#信号处理 #鲁棒性 #麦克风阵列 #声源定位

评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Flood, Gabrielle：机构信息未能从会议 PDF 纯文本可靠映射
- Åström, Kalle：机构信息未能从会议 PDF 纯文本可靠映射
- Oskarsson, Magnus：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文处理特设麦克风网络中基于到达时延差测量的远场声源到达方向估计，输入为多对麦克风时延测量与已知相对几何，输出为单位球面上的方向向量，难点在于测量含大量离群点且单位球约束使损失非凸多极值。先以时延残差与方向向量的远场平面波线性关系为输入，将估计转化为残差平方多项式约束与阈值判定的内点最大化问题，输出含多项式目标与球面等式约束的优化形式，该形式作为下一步枚举的求解对象。再以该多项式优化形式为输入，利用内点最大化理论推导两点子集决定的Karush-Kuhn-Tucker临界点条件并有限枚举候选解，输出全部临界点集合，该集合直接进入逐个计数选优。最后以临界点集合为输入，逐个统计满足阈值界限的内点数目并选取数目最多者，输出其对应的全局最优方向向量。与依赖离散网格搜索的已有鲁棒方法不同，该机制用连续代数求解替代网格折中，因而在细网格下保持全局性并降低计算量。在合成TDOA离群点鲁棒性场景下，提出方法的容忍离群率指标为80%，高于离散化方法的容忍离群率指标50%。结论的适用边界仅限远场平面波成立且内点阈值可合理设定的情形，近场与强混响下的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://gabrielleflood.github.io/doa-inlier-maximization> → <https://gabrielleflood.github.io/doa-inlier-maximization/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://vision.maths.lth.se/drone> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：特设网络要解决什么定位问题？

这篇论文处理的是声音到达方向估计。想象户外有若干麦克风随意摆放，但彼此相对位置已知，远处有一架无人机发出声音，研究者想知道声音从哪个方向来。做法分两步，先从录音里估计每对麦克风的到达时差，也就是同一声音到达两个麦克风的时间差，再由这些时差反推方向。论文聚焦第二步，即给定一组时差测量求方向。难点在于真实录音里混响和干扰会产生大量错误的时差，即离群点，而麦克风数量又少，传统最小二乘会被少数大误差拖偏。

远场假设是全文的前提，它认为声源很远、阵列很小，声波到达阵列时波前近似为平面，于是方向可以用单位球面上的一个向量表示，或等价写成方位角和俯仰角。论文的输入是每对麦克风的时差估计值和对应的麦克风间距向量，输出是单位方向向量。官方代码当前可用，数据集链接当前不可用，这是复现时必须先确认的信息条件。

### 已有路线为什么不够：局部优化与网格各缺什么？

按论文梳理，已有路线大致有 3 类。第一类是先启发式初始化再迭代精化，例如若干非线性最小二乘变体，它们一般只保证收敛到局部极小，对初值敏感。第二类是随机采样一致性及其变体，能抑制离群点影响，但即使穷举采样也不保证全局最优。第 3 类是把方位角和俯仰角离散化成网格，逐格比较预测时差与测量时差，用中位数绝对误差选最优格，这种方法有一定鲁棒性，但网格越细计算越重，而且最优解可能落在网格之间。

学习类方法被明确指出多在特定阵列上训练，换到一般的特设阵列泛化差，有的还要求阵元间距小或只对特定声音有效。论文把比较基准定为最小二乘、离散化方法和波束形成类的导向响应功率实现，目的是在同一时差或同一录音条件下比较鲁棒性与速度。

**离散化搜索 × 连续求解：** 离散化搜索把方位角和俯仰角按固定网格采样再比对时差；连续求解直接在单位球面上解方程，分工是前者实现简单但精度受网格限制，后者不受网格限制，组合对照说明本文用连续代数解替代网格是为了同时获得精度与最优性保证。

理解这组对照很关键，因为后文所有速度与精度结论都是相对这 3 条路线而言的，不能直接推广到其他定位体制。

### 问题如何形式化：从时差残差到鲁棒损失？

论文先写出精确时差模型，即声源到两麦克风距离差除以声速，再在远场下写成方向向量与麦克风间距向量内积除以声速。对第 i 对测量，定义残差为模型预测时差减去测量时差。理想情况下残差只有测量噪声，若假设独立同分布高斯噪声，负对数似然对应平方损失，即最小二乘问题，还要满足方向向量模长为 1 的约束。

作者指出该约束问题可用拉格朗日乘子写出平稳条件，消去方向后得到关于乘子的 2 次多项式，可闭式求出两个平稳点再比优，这在纯噪声下表现好。鲁棒化则是把损失换成截断形式，论文采用的 0-1 形式是残差绝对值小于界则损失为 0，否则为 1，等价于最大化界内测量即内点的个数。内点界直接对应允许的误差上限，原文常按噪声水平设置。

**到达时差 × 到达方向：** 到达时差是两麦克风接收同一声波的时间差测量，是输入观测；到达方向是远场假设下指向声源的单位向量，是待求参数，二者通过麦克风间距向量在声源方向上的投影除以声速联系起来，组合意义是由多组时差反推唯一方向。

沿一个样本走一遍有助于建立依赖关系：输入是 1 对间距向量与一个时差数，表示是预测时差公式，组件是残差与损失，目标是让尽可能多的残差落入界内，输出是一个单位向量。后续所有求解器都是为这个目标服务的。

### 方法全景是什么：为什么枚举边界就能全局最优？

核心思想来自内点最大化的多项式优化理论。论文把 0-1 损失问题重写成带辅助变量的约束形式，内点约束写成残差平方减界平方小于等于零的多项式不等式，单位球约束写成等式约束。理论结论是，最优内点数组合一定出现在临界点处，临界点本质是卡鲁什库恩塔克条件决定的边界交点，这些交点把解空间划分成内点组合不同的区域。

对维度为 2 的方向流形，只需枚举至多 2 个数据点的子集，令其不等式取等号求解，再统计每个候选解的内点数，最优解必在其中，复杂度为测量数的多项式量级。直观理解是，连续移动方向时，内点集合只在某个测量刚好压到界上时发生变化，因此检查所有压线情况即可覆盖所有可能的最优组合。论文强调这是多项式时间且保证全局最优，与随机采样和网格搜索形成区别。

**临界点枚举 × 全局最优：** 临界点枚举指对所有两点子集求解边界等式得到候选方向；全局最优指在所有可行方向中内点数最多的解，分工是前者提供有限完备的候选集合，后者是优化判据，搭配理由是内点与离群组合只在边界处变化，因此检查边界交点即可不漏掉最优组合。

全景动作可复述为：收集所有时差对，设定内点界，对每两个测量解边界方程得候选方向，逐个计数内点并保留最多者。

### 求解器具体算什么：两线性加一二次如何闭式求解？

落到本问题，参数维度为 2，嵌入在 3 维空间，嵌入约束是模长为 1，需要两个活动约束。论文把每个内点约束写成方向与间距内积除以声速减测量时差的平方减界平方等于零，再联立模长约束。对选定的两个测量，绝对值展开后每个方程带正负号，得到两个线性方程加一个 2 次方程。

具体动作是，对正负号的 4 种组合分别求解，先由两个线性方程解出方向向量的线性表达，再代入 2 次约束得到一元 2 次方程，用求根公式得到至多两个解，因此每对测量、每种符号组合至多 8 个候选，全文表述为共需检查 8 倍测量数平方量级的候选。对每个候选计算其内点数，保留最大者。论文还指出求解器对时差和麦克风相对位置是线性的，在加性噪声模型下两者误差传播类似，因此合成实验中对时差的噪声敏感性分析可类比到阵形标定误差。

**最小二乘 × 内点最大化：** 最小二乘把所有残差平方求和最小化，对高斯噪声有效但会被离群点拖偏；内点最大化只计数残差落在界内的测量个数，对离群点不敏感，二者搭配的原因是前者说明噪声下的基准行为，后者提供鲁棒目标，组合后求解器先保证内点最多再在其中考虑精度。

### 远场假设在何处被使用：线性化带来什么代价？

远场假设只在第二式中被使用，即把距离差替换为投影。它的好处是时差关于方向线性，使边界方程成为线性方程，保证闭式求解可行。代价是声源不够远时模型本身有偏，再鲁棒的计数也只能拟合一个近似模型。论文专门用仿真检验该假设何时成立，做法是固定其他条件，只改变声源到阵列的距离，观察成功率何时趋于平稳。

结果显示内点最大化和离散化方法在约 30 到 40 米后趋稳，而最小二乘要到 60 到 100 米才稳定，这支持了鲁棒方法对模型近似误差也有一定容忍，但不能理解为近场同样适用。实录中无人机距离在 15 到 120 米之间，阵内间距约 2 米，最近点对应高俯仰角，作者认为远场近似在该数据上基本成立。

**远场近似 × 平面波前：** 远场近似指声源距离远大于麦克风阵列孔径时的几何假设；平面波前是该假设下的波形简化，把球面波看成平面，分工是前者给出适用条件，后者给出线性化时差公式，组合后方向才能用单一单位向量表示。

### 有无训练阶段：本研究实际计算了什么？

本研究没有训练神经网络，也没有学习权重更新、梯度反传、训练集划分与早停等环节，不能把无训练等同于确定性求解。实际计算分为两类，一是推理侧的组合优化，即按上述枚举求解候选方向并计数，二是调用外部已有模块得到时差，例如合成数据直接按真值加高斯噪声和均匀离群构造测量，实录数据沿用原无人机论文的方法分段估计时差。

论文还做了一个内点界标定实验，对同一仿真实例扫不同界，对每个估计结果用 Lilliefors 复合正态性检验判断内点残差是否服从正态分布，以此反推合理的界，但这属于超参数选择，不是模型训练。未报告的内容包括时差估计器的内部参数更新细节和波束形成基线的内部优化路径，解读时应明确标为缺项，不从方法名称推定实现。

### 合成实验如何搭建：阵列、声源与干扰如何控制？

合成实验的教学价值在于变量可控。作者生成 10 个麦克风的随机位置，横纵坐标取在正负 1 到 2 米的方形环带，高度在正负 0.5 米内，声源按线性约束随机布置在远处，保证远场条件。每种阵形仿真 100 个声源位置，共 100 种阵形，总计 10000 次独立估计，每次单独求方向，最后取中位数汇报，这是聚合口径，必须与单次成功率区分开。干扰分 3 类单独研究，一是纯高斯噪声，标准差从 0 扫到 3 毫秒，对应 0 到 1 米的距离误差，方便直观理解。

二是固定噪声加不同比例离群，离群为按测量均值幅度放大的均匀随机数；三是改变声源距离检验远场。对比条件固定为最小二乘、0.5 度网格的离散化方法，以及固定界和随噪声调整界的内点最大化两个版本，其中随噪声版本把界设为 0.01 加噪声标准差。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 2 | 1 | 0.5 | — |
| 来源句二 | 2168 | 1 | 10 | 0.8；0.6；5；0.4；0；0.2 |
| 来源句三 | 0 | 3 ms | — | — |
| 来源句四 | 0.1 | 1416 | 2008 | — |

该表把合成实验的配置口径集中整理，阵形数量与每阵形声源数量共同决定 10000 次仿真的统计基数，中位数汇报口径与单次估计相互区分，噪声扫参区间与离群构造方式为后文按噪声、离群比例和距离展开的比较提供一致前提，固定界与随噪声调整界的两种取法使方法间比较保持在相同评价基准上。

### 真实实验如何搭建：录音、分段与基线网格是什么？

真实验证使用 Ljungbyhed 室外无人机数据集，共 13 段飞行录音，12 个麦克风已知位置，彼此相距 0.5 到 2 米，声源较远。处理动作是把声音切成 0.1 秒短段，段内假设无人机静止，每段估计时差后再估计方向。离散化基线用 0.5 度网格，比原论文更细，内点最大化用 0.1 米界并滤除地面以下检测，导向响应功率基线直接用原始声音输入、1 度网格，因计算太慢而网格较粗。评价指标是方位与俯仰误差小于 5 度、10 度、15 度的中位成功率，方向误差用真值与估计向量的内积反余弦计算。

运行时间取 13 段录音的中位数，序列时长约 500 秒量级。需要提醒的是，该数据集链接在本次证据中不可达，因此外部复现需先解决数据获取问题，不能默认已公开可下。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 0.5–2 m | — | — | — |
| 来源句二 | 0.1 s | — | — | — |
| 来源句三 | 10 | 0.1 | 0.2 | 0.3；0.4；0.5 |
| 来源句四 | 0.1 m | 1416 | 2008 | — |

该表仅整理本次证据中可逐字重放的配置与刻度数值，单位与精度均沿用原文写法，末尾单位覆盖整组的写法予以保留，裸值不自行追加单位；后续成功率与耗时的比较仍以原表数值为准，配置差异用于解释鲁棒性与远场近似的边界。

### 主结果显示什么：噪声、离群与距离的三组对照？

噪声实验报告显示，最小二乘随噪声增加表现稳定，符合其高斯假设，而固定界的内点最大化对噪声较敏感，把界按噪声水平调整后则比离散化更鲁棒，这说明界的选择是精度开关。离群实验报告显示，最小二乘在 10% 离群时即失效，离散化在 50% 后下降，内点最大化在 80% 离群率下仍 fairly well，原文称此时 97% 的离群被正确检出。距离实验报告显示，无噪声和 0.2 米噪声两条曲线下，内点最大化与离散化在 30 到 40 米后成功率趋平，最小二乘需更远才稳定。

实录结果报告显示，在 5 度、10 度、15 度 3 个误差界下，内点最大化均优于离散化，导向响应功率仅在较大误差界下优于最小二乘但仍不好，且慢几个数量级，最小二乘中位耗时最短但失败率高。计算成本上，论文用计时图说明网格法随网格变细快速变慢，内点最大化随麦克风数增长，12 个麦克风约对应 1 度网格的耗时，6 个麦克风约对应 7 度网格，因此方法定位是少麦克风、多离群场景。

### 哪些细节支撑主结论：界标定与耗时如何变化？

论文特有的两类细节值得单独展开。一是内点界标定实验，在 100 个声源、20% 离群、不同噪声标准差的仿真上扫界，再用正态性检验选界，结果显示估计出的最优界随噪声标准差单调变化，在 1.5 倍、西格玛、2.5 倍、3.5 倍标准差参考线附近能给出合理值，这支持了用部分数据标定界的可行性，但仅在该仿真条件下验证，不能推广为通用选界公式。

二是耗时对比实验，横轴分别为网格宽度与麦克风数，纵轴为执行时间，结论是网格法与网格宽度强相关，内点最大化与网格无关而与麦克风数相关，这解释了为何在少麦克风时有速度优势。失败条件方面，论文指出更严格的内点阈值会降低最大成功率，不仅因为离群更多，还因为内点匹配变少，等效于测量噪声变大。重提离群结果时新增的适用条件是，80% 鲁棒性针对的是时差层面的均匀离群，若时差估计器系统性偏置，则计数目标同样会偏。

### 边界与未验证是什么：哪些改善不能承诺？

首先是模型边界，远场平面波假设在近距离不成立，麦克风位置误差与时差误差在线性求解器中传播类似，论文未单独测量阵形标定误差曲线，解读时只能类比而不能引用未报告的数字。其次是超参数边界，内点界需预先知道或标定，固定界在噪声增大时性能下降，自适应界需要能测量噪声水平，标定实验只用了合成数据与 20% 离群，真实混响下的选界仍待验证。

第三是评价边界，实录只覆盖一种室外无人机场景与一种时差估计前端，未测量误检率随阈值的完整曲线，未报告硬件配置下的逐段延迟分解，因此不能承诺延迟或误判率一定改善，总体更快不等于每段都快。相关性不等于因果，例如高俯仰角对应近距离时表现好，论文表述为远场近似仍成立的支持证据，而非俯仰角导致精度高的因果结论。未胜出项也要保留，最小二乘在纯噪声下仍是强基线，网格法在极粗网格下可能更快，这些都是方法选型的真实约束。

### 复现先做什么：代码、数据与参数如何对齐？

复现的第一步是确认资源状态，官方代码页当前可用，应从该页面获取求解器实现，数据集链接当前不可用，需另寻获取方式或先用合成仿真复现主趋势。合成复现可按原文参数搭建，随机阵形按横纵 1 到 2 米环带与高度正负 0.5 米生成，声源按系数区间生成，时差加高斯噪声与均匀离群，内点界先用固定 0.1 米，再试 0.01 加噪声标准差的自适应版本，网格基线用 0.5 度，成功判据取 5 度与 10 度两档，聚合取 10000 次仿真的中位数。

实录复现需对齐分段长度 0.1 秒、离散化 0.5 度、内点界 0.1 米并滤除地面以下、导向响应功率 1 度等细节，否则耗时与成功率不可比。还需补的验证包括真实混响下的选界稳定性、不同时差前端下的离群分布，以及在目标麦克风数下的实际运行时间分解，这些决定了方法是否值得在自己的特设网络中尝试。当场景是少麦克风、离群多、阵形已知且声源较远时，该方法值得优先尝试，当声源可能进入近场或界完全未知时，应先补标定实验再下结论。

### 收束：何时用它，何时不用？

回到中心矛盾，鲁棒性与全局最优往往难以兼得，网格法用离散化换鲁棒却丢了最优性与速度，随机采样换速度却无保证。本文的选择是把方向估计写成多项式约束下的内点计数问题，利用解空间维度为 2 的几何特性，把无限搜索压缩为两点边界枚举，从而在多项式时间内拿到全局最优。最强证据是合成 80% 离群下仍可用与 13 段实录上对离散化的全面超越，主要代价是平方量级的枚举成本与对内点界的依赖。

学习依赖可复述为：时差是输入，方向是输出，远场线性化使求解可行，计数目标提供鲁棒性，枚举提供最优性，界提供噪声与离群的分界。记住最小二乘在干净噪声下仍好、网格粗时仍可能更快，就能在复现时避免把鲁棒方法误当成全场景最优解。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=1)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 16，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 17，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=2)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-20.png)

区域 20 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-21.png)

区域 21 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/295f540d6651/figure-22.png)

区域 22 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf#page=3)

另有 30 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
