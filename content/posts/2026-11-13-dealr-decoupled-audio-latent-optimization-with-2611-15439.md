---
title: "DeALR: Decoupled Audio-Latent Optimization with Acoustic Backtracking for Test-Time Reasoning"
date: 2026-11-13
draft: false
tags: [音频推理, 音频问答, 强化学习, 音频大模型]
categories: [论文速递]
description: "DeALR 在冻结音频语言模型的测试阶段，用注意力定位连续声学片段并让思维向量与音频 patch 共同搜索，最后把原始音频嵌入复原后再解码；MMAR/MMAU 等表显示平均准确率高于所比较的若干测试时方法，但部分子项并非最高，且 MMAU 上单次查询延迟为 3.45 s，高于直接推理的 1.05 s。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.15439"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "DeALR：冻结音频语言模型中的声学回溯式测试时推理"
paper_digest_original_title: "DeALR: Decoupled Audio-Latent Optimization with Acoustic Backtracking for Test-Time Reasoning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.15439v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.15439v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.15439v1.pdf"
paper_digest_primary_task: "音频推理"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-reasoning","label":"音频推理"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "DeALR 在冻结音频语言模型的测试阶段，用注意力定位连续声学片段并让思维向量与音频 patch 共同搜索，最后把原始音频嵌入复原后再解码；MMAR/MMAU 等表显示平均准确率高于所比较的若干测试时方法，但部分子项并非最高，且 MMAU 上单次查询延迟为 3.45 s，高于直接推理的 1.05 s。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haoyu He"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yan Rong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Li Liu"}]
paper_digest_abstract_sha256: "5c13a19a139835e6f8e47f62af7288238cb8fe1a0a0eea41f62ae7e4eb55c12c"
paper_digest_sidecars: {"citation.bib":{"sha256":"ee986f5d955917a9c5f280edfe2831681e3a6ceb5c114cd7d2c31c80b241933c","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15439/citation.bib"},"citation.json":{"sha256":"616b2b92e92e68c02d3ea740e1e4fd677052e430bca3774a0c2413eceeaf4eea","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15439/citation.json"},"citation.ris":{"sha256":"248c11b76737442c8416ecdf11fa77aabe6e52ee0b69652105d3f45979503905","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15439/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"c9194bd191a7ec8dd0eaa67c2aaa4ed8880f0d7335790a12f35b211617ea06ca","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15439/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "6fe3e241e4908530e64184d82f3097b493c57e1dab0f28fa985f9a958a1a8542"
paper_digest_api_reader_plan_sha256: "1db9d314b6dc0f60e4684e52690795749a80dbd70d48de8a14e9f6d39d62bd04"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "071e4b9a7cba3c581408166705f68a1c47e336e60f8ccaf4bf903146fcb0bab3"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "d2ed27eaabddb27d87881831f1a8110ebd0e5c6b1056fa8410c7365c6a63cadd"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a213c6ac5b3f91e41db8f283d52eba3f04f0edccd44c2a7453aa45d701d92d57"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "64d1a1f347407e926ccd3de36ff4469ab792b2b1f9435e67b53caa3c2d26a493"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 DeALR：冻结音频语言模型中的声学回溯式测试时推理

> 英文题目：*[DeALR: Decoupled Audio-Latent Optimization with Acoustic Backtracking for Test-Time Reasoning](https://arxiv.org/abs/2611.15439v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频推理](/audio-paper-digest-blog/papers/?concept=task.audio-reasoning)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频问答](/audio-paper-digest-blog/papers/?concept=task.audio-question-answering)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **模型家族**：[音频大模型](/audio-paper-digest-blog/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.2/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Haoyu He：机构信息未能在本次解析中与作者逐人可靠绑定
- Yan Rong：机构信息未能在本次解析中与作者逐人可靠绑定
- Li Liu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

论文研究冻结大型音频语言模型在测试时的潜在推理：输入文本查询与连续音频嵌入并输出答案，难点是音频通常只编码一次，后续多步推理偏向语言空间，细粒度声学证据易被弱化。DeALR先让若干初始思考向量对音频位置形成注意力，聚合后做滑动平均，再用一维时间非极大值抑制选出连续音频片段，接在对应思考向量之后插入推理序列。随后，DALO在冻结主干LLM参数下，用高斯扰动和奖励加权策略梯度同时搜索思考向量与片段嵌入，以思考token位置的预测分布构造奖励并记录最高奖励状态。最终解码前，方法丢弃搜索更新过的片段嵌入，按最佳锚点从原始音频序列取回未损坏片段，再让语言解码器自回归生成答案，以缓解声学表示漂移。与只优化文本思考向量的LTPO或动态潜在块注入的DMLR相比，DeALR把“关注哪些声学片段”和“形成什么潜在想法”放进同一测试时搜索，但不更新主干参数。实验覆盖Qwen2.5-Omni-7B与Qwen2-Audio-Instruct的MMAR、MMAU、AudioMCQ等基准；在Qwen2.5-Omni-7B的MMAU上，DeALR的Accuracy为73.1%，高于LTPO的71.5%和Vanilla的70.2%，但同一模型CompA-R的Accuracy为91.1%，低于DMLR的95.7%，并非所有数据集列最优。方法每个样本做15步REINFORCE优化，在8块RTX 3090（24GB）上实验，MMAU单查询延迟为3.45 s，高于Vanilla的1.05 s和LTPO的3.07 s，但低于CCoT的10.10 s。该方法只在上述两种音频骨干和这些基准上验证，依赖初始注意力定位关键片段及特殊token初始化思考向量，其他骨干、真实部署和所有音频场景尚未验证；作者称可改善置信度校准，但原文未给出校准指标。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 从一段音频到一个答案：任务约束

这项任务给模型一段音频 A 和一个文本查询 Q，要求输出答案文本 Y。和语音转写不同，音频语言模型（Large Audio-Language Model, LALM）要同时处理声学场景、说话方式、背景事件和查询中的推理要求。标准做法是先把 A 编码成时间序列嵌入 Z，再由语言模型在 Z 与 Q 的条件下自回归生成答案，即 πθ(Y∣Z,Q)。关键困难在于，音频通常只在前面编码 1 次，后续多步推理几乎都在以文本为主的空间里进行；当语言先验很强时，模型可能依赖常识或题面措辞，而不是重新查看某段音频。

因此本文要保留两类信息：一是原始声学信号中的细粒度时间结构，二是冻结基座模型的生成能力。方法不重新训练大模型，也不改答案格式，而是在测试时为单个样本构造少量可更新的思维 token 和音频 patch 嵌入，再把选中的原始音频跨度放回推理序列。读者先记住这个输入—中间结果—输出的链条，后面每一步都在回答如何定位证据、如何搜索、如何防止搜索把音频表示带偏。

### 已有路线：文本推理、潜在推理与测试时优化

论文把相关路线放在 3 个层次。最直接的是文本链式推理（Chain-of-Thought, CoT）：把中间步骤写成显式文字，优点是过程可读，缺点是每个中间 token 都要自回归解码，计算和延迟随推理长度增长。视觉多模态里还有动态放大、编辑或生成中间线索的“边看边想” 路线，但这些操作面向离散图像区域，不能直接照搬到连续、按时间展开的音频信号。

另一条路线是潜在空间推理：把中间想法压缩成连续隐藏向量，减少显式文本生成的开销。Coconut、SoftCoT 一类方法通常需要离线训练或轻量投影模块，ICoT 则用免训练的选择方式；它们大多仍把多模态输入视为静态条件。本文关注的是冻结 LALM 的测试时场景，因此不能把这些方法的训练条件与 DeALR 直接当作同预算比较。

第三条路线是测试时优化。LTPO 把潜在思维向量当作每个样本的动态参数，用置信度式奖励在测试时搜索；DMLR 面向视觉输入，动态插入任务相关图像块并做置信度引导的潜在策略优化。DeALR 的差别在于同时搜索思维向量和声学 patch，选的是带时间连续性的音频跨度，并在最终解码前把音频 patch 换回原始声学嵌入。这个差别是本文要验证的核心，而不是仅凭类别名称就能推出的胜负。

### 为什么声学证据会淡出：AAR 与诊断

为了把模型是否看音频变成可测量的诊断，论文提出音频注意力比例（Audio Attention Ratio, AAR）。设模型有 L 层、H 个注意力头，先对每个头的注意力权重取平均得到某层从查询位置 q 到 key 位置 k 的注意力；再把 q 对所有层、所有音频 key 的权重求和，除以对所有 key 的权重和。分母包含文本 key、音频 key 以及序列中的其他 key，因此 AAR(q) 描述的是该查询位置的注意力质量有多少落在音频 token 上。这个量是诊断指标，不是准确率：AAR 高只说明更多注意力分配给音频，不直接证明答案正确。

\[\text{AAR}(q)=\frac{\sum_{l=1}^{L}\sum_{k\in\mathcal{K}_{\text{audio}}}\mathbf{A}^{(l)}_{q,k}}{\sum_{l=1}^{L}\sum_{k\in\mathcal{K}_{\text{all}}}\mathbf{A}^{(l)}_{q,k}},\]

公式中的 𝒦_audio 是音频 key 下标集合，𝒦_all 是全部 key 下标集合；求和范围按原文跨层聚合。论文用图 2 比较 Vanilla、LTPO、CCoT 与 DeALR，观察到常规模型和朴素潜在基线在多数查询位置保持较低的 AAR，而 DeALR 把这一比例显著抬高。这里的因果关系要谨慎：AAR 是作者设计的注意力统计，受层数、头数、序列长度和任务提示影响，不能只看一条曲线就断言准确率必然提高。

**音频注意力比例（AAR） × 声学证据衰减：** 音频注意力比例（AAR）把查询位置分配到音频 key 的注意力质量除以分配到全部 key 的注意力质量，用来诊断模型是否还在看声音；声学证据衰减指后续语言主导推理时，细粒度音频线索逐渐被文本先验淹没。两者一个提供可测的注意力读数，一个描述需要解释的失效模式：AAR 低并不自动等于答案错，但它把‘声学证据被边缘化’变成可与不同推理范式比较的对象，进而为声学回溯的必要性提供动机。

图 2 展示的是生成进度中的 AAR 变化，读图时先确认纵轴为音频注意力比例，而不是准确率。

> **看图路径：** 1. 确认横轴是生成进度，纵轴是音频注意力比例；2. 比较红、蓝、绿、紫四条曲线在多数进度位置的高低；3. 观察阴影带宽度，不要把边界当成单点读数

[![原论文 Figure 2：AAR comparison among Vanilla LALM, LTPO, CCoT, and Ours.](https://arxiv.org/html/2611.15439v1/fig_aar_lineplot.svg)](https://arxiv.org/html/2611.15439v1/fig_aar_lineplot.svg)

*论文图 2。原论文 Figure 2:：“AAR comparison among Vanilla LALM, LTPO, CCoT, and Ours.”。*

图中红线的 Ours 在大部分生成进度上高于 Vanilla、LTPO 与 CCoT，紫色 CCoT 最低，蓝绿两条曲线彼此接近，阴影带给出了波动范围。这个可见结果支持 DeALR 让解码阶段保留更多音频注意力这一解释，但它仍是注意力分配的证据；要判断是否真的改善答案，需要结合后面的准确率表、消融和具体任务条件。

### DeALR 的一次样本流程

DeALR 的 1 次样本流程可以按 6 步复述。第一步，文本查询 Q 与音频 A 进入冻结的 LALM，音频被编码为 Z=(z1,...,zT)，这仍是原始音频嵌入。第二步，在查询前部或合适位置加入 K 个初始潜在思维 token τ1 到 τK；这些 token 由专用特殊 token 初始化，做 1 次前向，取出思维 token 对音频各位置的注意力。第三步，把注意力聚合成声学显著性，平滑后用 1 维时间非极大值抑制选出彼此分开的锚点，再把锚点向两侧扩展成连续声学片段。

第四步，把每个思维 token 与对应声学片段交错排列，形成带有原始音频证据的输入序列；同时把选中的片段参数化为可搜索的音频 patch 嵌入 P。第五步，在测试时对 τ 与 P 加噪、前向、计算置信度奖励并更新，重复 M 步，记录奖励最高的状态及锚点。第 6 步，保留最优思维 token 和锚点位置，丢弃搜索中扰动过的音频 patch，把原始 Z 在最优锚点处的片段放回序列，交给冻结的语言模型自回归解码。这里没有训练基座模型；搜索只改变外部向量和锚点选择，最终答案仍由同一个 πθ 生成。

图 4 把上述流程拆成左侧的声学回溯和右侧的 DALO 搜索；先看数据流从哪里进入、在哪里被替换，再判断哪些模块是冻结的。

> **看图路径：** 1. 先看左栏从查询、音频嵌入与思维嵌入到 Span Localization 的路径；2. 再看右侧 DALO 如何把 Logits 转成 Confidence Reward 并沿虚线更新；3. 最后看 Audio Reinstatement 怎样把优化后的序列换回原始音频跨度后送入冻结的 Transformer 与 LM Head

[![原论文 Figure 4：Overall architecture of DeALR.](https://arxiv.org/html/2611.15439v1/fig_framework.png)](https://arxiv.org/html/2611.15439v1/fig_framework.png)

*论文图 4。原论文 Figure 4:：“Overall architecture of DeALR. The framework consists of two main components: (1) Span-Level Acoustic Backtracking, which selects salient acoustic spans and interleaves them with…”。*

图中左栏从包含文本查询嵌入 Q、音频上下文嵌入 Z 和思维嵌入 T 的序列出发，经 Span Localization 选出若干音频块；右栏的 DALO 把 Logits 转成 Confidence Reward，经 REINFORCE Update 用虚线回环更新思维与音频向量，随后 Audio Reinstatement 把原始音频跨度放回序列。最后的 Transformer Layers 与 LM Head 旁有雪花标记，与正文所说参数冻结一致；蓝色实线表示连续空间计算，紫色虚线表示强化学习迭代。图能帮助定位搜索阶段和最终解码阶段的边界，但不显示具体数值或超参数。

### 声学回溯怎样从注意力找到连续片段

声学回溯（Span-Level Acoustic Backtracking）的作用不是从音频里重新训练一个定位器，而是复用冻结模型第 1 次前向产生的注意力。设 K 个思维 token 对 T 个音频 token 的注意力矩阵为 A∈R^{K×T}，A_i,j 表示第 i 个思维 token 对第 j 个音频位置的权重。论文先对 K 个思维 token 求平均，得到每个音频位置的声学显著性 s_j。这样做的原因是单个思维 token 的注意力可能尖而噪，聚合后更能反映这组推理整体在关注哪段声音。

\[\mathbf{s}_{j}=\frac{1}{K}\sum_{i=1}^{K}\mathbf{A}_{i,j},\quad\forall j\in\{1,\ldots,T\}.\]

得到 s_j 后，论文用 1 维滑窗平均做平滑，核宽记作 w_s，以减轻逐点注意力的抖动；再对平滑后的序列做 1 维时间非极大值抑制（NMS）。NMS 先按分数从高到低排序，选最高点作为锚点，再抑制半径 r 内的其他候选，重复到选出 K 个彼此分开的锚点。最后把每个锚点 p_k 向两侧扩展成宽度 w 的连续片段 C_k。实现中 r=30 帧、w=3，并说 8 个思维 token 对应 8 个块、共 24 个 patch 向量；方法公式的 K 与实现写的 N=8 记号不完全统一，按实现数字理解是 8 个思维位置、8 个跨度、每跨度 3 个音频向量。

**声学回溯 × 声学片段：** 声学回溯先用冻结模型的思维 token 对音频 token 的注意力找出显著位置，再把位置扩展成连续声学片段并重新插入推理流；声学片段是实际被取回的局部音频嵌入。二者分工是：回溯负责决定回到哪里，片段负责提供回去后看到什么。只做注意力定位而不把连续片段插入，模型仍可能停留在语言空间；只插入整段音频而不做时间定位，又会把无关背景噪声带入序列。组合后，思维 token 与连续证据交替出现，形成可核对的局部声学证据。

这里要区分回溯与复制整段音频：回溯只把注意力指向的连续片段重新插回推理流，目的既保留局部声学连续性，又避免把全长音频重复塞入语言解码。片段宽度和抑制半径都是外部超参数，论文的消融主要比较不同定位策略的 MMAU 准确率，尚未给出所有宽度的完整敏感性曲线。

### 思维 token 与声学片段怎样交错输入

找到片段后，DeALR 不把所有片段拼成一个独立音频分支，而是让它们与思维 token 交替出现。按论文的记法，输入序列是查询前缀、τ1、C1、τ2、C2，一直到 τK、CK，再接查询后缀；每个 τk 后面紧跟由原始或可搜索音频嵌入组成的 Ck。这样，模型在生成下一个潜在状态时，前一个思维 token 的结果会与对应声学片段同时出现在上下文中，形成先提出一个中间想法、再回到该想法指向的声音片段核对的交替模式。

被选中的片段集合记作 P，形状是 K·w 个 d 维向量。测试搜索时 P 可以暂时被扰动，以探索不同声学对齐；但 P 不是最终输入。查询前缀与后缀仍保留，用于避免把原问题结构打散。这个交错设计把声学证据从静态条件变成推理序列中的可访问位置，也解释了为什么仅优化文本思维 token 的 LTPO 不直接等价于 DeALR：后者的搜索对象包含音频 patch，最终还会换回原始声学嵌入。

### 为什么解码前要复原音频嵌入

搜索阶段更新 P 的理由是让声学 patch 与思维 token 共同移动，逃出只调文本向量的局部最优；但直接把扰动后的 P* 送进语言解码器，会让最终答案看到已经偏离原始音频分布的特征。DALO 因此把搜索导航与最终生成拆开：搜索结束后只保留最优思维 token 和最优锚点位置，音频 patch 的扰动值全部丢弃，再从原始音频序列 Z 中取回这些锚点处的未损坏嵌入。

最终序列仍按交错形式排列，但每个位置放的是原始音频嵌入 Z_Ck*，不是优化后的 P*；思维 token 使用 T*。这样，锚点选择和时间位置来自搜索，声学内容来自原始编码，避免把搜索造成的音频表示漂移带入自回归解码。要注意，被复原的是音频 patch；思维 token 仍是搜索后的 T*，所以解耦并不等于所有中间表示都回到初始状态。

\[\mathcal{X}_{\text{final}}=\big[\mathcal{Q}_{\text{prefix}},\;\tau_{1}^{*},\mathcal{Z}_{\mathcal{C}_{1}^{*}},\;\tau_{2}^{*},\mathcal{Z}_{\mathcal{C}_{2}^{*}},\;\ldots,\;\tau_{K}^{*},\mathcal{Z}_{\mathcal{C}_{K}^{*}},\;\mathcal{Q}_{\text{suffix}}\big].\]

式中 X_final 是最终输入，Z_Ck* 表示从原始音频嵌入取出的第 k 个最优片段；随后按标准自回归解码最大化答案序列概率。作者在摘要中说这一步消除了优化引起的分布漂移，按机制应理解为消除音频 patch 被搜索带偏后对解码的影响，而不是保证整个潜在推理轨迹没有漂移。

**音频嵌入复原 × 分布漂移：** 音频嵌入复原在搜索结束后丢弃被扰动和更新的音频 patch，用原始音频序列中对应最优锚点的未损坏嵌入替换；分布漂移指这些 patch 在策略梯度搜索中偏离真实音频表示，若直接送入语言解码器会改变声学语义。二者一个负责诊断风险，一个负责切断风险进入最终生成：搜索仍可利用可移动的 patch 选择好锚点，最终解码却只看到原始音频分布。复原并不回滚思维 token，因此它解耦的是音频 patch 的搜索与最终解码，而非整个潜在推理过程。

### 测试时搜索：冻结模型只更新外部向量

这一节的训练指每个测试样本上的搜索，不是训练大模型。所有原始 LALM 参数保持冻结；可更新的是 32 个外部向量，其中 8 个潜在思维 token 和 24 个音频 patch 向量。搜索从初始 τ(0) 和由初始锚点片段构造的 P(0) 开始，跑 M=15 步；每步加各向同性高斯噪声，噪声标准差按 σ_m=σ0·γ^m 衰减，原文给出 σ0=20、γ=0.95，学习率 η=0.005。这个采样式更新让每步探索附近轨迹，而不是用标注答案做监督。

置信度信号来自冻结模型对思维 token 的预测分布。对第 i 个思维 token，原文在给定已生成前缀的条件下取 Top-k 个预测 token，计算它们的平均负对数概率；再对所有 K 个思维 token 取均值，得到该步的标量奖励。公式写作下式。需要特别指出，按常见概率解释，负对数概率越小代表概率越高，而论文把它称为置信度奖励并用较大的奖励选轨迹；给出的片段没有解释这个符号方向如何翻转，因此复现时应核对实现中的奖励定义，不能仅凭名称认定数值越大就是概率越高。

\[C(\tau_{i})=-\frac{1}{k}\sum_{v\in\text{Top}_{k}(P_{i})}\log P_{i}(v),\]

公式中的 Pi 是在输入序列与已生成思维 token 前缀下，模型对下一个 token 的分布；Top-k 的 k 具体取值在给出的实现细节中没有单列。奖励 R(m) 是 K 个 C(τi) 的平均，搜索每一步同时用这份奖励更新思维 token 和音频 patch，更新式采用高斯探索下的 REINFORCE 形式；下面只展示思维 token 的更新，音频 patch 有并列的更新式。

\[\mathcal{T}^{(m+1)}=\mathcal{T}^{(m)}+\eta\cdot\mathcal{R}^{(m)}\cdot\frac{\epsilon_{\mathcal{T}}^{(m)}}{\sigma_{m}^{2}},\]

式中的 ε_T 是当前步采样的噪声，σ_m^2 是噪声方差，η 是测试时学习率；更新方向乘了奖励和噪声，因而属于基于扰动分数的搜索，而不是通过冻结 LLM 回传梯度来训练其权重。程序同时记录使奖励最大的状态，得到最优思维 token T*、对应的音频 patch 状态和锚点位置。

**潜在思维向量 × 声学 patch 嵌入：** 潜在思维向量是插在语言模型上下文中的连续隐藏状态，承担中间推理；声学 patch 嵌入是从选定音频跨度取出的可搜索声学表示，承担局部证据。测试时两者一起被扰动和更新：思维向量改变推理路径，声学 patch 改变模型当前看到的声学对齐，因而有机会共同逃出只调一方的局部最优。组合的意义不是把音频永久改写成新信号，而是让搜索阶段探索音频—思维配对；最终解码仍要把音频 patch 换回原始嵌入。

**置信度奖励 × 策略梯度更新：** 置信度奖励把模型对思维 token 后续 token 的预测分布压缩成一个标量，作为没有答案标签时的搜索信号；策略梯度更新则利用高斯扰动下奖励对噪声的加权，把外部思维向量和音频 patch 往奖励更高的方向移动。二者配合使每个测试样本可以独立搜索，不需要更新冻结 LLM。需要注意的是，原文把平均负对数概率称为置信度奖励，公式符号与通常‘概率越高奖励越大’的直觉存在待核对的张力；因此这一组合提供的是实现中的搜索启发式，不是已经校准好的概率保证。

搜索为什么可以用置信度作启发式？图 3 给出了作者在 Qwen2.5-Omni 轨迹上做的分箱观察，适合用来说明动机，但不宜直接当作因果证明。

> **看图路径：** 1. 从左到右读 Q1 到 Q5 的分箱顺序；2. 比较各柱高度，注意 Q5 高于 Q1；3. 把柱高理解为该置信度分箱的平均推理准确率，不作因果推断

[![原论文 Figure 3：Correlation between reasoning accuracy and model confidence.](https://arxiv.org/html/2611.15439v1/fig2_confidence_search.svg)](https://arxiv.org/html/2611.15439v1/fig2_confidence_search.svg)

*论文图 3。原论文 Figure 3:：“Correlation between reasoning accuracy and model confidence.”。*

图中 Q1 到 Q5 的柱顶分别标为 37.0%、52.0%、54.0%、56.0%、68.0%，横轴是置信度分箱，纵轴是该分箱的平均推理准确率；从 Q1 到 Q5 柱高总体上升。它支持较高置信度分箱与较高准确率相关的经验观察，因而作者用置信度做搜索奖励有动机；但图没有显示样本量、误差条或校准误差，而且相关不等于提高置信度就会提高准确率。

### 实验设置与比较条件

实验使用 3 个音频理解与推理基准：MMAR、MMAU、AudioMCQ；跨数据集主表还列出 AudioCaps、Clotho、CompA-R、LP-MTT、MusicCaps、Speech、Tacos 等子列。下面的配置表只比较两个骨干在本文中的角色和参数是否冻结，比较问题不是模型规模或数据来源谁更接近，而是后续结果是否都在冻结基座这一共同条件下获得。

| 骨干模型 | 原文中的使用条件 |
| --- | --- |
| Qwen2.5-Omni-7B | 作为基座模型之一；原始 LLM 参数保持冻结 |
| Qwen2-Audio-Instruct | 作为基座模型之一；原始 LLM 参数保持冻结 |

两张骨干都保持原始 LLM 参数冻结，测试时只搜索外部思维向量和音频 patch；这不说明 2 个模型参数规模或训练数据等价。Qwen2-Audio 下 DMLR 因缺少初始化潜在思维 token 所需的特殊 token 未运行，表内空缺是条件不一致，不能当作同一设置下的失败结果。

比较对象包括：零样本直接生成 Vanilla；显式文本推理 CCoT；把文本推理与静态多模态特征交错的 ICoT；只优化文本思维向量的测试时潜在优化 LTPO；用置信度引导并动态插入视觉特征的 DMLR。

MMAU 上还比较准确率与单次查询延迟；准确率越高越好，延迟越低越好。

实现上，8 个思维 token 加 24 个 patch 向量共 32 个可学习向量；NMS 抑制半径 30 帧、片段宽度 3；搜索 15 步，初始噪声 20，衰减 0.95，学习率 0.005。实验硬件写的是 8 张 NVIDIA GeForce RTX 3090（24 GB）。这些数字支撑复现，但表中只给单次延迟，没有给出显存、吞吐或多随机种子的方差，因此成本结论要限定在报告的 MMAU 测量上。

### 主结果：MMAU 准确率与单次查询代价

先回答在 MMAU 上相对其他已实现的测试时推理方法是否更强、代价多大。下面的比较把直接生成、文本链式推理、交错推理、潜在优化和动态视觉插入放在同一基准上；准确率越高越好，延迟越低越好，数值保留原表的百分号和秒单位。

| Method | Acc (%) ↑ | Δ Acc | Latency (s) ↓ |
| --- | --- | --- | --- |
| Vanilla Baseline | 70.2 | – | 1.05 |
| CCoT | 72.7 | +2.5 | 10.10 |
| ICoT | 38.0 | -32.2 | 4.43 |
| LTPO | 71.5 | +1.3 | 3.07 |
| DMLR | 67.3 | -2.9 | 3.77 |
| DeALR (Ours) | 73.1 | 2.9 | 3.45 |

这张表显示 DeALR 的准确率为 73.1%，高于 Vanilla 的 70.2%、CCoT 的 72.7%、LTPO 的 71.5%、DMLR 的 67.3% 和 ICoT 的 38.0%；延迟为 3.45 s，比 Vanilla 的 1.05 s 和 LTPO 的 3.07 s 慢，比 CCoT 的 10.10 s、ICoT 的 4.43 s、DMLR 的 3.77 s 快。表内 DeALR 的 Δ Acc 写作 2.9；这支持该表设置下准确率更高且不是零成本方案，不能推出所有数据集、所有硬件都保持相同延迟。

跨数据集主表还报告：Qwen2.5-Omni-7B 上，Vanilla 与 DeALR 的 MMAR 为 57.7% 与 60.3%，MMAU 为 70.2% 与 73.1%，AudioCaps 为 83.4% 与 88.4%，平均为 78.1% 与 80.5%；同一张表中 DeALR 的 LP-MTT 为 91.1%，低于 Vanilla 的 94.3%，MusicCaps 为 78.2%，低于 DMLR 的 81.4%，CompA-R 为 76.2%，低于 DMLR 的 95.7%。Qwen2-Audio-Instruct 上，DeALR 的 MMAR、MMAU、AudioCaps、Clotho、CompA-R、LP-MTT、MusicCaps、Speech、Tacos 分别为 38.1%、60.7%、89.0%、79.9%、80.1%、95.3%、85.9%、80.4%、36.9%，平均 80.6%，对应 Vanilla 平均 77.7%。这些数字支持总体平均提升，也暴露子任务不一致；原文没有报告显著性检验或多随机种子方差，不能把每个子项都当成稳定胜负。

文本链式推理与交错推理为什么不能直接替代声学回溯，可以从同一 MMAU 表的准确率与差值列单独看。下面的子表只保留直接生成、CCoT、ICoT 和 DeALR，比较问题是显式写出中间文本是否稳定带来收益；Δ Acc 的方向按原表，正值表示相对基线的准确率差，但各方法仍共用该表的评测条件。

| Method | Acc (%) ↑ | Δ Acc |
| --- | --- | --- |
| Vanilla Baseline | 70.2 | – |
| CCoT | 72.7 | +2.5 |
| ICoT | 38.0 | -32.2 |
| DeALR (Ours) | 73.1 | 2.9 |

子表中 DeALR 为 73.1%，CCoT 为 72.7%，Vanilla 为 70.2%，ICoT 为 38.0%；DeALR、CCoT、ICoT 的 Δ Acc 分别为 2.9、+2.5 和 -32.2，Vanilla 的差值栏为“–”。CCoT 的准确率高于直接生成，但原文的完整表显示其延迟为 10.10 s，说明显式文本步骤并非免费；ICoT 的大幅下降则与作者所说把音频嵌入直接插入自回归流可能破坏顺序生成有关。这个对照支持‘不更新基座参数’时选择何种中间表示需要实验验证，但单凭差值不能证明某一表示在所有音频任务上都更可靠。

最后把潜在优化和动态插入类方法放在同一延迟口径下。下面的子表选取 Vanilla、LTPO、DMLR 与 DeALR，比较问题是测试时优化带来的准确率变化是否值得额外秒数；空出的方法不是删去结果，而是回到上面完整表的行。

| Method | Acc (%) ↑ | Latency (s) ↓ |
| --- | --- | --- |
| Vanilla Baseline | 70.2 | 1.05 |
| LTPO | 71.5 | 3.07 |
| DMLR | 67.3 | 3.77 |
| DeALR (Ours) | 73.1 | 3.45 |

子表中 DeALR 的 73.1% 高于 LTPO 的 71.5%、Vanilla 的 70.2% 和 DMLR 的 67.3%；延迟分别为 3.45 s、3.07 s、1.05 s 和 3.77 s，因此 DeALR 比 LTPO 慢、比 DMLR 快。这个结果说明在同一张 MMAU 表内，DeALR 的准确率收益伴随额外搜索时间；原文没有给出显存、吞吐、多随机种子或不同硬件上的延迟，所以不能把 3.45 s 当作跨设备常数，也不能说它一定比所有潜在优化方法更便宜。

### 组件消融：哪个模块最关键

论文的组件消融在 MMAU 上报告：完整框架为 73.1%；去掉 Audio Embedding Reinstatement 后降到 68.4%，差值 -4.7，是报告中的最大降幅；去掉 Test-Time Latent Search（M=0）为 70.2%，差值 -2.9；去掉 Acoustic Span Localization 为 71.5%，差值 -1.6；去掉 Span-Thought Interleaving 为 71.7%，差值 -1.4。

去掉 Joint Optimization 为 71.9%，差值 -1.2。这个排序支持作者把音频复原视为关键步骤，也说明只保留静态前向不够；但消融未给误差条，且各变体的训练或搜索步数与初始化是否完全一致只按表注无法完全核对，因此不能把差值当成严格的加性贡献。

需要区分“去掉音频复原” 和“去掉整个音频分支”。前者仍允许搜索阶段移动音频 patch，只是最终解码前换回原始嵌入；后者会直接改变模型能看到的声学证据。表中的最大降幅出现在前者，说明搜索产生的音频表示漂移足以损害最终答案，但这不意味着声学回溯本身不重要；在没有复原的对照组里，锚点选择、思维 token 和搜索仍然存在，只是最终解码暴露在漂移特征下。

### 声学片段定位策略的比较

声学片段定位策略的消融只报告 MMAU 准确率：使用全长音频上下文为 70.7%，均匀声学片段为 68.3%，随机声学片段为 71.6%，逐点 Top-K 选择（w=1）为 71.5%，带时间非极大值抑制的 1D Temporal NMS Spans 为 73.1%。这些条目共用同一任务和骨干设置，差别集中在片段如何被选出；因此它们比较的是定位规则，而不是模型是否更新。

1D Temporal NMS 高于随机片段和逐点 Top-K，与作者关于连续片段比孤立帧更能保留局部声学连续性的解释一致。随机片段高于全长上下文、而均匀采样最低，说明“看到全部音频” 不等于“选到有效证据”，片段的时间位置与连续性会影响结果。限制在于这组数字只覆盖 MMAU，且除 Pointwise 的 w=1 外没有逐项列出所有跨度设置；1D Temporal NMS 使用扩展跨度 w=3 的说法来自正文说明，不能据此把这张单数据集表外推为任意音频任务都应采用 NMS。

### 联合优化目标与奖励读数

DALO 的配置比较在 MMAU 上考察更新哪些对象：不优化（M=0）为 70.2%，只更新音频 patch 嵌入为 71.4%，最终奖励 4.731；只更新思维 token 为 70.5%，最终奖励 4.740；二者联合更新为 73.1%，最终奖励 5.239。这里的准确率越高越好，最终奖励列在原表中标为 R*↑；不优化配置的奖励记为“–”。这组比较对应作者报告的测试时搜索设置，不能把最终奖励直接等同于准确率。

联合更新同时取得最高准确率和最高最终奖励；只更新 patch 嵌入或只更新思维 token 的准确率相较不优化都有提升，但两者的准确率排序与奖励排序并不完全一致。因此复现时应分别报告准确率与最终奖励，不能把最终奖励单独解释为校准良好的置信度或准确率替代指标。表中的最终奖励没有附带方差，比较仍限于作者当前实现与 MMAU 设置。

### 潜在表示漂移的可视证据

图 6 把搜索前后的 patch 表示与原始音频嵌入的余弦距离逐 span 索引画出来，用来回答一个机制问题：DALO 更新的音频 patch 是否真的偏离原始音频流形，以及最终复原是否在纠正这种偏离。

> **看图路径：** 1. 先看横轴 span index 与纵轴 cosine distance；2. 比较同一索引下红、橙、绿三根柱的高度；3. 确认绿色柱多数高于橙色柱，据此理解复原步骤针对的表示漂移

[![原论文 Figure 6：Latent Behavior Analysis across span indices.](https://arxiv.org/html/2611.15439v1/fig/fig_distribution_drift.png)](https://arxiv.org/html/2611.15439v1/fig/fig_distribution_drift.png)

*论文图 6。原论文 Figure 6:：“Latent Behavior Analysis across span indices. Comparison of cosine distances d(P^(0),P^{*}), d(P^(0),Z_C^{*}), and d(P^{*},Z_C^{*}).”。*

横轴是 span index，纵轴是 cosine distance；红色是初始 patch 到优化后 patch 的距离 d(P(0),P*)，橙色是初始 patch 到原始音频片段 Z_C* 的距离 d(P(0),Z_C*)，绿色是优化后 patch 到原始音频片段的距离 d(P*,Z_C*)。图中红色柱整体最低，橙色居中，绿色多数最高，即优化后的 patch 与原始音频的距离通常大于优化前的初始偏移。这个可见模式支持作者关于 REINFORCE 搜索会把音频表示推离有效音频流形的解释，也解释了为什么解码前要换回原始 Z；但余弦距离只描述表示几何，不直接等于答案错误，图中也没有把距离变化与准确率提升一一对应。

### 结论在哪些条件下成立

结论的适用范围首先受评测范围限制。实验集中在 MMAR、MMAU、AudioMCQ 及若干音频子项，两个骨干分别是 Qwen2.5-Omni-7B 与 Qwen2-Audio-Instruct；给出的文本没有覆盖更多语言、噪声条件、长音频或真实对话场景，也没有报告多随机种子的置信区间。跨数据集平均提升不等于每个子项都提升：例如 Qwen2.5-Omni 版本在 CompA-R、LP-MTT、MusicCaps 上低于同表某些基线。

第二，置信度奖励是启发式。图 3 显示置信度分箱与平均准确率的正相关，但这不是因果证据；论文摘要提到置信度校准改善，给出的表格主要报告准确率、奖励和 AAR，没有给出期望校准误差等校准指标。式 6 的负对数概率写法与奖励越大越好的叙述需要实现层核对，若符号方向理解错，搜索目标会反转。

第三，复原只处理音频 patch。最终序列中的思维 token 仍是优化后的 T*，因此搜索对潜在轨迹的影响没有被完全回滚；作者说消除优化引起的分布漂移，应限定为音频嵌入的漂移。延迟方面，MMAU 上 DeALR 为 3.45 s，高于 Vanilla 的 1.05 s 和 LTPO 的 3.07 s；15 步搜索、8 张 RTX 3090 的实验配置说明它不是零成本方案，显存和吞吐尚未报告。

最后，NMS 半径、跨度宽度、思维 token 数、Top-k 的 k 和滑窗核宽等超参数中，部分只给了一个实现值；论文没有展示完整敏感性网格，也没有在同一预算下对所有基线重新调参。因此在评估到的测试时推理方法中更好成立，不能推广为对所有音频模型或所有部署预算都更优。

### 复现时先做什么、还缺什么

复现的第一步不是训练新模型，而是搭好冻结推理与外部向量搜索。选定 Qwen2.5-Omni-7B 或 Qwen2-Audio-Instruct，固定音频编码器、Transformer 和 LM Head；准备 8 个由专用特殊 token 初始化的思维向量，执行 1 次带原始查询与音频的前向，提取思维 token 到音频 token 的注意力。若论文的全层平均注意力实现细节不足，应先用与 AAR 相同的统计方式核对层选择和头平均。

第二步，按半径 30 帧做 1 维 NMS，选 8 个锚点并扩展为宽度 3 的连续片段，交错成思维 token 与声学片段序列，得到 24 个 patch 向量。第三步，按论文给出的 M=15、σ0=20、γ=0.95、η=0.005 跑高斯扰动搜索；每一步计算 Top-k 置信度奖励并更新思维与 patch，记录最大奖励状态。Top-k 的 k、滑窗核宽 w_s、专用特殊 token 的具体名称需要从作者实现或补充材料核验，本次给出的正文没有把它们列全。

第四步，搜索结束后只保留最优思维 token 和最优锚点，把原始 Z 在锚点处的片段放回输入，丢弃扰动后的 P*，再正常自回归解码。第五步，在同一骨干、同一提示模板和同一测试集上重跑 Vanilla、CCoT、ICoT、LTPO、DMLR；Qwen2-Audio 下 DMLR 因特殊 token 缺失未运行，不能补一个不同条件的数值。评估至少记录准确率、延迟、奖励和 AAR，并最好重复随机种子。就本次可核验材料而言，未发现可依赖的作者代码或权重资源，因而不能把已有可直接运行的开源实现当作复现前提；代码、权重和系统可运行性需要分别核验。

### 何时值得尝试，下一步验证什么

什么时候值得尝试 DeALR？当基座 LALM 已冻结、每个测试样本没有答案标签、任务又确实依赖局部声学证据，且可以接受每样本多步搜索时，它提供了一个可操作的思路：先用注意力定位连续音频片段，再用置信度式奖励搜索少量外部向量，最后把原始音频嵌入换回来解码。若部署延迟必须接近直接推理，或需要严格的校准保证、统计显著性结论，单看本文证据还不够。

复现时优先做两件事：一是把 AAR 和 span localization 做成可观察的中间输出，确认模型确实在音频 key 上分配注意力；二是做不带复原、只更新思维 token、只更新音频 patch 的对照，避免把搜索带来的准确率变化误归因于声学回溯。随后再检查奖励符号、Top-k 的 k、NMS 半径和片段宽度对结果的影响。

还需要补的验证包括：多个随机种子和置信区间、更多语言与噪声条件、校准指标、不同音频长度下的显存与吞吐、以及最终解码换回原始音频后思维 token 是否仍保留有用信息。论文目前支持在 MMAR/MMAU 等评估设置中，DeALR 相对所比较的测试时推理方法取得较好的平均准确率，并揭示音频表示漂移与复原的必要性；它不支持把 DeALR 理解为所有音频任务上无条件更强或零额外成本。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.15439v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：deepseek-v4.1-flash

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
