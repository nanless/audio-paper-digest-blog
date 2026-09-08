---
title: "KanAdapter: A Kolmogorov-Arnold Network-based Plug-and-Play Module for Efficient Fine-tuning of Foundation Speech Models"
date: 2026-09-08
draft: false
tags: [说话人验证, Adapter, 音频深度伪造检测, 语音情感识别, 语音]
categories: [论文速递]
description: "针对全量微调语音自监督基座模型代价高、MLP 适配器表达受限的问题，KanAdapter 以并行瓶颈中的 GR-KAN 可学习有理激活替换固定激活，在说话人验证、情感识别与伪造检测上以减少 94.7% 至 97.5% 可训练参数接近全量微调，并在两阶段持续学习上相对全量微调降低 83.6% 错误率。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.05281"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用可学习的分组有理激活替换固定激活：KanAdapter 在语音基座模型上的并行瓶颈适配"
paper_digest_original_title: "KanAdapter: A Kolmogorov-Arnold Network-based Plug-and-Play Module for Efficient Fine-tuning of Foundation Speech Models"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.05281"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.05281.pdf"
paper_digest_primary_task: "说话人验证"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speaker-verification","label":"说话人验证"},{"facet":"method","id":"method.adapter","label":"Adapter"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "Adapter"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对全量微调语音自监督基座模型代价高、MLP 适配器表达受限的问题，KanAdapter 以并行瓶颈中的 GR-KAN 可学习有理激活替换固定激活，在说话人验证、情感识别与伪造检测上以减少 94.7% 至 97.5% 可训练参数接近全量微调，并在两阶段持续学习上相对全量微调降低 83.6% 错误率。"
paper_digest_authors: [{"affiliations":["Dept. of Electrical and Computer Engineering, National University of Singapore"],"name":"Phuong Tuan Dat"},{"affiliations":["School of Computing, National University of Singapore"],"name":"Phuong Khai Minh"},{"affiliations":["Institute of Advanced Intelligence and Computing (IAIC), ASTAR"],"name":"Tran Huy Dat"}]
paper_digest_abstract_sha256: "74a12f5658b8f012930f7ff4c770c5e81e9c3cc6aa359b64fad9651d7bb47126"
paper_digest_sidecars: {"citation.bib":{"sha256":"30722e72d1ff0881c08485d287005b425d4d1fa1efb76ccc16b3c6e460415b72","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-05281/citation.bib"},"citation.json":{"sha256":"7db76f2fddb0ce9976aca4256c84d90ccdb4ac9f4a7302da954153a5dbe5399c","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-05281/citation.json"},"citation.ris":{"sha256":"45e28ce24ffa0b9dd5b41d09b392a47451e32b3ec63facdff8b215b96edb90e5","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-05281/citation.ris"},"rethink-context.json":{"sha256":"fb53a8ab5ad4c11f1c3af9aa22699ee72ce617220b4ac3e56b15ce61ff297c38","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-05281/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "88622aaaf4abd2c45f0b380847343f6de4a14e934e56bdcfdd3bcbeeef430731"
paper_digest_api_reader_plan_sha256: "2291dfb413c899364a6ee75245505745e214e0b29b57cddfd082a04a4d3efa3c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8882f2c59afd07959e3745a60ed266f67440cf9440f35eb4582107fb9af42ad4"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "4d0b2eac5fec5baa511c92a8c14fbf88ed8c12bf8e69b960f6edd414d9c68cbd"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ac015d796351821500707b4edd1319906eb5c23e5677357c6dc9f5c27133136a"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f4647e158c22296387924bfc8320f70b433c8f419620aa0ba881fec325ab73e6"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用可学习的分组有理激活替换固定激活：KanAdapter 在语音基座模型上的并行瓶颈适配

> 英文题目：*[KanAdapter: A Kolmogorov-Arnold Network-based Plug-and-Play Module for Efficient Fine-tuning of Foundation Speech Models](https://arxiv.org/abs/2609.05281)*

> 标签：#说话人验证 | #Adapter | #音频深度伪造检测 | #语音情感识别 | #语音
>
> 评分：**6.4/10** | 创新 1.4/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Phuong Tuan Dat：Dept. of Electrical and Computer Engineering, National University of Singapore
- Phuong Khai Minh：School of Computing, National University of Singapore
- Tran Huy Dat：Institute of Advanced Intelligence and Computing (IAIC), ASTAR

## 📌 核心摘要

语音基础模型需在冻结大规模自监督编码器前提下，仅以少量可训练参数将通用语音表征适配至说话人验证、语音情感识别与深度伪造检测等分类输出，难点在于固定激活的多层感知机瓶颈在紧凑预算下表达受限且跨任务更新易引发遗忘。为此KanAdapter构建并行瓶颈适配链，第一步负责对当前Transformer层中间特征进行层归一化并经下投影压缩至128维瓶颈，生成低维表征并传递至下一步。第二步用于在瓶颈内经分组有理可学习激活的GR-KAN进行非线性变换，提取灵活的单变量有理映射特征并送入下一步。第三步负责经上投影还原至原始维度并以可学习缩放因子与冻结MLP分支残差融合，输出适配后特征进入下一步的后续层，仅更新适配器参数而保持主干冻结。相较固定ReLU的AdaptFormer与无非线性的LoRA，GR-KAN在边上提供分组共享的可学习有理函数，以常数级额外参数提升逼近能力并利用局部支撑缓解跨任务干扰，具有更强的参数效率与抗遗忘意义。在论文报告的评测设置下，本文方法相较AdaptFormer的Equal Error Rate指标从1.44%降至0.52%，方向为更低。适用边界是：该优势在24层深模型如WavLM Large与XLSR-Large上最稳定，对12层浅模型如UniSpeech-SAT与mHuBERT-147差距扩大，且仅在分类任务上验证，对语音识别等序列生成任务及更长连续学习序列尚未验证。成本方面，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的现实问题是什么？输入与输出如何定义？

本论文处理的是语音基座模型的低成本适配问题。输入是原始语音波形或已提取的声学特征，输出取决于下游任务：说话人验证要求判断两段语音是否来自同一说话人，语音情感识别要求对一段语音给出情感类别，语音伪造检测要求判断语音是真实还是合成或篡改。

研究使用的基座是自监督预训练的语音模型，例如 WavLM-Large 与 XLS-R，这些模型在海量无标注语音上预训练后具备可迁移表示，但全量微调需要更新数亿参数，论文指出这在实际部署中计算上不可行。因此目标是在冻结基座的前提下，只训练极小的可插拔模块完成任务适配，并保持接近全量微调的性能。

论文将这种范式称为参数高效微调，英文为 Parameter-Efficient Fine-Tuning，缩写为 PEFT。PEFT 的输入是冻结基座在各 Transformer 编码器层输出的中间特征，输出是与原模型同维度的融合后特征，再送入下游头完成分类或验证。评价时关注 2 个量：任务指标与可训练参数量。

任务指标在验证与伪造检测上为等错误率，英文为 Equal Error Rate，缩写为 EER，越低越好；在情感识别上为宏平均与微平均 F1，越高越好。可训练参数量直接决定训练与存储成本。需要保留的关键信息是：基座不更新、适配器并行插入、瓶颈维度控制容量、以及在 3 个语音任务与跨语料持续学习场景下的对比条件。后续方法与实验都围绕这一输入到输出的适配路径展开。

### 已有路线为何在紧参数预算下受限？KAN 带来了什么不同？

参数高效微调的常见路线包括适配器、LoRA 与提示调优。适配器类方法如 AdaptFormer 在冻结的 MLP 旁并联一个瓶颈模块，结构为下投影、固定激活如 ReLU、上投影；LoRA 将权重更新分解为 2 个低秩矩阵，等价于无非线性的线性瓶颈；提示调优则在输入前拼接可学习 token 嵌入。

论文指出这些方法在语音基座上的迁移仍较少，且现有语音适配器大多基于多层感知机，英文为 Multilayer Perceptron，缩写为 MLP，其固定激活函数限制了在紧参数预算下的函数逼近能力。另一条路线是柯尔莫哥洛夫-阿诺德网络，英文为 Kolmogorov-Arnold Network，缩写为 KAN。

其理论依据是柯尔莫哥洛夫-阿诺德表示定理，指出任意多元连续函数可分解为有限个一元连续函数的组合。原始 KAN 将固定激活从节点移到边上，每条边学习一个一元函数，常用参数化为 SiLU 残差加 B 样条基的线性组合。这种边上可学习激活比 MLP 的固定共享激活更灵活，且由于样条基的局部支撑，更新一个输入区域对其他区域干扰小，因而在持续学习中更抗灾难性遗忘。

然而原始 KAN 的 B 样条在 GPU 上递归计算效率低，且每对输入输出都分配独立激活导致参数随阶数与网格分辨率膨胀，初始化也不满足方差保持。为此分组有理 KAN，英文为 Group-Rational KAN，缩写为 GR-KAN，用分组有理函数替代 B 样条，将输入通道分为若干组、组内共享有理系数、每条边保留独立标量权重，并用安全帕德激活单元实现有理形式，配合拟合已知激活的初始化与方差保持的权重初始化，使其在保持表达力的同时更适合作为 Transformer 前馈的即插替换。论文的 KanAdapter 正是在此背景下，将 GR-KAN 作为瓶颈中的非线性引入语音基座的并行适配器。

### 本文的具体任务设定与基线对比条件是什么？

论文聚焦 3 类语音分类任务的适配。说话人验证在 VoxCeleb2 上训练、在 VoxCeleb1 的 3 个子集 Vox1-O、Vox1-E、Vox1-H 上测试，难度递增；语音情感识别在 MSP-Podcast 上训练与测试，报告验证集与测试集的 F1-Macro 与 F1-Micro；语音伪造检测在 ASVspoof2019 LA 上训练，在 ASVspoof2021 LA、DF、ASVspoof5 LA 以及真实场景来源的 In-The-Wild 上评估，均为跨语料测试。

持续学习评估则先在 ASVspoof2019 上训练，再在 ASVspoof5 上微调，考察对旧任务 LA19、LA21、DF21 的保持能力。对比的基线包含 3 类实际可运行策略：全量微调更新全部基座参数；AdaptFormer 采用下投影、ReLU、上投影的并行瓶颈；LoRA 采用低秩分解的线性瓶颈。

所有 PEFT 方法在实验中统一瓶颈维度为 128，并对每个 Transformer 编码器层插入适配器，缩放因子对 AdaptFormer 与 KanAdapter 设为 0.1、对 LoRA 设为 0.5，以保证比较条件一致。论文未报告人类主观评价，仅使用上述自动指标，且未对指标做统计显著性检验的详细说明。

需要明确的是，本文不涉及语音识别等序列生成任务，也不涉及图像或文本基座的训练，仅在讨论中提及未来可迁移性。因此后续结果的适用边界应限于所述 3 类语音分类任务与所用基座规模。

### KanAdapter 的整体插入位置与数据流是怎样的？

KanAdapter 遵循并行瓶颈设计，保留每个 Transformer 编码器块中原始冻结的 MLP 分支，额外并联一条可训练分支。沿单样本走一遍：输入语音经冻结的声学编码器得到层间特征，进入第 l 层的注意力子层后得到中间特征 x'_l，该特征经层归一化后分 2 路，一路走冻结 MLP 得到原始变换，另一路走 KanAdapter 分支得到适配特征，最后以可学习标量 s 加权的残差方式与原始输入相加，输出 x_l 进入下一层。

整个基座权重保持冻结，仅分支内参数参与梯度更新。这种并行而非串行的安排理由在原文中明确：保留原始 MLP 路径可维持预训练行为的稳定性，适配分支从零输出起步逐步引入任务特化变换，避免训练初期对表示的剧烈扰动。

**参数高效微调 × GR-KAN：** 参数高效微调的分工是冻结语音基座主干、只训练轻量分支以降低可训练参数；GR-KAN 的分工是用分组共享的有理函数提供可学习的边上激活以提升表达力。二者搭配的理由是仅靠固定 ReLU 的瓶颈在紧参数预算下容量不足，而 GR-KAN 在相同瓶颈维度下提供更灵活的非线性；组合后形成并行瓶颈适配器，在不改动预训练权重的前提下实现更高效的任务适配。

下图展示了标准 Transformer 层与插入 KanAdapter 后的结构对比，以及分支内部的放大视图，可据此核对冻结与可训练模块的划分与残差融合点，图前需先理解并行插入的整体意图，图后需回到分支内部的计算细节。

> **看图路径：** 1. 对比 a) 标准 Transformer 层与 b) 插入 KanAdapter 后的并行结构，确认冻结与可训练模块的颜色区分；2. 沿 c) 放大部分追踪输入经 LayerNorm 与下投影进入 GR-KAN 再经上投影与缩放 s 融合的完整箭头；3. 观察残差加法节点如何将冻结 MLP 输出、适配分支输出与原始输入 3 路汇合

> **论文图 1（像素未随页面持久化）**：Figure 1: The proposed architecture: a) Standard Transformer layer b) AdaptKANFormer architecture c) KanAdapter.

*论文图 1。原论文 Figure 1:：“The proposed architecture: a) Standard Transformer layer b) AdaptKANFormer architecture c) KanAdapter.”。*

从图中可见，蓝色为冻结模块，橙色为可训练模块。左侧 a 为标准层，包含 2 次层归一化与多头注意力、MLP 的 2 级残差；中间 b 将 MLP 旁的 KanAdapter 与层归一化框为虚线并联分支；右侧 c 放大该分支，显示输入经 GR-KAN 与上下投影后经缩放 s 与 MLP 输出汇合。理解该图后即可进入分支内部的组件计算，重点是下投影降维、GR-KAN 有理变换与上投影升维的顺序。

### GR-KAN 瓶颈内部如何计算？关键公式的符号与目标是什么？

KanAdapter 分支内部采用低秩瓶颈加 GR-KAN 非线性的组合。先将层归一化后的特征与下投影矩阵相乘降维，再经 GR-KAN 的分组有理变换，最后经上投影升维回原始维度。GR-KAN 本身的实现是先对输入做分组有理函数变换，再做线性投影，等价于权重矩阵与分组有理输出的乘积。

分组有理函数的核心是用有理式替代 B 样条。每个一元函数被参数化为分子为多项式、分母为 1 加绝对值多项式的比值，再乘以可学习标量 w。分子系数与分母系数为可学习参数，分组机制将输入通道分为 g 组、每组共享同一套有理系数，但每条边保留独立 w，从而将独立激活数从输入乘输出降至组数，参数量接近标准 MLP 仅增加常数开销。

有理函数用霍纳法求值，论文报告在分子 5 次、分母 4 次时每次求值约 21 次浮点运算，远低于等价 B 样条的 204 次。初始化上先拟合已知激活如恒等与 Swish 以确定有理系数，再按方差保持原则初始化 w，保证深层梯度稳定。以下 3 条公式分别对应有理激活形式、分支前向与残差融合，需先明确符号再看计算目标。

\[\phi(x)=w\cdot F(x)=w\cdot\frac{a_{0}+a_{1}x+\cdots+a_{m}x^{m}}{1+|b_{1}x+\cdots+b_{n}x^{n}|}\]

该式中 x 为单通道输入，a 为分子系数，b 为分母系数，m 与 n 为阶数，w 为边权重，F 为有理基函数，目标是提供 GPU 友好的可学习一元非线性。

\[\tilde{\mathbf{x}}_{\ell}=\text{GR-KAN}(\text{LN}(\mathbf{x}^{\prime}_{\ell})\cdot\mathbf{W}_{\text{down}})\cdot\mathbf{W}_{\text{up}}\]

该式中 x'_l 为第 l 层注意力后的中间特征，LN 为层归一化，W_down 与 W_up 为下投影与上投影矩阵，GR-KAN 为上述分组有理变换，输出为适配特征，目标是在低维瓶颈中完成表达力更强的非线性变换。

\[\mathbf{x}_{\ell}=\text{MLP}(\text{LN}(\mathbf{x}^{\prime}_{\ell}))+s\cdot\tilde{\mathbf{x}}_{\ell}+\mathbf{x}^{\prime}_{\ell}\]

该式中 MLP 为冻结分支，s 为可学习缩放因子，x'_l 为残差起点，目标是将冻结变换与适配变换加权融合，保持预训练行为的同时引入任务特化。

**冻结主干 × 并行残差分支：** 冻结主干的分工是保留预训练语音表示的通用性并不产生梯度；并行残差分支的分工是与冻结 MLP 并联提供可训练的任务特定变换。二者搭配的理由是串行插入会改变主路径分布、并行则保留原始通路并以加法融合；组合后仅更新分支内的下投影、GR-KAN 系数、上投影与缩放因子，实现即插即用。

### 训练时哪些参数更新？如何初始化与优化？

训练阶段的安排是：加载预训练基座权重后完全冻结，仅更新 KanAdapter 分支内的参数，包括下投影矩阵、上投影矩阵、GR-KAN 的有理系数与每条边的标量权重，以及残差缩放因子 s。梯度仅在该分支内流动，不经过冻结的 MLP 与注意力权重，监督来源为各下游任务的既有目标函数，论文沿用各任务公开框架的默认训练配置，未额外引入新的损失项。

初始化策略在原文中有明确说明：下投影权重从对应预训练 MLP 层权重迁移而来，上投影权重零初始化，有理系数通过拟合已知激活预先确定，w 按正态分布以方差保持方式初始化。零初始化上投影的理由是使分支在训练起点输出为零，完整保留原始模型行为，优化轨迹更稳定；权重迁移则提供与预训练分布一致的起点。缩放因子 s 初始化为 0.1，与 AdaptFormer 一致。

优化与硬件方面，所有实验在 NVIDIA A40 上进行，基于 WeSpeaker、XLSR-Conformer 与 MSP-Podcast 共 3 个公开代码库实现，遵循各自默认的训练超参数。论文未报告具体的学习率调度、批次大小与训练轮数的统一数值，也未报告梯度裁剪或权重衰减的细节，因此复现时需以对应代码库的默认配置为准。

需要指出，本文未训练新的基座模型，仅训练适配器与下游头，属于典型的冻结主干加轻量分支的训练范式。

**零初始化上投影 × 缩放因子：** 零初始化上投影的分工是在训练起点让适配分支输出为零，保持与原始冻结 MLP 完全一致的前向行为；缩放因子 s 的分工是控制适配特征与冻结 MLP 输出融合时的残差强度。二者搭配的理由是既要稳定优化轨迹、避免初始扰动，又要可学习地调节适配幅度；组合后实现从恒等映射平滑过渡到任务特化表示。

### 实验在哪些数据、基座与指标上进行？条件如何对齐？

基座选择上，说话人验证与情感识别采用 WavLM-Large，伪造检测采用 XLSR-Large，对应下游头分别为 WavLM-ECAPA、带注意力统计池化的 WavLM 以及 XLSR-Conformer。消融中还考察了 WavLM Large、UniSpeech-SAT 与 mHuBERT-147 共 3 种不同深度与规模的基座，以检验适配器对深浅模型的泛化。

所有 PEFT 方法对每个 Transformer 编码器层插入适配器，瓶颈维度统一为 128，确保参数量可比。数据划分上，说话人验证用 VoxCeleb2 训练、VoxCeleb1 的 3 个子集测试；情感识别用 MSP-Podcast 的自然播客录制，报告验证与测试 2 个阶段；伪造检测用 ASVspoof2019 LA 训练、ASVspoof2021 LA 与 DF、ASVspoof5 以及 In-The-Wild 做跨语料与真实场景评估。

持续学习为 2 阶段序列：先在 ASVspoof2019 上训练，再在 ASVspoof5 上微调，评估对早期任务的保持。指标上，验证与伪造检测用 EER，数值越低表示在误接受与误拒绝平衡点上错误越少；情感识别用 F1-Macro 与 F1-Micro，前者对类别平均、后者对样本平均，越高越好。

论文未报告多次随机种子的均值与方差，也未报告统计检验，因此单次运行的数值差异需谨慎解读为趋势而非严格显著性。硬件与框架的对齐已在前节说明，保证了不同适配器在相同数据流水与优化配置下的公平比较。

### 主结果：与全量微调和 MLP 适配器相比，性能与参数如何权衡？

主结果围绕 3 个问题组织：是否接近全量微调、是否优于同参数量的 MLP 适配器、以及在跨语料与真实场景上的泛化。所有比较均在相同瓶颈维度与插入位置下进行，指标方向已在前节明确。

在说话人验证上，需要比较全量微调、LoRA、AdaptFormer 与 KanAdapter 在 Vox1-O、Vox1-E、Vox1-H 上的 EER 与可训练参数量。全量微调为性能上界但参数最多，2 种 PEFT 基线参数更少但错误率显著升高，KanAdapter 以略高于 AdaptFormer 的参数取得最接近全量微调的错误率。

| 模型 | 可训练参数 | Vox1-O EER (%) | Vox1-E EER (%) | Vox1-H EER (%) |
| --- | --- | --- | --- | --- |
| 全量微调 | 364M | 0.49 | 0.44 | 1.58 |
| LoRA | 4M | 2.25 | 2.19 | 3.27 |
| AdaptFormer | 8M | 1.44 | 1.35 | 2.70 |
| KanAdapter | 9M | 0.52 | 0.50 | 1.93 |

该表显示 KanAdapter 在 3 个子集上分别取得 0.52%、0.50% 与 1.93%，相对全量微调的差距仅 0.03、0.06 与 0.35 个百分点，而可训练参数减少 97.5%。相比之下，LoRA 虽仅 4M 参数但 EER 超过 2%，AdaptFormer 为 1.44% 至 2.70%，说明线性低秩与固定 ReLU 瓶颈在紧预算下容量不足。代价是 KanAdapter 比 AdaptFormer 多 1M 参数，但换来错误率的大幅下降，权衡上收益远大于开销。未胜出项为 LoRA，其在所有子集上均为最差，提示纯线性分解不适合说话人验证的细粒度区分。

在情感识别上，关注验证集与测试集的 F1-Macro 与 F1-Micro。KanAdapter 在验证集上 F1-Macro 为 0.5127、F1-Micro 为 0.3436，测试集上为 0.3290 与 0.3180，接近全量微调的 0.5279、0.3433 与 0.3321、0.3201，且在验证集 F1-Micro 上略超全量微调，参数减少 95.2%。

| 模型 | 可训练参数 | 验证集 F1-Macro | 验证集 F1-Micro | 测试集 F1-Macro | 测试集 F1-Micro |
| --- | --- | --- | --- | --- | --- |
| 全量微调 | 331M | 0.5279 | 0.3433 | 0.3321 | 0.3201 |
| LoRA | 8M | 0.3126 | 0.2011 | 0.1822 | 0.1794 |
| AdaptFormer | 14M | 0.4123 | 0.2742 | 0.2310 | 0.2040 |
| KanAdapter | 16M | 0.5127 | 0.3436 | 0.3290 | 0.3180 |

该表支持的判断是：MLP 瓶颈与线性分解在情感分布复杂的任务上建模能力不足，测试集上两者 F1 均低于 0.24，而 GR-KAN 的可学习有理激活提供了更强的非线性表达。限制是情感识别的绝对 F1 仍不高，测试集上所有方法均在 0.33 左右，说明任务本身难度大，适配器仅能接近而非超越全量微调的上限。

在伪造检测上，考察域内与跨语料、真实场景的 5 组 EER。全量微调在 LA19 上 0.27% 为最优，KanAdapter 以 0.34% 紧随其后，跨语料上优势更明显，且在 In-The-Wild 上以 7.96% 超越全量微调的 8.34%，提示约束适配起到了隐式正则作用。

| 模型 | 可训练参数 | LA19 EER (%) | LA21 EER (%) | DF21 EER (%) | LA5 EER (%) | ITW EER (%) |
| --- | --- | --- | --- | --- | --- | --- |
| 全量微调 | 319M | 0.27 | 1.21 | 4.26 | 15.38 | 8.34 |
| LoRA | 9M | 2.77 | 5.72 | 6.09 | 24.65 | 10.94 |
| AdaptFormer | 15M | 0.53 | 4.93 | 6.51 | 19.55 | 10.21 |
| KanAdapter | 17M | 0.34 | 1.32 | 5.93 | 18.40 | 7.96 |

该表显示 KanAdapter 在 LA21 上相对 LoRA 与 AdaptFormer 分别降低 76.9% 与 73.2% 相对错误率，且仅比全量微调高 0.11 个百分点。代价是参数比 AdaptFormer 多 2M，但跨语料与真实场景的泛化收益显著。未胜出项仍为 LoRA，在所有 5 组上均为最差，进一步支持固定激活与线性分解在捕捉细粒度伪造痕迹上的不足。

**有理激活的局部性 × 灾难性遗忘：** 有理激活的局部性分工是参数更新仅影响输入空间的特定区域，类似样条基的局部支撑；灾难性遗忘的分工是新任务训练覆盖旧任务表示。二者搭配的理由是全局线性低秩更新会无差别重写各层表示，而局部激活使新数据适配时对旧区域干扰最小；组合后在 ASVspoof2019 到 ASVspoof5 的持续学习中显著保留旧任务性能。

### 瓶颈维度与基座深度如何影响效率与泛化的权衡？

消融围绕 2 个可操作问题：瓶颈维度是否越小越好，以及适配器是否对不同深度基座同样有效。2 个问题分别对应容量与正则的权衡，以及深层与浅层模型的适配空间差异。先看瓶颈维度的影响。

论文在伪造检测上对比 512、256、128、64 共 4 档，观察 LA19、LA21、DF21 与 LA5 的 EER 变化。预期是过大瓶颈削弱正则、过小瓶颈限制容量，存在最优中间值。

**瓶颈维度 × 隐式正则：** 瓶颈维度的分工是控制下投影与上投影之间的中间宽度，直接决定适配器容量与参数量；隐式正则的分工是通过约束容量防止对跨语料伪造痕迹过拟合。二者搭配的理由是过大瓶颈会削弱正则、过小瓶颈会限制表达；组合后在伪造检测上呈现 128 维最优、512 维与 64 维均退化的 U 型曲线，说明适度约束本身即是正则手段。

下图展示了 4 条评估集曲线随瓶颈维度变化的趋势，可据此判断最优维度与退化边界，图前需确认横轴为瓶颈维度、纵轴为等错误率，图后需结合数值解释 U 型规律。

> **看图路径：** 1. 确认横轴为瓶颈维度 512 到 64、纵轴为等错误率百分比，区分 LA19、LA21、DF21、LA5 共 4 条曲线；2. 观察所有曲线在 128 处达到最低点、向两侧回升的 U 型趋势；3. 对比 LA5 灰色曲线数值幅度显著高于其他 3 条，验证跨语料难度差异

> **论文图 2（像素未随页面持久化）**：Figure 2: Performance with bottleneck dimension \hat{d}.

*论文图 2。原论文 Figure 2:：“Performance with bottleneck dimension d.”。*

从像素可见，横轴为瓶颈维度从左到右 512 至 64，纵轴为等错误率百分比。4 条曲线均在 128 处取得最低点：LA5 从 22.18% 降至 18.40% 再回升至 19.89%，DF21 从 7.28% 降至 5.93% 再回升至 6.37%，LA21 从 1.67% 降至 1.32% 再回升至 1.52%，LA19 从 0.68% 降至 0.34% 再回升至 0.72%。这支持论文的判断，即 128 为兼顾容量与正则的最佳点，512 时即使仍具竞争力但泛化较差，64 时容量成为瓶颈。

图中 LA5 曲线整体高于其他 3 条，说明该跨语料集难度更高，但 U 型趋势一致，表明结论不依赖单一评估集。再看基座泛化。论文在 WavLM Large、UniSpeech-SAT 与 mHuBERT-147 上对比全量微调与 KanAdapter 在 LA21 与 DF21 上的 EER。WavLM Large 为 24 层深模型，另 2 者为 12 层浅模型。

| 基座模型 | 模式 | 可训练参数 | LA21 EER (%) | DF21 EER (%) |
| --- | --- | --- | --- | --- |
| WavLM Large | 全量微调 | 333M | 4.07 | 11.25 |
| WavLM Large | KanAdapter | 17M | 4.19 | 11.76 |
| UniSpeech-SAT | 全量微调 | 111M | 17.46 | 28.46 |
| UniSpeech-SAT | KanAdapter | 10M | 19.76 | 31.45 |
| mHuBERT-147 | 全量微调 | 112M | 21.20 | 16.48 |
| mHuBERT-147 | KanAdapter | 10M | 24.56 | 20.44 |

该表显示 KanAdapter 在深模型上差距最小，仅 0.12 与 0.51 个百分点，参数减少 94.9%；在浅模型上差距扩大至 2.30 与 2.99 个百分点以及 3.36 与 3.96 个百分点，说明可用适配层数越少、整体适配容量越受限。尽管如此，浅模型上仍能以约 91% 参数减少保持可用性能，支持其作为轻量替代的价值，但也提示最优效率-性能权衡更倾向于深而大的基座。

持续学习的消融进一步验证了局部性假设。在 ASVspoof2019 后接 ASVspoof5 的 2 阶段微调中，KanAdapter 在 LA19、LA21、DF21、LA5 上分别取得 0.86%、3.59%、2.76%、6.75%，而全量微调为 5.25%、4.74%、6.92%、8.60%，AdaptFormer 为 4.94%、4.24%、3.38%、11.11%，LoRA 为 7.19%、9.64%、9.28%、20.11%。

| 模型 | LA19 EER (%) | LA21 EER (%) | DF21 EER (%) | LA5 EER (%) |
| --- | --- | --- | --- | --- |
| 全量微调 | 5.25 | 4.74 | 6.92 | 8.60 |
| LoRA | 7.19 | 9.64 | 9.28 | 20.11 |
| AdaptFormer | 4.94 | 4.24 | 3.38 | 11.11 |
| KanAdapter | 0.86 | 3.59 | 2.76 | 6.75 |

该表显示 KanAdapter 在 LA19 上相对全量微调降低 83.6%、相对 AdaptFormer 降低 82.6%，且在全部 4 组上均为最优，而 LoRA 甚至差于全量微调，支持全局低秩更新更易覆盖旧知识的解释。限制是该评估仅为 2 阶段序列，未考察更长任务序列与更广基准，抗遗忘的普适性仍待验证。

### 哪些结论尚未得到直接验证？适用边界在哪里？

论文在局限性部分明确指出了 4 点未验证或边界。首先，GR-KAN 相对 MLP 的表达力优势仅通过下游任务性能体现，未通过频谱、频带或表示层面的针对性分析直接探测可学习有理激活为何有效，因此机制解释仍属有限支持而非直接证明。

其次，收益在大型深层基座上最显著，对于 UniSpeech-SAT 与 mHuBERT-147 等浅层模型，KanAdapter 与全量微调的差距明显扩大，说明其并非在所有规模基座上都能等效替代。第三，评估集中于语音分类任务，即说话人验证、情感识别与伪造检测，未涉及语音识别等序列生成任务，也未在图像、视频或大语言模型上验证，尽管作者认为即插即用特性可直接迁移，但跨模态与生成任务的适用性仍属待验证推测。

第四，持续学习仅评估了 ASVspoof2019 到 ASVspoof5 的 2 阶段设置，未测试更长任务序列与更广泛的基准，难以全面刻画对灾难性遗忘的抵抗能力。此外，论文未报告多次随机种子的方差、统计显著性检验、训练与推理的延迟或能耗等成本指标，也未提供输出帧率等部署细节。

因此在宣称效率时应区分可训练参数减少与实际训练时间、推理开销与延迟的不同维度，避免将参数效率直接等同于端到端加速。总体趋势不代表每组评估集或每一步训练都单调成立，需结合具体任务与基座深度判断是否值得尝试。

### 若要复现与核对，应按什么顺序检查哪些信息？

复现时应先对齐数据与基座条件。说话人验证需准备 VoxCeleb2 训练集与 VoxCeleb1 的 3 个子集测试，情感识别需 MSP-Podcast 的官方划分，伪造检测需 ASVspoof2019 LA 训练、ASVspoof2021 LA 与 DF、ASVspoof5 与 In-The-Wild 测试。

基座分别加载 WavLM-Large 与 XLSR-Large 的公开权重，对应下游头使用 WeSpeaker 的 ECAPA、MSP-Podcast 代码库的注意力统计池化以及 XLSR-Conformer 仓库的实现，并沿用各框架的默认训练配置。再核对适配器实现细节。对每个 Transformer 编码器层插入并行分支，分支结构为层归一化、下投影、GR-KAN、上投影，瓶颈维度设为 128，缩放因子 s 对 KanAdapter 与 AdaptFormer 设 0.1、对 LoRA 设 0.5。

初始化上，下投影从对应预训练 MLP 权重迁移，上投影零初始化，有理系数拟合恒等与 Swish 等已知激活后确定，w 按方差保持的正态分布初始化。训练时冻结全部基座参数，仅更新分支内参数与 s，监督来源为各任务默认损失。核对指标时注意单位与聚合对象。EER 为百分比，越低越好；F1 为小数，越高越好。

核对时需同时确认数据集、模型、实验阶段与指标的一致性，避免将验证集与测试集、LA19 与 LA21 等不同评估集的数值混比。论文未公开完整的超参数表与随机种子策略，复现时应以代码库默认值为准，并记录多次运行的方差以补充原文未报告的统计信息。

代码与权重方面，论文基于公开框架实现，但未在正文中给出统一的代码仓库链接，复现需自行整合上述 3 个代码库。最后核对持续学习流程。先在 ASVspoof2019 上训练至收敛，再在 ASVspoof5 上微调，评估对 LA19 等早期任务的保持，避免将单阶段微调结果与 2 阶段结果混淆。

### 何时值得尝试 KanAdapter？还有哪些验证值得补充？

综合来看，当已拥有大型深层语音基座且希望以极小可训练参数接近全量微调时，KanAdapter 是值得尝试的方案。其在 3 类语音分类任务上均显示出接近全量微调的性能，同时大幅减少可训练参数，并在跨语料与真实场景上展现出隐式正则带来的泛化优势。

在需要持续适配新伪造类型或新域数据、且需保留旧任务能力的场景中，其基于有理激活局部性的抗遗忘特性提供了额外价值。尝试前应先确认适用条件：基座深度是否足够提供多层适配空间，任务是否为分类而非序列生成，以及是否有与原文一致的评估集与指标。

复现时优先完成冻结主干、并行分支、分组有理激活与零初始化上投影的完整链路，再在 128 瓶颈维度下验证 U 型曲线是否存在。值得补充的验证包括：对有理激活的表示层分析，例如频带敏感性或特征可视化，以直接支撑表达力假设；在更长任务序列与更多基座上的持续学习评估，以检验抗遗忘的普适性；以及对训练时间、推理延迟与能耗的实测，区分参数效率与系统效率。

论文已指出这些边界，后续工作可在保持即插即用优势的同时，补齐机制解释与部署成本的实证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.05281)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-08/)
