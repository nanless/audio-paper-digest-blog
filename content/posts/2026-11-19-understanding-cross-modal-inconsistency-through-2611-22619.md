---
title: "Understanding Cross-Modal Inconsistency through Representation Subspaces in Omni Models"
date: 2026-11-19
draft: false
tags: [通用多模态问答, 激活因果干预, 表示探测, 可解释性]
categories: [论文速递]
description: "论文把答案位置表示拆成三维答案子空间与其正交补余，发现能否预测音频与图像答案分歧的信息主要在补余中的二维方向上，而真正能改变答案和制造分歧的是对答案子空间的非对称扰动，六个模型任务条件下可复现但只在足够扰动强度下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.22619"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "跨模态不一致藏在哪里：Omni 模型答案位置的两种表示分工"
paper_digest_original_title: "Understanding Cross-Modal Inconsistency through Representation Subspaces in Omni Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.22619v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.22619v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.22619v1.pdf"
paper_digest_primary_task: "通用多模态问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.generic-multimodal-qa","label":"通用多模态问答"},{"facet":"method","id":"method.activation-intervention","label":"激活因果干预"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"}]
paper_digest_primary_method: "激活因果干预"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把答案位置表示拆成三维答案子空间与其正交补余，发现能否预测音频与图像答案分歧的信息主要在补余中的二维方向上，而真正能改变答案和制造分歧的是对答案子空间的非对称扰动，六个模型任务条件下可复现但只在足够扰动强度下成立。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Seonghyeon Cho"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chanjun Park"}]
paper_digest_abstract_sha256: "815f73660d9184b5872c85a9fe5e015af4121c39b2998dc19b196359c610c167"
paper_digest_sidecars: {"citation.bib":{"sha256":"a8825c90503829452911f7ac887eb5e0022246fd8e8db3ee83dde4b965b7677c","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22619/citation.bib"},"citation.json":{"sha256":"7575cb46eb0b27d08e3c9f9f62d0b714c689c6ae76a761df29edd168198c50a3","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22619/citation.json"},"citation.ris":{"sha256":"c1d7f51340e4970e9c06d64aad503bed50196a287af493cc09f1ed6bf5f40dff","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22619/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"74b95450472a423aaee9d092b96b3affd16e7f653bc61599ce967eb22b1d3dcd","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22619/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "dcb7ccffb9f2d0e2a56e48619a46886917cd5e6db7f54b2eeb8bad219315fa58"
paper_digest_api_reader_plan_sha256: "9aa1ccbb7ab806a6be4eeaa245766e88efec061d817edaf2ebd4c54d4a9099e9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "afe0e0ec9108c7471712b844ca90f28f3f4342bd4187189d4fb4360b70f8da1b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "c81aa0261b73d4d7438f744de808585500c8e53fc1c0ad66813f3d56be59034f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "b3f0c9ea6335bb01a0b6c510799ab4bcb6b52c40df0042d83fbe9caff714ed20"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c1b040c4c338377761c0ebfa9b95f29e03d4daf9c0c5df5c3c9437e628db287b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 跨模态不一致藏在哪里：Omni 模型答案位置的两种表示分工

> 英文题目：*[Understanding Cross-Modal Inconsistency through Representation Subspaces in Omni Models](https://arxiv.org/abs/2611.22619v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[通用多模态问答](/audio-paper-digest-blog/papers/?concept=task.generic-multimodal-qa)
- **研究方法**：[激活因果干预](/audio-paper-digest-blog/papers/?concept=method.activation-intervention)；[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **研究重点**：[可解释性](/audio-paper-digest-blog/papers/?concept=research_focus.interpretability)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Seonghyeon Cho：机构信息未能在本次解析中与作者逐人可靠绑定
- Chanjun Park：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

统一语言骨干同时处理音频、视觉与文本的模型常对语义相同的跨模态输入给出不同选项，难点在于不同模态的内部表示同时混入模态身份、语义与答案信息，直接比较整体表示难以定位与答案形成有关的分量。先取答案生成位置的隐状态，用答案探针估计可线性解码当前预测的三维答案子空间，提取答案相关分量。再把该分量从隐状态中去除，将剩余表示作为正交补输出并送入不一致探针，该探针以两模态残差及其差拼接为输入训练二分类并对其系数矩阵做奇异值分解，输出前两个右奇异向量张成的二维不一致预测子空间。最后用匹配幅度的加性移位干预分别扰动上述两子空间，比较改变预测的行为效应以区分可解码与起因果作用的表示。在三个Omni模型与XModBench空间和外部两类任务构成的六种条件下，最终层互补表示的不一致探针平衡准确率为0.659–0.725，超过答案子空间内表示0.042–0.225。而答案子空间干预在最大幅度改变0.83–1.00的预测，不一致预测子空间干预则与同维随机子空间一样几乎不改变预测。仅扰动单模态答案子空间在60个初始一致条目上诱发0.767–1.000的不一致，同等扰动双模态仅诱发0.050–0.250。结论适用范围限于解码器前共享骨干、答案字母位置与推理期加性干预，较小幅度下非对称诱发效应消失，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### Omni 模型要解决什么样的多模态输入问题

Omni 模型指把音频、图像、文本等多种模态先用各自编码器转成可输入语言主干的表示，再在共享的语言主干中统一推理并生成回答的模型。这类模型被期待用于具身智能等需要从多感官理解同一环境的场景，因此同一个事实用不同感官呈现时应给出一致答案。

论文关注的输入是语义等价但模态不同的配对题目：同一道题分别做成音频证据版本和图像证据版本，题干、四选一选项以及选项字母分配完全相同，只有证据模态和提示语中与模态相关的措辞不同。模型在两种条件下各自生成一个字母答案，理想情况两个字母应相同。

实际中常出现跨模态不一致，即同一题目音频条件下选 B 而图像条件下选 C。已有工作多在输出端统计不一致率或用训练缓解它，较少回答语言主干内部是如何把不同模态转成不同答案的。本文的切入点是直接比较共享主干中答案生成位置的隐状态，并区分其中携带当前答案的分量和其余分量。

### 什么叫跨模态不一致，论文在表示层面如何定义它

对第 i 个题目，记音频条件输入为音频证据加选项，图像条件输入为图像证据加选项，模型分别输出预测字母。论文把分歧定义为两个预测字母不相等时的示性函数，一致记为 0，分歧记为 1。这个定义只看模型自己的两次预测是否相同，不看哪一次更接近金答案。

\[z_{i}=\mathds{1}\!\left[\hat{y}_{i}^{(\mathrm{a})}\neq\hat{y}_{i}^{(\mathrm{v})}\right].\]

分析对象不是最终字母本身，而是产生字母的那一时刻的隐状态。论文在语言主干的每一层取出答案生成位置的向量，即决定答案字母的 logits 所在的最后一个提示位置的隐状态，后续所有探针和干预都围绕这个位置展开。层数在不同模型间不可比，因此用归一化深度报告层位置。

需要区分两个容易混淆的概念：能预测哪些题目会分歧的表示，与扰动后能改变答案或制造分歧的表示。前者是统计上的可解码性，后者是行为上的因果效力，本文的核心结论正是两者分属不同子空间。

### 整体思路：先立一个答案坐标系，再看分歧线索在哪里

论文的方法可以沿一个题目走一遍。同一题目先分别走音频分支和图像分支，各自经过模态编码器进入共享语言主干，在每一层都得到一个答案位置向量。研究者在该向量上先估计一个低维答案子空间，用它读出当前条件下的答案，再把原向量投影掉该子空间得到残差，后续的分歧探针只允许使用残差。

\[\mathbf{h}_{\mathrm{ans}}^{(m,l)}=\mathbf{h}_{t_{\mathrm{ans}}}^{(m,l)}\in\mathds{R}^{d},\]

这样做的原因是原始隐状态同时混有答案、语义内容、题目难度和模态格式差异，直接比较音频向量与图像向量的距离无法说明分歧来自答案形成还是其他因素。先立答案坐标系，相当于给每个条件的答案状态标定所处区域，再问预测分歧的信息是否还留在答案区域之外。

后续分三步验证含义与行为角色。第一步比较答案子空间内与正交补余中的分歧探针准确率，并用奇异向量数判断需要几维；第二步检验答案子空间是否跟踪当前预测、2 维分歧表示是否只是模态偏移或答案身份；第三步在相同层、相同归一化强度和相同操作下，对两个子空间做匹配的平移干预，并对比只扰动一个模态与同时扰动两个模态的效果。

### 答案子空间如何估计，残差如何得到

答案子空间的估计方法是多项逻辑回归探针。在每一层把两个模态条件的答案位置状态汇集起来，以模型自己生成的字母为目标做四分类，特征先标准化，训练用默认正则和固定种子，并在按题目分组的交叉验证中评估，保证同一题目的 2 个条件落在同一折。系数矩阵的每一列对应一个字母的权重。

由于 softmax 对 4 个类别 logits 同时加常数不改变预测，系数矩阵的有效秩至多为三。论文取其列空间作为答案子空间，并做 QR 分解得到三列标准正交基，用于计算坐标和投影。

\[\mathcal{S}_{\mathrm{ans}}^{(l)}=\mathrm{Col}\!\left(W^{(l)}\right).\]

残差是对原答案位置向量去掉答案子空间分量后的部分，即用单位矩阵减去该基的外积投影后再作用于原向量。这一步把已用于线性解码答案的方向排除在外，后续任何分歧探针都不能再利用它们，从而保证定位结论不是重复使用答案信息。

\[\mathbf{r}^{(m,l)}=\left(I_{d}-Q_{\mathrm{ans}}^{(l)}Q_{\mathrm{ans}}^{(l)\top}\right)\mathbf{h}_{\mathrm{ans}}^{(m,l)}.\]

**答案子空间 × 正交补余：** 答案子空间是从答案位置表示中用多项逻辑回归系数张成的三维空间，负责线性读出模型当前选择的字母；正交补余是去掉这三维后剩下的高维残差，排除了已用于解码答案的方向，两者搭配才能把携带答案的分量和可能携带分歧线索的分量分开比较。

### 二维不一致预测表示与匹配干预如何构造

不一致探针的样本以题目为单位，每个样本拼接 3 个残差块：音频残差、图像残差以及图像减音频的差块，形成 3 倍隐维度长的输入。标签是该题目是否分歧。因为输入已限制在正交补余中，学到的权重不会包含答案子空间方向。把系数向量按三块重排成矩阵并取前两个右奇异向量，就得到可作用于单个隐状态的 2 维基。论文保留差块不是为了扩大线性假设，而是让系数矩阵秩上限为三，从而使保留 2 维即饱和成为对数据的观察而非两块结构强加的人为上限。

干预采用单层单位置的加性平移，即在答案位置向量上沿目标子空间基加 1 个方向向量乘以强度系数。所有比较保持层、归一化、强度和操作相同，只改变目标子空间。答案子空间的方向取从当前解码区域质心指向下一个字母区域质心的向量，不一致预测子空间的方向取分歧与一致两类在 2 维坐标中质心之差，随机对照则用固定种子的各向同性高斯方向。

\[\tilde{\mathbf{h}}_{\mathrm{ans}}^{(m,l)}=\mathbf{h}_{\mathrm{ans}}^{(m,l)}+\alpha B\boldsymbol{\delta}.\]

归一化细节对公平性很关键。每个方向先单位化再乘以本子空间坐标的标准差，使强度单位为本子空间的一个坐标标准差。论文报告在干预深度处答案子空间与不一致预测子空间的坐标尺度可相差约 9 倍，若不归一化会偏向一方。随机对照取与不一致预测子空间同为 2 维且同样落在答案子空间补余中的随机子空间，另设一个在答案尚未可解码的浅层做相同操作的前形成对照。

**平移干预 × 随机子空间对照：** 平移干预是在单层答案位置上沿目标子空间基加一个定长向量，随机子空间对照是在答案子空间补余中随机抽取同维子空间做相同归一化和操作，两者搭配才能判断不一致预测子空间的零效应是方向本身无效还是维度和强度不足。

**对称干预 × 非对称干预：** 对称干预是对同一题目的音频和图像条件施加相同的答案子空间平移，非对称干预只扰动其中一个模态而保持另一个不变，两者对比才能分离整体移动答案与错开两个模态答案表示这两种制造分歧的路径。

### 在哪些模型、数据和评估规则下检验上述表示

模型覆盖 3 个共享语言主干的 Omni 模型：Qwen2.5-Omni、Gemma-4-E4B 和 MiniCPM-o 4.5，三者层数、隐维度和归一化方式不同，但都是模态编码器加解码器主干的结构。数据用 XModBench 的空间任务族和外部任务族，每族题目同时有音频与图像版本，同一题目在 3 个模型上都测，形成 6 个模型任务条件。

下面这张表说明每个条件的可用样本量、按模型自身行为划分的一致与分歧数，以及答案首次可解码的层和干预所用深度。可用指 2 个条件都能解析出字母的题目数，分歧数在不同条件下差异很大，例如外部任务中 Gemma 的分歧数多于一致数，而 Qwen 外部则一致远多于分歧。半解码层指答案探针准确率首次达到机会水平与末层值中点的层，干预统一选在约 75% 归一化深度处。

| Model | Family | Used | Agree | Disagree | Interv. depth |
| --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni | Ext. | 1350 | 1038 | 312 | 75.000 |
| Qwen2.5-Omni | Spa. | 465 | 165 | 300 | 75.000 |
| Gemma-4-E4B | Ext. | 1350 | 528 | 822 | 76.200 |
| Gemma-4-E4B | Spa. | 465 | 213 | 252 | 76.200 |
| MiniCPM-o 4.5 | Ext. | 1350 | 864 | 486 | 75.000 |
| MiniCPM-o 4.5 | Spa. | 465 | 141 | 324 | 75.000 |

评估统一用按题目分组的交叉验证并报告平衡准确率，避免同一题目的 2 个条件分到训练与测试两侧，也避免类别不平衡夸大准确率。答案探针比较 3 种划分下的半解码深度是否一致，分歧探针在每折内重新估计基并在留出折上测试，还用自助重采样检验 2 维平面的稳定性。干预每条件取 100 个题目做强度扫描，另取 60 个原本一致的题目做对称与非对称对比。

### 分歧可预测信息在答案子空间之外，需要几维才能抓住

答案探针随层加深而上升并在末层接近完全恢复，首次达到中点的位置在主干中部附近，说明答案在输出之前早已线性可解码，学到的 3 维空间可作为后续的参考坐标系。关键比较在末层展开：用答案子空间内坐标预测分歧、用其正交补余预测分歧、用补余的同秩随机读出和同秩主成分读出预测分歧，以及用完整隐状态预测分歧。

下面这张表给出 6 个条件下的平衡准确率，机会水平为 0.5。补余在每组都明显高于子空间内，高出约 0.042 至 0.225，且与完整隐状态差距在 0.014 以内，而同补余的随机读出与主成分读出则远低于补余，说明结果不是补余维度大带来的必然优势。

| Model | Family | Inside | Compl. | Full |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni | Ext. | 0.510 | 0.704 | 0.705 |
| Qwen2.5-Omni | Spa. | 0.516 | 0.692 | 0.706 |
| Gemma-4-E4B | Ext. | 0.586 | 0.692 | 0.699 |
| Gemma-4-E4B | Spa. | 0.645 | 0.687 | 0.692 |
| MiniCPM-o 4.5 | Ext. | 0.500 | 0.725 | 0.718 |
| MiniCPM-o 4.5 | Spa. | 0.495 | 0.659 | 0.651 |

在此基础上论文逐步保留重排系数矩阵的前一、两个或 3 个右奇异向量。下面的图按保留方向数画出分歧探针准确率，虚线分别标出完整隐状态与答案子空间探针的位置。要观察的是从 1 维到 2 维的大幅提升，以及到第 3 维后几乎不再增加，这支持用 2 维作为紧凑表示。附录按条件报告的具体数值与自助对齐度也显示该平面在题目重采样下稳定，随机方向的零分布远低于它。

> **看图路径：** 1. 看横轴保留方向数从 1 到 3 的变化，纵轴为分歧可预测性；2. 比较蓝色均值线从 1 到 2 的爬升与从 2 到 3 的平坦；3. 注意红色虚线代表完整隐状态探针，灰色点线代表答案子空间探针的位置；4. 观察浅色带代表跨条件离散范围，判断二维是否已饱和

[![原论文 Figure 2：Disagreement-probe accuracy using the leading one, two, or three right singular vectors of the…](https://arxiv.org/html/2611.22619v1/figs/fig4.png)](https://arxiv.org/html/2611.22619v1/figs/fig4.png)

*论文图 2。原论文 Figure 2:：“Disagreement-probe accuracy using the leading one, two, or three right singular vectors of the reshaped disagreement-probe coefficient matrix, selected within each training fold.”。*

读图时可见蓝色均值线在保留 2 个方向时已接近完整隐状态水平，第 3 个方向没有带来一致增益，浅色带为跨模型任务的离散范围。这意味着主导的分歧预测变异可用 2 维概括，但并不意味着第 3 维在所有单条件下严格为零，个别条件仍有 1% 量级的小幅波动。

**不一致探针 × 平衡准确率：** 不一致探针是以是否出现跨模态分歧为标签的二分类线性探针，输入来自正交补余的配对特征；平衡准确率是它在一致与不一致两类上准确率的平均，消除了分歧比例不均的影响，因此能公平比较答案子空间内与补余中的可解码性。

### 两个子空间各自代表什么，能否被模态或答案身份解释

先看答案子空间是否忠实跟踪当前预测。末层从该子空间解码的字母与模型实际预测的一致率在 0.937 至 0.997 之间，包括两个模态给出不同字母的分歧题目，说明投影坐标保留的是各条件各自的答案而非把 2 模态平均成共享答案。进一步打乱选项内容与字母的对应后，模型行为在不同条件下有的跟随内容、有的停留原字母、有的跳到第三字母，但解码读数与模型新预测的一致率仍在 0.948 至 0.989 之间，且在跟随内容与停留字母的子群中都成立，因此读数反映的是当前预测而非原始标签或搬移的内容。

再看 2 维表示是否只是固定模态差异。下面的图比较两个子空间与模态判别轴的夹角余弦，模态本身几乎完全可分，但两个子空间都几乎与该轴正交，去掉均值模态偏移后分歧探针准确率至多变化 0.0031。按条件看余弦值多在 0.01 至 0.065 之间，远离可解释大量方差的对齐程度。

> **看图路径：** 1. 看纵轴为与模态轴夹角余弦，数值越小越接近正交；2. 对比绿色方块代表的答案子空间与红色叉号代表的不一致子空间；3. 按模型与任务分组检查是否六组都贴近零线

[![原论文 Figure 4：Alignment of the recovered subspaces with the modality-discriminating axis.](https://arxiv.org/html/2611.22619v1/figs/fig_modctrl.png)](https://arxiv.org/html/2611.22619v1/figs/fig_modctrl.png)

*论文图 4。原论文 Figure 4:：“Alignment of the recovered subspaces with the modality-discriminating axis.”。*

图中绿色方块与红色叉号在 6 组中都贴近零线，说明无论是答案子空间还是不一致子空间，其主方向都不沿着区分音频与图像的轴。这只证明非对齐而非模态信息完全不存在，论文明确指出模态在该 2 维中仍部分可解码，只是去掉均值方向后维度太少无法做更强的断言。

另一个混淆是答案身份。固定音频条件预测后分歧仍可解码，且在每组都不低于无限制分析并超过标签置换零分布，如下面这张表所示。表中 strata 为同时包含两类且被保留的音频答案数，NN 为保留题数，空值列为同分层下的置换零分布 95% 分位。Qwen 空间任务的无限制值甚至低于 0 分布，这正是正文只依据分层后序列立论的原因。分层只控制了音频侧答案，仍可能残留题目难度等逐题差异，论文不主张已排除全部答案相关混淆。

| Model | Family | NN | Unrestr. | Matched | Null |
| --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni | Ext. | 675 | 0.635 | 0.670 | 0.509 |
| Qwen2.5-Omni | Spa. | 233 | 0.558 | 0.726 | 0.587 |
| Gemma-4-E4B | Ext. | 675 | 0.642 | 0.712 | 0.528 |
| Gemma-4-E4B | Spa. | 157 | 0.648 | 0.703 | 0.586 |
| MiniCPM-o 4.5 | Ext. | 675 | 0.683 | 0.697 | 0.534 |
| MiniCPM-o 4.5 | Spa. | 171 | 0.605 | 0.711 | 0.524 |

自然出现的分歧在答案子空间中表现为两个模态状态分处不同答案区域，一致题目则靠拢在同一区域，中位距离比分歧对大 1.9 至 5.3 倍，按维度折算后超额分离集中在答案子空间而非补余中，倍数约为 2.9 至 8.6。这与探针定位形成对照：预测会否分歧的信息在子空间外，而已经发生的分歧表现为子空间内两个模态答案状态的错开。

**模态轴 × 固定模态偏移：** 模态轴是用答案位置表示区分输入来自音频还是图像的一维判别方向，固定模态偏移指两类表示的均值差；把它与两个子空间做夹角和去均值对照，是为了检验不一致预测表示是否只是模态身份的整体平移。

### 匹配扰动下谁能改变预测，非对称扰动能否制造分歧

行为效应的比较在相同层、相同归一化强度和相同操作下进行。下面的图按强度扫描画出预测改变比例，左为外部任务、右为空间任务，线为 3 模型均值、带为跨模型范围。要看的是答案子空间扰动随强度单调上升并在最大强度改变 0.83 至 1.00 的预测，而不一致预测子空间与同维随机对照始终贴近基线且无稳定优劣。

> **看图路径：** 1. 先看横轴扰动强度与纵轴预测改变比例，区分剂量依赖曲线；2. 对比深色上升的答案读出曲线与贴近零线的两条对照曲线；3. 注意左右两面板分别为外部任务与空间任务，检查趋势是否一致

[![原论文 Figure 7：Prediction changes under matched interventions across shift magnitudes.](https://arxiv.org/html/2611.22619v1/figs/fig_dose.png)](https://arxiv.org/html/2611.22619v1/figs/fig_dose.png)

*论文图 7。原论文 Figure 7:：“Prediction changes under matched interventions across shift magnitudes.”。*

图中深色上升曲线为答案读出方向，另两条贴地曲线为不一致预测方向与随机方向，说明线性可解码不等于行为有效。按条件看最大强度下答案臂改变 89 至 100 个中的绝大多数，而不一致臂与随机臂都接近零，且随机臂在 6 组中的 3 组反而略高，Gemma 空间任务中随机 2 维改变 18 个而分歧方向改变 6 个，因此不能在 2 对照之间排序，只能立足于它们与答案臂的差距。同一操作提前到答案尚未形成时的浅层，答案臂效应从 89 至 100 骤降到 0 至 3，说明行为敏感性只在答案子空间形成后出现。

下面这张表截取强度 10 与 40 处的每 100 题改变数，完整扫描显示答案臂从强度 2 起已超过 2 对照。表中同时呈现不一致臂与随机臂在强度 40 处仍是个位数，而答案臂在强度 40 处接近 ceiling，强度 10 处则因不同模型任务的敏感度差异较大，这与各条件答案稳定深度不同有关。

| Subspace | α | Qwen Ext. | Qwen Spa. | Gemma Ext. | Gemma Spa. | MiniCPM Ext. | MiniCPM Spa. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Answer | 10 | 0.170 | 0.250 | 0.295 | 0.500 | 0.740 | 0.810 |
| Answer | 20 | 0.640 | 0.485 | 0.860 | 0.760 | 0.900 | 0.995 |
| Answer | 40 | 0.980 | 0.895 | 0.980 | 0.825 | 1.000 | 0.995 |
| Disagreement | 40 | 0.015 | 0.025 | 0.000 | 0.050 | 0.015 | 0.030 |
| Random | 40 | 0.005 | 0.010 | 0.010 | 0.090 | 0.010 | 0.015 |

这一结果的解释受 3 个条件限制：强度单位已按各自子空间标准差归一化，若用未归一化的欧氏长度比较会因尺度差约 9 倍而偏向一方；删除式干预因删除能量在 2 维与 3 维臂之间不匹配且翻转数太少，论文只把它放在附录而不作为正文依据；对干预是否到达目标的核验显示在施加层位移达到约 39.97 个标准差且探针判为分歧，但到深层已衰减，论文只称到达施加层而不推断扰动原样传到输出。

制造分歧的实验只用原本一致的题目，比较只扰动一个模态与同时扰动两个模态。下面的图以每条件 60 题画出新出现分歧的比例，左侧同时扰动仅产生 0.05 至 0.25 的分歧，右侧单侧扰动产生 0.767 至 1.00 的分歧，每组差距至少 3.1 倍，未被扰动的模态预测从未改变。

> **看图路径：** 1. 看横轴两种操作：两侧同时扰动与只扰动一个模态；2. 看纵轴新制造出的分歧比例，比较蓝点与红点的高度差；3. 沿灰色连线逐条件检查是否六组都呈现非对称更高

[![原论文 Figure 8：Disagreement induced by symmetric and asymmetric Answer Subspace interventions.](https://arxiv.org/html/2611.22619v1/figs/fig_asym.png)](https://arxiv.org/html/2611.22619v1/figs/fig_asym.png)

*论文图 8。原论文 Figure 8:：“Disagreement induced by symmetric and asymmetric Answer Subspace interventions.”。*

图中蓝点为两侧同时扰动，红点为单侧扰动，灰线连接同一条件，可见 6 组都呈现单侧远高于两侧。但该结论依赖强度足以搬动答案：在独立重跑的强度网格中，非对称超过对称只在强度 40 的 6 组与强度 20 的 5 组中成立，在强度 5 及以下对称对照反而更高，因为小强度下单侧也推不动自身答案而对称的偶发错位反而制造更多分歧。因此复现时必须先确认所选强度确实改变了被扰动条件的自身预测，否则比较没有意义。

### 这些结论在什么边界内成立，还有哪些未验证的缺口

第一，文中的可预测指与分歧标签的统计共变，而非可在只有单模态时提前预报分歧。不一致探针的输入同时需要音频残差与图像残差，因此不能在两个预测都拿到之前预警，部署含义不应被夸大。

第二， recovered 的 2 维方向代表什么内容尚未确定。分歧题目可能系统性更难或更模糊，固定音频答案只去掉一侧答案混淆，仍残留逐题难度等差异；模态对照只证明与均值偏移轴不对齐且去掉它影响不超过 0.0031，不能证明 2 维中不含任何模态信息。

第三，覆盖范围有限。实验只有 3 个 Omni 模型与来自同一基准的 2 个任务族，尽管模型在深度、隐维度和归一化上不同，但都是编码器加解码器主干，换到其他融合结构、模态组合、任务与训练策略时是否成立未经检验。干预也只在推理时单层单位置平移，未评估训练期对齐的效果。

第四，统计效力不均。按一致与分歧分组的队列比较样本不均且效力最低，论文明确不在正文用它立论；对称与非对称的差距只在足够强度下成立，小强度下结论反转，引用时必须同时给出强度条件与未扰动侧不变的核验。

### 什么时候值得借鉴，复现第一步做什么，还缺哪项验证

当研究者想诊断多模态模型为何对等价输入给出不同答案，且能拿到答案生成位置的隐状态时，本文的分离流程值得尝试：先用模型自身预测拟合答案探针并取 3 维列空间，再在正交补余上用配对残差拟合分歧探针并取前两个奇异方向，最后用同层同归一化强度的平移干预检验行为效力。这个顺序不能颠倒，否则分歧探针很容易复用答案方向。

复现第一步是严格复刻输入与读数规则：同一题目渲染音频与图像两个提示，保持题干、四选项与字母分配相同，只改证据模态与相关措辞；取最后一个提示位置在每层的隐状态，以 4 个字母在答案槽的 token id 取 argmax 为预测，解析失败的题目在两条件同时丢弃后再按题目分组做交叉验证。基的估计必须在每折内重做，补余基与分歧基需重新正交化并检查泄漏。

还需要补的验证包括更难的混淆控制，例如同时固定两侧答案对或按难度分层后看 2 维是否仍稳定；在更多融合架构与模态上重复定位与干预；以及把单层平移换成多层或生成全程的干预，检验深层衰减是主动修正还是分布外收缩。本文未提供可用的代码模型数据链接，来源校验也显示没有已验证的公开资源，因此复现需按附录超参数自行实现并先验证干预确实到达目标层。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.22619v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
