---
title: "ConvexLLM: Scaling Convex-Hull Speech Interfaces to General-Purpose Audio Intelligence"
date: 2026-10-19
draft: false
tags: [音频理解, 语音识别, 语音对话系统, 多模态学习, 知识蒸馏]
categories: [论文速递]
description: "论文把音频到解码器的接口限定为冻结文本词嵌入的凸组合，用 C-Gate 路由实现，并在 VoiceBench 十一任务平均 75.36 分的语音知识推理优势与转写和非语音理解上存在取舍的条件下验证其可行性。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.23539"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把音频放进文本词表凸包里：ConvexLLM 的接口与验证"
paper_digest_original_title: "ConvexLLM: Scaling Convex-Hull Speech Interfaces to General-Purpose Audio Intelligence"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.23539v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.23539v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.23539v1.pdf"
paper_digest_primary_task: "音频理解"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-understanding","label":"音频理解"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文把音频到解码器的接口限定为冻结文本词嵌入的凸组合，用 C-Gate 路由实现，并在 VoiceBench 十一任务平均 75.36 分的语音知识推理优势与转写和非语音理解上存在取舍的条件下验证其可行性。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ming-Hao Hsu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shujie Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxuan Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxiang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yingda Shen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jinyu Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhizheng Wu"}]
paper_digest_abstract_sha256: "248ddc1e6e516db4530c2319572840c20f3647fef12e66cce605feddb32264c5"
paper_digest_sidecars: {"citation.bib":{"sha256":"fd9e01ce05f64547976b21b631ec367e4443423cde2d4f8a9362ed7c4406aa6e","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23539/citation.bib"},"citation.json":{"sha256":"a15fcd116d8a5f2eebcab5c776b3ee5620dcd75af15742c1c0d7d67d52cd7daa","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23539/citation.json"},"citation.ris":{"sha256":"78814b02034a0aab0e9ffa21827969374094d097bc77e987357ec6023606bba7","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23539/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e6c21548d9c20dbd834b2eae8d5c355b2f166a2d9cdffb425a02a5a10f363958","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23539/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "14122441b52a5510cbfbdb5c6967b8020eb0c0a0b5a06c4fc7fcaf9be206e8af"
paper_digest_api_reader_plan_sha256: "d89ca41ad13ad743203ce9efb9160a68cbc2246a28643135a62c37caafc079bc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c863c212784da70a9fc4e17d06c6b77fdcc3ba44b935b01486a2583349c683f4"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "657eb729b99c6b36317ad4be21afd3084a388b7b588a72b7fc775bb95bf230e7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "075689ac49d5935bb690004336f48c2e559b1d17bf44b45232f80974b5d76345"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2ecdb223e0596a164b48e6f8cafeeaf7ccd960d76f22323d742051eb3606bf97"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把音频放进文本词表凸包里：ConvexLLM 的接口与验证

> 英文题目：*[ConvexLLM: Scaling Convex-Hull Speech Interfaces to General-Purpose Audio Intelligence](https://arxiv.org/abs/2610.23539v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding)；[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-paper-digest-blog/papers/?concept=task.speech-dialogue)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Ming-Hao Hsu：机构信息未能在本次解析中与作者逐人可靠绑定
- Shujie Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuxuan Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuxiang Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yingda Shen：机构信息未能在本次解析中与作者逐人可靠绑定
- Jinyu Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhizheng Wu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音音频大模型需把连续声学表示变成主要用文本训练的解码器可读输入，已有映射常把音频送到远离文本词表的位置，解码器既要利用声学信息又要保留原有文本能力。ConvexLlm用声学编码器加C-Gate接口加Qwen3.5解码器处理任务，音频先经查询投影变成查询向量再与全部冻结词向量键匹配，只保留得分最高的少量词向量并做加权平均，得到仍在词表凸包内的连续输入后与任务提示拼接，由解码器自回归生成回答。C-Gate全部输出都是冻结词向量的凸组合，即权重非负且和为1的加权和，与无约束映射和每次只取一个词的离散映射不同，训练只改变如何组合与如何解读组合，不改动作为参照的词表本身。在十一项VoiceBench任务的等权平均Overall指标上，该9B模型得到75.36分，为所比较开源权重模型中最高，其最大领先在口语知识与推理类任务，而转写与音频理解仍由更强基线领先。在MMAU Test-mini平均准确率上该模型为62.50%，低于MiMo-Audio的76.63%；在LibriSpeech test-clean和test-other语料级词错误率WER上该模型为2.39%和5.07%，低于MiMo-Audio的3.19%和6.40%但高于Kimi-Audio领先的1.40%和2.59%。在共享Stage 3流程的Qwen3.5-2B语音输入比较中，C-Gate的VoiceBench Overall为60.35分，高于MLP的58.80分和Q-Former的54.19分；K=1时两LibriSpeech分集WER均超86%且VoiceBench Overall仅22.30分，说明需混合多个词向量。结论适用于论文所用公开语音加合成指令数据与三阶段训练流程，大规模噪声口音与长音频尚未系统验证。训练成本上原文披露9B训练使用16张H100，适配音频上界为0.271M小时，推理采用贪心解码。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音音频大模型要解决的输入难题是什么

这类模型的输入是波形，目标是让主要在文本上预训练的解码器既能听懂说了什么，又能利用文字稿里没有的信息，例如语气、环境声和音乐，再结合自身的知识和指令遵循能力给出文字回答。必须保留的信息包括语音内容、副语言线索和非语音事件，输出是文字回答或转写。

难点在于声学表征是连续向量，而解码器最熟悉的是自己的文本词嵌入。如果接口是无约束的投影，输出可能落在远离词嵌入的区域，解码器就要现学如何解读这块新空间，同时还可能削弱原有的文本能力。论文要检验的思路是：从训练一开始就把音频输入限定在冻结词嵌入的凸包内，看通用语音和音频任务能否做好。

### 已有接口路线与本文位置有何不同

开放权重的语音音频模型常用可学习的投影器或块编码器把音频特征映射到解码器输入，多任务训练同时支撑识别、指令跟随和音频理解。另一条路线关注语音与文本的能力差距，用蒸馏把语音条件输出向对应文本输入的输出对齐，或在训练中加入大量文本数据。

词汇表相关接口则试图与文本词嵌入建立显式关系，例如用语音识别后验加权混合词嵌入，或用文本初始化的量化码本。本文属于第 3 类中的连续凸混合路线，沿用 C-Gate 的构造：词表固定不动，只学习如何组合。与前人只做识别和情感等受控任务不同，本文把它放进完整模型，覆盖识别、语音推理、指令跟随和非语音理解，并同时测量适配后的文本任务表现。

**MLP 接口 × Q-Former 接口：** MLP 接口指用两层前馈投影把声学特征直接映射到解码器输入空间的做法，输出位置与池化后音频帧一一对应；Q-Former 接口指用少量可学习查询通过交叉注意力从音频特征中提取信息的接口，本文实现输出 64 个位置。两者都是无约束连续接口的代表，与 C-Gate 的凸包约束形成对照，用于检验约束是否带来语音任务和文本能力保留上的不同取舍。

### 凸包接口想固定什么、学习什么

论文把问题形式化为：给定波形和任务提示，声学编码器先产生状态，再经时间均值池化得到较短序列，接口把每个池化状态映射为解码器输入，解码器在其旁边读入任务提示并自回归生成回答。文本词嵌入表在全部训练中保持冻结，学习只改变如何组合这些行以及解码器如何解读组合结果。

下图对比有助于建立直觉，读图时先区分输出是落在单个词行上、落在凸包外，还是落在包内的连续区域。

> **看图路径：** 1. 先看三块小图的黑点与多边形边界代表什么；2. 再对比蓝色菱形输出落在顶点上、包外还是包内；3. 注意最右图浅色区域表示连续可变的凸区域

[![原论文 Figure 1：Comparison of Input Interfaces. (a) Discrete outputs select individual embedding rows.](https://arxiv.org/html/2610.23539v1/figure1.svg)](https://arxiv.org/html/2610.23539v1/figure1.svg)

*论文图 1。原论文 Figure 1:：“Comparison of Input Interfaces. (a) Discrete outputs select individual embedding rows.”。*

离散接口每次只选一个词嵌入行，表达受限；无约束连续接口可以跑到凸包外面，解码器需要适应陌生的位置；凸混合允许连续变化但始终留在包内。论文的中心问题是这种受限接口能否支撑通用音频能力，而不同任务对接口的信息需求并不相同，因此需要把识别、推理、指令跟随和非语音理解放在一起评估。

### ConvexLLM 的整体数据流是怎样的

模型由三部分组成：Whisper-large-v3 声学编码器、C-Gate 接口和 Qwen3.5 系列语言解码器，主模型用 9B 解码器，对照实验用 2B 解码器。编码器输出先做步长为 4 的时间均值池化，C-Gate 把每帧变成冻结词嵌入的凸组合，解码器把这些音频位置与嵌入后的任务提示拼接起来读入并生成回答。文本词嵌入表和语言模型输出头在 3 个阶段始终冻结。

下图展示了流水线与训练损失的位置，观察时沿音频到回答的主路径看，右侧冻结文本教师只在训练时出现。

> **看图路径：** 1. 沿音频波形到编码器再到 C-Gate 最后到解码器的主箭头看数据流；2. 注意任务提示从上方以词嵌入查找方式并入解码器；3. 区分下半部分路由器内部的打分、选 Top-K 与加权求和三步

[![原论文 Figure 2：ConvexLlm Architecture. (a) The acoustic encoder produces representations that C-Gate maps into…](https://arxiv.org/html/2610.23539v1/convexllm_architecture_loss_v11.svg)](https://arxiv.org/html/2610.23539v1/convexllm_architecture_loss_v11.svg)

*论文图 2。原论文 Figure 2:：“ConvexLlm Architecture. (a) The acoustic encoder produces representations that C-Gate maps into continuous inputs for the language decoder, which reads them next to the embedded…”。*

上半部分显示音频经编码器和池化进入 C-Gate，输出送入解码器块，右侧是冻结文本教师提供的蒸馏损失和常规交叉熵损失；下半部分展开路由器内部，依次是查询投影、词表打分、选 Top-K 和加权求和。灰色标记在第一阶段冻结的模块，编码器和解码器块在后续阶段才参与训练。

**声学编码器 × 语言解码器：** 声学编码器负责把波形变成按时间排列的声学状态，保留说什么、语气和环境声等信息；语言解码器是主要在文本上预训练的大模型，负责读任务提示和音频输入并生成文字回答。两者分工是编码器做听觉特征提取，解码器做知识、推理和指令遵循，C-Gate 在中间把前者的输出翻译成后者熟悉的词嵌入组合形式。

### 路由器如何为每帧音频选词并配权重

C-Gate 的工作方式像一次对词表的单头注意力查找。查询投影把每个池化音频状态变成查询向量，经过仿射变换、层归一化和训练时丢弃；可学习的线性映射把每个词嵌入行变成键。路由器计算查询与键的相似度，对全部词表打分并保留最高的 K 个，原文主实验取 K 为 16。

打分公式决定每个词的原始得分与保留集合，符号中 t 是音频位置，v 是词表索引，dr 是路由维度，tau_r 是可学习的路由温度。

\[s_{t,v}=\frac{q_{t}^{\top}k_{v}}{\sqrt{d_{r}}\,\tau_{r}},\qquad S_{t}=\operatorname{TopK}_{v}(s_{t,v}),\]

得到支持集后，在该集合内做 softmax 得到混合系数，tau_m 是固定的混合温度。选择只依赖得分排序，两个温度都只影响混合的锐度，训练通过 tau_r 调节锐度。

\[\alpha_{t,v}=\frac{\exp(s_{t,v}/\tau_{m})}{\sum_{u\in S_{t}}\exp(s_{t,u}/\tau_{m})},\quad v\in S_{t}.\]

最终输出是被选词嵌入按系数加权求和，系数非负且和为一，因此每个输出都在冻结词嵌入的凸包内。

\[\tilde{e}_{t}=\sum_{v\in S_{t}}\alpha_{t,v}\mathbf{E}_{v}.\]

选择本身不可微，梯度经由被选中词的得分传回路由器。路由打分在实现上按 2048 行分块打分再合并，数学上与一次全词表打分得到相同的支持集，只是省内存。

**C-Gate × 凸组合：** C-Gate 是本文的音频到文本接口模块，负责把每帧音频变成解码器可读的输入；凸组合是它的输出形式，指用非负且和为一的权重对冻结文本词嵌入加权求和，输出始终落在这些词嵌入张成的凸包内部。两者搭配的意义是：C-Gate 只学习如何选词和配权重，不改词表本身，从而给解码器一个稳定的文本参照，同时保留连续变化的表达能力。

**支持集大小 K × 混合温度：** 支持集大小 K 指每个音频位置保留得分最高的 K 个词嵌入参与混合，控制每次用多少词；混合温度指对这 K 个得分做 softmax 时的锐度系数，决定权重集中还是分散。两者共同决定凸组合的表达与集中程度：K 给出上限，温度调节在该上限内的分配，论文通过改变 K 观察转写、语音问答和音频理解的变化是否一致。

### 解码器如何读入音频组合并生成回答

接口输出占据解码器输入中的音频位置，旁边是嵌入后的任务提示，解码器自回归生成文字回答。训练时只对回答词计算损失，提示词、音频位置和填充不计入。纯文本例子沿用同样的目标，只是没有音频。

这种拼接方式意味着解码器不需要额外的音频分支结构，它读到的音频部分本身就是词嵌入空间内的向量序列。冻结词表提供稳定参照，解码器块在第 3 阶段与编码器、接口联合微调，学习如何利用这种受限输入。推理时只运行音频条件模型，不需要文本教师。

### 三阶段训练与文本教师蒸馏如何分工

训练分 3 个阶段。第一阶段只训练接口，编码器和解码器冻结，先建立音频与解码器之间的初始对齐，梯度穿过解码器传到接口。第二阶段再训练编码器，使其表征更适合下游任务和解码器，解码器仍冻结。第 3 阶段再训练解码器块，此时编码器、接口和解码器块联合微调，词嵌入表和输出头始终冻结。

9B 主模型在第 3 阶段对有文字对应形式的音频例子使用蒸馏损失。教师是原始解码器的冻结副本，读文字版问题或录音稿，音频条件模型在每个回答位置逼近教师的下一个词分布。

\[\begin{split}\mathcal{L}_{\mathrm{KL}}(a,x,w,y_{i})=\mathrm{KL}\big(&p_{\bar{\theta}}(\cdot\mid w,y_{\lt i})\,\big\|\\ &p_{\theta}(\cdot\mid a,x,y_{\lt i})\big),\end{split}\]

其中 theta_bar 表示冻结教师参数，w 是音频所承载内容的文字形式。该损失要求模型对语音的反应像原解码器对同样文字请求的反应。没有文字对应物的音频例子和纯文本回放例子仍用交叉熵损失。2B 对照模型在第 3 阶段只用交叉熵，以便公平比较接口。

**交叉熵损失 × 文本教师蒸馏：** 交叉熵损失是让模型在目标回答的每个位置提高正确词概率的常用训练目标；文本教师蒸馏是本文 9B 主模型在第三阶段用的额外目标，用冻结的原文解码器读文字版问题产生逐词分布，让音频条件模型去逼近它。搭配理由是：当音频有对应的文字内容时，直接抄答案不如直接学文字模型的回答分布，更有助于让语音输入继承文字输入的行为。

### 数据、基线与评测条件是如何安排的

训练混合了公开语音识别数据、音频描述与理解数据以及合成的语音指令和推理例子，还加入小比例纯文本回放以帮助保留文本能力。2B 比较用的采样比例在原文中有明确分组，理解该表有助于判断各任务家族的监督来源。

下表说明 2B 接口比较的来源采样概率，比较问题是训练任务分布是否一致，指标方向是概率越高表示该家族在每步被抽到的机会越大。

| Task Family | Dataset or Source Group | Input | Probability |
| --- | --- | --- | --- |
| Recognition | MLS English, GigaSpeech, LibriSpeech, Emilia, Common Voice English, FLEURS English | Audio | 35.0% |
| ASR-derived instruction | Transcription-derived spoken instruction sources | Audio | 15.0% |
| Interaction and audio understanding | Public audio, synthetic speech, and in-house data | Audio | 35.0% |
| Text replay | General dialogue, question answering, instruction following | Text | 15.0% |
| Total |  |  | 100.0% |

这一比较关心的是训练任务分布是否一致，该表只给出 2B 比较的最终阶段比例，9B 主模型在第 3 阶段中途提高了转写和识别衍生指令的采样权重，因此主模型与 2B 模型的训练分布并不完全相同。

评测覆盖三块：VoiceBench 十一子集测语音交互、指令跟随、问答、推理与拒答，开放回答用 GPT-5.4 打 1 到 5 分再乘以 20 换算到 100 分制；MMAU Test-mini 测声音、音乐和语音理解，按解析选项算准确率；LibriSpeech 测转写，按语料级词错率报告，越低越好。主比较是完整系统排名，基线在主干、数据规模和适配方法上本就不同；接口比较则用同一编码器、同一 2B 解码器、共享第 3 阶段数据、目标、有效批量和学习率进度，每种接口训练一个模型。

### 主模型在语音知识任务上强在哪里

先看完整系统比较的总体情况，重点是语音交互总分由哪些子任务驱动，以及哪些任务仍落后。下表整理原文直接报告的总体与知识推理分数，比较问题是完整系统在相同评测流程下的语音表现，分数越高越好。

| 条件 | 指标 | ConvexLLM | MiniCPM-o 4.5 | Kimi-Audio | MiMo-Audio |
| --- | --- | --- | --- | --- | --- |
| 语音输入 | VoiceBench 总体平均 | 75.36 | 73.04 | 70.26 | 未在引文列出 |
| 语音输入 | OpenBookQA 准确率 | 90.33 | 未在引文列出 | 未在引文列出 | 75.80 附近区间对象需看原表 |
| 语音输入 | MMSU 准确率 | 72.32 | 未在引文列出 | 未在引文列出 | 未在引文列出 |
| 语音输入 | SpeechMMLU 准确率 | 73.42 | 未在引文列出 | 未在引文列出 | 未在引文列出 |
| 语音输入 | BBH 准确率 | 80.40 | 未在引文列出 | 未在引文列出 | 71.60 |

原文报告 ConvexLLM 总体最高，领先 MiniCPM-o 4.5 和 Kimi-Audio，最大优势集中在知识和推理四列，且 BBH 超出次优 MiMo-Audio 8.80 分。但这只是完整系统比较，不能归因于接口 alone，因为基线规模、数据和训练流程都不同。未胜出项同样明确：指令跟随 IFEval 和语音问答 SD-QA 落后于 MiniCPM-o 4.5，开放回答中三项排第二，说明凸接口的优势是任务相关的。

下图从表征角度帮助理解为何语音输入能较早贴近文字行为，观察时注意 C-Gate 曲线在早期块就抬高，而另两条曲线上升更慢。

> **看图路径：** 1. 看左图横轴文本主成分数增加时三条接口曲线的能量高低；2. 看中图第 7 个解码器块附近语音文本余弦相似度的分叉；3. 看右图纵轴对数刻度下语音表征范数是否贴近文本表征

[![原论文 Figure 4：Speech Representations Relative to Text Representations.](https://arxiv.org/html/2610.23539v1/interface_geometry.svg)](https://arxiv.org/html/2610.23539v1/interface_geometry.svg)

*论文图 4。原论文 Figure 4:：“Speech Representations Relative to Text Representations.”。*

左图显示 C-Gate 输入在文本主方向上集中了更多变化，前 100 个文本方向承载其 28.4% 的变化，接近文字词元的 23.7%，而 MLP 和 Q-Former 仅 8.8% 和 4.9%。中图显示 C-Gate 在第 7 块达到 0.69 的去均值余弦相似度并保持到第 19 块，而 MLP 和 Q-Former 在第 7 块仅 0.45 和 0.44。右图显示 C-Gate 语音表征范数从首个块起跟随文字表征，而另两者进入解码器时范数高达 36.7 和 25.2，远超文本嵌入的 0.65 量级。这些测量来自单独训练 6000 步的 2B 模型和 200 个配对问题，条件与主结果表不同，只能作为机制解释，不能直接证明主模型的胜负原因。

### 受控接口比较揭示了怎样的取舍

2B 受控比较把编码器、解码器、数据和优化设置固定，只换接口，并分别用语音和文字输入评估。比较问题是接口本身带来的差异，语音总体越高越好，文字总体反映适配后解码器保留了多少文本任务能力。

| 条件 | 指标 | C-Gate | MLP | Q-Former | 原始解码器 |
| --- | --- | --- | --- | --- | --- |
| 语音输入 | VoiceBench 总体平均 | 60.35 | 58.80 | 54.19 | 不适用 |
| 文字输入 | VoiceBench 总体平均 | 63.20 | 62.72 | 61.63 | 60.55 |
| 语音文字差 | 总体差距 | 2.86 | 3.92 | 7.44 | 不适用 |

C-Gate 语音总体最高，对 MLP 的最大单项优势在 OpenBookQA，其次在 IFEval、MMSU、SpeechMMLU 和 BBH 上也有增益；MLP 在 SD-QA 更高，Q-Former 在 AlpacaEval 和 CommonEval 更高。文字输入下三者都高于原始解码器，C-Gate 最接近 MLP 且最高，但都在 BBH 等任务上有下降，C-Gate 从 76.60 降到 68.20。因此结论是有条件的：凸接口在该配方下语音总体最好、文字差距最小，但并非所有子任务都赢。

转写与音频理解呈现反向取舍，比较问题是不同任务家族各由哪种接口领先，词错率越低越好，MMAU 准确率越高越好。

| 条件 | 指标 | ConvexLLM 9B | C-Gate 2B | MLP 2B | Q-Former 2B |
| --- | --- | --- | --- | --- | --- |
| MMAU 声音音乐语音 | 分类准确率 | 65.77%，60.78%，60.96% | 未在此表展开 | 未在此表展开 | 未在此表展开 |

9B 主模型转写好于 MiMo-Audio 但不如 Kimi-Audio 领先的 1.40% 和 2.59%，MMAU 平均 62.50% 明显低于 MiMo-Audio 的 76.63%。2B 内比较中 MLP 转写最低，Q-Former 的 MMAU 最高，C-Gate 居中。原文还指出 C-Gate 比 MLP 多的词编辑中 81.1% 是替换错误，而 C-Gate 对 MLP 的语音优势集中在 OpenBookQA、MMSU 和 SpeechMMLU 三项，约占总差距的大部分。这支持每种接口各擅长 1 个任务家族的判断。

### 每个位置混合多少个词嵌入才够

消融改变支持集大小 K，4 个取值从同一 Stage 2 检查点出发，用相同的第 3 阶段设置训练到 18000 步。比较问题是混合词数对转写、语音问答和音频理解的影响是否一致，词错率越低越好，其余分数越高越好。

读图时先看 K 等于 1 的极端失败，再看 K 从 4 到 64 的单调部分与不单调部分的分化。

> **看图路径：** 1. 先看左图 K=1 到 K=4 时词错率的陡降幅度；2. 再看中图声音、音乐、语音三条线在 K=16 后是否继续上升；3. 最后看右图语音问答总分与单项分随 K 的变化是否同步

[![原论文 Figure 3：Comparison of Top-K Configurations.](https://arxiv.org/html/2610.23539v1/topk_18k.svg)](https://arxiv.org/html/2610.23539v1/topk_18k.svg)

*论文图 3。原论文 Figure 3:：“Comparison of Top-K Configurations. We train C-Gate with support sizes K\in\1,4,16,64\ on Qwen3.5-2B.”。*

K 为 1 时每位置只用一个词嵌入，两 LibriSpeech 分支词错率都超过 86%，VoiceBench 总体仅 22.30，因此混合多个词是必要的。从 K 为 4 到 64，词错率逐步下降，OpenBookQA、IFEval、SD-QA 和总体在每一步都上升。但 MMAU 不跟随该趋势：从 4 到 16 声音上升、音乐持平、语音下降，到 64 时 3 类都低于 16，平均 58.50% 对 59.40%。其他实验用的 K 为 16 是 MMAU 平均最高点，而 K 为 64 进一步改善词错率和 VoiceBench 总体，但每个位置混合 4 倍词嵌入，计算代价更高。K 为 1 运行时因单元素 softmax 无梯度而用了直通估计，方法细节与其它 K 不同，比较时需注意该条件差异。

### 这些结论在什么条件下才成立

主表比较的是完整系统，规模、训练数据和适配流程都不同，因此不能把总体领先直接解读为接口单独的胜利。接口比较每种接口只训练一个 2B 模型，结论限于该解码器、该数据配比和 18000 步的配方，换主干或换数据比例可能改变排序。

表征分析用的是另一组只训练 6000 步且按任务平均损失的 2B 模型，问题集限于 200 个配对问题，PCA 可视化只用其中 20 个问题，归一化、去均值和平均方式都会影响数值，不能推广到主模型全量评测。统计上原文给出了部分自助法区间，例如 9B 与 2B 的转写差异和 C-Gate 与 MLP 的任务差异，但多数子任务没有显著性报告，单点高低不宜过度解读。

数据规模方面，适配音频上限为 0.271M 小时，远小于 Kimi-Audio 和 MiMo-Audio 报告的量级，但这不包括 Whisper 编码器和 Qwen 解码器的预训练，低适配数据不等于整体数据更少。伦理上语音可能含可识别和敏感信息，需尊重同意与隐私，合成语音与数据偏差可能导致口音和人群表现不均，而本文未系统评估，模型也可能产生错误或有害回答。

### 复现第一步要固定什么

先固定解码器与词表：用 Qwen3.5-2B 做对照，冻结文本输入嵌入表和输出头，声学编码器用 Whisper-large-v3，池化步长 4，路由维度 512，支持集 K 为 16，路由温度初值 1.0，混合温度 0.7，查询投影丢弃 0.1。路由打分裁剪到负 30 到 30，按 2048 行分块合并得到 Top-K。

再固定 3 阶段流程：第一阶段只训接口，第二阶段加训编码器，第 3 阶段加训解码器块，有效批量、学习率和预热按原文 2B 表设置，接口、编码器、解码器用不同峰值学习率。评测用贪心解码，转写用原文的逐字重复指令并做 Whisper 英文文本归一化，开放回答用同一 GPT-5.4 流程，VoiceBench 总体取十一任务等权平均。来源未确认不是技术缺陷，本文没有提供可验证的公开代码与权重信息，因此复现应从数据准备和评测脚本做起，并补上按说话人或按条目的自助区间与失败例子检查。

### 什么时候值得尝试凸接口

当目标是让语音输入尽量沿用解码器已有的文本知识和推理行为，且希望语音与文字表现差距更小，同时能接受转写和部分音频理解不是最优时，冻结词表的凸组合是值得尝试的路线。它的代价是每个位置要打分全词表并混合 K 个词，K 增大带来计算增加，且 MMAU 类任务可能在 K 为 16 后不再受益。

还需要补的验证包括：更大解码器下是否保持相同的取舍，更多口音、噪声和音乐条件下的稳定性，以及长音频超过 30 秒截断后的行为。教学上可以把本文记为接口约束与训练监督分工的例子：凸包约束负责把输入放在熟悉的位置和尺度，蒸馏与多任务数据负责教模型如何使用这些输入，两者缺一都难以解释最终的任务分布。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.23539v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-19/)
