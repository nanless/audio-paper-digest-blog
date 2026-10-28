---
title: "Dolphin broadband transient vocalization detection in impulsive ambient noise"
date: 2026-10-27
draft: false
tags: [音频事件检测, CNN, 生物声学监测, 单通道]
categories: [论文速递]
description: "论文要从枪虾主导的浅海噪声中检出海豚 click、buzz 和 burst-pulse 三类宽带瞬态叫声，采用直接处理波形的轻量一维卷积网络 TRIDENT 配合可控信噪比混合与归一化训练，在混合测试集上虚警率 1% 时检出率达 0.844，代价是依赖合成训练与人工挑选的难负样本且结论限于新加坡周边数据条件。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.35641"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在枪虾噪声中检测海豚宽带瞬态叫声：TRIDENT 如何保留波形结构"
paper_digest_original_title: "Dolphin broadband transient vocalization detection in impulsive ambient noise"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.35641v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.35641v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.35641v1.pdf"
paper_digest_primary_task: "音频事件检测"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.event-detection","label":"音频事件检测"},{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"setting","id":"setting.single-channel","label":"单通道"}]
paper_digest_primary_method: "CNN"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文要从枪虾主导的浅海噪声中检出海豚 click、buzz 和 burst-pulse 三类宽带瞬态叫声，采用直接处理波形的轻量一维卷积网络 TRIDENT 配合可控信噪比混合与归一化训练，在混合测试集上虚警率 1% 时检出率达 0.844，代价是依赖合成训练与人工挑选的难负样本且结论限于新加坡周边数据条件。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hari Vishnu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jin Xinhui"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mandar Chitre"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Simen Hexeberg"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Koay Teong Beng"}]
paper_digest_abstract_sha256: "596fb490b11944759ee6db3e67688c006a2d804e100941192a550e96e7180450"
paper_digest_sidecars: {"citation.bib":{"sha256":"8cc5d7c5fd46682c703c43096679c54f611b69e734a4aaa65928ae7c4ea76865","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35641/citation.bib"},"citation.json":{"sha256":"4bb9ed031f1c606bc4f7852eb363b3219cbaa62fae202f5dd9ac5750de9c0995","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35641/citation.json"},"citation.ris":{"sha256":"80d565282cbd09025832282f7ebe993b419d2b8748ab14fa9faade64baa553ad","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35641/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"c114f3d9e407e086b7fd3a72129c3d4708fee1804cfb4888fc3497fee20e4934","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35641/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f66fe8a957e93ae9a8453b1f34576ec2f52bbf85f4b2c45544d12eaebf5f7f36"
paper_digest_api_reader_plan_sha256: "b221c964b00e0bb2f2639ba24a43ad95d4da33eb307f690f4fc67c2b03a0e6b2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "af462ec9aef767fca401ba60378cb7a66a0d588360eb2a2e084ed56c590f2131"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "822adcfbc086ab719fac58c59f81190444fe8f3b9bb4a8df302b2d534421b2a9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "cd819ba61f533ddcf73b4db367d02ce015fb2a13b90e811c6ae62730ffe06bbb"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c610968e2e3e3b3a861cf935e9c090c5c86f3e2a8b06fdb5b7f720a066a314c9"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在枪虾噪声中检测海豚宽带瞬态叫声：TRIDENT 如何保留波形结构

> 英文题目：*[Dolphin broadband transient vocalization detection in impulsive ambient noise](https://arxiv.org/abs/2610.35641v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频事件检测](/audio-paper-digest-blog/papers/?concept=task.event-detection)
- **研究方法**：[CNN](/audio-paper-digest-blog/papers/?concept=method.cnn)
- **研究条件**：[单通道](/audio-paper-digest-blog/papers/?concept=setting.single-channel)
- **应用**：[生物声学监测](/audio-paper-digest-blog/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.5/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Hari Vishnu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jin Xinhui：机构信息未能在本次解析中与作者逐人可靠绑定
- Mandar Chitre：机构信息未能在本次解析中与作者逐人可靠绑定
- Simen Hexeberg：机构信息未能在本次解析中与作者逐人可靠绑定
- Koay Teong Beng：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

新加坡周边热带水域的长期被动声学监测需要从枪虾主导的脉冲噪声中找出海豚的宽带瞬态发声，输入是单水听器录音，输出是每个0.5 s窗是否含有喀哒声脉冲串、嗡鸣或burst脉冲，难点是目标与干扰同为短时宽带脉冲，频谱能量线索不可分。TRIDENT（瞬态脉冲噪声检测网络，TRansients in Impulsive-noise DEtection NeTwork）先把高信噪比叫声与实测噪声按峰值信噪比合成固定窗混合样本，以扩充多样性并模拟真实挑战条件。混合样本经中值绝对偏差归一化使正负类能量分布重叠，再送入直接处理原始波形的一维卷积网络（one-dimensional convolutional neural network，1D CNN）学习局部峰值与脉冲间隔组织，训练中加入船噪声等困难负样本与幅度缩放增强以抑制能量捷径。同一联合二分类器同时处理三类叫声，避免为每类维护专用模型，输出即为各窗的含叫声概率。与只用能量或熵的传统检测器相比，该路线保留了非线性去噪会抹掉的瞬态峰值。在包含三类目标与困难负样本的混合测试集上，联合模型在误警率为1%时的检出率（probability of detection at probability of false alarm of 1%，PD@PFA=1%）为0.844，高于Surfperch嵌入加逻辑回归同指标的0.753和加多层感知机同指标的0.782，受试者工作特征曲线下面积（area under the curve，AUC）为0.959。结论适用于新加坡十个岛礁站点共54.2记录月的白天集群活动分析，对低信噪比远距离信号和未见物种仍需验证，原文披露在Jetson Xavier NX上每0.5 s窗平均耗时8.4 ms，原文未披露完整训练时长与算力成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 新加坡浅海监听为什么难：目标与干扰长得太像

这篇论文研究被动声学监测中的一个具体检测任务：输入是海底单水听器长时间录下的原始声音，输出是每段 0.5 秒波形中是否含有海豚宽带瞬态叫声。目标包括回声定位用的 click 列车，以及社交时常用的 buzz 和 burst-pulse。部署环境是新加坡南部岛礁周围的热带浅海，2 kHz 以上背景主要被枪虾群的 snaps 占据，其源级可达 187 dB re 1 μPa，10 kHz 处带级有时超过 70 dB。

要理解难点，先看干扰长什么样。下图上排是 1 秒原始压力波形，下排是对应谱图，可见大量随机出现的双极性尖峰，在谱图上表现为贯穿全频带的亮色竖纹。这种宽带、短时、脉冲式的结构，正好与海豚目标共享。也就是说，检测器不能靠找某个窄带频率或比总能量大小来区分，因为干扰本身就是宽带脉冲。

> **看图路径：** 1. 看上排波形中随机出现的双极性尖峰幅度；2. 看下排谱图上遍布全频带的亮色竖纹；3. 对比图 1 目标信号，体会二者在时域和频域的重叠

[![原论文 Fig. 2：(a) Representative timeseries and (b) spectrogram of snapping shrimp noise background showing…](https://arxiv.org/html/2610.35641v1/Plots/timeseries_and_spec.png)](https://arxiv.org/html/2610.35641v1/Plots/timeseries_and_spec.png)

*论文图 2。原论文 Fig. 2:：“(a) Representative timeseries and (b) spectrogram of snapping shrimp noise background showing broadband impulsive nature of the snaps.”。*

上图确实显示了枪虾噪声的宽带脉冲特性：时域尖峰密集且幅度起伏大，频域没有稳定的窄带轨迹，只有随机的竖直能量。这解释了为什么论文强调必须保留波形细节，以及为什么针对哨声的窄带轨迹方法不能直接搬过来。后续所有的数据合成、归一化和网络设计，都是围绕去掉能量捷径、逼模型看时间结构展开的。

### 已有方法为何在枪虾噪声下失灵

早期齿鲸 click 检测多用信号处理启发式方法。Teager-Kaiser 能量算子利用脉冲能量包络找 click，在较干净环境有效，但对脉冲干扰敏感。熵方法在受控噪声下对哨声和 click 准确，但已有研究显示在枪虾噪声下 click 检测明显退化，因为目标与干扰的脉冲结构相似。时频特征加支持向量机依赖预设特征，对未见过的复杂模式表达有限。

深度学习主流做法是对谱图用 2 维卷积网络，例如抹香鲸 click 检测曾取得接近完美的效果，也有工作用无监督聚类或脉冲间隔等参数区分物种。通用生物声学基础模型如 Surfperch 用 EfficientNet 在礁区、鸟类等声音上预训练，再冻结嵌入层加分类头微调，在很多水下任务迁移效果好。但论文指出，在新加坡这类浅海热带水域，针对宽带瞬态的检测仍是空白，之前为新加坡水域开发的 DEVMAN 主要针对调频哨声，设计上就会漏掉很多 buzz 和 burst-pulse。

比较时要注意条件是否相同：能量与熵基线原本并非为枪虾条件设计，谱图模型原本面向窄带轨迹或较干净的 click 数据。论文把它们放在同一混合测试集上比较，比较的是在当前部署条件下的适用性，而不是说这些方法在各自原始条件下不好。

### 要检的三类信号长什么样：孤立尖峰与密集脉冲组

论文把检测对象分成两类时间组织。click 是持续仅数十微秒的短时宽带超声脉冲，幅度峰值很高，在波形上表现为孤立的高幅瞬态，按一定脉冲间隔排成列车，判别信息集中在局部峰而非整窗平均统计。buzz 和 burst-pulse 同样宽带脉冲，但脉冲间隔更小、排列更密，burst-pulse 比 click 列车有更复杂的组织，在波形上呈现成团的脉冲组。

下面的对照图有助于建立直觉，读图时重点看时间组织而非绝对幅度。

> **看图路径：** 1. 对比左列孤立尖峰与右列成团高幅振荡的包络差异；2. 看下排谱图上宽带竖纹与成块能量分布的区别；3. 注意横轴均为 1 秒，纵轴为未校准压力与频率

[![原论文 Fig. 1：Representative timeseries and corresponding spectrograms of high-SNR examples of the two target…](https://arxiv.org/html/2610.35641v1/Plots/click_squwk_waveforms.png)](https://arxiv.org/html/2610.35641v1/Plots/click_squwk_waveforms.png)

*论文图 1。原论文 Fig. 1:：“Representative timeseries and corresponding spectrograms of high-SNR examples of the two target signal classes considered in this work, recorded in controlled conditions.”。*

左列对应 click：上排可见约 10 个孤立尖峰，间隔较规则，下排谱图对应位置是细而亮的宽带竖纹。右列对应 burst-pulse：上排是四团持续约 0.15 秒的高幅振荡，下排则是成块的宽带能量。两类信号都宽，但一个是稀疏尖峰，一个是密集脉冲组。论文后面讨论联合还是分开建模，正是针对这种既共享又不同的结构。

**click 列车 × buzz 与 burst-pulse：** click 列车指间隔较大的孤立宽带脉冲序列，buzz 与 burst-pulse 指脉冲间隔更小、排列更密集的脉冲组，二者共享短时宽带瞬态属性但时间组织不同，联合建模是让一个检测器同时学习这两种时间组织，避免只记住其中一种。

训练与部署之间还有错位：高质量正样本稀缺，多来自已知物种的受控高信噪比录音，背景与大海不同；而部署时目标稀少、信噪比低、嵌入复杂背景。加上归一化、限幅和混合方式会抹掉峰值信息或人为制造能量差距，模型很容易走捷径，所以数据处理必须与结构一起设计。

### TRIDENT 的整体流程：从原始录音到二分类分数

TRIDENT 是波形 1 维卷积网络检测器，名字取自在脉冲噪声中检测瞬态。全流程可沿一个样本理解：原始录音先重采样到 44.1 kHz 并经 1 kHz 高通滤波，强调高频瞬态并压住低频背景；然后切成固定 500 毫秒的窗，每窗 22050 个采样点；网络直接对该波形输出一个检测分数，阈值化后判定该窗含海豚宽带叫声还是仅含环境噪声与其他声音。

训练数据不是直接采集足够的低信噪比样本，而是用高质量叫声与真实海噪声按可控信噪比随机混合合成，配合波形特定的归一化和难负样本挖掘。推理时只用单个联合模型同时处理 3 类信号。论文刻意全程不用非线性去噪或限幅，因为那种去噪会压平枪虾脉冲，同时也压平目标赖以区分的瞬态峰，等于把判别信息提前丢掉。这个选择让原始问题更难，但保留了波形保真度，把区分负担交给模型。

### 预处理做了什么：重采样、高通与刻意不做去噪

预处理只有两步线性操作：全部原始音频重采样到 44.1 kHz，再过截止 1 kHz 的高通滤波器。选 44.1 kHz 一是因为多数训练数据本来就是该采样率，二是作者观察到开放海域样本中可探测能量主要集中到 30 kHz 以内，更高频因吸收衰减快而沉到枪虾噪声 floor 之下，远距离难检的正是这种情况。近距离高信噪比信号本来就容易检出，不是难点。

关键在于没做什么：与哨声检测器不同，这里任何位置都不加限幅等非线性预滤波。非线性去噪在谱图上压枪虾脉冲、对调频检测有帮助，但会把 click、buzz 和 burst-pulse 的瞬态峰一起 flatten。论文的消融表明，把判别交给模型更有效，前提是后续归一化不制造能量捷径。

### 网络结构：轻量窄深一维卷积如何看 500 毫秒

目标判别信息在短时波形结构而非窄带频率轨迹，转谱图会引入窗长、傅里叶点数和重叠的权衡，模糊精细时间细节。1 维卷积直接从波形学习特征，避免了手工时频参数选择。500 毫秒窗的选择兼顾上下文与成本：太短则窗内只有零星脉冲，难以区分有组织的结构化脉冲串与偶发噪声；太长则增加计算、标注复杂，还可能混入多个无关事件。500 毫秒足以保留 buzz 和 burst-pulse 的局部脉冲间隔等组织信息，又保持训练推理高效。

读图时沿主路径自上而下看，先特征提取后分类的划分有助于理解参数量为何很小。

> **看图路径：** 1. 沿输入 500 毫秒波形向下看特征提取与分类两阶段；2. 注意残差块内主路与直连支路的相加位置；3. 看通道数从 8 到 32 的逐级加宽与步长下采样

[![原论文 Fig. 4：Architecture of the proposed 1D CNN detector TRIDENT.](https://arxiv.org/html/2610.35641v1/Plots/model-architecture_edit2.png)](https://arxiv.org/html/2610.35641v1/Plots/model-architecture_edit2.png)

*论文图 4。原论文 Fig. 4:：“Architecture of the proposed 1D CNN detector TRIDENT.”。*

该图可见输入为 500 毫秒 44.1 kHz 波形，先经核 15 步长 2 的卷积加批量归一化与激活，再经重复两次的残差块，之后是通道 8 到 16 到 32 的逐级卷积下采样，最后自适应平均池化压成单点，经压缩、丢弃率 0.3 的 Dropout 和 32 到 2 的线性层输出两类对数。整个网络深而窄，仅 5362 个参数，约为后续 Surfperch 对比模型 2400 万量级的三千分之一。批量归一化加在每层卷积后，训练时加 Dropout 改善泛化。

**波形输入 × 时频谱图：** 波形输入指直接输入原始压力时间序列，时频谱图指先做短时傅里叶变换再输入二维网络；本文目标的判别信息在微秒级峰值和脉冲间隔上，转谱图会引入窗长与重叠的分辨率折中，波形输入则保留原始瞬态峰值和重复模式。

### 合成训练数据：峰值信噪比混合与幅度增强

因为新加坡本地叫声录音很少，正样本来自圣淘沙池中中华白海豚、香港海洋公园瓶鼻海豚、康奈尔 Macaulay 图书馆的伊洛瓦底江豚与澳洲驼背豚、在线瓶鼻海豚数据集以及覆盖 17 种海豚和 2 种鼠豚的公开库，负样本来自真实海噪声和经误报挖掘人工核实的难负样本。训练验证测试大致按 50:15:35 划分，并保证各正子类的数量。

训练时每轮动态随机混合信号与噪声，产生约 3600000 种排列以扩大多样性。混合强度由下式控制，分子取混合前峰值归一化后正信号的最大绝对幅度，分母取噪声段均方根，反映瞬态峰的显著性而非整窗能量。

\[\mathrm{SNR}_{\mathrm{peak-to-noise}}=20\log_{10}\left(\frac{\mathrm{Peak}_{\mathrm{signal}}}{\mathrm{RMS}_{\mathrm{noise}}}\right)\]

上式计算的是峰值对噪声比，单位为 dB。按此定义，click 混合范围为 15.6 到 35.6 dB，burst-pulse 和 buzz 为 20.4 到 40.4 dB，若换成常用均方根定义则数值更小，二者不能独立调参。训练时还对合成归一化后的波形乘 0.8 到 1.2 的随机尺度因子以模拟增益与传播差异，不改变信噪比，只用于训练，验证测试不变。不做时域翻转增强，因为目标与枪虾脉冲在时间上不对称，保留方向信息可能有用。

**峰值信噪比混合 × 中值绝对偏差归一化：** 峰值信噪比混合指按信号峰值与噪声均方根之比控制合成强度，中值绝对偏差归一化指混合后再按稳健幅度尺度统一量纲；前者制造接近部署的低信噪比样本，后者抹掉正负样本的整体能量差距，二者配合迫使模型学时间结构而非能量大小。

### 归一化与难负样本：堵住能量捷径

如果正样本只按所加噪声段统计量归一化，正样本窗的均方根分布会整体高于负样本，模型只看总能量就能分开，获得虚假高性能。本文做法是信号加噪声混合后再按中值绝对偏差归一化，负样本直接按同一尺度归一化，使两类均方根分布大幅重叠，模型只能靠瞬态波形结构区分。训练后还做 0.8 到 1.2 的幅度缩放增强，鼓励尺度鲁棒而非记住绝对幅度。

难负样本共 159 段，主要是快船等宽带脉冲结构类似 click 列车或 buzz 的声音。它们是模型真正容易混淆的模式，加入训练可收紧边界。后期还在新录音中用当前模型打分，取每天分数最高的 100 个片段人工分拣真假，并在真阳性附近补听漏检，再加入训练验证集迭代微调，使检测器逐步适应本地物种。

**普通背景负样本 × 难负样本：** 普通背景负样本指含枪虾声和船舶声的一般海噪声段，难负样本指曾被模型误判、听感或波形类似 buzz 的快船声等干扰；前者教会模型区分有无目标，后者收紧决策边界以减少在真实记录中的误报。

### 录音与数据集划分：在哪里录、如何测

录音用 Loggerhead LS1 单水听器独立记录器，配 High-Tech 水听器，灵敏度 -179.90 dB re V/μPa，增益 16.77 dB，采样 96 kHz，16 位，布放在海底，每次约 1 个月。2019 年 6 月到 2021 年 9 月在 10 个岛址共获得 54.2 记录器月数据。测试集强调挑战性，多用原始数据中手选的低信噪比样本而非合成混合；验证集含 5980 个样本，正负大致均衡，正样本为合成混合，用于早停，即验证集召回连续下降或饱和时停止训练。

评价采用阈值无关与应用导向指标：在虚警概率 1% 时的检出率作为主要指标，遵循 Neyman-Pearson 准则，接收机工作特性曲线下面积作为次要指标。选低虚警工作点是因为长时监测中即使很小的虚警率也会产生大量待复核片段，低虚警使后续丰度估计等任务的审查量可控。

下表比较长期监测中各岛址的空间覆盖是否均衡，给出各岛址部署月数、检出事件数与有检出天数的分布。理解这些数字时需要结合部署时长做归一化，不能只看原始事件数。

| Location | No. of | No. of | Months |
| --- | --- | --- | --- |
| Hantu | 170 | 33 | 7.7 |
| Jong | 13 | 7 | 5.2 |
| Kusu | 14 | 3 | 4.3 |
| Raffles Lighthouse | 61 | 5 | 5.2 |
| Seringat | 6 | 1 | 6.3 |
| Semakau Northwest | 0 | 0 | 5.2 |
| Semakau Southwest | 0 | 0 | 2.3 |
| Subar-Darat | 51 | 3 | 6.1 |
| Subar-Laut | 10 | 1 | 3.9 |
| TPT | 0 | 0 | 5.6 |

上表显示 Hantu 检出最多且有检出天数最多，Raffles Lighthouse 与 Subar-Darat 也有数十次事件，而 Semakau 两站与 TPT 为零。限制是零检出不等于无海豚，可能是出现少、叫声弱或被噪声掩蔽；原始事件数受单次相遇产生多个相关窗的影响，后文因此推荐用有检出天数作为更稳健的存在指标。

### 训练验证测试的样本构成：正负如何配比

下表比较问题是模型见过什么样的正负分布：训练、验证、测试中独立 click 样本、buzz 加 burst-pulse 样本、普通噪声负样本与难负样本的数量。这决定了联合与专用模型的比较是否公平，因为目标定义实验保留相同来源、预处理和负样本构造，只调整正类组成。

| Split | Pos | Pos | Neg | Neg | Total |
| --- | --- | --- | --- | --- | --- |
| Train | 723 | 808 | 3390 | 93 | 5014 |
| Validation | 187 | 196 | 700 | 33 | 1116 |
| Test | 491 | 247 | 1893 | 33 | 2664 |

上表可见训练以普通噪声负样本为主，难负样本仅 93 段但作用关键；验证集原始样本少于测试集，因为验证正样本经合成混合扩增到 5980 个评估样本，而测试正样本多为手选低信噪比原始片段。限制是正样本经规则候选加人工核实挑选，可能偏向显著或典型模式，低信噪比训练样本不足才需合成混合弥补。

### 联合还是专用：一个模型能否同时管三类叫声

下表比较在匹配与混合评估下目标定义的影响：只练 click、只练 buzz 加 burst-pulse、联合训练 3 类，在各自单类测试与最终混合测试上的虚警率 1% 时检出率与混合曲线下面积。指标越大越好，加粗为列最优。解读时要看跨测试条件的泛化，而不只读单列最高值。

| Model / Data for metric | Click-only PD@PFA=1% | Buzz+burst-pulse PD@PFA=1% | Mixed-test PD@PFA=1% | Mixed-test AUC |
| --- | --- | --- | --- | --- |
| Click-only | 0.786 | 0.514 | 0.695 | 0.936 |
| Buzz+burst-pulse | 0.092 | 0.903 | 0.363 | 0.854 |
| Click + buzz + burst-pulse | 0.811 | 0.911 | 0.844 | 0.959 |
| Click + buzz + burst-pulse (no hard negatives) | 0.752 | 0.870 | 0.791 | 0.974 |
| Surfperch + Logistic regression | - | - | 0.753 | 0.966 |
| Surfperch + MLP | - | - | 0.782 | 0.969 |

上表显示专用模型在匹配条件下尚可，click 专用在 click 测试上 0.786，buzz 专用在 buzz 测试上 0.903，但交叉到混合测试分别跌到 0.695 和 0.363，说明窄目标过拟合。联合模型在 click 单测 0.811、buzz 单测 0.911 均超过各自专用模型，混合检出率 0.844 为全表最高，曲线下面积 0.959。未胜出项是去掉难负样本的联合模型混合曲线下面积反而 0.974 略高，提醒单看面积会误判，低虚警区检出率才是应用关键。

**虚警率 1% 时的检出率 × 接收机工作特性曲线下面积：** 虚警率 1% 时的检出率指固定虚警概率为 0.01 时正确检出正样本的比例，接收机工作特性曲线下面积指全阈值范围的平均性能；前者对应长时监测中可承受的人工复核量，后者反映整体排序能力，本文以第一项作为选型的主要依据。

读曲线时注意横轴越靠左虚警越低，纵轴越高检出越好，左上角最优。

> **看图路径：** 1. 先看横轴虚警率与纵轴检出率的含义与方向；2. 比较三条曲线在最左侧低虚警区的高度；3. 找到三个圆点标注的虚警率 1% 时检出率数值

[![原论文 Fig. 6：ROC comparison of the click-only, buzz+burst-pulse-only, and joint models on the final mixed-test set.](https://arxiv.org/html/2610.35641v1/Plots/v6_ira_aus_roc_by_model_mixed_macaulay_allneg.png)](https://arxiv.org/html/2610.35641v1/Plots/v6_ira_aus_roc_by_model_mixed_macaulay_allneg.png)

*论文图 6。原论文 Fig. 6:：“ROC comparison of the click-only, buzz+burst-pulse-only, and joint models on the final mixed-test set.”。*

该图确实可见橙色混合模型曲线在左侧最高，标注点虚警率 1% 时检出率 0.844，蓝色 click 专用 0.695，绿色 buzz 专用 0.363，与上表一致。这支持用单个联合模型部署，减少推理时模型数量，且学到跨类的共享瞬态结构。结论成立条件是同一混合测试集含 3 类信号与难负样本，换到其他海域或物种需重测。

### 与已有基线相比：能量方法为何失效，轻量模型赢在哪里

信号处理基线在同一混合集上表现很差：Teager-Kaiser 能量方法曲线下面积 0.30，虚警率 1% 时检出率 0.0005；熵方法面积 0.56，检出率 0.0015。论文解释这不是调参问题，而是二者都依赖脉冲能量，而新加坡水域脉冲能量绝大多数来自枪虾，目标噪声混淆直接导致失效。这也呼应了前文能量捷径的分析。

更强的基准是冻结 Surfperch 嵌入加逻辑回归或两层多层感知机，参数量 24.2 到 24.5 百万，约 4500 倍于 TRIDENT。结果是 TRIDENT 混合检出率 0.844 超过逻辑回归的 0.753 和多层感知机的 0.782，而面积 0.959 略低于对方的 0.966 和 0.969。由于长时监测更在乎低虚警区，论文认为检出率优势更具实际意义，且以 3 个数量级更小的参数实现，归因于针对宽带瞬态定制的数据管线而非通用嵌入。实时性在 Jetson Xavier NX 上测 5 分钟音频，含预处理平均每 0.5 秒窗 8.4 毫秒，表明可实时运行，但这是边缘模块上的测量，换硬件需重测。

### 归一化、难负样本与信噪比定义各自带来什么

归一化消融比较仅按背景噪声归一化与混合后按数据归一化的均方根分布。前者正负类出现明显能量间隔，模型可不学结构就分开；后者重叠大幅增加，论文报告重叠从 81.4% 升到 98.2%，迫使模型看波形结构。这是后续消融有意义的前提，而非可单独夸大的性能提升。

难负样本消融对比上表中联合模型有无难负样本：混合检出率从 0.791 升到 0.844，约 4 个百分点，click 单测从 0.752 到 0.811，buzz 单测从 0.870 到 0.911，代价是混合面积从 0.974 微降到 0.959，说明边界收紧主要改善低虚警区。峰值信噪比定义消融显示比均方根定义好 3.5 个百分点，后者为 0.815，支持用峰值刻画瞬态显著性的选择，但该数值只在本文混合范围与归一化配合下成立。

失败条件也值得记住：buzz 专用模型在 click 单测仅 0.092，几乎完全不迁移；能量基线在枪虾区的低虚警检出率接近于零。这些负结果划定了适用边界，即窄目标或能量线索在该噪声区不可靠。

### 长期应用看到什么：聚集与白天活动能否直接当丰度

将 TRIDENT 用于全部长期录音，共检出 325 个 0.5 秒含叫声窗，分布见岛址表。Hantu、Raffles Lighthouse 等相对活跃，Semakau 与 TPT 暂无检出。论文称声学热点与文献综合的中华白海豚和瓶鼻海豚出现热点同属岛群，可作为独立佐证，但这只是空间重合，不等于种群估计。

时间上检出不均匀，多在数分钟内成团出现，间隔长静默，因此原始窗数是脆弱的存在度量，论文推荐用有检出天数作为稳健指标。检出几乎都在约 07:00 到 20:00 之间，提示日间觅食或社交，但完整昼夜月相季节分析超出本文范围。训练偏向东南亚常见物种，对其他鲸豚的泛化未经测试；正样本挑选可能偏向显著模式；轻量 1 维卷积可能限制长时依赖，注意力或序列模型是未来方向，但需保持计算可行。

### 要复现第一步做什么：数据、超参数与未公开事项

复现应先按原文重建数据管线而非先调网络：收集高质量 click 与 buzz 加 burst-pulse 正样本和真实海噪声，划分训练验证测试并保留手选低信噪比测试；实现 44.1 kHz 重采样加 1 kHz 高通，禁用限幅去噪；实现峰值对噪声比混合，click 用 15.6 到 35.6 dB，buzz 加 burst-pulse 用 20.4 到 40.4 dB；混合后按中值绝对偏差归一化，训练时加 0.8 到 1.2 幅度缩放；加入经误报挖掘的难负样本。

训练用 PyTorch 与 Adam，学习率随轮数下降，无预训练，每层卷积后加批量归一化并加 Dropout，输出加 softmax 以交叉熵训练，验证召回饱和早停。评价固定虚警率 1% 时检出率与曲线下面积。推理窗 500 毫秒。论文未绑定经 HTTPS 验证的代码模型数据资源，本次无可用作者资源声明，因此不能声称已开源；Macaulay 等正样本来源需自行申请。边缘延迟 8.4 毫秒每窗仅对应 Jetson Xavier NX 测量，其他硬件与批量设置需重测。

### 什么时候值得试：结论、代价与还缺的验证

当部署水域以枪虾等宽带脉冲噪声为主，且目标是 click、buzz 或 burst-pulse 这类瞬态结构时，本文的波形加合成混合加稳健归一化路线值得尝试；若目标是窄带哨声轨迹，则此前 DEVMAN 类谱图去噪路线更合适，不应混用。值得尝试的信号是低虚警区检出率的提升与 3 类联合的便利，代价是需要人工挖掘难负样本与迭代标注，以及合成混合可能引入的分布偏差。

容易误解的是把混合面积略低当作联合模型更差，或把零检出当作无海豚，或把通用大模型的面积优势直接当部署优势。在长时监测的复核负担约束下，低虚警检出率与参数量才是更相关的权衡。还缺的验证包括跨物种泛化、跨站点与季节泛化、与其他水域枪虾强度的关系，以及检出分数到出现天数再到丰度的标定。后续时空与行为分析有待专门研究，本文提供的是可实时部署的检测基础。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2610.35641v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
