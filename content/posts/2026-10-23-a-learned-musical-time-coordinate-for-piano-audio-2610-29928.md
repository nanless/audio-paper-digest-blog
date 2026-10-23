---
title: "A Learned Musical-Time Coordinate for Piano Audio-to-Score Transcription"
date: 2026-10-23
draft: false
tags: [音乐转录, 端到端学习, Transformer, 音乐]
categories: [论文速递]
description: "本文要解决整首钢琴录音直接转写成乐谱时的拍号节拍定位与自动分段问题，方法是联合学习表示小节内相对位置的下拍相位并用其傅里叶编码条件化解码器，最强证据是整首转录在节拍结构指标上显著提升，代价是相位与乐谱模型只在合成演奏上训练、在真实 expressive 演奏上仍有泛化缺口。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.29928"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用学到的“小节内时间坐标” 做钢琴录音到乐谱的转录"
paper_digest_original_title: "A Learned Musical-Time Coordinate for Piano Audio-to-Score Transcription"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.29928v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.29928v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.29928v1.pdf"
paper_digest_primary_task: "音乐转录"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.transcription","label":"音乐转录"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "端到端学习"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文要解决整首钢琴录音直接转写成乐谱时的拍号节拍定位与自动分段问题，方法是联合学习表示小节内相对位置的下拍相位并用其傅里叶编码条件化解码器，最强证据是整首转录在节拍结构指标上显著提升，代价是相位与乐谱模型只在合成演奏上训练、在真实 expressive 演奏上仍有泛化缺口。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Min-Hsing Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tsung-Ren Huang"}]
paper_digest_abstract_sha256: "74507ae694d80de9246cb4e2eab063ac801597b426522f8d73d0c4a21d1f8a8d"
paper_digest_sidecars: {"citation.bib":{"sha256":"b83a8da32f64e74fbf1e491da6b1d0dec6b0ed433cab5d896f809dd019ccec13","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29928/citation.bib"},"citation.json":{"sha256":"1e2ef2665e75711bb69cb9457427f16ddc0c483fb88a3803ee7c64a2be4a61b5","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29928/citation.json"},"citation.ris":{"sha256":"08c7c8c21060d7806cadf4842e88bdbffc510892c2c77015c7a6a9e4b42d3550","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29928/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"c993899f39589b34215f6271c6dc3c88cced46c1dc61daed1f1417d69ac51c4c","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29928/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1b3499b6c5b28d24264d9c77d62dc4c74c8661be262b58d98d8796c79679c51e"
paper_digest_api_reader_plan_sha256: "95273f644761209382a8be6a6710dc75332685af1c666c4a7317abba1f0fb29b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "72e36c47242e00c8f91921abf49e4e43f9884d3966500f9a6e5710373f615d79"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "c57298da551ebdec443c5f1f2bdcf26f1c5fb9f0b8d6a8ba0ac30bea64999ec3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5dc84602b3090d8dbb5b4098e1fc89efed4da6e7f7446bbb216c03c8aa867200"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "719a1c427680bea44dddcc13a49979a5bce281be5cf774aa78c718af4006506a"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用学到的“小节内时间坐标” 做钢琴录音到乐谱的转录

> 英文题目：*[A Learned Musical-Time Coordinate for Piano Audio-to-Score Transcription](https://arxiv.org/abs/2610.29928v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [音乐转录](/audio-paper-digest-blog/papers/?concept=task.transcription)
- **研究方法**：[端到端学习](/audio-paper-digest-blog/papers/?concept=method.end-to-end-learning)；[Transformer](/audio-paper-digest-blog/papers/?concept=method.transformer)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Min-Hsing Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tsung-Ren Huang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

从钢琴录音恢复记谱符号的音频到记谱转录输入是含速度变化和演奏处理的音频，输出是用\*\*kern衍生词表表示的音高、时值、拍号、调号和小节结构，难点是音符在小节中的节拍位置难以从绝对时间直接推断，而整曲转录还需在未知小节边界处切分拼接。系统先用冻结的hFT-Transformer提取每帧每音高特征，再经跨注意力压缩为每帧向量后分两路并行处理，一路由Conformer建模音乐内容，另一路由相位模型估计下拍相位，即每帧在一个记谱小节内的相对位置。音频侧和乐谱侧共用同一傅里叶特征映射把该相位变为向量，分别加入解码器交叉注意力键值和输入端，解码器据此自回归生成记谱词元。推理时由相位后验的过零点得到下拍边界并按多小节拼接整曲，与已有用外部节拍跟踪器提供节拍相位的爵士萨克斯转录方法不同，本文坐标与记谱联合训练且可反过来提供切分。在Syn整曲转录中，本文系统Fmeter为0.667、MV2H5为0.829，均高于用Beat This!切分的Piano-A2S对照的0.236和0.614，OMR-NED为61.8，低于对照的75.4，转录覆盖率100%高于对照的98%。结论适用于训练所覆盖的拍号和钢琴音色，在真实人演ASAP上的增益变小，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/bloggerwang1217/MusicTimeA2S> — 链接可访问（HTTP 200）

- 第三方资源：<https://kern.ccarh.org/> — 暂时无法访问

- 第三方资源：<https://musescore.com/hub/piano> — 链接不可用（HTTP 403）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 从钢琴录音到可演奏乐谱要保留什么信息

刚接触音乐转录的研究生可以先把任务想成两层时间的对齐。输入是一段钢琴录音，本文用 16 kHz 采样的对数梅尔频谱表示，每帧 16 ms，每个输入窗最多 1280 帧，约 20.48 秒。目标不是逐帧的音高检测，而是一串文本形式的乐谱记号，词表共 248 个，包含音高、音符时值、拍号、调号以及小节和声部的结构标记。

乐谱与录音的区别在于，乐谱用音符时值、拍与小节组织时间，演奏则决定了全曲速度如何起伏、记谱节奏如何在物理时间中展开。因此转录既要推断每个音的记谱音高与记谱时长，又要推断它在小节内的位置，还要预测小节级的拍号与调号。评价时既看音对不对，也看音放在小节的哪里、时值写得是否合理。

本文把这种“在小节哪里” 的信息显式做成一个可学习的音乐时间坐标。理想情况下，解码器每写一个记号都能参考当前音频帧处于小节的开头、中间还是结尾，从而把拍号结构写对；同时系统能自己找到小节边界，把长录音切成可解码的片段再拼成整首，而不依赖外部切分。

### 已有端到端路线为何停在预切分片段

在钢琴方向，Zeng 等提出的 Piano-A2S 用门控循环单元解码器，按层次预测小节级与音符级信息，直接从录音得到乐谱。Alfaro-Contreras 等则用 Transformer 解码器处理复调弦乐。这些工作的共同点是输入多为跨越几个小节、已按小节边界预先切好的片段，重点考序列预测本身，如何把多段转录结果组装成整首基本没有展开。

在爵士萨克斯方向，Shanin 等在 Oyama 等基于相位的方法上，把每个外部估计拍内的位置表示成圆形相位，再用傅里叶特征编码后引导乐谱转录。那里的坐标依赖外部节拍跟踪器先给出拍位置，坐标本身不是和乐谱一起学出来的。

本文的差别正在于此：坐标是否可以与乐谱转录联合学习，并在推理时同时用于条件化解码与自切分。作者把坐标具体化为下拍相位，即每帧相对记谱小节的位置，每小节转一圈并在下拍处复位。这个选择让“引导解码” 与“找小节边界” 变成同一表示的两种用法。

### 本文要回答的两个具体问题

第一个问题是，学到的音乐时间坐标能否帮助解码器写对节拍结构。节拍结构在这里主要体现为音符落在小节与拍内的分组是否与参考一致，以及拍号是否正确。如果解码器只看到内容特征，它可能把音高写对但把附点、切分或小节线放错；有了小节内位置提示，模型更有可能把同一段音频对应到正确的记谱位置。

第二个问题是，同一坐标能否支撑整首转录的自切分。整首录音远超一次解码的长度限制，本文单次解码最多 2048 个记号，必须分段。已有系统需要外部下拍或小节边界，本文希望从预测的相位后验中直接推出下拍时刻，按五小节摘录组织解码，再把各段拼成整首，并用空白小节表示缺失段。

两个问题共用同一相位表示，因此实验必须分开验证：预切分协议看坐标对记谱的增益，整首协议看自切分后整体质量是否可比，以及不用外部切分带来了什么代价。

### 系统总览：一条录音如何变成整首乐谱

整体流程可以沿一个样本理解。输入窗的对数梅尔频谱先经过冻结的 hFT-Transformer 前端，对每帧的 88 个钢琴音高各给出 256 维特征。接着跨注意力转换器用 32 个可学习查询把特征通道轴压缩汇总，再展平线性投影成每帧 256 维的序列。

该序列同时进入内容分支与下拍相位分支。内容分支加帧位置编码后经两个 Conformer 块得到内容记忆；相位分支经扩张时间卷积网络与双向 Mamba 估计每帧的下拍相位后验。解码器是四层 Transformer，输入融合记号嵌入、记号顺序编码与乐谱侧相位编码，交叉注意力则融合音频内容与音频侧相位编码，自回归地生成乐谱记号。

推理时先用滑窗扫描整首录音得到平均后的相位 1 阶矩，找相位过零点得到下拍，再按五小节摘录固定拍号调号、逐窗解码并只保留可重建为 \*\*kern 的完整小节前缀，最后拼接成整首。下图展示了上述编码器双分支与解码器融合的连接关系，阅读时重点看相位信息进入解码器的两条路径。

> **看图路径：** 1. 先沿左侧对数梅尔频谱到冻结特征再到内容记忆与相位模型的主路径看数据流向；2. 再看音频侧傅里叶编码以虚线进入交叉注意力的键和值的位置；3. 再看乐谱侧傅里叶编码从下方回路进入解码器输入的位置；4. 最后对照四层 Transformer 层的自注意力、交叉注意力与前馈的堆叠顺序

[![原论文 Figure 1：The encoder extracts content features and estimates downbeat phase, while the decoder combines…](https://arxiv.org/html/2610.29928v1/system.png)](https://arxiv.org/html/2610.29928v1/system.png)

*论文图 1。原论文 Figure 1:：“The encoder extracts content features and estimates downbeat phase, while the decoder combines these features with audio- and score-side Fourier positional encodings of downbeat…”。*

从图中可见，内容记忆作为主干进入交叉注意力，而音频侧傅里叶编码以附加投影进入键和值；乐谱侧傅里叶编码则从底部回路进入解码器输入。这种设计让同一相位表示在音频侧与乐谱侧以相同傅里叶映射对应，便于解码时对齐。相位后验还单独接受相位损失监督，使切分边界与解码条件来自同一估计。

### 编码器前端与内容分支做了什么压缩

前端 hFT-Transformer 在 MAESTRO 上预训练后冻结，参数不更新，只做音频特征提取。它对每帧输出 88×256 的音高相关特征，可以理解为每帧对每个琴键的表征。跨注意力转换器用 32 个可学习查询沿特征通道轴做汇总，得到每帧 88×32 的紧凑表示，再展平并线性投影到 256 维。

内容分支在此基础上加帧位置编码，该编码是按窗内帧序号确定的固定正弦向量，用于区分帧的前后顺序。随后两个 Conformer 块做时序建模，自注意力中使用旋转位置嵌入对查询和键编码帧位置，最终输出每帧 256 维的内容记忆。这个记忆只负责“弹了什么”，不直接负责“在小节哪里”，位置职责留给相位分支。

这种分工的意义在于，后续解码器可以分别投影内容与相位，避免位置信息淹没音高细节。冻结前端也意味着内容表示的泛化很大程度上依赖预训练，而相位与乐谱模型的训练数据则另有来源，这一点在讨论真实演奏泛化时很重要。

### 下拍相位与傅里叶编码如何表示小节内位置

下拍相位首次出现时需要明确含义：它是一个角度，每经过一个记谱小节完成一圈，在下拍处复位。训练时按标注的拍位置构造目标相位，一小节内第 k 拍锚定在相应角度，拍内线性插值；推理时由相位分类器对每帧输出 360 类位置后验。360 类对应把一圈均匀划分，类中心角度用于后续编码。

为了让解码器使用该角度，本文用共享的 24 维傅里叶特征映射把角度展开成多阶正弦余弦拼接，最高保留到 12 阶，以覆盖支持拍号中的节奏划分，例如 12/8 拍每小节 12 个八分音符单位。高阶谐波每小节重复多次，相当于同时提供粗细不同的位置刻度。

\[\gamma(\phi)=[\sin(h\phi)]_{h=1}^{12}\,\|\,[\cos(h\phi)]_{h=1}^{12}\in\mathbb{R}^{24},\]

音频侧编码不是取最可能的单类，而是对后验加权平均，即把每类的傅里叶向量按预测概率求期望。这种做法保留了不确定性：当相位估计模糊时，编码是多个位置的混合；当估计尖锐时，编码接近真实位置的特征。

\[a_{t}=\sum_{r=0}^{359}P_{t}(r)\gamma(\theta_{r}).\]

**下拍相位 × 傅里叶位置编码：** 下拍相位指每个音频帧在一个记谱小节内的相对位置，用角度表示、每小节转一圈并在下拍处归零；傅里叶位置编码指把该角度映射成多阶正弦余弦向量。二者分工是前者提供音乐时间坐标的语义，后者提供解码器可加可拼接的连续数值形式，组合后让内容特征与时间坐标解耦表示，解码器既能看“弹了什么” 又能看“在小节哪里”。

### 解码器两侧编码在哪里汇合

解码器输入侧的乐谱侧编码根据已生成的乐谱前缀推算当前小节内时刻，再除以当前拍号规定的小节时长并折叠到一圈内得到角度，同样经傅里叶映射得到 24 维向量。它在小节记号处复位，在拍号未知前置零。解码器输入是记号嵌入、记号顺序正弦编码与该向量经学习投影后的和，用于预测下一个记号。

交叉注意力侧的键和值则把内容记忆的线性投影与音频侧编码的单独投影相加。每层都有各自的投影矩阵，意味着不同层可以不同方式使用位置信息。查询来自已生成前缀的表示，键值来自音频帧，这种加法融合让注意力既考虑内容相似性，也考虑小节位置对应性。

**音频侧编码 × 乐谱侧编码：** 音频侧编码是对相位分类后验按傅里叶特征加权平均得到的帧级向量，加到交叉注意力的键和值上；乐谱侧编码是根据已生成乐谱前缀推算出的当前小节内时刻算出的同族傅里叶向量，加到解码器输入上。前者告诉解码器音频帧落在小节何处，后者告诉解码器已写到小节何处，两侧用同一特征映射对应起来，解码时实现音频时间与记谱时间的对齐。

**内容记忆 × 相位模型：** 内容记忆指编码器中经 Conformer 建模后的帧级音高内容表示，负责保留弹了哪些音；相位模型指用扩张时间卷积网络加双向 Mamba 对同一帧特征估计下拍相位后验的分支，负责估计小节位置。两者输入同源但分支独立，在解码器交叉注意力处汇合，内容进入主投影、相位经单独投影相加，使位置信息不淹没音高信息。

举例来说，当解码器已写到某小节中部，乐谱侧编码指示“小节中部”，交叉注意力会更倾向关注音频侧编码同样指示“小节中部” 的帧，即使两处音高内容相似，也能减少把音符放错拍位的可能。这正是坐标改善节拍分数的直观机制。

### 两项损失如何联合训练相位与乐谱

训练目标是乐谱损失与相位损失的加权和。乐谱侧用教师强制下的下一个记号交叉熵，即给定真实前缀预测下一记号。相位侧是逐帧的分类交叉熵，目标分布由量化后的目标相位经正负 3 类三角循环平滑得到，总损失中相位权重为 0.1，相位损失在有相位标注的帧上平均。

\[L_{\mathrm{phase}}(t)=-\sum_{r=0}^{359}q_{t}(r)\log P_{t}(r),\]

模型共 23.4M 参数，其中 hFT-Transformer 占 5.5M 并冻结，可训练部分 17.9M。训练最多 50 轮，按验证集乐谱损失早停，耐心为 5 轮。优化器为 AdamW，权重衰减 0.01，丢弃率 0.1。学习率先经 1000 步线性暖机到 1e-4，再余弦退火到第 50 轮的 1e-5；相位模型的学习率则从第 10000 步退火到第 20000 步后固定。

数据增强只在训练时改变速度与演奏风格：用 VirtuosoNet 生成 MIDI 时按对数均匀采样参考速度乘子，范围约为 0.707 到 1.414，并用 4 种钢琴 SoundFont 与 4 种房间脉冲响应的组合渲染音频，每轮每首随机选一个版本。这种增强针对合成训练，真实演奏的表情 timing 并未直接用于训练相位与乐谱模型。

### 数据划分、指标方向与比较条件

数据采用 HumSyn、MuseSyn 与 ASAP。HumSyn 是来自 Humdrum 数据库的古典与拉格泰姆钢琴 \*\*kern 乐谱，MuseSyn 是来自 MuseScore 的流行钢琴改编 MusicXML，两者合称 Syn，用于训练与验证；评测用 Syn 与 ASAP，ASAP 提供带下拍与拍标注的人类演奏录音。Syn 按 Zeng 等划分并排除与 ASAP 评测重叠及与其他被评系统训练验证重叠的作品，最终训练 546 首、验证 46 首、测试 45 首；ASAP 用 Liu 等发布的 102 段录音测试划分中排除前端训练用过的录音，保留 74 段录音共 39 首作品。

评测用 MV2H 与 OMR-NED。MV2H 含多音高、声部分离、节拍位置、音符时值与和声 5 个分量，节拍分量是小节、拍与子拍分组与参考在相同音符处起止的 F1，越高越好；其平均记为 MV2H5，去掉节拍分量的平均记为 MV2H4。OMR-NED 统计预测与参考乐谱间音乐符号的插入删除，越低越好。显著性用 10000 次按作品配对自助法评估，95% 置信区间不含零才算显著。

**MV2H × OMR-NED：** MV2H 从多音高、声部分离、节拍位置、音符时值、和声五个方面打分，其中节拍位置分量最相关，分数越高越好；OMR-NED 统计预测乐谱与参考乐谱之间音乐符号的插入删除代价，越低越好。前者侧重音乐结构正确性，后者侧重整首重建的符号编辑量，两者搭配才能同时看到节拍改善与整体记谱代价。

预切分实验用五小节摘录，整首实验则比较自切分系统与需外部边界的 Piano-A2S。Piano-A2S 的外部边界来自 Beat This! 节拍跟踪器或人工标注下拍；本文系统用预测相位或人工相位条件做对照。MV2H 在整首上因官方对齐太慢而用单路径近似实现，作者报告其在预切分摘录上与官方实现的平均差异很小。

### 预切分转录能否写对节拍结构

预切分比较要回答的是，在输入边界相同的条件下，加入坐标是否主要改善节拍相关分数。这次比较在 Syn 的 9958 个摘录与 ASAP 的 633 个摘录上，比较 Piano-A2S、无坐标变体与完整模型，指标为 MV2H 各分量及平均，方向为越高越好。

|  | MV2H components | MV2H components | MV2H components | MV2H components | MV2H components | MV2H | MV2H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| System | Fmp | Fvoi | Fmeter | Fval | Fharm | 4 | 5 |
| Syn (9,958 excerpts, 28 works) |  |  |  |  |  |  |  |
| Piano-A2S | .681 | .876 | .352 | .901 | .638 | .774 | .690 |
| Ours | .792∗ | .885 | .675† | .930∗ | .749∗ | .839∗ | .806∗ |
| w/o coordinate | .793∗ | .890∗ | .557∗ | .936∗ | .768∗ | .847∗ | .789∗ |
| ASAP (633 excerpts, 8 works) |  |  |  |  |  |  |  |
| Piano-A2S | .636 | .882 | .351 | .903 | .512 | .733 | .657 |
| Ours | .621 | .833 | .384 | .889 | .657∗ | .750 | .677 |
| w/o coordinate | .652 | .851 | .357 | .901 | .630∗ | .759 | .678 |

在 Syn 上两个本文变体在所有分量上高于 Piano-A2S，完整模型相对无坐标变体的最大增益出现在节拍分量，且显著，其他分量略低但不显著。这支持坐标有助于恢复节拍结构的判断。在 ASAP 上坐标使节拍分量略高，但多音高、声部与时值分数更低，平均几乎不变，因此预切分下在真实演奏上的收益尚无定论。

一个容易误解的点是，无坐标变体本身已强于 Piano-A2S，说明架构与训练流程的改进独立于坐标。坐标的贡献应看完整模型与无坐标变体的差值，而非只看与 Piano-A2S 的差距。消融图进一步表明这种差值主要来自两侧傅里叶编码的组合，而非仅靠相位监督。

**预切分转录 × 整首自切分转录：** 预切分转录指输入已是按小节边界切好的五小节片段，只考序列预测；整首自切分转录指从完整录音出发，先用预测相位找下拍边界再逐段解码拼接成整首。两者分工是前者验证坐标对节拍建模是否有帮助，后者验证同一坐标能否同时承担切分功能，组合起来才能说明坐标既改善记谱又省掉外部节拍跟踪器。

### 整首自切分转录的质量与覆盖如何

整首比较要回答的是，不用外部切分能否达到可比的记谱质量。在 Syn 的 180 次渲染与 ASAP 的 74 段录音上，比较需外部切分的 Piano-A2S 与本文自切分系统，指标为节拍分数、MV2H5、OMR-NED 与成功转录比例，其中前两者越高越好，OMR-NED 越低越好。

| System | External Segmentation | Coordinate | Fmeter Syn | MV2H5 Syn | OMR-NED Syn | Transcribed (%) Syn | Fmeter ASAP | MV2H5 ASAP | OMR-NED ASAP | Transcribed (%) ASAP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Piano-A2S | Beat This! | n/a | .236 | .614 | 75.4 | 98 | .143 | .584 | 84.0 | 97 |
| Piano-A2S | oracle | n/a | .337 | .650 | 67.9 | 77 | .168 | .566 | 72.6 | 78 |
| Ours | — | predicted | .667* | .829* | 61.8* | 100 | .318* | .718* | 85.4 | 100 |
| Ours | oracle | predicted | .696* | .837* | 60.0* | 100 | .287* | .701* | 85.1 | 100 |
| Ours | oracle | oracle | .807† | .870* | 53.8* | 100 | .518† | .772† | 75.1* | 100 |

本文系统在两套测试上节拍分数与 MV2H5 显著高于用 Beat This! 切分的 Piano-A2S，在 Syn 上 OMR-NED 显著更低，在 ASAP 上 OMR-NED 相当。更重要的是转录覆盖为 100%，而 Piano-A2S 在人工下拍条件下因输入长度限制覆盖降至 77% 和 78%。也就是说，优势既来自记谱质量，也来自能把整首拼完。

限制同样明确：仅替换边界而不给人工坐标时，节拍分数提升并不稳定；同时替换边界与坐标后提升更大，说明真实演奏上的瓶颈更多在坐标估计本身。作者也指出相位与乐谱模型只在合成演奏上训练，表情 timing 与记谱结构的对应关系在真实演奏上仍需验证。

### 坐标的哪部分真正带来节拍增益

消融实验用一个训练种子，在测试划分的公共可评分摘录上比较 4 种设置相对无坐标基线的节拍分数差值。读图时先确认纵轴是差值而非原始分数，再看 95% 自助置信区间是否跨过零线。下图显示，仅有相位监督而不用两侧傅里叶编码时，Syn 上节拍分数反而显著下降。

> **看图路径：** 1. 先看纵轴是相对无坐标基线的节拍分数差值，零线以上为提升；2. 再比较四组消融条件中只加音频侧或只加乐谱侧的误差棒是否跨过零线；3. 最后看两侧编码同时加入的一组在两个数据集上的提升幅度

[![原论文 Figure 2：Coordinate ablation using one training seed on common scored excerpts from the test splits in Sec.](https://arxiv.org/html/2610.29928v1/fourierpe_interaction.svg)](https://arxiv.org/html/2610.29928v1/fourierpe_interaction.svg)

*论文图 2。原论文 Figure 2:：“Coordinate ablation using one training seed on common scored excerpts from the test splits in Sec. 3.1. Δ F_meter denotes the difference from Ours w/o coordinate.”。*

从图中可见，单独加入音频侧或乐谱侧傅里叶编码时，两套测试上的节拍分数均显著提升，而两侧同时加入的完整模型增益最大。这说明监督信号本身不直接改善解码，关键是把坐标以可用的数值形式送入解码器的输入与交叉注意力。两侧编码使用同一傅里叶映射，使音频时间与乐谱时间在同一坐标系下对应。

该结论的适用条件是预切分摘录与公共可评分集合，整首条件下的消融由人工坐标对照补充。人工坐标实验表明，坐标估计误差是整首性能的重要来源，未来改进应优先提高真实演奏上的相位估计，而非仅调解码器结构。

### 结论在什么条件下才成立

首先，节拍改善的证据在合成数据上最稳。在 Syn 预切分与整首上，完整模型的节拍与平均分数显著占优；在 ASAP 预切分上，坐标的节拍增益很小且其他分量下降，平均几乎不变。整首上虽在 ASAP 仍显著占优，但 OMR-NED 只是相当，且人工坐标对照显示真实演奏的坐标估计仍有较大提升空间。

其次，整首结果依赖特定的推理流程：1280 帧窗、640 帧步长、平均 1 阶矩找相位过零点、下拍最小间隔 400 ms、五小节摘录上用 1 阶马尔可夫模型经维特比固定拍号调号、每窗按前半窗内下拍决定解码小节数并只保留可重建为 \*\*kern 的完整小节前缀。这些超参数与文法约束贪心策略是结果的一部分，换流程可能改变覆盖与分数。

最后，显著性按作品自助评估，种子间独立重采样，训练种子只有 3 个。预切分表报告 3 种子均值，消融图只用单一种子。单种子消融的方向与多种子均值一致，但数值本身不宜当作精确提升幅度来引用。

### 复现第一步做什么与需要哪些资源

复现应从作者公开的代码仓库开始，本文脚注给出实现地址，且经核验该代码链接当前可用。第一步是按 hFT-Transformer 的预处理设置准备 16 kHz、256 梅尔带、每帧 16 ms 的频谱，并用冻结前端提取特征；同时准备 \*\*kern 记号化流程，注意本文改变了序列化顺序，在记谱 onset 处输出音高、在 offset 处输出时长。

数据方面需要区分合成与真实：训练验证用 Syn 并做速度与 SoundFont 混响增强，测试的 Syn 渲染用训练未见的 SoundFont；ASAP 评测需排除前端训练用过的录音。拍号调号的跨摘录平滑惩罚 8.3 与 6.3 来自训练划分中相邻五小节摘录的变化率，不应直接照搬到其他语料。

代码可用不等于权重可下载或一键可运行。本文只证明代码链接可用，未报告是否提供训练权重与完整推理脚本；MuseScore 与 Humdrum 相关链接为第三方提及或当前不可用，不能当作作者已开源。复现整首流程还需实现单路径 MV2H 近似与 OMR-NED，否则无法完全对齐表 2 的数字。

### 什么时候值得尝试这种音乐时间坐标

当任务同时需要记谱与长音频切分，且能获得小节与拍标注来构造相位目标时，这种联合学习的下拍相位值得尝试。它把“小节内位置” 做成显式坐标，一份估计同时服务解码条件化与下拍切分，避免了外部节拍跟踪器与转录模型的级联误差。在合成钢琴数据上，它以较小代价换来节拍结构的显著改善，并实现 100% 的整首覆盖。

不值得盲目套用的是真实 expressive 演奏场景。本文证据表明，仅靠合成训练的相位模型在 ASAP 上的坐标估计仍是瓶颈，预切分平均指标并未提升，整首的符号编辑代价也只是相当。若目标语料含大量速度伸缩与记谱惯例差异，需先补充真实演奏的相位标注或表情 timing 建模，并验证坐标估计本身的下拍 F 值，再谈整首增益。

还需要补的验证包括：相位估计误差与节拍分数的定量关系、不同拍号下的分拍号表现、以及去掉文法约束或改变窗长步长后的鲁棒性。只有在这些条件下，才能把本文结论复述为在给定流程与合成训练条件下，学到的音乐时间坐标改善节拍结构并支撑无外部切分的整首转录。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.29928v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
