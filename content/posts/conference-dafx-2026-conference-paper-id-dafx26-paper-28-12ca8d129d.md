---
title: "Stability Analysis of Time-Varying Virtual Analog Filters"
date: 2026-09-13
draft: false
description: "论文研究截止与共振随时调制的梯形离散虚拟模拟滤波器如何证明有界输入有界输出稳定，方法是把连续域公共二次李雅普诺夫函数保留到离散域，最强证据是状态变量与 Sallen-Key 全范围稳定而 Moog 梯在 2.88 与 2.89 之间出现稳定与发散分界，代价是 Moog 与二极管梯在全共振范围不能保证时变稳定。"
tags: ["形式化分析", "理论分析", "音乐", "音乐生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_28"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "6f2d5703e75cfdc1efe97bf1526d04bb6a6178eb1c41c7acf66c17bc05ab0d5d"
paper_digest_api_reader_plan_sha256: "4a80be99babc3f8f198c7e89083e2ba70f6d00024122a91889d0a019f4639a4d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "482d48d14a241005fa154bcfdae70fc6ff84b4131676807d943751f1cb072101"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8bfe88ffc49fe0d0ea8fe9274d68094fa8c8b99374a80bf823915dd4341b36e3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f1374e119d54871d3e9cf2191abd229342da736ad3b3219c8d5c2bd1b1e7d830"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "df4af23fc911219c7b3f167ac9bd2b98bcbd8727771f92f396a4ebef2df5d6e0"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.formal-analysis","label":"形式化分析"},{"facet":"research_focus","id":"research_focus.theory","label":"理论分析"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "形式化分析"
paper_digest_score: 8.2
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "理论研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 时变也会稳定吗：用连续域能量函数证明梯形离散虚拟模拟滤波器

> 英文题目：*Stability Analysis of Time-Varying Virtual Analog Filters*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_28`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf)

标签：#形式化分析 #理论分析 #音乐 #音乐生成

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前25% | 文档类型：理论研究

## 👥 作者与机构

- Russell McClellan：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

时变虚拟模拟滤波器以有界音频输入\(u[n]\)与时变截止、共振参数为输入，以滤波器输出\(y[n]\)为输出，难点在于时变下无传递函数极点判据且冻结参数处处稳定仍可能整体发散。本文先建立离散公共二次Lyapunov函数与Laroche矩阵范数收缩判据的等价关系，将稳定性转化为单一相似变换下所有状态转移矩阵的严格压缩。再证明连续时间CQLF经梯形积分保持为离散时间CQLF，使离散稳定性可由连续域矩阵不等式直接判定。随后以该连续域不等式统一判定状态变量滤波器、Sallen-Key滤波器与Moog梯形滤波器等在给定共振上界内的有界输入有界输出稳定性，并自然分离截止调制与共振调制。与直接在离散域凑相似变换的方法相比，该机制把复杂离散矩阵分析降为更简单的连续状态矩阵分析，避免对时变离散矩阵逐点构造变换。在脉冲输入且恒定截止参数的仿真条件下，\(k[n]\)在0与2.89间交替时的输出平方幅值指标增长至1500，高于\(k[n]\)在0与2.88间交替时的输出平方幅值指标的0.08。该结论适用边界限于梯形离散化线性开关模型与给定共振上界内，慢变参数与非线性饱和等音乐常见情形尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决什么矛盾？

本文的输入是论文原文与本次收到的官方原图像素，目标是为刚进入语音、音乐与音频领域的研究生写出可核对、可复述的方法解读。必须保留的信息包括离散状态方程形式、有界输入有界输出稳定的定义、梯形离散公式的作用、定理 3.1 的连续到离散保持关系，以及 4 个案例滤波器的稳定范围与反例条件。输出是 1 篇按学习依赖展开的中文技术解读，不做营销式判断。

中心矛盾是音乐使用中滤波器参数必然随时间变化，而线性时不变系统的极点判据在时变下失效，甚至每个冻结时刻都稳定，时变切换仍可能发散。因此需要一种不依赖传递函数、能对一整族参数同时成立的稳定性证明工具。论文选择公共 2 次李雅普诺夫函数，并证明连续域找到的公共函数可直接用于梯形离散后的时变系统，从而把较难的离散分式矩阵分析搬到较简单的连续矩阵上完成。

### 已有路线如何证明时变稳定，本文站在哪里？

在进入本文方法前，需要先理解两条已有路线。第一条是拉罗什在文献 1 中给出的时变递归滤波器判据，其中准则 2 要求存在同一个可逆矩阵 T 和常数 gamma 小于 1，使得所有时刻的相似变换后状态矩阵范数一致小于 gamma，直观含义是在同一套坐标下每一步都是严格压缩，再加上输入、输出矩阵有界即可得到有界输入有界输出稳定。该准则及其扩展曾被用于虚拟模拟滤波器，文献 2 和文献 6 讨论过状态变量滤波器等对象。

第二条是控制文献中的李雅普诺夫方法，用一个正定矩阵 P 度量状态能量，要求每一步能量按比例收缩。论文的引理 2.1 证明了这两条路线在离散时变状态矩阵上是等价的：给定 P 可取其乔莱斯基分解得到 T，给定 T 可取 T 转置 T 得到 P。本文的站位不是另起一套判据，而是阐明这种等价性，并把优势聚焦到梯形离散结构上。也就是说，论文继承拉罗什的稳定结论，但在构造 P 时利用连续原型，从而避开直接对离散矩阵寻找 T 的困难。

**拉罗什准则 2 × 相似变换收缩：** 相似变换收缩负责描述存在可逆矩阵 T 使所有 TA[n]T 逆的诱导二范数一致小于 gamma 小于 1；拉罗什准则 2 负责把该一致收缩加上 B、C、D 有界转化为有界输入有界输出稳定。两者搭配的理由是 T 定义了新的坐标系，在该坐标系下每一步都是严格压缩，组合意义是它与公共 2 次李雅普诺夫函数等价，P 取为 T 转置 T 即可互相转化。

### 时变滤波器的稳定性问题如何形式化？

论文把单输入单输出线性时变滤波器写成离散状态方程，状态向量 x[n] 为 N 维，输入 u[n] 与输出 y[n] 为标量，状态更新为 x[n 加 1] 等于 A[n] 乘 x[n] 加 B[n] 乘 u[n]，输出为 C[n] 乘 x[n] 加 D[n] 乘 u[n]。这里 A、B、C、D 都可随采样序号 n 变化。有界输入有界输出稳定的定义是存在常数 G 大于等于 0，使得只要输入对一切 n 满足绝对值不超过 M，输出对一切 n 满足绝对值不超过 G 乘 M。在音乐场景下，这个定义对应任意有界音频输入与任意用户调制下，效果器不应产生无界输出，避免损坏下游系统或产生可闻故障。

难点在于时变系统没有单一传递函数，不能用 frozen 参数下极点在单位圆内来保证时变稳定。论文明确引用了这一已知现象：即使每个时刻冻结参数得到的时不变系统都稳定，参数随时间切换仍可能不稳定。因此问题转化为对矩阵序列 A[n] 寻找一致成立的收缩证书，同时要求 B、C、D 的范数有与 n 无关的上界。

### 方法全景：为什么先在连续域找能量函数？

论文的方法全景可以沿一个样本走完。设想某一时刻 n 对应一个冻结的连续原型系统，由 AC[n]、BC[n]、CC[n]、DC[n] 描述，再用与当前截止有关的离散化参数 g[n] 经梯形公式映射为离散矩阵 A[n]、B[n]、C[n]、D[n]。离散后的 A[n] 是包含矩阵求逆的分式形式，直接分析其收缩性较为繁琐。而连续域的 AC[n] 往往是稀疏或分块简单的矩阵，例如 1 阶低通只是一个负数，4 级 Moog 梯是次对角为 1、右上角为负 k 的伴随型结构。因此论文提出先在连续域寻找公共 2 次李雅普诺夫函数 P，再由定理 3.1 自动得到离散域的公共函数。

连续域条件是存在 alpha 大于 0，使得对一切 n 与一切 x，x 转置乘 AC[n] 转置 P 加 PAC[n] 乘 x 不超过负 alpha 乘 x 转置 Px，等价于该对称矩阵加 alphaP 半负定。离散域条件是存在 rho 小于 1，使得 A[n]x 转置 P 乘 A[n]x 不超过 rho 乘 x 转置 Px。定理 3.1 的附加条件是 AC[n] 范数有一致上界 M，g[n] 位于 gmin 到 gmax 区间且 gmin 大于 0，BC、CC、DC 一致有界。满足这些条件时，连续公共 P 也是离散公共 P，从而离散时变滤波器稳定。

**连续时间公共李雅普诺夫函数 × 离散时间公共李雅普诺夫函数：** 连续时间公共李雅普诺夫函数负责约束 AC[n] 的对称部分 AC[n] 转置 P 加 PAC[n] 一致负定，使连续能量持续衰减；离散时间公共李雅普诺夫函数负责约束 A[n] 转置 PA[n] 相对 P 一致收缩一个比例 rho 小于 1。两者搭配的理由是梯形映射保持了特定的能量不等式结构，组合意义是找到连续域的 P 就自动得到离散域的 P，不必直接处理离散后更复杂的分式矩阵。

下面先看最简单的 1 阶低通状态框图，它是后文所有 LP 模块的原型。图中从左到右是输入 u、求和点、积分框与输出 y，反馈线把输出送回求和点的负端，含义是状态导数等于输入减状态。

> **看图路径：** 1. 先从左侧输入 u 沿箭头走到求和点，确认正负号如何相减；2. 再看积分框与输出 y 到下方的反馈线如何闭环；3. 最后把该一阶结构记为后文 LP 模块的基本单元

[![原论文 Figure 1：State-space block diagram of the normalized one-pole low-pass filter (8).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/25fd7e4d037a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/25fd7e4d037a/figure-1.png)

*论文图 1。原论文 Figure 1：“State-space block diagram of the normalized one-pole low-pass filter (8). The block labeled R denotes integration.”。*

该图显示的闭环只有一个积分器与一条负反馈，对应归一化方程中状态导数等于负 x 加 u，输出等于 x。把它记为 LP 模块后，后文的 Sallen-Key 与 Moog 梯都可以理解为多个该模块的级联加反馈，连续矩阵的稀疏性正来源于这种级联结构，这也是连续域分析更简单的原因。

### 组件如何计算：状态矩阵与梯形映射的分工是什么？

论文的组件包括连续状态矩阵、离散状态矩阵与离散化参数三部分。连续部分用 AC 描述内部状态如何相互耦合与衰减，BC 描述输入如何进入状态，CC 与 DC 描述状态与输入如何形成输出。离散部分用 A 描述状态如何一步转移，B、C、D 描述输入输出耦合。梯形映射负责把二者连接起来，其离散 A 等于单位阵减 g 乘 AC 的逆乘以单位阵加 g 乘 AC，B、C、D 也有相应的含逆矩阵的显式表达式，其中 g 大于 0，预畸变时取目标数字频率与连续截止之比的正切形式。

论文强调时变建模方式是冻结式切换：每个 n 离散一个可能不同的线性时不变连续系统，得到的离散序列作为切换系统研究，而不是把单个时变连续系统做数值积分。这一区分决定了定理条件中对一切 n 要求同一个 P 成立。引理 2.1 则负责把 P 的存在性翻译为相似变换收缩，便于沿用拉罗什的有界输入有界输出结论。

**有界输入有界输出稳定 × 公共 2 次李雅普诺夫函数：** 有界输入有界输出稳定负责提问题：任意有界音频输入和任意时变参数下输出是否保持有界；公共 2 次李雅普诺夫函数负责给充分条件：同一个正定矩阵 P 让所有时刻的状态能量都严格收缩。两者搭配的理由是时变系统没有单一传递函数可用，无法看极点，而能量收缩与输入有界性结合可直接推出输出有界，组合意义是把稳定性证明转化为寻找一个公共 P。

**梯形积分离散化 × 状态空间实现：** 状态空间实现负责写出滤波器的内部记忆如何更新，用 A[n]、B[n]、C[n]、D[n] 描述状态、输入与输出关系；梯形积分离散化负责给出从连续矩阵 AC、BC、CC、DC 到离散矩阵 A、B、C、D 的固定代数映射。两者搭配的理由是虚拟模拟滤波器先在连续域按电路列方程，再用同一套梯形公式离散，组合意义是连续域的矩阵结构决定了离散域矩阵的收缩性质，从而可以在较简单的连续域找 P。

下面看状态变量滤波器的连续框图，它有两个积分器与两条反馈路径，参数 R 控制共振。

> **看图路径：** 1. 先沿 u 经过两个串联积分框到达输出 y 的主通路；2. 再看中间状态经 2R 增益返回最左侧求和点的支路；3. 最后看最右侧输出直接返回下方的第二条反馈线

[![原论文 Figure 3：State-space block diagram of the state variable fil- ter (13).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/25fd7e4d037a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/25fd7e4d037a/figure-3.png)

*论文图 3。原论文 Figure 3：“State-space block diagram of the state variable fil- ter (13). The parameter R controls the resonance.”。*

该图可见主通路是输入经两个积分框到达输出，中间状态经标有 2R 的三角增益块返回左侧求和点的正端，最右侧输出经下方长线返回同一求和点的正端。论文归一化低通实现中 AC 矩阵第一行为 0 与 1，第二行为负 1 与负 2R，输入向量为 0 与 1，转置含义正是图中两条反馈的权重。理解该图后，可明白 R 同时出现在矩阵与反馈增益中，时变 R 意味着连续矩阵族随 R 变化，需要一个对区间内所有 R 成立的公共 P。
下面看 Moog 梯的连续框图，它是 4 个 1 阶模块的级联加全局反馈。

> **看图路径：** 1. 先数从输入求和点到输出 y 之间串联的四个 LP 方框；2. 再看输出 y 经增益 k 返回输入端负号的全局反馈线；3. 最后对比单级与四级级联在状态维度上的差别

[![原论文 Figure 6：Block diagram of the linearized Moog ladder filter (17): four cascaded one-pole sections (8) with…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/25fd7e4d037a/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/25fd7e4d037a/figure-6.png)

*论文图 6。原论文 Figure 6：“Block diagram of the linearized Moog ladder filter (17): four cascaded one-pole sections (8) with global feedback gain k.”。*

该图从左到右有 4 个标 LP 的方框，每个对应前述 1 阶低通，输出 y 经增益 k 返回输入求和点的负端。对应连续矩阵是 4 阶的，对角为负 1，次对角为 1，右上角为负 k，其余为 0。这种伴随加反馈结构使连续矩阵形式简单，但离散后 A 矩阵变为含 a 等于 1 加 g、b 等于 1 减 g 与分母 Delta 等于 a 的 4 次方加 k 乘 g 4 次方的稠密分式矩阵，直接寻找离散公共 P 会很困难，这正是论文主张回到连续域的原因。

### 本研究有训练阶段吗？实际计算过程是什么？

本研究没有神经网络训练阶段，也没有数据集梯度优化、参数冻结与解冻或监督损失回传，因此不存在学习率、批量大小、轮数或早停等训练超参数。实际计算过程是解析推导加数值验证的组合。解析部分包括写出连续状态矩阵、猜测或构造公共矩阵 P、验证对称正定与负定条件、经定理 3.1 传递到离散域，再结合 B、C、D 有界得到有界输入有界输出稳定。数值部分包括对 Moog 梯与二极管梯用随机数值搜索找到候选 P，再在参数区间端点处数值计算 AC 转置 P 加 PAC 加 alphaP 的特征值，确认全部为负。

以及对反例构造两步周期切换矩阵 F 等于 A1 乘 A0，数值计算其模最大特征值大于 1，并验证该不稳定模态既被脉冲激励又在输出中可见。论文未报告梯度路径、优化器细节或大规模统计检验，缺项应明确指出：P 的搜索算法、随机种子、求解器容差与可重复代码均未作为正文证据给出，本次资源状态也显示未发现可验证的公开代码与数据链接，不能声称已公开。

### 案例条件如何设置：哪些参数时变，边界如何取？

论文的案例条件按滤波器类型分别设置，但共享两条时变假设：离散化参数 g[n] 在 gmin 到 gmax 区间内变化且 gmin 大于 0，对应截止频率扫描；共振类参数在闭区间内变化，例如状态变量滤波器的 R 在 Rmin 到 Rmax 且 Rmin 大于 0，Sallen-Key 的 k 在 0 到 kmax 且 kmax 小于 2，Moog 梯与二极管梯则分别在受限区间内变化。连续原型均归一化使关注频率为每秒 1 弧度，g 由采样周期或预畸变正切公式决定。评估方式不是听感实验或误差曲线拟合，而是稳定性证明加反例仿真。证明侧要求给出显式 P 或相似变换 T，并验证对区间内一切参数成立。

反例侧固定 g 为常数，输入取 u[0] 等于 1 的脉冲其余为 0，k 按 0 与上限值交替切换，观察两步周期复合矩阵的特征值模是否大于 1，并用数值仿真确认输出平方幅度是否持续增长。论文强调离散滤波器始终是研究对象，连续原型只是证明用的分析工具。

### 主结果是什么：哪些滤波器被证明稳定，分界在哪里？

论文首先给出推论 4.1：由梯形积分从稳定最小实现的连续时不变原型离散得到、仅让 g[n] 时变的滤波器必有界输入有界输出稳定。这直接覆盖了 1 阶低通在截止扫描下的稳定性，也覆盖了固定共振而扫截止的情形。然后对状态变量滤波器，命题 4.2 证明当 R 在正下界到上界区间内、g 时变时稳定，构造的 P 为对角 1、非对角 epsilon 的 2 阶对称矩阵，epsilon 需小于区间端点决定的两个上界。

对 Sallen-Key 滤波器，命题 4.4 证明 k 在 0 到 kmax 且 kmax 小于 2、g 时变时稳定，方法是经固定相似变换 T 把其 AC 化为状态变量滤波器形式，再由引理 4.3 把 P 搬运过去。Moog 梯在固定 k 属于 0 到 4、g 时变时稳定，但时变 k 需要收紧到 0 到 2.88。二极管梯在固定 k 属于稳定区间、g 时变时稳定，时变 k 需要收紧到 0 到 8.90。

**截止频率调制 × 共振参数调制：** 截止频率调制负责改变离散化参数 g[n]，对应连续原型截止映射到数字截止的预畸变关系；共振参数调制负责改变连续矩阵 AC[n] 本身，例如状态变量滤波器的 R 或 Moog 梯的 k。两者搭配的理由是实际演奏中包络、振荡器和自动化会同时改变二者，组合意义是论文区分了只调 g 必稳定与同时调 AC 需要额外公共 P 的两种情形，解释了为何 Moog 类滤波器需要限制 k 范围。

下表整理 Moog 梯的可证明稳定与可证明不稳定的参数条件，比较问题是同一 g 时变假设下共振上限差 0.01 是否导致结论翻转，公平条件是输入均为有界脉冲且 B、C、D 一致有界，指标方向是输出是否有界而非信噪比高低。

| 条件 | 指标 | 固定 k 扫截止基线 | 时变 k 本方法稳定界 | 时变 k 反例比较对象 |
| --- | --- | --- | --- | --- |
| Moog 梯连续原型 | 线性时不变稳定 | k 在 0 到 4 | k 在 0 到 4 | k 在 0 到 4 |
| Moog 梯离散时变 | 有界输入有界输出 | 固定 k 在 0 到 4 扫 g 稳定 | 时变 k 在 0 到 2.88 稳定 | 时变 k 在 0 到 2.89 不稳定 |

下段解释主要收益与具体代价。收益是 2.88 范围内的任意切换都有公共 P 保证，证明只需检查端点，因为 AC 转置 P 加 PAC 加 alphaP 对 k 仿射。

代价是超过 2.88 哪怕 0.01，论文给出显式两步周期反例使输出持续增长，说明全范围时变稳定不成立。未胜出项是固定 k 扫截止的更宽范围不能推广到时变 k，边界外未评测的缓慢变化情形论文未给出保证，属于后续工作。

> **看图路径：** 1. 先确认横轴为采样点 n 与纵轴为输出平方幅度；2. 再对比上下面板 k 序列仅 0.01 差别时的纵轴量级；3. 最后观察上方面板随 n 增长的发散包络与下面板的衰减包络

[![原论文 Figure 5：Simulated squared output magnitude |y\[n\]|2 for the discretized Moog filter with impulse input…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/25fd7e4d037a/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/25fd7e4d037a/figure-5.png)

*论文图 5。原论文 Figure 5：“Simulated squared output magnitude |y[n]|2 for the discretized Moog filter with impulse input u[0] = 1 and constant g[n] = 1.3764.”。*

该图上下面板共享横轴采样点 n 与纵轴输出平方幅度，但纵轴量级完全不同：上面板 k 交替取 0 与 2.89 时纵轴升至 1500 附近且包络随 n 向右持续抬高，下面板 k 交替取 0 与 2.88 时纵轴仅 0.08 量级且包络随 n 衰减到零附近。两面板输入同为 u[0] 等于 1 的脉冲且 g 恒为 1.3764，差异仅来自 k 上限 0.01 的变化，这与正文特征值模大于 1 与小于 1 的计算一致，支持了稳定界接近最优的判断。

### 反证与替换条件：Sallen-Key 与二极管梯的边界有多紧？

本节按问题组织反证：测的是同一证明框架换一个拓扑或换一个 k 上限后结论是否依然成立，比较对象是可证明稳定的上限与可构造发散的上限加微小增量，条件保持 g 有正下界且 B、C、D 有界一致。Sallen-Key 的替换在于用引理 4.3 搬运 P，相似变换 T 把其 AC 化为等价的状态变量形式，但输出矩阵经 T 变换后不同，因此时变输出并不等同于状态变量滤波器，这澄清了相似即相同的误解。

二极管梯的替换在于连续矩阵变为非对称的 3 对角加反馈形式，传递函数分母为 4 次多项式加 k，线性时不变稳定上限约 18.4，但时变稳定仅证明到 8.90。论文对二极管梯同样给出数值 P 矩阵与端点特征值检验，并用两步周期反例说明 8.91 已不稳定。
下表整理 Sallen-Key 与二极管梯的稳定与不稳定条件，比较问题是在各自拓扑下时变 k 上限差微小量是否翻转结论，公平条件同为 g 时变有界且输入有界，指标方向仍是输出有界性。

| 条件 | 指标 | 线性时不变基线 | 时变 k 本方法稳定界 | 时变 k 反例比较对象 |
| --- | --- | --- | --- | --- |
| Sallen-Key 离散时变 | 有界输入有界输出 | k 小于 2 稳定 | k 在 0 到 kmax 且 kmax 小于 2 稳定 | 未给出超出 2 的时变反例 |
| 二极管梯连续原型 | 极点实部为负 | k 上限约 18.4 | k 上限约 18.4 | k 上限约 18.4 |

下段解释主要收益与代价。收益是 Sallen-Key 在小于 2 的全线性时不变稳定区间内都保持时变稳定，无需收紧。

二极管梯则必须从约 18.4 大幅收紧到 8.90，代价是高共振区即使每个冻结时刻稳定，快速交替仍可激发不稳定模态。未胜出项是论文未证明 Sallen-Key 超出 2 后的时变行为，也未评测参数缓慢变化是否能扩大 Moog 与二极管梯的稳定区，这些属于明确的未评测边界，不能把总体趋势推广为每一步切换都安全。

### 什么还没有被证明，哪些直觉不能当结论？

论文直接报告的是充分条件而非必要条件，找到公共 2 次李雅普诺夫函数可推出稳定，但找不到不代表一定不稳定，除非像 Moog 与二极管梯那样给出显式发散反例。有限解释是端点检验的有效性依赖 AC 转置 P 加 PAC 对 k 仿射，因此只需检查区间端点，这一线性性质不自动适用于所有参数化方式。

未验证的推测是启发式认为参数变化足够慢时不稳定滤波器也可能稳定，论文在结论中明确将其列为未来工作，并指出音乐场景中参数逐样本平滑变化的精确刻画仍需补充，不能把该直觉当作已证明的安全保证。另一局限是定理要求 g 有正下界且 AC 一致有界，若截止扫到零附近或参数无界，定理前提不再满足。

此外数值 P 的搜索过程、容差与可重复脚本未在正文充分交代，特征值计算的数值误差边界也未给出区间证明，因此复现时应把数值部分视为需独立验证的环节，而非解析恒等式。

### 复现先做什么，需要保留哪些信息条件？

复现应先从 1 阶低通与状态变量滤波器做起，因为它们的矩阵最小且 P 有显式形式。第一步按论文写出连续 AC、BC、CC、DC 与梯形映射，固定采样周期或预畸变公式得到 g 区间，并确认 gmin 大于 0。第二步实现状态变量滤波器的 P 构造：选满足小于两个端点上界的正 epsilon，组装对角 1、非对角 epsilon 的矩阵，验证正定与对一切 R 区间内 AC 转置 P 加 PAC 负定，可先在稠密网格上扫描再做符号验证。第三步实现 Sallen-Key 的相似变换 T 并检验变换后矩阵确为状态变量形式，同时保留原 B、C 用于仿真，避免误用变换后的输入矩阵。

第四步再进入 Moog 与二极管梯：直接采用论文给出的数值 P 与 alpha，在 k 端点处计算特征值，确认全为负；然后实现脉冲加两步周期 k 切换的仿真，复现 2.88 有界与 2.89 发散、8.90 有界与 8.91 发散的分界。需保留的关键信息是归一化截止、g 取值、k 序列、输入脉冲位置与输出平方幅度的纵轴定义。资源方面，本次未发现可验证的公开代码、模型或数据链接，不得声称已公开，复现需自行按公式实现。

### 何时值得尝试这套方法，如何一句话记住它？

当滤波器由梯形积分从连续原型离散得到、且连续矩阵比离散分式矩阵更简单时，值得尝试先在连续域寻找公共 2 次李雅普诺夫函数，再经定理传递到离散域。适用信号是截止或共振需实时调制的合成器与效果器场景，不适用的是非梯形离散、非线性大信号区或参数无界的情形。一句话记住：连续域的一个公共能量函数，若对所有冻结参数成立且离散步长有正下界，则梯形离散后的时变系统继承同一能量收缩。

回到音乐实践，这意味着 1 阶扫频、状态变量与 Sallen-Key 在所述区间内可放心调制，而 Moog 梯与二极管梯在高共振区应限制调制上限或放慢调制速度并补充实测，否则可能遇到论文反例中的交替切换发散。未来验证应补足缓慢变化的定量界、数值 P 的区间证明与可运行代码，从而把充分条件推进为更贴近演奏的保证。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=1)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=2)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-23.png)

区域 23 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-24.png)

区域 24 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 25，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-25.png)

区域 25 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=3)

[![原文数学表达区域 26，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-26.png)

区域 26 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=4)

[![原文数学表达区域 27，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-27.png)

区域 27 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=4)

[![原文数学表达区域 28，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-28.png)

区域 28 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=4)

[![原文数学表达区域 29，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-29.png)

区域 29 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=4)

[![原文数学表达区域 30，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-30.png)

区域 30 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=4)

[![原文数学表达区域 31，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-31.png)

区域 31 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=4)

[![原文数学表达区域 32，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/870b853df778/figure-32.png)

区域 32 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf#page=4)

另有 90 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
