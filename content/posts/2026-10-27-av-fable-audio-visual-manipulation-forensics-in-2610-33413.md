---
title: "AV-FABLE: Audio-Visual Manipulation Forensics in Long-Form Videos"
date: 2026-10-27
draft: false
tags: [伪造片段定位, 表示探测, 基准测试, 数据集, 音视频问答]
categories: [论文速递]
description: "针对长视频中稀疏、跨模态的局部篡改，AV-FABLE 用双时间线基准暴露单时间线评测的遮蔽问题，NFSR 通过冻结 AV-LLM 特征的分轨读出实现定位，并在域内与三种域外条件下取得最高的 AV-mAP，但视觉覆盖与解释仍是短板。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.33413"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "长视频里几秒被改了：AV-FABLE 如何按声画两条时间线定位篡改"
paper_digest_original_title: "AV-FABLE: Audio-Visual Manipulation Forensics in Long-Form Videos"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.33413v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.33413v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.33413v1.pdf"
paper_digest_primary_task: "伪造片段定位"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.forgery-localization","label":"伪造片段定位"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对长视频中稀疏、跨模态的局部篡改，AV-FABLE 用双时间线基准暴露单时间线评测的遮蔽问题，NFSR 通过冻结 AV-LLM 特征的分轨读出实现定位，并在域内与三种域外条件下取得最高的 AV-mAP，但视觉覆盖与解释仍是短板。"
paper_digest_authors: [{"affiliations":["Tsinghua University"],"name":"Yuesheng Huang"},{"affiliations":["Tsinghua University"],"name":"Hoi Fan Au"},{"affiliations":["Tsinghua University"],"name":"Jiaqi Hou"},{"affiliations":["Tsinghua University"],"name":"Ruicheng Zhang"},{"affiliations":["Tsinghua University"],"name":"Jiarui He"},{"affiliations":["Tsinghua University"],"name":"Haocheng Yang"},{"affiliations":["Tsinghua University"],"name":"Bin Hu"},{"affiliations":["Peking University"],"name":"Kewei Zhang"},{"affiliations":["Tsinghua University"],"name":"Weijian Deng"},{"affiliations":["Tsinghua University"],"name":"Jun Zhou"},{"affiliations":["Tsinghua University"],"name":"Xiu Li"}]
paper_digest_abstract_sha256: "83701063be7c6f2c4a87ce8e5fa0b54cd924db4601cc2f7a987900706adcfa96"
paper_digest_sidecars: {"citation.bib":{"sha256":"eb2ca59b29fac1e24bfc1f6192d384b3afc908ac94b6bc1caf5db1d44a70bff9","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-33413/citation.bib"},"citation.json":{"sha256":"3e29e59b790979e9f0732c2cbfe1860c1e098e80d2ea80cfbc63e2fbf1693e8b","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-33413/citation.json"},"citation.ris":{"sha256":"f3db35d8cbd48a64ee923619a63ed477584cf4d0d8df808fec83a403cee390f1","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-33413/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"58c358fa96448e807962e16910cd9c11e66d637ddd2b1f45ea4ea92f227dd6fa","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-33413/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f3f13d7dfe4fc0719bb60e18eeadab034e0d49aa9739c5ec13141c7682db54f8"
paper_digest_api_reader_plan_sha256: "b4e30dc7bd9d0ef5631ed43686b33bc00ff9a94389072533eb6dd26c58ca5d68"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f2f9636ada5c263061614918fb3b5bc37939b6d37ba334346a35af5e807065e0"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "59c9a62f8b8ef18eadf6dbeecd11db2f0476a95cfb36a533aca6e7caaab8de06"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2e264aa293b020b22c42c0c19e72c9535a28f9f8ba1477d90a46b02c28454cf9"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "12c6e69167016afd43323215efd02066d56b1444e02ada4d0d0ef0289223329c"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 长视频里几秒被改了：AV-FABLE 如何按声画两条时间线定位篡改

> 英文题目：*[AV-FABLE: Audio-Visual Manipulation Forensics in Long-Form Videos](https://arxiv.org/abs/2610.33413v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [伪造片段定位](/audio-paper-digest-blog/papers/?concept=task.forgery-localization)；[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)
- **研究方法**：[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yuesheng Huang：Tsinghua University
- Hoi Fan Au：Tsinghua University
- Jiaqi Hou：Tsinghua University
- Ruicheng Zhang：Tsinghua University
- Jiarui He：Tsinghua University
- Haocheng Yang：Tsinghua University
- Bin Hu：Tsinghua University
- Kewei Zhang：Peking University
- Weijian Deng：Tsinghua University
- Jun Zhou：Tsinghua University
- Xiu Li：Tsinghua University

## 📌 核心摘要

研究对象是几十秒到几分钟的开放场景音视频，篡改只占其中很小一段，可能只改声音、只改画面，也可能两轨各改不同区间。整段打分会稀释局部证据，而只找对时间却找错声画轨也会误导取证。论文先用事件驱动流程构造包含原始与篡改孪生对的基准AV-FABLE，每段篡改记录所属声画轨与起止区间。接着对比直接向音视频大模型提问和在冻结感知特征上训练探针的两条路径，发现前者接近猜测而后者可分性很强。在此基础上提出的方法冻结编码器，只学习轻量读出头，用两条独立解码器分别输出音频事件和视觉事件，再由校准阈值得到检测和归因。域内AV-FABLE评测中该方法以AV-mAP 91.30%超过使用相同Qwen3特征和训练预算的UMMAFormer的84.76%，检测AUROC为96.04%较该对照提高6.86点并取得归因F1最高。结论适用于开场景长视频稀疏篡改取证，视觉在强压缩和新生成器下仍易漏检，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么长视频取证不能只给整段真假标签

这篇论文处理的是分钟级、有声音有画面的开放场景视频。输入是一段同时包含音频轨 A 与视觉轨 V 的视频，时长中位数约 88 s，80% 集中在 33 s 到 207 s 之间。篡改往往只占很短一段：篡改区间并集的中位数只占整段的 9.45%，91.5% 的篡改视频被改时长不超过 30%。

输出不是一个整段真假分，而是四件事：每条轨上被改区间的起止时间，整段是否被改，归属到干净、仅音频、仅视觉、双轨 4 类，以及对每个预测区间的文字证据说明。对刚入门的读者，关键是理解稀疏性带来的两难：整段取平均会把几秒异常稀释掉，逐点到处报警又会在长干净上下文里积累误报。论文附录用一个示意模型说明了这一点，平均分的区分度随总时长增大而下降，局部触发的误报概率随判定次数累积。

因此方法必须在事件尺度保留证据，又在视频尺度控制误报。后续的双轨标注、按轨匹配的指标、以及先提区间再做视频级校准判定的设计，都是围绕这个矛盾展开的。

### 已有路线缺了哪一块拼图

人脸短视频取证主要做片段级真假分类，FakeAVCeleb 开始加入篡改语音，但仍是短说话头场景。ForgeryNet 与 PartialSpoof 分别给出视觉与音频的区间监督，LAV-DF 与 AV-Deepfake1M 系列把内容驱动的声画篡改与时间定位结合起来，但仍以说话人特写为主。

另一条线关注长上下文中的稀疏视觉篡改，如 TASLE 与 ActivityForensics，把短改动嵌入未剪辑或活动丰富的视频；AVID 则研究长视频声画不一致的理解与 grounding。论文强调，不一致不等于篡改归属：替换一段声音后声画仍可能各自自洽，而声画不匹配也不能说明哪条轨被改过。

AV-FABLE 的位置是同时满足开放场景长视频、声画各自的时间线、原始篡改孪生对、以及事件级证据说明，并设置 held-out 来源、生成器与编辑路线的域外划分。比较时要注意任务是否一致：只有同样输出分轨区间的方法才是直接可比的定位器，单轨分类器或无模态标签的统一区间输出，其分数天然包含输出形式不匹配的代价。

### 双时间线任务到底要求模型输出什么

对时长为 T 的视频，每条模态 m 各有一组事件集合，记录起点、终点、操作类型与目标类别。音频事件与视觉事件可以重叠、错开，也可以只出现在一轨。在 561 个双轨视频中，声画事件甚至完全不重叠，因此两轨必须有各自的边界。

模型要对每轨输出带置信度的区间，视频级篡改分，以及四分类归属。评测分两套：原生轨道评测只允许同轨匹配，跨轨预测即使时间重合也算错，这是主要的定位指标 AV-mAP，即音频 mAP 与视觉 mAP 的平均；联合时间线把重叠真值合并后不分轨道匹配，作为辅助视角。干净视频上的预测在两套协议下都算误报，原生协议下在未被改轨道上的预测也算误报。

**双时间线 × 原生轨道评测：** 双时间线指音频轨和视觉轨各自保留一套起止时间与篡改标签，允许重叠、错位或单轨出现；原生轨道评测指预测必须在同一轨道上与真值匹配，跨轨即使时间对上也不给分，二者搭配才能同时回答“何时被改” 和“哪条轨被改”。

### SEE-Forge 如何从自然事件造出孪生对

理解数据集先看构造流水线 SEE-Forge。它不是随机切一段去改，而是先在原始宿主视频里编目已发生的自然事件，利用字幕、语音转写、音频突变、运动与物体交互等线索，再由规划模型选一个可观察事件，指定改哪条轨、改哪段、语义变化是什么、哪些内容必须保留。

下面这张图展示了从原始事件到规划、编辑、回插与人工复核的完整回路，适合对照正文阅读一次全流程。

> **看图路径：** 1. 先从左侧原始视频与标注事件时间出发，看规划如何拆成视觉与音频两路编辑意图；2. 再看右侧视觉与音频编辑器如何分别生成片段并回插成篡改媒体；3. 最后看中间回插与双子构建如何同时产出原始孪生与篡改孪生，并送入人工复核

[![原论文 Figure 1：Overview of SEE-Forge, the event-driven pipeline for constructing AV-FABLE.](https://arxiv.org/html/2610.33413v1/pipeline.png)](https://arxiv.org/html/2610.33413v1/pipeline.png)

*论文图 1。原论文 Figure 1:：“Overview of SEE-Forge, the event-driven pipeline for constructing AV-FABLE.”。*

图中可见左侧原始篮球场片段标注事件时间为 72.4 s 到 84.4 s，中间规划同时给出视觉加观众与音频加欢呼声，右侧分别路由到视频编辑器与音频编辑器，下方回插后形成原始与篡改对照，最左侧再由人工核查事件内与上下文证据。执行区间直接作为时间真值，人工只检查边界质量而不重画边界。

为控制内容与处理捷径，每个篡改视频都有来自同一宿主的原始孪生，两者经过相同的裁剪、回插与导出流程。元数据探针只用容器、编码、分辨率等文件级字段区分真假，在域内与域外混合池上 AUROC 仅 53.9% 到 54.6%，说明文件头信息基本无用。但论文也明确，生成器在编辑区间内留下的重采样纹理等信号不在该探针范围内，仍可能被模型利用，这是后续解读泛化时必须记住的限制。

### 冻结特征里真的有取证信号吗

论文先做了一个关键对照：直接用语言接口零样本提问 Qwen2.5-Omni 与 Qwen3-Omni，检测 AUROC 只有 51% 到 52%，任 1 轨道 mAP 至多 0.30；但在同样冻结感知特征上训练线性探针，音频可达 90.8，视觉可达 80.8 的 AUROC。这说明判别信息存在于感知表示中，只是零样本语言输出暴露不出来。

NFSR 因此直接读冻结的 Qwen3-Omni 声画编码器。对每条模态，同时取出中间层细节特征与送往语言模型的接口特征，按 0.25 s 网格对齐，视觉空间 token 在每个时刻做注意力池化，音频直接用时间向量。门控投影把两类特征拼起来映射到 256 维，让时序模型同时利用两种表示深度，而不是只赌某一层。

下面这张图把两路特征、调制与解码画在同一版式里，读图时先分清上下两路，再看中间的融合位置。

> **看图路径：** 1. 先对比上下两路音频与视觉编码器输出的细节与接口特征维度；2. 再看门控投影与宿主条件 FiLM 在何处对特征做缩放与平移；3. 最后看两路独立解码器与底部校准判定如何分开输出区间与视频级标签

[![原论文 Figure 2：Overview of NFSR. (a) Frozen intermediate-layer (“detail”) and interface features pass through…](https://arxiv.org/html/2610.33413v1/nfsr.png)](https://arxiv.org/html/2610.33413v1/nfsr.png)

*论文图 2。原论文 Figure 2:：“Overview of NFSR. (a) Frozen intermediate-layer (“detail”) and interface features pass through modality-specific gated projection and host-conditioned FiLM.”。*

上路为视觉，下路为音频，左侧分别标出空间细节与声学细节的形状[N,16,1152]、[N,1280] 与接口[N,2048]，中间经门控投影到 256 维，右侧进入各自的时序金字塔，底部再做校准判定。雪花标记冻结，火焰标记可训练，直观区分了哪些参数更新、哪些只是只读特征源。

**中间层特征 × 接口特征：** 中间层特征指编码器中间层的感知细节，保留局部纹理与声学异常；接口特征指送入语言模型的编码器输出，与语言侧对齐，二者分别提供细节判别力和高层可比性，门控投影把它们融合成同一时刻的读出向量。

### 宿主统计与分轨解码如何把区间算出来

同一段脚步声在安静厨房与嘈杂球场里的含义不同，因此 NFSR 先算整段宿主视频的通道均值与标准差，再用两层 MLP 生成缩放与偏置，对局部特征做逐通道仿射。这一步保留特征绝对尺度，只做重加权，而不是做逐视频标准化把尺度丢掉。统计量在训练与推理时都只来自输入视频本身，不需要原始孪生做参考。

该调制的计算形式如下，公式由程序直接展示原始 TeX。

\[(\bm{\gamma}_{m},\bm{\beta}_{m})=g_{m}([\bm{\mu}_{m};\bm{\sigma}_{m}]),\qquad\widetilde{\mathbf{h}}_{t}^{m}=\mathbf{h}_{t}^{m}\odot(\mathbf{1}+\bm{\gamma}_{m})+\bm{\beta}_{m}.\]

其中均值与标准差在有效时间位置上计算，拼起来送入 MLP 得到每条轨各自的缩放与偏置，再与局部特征逐元素相乘相加，结果送往同轨解码器。

解码器按多尺度时序定位思路，为金字塔每个点预测分类 logit 与左右距离，经 Soft-NMS 合并多尺度提议并裁剪到视频边界。每个点的预测可写成起点、终点与置信度的三元组。

\[(\hat{b}_{j}^{m},\hat{e}_{j}^{m},\hat{c}_{j}^{m})=\left(u_{j}-r_{j}\hat{d}_{j}^{m,-},\;u_{j}+r_{j}\hat{d}_{j}^{m,+},\;\operatorname{sigmoid}(z_{j}^{m})\right).\]

其中 u 为该点时间戳，r 为该层步长，距离以步长为单位，置信度经 sigmoid 得到。音频与视觉分支参数独立，各自只看自己调制后的序列，因此声画边界可以不同。

**宿主条件调制 × 分离式解码器：** 宿主条件调制用整段视频的通道均值与标准差生成缩放与偏置，告诉模型当前场景下局部变化是否异常；分离式解码器指音频与视觉各用一套独立时序金字塔预测区间，前者提供上下文，后者保持证据路径不串扰，使两轨可以输出不同边界。

### 监督从哪里来，阈值何时固定

训练时每条分支只受同轨时间标注监督，损失是两轨各自的 focal 分类损失加距离 IoU 回归损失之和，权重为 1。干净视频与未被改轨道提供负监督，正样本按中心采样与回归范围指派， overlapping 时选最短者，分类与回归共享一个滑动平均的正样本计数归一器。

其总体读出损失形式如下。

\[\mathcal{L}_{\mathrm{readout}}=\sum_{m\in\{a,v\}}\left(\mathcal{L}_{\mathrm{focal}}^{m}+\lambda_{\mathrm{reg}}\mathcal{L}_{\mathrm{DIoU}}^{m}\right).\]

优化用 AdamW，学习率 1e-4，权重衰减 0.025，12 轮、2 轮热身、余弦衰减，批量 8，梯度裁剪 1.0 与指数滑动平均 0.999。特征按 0.25 s 缓存，音频中间层固定取第 16 层，视觉中间层经注意力池化。检查点按源域验证集 mAP 选择，未看过域外测试。

视频分与归属阈值在推理前一次性固定：用 256 个原始源域验证视频估计每轨最高提议置信度的尾概率，检测分取两轨尾概率较小者的负值，检测与每轨判定各自在 5% 名义误报预算下取阈值，之后在域内与域外都不再调整。区间本身不受阈值改变，只决定哪些区间被保留用于视频级判定。

### 数据划分、指标方向与比较公平性

训练、验证、域内测试与域外共用 10,954、2,347、2,347、1,002 对孪生，同一宿主的所有衍生样本留在同一划分。27 种编辑配置中 23 种见于训练，4 种留作域外。3 种域外分别测来源迁移、新生成器旧路线、以及连路线带生成器一起换掉的 TI2V，后者只有视觉篡改。

定位用 tIoU 从 0.30 到 0.70 步长 0.05 的 mAP 与事件 IoU，前者计排序与多余预测，后者只计每个真值事件的最佳重叠，漏检记零。检测用 AUROC 越大越好，误报率是工作点诊断，不排名。归因用各评测集实际出现的类别上的宏 F1，缺失类别不计入分母。

**联合时间线 × 原生轨道评测：** 联合时间线把重叠的声画真值合并成一条无模态参考，只看是否找到时刻；原生轨道评测保留模态身份，只认同轨匹配，前者是辅助视角，后者是主要定位指标，两者对比才能发现“找对时间却找错轨道” 的盲区。

**检测 × 定位 × 归因：** 检测只回答整段视频是否被改过，用 AUROC 与固定误报率下的判定衡量；定位要求给出每轨的起止区间，用 mAP 与事件交并比衡量排序与覆盖；归因把两轨判定组合成干净、仅音频、仅视觉、双轨四类，三者共享区间但评价目标不同。

基线分 3 类：语言接口的零样本 AV-LLM，单模态分类器经滑窗转区间，以及输出分轨区间的时序定位器。只有最后这类与 NFSR 输出形式一致，可直接比 AV-mAP；固定窗口、单轨、统一无模态与语言时间戳输出的分数同时反映输出形式与定位能力，例如训练后的 AASIST 检测 AUROC 可达 75.95 但 A-mAP 仅 0.06，正是因为窗口转区间的代价。

### 域内主结果：同特征下谁的读出更好

下表先看数据规模与构成，明确长视频稀疏篡改的基本盘，再看域内定位与检测的直接对比。表前说明比较问题：在相同 Qwen3 冻结特征与相同训练预算下，分轨读出能否超过已有声画定位器，以及零样本语言输出与监督读出的差距有多大。指标方向为 AUROC、归因 F1 与各类 mAP 越大越好，误报率只作工作点参考。

| 数据规模 | 数量 |
| --- | --- |
| 孪生对总数 | 16650 |
| 总时长 | 998.1 小时 |
| 音频事件数 | 10306 |
| 视觉事件数 | 11847 |
| 仅音频视频 | 4903 |
| 仅视觉视频 | 6376 |
| 双轨视频 | 5371 |

该表整理自原文对 twin pairs、时长与事件数的连续描述，说明基准同时覆盖单轨与双轨、重叠与错位事件，为分轨评测提供条件。

| 方法 | 检测 AUROC | AV-mAP | 音频 mAP | 视觉 mAP |
| --- | --- | --- | --- | --- |
| Qwen3-Omni 零样本 | 52.28 | 0.03 | 0.02 | 0.04 |
| UMMAFormer 同特征 | 89.18 | 84.76 | 89.90 | 79.62 |
| NFSR | 96.04 | 91.30 | 92.24 | 90.36 |

零样本语言输出接近随机猜测，监督读出在同特征上恢复出强信号；NFSR 相对 UMMAFormer 提升 6.54 个百分点，其中视觉轨提升 10.74，检测 AUROC 提升 6.86，事件 IoU 在双轨也更高，说明增益覆盖排序与覆盖两方面。反例是单看视觉轨时，训练后的 ActionFormer 视觉 mAP 达 89.22 且视觉 IoU 更高，但因无音频输出其 AV-mAP 只有 44.61，这正是原生评测要惩罚的缺轨问题。

下面这组成功与失败案例帮助把数字落到具体区间上，读图前先明确每行只显示一条轨道的真值与预测。

> **看图路径：** 1. 对比(a)(b) 成功定位与(c) 漏检在真值条与预测条上的重叠差异；2. 注意(d) 干净视频的误报条如何出现，并对照其 tIoU 标注；3. 观察每行采样帧边框颜色与轨道真值的关系

[![原论文 Figure 8：Localization successes and errors.](https://arxiv.org/html/2610.33413v1/cases.png)](https://arxiv.org/html/2610.33413v1/cases.png)

*论文图 8。原论文 Figure 8:：“Localization successes and errors. (a) A visual-only object replacement and (b) an audio-only speech replacement are localized; (c) a visual object insertion is missed; (d) a…”。*

图(a) 视觉物体替换被定位到 tIoU 0.945，图(b) 音频语音替换达 0.984，图(c) 视觉苹果插入无超阈值区间而漏检，图(d) 干净视频出现一段无匹配的视觉误报。每行同时给出采样帧、整段时间条与起止数字，可见定位不仅是分类对错，还要求边界重叠与轨道正确。

### 三种域外迁移：增益来自哪里，短板在哪里

下表比较 3 种域外设置下的视频级与定位表现，阈值均沿用源域校准，不做目标域适配。来源迁移同时换域与模态构成，新生成器保留路线只换生成器，TI2V 连路线带生成器一起换且只有视觉篡改，因此分数衡量的是整体设置迁移而非单一因素的因果难度排序。

| 域外设置 | NFSR AV-mAP | 对照 UMMAFormer AV-mAP | NFSR 误报率 |
| --- | --- | --- | --- |
| 来源迁移 | 70.15 | 60.48 | 2.97 |
| 新生成器 | 49.12 | 33.98 | 3.86 |
| TI2V 新路线 | 68.07 | 36.06 | 4.67 |

NFSR 在 3 个设置上均为最高 AV-mAP，主要靠视觉轨拉开差距，在 HDTF 音频上与 UMMAFormer 基本持平；其误报率保持在 2.97% 到 4.67%，接近 5% 预算，而 UMMAFormer 在来源迁移上误报达 12.21% 且覆盖仍更低。限制同样清楚：视觉覆盖仍是主要短板，NFSR 视觉事件 IoU 仅 26.42 到 41.21；在新生成器与 TI2V 上，视觉单轨基线在自家轨道上偶有反超，例如训练后的 ActionFormer 在 TI2V 检测与视觉 IoU 领先，但因缺音频输出其双轨场景 AV-mAP 至多 37.50。

论文还报告，低误报不等于可靠：压缩、降分辨率、音频加噪都会同时降低召回与误报，单看误报下降会误以为变好，必须结合归因 F1 与事件 IoU 一起读。

### 拿掉每个组件会发生什么

下表在相同 12 轮训练、相同划分与阈值下一次去掉一个组件，三次种子取均值。表前说明比较问题：中间层细节、接口特征与宿主条件调制各自贡献多少，域内与域外平均的下降是否一致。AV-mAP 与 mAP 越大越好，误报率不排名。

| 变体 | 域内 AV-mAP | 域外平均 AV-mAP |
| --- | --- | --- |
| 去掉中间层 | 84.75 | 53.73 |
| 去掉接口特征 | 90.61 | 58.38 |
| 去掉宿主调制 | 89.86 | 57.72 |
| 完整 NFSR | 91.30 | 62.45 |

中间层贡献最大，去掉后域内降 6.55、域外降 8.72；去掉接口在域内影响小，但域外降 4.07 且误报翻倍；去掉宿主调制域外降 4.73。消融在域内联合 mAP 反而更高、域外更低，说明联合指标会奖励跨轨冗余，不能替代分轨指标。论文进一步把音频中间层分解为接口可预测部分与残差，两者探针都可分，但残差范数本身很弱，说明信号是结构化的而非能量大小；把残差直接给解码器会降域外 mAP，说明线性等价的表示对时序解码并不等价。

另一组对照比较分离与跨模态注意力读出：在纯音频语音替换对照中，分离视觉头在篡改与原始孪生上触发率均为 2.9%，跨模态视觉头在原始上 4.6% 而在篡改上达 11.8% 到 15.1%，说明后者把声音变化泄漏进了视觉判定。

### 哪些结论是有条件的，哪些还没测

原生评测的价值可以用一个数字记住：只用 NFSR 视觉预测去算联合 mAP 可达 64.04，超过所有纯视觉基线，尽管其音频 mAP 为零；只用音频也可达 57.36，超过所有纯音频基线。高联合分完全可以与整轨盲区共存，因此论文把分轨 mAP 作为主要指标是合理的。

泛化结论的条件要讲清：held-out 生成器仍在见过路线上，路线覆盖不保证生成器迁移，3 个域外分数各自由多因素变化构成，不能直接排名哪个因素更难。元数据探针只证伪文件头捷径，不排除编辑区间内的重采样纹理等解码信号，其中一部分是真实取证线索，另一部分可能只与所用生成器有关。

未解决的范围包括视觉在域外覆盖仍然偏低，解释维度最弱：调优后结构化输出合规率近 100%，但操作与目标识别 F1 在域内仅 16.38 与 20.91，域外更低，且对篡改输入大量弃权，说明流畅描述不等于定位与语义正确。缺失模态与强压缩下的鲁棒性、更广的真实编辑流程与更精细的感知边界，论文都列为未来工作。

### 复现第一步做什么，需要哪些配置

复现先从划分与阈值做起，而不是直接跑大模型。同一宿主的所有衍生必须留在同一划分，训练用 ActivityNet 与 EPIC-KITCHENS，域外用 HDTF、来源隔离的 TASLE 子集、新生成器集与 TI2V 集。校准子集取 256 个原始加 256 个篡改的源域验证视频，但阈值只用其中原始视频估计，在 5% 预算下固定后冻结。

特征按 0.25 s 网格缓存，视觉中间层经注意力池化，音频中间层取第 16 层，门控投影到 256 维，dropout 0.1。时序金字塔音频六层、视觉五层，步长 2 倍下采样，focal 的 alpha 0.25、gamma 2，回归只在正点算 1 维 DIoU。NFSR、UMMAFormer 与 TASLE 训练的 ActionFormer 报告 3 种子均值，其余多为单次运行，对比时注意方差。

关于公开状态，论文写的是数据集、代码与模型权重将公开发布，本次收到的证据清单中未发现可验证的已公开资源链接，因此只能按将发布理解，不能写成作者资源当前可用。伦理上不提供端到端 impersonation 流程，发布聚焦标注、来源标识与可独立发布的生成片段。

### 什么时候值得尝试，还缺哪项验证

当你的任务是长视频中几秒的局部篡改，且必须说清哪条轨被改、起止在哪里时，这套双时间线划分与原生评测值得借鉴；当已有 AV-LLM 零样本输出不好时，先做冻结特征的线性探针再决定是否训练分轨读出，比直接调语言时间戳更有效。Qwen3 直接时间戳微调音频 mAP 可到 57.30 但视觉仅 18.30，说明语言路径的视觉定位瓶颈更大。

部署前至少补两项验证：一是在自己的压缩、降采样与音频噪声下重测召回与误报，因为论文显示 360p 可把视觉 mAP 从 53.1 打到 10.9 而不影响音频，单看误报会误判；二是在新生成器上测分轨覆盖而非只看联合分，否则缺轨会被掩盖。训练数据量从 50% 到 100% 仍带来域外 4 到 5 个点的提升，说明数据与优化步数都还有收益，但路线覆盖不等于生成器泛化，仍需留出真正的 held-out 生成器。

一句话总结：稀疏长视频取证的关键不是整段分类器更强，而是让每条轨在自己的时间线上说出证据，并用固定阈值在视频级做出可比的判定。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.33413v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
