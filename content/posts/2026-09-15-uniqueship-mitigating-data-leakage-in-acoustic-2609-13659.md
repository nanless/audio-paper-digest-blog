---
title: "UniqueShip: Mitigating Data Leakage in Acoustic Ship Classification Benchmark Datasets"
date: 2026-09-15
draft: false
tags: [音频分类, 基准设计, 数据集, 基准测试]
categories: [论文速递]
description: "针对随机切分让同一艘船同时出现在训练与测试导致虚高的问题，UniqueShip 按 MMSI 隔离船舶、按天隔离背景构建 2460 小时船舶音频与 4218 艘船的基准，最强 Swin 加 Mel 基线在无泄漏下准确率为 0.665，而引入泄漏可抬高 0.08-0.21，且船数翻倍增益 2.4-2.6 点约为时长翻倍 0.8-1.3 点的两到三倍。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.13659"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "记住同一条船：UniqueShip 用船舶身份隔离重测水下舰船分类"
paper_digest_original_title: "UniqueShip: Mitigating Data Leakage in Acoustic Ship Classification Benchmark Datasets"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.13659v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.13659v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.13659v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对随机切分让同一艘船同时出现在训练与测试导致虚高的问题，UniqueShip 按 MMSI 隔离船舶、按天隔离背景构建 2460 小时船舶音频与 4218 艘船的基准，最强 Swin 加 Mel 基线在无泄漏下准确率为 0.665，而引入泄漏可抬高 0.08-0.21，且船数翻倍增益 2.4-2.6 点约为时长翻倍 0.8-1.3 点的两到三倍。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Connor Hashemi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Trevor Stout"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anthony Hoogs"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jason Parham"}]
paper_digest_abstract_sha256: "d2017dca987607ccb0482604249f62fed080054165c3776ca2564f2042ea53f5"
paper_digest_sidecars: {"citation.bib":{"sha256":"ac17ee862c6fd72636d0da857427fb00f2340a1c0c9704910f13cd2137ceab6c","url":"/audio-paper-digest-blog/data/papers/2026-09-15/2609-13659/citation.bib"},"citation.json":{"sha256":"c53ad6e2494faafb8b5c5f0f992c1dd30cb38beaa21d4b844af3f75160717a89","url":"/audio-paper-digest-blog/data/papers/2026-09-15/2609-13659/citation.json"},"citation.ris":{"sha256":"636a86f557146ec5dd8221bee4e3c43b92b78628e85a932ccb6e11985aa71594","url":"/audio-paper-digest-blog/data/papers/2026-09-15/2609-13659/citation.ris"},"rethink-context.json":{"sha256":"030075ca0604707183ee7e182ba052f9200f90f5386ad115fb0d5c65f57db618","url":"/audio-paper-digest-blog/data/papers/2026-09-15/2609-13659/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e001d1955db6e1227127a24139b27a8702689dae6e2108835c58bd6172691f21"
paper_digest_api_reader_plan_sha256: "d96ebdca50e5c5c8f0a97816a584aa4af94db13ec10e25fc88f3295778d650ed"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "af02e6aa15f2416b0e8a0a85824a7df9b01647eeaa864a3c6c97acf22ed63ed8"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "39073760b63798fe75945df55b3538ba5ad5e44621426ebd536132731e898b0c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e4d891d4e6569a207474a6a6beabfba49c06c1008521c9f670244740a8e850a2"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ffcfc3654aa9288d3ddec416712b152a76cfef8e673b5c42ae55c304ccbafa58"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 记住同一条船：UniqueShip 用船舶身份隔离重测水下舰船分类

> 英文题目：*[UniqueShip: Mitigating Data Leakage in Acoustic Ship Classification Benchmark Datasets](https://arxiv.org/abs/2609.13659v1)*

> 标签：#音频分类 | #基准设计 | #数据集 | #基准测试
>
> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Connor Hashemi：机构信息未在 arXiv HTML 中可靠披露
- Trevor Stout：机构信息未在 arXiv HTML 中可靠披露
- Anthony Hoogs：机构信息未在 arXiv HTML 中可靠披露
- Jason Parham：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

水下声学目标识别以被动水听器录音为输入，输出舰船类别，难点在于同一舰船连续辐射噪声强自相似，随机切分极易让模型记住个体而非类别。作者先融合Strait of Georgia区域双水听器2016年5月至2023年11月录音与船舶自动识别系统数据并线性插值定位，其定位输出进入下一步区间筛选。接着按单船在2 km内含半径内且4 km内无第二船、无船进入8 km则判为背景的规则抽取有效区间，得到干净的舰船与背景片段。最后按船只身份分组与背景按天分组形成无泄漏划分，直接产出训练验证测试集以评估对未见个体的泛化。相对DeepShip与VTUAD的随机切分，该机制关键差异是强制同船不跨划分，实际意义是避免记忆虚高而反映真实部署。在DeepShip基准评测设置下，无泄漏划分的准确率为0.588±0.077，低于随机泄漏划分的准确率0.710±0.029。消融进一步显示船只数翻倍带来2.4至2.6个百分点提升而时长翻倍仅带来0.8至1.3个百分点提升。该结论适用边界仅限单船主导且2 km内含半径内分类，多船重叠与跨海域迁移等尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么水下听船比想象中难评估？

输入是水听器长期连续录到的水下声音，目标是判断当前片段属于货船、油船、拖船、客船还是背景，初学者容易把这理解为普通的音频分类，也就是把声音转成频谱图再丢给图像模型。白话说，水下目标识别的英文名是水下声目标识别，缩写为 UATR，船舶分类是其子任务。难点不在模型不够大，而在数据本身具有强自相似性：同一艘船在相邻分钟内的声纹高度重复，不同船的类别边界又受船体尺寸、航速、载况影响。

论文要解决的学习依赖是，如果评估集里混入了训练时听过的同一艘船，模型只要记住这条船的个体嗡鸣就能拿高分，但部署时遇到的是没听过的新船，这种分数无法迁移。输出因此不是单纯的准确率数字，而是必须注明划分是否隔离了船舶身份的泛化准确率。本文解读的输入是论文正文证据与官方原图像素，目标是让研究生能复述数据构造、泄漏对照、基线训练与元数据分析 4 条链路。

必须保留的信息包括纳入与排除半径、按 MMSI 与按天分组规则、五折划分比例、声谱图参数与消融斜率。关于论文正文提到的 uniqueshipdata.org 发布数据集与代码的说法，本次未获得可验证的资源状态，不能确认当前可达，不作为可下载依据。

### 同输入同目标的已有数据集如何划分？

同输入指同样取自加拿大海洋观测网络的英文名为 Ocean Networks Canada，缩写为 ONC 的开放水听器与船舶自动识别系统数据，自动识别系统的英文名为 Automatic Identification System，缩写为 AIS。同目标指同样做船舶辐射噪声的船型分类。同监督指同样用 AIS 解析出的船型标签做监督。同运行阶段指同样在离线切分后做训练验证测试。已有路线包括深船数据集的英文名为 DeepShip、船舶类型水下声学数据的英文名为 Vessel Type Underwater Acoustic Data，缩写为 VTUAD，以及远洋船数据集的英文名为 Oceanship。

论文报告它们只用了部分部署时段，例如 DeepShip 用 2016 年 5 月至 2018 年 10 月部分部署，VTUAD 用 2017 年 6 月至 11 月并给出多种纳入排除半径组合，Oceanship 扩展到 15 类但时段集中在 2020 年 7 月至 2021 年 2 月。关键差异在划分：VTUAD 提供的划分被描述为从全部 1 秒片段中随机选择，DeepShip 类工作常随机切分长记录或短片段，Oceanship 及使用者也常随机切分文件或片段。这样同一 MMSI 会横跨训练与测试，相邻背景也会被拆散。

论文的对照不是用类别多少比胜负，而是把同一批音频分别用随机划分与身份隔离划分重跑，比较条件一致下的分数差，从而把划分规则作为自变量。

### 随机切分为什么会虚高？

沿一个样本走一遍有助于理解。假设一艘特定货船在某天经过佐治亚海峡的水听器，AIS 给出它的 MMSI、位置与航速，音频被切成多个 5 秒片段。如果随机切分，这些来自同一次经过的相邻片段会被分到训练集和测试集，它们的传播信道、背景噪声与机器工况几乎相同。模型在训练时见过该 MMSI 的低频线谱与调制特征，测试时再见到同一 MMSI 只需做个体匹配，不必学会货船与油船的类别边界。背景同理，相邻背景片段的时变噪声高度相关，随机拆分等于让测试背景在训练中出现过。

论文因此提出 3 条常被忽略的划分规则：含船样本必须按 MMSI 分组在同一划分，环境录音必须按天分组，数据集必须提供执行上述约束的显式训练验证测试划分或交叉验证折。理解这 3 条后，才能读懂后文为什么用 MMSI 不重叠的五折、为什么背景按天、为什么要重做 DeepShip 与 VTUAD 的无泄漏划分。

### UniqueShip 的全景链路是什么？

UniqueShip 的全景是从 ONC 长期部署出发，经过有效场景识别、音频抽取、元数据关联、5 秒切分与防泄漏分折，形成可直接训练的基准。来源是位于弗雷泽河三角洲佐治亚海峡的两部型号为 icListen AF 的水听器，共 7 个部署，时间从 2016 年 5 月到 2023 年 11 月，采样率为 32 kHz，布放深度约水下 100 米。处理沿用并修改了 VTUAD 相关开源流程：用 AIS 插值得到船位，只保留 2km 内单船场景做有船样本，用 8km 内无船做背景样本，重采样到 20 kHz 并切为 5 秒。标签来自 AIS，附带 MMSI、到水听器距离、对地航速、对地航向、船长船宽、吃水、航行状态等 17 项元数据。

论文聚焦的子集是 5 类均衡子集，即背景、拖船、油船、货船、客船每类等时长，并做约 80 比 10 比 10 的训练验证测试划分，共重复 5 次。论文正文称还提供全量不均衡、大时长全量、每类 5 小时小规模与 12 类等划分，但本次解读只复述主实验用的 5 类均衡链路。

以下导读帮助建立从水下录音到类别预测的整体因果，先看左侧水下场景如何变成声谱图，再看右侧数据集如何支撑模型，最后对比下方两种划分对评估的影响。

> **看图路径：** 1. 先看上方面板从未知船噪声经水听器到声谱图再到分类模型的预测主路径；2. 再看下方左右对比随机切分与按 MMSI 切分的船只颜色跨划分共享情况；3. 确认右侧 ONC 数据库中音频与 AIS 共同作为 UniqueShip 来源的箭头关系

[![原论文 Fig. 1：We introduce UniqueShip, a large, labeled, and publicly-available Underwater Acoustic Target…](https://arxiv.org/html/2609.13659v1/intro_graphic_v2.png)](https://arxiv.org/html/2609.13659v1/intro_graphic_v2.png)

*论文图 1。原论文 Fig. 1:：“We introduce UniqueShip, a large, labeled, and publicly-available Underwater Acoustic Target Recognition (UATR) dataset sourced from the Ocean Networks Canada (ONC) repository.”。*

该图上方面板显示未知船噪声被水听器接收后转为音频声谱图，输入分类模型输出 5 类概率，UniqueShip 作为大而有标签的训练库来自 ONC 的音频与 AIS。下方面板左侧显示已有数据集用随机采样切分，同一颜色代表同一船源，训练验证测试共享船源即数据泄漏；右侧显示 UniqueShip 用更大的多样池并按船舶编号即 MMSI 切分，3 个划分无共享船源。这 1 对比直接对应后文 3 条划分规则，也是理解所有分数差异的前提。

### 隔离规则与声学参数如何配合？

本节先把组合机制讲清，再落到可复现参数。第一组是数据泄漏与按 MMSI 划分。

**数据泄漏 × 按 MMSI 划分：** 数据泄漏指同一艘船或相邻背景片段同时进入训练与测试，使模型靠记忆个体声纹拿高分；按 MMSI 划分指同一海上移动业务标识的全部样本只能落在同一划分，分工是前者描述评估失效机制，后者提供隔离手段，搭配理由是船舶声纹具有个体持续性，只有身份级隔离才能逼模型学类别级差异，组合意义是把测试还原为对未见船舶的泛化测试。

操作上，有船样本按 MMSI 整体分配，背景按天整体分配，论文还要求显式提供执行该约束的划分。背景按天的原因是连续背景按天切才能避免相邻片段泄漏，而仅按 MMSI 分组船仍可能残留时间泄漏，论文在未来工作里也承认严格按天 disjoint 可能揭示残余泄漏。第二组是纳入半径与排除半径。

**纳入半径 × 排除半径：** 纳入半径负责判定多近的船可作为有船样本收录，排除半径负责判定多远无船才能算背景样本，分工是一个管正样本的距离上限，一个管负样本的纯净下限，搭配理由是近距离船声易混入背景、远距离船声会污染背景标签，组合意义是用 2km 单船纳入加 8km 背景排除得到更干净的背景与更明确的单船片段。

论文在 UniqueShip 中用 2km 单船纳入半径关联 AIS 元数据，用 8km 排除半径判定背景，即 8km 内无船才算背景，这比 DeepShip 与 VTUAD 的排除半径更大，目的是得到更安静的背景。补充细节是有效场景要求 2km 内一艘船且 4km 内无其他船，背景长于 22 小时的区间被剔除，认为系误标。第三组是声谱图与 Mel 滤波器组。

**声谱图 × Mel 滤波器组：** 声谱图指对短时傅里叶变换幅度做 90 dB 动态范围压缩后的时频图像，Mel 滤波器组指在频率轴上按人耳与水声能量分布做非线性合并的滤波，分工是前者保留原始时频结构，后者压缩高频并突出低频船舶谐波，搭配理由是船舶辐射噪声能量集中在低频且 backbone 需要近似方形的图像输入，组合意义是形成更适合视觉骨干微调的 Mel 声谱图输入。

实现上先去直流并加窗去边缘不连续，再做 90 dB 动态范围的短时傅里叶变换，英文名为 Short-Time Fourier Transform，缩写为 STFT；STFT 用 512 点窗 50% 重叠，Mel 用 1024 点窗加 100% 补零与 75% 重叠，使输出近似方形以便缩放到 224 乘 224 或 256 乘 256。第四组与第五组分别是船舶多样性与音频总时长、Mundlak 分解与船舶元数据。

**船舶多样性 × 音频总时长：** 船舶多样性指不同 MMSI 的独立声源个数，音频总时长指同一批船被录了多久，分工是前者提供声纹与物理参数的分布宽度，后者提供同一声纹的重复观测，搭配理由是重复听同一艘船主要降低噪声而不增加类别边界信息，组合意义是消融显示船数翻倍增益约为时长翻倍的 2 到 3 倍，从而指导优先采集新船而非堆时长。

**Mundlak 分解 × 船舶元数据：** 船舶元数据指 AIS 中的距离、航速、船长、吃水等连续与类别变量，Mundlak 分解指把每个变量拆为该 MMSI 的均值与样本偏离均值的残差，分工是前者提供原始观测，后者分离固定船特征与单次捕获条件，搭配理由是直接用均值易与身份记忆混淆，组合意义是在不共享 MMSI 时仍能验证物理特征本身对分类难度的可泛化预测力。

这些组合共同决定后文实验：划分决定评估是否可信，半径决定样本纯净度，时频参数决定 backbone 输入，消融与元数据分析分别验证多样性价值与难度来源。

### 基线模型如何从声谱图学到船型？

训练的输入是预处理后的声谱图或 Mel 声谱图，输出是 5 类船型的交叉熵损失下的类别概率。骨干选用图像预训练的轻量视觉模型，包括基于卷积的 MobileNetV3-Small 与基于变换器的 SwinV2-Tiny 和 ViT-B/16，每个骨干后接浅层两层分类头。论文报告的优化设置为微调 30 轮，用 AdamW 优化器与交叉熵损失，权重衰减因子 0.01，学习率 1e-6 并在验证损失平稳时除以 5。STFT 与 Mel 的窗长重叠如前节所述，输入缩放到 MobileNet 与 ViT 的 224 乘 224、Swin 的 256 乘 256。评估用五折在 MMSI 不重叠划分上取平均，指标为准确率与 F1，方向均为越高越好。

需要指出的缺项是论文未报告 batch 大小、学习率 warmup、数据增强、类别采样器与早停 patience 的具体数值，也未说明分类头维度与 dropout，不能从骨干名称推定这些实现。训练阶段冻结与更新的表述仅为在预训练骨干上加头微调，未说明是否冻结骨干底层，因此复现时应默认全参数微调并记录实际显存与耗时。

以下导读帮助把时频参数与模型输入对应起来，先横向看船型差异，再纵向看两种变换差异。

> **看图路径：** 1. 对比上下两行 STFT 与 Mel 在低频能量集中与高频压缩上的视觉差异；2. 横向比较拖船客船货船油船与背景五列在 0 到 5 秒内的纹理连续性；3. 观察右侧色标确认振幅单位为相对最大值的分贝数

[![原论文 Fig. 3：Spectrograms (top) and Mel spectrograms (bottom) from UniqueShip 5 Class subset after preprocessing…](https://arxiv.org/html/2609.13659v1/uniqueship_examples_with_timefreq.png)](https://arxiv.org/html/2609.13659v1/uniqueship_examples_with_timefreq.png)

*论文图 3。原论文 Fig. 3:：“Spectrograms (top) and Mel spectrograms (bottom) from UniqueShip 5 Class subset after preprocessing for input into baseline models (Sec. IV).”。*

该图为 5 类子集预处理后的示例，上行是 STFT 声谱图，下行是 Mel 声谱图，横轴为 0 到 5 秒时间，纵轴为频率，右侧色标为相对最大值的分贝振幅。可以看到低频能量集中、背景相对平坦而有船样本存在线谱与纹理，Mel 在高频压缩后低频细节更适合方形缩放输入。这解释了后文 Mel 在多数骨干上优于 STFT 的现象，但不能单独证明 Mel 必然在所有部署上最优。

### 数据规模、划分与对照条件如何固定？

数据协议是复现的关键。UniqueShip 全量被报告为包含 2460 小时船辐射音频与 977 小时背景，4218 艘独特船舶，11 个船类加 1 个背景类，近 2,500,000 个 5 秒样本，覆盖 2779 天。主实验用 5 类均衡子集，保持全部 MMSI 并让每类等时长，该子集在时长上被描述为 DeepShip 的 4 倍以上、船数上为 12 倍，并比 Oceanship 时长大约 70%。划分是约 80 比 10 比 10 的训练验证测试，共 5 个重复，约束为船按 MMSI 不跨划分、背景按天不跨划分。

对照条件分为两类：对 DeepShip 与 VTUAD，用其已发表元数据重建无泄漏划分，与常规随机划分对比， backbone 固定为 Swin，变换固定为 STFT 与 Mel，同样做 5 个 80 比 10 比 10 划分并报告均值方差，VTUAD 还保留其已发表单划分做参照；对 UniqueShip 自身，用同一 5 类均衡数据分别做无泄漏划分与朴素随机划分，比较 MobileNet、ViT、Swin 在两种变换下的变化。消融固定 Swin backbone，一组固定每类 5 小时总时长而改变可用 MMSI 比例，另一组固定 3175 个 MMSI 而改变每类音频时长并大致保持总训练迭代数，用对数横轴看准确率斜率。

元数据分析固定最优声学模型即 Swin 加 Mel，汇集五折验证与测试的 122878 个有船样本，用 CatBoost 从元数据预测该样本是否被分对，基线为全猜对的多数类准确率。

先提出本节要回答的规模问题：在同为 ONC 来源下，UniqueShip 是否在船数与时长上形成量级差异，表前比较需固定统计口径为全量与主子集，指标方向是船数越多、时长越大则覆盖越广，但均衡性与纯净度同样重要。

| 内容 | 船舶音频时长 | 背景音频时长 | 独特船舶数 | 含背景总时长 |
| --- | --- | --- | --- | --- |
| UniqueShip 全量 | 2460 小时 | 977 小时 | 4218 艘 | 3437 小时 |

表后解释是该规模使按 MMSI 划分后每折仍有足够未见船舶做测试，这是小数据集无法做身份隔离评估的前提，具体代价是论文承认剔除了纳入半径内多船共存片段并只做最小去噪，因此多船重叠与部分空标签或错标签未被解决，未胜出项是客船仅 109 个 MMSI 使其元数据结论最易受偏。关于数据集是否当前可下载，本次无可验证资源状态，不做可用断言。

### 泄漏让分数虚高多少？

本节测的是划分方式对测试分数的影响，与谁比是同一数据同一模型下随机划分对比身份隔离划分，条件一致指 backbone、变换、训练轮数固定，只改划分。指标方向是准确率与 F1 越高越好，但此处更高若来自泄漏则为虚高。论文报告在两个已有数据集上的随机划分比谨慎划分高 10-48 个百分点，具体到 Swin 结果为 DeepShip 的 F1 下降 13-14 点、VTUAD 下降 61 点。在 UniqueShip 自身上，所有模型设置的平均准确率因泄漏上升 0.08-0.21，F1 上升 0.09-0.21，无泄漏下 Swin 加 Mel 最强为 0.665 准确率。

先提出比较问题：若只改划分而不改数据与模型，虚高是否在不同数据集与骨干上稳定出现，公平条件是固定 Swin 与两种变换并做五折平均，指标方向需同时看准确率与 F1 以防类别不均衡掩盖。

| 对照 | 划分方式 | 准确率变化 | F1 变化 | 可运行策略含义 |
| --- | --- | --- | --- | --- |
| 已有数据集总体 | 随机对比谨慎划分 | 增加 10-48 百分点 | DeepShip 降 13-14 点，VTUAD 降 61 点 | 随机划分不可部署 |
| UniqueShip 全模型平均 | 朴素随机对比无泄漏 | 增加 0.08-0.21 | 增加 0.09-0.21 | 无泄漏划分为可部署基准 |
| 最强基线 | Swin 加 Mel 无泄漏 | 准确率 0.665 | 多数类基线 0.617 | 实际可运行的报告值 |

表后解释是主要收益为识别出评估失效而非模型改进，泄漏下 ViT 与 Swin 可达 0.82 以上而无泄漏回落到 0.62-0.66 区间，具体代价是无泄漏分数更低且方差更大，DeepShip 无泄漏 STFT 准确率标准差达 0.091 量级，说明小船数下折间差异大。未胜出项是 MobileNet 在无泄漏下明显弱于两种变换器，且 STFT 在所有设置下弱于 Mel，但论文未测量延迟与显存，不能从准确率推定轻量模型无部署价值。

以下导读帮助理解错误集中在哪里，先看对角线易分项，再看非对角线互混项。

> **看图路径：** 1. 先看对角线确认背景 0.92 与拖船 0.77 为最易识别的两类；2. 再看货船与油船交叉格 0.22 与 0.40 的互混程度；3. 核对横轴为预测标签纵轴为真实标签的行归一化读法

[![原论文 Fig. 8：Confusion matrix across all samples in the “Main 5 - Bal.” split with the top performing model in…](https://arxiv.org/html/2609.13659v1/confusion_matrix.png)](https://arxiv.org/html/2609.13659v1/confusion_matrix.png)

*论文图 8。原论文 Fig. 8:：“Confusion matrix across all samples in the “Main 5 - Bal.” split with the top performing model in Table III (Swin model with Mel spectrograms).”。*

该混淆矩阵来自 5 类均衡划分上 Swin 加 Mel 跨 5 个种子的合并结果，横轴为预测标签，纵轴为真实标签。可见背景为 0.92 最易识别，拖船 0.77 次之，货船 0.70，油船仅 0.46 且有 0.40 被判为货船，客船 0.54 且有 0.30 被判为拖船。这支持货与油声学相似的判断，但属于有限解释，论文未验证是否由船长与航速分布重叠导致，不能当作因果结论。

### 船数翻倍与时长翻倍谁更值？

消融测的是在固定另 1 维度时，单独增加船数或时长对准确率的对数线性斜率。条件是 backbone 固定为 Swin，变换分 STFT 与 Mel 两条曲线，船数消融固定每类 5 小时而改变 MMSI 比例，时长消融固定 3175 个 MMSI 而改变每类时长并大致保持总训练迭代数。论文报告船数翻倍带来 2.4-2.6 个百分点提升，时长翻倍仅 0.8-1.3 点，前者约为后者的 2 到 3 倍，且两组均呈对数线性趋势。

先提出比较问题：在总训练计算大致不变下，增加独立声源与重复听同一批船何者更有效，公平条件是分别固定时长与船数并用对数横轴估计每翻倍斜率，指标方向是斜率越大则该维度的边际回报越高。

| 消融维度 | 固定条件 | 每翻倍准确率提升 | 趋势形态 | 骨干与变换 |
| --- | --- | --- | --- | --- |
| 船数 MMSI 比例 | 每类 5 小时 | 2.4-2.6 百分点 | 对数线性 | Swin，Mel 与 STFT 两曲线 |
| 总时长比例 | 3175 个 MMSI | 0.8-1.3 点 | 对数线性 | Swin，Mel 高于 STFT |
| 策略含义 | 优先采新船 | 约为时长价值 2 到 3 倍 | 基线偏移因满量时长不同 | 实际可运行的采集建议 |

表后解释是主要收益为明确采集优先级：与其反复录已覆盖的船，不如扩大 MMSI 覆盖，具体代价是新船采集需处理 AIS 关联、单船场景筛选与长尾类别不均衡，且客船等少数 MMSI 类别难以快速翻倍。反例是时长并非无用，在低时长区曲线仍上升，只是斜率更平。未评测边界包括多船重叠场景、不同纳入半径下的斜率是否稳定，以及超过当前最大时长后是否饱和。

以下导读帮助核对斜率不是末点偶然，先看虚线趋势与实线的贴合，再看两子图基线偏移原因。

> **看图路径：** 1. 先读上图横轴 MMSI 比例与下图横轴总时长比例的对数刻度起点差异；2. 对比红蓝两条曲线分别代表 Mel 与 STFT 在同一横轴下的纵轴准确率位置；3. 核对图中标注的每翻倍 2.4% 与 2.6% 及 0.8% 与 1.3% 虚线趋势斜率

[![原论文 Fig. 4：MMSI (top) and duration (bottom) ablation studies on UniqueShip subsets using the Swin backbone.](https://arxiv.org/html/2609.13659v1/count_and_duration_updated.svg)](https://arxiv.org/html/2609.13659v1/count_and_duration_updated.svg)

*论文图 4。原论文 Fig. 4:：“MMSI (top) and duration (bottom) ablation studies on UniqueShip subsets using the Swin backbone.”。*

该图上为 MMSI 消融，下为时长消融，横轴为比例的对数刻度，纵轴为准确率百分比，红为 Mel 蓝为 STFT，黑色虚线为对数趋势。上图标注每翻倍 2.4% 与 2.6%，下图标注 0.8% 与 1.3%，两子图 100% 处基线不同是因为满量时长定义不同所致。这支持多样性优先于数量的判断，但总体趋势不等于每一步都单调，中间存在平台，需按证据理解为平均斜率。

### 元数据能预测哪些样本难分？

元数据分析测的是不用音频、只用 AIS 与记录条件能否预测声学模型是否分对。做法是汇集 122878 个有船样本的留出预测，用 CatBoost 从元数据学习二分类，目标是预测 Swin 加 Mel 是否正确，多数类基线为 0.617。为分离船级与样本级效应，采用 Mundlak 分解，把每变量拆为 MMSI 均值与偏离均值的残差。论文报告含 MMSI 时准确率约 0.768，加更多元数据到 0.802，说明模型优先记住 MMSI；只用距离几乎不超基线，说明在 2km 纳入半径内距离单独价值很小。

用全量元数据不含 MMSI 可恢复到 0.766，Mundlak 下到 0.778。SHAP 显示船长通常最重要，其次为航速、距离、吃水，且存在类内差异，例如大船长对油船拖船为负向、对客船货船为正向。

先提出比较问题：在允许与不允许泄漏 MMSI 时，身份记忆与物理特征各贡献多少，公平条件是同一 122878 样本与五折交叉验证，指标方向是预测分对与否的准确率越高则该元数据越能编码难度。

| 特征配置 | 含 MMSI 准确率 | 去 MMSI 准确率 | Mundlak 准确率 | 多数类基线 |
| --- | --- | --- | --- | --- |
| 距离吃水等单变量 | 约 0.768-0.784 | 约 0.617-0.627 | 约 0.675-0.706 | 0.617 |
| 全量元数据 | 0.802 | 0.766 | 0.778 | 61.7% |
| 最强声学基线参照 | Swin 加 Mel 为 0.665 | 去背景后基线更低 | 提升 16 百分点 | 77.8% 对比 61.7% |

表后解释是主要收益为证明难度主要编码在船舶身份与物理特征而非距离，具体代价是该分析继承 AIS 相关性偏置，且客船 MMSI 最少使类内 SHAP 最不可靠。反证来自附录的无泄漏 CatBoost：训练测试不共享 MMSI 时含 MMSI 列跌回 0.617 附近，说明记忆 MMSI 无法泛化到新船，而 Mundlak 仍优于不用 Mundlak，支持其捕获的是可泛化特征而非隐式泄漏。但这属于支持性证据而非因果证明，未验证用元数据加权采样能否真正提升声学模型，也未测量回归船长航速等逆任务的可行性。

### 复现应先固定哪些步骤？

复现先做划分而非调模型。第一步按论文重建场景：解析 AIS 为 JSON，清洗无效报文，对同船报文插值，在 2km 内单船且 4km 内无他船时标为可分类区间，在 8km 内无船时标为背景，并剔除大于 22 小时的背景区间。第二步按区间抽 WAV，重采样到 20 kHz，切 5 秒，去直流加窗后生成 STFT 与 Mel 两套输入，STFT 用 512 点窗 50% 重叠，Mel 用 1024 点窗加补零与 75% 重叠，缩放到对应骨干尺寸。第三步执行防泄漏分折：有船按 MMSI 分，背景按天分，做约 80 比 10 比 10 的五折，保留折内类别均衡逻辑。

第四步用相同优化设置跑 MobileNet、ViT、Swin 各两种变换，先复现无泄漏 0.665 附近的最强值，再在同一数据上做随机划分复现 0.08-0.21 的虚高差。第五步跑两组消融：一组固定时长变 MMSI 比例，一组固定 MMSI 变时长并保持总迭代大致不变，在对数横轴拟合每翻倍斜率。第六步跑 CatBoost 元数据预测，注意区分允许 MMSI 泄漏与严格不共享 MMSI 两种训练划分，分别复现 0.802 与 0.617 附近的行为差。

硬件与统计需按原文交代：论文未报告 GPU 型号、显存、训练时长与推理开销，复现时应自行记录每折耗时、批量大小与随机种子，不能把总体趋势当作每折必现。论文正文称代码库分下载、场景解析、音频抽取、元数据生成、清洗分折五大步骤，但本次无可验证的仓库可达性，不把仓库可用作为复现前提，缺失的超参数应明确记为缺项而非按默认值猜测。

### 何时值得用这套方法？

当任务是开放水域对未见船舶做船型分类，且数据来自连续水听器加 AIS 时，值得采用按 MMSI 隔离加按天隔离背景的评估，并优先扩大 MMSI 而非堆时长。支持是泄漏对照显示随机划分虚高 10-48 个百分点，DeepShip 与 VTUAD 的 F1 分别下降 13-14 点与 61 点，UniqueShip 自身泄漏差为准确率 0.08-0.21，消融显示船数翻倍斜率 2.4-2.6 点约为时长 0.8-1.3 点的 2 到 3 倍，元数据预测显示全量物理特征可达 0.766-0.778 而距离单独几乎无效。这些共同说明评估可信度与采集广度比单纯加深网络更关键。

限制是结论只在单船 2km 纳入、背景 8km 排除、5 秒片段、最小去噪条件下验证，未覆盖多船重叠、其他半径、更长上下文与强去噪流程，也未验证按天严格 disjoint 是否还有残余泄漏。还需补的验证包括在新部署水听器上的跨站泛化、在 12 类全量上的长尾表现，以及用船长航速等元数据指导采样的闭环增益。教学上的常见误解是把背景按天误认为多余，实际上相邻背景的自相似性与船声同样会导致泄漏；另一个误解是把 Mel 优于 STFT 当作性质证明，实际上只是当前骨干与参数下的经验结果。

复述时应保留单位与聚合口径：百分点差与相对百分比不同，0.665 是五折平均准确率，0.617 是去背景后猜对的多数类基线，77.8% 对比 61.7% 是元数据预测任务而非声学分类本身。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.13659v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-15/)
