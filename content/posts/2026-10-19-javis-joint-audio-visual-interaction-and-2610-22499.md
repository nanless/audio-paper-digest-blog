---
title: "JAVIS: Joint Audio-Visual Interaction and Streaming for Real-Time Conversational Agents"
date: 2026-10-19
draft: false
tags: [音视频生成, 语音对话系统, 端到端学习, 流匹配, 流式处理]
categories: [论文速递]
description: "JAVIS 针对对话系统缺视觉通道与级联延迟问题，用共享大语言模型加联合精炼头产生统一音视表示并分两支流式生成语音和面部动作，在 VStyle 未见样本上取得更好的唇同步与表情恰当性，并把初始延迟降到 1.27 秒，但结论依赖合成训练数据与特定评测条件。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.22499"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "JAVIS：用一个统一表示同时流式生成语音和脸"
paper_digest_original_title: "JAVIS: Joint Audio-Visual Interaction and Streaming for Real-Time Conversational Agents"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.22499v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.22499v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.22499v1.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "端到端学习"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "JAVIS 针对对话系统缺视觉通道与级联延迟问题，用共享大语言模型加联合精炼头产生统一音视表示并分两支流式生成语音和面部动作，在 VStyle 未见样本上取得更好的唇同步与表情恰当性，并把初始延迟降到 1.27 秒，但结论依赖合成训练数据与特定评测条件。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junseok Ahn"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jaehyun Park"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jeongsoo Choi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Joon Son Chung"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ji-Hoon Kim"}]
paper_digest_abstract_sha256: "d71108bb4770bb5e529422fa87f10a9c6c9ed73ebb9eadee943c5ae1e4e44a76"
paper_digest_sidecars: {"citation.bib":{"sha256":"bf2fb64f57662b2133b6539760ac8fdf57c076d2f903d8f77f930e1da68456f4","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-22499/citation.bib"},"citation.json":{"sha256":"a1251af485842361284d8b054c0d935dc936f72bf56e665eca57d3b738b4ce5a","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-22499/citation.json"},"citation.ris":{"sha256":"e4cdab0fb4af19bb3eff1f8a1048eaf4d69f695298d3fda9204dac807bab6afa","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-22499/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"01ff5c429764b9f2200bd91ab4096321b2fca96b55fa893f0393166f9350c899","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-22499/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "06921ceaca3da2d6e29419f6bfe89bdf4cf2d2caf7744e0725c87e8851d4d43c"
paper_digest_api_reader_plan_sha256: "733b68142bb7bed0a82c0dafb217d54a69552eccf5bc12e40e3e987e748bb58c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7de21aaf2c80ea6ef4dc2fbf632fbabea36af8ec009f23e372c0cee6898bc22d"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "a74f7a345a0508b1ad73aae90a32fbc6906b07ecd77cbbfe10ded3f5bcb73928"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ab12498693fae80704419f97839f4d98a54cd632ffa7563ac2b6e319abd3abfc"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "387e482d23163f62fe45c267a703eb35042bd1c4dcde3ce715efdd2dbfc43da0"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 JAVIS：用一个统一表示同时流式生成语音和脸

> 英文题目：*[JAVIS: Joint Audio-Visual Interaction and Streaming for Real-Time Conversational Agents](https://arxiv.org/abs/2610.22499v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-paper-digest-blog/papers/?concept=task.speech-dialogue)
- **研究方法**：[端到端学习](/audio-paper-digest-blog/papers/?concept=method.end-to-end-learning)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.4/1.5


## 👥 作者与机构

- Junseok Ahn：机构信息未能在本次解析中与作者逐人可靠绑定
- Jaehyun Park：机构信息未能在本次解析中与作者逐人可靠绑定
- Jeongsoo Choi：机构信息未能在本次解析中与作者逐人可靠绑定
- Joon Son Chung：机构信息未能在本次解析中与作者逐人可靠绑定
- Ji-Hoon Kim：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

人类对话同时依赖词语、声音和面部变化，现有语音对话系统多先输出文本或语音，再串接独立talking face模型补画面，中间模态丢弃韵律与对话上下文，且串行等待累积延迟、破坏唇音同步。JAVIS以用户语音、对话历史和参考人像为输入，直接流式输出配对的回应语音与说话人视频，需在统一意图下保持唇音同步并达到实时。共享大语言模型理解查询后，联合精炼头将其输出扩展为统一音视频表示，语音分支用该表示采样语音词元并经流式解码声码器合成波形，运动分支以该表示加后一块表示为前视、结合上一运动块与参考面部状态自回归生成面部运动系数并渲染成像，两路并行流式输出。为补充真实音视频对话不足，JAVIS-Syn用情绪可控的人脸生成模型合成334小时多轮情绪对话与助手问答语料。在两块RTX 4090上以五次查询平均的流式延迟评测中，相比FAC + InfiniteTalk，JAVIS初始延迟从252.0 s降至1.27 s，实时因子从20.9降至0.541。在VStyle 140个未见样本的客观评测中，相比FAC + FLOAT的LSE-C 7.94、LSE-D 8.26，JAVIS的LSE-C升至9.59、LSE-D降至6.74，同步最准且视频与语音质量相当。结论适用于短回应流式生成与正面清晰人脸条件，长对话记忆、全双工打断与真实噪声环境的表现仍需验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么对话智能体需要脸和声音一起输出

这篇论文要解决的任务是：听到用户说的一句话，结合对话历史和一张参考人像，实时生成助手的说话语音和同一身份的脸部视频。输入是用户语音波形加历史文本，输出是两路时间对齐的流：语音波形和 25 帧每秒的人脸视频。

日常交流里意图不只靠词和语调，还靠表情、头部和视线。只做文字或语音的系统缺了视觉通道，听起来可能对，但看起来不自然。论文把缺脸当作表达力和同步性问题，而不是单纯画质问题。

要复述关键点，需要记住输出必须同时满足三件事：说什么由对话上下文决定，怎么说带有合适韵律和表情，嘴形与声音在时间上对齐且能边生成边播放。后面所有设计都是围绕这三件事展开。

### 级联做法与已有端到端做法卡在哪里

常见做法是级联。一种是文字大模型先写回复文字，再用文字转音视模型同时做声音和脸；另一种是语音对话模型先合成回复语音，再用语音驱动的说话人脸模型做脸。论文指出这两条路都有顺序依赖：文字丢掉了韵律细节，合成语音也只剩声学线索，下游做脸时看不到上游模型里的对话意图，而且必须等前一段做完才能做后一段，延迟累加、误差也会跨阶段传播。

已有端到端工作只有 X-Streamer 和 Ex-Omni-2D 等少数。X-Streamer 用冻结语音大模型带一个 Actor 交错生成文字和语音单元，再用分块自回归扩散合成视频隐变量；Ex-Omni-2D 用大模型生成视觉计划加另一路语音生成器产生的语音单元，再条件控制扩散视频生成器。论文认为它们都要迭代生成时空视频隐变量，视觉合成计算负担重，做不到逼真视觉的实时流式生成。

**级联系统 × 端到端联合生成：** 级联系统指先由 Fun-Audio-Chat 给出文字或语音，再接 FLOAT、InfiniteTalk 或 Talker-T2AV 做脸，中间的文字丢掉韵律，合成语音只剩声学线索，下游看不到对话上下文；端到端联合生成指 JAVIS 让语音和脸都从同一个 Ht 长出来，共享上游大语言模型的上下文，组合的意义是保留意图、减少等待完整语音的时间，并让唇动和表情与语音天然对齐。

### JAVIS 要处理的具体输入和必须保留的信息

给定一次用户语音查询、至多 3 轮的对话历史和一张参考肖像，JAVIS 要生成最终助手回复的语音和脸。难点在于两路输出节拍不同但必须对齐：语言模型在 5 Hz 上想内容，语音单元和视频帧需要在 25 Hz 上落实。

如果先把 5 Hz 意图压缩成文字或完整语音，就会丢失下一段嘴形需要的未来音素信息和表情需要的情绪上下文。JAVIS 的选择是不压缩到可读中间模态，而是保留一个高维隐表示，让两路都从它长出来。

举例说明：用户说“I passed my interview today!”，系统不仅要回“That’s awesome...” 这句话，还要配上高兴表情和张开的嘴形。如果表情模块只能看到回复文字，它可能给出中性脸；只有看到上游理解到的高兴意图，才能直接生成笑脸。

### 整体流程如何做到边想边说边动

JAVIS 建立在预训练的 Fun-Audio-Chat 之上，它本来是 5 Hz 共享大语言模型加 25 Hz 语音精炼头的结构，适合流式语音。JAVIS 把语音精炼头用 LoRA 改造成 Joint Refined Head，中文可理解为联合精炼头，首次出现这里解释为同时服务语音和脸的快节拍头。它的隐状态就是统一音视表示 Ht。

流程沿一个样本走：用户语音进入共享大语言模型做一次前向，得到第 t 步输出；该输出被拆成 5 个条件向量，联合精炼头自回归地结合前一个语音单元的嵌入走五步，采样出 5 个语音单元 St，同时把五步隐状态堆成 Ht；Ht 同时送往左侧语音分支和右侧动作分支，分别增量解码成声音片段和 5 帧脸部动作，再一起播放。下一块继续，不必等整句语音合成完。

下面这张总览图把上述并行关系画得很直观，读图时关注输入如何一次进入、两路如何同时出来。

> **看图路径：** 1. 先看左侧用户语音波形与文字如何进入中间 JAVIS 方框；2. 再看右侧虚线框内语音波形与三张脸是否为同一时刻并行输出；3. 注意 Low Latency 箭头表示的不是具体数值而是流式意图

[![原论文 Figure 1：Overview of JAVIS. Given user speech, JAVIS jointly generates an audio-visual response in real time.](https://arxiv.org/html/2610.22499v1/figure1-b.png)](https://arxiv.org/html/2610.22499v1/figure1-b.png)

*论文图 1。原论文 Figure 1:：“Overview of JAVIS. Given user speech, JAVIS jointly generates an audio-visual response in real time.”。*

图 1 确实可见左侧是用户输入波形配“They blamed me...”，中间是 JAVIS 方框标 Low Latency，右侧虚线框内同一句“That sounds really unfair...” 配生气表情符号，上方是语音波形，下方是同一女性 3 张连续脸，表情愤慨且嘴形不同。这帮助理解论文主张的不是先声后画，而是同一意图同时驱动两路流式输出。

### 联合精炼头怎样产生统一音视表示

联合精炼头复用了 Fun-Audio-Chat 的语音精炼头结构。共享大语言模型在 5 Hz，联合精炼头在 25 Hz，所以一个 t 对应 5 个条件向量。每个向量与前一个语音单元嵌入拼接后自回归处理，从最后一层隐状态经线性投影采样下一个语音单元。五步的隐状态堆成 Ht，维度记为 5 乘 d，d 是隐维度。

关键是 Ht 直接作为 Motion Decoder 的条件，不经过波形解码再编码。因为联合精炼头在生成全程都能注意到共享大语言模型输出和对话历史，Ht 编码的不只是语音内容，还有对话上下文。训练时冻结共享大语言模型，只训练带 LoRA 的联合精炼头和 Motion Decoder，损失是语音交叉熵加动作生成损失，逼 Ht 同时能预测准语音单元又能支撑同步的脸部动态。

读下面结构图时，先分清哪些模块冻结、哪些可训练，再看 Ht 的分叉位置。

> **看图路径：** 1. 从下往上沿用户查询到 Shared LLM 再到 Joint Refined Head 看主数据流；2. 对比左侧蓝色冻结语音链与右侧粉色动作链的分叉点都在 Ht；3. 确认 Motion Decoder 下方 Ht、Ht+1、tau、g、X_tau、M_t-1 六路输入

[![原论文 Figure 2：Network architecture. The Joint Refined Head produces a unified audio-visual representation H_t,…](https://arxiv.org/html/2610.22499v1/figure2.png)](https://arxiv.org/html/2610.22499v1/figure2.png)

*论文图 2。原论文 Figure 2:：“Network architecture. The Joint Refined Head produces a unified audio-visual representation H_t, which is fed into parallel speech and motion branches for streaming generation.”。*

图 2 确实可见底部用户查询和 Assistant 标记进入 Shared LLM，向上到 Joint Refined Head 标 Five-Times Forward 和 LoRA 火焰可训练标记，再分叉为左侧 St 经 Speech Decoder 和 Vocoder 出音频，右侧 Ht、Ht+1、tau、g、X_tau、M_t-1 进入 Motion Decoder 出 5 帧动作 Mt 再经 Motion Renderer 出 5 张脸。雪花为冻结、火焰为可训练。这正好对应文字描述的一次分叉、两路并行。

**共享大语言模型 × Joint Refined Head：** 共享大语言模型负责理解用户语音和对话历史，以 5 Hz 的慢节拍给出每一步该说什么、用什么态度说；Joint Refined Head 是在原语音精炼头上加 LoRA 改造得到的快节拍模块，以 25 Hz 把上述意图展开成五个连续向量 Ht，Ht 同时携带下一段语音内容和对应面部动作信息，是语音分支和动作分支的共同输入，组合后省掉了先转文字或先合成完整语音再做脸的中间环节。

**统一音视表示 Ht × 语音分支：** 统一音视表示 Ht 是 Joint Refined Head 最后一层隐状态堆成的 5 乘 d 矩阵，一个 t 对应 0.2 秒；语音分支从 Ht 经线性投影采样出五个语音离散单元 St，再用冻结的 CosyVoice 3 语音解码器和声码器增量转成梅尔谱和波形，Ht 保证了语音内容与对话上下文一致，语音分支只负责把已编码的内容声学化而不重新理解对话。

### 两条分支如何保持 25 Hz 对齐并流式输出

语音分支沿用 CosyVoice 3 的预训练语音解码器和声码器，训练全程冻结。基于流匹配的语音解码器把采样到的语音单元转成梅尔谱，声码器再合成波形。解码器是分块因果设计，可以在后续单元还在生成时就增量解出前面片段，实现语音流式播放。

动作分支把每帧脸表示为 FLOAT 正交运动基上的 20 维系数，5 帧一组构成 Mt，25 帧每秒下正好 0.2 秒，与 Ht 的时长对应，所以每 1 帧动作天然与一个语音单元对齐。考虑到唇动常受未来音素影响，Motion Decoder 还多看未来一块 Ht+1 作为前视，再加上上一块 Mt-1 保证时间连续，以及从参考肖像提取的参考脸状态 g，共同组成条件 ct。

Motion Decoder 本身是 8 层、隐维度 1024 的双向 Transformer，输入是条件 ct、带噪动作块 X_tau 和时间步嵌入 tau 的拼接序列，用条件流匹配目标训练。推理时等 Ht+1 就绪后，用欧拉常微分方程求解器从高斯噪声经 10 步采样出 Mt，第一块以前零动作为前块，生成后作为下一块的前块，并与对应语音片段一起流式送显。固定输入窗口使每块代价不随回复变长而增长，且只在低维系数上运算，这是低延迟的重要来源。

**统一音视表示 Ht × Motion Decoder：** Motion Decoder 是以双向 Transformer 实现的动作生成器，它不听波形而是直接以 Ht 和下一块 Ht+1 为条件，一次去噪生成五帧 20 维面部系数 Mt；统一音视表示提供说什么和什么表情，Motion Decoder 负责把这种意图变成连续、低维且时间连续的唇形和表情轨迹，之后再由冻结的 Motion Renderer 贴到参考人像上。

**前视一块 Ht+1 × 上一块动作 Mt-1：** 前视一块 Ht+1 提供未来一个音素左右的协同发音信息，用来提前收拢或张开嘴唇；上一块动作 Mt-1 提供刚生成的脸部位置，用来保证下一块从合理起点连续运动；两者与参考脸状态 g 一起组成条件 ct，前者管口型准确，后者管不抖动，缺了前者主要伤唇同步，缺了后者易出现跳变。

该分支的条件流匹配损失是下面这条公式，它约束的是预测速度场与目标速度场的均方误差。

\[\mathcal{L}_{\mathrm{motion}}=\mathbb{E}\!\left[\left\|v_{\theta}(X_{\tau},\tau;c_{t})-v\right\|^{2}\right],\]

公式中 v_theta 指 Motion Decoder，X_tau 是 tau 时刻的 noisy 动作块，ct 是上述四项条件，v 是目标速度，期望是对噪声、时间步和数据求平均。总目标是该损失加语音交叉熵损失，两项联合优化 LoRA 适配的联合精炼头和 Motion Decoder。

### 两阶段训练和 334 小时合成数据是怎样构造的

训练分 2 个阶段。第一阶段是独白复述，用 Talker-T2AV 数据集的 940,497 个单句片段，模型听输入语音并复述，同一语音及其面部动作做目标。第二阶段是对话适配，用 716,565 个样本，来自 MultiDialog、JAVIS-Syn 和部分 Seamless Interaction，每个样本带至多 3 轮上文，损失只加在最后一条助手回复上。2 阶段都只训练联合精炼头的 LoRA 适配器和 Motion Decoder，其余冻结，LoRA 秩 16、alpha 为 32，优化器 AdamW、学习率 1e-4、余弦调度、批量 8，推理采样用 10 步欧拉、噪声温度 0.7。

JAVIS-Syn 是为补 expressive 多轮对话加助手式问答而造的 334 小时合成库。来源有三：DailyTalk 和 ShareChatX-Emotion 提供带 utterance 级情绪标签的多轮对话，VoiceAssistant-400K 提供助手式问答。因为后者原配音是单一音色，论文用 CosyVoice 3 借 EARS 参考音重合成答案音并统一标中性情绪。DailyTalk 和 ShareChatX-Emotion 的每句按情绪标签渲染，VoiceAssistant 只保留用户问句音频、只渲染助手答句为中性表情视频。视频由可情绪提示的 InfiniteTalk 按音频驱动生成，参考肖像来自 Gemini 3.1 Flash Image 生成的 1220 张正脸中性像，按性别年龄匹配，同一说话人在同一对话内用同一张像，最后用 SyncNet 按唇同步过滤。

下表是过滤后的构成，读表时注意时长只计视频话语部分，VoiceAssistant 的用户问句音频不计入。

| Dialogue Source | # Dialogues | # Video Utterances | Duration (h) |
| --- | --- | --- | --- |
| DailyTalk | 2,006 | 18,400 | 20.10 |
| ShareChatX-Emotion | 26,169 | 195,908 | 263.89 |
| VoiceAssistant-400K† | 11,472 | 11,472 | 50.13 |
| Total | 39,647 | 225,780 | 334.13 |

从构成看，ShareChatX-Emotion 占大头，为 263.89 小时、195,908 条视频话语，DailyTalk 为 20.10 小时、18,400 条，VoiceAssistant 为 50.13 小时、11,472 条，总计 39,647 段对话、225,780 条视频、334.13 小时。合成的好处是正脸清晰、唇部可见、情绪可控，代价是仍是合成人脸和合成情绪，不能代表真实对话视频的遮挡、模糊和多样光照，论文把该库作为补充监督而非真实分布证明。

### 在什么数据和指标下比较，延迟如何定义

评测用训练未见过的 VStyle 的 140 个样本。对比包括一个端到端系统 Ex-Omni-2D 的 Teacher 检查点，和 3 个级联系统：Fun-Audio-Chat 分别接 FLOAT、接 4 步蒸馏版 InfiniteTalk、接 Talker-T2AV。因为 Fun-Audio-Chat 同时产文字和语音，前两者用其语音输出做脸记为 s2s，后者用其文字输出同时做声画记为 s2t。

视频侧用 VBench 的图像质量 IQ、主体一致性 SC、运动平滑性 MS，唇同步用 LSE-C 越高越好、LSE-D 越低越好；语音侧用 UTMOS 自然度越高越好、SpkSIM 说话人相似度越高越好、WER 词错率越低越好。效率侧初始延迟定义为第一段音频和视频包都就绪的时间，实时因子 RTF 是总生成耗时除以生成回复时长，RTF 小于 1 表示快于实时。延迟在两块 RTX 4090 上对 5 个查询平均。

**LSE-C × LSE-D：** LSE-C 和 LSE-D 都是用 SyncNet 类唇同步判别思路得到的客观分数，LSE-C 是同步置信度，越高表示嘴形与音频越可能对齐，LSE-D 是同步距离，越低表示音画偏差越小；两者只衡量对齐程度，不评价图像是否好看或表情是否合情理，所以论文还要另用 VBench 的图像质量、主体一致性、运动平滑性和人工打分来补全。

主观评测从 VStyle 按情绪均衡抽 30 个查询，26 名评分者听用户语音后看回复视频，在 1 到 5 分上评音画同步、动作自然度、表情恰当性，给出均值与 95% 置信区间。消融看去掉前视、去掉 JAVIS-Syn、只留第一阶段的效果，指标用 IQ、LSE-C、LSE-D、WER、UTMOS。

### 客观质量比较回答了什么

下表比较的是同一 140 个 VStyle 样本上各系统的音画同步、视频质量和语音质量，箭头表示好坏方向，加粗最好、下划线第二。公平条件是同一评测集、同一参考人像逻辑下生成完整回复，指标方向按表头。

| Method | AV sync | AV sync | Video quality | Video quality | Video quality | Speech quality | Speech quality | Speech quality |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | LSE-C ↑ | LSE-D ↓ | IQ ↑ | SC ↑ | MS ↑ | WER (%) ↓ | UTMOS ↑ | SpkSIM ↑ |
| FAC (s2s) + FLOAT | 7.94 | 8.26 | 0.743 | 0.989 | 0.9928 | 0.41 | 4.20 | 0.689 |
| FAC (s2s) + InfiniteTalk | 9.59 | 6.86 | 0.754 | 0.991 | 0.9936 | 0.41 | 4.20 | 0.689 |
| FAC (s2t) + Talker-T2AV | 8.72 | 7.04 | 0.738 | 0.994 | 0.9954 | 0.54 | 3.79 | 0.575 |
| Ex-Omni-2D | 5.24 | 11.06 | 0.734 | 0.991 | 0.9947 | 0.31 | 4.32 | 0.525 |
| JAVIS | 9.59 | 6.74 | 0.744 | 0.993 | 0.9935 | 0.44 | 4.29 | 0.701 |

从数字看，JAVIS 的 LSE-C 为 9.59、LSE-D 为 6.74，是全场最好的同步，追平 InfiniteTalk 级联的 LSE-C 9.59 但距离更低。视频质量上 JAVIS 的 IQ 0.744、SC 0.993、MS 0.9935，与专用人脸模型相当，没有明显拉开。语音侧 WER 0.44%、UTMOS 4.29、SpkSIM 0.701，保持了预训练语音能力，UTMOS 和 SpkSIM 甚至略高于原始 Fun-Audio-Chat 链路的 4.20 和 0.689。反例是 Ex-Omni-2D 的 LSE-C 仅 5.24、LSE-D 高达 11.06，同步明显差。限制是这些自动指标只在 140 样本和合成训练分布下成立，且 IQ 等差异很小，不能推出任意身份和长对话都同样好。

### 延迟和实时性差距有多大

下表比较的是同一硬件下各系统开始回应前要等多久，以及整体是否快于实时。延迟指音频和视频第一包都可用的时间，RTF 是总耗时除以回复时长，越低越好，回复长度 Len 一并列出以防长短不一造成误读。

| System | Latency (s) ↓ | RTF ↓ | Len. (s) |
| --- | --- | --- | --- |
| FAC + FLOAT | 6.73 | 0.569 | 11.8 |
| FAC + FLOAT (2 s chunks) | 2.09 | 0.560 | 11.8 |
| FAC + InfiniteTalk | 252.0 | 20.9 | 11.8 |
| FAC + Talker-T2AV | 113.3 | 10.8 | 10.5 |
| Ex-Omni-2D | 1210.7 | 116.6 | 10.5 |
| JAVIS | 1.27 | 0.541 | 12.1 |

JAVIS 延迟 1.27 秒、RTF 0.541、回复长 12.1 秒，是全场最低延迟且唯一明显快于实时的端到端方案。相对值上，它比 FAC 加 FLOAT 的 6.73 秒快约 5.3 倍，比 FLOAT 分块流式版的 2.09 秒还低约 39%。与另三者差距更大：FAC 加 InfiniteTalk 需 252.0 秒、FAC 加 Talker-T2AV 需 113.3 秒、Ex-Omni-2D 需 1210.7 秒才开始回应，且 RTF 远大于 10。论文摘要的约 200 倍是指与 FAC 加 InfiniteTalk 相比，252.0 除以 1.27 约 198 倍，同时唇同步追平该强基线。限制是该延迟只在两块 RTX 4090、平均 5 个查询下测得，换硬件或长回复时数值会变，且未计入用户端网络和渲染开销。

### 人工听看后觉得表情是否合情理

下表是 26 人对 30 条情绪均衡查询的主观打分，均为 5 分制越高越好，括号为 95% 置信区间。比较问题是自动同步分数高是否等于人觉得同步和表情合适。

| Method | AV | Motion | Facial Expression |
| --- | --- | --- | --- |
| Method | Sync ↑ | Naturalness ↑ | Appropriateness ↑ |
| FAC + FLOAT | 3.70 ± 0.15 | 3.50 ± 0.15 | 3.25 ± 0.15 |
| FAC + InfiniteTalk | 4.25 ± 0.11 | 4.02 ± 0.11 | 3.44 ± 0.14 |
| FAC + Talker-T2AV | 3.87 ± 0.13 | 2.13 ± 0.12 | 1.78 ± 0.11 |
| Ex-Omni-2D | 1.93 ± 0.13 | 2.19 ± 0.13 | 2.15 ± 0.14 |
| JAVIS | 4.37 ± 0.10 | 3.92 ± 0.13 | 3.76 ± 0.16 |

JAVIS 音画同步 4.37 正负 0.10 为最高，动作自然度 3.92 正负 0.13 与 FAC 加 InfiniteTalk 的 4.02 正负 0.11 置信区间重叠，可视为相当，表情恰当性 3.76 正负 0.16 为全场最好，明显高于 FAC 加 InfiniteTalk 的 3.44 和 FAC 加 FLOAT 的 3.25。反例是 FAC 加 Talker-T2AV 动作自然度仅 2.13、表情恰当性仅 1.78，Ex-Omni-2D 三项都在 2 左右。论文解释是端到端分支能看到编码用户问询上下文的隐状态，而级联只看回复文字或语音。限制是样本仅 30 条、评分者 26 人，结论只在该情绪分布和参考人像范围内成立，不能推广为所有场景表情都恰当。

### 拿掉前视、拿掉合成数据各会损失什么

下表是消融，比较问题是前视信息和 JAVIS-Syn 各自对唇同步与语音质量的贡献，指标方向按表头，数值保留原文精度。

| Model | IQ↑ | LSE-C↑ | LSE-D↓ | WER (%)↓ | UTMOS↑ |
| --- | --- | --- | --- | --- | --- |
| JAVIS | 0.744 | 9.59 | 6.74 | 0.44 | 4.29 |
| w/o lookahead | 0.744 | 8.80 | 7.55 | 0.37 | 4.31 |
| w/o JAVIS-Syn | 0.737 | 6.71 | 8.72 | 1.21 | 4.03 |
| Stage 1 only | 0.734 | 6.17 | 8.79 | 13.91 | 3.74 |

去掉 Ht+1 前视后，LSE-C 从 9.59 降到 8.80，LSE-D 从 6.74 升到 7.55，IQ 保持 0.744，WER 和 UTMOS 基本不变，说明前视主要伤口型而不伤画质和语音。去掉 JAVIS-Syn 后，LSE-C 掉到 6.71、LSE-D 升到 8.72，WER 升到 1.21%、UTMOS 降到 4.03，论文归因于合成库的清晰正脸和可见唇动提供了比现有对话视频更可靠的监督，后者常有遮挡模糊。只留第一阶段独白训练时最差，WER 高达 13.91%、LSE-C 仅 6.17，说明对话适配对生成合适回复必不可少。未胜出项是去掉前视的 WER 反而略好 0.37%，但差异小且同步变差，不能理解为去掉前视有益。

### 这些结论在什么条件下才成立

客观和主观优势都建立在 VStyle 未见集上，主结果 140 条、主观 30 条，身份来自合成肖像池，训练含大量合成视频，真实遮挡、侧脸、嘈杂音频下的表现尚未评测。延迟结论绑定两块 RTX 4090 和短回复长度，RTF 0.541 不等于任意长度都实时，首包快也不等于全程不卡顿。

指标本身也有边界：LSE-C 和 LSE-D 只反映 SyncNet 判别下的对齐，不等同于人感知的自然度；VBench 的 SC 和 MS 接近 1 时区分度小；WER 0.44% 等是在干净评测上的可懂度，不能推出情感韵律都好。论文未报告多次随机种子的方差、长对话的漂移、以及不同性别年龄肖像的分组结果，这些都是复现时需要补的验证。

论文正文说 JAVIS-Syn 在接受后公开，目前还没有能确认可以取得的作者代码、模型或数据资源，所以不能写成已可下载。

### 要复现第一步做什么，需要哪些条件

复现应先按论文 2 阶段准备数据：第一阶段用 Talker-T2AV 单句做复述，第二阶段用 MultiDialog 加自制合成加部分 Seamless Interaction 做对话适配，每样本带至多 3 轮上文且损失只算最后助手回复。模型侧冻结共享大语言模型、CosyVoice 3 语音解码器声码器和 Motion Renderer，只训练联合精炼头的 LoRA 和 8 层 Motion Decoder，LoRA 秩 16、alpha 32，AdamW 学习率 1e-4、余弦、批量 8。

动作表示必须与论文一致：FLOAT 正交基 20 维系数、5 帧一组、25 帧每秒，前视 Ht+1、上一块 Mt-1、参考脸状态 g 缺一不可，推理用 10 步欧拉、温度 0.7，首块以前零动作启动。评测时固定用 VStyle 的 140 条、同一参考人像逻辑，记录 LSE-C、LSE-D、IQ、SC、MS、WER、UTMOS、SpkSIM，并另测双卡延迟与 RTF。关键超参数和信息条件都在上文，缺的是具体数据划分脚本和肖像池，合成部分需自行用 InfiniteTalk 和 SyncNet 过滤复刻。

### 什么时候值得尝试，还缺哪项验证

当任务需要语音和脸同时流式输出、且能接受合成人脸风格时，值得尝试这种单表示分两支的思路，它省掉等完整语音的时间，并在本评测条件下同步和表情恰当性更好。如果只需要语音对话或离线高画质视频，级联专用模型可能更简单。

还缺的验证包括真实对话视频上的泛化、长多轮的表情一致性、不同硬件下的延迟分布，以及去掉合成数据后用真实 expressive 数据的对照。未来工作提到全双工带聆听行为，这超出了当前只做说话回复的范围。总体看，JAVIS 是朝实时音视对话迈出的实用一步，但其实用性仍受限于合成训练分布和特定评测条件。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.22499v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-19/)
