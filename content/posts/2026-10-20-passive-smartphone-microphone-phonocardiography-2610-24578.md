---
title: "Passive Smartphone-Microphone Phonocardiography for Joint Maternal-Fetal Cardiac Well-Being Monitoring: A Longitudinal Self-Recorded Case Study in Late Pregnancy"
date: 2026-10-20
draft: false
tags: [音频分离, 信号处理, 医疗音频, 单通道]
categories: [论文速递]
description: "本文用一名孕妇最后五周自采的 28 段手机腹部录音，靠心率范围先验把包络分成快慢两个节律带，恢复出多数录音中稳定但未经金标准验证的胎儿 plausible 节律，同时报告母体节律、变异性和呼吸探测的失败边界。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.24578"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只用手机麦克风贴在腹部，能同时听到母体和胎儿的心跳吗"
paper_digest_original_title: "Passive Smartphone-Microphone Phonocardiography for Joint Maternal-Fetal Cardiac Well-Being Monitoring: A Longitudinal Self-Recorded Case Study in Late Pregnancy"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.24578v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.24578v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.24578v1.pdf"
paper_digest_primary_task: "音频分离"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-separation","label":"音频分离"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"application","id":"application.medical","label":"医疗音频"},{"facet":"setting","id":"setting.single-channel","label":"单通道"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "本文用一名孕妇最后五周自采的 28 段手机腹部录音，靠心率范围先验把包络分成快慢两个节律带，恢复出多数录音中稳定但未经金标准验证的胎儿 plausible 节律，同时报告母体节律、变异性和呼吸探测的失败边界。"
paper_digest_authors: [{"affiliations":["Electrical engineering department, Information Technology University (ITU), Lahore, Pakistan."],"name":"Muhammad Mahboob Ur Rahman"}]
paper_digest_abstract_sha256: "3b0c9e75a7e7d4a9e8dfcc5c8b999864a9261b4ef1d0bff8ab1f6a5823f7637d"
paper_digest_sidecars: {"citation.bib":{"sha256":"ef8a08b565d5275cf46671491a2948134c97bae610207e2170a9c438a11a75a0","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24578/citation.bib"},"citation.json":{"sha256":"eba77c271446b63f7042c19d009539dda8db5fea19908a9d7f98e1fb704d6013","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24578/citation.json"},"citation.ris":{"sha256":"f077f3846b374bae24843834424ac991cf8fa7f6e30cf7d2aa55b9dda2346a4f","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24578/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"15e0d1ae45412c3192c5ceaf226420576b3c4b9337ffc4ddeb42b0639e2dfb8c","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24578/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "46e72a4889633702ebc1454d18330c18b0d61ebb87e8a16dd0972ba9fb3d3fe0"
paper_digest_api_reader_plan_sha256: "bd1569b184ded2e334e404b72fa73d72833541d68173e118db2374005ca1a4d6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5c53a11a71a284151aceaa3cf7caf710cbf6a30777be955c6ec2269995e5067c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "013dde8666dfc4c9ba90397fc1ea95f9ca0c0d0b4a7109db81609bd95b614d68"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9d56ac82938bc92b06536eef2d56c4a9ab31a8863539345bb20a64b0f96b131c"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ee6bd8d8ca366053c5b0bf221ee2007f6a708f18325f5008dc1b233fe42c479f"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只用手机麦克风贴在腹部，能同时听到母体和胎儿的心跳吗

> 英文题目：*[Passive Smartphone-Microphone Phonocardiography for Joint Maternal-Fetal Cardiac Well-Being Monitoring: A Longitudinal Self-Recorded Case Study in Late Pregnancy](https://arxiv.org/abs/2610.24578v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation)
- **研究方法**：[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)
- **研究条件**：[单通道](/audio-paper-digest-blog/papers/?concept=setting.single-channel)
- **应用**：[医疗音频](/audio-paper-digest-blog/papers/?concept=application.medical)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Muhammad Mahboob Ur Rahman：Electrical engineering department, Information Technology University (ITU), Lahore, Pakistan.

## 📌 核心摘要

读者需要理解的对象是晚孕期腹部体表同时存在的母体与胎儿两个心音源，困难是单通道消费级麦克风信噪比极低且两类心音在声学频谱上重叠，处理思路是先定位短的高质量片段再按重复速率拆分候选心率。输入是受试者Z在最后五周自采的28段10.3秒至68.4秒的16 kHz腹部录音，均无母体与胎儿真值对照。在28段录音全部合格窗口pooled统计下平均心率指标比较中，胎儿带160.3±11.5 bpm高于母体带82.5±17.9 bpm，可恢复录音数指标比较中胎儿带25/28段多于母体带14/28段。香农能量包络（指对带通后波形做非线性变换以突出中等幅度心音事件的包络）先经中位数稳健归一化抑制大handling伪迹，再经平滑阈值得到有效片段并同时送入母体带与胎儿带两个并行滤波分支。每个分支对包络做周期性滤波后峰检测，用中位心搏间期换算心率并用变异系数衡量规律性，呼吸探针则在全程包络趋势上搜索低频自相关。与多通道压电胎儿心音图和主动超声Doppler方案相比，本文方法零硬件成本但精度更低且在单通道下难以确证声源归属。在同一28段录音按母体活动状态分组后各组合格窗口pooled统计下平均心率指标比较中，胎儿带休息161.0 bpm高于运动158.0 bpm而晨起161.4 bpm与未标注161.8 bpm基本不变，显示跨状态稳定。结论只适用于单被试回顾性观察，逐拍变异性与呼吸率判别均被判为阴性发现，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文到底想解决什么现实困难

论文的起点是产检资源不均。作者指出孕产妇死亡高度集中在低收入和中等收入国家，而常规胎心监护依赖的 CTG 和多普勒都在诊所里，农村和偏远地区很难获得。与此同时智能手机在发展中经济体已经非常普及。于是作者问了一个很窄的问题：能不能把手机自带的麦克风直接贴在下腹部，只听自然传出来的心音，不加探头、不涂耦合剂、不发射任何信号，就得到母体和胎儿各自的心律信息。

需要强调的是，这不是要替代临床监护。原文把自己定位为探索性的单人可行性研究，目的是诚实划出这种零边际硬件成本路线现在能做什么、不能做什么，为以后带金标准对照的验证研究探路。读者如果只记一句话，就是被动、单通道、无监督自采条件下的母胎心音是否还有可用节律，而不是手机能否替代多普勒。

### 已有路线为什么帮不上这个具体任务

理解本文要先分清 3 条路线。第一条是手机胸部听诊，手机贴胸壁听第一、第二心音已有不少工作，能量多在 250 Hz 以下，手机麦克风带宽够用，但它只处理单个心脏，且都在相对可控的胸部采集。第二条是多通道胎儿心音，用三四个压电接触传感器贴腹部，再做多通道盲源分离，已有用 CTG 对照做到平均偏差很小的报道，但它依赖专用硬件和多通道空间信息。第 3 条是消费级主动胎心方案，一类是配专用多普勒探头再连手机，另一类是用手机扬声器发超声再学回波，都要发射探测信号。

本文的格子是三者都不占：被动、现成单麦克风、孕妇自己在家无监督录制。单通道从根本上欠定，两个心源的声谱又高度重叠，所以不能直接搬多通道或心电分离算法，只能靠心率快慢本身大体分开这一先验硬切。这就决定了后文所有归因都是候选标签，不是确证的声源身份。

**被动声学记录 × 主动多普勒：** 被动声学记录指只用麦克风听身体自然发出的心音，不发射任何探测信号；主动多普勒指先发射超声或声波再从回波推算胎心运动。本文只做前者，分工是零硬件成本但要自己从混合声中分离两个心源，后者精度更高但需要探头或扬声器发射，两者不是同条件比精度的关系。

### 输入是什么，输出是什么，什么信息必须保留

输入是 28 段 Ogg Vorbis 格式的手机录音，采样率 16 kHz，时长 10.3 s 到 68.4 s，平均 47.6 s，由受试者 Z 在最后约五周、18 个不同日期自采，标签只有安静、晨起、运动或未标注，且对时长、噪声、按压力、是否屏息都没有要求。也就是说输入天然是大部分静默加偶发搬动噪声，只有很小一段可能含心音。

目标输出是每段录音里慢的母体候选心率和快的胎儿候选心率，以及各自心跳间隔算出的变异性指标，外加一个更低频的呼吸候选节律用来区分安静和运动。必须保留的信息是心跳的重复周期本身，而不是原始音频的绝对响度或频谱细节。输出的使用方式也很克制：只报告能否恢复出规则节律、是否随母体活动和日期稳定，不做杂音或心律失常筛查，也不把变异性数值当临床判读。

### 整条处理链如何从一整段噪声里捞出几秒心跳

全流程对 28 个文件统一参数、不逐文件手调，分五步。第一步预处理加包络提取，先单声道、去均值、峰值归一到[-1,1]，再用 4 阶 Butterworth 零相位带通 20-200 Hz 保留第一、第二心音能量集中区，然后算 Shannon 能量包络并做 20 ms Hamming 平滑，再做基于中位数和 MAD 的稳健 z 分数归一化。第二步有效片段检测，用 0.4-0.6 s 滑动平均平滑包络，按 2.0、1.2、0.7 逐级放宽阈值找持续抬高处，把间隔 0.35-0.6 s 以内的连成一段，丢掉 1.0-2.0 s 以下的孤立冲击，只留下可能含心音的少数窗口。

第三步是关键的双带分解，在每个有效片段内对包络本身再做两次带通，一次取母体 plausible 带 45-118 bpm，一次取胎儿 plausible 带 118-195 bpm，得到两条只保留各自重复快慢的包络。第四步在每条带限包络上找峰，最小峰间距取该带中心周期的 45%，显著性阈值取该带包络标准差的 0.4 倍，至少 4 个峰才保留，用中位心跳间隔换算成每分钟心率，用间隔的变异系数作为规则度评分。第五步按文件和全数据集汇总，报告每文件均值和参与窗口数 n，全文的表格和纵向图都来自这些窗口级估计。

### 包络和稳健归一化各自解决了什么噪声麻烦

先说包络要算什么。它要把带通后起伏很快的波形变成随心音开合缓慢起伏的能量曲线，让后续只看重复快慢。Shannon 能量形式对中等幅度事件加权更大，对极小噪声和极大冲击相对不敏感，作者称在这种低信噪比自采数据上比直接的 Hilbert 包络更干净。公式中 x 上波浪线表示已归一到[-1,1] 的带通波形，E(n) 是逐点能量包络。

\[E(n)=-\,\tilde{x}(n)^{2}\log\tilde{x}(n)^{2},\]

再说归一化为何必须稳健。自采录音大部分是静默加少数极大幅度手持伪迹，若用均值和标准差归一，阈值会被伪迹抬高，真心音会被压到零附近而漏检。改用中位数和中位数绝对偏差后，分母乘 1.4826 是为了在正态假设下与标准差可比，分子减中位数则不受极端大值牵引。这一步是整条链能自动定位可用片段的前提。

\[\hat{E}(n)=\frac{E(n)-\mathrm{median}(E)}{1.4826\cdot\mathrm{MAD}(E)},\]

**Shannon 能量包络 × 中位数绝对偏差归一化：** Shannon 能量包络负责把带通后的波形转成突出中等幅度心音事件的起伏曲线，压制微弱噪声；中位数绝对偏差归一化负责用中位数和 MAD 代替均值方差做稳健定标，避免极少数搬动伪迹主导阈值。两者搭配才能在大部分是静默、偶发大冲击的自采录音里保留真正较弱的心音起伏。

### 为什么在包络的快慢上切两刀就能分开母胎

声谱上母胎心音重叠很多，直接对原始音频滤波分不开。但在安静时重复率分得开：正常胎心多在 110-160 bpm，偶发到 160-180 bpm 也算交界正常；成人安静到轻活动心率明显更低，孕期静息再高 10-20 bpm 也到不了胎心带。于是作者固定切成 45-118 bpm 和 118-195 bpm 两带，对包络本身做 3 阶 Butterworth 带通，得到 E_mat 和 E_fet 两条曲线。这相当于在速率域做的最简盲源分离，可解释但很粗。

作者自己点出的失效模式是运动后母体心率会升进胎儿带下沿，固定阈值无法察觉也无法纠正，且若按状态自适应调阈值又会循环论证，所以只能原样报告并在解释运动结果时打折扣。图注里写成 42-120 和 120-192 只是作图示例的取整写法，方法定义以正文 45-118 和 118-195 为准。

**胎儿 plausible 带 × 母体 plausible 带：** 胎儿 plausible 带指按每分钟 118-195 次重复率滤出的包络成分，母体 plausible 带指按 45-118 次滤出的成分。它们不是经验证的声源分离结果，只是用静息时两者心率范围大体不重叠这一先验给同一单通道起伏贴的标签，运动后母体心率上移就会串带，这是全文反复强调的失效模式。

**有效片段检测 × 双带分解：** 有效片段检测负责先找到整段录音中包络持续抬高的几秒可用窗口，丢掉静默和孤立冲击；双带分解只在这类窗口内对包络的重复快慢再做滤波，把慢的归为母体候选、快的归为胎儿候选。前者解决在哪里看的问题，后者解决看到的起伏算谁的问题，顺序不能颠倒。

### 这篇论文训练了什么，没有训练又实际算了什么

这篇论文没有训练任何神经网络，也没有学习权重、梯度更新或冻结参数的概念，全程是固定参数的信号处理加规则判定。实际计算分 3 类：一是对每段录音算包络、阈值和有效片段；二是对每个片段算双带滤波、找峰、中位心率和变异系数；三是对呼吸探测算长趋势加滑动自相关找 5-45 次每分的低频调制。

所谓置信只来自规则：每带至少 4 个峰才保留，变异系数越小越规则；呼吸窗要求自相关置信度不小于 0.25 且显著性不小于 0.20，且候选必须是真正的局部极大以避免边界钉死伪峰。最早的 feb20pcg 文件还做过一次独立的手工多方法核对，用三窗自相关、周期图谱峰和收缩舒张间期配对互相印证，得到 75-76 bpm 量级的母体 plausible 值，用来检验自动链在别处的一致性，而不是用来训练或调参。

### 28 段录音怎么采的，状态标签可信到什么程度

受试者 Z 是单胎、无并发症妊娠最后约五周，后足月顺产无并发症，这是回顾性健康背景，不参与算法也不验证单次估计。28 段录音跨 18 天，状态靠文件名自标：安静多为坐或躺，晨起多为当天第一次、一般也在安静，运动为轻体力活动后即刻，还有一批早期未标注。运动强度和距运动多久都没有标准化，也没有加速度计或同步脉搏做客观核验，所以状态只能当粗分组用。

下面这张定位表先回答比较是否公平：它比的不是谁更准，而是传感方式、硬件和采集场景 3 个维度，说明本文是唯一被动、单手机麦克风腹部、无监督自采纵向的一格，代价就是精度明显低于主动多普勒。读表时注意硬件列和场景列，不要把类别差异误读成同条件胜负。

| Approach | Sensing | Hardware | Sessions |
| --- | --- | --- | --- |
| Multi-ch. fPCG [7, 10] | Passive | Purpose-built (4-ch piezo) | Clinical |
| DopFone [8] | Active (echo) | Phone spkr+mic | Controlled |
| This work | Passive | Phone mic (abdomen) | Unsupervised, self-collected |

上表说明本文的设计点是用测量保真度换零硬件成本和纯软件可部署性，目标是筛查提示而不是诊断替代。运动标签的不精确和单人单妊娠的 n=1 性质，是后文所有按状态对比和纵向结论必须附带的前提。

### 可用信号占比和快慢两带各恢复出多少

先看有多少能用。有效占比定义为被判为持续抬高包络的时长占整段的比例，28 段在 3.4% 到 49.5% 之间，均值 19.8%，中位数 16.7%，说明即使最好的录音也有约一半以上是静默或搬动噪声。按时间排序的条形图里，最低的两条都是安静录音且低于 4%，最高的两条都是早期未标注且接近 49%，但总体与状态没有稳定对应关系，只有一段 march13r 在两带都没恢复出合格估计。

读这张覆盖图时注意横轴是百分比，颜色只代表自标状态，条长短直接反映这次贴放和环境是否 lucky，而不是胎儿本身好坏。

> **看图路径：** 1. 先看横轴百分比含义和纵轴 28 条录音的排列顺序；2. 再对比不同颜色代表的安静、晨起、运动和未标注的条带长短；3. 注意最低的两条和最高的两条各对应什么状态

[![原论文 Fig. 1：Fraction of each recording classified as containing sustained, elevated-envelope (candidate…](https://arxiv.org/html/2610.24578v1/1.png)](https://arxiv.org/html/2610.24578v1/1.png)

*论文图 1。原论文 Fig. 1:：“Fraction of each recording classified as containing sustained, elevated-envelope (candidate heart-sound-bearing) audio, across all 28 recordings, colour-coded by self-reported…”。*

上图可见可用窗口稀疏且高度可变，这是后文变异性不稳和呼吸探测失败的共同底色。在此基础上，胎儿带在 25/28 段中共 51 个窗口恢复出来，母体带只在 14/28 段中共 19 个窗口恢复出来。举几个具体行可感受离散程度：feb26z1 胎儿 152.3 bpm 用 3 窗、母体 82.7 bpm 用 1 窗，march3z1m 两带各用 4 窗，而 feb26z3 只有胎儿 161.6 bpm 用 1 窗，feb27z 两带皆无。

下表摘出首段手工核对的 feb20pcg、胎儿带较全的 march3z1m、运动后 march11ex 和低覆盖的 march12r 等行，比较问题是同一管线在不同时长和有效占比下两带检出是否对称，指标是每带均值和窗口数 n。可见胎儿带检出远多于母体带，且 n 小到 1-4，任何单行均值都不宜当精确胎心读数。

| Recording | Condition | Dur.(s) | Active(%) | Fetal-band (bpm) | Maternal-band (bpm) |
| --- | --- | --- | --- | --- | --- |
| feb20pcg | unspecified | 10.3 | 32.5 | – | 75.5† |
| march2zex3 | exercise | 61.8 | 22.3 | 149.1 (n=3) | 79.8 (n=2) |
| march4zex2 | exercise | 12.6 | 16.4 | 177.4 (n=1) | – |
| march18ex | exercise | 47.5 | 15.9 | 151.4 (n=2) | – |

上表证实单通道自采的检出本身就不对称，母体带更难锁定。后文把窗口全部 pooling 后再按状态看均值，才能讨论稳定性，但仍受小 n 和串带影响。

### 胎儿带为何敢说稳定，母体带为何反而在运动时更低

先看分解实例。march18r 安静录音 31-38 秒的原始包络是密集难读的混合，限到母体带后是低幅不规则慢起伏，限到胎儿带后是明显更等距、更高幅的快振荡，文中称该文件胎儿带变异系数可低到 15%，数据集中最低到 6%。作者解释并非胎儿声更强，而是下腹部贴放时胎背可能离前腹壁更近，而母体心脏在胸腔更高更深，且母体贡献可能更多是经腹主动脉的低频脉动而非尖锐心音。

下图 3 层曲线的观察任务是理解为何要在速率域分离：上层数不出拍，中层慢而不稳，下层快而较稳，这种视觉对比在高质量片段里反复出现。

> **看图路径：** 1. 先看上中下三条曲线的纵轴量级和横轴 31-38 秒时间范围；2. 对比中层慢节律和下层快节律的峰的等距程度和幅值稳定性；3. 注意上层原始包络为何看起来密集而难以直接数拍

[![原论文 Fig. 2：Dual-band decomposition example (march18r, rest condition, t=31–38 s).](https://arxiv.org/html/2610.24578v1/2.png)](https://arxiv.org/html/2610.24578v1/2.png)

*论文图 2。原论文 Fig. 2:：“Dual-band decomposition example (march18r, rest condition, t=31–38 s).”。*

再看按状态汇总。胎儿带 pooling 为 160.3±11.5 bpm，中位 160.0，范围 128-187，中心恰落在临床正常胎心带 110-160 bpm 及交界 160-180 bpm 附近；分状态为安静 161.0 bpm 用 12 窗、晨起 161.4 bpm 用 8 窗、未标注 161.8 bpm 用 15 窗、运动 158.0 bpm 用 16 窗，几乎不随母体活动上移。母体带 pooling 为 82.5±17.9 bpm，中位 82.7，范围 55-113，大体符合孕期安静到轻活动预期，但运动均值反而最低 70.2 bpm 用 5 窗。

下表比较问题是胎儿带是否像真胎心那样与母体活动解耦，公平条件是同一管线、同一找峰和至少 4 峰规则，指标方向是胎儿带均值应跨状态平坦，母体带应运动更高。结果恰相反地支持了串带解释：运动时升高的母体节律被划进胎儿带，留在母体带的反而是偏低残余，所以不能当生理发现。

| Condition | Fetal-band | Fetal-band | Maternal-band | Maternal-band |
| --- | --- | --- | --- | --- |
| Rest | 12 | 161.0 | 5 | 92.2 |
| Exercise | 16 | 158.0 | 5 | 70.2 |
| Pooled | 51 | 160.3 (SD 11.5) | 19 | 82.5 (SD 17.9) |

上表是全文最强的间接证据：若胎儿带跟踪的是母体用力，它应在运动后明显升高，但它没有。箱线图进一步显示左侧胎儿箱体中线都在正常带附近且运动箱并未上移，右侧母体运动箱反而下沉且样本极少。

> **看图路径：** 1. 先看左右两图的样本量 n=51 和 n=19 及纵轴心率单位；2. 再看左侧四个箱体中线是否随运动明显上移；3. 对比右侧运动箱体为何反而更低且离散程度如何

[![原论文 Fig. 3：Distribution of fetal-band (left) and maternal-band (right) heart-rate estimates by self-reported…](https://arxiv.org/html/2610.24578v1/3.png)](https://arxiv.org/html/2610.24578v1/3.png)

*论文图 3。原论文 Fig. 3:：“Distribution of fetal-band (left) and maternal-band (right) heart-rate estimates by self-reported condition.”。*

纵向看，胎儿估计在 2 月 20 日到 3 月 19 日五周内无漂移，临近预产期的 18-19 日仍在正常带附近；母体估计更稀更散但无持续静息过速或过缓。黑边标记是变异系数小于 15% 的高规则窗，胎儿高规则窗散在各日期，说明规则性与日期无关，更像贴放运气。

### 变异性和呼吸探测为什么是诚实的负结果

变异性部分先交代算法：对同一找峰序列的间隔算 SDNN、RMSSD、pNN20 和 CTG 式带宽，带宽是每窗内心率最大值减最小值，近似医生在 CTG 纸带上读的起伏幅度。全部 51 个胎儿窗 pooling 后 SDNN 为 96.2 ms 左右、RMSSD 为 131.7 ms 左右，中位分别 64.7 和 68.4，重度右偏；每窗中位只有 6 个心跳，范围 4-28，中位时长仅 3.1 秒。右图显示 SDNN 并不随每窗心跳数增多而收敛，说明离散主要来自找峰抖动而非生理。

左图按变异系数看规则度，胎儿窗不少落在 15% 以内，母体窗普遍更散；右图看小样本不稳定性，纵轴对数刻度下各点仍大范围散布，这是判定噪声主导的关键。

> **看图路径：** 1. 先看左图横轴变异系数和 15% 虚线两侧胎儿与母体窗口的分布；2. 再看右图横轴每窗心跳数与纵轴 SDNN 是否随样本增多而收敛

[![原论文 Fig. 5：(a) Distribution of per-window IBI coefficient of variation, fetal- vs.](https://arxiv.org/html/2610.24578v1/5.png)](https://arxiv.org/html/2610.24578v1/5.png)

*论文图 5。原论文 Fig. 5:：“(a) Distribution of per-window IBI coefficient of variation, fetal- vs.”。*

上图左证实只有少数窗真正规则，右证实加长到十几个心跳也不收敛，所以不能把这些 SDNN 与临床要求连续 1 分钟数百个心跳的短时变异阈值直接对比。高置信子集胎儿 7 窗心率 141-180 bpm、SDNN 15-45 ms、带宽 21-43 bpm，唯一母体高置信窗心率 113.0 bpm、SDNN 29.8 ms、带宽 16.1 bpm，方向上干净窗更规则，但仍宽于典型临床变异幅度，残留噪声仍在。

下表完整呈现全部窗与高置信子集的对照，比较问题是在极短窗下变异性估计是否可用，指标是 SDNN、RMSSD 和带宽，限制是样本量和以毫秒计的抖动。结论是原理上可算，但临床上不可读。

|  | nn | HR (bpm) | SDNN (ms) | RMSSD (ms) | BW (bpm) |
| --- | --- | --- | --- | --- | --- |
| Fetal, all | 51 | 160.3 (11.5) | 96.2 (159.3) | 131.7 (239.0) | 60.4 (40.6) |
| Fetal, high-conf. | 7 | 165.8 | 31.5 | 42.6 | 35.7 |
| Maternal, all | 19 | 82.5 (17.9) | 302.4 (235.4) | 380.7 (320.9) | 51.3 (21.6) |
| Maternal, high-conf. | 1 | 113.0 | 29.8 | 50.2 | 16.1 |
|  | nn | SDNN (ms) | SDNN (ms) | CV (%) | CV (%) |
| Rest | 12 | 54.6 | 54.6 | 13.3 | 13.3 |
| Exercise | 16 | 78.1 | 78.1 | 18.2 | 18.2 |
| Unspecified | 15 | 100.9 | 100.9 | 22.4 | 22.4 |
| Morning | 8 | 186.0 | 186.0 | 29.6 | 29.6 |

上表把正负两面放在一起：能算出数字不等于能做临床变异评估，作者明确只当必要前提演示。呼吸探测同样是否定的：26/28 段能找到过质量门限的低频候选，最强窗置信 0.46-0.77，但最佳窗中位都在 10-13 次每分，运动也没有到预期的 20-40 次每分，最确信的运动窗反而在 7.4-7.8 次每分，更像体位缓慢移动或慢呼吸练习。Mann-Whitney 双侧检验安静对运动 U=35，p=0.64，无显著分离，过门限窗口比例也无显著差异，所以不声称测到呼吸。

**变异系数 × SDNN：** 变异系数是同一窗口内心跳间隔的标准差除以均值，本文用作该窗口节律是否规则的置信分，越小越像真心跳；SDNN 是这些间隔的标准差本身，临床上想用它反映自主神经调节。本文用前者筛选后者，但窗口只有中位数 6 个心跳，所以筛选后的 SDNN 仍以测量抖动为主，不能当临床变异性读数。

### 哪些对照支持归因，哪些反例提醒不能确证

支持胎儿带是胎儿来源的只有间接一致性：一是跨状态平坦，二是纵向五周无漂移且始终在正常带附近，三是 feb20pcg 独立手工多方法得到 75-76 bpm，自相关三窗 75.5、75.8、75.2 bpm，周期图 75.0 bpm，收缩约 0.30 秒舒张约 0.49 秒，与自动链别处的母体带 82.7、82.1 bpm 量级一致，说明管线没有系统性偏到离谱。

反例和未胜出项同样重要：母体带检出率只有一半，运动均值反常走低；变异性不收敛；呼吸不能分开安静和运动；有效占比最低的两段恰是安静，说明贴放运气主导一切。这些负结果与主结果同等重要，它们划出单通道无金标准方案的能力边界：能谈有无规则快节律，不能谈精确胎心数值，更不能谈变异性临床判读和呼吸状态分类。

### 在什么条件下结论才成立，还有哪些混杂没排除

第一是无同步金标准。所有母胎标签都来自频率范围先验，没有 CTG、多普勒或心电对照，条件不变性和手工核对都只是支持性而非确证性。第二是 n=1 单人单妊娠，任何数字都不能外推到他人、别的胎位、别的孕周或别的手机。第三是母体腹主动脉混杂，产科听诊本就难分胎心和母体血管搏动，本文单麦克风无法排除。第四是运动串带，固定双带在母体心率上移时会把同一物理来源分给不同标签，运动段的胎儿带可能混入母体成分。

第五是信号覆盖低且异质，每段可用部分仅 3.4%-49.5%，多数时间是静默和手持噪声，反映无按压反馈的自贴很难 sustained 对准。第六是不做杂音和心律失常筛查，信噪比和复合声场不支持。第七是状态自标无客观核验，运动强度和距运动时间未知。第八是变异性窗太短，中位 6 拍，不能比临床短时变异阈值。第九是呼吸候选可能根本不是呼吸，而是搬动、说话和低频血管信号的慢衰减，文中明确不用于任何结论。

### 想复现或验证第一步该做什么，需要补什么对照

复现第一步是照原样重跑信号链：16 kHz 单声道、去均值峰值归一、20-200 Hz 4 阶零相位带通、Shannon 包络加 20 ms 平滑、中位数 MAD 稳健归一，再用逐级放宽阈值找有效片段，只在片段内做 45-118 和 118-195 bpm 双带滤波、按 45% 中心周期和 0.4 倍标准差找峰、至少 4 峰才保留。关键是不要逐文件调参，否则有效占比和检出率不可比。

真正缺的验证是同步采集：同一腹部位置放手机麦克风，同时接临床 CTG 或多普勒做逐窗对照，才能把固定先验换成有监督的盲源分离或学得的阈值，并量化运动串带比例。其次要连续数分钟录音而不是十几秒短片，否则变异性永远算不准；最好加手机加速度计融合呼吸，或双麦克风、双手机摆不同位置引入空间多样性，再加贴放质量反馈和屏息提示，先把有效占比提上去。作者也建议未来验证应去资源有限场景做，而不只在条件好的试验点。

本文没有公开代码、模型或数据可用的证据，来源清单显示无可用作者资源，所以复现只能按正文参数自己实现，不存在权重下载或开箱运行之说。

### 什么时候值得尝试，一句话总结能带走什么

值得尝试的场景很窄：已有手机、无探头、无网络也行的偏远随访中，只想问这次几十秒里有没有出现规则的胎儿 plausible 快节律，作为提示去做正规 CTG 或多普勒的触发，而不是要精确胎心数值、变异性判读或呼吸分类。若多次完全找不到任何 plausible 快节律，也只应提示就医排查，而不是据此下诊断。

容易产生的误解要澄清：胎儿带更规则不代表胎儿声更强，只是位置和干扰分布使然；运动后母体带更低不是生理发现，而是串带伪迹；能算出 SDNN 不代表达到临床变异性标准；呼吸窗有高置信分数不代表测到呼吸，p=0.64 就是无分离。全文结论只在单人、晚孕、无并发症、短窗、自采、无金标准的条件下成立，换人、换胎位、换手机、换孕周都要重验。带走的一句话是被动单麦克风在极脏的真实自采里仍能多次捞出稳定快节律，但归因、精度和变异性都远未到临床可用，价值在于为零硬件筛查提示划出起点和边界。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2610.24578v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
