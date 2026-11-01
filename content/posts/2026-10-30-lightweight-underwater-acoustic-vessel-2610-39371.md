---
title: "Lightweight Underwater Acoustic Vessel Classification for Embedded Deployment"
date: 2026-10-30
draft: false
tags: [音频分类, 硬件系统设计与验证, 信号处理, 端侧运行, 实时处理]
categories: [论文速递]
description: "论文用 ShipsEar 五秒音频比较六种分类器在树莓派 5 上的完整音频到预测流程，发现两层 CNN 准确最高而 RBF-SVM 只低 0.31 个百分点却快 4.29 倍，因而把 RBF-SVM 部署到 Zero 2 W 仍能跟上连续音频的速度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.39371"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在树莓派上直接听船：轻量水下船舶分类如何兼顾准确与延迟"
paper_digest_original_title: "Lightweight Underwater Acoustic Vessel Classification for Embedded Deployment"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.39371v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.39371v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.39371v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.hardware-system-design","label":"硬件系统设计与验证"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "硬件系统设计与验证"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "论文用 ShipsEar 五秒音频比较六种分类器在树莓派 5 上的完整音频到预测流程，发现两层 CNN 准确最高而 RBF-SVM 只低 0.31 个百分点却快 4.29 倍，因而把 RBF-SVM 部署到 Zero 2 W 仍能跟上连续音频的速度。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Abishek Soti"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Thura Pyae Sone"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Naqib Ibnul"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jim Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sergio Chevtchenko"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Henry Zhong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gregory Cohen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ying Xu"}]
paper_digest_abstract_sha256: "717ce7e4f19e96fc43ebaf43ed3e3f35c52dfa1ff6246755a6eab33091efda61"
paper_digest_sidecars: {"citation.bib":{"sha256":"9c598df7634810e0920dffc689d0e6d82f6a483df4cbbf0cdeee148be1a6a6f2","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-39371/citation.bib"},"citation.json":{"sha256":"947d6a3b1a735714c903991e3c4d42feb861391fa2a1548bf4e13fe062b86bc2","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-39371/citation.json"},"citation.ris":{"sha256":"1d9e633724ae019de95d4719f0f7717231d6eeca8075518f95f206d7344052e3","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-39371/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"441b4dd7c1e6455b91a7f2b250f9699336b1e2d0552d591e197d287dff233072","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-39371/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "dd010f4899ece3497e15abe71dde67fb3dc3299600e6df4b7472dde513c98bc5"
paper_digest_api_reader_plan_sha256: "9109a7f3021dc3403c05006052e84c01bfabe54a5bd9c022544f20d8c4cd23c5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "96ff7dd0f45ac9a83f87173496f6143e9a39590c64f1ecac2fc34deeb7bc6154"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3e77af841654730c57ed400f08cef943899fda61be05aa96e4c7591f00ecc86e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bf19f8f4182c141d31018caf9adb6f1902865b3825ff6963b22288c720942398"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a9def29ea3a3ac8857e299696dccc49cbdef8a4c64d6aeebd8c317b2c8eff155"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在树莓派上直接听船：轻量水下船舶分类如何兼顾准确与延迟

> 英文题目：*[Lightweight Underwater Acoustic Vessel Classification for Embedded Deployment](https://arxiv.org/abs/2610.39371v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[硬件系统设计与验证](/audio-paper-digest-blog/papers/?concept=method.hardware-system-design)；[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)
- **研究条件**：[端侧运行](/audio-paper-digest-blog/papers/?concept=setting.on-device)；[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 1/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Abishek Soti：机构信息未能在本次解析中与作者逐人可靠绑定
- Thura Pyae Sone：机构信息未能在本次解析中与作者逐人可靠绑定
- Naqib Ibnul：机构信息未能在本次解析中与作者逐人可靠绑定
- Jim Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Sergio Chevtchenko：机构信息未能在本次解析中与作者逐人可靠绑定
- Henry Zhong：机构信息未能在本次解析中与作者逐人可靠绑定
- Gregory Cohen：机构信息未能在本次解析中与作者逐人可靠绑定
- Ying Xu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

海上被动监听需把水听器布到离岸海域，但链路带宽与供电有限而难以回传原始音频，论文要解决的是在嵌入式设备本地把16 kHz采样的五秒音频片段映射为四类船只或背景噪声。方法先用短时傅里叶变换把每段音频转为128频点乘475时间帧的语谱图，作为后续统一的声学表示；语谱图再分两路使用，两层卷积神经网络直接以语谱图为输入学习时频特征，其余四个分类器则对语谱图做时间维均值与标准差池化，把各频点的典型响应与时变拼成256维向量后送入线性或核分类器。六个分类器在树莓派5上经同一音频到预测流水线、用445个ShipsEar测试片段评测，两层卷积神经网络平均宏观F1为（99.14±0.32）%，RBF-SVM为98.83%，前者高0.31个百分点，而RBF-SVM中位端到端延迟为28.109 ms，低于卷积神经网络的120.655 ms约76.7%，其中特征提取约占其总时间的93%。作者因此把RBF-SVM部署到树莓派Zero 2 W上，在同样445个测试片段上保持98.88%准确率与98.83%宏观F1，中位端到端延迟349.09 ms，持续吞吐2.962次/秒，超过连续五秒音频所需的0.2次/秒达14.8倍。在树莓派5持续60秒运行中，RBF-SVM的系统CPU占用、进程内存与受监控电源轨功耗均明显低于卷积神经网络，Zero 2 W上平均整机功耗1.17 W，比空闲0.55 W高0.62 W。该结论只适用于该冻结切分的同一测试集比较，论文明确说明因无法重建源记录标识而不能验证记录无关泛化，也未验证跨海域与跨设备采集条件下的性能；原文披露了推理延迟、持续功耗与内存占用，未披露训练时长与训练能耗。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 岸基监听为什么不够，嵌入式本地判别要解决什么

论文的起点是被动声学监测的部署矛盾。靠岸的系统可以连续听水下声音，但必须依赖海岸基础设施，能布放的位置受限。如果把水听器放到远海，覆盖范围变大，可是把录音 continuously 传回岸上又会遇到连接不稳定、带宽不够和功耗受限的问题。

在这种条件下，一个自然的想法是在嵌入式设备上直接做船舶分类：只传判别结果，不传原始音频。读者需要先建立这个判断标准：光是分类准还不够，还要在目标硬件上跑得动，包括处理时间、内存占用和功耗都要满足要求。论文把树莓派作为代表性低功耗平台，考察从音频读入到给出类别的完整代价。

对刚入门的同学，要区分检测和分类。检测回答有没有船，分类回答是哪一类船加背景噪声。本文只做后者，输入是已经切好的 5 秒音频段，输出是 5 个类别之一。论文没有研究连续音频流的切分和检测触发，这一点决定了它的吞吐量换算只是一个必要条件，不是完整布放证明。

### 已有工作提供了哪些路线，本文补了哪块比较

论文回顾了 3 条相关路线。第一是嵌入式水听器系统已经能做实时声学处理，说明在设备端算音频是可行的。第二是低功耗海上监测架构把持续检测和分类分开，检测一直开着，分类按需触发，以省电。第三是 Park 等人在树莓派上做船辐射噪声分类，强调要实测推理效率，而不是只看参数量。

声学表示和分类器结构的重要性也被强调。之前关于水下目标识别的研究指出，选什么特征和用什么模型都会影响结果。Vasconcelos 等人的工作还提醒，预处理和模型推理的计算开销都要算进去，不能只比模型本身。

本文的补位是统一比较。在同一块树莓派 5 上，用同一套音频到预测流程，比较 6 种分类器，并把声学特征选择、统计池化和 Transformer 切块配置作为支撑实验。这样做的目的是让准确率、延迟、CPU、内存和监测功耗可以在相同条件下对照，而不是把不同论文的数字放在一起比。

### 输入是什么，输出是什么，什么信息必须保留

输入是 ShipsEar 数据集的 5 秒水下水听器录音，采样率 16 kHz。实验用 1778 个训练段和 445 个测试段，6 个模型共用同一个测试集。任务是五分类：4 个船舶分组加背景噪声。输出是每个 5 秒段的类别标签。

必须保留的信息是船舶声音的频谱结构和随时间的变化。船辐射噪声在不同频段有相对稳定的能量分布，同时又有螺旋桨和机械运动带来的时间起伏。如果只保留平均频谱，会丢掉起伏信息；如果保留全部时频细节，输入维度会很大，对嵌入式设备不友好。论文后续的池化和切块都是围绕这个矛盾展开。

还有一个关键条件是数据划分。论文明确说明，由于采用的固定划分无法重建源录音身份，是否存在录音级泄漏无法验证，也就不能验证录音无关的泛化能力。也就是说，这里的高分只在该划分下成立，不能直接理解为换一条船、换一片海域也能同样准。

### 六个模型如何共用一条音频到预测流水线

所有模型共用短时傅里叶变换作为公共声学表示。短时傅里叶变换是把长音频按短窗分帧、每帧做傅里叶分析的方法，输出就是频谱图。论文最终配置是 4096 点 FFT、128 个频率 bins，对 5 秒音频得到 128×475 的表示。选择过程是用一层卷积神经网络固定比较不同 FFT 点数和 bins 数的效果，从 2048 点 64 bins 的基线切换到 4096 点 128 bins 后，宏平均 F1 从 88.41% 提高到 93.84%，参数从 1893 增加到 3173。

流水线的分叉是理解全文的关键。请按下面这张官方流程图来对照阅读，它展示了 5 秒音频如何变成两种不同输入，再汇合到分类输出。

> **看图路径：** 1. 先看顶部从 ShipsEar 录音到 STFT 前端的箭头，确认公共输入尺寸；2. 再看中间分叉：左侧深层模型与右侧传统模型的输入有何不同；3. 最后看底部如何汇合到船舶分类输出

[![原论文 Fig. 1：Raspberry Pi 5 underwater vessel classification pipeline.](https://arxiv.org/html/2610.39371v1/icassp_pipeline_column.svg)](https://arxiv.org/html/2610.39371v1/icassp_pipeline_column.svg)

*论文图 1。原论文 Fig. 1:：“Raspberry Pi 5 underwater vessel classification pipeline.”。*

这张图确实可见顶部两个方框：左侧 ShipsEar recordings (.wav) 指向右侧 STFT front-end 128×475。中间分叉为左右两路，左侧绿色框标注 Deep models，输入是 1×128×475，包含 2-layer CNN 加均值标准差池化和 Patch Transformer；右侧橙色框标注 Classical models，输入是均值加标准差并做 z-score 的 256 维向量，包含 RBF-SVM、Linear SVM、MLP 和 LogReg。底部汇合到 Vessel classification。它的教学价值在于一眼看清共享预处理和差异化输入，避免把传统模型的池化特征和神经网络的整图输入混为一谈。

### 传统模型吃的 256 维向量是怎么算出来的

逻辑回归、线性 SVM、RBF-SVM 和多层感知机都不直接吃频谱图，而是先做时间方向的统计池化。具体做法是对 128×475 频谱图的每一行，也就是每个频率 bin，在 475 个时间帧上算均值和标准差，再把 128 个均值和 128 个标准差拼成 256 维向量。

**短时傅里叶变换 × 频谱图：** 短时傅里叶变换负责把五秒波形按短窗切分并做频谱分析，频谱图是它的输出结果，横轴是时间帧、纵轴是频率 bins、取值为能量。本文用 4096 点 FFT 得到 128×475 的频谱图，后续所有分类器都从这个公共表示出发，神经网络直接吃整张图，传统模型则先做池化再分类。

均值概括该频段的典型谱响应，标准差捕捉它随时间的波动。论文指出这种均值加标准差的拼接在声学表示学习中也被使用过。对初学者可以这样想：如果某类船在低频持续有能量，均值会高；如果它的能量一阵一阵，标准差会大。两者结合比只用均值保留了更多判别线索。

**时间均值池化 × 时间标准差池化：** 时间均值池化对每个频率 bin 在 475 个时间帧上求平均，代表该频段的典型响应；时间标准差池化求同一频段随时间的起伏，代表变化程度。两者拼起来把 128×475 压缩成 256 维向量，既保留判别信息，又让逻辑回归、SVM 和 MLP 的输入大幅变小。

代价是特征提取本身不免费。论文在树莓派 5 上测得 6 个模型的中位 STFT 特征提取时间平均为 25.89 ms。对传统模型，这一步占端到端时间的 90% 以上，后面分类器推理只有零点几到 1 毫秒多。因此降低端到端延迟的一个实际目标是优化特征提取，而不是一味压缩传统分类器。

### 卷积和 Transformer 各自如何处理整张频谱图

卷积神经网络直接处理 1×128×475 频谱图。论文比较了方形卷积核和时间方向更长的矩形卷积核，前者抓局部时频模式，后者抓更长持续时间的声学变化，这沿用了时频卷积核设计的已有思路。最终采用紧凑的两层结构，并在中间卷积特征图上也用了时间均值和标准差池化，即对每个通道频率响应沿时间聚合后再分类，目的是缩小全连接分类头的尺寸。

互补的另一路是紧凑切块 Transformer。它把频谱图切成小块，投影成向量后用自注意力建模不同时间区间的关系，类似 Audio Spectrogram Transformer 的做法。论文比较了 3 种切法：8×20 的局部块得到 368 个块，128×20 的全频块得到 23 个块，128×10 的全频块得到 47 个块。全频时间块把 128 个频率 bins 放在同一个时间区间内一起表示，既保留跨频率关系，又比局部切块大幅减少序列长度。改变时间宽度则是在时间分辨率和块数量之间权衡。

**两层卷积神经网络 × 径向基函数支持向量机：** 两层卷积神经网络直接在频谱图上学局部时频模式，参数和推理开销集中在卷积与分类头；径向基函数支持向量机则依赖人工做好的 256 维均值加标准差特征，用核函数做非线性划分，推理本身很轻。本文对比的核心就是这种分工差异：前者表示学习能力强但推理贵，后者特征工程做好后推理便宜。

需要注意参数量和延迟并不单调对应。论文发现全频切块把序列从 368 减到 23，但参数反而增加；Patch Transformer 参数比 CNN 多，推理却比 CNN 快得多，作者表示没有算子级 profiling 就无法解释原因。这提醒读者不要用参数量直接推断嵌入式速度，必须实测。

### 模型如何训练和重复，随机性来自哪里

6 个分类器都在 5 个随机种子下训练和评价，报告平均准确率和宏平均 F1 及其样本标准差。其中逻辑回归、线性 SVM 和 RBF-SVM 在这些重复中分类分数完全相同，说明在该流程下它们的训练是确定性的，随机种子没有带来波动；而 CNN、Patch Transformer 和 MLP 有零点几的标准差，反映了神经网络初始化和优化中的随机性。

论文没有给出学习率、优化器、轮数等完整训练超参数，也没有说明梯度路径和参数冻结细节，因此复现时只能以公开实现为准，不能从模型名字猜训练配置。支撑实验部分明确标注为探索性实验，包括统计池化与切块几何的表格，目的是为嵌入式设计提供依据，而不是最终部署模型的选型报告。

从流程上看，传统模型实际执行的是先算 STFT 再算 256 维统计特征，然后调用相应分类器；神经网络则是直接以频谱图为输入做端到端学习，只是 CNN 中间也用了统计池化来压缩。理解这一点有助于复述：输入表示、中间结果和最终输出在每条路上分别是什么。

### 在树莓派上测了什么，条件如何保持一致

嵌入式评价在树莓派 5 上进行，6 个模型共用同一套音频到预测流程。用同一个 445 个测试段测完整流程总时间，并拆成音频加载、特征提取和模型推理 3 段，报告中位延迟和第 95 百分位推理延迟。另用 60 秒持续负载考察吞吐、CPU 利用率、内存占用和处理器温度，功耗用树莓派 5 监测到的电源管理芯片导轨估计，区分进程级和系统级测量。

**端到端延迟 × 推理延迟：** 推理延迟只算分类器本身前向计算的时间，端到端延迟还包括音频加载和特征提取。论文把三段分开计时，发现传统模型的端到端时间里特征提取占九成以上，而 CNN 的推理占七成以上，所以只看推理会误判瓶颈，必须看完整流程才能选型。

指标方向需要先讲清。准确率和宏平均 F1 越高越好，分母分别是测试段总数和类别平均；延迟、CPU、内存、监测功耗和温度越低越好。模型存储以 KiB 为单位，延迟以 ms 为单位，功耗是监测导轨而非整机输入功率。论文用中位数抵抗偶发抖动，用 P95 观察尾延迟，例如 RBF-SVM 的 P95 推理延迟为 1.243 ms，只比中位数高 4.2%。

**准确率 × 宏平均 F1：** 准确率是全部 445 个测试段中判对的比例，宏平均 F1 是先在五个类别上各自算 F1 再平均，对小类更公平。ShipsEar 含四类船加背景噪声，类别不一定均衡，因此论文同时报告两者，五个随机种子下取均值和标准差，逻辑回归等确定性模型标准差为零。

公平条件的核心是同一测试集、同一 STFT 配置和同一设备。CNN 和 Patch Transformer 用 1×128×475 频谱图，其余 4 个用 256 维池化特征，这是方法本身的差异，不是测量不公平。资源受限验证再把选出的 RBF-SVM 搬到树莓派 Zero 2 W，对比特征提取、推理、内存和 CPU，并换算连续 5 秒音频所需的吞吐倍数。

### 六个模型在准确率和延迟上如何取舍

核心比较问题是：在 60 秒持续运行下，6 个模型在树莓派 5 上的硬件资源占用如何对比，哪个更适合资源受限部署。指标是系统 CPU 占用、进程内存、PMIC 监测功率和最高温度，数值越低越好。

| Model | CPU (%) | RAM (MiB) | PMIC (W) | Max. temp. (∘C) |
| --- | --- | --- | --- | --- |
| CNN (2-layer) | 54.56 | 490.52 | 5.193 | 54.50 |
| Patch Transformer | 30.48 | 452.11 | 4.153 | 50.10 |
| MLP | 25.16 | 287.25 | 3.960 | 50.15 |
| Linear SVM | 25.15 | 291.19 | 3.895 | 52.35 |
| Logistic regression | 25.56 | 290.69 | 4.014 | 52.35 |
| RBF-SVM | 25.16 | 293.14 | 3.863 | 48.50 |

上表是硬件资源对比，条件是同一树莓派 5 和 60 秒持续执行。CNN 为 54.56% CPU、490.52 MiB 内存、5.193 W 功耗和 54.50 ∘C 最高温度；RBF-SVM 为 25.16% CPU、293.14 MiB 内存、3.863 W 功耗和 48.50 ∘C 最高温度。Patch Transformer 为 30.48% CPU、452.11 MiB 内存、4.153 W 功耗和 50.10 ∘C 最高温度，MLP、线性 SVM 和逻辑回归的 CPU 均在 25% 附近，内存约 287 至 291 MiB。它说明 CNN 的持续资源需求明显更高，而 RBF-SVM 接近轻量模型的水平。

主结果的比较问题是 6 模型在树莓派 5 上的准确与延迟对照，条件是同一 445 段测试集和同一 STFT 配置。

| Model | Acc. (%) | Macro-F1 (%) | Size (KiB) | Infer. (ms) | E2E (ms) |
| --- | --- | --- | --- | --- | --- |
| CNN (2-layer) | 99.06 ± 0.33 | 99.14 ± 0.32 | 723.08 | 91.050 | 120.655 |
| Patch Transformer | 96.40 ± 0.71 | 96.48 ± 0.63 | 1824.11 | 2.776 | 29.738 |
| MLP | 96.05 ± 0.79 | 96.08 ± 0.71 | 1179.03 | 0.901 | 27.772 |
| Linear SVM | 90.34 ± 0.00 | 89.70 ± 0.00 | 17.25 | 0.614 | 27.179 |
| Logistic regression | 87.87 ± 0.00 | 88.03 ± 0.00 | 12.39 | 0.652 | 27.270 |
| RBF-SVM† | 98.88 ± 0.00 | 98.83 ± 0.00 | 2428.27 | 1.193 | 28.109 |

上表显示两层 CNN 平均准确率为 99.06 ± 0.33%，宏平均 F1 为 99.14 ± 0.32%，模型 723.08 KiB，推理 91.050 ms，端到端 120.655 ms；RBF-SVM 为 98.88% 准确率、98.83% 宏平均 F1，模型 2428.27 KiB，推理 1.193 ms，端到端 28.109 ms。Patch Transformer、MLP、线性 SVM 和逻辑回归的准确率分别为 96.40 ± 0.71%、96.05 ± 0.79%、90.34 ± 0.00% 和 87.87 ± 0.00%。RBF-SVM 端到端比 CNN 快 4.29 倍，宏平均 F1 只低 0.31 个百分点。特征提取平均 25.89 ms，对 RBF-SVM 约占端到端 93%，而 CNN 推理约占其总时间的 75%。

下图把这种权衡画成散点，横轴是端到端延迟，纵轴是准确率，读图时先看横纵轴方向再看相对位置。

> **看图路径：** 1. 看横轴端到端延迟与纵轴准确率的刻度与方向；2. 比较右上角 CNN 与左上角 RBF-SVM 的位置差异；3. 观察中间 MLP 与 Patch Transformer 和左下两个线性模型的落点

[![原论文 Fig. 2：Classification accuracy versus median end-to-end latency for six classifiers on the Raspberry Pi 5.](https://arxiv.org/html/2610.39371v1/shipsear_accuracy_latency_revised_2.png)](https://arxiv.org/html/2610.39371v1/shipsear_accuracy_latency_revised_2.png)

*论文图 2。原论文 Fig. 2:：“Classification accuracy versus median end-to-end latency for six classifiers on the Raspberry Pi 5.”。*

这张散点图确实可见横轴为 End-to-end latency (ms)，范围约 25 到 125 ms，纵轴为 Accuracy (%)，范围 86 到 102。右侧蓝色大圆点为 CNN，准确率约 99% 但延迟约 120 ms；左侧棕色大圆点为 RBF-SVM，准确率 98.88% 但延迟约 28 ms。中间绿色和橙色小点为 MLP 和 Patch Transformer，准确率 96% 附近，延迟也在 28 ms 附近；下方红色和紫色小点为 Linear SVM 和 Logistic regression，准确率约 90% 和 88%。它直观支持论文的选择：RBF-SVM 接近 CNN 的纵轴高度，但横轴大幅左移。

### 持续运行时 CPU 内存和功耗差多少

这张表的比较问题是：60 秒持续执行下，6 个模型的系统 CPU、进程内存、监测功耗和最高温度有何差异。条件是同一树莓派 5 和持续负载，CPU 为平均系统利用率，内存为进程内存，功耗仅覆盖监测导轨而非总输入功率，数值越低代表硬件负担越小。

| Model | CPU (%) | RAM (MiB) | PMIC (W) | Max. temp. (∘C) |
| --- | --- | --- | --- | --- |
| CNN (2-layer) | 54.56 | 490.52 | 5.193 | 54.50 |
| RBF-SVM | 25.16 | 293.14 | 3.863 | 48.50 |

表中 CNN 的 CPU 为 54.56%，内存 490.52 MiB，功耗 5.193 W，最高温度 54.50 摄氏度；RBF-SVM 的 CPU 为 25.16%，内存 293.14 MiB，功耗 3.863 W，最高温度 48.50 摄氏度。换算下来 CNN 的系统 CPU 约为 RBF-SVM 的 2.17 倍，进程内存多约 67%，监测功耗高约 34%。Patch Transformer 的 CPU 为 30.48%，内存 452.11 MiB，功耗 4.153 W，仍明显高于 RBF-SVM。其余 MLP、线性 SVM 和逻辑回归的 CPU 都在 25% 左右，内存约 287 到 291 MiB。

这个结果支持论文的判断：RBF-SVM 在接近 CNN 分数的前提下硬件需求低得多。但限制也要讲清：功耗不是整机功率，温度受散热和环境影响，60 秒负载不等于长期野外部署。而且 RBF-SVM 模型文件最大，达 2428.27 KiB，说明省的是算力和内存占用，不是存储，这与支持向量数量多有关，不能把模型小和跑得快等同起来。

### 统计池化和切块形状分别带来什么变化

支撑实验回答两个设计问题：时间统计池化能否在压缩的同时保住性能，切块形状如何影响 Transformer 的表示与复杂度。条件是用固定的一层 CNN 比较 STFT，用探索性配置比较池化和切块，因此数字不能直接等同于最终两层 CNN 的主结果。

STFT 部分，将 FFT 从 2048 提到 4096、频率 bins 从 64 提到 128 后，宏平均 F1 从 88.41% 提高到 93.84%，参数从 1893 增加到 3173。这说明更细的频率划分带来了判别收益，但代价是前端和模型都变大。论文最终选 4096 点 128 bins 作为公共表示，后续所有延迟测量都基于它。

池化部分如前表所示，无池化 CNN 分类器输入 302080 维，整体参数约 1668000，宏平均 F1 89.87%；加均值加标准差后输入 5120 维，参数 183237，宏平均 F1 96.98%。参数减少约 89% 反而涨点，表明直接把大展平向量接全连接层既笨重又难学，时间聚合是更有效的归纳偏置。切块部分，局部块 74.53% 到全频块 96.85% 的跃升表明把跨频率成分放在同一块内一起表示对区分船舶声音很关键，而 128×10 比 128×20 略高且参数更少，提示时间分辨率和序列长度之间还有调优空间，但论文没有进一步做算子级分析。

### 搬到 Zero 2 W 后还能跟上连续音频吗

这张表的比较问题是：同一个 RBF-SVM 在树莓派 5 和更弱的 Zero 2 W 上，特征提取、推理、内存和 CPU 如何变化，能否处理连续 5 秒音频。条件是同一 ShipsEar 测试流程，延迟为中位值，内存区分绝对值和占设备比例。

| Metric | Pi 5 | Pi Zero 2 W |
| --- | --- | --- |
| Feature extraction (ms) | 26.10 | 327.88 |
| SVM inference (ms) | 1.19 | 9.40 |
| Peak process RAM (MB) | 307.4 | 119.02 |
| RAM / device capacity (%) | 7.7 | 24.4 |
| Mean process CPU (%) | 25.07 | 25.25 |

表中树莓派 5 的特征提取为 26.10 ms，SVM 推理为 1.19 ms，峰值进程内存 307.4 MB，占设备 7.7%，平均进程 CPU 25.07%；Zero 2 W 上特征提取为 327.88 ms，推理为 9.40 ms，峰值内存 119.02 MB，占设备 24.4%，平均进程 CPU 25.25%。Zero 2 W 保持 98.88% 准确率和 98.83% 宏平均 F1，中位端到端延迟 349.09 ms，持续吞吐 2.962 次分类每秒。连续 5 秒音频只需要 0.2 次每秒，因此是所需速率的 14.8 倍。功耗方面，全测试集推理时平均设备功耗 1.17 W，空闲 0.55 W，负载增加 0.62 W。

限制在于这仍是离线文件推理，不是带水听器连续采样的野外实测。WAV 加载、采样抖动、供电波动和长时间发热都没有覆盖。而且瓶颈仍在特征提取，Zero 2 W 上 327.88 ms 远大于 9.40 ms 的推理，未来要降延迟应优先优化 STFT，而不是换更小的 SVM。

### 这些结论在什么条件下才成立

第一个限制是泛化条件。论文明确说固定划分无法重建源录音身份，不能验证录音无关泛化。同一条录音的不同 5 秒段可能同时出现在训练和测试中，这会抬高分数。因此 99.06% 和 98.88% 只是该划分下的受控比较，不能推广到新船只、新海域或新设备。论文还提到早期工作在 DeepShip 上做了录音级划分，但本研究没有在 ShipsEar 上补这一验证。

第二个限制是测量口径。延迟是中位数，功耗是监测导轨而非整机输入，温度和 CPU 受系统后台和散热影响。Patch Transformer 推理快于 CNN 的原因作者表示没有算子级 profiling 就无法解释，说明只看参数量和模型大小会误判，必须结合目标硬件实测。RBF-SVM 文件最大但跑得快，再次证明存储和速度是两回事。

第三个限制是与外部高分模型的比较。论文列出 ACNN-DRACNN 99.87%、CAPSE-ViT 99.19%、SSA-CACNN 98.64%，自家两层 CNN 为 99.06 ± 0.33% 且仅 0.183M 参数。但这些数字来自不同划分和条件，不能当成同场胜负，只能说明本文模型在参数受限下仍有竞争力，且优势在于附带了延迟和功耗的实测。

### 要复现第一步做什么，需要哪些信息

复现第一步是拿到相同的 ShipsEar 切分和 STFT 配置。需要 1778 训练段和 445 测试段的固定划分、16 kHz 采样、5 秒段长，以及 4096 点 FFT、128 bins 得到 128×475 的流程。传统模型要复刻均值加标准差拼成 256 维的步骤，神经网络要确认输入是 1×128×475。论文给了流程图和维度，但没有给出窗长、跳长、窗函数和 z-score 的具体参数，这是缺口，需要看代码或补做消融。

第二步是统一计时。把音频加载、特征提取和推理分开计时，报告中位和 P95，另跑 60 秒持续负载记录 CPU、内存、温度和监测功耗。只报推理延迟会掩盖特征提取占大头的事实，复现时必须保留 3 段拆分，否则无法对照 25.89 ms 平均特征提取和 RBF-SVM 推理 1.193 ms 的结论。

关于资源可用性，本次收到的证据中没有完成 HTTPS 验证的作者资源，不得声称代码、模型或数据已公开。来源未确认不是技术缺陷，但意味着读者不能默认能下载到权重或一键运行脚本，复现应从数据集申请和按论文描述重写流水线做起，并保留 5 个种子的均值和标准差报告方式。

### 什么时候值得尝试这种轻量路线

当部署地点远海、无稳定供电和网络，且任务是 5 秒级船舶分类时，本文路线值得参考。做法是先用公共 STFT 搭好音频到预测流水线，再用 256 维统计特征试 RBF-SVM，用整图试小 CNN，两者在同一设备上比准确率、端到端延迟和持续资源占用。如果 RBF-SVM 只低零点几个百分点但快几倍，且特征提取是瓶颈，那么优先优化前端比压缩分类器更划算。

还需要补的验证是录音级划分、新海域数据和接水听器的连续采样测试。只有补了这些，才能知道 14.8 倍吞吐余量在真实采样抖动和长期运行下是否还够。初学者复述时记住三句话：输入是 5 秒 16 kHz 音频经 STFT 变成 128×475；传统路做均值标准差池化成 256 维再分类，神经路直接吃图；选型看端到端延迟和硬件占用，而 RBF-SVM 在本划分本设备上接近 CNN 准确但便宜得多。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.39371v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-30/)
