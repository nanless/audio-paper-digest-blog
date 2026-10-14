---
title: "Platonic Task Arithmetic"
date: 2026-10-11
draft: false
tags: [音频分类, 迁移学习, LoRA, 多模态学习]
categories: [论文速递]
description: "该文研究不同结构的图文模型之间如何搬运任务能力，用与结构无关的亲和力改变量记录任务，再以最小二乘算子或低秩适配器写入目标，在加法上保留目标自身增益的七到八成，代价是控制集精度下降和在部分任务上几乎无效。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.00929"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "跨模型任务向量：把微调改变量搬到另一个模型上"
paper_digest_original_title: "Platonic Task Arithmetic"
paper_digest_arxiv_version: 2
paper_digest_arxiv_versioned_id: "2610.00929v2"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.00929v2"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.00929v2.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.transfer","label":"迁移学习"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"}]
paper_digest_primary_method: "迁移学习"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "该文研究不同结构的图文模型之间如何搬运任务能力，用与结构无关的亲和力改变量记录任务，再以最小二乘算子或低秩适配器写入目标，在加法上保留目标自身增益的七到八成，代价是控制集精度下降和在部分任务上几乎无效。"
paper_digest_authors: [{"affiliations":["TelePIX"],"name":"Junghwan Park"},{"affiliations":["TelePIX"],"name":"Woojin Cho"}]
paper_digest_abstract_sha256: "af988d661c62ee69cbb9db18a18f5c80354054ef18b8404c27256a7c5bfee824"
paper_digest_sidecars: {"citation.bib":{"sha256":"3b34f580fc28adb38cd5c8b13069d0d3b9db23870b78b8655272013241c0b2c4","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-00929/citation.bib"},"citation.json":{"sha256":"6eaba31722a3a3be3f290d32270a0ff9927bc0226052bd433c8ac7365b21e28a","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-00929/citation.json"},"citation.ris":{"sha256":"c4a4a9513bff19763d4336c73e639f7f156d87d8336c6ef412738801ca8d289d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-00929/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"4a1365ff39b843c1541caeefae6efa8ed158081e6c6ae25ba9499bb192f2cf27","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-00929/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "74f56f02e6af5511864c156bcd2aa614566251590f13ebfca7e4ecf41eb4a407"
paper_digest_api_reader_plan_sha256: "8a3abdeca43d84309e2cda7889d3dbd0dbc73a910ea7c2b990c1c81290eef3b0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "621054d204e5307c8ffeb577b8f60c36486ac29c3ed0b55ded34605d939d0a6f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "880f91fd7776a34ba1531962c788f57998c44a174ce1d22d69564d53b224794c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4f70cf752e8df23451ae24a7fcfe38809fe377d76c909e6185a613b5359fdcd2"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "deeea1e68e67166f763f6daacb968e9bb13217ac0160be20cfd9af92fc4c7cdb"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 跨模型任务向量：把微调改变量搬到另一个模型上

> 英文题目：*[Platonic Task Arithmetic](https://arxiv.org/abs/2610.00929v2)*

> ℹ️ 本文基于论文全文节选生成，超出分析上下文上限的内容未纳入。

> 标签：#音频分类 | #迁移学习 | #LoRA | #多模态学习
>
> 评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.3/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Junghwan Park：TelePIX
- Woojin Cho：TelePIX

## 📌 核心摘要

不同视觉语言模型在同一任务上微调后权重坐标无法直接相加，论文要解决的是把一个模型学到的任务变化搬到架构、维度和语料都不同的另一个模型。输入是源模型的通用任务描述符（Universal Task Descriptor，UTD，一种记录微调前后图像与文本提示间余弦相似度变化的矩阵）、任务的无标注探测图像与类名，输出是目标模型上能复现该变化的编辑。通用任务描述符形状只与探测数和提示数有关，与嵌入维度无关，因此可直接相加与取负。闭式路线把嵌入映射建模为线性算子并用岭回归求解，再折入目标最后一层，多个任务的合成变为算子相加。低秩适配路线在同一目标上直接优化描述符匹配误差，所用适配器为挂在视觉编码器查询与值投影上的低秩增量。跨任意模型族的3360个双任务合成中，闭式解的两个任务准确率相对零样本分别提升18.11和11.63个百分点。在同一3360个合成评测中，闭式跨模型迁移的准确率增益达到目标自身描述符增益的80%和74%，低于自身迁移但保留大部分提升。结论适用于有跨模态亲和度与仿射末层的双编码器，在类别多、自身准确率增益仅约2个百分点的Cars与SUN397上相对零样本的准确率提升失效。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/jhpark-ai/Platonic-Task-Arithmetic> — 暂时无法访问

- 第三方资源：<https://neurips.cc/public/guides/CodeSubmissionPolicy> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 图文模型要解决什么输入输出问题

这篇论文只研究图文对照模型的任务搬运问题，不研究语音合成或纯文本任务。输入是一张图像和一组类别名提示，模型分别用视觉编码器和冻结的文本编码器得到单位向量，再算余弦相似度决定图像属于哪一类。目标是在不复制来源模型权重的前提下，把来源模型学会的任务效果搬到结构不同的目标模型上，同时尽量保留目标原来在无关基准上的行为。必须保留的信息是任务带来的亲和力变化，而不是来源的全部输出；输出是对目标视觉编码器的一个编辑，使其在新任务上变好或删掉指定任务。评价用分类精度，方向是越高越好，控制集上越接近未编辑越好。

### 已有路线为什么搬不动跨结构知识

权重空间任务算术把微调后减去微调前的参数差当作任务向量，加减都在同一套参数坐标下做，一旦换了结构或初始化就无法相加。跨模型传输方法放宽了一部分限制，但仍要求子模块对应或形状匹配，例如在同架构不同宽度之间建映射，或用目标梯度筛选可复用的坐标。另一条线是相对表示和拼接，用锚点相似度或学习连接器对齐预训练表示，但对齐的是表示本身，不是微调带来的改变量。

蒸馏及其关系变体可以跨结构，但拟合的是教师的绝对输出，多个教师的输出相加没有明确含义，否定操作也容易连带破坏无关能力。原文把这些路线放在相同输入、相同目标和相同运行阶段下比较，指出它们在需要无结构对应、无标签、且支持加减的场景下都不直接适用。

### 为什么说权重不同但任务改变量相近

论文的起点是一个观测：6 个模型家族在 8 个任务上微调后，权重更新没有公共坐标系，但图像与文本亲和力的变化却呈现任务特异的一致性。把每个微调诱导的描述子展平为向量后，同一任务不同模型的平均余弦约为 0.473，而同一模型不同任务的平均余弦约为 0.227，前者大约是后者的 2 倍。跨任务比较也不是均匀的低，两个遥感任务之间较高，数字类任务之间中等，无关任务对甚至为负。

这说明描述子记录的是学到了哪个任务，而不只是学过某个任务。基于此，论文提出柏拉图任务向量假设，即存在一个与模型无关的共享任务对象，各模型的权重更新只是它在各自坐标下的影子，跨模型算术应在共享空间中做。

### 从来源描述子到目标编辑分几步走

整体流程分三步。第一步是对每个来源模型和每个任务，读出通用任务描述子，它只与该任务的探测图像和提示有关，与目标结构无关。第二步是把 1 次操作写成若干任务项的带符号组合，加法每项系数为一，否定单项系数为负的强度。第三步是把组合转移到目标，使目标编辑诱导的描述子在每项自己的网格上逼近来源描述子的加权版本。两种实现共用同一匹配目标，区别只在编辑的形式和优化方式。

解析形式把编辑限制为嵌入空间上的线性算子，1 次求解得到算子库，之后组合只是矩阵加法；适配器形式把编辑放在编码器每一层注意力上，对组合项联合做梯度下降，每次编辑都要重新训练。

**任务加法 × 任务否定：** 任务加法把两个任务的描述子都以正系数写入目标，使两个任务精度同时上升；任务否定把单个任务的描述子取负并按强度写入目标，使被删任务精度大幅下降而控制集尽量不动。加法考验两个算子互相干扰时的保持能力，否定考验只删改变量而不破坏原有行为的能力，两者共用同一描述子匹配目标，只是符号和权重不同。

### 描述子记录的是什么改变量

通用任务描述子（Universal Task Descriptor）首次出现时可以这样理解：它是一个行数为探测图像数、列数为提示数的矩阵，每个元素是微调后亲和力减去微调前亲和力。行对应同一张探测图像，列对应同一个类别提示，因此矩阵形状与模型维度和结构无关，不同模型在同一任务网格上可以直接比较。柏拉图任务向量（platonic task vector）是假设中的共享对象，描述子被写成共享分量加模型特有残差的形式。残差并不小，论文估计其范数与共享分量相当，这决定了后续传输必然有损。

**通用任务描述子 × 柏拉图任务向量：** 通用任务描述子是可观测的矩阵，记录某模型微调前后图像与文本亲和力的变化，形状只由探测图像数和提示数决定；柏拉图任务向量是假设中与模型无关的共享任务对象。描述子被看作共享对象在某个模型坐标下的投影加模型特有残差，前者负责跨模型可比，后者解释为何传输有损，两者搭配才让不同模型的任务项可以相加减。

\[\bigl[\operatorname{UTD}^{(k)}_{\tau}\bigr]_{ij}\;=\;\bigl\langle f^{(k)}_{\text{ft}}(x_{i}),\,g^{(k)}(p_{j})\bigr\rangle\,-\,\bigl\langle f^{(k)}_{\text{pre}}(x_{i}),\,g^{(k)}(p_{j})\bigr\rangle.\]

### 匹配目标和线性算子如何构造

转移目标是对每个任务项，把目标编辑诱导的描述子与来源描述子的加权版本做差，按提示数归一化后取平方和。每个探测图像权重相等，不同形状的矩阵从不直接相减，每个任务项只在自己的网格上比较。解析实现进一步把描述子分解为探测特征变化乘提示特征转置，从而把问题化为求嵌入算子。算子求解是带两个岭系数的最小二乘，分别约束探测侧和提示侧，解有闭式并对输入描述子线性。部署时把解得的算子按强度折入目标最后一层投影矩阵，实现对嵌入的线性修正。

**嵌入算子 × 最小二乘求解：** 嵌入算子是作用在目标嵌入空间上的方阵，用于复现来源描述子规定的亲和力变化；最小二乘求解是从目标自身的探测特征和提示特征出发，把期望的描述子反解为算子的计算步骤。算子决定编辑如何落地，求解决定编辑在探测网格上最接近哪个描述子，前者是部署形式，后者是构造方法。

\[\mathcal{L}(\mathcal{E})\;=\;\sum_{\ell=1}^{J}\frac{1}{M_{\tau_{\ell}}}\Bigl\|\operatorname{UTD}_{\tau_{\ell}}[\mathcal{E}]-c_{\ell}\operatorname{UTD}^{(\sigma(\ell))}_{\tau_{\ell}}\Bigr\|_{F}^{2},\]

\[A^{*}(U)\;=\;\argmin_{X}\;\bigl\|F_{\text{pre}}XG^{\top}-U\bigr\|_{F}^{2}+\mu_{b}\bigl\|F_{\text{pre}}X\bigr\|_{F}^{2}+\mu_{a}\bigl\|XG^{\top}\bigr\|_{F}^{2}+\mu_{a}\mu_{b}\|X\|_{F}^{2},\]

\[W_{p}\;\longleftarrow\;(I+\alpha A)\,W_{p},\]

### 没有训练大模型时实际计算了什么

本研究没有从头训练 6 个图文骨干，也没有训练音频骨干，来源微调只是为了提供描述子而做的秩为 4 的低秩微调，文本编码器始终冻结。解析路线的主要计算是每个目标和每个任务做 1 次奇异值分解，之后每个来源描述子只需三次矩阵乘法即可得到库中的一个算子，库建好后组合不再求解。

适配器路线固定秩为 16，装在视觉编码器每层注意力的查询和值投影上，用批量六十四、20 轮、上限 540 步的随机梯度下降拟合匹配目标，初始化处适配器诱导的变化为零。探测图像来自任务训练划分，评测用不相交的测试划分，控制集从不进入探测集。解析路线在单卡上解整个库只需秒级，适配器每个加法单元约 10 分钟，每个否定单元约 4 分钟。

**算子库 × 低秩适配器：** 算子库是每个来源模型与每个任务预先解好的一组算子，之后任意组合只需做带符号矩阵加法并折入最后一层；低秩适配器是装在目标视觉编码器注意力上的可训练小参数，用梯度下降直接拟合同一匹配目标。算子库一次求解多次复用，适配器每次编辑重新优化，前者便宜且可复用，后者更准但每次都要约十分钟量级的训练。

### 模型任务探测集和强度如何固定

6 个视觉家族为 CLIP、OpenCLIP、SigLIP、SigLIP2、MetaCLIP 和 EVA-CLIP，均为大尺寸，互为来源和目标，其中两个带残差头的家族通过头内最后仿射接收编辑。8 个任务包括遥感、纹理、车辆、交通标志、数字和场景等，另用两个基准作控制。每个任务每类取 30 张训练图像作探测池，提示为类别名模板，探测与评测图像不重叠。加法解析形式固定强度为 0.5，适配器按完整描述子实现，否定强度报告 1.0 为主。

基线包括随机描述子、单任务传输、目标自身描述子构成的参照，以及权重算术、权重直接搬运、两种传输方法和梯度上升。音频部分用 4 个结构宽度和深度不同的音频文本模型，组合 2 个任务并用第三个从未进入拟合的数据集测保持。

**探测图像 × 提示地标：** 探测图像是每个任务提供的无标注图像集合，用于读出微调前后的亲和力；提示地标是该任务类别名经目标文本编码器得到的单位向量集合，用于确定亲和力的列方向。描述子的行由探测图像定，列由提示地标定，两者共同组成求解和评价的网格，网格不同则矩阵形状不同，不能直接相加比较。

### 两个任务相加时精度和代价各是多少

加法要回答的问题是：来自两个不同来源的算子相加后，能否同时抬高 2 个任务，又在控制集上付出多少。比较条件是同一批任务对、同一目标、同一强度，指标是两任务精度越高越好，控制集越接近零样本越好。下表是跨家族、跨任务的完整结果，包含零样本、随机描述子、单任务、本文解析形式和目标自身参照，解析形式作用在 0.5 强度，适配器为全强度。表中可见组合同时抬高两任务，但相对单任务有约一点多的干扰代价；随机描述子大幅破坏精度，说明增益来自描述子结构而非范数；目标自身参照最高，说明剩余差距主要来自跨模型残差。

| Method | Task A ↑ | Task B ↑ | CIFAR-100 | ImageNet |
| --- | --- | --- | --- | --- |
| Source and target are the same model (112 cells) |  |  |  |  |
| Zero-shot | 58.70 | 57.96 | 76.95 | 71.50 |
| Weight-space arithmetic | 78.50 | 79.05 | 77.85 | 71.83 |
| Ours, closed form | 83.07 | 76.18 | 76.23 | 70.13 |
| Ours, adapter | 86.85 | 85.87 | 72.40 | 71.49 |
| Different models within one architecture (168 cells) |  |  |  |  |
| Zero-shot | 56.73 | 56.01 | 73.30 | 70.22 |
| Weight-space transport | 56.71 | 55.99 | 73.37 | 70.22 |
| GradFix | 70.48 | 72.86 | 72.77 | 70.39 |
| Theseus | 57.20 | 56.18 | 73.52 | 70.26 |
| Ours, closed form | 77.64 | 71.75 | 71.46 | 66.72 |
| Ours, adapter | 78.71 | 76.03 | 72.17 | 69.89 |
| Different models, any pair of families (3,360 cells) |  |  |  |  |
| Zero-shot | 60.98 | 60.98 | 75.82 | 72.33 |
| Random-UTD | 32.37 | 32.58 | 32.97 | 23.37 |
| Single-A | 80.56 | 59.86 | 75.04 | 71.01 |
| Single-B | 59.45 | 73.85 | 74.88 | 70.51 |
| Ours, closed form | 79.08 | 72.60 | 74.01 | 69.09 |
| Oracle | 83.64 | 76.74 | 75.05 | 71.35 |
| On the adapter’s 168 cells |  |  |  |  |
| Ours, closed form | 79.05 | 72.65 | 73.89 | 68.93 |
| Ours, adapter | 79.50 | 76.70 | 74.00 | 72.15 |

该表跨任意家族的三千多单元显示，解析形式在两任务上相对零样本分别提升约十八点和十一点，控制集分别下降约 1.8 和 3.2。目标自身参照保留的增益更高，跨模型行保留其增益的约八成和七成多。把强度提到 1.0 后，两任务几乎不再上升，而控制集损失迅速扩大，因此全文固定 0.5。适配器在子集上两任务更高，且在其中一个控制集上更接近零样本，但在同模型全强度下会复现微调对控制集的损伤。两个例外任务是车辆和场景，目标自身增益本身只有约两点，传输后几乎为零，说明结论不覆盖这类任务。

### 组合后的点在归一化平面上如何移动

为了看清均值是否掩盖了双峰分布，论文在单个目标上画出每个单元的散点，横轴和纵轴分别是用各自微调上限归一化后的两任务精度。读图时先认清灰色空心为未编辑位置，蓝色实心为组合后位置，若组合有效则点应整体向右上移动。原图确实显示大量点同时向右上移动，单来源编辑无法产生这种双向移动模式。

> **看图路径：** 1. 先看横轴与纵轴分别为任务甲和任务乙按各自微调上限归一化后的精度；2. 再比较灰色空心零样本点与蓝色实心组合后点整体向右上移动的趋势；3. 注意右下角仍有蓝色点停留在低位，说明组合并非对所有任务对都成功

[![原论文 Figure 3：Addition at \\alpha=0.5 on the OpenCLIP-L target, one marker per cell, with each axis normalized…](https://arxiv.org/html/2610.00929v2/addition_pairs.svg)](https://arxiv.org/html/2610.00929v2/addition_pairs.svg)

*论文图 3。原论文 Figure 3:：“Addition at \alpha=0.5 on the OpenCLIP-L target, one marker per cell, with each axis normalized by the per-task fine-tuning ceiling of Table 22.”。*

从像素可见，右上区域聚集了大量蓝色点，左下和中部仍有少量点停留，说明多数单元双任务同时获得提升，但仍有单元停留在接近零样本的网格线上。结合正文按任务的分解，遥感和手写数字等任务提升大，车辆和场景任务提升小，因此该图的右上迁移结论只在多数任务上成立，不能推广到全部 8 个任务。散点未给出误差棒，单点位置也不代表可部署的最优强度。

### 否定操作的选择性随强度如何变化

否定要回答的问题是：把某任务描述子取负写入目标后，被删任务下降多快，控制集能保持多平。比较在固定强度下进行，被删任务越低越好，控制集越高越好。下表按同模型、同架构内、跨任意家族分组报告，包含权重否定和两种传输方法作为同条件参照。选择性只在强度一点附近成立，更大强度下 3 条曲线转为整体退化。

| Method | Removed task ↓ | CIFAR-100 | ImageNet |
| --- | --- | --- | --- |
| Source and target are the same model (32 cells) |  |  |  |
| Zero-shot | 58.33 | 76.95 | 71.50 |
| Weight-space negation | 28.23 | 63.51 | 69.95 |
| Ours, closed form | 22.07 | 74.28 | 67.30 |
| Ours, adapter | 26.43 | 75.64 | 70.21 |
| Different models within one architecture (48 cells) |  |  |  |
| Zero-shot | 56.37 | 73.30 | 70.22 |
| Theseus | 53.87 | 71.81 | 70.51 |
| GradFix | 21.07 | 56.96 | 69.92 |
| Ours, closed form | 22.75 | 68.53 | 62.77 |
| Ours, adapter | 27.84 | 72.71 | 69.51 |
| Different models, any pair of families (240 cells) |  |  |  |
| Zero-shot | 60.98 | 75.82 | 72.33 |
| Ours, closed form | 25.76 | 71.27 | 65.67 |
| On the adapter’s 48 cells |  |  |  |
| Ours, closed form | 26.44 | 70.75 | 64.61 |
| Ours, adapter | 34.93 | 74.06 | 71.59 |
| Each target as its own source, same tasks |  |  |  |
| Closed form | 26.04 | 73.53 | 69.10 |
| Adapter | 31.78 | 74.31 | 71.21 |

跨家族二百四十单元在强度为一时，被删任务下降约三十五点，两个控制集分别下降约四点多和六点多；强度减半则删除约二十三点，控制集仅下降约一点。这说明选择性存在但代价随强度快速上升。读强度扫描曲线时，先看蓝色被删任务陡峭下降，再看两条控制曲线近乎平坦，超过一点后 3 条曲线近乎平行下滑。

> **看图路径：** 1. 先区分蓝色被删任务曲线与黄色和橙色两个控制集曲线的走向；2. 再看横轴否定强度从零到二时三条曲线的相对斜率；3. 注意强度超过一点后控制集也开始下滑，说明选择性在减弱

[![原论文 Figure 2：Accuracy against negation strength.](https://arxiv.org/html/2610.00929v2/negation.svg)](https://arxiv.org/html/2610.00929v2/negation.svg)

*论文图 2。原论文 Figure 2:：“Accuracy against negation strength.”。*

像素显示横轴为否定强度，纵轴为精度，被删任务从约七十多点一路降到接近零样本以下，而两个控制集在前半段保持高位，后半段才明显下滑。适配器删除更浅但保持更好，在其子集上删除约二十六点而控制集只下降约两点以内，说明两种实现在探测网格之外的外推范围不同。权重直接搬运几乎不移动精度，基于对应子模块的传输方法在否定下删除很浅，梯度上升删得最深但把控制集一起带走。

### 没见过的数据集和多任务累积说明什么

未见拟合实验要回答：算子是否只重打了见过的提示列，还是真正改变了表示。做法是用两个遥感数据集的描述子求和，在第三个遥感数据集上评测，被评测数据集的图像和类名都不进入任何拟合。下表按两项来源是否来自同一家族、是否来自两个不同家族、单项和模型内参照分组，指标方向仍是被测集越高越好。公平条件是同一批目标和同一强度。

| Assignment | Route | RESISC45 | UCMerced | AID | Mean |
| --- | --- | --- | --- | --- | --- |
| None | Zero-shot | 68.35 | 74.29 | 68.58 | 70.41 |
| k1 = k2 | Closed form | 71.23 | 84.09 | 72.93 | 76.08 |
|  | Adapter | 71.46 | 85.60 | 72.83 | 76.63 |
| k1 ̸= k2 | Closed form | 71.21 | 84.56 | 73.63 | 76.47 |
|  | Adapter | 71.42 | 85.40 | 73.12 | 76.64 |
| k1 alone | Closed form | 70.69 | 83.33 | 72.51 | 75.51 |
|  | Adapter | 70.63 | 82.18 | 72.80 | 75.20 |
| Within model | Closed form | 72.86 | 86.83 | 74.48 | 78.06 |
|  | Adapter | 73.35 | 90.79 | 76.35 | 80.16 |

两项来自同一他族时闭式平均增益约五点多，单项已贡献约五点，第二项平均只加约 0.6 点；来自两个不同家族时略高，适配器与闭式差距在 0.6 点以内。若编辑只重打见过的提示列，被测集应停留在零样本，而实际全面高于零样本，因此编辑改变的是表示。控制集在所有行最多移动三点，小于被测集增益。模型内参照更高，说明相关任务算子只是部分替代，不能代替任务自身探测。

多任务累积要回答任务数增加时代价由谁承担。读图时先看横轴任务数从一到八，再看纵轴按微调上限归一化的平均精度，各色曲线为不同目标，带状为 3 种排序的 spread。

> **看图路径：** 1. 先看横轴组合任务数从一增加到八时各目标均值曲线的总体走向；2. 再看灰色虚线零样本基线与各曲线带状不确定区间的位置关系；3. 注意红色目标在任务数多时下降更快，说明累积代价与目标有关

[![原论文 Figure 4：Mean accuracy over the J composed tasks, normalized by the per-task fine-tuning ceiling, as the…](https://arxiv.org/html/2610.00929v2/ksweep.svg)](https://arxiv.org/html/2610.00929v2/ksweep.svg)

*论文图 4。原论文 Figure 4:：“Mean accuracy over the J composed tasks, normalized by the per-task fine-tuning ceiling, as the operators of J tasks accumulate on one target at \alpha=0.5, each measured on the…”。*

像素显示均值随任务数基本保持在零样本虚线之上，但红色目标在七到八任务处明显下探，不同目标在控制集上的花费差异远大于获取差异。固定强度下范数随任务数增长，控制集损失线性放大，把强度除以任务数可恢复保持但会降低获取，因此多任务结论依赖于按任务数调整强度的前提。

### 哪些任务和方法边界尚未成立

保证覆盖率的定量表显示，跨网格组合的边际保持条件在约四成八的评测图像上成立，实际被移动预测的约 10%，理论上界宽松约一个量级，且干扰只能在决策边际处预测，算子正交性几乎无预测力。下表报告各目标的保证比例、实际改变量、上界与观测损失，指标为评测图像百分比，加权按划分大小 pooled。比较问题是理论界是否在每个记录上都成立。

| Target | Guaranteed | Changed | Bound | Observed | Single |
| --- | --- | --- | --- | --- | --- |
| CLIP-L | 48.1 | 9.5 | 23.78 | 1.30 | 71.83 |
| OpenCLIP-L | 49.5 | 9.0 | 16.82 | -0.29 | 66.30 |
| Pooled | 47.8 | 9.9 | 22.68 | 1.45 | 70.50 |

四目标 pooled 行保证约四成八，实际改动约 10%，上界约二十二点多而观测损失仅约一点多，且在全部四千多记录上上界都大于观测。按任务看，遥感任务保护最好，街景数字因边际小、场景因扰动常超边际而最差，街景数字与场景是最脆弱的任务。其他边界包括：类比操作在权重空间和本文路线下相对单项几乎无剩余，强度加倍反而跌破零样本；车辆与场景任务增益上限本身很低；解析形式需要末层为仿射并写入嵌入，单模态模型和无语义提示的任务不适用；残差范数与共享分量相当，缩小残差仍是开放问题。

### 复现第一步做什么与资源现状

复现应从探测网格搭起，先固定种子，按每类 30 张从训练划分随机抽取探测图像，用冻结文本编码器得到提示地标，再对来源微调前后分别算亲和力差得到描述子。接着在目标上缓存单位范数探测特征并做奇异值分解，按原文岭系数求解算子库，加法取 0.5 强度求和后折入最后一层，否定取强度一做单项负缩放。关键超参数是探测配额、岭系数、部署强度和否定强度，信息条件是需要任务的无标注探测图像和语义类名，标签不进入拟合。

来源链接本次未能确认可达，第三方指南链接只证明论文提到该政策，不证明作者已开源，因此正文不写作者资源已公开。音频复现需注意同一检查点跨轮不可比特复现，适配器行应以其自身轮次的零样本为基线。

### 什么时候值得尝试还缺哪项验证

当目标与来源结构不同、无对应参数坐标、只有无标注探测图像和类名，且需要同时获得 2 个任务或删掉 1 个任务时，该方法值得尝试；解析形式适合要快速尝试多种组合与强度扫描的场景，适配器适合愿意为每个单元支付 1 次优化以换取更高精度和更好保持的场景。还需补的验证包括：在新领域上增大探测配额是否继续带来增益、在八任务以上累积时按任务数缩放强度的系统扫描、以及在车辆和场景这类低增益任务上残差来源的诊断。

常见误解是把目标自身参照当作可部署提升，它预先知道正确答案使用的就是目标自己的描述子，只能定位误差，不能当作跨模型实际能获得的精度；另一个误解是把均值增益推广到每个任务对，原文已明确部分任务对和部分目标行为不同。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.00929v2)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
