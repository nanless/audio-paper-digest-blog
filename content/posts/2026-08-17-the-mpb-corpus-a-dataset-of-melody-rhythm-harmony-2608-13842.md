---
title: "The MPB Corpus: A Dataset of Melody, Rhythm, Harmony, and Melody-Harmony Relationships in Brazilian Popular Music"
date: 2026-08-17
draft: false
tags: [音乐理解, 基准测试, 数据集, 理论分析]
categories: [论文速递]
description: "音乐理解 | 6.8/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.13842"
---

# 📄 The MPB Corpus: A Dataset of Melody, Rhythm, Harmony, and Melody-Harmony Relationships in Brazilian Popular Music

标签：#音乐理解 #基准测试 #数据集 #理论分析

**6.8/10** | 创新 1.1/2 | 严谨 0.9/1.5 | 实验 0.8/1.5 | 清晰 0.7/1 | 影响 0.8/1.5 | 开源 1.5/1.5 | 复现 0.3/0.5 | 工程 0.7/1.5

✅ **6.8/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：中 | #音乐理解 | #基准测试 | #数据集 #理论分析 | [arxiv](https://arxiv.org/abs/2608.13842)


### 👥 作者与机构

- 第一作者：Carlos de L. Almada（School of Music, Federal University of Rio de Janeiro, Rio de Janeiro, Brazil）
- 通讯作者：未说明
- 作者列表：Carlos de L. Almada（School of Music, Federal University of Rio de Janeiro）、Hugo T. de Carvalho（Department of Statistical Methods, Institute of Mathematics, Federal University of Rio de Janeiro）、Felipe D. Martins（Institut für Theorie und Geschichte, Anton Bruckner Universität, Linz, Austria）

### 💡 毒舌点评

亮点是终于给巴西流行音乐做了一个多维度符号化数据集，且把旋律轮廓、节奏、和声、旋律-和声关系同时编码，稀缺性确实突出。短板是本质仍是“专家手工标注 + 描述性统计”的学术资源包，没有 ML 基线、没有自动扩展 pipeline，也没有标注一致性验证，离真正可驱动模型研究的 benchmark 还有明显距离。

### 📌 核心摘要

论文提出 MPB Corpus，一个面向巴西流行音乐（MPB）计算音乐学的符号化数据集，覆盖 10 位作曲家的 500 首作品，每位作曲家 50 首，编码旋律轮廓、旋律节奏、和声、旋律-和声关系四个维度。方法上，论文引入两套分析框架：Genera of Chord Types（GCT）用于和声语义编码，Melodic Filtering Model（MFM）用于旋律轮廓和节奏编码；并进一步提出 NF web 与 MAI 指标刻画旋律与和声关系。与现有巴西音乐数据集多只覆盖单一维度、或主要面向英语流行音乐不同，该语料首次系统性地编码四类符号信息，规模达到 8,426 个 c/r-words、17,053 个和弦、23,447 个音符。探索性分析显示不同作曲家在节奏、轮廓和和声复杂度上存在差异，例如 Jobim/Chico/Bosco 等更接近 samba 节奏，而 Rita Lee 更接近摇滚或 R&B；并通过置换检验证明 r-letter 分布携带显著作曲家风格信息，p < 10^-4。实际意义在于为 MPB 的风格计算研究、计算音乐学和音乐信息检索提供结构化资源。主要局限是标注高度依赖单一专家且人工成本高，缺乏 ML 基线、预测任务和自动扩展能力，模型方法较复杂且部分流程未形式化。

### 🔗 开源详情

论文以数据集论文形式发布，正文多处说明数据集与补充材料随论文提供，并配有 Python 代码。根据论文原文可确认的开源资源包括：

- 核心 CSV 数据：`contour_rhythm.csv`（c_word、r_word、word_index）、`note_function.csv`（scale_degree、note_function、mode）、`harmony.csv`（root、bass、chord_type、chord_symbol、functional_category、key、mode、position）。
- 补充解析文档：`chord_types.pdf`（GCT 和弦类型及谱系关系）、`lexicon_of_functional_categories.pdf`（功能和弦类别词典）、`chord_review_examples.pdf`（谱面纠错示例）。
- 参数/词典文件：`r_letters_countermetricity_values.csv`（r-letter 反节拍强度值）。
- Python 代码：论文明确提到提供代码用于复现全部表格与图；将 GCT 谱系记法转换为基于根音和半音间隔的向量表示；将 c-letter 记法转换为 Parsons Code 或 Dowling 记法。

论文未在给定原文片段中披露具体托管平台、访问 URL 或版本号。机器摘要资源状态为：has_code=是，has_model=未说明，has_dataset=是。

### 🏗️ 方法概述和架构

该论文的核心不是训练神经网络，而是一个半自动、多阶段的符号音乐标注与分析框架。整体流程是：从公开出版的乐谱集中选取作品，校对乐谱并提取名义形式（nominal form），转写为 MIDI，进行乐句切分；随后分别生成旋律轮廓编码、旋律节奏编码、和声编码以及旋律-和声关系编码，最终输出 CSV 数据集和若干可视化/统计指标。

主要模块包括：

GCT 和声语义模型（Genera of Chord Types）
   该模型把和弦类型抽象为 10 个“protochords”：Z、Y、X、W、V、z、y、x、w、v，分别对应大七、属七、减五属七、升五属七、大三和弦、小七、半减七、减七、小大七、小三和弦等原型。通过三类变换操作 ADD（添加）、SUB（替代）、ALT（变化）递归生成和弦变体，并用“谱系记号”表示变体代数与派生路径。例如 protochord z0 对应 *m7，z11 表示小六九和弦，z111 表示小六九十一和弦。模型在约束条件下可生成 161 个和弦类型，其中属和弦 Y 属最多，达 59 个。该模型主要用于统一 MPB 中复杂、半音化、密集和弦的分类。GCT 的变换视角也支持分析抽象和弦类型之间的转换关系，并可为生成式作曲提供风格化素材。

MFM 旋律过滤模型（Melodic Filtering Model）
   MFM 基于分割、抽象和编码三个原则。旋律先被切分为“词”，词内连续音高关系被映射为 7 种 c-letters：u（重复）、P/p（上/下行级进）、A/a（上/下行琶音）、S/s（上/下行跳进）。节奏则以四分音符为一拍、每拍 12 个微小时序单位，编码起音点间距离（IOI），形成 26 个 r-letters；其中 a–v 覆盖大部分常见节奏，w–z 作为通配符。c-word 和 r-word 分别描述轮廓与节奏，忽略绝对音高和具体时值。

量化指标 CIEI 与 CMI
   CIEI（compensated intervallic economy index）对 c-letters 赋予数值，如 u=0、P=1、p=-1、A=3、a=-3、S=5、s=-5，再取均值绝对值和归一化，公式为 \(\mathrm{CIEI}(w)=1-\frac{|\overline{d}(w)|}{5}\)，衡量旋律轮廓的经济性与上行/下行补偿程度。CMI（countermetricity index）对每个 r-letter 赋反节拍强度值，如 n 为 1、b 为 0.1，并对以 b 结尾的 r-word 乘以 λ=0.8，量化切分节奏与反节拍倾向。CMI 公式为 \(\mathrm{CMI}(w)=\lambda \frac{c(w)}{\mathrm{len}^*(w)}\)，其中 \(\mathrm{len}^*(w)\) 为 r-word 长度减去字母 “a” 的出现次数，避免纯起音间隔对空拍的过度计数。

旋律-和声关系模型与 NF web
   该模块基于 chord/scale theory，把旋律音分为结构性音和过渡音（inflections）。结构性音按层级分为根音、三音、五音、六/七音、简单延展音、变化延展音。NF web 由 5 个同心圆环和 12 条半音射线组成，表示 5 个局部层级与 12 个音级之间 60 个可能位置。MAI（melodic anchoring index）通过加权平均量化旋律音对和弦的“锚定”程度，权重为根音 9、三音 7、五音 8、六/七音 5、简单延展音 3、变化延展音 1，最后归一化到 0–1，公式为 \(MAI=\frac{\overline{q}-w_m}{w_M-w_m}\)。

下图展示了从乐谱到NF web的完整分析流程示例。

![Figure 6: Example of the analytical process: a) excerpt being analyzed; b) segmentation of the melody; c) harmonic analysis; d) relation between melody and harmony; e) NF web of this excerpt. For more details on the notation, see Section 3.](https://arxiv.org/html/2608.13842v1/ex-01_04_teia.png)

下图中，a)是待分析的乐谱片段；b)是旋律分段；c)是和声分析与编码；d)是旋律-和声关系标注；e)是生成的NF web，直观显示旋律音在和声层级中的分布情况。


数据流转与工程流程
   分析时，先校对乐谱并转换为 MIDI。人工插入 E6 标记进行乐句切分，c-word 可由 Python 脚本从 MIDI 自动生成；由于 MIDI 表示节奏的限制，r-word 仍为人工编码。和声分析完全人工，记录根音、低音、和弦类型谱系记号、功能和弦记号、调性、调式位置。旋律-和声关系也由人工标注到 note_function.csv。最后用自动脚本检查 c-word 与 r-word 长度匹配、参数范围、缺失值等问题。

关键设计选择是“专家一致性优先”和“名义形式优先”：数据来自权威出版乐谱，只分析歌曲的主要旋律段落，忽略前奏、过门、尾声和 da capo 重复。这样做有利于风格比较，但也牺牲了全曲和表演版本信息。

### 💡 核心创新点

首次构建覆盖四个音乐维度的 MPB 语料库
   以往巴西音乐数据集主要针对 choro 和声、samba 节奏或 maracatu 节奏等单一维度，且规模较小。该数据集同时编码旋律轮廓、节奏、和声、旋律-和声关系，包含 500 首作品，是更完整的符号表征。它为多模态风格的定量音乐学研究提供了原数据。

提出 GCT 和声模型统一复杂和弦类型
   传统和弦标签难以系统化 MPB 中的半音化、密集和声、属和弦变体。GCT 用 ADD/SUB/ALT 操作和谱系记号把 161 个和弦类型组织成 10 个属类，使复杂和弦类型具有可比较的生成谱系，不只是标签枚举。

设计适用于切分节奏的 r-letter 与 CMI 指标
   巴西音乐的反节拍性很强，但一般 MIDI 音高/时值表示难以直接体现。r-letter 以起音点间距离为单位，不依赖绝对时长，CMI 显式量化切分和反节拍程度，能捕捉 samba 类与 rock/R&B 类创作者的节奏差异。

用 NF web 与 MAI 量化旋律-和声锚定程度
   传统和声分析多只判断和弦，不显式分析旋律音在和弦中的功能等级。NF web 把局部和声功能与全局音级结合，MAI 给出单值摘要，使“旋律与和声关系复杂度”可量化，如 Jobim 的 Angela 和 Rita Lee 的 Saúde 得以直接比较。

公开数据、代码与统计检验脚本
   论文不仅发布 CSV 数据集，还提供 Python 代码、转换工具和可视化脚本，并用置换检验示例说明如何在作曲风格推断中使用该数据集。

### 📊 实验结果

论文没有 ML 基线或 SOTA 对比，因为这是数据集论文。主要实验证据是跨 10 位作曲家的描述性统计与一个节奏维度上的统计显著性检验。

以下表格按作曲家汇总了论文 Table 6 中与旋律轮廓、节奏及旋律-和声关系最相关的四项指标。

| 作曲家 | 最常见词长 | CIEI | CMI | MAI |
|---|---:|---:|---:|---:|
| Bosco | 8 | 0.856 | 0.559 | 0.704 |
| Caetano | 7 | 0.873 | 0.463 | 0.721 |
| Chico | 6 | 0.887 | 0.564 | 0.704 |
| Djavan | 6 | 0.863 | 0.558 | 0.643 |
| Edu | 8 | 0.867 | 0.463 | 0.623 |
| Gil | 8 | 0.880 | 0.552 | 0.714 |
| Jobim | 6 | 0.888 | 0.531 | 0.582 |
| Lins | 7 | 0.867 | 0.446 | 0.649 |
| Milton | 6 | 0.898 | 0.388 | 0.684 |
| Rita | 5 | 0.886 | 0.429 | 0.741 |

节奏方面，r-letter “b” 在几乎所有作曲家中占主导，但 Rita Lee 例外，位置 7 占 48.2%。Ivan Lins 和 Tom Jobim 在节拍三分位（位置 5、9）出现率明显更高，分别达 10.7%/10.9% 和 7.4%/7.5%。反节拍 r-letter 方面，Jobim、Chico、João Bosco 主导 “n”，提示 samba 影响；Ivan Lins、Edu Lobo、Milton Nascimento、Rita Lee 的 “e” 更突出，提示摇滚/R&B 或爵士影响。CMI 在 Chico（0.564）、Bosco（0.559）、Djavan（0.558）、Gil（0.552）和 Jobim（0.531）较高。

旋律轮廓方面，大多数作曲家以级进下行的 c-letter “p” 为最高频，但 Milton 和 Rita 以重复音 “u” 最突出。CIEI 整体较高，范围为 0.856–0.898。

和声方面，几乎所有作曲家属 Y 属和弦最频繁，Caetano、Gil、Rita 的 V 属三和弦比例较高；功能上 I 和 V 在全部语料中显著占优。旋律-和声关系方面，约五分之一旋律音是过渡音；Djavan、Edu Lobo、Ivan Lins、Tom Jobim 特别是 Jobim 的延展音比例更高，而 Rita 更偏基本和弦音。Jobim 的 Angela MAI 为 0.416，Rita 的 Saúde MAI 为 0.817。

下图比较了Rita Lee的Saúde和Tom Jobim的Ângela两首作品的NF web与MAI值。

![Figure 12: NF web of two pieces: Saúde, by Rita Lee (left panel), and Angela, by Tom Jobim (right panel). Their respective MAI are displayed above the webs.](https://arxiv.org/html/2608.13842v1/teia_rita_jobim.png)

下图中，左图显示Saúde的MAI为0.817，旋律音更集中于基本和弦音；右图显示Ângela的MAI为0.416，旋律音分布更分散，使用更多延展音，体现了不同作曲家的风格差异。


统计检验方面，基于 r-letter 分布，Jensen-Shannon 距离构造的组间/组内比统计量 R_obs=1.072；在 10,000 次置换中无一次超过该值，估计 p < 10^-4，说明 r-letter 分布携带显著作曲家风格信息。

### 🔬 细节详述

- 训练数据：未涉及训练。数据来源为巴西出版的权威歌曲本/乐谱集，包括 Jobim 2005、Chediak 系列、Sukman and Gilly 2020 等；共 10 位作曲家，每人 50 首，共 500 首。只分析主要旋律段落的“名义形式”，排除前奏、间奏、尾声和 da capo 重复；未提及数据增强。
- 损失函数：未涉及。
- 训练策略：未涉及；未提供学习率、warmup、batch size、优化器、训练步数、调度策略等。
- 关键超参数：非神经网络超参数。c-letter 数值映射：u=0、P=1、p=-1、A=3、a=-3、S=5、s=-5；CIEI 归一化除以 5。CMI 中，每个 r-letter 均有反节拍强度值（如 n=1，b=0.1），若词长大于 1 且末尾为 “b”，λ=0.8，否则 λ=1；此外 CMI 分母为 r-word 长度减去字母 “a” 出现次数。MAI 权重：根音 9、三音 7、五音 8、六/七音 5、简单延展音 3、变化延展音 1。GCT 操作顺序为 SUB（如可能）→ADD→ALT；共有 161 个和弦类型，6 个代数层级。r-letter 反节拍值未在正文完整列出，指向 `r_letters_countermetricity_values.csv`。
- 训练硬件：未说明；论文未涉及模型训练。
- 推理细节：未涉及。
- 正则化或稳定训练技巧：未涉及；但数据校验中使用了自动一致性检查，包括 c/r-word 攻击点数匹配、参数范围、缺失值检查。
- 数据规模：8,426 个 c-words 和 r-words；17,053 个和弦；23,447 个音符级旋律-和声关系标注。
- 标注方式：单一标注者（第一作者）手工完成节奏、和声、旋律-和声关系标注；c-word 从 MIDI 半自动提取。文中指出，c-word 空值与 r-word “nan” 是特定符号，不应视为缺失数据：空 c-word 表示单音节片段，r-word “nan” 代表一种特定节奏模式，需在数据加载时注意。
- 数据文件补充：`contour_rhythm.csv` 含 c_word、r_word 及 word_index；`note_function.csv` 含 scale_degree、note_function 及 mode；`harmony.csv` 含 root、bass、chord_type、chord_symbol、functional_category、key、mode、position。此外提供 `chord_types.pdf`、`lexicon_of_functional_categories.pdf` 和 `chord_review_examples.pdf` 说明和弦类型、功能类别和谱面纠错示例。

### ⚖️ 评分理由

*   创新性 (1.1/2)：[A_SUMMARY][A_METHOD] 首次构建同时编码旋律轮廓、节奏、和声及旋律-和声关系的500首MPB语料，并提出GCT、MFM、CMI/MAI等编码与度量，稀缺性和方法配套具有新意。

*   技术严谨性 (0.9/1.5)：[A_METHOD] GCT通过ADD/SUB/ALT递归生成161类和约束规则；MFM的c/r编码、CIEI/CMI/MAI均有明确公式与参数定义，未发现明显算法或推导错误。

*   实验充分性 (0.8/1.5)：[A_RESULTS] 探索性分析覆盖四类指标并比较10位作曲家，r-letter置换检验p<10^-4；但[A_LIMITS]未报告标注一致性、无ML基线与标准划分，除节奏外未做推断检验，作为benchmark协议仍不完整。

*   清晰度 (0.7/1)：[A_METHOD] 论文提供编码示例、分段步骤和表格汇总；但[A_LIMITS]指出GCT谱系记号、特殊r-letter和功能记号对非音乐学读者门槛较高，影响通用MIR社区理解。

*   影响力 (0.8/1.5)：[A_SUMMARY][A_RESULTS] MPB长期缺乏结构化数据，该语料同时编码四个维度且覆盖10位作曲家，对计算音乐学和MIR风格研究有稀缺价值；当前影响更多集中在巴西音乐与音乐学学术圈。

*   开源 (1.5/1.5)：[A_OPEN] 提供核心CSV、GCT和弦文档、功能词典、r-letter参数文件及Python转换/可视化脚本，数据集资源与说明文档完整，符合核心产物完整开放的固定锚点。

*   可复现性 (0.3/0.5)：[A_METHOD][A_LIMITS] 已披露乐谱转录MIDI、c-word自动提取、r-word/和声/旋律-和声人工编码及自动一致性检查，但旋律切分未形式化，r-letter反节拍值依赖外部CSV，部分流程复现门槛较高。

*   工程/实践价值 (0.7/1.5)：[A_METHOD] 流程提供MIDI半自动提取、一致性校验和可视化/转换工具，但缺少自动扩展pipeline和标准化下游任务接口，工程产物偏向研究资源而非可扩展系统。

### 🚨 局限与问题

1. **论文明确承认的局限**：  
   - 已选作曲家群体以男性为主，女性作曲家因可靠乐谱不足未纳入。  
   - 只分析主要旋律段落和名义形式，忽略前奏、间奏、尾声及 da capo 重复。  
   - 旋律切分目前是全流程中最不标准化的环节，尚未严格形式化。  
   - 旋律-和声关系只对每首作品的片段、且只在单一调式中标注。  
   - 扩展语料库受人工标注成本和乐谱可得性限制，部分重要作曲家需从音频转写。

审稿人发现的潜在问题
   - 标注高度依赖单一专家，未报告标注一致性或质量验证，存在未量化的主观偏倚风险。  
   - 论文未提供 ML 基线、下游任务协议或标准数据划分，作为 benchmark 的可用性仍不明确。  
   - 除节奏维度外，旋律轮廓、和声、旋律-和声关系的跨作曲家差异未做推断检验。  
   - c-word 半自动提取与 r-word/和声/旋律-和声关系人工编码的混合流程可复现性有限，扩展成本较高。  
   - GCT 谱系记号、特殊 r-letter 与功能记号对非音乐学背景读者门槛较高，影响通用 MIR 社区采纳。

---

[← 返回 2026-08-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-17/)
