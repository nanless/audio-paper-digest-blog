---
title: "SARC Studio Report"
date: 2026-09-14
draft: false
description: "这篇工作室报告梳理 SARC 二十年以实践为基础的声音与音乐研究设施与方法，最强证据是声学实验室 84 只扬声器与多空间系统等可核对配置，代价是它不提供受控实验对比与可复用的训练式结论。"
tags: ["信号处理", "音视频", "音乐", "空间音频信号", "空间音频渲染"]
categories: ["icmc-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:icmc:2026:conference-paper-id:paper-533"
paper_digest_source_kind: conference
paper_digest_conference_id: "icmc-2026"
paper_digest_conference_record_url: "https://icmc2026.ligeti-zentrum.de/proceedings/"
paper_digest_conference_pdf_url: "https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a51d7d9c953261575203284b4993c1f46112578661ef675b89dc83f756bed262"
paper_digest_api_reader_plan_sha256: "9a98dad33c488378c559682531b7307aa7641491dc3182e05cfa7c3a03923d78"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5e25b3db9ee0973bf1a06d72067d08e2c4e9b7e19975463dbb1f71ecabf354f5"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4b96e91fee8e07af778e45e228a4ed953c2b9af5c5677d034b8fdfadba6f97e3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b73d45d1936cf5fdc37c8d17ff86e4e619b5acd643f6a32a353065bc33afd63b"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8dbc7e4fd670c4e92e751b953a7c41de29c9db2456f20067f5c5d647a594c0f0"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"signal","id":"signal.spatial-audio","label":"空间音频信号"},{"facet":"task","id":"task.spatial-rendering","label":"空间音频渲染"}]
paper_digest_primary_task: "空间音频渲染"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 从一间工作室到松散结构：SARC 二十年如何用空间与制作组织声音研究

> 英文题目：*SARC Studio Report*

> 会议身份：`conference:icmc:2026:conference-paper-id:paper-533`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

标签：#信号处理 #音视频 #音乐 #空间音频信号 #空间音频渲染

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Pedro Rebelo：机构信息未能从会议 PDF 纯文本可靠映射
- Craig Jackson：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本报告的输入是从现场采录、多通道扩声到沉浸式回放的创作研究需求，输出是可支撑作曲、表演、新乐器研究与公开展示的声学空间与工具链，实际难点在于同一建筑内兼顾包围感沉浸、高精度正面定位与灵活布展策展三种相互冲突的重放要求。方法链第一步由Sonic Lab构建可切换重放底座，以多层环绕、五阶Ambisonics与杜比全景声提供漫射声像，以可升降前墙阵列提供波场合成的近距离定位。第二步承接该底座的空间验证需求，由Maker Space承担金属、木工与电路原型加工，由毗邻Interaction Lab承担概念装置的搭建与测试，使新接口在进入大空间前完成迭代。第三步将经测试的作品转入SARC Gallery这一小尺度探针，以四面投影与十六通道顶棚声场检验亲密尺度下的视听交互，再由SARC Mobile把多通道采录与回放带出固定建筑，形成馆内验证向户外与社区场景的外溢。相对追求单一最优制式的已有工作室报告，其关键机制差异是将环绕声场、高阶Ambisonics、波场合成与IKO紧凑球形阵列并置为互补聆听机制，分别对应包围、精确前向定位与物-like内爆式发声，其实质意义是让创作按题材选择空间语法而非削足适履。在Sonic Lab空间重放设置下，环绕子系统的数量指标为48只，高于波场合成阵列的数量指标42只。该结论的适用边界受限于该中心特定建筑声学、策展语境与听众群体，向其他场地与人群的外推尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://www.qub.ac.uk/research-centres/sarc/research/SARCx20/> — 链接不可用（HTTP 403）
- 第三方资源：<https://improvfest.ca/home/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇报告要回答什么：输入是什么，输出是什么？

输入是贝尔法斯特女王大学声音与音乐研究中心二十年的设施、人员与项目积累，目标是向国际计算机音乐会议的读者交代这个中心如何工作。输出不是 1 篇提出新算法的论文，而是 1 篇工作室报告，讲清楚空间、设备、研究方向与公共活动的组织方式。研究生读它时要先调整预期：这里没有待优化的损失函数，没有训练集与测试集划分，没有基线对比。它要保留的关键信息是可核对的设施配置、可追溯的历史节点与可复述的研究组织逻辑。

例如声学实验室装了多少扬声器、分为几层、支持哪几种空间系统，制作空间有哪些加工设备，画廊是多大、装了什么投影与声音系统，流动录音车如何工作，博士群体与年度音乐节如何支撑研究。这些信息决定了你以后若想复现类似研究环境，需要准备什么房间、什么设备链路与什么协作制度。报告开篇即说明中心成立于 2004 年前后，专用大楼随后落成，首篇工作室报告发表于 2005 年左右，本篇是对二十年轨迹的总结与反思。

理解这一点后，后续所有设施细节都不应被当作产品广告，而应被当作研究条件的说明书。读完本节，你应能用一句话复述：这是一份以设施与实践为证据的研究环境说明，而非 1 次受控实验的胜负宣告。

### 把 SARC 放在哪条路线上：工作室传统与跨学科转向

声音与音乐领域的工作室报告有一条固定路线：介绍房间声学、扬声器布局、调音台与工作流程，证明本单位具备开展创作与研究的物质条件。SARC 的早期报告也属于这条路线，重点是专用大楼与声学实验室的建设。二十年后的变化是，报告明确提出工作室作为共享创作空间仍然重要，但中心已变成更松散的结构，以便回应跨学科挑战与机会。

这意味着相关工作不应只对照其他高校的沉浸声实验室，而应同时对照乐器设计、交互设计、声音研究与社会参与式艺术这几条线。原文提到的研究卓越框架评估肯定了音乐领域的实践研究输出，其中一部分体现了创造性、创新性严谨性，跨学科研究也被点名为优势。这为理解 SARC 的定位提供了外部参照：它的贡献不靠单一技术指标领先，而靠把作曲、表演、装置、乐器制作与空间音频放在同一机构里互相供料。

研究生常见的误解是把设施规模直接等同于研究质量，本报告的写法恰好提醒你要分开看：设施是条件，作品、博士培养、合作网络与公共活动才是条件被使用后的痕迹。后续章节将按设施全景、组件分工、人员与活动组织来展开，每一步都回到原文给出的具体配置与数字。

### 它要解决的组织难题是什么？

报告隐含的问题是：如何让声音与音乐研究既保持艺术实践的开放性，又能沉淀为可传承的机构知识。纯技术路线的做法是建一个参数固定的实验室，反复跑同一实验；纯艺术路线的做法是做 1 次性作品，不保留可复用的方法。SARC 的选择是中间道路：用多个互补的空间承担不同的研究任务，用档案与定期活动把分散的个人项目连成可观察的趋势。

举例来说，一个样本可以是 1 位博士生的空间作品：输入是在特定场地采集的多通道田野录音，表示是沉浸声工程里的话筒阵列信号与空间元数据，组件是声学实验室的环绕声或波场合成系统，目标是在可控回放中检验空间感知或作曲想法，输出是演出、装置与档案条目。这个样本走完后，机构层面的问题才显现：若没有统一档案，二十年三百多条跨媒介记录就会散失；若没有音乐节与研讨会，个人作品难以形成对话。

因此本报告的问题不是解码某段音频，而是设计一种能容纳作曲、乐器制作、空间音频、社区项目的组织形态，并用二十年档案证明它确实运转过。理解这个问题，才能明白为什么报告花大量篇幅写房间尺寸、扬声器型号与加工设备：它们是让上述样本得以完整走通的物质前提。

### 方法全景：四个空间加一辆车如何分工？

SARC 的方法全景可以概括为 4 个固定空间加一个移动单元。声学实验室是核心大空间，承担高阶环绕声、全景声、点声源扩散、波场合成与特定扬声器系统的研究与演出；制作空间承担乐器与交互原型的精密加工；交互实验室承担概念搭建与测试；将于 2026 年开放的画廊承担亲密尺度的沉浸视听与实物交互展示。

流动单元承担多通道视听采集、直播与户外演出。这种安排的理由在原文中有明确交代：不同空间系统探索各自独特的空间可能性，弥散沉浸、精确前方定位与物体般的内外翻转听感各由不同系统承担；制作空间的扩展则是为了支撑虚拟声学乐器语境下的乐器与交互设计；画廊的隐藏式设备是为了在亲密空间里不干扰艺术体验；流动单元则是为了把沉浸音频与直播技术带到 otherwise 无法到达的社群。

研究生复述时要抓住动作链：采集可以在车上或田野完成，回放与检验可以在实验室或画廊完成，原型可以在车间完成，讨论与展示可以在音乐节与研讨会完成。档案则把每次走通的痕迹编号保存，形成可回看的趋势。下文将逐个拆解每个空间的计算与信号链条，避免把全景停留在名词罗列。

### 声学实验室：84 只扬声器如何组织成三种空间系统？

声学实验室是全文数字最密集的部分，也是最需要逐项核对的部分。报告说该实验室在 4 个高度层共安装 84 只扬声器，可配置出 3 种空间系统：包围听众的环绕声系统、高度可调的前方阵列，以及特定型号的球形扬声器阵列。环绕声一侧强调弥散的沉浸声像，支持 5 阶环绕声、全景声与点声源扩散；前方阵列强调精确的前方定位与距离感，用于波场合成；球形阵列则被描述为具有物体般的内外翻转特性。

信号管理依托网络音频与集中式数字信号处理，调音台位于实验室后部，并设多个输入输出机柜位置以支持现场处理与录音。控制室另有调音台与多机位视频混合，支持独立的录音与直播混音。主机运行音频工作站、环绕声与波场合成软件，配合多通道音频接口。实验室还装有一台带电磁共振钢琴扩展的自动钢琴。

下表提出的问题是：在同一房间里，不同高度与型号的扬声器各自承担什么角色？公平条件是它们共享同一房间网格地板与同一套网络音频基础设施，指标方向不是比谁响，而是看覆盖方式是否互补。表中数字保留原文写法，不做换算与四舍五入。

| 位置与层级 | 扬声器型号与原文数量 | 配置说明 | 在 3 种系统中的分工 | 可复述的核对点 |
| --- | --- | --- | --- | --- |
| 高层 | 8 x Meyer UPM-1P | 杜比全景声配置，前后两排，悬挂于可调顶棚 | 提供顶部高度信息 | 数量与悬挂方式按原文核对 |
| 中高层 | 15 x Meyer UPJ-1P and 3 x Meyer and UMS-1P subwoofers | 杜比全景声配置，悬于技术廊约 4 米高度 | 中层包围与低频补充 | 低音数量与悬挂高度按原文核对 |
| 地面层 | 4 x Genelec 1038B and 4 x Genelec 1037B | 8 通道配置，另有 1 只球形扬声器 | 水平环绕与特殊点声源 | 8 通道布局与球形扬声器单独计数 |
| 前方舞台区 | 42 Genelec 4410 | 可收放桁架上，舞台前方 | 波场合成精确前方定位 | 阵列数量与桁架位置按原文核对 |
| 低层地下 | 8 x Meyer UPM-1P，2 x Meyer X-800 subwoofer | 网格地板下 4 米 | 低层包围与低频延伸 | 深度与低音数量按原文核对 |

表后需要解释主要收益与具体代价。收益是研究者可以在同一房间切换弥散包覆与精确重建两种聆听范式，无需更换场地，这对空间作曲与感知实验是实质便利。代价是系统复杂度与维护成本显著上升，不同系统的校准、软件链与操作知识无法互相替代。未胜出项也要点明：原文没有报告哪种系统在何种听音任务上客观更优，也没有给出听音实验的正确率或偏好分数，因此不能把扬声器数量多解读为效果好。复现时应先确认房间层高与承重是否允许 4 层悬挂，再确认网络音频与集中处理是否到位，否则即使买齐同型号扬声器也无法重建同等调度能力。

**高阶环绕声 × 波场合成：** 高阶环绕声负责用包围听众的多只扬声器营造弥散的沉浸声像，分工是整体包覆感；波场合成负责用前方密集阵列精确重建声源位置与距离感，分工是前方定位；两者搭配的理由是单一系统难以同时兼顾包覆与精确定位，组合意义是在同一声学实验室里让研究者按创作与感知问题选用不同的空间 affordance。

**虚拟声学乐器 × 乐器与交互设计：** 虚拟声学乐器负责用物理建模等方法探索声音生成的计算模型，分工是声音机理；乐器与交互设计负责用制作与接口把模型变成可演奏可触摸的物件，分工是演奏交互；两者搭配的理由是模型若无可演奏接口难以进入实践检验，组合意义是制作空间与交互实验室把建模研究与艺术输出连起来。

**即兴演奏 × 特定场域装置：** 即兴演奏负责提供以人为中心、不可完全预写的音乐生成过程，分工是实时创造；特定场域装置负责把声音与空间、环境议题绑定，分工是场地回应；两者搭配的理由是 SARC 把研究方法扎根于实践过程而非仅纸面分析，组合意义是作品本身成为研究输出与参与式过程的记录。

**多通道录音车 × 沉浸式回放：** 多通道录音车负责在不同场地采集高通道数声音与影像，分工是移动采集；沉浸式回放负责在实验室或画廊里重建声场供检验与传播，分工是受控再现；两者搭配的理由是田野录音若无可对照的回放环境难以做研究测试，组合意义是 SARC Mobile 把采集、测试、传播连成闭环。

**参与式艺术项目 × 实践为基础的研究：** 参与式艺术项目负责让特定社群作为参与者与受益者进入创作，分工是社会连接；实践为基础的研究负责把创作过程与作品认定为知识生产，分工是学术认定；两者搭配的理由是影响力需要可追溯的研究过程而非 1 次性演出，组合意义是共同设计与作品本身同时承担社会介入与研究证据。

### 画廊与制作空间：小房间与车间解决什么问题？

如果说声学实验室解决大尺度沉浸声的检验问题，画廊与制作空间解决的是亲密尺度与动手制作的问题。画廊被描述为 4.8 米见方的亲密空间，配备四面视频投影与环绕声，设备刻意隐藏，目的是支持沉浸视听与实物交互的艺术实践，同时承载全年策展、驻留与本地画廊合作。制作空间则配备数控机床、3 维打印机、激光切割、焊接与电路板制作以及木工房，附近的交互实验室供搭建与测试概念装置。

这种分工的动作逻辑是：想法先在车间变成可触摸原型，再到交互实验室验证交互流程，最后到画廊或声学实验室做公开展示与研究记录。对于刚入门的研究生，要注意白话解释：数控机床与 3 维打印不是装饰，而是把虚拟声学乐器从软件模型变成可演奏物件的关键步骤；隐藏式布线不是美学偏好，而是避免设备视觉干扰影响观众对声音与影像关系的判断。

下面这张亲密空间的实拍图需要仔细导读。它展示的是画廊空场状态，而非展览进行时，理解这一点才能避免把空墙误读为展览内容。图中可见浅色大墙面适合投影，木地板适合脚步与实物交互，深色顶部集中了灯具与投影机位。

> **看图路径：** 1. 先看空旷浅色墙面与木地板构成的亲密小空间尺度；2. 再看顶部黑色天花区域隐藏的投影与灯具安装位置；3. 对照正文四面投影与顶部环绕声的隐藏式设备思路；4. 注意画面中未出现观众与作品，以空场状态理解布展前条件

[![原论文 Figure 1：The SARC Gallery](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/cb6b59caaec6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/cb6b59caaec6/figure-1.png)

*论文图 1。原论文 Figure 1：“The SARC Gallery”。*

解释这张图时要回到原文的设备清单：四面投影意味着墙面不只是背景，而是成像面；顶部声网意味着声音从上方包围而非仅前方发出；机动洗墙灯意味着光环境可编程。像素层面能确认的是空旷、无观众、无展品，顶部有投影机与射灯在墙面投出柔和光斑，这与隐藏式亲密展示的定位一致。但像素无法辨别具体投影分辨率或声压级，这些必须回到文字配置核对，不能从照片亮度推定投影性能。复述时应说这是一间布展前的亲密沉浸展示空间，而非声学实验室的大尺度研究厅。

### 流动单元：一辆车如何同时是录音棚与舞台？

流动单元是本报告最具机构特色的一节。它的白话含义是一辆经过改装的厢式车，内部是主工作室区，配多通道扬声器、音频与视频操作位，可供 2 名操作员共享声场协作。它至少承担 3 种情景：作为制作卡车到不同场馆录制声音与音乐，通道数高、适应多种场地；作为长期田野录音的移动基地，依靠车载电源与多种话筒实现多日离网录制与多通道空间监听；作为社会介入工具，到社区做录音聆听会，或作为户外舞台做快闪演出。

原文明确说该车由 2 位研究者与数字公司合作设计，目标是兼顾多种情景的可用性。车内还配有锂电池以支持离网录制，以及路由器支持远程直播。研究生复述时要抓住关键动作：采集与回放不再分离，车开到哪里，哪里就有了可监听、可录制、可直播的沉浸节点。这与固定实验室形成互补：实验室保证可控，车辆保证可达。

需要注意的边界是，报告没有给出该车的声学指标、隔声量或续航小时数，因此不能承诺它的录音质量等同于固定录音棚，只能说它在可达性与通道数上提供了固定设施无法替代的条件。

### 没有模型训练时，这篇报告的构造过程是什么？

本研究没有训练神经网络模型，因此本节必须明确说明没有训练阶段，也就没有梯度路径、参数冻结与更新、监督来源与重置时机这些事项。把无训练等同于确定性求解是错误的，设施搭建与艺术策划同样存在不确定性，只是它们的不确定性来自房间声学、设备调度与人的参与，而非随机种子与优化器。

实际的构造过程是设施建造、设备集成与档案整理：声学实验室按多层悬挂与网络音频集成扬声器系统，制作空间按金属、3 维打印、激光切割与电子制作集成加工链，画廊按投影、声音与灯光的网络化集成视听系统，流动单元按车辆改装集成录制与回放。另一条构造线是知识整理：为二十周年汇编超过 300 条跨媒介档案条目，覆盖学术人员与博士生的研究输出，并以此为素材制作了一部 30 分钟五屏影片加高阶环绕声的实验纪录片。

这些工作的真实计算是信号路由、声场渲染与视听同步，而非反向传播。原文未报告各系统的校准流程、均衡参数或软件版本，因此复现时需把这些记为缺项，逐项向原文作者或设备文档索取，而不能从扬声器型号名称推定其调校状态。

### 实验条件：用什么数据、什么协议、什么成本来检验？

作为工作室报告，它的检验条件不是数据集划分，而是设施可用性、人员结构与活动规模。数据一侧是二十年档案的三百多条记录，协议是按媒介与主题整理以观察研究趋势，聚合对象是学术人员与博士生全体，而非单次实验的试次。活动一侧是音乐节的投稿与节目规模，评审与策展方式包括公开征集、特邀与研究项目支持，并附带 1 天研讨会。硬件预算在正文中以设备清单形式给出，包括调音台、网络交换、音频接口、工作站软件，以及车间的加工设备尺寸。

缺失的交代也要如实指出：原文没有说明档案的收录标准、去重规则与标注一致性，没有给出投稿的录用率计算口径，没有报告设备采购与运维成本，也没有说明房间混响时间、背景噪声等声学基线。若把档案条目数当作影响力指标，需要谨慎，因为条目多可能反映记录完整而非引用率高。复现这类条件时，应先建立同等粒度的档案字段与活动记录模板，否则即使建成同样房间，也无法在二十年后讲清趋势。

资源可达性方面，文中脚注的庆祝影片链接当前不可用，点击返回 403，不应写成已公开可看；合作音乐节官网当前可用，可作为外部协作的核对入口。

### 主要结果：哪些规模数字支撑了二十年运转的判断？

报告直接给出的结果是机构运转规模，而非算法分数。核心判断是中心已建立国际声誉并在评估中获得认可，支撑这一判断的有限证据是评估方对实践研究与跨学科优势的定性表述，以及音乐节与档案的规模数字。阅读时要区分直接报告与有限解释：投稿数、节目数、档案条目数是直接报告，国际声誉是有限解释，需要更多引用与合作证据才能强化。

下表提出的问题是：在可核对的数字上，哪些活动达到了可持续的规模？公平条件是它们都发生在同一机构的组织框架下，指标方向是数量越大说明组织动员能力越强，但不直接代表单件作品质量。表格保留原文的计数写法，不做百分比换算。

| 领域与载体 | 指标含义 | 报告给出的规模 | 对比与语境 | 复述时必须加的限定 |
| --- | --- | --- | --- | --- |
| 二十年档案 | 跨媒介条目总数 | over 300 entries across different media | 覆盖教职员与博士生 | 未说明收录标准，不等同于引用影响 |
| 制作车间 | 3 维打印与加工能力 | 9 x 3D printers，5 x Bambu Lab P1S 3D，610mm x 305mm，1200x1200mm | 含金属、木工与电路制作 | 仅为设备清单，未报告利用率 |
| 画廊 | 空间与声像规模 | 4.8m × 4.8m，4-side video projection，16 channel ceiling grid，4 x Optoma ZK430ST，16 x 4430A Genelec，2 x Genelec 7350APM subwoofers | 亲密隐藏式展示 | 未报告声压与照度实测 |
| 2026 音乐节征集 | 投稿广度 | 392 applications from 39 countries across 8 open calls | 两年一届，含公开征集 | 未给出录用率口径 |
| 2026 音乐节节目 | 演出与展示数量 | 11 invited acts，10 acts as part of Handmade Music，9 spatial audio works in the sonic lab，15 exhibitions and installations，17 symposium presentations，15th-18th April | 多场地与线上协作 | 节目多不等于每场满座或高质量 |

表后解释主要收益与代价。收益是档案让个人项目变成可回溯的机构知识，音乐节让分散创作变成可对话的公共节目，两者共同降低了跨学科合作的寻找成本。代价是规模维持需要持续的人力与资金投入，且数量指标容易掩盖质量差异。未胜出项是报告没有提供失败项目、未被资助方向或退出社群的记录，读者无法从正文判断哪些路线被放弃。边界是所有数字都应按原文的阶段与对象理解，例如音乐节数字特指 2026 届安排，不能推广为每年常态。

### 如果拿掉一个环节会怎样：对照与反证在哪里？

本报告没有消融实验，但可以按证据做思想对照，且必须标明这是未验证推测而非原文结论。若拿掉声学实验室的多系统并存，只保留单一环绕声，研究者将失去在同一房间切换弥散与精确范式的条件，原文支持这 1 对照的依据是 3 种系统各自探索独特空间可能性的明确分工。若拿掉制作空间，虚拟声学乐器的物理接口将难以快速迭代，原文支持点是车间扩展明确服务于乐器与交互设计。

若拿掉流动单元，社区可达性将下降，原文支持点是车辆明确面向 otherwise 无法到达的社群。若拿掉档案，二十年趋势将无从谈起，原文支持点是档案被描述为理解主题趋势与共享 know-how 的资源。但这些都是可能性分析，原文没有实际关停某一环节后测量产出变化，因此不能写成拿掉后必然怎样。真正的反证缺口是：报告没有比较有无这些设施时博士培养周期、作品产出或外部资助的变化，也没有报告设备故障或疫情等冲击下的维持数据。

研究生应把本节读作方法论提醒：设施论文的因果需要纵向对照，而本报告只提供了截面描述，任何因果表述都应降级为待验证假设。

### 边界与缺项：哪些量没有被测量？

缺失证据不是技术错误，但必须逐项点清，以免过度承诺。首先是声学基线缺失：房间混响、噪声底、本底频响与各系统校准文件均未报告，扬声器型号与数量不能替代这些测量。其次是人的测量缺失：听音实验样本量、任务设计、评分量表与统计方法均未出现，不能把沉浸描述当作感知结论。再次是成本与开销缺失：训练资源不适用，但设备采购、运维人力、能耗、排练与布展工时均未量化，不能承诺可低成本复制。

还有可达性缺失：庆祝影片链接当前不可用，读者无法直接观看该作品验证其五屏与高阶环绕声的主张，只能引用文字描述并注明链接状态。最后是代表性缺失：参与式项目聚焦残障与社会弱势社群，这是明确的价值取向，但原文没有报告参与者招募、知情同意、评估方式与长期跟踪，因此不能把参与本身等同于效果改善。总体趋势不等于每组都成立，例如音乐节投稿来自 39 个国家，不代表每个国家都有入选节目；档案有三百多条，不代表每个方向都均衡。

这些边界决定了本报告适合作为建制参考，而不适合作为效果证据引用。

### 复现先做什么：按原文重建最小可运行条件

复现本报告不是复现 1 次训练，而是重建一套最小可运行的研究环境。第一步是确认空间：至少准备一个可悬挂、可走线的声学大厅与一个可遮光的亲密小间，前者对应声学实验室的多层布局，后者对应画廊的四面投影与顶部声网，尺寸可按自身条件缩放，但需记录混响与噪声底以替代原文缺失的基线。

第二步是确认信号链：网络音频交换、集中式数字信号处理、多通道音频接口与工作站软件缺一不可，否则扬声器只是喇叭堆叠，无法实现环绕声与波场合成的切换。第三步是确认制作链：至少具备 3 维打印、激光切割与基础电子制作能力，以便把乐器想法变成可演奏原型，并设独立测试区避免占用展示空间。第四步是确认移动能力：若面向社区，需准备支持多通道监听与离网供电的移动方案，并提前解决运输、保险与场地用电。

第五步是确认知识管理：从第 1 天建立档案字段，包括人员、媒介、场地、设备链与活动类型，否则二十年后无法回溯趋势。关键超参数在此语境下是房间尺寸、扬声器高度、通道数与投影数量，原文已给出部分，其余记为待向作者核实。代码开源、权重下载不适用，应改为图纸、路由表与校准文件是否可共享来评估可运行性。

### 何时值得借鉴：给研究生的收束判断

当你的研究问题确实需要空间作为变量时，这份报告值得借鉴：例如空间作曲需要对比弥散与精确定位，乐器研究需要快速原型，社区研究需要把设备带出校园。此时应借鉴它的分工思路，大空间做可控检验，小空间做亲密展示，车间做动手迭代，车辆做可达延伸，档案与音乐节做知识沉淀。当你的问题只需立体声耳机就能回答时，不必照搬 84 只扬声器的规模，强行扩大只会增加维护负担而不增加证据强度。

还需补的验证包括房间声学实测、听音任务对照、参与式项目评估与运维成本核算，这些正是原文未报告而你若新建机构必须补的。常见误解是把设备清单当作研究结论，或把庆祝影片链接当作可点击证据，前者混淆了条件与发现，后者忽略了当前不可用的访问状态。正确的复述是：SARC 用二十年证明了一种以实践为基础、以多空间协作为方法的组织是可运转的，运转规模有具体数字支撑，但何种空间在何种任务上更有效仍待受控验证。

带着这个判断去读，你既不会低估建制的价值，也不会高估描述的因果。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-1.png)

区域 1 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-2.png)

区域 2 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 3，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-3.png)

区域 3 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 4，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-4.png)

区域 4 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 5，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-5.png)

区域 5 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 6，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-6.png)

区域 6 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 7，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-7.png)

区域 7 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 8，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-8.png)

区域 8 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 9，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-9.png)

区域 9 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 10，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-10.png)

区域 10 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 11，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-11.png)

区域 11 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 12，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-12.png)

区域 12 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 13，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-13.png)

区域 13 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 14，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-14.png)

区域 14 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 15，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-15.png)

区域 15 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 16，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-16.png)

区域 16 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 17，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-17.png)

区域 17 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 18，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-18.png)

区域 18 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=1)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-19.png)

区域 19 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-20.png)

区域 20 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-21.png)

区域 21 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-22.png)

区域 22 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-23.png)

区域 23 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-24.png)

区域 24 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 25，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-25.png)

区域 25 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 26，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-26.png)

区域 26 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 27，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-27.png)

区域 27 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 28，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-28.png)

区域 28 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 29，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-29.png)

区域 29 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 30，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-30.png)

区域 30 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 31，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-31.png)

区域 31 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

[![原文数学表达区域 32，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/e16c7a1987a6/figure-32.png)

区域 32 · [查看论文原页](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf#page=3)

另有 43 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 icmc-2026 论文汇总](/posts/conference-icmc-2026/)
