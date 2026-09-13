---
title: "Peak-Residual Modal Estimation with Learned Calibration and High-Band Density Correction ★"
date: 2026-09-12
draft: false
description: "该研究只用未归一化脉冲响应估计模态频率、衰减与增益，用确定性峰残差前端定频率与行数、用不改频率行数的 MLP 只校准衰减增益、再用可选高频填充试探召回，官方 16 个文件主表 54785 行、增广表 71506 行，代价是高频插入行缺乏独立谱支撑且存在版本失配限制。"
tags: ["信号处理", "统计分析", "模型比较", "房间脉冲响应估计"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_challenge_89"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5ba1a97dd55734ec21701fe853d88ec1b437a896b292a64aef3a18e1e121b2ac"
paper_digest_api_reader_plan_sha256: "3014041c926e5b65fb9a928cc00e110d22114b1bc2c4fbb5f66da48bfd2914b3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "90c9349e75dcc2f916267c712f7383b799fbca5f66417db7dded34bfcc8cf96f"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "69520ec7edb83121045094739a3e94eb466e235343381ee4f61cb1490495f4dc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2b422ed9f5918349052e1493ceb3b0e91cb86b12bec58685f71c98ef70f1a7fa"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ef0de7ed57b73ed77c7f5026f26eb0dac7b8eec295cf1306d10a6982cde99b36"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"},{"facet":"task","id":"task.rir-estimation","label":"房间脉冲响应估计"}]
paper_digest_primary_task: "房间脉冲响应估计"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.0
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 看得见的峰才计数：峰残差估计把频率支撑、校准与高频补数分开处理

> 英文题目：*Peak-Residual Modal Estimation with Learned Calibration and High-Band Density Correction ★*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_challenge_89`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf)

标签：#信号处理 #统计分析 #模型比较 #房间脉冲响应估计

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告

## 👥 作者与机构

- Doohyun Jung：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

任务B输入为未归一化板式混响脉冲响应，输出为频率排序的模态频率、衰减常数与增益表，难点在于数千个重叠阻尼正弦在高频坍缩为不可分辨的谱包络。主流程先以显著度分级峰值拾取与多视角残差揭示肩部结构，再由频带预算与岭回归预测的全局计数截断候选，最后用模式级多层感知机只缩放衰减与增益而不移动频率。次版在主表基础上以独立岭模型预测六至十千赫目标数并做有界抖动复制，用于检验隐藏多重度假设。在开发集留出六十样本验证设置下，预测计数的平均计数指标为4557.2，高于目标真实的平均计数指标4551.8。与直接联合估计极点的方法不同，该链条将频率支撑、局部偏置校正与高频计数增强解耦，使每行保留可见谱证据并让密度假设可单独归因，其实测意义在于显式暴露精度召回权衡。其适用边界受限于峰中心假设，单峰多模无法分离且宽度估计受重叠污染，存在频带划分版本错配，尚未验证官方评分下的优劣。推理开销方面主流程单文件平均延迟约373.4秒而密度填充十六文件仅增加约0.73秒，训练硬件仅披露视窗十一与三点一二环境下中央处理器确定性运行。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，什么信息必须保留？

这篇论文处理的是板混响模态参数估计。输入是每个未归一化的离散脉冲响应文件，格式为 NPZ，模型把它看成多个阻尼正弦之和，每个分量有频率、衰减常数与增益 3 个量，采样率已知。输出是按频率排序的表格，每行对应一个模态，列为频率、衰减与增益。初学者容易忽略的关键信息条件是绝对幅度：论文明确不用峰归一化后的 WAV，因为归一化会抹掉估计增益所需的绝对尺度。

另一个必须保留的约束是推理时看不到盘参数、看不到官方目标模态表，也不使用被排除的解析模态频率公式与频率相关衰减关系。学习部件只能在公开仿真器生成的开发响应上提前固定，官方推理时不再更新。这个设定决定了后文所有设计：频率支撑必须从实测响应本身找出来，数量控制只能靠信号导出量学习，校准不能靠官方标签微调。

从一个样本走一遍就是：读入未归一化响应，做补零傅里叶变换看对数幅度谱，找峰并估计宽度与复响应得到原始三元组，再做模式级偏置校正得到最终表格，次级变体只在高频段增加密度行。理解这条主线后，再看各组件的分工就不会迷路。

### 同任务的经典路线为何在这里难直接套用？

论文把相关方法归为 3 类：正弦建模、线性预测与极点估计、子空间或矩阵铅笔法。这些方法都想联合估计指数阻尼正弦的参数，在孤立共振下是直接的。但在挑战的模态密度与频率跨度下，一个谱极大可能是一个主导模态，也可能是相邻几个模态或密集簇的合成肩部，直接套用会面临模型阶数敏感与计算量大的问题。

作者因此没有沿单一步骤把频率、衰减、增益 1 次解出，而是把 3 种不确定性分开。频率支撑交给确定性谱前端，衰减与增益的局部尺度偏置交给受约束的神经校准器，高频可能少计数交给单独门控的密度假设。这种分工不是为了标新立异，而是为了让每一部分的可解释性与风险边界清晰：前端提供可见证据，校准器不改变行数与频率，密度级作为可选假设隔离存放。

同输入、同目标、同运行阶段的对照是挑战基线用的模态响应约定，论文在增益估计时沿用了该约定。其他文献方法只作为动机引用，没有在相同 16 个官方响应与相同官方指标下重跑可比数字，因此不能把类别差异读成胜负结论。

### 问题到底难在哪里，论文如何形式化？

困难来自重叠。当数千个阻尼模态在 50 至 10000 赫兹内重叠，峰的宽度不再等于单个物理模态的衰减，峰的高度也不再等于单个增益。残差掩膜能露出肩部，但不能可靠地把一个光滑结构拆成几个模态。于是任务不仅是定位可见峰，还要推断实测响应之下藏着多少有物理意义的模态。

论文用阻尼正弦求和定义观测，每项由频率、衰减常数、增益决定。这种写法把问题变成：给定整段响应，返回一组三元组。例子是教学用的：比如某频段看到一个宽峰，可能是两个靠得很近的窄模态叠加，也可能是一个快衰模态，单看峰顶无法区分，需要残差多视角与计数模型共同约束。例子不附带任何数值效果，只说明为何需要 3 段式处理。

约束同样是问题定义的一部分：只用未归一化响应推理，不读盘参数与目标表，不评估被排除的解析关系。这意味着任何利用官方标签反推数量或频率的做法都不允许，密度填充也必须是非预言式的，只能从已校准表与信号导出特征预测。

### 两套系统共用哪条流水线，分叉点在哪里？

两套提交共用同一条主流水线，区别只在最后一段是否执行。主系统止于模式级校准，次级系统在校准表之后再做 6 至 10 千赫兹的密度修正。论文用一张纵向流程图把 6 个框串起来，顶端是输入与变换，中段是候选与计数，底端是校准与可选填充，箭头自上而下表示数据只向前流动。

阅读该图时先抓住不变量：频率位置、行数与行的顺序在进入校准后不再改变；再抓住可变量：衰减与增益可以被重标定，高频行数可以在次级变体中增加。这种不变与可变的划分是全文复述时最值得核对的骨架。

> **看图路径：** 1. 从顶端未归一化脉冲响应框沿箭头向下数六个框，确认主次系统的分界位置；2. 观察第三框中合并、预算与学习计数如何汇成一行再进入原始参数框；3. 确认第五框只写重标定衰减与增益，核对最后一框标注为可选且限定 6 至 10 千赫兹

[![原论文 Figure 1：Combined processing pipeline. The final block is used only for the secondary submission.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e642d266c103/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e642d266c103/figure-1.png)

*论文图 1。原论文 Figure 1：“Combined processing pipeline. The final block is used only for the secondary submission.”。*

该图显示 6 个纵向排列的白底圆角框与向下箭头。第一框写未归一化脉冲响应到补零傅里叶变换与对数幅度，第二框写显著度分级峰与多视角残差，第三框写候选合并、频带预算与学习计数目标，第四框写由位置宽度与复响应得原始频率衰减增益，第五框写模式级多层感知机只重标定衰减与增益，第六框写可选的 6 至 10 千赫兹非预言密度修正。像素上框体等宽居中，箭头逐框连接，图注明确最后一框只用于次级提交，这与正文主系统止于校准、次级系统包含最终块的说法一致。

### 候选池如何从大峰找到弱肩而不发明频率？

候选发现主要在对数幅度谱上操作。先计算 8 倍补零的实数傅里叶变换以提高频率网格密度，再用从高到低的一串显著度阈值收集可见峰。高显著度先收孤立模态，低显著度再收弱结构。最小候选间隔与频率有关：低频保持较稀疏，高频允许更密集，这与高频模态更密的先验一致。

残差分析用来揭肩部。做法是减去中值谱包络形成残差曲线，把已接受候选转成类洛伦兹软掩膜对残差做衰减，再重新搜索。共做 4 轮残差，每轮后减法强度乘 0.75。除基础残差外，还有平滑、锐化、敏感、严格等确定性视角，改变平滑、门限与衰减。附近检测会被合并，获得多个视角支持的候选得分更高。论文强调残差衰减是启发式的，只为露出肩部与次级脊，不是精确的物理减法。

**显著度分级峰拾取 × 多视角残差分析：** 显著度分级峰拾取负责按由高到低的显著度阈值先收孤立强峰再收弱结构，多视角残差分析负责在减去中值包络并做软掩膜衰减后换平滑与门限视角再搜肩部与次级脊，两者搭配是因为单次阈值无法同时兼顾强峰不漏与弱肩不淹，组合后形成先保大峰再揭小峰的候选池。

计数之前还有频带预算。50 至 10000 赫兹按 200、500、1000、2000、3500、5000、7500 赫兹分段，每段按残差能量、残差峰密度与对数幅度方差打分。文件级 Ridge 回归从 37 个信号导出量预测期望模态数，包括强峰与敏感峰计数、谱熵与平坦度、残差能量比、候选池大小、分数尾部统计与分段能量密度，经标准化、平方、变换与交互项得到 91 个回归输入。官方运行时预测数乘 1.15 安全系数，裁剪到 700 至 7000 行，按 25 取整，并受候选池大小限制。计数模型只决定多少个信号导出候选能留下，不发明频率。

### 原始频率衰减增益如何算，学习部分改什么不改什么？

每个被选中的峰先做抛物线频率细化。若左右负 3.01 分贝交点存在，原始衰减估计近似为圆周率乘以带宽；若交点无效，则用附近有效衰减估计的中值代替。复频谱在细化频率处插值得到频响，增益按挑战基线的模态响应约定，用虚部与频率衰减的正弦项组合估计。于是频率位置、初始衰减、初始增益与行数都直接系在实测响应上。

峰宽与复幅度在重叠下系统性偏置，因此用小多层感知机做乘性修正而非预测绝对值。网络输入有 11 个通道，包括对数频率、对数原始衰减、对数原始增益绝对值、正负 100 赫兹内局部密度、候选处实测幅度、5 段独热编码与一个预留显著度通道。网络为两层 64 单元 ReLU 加 0.3 丢弃率，共 5058 个可训练参数，输出两个对数比，推理时裁剪到负 2 至 2 再指数相乘回原始衰减与增益。频率字符串原样复制，校准器不能增删重排行。

**频带预算 × 学习计数目标：** 频带预算负责按 50 至 10000 赫兹分段的残差能量与峰密度给每段分配名额，学习计数目标负责用 Ridge 回归从 37 个信号量预测文件级总行数再乘 1.15 安全系数并裁剪到 700 至 7000 行，两者搭配是因为只按能量分配会偏向高能量段、只按总数截断会丢失频段结构，组合后实现总数控制与分段结构共同决定哪些候选保留。

**原始衰减增益估计 × 模式级 MLP 校准：** 原始衰减增益估计负责用负 3.01 分贝带宽得衰减初值、用复频谱虚部得增益初值并与峰位置绑定，模式级 MLP 校准负责只输出两个对数比乘性修正衰减与增益且不移动频率不增删行，两者搭配是因为重叠会系统性加宽带宽并污染幅度，组合后把物理定位与局部偏置修正解耦并限制学习只能做偏置校正。

次级变体的高频修正只在已校准表上操作。另训一个 Ridge 模型从 6 个表导出特征预测 6 至 10 千赫兹目标数，特征包括 3 千赫兹以下、3 至 6 千赫兹、6 至 10 千赫兹计数、总数、高频占比与低频占比。需要增加的行数经收缩与最大目标比裁剪后计算，低于 50 行则忽略，否则有放回采样高频行并在正负 20 赫兹内抖动频率，只对新行做衰减乘 3、增益乘 2，原行只受读写舍入影响。论文将其定性为有界密度修正而非精确重建隐藏模态。

### 哪些参数被训练，监督从哪里来，何时冻结？

需要训练的是两个 Ridge 计数模型与一个模式级多层感知机。全局计数模型在 300 个合成仿真响应上训练，240 个训练、60 个留出验证，输入是信号导出量，目标是文件级模态总数。高频计数模型在开发模态表上拟合，输入是已校准表的分段计数与占比，目标是 6 至 10 千赫兹段数。多层感知机在开发候选与仿真真值按频率匹配后训练，目标是两个对数比，训练至多 50 轮并用文件级验证选最优轮。

监督来源都是开发阶段的仿真器生成数据，不含官方测试真值。论文明确学习部件在官方推理前固定，官方推理是确定性中央处理器运行。梯度路径只存在于开发训练阶段，推理阶段没有梯度更新，也没有按文件重置或在线适应。原文未报告优化器类型、学习率与批大小的具体值，这些缺项在复现时需要按代码核对，不能从模型名称推定。

一个容易误解的点是显著度通道。论文说提交的版本表格只含 3 个必需输出列，因此预留的显著度通道在提交系统中恒为零。这意味着训练时可能用到的该通道信息在推理时没有生效，复现时应保持同样置零而不是自行补值。

### 开发诊断与官方运行的条件是什么？

开发诊断分两块。计数模型用留出集评估，留出目标跨度大，均值预测接近均值目标，但单文件绝对误差不可忽略。多层感知机报告最优轮的训练与验证均方误差，这些是训练诊断，不是组织者的最终任务分数。论文明确官方目标模态表对估计器不可见，提交材料也不含这些表，因此官方统计只能描述实现行为与可复现性，不能读成优劣证明。

官方集含 16 个无标签脉冲响应。两套变体在 Windows 11 与 Python 3.12 下 1 次确定性中央处理器运行产生。主流水线总耗时 5974.07 秒，平均每文件 373.4 秒；完整次级运行总耗时 5974.80 秒，密度级在 16 个文件上共增加约 0.73 秒。这组时间说明主要成本在谱前端与候选搜索，密度填充本身很快。

输出规模上主表共 54785 行，中位数每文件 3365.5 行；增广表共 71506 行，增加 30.5%，全部 16721 个新增行都在指定高频段。6 至 10 千赫兹行数从 8329 增至 25050。有两个响应没有增加，最大增加 1773 行。这些是行为统计，是否提升官方指标待验证。

### 官方 16 个文件返回了多少行，增广改变了哪里？

要回答的核心问题是增广是否只改变高频密度而不动主表。比较条件是同一 16 个文件、同一主流水线、同一确定性运行，唯一差别是最后是否执行有界高频填充。指标方向不是越大越好，而是看行数分布与可支撑性：主表强调每行有可见谱依据，增广表以可能过填与相关插入行为代价换高频召回假设。

| Output | Min | Median | Max | Total |
| --- | --- | --- | --- | --- |
| Primary rows | 3073 | 3365.5 | 3810 | 54785 |
| Augmented rows | 3073 | 4617.0 | 5374 | 71506 |
| Added rows | 0 | 1096.5 | 1773 | 16721 |
| Primary 6–10 kHz | 352 | 538.0 | 674 | 8329 |
| Augmented 6–10 kHz | 512 | 1521.0 | 2364 | 25050 |

上表按最小值、中位数、最大值与总数给出两套输出的行数对照。主要收益是高频段行数明显提升，中位数从 538.0 增至 1521.0，总数从 8329 增至 25050；具体代价是新增行全部集中在 6 至 10 千赫兹且来自重采样克隆，频率抖动只在正负 20 赫兹内，原表分布被复制而非独立验证。未胜出项是两个文件增加为零，说明密度请求低于 50 行阈值时会被忽略，增广并非对每个文件都生效。

逐文件曲线进一步确认上述判断。导读时把横轴文件编号与纵轴输出模态数对齐，再比较蓝橙两条线的相对位置。

> **看图路径：** 1. 先看纵轴输出模态数与横轴 0001 至 0016 文件编号，确认蓝色圆点与橙色方块图例；2. 逐文件比较蓝线保守表与橙线增广表的垂直差距，找出差距为零的 0008 与 0013；3. 观察橙线在 0009 附近的上冲与整体波动，判断增广只抬高部分文件的高频计数

[![原论文 Figure 3：Per-file output counts. The augmented proposal differs from the primary proposal only through the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e642d266c103/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e642d266c103/figure-3.png)

*论文图 3。原论文 Figure 3：“Per-file output counts. The augmented proposal differs from the primary proposal only through the bounded high-band filling stage.”。*

该像素图横轴为 0001 至 0016 共 16 个文件，纵轴为输出模态数从 3000 至 5500，蓝色圆点线为保守主表，橙色方块线为增广表。可见蓝色线大多在 3100 至 3810 之间波动，橙色线大多在其上方约 3800 至 5300 之间波动，仅 0008 与 0013 两处橙蓝几乎重合，对应无增加的两个文件，0009 处橙线出现明显上冲。这支持增广只通过高频填充抬高部分文件计数的说法，也显示增广幅度随文件而异，不能把平均增量推广到每个文件。

### 若只看可重放的训练与耗时证据，能支撑什么？

论文没有给出拿掉某个组件后官方分数变化的消融表，因此只能用开发诊断与运行耗时做有限支撑。比较问题是学习部件是否稳定、成本主要花在哪里。公平条件是同一仿真开发集划分与同一官方运行环境，指标方向是误差越小越好、耗时增量越小说明密度级越轻。

| 环节 | 训练或推理对象 | 规模 | 关键指标 | 运行条件 |
| --- | --- | --- | --- | --- |
| 计数模型划分 | 合成仿真响应 | 300 个中 240 训练 60 留出 | 留出跨度 928 至 14092 个模态 | 公开仿真器生成 |
| 校准器训练 | 对数比两目标 | 最优第 47 轮 | 验证 1.659 训练 1.946 | 至多 50 轮文件级验证 |

上表整理了可逐字回溯的开发与成本证据，每格数字都能在正文连续原句中找到来源。主要判断是计数模型训练规模明确但留出误差仍有数百量级，校准器验证误差低于训练误差但仍是训练诊断而非最终分数，推理成本几乎全在主前端而密度级可忽略。具体代价是原文未报告优化器与学习率等超参数，且高频 Ridge 系数不在独立检查点中，缺开发表就无法精确再生次级变体。未评测边界是不同板分布下的泛化情况，固定衰减乘 3 增益乘 2 是经验选择。

**峰支撑保守表 × 高频密度填充：** 峰支撑保守表负责保证每一行都有可见谱候选来源以控制误检风险，高频密度填充负责在 6 至 10 千赫兹按预测目标有放回重采样并抖动正负 20 赫兹再乘固定衰减增益倍数以补可能塌缩的隐藏模态，两者搭配是因为高频密集重叠区一个谱峰可能藏多个快衰模态，组合后形成精度与召回的两个可比工作点而非把假设藏进主估计器。

### 峰中心假设在什么情况下会失效？

主要局限是两套变体仍以峰为中心。残差掩膜能露出肩部，但不能可靠分离合成一个光滑结构的多个模态。负 3 分贝宽度反映的可能是局部重叠而非单个物理模态的衰减，这正是需要校准的原因。开发匹配也带来局限：多层感知机只在能与仿真模态配对的提取候选上训练，对完全被淹没的模态没有直接监督。

增广变体的局限更具体。重采样保留当前表的局部分布，但插入频率没有独立可见峰支撑，固定倍数是经验开发选择，未必泛化到所有板分布。论文还自报一个版本失配：存储的计数检查点含 7 对频带能量与密度，而官方提取命令在增加 7.5 千赫兹切分后算出 8 个分配段，导致第八对未被消费，且最后 1 对被消费区间的边界与拟合时不同。这是提交运行的明确限制。

表述上论文区分了直接报告、有限解释与未验证推测。行数、耗时与训练误差是报告；主表低误检风险、增广高召回倾向是有限解释；能否提升组织者最终指标是待验证，不应把行为统计读成性能承诺。未测量误判率、延迟与成本改善时，不承诺这些量得到改善。

### 复现应先做什么，哪些材料可核对？

复现先固定信息条件：只用未归一化 NPZ 响应，不用峰归一化 WAV，不读盘参数与官方目标表，不调用被排除的解析频率公式。按 8 倍补零实数傅里叶变换、对数幅度、显著度分级、多视角残差 4 轮、合并与频带预算、Ridge 计数乘 1.15 并裁剪取整、抛物线细化与带宽初值、复响应增益、MLP 裁剪校准的顺序走通主系统，再单独开关高频填充得到次级表。

需核对的关键超参数包括分段边界、最小间隔的频率依赖、4 轮残差每轮乘 0.75、91 维回归输入构成、700 至 7000 行与 25 取整、高频收缩为 1 与最大目标比为 4、低于 50 行忽略、抖动正负 20 赫兹、新行衰减乘 3 增益乘 2。资源状态是正文开源声明的唯一依据，本次未发现来源绑定且完成超文本传输安全协议状态验证的资源，因此不得声称代码模型或数据已公开，只能按论文文字与随附元数据核对。

精确再生次级变体还需开发模态表以拟合高频 Ridge 模型，这些系数不在独立检查点中。若缺该表，只能复现主表与密度逻辑的行为，不能声称逐行复现官方增广表。运行环境应尽量对齐 Windows 11 与 Python 3.12 的确定性中央处理器运行，并记录总耗时量级以判断前端成本是否一致。

### 何时值得尝试这种分段解耦，还需补哪项验证？

当任务同时存在可见峰定位、重叠偏置与高频少计数 3 种不确定性，且要求每一行可追溯到实测响应时，这种把频率支撑、偏置校准与数量假设分开的做法值得尝试。它让主表保持保守可解释，让高频假设以可选块隔离存放，官方分数变化可主要归因于高频计数行为而非换了另一个估计器。反之，若目标是精确重建每个隐藏模态的参数，克隆加抖动的有界填充并不提供独立证据，不应采用。

还需补的最有信息量的验证是在组织者标签或等效独立测试集上，用同一官方指标比较纯峰提取、残差扩展、学习计数控制、多层感知机校准与密度填充的增量贡献。可能的扩展包括局部矩阵铅笔或子空间估计、不确定性感知计数、以实测残差为条件的学习提议分布替代克隆行，以及重建剪枝。总体趋势不等于每组每步成立，增广在部分文件上无增加的事实提醒我们按文件报告效果而不是只看总数。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf#page=1)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d81d81e2ccc/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf#page=2)

另有 3 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
