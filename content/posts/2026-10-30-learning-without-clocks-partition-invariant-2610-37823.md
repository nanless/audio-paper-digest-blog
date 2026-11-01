---
title: "Learning Without Clocks: Partition-Invariant Neural Network"
date: 2026-10-30
draft: false
tags: [音频分类, 视觉手势识别, 状态空间模型, 形式化分析]
categories: [论文速递]
description: "论文把事件流写成每到事件做跳变、事件之间按闭式漂移的模型，证明同时无关与穿越连续都等价于跳变可交换，并用快慢两条迹加累加器的最小 TM 层实现有序对交互，在开发集上比同读出的加性状态明显更好，但正式测试与最优精度尚未报告。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.37823"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "不用时钟的事件网络：切分不变、同时连续、顺序仍可见"
paper_digest_original_title: "Learning Without Clocks: Partition-Invariant Neural Network"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.37823v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.37823v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.37823v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"task","id":"task.visual-gesture-recognition","label":"视觉手势识别"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"method","id":"method.formal-analysis","label":"形式化分析"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把事件流写成每到事件做跳变、事件之间按闭式漂移的模型，证明同时无关与穿越连续都等价于跳变可交换，并用快慢两条迹加累加器的最小 TM 层实现有序对交互，在开发集上比同读出的加性状态明显更好，但正式测试与最优精度尚未报告。"
paper_digest_authors: [{"affiliations":["Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China"],"name":"Han Wang"},{"affiliations":["Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China","Science Island Branch, Graduate School of University of Science and Technology of China, Hefei 230026, China"],"name":"Jingyuan Bao"},{"affiliations":["Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China","Science Island Branch, Graduate School of University of Science and Technology of China, Hefei 230026, China"],"name":"Juntao Wu"},{"affiliations":["Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China"],"name":"Saiao Zhou"},{"affiliations":["Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China","Corresponding author: Yuman Nie"],"name":"Yuman Nie"}]
paper_digest_abstract_sha256: "c6d0f841eeaf1e669338f7833f89d368ee08ad9c0fd6ccb7509726dd98b43896"
paper_digest_sidecars: {"citation.bib":{"sha256":"17998403626958c8c62827bfe26d8175a0470146f318f0a1b4bd23bbba590aad","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-37823/citation.bib"},"citation.json":{"sha256":"a78f02a4be34f76af1eef92020153d34a056a086ee31b32134b8ae879e1480a8","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-37823/citation.json"},"citation.ris":{"sha256":"5d94250186e5cb07ec9a17faa9a66ce7be681ba416a19dc9673e00cd2665d1c3","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-37823/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"ea37b2a85c85cc7ea9df1467ef49cfba7fa79b3ec8b95b8f5799b3789c7f33a2","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-37823/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a73d08925a4227caded56279f613cd9e30b4d02f2e0b005f5e250b5b404697ae"
paper_digest_api_reader_plan_sha256: "f220aca62dc2f2c4e02c9fcd45a73a41d5f3ffd8fb6cb33eaeb75609b1139a7d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "463a7415bb9877a69685dad7e0b52f28c628b261eeb051e21a5a349bd129b0e4"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "b1f2471a20701c77cfe63a8094970d73e35df3b3dceffc0877250549a357fbbd"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "48669163711e7cf80088ced834996feaf062a50ce6a66b2f1b713085e52edf72"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "00da683301cb78e1242e7b2d645c360f21178a1dd8763feed093a6ffb2dabc7b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 不用时钟的事件网络：切分不变、同时连续、顺序仍可见

> 英文题目：*[Learning Without Clocks: Partition-Invariant Neural Network](https://arxiv.org/abs/2610.37823v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)；[视觉手势识别](/audio-paper-digest-blog/papers/?concept=task.visual-gesture-recognition)
- **研究方法**：[状态空间模型](/audio-paper-digest-blog/papers/?concept=method.state-space)；[形式化分析](/audio-paper-digest-blog/papers/?concept=method.formal-analysis)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.2/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Han Wang：Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China
- Jingyuan Bao：Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China；Science Island Branch, Graduate School of University of Science and Technology of China, Hefei 230026, China
- Juntao Wu：Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China；Science Island Branch, Graduate School of University of Science and Technology of China, Hefei 230026, China
- Saiao Zhou：Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China
- Yuman Nie：Hefei Institutes of Physical Science, Chinese Academy of Sciences, Hefei 230031, China；Corresponding author: Yuman Nie

## 📌 核心摘要

事件相机、人工耳蜗等传感器输出带时间戳的异步事件流，常规做法把事件装入固定帧或数据包，输出随之依赖人为划分。论文研究状态在每个事件处精确跳变、在事件之间按闭式漂移演化、查询可放在任意时刻的网络，证明同刻事件处理顺序无关、两事件交叉时状态连续、两跳变映射可交换三者等价；一旦跳变可交换，顺序信息只能来自跳变与漂移的非交换。基于此提出的无时钟事件层先以send-on-delta编码器把采样信号一致转为事件，再对受影响站点逐事件更新快迹、延迟迹与累加器构造可学习相关器，单层三维状态即可表达有序对交互。随后卷积头在站点网格上聚合，经锚点空间池化与跨查询时刻有界记忆累积，再由线性分类器输出各前缀 logits，单事件单站点代价约为1.9×10³次乘加、随事件数线性增长。在DVS128 Gesture开发集校准片段上以正确片段数为指标，有序TM状态高于同结构加性状态，198片段V1配置200 ms处170对152、800 ms处176对169。在音频验证集上以准确率为指标，增强配置下有序状态亦高于加性状态，SHD十点均值TM为81.80%对NS为64.31%，Speech Commands终点TM为79.56%对NS为48.98%。结论限于开发集与单层验证，正式测试、第二层增益与跨平台鲁棒性尚未完成，SHD与Speech Commands结果仍低于已发表测试准确率与紧凑卷积基线。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 事件相机和耳蜗信号为什么不适合先切成帧

刚进入事件视觉或音频领域的研究生，先要把输入想清楚。动态视觉传感器只在像素对数亮度变化超过阈值时输出一个事件，硅耳蜗在频率通道上发放脉冲，神经记录和用户行为也是时间不规则的数据流。每个事件带一个时间戳和一个类型，类型里包含位置或通道、极性以及只由该事件自身算出的标记。信息大量藏在何时发生和谁先谁后里，例如边缘运动方向或音素起始顺序。

传统做法是先立一个时钟：按固定宽度切帧或体素网格，再用卷积、循环或脉冲网络按步处理，或者把流切成固定时长、固定数量的包。问题是输出会跟着帧宽、网格相位和切包位置走，这些都是管线的人为产物。论文指出，硬分箱对时间戳没有有限利普希茨常数，在一个频率训练的检测器换个频率就明显退化，只移动小部分脉冲一个时间步就能欺骗脉冲网络。时钟先把信号弄变形，模型再学变形后的假象，这是本文的出发点。

### 已有异步与连续时间路线各自缺了哪一块

异步事件处理已有不少工作，动机多是省算力。稀疏异步卷积、图网络局部更新、逐事件递归网络、限制在线性注意力子空间的方法，以及学习离散事件码和事件嵌入，都在尝试一个一个处理事件。事件状态空间模型用精确衰减处理深层事件，实验显示它跨输入频率的泛化比循环和 Transformer 检测器好。脉冲网络方面，可学习膜时间常数、精确梯度、并行精确仿真和稀疏循环结构都在推进，但只改时间戳的攻击就能奏效，现有防御帮助不大。

连续时间序列模型从另一头逼近：ODE-RNN 和门控变体在观测点用门控映射更新隐状态，神经微分方程和对数签名变体由插值路径驱动向量场，结构化状态空间和选择性变体在线性隐状态上做文章。在线对数签名模型把异步观测写成带计数通道的事件增量，并在任意查询区间上复合，这已经有了切分不变的味道。但那条路线形式上排除重合的观测时间，只在固定事件顺序内证明连续，实验还用非交换生成元，高维时张量维度随通道数指数增长。论文要补的正是同时和穿越交叉这两处，以及高维传感器可负担的局部实现。

### 论文要同时满足的三个要求是什么

论文把目标拆成 3 个同时成立的要求。第一，切包不变：无论把流切成单个事件、1024 个事件一块还是 10 毫秒一块，输出都不变。第二，同时无关与穿越连续：传感器时间戳常被量化到 1 微秒，高事件率下大量事件共享同一时间戳，组内处理顺序是任意的，不应影响输出；时间戳抖动时输出应连续变化，即使两个事件前后错开也不应跳变。第三，顺序敏感：模型仍要能看出先 a 后 b 与先 b 后 a 的区别。

直觉上的张力在于，对同时顺序不敏感的更新似乎注定看不见顺序。论文的回答是把顺序信息交给事件之间的漂移：跳变本身可交换，跳变与漂移不可交换，顺序经由时间间隔进入状态。这就引出时间中介非交换这类模型，以及分辨率与鲁棒性的定量权衡，后文用定理把权衡写成界。

### 无时钟处理的整体流程是怎样的

整个计算沿着一个样本可以这样走。输入是一段窗口内的事件序列，每个事件有时间戳和类型。模型保持一个状态，状态在每个事件到达瞬间做一次跳变，在两个事件之间按闭式漂移演化，查询可以放在任意时刻，只读出当时状态而不修改它。读出把一个或多个查询时刻的状态映射为输出。窗口从冷启动开始，窗口之前事件不进入，查询包含时间戳小于等于查询时刻的全部事件。

包只是半开半闭区间加其中事件，包处理器给每个包一个映射。划分不变当且仅当满足复合律（Proposition 3），精确逐事件处理满足它，空包映射在连续均匀假设下形成矩阵半群。带记忆的读出会让网络输出依赖查询时刻表，但仍与切分方式无关，论文把这两者分开。

**划分不变 × 包：半开半闭区间加其中事件：** 包是左开右闭的时间区间加上其中事件，划分不变指无论切分点放在哪里，按包依次处理的结果都一样。论文用包处理器的复合律刻画它，事件模型的精确逐事件计算天然满足，切分只影响实现速度，不改变输出。

下图把分帧与无时钟放在一起对比，上面是帧宽和相位决定输入张量，下面是每个事件精确更新加闭式漂移，右图是两事件交叉时门控与 TM 输出的不同表现，观察任务是先看帧边界效应，再看状态轨迹，最后对比交叉处的跳变与连续。

> **看图路径：** 1. 先看上排分帧管线中事件穿过帧边界时计数如何突变；2. 再看下排每个事件处跳变、事件之间闭式漂移的轨迹；3. 对比右图门控更新与 TM 在两事件交叉处的连续性差异

[![原论文 Figure 1：Clocked versus clock-free processing.](https://arxiv.org/html/2610.37823v1/fig_overview.svg)](https://arxiv.org/html/2610.37823v1/fig_overview.svg)

*论文图 1。原论文 Figure 1:：“Clocked versus clock-free processing.”。*

从图中可见，分帧管线移动一个事件极小量就可能跨过帧边界使计数突变（Proposition 11），而 CFE 的状态轨迹在事件处跳变、之间平滑衰减，查询菱形可任意放置，划分不变由 Proposition 3 保证。右图门控更新在交叉处跳变且在精确重合处给出两个值，TM 连续但仍区分先后，这正是 Theorem 5 与 Theorem 8 要解释的现象。

\[x(T)=\Phi_{T-t_{m}}\circ J_{c_{m}}\circ\Phi_{t_{m}-t_{m-1}}\circ\cdots\circ J_{c_{1}}\circ\Phi_{t_{1}-t_{0}}(x_{0}),\]

上式是事件模型的定义：从初始状态出发，交替施加漂移与跳变，m 是查询时刻前最后一个事件的下标。它说明状态只由信号和查询时刻决定，与切包无关。

### CFE 网络从事件到预测的完整通路

把一个旋转手势的开关事件流或一段经编码的音频事件流放进来，先经过 CFE 层做精确逐事件仿射复合，可用分段并行扫描加速，切块只影响速度。查询以只读伪事件插入，复制站点状态漂移到查询时刻而不修改它。读出在每个查询时刻把站点状态做符号对数压缩、分块归一化，拼接 8 个原始逐站点查询特征，经站点网格卷积、锚点空间池化、跨查询有界记忆和线性分类器给出每个查询的预测。音频与耳蜗读出类似，只是换成小多层感知器加时间平均。

下图展示从事件流或编码器到 CFE 层、并行扫描与读出的完整结构，观察任务是先看事件如何进入站点，再看站点内部三块状态的箭头，最后看查询分支在哪里只读不写。

> **看图路径：** 1. 从左上事件流或左下编码器出发看事件如何进入 CFE 层；2. 看邻域作用范围、字母与站点状态的对应关系；3. 看查询与读出分支在哪里只读状态而不修改状态

[![原论文 Figure 2：The CFE network. An event stream (top left; ON and OFF events of a schematic rotating gesture),…](https://arxiv.org/html/2610.37823v1/fig_cfe.svg)](https://arxiv.org/html/2610.37823v1/fig_cfe.svg)

*论文图 2。原论文 Figure 2:：“The CFE network. An event stream (top left; ON and OFF events of a schematic rotating gesture), or a sampled signal converted into events by a send-on-delta encoder (bottom left,…”。*

从图中可见，事件流进入铺成网格的 CFE 层，红色像素事件影响邻域站点，TM 站点内快迹、慢迹与累加器的箭头分别对应写入、漂移拷贝与读出，并行扫描把事件仿射映射复合起来，读出分支只在查询时刻取状态。对无拓扑序列，点过程头给出精确似然（Proposition 23），采样信号经 send-on-delta 编码为事件（Proposition 22），避免了求积带来的偏差。训练用多前缀平均交叉熵做任意时刻分类，时钟基线也用同样多前缀目标取较好者，以保证公平。

### 同时、穿越与交换为什么等价

同时不变指两类事件的跳变在可达状态上可交换，穿越连续指两事件间隔趋于零时两种顺序的极限相等。定理说，对任意事件模型和任意类型对，这两条与跳变交换三者等价。若所有类型对都交换，状态与组内处理顺序无关，且在不跨过查询时刻的全部时间戳向量上连续，不只在固定顺序区域内连续。证明只用漂移与跳变的连续性，所以对非线性模型也成立。

\[\lim_{\delta\downarrow 0}J_{b}\circ\Phi_{\delta}\circ J_{a}(x)=\lim_{\delta\downarrow 0}J_{a}\circ\Phi_{\delta}\circ J_{b}(x),\]

上式是穿越连续的定义，两边分别是先 a 后 b 与先 b 后 a 在间隔趋于零时的极限。极限中漂移退化为恒等映射，剩下就是两次跳变的复合是否相等。

**同时不变 × 穿越连续 × 跳变交换：** 同时不变指同一时间戳的两个事件按哪种顺序处理结果相同，穿越连续指两事件时间戳前后错开时状态不跳变，跳变交换指两次跳变映射复合顺序可换。定理证明三者等价，不可交换时任何同时处理规则都救不回连续性。

推论是，没有任何同时处理规则能挽救不可交换的更新。按固定顺序处理同时组、把组内所有跳变作用到同一预状态上的组更新、把同时组换成指数和的规则，都只改变精确重合点的值，不改变两侧极限。带抖动的训练至多把参数推向交换，不能消除不连续。仿射判据把交换写成矩阵可交换加常数项条件，平移总是交换，而读了事件所写坐标的选择性更新在一般参数下不交换。

### 顺序信息如何只经过漂移进入状态

跳变交换后，顺序效应只能来自跳变与漂移的不交换。定理分两部分。若每个跳变都与漂移交换，则所有漂移可移到最左合并，状态与全部时间戳和事件顺序无关，模型对时间和顺序都盲。若跳变交换但至少一个跳变与漂移不交换，交换相隔小间隔的两个事件，状态差正比于该间隔，系数由流交换子在两条路径上的差给出。仿射情形有精确积分形式，首项是矩阵交换子与漂移的组合。

\[\begin{split}x_{ab}(T)-x_{ba}(T)&=\delta\,D\Phi_{T-t}(J_{a}J_{b}Y)\\ &\quad\times\bigl[C_{J_{b}}(J_{a}Y)-C_{J_{a}}(J_{b}Y)\bigr]+o(\delta).\end{split}\]

上式给出两条只差 1 对邻事件顺序的流在查询时刻的状态差，1 阶项是间隔乘以流的微分再乘以 2 个流交换子之差，余项是高阶小量。它把顺序敏感的来源和随间隔线性消失的速率写清楚了。

**漂移 × 跳变 × 时间中介非交换：** 漂移是事件之间状态按连续演化规律的变化，跳变是事件到达瞬间对状态的离散改写。时间中介非交换指跳变之间可交换但跳变与漂移不可交换，顺序信息只能靠时间间隔经由漂移进入输出，且效应随间隔线性消失。

推论把这类模型称为时间中介非交换模型：跳变两两交换，且至少一个跳变不与漂移交换。加性模型属于其中，但它只对时间和顺序有 1 阶敏感，知道谁更近，却形不成事件对之间的交互。分辨率鲁棒界说，输出对时间戳利普希茨常数为 L 时，区分间隔的两种顺序需要间隔足够大，固定间隔下去分辨任意小间隔必然不连续。分箱输入在物理时间下更脆弱，而 TM 移动多个事件的改变量正比于总位移。

### 最小 TM 层如何用三块状态做出有序对

最小 TM 层在一个站点放三块状态。事件把固定向量写入快迹，漂移把快迹延迟拷贝进慢迹，事件再用与标记有关的门控和读出矩阵把慢迹读进累加器。快迹和累加器按对角正速率衰减，慢迹向增益后的快迹松弛。关键是事件从不写慢迹，也从不读事件所写的块，按仿射判据所有跳变交换。加性对照把累加器更新换成只加常数，选择性对照换成读快迹，三者状态维度和漂移相同。

\[\dot{u}=-\Lambda_{u}u,\qquad\dot{s}=\Lambda_{s}(Pu-s),\qquad\dot{v}=-\Lambda_{v}v.\]

上式是事件之间的漂移，快慢迹与累加器的演化都是线性的，慢迹方程把快迹经增益延迟进来，这正是顺序信息进入的通道。区间漂移有闭式指数加耦合项，数值实现用稳定形式保证近似相等速率与长间隔的精度。

**快迹 × 慢迹 × 累加器：** 快迹直接累积事件写入，慢迹由漂移把快迹延迟拷贝，累加器在每个新事件到达时读出当时慢迹并累积。三者分工使事件从不写入自己要读的块，保证跳变交换，同时累加器自然形成先慢后快的有序事件对求和。

闭式展开表明，快迹是各事件指数衰减之和，慢迹是延迟核与事件之和，累加器是对每个后事件把当时慢迹读出再衰减到查询时刻的双重求和。因为核在非正宗量为零，同一组内事件不相互作用，双重求和只跑有序对。这就是可学习多通道的相关器，也是带时间字母夹在两事件字母之间的指数加权 2 阶迭代和。核一致有界且导数有界，故在时间戳上利普希茨，常数随事件数增长。

\[y_{\mathrm{ord}}(S)=\sum_{i\in a,\ j\in b,\ t_{i}<t_{j}}\kappa(t_{j}-t_{i}),\qquad\kappa(\tau)=\tfrac{\tau}{20}\,e^{-\tau/20},\]

上式就是用作分离目标的有序对泛函，求和只计前一类在后一类之前的对，核先升后降，对间隔调谐。它是后文表达力比较的标尺。

**加性状态 × 有序对交互：** 加性状态是每次只平移固定向量的跳变，只能记录各类事件分别加权后的和。有序对交互要求输出依赖谁先谁后及其间隔核，单层加性模型在事件数无界时无法一致逼近，而三维 TM 状态用延迟核乘以到达即可表示。

定理说，单层加性模型无论多宽、多少查询、读出多任意，都不能在事件数无界时一致逼近它。证明固定多个重合的后类事件，沿一条加性状态恒定的曲线移动前类事件，状态不变但目标因核导数在重合点跳变而改变。3 维 TM 取特定速率和参数就精确复现该核，累加器只差一个遗忘因子，随窗口内衰减趋于目标。

### 训练、选择与计算代价是如何规定的

论文没有把训练藏起来。手势数据训练用每片段从多个起点开始的 800 毫秒冷启动裁剪，查询每 50 毫秒一次，损失对 13 个前缀等权平均。优化用 AdamW，学习率 0.001，权重衰减 0.0001，批量 16，梯度裁剪 1，标签平滑 0.05，权重的指数滑动平均参与选择。选择以校准集 800 毫秒交叉熵最低为准，至少训练 120 轮，50 轮无改善停止。增强版本在分组前对原始事件做空间缩放、平移、时间拉伸与随机删除，再取整到微秒排序重组。

耳蜗数据按 8 通道一组，邻域 3 站点，标记是通道在组内位置，配置 A 加时间拉伸、整样本通道平移与随机删除，检查点与早停由验证集 1000 毫秒交叉熵驱动。语音命令用固定编码器把波形转成事件，帧基线在同划分上用帧前端训练。代价按输入事件与受影响站点计，TM 每次更新约两千次乘加，与传感器分辨率和时钟无关，状态是 32 个数加一个时间戳。读出只在查询时刻运行，摊到查询间事件上。论文同时要求报告稠密、稀疏与实测 3 种算力。本节讲的是上述可复现的优化与选择流程，缺的是正式测试集结果，作者明确留到后续版本。

### 评测协议如何保证时钟变化不被重新训练掩盖

协议在读官方测试集之前冻结，假设与摘要记录在案，每个评测脚本在读测试集前冻结，共享随机扰动由确定性与顺序无关的生成器产生。开发只用官方训练数据，手势数据用 4 个受试者不相交折各带校准子集共 495 片段，耳蜗数据留约一成训练说话人做验证。作者披露此前曾有一个无关的早期模型在手势测试集部分片段上评过一次，本次任何模型与决策都不用那次评测。

预注册假设集中在 200 毫秒前缀，用配对自助法比较 TM 与加性、与脉冲基线、与事件状态空间模型的准确率，以及抖动下 TM 与脉冲变体的下降幅度。另报告全部前缀与整片段平均。公平基线要求每个时钟基线同时训原始配方与多前缀目标，逐前缀取较好者，用官方代码、同划分同选择规则。时钟变化条件要求不重新训练：帧数减半加倍与半帧平移、切成单事件或大事件块或固定时长包、不同采样率、组内乱序、高斯抖动、删除部分事件。

对 CFE，包切分是构造性不变，只作实现检查，其余是真考验。物理时间攻击预算规定每个时间戳至多移动固定毫秒数，或至多小比例事件各移动至多固定量，位置极性不变。

### 数值校验是否支持交换与连续的结论

先看单站点独立双精度实现的检查，读图任务是看两类事件交换间隔从小到大时状态差如何变化。TM 与加性状态呈线性，始终在利普希茨界之下，选择性更新在任意小间隔都跳固定量，组更新在精确重合处与顺序无关但两侧极限仍不同，这正是推论的预测。闭式与递归误差极小，组内乱序下 TM 与加性误差极小而选择性很大，时间戳扰动观测与界之比远小于 1，加性纤维上状态残差极小而目标明显下降，TM 复现核误差在界内。

下图横轴是毫秒级间隔，纵轴是状态差，观察任务是先区分斜直线与水平线，再看上界虚线，最后确认小间隔处的行为差异。

> **看图路径：** 1. 横轴是两事件交换的时间间隔，纵轴是状态差；2. 比较 TM 与加性状态的斜直线和选择性更新的水平线；3. 注意虚线给出的利普希茨上界位置

[![原论文 Figure 3：State difference when two events of different types swap places at lag Δ (FP64).](https://arxiv.org/html/2610.37823v1/swap_vs_lag.svg)](https://arxiv.org/html/2610.37823v1/swap_vs_lag.svg)

*论文图 3。原论文 Figure 3:：“State difference when two events of different types swap places at lag Δ (FP64).”。*

从图中可见，TM 与加性两条线随间隔线性上升，选择性两条水平线恒在高处，虚线是界的位置。这说明顺序效应经漂移进入且随间隔消失，而不可交换更新的顺序效应不随间隔消失。数值部分支持理论，但它只用随机小模型与双事件交换，不能代替真实传感器的高维长流验证。

下表先给出论文在开发集上的总体改进幅度，单位是百分点，比较问题是在同读出同配方同划分下有序状态是否带来提升，指标方向是越大越好，公平条件是只换站点更新。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 手势不同观测窗口 | 准确率提升百分点 | 加性状态 | 3.5–9.1 | TM 有序状态 |
| 耳蜗验证划分 | 准确率提升点数 | 加性状态 | 24.5 | TM 有序状态 |
| 语音命令验证划分 | 准确率提升点数 | 加性状态 | 30.6 | TM 有序状态 |

这一比较考察的是同等读出与训练下有序状态的增益，三处提升都来自开发集或验证划分。手势随窗口变化早期更大，音频上差距更大但 TM 仍在训练且未达最优，正式测试集结果尚未报告，不能当作部署性能承诺，这是本表的主要限制。

### 手势数据上早窗口的优势从哪里来

手势数据是 11 类手势的事件相机记录，实验用 800 毫秒冷启动窗口，1 微秒时间戳，每 50 毫秒查询。比较臂只换站点更新，读出、配方、选择与数据完全共享。两折 198 片段上 TM 在 200 毫秒比加性多对 18 片段，不一致对悬殊，多重校正后仍显著，更长前缀差距缩小。TM 对无状态臂在各前缀都显著。四折 495 片段上 TM 比无序较好者各多出数十到十余片段。包切分不改变预测，组内乱序对 TM、加性、无状态都不改变预测。

下图横轴是前缀长度，纵轴是正确片段数，观察任务是先看 3 条曲线的高低，再看差距随窗口的变化，最后看 200 毫秒处的标注。

> **看图路径：** 1. 横轴是观测前缀长度，纵轴是 198 个片段中的正确数；2. 比较 TM 与加性状态、无状态臂三条曲线随窗口的变化；3. 注意 200 毫秒处差距最大并标注了统计检验结果

[![原论文 Figure 4：DVS128 Gesture, folds 0 and 2 (198 calibration clips): accuracy against observation window for TM…](https://arxiv.org/html/2610.37823v1/dvs_prefix.svg)](https://arxiv.org/html/2610.37823v1/dvs_prefix.svg)

*论文图 4。原论文 Figure 4:：“DVS128 Gesture, folds 0 and 2 (198 calibration clips): accuracy against observation window for TM, NS and the stateless arm (Zero).”。*

从图中可见，TM 全程在上，加性居中，无状态在下，且差距在 200 毫秒最大，随窗口变长收窄。这支持论文的解释：顺序携带短时信息，无序统计需要更长才能赶上。更细站点加增强后 TM 仍领先。

下表整理两折上随前缀变化的正确数差距，单位是片段数，比较问题是同读出下有序与加性在不同前缀的正确数，越大越好，数据是开发折校准集。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 两折 198 片段 200 毫秒 | 正确多出片段数 | 加性 | 18 | TM |
| 400 毫秒差距 | 正确多出片段数 | 加性 | 10 | TM |
| 600 毫秒差距 | 正确多出片段数 | 加性 | 8 | TM |
| 800 毫秒差距 | 正确多出片段数 | 加性 | 7 | TM |

这一比较考察的是早期窗口中有序信息的价值，早期优势最大且随窗口收窄。选择以 800 毫秒校准交叉熵为准，绝对数值因模型选择用同一数据而偏乐观，臂间对比才是可信的部分，未胜出的是更长窗口下差距不再显著。

### 音频上加性为什么差很多而时钟基线并不弱

耳蜗数据是口语数字的 700 通道脉冲，语音命令是 35 类波形经固定编码器转成的通道事件。两数据集上 TM 远超加性状态。语音上 TM 仍在早期轮次训练，落后同划分帧基线 9.0 点。耳蜗验证准确率远低于文献测试准确率，但那些是不同协议不可直接比。站点尺寸研究显示 8 通道每站点最好，加宽状态、更大通道平移与通道位置字母都未超越增强配置。

下表给出两音频任务的提升与差距，单位是百分点，比较问题是固定编码器与划分下有序状态的增益，以及与可运行帧基线的距离，准确率越大越好。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 耳蜗验证 | 准确率提升点数 | 加性 | 24.5 | TM |
| 语音验证 | 准确率提升点数 | 加性 | 30.6 | TM |
| 语音验证 | 落后帧网络点数 | 帧网络 | 9.0 | TM 仍在训练 |

这一比较考察的是音频任务对顺序依赖更强的表现，差距大支持有序对的解释，但 TM 未收敛且耳蜗未达文献最优，正式测试仍待协议执行。无状态臂在语音上只到个位数准确率，说明原始特征本身不够。

时钟基线并非一无是处，单折 99 片段多前缀脉冲网络与 TM 基本持平，而原始整片段配方在早期不可用，说明时钟模型需要前缀感知训练才能用于任意时刻。下表是该折四前缀正确数对比，单位是正确片段数。

| Setting (clips) | Arm | 200 | 400 | 600 | 800 |
| --- | --- | --- | --- | --- | --- |
| V1, folds 0, 2 (198) | TM | 170 | 175 | 177 | 176 |
| V1, folds 0, 2 (198) | NS | 152 | 165 | 169 | 169 |
| V1, folds 0, 2 (198) | Zero | 138 | 156 | 159 | 162 |
| V1, folds 0–3 (495) | TM | 407 | 419 | 440 | 440 |
| V1, folds 0–3 (495) | best unordered | 367 | 407 | 418 | 419 |
| V2, folds 0, 2 (198) | TM | 170 | 177 | 179 | 179 |
| V2, folds 0, 2 (198) | NS | 162 | 174 | 174 | 175 |
| fold 0 (99) | TM (V1) | 79 | 82 | 86 | 84 |
| fold 0 (99) | NS (V1) | 67 | 77 | 80 | 83 |
| fold 0 (99) | Zero | 61 | 72 | 75 | 76 |
| fold 0 (99) | PLIF, multi-prefix | 77 | 80 | 85 | 85 |
| fold 0 (99) | PLIF, original recipe | 17 | – | – | 32 |

这一比较考察的是同折同查询下时钟脉冲基线与 TM 的正确数，越大越好。持平只在单折多前缀训练下成立，原始配方早期不可用，且同检查点换平台曾改变部分片段的预测，作者归因于阈值放大浮点差异，跨平台对比仍在协议内，这是时钟路线的主要反例与限制。

### 理论与实验的边界在哪里

定理是全模型等价，时间中介定理是 1 阶陈述，只定小间隔的缩放，不界定大间隔的顺序信息量，后者依赖时间常数。利普希茨常数随事件数增长，长密流下保证是定性而非紧的。加性不可表示定理只针对单层加性，高度猜想是否成立仍开放。签名模型的区间复合与划分不变相通，但 TM 是否为连续同时不变泛函的定量通用类仍是开放问题，部分交换签名只是候选方向。

精度上作者明确不宣称最优。耳蜗远低于已发表测试精度，语音低于紧凑网络，手势单折上时钟基线与 TM 持平，第二层未带来提升。读出带跨查询记忆使预测依赖查询时刻表，CFE 层本身无时间步，但系统仍有查询依赖，完全连续时间的读出可以去掉它。开发集数值因选择与评估用同一数据而偏乐观，正式测试须按单次读测试集的冻结脚本执行，这是理解全部数字的前提条件。

### 复现第一步做什么与还缺什么验证

值得尝试的情形是输入本身异步且顺序重要，同时时间戳量化导致大量同时事件，或部署时钟与训练时钟不一致。复现第一步不是调参，而是按论文实现单站点双精度校验：随机小参数下比较闭式与递归、组内乱序差、交换间隔扫描的线性关系与界之比、加性纤维上状态不变而目标改变、TM 对延迟核的复现。训练代码的对齐点是 64 位微秒时间戳、同组处理、冷启动窗口、50 毫秒查询与多前缀等权损失，以及分段并行扫描与双精度逐事件参照在随机切块下一致。

还需补的验证是协议中的时钟平移、采样率切换、抖动与删除下的下降幅度，以及物理时间预算的时戳重定时攻击。超参数要保留时间常数范围 2 到 2000 毫秒、增益初值 1、门控形式、标签平滑与滑动平均选择。来源方面，未发现绑定且完成校验的作者资源，不得声称代码模型已公开，只能说论文提到官方代码与后续测试报告，复现以本文证据为准。

### 结论：在什么条件下可以用无时钟层

综合起来，精确逐事件计算解决切包问题，跳变交换解决同时与穿越问题，顺序靠跳变与漂移的不交换保留。最小 TM 层用快慢迹加累加器实现可学习的平滑有序对，单层加性做不到，高阶与堆叠有保持性质的规则，CFE 层把它们落到局部站点与共享字母上，代价随事件数线性。

实验在开发条件下支持有序状态的价值，尤其早窗口与音频任务，但条件必须说清：同读出同配方同划分、开发集选择偏乐观、语音未收敛、正式测试未读、深度只证未验。与时钟基线的持平只在多前缀训练与单折下成立，跨平台浮点差异提醒阈值模型对微小扰动的敏感。若任务对同时顺序与抖动鲁棒有硬要求且顺序信息重要，时间中介约束值得试；若只追求现有基准最高精度，还需要补正式测试与更大规模调优。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.37823v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-30/)
