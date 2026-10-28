---
title: "Concentrated Causal Influence, Distributed Diagnostic Information: Cognitive Impairment Decisions in Large Audio-Language Models"
date: 2026-10-27
draft: false
tags: [病理语音评估, 激活因果干预, 表示探测, 语音, 可解释性]
categories: [论文速递]
description: "论文用类别对比神经元选择加匹配随机对照的消融，证明三个模型中 0.5% 解码器神经元能大幅平移认知障碍二选一决策的偏置并可跨语音文本与语料迁移，而监督线性读出显示诊断信息广泛分布在更大神经元集合中。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.32061"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "集中控制与分散信息：大音频语言模型里认知障碍决策的神经元机制"
paper_digest_original_title: "Concentrated Causal Influence, Distributed Diagnostic Information: Cognitive Impairment Decisions in Large Audio-Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.32061v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.32061v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.32061v1.pdf"
paper_digest_primary_task: "病理语音评估"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.pathological-speech","label":"病理语音评估"},{"facet":"method","id":"method.activation-intervention","label":"激活因果干预"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"}]
paper_digest_primary_method: "激活因果干预"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文用类别对比神经元选择加匹配随机对照的消融，证明三个模型中 0.5% 解码器神经元能大幅平移认知障碍二选一决策的偏置并可跨语音文本与语料迁移，而监督线性读出显示诊断信息广泛分布在更大神经元集合中。"
paper_digest_authors: [{"affiliations":["Center for Language and Speech Processing (CLSP), Johns Hopkins University, USA"],"name":"Xiutian Zhao"},{"affiliations":["Center for Language and Speech Processing (CLSP), Johns Hopkins University, USA"],"name":"Luqi Sun"},{"affiliations":["Group on Language, Audio & Music (GLAM), Imperial College London, UK"],"name":"Björn Schuller"},{"affiliations":["Center for Language and Speech Processing (CLSP), Johns Hopkins University, USA"],"name":"Berrak Sisman"}]
paper_digest_abstract_sha256: "3ccf16dbc5232ad7ed31986ce08344633527fac24ac1664b3a8fbfd5e7f9c319"
paper_digest_sidecars: {"citation.bib":{"sha256":"0b56d8af97cda8149887946762aaa30d9ff24c2aabfb470aad337816edf72433","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32061/citation.bib"},"citation.json":{"sha256":"9f364a210b0ff50db3d3e1cd5bd22ca0b4172edcaf14a3ee6d6fb980a1a32214","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32061/citation.json"},"citation.ris":{"sha256":"4bdf56777a88b9ca33452f3d9707517131ef4e8a33a7c0f96999e1c68c46873f","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32061/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"4fb27b8211e9c053c6bf1e8e4feb84789bfee694d6afe6fa3993afa3fae0e278","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32061/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d1d0b4d1e7564c21baf2eee2d65dac92db09c9348853d2b474c291436a697d9f"
paper_digest_api_reader_plan_sha256: "641b7c18469094f03bf30919c448335b68f66cb22f3434e7e5d01032ff6c9c08"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b190b57d0f8dbfd83bb1085a926ff246d6cb53ceb70659bc830238b942e27d87"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "f916edf30988a8bbe50153fb9f83183ed902dbaed0d5a862e195c6123841b801"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0198ff5cb489e871ee697dce05a04a064f787e76f215e7aa4100a8bed2f8a86b"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2fab2ad0cc1046723059d511e65b7e146f00da2bb094dd604acbc532f858c5c0"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 集中控制与分散信息：大音频语言模型里认知障碍决策的神经元机制

> 英文题目：*[Concentrated Causal Influence, Distributed Diagnostic Information: Cognitive Impairment Decisions in Large Audio-Language Models](https://arxiv.org/abs/2610.32061v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[病理语音评估](/audio-paper-digest-blog/papers/?concept=task.pathological-speech)
- **研究方法**：[激活因果干预](/audio-paper-digest-blog/papers/?concept=method.activation-intervention)；[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **研究重点**：[可解释性](/audio-paper-digest-blog/papers/?concept=research_focus.interpretability)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Xiutian Zhao：Center for Language and Speech Processing (CLSP), Johns Hopkins University, USA
- Luqi Sun：Center for Language and Speech Processing (CLSP), Johns Hopkins University, USA
- Björn Schuller：Group on Language, Audio & Music (GLAM), Imperial College London, UK
- Berrak Sisman：Center for Language and Speech Processing (CLSP), Johns Hopkins University, USA

## 📌 核心摘要

读者需要理解的对象是大型音频语言模型根据一句话外加一段录音判断说话人是否认知受损的过程，困难在于输出正确不能说明模型内部哪里在做决定，也不说明诊断信息分布在何处。论文沿一个 Cookie Theft 看图说话样本说明处理过程，同一录音分别以纯语音、纯文本、语音加干净文本、语音加标注文本输入，模型在两种选项顺序下输出首步选项字母的对数几率并取平均得到预测。方法把解码器门控多层感知机中两类正确且确信样本间激活频率差异最大的前 0.5% 神经元取出，构成每类各自的认知损伤对比神经元（CI-contrast neurons，CICNs）掩码，再用清零消融观察预测是否朝远离掩码类别的方向移动，并与层内数量匹配的随机掩码比较。位置受限消融把干预只加在音频段、文本段、模板前后段或最后答案位置，以判断影响发生在何处，冻结激活上的岭回归读出则检验同样特征能支持多好的诊断排序。与已有输入级归因不同，该工作直接干预内部单元并检验跨语音与文本、跨语料的可移植性。在 Pitt 评估集上，4 个主要掩码的平均对数几率变化幅度为 1.6 至 2.6，而匹配随机掩码平均不超过 0.17，Kimi-Audio 的标注联合输入健康掩码消融翻转 88% 原来判对的健康样本，随机掩码仅翻转 16%。冻结 CICNs 激活的监督读出在 Pitt 达到 0.92 至 0.97 的 AUC，高于模型直接回答的 0.67 至 0.84，但随机神经元与全量神经元读出也接近同一水平。结论适用范围是受控二选一提示下的首步决策机制，不是临床筛查有效性，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 任务要从语音里判断什么

这篇论文研究的是用大音频语言模型做认知障碍筛查提示。一个样本是 1 位老年人描述厨房场景图的录音，模型要在两个选项里选一个：说话人认知健康，或说话人认知受损。这里受损是一个宽口径，包含轻度认知障碍到痴呆，论文用痴呆定义选择神经元用的障碍类，把轻度认知障碍留作迁移检验。

输入可以是纯文本、纯语音，或语音加干净文本、语音加标注文本。干净文本去掉停顿和填充词等转写记号，标注文本则把它们写成可读文字并加图例，目的是检验把不流畅和时间线索写进文本是否改变联合输入的决策。输出不是生成的句子，而是首步两个选项字母对数几率经两种选项顺序平均后的胜者，这样可以抵消单纯偏好某个字母位置的影响。

### 已有工作停在哪一层解释

语音认知障碍检测此前多用手工语言声学特征、预训练编码器和图文融合系统，可解释性多停在输入层，例如特征重要性、显著性或事后归因，说明哪些输入与预测相关，但不说明模型内部哪组计算产生了决策。

神经元级可解释性在语言模型和多模态模型里已有概念选择性神经元、因果追踪和干预验证的路线，但大多研究语言、模态或领域专用单元，临床语音决策内部控制是否集中、是否跨语音与文本共享，此前没有直接的因果定位证据。这篇论文的对照点正在于此：不是再提一个更高准确率的筛查器，而是把输出准确率、内部可用信息和对输出的因果控制分开检验。

### 论文要区分的两个问题是什么

第一个问题是因果影响集中在哪里：是否存在很小一组解码器神经元，拿掉它们就会让决策系统性地偏向另一类，并且这种作用超过同样大小和层分布的任意神经元集合。第二个问题是诊断信息分布有多广：用冻结激活训练监督读出时，这些神经元是否是特权特征，还是随机神经元和全部神经元也能读出相近的诊断信号。

两者容易混淆。输出翻转大不等于模型内部只有那里有信息，读出准确率高也不等于模型零样本作答时真的用了那些神经元。论文用消融回答前者，用岭回归读出回答后者，并用跨条件、跨语料和位置限制干预检验前者的可迁移性与发生位置。

### 从录音到掩码再到干预的总流程

流程沿一个被试的一次图片描述展开。先把参与人语音段拼成模型听到的音频，把对应文本按干净或标注规则渲染进固定提示模板，模板说明两者等可能并要求只输出选项字母。模型在两种选项顺序下各跑一次，只记录产生首步选项对数几率的那次前向过程。

然后在模型自己双顺序都判对且间隔足够的录音里，每类取固定数量构成识别池，统计每个解码器门控非线性输出为正的位置比例，选出类别差异最大的前 0.5% 神经元，分别得到健康掩码和受损掩码。最后在评估录音上把掩码置零或做类别均值平移，对比匹配随机掩码，看决策概率、对数几率、翻转率和读出 AUC 如何变化，再限制干预位置和更换输入条件来定位作用。

### 对比神经元是怎样选出来的

选择对象是解码器门控 MLP 里门控非线性输出的那 1 维。论文只看预填充过程，不看生成后续词，因为决策已经由首步对数几率定义。对混合专家解码器，一个专家的 1 维算一个神经元，没有被路由到的词元记为零，保证所有神经元在同一词元集合上可比。

**CI-contrast neurons × ConAct：** CI-contrast neurons 指在模型自己稳定判对的录音上，对健康与障碍两类激活频率差异最大的解码器 MLP 神经元集合，分 NC 与 CI 两块掩码；ConAct 是选出它们的对比激活间隔，即两类激活概率之差再乘以所属类别指示，它只负责排序和取前 0.5%，因果作用要靠后续消融来验证。

激活概率的具体计算是把某类 pooled 录音上所有位置的正激活指示求平均，类别均值激活另外保留给操纵用。选择时要求识别录音必须被未改动模型在两种选项顺序下都判对且每种顺序间隔不小于 0.1，每类取 15 条，这样定义的是模型稳定决策 regime 附近的类别画像，而不是全数据上的诊断差异。

\[P^{(c)}_{l,n}=\frac{1}{T_{c}}\sum_{t}\mathbb{I}\!\left(a^{(c)}_{l,n,t}>0\right).\]

### 消融与对照如何证明特异性

消融把掩码坐标的门控输出置零。如果掩码支持某类，拿掉它应把预测推离该类：拿掉健康神经元应提高判受损概率，拿掉受损神经元应降低它。操纵在预填充的全部位置执行，位置限制实验除外。

**消融 × 匹配随机掩码：** 消融指把选中掩码对应门控输出置零再看决策如何移动；匹配随机掩码指在掩码之外按同样每层数量随机抽取的对照集合，它给出均匀分布式影响应有的基线，只有真实掩码显著超过全部随机分布才能说控制是集中的。

仅看真实掩码移动了多少不够，因为任意移动决策边界的神经元集合都会显得有类别特异性。所以每个真实掩码配 20 个同层数量随机掩码，用预测区间 t 检验比较，并对两个主指标取交并检验，再在每个实验族内做错误发现率校正。更强的零假设还包括按激活概率和门控均值匹配的神经元集合，以及类别均值平移时按范数匹配的随机方向，用来检验选择统计量本身带来的可变性。

\[\tilde{g}_{l,t,n}=g_{l,t,n}+\alpha\,\big(\mu^{(c)}_{l,n}-\mu^{(\bar{c})}_{l,n}\big)\quad\text{for }n\in\mathcal{I}^{(c)}_{l},\]

### 没有训练模型时监督出现在哪里

这项研究不训练或微调大模型，模型权重冻结，只做前向记录和干预。监督只出现在两个地方：一是选择神经元时用的类别标签，用来算激活频率差异；二是利用检验时训练的岭回归读出，用冻结神经元的平均激活预测诊断。

**ΔP(CI) × Δl：** ΔP(CI) 是消融前后模型输出 CI 概率的均值变化，直观但在自信决策时会饱和；Δl 是首步 CI 对 NC 对数几率的平均有符号变化，不易饱和，两者同时显著且方向符合预期才算通过，二者共同回答决策移动了多少。

读出在识别划分上训练、在无参与人重叠的评估划分上测试，特征是每个神经元在提示上的平均门控激活，经训练集均值方差标准化，分类器是类别平衡岭回归，惩罚系数经按参与人分组的分层交叉验证选出。AUC 不需要阈值，报告决策时阈值在训练折外分数上按最大 UAR 选定。这种高 AUC 反映有监督训练下 Pitt 图片描述的可分性，不能直接等同于模型零样本答案的能力。

### 模型语料与准入条件如何设定

研究覆盖 8 个开源音频语言模型，输入都是 16 kHz 单声道波形。评估语料是两套英语厨房场景图任务：DementiaBank Pitt 作为主要识别语料，PROCESS-2 作为独立采集、转写风格不同的跨语料迁移环境。健康与痴呆定义评估类，轻度认知障碍等留作迁移检验，Pitt 只给参与人语音以避免提问者轮次泄露标签。

下表说明本文实际用到的模型名称与检查点对应关系，正文后文用简称指代同一模型。

| Model | Hugging Face checkpoint |
| --- | --- |
| Qwen2.5-Omni-7B | Qwen/Qwen2.5-Omni-7B |
| Qwen3-Omni-30B | Qwen/Qwen3-Omni-30B-A3B-Instruct |
| Kimi-Audio | moonshotai/Kimi-Audio-7B-Instruct |
| MiniCPM-o-4.5 | openbmb/MiniCPM-o-4_5 |

表格比较的问题是复现时应加载哪个权重，而不是哪个模型更强。8 个模型零样本 UAR 跨度很大，Pitt 约 0.49 到 0.75。只有文本达到 0.65 UAR 且含音频条件区间排除 0.5、每类有足够双顺序高置信识别录音的单元才进入识别，最终是 5 个模型 12 个 Pitt 单元加两个 PROCESS-2 文本单元，其余单元未做神经元识别，避免在不可靠基线上谈因果。

### 小掩码消融带来了多大的决策移动

在识别条件内消融 24 个掩码时，7 个通过双指标显著性检验且方向符合预期，其中 4 个效应尤其大：Qwen3-Omni 的联合输入健康掩码、MiniCPM 的纯语音与联合输入受损掩码、Kimi-Audio 的联合标注健康掩码，每项对数几率移动约 1.6 到 2.6，而匹配随机掩码平均不超过 0.17。例如 Kimi-Audio 联合标注健康掩码拿掉后，基线判对的健康项有 88% 翻转为受损，随机掩码平均只翻转 16%。

下表整理 Pitt 内读出可分性与小预算排序效率的比较问题，比较对象是同一划分上的模型零样本答案、词频基线与随机对照。

| 条件 | 指标 | 模型零样本答案 | 全掩码读出 | 同划分监督基线 |
| --- | --- | --- | --- | --- |
| Pitt 全掩码 | AUC | 0.67–0.84 | 0.92–0.97 | TF-IDF 单双词 0.91 |

预算受限时的读出效率另列如下。两行均为跨 7 个单元集合的平均差值，而非每个集合必然获得的提升。

| CICN 预算 | 指标 | 跨 7 个单元集合的平均优势 | 比较对象 |
| --- | --- | --- | --- |
| 8 单元 | AUC 差 | 0.118 | 层匹配随机特征 |
| 32 单元 | AUC 差 | 0.041 | 层匹配随机特征 |

该表说明高可分性主要来自有监督训练而非选中神经元的特权地位，全掩码读出的高值与词频基线同量级。8 单元和 32 单元处排序靠前的选中神经元平均优于随机，但单预算比较经多重校正后不显著，只能作为排序效率的探索性证据。到 128 到 512 单元时随机特征基本追上，信息广泛可恢复才是更强结论。

**决策偏置 × 诊断区分度：** 决策偏置指整体向 CI 或 NC 一侧平移的截距式移动，用统一加性偏移能解释的平方变化比例衡量；诊断区分度指录音之间排序能力是否改变，用 AUC 变化和消融前后对数几率的 Spearman 相关衡量，论文的核心发现是偏置大变而排序基本保留。

读出模型训练使用有监督标签，因此高 AUC 本身不能证明 CICN 独占诊断信息。匹配随机特征与全部神经元接近同一水平，支持诊断信息广泛分布的解释。小预算下的平均优势只是探索性排序效率证据，单个预算的比较未通过多重校正；当预算扩展到 128 至 512 个单元时，随机特征大体追上。这里没有把读出的相关性解释成神经元对诊断信息的唯一因果承载。

### 小预算读出优势与跨语料读出表现

固定神经元预算时，每个单元取每类掩码中 ConAct 排名最高的前一半，随机对照按同层数量抽取，识别用的 30 条录音排除在训练之外以减少选择泄露。平均 7 个单元的结果是 8 单元处高出随机 0.118，32 单元处高出 0.041，128 单元以上差距迅速缩小。

> **看图路径：** 1. 先看横轴 8 到 2048 神经元预算下蓝色与灰色均线的差距变化；2. 再看虚线表示的全部神经元读出与零样本答案的位置；3. 注意小预算处阴影表示的随机抽样波动很大

[![原论文 Figure 3：Diagnostic readout AUC on Pitt against neuron budget.](https://arxiv.org/html/2610.32061v1/fig_concentration.svg)](https://arxiv.org/html/2610.32061v1/fig_concentration.svg)

*论文图 3。原论文 Figure 3:：“Diagnostic readout AUC on Pitt against neuron budget.”。*

上图可见蓝色选中曲线在小预算处高于灰色随机均值，但灰色阴影表示的随机波动很大，单预算校正后不显著，所以只能说排序把信息神经元富集在顶部，而不是说只有它们有信息。全掩码与全部神经元读出在高预算处饱和，这是另做预算分析的原因。

> **看图路径：** 1. 先看左图 Pitt 内蓝色读出相对黄色零样本答案的整体右移；2. 再看右图迁移到 PROCESS-2 后蓝色与灰色绿色的相对位置；3. 注意两图纵轴行顺序相同便于逐行比较

[![原论文 Figure 7：Predictive utility of CI-contrast neurons: whole-mask readouts.](https://arxiv.org/html/2610.32061v1/fig_exploit.svg)](https://arxiv.org/html/2610.32061v1/fig_exploit.svg)

*论文图 7。原论文 Figure 7:：“Predictive utility of CI-contrast neurons: whole-mask readouts.”。*

上图左半是 Pitt 内读出，蓝色选中读出系统性右移于黄色零样本答案，但灰色随机与绿色全部神经元也在相近位置；右半是同一读出搬到 PROCESS-2，选中读出约 0.76 到 0.82 AUC，在 8 个单元超过模型答案但对随机与全神经元无一致优势。结合转写风格与录音质量的投影去除对照，诊断读出对线性可解混杂的依赖很小，但这只检验了线性部分，不能排除其他捷径。

### 控制力在何处发生并能走多远

位置限制消融把干预限定在音频段、文本段、模板前后段或最后答案位置。仅消融最后位置几乎无效，消融除最后位置的全部早期位置基本复现全位置效应。在原提示下最大局部效应出现在内容之后的问题与选项处，模板整体与仅内容后段在 4 个受试掩码上多能超过随机对照，而最后位置无一通过。

> **看图路径：** 1. 先看每行蓝色圆点与红色方块相对灰色随机点的横向偏离；2. 再看右侧实心与空心标记区分的显著性；3. 最后对比右侧翻转率数字与随机均值的差距

[![原论文 Figure 1：Ablating CICN masks on Pitt in their identification condition (24 masks).](https://arxiv.org/html/2610.32061v1/fig_ablation.svg)](https://arxiv.org/html/2610.32061v1/fig_ablation.svg)

*论文图 1。原论文 Figure 1:：“Ablating CICN masks on Pitt in their identification condition (24 masks).”。*

上图可见的是识别条件内的对角消融：横轴分别是概率变化与对数几率变化，都已按远离掩码类别的方向取号，实心为通过检验，右侧翻转率只作描述。3 个模型的显著行集中出现，效应不对称且具模型特异性，Kimi 偏健康掩码，MiniCPM 偏受损掩码。

> **看图路径：** 1. 先比较除最后位置与仅最后位置两类干预的条形长度；2. 再看音频段与文本段相对问题加选项段的贡献；3. 注意各条是独立干预不可直接相加

[![原论文 Figure 2：Position-restricted ablation on Pitt: change in P(CI) away from the mask’s class when ablation is…](https://arxiv.org/html/2610.32061v1/fig_where.svg)](https://arxiv.org/html/2610.32061v1/fig_where.svg)

*论文图 2。原论文 Figure 2:：“Position-restricted ablation on Pitt: change in P(CI) away from the mask’s class when ablation is restricted to one set of prefill positions.”。*

上图可见的是位置限制结果：黑色竖线是除最后位置的整体效应，最右列是仅最后位置，中间各条是音频、文本与模板分段。条形不可相加，但对比可见内容后段最长而最后位置最短，说明影响发生在给出答案之前的上游计算。数值与检验见附录位置表，文本位置在纯文本评估下保留部分效应但小于全位置效应。

\[s_{t}=\pm\frac{1}{|\mathcal{I}^{(c)}|}\sum_{(l,n)\in\mathcal{I}^{(c)}}\operatorname{sign}\!\big(\mu^{(c)}_{l,n}-\mu^{(\bar{c})}_{l,n}\big)\,\frac{a_{l,n,t}-m_{l,n}}{\sigma_{l,n}},\]

上式是词元级关联用的类别方向分数，把掩码内神经元按类别均值符号加权并标准化后平均，正值表示更像受损。分析发现内容词附近更像健康，填充、片段、暂停、重述与静音附近更像受损且多超过随机对照，但去掉这些标记后类别间隔保留 95% 到 101%，说明关联存在但不是类别差异的来源，也不能证明它们介导了偏置移动。

下表是跨输入条件的迁移，行是识别条件，列是评估条件，对角为自身条件，纯文本随机列给出对照均值。

| Model | Mask | Identified under | Evaluated T | T random mean±sd | Evaluated A | Evaluated AT | Evaluated AT-chat |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi-Audio | NC | A | +0.164∗ | −0.003 ± 0.055 | +0.139 | +0.131 | +0.144 |
| Kimi-Audio | NC | AT | +0.258∗ | +0.008 ± 0.042 | +0.230 | +0.228 | +0.146 |
| Kimi-Audio | NC | AT-chat | +0.246∗ | +0.036 ± 0.044 | +0.266 | +0.240 | +0.267 |
| MiniCPM-o-4.5 | CI | A | −0.178∗ | +0.012 ± 0.042 | −0.212 | −0.202 | −0.118 |
| MiniCPM-o-4.5 | CI | AT | −0.237∗ | +0.017 ± 0.044 | −0.221 | −0.253 | −0.109 |
| MiniCPM-o-4.5 | CI | AT-chat | −0.161∗ | −0.006 ± 0.056 | −0.140 | −0.191 | −0.136 |
| Qwen3-Omni-30B | NC | A | +0.176∗ | +0.026 ± 0.031 | +0.100 | +0.141 | +0.109 |
| Qwen3-Omni-30B | NC | AT | +0.223∗ | +0.006 ± 0.028 | +0.105 | +0.141 | +0.092 |
| Qwen3-Omni-30B | NC | AT-chat | +0.126∗ | +0.019 ± 0.030 | +0.041 | +0.072 | +0.053 |

表中数值是 Pitt 上的 CI 预测概率变化，不是百分数。T random 为纯文本评估下匹配随机掩码的均值±标准差；星号表示通过预先定义的迁移检验。对角效应另在图一检验，没有给出随机对照的非对角格只作描述。模型与掩码类别在每行重复，便于对照原来的分组条件。本表数值与单位依据论文 PDF。

读表问题是同一组神经元是否控制语音与文本两种提示下的决策。9 个到纯文本的迁移全部通过检验，包括 3 个仅从纯语音识别出的掩码；从音频词元 span 选出的掩码同样能迁移到纯文本决策。跨语料上 4 个主要掩码中有 3 个在 PROCESS-2 上通过，两种转写风格下移动量相近；留出的轻度认知障碍录音也多按同方向移动。因此迁移的是提示决策的控制力，不能直接说模型在不同条件下用了相同的证据加工。

### 结论在什么条件下才成立

因果结论只针对模型自己稳定判对机制下的提示分类器，因为识别池限定为双顺序正确且高置信录音。分析只干预解码器 MLP 神经元，注意力、音频编码器与适配器未纳入，掩码只在一种提示模板下识别，答案只用两选项首步对数几率，读出只用线性模型。因此结论刻画的是一个可复现的决策接口，不是所有提示或解码方式下的通用机制。

数据只覆盖两套英语图片描述，Pitt utterance 时间来自自动对齐，PROCESS-2 无时间信息而整段送入，转写风格与诊断相关虽经清洗、分层与分风格检验但不能完全排除，尤其音频中的残留差异。PROCESS-2 评估中正确判受损样本少，跨语料推断主要依赖概率与对数几率变化而非翻转率。性别对照显示多数选中掩码不改变性别决策，但个别模型存在交叉效应，特异性是相对同规模同深度任意神经元而言，不能归因于类别对比的唯一成分。

### 复现第一步要固定什么

先按模型检查点与 16 kHz 单声道输入复现零样本基线，确认文本与含音频条件的 UAR 与类别偏好，再按双顺序正确加间隔筛选识别池并固定随机种子。记录门控非线性输出时只记预填充过程，对混合专家模型要重算路由以恢复位置，音频与文本 span 按词元定位，必要时加词元数匹配的音频子集对照。

干预时每个真实掩码配 20 个同层数量随机掩码并做双指标交并检验与族内校正，位置限制、提示改写与跨条件评估都要在相同提示与相同随机掩码限制下重跑。读出要在无参与人重叠的划分上训练测试，标准化只用训练集，惩罚系数经参与人分组交叉验证选择。论文未公开代码模型数据可运行状态，来源清单为空，因此复现依赖自备语料权限与本地权重，不能声称作者资源已公开。

### 什么时候值得借鉴这套做法

当需要审计模型是整体平移了决策阈值还是改变了样本排序时，值得同时报告概率变化、对数几率变化、排序相关、偏移份额与 AUC 变化，而不是只看准确率与翻转率。当怀疑语音与文本共享决策控制时，可用跨条件消融加音频 span 选择的对照来检验，而不是只看掩码重叠。

**因果集中 × 信息分散：** 因果集中指少数神经元对输出选项有不成比例的控制力，拿掉就大面积翻转；信息分散指用冻结激活训练监督读出时，随机神经元和全部神经元也能达到相近 AUC，说明可用于诊断的信号广泛存在，两者并存意味着改了答案不等于改了排序能力。

还需要补的验证包括更多提示措辞与数字标签下的定位是否稳定、注意力与编码器路径的联合追踪、自动转写输入下的表现，以及前瞻性临床验证与人群和采集条件分层评估。在此之前，选中神经元不应被当作生物标志物，模型预测也不应被当作可部署的筛查结论。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.32061v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
