---
title: "Large Language Models as a Universal Searcher for Open-World Automated Machine Learning"
date: 2026-11-12
draft: false
tags: [说话人验证, SFT, 大语言模型, 进化优化]
categories: [论文速递]
description: "论文要解决跨任务跨模态的联合自动机器学习问题，用统一数字编码加排序式大模型搜索器，只在单域视觉轨迹上训练，就在分割、说话人确认和文生图上取得可复述的零样本效果，但大模型训练仍需近 896 GPU-days 量级的代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.12791"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "一个大模型搜索器如何同时调结构、超参数和数据配比"
paper_digest_original_title: "Large Language Models as a Universal Searcher for Open-World Automated Machine Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.12791v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.12791v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.12791v1.pdf"
paper_digest_primary_task: "说话人验证"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speaker-verification","label":"说话人验证"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"method","id":"method.evolutionary-optimization","label":"进化优化"}]
paper_digest_primary_method: "SFT"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文要解决跨任务跨模态的联合自动机器学习问题，用统一数字编码加排序式大模型搜索器，只在单域视觉轨迹上训练，就在分割、说话人确认和文生图上取得可复述的零样本效果，但大模型训练仍需近 896 GPU-days 量级的代价。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxuan Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jihao Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weikang Shi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xijie Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Linda Wei"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mingjie Zhan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Aojun Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rui Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hongsheng Li"}]
paper_digest_abstract_sha256: "a8a87946675ac428ded6975fb876ae85e08114235b1c7aecfc6c016270f7d2e3"
paper_digest_sidecars: {"citation.bib":{"sha256":"c0ee31652cb078f40cdedc6e0cc4b24eae5fbc60b301e546179a54be1521478e","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12791/citation.bib"},"citation.json":{"sha256":"abe70e248b939b6a8e4a466a41ae744c8e7c3014c0eece82b9b9943b546e51b5","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12791/citation.json"},"citation.ris":{"sha256":"d2f68303b56fe794ee068fc94d6a2b820af9b6bdb05a9b6121813ae8a20eeb5d","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12791/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b35d39c3b88afd6e15b5e4e2a97526a8df22dab17ad7c83ae6ec8533446a6872","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12791/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "7492c9baf15910030b70a5e73f8aef179090628d0e214100f947fe464a3417dc"
paper_digest_api_reader_plan_sha256: "efd1c32c1960862313b46f70f7df7a33bb75d1eb8e7bf6a796d761e3218ada8c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "36bf587d2bbd3b01ec3f47c51156a0efb1d9000df66f3a8339fe12146c5de634"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9f98c693fcac35107ff409529c1fc2c049e33b808097f8f7b88797d2478ebb8d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "492322e9451598172333d93eee5bcfd727f868f9b1c0c48a8cd5cd97c86b3887"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ef116539cebce789492d9e73c4c595d377eed9e415ec6b38874cec03d3fc2127"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 一个大模型搜索器如何同时调结构、超参数和数据配比

> 英文题目：*[Large Language Models as a Universal Searcher for Open-World Automated Machine Learning](https://arxiv.org/abs/2611.12791v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[说话人验证](/audio-paper-digest-blog/papers/?concept=task.speaker-verification)
- **研究方法**：[SFT](/audio-paper-digest-blog/papers/?concept=method.sft)；[进化优化](/audio-paper-digest-blog/papers/?concept=method.evolutionary-optimization)
- **模型家族**：[大语言模型](/audio-paper-digest-blog/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Yuxuan Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jihao Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Weikang Shi：机构信息未能在本次解析中与作者逐人可靠绑定
- Xijie Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Linda Wei：机构信息未能在本次解析中与作者逐人可靠绑定
- Mingjie Zhan：机构信息未能在本次解析中与作者逐人可靠绑定
- Aojun Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Rui Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Hongsheng Li：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

要解决的问题是现有自动机器学习按领域定制搜索空间，把模型架构、训练超参数、数据配比孤立优化，换数据集、换架构空间和换模态后性能大幅下降，而为每个新任务采集训练轨迹又需要反复训练评估，代价过高。论文提出统一数值编码NCode，把每组架构、超参数和数据配比映射为离散数字序列，为跨任务搜索提供统一输入。先从NAS-Bench-301在CIFAR-10上的架构与性能记录出发，经随机边剪枝构造多样子空间并采样配对，再切分为已评估历史序列与未评估候选池，形成约228000条排序轨迹。再用这些轨迹对LLaMA-3.1-8B做全参数监督微调，训练搜索器读入历史NCode-奖励对，从候选池中选出期望最好的一个，而不直接生成完整编码。推理时冻结搜索器，最后把选出的编码送入早停代理评估得到替代奖励，再写回最多保留最优200对的历史缓冲继续循环，最优配置进入完整重训，分割、音频说话人验证和文生图均直接复用该搜索器。在GenEval文生图评测上，优化后模型总体得分为0.91，高于同一搜索空间下OptFormer的0.84，论文报告大规模训练耗费896 GPU天。该结论适用于论文给定的代理评估与重训流程，跨全新模态与更大搜索空间的稳定性尚未充分验证。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音和音频读者为何要关心这篇跨模态 AutoML

这篇论文研究的不是某个语音模型，而是做模型的人工调参过程本身。对刚进入语音、音乐或音频领域的研究生来说，典型任务是这样的：输入是一段波形或语谱图，目标可能是说话人确认、分类或生成，输出是标签或波形，中间必须保留对任务关键的时频结构和判别信息。

传统做法是人工试网络结构、学习率、数据增强比例，换一个数据集或从视觉换到音频就要重来。论文想把这个试错循环交给一个大语言模型搜索器，让它读历史试验记录，直接挑下一组值得试的配置。理解这一点后，后面的编码、排序和零样本迁移才有意义。该搜索器仅在有限单域视觉轨迹上训练，却要零样本地联合优化模型结构、训练超参数和数据配比，且无需针对新任务微调，这正是开放世界泛化的核心设定。

### 已有 AutoML 路线卡在哪里

论文把已有工作分成两类。第一类是传统 AutoML，从强化学习、基于梯度的 DARTS 到基于 Transformer 的超参数优化，再到用图扩散模型采样结构，它们的共同点是搜索空间写死在 1 个任务里。论文举了一个反例：DARTS 在 CIFAR-10 原空间准确率可达 97.24%，搬到 NAS-Bench-201 后掉到 39.77%，即使数据集和优化器相同，结构变化就导致崩塌。

第二类是基于大语言模型的 AutoML，如 AutoML-GPT、LLMatic、CoLLM-NAS。论文认为它们要么依赖任务特定的微调和手工提示，要么把搜索写成直接生成文本，容易产生非法配置，在大离散空间里学习难度高。前作 LM-Searcher 只做了结构搜索，本文要把结构、超参数、数据配比三者联合起来，且不为新任务微调，并把直接生成完整序列改写为从候选池中排序选择最优候选以降低学习负担。

### 论文要解决的具体问题是什么

论文明确列出 3 个障碍。第一是开放世界泛化：数据分布、结构空间、任务定义都是新的，旧搜索器不能直接搬。第二是 3 类选择的强耦合：结构、训练超参数、数据配比互相影响，分开调容易陷入局部最优。第三是训练数据贵：每个新任务都从零训练评估一遍模型，学一个会搜索的模型本身就很贵。

因此问题定义是：在只用有限单域视觉轨迹训练搜索器的前提下，让它能零样本地在新域、新模态、新联合空间里挑配置。输入是已评估的配置加分数历史和一池未评估候选，输出是从候选池里选出的一个最有希望的配置，而不是凭空生成一个字符串。这种黑盒组合优化被统一为离散序列上的条件排序问题，搜索器只见数字与奖励而不依赖领域先验。

### 整体流程如何把一次试验变成下一次选择

搜索是一个闭环马尔可夫决策过程。先随机采样 5 个初始配置，编码成数字串，经代理评估得到奖励，组成初始历史缓冲。每轮用进化加随机生成一池新候选，把历史缓冲和候选池一起拼成提示，冻结的大模型搜索器从中选出一个最优候选，解码回真实训练管线做短训练评估，再把新分数写回缓冲。缓冲超过 200 条时只保留分数最高的 200 条，以适应上下文窗口。

下面这张总览图值得先看，它把传统分散适配与本文统一编码加联合优化的差别画了出来，下半部分展示了 3 类异构选择如何变成同一种数字串。

> **看图路径：** 1. 先看上半部分左右对比：左侧分散适配与右侧统一编码的箭头走向；2. 再看下半部分结构、超参数、数据配比如何汇成同一数字串；3. 注意右下角三类最优输出是并列产生的

[![原论文 Fig. 1：Overview of the proposed LLM-based open-world AutoML framework and the universal NCode representation.](https://arxiv.org/html/2611.12791v1/fig1.png)](https://arxiv.org/html/2611.12791v1/fig1.png)

*论文图 1。原论文 Fig. 1:：“Overview of the proposed LLM-based open-world AutoML framework and the universal NCode representation.”。*

图的上半部分左侧是每个模型各自适配一条路，右侧是不同视觉、文本、音频任务都先经过通用编码，再由同一个大模型搜索器同时输出最优结构、最优训练配置和最优数据组合。下半部分把神经结构、超参数、数据分布权重汇成统一数字字符串，右侧示例表说明不同位置的数字分别对应操作、核大小、学习率、采样权重等，编码表只是示意，实验用的是更完整的码本。该循环与任务和模态无关，是零样本迁移的结构基础。

### NCode 如何把结构、超参数和数据配比说成一种语言

NCode 是本文的核心表示。形式上，一个配置 a 属于搜索空间 S，由 n 个决策组成，每个决策可以是操作、连接、超参数或数据比例。编码函数 f 把 a 映射成离散序列 c=(c1 到 cn)，每个 ci 是该位置选项的整数编号。网络拓扑被看作有向无环图，边代表操作，节点代表求和特征图，例如 NAS-Bench-201 的一个单元是 6 条边各选 5 种操作之一，就变成 6 个数字。

关键在于它把黑盒组合优化统一了：结构、学习率、权重衰减、数据采样权重都只是序列上不同段的数字。图 1c 的例子显示，超参数段、结构段、数据比例段拼成一串，搜索器看到的永远是数字加历史分数，不需要知道背后是卷积还是音频增强。

**NCode × 联合搜索空间：** NCode 是把结构、超参数、数据配比都映射成离散数字串的统一编码，联合搜索空间是这三类选择拼成的组合优化对象；NCode 让本来异构的选择有了相同语言，搜索器才能在同一个排序任务里同时挑三者，组合后才可能学到跨域可迁移的搭配规律。

### 训练轨迹从哪里来，为何不直接生成完整编码

直接收集 3 类联合优化的训练样本太贵，论文转而只用现成的 NAS-Bench-301，它包含约 10 的 21 次方量级的结构及其在 CIFAR-10 上的性能。为了让轨迹多样，作者把完整空间看成全连接有向无环图，以概率 0.5 独立剪每条边，得到一个局部子空间，多次重复就得到很多结构分布不同的子空间。每个子空间随机采 100 到 200 个模型，配上性能，划分成历史序列 H 和未评估候选池 C。

下面这张数据构造流水线把上述切分画得很清楚，左侧是大空间剪出子空间，中间是采样评估配对，右侧是历史加候选构成排序目标。

> **看图路径：** 1. 从左侧完整 DAG 到下方多个剪枝子空间的分支关系；2. 中间 NCode 与指标配对表格的采样规模标注；3. 右侧历史序列与候选池如何构成排序目标

[![原论文 Fig. 3：Pipeline of the subspace-sampled data curation strategy.](https://arxiv.org/html/2611.12791v1/fig6.png)](https://arxiv.org/html/2611.12791v1/fig6.png)

*论文图 3。原论文 Fig. 3:：“Pipeline of the subspace-sampled data curation strategy.”。*

像素可见的是：左侧绿色起点红色终点的稠密图经剪枝变成 3 个稀疏子图，中间框标注约 N 个模型且 N 在 100 到 200 之间，下方表格列出 NCode 与多指标，右侧上方是已评估的历史对序列，下方是未评估候选，底部目标写成在给定历史下选期望性能最高的候选。这样大空间找唯一最优的难题被改成在小池子里排序，学习负担大幅下降。

最终得到约 228,000 条优化轨迹实例，这是主搜索器监督微调的全部材料。

**历史缓冲 × 候选池：** 历史缓冲是已评估过的 NCode 加奖励的序列，是搜索器的上下文记忆，候选池是本轮未评估的新 NCode 集合，是待选项；搜索器对照历史缓冲给候选池排序，选中者经代理评估后再写回缓冲，循环才形成闭环。

迭代搜索的闭环在另一张图中更具体，历史试验、候选生成、大模型选择、训练评估四块围成一圈，顶部还标注了超参数、结构、数据配比 3 段数字的实例。

> **看图路径：** 1. 沿历史缓冲到候选生成再到大模型选择的顺时针循环；2. 顶部两组超参数加结构加数据配比的数字串对应关系；3. 右下角选中候选经训练评估后写回历史的回路

[![原论文 Fig. 5：Overview of our iterative LLM-based search framework.](https://arxiv.org/html/2611.12791v1/fig2.png)](https://arxiv.org/html/2611.12791v1/fig2.png)

*论文图 5。原论文 Fig. 5:：“Overview of our iterative LLM-based search framework.”。*

图中可见 Trial 113 和 Trial 199 等历史条目带有奖励小数，候选列表给出多个 cell 编码，大模型选中 Candidate 2 后经训练评估得到新奖励再写回历史，顶部两组数字串显示学习率、隐层维度、数据权重如何分别对应 0、1、2 等编号。这种任务无关的循环是零样本迁移的结构基础。

**早停代理评估 × 完全重训练：** 早停代理评估是用 1 个 epoch 或 2500 步等极短训练得到替代分数，用于搜索中快速比较，完全重训练是对选出的最优配置按完整轮数训练用于最终报告；前者省成本但只是近似，后者才是论文主结果的依据，两者分工不能混淆。

### 搜索器本身如何训练，解释性推理又如何加上去

主搜索器是 LLaMA-3.1-8B 全参数监督微调，训练数据就是上述约 228,000 条轨迹，上下文截断 20480，训练 3 个 epoch，学习率 1.0×10 的 -5 次方，余弦调度加 10% 预热，单节点 8 卡用 DeepSpeed ZeRO-2 加 bfloat16 混合精度，每卡批量 1、梯度累积 2。它的任务不是生成完整 NCode，而是给定历史从候选池挑最优，论文消融证明这显著更易学。

解释性分支另起一个 Qwen3-8B，用 GRPO 强化学习做后训练，只抽 2000 条代表性轨迹，训练 3 个 epoch，每条提示采样 8 个候选回答，用准确率奖励加格式奖励的加权和算总奖励，再组内算优势。实现上用了 LoRA 只调注意力的 q_proj 和 v_proj，最大提示 10240、补全 8192，配 vLLM 加速采样，4 节点 32 卡用 ZeRO-3 加 CPU 卸载训练。Qwen 分支性能与主分支相当，因此被当作解释主搜索器逻辑的代理，但实际大规模搜索仍用 LLaMA 分支以省去思维链的 token 开销。

下面这张 GRPO 示意图展示了输入、采样思维链与规则奖励的关系。

> **看图路径：** 1. 左侧输入框中系统提示、历史对和候选列表三分工；2. 中间三条思维链为何只有一条打勾；3. 右侧准确率奖励与格式奖励如何合成组优势

[![原论文 Fig. 2：Overview of post-training the LLM with CoT reasoning capabilities using Group Relative Policy…](https://arxiv.org/html/2611.12791v1/fig3.png)](https://arxiv.org/html/2611.12791v1/fig3.png)

*论文图 2。原论文 Fig. 2:：“Overview of post-training the LLM with CoT reasoning capabilities using Group Relative Policy Optimization.”。*

左侧输入框写明系统提示是搜最优 NCode，下方给出历史对如 231344 配 90.89% 和候选如 243334 等，中间 3 条思维链分别讨论前 3 位全 3、高频 3、结构相似，只有选 333111 的一条打勾，右侧把准确率与格式奖励变成 r1 到 rG 再算优势 a1 到 aG 去优化模型。

**监督微调 × GRPO 思维链：** 监督微调是让 LLaMA-3.1-8B 学会看历史选最优候选的主搜索能力训练，GRPO 思维链是让 Qwen3-8B 在同样轨迹上再学出自然语言推理过程的解释性训练；前者负责实际搜索性能，后者负责揭示策略如何从探索转向利用，两者模型不同、用途不同。

**位置锚定 × 组合协同：** 位置锚定是认定某位置上的特定数字决定好坏的单点启发式，组合协同是认定多个位置的数字搭配才产生增益的多点交互判断；前者在简单的 NAS-Bench-201 后期占主导，后者在复杂的 GenEval 联合优化中更重要，说明任务复杂度改变了推理策略。

### 四个评测场景各自比什么、条件如何控制

论文设了 4 个场景。跨域图像分割：在医疗内镜 Kvasir-SEG 和 CVC-612 上搜索，在 ISIC2017 皮肤、C AMO 伪装、SBU 阴影、Leaf 农业、Road 遥感上零样本复用。结构空间是 SAM 的 ViT 编码器上 32 个 LoRA 模块的秩从 3、6、12、24 里选，约 10 的 19 次方，超参数含 focal 的 gamma、权重衰减、学习率。搜索时每个候选只训 1 个 epoch 做代理，找到最优后再全量训 30 个 epoch，搜索与全量比约 1 比 30。

跨模态说话人确认：在 3D-Speaker 音频集上进行，含多设备、多距离、多方言 3 条赛道，评价 240 个未见说话人、18782 条语音。结构管 Mel 维数、ERes2NetV2 宽度、嵌入维度，超参数管增强概率、学习率、动量、权重衰减。搜索仍只训 1 个 epoch，全量是 70 个 epoch 加 7 个 epoch 大间隔微调，共 77 个 epoch，比约 1 比 77。

大规模文字生成图像：用 MM-DiT 骨干，搜隐层维度、单双流块深度，超参数搜学习率、权重衰减、优化器 beta 和 epsilon，数据配比在 BLIP3o 系列、LAION 高分辨率、Midjourney、X2I2、Echo-4o 之间搜 1.0 到 6.0 的采样权重。搜索用半深度 1/2 宽度的代理模型跑 2500 步，全量是 1,300,000,000 参数跑 100,000 步，分 256 分辨率 85000 步、512 分辨率 5000 步、微调 10000 步，步数比约 1 比 40，在 128 卡上约 7 天。

标准 NAS-Bench-201：在 CIFAR-10、CIFAR-100、ImageNet-16-120 上查表评估，每数据集跑 5 次各 200 步，取每次验证最优的 5 个结构报平均测试准确率。

### 分割与说话人确认的数字在什么条件下成立

分割表显示联合搜结构加超参数的 Ours 在 7 个域上全面领先，且只比纯结构搜索的旧版本高，说明联合的增益来自超参数协同。但要记住搜索只在医疗两集上做，其他域是直接复用同一配置，因此结论依赖跨域可迁移假设，而非每个域重搜。指标方向是 S、E、Jac、F 加权和 IoU 越高越好，只有 BER 越低越好，表中均值加减 5 次运行标准误。

音频跨模态是本文对语音读者最关键的证据。搜索器只见过图像分类轨迹，却直接在音频上排序挑配置，条件是搜索时仍用音频数据做 1 个 epoch 代理评估，大模型本身不微调，但被选配置的声学模型是要在音频上训练的。

下表整理了论文正文直接报告的两组可运行策略对比，比较问题是同一音频搜索空间下大模型搜索器能否打败人工强基线和另一 AutoML 方法，指标越低越好。

| 条件 | 指标 | OptFormer 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 3D-Speaker 平均 | EER | 10.20 | 9.21 | 可运行搜索策略 |
| 3D-Speaker 平均 | minDCF | 0.771 | 0.715 | 可运行搜索策略 |

本方法平均 EER 9.21、minDCF 0.715，优于 OptFormer 的 10.20 和 0.771，也超过人工调优的 ERes2NetV2。限制是论文只报了平均值和 3 条赛道的明细在原表，标准差在正文未展开，且只在 3D-Speaker 一个音频库上验证，不能推广到音乐或远场会议等其他音频任务。未胜出项是多设备单项上本方法 EER 6.88 略逊于 ERes2NetV2 的 6.82，说明并非每条赛道都最优。

### 文生图与标准 NAS 基准证明了什么、代价是什么

文生图是规模最大的验证。比较问题是在相同联合空间下，谁的 GenEval 组合对齐分数更高，分数越高越好，Overall 是单体、双体、计数、颜色、位置、属性绑定六项的无加权平均，每提示采样 4 张、推理 50 步、CFG 5.0。

| 条件 | 指标 | 差值含义 | 本方法数值 | 比较对象 |
| --- | --- | --- | --- | --- |
| GenEval 总体 | Overall 分数 | 本方法最高 | 0.91 | 可运行联合搜索 |
| 相同空间 vs OptFormer | 绝对提升 | 高 0.07 | 0.91 | OptFormer |
| 相同任务 vs Qwen-Image | 参数效率 | 高 0.04 | 0.91 | 20B 参数模型 |

0.91 是论文报告的当时最高分，且只用 1.1B 到 1.3B 参数和 50B token 就超过 20B 的 Qwen-Image 和 7B 的 BAGEL，说明联合搜结构加超参数加数据配比找到了更省的组合。但代价是摘要披露的 896 GPU-days 和正文的 128 卡 7 天全量训练，搜索本身的代理成本另计，复现需要大算力。定性例子显示本方法能画出红橙子、白停止牌、紫酒杯等反先验颜色，以及 vase 在 horse 右侧等空间关系，而 FLUX.1-dev 出现概念混淆，OptFormer 出现马缺腿、沙发变形，但这只是个例，不能当作整体人工评价。

NAS-Bench-201 上本方法 ImageNet-16-120 测试 46.51%，与专用 CoLLM-NAS 的 46.79% 接近，超过 DiNAS 的 45.41% 和 LLMatic 的 45.87%，CIFAR-10 测试 94.20%、CIFAR-100 测试 72.96%，证明通用搜索器在标准基准上没有明显掉队，这是做开放世界的前提，但不是说它在该基准上全面最强。

### 拿掉排序改写、剪枝采样和联合搜索会发生什么

论文在 GenEval 上做了联合必要性消融：只搜结构得 0.86，只搜超参数加数据配比得 0.89，完整联合得 0.91；若用回手工结构或手工超参数加数据，分数掉 0.07 和 0.09。这支持三者必须一起搜，分开调会丢协同。

在 NAS-Bench-201 上，拿掉剪枝采样后 CIFAR-10、CIFAR-100、ImageNet-16-120 全面下降，说明子空间多样性重要；拿掉排序改写、强制直接生成完整 NCode 则灾难性崩塌，ImageNet-16-120 测试从 46.51% 掉到 42.53%，证明排序比生成易学得多。换 Qwen3-8B 做搜索器，CIFAR-100 测试 73.13% 与 LLaMA 的 72.96% 相当，说明加思维链没有损害搜索能力。

这些消融的适用条件是同一搜索预算和同一代理评估协议，换预算或换全量训练轮数，差值会变化。

### 结论的边界与容易误解的地方

首先零样本指的是大模型搜索器不为新任务梯度更新，不是指完全不用目标域数据。每次搜索仍要在目标任务上做 5 个随机初始评估和每轮 1 个 epoch 或 2500 步的代理评估，没有这些历史分数，排序无从谈起。

其次训练只用 CIFAR-10 分类轨迹，跨到分割、音频、文生图能 work，不代表能无条件跨到任意音乐任务。音频只验证了说话人确认，没有验证音乐生成、音事件检测等，指标也只是 EER 和 minDCF，没有报告延迟和推理成本。

第三，896 GPU-days 和 128 卡 7 天说明最强结果依赖大算力，小实验室直接复现全量文生图训练不现实，更可行的是复现 NAS-Bench 查表和音频小模型搜索。最后思维链的 6 种模式是 Gemini-2.5-Pro 事后分类的，策略占比随时间的变化是观察到的相关趋势，不能直接当作因果证明模型在有意规划。

### 如果要复现第一步做什么、需要补哪些验证

值得尝试的时机是：你的任务有明确的离散配置表、一次短训练就能给出有区分度的代理分数、且有预算做几十到上百次代理评估。复现第一步不是训大文生图，而是先在 NAS-Bench-201 上跑通查表循环：把结构编成数字串，随机取历史，随机造候选池，让开源大模型做排序选择，对比随机搜索，看 200 步内能否接近 46% 量级的测试准确率。

关键超参数要保留：初始 5 个随机点、缓冲上限 200 取优保留、截断 20480、学习率 1.0×10 的 -5 次方、3 个 epoch、228k 轨迹的构造方式。音频复现要固定 Mel 维数、增强概率、学习率 0.3、权重衰减 5×10 的 -5 次方、动量 0.85 的范围，并明确 1 个 epoch 代理与 77 个 epoch 全量的对应关系。

缺的验证是：同一音频配置的多次重训方差、不同随机种子的稳定性、在音乐或噪声鲁棒集上的外推，以及代理分数与全量分数的相关系数。没有这些，就不能把一次最优说成稳定提升。关于资源，论文未绑定可下载的代码、权重或数据集，本次未发现作者资源可用，因此应视为未公开，只能按论文描述自行实现。

### 一句话总结与下一步

这项工作把异构的 AutoML 选择统一成数字串，把难学的生成问题改成易学的排序问题，只用单域视觉轨迹就让同一个搜索器在分割、音频和文生图上挑出有竞争力的联合配置，并在 1,300,000,000 参数 DiT 上以小参数实现 0.91 的 GenEval 分数，同时用 GRPO 思维链揭示了从邻域变异探索到位置锚定或组合协同利用的转移。

对语音和音频研究生而言，可借鉴的是编码加历史排序的范式：把声学结构、增强和优化超参数同样编号，用短训练分数做上下文，让大模型做选择。但要记住代价和边界：目标域的代理评估不可省，大算力不可少，音频证据目前仅限说话人确认。下一步值得做的是在自己的音频任务上验证代理与全量的一致性，再谈是否值得把数据配比也纳入联合搜索。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.12791v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
