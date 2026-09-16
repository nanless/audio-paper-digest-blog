---
title: "StepAudio 3 Music Technical Report"
date: 2026-09-16
draft: false
tags: [音乐生成, 自回归模型, 流匹配, 混合专家模型, 音乐]
categories: [论文速递]
description: "StepAudio 3 Music 针对完整歌曲的长程结构与高保真渲染矛盾，采用 50 赫兹 65536 表项单码本离散表示加混合专家自回归组织音乐序列再由流匹配扩散渲染 48 千赫音频，并以 ABC 记谱作显式编曲计划，在 339 条歌词到歌曲与 316 条人声条件上取得内容享受 7.7086 与文本相似 0.4465 的最高均值，代价是自回归序列翻倍与符号级服从仍未被测量。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.16034"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "先规划后演奏：StepAudio 3 Music 用单码本与 ABC 计划平衡长曲连贯与音质"
paper_digest_original_title: "StepAudio 3 Music Technical Report"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.16034v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.16034v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.16034v1.pdf"
paper_digest_primary_task: "音乐生成"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.music-generation","label":"音乐生成"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "StepAudio 3 Music 针对完整歌曲的长程结构与高保真渲染矛盾，采用 50 赫兹 65536 表项单码本离散表示加混合专家自回归组织音乐序列再由流匹配扩散渲染 48 千赫音频，并以 ABC 记谱作显式编曲计划，在 339 条歌词到歌曲与 316 条人声条件上取得内容享受 7.7086 与文本相似 0.4465 的最高均值，代价是自回归序列翻倍与符号级服从仍未被测量。"
paper_digest_authors: [{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Chengli Feng"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Zhiyue Wu"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Jiahao Song"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Zheqi Dai"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Boyang Wang"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Ruibin Yuan"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Junming Gong"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Wenxiao Zhao"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Jing Guo"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Gang Yu"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Xiangyu Zhang"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Xuerui Yang"},{"affiliations":["StepFun ACE The Chinese University of Hong Kong University of California San Diego"],"name":"Chao Yan"}]
paper_digest_abstract_sha256: "d281203930ab9ac5dbccb9234b5a5230d77bf0009ece48bd8daa7459a5085828"
paper_digest_sidecars: {"citation.bib":{"sha256":"2348bde47848217380e18ea29f2a012fd666a0d22051b278cb64a0816b9e193c","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-16034/citation.bib"},"citation.json":{"sha256":"3a93ff0ceb4f4b420714f7bf966e2ebf8accb00e0eb6ed20dd8a7771b8510fd1","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-16034/citation.json"},"citation.ris":{"sha256":"0fc5016739f0c75ff4a767140729f4fb899ecbd60996932428bbfd5a0dc120c6","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-16034/citation.ris"},"rethink-context.json":{"sha256":"174ea56c6f43090fcf552a07bc7e52be291a8d75956df407d74fb6755ddf1f02","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-16034/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "04fb955d70146fb03b8d1e81b2c93165dfe578403ace8fb6dd080b80b54fb75e"
paper_digest_api_reader_plan_sha256: "40470c0c6e58466953b65bd2ce4fc06c138574f6209a182341ae3fb9a5f501d1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "07b8a11180617d8c7d49d5ed3a81579425a6eb712b7ddbc2135f7358dc4c91c3"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "5cef78b18db9d3fe5456bb3e6e216b6f54c24795b65823578692797c275ca56f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "12601d00e1408114df544bbeb6fe4ca6384c72d544b7c2fa050ac5c1d32487e4"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ed4cc3481f00a3f6f721d7d8125a36bc858ac2b043a44ad9475e0e95d83d5ccd"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 先规划后演奏：StepAudio 3 Music 用单码本与 ABC 计划平衡长曲连贯与音质

> 英文题目：*[StepAudio 3 Music Technical Report](https://arxiv.org/abs/2609.16034v1)*

> 标签：#音乐生成 | #自回归模型 | #流匹配 | #混合专家模型 | #音乐
>
> 评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Chengli Feng：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Zhiyue Wu：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Jiahao Song：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Zheqi Dai：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Boyang Wang：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Ruibin Yuan：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Junming Gong：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Wenxiao Zhao：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Jing Guo：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Gang Yu：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Xiangyu Zhang：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Xuerui Yang：StepFun ACE The Chinese University of Hong Kong University of California San Diego
- Chao Yan：StepFun ACE The Chinese University of Hong Kong University of California San Diego

## 📌 核心摘要

StepAudio 3 Music处理开放域文本提示与歌词到最长5分30秒完整歌曲的生成，需同时兼顾长程曲式连贯与高保真人声伴奏合成。系统先由混合专家自回归模型输出可读的ABC编排计划，将和弦速度节拍调性小节与旋律组织为显式上下文，再以该计划为条件预测50赫兹65536表项单码本离散音乐序列。随后流匹配扩散变换器将该离散序列映射为连续变分自编码器隐变量并解码为48千赫兹波形，编解码器固定而语言模型专注序列组织。与直接以声学重建最优为目标的表示不同，该链条把音乐组织与声学渲染解耦，使语言模型获得更密集可预测的监督并保留长序列结构能力。在339条歌词到歌曲条件的评测设置下，StepAudio 3 Music的内容欣赏度Content Enjoyment得分为7.7086，高于Suno V5.5的内容欣赏度Content Enjoyment得分7.5646。该结论仅适用于带词人声生成的整体听感与文本对齐，不保证音符级符号依从，也不覆盖纯器乐、翻唱与干声混音任务的横向比较。其适用边界受限于整体听感与文本对齐评测，音符级依从与长尾场景尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://stepaudiollm.github.io/step-audio-3-music> → <https://stepaudiollm.github.io/step-audio-3-music/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决的长曲难题是什么？

本文输入是歌词、开放域文本提示与可选任务参考，目标是生成最长 5 分 30 秒的完整歌曲或器乐，包括歌词到歌曲、伴奏生成与翻唱合成。输出是 48 千赫波形音频，演示页当前可用，链接为官方演示地址。必须保留的关键信息是离散连续 2 阶段分工、50 赫兹单码本规模、ABC 显式计划的定位与评测子集口径。初学者容易把音乐生成理解为把文本丢给模型直接出波形，本文要解决的是长时结构与声学细节在不同时间尺度上的协调。

长程决策涉及旋律发展、段落过渡与词曲关系，短程实现涉及音色、人声质感与瞬态。如果只用单一连续扩散模型，容易在声学上逼真但在段落与和声上松散；如果只用语言模型预测波形，则难以维持高采样率细节。论文因此把表示、序列组织与声学渲染分开，并引入可读的符号计划作为检查与修改接口。后续先沿一个样本走完输入到输出，再展开各组件的计算与训练。

### 同输入同目标的路线如何分工？

在同为完整歌曲生成的路线中，稳定音频的长时隐扩散把结构建模与声学建模放在连续隐空间，扩散变换器提供长上下文；种子音乐类框架把自回归与扩散放在统一流程，分别负责序列组织与高保真渲染；灵感音乐类路线用自回归预测单码本音频令牌再用流匹配补充高采样率细节。本文属于语言模型加连续渲染器的分工，但差异在于离散瓶颈的选择依据与显式计划的形态。

音乐思维链路线提供了中间思考的先例，昆仑的量化表示序列可分析配器，旋律思维链先规划人声旋律轮廓再生成全曲，语言模型生成元数据歌词与标题引导合成。本文的 ABC 计划与之同目标但监督与运行阶段不同，它在推理时先生成包含和弦速度拍号调性小节与旋律的记谱，再作为音乐令牌的前缀条件，同时训练音乐到 ABC 与 ABC 到音乐 2 个方向以连接符号与音频。

可控生成路线中，联合条件模型用和弦旋律鼓点作局部时间条件，指令编辑模型用多尺度特征与和弦保持一致。本文不把和弦旋律只当外部输入，而是让模型自己产生一份可检查的编曲，再接受文本大模型的改写。这种差异决定了比较时不能把类别标签当同条件胜负，符号计划的质量与音频质量是两个待分别测量的目标。

### 为什么重建最好不等于生成最好？

论文提出一个生成朝向的权衡例子来说明问题。假设两段音乐在语义上相似但在音色与频谱细节上有多种合理实现，若编码器为重建保留全部局部细节，语言模型的条件不确定性会上升，预测下一个令牌更难；若过度压缩为语义表示，语言建模变简单但渲染器缺少声学依据。举例说，同一句副歌可以用不同混响与配器实现，细节保留越多，令牌序列的分支越多。

问题因此不是单纯降低重建误差，而是找到既保留音乐结构又保留可重建信息的离散瓶颈，并验证下游渲染器是否已触及该瓶颈的信息上限。论文先固定离散表示，考察更大容量变分自编码器隐空间或更大扩散变换器能否提升端到端质量，若不能，则把设计重点上移到分词器。这一诊断顺序决定了后文先讲渲染器消融再讲瓶颈比较的学习依赖，初学者复述时应先说诊断逻辑，再说具体结构选择。

### 一个样本如何走完输入到输出？

以一首带歌词的雷鬼民谣请求为例，输入包括标题式文本提示、带段落标记的歌词与可选干声或参考曲。第一步把歌词、提示与参考序列化为混合专家自回归模型的上下文，词汇包含文本与音乐两类。第二步若启用显式规划，模型先产生 ABC 编曲计划，写出速度拍号调性、和弦进行、小节数与旋律序列，完成后把该计划追加到上下文。第二步的另一遍在同一主干上自回归预测 50 赫兹音乐令牌，每帧一个，码本共 65536 项。

第 3 步把令牌序列送入独立训练的渲染器，流匹配扩散变换器逐帧对齐生成 50 赫兹连续隐变量，再经冻结的变分自编码器解码器得到 48 千赫波形。长曲按 30 秒分块渲染，首块用全零两秒隐变量上下文，后续块用前一块末尾 2 秒生成隐变量传递局部声学状态。整个链条中编解码器在语言模型训练时保持固定，使序列预测与声学实现各自专门化。下图展示了该主路径与各分支的汇合位置，读图时先看主干再看条件分支。

### 系统总览图导读与结构确认

下图为系统总览，教学价值在于 1 次性看清条件、规划、令牌与渲染的先后关系。阅读时不要把底部 3 个条件框当成并行输出，它们都是进入顶部自回归主干的前缀。重点是中间序列带上第一遍与第二遍的标注，以及右侧渲染器三框的采样率变化。图中示例文本提示与歌词摘录只是占位说明，不代表评测所用提示。

> **看图路径：** 1. 沿底部从文本条件与可选参考经 ABC-CoT 第一遍到音乐令牌第二遍再到渲染器追踪主路径；2. 对照左侧图例区分文本令牌、ABC 令牌、音频令牌与音乐令牌的颜色与位置；3. 观察稀疏混合专家中路由指向多个专家再求和的结构；4. 确认渲染器分支标注的 50 赫兹隐变量与 48 千赫音频的采样率变化

[![原论文 Figure 2：Overview of StepAudio 3 Music.](https://arxiv.org/html/2609.16034v1/figures/fig2-architecture.png)](https://arxiv.org/html/2609.16034v1/figures/fig2-architecture.png)

*论文图 2。原论文 Figure 2:：“Overview of StepAudio 3 Music. Lyrics, a text prompt, and optional task-specific references are serialized for a trainable Mixture-of-Experts autoregressive model.”。*

该图显示顶部为稀疏混合专家语言模型主干，路由指向多个专家再求和。底部序列从起始符经标题、歌词、可选人声语音音乐条件，进入 ABC 第一遍再进入 50 赫兹第二遍音乐令牌。左侧文本条件框给出风格示例，中间分词器框说明人声语音音乐如何变为令牌，中间偏右计划框给出 ABC 记谱片段，右侧渲染器依次为流匹配扩散变换器、50 赫兹隐变量与解码器，最终指向 48 千赫音频。这一布局支持了离散连续分工的叙述，即自回归管组织，渲染器管声学，计划作为可追加的上下文存在。

### 离散瓶颈三种设计如何比较？

3 种候选在 25 赫兹公共帧率下比较，以隔离瓶颈结构的影响。单码本向量量化每帧一个语义令牌，经上层编码器接受语音识别、梅尔重建与色度重建监督。语义残差量化在同一语义监督空间内把残差量化为多流并求和后再送上层，声学残差量化先冻结语义分词器再用独立声学编码器提取特征，量化声学特征与对齐语义特征之差。

比较时每个分词器冻结后各配一个独立训练的扩散去分词器，用真值令牌重建衡量可恢复信息，用快速语言模型预测准确率与预测令牌重建衡量可预测性与端到端质量。结果报告为定性加机制解释：两种残差量化用真值重建明显更好，但声学残差因未做预聚类而难预测，内部专家听感认为保真度与音乐性均差；语义残差可预测且保真好但音乐性弱，归因于多流误差累积；单码本仅小幅损失保真但保持音乐性。

下图并排展示了三者的编码量化与监督位置，学习时应先看瓶颈在哪里切分，再看监督加在聚合之后还是残差之前。

**单码本向量量化 × 残差向量量化：** 单码本向量量化每帧只产生一个语义令牌，预测目标单一且误差传播路径最短，分工是让语言模型稳定学习旋律节奏和声；残差向量量化用多层码本逐层量化残差，分工是保留更多声学细节提升重建上限；二者搭配比较的理由是重建最好不等于生成最好，组合意义是论文在 25 赫兹同条件下验证多码本重建占优但生成音乐性下降，从而选择单码本作为生成朝向的瓶颈。

> **看图路径：** 1. 对比面板一单流与面板二多流在瓶颈处的令牌数量与聚合求和符号；2. 查看面板三冻结语义路径与声学编码器经减法进入声学残差量化的双路结构；3. 确认三面板顶部是否共享连字符连接的语言与声学监督头

[![原论文 Figure 3：Discrete bottleneck designs considered for the music tokenizer.](https://arxiv.org/html/2609.16034v1/figures/fig3-tokenizer-comparison.png)](https://arxiv.org/html/2609.16034v1/figures/fig3-tokenizer-comparison.png)

*论文图 3。原论文 Figure 3:：“Discrete bottleneck designs considered for the music tokenizer.”。*

结合像素可见，左面板为单流经向量量化直达上层编码器，中面板为多流求和后进入同一上层并共享监督，右面板为冻结语义路径在上、声学编码器在下，经减法进入声学残差量化再与语义嵌入相加送解码器。颜色上青色为语义、绿色为声学、蓝色为声学残差，图注明确去分词器为比较用而省略绘制。这一结构解释了为何码本数量与容量本身不能决定自回归难度，语义监督相对残差量化的位置同样关键。

### 符号计划与令牌序列的概率如何分解？

设条件为歌词文本提示与可选参考，计划为 ABC 序列，音乐令牌为长度序列。模型采用两遍分解，先由条件产生计划，再以条件加计划加历史预测当前令牌，两遍共用同一自回归主干，渲染器随后实现声学。符号定义是理解训练任务的前提，文本到歌词生成对应由条件产生计划，音乐到 ABC 对应理解音频与符号结构，ABC 到音乐对应在显式记谱条件下的声学实现。需要强调的是，当前评测的标题相似度衡量的是文本提示对齐，不是逐音符逐和弦逐小节的服从度，二者不可混用。

\[p_{\theta}(a,m_{1:T}\mid c)=p_{\theta}(a\mid c)\prod_{t=1}^{T}p_{\theta}(m_{t}\mid c,a,m_{\lt t}).\]

语义残差量化的聚合方式是把各码本嵌入求和后再送上层，这一求和正是误差累积的来源，前层预测误差会在聚合时合并并影响后续预测。

\[\mathbf{z}_{\mathrm{RVQ}}=\sum_{i=1}^{N}e_{i}(q_{i}).\]

最终分词器每帧 16 比特，50 帧每秒对应标称 800 比特每秒，未计熵编码与边信息，该数值说明单流在序列长度翻倍下仍保持紧凑码率。

\[50~\mathrm{frames/s}\times 16~\mathrm{bits/frame}=800~\mathrm{bit/s},\]

**StepAudio Music Tokenizer × 流匹配扩散渲染器：** StepAudio Music Tokenizer 负责把 24 千赫音频变为 50 赫兹离散音乐令牌，保留音乐结构与可重建信息；流匹配扩散渲染器负责以扩散变换器由令牌生成连续变分自编码器隐变量再解码为 48 千赫波形，补充音色细节；搭配理由是长序列组织与高保真声学需要不同归纳偏置，组合意义是自回归只管音乐组织，连续渲染只管声学实现，编解码器固定后 2 阶段各自专门化。

**ABC-CoT × 音乐令牌：** ABC-CoT 是用 ABC 记谱表达的速度拍号调性、和弦、小节与旋律的中间编曲计划，分工是提供可读可改的时间结构化上下文；音乐令牌是 50 赫兹单码本离散序列，分工是承载可被渲染的完整演奏内容；搭配理由是全局文本提示难以指定乐句走向与和弦变化，组合意义是同一自回归主干先产生计划再以计划为条件预测令牌，使和声节奏旋律进入生成上下文。

**变分自编码器隐变量 × 扩散变换器：** 变分自编码器隐变量是 50 赫兹 64 通道的连续声学表示，分工是作为可解码为波形的渲染目标空间；扩散变换器是以流匹配方式由音乐令牌映射到该连续空间的条件生成器，分工是学习令牌到隐变量的映射并保持块间连续；搭配理由是直接预测波形采样困难而预测连续隐变量更稳定，组合意义是令牌序列逐帧对齐拼接后输入变换器，再由冻结解码器得到长时音频。

连续渲染侧以令牌为全程唯一完整条件，2 秒隐变量上下文只提供局部连续性，条件中缺失的内容不能靠增大渲染器可靠恢复。论文固定分词器并用真值令牌排除自回归误差，比较 25 赫兹与 50 赫兹隐表示以及 0.9B 到 8B 扩散变换器，结果是 50 赫兹直接重建更好，但在固定 50 赫兹下放大变换器没有一致增益，0.9B 在多项失真与感知指标上最好，4B 仅在信干比上最好。这支持离散表示构成有效上限的判断，设计重点因此转向分词器。最终采用 50 赫兹 65536 项单码本，25 赫兹与 50 赫兹消融显示保真无明显差异但 50 赫兹音乐性更好，假设是同样音乐下训练目标翻倍，在数据稀缺时增加了监督密度。

### 分词器三阶段如何引入监督与离散化？

分词器结构为梅尔前端加 24 层双向卷积增强器，前端把 24 千赫音频变为 100 赫兹梅尔再下采样到 50 赫兹，隐维度 1024，约 0.6B 参数，单码本瓶颈插在第 12 与 13 层之间，下层输出投影到 32 维量化再投影回隐维度送上层。3 阶段优化逐段初始化，第一阶段用自监督在波形域把连续片段替换为高斯噪声再提梅尔，目标分支用冻结随机投影量化干净梅尔，只在对齐到 50 赫兹的污染位置计算损失。

第二阶段引入整曲多任务监督，语音识别头用归一化歌词提供语言与人声监督，梅尔重建保留音色能量瞬态与局部谱结构，色度重建保留音高类别调性与和声组织。第 3 阶段插入离散瓶颈并沿用相同多任务头加向量量化目标，联合损失加权四项。下图展示了 3 阶段从掩码预训练到多任务再到离散化的演进，复现时应严格保持阶段间检查点初始化与冻结时机。

> **看图路径：** 1. 按第一阶段到第三阶段顺序查看双向卷积增强器层数从 24 层到上下各 12 层的切分；2. 核对第一阶段波形加噪分支与干净梅尔分支经冻结随机量化器的对齐掩码位置；3. 确认第三阶段单码本容量标注与 50 赫兹离散令牌流输出

[![原论文 Figure 5：Three-stage training pipeline for the StepAudio Music Tokenizer.](https://arxiv.org/html/2609.16034v1/figures/fig5-tokenizer-training.png)](https://arxiv.org/html/2609.16034v1/figures/fig5-tokenizer-training.png)

*论文图 5。原论文 Figure 5:：“Three-stage training pipeline for the StepAudio Music Tokenizer.”。*

从像素看，第一阶段左侧显示波形块替换加噪与掩码对齐到 50 赫兹的虚线，中间为双向堆叠与线性头，右侧为干净梅尔经冻结量化器作目标；第二阶段为统一双向堆叠分出 3 个头；第 3 阶段明确切分为上下各 12 层，中间标注令牌率与单向量量化码本容量并输出 50 赫兹离散流。联合目标的四项加权形式如下，符号分别对应歌词识别、梅尔重建、色度重建与量化约束，原文未报告具体权重取值，复现时这是明确缺项，不应由模型名推定。

\[\mathcal{L}_{\mathrm{tokenizer}}=\lambda_{\mathrm{CTC}}\mathcal{L}_{\mathrm{CTC}}+\lambda_{\mathrm{Mel}}\mathcal{L}_{\mathrm{Mel}}+\lambda_{\mathrm{Chroma}}\mathcal{L}_{\mathrm{Chroma}}+\lambda_{\mathrm{VQ}}\mathcal{L}_{\mathrm{VQ}},\]

扩散训练在分词器冻结后进行，离散条件与 50 赫兹隐变量逐帧对齐拼接输入，每个样本含 2 秒隐变量上下文加 30 秒目标段，曲首用全零上下文，其余用前 2 秒真值隐变量，推理时用生成隐变量替代。变分自编码器解码器全程冻结，之后分词器与渲染器在语言模型预训练与后训练中保持固定。

### 语言模型课程与偏好对齐如何组织？

语言模型从混合专家文本模型初始化，课程分 3 段。预训练语料超 1 亿首、超 5,000,000 小时音频、约 1 万亿令牌，覆盖器乐与全曲生成、歌词识别、音乐理解、翻唱与人声到混音，并另建音乐到 ABC 与 ABC 到音乐的大规模 ABC 语料。阶段令牌数为消耗量而非互斥集合，第 3 阶段会回放高质量材料。监督微调语料约 20B 令牌，包含直接生成与带 ABC 计划生成，通用样本按流派分组并用音乐性分数组内排序以兼顾多样性。偏好数据由约 500 提示各建 4 个标题歌词实例各采样 4 候选，经标注专家按音乐性旋律和声一致条件服从演唱与感知质量排序，每组取差距最大的 1 对构成约 2000 偏好对，直接偏好优化在匹配条件下学习偏好。

**监督微调 × 直接偏好优化：** 监督微调负责在约 20B 令牌上强化歌词到音乐、器乐、翻唱与干声到混音等任务执行，分工是教会任务格式与高质量分布；直接偏好优化负责在约 2000 对专家配对偏好下对齐听感，分工是在相同条件下提高被偏好输出的相对概率；搭配理由是自动指标难以表达音乐性与条件服从的细微差别，组合意义是先用示范稳定任务能力，再用偏好提升整体听感与对齐。

下表整理 3 段预训练的消耗量、上下文、批量与学习率，阅读时注意阶段三包含回放，上下文从 16384 扩展到 32768，学习率由常数转为余弦衰减再到退火。表中第二阶段混合比例约为标准生成 32%、ABC 生成 16%、理解 20% 与剩余 32%，ABC 计划包含和弦速度拍号小节数调性与序列。

| 阶段 | 消耗令牌 | 上下文长度 | 全局批量 | 学习率安排 |
| --- | --- | --- | --- | --- |
| 大规模预训练 | 600B | 16,384 | 768 | 2.45×10−5 常数 |
| 多任务中期预训练 | 500B | 32,768 | 512 | 2.45×10−5 到 2.0×10−5 余弦 |
| 高质量退火 | 80B | 32,768 | 512 | 预热到 2.0×10−5 再余弦到 2.0×10−6 |

上表显示退火阶段总量最小但质量最高，检查点在消耗 20B、40B、60B、80B 后保存并在核心验证集与通用回归上评估，以核心任务表现为准选择终点。下表整理监督微调子集的条件格式，合计约 20B，带计划子集保留记谱作音乐令牌上下文。

| 子集 | 令牌量 | 主要条件 |
| --- | --- | --- |
| 歌词到音乐 | 6B | 歌词与文本提示 |
| 器乐生成 | 2B | 文本提示 |
| 带计划歌词到音乐 | 4B | 歌词提示与编曲计划 |
| 带计划器乐生成 | 2B | 提示与编曲计划 |
| 翻唱生成 | 4B | 参考歌曲 |
| 干声到混音 | 2B | 干声轨道 |

两表共同说明课程先建词曲对齐，再教双向符号连接与参考条件，最后聚焦歌曲翻唱与混音 3 核心任务。监督微调批量 256，学习率从 2×10−5 余弦到 2×10−6。直接偏好优化直接作用于微调检查点，离线配对共享相同生成条件，因此学到的是同条件下的相对偏好，而非无条件质量提升。

### 数据如何清洗，评测条件如何对齐？

数据管线分 3 步，先做频带分析估计有效带宽以剔除低带宽与疑似人工上采样，再用事件检测做语音歌唱音乐多标签过滤非音乐，随后用分离模型得到人声与伴奏，人声经语言识别分流到中文英文识别器与其他语言识别器，保留文本时间戳与置信度，最后用歌曲结构模型划分前奏主歌副歌桥段尾奏并按时间重叠把歌词段落归入段落，输出含语言、带时间歌词、段落标签边界、带宽与置信度的结构化记录。

不同阶段可用任务相关阈值过滤或打质量标签，避免过早丢弃多样性。评测侧主客观分离，客观用歌词到歌曲轨道 360 条件中七系统均有效的 339 公共子集测感知质量与标题相似，用混合提示轨道中 316 人声条件公共子集测音乐质量，器乐因演唱维度未定义而省略。每系统同条件各生成一个完整样本，推理缺失在组公共子集前剔除，评测本身无失败空记录。基线经公开产品接口在同一窗口采集，不假设服务端配置可本地复现，均用默认设置无针对性提示调优。

主比较中本模型为微调加偏好后检查点，采样温度 0.9，阈值参数 0.95。指标方向为内容享受、内容有用、制作质量与标题相似越高越好，制作复杂度为描述性，越高只表示场景更复杂。文本输入用英文提示字段，原提示仅作回退，从不用改写后提示打分。比较只在指标内跨系统进行，不跨指标族或轨道比较。

### 主客观结果支持什么，不支持什么？

下图为相对性能雷达，分数为除以每指标观测最优的相对值而非理论满分，径向截断到 0.60 到 1.00，面积不是总分，曲线为视觉近似，精确值以主表为准。读图时必须在同一轴内比较系统，不把左侧音乐质量轴的起伏直接推广到右侧感知轴。

> **看图路径：** 1. 先读外圈三类评测族弧段与径向 0.60 到 1.00 截断说明再看紫色多边形；2. 逐轴比较同一指标下紫色点与其他虚线系统点的相对高低而非跨轴比较；3. 注意生产复杂度轴为描述性指标不代表质量高低

[![原论文 Figure 1：Relative performance across MuQ-MuLan, AudioBox-Aesthetics, and SongBench.](https://arxiv.org/html/2609.16034v1/figures/fig1-objective-radar.png)](https://arxiv.org/html/2609.16034v1/figures/fig1-objective-radar.png)

*论文图 1。原论文 Figure 1:：“Relative performance across MuQ-MuLan, AudioBox-Aesthetics, and SongBench.”。*

像素显示紫色实线代表本模型，在顶部标题相似与右上内容享受有用质量轴上处于最外圈，在左侧混合器乐与底部编曲轴上略内收，绿色点划线代表的系统在编曲音乐性上更外扩，粉色系统整体偏内。这种分化与主表一致，支持音乐组织与声学渲染是相关但分离的目标。下表为主客观数字结果，包含必要基线与实际可运行的本方法终点，基线为 4 个商用系统经产品接口的输出。

| 指标，子集与量程 | StepAudio 3 Music | Suno V5.5 | Suno V5 | Mureka V9 | MiniMax Music 3 |
| --- | --- | --- | --- | --- | --- |
| 标题相似，339 条，相似度 | 0.4465 | 0.4437 | 0.4287 | 0.3752 | 0.3703 |
| 内容享受，339 条，1 到 10 分 | 7.7086 | 7.5646 | 7.6823 | 7.4363 | 7.5654 |
| 内容有用，339 条，1 到 10 分 | 8.0052 | 7.9584 | 7.8745 | 7.6692 | 7.8677 |
| 制作质量，339 条，1 到 10 分 | 8.3868 | 8.2988 | 8.2975 | 8.0086 | 8.2976 |
| 旋律，316 条，1 到 10 分 | 6.5394 | 6.4980 | 6.6215 | 6.8121 | 6.4577 |
| 编曲，316 条，1 到 10 分 | 6.9122 | 6.8527 | 6.8585 | 7.1490 | 6.6356 |
| 音乐性，316 条，1 到 10 分 | 5.7465 | 5.5886 | 5.6966 | 5.9382 | 5.5558 |

上表显示本模型在标题相似与 3 个感知质量轴上最高，但在音乐质量 7 维上并非全面领先，多维由另一系统领先。这支持感知质量与标题对齐较强，但不支持在所有音乐学维度占优的结论。主观侧第三方盲听擂台采用成对比较拟合质量分并归一化到类埃洛范围，赛前对音轨做响度归一化与元数据剥离，内部集用固定歌词标题而擂台由系统自写歌词，因此两者互补而非直接复刻。

报告的初步快照为质量分 1105，排所示系统第四，仅次于两高分系统而领先多个同类系统，且未经擂台提示适配。重提该名次时需附加新条件，即样本量与置信区间在快照中较小，内部客观集每条件仅 1 次生成而不衡量采样种子方差，保留原始公共子集保证同条件但排除了任一系统失效的条件。

### 渲染器、偏好与计划各带来多少增益？

消融分 3 层，先看声学渲染，再看偏好优化，最后看推理时规划。渲染器消融固定分词器并用真值令牌，直接重建与条件渲染分两组报告，50 赫兹隐表示直接重建优于 25 赫兹，但条件渲染下 0.9B、4B、8B 扩散变换器无一致增益，0.9B 在多项失真与感知指标最好，4B 仅信干比最好，因此选 0.9B 并转向分词器。偏好优化比较微调与加偏好终点，5 个报告指标全部提升。下表为该对照，策略均为实际可运行的检查点，无搜索最优或事后最优替代。

| 配置 | 音乐性 | 7 维均值 | 内容享受 | 制作质量 | 标题相似 |
| --- | --- | --- | --- | --- | --- |
| 微调 | 5.6395 | 6.5445 | 7.6259 | 8.2700 | 0.4157 |
| 微调加偏好终点 | 5.7465 | 6.6438 | 7.7086 | 8.3868 | 0.4465 |

上表显示音乐性提升约 0.1070，7 维均值提升 0.0993，内容享受与制作质量分别提升约 0.0827 与 0.1168，标题相似从 0.4157 到 0.4465。这支持偏好对齐在音乐质量、感知质量与标题对齐上均有增益，但自动指标用于过滤与评估，专家排序才是对齐信号，第三方擂台因提示输出与投票者不同而不能直接验证该消融。推理时规划比较直接生成、ABC 计划与大模型改写后计划，均用偏好后模型，改写轮仅精炼节奏和声与配器再作前缀。下表为 7 维得分，改写后在混音编曲旋律上绝对增益最大。

| 推理模式 | 旋律 | 编曲 | 人声 | 器乐 | 混音 | 结构 | 音乐性 | 均值 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 直接生成 | 6.5394 | 6.9122 | 7.0172 | 7.0086 | 6.7284 | 6.5544 | 5.7465 | 6.6438 |
| ABC 计划 | 6.6054 | 6.9320 | 7.0256 | 7.0122 | 6.7698 | 6.5868 | 5.7676 | 6.6713 |
| 计划加改写 | 6.6454 | 7.0211 | 7.0282 | 7.0396 | 6.8483 | 6.6411 | 5.8300 | 6.7220 |

上表显示单用计划均值从 6.6438 到 6.6713，增量 0.0275 且器乐人声增益较小，改写后再到 6.7220，额外 0.0506，对直接总增 0.0781。论文解释为自生计划的乐理知识有限，改写引入了外部知识，但这属于有限解释而非因果证明，定性听感一致也不构成独立受控听音研究。未胜出项必须指出，即单用计划的提升 modest，且音乐质量评估曾用于微调数据过滤而不完全独立，器乐翻唱与混音能力也需任务专用评估，符号级服从仍待验证。

### 边界与未验证的推测有哪些？

论文明确列出多项边界。音乐质量分数曾用于微调数据选择，评估不完全独立。偏好训练用专家成对偏好，自动指标仅用于过滤与评估。第三方盲听提供外部证据，但提示输出与投票者不同，不能直接验证消融。主客观比较每条件 1 次生成，不衡量跨种子方差。

保留原始公共子集保证同条件，但排除了任一系统失效的条件。基线经托管服务评估，完整服务端配置不可本地复现。报告子集主要覆盖人声与歌词条件，不能单独确立器乐翻唱与混音的相对性能，这些能力需任务专用评估。标题相似与整体音乐质量不能确立对单个音符和弦小节的服从，规划改写比较的是完整工作流，分离各部件贡献需受控比较，乐理知识的作用是结果解释，定性听感不是受控听音研究。

缺失证据不是技术错误，例如训练资源推理开销输出帧率与实际延迟需分别讨论，总体趋势不等于每组每步成立，未测量误判率延迟成本时不应承诺改善。复述时应使用报告显示、支持、可能待验证 3 级措辞，避免把相关性写成因果。

### 复现先做什么，需要补哪项验证？

复现应按依赖顺序先固定表示再训序列。第一步复现分词器 3 个阶段，注意波形加噪位置、50 赫兹对齐掩码、整曲多任务头与 12 层间单码本插入，以及阶段间检查点初始化，联合损失权重原文未给，需记录为缺项并做敏感性扫描。第二步冻结分词器训练流匹配渲染器，复现 2 秒上下文加 30 秒目标的采样，曲首全零上下文，推理时用生成隐变量替代并按 30 秒分块。

第 3 步按 600B、500B、80B 消耗量推进语言模型课程，注意阶段三回放与退火检查点选择以核心验证为准，监督微调注意流派分组排序，偏好优化需在同条件下构造配对。解码复现保留温度 0.9 与阈值参数 0.95，评测保留 339 与 316 公共子集口径与英文提示字段规则。值得尝试的时机是需要长曲连贯加可检查编曲时，显式计划提供可读接口；若只需短片段音质，可先验证渲染器是否已触及瓶颈。

还需补的验证包括符号级服从的音符和弦小节对齐测量、跨种子方差、多任务专用评估与延迟成本测量。资源状态方面，演示页本次可达可用，权重与代码是否公开需以原文声明为准，不从模型名推定可运行。

### 何时值得尝试，如何一句话记住？

当任务要求开放域文本控制完整歌曲并希望在合成前检查和弦节奏与曲式时，该路线值得尝试。记住的顺序是文本与歌词先变为可读计划，计划再变为单流令牌，令牌再变为连续隐变量与波形，每一步的监督与冻结位置都已在正文中交代。强证据是感知质量三轴与标题相似的最高均值与偏好后的一致提升，代价是序列翻倍、计划质量依赖外部改写与符号服从未被测量。

教学上容易误解的是把雷达面积当总分、把制作复杂度当质量、把标题相似当音符服从，正确做法是只在指标内比较系统，并把音乐组织与声学渲染当分离目标。未来工作指向复杂编曲、超长依赖、人声自然度与高频重建，以及在加强分词器与隐渲染的同时提升对符号计划的服从。初学者复述完毕后，应能不看原文说出输入表示组件目标输出的完整链条与 3 组数字的适用条件。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.16034v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-16/)
