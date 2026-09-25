---
title: "AV-GRPO: Modality-Anchored Decoupling Diffusion Reinforcement Learning for Joint Audio-Video Generation"
date: 2026-09-25
draft: false
tags: [音视频生成, 强化学习, 扩散模型, 音视频, 后训练]
categories: [论文速递]
description: "针对联合音视频生成中混合奖励难归因与双塔联合更新成本高的问题，AV-GRPO 用模态锚定分组、轨迹锁定加冻结对方塔、交替更新来解耦学习，基座 LTX-2.3 22B 上的 JavisBench 与 VABench 报告显示质量、对齐与同步多项提升，但不同训练方式与指标间仍存在权衡。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.29816"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "锚定一侧再学另一侧：AV-GRPO 把音视频联合偏好拆成条件单模子问题"
paper_digest_original_title: "AV-GRPO: Modality-Anchored Decoupling Diffusion Reinforcement Learning for Joint Audio-Video Generation"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.29816"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.29816.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"setting","id":"setting.post-training","label":"后训练"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对联合音视频生成中混合奖励难归因与双塔联合更新成本高的问题，AV-GRPO 用模态锚定分组、轨迹锁定加冻结对方塔、交替更新来解耦学习，基座 LTX-2.3 22B 上的 JavisBench 与 VABench 报告显示质量、对齐与同步多项提升，但不同训练方式与指标间仍存在权衡。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiyu Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Weilong Yan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yufei Shi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shiyang Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yihao Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kin-Man Lam"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuewen Cao"}]
paper_digest_abstract_sha256: "cceaabcc3b696bc85617707f13f85f08fccebdd53c3415a28d35f1b1b5d4282c"
paper_digest_sidecars: {"citation.bib":{"sha256":"7d31ee1e455612dd3936e273426dd6fddd83a14ceefd616985a4548b8f2e3618","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29816/citation.bib"},"citation.json":{"sha256":"c988204943c88f2e4917376553cae17087ef69cf7dd9b1335355e5148611dfde","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29816/citation.json"},"citation.ris":{"sha256":"5d3b7c5633f8219ef07beb684d9fe360e277a882ecddc398b780b04083c50132","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29816/citation.ris"},"rethink-context.json":{"sha256":"d5119391329ef0f81689864a6981c88003f313db27f2f948db975ce98afb4938","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29816/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b274704f290fe3b6f9151c358cd08f2c310e0e0b799a5fef202bb75cacc503df"
paper_digest_api_reader_plan_sha256: "62b7d5b10ec70ae99b250952336f6cedfad6a606da992712a3a77066253a6a02"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3cda689e7eacff454152ea8f3da46e7105ae7a8c65e56a8738449e77434d606b"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "27fed0454ca6781ac39cecaaf872c40b1e182c7a88f9b6bf54588a49a6c454ab"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3628af78ef5e1f7d4e31d22ef9ee17e809d632ced34d89496ffc8feb6ce1440d"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "edae146166379f1d87c7bd33aa5574511c0942aff6448262c54c07564bbb3b03"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 锚定一侧再学另一侧：AV-GRPO 把音视频联合偏好拆成条件单模子问题

> 英文题目：*[AV-GRPO: Modality-Anchored Decoupling Diffusion Reinforcement Learning for Joint Audio-Video Generation](https://arxiv.org/abs/2609.29816)*

> 标签：#音视频生成 | #强化学习 | #扩散模型 | #音视频 | #后训练
>
> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Zhiyu Xu：机构信息未在 arXiv HTML 中可靠披露
- Weilong Yan：机构信息未在 arXiv HTML 中可靠披露
- Yufei Shi：机构信息未在 arXiv HTML 中可靠披露
- Shiyang Li：机构信息未在 arXiv HTML 中可靠披露
- Yihao Liu：机构信息未在 arXiv HTML 中可靠披露
- Kin-Man Lam：机构信息未在 arXiv HTML 中可靠披露
- Yuewen Cao：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

联合音视频生成（Joint Audio-Video Generation）需从文本提示同时输出时间对齐的视频流与音频流，难点在于单模态质量、文本对齐与跨模态同步三类异构奖励互相牵制，且同步难度随对端采样样本变化而不公平。该工作提出AV-GRPO：在音频锚定视频优化与视频锚定音频优化之间交替，先用双塔完整采样一条锚定轨迹并锁定其全部中间交叉状态，再以该锚定为条件独立采样目标模态的8条候选轨迹，将组内奖励解耦为目标模态质量对齐加同步项并只更新目标塔，同时按模态定制噪声强度、KL系数与损失加权。与联合采样同时更新双塔相比，组内同步比较共享同一对端，优势信号只归因于可变模态。在JavisBench上全量微调将音频质量（Audio Quality，简称AQ）从5.097提升至5.798，DeSync从0.757降至0.607，全面超越LTX-2.3与GDPO。该结论限于22B LTX-2.3基座、15步采样与所用VideoAlign、CLIP、Audiobox Aesthetics、CLAP、DeSync奖励组合，换基座或换评测器外推尚未验证。原文披露单节点8卡NVIDIA A800 80GB训练与544×960分辨率97帧24FPS推理配置，但未披露完整训练时长与推理延迟成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么直接联合优化不好做？

本文的输入是一条联合文本提示，输出是同一去噪过程中同时产生的视频片段与其音轨。目标不是只把单模态做清晰，而是同时做到三件事：每个模态自身感知质量好、每个模态与文本语义一致、音频与视频之间语义连贯且时间同步。论文把基座选为 LTX-2.3 这类双流交互模型，其视频与音频各有潜空间与去噪塔，两塔通过跨模态注意力等机制在每一步交换信息。

直接把音视频对当作一个策略输出的基线做法是：对同一提示采样多组配对轨迹，分别算音频质量与对齐、视频质量与对齐、跨模态同步，再聚合成组相对优势并同时更新两塔。论文指出这条路有 3 个具体困难。第一，异构奖励互相牵制，不同候选可能在不同指标上各占优，而且同步分依赖采到的另一侧：配平稳场景容易得高分，配频繁视觉事件则难，跨对比较不公平。

第二，联合更新要为两塔保留反向激活与优化器状态，内存开销大，且同一优势同时推两塔，难以判断改进功劳属于哪一侧。第三，两塔预训练能力、潜变量尺度、奖励敏感度与学习速度不同，共享噪声强度与目标权重容易让一侧探索不足或另一侧失稳。

**联合音视频生成 × Flow-GRPO：** 联合音视频生成负责从同一文本提示同时产生视频流与音频流并保持语义与时间对应，Flow-GRPO 负责把确定性整流流采样改写为等边缘分布的随机采样从而提供可计算转移概率的策略与组内优势，二者搭配的理由是前者缺少可直接优化感知与同步失败的梯度，后者提供在线强化后训练的采样与更新机制，组合意义是把文本到音视频的去噪过程变成可按最终奖励做策略优化的对象。

本解读的目标读者是刚进入语音、音乐与音频方向的研究生。需要保留的关键信息是：基座、奖励来源、分组对照方式、冻结与更新规则、噪声与权重解耦、数据集构造维度、评测基准与指标方向、主要定量对照及其例外。输出按学习依赖展开，先走通一个样本的输入到输出，再展开公式与训练细节，最后讨论可复现性与边界。文中提到代码与数据位置，但本次没有收到可验证的 HTTPS 资源状态依据，因此不判断当前是否可公开或可下载。

### 同输入同目标的相关路线如何对照？

在联合音视频生成一侧，早期多为不对称管线，例如从视频生成拟音，其优点是可利用较强单模态先验，但只能单向条件生成，不直接做双向共生。近期 JavisDiT、UniVerse-1、Ovi 与 LTX-2 等转向统一过程内的双流交互与跨模态融合，重点在架构、数据与大规模预训练。本文不改预训练主干，而是研究奖励引导的后训练，目标是在不纠缠学习信号的前提下同时改进 2 模态。

在强化后训练一侧，DDPO 与 DPOK 把逆向去噪看作序列决策并用策略梯度优化扩散模型，Flow-GRPO 把确定性流 ODE 改写为边缘分布相同的随机微分方程从而支持在线 GRPO，DiffusionNFT 则走前向过程做在线奖励优化。GDPO 处理多目标时对各奖励独立归一化再聚合，但论文指出当音频与视频同时变化时，它仍未解决跨模态信用分配问题。因此相关工作对照应按同输入、同目标、同监督与同运行阶段理解：同为文本到音视频联合生成时，本文与 JavisDiT 等是预训练与后训练的分工差异。

同为扩散强化后训练时，本文与 Flow-GRPO 是单模态组比较与模态锚定条件组比较的差异；同为多奖励聚合时，本文与 GDPO 是先聚合再同时更新与先固定一侧再归因到另一侧的差异。

### 要解决的三个耦合问题能否写成可操作的形式？

第一个问题是奖励纠缠与比较不公平。论文把音频质量、视觉质量、文本对齐与同步放在同一组内比较，若 2 模态同时采样，同步分的变化可能来自任一侧，优势难以解释。同时，同步难度随另一侧变化，稳态场景与高频事件场景的得分不可直接比大小。

第二个问题是信用错置与内存成本。两塔在去噪全程交互，改进可能源于交叉条件变化而非被更新塔本身。若共享优势同时更新两塔，梯度路径同时经过两组参数，学习信号被摊薄。训练状态也要为两塔保留，22B 规模下开销显著。

第 3 个问题是动力学不对称。论文明确报告视频与音频采用不同采样噪声与 KL 系数，说明作者观察到共享配置不适用。视频塔还出现过曝等与去噪后期弱梯度有关的现象，单纯调标量 KL 系数不能解决，才引入按步重加权。这 3 个问题共同指向同一操作化思路：固定一侧完整轨迹，把联合偏好学习变成条件单模子问题，每次只解释与只更新一侧。

### AV-GRPO 全景：一个样本如何走完输入到输出？

沿一个提示走一遍。先用式 3 的随机采样同时产生一个音视频对，保留其中一侧的完整轨迹作为锚。例如进入音频锚定视频学习阶段，就保留音频轨迹，独立采样 G 个视频目标轨迹；每一步把锚定音频状态代入跨模态注意力，视频侧按条件转移推进。最终得到 G 个共享同一音频的音视频对。

对每个对计算目标模态质量与文本对齐奖励加同步奖励，做组内标准化得到优势，只更新视频塔。音频锚定阶段结束后切换到视频锚定音频学习，对称进行。每 N 步切换 1 次活动塔，论文主实验取每 4 步切换，先更新视频塔。

以下导读针对本次实际收到像素的训练管线总览图，阅读时先把握主路径再看冻结关系。

> **看图路径：** 1. 先看顶部联合文本与配对音视频示例，确认输入是同一提示同时约束两模态；2. 再对比 Phase A 与 Phase B 哪一侧写着 Shared 且跨候选相同；3. 检查火焰与雪花图标分别落在可更新塔与冻结塔上；4. 最后沿底部 Alternate every N training steps 确认两阶段循环关系

[![原论文 Figure 1：Overview of the AV-GRPO training pipeline.](https://arxiv.org/html/2609.29816v1/Figure_pipeline.png)](https://arxiv.org/html/2609.29816v1/Figure_pipeline.png)

*论文图 1。原论文 Figure 1:：“Overview of the AV-GRPO training pipeline.”。*

该图顶部显示联合文本以鼓手击鼓为例，同一提示同时约束视频帧与音频波形，表明输入到输出的主路径是文本经双塔去噪到配对样本。中部左右两栏对称展示 Phase A 与 Phase B：Phase A 上方标注共享音频轨迹，下方多个视频候选共用同一音频；Phase B 上方标注共享视频轨迹，多个音频候选共用同一视频。火焰图标落在当前可更新塔，雪花图标落在冻结塔，双向箭头表示去噪中仍有跨模态信息交换，但梯度与优化器状态只保留给活动塔。底部循环箭头与每 N 步交替说明 2 阶段轮流执行，使每个塔都在对方最新分布下学习，而不是把任一侧永久固定。

### 锚定分组、锁定冻结与解耦超参如何分工？

模态锚定分组先解决比较条件。组内锚定轨迹完全相同，锚定侧奖励在组内中心化后消失，剩余奖励为目标侧质量对齐加相对同一配对的同步。论文强调必须固定完整轨迹而非仅固定最终样本，因为两塔在每步去噪都交互，中间交叉状态不受控则条件仍不干净。跨组刷新锚定，避免只在单一配对上训练。

**模态锚定分组 × 轨迹锁定与塔冻结：** 模态锚定分组负责固定一侧完整去噪轨迹、只采样另一侧多个候选，使组内同步难度与对照条件相同，轨迹锁定与塔冻结负责在采样与更新全程复用同一锚定中间状态且只更新目标塔参数，二者搭配的理由是只固定最终样本仍会让每步交叉注意力状态失控，只冻结参数而不锁定轨迹也无法稳定对照，组合意义是把耦合的双变量比较变成以固定条件为前提的单变量比较并把梯度信用导向目标塔。

轨迹锁定与塔冻结再解决信用与成本。同一锚定状态在该分组的采样与策略更新中复用，冻结锚定塔参数，只对目标塔计算梯度与维护优化器状态。条件优势只作用于目标塔，避免同一信号同时推两塔。论文报告该策略使 22B 全参数后训练可在单节点 8 卡 A800 上进行，这是可操作层面的直接收益。

**组相对优势 × 同步奖励：** 组相对优势负责把同一分组内最终样本奖励做标准化得到谁好谁坏的学习信号，同步奖励负责度量音频与视频在时间与事件上的对应程度，二者搭配的理由是同步分数天然依赖被配对的另一侧难易，若两侧同时变化则高分可能来自更容易的配对而非更好的对齐，组合意义是在锚定相同后组内中心化消去锚定常数，使优势变化主要反映目标侧采样差异与相对同步改善。

奖励解耦的具体计算是：视频阶段用 VideoAlign、CLIP 与 DeSync 分别度量视频质量、视频文本对齐与同步；音频阶段用 Audiobox Aesthetics、CLAP 与 DeSync 度量对应三项，其中 DeSync 越低越好故取负。先对每项做组内标准化再求和，再对总分做第二次组内标准化得到最终优势。音频侧另有 CLAP 护栏：当组平均 CLAP 低于阈值时只用 CLAP 优势，防止质量与同步提升掩盖语义偏离。

超参与噪声解耦处理不对称动力学。视频采样噪声取 0.02，音频取 0.8，KL 系数分别为 0.01 与 0.002。视频侧对策略与 KL 项按步重加权，音频侧保留原始权重。自适应噪声裁剪则限制粗网格下 t 接近 1 时随机增量压过潜信号的问题。

先给出随机采样的转移形式，其中符号含义为当前潜变量、预测速度、时间步、噪声强度与高斯噪声，计算目标是在保持边缘分布下提供可采样、可算概率比的随机转移。

\[x_{t+\Delta t}=x_{t}+\Big[v_{\theta}+\frac{\sigma_{t}^{2}}{2t}\big(x_{t}+(1-t)\,v_{\theta}\big)\Big]\Delta t+\sigma_{t}\sqrt{|\Delta t|}\;\epsilon,\qquad\sigma_{t}=a\sqrt{\tfrac{t}{1-t}},\]

再给出锚定条件下的目标侧推进，其中速度在目标当前状态、锚定当前状态、时间与文本下求值，计算目标是得到以锚定轨迹为条件的目标轨迹分布。

\[x^{\bar{m},i}_{t+\Delta t}=x^{\bar{m},i}_{t}+\Big[v^{\bar{m}}_{\theta}+\frac{\sigma_{t}^{2}}{2t}\big(x^{\bar{m},i}_{t}+(1-t)\,v^{\bar{m}}_{\theta}\big)\Big]\Delta t+\sigma_{t}\sqrt{|\Delta t|}\;\epsilon^{\bar{m},i},\qquad\epsilon^{\bar{m},i}\sim\mathcal{N}(0,I),\]

组内最终奖励只保留目标侧与同步两项，锚定常数经中心化消去。

\[R^{i}=R_{\bar{m}}(x^{\bar{m},i}_{0})+R_{\mathrm{sync}}(x^{\bar{m},i}_{0},x^{m}_{\mathrm{anc},0}).\]

自适应裁剪先算随机项标准差再按阈值缩放，用于稳定大噪声采样。

\[s_{t}=\sigma_{t}\sqrt{|\Delta t|},\qquad\lambda_{t}=\min\!\left(1,\frac{\tau}{s_{t}+\delta}\right),\qquad\tilde{\sigma}_{t}=\lambda_{t}\sigma_{t},\]

视频塔按步权重分别重塑策略与 KL 梯度尺度，以缓解后期梯度失衡。

\[\lambda_{\text{policy}}(t,\Delta t)=\sqrt{\frac{t}{\Delta t(1-t)}},\qquad\lambda_{\text{KL}}(t,\Delta t)=\frac{t}{\Delta t(1-t)}.\]

**自适应噪声裁剪 × 视频塔重加权：** 自适应噪声裁剪负责在粗步长下限制扩散系数带来的随机增量幅值以稳定采样，视频塔重加权负责按时间步重塑策略项与 KL 项梯度尺度以缓解去噪后期梯度过弱与过曝，二者搭配的理由是音频与视频潜变量尺度、奖励敏感度与学习速度不对称，同一噪声与同一权重会顾此失彼，组合意义是让两塔在交替更新时各自拥有可探索又不破坏去噪的优化配置。

附录 A 在理想化假设下讨论了条件 Gibbs 核与联合 KL 正则目标的关系，包括公共参考联合分布、有界奖励、Dobrushin 收缩等条件下的最优性与几何收敛。这部分是理论对照，不是主实验的充分条件，复现时不应把收缩假设当作已在真实模型上验证。

### 5DAV 如何构造，训练循环如何组织？

5DAV 沿 5 个独立指定维度做笛卡尔积：语义层级分实体、场景、事件；声源类型分人声、环境与物体声、音乐、混合源；同步难度分无关、类别匹配、帧级同步、物理因果同步；时间复杂度分单事件与多事件；指令粒度分弱、中、强约束。

3 乘 4 乘 4 乘 2 乘 3 得 288 类，每类生成 20 条提示，共 5760 条。论文称该设计使采样比例可按阶段灵活调整，便于追踪训练过程与定位弱项。

**5DAV × 交替优化间隔：** 5DAV 负责沿语义层级、声源类型、同步难度、时间复杂度与指令粒度 5 维正交组织 5760 条提示以控制训练条件覆盖，交替优化间隔负责规定每训练多少步切换音频锚定与视频锚定阶段，二者搭配的理由是数据解耦提供可追踪的难度来源而交替节奏决定每个塔在对方最新分布下暴露多久，组合意义是让后训练过程可按维度抽样与按阶段切换来定位弱项并保持双塔均衡改进。

训练组织上，所有提示充分随机打乱而非按类别顺序采样。LTX-2.3 生成 544 乘 960、97 帧、24 FPS 片段，去噪 15 步，默认随机种子 42，每步消耗 8 个提示。每轮先用 32 个提示训练视频塔 4 步，再用同一批 32 个提示训练音频塔，然后换新数据进入下一轮。LoRA 学习率从 3 乘 10 的负 6 次方按余弦衰减到零，训练 480 步，总计 1440 步使两塔各看一遍数据；全参数微调学习率从 1 乘 10 的负 6 次方同样余弦衰减 480 步，噪声与 KL 系数与 LoRA 相同。

GDPO 在相同超参与数据顺序下训练 480 步，因同时更新双塔而让每塔用同一数据训练 2 次。需要指出，消融中去掉同步难度或指令粒度的最易或最难级别的具体相对变化幅度，在本次收到的文字证据中只以方向性描述给出，没有可逐字覆盖的完整数字表，因此本解读不虚构其百分比。

### 在什么基准、什么指标方向上比较？

评测用 JavisBench 与 VABench。JavisBench 分 4 个方面：单模态保真度用视觉质量与音频质量；文本模态对齐用 ImageBind 相似度、CLIP 与 CLAP；音视频语义连贯用音视频 ImageBind 与 AVH 分数；音视频同步用 JavisScore 与 DeSync。

VABench 分两类范式：一类用专家模型做客观感知评估，包括语音质量自然度、音频美学与唇同步；另一类用多模态大语言模型模拟人类判断，包括全局对齐、艺术性与表现力等高层语义。方向上，除 DeSync 越低越好外，其余报告指标越高越好。

奖励模型与评测指标部分重叠但分工不同：训练时视频侧用 VideoAlign 加 CLIP 加 DeSync，音频侧用 Audiobox Aesthetics 加 CLAP 加 DeSync；评测时再用上述基准的独立指标检验是否泛化到未直接优化的维度。比较对象包括基座 LTX-2.3 22B、GDPO，以及 AV-GRPO 的 LoRA 与全参数版本。硬件统一为单节点 8 卡 A800 80 GB，生成分辨率帧数帧率与去噪步数在各运行间保持一致，这是判断公平性的前提。

下表整理训练与采样配置，数字与单位均来自原文连续句，裸数值不擅自添加百分号，科学计数保留原文写法。

| 配置类别 | 关键条目 | LoRA 取值 | 全参数取值 | 共同条件 |
| --- | --- | --- | --- | --- |
| 硬件与生成 | GPU 与片段规格 | 单节点 8 卡 A800 80 GB | 单节点 8 卡 A800 80 GB | 544×960，97 帧，24 FPS，15 步 |
| 学习率 | 初值与衰减 | 3×10−6 余弦到零 | 1×10−6 余弦到零 | 各 480 步 |
| 视频塔 | 采样噪声与 KL | 0.02 与 0.01 | 0.02 与 0.01 | 音频锚定阶段更新 |
| 音频塔 | 采样噪声与 KL | 0.8 与 0.002 | 0.8 与 0.002 | 视频锚定阶段更新 |
| 数据轮转 | 总量与切换 | 5760×2/8=1440 | 同左 | 每 4 步切换，先视频塔 |

上表说明两塔噪声相差一个数量级以上，复现时必须分开设置，不能共用同一扰动强度；切换间隔与数据复用方式决定了每个塔看到的对照分布，改动其中任一项都会改变公平条件。

### 主结果测了什么，谁在什么条件下更好？

主结果问题是：在相同基座与相同数据顺序下，模态锚定交替更新是否在感知质量、文本对齐、跨模态连贯与同步上同时带来可运行的增益。比较条件是同一 LTX-2.3 22B 基座，GDPO 与 AV-GRPO 共享超参与数据顺序，AV-GRPO 分 LoRA 与全参数两种实际可运行策略。指标方向按 DeSync 越低越好、其余越高越好解读。

| 评测维度 | 代表指标 | LTX-2.3 个基线 | AV-GRPO full | GDPO 对照 |
| --- | --- | --- | --- | --- |
| 感知质量 | JavisBench AQ 与 VABench 音频美学 | 5.097 与 3.319 | 5.798 与 3.631 | 5.406 与 3.452 |
| 语义对齐 | JavisBench CLIP 与 CLAP | 0.318 与 0.408 | 0.327 与 0.468 | 0.313 与 0.431 |
| 跨模态连贯同步 | JavisBench AV-IB 与 JavisScore | 0.212 与 0.183 | 0.247 与 0.222 | 0.224 与 0.202 |
| 同步误差 | JavisBench DeSync 与 VABench DeSync | 0.757 与 0.800 | 0.607 与 0.542 | 0.708 与 0.726 |
| 唇同步 | VABench Lip Sync | 1.351 | 1.646 | 1.439 |

上表每个数字单元格均可在下文绑定引文中找到逐字连续来源，跨指标差值未放入模型列下，相对百分比与百分点未混用。总体上，全参数版本在多数质量与对齐指标上最好，且在跨模态指标上明显超过 GDPO：AV-IB 从 0.224 到 0.247，JavisScore 从 0.202 到 0.222，DeSync 从 0.708 降到 0.607；VABench 唇同步从 1.439 到 1.646，DeSync 从 0.726 降到 0.542。论文把跨模态比较作为重点，因为控制参考模态与学习信号最相关。

以下导读针对本次实际收到像素的定性对比图，先确认行对应关系再看事件同步。

> **看图路径：** 1. 先按图注确认每例第 2-3 行是基线、第 4-5 行是 AV-GRPO full；2. 对比火灾与小提琴两例的视频帧变化与波形包络变化是否同向；3. 观察玩具车 Vroom Beep Boom 与绿色角色入水两例的波形峰是否更集中在事件帧附近

[![原论文 Figure 2：Qualitative comparison of LTX-2.3 and AV-GRPO (full).](https://arxiv.org/html/2609.29816v1/compare_3.png)](https://arxiv.org/html/2609.29816v1/compare_3.png)

*论文图 2。原论文 Figure 2:：“Qualitative comparison of LTX-2.3 and AV-GRPO (full).”。*

该图每例上方为文本提示，加粗部分标出需要同步的视觉事件与声音线索。按图注第 2 至 3 行为基座结果、第 4 至 5 行为 AV-GRPO full 结果逐例对比：左上火灾例可见火焰形态与爆炸后持续燃烧声的波形延续性差异；右上小提琴与乐队伴奏例可见演奏动作帧与混合音乐波形的对应；左下玩具车 Vroom Beep Boom 与撞击例可见离散语音事件是否在波形上形成分段峰；右下绿色角色跳入溪流并发 croaking 声例可见入水帧附近波形是否收紧。这些定性例子补充了聚合分数，说明共享锚定比较优化的是事件级时间对应，而非整体响度。

### 数据与交替节奏的反证说明了什么？

消融问题分两组。第一组是数据集：相同训练配置下比较 5DAV 与 VGGSound，另在同步难度与指令粒度维度内分别去掉最易或最难级别，观察 JavisBench-mini 上质量、对齐、连贯与同步的变化。论文报告完整类别网格有价值，且难度级别提供不同训练信号，尤其同步指标在去掉同步难度级别时变化明显，说明单一聚合分不足以评估数据设计。第二组是交替优化：比较不交替与每 2 步、4 步、8 步切换，当前配置下每 4 步切换总体最均衡，但单个指标未必同时在 4 步处取峰。

| 消融对象 | 对比条件 | 报告结论 | 限制 |
| --- | --- | --- | --- |
| 训练集 | 5DAV 对 VGGSound | 5DAV 在多维度占优 | 仅 JavisBench-mini 子集 |
| 同步难度 | 去掉最易或最难 | 同步度量变化显著 | 无逐字可绑定的完整百分比 |
| 指令粒度 | 去掉最易或最难 | 难度分工不同 | 无逐字可绑定的完整百分比 |
| 交替节奏 | 不交替对 2 步 4 步 8 步 | 交替明显有益，4 步总体均衡 | 单指标峰值位置不一致 |
| 训练方式 | LoRA 对全参数 | 全参数 AQ 与 AV-IB 最高，LoRA 的 CLIP 与 DeSync 更优 | 各有未胜出项 |

上表表明改进是广泛但非均匀的：LoRA 视觉质量 5.816 低于基座 5.855，全参数视觉真实感 4.395 略低于基座 4.399，这些例外不推翻多数指标增益，但说明不同模态与训练方式保留各自权衡。

以下导读针对本次实际收到像素的更多定性结果图，用于观察不同场景下的行为边界。

> **看图路径：** 1. 先确认每组上方为文本提示、下方为四帧视频与一条音频波形；2. 比较焊接火花、装载机、沙漠行车等静态氛围类的波形是否平坦连续；3. 再看乐高光剑与夜间房屋等事件类的波形是否有更明显的分段结构

[![原论文 Figure 4：More qualitative results of AV-GRPO (full).](https://arxiv.org/html/2609.29816v1/supp_1.png)](https://arxiv.org/html/2609.29816v1/supp_1.png)

*论文图 4。原论文 Figure 4:：“More qualitative results of AV-GRPO (full).”。*

该图按提示加 4 帧加波形组织多组结果，覆盖焊接、装载机、沙漠行车、城市航拍、森林水面、花树建筑、人物手持小物件、水下气泡、乐高光剑与夜间房屋等。可见静态氛围类多为平坦连续波形，事件驱动类波形分段更清晰。阅读时应把波形形状与提示中的事件词对应起来：若提示无离散事件却出现强脉冲，或提示有明确事件却无对应峰，则属于值得进一步用同步指标核查的边界情况，而不是仅凭画面清晰就判定同步良好。

### 哪些结论有限，哪些验证还没有做？

论文直接报告的是：在给定基座、给定奖励模型、给定基准与给定硬件预算下，AV-GRPO 的 LoRA 与全参数版本多数指标优于基座与 GDPO，且交替与数据解耦各自在消融中显示作用。这些是报告层面的事实。有限解释是：条件子问题视角能让组内奖励解释更清晰，冻结能把信用导向目标塔；附录的 Gibbs 收敛定理支持的是理想化精确核与收缩假设下的结论，不能直接推广为真实双塔已收敛到联合最优。

未验证的推测包括：切换间隔 4 步是否在其他基座、其他数据量或其奖励组合下仍最优；CLAP 护栏阈值如何选择及其对音频多样性的影响；训练奖励提升能否等同于人类感知同步提升，VABench 的多模态大模型判断只是模拟人类而非替代人类评价。缺失证据不是技术错误，但不应承诺未测量的量：原文未报告误判率、推理延迟、输出帧率与实际延迟的系统测量，也未报告训练总时长与能耗，因此不能声称这些成本得到改善。总体趋势不等于每组每步成立，个别指标的例外已在正文中明确保留。

### 复现先做什么，需要保留哪些信息条件？

先固定基座与生成条件：LTX-2.3 22B，544 乘 960，97 帧，24 FPS，15 步去噪，默认种子 42，每步 8 提示。再固定奖励组合：视频侧 VideoAlign 加 CLIP 加负 DeSync，音频侧音频美学加 CLAP 加负 DeSync，2 次组内标准化，音频侧加组平均 CLAP 护栏。接着固定优化配置：视频噪声 0.02 与 KL 系数 0.01，音频噪声 0.8 与 KL 系数 0.002，视频侧启用按步重加权与自适应噪声裁剪，学习率 LoRA 取 3 乘 10 的负 6 次方、全参数取 1 乘 10 的负 6 次方并余弦衰减 480 步。最后固定数据与切换：5DAV 的 288 类 5760 条提示充分随机打乱，每 4 步切换活动塔，先视频后音频，每轮复用同一批 32 提示训练两侧。

实现时注意 3 个易错点。第一，锚定的是完整轨迹的每步状态并在采样与更新中复用，不是只复用最终音视频文件。第二，冻结塔仍需前向提供交叉条件，但不保留反向激活与优化器更新；目标塔才计算条件转移概率比与 KL。第三，DeSync 方向为越低越好，聚合前取负，评测时仍按越低越好解读，不要把训练用符号与评测方向混淆。关于代码权重与数据可运行性，本文不作超出原文的可获取判断，复现前需自行确认实际可访问的版本与许可。

### 何时值得尝试这种解耦，还需补哪项验证？

当联合生成同时出现单模态瑕疵、文本偏离与跨模态失配，且怀疑混合奖励让两塔互相推诿时，值得尝试模态锚定交替：先固定一侧完整轨迹做公平组比较，再轮换另一侧。这种做法的代价是训练流程变长、需要维护两套噪声与权重配置，并依赖同步奖励的质量；若同步评估本身不可靠，锚定只能保证比较公平，不能保证优化方向正确。

从证据强度看，最强的是跨模态同步与连贯指标相对 GDPO 的提升，以及全参数在音频质量与对齐上的增益；最弱的是对切换间隔普适性与数据难度划分因果效应的论证，因消融多在子集上且部分幅度无完整逐字数字。下一步最值得补的验证是：固定其他条件只变切换间隔的重复实验并报告方差；去掉护栏或替换同步奖励后的行为检查；以及小规模人类同步判断与自动 DeSync 的一致性分析。掌握这些后，才能把该方法从特定基座与特定奖励栈上的有效做法，推广为更一般的联合音视频后训练流程。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.29816)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-25/)
