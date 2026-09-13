---
title: "ALL-POLE CENTROIDS IN THE WASSERSTEIN METRIC WITH APPLICATIONS TO CLUSTERING OF SPECTRAL DENSITIES"
date: 2026-09-13
draft: false
description: "针对小频移下谱平均被抹糊的问题，该文把熵正则 Wasserstein 重心约束为给定阶数全极点谱，用 Sinkhorn 加反射系数参数化梯度下降求解，在 TIMIT 五音素上以平衡准确率与 F1 略优于非参数重心，但优化非凸只能得到次优平稳点。"
tags: ["信号处理", "语音学与音系", "语音", "音频分类"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0002761"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "017883cf9718aa07597161e3d9c603a3ca811d825d1b0ea635900bda7d14258a"
paper_digest_api_reader_plan_sha256: "85d48f14648fcc3beb6d9547a7969be337ab395d3adb93b9800e48450d072f26"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6e1832a8d689b8a97a239b038eb800dbd4469793f62e6dccc3e32d61eb5c185f"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "52f9c586b6621d2fec7a2b717da1215e1feb8180ff99d2ecd6e47ee0618b0351"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f3e506218cb11d204f5340f396ac074b360a18316cf175646339e9112d687039"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1cc21829f6503971b4c1e589b17aafa223f1823504679216685455e44978404e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"scientific_topic","id":"scientific_topic.phonetics","label":"语音学与音系"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_task: "音频分类"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把谱质心压进全极点模型：用搬运代价对齐频移峰

> 英文题目：*ALL-POLE CENTROIDS IN THE WASSERSTEIN METRIC WITH APPLICATIONS TO CLUSTERING OF SPECTRAL DENSITIES*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0002761`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf)

标签：#信号处理 #语音学与音系 #语音 #音频分类

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Pallewela, Rumeshika：机构信息未能从会议 PDF 纯文本可靠映射
- Elvander, Filip：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

任务输入为多组零均值平稳高斯过程的归一化功率谱密度集合，输出为阶数受限的稳定全极点谱质心，作为该集合的自回归代表谱。难点在于共振峰发生小频移时算术平均会在原位叠加而模糊或分裂尖峰，而非参数最优传输重心随离散网格增大且不具紧凑模型解释。方法先将频率轴均匀离散并以熵正则最优传输代价定义谱间几何距离，用Gibbs核与对数域Sinkhorn迭代求解耦合与对偶势，经零和规范化得到对重心谱的可微梯度方向。再将重心约束到稳定自回归流形，用反射系数加tanh变换保证极点位于单位圆内，经Levinson-Durbin递推与频率采样合成可微谱并归一化。进一步以非参数重心的逆离散傅里叶变换估计自协方差并解Yule-Walker方程得到热启动，配合扰动与随机稳定多起点，用带Armijo线搜索的梯度下降最小化平均熵正则传输代价。与算术平均和KL散度相比，关键差异是先在谱域搬运能量对齐频移再投影到低阶自回归模型，因而兼顾移位鲁棒性与紧凑可解释性。在TIMIT五类音素最近质心分类任务下，KL散度的准确率为0.7068，高于IS的准确率0.6561。该结论适用边界受限于Burg谱特征与男性测试语音的最近质心协议，尚未验证跨语料、噪声与真实聚类指标下的外推。原文未披露训练、推理或部署成本

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：要为一组平稳过程找一个代表谱吗？

本文的输入是一组零均值宽平稳高斯过程的集合，记为包含 K 个过程的集合，每个过程用其功率谱密度刻画。功率谱密度在这里是定义在频率区间上的非负测度，原文进一步假设每个谱是密度形式。目标是为这 K 个谱找一个代表谱，也就是质心。质心的定义是使得到集合中所有谱的平均距离最小的谱，原文用统一权重写出该最小化问题，并指出可以推广到加权平均，但为简单只研究均匀情形。

对刚入门的读者，可以这样理解任务：手里有多段同类声音，每段估计出一条谱线，峰的位置因人而异有小抖动，需要用一条谱概括它们。直接逐点取平均会把一个移动的峰平均成两个矮峰或一个宽峰，这就是后文反复说的抹糊。原文开篇用音素例子说明这一点，两个归一化谱的峰稍有错位，算术平均就模糊了，而传输类平均能保持尖峰。

**功率谱密度 × Wasserstein 距离：** 功率谱密度的分工是把平稳过程的 2 阶统计表示为频率上的非负质量分布，Wasserstein 距离的分工是按频率轴搬运代价比较两个分布，搭配理由是小共振峰偏移应视为近距离搬运而非大幅失配，组合意义是质心通过平移峰来保留尖锐结构而不是原地平均幅度。

本解读的输入是论文原文证据与本次收到的官方原图像素，本次没有收到任何图像像素，因此不描述曲线颜色与坐标细节，只依据正文与图注转述。目标是把方法走通到可复述：距离如何定义、参数如何约束、梯度从哪里来、实验条件如何对齐。必须保留的信息是模型阶数、离散网格、熵正则系数、初始化与多起点策略，以及分类评估的指标口径。输出按学习依赖展开，先讲任务与已有路线，再讲全景与组件计算，最后讲实验与复现边界。

### 已有路线为何不够：逐点距离与参数域平均缺了什么？

原文把常用谱距离分为 3 类。第一类是平方误差距离，原文说它是谱匹配与聚类的标准基线，但它度量的是相同频率点上的幅度差，忽略频率轴几何，小偏移会被过度惩罚。第二类是相对熵散度，原文说它广泛用于分布比较，但不对称且对接近零的值敏感。第 3 类是板仓斋藤散度，原文说它是语音与音频谱建模的经典选择，对谱形状敏感且具尺度不变的侧重，但同样不对称且数值脆弱。它们的共同点是惩罚同一频率上的幅度差异，因此共振峰小移动会被当成大失配，质心容易抹糊或分裂。

另一条路线是参数模型平均，例如对每个谱估计自回归或自回归滑动平均模型，再在参数域平均。原文肯定它的优点是结果保持模型一致且可解释，比逐点谱平均更有意义，但指出它仍然忽略频率轴几何，没有显式刻画峰位移。第三条路线是最优传输重心，原文引用插值、距离矩阵与谱平均方面的工作，认为它能捕捉分布间有意义的对应并处理谱偏移，但得到的重心是非参数的，其表示与存储复杂度依赖离散网格，难以进一步解释分析。

**算术平均 × 最优传输重心：** 算术平均的分工是在固定频率点逐点平均幅度，最优传输重心的分工是先求传输计划再求几何平均，搭配比较的原因是两者都可作集合代表但对频移敏感度不同，组合意义在于揭示逐点平均会抹糊或分裂移动峰而传输重心能沿频率轴对齐质量。

本文的定位是取后两条路线的交集：在谱域做传输，但在代表端约束为 P 阶全极点模型。原文还对比了一项在极点位置之间直接做传输并约束阶数的工作，明确区分本文是先在谱域做传输，再把代表约束为 P 阶自回归模型，从而得到显式阶数、更好可解释性以及与标准信号处理工具的兼容性。

### 问题如何形式化：加了全极点约束的重心是什么？

形式化分两层。第一层是不加参数约束的最优传输质心。原文先引入传输距离，记为两个功率谱之间的最小传输代价，优化变量是乘积空间上的传输计划，约束是两个边际分别等于两个谱，单位质量的搬运单价由地面代价给出。本文选择地面代价为圆上平方距离，即频率差按圆周取模后的平方，在此选择下该距离的平方根可视为 Wasserstein-2 距离。把该距离代入平均距离最小化问题，就得到非参数最优传输重心，原文指出这是一个线性规划，尽管是无穷维的，因为变量是测度。

第二层是本文的核心约束：要求重心必须对应 P 阶自回归模型。原文写出全极点谱的参数形式，由增益与 P 阶三角多项式分母决定，系数为实数，并要求模型稳定，即所有极点严格在单位圆内以保证谱存在。原文强调该约束的价值是紧凑、低维、可解释，能用极点位置编码主共振，且可用经典参数谱估计从短数据稳健估计。但代价是问题不再凸，因为传输距离对增益与自回归系数不是凸的。因此后文的算法只能求次优平稳点，并需要量化次优性。

沿一个样本走一遍有助于建立依赖顺序。输入是 K 条已归一化的离散谱向量，目标是输出一条 P 阶全极点谱。表示层把候选谱表示为无约束向量经反射系数到自回归系数再到谱采样的映射。组件层对当前候选谱与每条目标谱求解熵正则传输问题，得到对偶势并合成为重心梯度。目标层是 K 个熵正则传输代价的平均，输出是多起点梯度下降后保留的最优目标值对应的参数。

### 方法全景：离散化、正则化、参数化三步如何衔接？

全景可分为 3 步。第一步是离散化。原文把频率区间离散为 N 个均匀网格点，每个谱表示为该网格上的非负向量，重心也是同维向量，谱经归一化处理，地面代价矩阵由网格点间的地面代价构成。第二步是熵正则化。原文为获得光滑目标与可扩展求解器，采用熵正则最优传输代价，即在线性代价上加熵项并保持两个边际约束，正则强度由大于零的系数控制，K 条目标谱的熵正则重心定义为平均正则代价的最小化子。

第 3 步是参数化。原文不直接在谱单纯形上优化，而是把候选谱限制为参数映射的像，用梯度下降更新无约束参数，每步经链式法则把谱域梯度传回参数。

**全极点模型 × 最优传输参数重心：** 全极点模型的分工是用增益加 P 个极点参数给出紧凑可解释谱形状，最优传输参数重心的分工是把质心搜索限制在该参数流形上并按传输代价衡量拟合，搭配理由是既要几何感知又要低维存储，组合意义是得到可用 Yule-Walker 或 Burg 工具链继续处理的自回归代表谱。

初始化与多起点是全景中不可省略的一环。因为目标非凸，原文用确定性初始化加多组扰动起点并保留最终平均熵目标最小的解。确定性起点来自非参数重心的逆离散傅里叶变换得到 P 阶滞后内自协方差序列，再解 Yule-Walker 方程得到初始自回归系数与增益，然后经逐步下降递推转为反射系数，再经反双曲正切映射到无约束形状变量。扰动起点包括对该初始化的扰动、反射系数域初始化以及参数空间中高斯型随机稳定初始化。

### 熵正则重心如何计算：对偶与 Sinkhorn 给出什么？

熵正则传输的原始问题是对耦合矩阵最小化线性代价加熵项，约束是行和与列和分别等于重心与目标谱。原文引入每组耦合的对偶势，写出熵重心的对偶形式，其中吉布斯核由地面代价矩阵经负指数得到，指数按元素取，对偶约束要求 K 个关于重心的对偶势平均为零。在最优处，每个耦合具有对角缩放形式，由两个正缩放向量与吉布斯核相乘得到，对偶势与缩放向量之间差一个乘以正则系数的对数关系。

关键性质是可微性。原文指出固定重心与目标谱时，熵正则传输代价对边际可微，其关于重心的梯度由最优对偶势表示，但该表示差一个可加常数。由于重心满足和为一的单纯形约束，小更新必须保持总和不变，因此更新方向各分量之和须为零，这是单纯形上投影或镜像下降 1 阶可行性的要求。原文为固定唯一代表，强制对偶势满足零和约定，即减去均值，再对 K 组取平均作为重心目标的下降方向。

**熵正则 × Sinkhorn 迭代：** 熵正则的分工是在传输目标中加入熵平滑项使目标可微且可扩展求解，Sinkhorn 迭代的分工是在对偶缩放变量上交替更新以求解该平滑问题，搭配原因是正则化后耦合具有对角缩放结构，组合意义是每次迭代都能给出对重心边际可微的对偶势从而为外层参数提供下降方向。

实现上原文用对数域稳定实现 Sinkhorn 不动点迭代，用对数求和指数运算避免溢出。每次外层参数更新前，先为当前候选谱求解与 K 条目标谱的 Sinkhorn 问题，待收敛后固定对偶势，再经参数映射的雅可比回传得到参数梯度。原文明确把该对偶势视为固定后再做反向传播，而不是同时展开 Sinkhorn 迭代的微分。

### 参数映射如何保证稳定：增益与形状怎样分工？

直接优化自回归系数在数值上棘手，因为稳定性约束是非线性的。原文引入 P 加 1 维无约束向量，其中第一个分量决定模型增益，其余 P 个分量经双曲正切映射为反射系数，保证每个反射系数的绝对值小于 1，再经 Levinson-Durbin 递推得到自回归系数，从而按构造保证多项式稳定。增益的设定使参数谱的总积分与目标谱集合的总积分一致。谱形状的构造链是反射系数到自回归系数，再到谱采样，最后归一化，原文指出该链可微，可用反向传播得到映射的雅可比。

参数目标是 K 个目标谱到参数谱的平均熵正则传输代价。在给定参数处，先取重心等于当前参数谱时的谱域梯度，再左乘参数映射雅可比的转置得到参数梯度。更新采用带 Armijo 线搜索的梯度下降，由于反射系数参数化按构造强制稳定，每次迭代都对应稳定的 P 阶自回归模型，线搜索为非凸目标提供稳健下降。原文还提到该质心计算是可微的，并利用多初始化技术处理非凸性。

一个常见误解是把该梯度当成对原始无正则传输距离的梯度。原文实际最小化的是熵正则目标，正则系数同时控制平滑量与求解难度，不能视为零。另一个误解是把 Yule-Walker 初始化当成最终解，原文明确它只是起点，后续仍需最小化传输目标，合成实验中也比较了该初始化、非参数重心与参数重心的平均熵代价随阶数的变化。

### 没有神经网络训练时：本研究的真实计算是什么？

本研究没有训练神经网络权重，因此本节没有反向传播更新网络、没有训练集梯度轮次、没有冻结与解冻层的安排。真实计算是两类数值优化。第一类是非参数熵正则重心的 Sinkhorn 计算，用于提供基线与初始化来源，变量是谱向量与耦合矩阵，约束是边际与单纯形约束，用对数域不动点迭代求解。第二类是参数重心的梯度下降，变量是无约束参数向量，监督来源是 K 条目标谱的平均熵传输代价，梯度路径是 Sinkhorn 收敛后的对偶势经参数映射雅可比回传，更新用 Armijo 线搜索，多起点保留最优目标值。

需要明确指出的缺项是原文未报告学习率初值、线搜索参数、Sinkhorn 停止阈值与最大迭代数、网格点数在语音实验之外的取值，以及多起点的具体个数与随机种子。因此复现时只能按原文给出的结构重建，不能从模型名称推定这些实现细节。原文也未声称该梯度下降收敛到全局最优，只说收敛到次优平稳点符合非凸形式，并可量化次优性。

**反射系数 × Levinson-Durbin 递推：** 反射系数的分工是用绝对值小于 1 的变量保证稳定性，Levinson-Durbin 递推的分工是把反射系数映射为自回归系数再映射为谱，搭配理由是直接优化自回归系数难以处理极点在单位圆内的非线性约束，组合意义是经双曲正切变换后梯度下降全程停留在稳定模型集合内。

调用流程上，每次评估目标都要做 K 次 Sinkhorn 求解，成本随 K 与网格规模增长。原文未给出运行时间与硬件预算，因此不能把参数模型的紧凑性直接等同于更快的单次距离计算，紧凑主要指存储与解释维度降低，而非已测量的延迟改善。

### 实验条件如何对齐：数据、特征与距离口径是什么？

实验分两部分。第一部分是合成验证，用 4 个阶数递增的自回归过程生成数据，原文图示比较了非参数重心、Yule-Walker 初始化与参数重心在阶数从 2 到 10 变化时的平均熵代价，正则系数取为 0.07。该部分用于说明优化收敛到次优平稳点，以及参数重心随阶数变化的行为。由于本次没有收到该图的像素，不转述曲线相对位置，只保留条件：合成阶数范围与正则系数的取值。

第二部分是音素分类任务。原文在 TIMIT 语音库上做 5 音素分类，类别为 s、iy、ae、ih、n。特征用 Burg 法估计功率谱，在 128 点频率网格上提取，Burg 阶数为 10，窗长 200，跳长 100，中间窗 20 毫秒，测试语音与训练数据不相交且具体为男性语音。功率谱按 10 阶自回归建模，因此参数重心的模型阶数设为 10 以保持分类兼容。质心按第二与第三节的方法计算，非参数重心的正则系数取 0.07。

距离口径必须对齐才能公平比较。原文说明基于传输的方法用平均熵代价作为距离度量，其他方法用各自距离。评估指标包括准确率、平衡准确率、F1 与 ROC 曲线下面积，原文解释准确率衡量总体正确性，平衡准确率与 F1 强调每类性能，ROC 曲线下面积度量与阈值无关的可分性。资源状态方面，未发现来源绑定且完成安全协议状态验证的资源，因此不得声称代码、模型或数据已公开，只能按原文交代的数据名与特征参数复现。

下表整理语音分类实验中与可运行性直接相关的配置，数字与单位保留原文写法，条件列为同一组语音实验，比较对象为同一任务下的不同距离策略。表前已提出比较问题：当模型阶数与网格固定时，不同距离口径的分类表现是否一致，公平条件是同一特征与同一质心构造流程，指标方向是四项指标越大越好。

| 条件 | 网格与模型 | 窗与跳 | 正则与阶数 | 比较对象 |
| --- | --- | --- | --- | --- |
| TIMIT 五音素 | 128-bin 频率网格，Burg 阶数 10 | 窗 200，跳 100，中间窗 20 毫秒 | 正则系数 0.07，参数重心阶数 10 | 传输距离与 IS、KL、L2 |

上表说明复现时先做什么：按 128 点网格与 10 阶 Burg 特征重建谱向量，保证测试与训练说话人不相交，再把参数重心阶数固定为 10，正则系数固定为 0.07。代价是每次目标评估需多次 Sinkhorn 求解，原文未报告时间预算，因此未测量延迟与成本的一侧不应承诺收益。未评测边界包括女性语音、其他窗长与网格密度，以及正则系数的敏感性，这些在原文中没有报告，保持待验证。

### 主结果测了什么：在相同特征下谁的平衡性更好？

主结果测量的是测试集上的四项指标，比较对象是实际可运行的 5 种策略：IS、KL、平方误差、非参数传输重心与参数传输重心。条件一致性在于同一 Burg 特征与同一分类流程，差异仅在于质心构造与距离定义。指标方向均为越大越好，其中准确率易被较易类别主导，平衡准确率与 F1 更能反映每音素表现。混淆矩阵进一步显示所有方法对 s 都可靠，困难集中在元音与鼻音，这为理解平衡性差异提供了结构线索。

下表直接采用原文报告的分类性能数字，单位为原文裸值，未追加百分号，精度保留 4 位小数。表前已说明比较问题与公平条件，表后将解释主要收益与具体代价。

| 方法 | 准确率 | 平衡准确率 | F1 | ROC 曲线下面积 |
| --- | --- | --- | --- | --- |
| IS | 0.6561 | 0.6254 | 0.6151 | 0.8503 |
| KL | 0.7068 | 0.6790 | 0.6682 | 0.8766 |
| L2 | 0.6667 | 0.6434 | 0.6256 | 0.7726 |
| OT-BC | 0.7363 | 0.6909 | 0.6859 | 0.8749 |
| OT-P | 0.7342 | 0.6911 | 0.6861 | 0.8776 |

上表显示传输类方法优于传统谱距离，参数重心是最一致的一项。参数重心的平衡准确率、宏 F1 与宏 ROC 曲线下面积为最好，准确率与非参数重心几乎相同。具体看，IS 最低，平方误差次之，KL 在传统方法中较好但仍低于传输类。原文的判断是结合频率轴几何带来更合适的相似性，且平衡准确率与 F1 的提升表明每音素表现更均衡，而不只是易分类别拉高总体准确率。需要补充的限制是原文未报告显著性检验与置信区间，因此不能把小数点后第三位的差异说成统计显著，只能说在本次报告条件下参数重心略优且维度更低。

### 阶数与初始化带来什么变化：参数重心何时接近非参数重心？

原文的合成消融改变参数重心的阶数，从 2 到 10 扫描，观察平均熵代价的变化，并与非参数重心与 Yule-Walker 初始化对比。设计意图是回答两个问题：更高阶是否更接近非参数重心的拟合能力，以及 Yule-Walker 初始化经传输优化后带来多少下降。原文的文字结论是优化收敛到次优平稳点，符合非凸形式的预期。由于没有收到该图像素，不比较曲线的具体高低顺序，只保留可复述的机制：阶数是容量控制旋钮，正则系数固定为 0.07，保留多起点中的最小目标值。

另一个隐含对照是初始化本身。Yule-Walker 解来自非参数重心的自协方差，它在预测误差意义下合理，但在传输几何下未必最优，因此后续梯度下降沿传输梯度调整峰位对齐。原文的多起点还包括扰动初始化与反射系数域初始化，说明单一起点易陷入局部平稳点，需要用最终目标值做选择。该消融不支持拿掉传输项后必然怎样的推断，因为原文没有报告去掉熵项或改用平方误差目标的参数拟合结果。

适用条件是：当目标谱集合内峰位抖动较大且希望质心保持尖峰时，提高阶数可能改善拟合，但会削弱紧凑性。当集合本身平滑或样本充足时，低阶已够，过度提高阶数只增加 Sinkhorn 回传的计算负担。原文未给出阶数选择的交叉验证规则，因此复现时应把阶数当作超参数单独报告。混淆矩阵的趋势也支持这一判断：剩余错误多发生在谱重叠的元音对之间，例如 ae 与 ih，反映其内在相似性而非阶数不足。

### 哪些结论不能下：非凸、正则与未测量项是什么？

第一项限制是非凸性。原文明确计算全极点质心对应模型参数上的非凸优化，用多初始化梯度下降处理，且不能保证收敛到全局最优，只能量化所得质心的次优性。这意味着不同随机起点可能给出不同质心，报告单次运行的数字不足以说明稳定性，复现时应固定种子并报告多起点的目标分布。

第二项限制是熵正则偏差。所有传输计算都是熵正则版本，正则系数取 0.07，该系数同时影响平滑量与数值难度。原文未扫描该系数的敏感性，也未比较无正则距离下的表现，因此不能把正则目标下的优劣直接推广到原始 Wasserstein 距离。合成与语音实验共用同一系数值，其跨任务稳健性待验证。

第三项限制是未测量项。原文未报告训练资源、推理开销、输出帧率与实际延迟，也未测量误判率之外的成本。参数模型的紧凑、低维、可解释是表示层面的性质，有直接报告的维度降低支持，但不等于已测量的更快推理。分类实验仅覆盖男性测试语音与固定窗参数，未评估女性语音、噪声、信道变化与跨库泛化。相关性不等于因果，平衡准确率的提升支持传输几何更合适，但未证明峰对齐是唯一原因。

### 复现先做什么：按什么顺序重建计算链？

先重建特征链。按原文在 TIMIT 上用 Burg 法估计功率谱，网格 128 点，Burg 阶数 10，窗长 200，跳长 100，中间窗 20 毫秒，保证测试与训练说话人不相交，测试侧具体为男性语音。把每条谱归一化为网格上的非负向量，构造地面代价矩阵为圆上平方距离。再重建非参数重心，用对数域 Sinkhorn 求解平均熵正则目标，正则系数取 0.07，作为基线与初始化来源。

再重建参数映射。实现反射系数经双曲正切约束、Levinson-Durbin 递推到自回归系数、再到谱采样与归一化的可微链，用自动微分得到雅可比。初始化按原文做逆离散傅里叶变换到 P 阶自协方差，解 Yule-Walker 方程得初始系数与增益，转为反射系数后经反双曲正切得到无约束初值，再加扰动与随机稳定起点构成多起点集合。外层用带 Armijo 线搜索的梯度下降，每步先收敛 Sinkhorn 再固定对偶势回传，保留最终平均熵目标最小的解。

还需补的验证是 Sinkhorn 停止阈值、最大迭代数、网格点数 N 的完整取值、多起点个数与种子，以及显著性与重复实验的方差。由于未发现来源绑定且完成安全协议状态验证的资源，不得声称代码已公开，一切以原文文字为准重写实现。

### 何时值得尝试这种参数传输质心？

当任务需要为一组谱提供可存储、可解释、可接入标准工具的代表，且集合内存在小频移导致的峰错位时，本文方法值得尝试。典型信号是元音共振峰跨说话人抖动、房间声学中共振轻微偏移、或同一工况下谱峰漂移的监测数据。此时逐点平均会抹糊，非参数传输重心虽能对齐但维度随网格增长，而 P 阶全极点重心给出显式阶数与极点解释。

当数据本身平滑、频移可忽略、或已有充足标注可用判别模型直接分类时，不必引入传输几何，传统距离加简单平均可能已够，且避免多次 Sinkhorn 求解的开销。当稳定性约束严格或需要滑动平均零点时，本文的纯全极点形式不够用，需等待原文提到的自回归滑动平均与多变量扩展。

论文特有的误解需要澄清。第一，参数重心不是对非参数重心的简单拟合后再评价，它是直接最小化到原始目标谱集合的平均传输代价，Yule-Walker 只是起点。第二，紧凑不等于已证明更快，原文只显示用 10 阶参数达到与非参数重心相近的平衡表现，延迟与内存的实测比较缺失。第三，准确率几乎相同不代表没有改进，改进体现在平衡准确率、F1 与难分元音对的对角集中度上，这正是质心任务关心的每类代表质量。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=2)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-20.png)

区域 20 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=3)

[![原文数学表达区域 21，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-21.png)

区域 21 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=4)

[![原文数学表达区域 22，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/1639d579fe2b/figure-22.png)

区域 22 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf#page=4)

另有 24 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
