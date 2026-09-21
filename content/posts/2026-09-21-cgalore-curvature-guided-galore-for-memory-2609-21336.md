---
title: "CGaLore: Curvature-Guided GaLore for Memory-Efficient Continual Adaptation of ASR Foundation Models"
date: 2026-09-21
draft: false
tags: [语音识别, 持续学习, 语音, 多语言]
categories: [论文速递]
description: "针对 ASR 基座模型持续适配中的灾难性遗忘，CGaLore 用旧任务 KFAC 曲率先过滤当前梯度再选 GaLore 低秩基，在 L2-Arctic 与 CGN 两组实验上取得最优平均词错误率，代价是需少量旧任务语音估计曲率并增加基更新时的计算。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.21336"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在低秩优化器里加旧任务曲率：CGaLore 如何让 ASR 基座模型记得住又学得进"
paper_digest_original_title: "CGaLore: Curvature-Guided GaLore for Memory-Efficient Continual Adaptation of ASR Foundation Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.21336v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.21336v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.21336v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.continual","label":"持续学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"setting","id":"setting.multilingual","label":"多语言"}]
paper_digest_primary_method: "持续学习"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对 ASR 基座模型持续适配中的灾难性遗忘，CGaLore 用旧任务 KFAC 曲率先过滤当前梯度再选 GaLore 低秩基，在 L2-Arctic 与 CGN 两组实验上取得最优平均词错误率，代价是需少量旧任务语音估计曲率并增加基更新时的计算。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Steven Vander Eeckt"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hugo Van hamme"}]
paper_digest_abstract_sha256: "866078b6a0ebbed6da76a62662afa6182a66fb87c319bacf5c0075ee9edc12fc"
paper_digest_sidecars: {"citation.bib":{"sha256":"3fe279a573f181492f5b75305181a1b35007f52b11f9f7cf2efcebd290287971","url":"/audio-paper-digest-blog/data/papers/2026-09-21/2609-21336/citation.bib"},"citation.json":{"sha256":"01d4f435c2e451b2c2bcc2e9db8557b0c497febcb50554a0e627f7eecc2df915","url":"/audio-paper-digest-blog/data/papers/2026-09-21/2609-21336/citation.json"},"citation.ris":{"sha256":"1b8a69f00a67803b50cca53c428f3650c4e78aef15e65bee2f2a4dd7971b8254","url":"/audio-paper-digest-blog/data/papers/2026-09-21/2609-21336/citation.ris"},"rethink-context.json":{"sha256":"5d9bae749b3863f69b2e470f3a57d75d3b505001ed67a2f54e08b1632354d1ff","url":"/audio-paper-digest-blog/data/papers/2026-09-21/2609-21336/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ab2ce0c655b99833e0ffaff2835cac9801b8f41bb20f3b6cb7ec25a25da58e1d"
paper_digest_api_reader_plan_sha256: "5e7cf1e7b6740a00886b85f993faf71016549cfba34d27aa3f7340b64ce71643"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f8c4d1d5b9f7a629f401284b27abf0c04d628310bbfe361967ffb1c27e30df88"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "397fef4cd24cadab32bc4e29e122b34e2e9b00fa0f5f869487b55602ecb7fcf7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0a2cd7073aa1ab4e089fb0ccc45729d6f32b45e9bfbacf0daa72a308c64716ff"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c1663bb297b38efc94b101d15488e9d1f177bd268ea01e593319b2c5d1068a32"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在低秩优化器里加旧任务曲率：CGaLore 如何让 ASR 基座模型记得住又学得进

> 英文题目：*[CGaLore: Curvature-Guided GaLore for Memory-Efficient Continual Adaptation of ASR Foundation Models](https://arxiv.org/abs/2609.21336v1)*

> 标签：#语音识别 | #持续学习 | #语音 | #多语言
>
> 评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Steven Vander Eeckt：机构信息未在 arXiv HTML 中可靠披露
- Hugo Van hamme：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

自动语音识别（Automatic Speech Recognition，ASR）基础模型需要在新口音或新地域上持续学习，同时不丢失英语、德语、西班牙语等多语言旧能力，难点是全参数微调优化器内存大且新旧梯度冲突。本文方法链分三步：先在初始模型上用少量旧任务语音估计每层 Kronecker 分解近似曲率（Kronecker-Factored Approximate Curvature，KFAC）的输入协方差与输出梯度协方差并常驻 CPU；再在每次更新投影基时用逆曲率对当前梯度做双边预滤并做奇异值分解，只保留新任务相关且旧任务曲率低的方向作为优化子空间；最后在该子空间内执行低维优化器更新并映射回全秩参数，同时以滑动平均累积新任务曲率。与仅取新梯度主方向的梯度低秩投影（Gradient Low-Rank Projection，GaLore）及固定低秩增量的低秩适配（Low-Rank Adaptation，LoRA）类方法不同，该机制在训练轨迹层面约束更新而非事后修正或冻结参数形式。在 L2-Arctic 口音适配中最终平均词错率（Word Error Rate，WER）为 8.72%，显著优于最强基线并基本消除 GaLore 的遗忘。结论目前仅验证短序列口音与荷兰语地域适配，未覆盖更大模型、更长任务链与跨领域外推。训练峰值显存与 GaLore 持平均为 10.56 GB，单次适配总耗时仅增加约 0.4%，曲率计算只发生在基更新时刻。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决什么问题：基座模型适配为何既怕贵又怕忘？

输入是已经在大规模多语言多场景语音上预训练好的自动语音识别基座模型，目标是把它持续适配到新的口音、方言或领域。必须保留的信息包括新任务学到了多少、旧任务忘记了多少，以及适配过程的内存代价。本文输出是一套可复述的训练流程与实验条件说明，帮助研究生判断何时可以用曲率引导的低秩优化器。

语音基座模型的特点是参数多、预训练数据极大。直接全量微调每个新任务，一方面优化器状态占用大量显存，另一方面新梯度会覆盖旧能力，这就是灾难性遗忘。对于基座模型，遗忘尤其不可接受，因为预训练换来的广泛能力正是其价值所在。

**灾难性遗忘 × 持续学习：** 灾难性遗忘指学新任务时覆盖旧能力，导致旧任务词错误率上升；持续学习是要求在学新任务的同时保持旧任务性能的目标设定，二者搭配的意义在于把适配从只看新任务好坏，转为同时考核学习与保持的权衡。

论文把任务设定为典型的持续学习流。初始模型已在初始任务集上训练好，记为初始参数。之后依次到来新任务，每次只能看到当前任务数据，旧数据不再可用或重用代价太高。评估时既看新任务词错误率是否下降，也看旧任务词错误率是否上升。平均词错误率越低越好，后向迁移越接近零或正值越好，负值表示遗忘。

学习依赖上，先要理解词错误率与后向迁移的计算口径，再理解参数高效与内存高效的区别，最后才能进入曲率如何改变梯度子空间。后续各节按此顺序展开，不提前使用尚未解释的缩写含义。

### 已有路线在省内存和防遗忘之间做了什么取舍？

同输入同目标的已有工作可分为 3 类。第一类是参数高效持续学习，多在自然语言与视觉领域基于低秩适配扩展，语音领域则有正交低秩适配结合自适应秩、任务相关低秩模块做权重平均，以及基于奇异值分解只调特定奇异子空间的方法。第二类是梯度低秩投影，以 GaLore 为代表，不减少可训练参数，而是把优化器状态压缩到低维。第 3 类是利用旧任务信息防遗忘，包括逆 Hessian 正则、需要存旧数据的奇异值重演，以及近期用优化器 1 阶矩或历史梯度减少干扰的方法。

**LoRA × GaLore：** LoRA 的分工是冻结原权重、只学低秩增量以省可训练参数，GaLore 的分工是保持参数满秩、只把梯度投影到低维优化器空间以省优化器状态内存，搭配理由是两者都利用低秩结构但省内存的位置不同，组合意义在于说明 CGaLore 继承的是 GaLore 路线而非 LoRA 路线。

论文明确指出一个实际信息条件：当适配已发布的语音基座模型时，预训练梯度、优化器状态和完整预训练数据通常不可用。依赖这些信息的方法在该条件下不可运行。CGaLore 的定位是只用少量旧任务数据估计曲率，不需要预训练过程内部信息，也不长期保存重演样本。

与事后校正方法的区别也需要先记下。逆 Hessian 正则是在微调结束后对最终参数位移做 1 次旋转，而 CGaLore 是在训练过程中每次更新投影基之前先过滤梯度。两者的曲率来源相似，但干预时机不同，这决定了后文消融需要对比训练中引导与训练后校正的相对收益。

### 任务形式化：数据、参数与不可用的旧数据如何定义？

论文考虑带参数的语音识别模型，把一段声学帧序列映射为输出词序列。适配操作的对象是模型中的线性权重矩阵，记输入维与输出维，其余输出层按实验设定冻结。每个任务对应一个配对语音数据集，初始任务集包含英语、德语、西班牙语，后续新任务是带口音英语或荷兰语变体。

持续学习流程是串行的。从上一任务结束时的参数出发，在当前任务数据上优化得到新参数。旧任务数据在当前阶段不可用，这对基座模型尤其现实，因为初始训练涉及数十万小时语音，不可能为每次适配重放全部数据。

评价沿用最终模型在所有学过任务上的词错误率，以及在旧任务上的后向迁移。论文把初始任务集中的多个语言单独计算后向迁移，而不是合并为一个平均数。显著性用逐句错误计数的 Wilcoxon 符号秩检验在千分之一水平评估，这是复现时核对平均词错误率差异是否可信的依据。

### CGaLore 全景：先过滤梯度再选基，其他步骤沿用 GaLore

CGaLore 的总体动作可以沿一个训练样本走一遍。输入当前小批量语音与文本，计算当前权重矩阵的梯度。若到达更新基的时刻，先用旧任务曲率逆矩阵对该梯度做左右两侧过滤，再对过滤后梯度做奇异值分解，取前列奇异向量作为新的左右投影基。若未到更新时刻，则沿用旧基。之后把后续每步梯度投影到小矩阵空间，在该空间执行优化器更新，再映射回原参数空间更新权重。

关键假设是初始模型已在旧任务上接近最优，旧任务梯度接近零，因此旧任务损失可用 2 次型近似。论文用 2 阶泰勒展开写出该近似，增量引起的旧损失上升由旧任务 Hessian 的 2 次型决定。

\[{\cal L}_{0}(\bm{\theta}^{0}+\Delta\bm{\theta})\approx{\cal L}_{0}(\bm{\theta}^{0})+\frac{1}{2}\Delta\bm{\theta}^{\top}\mathcal{\bm{B}}_{0}\Delta\bm{\theta},\]

在此近似下，论文提出一个带约束的最大化问题：在旧损失 2 次增长不超过阈值的前提下，使更新方向与新任务下降方向的内积最大。其解正比于逆 Hessian 乘以新任务梯度。阈值只影响比例常数，不影响方向选择，因此 CGaLore 只用该方向来挑选子空间，而不直接把它当作参数更新。

与 GaLore 的关系是继承与偏置。GaLore 直接对当前梯度做奇异值分解选基，CGaLore 插入一步曲率过滤，使选出的基既来自当前梯度又避开旧任务高曲率方向。过滤只发生在基更新时刻，逐步骤优化仍走 GaLore 的投影与回映射路径。

### 组件与计算：KFAC 近似、过滤公式与双侧投影如何配合？

逐层 Hessian 用 Kronecker 积近似分解为输入协方差与输出梯度协方差的积，分别对应输入维与输出维的曲率因子。该近似保证正定从而可逆，避免直接构造与求逆大矩阵。论文在初始模型上用旧任务子集估计这两组因子，每层保存一套。

基更新时的过滤是左右各乘 1 次逆因子，即用输出侧逆曲率左乘梯度、用输入侧逆曲率右乘梯度。直观理解是把梯度中旧任务敏感的分量压低，保留对新任务重要且对旧任务相对安全的分量。

\[\bm{G}^{\text{KFAC}}_{s}=\bm{H}^{-1}\bm{G}_{s}\bm{Q}^{-1}\]

对过滤后梯度做奇异值分解，保留奇异值最大的前列方向作为投影基。原始 GaLore 的投影把大矩阵梯度压缩为小矩阵，优化器状态只存在小矩阵空间。

\[\tilde{\bm{G}_{s}}=\bm{P}^{\top}\bm{G}_{s}\bm{R}\in\mathbb{R}^{r\times r}\]

优化器在小空间算出更新后，再用左右基映射回原空间并按学习率更新权重。

\[\bm{W}_{s}=\bm{W}_{s-1}+\eta\bm{G}_{s}^{\mathrm{OPT}},\]

**KFAC × 逆 Hessian 方向：** KFAC 的分工是用输入协方差与输出梯度协方差的 Kronecker 积分解近似旧任务 Hessian，逆 Hessian 方向的分工是把新任务梯度旋转到旧任务损失增长最慢的方向，搭配理由是完整 Hessian 不可行而 KFAC 可逐层求逆，组合意义是先过滤再选基，使优化子空间同时对新任务有用、对旧任务安全。

论文坚持使用双侧完整投影，而 GaLore 允许只用左侧或只用右侧。理由是 CGaLore 不仅为了省内存，更要用基来偏置更新轨迹，两侧同时约束才能在输入与输出维都限制干扰。消融部分将验证只约束一侧时的词错误率与后向迁移变化。

**双侧投影 × 单侧投影：** 双侧投影的分工是同时用左基约束输出维、用右基约束输入维，单侧投影只约束其中一侧，搭配理由是曲率在输入侧与输出侧的影响可以不同，组合意义在于用两侧控制更完整地限制干扰方向，而不仅是为了省内存。

### 训练与构造流程：基何时更新、曲率何时累积？

训练流程没有改变损失函数本身，改变的是优化子空间的构造时机。每个线性层维护 1 对正交基，固定若干步后用当前梯度经曲率过滤再分解的结果刷新。论文主实验取秩为 215，更新间隔为 200 步，并用随机奇异值分解代替精确分解以降低更新开销。优化器采用无调度器的 AdamW，训练轮数与有效批量按实验条件执行。

曲率因子的维护分两个阶段。首次适配前，在初始模型上用旧任务子集估计输入与输出因子并存入中央处理器内存，基更新时才把当前层因子临时搬到图形处理器计算过滤，因此不增加峰值显存，只增加基更新时刻的计算。适配完新任务后，用该任务子集在已适配模型上估计任务相关因子，再与已有因子按加权平均合并，只保留一套运行中的因子用于下一任务。

\[\bm{Q}\leftarrow(1-\alpha)\bm{Q}+\alpha\tilde{\bm{Q}}_{i},\qquad\bm{H}\leftarrow(1-\alpha)\bm{H}+\alpha\tilde{\bm{H}}_{i},\]

其中权重系数控制新旧曲率的混合比例。该设计用紧凑的运行平均代替为每个旧任务单独存因子，避免任务增多时存储线性增长。旧语音在估计完因子后即可丢弃，这与需要长期保存重演样本的方法形成对照。

### 实验条件：模型、数据、基线与内存对齐方式是什么？

模型是 OWSM v3.2 small，含编码器与解码器各 9 层，实验在 ESPnet2 中完成，有效批量 64，训练 20 轮。论文声明代码、配置与数据划分在对应仓库，但本次可核对的资源状态显示未发现完成超文本传输协议状态验证的绑定资源，因此不能写代码已公开或可运行，只能写原文中的仓库地址信息未经本次验证。

两个实验共享初始旧任务，即 Common Voice 中的英语、德语、西班牙语，用于衡量遗忘。实验一适配 L2-Arctic，按口音分为 2 个任务。实验二适配荷兰语 CGN，分为荷兰境内的荷兰语与比利时的荷兰语 2 个任务。基线覆盖全量微调、LoRA、GaLore、BiLoRA 与连续奇异值方法，参数高效方法与 GaLore 类在优化器状态内存上对齐。未胜出项是全量微调在新任务上的上限与按任务存独立模型的参考，后者需要任务标识，不能当作可部署收益。

复现时应先固定上述划分与冻结输出层、只更新线性层的设定，再比较不同适配方法。内存对齐是公平比较的前提，否则平均词错误率差异可能来自预算不同而非防遗忘机制。

### 主结果：新任务学到多少、旧任务忘记多少？

比较问题是在内存预算相近条件下，哪种方法在平均词错误率上实现更好的学习与保持权衡。公平条件是优化器状态内存对齐，指标方向是平均词错误率越低越好，后向迁移越高越好且负值表示遗忘。下表整理论文报告的最终平均结果，基线包含全量微调、GaLore 与参数高效方法中的强对照，策略均为原文实际可运行的训练方式。

| 条件 | 指标 | GaLore 类表现 | 参数高效强基线背景 | 本文方法 |
| --- | --- | --- | --- | --- |
| 实验一 L2 口音适配后全部任务 | 平均词错误率 | 高于 CGaLore | CSSVD 弱于 CGaLore 约 8.3% 相对 | best Average WER of 8.72 |
| 实验一旧任务保持 | 后向迁移 | BWT of -4.7 | 接近 -0.3 | BWT of -0.3 |
| 实验二荷兰语适配后全部任务 | 平均词错误率 | 高于 CGaLore | CSSVD 为背景对照 | best average WER, with 17.68 |
| 实验一学习新任务能力 | 新任务词错误率接近全量微调 | LoRA and GaLore reach new-task WERs close to full fine-tuning | LoRA 遗忘更大 | learning the new tasks better than LoRA+FTA and CSSVD |

表后解释需要同时给出收益与代价。报告显示 CGaLore 在两个实验都取得最低平均词错误率。实验一中它消除 GaLore 约九成遗忘，同时恢复新任务大部分性能差距；实验二中它减少 GaLore 约八成遗忘并保留新任务性能。代价是新任务绝对性能仍略低于全量微调，且实验二的后向迁移略差于连续奇异值方法，说明其优势来自更好的权衡而非两端同时最优。未胜出项是全量微调在新任务词错误率上的上限，以及独立模型作为需要任务标识的非可部署参考，这些上限不能当作可部署收益。

比较问题是 KFAC 估计用的旧任务子集如何影响主任务与未参与估计的 held-out 任务。公平条件是只改变估计数据、保持适配流程不变，指标是旧任务上的词错误率降低量，负值表示遗忘。原文用文字报告了这一消融：从无 KFAC 的 GaLore 切换到使用英语加德语加西班牙语的 CGaLore，主任务与 held-out 任务的遗忘都大幅下降。

具体机制上，论文报告实验一中仅用英语即可明显保护英语，但对西班牙语保护不足；实验二中德语尤为关键，因为新荷兰语任务与德语接近，对德语干扰大，加入德语后德语遗忘显著下降。held-out 任务往往跟随最接近的主任务变化，例如意大利语跟随西班牙语、瑞典语跟随德语。由于本次不对该细节表做逐格复现，本文只保留上述定性对照，以免混淆不同任务与阶段的聚合口径。

未评测边界是若 held-out 语言与估计语言差异更大，保护幅度可能下降，论文未给出全预训练任务覆盖时的结果，因此不能推广为对所有旧任务同等有效。需要复现核对时，应以最终模型在每个任务上的词错误率、平均词错误率与后向迁移三者一致为准，数值相同不代表指标相同。

### 多少旧语音才够用：KFAC 估计的数据量敏感吗？

比较问题是在首次适配中，每旧任务用于 KFAC 估计的语音量从零增加到 28 小时，平均词错误率与遗忘如何变化。公平条件是估计语言固定为英语、德语、西班牙语，只改变时长。指标方向仍是平均词错误率越低越好，后向迁移越高越好。下表用原文连续原句整理关键阈值判断，不逐格追加单位，单位保留在原句表述中。

| 估计数据量区间 | 报告的现象 | 覆盖的指标 | 对比对象 | 教学含义 |
| --- | --- | --- | --- | --- |
| 28 hours to 8.3 minutes per task | average WER and BWT remain nearly unchanged | average WER and BWT | GaLore 无 KFAC 起点 | 少量数据已够 |
| reducing the data to 50 seconds per task | Performance starts to degrade only | 平均词错误率 | 上一档数据量 | 开始退化阈值 |
| at 5 seconds per task | forgetting increases further, still reduces GaLore's forgetting by more than 60% | BWT 后向迁移 | GaLore | 极端仍有效 |

表后解释要给出可操作结论与限制。报告支持少量旧语音即可显著减少遗忘，从 28 小时降到 8.3 分钟影响很小，只有压缩到几十秒以下才明显退化。即使在 5 秒每任务的极端下，仍能减少 GaLore 60% 以上遗忘。这支持基座模型适配中只存几分钟旧语音估计曲率的做法。但限制是该消融只在实验一首次适配上完成，未验证长序列持续累积与更大模型下的稳定性，因此不能当作所有场景的数据下限。

**CGaLore × IHR：** CGaLore 的分工是在训练过程中用曲率引导每次更新的投影基，IHR 的分工是在训练结束后对最终参数位移做 1 次逆曲率事后校正，搭配理由是两者用同一 KFAC 信息但作用阶段不同，组合意义是检验训练中引导能否被事后校正替代，以及两者叠加是否互补。

以下两张图分别展示数据量与更新间隔的像素细节，图前导读先明确坐标与曲线含义，图后解释再结合可见趋势判断好坏。第一张图横轴是每主任务用于 KFAC 估计的语音量，纵轴左侧是平均词错误率、右侧是后向迁移，蓝色为平均词错误率，橙色为主任务后向迁移，绿色为 held-out 任务后向迁移。

> **看图路径：** 1. 先看横轴从 0s 到 28h 的语音量刻度，确认最左端对应无 KFAC 的 GaLore 起点；2. 再对比蓝色平均词错误率左轴下降与橙色主任务 BWT 右轴上升的同步趋势；3. 最后看绿色 held-out 任务 BWT 在 5s 到 50s 区间是否同样快速改善

[![原论文 Fig. 1：Performance of CGaLore as a function of speech used (per task) for KFAC estimation the first…](https://arxiv.org/html/2609.21336v1/kfac_data_plot.svg)](https://arxiv.org/html/2609.21336v1/kfac_data_plot.svg)

*论文图 1。原论文 Fig. 1:：“Performance of CGaLore as a function of speech used (per task) for KFAC estimation the first adaptation of Exp.”。*

从像素可见，最左端零秒对应无 KFAC 起点，蓝色平均词错误率最高，橙色与绿色后向迁移最低。随着语音量增至 5 秒、50 秒，橙色与绿色快速上移，蓝色快速下移。之后从 8.3 分钟到 28 小时曲线趋平，蓝色略有波动但总体保持低位。这支持上表文字结论：少量数据带来大部分收益，更多数据边际改善有限。不能从该图读出精确到小数后 2 位的数值，像素分辨率不支持硬写。

第二张图研究投影基更新间隔的影响，横轴是间隔步数，纵轴同样是平均词错误率与后向迁移，并给出连续奇异值基线。

> **看图路径：** 1. 先看横轴更新间隔 T 从 100 到 20000 的对数式增长；2. 再看蓝色平均词错误率随 T 增大缓慢上移的幅度；3. 最后看橙色 BWT 虚线波动是否保持相对平稳并与黑色 CSSVD 基线对比

[![原论文 Fig. 2：Average WER and BWT as a function of the interval T in CGaLore on first adaptation of Exp.](https://arxiv.org/html/2609.21336v1/update_frequency_tradeoff.svg)](https://arxiv.org/html/2609.21336v1/update_frequency_tradeoff.svg)

*论文图 2。原论文 Fig. 2:：“Average WER and BWT as a function of the interval T in CGaLore on first adaptation of Exp. 2. T determines how often \bmP and \bmR are updated.”。*

从像素可见，蓝色平均词错误率随间隔增大缓慢上升，在 200 步附近最低，之后到 2000 步变化平缓，更大间隔才更明显变差。橙色后向迁移波动较大但总体相对平稳。即使间隔增至两万，平均词错误率仍明显优于黑色虚线基线。这支持论文关于对更新间隔不高度敏感的判断，但趋势不等于每步都单调，解读时应看整体而非单点抖动。

### 效率、间隔与结构：额外曲率是否破坏 GaLore 的省内存优势？

比较问题分 3 组。第一组是训练效率：峰值显存、优化器时间与总训练时间是否因 KFAC 而明显增加。第二组是更新间隔：基更新频率对平均词错误率与后向迁移的影响。第 3 组是投影结构：双侧与单侧投影在内存对齐下孰优。公平条件是单卡、首适配、优化器状态内存对齐，单侧用较小秩以匹配双侧的内存。下表用原文连续原句整理效率结论，保留原文单位与相对倍数写法。

| 对比维度 | 原文报告 | 相对基线 | 含义 | 未测量项 |
| --- | --- | --- | --- | --- |
| 峰值显存 | both use 10.56 GB, slightly below LoRA at 10.90 GB | LoRA 为基线 | 不增加峰值显存 | 推理延迟未测 |
| 优化器时间 | optimizer time 12.6x higher than LoRA | LoRA 为基线 | 基更新变贵但增量小 | 输出帧率未测 |
| 总训练时间 | approximately 11% faster overall, gradient accumulation of 16 | LoRA 为基线 | 总体不慢甚至略快 | 存储成本另计 |
| CGaLore 额外开销 | KFAC multiplication accounts for 19% of the randomized-SVD time | GaLore 为基线 | increasing optimizer time by 1.3% and total training time by only 0.4% | 推理开销未测 |

表后解释需拆分训练资源与推理开销。报告显示 GaLore 与 CGaLore 峰值显存略低于 LoRA，尽管更新的是全量权重。优化器步骤因奇异值分解变贵，但前反向图不变且梯度累积下总时间仍与 LoRA 相当。CGaLore 的 KFAC 乘法只占随机分解时间的一小部分，总时间仅增约千分之四量级。未测量推理延迟与输出帧率，因此不能承诺推理更快，只能说训练期峰值显存与总时间未恶化。

比较问题是事后校正能否替代训练中引导。公平条件是同为实验二首次与第 2 次适配，指标为平均词错误率与后向迁移。下表整理原文报告的事后校正对照，策略均为实际可运行的训练加校正组合。

| 方法组合 | 是否叠加 IHR | 首次适配平均词错误率 | 首次适配后向迁移背景 | 教学含义 |
| --- | --- | --- | --- | --- |
| GaLore 无事后校正 | 否 | 高于 CGaLore | 遗忘较大 | 起点对照 |
| CGaLore 无事后校正 | 否 | CGaLore obtains 16.33 | 遗忘较小 | 训练中引导有效 |
| GaLore 加事后校正 | 是 | GaLore+IHR reaches 16.58 WER | substantially reducing the gap to CGaLore | 事后校正强但未反超 |
| CGaLore 加事后校正 | 是 | CGaLore+IHR further improves to 16.09 | 进一步改善 | 两者互补 |

表后解释显示 IHR 是 GaLore 的强事后校正，大幅缩小与 CGaLore 的差距，但并未使 CGaLore 多余。首次适配后 GaLore 加 IHR 仍弱于 CGaLore，而 CGaLore 再加 IHR 进一步改善。第 2 次适配后两者都加 IHR 时差距反而拉大，支持训练中选基比只校正最终更新能实现更好的学习保持权衡。间隔与结构方面，报告显示间隔 200 步最优，增至 2000 步仅轻微下降，更大间隔主要损伤新任务性能而后向迁移相对平稳。双侧投影优于单侧，只约束输入侧接近双侧，这可能与口音适配中输入激活侧干扰更重要有关，但论文只在该设置验证，待验证是否推广到其他任务类型。

### 还不能承诺什么：模型规模、序列长度与缺失测量有哪些？

论文直接报告的局限包括只在约 367M 参数的单一模型与两任务序列上验证，未评估更大模型与更长任务流。曲率秩在各层统一，未按层自适应分配；基更新时机也未按层自适应，未来可结合梯度漂移与曲率设计分层策略。这些属于有限解释，不是技术错误。

未验证的推测需要明确标记。KFAC 因子用运行平均累积多任务曲率，可能在任务增多时近似误差累积，但原文未测量长序列下的漂移，因此只能说可能需要更稳的累积方式，待验证。held-out 保护可能依赖语言相似性，不能承诺对完全无关的旧能力同样有效。

缺失测量也要点名。原文未报告误判率之外的细粒度错误类型，未测量推理延迟、输出帧率与长期存储曲率因子的中央处理器与磁盘成本。总体平均趋势不等于每组每步都成立，例如实验二中 CGaLore 的后向迁移并未在所有对照上最优。复现时应分别记录训练资源、推理开销与保持指标，避免把训练高效等同于部署高效。

### 复现先做什么：按什么顺序搭出可核对的最小闭环？

先准备数据划分。初始旧任务取英语、德语、西班牙语，新任务按实验一的口音划分或实验二的荷兰境内与比利时荷兰语划分。记录每任务句数与小时数，KFAC 估计先从每任务几分钟语音起步，再逐步增至论文的 28 小时，以复现数据量曲线的前段陡峭改善与后段平稳。

再搭建训练闭环。加载基座模型后冻结输出层，只更新线性层。实现 GaLore 的投影、优化器小空间更新与回映射，确认无 KFAC 时能复现接近全量微调的新任务性能但遗忘较大。之后加入 KFAC 估计、阻尼求逆、过滤与随机分解选基，更新间隔先取 200 步，秩先取双侧 215。每次只改一处，对比平均词错误率与后向迁移。

核对口径时，每个数字同时核对数据集、模型、实验阶段、指标、单位与聚合对象。词错误率用百分比，后向迁移负值表示遗忘，百分点与相对百分比不能混用。不同指标差值不能放入模型列下，自动指标不能当作人工评价。若原文表头与正文算术冲突，应标注冲突而不自行编造划分来圆合。

信息条件上，本次未获得完成验证的开源资源绑定，因此复现前需自行确认仓库链接当前是否可达、权重下载与运行脚本是否完整，区分代码开源、权重可下载与系统可一键运行三件不同的事。

### 何时值得尝试 CGaLore：收束判断与下一步验证

当已发布语音基座模型需要持续适配，且只有少量旧任务语音可用、不便长期保存重演数据时，CGaLore 值得尝试。它保留 GaLore 的峰值显存优势，用训练中曲率引导换取遗忘大幅下降，少量旧语音即可起效，并对未参与估计的相近语言也有一定保护。与事后校正叠加还可进一步改善，说明训练中选基与训练后旋转互补而非互斥。

当新旧任务高度相似且旧任务干扰集中在特定语言时，应优先把该语言纳入 KFAC 估计。当计算预算极紧时，可适当增大基更新间隔，因为间隔在较大范围内退化平缓。当输入侧干扰主导时，双侧或右投影优先于仅左投影，但该结论来自口音适配，换任务需重做消融。

下一步验证应补长序列、大模型与分层秩分配三项，并单独测量推理延迟与曲率存储成本。教学上容易误解的是把低秩优化器等同于低秩参数，把事后校正等同于训练中引导，以及把平均指标改善等同于每个旧任务都改善。按本文给出的阶段、指标与内存对齐条件逐项核对，才能把论文结论复述为可执行的工程选择。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.21336v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-21/)
