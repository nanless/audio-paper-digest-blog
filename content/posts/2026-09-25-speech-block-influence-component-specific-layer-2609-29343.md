---
title: "Speech Block Influence: Component-Specific Layer Scoring for Pruning Speech LLMs"
date: 2026-09-25
draft: false
tags: [语音识别, 模型剪枝, 语音, 语音大模型, 高效推理]
categories: [论文速递]
description: "针对语音大模型含编码器与适配器且序列被音频主导的问题，提出编码器在适配器输出处打分与解码器只看文本词元的 SBI，在三模型上以无修复剪层对照显示高剪除率下更稳健，但解码器在约 20% 剪除前仍明显退化且需权衡计算开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.29343"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "剪哪一层？语音大模型的编码器与解码器要用不同尺子量"
paper_digest_original_title: "Speech Block Influence: Component-Specific Layer Scoring for Pruning Speech LLMs"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.29343"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.29343.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"model_family","id":"model_family.speech","label":"语音大模型"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对语音大模型含编码器与适配器且序列被音频主导的问题，提出编码器在适配器输出处打分与解码器只看文本词元的 SBI，在三模型上以无修复剪层对照显示高剪除率下更稳健，但解码器在约 20% 剪除前仍明显退化且需权衡计算开销。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Siyu Yao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Du Q. Huynh"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lian Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mark Reynolds"}]
paper_digest_abstract_sha256: "f1dd6d9e24511e1a848de47f9413d22116b6c67867af74f97e33f88ac4bfb1da"
paper_digest_sidecars: {"citation.bib":{"sha256":"45950d6075aff3216239da244c0fc98e70b9968d7a4846dd69fb5dd73202e363","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29343/citation.bib"},"citation.json":{"sha256":"f5b1260b593b08d512844f77e0d2bba58f5940bdbd6cd0f1d4e3ad78b302302b","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29343/citation.json"},"citation.ris":{"sha256":"f94d05221245c22cb0fbb81a8188bd460dee6cca9adeef33cd091f8c007d90a2","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29343/citation.ris"},"rethink-context.json":{"sha256":"ff66b7949d802ab8492199151777bb38a2a6208fc0a26db2537d9a56367f4b64","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29343/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4d63064f67dc5eac045805c8804c65e362cdf2c7316c8faa8c8ebbf62c8c7d3d"
paper_digest_api_reader_plan_sha256: "e449a4427791e9a158371e3ac5a1ab03497ee60450f40e6b39339609351e4f41"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a8e30069773df2cebaee1119c17a280c8b253ede3ca16b00c3e202f7e3f8e46e"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "68292256e157e20abfe8175f26d456e3e29b9ef83cfd7b22ddf7f9a148b4d74d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ff83c3c8126d85fd984ccd9e3fd05539a03dcfb3506461bb50227902c1ac5b6f"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3f420b8327e431c2388c45cc60fdfbc44415e83c0a9d183fb94c90e3edc3ed72"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 剪哪一层？语音大模型的编码器与解码器要用不同尺子量

> 英文题目：*[Speech Block Influence: Component-Specific Layer Scoring for Pruning Speech LLMs](https://arxiv.org/abs/2609.29343)*

> 标签：#语音识别 | #模型剪枝 | #语音 | #语音大模型 | #高效推理
>
> 评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Siyu Yao：机构信息未在 arXiv HTML 中可靠披露
- Du Q. Huynh：机构信息未在 arXiv HTML 中可靠披露
- Lian Xu：机构信息未在 arXiv HTML 中可靠披露
- Mark Reynolds：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

语音大语言模型由语音编码器、适配器和解码器大语言模型三部分组成，输入是音频嵌入拼接文本提示的多模态序列，输出为转写或答案文本。难点在于音频表征长度远超文本且适配器对编码器输出做投影与下采样，直接沿用纯文本块影响力会失真。该工作提出语音块影响力，先用语音文本校准集做无训练打分，再按编码器与解码器分别移除最低冗余层，全程不做恢复微调。编码器分支移除候选层后比较适配器输出相似度，解码器分支仅在文本 token 位置比较相邻层输入输出相似度，另构内容对齐的文本纯校准集验证音频上下文是否必要。相比原始块影响力，新机制将评价点后移至真正进入解码器的表征，并剔除数量占优的音频位置对余弦相似度的主导。在Common Voice评测任务下，SBI-Enc的WER为25%，低于BI的WER 40%。该结论仅适用于三款 Whisper-large-v3 初始化编码器加微调解码器模型与无恢复独立剪枝设置，联合剪枝与高压缩后恢复效果尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/CU-0/sbi-speechllm-pruning> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？语音大模型要解决什么部署矛盾？

本文的研究对象是语音大模型，也就是在文本大语言模型之外再接入语音编码器与适配器的系统。1 次输入包含一段音频和一段文本提示，输出是文本回答。初学者可以先沿一个样本走完全程：音频波形先进入语音编码器变成语音表示，再经过适配器投影并降采样为与语言模型嵌入对齐的音频嵌入，然后与提示文本的嵌入拼接成一个多模态序列，最后由解码器自回归生成文字。

论文的出发点是部署矛盾：编码器与解码器的每一层 transformer 都会增加每次前向的内存与延迟，因此只压缩解码器不够，编码器也要压缩。作者把可核对的目标定为层剪枝，即用一小批无标注输入作为校准集，给每一层打一个重要性分数，删掉分数最低也即最冗余的若干整层。教学例子：假设校准集有若干条语音问答，方法对每层计算一个分数，分数越低越先删，这里的例子不附加任何效果数值。

必须保留的信息是 3 组件结构、校准集无标注、整层删除，这些是后文所有对照的前提。本文当前可用性方面，资源状态显示代码链接当前可用，已公开在官方仓库，但这不改变方法结论，只说明复现入口存在。

### 已有路线为什么直接搬到语音上会失灵？

相关路线可分为非结构化剪枝、结构化剪枝与层剪枝。层剪枝是结构化剪枝的特例，1 次删掉整个 transformer 块。文本大模型一侧已有代表性基线：ShortGPT 提出块影响分数，认为若一层几乎不改变隐状态则贡献小；另一路用连续多层的角距离找最冗余块，并报告深层比浅层更冗余。语音压缩一侧已有工作多集中在自动语音翻译性能保留上，有的剪 SLAM 配方的解码器连续块，有的剪最深的 Whisper 编码器层再用适配器恢复，且评估多限于语音识别与语音翻译。

论文与这些工作的差异按证据有三点：提出专门面向语音层的打分框架，研究解码器已在语音数据上微调过的原生训练语音模型，并用多选题考察更广的语音理解，而不只是识别与翻译。理解这一节的关键是输入、目标与监督是否同条件：文本路线的输入是同质词元序列，语音路线的输入是音频嵌入加文本的异质序列，直接套用全序列平均的分数会改变被评价对象，因此不能把类别差异当成同条件胜负。

### 问题出在哪？两个组件各有一个错位

论文把失效拆成 2 个组件各自的错位。编码器一侧的错位是评价位置不对：解码器看到的是适配器输出，而不是编码器内部隐状态。若某编码器层大幅改变内部隐状态，但经过适配器投影与降采样后几乎无影响，那么该层对下游计算贡献很小，可是只比较该层输入输出的分数仍会把它判为重要。解码器一侧的错位是评价词元范围不对：在校准集中音频词元数量远多于文本词元，原文报告相差数倍，具体倍数随编码器词元速率与补齐变化。

此时全序列平均的分数被音频主导，按此删层在有的模型上删一层就崩溃。于是问题被明确为需要分组件打分：编码器应在适配器输出处度量移除效应，解码器应只在文本词元上度量层内变化。这也是后文所有公式与实验分组的依据。

### 方法全景如何一次走通？

语音块影响框架把编码器与解码器分开打分。先看编码器通路：对校准集中第 n 个样本，完整编码器加适配器得到适配器输出，记为未剪模型的输出；再把第 l 个编码器层去掉，保持其余不变，重新经过适配器得到移除后的输出；比较这两个适配器输出的相似度，越接近说明去掉该层影响越小，分数越低越冗余。

再看解码器通路：对解码器第 l 层，取其输入隐状态与下一层输入隐状态，只在属于文本集合的位置上计算余弦相似度并平均，音频位置不参与平均，但音频上下文仍可通过注意力被模型看到。最后的剪枝动作是：在未剪模型上计算 1 次分数，按分数从低到高删掉 k 个最低层，编码器与解码器分别独立剪，不做剪后恢复，以便隔离选择准则本身。计算代价上原文明确交代：编码器打分需要编码器层数加 1 次校准集遍历，解码器打分只需 1 次遍历。

### 编码器打分如何度量去掉一层的影响？

编码器打分要回答的操作问题是：如果删掉第 l 层，下游真正看到的适配器输出变了多少。符号先讲清：a 表示完整模型对第 n 个校准样本的适配器输出，a 去掉 l 层表示同一模型去掉第 l 个编码器层后的适配器输出，下标 t 表示词元位置，n 表示样本，期望是对样本与位置求平均。计算目标是余弦相似度的平均再用一减去它，相似度越高分数越低，表示越冗余。原文明确的实现是每次移除一层编码器后都要重新走适配器，因此代价随编码器层数线性增长。

\[\textnormal{SBI-Enc}_{\ell}\,\triangleq\,1\;-\;\mathbb{E}_{n,t}\!\left[\frac{\mathbf{a}^{(n)\top}_{t}\,\mathbf{a}^{(n)}_{\setminus\ell,\,t}}{\lVert\mathbf{a}^{(n)}_{t}\rVert_{2}\,\lVert\mathbf{a}^{(n)}_{\setminus\ell,\,t}\rVert_{2}}\right],\]

上式把评价点从层内搬到适配器输出，是编码器部分的核心改动。初学者容易误以为内部变化大就重要，本节的纠正是：只有穿过适配器后仍有变化，才算对解码器重要。

**语音编码器 × 适配器：** 语音编码器负责把输入音频转成 speech representations，适配器负责把这些表示投影并降采样到大语言模型嵌入空间；二者搭配的原因是解码器并不直接消费编码器输出，只有经过适配器后的输出才进入下游计算，因此评价编码器层冗余要看适配器输出的变化，组合意义是避免把只改变编码器内部但被适配器抹掉的变化误判为重要。

\[\mathrm{BI}_{\ell}\;\triangleq\;1\;-\;\mathbb{E}_{n,t}\!\left[\frac{\mathbf{h}_{\ell,t}^{(n)\top}\,\mathbf{h}_{\ell+1,t}^{(n)}}{\lVert\mathbf{h}_{\ell,t}^{(n)}\rVert_{2}\,\lVert\mathbf{h}_{\ell+1,t}^{(n)}\rVert_{2}}\right],\]

上式是作为对照的原始块影响公式，它比较第 l 层输入与第 l 加一层输入在全部词元上的相似度。把它放在这里是为了让读者看到编码器基线到底在算什么：层内变化，而非下游效应。

### 解码器打分为何只看文本词元？

解码器打分要回答的操作问题是：在音频主导的序列里，如何避免音频位置决定排序。符号先讲清：h 表示解码器第 l 层在第 n 个样本第 t 个位置的输入隐状态，T 表示该样本的文本词元位置集合，期望只对 n 与属于 T 的 t 求平均。计算目标同样是一减去文本位置上的平均余弦相似度，只看文本词元的层内变化。原文明确的实现是保持原块影响公式形式不变，仅把求平均范围从全序列收窄到文本集合；若把集合换成音频集合或全集合，就得到音频分数与原始全序列分数。

\[\textnormal{SBI-Dec}_{\ell}\triangleq 1\,-\,\mathbb{E}_{n,\,t\in\mathcal{T}^{(n)}}\!\left[\frac{\mathbf{h}_{\ell,t}^{(n)\top}\,\mathbf{h}_{\ell+1,t}^{(n)}}{\lVert\mathbf{h}_{\ell,t}^{(n)}\rVert_{2}\,\lVert\mathbf{h}_{\ell+1,t}^{(n)}\rVert_{2}}\right],\]

上式是解码器部分的核心改动，改的是求平均的集合，不是相似度本身。需要强调的是音频并未被删掉，模型仍可 attending 到音频上下文，只是打分时不把音频位置计入平均。

**块影响 × SBI-Dec：** 块影响分工是度量同一层输入输出隐状态的余弦相似度变化，变化越小越冗余；SBI-Dec 分工是把同一计算只限制在文本词元位置上求平均，搭配原因是语音解码器输入中音频词元数量远多于文本词元，全序列平均会被音频主导，组合意义是保留原公式形式但排除音频主导，使选层反映文本推理路径上的冗余。

**SBI-Enc × 块影响：** SBI-Enc 分工是逐层移除编码器一层后比较适配器输出的相似度，块影响分工是比较被评层自身的输入输出相似度，搭配原因是编码器内部变化大不等于适配器输出变化大，前者是下游真正看到的量，组合意义是用移除后下游效应代替局部变化来排序编码器层。

后一个桥放在本节是为了对照：编码器用移除后下游效应，解码器用文本子集上的层内相似度，二者都是为了让分数更接近下游真实影响，只是手段因组件而异。

### 没有训练时校准集如何构造与调用？

本研究没有训练阶段，没有报告梯度更新、参数冻结细节、优化器或恢复微调，因此不能把无训练等同于确定性求解，也不能从骨干名称推定实现。真实计算过程是构造校准集并做前向打分。语音文本校准集的构造按原文交代：从 Common Voice、IEMOCAP、VoxCeleb 与 Gaokao 4 个语料各取 30 个音频片段，理由是覆盖口音、情感、说话人数与片段长度的多样声学条件；对每个片段用被评模型自身以听音频并生成一个关于语音的问题为指令生成文本提示；按生成困惑度选最低的 100 条作为该模型的校准集。

校准片段来自与评估不重叠的划分。纯文本校准集的构造是把每条语音文本校准样本中的语音转写为文本，使两套集合只差模态而不差内容，用于检验排序是否依赖音频。调用过程是：编码器打分逐层移除并比较适配器输出，解码器打分 1 次前向取层输入输出比较文本位置。

**语音文本校准集 × 纯文本校准集：** 语音文本校准集分工是提供含音频上下文的多模态序列用于打分，纯文本校准集分工是用同一内容的转写文本提供无音频的对照，搭配原因是检验解码器排序是否依赖音频存在，组合意义是若二者排序高度一致，则可用更便宜的纯文本通路估计解码器层重要性。

缺项必须指出：转写由谁完成、困惑度阈值、补齐到 30 秒的具体实现细节在给定证据中未进一步展开，复现时应以公开代码的实际处理为准，不自行补写。

### 实验条件如何保证比较公平？

模型条件按原文交代：评估 3 个语音大模型，分别是 Qwen2-Audio-7B-Instruct、Audio Flamingo 3 与 Voxtral Mini 3B，解码器层数分别为 32、28、30，编码器均为 32 层且初始化自 Whisper-large-v3 编码器；音频词元速率不同，Voxtral 为 12.5 Hz 并补齐到 30 秒倍数，另 2 模型为 25 Hz。任务与指标按原文交代：语音识别用词错误率，越低越好，高于 100% 反映退化重复；多选题用准确率，每题 4 个选项，低于 25% 随机猜测表示不再输出有效答案，原文把这两种情形视为模型崩溃，超过后比较不再有意义。数据集按原文交代：Common Voice 随机抽 100 条做识别，多模态语音理解抽 500 题，开放书问答语音版用全量 455 题。

基线与协议按原文交代：编码器与解码器分别独立剪，最多剪 10 层，编码器对照原始块影响，解码器对照全序列块影响并加测去掉最后一层的最深 k 层，以检验是否只是深层效应；分数在未剪模型上算 1 次，删 k 个最低层，无剪后恢复。

### 主结果显示哪种打分在高剪除率下更稳？

比较问题是：在相同剪层数与无恢复条件下，分组件打分是否比原始块影响更稳健。公平条件是编码器与解码器分别独立剪，同一模型同一任务同一指标方向如上节所述。下表整理编码器侧在高剪除率附近的原文报告，指标方向为语音识别词错误率越低越好，多选准确率以不跌破随机猜测为稳健。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 编码器剪约 31% 层 | 识别词错误率 | 40% WER under BI | 25% under SBI-Enc | Qwen2-Audio 在 Common Voice |
| 编码器剪约 19% 与 28% 层 | 多选是否崩溃 | 19% of removed layers 跌破随机猜测 | 28% of encoder layers 仍保持准确 | Audio Flamingo 3 在 OBQA |
| 编码器剪少于 20% 层 | 任务曲线 | curves generally overlap and cross | neither criterion has consistent advantage | 除 OBQA 上 Audio Flamingo 3 外多数情形 |
| 编码器与解码器各剪 | 剪层上限 | up to 10 layers | lowest-scoring layers removed | 3 个语音模型独立剪 |

表前已提出比较问题与公平条件，表后需要解释收益与代价。表后解释如下：编码器侧的主要收益出现在高剪除率，当删掉约 31% 编码器层时，分组件打分在 3 个模型识别任务上词错误率最低，其中 Qwen2-Audio 差距最大，原始基线 40% 对分组件 25%；在开放书问答上原始基线在约 19% 剪除即跌破随机猜测，而分组件打分维持到约 28% 才明显下降。具体代价与反例是：当剪少于 20% 时两条曲线多为重叠交叉，无一致优势；在多模态理解上两准则多数时间重叠弱分离。

对 Voxtral 差异很小，原因是两者前十待剪集合有 9 层相同。未胜出项必须保留：编码器更小，按 Qwen2-Audio 解码器参数约为编码器 11 倍，因此编码器剪层省量本身有限，这是适用边界。

重提结果时增加机制对照：原文报告分组件与原始基线的前十集合共享 7 到 9 层，但前者选的层更浅且平均序号更小，说明收益部分来自排序而非完全不同的集合。

### 解码器侧是文本子集的作用还是单纯深层效应？

比较问题是：解码器只看文本词元的好处能否被最深 k 层替代，以及音频主导到底有多严重。公平条件仍是同一模型独立剪解码器、无恢复、指标方向同前。下表整理与解码器排序成本相关的原文报告，数值方向为音频占比越高越主导，一致性越高越支持廉价替代。

| 条件 | 指标 | 基线范围 | 本方法范围 | 比较对象 |
| --- | --- | --- | --- | --- |
| 校准序列组成 | 音频相对文本倍数 | 6× to 22× audio dominance | text tokens only scoring | 校准集随词元速率与补齐变化 |
| 解码器排序一致性 | 排序相关 | ρ≥0.93 speech-text vs text-only | identical in eight of twelve settings | 3 模型解码器层排序 |
| 排序集合重叠 | 前 k 重叠 | never differ by more than one layer | k∈{3,6,9,12}对照 | 解码器待剪集合 |
| 打分遍历代价 | 校准遍历次数 | LEnc+1 passes for encoder | single pass for decoder | SBI 编码器与解码器打分 |

表后解释如下：主要收益是分组件解码器打分在几乎所有任务上优于全序列基线，且推迟崩溃，多选任务上全序列基线总是在更小的剪除率就跌破随机猜测；它不等价于删最深层，最深 k 层在 3 个模型上词错误率上升更快，甚至在 Voxtral 上删 2 到 3 层即崩溃，而即使两者前十集合相同，原文报告 Qwen2-Audio 上分组件排序仍在剪 25% 以内保持更好，说明排序本身有价值。具体代价与反例是：Audio Flamingo 3 的识别任务是例外，全序列基线在多数剪除率下词错误率更低。

在多模态理解上该模型也是分组件不占优的例外。机制上原文报告全序列分数紧跟音频分数，Voxtral 上两者选出完全相同的层集合，而分组件只选深层且从不低于序号 10，这与文本模型深层更冗余的发现一致。未评测边界是：即使使用分组件打分，语音解码器一般在删 20% 之前就明显退化，不如文本模型删 25% 到 30% 仍损失很小的报道，提示多模态解码器对层剪更敏感。

### 哪些结论不能推广？缺了哪项验证？

论文直接报告的是无恢复条件下的选层比较，支持的是分组件打分在多数设置下更稳健，待验证的是更高剪除率与联合压缩。原文明确未做剪后恢复，未来工作才提出结合轻量微调与联合剪编码器解码器，因此不能承诺延迟、成本或误判率已改善，也不能把总体趋势推广到每组每步都成立。相关性不等于因果：纯文本与语音文本排序高度相关支持廉价替代，但未测量实际部署延迟节省，也未验证转写误差或内容漂移的影响。评估边界按原文交代：识别只抽 100 条，多选只覆盖给定划分，校准集每模型 100 条，超出此预算的表现未知。

**层剪枝 × 微调恢复：** 层剪枝分工是以无标注校准集 1 次性选出分数最低的若干整层并删除，微调恢复分工是在剪后用轻量训练补偿损失，搭配原因是本文为隔离选择准则而明确不做恢复，组合意义是当前结论只说明选层好坏，不代表最终可部署压缩上限，更高剪除率仍需恢复步骤验证。

另一个易误解点是把编码器剪层省量等同于解码器剪层省量，原文已提示编码器远小于解码器，压缩收益需分开核算。

### 复现先做什么？需要固定哪些信息条件？

复现的第一步是固定信息条件：使用与原文相同的 3 模型与对应解码器层数，编码器 32 层，音频速率与补齐按模型区分；校准集按四语料各 30 片再选困惑度最低 100 条，且与评估划分不重叠；纯文本对照必须转写同一批语音文本样本内容，保证只差模态。第二步是按组件打分：编码器逐层移除后比较适配器输出，解码器 1 次前向只在文本位置比较层输入输出；分数在未剪模型上算 1 次，按从低到高删 k 个最低层，编码器与解码器分别独立实验，不加恢复。

第三步是按问题评估：识别看词错误率方向向下，多选看准确率方向向上，并以 100% 以上词错误率与 25% 以下准确率为崩溃标记，超过后不再比较优劣。关键超参数与预算是最多剪 10 层、编码器打分需层数加 1 次遍历、解码器 1 次遍历。代码方面资源状态为可用，给出官方仓库链接当前可用，可用于核对移除层、文本位置划分与遍历实现，但权重下载与运行环境仍需自行满足，不把代码可用等同于系统可运行。

### 何时值得尝试分组件打分？

当你的语音大模型同样具有编码器加适配器加解码器结构，且解码器输入中音频词元远多于文本时，值得尝试本文的分组件思路：编码器在适配器输出处评价移除效应，解码器只在文本位置评价层内变化。若只能负担少量校准计算，可先用纯文本转写做解码器排序的廉价估计，因为原文报告两者排序高度一致且待剪集合多为相同或仅差一层。但要保留适用条件：编码器剪层在少于 20% 时优势不稳定，高剪除率才拉开差距。

解码器即使改进仍早于约 20% 明显退化，且有个别模型任务上全序列基线反而更好；编码器本身较小，压缩比需按参数量折算。若目标是更高压缩，应补做轻量恢复与编码器解码器联合剪的验证，而不是直接把无恢复的选层结论当成可部署收益。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.29343)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-25/)
