---
title: "MM-LeJEPA: Correlated Gaussian Regularization for Multimodal Joint-Embedding Predictive Architectures"
date: 2026-10-20
draft: false
tags: [音视频理解, 正则化, 音视频, 自监督学习, 预训练]
categories: [论文速递]
description: "本文把下游任务分成读独立信息和读共享内容两类，推导出音频视频联合嵌入应服从的相关高斯目标，并用白化后的分布正则加局部预测全局来训练，在音频视频分类的冻结探测和微调中与开源基线相当。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.24681"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "MM-LeJEPA：为共享内容设计相关高斯联合嵌入目标"
paper_digest_original_title: "MM-LeJEPA: Correlated Gaussian Regularization for Multimodal Joint-Embedding Predictive Architectures"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.24681v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.24681v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.24681v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"method","id":"method.regularization","label":"正则化"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"setting","id":"setting.pretraining","label":"预训练"}]
paper_digest_primary_method: "正则化"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文把下游任务分成读独立信息和读共享内容两类，推导出音频视频联合嵌入应服从的相关高斯目标，并用白化后的分布正则加局部预测全局来训练，在音频视频分类的冻结探测和微调中与开源基线相当。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haowen Bai"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rui Gong$"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Meichen Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ming-Xuan Weng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bihan Wen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kim-Hui Yap"}]
paper_digest_abstract_sha256: "a162bc52db0dbaef5642dac55193af180bd8b0eacbddd48c75bafbfb91ddf9d3"
paper_digest_sidecars: {"citation.bib":{"sha256":"5f6f2218df476cc03f7d0733816f6cb7e236bcff0ef1b578314df2dd2e5f048a","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24681/citation.bib"},"citation.json":{"sha256":"83d363ec7380121da83651f168848afaa83b65c9a94f76076f6fabcebcfdfd81","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24681/citation.json"},"citation.ris":{"sha256":"b24155332d4903dc72508f5102e122eb54a551fd25de1b7f74d32918c874cfdb","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24681/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"cdb6bbd131322f4b1c3064a4ee3f0876c053d0950e64595aac969e2dd0d0301a","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24681/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "948d675b479251a5eec88b4293dc2238da52a4d116e845d9e34a4c8bd8af1f66"
paper_digest_api_reader_plan_sha256: "596db8ffd3afe5f77529ee7dba6f86fa762e7bf9603b9d2def0d44b3ae39f382"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f678376449f02b878ea526c84cb31fc9c9bda20f531e6e092d3d6e649f53bf33"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "9dc437006303354a70edfc79eef6c66401da27196d933542d2848596f67efe78"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d469eaaa1481a65026a5f0166cb1992f2fb7abbf7e745fcd41fd9ecf7a083765"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4005ba1253a7e61da68067d2959c95435d56c2117fd48537a494ea23b582431e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 MM-LeJEPA：为共享内容设计相关高斯联合嵌入目标

> 英文题目：*[MM-LeJEPA: Correlated Gaussian Regularization for Multimodal Joint-Embedding Predictive Architectures](https://arxiv.org/abs/2610.24681v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding)
- **研究方法**：[正则化](/audio-paper-digest-blog/papers/?concept=method.regularization)；[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)
- **研究条件**：[预训练](/audio-paper-digest-blog/papers/?concept=setting.pretraining)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Haowen Bai：机构信息未能在本次解析中与作者逐人可靠绑定
- Rui Gong\$：机构信息未能在本次解析中与作者逐人可靠绑定
- Meichen Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Ming-Xuan Weng：机构信息未能在本次解析中与作者逐人可靠绑定
- Bihan Wen：机构信息未能在本次解析中与作者逐人可靠绑定
- Kim-Hui Yap：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

待设计对象是音频嵌入与视频嵌入拼接而成的联合嵌入分布，难点是两侧编码器可能观测同一事件，直接套用各向同性高斯会惩罚共享内容诱导的跨模态相关。每个音频视频样本先产生一个联合编码的全局嵌入和多个局部嵌入，每个局部嵌入对应一个音频窗或视频帧，局部预测全局的均方误差负责保留内容。论文把任务梯度二阶矩写成读取独立信息的分量与读取同一共享内容的分量的加权组合，由此得到加权Fisher信息泛函。在总方差固定的约束下求该泛函最小值，得到每模态内部各向同性、跨模态按系数ρ相关的高斯目标，其输出即为期望的联合分布形状。再用固定白化变换把该相关目标转为标准高斯，对全局嵌入和局部嵌入沿用SIGReg约束，并与局部到全局预测按权重组合成两项目标。与已有音频视频自监督方法相比，差异是不用掩码重构解码器、对比负样本、动量教师或自训练，只增加一个目标相关超参数。在VGGSound注意力探测中音频视频联合top-1准确率为48.6%，高于表中同条件最强基线的46.3%，适用范围限于音频视频分类、探测与微调，未验证检测、定位或生成，也未报告训练、推理或部署代价。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频视频自监督要解决什么输入输出问题

论文处理成对的音频和视频输入，目标是在不用类别标签的情况下学到可迁移的表示。预训练用 AudioSet 的音频视频对，不用其标注；评测转到 VGGSound 的 309 类单标签分类和 AudioSet 的 527 标签多标签分类，输入可以是纯音频、纯视频或两者拼接。

已有路线包括对比学习、自蒸馏和掩码重建，音频视频方法还加上跨模态对齐、细粒度同步和融合结构。这些设计要在掩码方式、对齐损失和编码器共享上做选择，但没有从下游任务先验出发推导联合嵌入应该服从什么分布。论文要补的正是这一步，先写出任务平均偏差受什么控制，再求出最优分布形状，然后用轻量正则去逼近它。

### 已有音频视频预训练和 JEPA 路线各做了什么

音频视频一侧，早期工作做视觉到音频的知识迁移、音频图像对应和时间同步，后来加入跨视角对比、跨模态聚类和正样本精炼。近期掩码重建路线包括 Audiovisual MAE 对 2 模态重建，CAV-MAE 和 MAViL 再加跨模态对比，MAViL 还有看完整输入的教师自训练，CAV-MAE Sync 对齐音频片段和视频帧。结构上有多瓶颈融合、跨模态共享 Transformer 和等变建模等。论文认为这些方法通过重建、对齐或结构编码跨模态关系，但没有给出由任务先验决定的目标联合分布。

联合嵌入预测架构一侧，用一个视角的嵌入预测另一个视角的嵌入，可以丢掉不可预测的低层细节，不需要输入重建解码器，但仍需防坍缩。I-JEPA、V-JEPA、A-JEPA、data2vec 等用停止梯度和滑动平均教师，另一条线用几何约束。LeJEPA 的不同在于先问嵌入应服从什么分布，在未知任务且总方差固定时推出各向同性高斯，再用 Sketched Isotropic Gaussian Regularization 拉向该分布。后续 LeVJEPA、AV-JEPA、Le MuMo JEPA 沿用各向同性目标。本文则认为双模态共享内容会带来跨模态相关，直接套用各向同性目标会惩罚这种相关。

### 为什么各向同性目标不适合读共享内容的任务

论文用每模态一个编码器的设定，联合嵌入分成音频块和视频块，记为拼接向量。音频和视频常观察同一事件，下游任务可以同时从两块读出同一内容，这时任务梯度在音频侧和视频侧同向变化，其 2 阶矩出现非零的跨模态块。

LeJEPA 把任务梯度 2 阶矩设为单位阵倍数，对所有方向一视同仁，得到各向同性高斯目标。若把该目标直接用于拼接后的音频视频嵌入，跨模态相关会被正则压低，而这正是读共享内容的任务所需要的结构。于是问题变成如何在保留 LeJEPA 分布设计路线的前提下，只改任务先验，使 2 阶矩携带共享内容带来的跨模态结构，再求新的最优分布。

### MM-LeJEPA 的整体流程是怎样的

方法分四步。第一步写出矩阵加权的任务平均偏差控制量，由任务梯度 2 阶矩决定权重。第二步把多模态任务建模为独立信息分量和共享内容分量的强度加权组合，在固定对应和对称假设下得到联合 2 阶矩。第三步在固定总方差下最小化对应的加权泛函，得到带一个相关系数的相关高斯目标。第四步用固定白化变换把该目标转成标准高斯，再用 SIGReg 约束，同时保留局部到全局预测以保存内容。

训练时每个样本产生一个联合全局视图和多个局部视图，局部包括音频时间窗和视频帧采样，分别经音频编码器、视频编码器和共享投影得到嵌入。每个局部嵌入预测全局嵌入，分布正则同时作用于单视图和联合拼接。整个扩展只增加目标跨模态相关这一个标量超参数，不需要重建解码器、对比负样本、滑动平均教师或自训练。

下图是论文给出的总览，顶部是任务先验到目标设计，底部是视图构造、编码与训练目标，建议按观察任务阅读。

> **看图路径：** 1. 先看顶部任务先验如何从两类读出得到组合权重矩阵；2. 再看底部从联合全局视图和局部视图到编码器与共享投影的路径；3. 最后看右侧预测损失与两路分布正则分别约束什么目标形状

[![原论文 Figure 1：Overview of MM-LeJEPA. Top: the independent-information and shared-content readouts give the…](https://arxiv.org/html/2610.24681v1/MM-LeJEPA_pipeline.png)](https://arxiv.org/html/2610.24681v1/MM-LeJEPA_pipeline.png)

*论文图 1。原论文 Figure 1:：“Overview of MM-LeJEPA. Top: the independent-information and shared-content readouts give the task-gradient second moments W_ind and W_same, whose weighted combination W_AV…”。*

上半部分显示独立信息读出给出块对角的 2 阶矩，共享内容读出给出全一块矩阵，两者加权得到带跨模态系数的联合权重。下半部分左侧是联合全局视图、音频时间裁剪和视频帧采样，中部是各自编码器加共享投影得到联合全局嵌入与局部嵌入，右侧是预测损失让局部指向共享全局目标，分布正则对单视图用各向同性目标、对拼接用相关目标。

### 任务平均偏差由什么量控制

论文沿用 LeJEPA 的探针偏差分析，考虑半径近邻探针和 Nadaraya-Watson 核探针。记单个嵌入分布为零均值、协方差正定的分布，任务函数在查询点的梯度表示任务沿各嵌入方向的局部敏感度。任务梯度零均值、共同 2 阶矩的假设固定了任务先验，权重矩阵的具体形式暂不指定。

在此先验下，嵌入分布的对数密度对输入的梯度，即 score，被任务 2 阶矩加权后的平方期望构成加权 Fisher 信息泛函，它等于权重矩阵与 Fisher 信息矩阵乘积的迹。该泛函是两类探针任务平均积分平方偏差中随分布形状变化的主项，常数项和余项与形状无关，因此最小化它就得到该准则下的最优分布形状。

\[J_{W}(p_{z}):=\int_{\mathbb{R}^{K}}\left(\nabla\log p_{z}(\mathbf{z})\right)^{\top}W\left(\nabla\log p_{z}(\mathbf{z})\right)p_{z}(\mathbf{z})\,\mathrm{d}\mathbf{z}=\operatorname{tr}\!\left(W\mathcal{I}(p_{z})\right).\]

上式左边是积分形式，右边是迹形式，附录证明两者相等。直观理解是任务越敏感的方向，嵌入分布的 score 越应该小，即分布在该方向越平坦稳定。LeJEPA 取权重为标量乘单位阵，泛函退化为通常 Fisher 信息；本文下一步把权重换成含跨模态块的矩阵。

**任务梯度二阶矩 × 加权 Fisher 信息泛函：** 任务梯度二阶矩是任务梯度外积在任务先验下的期望，它刻画下游任务平均沿哪些嵌入方向敏感；加权 Fisher 信息泛函是嵌入分布的对数密度梯度被该二阶矩加权后的平方期望，它控制两类非线性探针的任务平均平方预测偏差。改变任务先验只改变权重矩阵，分布设计就变成在固定总方差下最小化对应的加权泛函。

### 独立与共享两类任务如何组合成先验

对音频视频任务，联合嵌入记为音频投影和视频投影的拼接，任务梯度也分成音频块和视频块。论文把任务梯度写成两部分按幅度的加权和，权重由归一化平方幅度系数决定，一部分读独立信息，一部分读共享内容。举例是看吉他声图对应共享内容，背景人声加衣服颜色对应独立信息。

\[\nabla\eta=\sqrt{1-\pi}\,\nabla\eta_{\mathrm{ind}}+\sqrt{\pi}\,\nabla\eta_{\mathrm{same}},\qquad 0\leq\pi<1.\]

共享内容在两编码器中的方向和尺度是任意的，论文假设两者关系由固定的正交旋转和正对角缩放决定，与具体任务和查询点无关。吸收该固定差异到对齐后的视频坐标后，同一共享读出在两边梯度相等，后续矩、探针和方差约束都在该公共坐标下定义。

在公共坐标下进一步假设每类分量梯度零均值、每模态内各向同性、两边强度相同，两类分量相互独立。独立信息分量的跨模态块为零，共享内容分量的 4 个块都相等，由此得到两类分量的 2 阶矩。

\[W_{\mathrm{ind}}=\tau_{\mathrm{ind}}^{2}\begin{bmatrix}I_{d}&0\\ 0&I_{d}\end{bmatrix},\qquad W_{\mathrm{same}}=\tau_{\mathrm{same}}^{2}\begin{bmatrix}I_{d}&I_{d}\\ I_{d}&I_{d}\end{bmatrix},\]

两者按权重组合即得联合任务梯度 2 阶矩，非对角系数由共享强度、两类梯度强度共同决定，取值在零到一之间。为零时回到全空间各向同性先验，非零时携带跨模态耦合。

\[W_{\mathrm{AV}}=(1-\pi)W_{\mathrm{ind}}+\pi W_{\mathrm{same}}=\tau_{\mathrm{AV}}^{2}\begin{bmatrix}I_{d}&\omega I_{d}\\ \omega I_{d}&I_{d}\end{bmatrix},\]

**独立信息读出 × 共享内容读出：** 独立信息读出指任务从音频和视频各读不同线索，例如背景人声和衣服颜色，其任务梯度在两模态间不相关；共享内容读出指任务从两模态读同一事件，例如看吉他图像和听吉他声，其梯度在两边同向变化。二者按强度加权组合成多模态任务先验，前者给出对角的梯度二阶矩，后者给出满块的二阶矩，组合后才出现跨模态相关。

### 相关高斯目标是如何求出来的

拿到联合权重后，分布设计问题是在总方差固定为 2 倍单模态维度时，最小化对应的加权泛函。论文分两步求解。第一步用矩阵 Cramér-Rao 不等式得到加权泛函不小于权重与逆协方差乘积的迹，当权重正定时等号仅在高斯分布成立，因此最优形状必为高斯，只剩协方差待定。

第二步在迹约束下最小化该下界，用 Frobenius 内积的 Cauchy-Schwarz 不等式得到下界，等号要求协方差与权重平方根成比例，再由迹约束定出常数。对论文的块矩阵权重求平方根并归一化，得到对角块为单位阵、非对角块为标量乘单位阵的协方差，标量即目标相关系数，它是权重跨模态系数的单调函数。

该分布每个模态各自仍是各向同性高斯，音频与视频通过一个系数相关。因为任务先验参数在预训练前未知，论文保留这个相关高斯族，把相关系数当作经验超参数。参考配置取为 0.8。

**相关高斯目标 × 目标跨模态相关系数：** 相关高斯目标指每个模态各自仍是各向同性的高斯，但音频块和视频块之间有统一相关系数的联合高斯；目标跨模态相关系数就是该联合协方差非对角块的标量。它由共享内容在任务先验中的占比决定，占比为零时退化为 LeJEPA 的各向同性高斯，占比越大则相关越强，预训练时作为唯一的分布超参数。

### 白化变换与两项训练目标各起什么作用

SIGReg 原本把嵌入拉向标准高斯，做法是对随机 1 维投影做单变量正态性检验。为适配相关目标，论文先做固定线性白化，把和与差分别除以含相关系数的归一化常数。该变换可逆，变换后服从标准高斯等价于变换前服从目标相关高斯，因此对变换后嵌入用 SIGReg 即约束了原拼接分布。

预测项按 LeJEPA 的视图计数约定，每个样本有一个全局嵌入和多个局部嵌入，每个局部预测全局，损失是坐标均方误差。分布项对全局和局部都加 SIGReg，单视图用各向同性目标，联合拼接用相关目标。总体损失是预测与正则的凸组合，权重由标量平衡，参考值取 0.05，预测项必须占主导。

**局部到全局预测 × SIGReg 分布正则：** 局部到全局预测让每个音频时间窗和每个视频帧的局部嵌入去逼近同一个联合全局嵌入的均方误差项，作用是保留内容、避免常数解丢失信息；SIGReg 分布正则把变换后嵌入的一维随机投影拉向标准正态，作用是约束整体分布形状、防止坍缩。两者以权重组合，前者必须占主导，后者提供目标形状。

### 编码器结构与预训练过程如何组织

编码器按 ViT-B/16 配置，每模态有各自的切分嵌入和 11 个各自的 Transformer 块，再加一个共享 Transformer 块。音频表示为 128 频带、1024 时间位置的对数梅尔谱，视频帧缩放到 224 乘 224。共享投影头把 768 维骨干特征映射到 128 维。参考视图是一个联合编码的全局音频视频视图、7 个局部音频窗和从 16 帧池采样的 9 个视频帧视图，编码器用 ImageNet 掩码自编码权重初始化。

预训练在 AudioSet 上做 30 轮，不用类别标签，优化器为 AdamW，学习率为 2 乘 10 的负四次方，批量 256，正则权重 0.05，目标相关 0.8。论文附录说明因部分视频已不可用，实际使用的 AudioSet 训练、平衡训练、评测、VGGSound 训练与测试的条数都略小于官方列表，复现时应以实际可用拷贝为准。论文正文表示代码将发布，但本次未发现可验证的公开资源，不能写成已开源。

### 评测用什么数据指标和对照条件

评测用 VGGSound 报告 top-1 准确率，用 AudioSet 报告平均精度均值，单位均为百分比，方向都是越高越好。输入记为音频、视频和音频视频 3 种。冻结探测分两种，注意力探测在冻结编码器上训练注意力池化头 20 轮，线性探测在均值池化冻结特征上训练一层线性层。基线用各自发布的权重在同一代码下评测。

微调在分类头上继续训练，VGGSound 用 AdamW 学习率 10 的负四次方训练 10 轮，AudioSet-20K 用 Adam 学习率 1.5 乘 10 的负四次方训练 15 轮，AudioSet-2M 用 Adam 学习率 10 的负五次方训练 15 轮，均为余弦 schedule。VGGSounder 按其协议在 VGGSound 微调模型上取 top-1 预测，报告子集准确率、F1 和命中率，区分音频、视觉和音频视频输入。理解结论时要注意冻结探测反映嵌入分布本身，微调还反映适配能力，两者条件不同。

### 冻结编码器时特征本身表现如何

要回答的问题是编码器不更新时，学到的分布是否更适合下游读出。比较对象是同为 ViT-B 的 CAV-MAE、EquiAV、AVSiam 和 CAV-MAE Sync，指标方向均为越高越好。下表是论文的冻结探测结果，覆盖注意力探测和线性探测在两个数据集、3 种输入上的分数。

|  |  | Attentive probing | Attentive probing | Attentive probing | Attentive probing | Attentive probing | Attentive probing | Linear probing | Linear probing | Linear probing | Linear probing | Linear probing | Linear probing |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | VGGSound | VGGSound | VGGSound | AudioSet-20K | AudioSet-20K | AudioSet-20K | VGGSound | VGGSound | VGGSound | AudioSet-20K | AudioSet-20K | AudioSet-20K |
| Method | Backbone | A | V | A-V | A | V | A-V | A | V | A-V | A | V | A-V |
| CAV-MAE | ViT-B | 40.7 | 30.2 | 46.1 | 33.3 | 18.8 | 36.6 | 39.2 | 30.8 | 43.8 | 32.7 | 18.1 | 35.1 |
| EquiAV | ViT-B | 41.2 | 31.6 | 46.3 | 33.5 | 19.9 | 36.6 | 41.3 | 31.7 | 46.0 | 32.2 | 18.7 | 34.9 |
| AVSiam | ViT-B | 36.9 | 32.7 | 43.8 | 29.6 | 21.7 | 34.0 | 37.6 | 34.1 | 42.9 | 30.7 | 22.6 | 34.1 |
| CAV-MAE Sync | ViT-B | 35.0 | 23.0 | 40.3 | 26.6 | 12.2 | 29.4 | 35.2 | 23.7 | 40.3 | 26.1 | 11.9 | 28.1 |
| MM-LeJEPA | ViT-B | 43.4 | 33.8 | 48.6 | 35.8 | 22.2 | 37.6 | 42.3 | 32.2 | 46.9 | 33.4 | 19.7 | 36.3 |

注意力探测下本文方法在六格全部最高，在 VGGSound 上领先每列最强基线 1.1 到 2.3 个百分点，在 AudioSet-20K 上领先 0.5 到 2.3 个百分点。线性探测下六格中四格最高，包括两个音频视频格，视频单模态最强的是跨模态共享 Transformer 的 AVSiam。这说明结论依赖评测头，表达能力更弱的线性头下视频单模态的排序发生变化。论文把注意力探测作为分布设计直接对应的设置，该条件下的领先才与理论目标一致。

**注意力探测 × 线性探测：** 注意力探测在冻结编码器上训练一个注意力池化头再分类，允许对不同时间或空间特征加权；线性探测只在冻结特征均值池化后训练一层线性层，表达能力更弱。论文把前者作为更能反映嵌入分布本身的设置，因为编码器不更新，分数差异主要来自预训练学到的分布，而微调则允许编码器全部更新。

### 微调和重标注测试是否保持相当

要回答的问题是允许编码器更新后，方法是否仍与需要更多机制的方法相当。比较增加了 MBT、AV-MAE、MAViL 和 AV-JEPA 等，部分基线有 ImageNet-21K 监督初始化或单模态推理的特殊标注，放在一起时要看清条件差异。下表是三个数据集上的微调分数。

|  |  | VGGSound | VGGSound | VGGSound | AudioSet-20K | AudioSet-20K | AudioSet-20K | AudioSet-2M | AudioSet-2M | AudioSet-2M |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | Backbone | A | V | A-V | A | V | A-V | A | V | A-V |
| MBT‡ | ViT-B | 52.3 | 51.2 | 64.1 | 31.3 | 27.7 | 43.9 | 41.5 | 31.3 | 49.6 |
| AV-MAE | ViT-B | — | — | 64.2 | — | — | — | — | — | 50.0 |
| CAV-MAE | ViT-B | 59.5 | 47.0 | 65.5 | 37.7 | 19.8 | 42.0 | 46.6 | 26.2 | 51.2 |
| MAViL | ViT-B | 60.8 | 50.9 | 67.1 | 41.8 | 24.8 | 44.9 | 48.7 | 30.3 | 53.3 |
| EquiAV | ViT-B | 61.0 | 50.7 | 67.1 | 42.4 | 25.7 | 46.6 | 49.1 | 30.1 | 54.6 |
| AVSiam∗‡ | ViT-B | 55.7 | 46.0 | 64.9 | 36.5 | 23.7 | 41.6 | 45.2 | 30.8 | 50.1 |
| AV-JEPA∗ | ViT-B | — | — | 57.1 | 23.7 | 10.3 | 29.6 | 26.0 | 12.8 | 32.7 |
| MM-LeJEPA | ViT-B | 60.5 | 49.5 | 66.9 | 38.9 | 21.7 | 43.1 | 46.2 | 27.3 | 51.1 |

本文方法在 VGGSound 音频视频上接近最优，在 AudioSet-20K 和 AudioSet-2M 上处于中上，没有对比负样本、滑动平均教师或自训练。未胜出项也很清楚，例如 AudioSet-2M 上 EquiAV 和 MAViL 的音频视频分数更高，视频单模态上 MBT 等更强，因此不能说全面超越。

重标注的 VGGSounder 在背景音乐去除子集上按 top-1 报告九列分数，下表显示本文方法九列最高，但领先幅度多在零点几到一个多百分点，且基线分数取自基准论文，附录全文集结果趋势相同。

|  | Subset accuracy | Subset accuracy | Subset accuracy | F1 | F1 | F1 | Hit rate | Hit rate | Hit rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | A | V | A-V | A | V | A-V | A | V | A-V |
| CAV-MAE (Gong et al., 2023) | 17.9 | 24.2 | 29.6 | 39.5 | 38.9 | 47.2 | 67.1 | 56.4 | 67.5 |
| EquiAV (Kim et al., 2024) | 15.8 | 13.6 | 24.4 | 33.7 | 22.9 | 39.3 | 57.1 | 33.3 | 56.2 |
| AVSiam (Lin & Bertasius, 2024) | 17.4 | 25.0 | 27.9 | 38.1 | 39.8 | 43.7 | 64.7 | 57.7 | 62.5 |
| DeepAVFusion (Mo & Morgado, 2024) | 13.9 | 13.8 | 26.2 | 29.1 | 23.3 | 41.8 | 49.4 | 33.8 | 59.8 |
| MM-LeJEPA | 18.2 | 25.8 | 30.3 | 39.6 | 41.0 | 48.0 | 67.2 | 59.5 | 68.6 |

这部分支持的判断是在公开音频视频分类基准上结果有竞争力，限制是比较依赖各自发布权重、数据拷贝和初始化条件，不宜推广到未评测的检索或定位任务。

### 目标相关系数偏离参考值会发生什么

要回答的问题是相关目标是否必要，以及系数是否敏感。论文固定其他配置，只改变目标相关系数，报告微调和注意力探测在 VGGSound 与 AudioSet-20K 上的分数。下表比较不同目标相关取值下的 4 组分数，微调和注意力探测各占两列。

表 4 比较目标相关系数取值的敏感性，参考取值为 0.8，其余取值为 0、0.2、0.4、0.6 和 0.99，分数为 VGGSound 与 AudioSet-20K 上的数值。

| ρ | 微调 VGG | 微调 AS-20K | 注意力探测 VGG | 注意力探测 AS-20K |
| --- | --- | --- | --- | --- |
| 0.00 | 64.6 | 31.5 | 39.8 | 27.8 |
| 0.20 | 66.2 | 42.9 | 48.1 | 37.0 |
| 0.40 | 66.5 | 43.0 | 48.2 | 37.1 |
| 0.60 | 66.7 | 42.9 | 48.5 | 37.4 |
| 0.80 | 66.9 | 43.1 | 48.6 | 37.6 |
| 0.99 | 64.8 | 39.0 | 45.1 | 34.4 |

偏离参考值都会下降，0.2 附近下降至多 0.7，0.99 下降 2.1 到 4.1，而取零即 LeJEPA 各向同性目标时注意力探测下降 8.8 和 9.8。这说明共享内容带来的相关不能设为零，也不能推到接近一，0.8 是在该实验配置下采用的取值。

下图比较仅目标相关不同的两次预训练在 1500 个 VGGSound 测试片段上的嵌入，单模态散点基本不变，联合散点从分离变为混合，跨模态近邻比例从 24% 升到 46%，配对坐标密度从圆形变为对角拉长，平均每坐标相关为 0.66。阅读时先看单模态列确认分布未变，再看联合列与最右列确认相关确实落在联合拼接上。

> **看图路径：** 1. 对比上下两行单模态散点是否基本不变；2. 看联合散点中品红与蓝色是否从分 strand 变为混合及跨模态近邻比例；3. 看最右列配对坐标密度从圆形变为对角拉长及平均相关数值

[![原论文 Figure 2：Embeddings of two pretraining runs that differ only in the target correlation \\rho, on 1,500…](https://arxiv.org/html/2610.24681v1/rho_six_corr_beta0.png)](https://arxiv.org/html/2610.24681v1/rho_six_corr_beta0.png)

*论文图 2。原论文 Figure 2:：“Embeddings of two pretraining runs that differ only in the target correlation \rho, on 1,500 VGGSound test clips (no class labels).”。*

上行目标相关为零时音频与视频各自成团，联合图中两色分离，配对坐标密度呈圆形且平均相关为零；下行目标相关为 0.8 时联合图中两色共享每个小簇，跨模态近邻比例升至 46%，配对坐标沿对角拉长且平均相关为 0.66。该图只用测试片段做可视化、未用类别标签，不能当作分类精度证据，它只说明目标相关改变了联合分布形状。

### 哪些条件变了结论可能不再成立

首先是任务先验的假设。固定对应假设要求共享内容的跨模态关系与任务和查询点无关，对称假设要求公共坐标下各方向同等、2 模态强度相同。若真实任务偏向某些方向或某一模态，或对应关系随样本变化，推导的最优相关形式可能不再最优。

其次是正则权重和批量。权重取 0.1 时分数与参考差 0.7 以内，取 0.2 时四格中三格下降 1.7 到 2.6 个百分点，说明预测项必须主导。批量 128 与 256 差异至多 0.2 且方向不一致，512 下降至多 0.5，只有批量 64 在 AudioSet-20K 上下降可达 2.0，因此对 SIGReg 估计的样本数在中等范围不敏感。

再次是组件必要性。只对全局或只对局部加正则变化至多一个百分点，但去掉预测或去掉 SIGReg 后探测分数全部低于 14，表示两项都必要，但这是在参考权重下的结果，换权重后坍缩阈值可能变化。最后是数据与资源。AudioSet 拷贝小于官方列表，VGGSounder 基线部分取自基准论文，来源未确认不代表技术缺陷，复现时需核对实际可用条数和评分器版本。

### 复现第一步要准备什么

先按附录的实际条数准备 AudioSet 可用拷贝和 VGGSound 训练测试划分，不要假设能下载到官方全量。音频做成 128 频带对数梅尔谱，视频帧缩放到 224 乘 224，骨干按 ViT-B/16 搭每模态各自块加一个共享块，投影到 128 维，用 ImageNet 掩码自编码权重初始化。

视图按一个联合全局视图、7 个音频局部窗、9 个视频帧视图组织，损失按预测加正则实现，正则前先做含目标相关的固定白化，超参数从正则权重 0.05、目标相关 0.8、批量 256、学习率 2 乘 10 的负四次方起步。评测先跑冻结注意力探测，再跑微调，注意区分 top-1 准确率与平均精度均值、百分点与相对百分比。代码与权重在本批证据中没有可验证的公开链接，应按未公开处理，关键是记录数据缺失、随机种子和评分器版本以便对照。

### 什么时候值得尝试这种方法

当任务需要同时从音频和视频读同一事件，且希望预训练尽量简单、无重建解码器、无对比负样本、无滑动平均教师时，该方法值得尝试。它的代价是多一个目标相关超参数，以及需要接受任务先验中的对称和固定对应假设。

若下游主要是单模态独立线索，或 2 模态对应关系变化很大，相关目标的收益可能减小，线性探测下视频单模态已有反例。还需要补的验证包括更大规模数据、检索或定位等非分类任务，以及不同编码器共享方式下的稳定性。总体上论文直接报告的是在给定公开基准、给定权重和冻结或微调协议下的竞争力，超出这些条件的推广仍待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.24681v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
