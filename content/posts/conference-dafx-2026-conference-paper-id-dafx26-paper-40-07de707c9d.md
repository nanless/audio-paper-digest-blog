---
title: "Measurement-Informed Nonlinear Modal Synthesis of 65 Classical Guitars"
date: 2026-09-13
draft: false
description: "论文用 Mores 实测的 65 把吉他桥柔量与桥到空气辐射驱动几何精确非线性弦，在连续级做标量辅助变量二次化并以两次 Sherman-Morrison 秩一更新实现每步显式推进，以全品格约 6240 个音展示乐器相关共鸣，代价是琴体与辐射仍为线性模态且跨琴响度依赖两遍归一化。"
tags: ["数据集", "信号处理", "音乐", "音乐生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_40"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "949543489b37569e5ee64af6317902b23de0858eac28fc2ed4aa547c4d3551d1"
paper_digest_api_reader_plan_sha256: "390975710980836153f441aedf743b320207d450758df1969d9d04b18e95b67c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c97d8c4c245da799e64c56336923f0cbd991b398df738c83365569bde222723d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7ef411f4ff344c29c5a10ee5628df7ff28754b090e08557423d07869b16e0f34"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "dfdf0e23e80b730c47aef4390cd92d955a262151037c003ebbcfed77a816bcc8"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "727b3bc507988db6d21434c375d0b36aa1ca7991ab5cc2f7fe1e2b4f1a38857a"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 实测琴体约束显式非线性弦：65 把古典吉他的可复算合成链

> 英文题目：*Measurement-Informed Nonlinear Modal Synthesis of 65 Classical Guitars*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_40`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf)

标签：#数据集 #信号处理 #音乐 #音乐生成

评分：**7.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Michele Ducceschi：机构信息未能从会议 PDF 纯文本可靠映射
- Riccardo Russo：机构信息未能从会议 PDF 纯文本可靠映射
- Craig J. Webb：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为拨弦激励与琴桥处锤击实测脉冲响应，输出为携带琴体共振的立体声拨弦音，难点在于大幅度几何非线性同时引发音高滑动与频谱增生，且每把琴的共振必须来自测量并保持长时间稳定高效合成。方法链第一步由锤击力与加速度计和麦克风通道估计频响函数并拟合桥导纳与桥到空气辐射模态参数，为合成提供乐器专属滤波器组。第二步将几何精确横向势做标量辅助变量二次化并引入伺服修正与非负约束，把非线性势转为单个标量未知量，使耦合系统在未知量上保持线性。第三步用精确离散模态以两次顺序Sherman-Morrison秩一更新显式推进弦桥耦合状态，再由琴桥力驱动双侧辐射混响器与交感弦组生成立体声。与Kirchhoff-Carrier平均应变及隐式非线性求解器相比，该机制保留逐点斜率依赖的丰富互调，同时将每步求解降为线性对角系统加两次显式修正，达到与纯线性格式可比的每步线性计算复杂度。在非线性频带截断设置下，截断方法的模式数指标为60，低于全量方法的模式数指标200。结论适用边界受限于单弦拨奏与桥耦合线性琴体假设，尚未验证同时多弦耦合、打品与滑弦等外推情形。单个五秒音符在标准工作站硬件上合成仅需0.1至0.5秒，计算量主要来自辐射滤波器组，全库约6240个音符数小时内生成。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Nemus-Project/65_modelled_guitars> — 链接可访问（HTTP 200）
- 演示资源：<https://github.com/Nemus-Project/65_modelled_guitars> — 链接可访问（HTTP 200）
- 第三方资源：<https://nemusproject.eu> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决的矛盾是什么？

本文的输入是公开的 Mores 锤击脉冲响应测量，覆盖 65 把古典与弗拉门戈吉他，建造年代从 1803 年延续到 2018 年。测量在西班牙与德国的博物馆、制琴工作室与私人收藏中完成，激励在桥 saddle 处施加，响应由桥两侧加速度计与顶部麦克风记录。

目标是为每把琴建立测量驱动的可弹数值复刻，输出是分弦、分品格的拨弦合成音频。论文报告最终形成约 6240 个音的样本库，合成代码与试听当前可用，已经公开在项目仓库。必须保留的信息是弦用几何精确横向非线性建模，琴体与辐射参数全部从实测提取，时间推进做到显式更新，并用正则化压住辅助变量漂移。

中心矛盾在于大振幅下可感知的音高滑动与频谱增生需要逐点斜率依赖的非线性势，而 65 把琴全品格批量合成又要求避免隐式迭代的高成本。论文的选择是在连续级就做标量辅助变量 2 次化，使方程线性于未知量，再用 2 次秩 1 更新处理桥耦合与非线性。学习时先建立这条从锤击记录到可弹复刻的链路，再进入具体组件与参数提取，才能理解每一步为何存在。

### 已有路线如何处理弦非线性与模态耦合？

拨弦吉他的经典分解是 3 个相互作用的子系统：非线性弦、共振琴体与周围空气。模态方法把动力学化为一组带阻尼的振子，其频率与阻尼可以来自解析推导、数值预计算或测量，适合递归推进。

难点在弦非线性势的写法与求解。原文回顾了几何精确形式及其简化到 3 次或 Kirchhoff-Carrier 模型的谱系，并指出除 Kirchhoff-Carrier 外，能量稳定的数值积分传统上需要线性或完全隐式求解器。标量辅助变量方法的思路是把非线性势换成它的平方根，引入一个标量未知量使方程线性于未知量，再结合 Sherman-Morrison 公式做到显式求逆。

论文同时承认该方法在多种场景下会出现数值污染，因此发展出两类正则化。一类对非线性势梯度加约束以避免辅助变量符号翻转，另一类加伺服修正以防止长期漂移。本文与作者先前单秩 1 方案的区别在于把桥耦合与非线性都写成秩 1 修正，用 2 次顺序更新得到全耦合显式格式。

另一条相关线是 Mores 的 65 把吉他档案本身。部分托雷斯与帕热斯原件按历史音高定弦且极少被演奏，有的早期浪漫吉他甚至无弦或结构受损，实测脉冲可能是其振动声学行为最后可靠记录。这构成 NEMUS 项目做可弹数值复刻的动机，本文管线可视为该思想的大规模落地。

### 任务如何定义，沿一把琴走完输入到输出？

任务不是训练通用音色模型，而是为每把琴建立测量驱动的合成实例。以编号 55 的 1803 年 Munoa 吉他为教学例子，输入是桥处微型力锤敲击、桥两侧加速度计与顶部麦克风记录的时域信号。该例子仅用于说明链路，不附加原文之外的听感数值。

表示阶段先把时域信号换算为物理单位并用 H1 估计得到频响函数，再分别提取桥柔量模态与桥到空气辐射的极点留数。组件阶段把弦的模态振子、桥的模态振子与辐射滤波器按框图连接，拨弦力驱动非线性弦，弦在桥点通过位移相容驱动桥，桥反力再驱动辐射与共鸣弦。

目标是得到与该琴实测共振一致的拨弦声压，且在大拨弦幅度下仍出现非线性特有的泛音与音高行为。输出是立体声波形，经两遍归一化写成 24 位文件。理解这一单样本闭环后，才能展开连续模型、离散格式与批量合成的通用公式与条件。

### 全链路有哪些模块，信号如何流动？

全链路从锤击脉冲响应出发，经频响估计分两路提取参数，再与弦参数汇入非线性模态合成，最后归一化落盘。弦是标量辅助变量 2 次化后的非线性模态系统，桥是柔量模态系统，二者在桥点双向耦合，桥反力单向驱动辐射与共鸣弦。

辐射分高音侧与低音侧两组滤波器，再做中侧处理得到立体声。合成时拨弦位置在一定区间内随机以模拟真实演奏的不一致性，未被拨的五根弦用线性模态振子做共鸣。

下图是论文给出的合成模型框图，先看主信号从拨弦力到声压的走向，再看耦合与辐射分支的位置，有助于把后文公式与代码模块对号入座。

> **看图路径：** 1. 沿左侧拨弦输入向右追踪到非线性弦与桥柔量之间的双向箭头；2. 确认桥反力同时分叉到辐射滤波器与线性共鸣弦库；3. 查看高音与低音辐射如何汇入中侧立体声再输出声压

[![原论文 Figure 2：Block diagram of the guitar synthesis model.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/7eb687d17328/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/7eb687d17328/figure-2.png)

*论文图 2。原论文 Figure 2：“Block diagram of the guitar synthesis model.”。*

从像素可见，最左侧是拨弦力输入，中间蓝色块为 2 次化非线性弦，橙色块为桥柔量，二者之间有桥反力与桥位移两条反向箭头，表明是双向耦合。桥反力向右引出，一路直接进入高音与低音辐射滤波器，另一路经增益进入线性共鸣弦库再回加到辐射输入，加法节点之后经中侧立体声输出声压。这一结构说明个性化主要来自桥与辐射的实测参数，而非线性只作用于被拨弦，共鸣弦保持线性是计算与物理折中的结果。

### 弦、桥与辐射各自算什么，如何耦合？

弦部分从张力、弯曲刚度与阻尼的线性算子出发，加上依赖斜率的保守非线性力密度，以及拨弦力与桥反力的点源。边界取简支，位移按正弦基展开为模态坐标，模态频率含张力项与弯曲刚度项。非线性势取几何精确形式，对斜率逐点依赖，区别于把应变做空间平均的简化，因此模态间耦合更丰富。

标量辅助变量 2 次化的白话解释是：因为该势非负，可以定义其平方根加小量为新的标量，原非线性力于是写成该标量乘归一化梯度，演化方程与能量平衡都显式含有该标量平方项，保证无激励时有界。桥部分在频域写成多个柔量模态之和，时域每个桥模态是带阻尼振子并受桥反力驱动，总桥位移为各模态之和。耦合条件是弦在桥点位移等于桥位移，由此隐式决定桥反力。

**几何精确非线性势 × 标量辅助变量 2 次化：** 几何精确非线性势负责保留斜率逐点依赖带来的音高滑动与频谱增生，标量辅助变量 2 次化负责把该非负势能开方成一个标量，使原非线性力写成标量乘已知梯度向量的线性形式，二者搭配后连续级方程已线性于未知量，为离散时只做秩 1 更新显式求解创造条件。

**桥柔量 × 弦桥位移相容：** 桥柔量负责把实测琴体驱动点响应压缩为一组频率、阻尼与留数的模态振子，弦桥位移相容负责要求弦在桥点位移等于桥位移并以此反解桥反力，二者组合把测量得到的琴体个性以约束力形式注入弦振动，而不是外挂混响。

**Sherman-Morrison 更新 × 桥耦合与 SAV 非线性：** 桥耦合与 SAV 非线性各自只给对角系统矩阵带来一个秩 1 修正，Sherman-Morrison 更新负责对每个秩 1 修正做显式求逆而不组装矩阵，2 次顺序使用后全耦合弦桥系统仍保持每步线性复杂度，这是线性格式效率与非线性保真得以兼得的关键。

**桥到空气辐射 × 中侧立体声处理：** 桥到空气辐射负责把桥反力经低音侧与高音侧两组极点留数滤波器转成声压，相当于实测传声器通道模型，中侧立体声处理负责把这两路信号组合成有宽度的立体声输出，分工是前者定音色共振、后者定空间呈现。

**伺服修正 × 非负约束：** 伺服修正负责沿速度方向调整梯度以拉回辅助变量的长期漂移，非负约束负责强制交错网格上的辅助变量平均非负以避免符号翻转，前者治慢漂、后者治突变，论文把两种正则化同时使用以稳定音频采样率下的长时间递推。

辐射部分把已知的桥反力送入极点留数形式的传递函数，每对共轭极点实现为并联 2 阶无限脉冲响应段，低音与高音侧分别拟合再做中侧宽度处理。弦阻尼按 Woodhouse 两参数模型随角频率线性变化，参数取自对特定尼龙弦的测量。

数值实现上为节省计算，只让频率上限以下的模态参与非线性相互作用，更高模态按线性振子计算。斜率场在均匀空间网格上经微分模态矩阵求值，势能用梯形求积近似，梯度再投影回模态坐标。每步先算斜率、势能、真值与梯度，再做正则化修正，然后 2 次秩 1 更新得到新状态，更新辅助变量并推进辐射滤波器输出。

### 本研究训练了什么，没有训练什么？

本研究没有训练神经网络，也没有学习权重意义上的训练阶段，不存在梯度反传、优化器更新或早停。真实计算过程是参数提取加显式仿真。提取侧对桥加速度与麦克风通道分别做峰值拾取、带宽估计与留数拟合，得到可直接装入递推器的模态参数。

仿真侧按固定采样率推进状态，无需迭代求解。论文给出的处理管线把这一无训练链路表达得很清楚，从测量到落盘每一步都是确定性信号处理与物理递推。但无训练不等同于确定性求解，拨弦位置随机与测量噪声仍会带来样本间差异。

下图是论文的测量到合成管线，先确认顶部测量与频响估计，再看左右两路提取如何汇入合成，有助于复现时按图搭流水线而不遗漏归一化。

> **看图路径：** 1. 从顶部锤击脉冲响应经频率响应函数分叉为桥提取与辐射提取；2. 核对弦参数与两路模态参数汇入非线性模态合成的位置；3. 沿合成之后的两遍归一化看到最终波形样本数

[![原论文 Figure 7：Processing pipeline from measurement to synthesis.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/7eb687d17328/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/7eb687d17328/figure-7.png)

*论文图 7。原论文 Figure 7：“Processing pipeline from measurement to synthesis.”。*

从像素可见，顶部是 65 把吉他的锤击脉冲响应，向下得到加速度与麦克风的频响函数，再分叉为左侧桥提取与右侧辐射提取。左侧输出桥模态的频率、阻尼与留数，右侧输出辐射极点与留数，另有弦参数独立输入，3 路汇入 2 次化非线性模态合成，之后经两遍归一化得到 6240 个样本的波形库。该图说明复现时应先跑通提取分支，再跑合成与归一化，不能把合成当成可端到端训练的模型。

### 测量与提取条件如何保证可比？

测量使用微型力锤在桥处激励，桥两侧各贴一只轻质量加速度计，顶部布置三只麦克风，所有通道按厂家灵敏度换算为国际单位。吉他仅以底部与琴颈支撑使琴体自由振动，并用便携地面吸声体抑制各场地的反射。

每位置记录多次敲击，按力阈值与双击剔除保留最佳单次脉冲，截断为 1 秒作为提取输入。频响用 H1 估计并经逆变换恢复脉冲。桥柔量提取先截断并加升余弦淡出以减少泄漏，在给定频段内按突出度与最小间隔拾取峰值，用负 3 分贝带宽估计阻尼，再用正则化最小二乘拟合实数留数，最后把加速度留数转换为柔量留数并剔除过阻尼模态。辐射提取用类似流程，但基函数取极点留数形式，低音与高音侧分别拟合以便后续生成立体声。

下表先回答批量合成的规模与音频规格问题，比较时注意不同吉他的桥与辐射增益差异很大，因此归一化条件必须一致。

| 环节 | 比较条件 | 关键控制变量 | 指标 A | 指标 B 与解释成本 |
| --- | --- | --- | --- | --- |
| 采集 | 65 把吉他统一锤击 | 48 kHz / 24-bit | [20, 10000] Hz 桥拟合 | [20, 12000] Hz 辐射拟合，极点更多故成本更高 |
| 合成覆盖 | 六根弦乘 16 品格 | 5 s 单音时长 | 48 kHz 合成率 | ≈6240 notes 总量，批量需数小时 |
| 模态规模 | 桥与辐射分开拟合 | 峰值拾取加正则化拟合 | 50–200 bridge modes | 80–300 radiation poles per side，辐射更密 |

上表说明本研究的可复算边界：乐器数量与音符覆盖决定了批量成本，音频规格与单音时长决定了递推步数与存储。由于各琴增益差异大，论文采用两遍归一化使每把琴最响音符达到满幅，这意味着跨琴比较响度时不能直接用波形峰值，而应回到归一化前的桥反力或滤波器增益。未胜出的边界是部分博物馆琴按历史音高定弦或无弦，合成只是赋予其数值声音，不等同于该琴在标准音高下的真实演奏。

下图是 55 号琴的桥柔量提取效果，先看频响峰谷的拟合，再看时域脉冲的包络，有助于判断提取是否过拟合或漏模态。

> **看图路径：** 1. 对比上方频响中蓝色实测与黄色模型的峰谷对齐程度；2. 观察下方带限桥脉冲响应在前 3 毫秒内的衰减包络；3. 注意标题给出的 68 个模态是该琴此次拟合的规模

[![原论文 Figure 3：Results of the bridge compliance parameters extraction for guitar no.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/7eb687d17328/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/7eb687d17328/figure-3.png)

*论文图 3。原论文 Figure 3：“Results of the bridge compliance parameters extraction for guitar no.”。*

从像素可见，上方面频响横轴为千赫，纵轴为分贝，蓝色实测与黄色模型在多数共振峰处重合，深谷处个别有偏差但整体趋势一致，标题标明用了 68 个模态。下方面带限桥脉冲响应横轴为毫秒，纵轴为幅度，前约 1 毫秒内大幅振荡后迅速衰减，蓝黄两线几乎重叠，说明该琴的桥参数在此频段与时段内重建良好。解释时不能把个别深谷的偏差推广为全频段失效，也不能仅凭时域前几毫秒断言长混响行为。

### 主结果显示了什么，辐射重建如何？

论文报告的主结果是管线已跑通全部 65 把琴，每把琴按六根弦乘 16 个品格合成，得到约 6240 个拨弦样本，合成音表现出音高滑动、幻影分音与乐器相关的琴体共振，且在不同琴之间可听辨。提取侧对每把琴在宽频段内保留数十到上 100 个桥模态与每侧数十到数 100 个辐射极点，保证了个性化。

计算侧在普通工作站上数小时生成全库，单音 5 秒在软件中约需零点几秒，主要成本在辐射滤波器组。需要区分的是，论文直接报告的是规模与可运行性，有限解释是音色差异可听辨且经非正式试听确认非线性上限设置无可闻退化，未验证的是与同琴真实录音的感知对比，原文将其列为未来听音测试。

下表回答不同路径的拟合规模与合成上限问题，比较时注意桥与辐射的频段与数量口径不同，不能直接比大小论优劣。

| 路径 | 比较条件 | 关键控制变量 | 指标 A | 指标 B 与解释成本 |
| --- | --- | --- | --- | --- |
| 桥柔量拟合 | [20, 10000] Hz 频段 | 桥点位置系数 0.995 | 50–200 bridge modes | 内点耦合，模态较少故单步便宜 |
| 辐射拟合 | [20, 12000] Hz 频段 | 低音高音分开拟合 | 80–300 radiation poles per side | 宽带更密，滤波器组为瓶颈 |
| 非线性截断 | E2 约 82 Hz 低音弦 | f nlmax = 5000 Hz 上限 | Mnl ≈60 参与非线性 | M ≈200 总量，高模线性省算力 |

上表的主要收益是给出了可直接复用的数量级：桥与辐射各需数十到数 100 个模态才能覆盖宽带，5 千赫非线性上限在低音弦上可省去大部分高模的非线性计算。代价是辐射极点数多于桥模态数，滤波器组成为运行瓶颈。未胜出项是高频深谷与密集共振区的个别偏差，论文用图展示而非掩盖，复现时若一味增加模态数可能改善频响但会推高每步成本。

下图是 55 号琴的辐射提取效果，先看宽带频响的起伏拟合，再看时域脉冲的主要峰，有助于理解辐射滤波器的规模来源。

> **看图路径：** 1. 在上方辐射频响中比较宽带起伏与个别深谷的重建差异；2. 在下方辐射脉冲响应中核对前 7 毫秒主要峰的位置与幅度；3. 注意标题给出的 125 个模态说明辐射拟合比桥拟合更密

[![原论文 Figure 5：Results of the radiation modal parameter extraction for the bridge of guitar no.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/7eb687d17328/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/7eb687d17328/figure-5.png)

*论文图 5。原论文 Figure 5：“Results of the radiation modal parameter extraction for the bridge of guitar no.”。*

从像素可见，上方辐射频响横轴延伸到 12 千赫，蓝色实测抖动剧烈，黄色模型跟踪了包络与多数峰，但在个别窄深谷处偏离较明显。下方辐射脉冲响应横轴到 7 毫秒以上，前 2 毫秒内几个大峰对齐很好，之后小幅振荡的细节逐渐分叉。标题标明用了 125 个模态，数量明显多于桥拟合，说明辐射需要更密的极点才能覆盖宽带。判断好坏时纵轴是幅度谱分贝与时域幅度，不是改善量，向下不直接等于性能变差，深谷偏差需结合可听性另行验证。

### 哪些设置影响效率与稳定，证据强度如何？

论文没有神经网络消融，但给出了物理与数值层面的对照条件。效率侧，非线性只作用于上限以下模态，更高模态按线性振子计算，原文以低音弦为例说明保留约 60 个非线性模态而总模态约 200 个，经非正式试听确认无可闻退化。

这支持该截断的合理性，但属于有限解释而非正式感知实验。稳定侧，离散格式对每个模态用精确离散修正频率与阻尼以消除数值频散，辅助变量同时用伺服修正与非负约束处理漂移与翻转，原文明确这是两种正则化组合使用，支持长时间音频采样率递推的鲁棒性。

耦合侧，从先前单秩 1 方案扩展到 2 次顺序更新，使弦桥全耦合仍显式可解，这是方法层面的新增作用而非参数微调。限制是这些对照多为定性或实现层面的说明，没有给出拿掉某一项后误差或成本的定量表格。复现者若要补消融，应固定同一把琴、同一音符与同一拨弦位置，分别开关非线性上限、精确离散与两项正则化，记录频谱质心、音高轨迹与辅助变量漂移，才能把支持升级为因果证据。

### 什么还不能下结论，边界在哪里？

首先，琴体与辐射都是线性模态，论文未对琴体的大振幅非线性或空气非线性建模，因此大拨弦下的非线性只来自弦，这是一种明确的建模边界。其次，共鸣弦库按线性处理，理由是经桥运动驱动的幅度远低于几何精确非线性阈值，原文给出增益与上限设置，但未报告多弦同时大振幅拨弦时的能量传递，相关多弦耦合被列为未来方向。

第三，拨弦激励来自录制脉冲的重采样与幅度缩放，拨弦位置随机以模拟不一致性，但未包含打品嗡鸣与滑弦等非拨弦发音，激励模型的丰富度仍有限。第四，评价以重建频响与脉冲的视觉吻合、批量可运行性与非正式试听为主，未报告与同琴录音的盲听对比、误判率或延迟，总体趋势不等于每把琴每个音符都成立。

最后，两遍归一化解决了跨琴增益差异，但也抹掉了原始响度信息，若研究目标是比较不同制琴的辐射效率，需要回到归一化前的增益。缺失证据不是技术错误，相关性也不是因果，复现时应保留这些边界而不承诺未测量的改善。

### 复现先做什么，需要哪些信息条件？

复现应按管线逆序准备：先确认代码与试听当前可用，已经公开在项目仓库，再准备 Mores 档案的锤击记录与厂家灵敏度。第一步跑通频响估计与两路提取，核对桥模态数与辐射极点数是否落在原文的数量级，并用 55 号琴的 68 模态桥拟合与 125 模态辐射拟合作为检查点。

第二步搭建弦的模态参数与阻尼模型，注意区分素弦尼龙与缠弦的密度与杨氏模量口径，固定采样率、桥位置与非线性上限。第三步实现 2 次化与 2 次秩 1 更新，重点检查精确离散系数、梯度计算与两项正则化的顺序，以及桥反力的显式求解。

第四步接入辐射滤波器与共鸣弦库，再做两遍归一化落盘。关键超参数和信息条件包括采样率、拟合频段、模态数范围、非线性上限、桥位置、拨弦位置区间与归一化策略，原文已交代主要取值。代码开源不等于开箱即得全库，还需自行承担批量合成的计算时间与存储，辐射滤波器组是主要开销。若遇到辅助变量漂移，应先检查伺服修正与非负约束是否同时启用，再检查梯度范数接近零时的保护分支。

### 何时值得尝试这条路线，一句话收束？

当研究目标是为馆藏或难以演奏的吉他做可弹数值复刻，且已有锤击加速度与麦克风测量时，这条测量驱动加显式非线性弦的路线值得尝试，因为它把个性化放在实测模态参数中，把效率放在 2 次化与秩 1 更新中。复现时先做单琴单音闭环，再扩展到 65 琴全品格批量，注意保留归一化前增益以便做跨琴比较。

还需补的验证是与同琴录音的感知对比、不同拨弦强度下音高滑动的定量跟踪，以及多弦同时振动时的桥介导能量传递。常见误解是把模态数越多等同于越好，实际上辐射极点数推高成本且个别深谷未必可闻。另一个误解是把无训练等同于确定性求解，拨弦位置随机与测量噪声都会带来样本间差异。

收束一句话：用实测琴体约束显式非线性弦，可以在可接受成本下得到 65 把琴各自可辨的拨弦库，但线性琴体、线性共鸣与激励简化仍是明确边界。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=2)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-23.png)

区域 23 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-24.png)

区域 24 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 25，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-25.png)

区域 25 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 26，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-26.png)

区域 26 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 27，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-27.png)

区域 27 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 28，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-28.png)

区域 28 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 29，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-29.png)

区域 29 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=3)

[![原文数学表达区域 30，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-30.png)

区域 30 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=4)

[![原文数学表达区域 31，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-31.png)

区域 31 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=4)

[![原文数学表达区域 32，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/27c07be75dee/figure-32.png)

区域 32 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf#page=6)

另有 53 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
