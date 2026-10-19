---
title: "Framing Spatial Hearing within the Free Energy Principle: A Hierarchical Model of Perceptual Learning"
date: 2026-10-19
draft: false
tags: [声源定位, 统计分析, 空间音频, 听觉与音乐认知]
categories: [论文速递]
description: "论文把有视觉反馈的声音指向任务建模为对变分自由能的在线自然梯度下降，用侧向精度、极角精度和半脑场权重三个信念分量解释个体学习曲线，并用留出似然和极角加权稳健性检验限定结论成立条件。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.23196"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用自由能原理解释声音方向学习：分层次信念如何逐试次更新"
paper_digest_original_title: "Framing Spatial Hearing within the Free Energy Principle: A Hierarchical Model of Perceptual Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.23196v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.23196v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.23196v1.pdf"
paper_digest_primary_task: "声源定位"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.localization","label":"声源定位"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"scientific_topic","id":"scientific_topic.spatial-audio","label":"空间音频"},{"facet":"scientific_topic","id":"scientific_topic.auditory-cognition","label":"听觉与音乐认知"}]
paper_digest_primary_method: "统计分析"
paper_digest_score: 5.3
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把有视觉反馈的声音指向任务建模为对变分自由能的在线自然梯度下降，用侧向精度、极角精度和半脑场权重三个信念分量解释个体学习曲线，并用留出似然和极角加权稳健性检验限定结论成立条件。"
paper_digest_authors: [{"affiliations":["Dyson School of Design Engineering, Imperial College London, UK"],"name":"Roberto Barumerli"},{"affiliations":["Dyson School of Design Engineering, Imperial College London, UK","Dept. of Information and Communications Engineering, Aalto University, Finland"],"name":"Nils Meyer-Kahlen"},{"affiliations":["Dyson School of Design Engineering, Imperial College London, UK"],"name":"Lorenzo Picinali"}]
paper_digest_abstract_sha256: "931469c8188cc3b23957ac85cdef235b25cf5dcc83622a40ad52d0cb363abef6"
paper_digest_sidecars: {"citation.bib":{"sha256":"e82dc5895ae9f9dd925f39c40096aab0bb0262d04c4de87cddd4e768788fcabf","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23196/citation.bib"},"citation.json":{"sha256":"78b84a867d98ba3ff6b2716d3cde3eb297e91a61a1b50b0419a484ba5a7b27eb","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23196/citation.json"},"citation.ris":{"sha256":"3d01618033f47475b62fc2e2e25a94ca8eca4c66c4f4d19e19e8872b13d0cce9","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23196/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"6b0a92d2afb497b862f771e3925e0f9c14188003adc5baa5ad6815ba8f7986fb","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23196/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "cb0889260b5d5c3d5430cb52d70c802e70c83ead6ed1f956068be8382eae5b6f"
paper_digest_api_reader_plan_sha256: "903e78e65088b1d1e9e0b5bb2febb5c51d2f524b4e1aec82d8d5e8738720a549"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "41f8fb5f966a3132a187f08d704db0c0845609b30f9a5c24aff9f8dbc5a83b27"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "2d67c44c61ea32106538d8571023f1186d3443f7058271cecd6179ea5158e18a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "448aaeb99dbfe3c5e03a611a887e6d06c3b7d2293fed714750514da0aaccca9c"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "981449986d5bd1b11f0b242cb77d4e1f0441f94ab9d748c837cf5f41a93cc9c4"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用自由能原理解释声音方向学习：分层次信念如何逐试次更新

> 英文题目：*[Framing Spatial Hearing within the Free Energy Principle: A Hierarchical Model of Perceptual Learning](https://arxiv.org/abs/2610.23196v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[声源定位](/audio-paper-digest-blog/papers/?concept=task.localization)
- **研究方法**：[统计分析](/audio-paper-digest-blog/papers/?concept=method.statistical-analysis)
- **科学主题**：[空间音频](/audio-paper-digest-blog/papers/?concept=scientific_topic.spatial-audio)；[听觉与音乐认知](/audio-paper-digest-blog/papers/?concept=scientific_topic.auditory-cognition)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Roberto Barumerli：Dyson School of Design Engineering, Imperial College London, UK
- Nils Meyer-Kahlen：Dyson School of Design Engineering, Imperial College London, UK；Dept. of Information and Communications Engineering, Aalto University, Finland
- Lorenzo Picinali：Dyson School of Design Engineering, Imperial College London, UK

## 📌 核心摘要

读者需要理解人在逐试次视觉反馈下如何学会判断不可见声源方向，难点是侧向误差、前后混淆与极角分散交织且个体学习速度不同。论文把每次试验真实方向记为 \(\bm{\varphi}_{t}=(\alpha_{t},\beta_{t})\)，把指向反应记为 \(\bm{\varphi}_{r}=(\alpha_{r},\beta_{r})\)，输入为这两对方向角，输出是对听者内部信念的逐试次更新。知觉推断依据当前信念向量 \(\bm{\theta}=(\kappa_{L},\kappa_{P},w)\)，把侧向分量写成以真实侧向为中心的单峰冯·米塞斯分布，把极角分量写成正确半球与镜像半球共用精度并经余弦平方几何压缩的双成分混合，混合权重表示辨别前后半球的能力。信念修正以视觉反馈揭示的真实方向为高精度教学信号计算变分自由能预测误差，再经Fisher信息缩放做在线自然梯度更新，使不同尺度的侧向精度、极角精度和半球权重一致变化，更新后信念进入下一试次的知觉推断。参数标定先用基线块尾部试次极大似然估计初始信念，再在反馈块上按序贯更新为每名被试拟合学习率，相对以往静态贝叶斯定位，该研究把知觉与学习写成统一在线更新并保留几何压缩因子。在反馈块上奇数试次拟合、偶数试次评估的留出比较中，以偶数试次留出对数似然为指标，完整模型比冻结极角精度学习的简化模型高167 nats，比冻结半球权重学习的简化模型高82 nats。结论适用于有逐试次视觉反馈的头部静止指向任务，未验证头部运动参与的主动消除混淆，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/robaru/iwai2026-fep-spatial-hearing> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 空间听觉要解决什么输入到输出问题

刚进入音频领域时，可以把声源定位想成 1 个方向估计任务。输入是到达双耳的声信号，目标是报告看不见声源时它在哪个方向，输出是听者用手指向的方向。本文只研究水平与垂直混合的方向误差如何随经验缩小，不研究语音内容或响度本身。

关键难点在于声学线索随头部、环境和频谱变化而变化，听者内部必须维持一个可更新的映射。双耳时间差和强度差主要告诉左右偏离，但不能唯一确定上下和前后；频谱形状线索帮助解出锥内位置，但对初学者不稳定。因此需要一个能同时描述单次感知和跨试次学习的计算框架。

已有贝叶斯定位模型多处理静态、无反馈的一次判断，没有说明每次给出正确答案后信念如何一步步修正。本文把自由能原理作为候选框架，检验它能否把多次试验的学习轨迹分解为几个不同时间尺度的分量。

### 已有静态定位模型与本文动态学习的差别

听觉文献中对静态定位已有较成熟的贝叶斯描述，给定一组线索分布就能预测平均误差和前后混淆率。这类工作回答的是在信念固定时响应如何产生，输入、目标和评价都在同一试次内完成，不涉及反馈后的参数变化。

另一类行为实验发现，提供视觉反馈后定位误差会跨试次下降，可能涉及感觉运动重校准和对改变后频谱线索敏感性的提高。但这些解释停留在机制名称层面，没有给出每个人每个试次的信念更新方程，也无法区分垂直方向的改善到底来自前后判断变准，还是锥内精度本身变尖锐。

本文的比较对象因此不是另一个定位算法的优胜劣汰，而是在相同任务、相同反馈条件下，能否用一个可微分的分层生成模型同时复现侧向散布、极角散布和半脑场错误率 3 条群体平均曲线，并用留出似然检验 3 个学习率是否都有必要。

### 每个试次的输入、响应与反馈是什么

每个试次先呈现一个不可见声源的真实方向，用耳间极坐标表示为侧向角和极角。听者根据听到的声音做出指向响应，同样记为两个角度，随后在真实位置看到视觉反馈。这个三步顺序是固定的：呈现、指向、反馈。

侧向角决定了是哪个混淆锥，极角决定了在该锥内的位置。论文用前方、后方和侧方 3 个参考点帮助读者定位坐标原点，侧向偏到正负 90 度时锥收缩为一点，极角失去定义，这是后文加权处理的几何原因。

**侧向角 × 极角：** 侧向角指双耳轴方向，决定混淆锥是哪一个圆；极角指在这个圆内的上下前后位置。两者分工是先定锥、再定锥内位置，组合起来才能唯一确定空间方向，本文的似然也因此分解为侧向和极角两部分。

下面先看坐标系示意图，重点是理解锥与锥内角的分工，这直接对应模型似然的分解方式。

> **看图路径：** 1. 先找到头部示意与三个坐标轴，确认观察视角；2. 再看绿色圆环代表的混淆锥与侧向角标记的位置；3. 最后沿蓝色弧线看极角如何在锥内定义前后与上下

[![原论文 Figure 1：Interaural-polar coordinate system \[14\].](https://arxiv.org/html/2610.23196v1/reference_polar.svg)](https://arxiv.org/html/2610.23196v1/reference_polar.svg)

*论文图 1。原论文 Figure 1:：“Interaural-polar coordinate system [14].”。*

图中可见头部示意居中，绿色圆环表示由当前侧向角确定的混淆锥，红色标记表示侧向偏离，蓝色弧线表示沿锥面的极角变化。黑色目标点落在锥面上，直观说明仅知道锥还不够，必须再知道锥内位置才能确定方向。这张图帮助理解为何侧向误差和极角误差要用不同分布建模。

### 分层智能体的整体流程是怎样的

方法整体是两层结构。下层是听者的生成模型，描述在当前信念下真实方向如何产生指向响应；上层是信念修正，用视觉反馈计算变分自由能并做自然梯度下降。初始信念来自无反馈基线块的最大似然估计，学习率按每名被试单独拟合。

**Level 1 感知推断 × Level 2 信念修正：** Level 1 感知推断指给定当前精度信念，声音方向如何产生指向响应的生成模型；Level 2 信念修正指利用视觉反馈的真值计算预测误差并更新精度信念。前者描述一次试次内的映射，后者描述跨试次的学习，两层共享同一组信念参数形成闭环。

一个样本走完全程是这样的：第 i 个试次给定真实方向，听者按当前精度产生一个带噪声的指向；看到真值后，模型比较观察到的一致性与当前信念预期的一致性，形成预测误差；3 个信念分量各自沿自然梯度走一步，进入下一试次。这种顺序更新产生的轨迹是批量优化无法恢复的。

下图导读关注信息流向：底部是试次内的感知路径，顶部是跨试次的学习路径，右侧反馈作为高精度教学信号进入上层，上下层之间交换信念与误差。

> **看图路径：** 1. 先沿底部箭头看声音呈现到指向响应的主路径；2. 再看右侧视觉反馈如何进入上层信念修正；3. 最后看上下层之间信念下传与预测误差上传的箭头

![原论文 Figure 2：Architecture of the hierarchical FEP agent.](/audio-paper-digest-blog/images/papers/2610.23196/figure-2-e463564bc89386e9.png)

*论文图 2。原论文 Figure 2:：“Architecture of the hierarchical FEP agent.”。*

图中确实可见底部方框标注感知推断与两个分布形式，顶部方框标注信念修正与 3 个参数，左侧箭头给出初始信念，右侧虚线给出视觉反馈，中间垂直双向箭头表示信念下传与预测误差上传。这说明学习不是直接调整指向，而是调整生成响应的精度信念。

### 侧向分量如何表示左右精度

侧向分量处理左右方向的散布。论文把它写成以真实侧向角为中心、以侧向精度为集中度的 von Mises 分布。直观例子是：若某被试侧向精度高，指向会紧紧围绕真值；若精度低，指向会在左右方向更分散。

圆周分布不能直接用普通高斯，因为负 180 度和正 180 度是同一点。von Mises 分布专门处理这种周期性，它的数学形式如下式所示，分子是集中度加权的余弦相似，分母是零阶修正贝塞尔函数起归一化作用。

\[\mathcal{VM}(x;\,\mu,\kappa)=\frac{e^{\kappa\cos(x-\mu)}}{2\pi I_{0}(\kappa)},\]

该式中 x 是观察到的角度，mu 是分布中心，kappa 是集中度即精度。I0 是归一化常数部分，A 函数即后文出现的贝塞尔比值，表示在当前精度下期望的余弦一致性。理解这一点后，才能看懂更新方程中观察一致性减去期望一致性的结构。

**混淆锥 × 半脑场混淆：** 混淆锥指双耳时间差和强度差相同的方向集合，呈圆环状；半脑场混淆指把前方目标报到后方镜像位置的现象。两者搭配的意义是：锥解释了为什么仅靠双耳差无法区分前后，而半脑场权重专门量化正确解出前后镜像的概率。

**von Mises 分布 × 集中度：** von Mises 分布是圆周上的正态分布类比，用于描述角度响应的散布；集中度是它的精度参数，值越大分布越尖锐。本文用集中度表示侧向精度和极角精度，学习即表现为集中度随试次上升。

**变分自由能 × 自然梯度：** 变分自由能在本文简化为负对数似然，衡量当前信念解释观察响应的差程度；自然梯度是用 Fisher 信息校正后的梯度方向，让不同尺度的参数以可比步长更新。两者组合使每次视觉反馈后的信念修正既下降自由能，又兼顾参数曲率。

### 极角混合如何同时表示精度与前后混淆

极角分量要同时解决两个困难：在正确半脑场内有多尖锐，以及有多大概率报到前后镜像位置。论文用两成分 von Mises 混合表示：一个成分中心在真实极角，另一个在镜像位置，两者共享同一个极角精度，混合权重表示判对前后半脑场的概率。

混合权重接近 1 意味着几乎不出现前后混淆，接近 0.5 意味着前后随机。两个成分共享集中度的设定含义是：混淆影响的是落到哪一侧，而不是每一侧内部的聚集程度。举例来说，一个听者可能很少前后报错，但每次报对时仍较分散，这就对应高权重、低精度。

几何上还要乘以侧向角余弦平方的缩放。当侧向接近正负 90 度时锥面收缩，频谱线索对极角的信息量下降，因此有效精度按该因子缩小。感知时模型以推断的锥为条件，更新时则用视觉反馈揭示的真实锥计算，这一点在附录中有明确区分。

### 自由能如何简化为似然上升与自然梯度

信念修正的起点是试次 i 的变分自由能，包含识别分布与先验的散度项减去期望对数似然。在平坦先验和高斯近似下，复杂度项相对当前点估计为常数，自由能只剩下负对数似然加常数。因此最小化自由能等价于在线最大化似然，这是论文强调的极简自由能实例，只覆盖感知与学习，不含动作选择。

\[\mathcal{F}_{i}=\mathrm{KL}\!\left[q(\bm{\theta})\,\|\,p(\bm{\theta})\right]-\mathbb{E}_{q}\!\left[\log p(\bm{\varphi}_{r}|\bm{\varphi}_{t},\bm{\theta})\right].\]

该式中 q 是对信念的识别分布，p 是先验，期望是对信念取的，似然是给定真实方向和当前信念下产生观察响应的概率。由于似然分解为侧向与极角的乘积，3 个分量的更新相互解耦。

更新采用自然梯度下降，用 Fisher 信息矩阵的逆校正普通梯度，使生活在不同尺度的参数能一致更新。对 von Mises 集中度，Fisher 信息是贝塞尔比值的导数；对半脑场权重，通过对数几率参数化使 Fisher 信息与逻辑导数相消，并保证权重始终在 0 到 1 之间。

\[\bm{\theta}_{i+1}=\bm{\theta}_{i}-\bm{\eta}\,\mathcal{I}(\bm{\theta}_{i})^{-1}\nabla_{\bm{\theta}}\mathcal{F}_{i},\]

该式中 theta 是 3 个信念组成的向量，eta 是对角学习率矩阵，I 是 Fisher 信息，梯度是对自由能求的。每一步括号内的预测误差形式是观察到的一致性减去当前信念预期的一致性，极角部分还需按责任加权的余弦对齐计算。

### 没有神经网络训练时实际拟合了什么

本研究没有训练神经网络，需要说清实际计算是什么。初始信念按每名被试用基线块最后 100 个无反馈试次做最大似然估计得到，相当于刻画学习开始前的 naive 定位水平。

唯一自由参数是 3 个学习率，分别控制侧向精度、极角精度和半脑场权重的步长。拟合方法是最小化反馈块响应的平均负对数似然，响应按顺序更新方程逐试次展开，用贝叶斯自适应直接搜索优化。由于似然分解，极角相关的两个学习率与侧向学习率可独立估计。

这意味着模型不是批量拟合平均曲线，而是先给定初始点和候选学习率，按真实试次顺序一步步滚出信念轨迹，再评估该轨迹下实际观察响应的似然。学习率因此反映个体更新快慢，而不是网络权重。原文未报告计算耗时与硬件预算，复现时缺的是这部分成本信息，不能自行补充。

### 数据、被试与评价指标如何定义

行为数据来自前人实验的手动条件，共 5 名被试，分析截断到 750 试次并做平滑显示。模型评价看 3 条群体平均轨迹：侧向散布是侧向误差的标准差，极角散布是排除半脑场错误后极角误差的标准差并按余弦平方加权，半脑场错误率是偏离目标超过 90 度的比例同样加权。指标方向都是越小表示行为误差越小。

拟合优度用决定系数报告，留出比较用奇偶试次划分：在奇数反馈试次上拟合学习率，在偶数试次上评估对数似然，两种情形下信念都按全试次顺序更新。稳健性检验比较保留与去掉余弦平方缩放的模型，参数量相同，比较的是样本内对数似然差。

需要提醒的是样本量很小，个体轨迹差异大，任何群体结论都只在这 5 人、这种手动指向加外部视觉反馈的感知循环内成立。指向在这里只是读出，头部运动未建模为策略，这是作者明确的局限。

### 群体平均曲线与个体参数轨迹显示什么

群体平均上模型捕捉了 3 条曲线的方向与形状，侧向、极角和半脑场误差的决定系数分别为 0.75、0.83 和 0.79。这说明三参数在线更新足以复现改善趋势，但决定系数只说明方差解释比例，不等于逐试次预测准确。

个体层面侧向精度对多数被试上升，极角精度上升且基线越低相对增益越大，半脑场权重稳步上升。3 个学习率的中位数分别为 0.010、0.015 和 0.014，表明三者更新速度量级相近但分工不同。下表整理群体拟合与学习率的关键数字，单位与原文一致，决定系数无量纲，学习率是每试次步长。

| 条件 | 指标 | 数值 |
| --- | --- | --- |
| 群体平均 | 侧向散布拟合 | 0.75 |
| 群体平均 | 极角散布拟合 | 0.83 |
| 群体平均 | 半脑场错误率拟合 | 0.79 |
| 个体中位数 | 侧向学习率 | 0.010 |
| 个体中位数 | 极角学习率 | 0.015 |
| 个体中位数 | 半脑场学习率 | 0.014 |

上表把行为拟合与更新步长放在一起，是为了说明模型既在群体层面跟住曲线，又在个体层面给出可解释的更新速度。限制是该表混合了拟合优度与拟合出的参数，后者依赖基线估计与优化器，不能直接当作部署时可用的通用步长。未胜出的情形是并非所有被试 3 个分量都上升，个别被试极角精度几乎不变，下一节用留出检验量化这一点。

### 垂直方向改善来自哪两个来源

论文特别讨论垂直改善的来源。在余弦平方加权下，行为极角散布下降的同时极角精度上升，作者据此认为总体统计上的改善来自半脑场区分变好与极角本身变尖锐两个来源，而不是单一因素。

这与已有机制表述一致：感觉运动重校准、自然听觉获得的稳定频谱映射，以及对改变后频谱线索敏感性的提高。但原文只是说轨迹与这些机制一致，没有做因果干预，因此相关不等于因果，不能断言本模型证明了某一神经机制。

适用条件也很具体：结论依赖于按侧向加权的极角定义，排除了半脑场错误后的散布计算，以及 5 人手动条件的数据。若换成无加权定义或不同任务，分解方式可能变化，这正是附录做稳健性检验的原因。

### 三个学习率是否都有必要

要回答的比较问题是：在奇数试次拟合、偶数试次评估的留出条件下，冻结极角精度或冻结半脑场权重是否会降低预测似然，信念在两种条件下都按全试次顺序更新。

| 比较设置 | 相对完整模型的差异 |
| --- | --- |
| 冻结极角精度 | 留出对数似然总共降低 167 nats |
| 冻结半脑场权重 | 留出对数似然总共降低 82 nats |
| 去掉余弦平方缩放 | 中位数学习率从 0.015 降到 0.006，极角精度仍上升 0.6 到 2.8，同参数下样本内总差异为 -53 nats |

上表结果说明两种简化都使留出预测变差，半脑场学习对多数被试必要，去掉几何加权只改变极角学习幅度而不改变上升方向。限制是样本仅 5 人，区间估计基于有限自举，前后半划分只验证排序，不能推广到主动转头或大人群条件。

### 小样本与感知循环带来哪些限制

第一个限制是人数很少，每人轨迹平滑后仍有波动，个别被试如 NH17 的极角学习接近零，说明群体平均的上升不代表每人每分量都上升。任何关于最低基线增益最大的说法都只在这 5 人内观察到，不能当作普遍学习规律。

第二个限制是感知循环不完整。指向只是读出，反馈是外部给定的真值，模型没有为信念设置信息性先验，也没有把头部运动建模为解决前后模糊的动作策略。因此这只是自由能原理中感知与学习的极简实例，不包含主动推断的完整动作感知循环。

第 3 个限制是近似选择。平坦先验加拉普拉斯近似只影响自由能曲率，不影响更新方向；余弦平方缩放改变极角学习幅度但不改变方向。这些在附录中已检验，但检验仍在同一数据集内完成，未做跨实验预测。

### 复现第一步做什么与需要什么信息

复现第一步是按附录公式重建顺序更新。先用基线块最后 100 试次最大似然估计初始侧向精度、极角精度和半脑场权重，再用反馈块按试次顺序滚动更新，每步用真实侧向计算余弦平方缩放，用观察一致性减期望一致性形成误差。学习率用贝叶斯自适应直接搜索拟合，注意极角与侧向可分别估计。

关键超参数是 3 个学习率的初值范围与优化器设置，信息条件是必须有逐试次的真实方向与指向方向，缺一不可。原文给出了更新方程与估计流程，但未报告运行时间与硬件，成本部分无法复核。

关于资源，论文附录给出代码与数据链接，本次收到的两个第三方链接当前可达，但第三方镜像只证明论文提到该链接，不证明作者已开源。是否作者资源当前可用需按归属明确且可用的记录判断，不能仅凭链接可达就断言官方已公开，实际复现前应核对链接内容与版本。

### 什么时候值得尝试与还需补什么验证

当任务是有逐试次反馈的方向学习，且想区分左右变准、前后变准与锥内变尖锐时，这个三参数在线模型值得尝试。它用很少的自由参数给出可逐试次展开的轨迹，适合教学与小样本行为建模。

当目标是实时系统或包含头部运动的主动定位时，不应直接套用本文结论，因为动作未建模，先验不确定性也未量化。此时更需要补的验证是信息性先验下的后验不确定性，以及把转头作为策略的主动推断扩展。

还需补的验证包括更大样本的留出预测、不同加权定义下的分解稳定性，以及闭环实验中反馈精度变化时的学习速度。这些都应在与本文相同的输入、监督与运行阶段下比较，才能判断改善来自模型还是条件差异。

<details>
<summary>📎 论文与评分元数据</summary>

排名：后50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.23196v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-19/)
