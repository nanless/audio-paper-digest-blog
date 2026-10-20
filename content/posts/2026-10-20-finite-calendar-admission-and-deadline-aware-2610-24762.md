---
title: "Finite-Calendar Admission and Deadline-Aware Pruning for UWB Audio"
date: 2026-10-20
draft: false
tags: [音频交互, 形式化分析, 规则与词典方法, 统计分析]
categories: [论文速递]
description: "论文把多路 UWB 音频的按时完整交付建模为有限交换机会上的预约与在线调度问题，给出区间需求的可行性判定和乐观剪枝规则，并在突发丢失下八流时把准时完整率从 45.441% 提升到 59.399%，代价是最差流几乎被饿死。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.24762"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "有限机会日历上的 UWB 音频准时交付：准入判定与截止期剪枝"
paper_digest_original_title: "Finite-Calendar Admission and Deadline-Aware Pruning for UWB Audio"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.24762v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.24762v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.24762v1.pdf"
paper_digest_primary_task: "音频交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-interaction","label":"音频交互"},{"facet":"method","id":"method.formal-analysis","label":"形式化分析"},{"facet":"method","id":"method.rule-based","label":"规则与词典方法"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"}]
paper_digest_primary_method: "形式化分析"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把多路 UWB 音频的按时完整交付建模为有限交换机会上的预约与在线调度问题，给出区间需求的可行性判定和乐观剪枝规则，并在突发丢失下八流时把准时完整率从 45.441% 提升到 59.399%，代价是最差流几乎被饿死。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fengyun~Zhang"}]
paper_digest_abstract_sha256: "9500ee9a806a0135f7a113db64dc54dd5c0b9057ba40a3debdc7544e195cfd49"
paper_digest_sidecars: {"citation.bib":{"sha256":"0decebf9b4f959730c00b405bc803f1b480328e138be8ea1dd466b867d740a69","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24762/citation.bib"},"citation.json":{"sha256":"8d4a2ef4e7d5d1472240f344205b485e7b786085dd0e1b150d3342fe6ab0d1ec","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24762/citation.json"},"citation.ris":{"sha256":"5c4193e789d0a8ec6ffde46229985852f495350481b64502658beb65767868ef","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24762/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"7f9665c374ae03125b0383a34c6009063ca75639c3dfadc7f0b716ff2b4a943a","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24762/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "fd992329fbb82462d169fa529f7c106add8c7bd7fff0d34a3a0461e950e9a574"
paper_digest_api_reader_plan_sha256: "44f6723de53fce042447c9753a46803b6c103165d370110b6290410cbf5c8068"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "daca2f66cdc756fc137eca0e01cdb4dbbcc04e51cfaafbb11992c14d0448e236"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "6916b6e8818c2b22225dec7fb7a9a6b63e352bd68cc44bce92cc2316ce6c2366"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "948b6825c33e618d55ce06b22abd907ba6c313a0b7e3e2449864b135fd688fb5"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "113241181bb0cfca489945e3726970ee205642253d691c5dca9a8086e70afe64"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 有限机会日历上的 UWB 音频准时交付：准入判定与截止期剪枝

> 英文题目：*[Finite-Calendar Admission and Deadline-Aware Pruning for UWB Audio](https://arxiv.org/abs/2610.24762v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频交互](/audio-paper-digest-blog/papers/?concept=task.audio-interaction)
- **研究方法**：[形式化分析](/audio-paper-digest-blog/papers/?concept=method.formal-analysis)；[规则与词典方法](/audio-paper-digest-blog/papers/?concept=method.rule-based)；[统计分析](/audio-paper-digest-blog/papers/?concept=method.statistical-analysis)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Fengyun~Zhang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是超宽带链路上的多路等时音频流，每路周期产生一个需要分片发送的服务数据单元（Service Data Unit，SDU），只有在呈现截止时间前收齐全部分片才算可用。困难在于可用发送机会是离散且成簇的，帧可能在机会间隙到达，分片需要多次尝试，平均速率够用不代表每个截止窗口内都有足够机会。论文先把呈现预算换算成每个任务在机会日历上的合格区间，再判断有限任务集能否预留足够的尝试次数，运行时对注定无法收齐的SDU提前丢弃以节省机会。相对已有工作，论文区分了保守预留保证和在线挽救启发式，前者用最早截止时间优先（Earliest-Deadline-First，EDF）构造证明可行性，后者用乐观不可能检测做剪枝。在同一UWB机会日历与配对信道轨迹的8流突发损失仿真中，以准时完整SDU比例为指标，剪枝EDF相对到期感知先进先出/无剪枝EDF从45.441%提高到59.399%，12个配对种子的差值为13.958个百分点，点式95%区间半宽为2.080个百分点。结论只适用于等长可自由分配机会和已知有限任务等假设，重载时最差分流交付接近于零，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么按时收齐整帧比收得多更重要

这篇论文研究短距多路无线音频传输。输入是若干周期性音频流，每流每隔固定采集帧长产生一个服务数据单元，即 SDU，首次出现时可以理解为等待无线发送的一整帧编码音频。输出是接收端在呈现截止期前完整重组出的帧，错过截止期或只收到部分分片都算丢失。

关键在于必须保留的信息是整帧完整性。论文强调分片接收率和吞吐量会误导判断，一个只差最后一个分片的帧即使前面都成功，对播放也没有贡献，反而占用了本可给其他帧的机会。因此评价指标是准时完整 SDU 比例，并同时看最差流的完成率、浪费的机会数和成功条件下的延迟。

**服务数据单元 × 分片：** 服务数据单元是接收端按帧播放的基本单位，只有整帧在呈现截止期前收齐才算有效；分片是它为适应 PDU 预算而切成的小包，是信道上实际尝试传输的对象。二者搭配的意义在于分片成功率高不等于可播放帧比例高，未完成的残帧会浪费机会，因此目标必须按完整服务数据单元计算。

读者需要先接受这个合同：无线侧的任务不是尽量多送字节，而是在每个释放时刻到截止期的合法窗口内，为每帧凑齐足够多次交换尝试。后续的日历、准入和剪枝都是围绕这个合同展开的。

### 给新研究生的阅读顺序建议

建议先读问题合同，确认整帧准时才算成功，再看机会日历如何把稀疏可用性变成合格区间。接着理解区间需求条件是计数论证，聚合界是更粗但与丢失无关的筛子。最后看在线剪枝的乐观不可能检测，它只看剩余分片与剩余合格机会的比较，忽略竞争，因此通过检测不代表可行。

实验部分先看 8 流突发的主增益，再看 4 流轮询反超的负结果和最差流的饥饿，最后看帧长、PDU 和尝试次数的单因素扫描。记住所有曲线都是 12 个 6 s 种子的建模结果，误差棒是逐点区间，没有多重校正，重载结论只在所述模型和时长下成立。

### 本文与 UWB 音频和 LE 音频研究是什么关系

论文花了很大篇幅划清边界。UWB 侧已有音频框架和收发器测量，但作者指出宽泛的首个 UWB 音频架构说法在已有预印本面前不成立，自己的对象是显式的 SDU 过期与预约。LE 音频侧已有连接等时流、重传持久性和冲刷机制研究，因此不能把过期策略本身说成新发明。

下表选择原表中最直接的两类可比工作，说明本文自认的差异只是把完整 SDU 呈现合同连接到稀疏有限交换日历，并给出可检查的预约含义与在线过期的量化效果，而不是提出新协议。

| Work / substrate | Evidence inspected | Difference relative to this study |
| --- | --- | --- |
| UWB audio architecture [4] | Preprint Section III | Direct architecture prior art; we study explicit SDU deadlines, not first audio transport. |
| CIS and lifetime/flushing models [9, 10] | Metadata and available abstract | Direct retry/expiry overlap; overlap concerns SDU lifetime and retries. |

该表只比较服务语义、可控调度变量和实际检查过的证据。作者特别说明蓝牙核心参数有装箱和定时约束，不能直接套用到 UWB 设计范围，广播重传与单播确认也不是同一种反馈，呈现延迟的参考点在发送端和接收端定义也不同。这些提醒是为了防止把 LE 音频的公式直接改名使用。

### 要解决的两个具体问题是什么

第一个问题是准入。给定有限个已知帧，每帧有释放时刻 r、呈现推导的截止期 d 和分片工作量 m，每分片允许最多 K 次尝试，日历上有一系列等长交换机会，问能否为每帧预留 m 乘 K 个机会且都不越过截止期。这是一个有限日历可行性问题，依赖每个窗口的位置，而不只看平均利用率。

第二个问题是在线过载控制。服务中出现丢包和争用后，有些部分传输的 SDU 剩余分片数已经超过剩余合格机会数，继续服务它注定超时。此时需要一条丢弃规则，把机会让给还有希望的帧。论文明确区分前者是整批预约的证明，后者是对单个帧的必要不可能性检测，通过检测不代表该帧原本可行。

### 整体流程如何把截止期变成日历上的预约

方法分 3 层。顶层是应用等时适配，把完整 SDU 连同流标识、释放参考和截止期交给调度，把分片包交给链路，把完整或丢帧事件交给接收重组。底层是厂商链路原语，提供周期时隙、确认重传、分片和回调。中间是本文的日历调度器，分为离线的有限准入检验与在线的剪枝服务。

读图说明：下图展示了编码源仿真、截止期预算、分片封包、调度器、链路原语、接收重组和呈现边界的连接，重点是准入检验与在线剪枝属于同一调度框但功能不同，且都位于厂商连接时隙归属之上，LC3 呈现与跨设备时钟校准不在评估路径内。

> **看图路径：** 1. 先沿左上编码源到截止期预算再到分片封包的主箭头看前向路径；2. 再看中间绿色链路原语与右侧调度器的左右位置关系；3. 最后看下方虚线呈现边界与上方调度边界是否连通

[![原论文 Fig. 1：Scheduling and adaptation boundaries.](https://arxiv.org/html/2610.24762v1/uwb-isochronous-architecture.svg)](https://arxiv.org/html/2610.24762v1/uwb-isochronous-architecture.svg)

*论文图 1。原论文 Fig. 1:：“Scheduling and adaptation boundaries.”。*

该图确实可见左侧源仿真注明无 LC3 执行，中间预算框包含采集加处理加保护，右侧调度框写明预约或在线剪枝，底部呈现边界用虚线框出。它的教学作用是防止把仿真流量当成真实编解码，把数学上的任意选流当成控制器已支持的跨连接调度。

**有限日历准入 × 在线剪枝：** 有限日历准入是服务开始前对已知有限帧集合的预约可行性证明，回答能否为每帧留够尝试次数；在线剪枝是服务中对单个残帧的不可能检测，回答该帧即使独占信道也已来不及。两者分工不同，前者是保守保证，后者是过载下的挽救，不能互相替代。

### 机会、窗口和可行性判定具体怎么算

流量模型把时间取为整数微秒。流的 SDU 大小由码率和帧长决定，分片数由 PDU 预算减去包头后向上取整得到。可用无线预算是呈现预算减去帧长和其他处理开销，再减去时钟分发不确定度。基线取 25 ms 减 10 ms 减 2 ms 得到 13 ms，有效预算约 12.960 ms，但 2 ms 和 40 μs 都是假设而非硬件测量。

日历模型是单个中心发送端复用逻辑流。超帧为 H，交换机会时长为 C，名义份额为 ρ，每超帧分配 Q 个机会，位置是均匀前缀。所有策略把就绪 SDU 门控到超帧锚点，这保证了比较时到达对齐条件一致。

某帧的合格机会集合定义为既不早于可服务时刻、整个 C 又能落入截止期之前的所有机会下标。

\[I_{j}=\{k:a_{j}\leq s_{k},\ s_{k}+C\leq d_{j}\}.\]

该集合在槽位序号空间连续，即使墙钟上有间隙。假设是每次交换占一槽、可交织、确认结果在下个可用交换前已知、无额外冷却、无外部优先级约束。

有限预约可行的充要条件是对一切连续槽位区间，完全包含在该区间内的帧的总需求不超过区间长度。

\[\sum_{j:I_{j}\subseteq[u,v]}w_{j}\leq v-u+1.\]

其中需求为 m 乘 K。论文证明必要性来自计数，充分性把每帧拆成单位副本后用 Hall 定理得到覆盖匹配，再用最早截止期优先的交换论证构造出可行预约。作者强调这是单位日历交换论证，不是无限制的最早截止期最优定理。

对齐批量的特例是每流在超帧起点释放 1 帧、相对截止期不超过超帧、Q 个槽连续从锚点开始，此时可行当且仅当总预约量不超过 Q 与截止期内容纳槽数之小者。

\[\sum_{i}m_{i}K_{i}\leq\min\{Q,\lfloor\bar{D}/C\rfloor\}.\]

该界只适用于所述对齐假设，不能用来认证随机相位仿真，也不是无限时域结果。

聚合容量必要界不依赖丢失模型：在公共周期和每成功帧至少 m 个机会下，长期聚合完成率不超过每秒机会数除以每秒需求。

\[x\leq\min\left\{1,\frac{QF}{NmH}\right\}.\]

基线 Q 为 8、H 为 5 ms 时每秒 1600 个机会，8 流每秒至少需 2400 次交换，因此无损完美调度上限为 2/3。这解释了为什么过载实验的数值不可能接近全收。

**机会日历 × 合格区间：** 机会日历是超帧内离散可用的发送确认机会序列，可能成簇并有长间隙；合格区间是某帧从可服务时刻到截止期内容纳得下整个交换的那段机会下标集合。二者组合把墙钟上的稀疏可用性变成槽位序号上的连续区间，使准入判定只需检查区间内的需求与供给。

### 分片开销如何改变可行 workload

原文用两个接收封包说明协议开销不是小事。8 字节兼容格式每 PDU 可装 88 字节体，240 字节 SDU 需 3 片；24 字节多流 Python 格式每 PDU 只装 72 字节体，同样的 SDU 需 4 片。头增加了 16 字节，但分片数加一，容量上限直接下降。

这意味着组协议设计与调度不能独立优化。选择带组标识、流标识、会话纪元、序列号、组时钟截止期和分片序号的 24 字节头时，必须重算需求和容量。论文的 24 字节上限是载荷会计的解析灵敏度，不是重跑的成功率测量。任何把 8 字节仿真数字直接套到 24 字节系统的说法都是错误的。

### 没有神经网络训练时实际执行了什么计算

本文没有训练任何模型，需要说明的是预约检查、在线仿真和有限设计枚举 3 类计算。预约检查用贪心按最早截止期分配，与 171 个小规模精确递归预言机实例和 1200 个随机日历对比验证实现正确性，这只是算法检查，不验证物理假设。

在线仿真是在显式机会日历上按槽推进，维护活跃 SDU 列表，每机会前做调度决策。剪枝版本复杂度上界为机会数乘活跃数再乘对数，朴素版本为两者乘积，日历存储与机会数成正比。这些是 Python 实现的上界，不是单片机实测耗时。

无拥塞独立丢失下单帧成功概率有闭式表达。

\[R_{\rm iid}(m,K,p)=(1-p^{K})^{m}.\]

它要求有足够及时尝试且尝试独立，不适用于过载队列。突发模型是两状态链，按日历机会下标转移，平均突发长度为 8 个机会序号，不是固定墙钟相干时间，因此改变超帧或槽长会改变隐含的物理时间相关结构。

有限设计枚举在 360 个候选上传输开销目标做穷举，目标是 2 流的最坏预约时间占比，受预约可行、槽适配、独立可靠性不低于 0.99 和码率下限约束。它只是给定网格和 60 ms 同步释放集合上的最优，不是任意相位无限流或连续变量的全局最优。

### 仿真比较了哪些策略和条件

主网格是单因素设计，共 48 个条件乘 6 种策略乘 12 个种子，合计 3456 次运行，每次 6 s 源流量加固定排空。条件覆盖逻辑流数、独立与突发丢失、交换错误率、帧长、超帧、PDU 预算、总尝试上限、时钟保护和交换时长。另有 144 次公平性运行和 288 次包长灵敏度运行。

6 种策略为单次先到先服务、有界重试无过期、有界重试加过期、周期轮询、最早截止期加过期但无剪枝，以及本文的剪枝加最早截止期。除单次诊断外都用相同总尝试上限，因此有意义的过载归因在过期变体之间。同一条件同一种子下共享到达相位、机会序号和与调度无关的信道迹，迹在空闲机会也推进。

统计单位是一个独立伪随机种子，不是每个 SDU。报告是 12 个复制上的均值加 t 区间，策略差用配对种子，边际区间重叠不用作显著性检验，且为逐点 95% 区间，没有多重比较校正。所有非准时 SDU 都算丢失，包括无过期队列在排空末尾滞留的积压，原文账本记录 429353 个末尾审查 SDU，这是记账分类，不是生存分析的右删失。

### 有限设计枚举选出了什么点

在两同步流 60 ms 释放集合上，枚举选中帧 7.5 ms、超帧 2.5 ms、PDU 120 字节、总尝试 2、码率 96 kbit/s。此时 SDU 为 90 字节，可装入一个 112 字节体，2 流每帧预约 4 个 200 μs 机会，传输开销占比 10.667%，无拥塞独立成功表达式为 0.99。

该点是所述传输设计空间的最优，不是 LC3 或丢包隐藏意义的最优。60 ms 同步相位不能认证无限异步流，可靠性纵轴是无拥塞独立表达式，不是实测包交付。论文同时给出 LE 定时算例说明引用公式的内部一致性，但那是代数示意，不是可实现控制器配置或实测延迟，也不能直接比较两种技术的优劣。

### 剪枝在什么负载下有效果，哪里反而更差

先看聚合完成率随流数变化。读图说明：下图左右分别为独立丢失和突发丢失，横轴是每流 192 kbit/s 的建模流数，纵轴是截止期前完整率，每点汇总 12 次独立 6 s 运行，误差棒为逐点 95% 种子 t 区间，重点比较蓝色剪枝、橙色过期先到先服务和绿色轮询 3 条线的分叉点。

> **看图路径：** 1. 对比左右两面板独立丢失与突发丢失下三条曲线的相对位置；2. 观察横轴从 4 流到 12 流时蓝色剪枝曲线与橙色过期曲线的开口；3. 注意 8 流处绿色轮询曲线快速归零及其误差棒宽度

[![原论文 Fig. 2：Modeled results. Timely complete-SDU fraction versus logical-stream count, using the same UWB…](https://arxiv.org/html/2610.24762v1/uwb-isochronous-reliability-load.svg)](https://arxiv.org/html/2610.24762v1/uwb-isochronous-reliability-load.svg)

*论文图 2。原论文 Fig. 2:：“Modeled results. Timely complete-SDU fraction versus logical-stream count, using the same UWB calendar and paired channel traces.”。*

该图确实可见 4 流时三线都接近 90% 以上，6 流后开始分开，8 流时蓝色明显高于橙色，绿色轮询迅速跌到接近零。它的作用是说明剪枝回收了花在注定超时帧上的服务，而轮询把部分工作铺到太多流导致完整帧都完不成。

**聚合完成率 × 最差流完成率：** 聚合完成率是所有流按时完整帧占总帧的比例，反映信道利用的整体回收；最差流完成率是各流完成率中的最小值，反映单个接收端的可接受服务。两者搭配才能看出高均值下是否隐藏了饿死，过载时必须同时报告。

下表整理突发丢失下的关键数字，指标方向是越大越好，分母是总 SDU，区间为种子 t 区间的 1/2 宽，单位为百分点。

| 条件 | 指标 | 剪枝最早截止期 | 过期先到先服务 | 周期轮询 |
| --- | --- | --- | --- | --- |
| 4 流突发丢失 | 准时完整率 | 90.594% ±0.834 | 90.594% ±0.834 | 91.698% ±0.915 |

该表的比较问题是在同一日历和配对信道迹下剪枝是否提高聚合完成率。可见 8 流配对增益为 13.958±2.080 个百分点，12 流为 12.331±3.037 个百分点，但 4 流时轮询反而高出约 1.104±0.268 个百分点，因此不能宣称一致占优。表中轮询在重载下的崩溃是该过载抽象中的现象，不能推广为正确配置的蓝牙控制器行为。

无损容量上限与实测的对照进一步限定结论。下表为基线 workload 的无损聚合上限与 8 字节仿真的剪枝均值。

| Streams NN | 8-B ceiling | 24-B ceiling | 8-B pruning |
| --- | --- | --- | --- |
| 4 | 100.00% | 100.00% | 90.594% |
| 8 | 66.67% | 50.00% | 59.399% |
| 12 | 44.44% | 33.33% | 39.595% |

该比较说明 8 流 8 字节上限为 66.67%，实测 59.399% 已接近天花板；若改用 24 字节组包头则上限降到 50%，12 流降到 33.33%。因此每流 90% 的目标在该日历上即使无错也不可行，准入或加机会是前提。

### 增益来自剪枝还是排序

论文做了关键消融。在公共相对截止期的同构 workload 下，先到先服务加过期与无剪枝最早截止期在顺序上等价，回归测试强制了这种等价，因此两者曲线重合。任何差异都应视为实现或平局排序问题，而不是排序收益。

读图说明：下图左为突发丢失下剪枝与两个等价过期策略的完成率对比，右为包域最长缺帧 run，注意右图不是听觉质量，重点看 6 流后蓝色线何时与重合线分离，以及右图跳变对应的流数。

> **看图路径：** 1. 看左图 6 流以后蓝色剪枝线与橙紫重合线何时分开；2. 看右图最长缺帧 run 在 6 流处的跳变高度；3. 对比 8 流处蓝色线的误差棒与橙线的差异

[![原论文 Fig. 3：Modeled results. Optimistic pruning ablation under burst losses.](https://arxiv.org/html/2610.24762v1/uwb-isochronous-policy-ablation.svg)](https://arxiv.org/html/2610.24762v1/uwb-isochronous-policy-ablation.svg)

*论文图 3。原论文 Fig. 3:：“Modeled results. Optimistic pruning ablation under burst losses.”。*

该图确实可见 4 流前三线重合，6 流后蓝色剪枝高于重合线，右图 6 流处重合线已跳到约 600 帧而剪枝仍接近零，到 8 流才上升。它的作用是把 8 流的改进归因于排除不可完成的残帧，而不是改进的最早截止期排序。

**最早截止期优先 × 轮询：** 最早截止期优先是按截止期从早到晚选择待服务帧的规则，在同截止期同相位 workload 下与先到先服务顺序一致；轮询是按流周期轮转保证每流轮到服务机会的规则。前者侧重截止紧迫性，后者侧重流间轮流，本文用两者对比说明过载时轮流反而可能使完整帧都完不成。

单因素扫描显示帧长同时改变 SDU 大小和剩余无线预算，20 ms 帧只剩约 3 ms 预算，不是纯 MAC 效率测试；PDU 增大减少分片数但主扫描固定交换包错误率，可能偏向大包，补充的长度相关包错误率只是假设式，不是标定的信道。超帧和槽长扫描还受取整量化影响，名义份额相同不代表可用份额相同。

### 高均值下隐藏了什么不公平和测量局限

聚合改进不保证每接收端可用。补充 8 流突发实验中剪枝的平均最差流完成率仅 2.556%，平均 Jain 指数 0.737；12 流时最差流约 0.014%，Jain 指数 0.510。这些是复制级最小值和指数的均值，不是合并均值的最小值。也就是说有流几乎收不到准时帧，尽管均值看起来有效率。

读图说明：下图左为最差流完成率随流数下降，右为固定与长度相关包错误率对剪枝的影响，两图都只是建模结果，重点看左图的陡降和右图两线的贴合程度。

> **看图路径：** 1. 看左图最差流曲线从 4 流到 8 流的陡降幅度；2. 看右图固定包错误率与长度相关包错误率两条线的贴合程度；3. 注意两图纵轴都是完整帧比例而非音频质量分

[![原论文 Fig. 6：Modeled results. Left: worst-stream timely completion, exposing overload starvation.](https://arxiv.org/html/2610.24762v1/uwb-isochronous-robustness.svg)](https://arxiv.org/html/2610.24762v1/uwb-isochronous-robustness.svg)

*论文图 6。原论文 Fig. 6:：“Modeled results. Left: worst-stream timely completion, exposing overload starvation.”。*

该图确实可见 4 流到 8 流最差流从约 90% 跌到接近零，右图两条包错误率假设下曲线差异很小。它的作用是说明过载饥饿是结构性的，包长灵敏度练习暴露的是模型依赖而非标定最优载荷。

其他局限包括成功条件延迟排除了丢失帧，不能单独作为可靠性度量；8 流和 12 流轮询的延迟分位数每运行只有 4 到 14 个和 0 到 6 个准时样本，只是描述性顺序统计，不能当稳健尾估计；占用槽比例计的是尝试的完整机会，不是能量效率，不能推出电池寿命；无解码器和丢包隐藏执行，缺帧 run 不是感知质量分。

### 代码、固件和证据各能复现什么

按原文的来源映射，日历与信道模型、实验驱动、灵敏度和正确性检查分别在不同源文件，种子级记录包括复制表、公平性表、尺寸灵敏度表、配对比较表和优化结果。报告图形来自这些记录，基于模型的数值曲线不是设备测量。28 个单元测试覆盖调度器、单上下文封包和捕获解析，另加 9 个组封包测试，以及 171 个小规模精确预言机和 1200 个随机日历检查，这些只是模型内算法检查。

下表选择原文的可复现工件分类，说明每类已确立的范围，防止把程序执行当成物理层性能。

| Artifact | Established scope |
| --- | --- |
| Reservation model | Mathematical feasibility and unit tests |
| Scheduling runs | Seed-level outcomes for specified opportunity and loss models |
| Controller inspection | Documented slot and retransmission interface semantics |

需要特别说明固件探针只是针对有名目标和工具链的交叉编译产物，未烧录也未在射频或音频硬件上测试；SDK 时隙归属与仿真的无限制调度不同，仿真是上层分配松弛。8 字节接收按序列号重组，不同流同序号会混淆；24 字节 Python 组封包修复了标识但每分片多 16 字节开销，把 240 字节 SDU 从 3 片变 4 片，直接改变容量，因此一种封装的容量证书不能搬到另一种封装。

本次未发现来源绑定且完成 HTTPS 验证的资源，不得声称代码、模型或数据已公开。来源未确认不是技术缺陷，复现第一步应是按上述文件名和测试命令先跑通预约检查与包封包测试，再复现种子级调度比较。

### 什么时候值得尝试，还缺什么验证

当系统有多路周期音频、机会日历稀疏成簇、帧有明确呈现截止期且允许丢整帧时，本文的思路值得尝试。先用聚合必要界筛掉不可能负载，再在实际连接时隙图上做有限窗口预约检验，最后才比较在线策略。剪枝适合过载挽救，能回收花在注定超时帧上的机会，但它没有每流最小服务保证，会饿死个别流。

复现第一步是固定基线参数重跑预约与仿真：10 ms 帧、192 kbit/s、96 字节 PDU、8 字节头、3 片、3 次尝试、5 ms 超帧、200 μs 机会、名义份额 0.32，确认 8 流突发下剪枝相对过期先到先服务的配对增益量级，以及 4 流轮询略优的负结果是否出现。

还缺的验证包括真实信道下的包错误与突发标定、跨设备组时钟的误差界、控制器队列与在途包对原子过期的阻碍、合法编解码配置下的帧长选择，以及带最小每流完成率的公平调度。总体上准入窗口、SDU 标识、交换预算和公平性需要联合设计，只看聚合吞吐会掩盖接收端的真实服务。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.24762v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
