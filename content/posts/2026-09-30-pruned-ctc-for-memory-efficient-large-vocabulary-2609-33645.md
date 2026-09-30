---
title: "Pruned CTC for Memory-Efficient Large-Vocabulary ASR Training"
date: 2026-09-30
draft: false
tags: [语音识别, CTC, 流式处理, 大语言模型]
categories: [论文速递]
description: "针对原生大词表 CTC 需物化帧乘词表激活的问题，论文用目标词并集加 blank 做对齐、用全词表归一化加分块重算保持等价，并以有限波束剪枝和因果查询读出把预训练 LLM 做成非自回归与流式识别，在编码器上全步显存降 2.3 至 5.1 倍、LLM-CTC 保持在 LLM-CE 的 7% 相对词错率内并快 7.2 至 10.3 倍，代价是每步增加约 14 至 17% 时间与波束近似带来的非精确性。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.33645"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只算转录里出现的词：剪掉词表维度的 CTC 如何等价省显存"
paper_digest_original_title: "Pruned CTC for Memory-Efficient Large-Vocabulary ASR Training"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.33645"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.33645.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.ctc","label":"CTC"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "CTC"
paper_digest_score: 8.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对原生大词表 CTC 需物化帧乘词表激活的问题，论文用目标词并集加 blank 做对齐、用全词表归一化加分块重算保持等价，并以有限波束剪枝和因果查询读出把预训练 LLM 做成非自回归与流式识别，在编码器上全步显存降 2.3 至 5.1 倍、LLM-CTC 保持在 LLM-CE 的 7% 相对词错率内并快 7.2 至 10.3 倍，代价是每步增加约 14 至 17% 时间与波束近似带来的非精确性。"
paper_digest_authors: [{"affiliations":["Shanghai Jiao Tong University"],"name":"Yifan Yang"},{"affiliations":["University of Cambridge"],"name":"Xiaoyu Yang"},{"affiliations":["Tsinghua University"],"name":"Zengrui Jin"},{"affiliations":["Alibaba Token Hub, Alibaba Group"],"name":"Xian Shi"},{"affiliations":["Alibaba Token Hub, Alibaba Group"],"name":"Yuxuan Wang"},{"affiliations":["Alibaba Token Hub, Alibaba Group"],"name":"Yu Xi"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Ziyang Ma"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Qi Chen"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Ruiyang Xu"},{"affiliations":["Nankai University"],"name":"Hui Wang"},{"affiliations":["Chinese University of Hong Kong"],"name":"Dongchao Yang"},{"affiliations":["Alibaba Token Hub, Alibaba Group"],"name":"Jin Xu"},{"affiliations":["Shanghai Jiao Tong University","SII"],"name":"Xie Chen"}]
paper_digest_abstract_sha256: "162183171d2e5b315b53c03f612353cd9fcc1488ed48ed13af503632e777ac87"
paper_digest_sidecars: {"citation.bib":{"sha256":"cc329243abf4bcd062e0532dcefb39d7ada6ee811554791d79668ecc32ce1155","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33645/citation.bib"},"citation.json":{"sha256":"8a209fad9bba3b8d723aaa8309c27a6aded0dff7ff3f123b2b67c0a47da83b8f","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33645/citation.json"},"citation.ris":{"sha256":"d89be921a74c6adbf15f05a8db5e6ec1bf7ba68d0555072cf657cc2009b78d4b","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33645/citation.ris"},"rethink-context.json":{"sha256":"a773bd01884c064a2b0cb2eeca2d82acebba0b460861707ecc0764ab59176cb8","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33645/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "449dcc25f4ee7a3f21294b51ca7fbe69459523d5d8efb5bc0cdc0fdd91d3a1a4"
paper_digest_api_reader_plan_sha256: "25f4407e03d1446f495923ec5af978f3eb13c333ec72e32122df9051a3960d5f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "69894e377da7d756d943631d03386ca913a18e2bac73b339c43e735829ec0b11"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "e3c47468ae548eee7748961511bf16ff6699fd60bf675a36f18dc0d403f42f26"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "41f3286dbbd37f3bc4b17079380288acdd20cd3af4d48c128628ff57ac75b345"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "e5ef72c18bf19c6e5b3d6d534ac59547a11640f9762906fe0b9f71cd8620e64b"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只算转录里出现的词：剪掉词表维度的 CTC 如何等价省显存

> 英文题目：*[Pruned CTC for Memory-Efficient Large-Vocabulary ASR Training](https://arxiv.org/abs/2609.33645)*

> 标签：#语音识别 | #CTC | #流式处理 | #大语言模型
>
> 评分：**8.7/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1/1.5 | 可复现 0.4/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Yifan Yang：Shanghai Jiao Tong University
- Xiaoyu Yang：University of Cambridge
- Zengrui Jin：Tsinghua University
- Xian Shi：Alibaba Token Hub, Alibaba Group
- Yuxuan Wang：Alibaba Token Hub, Alibaba Group
- Yu Xi：Alibaba Token Hub, Alibaba Group
- Ziyang Ma：Shanghai Jiao Tong University
- Qi Chen：Shanghai Jiao Tong University
- Ruiyang Xu：Shanghai Jiao Tong University
- Hui Wang：Nankai University
- Dongchao Yang：Chinese University of Hong Kong
- Jin Xu：Alibaba Token Hub, Alibaba Group
- Xie Chen：Shanghai Jiao Tong University；SII

## 📌 核心摘要

自动语音识别希望直接使用大语言模型原生词表做非自回归解码，但标准联结时序分类需物化帧乘词表激活，显存随词表线性增长而难以训练。Pruned CTC先按批次收集转录中出现的互异目标词与空白符构成小词表，再用分块投影在线累积完整词表归一化子，最后仅在小词表对数概率上做有限波束前向后向计算。反向传播通过重算各词表分块恢复稠密梯度，使对齐项与归一化项分离而不改变目标函数。相比直接删除无关类别，该机制保留了归一化子并证明了损失与一阶梯度等价，具有实质差异。在GigaSpeech评测设置下，Pruned CTC的WER为11.24%，低于标准CTC的WER 11.27%。在单块H100硬件上搭配18万类词表时全步训练显存降低5.1倍，单步时间推理开销增加17%且精度基本持平。结论适用边界限于已验证的离线与有界历史流式CTC解码，依赖转录词覆盖小词表假设与波束足够大的经验条件，超出该范围的长尾分布与极小波束失败条件尚未验证。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/yfyeung/PrunedCTC> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/openai/whisper-large-v3> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen2-Audio-7B> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-ASR-0.6B> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-ASR-1.7B> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么大词表会卡住训练？

这篇论文研究的输入是语音帧序列，输出是去掉空白符号后的目标词序列。语音识别里帧数通常多于词数，模型需要把长帧序列映射到短词序列。联结时序分类（Connectionist Temporal Classification，CTC）这个方法给词表增加一个空白符号，允许帧与词之间有重复和空白，再把所有能坍缩到同一转录的帧级路径概率加起来作为整句概率。训练目标就是对这些路径求负对数似然。

初学者容易把难点理解为编码器不够强，但论文指出的瓶颈在输出头与损失。标准实现要先算出帧数乘词表大小的对数矩阵，再沿词表做归一化，最后把对数概率送入动态规划。当词表是原生大语言模型词表，例如十几万类时，这几个帧乘词表的数组会超过编码器激活显存，成为训练主导项。论文的输入证据是代码当前可用，已公开在官方仓库，第三方基线模型链接本次可达，但这不改变核心矛盾：路径只用少数类，分母却要用全部类。

因此目标可以复述为三句话。第一，保持话语级监督，不引入帧级标注。第二，不再按词表线性保存激活，但保留全词表归一化。第三，证明这种缩小与全词表计算在损失和 1 阶梯度上完全等价，再叠加一个可控的有限波束近似。后续所有设计都围绕这三句话展开。

### 同任务同监督的已有路线差在哪里？

如果按同输入、同目标、同监督来对照，相关工作分成 3 条线。第一条是省显存的损失。剪枝 RNN-T 限制的是时间与标签区域，词表维度不变；协同 CTC 是为辅助翻译粗化标签；切分交叉熵避免保存全词表对数，但它假设每位置目标已知。

CTC 没有帧级目标，帧后验要靠前向后向在转录上算出来，支撑集只在转录词和空白符号上，而全词表归一化给出稠密梯度。论文的区分正在这里：把小词表对齐与全词表归一化和梯度分开，用分块重算避免物化帧乘词表激活，再单独限制对齐求和。

第二条是 CTC 与大语言模型结合。已有工作有用编码器 CTC 后验做加权输入再自回归解码，有在语音前缀上加辅助 CTC，有把双向语言模型微调做非自回归翻译。论文选择另一条路：以 CTC 为主目标，直接用冻结的原生词表头做非自回归识别，保留因果注意力。第 3 条是流式大模型语音识别，已有工作依赖外部对齐做语音文本交错或按块分配转录段。论文的流式扩展坚持话语级监督，避免训练时需要块级对齐。

这个对照说明论文不是在比较谁的词表更大，而是在相同整句监督下改变计算组织方式。理解这一点后，才能看懂为什么后文要分别报告等价性证明、数值误差和波束丢弃质量，而不是只报告词错率。

### 标准 CTC 的计算到底把显存花在哪里？

沿一个样本走一遍最清楚。设一批有多个话语，每话语有有效帧数和无空白目标。把所有有效帧按行堆成矩阵，行数是总帧数，列数是词表大小。词表头是仿射映射，把每行从头输入宽度映射到词表对数，再按行做柔性最大化（softmax）得到每帧类别分布。损失是对每个可对齐话语，把所有能坍缩到目标的路径概率乘积求和再取负对数。

标准实现要保存多个帧乘词表数组用于前后向。动态规划实际只用空白符号和批内转录出现的标签，当这些类只占词表很小一部分时，大部分列只是为了算归一化分母而被物化。更关键的是不能直接删类，因为删掉有正概率质量的类会改变分母，从而改变目标。论文把这一点写成讨论：约减输入必须保留全词表归一化。

于是问题形式化为如何不保留完整对数矩阵，又得到同样的损失和梯度。论文把单话语损失拆成两项，第一项是每帧全词表对数和指数，第二项是有效路径的指数和。因为每条有效路径只经过选中类，第二项只需选中列，第一项仍需全词表。这就为后文的分块算分母、选中列算对齐、重算拼梯度留下接口。

### Pruned CTC 与 LLM-CTC 的全景是什么？

方法全景可以分成两层。下层是 Pruned CTC，负责让大词表 CTC 可训练。它先按批收集空白符号加去重目标词得到选中集合，再把补集打包成 other 类，保证分母不变。然后只用选中列的对数概率做有限波束动态规划，前向按词表分块在线累加分母，反向按块重算并拼出稠密梯度。上层是 LLM-CTC，负责把预训练因果大模型变成非自回归识别器。它冻结语音编码器和原生词表头，只训练投影与低秩适配参数，加一个可学习的空白偏置，用查询读出提供 CTC 帧，离线看整句，流式看当前块加有界历史。

下图把离线两种监督放在同一因果结构下比较，左侧是逐词交叉熵需要文本词输入，中间和右侧是剪枝 CTC 只需要整句转录，区别只在读出位置落在语音还是查询。读懂这个全景后，再进入符号与公式才不会迷路。

> **看图路径：** 1. 先从下往上看三列的输入：左侧多出文本词输入，中间与右侧只有提示加语音；2. 再看虚线 LLM 框内读出箭头落在语音位置还是绿色查询位置；3. 最后对比顶部监督符号是逐词交叉熵还是对整句的剪枝 CTC

[![原论文 Figure 1：Offline LLM-based ASR under causal attention.](https://arxiv.org/html/2609.33645v2/fig_ctc_llm_arch.svg)](https://arxiv.org/html/2609.33645v2/fig_ctc_llm_arch.svg)

*论文图 1。原论文 Figure 1:：“Offline LLM-based ASR under causal attention.”。*

上图左侧自回归分支在解码时逐个生成词并复用键值缓存，中间语音读出直接读语音位置，右侧查询读出读追加查询位置。三者共享编码器与主干，但 CTC 分支 1 次前向给出全部帧，省掉逐词前向。中间分支每帧只能看到语音前缀，右侧分支每个查询能看到全部语音嵌入，这是后文选择查询读出的原因。离线与流式都用同一有限波束 CTC 目标，只是可见范围不同。

### 选中词、other 列与梯度如何拼出等价性？

先把符号讲清。记帧索引为行，词表为列，对数为帧乘词表矩阵，归一化分母为每行全词表对数和指数。选中集合是批内所有话语选中类的并集，大小记为选中列数，补集为其余词。分组对数把选中列原样保留，再加一列 other，内容是补集的对数和指数。当补集为空时只有选中列。目标转录按选中集合重标号，空白符号排第一。

计算目标是证明分组不改变任何有效路径概率。因为有效路径的非空符号若不在目标中出现后坍缩残留，所以不可能出现，other 符号同样不可能出现在有效路径中。分组保留分母的原理是对类轴的任意划分做对数和指数结合，选中加补集等于全词表，因此选中类的归一化概率不变，重标号只是双射。原文把无剪枝的约减计算称为未剪枝约减 CTC，并证明它与全词表 CTC 作为对数函数的取值和 1 阶梯度都相同。

\[\log p_{v}(m)={Z}_{m,v}-{\lambda}_{m},\qquad{\lambda}_{m}=\log\sum_{u\in{\mathbb{V}}}\exp{Z}_{m,u}.\]

上式说明每帧分布是该行分数减去全词表归一化项，分母依赖全部类。这是不能删列的根源，也是分块累加分母的依据。

\[\mathcal{L}_{n}=\sum_{t=1}^{T_{n}}\log\sum_{v\in{\mathbb{V}}}\exp{Z}_{{\mathbb{I}}_{n}[t],v}-\log\sum_{\pi\in{\mathcal{B}}^{-1}_{T_{n}}(y_{n})}\exp\!\left(\sum_{t=1}^{T_{n}}{Z}_{{\mathbb{I}}_{n}[t],\pi_{t}}\right).\]

上式把单话语损失写成全词表归一化项减去有效路径指数和，第二项只用选中列。第一项仍是全词表，梯度因此对未选中类也不为零。

\[{R}_{m,j}={Z}_{m,\,{\mathbb{U}}[j]}\quad(j=0,\dots,K-1),\qquad{R}_{m,K}=\log\sum_{v\in{\mathbb{O}}}\exp{Z}_{m,v},\]

上式定义分组矩阵，前段是选中列原分数，末列是补集的对数和指数。动态规划只用前段，但分母与选中概率与原来一致。

\[\frac{\partial\mathcal{L}}{\partial{Z}_{m,v}}=p_{v}(m)-\gamma_{v}(m)\qquad\text{for all }v\in{\mathbb{V}},\ m\in{\mathbb{I}}_{n},\ n\in{\mathcal{N}}_{+}.\]

上式给出对数梯度等于帧概率减去给定转录的占据，未选中类的占据为零但仍有归一化梯度。反向按块重算正是为了拼出这一项。

\[\frac{\partial\mathcal{L}_{\beta}}{\partial{Z}_{m,v}}=\operatorname{scatter}_{{\mathbb{U}}}({\bm{G}})_{m,v}-{g}_{m}\,p_{v}(m).\]

上式是有限波束下的分块梯度，第一项把动态规划回传的选中梯度散射回原列，第二项用全词表概率乘行和补上归一化梯度。保留全部路径时它退化为上一式。

**CTC 对齐 × 全词表归一化：** CTC 对齐负责把帧序列映射到无 blank 目标序列，枚举所有能坍缩到转录的路径并求和；全词表归一化负责每帧用全部词表分数算 softmax 分母。两者搭配的原因是有效路径只经过 blank 和转录中出现的词，但分母改变会改变所有路径概率，因此 Pruned CTC 把对齐计算限制在小子集上，同时保留全词表分母，使省显存不改变目标函数。

**词汇约减 × other 类：** 词汇约减负责把每批的计算列从全词表缩小为 blank 加批内去重目标词；other 类负责把剩余词表的指数和打包成一列以复现分母。搭配理由是直接删词会改变归一化，而打包求和利用 log-sum-exp 可结合性完整保留分母，组合后动态规划只需看选中列，而梯度仍能通过分母流向未选中词。

**语音读出 × 查询读出：** 语音读出负责直接把语音位置的 LLM 状态作为 CTC 帧，每帧只能看到增长中的语音前缀；查询读出负责在语音后追加一组可学习共享查询，用查询位置的状态作为 CTC 帧。搭配比较的原因是两者帧数相同且对齐集合相同，但查询位置能直接注意整句语音，组合意义是在保留因果注意力的前提下获得全句语音访问，为流式时只访问当前块加有界历史留下接口。

3 个桥接放在这里是因为它们共享同一等价逻辑：对齐只看小集合，归一化与梯度看全词表，读出只改变帧表示来源而不改变对齐集合。

### 训练时分块、剪枝与流式拼接如何组织？

训练的真实动作按算法可复述为 7 步。第一，按批收集空白符号加排序去重目标词，重标号目标。第二，堆出有效帧，丢掉填充。第三，按词表块在线累加每行全词表归一化，每块用后释放。第四，只投影选中列并减去归一化得到选中对数概率。

第五，用 k2 把 CTC 图与选中分数求交并按波束剪枝，算保留路径总分得到损失，非有限损失置零。第六，反向重算每词表块，按分块梯度公式累加到头输入梯度，并写出该块对应的头权重与偏置梯度行。第七，动态规划的存储只与选中列、序列长度和波束有关，临时归一化块至多为帧数乘块宽。

有限波束是近似而非等价。保留子集求和使损失不小于原损失，相等当且仅当保留全部路径。论文用丢弃后验质量度量剪掉路径占比，并给出占据误差界。所有训练用波束 100，在随机初始化的编码器与大模型检查中估计的每话语丢弃质量不超过十的负 11 次方量级。数值上前向归一化用 64 位累加再 1 次舍入到 32 位，反向复用选中对数概率，梯度乘加用 32 位，这是附录精度对照支持的组合。

流式训练把同一目标用在块拼接上。每块编码器用左历史并只返回当前块输出，投影后追加共享查询块，按块拼接查询输出作为整句 CTC 帧，1 次损失对整句转录求和。训练可按注意力规则并行算所有块，推理则每块 1 次前向并复用键值缓存，CTC 前缀与分数跨块保留。下图把掩码、训练拼接与流式推理放在一起，训练不需要块级对齐是关键。

> **看图路径：** 1. 先看左图注意力矩阵中过去历史、当前块与未来零区的划分；2. 再看中图语音块与查询块交替后拼接查询输出算整句损失的路径；3. 最后看右图每块一次前向中 KV 缓存与 CTC 前缀分数如何跨块保留

[![原论文 Figure 2：Streaming Query-readout LLM-CTC.](https://arxiv.org/html/2609.33645v2/fig_ctc_llm_streaming.svg)](https://arxiv.org/html/2609.33645v2/fig_ctc_llm_streaming.svg)

*论文图 2。原论文 Figure 2:：“Streaming Query-readout LLM-CTC. (a) Chunk positions attend to prompt \bmP, h seconds of speech/query history before the chunk, and their causal prefixes within the chunk.”。*

上图左矩阵显示当前块只能看到提示、有界历史与块内因果前缀，看不到未来。中图显示语音块与查询块交替，拼接后的查询输出对应整句转录。右图显示推理时编码器只保留有界音频历史，大模型复用提示与保留位置的键值缓存，文本候选跨块更新。并行批算与逐话语缓存算在精确算术下等价，有限精度差异另行度量。

### 数据、模型与度量在什么条件下可比？

实验条件要按编码器与大模型两套分别交代。编码器部分用 Zipformer-M，在 LibriSpeech 960 小时读英语、GigaSpeech 10000 小时读与自发英语、AISHELL 170 小时读汉语上比较标准 CTC 与 Pruned CTC。英语用 500 类字节对编码，汉语用 4336 类字符，解码用波束 4 的前缀束搜索，英语报告词错率，汉语报告字错率。资源基准在一张 80G 显卡上测头与损失的前后向，以及含编码器与优化器的全步，帧数取 16000、32000、64000，词表从 500 扫到 180000。

大模型部分在 GigaSpeech 上把冻结的 SPEAR-XLarge v2 编码器与 Qwen3 主干配对，从 0.6B 到 32B 共 6 个尺寸，成对比较自回归交叉熵与查询读出 CTC。词表为 151936 类的原生头，训练冻结编码器与头，只训练投影、低秩适配与空白偏置。解码都用波束 4，自回归用束搜索加长度惩罚，CTC 用前缀束搜索加词惩罚。实时因子定义为总识别时间除以总音频时长，在同一批时长分层的测试话语上用贪心测得。流式部分微调 Qwen3-ASR 的 0.6B 与 1.7B，块长 2 秒，左历史在训练按分布采样，评估用 2、4、8 秒。

可比性依赖三点。同一批次、同一增强、同一初始化用于资源对比；成对模型共享编码器与尺寸用于精度速度对比；外部基线只作灰色参考，其训练数据不限于 GigaSpeech，假设先转数词再去标点再做官方归一化。附录还交代优化器、学习率、混合精度与软件版本，复现时应先对齐这些再看数字。

**有限波束剪枝 × 丢弃后验质量：** 有限波束剪枝负责在 k2 交集中只保留接近最优对齐一定对数分差的格点与弧；丢弃后验质量负责度量被剪掉路径在给定转录条件下的概率占比。两者搭配是因为剪枝把求和从全部有效对齐变为保留子集，损失变为上界，而丢弃质量直接给出占据与梯度误差的上界，组合后可以用波束值定量控制近似程度。

**话语级监督 × 块级语音文本对齐：** 话语级监督负责只用整句转录对拼接后的全部查询输出算一次 CTC 损失；块级语音文本对齐负责预先规定哪段音频对应哪段文字。搭配理由是 CTC 本身对帧与词的对应求和，跨块拼接后仍可枚举跨块路径，因此训练不需要外部切分或发射时刻标注，组合后流式训练与离线训练用同一目标，只差注意力可见范围。

这两个桥接放在训练与条件之间，是为了提醒读者剪枝误差与监督粒度的结论都依赖相同的波束、历史采样与解码设置，换条件需重测。

### 省了多少显存，精度与速度变成什么样？

先看编码器头与损失的显存。问题是随词表增大，标准实现是否线性增长而本方法是否基本持平。公平条件是同一增强特征与同一编码器输出，只换头与损失。指标方向是显存越低越好，时间越短越好。下表用原文连续句整理出大词表点的头与损失显存，单位保留原文写法。

| 条件 | 指标 | 标准 CTC | 本方法 | 原文比较 |
| --- | --- | --- | --- | --- |
| 16000 帧、180000 类 | 头与损失显存 | 43.0 GiB | 1.29 GiB | 33.3 倍 |
| 32000 帧、相同词表 | 头与损失显存 | 未单独列出 | 2.58 GiB | 随帧数增长 |
| 64000 帧、相同词表 | 头与损失显存 | 未单独列出 | 5.16 GiB | 随帧数增长 |

上表显示在 16000 帧与 180000 类处头与损失显存从 43.0 降到 1.29，约为 33.3 倍，同词表下更大帧数分别用 2.58 和 5.16，说明激活不再随词表线性放大。代价是全步仍含编码器与优化器，论文报告全步降 2.3 至 5.1 倍且每步多 14 至 17% 时间，标准方法在大帧大词表处会显存不足，而本方法仍能跑通。未胜出项是小词表时本方法前后向相对更慢，词表越大比值越接近 1。

再看大模型头与全步。问题是冻结原生头做低秩适配时省多少。条件是同一增强特征与目标，同一检查点起步。下表整理原文连续句中的数字。

| 模型 | 指标 | 标准 CTC | 本方法 | 原文比较 |
| --- | --- | --- | --- | --- |
| 8B | 头与损失增量显存 | 29.21 GiB | 1.14 GiB | 25.7 倍 |
| 14B | 头与损失增量显存 | 29.79 GiB | 1.20 GiB | 24.8 倍 |
| 8B 全步 | 峰值显存与时间代价 | 56.06 GiB | 34.67 GiB | 省 38.2%、多 7.5% 时间 |
| 14B 全步 | 峰值显存与时间代价 | 72.71 GiB | 52.84 GiB | 省 27.3%、多 5.6% 时间 |

上表说明头与损失下降二十多倍，但全步下降受模型与优化器常驻占用限制。未剪枝约减已拿到大部分节省，有限波束进一步降低头与损失，对全步影响小。这支持论文判断：等价约减与重算是主要收益来源。

精度速度的主结果用下表概括。问题是查询读出 CTC 能否随主干增大而变好，并接近自回归。条件是共享编码器与尺寸，波束都为 4。

| 范围 | 指标 | 自回归基线 | 查询读出 CTC | 原文比较 |
| --- | --- | --- | --- | --- |
| 0.6B 测试 | 词错率 | 未在此表列出 | 10.57% | 随尺寸下降 |
| 32B 测试 | 词错率 | 未在此表列出 | 9.94% | 六尺寸内距自回归 7% 相对以内 |
| 全尺寸 | 实时因子 | 自回归较大 | CTC 较小 | 快 7.2 至 10.3 倍 |

上表没有逐尺寸复述，而是保留论文直接报告的端点与相对界。支持的判断是非自回归可以用 1 次前向代替逐词前向，代价是仍有小幅精度差距。限制是实时因子用贪心测得，词错率用束搜索测得，两者解码不同，不能把速度比直接理解为同解码下的精度保持。

流式结果用下表概括。问题是有界历史是否接近匹配离线。条件是同一微调起点，块长 2 秒，历史取 2、4、8 秒。

| 历史 | 监督 | 离线参考 | 流式 | 原文比较 |
| --- | --- | --- | --- | --- |
| 2 秒 | 整句转录 | 匹配离线 | 流式 | 测试相对增量小于 3% |
| 4 秒 | 整句转录 | 匹配离线 | 流式 | 测试相对增量小于 3% |
| 8 秒 | 整句转录 | 匹配离线 | 流式 | 测试相对增量小于 3% |

上表说明两个尺寸与 3 个历史都满足小于 3% 相对增量，且从 2 秒加到 8 秒变化小，支持有限历史已够用的解释。但这只是 GigaSpeech 上的报告，不能推广到所有噪声与长句。

### 读出、注意力与精度选择经得起拆解吗？

消融要回答两个可操作问题。第一，查询读出是否必要，全注意力是否更好。第二，精度策略是否影响梯度。公平条件是匹配初始化、训练与解码，每语音嵌入出 1 帧。论文报告在 4B 上因果语音读出词错率高于因果查询读出，实时因子相近。

语音读出加全注意力略好但实时因子更高，且全注意力在流式跨块时必须变因果才能复用缓存。因此离线与流式统一用因果查询读出，这是一个已验证的对照而非偏好。

精度对照用下表概括，数字保留原文写法，指标是相对首配置的梯度误差比。

| 前向归一化 | 反向选中概率 | 梯度乘加 | 权重误差比 | 偏置误差比 |
| --- | --- | --- | --- | --- |
| FP32 | 重算 | FP32 | 1.000 | 1.000 |
| FP64 | 复用 | FP32 | 0.061 至 0.141 | 0.062 至 0.095 |
| FP64 | 复用 | FP64 | 0.047 至 0.087 | 0.062 至 0.097 |

上表说明同时用 64 位归一化、复用选中对数概率和 32 位梯度乘加是论文采用的组合，权重误差可降到十的负 6 次方量级。跨词表与批量检查显示损失最大相对误差为十的负 8 次方量级，头输入梯度为十的负 6 次方量级，选中类权重梯度最大为十的负 4 次方量级，最差批量改用 64 位累加可降到十的负 8 次方量级，说明 32 位累加是主要误差源。下图展示全部 1188 组比较随词表变化的误差曲线，横轴线性、纵轴对数，每条曲线固定帧数与块宽。

> **看图路径：** 1. 先按上排相对误差与下排绝对误差区分纵轴含义；2. 再沿横轴词表增大方向看每条初始化曲线的升降趋势；3. 最后对比不同帧数与块宽图例在权重梯度面板上的分离程度

[![原论文 Figure 5：Numerical error across vocabulary sizes: relative error above and absolute error below.](https://arxiv.org/html/2609.33645v2/fig_ctc_precision.png)](https://arxiv.org/html/2609.33645v2/fig_ctc_precision.png)

*论文图 3。原论文 Figure 5:：“Numerical error across vocabulary sizes: relative error above and absolute error below.”。*

上图上排为相对误差，下排为绝对误差，面板分别对应话语损失、头输入梯度、选中与补集的权重偏置梯度。可见损失与头输入误差不随词表发散，权重误差在小词表爬升后趋平，不同帧数曲线分离但同帧曲线基本重合。这支持类轴算术误差受控的判断，但不能把某条曲线的末端值推广为全程最差，像素不能精确辨别的数值不应硬写。

### 哪些边界没有测，哪些结论不能外推？

先说近似与数值边界。词汇约减在精确算术下等价，但实现叠加了有限波束剪枝，剪枝边界会带来损失不连续。论文用丢弃后验质量定界，并在随机初始化上要求每话语不超过十的负 11 次方，训练波束取 100，编码器网格需求在 40 至 70 之间，大模型 8B 在 75 处满足。这是在采样初始化与增强下的估计，不是证书上界，数值地板处的零也不能理解为精确零丢弃。选中类梯度两项相消时舍入会主导差值，论文因此固定精度组合，换硬件或换注意力实现需重测。

再说系统边界。编码器精度持平只在 3 个语料与给定配置下显示，不能外推到所有语言与增强。LLM-CTC 的 7% 相对界只在 6 个 Qwen3 尺寸与 GigaSpeech 上报告，流式的 3% 相对界只在微调的 0.6B 与 1.7B 上报告。外部基线训练数据不限于 GigaSpeech，只能作灰色参考。并行批算与缓存逐块算在精确算术下等价，但有限精度下仍有差异，下图比较不同输入固定与精度下的差异，基线相对误差在百分之几量级。原文明确支持的是固定输入加 FP32 非融合注意条件下相对误差降到十的负 6 次方量级且无贪心标签分歧，普通线性图上贴近零不能单独证明精确零。

> **看图路径：** 1. 先确认左右两列分别为 0.6B 与 1.7B、横轴为左历史秒数；2. 再区分较高的 BF16 曲线与贴近零的两条 FP32 菱形曲线；3. 最后看帧标签不一致率行中 BF16 非零与 FP32 贴零的上下位置关系

[![原论文 Figure 8：Comparing parallel batch computation with per-utterance cached computation on GigaSpeech.](https://arxiv.org/html/2609.33645v2/fig_streaming_consistency.svg)](https://arxiv.org/html/2609.33645v2/fig_streaming_consistency.svg)

*论文图 5。原论文 Figure 8:：“Comparing parallel batch computation with per-utterance cached computation on GigaSpeech.”。*

原论文 Figure 8 左右分别为 0.6B 与 1.7B，横轴为左历史秒数。三行分别为相对对数误差、最大绝对误差与帧标签不一致率。逐像素看，较高的 BF16 曲线明显非零，而两条 FP32 菱形曲线都贴近零轴，不能把全部曲线都当作非零，也不能把贴近零单独说成仅非融合注意才有效。固定语音嵌入能改善 BF16 一致性，剩余差异强烈依赖精度与注意力实现。这说明流式缓存复用的等价性在实现层面是有条件的，不能从冻结参数直接推定输出确定。

### 要复现先准备什么，按什么顺序跑？

复现先分清 3 类可用性。论文给出算法与精度细节，数据集公开，源代码当前可用，已公开在官方仓库。第三方基线权重链接本次可达，但那只是评估基线，不是复现本方法所必需。预训练检查点是否公开应以仓库实际发布为准，不从正文的将公开表述推定为已可下载。

第一步跑编码器等价性。用 Zipformer-M 与 k2，按附录块宽 4096、波束 100、格点上限与 FP64 归一化实现分块前后向，先在小词表对比稠密参考的损失与梯度，再扫词表与帧数看显存曲线。标准 CTC 在大帧大词表会显存不足，属预期现象，可用线性外推标记而非强行跑通。第二步跑大模型离线。用冻结编码器与原生头，只训练投影、低秩适配与空白偏置，空白偏置按头行余弦相似启发初始化，提示用转录提示，CTC 目标要求帧数满足目标长加相邻重复对数。

第三步跑流式。编码器与大模型用同一左历史，块长 2 秒，训练按概率采样历史，推理复用键值缓存并跨块保留 CTC 前缀，历史边界按音频时间切分，可能切开更早块。

缺项要明确指出。论文未报告误判率与端到端延迟的联合分布，未测量不同分词下选中列数的最坏分布，未给出小词表时额外时间的分解。因此复现报告应同时给出头与损失显存、全步显存与每步时间 3 组数，并注明解码方式与硬件型号，避免把总体趋势说成每组都成立。

### 何时值得尝试，一句话如何带走？

当训练显存被帧乘词表激活主导、又必须保留原生大词表头时，值得尝试先做词汇约减加分块重算，再按需开有限波束。当需要非自回归速度且能接受小幅精度差距时，可在冻结大模型下用查询读出接剪枝 CTC；当需要流式且没有块级标注时，可用整句损失加有界历史与缓存复用。但若词表很小、编码器本身占主导，或必须保证逐帧精确梯度与完全可复现的损失曲面，就要权衡额外时间与剪枝不连续性。

带走的复述是：有效路径只用少数词，全词表只为分母与梯度服务，把两者分开算就能等价省显存；查询读出与有界历史只是让同一目标在因果与流式下仍可用。重提结果时应加新条件：编码器三语料精度基本持平，大模型六尺寸保持在 7% 相对内且快 7 倍以上，流式保持在 3% 相对内，这些界都绑定数据集、尺寸、波束与解码，不能当成通用承诺。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.33645)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-30/)
