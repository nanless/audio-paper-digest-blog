---
title: "Évidence acoustique du contraste fortis/lenis de l’approximante labio-vélaire /w/ en Maa Arusa"
date: 2026-09-14
draft: false
description: "该研究以 9 名母语人的孤立词录音为对象，用自动对齐时长与振幅包络二次项系数证明 fortis /ŵ/ 更长且呈凸形能量凹陷，而 lenis /w/ 常弱化为过渡，代价是野外录音剔除、切分不确定与尚未覆盖 /j/ 对立。"
tags: ["统计分析", "语音学与音系", "语音", "语音属性识别"]
categories: ["jep-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:jep:2026:conference-paper-id:ghio26_jep"
paper_digest_source_kind: conference
paper_digest_conference_id: "jep-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/jep_2026/ghio26_jep.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/jep_2026/ghio26_jep.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f9798068995442d7a371650739a13cd7d823d84151aa46a1cf019a057206e432"
paper_digest_api_reader_plan_sha256: "791a5768b31f931bdc15498ed801d8641972de9e386611d8533072e5a0abbbf7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "089ae24653f378276bf900f3e5e6492de377bcf6461e23941b33ecdcd811c46a"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a99e26509e75a9e1b0acef270104bbb603b42c110f0bb901741df06284d8912d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bfc58f5d9e175793164afce94a026bc40db2f6a51c06b738e075141e5734ece0"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "348459a7d2d1f3959989c36b84004d4e2f6af4039ac743055796a8112ab10a3d"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"scientific_topic","id":"scientific_topic.phonetics","label":"语音学与音系"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"}]
paper_digest_primary_task: "语音属性识别"
paper_digest_primary_method: "统计分析"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 弱擦音还是强辅音：马赛语 Arusa 方言 /w/ 的时长与收紧度如何撑起 fortis 对立

> 英文题目：*Évidence acoustique du contraste fortis/lenis de l’approximante labio-vélaire /w/ en Maa Arusa*

> 会议身份：`conference:jep:2026:conference-paper-id:ghio26_jep`



> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ghio26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ghio26_jep.pdf)

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**7.1/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究

## 👥 作者与机构

- Alain Ghio：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Karani：机构信息未能从会议 PDF 纯文本可靠映射
- Yohann Meynadier：机构信息未能从会议 PDF 纯文本可靠映射
- Brigitte Bigi：机构信息未能从会议 PDF 纯文本可靠映射
- Didier Demolin：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该研究输入为坦桑尼亚Arusa Maa孤立词朗读波形，输出为唇软腭近似音强式/ŵ/与弱式/w/是否存在系统声学差异的判定，难点在于元音间近似音呈渐变弹道式过渡且弱式常退化为元音过渡，人工划界不可靠。方法链先由参照人领读 elicitation采集9名母语者多遍重复语料并同步记录声学信号，剔除受损样本后输出可用波形进入对齐。接着基于Maa词典的SPPAS强制对齐自动给出目标段边界并输出段时长，其边界再向两侧扩展窗计算RMS序列并做二次多项式拟合得到二次项系数，最后经Shapiro正态检验后用Wilcoxon检验组间差异。与仅凭正字法与印象推测强式更长更紧的已有描述不同，该工作把紧度操作化为相对振幅形态，强式因 constriction增强使辐射能量下降形成能量凹陷，对应RMS曲线呈凸形，从而可用符号判定紧度。在孤立词语料条件下，强式/ŵ/的时长指标为117.612 ms，高于弱式/w/可测子集的时长指标69.391 ms。二次项均值符号相反且逐说话人方向基本一致，弱式另有约三分之二样本短至30 ms以下而难以可靠定界。该结论适用边界仅为受控孤立词中Arusa方言/w/的时长与紧度差异，/j/对立、自发语、跨方言及唇形视频与感知相关性均尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 数据相关资源：<https://darkwing.uoregon.edu/~maasai/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/ZENODO.10389820> → <https://zenodo.org/records/10389820> — 链接可访问（HTTP 200）
- 复现相关资源：<https://mapcarta.com/N10836698430> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 马赛语为何值得单独研究一个 /w/？

本文解读的输入是法语撰写的会议论文，目标是让语音学初学者能复述其方法与证据。必须保留的信息包括研究对象为坦桑尼亚 Arusa 方言的唇软腭近音 /w/，对比的是 fortis /ŵ/ 与 lenis /w/ 两个音位，测量的是时长与振幅包络形状，样本是 9 名母语人的孤立词。输出是 1 篇可核对的技术解读，不做超出原文的推广。
马赛语属于尼罗语系，在肯尼亚南部与坦桑尼亚北部约有 1500000 人使用，方言之间基本互通，本研究只取坦桑尼亚的 Arusa 方言。

类型学上的特殊点在于，一般语言中 /w/ 与 /j/ 只是单个近音音位，而 Maa 被描述为同时存在弱读与强读两套音位。作者强调此前没有仪器测量证实这种对立，因此本文是第一次声学语音学检验。初学者容易把这理解为英语中长短音之别，但原文的含义更接近同一部位的两种 consonantalité 程度，一种更像辅音，一种更像元音过渡。

**近音 approximante × 滑音 glide：** 近音指发音时两发音器官靠近但不形成湍流摩擦的音类，分工是描述 constriction 程度；滑音强调其在音节中占据辅音位置却声学接近元音、只做过渡的功能，分工是描述音节角色；二者搭配是因为 Maa 的 /w/ 同时具有开放的发音动作和辅音的分布位置，组合后才能理解为何切分困难且 fortis 需要同时强化时长与收紧度。

**fortis 强音 × lenis 弱音：** fortis 分工是指肌肉紧张、时长延长和更闭合的发音强化，lenis 分工是指更开放、更短、更元音化的弱化；二者搭配的理由是在 Maa 中它们构成 /ŵ/ 对 /w/ 的音位对立，组合意义是把连续的语音强化差异提升为能区别词义的音系对比，本研究正是检验这种强化是否落实为可测量的时长与能量凹陷。

白话来说，fortis 强音可以先理解为更用力、更闭、更长的版本，英文对应 fortis 或 strong；lenis 弱音是更松、更开、更短的版本，英文对应 lenis 或 weak。后文统一用 fortis 指 /ŵ/，lenis 指 /w/。组合机制的关键是，时长延长与收紧加深被假设同时发生，而不是二选一，因此后文必须同时检验两个指标。

### 前人把强弱之别押在了哪里？

同输入同目标的直接前人是 Maa 语法与音系描写。Tucker 与 Mpaayei 注意到弱形与强形之分，并指出正字法用 wu 加强 w，用 yi 加强 y，这曾让人猜测强形是元音性增强。但 Levergood 从音节分布反驳了这一点，因为这些音出现在音节边缘的起首或尾部，不占据元音的音节核位置，所以仍应按辅音理解。她进一步提出弱形比英语的近音更不收紧，强形记作 ww 与 yy，比英语更长且收紧更多，并给出至少在元音间位置的近最小对立。Payne 把这套描写转写为 lenis 与 fortis 对立，明确说强形是发音更紧的版本，母语人用以区别词义。

同监督不同阶段的参照包括 Kohler 对 fortis 特征的综述，Lindblom 的高低元音与发音经济理论，以及 Straka 关于发音用力的经典模型。Straka 认为加强发音能量时辅音更闭而元音更开，减弱时相反，且在重读或夸张发音中辅音的舌位更高、动作更长。Baran 对威尔士语擦音的 fortis 研究也被引用，用以说明用延长支持 fortis 并非孤例。这些工作与本文构成有源对照：输入都是辅音强弱描写，目标都是寻找发音强化证据，但此前都没有对 Maa 近音做过声学测量。
因此本文的学习依赖是先接受音系假设，再补声学证据。

教学例子是，若只看拼写 wu，人们可能以为多了一个元音 u；但按 Levergood 的分布论证，它仍是一个占据辅音槽位的更紧的 /w/。这解释了为何作者拒绝预设时长或用力的记号，而用中性的扬抑符 ŵ 临时标记强形，避免在测量前就把结论写进符号。

### 要回答的具体声学问题是什么？

论文要解决的问题不是识别马赛语单词，而是判定 /ŵ/ 与 /w/ 的对立是否有系统性的声学实现。操作化为两个可测量问题。第一，自动对齐得到的音段时长是否显示 fortis 系统性长于 lenis，且差异在各位发音人身上稳定。第二，以目标音段为中心计算的振幅包络是否显示不同的曲率，fortis 为凸形中间下陷，lenis 为凹形或平坦。
难点在于近音的发音动作是连续弹道式的，与相邻元音形成共振峰连续体，没有塞音那样的静默或爆破边界。

Machac 关于切分原则的讨论被引用，正是为了说明起止点本身难以定位。初学者常误以为标注错一点只影响几毫秒，但在这里若 lenis 本来就弱到接近过渡，几十毫秒的误差就足以淹没类别差异。因此作者把切分可重复性当作方法问题优先处理，而不是事后解释。
适用边界在开头即已限定。研究只做唇软腭 /w/，不做硬腭 /j/ 与 /ȷ̂/。

只做孤立词，不做连续语流；只报告声学，不报告本次同步采集的视频唇形与空气动力学数据。任何把结论推广到 /j/ 或日常对话的说法都超出本文证据。

### 从录音到两个指标的全景路线

方法全景可以沿一个样本走通。取 1 位 Arusa 发音人读孤立词 ewuo，按音系记作 /eŵo/，信号先经自动对齐得到 /ŵ/ 的起止时间，再以该区间为中心逐帧计算均方根强度，最后对这串强度点做 2 次多项式拟合，得到时长与曲率两个数。若换成 ewoko /ewoko/，同样流程应得到更短的 /w/ 段与不同的曲率符号。目标是比较两组词在大量重复下的分布差异，而非单次读数的胜负。
为实现可比性，词表在前后元音环境上做了平衡。

lenis 侧 10 个词与 fortis 侧 10 个词覆盖 a、e、i、o 等前后语境，例如 awa 对 aawua，ewoko 对 ewuo。 elicitation 流程是参照发音人自然读出目标词，被试重复 2 次，中间停顿，每份词表以不同词序重复五遍。9 名发音人乘 20 词乘 2 次重复乘 5 遍，理论上 1800 词，实际有效对齐为 858 个 lenis 与 829 个 fortis，共 1687 次测量。
录音装置同时接了头戴电容话筒、声卡、电声门图与视频镜面系统，但本文只用声学信号。视频用于未来测量唇的开合、前伸与圆唇，电声门与 EVA2 气流压力数据另文处理。

凡被野外环境噪声污染、不满足声学分析质量的条目，均已人工剔除。这意味着后文数字的条件是干净可分析的孤立词，而非全部原始录音。

### 自动对齐与振幅曲率是如何算出来的？

第一个组件是基于 SPPAS 的自动语音对齐。研究者先为 Maa 词表建立字形到音位的词典，再用适配于 Maa 的 SPPAS 给出全部音素边界。关键细节是 fortis 与 lenis 共用同一套 /w/ 声学模型，因为训练库中不存在这种对立，算法在划边界时对强弱没有先验偏好。作者承认自动对齐会犯错，但错误是系统性的，因而结果可重复。初学者应注意，这里的可重复不是指边界绝对正确，而是指同一规则下两类音的误差方向一致，组间比较仍然有意义。

输出的第一个观测变量就是该边界决定的音段时长。
第二个组件是振幅包络形状测量。做法是在目标音素时间位置上，用 10 毫秒窗、10 毫秒步移计算均方根强度，并在目标左右各扩展 30 毫秒纳入过渡。强度值不换算为分贝，因为对数压缩会压平动态、缩小对比。由于只看相对起伏，话筒距离与增益的绝对定标问题被绕开。

随后用 Python 的 polyfit 做 2 次拟合，2 次项系数为正判为凸形，为负判为凹形，绝对值越大表示弯曲越深。第二个观测变量就是这个 2 次项系数。

**自动语音对齐 alignement phonétique × 切分 segmentation：** 自动语音对齐分工是按词典和声学模型给出每个音素的起止边界，切分分工是研究者据此得到时长测量起点；二者搭配是因为近音与相邻元音是渐变过渡，人手工定边界不可重复，组合意义是用同一规则处理 1687 个 token，以可重复的系统误差换取可比较的 fortis 与 lenis 时长差异。

**均方根强度 intensité RMS × 2 次多项式拟合 approximation polynomiale：** 均方根强度分工是逐帧刻画信号振幅包络的相对起伏，2 次多项式拟合分工是把这串离散点压缩为一个开口方向可判读的系数；二者搭配的理由是绝对响度受话筒距离和增益污染，只有形状能反映收紧导致的辐射能量下降，组合后正系数读作凸形收紧，负系数读作凹形或平坦过渡。

下面这张图把上述流程落在两个真实样本上，是理解时长与曲率如何同时读出的关键。左侧为 fortis 词 ewuo，右侧为 lenis 词 ewoko，每侧自上而下为波形、语图与音素标注，黄色段为对齐给出的目标音，上方小插图为该段振幅点的 2 次拟合。

> **看图路径：** 1. 先对比左右两幅波形中黄色标注段的宽窄，确认左侧 fortis 段明显更长；2. 再看波形包络上叠加的蓝色弧线，左侧下凹为凸形右侧近乎平坦；3. 最后核对右上角小插图的拟合点列走向，左侧先降后升右侧缓慢上升；4. 结合底部音素标注确认目标段分别为 w_ 与 w，避免把前后元音读成目标

[![原论文 Figure 2：signal de parole, spectrogramme et annotation phonétique de « ewuo » /eŵo/ à gauche](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/b0c16232a5e1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/b0c16232a5e1/figure-2.png)

*论文图 2。原论文 Figure 2：“signal de parole, spectrogramme et annotation phonétique de « ewuo » /eŵo/ à gauche”。*

从像素可见，左侧黄色段宽度约为右侧的数倍，波形振幅在段内明显收腰，上方蓝色弧线呈下凹的凸形，插图拟合曲线先降后升。右侧黄色段极窄，波形振幅几乎没有下陷，蓝色弧线近乎平坦，插图点列缓慢上升。教学要点是不要把语图上的元音共振峰过渡误读为目标，目标仅为黄色窄条对应的波形凹陷处。该图是单样本示例，不能代替后文的群体统计，但它把时长与曲率的定义变成了可执行的操作。

### 本研究训练了什么，没有训练什么？

本研究没有训练任何神经网络声学模型，也没有更新 SPPAS 的声学参数。所谓适配于 Maa 的 SPPAS，是指词典与音素映射针对 Maa 做了配置，而不是用本批 9 人录音做了梯度优化。原文未报告优化器、学习率、训练轮数或冻结层，缺项即为未报告，不能从工具名称推定其内部训练实现。
真实计算过程是调用与拟合。调用指用既有对齐器对 1800 词做推理式切分，得到边界与时长。

拟合指对每个目标段的均方根强度序列做 2 次多项式最小二乘，用 polyfit 求解系数，没有迭代训练与反向传播。因此不存在训练集与测试集划分，也不存在参数重置时机问题。可重复的关键是词典版本、对齐配置、窗长步移与扩展范围，以及剔除噪声条目的人工标准。
这也澄清一个常见误解。无训练不等于确定性求解，自动边界仍受模型失配与过渡模糊影响，lenis 的大量超短切分就是证明。

后文把小于等于 30 毫秒的切分单独讨论，正是对这种不确定性的诚实处理，而不是把对齐输出当作金标准。

### 发音人、词表与统计条件

发音人为 2024 年在坦桑尼亚北部 Arusha 地区 Ilkurot 村录制的 9 名 Maa Arusa 母语人，4 女 5 男，平均年龄 46 岁，范围 33 岁至 65 岁，均会斯瓦希里语，部分会英语。现场由合作者担任翻译解释研究目的与自愿退出权利，伦理细节另见 Ghio 等 2024。录音地点链接本次未能确认可达，相关资源状态记为本次未能确认。
数据为 20 个孤立词的平衡表，lenis 10 词与 fortis 10 词在左右元音上尽量配平，词表给出 Maa 拼写、英文释义与左右语境。协议为参照人自然领读、被试重复 2 次，每表五遍不同词序。

设备包括 AKG C520 头戴话筒、Focusrite 声卡、EG2 电声门图与 RICOH 相机加 45 度镜面同步拍摄正侧面，但本文仅分析音频。
统计用 R 4.5.2 的非参数检验。Shapiro 检验显示时长与系数分布均偏离正态，因此组间比较用 Wilcoxon 检验，显著性阈值为 p 小于 0.01。聚合对象是 token 级别的全部有效切分，不是先按人平均再检验，作图时再按 9 人分别展示以检验稳定性。指标方向为时长越长越倾向 fortis，2 次项为正倾向凸形 fortis，为负倾向凹形 lenis。

### 时长差异有多大，是否人人一致？

比较问题是在相同孤立词条件下，fortis 是否系统性长于 lenis，公平条件是同一对齐规则、无强弱先验、同一批干净录音，指标方向为毫秒数越大越长。表前需要明确，lenis 组内存在大量超短切分，若直接平均会混入切分失败与弱实现两种来源，因此原文同时报告全量与大于 30 毫秒子集。

| Phonème | Durée Moyenne | (ms) Ecart-type |
| --- | --- | --- |
| (fortis) | 117.612 | 52.824 |
| all | 44.324 | 26.474 |

上表为原文时长汇总的直接复现，fortis 均值约为 117.6 毫秒，lenis 全量均值约为 44.3 毫秒。表后解释是，全量均值低并非 lenis 全部读得极短，而是 858 个 lenis 中 546 个小于等于 30 毫秒，占约三分之二，而 fortis 仅 38 个占 4.6%。剔除超短后 lenis 均值约为 69.4 毫秒，fortis 仍长出约 48 毫秒，Wilcoxon 检验 p 小于 0.01。代价是该剔除阈值 30 毫秒是事后为区分可测与过渡化实现而设，阈值本身带有判断成分。
为便于比较不同聚合口径，把上述数字整理为五列宽表，条件、样本量与比例同时呈现，避免只看均值误以为 lenis 均匀分布在 44 毫秒附近。

| 条件 | 指标 | fortis /ŵ/ | lenis /w/ 全量 | lenis /w/ 大于 30 毫秒 |
| --- | --- | --- | --- | --- |
| 孤立词自动对齐 | 时长均值 | 117 ms | 44 ms | 69 ms |
| 孤立词自动对齐 | 有效 token 数 | 829 | 858 | 312 |
| 孤立词自动对齐 | 超短比例 | 4.6% | 64% | 不适用 |
| 孤立词自动对齐 | 总测量数 | 1687 | 1687 | 1687 |
| 孤立词自动对齐 | 检验结果 | p 小于 0.01 | p 小于 0.01 | p 小于 0.01 |

表后解释是，主要收益为 fortis 比可测 lenis 长约一半以上，且总量达 1687 次，与 Karani 等 2024 年手工测量的 fortis 约 120 毫秒、lenis 约 60 毫秒相互印证。具体代价是标准差很大，fortis 约 52.8 毫秒，lenis 全量约 26.5 毫秒，说明人与词的变异不容忽视。未胜出项是 lenis 全量均值本身，它不能作为可部署的发音目标，因为其中三分之二是接近过渡的弱实现。

按发音人分解的稳定性见下图，该图只纳入大于 30 毫秒的 token，因此纵轴反映的是可测实现的比较。

> **看图路径：** 1. 先确认横轴为 9 名发音人，纵轴为时长，逐人比较 w- 与 w+ 的中心位置；2. 再观察 w+ 的分布整体高于 w-，检查是否存在某位发音人不满足该方向；3. 注意该图只纳入大于 30 ms 的 token，不包含大量超短 lenis

[![原论文 Figure 3：durées moyennes des approximantes lenis (w-) et fortis (w+) en fonction des 9 locuteurs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/b0c16232a5e1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/b0c16232a5e1/figure-3.png)

*论文图 3。原论文 Figure 3：“durées moyennes des approximantes lenis (w-) et fortis (w+) en fonction des 9 locuteurs. Seuls les segments de durée supérieure à 30 ms sont représentés”。*

从像素可见，尽管原图分辨率有限，9 位发音人的 fortis 中心普遍高于同人的 lenis 中心，没有出现方向反转的发音人。这支持组间差异不是由个别长音人驱动的总体假象。但像素不能精确读出每人毫秒数，原文也未逐人报告数值，因此此处只做方向判断，不硬写每人差值。该证据的限制是孤立词与大于 30 毫秒筛选共同作用，结论不能直接搬到连续语流。

### 去掉时长后，振幅形状还能区分强弱吗？

比较问题是若不看时长，只看振幅包络的弯曲方向，能否区分 fortis 与 lenis，公平条件为同一强度计算窗口与同一 2 次拟合流程，指标方向为系数为正判凸形，为负判凹形，绝对值越大弯曲越深。该分析相当于对时长特征的消融对照，检验收紧假设是否有独立声学支撑。
下表把 2 次项系数的组均值、离散度与样本量并置，条件与统计方法与时长分析保持一致。

| 条件 | 指标 | fortis /ŵ/ 系数 | lenis /w/ 系数 | 组间检验 |
| --- | --- | --- | --- | --- |
| 振幅包络 2 次拟合 | 系数均值 | +41.840 x 10-3 | -38.189 x 10-3 | p 小于 0.01 |
| 振幅包络 2 次拟合 | 标准差 | 70.42 x 10-3 | 92.7 x 10-3 | p 小于 0.01 |
| 振幅包络 2 次拟合 | 有效 token 数 | 829 | 858 | 1687 |
| 振幅包络 2 次拟合 | 窗参数 | 10 ms 窗 | 10 ms 窗 | 左右扩展 30 ms |
| 振幅包络 2 次拟合 | 形状判读 | 凸形 | 凹形 | 方向相反 |

表后解释是，主要收益为两组均值符号相反且绝对值量级相近，Wilcoxon 检验 p 小于 0.01，说明能量中间下陷是 fortis 的系统倾向。具体代价是标准差大于均值绝对值，尤其是 lenis 侧离散更大，表明单 token 靠符号分类必然有不少误判，原文也只主张分布差异而非逐个 token 可分。

未评测边界是未报告以该系数做分类的准确率、阈值与跨人泛化，不能把它当作识别器使用。

**发音强化 renforcement articulatoire × 振幅凸形 contour convexe：** 发音强化分工是生理层面的假设，即 fortis 通过更用力的肌肉收缩关小声道，振幅凸形分工是声学层面的可观测后果，即中间能量下陷；二者搭配是因为声道收紧会减少向外辐射的声能，组合意义是把看不见的用力程度转化为可统计的 2 次项符号，从而在不测肌电的条件下检验 Levergood 与 Payne 的收紧假说。

下图展示按 9 名发音人分解的系数分布，顶部汇总表与箱体方向共同构成稳定性证据。

> **看图路径：** 1. 先看顶部汇总表两行的二次项均值符号，一负一正且量级相近；2. 再逐发音人对比红色 w- 与青色 w+ 箱体的上下关系，确认方向是否稳定；3. 注意纵轴为拟合系数而非分贝，正值对应凸形，负值对应凹形

[![原论文 Figure 4：coefficients quadratiques moyens issus de la modélisation polynomiale des contours d’amplitude des…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/b0c16232a5e1/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/b0c16232a5e1/figure-4.png)

*论文图 4。原论文 Figure 4：“coefficients quadratiques moyens issus de la modélisation polynomiale des contours d’amplitude des approximantes lenis (w-) et fortis (w+) en fonction des 9 locuteurs.”。*

从像素可见，顶部两行数值与正文一致，lenis 为负、fortis 为正；下方每位发音人的红色 lenis 箱体中心低于青色 fortis 箱体，方向在 9 人中保持一致。需要提醒的是，箱体高度与散点跨度显示重叠依然存在，总体趋势不等于每一步都成立。该图纵轴为拟合系数，不是响度分贝，向上不代表更响，向下也不代表性能变差，只能读作凸凹方向。

### 哪些结论还不能下，缺了哪块证据？

原文直接报告的是时长延长与凸形振幅在组水平上显著且跨人稳定，这部分用报告与显示表述。有限解释是把凸形解读为发音收紧导致辐射能量下降，这得到 Burgdorf 与 Tilsen 关于高元音与滑音时空差异的机理支持，但本文没有同步肌电或腭位数据，因此只能说支持收紧假设，不能说证明了肌肉用力增加。未验证推测是 fortis 会产生可测的气流减少与口内压上升，作者明确列为待验证，因为近音收紧通常太弱而不易引起压力堆积。
缺失证据不是技术错误，但必须点名。

第一，/j/ 对 /ȷ̂/ 的对立未纳入本次测量，对 /w/ 的结论不能外推到硬腭近音。第二，视频唇形仍在分析中，开合、前伸与圆唇的贡献未知。第三，EVA2 的口腔气流、口内压与电声门数据已采集但未在此报告，空气动力学验证缺位。第四，统计只报告 p 小于 0.01，未报告效应量、置信区间与逐词变异来源。
另一个限制是超短 lenis 的处理。

作者经波形与语图细查后认为手工修正边界 largely hasardeuse，大多只是元音间过渡，难以在信号上孤立。这一判断诚实但也意味着 lenis 的真实时长分布仍是不确定的，30 毫秒阈值划分带有操作性。把 lenis 描述为过渡化是合理的声学观察，但若要上升为音系弱化，还需感知实验检验母语人是否仍能据此辨词。

### 要复现这组结果，先准备什么？

复现先做三件事。第一，拿到 20 词平衡表与 9 人录音的干净子集，按参照领读加重复 2 次、五遍不同词序的协议核对 token 数是否接近 858 对 829。第二，重建 Maa 词典的音位映射，用 SPPAS 以同一套 /w/ 模型无偏切分全部词，记录窗长 10 毫秒、步移 10 毫秒、左右扩展 30 毫秒的强度计算流程，不做分贝转换，直接 polyfit 求 2 次项。第三，用 R 4.5.2 先做 Shapiro 正态检验，再做 Wilcoxon 组间检验，同时按人绘图检查方向一致性。
关键超参数与信息条件是 30 毫秒筛选阈值、剔除噪声的人工标准、词表前后元音平衡，以及 fortis 与 lenis 共用模型的无先验设置。

改变其中任何一项都可能移动均值，因此复现报告应同时给出全量与大于 30 毫秒子集。
资源可用性按本次收到的官方声明核对。Oregon 大学 Maa 语言项目页面当前可用，Zenodo 上的 Arusa 语法草稿当前可用，Mapcarta 村庄定位链接本次未能确认可达。代码层面，SPPAS 与 polyfit 为公开工具，但本文的 Maa 词典配置与视频唇形代码仍在处理中，不能视为开箱可运行系统。何时值得尝试是，当研究对象也是元音间弱辅音且手工边界不可重复时，这套无偏对齐加形状系数流程值得借鉴。

还需补的验证是 /j/ 对立、唇形测量与气流压力三项。

### 一句话收束：强弱之别落实在了哪里？

综合全部证据，Maa Arusa 的 /w/ 强弱对立在声学上落实为两个可重复差异。fortis /ŵ/ 平均约 117 毫秒且振幅包络呈凸形，lenis /w/ 则要么短至 30 毫秒以下难以切分，要么约为 69 毫秒且呈凹形或平坦。这一模式与 Straka 的辅音强化更闭、Levergood 与 Payne 的更紧更长假说一致，且在 9 名发音人身上方向稳定。
复述方法时应强调三点。第一，用无强弱先验的自动对齐保证可比性，而不是追求单点边界精确。

第二，用相对形状而非绝对响度绕开野外录音定标难题。第三，用大于 30 毫秒子集与全量并报的方式承认 lenis 的过渡化本质。
教学上最易产生的误解是把 fortis 等同于英语的长 /w/，或把 lenis 的 44 毫秒全量均值当作典型发音。原文的实际含义是，fortis 更接近无对立语言中常见的较紧 /w/，反而是弱化到过渡的 lenis 更为特殊。未来只有补上 /j/ 对立、唇形动态与气流压力，才能把声学凸形真正闭环到发音用力。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 jep-2026 论文汇总](/posts/conference-jep-2026/)
