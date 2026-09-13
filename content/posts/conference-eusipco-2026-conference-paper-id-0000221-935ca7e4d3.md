---
title: "ANALYSIS-DRIVEN PROCEDURAL GENERATION OF AN ENGINE SOUND DATASET WITH EMBEDDED CONTROL ANNOTATIONS"
date: 2026-09-13
draft: false
description: "该文用转角域重采样加阶次跟踪从实录提取随转速和扭矩变化的谐波指纹，再驱动谐波加噪声合成器生成带四通道嵌入标注的音频，证据是 8 个子集上阶次结构随工况对应且基线网络可收敛，代价是高阶细节为参数化改动而非逐频复刻。"
tags: ["数据集", "数据增强", "信号处理", "音频生成"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000221"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c1070459eda8675199ae549f70b9ad3535bccf0c91608a244c5d4e8fe4d726dd"
paper_digest_api_reader_plan_sha256: "2af3a59454d2f20c962a623784784b3f73d94d62f5dd1fd8cd28eb5627896073"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9ffd5ebaca9fae859e85b881af8df4ba3741ab60e46386773db384df45b71930"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4b0d1a2ca4dc1ef2bd8b277f96c07ac12b3ca8e8b4e670d0dee2e2b5875c8260"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "15a92c28394dadea1f01e3d5550fbe69881b37b63f20934925866b8cdfe6dd17"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b96634a264badf1a122ce82db9d4c93cff5880b8079ee6fab3f01d8cb7abf7db"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"task","id":"task.audio-generation","label":"音频生成"}]
paper_digest_primary_task: "音频生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 只用 5 到 10 分钟实录，如何扩出 19 小时还带逐采样标注的引擎声

> 英文题目：*ANALYSIS-DRIVEN PROCEDURAL GENERATION OF AN ENGINE SOUND DATASET WITH EMBEDDED CONTROL ANNOTATIONS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000221`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf)

标签：#数据集 #数据增强 #信号处理 #音频生成

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Doerfler, Robin：机构信息未能从会议 PDF 纯文本可靠映射
- Wyse, Lonce：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

发动机声音建模的输入是转速与转矩等工况控制量，输出是干净且与控制样本级对齐的音频，难点在于实车采集成本高、噪声混杂且真值难以同步获取。该框架先对实录做角度域重采样与频率对齐分析，提取各阶次随转速与转矩变化的幅值与位置频偏指纹，为后续合成提供参数表。接着指纹经双线性插值驱动谐波加噪声合成器与共振器组，重构确定性谐波并叠加参数化噪声与排气共振，实现可控音色变化。最后将转速与转矩归一化编码进多通道音频流，使控制真值随音频样本精确重建，无需外部元数据文件。在多样控制轨迹的参数化生成条件下，高扩展轨迹的扩展倍数指标为30×，高于低扩展轨迹的扩展倍数指标15×。与直接录音或无约束过程音频相比，该链条以物理阶次结构约束生成并保留参数化复杂度调节能力，支撑系统化增强与算法评测。该结论适用边界受限于所用性能车动力配置与工况轨迹池，尚未验证向电动车、其他缸数或主观听感的外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/rdoerfler/engine-order-analysis> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.16883336> → <https://zenodo.org/doi/10.5281/zenodo.16883336> — 暂时无法访问
- 数据相关资源：<https://huggingface.co/datasets/rdoerfler/procedural-engine-sounds> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决什么矛盾？

这篇解读的输入是论文正文证据，目标是让刚进入音频方向的研究生能复述方法、条件和验证逻辑。必须保留的信息是分析如何从实录提取特征、合成器如何受控生成、标注如何嵌入、数据集规模与覆盖范围是什么、验证做了哪三件事。输出是一套可核对的中文技术说明，不做超出证据的评价。
论文研究的任务是可控的发动机声音建模。汽车行业既需要做噪声振动控制和虚拟样机，也需要做主动声音设计，还出现了数据驱动的合成方法。

这些应用的共同要求是大量干净的音频，并且每个采样点都知道当时的发动机工作状态。白话说，就是声音和油门、转速、负荷要对得上。
矛盾在于实车录音很难满足这个要求。录音成本高，需要专用测量设备，环境噪声和机械噪声不可避免，而真实的转速和扭矩往往需要专有设备才能读到。已有的公开数据集多为分类或检测而录，录音条件不一，时间对齐的标注粗糙或缺失，也不能在受控条件下系统地增广。

程序化合成可以生成可控、可扩展、标注完美的数据，但前提是声音要足够像真的，否则练出来的模型没有实用价值。
本文的选择是分析驱动的程序化生成。先从少量真实录音里系统地提取谐波特征，再用参数化合成器在新的控制轨迹上重新生成。这样既保留真实声学指纹，又获得干净、可控、可扩展的标注数据。论文用这个框架做出了程序化发动机声音数据集，并验证了它保留了特征性的谐波结构，能支撑数据驱动建模。

### 已有路线在输入、目标和监督上有什么不同？

理解本文位置，需要按同输入、同目标、同监督来对照，而不是只按合成好听与否来比较。传统发动机声学建模服务于噪声振动控制和虚拟样机，输入是物理结构和测量信号，目标是预测或复现噪声特性，监督多来自受控测量。主动声音设计则目标不同，它要在车内或虚拟环境中塑造期望的听感，输入常是阶次结构和谐波配置，评价更偏向主观和场景适配。
数据驱动的发动机声音合成是第 3 条路线。

它的输入是音频加工作参数，目标是学到从参数到声音的映射，监督依赖大规模带标注音频。论文引用的近期工作包括实时神经网络仿真、程序化发动机声的神经合成、面向主动声音设计的可微数字信号处理方案。这条路线最缺的不是模型，而是数据。
在数据侧，已有公开音频事件、车内声分类、工业机器异响和电机声数据集，任务多为分类、检测或域泛化。

它们的输入是真实录音，标注是事件标签或粗粒度状态，没有逐采样的转速和扭矩真值，也混入了录音链路和环境差异。因此不能直接拿来训练需要精确控制的发动机合成器，也不能用来系统评估算法在明确定义工况下的行为。
本文与上述工作的区别在于监督的构造方式。它不收集更多带噪实录，而是从少量实录提取随转速和扭矩变化的阶次幅值与偏移，再用合成器生成新数据，并把控制量直接编码进音频流。

这种做法的适用条件是研究者已有少量目标车型的录音和转速扭矩记录，愿意用信号处理保真度换取规模和标注精度。

### 要从声音里提取什么表示，才能同时管住音高和音色？

发动机声音的主导特征是谐波结构。论文用发动机阶次来描述它。白话说，阶次就是把频率表示为曲轴转速的倍数。四冲程发动机每两转点火 1 次，因此会出现半整数间隔的成分。转速用每分钟转数表示，除以 60 就得到曲轴旋转频率，单位是赫兹。

阶次乘以这个基频，就是该成分的标称频率。
实际阶次并不严格落在标称位置。机械耦合、燃烧不均匀、热力学效应和结构共振都会让真实峰值偏离理想位置，幅度也随转速和扭矩变化。因此论文要提取的表示是每个阶次的位置偏差和幅度，把它们写成转速和扭矩的函数。这就是后文所说的声学指纹。

举例说明，同一台发动机在怠速和急加速时，基频不同，各阶次的相对强弱也不同，只有把偏差和幅度都记下来，合成时才能还原换挡、巡航、发动机制动等不同状态。
这个表示必须满足两个要求。第一，不同转速下可比。如果分析网格随转速漂移，就分不清变化来自信号还是来自分析方法。第二，可驱动合成。

提取出的表格要能被当前转速和扭矩索引，经过插值后直接控制振荡器频率和幅度。这就引出了转角域重采样、频率对齐分析和质心跟踪 3 个分析步骤，以及谐波加噪声合成器的设计。

### 整个框架如何从 5 分钟实录走到 19 小时标注数据？

框架包含 3 个主要部分。第一是谱分析，从真实录音提取随工作参数变化的谐波特征。第二是参数化合成，用提取的特征生成受控信号。第三是同步多通道编码，把真值标注嵌入音频流。这样有限的真实录音就能扩展为干净、大规模、逐采样对齐的数据集，同时保持声学真实性。

沿一个样本走一遍有助于建立整体感。假设有一段 16 千赫兹采样的实录和同步记录的转速扭矩包络。系统先按固定长度分帧，去掉转速为零的熄火帧。对每 1 帧估计平均基频，做转角域重采样，再做频率对齐的快速傅里叶分析，跟踪每个阶次的真实位置和幅度。所有帧累积起来，就得到每个发动机配置下偏差和幅度随转速扭矩变化的表格。

生成阶段不再需要原始波形。给定一条新的转速扭矩轨迹，系统在每个合成时刻查表并做双线性插值，得到当前各阶次的幅度和偏差，驱动 128 个振荡器做加法合成，再叠加湍流噪声、突发噪声并送入共振器组。左右声道用独立的噪声和共振实现，得到去相关的立体声。同一时刻的转速和扭矩被归一化、量化并写入第三和第四声道，因此音频文件自身就携带逐采样真值，不需要外部元数据文件。

论文报告用每台车 5 到 10 分钟的音频提取音色特征，再跨越从 2.5 小时多车多工况录音中汇总的控制轨迹池做扩展，加上共振器和噪声的参数变化，最终得到约 19.0 小时、5935 个文件、约 24.5 吉字节的数据，组织为 8 个声学上可区分的子集。这种设计把音色来源和工况来源解耦，是实现 15 到 30 倍增广的关键。

### 分析端如何让不同转速下的阶次可以直接比较？

分析管线从分帧开始。音频内容按 65536 个采样点分帧，在 16 千赫兹下对应 4.096 秒。转速为零的帧被排除。这个帧长选择兼顾了频率分辨率和 1 帧内转速变化的可处理性。
第一步是转角域重采样。

记瞬时基频为转速除以 60。为防止转速变化时阶次在频点间漂移，每 1 帧被时间弯曲到基频恒等于帧平均值的域，等效为按均匀曲轴转角增量重采样，而不是按均匀时间采样。具体做法是根据每步基频与平均基频的比值做累加，得到在原始信号中的连续读取位置，再用 3 次样条插值求值。3 次样条比重采样常用的线性插值更平滑。直观理解就是转得快的区间被拉长，转得慢的区间被压缩，使得 1 帧内所有周期看起来等长。

第二步是频率对齐的快速傅里叶分析。固定窗长做不到跨转速可比，因为基频变化时每个阶次落在不同的小数频点位置，泄漏形态也不同。论文让窗长随基频缩放。采样率除以基频再乘以周期数得到布莱克曼窗长，再补零得到变换长度。论文取周期数为 20，补零因子为 4，因此每个整数阶次占 80 个频点，基频落在第 80 个频点，阶次序号乘以 80 就是其理想频点序号。

每个阶次拥有相同的 40 点邻域、相同的主瓣形状和相同的邻居距离，阶次间或转速间的差异反映的是信号内容而非网格几何。

**发动机阶次 × 曲轴旋转频率：** 发动机阶次负责把频率表示为曲轴旋转频率的半整数倍，它的分工是给出与转速无关的相对位置；曲轴旋转频率负责把转速换算为赫兹，它的分工是给出随工况伸缩的绝对尺度；两者搭配的原因是转速变化时绝对频率全在漂移，只有相对阶次位置稳定，组合意义是分析与合成都能锁定在固定阶次序号上比较和重建。

第三步是基于质心的阶次估计。真实阶次偏离标称位置，因此理想频点只是中心。论文在每个理想位置向两侧半整数阶次中点扩展为分析区，施加中心增益为 1、边缘平滑渐变的窗以抑制邻近阶次泄漏，同时保持围绕理想位置的对称性，再计算加权质心得到小数频点位置，幅度则用三点抛物线插值恢复。质心法比直接找峰更不易被邻近阶次或噪声的局部极大值带偏。位置偏差被归一化为估计位置除以基频序号再减去标称阶次，正值表示偏高，负值表示偏低。所有帧的偏差和幅度对就构成随转速和扭矩变化的声学指纹。

**转角域重采样 × 频率对齐快速傅里叶分析：** 转角域重采样负责把非均匀转速下的时间信号拉伸压缩到等转角间隔，它的分工是消除 1 帧内转速漂移造成的频谱展宽；频率对齐快速傅里叶分析负责让窗长和补零随基频缩放，它的分工是让每个阶次始终落在固定序号的频点上；搭配原因是只做其一仍会留下帧内漂移或跨转速网格不一致，组合后不同转速下的阶次幅值和偏移才可直接比较。

### 合成端如何把指纹表变成随工况变化的声音？

合成器从指纹表出发，叠加随机和共振成分。每个阶次实例化一个正弦振荡器，阶次集合从 0.5 到 64.0 按 0.5 步进，共 128 个振荡器。在每个合成时刻，当前转速和扭矩通过双线性插值查表，得到时变的幅度和偏差，驱动振荡器组。时域波形是各阶次正弦的加和，相位是对瞬时频率随时间的积分。瞬时频率等于标称阶次加存储偏差后再乘以曲轴频率。

这种相位累加写法保证了转速连续变化时频率轨迹连续，不会出现跳变。
指纹只刻画确定性谐波结构，不包含让真机有质感的随机和共振内容。论文用两类噪声增广补上。湍流噪声用粉红噪声幅度调制谐波总和，控制燃烧逐循环差异带来的幅度扰动，调制深度由参数控制。突发噪声用低通白噪声乘以锁定在低阶曲轴振荡相位的包络，模拟气门事件和进气共振的冲击性，混合权重、形状指数和滤波截止频率按发动机配置启发式调整。

噪声源和共振器组在左右声道独立实例化，产生两个去相关的谐波模型实现，类比两条排气路径共享气缸压力但独立辐射。
排气共振被建模为并联的卡普拉斯强式共振器组。每个分支是带反馈增益和延迟的梳状结构，共享输入并叠加输出，反馈环内还有统一控制高频衰减的阻尼滤波器。延迟初值按典型排气管和腔体长度设置，增益和阻尼再对照参考录音经验调整，共振器数量、增益、延迟和阻尼特性都作为可调音色参数暴露给用户。

**谐波合成 × 共振器建模：** 谐波合成负责用 128 个正弦振荡器重建确定性的阶次结构，它的分工是还原随转速和扭矩变化的音高骨架；共振器建模负责用并联反馈延迟模拟排气管道和腔体共振，它的分工是补上决定音色的共振染色；搭配原因是只做谐波会干瘪不像真机，组合意义是骨架可控而音色仍有物理感知的变化空间。

**湍流噪声 × 突发噪声：** 湍流噪声负责用粉红噪声调制谐波总和的幅度，它的分工是模拟燃烧逐循环差异带来的缓慢起伏；突发噪声负责用低通白噪声叠加锁定在低阶相位的包络，它的分工是模拟气门和进气事件的冲击感；搭配原因是两者时间尺度和触发机制不同，组合后随机成分既有连续抖动又有与曲轴同步的脉冲。

### 控制标注如何做到不需要外部文件也能逐采样对齐？

系统生成 48 千赫兹采样的同步 4 通道音频。第一和第二通道是立体声发动机音频，第三和第 4 通道分别是转速和扭矩控制参数。转速是旋转频率，单位是每分钟转数。扭矩是旋转力，单位是牛米。论文说明转速和扭矩在录音期间通过车辆遥测直接测量得到，生成阶段则由控制轨迹给定。

编码方式是把控制量归一化到负 1 到 1 区间，边界固定为 10000 转每分和 1000 牛米，再按 16 比特分辨率写入专用音频通道。这种写法提供 0.3 转每分和 0.03 牛米的分辨率，可直接从音频流重建工作条件。固定边界的好处是所有文件共用同一映射，解码时不需要查每个文件的元数据。代价是若未来出现超过边界的工况，需要重新定义映射，否则会削波。
这种设计的教学意义在于把标注从外部文件变成信号本身。

常见数据集用表格或时间戳文件记录工况，容易出现采样率不一致、对齐误差或文件丢失。4 通道音频把声音和真值放在同一时钟域，只要音频采样对齐，标注就对齐。研究者拿到文件后只需按同一规则反归一化，就能得到逐采样的监督信号，也可以用自己的录音和同一框架生成扩展数据。

### 本文训练了什么，没有训练什么，验证网络如何搭建？

需要区分两类训练。论文的核心框架本身没有训练神经网络。分析端的重采样、快速傅里叶分析、质心跟踪都没有可学习参数。合成端的振荡器、噪声调制、共振器增益和延迟是按经验和参考录音启发式设置的，论文明确写了混合权重和滤波器按发动机配置启发式调整，共振器参数经验调整以匹配参考录音。因此不能把该框架理解为端到端学习，也不能从参数固定推出输出完全确定，因为噪声成分本身是随机的。

**转速 × 扭矩：** 转速负责描述曲轴每分钟转数，它的分工是决定所有阶次的绝对频率位置；扭矩负责描述旋转力的大小，它的分工是反映负荷并强烈影响各阶次幅值；搭配原因是同一转速下轻载滑行和重载加速的声音完全不同，组合意义是两者共同索引谐波指纹表才能确定当前工作点的完整声音。

为证明生成数据可用于数据驱动研究，论文训练了一个基线可微谐波加噪声合成网络。该网络只从转速和扭矩输入重建音频，参数量为 140 万。它把控制参数经门控循环单元映射为时变参数，控制 128 个谐波声部和 256 个噪声频带，用多分辨率短时傅里叶损失训练 100 轮。完整结构细节指向另 1 篇文献，本文证据只给出上述规模和输入输出关系。
训练组织在 3 个子集上。

子集 A 是直列四缸，以谐波内容为主。子集 B 是 V8 运动型多用途车，有中等噪声和共振器改动。子集 C 是 V8 跑车，有强谐波偏离和共振器变换。三者按信号复杂度递增排列，目的是检验同一建模方法在不同非确定性程度下是否都能稳定训练。论文没有报告该基线网络的学习率、优化器、批量大小和早停阈值的完整超参数，只定义了早停标记为连续 8 轮无显著改善的位置。

因此复现该基线时缺失的训练细节需要回到引用的结构文献或代码核对，不能从模型名称推定实现。

### 数据从哪来，工况覆盖和文件组织如何保证公平？

音色特征来自高性能量产车的录音，覆盖 V8、直列六缸和直列四缸汽油机配置及不同排气系统。每辆车用 5 到 10 分钟音频提取谐波音色特征。控制轨迹来自 2.5 小时跨车辆和发动机配置的录音，场景包括正常和动态驾驶，以及测功机上的系统性工作点采样。这种分离让每种源车音色都能跨越完整控制轨迹池扩展，实现数据增广。
统计分析确认了工作状态覆盖。

下表提出的问题是生成数据的转速和扭矩是否覆盖怠速、巡航、加速、减速、换挡和发动机制动。公平条件是同一统计口径报告最小值、最大值、均值和标准差。指标方向不是越大越好，而是范围要宽且包含边界工况。

| 参数 | 最小值 | 最大值 | 均值 | 标准差 |
| --- | --- | --- | --- | --- |
| 转速 | 0 | 7,007 | 3,171 | 1,714 |
| 扭矩 | -107 | 718 牛米 | 120 | 201 |

表后解释需要同时说明收益与代价。主要收益是转速从 0 覆盖到 7007，均值 3171，标准差 1714，扭矩从负 107 覆盖到 718 牛米，均值 120，标准差 201，负扭矩对应减速和发动机制动，正扭矩覆盖加速和巡航负荷。

代价是这仍是汇总统计，不能证明每个转速扭矩网格都被均匀填满，稀疏角落的合成仍依赖插值。未胜出项是源录音本身的噪声和录音条件差异在框架中被丢弃，生成数据是无噪的，这对训练是优点，但不能直接代表实车部署时的噪声鲁棒性。
文件组织上，生成数据总量约 19.0 小时、5935 个文件、约 24.5 吉字节，分为 8 个声学可区分的子集，片段最长 12.3 秒，残余短片段最短 4.1 秒以支持序列建模。控制轨迹的多样性与参数变化共同提供标准化但多样的开发和评估数据。

论文还用图 1 对比源录音与合成信号的阶次幅度随转速和扭矩的变化，验证基本声学行为是否跟踪工作状态。由于本次没有收到该图像素，只能依据正文归因引用其结论，不能描述曲线颜色或坐标细节。

### 合成声音是否保留了随工况变化的阶次特征？

验证的第一个维度是声学真实性。问题是有限来源分析能否在未见过的控制轨迹上产生代表性的谐波结构。比较对象是源录音与重合成信号的阶次幅度分布。条件是否一致需要小心，因为框架丢弃源噪声并用参数化噪声和共振器替代以获得可控音色变化，所以逐频谱精确重建既不是目标，也不是有意义的成功标准。论文验证的是基本声学行为是否跟踪工作状态。

报告显示发动机特有标记被保留。代表性配置中，V8 点火频率处的 4 阶占主导，发动机制动期间 1.5 阶显现，幅度演化在转速扭矩工作空间上对应。8 个子集上的一致性成立，高阶大于 8 阶的变化反映了超出源材料的参数化改动带来的音色多样性。这种表述是支持而非证明，因为证据是分布层面的结构对应，没有给出逐阶误差或听感评分。
第二个维度是数据是否支撑数据驱动建模。

基线网络在 3 个子集上都稳定收敛，早停时训练与验证差距小。论文认为增广数据提供了 5 到 10 分钟源材料无法提供的规模和工作状态覆盖，转速扭矩标注足以驱动重建，可作为物理 grounded 的控制参数。早停标记从 A 到 C 逐渐提前，与非确定性内容增加一致，论文将其解释为有意义的音色多样性而非单纯扰动，因为噪声注入和共振器变换让转速扭矩到音频的映射存在不可约变化。
下表整理生成规模，比较问题是少量源音频是否 действительно被放大到可用规模。

公平条件是同一框架下比较源时长、扩展倍数、总时长和文件数。

| 来源 | 单机提取时长 | 扩展倍数 | 总时长 | 文件数 |
| --- | --- | --- | --- | --- |
| 单台发动机实录 | 5-10 分钟 | 15-30 倍 | 19.0 小时 | 5,935 文件 |

表后解释的主要收益是每台车只用 5 到 10 分钟提取材料，经多样控制轨迹和参数变化达到 15 到 30 倍增广，总量约 19.0 小时、5935 个文件。具体代价是这依赖控制轨迹池的广度，若轨迹池本身偏向某类驾驶风格，增广仍会继承这种偏置。未评测边界是论文未测量误判率、延迟或推理成本，因此不能承诺这些量得到改善。

训练资源、推理开销与输出帧率需要分开讨论，总体收敛趋势不等于每组每步都成立。

### 参数化改动带来了什么样的可分级复杂度？

验证的第 3 个维度是可控的分级复杂度。论文没有做传统意义下去掉某模块的消融，而是用 3 个子集构成复杂度阶梯。从以谐波为主的 A，到中等噪声和共振器改动的 B，再到强谐波偏离和共振器变换的 C，非确定性内容逐步增加。
测的是什么，是同一基线网络在不同复杂度上的训练动态。与谁比，是 3 个子集之间的早停位置和收敛稳定性。

条件是否一致，网络结构、损失和 100 轮训练预算相同，不同的是数据侧的随机和共振变换强度。指标方向是稳定收敛且训练验证差距小为好，早停提前本身不是变差，而是映射不确定性增加的预期表现。
关键数字在证据中是定性描述而非完整损失表。论文报告 3 条曲线都稳定收敛，早停标记从 A 到 C 逐渐提前。支持的判断是数据提供了足够的规模和覆盖，且标注足以驱动重建。

限制是原文没有给出逐轮损失数值、显著改善的阈值定义和多次随机的方差，因此不能把早停提前的幅度当作精确度量，也不能推广为所有模型都会单调提前。
至少两类论文特有细节值得展开。第一是左右声道去相关设计。噪声源和共振器组在左右通道独立实例化，共享同一气缸压力但独立辐射。这意味着立体声不是单声道复制，评价单声道指标时会低估数据的多样性，训练立体声模型时则需要考虑通道一致性。

第二是嵌入式标注的量化。转速和扭矩用固定边界归一化和 16 比特编码，分辨率分别为 0.3 转每分和 0.03 牛米。下表把编码条件整理为可核对的形式。

| 通道 | 内容 | 归一化边界 | 量化 |
| --- | --- | --- | --- |
| 1-2 声道 | 立体声发动机音频 | [-1, 1] | 16 比特 |
| 3-4 声道 | 转速和扭矩控制参数 | 10,000 转每分和 1,000 牛米 | 16 比特 |

表后解释的主要收益是声音与真值同钟同采样，解码只需反归一化。具体代价是量化引入 0.3 转每分和 0.03 牛米的粒度，对极精细的参数估计任务可能成为下界。

未胜出项是若只用单声道训练，会浪费左右通道独立实现带来的多样性。论文特有的失败条件是若把高阶大于 8 阶的差异当作重建误差，会误判为失败，而原文明确这是为扩展音色多样性做的参数化改动。

### 哪些结论是报告，哪些是推测，还有什么没测？

论文直接报告的是方法流程、数据集规模、工况统计、编码分辨率和定性验证结果。这些可以用原文数字核对。有限解释的是声学真实性。论文用阶次结构对应支持真实性，但没有报告逐阶误差、信噪比、主观听感评分或与真实录音的盲听对比，因此只能说保留了特征性谐波结构，不能说与真机不可区分。
未验证推测需要用可能或待验证表达。

参数估计、逆向标注、噪声振动诊断、数据驱动合成无需手动调参等应用方向，是论文提出的可能用途，不是已验证的结论。相关性不是因果，分布对应不等于在所有工况下逐采样精确。总体趋势不等于每组每步都成立，8 个子集上成立不等于任意新车型无需调整就能成立。
缺失证据不是技术错误，但复现时要明确缺项。

基线网络的优化器、学习率、批量大小、损失权重、早停显著改善阈值、多分辨率短时傅里叶损失的具体分辨率，都未在本文证据中给出，需要回到引用的结构文献核对。共振器增益、延迟、阻尼、噪声混合权重和滤波截止频率是启发式调整，没有给出逐配置数值，因此换车型时需要重新调参。
资源与成本也未测量。论文未报告分析耗时、合成实时性、训练硬件预算、推理开销、输出帧率与实际延迟。不能承诺这些量得到改善。

训练资源、推理开销与延迟要分开讨论。数据集本身约 24.5 吉字节，下载和存储成本是实际门槛。本次资源状态显示代码可达但数据集链接本次未能确认可达，因此不能写数据集当前已公开可下载，只能写本次未能确认可达，复现前需先确认获取路径。

### 要复现这套流程，第一步先做什么，需要准备什么？

复现先做数据准备。需要每辆车 5 到 10 分钟的 16 千赫兹实录，以及同步的转速和扭矩记录。分帧用 65536 点，转速为零的帧剔除。对每帧估计平均基频，按累加比值做转角域重采样并用 3 次样条插值求值。分析用布莱克曼窗，周期数取 20，补零因子取 4，保证每个整数阶次占 80 个频点。

跟踪范围从 0.5 到 64.0 按 0.5 步进，共 128 个阶次。每个阶次在向两侧半整数中点扩展的分析区内加窗求质心，再用三点抛物线插值恢复幅度，计算归一化偏移。所有帧累积为随转速扭矩变化的偏差和幅度表。
合成准备需要同一套表格加可调参数。振荡器数量 128 个，相位用瞬时频率积分推进，频率为标称阶次加偏差再乘以基频。

噪声侧设置粉红噪声调制深度、突发噪声的混合权重和形状指数、低通滤波截止频率。共振器侧设置并联数量、延迟、反馈增益和阻尼，延迟初值可按排气管和腔体长度设置，再对照参考录音调整。左右通道独立实例化以获得去相关立体声。
标注与文件组织要与原文一致才能复用。生成 48 千赫兹 4 通道音频，前 2 通道放立体声，后 2 通道放转速和扭矩。

归一化边界固定为 10000 转每分和 1000 牛米，16 比特编码，反归一化时用同一边界。片段长度最长 12.3 秒，残余短片段保留到最短 4.1 秒。控制轨迹建议汇总正常驾驶、动态驾驶和测功机系统采样，覆盖 0 到 7007 转每分、负 107 到 718 牛米的范围，并检查是否包含加速、巡航、减速、换挡和怠速。
还需补哪项验证取决于目标。若目标是合成保真度，需要补逐阶幅度误差、基频跟踪误差和主观评价。

若目标是参数估计，需要补在未见轨迹上的转速扭矩预测误差和量化下界分析。若目标是部署，需要补推理延迟、实时系数和噪声鲁棒性。代码开源不等于系统可运行，权重下载不等于可部署收益，比较时只保留原文实际可运行的策略，搜索最优或事后最优值要另行标明。

### 何时值得尝试这套方法，如何一句话记住它？

当已有少量目标车型录音和同步工况记录，但缺大量干净对齐数据时，值得尝试这套方法。它的价值在于把不可控的录音差异转化为可控的参数变化，把外部标注文件转化为音频流自身携带的真值。适用条件是研究任务需要系统评估不同工况、不同音色复杂度下的算法行为，或者需要从参数到声音的可微映射。当目标是复刻某一段特定录音的逐频细节，或要求在强环境噪声下直接部署时，它不是直接解，前者需要逐频重建，后者需要额外的噪声鲁棒性验证。

一句话记住它是先对齐再比较，先提取再生成。转角域重采样消除帧内漂移，频率对齐分析消除跨转速网格差异，质心跟踪得到可比的偏差和幅度，谐波加噪声合成器加共振器补回质感，4 通道编码锁住逐采样真值。增广的本质是音色与工况解耦，同一音色走遍轨迹池，再用参数变化扩展多样性。
对初学者的操作建议是先沿一个样本走完输入到输出，再展开公式和参数。

先确认转速扭矩如何索引表格，再确认振荡器相位如何累加，再确认噪声和共振器在哪里叠加，最后确认 4 通道如何解码。术语首次出现先用白话解释再用英文名，后文简称固定，指代保持唯一，前置概念先于依赖它的结论。这样既能复述方法，也能在换车型或换轨迹时知道哪里需要重调，哪里可以直接复用。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=2)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/08b4d4e22fe0/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf#page=3)

另有 10 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
