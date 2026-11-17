---
title: "CoTTAGE: An Explainable Judge for Text-to-Audio Generation"
date: 2026-11-16
draft: false
tags: [音频质量评估, 偏好优化, 音频推理, 数据集]
categories: [论文速递]
description: "针对文本生成音频缺少可解释自动评价的问题，论文用先给依据再打分的单模型同时评相关性和整体质量，并用监督微调加不确定性感知的成对偏好强化学习训练，在六个基准上与人类评分的相关性最高，但结论只在短环境音和现有标注者分布下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.17644"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "能说出依据的文本生成音频评价器 CoTTAGE"
paper_digest_original_title: "CoTTAGE: An Explainable Judge for Text-to-Audio Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.17644v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.17644v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.17644v1.pdf"
paper_digest_primary_task: "音频质量评估"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-quality","label":"音频质量评估"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"task","id":"task.audio-reasoning","label":"音频推理"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "偏好优化"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对文本生成音频缺少可解释自动评价的问题，论文用先给依据再打分的单模型同时评相关性和整体质量，并用监督微调加不确定性感知的成对偏好强化学习训练，在六个基准上与人类评分的相关性最高，但结论只在短环境音和现有标注者分布下成立。"
paper_digest_authors: [{"affiliations":["National Taiwan University"],"name":"Yu-Xiang Lin"},{"affiliations":["National Taiwan University"],"name":"Yun-Man Hsu"},{"affiliations":["Amazon AGI"],"name":"Bo-Ru Lu"},{"affiliations":["National Taiwan University"],"name":"Kuan-Po Huang"},{"affiliations":["National Taiwan University"],"name":"Wenze Ren"},{"affiliations":["National Taiwan University"],"name":"Ming-To Chuang"},{"affiliations":["National Taiwan University"],"name":"Chun-Yi Kuan"},{"affiliations":["National Taiwan University"],"name":"Jiawei Du"},{"affiliations":["Amazon AGI"],"name":"Byeonggeun Kim"},{"affiliations":["Amazon AGI"],"name":"Qingming Tang"},{"affiliations":["Amazon AGI"],"name":"Chieh-Chi Kao"},{"affiliations":["Amazon AGI"],"name":"Ankur Gandhe"},{"affiliations":["Amazon AGI"],"name":"Chao Wang"},{"affiliations":["National Taiwan University","NTU AI-CoRE"],"name":"Hung-yi Lee"}]
paper_digest_abstract_sha256: "c8a01fe7670221d9e499535282707e494039c68d0f67b5e90146b66f736703f4"
paper_digest_sidecars: {"citation.bib":{"sha256":"6d495b3d63135bb3614a81d2db9d7ada467aecb14bbfe35c4279f878fa31ff13","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-17644/citation.bib"},"citation.json":{"sha256":"b238857c110b599f32d63cc9dbc1ec52408799be30ef0b9abdc1cf81994dcae1","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-17644/citation.json"},"citation.ris":{"sha256":"c2901e2008d30158dfb60fe1e5f0111e9ead36aa17e7e5f838a41fa7e23e1fad","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-17644/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"94a499db764d0404d535582d0139a185e035d5b58ed37419c2bf39735aa6c529","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-17644/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "fe7f0de81fd99da0a9b477ff4aa8f3d1390985d99d0cdfbfb5dff96a56b94a7a"
paper_digest_api_reader_plan_sha256: "2e0dc051b39f5ad633fe7047dcde18ab9fed536a77317e9187001e0c2036c2d2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "273a00246043cc28d1a5d05cfaeb17ec26bea205f0dbf94c8beccec1555293f6"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "7981cb2358901392f7cb62656af4123f5072130230656a5dfe3cd9bd9ac9b962"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e29284e394e1a77792b98fbe93b9ba9bab67d9ffc2f546228115ffdc299e018a"
paper_digest_api_reader_author_count: 14
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ed813bd1fa03ddc1274fdc0646a70f7a36a13fcc008f9ca4ec4a7330133216e2"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 能说出依据的文本生成音频评价器 CoTTAGE

> 英文题目：*[CoTTAGE: An Explainable Judge for Text-to-Audio Generation](https://arxiv.org/abs/2611.17644v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频质量评估](/audio-paper-digest-blog/papers/?concept=task.audio-quality)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频推理](/audio-paper-digest-blog/papers/?concept=task.audio-reasoning)
- **研究方法**：[偏好优化](/audio-paper-digest-blog/papers/?concept=method.preference-optimization)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yu-Xiang Lin：National Taiwan University
- Yun-Man Hsu：National Taiwan University
- Bo-Ru Lu：Amazon AGI
- Kuan-Po Huang：National Taiwan University
- Wenze Ren：National Taiwan University
- Ming-To Chuang：National Taiwan University
- Chun-Yi Kuan：National Taiwan University
- Jiawei Du：National Taiwan University
- Byeonggeun Kim：Amazon AGI
- Qingming Tang：Amazon AGI
- Chieh-Chi Kao：Amazon AGI
- Ankur Gandhe：Amazon AGI
- Chao Wang：Amazon AGI
- Hung-yi Lee：National Taiwan University；NTU AI-CoRE

## 📌 核心摘要

文本到音频生成把文字描述转为环境声音，评测要同时回答声音是否贴合描述以及声音本身是否自然清晰，人工听评准确但费时费力，成为迭代瓶颈。本文评估器以音频波形为输入，判断文本贴合性时附加文字指令，判断整体质量时只给音频，不给文字指令，以免按内容猜分。输出顺序是先写自然语言诊断再给出 1.00 到 5.00 的评分。训练先用大模型按真实平均意见分改写推理痕迹做监督微调，使模型学会贴合标注的解释，再用强化学习比较同批样本对的偏好概率来校正排序。与只算余弦相似度的基线不同，该方法显式检查事件有无、顺序与失真等声学证据。在文本相关性的 XACLE 评测上，本方法皮尔逊相关系数为 0.685，高于 CLAPScore 的 0.472 与 Gemini-3.1 Pro 的 0.551，方向为越高越好。结论目前只在 30 秒内英文环境声短片段上验证，音乐、语音与长音频结构尚未覆盖。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文本生成音频到底要评什么

文本生成音频的输入是一句文字指令，输出是一段波形，评价要回答两件事。第一是文本相关性，也就是音频里出现的事件、数量和先后顺序是否和文字说的一致；第二是整体音频质量，也就是撇开内容不谈，声音本身是否自然、清晰，有没有失真、噪声和不自然的合成痕迹。

人工评价通常用平均意见分，即多个标注者各自在 1 到 5 分上打分再取平均，1 分最差、5 分最好。自动评价器要模仿这个平均分，论文用皮尔逊线性相关和斯皮尔曼排序相关来衡量模仿程度，前者看数值线性贴合，后者看排序一致，都是越大越好。

**文本相关性 × 整体音频质量：** 文本相关性指生成音频与文字指令在事件、数量和顺序上是否对齐，整体音频质量指声音本身听起来是否自然干净不失真；前者需要对照文字，后者只听音频，两者在数据上相关很弱，所以需要同一个模型分两次判断而不是用一个分数代替另一个。

这两个维度不能互相代替。一个完全切题的片段仍可能充满电流声，一个干净的片段也可能答非所问。后面的标注分析会量化这一点，这也是论文要让一个模型同时学会两种判断的原因。

### 已有评价路线为什么不够用

相关性评价最常用的是 CLAPScore，它把音频和文字分别送进预训练的音频文本模型得到嵌入，再算余弦相似度，分数高表示语义接近。ELSA 在此基础上加入事件级对齐，PAM 则把类似思路用于无参考的音频质量评价，Audiobox-Aesthetics 更进一步给出 4 个美学维度，分别是制作质量、制作复杂度、内容愉悦度和内容有用性。

另一条路线是直接用通用音频语言模型当评委，例如 Qwen2.5-Omni、Qwen3-Omni、Audio Flamingo 3 和 Gemini-3.1 Pro，提示它们先想后打分。论文发现，开源通用模型在相关性上常常只有中等甚至很低的相关性，说明能听懂不等于能当好评委。

**CLAPScore × 推理式评价：** CLAPScore 用预训练音频文本嵌入的余弦相似度直接算一个相似值，推理式评价则让音频语言模型先写出听到了什么再打分；前者省事但说不清错在哪，后者多了一段可检查的依据，本文就是要把后者做准。

更关键的是可解释性缺失。嵌入方法只给一个数字，无法定位是漏了事件还是顺序错了；通用大模型虽然能写理由，但常出现依据与音频不符的幻觉，且闭源、高成本、难复现。语音领域的 QualiSpeech 等工作已证明带依据的评价有助于排错，文本生成音频同样需要贴着音频证据说话的评委。

### 一个顺序颠倒的例子暴露了什么困难

看一个具体例子最能理解任务难点。文字要求塑料点击声之后跟着女士打鼾声，音频里其实是打鼾声从头到尾都很清楚，而点击声出现得很晚，顺序完全反了，人类平均分只有 2.87 左右，属于部分对齐。

只看数字的 CLAPScore 会给出 0.5579 这样的相似值，映射到 1 到 5 分后得到 4.12，偏高且不解释原因。通用模型可能一方面说音频里有点击声符合描述，另一方面又说文字里没提打鼾，理由自相矛盾，最后给出 2.50。理想的评委应该像 CoTTAGE 那样指出打鼾从开头就出现、点击声来得太晚，因此只是部分对齐并给出 2.60。

请按这个对照任务看下图，重点不是记住分数，而是体会可检查的依据应该长什么样。

> **看图路径：** 1. 先看顶部音频、文字和人类平均分的输入条件；2. 再对比三列中谁只给分数、谁的依据与音频矛盾；3. 重点看右侧模型如何指出事件顺序被颠倒

[![原论文 Figure 1：An example of text-audio relevance evaluation with different models.](https://arxiv.org/html/2611.17644v1/teaser.png)](https://arxiv.org/html/2611.17644v1/teaser.png)

*论文图 1。原论文 Figure 1:：“An example of text-audio relevance evaluation with different models.”。*

这张图确实显示了三者的分工差异。左侧只有预测没有依据，中间的依据把文字复述了一遍却否认了音频里明明存在的打鼾声，右侧明确点出两个事件都存在但先后顺序反了。论文要解决的就是这种时间顺序、计数和多事件漏检问题，同时对整体质量也要能指出失真和底噪，而不是笼统说清晰。

### 先写依据再打分的一体化流程

CoTTAGE 的全称是 Chain-of-Thought Text-to-Audio Generation Evaluator，做法可以概括为先推理后预测。同一个模型既能评文本相关性也能评整体音频质量，区别只在输入：评相关性时同时给文字指令和音频，评整体质量时只给音频，因为后者按标注规范不应受文字内容影响。输出都要求先把推理放在标签里，再把 1.00 到 5.00 保留 2 位小数的分数放在标签里。

**自然语言依据 × 评分预测：** 自然语言依据是模型在打分前写出的推理，说明听到了哪些声学证据以及与指令哪里一致或冲突，评分预测是最后放在标签里的数字；先写依据再打分让分数有据可查，也为后面的偏好学习提供了可采样的轨迹。

训练分两段。第一段是监督微调，用人类平均分引导出的推理轨迹教会模型基本格式和打分能力；第二段是强化学习，用同批样本两两比较的排序信号继续优化，并用不确定性把不可靠的比较变软。下图把两段放在一起，先看左边如何造数据再微调，再看右边如何采样、算奖励并更新。

> **看图路径：** 1. 沿左侧第一阶段看文本加音频加平均分如何变成推理数据集；2. 再看右侧策略模型一次采样多条轨迹后分成格式和偏好两路奖励；3. 确认两路奖励汇合后做 GRPO 更新得到最终模型

[![原论文 Figure 3：The overall training pipeline of Cottage.](https://arxiv.org/html/2611.17644v1/method_overview.png)](https://arxiv.org/html/2611.17644v1/method_overview.png)

*论文图 3。原论文 Figure 3:：“The overall training pipeline of Cottage.”。*

这张流程图左侧上方把相关性和整体质量两种数据来源并列，相关性是文字加音频加平均分，整体质量是音频加平均分，共同经过大模型生成依据并组成推理数据集，下方用基座模型加该数据集做监督微调得到初始策略。右侧对两个不同样本分别采样多条轨迹，一路检查格式是否合格，一路经过估计胜率、取人类偏好、算奖励三步，最后两路相加做更新得到最终模型。

### 监督微调的推理数据是怎么造出来的

已有的音频偏好数据缺少推理监督，论文用蒸馏补上。具体做法是把音频和真实平均分一起给 Gemini-3.1 Pro，评相关性时额外给文字指令，评整体质量时不给文字，让它写出看似先分析证据再自然得出该分数的推理，并且不透露分数是事先给定的。附录给出的构造提示明确要求权衡支持和冲突证据，让证据自然导向结论。

这样每个训练片段都有文字、音频、推理和平均分四元组。基座模型选用 Qwen2.5-Omni-7B，用排序为 64、缩放系数为 128 的 LoRA 做参数高效微调，监督阶段学习率为 1×10−4，训练 5 个轮次。模型必须先生成依据再预测分数，这迫使它把判断过程显式写出来，而不是直接回归一个数字。

监督后的模型已经能给出像样的依据和分数，但监督是逐点的，每个样本只提供一个目标值，信号比较稀疏。论文指出这只能作为初始化，排序层面的精细区分还需要第二阶段来补。

### 怎样把不确定的多条打分变成排序奖励

强化学习沿用分组采样机制。对同一个音频输入，当前策略采样 K 条推理轨迹，每条给出一个分数，由此得到 K 个分数的均值和方差。方差大表示模型自己在不同推理下摇摆不定，也就是对这个样本的质量估计更不确定，论文取 K 为 8。

**监督微调 × 强化学习：** 监督微调让模型学会按固定格式先推理后打分并贴近单个人类平均分，强化学习则在同一批样本内部做两两比较，用排序是否与人类一致来给奖励；前者提供起点，后者补上逐点回归给不出的相对顺序信号。

不确定性感知的偏好概率由 Thurstone 模型给出，它把两条分数分布的差除以合并标准差再过标准正态累积函数，合并方差大则概率自动靠近 0.5。

\[\displaystyle p_{k}(x_{i},x_{j})=\Phi\!\left(\frac{s_{k}(x_{i})-\mu(s(x_{j}))}{\sqrt{\sigma^{2}(s(x_{i}))+\sigma^{2}(s(x_{j}))+\epsilon}}\right)\]

其中分子是第 k 条轨迹对样本 i 的分数减去样本 j 的均值，分母是两样本方差加小常数的平方根，输出是 i 胜过 j 的概率。

人类方面的真值偏好由平均分大小二值化得到，大于取 1，等于取 0.5，小于取 0。

\[\displaystyle p^{*}(x_{i},x_{j})=\begin{cases}1&\text{if }\text{MOS}(x_{i})>\text{MOS}(x_{j})\\ 0.5&\text{if }\text{MOS}(x_{i})=\text{MOS}(x_{j})\\ 0&\text{if }\text{MOS}(x_{i})<\text{MOS}(x_{j})\end{cases}\]

每个样本在大小为 B 的批内与其余 B−1 个样本逐一比较，用预测概率与真值概率的 Bhattacharyya 系数衡量一致程度再平均，完全一致时取最大值。

\[\displaystyle r_{p,k}(x_{i})=\frac{1}{B-1}\sum_{j\neq i}\mathrm{BC}\big(p^{*}(x_{i},x_{j}),\,p_{k}(x_{i},x_{j})\big)\]

其中该系数是两项平方根之和，预测与目标相等时最大。

为防止探索中格式崩掉，另设规则式格式奖励，只有同时包含推理标签和分数标签才得 1，否则得 0。

\[r_{f,k}(x_{i})=\begin{cases}1,&\text{required format is satisfied}\\ 0,&\text{otherwise}\end{cases}\]

最终奖励是两项等权相加。

\[r_{k}(x_{i})=r_{p,k}(x_{i})+r_{f,k}(x_{i}).\]

强化阶段学习率为 5×10−6，散度系数为 0.04。

**Thurstone 模型 × Bhattacharyya 系数：** Thurstone 模型把多次采样得到的分数均值和方差转成甲音频胜过乙音频的概率，方差大则概率自动向 0.5 变软，Bhattacharyya 系数衡量这个预测概率与人类二值偏好之间的一致程度；前者负责表达不确定性，后者负责把一致程度变成可优化的奖励。

原文没有报告梯度具体经过哪些参数的细节，缺的是 LoRA 之外基座是否冻结以及奖励反传路径的说明。读者复现时可按已披露的 LoRA 设置先补做，只更新 LoRA 参数并验证格式奖励是否稳定，再对照相邻表中去掉强化学习的版本确认增益是否复现。

### 数据从哪来以及用什么标准衡量好坏

训练用 RELATE 和 XACLE 的训练集，前者有 2862 个片段含真实录音和生成样本，后者有 7500 个片段，两者原本都有相关性标注。论文新采集了共 10362 个片段的整体质量标注，每个片段由 5 名工人独立打分。工人通过亚马逊土耳其机器人平台招募，要求是资深工人、通过率高于 98%、完成过 10,000 个以上任务且位于美国，界面只放音频不放文字以符合整体质量规范，每个任务含 10 个待标片段加 1 个随机插入的锚点，锚点偏差 2 分以上拒收并补标，另有信任与排除资格和分布监控防止都打中间分，每任务报酬 0.40 美元。

先看已有信号能否代替整体质量标注，下图比较了人类相关性标注和 4 个美学维度预测与人类整体质量平均分的相关性。

> **看图路径：** 1. 对比左右两块 RELATE 和 XACLE 中各维度的蓝绿柱高度；2. 注意 PC 柱接近零而 CE 和 PQ 只到 0.3 左右；3. 结合误差线判断没有哪个现有维度能替代 OVL

[![原论文 Figure 2：Pearson (LCC) and Spearman (SRCC) correlations between human OVL ratings and existing evaluation…](https://arxiv.org/html/2611.17644v1/ovl_correlation.svg)](https://arxiv.org/html/2611.17644v1/ovl_correlation.svg)

*论文图 2。原论文 Figure 2:：“Pearson (LCC) and Spearman (SRCC) correlations between human OVL ratings and existing evaluation dimensions, including REL and the four Audiobox-Aesthetics dimensions.”。*

这张柱状图左右分别对应两个数据集，蓝色是线性相关，绿色是排序相关，误差线是自举 95% 区间。可见相关性与整体质量只在 0.3 左右，制作复杂度接近零，名义上最接近的制作质量在一个数据集上中等、在另一个上明显更差，没有任何现有信号超过 0.34，因此必须补采专门的整体质量标注。

标注一致性如下表，表中同时给出原有相关性标注作参照，指标越大表示多人平均后越可靠。

| Dataset | Annotation | ICC(1,1) | ICC(1,kk) | α |
| --- | --- | --- | --- | --- |
| RELATE | REL | 0.449 | 0.762 | 0.446 |
| RELATE | OVL | 0.317 | 0.699 | 0.317 |
| XACLE | REL | 0.435 | 0.755 | 0.435 |
| XACLE | OVL | 0.322 | 0.704 | 0.322 |

该表支撑的判断是单人整体质量判断分歧更大，但 5 人平均后达到中等偏好可靠性，可用于训练。相关性分数分布偏向满分 5 分，整体质量大致以 3 分为中心的单峰，说明两者确实捕捉了不同侧面。评估时域内用两者的官方测试集，域外用标注者和采集协议都不同的 PAM 和 Clotho，相关性原本 0 到 10 分线性映射到 1 到 5 分，每个实验跑 3 个随机种子取中位数。

### 与人类的一致性在什么条件下最高

衡量标准是模型分数与人类平均分之间的线性相关和排序相关，都是越高越好。比较对象包括嵌入方法、专用质量模型、专有大模型和开源大模型，条件是同一测试集和同一人类分数。先看相关性部分，下表按 4 个数据集分别列出两类相关系数。

|  | XACLE | XACLE | RELATE | RELATE | PAM-Audio | PAM-Audio | Clotho | Clotho |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | LCC ↑ | SRCC ↑ | LCC ↑ | SRCC ↑ | LCC ↑ | SRCC ↑ | LCC ↑ | SRCC ↑ |
| Embedding-based Methods |  |  |  |  |  |  |  |  |
| CLAPScore | 0.472 | 0.398 | 0.437 | 0.411 | 0.493 | 0.488 | 0.396 | 0.378 |
| ELSA | 0.398 | 0.371 | 0.375 | 0.377 | 0.497 | 0.467 | 0.416 | 0.404 |
| Proprietary LALMs |  |  |  |  |  |  |  |  |
| Gemini-3.1 Pro | 0.551 | 0.489 | 0.471 | 0.423 | 0.473 | 0.442 | 0.548 | 0.528 |
| Open-Source LALMs |  |  |  |  |  |  |  |  |
| Audio Flamingo 3 | 0.344 | 0.300 | 0.215 | 0.193 | 0.297 | 0.230 | 0.376 | 0.339 |
| Qwen2.5-Omni-7B | 0.162 | 0.153 | 0.063 | 0.047 | 0.319 | 0.305 | 0.334 | 0.301 |
| Qwen3-Omni-30B | 0.399 | 0.374 | 0.256 | 0.256 | 0.373 | 0.353 | 0.438 | 0.444 |
| Cottage (ours) | 0.685 | 0.652 | 0.594 | 0.591 | 0.657 | 0.663 | 0.607 | 0.602 |
| w/o RL | 0.601 | 0.572 | 0.519 | 0.516 | 0.606 | 0.590 | 0.536 | 0.531 |

这张表支撑的判断是在 4 个相关性基准上本文模型都是最高，且去掉强化学习后仍强但明显回落，例如 XACLE 上从 0.685 掉到 0.601。作为基座的 Qwen2.5-Omni 在 RELATE 上只有 0.063，说明听懂不等于会评价；最强的基线 Gemini 在 XACLE 相关性上为 0.551，仍低于本文的 0.685。该结论只在短环境音、现有提示风格和映射后的 1 到 5 分尺度下成立，不宜直接推广到音乐或语音。

再看整体质量部分，下表在两个域外集上比较，专用美学模型的 4 个维度各占一行。

|  | PAM-Audio | PAM-Audio | Clotho | Clotho |
| --- | --- | --- | --- | --- |
|  | LCC ↑ | SRCC ↑ | LCC ↑ | SRCC ↑ |
| Embedding-based Methods |  |  |  |  |
| CLAPScore | 0.379 | 0.373 | 0.201 | 0.223 |
| PAM | 0.587 | 0.610 | 0.445 | 0.451 |
| ELSA | 0.387 | 0.363 | 0.305 | 0.283 |
| Regression-based Predictors |  |  |  |  |
| Aesthetics-PQ | 0.355 | 0.363 | 0.465 | 0.450 |
| Aesthetics-PC | 0.092 | 0.127 | -0.148 | -0.074 |
| Aesthetics-CE | 0.464 | 0.502 | 0.317 | 0.340 |
| Aesthetics-CU | 0.396 | 0.405 | 0.487 | 0.471 |
| Proprietary LALMs |  |  |  |  |
| Gemini-3.1 Pro | 0.404 | 0.473 | 0.512 | 0.502 |
| Open-Source LALMs |  |  |  |  |
| Audio Flamingo 3 | 0.326 | 0.332 | 0.218 | 0.225 |
| Qwen2.5-Omni-7B | 0.221 | 0.206 | 0.271 | 0.329 |
| Qwen3-Omni-30B | 0.429 | 0.424 | 0.252 | 0.227 |
| Cottage (ours) | 0.611 | 0.614 | 0.559 | 0.558 |
| w/o RL | 0.529 | 0.525 | 0.481 | 0.470 |

这张表支撑的判断是本文模型在两个整体质量基准上都是最高，在 PAM 音频上以 0.611 略超专门模型 PAM 的 0.587，在 Clotho 上优势更大。美学维度中没有 1 维能稳定胜出，在一个集上最好的是内容愉悦度，在另一个集上最好的是内容有用性，且都明显低于本文模型。未胜出的反例是 PAM 在自家基准上仍具竞争力，说明域内专用模型不可小看，本文的优势在于跨域更稳。

### 去掉强化学习以及换成其他依据会怎样

消融先看分数。上面两张主结果表都附了去掉强化学习的版本，它在全部相关性和整体质量基准上线性和排序相关都下降，例如整体质量在 PAM 音频上从 0.611 降到 0.529，在 Clotho 上从 0.559 降到 0.481。这说明成对偏好奖励补上了逐点监督之外的信号，但监督本身已提供较强起点。

再看人类对依据的偏好。论文从 PAM 测试集随机抽 50 个例子，对相关性和整体质量分别收集推理，由 3 名标注者盲评两两对比并可判平，报告去掉平局后的胜率和胜平负分解。请按上下两块分别观察相对专有模型、相对监督版本和相对基座的变化。

> **看图路径：** 1. 先分上下两块看 REL 和 OVL 各自的三行对比；2. 注意蓝色、灰色和棕色三段分别代表胜、平和负；3. 对照右侧去掉平局后的胜率理解提升幅度

[![原论文 Figure 4：Results of human pairwise evaluation of generated scoring rationales.](https://arxiv.org/html/2611.17644v1/reasoning_human_eval.png)](https://arxiv.org/html/2611.17644v1/reasoning_human_eval.png)

*论文图 4。原论文 Figure 4:：“Results of human pairwise evaluation of generated scoring rationales. Cottage is compared against Qwen2.5-Omni-7B, the SFT-only variant, and the proprietary model Gemini-3.1 Pro.”。*

这张图上半是相关性，下半是整体质量，每行左侧蓝色是本文被选中的比例，中间灰色是平局，右侧棕色是基线被选中，数字标在条形内部，最右是去掉平局后的胜率。可见对基座优势最大，相关性胜率 75.7%、整体质量 63.4%；对监督版本也有提升，分别为 55.1% 和 57.8%；对专有强模型在相关性上胜率 65.3%，在整体质量上 53.4% 只是小胜，说明精细的图文 grounding 是主要增益点。

定性例子进一步解释了机制，下表节选了时间、计数、失真和伪影 4 类，绿色为有音频支持的断言，红色为无支持的断言，分数同时给出以便对照人类平均分。

|  | Type | Instruction | Qwen2.5-Omni | Cottage |
| --- | --- | --- | --- | --- |
| REL | Temporal | “A loud motor begins to pick up speed then cuts out and slowly stops.” Human-annotated MOS: 2.10 | The audio describes a motor that starts loudly, then slows down and eventually stops. The text also describes a motor that begins to pick up speed, then cuts out and slowly stops. The key elements of the motor’s behavior (starting loudly, slowing down, and stopping) are consistent between the audio and the text. Model predicted MOS: 4.50 | […] Listening to the audio, there is a continuous, loud humming or buzzing sound that resembles a motor or drone. However, the audio remains at a constant, steady pitch and intensity from the beginning to the end. […] there is no sense of the motor “picking up speed,” nor is there a sudden “cutting out” or stopping sound. […] Therefore, the alignment between the text and the audio is very poor. Model predicted MOS: 1.80 |
| REL | Counting | “A bug chirps once and then starts chirping repetitively.” Human-annotated MOS: 2.00 | The audio contains a continuous sound of a bug chirping, which aligns with the description of a bug chirping repetitively. The description does not mention the bug chirping once before starting to chirp repetitively […] Model predicted MOS: 4.50 | […] The audio, however, consists of a continuous, repetitive bug chirping from the very beginning. It completely misses the initial “chirp once” action and plays the repetitive sound throughout its duration. […] Model predicted MOS: 1.80 |
| OVL | Distortion | “Rapid gunfire with male yelling.” Human-annotated MOS: 1.90 | […] The gunshots are clear and distinct, indicating a high-quality sound effect. The man’s speech is also clear and understandable, […] The overall audio quality is consistent with a real-world recording. Model predicted MOS: 4.50 | The audio clip suffers from severe quality degradations throughout its duration. The prominent sounds, which resemble loud bursts or synthetic impacts, are heavily distorted and clipped, resulting in a harsh, abrasive, and unnatural tone. […] Model predicted MOS: 2.00 |
| OVL | Artifacts | “A jackhammer drilling and vibrating continuously.” Human-annotated MOS: 2.60 | The audio clip contains a sound that resembles a vehicle engine idling, which is a common and recognizable sound in real-world recordings. The sound is clear and consistent, without any noticeable background noise or unnatural patterns. Therefore, the audio quality is excellent. Model predicted MOS: 5.00 | […] The most prominent issue with this recording is the significant amount of background noise and static. A persistent hiss and low-frequency rumble are present throughout the entire clip, which masks the finer details of the mechanical sound. Additionally, the audio feels somewhat muffled and lacks high-frequency clarity, […] Model predicted MOS: 2.60 |

该表支撑的判断是基座常犯两类错误，一是复述文字并断言一致，例如把平稳的嗡鸣说成先加速后停止，把缺少孤立虫鸣说成文字没写；二是对明显失真仍套用清晰无噪声的模板话术并给高分，而本文模型能点出恒定音高、缺少孤立事件、削波失真、持续嘶声和低频隆隆声等具体证据，分数也更接近人类。这组例子不能证明所有长尾错误都被修好，附录另有鸭叫加风声水声的多事件和高质量婴儿哭声等例子，仍需对照完整输出理解边界。

### 哪些情况还不能指望它

首先是数据覆盖。监督来自 RELATE 和 XACLE 的音频域、提示风格和标注者池，论文明确指出音乐为主、语音为主或非英语指令等场景未被充分覆盖。虽然在 PAM 和 Clotho 上显示了跨域转移，但这只是环境音内部的转移，不能外推到歌曲结构或口语可懂度。

其次是时长。现有基准主要是 30 秒以内的短片段，长达数分钟的声音景观或完整作品需要跟踪长程动态和结构连贯，短片段评委没有为此设计，直接拿来评长音频会漏掉结构问题。

第三是定位粒度。模型能用文字指出事件顺序错了或有嘶声和削波，但不输出具体时间戳，无法精确到第几秒出现了伪影。需要细粒度排错时，还要另做显式时间 grounding。伦理上论文提醒不要只对着自动分数优化生成器，否则容易过拟合到指标，仍需定期做人工复核。

### 要复现先准备什么

先准备数据划分和量表。训练用 RELATE 的 2862 个和 XACLE 的 7500 个片段及各自的相关性标注，另需按相同协议采集或获取整体质量 5 人平均分；评估时相关性 0 到 10 分线性映射到 1 到 5 分，其余基准本就是 1 到 5 分。指标同时算线性和排序相关，重复 3 个随机种子取中位数。

模型从 Qwen2.5-Omni-7B 起步，LoRA 排序在 16、32、64 中搜索，缩放取 2 倍排序，最终用 64 和 128。监督学习率在 1×10−4 到 1×10−5 之间搜索，强化在 1×10−5 到 1×10−6 之间搜索，采样温度在 0.8、1.0、1.2 间搜索，最终强化用 5×10−6、散度系数 0.04、每输入采样 8 条。提示要求推理放 1 对标签、分数放另 1 对标签并保留 2 位小数，相关性提示给文字，整体质量提示只给音频。

容易误解的是把某次搜索到的最优值当成可部署的提升。论文报告的是固定流程下的中位数，不是事后挑最好的那次，复现时应完整跑搜索和多次种子再比中位数，并先验证格式奖励是否稳定，否则分数解析会失败。

### 什么时候值得试以及下一步验证什么

当你的生成模型迭代卡在人工试听太慢，又需要知道是漏事件、数错数、顺序错还是音质脏时，这个带依据的评委值得试。它 1 次给出证据加分数，适合放在模型选择和坏例聚类里，而不是单独作为优化目标。

第一步是按复现节搭出监督版本，确认在自有验证集上排序相关为正且格式稳定，再加入成对偏好强化并观察域外集是否同步提升。如果只有域内提升而域外不动，多半是提示风格或标注者分布变了，需要补采少量本域的整体质量平均分。

还需补的验证是长音频切分策略、时间戳定位以及音乐语音等新域的校准。没有这些验证，就不要把短环境音上的最高相关直接理解为通用听感最优。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.17644v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-16/)
