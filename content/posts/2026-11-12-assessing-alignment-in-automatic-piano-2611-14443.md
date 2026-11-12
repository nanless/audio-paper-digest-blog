---
title: "Assessing Alignment in Automatic Piano Transcription Datasets: A Benchmark for Scoring Methods"
date: 2026-11-12
draft: false
tags: [乐谱对齐, 基准设计, 基准测试, 音乐]
categories: [论文速递]
description: "论文针对钢琴自动转谱数据集默认音频与 MIDI 完全对齐但实际存在错位的问题，用三种可控 MIDI 破坏和四个行为指标比较多种打分方法，并提出结合转谱与音高约束 IOI 的 STI 方法，在细粒度时值错位上最敏感，再用优选方法给出常用数据集相对对齐质量的趋势。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.14443"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "钢琴转谱数据集里的音频与 MIDI 到底对齐得怎么样：一种给对齐打分方法的评测框架"
paper_digest_original_title: "Assessing Alignment in Automatic Piano Transcription Datasets: A Benchmark for Scoring Methods"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.14443v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.14443v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.14443v1.pdf"
paper_digest_primary_task: "乐谱对齐"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.score-alignment","label":"乐谱对齐"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文针对钢琴自动转谱数据集默认音频与 MIDI 完全对齐但实际存在错位的问题，用三种可控 MIDI 破坏和四个行为指标比较多种打分方法，并提出结合转谱与音高约束 IOI 的 STI 方法，在细粒度时值错位上最敏感，再用优选方法给出常用数据集相对对齐质量的趋势。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lucas de Souza Brandão"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lucas Gris"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Joaquim Cavalcante"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chukwuemeka Nkama"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Andrea Poltronieri"}]
paper_digest_abstract_sha256: "a10a3136e1379a4973be0181e59ee0fe7cc408c017ad41838445a6c969754e00"
paper_digest_sidecars: {"citation.bib":{"sha256":"d1040779474dd31427e8f4abe76bed6cab317ea715033435a9695a9af852091c","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-14443/citation.bib"},"citation.json":{"sha256":"327543169cee0849e090732f71678c7e664c4a62a720b6cf272a55e4029add91","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-14443/citation.json"},"citation.ris":{"sha256":"78920c6542de1bfe4fd96247dca6920de4992bb57f88fd2d0e1ada55d021c4e7","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-14443/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f8e389ab28eb0fa6757de4945e186ee97e41445badb7393eecdd2580c1fb73b0","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-14443/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "4578d81d8e745a3e4a48f9105ac00c4b0597283695ef2f34eccc1dc0175d1ec1"
paper_digest_api_reader_plan_sha256: "a513f1afe490e605cf11eed42030476c2b260266cd3c0b925e957d851c059055"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "2318f9239d23543738d4bdf3c8692f6125a9153c8cc1d69057299e21d8527006"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "f2044c9f6bd5d63d399cb0aeb0baa767e5e185a3f8144fcaac9dd56f4125db2b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "591c0a6929a34afea6ab7a36049ca8943e485f68962e08a505b5aa8d452a2da4"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a877e90dcd0fc4d299a01bf9394aace34eb662a9ea6d09116a0f00babbed917b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 钢琴转谱数据集里的音频与 MIDI 到底对齐得怎么样：一种给对齐打分方法的评测框架

> 英文题目：*[Assessing Alignment in Automatic Piano Transcription Datasets: A Benchmark for Scoring Methods](https://arxiv.org/abs/2611.14443v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [乐谱对齐](/audio-paper-digest-blog/papers/?concept=task.score-alignment)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Lucas de Souza Brandão：机构信息未能在本次解析中与作者逐人可靠绑定
- Lucas Gris：机构信息未能在本次解析中与作者逐人可靠绑定
- Joaquim Cavalcante：机构信息未能在本次解析中与作者逐人可靠绑定
- Chukwuemeka Nkama：机构信息未能在本次解析中与作者逐人可靠绑定
- Andrea Poltronieri：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

自动钢琴转录需要音频和MIDI在音高与时间上对应，输入是一段钢琴录音与一份MIDI，输出是两者对齐程度的分数，难点是常用数据集存在几十毫秒级的起始偏差，而以往靠转录准确率间接判断，容易混入音色和模型能力的影响。本文固定音频、只改写MIDI，再看分数是否随破坏加重而下降，从而比较打分方法。本文新增的STI方法先用转录模型从音频提取预测MIDI，再把预测MIDI与待评MIDI按相同音高组成二部图并送入匈牙利算法求最优匹配，最后把匹配对的起始时间差异和同音音符间隔差异经指数衰减输出为连续权重并算出F值。与已有音符F值只做硬判决不同，STI用连续权重使小偏差仍能拉开分数。在三数据集平均的起始偏移破坏下，STI系列单调性指标为0.95，低于谱方法CS-S与CENS方法CS-C、DTW-C的单调性指标0.97到0.99，但STI敏感性指标为0.93到0.95，高于上述方法的敏感性指标0.16到0.23，说明STI更适合捕捉转录数据集中主要的细小时间错位。结论适用于钢琴独奏的音频与MIDI对齐筛选，对其他乐器和力度错位尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 自动钢琴转谱要解决什么输入输出问题

自动音乐转谱的输入是一段钢琴录音波形，目标是输出与之对应的音符序列，每个音符至少要给出音高、起音时刻和偏移时刻，力度有时也记录。训练和评价都依赖成对的音频与 MIDI，默认两者在时间上严格对应，也就是谱面写的每个音在音频里确实在那个时刻发声。

如果这个对应关系本身有几十毫秒甚至更大的偏差，模型学到的就可能是错位的监督信号，评价时也会把对的预测判错。论文的起点正是这个隐含假设在常用钢琴数据集里并不成立，因此需要先有办法衡量 1 对音频与 MIDI 到底对得多好，再去谈数据集筛选和模型比较。

**音频 × MIDI × 对齐：** 音频指实际录制或合成的钢琴声音波形，是转谱模型要听的对象；MIDI 指用音高、起音时间、时长和力度记录的音符事件序列，是训练和评价用的参考答案；对齐指同一音符在音频中的实际发声时刻与 MIDI 中记录的起音和偏移时刻是否一致，只有对齐才能把音频帧或事件与正确的音符标签对应起来。

### 已有研究怎样发现数据集错位

此前对 MAPS 和 MusicNet 的分析并不是直接给对齐打分，而是改变评价时允许的起音容差，观察转谱分数是否随容差明显变化，以此推断标注存在系统性时移。对 MAPS 的另一路工作是换用不同的标注版本或在 SMD 上获得更高分数，间接说明 SMD 比原始 MAPS 对得更准。

还有工作针对 MAPS 的某个子集逐个音符做人工核查，找出标注差的音符，但只覆盖单一子集且依赖人工，难以推广到多个数据集的系统比较。共同的局限是都用转谱模型的好坏代替对齐质量，而模型好坏还受音色、演奏风格和模型能力影响，不能单独证明错位程度。

本文与这些路线在输入和目标上都不同，它不训练新的转谱器去刷分，而是固定音频，系统地破坏 MIDI，再看各种打分方法能否随破坏程度单调下降，从而选出真正对错位敏感的打分工具。

### 为什么需要给对齐打分方法再做评测

直接比较数据集的平均分是不可靠的，因为不同数据集的曲目难度、钢琴音色和录音条件不同，分数高低可能来自这些因素而非对齐。论文把问题拆成两步，先解决打分方法的选择问题，再解决数据集比较问题。

第一步需要可控的真值，也就是知道 MIDI 被破坏了多少，再看分数是否跟着变。第二步才把选出来的方法用到真实数据集上，观察它们能否区分已知的对齐差异，例如合成且完全对齐的子集是否得分最高，口碑较差的数据集是否得分最低。

这个顺序很重要，如果跳过第一步，就无法知道一个方法是对细微时移不敏感，还是数据集本身确实对得很好，两类解释会混在一起。

### 整体流程是怎样用破坏标定打分方法

流程可以沿着一个样本理解，起点是 1 对被当作参考的音频与 MIDI，来自 MAESTRO 验证集、SMD 和 MAPS 中合成的 AkPnCGdD 与 SptkBGAm 子集组成的 MAPS-S。先对 MIDI 施加 3 种参数化破坏，破坏强度统一用 0 到 1 的严重度控制，再用待评的打分方法给每对破坏后的音频与 MIDI 打一个 0 到 1 的分数。

随后对每个破坏类型分别计算 4 个行为指标，看分数随严重度是否单调下降、跨样本是否稳定、总体下降幅度多大、下降过程是否均匀。表现好的方法被保留下来，进一步在细粒度起音区间和真实数据集上检验区分能力。

整个过程不训练新模型，破坏、合成、特征提取和已有模型的推理都是按固定流程执行，打分方法的排序完全来自它们对已知破坏的响应曲线。

### 三种 MIDI 破坏具体改变了什么

音高替换保持每个音符的起音和时长不变，只按严重度决定替换多少个音符，新音高在 21 到 108 的标准钢琴范围内均匀抽取且排除原音高。替换数量由严重度与原音符总数的乘积向下取整决定，严重度为 0 时不替换，为 1 时几乎全部替换。

\[N_{\text{swap}}=\lfloor S\cdot N_{\text{orig}}\rfloor\]

结构破坏同时删除和插入相等数量的音符，插入音符的音高随机取 21 到 108，力度取 60 到 100，起音落在原 MIDI 时间范围内，时长取 0.1 s 到 1.5 s。修改总量是删除加插入之和，因此随严重度增长更快，用来模拟内容层面的大改。

起音偏移把每个音符的起音向前或向后移动一个 Δt，最大 500 ms 以覆盖细微和粗大错位。论文按 MIREX 把 50 ms 作为正确对齐的界限，又为了在 50 ms 以下保留 4 个严重度等级并保证非零严重度至少移动 5 ms，采用严重度的平方映射。

\[\Delta t=\Delta t_{\max}\cdot S^{2}\]

例如严重度取 0、0.1、0.2、0.3 时，对应的偏移约为 0 ms、5 ms、20 ms、45 ms，正好落在转谱评价最敏感的细粒度区间。论文明确不破坏力度，因为力度没有公认的 MIDI 到音频映射，难以定义可控的破坏量。

**起音偏移 × 音高替换 × 结构破坏：** 起音偏移只移动每个音符的起音时刻，用来模拟录音与乐谱时间没对准；音高替换保持起音和时长不变只换音高，用来模拟弹错音或调性映射错误；结构破坏同时删除旧音符并插入同等数量随机音高、起音和时长的新音符，用来模拟漏标加多标的混合错误，三者分工覆盖时间、音高和曲式结构三个维度的错位。

### 四类打分方法各比较什么信息

嵌入方法计算音频嵌入与 MIDI 嵌入在共享空间的余弦相似度，其中 CLaMP 3 直接嵌入音频和 MIDI，CLAP 先把 MIDI 合成音频再比较音频嵌入。过长输入按不重叠块分别求嵌入再平均，这是为了适配模型最大时长限制。所用实现为 CLaMP 3 的 SAAS 变体与 CLAP 的 laion/clap-htsat-unfused，所有 MIDI 到音频的合成均使用 FluidSynth 加载 FluidR3_GM 音色库并固定为 0 号钢琴音色，保证比较基准一致。得分统一重缩放到 0 到 1 区间，便于跨方法比较。

特征对齐方法先把比较统一到逐帧特征，频谱图和 CENS 都是从原音频与合成音频提取，DLNCO 则直接从 MIDI 和原音频提取。对齐策略有两种，一种用 MrMsDTW 求最优路径再算路径上平均帧余弦，得到 DTW-C 和 DTW-D，另一种把较短序列尾部补零后直接逐帧余弦平均，得到 CS-S、CS-D 和 CS-C。具体执行时先对两条序列各自做 L2 归一化，再将较短序列在末尾补零至与较长序列等长，最后在补齐后的全长上平均每帧余弦相似度。特征提取统一采用 22050 Hz 采样率与 64 点跳长，CENS 经由 Librosa 提取，DLNCO 经由 SyncToolbox 与 Librosa 提取，幅度频谱图经由 Librosa 以 512 点快速傅里叶变换提取，从而保留缓慢变化的频谱表示与帧级对齐能力。

起音路线用 Madmom 的卷积网络检测音频起音，把 MIDI 中 30 ms 内的起音合并模拟和弦，再按 50 ms 容差算 mir_eval 起音 F 值。该合并操作是为了匹配音频起音检测器对和弦的响应方式，避免把同时发声的和弦音计为多次漏检。转谱路线先用 Basic Pitch、Transkun 和 ByteDance 把音频转成 MIDI，再按 MIREX 音符标准算 F 值，得到 AMT-BP、AMT-TK 和 AMT-BD，音高允许 1/4 音，起音允许 50 ms，偏移允许时长 20%。

在相同转谱模型基础上，STI 进一步引入音高约束的音符间起始间隔表示，每个音符由音高、起音时刻与距上一个同音高音符的时间间隔共同描述，以提供更丰富的结构信息。预测 MIDI 与参考 MIDI 之间构建二分代价矩阵，同音高音符对的代价取起音差与间隔差的等权和，不同音高音符对赋予 10 的 6 次方的大惩罚，再用匈牙利算法求全局最优一对一匹配。每对匹配按 w 等于 exp 负 c 除以 tau 赋软权重，其中 tau 取 0.05 以对应 MIREX 的时间容差，加权求和得到软匹配计数后计算连续型准确率、召回率与 F 值，得到 STI-BP、STI-BD 与 STI-TK。

**CENS × 频谱图 × DLNCO：** 频谱图指对原音频和 MIDI 合成音频分别求短时幅度谱得到的逐帧能量分布，直接反映音色和谐波；CENS 指在色度能量分布上做归一和平滑得到的和声进行特征，对音色变化不敏感而保留和声内容；DLNCO 指直接从 MIDI 和音频提取的对数半音 onset 相关特征，强调音符开始位置的能量突变，三者都是把音频和 MIDI 化成可逐帧比较的序列，只是保留的信息侧重不同。

### STI 怎样把转谱结果变成柔和的对齐分

STI 全称是柔和的、基于转谱的、音高约束的起音间隔分数，每个音符用音高、起音时刻和同音高起音间隔表示，同音高起音间隔指与上一个同音高音符的时间差，它带来额外的局部结构信息，使孤立音符的比较更稳健。

预测 MIDI 与参考 MIDI 之间构造二分代价矩阵，同音高音符对的代价是起音差与间隔差绝对值的等权和，不同音高直接给 1e6 的大惩罚，再用匈牙利算法求全局最优一对一匹配。每个匹配对按代价换成柔和权重，容差尺度取 0.05 s，与 MIREX 的时间容差对应，加权求和得到柔和匹配数，再算连续的准确率、召回率和 F 值。

\[w=\exp(-c/\tau),\]

直观理解是标准转谱 F 值在 50 ms 内外是硬判决，差 1 ms 就从对变错，而 STI 把时间差换成指数衰减的权重，小偏差只扣一点分，大偏差才接近 0 分，因此对细微时移有连续分辨率。论文用同样的 3 个转谱器分别实现 STI-BP、STI-BD 和 STI-TK。

**转谱 × 价值评估模型 × 辅助分数模型：** 这里转谱指把音频先转写成 MIDI 再与参考 MIDI 比较的打分路线；价值评估模型与辅助分数模型是按原文任务命名的两类 critic 角色，在本篇涉及转谱评价语境下分别对应估计整体转写价值和估计分布分数的辅助判断，但本文实际使用的转谱打分是标准音符 F 值和新提出的 STI，不套用未涉及的强化学习式 critic 更新含义。

### 本研究训练了什么没有训练什么

本研究没有训练任何新的转谱、嵌入或起音检测模型，所有模型都是调用已有权重做推理。需要说明的计算是 MIDI 到音频的合成、特征提取和已有模型的推理流程，合成统一用 FluidSynth 加 FluidR3_GM 音色库的 0 号钢琴音色，采样率 22050 Hz，跳长 64，频谱用 512 点傅里叶变换，CENS 用 Librosa，DLNCO 用 SyncToolbox 和 Librosa。

单调性按每个样本内严重度序列与分数序列的 Spearman 秩相关取负后平均，取负是因为理想情况下严重度越大分数越低，秩相关应为负值，取负后越大越好。

\[\text{Monotonicity}=-\frac{1}{L}\sum_{j=1}^{L}\rho_{\text{Spearman}}(\mathcal{S},\boldsymbol{\varphi}^{(j)})\]

稳定性是每个严重度下跨样本均值与标准差算出的归一化离散度的平均，敏感性是每个样本从无破坏到最大破坏的相对下降平均，一致性是每个样本内分数对破坏量的线性或二次拟合优度平均。所有分数都重缩放到 0 到 1，数值稳定常数取 1e-8。

**单调性 × 稳定性 × 敏感性 × 一致性：** 单调性看破坏加重时分数是否持续下降，只看排序方向不看降多少；稳定性看同一破坏程度下不同乐曲分数是否集中，反映跨样本可比性；敏感性看从无破坏到最大破坏分数相对下降多少，反映整体响应幅度；一致性看分数随破坏量是均匀渐变还是突变，起音用二次拟合、音高和结构用线性拟合，四者组合才能判断一个打分方法既跟得上变化又不乱跳。

### 实验用什么数据和条件保证可比

标定阶段用的音频与 MIDI 来自 MAESTRO 验证集、SMD 和 MAPS-S，三者音色和风格不同，用来检验泛化。其中 MAPS-S 只取合成的 AkPnCGdD 和 SptkBGAm 乐曲，被当作完全对齐的参考，适合检验对细微时移的灵敏度，而 MAESTRO 和 SMD 被认为只有小的时间错位。

严重度统一离散为 0、0.1 直到 1 的 11 个等级，每种破坏类型单独评估，指标方向都是越大越好。嵌入模型固定为 laion/clap-htsat-unfused 的 CLAP 和 SAAS 变体的 sander-wood/clamp3，转谱器固定为 Basic Pitch、Transkun 和 ByteDance 的公开实现，避免用不同版本带来的偏差。

细粒度检验只取起音偏移的前 4 个等级，对应 0 ms、5 ms、20 ms 和 45 ms，并分数据集报告，以分离音色和录音条件的影响。真实数据集比较阶段再加入 MAPS 的 ENSTDkAm 和 ENSTDkCl 中的 MUS 子集，以及 MusicNet 的独奏钢琴录音，共六个数据集。

### 全部破坏下哪些方法整体更可靠

下表比较的问题是 3 种破坏下各打分方法的单调性、稳定性、敏感性和一致性是否同时较好，数值为三数据集平均，所有指标越大越好。公平条件是同一批音频、同一破坏序列和同一重缩放区间，区别只在打分方法本身。

|  | Structural | Structural | Structural | Structural | Onset Shift | Onset Shift | Onset Shift | Onset Shift | Pitch Swap | Pitch Swap | Pitch Swap | Pitch Swap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Metric | Mono | Stab | Sens | Cons | Mono | Stab | Sens | Cons | Mono | Stab | Sens | Cons |
| CLaMP 3 | 0.89 | 0.97 | 0.09 | 0.83 | 0.55 | 0.96 | 0.02 | 0.46 | 0.93 | 0.96 | 0.07 | 0.87 |
| CLAP | 0.77 | 0.96 | 0.03 | 0.69 | 0.25 | 0.96 | 0.00 | 0.26 | 0.22 | 0.96 | 0.00 | 0.41 |
| CS-C | 0.99 | 0.93 | 0.49 | 0.87 | 0.97 | 0.95 | 0.23 | 0.95 | 1.00 | 0.94 | 0.49 | 0.99 |
| CS-D | 0.98 | 0.68 | 0.78 | 0.98 | 0.72 | 0.65 | 0.66 | 0.42 | 0.99 | 0.69 | 0.75 | 0.98 |
| CS-S | 0.99 | 0.93 | 0.34 | 0.87 | 0.97 | 0.94 | 0.21 | 0.89 | 1.00 | 0.93 | 0.37 | 1.00 |
| DTW-C | 0.96 | 0.94 | 0.45 | 0.83 | 0.99 | 0.98 | 0.16 | 0.93 | 1.00 | 0.95 | 0.45 | 0.98 |
| DTW-D | 0.99 | 0.72 | 0.58 | 0.98 | 0.91 | 0.73 | 0.23 | 0.71 | 1.00 | 0.71 | 0.65 | 0.99 |
| Onset-F1 | 0.95 | 0.85 | 0.47 | 0.97 | 0.57 | 0.76 | 0.43 | 0.33 | 0.00 | 0.84 | 0.00 | 0.00 |
| AMT-BP | 0.98 | 0.56 | 0.93 | 0.98 | 0.61 | 0.52 | 0.74 | 0.45 | 0.99 | 0.54 | 0.88 | 0.98 |
| AMT-BD | 0.98 | 0.59 | 0.95 | 0.98 | 0.64 | 0.52 | 0.76 | 0.47 | 0.99 | 0.58 | 0.90 | 0.98 |
| AMT-TK | 1.00 | 0.74 | 0.99 | 1.00 | 0.64 | 0.62 | 0.80 | 0.47 | 1.00 | 0.75 | 0.91 | 1.00 |
| STI-BP | 1.00 | 0.70 | 1.00 | 0.91 | 0.95 | 0.71 | 0.93 | 0.65 | 1.00 | 0.71 | 1.00 | 0.91 |
| STI-BD | 1.00 | 0.76 | 1.00 | 0.89 | 0.95 | 0.76 | 0.95 | 0.63 | 1.00 | 0.76 | 1.00 | 0.89 |
| STI-TK | 1.00 | 0.76 | 1.00 | 0.88 | 0.95 | 0.77 | 0.95 | 0.63 | 1.00 | 0.77 | 1.00 | 0.89 |

嵌入方法在 3 类破坏下的单调性普遍偏低，CLAP 在起音和音高替换上尤其弱，说明共享语义嵌入对精确时间错位不敏感。结构破坏几乎所有方法都能检出，音高替换则两极分化，起音偏移最难且拉开差距，STI 在起音上的单调性达到 0.95，明显高于标准 AMT F 值的 0.61 到 0.64，同时敏感性达到 0.93 到 0.95，代价是稳定性低于频谱和 CENS 方法。未胜出的例子是 Onset-F1，它在音高替换上单调性和敏感性都是 0.00，因为它只比较起音时刻而不比较音高，换音高时分数几乎不变，这个反例说明只看起音是不够的。

### 细微起音错位下分辨率来自哪里

下表比较的问题是只看 0 ms、5 ms、20 ms 和 45 ms 的细粒度起音区间时，上一轮起音单调性高于 0.9 的方法是否还保持单调，分数据集报告可以看出音色和原有错位的影响。指标方向同样越大越好。

|  | MAESTRO | MAESTRO | MAESTRO | MAESTRO | SMD | SMD | SMD | SMD | MAPS-S | MAPS-S | MAPS-S | MAPS-S |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Metric | Mono | Stab | Sens | Cons | Mono | Stab | Sens | Cons | Mono | Stab | Sens | Cons |
| CS-C | 0.94 | 0.99 | 0.02 | 0.94 | 0.64 | 0.93 | 0.01 | 0.83 | 0.94 | 0.99 | 0.02 | 0.91 |
| CS-S | 0.95 | 0.97 | 0.04 | 0.97 | 0.75 | 0.92 | 0.02 | 0.88 | 0.97 | 0.96 | 0.04 | 0.94 |
| DTW-C | 0.94 | 0.99 | 0.02 | 0.94 | 0.93 | 0.99 | 0.02 | 0.93 | 0.95 | 0.99 | 0.02 | 0.91 |
| DTW-D | 0.28 | 0.76 | 0.06 | 0.59 | 0.55 | 0.71 | 0.08 | 0.64 | -0.18 | 0.67 | 0.00 | 0.25 |
| STI-BP | 1.00 | 0.78 | 0.47 | 1.00 | 1.00 | 0.63 | 0.34 | 0.98 | 1.00 | 0.85 | 0.48 | 0.99 |
| STI-BD | 1.00 | 0.92 | 0.52 | 0.99 | 0.98 | 0.66 | 0.38 | 0.98 | 1.00 | 0.96 | 0.52 | 0.99 |
| STI-TK | 1.00 | 0.95 | 0.52 | 0.99 | 0.98 | 0.67 | 0.37 | 0.97 | 1.00 | 0.98 | 0.52 | 0.99 |

频谱和 CENS 方法稳定性最高，在三数据集上普遍达到 0.92 以上，但敏感性只有 0.01 到 0.04，原因是缓慢变化的谱表示对几毫秒的移动几乎不变，分数稳定却信息量小。STI 则相反，敏感性达到 0.34 到 0.52，单调性在三数据集上都接近 1.00，是细粒度区间分辨率最高的一组。值得注意的负结果是 DTW-D，它在全量程起音上单调性尚可，到细粒度区间在 MAESTRO 跌到 0.28，在 MAPS-S 甚至为负，说明它更擅长捕捉粗大错位而不适合细微错位。同时多数方法在 SMD 的单调性低于 MAESTRO 和 MAPS-S，论文据此推测 SMD 自身存在时间对齐噪声，但这只是间接证据，不能直接定量 SMD 的错位大小。

### 用优选方法看真实数据集相对质量

下表比较的问题是各种对齐打分方法在结构损坏、起音偏移和音高替换 3 种受控损坏类型下的单调性、稳定性和灵敏度等表现差异，数值为跨数据集平均，越大表示该维度性能越好。

|  | Structural | Structural | Structural | Structural | Onset Shift | Onset Shift | Onset Shift | Onset Shift | Pitch Swap | Pitch Swap | Pitch Swap | Pitch Swap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Metric | Mono | Stab | Sens | Cons | Mono | Stab | Sens | Cons | Mono | Stab | Sens | Cons |
| CLaMP 3 | 0.89 | 0.97 | 0.09 | 0.83 | 0.55 | 0.96 | 0.02 | 0.46 | 0.93 | 0.96 | 0.07 | 0.87 |
| CLAP | 0.77 | 0.96 | 0.03 | 0.69 | 0.25 | 0.96 | 0.00 | 0.26 | 0.22 | 0.96 | 0.00 | 0.41 |
| CS-C | 0.99 | 0.93 | 0.49 | 0.87 | 0.97 | 0.95 | 0.23 | 0.95 | 1.00 | 0.94 | 0.49 | 0.99 |
| CS-D | 0.98 | 0.68 | 0.78 | 0.98 | 0.72 | 0.65 | 0.66 | 0.42 | 0.99 | 0.69 | 0.75 | 0.98 |
| CS-S | 0.99 | 0.93 | 0.34 | 0.87 | 0.97 | 0.94 | 0.21 | 0.89 | 1.00 | 0.93 | 0.37 | 1.00 |
| DTW-C | 0.96 | 0.94 | 0.45 | 0.83 | 0.99 | 0.98 | 0.16 | 0.93 | 1.00 | 0.95 | 0.45 | 0.98 |
| DTW-D | 0.99 | 0.72 | 0.58 | 0.98 | 0.91 | 0.73 | 0.23 | 0.71 | 1.00 | 0.71 | 0.65 | 0.99 |
| Onset-F1 | 0.95 | 0.85 | 0.47 | 0.97 | 0.57 | 0.76 | 0.43 | 0.33 | 0.00 | 0.84 | 0.00 | 0.00 |
| AMT-BP | 0.98 | 0.56 | 0.93 | 0.98 | 0.61 | 0.52 | 0.74 | 0.45 | 0.99 | 0.54 | 0.88 | 0.98 |
| AMT-BD | 0.98 | 0.59 | 0.95 | 0.98 | 0.64 | 0.52 | 0.76 | 0.47 | 0.99 | 0.58 | 0.90 | 0.98 |
| AMT-TK | 1.00 | 0.74 | 0.99 | 1.00 | 0.64 | 0.62 | 0.80 | 0.47 | 1.00 | 0.75 | 0.91 | 1.00 |
| STI-BP | 1.00 | 0.70 | 1.00 | 0.91 | 0.95 | 0.71 | 0.93 | 0.65 | 1.00 | 0.71 | 1.00 | 0.91 |
| STI-BD | 1.00 | 0.76 | 1.00 | 0.89 | 0.95 | 0.76 | 0.95 | 0.63 | 1.00 | 0.76 | 1.00 | 0.89 |
| STI-TK | 1.00 | 0.76 | 1.00 | 0.88 | 0.95 | 0.77 | 0.95 | 0.63 | 1.00 | 0.77 | 1.00 | 0.89 |

结果显示结构损坏最易被检出而起音偏移最具区分度，STI 系列在起音单调性和灵敏度上占优，例如起音下 STI-BP 单调性为 0.95 灵敏度为 0.93，STI-TK 灵敏度为 0.95，而嵌入方法如 CLAP 起音单调性仅为 0.25；频谱和 CENS 类方法稳定性较高但灵敏度较低，例如 CS-S 起音灵敏度为 0.21。该结论的成立条件是合成音色与特征参数固定，若更换音色库或采样率，特征对齐类分数会系统性变化，不能全部归因于方法本身。

### 这些结论在什么条件下才成立

标定结论依赖把原音频与 MIDI 当作参考再做破坏，如果参考本身已有小错位，细粒度曲线的起点就不是真正的零点，论文用 MAPS-S 的合成完全对齐来缓解，但 MAESTRO 和 SMD 的结果仍会受原有噪声影响。

打分方法的排序只在钢琴、所用合成器和特征参数下验证，换乐器、换音色库或换跳长都可能改变频谱和 CENS 的行为，STI 的表现也会随转谱器进步而变化，论文明确把扩展到其他乐器和随转谱质量改进 STI 列为未来工作。

真实数据集的排序只是相对趋势而非绝对误差毫秒数，不同方法对中间数据集的排序并不完全一致，因此不能说 MAESTRO 一定优于 SMD 多少毫秒，只能说 MAPS-S 最好、MusicNet 最差比较稳健，中间需要结合标准差和具体方法谨慎解读。

### 要复现第一步该做什么

复现第一步是按论文取数和合成流程重建参考对，拿到 MAESTRO 验证集、SMD 和 MAPS 合成子集的音频与 MIDI，用 FluidSynth 加 FluidR3_GM 的钢琴音色把 MIDI 合成音频，采样率和跳长与论文一致，再实现 3 种破坏的严重度映射，特别是起音的平方映射和音高范围限制。

第二步是跑通打分流水线，包括 Librosa 的频谱和 CENS、SyncToolbox 的 DLNCO、Madmom 起音检测和 3 个转谱器的推理，以及 STI 的匈牙利匹配和指数权重，容差取 0.05 s。按 11 个严重度逐样本打分后，再按论文公式算 4 个指标，核对全量程和细粒度两个区间的单调性是否复现。

本次解读依据的证据中没有确认可用的作者资源链接，因此不能声称代码、模型或数据已公开，复现时需要自己按论文描述拼接公开工具，遇到版本差异要先固定转谱器和特征库版本再比较。

### 什么时候值得尝试这些打分方法

当需要清洗钢琴转谱训练集或解释模型在某个数据集上分数偏低时，值得先用 STI 结合 CENS 或频谱方法筛查，STI 对几毫秒到几十毫秒的时移更敏感，适合找细微错位，而频谱和 CENS 更稳定，适合先排除大幅错位和内容错误，两者搭配可以兼顾检出率和稳定性。

如果目标是比较两个已经对得很好的数据集，优先看 STI 的分数跨度和标准差，而不是只看均值高低，同时注意转谱器在新音色上是否可靠，否则应先在合成完全对齐的数据上标定一次。

还需要补的验证是把打分与人工核查的毫秒级误差对应起来，给出分数到时间偏差的映射，并测试在其他键盘乐器和真实音乐厅录音上的稳定性，只有补上这两项，才能把相对排序变成可操作的清洗阈值。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.14443v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
