---
title: "HiPLEX: Hierarchical Policy Factorization for Full Duplex Speech Language Models"
date: 2026-10-11
draft: false
tags: [全双工语音交互, 语音对话系统, 强化学习, 语音大模型]
categories: [论文速递]
description: "HiPLEX 把全双工语音的文本策略拆为何时发射的控制因子和说什么的条件内容因子，再用事件因果掩码分送信令与语义反馈，在 Moshi 上改善了暂停与 backchannel 克制和打断后延迟，但结论只在相同评测协议与奖励配比下成立且伴随学习率敏感性。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.07727"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "HiPLEX：全双工语音何时说与说什么的分层信用分配"
paper_digest_original_title: "HiPLEX: Hierarchical Policy Factorization for Full Duplex Speech Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.07727v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.07727v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.07727v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"model_family","id":"model_family.speech","label":"语音大模型"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "HiPLEX 把全双工语音的文本策略拆为何时发射的控制因子和说什么的条件内容因子，再用事件因果掩码分送信令与语义反馈，在 Moshi 上改善了暂停与 backchannel 克制和打断后延迟，但结论只在相同评测协议与奖励配比下成立且伴随学习率敏感性。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kyudan Jung"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hyunsin Park"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yoonhyung Lee"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinhwan Park"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinhyeok Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"KiHyun Nam"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jaegul Choo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinkyu Lee"}]
paper_digest_abstract_sha256: "b5efce566f7283faa4d1216b87d6bc1176b8717d4f9fe2f20886c7632f2159a6"
paper_digest_sidecars: {"citation.bib":{"sha256":"5370f99b801a22ee97a87944926e564c3fed8537a3814272eb84b1a022d6ce45","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07727/citation.bib"},"citation.json":{"sha256":"6e5fffdae5b9426802902b72e3c8ed34e0a75cc54dfccef4c68b382a006e6c18","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07727/citation.json"},"citation.ris":{"sha256":"42365a8ce50f352bf64f911c8b6e9a20cbfd292abb0d8a339e301ff6f2c72403","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07727/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"4d4b40acd9543fda5ec67e6309ea41ebbd641f13457d76b204ecd1cb61c434d7","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07727/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "cef6d7d8f314798bd5571919d02b37f8f7469fffea69f696286b0f3e25fdcb41"
paper_digest_api_reader_plan_sha256: "9688bbc2c99a9c0ca7427de53150ec30ae718a4cf129d6c424a182ce9086a5a4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "eb4c73134296adeb36eab05403d5acbc93ce16b603dae8539fc9ca301565cf13"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "19c0507789705a181eaadefb68a5bd7e4e1caa89af47a8a58529e23a4da11591"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "683ffbd99cb04d2555b779af931c5ff8ba43a3cf3164364102fc80c22b9e6413"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8f074c817b625b062328789956c8cb2fc6dd779a24852372e25502f40bac1718"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 HiPLEX：全双工语音何时说与说什么的分层信用分配

> 英文题目：*[HiPLEX: Hierarchical Policy Factorization for Full Duplex Speech Language Models](https://arxiv.org/abs/2610.07727v1)*

> 标签：#全双工语音交互 | #语音对话系统 | #强化学习 | #语音大模型
>
> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Kyudan Jung：机构信息未在 arXiv HTML 中可靠披露
- Hyunsin Park：机构信息未在 arXiv HTML 中可靠披露
- Yoonhyung Lee：机构信息未在 arXiv HTML 中可靠披露
- Jinhwan Park：机构信息未在 arXiv HTML 中可靠披露
- Jinhyeok Yang：机构信息未在 arXiv HTML 中可靠披露
- KiHyun Nam：机构信息未在 arXiv HTML 中可靠披露
- Jaegul Choo：机构信息未在 arXiv HTML 中可靠披露
- Jinkyu Lee：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

全双工语音语言模型需要在连续听取用户语音的同时流式生成自身语音，输入是双通道音频历史与已生成文本，输出是下一帧是否发声以及发声时的具体词元，难点是迟答、抢话、误打断与中断后恢复都发生在不同时间位置。HiPLEX先把已有文本分布按词表划分分解为控制策略和条件内容策略，控制策略输出`pad`、`epad`、`cont`三组概率，决定继续等待还是进入发声。只有当控制策略选中`cont`时，条件内容策略才输出具体内容词元分布，从而把何时说的时机选择与说什么的内容选择分开执行。随后时机奖励经组内标准化后通过事件因果掩码只更新控制决策，语义奖励由自动语音识别（Automatic Speech Recognition）转写加Gemini 2.5 Flash-Lite打分后只更新内容决策，使两类反馈各有归属而不互相干扰。在Full-Duplex-Bench v1上，Moshi加HiPLEX相对复现的组相对策略优化（Group Relative Policy Optimization，GRPO）基线把CANDOR停顿接管率从0.454降到0.306。在同一基准与基线比较下，中断后响应延迟从0.660 s降到0.439 s，三个训练种子平均仍保持相近趋势。结论适用于Moshi与PersonaPlex的受控复现协议，不等同于所有对话场景都更自然，PersonaPlex的官方轮次接管率与延迟变化需要配合边界后词活动阅读。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工对话要同时解决说什么和何时说

全双工语音交互的输入是连续进来的用户音频、模型自己过去的音频、过去的文本流以及可选的角色或音色提示，输出是同样按帧流式生成的模型音频和与之对齐的内心独白文本。目标不只是把一句话说对，还包括轮次交接、用户犹豫时保持沉默、适时给出不抢话筒的短应答、被打断时让出并在打断结束后重入。论文把这 4 种行为分成轮次承接、暂停处理、backchannel、打断处理 4 类训练窗口，每类窗口都标注了事件时刻或区间。

必须保留的信息是音频里实际何时出声，因为文本流里大量填充词并不等于声学沉默。评价时既看是否在正确时机出声或沉默，也看打断后回应的内容质量。读者可以把任务理解为在 12.5 赫兹即每 80 毫秒 1 帧的时钟上，连续决定现在是听还是说，以及说了之后具体说哪个词。

### 已有全双工强化学习为何把时机和内容分开

Moshi 把内心独白文本流和流式音频放在同一时钟上生成，PersonaPlex 在同一骨干上加了提示控制的角色与音色，这是论文 assumed 的建模底座，改的是强化学习目标而非结构。已有路线大致有两支，一支把动作投影成发声与否的二元状态，另一支如 DuplexPO 只在标注事件周围固定动力学关键窗口内用分组相对策略优化做纯时机奖励，刻意把语义排除在外。

论文指出两个结构问题，第一是固定窗口把一个优势广播给窗口内所有词元，迟到回应的等待帧和及时回应的起始帧本应得不同信用，错放信用会把时机推错方向。第二是内容被排除在奖励之外并不等于被保护，时机奖励仍会流经同一个选词策略，论文报告只做时机训练会让评判质量下降。分层智能体文献中 HiPER 按子目标段对齐优势的思想被借鉴，但 HiPLEX 的分层不是学出来的选项或管理者网络，而是从预训练文本头的词表划分中直接读出来的条件分层。

### 论文要修复的信用分配问题是什么

论文把问题定义为分层信用分配。同一条生成轨迹里，高层决策是每帧是否调用内容发射，低层决策是调用时选哪个内容词。如果用扁平的词元策略梯度，一个时机分数会乘到所有被选词元的对数概率上，等待太久的惩罚可能打到终于开口的那一下，成功开头的奖励也可能顺带奖励了之前的等待。更麻烦的是内容词的梯度同时受时机和语义影响，时机变好可能以重复和漂移为代价。

论文因此要求奖励分解后分路，一路管何时发射，一路管发射什么，并且每一路只更新自己能直接控制的决策。输入处理上，模型先用 Silero VAD 从生成音频中抽语音段，再把间隔至多 1 秒的段合并成语音片段，超过 1 秒为持续片段，不超过 1 秒为短片段，分别用于识别轮次与重入起始和 backchannel 候选。代价是整套流程依赖 VAD 与合并阈值，以及事后固定的掩码构造，VAD 误差会传导到奖励和信用位置。

### HiPLEX 的整体流程是怎样的

HiPLEX 的训练循环可以按 1 次迭代理解。先采样一个带标注事件的交互窗口，用当前采样策略流式采一组共享用户上下文的 rollout，每帧记录组标签和内容词。接着解码生成音频并抽取语音片段，然后对该窗口所属交互类型的每个 timing 分量分别组内标准化，对语义打分也单独组内标准化。再用事件因果掩码把 timing 优势只放到控制决策上，把语义优势只放到内容词决策上，最后对两个因子分别算重要性比率并做裁剪损失，加上各自的参考模型正则后更新同一套主干参数。

两个因子来自同一个预训练头，不新增参数，但更新频率不同，掩码选中的帧约占扁平更新的 20 至 30%，因此学习率要分别调。下面的示意图先展示这种上下分工，例子只是帮助理解分工，数值以正文公式为准。

读图说明：这张结构图只有 3 个方框，但它规定了后文所有损失的分母与分子分别来自哪里，值得先停留半分钟看清上下关系。

> **看图路径：** 1. 先看顶层方框确认输入是全双工语音语言模型；2. 再看中层控制策略框列出的三组标签；3. 最后看底层内容策略框的条件概率写法

[![原论文 Figure 2：Hierarchical policy factorization in HiPLEX.](https://arxiv.org/html/2610.07727v1/fig1.svg)](https://arxiv.org/html/2610.07727v1/fig1.svg)

*论文图 2。原论文 Figure 2:：“Hierarchical policy factorization in HiPLEX.”。*

该图自上而下是全双工语音语言模型、管时机的控制策略、管语义的内容策略。控制策略框注明在 pad、epad、cont 之间选择，内容策略框注明词概率等于选 cont 的概率乘以给定 cont 时的条件词概率。这说明后文的两个损失不是两个网络，而是同一分布的两种看法，梯度最终都会回到同一套参数。

### 控制因子和内容因子如何从同一文本头算出

词汇表被分成 3 组，pad 自成一组，epad 自成一组，其余内容词合称 cont 组。记每帧原始文本 logit 除以文本采样温度 0.7 之后为构造分布的依据。控制因子先对每组内做对数求和指数得到组分，再在 3 组之间做 softmax，内容因子则是在 cont 组内做条件 softmax。对于内容词，两个因子相乘恰好还原该词在温度缩放后文本分布中的概率，对于 pad 和 epad，控制概率本身就等于词概率。附录用数值校验说明重构误差只到浮点舍入量级，但这只是恒等式，不等于分别裁剪后的目标等价于分组相对策略优化，因为内容词的完整重要性比率是两个因子比率的乘积，掩码、归一、裁剪和正则也都分开。

**控制策略 × 条件内容策略：** 控制策略指每帧在 pad、epad、cont 三组之间选一组的高层决策，管是否和何时调用内容发射；条件内容策略指只在选中 cont 时在内容词表内选具体词的低层决策，管说什么。两者搭配是因为 Moshi 式文本流里单个词不能可靠指示是否在说话，必须先判断发射意图再评价词义，组合后 timing 反馈只改发射概率，语义反馈只改词条件概率。

先看控制因子的组概率构造，它把组内所有内容词的支持汇成一个发射意图分。

\[g_{t}(c)=\log\!\!\sum_{v\in\mathcal{V}_{c}}\!\exp\ell_{t}(v),\qquad\pi_{\theta}^{\mathrm{ctrl}}(c_{t}\!=\!c\mid s_{t})=\mathrm{softmax}(g_{t})_{c},\quad c\in\{\mathtt{pad},\mathtt{epad},\mathtt{cont}\}.\]

上式中 g 是组分，pi_ctrl 是控制策略，c 取 pad、epad、cont。接着看选中 cont 后具体选词的条件分布。

\[\pi_{\theta}^{\mathtt{cont}}(w_{t}\!=\!v\mid s_{t},c_{t}\!=\!\mathtt{cont})=\frac{\exp\ell_{t}(v)}{\sum_{u\in\mathcal{V}_{\mathtt{cont}}}\exp\ell_{t}(u)},\qquad v\in\mathcal{V}_{\mathtt{cont}}.\]

上式分母只在 cont 组内归一。最后看两者相乘还原词概率的关系。

\[\pi_{\theta}(w_{t}=v\mid s_{t})=\pi_{\theta}^{\mathrm{ctrl}}(c_{t}=\mathtt{cont}\mid s_{t})\pi_{\theta}^{\mathtt{cont}}(w_{t}=v\mid s_{t},c_{t}=\mathtt{cont}).\]

该式说明为何可以用同一套 logit 同时谈时机与内容，但也埋下后文的提醒，两个损失更新同一主干，名义分路不保证行为独立。

### 时机分数与语义分数各自如何归一与落位

每个标注窗口只用其交互类型对应的分量，轮次用起始、延迟、早说三项，暂停用持续入侵与语音占比两项，backchannel 用匹配、时间接近、漏检、误报、过长五项，打断用让出、重入起始、重入延迟三项。以轮次为例，起始分用高斯峰加指数尾鼓励贴近用户轮次结束，延迟分随等待占剩余窗口比例线性下降，早说按边界前语音占比惩罚，缺失回应给固定负分。

所有 timing 分量先各自在同组 rollout 内标准化，不同量纲的分量因此可比，常数分量优势为零，特定稀疏失败分量在全组失败时会被替换为固定负值。语义分是把用户上下文与生成语音都用 Parakeet 转写，再请 Gemini 按 0 至 2 打相关与连贯分，同样只在同组内标准化。落位规则是 timing 优势乘事件因果掩码后加权求和给控制策略，语义优势只在生成内容词的帧给条件内容策略。

**组相对优势 × 事件因果掩码：** 组相对优势指同一交互窗口内采多条 rollout，对每个奖励分量做组内均值方差标准化得到的分数，解决量纲不同和窗口难度不同；事件因果掩码指根据生成语音片段、标注事件时间和优势符号选出应得该分数的帧。两者搭配是先算出这条 rollout 相对同组好坏，再只把好坏放到能直接造成该结果的等待、起始、延续或停止帧上，避免固定窗口把所有帧一起奖惩。

下面的训练示意图把这种分路画得很直观，左侧是语义只走内容词，右侧是 timing 只走控制帧，每格代表 80 毫秒。

### 训练时优势如何计算并只更新被选中的决策

组相对优势的计算对象是分量分数而非词元。对同一窗口的 G 条 rollout，记第 i 条在分量 k 上的原始分为 r，组均值与总体标准差算出后相除，分母下限为 1e-8。语义分同理，只是来源是语言模型评判的 0 至 2 整数。得到优势后，控制侧优势是各分量加权优势与各自二值掩码乘积之和，内容侧优势是语义优势乘以是否为 cont 帧的指示。

掩码规则与符号有关，及时起始的正优势只加强起始附近 80 毫秒，迟到的负优势只惩罚起始前的等待而不惩罚终于开口的那一下，打断中发声惩罚重叠语音，让出成功的正优势加强打断区间内的沉默，backchannel 的漏检惩罚机会窗、误报惩罚窗外片段、过长只惩罚超 1 秒之后的部分。优化用裁剪损失，每个因子按自己被选中的决策数归一，另加控制与加权内容两项参考模型散度正则。

**持续语音片段 × 短语音片段：** 持续语音片段指经 Silero VAD 提取并按至多 1 秒间隔合并后时长超过 1 秒的片段，被当作轮次式发言；短语音片段指时长不超过 1 秒的片段，被当作 backchannel 式应答候选。两者搭配是因为奖励要区分抢话筒和只应一声，掩码也要对持续片段的起始计时、对短片段的匹配计时，组合后才能把轮次、暂停、backchannel、打断让出四类窗口分开计分。

先看组内标准化的目标，它不是把原始奖励直接相加，而是先各自消除量纲再加权。

\[A_{i}^{(k)}=\frac{r_{i}^{(k)}-\bar{r}^{(k)}}{\max(s_{r}^{(k)},\delta)},\qquad i=1,\ldots,G.\]

上式中 A 为分量优势，G 为同窗口组大小。再看控制侧如何把多个分量在同一帧叠加。

\[A_{t}^{\mathrm{ctrl}}=\sum_{k}w_{k}A^{(k)}\,M^{(k)}_{t}.\]

上式中 w 为分量权重，M 为事件因果掩码，多分量选中同一帧时符号相加。重要性比率与损失都分因子计算，内容比率只在 cont 帧求值。训练更新全部模型参数，单阶段完成。

读图说明：这张信用分配图左侧与右侧分别对应语义与时机两条通路，中间用用户与智能体波形示例说明迟到与及时的不同处理，建议对照掩码颜色看加号与减号的位置。

> **看图路径：** 1. 先看左侧语义分支从转写到组内归一再到只更新内容词的箭头；2. 再看右侧四类 timing 分量各自独立归一的方框；3. 最后对比及时与迟到两种情形下加号与减号落在等待还是起始帧

[![原论文 Figure 1：Timing and semantic credit assignment in HiPLEX.](https://arxiv.org/html/2610.07727v1/fig2.png)](https://arxiv.org/html/2610.07727v1/fig2.png)

*论文图 1。原论文 Figure 1:：“Timing and semantic credit assignment in HiPLEX.”。*

图中左侧显示语义分经组内归一后只作用于内容词，右侧显示 4 类 timing 分量各自归一后经掩码作用于控制决策。迟到但内容好的例子惩罚等待区间同时加强语义，及时但内容差的例子加强起始同时惩罚语义。这正是分路要实现的效果，时机好坏不直接改选词分布，内容好坏不直接改发射时机。

### 模型、数据与评测条件如何保证可比

底座是 Moshi 与在其上加角色与音色提示的 PersonaPlex，训练与评测固定同一骨干以便差异来自目标。训练数据是 Seamless Interaction 语料中只保留对话类交互的过滤子集，约 73,561 个标注窗口，4 类行为大致均衡，训练与验证按对话切分。基线是同骨干复现的分组相对策略优化方法，以及论文作者已发布检查点的评测作为校准参照，不当训练基线。评测用 Full-Duplex-Bench v1，遵循从零时刻实时播放的流式协议，不改静音，打断延迟从用户打断结束算到模型回应开始并在零处截断，回应质量用冻结 ASR 转写后请 gpt-4o-2024-08-06 打分。

官方指标方向是暂停与 backchannel 接管率越低越好，轮次与打断接管率越高越好，延迟越低越好，质量越高越好。论文还指出合成暂停与官方轮次指标在复现协议下区分度有限，因此同时报告自然 CANDOR 暂停、边界后词活动与人类 timing 分布距离作为补充。训练配置上 Moshi 用学习率 4e-6，PersonaPlex 用 2e-6 并调整轴混合与权重，组大小 16，每轮 32 组，共 100 轮。

### 主结果在 Moshi 与 PersonaPlex 上分别说明什么

主结果表比较同一家族内的基座、复现的分组相对优化与 HiPLEX，训练行是种子 42 的终点检查点，3 种子均值在附录另表报告。比较问题是在相同骨干与相同评测协议下，分层分路是否同时改善克制与重入而不牺牲条件质量，指标方向按上节所述，接管率低为克制好，延迟低为重入快，质量高为内容好。官方平滑轮次接管率在 Moshi 上接近饱和，合成暂停也因开场问候与短片段位置而区分度弱，因此论文更强调 CANDOR 暂停与 backchannel 接管率。

|  | Pause | Pause | Backchannel | Backchannel | Backchannel | Smooth Turn Taking | Smooth Turn Taking | User Interruption | User Interruption | User Interruption |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Syn TOR∗↓{}^{*}\downarrow | Candor TOR↓\downarrow | TOR↓\downarrow | Freq↑\uparrow | JSD↓\downarrow | TOR↑\uparrow | Latency↓\downarrow | TOR↑\uparrow | Judge↑\uparrow | Latency↓\downarrow |
| Moshi (Défossez et al., 2024) | 0.416 | 0.579 | 0.473 | 0.126 | 0.724 | 0.387 | 0.000 | 0.772 | 3.773 | 0.852 |
| + GRPO | 1.000 | 0.454 | 0.309 | 0.110 | 0.737 | 0.992 | 0.000 | 0.955 | 3.942 | 0.660 |
| + HiPLEX | 1.000 | 0.306 | 0.127 | 0.134 | 0.734 | 1.000 | 0.000 | 0.960 | 4.083 | 0.439 |
| PersonaPlex (Roy et al., 2026) | 0.847 | 0.426 | 0.218 | 0.103 | 0.755 | 0.882 | 0.000 | 0.945 | 2.693 | 0.712 |
| + GRPO | 0.876 | 0.444 | 0.236 | 0.107 | 0.746 | 0.882 | 0.000 | 0.956 | 2.712 | 0.548 |
| + HiPLEX | 0.715 | 0.218 | 0.018 | 0.106 | 0.769 | 0.714 | 0.002 | 0.975 | 2.938 | 0.590 |
| Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) | Reference numbers for the same RL recipe (Ohashi et al., 2026) |
| Moshi + RL, as reported | 0.307 | 0.463 | 0.145 | 0.101 | 0.794 | 0.958 | 0.160 | 1.000 | 3.630 | 0.409 |
| Moshi + RL, released checkpoint | 1.000 | 0.597 | 0.255 | 0.157 | 0.711 | 0.992 | 0.000 | 0.955 | 3.984 | 0.530 |
| PersonaPlex + RL, as reported | 0.350 | 0.356 | 0.073 | 0.112 | 0.786 | 0.975 | 0.086 | 0.995 | 4.533 | 0.223 |
| PersonaPlex + RL, released checkpoint | 0.818 | 0.384 | 0.145 | 0.178 | 0.730 | 0.849 | 0.001 | 0.995 | 3.427 | 0.534 |

该表显示 Moshi 上 HiPLEX 的 CANDOR 暂停接管率与 backchannel 接管率低于复现的分组优化，打断后延迟更短，打断后评判质量相当。PersonaPlex 上 HiPLEX 同样降低两类克制指标，但官方轮次接管率更低、打断后延迟更长，补充诊断显示其边界后词活动更多、首词偏移中位数更短、边界前早说更少，说明官方单指标遮蔽了边界前后行为的再平衡。限制是这些都是固定检查点在固定片段集上的结果，配对自助区间只刻画片段抽样不确定性，不代表多次训练的波动，且下半块已发布检查点只是校准参照。

**打断后延迟 × 打断后评判质量：** 打断后延迟指从用户打断结束到模型重新开始回应的时间，越小表示重入越快；打断后评判质量指只在检测到合格回应片段时由 gpt-4o-2024-08-06 对转写文本打的相关性分数，越高表示内容更切题。两者搭配是因为只看质量会漏掉大量沉默样本，只看延迟会漏掉答非所问，论文因此把两者并列报告，强调条件质量必须和回应率一起读。

下图把 Moshi 家族的犹豫与完整轮次权衡、克制与质量权衡画成散点，横轴都是 CANDOR 暂停接管率，越左越克制。

读图说明：左图纵轴越高表示轮次结束后仍有合格词活动，右图纵轴越高表示打断后内容质量越高，两图都希望点落在左上，阅读时先定横轴再看纵轴。

> **看图路径：** 1. 先看横轴都是 CANDOR 暂停接管率，越左越克制；2. 再看左图纵轴是边界后词活动，右图纵轴是回应质量；3. 最后对比星形 HiPLEX 与圆形 GRPO 的相对位置

[![原论文 Figure 3：Moshi family on Full-Duplex-Bench v1.](https://arxiv.org/html/2610.07727v1/fig_frontier.png)](https://arxiv.org/html/2610.07727v1/fig_frontier.png)

*论文图 3。原论文 Figure 3:：“Moshi family on Full-Duplex-Bench v1.”。*

可见 HiPLEX 星形落在最左上，兼顾更强的暂停克制与更高的边界后词活动，右图在同等克制下质量也不低于分组优化。但图注提醒边界后词活动可能包含边界前已开始的延续，不能单独解读为新发起回应率，质量也是以有合格回应为条件的分数，必须和回应率一起读。

### 与人类 timing 分布的距离补充了什么判断

官方分多问事件是否发生，而人类时机是分布。论文因此算模型与混合 Seamless 与 Fisher 边缘分布之间的 1 维 Wasserstein-1 距离，越小越接近人类，缺席轮次按 6 秒封顶以免沉默占便宜，无语音的 backchannel 片段按零速率计入。比较问题是二值规则通过者是否仍系统性偏晚或偏频，公平条件是模型侧分布来自已生成的基准输出，人类侧来自固定种子抽样的混合语料，合并间隔统一按至多 1 秒。

| Model | Turn taking ↓\downarrow | Backchannel rate ↓\downarrow | Backchannel length ↓\downarrow | Pause intrusion ↓\downarrow |
| --- | --- | --- | --- | --- |
| Moshi | 4.698 | 1.798 | 0.292 | 0.068 |
| + GRPO | 1.781 | 1.512 | 0.266 | 0.012 |
| + HiPLEX | 0.902 | 0.327 | 0.238 | 0.080 |
| PersonaPlex | 3.551 | 1.738 | 0.080 | 0.088 |
| + GRPO | 3.511 | 1.652 | 0.054 | 0.109 |
| + HiPLEX | 2.627 | 1.187 | 0.168 | 0.091 |

该表显示 Moshi 上 HiPLEX 在轮次时机、backchannel 频率与长度三项距离最小，分组优化只在暂停入侵距离最小，原因是它几乎总在犹豫时沉默，而人类入侵率小但非零。PersonaPlex 上 HiPLEX 在轮次与频率上更接近人类，长度与暂停上则不是。限制是这只是边缘分布比较，未比较联合或条件分布，也未纳入打断让出边际，因为评测输出中没有在打断瞬间仍占话筒的样本。结合主结果看，HiPLEX 更接近人类轮次与应答频率，但不能据此宣称整体自然度最高。

**暂停接管率 × 轮次后词活动：** 暂停接管率指在用户犹豫暂停窗口内模型出现长语音即算抢话的比例，越低表示克制越好；轮次后词活动指用 ASR 词时间戳统计在标注轮次结束之后仍满足时长或词数条件的词活动率，是对官方轮次接管率的补充诊断。两者搭配是因为官方轮次分只问整段是否说过话，会把边界前早说也算成功，组合后才能同时看到边界前克制和边界后是否有词。

### 语义反馈拿掉后时机与质量如何变化

消融问题是语义奖励是否只改内容还是连带改善时机，条件是同一方法、同样 100 轮、同样 0 至 2 量表，只开关语义项。指标方向与主表一致，质量越高越好，接管与延迟越低越好。

|  | Pause | Pause | Backchannel | Backchannel | Backchannel | Smooth Turn Taking | Smooth Turn Taking | User Interruption | User Interruption | User Interruption |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Syn TOR↓\downarrow | Candor TOR↓\downarrow | TOR↓\downarrow | Freq↑\uparrow | JSD↓\downarrow | TOR↑\uparrow | Latency↓\downarrow | TOR↑\uparrow | Judge↑\uparrow | Latency↓\downarrow |
| GRPO w/o Rl​l​mR_{llm} | 1.000 | 0.384 | 0.509 | 0.102 | 0.744 | 1.000 | 0.000 | 0.955 | 3.859 | 0.611 |
| GRPO w/ Rl​l​mR_{llm} | 1.000 | 0.454 | 0.309 | 0.110 | 0.737 | 0.992 | 0.000 | 0.955 | 3.942 | 0.660 |
| HiPLEX w/o Rl​l​mR_{llm} | 1.000 | 0.338 | 0.364 | 0.108 | 0.754 | 1.000 | 0.000 | 0.952 | 2.332 | 0.479 |
| HiPLEX w/ Rl​l​mR_{llm} | 1.000 | 0.306 | 0.127 | 0.134 | 0.734 | 1.000 | 0.000 | 0.960 | 4.083 | 0.439 |

该表显示对 HiPLEX 加入语义反馈后打断后质量从 2.332 升至 4.083，同时 CANDOR 暂停与 backchannel 接管率下降、打断后延迟缩短，分组优化加语义则质量只小幅上升。机制上论文用三元组重复率解释，只做时机时 HiPLEX 文本重复率数量级偏高，加入语义后降到最低，而控制侧散度基本不变，支持分路意图。但这不证明两路独立，因为同一主干被两个损失同时更新，附录用加重语义的压力测试说明过强内容目标会伴随回应率下降。因此该消融支持在报告的均衡权重下两者可同升，不支持语义越强越好的推广。未胜出项是合成暂停在该消融中恒为 1.000，说明该列在此配置下无区分力。

### 为何说事件因果掩码不可被稀疏或固定窗口替代

该消融固定分层策略与奖励，只改 timing 信用的时间资格，比较扁平分组优化、全帧、固定窗口、匹配稀疏的随机掩码与事件因果掩码。比较问题是收益究竟来自稀疏还是来自对齐事件结构，公平条件是除资格外配置与终点相同，随机行因轮次回应率仅 0.067 已趋沉默而不参与排序。

| Credit rule | Pause↓\downarrow | Int. lat.↓\downarrow | Judge↑\uparrow | Turn↑\uparrow |
| --- | --- | --- | --- | --- |
| flat GRPO | 0.454 | 0.660 | 3.942 | 0.992 |
| factorized, all frames | 0.264 | 0.874 | 4.330 | 0.958 |
| fixed window | 0.463 | 0.465 | 4.273 | 0.933 |
| random, matched sparsity | 0.028 | 3.277 | 3.579 | 0.067 |
| event-causal (HiPLEX) | 0.306 | 0.439 | 4.083 | 1.000 |

表中事件因果行在保持轮次接管率 1.000 的同时，暂停、打断延迟与质量三项保持有竞争力，全帧行降低轮次回应并拉长延迟，随机稀疏行直接塌向沉默。这说明单靠分层或单靠稀疏不能解释结果，信用必须落在等待与起始等因果角色上。限制是固定窗口在打断延迟上与事件因果接近且质量略高，3 种子均值中固定窗口的条件质量甚至最高，只是牺牲了暂停与 backchannel 克制与轮次回应，因此不能说事件因果在每个单项都最优，只能说多轴权衡最强。论文还报告学习率扫描，分组优化在 4e-6 时 backchannel 接管更低但暂停与质量仍落后，支持结论在测试的学习率范围内对多项成立。

### 哪些指标与训练现象限制了结论的推广

合成暂停在复现协议下易饱和，基座与多个强化模型同得 1.000，论文用是否剔除开场问候、前置静音与输出截断等变体说明其对 serving 设置敏感，因此正文强调自然 CANDOR 暂停。官方轮次分只要片段内出现足够长语音即算成功，且延迟在零处截断，在早期语音频发的强化模型下几乎恒为零延迟，论文因此用边界后词活动与首词偏移做补充，但该诊断不要求新片段在边界后开始，也不扣除词间静音，不能当新发起率。

训练侧 PersonaPlex 在 Moshi 的学习率下出现抑制占优的塌缩，减半只能延迟趋向近沉默，靠向启动倾斜的再平衡才恢复，说明同一配方在不同行为先验下稳定裕度不同。语义加重与继续训练的变体显示条件质量上升可伴随回应率大跌，阅读质量必须同时看时机与回应率。分布比较只覆盖 1 维边缘，未测联合分布与按偏好的条件行为，论文在讨论中明确这是未回答的适配听者问题。

### 复现第一步应准备什么与注意什么

复现应从数据窗口与评测协议对齐做起，而非先调奖励。按附录用双通道人类对话的发布 VAD 区间合并成话语，再按规则抽暂停、轮次、backchannel、打断 4 类窗口，双通道双向各做 1 次 agent 视角，共 73,561 训练窗与 2,048 验证窗。训练用组大小 16 的组内标准化，文本温度 0.7，音频温度 0.8，裁剪范围 0.2，Moshi 学习率 4e-6，PersonaPlex 用 2e-6 并按报告的轴混合与让出权重起步。评测必须固定从零时刻实时播放、不改静音、输出截断规则与 ASR 模型，否则合成暂停与轮次延迟不可比。

缺失的证据是代码、模型与数据当前无可验证的公开来源记录，不得把论文提到的链接当作已开源，来源未确认也不视为技术缺陷。硬件预算按报告为 16 卡 H100 约 13 小时跑 100 轮，复现时应先在小子集上验证 VAD 合并、掩码映射与组内方差为零时的稀疏失败处理，再全量训练。

### 什么时候值得尝试还需补哪项验证

当全双工系统已出现时机变好但内容变差，或固定窗口把等待与起始一起奖惩时，值得尝试这种先分发射意图再分词义的分路，并在迟到时只罚等待、及时时只奖起始。复现第一步是把 VAD 片段、组内标准化与掩码落位三件套跑通，再谈权重。还需要补的验证是按请求画像的条件行为，能否让模型在少应答与多重叠等偏好之间切换，并在每种偏好下同时报告克制、重入延迟、回应率与条件质量，避免单看条件质量误把沉默当优质。

关键超参数是学习率、控制与内容散度系数、延迟与让出权重、起始奖励的峰宽与尾部，以及稀疏全失败时的替换常数。信息条件上策略输入严格因果，未来标注只用于选窗与计分。总体上论文直接报告的是在固定协议与均衡权重下的多轴权衡改善，是否能推广到其他语料、其他 VAD 阈值与部署延迟，仍待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.07727v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
