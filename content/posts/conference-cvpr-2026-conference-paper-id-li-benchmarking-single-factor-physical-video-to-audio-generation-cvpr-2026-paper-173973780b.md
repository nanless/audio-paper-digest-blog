---
title: "Benchmarking Single-Factor Physical Video-to-Audio Generation"
date: 2026-09-13
draft: false
description: "论文提出只变一个物理因素的时间对齐视频对与单视频模式测试来审计视频生音频模型，用方向一致性与敲击对齐度量揭示文本提升语义却损害同步、像素物理推理普遍偏弱的代价。"
tags: ["基准测试", "基准设计", "模型评估", "音视频", "视频到声音生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Li_Benchmarking_Single-Factor_Physical_Video-to-Audio_Generation_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_Benchmarking_Single-Factor_Physical_Video-to-Audio_Generation_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Benchmarking_Single-Factor_Physical_Video-to-Audio_Generation_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "882af5930789903c5f1c1c3329501d1568390fde9e162e705961dbb1ed7584e5"
paper_digest_api_reader_plan_sha256: "9013d92ef1a4120e23ffad97bd1b41b2077a7875b407df7d9b74a559947763e9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8e0a30c2a092203507370819212c0070e74189b59a4dcfa7bf7ecb4d6a0ecc66"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "36c4a8d51eb4ec0b5d99d6957115b0ad88154a9ec13eb6acd33137094f77ff1b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "fc192513198076a7800d9747ca3a3159b175f60a45a7ed87d7b55e181bf57ca7"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ab706a2c7109571d1caaf194c36e6956ca61a543e275fcb474615a17e188d799"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "基准设计"
paper_digest_score: 8.1
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 只听其声不够：用单因素反事实考视频生音频的物理因果

> 英文题目：*Benchmarking Single-Factor Physical Video-to-Audio Generation*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Li_Benchmarking_Single-Factor_Physical_Video-to-Audio_Generation_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Benchmarking_Single-Factor_Physical_Video-to-Audio_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Benchmarking_Single-Factor_Physical_Video-to-Audio_Generation_CVPR_2026_paper.pdf)

标签：#基准测试 #基准设计 #模型评估 #音视频 #视频到声音生成

评分：**8.1/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准

## 👥 作者与机构

- Tingle Li：机构信息未能从会议 PDF 纯文本可靠映射
- Siddharth Gururani：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin J. Shih：机构信息未能从会议 PDF 纯文本可靠映射
- Gantavya Bhatt：机构信息未能从会议 PDF 纯文本可靠映射
- Sang-gil Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Zhifeng Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Arushi Goel：机构信息未能从会议 PDF 纯文本可靠映射
- Gopala Anumanchipalli：机构信息未能从会议 PDF 纯文本可靠映射
- Ming-Yu Liu：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

视频到音频生成以无声视频为输入合成对应声音，难点在于模型常输出听感合理但物理错误的声音，而现有评估只测分布相似与语义对齐。FlatSounds先在室内采集可控交互视频并人工核验撞击时刻与文本描述，为因果评测提供锚点，该锚点输出直接用于下一步的对齐。接着对仅差单一物理因子的反事实对做基于锚点的时间规整，使撞击时刻对齐而材质与满度等变量被隔离，规整后视频对进入物理变化判定。最后用包络与频谱特征检测生成音频是否随干预朝预期方向变化，并以软门控先权衡失同步与语义错误样本再判物理方向。相比直接在VGGSound上算FAD与DeSync，该机制差异在于以因果干预替代野外相关，以单因子控制揭示模型依赖文本而忽视视觉物理线索，实际意义是把评估从听感合理转向物理正确性。在FlatSounds-Physics基准下，MMAudio-Phys带文本条件的Confidence得分为0.306，高于MMAudio带文本条件的Confidence得分0.226。该结论适用边界仅限室内短时撞击类事件与单因子干预，复合变化与野外长尾场景尚未验证，且原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://research.nvidia.com/labs/dir/flatsounds/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，必须保留什么？

这篇解读的输入是视频生音频任务，输出是给定无声视频生成与之配套的波形。目标读者是刚进入语音音乐音频的研究生，需要能复述如何从视频得到声音、如何判断声音在物理上是否正确。必须保留的信息是受控干预条件、时间对齐做法、物理指标方向定义、是否使用文本标题的实验条件，以及各指标越高越好还是越低越好。

视频生音频的英文名是 video-to-audio generation，缩写为 V2A。白话说，它是看画面配声音：看到金属勺敲玻璃杯，就要生成短促清脆的叮声；看到在楼梯间拍手，就要生成混响更长的啪声。模型要同时解决配什么声音与何时发出。传统评估多用分布与语义指标，例如弗雷歇音频距离 Fréchet Audio Distance 与语言音频对比分数 Contrastive Language-Audio Pretraining score，只回答像不像、像哪类，没有回答满度变化时音高是否下降、材质变硬时起振是否变快。

论文把问题重新表述为物理审计。世界模型要能模拟几何、材质、接触与房间如何决定声音纹理，包括决定音高的模态共振与决定音色的高频阻尼。如果模型只是记住玻璃常配叮声，它在相关性测试中能过关，但在把敲击物从金属换成木头、把容器从空换成满、把房间从吸声客厅换成硬墙走廊时，就无法正确调制起振时间、基频、衰减与混响。初学者要先建立这个区分： plausible 是听起来合理，correct 是随物理干预朝正确方向变化。

为此论文提出 FlatSounds 基准。做法是用手机在室内录制日常物体的敲击、刮擦、拨弦、拍手等短起振事件，每个片段 5 到 10 秒，包含 1 到 5 次能量包络峰清晰的发声，且峰之间至少间隔半秒。每个视频配有人写标题与发声时刻标注。关键设计是两种互补测试：时间弯曲后的事实反事实对，只变一个物理因素而冲击时刻对齐；单视频模式测试，检验重复敲击的一致性与音阶上行的方向趋势。项目代码当前可用，已公开在官方项目页，研究者可以下载复跑生成与评分流程。

### 同输入同目标的工作在测什么，缺了哪块因果？

视频生音频生成路线已经从特定交互走向开放域。按输入与目标划分，一类是自回归变换器直接从视觉预测音频标记，一类是扩散、流匹配与掩码生成模型追求高保真波形，还有视频音频协同生成。当前主流高分路线是 2 个阶段：先用文本生音频扩散模型打底，再加视觉适配器或做多模态联合训练，受评基线中的 MMAudio、Hunyuan-V2A、FoleyCrafter 即属此类，ThinkSound 更显式地先用多模态大语言模型生成文本思维链再合成音频。这条路线在听感上成功，但结构上依赖文本，恰好引出本文要审计的问题：视觉流是否被架空。

评估路线按监督与运行阶段可分为 3 类。第一类是野外相关性评估，用 AudioSet 与 VGGSound 等大规模互联网视频测分布与语义，用同步模型估计加权时间偏移，打包成 AV-Benchmark 等工具包。它们的输入是非受控视频，目标是总体像不像，无法提供配对真值来做干预分析，更难在事后用视频编辑精确只改一个物理因素。第二类是视觉物理基准，检验视频生成模型的物理常识、目标跟踪与真实物理实验，以及视觉语言模型的重量密度理解，但都停在视觉属性，没有延伸到声音的声学物理量。第 3 类是因果与反事实推理，用干预迫使模型学真因果结构而非捷径。

本文的定位是把第二类与第 3 类合到音频域。声学早有形式模型把几何、刚度、边界条件连到共振与阻尼，心理声学则用最小可觉差 Just Noticeable Difference 定义人能察觉的变化阈，例如基频与衰减率的变化要超过一定比例才算可感知。论文据此选择客观且感知相关的声学量，而不是让评测员凭感觉打分。缺失的证据不是技术错误：原文没有声称解决了视频编辑生成反事实的通用难题，而是用实拍加时间弯曲绕开生成式编辑，保证干预真实可控。

### 要回答的因果问题是什么，什么算答对？

论文要回答的是：当视频中单个物理因素被干预，生成声音的对应物理特征是否朝预期方向变化，同时冲击时刻是否对齐。举例说明，例子仅为教学示意：同一敲击动作从空罐换成装满液体的罐，预期基频下降；同一拍手从家具多的客厅换到宽楼梯间，预期混响时间上升、直达混响比下降；泡沫换成金属，预期起振更快、频谱更亮。这些方向是专家按声学知识事先标注的，不是事后看生成结果再定。

答对的判定分两层。第一层是时间层：生成音频必须在每个标注时刻附近有能量峰，否则后续比较音高或混响没有意义。论文只看召回不看精确率，因为多出的环境音可能是合理的，不应惩罚。第二层是物理层：不要求绝对音高落在某个赫兹区间，只要求变化方向正确。例如反事实对要求从视频甲到乙的指标差值超过鲁棒效应阈值且符号正确。

单视频上行音阶要求每击基频序列在对数域呈单调上升，用斯皮尔曼秩相关判定；无变化测试要求均值差的置信区间完全落在等价带内。

学习依赖是先对齐后比物理。论文用软门控实现：每个随机种子先按对齐与语义质量加权，质量差的种子降权但不直接删除，再统计满足物理趋势的加权种子比例得到置信度 Confidence。阈值设计考虑了感知与鲁棒性，例如增减判定用均值 2% 与鲁棒标准差 2% 十五取大者，单调判定按序列长度自适应相关阈值。这种设计避免在声音内容完全错时硬判音高方向，也避免微小抖动被算成方向正确。

### 两类测试如何组织，一条样本走完全程？

方法全景是两条测试线共用同一批室内录制。第一条是受控反事实对，第二条是单视频模式。沿一个样本走完全程有助于理解：输入是一段敲罐视频，视频编码器与可选文本标题进入 V2A 模型，输出是波形，后处理提取包络峰与声学特征，再与标注时刻与预期方向比较得到对齐分与物理分。

下段先导读图一的教学意图。该图左半展示满度干预，右半展示音符趋势，上下分别对应输入帧与预测音高曲线，横轴统一为秒，纵轴为赫兹，目的是让读者一眼看到只变一个因素时曲线应如何分离或爬升。

> **看图路径：** 1. 先看上排左右两组胶片：左侧空瓶与满瓶敲击动作相同而瓶内物不同，右侧钢琴左右手位置向高音区移动；2. 再看下排横轴时间秒与纵轴预测音高赫兹：左侧空瓶曲线高于满瓶，右侧第二音符平台高于第一音符；3. 核对虚线与斜线如何把视频帧时刻映射到曲线时刻，确认只变满度或音符而敲击时刻对齐

[![原论文 Figure 1：FlatSounds for video-to-audio physical benchmark.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/748e0c2a6f03/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/748e0c2a6f03/figure-1.png)

*论文图 1。原论文 Figure 1：“FlatSounds for video-to-audio physical benchmark.”。*

上图可见内容的解释是：左侧同一敲击动作下空罐曲线整体高于满罐，标注时刻约 2.7 秒附近两条曲线出现分叉，说明模型若理解满度应生成更低音高；右侧 2 次钢琴按键的基频平台从约 520 赫兹抬到约 700 赫兹，说明上行按键应对应音高上升。黑色连线把视频帧时刻映射到曲线时刻，强调冲击对齐是比较前提。若生成音频漏击或时刻漂移，后续方向比较会被门控降权。

**反事实对 × 时间弯曲对齐：** 反事实对负责提出因果问题：两个视频除一个物理因素外其余尽量相同，预期声音只沿该因素方向变化；时间弯曲对齐负责保证可比性，以标注的敲击峰为锚点拉伸压缩反事实视频的锚间片段，使冲击时刻重合，二者搭配才能把声音差异归因于单因素而不是节奏错位。

全景的另一半是单视频测试。它不需要配对视频，适用于重复相同敲击的一致性检验与音阶上下行的趋势检验。例如同一金属块在桌上与悬空的阻尼不同，预期衰减率不同；同一把吉他连续拨弦力度相近，预期包络与音色波动小。论文把 185 个室内片段全部用于单视频对齐分析，从中构造出 178 个带预期方向的配对测试与 90 个单视频测试，共 268 个物理测试用例。这种紧凑但受控的设计是用可解释性换覆盖广度，不追求野外全品类。

### 对齐与物理特征各用什么信号算出来？

对齐组件的输入是标注的冲击时刻与生成波形。计算是先用起振强度检测器找候选峰，对弱峰用包络回退，再检查每个标注附近自适应窗内是否有命中。输出 3 个量：命中覆盖率 Hit Coverage 是召回百分比，计时误差 Timing Error 是命中峰与真值的平均毫秒偏差，完美对齐 Perfect Align 是多次采样中达到 100% 覆盖的生成比例。白话说，覆盖率管有没有，误差管准不准，完美对齐管稳不稳。只用召回的理由是环境音不应扣分，这点与常规精确率召回率并重的检测任务不同。

**命中覆盖率 × 计时误差：** 命中覆盖率负责回答有没有敲出声，只统计每个标注时刻附近自适应窗内是否至少检出一个能量峰，强调召回而不惩罚环境音；计时误差负责回答敲得准不准，计算命中峰与真值的平均毫秒偏差，二者搭配分别刻画漏检与偏移，避免把多生成一声误判为对齐失败。

物理组件分 3 组信号。时间包络组包括起振时间、衰减率与时间调制：起振是从起振到峰值的时间，硬碰硬应更短；衰减是峰后衰减快慢，金属板贴桌比悬空阻尼大因而衰减更快；时间调制是节奏幅度起伏强度，摇硬币罐应强于摇沙罐。房间组用混响时间 RT60 与直达混响比 DRR，前者管拖尾多长，后者管清晰度。频谱音调组用基频 F0、频谱质心、频谱通量与滚降频率：基频管音高，质心管明亮度，通量管帧间频谱变化即粗糙忙碌感，滚降管高频能量铺展，例如踩干叶应高于踩湿叶。

**基频 × 频谱质心：** 基频负责刻画周期声的音高主体，是最低频率分量，随乐器音阶上行应单调上升；频谱质心负责刻画每帧幅度谱的重心即明亮尖锐感，硬材料撞击应高于软材料，二者搭配把音高趋势与材质亮度分开检验，防止只用音色好听掩盖音高方向错误。

房间与频谱的搭配需要单独理解，因为初学者易把响与混响混淆。响度大不等于房间大，混响时间长与直达混响比低才是大硬房间的标志。同样，亮与高不同：基频高是音高高，质心高是能量偏高频即更脆更硬。论文举例玻璃撞击质心应高于木头与沙发，撕纸应比剪刀平滑剪纸的通量更低，这些都是可复述的定性方向，不是具体数值。

**混响时间 × 直达混响比：** 混响时间负责度量声级衰减 60 分贝所需时长，大厅可达数秒量级而小吸声房间不足 1 秒；直达混响比负责度量直达声能量与混响场能量之比，大厅混响强因而比值更低，二者搭配从时长与清晰度两个侧面检验环境变化，避免只用响度判断房间大小。

统计判定组件把方向变成可投票的规则。配对增减要求单种子差值绝对值超过阈值才投票，低于阈值或无检出记失败；多击单调在对数基频上算秩相关，按长度自适应阈值；无变化用均值差的 95% 置信区间完全落入等价带才算通过。每个指标的置信度是加权后通过种子比例，越高越好。这种设计把可觉差与鲁棒标准差结合，避免把噪声当信号。

### 本研究训练了什么，冻结了什么，还缺什么？

本研究没有从零训练 4 个主流基线，而是直接调用已有模型做审计：FoleyCrafter、Hunyuan-V2A、MMAudio、ThinkSound。唯一的训练动作是作者自制的 MMAudio-Phys，它是在 MMAudio 基础上用物理感知标题微调的变体，标题用 Omni-captioner 按定制提示收集，目的是给模型更显式的材质、满度、环境描述。原文没有报告微调时的学习率、步数、冻结层、梯度路径与数据划分细节，因此不能复述参数更新范围，也不能从名称推定是全量还是适配器微调，复现时应把该变体视为信息条件更强的对照，而不是结构创新的证据。

**置信度 × 软门控加权投票：** 软门控加权投票负责先保证可比性，对每个随机种子用对齐与语义 plausibility 加权，同步差或语义错的种子不直接丢弃而是降权；置信度负责再判断物理方向，对加权后满足预期增减或单调趋势的种子比例汇总，二者搭配避免在声音内容完全不对时空谈音高升降是否正确。

无训练部分的真实计算是标注、配对与评分流水线。标注流水线先对原声音算短时傅里叶变换，跨频取均方根得到能量包络，再用科学计算库的峰检测找候选时刻，人工剔除金属长尾共振造成的伪峰并补漏，丢弃无法干净提取的片段，得到真值时刻与配对锚点。配对流水线要求反事实视频至少有与事实视频相同的敲击数，多余只取前 N 个，再以锚点拉伸压缩锚间帧数实现时刻重合，单次冲击只需剪帧即可。评分流水线对每个视频多次采样，一般为 10 个种子，分别算对齐、语义与物理量，再按软门控汇总。

需要明确缺项：原文未给出峰检测阈值、自适应窗宽、重采样插值方法与加权公式的完整超参数，只在正文与补充中描述原则。若要复现，应先实现可运行的基线版本并固定随机种子，再补做敏感性分析，不能把未报告的细节当成确定性求解，也不能因部分参数冻结就认为输出确定，因为扩散采样的随机性仍然存在。

### 数据、协议与基线条件如何保证可比？

数据是 FlatSounds 的 185 个室内片段，覆盖罐、器皿、门、地板、手与乐器，环境包括沙发吸声侧与硬墙侧、走廊楼梯间与客厅。每段有人写标题与发声时刻，组织时围绕指标设计：时间指标侧重材质接触阻尼，频谱指标侧重音高硬度纹理，环境指标侧重同手势跨房间。许多片段组成时间对齐的反事实对，其余做单视频测试。基准强调单因素：材质、环境、纹理、阻尼、满度、接触、动作、音符变化每次只动其一。

下段导读数据集图的阅读顺序。该图左侧是统计，右侧是 8 组帧对，目的是让读者先建立分布概念，再看控制变量的拍摄方式，判断干预是否干净。

> **看图路径：** 1. 先看最左列自上而下三个统计图：物体环形分布、每视频敲击次数直方图、各声学指标测试量；2. 再逐行看右侧八组反事实帧：上排材质对环境对纹理对阻尼对，下排满度对接触对动作对音符变化；3. 对比每对左右帧除目标因素外背景与动作是否尽量固定，理解单因素的拍摄控制意图

[![原论文 Figure 2：FlatSounds dataset. How should sound change when we manipulate specific visual properties of a…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/748e0c2a6f03/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/748e0c2a6f03/figure-2.png)

*论文图 2。原论文 Figure 2：“FlatSounds dataset. How should sound change when we manipulate specific visual properties of a scene?”。*

上图可见内容的解释是：左上环形图显示金属木头手玻璃等物体的占比，左中直方图显示每视频 1 到 4 击为主，左下堆叠条显示各声学指标的测试量，其中方向性测试占多数；右侧上排材质对用同杯换敲击物，环境对用走廊换客厅，纹理对用木地板换地毯，阻尼对用悬挂金属条换手持，下排满度对用满罐换空罐，接触动作与音符对分别换敲击方式与按键位置。这种摆拍保证除目标因素外场景尽量固定，时间弯曲再把冲击时刻对齐。

评估协议分 3 层。VGGSound 层跑标准语义与分布指标，包括 3 种特征下的弗雷歇距离、两种特征下的散度、 inception 分数、ImageBind 分数与去同步分数 DeSync，方向是前 3 类越低越好，后 3 类中 inception 与 ImageBind 越高越好而 DeSync 越低越好。FlatSounds-Single 层在 185 片段上跑同样的标准指标加自研对齐指标。FlatSounds-Physics 层在 268 用例上跑物理置信度、覆盖率、完美对齐与 CLAP。所有模型都测带标题与不带标题两种条件，以分离文本的贡献。人类评估在 40 个视频上做成对偏好，用 Elo 排名，以同步、有无幻觉与物理合理为准则，只测带标题版本。

### 物理审计的主结果是什么，谁在什么上最弱？

主结果要回答的比较问题是：在冲击时刻已对齐的前提下，哪个模型更能随单因素干预朝正确方向调制声音，公平条件是同一批 268 用例、同一软门控加权与同一 10 种子投票，指标方向是置信度、覆盖率、完美对齐与 CLAP 越高越好。

| Method | Confidence | Hit Coverage | Perfect Align | CLAP |
| --- | --- | --- | --- | --- |
| MMAudio-Phys (w/ Caption) | 0.306 | 82.65 | 59.82 | 0.630 |
| Hunyuan-V2A (w/ Caption) | 0.305 | 90.21 | 69.31 | 0.633 |
| ThinkSound (w/ Caption) | 0.228 | 74.81 | 51.52 | 0.573 |
| MMAudio (w/ Caption) | 0.226 | 75.02 | 52.03 | 0.642 |
| FoleyCrafter (w/ Caption) | 0.205 | 66.52 | 44.70 | 0.573 |

上表是物理总览。关键数字是 MMAudio-Phys 带标题置信度 0.306 居首，Hunyuan-V2A 带标题 0.305 紧随，Hunyuan-V2A 不带标题 0.296 仍高于多数带标题基线，而 FoleyCrafter 带标题仅 0.205 垫底。覆盖率上 Hunyuan-V2A 不带标题达 91.50，完美对齐达 70.50，均为最高；CLAP 上 MMAudio 带标题 0.642 最高，说明语义对齐与物理方向并不完全同向。代价是所有模型的置信度绝对值都偏低，最高仅 30% 左右，报告显示当前模型难以仅从像素学到声学物理。未胜出项是 ThinkSound 与 FoleyCrafter 的物理分普遍低于 0.23，且 FoleyCrafter 是唯一带标题反而降低置信度的模型，提示其文本利用方式与其他模型不同。

分指标比较的问题是：哪些物理量相对好学，哪些始终困难，公平条件是同一加权投票与同一阈值体系，方向是各列越高越好。

| MMAudio-Phys (w/ Caption) | 0.334 | 0.368 | 0.321 | 0.395 | 0.306 |
| --- | --- | --- | --- | --- | --- |
| Hunyuan-V2A (w/ Caption) | 0.326 | 0.332 | 0.403 | 0.305 | 0.305 |
| Hunyuan-V2A (w/o Caption) | 0.258 | 0.294 | 0.383 | 0.300 | 0.296 |
| MMAudio (w/ Caption) | 0.228 | 0.259 | 0.253 | 0.223 | 0.226 |
| FoleyCrafter (w/ Caption) | 0.177 | 0.234 | 0.267 | 0.230 | 0.205 |

上表是分指标置信度。平均看频谱通量、质心与滚降相对容易，直达混响比最难，衰减率与起振时间也困难。具体看 MMAudio-Phys 带标题在质心 0.368 与滚降 0.395 上领先，Hunyuan-V2A 带标题在通量 0.403 上最高，而 DRR 列最高仅 Hunyuan-V2A 不带标题的 0.300。代价是时间包络与环境 cues 的提升需要物理感知标题，MMAudio-Phys 不带标题时 DRR 跌到 0.164。反例是 FoleyCrafter 带标题在时间调制 0.333 上反超其余列，说明单列最优不等于平均最优，总体趋势不等于每组都成立。

### 去掉标题会发生什么，语义与同步如何 trade-off？

消融要回答的是文本标题的因果贡献：同一模型、同一视频集，带标题与不带标题相比，语义分布指标与时间同步指标如何变化。公平条件是除标题外采样与评分流程不变，方向是弗雷歇距离、散度与 DeSync 越低越好，inception 与 ImageBind 越高越好。

| Method | FAD-PASST ↓ | KL-PANNS ↓ | ↓ IS ↑ | IB ↑ | DeSync ↓ |
| --- | --- | --- | --- | --- | --- |
| MMAudio-Phys (w/ Caption) | 54.73 | 1.37 | 18.49 | 34.89 | 0.405 |
| MMAudio (w/ Caption) | 65.86 | 1.68 | 17.59 | 33.03 | 0.445 |
| Hunyuan-V2A (w/ Caption) | 78.38 | 2.04 | 15.29 | 31.66 | 0.340 |
| ThinkSound (w/ Caption) | 52.44 | 1.44 | 17.98 | 29.24 | 0.455 |

上表是 VGGSound 上的标准指标。关键数字是 MMAudio-Phys 带标题在 FAD-PANN 3.97、FAD-VGG 0.61、KL-PANNS 1.37、inception 18.49、ImageBind 34.89 上多项最优，ThinkSound 带标题在 FAD-PASST 52.44 上最优；但 DeSync 最优是 Hunyuan-V2A 不带标题的 0.326，且每个模型不带标题的 DeSync 都低于带标题版本。代价很清晰：标题通常降低分布距离、提升语义分，却一致损害同步。未胜出项是 FoleyCrafter 的分布距离高达 180 以上，同步也最差，说明其绝对质量与相对 trade-off 都不占优。IS 在 FlatSounds 上提升不一致，不能单独用它证明标题有效。

时间消融在自研对齐指标上重复了上述 trade-off，条件是同一 185 片段与同一峰检测，方向是覆盖率越高越好、误差越低越好。

| Method | Hit Coverage | ↑ Timing Error ↓ |
| --- | --- | --- |
| Ground Truth | 97.12 ± 1.72 | 17.25 ± 2.64 |
| Hunyuan-V2A (w/o Caption) | 68.55 ± 3.52 | 44.34 ± 1.04 |
| Hunyuan-V2A (w/ Caption) | 65.21 ± 3.81 | 44.76 ± 1.01 |
| MMAudio-Phys (w/ Caption) | 50.69 ± 4.23 | 51.34 ± 1.09 |
| ThinkSound (w/ Caption) | 33.74 ± 3.61 | 53.66 ± 1.21 |

上表显示真值自检覆盖率 97.12，误差 17.25 毫秒，说明标注与检测流水线本身可靠；最佳模型 Hunyuan-V2A 不带标题覆盖率 68.55，误差 44.34 毫秒，带标题反而跌到 65.21 与 44.76 毫秒。其余每个模型都是不带标题覆盖更高、误差更低。代价是去掉标题后语义质量下降，论文在 FlatSounds-Single 上报告标题通常降低 FAD 与 KL 并提升 ImageBind。反例与边界是 MMAudio 系列覆盖率仅 30% 左右，远低于 Hunyuan-V2A，说明视频编码器的时间利用能力差异很大；且自研对齐指标依赖清晰冲击事件，难以直接推广到无干净峰的任意野外视频。

### 哪些结论有边界，什么还没测？

论文直接报告的是受控室内的单因素结果，支持的是文本依赖与同步 trade-off 的存在，待验证的是其成因是否完全归于视频编码器。原文用处理冲突解释：模型把文本当作生成什么的主要来源，把视频当作何时生成的次要来源，优先文本时丢失精确起振线索。这种解释与数据一致，但没有做编码器消融或注意力溯源，因此只能表述为支持而非证明。

未评测边界包括复合干预与野外泛化。基准每次只动材质、满度、环境等其一，没有同时改变力度材质几何的复合交互，也没有室外与强噪声场景。人类评估只覆盖 40 个视频的带标题版本，且以 Elo 为 oracle 算的秩相关显示自研置信度、覆盖率、完美对齐与人偏好相关达 0.9，高于 FAD-PASST 与 DeSync 的 0.7，但样本量与准则选择限制了推广。相关性不是因果，不能据此声称优化这些指标必然提升人的物理满意度。

成本与风险也未测量。原文没有报告训练算力、推理延迟、输出采样率与实时率，不能承诺物理分更高的模型更便宜或更快。总体趋势不等于每步成立，例如标题在多数模型提升物理分，但 FoleyCrafter 反例表明文本融合方式不同会导致相反结果。随着因果逼真度提升，伪造媒体风险上升，需要配套检测与负责任发布，但这部分不在本文测量范围内。

### 要复现先做什么，需要哪些条件？

复现先做三件事。第一是拿到数据与代码：项目页当前可用，可下载 185 片段、标题、时刻标注与配对表，确认 178 配对与 90 单视频的划分与预期方向文件。第二是跑通生成：用官方权重以带标题与不带标题两种条件各采 10 个种子，固定种子并记录采样器与声码器版本，保证可比。第三是跑通评分：先复现真值自检覆盖率约 97 与误差约 17 毫秒，再算模型的覆盖率与误差，最后算加权置信度。

关键超参数与信息条件要保留。峰检测用能量包络加人工核验，阈值与窗宽未完全公开，复现时应先用保守阈值加人工抽查，并在补充中说明敏感性。方向判定阈值按原文实现：增减用均值 2% 与鲁棒标准差 2% 十五取大者，单调按序列长度分段相关阈值，无变化用等价带与置信区间。语义指标的特征 backbone 要与原文一致，弗雷歇距离在 PASST、PANN、VGG 下数值量级差异很大，不能跨 backbone 比较。

区分 3 类可用性：代码开源不等于权重可下载，权重可下载不等于系统可一键运行。MMAudio-Phys 的物理感知标题依赖定制提示的 Omni-captioner，若无该标题生成流程，应先用原标题复现相对 trade-off，再补物理标题的增量。何时值得尝试本文方法：当你的 V2A 模型在 VGGSound 上分布分已很好但用户仍抱怨材质与房间不对，或你怀疑模型只读标题不看画面时，这套单因素审计能给出可定位的失败用例。

### 学完这篇应带走什么判断与下一步验证？

应带走的判断是：视频生音频的中心矛盾已从音质转向视觉物理理解。证据是物理置信度最高仅 30% 左右，而标题提升语义却一致损害同步，去掉标题反而覆盖更高误差更低。这种 trade-off 在 VGGSound 的 DeSync 与 FlatSounds 的自研对齐上同时出现，且人类偏好与自研指标秩相关高达 0.9，支持用因果方向与对齐召回补充传统分布评估。

下一步验证应补两项。第一是编码器归因：固定音频解码器，只换视频编码器或遮挡标题中的物理词，看 DRR 与衰减率是否跟随下降，以检验文本依赖的定位。第二是复合与野外扩展：在保持单因素可解释的前提下，逐步加入力度几何联合变化与弱冲击事件，检验当前阈值与门控是否仍然稳定。教学例子要标为例子：空罐音高高于满罐、楼梯间混响长于客厅是方向示意，具体赫兹与秒数随录制而变，不应记为通用数值。

常见误解需要澄清。误解一是把覆盖率高当成物理好，实际上覆盖只管敲没敲，方向正确还需置信度。误解二是把 CLAP 高当成物理对，实际上 CLAP 高只说明类别语义对，FoleyCrafter 的反例与 MMAudio 的 CLAP 最优但物理非最优都说明二者分离。误解三是把无训练当成确定性，实际上本研究未训练基线不代表输出确定，扩散采样与加权投票的随机性仍需多种子平均。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

另有 5 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Benchmarking_Single-Factor_Physical_Video-to-Audio_Generation_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
