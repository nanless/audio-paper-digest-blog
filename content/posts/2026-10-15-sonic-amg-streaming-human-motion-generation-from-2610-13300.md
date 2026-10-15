---
title: "Sonic-AMG: Streaming Human Motion Generation from Spatial Audio"
date: 2026-10-15
draft: false
tags: [音频交互, 自回归模型, 流式处理, 空间音频, 实时处理]
categories: [论文速递]
description: "Sonic-AMG 针对双耳音频流加世界系声源位置输入，用 what 与 where 分离表征加因果 Transformer 与流头逐段生成动作，并以排练训练和空间反馈缓解历史与空间条件失配，在 SAM 上取得最优 FID 与 R-precision 且保持实时流式生成，但结论限于 SAM 划分与已知声源位置条件。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.13300"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "Sonic-AMG：从空间音频流式生成人体反应动作"
paper_digest_original_title: "Sonic-AMG: Streaming Human Motion Generation from Spatial Audio"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.13300v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.13300v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.13300v1.pdf"
paper_digest_primary_task: "音频交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-interaction","label":"音频交互"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"scientific_topic","id":"scientific_topic.spatial-audio","label":"空间音频"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "Sonic-AMG 针对双耳音频流加世界系声源位置输入，用 what 与 where 分离表征加因果 Transformer 与流头逐段生成动作，并以排练训练和空间反馈缓解历史与空间条件失配，在 SAM 上取得最优 FID 与 R-precision 且保持实时流式生成，但结论限于 SAM 划分与已知声源位置条件。"
paper_digest_authors: [{"affiliations":["Brown University"],"name":"Jingcheng Ni"},{"affiliations":["Brown University"],"name":"Zekun Li"},{"affiliations":["MIT"],"name":"Zhiyang Dou"},{"affiliations":["Brown University"],"name":"Xiaoyan Cong"},{"affiliations":["Yale University"],"name":"Ziyao Zeng"},{"affiliations":["Brown University"],"name":"Hongyang Du"},{"affiliations":["Brown University"],"name":"Randall Balestriero"},{"affiliations":["The University of Hong Kong"],"name":"Taku Komura"},{"affiliations":["Brown University"],"name":"Srinath Sridhar"}]
paper_digest_abstract_sha256: "939e0711ab5d674badb65d33ed443390eb121dcfc2ca1620ce5bb62e03f68dc4"
paper_digest_sidecars: {"citation.bib":{"sha256":"02b04fb4fb7374afbb89881d67b80295648e95e902dde492a5226608853a4931","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13300/citation.bib"},"citation.json":{"sha256":"58a4e83d61c2ce791516eedc3c095fa4bfcb7cbe496581c175ce49d4119f931a","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13300/citation.json"},"citation.ris":{"sha256":"5b3e08a9d0589fb78b63186293b26b425b237bb119aa014464d7cd1784dd2af8","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13300/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"33b5723f057c4346f264505d2b4fb888ceefb2386dcfa8508c5f5f67d82d780b","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13300/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5696ac0faaf4b2acaa9fea069b8280c531c795ca1f34d0d5e0ec3645e57a1628"
paper_digest_api_reader_plan_sha256: "a1a8daa73686250cc1ab00eb1f92c9304335e85a77b892075edb965db5fca363"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "846268aab7efd40df09a0b6c3acaa95becc0ec4a9a727bdabd571beb28fdce14"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "461b1b47bd5592fe884a74668a5951cc443218f422e0e13e093de824e6a41f54"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8ae924f13fea3f5073fa4ddc5cdb33c93c6f6fa453f30809f19e2fda415673b4"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "333f281167621ceb61c7c4aac6a1a30d5f40ac8dcbb01c6ee76b7a4b7a25d6c3"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 Sonic-AMG：从空间音频流式生成人体反应动作

> 英文题目：*[Sonic-AMG: Streaming Human Motion Generation from Spatial Audio](https://arxiv.org/abs/2610.13300v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频交互](/audio-paper-digest-blog/papers/?concept=task.audio-interaction)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)；[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)
- **科学主题**：[空间音频](/audio-paper-digest-blog/papers/?concept=scientific_topic.spatial-audio)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jingcheng Ni：Brown University
- Zekun Li：Brown University
- Zhiyang Dou：MIT
- Xiaoyan Cong：Brown University
- Ziyao Zeng：Yale University
- Hongyang Du：Brown University
- Randall Balestriero：Brown University
- Taku Komura：The University of Hong Kong
- Srinath Sridhar：Brown University

## 📌 核心摘要

空间音频驱动的人体动作生成输入是双耳音频流和世界坐标系声源位置，输出是 30 Hz 人体关节运动，要求在不知道未来音频时即时反应，并随身体转动更新声源相对方向。Sonic-AMG 先把运动压缩为因果时序变分自编码器（causal temporal VAE）的连续隐变量，把声音内容和身体相对声源几何分别编码为 what 声学令牌和 where 空间令牌，再由因果 Transformer 输出条件向量驱动流匹配（flow matching）头采样下一隐变量并解码为 4 帧动作块。训练采用排练训练结合全序列教师强制和短自回归自我展开，推理与训练均用空间反馈从已生成根部位姿重算身体相对坐标。与需要完整 8 s 输入的 MOSPA 相比，该方法在 SAM 上 GT 声源条件下取得 FID（Fréchet Inception Distance，越低越好）6.505 和 R-precision R@1 0.957 的最佳结果，在线更新条件下仍保持 FID 8.066。结论适用于已知声源位置和 SAM 覆盖的 27 种声音场景，跨环境泛化尚未验证。训练成本为单卡 NVIDIA L40S 约 63 小时完成 150000 步更新，推理在 RTX A6000 上每步约 50.2 ms，满足实时要求。

## 🔗 开源与复现资源

- 第三方资源：<https://jingchengni.com/sonic-amg/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 人听声反应为何要同时知道内容和方位

这篇论文研究的输入是连续到达的双耳音频流和世界系中已知的声源位置，输出是随音频不断延长的人体动作序列，评价时要求动作既像真实反应又与声音内容和方位对上。生活中的例子是背后传来呼唤时，人会边听边转身，转身后声源相对身体的方向就变了，下一步动作必须基于新的相对方位。举例来说，听到爆炸声要判断那是爆炸并同时判断声源在左侧还是右侧，才能决定向哪一侧躲避。

必须保留的信息有两类，一是声音是什么，二是声源相对当前身体在哪里，前者随音频流直接给出，后者随身体运动持续变化。已有路线如 MOSPA 需要等整段音频到齐再一次性生成固定时长动作，不能边听边动。本文要解决的正是流式条件下的因果生成，即不看未来音频、不改写已生成帧地逐段往后长出动作。

### 离线空间音频动作与流式动作模型的区别

音乐编舞和语音手势已有自回归与扩散两条路线，前者逐段预测适合流式，后者在整段窗口上联合去噪适合离线精修。MOSPA 属于后者，它在 SAM 数据集上以完整双耳音频、预先算好的身体相对声源序列和反应风格为条件，用扩散模型生成整段动作，因此需要未来观测。MoSAT 把文本、声学特征和初始相对方向作为条件，但论文明确把流式生成列为未来工作。另一条线如 MotionStreamer 类方法用因果 Transformer 加扩散或流头做逐段潜变量生成，并用因果解码器保证不依赖未来隐变量。

本文的比较都在相同输入目标下进行，离线方法胜在能看到全序列，流式方法胜在能实时响应，两类运行阶段不同，不能把离线看到未来的优势误读为同条件下的建模优势。理解这种运行阶段差异，是后面读懂 GT 与 Online 两种评测协议的前提。

### 流式生成要解决的两个失配是什么

第一个失配是动作历史。标准教师强制训练用记录的真实历史做输入，而推理必须用自己此前生成的不完美历史，误差会沿时间累积。两遍训练虽用第一遍估计替换部分真实输入，但这些替换仍是在真实历史下一次算出的，后一个替换并不依赖前一个采样输出，没有复现递归误差传播。第二个失配是空间条件。声学内容由输入音频直接提供，身体相对声源位置却依赖根位置与朝向。

若训练用真实根轨迹算出的相对位置，模型在训练时见到的空间条件编码了未来真实运动的信息，推理时却只能从已生成根重算，两者分布不一致。论文用实验说明该失配会大幅降低生成质量，因此需要同时处理历史与空间条件两条失配路径。后面的排练训练对应第一条，空间反馈对应第二条。

### 整体流程如何做到来一段音频长一段动作

先看总体分工有助于跟住细节。系统从一个初始 4 帧动作段出发，每次只消费到当前块为止的声学令牌、空间令牌和已生成动作隐变量，采样下一个隐变量并解码出新的 4 帧，再用新根位姿更新空间条件进入下一步。动作表示采用冻结的因果时序变分自编码器，30 赫兹动作按步长 4 压缩为 16 维连续隐变量，每隐变量对应一个 4 帧块。推理时复用键值缓存，只处理新到三元组，流头用十步欧拉积分采样，解码不改写历史帧。下面这张架构图把编码、生成、反馈三部分放在一张图里，适合对照阅读，图中区分了冻结权重、声源标记与细节展开的对应关系。

> **看图路径：** 1. 先看左上运动分支与左下双耳音频加身体相对声源如何进入双耳因果编码器；2. 再看下方语义分支与空间分支分别输出 what 令牌与 where 令牌的位置；3. 接着看中间自回归模型与流头如何交错消费声学、空间、动作三元组

[![原论文 Figure 2：Sonic-AMG architecture. A causal transformer and flow head generate motion latents from…](https://arxiv.org/html/2610.13300v1/pipeline.png)](https://arxiv.org/html/2610.13300v1/pipeline.png)

*论文图 2。原论文 Figure 2:：“Sonic-AMG architecture. A causal transformer and flow head generate motion latents from interleaved acoustic (what), spatial (where), and motion tokens.”。*

图中左下双耳因果编码器输出两类令牌，中间因果 Transformer 与流头完成自回归采样，右上空间反馈把已生成序列的根位姿转回身体相对坐标。可以看到左上运动编码器输出 16 维隐变量并经线性层得到动作令牌，左下语义分支与空间分支分别输出 what 与 where 令牌，中间三元组按声学、空间、动作顺序交错输入。理解这条主路径后，再看分支编码与训练目标会更清楚，也能明白为何解码器冻结而编码器与 Transformer 需要更新。

### 听到了什么与声源在哪如何分开编码

语义分支负责回答听到了什么。它对左右耳各取 80 维对数梅尔特征，用共享因果时序卷积映射到公共特征空间后平均双耳流，以强调双耳共有的内容，再经两层因果时序卷积聚合近期上下文、层归一化与线性投影，最后在每 4 帧块内平均池化到动作隐变量速率，并加上按 SAM 反应风格标签索引的学习嵌入得到声学令牌。空间分支负责回答声源在哪。

它假设声源世界位置已知，结合根位置与朝向算出自中心坐标，在块内平均得到方向与距离，再构造包含方向、距离、相邻块增量、逆距离、方向变化幅度与逼近量的 11 维描述子，经训练集均值方差归一化后送入两层感知机并叠加风格嵌入得到空间令牌。论文假设 2 模态早融合会互相干扰，因此保持分离令牌让 Transformer 分别注意。

**声学内容 × 身体相对声源几何：** 声学内容指声音是什么，由双耳对数梅尔特征经因果卷积提取，负责区分音乐、爆炸、鸟鸣等事件类型；身体相对声源几何指声源在当前身体坐标系下的方向与距离及变化，负责决定转向、靠近或远离的方向性。两者分开编码为 what 与 where 令牌，再由因果 Transformer 学习交互，避免早期融合成单一向量时互相干扰，组合后每次预测能同时考虑听到了什么和声源在身体哪侧。

\[\bm{\phi}_{k}=\left[\mathbf{d}_{k},\rho_{k},\Delta\mathbf{d}_{k},\Delta\rho_{k},\rho_{k}^{-1},\|\Delta\mathbf{d}_{k}\|_{2},\frac{\max(-\Delta\rho_{k},0)}{\rho_{k}}\right].\]

上式即该 11 维描述子的拼接形式，其中逼近量只在距离减小时取距离减小量除以当前距离，否则置零，用来刻画声音靠近的紧迫感。逆距离强调近处声源，方向变化幅度概括方位角变化，增量项则捕捉块间运动。

### 因果 Transformer 与流头如何算出下一段动作

记动作隐序列与声学空间令牌序列后，生成目标是给定初始隐变量与全部音频、声源、风格条件下，后续隐变量的连乘条件分布，每一步只依赖到当前块的历史与条件。实现上先把隐变量经学习线性投影为动作令牌，与声学令牌、空间令牌按块交错排成序列送入因果 Transformer，取当前块 3 个位置的输出拼接为流头的条件向量。流头按条件流匹配训练，在噪声与目标隐变量的线性插值上预测速度场，采样时从高斯噪声出发积分到目标。推理还用无分类器引导，把带当前声学空间条件与置零条件的速度预测加权组合，但只有条件分支更新持久键值缓存，从而保留过去的条件状态。

**因果 Transformer × 流头 × 因果解码器：** 因果 Transformer 负责按时间顺序融合已生成的动作历史与当前声学和空间令牌，只能看到当前及过去块；流头指以 Transformer 输出为条件的整流流匹配速度场采样器，负责从高斯噪声积分出下一个连续动作隐变量；因果解码器指冻结的时序变分自编码器解码器，负责把扩展后的隐序列解码为新的四帧动作段而不改写已生成帧。三者分工是记忆与条件融合、连续隐变量采样、波形级重建，串起来实现来一段音频就长出一段动作。

\[p_{\theta}(\mathbf{z}_{1:K-1}\mid A,\mathbf{g},c,\mathbf{z}_{0})=\prod_{k=0}^{K-2}p_{\theta}(\mathbf{z}_{k+1}\mid\mathbf{z}_{0:k},\mathbf{a}_{0:k},\mathbf{s}_{0:k},c),\]

上式是按块分解的自回归分布，明确了因果边界，即预测下一个隐变量时只能用当前及之前的历史与条件。

\[\ell_{\mathrm{FM}}(\mathbf{z},\mathbf{h})=\mathbb{E}_{\bm{\epsilon},\tau}\left[\frac{1}{d_{z}}\left\|v_{\theta}(\mathbf{u}_{\tau},\tau;\mathbf{h})-(\mathbf{z}-\bm{\epsilon})\right\|_{2}^{2}\right].\]

上式是给定目标与条件向量时的流匹配损失，对噪声与流时间求期望，训练时每个监督转移采样 4 个独立噪声时间对以降低方差，采样则用十步欧拉积分完成。

### 排练训练与空间反馈如何对准推理过程

排练训练同时保留全序列教师强制监督与短自回归自展上的监督。全序列遍得到教师强制损失，另为每序列独立采样起点做 H 步展开，起点隐变量来自同一次教师强制遍的去噪估计并截断梯度，同时在起点处重置声学上下文与 Transformer 缓存。展开中每步先在当前自展历史下算流匹配损失，再独立采样一个隐变量截断梯度后追加到历史，用于下一步，两部分损失等权平均。

默认 H 为 16，排练用无引导采样，梯度经缓存的 Transformer 状态与条件编码器回传，但不经过采样出的隐变量与采样过程。空间反馈则在每次追加后，把解码器输入前缀解出的当前块根位置与朝向转回自中心坐标，在块内平均并重算描述子，截断后编码为下一块的空间条件，训练展开与推理都执行该重算。

**教师强制 × 排练训练 × 自回归自展历史：** 教师强制指训练时用记录的真实动作历史做输入并监督全序列下一隐变量；自回归自展历史指从某一起点用模型自己采样出的隐变量递归延长历史；排练训练指把两者各占一半权重的联合目标，前者提供全序列稳定监督与长程结构，后者让模型在自身误差累积出的历史下仍能预测正确下一帧，组合后直接对准推理时的递归预测过程。

**世界系声源位置 × 身体相对声源位置 × 空间反馈：** 世界系声源位置指已知的固定声源世界坐标，不随人体运动改变；身体相对声源位置指经根节点位置与朝向变换到人体坐标系下的声源坐标，直接决定反应方向；空间反馈指每生成一段后用解码出的根位姿重新计算该相对坐标并作为下一步空间条件。组合意义是让训练与推理的空间条件都来自同一条已生成轨迹，而不是来自未来真实轨迹，从而保持历史与条件一致。

\[\mathcal{L}_{\mathrm{reh}}=\frac{1}{H}\sum_{k=s}^{s+H-1}\ell_{\mathrm{FM}}(\mathbf{z}^{\mathrm{GT}}_{k+1},\overline{\mathbf{h}}_{k}),\qquad\mathcal{L}=\tfrac{1}{2}(\mathcal{L}_{\mathrm{TF}}+\mathcal{L}_{\mathrm{reh}}).\]

上式是排练损失与总损失的组合，前项平均 H 个自展转移，后项为两者平均，目标隐变量始终是记录的真实下 1 帧。

\[\widehat{\mathbf{x}}_{\mathcal{I}_{k}}=\left.\mathcal{D}_{\psi}(\mathbf{z}_{0:k})\right|_{\mathcal{I}_{k}},\qquad\widehat{\bm{\ell}}_{t}=\widehat{\mathbf{R}}_{t}^{\top}(\mathbf{g}-\widehat{\mathbf{p}}_{t}),\quad t\in\mathcal{I}_{k}.\]

上式说明从解码前缀取出当前块并用估计根位姿重算自中心坐标的过程，是空间反馈的计算核心，解码器参数在此保持冻结。

### 在 SAM 上如何划分条件与测量指标

实验在 SAM 上进行，该数据集把双耳录音与人体反应配对，含 27 种声音场景与 3 种反应风格，自回归模型统一获得初始 4 帧真实动作与反应风格标签。空间条件分两种协议，GT 用记录动作预先算好的身体相对位置，用于与 MOSPA 等基线的既定协议公平比较，Online 从生成根位姿实时重算，更难且是真正流式可用的方式。主结果允许所有方法使用声源位置输入，可来自数据集标注、上游定位模块或虚拟场景元数据，另有附录的无声源位置变体直接从双耳音频推导空间令牌。指标沿 MOSPA 报告 FID、R-precision 与特征空间多样性，FID 越低分布保真越好，R-precision 越高条件对齐越好，多样性越接近真实越好，并报告 95% 置信区间。

**GT 空间条件 × Online 空间条件：** GT 空间条件指从记录动作的根轨迹预先算好的身体相对声源序列，包含未来真实运动信息，只能用于与 MOSPA 等离线方法的公平对照；Online 空间条件指从已生成根位姿实时重算的相对声源序列，是流式部署时真正可用的条件，但会把根误差传给下一步。两者对比能分离表示与训练的增益和在线更新带来的额外误差传播代价。

**FID × R-precision × 多样性：** FID 是生成图像与参考样本的特征分布差异指标，这里沿 MOSPA 协议比较生成动作与参考样本在特征空间的分布差异，越低表示整体保真度越好；R-precision 指给定音频条件检索出对应动作的准确率，越高表示条件对齐越好；多样性指生成样本在特征空间的分散程度，越接近真实动作越好。三者搭配才能同时看到像不像、对得上条件、以及是否坍缩到单一模式。

计时协议在附录交代，批量为 1，从预计算声学令牌起测稳态生成，Online 另含解码与空间反馈，GT 用预计算空间令牌，实时指因果流式且实时因子小于 1。首包延迟估计还需加上声学特征可用延迟，音频前端与渲染投递不在稳态计时内。

### 主结果在两种空间协议下说明了什么

下面比较要回答的问题是，在相同 GT 空间协议下流式模型能否在保真与对齐上匹配离线扩散模型，以及切换到真正可部署的 Online 协议时代价多大。公平条件是 SAM 相同划分与评价器，指标方向为 FID 越低越好，R-precision 越高越好，多样性接近真实越好。表中同时保留 EDGE 与 MOSPA 等离线基线，便于看到流式约束是否带来明显损失。

| Method | Causal | Eval. SSL | FID↓ | R@3↑ |
| --- | --- | --- | --- | --- |
| GT motion | — | — | 0.001 | 1.000 ± 0.000 |
| MOSPA | × | GT | 8.242 | 0.994 ± 0.001 |
| Sonic-AMG (Ours) | ✓ | GT | 6.505 | 0.998 ± 0.001 |
| Sonic-AMG (Ours) | ✓ | Online | 8.066 | 0.994 ± 0.001 |

该原表显示 Sonic-AMG 在 GT 协议下同时取得最优 FID 与 R-precision，支持分离表征与排练训练在可比条件下的增益。切换到 Online 后仍与 MOSPA 相当，但相对自身 GT 结果有回落，说明根误差经空间条件传播带来了可测代价。未胜出项是多样性略低于真实与 MOSPA，且 Online 多样性进一步偏离，提示保真与对齐的提升没有完全转化为分布广度的保持。

读图时先按行看声音类型与文字标注的期望反应，再横向比较各方法的姿态与位移差异，重点看紫色声源标记与人体朝向的关系。

> **看图路径：** 1. 按行对比自行车铃、人群喊叫、爆炸、音乐四种声音下的反应类型标注；2. 观察每列 EDGE、POPDG、LODGE、MOSPA 与 Sonic-AMG 的人体位姿与位移差异；3. 注意紫色圆盘标记的声源与人体朝向、遮耳、下蹲等动作的空间关系

[![原论文 Figure 3：Qualitative comparison on SAM. EDGE, POPDG, and LODGE panels are reproduced from Xu et al.](https://arxiv.org/html/2610.13300v1/qualitative_baselines.png)](https://arxiv.org/html/2610.13300v1/qualitative_baselines.png)

*论文图 3。原论文 Figure 3:：“Qualitative comparison on SAM. EDGE, POPDG, and LODGE panels are reproduced from Xu et al. (2025); purple markers indicate sound sources.”。*

图中可见 Sonic-AMG 对人群噪声做遮耳、对爆炸做远离加低姿态，而部分基线姿态变化或位移有限，说明模型把反应类型与相对声源的移动协调了起来。图中 EDGE、POPDG、LODGE 面板转引自 MOSPA 论文，MOSPA 只生成固定窗口而 Sonic-AMG 逐段延长，但这只是定性示例，不能替代上表的分布统计。

### 流式延迟与长音频覆盖的代价在哪里

这里要回答流式是否真能在有限预算内逐块产出，以及首包延迟相对离线窗口的改善是否来自输入等待而非单纯算力。测量对象是每 4 帧块的稳态计算时间与实时因子，实时因子为计算时间除以生成动作时长，每块对应 30 赫兹下 133.3 毫秒预算。MOSPA 需等齐 8 秒窗口再联合去噪，没有逐块时间，只能比较实时因子。

| GPU | 方法 | 空间条件 | 平均单步时间 | 实时因子 | 是否因果实时 |
| --- | --- | --- | --- | --- | --- |
| RTX A6000 | MOSPA | GT | — | 0.357 | 否 |
| RTX A6000 | Ours | Online | 50.2 ms | 0.376 | 是 |
| TITAN RTX | MOSPA | GT | — | 1.427 | 否 |
| TITAN RTX | Ours | Online | 118.0 ms | 0.885 | 是 |

该原表显示 Online 在两块显卡上仍满足实时吞吐，240 帧块对应 8.0 秒动作，在 RTX A6000 上耗时 2,857 毫秒、在 TITAN RTX 上耗时 11,415 毫秒，对应因子为 0.357 和 1.427。MOSPA 在强显卡上实时因子看似更低，但它要求先收集完整窗口且不支持因果流式，在较弱显卡上因子超过 1 而本文方法仍低于 1。从强卡换到弱卡时 MOSPA 块时间放大更多，本文 Online 步时间从 50.2 毫秒变为 118.0 毫秒，退化更平缓。代价是 Online 比 GT 每步更贵，平均单步时间从 41.2 毫秒增至 50.2 毫秒以及从 102.5 毫秒增至 118.0 毫秒，多出的解码与空间反馈开销必须计入预算。

首包延迟估计结合声学特征可用延迟与稳态生成得到约 193 毫秒，相对 MOSPA 大幅缩小，但该估计排除了音频预处理编码、初始化与渲染投递，仅比较输入等待加稳态生成。本表数值与单位依据论文 PDF。

先看这张流式示意中颜色如何把声源、音频段与动作段绑定，再沿人体颜色观察声源切换时的运动过渡，顶部双耳波形与半透明带的对应是理解重点。

> **看图路径：** 1. 看顶部三段音频波形颜色与下方人体颜色的对应关系；2. 沿从紫到蓝到黄的人体快照观察声源切换时的运动过渡；3. 注意半透明带如何把音频段与对应动作段连接起来

[![原论文 Figure 1：Streaming motion generation from spatial audio.](https://arxiv.org/html/2610.13300v1/teaser_image.png)](https://arxiv.org/html/2610.13300v1/teaser_image.png)

*论文图 1。原论文 Figure 1:：“Streaming motion generation from spatial audio.”。*

该图展示音乐到爆炸到鸟鸣 3 段事件下人体快照从紫到蓝到黄的连续过渡，半透明带把音频段与反应段相连，淡化姿态标出段间过渡，顶部双耳波形按颜色分段，底部网格上根轨迹连续延伸，说明单模型无需新初始化即可跨事件连贯生成，但长程连贯目前主要是定性证据。

下面单独看全时长覆盖对比，上下两行分别为 MOSPA 与 Sonic-AMG，重点比较每列子图 a 到 d 中人体位移幅度与声源标记的相对位置差异。

> **看图路径：** 1. 对照图注的采样说明与 8 秒和 10–12 秒时长信息理解上下两行长度差异；2. 在子图 a 到 c 中比较人体位移与转向幅度不硬数重叠姿态个数；3. 结合紫色声源标记看远离或转向的相对位置红点淡处以可辨认部分为准

[![原论文 Figure 4：Reactions over the full audio duration.](https://arxiv.org/html/2610.13300v1/qualitative_full_audio.png)](https://arxiv.org/html/2610.13300v1/qualitative_full_audio.png)

*论文图 4。原论文 Figure 4:：“Reactions over the full audio duration.”。*

图注称 MOSPA 只生成 8 秒而 Sonic-AMG 覆盖 10–12 秒完整音频，每序列按各自时长均匀采样 6 个姿态，红点表示根轨迹，紫色标记为声源。从当前像素能确认的是下行人体位移更大、姿态展开更连续，定性上支持姿态变化随音频展开；但在子图 a 到 c 中姿态存在重叠遮挡，不能逐格数出 6 个清晰姿态，红点在部分视角下较淡，不能把图注的采样数与完整轨迹当作每格都清晰可见，完整性结论仍受 SAM 时长与风格标签条件限制。

### 排练训练相对两遍训练与纯自展好在哪里

该消融固定生成器结构，比较不同历史构造方式，GT 组与 Online 组内分别使用相同空间协议训练与评测，因此差异可归因于历史处理而非空间协议切换。两遍训练含递增、递减与全替换 3 种时刻表，另设纯自展与带历史前缀的纯自展作为对照，排练默认用 16 步展开。

| Training strategy | Eval. SSL | FID↓ |
| --- | --- | --- |
| GT motion† | — | 0.001 |
| Two-forward (0→1) | GT | 10.797 |
| Two-forward (1→0) | GT | 8.001 |
| Two-forward (p=1) | GT | 8.033 |
| Rollout Only | GT | 14.854 |
| Rollout Only with History | GT | 8.585 |
| Rehearsal (Ours) | GT | 6.505 |
| Two-forward (0→1) | Online | 15.367 |
| Two-forward (1→0) | Online | 12.695 |
| Two-forward (p=1) | Online | 11.766 |
| Rollout Only | Online | 17.036 |
| Rollout Only with History | Online | 12.320 |
| Rehearsal (Ours) | Online | 8.714 |

该原表显示排练在两种协议下均优于全部两遍时刻表，支持递归构造暴露了教师强制替换捕捉不到的跨段误差传播。去掉教师强制的纯自展最差，补上历史前缀有所回升但仍不及排练，说明仅加上下文不能替代全序列监督。限制是该表所用 Online 排练与主表 Online 存在训练步数差异，主表 Online 用 32 步展开而此处默认 16 步，因此跨表比较需注意展开长度与检查点不同，不能直接视为矛盾或额外提升。

### 空间反馈与表征分离的贡献及无声源输入的边界

空间反馈消融固定排练训练，只切换训练与评测的空间协议，用于检验仅适应生成历史是否足够。若只在 GT 条件下训练而在 Online 下评测，保真与对齐大幅恶化，而用 Online 反馈训练后 Online 评测明显回升，说明运动历史的误差适应不能替代空间条件的同步更新，身体动了但条件仍按旧轨迹给就会失配。

表征消融在 Online 下比较融合单令牌与分离令牌，以及 MOSPA 高维音频特征与本文学习的对数梅尔特征，分离与轻量学习特征均在保真与对齐上占优，与早融合引入干扰的假设一致，但这仍是相关证据而非因果证明。无声源变体从双耳音频推导空间令牌，训练用几何描述子做辅助回归，推理不需声源位置与空间反馈，下表比较无声源变体与已发表基线的保真、对齐与多样性。

| Method | FID↓ | R@1↑ | R@2↑ | R@3↑ | Diversity→ |
| --- | --- | --- | --- | --- | --- |
| GT motion | 0.001 | 1.000 | 1.000 | 1.000 | 23.616 |
| EDGE | 13.993 | 0.886 | 0.960 | 0.977 | 23.099 |
| POPDG | 20.967 | 0.762 | 0.886 | 0.934 | 22.536 |
| LODGE | 102.289 | 0.444 | 0.594 | 0.679 | 21.101 |
| Bailando | 168.396 | 0.077 | 0.134 | 0.182 | 17.347 |
| MOSPA | 8.242 | 0.942 | 0.984 | 0.994 | 23.412 |
| Sonic-AMG (No-SSL) | 11.917 | 0.915 | 0.973 | 0.987 | 23.371 |

该原表显示无声源变体虽不及主模型但优于 EDGE，对齐与多样性接近 MOSPA，支持在无显式几何时音频衍生空间令牌仍能提供有效条件。尚未评测的是上游定位误差如何传导到动作，以及更嘈杂环境下的泛化，这些超出 SAM 标注齐全条件的结论不能直接外推到部署环境。

### 哪些结论出不了 SAM 与当前假设

主实验假设推理时已知世界系声源位置，几何可来自标注、上游定位或虚拟场景，但论文未系统评测定位噪声的影响，无声源变体只是同一接口的初步实现。评测限于 SAM，27 种声音与 3 种风格之外的声学环境与反应类型是否成立待验证。30 秒三事件连续演示跨越音乐、爆炸、鸟鸣且声源在边界切换，生成从已生成历史在根对齐帧继续且旧帧固定，视觉上连贯，但长程连贯与事件过渡的证据主要是定性视频与快照，缺少长音频流上的定量基准。

此外物理仿真把生成动作重定向到 Unitree G1 并用预训练控制器在 MuJoCo 中跟踪，属离线跟踪演示，不代表策略已学会听声反应。把相关性当因果、把自动指标当人工评价、把吞吐量当全链路延迟都会夸大结论，阅读时应把分布指标、定性视频与部署延迟分开看。

### 复现第一步要准备什么与注意什么

复现先准备 SAM 划分、48 千赫兹双耳音频的 80 维对数梅尔提取与 11 维空间描述子的训练集归一化，以及冻结的因果时序变分自编码器，动作 30 赫兹、隐维度 16、步长 4。生成器为 12 层 12 头宽 768 的 Transformer 加 9 块残差多层感知机流头，用 AdamW 批量 64、学习率 1e-5 训练，流时间经逻辑正态采样，训练按 0.1 概率联合丢弃当前声学空间条件但保留风格嵌入，推理用 10 步欧拉积分与引导组合。

排练起点在有效隐序列中均匀采样，H 默认 16，主结果 Online 用 32，声学卷积上下文与键值缓存在起点重置而解码器保留真实前缀，采样隐变量与解码几何截断梯度。计时需同步显卡、丢弃前 20 步预热、保留 4096 令牌上下文，从预计算声学令牌起测并区分 GT 与 Online 包含的操作。代码与模型按论文说法将在接收后发布，项目页当前可访问只证明论文提到该链接，不证明作者已开源，引用前应以实际可达与许可为准。

### 什么时候值得尝试与还缺哪项验证

当任务需要边听边动、声源相对身体持续变化、且能获得声源世界位置或可靠定位时，该方法值得尝试，因为它把内容与方位分离、把历史与空间条件的训练分布与推理对齐，并能在有限延迟预算内逐块生成。若只能拿到双耳音频而无几何，可先试无声源变体，但要接受保真回落与定位不确定性。复现第一步是跑通冻结自编码器加 GT 空间协议的教师强制基线，再加入短自展与空间反馈，确认 Online 差距是否复现。还缺的验证包括定位误差注入下的鲁棒性、SAM 之外的泛化、长事件序列的定量基准，以及全链路含音频前端与渲染的延迟测量，补上这些才能判断部署收益。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.13300v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
