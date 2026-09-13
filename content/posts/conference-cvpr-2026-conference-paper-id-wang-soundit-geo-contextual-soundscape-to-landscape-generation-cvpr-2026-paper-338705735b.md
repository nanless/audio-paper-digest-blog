---
title: "SounDiT: Geo-Contextual Soundscape-to-Landscape Generation"
date: 2026-09-13
draft: false
description: "论文把问题定为地理上下文的声音景到景观生成，用声景加可选场景词生成街景级图像，以 SounDiT 三模块注入地理条件，在自建两套大数据集上以通用指标和三层地点相似度验证，代价是依赖预训练编码器与场景标注并需较多算力训练。"
tags: ["数据集", "扩散模型", "Transformer", "环境声", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "6dd2d6b29b70ece3d33b81a5a2599fc47750fb5d5a7bd48de17722dde316659a"
paper_digest_api_reader_plan_sha256: "aa47ed11000402e11e011ebdeeb1e12b6c346cbba0f6431ed28a1410ccda8ce8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f00c0dbe1746ff82b599b86dec2f149c942100d76e291c74fb13fe6b4919d7a4"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3ce09f7a6ec87c89435079d6122091a70921758208c47dea3351df0b1c561ad8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "36f73066373b03dc11ad0d5e3122e839aa47e17c0c1182aaa2c3addcd74569b4"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9c53917593bd1800aa7ffb312ce4980e2baee33051cc2d6eabafba266d461907"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.environmental","label":"环境声"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 听到鸟叫不画鸟：为环境声景生成地理一致的街景

> 英文题目：*SounDiT: Geo-Contextual Soundscape-to-Landscape Generation*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf)

标签：#数据集 #扩散模型 #Transformer #环境声 #音视频生成

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Junbo Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Haofeng Tan：机构信息未能从会议 PDF 纯文本可靠映射
- Bowen Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Albert Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Fei：机构信息未能从会议 PDF 纯文本可靠映射
- Qixing Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Bing Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengzhong Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Shan Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhao Kang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

地理上下文声景到景观生成（Geo-Contextual Soundscape-to-Landscape，GeoS2L）以10秒环境声景为输入、可选场景提示（Scene Prompt）为条件，输出地理真实的景观图像，难点是同一声景对应多类场所且传统音频到图像只生成发声物体。方法链分四步：多模态编码器将声景与场景提示映射到共享空间并提供条件向量；扩散变换器（Diffusion Transformer，DiT）潜空间去噪保留预训练主干；场景低秩内容混合器与场景自适应层归一化前后注入场景先验；混合专家（Mixture-of-Experts，MoE）声景条件以共享键值加专家查询实现细粒度声视对齐。与仅用声景的基线不同，该设计显式分离场景语义与声学细节并支持同声换景的可控生成。在SoundingSVI上SounDiT的弗雷歇特初始距离（Fréchet Inception Distance，FID）为16.839，显著优于最强基线PixArt+MHCA的34.108，且场景级地点相似度达0.753。该结论限于街景视角与所覆盖城市，远距离检索对、夜间与极端天气及强人声片段的泛化尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://gisense.github.io/SounDiT-Page/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么：为什么只听声不够？

本文输入是一段 10 秒左右的环境录音，称为声景，目标是生成一张地理上可信的景观图，常用街景照片表示。必须保留的信息包括声音中的环境线索、拍摄地点的场所类型，以及生成图是否与真值图共享同一类环境。初学者容易把该任务理解为听到鸟叫就画一只鸟，但论文要解决的是听到鸟叫要画出林荫道或城市绿地，听到车流要画出拥堵街道而非单个汽车。

论文开篇引用地理、城市规划与环境心理学的研究，说明声景长期用于指导城市设计、噪声缓解与恢复性评估，但以往多用分贝与声音类型等描述统计，不直观且缺失同地点的视觉特征。近期音频到图像模型多在通用数据集上把音频与发声物体关联，输出风格化或只画声源，缺少城乡、公园与海滩等地理区分。于是作者把任务扩展为地理上下文的声音景到景观生成，允许附带一个可选的场景词作为语义地理约束。

**环境声景 × 地理景观：** 环境声景分工是描述人在地点听到的声学环境，包含鸟叫与车流等自然和人为来源；地理景观分工是描述自然与建成特征塑造的可视环境，常用街景图像承载。二者搭配的理由是同一地点声音与视觉共享场所背景，组合意义是让生成模型从声音推断场所类型而非只画发声物体。

项目页当前可用，地址为官方页面，本文写作基于论文原文与该页面状态为可达的事实。初学者复述时应先说清三件事：输入是环境录音加可选场景词，输出是街景级景观图，评判标准是视觉逼真加地理一致，而非单纯像不像声源。

### 同输入同目标的已有路线差在哪里？

按同输入、同目标、同监督与同运行阶段对照，已有音频到图像路线可分为生成对抗网络类与扩散类。代表有 Sound2Scene、AudioToken 与 GlueGen，以及通用任意到任意生成的 CoDi。它们多依赖对象音频、人声、天气或宽泛场景类型数据，学习的是音频与视觉的一般对应，缺乏地理上下文。论文指出即使有景观与荒野类小规模配对，也存在空间覆盖与场景多样性不足的问题。

另一条路线是景观与声景各自的数据集建设。景观侧常用街景影像与遥感影像，声景侧有鸟类、城市声、情绪声景等数据集，用于生物多样性监测、噪声估计与感知分析。但以往音频到图像研究很少利用这些地理与环境洞察，导致真实应用受限。扩散 Transformer 在图像与视频生成上表现突出，但此前未被用于音频到图像，也未融入地理知识。

评价侧已有常用指标包括弗雷歇起始距离、音频图相似度与图图相似度，分别考核分布距离与跨模态语义接近。但它们不考核生成图是否与输入声景共享同一地理设定。论文因此提出地点相似度框架，覆盖元素、场景与人类感知 3 层，这 3 层在地理与规划实践中本就常用于刻画环境特征。

### 地理上下文的声音景到景观任务如何形式化？

论文把任务记为 GeoS2L。形式化为给定数据集包含声景、场景提示与景观三元组，学习一个生成器把声景与场景提示映射为合成图，使合成图既视觉逼真又在地理上下文上与真值一致，用相关函数度量输入与输出的一致性差距。景观被定义为自然与建成特征塑造的地理生态环境的图像，声景被定义为人在地点感知到的声学环境，场景词如公园、海滩、街道提供额外的生成方向。

该形式化的关键是承认单一声景欠定：同一鸟叫可出现在乡村或城市公园，仅靠音频无法唯一确定视觉布局。场景提示因此是可选但重要的控制柄，让用户在保留听觉信息的同时指定地点类型。学习依赖是先理解这种 1 对多的地理映射，再看模型如何用 2 个条件分支分别约束声音与场景，最后用地点一致性评价而非只看像素逼真度。

以下总览图把任务闭环为声景输入、模型生成、景观输出与地点评价，适合初学者建立样本级心智模型。

> **看图路径：** 1. 先看左侧九类声景标签与右侧九类景观标签的对应范围；2. 再看中间 SounDiT 与场景提示虚线输入的位置；3. 最后看底部地点相似度三项 Element Scene Perception 的闭环箭头

[![原论文 Figure 1：Geo-contextual soundscape-to-landscape (GeoS2L) generation aims to synthesize realistic landscape…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a5dad6ee82b3/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a5dad6ee82b3/figure-1.png)

*论文图 1。原论文 Figure 1：“Geo-contextual soundscape-to-landscape (GeoS2L) generation aims to synthesize realistic landscape images from environ- mental soundscapes.”。*

从像素可见，左侧列出鸟鸣、风声、水流、海浪、街头音乐、脚步、集市、高速噪声与教堂钟声 9 类声景，右侧列出草原、河岸、海岸线、商业、住宅、郊区、林间路、乡村路与高速 9 类景观，中间红色标题点明地理上下文的声音景到景观，底部绿色框给出元素、场景与感知的三项评价。这种左右对照说明任务不是声源分类，而是场所类型推断，场景提示以虚线从上方注入模型。

### SounDiT 沿一个样本走完输入到输出

沿一个样本走全程：输入为一段 10 秒声景与一个场景词如街道，输出为一张街景图。编码阶段用 ImageBind-Huge 把声景编为声景嵌入，把场景词编为场景嵌入，进入共享空间。图像侧用潜在扩散的变分自编码器把景观图编为潜变量，去噪在潜空间进行。去噪网络由多个 SounDiT 块堆叠，每个块依次经过时间步调制的自注意力、场景低秩混合、混合专家声景条件与场景自适应归一化加前馈，最后预测噪声残差并解码回图像。

4 个阶段的分工是时间步条件保持与预训练扩散 Transformer 主干兼容，场景分支提供地点先验，声音分支提供听觉证据，前馈与门控完成残差融合。推理时对声景与场景提示同时施加无分类器引导，引导尺度为 4.0，以增强条件影响。训练时声景引导标量取 1.0，场景缩放参数从 0 初始化以从恒等映射稳定起步。

以下框架图展示编码器、潜变量加噪与块内细节，是理解后续组件的前提。

> **看图路径：** 1. 先沿左侧声景与场景提示经 ImageBind 到 e_s 与 e_c 的主路径看编码分叉；2. 再看右侧块内 SLRCM 与 MoE 声景条件上下串联的位置；3. 对照底部图例区分可训练与冻结以及真值与生成符号

[![原论文 Figure 2：The SounDiT framework. SounDiT encodes soundscape and scene inputs into a shared space with…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a5dad6ee82b3/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a5dad6ee82b3/figure-2.png)

*论文图 2。原论文 Figure 2：“The SounDiT framework. SounDiT encodes soundscape and scene inputs into a shared space with pre-trained encoders, and performs denoising in latent space with DiT blocks equipped…”。*

从像素可见，左半给出声景波形与场景词经 ImageBind 得到 e_s 与 e_c，再与加噪潜变量一同进入堆叠的 SounDiT 块，底部区分可训练、冻结、真值与生成符号，说明变分自编码器与 ImageBind 冻结而块内模块可训练。右半放大单个块，可见顶部时间步经多层感知机控制缩放与平移，中间绿色 SLRCM 接受场景嵌入，下方橙色混合专家声景条件包含多查询专家、共享键值、交叉注意力与 Top-k 路由。阅读时先跟主路 Z_t 到 Z_{t-1}，再看两条条件侧路在何处相加相乘。

### 三个模块各自算什么，为何要组合？

第一个模块是场景低秩内容混合器。它接受块内词元与场景嵌入，用两个学习的低秩投影与场景映射出的对角门控构成秩为 r 的变换，再乘以样本级强度做残差相加。白话是给每个样本开一条窄而可控的场景旁路，只在低维通道上调节内容，不打乱预训练注意力结构，计算开销低。强度由正增函数、全局引导标量与可学习有界标量共同决定，训练初期的零初始化保证从不干扰起步。

第二个模块是混合专家声景条件。它对输入词元做层归一化后为每个专家生成低秩查询，键与值由声景特征 1 次性算出并跨专家共享，再做多头注意力。路由权重由音频摘要与可学习原型经温度缩放的点积加时间步投影得到，取 Top-k 软混合后经全局音频门控加回词元。白话是让不同专家专长于不同声景类型，固定键值预算下实现可扩展的条件对齐。

**场景提示 × 声景条件：** 场景提示分工是给出街道、森林、海滩等语义地理约束，解决鸟叫可出现在乡村或城市公园的歧义；声景条件分工是提供录音本身的环境线索。二者搭配是因为录音常缺失完整视觉信息，组合后模型同时保留听觉证据与用户可控的地点方向。

第三个模块是场景自适应归一化扩展。它从时间步嵌入与场景嵌入经可学习有界混合得到缩放与平移参数，调制词元后经逐点前馈与门控残差输出，用于噪声残差预测。白话是在块尾再做 1 次场景校准，强化地理一致。

**混合专家声景条件 × 场景低秩内容混合器：** 混合专家声景条件分工是以多个专家查询分别对齐不同类型声景特征，提高跨声景的适应性；场景低秩内容混合器分工是以场景嵌入控制的低秩残差通路注入场景先验且保留预训练注意力结构。二者搭配是因为需要在同一 Transformer 块内先后处理场景与声音，组合意义是分层融合视觉、场景与声景线索。

组合顺序是先场景旁路再声音专家最后场景归一化，理由是场景提供粗粒度地点框架，声音在框架内填充环境细节，尾部归一化收紧一致性。复述时不要把低秩旁路说成替换注意力，它只是残差加法。

### 数据如何构造，模型哪些参数在训练？

论文自建两套多模态地理上下文数据集。SoundingSVI 从 Aporee 平台获取带经纬度的原始声景录音，按坐标检索附近谷歌街景图作为视觉景观，切分为 10 秒片段，用人声检测模型过滤人声主导片段，用声源定位模型为每段音频挑选最相关的多候选街景，并丢弃声景与街景时间间隔过大的配对以保证时间一致与环境变化可控，再用视觉语言模型 Qwen2.5-VL-7b 为每对标注场景上下文作为场景提示。最终规模为 169221 对，覆盖 90 个国家。

SonicUrban 利用未剪辑视频保证时空一致。按城市名加关键词如城市漫步加纽约搜索并人工检查视频，切分为 10 秒音频并为每段均匀抽 10 帧，用同样的人声检测与声源定位模型过滤与选帧，再用同一视觉语言模型生成场景提示。最终为 236674 对，覆盖 131 个城市与 97 个国家。两套数据都强调地理多样与场景丰富，区别是前者声景与街景跨源按地理邻近配对，后者音画同源于视频。

**街景影像 × 遥感影像：** 街景影像分工是从地面视点记录建筑、道路与植被的布局，是本任务的景观载体；遥感影像分工是从高空视点记录地表覆盖，是 SoundingEarth 等已有配对采用的视角。二者搭配的对照意义是说明视角选择影响地理任务，组合后明确本论文选择地面视点以支撑城市设计与感知研究。

模型训练方面，变分自编码器沿用在 COCO 上预训练的潜在稳定扩散模块，声景与场景编码用在 200 万 AudioSet 片段上预训练的 ImageBind-Huge，取其精度效率平衡。SounDiT 以学习率 1e-4 训练，硬件涉及英伟达 H100、A100 与 A6000。论文未报告优化器类型、批量大小、总步数与划分比例等细节，这是复现时需要补齐的缺项，不能从模型名推定。冻结与更新按图例为编码器与解码器冻结，块内新模块可训练。

### 训练与推理成本在原文中交代了什么？

原文交代训练使用 H100、A100 与 A6000，学习率为 1e-4，声景引导标量为 1.0，推理引导尺度为 4.0。未交代总步数、批量大小、优化器、显存占用、单步时长与总机时，因此总体趋势不等于每步都成立，训练资源与推理开销需分别讨论。推理开销方面，混合专家增加查询分支与路由计算，低秩旁路增加小矩阵乘法，理论上随专家数线性增加查询侧成本，但原文未给出延迟与帧率实测，不能从参数量推定实际延迟。

部署含义是若要在城市设计工具中实时交互，需补测不同专家数与引导步数下的延迟与显存，并权衡场景一致收益与计算代价。初学者不要把训练用高算力等同于推理必须同等算力，也不要把冻结编码器等同于输出确定，扩散采样本身带随机性。

### 测什么、与谁比、条件是否一致？

评价分通用指标与地点相似度两套。通用指标包括 FID 越低越好，音频图相似度与图图相似度越高越好，分别用预训练 Inception 特征的高斯分布距离、Wav2CLIP 语义相似与基于 CLIP 的图图语义相似计算。地点相似度包括元素级、场景级与人类感知级。元素级用在 ADE20K 上预训练的 DeepLabV3 分割 150 类元素，比较真值与生成图的元素比例向量的余弦相似。场景级用在 Places365 上预训练的 ResNet50 预测 365 类场景，比较 Top-k 类别集合是否有交集。感知级用在 MIT Place Pulse 上预训练的 DenseNet121 度量安全、美丽、压抑、 lively、富裕与无聊 6 维感知，比较真值与生成图的 6 维向量差异，越低越好。

基线包括 CoDi、Sound2Scene、AudioToken 及其官方预训练与在 SD1、SD2 上训练的变体、GlueGen，以及加装多头交叉注意力声景条件的 PixArt 变体。其中 CoDi 与 AudioToken 官方预训练模型直接用，其余按公开代码与训练设置从头训练或在新数据集上训练。初学者注意预训练模型与从头训练模型的比较条件不完全一致，解读时应区分。

**地点相似度分数 × 通用图像质量指标：** 地点相似度分数分工是度量生成图与真值图在地点设定上的一致性，分元素、场景、人类感知 3 层；通用图像质量指标如 FID、音频图相似度与图图相似度分工是度量分布逼真度与跨模态语义接近度。二者搭配是因为逼真不等于地理一致，组合后同时考核好看与对地。

用户研究补充人类判断：17 名参与者做两项匹配任务，一是为给定声景选最对齐的生成图，二是为真值景观选最接近的生成图，平均匹配准确率为 86.13%，支持声景与生成图的可感知对齐，但样本量与任务设计限制了推广。

### 指标聚合与统计口径如何理解？

元素级分数是对 n 张评测图的元素比例向量余弦相似取平均，场景级是对 n 张图判断生成图 Top-k 与真值 Top-k 是否有交集后取平均，人类感知级是对 n 张图 6 维感知向量差取平均。聚合对象都是评测集图像，数值相同不是同一指标的证据，百分点与相对百分比含义不同。原文 Top-k 取 1 或 5，复述时需注明 k 值，否则场景级数字不可比。

统计方法方面，原文未报告置信区间、多次采样方差与显著性检验，用户研究仅报告平均准确率。因此支持的判断限于在给定评测集与给定预训练评价栈下 SounDiT 占优，限制是更换分割或场景分类器版本、更换采样种子或扩充评测集后结论可能变化。硬件预算与随机种子缺失是另一项缺项，复现报告应补齐。

### 主结果：逼真度与地点一致是否同时提升？

要回答的比较问题是，在相同两套数据集上，SounDiT 相对可运行基线是否同时改善分布逼真度与地点一致性。公平条件是所有方法在 SoundingSVI 与 SonicUrban 上生成景观图并用同一套通用指标加地点相似度打分，指标方向为 FID 与感知差异越低越好，其余越高越好。论文报告 SounDiT 在两套数据上 FID 从约 34 降至 16 与从约 41 降至 11，并在地点相似度上排名最高。

以下对比图按行列展示多基线与真值的视觉差异，可先看整体再对数字。

> **看图路径：** 1. 先按行确认上三行为 SoundingSVI 下三行为 SonicUrban 的分组；2. 再按列比较 SounDiT 列与 Ground Truth 列的道路与建筑结构；3. 观察 AT 等基线列出现车辆特写或色块等偏离环境的行为

[![原论文 Figure 4：Visual comparison of landscape images generated by baseline models (CoDi, Sound2Scene,…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a5dad6ee82b3/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a5dad6ee82b3/figure-4.png)

*论文图 4。原论文 Figure 4：“Visual comparison of landscape images generated by baseline models (CoDi, Sound2Scene, AudioToken(AT), GlueGen, PixArt) and our proposed SounDiT across SoundingSVI and SonicUrban.”。*

从像素可见，表格行为 6 个样本列为 8 种方法加真值，SounDiT 列的道路消失点、建筑立面与植被层次更接近最右真值列，而 AudioToken 系列出现车辆特写、圆形物体或人群色块等偏离环境的输出，GlueGen 与 PixArt 在部分行出现色调漂移。这支持论文关于地理一致的判断，但视觉比较不能替代指标，且未胜出项值得注意：CoDi 在 SoundingSVI 的音频图相似度上仍较高，说明通用语义接近与地点一致并非同一维度。

受原表选择限制，主结果大量数字不能直接搬运原宽表，此处用原文连续句整理关键规模与用户研究数字，完整基线数字以论文原表为准，不做四舍五入或单位改写。

| 数据集与验证 | 规模与覆盖 | 用户研究准确率 |
| --- | --- | --- |
| SoundingSVI | 169221 对，90 个国家 | 86.13% |
| SonicUrban | 236674 对，131 城市 97 国家 | 86.13% |

表后解释：该表只承担数据集规模与用户研究的可核对数字，不替代主结果宽表。收益是确认数据量级与地理覆盖足以支撑训练，代价是用户研究仅 17 人且为匹配任务，不能等同于开放场景的偏好或误判率测量。原文冲突需标注：正文摘要称超 169K 与 237K 对，与此处精确数一致为取整表述，不构成矛盾。部署含义是 SounDiT 在可运行基线中取得最低 FID 与最高图图相似，同时地点三项占优，但音频图相似度优势较小，说明声音语义对齐仍有提升空间。

### 拿掉场景分支与增减专家会发生什么？

消融要回答两个机制问题：场景注入的两个位置是否都必要，混合专家数量增加是否带来可扩展收益。比较条件是固定 SoundingSVI 与双专家设置，分别去掉低秩混合器、场景自适应归一化或两者同时去掉，观察 FID、音频图相似度、图图相似度与场景级地点分数的变化。指标方向同主结果。

| Experts | 2 | 4 | 6 | 8 |
| --- | --- | --- | --- | --- |
| FID↓ | 19.195 | 18.304 | 17.278 | 16.839 |
| PSSScene ↑ | 0.734 | 0.741 | 0.742 | 0.753 |

表后解释：完整双专家模型的 FID 为 19.195，场景级分数为 0.734。同时去掉两模块后 FID 升至 25.375 且场景级分数跌至 0.428，代价最大。单独去掉低秩混合器或自适应归一化分别导致不同程度下降，其中去掉后者对图图相似与场景一致的损伤更大，支持场景条件在混合专家前后两处注入都有增益的判断。未胜出项是即使完整模型在该双专家配置下仍弱于八专家配置，说明容量仍是边界。

第二个问题是专家可扩展性，固定其他设置取专家数为 2、4、6、8，观察 FID 与场景级分数。

| Variant | FID↓ | AIS↑ | IIS↑ | PSSScene ↑ |
| --- | --- | --- | --- | --- |
| Full Model | 19.195 | 0.538 | 0.750 | 0.734 |
| w/o SLRCM + S-AdaLN | 25.375 | 0.511 | 0.539 | 0.428 |
| w/o SLRCM | 20.335 | 0.534 | 0.728 | 0.704 |
| w/o S-AdaLN | 23.435 | 0.529 | 0.629 | 0.572 |

表后解释：随专家数从 2 增至 8，FID 从 19.195 降至 16.839，场景级分数从 0.734 升至 0.753，呈现单调改善，支持混合专家在固定键值预算下通过专家分化提升地理一致的解释。但论文未报告推理延迟与参数量随专家数的变化，也未测试超过 8 个专家的饱和点，因此不能承诺专家越多在部署成本上依然划算，这是待验证的边界。

### 哪些边界未被评测，不能承诺什么？

论文直接报告的局限包括声景本身欠定，需要场景词辅助控制；数据集虽大但依赖街景可达性与视频检索关键词，可能偏向城市与旅游区；评价依赖预训练分割、场景分类与感知模型，其自身误差会传导到地点分数。有限解释是场景条件改善一致性，但未测量误判率、延迟、显存与输出帧率，不能承诺这些量得到改善。

未验证推测需用可能表述：更多专家可能继续提升，但受计算预算与过拟合风险制约；场景词的粒度与标注噪声可能影响可控性，但原文未做标注误差分析。相关性不是因果，地点分数高不证明模型理解地理因果，只说明生成图与真值图在所选特征上接近。复现时若场景标注器更换，结果可能漂移，需固定标注版本。

### 复现先做什么，需要保留哪些条件？

复现先做三件事。第一固定数据构造链：10 秒切分、人声过滤、声源定位选图、时间间隔过滤与同一视觉语言模型标注场景词，记录街景检索半径与时间阈值，否则配对分布会变。第二固定编码器与解码器版本：ImageBind-Huge、COCO 预训练变分自编码器冻结，只训练 SounDiT 块内模块，学习率 1e-4，推理引导尺度 4.0，场景缩放从 0 启动。第三固定评价栈版本：ADE20K 的 DeepLabV3、Places365 的 ResNet50、Place Pulse 的 DenseNet121，以及 Wav2CLIP 与 CLIP 的版本，否则地点分数不可比。

信息条件方面，论文给出项目页可用，但未在证据中说明代码与权重是否公开，不能写已开源。硬件需准备 H100 或 A100 级别算力，小卡需调整批量与精度并报告。基线复现注意区分官方预训练直接推理与在新数据上训练两种条件，比较时分组标注，避免把预训练优势误读为架构优势。

以下场景控制示例说明同一声音在不同场景词下的可操作验证，复现时可作为定性检查。

### 何时值得尝试这种声音到街景的生成？

当任务目标是为声音做环境可视化、为城市设计提供证据性意象，或为感知研究生成对照刺激，且能提供场景词约束地点类型时，值得尝试 SounDiT 路线。它的价值在于把听觉证据与地点先验分开建模，允许同一录音生成多版地理一致的景观，便于讨论不同设计策略下的公共健康、安全与舒适影响。

以下示例展示同一声景在不同场景词下的生成分化，是理解可控性的关键。

> **看图路径：** 1. 先看第一行鸟叫声景下 Field 与 Street 生成图的植被与道路差异；2. 再看第二行交通声景下 Crosswalk 与 Residential 的路口与住宅差异；3. 对比每行 Ground Truth 确认声音相同但场景词改变布局

[![原论文 Figure 5：Scene-conditioned generation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a5dad6ee82b3/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a5dad6ee82b3/figure-5.png)

*论文图 5。原论文 Figure 5：“Scene-conditioned generation. With the same sound- scape input, SounDiT generates visually distinct yet acoustically consistent images.”。*

从像素可见，第一行鸟叫声景的真值为林荫街道，切换为田野后出现开阔草地与电线杆，停车场出现空旷硬地，街道保持窄路与行道树，鸟类图标表明听觉主题不变。第二行交通声景的真值为多车街道，斑马线强调路口标线，市中心强调两侧连续建筑，住宅区出现大树与草坪，车辆图标表明声音主题不变。这种分化支持场景词提供布局框架而声音保留环境基调的解释，但也提示边界：若场景词与声音严重冲突，模型如何权衡在原文中未系统评测，使用时需人工核查。

收束时回答复现与验证清单：先复现数据链与评价栈版本，再跑双专家消融确认场景分支增益，最后扩展到八专家并补测延迟与多次采样方差。还需补的验证包括跨城市泛化、标注噪声鲁棒性与真实规划师可用性评估，这些在原文中未充分覆盖。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d48ee8a8ab52/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf#page=4)

另有 17 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
