---
title: "LEAP: Learned Block-wise Evidence Retrieval for Long Audio-Video Perception"
date: 2026-10-02
draft: false
tags: [音视频问答, 检索增强, LoRA, 长音频处理]
categories: [论文速递]
description: "针对小时级音视频问答无法把整段录像放入上下文的问题，LEAP 用 600 秒分块定位加至多 9 窗有界回答，在四个主基准上高于同栈整体读取基线，代价是每题需要多遍定位且文本通道只在语音证据充分时可替代媒体扫描。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.39938"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "长录像问答的上下文两难：分块定位证据再有界重读"
paper_digest_original_title: "LEAP: Learned Block-wise Evidence Retrieval for Long Audio-Video Perception"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.39938"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.39938.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"setting","id":"setting.long-audio","label":"长音频处理"}]
paper_digest_primary_method: "检索增强"
paper_digest_score: 8.3
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对小时级音视频问答无法把整段录像放入上下文的问题，LEAP 用 600 秒分块定位加至多 9 窗有界回答，在四个主基准上高于同栈整体读取基线，代价是每题需要多遍定位且文本通道只在语音证据充分时可替代媒体扫描。"
paper_digest_authors: [{"affiliations":["Northeastern University","Futurewei Technologies"],"name":"Juyi Lin"},{"affiliations":["Futurewei Technologies"],"name":"Zhiqiang Lao"},{"affiliations":["Futurewei Technologies"],"name":"Jiali Cui"},{"affiliations":["Northeastern University"],"name":"Lin Zhao"},{"affiliations":["Northeastern University"],"name":"Pu Zhao"},{"affiliations":["Futurewei Technologies"],"name":"Dichang Zhang"},{"affiliations":["Northeastern University"],"name":"Arman Akbari"},{"affiliations":["Northeastern University"],"name":"Yu Qi"},{"affiliations":["Northeastern University"],"name":"Xinru Jiang"},{"affiliations":["Northeastern University"],"name":"Yanzhi Wang"},{"affiliations":["Futurewei Technologies"],"name":"Heather Yu"},{"affiliations":["Futurewei Technologies"],"name":"Liang Peng"}]
paper_digest_abstract_sha256: "5be80380ba015d938f10cf4b892d54f5de22c9de97033e769984ee1fe33b4baa"
paper_digest_sidecars: {"citation.bib":{"sha256":"a2b164b3bb04aba57e0f220df9ab224fdebfce69bd2894d4dd51914411b49ce2","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-39938/citation.bib"},"citation.json":{"sha256":"2019dd93e107a0619d1b6144c775bbd622db81547ca6d1841c6b1ce83102c8ca","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-39938/citation.json"},"citation.ris":{"sha256":"985ab3d8c3e2ba1141cad330041284ab5659c12953c5de20aca833b7b6dd779d","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-39938/citation.ris"},"rethink-context.json":{"sha256":"0f4e565e99bcf91c074fd5eb32b0065f06491c29392733cec29a2550192aef8a","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-39938/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c8b90021e4101e0b81c154c77d5f1e49d0770474675cf37203812f55ce983e39"
paper_digest_api_reader_plan_sha256: "04efbaea0106bf2b42514e377563cb0056577270da56f2cfd29a25255c77c049"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5f23840443c74047f91d092b340f0c98b67817b0e33b83021959cf2e6a448cf9"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "4d34c4587d21513d160563185bc9ee6609749748a53f3a53282c6e041bc29f2c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d62e7b9cd3fe6dacbeb67fa6dbaf2770d4c2833de7fd724d1d5603867ecd017a"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "78ecb6bc012a808e8615338a7f7290641913769f0b627394ce3b56e6bb1cd32f"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 长录像问答的上下文两难：分块定位证据再有界重读

> 英文题目：*[LEAP: Learned Block-wise Evidence Retrieval for Long Audio-Video Perception](https://arxiv.org/abs/2609.39938)*

> 标签：#音视频问答 | #检索增强 | #LoRA | #长音频处理
>
> 评分：**8.3/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.5/1.5 | 可复现 0.5/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Juyi Lin：Northeastern University；Futurewei Technologies
- Zhiqiang Lao：Futurewei Technologies
- Jiali Cui：Futurewei Technologies
- Lin Zhao：Northeastern University
- Pu Zhao：Northeastern University
- Dichang Zhang：Futurewei Technologies
- Arman Akbari：Northeastern University
- Yu Qi：Northeastern University
- Xinru Jiang：Northeastern University
- Yanzhi Wang：Northeastern University
- Heather Yu：Futurewei Technologies
- Liang Peng：Futurewei Technologies

## 📌 核心摘要

小时级音视频问答需从数小时录像中回答依赖短暂视听证据的选择题，整段密集编码会迅速耗尽上下文而均匀时间压缩会稀释细粒度声画细节。先将录像按600s切分为互不重叠块，挂载定位适配器的定位通道以问题加块内8个75s候选窗的视听内容为输入学习证据覆盖打分，输出每窗后验并以块内最大后验得到块排序。再取排序居前块中各居前窗构成至多9窗证据池并按时间排序，该排序序列直接进入挂载回答适配器的回答通道，最后回答通道以该多窗序列加分钟级转录提纲为输入进行单次有界联合推理并输出答案，避免将整段录像置于同一上下文。在VideoOdyssey基准下，LEAP的准确率为53.7%，高于Qwen3-Omni-30B的准确率37.9%。与整段前缀基线相比，其在因果流式历史回溯上无需流式训练即可领先，且回答输入与峰值上下文与录像时长无关。该结论适用边界受限于语音可转录与证据可被块级最大后验召回，视觉为主或无语音场景增益收窄，长证据与计数类任务仍弱。推理开销方面，原文披露单问中位累计预填充约为整段单通道的2.2倍至2.4倍，VideoOdyssey单视频中位需13次前向，媒体通道定位 tokens与问答延迟均数倍于转录通道。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么整段塞入行不通？

这篇论文研究的输入是一段很长的、音画时间对齐的录像，加一道带选项的问题，输出是所选答案。必须保留的信息是散在全片各处的短证据，可能是一句对白、一个声响或几秒画面。整段密集编码的问题在于上下文迅速耗尽，均匀压缩整段则把每分钟分到的细节稀释掉。

学习依赖上，先要理解固定上下文下覆盖与密度争用同一批词元，再理解 2 次走时间轴的思路。第 1 次用便宜的粗扫决定看哪里，第二次用密读只重读那些地方。对刚入门的读者，可以把任务想成在 2 小时会议录像里回答一道细节题，这只是教学例子，不代表论文数值。

论文的输出承诺是回答输入与峰值上下文不随录像时长增长。这一点靠固定块长和固定保留窗数实现，后文所有数字都要连同基线输入配方一起核对。

### 已有三条路线各自在什么运行阶段丢了什么？

论文把相关工作按同输入同目标对照成 3 类。选择类在回答前保留有限时域，压缩类保留全片但减少词元或记忆状态，智能体类按问题多次回看源视频。原文的判断是粗视图选择可能丢掉答案需要的窗，压缩稀释保留下来的细节，未经训练的智能体把去哪里看留给推理时提示。

教学上可以这样记，选择丢覆盖，压缩丢分辨率，多次回看把媒体工作按题重跑。文本作为检索通道的工作也被单独对照，字幕聚合与文档检索把视频转成可搜索文本，但回答时只给模型文本，不再读录像。

论文的不同点是转录只做第二扫描通道和回答时的短提纲，最终回答仍重读原始音视频窗口。这样做保留了转录漏掉的无言视觉细节和非语音音频。流式理解的对照条件不同，提问时只能读查询时刻之前的前缀，论文没有做流式训练，只是让固定时钟网格直接跑在因果前缀上。

### 问题如何形式化，什么算一次可复述的运行？

形式化输入是视频流、音频流、问题与选项，约束是不得把完整小时级录像放入 1 次上下文。1 次可复述的运行按算法走，先为该录像做 1 次转录并生成面向问题的提纲，再把录像切成固定时长不重叠块。每块恰做 1 次定位遍，读出候选窗字母的分数，按块分取靠前的块，每块内取靠前的窗。

汇合后的窗口按绝对时间排序，进入 1 次有界回答遍。块与窗都由时钟固定，与问题无关，学习只决定保留哪些窗和如何从窗回答。评价时除特别说明外分母是官方全量问题集，失败按错计。

成对差异用按源视频聚类的自助法区间，区间不含零才称显著。这一点决定了后文所有提升都必须连同统计口径一起理解，不能只看单点准确率。

### LEAP 的两遍流程如何走完一个样本？

沿一个样本走一遍有助于建立全景。假设一段 2 小时录像配一道题，系统先把它切成多个固定时长块，每块再铺多个候选窗。对每道题，定位遍逐块读入该块的稀疏视频加全速率音频和题干，输出每个候选窗字母的分数。所有块扫完后取分最高的少数块，每块取分最高的少数窗，汇成有界数量的窗并恢复时间序。

回答遍把这些窗按每窗固定上下文重读，附上分钟级转录提纲和题干，1 次生成答案。定位遍的峰值只与单块有关，回答遍的峰值只与保留窗加提纲有关，因此与总时长无关。下图是论文给出的总览，顶部是按块切分与 1 次转录，底部是每题定位打分与 1 次回答重读的关系。

> **看图路径：** 1. 先沿顶部录像切块和一次转录的箭头看输入如何变成块与文本两路；2. 再看底部每题定位遍在每块内打浅色候选窗的范围；3. 最后看深色保留窗如何汇入一次回答遍并输出答案

[![原论文 Figure 1：Overview of LEAP. Top: each recording is split into fixed-length blocks and transcribed once.](https://arxiv.org/html/2609.39938v1/arch.svg)](https://arxiv.org/html/2609.39938v1/arch.svg)

*论文图 1。原论文 Figure 1:：“Overview of LEAP. Top: each recording is split into fixed-length blocks and transcribed once.”。*

从像素可见，顶部一条时间轴上有 4 个块的视频与音频示意，转录条由语音识别分支引出。底部有两条定位遍，上面一条标为基础选择器的转录文本定位，下面一条标为定位适配器的媒体定位，中间是一条带提纲与问题的回答遍并指向答案。浅色格是候选窗，深色格是块排序后保留下来的窗。这种画法把第二扫描通道的含义讲清楚了，两条定位路共享块网格和回答遍，只是扫描物不同，回答都回到原始录像。

### 定位遍读什么、算什么、留下什么？

定位遍的输入是单块压缩表示加问题文本，不含本题选项。视频在定位时压得很稀，音频则保留该块全速率编码。原文强调不对称处理的理由是音频保留完整时间支撑，同时视觉序列足够小，使每块一遍足够便宜。块内候选窗以字母选项形式列在固定提示中，定位遍只输出选项字母的分数，不解码答案，也不跨块保留键值缓存。

计算目标是每个窗口的相关分与每个块的排序分。符号上，压缩表示是该块的编码，题干是基准原题，字母分数是定位函数读出的 logit，窗口分是其 sigmoid 变换，块分是块内最大窗口分。块排序直接用最大分数的单调变换，聚合是取最大而非平均。

\[\left(\ell_{m,1},\ldots,\ell_{m,K_{m}}\right)=\mathcal{F}_{\theta_{0},\phi_{\mathrm{loc}}}\!\left(z_{m},q\right),\qquad r_{m,k}=\sigma\!\left(\ell_{m,k}\right),\qquad g_{m}=\max_{k\in\{1,\ldots,K_{m}\}}r_{m,k},\]

该式先把定位函数读出的字母分数列出来，再把每个窗口分定义为对应分数的变换，最后把块分定义为块内窗口分的最大值。实现上只读提示最后一个位置隐状态对各字母输出头行的分数。排序后保留分最高的块，每块的短名单在各自定位遍内已按同一组分数形成，汇合后按时间排序进入回答。

**分块 × 候选窗口：** 分块是按时钟切出的 600 秒不重叠大段，负责把任意时长录像变成每遍只读一段的扫描单位；候选窗口是块内再切出的 75 秒小段，是打分和保留的基本单位。二者搭配的理由是块保证单遍上下文有界，窗口保证回答只重读细粒度片段，组合起来让覆盖全片和保留细节分在两遍完成。

回答遍的序列形式是提纲、固定指令、每窗时间戳加编码、问题与选项的拼接。每保留窗按固定帧数加本窗全速率音频重读。提纲是每分钟一行带分钟标记的文本，超限时按问题优先填入，无语音录像则无提纲。主干在回答时把定位适配器换成回答适配器，两者顺序驻留、永不叠加。

**块排序分 × 窗口分：** 窗口分是定位遍对块内每个候选窗口读出的选项字母 logit 经 sigmoid 的值，块排序分是该块内最大窗口分的取值，用于跨块排序。搭配理由是同一提示和同一适配器下各块分数可直接比较，组合意义是先按块排序分取前 3 块，再在每块内按窗口分取前 3 窗，排序不增加额外遍数和参数。

### 转录文本通道何时是便宜替代，何时不是？

转录文本通道的动机是语音常已具判别性。做法是每录像预先转录 1 次，候选窗渲染为其时间跨度内的转录片段按时间拼接并截断，无语音则写无语音。块渲染为每字母窗一行时间范围加与媒体通道相同的选窗提示，无媒体元素，用基础模型读同样字母分数打分，块与窗选择规则不变。

两种通道把窗交给同一个部署回答遍，因此比较的是选择质量而非回答器差异。论文报告转录通道定位词元约为媒体通道的数分之一，中位问答耗时在各基准上都更短。但保留质量与证据是否被说出有关，在视觉线索为主的基准上，转录通道保留的人标线索区间更少，回答也更低。

这说明转录通道不是通用替代，而是语音证据为主时的便宜替代。无论谁选窗，回答遍都重读原始音视频并只把转录当作短提纲。

**媒体通道 × 转录文本通道：** 媒体通道用每块的视频加全速率音频做定位打分，负责保留视觉和非语音细节；转录文本通道把同一块网格上的每窗口转录文本作为打分输入，负责不解码媒体帧就完成扫描。二者共享块网格和回答遍，搭配理由是语音充分时文本扫描更便宜，组合意义是无论谁选窗，回答遍都重读原始音视频并只把转录当作短提纲。

**转录提纲 × 保留窗口：** 转录提纲是全片一次转录后按分钟成行、按问题排序截断的文本概览，负责给回答遍提供全局语言上下文；保留窗口是排序后按时间排好的至多 9 个原始音视频片段，负责提供细粒度证据。二者一起进入有界回答序列，搭配理由是提纲弥补检索漏检，窗口弥补转录丢失的画面和非语音声音。

### 两个适配器各自用什么监督、算什么损失？

主干权重冻结，可训练参数只有两个低秩适配器，挂在语言模型每层自注意力的查询、键、值与输出投影上。定位适配器训练在衍生定位问题上，每个事件段生成一题，题干问该字幕发生在哪个时间窗，证据跨度即标注跨度。监督网格与部署块长解耦，长片段先分大窗做第一级，再在含证据的一份内做细窗第二级，短片段直接铺细窗。

目标是与证据交叠最多的候选，损失是对字母分数的交叉熵。

\[\mathcal{L}_{\mathrm{loc}}=-\!\!\!\sum_{\left(z,q,J^{\star}\right)\in\mathcal{D}_{\mathrm{loc}}}\!\!\!\log\frac{\exp\!\left(\ell_{k^{\star}}\right)}{\sum_{k=1}^{n}\exp\!\left(\ell_{k}\right)},\qquad k^{\star}=\argmax_{k}\,\left|J_{k}\cap J^{\star}\right|.\]

该式中训练片段按定位媒体速率编码，定位问题是衍生题干，标注跨度是事件证据，目标是交叠最长的候选。2 级各贡献一项等权交叉熵。质量过滤用基础模型逐窗检验，只在目标窗答是、其余窗答否时保留。回答适配器训练用金证据段加其他录像的干扰段，每例一金两干扰，带原题选项。

目标与损失掩码只在金选项字母加结束符上。

\[\mathcal{L}_{\mathrm{ans}}=-\frac{1}{|y|}\sum_{t=1}^{|y|}\log p\!\left(y_{t}\mid y_{\lt t},\mathcal{X}\right).\]

该式中答案序列是目标文本，证据序列是与推理序列同形但无提纲的拼接。学习按余弦无预热进行，部署取固定步数。小主干分支不同，定位用交叠比例损失，单级窗口，回答数据规模更大。

**定位适配器 × 回答适配器：** 定位适配器负责在单块内对候选窗口的选项字母打分并决定保留哪些块和窗口，回答适配器负责在保留窗口拼接成的有界序列上生成答案。二者都挂在冻结主干上且每次只驻留一个、不叠加，搭配理由是把找证据和读证据解耦，组合意义是定位训练改善选窗覆盖，回答训练改善从同一批窗口读出答案。

### 训练为何称单块有界，与答案奖励训练有何不同？

原文强调训练与推理同为时长有界，定位目标定义在一块之内，任何训练步都不读超出一块。监督标注的是证据在哪里，从不见答案正确性，因此选择器不会学到某个回答器在哪些输入上更容易答对。这与从答案做增强学习的选择器不同，后者每步携带全片与在线回答模型。

附带细节是块网格与问题无关、媒体前缀在块内先于问题文本，因此同视频各题的块媒体前缀按构造相同，具备前缀复用的结构条件。论文用服务实测自动前缀缓存命中与定位耗时下降，但部署运行本身无缓存，峰值仍按单遍计。下表把部署推理的固定网格整理成可核对的配置，数字与单位均来自原文连续句。

表前比较问题是回答遍的有界性由哪些常量共同保证，公平条件是同一部署配置，指标方向是各量越固定则峰值越与时长无关。

| 阶段 | 块与窗划分 | 每窗媒体 | 选择数 | 全局文本 |
| --- | --- | --- | --- | --- |
| 定位遍 | 600 s 块，75 s 窗，每满块 8 窗 | 稀疏视频加块全速率音频 | 每块内按窗分取短名单 | 无提纲 |

表后解释是块长、窗宽与保留数都是配置常量，回答序列长度因此被问题词元、提纲上限、窗数乘单窗上限与分隔符界住。主要代价是问答总工作为块数加一遍，问题越多线性增长。未胜出的一面是前缀复用虽能降均摊预填，但缓存随录像增长，已在每遍内存界之外，部署界内仍按无缓存计。

### 在哪些数据、基线和统计口径下比较？

主评在 4 个音视频基准，另有配对消融基准与 3 个视频基准，以及因果历史回溯基准。块配置跨数据集不变。回答遍在主基准带转录提纲，选择器对比时不带。显著性口径统一为按视频聚类的成对差区间，不含零才显著。同栈基线包括官方输入配方重跑、均匀整体读取、帧数匹配整体读取、无检索回答与无回答训练等。

长片上整体读取会超限，超限按错计或另设能容纳的形式对照。硬件上适配器训练用加速卡，定位与回答每步项数不同。下表整理训练与开销的核对点，回答比较什么、代价记在哪里一目了然。表前比较问题是训练分工与峰值有界如何同时成立，公平条件是同冻结主干，指标方向是按步数与数据规模可重复且单遍峰值有界。

| 可训练量 | 挂载位置 | 监督与目标 | 优化与步数 | 推理峰值 |
| --- | --- | --- | --- | --- |
| 定位秩 16 | 查询键值输出投影 | 事件跨度交叠最多窗 | 固定步数部署 | 单块一遍 |
| 回答秩 16 | 同上 | 金窗字母加结束符 | 固定步数部署 | 至多 9 窗一遍 |
| 主干 | 全程冻结 | 不见答案正确性 | 单块单遍 | 跨块无缓存 |
| 解码 | 贪心 | 首字母解析 | 新词元上限 | 位置上限内 |

表后解释是冻结与更新、监督来源与切换时机都有明示，定位改善选窗、回答改善读窗的分工有各自数据支撑。具体缺项是未报告总卡时与服务延迟全分布，不从模型名推定实现。复现时应先跑无提纲与基础选择器两条对照，再加定位与回答训练，避免把提纲增益误记为检索增益。

### 主结果在可运行基线上高多少，代价是什么？

论文报告主方法高于官方风格同栈配方，并迁移到第二个主干高于其已发表结果。按时长看，长片上无系统性坍缩，与把全片挤进一遍的基线比，在各分位均领先。流式侧在因果前缀上，媒体扫描与转录扫描均高于整前缀一遍与均匀窗，且回答用原始媒体高于只用转录文本回答。因果协议的细节值得复述，块网格只铺查询时刻之前，回答用基础权重加查询时刻截断的提纲，并恒含查询时刻结尾的窗口。

转录索引按固定时长无前视构建，只给实时因子与延迟分布。下图是流式总览，同一时间轴被查询时刻切断，右侧尚未到达。

> **看图路径：** 1. 先确认查询时刻右侧不存在、只能读因果前缀的时间切分；2. 再看原始档案与随流构建的转录索引两条上游；3. 最后看两种选择器共享同一个从档案重读的回答遍及预留窗

[![原论文 Figure 5：LEAP in the streaming scenario.](https://arxiv.org/html/2609.39938v1/stream.svg)](https://arxiv.org/html/2609.39938v1/stream.svg)

*论文图 5。原论文 Figure 5:：“LEAP in the streaming scenario. One time axis, cut by the query time; nothing to its right exists when the question is asked.”。*

从像素可见，上半是随流到达的原始档案与转录索引，查询时刻右侧标为尚未到达。下半是两条选择器共用一个从档案重读的回答遍，浅格候选、深格保留，描边格是查询前时刻的预留槽。可见流式并无特殊训练，只是把同一网格跑在前缀上，回答仍回读档案而非只读文本。下表是必须呈现的数字结果表，保留可运行基线与逐步去掉组件的实际策略。

表前比较问题是去掉提纲、定位训练、检索各会掉多少，公平条件是回答适配器在各行都参与，指标方向是准确率越高越好。

| System | TraceAV | LVOmni | VideoOdyssey | MMOU |
| --- | --- | --- | --- | --- |
| LEAP | 60.9 | 45.8 | 53.7 | 66.3 |
| −- transcript outline | 57.8 | 47.5 | 51.2 | 65.2 |
| −- localization LoRA | 56.2 | 43.5 | 46.7 | 62.1 |
| −- retrieval | 54.8 | 42.9 | 41.9 | 61.8 |

表后解释是从完整方法向下逐行去掉一个组件，整体读取行最低，说明检索与定位训练都有增益。但其中一个基准上去掉提纲反而更高，说明提纲不是处处正增益，该未胜出项如实保留。结合正文，定位训练的增益集中在终窗覆盖提升最大的长片基准，而短基准已近覆盖天花板。该表不能替代的代价是遍数与解码，中位问答耗时与累计预填高于单遍整体读取，转录通道虽更快但只在语音证据上保召回。

### 定位训练把覆盖变成正确率了吗，窗数如何取舍？

检索阶段消融显示定位适配器提高证据覆盖，终窗覆盖大幅提升，块覆盖在长片上提升更明显。覆盖转成准确率的程度因基准而异，短基准可增的覆盖已很少，长片基准最多。相对随机重布窗，完整方法在短基准和长片基准上均更高。相对等距块，在长片上的覆盖增益约为二十多个点。块分取最大而非平均是关键，把最大换成平均会丢掉最佳窗高出均值的裕量，覆盖掉数十点。下图把该消融可视化，上排是准确率，下排是块覆盖与终窗覆盖的嵌套。

> **看图路径：** 1. 先对比上排各基准上无媒体、基础选择器与定位适配器的准确率柱高；2. 再对比下排整柱块覆盖与深色终窗覆盖的差距；3. 重点看长视频基准上终窗覆盖提升是否大于短视频基准

[![原论文 Figure 3：The retrieval stage ablated. no media: stem and options only.](https://arxiv.org/html/2609.39938v1/loc_ablation.svg)](https://arxiv.org/html/2609.39938v1/loc_ablation.svg)

*论文图 3。原论文 Figure 3:：“The retrieval stage ablated. no media: stem and options only.”。*

从像素可见，上排多组基准中定位适配器柱高于基础选择器柱，误差为配对区间。下排深色为终窗覆盖、浅色为块覆盖，长片基准的深色提升最陡，无时间戳的基准无覆盖柱。教学动作是先读柱高差，再读深浅嵌套差，最后把覆盖差与准确率差对应起来，避免把覆盖提升直接当成准确率提升。窗数与块数的取舍也有证据，回答窗总数截断重答显示，大主干在长片约六窗后饱和，四窗及以下更低。

小主干在长片则不饱和，中段截断仍更低。块数上覆盖随块增而增，但准确率不跟随，部署取三块是单回答遍能容纳与各基准共用的折中。等距块在长片上丢覆盖与准确率。

> **看图路径：** 1. 先看横轴保留窗总数从 1 到 9 的截断方式；2. 再比较大主干与小主干在三组基准上的曲线斜率；3. 确认部署点取在每条曲线最右端即全池的含义

[![原论文 Figure 8：Accuracy against the answer-pass window count.](https://arxiv.org/html/2609.39938v1/keepcap_sweep.svg)](https://arxiv.org/html/2609.39938v1/keepcap_sweep.svg)

*论文图 8。原论文 Figure 8:：“Accuracy against the answer-pass window count.”。*

从像素可见，三面板横轴为按窗分取前列的保留窗总数，纵轴为准确率，两条线为大小主干。短基准曲线从首窗起几乎平坦，长片基准大主干爬升后饱和、小主干持续爬升。复现含义是窗数不是越大越好，长片与小模型更吃窗数，短片早饱和。下表是因果协议的原文配置，核对谁扫描、谁回答。

表前比较问题是流式下扫描物与回答物如何搭配，公平条件是同回答遍与同预留窗，指标方向是覆盖与准确率越高越好。

| Causal-access protocol on StreamArena | Causal-access protocol on StreamArena |
| --- | --- |
| Input | the causal prefix of the recording up to the query time |
| Answer weights | the base model, no adapter mounted |
| Answer-pass transcript outline | built from the text transcribed by the query time, question-ranked, at most 4,000 tokens |
| Reserved window | the 7575 s ending at the query time, added to the retained windows (replacing the lowest-scoring one when the context is full) unless a retained window already overlaps it at an intersection-over-union of at least one half |
| Decoding | free text; the generation itself is the answer, with no letter parser |

表后解释是该表列出因果前缀输入、基础权重回答、查询时刻截断的提纲与查询时刻结尾的预留窗。扫描可用文本替代，但回答回读媒体不可省，纯文本回答在除最远档外低于媒体回答。未评测边界是索引构建的识别误差在噪声与多语下的变化，原文只给单机实时因子与延迟分布，未做识别错误分层。

### 哪些结论有边界，哪些量没有被测量？

边界先说时长与位置。回答遍上限与主干位置上限是部署常量，保留窗的词元是部署实测从未触顶，不是理论保证。若把窗加宽或块加多，溢出问题需放宽上限，已超出部署配置。转录提纲有上限，超限按问题优先填入，无语音则无提纲，提纲在个别基准上去掉反而更高的反例说明其作用与基准相关。

未测量项要单独列，误判率、端到端延迟分布除流式分阶段中位与分位外，主基准只给定位词元倍数与单卡中位秒数，转录成本不计入。训练资源只给步数、每步项数与优化器，未给总卡时。输出帧率与实际延迟分开讨论，总体趋势不等于每组每步成立。相关性不作因果，覆盖提升伴随准确率提升，但分层显示增益集中在命中层，未命中层翻转不对称，不能说覆盖必然导致答对。

资源状态按本次核验写，未发现来源绑定且完成验证的资源，不得声称代码、模型或数据已公开。论文写验收后发布代码，当前只能按算法与配置复现，不能依赖下载权重。

### 要复现先做什么，需要哪些超参数与信息条件？

先按算法搭推理，切块、铺窗、每块一遍定位读字母分数、取块乘窗、按时排序、每窗固定帧数加窗内全速率音频、加分钟提纲与题干做 1 次回答。定位提示为单用户轮，无系统消息，视频音频在前，文本列出绝对时间的字母窗与题干，不含选项，贪心解码并解析首个独立字母。转录用大语音模型贪心加语音活动过滤，分钟成行，问题词小写分词打分，超限问题优先填入，余量各分钟等比保留。

训练侧先备事件跨度做定位题并做基础模型逐窗过滤，再备金段加他片干扰段做回答例。优化器用常见自适应方法，梯度裁剪，低精度加检查点，数据并行。两适配器秩与缩放固定，学习率余弦无预热。评估用全量分母、失败计错、按视频聚类自助多次。还需补的验证是新领域证据语音占比、识别错误率与更密窗宽下的位置与耗时重测。

复现时先跑无提纲与基础选择器两条对照，再加定位与回答训练，避免把提纲增益误记为检索增益。信息条件上，需要原始长视频、音频、问题与选项，以及事件跨度与金证据段的来源划分。缺失总卡时与服务延迟全分布是具体缺项，不从模型名推定实现。

### 何时值得尝试这种先检索后重读？

当录像远超单遍位置、证据稀疏且细粒度不可压缩时值得尝试，先用便宜单块定位覆盖全片，再把有界回答上下文花在少数窗口上。语音证据为主时可用转录通道降定位词元与耗时，但回答仍应回读原始音视频。视觉线索为主时坚持媒体扫描。流式历史回溯可直接把时钟网格跑在因果前缀并预留查询时刻窗，无需流式训练。

不值得照搬的情形是短片已能整段容纳，或证据遍布全片使位置几乎无差，此时检索增益小而遍数代价仍在。复现后还需补的验证是长片上窗数饱和点、提纲截断策略与识别噪声下的覆盖变化，以及在自有数据上按视频聚类的显著性重测。记住核心权衡，峰值有界换来的是按题多遍的总功，选窗质量决定上限，回答训练决定把上限兑现多少。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.39938)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-02/)
