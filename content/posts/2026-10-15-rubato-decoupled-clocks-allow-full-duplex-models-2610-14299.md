---
title: "RUBATO: Decoupled Clocks Allow Full-Duplex Models to Think as Fast as They Can"
date: 2026-10-15
draft: false
tags: [全双工语音交互, 动态计算与早退, 音频推理, 语音, 实时处理]
categories: [论文速递]
description: "针对全双工语音模型中实时音频与内部思考共用一条位置时间轴导致变速推理时错位的问题，Rubato 用实时钟与思考钟两套独立位置计数实现零样本变速插值，在只训练两种极端思考预算下保持准确率并随算力提升缩短给出答案的时间，代价是推理需维护多套键缓存与合成数据依赖。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.14299"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "边听边说边想：Rubato 用两套时钟解开实时音频与异步思考的绑定"
paper_digest_original_title: "RUBATO: Decoupled Clocks Allow Full-Duplex Models to Think as Fast as They Can"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.14299v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.14299v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.14299v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.dynamic-computation","label":"动态计算与早退"},{"facet":"task","id":"task.audio-reasoning","label":"音频推理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "动态计算与早退"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对全双工语音模型中实时音频与内部思考共用一条位置时间轴导致变速推理时错位的问题，Rubato 用实时钟与思考钟两套独立位置计数实现零样本变速插值，在只训练两种极端思考预算下保持准确率并随算力提升缩短给出答案的时间，代价是推理需维护多套键缓存与合成数据依赖。"
paper_digest_authors: [{"affiliations":["The University of Texas at Austin","FAIR, Meta Superintelligence Labs"],"name":"Yi-Jen Shih"},{"affiliations":["FAIR, Meta Superintelligence Labs"],"name":"Puyuan Peng"},{"affiliations":["FAIR, Meta Superintelligence Labs"],"name":"Haohe Liu"},{"affiliations":["The University of Texas at Austin"],"name":"David Harwath"},{"affiliations":["FAIR, Meta Superintelligence Labs"],"name":"Abdelrahman Mohamed"}]
paper_digest_abstract_sha256: "22ecb64569e14e180e47b9a0d35a08be13cc6cabc2db145749db585f3e76d24f"
paper_digest_sidecars: {"citation.bib":{"sha256":"265f888e1cf8deec19400cc0f713795564e934afe2cc3061622dddd5c2ec701e","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14299/citation.bib"},"citation.json":{"sha256":"d7c8cf38caf4203c43fc49eef65285f5ce624e1fce396dc5d68d1f5588954492","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14299/citation.json"},"citation.ris":{"sha256":"5ec8fc667a34f3d6903858466baae184b559547a8dcdfd7b19f2de2c8c2d3eb5","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14299/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"974e33fe986ec844bee2ada59a3dac11834a5309d6d9cbda643f06980c256ec9","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14299/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "454de86edcfa3b10605f50b8963b3e89f53482cfea4dce26dbb493fe7c9ea38e"
paper_digest_api_reader_plan_sha256: "685d477b414509469a263485164aad3f7b58e416dbb15e780e24e249d7ab7954"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3d5e5b7ede54b67155fb69f3a7b7a32fe94a0770c92dc39da34ce2c8c9aab613"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "fc47b89aa3291c31d16adcc2d5a762ca523bd66230d55d731155adc38684ed41"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "04722ddb4b5141d6a8a985b1908bbcb0e3263f305af7b510d06be2fa87b9b603"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c9a718d91670a0b78338d968914afb415d8389443518129f97b84703df7d7f6a"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 边听边说边想：Rubato 用两套时钟解开实时音频与异步思考的绑定

> 英文题目：*[RUBATO: Decoupled Clocks Allow Full-Duplex Models to Think as Fast as They Can](https://arxiv.org/abs/2610.14299v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频推理](/audio-paper-digest-blog/papers/?concept=task.audio-reasoning)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [动态计算与早退](/audio-paper-digest-blog/papers/?concept=method.dynamic-computation)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.4/1.5


## 👥 作者与机构

- Yi-Jen Shih：The University of Texas at Austin；FAIR, Meta Superintelligence Labs
- Puyuan Peng：FAIR, Meta Superintelligence Labs
- Haohe Liu：FAIR, Meta Superintelligence Labs
- David Harwath：The University of Texas at Austin
- Abdelrahman Mohamed：FAIR, Meta Superintelligence Labs

## 📌 核心摘要

语音全双工模型需同时听取用户音频、生成系统音频并在内部进行链式思考，输入是连续到达的音频帧，输出是实时语音回应与最终答案，难点在于实时对话必须按固定物理节拍推进，而思考所需计算量随硬件速度变化。Rubato先把用户音频、系统音频与思考token展平成按帧交错的序列，每帧按思考预算安排可变的思考token数，再为实时流和思考流各维护一个独立时钟，每个时钟只在属于自己的token上推进而在其他token上暂停。查询与键之间的旋转角度按键所属时钟的差值计算，该输出直接决定注意力中的相对位置，使相邻音频帧间距不受中间思考token数量影响。训练只用思考预算为1和无穷大两种极端排布，前者用口语填充音撑住对话时长以对齐完整思考，后者把完整思考压缩到一帧之内，中间速度作为零样本插值部署。在Spoken GSM8K插值评测中以准确率为指标，Rubato-Full在全部速率保持48.7%到51.1%，高于单时钟基线在插值速度下跌至的1.7%。在同一Spoken GSM8K评测中以回答延迟和首次发声时间为指标，Rubato-Full利用更快硬件将回答延迟缩短为约6.5分之一，而首次发声时间保持不变。该结论适用于合成语音的单轮与重叠打断口语推理任务，真实录音、多模态流与工具调用尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音助手要同时听、说、想，输入输出是什么

这篇论文研究的是一种能边听边说的语音对话模型。输入是不断到来的用户音频，输出是模型要实时发出的系统音频。为了让语义更稳，模型还同时处理两路文本：用户语音对应的识别文本和系统语音对应的合成文本。也就是说每一时刻都有 4 路实时信息要对齐：用户音频、系统音频、用户文本、系统文本。

除此之外，模型还有一路内部思考文本，用来做分步数学推理或逻辑推理。思考不是每帧都有，只在遇到难题时出现一段，长度不定。最终用户听到的是系统音频，其中可能先有一段占位话术，再是真正的答案。评价时把系统音频转写成文字，再对照参考答案判断是否答对，同时记录从用户停说到开始出声和到说出答案的时间。

**全双工 × 实时流：** 全双工指模型同时处理听到的用户音频和自己发出的系统音频，实时流指用户音频、系统音频及其对应的文本都必须按固定物理帧率推进、不能等待；两者搭配意味着模型每一帧都要先把实时 token 处理完，才能用剩余算力做别的事，这是后文思考预算受限的根源。

### 已有做法为什么把思考速度写死

在引入思考流之前，全双工模型已经要把多路音频交织成一个序列来处理。常见做法有拼接和交织两类，本文沿用交织：把同一帧的 4 路实时 token 放在前面，后面跟上该帧能容纳的若干思考 token，再进入下 1 帧。因为现代显卡解码很快，1 帧音频时间内除处理实时 token 外还剩一些算力，正好可以用来想。

已有带思考的工作为了保证实时不掉线，通常按某种目标硬件定死每 1 帧放几个思考 token。这样训练和部署用同一个固定速率，位置编码也只需要一个递增计数。另一条并行路线是拆成快慢 2 个模型，一个负责交互、一个在后台想，但论文指出前端仍要同时编排实时音频和与后台通信的离散 token，同样会遇到异步流与变速生成的矛盾。本文要解决的正是单模型内多速率共存的问题，而不是简单加一个后台模型。

### 变速思考为什么会打乱实时音频的位置

论文把每帧能生成的思考 token 数称为思考预算。预算大，同样一段推理占的帧数就少；预算小，推理就会溢出到后面多帧。训练时若只见过某一种预算，模型会把实时 token 之间的位置间隔记住。例如固定预算下，2 帧用户音频之间隔着固定数量的思考 token，位置差就是固定的。

一旦部署时硬件变快或变慢、预算改变，中间思考 token 数量跟着伸缩，用单时钟计数时 2 帧实时 token 的位置差就被任意改变。注意力依赖位置差来判断先后和距离，距离一乱，对齐就错。论文用实验说明这不是小扰动：在中间速率上基线准确率会塌到很低，而实时音频又不能等思考，必须马上发出，这就形成既要稳住通话、又要允许思考快慢不一的矛盾。

**思考流 × 思考预算：** 思考流指模型内部生成链式推理文本 token 的流，它只在需要推理时断续出现，与物理时间无关；思考预算指在一帧音频时间内能额外解码出的思考 token 个数，它由硬件解码速度决定；两者搭配说明思考能走多快完全看预算，预算变化会拉伸或压缩思考在时间轴上的分布。

**单时钟 × 位置距离漂移：** 单时钟指把展平后的所有 token 用一个递增整数做旋转位置编码，位置距离漂移指中间插入的思考 token 数量变化时，相邻两帧实时 token 之间的位置差被任意拉大或缩小；两者搭配解释了基线在变速时失效的机制：模型学到的是固定间隔下的对齐，间隔一变就对不上。

### Rubato 的总体思路：稳住通话，放开思考

Rubato 的名字借自音乐：伴奏保持稳定节拍，旋律在其上自由伸缩。对应到模型，就是实时音频保持稳定的时间推进，思考按硬件允许的速度尽快推进。慢的时候模型说占位话把通话维持住，思考在后面慢慢补；快的时候思考迅速完成，答案提前说出，而开始出声的时间基本不变。

实现上关键是把位置计数拆开。原来所有 token 共用一个计数，现在实时流用一个计数，思考流用另一个计数，各自只在自己的 token 上递增，遇到对方的 token 就暂停。这样无论中间插入多少思考 token，相邻实时 token 的计数差恒定，思考内部的顺序也连续。训练因此只需要做两种极端排版：最慢排版和瞬时排版，中间所有速率都作为零样本插值在部署时直接使用。

下面这张对比图把同一段问题与推理放在不同解码速度下，展示基线拖住音频或浪费算力，而 Rubato 能自适应调整。

> **看图路径：** 1. 先看横轴解码速度从慢到快，同一段思考在时间轴上如何被压缩；2. 对比上一行基线在慢速时拖住实时音频、在快速时浪费算力的示意；3. 看下一行 Rubato 在慢速时用占位语音保持通话、在快速时提前给出答案；4. 注意中间绿色横条标注的只在两端训练、中间全部可用的含义

[![原论文 Figure 1：Comparison between Rubato and prior methods under varying decoding speeds.](https://arxiv.org/html/2610.14299v1/concept_extremes.svg)](https://arxiv.org/html/2610.14299v1/concept_extremes.svg)

*论文图 1。原论文 Figure 1:：“Comparison between Rubato and prior methods under varying decoding speeds.”。*

图 1 的含义是横轴从慢到快表示硬件解码能力，纵向比较两种策略。基线因为时间轴绑死，慢速时实时音频被思考拖住，快速时多余算力用不上。Rubato 在慢速时用占位语音维持首次回应，快速时把给出答案的时间提前。绿色横条强调只在两端训练、中间速率全部零样本适应的主张，这是后文数据构造简化的基础。

### 输入如何展平成帧，时钟如何计数

模型把每 1 帧记为先放 4 个实时 token，再放该帧预算允许的思考 token。帧按顺序拼成一个长序列，模型自回归地逐个预测。记第 f 帧的用户音频、系统音频、用户文本、系统文本和第 k 个思考 token 的排列如下，预算随帧变化时思考段长度也变化。

\[C_{f}=\left[\textsc{ua}_{f},\textsc{sa}_{f},\textsc{ut}_{f},\textsc{st}_{f},\textsc{tt}_{f,1},\dots,\textsc{tt}_{f,\mathcal{B}_{f}}\right]\]

上式中思考预算决定了每 1 帧后面跟几个思考 token。实时 token 优先解码以保证即时性，思考 token 在剩余时间内解码，若一段推理超出当前帧预算就溢出到下 1 帧。

时钟计数的规则是每个位置属于且仅属于一个时钟，实时 4 路属于 0 号钟，思考属于 1 号钟。累计到当前位置为止各钟出现过多少次，再减一得到从零开始的下标。

\[n_{c}(t)=\sum_{u\leq t}\mathbf{1}\big[\kappa(u)=c\big],\qquad p_{c}(t)=\max\big(n_{c}(t)-1,0\big).\]

这样每个 token 携带一个 2 维位置向量，而不是一个标量。例如实时钟在第 f 帧用户音频处恒为 4 乘以帧序号减一，与中间思考多少无关。思考 token 则形成自己连续的序列，不被中间插入的实时帧打断。下面这张位置排布图用 3 token 思考事件展示了单时钟如何拉开实时距离，而双时钟如何保持等距。

> **看图路径：** 1. 对比同一段 3 个思考 token 在三种预算下各占几帧；2. 看单时钟一行实时 token 之间的编号间隔如何被思考 token 撑大；3. 看 Rubato 两行实时钟与思考钟各自只在深色 token 上递增、浅色处暂停

[![原论文 Figure 2：Positional index arrangement for Rubato vs.](https://arxiv.org/html/2610.14299v1/token_arrangement_event.svg)](https://arxiv.org/html/2610.14299v1/token_arrangement_event.svg)

*论文图 2。原论文 Figure 2:：“Positional index arrangement for Rubato vs.”。*

图 2 分 3 组展示预算为 1、介于 1 到 2 之间、以及无穷大时同一事件跨越的帧数。单时钟一行编号连续递增，实时 token 间隔随思考数量变化；Rubato 两行分别显示实时钟与思考钟只在深色归属 token 上推进。这种可视化把公式 4 的暂停含义具体化，是理解后文 3 种旋转实现的前提。

**实时钟 × 思考钟：** 实时钟是只在用户音频、系统音频、用户文本、系统文本上递增的计数，思考钟是只在思考文本上递增的计数；两者搭配让实时 token 之间永远等距、思考 token 内部永远连续，互不干扰，这正是 Rubato 把一条时间轴拆成两条独立时间轴的含义。

### 三种旋转实现如何把时钟送入注意力

有了两套计数，还要把它们变成注意力能用的旋转。背景是旋转位置编码把查询和键在若干 2 维平面上旋转，查询在 m、键在 n 时注意力只与差值有关。Rubato 的 3 种变体都是在此基础上改用哪套计数、切分哪些维度。

最直接的是 Rubato-Split，把旋转维度对半分，一半用实时钟转，一半用思考钟转，查询键对的得分是两部分之和。其形式为每段子空间各自旋转后再点积求和。

\[\displaystyle\big\langle\tilde{{\bm{q}}}_{m},\tilde{{\bm{k}}}_{n}\big\rangle\;=\;\sum_{c=0}^{C-1}\big\langle{\bm{q}}_{m,c},\;{\bm{R}}^{(C)}\big(p_{c}(n)-p_{c}(m)\big)\,{\bm{k}}_{n,c}\big\rangle.\]

这种做法的问题是任何查询键对都被两套钟同时打分。例如两个用户音频之间的注意力本应只看实时距离，却也被思考钟转了一下，中间思考数量不同就引入无关噪声。为此 Rubato-Gated 改为只看键的时钟：若查询键同属一钟就用该钟转对应子空间，若分属不同钟就用键的钟转对应子空间，其余子空间不旋转直接点积。

\[\big\langle\tilde{{\bm{q}}}_{m},\tilde{{\bm{k}}}_{n}\big\rangle=\big\langle{\bm{q}}_{m,c^{\star}},{\bm{R}}^{(C)}\big(p_{c^{\star}}(n)-p_{c^{\star}}(m)\big){\bm{k}}_{n,c^{\star}}\big\rangle+\sum_{c\neq c^{\star}}\big\langle{\bm{q}}_{m,c},{\bm{k}}_{n,c}\big\rangle.\]

Rubato-Full 进一步把选中的那套钟用于全部维度，不再切分维度，从而避免频率分辨率被稀释，也更贴近预训练主干原来的旋转基。

\[\big\langle\tilde{{\bm{q}}}_{m},\tilde{{\bm{k}}}_{n}\big\rangle=\big\langle{\bm{q}}_{m},{\bm{R}}\big(p_{c^{\star}}(n)-p_{c^{\star}}(m)\big){\bm{k}}_{n}\big\rangle.\]

训练时为了能直接调用现成的融合注意力核，论文把查询预先算出所有时钟的旋转并排拼接，键只保留自己时钟的旋转、其余补零，点积自然只留下匹配的一路。推理时则改为维护多套键缓存，每个键按归属时钟旋转后存入对应缓存，查询复制多份分别打分再按对数求和合并，论文报告该实现与单时钟解码速度基本持平。

**Rubato-Full × Rubato-Gated：** Rubato-Gated 是把旋转维度切成两半、只按键 token 所属时钟旋转对应子空间，其余子空间不旋转；Rubato-Full 是每次按键 token 所属时钟用完整维度旋转；两者都遵循只看键的时钟这一规则，区别在于前者保留子空间划分而后者避免频率分辨率被稀释，后文实验显示后者在复杂打断下更稳。

### 只训练两种极端排版如何构造数据

结构解耦后，数据构造不需要枚举每种速度。论文只做两种边界：预算为 1 时，一段长为 l 的思考恰占 l 帧，系统需要说一段占位话把时长撑住，类似人边想边用语气词维持话轮；预算为无穷大时，整段思考塞进 1 帧之内，系统跳过占位直接回答。这两种排版都容易生成，前者时长确定可对齐，后者把推理与钟表时间脱钩。

训练数据来自合成语音。单轮数据基于数学与逻辑文本语料，先用文本模型生成其原生推理链，再用语音合成把问题与答案转成音频，并用识别模型校验，拼接时在用户问完与系统接话之间留自然停顿。重叠数据则随机抽两组问答拼成一次对话，第一问限定为慢速排版以保证系统正在说占位话并思考，第二问的音频恰好叠在该占位段上，迫使模型边说边想边听。重叠集共 161198 段对话，论文给出约 2184 小时。

优化目标是多流交叉熵加权，音频与思考等流权重不同，填充类 token 降权。主干从文本模型初始化，音频嵌入从头训练，文本前端用更小学习率以保持稳定。推理时每帧实时 token 解完后开始解思考 token，直到达到该帧预算或采样到空思考标记为止。

### 评测任务、预算扫描与延迟定义

评测用 Spoken GSM8K 与 BIG-Bench Audio 两类口语数学逻辑任务，以及把两题叠在一起的重叠任务。系统回答先转写再由判分模型对照参考答案判定是否答对，重叠时两问分别计分。除准确率外，还记录首次回应时间与给出答案时间，两者都从用户停说起算，前者是任何系统语音的起点，后者是最终答案语音的起点。

为检验插值能力，训练只见过预算 1 与无穷大，测试则扫六档固定预算 1、2、4、8、16、32 与无穷大上界，外加每帧预算在区间内均匀采样的随机设置并按均值绘制。论文还补充了波动极大的随机区间作为压力测试。硬件层面，论文把不同显卡的带宽换算成理论思考预算，说明 1 到 32 的扫描覆盖了从消费级到数据中心卡的常见范围。

**首次回应时间 × 给出答案时间：** 首次回应时间是从用户停说起算到系统发出任何声音的起点，给出答案时间是从用户停说起算到系统说出最终答案的起点；当系统先说一段占位 filler 再说答案时两者分离，前者反映交互是否及时，后者反映思考是否真正加速，两者搭配才能看出是真的想得更快还是只是先出声。

### 单轮推理在未见预算下能否保持准确并加速

单轮结果要回答的核心问题是：中间速率是否为零样本插值，以及更快硬件能否只缩短给出答案时间而不推迟首次回应。下图展示准确率、给出答案时间、首次回应时间随预算的变化，粗刻度标出训练见过的两端。

> **看图路径：** 1. 先看第一行准确率随思考预算变化时基线是否出现深谷；2. 再看第二行给出答案时间是否随预算增大而下降；3. 看第三行首次回应时间是否基本保持水平；4. 区分实心固定预算点与空心随机预算点，后者按均值绘制

[![原论文 Figure 3：Spoken reasoning performance across varying inference thinking budgets.](https://arxiv.org/html/2610.14299v1/single_overlap.svg)](https://arxiv.org/html/2610.14299v1/single_overlap.svg)

*论文图 3。原论文 Figure 3:：“Spoken reasoning performance across varying inference thinking budgets.”。*

图 3 分上下三行，首行是准确率带 95% 区间，第二行是给出答案时间中位数，第三行是首次回应时间中位数。左侧两列是单轮两套任务，右侧两列是重叠任务的两问。可以看到基线在中间预算出现明显塌陷，而 Rubato 系列随预算增大答案时间单调下降、首次回应保持平稳。重叠列中基线与切分变体在中间段几乎失效，完整变体保持相对平稳，这是后文表格数字的图形来源。

下面两张表把图中的关键数字固定下来，便于复述比较条件与指标方向。准确率越高越好，时间越短越好，比较都在同一合成语音与同一判分流程下进行。

| 条件 | 指标 | Single-Clock 基线 | Rubato-Full | 适用说明 |
| --- | --- | --- | --- | --- |
| Spoken GSM8K 插值速率 | 准确率 | 1.7% | 48.7% to 51.1% | 中间未见预算，基线塌陷，Full 保持 |
| 全速率给出答案时间 | 时间变化 | 基线随速率不稳 | 6.5 次缩短且首次回应不变 | 更快硬件只提前答案，不推迟出声 |
| Spoken GSM8K 端点到插值最大跌落 | 跌落点数 | 45.0 | 0.6 | 跌落越小插值越稳 |
| BIG-Bench 相对 Gated 优势 | 准确率差 | 基准为 Gated | 6.3 to 12.2 points | Full 保留完整频率基的收益 |

表 1 比较的是单轮口语推理在训练两端之外的插值表现。公平条件是所有模型都只在预算 1 与无穷大上训练，测试覆盖中间固定与随机预算。结果显示基线在 Spoken GSM8K 中间速率跌至 1.7%，而 Rubato-Full 维持在 48.7% 到 51.1% 之间，并把给出答案时间缩至约 6.5 分之一且首次回应不变。限制是这些数字依赖合成语音与转写判分，若换真实噪声或不同判分器，绝对值会变，但插值是否塌陷的相对趋势仍由位置机制决定。

| 条件 | 指标 | Single-Clock | Rubato-Split | Rubato-Gated | Rubato-Full |
| --- | --- | --- | --- | --- | --- |
| Spoken GSM8K 最大跌落 | 点数 | 45.0 | 10.6 | 1.1 | 0.6 |
| BIG-Bench 领先幅度 | 点数 | 未给出稳态 | 未给出稳态 | 基准 | 6.3 to 12.2 points |
| 音频占位质量 | 趋势 | 插值已失效不评 | 随插值明显下降 | 保持稳定 | 保持稳定 |
| 推理延迟 | 方向 | 不稳 | 下降 | 下降 | 下降且更快 |
| 首次回应 | 方向 | 不稳 | 基本稳定 | 基本稳定 | 基本稳定 |

表 2 比较的是 3 种 Rubato 实现之间的差异，列数用于并排展示同一指标下的不同时钟构造。比较问题是切分维度与按鍵选择是否引入噪声。结果是 Split 仍有 10.6 点的最大跌落且占位语音质量下降，Gated 与 Full 跌落仅 1.1 与 0.6 点，而 Full 在 BIG-Bench 上再领先 Gated 约 6.3 到 12.2 点。论文将其解释为消除跨钟污染与避免频率稀释的作用。限制是占位质量只在预算 1 到 4 内可可靠打分，更高预算下占位太短无法评分，因此该结论只在短占位可测范围内成立。

> **看图路径：** 1. 看左侧与中间两组占位语音质量随预算从 1 到 4 的变化；2. 对比 Rubato-Split 曲线是否明显下探；3. 看 Rubato-Gated 与 Rubato-Full 是否贴近原始真值虚线

[![原论文 Figure 4：Spoken-filler quality across thinking budgets.](https://arxiv.org/html/2610.14299v1/filler_scores.svg)](https://arxiv.org/html/2610.14299v1/filler_scores.svg)

*论文图 4。原论文 Figure 4:：“Spoken-filler quality across thinking budgets.”。*

图 4 专门看占位段的语音质量，左侧两列为自然度分数，右侧两列为说话人相似度，虚线为真值参考。可以看到 Split 随预算插值明显偏离，而 Gated 与 Full 贴近真值。这说明准确率高不等于音频无损，时钟噪声会先污染声学细节，这也是论文保留声学指标的原因。

### 边说边听的打断场景下差距是否更大

重叠任务要回答的是模型能否在说第一题答案并思考的同时听进第二题。此时输入、输出、思考 3 路真正并行，对时钟构造更敏感。论文报告第一问准确率普遍高于第二问，说明在回答中吸收新问题本身更难。

| 条件 | 指标 | Single-Clock 与 Split | Rubato-Gated | Rubato-Full | 限制说明 |
| --- | --- | --- | --- | --- | --- |
| 重叠预算 2 到 4 | 准确率 | 1 to 14% | 低于 Full 较多 | 40.0% to 45.1% | 基线在打断下完全失效 |
| 第一问到第二问平均跌落 | 点数 | 无法稳定比较 | 15.6-point drop | 7.8 points | 只在可插值存活的架构间比较 |
| 预算 1 到 32 答案时间 | 倍数 | 不稳 | 下降 | factor of six | 中位数延迟，非每样本保证 |
| 单轮两变体差距 | 点数 | 不适用 | 基准 | 1.6 points | 单轮差距小，重叠放大 |
| 重叠两变体差距 | 倍数关系 | 不适用 | 基准 | 约 5 到 10 倍放大 | 说明重叠放大构造差异 |

表 3 比较的是重叠对话中两问分别计分的结果。公平条件是第一问固定用慢速排版以制造边说边想，第二问叠在占位段上，所有方法面对同一时间重叠。结果是基线与 Split 在预算 2 到 4 附近仅 1% 到 14% 答对，而 Rubato-Full 在所有未见速率上对打断问题的准确率保持在 40.0% 到 45.1% 之间；从第一问到第二问，Full 平均只掉 7.8 点，Gated 掉 15.6 点；Full 把两问的答案时间中位数从预算 1 到 32 缩短约 6 倍。限制是重叠数据仍是合成拼接的双问，真实打断的语速、重叠比例与轮次更复杂，数字不宜直接推广到真实客服打断。

论文还给出预算 8 这一未训练速率的逐例展示：基线思考中途出现算术错乱且 long 时间沉默后才回答，Split 与 Gated 推理链看似干净但算术仍错，只有 Full 在思考与说话并行时算出正确值。这些例子标为教学例子，不能当作统计证据，统计结论仍以图 3 的区间与中位数为准。

### 训练中慢速样本比例与极端抖动是否影响结论

消融要回答两个实际问题：慢速排版需要合成占位音频、成本更高，能否少用；以及每帧预算剧烈抖动时结论是否还成立。论文把预算 1 样本占比从约 43.9% 一路降到 0.4% 训练多版语料，并在每帧预算 1 到 16 均匀抖动的压力设置下复测。

| 条件 | 指标 | Rubato-Gated 跨比例波动 | Rubato-Full 跨比例波动 | 压力预算表现 | 成本含义 |
| --- | --- | --- | --- | --- | --- |
| 预算 1 处准确率范围 | 准确率 | 20.5% and 52.7% | 41.6% to 53.7% | 趋势与主结果一致 | Full 对比例更不敏感 |
| 极低占比 0.4% 行为 | 时间 | 1.6s flatline | 保持随预算下降 | Full 仍最稳 | Gated 过早结束思考直接作答 |
| 中间占比表现 | 准确率 | 非单调 | 4.4% 可接近 43.9% | 抖动下仍分层 | 均衡混合最稳妥 |
| 重叠与单轮一致性 | 方向 | 波动大 | 保持 | 保持 | 结论限于所测 5 种配比 |
| 部署含义 | 建议 | 需足量慢速样本 | 可更省但仍建议均衡 | 覆盖真实波动 | 节省需以验证为前提 |

表 4 比较的是不同慢速样本占比下的稳定性。比较问题是在总语料不变时减少昂贵的慢速排版是否可行。结果是 Full 在预算 1 处的准确率只在 41.6% 到 53.7% 之间波动，而 Gated 在 20.5% 到 52.7% 之间大幅波动；占比极低时 Gated 的答案时间在各预算下平坦在约 1.6 秒，表明其提前放弃思考。论文指出 4.4% 占比的 Full 可接近 43.9% 的表现，但中间占比反而更差且在预算 4 以上快速衰减，因此总体仍建议均衡混合。限制是该消融只在所给 5 种配比与合成语音下验证，换主干或换合成器后最优配比可能变化。

压力测试中每帧预算在 1 到 16 之间剧烈抖动，论文称趋势与主结果一致，Full 仍是最稳的变体。这支持时钟解耦对帧级波动的鲁棒性，但论文也说明这种剧烈抖动在真实部署中少见，实际意义更多是结构验证而非性能承诺。

### 这些结论在什么条件下才成立

首先是语音来源。论文明确因缺乏带时间对齐推理链的真实全双工对话数据，全部使用合成语音。合成与真实在声学、停顿、重叠风格上都有差距。论文主张时钟解耦作用于时间对齐而非声学特征，因此结构收益应能迁移，但这仍是推测，未在真实录音上验证。

其次是任务与流数范围。验证限于 4 路实时流加一路链式思考，推理任务是数学与逻辑问答。框架理论上可扩展到任意多时钟与工具调用等场景，但工具 token 与更多模态并未实测，不能默认同样稳定。

最后是架构与编码器固定。所有结果基于同一文本主干与 12.5 赫兹音频编码器、双时钟配置。固定变量有助于 isolate 时间框架的影响，但换主干、换帧率或增加时钟数后，频率基适配与缓存开销需重新测量。论文附录给出了解码速度与不同显卡预算的估算，说明 1 到 32 的扫描有现实覆盖，但那是基于带宽的理论换算，不是端到端实测延迟。

### 复现第一步要准备什么

复现应从数据排版开始，而不是先调模型。先按论文方法准备两端语料：慢速端为每段推理生成等长占位语音并保留自然接话间隔，瞬时端把整段推理放在 1 帧内并直接回答。用同一文本主干生成原生推理链并校验逻辑正确性，再合成音频并用识别模型校验，最后按帧交织成先实时后思考的序列，空思考位置用空标记填充。

模型侧需要实现双时钟计数与按鍵选择旋转。训练可用查询拼接加键补零的技巧复用现有融合注意力核，推理则实现多套键缓存与按对数求和合并，并验证与训练路径数学等价。评测要固定转写与判分流程，分别记录准确率、首次回应与答案时间的中位数与区间，并在固定与随机预算上扫描。关于资源是否公开，本文依据的证据中未发现经校验可用的作者代码、模型或数据链接，因此应按无公开资源来规划复现，不能假设下载即用。

### 什么时候值得尝试，还缺哪项验证

当部署硬件多样、同一模型要在不同显卡或负载下运行，且需要边说话边思考时，解耦时钟值得尝试。它把数据准备从枚举每种速度简化为只做两端，部署时按实际算力自适应。尤其在有打断的对话中，完整维度按鍵旋转的变体在论文中显示出更大的优势。

若只是单轮、无需实时出声的离线推理，或硬件完全固定且已按固定预算充分优化，引入双时钟的收益可能有限，还需承担多缓存实现与验证成本。复现第一步是先跑通两端排版与双时钟注意力等价性检查，再做小规模预算扫描看是否出现基线塌陷与 Full 稳定。

仍需补的验证包括真实人声与真实打断下的表现、更多时钟与工具流的扩展、以及在不同主干与帧率下的延迟实测。只有补上这些，才能把合成数据上的插值稳健性推广为产品级的延迟承诺。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.14299v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
