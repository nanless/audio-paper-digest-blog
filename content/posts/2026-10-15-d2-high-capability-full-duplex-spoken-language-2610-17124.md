---
title: "D2: High-Capability Full-Duplex Spoken Language Models from Half-Duplex Backbones"
date: 2026-10-15
draft: false
tags: [全双工语音交互, 知识蒸馏, SFT, 流式处理]
categories: [论文速递]
description: "D2 把已具备理解与生成能力的半双工语音模型按固定短块切分对话，用流式编码器蒸馏加全双工监督微调实现边听边说，在 80 毫秒块下 Qwen3-Omni-D2 仍保持 70.1 的 VoiceBench 总分，但小块会明显削弱停顿容忍并保留合成与数据构造等限制。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.17124"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把半双工语音大模型改成全双工：D2 的两阶段做法"
paper_digest_original_title: "D2: High-Capability Full-Duplex Spoken Language Models from Half-Duplex Backbones"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.17124v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.17124v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.17124v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "D2 把已具备理解与生成能力的半双工语音模型按固定短块切分对话，用流式编码器蒸馏加全双工监督微调实现边听边说，在 80 毫秒块下 Qwen3-Omni-D2 仍保持 70.1 的 VoiceBench 总分，但小块会明显削弱停顿容忍并保留合成与数据构造等限制。"
paper_digest_authors: [{"affiliations":["MIT CSAIL"],"name":"Cheng-Kuang Chang"},{"affiliations":["MIT CSAIL"],"name":"Alexander H. Liu"},{"affiliations":["MIT-IBM Watson AI Lab"],"name":"Brian Kingsbury"},{"affiliations":["MIT-IBM Watson AI Lab"],"name":"Hilde Kuehne"},{"affiliations":["MIT-IBM Watson AI Lab"],"name":"Rogerio Feris"},{"affiliations":["MIT-IBM Watson AI Lab"],"name":"Samuel Thomas"},{"affiliations":["MIT CSAIL"],"name":"James Glass"},{"affiliations":["MIT CSAIL"],"name":"Kai-Wei Chang"}]
paper_digest_abstract_sha256: "82969469eac1eab23a4d9b5fb7efcee12bfc81c4d869a8b7a200c0f6a7a708e7"
paper_digest_sidecars: {"citation.bib":{"sha256":"f9f50b20802a21f6a4db4346910923ba346b0465228dedb11ab8546b5134e709","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17124/citation.bib"},"citation.json":{"sha256":"76ca201632c651a038639cd9dc68900064071f5e037dcf0dce48f406fcaf35bd","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17124/citation.json"},"citation.ris":{"sha256":"c37b5bd191bb7926565abfd7b8bdd86cbd87fba8d7bff8ca6272665efe170670","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17124/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"cceb7fd6d062286641b9b728aaec39ab65b3c3af32fceab050c365574928713e","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17124/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3236d0a71b26edb5406cbd4eaad12f17939300b8b5d40567ae56075fedbc0299"
paper_digest_api_reader_plan_sha256: "138e7b14e118724bc17b1c37c3732126e0f9b646d439f156af2b51ebf236b714"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9547a125323f35e5471323f2740a26591657e4d3e2e7c923ef85f4ff8d53dff8"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "b5f2f965155934e7abca2334cfb2fa8b19df0a54ce40700918264a138f7abdd4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "da03ff993ce0e816250dac063dc17907ce25b43e4d9aa2e8fce8c42c5a1725f5"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4626a1c614468e7a2995a25f46b4dc98c2bec563e42a731ac4979f45ada88982"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把半双工语音大模型改成全双工：D2 的两阶段做法

> 英文题目：*[D2: High-Capability Full-Duplex Spoken Language Models from Half-Duplex Backbones](https://arxiv.org/abs/2610.17124v1)*

> 标签：#全双工语音交互 | #知识蒸馏 | #SFT | #流式处理
>
> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.2/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Cheng-Kuang Chang：MIT CSAIL
- Alexander H. Liu：MIT CSAIL
- Brian Kingsbury：MIT-IBM Watson AI Lab
- Hilde Kuehne：MIT-IBM Watson AI Lab
- Rogerio Feris：MIT-IBM Watson AI Lab
- Samuel Thomas：MIT-IBM Watson AI Lab
- James Glass：MIT CSAIL
- Kai-Wei Chang：MIT CSAIL

## 📌 核心摘要

全双工语音语言模型要求在持续生成语音的同时实时听取用户音频，输入是不断到达的用户声波与延迟回放的自身语音，输出是逐块生成的语音及其伴随的中间文本，难点在于流式编码缺少未来上下文且交互决策细化到短块级别。半双工语音语言模型只在完整轮次边界处决策与回应，理解与推理能力较强，但无法处理重叠语音与中途打断。Dialogue-to-Duplex第一步把冻结的离线音频编码器蒸馏为流式学生编码器，块内双向注意力、块间因果注意力，输出的流式表征直接送入原有理解与合成通路。第二步把用户与助手音频排布到保留静音与重叠的共享时间轴并切分为固定块，以监督微调学习发起回应、让出话语与填充静音，上一步得到的流式编码器随模型一起参与训练。在全双工交互的块粒度设置下，与BayLing-Duplex最长4 s输入块与800 ms块的做法相比，D2以80 ms量级更新实现更细粒度交互并避免高更新率下的性能骤降。在VoiceBench评测中，12.5 Hz的Qwen3-Omni-D2的VoiceBench分数为70.1，以约9.1分超过最强全双工基线MiniCPM-o 4.5，同时在Full-Duplex-Bench评测中轮次接管率99.2%高于MiniCPM-o 4.5的75.6%、打断接管率99.5%高于MiniCPM-o 4.5的94.5%。结论在Qwen3-Omni与LLaMA-Omni 2结构上得到验证，Qwen3-Omni-D2在小块下暂停处理仍有限，且全双工训练数据由轮次对话拼接构造而非真实全双工对话。在单张RTX PRO 6000上测得的第二阶段单配置elapsed时间为10.8小时至13.2小时，80 ms块全推理平均计算时间为56.9 ms，低于80 ms块时长。

## 🔗 开源与复现资源

- 第三方资源：<https://d2-duplex-demo.github.io/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么要在会说话的模型上再做边听边说

这篇论文研究的输入是连续的双轨语音对话，一轨是用户麦克风不断送入的音频，另一轨是模型自己正在播放的语音，目标是在模型说话的同时也能听见用户插话，并在用户说完后尽快接话。必须保留的信息包括用户说了什么、模型说到哪里、两者在时间上是否重叠，以及最终回答的内容质量。输出是按短块连续生成的语音及其背后的中间文本。

对于刚接触语音对话的研究生，可以把半双工理解为对讲机，一方说完另一方再说，全双工理解为面对面聊天，双方可以同时出声、打断和重叠。论文指出，原生全双工模型往往在知识、推理和指令遵循上弱于强大的半双工语音语言模型，而后者如 Qwen3-Omni 和 Kimi-Audio 已经具备较强的理解与生成能力。因此作者选择不从零训练全双工模型，而是把现成的半双工骨干转换成细粒度的全双工模型。

论文在脚注中提到演示链接，本文只转述该链接在原文中出现这一事实，不对其可运行性做额外断言。

### 已有路线在输入、目标和运行阶段上有何不同

要理解 D2 的位置，需要按输入、目标和运行阶段区分 3 条路线。第一条是半双工语音语言模型，输入是切好的完整用户轮次，目标是生成该轮的文本与语音，运行时不需要处理重叠，代表是 GLM-4-Voice、LLaMA-Omni 2、Kimi-Audio 和 Qwen3-Omni。第二条是原生全双工模型，输入是连续音频流，目标是在每个时刻决定说话或沉默并处理打断，运行时必须同时编码用户音频和自生成音频，代表是 Moshi、Freeze-Omni 和 PersonaPlex 等，MiniCPM-o 4.5 虽然能力较强，但论文指出它用 1 秒块，在降到 0.1 秒时会明显退化。

第 3 条是半双工到全双工的转换，输入是已有的半双工骨干加构造的全双工数据，目标是保留原能力的同时学会细粒度交互。BayLing-Duplex 属于这一类，它把 GLM-4-Voice 转成全双工，但保留最长 4 秒的音频编码器输入块并用 800 毫秒块，导致延迟达数秒，还需额外 DPO 稳定接管。OmniFlatten 则是从纯文本大模型出发，先做语音模态对齐再做全双工训练，与 D2 从已具备语音理解与生成的半双工骨干出发不同。

比较时只有输入同为连续流、目标同为边听边说、运行阶段同为流式推理的系统才能直接比交互延迟，跨类别的分数差异首先反映的是骨干起点和块粒度不同。

### 对话按轮切还是按块切有什么形式差别

论文把一段对话写成用户音频与模型输出交替出现的序列，每个位置的模型输出都依赖当前用户观察和之前全部上下文。对话的通用分解是所有交互单元的连乘，每个单元用当前用户音频和历史预测对应模型输出。

\[p(Y_{1:N}\mid X_{1:N})=\prod_{i=1}^{N}p(Y_{i}\mid X_{i},H_{i}).\]

其中符号含义是直接的，X 表示用户音频，Y 表示模型输出包括语音和可选中间文本，H 表示之前对话上下文，N 表示单元总数。半双工是上式的粗粒度特例，每个单元对应一个完整用户轮次，轮次数量记为 N_turn。

\[p_{\mathrm{HD}}(Y\mid X)=\prod_{i=1}^{N_{\mathrm{turn}}}p(Y_{i}\mid X_{i},H_{i}).\]

全双工则把时间轴按固定块切分，每个块时长为 k 乘以 Delta，Delta 是编码器分辨率即 1 帧时长，k 是每块包含的编码器帧数，块总数记为 N_k。

\[p_{\mathrm{FD}}(Y\mid X;k)=\prod_{i=1}^{N_{k}}p(Y_{i}\mid X_{i},H_{i}),\]

举例说，Moshi 用 k 等于 1、Delta 等于 80 毫秒，MiniCPM-o 4.5 用 k 等于 10、Delta 等于 100 毫秒。k 越大交互越粗，延迟通常越大但决策信息越多，k 越小观察和回应越频繁。论文把半双工看作该谱系最粗的一端，其边界由完整轮次决定而非固定块。

**半双工语音语言模型 × 全双工语音语言模型：** 半双工语音语言模型指一次只处理一个完整用户轮次、说时不听的模型，全双工语音语言模型指按短块持续同时接收用户音频和生成模型音频的模型，D2 把后者看作前者在更细时间粒度上的对话，因此可以用同一个生成目标、只改变切分方式来做转换。

### D2 总体上分哪两步解决流式与交互问题

D2 的整体流程是先解决编码器只能离线看全文的问题，再解决模型不会按短块做会话决策的问题。第一阶段是编码器蒸馏，把原编码器改成流式学生，用冻结的原离线编码器做教师，在相同音频上逐帧对齐表示，卷积前端只用截至当前块的音频重算，Transformer 把双向注意力换成块因果注意力。第二阶段是全双工监督微调，把普通轮流对话排到共享时间轴上并切成固定块，训练模型按推理时的顺序消费当前用户块和上一块自生成音频，并逐帧生成当前块输出。

推理时每个块内先把两路音频的表示填入上下文，再自回归生成 k 个输出帧并渲染成波形播出，用户音频在模型说话期间也被连续采集。下面这张总览图把左右两部分放在一起，左侧是蒸馏，右侧是带延迟自反馈的生成架构，k 等于 4 只是图示取值。

> **看图路径：** 1. 先看左面板教师与学生的注意力矩阵差异，确认学生只能看过去和当前块；2. 再沿右面板底部用户波形向上追踪用户音频与上一块自生成音频的汇合位置；3. 最后看中间骨干到文本再到语音码最后到波形的三层输出链路

[![原论文 Figure 2：Overview of Dialogue-to-Duplex (D2).](https://arxiv.org/html/2610.17124v1/figures/D2_architecture.png)](https://arxiv.org/html/2610.17124v1/figures/D2_architecture.png)

*论文图 2。原论文 Figure 2:：“Overview of Dialogue-to-Duplex (D2). (a) A frozen offline encoder supervises a streaming student with bidirectional attention within each chunk and causal attention across chunks.”。*

从图中可见，左侧教师用全注意力，学生注意力矩阵右上被遮住，只能看过去和当前块，两者输出隐状态送入同一损失。右侧底部是连续用户波形，向上经过流式编码器得到用户与助手音频块，再经半双工骨干得到文本与上下文，最后经语音码预测器和码解码器得到当前块语音，上一块语音经虚线回送为下一块的自输入。冻结与可训练标记区分了哪些模块在第二阶段更新，语音码解码器冻结而骨干与预测器可训。

### 流式学生编码器如何限制未来上下文

第一阶段要解释的日常直觉是，原编码器像通读整句再做理解，流式编码器像听到哪里理解到哪里。实现上学生与教师结构相同但注意力模式不同，每个新块到来时，卷积前端只用截至当前块的音频重算，Transformer 层在块内保持双向，在块之间只看当前及过去块，看不到未来块。监督来自教师在同一音频上输出的逐帧表示，损失同时包含表示差的绝对值项和余弦相似度经 Sigmoid 后的对数项，T 为序列长度，D 为隐维度。

论文强调这种无解码器蒸馏不需要原训练解码器或转写标签，因此即使解码器未公开也能做转换。Qwen3-Omni 的音频 Transformer 前端把输入下采样到 12.5 赫兹即 Delta 为 80 毫秒，LLaMA-Omni 2 的 Whisper-large-v3 经 5 帧拼接投影后为 10 赫兹即 Delta 为 100 毫秒，这两个分辨率直接决定后续块时长。附录还给出 Qwen 侧每块用最新 104 个 Mel 帧、保留最近 k 个输出位置等实现细节，LLaMA 侧则用窗口重算块因果注意力，初学者复述时抓住块内双向、块间因果即可。

**编码器分辨率 × 块大小：** 编码器分辨率指一个音频编码器输出帧对应的时长，块大小指每个交互块包含的编码器帧数，两者相乘得到块时长，块时长决定模型多久观察一次用户并更新一次输出，是本文分析延迟、能力和计算量的核心旋钮。

**离线编码器 × 流式学生编码器：** 离线编码器指原文预训练模型中可以使用未来声学上下文的编码器，流式学生编码器指只用当前及过去音频的结构相同的编码器，前者冻结后提供逐帧表示作为监督，后者通过块内双向、块间因果的注意力去逼近前者，从而把延迟降下来而不更换编码器类型。

### 推理时一个块内先后经过哪些计算

沿着一个样本走一遍推理更清楚。假设当前是第 i 块，模型先等到 k 乘以 Delta 时长的用户音频 Xi，同时手头有上一块刚播出的自生成音频 Si-1。两者分别经过流式编码器得到 k 个用户向量 Ui 和 k 个自身向量 Ai，一起填入模型上下文 H。然后模型自回归生成 k 个输出帧，每个输出帧包含语音及其关联中间文本，记为 yi,j，生成时可利用 Oi 即两路音频观察、历史 Hi 和本块已生成的前缀。生成完毕后经渲染得到 Si 并播出，同时存作下一块的延迟自反馈。

这里延迟很关键，本块说话时听到的自己是上一块的，不是正在生成的这 1 帧，避免了即时回路。k 增大意味着每步要等更久、一次生成更多帧，交互变粗，论文明确说半双工就是该谱系最粗的极端。计算代价上，每块都要做两次编码器前向、一次填入和 k 步解码，块越小单位时间内步数越多，编码器分摊效果越差，后文实测表会量化这一点。

### 全双工训练序列如何从轮流对话拼出来

第二阶段训练的数据构造是把有序轮流对话变成带重叠的长序列。具体是把 InstructS2S-200K 和 SODA 中的完整用户与模型轮次按原顺序拼接，直到序列至少 720 秒音频，模型回应经 Kokoro 语音合成重合成以保证输出音色一致，AVQA 音频则用于保留通用音频理解。每次从模型轮转到下一用户轮时按概率抽取衔接方式，打断占 50%，直接拼接占 30%，静音间隔占 20%，初始静音和插入间隔在 2 到 30 秒之间均匀采样。

打断是把下一用户起点采样在上一模型 utterance 内部，模型语音持续到 INTERRUPT 目标为止，RESPONSE 放在用户最后一个可听帧之后，音频结束标记则在自然结束或被打断时终止模型语音。一半的 InstructS2S-200K 和 SODA 序列还加了有色噪声、空调噪声及增益滤波限幅等信道失真，覆盖静音间隔并随轮次变化，自音频与语音目标保持干净。训练时用教师强制按推理顺序消费 Oi 并预测 yi,j，文本交叉熵中词法 token 权重为 1，填充为 0.05，RESPONSE 与 INTERRUPT 为 20，语音码普通目标为 1，Qwen 侧音频结束权重为 20 而 LLaMA 侧为 3，以此放大稀疏控制信号。
下面示意图概括了从有序轮次到长序列的变换。

> **看图路径：** 1. 先看顶部有序轮次如何被拼成一条长达 720 秒以上的时间线；2. 再区分打断、直接拼接和静音三种衔接在时间轴上的画法；3. 最后注意噪声与信道效果是加在用户轨整体上的后处理

[![原论文 Figure 3：Full-duplex data construction.](https://arxiv.org/html/2610.17124v1/D2_data_construction.svg)](https://arxiv.org/html/2610.17124v1/D2_data_construction.svg)

*论文图 3。原论文 Figure 3:：“Full-duplex data construction. Ordered turns become sequences of at least 720 s with interruptions, turn-taking, and silence.”。*

图中顶部是交替的用户与助手轮次，中部箭头表示加入打断、轮次接管与静音并施加噪声信道效果，底部红蓝双轨分别表示用户与助手在大于等于 720 秒时间轴上的占用，黄色与白色小段对应打断与静音的插入位置。

**RESPONSE × INTERRUPT：** RESPONSE 是放在用户语音结束后、指示应当开始新回应的控制目标，INTERRUPT 是放在用户语音开始后、指示应当停止当前回应的控制目标，两者与填充符号一起占据与音频同钟的文本位置，训练时被加大权重以便模型在细粒度块序列中学会何时开口和何时停下。

### 用什么数据、骨干和指标来检验转换

实验设置分骨干、数据、训练与评测四块。骨干是 Qwen3-Omni-30B-A3B 的音频输入通路和 LLaMA-Omni 2 双语 7B 变体，前者 Thinker 生成文本、Talker 生成 16 码本语音帧再经 Code2Wav 增量成波，后者 Whisper 编码经适配器降到 10 赫兹再由独立自回归语音合成模型流式输出。第一阶段用 LibriSpeech 的 train-clean-100 与 train-clean-360 加 AVQA 音频轨，约 338 小时朗读加 66.4 小时通用音频，训练 30000 步。第二阶段用约 380 小时 InstructS2S-200K、200 小时 SODA 和 100 小时 AVQA，训练 10000 步，采用 90 秒训练段加 90 秒分离 KV 缓存的 Transformer-XL 式训练。

评测用 Full-Duplex-Bench 看交互，关注轮次接管、打断处理和暂停处理，其中暂停成功率按 100 减去合成暂停处理接管率得到，质量是 GPT-4o 对打断后回应的 1 到 5 分。VoiceBench 看通用能力，含 AlpacaEval、CommonEval、WildVoice 等开放问答，SD-QA、OBQA、MMSU 等问答选择，BBH 推理、IFEval 指令遵循和 AdvBench 安全，论文取每子集前 200 样本，总分是 0 到 100 聚合分。计算量在单卡 RTX PRO 6000 上用 BF16 测从 CPU 输入到 CPU 输出的全链路时间。

**轮次接管率 × 暂停处理：** 轮次接管率指在用户说完或打断时模型是否按预期接管或让出并继续回应的比例，暂停处理指在用户 utterance 内部短暂停顿时模型不抢话的比例，前者越高、延迟越低表示响应越积极，后者越高表示越能容忍停顿，两者在小块下存在权衡。

### 细块下接管是否仍然灵敏，停顿容忍付出什么代价

交互结果要回答的问题是块变小后模型是否还能及时接管和让出，以及为此在停顿容忍上付出多大代价。比较条件是同一 Full-Duplex-Bench 协议下的 D2 各块配置与 6 个全双工基线，指标方向是接管率越高越好、延迟越低越好、打断后质量越高越好。下表完整呈现原表全部行列，块时长为 k 乘以 Delta，非 D2 模型记为短横，质量为 GPT-4o 打分，轮次与打断为接管率，暂停为 100 减去合成暂停接管率。

| Model | Chunk duration (ms) | Quality (1–5) ↑ | Turn taking (%) ↑ | TT latency (s) ↓ | Interrupt (%) ↑ | Int. latency (s) ↓ | Pause (%) ↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3-Omni-D2 | 80 | 4.56 | 99.2 | 0.521 | 99.5 | 0.403 | 21.3 |
|  | 160 | 4.67 | 100 | 0.539 | 99.5 | 0.432 | 19.0 |
|  | 320 | 4.61 | 100 | 0.710 | 99.5 | 0.571 | 25.5 |
|  | 640 | 4.62 | 99.2 | 1.01 | 99.5 | 0.928 | 55.1 |
|  | 1040 | 4.84 | 100 | 1.38 | 99.5 | 1.30 | 61.6 |
| LLaMA-Omni 2-D2 | 100 | 3.33 | 100 | 0.746 | 99.5 | 0.621 | 74.5 |
|  | 200 | 3.62 | 99.2 | 0.825 | 100 | 0.710 | 78.2 |
|  | 400 | 3.69 | 100 | 1.02 | 99.0 | 0.894 | 69.4 |
|  | 800 | 4.03 | 98.3 | 1.45 | 99.0 | 1.32 | 70.8 |
| BayLing-Duplex† | – | 3.55 | 85.7 | 5.57 | 100 | 5.19 | 72.2 |
| Freeze-Omni | – | 3.82 | 34.5 | 0.288 | 98.5 | 0.349 | 69.4 |
| MiniCPM-o 4.5 | – | 4.45 | 75.6 | 1.92 | 94.5 | 1.89 | 91.2 |
| PersonaPlex | – | 4.43 | 99.2 | 0.346 | 95.0 | 0.294 | 31.9 |
| Moshi | – | 3.40 | 100 | 0.615 | 89.5 | 1.23 | 0.0 |
| Nemotron VoiceChat | – | 3.97 | 91.6 | 0.584 | 99.0 | 0.638 | 60.2 |

表中可见 Qwen3-Omni-D2 与 LLaMA-Omni 2-D2 在所有块下轮次与打断接管率都接近 100%，最小块时 Qwen 侧轮次延迟 0.521 秒、打断延迟 0.403 秒，LLaMA 侧分别为 0.746 秒和 0.621 秒，块增大延迟单调上升而打断后质量总体向好。代价集中在暂停处理，Qwen 侧 80 毫秒时仅 21.3%，到 1040 毫秒才升至 61.6%，而 LLaMA 侧同量级块下可达 70% 以上，说明积极响应与容忍停顿之间存在权衡。基线侧 BayLing-Duplex 延迟达 5 秒量级，Freeze-Omni 轮次接管仅 34.5%，Moshi 暂停为 0.0%，因此 D2 的优势是在细块下同时保持高接管与可接受延迟，限制是 Qwen 小块易抢话。交互性与智能的联合位置如下图所示，横轴为按延迟调整的 FD-Score，纵轴为 VoiceBench 总分。

> **看图路径：** 1. 先确认横轴是交互性、纵轴是 VoiceBench 总分，右上为更好；2. 再比较蓝色 Qwen-D2 曲线与灰色全双工基线点的位置高低；3. 最后看橙色 LLaMA-D2 曲线随块时长从 100 毫秒到 800 毫秒的变化方向

[![原论文 Figure 1：Capability and interactivity of full-duplex models. FD-Score is defined in Appendix F.](https://arxiv.org/html/2610.17124v1/figures/D2_pareto.png)](https://arxiv.org/html/2610.17124v1/figures/D2_pareto.png)

*论文图 1。原论文 Figure 1:：“Capability and interactivity of full-duplex models. FD-Score is defined in Appendix F.”。*

图中蓝色 Qwen-D2 曲线位于最上方，标注从 1040 毫秒到 80 毫秒各点，灰色基线点如 MiniCPM-o 4.5、Freeze-Omni 等明显偏低，橙色 LLaMA-D2 曲线在下方随块变小略降，顶部与中部虚线分别为两个半双工起点的参考线。FD-Score 定义为轮次与打断两项延迟调整接管率的等权平均，论文给出 80 毫秒 Qwen-D2 的算例约 68.07。

\[\mathrm{FD\text{-}Score}=\frac{1}{2}\left(\frac{R_{\mathrm{TT}}}{1+L_{\mathrm{TT}}/\tau}+\frac{R_{\mathrm{Int}}}{1+L_{\mathrm{Int}}/\tau}\right),\]

### 通用能力在变细后保留了多少

通用能力要回答的问题是转成细粒度全双工后，原半双工的知识推理能力还剩多少。比较条件是同一 VoiceBench 前 200 样本协议下的 D2 各块、原半双工骨干与 7 个语音基线，开放问答用 1 到 5 分，其余子集用百分比，总分用 0 到 100 分。下表保留原表全部模型行与全部子集列，可直接核对每个块配置的总分与分项。

| Model | Chunk duration (ms) | Alpaca Eval | Common Eval | Wild Voice | SD- QA | MMSU | OBQA | BBH | IF Eval | Adv Bench | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3-Omni-D2 | 80 | 4.30 | 3.47 | 3.58 | 64.5 | 64.5 | 81.5 | 64.5 | 37.2 | 91.5 | 70.1 |
|  | 160 | 4.33 | 3.44 | 3.63 | 68.0 | 60.0 | 71.5 | 59.0 | 29.6 | 94.0 | 67.8 |
|  | 320 | 4.40 | 3.70 | 3.76 | 67.0 | 60.0 | 86.5 | 62.0 | 36.9 | 95.0 | 71.6 |
|  | 640 | 4.38 | 3.96 | 3.78 | 57.0 | 63.0 | 85.5 | 60.0 | 38.0 | 95.5 | 71.3 |
|  | 1040 | 4.53 | 3.67 | 3.94 | 66.5 | 63.5 | 86.0 | 60.0 | 39.4 | 98.5 | 73.0 |
| Qwen3-Omni | HD | 4.84 | 4.52 | 4.69 | 68.5 | 73.0 | 91.0 | 87.5 | 80.7 | 99.5 | 86.8 |
| LLaMA-Omni 2-D2 | 100 | 3.38 | 1.94 | 2.13 | 9.0 | 27.5 | 36.0 | 48.5 | 12.5 | 29.5 | 34.7 |
|  | 200 | 3.59 | 2.31 | 2.28 | 15.0 | 30.5 | 37.0 | 50.5 | 11.7 | 35.0 | 38.1 |
|  | 400 | 3.52 | 2.48 | 2.35 | 18.5 | 26.5 | 43.0 | 51.5 | 13.5 | 49.5 | 41.1 |
|  | 800 | 3.59 | 2.86 | 2.64 | 20.5 | 32.0 | 40.0 | 47.5 | 15.8 | 40.5 | 42.0 |
| LLaMA-Omni 2 | HD | 3.94 | 3.50 | 3.25 | 29.0 | 25.0 | 44.5 | 48.5 | 14.6 | 61.5 | 48.5 |
| Moshi | – | 2.04 | 1.53 | 1.49 | 17.5 | 22.5 | 21.0 | 47.0 | 13.2 | 47.5 | 30.0 |
| PersonaPlex | – | 3.14 | 2.30 | 2.31 | 21.0 | 27.5 | 24.0 | 49.5 | 12.5 | 5.0 | 32.7 |
| BayLing-Duplex | – | 3.24 | 2.23 | 2.13 | 6.0 | 30.5 | 28.0 | 49.5 | 14.2 | 11.0 | 32.4 |
| Freeze-Omni | – | 3.74 | 3.47 | 3.20 | 45.0 | 26.0 | 33.5 | 47.0 | 21.5 | 98.0 | 53.2 |
| MiniCPM-o 4.5 | – | 3.57 | 3.28 | 3.02 | 51.0 | 46.0 | 72.5 | 57.5 | 37.9 | 86.5 | 61.0 |
| Nemotron VoiceChat | – | 3.48 | 2.79 | 2.83 | 28.5 | 36.5 | 60.0 | 52.5 | 20.3 | 100 | 53.3 |
| Kimi-Audio | HD | 4.15 | 3.06 | 3.88 | 55.0 | 57.0 | 86.5 | 73.0 | 57.9 | 99.5 | 72.3 |

表中 Qwen3-Omni-D2 在每个测试块下都是已评全双工模型中总分最高，80 毫秒时 70.1，超出最强基线 MiniCPM-o 4.5 的 61.0 约 9.1 分，1040 毫秒时 73.0，与半双工 Kimi-Audio 的 72.3 相当，但仍低于自身半双工起点的 86.8。LLaMA-Omni 2-D2 从 100 毫秒的 34.7 升至 800 毫秒的 42.0，低于自身半双工起点的 48.5，说明起点较弱时转换后绝对分也较低。块时长对总分的影响相对平缓，Qwen 侧在 160 毫秒处略低为 67.8，其余在 70 分以上，支持论文所说高更新率下未出现剧烈退化的判断。不同块走势与半双工起点的关系如下图所示。

> **看图路径：** 1. 先看横轴块时长与最右侧无穷大符号代表的轮次式运行的区别；2. 再沿蓝色实线看 Qwen-D2 从小块到大块的总分走势是否平坦；3. 最后比较虚线连接的 D2 与其半双工起点之间的差距

[![原论文 Figure 4：VoiceBench versus chunk duration.](https://arxiv.org/html/2610.17124v1/figures/voicebench_chunk_size.png)](https://arxiv.org/html/2610.17124v1/figures/voicebench_chunk_size.png)

*论文图 4。原论文 Figure 4:：“VoiceBench versus chunk duration. Filled circles/squares and solid lines show D2 variants; open markers show original half-duplex models.”。*

图中蓝色 Qwen-D2 实线在 70 分附近平坦，右侧虚线连向 86 分附近的 Qwen3-Omni 官方点，紫色 LLaMA-D2 实线在 35 到 42 分之间缓慢上升，右侧连向 48 分附近的起点，橙色菱形 MiniCPM-o 4.5 等基线点低于同块 Qwen-D2，横轴断裂后无穷大表示无固定块的轮次式运行。结论成立条件是相同 VoiceBench 采样与聚合方式，以及 D2 训练所用的合成音色与噪声分布，换分布后分数可能变化。

### 每块的真实计算时间是否小于块时长

计算量要回答的问题是在单卡实时推理时，每块的全部计算能否在下一块到来前完成。测量对象是 Qwen3-Omni-D2 在固定 2048 槽 Thinker 缓存下的全链路时间，包括波形到 Mel、两路流式编码、Thinker 填入与解码、文本选择、Talker 及 15 个残差码预测与 Code2Wav 增量解码，批量为 1，用 BF16，实时因子为计算时间除以块时长。下表给出均值、95 分位与实时因子，块时长从 80 毫秒到 1040 毫秒。

| Chunk duration (ms) | Mean (ms) | p95 (ms) | RTF ↓ |
| --- | --- | --- | --- |
| 80 | 56.9 | 57.2 | 0.711 |
| 160 | 110 | 110 | 0.688 |
| 320 | 216 | 217 | 0.676 |
| 640 | 429 | 431 | 0.670 |
| 1,040 | 682 | 684 | 0.656 |

表中均值与 95 分位都小于对应块时长，80 毫秒时均值 56.9 毫秒、95 分位 57.2 毫秒、实时因子 0.711，1040 毫秒时均值 682 毫秒、95 分位 684 毫秒、实时因子 0.656，块越大编码器分摊越好因此因子略降。该结论只在所述硬件、精度、缓存大小与连续语音生成的测量协议下成立，不包括采集传输播放，换卡或增大缓存后需重测。训练资源与推理开销要分开，训练每阶段需数百小时数据与多卡数小时，推理是每块数十到数百毫秒的增量计算，两者不能混为一谈。

### 去掉蒸馏或改掉控制权重会发生什么

消融要回答两个具体问题，第一阶段蒸馏是否必要，第二阶段控制加权是否必要。第一组用 LLaMA-Omni 2-D2 的 100 毫秒块比较蒸馏、有监督编码器训练与无第一阶段，指标包括暂停、打断与轮次接管率、质量、延迟与 VoiceBench。下表完整呈现该消融的全部行列。

| Metric | Distill. | Supervised | No Stage I |
| --- | --- | --- | --- |
| Pause (%) ↑ | 74.5 | 61.6 | 62.0 |
| Int. TOR (%) ↑ | 99.5 | 100 | 99.0 |
| TT TOR (%) ↑ | 100 | 100 | 100 |
| Quality (1–5) ↑ | 3.33 | 3.09 | 2.75 |
| Int. latency (ms) ↓ | 621 | 590 | 617 |
| TT latency (ms) ↓ | 746 | 676 | 686 |
| VoiceBench ↑ | 34.7 | 35.4 | 30.9 |

表中无第一阶段时 VoiceBench 从 34.7 降到 30.9，打断后质量从 3.33 降到 2.75，接管率基本保持，说明蒸馏主要改善内容质量而非接管与否。有监督微调得到 VoiceBench 35.4 略高于蒸馏的 34.7，但质量 3.09 低于蒸馏的 3.33，论文据此认为两者相当、各有侧重，且蒸馏不需要原训练解码器。第二组是控制信号加权，用 1000 步附加微调比较填充权重 0.05 与 1、控制权重 20 与 1 的 4 种组合。下表为原文的权重消融，词法权重全为 1，打断后分数只计合格回应。

表中原始加权即填充 0.05 控制 20 时轮次与打断接管为 100% 和 99.0%、分数 3.67，任去其一轮次降至 95.8%，两者都去掉则降至 62.2% 和 90.5%，说明放大稀疏控制、压低填充对维持发起与让出都很重要。该结论限于 LLaMA 侧 100 毫秒块与短期续训条件，换骨干或块大小后最优权重可能不同。

### 哪些限制使结论不能直接推广

论文明确列出三点限制。第一，语音合成模块占端到端延迟的大头，降低合成延迟常伴随音质下降或生成不稳定，因此可选半双工骨干被限制在本身具备低延迟流式合成的模型。第二，全双工训练数据由轮流对话拼接合成，因为高质量公开全双工对话数据有限，合成的打断比例、静音分布与噪声类型会塑造模型行为，真实重叠与背信道可能未被充分覆盖。第三，暂停处理仍然有限，特别是 Qwen3-Omni-D2 在小块下暂停成功率仅 20% 左右，实际部署若用户停顿多会频繁被抢话。

此外，通用能力仍低于原半双工起点，Qwen 侧差距约 13 到 16 分，安全与指令遵循分项下降更明显，不能把全双工总分等同于半双工能力无损。语音质量附录用 UTMOS 在共享提示上评估，Qwen-D2 为 4.54、原骨干为 4.46，LLaMA-D2 为 4.16、原骨干为 4.43，样本仅 100 条且只去首尾静音，推广到其他音色与场景需谨慎。

### 复现第一步要准备什么并如何核对

值得尝试的时机是已有较强半双工语音骨干且其流式语音合成延迟可接受，又需要 80 到 100 毫秒级块的打断与接管，而能容忍小块下暂停容忍下降的场景。若应用对停顿敏感，应优先用较大块或另加端点检测。复现第一步不是直接训全双工，而是先复现流式编码器蒸馏，冻结原编码器做教师，用 LibriSpeech 加 AVQA 音频按目标 k 训练块因果学生，并对比学生与教师表示误差是否收敛，再接入第二阶段。

关键超参数与信息条件要保留，第一阶段卷积前端学习率 5 乘 10 的负 5 次方、注意力 2 乘 10 的负 6 次方、其余用秩 32 适配器，第二阶段 Thinker 等用秩 128 适配器峰值 5 乘 10 的负 5 次方、控制权重 20 与填充 0.05、90 秒段加 90 秒分离记忆，Qwen 侧音频结束权重 20 而 LLaMA 侧为 3。核对时用 Full-Duplex-Bench 看接管率与延迟，用 VoiceBench 前 200 样本看总分，并记录硬件、精度与缓存大小下的实时因子。代码开源、权重可下载与系统可运行是三件事，本文只依据原文的训练细节与演示链接描述，不对未确认的仓库或权重状态做断言。

### 如何一句话复述方法与证据边界

综合来看，D2 把全双工看作更细时间粒度的普通对话，先用无解码器蒸馏把离线编码器改成块内双向、块间因果的流式编码器，再用带打断、拼接与静音的 720 秒以上合成序列做监督微调，推理时每块消费当前用户音频与上一块自音频并生成 k 帧输出。证据支持在两个不同骨干上实现接近 100% 的轮次与打断接管，Qwen 侧 80 毫秒块延迟分别为 0.521 秒和 0.403 秒，总分 70.1 为已评全双工中最高，且计算时间小于块时长。

证据不支持无损转换，通用能力仍低于半双工起点，暂停处理在小块下明显受损，合成数据与合成器延迟构成边界。还需补的验证是真实人类重叠对话上的打断质量与抢话率、不同噪声与音色下的稳定性，以及更大规模人工评价与安全评估，之后才能判断该方法在目标场景是否真正可用。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.17124v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
