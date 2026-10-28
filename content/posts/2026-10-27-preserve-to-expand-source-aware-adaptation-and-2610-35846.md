---
title: "Preserve to Expand: Source-Aware Adaptation and Model Merging for Multilingual LLM-Based ASR"
date: 2026-10-27
draft: false
tags: [语音识别, 模型融合, 持续学习, 多语言]
categories: [论文速递]
description: "论文研究在不回放源语言数据时只调连接器来加新语言，用源语言校准冻结加更新合并平衡新语言习得与旧语言保持，多目标时联合合并更稳而按序递归更看顺序。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.35846"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "先保住旧语言再学新语言：面向多语言语音大模型的连接器扩展与合并"
paper_digest_original_title: "Preserve to Expand: Source-Aware Adaptation and Model Merging for Multilingual LLM-Based ASR"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.35846v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.35846v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.35846v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.model-combination","label":"模型融合"},{"facet":"method","id":"method.continual","label":"持续学习"},{"facet":"setting","id":"setting.multilingual","label":"多语言"}]
paper_digest_primary_method: "模型融合"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文研究在不回放源语言数据时只调连接器来加新语言，用源语言校准冻结加更新合并平衡新语言习得与旧语言保持，多目标时联合合并更稳而按序递归更看顺序。"
paper_digest_authors: [{"affiliations":["Institute for Analytics and Data Science, University of Essex","School of Computer Science and Electronic Engineering, University of Essex"],"name":"Yuchen Zhang"},{"affiliations":["Institute for Analytics and Data Science, University of Essex","School of Computer Science and Electronic Engineering, University of Essex"],"name":"Haralambos Mouratidis"},{"affiliations":["Institute for Analytics and Data Science, University of Essex","School of Computer Science and Electronic Engineering, University of Essex"],"name":"Ravi Shekhar"}]
paper_digest_abstract_sha256: "a37cbbf0faf083be9be123c3f3b5d7b6d78b5b9e66f071efd250d9ae7a7a69e4"
paper_digest_sidecars: {"citation.bib":{"sha256":"7645a3d4e7e84b1c2161d5a2b482414a6ae7f28ad527fa5997676202ed55b61c","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35846/citation.bib"},"citation.json":{"sha256":"cd663fea8b79eae32860cdce885453bd025d1b0c6047cb7e656196f29d02ce06","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35846/citation.json"},"citation.ris":{"sha256":"d2b6787c4a41715d7842fc5fa51296ebd97277b58c2a511c1ef57d6e38c55794","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35846/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e7047a314dfbd45975b079f8a78b22e78d9c6d12b92635dbe4dbea74813d4a7d","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35846/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "078c1908f856a950b67f047a82a202a21357f927a9b1c602edf13a68a33aaf79"
paper_digest_api_reader_plan_sha256: "49313f11796888fdec25d6b03792366b161939753bf19a1de87756bd8455e471"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e78461179c32e6e28e3913aeeb97b533b95d9c0b757dcac727aef9f37225bf9d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "5c48c43b06918dec0daf336155c15a7d9c168b4151200832da90952a21e4f4dd"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f08739d6ce7c3cfcb265ddc5107348b4fb61e63c67edbf930bce50ecbe15cf24"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9131d99d5b42df801fa5684c9b922fa8836e58c63548512e812077ec0d8d227b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 先保住旧语言再学新语言：面向多语言语音大模型的连接器扩展与合并

> 英文题目：*[Preserve to Expand: Source-Aware Adaptation and Model Merging for Multilingual LLM-Based ASR](https://arxiv.org/abs/2610.35846v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[模型融合](/audio-paper-digest-blog/papers/?concept=method.model-combination)；[持续学习](/audio-paper-digest-blog/papers/?concept=method.continual)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Yuchen Zhang：Institute for Analytics and Data Science, University of Essex；School of Computer Science and Electronic Engineering, University of Essex
- Haralambos Mouratidis：Institute for Analytics and Data Science, University of Essex；School of Computer Science and Electronic Engineering, University of Essex
- Ravi Shekhar：Institute for Analytics and Data Science, University of Essex；School of Computer Science and Electronic Engineering, University of Essex

## 📌 核心摘要

多语言自动语音识别在加入新语言时，需要在不回放源语言训练数据、不对源语言做梯度更新的条件下，同时学会目标语言并保留原有源语言能力。论文研究对象是连接器式语音大语言模型，输入语音经冻结语音编码器和降采样后，由可训练连接器映射到冻结大语言模型，由解码器生成转写，全部适配只改连接器参数。处理流程是先在目标语言上微调得到目标更新，再用源语言校准集估计重要连接器列并冻结，最后对更新做修剪与合并后加回基座。相比已有直接微调与标准 TIES 合并，该工作引入了基于 Wanda 激活的源语言屏蔽更新与合并结合，并在多目标上对比了联合合并与递归适配。日耳曼语基座上 SSU-Wanda+TIES 把源语言词错率增量控制在 0.24 个百分点，目标词错率从 102.70% 降到 35.82%。结论适用于 Common Voice 上三个语系基座与六个目标语言的受控扩展，递归顺序敏感且斯拉夫语等多目标目标学习仍不充分。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的输入输出和不能丢的信息是什么

这篇论文做的是多语言语音识别的扩展。输入是一段语音信号，输出是对应文字转写。评价用词错误率，数值越低越好，论文同时报告源语言词错误率和目标语言词错误率。

已有系统已经在一个多语言基础连接器上支持了若干源语言，现在要在不拿回源语言训练数据、不对源语言做梯度训练的前提下，加入新的目标语言。必须保留的信息是源语言上的识别能力，不能为了学会新语言把旧语言洗掉。

难点在于只调很小的连接器、数据也有限，直接在新语言上微调很容易灾难性遗忘。论文把问题拆成两问：单目标时怎样构造更新并合并才能兼顾习得与保持，多目标时多个独立目标更新之间怎样协调。

### 已有路线为什么还不够

多语言语音识别扩展过去常被当作持续学习问题。常见做法是回放源语言数据、加正则约束参数变化，或针对解码器做专门优化。这些做法要么需要存数据，要么需要源语言梯度，与本文无回放、无源梯度的设定不在同一输入条件下，不能直接比较优劣。

模型合并是另一条路线。模型汤显示同一起点微调后的权重平均能提升稳健性，任务向量把微调效果看成可加减的向量。TIES 合并进一步处理干扰，先去掉小幅变化，再解决符号冲突，只平均符号一致的更新。语言专用合并也被用来降低多语言大模型维护成本。

参数选择性适应则想只动不重要的参数。Source-Shielded Updates 用源语言数据估计重要单元，冻结它们再学目标。本文把这 3 条线装进同一个连接器扩展框架，比较直接微调、保护微调和合并的实际分工。

### 无回放扩展的严格限制是什么

论文设定非常严格。语音编码器和大语言模型解码器全程冻结，只有连接器参数能动。源语言训练数据在扩展阶段不可用，也不允许用源语言算梯度。

唯一允许的源信息是轻量校准：每个源语言取验证集中的 5 分钟语音，总共 25 分钟，只做前向收集激活、构造冻结掩码，不回放、不训练。这个例子能帮初学者理解边界：好比只允许看一眼旧课本目录来决定哪页不能改，但不允许重做旧习题。

目标侧每个新语言给 5 小时训练语音，每次单目标实验都从同一个多语言基础连接器独立出发。基础按语系分组，日耳曼、罗曼、斯拉夫各 5 种源语言，目标涉及挪威语、意大利语、塞尔维亚语、波兰语、斯洛文尼亚语和吉尔吉斯语，并按语组是否相同、文字是否相同划分兼容类型。

### 整体流程如何从语音走到新旧语言兼顾

方法分 3 段。先是主链：语音经冻结编码器变成声学表示，再经堆叠降采样压缩帧率，然后经可训练连接器映射到大模型嵌入空间，最后由冻结解码器自回归生成文字。所有适应和合并都只改连接器。

单目标时先用目标数据得到目标连接器并算出与基础的差，再决定是直接用它，还是经 TIES 处理后缩放加回。多目标时有两条路线，联合路线是各自独立适配再合并，递归路线是一个接一个续训。

下面这张图把 3 段放在一起，先看主链谁冻结谁可训，再看保护掩码从哪里来、控制哪里，最后对比联合与递归的起点差异。

> **看图路径：** 1. 先看上面一路语音到文字的主链，确认只有连接器可训练；2. 再看中间一路源校准如何生成保护掩码并控制目标适应；3. 对比下面一路联合合并与递归适应的起点和汇合方式有何不同

[![原论文 Figure 1：Overview of source-aware multilingual ASR expansion.](https://arxiv.org/html/2610.35846v1/merging.svg)](https://arxiv.org/html/2610.35846v1/merging.svg)

*论文图 1。原论文 Figure 1:：“Overview of source-aware multilingual ASR expansion.”。*

图的上栏明确只有连接器参数被适应和合并，中栏显示源校准只用于构造掩码而不做源回放，代表路线是 SSU-Wanda 加 TIES，下栏左侧联合合并强调从同一基础独立适应，右侧递归适应强调每 1 阶段都从上 1 阶段的连接器出发。这张图帮读者把后文公式和实验条件对号入座。

### 连接器主链处理了什么对象

沿一个样本走一遍。输入语音经编码器得到批量、帧数和编码维度的声学张量，再把每相邻若干帧拼接起来降帧率，得到更短但更宽的序列。连接器把这个序列变成大模型词嵌入空间中的向量序列，解码器逐词预测转写。

**连接器 × 语音编码器 × 大语言模型解码器：** 语音编码器负责把语音变成声学表示但全程冻结，大语言模型解码器负责生成文字也冻结，连接器是中间可训练的小模块，负责把降采样后的声学序列映射到大模型能接受的嵌入空间，三者搭配让扩展只动连接器就能控制遗忘面。

**源语言 × 目标语言 × 基础连接器：** 源语言是基础连接器已学会的 5 种语言，目标语言是后加的新语言，基础连接器是所有适应的起点，源语言只提供少量校准而不参与梯度训练，目标语言提供 5 小时适配数据，搭配后才能在无回放条件下谈保持与习得。

这种冻结两端、只动中间的设计把遗忘面收窄到连接器，也让后文的冻结列和更新合并都有明确对象：都是连接器权重矩阵的列和差向量。

### 源感知保护掩码怎样算出来

先构造目标适配连接器，再看成从基础出发的更新，这是后文合并的原料。

\[\theta_{\mathrm{tgt}}=\mathrm{FT}(\theta_{\mathrm{base}},\mathcal{D}_{\mathrm{tgt}}),\]

\[\tau_{\mathrm{tgt}}=\theta_{\mathrm{tgt}}-\theta_{\mathrm{base}}.\]

源感知的做法是先估计哪些列对源语言重要。Wanda 标准把权重绝对值乘上该输入通道在源校准激活中的范数，幅度大且常被源语言激活的列得分高。

\[s_{ij}^{\mathrm{Wanda}}=|W_{ij}|\cdot\|\mathbf{x}_{j}\|_{2},\]

按列求和得到列分，再取最高的若干比例作为保护集，随机掩码则同等数量随机抽，幅度掩码只看权重大小。

**Source-Shielded Updates × Wanda 重要性 × 保护掩码：** Source-Shielded Updates 是按列冻结源重要参数再学目标的策略，Wanda 重要性用权重幅度乘源校准激活范数来估计哪一列对源语言重要，保护掩码把得分最高的列标为冻结列，三者组合让目标梯度只走不重要的列从而减少对源行为的干扰。

### 冻结后梯度实际走哪里

保护集确定后生成二值掩码，保护列为 0、可调列为 1，1 维偏置则每个参数自成一列。

\[B_{ij}=\begin{cases}0,&\text{if }j\in\mathcal{P}_{\rho},\\ 1,&\text{if }j\notin\mathcal{P}_{\rho}.\end{cases}\]

训练时梯度要乘上这个掩码，保护列不更新，可调列正常更新，学习目标只来自当前目标语言的损失。

\[W_{ij}\leftarrow W_{ij}-\eta B_{ij}\nabla_{W_{ij}}\mathcal{L}_{\mathrm{tgt}},\]

得到保护适配后的连接器及其更新后，还有一个 SSU 加微调变体，先保护训练再放开做普通微调，用来检验保护起点是否为后续优化提供了更好初值。

**目标更新 × TIES 合并 × 缩放系数：** 目标更新是目标适配后连接器减去基础连接器的差向量，TIES 合并负责对差向量做修剪、投票选符号再只平均同号项，缩放系数控制合并后加回基础的强度，组合后单目标退化为修剪再缩放，多目标则能调和不同语言更新的方向冲突。

**联合更新合并 × 递归适应 × 目标顺序：** 联合更新合并是每个目标都从同一基础独立适配再一次性合并，递归适应是上一个目标的连接器作为下一个目标的起点逐个续训，目标顺序只影响后者，搭配对比才能看出稳定保持与激进习得之间的取舍。

### 训练、校准和合并各用了什么计算

本研究确实训练了连接器，但训练面很窄。优化器用 AdamW，学习率 1×10-4，权重衰减 1×10-6，批量 4，降采样因子 4，最多 5 轮并按验证损失早停，每个运行取最后检查点，解码用束宽 4，两块 A6000 完成。编码器和大模型始终不训练。

源校准不是训练，只是前向收集激活算 Wanda 分数并建掩码。TIES 合并不是梯度训练，而是修剪、符号投票和同号平均三步，再乘缩放系数加回基础。单目标时集合只有一个更新，TIES 退化为保留绝对值最大的部分再缩放。

多目标联合合并把多个独立目标更新一起送入 TIES，能解决跨语言符号冲突。递归方法则按顺序逐个做梯度训练，每阶段只用当前目标数据。论文没有报告合并的修剪比例和缩放系数的搜索细节，这是复现时需要补看的缺口。

### 数据、基线和指标如何保证可比

数据用 Common Voice。每个多语言基础含 5 种源语言、每种 5 小时，共 25 小时。每个目标适配用 5 小时。SSU-Wanda 校准用每个源语言验证集 5 分钟，共 25 分钟且按时长均衡。日耳曼和罗曼基础各扩展到挪威语、意大利语和塞尔维亚语，斯拉夫基础扩展到意大利语、塞尔维亚语、波兰语、斯洛文尼亚语和吉尔吉斯语。

比较方法在同一目标预算下进行：直接目标微调、不带保护的 TIES、随机保护加 TIES、幅度保护加 TIES、Wanda 保护加 TIES，以及 SSU-Wanda 加微调。多目标再比较联合 TIES、硬保护与增量动态保护、递归变体。指标是源、目标和全体的词错误率，都是越低越好，并报告源退化量。

单目标每个目标独立从基础出发，多目标联合方法各自独立适配后合并，递归方法按给定顺序串行训练。给定顺序在日耳曼和罗曼是挪威语到意大利语到塞尔维亚语，在斯拉夫是意大利语到塞尔维亚语到波兰语到斯洛文尼亚语到吉尔吉斯语，另有若干顺序用来测敏感性。

### 单目标时保护加合并换来了什么

单目标实验要回答：只加入一种新语言时，源感知保护与 TIES 合并能否同时保留旧语言并学会新语言？下表按 3 个基础语组，对各自的单目标扩展配置作宏平均。每种目标仅用 5 小时训练，只调整连接器，语音编码器与大语言模型冻结；各方法使用同样的训练配置、验证早停与解码设置。Source、Target 和 All 分别是源语言、新目标语言和全体语言的词错误率，越低越好。

ΔSource 是相对同组原始基础的源词错误率变化，正值意味着遗忘增加；保留原表打印值，不用 2 位小数的展示数重新计算它。

原论文 Table 3：按基础语组汇总单目标扩展的宏平均词错误率，原表单位 WER（%），越低越好。Source、Target、All 分别对应源语言、目标语言及全体；ΔSource 保留原表定义与打印数值。

| Base | Method | Source | Target | All | ΔSource |
| --- | --- | --- | --- | --- | --- |
| GEM | Base | 22.57 | 102.70 | 35.93 | +0.00 |
| GEM | Target FT | 69.73 | 27.86 | 62.75 | +47.15 |
| GEM | SSU-Wanda+FT | 67.46 | 28.47 | 60.96 | +44.89 |
| GEM | TIES | 69.08 | 27.71 | 62.18 | +46.50 |
| GEM | SSU-Rand+TIES | 29.42 | 30.30 | 29.56 | +6.84 |
| GEM | SSU-Mag+TIES | 40.83 | 29.52 | 38.95 | +18.26 |
| GEM | SSU-Wanda+TIES | 22.81 | 35.82 | 24.98 | +0.24 |
| ROA | Base | 18.95 | 111.16 | 34.32 | +0.00 |
| ROA | Target FT | 74.50 | 28.06 | 66.76 | +55.54 |
| ROA | SSU-Wanda+FT | 55.15 | 29.45 | 50.87 | +36.20 |
| ROA | TIES | 73.59 | 27.77 | 65.95 | +54.63 |
| ROA | SSU-Rand+TIES | 33.79 | 29.50 | 33.08 | +14.84 |
| ROA | SSU-Mag+TIES | 41.21 | 29.31 | 39.22 | +22.25 |
| ROA | SSU-Wanda+TIES | 19.64 | 37.36 | 22.59 | +0.69 |
| SLA | Base | 36.93 | 110.15 | 49.13 | +0.00 |
| SLA | Target FT | 91.41 | 36.37 | 82.24 | +54.49 |
| SLA | SSU-Wanda+FT | 85.61 | 36.15 | 77.36 | +48.68 |
| SLA | TIES | 90.88 | 37.03 | 81.90 | +53.95 |
| SLA | SSU-Rand+TIES | 59.46 | 41.69 | 56.50 | +22.54 |
| SLA | SSU-Mag+TIES | 72.06 | 40.55 | 66.81 | +35.13 |
| SLA | SSU-Wanda+TIES | 43.60 | 51.69 | 44.95 | +6.68 |

单独微调虽然学会新语言，却严重损害旧语言。以日耳曼基础为例，Target FT 把目标词错误率从 102.70% 降到 27.86%，源词错误率却从 22.57% 升到 69.73%；标准 TIES 也保留了大部分遗忘。单独冻结源重要参数的 SSU-Wanda+FT 仍未恢复平衡。SSU-Wanda+TIES 把该组源词错误率保持在 22.81%，目标为 35.82%，全体为 24.98%。本表数值与单位依据论文 PDF。

罗曼基础对应源 19.64%、目标 37.36%、全体 22.59%；斯拉夫基础仍更困难，源 43.60%、目标 51.69%、全体 44.95%。这支持保护与合并组合的价值，但不代表每一端都最优：例如斯拉夫随机保护的目标词错误率 41.69% 低于 Wanda 的 51.69%，代价是源语言遗忘更重。宏平均也不等于每种目标语言都同样受益，下一组逐目标结果需另行核对。

### 多目标时联合合并与递归谁更稳

要回答的是多个新语言能否一次并入，以及顺序是否重要。联合方法把从同一基础独立训出的目标更新合并，不再做梯度训练，递归方法按序续训，最终都看源、目标和全体词错误率。给定顺序是日耳曼和罗曼为挪威语到意大利语到塞尔维亚语，斯拉夫为意大利语到塞尔维亚语到波兰语到斯洛文尼亚语到吉尔吉斯语。

下表为最终阶段结果，在给定顺序下比较联合合并与递归方法，指标越低越好。

| Base | Method | Source | Target | All |
| --- | --- | --- | --- | --- |
| GEM | Base | 22.57 | 102.70 | 52.62 |
| GEM | TIES | 22.11 | 64.93 | 38.17 |
| GEM | Hard SSU+TIES | 22.02 | 86.76 | 46.30 |
| GEM | Incremental dynamic SSU | 21.64 | 84.26 | 45.12 |
| GEM | Recursive rebased SSU | 37.13 | 45.39 | 40.23 |
| GEM | Recursive FT then SSU | 28.97 | 57.34 | 39.61 |
| ROA | Base | 18.95 | 111.16 | 53.53 |
| ROA | TIES | 19.58 | 67.22 | 37.45 |
| ROA | Hard SSU+TIES | 18.10 | 98.67 | 48.32 |
| ROA | Incremental dynamic SSU | 18.06 | 90.90 | 45.38 |
| ROA | Recursive rebased SSU | 58.27 | 56.53 | 57.62 |
| ROA | Recursive FT then SSU | 50.37 | 70.21 | 57.81 |
| SLA | Base | 36.93 | 110.15 | 73.54 |
| SLA | TIES | 33.93 | 97.41 | 65.67 |
| SLA | Hard SSU+TIES | 34.64 | 102.92 | 68.78 |
| SLA | Incremental dynamic SSU | 33.91 | 98.63 | 66.27 |
| SLA | Recursive rebased SSU | 103.43 | 73.61 | 88.52 |
| SLA | Recursive FT then SSU | 38.45 | 81.67 | 60.06 |

联合 TIES 在 3 个基础上都把源保持在基础附近，目标平均明显好于零样本，日耳曼从 102.70% 降到 64.93%，罗曼从 111.16% 降到 67.22%，斯拉夫从 110.15% 降到 97.41%。但多目标保护变体往往目标更差，说明保护太严会限制多更新叠加。递归在给定顺序下对日耳曼和斯拉夫目标更好，但对罗曼很差，说明它方差大。附录冲突分析也支持这一点，不同目标更新余弦相似度低、符号不一致比例高，直接叠加容易打架，这正是需要 TIES 先修剪小变化再按符号投票调和的原因。

### 换个顺序递归结果会翻转吗

要回答的是递归是否只是运气问题。比较同为递归先微调后保护、只换目标顺序的最终源、目标和全体词错误率，联合 TIES 与顺序无关可作参照。递归每次从上 1 阶段的连接器出发，只用当前目标语言训练，因此早学和晚学的语言保留程度不同。

下表列出不同目标顺序下的最终结果，顺序写法为按先后接受目标，指标越低越好。

原论文 Table 6：不同目标接受顺序下 Recursive FT then SSU 的最终阶段词错误率，原表单位 WER（%），越低越好。三列分别对应源、目标与全体语言，顺序是实验条件，不是可比较大小的指标。

| Base | Target Order | Source | Target | All |
| --- | --- | --- | --- | --- |
| GEM | NO → IT → SR | 28.97 | 57.34 | 39.61 |
| GEM | IT → NO → SR | 36.03 | 62.12 | 45.81 |
| GEM | SR → IT → NO | 24.30 | 53.74 | 35.34 |
| GEM | IT → SR → NO | 25.05 | 51.72 | 35.05 |
| GEM | NO → SR → IT | 28.00 | 48.72 | 35.77 |
| ROA | NO → IT → SR | 50.37 | 70.21 | 57.81 |
| ROA | IT → NO → SR | 23.57 | 45.59 | 31.82 |
| ROA | SR → NO → IT | 21.07 | 59.16 | 35.35 |
| ROA | NO → SR → IT | 23.83 | 54.37 | 35.28 |
| ROA | IT → SR → NO | 23.00 | 52.35 | 34.00 |
| SLA | IT → SR → PL → SL → KY | 38.45 | 81.67 | 60.06 |
| SLA | SR → PL → SL → KY → IT | 54.83 | 69.92 | 62.37 |
| SLA | SR → KY → PL → SL → IT | 91.46 | 70.25 | 80.86 |
| SLA | KY → PL → IT → SL → SR | 44.72 | 85.33 | 65.03 |
| SLA | SR → SL → IT → PL → KY | 39.88 | 81.20 | 60.54 |

顺序确实能翻转结论，罗曼从给定顺序的 57.81% 降到另一顺序的 31.82% 就是例证，日耳曼也有类似改善，斯拉夫在已占优时仍波动 20 个百分点。因此不能拿给定顺序的结果当作递归的全部能力，也不能把某次最优顺序的提升当作部署时可得收益。限制是论文只测了部分顺序而非穷举，也没有给出自动选序方法，附录冲突分析显示不同目标更新余弦相似度低、符号不一致比例高，换序会改变干扰累积方式。本表数值与单位依据论文 PDF。

表中保留 3 组各 5 条实际测过的顺序，所有行使用相同的 Recursive FT then SSU 策略，语言代码按接受先后展开。源、目标和全体词错误率分别报告；某一顺序使目标平均更低，并不保证源保持或全体平均也更低。最佳已测顺序不是自动选择算法的成绩，部署前仍须有独立验证，不能用测试集挑出的最优顺序宣传确定收益。

### 语组和文字相同能否预测难易

要回答的是基础与目标的亲缘和文字是否决定扩展难度。比较在同一斯拉夫基础下 5 个目标，方法相同，只有目标不同。兼容类型按语组是否相同、文字是否相同划分，指标越低越好。

下表为同一基础同一策略下的目标对比，覆盖同组同文字到异组异文字的全部类型。

原论文 Table 4：斯拉夫基础的逐目标单语言扩展词错误率，原表单位 WER（%），越低越好。Type 明确语组与文字条件，Source、Target、All 分别为源、目标和全体词错误率，ΔSource 沿用原表。

| Target | Type | Method | Source | Target | All | ΔSource |
| --- | --- | --- | --- | --- | --- | --- |
| IT | G-/S- | Base | 36.93 | 116.08 | 50.12 | +0.00 |
| IT | G-/S- | Target FT | 129.79 | 20.11 | 111.51 | +92.86 |
| IT | G-/S- | SSU-Wanda+FT | 115.24 | 23.36 | 99.93 | +78.31 |
| IT | G-/S- | TIES | 128.32 | 21.07 | 110.45 | +91.40 |
| IT | G-/S- | SSU-Rand+TIES | 52.82 | 39.52 | 50.60 | +15.89 |
| IT | G-/S- | SSU-Mag+TIES | 82.62 | 34.28 | 74.56 | +45.70 |
| IT | G-/S- | SSU-Wanda+TIES | 34.35 | 70.57 | 40.39 | -2.57 |
| SR | G+/S+ | Base | 36.93 | 66.58 | 41.87 | +0.00 |
| SR | G+/S+ | Target FT | 57.12 | 24.51 | 51.69 | +20.19 |
| SR | G+/S+ | SSU-Wanda+FT | 55.56 | 24.62 | 50.40 | +18.63 |
| SR | G+/S+ | TIES | 56.46 | 24.62 | 51.15 | +19.53 |
| SR | G+/S+ | SSU-Rand+TIES | 44.26 | 26.03 | 41.22 | +7.33 |
| SR | G+/S+ | SSU-Mag+TIES | 46.12 | 25.91 | 42.75 | +9.19 |
| SR | G+/S+ | SSU-Wanda+TIES | 41.10 | 27.63 | 38.85 | +4.17 |
| PL | G+/S- | Base | 36.93 | 107.36 | 48.67 | +0.00 |
| PL | G+/S- | Target FT | 107.05 | 26.39 | 93.61 | +70.13 |
| PL | G+/S- | SSU-Wanda+FT | 104.80 | 26.17 | 91.70 | +67.87 |
| PL | G+/S- | TIES | 107.36 | 26.28 | 93.85 | +70.43 |
| PL | G+/S- | SSU-Rand+TIES | 76.95 | 28.09 | 68.81 | +40.02 |
| PL | G+/S- | SSU-Mag+TIES | 95.16 | 27.42 | 83.87 | +58.24 |
| PL | G+/S- | SSU-Wanda+TIES | 45.33 | 35.45 | 43.68 | +8.41 |
| SL | G+/S- | Base | 36.93 | 110.70 | 49.22 | +0.00 |
| SL | G+/S- | Target FT | 105.60 | 38.47 | 94.41 | +68.67 |
| SL | G+/S- | SSU-Wanda+FT | 99.34 | 38.84 | 89.26 | +62.41 |
| SL | G+/S- | TIES | 105.37 | 40.07 | 94.49 | +68.44 |
| SL | G+/S- | SSU-Rand+TIES | 81.99 | 39.99 | 74.99 | +45.07 |
| SL | G+/S- | SSU-Mag+TIES | 92.93 | 40.03 | 84.11 | +56.00 |
| SL | G+/S- | SSU-Wanda+TIES | 58.04 | 43.72 | 55.65 | +21.11 |
| KY | G-/S+ | Base | 36.93 | 150.01 | 55.78 | +0.00 |
| KY | G-/S+ | Target FT | 57.51 | 72.39 | 59.99 | +20.58 |
| KY | G-/S+ | SSU-Wanda+FT | 53.09 | 67.77 | 55.54 | +16.16 |
| KY | G-/S+ | TIES | 56.89 | 73.09 | 59.59 | +19.96 |
| KY | G-/S+ | SSU-Rand+TIES | 41.30 | 74.84 | 46.89 | +4.37 |
| KY | G-/S+ | SSU-Mag+TIES | 43.45 | 75.09 | 48.72 | +6.52 |
| KY | G-/S+ | SSU-Wanda+TIES | 39.19 | 81.10 | 46.18 | +2.26 |

亲缘和文字有影响但不是简单排序，同为同组异文字的波兰语和斯洛文尼亚语难度不同，而异组同文字的吉尔吉斯语源保持反而好于斯洛文尼亚语，吉尔吉斯语源退化很小而斯洛文尼亚语源退化超过 20 个百分点。这说明源保持和目标可学是相关但不同的两件事，关键看目标更新是否打中源重要方向。塞尔维亚语作为同组同文字目标相对容易，未胜出项是随机和幅度保护在某些目标上目标词错误率更低，但源退化更大，不能只看一端。本表数值与单位依据论文 PDF。

IT、SR、PL、SL 和 KY 依次是意大利语、塞尔维亚语、波兰语、斯洛文尼亚语和吉尔吉斯语。G+/G-表示与基础语组相同或不同，S+/S-表示文字系统相同或不同。每个目标块都保留基础、直接微调、保护后微调、标准 TIES、随机保护、幅度保护与 Wanda 保护七行，不能只在最优行之间跨目标比较。该基础的原始源词错误率在各块均为 36.93%，不同目标的零样本目标词错误率不同。源保持和目标可学之间存在取舍；亲缘关系与文字系统提供条件描述，但本文没有通过受控实验把它们从具体语言、数据及更新方向中单独隔离，因此不支持仅按语系预测所有迁移收益。

### 结论在什么边界内才成立

第一，全部结论只在冻结编码器和大模型、只调连接器的框架内成立。论文自己指出，更新语音编码器、大模型或全模型时的扩展行为可能不同，不能直接推广。

第二，多目标只覆盖少数语言和少数顺序，顺序敏感性已被证明存在，但没有选序机制，更大规模语言集上的递归行为仍待验证。源校准只用每源 5 分钟验证语音，若校准域与测试域差距大，Wanda 估计的可靠性也会打折。

第三，指标只有词错误率，没有报告延迟、算力和人工可懂度，平均数改善可能掩盖某些源语言或说话人群体的下滑。论文用分语言表缓解了这一点，但复现时仍应按语言拆开看。

### 复现第一步要准备什么

先按语系准备 3 个 5 语言基础，每个语言 5 小时 Common Voice 训练语音，再为每个目标准备 5 小时适配语音。源校准从每个源语言验证集取 5 分钟，只做前向、不做梯度。

关键超参数是冻结列比例、TIES 修剪比例和缩放系数，论文正文未完整披露具体搜索值，复现时要从代码或附录补齐并固定随机种子。训练用 AdamW、学习率 1×10-4、权重衰减 1×10-6、批量 4、降采样 4、最多 5 轮早停、束宽 4。

关于来源，本次只发现论文提到 Common Voice 链接属于第三方引用，没有归属明确且可用的作者资源，因此不能写作者资源已公开或模型可下载。复现应先重跑单目标的日耳曼挪威语和斯拉夫塞尔维亚语两组，再扩展到多目标给定顺序。

### 什么时候值得试还需要补什么验证

当旧语言数据不能存、不能训，只能动小连接器，又要加一两个新语言时，Wanda 保护加 TIES 值得先试，它在单目标上源代价最小。当要一次加多个语言且求稳时，联合 TIES 是更稳的选择。当能承担试错且可调顺序时，才考虑递归先微调后保护，并把顺序当作超参数来搜。

还需补的验证是修剪比例和缩放系数的敏感性、校准时长从 5 分钟增减的影响，以及更多语组和顺序下的重复性。容易误解的是把换序后的最优值当成方法固有提升，或把源平均不变当成每个源语言都不变，实际都要看分语言表。

一句话收束：保护决定少忘多少，合并决定多语言更新如何共处，顺序决定递归把干扰累积还是摊薄，三者缺一都会误判多语言扩展的真实代价。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.35846v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
