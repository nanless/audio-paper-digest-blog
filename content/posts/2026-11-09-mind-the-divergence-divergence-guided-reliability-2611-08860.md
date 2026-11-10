---
title: "Mind the Divergence: Divergence-Guided Reliability-Aware Fusion and Adaptive LLM Prompting for Conversational Emotion Recognition"
date: 2026-11-09
draft: false
tags: [多模态情感极性分析, 多模态学习, 大语言模型, 音视频, LoRA]
categories: [论文速递]
description: "针对文本、语音、视觉各自判断不一致会污染融合的问题，MiD-ERC 用单模态预测分歧度和样本级可靠性来控制跨模态交互、加权与大模型提示，在 IEMOCAP 和 MELD 上取得最高准确率与加权 F1，尤其在高分歧样本上提升更大，但结论只在给定特征、划分与微调设置下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.08860"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "模态吵架时怎么办：用分歧度调节融合与提示的对话情绪识别"
paper_digest_original_title: "Mind the Divergence: Divergence-Guided Reliability-Aware Fusion and Adaptive LLM Prompting for Conversational Emotion Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.08860v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.08860v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.08860v1.pdf"
paper_digest_primary_task: "多模态情感极性分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"method","id":"method.lora","label":"LoRA"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对文本、语音、视觉各自判断不一致会污染融合的问题，MiD-ERC 用单模态预测分歧度和样本级可靠性来控制跨模态交互、加权与大模型提示，在 IEMOCAP 和 MELD 上取得最高准确率与加权 F1，尤其在高分歧样本上提升更大，但结论只在给定特征、划分与微调设置下成立。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jingwen Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiao Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuhang Qian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuyin Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Min Zhang"}]
paper_digest_abstract_sha256: "40cfd3bd2ba9656e5afa459ebae666ba951dc7888a1ebbf382fa298f51b7ab58"
paper_digest_sidecars: {"citation.bib":{"sha256":"3bf320e65b7995d90859244d878d773fdc92150abac8f0de7b6a8d01bc86043e","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08860/citation.bib"},"citation.json":{"sha256":"fed196d663f02f5894bb40b1491b585de757a487eec02f6f2ee7143c609d8405","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08860/citation.json"},"citation.ris":{"sha256":"a369d0421f36d0a9c194c8500db83a8ef286959701592b434d697dd0f5d25827","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08860/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"4bde3e047577d0ce2d4178cb56dd2596d1ca1ca8846a3d71665af4dfa974526a","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08860/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "6361f604a3f3bbdf11116268ec1f2c9107c66eaae84c5c98a05ad3b9d153895e"
paper_digest_api_reader_plan_sha256: "6aa6bf89b1cd05f76937ee8e3c10e66df25fada78d644205537f3f2c0293c98e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "6dfbd2f1c9bc2d5757a2352243f36a58342fdcd106cf63f2b81d6486ba1a2587"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "a17cb5795a4b287d9a0ca64f6a1a3a4491efcad8efafc92ffe908f3ae940a055"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c6e0463dad544a5fdac1d29aeeb4fba9e336d238153f5ce6505ac731120c218a"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "5b2e35d7fc5cc3d4c1baa0e805a3429e5ad8b1ce512443fe813fb98c4d3c93ef"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 模态吵架时怎么办：用分歧度调节融合与提示的对话情绪识别

> 英文题目：*[Mind the Divergence: Divergence-Guided Reliability-Aware Fusion and Adaptive LLM Prompting for Conversational Emotion Recognition](https://arxiv.org/abs/2611.08860v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-paper-digest-blog/papers/?concept=task.multimodal-sentiment)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **模型家族**：[大语言模型](/audio-paper-digest-blog/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Jingwen Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiao Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuhang Qian：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuyin Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Min Zhang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

对话情绪识别需要为每句 utterance 输出一个情绪标签，输入是包含说话人轮次的上下文以及文本、语音和视觉三路信号，难点在于三路证据可能指向不同情绪，盲目融合会放大不可靠线索。论文提出 MiD-ERC，先为每种模态独立编码对话历史并输出单模态情绪分布，再计算三者之间的归一化分歧分数，同时为每种模态估计样本级的可靠性分数。分歧与可靠性共同控制跨模态信息交换的门控、加权融合时的权重集中程度，并决定大语言模型使用一致性策略还是对比性策略来组织融合表示与单模态证据。在 IEMOCAP 上该方法取得 73.38% 的加权 F1，超过 Causal-ERC 的 71.46%，相对提升来自对高分歧样本的针对性处理。结论适用于以标准情绪标注训练、不增加冲突标注与外部检索的设置，高分歧样本获益更大而低分歧样本提升有限。原文披露单次前向推理流程使推理耗时约为 Causal-ERC 的一半，IEMOCAP 上总耗时从 551.82 秒降至 292.14 秒。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 对话情绪识别要从什么输入预测什么

对话情绪识别处理的是连续多轮对话，每一轮有说话人、文本内容、语音信号和面部视频，目标是给每一句话判一个情绪标签。初学者容易只看当前句的字面意思，但对话里情绪依赖上下文：同一句话在不同说话历史下含义不同，多说话人轮流时还要区分自己情绪的延续和受别人影响。

多模态的难点在于 3 路证据不总一致。文本可能中性，语气可能愤怒，表情可能夸张；遮掩、反讽、录制噪声都会让某一模态不可靠。如果不加区分地拼接或平均，就会把错误证据放大。本文把这些异质原因统一看成一个可计算的现象：3 个单模态分类器在同一标签集上给出互相竞争的概率分布，后续处理要根据竞争激烈程度改变做法。

### 已有路线为什么没有按分歧调整融合

非大模型路线主要改进表示与上下文建模，例如以文本为中心的跨模态交互、长短程图建模、情感动态建模等，融合策略对所有样本基本相同，没有显式用模态间预测不一致来控制交互强度。通用多模态大模型路线把声视觉编码后做注意力预融合再送入大模型，同样是统一预融合，也不建模对话历史和说话人动态。

对话专用的大模型路线中，多数只用文本，辅以检索示例、说话人传记或解释与检索库，会增加工程复杂度。唯一在表示层融合多模态的 Causal-ERC 用了说话人感知编码、双向跨模态交互和基于峰终定律的提示，但融合与提示都不以预测分歧和样本级可靠性为条件。本文的差别正在于此：分歧与可靠性同时调节交互、聚合与提示三处。

### 分歧大时直接融合会出什么问题

论文用一个例子说明风险：人物说告别聚会的平淡台词，文本和语音偏中性，面部却呈愤怒表情。若直接融合，多数派的中性会压过少数但关键的愤怒，或者把互相矛盾的向量混成谁都不像的表示。下面这张示意图把传统做法与本文做法并排对比，有助于理解为什么要先检测分歧再决定怎么用证据。

> **看图路径：** 1. 看顶部人物表情与台词字面情绪是否指向同一标签；2. 对比左右两路传统融合与本文方法对冲突的不同标注；3. 注意底部表情符号与对错标记表示的最终判断差异

[![原论文 Figure 1：Orson (Akass and McCabe 2019) displays an angry facial expression while speaking in a relatively…](https://arxiv.org/html/2611.08860v1/multimodal_emotion_conflict_editable.png)](https://arxiv.org/html/2611.08860v1/multimodal_emotion_conflict_editable.png)

*论文图 1。原论文 Figure 1:：“Orson (Akass and McCabe 2019) displays an angry facial expression while speaking in a relatively calm tone.”。*

图中左侧传统融合标注错过模态冲突、盲目融合后判错，右侧本文方法标注检测到冲突、自适应融合后判对。3 路单模态预测都标为文本中性、视觉愤怒、音频中性，差别只在是否根据分歧改变处理。这说明问题不是缺模态，而是缺对分歧的响应机制。论文因此不去逐一识别讽刺或噪声类型，而是把共同后果量化成可导的控制信号。

### MiD-ERC 让分歧信号流向哪三个环节

MiD-ERC 的流程可以沿一个目标话轮走一遍：3 模态特征先各自做带上下文的编码，得到上下文表示；各自经分类头得到情绪分布；由 3 个分布算出归一化分歧度，同时估计每个模态的可靠性；分歧与可靠性共同决定跨模态门控开多大、融合权重多集中；融合表示与各模态表示一起投影到大模型词嵌入空间，再按分歧阈值选关系提示，与静态提示拼接后 1 次前向输出情绪标签。

整体框架图把这五步标得很清楚，建议先看主干再看分歧分支的分发。

> **看图路径：** 1. 沿 1 到 5 编号看从单模态编码到大模型识别的主路径；2. 看中间分歧度分支如何同时进入门控、加权与提示；3. 区分可训练模块与冻结大模型的图标标识

[![原论文 Figure 2：Schematic diagram of the MiD-ERC framework.](https://arxiv.org/html/2611.08860v1/MiD-ERC_new_new.png)](https://arxiv.org/html/2611.08860v1/MiD-ERC_new_new.png)

*论文图 2。原论文 Figure 2:：“Schematic diagram of the MiD-ERC framework.”。*

图中从左到右是文本、视觉、音频 3 条编码线，中间是归一化 Jensen-Shannon 分歧计算，右侧是可靠性估计、门控交叉注意力、可靠性加权三块融合，最后是阈值选提示与低秩适配的大模型。火焰图标表示可训练，雪花表示冻结。分歧度是贯穿门控、加权与提示的全局线，可靠性是进入门控与加权的局部线。训练只用标准情绪标签，不需要冲突标注、额外构造数据或外部检索。

### 上下文编码如何保留说话人与因果顺序

每个模态先用各自的 DialogueRNN 看对话时序，输入包含该轮模态特征与说话人嵌入，这样同一句话由不同人说会有不同动态。接着用单层说话人感知因果图卷积只连历史窗口内的前文，不看未来，保证与自回归大模型推理兼容。边上区分同说话人与跨说话人，用不同线性变换分别建模自身延续与他人影响，注意力按源表示、目标表示、说话人关系与相对距离计算。

输出的 3 个上下文表示既用于单模态预测，也用于后续分歧估计与自适应处理。消融显示去掉该图模块后两数据集加权 F1 各掉约 1 个百分点，多方对话的 MELD 下降更值得注意，说明显式区分内外说话人依赖确有作用。参数共享实验也表明 3 模态共用编码器虽省少量参数，但加权 F1 掉 3 到 4 个百分点，因为时序与说话人模式在模态间并不相同。

### 单模态预测怎样变成可比的分歧度

每个上下文表示经各自多层感知机加 Softmax 得到情绪分布，3 个辅助交叉熵损失把它们拉到同一标签空间，否则分布不可比。公式含义是每个模态独立预测当前轮的类别概率向量。

\[p_{i}^{\xi}=\mathrm{softmax}\left(\mathrm{MLP}_{\xi}(h_{i}^{\xi})\right)\]

在此基础上，分歧度取 3 个分布与平均分布的 KL 散度均值，再除以 log 3 归一到 0 到 1 之间，与类别数无关。分歧大表示 3 路指向不同情绪，分歧小表示基本一致。

\[\mathrm{Div}_{i}=\frac{1}{3\log 3}\sum_{\xi\in\{t,a,v\}}\mathrm{KL}\left(p_{i}^{\xi}\parallel\bar{p}_{i}\right)\]

**单模态情绪分布 × 预测分歧度：** 单模态情绪分布指文本、音频、视觉各自独立分类头在同一标签集上输出的概率向量；预测分歧度是对这三个向量不一致程度的归一化度量。前者提供可比的证据，后者把讽刺、遮掩、噪声等异质原因抽象成连续控制信号，组合后不需要区分具体来源就能统一调节后续融合。

可靠性估计则把上下文表示、跨模态均值表示、预测分布、最大置信度、预测熵与分歧度拼接后送入模态专属网络加 Sigmoid，输出 0 到 1 的分数。监督目标是该模态分类器赋给真实标签的概率，用均方误差拟合且对分类器截断梯度，避免可靠性损失干扰分类头。

\[q_{i}^{\xi}=\sigma\left(\mathrm{MLP}_{\xi}\left(\left[h_{i}^{\xi};\bar{h}_{i};p_{i}^{\xi};c_{i}^{\xi};H_{i}^{\xi};{\mathrm{Div}}_{i}\right]\right)\right)\]

**预测分歧度 × 价值评估模型：** 预测分歧度是全局信号，只说三个模态总体吵得多厉害，不说谁更可信；价值评估模型是本文可靠性估计器的对应叫法，输出每个模态的样本级可靠性分数。全局信号决定何时谨慎，局部信号决定加权时偏向谁，二者搭配才既能察觉冲突又能分配证据。

### 门控与加权如何一个管交换一个管汇总

跨模态增强先做平行交叉注意力，以文本为例，用文本查询去注意音频与视觉序列，拼接后经多层感知机得到增强特征，音频与视觉同理。若直接残差相加，不可靠证据会混入。门控用分歧度、平均可靠性与可靠性离散度三者经网络加 Sigmoid 得到标量，统一乘到增强特征上再加回原表示。高平均可靠性促进交换，高分歧抑制交换，高离散度则在不平衡时自适应调节。

\[g_{i}=\sigma\left(\mathrm{MLP}_{g}\left(\left[\mathrm{Div}_{i};\bar{q}_{i};q_{i}^{\mathrm{dis}}\right]\right)\right)\]

**分歧引导门控 × 分歧调节可靠性加权：** 分歧引导门控控制跨模态注意力增强特征以多大比例加回原表示，管信息交换的开关；分歧调节可靠性加权控制三个模态融合时权重集中程度，管证据汇总的比例。前者防止不可靠信息提前混入，后者防止汇总时被单一模态垄断，分别作用在交互和聚合两个阶段。

融合时温度随分歧增大而升高，权重由可靠性除以温度后 Softmax 得到，分歧大时权重更平滑，保留竞争证据而不让单一模态垄断，这与贝叶斯因果推断中先判断是否同源再决定融合或分离的直觉一致。

\[\tau_{i}=\tau_{0}\left(1+\alpha\,\mathrm{Div}_{i}\right)\]

另有分歧加权的熵正则，权重越尖锐在高分歧下惩罚越大，进一步防止单模态主导。分析显示权重随相对可靠性单调上升、分歧大曲线变平，去掉熵正则则权重更尖。

### 大模型提示如何按阈值切换证据用法

融合表示与门控后各模态表示经线性层投影到大模型嵌入空间，与分词后的对话上下文一起输入。关系提示按阈值 0.05 二选一：低于阈值用一致性策略，以融合与上下文为主、单模态为辅；达到或超过阈值用冲突策略，要求对比文本、音频、视频与上下文，考虑反讽、遮掩或噪声，从最连贯的解释预测最终情绪。静态提示固定任务格式与候选标签，关系提示动态填入，二者相加后只做 1 次大模型前向。

**融合表示 × 模态特定表示：** 融合表示是对门控后三个模态表示按可靠性加权求和的结果，提供全局多模态证据；模态特定表示是每个模态保留自身身份的门控增强向量，提供可对比的分证据。大模型同时看到两者，才能在一致时以融合为主、在冲突时回头对比各模态细节。

**一致性策略 × 对比策略：** 一致性策略和对比策略是关系提示的两种证据使用政策，由分歧阈值选择其一。前者要求以融合表示和对话上下文为主、单模态为辅；后者要求不要只信融合或最自信单模态，而要对照文本、音频、视频与上下文解释冲突。二者让同一次大模型前向在不同分歧水平下采用不同推理方式。

这种设计把加权仍难解决的解释问题交给语言推理：权重只能决定比例，提示才能决定如何理解互相矛盾的证据。消融中去掉关系提示只留静态提示，加权 F1 在两库分别掉约 2.02 和 1.06 个百分点；去掉融合表示也掉 1.7 和 1.18 个百分点，说明全局证据与切换策略都不可少。

### 哪些参数更新与损失各起什么作用

基座选用 Qwen2.5-7B-Instruct 并冻结，低秩适配器作用于全部线性层，秩 16，缩放 32，丢弃 0.05；可训练的是投影层、单模态编码器、因果图、可靠性头、门控与融合层。精度用 bfloat16，优化器为 AdamW 加线性预热余弦调度，初始学习率 2e-5，最小 1e-6，预热 1e-7 共 1000 步，权重衰减 0.05，两库各训 10 轮、每轮 1000 迭代，批量 IEMOCAP 为 2、MELD 为 3，单卡 RTX 5880 Ada。融合温度基值 0.5，分歧系数 2.0，阈值 0.05。

总损失是主分类交叉熵加三项：单模态辅助损失权重 0.8，可靠性均方误差权重 0.15，熵正则权重 0.05。单模态损失保证分歧来源可靠，可靠性损失教会分数拟合真实标签概率且截断对分类头的影响，熵正则在高分歧下约束权重分布。去掉单模态损失在 IEMOCAP 掉 2.33 个百分点最多，因为分歧算不准后面全受影响；去掉另两项在 MELD 最多掉 1.25 个百分点。

### 在什么数据与指标上比较才算同条件

实验用 IEMOCAP 的双人实验室对话与 MELD 的多方情景喜剧对话，前者 6 类、后者 7 类。原文把原始多模态格式转成指令格式，每个目标话轮取固定历史窗口，附说话人标识与候选标签，并用 CFN-ESA 预提取的文本、音频、视觉特征按对话存档。评价用准确率与加权 F1，都是越高越好，加权 F1 按类别样本量加权平均，适合类别不均的情绪数据。所有结果为 6 个随机种子平均。

下表是两库的会话与话轮规模，理解难度与指标方向要结合该表看：MELD 说话人多、轮转频繁，自然口语噪声大，IEMOCAP 对齐质量高但情绪细粒度难。

| Dataset | Conversations | Utterances | Classes |
| --- | --- | --- | --- |
| IEMOCAP | 120 | 5810 | 6 |
| MELD | 1039 | 9989 | 7 |

该表比较的是数据集规模与类别数组成，IEMOCAP 训练 120 会话 5810 话轮、测试 31 会话 1623 话轮共 6 类，MELD 训练 1039 会话 9989 话轮、验证 114 会话 1109 话轮、测试 280 会话 2610 话轮共 7 类。条件不同直接决定基线高低，跨库数值不能直接比大小，只能看同库内方法差距。特征来自同一预提取管线是公平比较的前提，换特征或换划分都会改变结论适用范围。

### 主结果在多大差距上领先与代价是什么

主结果比较的是同库、同划分、同指标下的方法差距，重点看准确率与加权 F1 两个越高越好的指标。整理表保留原文报告的整体数字与相对同基座微调的提升百分点，阅读时注意差距是百分点而非相对百分比。

| 数据集 | MiD-ERC 准确率 | MiD-ERC 加权 F1 | 相对同基座微调准确率提升 | 相对同基座微调加权 F1 提升 |
| --- | --- | --- | --- | --- |
| IEMOCAP | 73.44% | 73.38% | 2.83% | 2.63% |
| MELD | 71.79% | 70.60% | 2.94% | 3.62% |

该表回答谁在同条件下整体更好：MiD-ERC 在 IEMOCAP 准确率 73.44%、加权 F1 73.38%，在 MELD 准确率 71.79%、加权 F1 70.60%，为两库最好。相对同基座微调提升 2.83、2.63 与 2.94、3.62 个百分点，相对 Causal-ERC 提升 1.84、1.92 与 1.71、1.58 个百分点，相对最强非大模型 CFN-ESA 加权 F1 高 2.34 与 3.90 个百分点，并在 13 类中 9 类最佳。但低分歧段优势缩小甚至略退，说明增益集中在高分歧样本。

下面个例展示高分歧时 3 路证据如何被重新使用，读图时先看输入与 3 路预测再看中间三格调节。

> **看图路径：** 1. 看输入台词与三行单模态预测加可靠性标注；2. 看中间门控减弱、权重偏向音频与选择对比策略三格；3. 看最右侧最终情绪图标与对钩表示的正确识别

[![原论文 Figure 8：Case study of MiD-ERC on a conflict sample.](https://arxiv.org/html/2611.08860v1/case_study_new.png)](https://arxiv.org/html/2611.08860v1/case_study_new.png)

*论文图 8。原论文 Figure 8:：“Case study of MiD-ERC on a conflict sample.”。*

图中输入台词字面带反讽，文本与视觉判中性且可靠性低，音频判愤怒且可靠性高，系统降低跨模态注入、把最高权重给音频并选对比策略，最终判愤怒正确。这把门控、加权、提示 3 步的协作具体化了，但单例不能证明普遍有效，需结合按分歧分组的统计看，高分歧组加权 F1 差距拉大到 IEMOCAP 2.87%、MELD 3.88%。

推理开销的比较问题是单条与全量耗时，指标越低越好，条件是同硬件与同批量设置。

| Methods | IEMOCAP | IEMOCAP | MELD | MELD |
| --- | --- | --- | --- | --- |
| MiD-ERC | 0.18 | 292.14 | 0.15 | 391.50 |
| Causal-ERC | 0.34 | 551.82 | 0.28 | 730.80 |

该表显示 MiD-ERC 单条 0.18 与 0.15、总量 292.14 与 391.50，约为 Causal-ERC 单条 0.34 与 0.28、总量 551.82 与 730.80 的一半。原因是轻量分歧估计加单次大模型前向，而后者每话轮需 2 次前向。代价是仍需冻结大模型与适配器推理成本，速度结论只在同硬件与同批量下成立。

### 拿掉哪部分会掉多少与阈值怎么选

消融回答每个组件的边际贡献，做法是每次只动一处、其余不变，指标仍为准确率与加权 F1。只用文本掉 2.03 与 1.45 个百分点，加回音频恢复大半，3 模态最佳；去关系提示、去融合表示、去门控分别掉 1 到 2 个百分点，说明三处调节缺一不可；去单模态损失在 IEMOCAP 最伤，因为分歧地基不牢。未胜出项也要看到阈值并非越大越好，下图给出敏感性分析。

> **看图路径：** 1. 看横轴阈值与纵轴加权 F1 的关系；2. 对比 IEMOCAP 与 MELD 两条曲线随阈值增大的走向；3. 确认最优点在横轴最左侧附近的位置

[![原论文 Figure 7：Sensitivity to the divergence threshold \\theta.](https://arxiv.org/html/2611.08860v1/threshold.svg)](https://arxiv.org/html/2611.08860v1/threshold.svg)

*论文图 7。原论文 Figure 7:：“Sensitivity to the divergence threshold \theta.”。*

该图横轴是阈值，纵轴是加权 F1 百分比，IEMOCAP 曲线在 0.05 最高、中段回落、0.25 回升但仍不及起点，MELD 曲线随阈值单调微降。可见 0.05 是两库兼顾的选择，换数据需重调。不同基座的稳健性如下表，问题是方法是否绑定特定大模型，指标仍为准确率与加权 F1。

| Methods | IEMOCAP | IEMOCAP | MELD | MELD |
| --- | --- | --- | --- | --- |
| Qwen2.5-7B-Instruct | 73.44 | 73.38 | 71.79 | 70.60 |
| Llama-3.1-8B-Instruct | 73.72 | 73.64 | 71.95 | 70.81 |
| Qwen3-8B | 73.01 | 72.97 | 71.83 | 70.76 |

该表显示 Qwen2.5、Llama-3.1-8B、Qwen3-8B 在 IEMOCAP 波动 0.71 个百分点内、在 MELD 波动 0.21 个百分点内，Llama 略高但主实验仍用 Qwen2.5 以与多数基线对齐。这支持方法不依赖单一基座，但不能推广到未测的更大或闭源模型。

### 结论在什么边界外不再成立

首先，分歧度依赖单模态分类头质量，若特征差或辅助监督不足，分歧信号本身会错，门控与加权都会跟着错。其次，阈值、温度、损失权重都来自经验搜索，换语言、换特征提取器或换对话领域后最优值可能移动。再次，低分歧样本优势微弱，说明在本来一致的简单样本上额外机制帮助有限。

还有未评测的范围：噪声类型未分离验证，无法说对讽刺一定比对遮掩更有效；没有人工评价与误判率、延迟分解，不能承诺实际部署的体验改善；权重与可靠性对齐的上界实验是强制排序得到，不是可部署的提升。把高分歧增益理解成全场景通用，或把单例成功当成因果证明，都是夸大。

### 复现第一步要准备什么与注意什么

复现从数据管线开始：按原文用 CFN-ESA 预提取特征组织成对话级压缩包，每个样本记录包路径、话轮索引与文本、音频、视觉键名，IEMOCAP 文本有 4 个流，维度分别为 1024、1582 与 342 等，MELD 用其对应特征；指令模板固定历史窗口，IEMOCAP 窗口 8、MELD 窗口 6，图窗口同此。模型侧冻结基座只训适配器与多模态模块，非大模型丢弃 IEMOCAP 用 0.2、MELD 用 0.3，交叉注意力 4 头。

评估要固定划分与 6 种子平均，同时报告准确率与加权 F1 及分歧分组结果，否则无法验证高分歧增益。来源方面，本次未发现完成 HTTPS 验证的作者资源，不得声称代码、模型或数据已公开；第三方链接只证明论文提到，不证明已开源。复现时缺的是官方脚本细节，需按附录超参数自行实现并记录环境。

### 什么时候值得尝试与还缺哪项验证

当你的对话数据经常出现字面与语气表情不一致，或某一模态噪声大，且你已有 3 路可比的单模态分类器时，值得尝试这种分歧驱动的思路：先算归一化分歧，再学可靠性，用门控管交换、用温度管汇总、用阈值切换提示。这比为每种冲突单独打标签更省力，且只需标准情绪标注端到端训练。

还缺的验证是跨领域阈值重调、分歧估计误差分析，以及在你自己硬件上的 2 次前向与 1 次前向的真实延迟对比。若只在低分歧、单模态已很准的场景，预期收益会小。下一步可补按分歧分桶的置信区间、失败案例中可靠性排序错误的比例，以及去掉大模型后纯融合能保留多少增益，这样才能判断提升来自更好的证据使用还是更强的大模型本身。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.08860v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
