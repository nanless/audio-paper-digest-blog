---
title: "Comparison of EMA and MARRYS: Jaw displacement in narrow vs broad focus"
date: 2026-09-14
draft: false
description: "该研究以美国英语两组同元音句为对象检验窄焦点与宽焦点下的下颌下降量，并以同步 EMA 与 MARRYS 对比设备一致性，最强证据是窄焦点词在 81.6% 话轮中为全句最低点且 DTW 后两系统平均相关 0.97，代价是仅 5 人小样本且旧版 MARRYS 需额外时间对齐。"
tags: ["统计分析", "发声与构音", "韵律", "语音", "语音属性识别"]
categories: ["speechprosody-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:speechprosody:2026:conference-paper-id:frid26_speechprosody"
paper_digest_source_kind: conference
paper_digest_conference_id: "speechprosody-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/speechprosody_2026/frid26_speechprosody.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/speechprosody_2026/frid26_speechprosody.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b8f82d10dcdf5b7aea7dc7b43cc73cbafcd0494cc0aa08ef4ef696ae8e805228"
paper_digest_api_reader_plan_sha256: "4b4051b9b8b2fab98b454642505446c4a84ef7f5d9fafba1a3e22421eee5c46e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ad915dee0634c1e648645e2b81ab8f9b314757a84b94db848629141da6ae15b2"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c0bef01c962e1636dfabffd76f9848acf6e5908151aab84aeca2406d980ae128"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "16b1597165feec465f2c98299ba5e611f6d61449cd9cb9f0c67cf2aafb338701"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ec01b28174473f9d5d3bc70cd35f8439a76163f344a49ded0a1f6b7ecfb731d6"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"scientific_topic","id":"scientific_topic.phonation","label":"发声与构音"},{"facet":"scientific_topic","id":"scientific_topic.prosody","label":"韵律"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"}]
paper_digest_primary_task: "语音属性识别"
paper_digest_primary_method: "统计分析"
paper_digest_score: 5.3
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 窄焦点张口更大：用下颌位移检验焦点类型与 EMA 和 MARRYS 的一致性

> 英文题目：*Comparison of EMA and MARRYS: Jaw displacement in narrow vs broad focus*

> 会议身份：`conference:speechprosody:2026:conference-paper-id:frid26_speechprosody`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/speechprosody_2026/frid26_speechprosody.html) · [官方 PDF](https://www.isca-archive.org/speechprosody_2026/frid26_speechprosody.pdf)

标签：#统计分析 #发声与构音 #韵律 #语音 #语音属性识别

评分：**5.3/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Johan Frid：机构信息未能从会议 PDF 纯文本可靠映射
- Donna Erickson：机构信息未能从会议 PDF 纯文本可靠映射
- Malin Svensson Lundmark：机构信息未能从会议 PDF 纯文本可靠映射
- Oliver Niebuhr：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该研究输入为两组含低元音内容词的美式英语问答式朗读语句与窄聚焦位置标注，输出为目标词最大下颌下降量及聚焦类型效应判断，难点在于同时分离元音固有高度、句法位置与窄聚焦和宽聚焦的混杂影响。方法链分四步依次衔接：先用三维电磁发音仪与下巴带双侧弯曲传感器的头戴式节律系统同步采集声学与下颌运动轨迹，再经蒙特利尔强制对齐器切分词边界并提取每词下颌垂直最低点，接着按说话人与句式归一化位移并拟合聚焦类型与词位的线性混合效应模型，最后用动态时间规整校正早期版本时间漂移后计算两系统信号相关以验证可比性。与下颌门齿刚性粘贴直接追踪的电磁发音仪相比，下颌动作节律系统以可调下巴带间接估计开口，便携低成本且适合田野与课堂大规模采集，但早期版本需跨系统非线性时间对齐才能保证时域可比。在200个话语同步记录的评测条件下，动态时间规整对齐后轨迹的Pearson相关平均为0.97，高于对齐前轨迹的Pearson相关平均0.84。窄聚焦词在81.6%话语中取得全句最大张口的分布分析进一步表明聚焦具有全句显著性，且位置交互显示窄聚焦效应在句首最强而非聚焦效应随句尾增强。该结论适用边界仅限于受控朗读的美国英语低元音内容词与小样本实验室条件，尚未验证自发语、其他元音、其他语言与大样本泛化，且句法结构差异带来的句尾效应仍受限于两类句式观察。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://www.articulograph.de> — 链接可访问（HTTP 200）
- 第三方资源：<https://praat.org> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.R-project.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://ubeam.engr.wisc.edu/pdf/ubdbman.pdf> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要保留什么？

本文解读的输入是论文原文提供的同步声学、电磁发音仪与新型头盔系统的下颌记录，以及作者给出的官方原图像素，目标是让刚进入语音与音频领域的研究生能复述出别人如何诱发焦点、如何切词取最低点、如何做统计与设备对比。必须保留的信息包括语料设计、说话人数量与有效词例数、传感器安装与采样率、归一化与混合效应模型设定、窄焦点为全句最低点的比例、动态时间规整前后相关系数的范围与均值。

输出是 1 篇按学习依赖展开的技术解读，不评价修辞，只讲可核对的动作与条件。全文先走一条样本的完整链路，再展开统计细节与设备对比，最后讲复现步骤与未验证边界，教学用的举例会明确标为例子，不虚构数值。

研究对象是美式英语朗读句中的下颌垂直位移。白话说，下颌下降就是张口大小，用下切牙相对咬合面的最低位置表示，开口越大数值越低，标准化后负得越多表示下降越大。英文术语是 jaw lowering 或 mandible lowering。韵律焦点是另一条主线，白话说就是一句话里被强调的部分，窄焦点是只强调某一个词，英文为 narrow focus，宽焦点是对整句的默认强调，英文为 broad focus，常落在句末。核重音是整句中获得最大突出的位置，英文为 nuclear stress，默认在句末，但说话人可以选择落在其他词上。本文的中心矛盾是抽象的突出等级能否用具体的下颌最低点来区分，以及便携低成本设备能否复现实验室金标准设备的波形。

### 已有路线如何测量突出，缺口在哪里？

声学路线早已报告突出伴随强度、时长、基频范围增大和第一共振峰升高，其中第一共振峰升高与张口增大直接相关。发音路线报告强调词伴随下颌、舌与唇运动增大，早期音节尺度的研究指出强调词张口更大。跨语言工作发现法语、日语、普通话等边缘强化语言在短语末或 utterance 末有更大的下颌下降，而英语每句有一个核重音位置，朗读时会在某一个音节上出现最大下降。

测量工具路线包括超声、核磁、光学追踪、腭电图、视频、X 线微束数据库与电磁发音仪，其中后两者最常用于记录下颌数据。原文指出这些方法不适合大人群采集，原因是昂贵、不可便携、记录与分析费力。巴西库里蒂巴会议期间用 MARRYS 在安静教室录制 92 人的例子被用来说明便携设备的采集速度，约 15 分钟可录约 100 句。已有小规模 MARRYS 与电磁发音仪对比的试点研究是本文的前身，本文要进一步验证两者是否可比，同时检验不同焦点类型的下颌量级差异。同输入同目标的对照是同句不同焦点条件的下颌最低点，同运行阶段的设备对照是同一发音的同步双轨迹，而不是跨语料或跨实验室的间接比较。

### 本文要回答哪三个可检验问题？

第一个问题是焦点词是否在全句中有最大下颌下降。操作化为每个目标词窗内取下颌垂直最低点，经说话人与句子类型内标准化后比较 3 类条件：窄焦点词、宽焦点词、非窄焦点词。第二个问题是窄焦点是否比宽焦点带来更大的下降。操作化为混合效应模型中以句首窄焦点为截距，检验宽焦点与非窄焦点的系数方向与显著性，并补充窄焦点词为全句最低点的出现比例。第 3 个问题是两种设备是否给出可比的下颌轨迹。操作化为对同步记录做时间对齐后计算皮尔逊相关，分别报告规整前后的范围与均值。

3 个假设与之对应。假设一是接受焦点、不论窄宽的音节词在全句中有最大下降，假设二是窄焦点音节的下降大于宽焦点，假设三是电磁发音仪与 MARRYS 给出可比的测量。检验条件必须一致：同一说话人、同一句子、同一遍朗读的同步信号，词边界来自同一套强制对齐，统计的聚合对象都是按词例取最低点。指标方向要先讲清，因为纵轴是标准化后的位置值，向下表示开口更大，不能把曲线向下误读为性能变差。

### 从提问到双设备同步，整体链路如何走？

先沿一个样本走完链路。例子，明确标为教学例子：提问 Did a dog sit with a rat on a hat，回答 No, a CAT sat with a rat on a hat，目标词 CAT 被诱发为窄焦点。说话人戴着 MARRYS 头盔并粘好电磁发音仪传感器，在隆德大学人文实验室同时录音。音频、电磁发音仪位置、文本提示、颈部加速度计、MARRYS 形变信号共 5 路数据被存下。随后音频与文本送入强制对齐得到词边界，词边界套到电磁发音仪的下颌通道上取窗内最低点，标准化后送入统计模型。另一条支线把电磁发音仪轨迹与 MARRYS 轨迹做时间对齐，再算相关。

下面导读同步装置图，帮你把文字链路对应到实物佩戴与诱发材料。

> **看图路径：** 1. 先看左侧引导图中的猫鼠与帽子场景，确认句子 1 的词汇都配有视觉诱发；2. 再看右侧同步佩戴照，辨认头盔、下巴带两侧传感器与下切牙 EMA 传感器的位置关系；3. 注意麦克风与颈部加速度计的固定方式，理解多路信号如何共存而不互相遮挡

[![原论文 Figure 1：(left) Guiding picture for sentence set 1; (right) Co-recording of jaw movements with MARRYS and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/2cd24f8d5aac/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/2cd24f8d5aac/figure-1.png)

*论文图 1。原论文 Figure 1：“(left) Guiding picture for sentence set 1; (right) Co-recording of jaw movements with MARRYS and EMA: for the MARRYS, using bending sensors on each side of the chin strap; for…”。*

左图是句子 1 的引导画，画有猫、鼠与帽子，用于帮助诱发 a cat sat with a rat on a hat 的自然朗读，减少念错。右图是同步佩戴照，可见黑色头盔、下巴带两侧的弯曲传感器、下切牙龈部的电磁发音仪小颗粒、固定距离电容麦克风与颈部加速度计。MARRYS 以 2 千赫兹采样与 10 比特分辨率记录张口，麦克风以 48 千赫兹 16 比特录音以保证音与运动同步并减少头动伪影，数据可存本地卡。电磁发音仪用 Carstens AG5013 维系统，发音数据 250 赫兹采样，音频 48 千赫兹采样，另有上切牙、鼻梁、左右乳突四处参考传感器用于头动校正，低通 20 赫兹后旋转到咬合平面。理解这张图后，后文的切词、取最低点与双轨迹对齐才有物理落点。

### 语料如何控制元音，焦点如何诱发？

语料用两组句子。第一组是 a cat sat with a rat on a hat，目标词为 cat、sat、rat、hat，第二组是 the fat cat sat with Matt，目标词为 fat、cat、sat、matt。选择理由是内容词都含低元音低元音/ae/，因为下颌位移随元音高低变化，统一元音可避免元音本身的开口差异混入焦点效应。诱发方式是问答加显示。两个问题为 Did a cat sit with a rat on a hat 与 Did the fat cat sit with Matt，回答在幻灯显示并由第一作者朗读提问以诱发 5 种焦点条件：一种宽焦点与 4 个位置的窄焦点。第一组配引导图，第二组把目标焦点词用大写显示，例如 No, the FAT cat sat with Matt。

说话人为 5 名美式英语者，其中 4 名女性。 utterances 是更大随机集的一部分，每人约 5 遍，因念错剔除后人数不等。MARRYS 只录到 4 人，因 1 人时间不够提前结束。有效词例为 MARRYS 共 200 个，电磁发音仪共 1016 个词例。分析单位是每个词例一行，含说话人编号、句子类型、焦点条件、词位置与最低下颌位置。

**窄焦点 × 宽焦点：** 窄焦点指通过问答把突出位置限定在某一个内容词上，例如用 Did a dog sit 否定出 a CAT，宽焦点指对整句的默认突出，常落在句末词上；两者分工是前者检验局部强调的发音代价，后者提供整句基线，搭配使用才能分离出强调本身与句末位置各自对下颌下降的贡献。

### 传感器装哪里，信号如何变成每词一个数？

电磁发音仪侧把一颗传感器放在下中切牙处跟踪下颌，舌与唇另有传感器但本文不报告，另有四颗参考传感器用于头动校正。处理时把位置数据转成文本矩阵导入 Praat，每列对应一颗传感器，每行代表 4 毫秒即 250 赫兹，找到下颌列后按词边界切出目标词区间，在区间内找垂直最低点即最大张口，念错或重复经人工剔除。MARRYS 侧用下巴带两侧弯曲传感器感知张口，属早期版本，后续版本不再需要本文的繁琐对齐。颈部加速度计记录声门振动，本次用于信号对齐。

对齐与标准化分两步。词级对齐用英语 ARPA 声学模型与发音词典的蒙特利尔强制对齐器生成 Praat 文本网格，给出词与音段边界。数值标准化在说话人与句子类型内做 z 分数，以消除解剖与句子差异。统计以电磁发音仪数据为主，模型为线性混合效应模型，用归一化下降预测焦点类型与词位置，随机截距为说话人与 sweep，随机斜率因人数少出现奇异拟合而未保留。

**电磁发音仪 × MARRYS 头盔：** 电磁发音仪通过粘在下切牙龈部的传感线圈在电磁场中定位下颌，分工是提供高精度的 3 维位置基准，MARRYS 头盔通过下巴带两侧弯曲传感器感知张口，分工是提供低成本便携的相对形变信号，两者搭配的理由是前者校准后者，新作用是若波形高度一致则可用便携设备做大人群田野采集。

**核重音 × 下颌下降：** 核重音指一句话中获得最大突出的词或音节，分工是标定韵律目标位置，下颌下降指下切牙相对咬合面的垂直低点，分工是给出可测量的发音执行量，两者搭配的理由是声学突出常伴随第一共振峰升高，而第一共振峰与开口度相关，组合意义是用下颌最低点来外显抽象的韵律突出等级。

**强制对齐 × 归一化：** 强制对齐指用蒙特利尔强制对齐器把音频与文本提示对出词边界，分工是切出每个目标词的时间窗，归一化指在说话人与句子类型内把下颌最低点转成 z 分数，分工是消除解剖尺寸与句子差异，搭配原因是先切窗再取窗内最低点最后标准化，才能跨人与跨句比较焦点效应。

**动态时间规整 × 皮尔逊相关：** 动态时间规整分工是保持幅度不变而非线性拉伸时间轴以补偿旧版 MARRYS 的漂移，皮尔逊相关分工是在对齐后的中央 4 秒区间量化两条轨迹形状一致度，搭配原因是先解决时间错位再算形状相似，组合意义是区分时间同步问题与幅度测量问题。

### 本研究训练了什么，没有训练什么？

本研究没有训练神经网络，也没有更新声学模型权重，不存在梯度路径、冻结层或早停需要交代。蒙特利尔强制对齐器调用的是现成英语 ARPA 模型与词典，只做推理对齐，不做本语料上的再训练。Praat 脚本做矩阵导入、列选择与窗内取最小值，属于确定性计算而非学习。R 中的统计是模型拟合而非神经训练，拟合的是线性混合效应模型的固定效应系数与随机截距方差，优化目标是受限最大似然下的偏差最小，不是分类交叉熵。Python 侧的动态时间规整是逐对轨迹的非线性对齐搜索，保持幅度不变只调时间对应，随后算皮尔逊相关，同样无参数学习。

真实计算过程可复述为 5 步。第一步按文本提示对音频做强制对齐得词边界，第二步按边界在电磁发音仪下颌通道取垂直最低点，第三步在人与句内标准化，第四步拟合混合模型并检验系数，第 5 步对同步双轨迹做互相关粗对齐加手动匹配运动笔划，再做动态时间规整细对齐并在每 sweep 中央 4 秒即 3 到 7 秒区间算相关。缺项要明确指出：原文未报告对齐器的字错率或边界误差，未报告 Praat 取最低点前的平滑窗，未报告混合模型的具体求解器与收敛判据，这些缺项不影响复述主链路，但在复现时需自行记录版本与参数。

### 数据划分、采样、指标与聚合口径是什么？

数据是实验室同步采集，无训练集验证集测试集划分，聚合对象是词例级最低点与话轮级是否最低。采样为电磁发音仪 250 赫兹、音频 48 千赫兹、MARRYS 2 千赫兹 10 比特、麦克风 48 千赫兹 16 比特，发音数据低通 20 赫兹。指标有两类，一类是归一化下颌下降的 z 分数，越负表示开口越大，另一类是双设备轨迹的皮尔逊相关，越接近 1 表示形状越一致，外加窄焦点词为全句最低点的话轮比例及其 95% 置信区间。统计方法为线性混合效应模型，固定效应为焦点类型与词位置及其交互，随机截距为说话人与 sweep，报告条件决定系数与边际决定系数，以及各系数的 t 值与 p 值。

公平条件方面，焦点比较在同一说话人与同一句子类型内标准化后进行，设备比较在同一遍朗读的同步信号上进行，避免跨遍发音变异。硬件预算按原文交代为隆德大学人文实验室的电磁发音仪场地加便携头盔与本地卡存储，未报告具体机时与人力成本。资源可用性方面，电磁发音仪官网、Praat 官网、R 官网与 X 线微束手册链接在本次核验中状态为可用，但这只说明链接可达，不代表本研究的原始数据已公开。伦理方面，所有被试签署知情同意，研究经瑞典伦理审查机构批准，编号 022-05082-01。

### 窄焦点是否带来更大的下颌下降？

先提出比较问题：在控制说话人与句子后，窄焦点词的归一化最低点是否显著低于宽焦点词与非窄焦点词，指标方向是 z 分数越负表示下降越大。公平条件是同一模型内同时放入焦点类型与词位置。下表整理模型解释力与关键系数的原文报告，表头含义为条件、指标、窄焦点基线、比较组效应与位置效应，数值保留原文写法。

| 条件 | 指标 | 窄焦点基线 | 比较组效应 | 位置与交互 |
| --- | --- | --- | --- | --- |
| 全模型 | 解释力 | 截距为句首窄焦点且显著低于零 | 条件决定系数 0.42，边际决定系数 0.40 | 焦点类型与词位置共同解释大比例方差 |
| 宽焦点相对窄焦点 | 系数检验 | 窄焦点为基线 | t(1008) = 6.06，p < .001，下降更小 | 宽焦点与位置交互不显著 t(1008) = 0.29，p = .77 |
| 非窄焦点相对窄焦点 | 系数检验 | 窄焦点为基线 | t(1008) = 5.65，p < .001，下降更小 | 与位置交互显著 t(1008) = 4.50，p < .001 |
| 词位置 | 位置效应 | 句首为参照 | 后位下降减小 t(1008) = −5.64，p < .001 | 非窄效应急随靠后位置增大 |

上表的主要收益是焦点效应量级约为一个标准差，窄焦点明显更低，代价是位置也有显著负效应且非窄与位置存在交互，不能只看主效应。未胜出项是宽焦点与位置的交互不显著，说明宽焦点的下降随位置的变化不如非窄那样陡峭。反例与边界是位置 2 在宽与非窄条件下反而最高，句末词并非一律最低，这与默认核重音在句末的直觉不一致，需结合句法进一步验证。
下面先看总体分布，再看位置交互。

> **看图路径：** 1. 对比红绿蓝三把小提琴的整体上下位置，确认窄焦点整体更靠下；2. 看每把琴内部白点均值与黑线中位数的相对位置，判断分布是否偏态；3. 观察顶部与底部细尾的伸展长度，比较三种条件下的离散程度

[![原论文 Figure 2：Distribution, mean and median per focus type (x-axis).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/2cd24f8d5aac/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/2cd24f8d5aac/figure-2.png)

*论文图 2。原论文 Figure 2：“Distribution, mean and median per focus type (x-axis).”。*

该图为 3 条件的小提琴加箱线，横轴为窄、宽、非窄，纵轴为归一化下颌下降，越向下表示开口越大。红色窄焦点整体下沉，白点均值与黑线中位数都明显低于绿色与蓝色，蓝色非窄略高于绿色宽焦点。尾部显示窄焦点下方仍有较长拖尾，说明个别词例开口极大，但中位数与均值接近，分布未严重偏斜。这支持假设二，即窄焦点比宽焦点有更大下降，也支持假设一中焦点词低于非焦点的大趋势，但宽与非窄的分离很小，需靠模型系数与位置分析进一步区分。

### 位置与句子类型会改变焦点效应吗？

本节的比较问题是焦点效应是否在不同词位置保持形状，条件是否一致，指标方向仍是越负越大。公平条件是同一标准化口径下按位置求均值与标准差。

> **看图路径：** 1. 沿横轴 1 到 4 跟随红线走向，确认窄焦点始终低于另两条线；2. 比较位置 2 处绿线与蓝线的峰值高度，确认非窄与宽焦点的分离很小；3. 看位置 4 处绿线明显下探而蓝线保持较高，思考位置与焦点类型的交互

[![原论文 Figure 3：Mean and sd per focus type and word position (x-axis).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/2cd24f8d5aac/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/2cd24f8d5aac/figure-3.png)

*论文图 3。原论文 Figure 3：“Mean and sd per focus type and word position (x-axis). Y-axis shows mean normalized jaw lowering (z-score).”。*

该图横轴为句中词位置 1 到 4，纵轴为均值归一化下降，红绿蓝分别表示窄、宽、非窄，误差条为标准差。可见红线始终在最下方，证实窄焦点在任何位置都开口更大。蓝线与绿线在位置 1 和 2 接近峰值，位置 2 为三者的相对高点即开口较小处，位置 4 处绿线明显下探而蓝线保持较高，红线在位置 4 也继续下探。这说明位置效应因焦点而异，模型中非窄与位置的正交互与此对应。教学提示是不要把末步结果推广全程，位置 4 的宽焦点下降增大不代表所有句末都如此，下节按句子类型拆分会看到句法的影响。

按句子类型拆分后，窄焦点词无论在 a cat sat with a rat on a hat 还是 the fat cat sat with Matt 中都低于同位置的宽与非窄，总体形状跨词表 preserved。细节差异是第二句句末词的整体下降大于第一句句末词，原文推测可能与句法构成有关，第一句动词短语含两个介词短语，第二句只含一个，但明确标为待验证。另一处细节是窄焦点在位置 1 和 2 的下降量相对较小，宽与非窄在位置 2 最小，这些位置模式提示重音实现还受韵律短语边界调节，不能简化为焦点标签的单调映射。

### 效应是否跨人稳定，设备对比的代价是什么？

先看跨人稳定性，比较问题是 5 位说话人是否都呈现窄大于宽大于非窄的方向，条件一致为同一 z 分数口径下按人求均值。

> **看图路径：** 1. 逐条跟随五位说话人的折线从窄到宽再到非窄，确认单调上升方向一致；2. 比较窄焦点一端五条线的起点离散度与非窄一端终点的收敛度；3. 注意纵轴为 z 分数且向下为更大下降，反向解读高低好坏

[![原论文 Figure 4：Mean per speaker (different colored lines) and focus type (x axis), amount of mean normalized jaw…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/2cd24f8d5aac/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/2cd24f8d5aac/figure-4.png)

*论文图 4。原论文 Figure 4：“Mean per speaker (different colored lines) and focus type (x axis), amount of mean normalized jaw lowering (z-score) is shown on y-axis.”。*

该图横轴为焦点类型，纵轴为归一化下降，5 条折线为 5 位说话人，编号为 BNY、KVM、LLB、PGU、TRH。所有折线都从左侧窄焦点的约负 1 附近上升到中间宽焦点的约零附近，再微升到右侧非窄，方向完全一致，仅起点离散略大于终点。这支持效应的个体稳健性，但幅度因人而异，随机斜率未纳入模型正是因人数少，推广到大人群仍需验证。

设备对比的比较问题是同步双轨迹形状是否一致，指标方向是相关越接近 1 越好。下表整理样本量与规整前后相关的原文报告，表头为条件、指标、规整前、规整后与话轮级验证，数值保留原文写法。

| 条件 | 指标 | 规整前 | 规整后 | 话轮级验证 |
| --- | --- | --- | --- | --- |
| 同步轨迹 | 皮尔逊相关 | 范围 0.062 to 0.978，均值 0.84 | 范围 0.894 to 0.998，均值 0.97 | 200 utterances，约每人 50 utterances |
| 全句最低点 | 窄焦点为最低的比例 | 总体 81.6% | 95% CI [0.76, 0.86] | 范围约 70% to over 95%，跨人句型位置稳健 |
| 有效样本 | 词例数 | MARRYS 200 | EMA 1016 tokens | MARRYS 4 人，EMA 5 人 |

表后解释是主要收益为规整后平均 0.97 且下限 0.894，说明旧版 MARRYS 能抓住上下运动，代价是规整前均值 0.84 且下限低至 0.062，时间漂移是主要误差源，需经加速度计互相关粗对齐加手动匹配笔划再做动态时间规整。未胜出项是规整前个别话轮相关极低，不能直接拿原始时间轴比较。话轮级验证显示窄焦点词为全句最低点的比例为 81.6%，远超随机，但仍有约两成话轮不是最低，说明总体趋势不等于每轮都成立，失败条件可能与位置、句法或发音变异有关，原文未逐例归因。

### 哪些结论是报告，哪些是待验证？

直接报告的是窄焦点词的下降大于宽焦点与非窄，混合模型系数显著，窄焦点词为全句最低点的比例为 81.6% 且置信区间为 0.76 到 0.86，双设备规整后高度相关。有限解释的是句法差异导致第二句句末下降更大，以及说话人选择把核重音放在 highlights 还是 sky 上反映英语也有落点选择，这些有数据示意但样本小，原文用可能与有待进一步研究表述。未验证推测是新版 MARRYS 时间对齐更好因而适合大语种比较，以及下颌模式可推广到其他方言与语言，这些在本文没有测量。

边界要讲清。人数仅 5 人且 MARRYS 仅 4 人，随机斜率因奇异拟合未保留，跨人推广力有限。元音统一为低元音，结论是否适用于高元音未知。分析只用下切牙垂直最低点，未用舌唇数据，未测误判率、延迟与成本，不能承诺这些量得到改善。旧版 MARRYS 的时间处理链较重，不能代表新版的开箱性能。相关性不是因果，下颌大不等于听感突出大，声学的中介仍需联合建模。

### 要复现这条链路，先做什么？

先准备诱发材料与名单。照抄两组问答与大写标记，打印第一组的猫鼠帽子引导图，招募美式英语者并签署知情同意，记录每遍是否念错以便剔除。佩戴时同时固定头盔下巴带、粘好下切牙传感器、贴好四处头动参考、戴好颈部加速度计与固定距离麦克风，确认电磁发音仪 250 赫兹与音频 48 千赫兹同步，MARRYS 本地卡正常写入。

再跑计算链。调用英语 ARPA 模型与词典的强制对齐得词边界，用 Praat 脚本按边界切出目标词并取下颌垂直最低点，人工剔除误读与重复，在说话人与句子类型内转 z 分数，拟合含焦点类型、词位置及其交互的混合模型，随机截距设说话人与 sweep。设备对比时先做电磁发音仪与加速度计的互相关定 sweep 时刻，再做加速度计与 MARRYS 的互相关加手动匹配笔划，最后做动态时间规整并在中央 4 秒算皮尔逊相关，分别记录规整前后范围与均值。核对点是截距对应句首窄焦点且显著低于零，宽与非窄系数为正显著，位置主效应为负，非窄与位置交互为正。版本要记录 Praat、R 与对齐器版本，缺的平滑与求解器参数要如实注明。

### 何时值得尝试这种便携方案，还需补哪项验证？

当目标是在教室或田野快速采集大人群的张口等级，且问题可归约为按词比较最低点时，值得尝试 MARRYS 这类便携方案，因为本文显示其波形形状经时间规整后与电磁发音仪高度一致。当问题需要毫米级绝对位置、舌体协同或毫秒级无后处理同步时，仍应留在实验室用电磁发音仪。复现时优先保证元音控制与诱发一致性，否则焦点效应会被元音高度淹没。

还需补的验证有三项。一是扩大人数与方言，纳入随机斜率并检验位置与句法的交互是否稳定。二是补报边界误差与重测信度，以及新版 MARRYS 免后处理后的开箱相关，不再沿用旧版的重对齐链。三是联合声学指标如强度、时长、基频范围与第一共振峰，检验下颌增量中有多少转化为可听突出，避免把发音差异直接当成知觉结论。常见误解是把纵轴向下当成变差，或把平均 0.97 当成每轮都好，或把 81.6% 当成每轮必中，正确读法是方向先看图例、均值看分布、个例看范围，总体趋势不等于每组每步都成立。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

另有 7 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/speechprosody_2026/frid26_speechprosody.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 speechprosody-2026 论文汇总](/posts/conference-speechprosody-2026/)
