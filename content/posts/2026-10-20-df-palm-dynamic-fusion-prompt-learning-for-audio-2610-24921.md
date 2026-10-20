---
title: "DF-PALM: Dynamic Fusion Prompt Learning for Audio--Language Models"
date: 2026-10-20
draft: false
tags: [音频分类, 提示学习, 多模态学习, 少样本]
categories: [论文速递]
description: "DF-PALM 针对少样本音频分类中同一事件录音差异大的问题，在冻结 PENGI 等编码器后对编码后类别表示做音频条件残差调节并用其精炼音频特征，在 11 个基准 16 样本主评测上平均准确率 80.69% 和宏平均 F1 值 80.32%，而 50 类时算子统计推理浮点运算量比 PALM 增加 0.39%。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.24921"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "DF-PALM：给音频语言模型的类别表示加上随样本变化的动态融合"
paper_digest_original_title: "DF-PALM: Dynamic Fusion Prompt Learning for Audio--Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.24921v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.24921v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.24921v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.prompt-learning","label":"提示学习"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"setting","id":"setting.few-shot","label":"少样本"}]
paper_digest_primary_method: "提示学习"
paper_digest_score: 7.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "DF-PALM 针对少样本音频分类中同一事件录音差异大的问题，在冻结 PENGI 等编码器后对编码后类别表示做音频条件残差调节并用其精炼音频特征，在 11 个基准 16 样本主评测上平均准确率 80.69% 和宏平均 F1 值 80.32%，而 50 类时算子统计推理浮点运算量比 PALM 增加 0.39%。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yulin Sun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shenghua Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yong Dou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xinwang Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Cheng Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kele Xu"}]
paper_digest_abstract_sha256: "a8a9e5e629ad1551a3cb7e227fcb2a6bc6009e921a97dccc2601c2ad42183024"
paper_digest_sidecars: {"citation.bib":{"sha256":"32f8935d795ee469702e86569bafe0c6a5d0c43325c4acc3ca8a10b126078b03","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24921/citation.bib"},"citation.json":{"sha256":"b6cb1c91f4f3b49d3980928ee9aa8c31d0bdfcd9a2d2b3691460a76216e38e1b","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24921/citation.json"},"citation.ris":{"sha256":"702af51a621b40209d4572999a7dde622cbc31d7c0c128f385bdcdf6d3df2cfa","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24921/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"7c0e19bc5f58e21101a39a503197b920474b0603c069305dd627bf77e1e3e1a9","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24921/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "efbe9b1a84e02553fbf59624b3240a8ab7878857c8c8e26a4e48b2fd538bf849"
paper_digest_api_reader_plan_sha256: "a9ac9e7147cfab9889ecf6e10d4d12083de1d89cee9c00782ea6bd6485f99fda"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6acb5666aa7bbe30db3f38491d4bf9de07323fa2eab6de6ddb1dc29dccb89226"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "76e87c97c32f7448bc0b5652b4cd85991c697eecd6672a9bc192e0225f857fa0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "cb4ac846b5da9563266734e18367fcede0431af8754056bec9b5ac9bcf904a9a"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "903f3beb8a81480c94738d6e3981c966b38306f7068a2418b19277bc66b7c836"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 DF-PALM：给音频语言模型的类别表示加上随样本变化的动态融合

> 英文题目：*[DF-PALM: Dynamic Fusion Prompt Learning for Audio--Language Models](https://arxiv.org/abs/2610.24921v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[提示学习](/audio-paper-digest-blog/papers/?concept=method.prompt-learning)；[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)
- **研究条件**：[少样本](/audio-paper-digest-blog/papers/?concept=setting.few-shot)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Yulin Sun：机构信息未能在本次解析中与作者逐人可靠绑定
- Shenghua Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yong Dou：机构信息未能在本次解析中与作者逐人可靠绑定
- Xinwang Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Cheng Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Kele Xu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是少样本音频分类：每个类别只有 4 到 32 个带标签音频，系统要把一段波形判到几十个类别之一，困难在于同一事件在距离、背景和录音条件变化下差异很大。处理过程是冻结的音频编码器和文本编码器先给出全局音频向量和各类别的文本向量，再在特征空间做适配，最后算相似度打分。动态融合提示学习（Dynamic Fusion Prompt Learning for Audio-Language Models，DF-PALM）先用瓶颈网络从音频向量生成共享残差，加到每个类别的可学习上下文上形成随输入变化的类别矩阵。同一矩阵在多层交叉注意力中作键和值，只更新音频状态，精炼后的音频向量再与该矩阵算余弦相似度乘以固定尺度得到分类对数。与输入无关的 PALM 只学静态类别表示且直接打分，DF-PALM 保留了编码器冻结和后编码适配，但增加了实例条件和音频精炼。在以 PENGI 为骨干的 11 个基准 16 样本主评测中，DF-PALM 相对 PALM 的跨基准平均准确率提高 4.11 个百分点，达到 80.69%。结论适用于所测的 11 个基准和 3 种音频语言骨干，在类别很多或样本极少时的表现尚未充分验证，50 类时算子统计的推理浮点运算量相对 PALM 增加 0.39%。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/sunyulin0421/DF-PALM> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 少样本音频分类要解决什么困难

输入是一段音频波形，目标是从 C 个候选类别中选出它所属的事件、场景、乐器、音乐流派或语音情感，输出是每个类别的得分和取最高分的预测。困难在于同一事件在不同录音中差别很大，原文提到声源距离、背景干扰和录制条件都会改变信号，而每个类别训练时只有少量带标签样本，模型必须保留类别差异又不能记住个别录音的偶然细节。

音频语言模型在这里的作用是提供两路可比表示，一路是音频编码器对波形的全局向量，一路是文本编码器对类别名称字符串的向量，分类靠两者相似度完成。冻结主干再做少样本适配，是为了不更新大规模预训练编码器，只学少量提示或融合参数。

**音频语言模型 × 少样本音频分类：** 音频语言模型负责把音频波形和类别名称字符串映射到可比的向量空间，少样本音频分类则要求每个类别只给 4 到 32 个带标签音频时仍能判别新录音，二者搭配的意义是前者提供可迁移的跨模态表示，后者检验这种表示在标签极少时能否保留类别差异。

### 已有提示学习路线分工有何不同

输入前提示路线以 CoOp 和 CoCoOp 为代表，它们在文本编码器之前放可学上下文词元，CoOp 的上下文与当前音频无关，CoCoOp 则从当前图像或音频特征生成上下文，但因为提示在编码器之前，优化时梯度要穿过文本编码器。PALM 的主形式走了另一条路线，它直接在编码器之后为每个类别学上下文向量，与编码后文本特征混合，文本编码器参数保持不变。

另一类工作是在打分前引入音频与文本交互，例如无可训练参数的文本引导帧级重加权，或用键值缓存、跨模态对比和最优传输学习多粒度对应。本文的问题是能否在编码器之后同时做到两件事，既让类别表示随当前音频变化，又在打分前用类别信息把音频特征精炼一遍，同时保持两个预训练编码器冻结。

**PALM × 特征空间提示学习：** PALM 是本文直接对比的特征空间提示学习基线，它不在输入词元前加可学上下文，而是在文本编码器之后为每个类别学一个上下文向量并与编码后类别表示混合，特征空间指编码器输出向量所在的表示空间，这种做法避免了让梯度穿过文本编码器去优化输入提示。

### PALM 主形式留下了哪两个缺口

PALM 主形式为每个类别维护可训练上下文向量 zi 和混合系数 λi，λi 由可学标量 βi 经 sigmoid 得到，静态混合把基础类别表示 ti 和 zi 加权平均再做 L2 归一化。但 zi 和 λi 都不依赖当前音频输入，同一类别对所有测试录音给出同一表示，无法适应实例级的声学变化。

第二个缺口在分类阶段，PALM 直接用原始音频特征与类别表示算相似度，没有用类别信息先对音频特征做条件精炼。也就是说文本侧的信息只出现在最后的打分点积中，没有提前参与音频表示的修正。本文把这两个缺口分别交给动态上下文和非对称融合处理。

### DF-PALM 的整体流程是怎样的

对一个测试波形 x，冻结的 PENGI 音频编码器先给出全局音频向量 a，冻结的文本编码器对每个类别名称字符串 pi 给出基础类别表示 ti，两者都做 L2 归一化。同一小批量内文本编码器对类别提示只算 1 次并在样本间共享，音频则每个样本独立编码。

接着实例级动态上下文生成器根据 a 产生一个共享残差，加到每个类别的特异上下文上并与 ti 混合，得到随样本变化的条件类别矩阵 T(x)。然后非对称融合以 T(x) 为键和值对音频状态做多层精炼，T(x) 在各层保持不变，最后用精炼后音频与同一矩阵的归一化内积乘以固定尺度 τ 等于 100 得到类别得分。

下面先按原图走一遍主路径，再分别解释两大组件的计算，读图时注意冻结与可训练部分的区分。

> **看图路径：** 1. 先从左侧音频波形和类别名称出发，看冻结编码器分别得到哪两路表示；2. 再看 B 框中全局音频向量如何生成残差并与类别上下文汇合；3. 再看 C 框中音频做查询、文本做键值的箭头方向和只更新哪一路；4. 最后看 D 框中精炼后音频与条件类别矩阵如何做点积打分

[![原论文 Fig. 2：Overview of DF-PALM. (A) Frozen encoders produce global audio and base class representations; Mean…](https://arxiv.org/html/2610.24921v1/photo/Flowchart_Asy_New.png)](https://arxiv.org/html/2610.24921v1/photo/Flowchart_Asy_New.png)

*论文图 2。原论文 Fig. 2:：“Overview of DF-PALM. (A) Frozen encoders produce global audio and base class representations; Mean Pool denotes the backbone’s aggregation into a global audio vector.”。*

原图 A 框左侧显示音频波形进入带雪花标记的冻结音频编码器得到音频特征，类别名称进入冻结文本编码器得到文本特征。B 框中全局音频经平均池化进入 Meta_Net 得到残差 Δz(x)，再与静态提示 zi 和文本特征汇合经 L2 归一化形成动态文本引导。C 框中音频做查询、文本做键值经多层交叉注意力得到注意力图并更新音频特征。D 框中两路表示做点积得到相似度得分 si。这张图帮助理解分支在哪里汇合以及同一条件矩阵被复用两次的位置。

### 条件类别表示如何随当前录音变化

冻结编码器输出是后续一切计算的起点，a 是当前波形的全局向量，ti 是第 i 类名称的编码后向量，两者都已归一化，公式先把这种归一化关系固定下来。

\[\mathbf{a}=\operatorname{L2Norm}\!\left(f_{A}(x)\right),\quad\mathbf{t}_{i}=\operatorname{L2Norm}\!\left(f_{T}(p_{i})\right).\]

动态残差由两层瓶颈网络产生，中间经 ReLU，原文 reduction ratio r 等于 16，隐藏宽度从 d 压缩到 d 除以 r。瓶颈的作用是让生成器的参数量不随类别数增长，一个样本只算 1 次残差。

\[\Delta\mathbf{z}(x)=g_{\phi}(\mathbf{a})=\mathbf{W}_{2}\rho\!\left(\mathbf{W}_{1}\mathbf{a}\right),\]

残差对所有类别共享，再分别与各自的 zi 相加并与 ti 按 λi 混合归一化，得到 Ti(x)。类别特异混合和归一化决定了共享残差对每个类别的实际改变量，条件化发生在文本编码之后，因此不需要让音频条件信号再穿过文本编码器。

\[\displaystyle\mathbf{z}_{i}(x)=\mathbf{z}_{i}+\Delta\mathbf{z}(x),\]

**实例级动态上下文生成器 × 共享音频条件残差：** 实例级动态上下文生成器是一个以全局音频向量为输入的瓶颈网络，共享音频条件残差是它对当前样本输出的一个向量，对所有类别共用同一残差再分别叠加到各自的类别上下文上，组合后每个类别表示既保留类别特异信息，又随当前录音的距离、背景和录制条件发生变化。

### 音频特征如何被类别矩阵精炼

把所有 Ti(x) 按行堆叠就得到 C 乘 d 的条件类别矩阵 T(x)，它对当前输入固定，在后续融合各层和最终打分中复用。初始音频状态 h(0) 就是 a，每层用当前音频状态做单查询，T(x) 同时做键和值做多头交叉注意力，得到的消息经 Dropout 残差相加，再经层归一化和 L2 归一化形成下一层状态。

\[\mathbf{m}^{(l)}=\operatorname{MHA}_{l}\!\left(\mathbf{h}^{(l-1)},\mathbf{T}(x),\mathbf{T}(x)\right),\qquad l=1,\ldots,L,\]

非对称的含义是只更新音频状态而不更新类别矩阵，每层都用同一矩阵做键值输入。这种分离把类别条件化与音频精炼分开，分类损失通过这条计算路径同时优化上下文和融合参数，而两个预训练编码器始终冻结。

**非对称跨模态融合 × 条件类别矩阵：** 条件类别矩阵是把当前样本下所有类别的条件表示堆叠成的 C 乘 d 矩阵，非对称跨模态融合指每层只用该矩阵做键和值、用音频状态做查询并只更新音频状态而不更新类别矩阵，非对称强调更新方向是单向的，组合后音频特征在打分前已被类别信息精炼过。

### 模型实际优化哪些参数

预测时精炼后音频 h(L)n 与同一样本的条件类别表示 Tn,i 做内积，因为两者都归一化，内积等价于余弦相似度，再乘以固定得分尺度 τ 得到 sn,i。小批量交叉熵对正确类的得分做 softmax 归一化并取负对数平均，优化对象是类别提示参数 zi 和 βi、上下文生成器 gφ 以及交叉注意力层。

\[s_{n,i}\equiv s_{i}(x_{n})=\tau\left\langle\mathbf{h}_{n}^{(L)},\mathbf{T}_{n,i}\right\rangle,\]

训练细节按原文附录执行，瓶颈压缩比 16，注意力 Dropout 0.1，上下文向量零均值正态初始化标准差 0.02，混合参数在 sigmoid 前均匀初始化于 0 到 1 区间，批量训练 16、评测 128，SGD 初始学习率 0.05、动量 0.9、无权重衰减，取第 50 轮模型不做检查点挑选，种子 0、1、2。融合深度 L 和头数 H 在每个 16 样本支持集内用四折内部验证选出，每折 12 个每类拟合、4 个验证，按平均验证准确率选出后在全部 16 个每类上重训，3 个种子下都选出 L 等于 3、H 等于 4。

### 评测在什么数据和条件下进行

主评测用冻结 PENGI 编码器，在 11 个基准上做序列级分类，覆盖乐器、音乐流派、环境声、城市声、声学场景、监控事件、语音情感和人声，类别数 4 到 50 个，划分沿用 PALM 协议且支持集与测试集不相交。16 样本指每类 16 个支持样本，所有方法用相同的按类支持子集，折叠基准先在折内平均再跨 3 个匹配种子平均，跨基准汇总对 11 个基准等权。

基线包括零样本模板、输入前提示的 CoOp 和 CoCoOp、特征空间的 PALM、无梯度训练的 FS-AVG 和 ProKeR。FS-AVG 把每类 16 样本音频嵌入平均成原型再用余弦相似度分类，不用文本嵌入。ProKeR 在冻结 PENGI 音频和类别文本嵌入上做核适配并在支持集内选核参数。

**准确率 × 宏平均 F1 值：** 准确率是整批测试中预测正确的比例，宏平均 F1 值是先对每个类别算 F1 再不加权平均，方向都是越高越好，二者搭配是因为音频情感和场景等基准存在类别不均衡，宏平均能暴露只在多数类上取巧而在少数类上失效的情况。

下表先对照 4 种提示学习范式的优化空间和实例相关性，时间是在匹配的 ESC-50 8 样本设置下测得，包含初始化、数据加载、50 轮训练、评测和输入输出但不含配置搜索。表前说明比较问题是同样任务下谁需要穿过文本编码器、谁随当前音频变化，表后解释时间差异的来源。

| Method | Learned | Opt. Space | Context | Time |
| --- | --- | --- | --- | --- |
| CoOp | ✓ | Input | Static | 1 h 28 min |
| CoCoOp | ✓ | Input | Dynamic | 5 h 51 min |
| PALM | ✓ | Feature | Static | 1 h 24 min |
| DF-PALM | ✓ | Feature | Dynamic | 1 h 27 min |

表中 DF-PALM 与 PALM 同属特征空间可学提示，但上下文从静态变为动态，耗时 1 小时 27 分与 PALM 的 1 小时 24 分接近，而输入空间动态的 CoCoOp 需 5 小时 51 分。这说明把条件化放在编码器之后避免了音频条件文本编码器前向，是时间代价差异的关键，但该时间只覆盖 ESC-50 单基准 8 样本条件，不能推广到全部基准。

### 主评测中谁的平均分更高

先看跨基准平均的整体图，柱高是百分比，越高越好，星号标出当组最高。读图任务是比较 5 种方法的两组柱高顺序，并记住 DF-PALM 柱顶数值。

> **看图路径：** 1. 比较蓝色平均准确率柱和橙色宏平均 F1 柱的高度顺序；2. 确认 DF-PALM 两根柱顶标注的数值和星号位置；3. 观察 ProKeR 与 PALM、FS-AVG 之间的差距大小

[![原论文 Fig. 1：Cross-benchmark mean accuracy and Macro-F1 (%) of the five methods shown across 11 audio…](https://arxiv.org/html/2610.24921v1/grouped_bar_accuracy_f1_stars.svg)](https://arxiv.org/html/2610.24921v1/grouped_bar_accuracy_f1_stars.svg)

*论文图 1。原论文 Fig. 1:：“Cross-benchmark mean accuracy and Macro-F1 (%) of the five methods shown across 11 audio classification benchmarks in the main 16-shot setting.”。*

图中 DF-PALM 两柱最高，分别标注 80.69 和 80.32，左侧依次是 ProKeR 的 79.07 和 78.30、FS-AVG 的 76.06 和 75.41、PALM 的 76.58 和 76.02、CoCoOp 的 73.45 和 72.95。这张图对应 16 样本下 11 基准等权平均，支持动态特征空间适配在平均意义上领先，但不能说明每个基准都胜出。

下表给出宏平均 F1 的基准级细节，比较问题是在相同 PENGI 主干、相同支持集和相同聚合下 5 种可运行策略的类别均衡表现，指标方向越高越好，表后解释收益与反例。

| Benchmark | FS-AVG | ProKeR | PALM | DF-PALM |
| --- | --- | --- | --- | --- |
| ESC50-Actions | 98.91 | 98.46 | 96.54 | 99.00 |
| RAVDESS | 31.83 | 43.52 | 45.46 | 49.49 |
| UrbanSound8K | 86.99 | 86.53 | 81.10 | 86.67 |
| AVERAGE | 75.41 | 78.30 | 76.02 | 80.32 |

表中 DF-PALM 在 RAVDESS、TUT2017 等上领先较多，例如 TUT2017 的 84.10 高于 PALM 的 78.95 和 ProKeR 的 79.99，但在 NS-Instruments 上 72.88 低于 ProKeR 的 73.16。跨基准平均 DF-PALM 为 80.32，PALM 为 76.02，相差 4.30 个百分点，ProKeR 为 78.30。原文配对检验以每个基准为一个单元，用 200,000 次自助的基准级差值区间和 Holm 校正后 Wilcoxon 符号秩检验支持对 PALM 的增益，对 ProKeR 的宏平均增益也保持显著而准确率增益校正后不显著，排除 ESC50-Actions 后结论边界变化，说明平均增益依赖基准构成。

### 增益能否换主干和换样本量

跨主干评测把同一适配结构搬到 LAION-CLAP 和 OpenFLAM 的 512 维归一化音频文本特征上，DF-PALM 仍用 L 等于 3、H 等于 4 而不另搜，比较对象是同一主干上的 PALM。LAION-CLAP 上平均准确率和宏平均 F1 分别提高 1.37 和 1.35 个百分点，OpenFLAM 上分别提高 0.90 和 0.74 个百分点，4 组配对比较经联合 Holm 校正后仍显著，基准级上多数基准为正但 CREMA-D 等个别为负。

跨样本量评测比较 4、8、16、32 每类样本下 4 种提示学习方法，DF-PALM 沿用 16 样本选出的配置，4 个设置下平均准确率和宏平均 F1 都是四者最高，对 PALM 的配对增益在准确率上 0.63 到 4.11 个百分点、宏平均上 0.72 到 4.30 个百分点，区间都不含零。但 32 样本时增益收窄，且 ProKeR 和 FS-AVG 只在 16 样本评测，跨样本量结论只限于提示学习方法之间。

### 两个组件各自贡献了多少

消融的比较问题是动态上下文与非对称融合是否缺一不可，条件是相同训练设置和 11 基准等权平均，指标越高越好。下表先给跨基准平均，表后结合基准级解释组合意义与限制。

| Method Variant | Mean Accuracy | Macro-F1 |
| --- | --- | --- |
| PALM (Baseline) | 76.58 | 76.02 |
| Dynamic Context only | 79.27 | 78.72 |
| Asymmetric Fusion only | 78.89 | 78.46 |
| Joint Attention | 78.31 | 76.83 |
| DF-PALM (Full) | 80.69 | 80.32 |

仅动态上下文把平均准确率从 76.58% 提高到 79.27%，仅非对称融合达到 78.89%，完整模型达到 80.69%，宏平均对应为 78.72%、78.46% 和 80.32%。相对仅动态上下文，完整模型再提高 1.42 和 1.60 个百分点且配对显著，在 9 个基准准确率和 10 个基准宏平均上更好。联合自注意力对照保留动态生成器并匹配深度头数，但用自注意力同时更新音频和类别表示，完整模型对其领先 2.38 个百分点准确率和 3.48 个百分点宏平均，其中准确率区间包含零而宏平均显著，说明固定类别矩阵、只精炼音频的设计主要改善了类别均衡表现。

超参数敏感性用支持集内部四折验证的跨基准平均衡量，读图任务是确认不同 L 和 H 下变化幅度以及红框位置。

> **看图路径：** 1. 横轴是跨注意力层数 L，纵轴是注意力头数 H；2. 左右两幅热力图分别对应准确率和宏平均 F1；3. 找到红框标出的 L 等于 3、H 等于 4 格及其数值

[![原论文 Fig. 4：Cross-benchmark internal-validation performance across cross-attention depth L and head count H in…](https://arxiv.org/html/2610.24921v1/heatmaps_L_Heads.png)](https://arxiv.org/html/2610.24921v1/heatmaps_L_Heads.png)

*论文图 4。原论文 Fig. 4:：“Cross-benchmark internal-validation performance across cross-attention depth L and head count H in the 16-shot setting.”。*

左右热力图横轴是层数 1 到 8、纵轴是头数 2、4、8、16，左图准确率、右图宏平均 F1，红框 L 等于 3、H 等于 4 在两图都是局部最高，数值分别为 79.42% 和 78.86%。跨候选配置平均验证准确率和宏平均仅变化 0.43 和 0.40 个百分点，说明验证性能对深度头数不敏感，但这是验证集上的内部选择结果，不等于测试集最优，且每次独立选择都落到同一格才允许直接复用。

### 参数量相当时优势还在吗

容量对照的比较问题是增益是否只是因为参数变多，条件是相同训练设置，表前说明各对照的适配位置，表后解释设计与容量的区分。

| Method | Trainable parameters | Acc. | Macro-F1 |
| --- | --- | --- | --- |
| PALM | Prompt only | 76.58 | 76.02 |
| Static-PALM+MLP | 12.60M audio MLP | 79.47 | 79.11 |
| PALM+Audio-LoRA | 141,312 LoRA + prompt | 79.27 | 78.93 |
| DF-PALM | 12.78M | 80.69 | 80.32 |

线性探针只在冻结音频输出上学线性头，平均准确率 77.29。静态 PALM 加多层感知机保留输入无关类别表示并用约 12.60M 音频多层感知机，达到 79.47。音频编码器内 LoRA 只改 12 个 HTSAT 编码器查询键值投影的秩 8 因子共 141312 参数加提示，达到 79.27。DF-PALM 编码器输出适配共 12.78M，达到 80.69，分别超过前两者 1.22 和 1.42 个百分点且配对显著。编码器内仿射调制的 PALM 加 ASPL 变体仅 704 调制参数加提示，为 75.57。这些对照支持实例条件加类别引导音频精炼的组合不只是容量效应，但对照的参数位置和结构不同，不能理解为同预算下的严格等参比较。

原文还报告留 1 基准稳健性，每次去掉一个基准后在剩余 10 个上重算等权平均，对 PALM 的增益始终为正，准确率 3.75 到 4.40 个百分点，去掉 ESC50-Actions 后为 4.28 和 4.48 个百分点，说明平均优势不依赖单个基准，但 ESC-50 与 ESC50-Actions 存在类别重叠，敏感性分析只缓解了构成担忧。

### 额外代价和尚未验证的范围是什么

端到端在 C 等于 50、批量 1、NVIDIA A40 上测得 DF-PALM 每样本 28.00 毫秒、PALM 为 25.57 毫秒，算子统计浮点运算量增加 0.642G 即 0.39%，峰值显存多 49.14 MB。模块级在 RTX 4090 上排除冻结主干后随类别数扩展，读图任务是看延迟和显存随 C 从 50 到 1000 的变化斜率。

> **看图路径：** 1. 横轴是类别数 C 从 50 到 1000 的变化；2. 上方面板看仅适配模块的中位延迟随 C 的变化；3. 下面板看峰值显存随 C 的变化及 C 等于 1000 处的标注

[![原论文 Fig. 5：Module-level scaling on an NVIDIA RTX 4090 GPU: (a) median latency and (b) peak allocated memory.](https://arxiv.org/html/2610.24921v1/scalability_vs_classes.svg)](https://arxiv.org/html/2610.24921v1/scalability_vs_classes.svg)

*论文图 5。原论文 Fig. 5:：“Module-level scaling on an NVIDIA RTX 4090 GPU: (a) median latency and (b) peak allocated memory. The frozen PENGI backbone was excluded.”。*

上方面板显示 DF-PALM 模块延迟随 C 几乎持平，C 等于 1000 时 1.224 毫秒，比 PALM 多 1.084 毫秒。下面板显示峰值显存随 C 上升，C 等于 1000 时 72.2 MB，多 52.391 MB。结合复杂度随类别线性增长的公式，这说明算子量增幅小而实测延迟增幅约 9.5%、显存增幅约 10.96%，选型时要区分算子统计与实测延迟显存。

未验证范围包括 ProKeR 和 FS-AVG 只在 16 样本评测、跨主干只用固定配置未重搜、超参数选择依赖支持集内部验证、对 PALM 之外方法的显著性在子集排除后边界变化。作者资源方面，论文给出代码链接且本次校验显示可用，可写作者资源当前可用，但权重下载和一键可运行需要按仓库实际说明另行确认。

### 复现第一步要准备什么

先按附录准备 11 基准划分和类别名称字符串，类别名原样加载并按字母排序，PALM 和 DF-PALM 直接编码，CoOp 和 CoCoOp 前置 16 个可学上下文词元，零样本和 ProKeR 用固定模板。每个基准、折和种子用匹配的 16 每类支持子集，DF-PALM 在该支持集内做四折 12 比 4 验证选 L 和 H，重训全部 16 每类到第 50 轮，评测批量 128。

主干用 PENGI 冻结编码器并排除自回归解码器，文本表示每小批量算 1 次共享，音频每样本独立算，优化器和初始化按训练节设置。跨主干时换 LAION-CLAP 或 OpenFLAM 的归一化特征并保持同一结构，超参数若重搜要说明与原文固定复用的差异。统计复现要以基准为单元做配对差值自助区间和 Holm 校正 Wilcoxon 检验，不能只比跨基准平均。

### 什么时候值得尝试这种做法

当音频事件随录制条件变化大、每类只有十几个样本、且主干编码器希望保持冻结时，值得尝试在编码后加音频条件残差并用同一条件矩阵精炼音频。预期是在跨基准平均上比静态特征提示和输入前提示更好，且在 3 个评测主干上方向一致，代价是增加约 12.78M 可优化参数和少量推理延迟显存。

还需要补的验证是更大类别数下的端到端延迟、更多主干和更多种子下的显著性、以及与核适配和原型平均在多样本量下的直接对比。教学例子可设想一段远距离带噪声的犬吠，共享残差让犬吠类表示向当前噪声背景偏移，同时融合让音频查询更关注与犬吠类相关的分量，这只是帮助理解的例子，不代表实测效果。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.24921v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
