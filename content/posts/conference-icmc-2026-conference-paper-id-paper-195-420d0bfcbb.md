---
title: "Snapping Matters: Context-Aware Onset Refinement for Automatic Music Transcription"
date: 2026-09-14
draft: false
description: "针对乐谱与真实录音只有粗对齐时标注不够准的问题，该文把逐音符的起音修正做成按音高独立的二分图匹配，并在 MusicNet 训练、多数据集测试中报告了对贪心修正的一致提升，代价是窗口越大越依赖后验质量与一对一约束是否成立。"
tags: ["数据清洗", "评测协议", "音乐", "音乐转录"]
categories: ["icmc-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:icmc:2026:conference-paper-id:paper-195"
paper_digest_source_kind: conference
paper_digest_conference_id: "icmc-2026"
paper_digest_conference_record_url: "https://icmc2026.ligeti-zentrum.de/proceedings/"
paper_digest_conference_pdf_url: "https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c2286932c464ef3d4d9704b71750a7ee616028021f0d867d8976b34586b8fb7a"
paper_digest_api_reader_plan_sha256: "5cbe3127b46d272efa18599e2fc1ec1011b7f3f4a60fe8f5d9fe936ad96067c4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d2dfbd25a2f1697b1827e453477967f71c6ff9d9a1d9c9c47eb2d068480bbee4"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0b38a1674e3dc8dc4c17a87007dd2d3985d797ec6e517deb312a937abfb5bf53"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7a39ffb51f7abaf5a1d8e6be32d5d5e97644b6f111fe8a7a9de6f1c1042db17c"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "225877c78d05f0653cb4e63da957a3b48b86c38488d65a8dbabe2323b989901f"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.data-cleaning","label":"数据清洗"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.transcription","label":"音乐转录"}]
paper_digest_primary_task: "音乐转录"
paper_digest_primary_method: "数据清洗"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 对齐很粗时更要扣准起音：把 Snapping 做成按音高的全局分配

> 英文题目：*Snapping Matters: Context-Aware Onset Refinement for Automatic Music Transcription*

> 会议身份：`conference:icmc:2026:conference-paper-id:paper-195`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

标签：#数据清洗 #评测协议 #音乐 #音乐转录

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Abhirup Saha：机构信息未能从会议 PDF 纯文本可靠映射
- Hans-Ulrich Berendes：机构信息未能从会议 PDF 纯文本可靠映射
- Meinard M¨uller：机构信息未能从会议 PDF 纯文本可靠映射
- Ben Maman：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

自动音乐转录（Automatic Music Transcription，AMT）的输入是真实演奏录音，输出是与音高相关的音符起始时间钢琴卷帘，难点在于非钢琴与混合编制缺乏精确标注而只能依赖乐谱与音频的粗对齐。本文方法链包含三步：先用序列级对齐（Sequence-level Alignment，DTW或线性拉伸）得到粗起始映射，再用预训练转录器生成按音高的起始后验图（Posteriorgram），最后在容许误差窗内将音符事件与音频帧做按音高二部图匹配以最大化后验证据并强制一对一一致。与逐音符贪心峰值拾取（Greedy Snapping）的关键机制差异在于全局最优分配避免重复占用与漏检，在窗口重叠与初始对齐粗糙时仍保持一致性。在MusicNet训练并跨数据集评测时，DTW加二部图在URMP上F1达到89.3%，相对合成预训练基线的77.5%提升显著，且在管弦乐BSED上同样优于贪心与直方图方法。该结论适用于室内乐与钢琴的乐器无关起始检测，对偏移时长、乐器标签与密集管弦乐同时同音冲突尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://abhirupsaha8.github.io> — 链接可访问（HTTP 200）
- 第三方资源：<https://docs.scipy.org/doc/scipy/referenc> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决哪段链路？

本文的输入是一段真实演奏录音，加上同一首曲子的乐谱或 MIDI。目标是得到可用于训练的精确音符起音标注，进而训练乐器无关的自动音乐转录模型。输出不是直接的转录乐谱，而是先把乐谱上的每个起音时间映射到音频时间轴上的精确帧。

对刚入门的读者，白话解释是：我们有谱子知道弹了哪些音，但不知道在录音里每个音具体哪 1 毫秒响起。序列级对齐能把整首曲子大致对上，好比知道大概在第几秒，但受表情性 timing、琶音和声部不同步影响，同时写在谱子同一时刻的音在录音里可能前后错开。直接把谱子时间搬运过去，标签就会偏几十到几百毫秒，拿来训练起音检测器就不够用。

本文聚焦的链路是 2 阶段标注中的第二段：先做 1 次粗的序列级对齐，再在每个粗位置附近按神经网络给出的起音激活找附近峰值并吸附过去，这一步就叫 snapping。论文要回答的是吸附这一步应该如何形式化与求解，才能在窗口重叠和初值很粗时仍然可靠。项目演示页当前可用，地址为官方资源中的个人主页；文中引用的 scipy 稀疏图匹配文档链接本次显示当前不可用，不作为可运行依据。

### 已有路线如何得到训练标签，为何还留一个吸附步骤？

钢琴转录路线已经有 Onsets and Frames 与 MAESTRO 这类高精度 Disklavier 数据，监督信号本身很准。但多乐器数据如 MusicNet 只有 34 小时、11 种乐器且对齐精度低，URMP、ChoraleBricks、PHENICX 等多轨数据相对准但规模小或录音环境单一，BSED 这类管弦乐只能靠音频与乐谱对齐产生标注。于是常见做法是用动态时间规整等方法先做序列级对齐。

已有改进包括用色度加起音特征做高分辨率同步，用预训练转录模型的原始特征增强同步鲁棒性，再用吸附得到音符级标注；吉他数据集也沿用了类似策略；更新的工作还用直方图 top-K 峰值拾取简化对齐。论文把这些工作定位为同一链条：序列对齐解决大范围对应，吸附解决局部精确性。

本文与它们的区别不是提出新的转录网络结构，而是把吸附从局部贪心启发式改为按音高的结构化分配问题。相关转录背景已从钢琴、有明显起音的吉他扩展到弦乐、管乐与多乐器，分为区分乐器与不区分乐器两类，本文属于后者。

### 粗对齐为何必然不够，吸附窗口重叠会出什么错？

论文先区分两个映射。序列级对齐是乐谱帧到音频帧的函数，音符起音级对齐是每个音符事件到音频帧的函数。当前者诱导出后者时，若两个起音在谱子上落在同一帧而在音频上落在不同帧，任何直接搬运都至少错一个。这就是琶音与表情性异步带来的根本困难。

论文假设粗映射与真实映射之间存在统一误差界，记为吸附窗口半径。窗口越小监督越强但要求初值越准，窗口越大越能容忍初值误差但监督越弱。教学例子是：两个相邻音符的允许搜索区间互相重叠，中间只有一个高峰和一个矮峰，贪心从左到右先把高峰占掉，后面音符只能去找更差的峰或空位，就会产生重复分配、漏峰或全局不一致。

**序列级对齐 × 音符起音级对齐：** 序列级对齐负责给出乐谱时间轴到音频时间轴的整段对应关系，分工是保证大范围不走偏；音符起音级对齐负责把每个音符事件映射到音频上的精确起音时刻，分工是给出可训练的监督标签。二者搭配的原因是前者鲁棒但粗，后者精确但需要初值；组合意义在于用 snapping 把前者的粗映射修正为后者的精确映射。

这正是本文要解决的矛盾：初值越粗越需要大窗口，而大窗口越容易重叠，局部最优不再等于全局最优。

### 方法全景：一个音符样本如何走完粗位置到精位置？

沿一个样本走一遍。输入是某个音高的一串乐谱音符，以及粗对齐给出的每个音符在音频上的初值。系统先为每个音符以初值为中心展开一个时间窗口，得到候选音频帧集合。再取出该音高的起音后验序列，候选帧上的后验值就是把该音符放到该帧的权重。最后在同一音高内联合选择每个音符恰好占 1 帧、不同音符不占同一帧的方案，使总权重最大。

本小节配图是单音高的吸附示意，黑虚线是序列级初值，红虚线是吸附后位置，蓝线是起音后验激活。读图时不要把蓝线峰值直接当成真实标签，它只是预训练模型给出的证据，还需要窗口与全局约束来使用。

> **看图路径：** 1. 先找到横轴时间与纵轴起音预测值，确认蓝色折线是逐帧似然；2. 再区分黑色虚线初值与红色虚线修正后位置的左右移动方向；3. 观察左右两个音符的峰高差异，思考低峰时只看局部最大值的风险；4. 把箭头理解为修正动作，而不是模型结构中的数据流

[![原论文 Figure 1：Snapping for a single pitch. The black dashed line (“Seq.- Aligned”) shows onset timings from a…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/fc65dc704402/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/fc65dc704402/figure-1.png)

*论文图 1。原论文 Figure 1：“Snapping for a single pitch. The black dashed line (“Seq.- Aligned”) shows onset timings from a sequence-level alignment (e.g., DTW), while the red dashed line (“Snapped”)…”。*

从图中可见，左右两个初值都偏离了附近的后验峰，修正动作是向峰移动。左侧峰高约 0.8，右侧峰高约 0.4，说明不同音符的证据强度不同，联合优化需要权衡是保高峰还是兼顾低峰的可分配性。图中箭头只表示移动方向，不表示网络前向或梯度路径。论文报告这类修正决定了弱对齐谱音频对能否变成可用训练数据。

### 贪心为何次优，图匹配如何保证一对一？

贪心分支的计算是独立峰值拾取：对每个音符在其窗口内取后验最大值，若已被占用则按顺序让路。这种做法实现简单，但在重叠区先到先得，前面选了后面就没得选。图匹配分支把同一音高的音符看成一侧节点，把音频帧看成另一侧节点，只在窗口内连边，边权等于该帧的后验值，然后求总权重最大的匹配，并用经典分配算法求解。

论文强调按音高独立求解。原因是不同音高的后验序列不同，跨音高共享帧不会产生冲突，而同音高内两个音符若在谱子上同时而在音频上分开，必须强制分开。约束有两条：每个音符的落点必须在其窗口内，不同音符不能落到同一帧。

**起音后验图 × 吸附窗口：** 起音后验图负责给出每 1 帧出现某音高起音的似然，分工是提供音频证据；吸附窗口负责限定每个乐谱音符允许在初值附近搜索的候选帧集合，分工是约束搜索范围与监督强度。二者搭配的原因是证据需要范围约束才不会乱跳，范围需要证据才知道向哪修正；组合意义是只在窗口内按后验权重选择匹配。

下图对比了两种求解在重叠窗口下的行为，左侧还给出序列对齐与后验图的来源，中间标出次优，右侧标出最优。

> **看图路径：** 1. 先看左侧乐谱与后验图如何按音高取出同一行进行比较；2. 再看中间粉色贪心分支中重叠窗口是怎样被逐个消耗的；3. 对比右侧绿色分支中音符节点与候选帧节点之间的边权重；4. 最后对照下方标注的次优与最优，确认全局目标不是局部峰值之和的贪心累加

[![原论文 Figure 2：Snapping using greedy matching, compared to snapping based on bipartite graph matching.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/fc65dc704402/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/fc65dc704402/figure-2.png)

*论文图 2。原论文 Figure 2：“Snapping using greedy matching, compared to snapping based on bipartite graph matching.”。*

从可见像素看，中间贪心按从左到右处理 3 个音符，后验行中出现 0.9、0.8、0.6、0.1、0.7、0.1、0.1 等数值，窗口互相覆盖后被框出次优区间；右侧把候选帧编号为节点，用边权连接音符节点，得到最优分配。教学含义是：重叠越大，贪心的顺序偏差越大，图匹配的优势越明显。论文未给出该示意图之外的像素级数值可复算，仅作为机制对照。

### 按音高建图的计算细节与窗口含义是什么？

具体构造是：顶点集一侧是该音高的全部音符事件，另一侧是音频时间轴全部帧，边集只保留落入各自窗口的音符到帧对。不在窗口内的权重设为零，不参与选择。优化目标是全部所选边权重之和最大。这是一个标准的加权二分匹配，可用匈牙利类或最短增广路算法求解，文中指向 scipy 的实现文档，但该文档链接本次不可用，复现时需自行选用等价的线性分配求解器并记录版本。

窗口半径直接控制监督强度。小窗口要求序列级对齐本身误差小，大窗口容忍线性拉伸这类很粗的初值。论文在动态时间规整后用 0.1 秒到 2 秒，在线性拉伸后用 2 秒到 60 秒，正是为了匹配两种初值的误差量级。

**贪心匹配 × 二分图匹配：** 贪心匹配负责按从左到右等局部顺序逐个取窗口内最大值，分工是快速给出局部最优；二分图匹配负责在同一音高内联合考虑全部音符与候选帧，分工是保证 1 对一且全局权重最大。二者搭配的比较理由是窗口重叠时局部最优会互相冲突；组合意义在于用全局分配替代独立峰值拾取，减少重复占用与漏峰。

需要提醒的是，按音高独立意味着同音高同时刻、不同乐器的音符在乐器无关目标下会被合并，论文在室内乐与钢琴中假设此类情况稀少，对管弦乐则明确留作未来工作，不把合并当成已解决。

### 训练了什么，没训练什么，监督从哪里来？

本研究的训练部分是乐器无关的起音检测器。所有比较模型都从同一个合成预训练的乐器无关模型初始化，该模型由前人工作发布。训练数据只用 MusicNet，其他数据集包括 MAESTRO 的训练划分在内都只做评估，不参与训练。这种设计是为了做跨数据集评估，更接近真实部署。

监督来源是吸附后的 MusicNet 标注：先用动态时间规整或线性拉伸得到初值，再用贪心、二分图或直方图方法吸附，最后把修正后的起音位置写成音高钢琴卷帘作为目标。论文以期望最大化方式迭代，但原文未报告学习率、优化器、轮数、冻结层与梯度是否截断等细节，因此不能从模型名称推定具体更新规则，这是复现时需要补记的缺项。

**乐器无关转录 × 音高钢琴卷帘：** 乐器无关转录负责不区分乐器只预测音高与起音是否激活，分工是降低对乐器标签的依赖；音高钢琴卷帘负责把音符事件列表折叠为时间乘音高的二值矩阵，分工是给出统一的训练目标。二者搭配的原因是多乐器合奏中同音高同时刻应合并为一个监督位置；组合意义是让钢琴、室内乐与管弦乐可以用同一套起音检测目标训练。

吸附所用的后验在训练前来自合成预训练模型，训练后也可用 MusicNet 微调后的模型再做吸附。论文用后者证明了训练不仅提高转录分数，也提高了再做吸附时的对齐精度，但未声称推理延迟或计算开销得到改善。

### 数据、划分、容差与比较策略如何保证可比？

训练集是 34 小时的 MusicNet，含 1 到 8 人的室内乐，声学多样但标注粗。评估集包括 20 小时 MAESTRO 测试集、5 小时 SMD、80 分钟 URMP、由多乐器组合扩展到 52 小时以上的 ChoraleBricks、10 分钟出头的 PHENICX，以及 37 分钟的内部管弦乐 BSED。BSED 的音符级精确标注在评估吸附本身时被有意不用，只用信号处理特征做的序列级初值，避免用待评方法评价自己。

指标是音符级精确率、召回率与 F1，预测起音落在参考起音容差内算对。容差按标注质量分档：MAESTRO 与 SMD 用 Disklavier 的 50 毫秒标准，URMP、ChoraleBricks 与 PHENICX 用 100 毫秒，BSED 因是全混音动态时间规整初值而用 500 毫秒。论文用容差曲线说明放宽容差主要吸收标注误差，而非转录能力突变。

**动态时间规整 × 线性拉伸：** 动态时间规整负责用色度与起音等帧级相似度估计非线性 warping，分工是提供较准的初值；线性拉伸负责把整段乐谱按时长线性映射到音频时间轴，分工是模拟非常粗的初值。二者搭配的原因是论文要检验不同初值精度下修正方法的鲁棒性；组合意义是用小窗口配动态时间规整、用大窗口配线性拉伸形成对照。

比较策略固定初值与窗口，只换吸附求解器：贪心、直方图 top-K 与本文二分图；窗口从 0.1 秒到 60 秒；初值分动态时间规整与线性拉伸。命名如 DTW-BiP 0.64 秒表示动态时间规整后用二分图、窗口 0.64 秒，LS-Gre 60 秒表示线性拉伸后用贪心、窗口 60 秒。

### 跨数据集转录：吸附是否让弱对齐数据变可用？

先看是否可用。只用动态时间规整初值而不吸附，MAESTRO 的 F1 相对合成基线大幅下降，说明弱标签直接训练是有害的。加上吸附后大幅回升并超过合成基线，论文报告这证明了吸附是把弱对齐数据变可用的关键步骤。钢琴上 0.1 秒小窗口已明显超过基线，扩大到 2 秒主要靠召回继续提升。

下图是不同容差下的平均 F1 曲线，用的都是动态时间规整加二分图 0.64 秒模型。读图前要确认横轴是容差毫秒数，纵轴是平均 F1，不同颜色代表不同数据集。

> **看图路径：** 1. 先确认横轴是起音容差毫秒数，纵轴是平均 F1；2. 再按图例区分钢琴、室内乐与管弦乐曲线的高度分组；3. 观察容差从 50 毫秒放宽到 100 毫秒和 500 毫秒时哪条曲线爬升最陡；4. 注意高容差下曲线趋平，说明放宽容差只能吸收标注误差而非无限提高转录能力

[![原论文 Figure 3：Note-level F1 score as a function of onset tolerance threshold, using the DTW-BiP (0.64s) model.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/fc65dc704402/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/fc65dc704402/figure-3.png)

*论文图 3。原论文 Figure 3：“Note-level F1 score as a function of onset tolerance threshold, using the DTW-BiP (0.64s) model.”。*

从像素可见，最上方是 SMD 与 MAESTRO 两条高线，随容差几乎持平；中间是 URMP 与 ChoraleBricks，从 50 毫秒到 100 毫秒爬升明显；最下方蓝色 BSED 从 50 毫秒到 500 毫秒爬升最陡，到 1000 毫秒才趋平。这支持论文的容差选择：多轨数据用 100 毫秒可吸收小误差，BSED 需用 500 毫秒才能覆盖序列级误差。不能把高容差下的分数直接当成 50 毫秒下的能力。

下表整理跨数据集主结果的比较问题：在固定训练集与容差下，贪心与图匹配谁更高，代价是什么。指标方向都是越高越好，F1 为主，精确率与召回用于判断是漏检减少还是误报增加。

| 评估集 | 容差阈值 | Synth 基线 F1 | 贪心吸附 F1 | 图匹配吸附 F1 |
| --- | --- | --- | --- | --- |
| MAESTRO | 50 ms | 84.7% | 89.0 (DTW-Gre 2s) | 90.2% (DTW-BiP 0.64s/2s) |
| SMD | 50 ms | 基线待查 | 91.9 (DTW-Gre 0.64s) | 92.5 (Hist) |
| URMP | 100 ms | 77.5 | 87.5 (DTW-Gre 2s) | 89.3 (DTW-BiP 0.64s), 88.6 (DTW-BiP 2s) |
| ChoraleBricks | 100 ms | 79.1 | 83.9 (DTW-Gre 2s) | 87.0 (DTW-BiP 0.64s), 86.5 (DTW-BiP 2s) |

表后解释：图匹配在钢琴上比贪心高约 0.5 到 1.2 个百分点，在小合奏上差距拉大到 1 到 3 个百分点，直方图方法介于贪心与图匹配之间。代价是小合奏整体仍略低于钢琴，且 ChoraleBricks 对容差更敏感，把容差从 100 毫秒放到 200 毫秒可再涨约 3 个百分点，而 URMP 只涨约 1 个百分点，说明两者的标注误差分布不同。未胜出项是线性拉伸加小窗口，在 MAESTRO 上会掉到 65.1，证明大误差初值必须配大窗口。

### 管弦乐与大窗口：优势在何时放大？

管弦乐结果整体低于钢琴与小合奏。同样用动态时间规整加二分图 0.64 秒，在 URMP 上可达 89.3 附近，在 PHENICX 上只有 71.7 附近。论文把差距归因于编制复杂度：PHENICX 是 10 到 40 件乐器，URMP 不超过 5 件。图匹配仍一致优于贪心，但在管弦乐上的绝对增益不如小合奏抢眼。

大窗口是本文强调的 regime。当初值为线性拉伸时，60 秒贪心在 MAESTRO 上几乎无增益，而 60 秒图匹配能把 F1 与召回都明显拉起；在 URMP 上 60 秒图匹配也比 60 秒贪心高约 4 个百分点。这支持判断：窗口越大重叠越多，贪心退化越严重，图匹配的鲁棒性才显现。

限制也要讲清：管弦乐中同音高、谱面同时但音频分开的情况可能更多，论文明确假设在室内乐与钢琴中稀少、对管弦乐留待未来工作，因此大编制下的合并误差未被量化，不能把小合奏的结论直接推广到所有管弦乐。

### 直接对齐验证：扰动后能否找回真值，差距随窗口如何变？

间接评估看转录分数，直接评估看对齐本身。做法是在 MAESTRO 测试集上把真值起音在正负 w 内均匀扰动，w 取 1、5、15、60 帧，对应 0.032 秒、0.16 秒、0.48 秒和 1.92 秒，再用同样大小的窗口吸附回去，用相对真值的 F1 衡量。比较 3 种后验：合成预训练、MusicNet 微调后，以及真值钢琴卷帘作为正确性检查。

真值后验下贪心与图匹配都是 100%，说明求解器实现本身正确。合成后验下扰动越大分数越低，但图匹配仍保持 0.48 秒 91.0、1.92 秒 87.8，而扰动后标签本身只有 16.7 和 9.6。MusicNet 微调后的后验在各窗口下都比合成后验再高，说明用吸附数据训练确实反过来改善了再吸附的证据质量。

| 扰动窗口 w | 扰动后 F1 | 贪心吸附 F1 | 图匹配吸附 F1 | 图减贪心差值 |
| --- | --- | --- | --- | --- |
| 0.16 s | 待查 | 92.5 | 93.6 | 1.1 |
| 0.48 s | 16.7 | 88.6 | 91.0 | 2.4 |
| 1.92 s | 9.6 | 84.7 | 87.8 | 3.1 |
| 管弦对照 | - | 70.4/67.6 (Gre 0.64s) | 71.5/69.6 (BiP 0.64s) | 约 1-2 |

表后解释：差值随窗口单调增大，符合重叠导致贪心次优的机制解释。论文还报告对齐上的差距可达 4%，大于转录上约 1% 的差距，支持训练对部分标签噪声有一定容忍、只要大部分起音对准即可的判断。但这是有限解释而非因果证明，未测量误标率与最终分数的定量关系。未胜出项是小窗口配大扰动必然失败，表中 2 秒窗口配线性拉伸在管弦乐上只有 50.8 与 55.0，属预期内的失败条件。

### 哪些条件没测，哪些推论不能做？

未评测边界首先是偏移与时长。全文只讨论起音映射，不含音符偏移，吸附后的偏移标签质量未知。其次是同音高合并问题在管弦乐中的频率与影响未量化，乐器无关目标天然会合并同音高同时刻事件，论文只说室内乐与钢琴假设稀少。再次是统计显著性与重复种子未报告，给出的多是单次 F1，不能判断 0.5 个百分点是否稳定。

成本缺项也很明确：训练与推理的硬件、时长、输出帧率与实际延迟均未报告，不能承诺图匹配带来速度或成本改善。二分图按音高独立求解在大编制下节点数会增加，但原文未给复杂度实测，只能说算法本身是多项式可解，不能推定端到端更快。

相关性不等于因果。转录分数随窗口与求解器变化支持吸附重要，但不能排除合成预训练初始化、MusicNet 曲目分布与评估集容差选择共同作用。特别是 BSED 用 500 毫秒容差，分数天然高于 50 毫秒口径，跨数据集绝对值不可直接排名。

### 复现先做什么，需要固定哪些信息条件？

先复现数据链。只用 MusicNet 做训练，其他集只做评估；MAESTRO 只取测试集约 20 小时。初值分两支：动态时间规整用色度加起音特征，线性拉伸按时长映射；BSED 评估吸附本身时只用信号处理特征的序列级初值，不用已吸附的精确标注，避免循环论证。

再固定容差：钢琴 50 毫秒，URMP、ChoraleBricks 与 PHENICX 100 毫秒，BSED 500 毫秒。转录模型从同一合成预训练初始化出发，分别跑贪心、直方图与二分图，窗口按初值精度取 0.1 秒、0.64 秒、2 秒或 10 到 60 秒。直接对齐复现则在 MAESTRO 上加均匀扰动并用等大窗口找回，用真值后验先验 100% 再测合成与微调后验。

关键超参数是窗口半径，它同时是误差假设与监督强度。复现时必须记录分配求解器版本与按音高循环的实现，因为原文引用的 scipy 文档链接当前不可用，不能依赖该链接可运行。项目页当前可用，可对照定性示例，但定量复现仍以论文正文数字为准。

### 何时值得尝试这种吸附，何时不必？

当你手里有谱子但只有粗对齐，且起音后验尚可时，值得尝试按音高二分图吸附。尤其当初值粗到需要秒级以上窗口、且相邻音符窗口必然重叠时，贪心容易把高峰提前占掉，图匹配的 1 对一全局目标更稳。钢琴与小编制弦乐管乐是论文验证最充分的区间。

当标注本身已是 Disklavier 级精度，或后验质量很差时，不必指望吸附带来大增益。前者如 MAESTRO 与 SMD 在紧容差下已很高，放宽容差几乎不涨；后者在大扰动下分数仍随窗口下降，吸附只能挽回部分误差。管弦乐大编制、需要偏移与乐器标签的任务，还需补验证才能采用。

一句话收束：把吸附从独立峰值拾取改为同音高全局分配，是连接鲁棒粗对齐与精确监督的可调步骤，窗口越大、初值越粗，其相对贪心的价值越大，但前提是后验可信且 1 对一假设近似成立。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-1.png)

区域 1 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-2.png)

区域 2 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-3.png)

区域 3 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-4.png)

区域 4 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=2)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-5.png)

区域 5 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-6.png)

区域 6 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-7.png)

区域 7 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-8.png)

区域 8 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-9.png)

区域 9 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-10.png)

区域 10 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 11，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-11.png)

区域 11 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=4)

[![原文数学表达区域 12，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/c7cccd2b9b59/figure-12.png)

区域 12 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=4)

另有 12 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 icmc-2026 论文汇总](/posts/conference-icmc-2026/)
