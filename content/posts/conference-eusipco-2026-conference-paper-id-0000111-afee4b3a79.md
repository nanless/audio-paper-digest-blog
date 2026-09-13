---
title: "JOINT-SPARSE OLS MICROPHONE ARRAY DESIGN FOR FREQUENCY-INVARIANT BEAMFORMING"
date: 2026-09-13
draft: false
description: "问题是在宽带频率不变波束成形中用最少且全频段共用的传声器逼近期望波束，方法是将 OLS 改为联合稀疏逐个选点并加掩蔽与递归实现，最强证据是同心圆阵上 41 个点的 OLS 与 OMP 布局相近且主瓣内近似频率不变，代价是本文只给图示而未报告白噪声增益与指向性的定量数值表。"
tags: ["波束成形", "空间音频", "麦克风阵列", "语音增强"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000111"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "78b99084e2e752a7de96cc28330729439da6948d0912919acadb60b32ea055c7"
paper_digest_api_reader_plan_sha256: "ede5ebfa5d7671c8adbd8f8209fb705cf09802d636f89f7672776ba8b5c5e86b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "04d18a916f578aaa898387bcbfebc45aa76a59da0c84a8525a81a875dd53f55c"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4f87a81b198dc96872f27a00a8062037e85009836e7ba289954a310545f0b746"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f67b066df49c414ca6f6e1324289a793dd251a70e9d3a87c43f33231f70456bf"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "de5734d01fe055a3be580a3538b8cae9518297ea09405f3d95bfd1e56f1dc038"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.beamforming","label":"波束成形"},{"facet":"scientific_topic","id":"scientific_topic.spatial-audio","label":"空间音频"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"task","id":"task.speech-enhancement","label":"语音增强"}]
paper_digest_primary_task: "语音增强"
paper_digest_primary_method: "波束成形"
paper_digest_score: 5.0
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 要在全频段共用同一批传声器：联合稀疏 OLS 如何挑位置又保波束

> 英文题目：*JOINT-SPARSE OLS MICROPHONE ARRAY DESIGN FOR FREQUENCY-INVARIANT BEAMFORMING*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000111`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf)

标签：#波束成形 #空间音频 #麦克风阵列 #语音增强

评分：**5.0/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Buchris, Yaakov：机构信息未能从会议 PDF 纯文本可靠映射
- Amar, Alon：机构信息未能从会议 PDF 纯文本可靠映射
- Cohen, Israel：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文针对宽带频率不变波束成形的稀疏阵列设计，输入为\(M\)个候选位置在\(J\)个频点上的导向字典与期望频率不变方向图，输出为跨全频带共享支撑的稀疏索引集及其各频点频变权向量，难点是高频需密排与低频需大孔径的矛盾需求及白噪声增益与无失真响应约束的耦合。首先以对角掩模矩阵抑制已选元邻域重复选择，其权重直接进入后续选择代价以控制孔径与密度。然后对已选集并上每个候选元求伪逆最小二乘拟合，得到多频拟合残差并经补投影计算加权残差和准则以评估新增原子收益。接着用秩一递归由上一轮补投影高效更新当前补投影，选出最优元后对降维支撑求解约束波束成形问题校验失真响应与主旁瓣误差是否停止，上一轮输出即为下一轮输入。在方位离散为\(2^{\circ}\)的评测设置下，主瓣下边界的角度指标为\(-60^{\circ}\)，低于主瓣上边界的角度指标\(60^{\circ}\)。与逐频正交最小二乘的关键差异是强制全频共享同一支撑并在每次评估时做包含已选集的完全正交投影，与前期联合稀疏正交匹配追踪的关键差异是以最小二乘残差下降代替单步相关匹配做选择，因而更贴合全频拟合误差并保持旋转不变布局。就加权残差之外的波束性能而言，原文未提供可核对的关键定量结果。该结论的适用边界受限于同心圆差分阵几何、三阶超心形期望方向图与\(2^{\circ}\)方位离散等特定设置，尚未验证跨孔径、跨转向角与阵元失配下的外推能力。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：为什么宽带阵列会越做越大？

本文的输入是平面上给定的候选传声器位置集合、感兴趣的频带与方位空间，以及预先定义的期望频率不变波束。输出是一组在全频段共用的稀疏位置下标，以及每个频率上对应这些位置的复权值，使得合成波束在主瓣与旁瓣上都接近期望形状，同时满足无失真响应与白噪声增益等约束。必须保留的信息是候选点总数、频率集合、主瓣与旁瓣划分、期望波束向量、掩蔽矩阵更新规则与停止检验条件，缺少其中任何一项都无法复述选择过程。

对于刚进入语音与音频阵列的研究生，第一个学习依赖是理解高低频对孔径的矛盾要求。高频波长短，要在高频满足波束形状需要密集布点以避免空间混叠；低频波长长，要在低频形成有指向性的波束又需要足够大的阵列孔径。两个要求叠加，直觉做法就是放很多点、布满大面积，结果是硬件通道、同步采集与每帧滤波计算都变重。稀疏设计的目标不是换一种波束形成器，而是先回答用哪几个物理位置就能把事情做完。

第二个依赖是区分窄带选点与宽带共用选点。窄带问题可以在单个频率上独立挑点，但在语音这种宽带任务中，物理阵列一旦固定就不能随频率更换位置，因此所有频率的权向量必须有相同的非零支撑。这就是联合稀疏的由来：稀疏指用的点少，联合指各频率联合共用同一支撑。如果忽略这一点而每个频率各选一套点，仿真误差可能很好看，但做不出可加工的硬件。

### 已有哪些路线：贪心与松弛各解决什么？

原文把稀疏求解分为两条路线。第一条是把精确的稀疏优化用贪心追踪算法逐步求解，例如正交匹配追踪；第二条是把稀疏优化做凸松弛后再求近似解。两条路线都要处理同一个困难：期望波束在全频段相同，因此选择必须跨频率联合进行。原文还回顾了窄带稀疏综合中用到的遗传算法、改进粒子群与生物地理优化，以及宽带稀疏设计与同心圆阵综合的相关工作，说明本文属于贪心路线在宽带频率不变问题上的延续。

本文与作者前期工作的关系需要准确表述。原文报告，此前已发表基于正交匹配追踪的贪心联合稀疏设计，本文是把正交最小二乘改造为联合稀疏版本，作为一种有力的替代方案。两者的共同点是逐轮选点、跨频率共用支撑、并用邻域掩蔽避免选出过近的点；区别在于选择准则。正交匹配追踪更侧重残差相关带来的快速选择，正交最小二乘则在每一候选上都计算加入该点后的完备最小二乘投影误差，因此对布局变化更敏感，但直接实现时计算量更大，这也是后文需要递归实现的原因。

同心圆阵被选为验证几何不是偶然。原文指出这类几何用于视频会议与语音服务设备等需要方位转向的场景，其旋转对称性有助于在改变主瓣指向时保持相近的白噪声增益与指向性。本文的仿真把同心圆候选点与微分阵列的期望波束结合起来，既检验稀疏选择能否在受限几何中找到可行布局，也检验频率不变性是否成立。初学者应把几何、期望波束与选择算法看成 3 个独立变量，不要把同心圆上的结论直接推广到直线阵或矩形阵。

### 任务如何形式化：变量、字典与约束是什么？

先沿一个样本走完链路。取一个频率与一个方位角，阵列输出是该频率权向量与该方位导向向量的内积。把所有离散方位堆成向量，就得到该频率的设计波束；把期望波束在同样方位上采样，就得到目标向量。字典矩阵的每一列对应一个候选传声器在所有方位与该频率上的响应，因此选点等价于从字典中选列，被选列对应的权值非零，未被选列对应的权值为零。

原文的问题形式化包含 4 个部分。目标是最小化全频段权向量的稀疏度量，同时要求设计波束与期望波束的总体偏差小于容限，要求每个频率的白噪声增益不低于给定下界，要求每个频率在期望方向的响应等于 1。白话解释：白噪声增益衡量阵列对各通道独立噪声的抑制能力，值越大越鲁棒；无失真响应保证目标方向信号通过增益为 1，不被波束形成器本身衰减。联合稀疏约束要求把各频率权值按位置排成矩阵后，每一行的能量集中在少数行上，原文用行能量之和的稀疏度量表达这一要求。

主瓣与旁瓣被分开处理是复现时容易忽略的细节。原文允许主瓣用较密或较高精度的离散方向，旁瓣用另一组方向，甚至可以把整个方位空间统一处理。字典因此按主瓣导向矩阵与旁瓣导向矩阵上下堆叠构成。这种划分直接影响拟合误差中主瓣误差容限与旁瓣误差容限的取值，后文停止准则中也会分别检验两部分误差。初学者复述时应先说清方位离散方式，再说字典构造，否则公式中的分块含义无法回指。

### 方法全景：OLS 被改了哪里？

标准正交最小二乘若直接套用，会把每个频率当成独立问题分别选点，选出的支撑在频率间不一致，无法做成同一硬件。本文的改造可以概括为三件事。第一，把选择目标改为全频段求和，使每个候选的评价是其在所有频率上投影残差下降之和。第二，引入对角掩蔽矩阵，把邻近已选点的候选的等效代价放大，从而抑制过近选点。第三，给出递归更新，使每轮不需要对每个候选重新求 1 次大矩阵的伪逆与投影矩阵。

整体流程是贪心迭代。开始时已选集合为空，掩蔽矩阵为单位阵。每一轮遍历所有尚未选中的候选，计算若加入该候选后的全频段最小二乘拟合误差，并乘以该候选当前的掩蔽权重，取乘积最小者作为新选中点。然后更新掩蔽矩阵、已选集合与投影矩阵，并用当前已选点求解带约束的权值优化问题，检验是否同时满足主瓣误差、旁瓣误差与白噪声增益要求。若满足则停止，否则进入下一轮。这种先用无约束投影快速筛选、再用带约束优化做可行性检验的两层结构，是理解本文计算量的关键。

需要强调的是，本文没有训练神经网络，也没有学习字典参数。所谓学习依赖是指理解投影、伪逆与贪心搜索，而不是调参训练。所有频率的导向向量与期望波束都是按几何与声速解析给出，算法的输出是离散的位置集合与每频率的权向量。把该方法误述为模型训练，会掩盖其组合优化本质。

### 组件一：字典、支撑与联合投影如何配合？

字典、支撑与投影是方法中最基本的 3 个部件。字典的列是候选传声器，支撑是被选中的列下标集合，投影是把期望波束投影到已选加候选列所张成子空间上的操作。对单个频率而言，加入某候选后的最优权就是期望波束在该子空间上的最小二乘解，对应残差就是期望波束减去其投影。本文把这一残差的范数平方在所有频率上求和，就得到该候选的联合拟合误差。误差下降越大，说明该位置对全频段形状的贡献越大。

**频率不变波束成形 × 联合稀疏：** 频率不变波束成形负责要求同一空间指向在所有频率上保持相近的波束形状，联合稀疏负责要求所有频率的权向量共用同一非零位置支撑，二者搭配的原因是若各频率独立选点则硬件无法共用同一阵列，组合意义是用一组物理位置同时满足全频段的拟合误差与约束。

在实现层面，原文把已选行的选择矩阵作用于字典，取出对应子矩阵，再求其伪逆得到最优权。这种写法把选点问题转化为在离散集合上最小化残差函数。初学者应先在纸上走通单频率的投影，再把求和推广到多频率，否则容易把联合稀疏误解为对权值幅度的简单平均。联合的含义始终是下标共享，而不是权值相同：同一位置在不同频率上的权值可以完全不同，只是零与非零的位置模式相同。

### 组件二：OLS 与 OMP 的选择准则有何不同？

正交最小二乘与正交匹配追踪都可以用于贪心选点，但评价候选的方式不同。匹配追踪类方法通常看候选原子与当前残差的相关性，计算较轻；最小二乘类方法则把每个候选真正加入支撑后重新求解最小二乘，再比较残差能量，因此评价更完备，但要对每个候选做 1 次投影，计算更重。本文选择后者，正是因为在高度受限的同心圆几何中，完备投影对位置微小变化更敏感，有可能找到更灵活的布局。原文的仿真结论也与此呼应：两种方法在波束保真度与阵增益上相近，而 OLS 在几何布局优化的灵活性上更有优势。

**正交最小二乘 × 正交匹配追踪：** 正交最小二乘在每步对已选加候选的全部原子做最小二乘投影来评估误差下降，正交匹配追踪则主要用残差相关做快速选择，二者搭配比较的原因是都需要贪心求解同一联合稀疏问题，组合意义是本文用 OLS 的完备投影准则换取在受限几何中更灵活的布局搜索，而以更高的单步计算为代价并用递归降低开销。

递归实现就是为了解决 OLS 过重的问题。原文的做法不是对每个候选从头计算互补投影矩阵，而是利用上一轮已选集合的投影矩阵，通过与新候选相关的秩 1 修正得到新一轮所需的量。由于目标函数中只有第二项与候选有关，代入后可把选择归结为对一个与候选有关的矩阵做 2 次型运算。这种推导的输入是上一轮投影矩阵与候选列向量，输出是本轮各候选的等效误差，目标是把每轮每个候选的伪逆计算降为向量级更新。复现时应先实现直接版本对拍，再切换到递归版本验证数值一致，而不是一开始就只写递归式。

### 组件三：掩蔽权重如何阻止选出过近的点？

掩蔽矩阵是对角阵，对角元素是非负权重。初始为单位阵，表示所有候选平等。每当选中一个点，就把该点自身的权重置零以防重复选择，并把其邻域内候选的权重按衰减因子放大或调整，使它们在下一轮的等效目标值变大。选择目标是掩蔽权重乘以联合残差能量，因此即使某个邻近点的残差下降很大，乘上较大的惩罚后也不一定最优。这种正则化思想的本质是用空间隔离换取数值稳定性：过近的点提供的空间信息冗余，还可能使权向量范数变大而损害白噪声增益。

**掩蔽矩阵 × 拟合误差下降：** 拟合误差下降负责衡量加入某个候选传声器后全频段投影残差能减少多少，掩蔽矩阵负责给靠近已选点的候选乘上惩罚权重，二者搭配的原因是只看误差容易选出位置过近的冗余点，组合意义是把选择目标写成权重乘误差的形式，使邻近点的等效代价变大而不被选中。

需要注意的是，掩蔽的具体邻域半径与衰减因子在所给证据中没有给出数值。原文只说明掩蔽矩阵按上轮选中点的邻域向量更新，并沿用前期工作的做法。因此复现时不能臆测半径，只能记录为缺项，并通过对照前期基于 OMP 的工作或做参数扫描来补齐。教学例子可以这样讲：假设已选圆心点，若其周围一厘米内的候选都被乘上大权重，则下一轮算法会优先跳到外圈，而不是在圆心附近堆点。但这只是例子，不代表本文的实际半径与衰减值。

### 没有训练阶段：真实计算是搜索与约束求解

本研究没有神经网络训练阶段，因此不存在训练集梯度更新、参数冻结与解冻、学习率或早停等概念。该节的任务是讲清实际发生的两类计算。第一类是贪心搜索，即按上述联合残差准则逐个加入传声器位置；第二类是每轮结束后的约束权值求解，即在当前支撑下最小化权向量范数，同时满足目标方向响应为 1、主瓣拟合误差与旁瓣拟合误差分别小于容限、白噪声增益满足下界。原文把第二类写成对每个频率分别求解的优化问题，并以它作为停止准则：若对所有频率都能得到可行解则停止，否则继续选点。

**白噪声增益 × 无失真响应：** 无失真响应负责强制在期望方向的响应为 1 以保证目标信号不被抑制，白噪声增益负责限制权向量范数以控制对非相关噪声的放大，二者在每轮选点后的可行性检验中联合使用，搭配原因是只拟合波束形状可能得到对噪声极敏感的超指向性解，组合意义是把拟合误差最小化放在两类鲁棒性约束之内进行。

关于容限与下界的来源，原文明确是通过前期工作中引入的参数调整过程给出初始值，而不是在本文中手工固定为某个通用常数。证据没有给出这些容限随频率变化的具体数值，也没有给出求解器的名称与迭代细节，因此复述时只能说明其存在与用途，不能编造阈值。同样，算法不包含对掩蔽权重的梯度学习，掩蔽更新是规则式乘法，不是可训练参数。把无训练等同于确定性求解也是不准确的：贪心搜索中存在离散选择，数值误差与候选顺序都可能影响最终布局，不能从没有训练直接推定每次运行输出完全一致。

### 实验条件：候选几何与期望波束如何设定？

仿真几何是同心圆阵。圆阵由多个环组成，每个环用半径与该环上最大可布点数描述，候选点总数是各环点数之和，第一环位于圆心。原文强调该几何适用于需要方位转向且保持相近鲁棒性与指向性的语音应用。期望波束取自圆形微分阵列的理论形式，即方位差余弦的多项式，系数决定阶数与形状。微分阵列要求单元间距远小于半波长，原文据此选择厘米量级的间距以覆盖感兴趣的最高频率。

**同心圆阵 × 微分传声器阵列：** 同心圆阵负责提供可在方位上旋转不变的候选几何与大孔径覆盖，微分传声器阵列负责用紧密间隔感受声压空间导数以获得近似频率不变的小尺寸波束，二者搭配的原因是前者解决方位转向与高低频孔径矛盾，后者提供期望波束的具体函数形式，组合意义是在同心圆候选点上逼近 3 阶超心形等理论微分波束。

下面这张表把证据中实际出现的几何与离散条件整理在一起，用于复现前核对，而不是性能比较。比较问题是不同方法是否在同一候选集合与同一离散精度下选点，公平条件是候选总数、声速、间距、角度步进与主瓣范围一致，指标方向是这些条件越一致越可比。

| 条件 | 参数 | 取值 | 单位说明 | 对应对象 |
| --- | --- | --- | --- | --- |
| 声速 | c | 340 m/sec | 速度单位 | 导向向量计算 |
| 单元间距 | δ | 1 cm | 长度单位 | 微分阵列小间距要求 |
| 角度离散 | ∆θ | 2◦ | 角度步进 | 方位轴均匀离散 |
| 主瓣范围 | θP′与主瓣区 | 60◦与−60◦≤θ≤60◦ | 角度单位 | 主瓣与旁瓣划分 |
| 稀疏规模 | OLS 选中点数 | 41 sensors | 个数单位 | 同心圆阵布局 |

表后需要说明主要含义与代价。表中声速与间距决定了导向向量的相位计算是否满足微分阵列的小间距假设，角度步进与主瓣范围决定了字典的行数与主旁瓣误差的统计口径，41 个点说明稀疏后仍需数十个通道而非极少数点。代价是证据未给出总候选点数、各环半径与每环点数的完整清单，因此无法从该表计算稀疏率；也未给出频带上下限与频率点数，只能确认是包含 6280 赫兹在内的宽带。未胜出项在此处体现为缺项本身：没有这些配置就无法完整重建候选矩阵。

### 主结果看到什么：布局与波束保真度如何？

原文报告，联合稀疏 OLS 与前期联合稀疏 OMP 得到相近的阵列布局与相近的性能。证据中对布局的描述是两种标记的点位置相似，每环选中点数分布也相似，且稀疏设计在高低频之间做了折中并具有旋转不变性。波束方面，原文报告在零度转向下设计波束与理论 3 阶超心形波束接近，主瓣明显而旁瓣较低；3 维视角与随频率变化的波束图显示在主瓣区基本保持频率不变。这是本文支持频率不变性成立的主要定性证据。

必须区分直接报告与未验证推测。直接报告的是布局相近与图形上接近理论波束；有限解释是 OLS 在受限几何中布局灵活性更好；未验证的是白噪声增益与指向性的具体数值，因为证据中没有给出可核对的数字表。原文摘要提到两种方法在波束保真度与阵增益上表现相当，但正文证据未提供增益随频率变化的数值，因此复述时只能写报告显示图形相近，不能写 OLS 在某频率高出多少分贝。相关性也不等于因果：布局相近不能证明两种准则等价，只能说明在此几何与期望波束下结果相近。

下面这张表整理期望波束与观测频率等可核对条目，用于锚定结果讨论的适用条件，而不是方法间的定量胜负。比较问题是所展示的保真度在什么波束与频率下成立，公平条件是同一转向与同一理论波束，指标方向是图形越接近理论线越好，但本文未量化该接近程度。

| 条件 | 指标 | 取值 | 单位说明 | 比较对象 |
| --- | --- | --- | --- | --- |
| 观测频率 | f | 6280 Hz | 频率单位 | 3 阶超心形波束图 |
| 转向 | θds | 0◦ | 角度单位 | OLS 设计波束 |
| 期望形状 | BHCN | −0.14 −0.57 cos θ + 0.57 cos2 θ + 1.15 cos3 θ | 无量纲多项式 | 理论 3 阶超心形 |
| 初始化 | W(0) | IM | 单位矩阵 | 掩蔽矩阵起点 |
| 阶数 | N | 3rd-order | 阶数说明 | 微分波束 |

表后解释收益与限制。收益是读者可以按同一频率、同一转向与同一多项式系数去重画理论曲线，再把稀疏阵列的合成波束叠加上去做视觉核对；代价是该表只覆盖单个频率点的展示条件，不能证明全频段每一点都同样好。原文另有波束随频率变化的展示并称主瓣区基本频率不变，但未给出每频率误差数值，因此总体趋势不等于每组频率都成立。未评测边界包括非零转向、其他阶数与其他旁瓣抑制要求，这些在证据中没有对应图形。

### 若换掉关键部件会怎样：证据支持什么、不支持什么？

严格意义上，本文没有以表格形式报告消融实验。最接近消融对照的是 OLS 与 OMP 在同一同心圆任务上的并排布局比较。原文用该比较支持两个判断：一是两种贪心准则在此任务下得到相近的每环点数分布，二是 OLS 在高度受限几何中具有更好的布局灵活性。但证据没有给出拿掉掩蔽矩阵后会选出多少过近点，也没有给出拿掉递归实现后运行时间增加多少，因此不能写拿掉后必然怎样。

从机制上可以讲清各部件的预期作用，但必须标注为推理而非实测。掩蔽矩阵预期减少邻近冗余选择，若去掉则可能出现位置聚集并使权范数增大；递归实现预期只改变计算路径而不改变选择结果，若去掉则每轮需重复求伪逆而在大候选集合下变慢；联合求和预期保证全频段共用支撑，若改为单频率选择则各频率支撑不一致而无法落地。这些都是基于公式结构的分析，不是本文测得的差值。

复现者若想补做消融，应固定候选几何、期望波束、主旁瓣容限与白噪声增益下界，只切换选择准则或只关闭掩蔽，并记录每轮残差下降、最终点数、主旁瓣误差与白噪声增益随频率的变化。原文未提供这些基线数字，因此任何自行补测的结果都应标为新增验证，不能回填为原文报告。这一点对初学者尤为重要：没有对照表的改进描述不能当作定量结论引用。

### 边界在哪里：哪些量没有被测量？

第一个边界是定量指标缺失。证据中没有白噪声增益随频率的数值曲线表，没有指向性指数的数值，没有拟合误差的均值与最大值，也没有运行时间与内存随候选规模变化的测量。因此不能承诺该方法改善了延迟、成本或误判率，只能说它用较少的点在图形上逼近了期望波束。把图形相近直接写成部署成本下降，会混淆通道数减少与实际功耗、算力之间的关系。

第二个边界是配置与求解细节不完整。掩蔽邻域与衰减因子、主旁瓣容限与增益下界的逐频率取值、约束求解器的实现与停止阈值，在所给证据中都没有完整披露。这意味着即使理解了全部公式，也无法逐位复现 41 个点的布局。缺失证据不是技术错误，但复述时必须明确指出缺项，而不是用常见默认值替补。

第 3 个边界是泛化范围。验证只在同心圆阵与 3 阶超心形期望波束下展示，主要转向为零度，频率展示以 6280 赫兹为代表并辅以随频率变化的图形。对于其他阵形、其他阶数、强干扰方向约束或实测房间混响下的表现，本文没有提供证据。初学者应把结论限定为在该几何与该期望波束下，联合稀疏 OLS 是一种可行的贪心替代方案，而 OLS 更灵活的判断也只在高度受限几何的语境下成立。

### 复现先做什么：按什么顺序核对？

第一步重建候选几何与字典。按同心圆环半径与每环点数生成位置坐标，用声速 340 米每秒计算各频率各方位的导向向量，按 2 度步进离散方位，并按正负 60 度划分主瓣与旁瓣。期望波束按 3 阶超心形多项式在同样方位上采样，主瓣转向设为零度。由于原文未给出完整环参数与频点划分，复现时应先用自己设定的参数跑通链路，并把参数记录为假设，而不是声称复现了原文的 41 点布局。

第二步实现直接版联合稀疏 OLS。掩蔽矩阵初始化为单位阵，已选集合为空。每轮对每个未选候选构造已选加候选的子矩阵，求伪逆得到各频率最优权，计算全频段残差平方和并乘以掩蔽权重，选择最小者。选中后按规则更新掩蔽对角线，并更新已选集合。然后在当前支撑下求解带无失真响应、主旁瓣误差与白噪声增益约束的权值问题，检验是否对所有频率可行。

若可行则停止，否则继续。先用直接版与小规模候选对拍，再实现递归更新并验证每轮选择一致。

第三步做核对图而非数值表。画出候选点与选中点布局、每环点数分布、零度转向下设计波束与理论波束的叠加图，以及波束随频率变化的 2 维图，检查主瓣区是否基本不变。同时记录最终点数、每轮残差下降与约束余量。若要与 OMP 比较，必须在同一候选集合与同一容限下运行两种准则，并保留两种布局的点坐标，否则比较不公平。关于可用性，证据状态显示未发现来源绑定且完成验证的资源，因此不得声称代码、模型或数据已公开，复现只能依据正文公式与上述条件自行实现。

### 何时值得尝试：给研究生的收束判断

当任务同时满足 3 个条件时，本文方法值得尝试：需要在宽带内保持同一波束形状，物理阵列必须全频段共用同一批位置，且候选几何受限到难以手工布点。此时联合稀疏 OLS 提供了一种贪心思路，用完备投影评价每个位置的全频段贡献，并用掩蔽保证空间隔离。它的直接价值是把组合选择问题转化为可逐步执行的搜索加约束检验，而不是 1 次性求解大规模稀疏优化。

使用时要保留关键信息条件：期望波束函数、主旁瓣划分与容限、白噪声增益下界、掩蔽邻域规则与停止条件。缺少这些，任何点数比较都没有意义。还需要补做的验证是逐频率的白噪声增益与指向性数值、不同转向与不同阶数下的稳定性，以及候选规模增大到数百点时的运行时间。只有补齐这些，才能判断稀疏带来的通道减少是否真正转化为可部署收益。

常见的误解需要澄清。第一，点数少不等于鲁棒性好，鲁棒性由白噪声增益约束保证，而不是由稀疏本身保证。第二，图形上频率不变不等于每频率误差都小，主瓣区好不代表旁瓣区同样好。第三，OLS 与 OMP 相近是在本文几何下的观测，不是一般性优劣结论。记住这三点，就能准确复述本文：它报告了一种联合稀疏 OLS 改造与递归实现，并在同心圆阵上显示出与 OMP 相近的保真度与更灵活的布局潜力，但定量增益与完整复现细节仍待补充验证。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=2)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-20.png)

区域 20 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-21.png)

区域 21 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/a1c0ae769e34/figure-22.png)

区域 22 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf#page=3)

另有 39 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
