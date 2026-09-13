---
title: "FM Parameter Estimation with Low-Order Rational Constraints on Wasserstein Loss Landscape"
date: 2026-09-13
draft: false
description: "论文针对双算子 FM 同时估计载波与调制频率易陷局部极小的问题，提出把频率比约束在相邻低阶有理边界之间的多起点梯度优化，在 90 组受控合成测试中把成功率提高到 96.7%，代价是每个用例要并行跑 9 个候选且真值恰在边界上仍会失败。"
tags: ["信号处理", "理论分析", "音乐", "音频理解"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_37"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "722ff6fa6fdccc60ba8bdfd428c37ddc5bd922fac2990e7291698404104cea06"
paper_digest_api_reader_plan_sha256: "e0f008ff725af44375a1d5be77cbce7cfee158d768fce8522dc825348e5ea25d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2f3d24c8420a6a1a2cd3864d09a4ae22ce2a6609c2c872216a6a6d4a63e788c0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "fee7bd215fb8934a0ea68a63b19d316c929599b18659adf855cbf562a5fd708d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9ec777136afabb21b6aeab812f39b5a59dd210ffc6362dfe529c644250ebda94"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f0ddec5e967f83a5093b25fb1ed40bb6b5702ef7064f0a8accd1427dc5a3ec4e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.theory","label":"理论分析"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"}]
paper_digest_primary_task: "音频理解"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 有脊的搬土损失：低阶有理比如何卡住双算子 FM 频率估计

> 英文题目：*FM Parameter Estimation with Low-Order Rational Constraints on Wasserstein Loss Landscape*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_37`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf)

标签：#信号处理 #理论分析 #音乐 #音频理解

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Ryoya Tabata：机构信息未能从会议 PDF 纯文本可靠映射
- Masaki Iwaya：机构信息未能从会议 PDF 纯文本可靠映射
- Kazunobu Kondo：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文面向双算子频率调制合成中由目标幅度谱同时估计载波频率与调制器频率的任务，输出两者取值，不同频率配置可产生相似频谱并形成密集局部极小使无约束优化易陷入伪解。方法先以一维沃瑟斯坦距离刻画归一化功率谱间传输代价，利用累积分布差积分与保序匹配得到分段连续损失并输出其梯度结构供优化使用。接着分析负频率折叠与折叠边带排序翻转，论证其在有理频率比处形成不可微脊线并输出相邻低阶有理边界划分的楔形区间。最后将频率比以Sigmoid重参数化约束在单个楔形内做多起点约束优化，以各区间最低沃瑟斯坦损失对应的估计作为最终输出。相对随机初始化无约束搜索，关键差异在于把竞争极小所在区间在结构上排除在搜索空间之外而非仅改善起点，从而避免跨脊陷入邻区伪解。在90个合成测试用例的评测条件下，Constrained方法的成功率指标为96.7%，高于Random基线的成功率指标68.1%。该结论适用边界受限于双算子合成且调制指数已知、显著边带低于奈奎斯特频率的情形，真实音频与边界真值情形尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要从目标声音反推 FM 参数，为什么难？

输入是本论文研究的一段目标声音，目标是同时估计双算子频率调制合成中的两个频率参数：载波频率 fc 和调制器频率 fm。调制指数 β 在每次估计中视为已知，幅度与相位因使用归一化功率谱而不进入损失。必须保留的信息是论文只做合成目标的受控估计，不处理任意真实录音，也不联合估计包络。

输出是一组让合成谱与目标谱在 Wasserstein-1 距离下最小的频率估计。困难来自 FM 参数到频谱的非线性映射。按雅可比-安格展开，输出可写成无穷多个正弦分量之和，频率位于 fc+nfm，幅度由贝塞尔函数 Jn(β) 决定。频率比 ω=fm/fc 为有理数时分量呈谐波排列，为无理数时呈非谐波排列。

不同参数组合可能产生相似的幅度谱，于是在损失面上形成大量局部极小。初学者常误以为峰对准了就能梯度下降，但逐点比较的损失在峰错开时梯度接近于零，优化器无处用力。

**频率调制合成 × 边带结构：** 频率调制合成负责用载波 fc、调制器 fm 和调制指数 β 生成声音，边带结构负责解释声音由哪些频率成分组成：按贝塞尔展开，频谱出现在 fc+nfm 处、幅度正比于|Jn(β)|，频率比 ω=fm/fc 决定这些成分是谐波还是非谐波，两者搭配才能把参数变化翻译成频谱变化。

沿一个样本走一遍有助于建立依赖：给定 fc=440 Hz、fm=220 Hz、β=3 生成约 1.5 秒信号，加汉宁窗并做 131072 点 FFT 得到归一化功率谱。另一组候选 fc、fm 生成预测谱，计算两者 W1 距离作为损失。用 Adam 同时更新 fc 和隐含 ω，再由 fm=ωfc 得到调制频率。后续所有分析都围绕这个闭环中损失面的形状展开。

### 已有路线在频率估计上卡在哪里？

同输入、同目标的已有工作可分为 4 类。遗传算法与进化策略直接搜索参数空间，能跳出局部极小但计算量大且无全局最优保证。基于时频脊和分布导数的方法利用调制边带或瞬时频率结构，给出模型特定的直接估计量，不依赖大规模数据，但对两算子 FM 的联合频率优化并不直接适用。

编码器式深度学习如 Sound2Synth 学习从音频特征到合成器参数的直接映射，推理快但需要大量训练数据且在分布外声音上吃力。流式生成模型估计参数分布而非点估计，能表达多模态但可能以重建精度换多样性。可微合成如 DDX7 用自动微分做梯度优化，但通常回避同时优化 fc 与 ω，要么固定比值、要么依赖外部基频估计。

在损失层面，标准谱损失对频率梯度不稳定，Hayes 等人的复指数代理加 Wirtinger 导数让多正弦频率估计可行，但作者报告将其扩展到双算子 FM 时只有初值足够接近真值才能收敛。谱最优传输提供另一种思路，Torres 等人用它改善谐波合成器的音高估计，Matsubayashi 发现 Wasserstein 损失比谱均方误差更光滑。但这些工作没有系统刻画 FM 特有的脊结构。

**Wasserstein-1 距离 × 频谱均方误差：** 频谱均方误差负责逐频点比较幅度是否对齐，峰错开就几乎没有梯度，Wasserstein-1 距离负责计算把一份归一化功率谱的能量搬到另一份所需的最小代价，即使峰不对齐也能给出反映频谱邻近程度的梯度，论文用后者替代前者正是为了在峰错位时仍能指引频率移动。

本论文的对照口径因此是同运行阶段的梯度优化：共享 W1 损失、共享 Adam 设置，只改变是否在优化全程维持频率比约束，从而隔离约束本身的作用。

### 论文把什么设为已知，把什么留给优化？

论文把任务限定为双算子 FM 的受控反问题。已知条件包括调制指数 β 在单次运行中固定、幅度 A 因归一化而不影响损失、采样率 44100 Hz 与 FFT 配置固定。未知量是 fc 与 fm，论文把它们重写为 fc 与 ω 的组合，优化这两个自由变量。

搜索框设为 fc 在 30 到 2000 Hz、fm 在 20 到 1500 Hz 之间。脊边界取自低阶有理数集合，覆盖折叠尖点与排序转移的可视显著位置，并划分出 9 个不重叠的光滑区。这种限定的理由在原文有明确安排：脊的位置由频率比几何决定、与 β 无关，而 β 只通过贝塞尔权重改变脊的显著程度。

固定 β 单次运行，就能在不改变边带权重分布的前提下评估频率比约束。再用多个 β 值检验不同复杂度下的表现。若把 β 也放开，脊显著性与分区有效性会纠缠，无法判断改进来自约束还是来自权重变化。

教学例子：若真值 ω=0.25 恰为边界 1/4，它同时是两个相邻楔形区的边缘，按不重叠划分没有一个开区间在内部包含它。这正是后文失败案例的来源，例子只说明划分逻辑，不添加新数值主张。

### 从脊的结构到分区优化，整体思路是什么？

方法全景可分为 3 步。第一步是刻画损失面：比较谱均方误差与 W1 在贝塞尔谱、无折叠、解析折叠、真实 FFT 4 种表示下的形状，确认折叠是脊的来源，并用有理比直线叠加验证脊与 ω=m/n 对齐。第二步是构造约束：把 ω 限制在相邻低阶有理边界围成的开区间内，用 Sigmoid 把无约束变量映射进去，保证优化全程不跨脊。第 3 步是多起点决策：每个楔形区各跑一路，以中点为初值，并行优化后选 W1 最小者作为最终估计。

下面先看 4 种表示的对比图，理解为什么必须在含折叠的表示下讨论 W1 损失，再看有理线叠加图确认分区的几何依据是什么。

> **看图路径：** 1. 先对比面板 a 与面板 b，看谱均方误差的网状局部极小如何变为 W1 的光滑盆地；2. 再对比面板 b 与面板 c，看加入负频率折叠后出现的对角脊走向；3. 最后对比面板 c 与面板 d，确认解析折叠模型与真实 FFT 功率谱脊位置一致；4. 定位每幅图中红色星号代表的真值点，确认 W1 在真值处取得最小值

[![原论文 Figure 1：Loss landscapes for carrier frequency fc = 440 Hz, modulator frequency fm = 220 Hz, β = 3; the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/d5306f80216f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/d5306f80216f/figure-1.png)

*论文图 1。原论文 Figure 1：“Loss landscapes for carrier frequency fc = 440 Hz, modulator frequency fm = 220 Hz, β = 3; the red star indicates the target parameters.”。*

四面板的教学价值在于分离两个因素。面板 a 的谱均方误差呈网状细线局部极小，远离对齐即梯度微弱。面板 b 的无折叠 W1 非常光滑，但它对应双边全频轴，不符合实值信号 FFT 只看正频率的实际。面板 c 加入解析折叠后出现对角脊，面板 d 的真实 FFT 功率谱与之高度一致。这就把后续约束的依据从理想模型搬到了实际 FFT 流程上。

再看同一 W1 损失面上叠加有理比直线的结果，确认每条颜色突变脊是否压在等频率比射线上。

> **看图路径：** 1. 沿横轴 fc 与纵轴 fm 确认坐标为频率平面，颜色越深表示 W1 损失越小；2. 逐条检查图例中 1/4 至 2/1 虚线是否压在颜色突变的脊线上；3. 注意红色星号落在 ω 等于 1/2 线上，理解脊既经过真值也遍布全图

[![原论文 Figure 2：W1 distance landscape (same as Fig. 1d) with rational frequency-ratio lines ω = m/n overlaid.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/d5306f80216f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/d5306f80216f/figure-2.png)

*论文图 2。原论文 Figure 2：“W1 distance landscape (same as Fig. 1d) with rational frequency-ratio lines ω = m/n overlaid. The ridges align with these rational boundaries.”。*

该图把抽象的有理数条件变成可操作的分区线：从原点出发的射线即等 ω 线，脊沿这些射线分布。真值星号落在 1/2 线上，提示即使真值本身也在脊上，优化仍需处理跨脊与区内局部极小两类困难。分区不是为了消除真值处的不可微，而是把竞争极小在结构上排除在搜索空间之外。

**负频率折叠 × 排序转移：** 负频率折叠负责把低于 0 Hz 的下边带取绝对值反射到正频率轴，使支撑点位置出现 V 形不可微尖点，排序转移负责在两个折叠边带重合、交换前后顺序时改变 1 维最优传输的累积匹配顺序，两者分工不同但都在有理频率比处制造不可微脊，共同把参数空间切成光滑楔形区。

### 折叠尖点与排序转移如何制造不可微脊？

组件层面有两个机制。第一个是频率折叠：实值谱只保留正频率，低于零的下边带按折叠频率等于 fc 乘以 1 加 n 倍 ω 的绝对值被反射。当 ω 扫过 1 除以 n 的绝对值时，该曲线呈 V 形，导数跳变量为 2nfc，经链式法则直接传给 W1。

第二个是排序转移：两个折叠边带在特定有理比处重合，例如涉及阶数组合给出 2/3、2/5、2/7 等位置，交换前后顺序。1 维 W1 依赖累积分布函数的有序匹配，顺序一变，梯度即出现断裂。低阶有理数涉及低阶边带，贝塞尔系数大，脊更显著。高阶有理数涉及快速衰减的高阶边带，脊可忽略。

因此在相邻低阶边界之间，损失实际上光滑，约束到单个楔形区就去掉了其他楔形区的所有竞争极小。原文还用 1 维离散 W1 的闭式求和解释：在支撑点排序不变的区域，W1 继承支撑点函数的光滑性，只在排序变化或支撑点本身不可微处不可微。

实现上约束写成 ω 属于开区间，优化变量改为无约束的 a，经 Sigmoid 映射到区间内，再按调制频率等于 ω 乘 fc 求出 fm。初值取楔形区中点与可行载波范围中点，避开边界上的不连续点。

**频率比约束 × Sigmoid 重参数化：** 频率比约束负责规定 1 次优化只允许 ω 停留在相邻低阶有理边界围成的开区间内，Sigmoid 重参数化负责把无约束变量 a 映射到该区间并按 fm=ωfc 求出调制频率，前者给出分区思想，后者给出不用投影、可直接用 Adam 求导的实现，使约束在整个 1500 步迭代中始终成立。

### 没有神经网络训练时，实际计算是什么？

本研究没有训练神经网络，也就没有训练集权重更新、验证早停或编码器学习阶段，必须明确说明以免误解。实际计算是每个测试用例的直接数值优化：用 PyTorch 自动微分对 W1 损失求关于 fc 与 a 的梯度，用 Adam 以学习率 0.02 迭代 1500 步。9 个候选作为批张量并行更新、彼此独立。

Sigmoid 重参数化在每一步按构造保证 ω 不越界，不是靠惩罚项或投影修正。单个用例 9 候选 1500 步在单块 RTX A6000 上约 3.4 秒，这属于推理优化成本而非训练成本。比较的 3 种策略共享同一损失与优化器：全程约束组始终维持区间约束，仅初始化组起点相同但迭代中允许跨界。

随机组从全框均匀抽 9 个起点且无约束。这种设计使初始化位置等价，只检验维持约束的效果。原文未报告梯度裁剪、学习率衰减或重启时机等细节，这些缺项在复现时需按原文固定值先跑通，再自行记录敏感性，不能从 Adam 名称推定默认超参数。

**多起点选择 × 调制指数：** 多起点选择负责对每个楔形区各跑一路优化再按 W1 损失最小保留一路，以应对真值区间未知，调制指数负责通过贝塞尔权重决定哪些脊显著但不改变脊的位置，论文在每次估计中固定 β 而在不同 β 下重复评估，正是为了隔离频率比约束的效果，同时检验频谱复杂度变化时的稳健性。

需要纠正的误解是无训练不等于确定性求解：随机基线仍有抽样随机性，且非凸优化对起点敏感。固定 β 也不意味着输出确定，只是单次运行的边带权重固定，跨 β 评估仍显示不同难度。

### 用什么数据、什么条件比较三种策略？

实验要回答的核心问题是维持频率比约束是否比仅用好初值或随机初值更可靠，以及这种优势是否随频谱复杂度与频率比区间变化。公平条件是三者共享 W1 损失、Adam 配置、候选数 9 与迭代步数，区别只在约束的有无与维持时机。

指标方向是相对误差越小越好，成功定义为频率比误差小于 1%，同时报告载波与调制频率误差及音频域谱指标，原文明确因亚百分比载波误差即引起相位漂移而不采用时域 SI-SDR。下表把合成与搜索条件集中呈现，便于核对复现时的采样、窗、补零与参数网格，避免把不同 β 或不同 ω 带的数字混为一谈。

表前问题是：在相同 W1 损失与相同优化预算下，1 次估计的输入表示与搜索范围是否一致？表中各行给出可直接照抄的配置。

| 配置项 | 取值一 | 取值二 | 取值三 | 说明 |
| --- | --- | --- | --- | --- |
| FFT 补零 | 131072 点 | 2 倍补零 | 约 0.34 Hz bins 间隔 | 使梯度更平滑 |
| 调制指数 | β 取 1 | β 取 2 | β 取 3 | 覆盖近正弦到中等复杂 |

该网格有意包含 1/4、1/3、2/5、1/2、2/3 等精确边界与 0.30、0.55 等近边界值，属于最坏情况压力测试，不能把边界上的失败率直接外推为日常分布。显著边带在最高 β 下仍远低于奈奎斯特，实验隔离的是 0 Hz 折叠而非采样混叠。作者也指出混叠区可能引入新脊但本次未评测。未胜出项是初始化组起点已很好却仍允许跨界，这为后文反证维持约束的必要性埋下对照。

### 维持约束换来了什么，又付出了什么？

主结果按参数误差组织。3 种方法的中位数接近，说明多数简单用例都能收敛，差异集中在上尾严重程度。约束组成功率最高，90 分位数保持在 1% 以内，而仅初始化组与随机组的上尾可达十几到几十个百分点。分布右偏明显，约束组呈双峰：要么亚 1% 成功，要么超 10% 失败且集中在有意设置的低阶边界用例，阈值选择不敏感。

音频域的谱最优传输、对数梅尔均方误差与对数谱距离也呈现中位数接近、90 分位数约束组更低的格局。约束组中位数谱最优传输略高，原文解释为真值在边界上时 Sigmoid 映射的残余误差所致，这是为降低最坏情况付出的典型代价。下表把成功率与分 β、分 ω 带的 90 分位数放在同一口径下比较，比较对象均为实际可运行的 3 种策略，不用事后最优代替可部署收益。

表前问题是：在相同候选数与相同 1500 步优化预算下，谁的最坏情况误差更可控？指标方向均为误差越小越好，成功率越高越好。

| 条件 | 指标 | Random | Init-only | Constrained |
| --- | --- | --- | --- | --- |
| 全部 90 组 | 成功率 ω 误差小于 1% | 68.1% | 80.0% | 96.7% |
| β 等于 3 复杂谱 | p90 ω 误差 | 351.4% | 35.5% | 4.2% |
| β 等于 1 近正弦 | p90 ω 误差 | 2.0% | 1.1% | 0.3% |
| 低频比小于 0.5 | p90 ω 误差 | 177.8% | 33.3% | 0.7% |
| 高频比大于等于 1 | p90 ω 误差 | 0.1% | 0.3% | 0.1% |

主要收益在复杂谱与低频比窄楔形区，高 β 激活更多边带使脊变密，低 ω 区相邻有理边界的频率间隔按 fc 乘 Δω 收缩。例如 400 Hz 下载波在 1/4 到 2/7 之间仅约 14 Hz，而 1 到 2 之间达 400 Hz，无约束轨迹更易跨界。代价除边界残余误差外，还有 9 倍并行计算与需预先枚举边界。未胜出项随机组在高频比宽楔形区也能做好，说明约束的价值与几何密度强相关，不是全域均匀增益。

下面用一个挑战用例的优化轨迹图把上述数字落到具体路径上，对比 3 种策略从起点到终点的行为差异。

> **看图路径：** 1. 先看左图受约束轨迹如何各自停留在白色虚线楔形区内并汇聚到绿点附近；2. 再看中图相同起点但越过虚线后如何停在相邻楔形区形成较大误差；3. 最后看右图随机起点如何横跨多条脊并被选到远离真值的红星位置

[![原论文 Figure 8：Optimization trajectories for fc = 400 Hz, ω = 0.25, β = 3.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/d5306f80216f/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/d5306f80216f/figure-8.png)

*论文图 8。原论文 Figure 8：“Optimization trajectories for fc = 400 Hz, ω = 0.25, β = 3.”。*

该用例真值为 fc400 Hz、ω0.25、β3，3 组轨迹标题直接给出各自的频率比误差以便对照。左图各轨迹被限制在白色虚线楔形区内，最优红星紧贴绿点真值。中图起点相同但越界后陷入相邻楔形区，右图随机起点横跨多条脊并停在远离真值的平滑区内。读图时不把颜色深浅直接当性能好坏，需结合坐标确认是否回到真值点，这也说明陷阱不仅在脊上也在楔形区内部。

### β 与 ω 如何改变难度，约束为何仍有效？

消融按 β 与 ω 两个因子组织。β 增大会激活更高阶边带，使更多有理比显现为脊，损失面竞争极小变密。ω 减小会使低阶边界在频率平面上更密集，楔形区变窄，跨界更容易。约束组把每路搜索限制在单个楔形区，排除了其他脊关联的伪极小，因此对 β 致密化稳健。但在极窄楔形区，Sigmoid 映射到小区间会衰减边界附近梯度，约束组也会受影响。

先看 β 扫描的四面板损失面，理解脊位置与显著性分离如何随调制指数变化而保持稳定。

> **看图路径：** 1. 按 β 等于 1 到 β 等于 5 顺序看脊的数量如何增加而位置基本不动；2. 对比 β 等于 1 时近乎光滑的盆地与 β 等于 5 时密集的辐射状虚线；3. 注意每幅图独立归一化，只能读结构密度不能跨图比较绝对损失

[![原论文 Figure 5：W1 loss landscapes for β = 1, 2, 3, 5 (f ∗ c = 440 Hz, f ∗ m = 220 Hz).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/d5306f80216f/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/d5306f80216f/figure-5.png)

*论文图 5。原论文 Figure 5：“W1 loss landscapes for β = 1, 2, 3, 5 (f ∗ c = 440 Hz, f ∗ m = 220 Hz).”。*

四面板横纵轴均为 fc 与 fm，红星为同一真值，颜色为各自归一化的相对 W1 损失。β=1 时只有 1 与 1/2 附近显著，近乎光滑。β=3 时 1/3、1/4、2/5、2/7 等显现，β=5 时更高阶脊进一步加密。位置基本不动，显著性随 β 单调增强，因此按最大预期 β 枚举边界可得到对更小 β 保守有效的划分，代价是楔形区更多。

再看误差分布随 β 与 ω 的变化。约束组在 β=1 时与对照接近，在 β=3 时优势拉开。低 ω 带 3 组差距最大，高 ω 带差距收敛。这支持原文的几何解释而非单纯调参效应。失败反例是约束组 9 次失败全部发生在 ω=1/3、β=3 的边界真值上，估计偏向约 0.22 的低比局部极小。

因不重叠划分没有一个开区间在内部包含边界真值。可能的缓解是边界周围加交叠区，但原文未评测，归为待验证。

### 哪些边界没有测，哪些结论不能推广？

论文直接报告的局限包括真值在脊边界上的系统性失败、仅用合成目标而无任意音频与听感评估、未联合估计调制指数与包络、未分析显著边带越过奈奎斯特的混叠区。初步探索提到三算子 FM 的 2 维比值截面也有有理组合脊，但未给出定量结果，不能视为已验证。

有限解释是脊位置与 β 无关而显著性与 β 有关，这在 β 取 1 到 5 的可视范围内得到支持，但更大 β 或不同采样率下的外推属于可能、待验证。相关性不等于因果：低 ω 窄楔形区误差大与跨界频繁同时出现，但未测量跨界次数到误差的因果链。未测量的量包括误判率的人听阈值、延迟与显存随候选数的扩展。

总体趋势不等于每组每步都成立。另一个特有误解是把中位数接近当成方法无差。原文箱线图显示四分位距近零而上尾分叉，评价应看 90 分位数代表的一成最坏情况，这正是自动参数估计可靠性的关键。还有误解是把 W2 与 W1 对立，原文已验证 W2 脊格局定性相同，只是本设置下 W1 优化更稳定，选择 W1 是稳定性考量而非脊理论只适用于 W1。

### 要复现分区优化，先做什么？

复现先做表示与损失：按 44100 Hz 生成 65536 点信号，加汉宁窗，做 131072 点 FFT，取平方幅度并归一化为功率谱，用 1 维累积分布差的绝对积分实现 W1。接着实现合成：按载波加调制项的正弦公式合成，或用贝塞尔展开核对边带位置，确认负频率折叠后与 FFT 谱一致。

优化部分用 PyTorch 自动微分，以 Adam 学习率 0.02 迭代 1500 步，同时优化 fc 与无约束变量 a，经 Sigmoid 映射到指定开区间并按 fm 等于 ω 乘 fc 求调制频率。边界枚举按最大预期 β 计算显著脊，本文用 1/4、2/7、1/3、2/5、1/2、2/3、1、2 划分 9 区，初值取区中点与可行载波中点。

评估用 90 组网格，成功阈 1%，同时看中位数与 90 分位数及箱线图上尾。还需补的验证是交叠分区能否修复边界失败、混叠区与三算子定量结果、任意音频与听感测试。资源状态方面，本次未发现来源绑定且完成 HTTPS 验证的资源，不得声称代码、模型或数据已公开，复现应按上述超参数自行实现。

### 何时值得尝试这种分区，多久能看到收益？

当任务是同时估计载波与调制频率、频谱较复杂且低频比区错误代价高时，值得尝试低阶有理边界分区。做法是先画 W1 损失面确认脊是否沿等 ω 射线分布，再按最大预期 β 枚举显著边界，每个楔形区各跑一路并选损失最小者。若 β 接近 1 或目标集中在宽楔形高 ω 区，随机或好初值已足够，分区收益有限。

收益体现在最坏情况而非中位数，评估必须包含 90 分位数与边界压力用例。代价是候选数倍增的计算与边界真值的残余误差，必要时考虑边界交叠。未来工作应先补交叠分区、混叠分析与任意音频听感评估，再扩展到高阶 FM 与调制指数联合估计。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf#page=2)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf#page=3)

[![原文数学表达区域 9，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1e635ccecb38/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf#page=4)

另有 84 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
