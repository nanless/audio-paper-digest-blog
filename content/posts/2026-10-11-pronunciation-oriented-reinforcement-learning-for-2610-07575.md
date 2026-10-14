---
title: "Pronunciation-Oriented Reinforcement Learning for Japanese Text-to-Speech with Kana-Domain ASR Rewards"
date: 2026-10-11
draft: false
tags: [文本到语音, 强化学习, 语音可懂度评估, 语音]
categories: [论文速递]
description: "该文针对日语正字法与发音不是一一对应的问题，用输出片假名的识别模型计算假名域误差作为强化学习奖励，在相同分组相对策略优化条件下把目标汉字读音误差相对降低约 26%，同时保持了相近的正字法误差、说话人相似度和客观音质，但无约束时会引起输出明显变长，需要 KL 正则抑制。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.07575"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用假名域识别误差做奖励，优化日语合成的汉字读音"
paper_digest_original_title: "Pronunciation-Oriented Reinforcement Learning for Japanese Text-to-Speech with Kana-Domain ASR Rewards"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.07575v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.07575v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.07575v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"task","id":"task.intelligibility","label":"语音可懂度评估"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "该文针对日语正字法与发音不是一一对应的问题，用输出片假名的识别模型计算假名域误差作为强化学习奖励，在相同分组相对策略优化条件下把目标汉字读音误差相对降低约 26%，同时保持了相近的正字法误差、说话人相似度和客观音质，但无约束时会引起输出明显变长，需要 KL 正则抑制。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shiao Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lianbo Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kai Washizaki"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Koki Nikaido"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yui Sudo"}]
paper_digest_abstract_sha256: "bec971efc674599124807ca8c25acd7708d9bd5d2d70e8dedef6f4ee7ed15a2d"
paper_digest_sidecars: {"citation.bib":{"sha256":"295eea46b5db00a401eb176a532e8db389fc303f5da6abd43ff8f304ee17a35c","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07575/citation.bib"},"citation.json":{"sha256":"ed191d4419eee377b42947ac55b6863511edcfb218c5a6124dc6c5ab5ed719d7","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07575/citation.json"},"citation.ris":{"sha256":"8dbba655767e9af4234be9e1fc970c3082eafd2a710a740a820ffb3af60f1880","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07575/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"f419476507d6903eb21c5a6829d9baa3796c3a2f2251aa76808cdbe2f86b970d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07575/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "80c2ff0dfd9b5ead70211daae33c0f1641d2cba7dc1122626a899277922025a7"
paper_digest_api_reader_plan_sha256: "bc70b9cd46b8f270d2dbb56f871ce066bc152aa8ad62d000b57a534f234d6f11"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "0bda8bc336b246c8fdf58389793851051af503b9a115c742b65b7e6a0bb6b18e"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "3c0f44d8ed8cd1c80c85328a90cb794b8a16e764c53b5702b5576a3f03876219"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "06274ed33e382ac8e50b00d7f94b8b0dc3aebecea93db6ad3db73058b6558796"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "d9396b733f88dc20313247a0f0db149ac37f7de8f3d4dde163e95d0873a457e8"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用假名域识别误差做奖励，优化日语合成的汉字读音

> 英文题目：*[Pronunciation-Oriented Reinforcement Learning for Japanese Text-to-Speech with Kana-Domain ASR Rewards](https://arxiv.org/abs/2610.07575v1)*

> 标签：#文本到语音 | #强化学习 | #语音可懂度评估 | #语音
>
> 评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Shiao Zhu：机构信息未在 arXiv HTML 中可靠披露
- Lianbo Liu：机构信息未在 arXiv HTML 中可靠披露
- Kai Washizaki：机构信息未在 arXiv HTML 中可靠披露
- Koki Nikaido：机构信息未在 arXiv HTML 中可靠披露
- Yui Sudo：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

日语文本到语音需要以输入文本和参考音频提示生成自然语音，难点是汉字读音随词变化，误读仍可能被正字法转写掩盖。策略语言模型以文本与参考音频为条件自回归生成语义语音序列，再经冻结的声学解码器与声码器合成为波形，强化学习只更新该语言模型。合成波形送入自动语音识别转写并与参考表示比较字符错误率，正字法分支比较原文与正字法转写，假名分支比较参考假名读音与假名转写结果，误差再经有界函数映射为奖励。每次输入采样一组生成结果并分别计分，在组内标准化奖励得到相对优势，结合截断策略损失与相对冻结参考策略的散度约束更新策略。假名奖励让读音差异在奖励计算中显式保留，正字法奖励则可能丢失读音信息或惩罚与发音无关的字形差异。在常用汉字读音基准报告子集上，假名奖励的目标汉字读音误差为7.17%，正字法奖励为9.65%，前者相对降低25.7%，而正字法字符错误率分别为4.15%与4.10%，基本相当。无约束优化下假名奖励会引起输出明显变长，加入散度约束后该现象得到明显抑制，说话人相似度和客观语音质量保持相近。该结论限于单个日语基座模型和需要参考读音的训练设置，尚未验证其他规模与架构。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/sbintuitions/Joyo-Kanji-Yomi-Benchmark> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/openai/whisper-large-v3-turbo> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/sakasegawa/japanese-wav2vec2-large-hiragana-ctc> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的输入输出问题是什么

这篇论文研究的是日语文字转语音的读音准确性问题。输入是日语文本和一段参考音频提示，参考音频用来决定合成语音的音色和说话风格，输出是读出输入文本内容的语音波形。必须保留的信息有两个，一是文本的语义内容不能读丢，二是文本中汉字的具体读音要符合上下文。同一个汉字在不同词里读音不同，例如论文举的固在固める里读かた，在固定里读コ，如果模型选错读音，句子听起来就是读错了。

论文要解决的正是这类上下文决定的汉字读音错误，而不是单纯让合成语音更清晰或更像说话人。读者需要先建立这个判断标准，后面所有奖励设计和指标都是围绕读音是否读对展开的。

### 已有强化学习后训练路线为什么在日语上不够直接

已有的语音合成强化学习后训练路线，是让模型生成语音，再用自动语音识别把语音听写成文字，用听写结果与输入文本之间的字错率或词错率做可懂度奖励。这个思路在拼写与发音基本对应的语言里比较直接，但在日语里会出现表示错位。论文指出 2 个方向的错位，一是不同的汉字读音可能在正字法转写后看起来相同，识别模型可能靠语言模型猜对词形，即使发音读错了，误差也被掩盖。

二是相同的发音可以写成不同的正字法形式，识别模型在字形之间替换就会增加字错率，即使发音本身是对的。中文和英文最近也有发音敏感奖励的探索，例如 SwanVoice 的音素级奖励和 SwanTale 的音素声调准确率奖励，日语这边则缺少针对汉字多读音的奖励研究。论文把假名明确表示读音这一特点利用起来，把原来用作评测的 Kana-CER 发展成训练奖励。

### 为什么正字法字错率会漏报和误报读音错误

理解漏报和误报需要把识别和奖励的链条拆开。漏报的例子是模型把目标汉字读错了，但正字法识别模型结合上下文仍输出了正确的汉字词形，奖励看到转写与原文一致，就认为这次生成很好，真正的读音错误得不到纠正。误报的例子是模型读音是对的，但识别输出用了另一个同音的汉字写法，转写与原文在字形上对不上，奖励就扣分，模型会被推向改变本来正确的发音行为。也就是说，正字法字错率混合了发音正确性和字形选择习惯两个因素。

论文的判断是，如果优化目标是读音，就应该把比较放在假名域，让读音区分在计算误差之前就显式化，而不是指望正字法转写间接反映发音。

### 整体流程是如何从文本走到奖励的

论文的方法可以沿着一个样本走一遍。给定输入文本和参考音频提示，Sarashina2.2-TTS 语言模型作为策略自回归生成一串语义语音 token，这一步是唯一会被强化学习更新的部分。随后固定的声学解码器和神经声码器把 token 变成波形，解码器和声码器在强化学习中保持冻结。得到波形后，用一个识别模型把它转写成文字，再把转写结果与参考表示比较得到误差，最后把误差映射成有界奖励。

关键区别只在转写和比较用的表示不同，一条路径用普通正字法识别模型与原文比，另一条路径用输出片假名的识别模型与参考假名读音比。除奖励信号外，两组实验的策略优化、采样过程和超参数都保持相同，这样才能把结果差异归因于奖励表示。

**Sarashina2.2-TTS 语言模型 × 声学解码器与声码器：** Sarashina2.2-TTS 语言模型是自回归生成语义语音 token 的策略，是强化学习中唯一被更新的部分；声学解码器与声码器是把 token 变成波形的固定模块，训练中保持冻结。两者分工是决定读什么音与怎么发出声音，组合后奖励的梯度只经过语言模型，不改变后端发声方式。

### 两种误差和奖励具体怎么算

论文先定义字错率的通用含义，即参考序列与假设序列之间的字级编辑错误率，用参考长度归一化，并在计算前去掉标点、符号和空白。然后给出正字法误差，即输入原文与正字法识别模型转写结果之间的字错率。这里的符号是原文 x、合成波形 g、正字法识别模型为转写函数，误差越大说明内容还原越差。

\[e_{\mathrm{orth}}=\mathrm{CER}\bigl(x,\mathcal{A}_{\mathrm{orth}}(g)\bigr),\]

假名域误差的定义形式相同，但比较对象换成发音表示，即参考假名读音与假名识别模型转写结果之间的字错率。这里的参考假名读音是训练数据附带的正确答案，假名识别模型是微调到输出片假名的 Whisper 模型。

\[e_{\mathrm{kana}}=\mathrm{CER}\bigl(k(x),\mathcal{A}_{\mathrm{kana}}(g)\bigr),\]

得到误差后，两种误差都经过同一个非线性变换映射成奖励，误差为零时奖励接近 1，误差增大时奖励单调下降，系数控制下降快慢。

\[r_{d}=1-\tanh(\alpha\,e_{d}),\qquad d\in\{\mathrm{orth},\mathrm{kana}\},\]

**正字法 CER 奖励 × 假名 CER 奖励：** 正字法 CER 奖励指用普通日语识别模型转写合成语音，再与输入原文比字错率；假名 CER 奖励指用专门输出片假名的识别模型转写，再与参考假名读音比字错率。前者看到的是汉字字形是否对，后者看到的是读音是否对。两者搭配对比，才能看出正字法转写会掩盖发音错误，而假名域能把读音区分显式保留在奖励里。

**参考假名读音 × 假名转写识别模型：** 参考假名读音是每句训练文本附带的正确读音答案，是奖励的比较基准；假名转写识别模型是把合成语音听写成片假名的工具，是奖励的测量手段。两者分工是答案与量尺的配合，组合后误差计算完全发生在发音表示空间，不再经过汉字字形选择。

### 分组相对策略优化如何用奖励更新模型

论文采用分组相对策略优化。对每个输入，从当前 rollout 策略采样多个完成，例如主实验是每输入 16 个完成，分别合成语音并按上面两种奖励之一打分。然后在组内把奖励标准化成优势，即每个完成的奖励减去组均值，再除以组标准差加一个保证数值稳定的小常数。这样做的意义是同一输入的不同读音尝试之间做相对比较，读得相对更好的完成得到正优势，相对更差的得到负优势。

\[A_{i}=\frac{r_{i}-\bar{r}}{\sigma_{r}+\epsilon},\]

策略优化目标由裁剪后的策略损失加上 KL 惩罚组成，KL 项衡量当前策略与强化学习前冻结参考策略的偏离，系数控制约束强度。主实验的 KL 系数为 0.04，另有无约束对照把系数设为 0。论文还说明实现上基于 TRL 1.7.0 的分组相对策略优化实现，用 vLLM 生成，并用了 Dr. GRPO 的损失聚合与 token 级重要性采样修正，以处理采样与训练对数概率不一致的问题。

\[\mathcal{L}(\theta)=\mathcal{L}_{\mathrm{policy}}(\theta)+\beta\,\widehat{D}_{\mathrm{KL}}\bigl(\pi_{\theta}\,\|\,\pi_{\mathrm{ref}}\bigr),\]

**分组相对优势 × KL 正则：** 分组相对优势指对同一输入采样多个输出，在组内把奖励标准化为优势，用于策略梯度更新；KL 正则指约束新策略不偏离强化学习前参考策略的惩罚项。前者负责指出组内哪个读音更好，后者负责防止为拿高分而走形，两者组合是在找准读音改进方向的同时守住原有生成行为。

### 训练数据和评测基准提供了什么条件

训练起点是 Sarashina2.2-TTS 的 Stage1 检查点，它经过大规模合成预训练，是监督微调和强化学习的共同起点。Stage2 是面向发音的监督微调，用的是针对常用汉字表中特定汉字读音对生成的合成数据，每句提供决定目标读音的上下文。强化学习用的是其中一个子集，包含 129965 条语音，覆盖 4362 个汉字读音对和 2129 个不同汉字，每个读音对最多 30 句，每句附带参考假名发音，用于计算假名奖励。零样本音频提示随机分配一次，并在两种奖励条件下共用，以保证比较公平。奖励计算用 Whisper large-v3-turbo 做正字法识别，用 Kana-Whisper 做假名识别，后者在真实录音上的假名字错率报告为 0.979%，论文以此支持它对发音敏感。

**Kana-CER kanji × Kana-CER sent.：** Kana-CER kanji 只在基准标注的目标读音片段上算假名字错率，用来隔离目标汉字的读音实现是否正确；Kana-CER sent. 在整句假名序列上算错率，还会包含句子其他位置的转写误差。两者分工是局部读音精度与整句发音完整性，组合起来可以判断改进是来自目标汉字还是整句都变好了。

### 评测指标和检查点选择规则是什么

评测用 Joyo Kanji Yomi Benchmark，它系统覆盖常用汉字在上下文中的读音，包括不常见读音。每句在参考假名序列中标注了目标读音片段。主要指标 Kana-CER kanji 只在该标注片段上算假名误差，从而把目标汉字读音实现是否正确与句子其他位置的转写误差隔离开。论文还报告整句假名误差和标准正字法字错率，正字法字错率用与正字法奖励相同的 Whisper large-v3-turbo 计算。

为检验改进是否只对奖励用的识别模型有效，论文再用一个训练中没见过的基于 wav2vec2 的平假名识别模型做独立评估，转写后归一化为片假名再算误差。基准测试集按两成验证、八成报告划分，每 1000 步评估一次，用验证集上正字法字错率与整句假名误差的均值选检查点，最终结果在报告子集上用 5 个生成种子取平均。输出时长分析用相对预训练模型的平均时长比和按句配对的平均时长比，转写中出现单个字符连续重复五次以上的极少数样本不计入误差平均。

### 假名奖励在目标汉字读音上带来了多大改进

在验证集曲线和报告集表格中，论文的核心发现是目标汉字读音误差明显下降，而正字法转写精度基本相当。读图时可以先看验证曲线最下一行的目标汉字误差，假名奖励曲线下降更早且长期更低；再看最上一行的标准字错率，两条曲线差距很小，说明两种奖励都在让模型准确实现输入文本，只是衡量表示不同。图中最优点用圆圈标出，是按验证集上正字法误差与整句假名误差均值选出的，预训练模型放在第 0 步。

> **看图路径：** 1. 先看横轴强化学习步数与三行纵轴指标的含义，注意最下一行是目标汉字读音误差；2. 对比橙色假名奖励曲线与蓝色正字法奖励曲线在早期下降速度的差异；3. 找到圆圈标记的验证准则选中点，确认各自最优点所在的步数位置

[![原论文 Figure 1：Evaluation metrics during RL on the validation split with \\beta=0.04.](https://arxiv.org/html/2610.07575v1/fig_eval_curves_val.svg)](https://arxiv.org/html/2610.07575v1/fig_eval_curves_val.svg)

*论文图 1。原论文 Figure 1:：“Evaluation metrics during RL on the validation split with \beta=0.04.”。*

上图显示验证集上随强化学习步数变化的 3 组指标，曲线为 5 个生成种子的均值加减 1 倍标准差阴影，圆圈为共同验证准则选出的检查点。可以看到假名奖励在目标读音行更早取得低误差，而标准字错率行两种奖励接近。在报告集上，用 Kana-Whisper 评估时目标汉字假名误差从正字法奖励下的 9.65% 降到假名奖励下的 7.17%，相对降幅为 25.7%，独立的 wav2vec2 平假名模型也显示同样趋势，说明增益不是只对奖励用的识别模型有效。正字法字错率分别为 4.10% 与 4.15%，基本相当。论文还指出，即使强化学习只用了 Stage2 监督微调所用合成发音数据中约一半的数据，假名奖励优化后的模型在表中所有指标上都低于 Stage2 监督微调。

下面这张原表比较了预训练、监督微调和两种奖励下选出的强化学习检查点，所有误差率都是百分比且越低越好，数值是 5 个生成种子的均值加减标准差，其中一列还报告了单样本误差先截断到 1.0 再平均的版本。

|  |  | Kana-Whisper | Kana-Whisper | Kana-Whisper | Whisper | wav2vec2-hiragana | wav2vec2-hiragana | wav2vec2-hiragana |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | RL Step | Kana-CER | Kana-CER | Kana-CER | CER | Kana-CER | Kana-CER | Kana-CER |
|  |  | (kanji)↓ | (cap@1)↓ | (sent.)↓ | ↓ | (kanji)↓ | (cap@1)↓ | (sent.)↓ |
| pre-RL | — | 10.77 ± 0.57 | 6.97 ± 0.08 | 4.59 ± 0.85 | 6.08 ± 0.58 | 16.69 ± 0.36 | 10.90 ± 0.21 | 8.62 ± 0.18 |
| SFT | — | 7.61 ± 0.13 | 5.48 ± 0.08 | 3.38 ± 0.83 | 5.20 ± 0.38 | 13.77 ± 0.15 | 9.52 ± 0.11 | 8.04 ± 0.15 |
| RL w/ CER | 18000 | 9.65 ± 0.12 | 6.51 ± 0.09 | 2.44 ± 0.06 | 4.10 ± 0.16 | 14.78 ± 0.33 | 9.71 ± 0.18 | 7.01 ± 0.11 |
| RL w/ Kana-CER | 4000 | 7.17 ± 0.07 | 5.16 ± 0.11 | 2.19 ± 0.03 | 4.15 ± 0.04 | 11.52 ± 0.28 | 7.94 ± 0.10 | 6.54 ± 0.10 |

该表说明假名奖励的主要收益在目标汉字读音列，代价是需要参考假名答案，且结论依赖基准的标注片段划分；它同时保留了监督微调和正字法奖励基线，表明读音改进不是去掉基线后显得大，而是相对可运行的对照策略的真实下降。正字法列相近也提示两种奖励共享准确还原文本的大目标，差异来自表示选择。

### 训练动态为什么说假名奖励更早达到最优点

论文用相同的验证选择规则比较了两种奖励的最优步数。假名奖励在第 4k 步达到最佳验证性能，而正字法奖励在第 18k 步达到最优，原文写作 44k 与 1818k，实际对应表格中报告的 4000 步与 18000 步附近的选中检查点。论文的解释是假名域保留了正字法转写可能丢掉的发音区分，因此面向发音的优化更有效率。

这个更早最优的结论是有条件的，它依赖每 1000 步评估一次、用验证集上正字法误差与整句假名误差均值选点的规则，如果换成只看目标读音误差或只看正字法误差，最优点位置可能移动。验证曲线也显示正字法奖励在整句假名误差行后期更低一些，说明两种奖励在不同指标上的优势并不完全一致，不能把某一行的领先推广到所有发音指标。

### 去掉 KL 约束后输出长度会发生什么变化

论文专门做了有无 KL 正则的完成长度对照。读图前需要明确纵轴是平均完成长度，横轴是强化学习步数，虚线是无约束，实线是有约束，浅带是训练 rollout 的原始波动，粗线是滑动平均。无约束下正字法奖励只引起中等程度的长度变化，而假名奖励导致快速严重的输出变长，平均完成长度在最初几千步内就翻倍以上。有约束时这种变长被大幅抑制，选出的假名奖励检查点在基准上的输出时长与预训练模型接近。

> **看图路径：** 1. 先区分虚线无 KL 约束与实线有 KL 约束的四条平均完成长度曲线；2. 重点看红色无约束假名奖励曲线在前几千步是否快速爬升；3. 再看有约束的两条实线是否都保持在 100 附近平稳波动

[![原论文 Figure 2：Mean completion length during RL under the CER and Kana-CER rewards with and without KL…](https://arxiv.org/html/2610.07575v1/fig_degeneration_length.svg)](https://arxiv.org/html/2610.07575v1/fig_degeneration_length.svg)

*论文图 2。原论文 Figure 2:：“Mean completion length during RL under the CER and Kana-CER rewards with and without KL regularization.”。*

上图显示 4 条平均完成长度随训练的变化，无约束假名奖励曲线迅速上升到 200 以上并持续波动，而有约束的两条曲线都稳定在 100 附近。这支持论文的判断，即无约束假名奖励存在长度退化解，需要 KL 正则来抑制。该结论的适用范围是论文的采样长度上限、温度和奖励变换系数等设置，更换解码约束或奖励形状后，变长的严重程度可能不同。

下面这张原表报告了选中检查点的输出时长、说话人相似度和客观音质，时长用相对预训练模型的平均时长比和按句配对的时长比，相似度和音质在日语子集上测量，数值为 5 种子均值加减标准差。

|  | Output duration | Output duration | Speaker similarity | Objective speech quality | Objective speech quality | Objective speech quality | Objective speech quality |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Method | Dur./base | Paired | SIM-o | UTMOS-s | UTMOS-v2 | P.808 | OVRL |
| pre-RL | 1.000 | 1.000 | 74.36 ± 0.26 | 3.183 ± 0.008 | 2.903 ± 0.014 | 3.808 ± 0.010 | 3.240 ± 0.005 |
| RL w/ CER | 0.971 ± 0.07 | 0.986 ± 0.08 | 74.29 ± 0.09 | 3.229 ± 0.009 | 2.933 ± 0.014 | 3.836 ± 0.007 | 3.252 ± 0.008 |
| RL w/ Kana-CER | 0.985 ± 0.07 | 1.000 ± 0.08 | 74.24 ± 0.09 | 3.252 ± 0.008 | 2.913 ± 0.003 | 3.833 ± 0.006 | 3.252 ± 0.004 |

该表说明在主实验的正则强度下，假名奖励检查点的时长比接近 1，没有为换取读音精度而明显拉长语音；但这只是选中检查点的结果，不能说明训练全程都没有变长，图中的无约束曲线已经给出反例。相似度和音质列数值相近，表明在所测的客观指标上没有明显退化，但自动指标不等于人工听感，论文也没有报告主观评价。

### 哪些条件不满足时结论不再成立

论文的结论有几个明确边界。第一，模型规模和结构单一，只用了一个 0.5B 的基础模型，是否能推广到更大规模或其他合成架构还是未来工作。第二，训练需要参考发音，没有参考假名读音的文本无法直接算假名奖励，这限制了数据的可扩展性。第三，评估依赖基准的目标片段标注和两个假名识别模型，如果标注有误或识别模型对某些读音系统性不敏感，指标可能高估或低估真实读音改进。

第四，长度退化的抑制依赖 KL 正则，无约束或约束很弱时假名奖励会走偏，因此不能把无约束下的高奖励读数当成读音变好的证据。第五，说话人相似度和客观音质只在 500 句日语子集上用自动模型测量，没有人工评价，不能推广为听感无差异。

### 要复现对比需要准备什么并先跑哪一步

复现的第一步是把数据、模型和评估管线对齐。需要拿到 Stage1 检查点、带参考假名读音的强化学习子集、Joyo Kanji Yomi Benchmark 的验证与报告划分，以及两个奖励用的识别模型，即 Whisper large-v3-turbo 和 Kana-Whisper，再加一个训练没见过的 wav2vec2 平假名模型做独立验证。零样本音频提示要随机分配一次并在两种奖励间共用，生成种子做五次平均。训练配置按原文是每输入 16 个完成、每设备训练批量 12 个完成共 8 卡、学习率 3 乘 10 的负 6 次方、温度 0.9、top-p 0.95、最大完成长度 750 token、bf16 精度、奖励变换系数为 3、KL 系数为 0.04。

建议先跑通评估管线，确认能复算目标片段假名误差、整句假名误差和正字法误差，再小规模跑两种奖励的对比，观察验证曲线是否出现假名奖励更早下降的现象。资源链接方面，论文脚注给出的是第三方基准与模型的公开页面，不是作者本研究的开源代码声明，因此代码开源、权重可下载、系统可运行要分开确认，不能把第三方链接可达当成作者已开源。

### 什么时候值得尝试还需要补哪项验证

当任务是日语合成中上下文决定的汉字读音，且手头有可靠的参考假名读音和对发音敏感的假名识别模型时，值得尝试把误差计算从正字法域搬到假名域。复现时应保留相同的分组采样、验证选点规则和独立识别模型验证，否则更早最优和跨模型一致的结论无法比较。还需要补的验证包括更大模型与不同合成架构上的重复、人工可懂度和自然度评价、对不常见读音和长尾上下文的细粒度分析，以及在没有参考读音时能否用可靠的读音预测替代。

容易产生的误解是把正字法字错率下降等同于读音变好，论文的正反例子已经说明两者会分离；另一个误解是把选中检查点的客观音质相近当成全程无代价，实际上无约束训练会出现严重变长，只有在足够 KL 约束下才能兼得读音改进和时长稳定。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.07575v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
