---
title: "Words Speak Louder? Exploring the Language Shortcut of LLM-Driven Incomplete Multimodal Learning"
date: 2026-11-17
draft: false
tags: [多模态情感极性分析, 多模态学习, 基准测试, 大语言模型]
categories: [论文速递]
description: "论文发现以大语言模型做融合会在文字与其他模态冲突时跟随文字，为此构造冲突评测并用反事实视图训练单模态裁判来扣留冲突样本的融合监督，在五个情感基准上提升相关性并减少文字覆盖错误，但稳健性仍需在非言语捷径上权衡。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.20349"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "话说得好听，脸和声音却在摇头：大模型融合为什么只听文字"
paper_digest_original_title: "Words Speak Louder? Exploring the Language Shortcut of LLM-Driven Incomplete Multimodal Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.20349v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.20349v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.20349v1.pdf"
paper_digest_primary_task: "多模态情感极性分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文发现以大语言模型做融合会在文字与其他模态冲突时跟随文字，为此构造冲突评测并用反事实视图训练单模态裁判来扣留冲突样本的融合监督，在五个情感基准上提升相关性并减少文字覆盖错误，但稳健性仍需在非言语捷径上权衡。"
paper_digest_authors: [{"affiliations":["Shandong University Shenzhen Loop Area Institute"],"name":"Wenhao Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chong Xiao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaokun Bai"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rundong He"},{"affiliations":["The Hong Kong Polytechnic University National University of Singapore"],"name":"Zhuang Qi"},{"affiliations":["Shandong University Shenzhen Loop Area Institute","City University of Hong Kong"],"name":"Xusheng Liang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhibin Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiangchang Wang"}]
paper_digest_abstract_sha256: "a5dfe28a81d0f9455e8cf0fe3b08311fa574d737e316f5ee427e36838172caaf"
paper_digest_sidecars: {"citation.bib":{"sha256":"0fd8ec5e0dcc60aab750a39caa5eb048302a579e50060c7ad2fbc4ce3a853605","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20349/citation.bib"},"citation.json":{"sha256":"592ab30fa31cb38fc45ff9603016f87d8249c62e46b7ce961850f8981b9dc18f","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20349/citation.json"},"citation.ris":{"sha256":"fc7c04597595b4ca88df0f3108e876e5ad0ee14d90a49f4e86c52959cbdc88f8","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20349/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"77404d5f175bc077a2b787af04e9d1823906e4376427dcb629fc75cbf6efb79d","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20349/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "b520251a2e0480ef90a52f3c2f03de874d3aa79a7941bb07a7f132c58d3e270b"
paper_digest_api_reader_plan_sha256: "9c3b3a8cd1ee1cac899d3a215197ee089ad104db7fbc1b0f157d41c6f3d12631"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c86a3a0ac5fe50dcf824525fce0f4b2a5d0f23181254fe768866119c01617cd3"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "af4cbd383f2d7a0aa70ae26bd58c62be2023f85854eaea2c32d736d360f95dc0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "83468eb1e165d5f6b2ae4fc4282eb95b09a1507b637540fe2dc4f7bf05dbad04"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "162970622d0ff5950c3383bcb4ffeea76d6fd0f47f1c9a8cd0571993cc79f674"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 话说得好听，脸和声音却在摇头：大模型融合为什么只听文字

> 英文题目：*[Words Speak Louder? Exploring the Language Shortcut of LLM-Driven Incomplete Multimodal Learning](https://arxiv.org/abs/2611.20349v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-paper-digest-blog/papers/?concept=task.multimodal-sentiment)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)
- **模型家族**：[大语言模型](/audio-paper-digest-blog/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Wenhao Li：Shandong University Shenzhen Loop Area Institute
- Chong Xiao：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaokun Bai：机构信息未能在本次解析中与作者逐人可靠绑定
- Rundong He：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhuang Qi：The Hong Kong Polytechnic University National University of Singapore
- Xusheng Liang：Shandong University Shenzhen Loop Area Institute；City University of Hong Kong
- Zhibin Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiangchang Wang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

该任务输入一段视频切片的文字、声音和画面特征，输出说话人情感为正或负，难点在于三者含义冲突时模型仍跟随文字而忽视非文字证据。先把各模态特征分别放进语言模型固定位置的token块，缺失模态用可学习占位符代替，再把说明可用情况的提示词与这些token块拼接，送入解码器输出融合情感分数。再让同一模型并行读取完整输入、单个模态和无内容视图，输出各自预测，用文字视图与声音或画面视图的预测分歧定位冲突样本。最后训练时让完整视图与单模态视图一起前向，单模态视图接受各自单模态标签监督，把上一步得到的视图分歧送入门控，当文字判断与非文字判断分歧超过阈值时阻断融合路径的任务梯度，只保留单模态监督。测试时准确模式直接输出完整视图预测，稳健模式允许分歧视图改写结果。与同结构语言模型融合基线相比，在CH-SIMS七种缺失模式平均下二分类准确率从73.8%提高到77.2%，平均相关系数从0.496提高到0.530。结论适用于文字占主导的情感语料，对抗文字捷径时文字误导片段错误率仍为38.3%，单训练轮次耗时约为基线的5.7倍，准确模式单片段推理约4.0毫秒。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 不完整多模态情感分析要解决什么输入问题

这篇论文研究的是说话人情感极性判断，输入是同一段视频切片的文字、音频和视觉 3 路特征，输出是一个情感分数，正为积极，负为消极。现实采集里 3 路很少同时完好，训练时缺失的原因也会污染测试，因此论文把缺失当作常态而不是例外。每个样本附带一个可用性掩码，标明 3 路中哪些路在本次访问中可见，训练采用动态掩码，每次访问随机抽 7 种非空组合之一，测试则要遍历全部 7 种组合以及不同随机缺失率，再把二分类准确率、加权 F1、平均绝对误差和皮尔逊相关性按组合或缺失率平均。

已有路线大多需要完整训练数据来补缺失或蒸馏完整教师，缺失模态的特征仍被当作重建或蒸馏目标来读。本文讨论的另一条路线是把大语言模型当融合器，文字直接进入词表，音频和视觉先投影到同样的嵌入空间再拼成词块，缺失位置放可学习占位向量，提示词说明哪些可用。这种做法不需要在训练时读到缺失模态的原始特征，但带来一个新风险，解码器本身在文字上预训练，情感语料的训练信号又集中在文字上，投影进来的声学和视觉证据可能在有文字时被压住。读者需要先建立这个权衡，缺失要能处理，文字强势也不能让融合变成只读文字。

### 已有补缺失和调不平衡路线与本文有何不同

不完整多模态已有路线包括自编码器、变换器、图和扩散补全，完整教师蒸馏，缺失感知提示，以及检索翻译缺失内容。另一支处理模态不平衡，用梯度调制、目标平衡和不确定性加权。在情感分析里文字主导已被反复报道，单模态标签也曾用于多任务学习。本文的不同在于不补特征也不蒸馏完整教师，而是把融合大模型自身在反事实输入下的行为训练成裁判，并用裁判分歧在目标层面扣留冲突样本的融合监督。

与文本偏置和模态冲突的评测相比，文字或视觉类工作研究视觉问答中的语言先验，表情类工作诊断视频贡献坍缩并在推理时做注意力转向。本文诊断的是特征输入的自然情感冲突下解码器后层向文字视图对齐，干预放在训练目标而非推理时状态 steering。推理时 steering 作为对照出现，它按融合与文本视图状态差异触发并沿差异方向推动融合词元，但原文说明它没有复现头级注意力干预，只是风格类似的适配。比较时要注意运行阶段不同，训练时改监督与测试时改状态不能直接换算成谁更强，只能看各自保留了什么代价。

### 什么算语言捷径，论文用什么标准把它挑出来

论文把语言捷径定义为融合预测跟随文字极性，而非言语证据和标签都指向另一边的情况。举例是讽刺地说哪里也不如这里好，或者小孩笑着说爷爷来骂爸爸，静音看画面能答对，加上文字稿反而答错。关键是不能用被测模型自己的单路输出来定义谁对谁错，否则会循环论证，所以论文引入独立于被测模型的单模态判断，在中文数据集上用人标的单模态标签，在英文数据集上用外折训练的单模态专家的预测，再设自信阈值，只保留文字自信地错且音频或视觉至少一路自信地对的样本。

按这个规则，每个测试样本被分为一致、冲突、弱模态冲突和其他 4 类。一致是 3 路判断都与标签同极性，冲突是上述文字错而非言语对，弱模态冲突反过来是文字对而非言语错。冲突样本上模型若输出文字极性，就记一次语言捷径错误，所有冲突样本中这类错误的占比记为 ShortErr，数值越低越好。这个定义把可读性问题转化为可计数的评测问题，后续所有诊断都围绕一致与冲突的对比展开。

**一致案例 × 冲突案例 × 单模态判断：** 一致案例指各模态单模态判断都与标签同极性，冲突案例指文字判断自信地错而音频或视觉判断自信地对，单模态判断是独立于被测融合模型的人工标注或外折专家预测，三者组合才能把模态打架的样本挑出来而不是笼统说难样本。

要理解这套筛选为什么需要三道关，请按顺序看下面这张基准构造图，它把挖掘、读者筛查和盲测验证画成了流水线。

> **看图路径：** 1. 先看顶部三步的样本数变化：2040 候选到 1337 通过再到 900 保留；2. 再看左下冲突挖掘示例中文字条与视听条极性相反的位置；3. 最后看右下盲测顺序：先文本再静音视频最后看全片

[![原论文 Figure 2：Constructing MR-Bench. Candidates are clips whose unimodal judgments disagree with the words…](https://arxiv.org/html/2611.20349v1/pipeline_fig2.png)](https://arxiv.org/html/2611.20349v1/pipeline_fig2.png)

*论文图 1。原论文 Figure 2:：“Constructing MR-Bench. Candidates are clips whose unimodal judgments disagree with the words (here a CH-SIMS clip with human unimodal labels on [-1,1]); a panel of four text-only…”。*

这张图确实可见三行面板。顶行给出总数变化，中间左面板展示一个中文片段的文字条指向负极而视觉条和标签指向正极，中间右面板列出 4 个纯文本大模型都把该文本读成负极，底行则要求 3 位标注员按文本、静音视频、全片的顺序依次判断，只有多数人能从全片恢复标签又能从捷径通道读出误导极性才保留。它帮助理解论文不是随机收集难例，而是先用单模态判断找分歧，再用强文本读者确认文字确实误导，最后用人来确认非言语证据确实可读。

### 三条融合路线各自在什么时候介入

论文对比了 3 条路线。第一条是大语言模型融合主干，在每个样本上都对融合预测施加任务损失，不管该样本的各模态是否打架。第二条是测试时覆盖，用冻结模型的各单模态视图去纠正融合决策，不做任何训练，只在推理时多跑一次视图。第 3 条是本文提出的反事实视图可靠性学习，训练时把各视图训练成单模态裁判，再用裁判之间的分歧决定哪些样本的融合任务梯度要被扣留，测试时默认只跑全量视图。

大语言模型融合主干这个名称在后文统一使用，指把多模态特征拼成词块加融合词元再用低秩适配微调解码器的做法。缺失占位符指替换缺失模态特征的可学习向量，它让同一套版式能表示任意可用组合。测试时覆盖和可靠性学习都依赖同样的视图机制，区别在于前者裁判未经训练，后者裁判经过单模态监督。理解这个分工才能看懂为什么论文说测试时覆盖能提冲突准确率却伤一致准确率，而可靠性学习试图在训练阶段解决监督冲突。

**大语言模型融合主干 × 缺失占位符：** 大语言模型融合主干是把各模态特征拼成定长词块再用可调解码器读出融合表征的模型，缺失占位符是在缺失模态位置替代特征的可学习向量，二者搭配让同一模型既能读全模态也能在训练和测试时接受任意缺失组合。

下面这张三栏对比图把 3 条路线的监督位置画得很清楚，读图时重点看任务损失接在哪一路输出上。

> **看图路径：** 1. 对比左中右三栏的监督箭头分别指向哪里；2. 看中间栏冻结字样与右侧可训练裁判的区别；3. 注意右侧停止梯度虚线连接了任务损失与分歧门

[![原论文 Figure 5：Three ways to fuse. LLM-Fusion supervises the fused prediction on every sample (left); the…](https://arxiv.org/html/2611.20349v1/overview_fig6.png)](https://arxiv.org/html/2611.20349v1/overview_fig6.png)

*论文图 4。原论文 Figure 5:：“Three ways to fuse. LLM-Fusion supervises the fused prediction on every sample (left); the test-time override lets confidently disagreeing views of the frozen model replace the…”。*

这张图左侧只有全量视图进入模型并产生预测再接任务损失，中间栏全量加文本音频视觉视图都进入冻结模型再经覆盖门修正最终预测，右侧全量视图产生预测而文本音频视觉视图产生训练好的裁判，裁判的分歧门通过停止梯度控制任务损失是否回传到融合路径，同时单模态损失始终监督各裁判。它直观说明本文的改动不在结构和推理输入，而在训练时哪些样本允许训练融合路径。

### 融合主干怎样拼输入，又在哪里倒向文字

融合主干把一个样本序列化为提示词、文字块、音频块、视觉块和融合词元的拼接。每个存在模态的块包含起止边界词元和投影后的特征序列，缺失模态则用多个缺失占位向量替代特征，提示词说明哪些可用。解码器在每一层都产生融合词元状态，最后由掩码感知的双路径头读出情感分数，训练损失包含任务平方误差、双路径一致约束和融合词元多样性约束。这个序列化公式是后续所有视图对齐的基础。

\[Z(\mathbf{c},\mathbf{p})=\big[P(\mathbf{p});\,S_{t}(c_{t});\,S_{a}(c_{a});\,S_{v}(c_{v});\,E_{\mathrm{fus}}\big],\]

反事实视图指把内容掩码和提示掩码解耦后送入同一模型的输入，融合视图指内容和提示都与真实可用性一致，单模态视图指只保留一路观测特征而提示也只声称该路可用，无内容视图指保留提示但隐藏全部内容。所有视图共享上面公式的版式，因此各层融合词元状态在位置上一一对应，可以一次批量前向同时得到全量预测、各单路预测和无内容预测。单模态判断指该模态本应传达的极性，来自人工标注或外折专家，与模型对该视图的预测是两回事。

**反事实视图 × 单模态判断 × 融合视图：** 融合视图是按真实可用性同时放进所有观测特征的输入，反事实视图是只放单个模态或不放任何内容但保持版式对齐的输入，单模态判断是该模态实际传达极性的外部标准，三者配合才能区分模型看到了什么和该模态本应说明什么。

有了视图就可以度量融合状态倒向哪一路。论文用先验中心依赖来衡量，它先减去无内容视图的内容无关部分，再计算融合视图剩余向量与某单模态视图剩余向量的余弦，越接近 1 说明内容相关成分方向越一致，但原文明确说这不是因果贡献度量。

\[\rho^{\ell}_{j}=\cos\!\big(\bar{h}^{f}_{\ell}-\bar{h}^{\varnothing}_{\ell},\ \bar{h}^{j}_{\ell}-\bar{h}^{\varnothing}_{\ell}\big),\]

下面这张解码器逐层曲线图展示了倒向形成的过程，横轴是层数，纵轴是上述依赖值，实线冲突虚线一致。

> **看图路径：** 1. 看前三幅子图后三分之一层文字依赖曲线是否抬升；2. 对比实线冲突与虚线一致在各层的相对位置；3. 看最右子图预测分歧与隐状态差异的柱高差别

[![原论文 Figure 4：Where and how the decision collapses.](https://arxiv.org/html/2611.20349v1/diag.svg)](https://arxiv.org/html/2611.20349v1/diag.svg)

*论文图 3。原论文 Figure 4:：“Where and how the decision collapses.”。*

这张图前三幅子图可见文字依赖在解码器后三分之一明显抬升到 0.68 到 0.81 之间，而视觉依赖下滑，去掉文字后融合状态转而对齐音频视图。最右子图可见用隐状态差异区分冲突与一致的曲线下面积只有 0.53 到 0.60，接近随机，而用视听与文字视图的预测分歧区分可达 0.92 左右。它支持论文的判断，坍缩在后层形成且呈层级排序，隐状态差异不是好的冲突信号，预测层分歧才是可用信号，但未经训练的视图裁判本身还不可靠。

### 可靠性学习怎样训练裁判并扣留冲突监督

可靠性学习保持结构、输入和推理流程不变，只改训练。每个小批量同时跑全量视图和 3 个单模态视图并保留梯度，观测到的单模态视图都要拟合自己的单模态标签，掩码决定哪一路参与该损失，缺失模态既不提供输入也不提供目标。这个单模态损失让融合大模型自身在反事实输入下忠实于各模态，从而影响融合路径读到的表征。

\[\mathcal{L}_{\mathrm{uni}}=\frac{1}{\sum_{i,j}m_{ij}}\sum_{i}\sum_{j\in\mathcal{M}}m_{ij}\,\ell\big(\hat{y}^{(j)}_{i},\,y^{(j)}_{i}\big).\]

分歧门在训练时复用测试时覆盖的规则，以文字为锚点，若某非文字视图的预测极性与文字视图相反且偏离中性点超过阈值 1 半，就认为该裁判自信分歧，再按观测情况平均这些分歧视图的预测得到门控预测。门控预测的公式对分歧视图预测做停止梯度，若无分歧则等于融合预测，若有分歧则等于分歧视图预测的均值。

\[\tilde{y}=\hat{y}+\sum\nolimits_{j}w_{j}\big(\operatorname{sg}[\hat{y}^{(j)}]-\hat{y}\big),\]

总损失把任务损失放在门控预测而非原始融合预测上，再加单模态损失、一致约束和多样性约束。由于门控权重和为 0 或 1，对融合预测的梯度在无分歧时正常回传，在有分歧时为零，该样本不再训练融合路径，但各视图仍接受单模态监督。论文的理由是文字标签与融合目标不一致时会把共享低秩参数往相反方向拉，与其拟合冲突监督不如保留单模态语义并只在无分歧样本上拟合融合路径。

\[\mathcal{L}=\lambda_{\mathrm{task}}\big[\ell(\tilde{y},y)+\lambda_{\mathrm{uni}}\mathcal{L}_{\mathrm{uni}}\big]+\lambda_{\mathrm{con}}\mathcal{L}_{\mathrm{con}}+\lambda_{\mathrm{reg}}\mathcal{L}_{\mathrm{reg}}.\]

推理分两种。准确率模式输出全量视图的一次前向，与主干代价相同。稳健模式再跑视图并用训练好的裁判做覆盖，需要额外视图计算。原文报告准确率模式推理每片段 4.0 毫秒，训练每轮约为 5.7 倍时长，稳健模式延迟约为 6 倍。阈值、单模态权重、低秩秩数、学习率、轮数和权重滑动平均按验证集逐数据集选择，分析部分则用统一默认配方以保证可比。

### 数据、缺失协议和评测指标如何组织

实验用 4 个常用情感数据集加国际情感交互数据，特征为冻结的文本、音频和视觉特征并池化到每模态 50 步，国际情感交互等 3 套特征按同样流程自提。训练观测是不完整的，主协议每次访问动态抽 7 种非空组合之一，测试遍历 7 种组合并报告二分类准确率、加权 F1、平均绝对误差和经费舍尔变换平均的相关性，另有随机缺失率平均。9 种不完整多模态方法被移植到同一冻结特征和同一缺失协议下重跑，其中部分方法仍被允许读取缺失模态特征作为重建或蒸馏目标，主干和本文方法从不读取。

评测分两层。第一层是把每个测试集全部按一致冲突类型划分，报告一致准确率、冲突准确率和 ShortErr。第二层是新收集的 900 片段，620 个语言捷径和 280 个非言语捷径，来自 7 个来源，覆盖讽刺、礼貌拒绝、多方对话和表演性交互。构建分三步，先用单模态判断挖掘候选，再用 4 个跨家族纯文本大模型组成的读者面板筛查，语言捷径要求多数误读文本，非言语捷径要求多数从文字读对标签，最后由 3 位标注员盲测按文本、静音视频、全片顺序判断并检查决定性通道和歧义，只有多数同时满足标签恢复和误导极性条件才保留。

**语言捷径片段 × 非言语捷径片段：** 语言捷径片段是文字极性与标签相反而人看完全片能恢复标签的片段，非言语捷径片段是表情或姿态误导而文字本身携带标签的片段，二者成对出现才能检验模型是真用了非言语证据还是只靠反转文字投机。

指标方向需要先说清。二分类准确率、加权 F1 和相关性越高越好，平均绝对误差和 ShortErr 越低越好。一致准确率高说明模型在模态一致时稳定，冲突准确率高而 ShortErr 低才说明模型在打架时用了非言语证据。由于语言捷径片段中持续答负就能做对 61.9%，且把纯文本答案反转 alone 就能做对 94.4% 而非言语捷径几乎全错，论文强调必须把语言捷径准确率与非言语捷径准确率和配对视图一起读，不能单看前者。

### 主结果在什么条件下成立，配对视图说明了什么

先看零样本大模型的总体表现。它们在 620 个语言捷径片段上远低于随机，最好也只在 30% 左右，而在非言语捷径上大多超过 90%，因为后者文字本身携带标签。把纯文本模型的答案反转就能做对 94.4% 的语言捷径片段却几乎做不对非言语捷径，这说明单看语言捷径准确率会把投机当成多模态推理。融合模型在源语料上训练，继承了标签先验和领域词汇，因此只在家族内比较。

**准确率模式 × 稳健模式：** 准确率模式是只用全量融合视图做一次前向的默认推理，稳健模式是在测试时再跑各单模态视图并让自信分歧覆盖融合决策，前者保持原有推理代价，后者用额外视图计算换取语言捷径上的修正但会损失非言语捷径准确率。

下面先给出家族内比较，表前说明比较问题。同一冻结特征、同一动态缺失训练和同一 7 组合测试下，比较融合主干与可靠性学习在语言捷径和非言语捷径上的准确率，指标越高越好，稳健模式预期以非言语准确率为代价换语言捷径。

| 模型条件 | LS 准确率 | NS 准确率 |
| --- | --- | --- |
| LLM-Fusion | 58.8% | 93.1% |
| CoVeR 准确率模式 | 61.7% | 93.6% |
| CoVeR 稳健模式 | 63.0% | 84.8% |

上表支撑的判断是准确率模式在不增加推理代价时小幅提升两类准确率，稳健模式进一步提升语言捷径但明显降低非言语捷径，存在两类捷径之间的权衡。限制在于融合模型的语言捷径分数受标签先验抬升，不能与零样本直接排名，且均值为 3 种子平均，620 个片段下准确率的 95% 区间仍有约正负 3.9 个百分点。读者应把它与下一张配对视图结果对照，而不是只记绝对值。

再看加文本是否导致错误，表前说明配对比较的公平性。同一模型同一片段，先看静音视频或音视频，再看加文本后，指标是准确率下降幅度和由对变错的比例，下降越大或变错越多说明文字覆盖越严重。

| 配对比较 | 结果 |
| --- | --- |
| 静音视频加文本后 3 个视觉语言模型总体 | 46.1–53.1 points 下降 |
| 音视频做对后加文本变错 | LLM-Fusion 32.2%，CoVeR 30.1% |

上表说明加文本在同一片段上造成大幅下降，可靠性学习把由对变错的比例从 32.2% 降到 30.1%，是不依赖标签先验的直接证据。但它仍留下 30% 左右的覆盖错误，不能理解为已解决冲突。图注中 3 个模型各自下降 47.9、46.1 和 53.1 个点，总体区间与上表一致。

要观察这种下降在原始像素上是什么样子，请带着比较同一片段两种输入的任务看下面这张条形图。

> **看图路径：** 1. 先确认横轴是准确率而非误差率；2. 对比每组绿色静音视频条与蓝色加文本条的长度差；3. 记住三组下降幅度都超过四十个百分点

![原论文 Figure S2：Figure S2: Adding the transcript on the same 620 LS clips.](/audio-paper-digest-blog/images/papers/2611.20349/figure-6-e5aa4b1abbaefdef.png)

*论文图 6。原论文 Figure S2:：“Figure S2: Adding the transcript on the same 620 LS clips. Accuracy falls by 47.9, 46.1 and 53.1 points for Qwen2.5-VL, InternVL3 and LLaVA-OV, respectively.”。*

这张图每组都有绿色长条和蓝色短条，绿色是静音视频，蓝色是视频加文本，3 组蓝色都大幅短于绿色，分别对应 47.9、46.1 和 53.1 个点的下降。它帮助理解前文区间数字不是跨模型平均的假象，而是每个视觉语言模型在同一 620 片段上都出现文字加入后丢失原本可见证据的现象。

最后看 4 个情感基准的总体提升，表前说明比较条件。同样结构和同样推理代价下，可靠性学习相对主干的平均相关性和二分类准确率提升，相关性经费舍尔变换平均，准确率排除中性标签，越高越好。

| 对比 | 平均相关性提升 | Acc2 提升 |
| --- | --- | --- |
| CoVeR 相对 LLM-Fusion，四数据集顺序为 MOSI/MOSEI/SIMS/SIMSv2 | +3.2/+1.6/+3.4/+2.2 points | +1.4/+0.8/+3.4/+1.4 points |

上表支撑的判断是在不读缺失特征的前提下，可靠性学习在 4 个数据集上同时取得最好准确率、F1、相关性和最低误差，且在中文数据集上优势更大。限制是 9 种基线中 5 种仍被允许读缺失特征作目标，主干与本文方法反而没有这种便利，因此这不是同等信息量的胜负，而是更少信息下仍取得更好的结果。国际情感交互上也有约 1.0 个相关性点超过主干、约 5.4 个点超过最好传统方法的报告，但视觉信息更强，结论不宜直接搬到其他分布。

### 测试时覆盖和训练门控各自付出什么代价

论文先用冻结主干验证预测分歧是否有用。让自信分歧的非文字视图覆盖融合决策，阈值越小覆盖越频繁，冲突准确率上升但一致准确率和平均相关性下降。表前说明这是在同一主干和同一视图上的阈值对比，冲突准确率越高越好，一致准确率和相关性越高越好，预期二者存在 trade-off。

| 条件 | Avg Corr（×100） | 一致准确率 | 冲突准确率 |
| --- | --- | --- | --- |
| LLM-Fusion | 50.7 | 94.1% | 21.7% |
| 测试时覆盖 | 47.8 | 92.5% | 33.9% |

上表说明未经训练的裁判能把冲突准确率从 21.7% 提到 33.9%，但一致准确率从 94.1% 掉到 92.5%，平均相关性从 50.7 掉到 47.8，证明分歧信号有用但裁判不可靠。论文还报告隐状态差异门几乎不触发且不改变 ShortErr，学习型可靠性门和单纯冲突加权都不如完整方法，单纯加单模态多任务虽提相关性但冲突改善有限。

可靠性学习的消融在中文数据上分离了两部分。无门控的单模态监督比主干提升平均相关性 2.6 个点和冲突准确率 2.6 个点，再加分歧门又带来约 2.9 个相关性点和 6.4 个冲突点，说明抑制不兼容的融合监督超出单纯学习单模态语义的收益。 late 层文字依赖在冲突样本上从 0.81 降到 0.74 左右，裁判分歧的区分度从 0.72 升到 0.86。代价是训练要同时跑 4 个视图，时间约为 5.7 倍。

放大模型并不能替代上述改动。从 0.5B 到 1.7B 的 5 个解码器在其他条件固定时，相关性停在 48.9 到 49.9 之间，冲突准确率在 35.5% 到 46.8% 之间无单调趋势，每个主干去掉文字后仍能做对 60% 到 70% 冲突样本，说明证据一直都在，只是融合时被压住。零样本 7B 相对 3B 也只多做对十余个片段，进一步支持瓶颈不在规模而在冲突监督的处理方式。

### 结论在哪些边界之外不再成立

首先，英文数据集的冲突集由外折专家判定，专家本身在文字上强而在视听上弱，挑出的冲突集偏小且保守，不能代表所有自然冲突。中文数据集虽有人标单模态标签，但总量依然有限，冲突样本在测试集中只占少数，基于它们的准确率波动较大。

其次，900 片段只保留模型可检测的捷径，经过读者面板和人工验证，意味着文字确实误导强读者且非言语证据确实可读，现实中更隐蔽或更模糊的冲突不在此列。对照片段被排除在发布之外，多数投票准确率也被保留规则固定，不能当作结果来引用。

最后，可靠性学习需要单模态标签和已知的主导模态。在中文数据上有人标可用，在英文和自提特征上依赖外折专家预测，标签噪声会传给裁判。主导模态在 4 个基准上都是文字，若换到视觉更强的数据集，锚点是否仍选文字需要重新验证。稳健模式的提升以非言语捷径为代价，部署时要按任务更怕哪类错误来选择，而不是默认稳健一定更好。

### 复现第一步做什么，需要哪些超参数和协议

复现应从主干开始。按原文把每模态池化到 50 步，音频视觉用训练统计做标准化，投影到大模型嵌入空间，提示词按 8 种可用组合分别分词并左填充到等长，保证各视图版式对齐。用 Qwen3-0.6B 加低秩适配，只训练注意力投影、投影层、特殊词元、融合词元和头，融合词元数为 4，任务权重 10，一致和多样性权重各 1，批量 32，30 轮，国际情感交互等按 20 轮或 15 轮调整。

再加裁判训练。每个小批量同时跑全量和 3 个单模态视图并保留梯度，缺失模态不进单模态损失也不进门控，标签归一化到 0 到 1，中性点 0.5，阈值在 0.2 到 0.4 间按验证集选择，单模态权重在 0.5 到 2 之间选择，秩在 16 和 32 之间选择，学习率在 2 乘 10 的负 4 次方附近，滑动平均按数据集取舍。评估必须遍历 7 种测试组合并做 3 到 5 种子平均，相关性用费舍尔变换平均，准确率排除中性。

复现只能按论文文字和补充材料重写训练循环和特征提取，国际情感交互等自提特征需自行实现人脸检测、表情特征和说话人侧判断。

### 什么时候值得尝试，还缺哪项验证

当任务中文字很强但关键错误恰好是文字误导时值得尝试，例如讽刺、礼貌拒绝、反语报告，以及客服或会议中表情与措辞不一致的片段。若数据本身模态基本一致，或缺失完全随机且无系统性冲突，本文方法的收益可能很小，不必引入多视图训练的额外开销。

行动顺序是先按单模态判断把验证集分成一致和冲突，测主干在冲突上去掉文字能否做对，若能做对而加文字就错，再引入单模态监督和分歧门。先用准确率模式验证相关性和冲突准确率是否同向提升，再按业务对两类捷径的容忍度决定是否开稳健模式。

还缺的验证包括跨语种和跨场景的冲突集是否同样有效，主导模态非文字时锚点如何选择，以及单模态标签有噪声时裁判是否稳定。容易产生的误解是把语言捷径准确率高当成多模态理解强，实际上反转纯文本答案就能刷高该指标，必须同时看非言语捷径和同一片段加文本前后的配对变化，才能判断非言语证据是否真被用上。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.20349v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-17/)
