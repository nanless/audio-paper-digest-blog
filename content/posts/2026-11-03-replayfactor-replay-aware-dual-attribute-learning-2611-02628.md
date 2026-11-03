---
title: "ReplayFactor: Replay-Aware Dual-Attribute Learning for Practical Speech Deepfake Detection"
date: 2026-11-03
draft: false
tags: [语音伪造检测, 多任务学习, 对比学习, 数据集]
categories: [论文速递]
description: "针对合成语音经扬声器播放再被麦克风录制后伪造痕迹被掩盖的问题，ReplayFactor 用自监督表示加声学先验融合与双属性多任务对比学习来分离来源与回放线索，在 EchoFake 开放集上把宏观 F1 从 60.99% 提高到 76.44%、等错误率从 11.86% 降到 3.05%，代价是需要四类标注和更大的联合训练开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.02628"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "回放合成语音为什么难检：ReplayFactor 的双属性检测解读"
paper_digest_original_title: "ReplayFactor: Replay-Aware Dual-Attribute Learning for Practical Speech Deepfake Detection"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.02628v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.02628v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.02628v1.pdf"
paper_digest_primary_task: "语音伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "多任务学习"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对合成语音经扬声器播放再被麦克风录制后伪造痕迹被掩盖的问题，ReplayFactor 用自监督表示加声学先验融合与双属性多任务对比学习来分离来源与回放线索，在 EchoFake 开放集上把宏观 F1 从 60.99% 提高到 76.44%、等错误率从 11.86% 降到 3.05%，代价是需要四类标注和更大的联合训练开销。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Miao He"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiayi Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yu Zheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhongjie Ba"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Peng Cheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxi Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junjie Zhu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Changhao Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jian Liu"}]
paper_digest_abstract_sha256: "88f4e8caf96ee2a590b15e46d1ee10343636236ccd136405da51dea93772cba5"
paper_digest_sidecars: {"citation.bib":{"sha256":"328be826b4547fde0ab6fd321a965e846b4b21d5c8f29b282f216a3e950b717b","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02628/citation.bib"},"citation.json":{"sha256":"b2da87d39c02913f51c6009e5368b222c573516a6596d9ccce54cb37c10b609b","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02628/citation.json"},"citation.ris":{"sha256":"c3f33045ea46c82acd5504672a6e30da90148a2b9ab34a59e18ac122c26ce484","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02628/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3c1e76c87a0ba5225cd75fbfe06e555a54945d7b0bd189988f042b2c20c607d3","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02628/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "2164cfbffb70d0a8e5657f2b299d39e49b15e09fda8f371d738cb37783083294"
paper_digest_api_reader_plan_sha256: "31a9502e5e4d7a907bb97a4f55a8fa1c4ed7cee5b77c3e633062b447f585727f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8a21d8f3074df744147f9ebab7e91a8e7ffe07c558a187b125165b18872ca7e2"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "ee914890a11939d6416137fb01f6979d1744f051c58daf0acbb24fbee558f5a4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "ef31e4830831ada7e8364ad0cae545404aa7c8f70d3c045146e018e3b9997bb9"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "f415beed6232940668fd0b4b904450c919fbcf158ecc166db81b653a271b0657"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 回放合成语音为什么难检：ReplayFactor 的双属性检测解读

> 英文题目：*[ReplayFactor: Replay-Aware Dual-Attribute Learning for Practical Speech Deepfake Detection](https://arxiv.org/abs/2611.02628v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [语音伪造检测](/audio-paper-digest-blog/papers/?concept=task.speech-spoofing)
- **研究方法**：[多任务学习](/audio-paper-digest-blog/papers/?concept=method.multitask)；[对比学习](/audio-paper-digest-blog/papers/?concept=method.contrastive)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Miao He：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiayi Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Yu Zheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhongjie Ba：机构信息未能在本次解析中与作者逐人可靠绑定
- Peng Cheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuxi Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Junjie Zhu：机构信息未能在本次解析中与作者逐人可靠绑定
- Changhao Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jian Liu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

需要判断的输入是一段可能经过扬声器播放再被麦克风录制的语音，输出是该语音属于真实、合成、回放真实、回放合成中的哪一类，难点是回放引入的设备与环境失真会改变或掩盖合成痕迹，且合成模型与回放组合变化大。方法把四分类标签拆成来源属性与回放属性，来源属性区分人声与生成语音，回放属性区分是否经过物理回放，使同一属性在另一属性变化下仍能对齐。输入先经自监督编码器与图后端得到共享表示，再分出两个分支，来源分支直接用于人声与生成语音判别，回放分支额外融合声学先验以补充高频与通道失真线索。训练同时优化四分类主任务、两个二分类辅助任务和两个空间上的监督对比目标，对比目标把相同属性的样本拉近。相对已有工作，差异是不只做数据增强或回放仿真，而是显式增强回放证据并约束属性一致性。在 EchoFake 开集上，相对 EchoFake 报告的基线，宏平均 F1 从 60.99% 提升到 76.44%，等错误率从 11.86% 降到 3.05%。结论适用于英文开集与中文多设备评测中的相对提升，但跨数据集到 ReplayDF 的绝对分数仍然偏低。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/datasets/Ahola/ReplayFake-CN> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的现实威胁是什么

这篇论文处理的是语音防伪中的回放合成语音检测。输入是一段待判定的语音波形，目标是判断它是不是伪造的。普通合成语音检测假设音频是数字文件直接送入检测器，而现实中攻击者可以把合成语音用扬声器放出来，再用手机或智能眼镜录下来去攻击说话人验证系统。这种播放再录制的过程会引入扬声器、房间混响和麦克风通道的失真，可能掩盖合成器留下的细微痕迹，也会让特征分布发生偏移。

对初学者来说，关键是理解回放不是简单的加噪声。论文指出，不同合成模型留下的伪造痕迹不同，不同播放录制设备组合带来的高频衰减和频率响应失真也不同。当检测器只在非回放合成语音上训练时，遇到回放合成语音容易把它误判为真人语音。即使在回放数据上训练过，换一套没见过的合成模型或设备，性能还是会掉。因此论文把泛化到未见合成方法和未见设备作为核心困难。

### 已有路线为什么还不够

在语音伪造检测这条路线上，方法经历了从手工声学特征，到 RawNet2 和 AASIST 这类端到端模型，再到基于自监督学习编码器的检测器。自监督编码器在大规模语音上预训练，再接后端分类器，在数字合成语音上迁移性较好。论文肯定了这条路线的价值，但指出它主要针对非回放合成语音，对物理回放的关注很少。

在回放感知数据集和检测这条路线上，已有 ReplayDF 和 EchoFake 两个公开基准。论文认为 ReplayDF 覆盖的合成方法有限，EchoFake 只有英文且回放设备较少，二者都没有中文语音，也没有经过智能眼镜这类可穿戴设备回放的数据。已有工作多是分析回放导致的退化，或用数据增强和回放仿真来提高鲁棒性，缺少专门针对回放线索的检测器设计。也就是说，数据多样性和检测器结构两方面都有缺口，本文同时补数据和改模型。

### 四类标签是如何拆成两个属性的

论文把每条语音的标签记为真、假、回放真、回放假 4 类。为了显式学习两种变化，作者把它分解为两个二分类属性。来源属性区分人声与生成语音，真和回放真共享人声标签，假和回放假共享生成标签；回放属性区分非回放与回放，真和假共享非回放标签，回放真和回放假共享回放标签。

**来源属性 × 回放属性：** 来源属性判断语音是人说还是机器生成，回放属性判断语音是否经过播放再录制，二者正交组合成四类；分开建模是为了让模型在回放变化下仍能认出生成痕迹，在来源变化下仍能认出回放痕迹。

这样分解的好处是可以在一个属性变化时保持另一个属性的一致性。例如在来源空间里，回放真要和真靠近，因为它们都是人声，尽管一个经过回放；在回放空间里，回放真要和回放假靠近，因为它们都经过回放，尽管来源不同。后面的多任务和对比学习都是围绕这个分解来组织的。

### 整个方法让一个样本经历什么

从一个样本的角度看，流程分为表示提取和学习约束两大部分。原始波形先进入预训练自监督编码器加 AASIST 图后端，得到共享表示，再分别送入来源编码器和回放编码器，得到两个专用嵌入。同时，同一波形还走另一条声学先验分支，提取常数 Q 倒谱系数及动态特征，用轻量卷积网络编码，再通过门控加到回放嵌入上。最后，拼接后的嵌入送入四分类主头，两个专用嵌入各自送入对应的属性头，对比损失则在两个专用空间里分别计算。

下面这张框架图展示了两大模块的连接关系，读图时重点看主路径和汇合点。

> **看图路径：** 1. 先从左侧音频输入沿箭头看到自监督分支和声学先验分支；2. 再看中间共享表示如何分叉为来源编码器和回放编码器；3. 最后看右侧三个分类头分别输出什么标签

[![原论文 Figure 1：Overview of the proposed framework, comprising (I) Representation extraction with SSL and…](https://arxiv.org/html/2611.02628v1/architecture_v3.png)](https://arxiv.org/html/2611.02628v1/architecture_v3.png)

*论文图 1。原论文 Figure 1:：“Overview of the proposed framework, comprising (I) Representation extraction with SSL and acoustic-prior fusion; and (II) multi-task and supervised contrastive learning.”。*

从图中可以直接看到，左侧是两种表示的并行提取，中间是共享表示分叉，右侧是 3 个分类头的并行监督。来源分支只管人对生成的判别，回放分支在融合声学先验后只管非回放对回放的判别，四分类头则看两者的拼接，负责捕捉交互。这种分工是理解后面所有损失的前提。

### 自监督分支与声学先验如何分工融合

自监督分支的作用是提供强判别力的通用语音表示。论文使用 MMS-300M 作为自监督编码器，后接 AASIST 后端。AASIST 在这里是图注意力后端，负责把帧级表示聚合成 utterance 级表示。初学者可以把它理解为先由大模型提特征，再由图模型做池化和关系建模。两个属性编码器都是在此基础上映射出专用嵌入。

**自监督表示 × 声学先验：** 自监督表示指用大规模语音预训练编码器提取的通用特征，擅长捕捉合成痕迹但对通道失真不敏感；声学先验指常数 Q 倒谱系数这类对回放通道敏感的底层特征，二者融合是用前者保判别力、用后者补回放证据。

声学先验分支的具体计算是先对波形做常数 Q 变换取幅度平方加小常数取对数，再重采样加离散余弦变换得到静态系数，然后拼接 1 阶和 2 阶时间差分，用轻量卷积网络编码得到声学嵌入。原文给出的计算形式如下。

\[\begin{split}c_{i}&=\operatorname{DCT}\!\left(\operatorname{Resample}\left(\log\left(|\operatorname{CQT}(x_{i})|^{2}+\epsilon\right)\right)\right),\\ q_{i}&=[c_{i},\Delta c_{i},\Delta^{2}c_{i}],\quad e_{i}^{a}=\operatorname{LCNN}(q_{i}).\end{split}\]

其中静态系数及其差分构成输入，轻量卷积网络输出声学表示。融合采用样本级门控残差形式，门控值在 0 到 1 之间，每个样本自适应控制声学成分的加入量。

\[e_{i}^{r}=e_{i,\mathrm{ssl}}^{r}+g_{i}e_{i}^{a},\]

残差形式保留了原来的自监督回放嵌入，只是在此基础上补充声学线索。论文的动机是回放敏感线索多在高频差异和通道响应等底层细节中，自监督特征可能不够突出，需要显式补充。

### 三个分类头分别看什么输入

分类部分有 3 个头。主分类器看拼接后的来源嵌入和回放嵌入，输出 4 类；来源分类器只看来源嵌入，输出人声对生成；回放分类器只看融合后的回放嵌入，输出非回放对回放。3 个头都用交叉熵损失监督，分别记为四分类损失、来源损失和回放损失。

**四分类头 × 属性头：** 四分类头输入拼接后的来源与回放嵌入，直接区分真、假、回放真、回放假四类，捕捉两种属性的交互；属性头各只看一个嵌入，分别做人对生成、非回放对回放的二分类，保证每个分支学到专属线索。

举例来说，一条回放假语音在来源头中应被判为生成，在回放头中应被判为回放，在主头中应被判为回放假。如果只保留两个属性头，模型可能学好各自的二分类，但学不好两种属性组合时的边界；保留四分类头就是为了直接监督这种组合。消融实验中去掉四分类头后宏观 F1 下降最多，也支持了这一点。

### 多任务与双空间对比如何联合优化

除了分类监督，论文还在来源空间和回放空间分别做有监督对比学习。做法是在一个小批量内，对每个锚样本，把与它属性标签相同的其他样本当正样本，标签不同的当负样本，用温度缩放的余弦相似度计算对比损失。来源空间里真与回放真互为正样本，假与回放假互为正样本；回放空间里真与假互为正样本，回放真与回放假互为正样本。这样做的目的是让同一属性在另一种属性变化时保持接近。

**多任务学习 × 有监督对比学习：** 多任务学习同时优化四分类主任务和两个二分类属性任务，提供显式标签监督；有监督对比学习在来源空间和回放空间分别拉近同属性样本、推远异属性样本，二者搭配是分类管分界面、对比管跨条件一致性。

总目标是 5 个损失的加权和，包括一个四分类交叉熵、两个属性交叉熵和两个空间的对比损失，权重分别控制属性分类和对比的强度。

\[\mathcal{L}=\mathcal{L}_{\mathrm{CE}}^{4}+\alpha_{s}\mathcal{L}_{\mathrm{CE}}^{s}+\alpha_{r}\mathcal{L}_{\mathrm{CE}}^{r}+\lambda_{s}\mathcal{L}_{\mathrm{sup}}^{s}+\lambda_{r}\mathcal{L}_{\mathrm{sup}}^{r}.\]

训练时每个小批量都包含 4 类样本，用 Adam 优化器更新，学习率对自监督编码器和 AASIST 设为 10 的负 6 次方，对轻量卷积网络设为 10 的负 4 次方，权重衰减为 10 的负 4 次方。论文对自监督编码器是全量微调，不是冻结。选择验证集上宏观 F1 最高的检查点做评测。

### 在哪些数据和指标下比较

实验用了 EchoFake、ReplayDF 和自建的 ReplayFake-CN 3 个数据集。EchoFake 按官方划分有训练、验证、封闭评测和开放评测，封闭条件见过，开放条件有未见因素。ReplayDF 只包含回放真和回放假，用于跨数据集测试，即模型在 EchoFake 上训练后直接测 ReplayDF。ReplayFake-CN 的训练用了其回放假训练划分，加上另外的非公开内部数据的真、假和回放真，共约 400,000 样本，评测时在未见合成模型、未见设备和两者都未见 3 种协议下报告回放假分类准确率。

**封闭集 × 开放集：** 封闭集指评测用的合成方法和回放设备在训练中都见过，考查拟合能力；开放集指评测包含未见过的合成方法或设备，考查跨条件泛化，本文的主要结论都限定在开放集条件下才成立。

指标方面，四分类用 F1 分数，防伪二分类把真当真、其余 3 类当攻击来算等错误率，等错误率越低越好，F1 和准确率越高越好。基线包括 XLSR-Linear、XLSR-AASIST、MMS-Linear、MMS-AASIST 和 WavLM-Nes2Net 等，为公平比较都把二分类输出层换成四分类，并在相同协议下复现。

### 开放集和跨数据集结果说明什么

开放集泛化能力是这里要检验的比较问题，都在 EchoFake 上训练的模型在未见条件下比较等错误率和 F1，等错误率越低越好、F1 越高越好。

| Model | Test | EER↓ | F1-score↑ | F1-score↑ | F1-score↑ | F1-score↑ | F1-score↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Test | EER↓ | macro. | BB | R​BRB | FF | R​FRF |
| XLSR-Linear †Reported in [21] | Closed | 0.27 | 98.81 | 99.63 | 98.16 | 99.43 | 98.02 |
| XLSR-Linear †Reported in [21] | Open | 11.86 | 60.99 | 78.83 | 40.13 | 75.64 | 49.34 |
| XLSR-Linear †Reported in [21] | ReplayDF | – | – | – | 7.72 | – | 19.02 |
| XLSR-AASIST | Closed | 0.47 | 98.33 | 98.68 | 97.97 | 98.66 | 98.02 |
| XLSR-AASIST | Open | 8.17 | 56.99 | 86.69 | 19.96 | 71.91 | 49.40 |
| XLSR-AASIST | ReplayDF | – | – | – | 7.02 | – | 13.69 |
| WavLM-Nes2Net | Closed | 1.68 | 76.75 | 78.15 | 66.01 | 84.08 | 78.77 |
| WavLM-Nes2Net | Open | 21.72 | 46.13 | 67.84 | 20.45 | 56.81 | 39.42 |
| WavLM-Nes2Net | ReplayDF | – | – | – | 0.82 | – | 19.75 |
| MMS-Linear | Closed | 0.13 | 97.37 | 99.73 | 94.81 | 99.70 | 95.24 |
| MMS-Linear | Open | 8.09 | 59.80 | 88.09 | 8.79 | 82.99 | 59.34 |
| MMS-Linear | ReplayDF | – | – | – | 1.97 | – | 18.26 |
| MMS-AASIST | Closed | 0.54 | 98.40 | 99.30 | 97.59 | 99.17 | 97.53 |
| MMS-AASIST | Open | 7.26 | 62.27 | 90.14 | 25.93 | 77.99 | 55.02 |
| MMS-AASIST | ReplayDF | – | – | – | 6.73 | – | 25.94 |
| Ours | Closed | 0.53 | 97.93 | 99.04 | 97.16 | 98.72 | 96.81 |
| Ours | Open | 3.05 | 76.44 | 93.91 | 61.12 | 82.01 | 68.72 |
| Ours | ReplayDF | – | – | – | 38.31 | – | 40.32 |

封闭集上本文方法略低于基线，开放集上提升明显。原文明确写道开放集上等错误率从 11.86% 降到 3.05%、宏观 F1 从 60.99% 提高到 76.44%，在 ReplayDF 上回放真和回放假 F1 达到 38.31% 和 40.32%，超过对应的最佳基线 6.73% 和 25.94%。

解释这些数字时要注意限制。提升只在开放集和跨数据集条件下成立，封闭集上本文方法宏观 F1 为 97.93%，略低于复现的 MMS-AASIST 的 98.40%。而且 ReplayDF 上的绝对值仍然不高，论文自己也指出跨语言、跨合成方法和跨设备的泛化依然困难。频谱分析为此提供了直观依据。

下面这张频谱图对比了同一句话的原始版本和经两种扬声器回放后被同一手机录制的版本，读图时关注高频衰减的差异。

> **看图路径：** 1. 对比上下三张频谱图在 4 千赫以上高频能量的明暗变化；2. 注意同一句话经不同扬声器回放后的谐波延续差异；3. 结合横轴时间看失真是全局性的还是集中在某些音节

[![原论文 Figure 3：Spectrograms of the original non-replay utterance (top) and its replays through JBL (middle) and…](https://arxiv.org/html/2611.02628v1/stft_play.png)](https://arxiv.org/html/2611.02628v1/stft_play.png)

*论文图 3。原论文 Figure 3:：“Spectrograms of the original non-replay utterance (top) and its replays through JBL (middle) and Xiaoai (bottom) loudspeakers, both recorded with a Huawei Mate30Pro phone.”。*

从像素上可以直接看到，原始语音高频能量较丰富，经 JBL 和 Xiaoai 回放后高频部分都有衰减，但衰减程度和纹理不同，尤其在 4 千赫以上。这种设备相关的失真差异说明回放效应不是固定的，检测器必须适应不同的扬声器和录音设备。论文还提到智能眼镜比手机引入更大的频率响应失真，不同合成模型的痕迹受回放影响程度也不同。

### 新数据集 ReplayFake-CN 的规模与未见条件表现

ReplayFake-CN 是为补充已有基准而建的大规模中文数据集，它覆盖的内容和在大训练量下方法是否仍有增益是这里要回答的比较问题。该数据集配置来自原文统计表。

| Variable | Configuration |
| --- | --- |
| Data scale | 184,954 utterances, 232.5 hours |
| TTS models | 22 models, e.g., CosyVoice3 [6], F5-TTS [2], Step-Audio [8], LLaSA-1B [20], and etc. |
| Play devices | 6 consumer and 3 high-fidelity loudspeakers, e.g., JBL, HP-speaker, Edifier-MR4, etc. |
| Record devices | 8 phones and 2 smart-glasses, e.g., iPhone, OPPO, HuaweiMate, and Rokid_glasses, etc. |
| Combinations | 90 playback–recording device pairs |

该表说明数据集包含 184954 条、232.5 小时语音，来自 1921 个说话人，文本覆盖日常生活和支付相关场景，用 22 个合成模型生成，经 9 种播放设备和 10 种录制设备组合成 90 对播放录制对，距离包括 10、30 和 50 厘米。论文脚注给出数据集链接，但正文说完整数据集将稍后发布，第三方镜像当前可达不等于作者已正式开源，复现时要以作者发布为准。

在 ReplayFake-CN 未见条件下的准确率比较中，条件是都用大规模训练集训练，指标是回放假分类准确率越高越好。

| Method | Overall ACC | Unseen Synthesis | Unseen Devices | Unseen Synth.–Devices |
| --- | --- | --- | --- | --- |
| MMS-300M | 55.43 | 64.04 | 46.63 | 62.98 |
| MMS-AASIST | 84.22 | 93.97 | 82.59 | 73.30 |
| Ours | 85.44 | 96.95 | 83.00 | 73.75 |

该表显示公开 AntiDeepfake 检查点不微调时总体准确率仅 55.43%，说明直接套用旧模型效果有限；同数据训练的 MMS-AASIST 达到 84.22%，本文方法达到 85.44%。分协议看，未见合成模型下从 93.97% 提高到 96.95%，未见设备下为 83.00% 对 82.59%，两者都未见时为 73.75% 对 73.30%。这说明增益在未见合成模型时最大，设备域偏移仍然最难，论文也把总体增益较小归因于 40 万大训练集让基线本身变强。

### 每个组件拿掉后发生什么

消融要回答声学先验、对比学习和四分类头各自的作用，条件是 EchoFake 开放集，指标方向与主结果相同。

| Configuration | EER↓ | F1-score↑ | F1-score↑ | F1-score↑ | F1-score↑ | F1-score↑ |
| --- | --- | --- | --- | --- | --- | --- |
| Configuration | EER↓ | macro-F1 | BB | R​BRB | FF | R​FRF |
| 4-class baseline | 7.26 | 62.27 | 90.14 | 25.93 | 77.99 | 55.02 |
| Ours (full) | 3.05 | 76.44 | 93.91 | 61.12 | 82.01 | 68.72 |
| w/o acoustic prior | 8.11 | 73.54 | 89.07 | 61.44 | 84.28 | 59.37 |
| w/o SupCon | 2.70 | 73.89 | 93.82 | 50.77 | 82.85 | 68.14 |
| w/o 4-class head | 4.31 | 69.22 | 94.84 | 32.97 | 84.03 | 65.03 |

完整模型相对四分类基线把等错误率从 7.26% 降到 3.05%、宏观 F1 从 62.27% 提高到 76.44%。去掉声学先验后等错误率升到 8.11%，回放假 F1 明显下降，说明底层声学线索补充了自监督特征之外的回放证据；去掉对比学习后等错误率略降到 2.70%，但宏观 F1 降到 73.89%，主要是回放真 F1 下降，说明对比有助于维持该困难类的属性一致性；去掉四分类头后宏观 F1 下降最多，说明主任务捕捉了来源与回放的交互。

表示可视化进一步展示了这种分离的效果，读图时分别看 3 个空间的成团情况。

> **看图路径：** 1. 先看中间来源空间人声与生成语音是否分成两团；2. 再看右侧回放空间非回放与回放是否分成两团；3. 最后看左侧联合空间回放真与回放假的重叠区域

[![原论文 Figure 2：t-SNE visualizations on the EchoFake closed set: (a) joint, (b) source, and (c) replay…](https://arxiv.org/html/2611.02628v1/tsne_singlecol_v1.png)](https://arxiv.org/html/2611.02628v1/tsne_singlecol_v1.png)

*论文图 2。原论文 Figure 2:：“t-SNE visualizations on the EchoFake closed set: (a) joint, (b) source, and (c) replay representations.”。*

从像素上看，中间来源空间人声与生成语音基本分成蓝绿两团，右侧回放空间非回放与回放也基本分开，左侧联合空间 4 类大体可分，但回放真与回放假之间仍有轻微重叠。这与论文的判断一致：在物理回放下区分人声与合成语音仍然困难，对比和融合只是缓解而没有完全解决。

### 结论在什么边界内才成立

首先，开放集上的大幅提升依赖于与基线相同的 EchoFake 训练评测划分和四分类复现设置，换数据集或换划分结论可能变化。跨数据集到 ReplayDF 时绝对性能仍然有限，回放真和回放假 F1 只有 30% 到 40% 量级，不能理解为已解决跨语言和跨设备问题。

其次，ReplayFake-CN 上的增益较小，且训练用了非公开内部数据的真、假和回放真，外界无法完全复现同样的大训练集。公开检查点直接测试只有 55.43% 的准确率，恰恰说明该数据集难度高，单靠旧模型不行。论文没有报告训练时长、参数量和推理延迟，也没有测量误判率之外的部署成本，因此不能从准确率推断实时性和成本优势。

最后，t-SNE 只是封闭集上的可视化，不能当作泛化证明；频谱图只展示了两种扬声器和一种录音手机的例子，不能推广到全部 90 对设备组合。缺证据不等于技术有错，只是说明还需要补验证。

### 想复现第一步该做什么

如果要复现，建议先从 EchoFake 的官方划分跑通四分类 MMS-AASIST 基线，确认封闭集和开放集的宏观 F1 与等错误率与原文复现值接近，再逐步加入声学先验分支和双空间对比损失。声学分支需要实现常数 Q 变换、对数、重采样、离散余弦变换和差分拼接，再接轻量卷积网络；融合处的门控是每个样本一个 0 到 1 的标量，残差相加。

关键超参数是总损失中两个属性分类权重和两个对比权重，以及对比温度，原文未给出具体数值，复现时需要按验证集宏观 F1 调参，并保证每个小批量都包含 4 类。优化器用 Adam，自监督和 AASIST 学习率为 10 的负 6 次方，轻量卷积网络为 10 的负 4 次方，权重衰减为 10 的负 4 次方。数据集方面，ReplayFake-CN 原文说将发布，当前第三方链接可达只证明论文提到该链接，不能当作作者已开源，正式实验前要确认版本和元数据是否包含说话人、合成模型、设备和距离字段。

### 什么时候值得尝试这个思路

当你的场景明确包含播放再录制，例如门禁、支付语音验证或会议录音鉴伪，且测试中会出现未见过的手机、音箱或合成模型时，这种显式分离来源与回放的思路值得尝试。它把回放线索交给专门的分支和声学先验，把跨条件一致性交给对比学习，比只做数据增强更贴合回放机理。

但如果你的数据全是数字直传合成语音，没有回放环节，那么声学先验和回放分支可能带来额外开销而收益有限。同样，如果训练数据很小，四分类加双对比的联合优化可能不稳定，需要先验证基线是否收敛。

### 还需要补哪些验证

未来工作至少要补三项验证。一是在更多语言和真实房间环境下的跨数据集测试，确认高频衰减规律是否稳定；二是报告不同设备组合下的分条件错误率，而不是只给总体准确率，以便看清设备域偏移的来源；三是补上训练资源、推理延迟和模型大小的测量，说明门控融合和双对比带来的实际代价。

对刚入门的研究生来说，复述关键步骤可以这样记：输入波形走两路，一路是自监督加图后端再分叉为来源和回放嵌入，另一路是常数 Q 倒谱加轻量卷积经门控补给回放嵌入；训练用四分类加两属性分类加双空间对比联合优化；评测必须分封闭、开放和跨数据集看，开放集和未见设备上的结论才有实用意义。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.02628v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
