---
title: "COT-TTS: Audio Context-Aware Text-to-Speech with Chain-of-Thought Reasoning"
date: 2026-09-22
draft: false
tags: [文本到语音, 自回归模型, 数据集, 基准测试, 多语言]
categories: [论文速递]
description: "COT-TTS 研究给定历史对话音频、固定目标文本和参考音色时如何先显式推理说话方式再合成语音，最强证据是 0.6B/1.7B 端到端模型在时长一致性和人评上接近 34-39B 级联基线，代价是可编辑推理大幅改动时会降低客观音质并引入推理与语音错位风险。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.22697"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "先想好怎么说，再开口说：COT-TTS 把对话历史变成可检查的说话计划"
paper_digest_original_title: "COT-TTS: Audio Context-Aware Text-to-Speech with Chain-of-Thought Reasoning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.22697v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.22697v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.22697v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"setting","id":"setting.multilingual","label":"多语言"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "COT-TTS 研究给定历史对话音频、固定目标文本和参考音色时如何先显式推理说话方式再合成语音，最强证据是 0.6B/1.7B 端到端模型在时长一致性和人评上接近 34-39B 级联基线，代价是可编辑推理大幅改动时会降低客观音质并引入推理与语音错位风险。"
paper_digest_authors: [{"affiliations":["The Hong Kong University of Science and Technology, Hong Kong SAR, China"],"name":"Weizhen Bian"},{"affiliations":["The Hong Kong University of Science and Technology, Hong Kong SAR, China"],"name":"Sitong Cheng"},{"affiliations":["JIUTIAN Research, China Mobile, Beijing, China","The State Key Laboratory of Multimedia Information Processing, Peking University, Beijing, China"],"name":"Rongxiu Zhong"},{"affiliations":["The Hong Kong University of Science and Technology, Hong Kong SAR, China"],"name":"Jiahao Pan"},{"affiliations":["Nanjing University"],"name":"Liumeng Xue"},{"affiliations":["The Hong Kong University of Science and Technology, Hong Kong SAR, China"],"name":"Boyi Kang"},{"affiliations":["JIUTIAN Research, China Mobile, Beijing, China","The State Key Laboratory of Multimedia Information Processing, Peking University, Beijing, China"],"name":"Shilei Zhang"},{"affiliations":["China Mobile (Hong Kong) Innovation Research Institute, Hong Kong SAR, China"],"name":"Jinglei Liu"},{"affiliations":["China Mobile (Hong Kong) Innovation Research Institute, Hong Kong SAR, China"],"name":"Yue Wang"},{"affiliations":["JIUTIAN Research, China Mobile, Beijing, China"],"name":"Junlan Feng"},{"affiliations":["The Hong Kong University of Science and Technology, Hong Kong SAR, China"],"name":"Bei Liu"},{"affiliations":["The Hong Kong University of Science and Technology, Hong Kong SAR, China"],"name":"Wei Xue"}]
paper_digest_abstract_sha256: "86c35c76854cb08e0dddc276028058f3555e4e7d124fa0878b7985cf5fd8f93f"
paper_digest_sidecars: {"citation.bib":{"sha256":"9e426ccecc9f5f681734f43b300706a90e8102187df45aa629290693eb276bb0","url":"/audio-paper-digest-blog/data/papers/2026-09-22/2609-22697/citation.bib"},"citation.json":{"sha256":"0be3f4ad2a69ec863d2c0008cbddc4dc86da1a370dfe323b7948c0d64b546a81","url":"/audio-paper-digest-blog/data/papers/2026-09-22/2609-22697/citation.json"},"citation.ris":{"sha256":"57236f73c36fe5148233a868824e31c5c39e1ae9345487e92910be5c64f8d888","url":"/audio-paper-digest-blog/data/papers/2026-09-22/2609-22697/citation.ris"},"rethink-context.json":{"sha256":"d376481dd13976c7ce0cf16d1b55a177fc6c69b0e73b41f34e3b8f1c93b160b2","url":"/audio-paper-digest-blog/data/papers/2026-09-22/2609-22697/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8df1d8d3da81a22ba98dcd25b27fc20963ffe631b736fba334d51117056e2e9e"
paper_digest_api_reader_plan_sha256: "4d32295692937ed764eea6ff094f84e7da18ba74cc7b4d6d5002f1c1d5a4ec45"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "32fd5a5751a8cbdfcf708298c726c890f7162ca25dd2c6122418d93060d468cf"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "c24670fc6ee717ea3558bd1255fb6100fb211a95985a56a98a6ec7b4f8b00ce7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "29b812c81ed1d4b674812bce3c54d31a6f6671dd4b36f2cb78abc4fe7eb967c8"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "665770c6a8c518b5826cf10d1baf64da6272b0ca6eceafac161d9982095fe1ec"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 先想好怎么说，再开口说：COT-TTS 把对话历史变成可检查的说话计划

> 英文题目：*[COT-TTS: Audio Context-Aware Text-to-Speech with Chain-of-Thought Reasoning](https://arxiv.org/abs/2609.22697v1)*

> 标签：#文本到语音 | #自回归模型 | #数据集 | #基准测试 | #多语言
>
> 评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Weizhen Bian：The Hong Kong University of Science and Technology, Hong Kong SAR, China
- Sitong Cheng：The Hong Kong University of Science and Technology, Hong Kong SAR, China
- Rongxiu Zhong：JIUTIAN Research, China Mobile, Beijing, China；The State Key Laboratory of Multimedia Information Processing, Peking University, Beijing, China
- Jiahao Pan：The Hong Kong University of Science and Technology, Hong Kong SAR, China
- Liumeng Xue：Nanjing University
- Boyi Kang：The Hong Kong University of Science and Technology, Hong Kong SAR, China
- Shilei Zhang：JIUTIAN Research, China Mobile, Beijing, China；The State Key Laboratory of Multimedia Information Processing, Peking University, Beijing, China
- Jinglei Liu：China Mobile (Hong Kong) Innovation Research Institute, Hong Kong SAR, China
- Yue Wang：China Mobile (Hong Kong) Innovation Research Institute, Hong Kong SAR, China
- Junlan Feng：JIUTIAN Research, China Mobile, Beijing, China
- Bei Liu：The Hong Kong University of Science and Technology, Hong Kong SAR, China
- Wei Xue：The Hong Kong University of Science and Technology, Hong Kong SAR, China

## 📌 核心摘要

上下文感知语音合成要求以历史对话音频、目标文本与参考语音为输入，输出与语境相称的目标语音及可解释推理，难点在于历史音频副语言线索易丢失且缺乏显式推理监督。该方法先对影视与广播剧长音频做说话人分离、场景切分与层级情感及五维推理标注，形成结构化训练样本。接着统一自回归模型以上述标注样本为输入，依次生成带情感历史转写与多维推理分析，再生成目标语音语义与全局标记，使转写与推理成为语音生成的显式条件。最后以参考语音全局标记结合预测语义标记重建波形，并支持对中间推理直接检查与编辑后重新合成。与先转写再由大语言模型写风格指令的级联方案不同，该方法直接在音频标记上联合学习理解推理与合成，保留韵律与情感强度线索并以更少参数实现端到端优化。在源不相交的800样本中英基准下，COT-TTS-0.6B的时长误差指标为1.155，低于级联基线three-dia-a3b-fish的时长误差指标5.866。该结论限于影视类表演性对话与短历史窗口，跨域自然对话与长时一致性尚未验证。原文未披露训练硬件与成本，推理仅说明单张NVIDIA H800批量为1。

## 🔗 开源与复现资源

- 演示资源：<https://luckybian.github.io/COT-TTS> → <https://luckybian.github.io/COT-TTS/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么、要输出什么、为什么不能只给文本就合成？

这篇论文面对的是刚接触语音合成的研究生，先把任务边界讲清楚。输入有三样：一段连续的历史对话音频，里面是多说话人的真实交互；一句已经写好的目标文本，模型不能改词，只能决定怎么说；一段参考语音，只用来指定目标说话人的音色。输出也有三样：带情绪标签的历史转写、多维度的说话方式推理、以及目标语音波形。必须保留的关键信息是历史音频里的副语言线索，包括情绪强度、节奏、停顿和非言语发声，还有目标文本的字词内容和参考音色的身份特征。

为什么不能只给文本就合成？因为在自然对话、影视配音和情感陪伴场景里，同一句话在道歉、安慰、反驳或陈述时应有不同的重音和情绪。传统做法是用户每次手写风格提示，例如大声一点、悲伤一点，这在长对话里不现实。论文要做的是从历史音频自动推断该怎么说，并且把推断过程写成可检查的文字，再去合成。这样做的好处是推理错了可以定位是理解错了历史，还是语音没实现好推理。

学习这篇论文需要先接受两个约束。第一，目标文本固定，所以内容对错容易用字错率检验，表达好坏则要和真实对话中的下一句比较情绪强度、时长和基频走势。第二，参考语音主要提供音色，论文用案例显示即使参考情绪与目标情绪差异很大，生成语音仍保持参考音色而情绪跟随上下文，这一点是后续理解模型设计的关键。

### 同输入同目标的已有路线差在哪里？

如果按相同输入、相同目标来对照，论文把已有工作分成 3 类。第一类是日常对话语音数据集，例如 DailyDialog 和 DailyTalk 及其扩展，它们有录音和情绪标注，但场景较简单、说话人多样性和上下文变化有限。第二类是叙事和情景对话数据，场景更丰富，但通常只给上下文标签或角色信息，很少解释上下文如何导致某种说话方式。第 3 类是显式风格控制 TTS，例如用自然语言提示或参考语音控制音色情绪，它们能灵活控制，但说话方式由用户指定而非从历史对话推断。

在运行阶段上，论文还对照了可拼接的级联方案：语音识别加语言模型加可控 TTS，或者音频大模型直接分析历史音频再控制下游 TTS，或者音频大模型先生成中间语音再做音色转换。论文指出级联转换可能丢失原始语音中的副语言信息，而且最终效果依赖下游 TTS 能否实现推断出的风格。与之接近的 JELLY、Chain-Talker 侧重情绪或共情，CapTalk 预测属性级链条但不解释为何合适，Harness 用结构化上下文而非直接推理历史音频。

**级联基线 × 端到端自回归模型：** 级联基线负责把语音转文字、LLM 推理风格、再调用可控 TTS 分 3 段完成，每段可用现成大模型，端到端自回归模型负责用同一个 Qwen3 主干依次生成历史转写、推理和语音令牌，二者搭配比较的原因是检验分段信息损失是否必要，组合对照的意义是论文显示小参数端到端模型能在时长一致性和人评上接近大级联系统。

初学者容易误以为类别相同就能直接比分数。论文的态度是只有输入都是历史音频加固定文本加参考语音、目标都是说好这句且音色可控时，才算同条件比较，否则只是路线差异说明。

### COT-TTS 把问题形式化成哪三步？

论文把任务定义为函数映射：历史音频、目标文本和参考语音进入模型，依次输出历史转写、推理分析和目标语音。历史转写是把历史音频转成带情绪证据的文字，推理分析解释目标句该怎么说，目标语音要保留文本内容、跟随参考音色，并与上下文和推理一致。数据中的监督是自然发生的下一句语音，而非人工设计的风格提示，这是与指令式 TTS 的本质区别。

推理部分在论文中固定为 5 个维度：语言行为分析判断交际功能，场景语义分析描述局部情境，认知与动机分析推断说话人状态，预期交际效果分析说明想达到的情绪或交际结果，情绪轨迹分析解释情绪如何从前文发展而来。此外还预测时长和情感表达强度两个显式说话属性，最后用因为某种原因、为了某种目标、说话人用什么情绪风格做什么动作并传递什么内容的句式做结构化总结。

论文明确不把说话人性格作为独立推理维度，理由是分离聚类在重叠语音和噪声下可能出错，难以跨场景聚合同一角色，而且性格无法仅从局部场景可靠推断。这个取舍说明推理只聚焦能从局部对话直接导出、且与目标语音可关联的信息。

### 一个样本如何走完输入到输出？

拿一个具体样本走一遍最有助于建立直觉。假设历史音频里父亲自责连累女儿，目标文本是女儿的回应，参考语音是女儿另一句较平静的录音。模型先把 3 路输入编码成统一令牌序列：目标文本经文本分词器变成文本令牌，历史音频和参考音频经语音编码器变成离散语音令牌，中间用新加的特殊符号分隔功能区。然后模型按固定顺序自回归生成：先写带情绪标签的历史转写，再写 5 维推理加时长强度和总结，最后生成目标语音的全局和语义令牌并送解码器重建波形。

这个顺序不是随意安排的。转写提供可核对的文字证据，推理把证据变成说话计划，语音令牌在推理之后生成以便受其约束。推理生成后可以暂停解码，由人检查或小幅修改后再继续生成语音，这就是可编辑思维链的含义。论文强调适合中等程度修订，大改会偏离训练分布。

下图从底部 3 路输入拼接、中间主干依次生成到右上双路波形重建，完整展示了端到端自回归链路，是理解令牌流向的关键总览。

> **看图路径：** 1. 先沿底部目标文本、历史音频、参考音频三路输入看到统一序列拼接；2. 再看中部 Qwen3 主干向上依次生成转写、推理、语音令牌的顺序；3. 最后看右上预测全局与语义令牌如何与参考全局令牌组合进解码器

[![原论文 Fig. 4：Overview of the end-to-end CoT-guided autoregressive model.](https://arxiv.org/html/2609.22697v1/model-new.png)](https://arxiv.org/html/2609.22697v1/model-new.png)

*论文图 4。原论文 Fig. 4:：“Overview of the end-to-end CoT-guided autoregressive model.”。*

该总览中底部目标文本、历史音频、参考音频先汇成统一序列，中部 Qwen3 主干向上依次生成转写、推理、语音令牌，右上预测全局与语义令牌分别与参考全局令牌组合进解码器，中间推理可检查编辑后再合成。

\[(\hat{\mathcal{T}},\hat{\mathcal{C}},\hat{x}^{a})=f_{\theta}(H^{a},y,r^{a}).\]

上式中符号含义是论文原定的：左边三项分别是预测的历史转写、推理分析和目标语音，右边函数输入是历史音频、目标文本和参考语音，参数为模型权重。它刻画的是原始任务目标，而不是某个近似损失。后续所有编码和训练都是为了实现这个映射。

### 语音怎样变成令牌？历史和参考各保留什么？

论文用 Qwen3 的 0.6B 和 1.7B 主干，文本和推理沿用文本分词器，语音则用 Spark-TTS 的 BiCodec 离散表示。连续特征不适合大模型的下一个词预测范式，多码本编码又需要多路并行流增加复杂度，所以选择固定长度全局块加单路时变语义序列的方案。每个语音片段产生 32 个全局令牌和一串语义令牌，前者偏向说话人等整体信息，后者偏向语言内容。

**音频上下文感知 × 思维链推理：** 音频上下文感知负责从历史多说话人对话音频中提取情景、情绪走向和交际意图等证据，思维链推理负责把这些证据组织成语言行为、场景语义、认知动机、预期效果和情绪轨迹 5 维文字计划，二者搭配的原因是直接从音频跳到波形不可解释且难控，组合后新增的作用是生成一段可检查、可小幅编辑的说话方案再指导语音合成。

历史对话由同场景前 N 个句子组成，每个句子本可各取全局和语义，但那样会引入多个说话人相关的全局块，且推理时需要可靠切分连续音频。论文的做法是只保留第一句的全局块作声学锚点，把所有句子的语义序列拼接起来。这样训练表示更接近推理时对连续历史音频的编码，预实验显示完全去掉全局块会损害历史转写和理解。

\[H^{a}\Rightarrow[g_{h_{1}},s_{h_{1}},s_{h_{2}},\ldots,s_{h_{N}}].\]

参考语音只保留 32 个全局令牌，不保留其语义，因为它只管音色不管说什么。目标语音则同时预测全局和语义，但默认重建时用参考的全局加预测的语义，以强化音色条件。直接解码完整预测序列的模式也被定义，用于对照。

**全局令牌 × 语义令牌：** 全局令牌负责携带 utterance 级的说话人音色等整体信息，用固定 32 个离散符号表示，语义令牌负责携带随时间变化的语言内容信息，二者搭配的原因是统一自回归模型需要把音色和内容解耦又能拼接成一个序列，组合后新增的作用是推理时只用参考音频的全局令牌做音色条件、用预测的语义令牌决定说什么和怎么说。

\[I_{\mathrm{emo}}=0.7\cdot A+0.3\cdot D,\]

上式是情感表达强度的计算：唤醒度乘 0.7 加支配度乘 0.3，来自情感向量空间的投影。它把声学证据压缩成一个可比标量，后续既用于数据筛选，也用于评估合成与真实的情绪强度一致性。

\[\hat{x}^{a}_{\mathrm{ref}}=\mathrm{BiCodecDecoder}(g_{r},\hat{s}_{x}).\]

上式是默认波形重建：解码器输入参考全局令牌和预测的目标语义令牌。符号很直白，目标是让音色来自参考、内容和表达来自预测序列。

**参考语音 × 历史对话音频：** 参考语音负责指定目标说话人的音色，历史对话音频负责决定目标句应该用什么情绪、重音和节奏来说，二者分工不同所以论文明确把参考语音只取全局令牌、把历史音频保留语义序列，搭配的原因是防止把参考语音的情绪误当成目标情绪，组合意义是实现音色可控而表达方式由上下文推理决定。

### 数据从 23M 到 9M 再到 1M 经历了什么？三阶段训练各练什么？

数据管线是这篇论文可复述的核心之一，适合按动作记忆。起点是从影视、电视剧、广播剧和短剧收集的中英对话媒体，抽取音频并统一为 16 kHz 单声道 WAV 长录音。然后用说话人分离得到句子级时间戳、说话人标签和初始转写，按时间戳切出句子音频并做增强降噪。场景切分先用长停顿粗切，太长的段再用大模型按转写和说话人结构细切，使目标句主要参考同场景前三到五句。情绪标注采用先粗后细：语音情绪识别定粗类别，再投影到唤醒支配效价空间算强度，最后由大模型结合上下文写简洁情绪描述。推理标注则按 5 维加时长强度加总结生成。

下图是构造框架的全景，先看来源与标准化，再看标注 3 步，最后看样本结构，有助于把文字步骤落到模块上。

> **看图路径：** 1. 先从左栏原始多媒体来源看到音频提取与 16 kHz 单声道标准化路径；2. 再看中栏说话人分离、场景切分、情绪与推理标注三步如何衔接；3. 最后看右栏每个样本保留了历史段、目标句、参考语音和哪些标注

[![原论文 Fig. 1：Overview of the COT-TTS data construction framework.](https://arxiv.org/html/2609.22697v1/data-new.png)](https://arxiv.org/html/2609.22697v1/data-new.png)

*论文图 1。原论文 Fig. 1:：“Overview of the COT-TTS data construction framework.”。*

图中可见左中右三栏分别对应采集预处理、多维标注和结构化样本。观察时注意音频标准化参数、说话人分离输出四件套、场景编号的作用，以及右侧每个样本同时保存历史段、目标句、参考语音和转写情绪推理声学特征。像素显示的 23M 初始样本是过滤前的规模，后续还要按来源分成训练与评测分支以防重叠。

过滤增强管线把约 23M 初始样本按来源分为 20M 训练分支和 3M 评测分支，各自独立处理。先对相同目标音频去重，因为同一目标可能配不同长度历史。再做说话人一致的参考选择：为每个目标取 5 个同说话人候选，算说话人嵌入余弦相似度，最高分低于 0.5 则丢弃，否则取最高分作参考。之后训练分支经规则过滤剩约 9M 用于第二阶段，再经质量自然度筛选和重转写得约 1M 高质量子集用于第 3 个阶段。评测分支再经大模型打分和人工校验，最终留 800 条，中英各 400。

3 阶段训练的安排理由在正文和下图中一致。第一阶段用约 140K 小时开源语音做语音识别与 TTS，建立文本与语音令牌对齐。第二阶段用 9M 主任务加辅助任务按 7 比 3 混合，辅助包括识别、常规 TTS、说话人分离、语音情绪识别和指令式 TTS，并以一半概率随机丢 0 到 10% 输入令牌增强鲁棒性。第 3 阶段去掉辅助，只用 1M 高质量 COT-TTS 加 1M 高质量 TTS 按 1 比 1 精调，转向目标分布并提升音质。

> **看图路径：** 1. 先对比第一阶段只有 ASR 与 TTS 两列输入输出；2. 再看第二阶段新增 COT-TTS 主任务与说话人分离等辅助任务；3. 最后看第三阶段如何只保留高质量 TTS 与 COT-TTS 两路精调

[![原论文 Fig. 5：Overview of the three-stage training strategy for our end-to-end autoregressive models for COT-TTS.](https://arxiv.org/html/2609.22697v1/train-new.png)](https://arxiv.org/html/2609.22697v1/train-new.png)

*论文图 5。原论文 Fig. 5:：“Overview of the three-stage training strategy for our end-to-end autoregressive models for COT-TTS.”。*

图中上左是第一阶段两任务，下方是第二阶段六任务并列，上右是第 3 阶段两路高质量精调。注意输入输出标注的变化：第二阶段 COT-TTS 输入多了历史音频，输出多了历史文本与推理文本，这正是主任务与其他任务的区别。

下面这张表是训练配置的原文呈现，阶段、数据、比例、中英比和轮数都按原文保留，0.6B 与 1.7B 的轮数用原文横线写法区分。

表前问题：3 阶段的数据量和混合比是否公平可比？指标方向是看主任务占比与高质量精调是否逐步收窄分布。公平条件是同一主干和统一序列格式，只算目标输出损失。

| Stage | Data | Ratio | Zh:En | Epochs |
| --- | --- | --- | --- | --- |
| 1 | ASR (70K h), TTS (70K h) | 1:1 | 1:1 | 1—1 |
| 2 | COT-TTS (9M) + Auxiliary tasks | 7:3 | 48:52 | 2—3 |
| 3 | COT-TTS (1M) + TTS (1M) | 1:1 | 44:56 | 1—1 |

表后解释：主要收益是第二阶段用大规模主任务建立上下文推理与合成能力，第 3 阶段用高质量子集提升稳定性和音质。代价是第二阶段数据量大、辅助任务多，训练成本高。未胜出项在消融中显示：跳过第二阶段直接精调效果弱，说明小规模高质量集不能替代大规模任务训练；用质量分数作条件不如直接过滤，详见消融节。

可编辑推理的受控合成设置如下表，论文固定历史、文本和参考，只改推理中指定字段，观察时长、节奏和强度的跟随性。

表前问题：在固定其他条件时，只改推理字段能否稳定改变语音属性？公平条件是同一条历史与文本，只动时长、节奏和强度字段。数值越大表示更长或更强。

| Control | Default | Edited Parameters | Edited Parameters | Edited Parameters | Edited Parameters |
| --- | --- | --- | --- | --- | --- |
| Duration (s) | 5.54 | 4.5 | 6.5 | 7.5 | 8.5 |
| Rhythm (s) | 4.23/5.54 | 3.2/4.1 | 3.7/4.8 | 4.9/6.4 | 5.6/7.5 |
| Intensity | 0.77 | 0.57 | 0.67 | 0.87 | 0.97 |

表后解释：论文报告生成语音随编辑清晰且一致地变化，支持推理字段确有控制作用。代价与边界是大幅改动或维度间矛盾会削弱控制，例如一处写微怒另一处写极怒，或在愤怒场景强加快乐，即使改了字段也难实现。极低有效语音占比还可能丢词，这些都是复现时要守的约束。

### 评测要测什么？基线条件一致吗？指标方向如何？

评测在来源不重叠的 800 条基准上进行，中英各 400。论文从 3 个互补视角组织：客观语音质量、基于大模型的推理质量、盲听人评。客观包括自然度估计、整体感知质量、中文用字错率英文用词错率衡量内容保持，以及与真实目标比较的情绪强度一致性、绝对时长误差和基频皮尔逊相关。推理质量由评判模型打历史理解、内部逻辑和信息丰富度三项 0 到 5 分，每样本独立评 3 次再按一致策略聚合，最后用信息丰富度加权得到综合分，以防逻辑正确但空洞的推理得高分。人评把历史音频、生成推理和合成语音一起给听音人，按与上下文的合适度、语音与推理一致性和整体感知打 1 到 5 分取平均。

**情感表达强度 × 时长一致性：** 情感表达强度负责度量合成语音与真实下一句在唤醒度和支配度组合上的接近程度，时长一致性负责度量两者绝对时长差，分工分别是表达像不像和节奏久不久，搭配的原因是上下文推理既要选对情绪又要选对语速停顿，组合意义是共同检验推理是否真正落到了可听的韵律实现上。

\[S_{\mathrm{emo}}=\max\left(0,\,1-\frac{\left|I(\hat{x}^{a})-I(x^{a})\right|}{R_{I}}\right),\]

上式是情绪一致性：用合成与真实的强度差除以有效范围，再用 1 减去并截断于 0。分越高表示与真实表达强度越接近。它依赖前面定义的强度公式，所以必须先理解唤醒支配加权。

基线按图分为 3 组以保证输入一致。第一组是 3 段式语音转写加语言模型加可控 TTS，转写用 Qwen3-ASR 或分离聚类，推理用 30B 级语言模型，后端用 Fish Audio 2 或 VoxCPM2，共 4 条。第二组是两段式音频大模型直接分析历史音频再控 TTS，共两条。第 3 组是两段式音频大模型先生成中间语音再经 Seed-VC 转音色，一条。与之对比的是 0.6B 和 1.7B 端到端模型，推理时在单卡上每样本生成 1 次，失败允许 1 次重试，默认用参考全局加预测语义重建，可编辑模式由外部大模型轻改推理但保留整体结构。
下图把 3 组基线的数据流画得很清楚，适合核对公平性。

> **看图路径：** 1. 先看左侧三类输入如何分别进入三条级联通路；2. 再对比上路文本中转与中路音频大模型直接推理风格提示的差异；3. 最后看下路先生成中间语音再做音色转换的特殊路径

[![原论文 Fig. 6：Overview of the three cascaded baseline architectures.](https://arxiv.org/html/2609.22697v1/baseline-new.png)](https://arxiv.org/html/2609.22697v1/baseline-new.png)

*论文图 6。原论文 Fig. 6:：“Overview of the three cascaded baseline architectures.”。*

图中可见历史音频、目标文本、参考语音 3 类输入用不同颜色区分，分别进入上中下 3 路。重点观察风格提示在上中两路都作为文本进 TTS，而下路是先出中间语音再做音色转换。虚线表示参考语音只在需要音色条件时进入对应模块，这与端到端模型只取参考全局令牌的思路可对照理解。

### 小模型在哪些数上接近大级联？代价在哪里？

主结果按英文和中文分别报告，级联总量约 34 到 39B，端到端仅 0.6B 或 1.7B。论文的总体判断是端到端用少得多的参数达到可比的整体表现，尤其在时长一致性和情绪一致性上好，人评也高于多数基线。但客观音质分上级联仍占优，特别是 Fish Audio 2 和音频大模型加音色转换管线。这说明可比不是全面超越，而是特定维度持平或更优。

下面这张整理表只用原文连续句覆盖的数字，不引入原表矩阵，用于快速把握可运行策略的对比。表中基线指级联系统，本方法指端到端非编辑模式。

表前问题：在相同基准和固定文本条件下，端到端与级联在时长、情绪和人评上谁更稳？公平条件是同 800 条来源不重叠基准、同一目标文本和参考音色。时长误差越低越好，情绪一致性和人评越高越好。

| 条件 | 指标 | 级联基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 相同基准固定文本 | 时长误差 | above 5 seconds | around 1 second or lower | 级联对比端到端 |
| 相同基准固定文本 | 情绪一致性 | 未单独给基线数 | around 0.95 | 端到端绝对水平 |
| 相同基准盲听 | 人评趋势 | 多数基线更低 | higher subjective scores | 端到端对比多数基线 |

表后解释：主要收益是端到端把时长误差从 5 秒以上压到 1 秒左右，同时情绪一致性维持在 0.95 附近且字错率低，人评盲测高于多数基线。论文的事后分析称基线易整句保持同一风格，例如短语的耳语指令影响整句，而端到端能产生更自然的节奏重音情绪变化，1.7B 比 0.6B 情绪更丰富强烈。具体代价是客观音质分仍落后，可编辑模式下自然度和基频相关还会下降，说明模型学到了推理与语音的强依赖，大改推理会偏离训练分布。未胜出项是部分基线在自然度和感知质量上更高，不能把人评优势推广为音质全面领先。

可编辑模式的结果值得单独说明。编辑后推理的历史理解和信息丰富度提升，中文综合分达到各系统最高，但语音侧多项客观分下降，时长一致性反而改善。人评在编辑后回落，过度修改会出现尾音、重复或语速异常。这支持可解释性与稳定性之间存在权衡：推理写得更好不等于语音一定更好听。

### 三阶段里哪一步不可跳过？质量分作条件为何不如直接过滤？

消融用 0.6B 非编辑推理，逐项去掉或替换训练设计。设置包括只用第一阶段、第一加第二阶段、跳过第二直接用高质量精调、3 阶段去辅助任务、3 阶段用质量分作条件、以及完整 3 阶段质量过滤。论文报告只用第一阶段仅有基础理解合成能力整体有限，加入第二阶段后客观与人评明显提升，跳过第二直接精调更弱，说明大规模任务训练不可被小高质量集替代。去掉辅助任务也退化，说明互补监督有用。最大增益出现在第二阶段之后，支持先建核心能力再精调的顺序。

下面整理表用原文连续句的数字与比例，不抄原宽表矩阵，聚焦训练动作与数据规模的对应关系。

表前问题：在相同主干下，数据规模、混合比与过滤方式如何影响最终能力？公平条件是同 0.6B 模型和非编辑推理，只变训练阶段与数据。样本量越大一般覆盖越广，混合比决定主任务权重。

| 条件 | 指标 | 训练动作 | 数据规模 | 混合比例 |
| --- | --- | --- | --- | --- |
| 阶段 2 主任务 | 训练分支 | 去重加参考选择后保留 | approximately 9M samples | 7:3 |
| 阶段 3 精调 | 高质量子集 | 过滤增强后保留 | approximately 1M samples | 1:1 |
| 全程框架 | 参数更新 | 全参数微调 | VeOmni framework | 全参数 |

表后解释：主要收益是 9M 规模建立初始上下文推理与合成，1M 高质量子集进一步适配目标分布并提升音质稳定性，7 比 3 的主辅混合和 1 比 1 的高质量混合是论文实际采用的可运行配比。代价是第二阶段成本最高，且质量分作条件仅带来有限提升，直接去掉低质样本反而在识别准确率、时长一致性和人评上更好。未评测边界是论文未报告各辅助任务单独贡献和不同丢弃率的细粒度曲线，复现时可补。反例是跳过第二阶段的精调在多项上弱于完整 3 个阶段，不能用小而精替代大而杂的任务学习。

### 哪些结论不能推广？还有什么没测？

论文直接报告的是在自建 800 条基准上的表现，显示的是与真实下一句的接近程度和人评偏好，支持的是上下文推理有助于选对情绪节奏。但这不能推广为任意对话都有效，因为数据来自影视广播短剧，噪声重叠和说话人标签错误仍存在，性格等跨场景信息被有意舍去。相关性不等于因果，情绪一致性高不证明模型真正理解因果链，只说明声学实现接近。

未验证的推测要用可能表达。大改推理导致音质下降可能与训练分布偏移有关，但论文未给出梯度路径或注意力层面的因果证据。中文编辑增益更明显可能与推理全用中文生成有关，但未做语言对照实验。训练资源、推理延迟、输出帧率与实际延迟分别讨论：论文只说明单卡批量为 1 生成 1 次，未测量误判率、延迟或成本，不能承诺这些量得到改善。

缺失证据不是技术错误，但复现时要补。原表明细中部分表头与数值存在解析困难，本文只用可安全选择的原表和逐字连续句，凡需猜表头或单位的数字都不作为结论依据。若要在新领域部署，还需补噪声鲁棒性、长历史外推和不同参考时长下的稳定性验证。

### 要复现先做什么？代码权重数据各是什么状态？

复现先从任务输入输出对齐做起。准备一条历史音频、固定文本和同说话人参考，按论文顺序先跑历史转写，再看 5 维推理加时长强度和总结是否与历史矛盾，最后听合成是否跟随推理。论文称将公开数据构造管线、训练评测数据、训练好的自回归模型及训练推理代码，演示页在本次可达的官方页面上。资源状态以本次核验为准：演示链接当前可用，状态码为 200，可去听新说话人回应与同说话人延续两个案例，以及时长节奏强度受控合成的例子。

关键超参数和信息条件要保留。第一阶段识别与合成各约 70K 小时，第二阶段主辅 7 比 3 均匀采样辅助，第 3 阶段高质量两路 1 比 1，中英比随阶段变化，0.6B 与 1.7B 轮数在原表中有区分。推理默认用参考全局加预测语义重建，编辑只做轻改并保持维度间一致，例如不要一处微怒另一处极怒，也不要在愤怒场景强加快乐。有效语音占比过低易丢词，强怒常伴更短时长，改一个维度要联动检查其他维度。

区分代码开源、权重下载和系统可运行。论文正文说将公开管线数据模型代码，但本次证据只确认演示页可达，未确认权重与全量数据已可下载，所以只能写演示当前可用，不能写数据权重已公开。若权重未拿到，可先用同系列基线复现评测流程，再等官方释放后跑端到端。

### 何时值得尝试这种先推理后合成？

当你的任务是固定文本但说法随上下文变化，且需要向用户或开发者解释为何这样说时，值得尝试这种先写说话计划再合成的路线。它把难控的风格选择变成可读文本，便于定位是历史理解错还是语音实现错，也便于做小幅可控修改。影视配音、有声书对话、情感陪伴回复都符合这个画像，因为同一句话在不同前文下应有不同讲法。

当你只有孤立朗读数据、没有对话历史，或只要求音质而不在乎上下文合适度时，不必引入这套重型管线。直接用常规 TTS 加人工提示更省事。即使要用，也要守住论文给出的适用条件：历史尽量取同场景前几句，参考语音保证说话人一致且相似度过阈，推理编辑保持适度与内部一致，评测同时看内容保持、情绪时长基频一致性、推理三项分和盲听人评，不能只看单一自然度分。

回到中心矛盾：可控性与自然度的张力。级联把每步做强但可能丢副语言信息，端到端把推理与语音绑在一起，换来时长人评优势，也带来大改即失稳的代价。理解这一点，就能复述整篇方法而不只是背数字。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.22697v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-22 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-22/)
