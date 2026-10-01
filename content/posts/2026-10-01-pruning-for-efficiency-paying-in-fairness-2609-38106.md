---
title: "Pruning for Efficiency, Paying in Fairness: Demographic Disparities in Pruned Speech-LLMs"
date: 2026-10-01
draft: false
tags: [语音识别, 模型剪枝, 公平性, LoRA]
categories: [论文速递]
description: "论文在 SLAM-ASR 管线上做音频编码器自顶向下剪枝并在每层重训投影器，发现 Whisper Large 剪 2 层时聚合词错率从 21.6% 降到 21.1% 却让 Black 组上升 0.9 个百分点，到剪 8 层时 Black 与 Asian 差距从 13.5 扩大到 24.5 个百分点，而 LoRA 虽降低各组误差却让优势组获益更多。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.38106"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "剪掉两层误差反而降了：被平均数藏起来的口音与族裔差距"
paper_digest_original_title: "Pruning for Efficiency, Paying in Fairness: Demographic Disparities in Pruned Speech-LLMs"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.38106"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.38106.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"},{"facet":"method","id":"method.lora","label":"LoRA"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 7.8
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文在 SLAM-ASR 管线上做音频编码器自顶向下剪枝并在每层重训投影器，发现 Whisper Large 剪 2 层时聚合词错率从 21.6% 降到 21.1% 却让 Black 组上升 0.9 个百分点，到剪 8 层时 Black 与 Asian 差距从 13.5 扩大到 24.5 个百分点，而 LoRA 虽降低各组误差却让优势组获益更多。"
paper_digest_authors: [{"affiliations":["School of Computer Science and Electronic Engineering, University of Essex, UK"],"name":"Ganesh Pavan Kartikeya Bharadwaj Kolluri"},{"affiliations":["School of Computer Science and Electronic Engineering, University of Essex, UK"],"name":"Michael Kampouridis"},{"affiliations":["School of Computer Science and Electronic Engineering, University of Essex, UK"],"name":"Ravi Shekhar"}]
paper_digest_abstract_sha256: "05ea3d24a9e37160b71d7c58e125c921b43df1ba8143d213bfd0bce6164a1f75"
paper_digest_sidecars: {"citation.bib":{"sha256":"bc8a16d9a7285ddfb58565076d4460b6b35625ff83da557bab21cf36b8c1b2b2","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-38106/citation.bib"},"citation.json":{"sha256":"80ed7512880cab08bd05a9f3097e85c9629857cb78c10724ceb057ed0df8e43c","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-38106/citation.json"},"citation.ris":{"sha256":"2884163294073967c94044e5e54ab73a05c72454778bf9f09e6419cdb784c5fa","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-38106/citation.ris"},"rethink-context.json":{"sha256":"6b1a3f14b0f7108e6ddef680744ea58f6b9cf70ebeab1ab6e7f1f4401c501126","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-38106/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8c633e72ca64c2105fbec4d81b2bb0bf1c6ceeddf438d8bb10415e2a494084a9"
paper_digest_api_reader_plan_sha256: "31aba0889dd7142dc45b1903c2aa255dd588f3c6178490350d5e8e8f936bdb1a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "385fadcb7676e3d4a540444891141732ea984e444c9c5f8f05bea2b22017fb43"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d25a83d49de61432bc239173ab6a1a8048d8f686544834e738d829eec2745423"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5557b6ee8707743d38ed7ef9eeb704b0edfeb25baf369bf562e045e88b4a6199"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "37cb4d35f69f9acc664e5c22ab8dafb8332e547678b253d57d05c4c3960e4e5c"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 剪掉两层误差反而降了：被平均数藏起来的口音与族裔差距

> 英文题目：*[Pruning for Efficiency, Paying in Fairness: Demographic Disparities in Pruned Speech-LLMs](https://arxiv.org/abs/2609.38106)*

> 标签：#语音识别 | #模型剪枝 | #公平性 | #LoRA
>
> 评分：**7.8/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Ganesh Pavan Kartikeya Bharadwaj Kolluri：School of Computer Science and Electronic Engineering, University of Essex, UK
- Michael Kampouridis：School of Computer Science and Electronic Engineering, University of Essex, UK
- Ravi Shekhar：School of Computer Science and Electronic Engineering, University of Essex, UK

## 📌 核心摘要

语音识别任务以连续语音波形为输入、以对应文本转写为输出，实际难点在于不同族裔、性别与口音的声学差异使基线词错误率已相差近一倍，而总体指标会掩盖最差群体的持续恶化。本文沿SLAM-ASR管线分四步推进：以Whisper Small 12层、Medium 24层、Large-v2 32层搭配Qwen2.5-3B构建基线并只训练投影器，其次自顶向下每次移除2层并从零重训投影器形成可部署变体至L-8，再用低秩适配联合微调检验恢复效果至L-10，最后在Fair-Speech与Common Voice上按族裔与口音等分组独立核算词错误率与差距。与只报告总体指标的已有剪枝研究不同，本工作把最差组词错误率与绝对差距与差距比作为显式选择依据，揭示了隐藏性恶化机制。在Fair-Speech上Whisper Large移除2层后总体词错误率从21.6%降至21.1%，而Black组上升0.9个百分点，移除8层后Black与Asian组差距从13.5个百分点扩至24.5个百分点。在Fair-Speech评测设置下，剪枝8层后Black组的WER为51.0%，高于Asian组的WER 26.5%。结论边界在于放大部分仅在Fair-Speech大模型出现，Common Voice英语与荷兰语多为差距维持而非扩大，丹麦语因基线过高与标注稀疏无法得出组级结论。其适用边界受限于语料与尺度，深剪枝与跨语言场景尚未验证公平性外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/KarthikKolluriKB/SpeechLLM-Pruning-Fairness> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：这篇解读要帮你复述什么？

本文解读的对象是编号 2609.38106 的论文，主题是语音大模型剪枝后的公平性。输入证据只有论文正文与官方原图像素，代码链接当前可用，地址是论文给出的开源仓库，但解读的事实判断不依赖仓库内容，只依赖正文报告的实验。你读完应该能复述三件事：研究者如何一步步剪掉编码器层并重训出可部署模型，如何按人口分组计算词错率，以及为什么只看平均数会做出错误的上线决定。

先把白话讲清。自动语音识别就是把说话声转成文字，词错率越低越好。语音大模型在这里指冻结的语音编码器加冻结的大语言模型，中间用一个很小的投影器把声音表示翻译成文字模型能读的表示。剪枝在这里特指结构化剪枝，每次从编码器顶部拿掉两层。公平性在这里不是抽象价值观，而是具体可算的分组词错率：同一套模型在不同族裔、性别、年龄、社会经济组上的错误率差多少。

论文的中心矛盾是效率与公平的冲突。压缩通常只看聚合词错率，也就是把所有测试语句混在一起算一个总数。这个总数变好时，工程师自然认为可以上线。但论文显示总数变好可能只因为多数人或优势组变好，而原本最差的组反而变差。对刚入门的研究生，关键动作是学会把总数拆开：先报告总数，再报告最差组，再报告最差与最好的差值与比值，3 个数缺一不可。

### 任务与路线：以前的偏差和压缩研究各走了哪条路？

偏差这条路线早就发现语音识别对不同人不公平。早期商业系统对黑人说话人的错误率明显高于白人说话人，后续工作把原因追到声学模型与非裔美国英语形态句法，以及性别、口音、母语背景。Whisper 这类大预训练模型也被报告对北美口音好于英澳口音，母语好于非母语。语料一侧逐渐出现带人口标注的评测集，Common Voice 由贡献者自愿填写口音性别年龄，Fair-Speech 则专门为暴露偏差设计，覆盖族裔、社会经济、性别、年龄与母语。

**域内训练 × 域外评测：** 域内训练指投影器与 LoRA 都在 Common Voice 英文上训练的分工，域外评测指主力公平评测放在只做评测不做训练的 Fair-Speech 上的分工。搭配理由是 Fair-Speech 人口标注最丰富而训练仍用公开众包语音，组合意义是既能测多个人口轴又能检验差距放大是否只是换了数据集造成的。

压缩与偏差的交叉路线结论并不一致。视觉领域发现剪枝与量化可能放大对少数样本的错误，语言模型领域发现剪枝比量化对受保护组风险更大，且与模型规模有关。语音自监督模型的剪枝与蒸馏对性别与年龄偏差影响方向不同。直接相关的 2 篇工作是本文的基础：1 篇比较多种语音识别架构指出音频编码器比语言模型规模更决定公平性，另 1 篇在同一语音大模型管线上剪编码器层并证明去掉几层只损失很少聚合误差且 LoRA 能恢复，但那篇只报告聚合数。本文正是补上缺的那块：在固定管线下系统改变剪枝深度、编码器规模与是否用适配，看分组差距如何变化。

为理解跨语料设计，先看评测支持哪些人口轴。下表是原表照搬，说明 Fair-Speech 支持的轴最多，而 3 个 Common Voice 子集只支持口音性别年龄，这决定了后文主结论放在 Fair-Speech 族裔轴，跨语言只看口音轴。

| Corpus | Bias axes |
| --- | --- |
| CV-22 (EN/DA/NL) | accent, gender, age |
| Fair-Speech | ethnicity, SES, gender, age, L1 |

上表告诉你为什么后文表格数量不均匀。Fair-Speech 有族裔与社会经济等细轴，Common Voice 荷兰语与丹麦语只有三轴且标注稀疏。教学例子是：如果你要复现，不要指望在丹麦语上做出同样细的公平分析，因为女性组样本量会低于可分析门限。论文因此把丹麦语结果只当覆盖信息，不做组间结论，这个克制值得学习。

### 研究问题是什么：三个问题如何对应三次判断？

论文提出 3 个研究问题。第一，编码器剪枝是否放大人口差距，以及聚合词错率是否把它藏起来。第二，这种效应是否依赖编码器规模与语言资源水平。第三，LoRA 适配能否把各组性能平等地恢复回来。3 个问题分别对应 3 种判断：是否要加分组评估，是否要分规模与语料单独评估，以及压缩后加适配是否算修复了公平。

操作定义很具体。剪枝深度用去掉的绝对层数表示，记为 L-0 未剪，L-2 去掉顶两层，依此类推到 L-8 乃至 L-10。公平用 3 个固定指标：每深度的最差组词错率作为首要指标，最差减最好的绝对差距以百分点计，以及最差除以最好的比率作为无量纲校验。组内退化用该组当前深度除以该组未剪基线表示。可用范围限定为聚合词错率不超过 40% 的连续深度，组样本需至少 200 条语句与 30 分钟音频，否则只列出不下结论。

需要提前纠正一个常见误解。差距扩大不等于所有组都以同样速度变差，也不等于比率一定变大。当所有组都冲向很高的错误率时，两个大数相除反而变小，但差值仍在变大。论文因此同时报告差值与比率，并以最差组绝对误差为部署判据。这个细节是后文理解大模型深剪枝时比率回落但差值继续扩大的钥匙。

### 方法全景：一个样本如何走完编码到文字？

跟着一个英文朗读样本走一遍。16 千赫音频先转成 80 通道对数梅尔谱，只保留 0.5 到 30 秒的语句，文本转小写去标点但保留缩写的撇号。频谱送入冻结的 Whisper 编码器得到声学表示，再送入可训练的拼接投影器做 5 帧拼接降采样与两层映射加归一化，变成与 Qwen2.5-3B 文本嵌入同尺度的向量。推理时把这段音频嵌入拼在一个固定英文提示词前面，用宽度为 2 的束搜索最多生成 128 个新词，全规模全深度全语言都用同一提示与同一解码设置。

**语音大模型 × SLAM-ASR 管线：** 语音大模型指用冻结语音编码器加冻结大语言模型做识别的总体形态，SLAM-ASR 管线是本文采用的具体连接方式：Whisper 编码器输出经可训练投影器映射为语言模型可读的嵌入再解码。搭配理由是固定解码器后只改变编码器容量，就能把剪枝的影响隔离到声学表示一侧，组合意义是每个剪枝深度都对应一个可部署的完整系统而不是探针。

关键在于人口盲性。训练、剪枝与选型都不输入人口标签，选型只看聚合验证误差。这正是现实中压缩论文的做法。评测时才按组拆开算词错率，问的是只看总数会漏掉什么。3 个编码器规模分别是小 12 层、中 24 层、大 32 层，每种规模都从未剪开始训练投影器记为基线，然后去掉顶两层得到新深度并从零重训投影器，使每个深度都是可部署系统而非剪完不调的残栈。跨语言时英语、荷兰语、丹麦语各自单独训练对应系统，训练数据量从 100 小时到 4.2 小时拉开一个量级，用于看资源水平的影响。

统计方法也需复述。显著性来自配对自助法，对语句做 2000 次重采样并在每次重算两套配置的词错率，以方向翻转比例作为 p 值。所有运行固定单一种子 42，不靠多种子方差，而靠跨深度的连续趋势与自助显著性支撑结论。局限是单一种子乘以多规模多深度多语言的网格会超出算力，作者明确说明并把多种子复制定为未来工作。

### 组件与计算：剪掉的是哪几层，重训的是哪部分？

组件只有三块。Whisper 编码器负责声学建模，Qwen2.5-3B 负责语言解码，两者全程冻结。ConcatLinear 投影器负责时间降采样与模态对齐，是每个深度必重训的部分。LoRA 只加在语言模型所有注意力层的查询键值与输出投影上，丹麦语用秩 8 其余用秩 16，分别增加约 0.8M 与 1.5M 可训练参数。冻结意味着梯度只流经投影器与 LoRA 旁路，不更新编码器与主模型权重。重置时机是每到一个新深度就把投影器随机初始化从零训练，而不是从未剪检查点微调，保证深度之间只差编码器容量。

**自顶向下剪枝 × 聚合词错率：** 自顶向下剪枝指每次从编码器顶部去掉两层并记为 L-2、L-4 直至 L-8 的分工，聚合词错率指在全部评测语句上统一算错词比例的选型标准。搭配理由是论文刻意模拟业界只看总指标选压缩模型的做法，组合意义是正好暴露总指标改善时最差组反而变差的遮蔽现象。

教学例子是选型流程。假设你在大模型上得到 L-0 聚合 21.6% 与 L-2 聚合 21.1%，若只看总数会选 L-2 上线。但按组拆开会发现 Black 组从 27.2% 升到 28.1%，而 Native American 组反而下降 2.5 个百分点。此时正确动作不是争论哪组重要，而是承认总数标准与最差组标准给出相反结论，必须把最差组误差作为显式上线门限。论文的灰带图正是为讲清这个分叉而画。

另一个易错点是把相对退化与百分点混淆。百分点是直接相减，例如 27.2% 到 28.1% 是加 0.9 个百分点。相对退化是相除，例如 L-2 聚合相对基线为 0.98 表示改善 2%，Black 组为 1.03 表示恶化 3%。两者方向不同，不能互换。下文表格同时出现两种表达，读数时先确认列是绝对词错率还是相对比值。

### 训练如何组织：谁更新、练多久、怎么选检查点？

训练只更新投影器，启用 LoRA 时再联合更新适配器。优化器统一用 AdamW，学习率 1 乘 10 的负 4 次方，权重衰减 0.01，梯度裁剪 1.0，余弦调度加前 5% 步数线性热身，半精度在单张 48G 显存上训练。英语批量 8 练 2 轮，加 LoRA 练 4 轮。荷兰语批量 8 练 4 轮，加 LoRA 练 8 轮。丹麦语批量 4 练 6 轮，加 LoRA 练 8 轮。

小语料多走几遍，大语料少走几遍，其余设置跨规模跨深度完全相同。检查点选择用贪心解码在验证集上看聚合误差并加 1.5 重复惩罚，早停同样只看聚合，不看人口分组。

**投影器 × LoRA 适配：** 投影器是连接声学帧与文本嵌入的两层感知机并负责降采样对齐的分工，LoRA 适配是只在语言模型注意力投影上加低秩旁路的分工。搭配理由是编码器与主模型都冻结后两者是仅有的可训练参数，组合意义是可以分别回答剪枝后重训对齐能恢复多少，以及再加语言侧适配是否对各组公平。

这里没有训练编码器与解码器主干，所以不能把性能变化归因于语言模型变强或声学预训练被改写。能归因的只有两处：编码器容量变小导致表示变弱，以及投影器在新容量下重新对齐的程度。LoRA 实验则是在同一规模同深度下对比基座与加适配，保证差异只来自适配器。丹麦语曾试过秩 16 出现过拟合才降到秩 8，这个细节说明低资源下适配容量也要跟着降，否则会把小语料的噪声放大。

复现时先做什么。先按语言固定批量与轮数跑通 L-0 个基线，再按 L-2 到 L-8 每次去顶两层并从零重训投影器，不要复用上一深度的投影器权重。解码保持提示词与束宽不变，评测保留大小写与标点处理一致，否则分组差距会被文本归一化污染。

### 实验条件：数据量、分组门限与指标方向如何固定？

训练用 Common Voice 第 22 版的官方划分，说话人在训练测试间不重叠。英语训练 58140 条约 100 小时，荷兰语 43458 条约 54 小时，丹麦语 3592 条约 4.2 小时。评测用 Fair-Speech 共 26417 条加 3 个 Common Voice 测试集，英语 16391 条，荷兰语 12033 条，丹麦语 2684 条。Fair-Speech 只做评测不做训练，Common Voice 测试中只有带对应标注的子集参与分组计算，因此分组样本数小于测试总数。所有 Fair-Speech 被分析组都超过 200 条与 30 分钟门限，丹麦语多数组低于门限。

**最差组错误率 × 差距与比率：** 最差组错误率指每个深度下表现最差人口组的词错率的分工，差距指最差减最好得到的百分点差值而比率指两者相除得到的无量纲数的分工。搭配理由是深剪枝时所有组都变差会导致比率缩小而差值仍扩大，组合意义是必须同时报告两者才能区分一起变差与差距拉大。

指标方向是词错率越低越好，差距越小越好，比率越接近 1 越好。但深剪枝时三者可能分叉，因此论文固定先看最差组绝对值是否超过 40% 可用线，再看差距是否扩大，最后用比率校验是否只是整体变差。显著性只针对浅剪枝的关键分叉报告，例如聚合改善 p 为 0.038 而 Black 恶化 p 为 0.009，其余组变化 p 不小于 0.13 视为不显著。

下表给出族裔 Black 对 Asian 的比率随规模与深度的变化，是理解遮蔽只出现在大模型的关键证据。读表时注意斜体表示已超出可用范围，结论只在可用范围内下。

| Model | L-0 | L-2 | L-4 | L-6 | L-8 |
| --- | --- | --- | --- | --- | --- |
| small (12L) | 2.03 | 1.70 | 1.51 | 1.49 | 1.13 |
| medium (24L) | 2.16 | 2.01 | 1.94 | 1.97 | 1.66 |
| large-v2 (32L) | 1.99 | 2.15 | 2.10 | 1.93 | 1.92 |

表后需要点出代价。未剪时三规模比率都在 2 左右，说明最差组误差约为最好组 2 倍，偏差是继承来的。但第一剪的变化完全不同：小模型比率从 2.03 掉到 1.70，中模型从 2.16 掉到 2.01，大模型反而从 1.99 升到 2.15。只有大模型的聚合在第一剪改善，这正是遮蔽发生的唯一位置。小模型与中模型第一剪聚合分别上升 10.8 与 2.3 个百分点，损害直接可见，不需要分组也能发现。

### 主结果：聚合改善时哪一组在变差？

Fair-Speech 族裔轴是全文最强证据。未剪时 Native Hawaiian 为 13.4% 与 Asian 为 13.7% 最好，Black 为 27.2% 最差，已是 2 倍。去掉顶两层后聚合从 21.6% 降到 21.1%，但 Black 升到 28.1% 增加 0.9 个百分点且显著，Native American 下降 2.5 个百分点且显著，其余组无显著变化。相对基线看聚合为 0.98 而 Black 为 1.03，是唯一恶化的族裔组。到 L-4 聚合升到 25.2% 已可见代价，Black 到 34.3% 而 Asian 到 16.3% 差距 18.0 个百分点。

到 L-6 聚合 32.0% 仍在可用线内，但 Black 到 42.8% 已不可用，同一配置按总数可用按最差组不可用。到 L-8 差距达 24.5 个百分点，Black 累计损失 23.8 个百分点而 Asian 损失 12.8 个百分点。

以下导读对应论文图 1 的像素，展示总数与最差组的分叉。图前先明确观察顺序：先确认两条组曲线与一条聚合虚线，再看灰带内的方向相反，最后看深剪枝的楔形扩大。

> **看图路径：** 1. 先看横轴剪枝层数 0 到 8 与纵轴词错率，找到黑色 Black 曲线与绿色 Asian 曲线的起点差距；2. 再看灰色阴影带内黑色虚线聚合曲线微微下降而 Black 曲线反而上扬的分叉；3. 最后沿曲线读到 L-8 处红色填充楔形明显变宽，对应差距从 13.5 扩大到 24.5 个百分点

[![原论文 Figure 1：Compression widens the racial gap, and the aggregate WER hides it.](https://arxiv.org/html/2609.38106v1/largev2_fairspeech_hook_wedge.svg)](https://arxiv.org/html/2609.38106v1/largev2_fairspeech_hook_wedge.svg)

*论文图 1。原论文 Figure 1:：“Compression widens the racial gap, and the aggregate WER hides it.”。*

该图显示的核心不是两条线都在上升，而是起点与斜率不同。Asian 起点约 13% 而 Black 起点约 27%，浅剪时聚合虚线轻微下探而 Black 线上扬，深剪时两线都上扬但 Black 更陡，红色填充因此越张越大。教学动作是不要把聚合下降读成所有人变好，必须逐组核对方向与显著性。论文因此提出部署时必须报告分组词错率，并把最差组作为显式标准。

其他人口轴各走各路。性别差距从 3.3 扩大到 11.1 个百分点，男性在该语料始终更差。社会经济差距基本保持，低收入对富裕从 5.9 到 7.2 个百分点但比率从 1.36 降到 1.24，说明是整体变差携带而非放大。年龄差距缩小却是向下看齐，最老的 46 到 65 岁起点最差但退化最慢只加 9.9 个百分点，而 31 到 45 岁退化最快加 19.8 个百分点并在 L-6 后反超为最差。以下导读对应图 2，帮你 1 次看清四轴的不同走向。

> **看图路径：** 1. 按图例区分四条轴线，先找到族裔 Black 对 Asian 蓝色线持续上行；2. 对比性别黄线同样上行而社会经济绿线基本持平；3. 再看年龄紫线反而下行，结合正文理解这是高位组一起变差造成的拉平

[![原论文 Figure 2：Worst-best WER gap per demographic axis under top-down pruning (Fair-Speech, Whisper large); one…](https://arxiv.org/html/2609.38106v1/largev2_fairspeech_gaps_base.svg)](https://arxiv.org/html/2609.38106v1/largev2_fairspeech_gaps_base.svg)

*论文图 2。原论文 Figure 2:：“Worst-best WER gap per demographic axis under top-down pruning (Fair-Speech, Whisper large); one line per axis, with the pair named in the legend.”。*

图 2 的 4 条线方向不同正是方法价值所在。族裔与性别上行需要警惕放大，社会经济持平说明差距被携带，年龄下行看似改善实则是大家一起变差。只看聚合会把 3 种不同机制混成一个总数，只有分轴看差距才能区分放大、保持与向下拉平。

### 规模与适配：大模型为何更会藏，适配为何救不平均？

规模对比先看每组相对自身基线的退化速度。下表按模型分别列出 Asian、Black 与聚合的相对比值，小于 1 表示比未剪更好。这是判断遮蔽是否唯一的直接依据。

| Group | nn | L-0 | L-2 | L-4 | L-6 | L-8 |
| --- | --- | --- | --- | --- | --- | --- |
| Asian | 3,854 | 1.00 | 0.95 | 1.19 | 1.62 | 1.93 |
| Native Haw. | 969 | 1.00 | 1.02 | 1.33 | 1.84 | 2.34 |
| Hispanic | 2,811 | 1.00 | 0.96 | 1.12 | 1.37 | 1.69 |
| White | 5,619 | 1.00 | 0.98 | 1.10 | 1.38 | 1.54 |
| Native Am. | 4,616 | 1.00 | 0.88 | 1.03 | 1.35 | 1.56 |
| MENA | 749 | 1.00 | 0.97 | 1.13 | 1.49 | 1.63 |
| Black | 7,799 | 1.00 | 1.03 | 1.26 | 1.57 | 1.87 |
| Aggregate | 26,417 | 1.00 | 0.98 | 1.17 | 1.48 | 1.74 |

表后解释主要收益与代价。只有大模型在 L-2 出现聚合 0.98 改善而 Black1.03 恶化的组合，中模型聚合 1.11 与小模型 1.41 都是明显恶化。深剪后所有规模的比率都回落，大模型到 L-8 为 1.92，但绝对差距仍从 13.5 扩大到 24.5 个百分点。原因是深剪把所有组推向高误差，两个大数相除变小而相减变大。未胜出项是小模型，它退化最快，到 L-8 相对基线达 3.69 倍，已无公平比较意义。以下导读对应三面板规模图，像素上可直接看到小面板曲线最陡。

> **看图路径：** 1. 对比小中大三个面板共用纵轴，先确认蓝色 Black 曲线在每个面板都是最高的一条；2. 观察大模型面板前两步聚合虚线几乎持平而小模型面板聚合虚线陡峭上升；3. 注意小模型 L-8 处纵轴已超过 100%，说明超出可用范围后组间比较不再可靠

[![原论文 Figure 3：Per-group WER on Fair-Speech as encoder layers are removed, per Whisper scale (shared y-axis;…](https://arxiv.org/html/2609.38106v1/fairspeech_scale_panels.svg)](https://arxiv.org/html/2609.38106v1/fairspeech_scale_panels.svg)

*论文图 3。原论文 Figure 3:：“Per-group WER on Fair-Speech as encoder layers are removed, per Whisper scale (shared y-axis; dashed = aggregate).”。*

该图 3 个面板共用纵轴因此陡峭程度可比。小模型面板所有曲线迅速冲高，中模型居中，大模型最平缓。蓝色 Black 线在三面板都是最高，说明继承性偏差与规模无关。但只有大模型面板的聚合虚线在前两步几乎不动，这解释了为什么只有大模型能藏住第一剪的损害。复现时应先复现这个形态，再谈具体数值。

LoRA 部分先看热力图的像素逻辑。每格是该组相对未剪的变化百分点，暖色为恶化冷色为改善，底行为聚合。无适配面板 L-2 聚合为负 0.4 个百分点而 Black 为正 0.9 个百分点，有适配面板聚合处处更低且可用深度延到 L-10。但比率在每个深度都变宽：L-0 从 1.99 到 2.20，L-2 从 2.15 到 2.36，L-8 从 1.93 到 2.22。到 L-10 适配为 Asian 挽回 8.0 个百分点而为 Black 只挽回 3.3 个百分点，说明适配更补偿原本就好的组。

> **看图路径：** 1. 先看左右两大面板标题区分无适配与有 LoRA，再看底行聚合行颜色由深红变浅；2. 逐行对比 Black 行在同列的颜色总是最深，说明每层深度下它退化最多；3. 重点看 L-10 列左右面板数值差，Asian 恢复约 8.0 个百分点而 Black 只恢复约 3.3 个百分点

[![原论文 Figure 4：Change in WER (percentage points) per subgroup as Whisper large-v2 is pruned top-down, without…](https://arxiv.org/html/2609.38106v1/largev2_fairspeech_heatmap_pair.png)](https://arxiv.org/html/2609.38106v1/largev2_fairspeech_heatmap_pair.png)

*论文图 4。原论文 Figure 4:：“Change in WER (percentage points) per subgroup as Whisper large-v2 is pruned top-down, without (a) and with (b) LoRA (Fair-Speech).”。*

该图左右对比说明适配不是公平修复。左面板基座的 Black 行每列颜色最深，右面板加适配后依然如此。底行聚合变浅说明总数确实变好，但组间颜色落差并未缩小。教学结论是压缩后的准确率恢复与公平恢复是两回事，必须分开报告。未评测边界是作者未尝试针对弱势组的适配目标，也未保留 LoRA 运行的逐句输出以做同样精度的离散度估计，这部分不确定性应在复述时保留。

跨语言部分显示差距持续但不一定放大。英语口音轴上印度与南亚组每深度最差，相对美国组的比率从 1.42 到 1.39 基本稳定，且聚合从第一剪就恶化，没有遮蔽窗口。荷兰语比利时组始终差于荷兰组但比率在 1.1 到 1.3 之间，性别男差于女比率约 1.3 同样持平。丹麦语未剪聚合已 35.5%，去 6 层就越过 40% 线且多数组低于可分析门限，只能做覆盖。下表是相对退化的跨规模证据，支持遮蔽只出现在大模型的判断。

| Model | Series | nn | L-0 | L-2 | L-4 | L-6 | L-8 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| large-v2 (32L) | Asian | 3,854 | 1.00 | 0.95 | 1.19 | 1.62 | 1.93 |
| large-v2 (32L) | Black | 7,799 | 1.00 | 1.03 | 1.26 | 1.57 | 1.87 |
| large-v2 (32L) | Aggregate | 26,417 | 1.00 | 0.98 | 1.17 | 1.48 | 1.74 |
| medium (24L) | Asian | 3,854 | 1.00 | 1.17 | 1.51 | 1.72 | 2.64 |
| medium (24L) | Black | 7,799 | 1.00 | 1.09 | 1.35 | 1.57 | 2.03 |
| medium (24L) | Aggregate | 26,417 | 1.00 | 1.11 | 1.36 | 1.52 | 2.10 |
| small (12L) | Asian | 3,854 | 1.00 | 1.62 | 2.56 | 2.90 | 5.14 |
| small (12L) | Black | 7,799 | 1.00 | 1.35 | 1.91 | 2.12 | 2.85 |
| small (12L) | Aggregate | 26,417 | 1.00 | 1.41 | 2.12 | 2.37 | 3.69 |

表后需强调限制。跨语言的稳定比率不支持把 Fair-Speech 的放大推广到所有语料，也不支持用基线差距预测压缩后果。论文明确指出 Fair-Speech 相对训练存在分布偏移，但压缩后绝对差距在域内与域外都扩大，因此不能把扩大简单归因于换数据集。正确做法是对每个语料、每个人口轴、每个规模单独测分组误差。

### 边界在哪里：哪些结论不能推广？

论文明确列出 4 类边界。编码器只有 Whisper 3 种规模，解码器只有 Qwen2.5-3B 一种，压缩只有自顶向下逐层剪一种，没有量化、蒸馏与其他剪枝准则。训练只有单一种子 42，显著性靠语句自助而非多种子方差，深层结论靠跨深度的连续趋势而非单点差值。数据主力是英语朗读，跨语言证据薄，丹麦语因高误差与稀疏标注无法做组结论，荷兰语只有三轴。人口轴分开分析不做交叉，例如族裔与性别的联合组未被检验。未评估任何缓解方法，LoRA 只是准确率适配而非公平目标。

另一个边界是可用线的人为性。40% 是作者为限定结论而设的连续深度上限，不是行业通用可部署线。L-6 时聚合 32.0% 看似可用，但 Black42.8% 已越线，这恰好证明总数线不能代替分组线。读数时不要把越线后的比率回落解读为公平改善，那只是高误差下的算术效应。

训练超参数的复现边界同样要交代。下表是分语言批量与轮数，是复现时必须固定的信息条件。其他优化设置跨运行相同，解码提示词与束宽跨运行相同，检查点选择只看聚合验证误差。缺项是未报告投影器隐藏层 2048 之外的搜索过程，也未报告不同随机种子下的波动范围，复现时应先固定种子再补多种子验证。

| Language | Batch | Proj. | LoRA |
| --- | --- | --- | --- |
| English | 8 | 2 | 4 |
| Dutch | 8 | 4 | 8 |
| Danish | 4 | 6 | 8 |

表后说明代价。英语 2 轮加适配 4 轮最省，丹麦语 6 轮加适配 8 轮最费，小语料必须多走几遍才能收敛。批量在丹麦语降到 4 以避免单轮内过度重复。若改变这些条件，分组差距的具体数值会动，但论文主张的形态差异仍需在相同条件下重测才能确认。

### 复现先做什么：按什么顺序重跑最小验证？

先准备代码与数据。代码当前可用，论文给出仓库地址，但复现的事实依据仍以正文为准。数据需 Common Voice 第 22 版英语荷兰语丹麦语的官方划分与 Fair-Speech 评测集，音频重采样 16 千赫转 80 通道对数梅尔谱，保留 0.5 到 30 秒，文本小写去标点保留缩写撇号。先跑通英语大模型 L-0 个基线，核对聚合约 21.6% 与 Black 约 27.2% 与 Asian 约 13.7% 的量级，再跑 L-2 看聚合是否轻微下降而 Black 上升，这是最小可复现分叉。

再扩展网格。固定同语言同规模同超参数，逐深度去顶两层并从零重训投影器，记录每组词错率与聚合，计算差距与比率。注意组样本门限与可用线，只在可用范围内下放大结论。对中模型与小模型重复同样流程，核对第一剪聚合分别上升约 2.3 与 10.8 个百分点且比率下降，与大模型形成对照。最后在同深度加 LoRA 重跑，核对聚合处处下降但 Black 对 Asian 比率处处变宽，以及 L-10 处 Asian 恢复更多而 Black 恢复更少的非均匀恢复。

还需补的验证是多种子与交叉组。原工作因算力只用单一种子，复现时至少对大模型 L-0 与 L-2 补 3 到 5 种子的投影器重训，看分叉方向是否稳定。交叉分析可检验族裔与性别年龄的联合弱势组是否退化更快，但需先确认联合组仍满足样本与时长门限，否则只能报告覆盖不足而不下结论。

### 何时值得尝试：给上线与选题的判断清单

上线清单只有 3 条。第一，压缩模型不能只用聚合词错率验收，必须同时报告最差组误差、差距与比率。第二，最差组误差应作为显式门限，当聚合可用而最差组已越线时应判为不可用。第三，适配后必须重做分组评估，因为总数恢复不等于公平恢复，本文中 LoRA 让优势组获益更多就是反例。跨语言上线更需逐语料重测，因为英语与荷兰语口音差距持续但不放大，与 Fair-Speech 族裔放大的形态不同。

选题启示是把公平目标写入压缩目标。未来工作应检验针对弱势组的适配、公平感知的剪枝准则与其他压缩方法，并补多种子、交叉组与自发语音等更难条件。教学上最值得带走的是读数习惯：先确认指标是绝对值还是相对值，先确认差值用百分点而比率无量纲，再确认结论是否在可用范围内，最后追问未胜出组与负结果在哪里。本文的价值正在于用可重跑的深度网格证明，平均数改善可能是由优势组驱动的，而最差组的声音只有拆开才能听见。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2609.38106)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-01/)
