---
title: "A Dual Evaluation for Music Transcription"
date: 2026-08-06
draft: false
tags: [音乐转录, 自监督学习, 多模态模型, 音频理解, Transformer]
categories: [论文速递]
description: "音乐转录 | 7.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.04511"
---

# 📄 A Dual Evaluation for Music Transcription

标签：#音乐转录 #自监督学习 #多模态模型 #音频理解 #Transformer

**7.7/10** | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1.1/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.7/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #音乐转录 | #自监督学习 | #多模态模型 #音频理解 | [arxiv](https://arxiv.org/abs/2608.04511)


### 👥 作者与机构

- 第一作者：Ping Wang（华盛顿大学；按署名顺序为第一作者）
- 作者列表：
  - Ping Wang（华盛顿大学）
  - Guang Yang（华盛顿大学）
  - Nazif Can Tamer（华盛顿大学）
  - Victoria Ebert（华盛顿大学）
  - Noah A. Smith（华盛顿大学和艾伦人工智能研究所）
- 通讯作者：论文未明确标注通讯作者

### 💡 毒舌点评

这项工作的核心贡献在于把“转录质量”拆成“书面记谱”和“播放感知”两个正交维度，并通过大规模人类 ABX 实验确认了 CLEWS 这一最便宜的自动指标恰好在人类偏好上相关性最高，这一发现具有很高的实用价值。但整套评估始终以西方古典钢琴独奏、前三分钟片段为边界，所谓“dual evaluation”能否迁移到乐队、人声或非古典风格，论文既没有证据也没有给出令人信服的理论预期；同时，记谱侧从未用真人读谱或编辑工时做验证，OMR-NED 衡量的仍只是“符号层面的编辑距离”。这使论文更像一份高质量但边界明确的评估基准，而非已经确立的通用 AMT 评估范式。

### 📌 核心摘要

本文提出自动音乐转录（AMT）系统应同时从“written-score similarity”和“playback similarity”两个维度评估：既检查生成的乐谱与人工参考乐谱在视觉/谱面层面的接近程度，也检查由该乐谱渲染出的音频与原始演奏录音的感知相似度。作者构建了24条模块化音频转乐谱pipeline（8种audio-to-MIDI模型×3种MIDI-to-score转换器），并以230段ATEPP钢琴录音为测试集；谱面侧使用OMR-NED，播放侧使用DTW、TWED、CLEWS、CLaMP 3、Gemini 3.1 Pro等自动评估器，并用106名参与者、3,180条有效ABX听感判断对播放侧指标做标定。结果显示CLEWS segment-mean与人类偏好相关最高（Spearman ρ=0.971，Kendall τ=0.891），且调用成本最低；M2ST转换器在谱面维度普遍最优，而MuseScore转换器在播放维度普遍最优，两个评估维度确实会对同一系统给出不同排序。作者还以端到端模型Rubato作为案例：Rubato在OMR-NED上达到72.30，优于全部24条模块化pipeline，同时在CLEWS上排第六（0.749），说明双维之间的张力可以被端到端设计打破。该研究的实际意义在于为AMT评测提供一个经过人类验证的多指标框架，并给出成本-相关性权衡参考；主要局限在于结果仅覆盖西方古典钢琴独奏、每段音频只取前3分钟、谱面指标尚未经过人类阅读性验证。

下图以一段贝多芬钢琴奏鸣曲为例，直观展示“记谱相似度”与“播放相似度”之间可能出现的冲突。

![Figure 1: Tradeoff between notation and playback similarity in audio-to-score transcription. The top row is a four-measure reference excerpt from Beethoven, Piano Sonata No. 6, third movement, Op. 10 No. 2. Candidate A is produced by Aria-A](https://arxiv.org/html/2608.04511v1/figures/intro_tradeoff_example.png)

Candidate A（Aria+MIDI2ScoreTransformer）的谱面形态更接近人工参考，而 Candidate B（ismir2021+MuseScore）渲染后的听觉效果更接近原始演奏。

### 🔗 开源详情

- 代码仓库：https://github.com/pingw220/AMT-Dual-Eval
- 许可证：整体代码使用MIT License；发布的数据表使用CC BY 4.0。
- 发布内容：评估代码、去标识化的人类ABX响应数据、各系统逐项评估分数；发布范围覆盖渲染音频（DTW/TWED）评估维度和人类听感实验结果。
- 未发布内容：参考音频与渲染音频、MusicXML和MIDI输出、第三方模型输出；这些内容仍受各自许可证约束。
- 隐私处理：参与者标识符被替换为代理ID，映射表不发布；人口统计学信息仅以汇总计数呈现。
- 论文在机器摘要中标记 `has_code: 是`、`has_model: 否`、`has_dataset: 是`；这与“代码与数据部分开放、模型权重未发布”的实际情况一致。

### 🏗️ 方法概述和架构

本文的核心贡献是提出并验证一个“双维评估”方法论框架，用于自动音乐转录（audio-to-score）系统的评测。其整体流程是：对每个待评测系统，输入原始演奏音频，输出MusicXML格式的乐谱；随后分别沿“记谱相似度”和“播放相似度”两条独立通道打分。谱面侧将输出乐谱与参考乐谱做结构化的符号编辑距离比较；播放侧将输出乐谱渲染为音频，与原始录音做自动或人工的感知相似度比较，最终用人类ABX偏好分数筛选出与听觉判断最一致的自动指标。该框架不是可训练的端到端模型，而是“谱面指标选择—音频渲染—特征抽取—对齐距离/嵌入相似度—人类ABX标定—成本分析”的完整评测协议。

记谱相似度维度使用OMR-NED。设 \(\hat{Y}\) 为预测乐谱，\(Y\) 为参考乐谱，\(I(\hat{Y},Y)\) 和 \(D(\hat{Y},Y)\) 分别为将 \(\hat{Y}\) 变换为 \(Y\) 的最少符号插入数和删除数，则单谱OMR-NED为：

\[
\mathrm{OMR\text{-}NED}(\hat{Y},Y)=\frac{I(\hat{Y},Y)+D(\hat{Y},Y)}{|\hat{Y}|+|Y|},
\]

其中 \(|\cdot|\) 为乐谱中的notation symbol总数。该指标覆盖音符属性（音高、临时记号、符头、符杠、连线、符点、延音线、演奏法、装饰音）和非音符对象（谱号、调号、拍号、力度、连音线、歌词、方向记号、和弦符号等）。论文按 martinezsevilla2025smb 的方式报告micro-averaged OMR-NED：

\[
\mathrm{Overall\ OMR\text{-}NED}=\frac{\sum_{k}I(\hat{Y}_k,Y_k)+\sum_{k}D(\hat{Y}_k,Y_k)}{\sum_{k}|\hat{Y}_k|+\sum_{k}|Y_k|},
\]

其中 \(k\) 索引被评测的录音-乐谱对；正文中所有OMR-NED数值均乘以100。论文还对比了MUSTER、MV2H和cogliati2017metric等替代指标，并给出MUSTER各子分数与OMR-NED及人类播放偏好的相关矩阵，说明“结构类子分数更接近OMR-NED，而MeanER/OnsetER更接近人类播放偏好”，因此不能用单一MUSTER子分数稳定代表“记谱质量”。

下图展示了 24 条模块化 pipeline 在 OMR-NED 记谱相似度上的分布，行内灰色线段连接同一 audio-to-MIDI 模型搭配三种 MIDI-to-score 转换器的结果。

![Figure 3: Notation similarity across audio-to-score pipelines. Rows and marker shapes identify the audio-to-MIDI model,](https://arxiv.org/html/2608.04511v1/x2.png)

多数行的 M2ST（紫色）端点位于最右侧，说明该转换器在记谱维度上通常优于 MuseScore 与 music21；同一模型在不同转换器下的跨度也显示了后处理环节对最终记谱质量的显著影响。


播放相似度维度的处理流程如下：

1. 渲染：将预测MusicXML用MuseScore导出为MIDI，再用FluidSynth配合SGM音源合成44.1 kHz WAV，并做峰值归一化。作者声明MuseScore只是固定规则渲染器，不构成对MuseScore系转换器的偏向，但论文未做替换渲染器的敏感性实验。
2. 特征提取：从参考录音和渲染音频中提取14种帧级特征，分为三组：音高/和声类（Chroma、HPCP、Chroma CENS、Tonnetz、CQT、STFT semitone、pitch salience）、频谱类（Mel、MFCC、PCEN-Mel、Log-STFT、spectral flux）、节奏/起始类（onset strength、tempogram）。帧移10 ms，帧级归一化后再计算距离。
3. 特征对齐距离：对每个特征单独计算DTW和TWED。DTW使用余弦局部代价，并将累计代价按规整路径长度归一化；TWED使用 \((\nu,\lambda)\) 参数控制时间刚度和编辑/删除代价，扫描四组参数 \((0.001,1.0),(0.01,1.0),(0.001,2.0),(0.01,2.0)\)。DTW和TWED都是距离（越低越好），在与人类偏好分数算秩相关时取负号。
4. 模型类评估器：
   - AudioLM judge：使用Gemini系列多模态模型，以“参考片段 \(X\) + 候选 \(A/B\)”的ABX prompt强制二选一。先扫描Gemini 2.0 Flash、2.0 Flash-Lite、2.5 Flash、2.5 Flash-Lite、2.5 Pro、3 Flash、3 Pro、3.1 Flash-Lite、3.1 Pro，主报告采用当时最强的 Gemini 3.1 Pro。由于观察到约59%的“首选候选”位置偏好，所有主结果使用正反双序各一次并平均，共3,600次请求。
   - CLaMP 3：多模态自监督嵌入模型，可对音频、ABC记谱和表演信号生成共享空间表示。论文测试audio-audio、audio→ABC、ABC→audio等变体，并区分“broad musical correspondence”与“notation fidelity”，不把CLaMP 3 ABC视为显式记谱指标。
   - CLEWS：音频嵌入相似度评估器，支持distance、similarity、global cosine、segment mean、segment median、best-match等聚合变体。论文采用与人类偏好相关性最高的segment-mean作为代表。
5. 人类ABX标定：24条模块化pipeline构成 \(\binom{24}{2}=276\) 个系统对，结合230段参考录音作为试次池；每位参与者完成30次强制二选一。基于模拟功效分析招募目标为100人，实际完成106人、3,180条有效判断。用Bradley-Terry模型将逐对胜负聚合为每个系统的单一人类偏好分数 \(\theta_i\)，满足 \(\sum_i\theta_i=0\)：

\[
P(i\succ j)=\frac{\exp(\theta_i)}{\exp(\theta_i)+\exp(\theta_j)}.
\]

最终以Spearman ρ和Kendall τ衡量自动指标与该人类偏好分数的排序一致性，并给出每1,000个评估单位的成本。

系统池方面，24条pipeline由8种audio-to-MIDI模型（MT3、ISMIR 2021、ISMIR 2022 small/base、Basic Pitch、ByteDance Piano、Transkun、Aria-AMT）与3种MIDI-to-score转换器（music21、MuseScore、MIDI2ScoreTransformer）配对组成。评测集来自ATEPP中有配对乐谱的子集，并剔除符号乐谱来源于ASAP的录音，以保守降低与既有系统训练材料的重叠风险；最终包含230段唯一录音、23部作品、6位作曲家、30位演奏者，每段截取前3分钟。Rubato是评审期之后提交的端到端系统，按同一协议单独评测，未进入人类ABX盲听池。

### 💡 核心创新点

1. 将AMT测评显式拆分为“记谱相似度”和“播放相似度”两个正交维度，并分别给出可操作化指标：OMR-NED对应书面记谱，渲染音频的人类偏好/自动距离对应播放感知。此前AMT评测主要聚焦audio-to-MIDI的音高/起始/偏移F-measure，或只做单一谱面对比；该框架首次从“最终用户看谱 vs 听谱”两种使用场景并行约束系统评估。
2. 对播放相似度进行了系统性的人类ABX标注与自动指标筛选：106名参与者、3,180条真实听感判断、24条pipeline、14种音频特征、4组TWED参数、9个Gemini模型变体扫描。以人类判断为锚、以“成本-相关性”为出图坐标，避免结论依附于任意单一自动指标的主观选择。
3. 发现CLEWS（segment-mean聚合）在人类偏好相关性和运行成本上同时占据最优前沿，为后续AMT研究者提供了一个无需调参、接近人类判断的默认播放侧指标。
4. 揭示MIDI-to-score转换器对整体系统排序的影响：M2ST系在OMR-NED上最优，MS系在CLEWS、DTW、TWED、人类偏好等播放侧指标上最优，M21系在两个维度均较差。这一规律在MUSTER结构子分数中也存在，说明谱面/播放双维排序差异不是单一指标的度量伪影。
5. 将端到端模型Rubato作为案例纳入双维框架：Rubato的OMR-NED为72.30，优于全部24条模块化pipeline，同时CLEWS为0.749、排名第六，证明“记谱—播放”之间的张力可以被端到端设计打破，而不是模块化系统不可回避的原理性束缚。

### 📊 实验结果

论文以人类Bradley-Terry播放偏好分数为基准，对自动播放侧评估器做排序。Table 1汇总了最强配置：

| 评估器 | 表示/输入 | Spearman ρ ↑ | Kendall τ ↑ |
|---|---|---|---|
| CLEWS | segment-mean audio embedding | 0.971 | 0.891 |
| Gemini 3.1 Pro | Audio ABX prompt | 0.970 | 0.870 |
| TWED | MFCC; selected cost negated | 0.924 | 0.790 |
| DTW | Chroma CENS; cost negated | 0.891 | 0.761 |
| CLaMP 3 audio | segment-median audio embedding | 0.884 | 0.710 |
| CLaMP 3 audio→ABC | median ref-audio/pred-ABC cosine | 0.879 | 0.710 |
| CLaMP 3 ABC→audio | mean ref-ABC/pred-audio cosine | 0.849 | 0.717 |

下图汇总了五种自动播放相似度评估器在人类偏好相关性（纵轴）与归一化成本（横轴，越右成本越低）之间的权衡关系。

![Figure 5: Cost–human agreement tradeoff for five automatic playback similarity evaluators. Cost is normalized per 1,000 evaluation units using Table 2;](https://arxiv.org/html/2608.04511v1/x4.png)

CLEWS 位于右上角，既保持最高的 Spearman 人类相关性，又是这些评估器中最便宜的；Gemini 3.1 Pro 的相关性与之接近，但成本明显更高。


从表中可见，CLEWS segment-mean与人类偏好一致性最高（ρ=0.971，τ=0.891），略高于位置平衡后的Gemini 3.1 Pro（ρ=0.970，τ=0.870）；传统DSP特征对齐指标中TWED-MFCC和DTW-Chroma CENS也表现较强。CLaMP 3的音频类变体与人类偏好的一致性处于DTW与TWED之间；其ABC相关变体虽然输入为符号表示，但更接近“broad musical correspondence”而非显式记谱保真度。

下图以 CLEWS 播放相似度为横轴、反转后的 OMR-NED 记谱相似度为纵轴，呈现全部 24 条 pipeline 以及作为案例的 Rubato 在双维评估中的位置。

![Figure 2: Notation similarity versus playback similarity for the evaluated audio-to-score systems. The vertical axis is OMR-NED,](https://arxiv.org/html/2608.04511v1/x1.png)

紫色（M2ST）点聚集在上方，表明其在记谱维度占优；蓝色（MuseScore）点偏向右侧，表明其在播放维度占优；橙色（music21）整体位于左下，说明两个维度确实会对同一组系统给出不同排序。


### 记谱—播放二维排序与Rubato案例
在记谱—播放二维比较中（Figure 2），纵轴为OMR-NED（反转后向上表示更好），横轴为CLEWS（向右表示更好）。24条模块化pipeline在二维平面上呈明显分区：M2ST系转换器在谱面侧形成最强集群，MS系转换器在播放侧形成最强集群，M21系整体不占优势。这一结果说明“书面记谱相似度”和“渲染播放相似度”确实会对同一转录系统给出不同的排序，转换器环节对最终系统评价方向有系统性影响。

Rubato作为独立端到端案例被加入同一评估协议：其OMR-NED为72.30，优于全部24条模块化pipeline；CLEWS为0.749，在25个系统中排第六。由于Rubato在人类ABX盲听池完成后才发布，它没有对应的人类Bradley-Terry偏好分数，其感知播放质量仍属于开放问题。

### MUSTER子分数与维度选择的交叉证据
论文还报告了MUSTER子分数与两类基准的关系：结构导向的VoiceER、HandER、ScaleErr与OMR-NED高度相关（ρ分别约为0.94、0.81、0.81）；而MeanER和OnsetER与人类播放偏好更接近（ρ约为0.79和0.84），与OMR-NED的相关仅为0.38和0.50。这说明若只选取单一MUSTER子分数作为“记谱质量”指标，结论会随子分数选择而改变；不同维度需要不同侧重的评估器。

### 🔬 细节详述

- OMR-NED的编辑对象覆盖音符与休止符属性（音高、临时记号、符头、符杠、符点、连线、延音线、演奏法、装饰音等）以及非音符谱面对象（谱号、调号、拍号、力度、连音线、歌词、方向记号、和弦符号等）；OMR-NED不把替换计为单独操作，一次替换等价于一次插入加一次删除。
- 人类ABX试次池由24条pipeline的系统对（共276对）与230段参考录音组合而成；每位参与者完成30次强制二选一，实际回收106名参与者、3,180条有效判断。Bradley-Terry分数满足 \(\sum_i\theta_i=0\)，值越大表示人类偏好越强。
- AudioLM judge的输入为固定10秒片段，而人类听感实验允许听完整未截断播放。Gemini系列筛选时观察到约59%的“首选候选”位置偏差，因此主结果采用A/B与B/A双序各一次并取平均，Gemini 3.1 Pro主判断共3,600次请求。
- CLEWS是学习型音频嵌入相似度评估器，支持distance、similarity、global cosine、segment mean、segment median、best-match等聚合方式；论文选择segment-mean作为代表，因为其与人类Bradley-Terry偏好分数相关性最高。
- CLaMP 3使用音频、乐谱和表演信号的专用编码器并将输出投影到共享嵌入空间；论文将CLaMP 3 ABC视为“跨模态广义音乐对应”而非显式记谱保真度。CLaMP 3 ABC的global cosine与人类播放偏好相关（ρ=0.824，τ=0.659），但与OMR-NED相关更低（ρ=0.681，τ=0.478）。
- CLaMP 3 ABC在5,520个预期乐谱行中成功完成转换与嵌入提取5,261个，覆盖率95.3%；论文将该成功率视为诊断性覆盖统计量，而非评估分数。
- 成本方面，OMR-NED约\(0.200/1,000单位，DTW约\)0.610/1,000单位，TWED-MFCC约\(1.760/1,000单位，CLaMP 3 audio约\)2.800/1,000单位；CLEWS既与人类判断一致性最高，也是可用的最便宜播放侧评估器。Gemini 3.1 Pro类AudioLM judge几乎达到CLEWS的人类一致性水平，但成本约为CLEWS的13倍，且依赖模型版本、prompt、解析方式及专有权重。
- 论文未披露完整prompt模板、Gemini逐变体筛选的完整成本表以及Rubato的详细输出样例；这些细节以补充材料或外部仓库形式部分开放。

### ⚖️ 评分理由

*   创新性 (1.2/2)：提出双维评估框架，将OMR-NED引入完整AMT系统评测，并通过大规模人类ABX实验筛选出CLEWS为最优播放指标，同时揭示记谱/播放维度对系统排序的冲突，具有方法论创新（A_SUMMARY, A_METHOD, A_RESULTS）。

*   技术严谨性 (1.1/1.5)：方法定义严谨，OMR-NED公式、DTW/TWED参数扫描、Gemini位置偏差校正（正反双序）及Bradley-Terry聚合均给出清晰逻辑；CLEWS变体选择基于同一样本相关性的选择偏差虽存在，但整体设计合理（A_METHOD, SCORING_SOURCE_9/40, SCORING_SOURCE_18/40）。

*   实验充分性 (1.0/1.5)：人类标定实验规模大（106人、3180判断）并覆盖24条pipeline与230段录音，但仅限西方古典钢琴独奏前3分钟，且缺少渲染器敏感性、真人读谱验证及Rubato的人类偏好数据，泛化证据不足（A_SUMMARY, A_LIMITS, SCORING_SOURCE_20/40）。

*   清晰度 (0.8/1)：论文结构清晰，公式与指标定义完备，但涉及大量系统缩写、特征和聚合变体，正文与多个附录间内容分配较重，读者需频繁对照才能完整理解，略有认知负担（A_METHOD, A_RESULTS, SCORING_SOURCE_30/40）。

*   影响力 (1.1/1.5)：CLEWS作为低成本高相关指标可能成为社区默认选择，但结论受限于单一数据域，对广泛AMT评估范式的影响仍有待跨风格验证（A_RESULTS, A_LIMITS, SCORING_SOURCE_20/40）。

*   开源 (1.0/1.5)：代码仓库以MIT许可发布，数据表CC BY 4.0，包含评估代码、去标识化ABX数据和逐项分数，但参考/渲染音频、MusicXML和模型输出未发布，属于部分核心产物开放（A_OPEN）。

*   可复现性 (0.3/0.5)：评测流程、特征列表、参数设置（如TWED四组参数）和Gemini候选变体披露充分，但完整prompt模板和逐变体成本表未披露，属于大部分充分但有少量缺失（A_METHOD, A_LIMITS, SCORING_SOURCE_9/40）。

*   工程/实践价值 (1.2/1.5)：提供了每1000单位成本与人类一致性权衡分析，明确建议CLEWS并给出DTW/TWED替代方案的费用，工程实用性强，便于研究者在有限预算下选择指标（A_RESULTS, SCORING_SOURCE_20/40）。

### 🚨 局限与问题

- 评测数据仅覆盖西方古典钢琴独奏，且每段录音只取前3分钟；结论可能无法迁移到其他乐器、乐队编制、人声、非古典风格或更长音乐结构。
- 播放侧结果依赖渲染链路：虽然所有系统都使用一致的MuseScore导出与FluidSynth+SGM合成，但渲染器、音源和归一化方式可能同时影响自动指标和人类听感；论文未做替换渲染器的敏感性实验。
- 记谱侧未用真人读谱或编辑工时做验证；OMR-NED衡量的是符号层面的编辑距离，不一定反映音乐家阅读或修改生成乐谱的实际难度。
- 人类验证只覆盖24条模块化pipeline；Rubato在听感实验完成后才发布，因此没有人类Bradley-Terry偏好分数，其感知播放质量仍是开放问题。
- 端到端AMT系统与模块化pipeline的差异尚未在人类偏好层面直接对比，双维评估对端到端系统的适用性只走完“第一步”。
- 论文未披露的额外限制包括：Gemini模型版本和API可用性会影响AudioLM judge的稳定性；CLaMP 3 ABC覆盖率不是100%；以及不同评测维度可能对系统排序给出冲突结论，实际使用中需要由用户根据下游场景选择权重。

---

[← 返回 2026-08-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-06/)
