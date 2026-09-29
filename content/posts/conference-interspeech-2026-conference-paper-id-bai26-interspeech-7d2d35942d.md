---
title: "Towards Chinese Yue Opera Singing Voice Synthesis: A Benchmark with Dataset, Data Augmentation and Baseline Model"
date: 2026-09-25
draft: false
description: "针对吴语越剧无专用演唱合成数据的低资源问题，论文用 565 段棚录对齐数据加发音与音高增广与条件流匹配基线 YueOpera-Singer，在 F0 RMSE 0.2133 与 MOS-N 3.92 取得可复现基准，代价是单演唱者单行当与 10 步推理开销。"
tags: ["数据集", "数据增强", "基准设计", "流匹配", "歌唱生成"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:bai26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/bai26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/bai26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "12e33dfe6e90b253e61dab14ca93db53867318ebaeba8917e001d177314353db"
paper_digest_api_reader_plan_sha256: "3b91f43f38955b5a8f713311e89d70db92bcb9ad887fbe76fd353bb1a2ce5514"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "eab589a244e7f83adb670ade253d7682235ca679dd7835b188f1b0be29e589a3"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d8184264d26e9336d4dd72f55f3b640c4713fbd96aafdfd76583afc27c3f6c83"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "076635814494aac3aa49c74bb7522f3d83fe6714d040fae767fe18c77c098ef6"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "76618c73eb8134ba4d15fffe15554a6537a64677751aaaf48d17a36566ec15ab"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"task","id":"task.singing","label":"歌唱生成"}]
paper_digest_primary_task: "歌唱生成"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 吴语越剧演唱合成的第一套基准：小数据如何做对齐、增广与流匹配基线

> 英文题目：*Towards Chinese Yue Opera Singing Voice Synthesis: A Benchmark with Dataset, Data Augmentation and Baseline Model*

> 会议身份：`conference:interspeech:2026:conference-paper-id:bai26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/bai26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/bai26_interspeech.pdf)

标签：#数据集 #数据增强 #基准设计 #流匹配 #歌唱生成

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Peng Bai：机构信息未能从会议 PDF 纯文本可靠映射
- Chenyang Lyu：机构信息未能从会议 PDF 纯文本可靠映射
- Yue Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Wujin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Longyue Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Weihua Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaodong Shi：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

越剧歌唱语音合成以歌词音素序列、音素级时长与音高序列及歌手标识为输入，输出干声波形，难点在于吴方言无现成对齐工具、标准电子谱稀缺且实唱与谱面偏离。作者先在专业录音棚邀请专攻Xiaosheng行当的职业演员戴耳机听伴奏对照纸质谱演唱，录制48 kHz单声道干声并按完整唱句切分为句子级片段，再经越剧发音应用Yueyinyitong词典查音加人工校多音字、Praat手标音素边界、Parselmouth自动提取音高并人工校验，形成对齐的音素、时长与音符三元组，得到565条共1.35小时的YOAT数据集。随后用念白与跨剧种数据做发音与音高增强，最后以Transformer编码加真值时长扩展与最优传输条件流匹配解码生成梅尔谱并经预训练HiFi-GAN声码器成波。与FFT-Singer、DiffSinger和戏曲专用FT-GAN的关键差异在于用OT-CFM建模分布间速度场，以更少推理步获得稳定音高。YOAT测试集22条上10步模型取得F0 RMSE为0.2133与MOS-N为3.92，优于3个对比基线。该结论仅适用于单歌手棚录干声与给定准确时长音高的设定，未验证多歌手、伴奏混音与自动预测时长下的外推。原文未披露训练时长、推理部署成本与显著性检验。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 越剧合成要解决什么现实困难？

输入是这篇 Interspeech 2026 论文的正文证据，目标是让刚进入语音音乐音频领域的研究生能核对并复述方法。必须保留的信息包括数据规模与划分、标注工具链、3 类增广的来源与时长、基线结构与训练配置、评价指标方向与关键数字。输出是 1 篇中文技术解读，不做营销判断，教学举例会明确标注。越剧是流行度很高的国家级非物质文化遗产，论文指出传统戏曲剧种数量大幅减少，传承面临人力资源约束。

演唱语音合成的任务定义很具体：给定歌词、乐谱中的音素边界与时长音高以及演唱者信息，生成无伴奏的干声演唱音频。这与只有音频加文本的语音合成数据集不同，它要求音素、时长、音高三序列严格对齐。对于越剧，困难集中在四点。第一是缺专业演员，录音成本高于流行歌与朗读。第二是缺标准电子谱，演员实唱与纸谱不完全一致。

第三是数据太少带不动蒙特利尔强制对齐器这类自动对齐模型，只能靠人工。第四是现有声源分离模型在戏曲伴奏上效果差，难以从历史录音中批量提取干声。所以论文选择从棚录小数据起步，先把对齐做准，再用增广与紧凑生成模型补规模，这是全文的学习主线。

关于代码与数据可得性，本次收到的资源状态为未发现完成验证的绑定资源，因此不得声称代码模型数据已公开或当前可用，论文正文中的匿名仓库链接本次未能确认可达，复现时应以原文描述为准先做核对。

### 此前戏曲合成做到哪里，越剧缺哪一块？

流行歌合成已有 M4Singer、SingStyle111、GTSinger 等大规模对齐语料，模型路线从 FastSpeech2 改造的 FFT-Singer 到扩散路线的 DiffSinger 都有成熟实现。戏曲合成则小得多，论文梳理此前只覆盖 4 个剧种：京剧、歌仔戏、粤剧与黄梅戏，吴语越剧完全空白，也没有专用数据集。方法上已有京剧的时长感知注意力网络、考虑旋律感知的京剧合成器与数据增广、针对歌仔戏细粒度音高建模的 FT-GAN 等。论文把 FT-GAN 视为当前戏曲合成的最强对照，因为它用精细判别器结构做音高建模。

低资源是戏曲合成的共性，论文把原因归为演员稀缺、乐谱不标准、对齐需人工、分离效果差。理解这段相关工作的关键是比较条件：同是戏曲，但唱腔、方言发音与标注体系不同，不能直接把京剧分数搬来证明越剧好坏。论文的增量因此很清晰：补第一个吴语越剧对齐数据集 YOAT，补针对发音与音高的增广对照，补一个基于条件流匹配的统一基线与主观客观评价。这一定位决定了后文实验必须包含跨模型比较、推理步数比较与增广规模比较，而不是只报告单模型分数。

### 基准要固定哪些输入输出与检查点？

论文把越剧演唱合成基准拆成三件套：数据集、增广方法、基线模型。输入端固定四样东西：歌词音素序列、音素级时长序列、音素级音高序列、演唱者编号。输出端是预测梅尔频谱图，再经声码器转成目标波形。检查点有三处：数据集是否音字谱 3 对齐且可训练，增广是否分别改善发音与音高，基线是否在质量与效率间取得可接受折中。

举例说明对齐要求，假如一句唱词门内拜三宝，模型不能只知道 5 个字，而必须知道每个字拆成哪些音素、每个音素持续多少秒、每个音素唱哪个音名，否则长度调节与音高嵌入无从谈起。这是例子，不是论文新增数据。论文还固定了评价口径：客观用基频对数均方根误差 F0 RMSE 衡量音高准确性，越低越好；主观用平均意见分 MOS，拆出发音分 MOS-P 与整体自然度 MOS-N，1 到 5 分越高越好，由 10 位越剧专业人士盲听打分。效率侧记录参数量、推理时显存占用与实时率 RTF。

这种问题定义的好处是后人换模型时输入输出与划分不变，分数可以直接对比。

### 从棚录到可训练数据全景如何走通？

论文设计了一条把段落级原始数据变成句子级标准合成数据的流水线。采集侧请 1 位专攻小生行当的越剧女演员，在专业录音棚戴耳机听伴奏、看纸谱清唱，共录 1.35 小时，覆盖其代表剧目中的 3 段代表性唱段。录音格式为 48 kHz、16 比特、单声道 wav，且每份音频只含干净人声、无背景音乐。原始数据在段落级，先按完整唱词句子切成句子级片段再标注，共得到 565 个片段，时长 2.03 秒到 25.18 秒，平均 8.61 秒。

标注侧分 3 路并行：发音标注查越剧公共发音应用越音一统，多音字对照录音核对实际读音，静音标 SP、吸气标 AP；时长标注因数据太小带不动自动对齐，直接用 Praat 人工标音素边界；音高标注用 Parselmouth 自动提取，尾音内丰富的音高变化用多个音高标注保留。最后经人工核对音素边界与三序列一一对应，形成每个片段的音素、时长、音符三序列。数据集按 CC BY-NC-ND 4.0 发布。

下图展示了这条流水线的标注分支与汇合关系，读图时注意 3 路工具与 3 路输出的对应。

> **看图路径：** 1. 先从左向右沿数据采集到数据标注再到 YOAT 库的主箭头看完整链路；2. 再看标注框内三条并行支路分别指向音素序列、时长序列与音高序列；3. 最后确认三路汇合后还有 Human check 节点才进入数据库图标

[![原论文 Figure 1：The pipeline for YOAT dataset construction.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/86fbd7d3fbc6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/86fbd7d3fbc6/figure-1.png)

*论文图 1。原论文 Figure 1：“The pipeline for YOAT dataset construction.”。*

该图右侧的数据库图标即 YOAT，左侧未完全显示的采集部分对应棚录与乐谱图像收集，中间标注框内三色块分别对应音素、时长与音高序列，3 路经 Human check 箭头汇入 YOAT。这解释了为什么论文强调人工：自动对齐与分离在小数据戏曲上不可靠，人工边界加人工核对是保证长度调节器输入正确的唯一可行路径。音域从 F3 到 F#5，覆盖小生核心音区，这决定了模型只需在此范围内学好音高映射，但也意味着换行当或换演员时泛化待验证。

### 编码器与长度调节器如何把谱面变成帧级条件？

基线 YueOpera-Singer 由声学模型加声码器组成，声学模型含编码器、长度调节器与解码器。输入融合表示记为 mu，解码器以它为条件生成频谱。编码器采用 Transformer 结构，处理歌词音素与演唱者身份嵌入的组合表示。关键动作在长度调节器：它不用预测时长，而是直接用乐谱给定的预对齐时长把编码器输出展开到帧级，再与音高嵌入和位置编码融合得到 mu。这种用真实时长展开的选择是低资源下的务实安排，避免了时长预测误差在小数据上放大。

解码器采用最优传输条件流匹配 OT-CFM，网络主体是 U-Net 式 3 段结构：先卷积残差加 Transformer 再下采样，中段卷积残差加 Transformer，后段卷积残差加 Transformer 再上采样。论文给出编码器解码器均为 4 层 Transformer、4 头、头维 256、嵌入维 256、前馈 1024，解码器下采样、中部、上采样各 2 层。音频处理为 24 kHz 采样，傅里叶窗长 512、跳长 128、80 维梅尔。训练用 AdamW，学习率 1e-4，sigma 最小值 1e-4，最大 100,000 步，单卡 A40 训练，推理用欧拉法解常微分方程。下图为声学模型结构，左侧输入条与右侧解码器是理解重点。

> **看图路径：** 1. 先看底部输入条区分乐谱来源与歌词来源再向上追踪汇合点；2. 再看左侧编码器加长度调节器如何形成 Input fusion representation；3. 最后看右侧解码器虚线框内下采样、中部处理与上采样的三段结构与输出

[![原论文 Figure 3：The structure of acoustic model.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/86fbd7d3fbc6/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/86fbd7d3fbc6/figure-3.png)

*论文图 3。原论文 Figure 3：“The structure of acoustic model.”。*

从像素可见底部粉色条为 Pitch、Duration、Phoneme、Singer ID 4 个输入，其中音高时长来自乐谱、音素来自歌词，向上经嵌入与编码器、长度调节器汇入顶部粉色 Input fusion representation，再作为条件送入右侧解码器，最终输出右上角的预测梅尔频谱图。解码器框内可见 Down Sample 与 Up Sample 对称，M1、M2、M3 标注对应论文的各 2 层配置。

**音素序列 × 时长序列：** 音素序列负责回答唱什么，它把汉字经越剧发音词典转成吴语声韵母并处理多音字、静音 SP 与吸气 AP；时长序列负责回答每个音素唱多久，它来自 Praat 人工边界标注。两者搭配的原因是声学模型的长度调节器必须按真实时长把音素级表示展开到帧级，否则音高与频谱无法对齐，组合后形成可直接上谱的帧级语言骨架。

**音高序列 × 梅尔频谱图：** 音高序列是乐谱约束，论文用 Parselmouth 逐音素标注音高，一个尾音可对应多个音高以保留甩腔；梅尔频谱图是声学目标，它是声码器前的 1 帧 80 维声学表示。搭配理由是解码器以音高融合表示为条件去生成频谱，音高管准不准，频谱管像不像，二者组合把音乐意图转成可听声学。

**长度调节器 × 条件流匹配：** 长度调节器分工是按乐谱给定的真实时长做确定性展开，不做时长预测，避免小数据下预测误差污染对齐；条件流匹配分工是学习从高斯噪声到真实频谱的向量场，在融合表示 mu 条件下做生成。搭配原因是前者先把对齐固定，后者只学音色与细节分布，组合后小数据也能稳定训练并用步数换质量。

沿一个样本走一遍：门字查词典得 m eng，Praat 给出 0.21 秒与 0.71 秒，Parselmouth 给出 D4 与 F#4，编码器把 m eng 编码，长度调节器按时长复制到对应帧数，叠加 D4 与 F#4 的音高嵌入与位置编码得到 mu，解码器以 mu 为条件把噪声逐步搬运成该两段的频谱，再经 HiFi-GAN 声码器成波。训练损失是流匹配的向量场均方误差，目标是让网络预测的向量场逼近从噪声到真实频谱的位移方向，原文未给出梯度截断或额外正则细节，此处不猜。

### 三类增广各自补什么分布？

论文围绕越剧咬字精准圆润的艺术标准，从发音与音高两视角做 3 类增广。发音侧有两档：DA1 收集约 1 小时网上高质量无噪专业越剧念白，属于真实朗读；DA2 从越音一统抽单字发音，再用 31 部越剧剧本的真实剧本按字拼接成句子级朗读，共 8 小时，保证单字发音准确但 prosody 为拼接。音高侧为 DA3，直接用 4.5 小时已对齐的歌仔戏数据参与训练，理由是两剧种音高时长标注体系一致、音素调整后无编码冲突，且音高节奏特性相近。

教学上可以这样记：DA1 是少量真念白，DA2 是大量拼念白，DA3 是跨剧种真唱段。前两者音高范围窄、与唱段节奏匹配度低，预期主要补发音覆盖；后者音高分布更真实广阔，预期主要补音准与自然度。论文把 DA2 再按 1.5 小时、4 小时、8 小时做规模递增，分别约为原 YOAT 训练集的 1 倍、3 倍、6 倍，用于检验数据量增益是否单调。这种设计把发音与音高解耦，便于后文对照：若 DA1 只动 MOS-P 不动 F0 RMSE，则支持发音与音高需分开补的判断。

### 训练与推理的真实计算过程是什么？

训练阶段声学模型学习条件流匹配的向量场。输入为融合表示 mu、时间尺度 t 与含噪频谱 xt，其中 t 服从 0 到 1 均匀分布，xt 由标准高斯噪声 x0 与真实频谱 x1 插值得到，sigma 最小值控制噪声残留。网络输出预测向量场，损失为预测与真实位移 x1 减去系数乘 x0 的平方误差的期望。优化器更新全部声学模型参数，论文未报告冻结层或分阶段冻结，此处不推定。声码器统一用预训练的 HiFi-GAN 歌唱模型，所有对照模型共用该声码器以保证公平，声码器本身不在本研究中重新训练。

推理时给定测试句的音素时长音高与演唱者编号，先算 mu，再从噪声出发用欧拉求解器按设定步数积分得到频谱，最后经声码器成波。步数是可调参数，论文比较 1 步、5 步、10 步，模型参数量与显存基本不变，实时率随步数小幅上升。训练预算为单卡 A40 最多 100,000 步，推理在单卡 3090 上测速。对照模型用原论文开源实现与最优超参数重训，数据集划分一致。

**念白增广 × 跨剧种增广：** 念白增广针对发音，用真实越剧念白与单字拼接的 8 小时朗读数据补音素覆盖；跨剧种增广针对音高，用 4.5 小时已对齐的歌仔戏数据补音高与节奏分布。搭配原因是越剧唱段同时要求字正与腔圆，单一增广只能补一端，组合后分别改善 MOS-P 发音分与 F0 RMSE 音高误差。

需要指出缺项：论文未报告 batch 大小、学习率衰减、早停与随机种子聚合方式，主观分只给均值与 95% 置信区间，未报告评分者一致性与显著性检验，复现时应固定种子多次运行并补显著性分析。

### 数据划分、基线与指标如何保证可比？

实验在 YOAT 上进行，543 条训练、22 条测试，测试集很小，这是解读分数时必须记住的前提。增广实验分别用约 1 小时真实念白、8 小时拼接念白与 4.5 小时歌仔戏数据。基线选 3 类代表：FFT-Singer 代表非自回归 FastSpeech2 改造路线，DiffSinger 代表浅扩散加速的流行歌最强路线，FT-GAN 代表戏曲细粒度音高建模的当前戏曲最强路线，三者声码器统一为同一预训练 HiFi-GAN。模型配置与上节一致，对照模型按各自最优超参数重训。评价分客观与主观：客观 F0 RMSE 越低越好，主观 MOS-P 管咬字、MOS-N 管整体自然度，越高越好，10 位专业人士盲听。

效率记录参数量、推理显存与 RTF，越低越好。下图用一个真实样本说明三序列对齐的粒度，这是所有模型共用的监督来源。

> **看图路径：** 1. 先对照顶部波形包络与下方切分虚线确认按字切分的边界位置；2. 再逐行向下看汉字、吴语拼音、音素、时长与音符五层如何一一对齐；3. 重点观察最后一个宝字内部多个 ao 段各自不同的时长与音高

[![原论文 Figure 2：Single sample annotation example of YOAT Dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/86fbd7d3fbc6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/86fbd7d3fbc6/figure-2.png)

*论文图 2。原论文 Figure 2：“Single sample annotation example of YOAT Dataset. (a) Audio waveform. (b) Chinese lyric. (c) Wu dialect Pinyin. (d) Phoneme. (e) Duration. (f) Note.”。*

像素显示顶部为连续波形，下方 5 层为汉字、吴语拼音、音素、时长与音符，红色竖虚线按字切分，蓝色点线在字内按音素再切。以宝字为例，它独占后半段，内部拆成 b ao ao ao ao ao 多段，每段有时长 0.16、0.78、0.79、0.81、0.78 与 2.46 秒及对应 E5、A4、B4、A4、B4、A4 音符，说明尾音甩腔被显式展开为多个可监督帧段。这种细粒度是长度调节器能用真实时长展开的前提，也是 F0 RMSE 能逐帧算准的基础。若对齐错 1 位，后续音高嵌入全错，因此人工核对不可省。

### 主结果在质量与效率间给出什么折中？

主结果要回答在同一划分与同一声码器下，谁的音准与听感最好，代价是什么。比较问题是 4 模型在 YOAT 测试集上的 F0 RMSE、MOS-N、参数量、显存与 RTF，公平条件是同划分同声码器同机器测速，指标方向为前两者之外的三者越小越好、F0 越低越好、MOS 越高越好。

| 模型 | F0 RMSE 越低越好 | MOS-N 越高越好 | 参数量 M 越小越好 | 推理显存 MB 越小越好 | RTF 秒越小越好 |
| --- | --- | --- | --- | --- | --- |
| FFT-Singer | 0.2309 | 3.41±0.09 | 24.257 | 1498 | 0.0193 |
| DiffSinger | 0.2195 | 3.69±0.11 | 39.350 | 1742 | 0.0842 |
| FT-GAN | 0.2322 | 3.81±0.07 | 57.801 | 3692 | 0.0213 |
| YueOpera-Singer-10 | 0.2133 | 3.92±0.07 | 24.678 | 1296 | 0.0364 |

论文报告 YueOpera-Singer-10 在 F0 RMSE 与 MOS-N 上同时最优，相对真值 4.42±0.07 仍有差距，但超越 3 个对照。效率上它参数量第二小、显存最低、速度快于 DiffSinger 但慢于 FFT-Singer 与 FT-GAN，属于质量优先的紧凑选择。

未胜出项值得注意：FFT-Singer 最快但听感最低，FT-GAN 听感第二但参数与显存最大且 F0 最差，说明戏曲专用判别器并未在越剧小数据上自动带来音准优势。限制是测试仅 22 条，主观置信区间有重叠风险，且未做显著性检验，因此最优应表述为报告显示最优而非已证明普遍最优。

**F0 RMSE × MOS-N：** F0 RMSE 是客观音高误差，用基频对数域均方根误差衡量唱准程度，越低越好；MOS-N 是 10 位越剧专业人士盲听的整体自然度，1 到 5 分越高越好。搭配原因是前者可复算但听不出咬字与表现力，后者能反映听感但成本高，组合后避免只看曲线不听声音。

### 步数与增广的增益分别来自哪里？

消融分两组：推理步数与增广策略。步数比较固定模型，只变欧拉步数 1、5、10，论文报告 10 步 F0 最低、MOS-N 最高，1 步为 0.2175 与 3.83±0.09，5 步为 0.2146 与 3.89±0.09，10 步为 0.2133 与 3.92±0.07，显存不变而 RTF 从 0.0269 经 0.0311 到 0.0364 小幅上升，因此默认 10 步。这支持步数换质量的判断，但每步增益递减，部署时可按延迟预算回退到 5 步。增广比较固定 10 步模型，只变训练数据，问题是发音与音高增广各自改善什么，公平条件是同模型同测试集，方向同上。

| 训练数据 | F0 RMSE 越低越好 | MOS-P 越高越好 | MOS-N 越高越好 | 增广来源 |
| --- | --- | --- | --- | --- |
| YOAT | 0.2133 | 3.72±0.05 | 3.92±0.07 | 无增广基线 |
| YOAT 加 DA2-4.0 | 0.2001 | 3.78±0.04 | 3.96±0.07 | 拼接念白 4 小时 |
| YOAT 加 DA2-8.0 | 0.2075 | 3.82±0.05 | 3.97±0.07 | 拼接念白 8 小时 |
| YOAT 加 DA3-4.5 | 0.1834 | 3.75±0.07 | 4.01±0.09 | 歌仔戏 4.5 小时 |

该表逐行给出 4 种训练数据下的三项指标与增广来源，基线 YOAT 对应 0.2133 与 3.72±0.05 与 3.92±0.07，YOAT 加 DA2-4.0 对应 0.2001 与 3.78±0.04 与 3.96±0.07，YOAT 加 DA2-8.0 对应 0.2075 与 3.82±0.05 与 3.97±0.07，YOAT 加 DA3-4.5 对应 0.1834 与 3.75±0.07 与 4.01±0.09，来源列区分了无增广基线、拼接念白与歌仔戏数据的差异。

论文显示 DA1 加 1 小时真念白使 MOS-P 升 0.06 但 F0 几乎不动，DA2 随规模增大使 MOS-P 升 0.03 到 0.1、MOS-N 升 0.02 到 0.05 且 F0 有所下降，DA3 使 F0 降约 0.03、MOS-P 升 0.03、MOS-N 升 0.09 为最有效。机制解释是念白音高窄、节奏不匹配唱段，只能补发音；歌仔戏音高节奏相近，能补音准。反例是 DA2 从 4 小时到 8 小时 F0 反而从 0.2001 回升到 0.2075，说明拼接数据量并非单调越大多越好，可能引入拼接 prosody 噪声，复现时应做规模曲线而非直接全量加入。

### 哪些边界尚未被评测？

首先是人的边界：单演唱者、单小生行当、3 段唱段，音域 F3 到 F#5 之外、其他流派与行当的泛化未评测。其次是测试边界：22 条测试过小，主观仅 10 人盲听，未报告误判率、评分者一致性与统计显著性，不能把 0.03 到 0.09 的 MOS 差直接当成因果改善。第三是方法边界：长度调节器依赖人工对齐时长，实际部署若无人工时长则无法运行，论文未评估预测时长模式；声源分离与自动对齐仍是短板，大规模爬取历史录音的路线未打通。第四是成本边界：训练只给单卡 A40 与 100,000 步，未报告训练时长与能耗。

推理只给 RTF 与显存，未报告首包延迟与长句显存增长。论文提到 8000 小时吴语 speech 数据 WenetSpeech-Wu 待公开后将探索大模型利用，但该数据本次未实际使用，不能视为已验证增益。缺失证据不是技术错误，但在引用时应明确标注待验证，避免把相关性说成因果。

### 要复现基准先做什么？

复现分 4 步。第一步按论文重建数据管线：48 kHz 单声道棚录，句子级切分，用越音一统查音素并核对多音字，SP 标静音、AP 标吸气，用 Praat 人工标边界，用 Parselmouth 提音高并保留尾音多音高，最后人工核对三序列一一对应，划分固定 543 训练 22 测试。第二步配模型：编码器解码器 4 层 Transformer、4 头、嵌入 256、前馈 1024，解码器 3 段各 2 层，音频转 24 kHz、窗 512 跳 128、80 维梅尔，AdamW 学习率 1e-4，sigma 最小值 1e-4，欧拉求解器，默认 10 步。第三步统一声码器为同一预训练 HiFi-GAN，对照模型用各自最优超参数重训，同机 3090 测 RTF 与显存。第 4 步评价：算 F0 RMSE，组织懂越剧的盲听测 MOS-P 与 MOS-N 并报告 95% 置信区间。

先跑无增广基线对齐 0.2133 与 3.92±0.07，再加 DA2 不同规模与 DA3 复现增益曲线。常见误解是把拼接念白当唱段直接混训能无脑提升音准，实际上它主要补发音，音准要靠跨剧种真唱或更广音高分布；另一个误解是把参数小等同于延迟低，论文中最小显存模型的 RTF 并非最小，应分别测量。

### 何时值得尝试这套路线？

当任务是小数据方言戏曲演唱合成，且能请到专业演员做棚录与人工对齐时，这套路线值得尝试：先用小而准的对齐数据立住可训练基准，再用拼接念白补发音覆盖、用标注体系一致的近亲剧种补音高，最后用条件流匹配的紧凑模型以 10 步推理换质量。论文的判断是 YOAT 可靠、增广有效、基线鲁棒，可作为后人替换编码器、解码器或声码器的固定对照。

不值得的情形是无人工对齐能力又要求端到端，或目标是多演唱者多行当实时系统，此时应先补时长预测、说话人建模与延迟优化，并扩大测试集与显著性检验。下一步验证应包括更大规模盲听、跨剧种消融中发音冲突的影响、以及大吴语语音数据公开后的预训练增益，这些在本文中属于可能方向而非已证结论。记住核心数字：565 段、平均 8.61 秒、543 对 22 划分、10 步下 F0 0.2133 与 MOS-N 3.92、DA3 下 F0 0.1834 与 MOS-N 4.01，复现时以这些为锚点核对。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
