---
title: "FoleyDesigner: Immersive Stereo Foley Generation with Precise Spatio-Temporal Alignment for Film Clips"
date: 2026-09-13
draft: false
description: "针对无声电影片段生成与画面帧级对齐的立体声拟音问题，FoleyDesigner 选择先分解为分层拟音脚本再用视觉轨迹条件扩散逐事件生成并做多智能体混音，最强证据是时空对齐表上 IoU 达 32.2 与 GCC 最低 48.79，代价是密集重叠并发事件仍会出现定位误差且依赖仿真数据与多阶段流水线。"
tags: ["数据集", "扩散模型", "空间音频信号", "视频到声音生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "76b9cb4368fd4b58625bbfffe42b4509609d2abe976211f23777d901a591e43b"
paper_digest_api_reader_plan_sha256: "26d7c5f7c01713196b0942671ad0c5efbd751978c8a0c125d9be69ba30d923ba"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "289646dcf0da89c42d95cdcf402511439ca4204916b5efab984d5f91d415485a"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9c5ace87aa1c356f0c7f069ae6331e7d8ab93d3a372c0139e1ea03d25a1d9572"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "61a0826f816ad4024596111a71e082616a34bd8cac2d6d1bdf9120203dc11b74"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "696538449801a2dbcc39c491fbce7dd83bfdb2700fb65d3b259695f14d7e1f8c"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"signal","id":"signal.spatial-audio","label":"空间音频信号"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把重叠声场拆开再对齐：FoleyDesigner 如何做时空可控的立体声拟音

> 英文题目：*FoleyDesigner: Immersive Stereo Foley Generation with Precise Spatio-Temporal Alignment for Film Clips*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf)

标签：#数据集 #扩散模型 #空间音频信号 #视频到声音生成

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Mengtian Li：机构信息未能从会议 PDF 纯文本可靠映射
- Kunyan Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Ruobing Ni：机构信息未能从会议 PDF 纯文本可靠映射
- Ying Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenwu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhifeng Xie：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为无声电影片段与剧本，输出为带方位与纵深的立体声拟音及 5.1 环绕混音，难点在于密集重叠声事件相互掩蔽、帧级时空对齐缺失以及混音声学不一致。方法链分三步推进：细粒度影片分解先由 FilmScribe 加 FoleyScriptWriter 经思维树验证输出分层拟音脚本，再由视听定位加深度估计提取轨迹并经位置感知交叉注意力注入扩散变换器生成立体声，最后由分析加规划加混响均衡动态专家的多智能体完成诊断与上混。各环节以前一步结构化产物为条件，脚本指导单事件生成，轨迹控制声像，混音修正声学。与仅用文本或图像条件的空间音频生成不同，该工作以视频追踪轨迹显式接地时空控制并保留影视混音规范。在 FilmStereo 上立体声质量 FSAD 为 0.138 且时间交并比 IoU 为 32.2，优于 SpatialSonic 等基线。结论限于 8 类拟音与合成空间分布，密集并发与大幅运动下定位仍会退化，跨真实片场录音的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，为什么必须保留时空？

输入是一段无声电影片段，有时附带电影剧本文字，目标是生成可直接用于影片的立体声拟音，进而可上混为 5.1 环绕。拟音在这里指为画面动作补录的声音效果，例如脚步、爆炸、铲土。论文强调的必须保留信息有 3 类：语义是什么声音，时间上何时起止，空间上声源在左右与远近上的连续轨迹。缺少任一类，观众都会感到口型对不上、方位飘忽或情绪断裂。

初学者容易把该任务理解为文本到音频生成，只要声音好听即可，但电影要求是帧级同步与方位跟随运动，评价必须同时看音质、空间误差与时间交叠率。后续所有模块都围绕这 3 类信息的提取、保持与修复展开，任何只提升音质而不改善对齐的改动都不算解决核心问题。

### 同输入同目标的三条路线各卡在哪里？

第一条是单声道生成路线，白话说就是根据文字提示做出一条好听的单通道声音，代表有 AudioLDM2、Tango2、Make-an-Audio2 等潜扩散方法，以及从图像或视频到音频的 CLIP-Sonic、Frieren、MMAudio 与 DiffFoley 等。它们在音质与语义上进步明显，但原文指出其缺少空间维度，且图像方法缺时间信息，难以做到帧级同步。第二条是立体声直接生成路线，白话说就是模型原生输出左右 2 通道，例如 Stable Audio、SpatialSonic、See2Sound 与 OmniAudio。原文指出它们或缺显式空间控制，或缺帧级时间对齐，或缺少后期流程接口。

第三条是单声道转立体声路线，白话说就是已有单声道再靠视觉或深度转成立体声，例如 Sep-Stereo 与 Mono to Binaural。原文指出其依赖现成单声道源，限制创作灵活性并增加工序。FoleyDesigner 的定位是端到端兼顾分解、显式时空控制与 5.1 适配，而不是在某一单点上只做音质优化。

### 论文把难点拆成哪三个可操作问题？

论文把电影级拟音的困难归纳为 3 个技术挑战。第一是密集重叠的声音事件，白话说就是同一时刻多声源在频谱与时间上互相覆盖，单次前向生成难以解耦，容易漏事件或混成一团。第二是精确的时空 grounding，白话说就是生成条件必须落到视觉的空间线索与时间动态上，粗粒度文字只能说左边或右边，无法指定连续轨迹与帧准确时刻。第三是专业声学质量，白话说就是直接生成的各事件在混响、频谱掩蔽与响度上不一致，重要拟音会被埋住，破坏沉浸感。

这 3 个问题分别对应后续 3 个阶段：用分层脚本解决重叠，用视觉轨迹条件解决对齐，用多智能体分析与混音解决声学一致性。理解这种一一对应关系，是复述方法的关键线索。

### 三阶段流水线如何沿一个片段走完？

先看整体分工再走样本。第一阶段是细粒度影片分解，白话说就是看懂画面并写出分层拟音脚本；第二阶段是时空拟音生成，白话说就是按脚本逐事件生成带方位的立体声；第 3 阶段是拟音精修与专业混音，白话说就是诊断声学问题并做混响均衡动态再上混。

以一辆车从远到近扬尘驶过的片段为例，系统先由生成器根据无声视频写出包含车辆引擎与砂石滚动等事件的初始文本，再由验证器检查视觉音频对应与完整性并迭代修正，接着结合剧本推断画面外但叙事需要的元素并经思维树搜索得到前景与背景分层脚本。然后对每个事件提取其在关键帧中的包围盒中心、平均深度与激活时间，插值到视频帧率形成位置序列，送入扩散模型生成左右通道音频。

最后对多轨做语义与频谱响度诊断，生成混音计划并执行，最后映射为 5.1 输出。

下面这张总览图把左侧人类拟音师的实际步骤与右侧对应仿真模块并排展示，适合先建立 3 阶段的输入输出对应，再进入细节。

> **看图路径：** 1. 先从顶部无声胶片条向下看左右两列的对应关系；2. 再看中间事件分解如何从一个片段变成事件 1 到事件 k 的卡片；3. 接着看中部多轨波形如何从单事件音频堆成 k 轨；4. 最后看底部多通道条与环绕示意如何表示混音输出

[![原论文 Figure 1：FoleyDesigner Overview. The left column detailing the actual steps of a human Foley designer.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/001822500d12/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/001822500d12/figure-1.png)

*论文图 1。原论文 Figure 1：“FoleyDesigner Overview. The left column detailing the actual steps of a human Foley designer.”。*

图中顶部是同一段无声胶片，左侧传统路径依次是场景分析、道具选择、录制、空间调整、轨道混合与合成，右侧对应影片分解、时空生成与精修三块。分解输出是带提示词、时间戳与位置的事件卡，生成输出是事件 1 到事件 k 的多轨立体声波形，精修输出是均衡音量混响智能体处理后的多通道条与环绕示意。该图说明的核心不是某个网络结构，而是把重叠声场拆开处理再合成为符合制片标准的音轨这一工作流选择。

### 分解阶段：验证循环与思维树各解决什么？

分解阶段包含两个智能体协作模块。FilmScribe 负责把无声视频转换为结构化文本，白话说就是先写出画面描述与声音事件清单。做法是生成器产生初始脚本，验证器核对准确性与完整性，若未通过则把反馈送回生成器迭代，直到验证通过。该循环解决的是可观察事件的漏检与错配。FoleyScriptWriter 负责融合电影剧本与结构化文本产生分层脚本，输出是事件与层标签的集合，层标签区分前景与背景。通过逐事件单独生成，避免一次性生成重叠声场时的不完整输出，同时剧本信息可补画面不可见的叙事元素。

**拟音脚本 × 思维树搜索：** 拟音脚本负责把复杂画面拆成前景与背景分层的单个声音事件说明，思维树搜索负责在多个候选脚本之间展开、打分与剪枝，二者搭配的原因是一次性生成难以处理重叠声场，组合后新增的作用是以可验证的层级文本作为后续逐事件生成的可控输入。

思维树搜索在有向图上进行，节点是候选脚本，边是精修操作。展开是从根节点按拟音设计原则生成子节点，强调声源分离、语义对齐与情绪匹配；打分是按视觉音频对应、前背景分离与影片基调一致性加权，错位或情绪冲突扣分；优化是当最高分超过阈值则停止，否则对可修正问题做针对性调整生成子节点，对根本性失败则换约束重新生成，每层保留得分前列节点，直到超过阈值、深度或分支预算。该设计把物理保真、听感清晰与叙事连贯显式写进搜索目标，为下游扩散提供可执行的分层提示。

下面这张架构图展示了从左上输入到右下工具与左下环绕输出的完整数据流，是理解分解与生成接口的关键。

> **看图路径：** 1. 先看左上无声片段与电影剧本如何进入影片分析器；2. 再看空间处理分支中定位框与深度图如何汇成位置序列；3. 接着看中上扩散区冻结与可训练模块的交替排布；4. 最后看右下工具与左下 5.1 通道条的诊断到混音闭环

[![原论文 Figure 2：FoleyDesigner Architecture.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/001822500d12/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/001822500d12/figure-2.png)

*论文图 2。原论文 Figure 2：“FoleyDesigner Architecture. Our pipeline for automated Foley generation consists of three stages, (1) Fine-Grained Film Decomposition: analyzes silent video and generates…”。*

图中左上是无声片段与电影剧本进入影片分析器，输出影片描述与声音事件清单并经监督器验证精修。中间空间处理分支对定位框做深度图估计得到位置序列，下方脚本写作者经展开打分剪枝得到多条提示。右侧生成区把文本编码与位置特征分别送入 Transformer 块，其中位置分支经傅里叶变换与位置编码器后在间隔层注入。右下音频分析智能体结合响度语义频谱混响工具输出诊断，中间混音计划智能体再调度混响音量频率 3 个专家。该图要重点看文本与位置两条条件在哪里汇合，以及诊断到计划再到参数的调用方向。

### 生成阶段：位置序列如何变成扩散模型的控制？

生成阶段的输入是文本提示与时空线索，输出是单个事件的立体声音频。时空线索提取先从视频采样关键帧，用视觉语言模型标注声源包围盒，用深度估计模型生成深度图并在框内取平均得到深度值，方位角由框水平中心与图像宽度及深度经反正切映射得到，范围在 0 到 180 度。同时用事件检测得到二进制激活向量，指示每视频帧有无该事件。关键帧位置序列经时间插值到视频帧率再乘以激活掩码，得到每帧的深度与方位角向量，非激活帧保留微弱位置信息以维持连续性。

**时空线索 × 位置感知注入：** 时空线索负责从视频帧中提取每帧的深度与方位角及事件激活，位置感知注入负责把该序列编码后经交叉注意力送入扩散 Transformer，搭配原因是纯文本无法表达连续轨迹与帧级开关，组合后新增的作用是让立体声生成显式地跟随视觉运动。

位置感知注入的具体做法是对每帧位置向量做傅里叶特征变换，用随机投影矩阵升维并拼接正余弦，再乘以激活掩码并加小系数保留弱信息，然后经 1 维卷积下采样堆叠的位置编码器压缩到与音频隐空间一致的时间分辨率，得到位置嵌入。扩散主干基于 Stable Audio Open 的扩散 Transformer，在每隔四块的标准块后插入注入块，在指定层对隐特征与层归一化后的位置嵌入做交叉注意力，使空间感知分布到网络不同深度。该安排的理由是文本编码管语义，位置嵌入管轨迹与开关，二者互补才能同时保证像什么声音与在哪里何时响。

**前景层 × 背景层：** 前景层负责承载与画面动作直接对应的拟音事件，背景层负责承载氛围与环境铺底，二者分工后由脚本写作者分别指定，搭配原因是重叠时单通道混合会掩蔽细节，组合意义是允许逐轨生成后再做均衡与动态平衡。

需要提醒的是逐事件生成不是并行混成一轨，而是每个分层事件独立合成后再进入精修，这样前景的瞬态与背景的铺底在频谱与响度上仍有机会分别处理。若把分层理解为简单的音量前后关系，会低估其为解决掩蔽与漏事件所起的解耦作用。

**混音规划器 × 专家执行器：** 混音规划器负责根据声学诊断决定每轨需要混响、均衡与动态中的哪些操作，专家执行器负责分别确定混响参数、频段增益与响度增益，搭配原因是统一模型难以同时做语义判断与工程参数估计，组合后新增的作用是把诊断转化为可执行的后期处理链。

**立体声 × 5.1 环绕上混：** 立体声负责保留左右通道的方位与时间精度，上混负责按 ITU-R BS.775 配置派生中置、环绕与低频效果通道，分工是前者做生成目标、后者做影院适配，搭配原因是直接生成多通道缺乏数据与控制，组合意义是在不重仿房间声学的前提下得到符合制片流程的输出。

### 精修阶段：诊断、计划与上混如何衔接？

精修阶段要解决声学不一致、频谱掩蔽与响度失衡。先由拟音分析智能体对每轨提取复合特征，包括来自音频大模型的语义嵌入、经视觉语言模型分析梅尔谱得到的频谱模式、计算的混响时间与测量的综合响度，把语义与客观测量结合做全面诊断。再由混音规划器做跨模态验证、轨间平衡与质量评估，为每轨输出所需操作集合，操作限于混响、均衡与动态 3 类。

然后分发给 3 个专家：混响专家看空间关系定混响参数以匹配场景，均衡专家看频谱重叠定频段调整以减少掩蔽，动态专家看相对响度定增益以防重要拟音被埋。上混到 5.1 时采用通道级策略而不仿真房间声学，左右立体声直接映射到前左与前右，中置与左右环绕由立体声加权混合派生以模拟空间位置并保持能量平衡，低频效果通道由全混信号经 120 赫兹以下低通得到。该策略保留立体声源的时空精度，同时满足影院通道配置要求。

### 数据如何构造，模型分哪两段训练？

该工作没有直接用现成影视立体声做监督，而是构造 FilmStereo 数据集。原文报告其包含 166 小时共 14784 个样本，覆盖 8 类 23 子类。构造分 4 步：先过滤多事件样本、做频谱去噪、循环补齐到 8 到 10 秒，再用 CLAP 阈值 0.35 验证；然后用 gpuRIR 仿真空间，方位取 5 个前方区域对齐人类定位敏锐度，深度分近中远三区，耳间距 16 到 18 厘米，为静态与动态声源生成房间脉冲响应并均衡物体尺寸运动类型与位置分布，再加环境混响预设；接着用 GPT-4 经思维链把声音描述与方位深度混响整合成空间丰富描述。

最后在去噪音频中检测幅度峰值并按信噪比自适应阈值定事件起止时间戳，保证与视觉的帧级同步。训练分两段：先训练立体声梅尔谱自编码器，再训练带时空控制注入的扩散 Transformer，两段均在 FilmStereo 上用学习率 3 乘 10 的负 5 次方、批量 8，在 A6000 上进行。原文未报告优化器类型、训练轮数与冻结细节，因此不能从模型名称推定哪些参数冻结或梯度路径，只能按报告的阶段与超参数复述。

下面这张构造流水线图把 3 步浓缩为可核对的操作顺序，适合在复现数据前确认过滤与仿真接口。

> **看图路径：** 1. 先看步骤一中单事件过滤与时长扩展再到 CLAP 过滤的顺序；2. 再看步骤二中随机起止位置如何与过滤音频一起进空间模拟器；3. 最后看步骤三中空间信息与原始描述如何合成空间丰富描述并与时间检测并行

[![原论文 Figure 3：FilmStereo Construction.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/001822500d12/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/001822500d12/figure-3.png)

*论文图 3。原论文 Figure 3：“FilmStereo Construction. Our four-step pipeline for creating spatially and temporally annotated audio data.”。*

图中步骤一从原始数据经单事件过滤、时长扩展与 CLAP 过滤得到过滤音频，步骤二从随机起止位置与过滤音频经空间模拟器得到空间音频，步骤三并行做两件事，一是用思维链把空间信息与原始描述合成空间丰富描述，二是对双通道波形做时间检测得到时间戳。该图表明空间监督来自受控仿真而非实录多话筒，时间监督来自幅度峰值检测，理解这一点才能正确评估泛化边界。

### 用什么数据、基线与指标测，条件是否可比？

评估分三方面。音质方面用 IS、KL 散度、FAD 与 CLAP，原文把立体声平均为单声道后再算这些指标，方向是 IS 与 CLAP 越高越好，KL 与 FAD 越低越好。时空对齐方面用 GCC-MAE 与 CRW-MAE 衡量空间定位误差，FSAD 衡量立体声质量，IoU 衡量时间精度，方向是前三者越低越好，IoU 越高越好。电影拟音方面用 ImageBind Score 衡量视听语义一致，AV-Sync 衡量同步精度，并引入 SRS 与 CCS 分别评价声音层次丰富度与听感分离质量，方向均为越高越好。基线包括 Stable Audio、SpatialSonic 与 See2Sound，其中音质表比较前两者，时空表比较三者加本方法。

人类评价分线下 5.1 与线上立体声两组，分别 12 人与 53 人参与，对 4 种方法在沉浸感、情绪对齐、时间对齐、空间对齐与音色 5 个维度做偏好选择。原文未报告统计显著性与聚合口径细节，比较时只能按报告的均值与方向解读，不能把自动指标直接当成人评结论。

### 音质与语义是否同时变好，哪项没有赢？

要回答音质是否在保持语义的同时提升，需要在相同单声道平均协议下比较可运行的生成策略，并注意指标方向不同。IS 越高越好，KL 与 FAD 越低越好，CLAP 越高越好。该表同时给出多样性、分布距离与语义对齐，适合联合判断而非只看一列。

| Method | IS ↑ | KL ↓ | FAD ↓ | CLAP ↑ |
| --- | --- | --- | --- | --- |
| Stable Audio [11] | 10.50 | 1.86 | 2.37 | 0.594 |
| SpatialSonic [32] | 13.79 | 1.37 | 1.93 | 0.672 |
| Ours | 12.36 | 1.40 | 1.88 | 0.679 |

表中本方法 CLAP 为 0.679、FAD 为 1.88，均为三者最优，原文报告相对 SpatialSonic 分别提升约 1.0% 与 2.6%，相对 Stable Audio 提升约 14.3% 与 20.7%，支持语义对齐与听感质量的判断。但 IS 本方法为 12.36，低于 SpatialSonic 的 13.79，该反例很重要，因为 IS 衡量样本多样性而非质量或语义准确，论文明确其聚焦空间连贯与文本音频对齐，输出更贴合上下文而非更发散。KL 本方法为 1.40，略高于 SpatialSonic 的 1.37，同样未胜出，说明在分布距离上并非全面领先。综合看该表支持音质与语义的联合改善，但代价是多样性指标让步，不能单凭 FAD 最低就宣称所有维度最优。

下面这组定性对比把时间对齐从数字落到可见的声谱位置，适合验证 IoU 提升是否对应事件不漏不多。

> **看图路径：** 1. 先对照顶部无声帧时间与下方真值声谱的能量位置；2. 再比较中间基线行在第二三次爆炸处是否出现错配标记；3. 接着看底部本方法行是否与真值事件框对齐；4. 最后比较右侧挖土场景中基线多余重复与本方法稀疏事件的差异

[![原论文 Figure 4：Qualitative Results. Qualitative comparison showing temporal alignment between video events and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/001822500d12/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/001822500d12/figure-4.png)

*论文图 4。原论文 Figure 4：“Qualitative Results. Qualitative comparison showing temporal alignment between video events and generated audio across two scenarios.”。*

左侧爆炸序列真值有 3 次爆炸，本方法三处均标对齐，基线只对齐第一次而后 2 次错配；右侧铲土场景基线出现与实际动作不对应的重复声，原文称为增殖伪影，而本方法生成与挖掘动作对应的铲土声。该图与 IoU 数字互相印证，但像素不能读出精确毫秒，只能做有无与疏密的定性判断，不能推广为每帧误差的定量结论。

### 空间误差与时间交叠是否同时下降？

要回答时空是否同时改善，需要在同一立体声输出上比较空间误差、立体声质量与时间交叠，方向是 GCC 与 CRW 及 FSAD 越低越好，IoU 越高越好。该表包含直接空间基线与时空联合指标，适合检验位置感知注入是否把轨迹与开关都用上了。

| Method | GCC ↓ | CRW ↓ | FSAD | ↓ IoU ↑ |
| --- | --- | --- | --- | --- |
| Stable Audio [11] | 61.17 | 51.44 | 0.343 | 24.5 |
| See2Sound [7] | 60.03 | 51.17 | 0.291 | 21.3 |
| SpatialSonic [32] | 49.20 | 36.87 | 0.163 | 27.8 |
| Ours | 48.79 | 34.23 | 0.138 | 32.2 |

表中本方法 GCC 为 48.79、CRW 为 34.23、FSAD 为 0.138、IoU 为 32.2，四项均为最优，原文报告相对 SpatialSonic 分别改善约 0.8%、7.2% 与 15.8% 的 IoU 提升，支持注入机制有效集成了空间定位与时间动态。其中 CRW 降幅大于 GCC，说明在连续轨迹跟踪上的收益更明显；FSAD 最低支持通道分离与立体声像质量；IoU 最高支持帧级同步。但需注意 Stable Audio 与 See2Sound 的误差量级远高于两者，说明无显式空间控制的策略在此任务上不具可比优势，真正的可部署比较应在 SpatialSonic 与本方法之间进行。该表未报告延迟与算力，不能据此承诺实时性改善。

### 拿掉时空线索后哪项退化最多？

要判断时空线索是否为必要条件，需要在同一 FilmStereo 与同一指标下比较完整模型与去掉该线索的基线，指标方向与上一节相同。该消融只动条件输入而不换主干，适合分离控制信号的贡献。

| Configuration | GCC ↓ | CRW ↓ | FSAD ↓ | FAD ↓ |
| --- | --- | --- | --- | --- |
| w/o STC | 62.02 | 55.89 | 0.297 | 2.14 |
| Full Model | 48.79 | 34.23 | 0.138 | 1.88 |

表中去掉时空线索时 GCC 为 62.02、CRW 为 55.89、FSAD 为 0.297、FAD 为 2.14，完整模型四项分别降到 48.79、34.23、0.138 与 1.88，原文报告 GCC 降约 21.3%、CRW 降约 38.8%、FAD 改善约 12.1%。退化最大的是 CRW，支持轨迹信息对连续空间跟踪最关键；FSAD 的大幅下降支持位置控制同时改善立体声像；FAD 的改善说明对齐变好也带来听感收益。但该消融未拆分轨迹与文本提示各自的贡献，也未报告只去时间掩码或只去空间坐标的细粒度结果，因此不能进一步归因到深度或方位角单项，只能说时空线索整体必要。

电影维度的 SRS 与 CCS 在原文正文中报告本方法分别为 8.27 与 6.2，相对提升约 39.9% 与 37.8%，但未在可选原表中给出矩阵，因证据约束此处不另制表，只能文字转述其支持分解带来丰富度、精修带来清晰度的解释，且该解释属于有限解释而非因果证明。

### 什么场景仍会错，哪些验证还没有做？

论文在结论中明确报告局限：密集重叠并发事件下生成会退化，例如同时出现的脚步、物体交互与氛围，可能导致空间定位误差，未来需更鲁棒的多目标跟踪与层级空间推理。这意味着前面的 IoU 与空间误差优势是总体趋势，不等于每组每步都成立，在高密度场景需单独验证。未验证的方面包括训练与推理开销、输出帧率与实际延迟、误判率与成本，原文未测量这些量，不能承诺效率或成本改善。

数据方面空间监督来自仿真房间脉冲响应与幅度峰值时间戳，而非影视实录多通道，泛化到真实片场混响与复杂运镜时可能有域差距。人类评价样本量有限且偏好比例不能等同于自动指标，线上立体声与线下 5.1 条件不同，结果不宜直接合并解读。相关性不等于因果，例如 SRS 高不能直接证明就是分解所致，还需控制变量的进一步消融。

### 要复现应先准备什么，先跑通哪一步？

复现先做数据与评测对齐，再做模型。数据侧按原文 4 步重建：收集 8 类音频并过滤多事件样本，做负 40 分贝谱去噪与循环补齐到 8 到 10 秒，用 CLAP 阈值 0.35 过滤；用 gpuRIR 按 5 个前方方位与近中远三区随机起止位置生成脉冲响应，耳间距取 16 到 18 厘米并加混响预设；用思维链生成空间丰富描述；用自适应阈值峰值检测生成起止时间戳。

模型侧分两段：先训立体声梅尔谱自编码器，再训带位置注入的扩散 Transformer，学习率 3 乘 10 的负 5 次方、批量 8，原文只给出 A6000 硬件，优化器、轮数与冻结策略缺项，需自己记录并补验证。推理侧需依次跑通包围盒定位、深度估计、激活检测、插值掩码、傅里叶编码与注入生成，再跑诊断到混音计划到三专家到 5.1 上混，任何跳过诊断直接混音的简化都会偏离原文条件。评测时立体声平均为单声道再算音质指标，时空指标保留双通道，方向不要混淆。

资源状态方面，本次未发现来源绑定且完成验证的资源，不得声称代码模型或数据已公开，复现应按缺项处理。

### 何时值得尝试这条路线，记住哪组数字？

当任务同时要求语义正确、帧级同步与方位跟随运动，且能接受多阶段流水线与仿真数据训练时，该路线值得尝试；若只要单声道好听或已有高质量单声道只做上混，则更轻的单声道生成或单转立体声路线可能更合适。记住 3 组可核对数字：音质表 CLAP0.679 与 FAD1.88 最优但 IS12.36 未胜出，时空表 GCC48.79、CRW34.23、FSAD0.138、IoU32.2 四项最优，消融表去掉时空线索后 CRW 从 34.23 升到 55.89 退化最大。常见误解是把立体声平均后的音质提升等同于空间能力提升，或把末步对齐推广为全程无误差，正确做法是分开看空间误差、时间交叠与人评偏好，并在密集重叠场景补做边界测试后再决定是否上片。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9eb59b731256/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf#page=5)

另有 18 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
