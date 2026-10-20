---
title: "Think, Compress, Answer: Reinforcement Learning for Multimodal Grounding via Reasoning Compression"
date: 2026-10-20
draft: false
tags: [通用多模态问答, 强化学习, 零样本, 音视频]
categories: [论文速递]
description: "针对长推理会稀释定位证据的问题，论文提出先自由推理再压缩成目标相关短语境然后作答的三段流程，并用四阶段强化学习逐步训练，在六个定位基准上做了零样本验证。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.25640"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "想、压、答：用推理压缩做多模态定位"
paper_digest_original_title: "Think, Compress, Answer: Reinforcement Learning for Multimodal Grounding via Reasoning Compression"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.25640v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.25640v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.25640v1.pdf"
paper_digest_primary_task: "通用多模态问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.generic-multimodal-qa","label":"通用多模态问答"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对长推理会稀释定位证据的问题，论文提出先自由推理再压缩成目标相关短语境然后作答的三段流程，并用四阶段强化学习逐步训练，在六个定位基准上做了零样本验证。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jinbae Seo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hyeongjun Kwon"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiyoung Lee"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hyunsung Jang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Namkoo Ha"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jungin Park"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kwanghoon Sohn"}]
paper_digest_abstract_sha256: "7571c89b72d5b5f34e8e3d2dbca6bc79cefdc0843ae4581c94d703454d18e513"
paper_digest_sidecars: {"citation.bib":{"sha256":"c9077fcf1b6a2a6abe2bfdff1191bf6c2f82cdfe9dc4d6d1386956aa349ae065","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25640/citation.bib"},"citation.json":{"sha256":"0f42cf4673b8f972118dd1eee725ed9b34d68313d4a0ba5ee94679c0846fa3f6","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25640/citation.json"},"citation.ris":{"sha256":"0906a67155bb071e89af3da28eca8ba6da82676efceea92b7ad81ff461ca93f1","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25640/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"8816059edb0694541c6e58482015d3260e2d368917b9fc59c0e40de039f5c0a9","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25640/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "fd59721be3f23fa0b248cd4cf1501b10ba18b02ef9b257b12b2e330fe99f8222"
paper_digest_api_reader_plan_sha256: "54e8e314c8c1b97c4fb9268910fa2531fb9696bff43f960b22e1d448fb33b763"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6a01194dba095d3b1fd28f70e1ad3f8b4516ca1e783fb798282b813d68d76696"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "a836032fc76a8a0250eda45a74340b161cdfa89819ec776ba7d75f2032cda0c4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e4ff4afc69c270e7778fced29486c132dd331febc99d3ce169e7acd88764ff95"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "62dedbf05a0e2fa507d03aacf00835f3239264846972778178e87afa726412a9"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 想、压、答：用推理压缩做多模态定位

> 英文题目：*[Think, Compress, Answer: Reinforcement Learning for Multimodal Grounding via Reasoning Compression](https://arxiv.org/abs/2610.25640v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[通用多模态问答](/audio-paper-digest-blog/papers/?concept=task.generic-multimodal-qa)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **研究条件**：[零样本](/audio-paper-digest-blog/papers/?concept=setting.zero-shot)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.3/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Jinbae Seo：机构信息未能在本次解析中与作者逐人可靠绑定
- Hyeongjun Kwon：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiyoung Lee：机构信息未能在本次解析中与作者逐人可靠绑定
- Hyunsung Jang：机构信息未能在本次解析中与作者逐人可靠绑定
- Namkoo Ha：机构信息未能在本次解析中与作者逐人可靠绑定
- Jungin Park：机构信息未能在本次解析中与作者逐人可靠绑定
- Kwanghoon Sohn：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

多模态定位要求根据文本查询在图像、视频或音视频观测中找到被指称的实体，输出通常是边界框、中心点或掩膜等紧凑形式，难点在于查询涉及相似外观区分、空间关系和跨帧变化，而自由生成的长推理容易扩散为场景描述并引入弱相关细节。一个样本的处理过程是把查询和观测送入多模态大语言模型，得到自由推理文本，再由压缩阶段提炼出目标相关短语，最后由该短语条件生成边界框和中心点并交给分割解码器输出掩膜。论文提出的思考-压缩-回答把上述三段串行连接，并用分组相对策略优化分四阶段训练，先立格式，再压信息率，再用裁判模型保真，最后优化定位奖励。与已有链式思考和只奖励答案的方法不同，思考-压缩-回答保留长推理的候选分析，但在回答前经过可观测的文本瓶颈。在 Ref-DAVIS17 验证集上，思考-压缩-回答的区域相似度与轮廓准确度均值越高越好为 78.9，相对同骨干零样本基线 65.2 提高 13.7。结论适用于以框和点为中间答案并外接冻结分割器的推理式分割流程，当推理本身指错对象时压缩无法恢复正确目标。原文披露了 4 块 RTX A6000 等训练硬件，未披露完整训练时长与推理延迟。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多模态定位要从什么输入找到什么输出

多模态定位的输入是文本查询加另一路或多路观测，论文记为查询 q 和多模态输入 X，X 可以是图像、视频、音频或其组合。目标是找出 X 中被 q 指称的实体、事件或区域，输出记为 y。

输出形式随任务而定，可能是框、掩码、中心点或时间区间。论文实际评测的是指代表达分割和指代视频目标分割，最终都要给出像素级掩码。中间会先由语言模型给出框坐标 b 和中心点 p，再交给分割解码器生成掩码。

理解后续方法的关键是记住最终答案很紧凑，但找到它需要分辨长得很像的候选、处理空间和时间关系、整合分散在不同实体和模态中的证据。推理有帮助，但推理写得越长，越容易加入与目标无关的场景描述。

### 已有推理和强化做法为什么还不够

一类已有做法是思维链提示，让模型先写中间步骤再答题，多模态版本还会加入职责分开的提示或中间空间校验。在定位里，这类做法分成隐式和显式两路，隐式用潜变量连接语言模型和分割解码器，显式先生成文本链再预测坐标或掩码。

另一类做法是只用答案奖励做强化学习，或用自一致、过程奖励、测试时增加计算量来挑选更好的推理路径。论文指出这些做法只鼓励答对，不规定中间哪些证据该留、哪些该删，长推理仍可能漂离视觉证据、依赖语言先验、加入幻觉细节。

本文的不同在于加了一个可见的文本瓶颈。不是用潜向量，也不是只做两次推理看答案是否一致，而是要求模型把长推理显式压成一段简短且忠实的提示，再用它来生成框和点。这个压缩步骤是后续训练要专门优化的对象。

### 长推理为什么会伤害紧凑的定位答案

论文把问题表述为表示上的错配。中间答案 a 高度紧凑，只是框和中心点坐标，而推理路径 T 常包含丰富的场景级描述、关系分析和跨模态背景，远超定位所需。直接从 T 生成 a，等价于希望 T 保留对 a 有用的信息，但没有机制删掉多余部分。

随着推理变长，模型容易从目标分析展开成宽泛的场景叙事，稀释了真正支撑感知的证据。论文动机图中的例子就是三者都找对了实体，但在落框时常规思维链和只用答案奖励的强化学习都漂移了，只有经过压缩的方法落准了。

因此论文提出的问题是：如何保留长推理带来的辨别好处，同时只保留定位所需的信息。这自然对应信息瓶颈的思想，即学一个中间表示，丢掉非预测性信息，保留与目标有关的信息。

### 想、压、答三段是如何串起来的

对一个样本，流程是先读 X 和 q，生成自由推理 T，再读 X、q 和 T 生成压缩语境 c，最后基于压缩后的语境生成中间答案 a，再由解码器结合 X 生成掩码 y。论文把 c 记为目标相关的压缩语境，它是连接长推理和紧凑答案的桥梁。

输出被写成 3 个显式文本字段，分别放在 think、compressed、answer 标记之间。训练时没有给 c 的直接标注，只能靠最终的定位标注间接约束它应该简洁、来自 T、且足以预测正确目标。

下面这张总览图展示了从多模态输入到分组回答，再到分阶段奖励和优势更新的完整回路，下一段再解释每个阶段算什么。

**多模态大语言模型 × 解码器：** 多模态大语言模型负责读多模态输入和查询，输出推理文本、压缩语境和中间答案即框与中心点坐标；解码器负责把框和点转成像素级掩码。分工是语言模型做语义辨别，解码器做像素勾画，本文只训练前者的适配参数，解码器保持冻结。

请按以下顺序观察总览图，先看主路径，再看 4 个阶段与奖励的对应关系。

> **看图路径：** 1. 先沿左侧多模态输入到多模态大语言模型的箭头看主路径；2. 再看中间四个阶段目标如何分别对应一种奖励和一种优势；3. 最后看下方四个小框如何解释格式、压缩、评判和定位的具体计算

[![原论文 Figure 2：Overview of Think-Compress-Answer.](https://arxiv.org/html/2610.25640v1/fig2.png)](https://arxiv.org/html/2610.25640v1/fig2.png)

*论文图 2。原论文 Figure 2:：“Overview of Think-Compress-Answer. The model generates N grouped responses [\mathbfT,\mathbfc,\mathbfa] per input.”。*

图的上半部分可见左侧有视觉、文本、音频 3 类输入，进入多模态大语言模型后采样出 N 组回答，每组都是推理、压缩、答案三元组。中间 4 个阶段目标分别产生格式、压缩率、保真度、定位 4 种奖励，再转成组内相对优势，从上方的红色回路更新模型。下半部分 4 个小框分别说明格式检查、两种分布比较、评判模型输入和框重叠比较，帮助理解每 1 阶段到底在约束哪一段文本。

### 压缩目标想留下什么、去掉什么

论文用信息瓶颈目标来表达压缩意图，一项是给定 X 和 q 时 T 与 c 之间的条件互信息，代表推理特有信息，希望变小；另一项是 c 与 a 之间的条件互信息，代表任务相关信息，希望变大，两者用系数平衡。

\[\min_{\pi}\underbrace{I(\mathbf{T};\mathbf{c}\mid\mathbf{X},\mathbf{q})}_{\text{reasoning-specific information}}-\beta\underbrace{I(\mathbf{c};\mathbf{a}\mid\mathbf{X},\mathbf{q})}_{\text{task-relevant information}},\]

这个公式不是直接可算的，因为文本上的互信息难以直接计算。论文把它当作设计指南，拆成后面可操作的奖励：用变分上界近似压缩项，用评判模型近似保真项，用定位准确度近似任务相关项。

**自由推理 × 压缩语境：** 自由推理指模型先对图像视频音频和文本查询做开放式分析，找出候选目标和关系；压缩语境指从这段长分析中只保留能定位目标的关键线索。二者搭配的意义是保留推理的辨别能力，同时去掉场景叙述等定位不需要的内容，让后续作答只看精简线索。

**信息瓶颈 × 推理特有信息 × 任务相关信息：** 信息瓶颈是本文的设计思想，要求中间表示丢掉与答案无关的信息、保留与答案有关的信息。推理特有信息指只有看了某次长推理才能复述的细节，任务相关信息指能预测框和中心点的线索。两者相减构成优化目标，指导压缩语境取小而够用的子集。

沿一个样本理解，就是长推理先提出多个候选和关系，压缩语境只留下能区分目标的那几个词，例如舞台左侧弹黑色吉他的人被压成吉他手，答案再根据这个短语境写框和点，解码器据此画掩码。

### 四个奖励各检查哪一段文本

格式奖励只检查输出结构，要求同时出现 think、compressed、answer 3 组标记，每满足一组得 1 分，共 0 到 3 分再归一到 0 到 1。它不看内容对错，只为建立后续训练能解析的协议。

压缩率奖励希望 c 丢掉只能从某次具体 T 恢复的信息。论文引入不看 T 的变分先验，用条件互信息的上界来约束，估计的信息率是同一段 c 在看过 T 与没看过 T 时的对数似然之差，再经 Sigmoid 变成 0 到 1 的奖励。实现上先验直接用固定的 rollout 策略，不另学一套参数。

\[\begin{split}I_{\pi}(\mathbf{T};\mathbf{c}\mid\mathbf{X},\mathbf{q})\leq\mathbb{E}\big[D_{\text{KL}}\big(\pi(\mathbf{c}\mid\mathbf{X},\mathbf{q},\mathbf{T})\,\|\,\rho_{\eta}(\mathbf{c}\mid\mathbf{X},\mathbf{q})\big)\big].\end{split}\]

\[R_{\text{Comp}}=\sigma(-\hat{\mathcal{I}}_{\text{Rate}}),\]

只压信息率会有退化解，例如输出空词、过泛的词、照抄查询或与输入无关的词。因此第 3 个奖励请专门的评判多模态大语言模型看真值可视化后的输入、查询、推理和压缩语境，判断压缩是否良好且与高亮目标语义一致，输出 0 或 1。

\[R_{\text{Fid}}=\mathcal{J}(\mathbf{X}^{*},\mathbf{q},\mathbf{T},\mathbf{c}),\]

定位奖励直接看中间答案。对分割类任务，a 包含框 b 和点 p，真值可导出对应的框和点，奖励是三项示性函数之和：框交并比大于阈值、框的距离小于阈值、点的距离小于阈值。论文实验取阈值为 0.5、10 和 100。

\[\begin{split}R_{\text{Task}}=\mathbf{1}[\text{IoU}(\mathbf{b},\mathbf{b}^{*})&>\tau_{\text{iou}}]+\mathbf{1}[\lVert\mathbf{b}-\mathbf{b}^{*}\rVert_{1}<\tau_{b}]+\mathbf{1}[\lVert\mathbf{p}-\mathbf{p}^{*}\rVert_{1}<\tau_{p}].\end{split}\]

**压缩率奖励 × 压缩保真奖励 × 定位奖励：** 压缩率奖励鼓励压缩语境去掉依赖某次推理的冗余内容，压缩保真奖励用专门的评判模型检查压缩语境是否仍与推理一致且足以定位，定位奖励直接检查预测框和点的准确度。三者分阶段使用，避免一开始就联合优化互相冲突的目标。

### 四阶段组相对更新如何避免走捷径

训练采用多阶段组相对策略优化。每轮固定当前 rollout 策略，对同一输入采样 N 个回答，计算本阶段对应的奖励，再按组内均值和标准差归一化得到每个回答的相对优势，然后用该优势更新模型。组大小为 8，更新只改语言模型中的低秩适配参数，预训练参数和解码器保持冻结。

阶段顺序是先格式 300 步，再压缩率 300 步，再保真度 600 步，最后定位 900 步，每阶段最好的检查点初始化下一个阶段。在第 2 和第 3 个阶段，更新主要作用于压缩语境的词，推理分布用与上 1 阶段策略的约束稳住；在第 4 个阶段，更新作用于压缩语境和答案，推理字段仍受前 1 阶段策略约束。

这样分开是为了避免一开始就联合优化互相竞争的目标，也避免模型绕过瓶颈，例如把信息直接编进答案而让压缩语境保持无信息。论文把第 2 和第 3 阶段的更新隔离在压缩段，正是这个考虑。

**组相对策略优化 × 辅助分数模型：** 组相对策略优化指每次对同一输入采样一组回答，用组内奖励均值和标准差算相对优势来更新策略，不需要单独的价值评估模型来估计基线。这种搭配降低了训练复杂度，适合奖励有噪声且分阶段变化的本文设置。

### 在什么数据和模型上训练和评测

主干是 Qwen2.5-Omni-7B 作为多模态大语言模型，SAM2 作为解码器。语言模型输出框和中心点，解码器以此为提示生成掩码。评判模型用 Qwen3-VL-8B。训练只用 RefAVS 的 842 条样本和 ReVOS 的 1258 个视频，共一个轮次，不用指代表达分割和指代视频目标分割的 6 个基准做训练，只做零样本评测。

评测覆盖两类任务。指代表达分割用 RefCOCO、RefCOCO+、RefCOCOg，指标是累积交并比，数值越大越好，划分包括验证集、测试 A、测试 B 或测试集。指代视频目标分割用 Ref-YouTube-VOS、Ref-DAVIS17、MeViS，指标是区域相似度和轮廓准确度的平均，数值越大越好，都在验证集上评测。

基线按解码器输入区分。嵌入引导类同时训练语言模型和解码器，推理引导类用现成冻结解码器，只让语言模型给中间答案。本文属于推理引导类，比较时应注意训练阶段和是否冻结解码器并不完全相同，不能把类别差异直接读成同条件胜负。

### 图像指代表达分割上看到了什么

下表比较的是图像指代表达分割的零样本与有监督方法，指标是累积交并比，越大越好。比较问题是：在冻结 SAM2、语言模型只经本文训练的条件下，零样本方法能否接近或超过在这些基准上有监督训练的方法。表中保留了原论文的验证集与测试划分和原始数值。

| Method | MLLM | Dec. | RefCOCO | RefCOCO | RefCOCO | RefCOCO+ | RefCOCO+ | RefCOCO+ | RefCOCOg | RefCOCOg |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | MLLM | Dec. | val | tA | tB | val | tA | tB | val | test |
| Supervised, Fine-Tuning |  |  |  |  |  |  |  |  |  |  |
| Qwen2.5-Omni-7B Qwen Team (2025a) | Qw2.5OM-7B | SAM2∗ | 76.2 | 78.0 | 71.3 | 69.4 | 75.1 | 62.7 | 71.5 | 70.5 |
| Supervised, Embedding-Guided |  |  |  |  |  |  |  |  |  |  |
| LISA Lai et al. (2024) | LLaVA-7B | SAM | 74.1 | 76.5 | 71.1 | 62.4 | 67.4 | 56.5 | 67.9 | 70.6 |
| PixelLM Ren et al. (2024) | LLaVA-7B | Pix.Dec. | 73.0 | 76.5 | 68.2 | 66.3 | 71.7 | 58.3 | 69.3 | 70.5 |
| GSVA Xia et al. (2024) | Vicuna-7B | SAM | 76.4 | 77.4 | 72.8 | 64.5 | 67.7 | 58.6 | 71.1 | 72.0 |
| GLaMM Rasheed et al. (2024) | Vicuna-7B | SAM | 79.5 | 83.2 | 76.9 | 72.6 | 78.7 | 64.6 | 74.2 | 74.9 |
| OMG-LLaVA Zhang et al. (2024a) | IntLM2-7B | SAM | 78.0 | 80.3 | 74.1 | 69.1 | 73.1 | 63.0 | 72.9 | 72.9 |
| F-LMM Wu et al. (2025b) | LLaVA-7B | SAM | 75.2 | 79.1 | 71.9 | 63.7 | 71.8 | 54.7 | 67.1 | 68.1 |
| Sa2VA Yuan et al. (2025) | IntVL2.5-8B | SAM2 | 81.9 | – | – | 76.5 | – | – | 78.9 | – |
| UniPixel Liu et al. (2025b) | Qw2.5VL-7B | SAM2 | 80.8 | 83.0 | 77.4 | 75.3 | 80.1 | 70.0 | 76.4 | 77.1 |
| Supervised, Reasoning-Guided |  |  |  |  |  |  |  |  |  |  |
| SAM4MLLM Chen et al. (2024b) | LLaVA1.6-7B | SAM∗ | 79.6 | 82.8 | 76.1 | 73.5 | 77.8 | 65.8 | 74.5 | 75.6 |
| Seg-Zero Liu et al. (2025c) | Qw2.5VL-7B | SAM2∗ | – | 80.3 | – | – | 76.2 | – | – | 72.6 |
| DR2Seg-7B He et al. (2026) | Qw2.5VL-7B | SAM2∗ | – | 78.7 | – | – | 75.4 | – | – | 72.2 |
| SAM-R1 Huang et al. (2025) | Qw2.5VL-7B | SAM2∗ | – | 79.2 | – | – | 74.7 | – | – | 73.1 |
| Zero-Shot, Reasoning-Guided |  |  |  |  |  |  |  |  |  |  |
| Qwen2.5-Omni-7B Qwen Team (2025a) | Qw2.5OM-7B | SAM2∗ | 74.5 | 75.8 | 69.1 | 66.5 | 71.2 | 60.5 | 71.8 | 71.2 |
| Seg-R1-7B You & Wu (2025) | Qw2.5VL-7B | SAM2∗ | 74.3 | 78.7 | 67.6 | 62.6 | 70.9 | 57.9 | 71.0 | 71.4 |
| VideoSeg-R1 Xu et al. (2026) | Qw2.5VL-7B | SAM2∗ | 78.2 | 82.3 | 75.1 | 71.8 | 76.1 | 64.7 | 73.1 | 74.1 |
| TCA (Ours) | Qw2.5OM-7B | SAM2∗ | 79.4 | 81.5 | 73.6 | 74.0 | 78.7 | 66.1 | 75.3 | 76.0 |

从表中可见本文方法在 RefCOCO 验证集、测试 A、测试 B 以及 RefCOCO+ 和 RefCOCOg 各划分上相比同为推理引导的零样本基线有明显提升，论文报告相比 Seg-Zero 在 3 个划分上分别高 1.2、2.5、3.4 个点，完整数值见原表各单元格。

限制是该表同时列出在这些基准上直接监督训练的方法，部分嵌入引导方法数值更高，例如 UniPixel 和 Sa2VA 在某些划分上仍领先。零样本的结论只在本文的训练数据、主干和冻结解码器条件下成立，不能推广到所有主干和解码器组合。

请先看查询与两路掩码的对比，重点看压缩语境如何改变落框，图中可见舞台多人演奏与两种不同颜色掩码的覆盖差异。

> **看图路径：** 1. 先看顶部视频帧和查询语句确认目标是在舞台左侧弹黑色吉他的乐手；2. 再对比中间红色掩码与底部蓝色掩码分别覆盖了哪个人；3. 注意底部回答中压缩语境和框点字段的写法

[![原论文 Figure 4：Qualitative comparisons for referring video object segmentation on Ref-YouTube-VOS.](https://arxiv.org/html/2610.25640v1/ytvos.png)](https://arxiv.org/html/2610.25640v1/ytvos.png)

*论文图 3。原论文 Figure 4:：“Qualitative comparisons for referring video object segmentation on Ref-YouTube-VOS.”。*

图中最上方是 6 帧舞台视频，查询是找舞台左侧弹黑色吉他的人。中间一路只有长推理没有压缩语境，红色掩码盖住了最左侧弹红色吉他的人，属于找对方向但落错目标。底部本文方法先写较短推理，再给出压缩语境吉他手，然后写出框和点，蓝色掩码盖住左侧第二位弹吉他的人，与查询更一致。该图是单样本定性对比，不提供统计显著性，只能说明压缩后落框可能更紧。

### 视频指代表达分割上提升来自哪里

下表比较的是 3 个视频基准验证集上的区域相似度与轮廓准确度平均值，越大越好。比较问题相同：在同样的冻结解码器设置下，本文零样本方法与零样本推理基线及有监督方法相比处于什么位置。

| Method | MLLM | Dec. | RY-VOS | RD17 | MeViS |
| --- | --- | --- | --- | --- | --- |
| Supervised, Fine-Tuning |  |  |  |  |  |
| Qwen2.5-Omni-7B Qwen Team (2025a) | Qw2.5OM-7B | SAM2∗ | 69.3 | 76.8 | 53.3 |
| Supervised, Embedding-Guided |  |  |  |  |  |
| VISA Yan et al. (2024) | ChatUniVi-7B | SAM† | 61.5 | 69.4 | 43.5 |
| ViLLa Zheng et al. (2025) | Vicuna-7B | E2E | 67.5 | 74.3 | 49.4 |
| Sa2VA Yuan et al. (2025) | IntVL2.5-8B | SAM2 | 70.7 | 75.2 | 46.0 |
| VideoLISA Bai et al. (2024) | LLaVA-Phi-3.8B | SAM2 | 63.7 | 68.8 | 44.4 |
| UniPixel Liu et al. (2025b) | Qw2.5VL-7B | SAM2 | 71.0 | 76.4 | 55.8 |
| Supervised, Reasoning-Guided |  |  |  |  |  |
| VideoSeg-R1 Xu et al. (2026) | Qw2.5VL-7B | SAM2∗† | 81.3 | 79.8 | 55.3 |
| Zero-Shot, Reasoning-Guided |  |  |  |  |  |
| Qwen2.5-Omni-7B Qwen Team (2025a) | Qw2.5OM-7B | SAM2∗ | 63.5 | 65.2 | 49.1 |
| PARSE-VOS Zhao et al. (2025) | Llama3-8B | SAM2∗ | 72.1 | 75.5 | 52.4 |
| Omni-R1 Zhong et al. (2025) | Qw2.5OM-7B | SAM2∗ | 71.0 | 77.6 | 52.3 |
| TCA (Ours) | Qw2.5OM-7B | SAM2∗ | 72.3 | 78.9 | 55.8 |

表中本文方法在 Ref-YouTube-VOS、Ref-DAVIS17 和 MeViS 上相比零样本主干基线 Qwen2.5-Omni-7B 分别高 8.8、13.7、6.7 个点，完整 3 组数值与基线数值均保留在原表中。相比同主干的零样本 Omni-R1 也有提升。

在 MeViS 上该数值与有监督的 UniPixel 持平，在 Ref-DAVIS17 上为次优。但表中有监督的 VideoSeg-R1 还用了外部跟踪器做时间传播，输入条件和后处理并不完全一致，因此不能简单说零样本已全面超过有监督。结论的适用条件是短训练数据、特定主干和冻结 SAM2 的组合。

### 逐阶段加入后性能如何变化

下表是在指代表达分割上消融 4 个阶段的结果，指标仍是累积交并比，越大越好。比较问题是：格式、压缩率、保真度、定位 4 个奖励是否各自带来增益，跳过中间阶段会怎样。表中 S1 到 S4 分别对应 4 个阶段，对勾表示启用该阶段。

| S1 | S2 | S3 | S4 | RefCOCO | RefCOCO | RefCOCO | RefCOCO+ | RefCOCO+ | RefCOCO+ | RefCOCOg | RefCOCOg |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | S2 | S3 | S4 | val | tA | tB | val | tA | tB | val | test |
| ✗ | ✗ | ✗ | ✗ | 74.5 | 75.8 | 69.1 | 66.5 | 71.2 | 60.5 | 71.8 | 71.2 |
| ✓ | ✗ | ✗ | ✗ | 75.6 | 77.2 | 70.6 | 68.2 | 73.5 | 61.8 | 72.9 | 72.1 |
| ✓ | ✓ | ✗ | ✗ | 76.2 | 77.9 | 71.0 | 68.4 | 74.1 | 62.4 | 73.2 | 72.8 |
| ✓ | ✓ | ✓ | ✗ | 76.8 | 78.5 | 70.8 | 69.5 | 74.8 | 63.1 | 72.9 | 73.3 |
| ✓ | ✗ | ✗ | ✓ | 77.5 | 79.6 | 71.6 | 70.8 | 76.2 | 64.2 | 73.9 | 73.8 |
| ✓ | ✓ | ✗ | ✓ | 78.4 | 80.5 | 72.5 | 71.9 | 77.4 | 65.1 | 74.6 | 74.4 |
| ✓ | ✓ | ✓ | ✓ | 79.4 | 81.5 | 73.6 | 74.0 | 78.7 | 66.1 | 75.3 | 76.0 |

可见只加格式已比无优化基线提升，加入压缩率后进一步提升，加入保真度后再提升，4 个阶段全开达到最高，完整各划分数值见原表。跳过中间阶段直接做定位的行的数值低于完整渐进训练，支持分阶段的必要性。

另一组视频消融也显示相同趋势，完整 4 阶段在 3 个视频验证集上达到最高。论文还报告定位交并比在压缩阶段尚未用定位奖励时已上升，说明压缩本身可能改善定位，但这只是训练曲线上的伴随现象，不能单独证明因果。

请对比无压缩与有压缩在同一街景样本上的框位置，理解压缩保留了什么，注意绿色真值框与红蓝预测框的位置关系。

> **看图路径：** 1. 先看输入街景和声音变大的查询以及绿色真值框的位置；2. 再对比无压缩时红色框偏到左侧车辆的原因；3. 注意有压缩时压缩语境只保留一个词且蓝色框回到救护车

[![原论文 Figure B4：Figure B4: Impact of compression.](https://arxiv.org/html/2610.25640v1/compression_vs_non.png)](https://arxiv.org/html/2610.25640v1/compression_vs_non.png)

*论文图 8。原论文 Figure B4:：“Figure B4: Impact of compression. TCA extracts target-relevant context from the reasoning path, yielding a more precise mask.”。*

图的上方左侧是输入街景，右侧绿色框标出真值即中央救护车，查询是声音随时间变大的目标。左下无压缩分支的推理提到救护车警笛，但答案框偏到左侧车辆，红色框明显偏小偏左。右下有压缩分支把推理压成救护车一个词，蓝色框回到中央车辆，与绿色真值基本重合。该例子说明压缩语境去掉了街道和行人等冗余线索，但仍是单样本展示，不能代替整体消融数字。

### 换评判模型后结果还稳吗

下表比较用不同多模态大语言模型做第 3 阶段评判时的结果，指标是视频与推理分割基准上的平均值，越大越好。比较问题是：保真奖励是否依赖某个特定评判模型，增大评判模型规模是否有持续收益。解码器均为 SAM2。

| LLM Judge | RY-V | RD17 | MeViS | ReVOS | RefAVS(U) |
| --- | --- | --- | --- | --- | --- |
| Qw3VL-8B | 72.3 | 78.9 | 55.8 | 60.5 | 78.8 |
| Qw2.5VL-7B | 71.9 | 78.1 | 54.5 | 58.5 | 77.6 |
| Qw2.5VL-32B | 71.4 | 78.5 | 53.6 | 58.7 | 77.2 |
| Llama3.2Vi-11B | 70.5 | 74.6 | 52.9 | 57.6 | 76.8 |

表中 Qwen3-VL-8B 在 5 个评测上整体最好，Qwen2.5-VL-7B 和 32B 与之接近，Llama-3.2-Vision-11B 相对偏低，尤其在 Ref-DAVIS17 上偏低，具体数值均保留在原表各单元格中。

解释是方法对评判模型选择有一定鲁棒性，增大规模并不单调提升。这组实验只换了评判模型，主干和训练数据不变，因此结论不能推广到换主干或换任务时的情况。未胜出的 Llama 结果也提醒评判模型的视觉语言对齐方式会影响保真判断。

### 压缩在什么时候救不了定位

论文明确了一个前提：目标相关语境能从长推理中提取出来。如果推理本身认错目标，压缩会忠实保留错误语境，无法恢复正确定位。这不是压缩步骤的随机失误，而是设计边界。

请先看真值标出的猫与模型锁定的卷尺之间的错位，再看压缩语境的措辞，注意左右两路框的位置差异。

> **看图路径：** 1. 先看输入房间场景和绿色真值框标出的猫的位置；2. 再看有压缩分支的推理为何锁定卷尺而非猫；3. 注意压缩语境忠实保留了错误推理导致蓝色框仍偏离真值

[![原论文 Figure B5：Figure B5: Failure case from RefAVS.](https://arxiv.org/html/2610.25640v1/failure_case.png)](https://arxiv.org/html/2610.25640v1/failure_case.png)

*论文图 9。原论文 Figure B5:：“Figure B5: Failure case from RefAVS. When the reasoning phase identifies a related but incorrect object, compression preserves the erroneous target context and cannot recover the…”。*

图的上方左侧是室内场景，右侧绿色框标出真值是右侧的猫，查询是因敲击卷尺发声的目标。左下无压缩分支框住婴儿，右下有压缩分支的推理把发声物理解成卷尺，压缩语境写成卷尺，蓝色框落在大人手部附近，都没有命中猫。可见压缩按要求完成了提炼，但提炼的是错误对象。

这说明本文主要缓解推理漂移，即从正确方向走偏的问题，而不是纠正根本认错目标的问题。后续需要更强的推理验证或纠错机制，这部分在本文中没有评测。

### 复现第一步要准备什么

复现应从数据和模型对应关系入手。训练数据是 RefAVS 的 746 个视频 842 条表达和 ReVOS 采样的 512 个视频 1258 条表达，评测数据是 6 个定位基准的官方划分。不要把评测集混入训练，否则零样本的说法不再成立。

模型方面，主干用 Qwen2.5-Omni-7B，解码器用冻结的 SAM2，评判用 Qwen3-VL-8B。只训练语言模型中的低秩适配参数，秩为 8，缩放系数为 32，学习率为 1e-6，组大小为 8，最大补全长度为 512。4 个阶段步数分别为 300、300、600、900，每阶段最优检查点初始化下一个阶段。

输出解析要严格按 3 个标记切分，先取 think、compressed、answer 3 段，再分别计算本阶段奖励。压缩率计算需要同时算看过推理与没看过推理时的对数似然，保真度计算需要先把真值画到输入上再送评判模型。硬件原文为 4 张显存 48 GB 的显卡，推理开销和延迟没有单独报告，不能默认复现时速度一致。

关于来源，本文未发现完成绑定的作者资源，不能写代码、模型或数据已公开。需要自行按论文描述实现训练流程和评测脚本。

### 什么时候值得试、还缺哪些验证

当你的多模态定位系统已有较长的文本推理，但落框不稳、掩码偏大或偏到邻近目标时，值得尝试在推理和答案之间加一段显式压缩，并按格式、压缩、保真、定位的顺序分阶段训练。这种做法不改模型结构，也不需要给压缩语境手写标注，适合想保留推理能力又要紧凑答案的场景。

复现第一步是先跑通 3 段式输出协议，确保能稳定解析出推理、压缩和答案，再逐步加入压缩率和保真奖励，观察压缩长度分布是否从两极分化转向适中。关键超参数是三项定位阈值和组大小，信息条件是训练时能看到真值可视化，测试时看不到。

还缺的验证包括：在更多主干和解码器组合上的稳定性，尤其语言提示为主的解码器上提升较小；在长视频跟踪和音频视觉联合推理上的延迟与成本；以及当推理本身错误时的纠错能力。本文的数字只支持在给定主干、冻结 SAM2 和短训练数据下的零样本结论，不支持更推理就更好的一般主张。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.25640v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
