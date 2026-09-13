---
title: "MusicInfuser: Making Video Diffusion Listen and Dance"
date: 2026-09-13
draft: false
description: "问题是从音乐生成对拍对风的舞蹈视频，方法选择是冻结预训练文本到视频扩散模型并只在精选层注入零初始化音频交叉注意力，最强证据是舞蹈质量与视频质量上超过从零训练的音视频基线，代价是依赖有限舞蹈数据混合与单卡约 20 小时的适配训练。"
tags: ["扩散模型", "音视频", "音乐", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d25b40332555d090636d1affa448b72e5179b459ff4f55c9095f6f4d5754140c"
paper_digest_api_reader_plan_sha256: "38f88c5bcfd9f649080c1e8496668f1d1888be5494f7f7e6fcf4d34ff8267fdc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8daf0637608fe8c2b8d898087af7421bb392b17ccbb86d6197b84d007f4bed92"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4a2ef766e038ba613e8ad41f9e43d8dd44dec26008e09e394689b764705a6573"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8662f2c355161fa45fef0262bceb0dc2c873bed599aaa82ace808e97910a8210"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "018195953f9dc6d6038dc01389338408fd99fd917688d737ba86ea16b405ce41"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不从零学跳舞：用保先验适配让视频扩散模型听音乐起舞

> 英文题目：*MusicInfuser: Making Video Diffusion Listen and Dance*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.pdf)

标签：#扩散模型 #音视频 #音乐 #音视频生成

评分：**6.0/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Susung Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Ira Kemelmacher-Shlizerman：机构信息未能从会议 PDF 纯文本可靠映射
- Brian Curless：机构信息未能从会议 PDF 纯文本可靠映射
- Steven M. Seitz：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务以音乐音频与文本提示为输入生成与节拍风格同步的舞蹈视频，输出为高质量人物舞蹈画面，难点在于舞蹈视频数据稀缺且直接微调易破坏预训练视频先验的泛化与去噪能力。方法链第一步以层跳过引导的适应性准则离线评估每层正向影响，筛选出适合调制运动与结构的可适应层以保留先验并降低训练代价。第二步在所选层插入零初始化交叉注意力适配器，将Wav2Vec 2.0音乐特征投影为音频token与视频token做交叉注意力，其零输出先作恒等映射再渐进融入音频特征。第三步以低秩适配器适配时空运动分布，并以Beta-Uniform调度与荒野数据混合先聚焦低噪声细节再扩展至全分布，实现从细节到整体结构的渐进对齐，提示多样化模板则降低对文本的依赖。与从头训练音视频联合模型或经骨骼中间表示再渲染的路线不同，该机制全程复用文本到视频扩散模型的运动与物理先验，仅学习音乐到动作映射，无需动作捕捉数据。在AIST基准对比评测下，MusicInfuser的平均得分为8.96，高于Mochi的平均得分8.86。其适用边界受限于短片段训练与9秒外推，变速音乐及未见K-pop与动物主体仅定性展示，尚未验证长时客观同步量化的稳定性。训练成本为单张NVIDIA A100上约一天内完成微调，推理开销的延迟与吞吐原文未披露具体数值。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，什么不能丢？

输入是两路：一路是音乐波形，另一路是文本提示词，文本负责交代谁在跳、在哪里跳、穿什么、什么视角。目标是输出一段舞蹈视频，人物动作要随音乐的节拍与风格变化，同时不违背文本描述的场景与外观。必须保留的信息有 3 类：预训练视频模型已有的真实人体运动与物理常识，音乐的时间结构，以及文本的可控性。举例来说，如果把音乐拿掉，模型仍应能生成像样的人在动；如果把文本拿掉，动作仍应能跟着音乐走。

论文把预训练文本到视频去噪器看作先验分布，把新目标看作在该先验上增加音频条件的连续优化，训练只增加适配参数而不重写整个模型。
论文用一个动机对比说明为什么不走骨架路线。骨架方法先生成关节点再渲染成视频，参数量少但会丢失脊柱弯曲、躯干轴向旋转、手部 articulation、头发与衣服动力学等细节。直接在视频像素层面适配扩散模型，则可以保留这些细节并生成更多样的舞蹈。

下面这张图把同一音乐下的真人视频生成与骨架生成并排，教学上先看表达能力的差距，再进入方法。

> **看图路径：** 1. 先看上排真人视频帧的人体完整度与衣服头发形态；2. 再看下排骨架线条是否丢失躯干弯曲与手部细节；3. 对照两排下方同一条音频色带说明输入音乐相同但表达能力不同

[![原论文 Figure 2：Motivational example. Skeletal motion generation \[47\] produces simplified movements lacking…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c4a07b208a74/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c4a07b208a74/figure-2.png)

*论文图 2。原论文 Figure 2：“Motivational example. Skeletal motion generation [47] produces simplified movements lacking nuances such as backbone curvature, axial rotation, hand articulation, hair dynamics,…”。*

上排是音乐驱动的舞蹈视频生成，下排是音乐驱动的骨架生成，两排下方各有一条音频特征带。可见上排人物有完整的肢体、衣服褶皱与重心起伏，下排只有彩色线段表示的关节点，躯干弯曲与手部变化难以分辨。原文指出这种欠参数化会导致动作重复与编舞多样性受限。这就引出本文选择：不做从零训练的音频到动作模型，而是复用已会跳舞的视频扩散模型，只解决听音乐的问题。

### 同输入同目标的老路线与新路线差在哪里？

音乐到舞蹈的早期路线是把音乐基元映射到舞蹈单元，工具包括隐马尔可夫模型、基于运动转移图的图方法、高斯过程与各类神经网络，后来发展为变换器与扩散模型生成骨架序列，也有人做双人或多人编舞。这类工作的输入与目标与本文相同，都是音乐到舞蹈，但监督多依赖动作捕捉或 3 维重建，输出是关节点，需要后处理才能成视频，且容易出现脚步滑动与抖动。

可控生成路线强调文本等额外模态，文本的优势是零样本表达编舞想法，有工作用向量量化变分自编码器把动作离散成可与文本并排处理的令牌，也有人同时吃文本与音乐。本文与该路线的相同点是保留文本接口，不同点是文本只管风格外观，时间对齐交给音频分支，两路在扩散变换器内部汇合。

音频到视频生成是相邻领域，从预测未来帧的变分编解码框架，到时间无关向量量化加时间敏感变换器的长视频生成，再到联合音视频扩散模型实现双向条件生成。本文不做通用音视频联合生成，只做舞蹈这一垂直任务，理由是通用视频多而对齐的舞蹈视频少，从零训练音视频模型会因数据稀缺而质量次优。因此方法上选择适配而非从零训练。

### 为什么难：数据少、多解性、保先验三者如何绞在一起？

第一个难是数据稀缺与偏差。高质量且音乐对齐的舞蹈视频远少于预训练用的通用视频，专业舞蹈更是小数据 regime。如果在小数据上全量微调，模型容易过拟合到摄影棚白底与固定机位，丢失泛化与去噪能力。第二个难是舞蹈的多模态性：同一个姿势后面可以跟多个合法动作，节拍对了风格不对也不行，风格对了节拍不对也不行，需要同时评估。第三个难是成本：在有 48 层的模型上若只选三分之一层做交叉注意力，组合数超过 2 乘 10 的 12 次方，逐个微调搜索不可行。

直觉式的均匀插层或只插前几层都没有考虑各层行为，论文报告这类做法会损伤视频输出。因此问题被定义为：在不穷举的前提下，找到值得适配的层子集，用最小的改动建立音乐与动作的稳健关联，同时保住先验。

### 全景：一个样本如何从音乐加文本走到视频？

沿一个样本走一遍有助于建立依赖顺序。输入是一段约 2.5 秒训练片段对应的音乐与一句文本，例如夏威夷裙舞者在海滩跳舞。音乐先经过语音自监督编码器得到音频令牌，再经浅层多层感知机与下采样对齐到视频令牌的时间维度；文本走原模型的文本条件分支。视频侧从噪声开始，扩散变换器逐层去噪，每经过一个被选中的块就用音频令牌做 1 次交叉注意力调制，未被选中的块保持原样。

训练目标是带音乐与文本条件的去噪均方误差，推理时再加无分类器引导以增强提示词依从。输出是既符合场景描述又随音乐起伏的舞蹈帧序列。
下面这张总览图展示了文本控制与音乐同步可以共存，三行分别是海滩、日落屋顶与餐厅厨房，人物服装与背景完全不同但动作都随各自音乐变化，这正是保先验适配想要的效果。

> **看图路径：** 1. 逐行核对文本提示中的人物、服装与场景是否出现在对应帧；2. 观察每行下方音频频谱变化段与舞蹈动作切换是否同向；3. 比较三行场景差异以确认文本控制未被音乐条件覆盖

[![原论文 Figure 1：MusicInfuser adapts video diffusion models to music, making them listen and dance according to…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c4a07b208a74/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c4a07b208a74/figure-1.png)

*论文图 1。原论文 Figure 1：“MusicInfuser adapts video diffusion models to music, making them listen and dance according to the music.”。*

3 组画面每组上方是连续帧，下方是对应的音频特征带，中间夹着英文提示词。第一行夏威夷裙舞者的手臂开合与裙摆摆动，第二行屋顶舞者的重心移动，第三行厨师服舞者的上身律动，都与下方色带的能量变化同向。关键是场景、服装、视角都由文本指定，动作的时间结构由音乐指定，两路没有互相覆盖。理解了这条主路径，再拆每个组件的计算才有落点。

### 音频如何接入：零初始化交叉注意力做了什么？

先解释术语。扩散变换器块是视频去噪网络的基本层，负责在噪声水平给定时预测干净视频；交叉注意力是让视频令牌去查询音频令牌的机制，负责把听到的节奏注入动作。零初始化交叉注意力是本文的接入模块，其输出投影矩阵初始为零矩阵，因此在训练起点整个模块等同恒等映射，对原模型没有任何扰动。随着训练该矩阵逐渐远离零，音频信息才慢慢掺入。

**预训练先验 × 零初始化交叉注意力：** 预训练先验指文本到视频扩散模型已学到的人体运动、物理与风格分布，负责提供能跳舞的身体与场景生成能力；零初始化交叉注意力负责把音乐令牌以残差方式接入选定变换器层，输出投影初始为零矩阵故训练起点等同恒等映射；二者搭配的原因是直接全量微调会破坏先验而随机初始化会扰动去噪轨迹，组合意义是先保住会跳舞再慢慢学会听音乐。

具体计算是视频令牌作查询，音频令牌作键与值，先做缩放点积注意力再经零初始化的输出投影与残差相加。并行地，注意力权重本身用高秩低秩适配器调整，论文用 64 秩而非图像模型常用的 8 到 16 秩，理由是视频时序变换更复杂，建模人体运动需要更大容量。两者都是从零增量起步，一个管新模态从哪里进来，一个管原有权重如何让路。
层插在哪里的选择策略如下图所示，教学上把它看作 4 种布线方案的对比。

> **看图路径：** 1. 先看最左侧模块中音频令牌与视频令牌进入交叉注意力的箭头；2. 再看零初始化输出投影与残差加法构成的恒等起点；3. 比较右侧三种插层方式中可训练块的位置与密度差异

[![原论文 Figure 5：Zero-initialized cross-attention (ZICA) block.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c4a07b208a74/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c4a07b208a74/figure-5.png)

*论文图 5。原论文 Figure 5：“Zero-initialized cross-attention (ZICA) block.”。*

最左是单个零初始化交叉注意力块的结构，可见视频令牌、音频令牌、投影与零矩阵输出的汇合方式。右 3 组分别是均匀分布插层、集中插前几层、按预计算适应性插层，最后一组中蓝色深浅表示层适应性高低。论文的消融显示，按适应性选层明显优于均匀或只选前中后段，甚至优于全层都插，这支持了选层不是越密越好的判断。

**层适应性 × 引导式构造影响：** 层适应性指某一层是否适合承担音乐到动作的调制，负责回答把音频模块插在哪里；引导式构造影响指用跳过该层与不跳过该层的去噪器之差构造引导方向并看生成质量的提升，负责在不微调每种组合的前提下预估该层的正向贡献；搭配原因是穷举 48 层中选 16 层的组合数过大，组合意义是用推理时引导效果代替训练后效果来排序选层。

适应性的预计算方法是层跳过引导：用完整层去噪器减去跳过某一层的去噪器得到隐式能量梯度，再用该梯度做引导采样，看视频质量指标的提升。提升大的层被认为与结构和感知质量更相关，适合做调制点。这种方法只用预训练模型做推理，不需要为每种组合训练 1 次，也避免了删层测性能带来的分布外问题。

### 噪声课程与提示词多样化如何防止过拟合？

扩散训练通常在均匀噪声分布上采样，但适配训练希望先保住去噪能力。论文提出 Beta 均匀调度：训练噪声分布从参数为 1 和贝塔的 Beta 分布开始，贝塔大于 1 时概率集中在小噪声附近，对应先学高频细节；随着贝塔指数衰减到 1，分布逐渐展平为均匀分布，再学大尺度结构。初始贝塔设为 3，随训练衰向 1。直观理解是先让模型在小扰动下学会跟音乐微调，再放开到大噪声下重排大动作，这样一般人体物理先验不易被冲掉。

文本侧用模板与多样化防止模型偷懒只看文本。受约束数据用填槽模板，槽位包括舞种、场景与动作质量；野外数据没有规范标注，用视频对话模型生成详细描述。再随机把一小部分详细描述替换为简单基础提示，迫使适配器在文本信息不足时仍要从音乐找依据。论文报告了替换比例的权衡：替换多了音乐性强但风格捕获弱，替换少了则反过来，具体数值见提示词对齐表。

野外数据本身也起正则作用，下节展开。

### 训练与推理按原文到底做了什么？

训练 frozen 与更新的划分按原文是：基座用公开的文本到视频模型，音频编码器用预训练语音表示模型，新增的是音频投影、零初始化交叉注意力与低秩适配器，优化的是适配参数。监督来源是视频、文本、音频三元组的去噪均方误差，噪声采样服从上述 Beta 均匀调度。推理时用无分类器引导，引导尺度设为 6.0，音频编码与投影方式与训练一致。原文未报告梯度裁剪、优化器种类与权重衰减等细节，这些缺项在复现时需要自行记录，不从模型名称推定。

**Beta-Uniform 调度 × 低秩适配器：** Beta-Uniform 调度负责训练时噪声采样分布随时间从集中小噪声的 Beta 分布退火到均匀分布，作用是先学细节再学大结构；低秩适配器负责以低秩增量调整注意力权重以适应舞蹈域与新模态，作用是参数高效地改时序变换；搭配原因是两者都从小扰动起步，组合意义是在保留去噪能力的同时逐步建立音乐与动作关联。

**受约束舞蹈数据 × 野外舞蹈数据：** 受约束舞蹈数据指摄影棚固定机位与标注规范的 AIST 片段，负责提供干净的音乐与动作对齐监督；野外舞蹈数据指从视频网站收集的多机位多灯光多风格片段，负责提供多样性正则；搭配原因是只用前者会过拟合到白底摄影棚，组合意义是以 1 比 1 混合在保持对拍的同时保住开放场景泛化。

成本与规模按原文交代：除个别大容量实验外，训练在单张英伟达 A100 上跑 4000 步，学习率 1e-4，约 20 小时完成。数据是 AIST 的 2378 个片段与野外 15799 个片段按 1 比 1 混合，AIST 本身有 13940 个视频、60 首曲子、10 种舞种、35 名舞者，训练测试按音乐曲目不重叠划分，训练随机裁约 2.5 秒片段。野外片段来自 4 个播放列表的超过 3700 个视频，覆盖多机位多灯光。推理可生成比训练长数倍的视频，最长展示到 9 秒，也能处理训练未见的音乐类型。下表把这些可运行的配置集中呈现，方便复现时逐项核对。

| 配置项 | 硬件与步数 | 优化与秩 | 数据规模 | 划分与采样 | 推理设置 |
| --- | --- | --- | --- | --- | --- |
| 原文值 | 单卡 A100，4000 步，约 20 小时 | 学习率 1e-4，低秩秩 64，贝塔初值 3 衰向 1 | AIST 含 13940 视频 60 曲 10 舞种 35 人，裁出 2378 片段，野外 15799 片段 | 音乐曲目不重叠划分，训练裁约 2.5 秒，混合比 1 比 1 | 基座为 Mochi，引导尺度 6.0，音频经 Wav2Vec2 加投影 |

表前已提出问题：在单卡 1 天内完成适配需要哪些条件配合，公平比较时基座与音频编码是否一致是关键，指标方向是成本越低、覆盖越广越好。

表后需要解释：该配置的收益是小步数低秩即可起舞，代价是未报告优化器与正则细节，且 4000 步是否对所有舞种都收敛仍待验证，不能把单次 20 小时推广为所有设置的保证。

### 用什么数据、和谁比、怎么打分？

数据协议是 AIST 测试集加野外泛化。AIST 按曲目不重叠划分，保证测试音乐未见过；野外用合成的新风格音乐与更长视频考验泛化。基线包括 3 类可运行策略：音视频联合生成的 MM 扩散模型，纯文本到视频的基座 Mochi，以及真值 AIST 数据作为上限参考。比较时对有文本输入的模型用预设提示词基准取平均，保证文本条件一致。

**舞蹈质量 × 视频质量：** 舞蹈质量指视频语言模型针对风格对齐、节拍对齐、身体表现、动作真实感与编舞复杂度的打分，负责回答跳得对不对；视频质量指成像质量、美学质量与整体一致性的打分，负责回答看起来好不好；搭配原因是只看好看会漏掉错拍，只看对拍会漏掉画质崩坏，组合意义是把音乐视频语言三者对齐拆成可分别核对的两组指标。

自动评估用两个能同时处理视频与音频的视频大语言模型提问打分，分为舞蹈质量、视频质量、提示词对齐 3 组。舞蹈质量含风格对齐、节拍对齐、身体表现、动作真实感、编舞复杂度；视频质量含成像质量、美学质量、整体一致性；提示词对齐含风格捕获、创造性解释、满意度。原文还做人工评估看与自动分的相关性。

需要明确的是自动分不是人评，数值相同也不代表同一指标，百分点与相对百分比含义不同，下节只按原表头解读升降方向。

| 评估组 | 覆盖维度 | 输入要求 | 基线集合 | 聚合方式 | 方向 |
| --- | --- | --- | --- | --- | --- |
| 原文值 | 舞蹈 5 项，视频 3 项，提示词 3 项 | 需同时看视频听音频读文本 | 真值，MM 扩散，Mochi，本方法 | 预设提示词基准取平均 | 分数越高越好，人工偏好比例越高越好 |

表前的问题是：测什么、与谁比、条件是否一致，公平条件是同一测试音乐与同一提示词基准，指标方向是分数越高越好。

表后的解释是：该设计的收益是把对拍与好看分开，避免以偏概全，代价是视频大语言模型打分本身有偏好与方差，且未报告误判率与统计显著性，不能把自动高分直接等同于人人满意。

### 主结果：舞蹈对拍与画面质量是否同时变好？

先看舞蹈质量的主表，问题是给定相同音乐与提示词，谁跳得更对更有变化，公平条件是同一 AIST 测试分布与同一提示词基准，指标方向是分数越高越好。

| 模型 | 风格对齐 | 节拍对齐 | 身体表现 | 动作真实感 | 编舞复杂度 | 舞蹈平均 |
| --- | --- | --- | --- | --- | --- | --- |
| AIST 真值 | 7.46 | 8.95 | 7.53 | 8.67 | 7.45 | 8.01 |
| MM 扩散 | 7.16 | 8.56 | 5.52 | 7.05 | 7.53 | 7.16 |
| Mochi 基座 | 7.20 | 8.34 | 7.47 | 7.68 | 7.82 | 7.70 |
| 本方法 | 7.56 | 8.89 | 7.16 | 8.24 | 7.90 | 7.95 |

表后解释主要收益与代价。本方法在风格对齐、节拍对齐、动作真实感与编舞复杂度上超过两个可运行基线，舞蹈平均达 7.95 接近真值 8.01，这是核心证据。

但身体表现 7.16 低于 Mochi 的 7.47 与真值的 7.53，说明音乐注入可能轻微扰动肢体结构，这是具体代价而非全面胜利。真值在节拍与动作真实感上仍最高，验证了指标能给真值更高分，支持了评估的可靠性。未胜出项必须保留，不能只讲平均。
视频质量与提示词对齐的趋势类似：本方法在成像质量与整体一致性上优于 MM 扩散与 Mochi，创造性解释与总体满意度也高于基座 Mochi，但美学质量与风格捕获并非每项第一。

变速实验提供了机制证据：把同一音乐加速 1.25 倍或减速 0.75 倍，动作 pace 与动态随之变化且风格大体保持，说明模型学到的是 tempo 到动态的映射而非背谱。泛化上，用训练未见的流行风合成音乐与数倍长度视频仍能生成对应舞蹈，动物主体与多人齐舞也成立。下面这张多人图展示了文本控制人数的能力。

> **看图路径：** 1. 数出上中下三段的人数从双人到多人再到群体的变化；2. 检查同一时间步多人动作是否保持齐舞而非各跳各的；3. 对照每段下方音频条确认不同人数下仍有音乐条件

[![原论文 Figure 4：We can generate group dance videos aligned with music, based on the text.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c4a07b208a74/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c4a07b208a74/figure-4.png)

*论文图 4。原论文 Figure 4：“We can generate group dance videos aligned with music, based on the text.”。*

从上到下分别是男女双人、多人、群体 3 段，每段下方都有音频条。上段 2 人动作镜像配合，中段前景与背景多人保持齐舞，下段大群体仍能维持队形与节拍。这支持了文本管人数、音乐管时间的分工，但也划出边界：群舞整齐度在远景小人脸上有模糊风险，原文未量化人数上限，这是未评测边界。

### 拿掉哪一块会怎样：选层、调度与初始化的反证？

消融的问题是：同样插同样数量的音频块，插哪里、怎么初始化、噪声课程要不要，公平条件是基座、数据混合与训练步数一致，指标方向仍是分数越高越好。

| 策略 | 风格对齐 | 节拍对齐 | 身体表现 | 舞蹈平均 | 总平均 |
| --- | --- | --- | --- | --- | --- |
| 本方法按适应性选层 | 8.95 | 9.54 | 10.00 | 8.22 | 8.14 |
| 全层都插 | 8.37 | 9.02 | 9.55 | 7.86 | 7.80 |
| 均匀分布插层 | 8.15 | 9.01 | 9.95 | 7.76 | 7.62 |
| 只插前几层 | 8.67 | 9.44 | 9.90 | 8.16 | 7.99 |

表后解释收益与反例。按适应性选层在总平均 8.14 上超过全层 7.80、均匀 7.62 与只插前层 7.99，说明选对位置比堆数量重要，全层反而在小数据下损伤去噪能力。未胜出项是中间层与后层策略在个别维度不差，但总体仍低。

其他反证包括：直接把音频特征加到对应帧的特征相加基线多数指标更差，证实交叉注意力的必要性；不做零初始化会显著掉视频质量；去掉 Beta 均匀调度会掉身体表现与动作真实感；去掉野外数据会掉提示词满意度与泛化。这些都是论文实际报告的对照，不做拿掉后必然如何的额外推测。

### 还有哪些没测、没保证、不能推广？

首先是资源声明的边界。原文未绑定且完成超文本传输安全协议状态验证的资源，因此不得声称代码模型或数据已公开，复现只能依据论文文字与超参数。其次是评估边界：自动分来自视频大语言模型提问，未报告打分方差、重复次数与显著性，也未测量推理延迟、显存峰值与输出帧率，不能承诺这些量得到改善。人工评估显示在音乐舞蹈对齐与动作真实感上偏好本方法，但它是偏好比例而非误差率，不能当作检出率。

再次是泛化边界：动物跳舞与长视频是定性展示，未给出动物与群舞的定量对拍分数，不能把末步结果推广到全程。最后是数据边界：野外数据来自特定播放列表，风格分布未公开，1 比 1 混合是否对所有舞种最优待验证。相关性不等于因果，变速后动作变快支持了 tempo 敏感，但不能证明模型理解了乐理结构。

### 要复现，先做什么，需要补哪项验证？

复现的第一步是准备基座与音频编码：按原文用同一文本到视频基座与同一语音自监督编码器，音频经浅层投影与下采样对齐时间维，文本走原分支。第二步是实现零初始化交叉注意力与 64 秩低秩适配器，只在按适应性选出的层插入，前向起点验证为恒等映射。第三步是实现 Beta 均匀调度，初始贝塔 3 指数衰减到 1，并按 1 比 1 混合受约束与野外数据，训练 4000 步学习率 1e-4，推理引导尺度 6.0。

第四步是评估：固定提示词基准与测试音乐，分别跑舞蹈质量、视频质量与提示词对齐 3 组提问，并保留真值作为上限。
还需补的验证有三项：一是报告多次种子的方差与显著性，因为同音乐同文本换种子应产生不同编舞，单次高分可能是抽样波动；二是测量单卡峰值显存、每秒帧数与长视频的显存增长，区分训练资源与推理开销；三是补身体表现的细粒度检查，因为主表中该项低于基座，需要看是手部还是躯干的问题。

何时值得尝试：如果已有可跳舞的视频扩散模型且只有少量对齐舞蹈数据，优先试这种保先验的精选层适配；如果目标是通用音视频生成或需要精确关节控制，则应考虑其他路线。

### 收束：记住什么，忘掉什么？

记住三句话：会跳舞的先验不用重学，用零初始化小步接入音乐；插哪里比插多少重要，用引导提升预估适应性；先小噪声后大噪声的课程与野外数据混合是保泛化的关键。忘掉的是营销式判断：没有全胜，只有在风格节拍与画面上的总体占优，以及身体表现上的轻微代价。回到开场：输入是音乐加文本，输出是对拍对风的视频，不能丢的是先验、时间结构与文本可控。下 1 次读新论文时，仍按同样顺序核对：输入目标、组件分工、训练监督、实验条件、主结果与反证，再谈是否值得跟进。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/81d554ca9d08/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/81d554ca9d08/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/81d554ca9d08/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/81d554ca9d08/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/81d554ca9d08/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/81d554ca9d08/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.pdf#page=5)

另有 9 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
