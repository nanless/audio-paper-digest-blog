---
title: "TS-SP: Learning Speaker-Preserving Representations in Audio Large Language Models"
date: 2026-10-11
draft: false
tags: [说话人验证, LoRA, 音频大模型, 语音]
categories: [论文速递]
description: "针对音频大语言模型能听懂内容却难分辨说话人的问题，论文提出先在音频编码器做说话人监督、再冻结编码器训练语言模型做成对判断的两阶段低秩适配方法，在 VoxCeleb 同域上把等错率从 7.01% 降到 4.37%，但跨域到 CN-Celeb 时未带来额外增益。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.04887"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "让音频大语言模型留住说话人信息：两阶段说话人保持"
paper_digest_original_title: "TS-SP: Learning Speaker-Preserving Representations in Audio Large Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.04887v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.04887v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.04887v1.pdf"
paper_digest_primary_task: "说话人验证"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speaker-verification","label":"说话人验证"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "LoRA"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音频大语言模型能听懂内容却难分辨说话人的问题，论文提出先在音频编码器做说话人监督、再冻结编码器训练语言模型做成对判断的两阶段低秩适配方法，在 VoxCeleb 同域上把等错率从 7.01% 降到 4.37%，但跨域到 CN-Celeb 时未带来额外增益。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junjie Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zheng Liang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhe Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tianchi Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kong Aik Lee"}]
paper_digest_abstract_sha256: "517f1c5fcc392d0e47167e2955f428db8ebb8b326f5ba4fce099c3d920444f27"
paper_digest_sidecars: {"citation.bib":{"sha256":"c67a8a31469e1c05e8cd509599937865e973c01fbf3a6029541953c8e8c29009","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04887/citation.bib"},"citation.json":{"sha256":"3ff4c92e39bd39240bd985abe81ae364555acc631b88e28efd2095c519978085","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04887/citation.json"},"citation.ris":{"sha256":"50b525a1aeb25428bd0db044b554f3290e4ee9602e0cc01841a58136b763dab3","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04887/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"d59215315476526f9e9e3a4cfc5968ec2d29522f43333ca645126c5b514c0463","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04887/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1a922b3011df5e79e6acae8fbbc6ecc7cb40e0c59031088c6e278cbd204aab28"
paper_digest_api_reader_plan_sha256: "01afadf4b6a0f6904ac61273f668ab701e6384d1ce1469109779fc0837df9260"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "473cad79319f9b8cfe84c5e9569365b01c2c8b6b6e6fc963103d869d9ce5caa8"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "d18f72c3696baf7aaf5fbf189ca85621eb019d107971945ba4ff770b5b22f061"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f34b0b45c0444a4e1cd1dd4d2b1b1385846aaed237644f32cb2ef66ce18612b2"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a2881deb835ccc422a2e678b3a0f0b41870240d6fbed6c3299303bfa16279add"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 让音频大语言模型留住说话人信息：两阶段说话人保持

> 英文题目：*[TS-SP: Learning Speaker-Preserving Representations in Audio Large Language Models](https://arxiv.org/abs/2610.04887v1)*

> 标签：#说话人验证 | #LoRA | #音频大模型 | #语音
>
> 评分：**5.8/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Junjie Li：机构信息未在 arXiv HTML 中可靠披露
- Zheng Liang：机构信息未在 arXiv HTML 中可靠披露
- Zhe Li：机构信息未在 arXiv HTML 中可靠披露
- Tianchi Liu：机构信息未在 arXiv HTML 中可靠披露
- Kong Aik Lee：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

音频大语言模型（Audio Large Language Model，ALLM）能理解语音内容，但直接判断两段语音是否来自同一说话人时表现较弱，多用户场景下难以可靠地使用身份线索。本文研究的问题是说话人身份保持（speaker identity preservation），即保留可区分身份的音频线索，并让生成文本的语言模型（Language Model，LM）能使用这些线索完成验证。输入是两段待验证语音，输出是同一或不同说话人的判断及连续分数，难点在于原生音频编码器缺少说话人判别目标，而语言模型也不熟悉说话人比较任务。方法分为两步：第一步在音频编码器中间层输出上做说话人监督，用统计池化和说话人分类头训练音频低秩适配（Low-Rank Adaptation，LoRA）参数；第二步冻结已适配的音频通路，把两段音频加静音拼接后送入模型，用回答是或否的成对损失训练语言模型 LoRA 参数。推理只走原生音频到语言通路，不使用说话人分类头。与直接对音频和语言模型联合做成对问答微调的基线相比，该两阶段做法在同域数据上错误率更低且阈值偏置更小。在 Vox1-O 上，TS-SP（Two-Stage Speaker Preservation，两阶段说话人保持）相对成对损失适配基线的等错误率（Equal Error Rate，EER）从 7.01% 降至 4.37%。结论适用于所评测的 Qwen2.5-Omni-7B 骨干和 VoxCeleb 同域评测，跨域 CN-Celeb 未显示额外增益，固定阈值决策仍不稳定。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频大语言模型能做什么，还缺什么

这篇论文研究的输入是语音波形，目标是判断两段语音是否来自同一说话人，也就是说话人验证。音频大语言模型已经能在语音识别、语音翻译和音频问答上取得不错效果，Qwen2.5-Omni-7B 还支持语音指令跟随和语音生成。但这些能力主要关乎内容理解，不能保证模型留住了能区分身份的声学线索。论文引用的已有报告指出，零样本说话人验证性能弱，模型在多轮对话中也难以判断说话人一致性。

对于共享助手是否向当前说话人披露隐私等多用户场景，这种身份判别能力是必需的。论文把要解决的问题定义为说话人身份保持：一方面要在音频侧保留可区分身份的线索，另一方面要让语言模型部分能真正使用这些线索做说话人相关决策。读者需要先分清内容与身份是两类信息：前者是说了什么，后者是谁说的，模型听懂前者不等于保留了后者。

### 已有路线如何处理说话人信息

专用说话人验证系统通常学习话语级说话人嵌入，做法是带说话人判别的训练加上时间聚合。论文把这类表示学习目标搬进音频大语言模型原生的音频编码器，而不是外加一个说话人编码器，这一点是理解分工的关键。与之可比的路线有几类。第一类是借助外部已训练好的说话人表示，例如把冻结的 ECAPA-TDNN 嵌入投影到语言模型输入空间，或用分层分词器处理冻结编码器的帧级与话语级特征，这类做法在推理时仍依赖外部编码器。

第二类是直接在音频大语言模型上做成对问答微调，例如对 Kimi-Audio 用规则挖掘难样本对做问答微调，本文的成对损失适配基线就属于这一范式，只是换了主干、样本对、提示词和低秩适配配置，并非直接复现他人分数。第 3 类是在同一模型内加说话人相关联合目标，例如用低秩适配同时优化伪造检测、三分类验证和在均值池化特征上的角度间隔说话人损失。

TS-SP 与它们的区别在于分两步走：先在原生音频编码器内部做中间层说话人监督，再单独做成对的语言模型适配，且全程固定预训练基座权重。比较时要注意输入、目标、监督位置和运行阶段是否相同，不能把是否外挂编码器不同的系统放在同一条件下比优劣。

### 任务的输入输出与必须保留的信息

以一个验证试次为例，输入是两段语音 A 和 B 加上一句验证提示词，输出是同一说话人还是不同说话人。训练时还要给出正确答案词 Yes 或 No。必须保留的信息是与身份相关的声学差异，例如音色、发音习惯在帧序列中的稳定模式，而与文本内容、信道和时长相关的变化应尽量不干扰判断。论文的评测把连续分数与固定阈值回答分开看：连续分数用于衡量排序能力，固定阈值回答用于衡量直接按 Yes 或 No 输出是否可用。

举例来说，模型可能把同说话人试次的分数普遍打得更高，排序不错，但在零阈值处偏向回答 Yes，导致不同说话人试次准确率低，这就是后文反复出现的同说话人偏置现象。理解这种偏置，才能读懂为什么等错率变好不一定等于原生阈值下总准确率变好，尤其在目标与非目标比例极不均衡的评测集上。

### 两阶段流程如何分工

TS-SP 的全称是 2 阶段说话人保持，实例化在 Qwen2.5-Omni-7B 上。该主干要求能拿到中间音频特征，且音频与语言部分可分别适配。在该主干中，音频编码器向 Thinker 中的文本生成解码器提供特征，论文把该解码器称为语言模型。第一阶段学习音频低秩适配器并施加中间层说话人监督；第二阶段冻结已适配的音频通路，只训练语言模型低秩适配器做说话人比较。

所有预训练基座权重始终固定。推理走原生音频到语言通路，不用说话人头，也不需要额外连接器。下面的官方示意图把这种分工画得很清楚，上半是单条语音的表示学习，下半是语音对加提示词的决策学习。

读图时先区分训练专用分支与推理实际通路，再看可训练参数从哪里移到哪里，这有助于理解为什么第二阶段能复用第一阶段留下的身份线索。

> **看图路径：** 1. 先看上下两条带的输入差异：上为单条语音，下为带 1 秒间隔的语音对加提示词；2. 再看橙色与蓝色标记的可训练位置如何从音频侧转移到语言模型侧；3. 确认虚线框内的训练专用分支在推理时不再出现；4. 对照箭头走向说出从波形到损失的完整路径

[![原论文 Figure 1：TS-SP: Stage 1 learns audio LoRA with intermediate speaker supervision; Stage 2 freezes the…](https://arxiv.org/html/2610.04887v1/TS-SP_two_stage.png)](https://arxiv.org/html/2610.04887v1/TS-SP_two_stage.png)

*论文图 1。原论文 Figure 1:：“TS-SP: Stage 1 learns audio LoRA with intermediate speaker supervision; Stage 2 freezes the adapted audio pathway and trains LM LoRA for speaker comparison.”。*

上半框对应第一阶段：单条语音进入音频编码器，固定基座权重加可训练的音频低秩适配，输出中间特征后进入虚线框内的统计池化、投影加层归一化、加性角度间隔 softmax 分支，计算说话人损失，该分支标注为训练专用。下半框对应第二阶段：带 1 秒间隔的语音对和提示词进入已冻结的音频编码器，再进入语言模型，语言模型侧固定基座权重、训练语言模型低秩适配，只监督答案词的交叉熵损失。2 阶段都不更新基座，推理时只保留音频低秩适配和语言模型低秩适配。

### 第一阶段如何把说话人监督送进音频编码器

记音频编码器第 l 层输出为 H(l)，包含 T 帧、每帧维度为 dh。论文用无参数的统计池化处理有效帧：掩掉填充，所有有效帧等权重参与，不做注意力或可学习帧加权。具体是拼接时间均值和总体标准差，得到 2 倍 dh 维向量。在实现中 dh 为 1280，因此池化向量为 2560 维。之后可训练的说话人头把它投影到 de 维，de 为 256，再做层归一化和 L2 归一化，并用加性角度间隔 softmax 分类 C 个训练说话人，C 为 5994，尺度 a 为 30，间隔 m 为 0.2。设 y 为说话人标签，theta_j 为归一化嵌入与第 j 类归一化权重向量之间的夹角，损失形式如下。

\[\mathcal{L}_{\mathrm{spk}}=-\log\frac{e^{a\cos(\theta_{y}+m)}}{e^{a\cos(\theta_{y}+m)}+\sum_{\begin{subarray}{c}j=1\\ j\neq y\end{subarray}}^{C}e^{a\cos\theta_{j}}},\]

该公式的直观含义是把正确类的夹角先加上间隔 m 再算余弦，迫使模型把类内压得更紧。分母是对所有类的求和，分子是正确类，取负对数即分类损失。只有到第 l 层为止的音频编码器低秩适配参数和说话人头被该损失更新，统计池化本身无参数。论文用前向钩子取出第 30 层零基索引的输出做池化和分类。

**音频编码器 × 说话人头：** 音频编码器负责把波形变成逐帧特征，是保留说话人线索的位置；说话人头只在第一阶段训练时存在，负责把池化后的特征变成可分类的说话人嵌入并给出监督信号。两者搭配的意义是让监督直接作用于编码器中间层，而推理时不再需要说话人头。

**统计池化 × 加性角度间隔 softmax：** 统计池化负责把变长帧序列压缩成定长向量，它拼接时间均值和总体标准差，不含可训练参数；加性角度间隔 softmax 负责在归一化嵌入和类别权重之间的夹角上加间隔，迫使同说话人更集中、不同说话人更分开。两者串联就把帧级特征变成有判别力的说话人监督。

**低秩适配 × 预训练基座权重：** 预训练基座权重在全程保持固定，负责保留原模型的通用语音和语言能力；低秩适配是在注意力投影上外加的小参数矩阵，负责学习说话人相关的新调整。组合后只用很少参数实现适配，推理时适配参数与基座一起工作。

这里的代价是第一阶段需要在损失通路上维护音频适配器与说话人头共 6.000M 参数，其中 0 到 30 层适配器为 3.809M，说话人头为 2.191M，最后一层适配器在该损失通路之外，保持初始化状态。

### 第二阶段如何让语言模型学会比较说话人

第二阶段沿用成对音频拼接策略：对每个验证试次，把音频段 A 和 B 拼接，中间加 1 秒静音。训练提示词固定为英文问句 Are these two audio segments spoken by the same speaker? Answer only Yes or No.，目标是同说话人试次回答 Yes，不同说话人试次回答 No。每个拼接对至多 13 秒，单条至多取前 6 秒，短输入右侧补零，音频必要时重采样到 16 kHz。第二阶段只更新语言模型低秩适配参数，已适配的音频编码器冻结，说话人头不参与成对前向。

推理时不再需要分类头，直接走音频到语言的原生路径。这种设计把表示学习与决策学习解耦：第一阶段负责让音频特征更具身份判别力，第二阶段负责让语言模型读懂这种差异并映射到 Yes 或 No。需要注意，论文没有提供去掉第一阶段、只做第二阶段的单独消融，因此整体提升不能直接归因于中间层说话人监督，还包含训练编排和额外优化的作用。

### 训练数据、参数量与优化编排

基线与 TS-SP 2 阶段都只用原始 VoxCeleb2 开发集录音，不做数据增强或变速扰动。第一阶段用 5994 个说话人的话语做分类监督；基线与第二阶段用同样的 200,000 个录音对，其中 10 万同说话人、10 万不同说话人，批采样保持目标与非目标约 1 比 1。低秩适配作用于全部 32 层音频编码器的查询、键、值投影，以及全部 28 层语言模型的查询、键、值和输出投影，不适配音频编码器的输出投影。秩 r 为 16，缩放系数 alpha 为 32，缩放倍率 alpha 除以 r 等于 2，丢弃率为 0.05，无可训练偏置。

音频编码器与语言模型适配器分别含 3.932M 和 10.093M 参数，M 为 10 的 6 次方。成对损失适配基线联合优化两套适配器共 14.025M 参数，只用成对损失，没有说话人头和单独的说话人预训练阶段。TS-SP 第二阶段冻结音频通路，只训练 10.093M 语言模型适配器参数，推理时两系统保留同样数量的低秩适配参数 14.025M，区别在于这些参数如何被优化得到。成对损失只监督答案词，提示词与音频输入位置不计入交叉熵，形式如下。

\[\mathcal{L}_{\mathrm{pair}}=-\log P(t\mid A,B,q),\]

其中 q 为验证提示词，t 为正确答案词 Yes 或 No。

**成对损失 × 验证分数：** 成对损失负责在训练时只监督答案词 Yes 或 No 的对数概率，让语言模型学会比较两个音频段；验证分数负责在推理时用 Yes 与 No 的对数概率差给出连续分数，用于扫阈值计算等错率。前者是离散答案的训练目标，后者是连续排序的评测依据。

优化统一用 AdamW，低秩适配学习率为 1e-5，权重衰减 0.01，线性热身后余弦衰减。2 卡训练，每卡批量 2，梯度累积 8 步，有效批量 32。说话人头学习率为 1e-4。第二阶段从第一阶段 3 轮共 102375 步后的检查点启动，用全新初始化的优化器和调度器，再跑 5 轮共 31250 步。论文报告每个运行的最终检查点结果，而非按验证性能挑选的检查点，这意味着结果包含训练末态的随机性，复现时应保留同样的选择规则才能对齐。

### 评测集、打分规则与指标方向

评测用清理后的 Vox1-O、Vox1-E、Vox1-H 试次表，跨域评测随机抽取 10% 的 CN-Celeb 试次，保持原始目标与非目标比例，不做额外领域自适应。该子集共 348430 个试次，其中 1776 个目标、346654 个非目标，非目标占比达 99.49%。所有系统用 16 kHz 音频，至多保留每段波形前 6 秒，拼接时加 1 秒静音后作为单个输入。连续分数取 Yes 与 No 答案词概率的对数差，记 zYes 与 zNo 为同一预测位置上两个单字答案的逻辑值，由于 softmax 归一化相消，分数等于两者之差，越大越支持同说话人假设，形式如下。

\[s=\log P(\texttt{Yes}\mid A,B,q)-\log P(\texttt{No}\mid A,B,q).\]

论文明确该基于词的分数不一定是校准后的说话人假设似然比，不能当作概率解释。扫过分数阈值得到等错率，即误接受与误拒绝相等处，以及归一化最小检测代价 minDCF，采用漏检与误检代价均为 1、先验目标概率 0.01，并以 0.01 归一化，两者越低越好。准确率用固定原生阈值 s 等于 0：大于 0 判 Yes，否则判 No，分别统计目标准确率、非目标准确率和按试次比例加权的总体准确率，而非两者简单平均。

**等错率 × 固定阈值准确率：** 等错率负责扫过全部阈值找到误接受与误拒绝相等的位置，反映排序能力好坏，越低越好；固定阈值准确率负责在分数等于 0 处直接按大于 0 判 Yes、否则判 No，反映原生问答输出是否可用。两者搭配才能看出排序变好是否等于直接回答变好。

零样本比较覆盖 Kimi-Audio-7B-Instruct、Qwen2-Audio-7B-Instruct 和 Qwen2.5-Omni-7B，微调系统只有同主干的成对损失适配基线和 TS-SP，且基线分数为本文实测，并非直接复现原论文。

### 同域主结果在什么条件下成立

比较的问题是：在同一主干、同一 VoxCeleb2 训练数据和同一成对提示词下，2 阶段说话人保持是否优于只做成对损失适配。公平条件是两者推理时低秩适配参数量相同，训练对数量相同，评测都用前 6 秒加 1 秒拼接与答案词概率差打分。指标方向为等错率与最小检测代价越低越好，准确率越高越好。下表截取 Vox1-O 上基线与 TS-SP 的对照，列出等错率、最小检测代价和 3 类准确率。

| System | EER (%) | minDCF | Target ACC (%) | Nontarget ACC (%) | Overall ACC (%) |
| --- | --- | --- | --- | --- | --- |
| Paired Loss Adaptation Baseline [16] | 7.01 | 0.915 | 97.99 | 87.77 | 92.88 |
| TS-SP (Ours) | 4.37 | 0.611 | 97.49 | 93.82 | 95.66 |

表中 Vox1-O 基线等错率为 7.01%，TS-SP 降至 4.37%，最小检测代价从 0.915 降到 0.611，总体准确率从 92.88% 升至 95.66%，其中目标准确率略降而非目标准确率从 87.77% 升至 93.82%，目标与非目标差距缩小，说明在零阈值处同说话人偏置减轻。论文同时报告 Vox1-E 上等错率从 7.64% 降到 4.41%，总体准确率从 92.47% 升至 95.48%；Vox1-H 上等错率从 19.31% 降到 9.43%，总体准确率从 74.97% 升至 86.44%，非目标准确率从 52.77% 升至 75.42%。零样本侧最优的 Vox1-O 等错率仅为 32.03%，且三系统最小检测代价均为 1.000，Qwen2-Audio 在零阈值下全部判 Yes，Kimi-Audio 总体准确率在三表上均低于 43%，说明未经适配时排序与直接回答都不可用。这些结论只在 Qwen2.5-Omni-7B、VoxCeleb2 训练、无增强、最终检查点和所述打分规则下成立，且论文提醒不能把整体增益单独归因于中间层监督。

\[s_{v}=\log P(v^{+}\mid A,B,q_{v})-\log P(v^{-}\mid A,B,q_{v}),\]

上式是提示词变化时验证分数的推广，对正负言语序列分别取条件对数概率差，多词言语用求和的条件对数概率，决策仍以大于 0 判正，否则判负。

### 跨域到 CN-Celeb 时发生了什么

跨域比较的问题是：VoxCeleb 上学到的 2 阶段适配能否直接用于 CN-Celeb。条件是随机 10% 子集、保持原始比例、无领域自适应，打分与阈值规则不变。结果是两个微调系统相对零样本 Qwen2.5-Omni-7B 都改善了等错率，零样本为 31.93%，基线为 16.49%，TS-SP 为 16.74%，最小检测代价从 1.000 略降到 0.985 与 0.984。但这种排序能力的改善没有转化为原生阈值下总体准确率的提升：零样本为 89.72%，基线降至 49.92%，TS-SP 降至 34.89%。

原因在于该表非目标占绝对多数，总是回答 No 不经音频处理就能达到 99.49% 总体准确率，超过所有三系统，因此总体准确率主要由非目标决策主导，零样本更高的总体准确率不应解读为更强的说话人判别力。直接比较两个微调系统，TS-SP 等错率略高于基线，最小检测代价仅低 0.001，目标准确率两者都超过 99%，但非目标准确率从 49.66% 降到 34.56%，说明 VoxCeleb 上的额外增益没有迁移到 CN-Celeb。论文把这种有限迁移与传统说话人识别中跨域泛化困难一致看待，读者不应把同域提升推广到跨域部署。

### 换提示词时等错率与阈值决策是否一起稳定

该小节回答同一 TS-SP 检查点在未见提示词下是否可用。训练只用 P0 英文 Yes 或 No 问句，测试引入 P1 到 P5，P1 改写英文指令，P2 到 P4 改变答案形式，P5 同时改变语言与言语标记为中文是或不是。打分按上节推广公式处理多词言语。下表截取 P0、P1 与 P5 的对照，列出提示文本、等错率、最小检测代价与两类准确率，完整 6 种提示的细节以原文表 2 为准。

| ID | Prompt supplied with the audio pair | EER (%) | minDCF | Target ACC (%) | Nontarget ACC (%) |
| --- | --- | --- | --- | --- | --- |
| P0 | Are these two audio segments spoken by the same speaker? Answer only Yes or No. | 4.37 | 0.611 | 97.49 | 93.82 |
| P1 | Do these two audio segments belong to the same speaker? Respond only with Yes or No. | 4.33 | 0.611 | 97.55 | 93.66 |
| P5 | 这两段音频是否由同一个说话人说出？只回答“是”或“不是”。 | 4.50 | 0.643 | 99.88 | 79.88 |

可见等错率在 P0 到 P5 上保持在 4.31% 到 4.79% 之间，英文改写影响小，数字答案 P3 最高为 4.79% 且最小检测代价最高为 0.824，中文 P5 等错率为 4.50% 接近 P0 的 4.37%。但固定阈值决策并不稳定：P5 目标准确率高达 99.88%，非目标准确率降至 79.88%，表现出更强的同说话人偏置；P3 与 P4 的两类准确率分布也与 P0 不同。因此测试提示带来了相似的等错率，却没有保证稳定的最小检测代价或固定阈值决策。由于 P2 到 P5 同时改变措辞与言语标记，答案格式的影响无法单独分离，P5 还额外改变语言。复现时应同时报告等错率与阈值相关指标，不能只看等错率就声称提示词鲁棒。

### 证据不支持哪些推广

首先，主干单一，所有结论只在 Qwen2.5-Omni-7B 上验证，其他主干仍待评估。其次，缺少关键消融，论文明确整体结果支持 TS-SP 作为整体，但不能分离中间层说话人监督与训练编排、额外优化步数各自的贡献。第三，跨域无增益，CN-Celeb 上 TS-SP 相对基线等错率略高、原生阈值总体准确率更低，不能声称 2 阶段带来更好的泛化。第四，提示词实验显示等错率稳定但阈值决策漂移，且措辞、答案格式、语言三因素混杂，不能声称已实现稳定的固定阈值部署。

第五，内容理解、语音识别与指令跟随能力的保持尚未评测，论文把这列为未来工作，读者不能假设说话人适配没有损害原有能力。最后，来源方面本次未发现绑定且完成 HTTPS 验证的作者资源，不得声称代码、模型或数据已公开，这不是技术缺陷，只是复现时需要自行按论文细节实现。

### 复现第一步做什么与关键细节

值得尝试的情形是：已在使用 Qwen2.5-Omni-7B 做语音问答，且需要在同域内做成对说话人验证，同时能接受固定阈值仍需校准。复现第一步是按原文搭建数据与适配位置：只用 VoxCeleb2 开发集原始录音，不做增强；单条至多前 6 秒，成对拼接加 1 秒静音后至多 13 秒，16 kHz 输入；低秩适配放在 32 层音频编码器的查询、键、值与 28 层语言模型的查询、键、值、输出上，秩 16、alpha32、丢弃 0.05、无偏置，基座全程冻结。

先在第 30 层零基索引处挂钩子做统计池化，经 256 维投影、层归一化、L2 归一化后用尺度 30、间隔 0.2 的加性角度间隔 softmax 训练 0 到 30 层音频适配器与说话人头；再冻结音频通路，用 200,000 对 1 比 1 数据与固定英文提示词只监督答案词训练语言模型适配器。优化用 AdamW，适配器学习率 1e-5、头 1e-4，有效批量 32，第一阶段 3 轮后换全新优化器再跑第二阶段 5 轮，取最终检查点。评测用清理后 Vox 试次表与答案词概率差打分，同时报告等错率、最小检测代价与 3 类准确率，并用 10%CN-Celeb 子集检查跨域是否失效。

还需要补的验证包括其他主干、去掉第一阶段的对照、阈值校准方法，以及语音识别与指令跟随是否退化。

### 一句话总结与何时谨慎使用

综合来看，TS-SP 用两步低秩适配把说话人判别目标先送进音频编码器、再教会语言模型比较语音对，在 Vox1-O、E、H 同域上相对同条件基线明显改善排序与总体准确率，且等错率对测试提示词变化不敏感。但这些证据只支持同主干同域内的整体改善，不支持归因到单一组件，不支持跨域更优，也不支持原生阈值直接部署。当部署域接近 VoxCeleb 且能重估阈值时可以尝试；当需要跨信道跨语言、要求固定阈值开箱即用，或必须保留原有内容能力时应谨慎，需先补跨域校准、阈值选择与能力保持三项验证再做结论。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.04887v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
