---
title: "When Text Misleads: Inconsistent-Aware Reasoning for Audio-Grounded Dialogue"
date: 2026-08-29
draft: false
tags: [语音交互, 音频理解, 语音情感识别, 大语言模型, 基准测试]
categories: [论文速递]
description: "语音交互 | 6.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.27176"
paper_digest_manual_depth: "full-text-evidence-v6"
paper_digest_v6_runtime_mode: "production"
paper_digest_reader_longform: "reader-longform-v2"
paper_digest_reader_longform_sha256: "1f89fe2114957de5101ec9a58bacece1218f0e5b271cfb3a4ccfe92e5a9e043e"
paper_digest_reader_article_sha256: "908edf29e038d6b3b0764c97ebd78ce31dab909ba6f1f40d7a89722360d3dd76"
paper_digest_artifact_index_sha256: "f2416ed8074236af59fc1e1743f83b6b360027832ce4b7933edb4e41ad2306b5"
paper_digest_v6_spec_root_sha256: "f2d0970bf3818d00dc60b62261b2e976e09ffc533922df457ff1ca4c8fa5be4c"
paper_digest_v6_paper_spec_sha256: "797a94b31bd9fa215e1a5acfeb77f9cc87525a4f78dbcdd5f7fcf3e608d50745"
paper_digest_v6_sealed_record_sha256: "8227d49958564b45a89ec3f197a6f6cf585f9c243162f5dd3f8ce5c0b71e127d"
paper_digest_v6_record_file_sha256: "91b704e45cbc15c5e04f8ee85a2e73680414f1b5b12822509ec1495605a82222"
paper_digest_v6_artifact_index_file_sha256: "d4b04fd9564118ef77d10d6c1fba9c6ccaeba05188ad61ad811872f53395f3a2"
paper_digest_v6_records_envelope_file_sha256: "252e8a70d8d2c925b492f47a5c6f09500e7f49de771e25e28e88349d7f1a2054"
paper_digest_v6_task_evidence_sha256: "e480d0b225dc5701e3f2dac42524f26c7df2e961713294c1b15158303b5e24a7"
---

# 📄 当文字与说话方式相互矛盾：如何检验并实现语音扎根对话推理

> 英文题目：*[When Text Misleads: Inconsistent-Aware Reasoning for Audio-Grounded Dialogue](https://arxiv.org/abs/2608.27176)*
>
> 一句话：**本文以分歧/一致双切分诊断转写捷径，并以 Audio Twin 证据链测试选择性声学仲裁。**

> 标签：#语音交互 #音频理解 #语音情感识别 #大语言模型 #基准测试
>
> 评分：**6.0/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.9/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.2/0.5 | 工程/实践 0.4/1.5


### 💬 毒舌点评

这篇工作的优点是把冲突题测改判、一致题测克制拆成同一评测的两面,并让 Audio Twin 不是音频副本,而是与转写话轮对齐、可由文本推理器读取的声学证据集合。配对表进 1 步要求同时看冲突准确率、误导率与一致准确率,使“支持音频输入”不再被轻易等同于真正的声学落地。

最大的不足是整机结果没有直接组件消融,不能把差异归因于单个证据族或检索步骤。501 道受控题足以揭示 1 个重要失败模式,却不足以代表真实世界口语理解的全部复杂性;没有延迟、吞吐、成本、隐私、安全和跨域鲁棒性数据,也不能把这一接口直接包装成成熟部署方案。

### 📌 核心摘要

#### 先把“听见”变成可检验的问题

声音是否在该改判时改变答案,并在不该改判时保持稳定。本文以分歧/一致双切分诊断转写捷径,并以 Audio Twin 证据链测试选择性声学仲裁。冲突题测模型是否改判,一致题测模型是否保持克制。

想象邻居在谈完家人之后说了一声 “Mm-hmm”,接着才吞吞吐吐地提起噪声投诉。只看转写,这个词很像普通的“我还在听”;真正听音频,却会发现它持续约 2.46 秒,比这位说话人平常的回应更慢、更轻,音高更高且变化更大,后面还跟着 “Oh, oh, okay” 和 “Is, is, yeah, I’m so sorry” 这样的重启。于是,同一个词更像是在为难以启齿的话题争取时间。这个反例把口语对话理解的核心困难说透了:文字告诉我们“说了什么”,韵律、停顿、重叠和说话方式则可能改变“这句话在互动中做了什么”。

这里的输入不是 1 段孤立音频,而是 1 段带说话人和时间信息的对话、对应转写、1 个问题以及 4 个候选答案;输出是四选一的解释。论文关心 5 种话语层现象:互动行为(IB)关注轮次、犹豫、重叠和打断;情绪状态(ES)关注愤怒、平静、压力等情感;会话意图(CI)关注隐含交际目标;对话行为(DA)关注请求、拒绝等话语功能;社会立场(SS)关注礼貌、权威等社会态度。大型语言模型(LLM)若只靠转写中的词义也能答对,不能据此证明它使用了声音。

为避免后文表格简称造成障碍,先固定本文用语:LLM 是大型语言模型,即根据文本上下文产生或判断语言输出的模型;IB 是互动行为,即话轮、重叠和犹豫等交互线索;ES 是情绪状态,即说话传递的情感状态;CI 是会话意图,即一句话隐含的交际目标;DA 是对话行为,即请求、拒绝等话语功能;SS 是社会立场,即礼貌或权威等社会态度;AT 是 Audio Twin 的简写,表示结构化声学证据接口。结果表中,V3 是 DeepSeek V3.1 的表中名称,R1 是 StepAudio-R1 的表中名称,GPT 是 GPT-4o-Audio-Mini 所属的模型命名缩写,K2 是 Kimi K2 Thinking 的表中名称,A3B 是 Qwen3-Omni 的 active-parameter 规格标签。硬件描述里,A100 是论文报告的 GPU 型号,GB 是内存容量单位 gigabyte。

已有评测常走 2 条看似合理却不充分的路线。第一条把转写与音频当成互补输入,让模型自行融合;问题是转写往往更容易利用,模型可能形成“文字捷径”,让音频在功能上变得可有可无。第二条直接把原始音频交给 Audio-LLM;这保证了模型能够访问声音,却不保证它会定位到问题相关的话轮、用同一说话人的常态作比较,或在文字与声音冲突时真的采信声学证据。ContraTalk 因而不问“模型有没有音频接口”,而问“声音是否在该改判时改变答案,并在不该改判时保持稳定”。

论文把同一问题放进 2 个互补条件。冲突题中,转写支持 1 个“表面上合理、实际错误”的答案,声音及互动线索支持另 1 个金答案;一致题中,转写和声音支持同一个答案。前者测模型能否推翻文字直觉,后者测模型会不会因为接入声音而扰乱原本正确的判断。2 类题必须一起看,否则 1 个总是相信音频的系统也可能在冲突题上看似优秀,却在普通对话中频繁误改。

本文以分歧/一致双切分诊断转写捷径,并以 Audio Twin 证据链测试选择性声学仲裁。

这带来一句可证伪的核心判断:如果显式、局部化的声学证据确实比隐式接入原始音频更利于仲裁,那么它应在冲突题上提高准确率、降低选择文字诱导项的比例;与此同时,若接口是校准的,一致题准确率不应明显崩落。只出现前半部分而没有后半部分,最多说明系统更愿意改答案,不能说明它已学会何时该改。

第一条相关工作谱系研究模态偏置与捷径学习。视觉问答早已发现模型可能利用语言先验;对话情绪识别也常由文字特征主导。已有音频语言评测扩展了理解、组合推理和指令跟随能力,但多数任务让模态合作、互补或各自可用。ContraTalk 的差别不是再加 1 种音频题型,而是专门构造“文字解释可信却错误”的区域,使跨模态分歧成为成功作答的必要条件。

第二条谱系是推理—行动式编排:中心语言模型先分解任务,再调用感知工具或检索模块。结构化数字孪生也曾用于把手术室等环境状态转成可由语言模型读取的对象。Audio Twin 延续“把感知状态显式化”的思想,但目标从补充信息变成证据仲裁:先找相关话轮,再取出相应声学条目,最后逐候选比较文字、局部语境与声音是否支持。论文没有训练 1 个新的端到端音频编码器;它研究的是 1 种把现成声学前端与文本推理器接起来的接口。

更精确地说,二者都把感知状态变成语言模型可读取的对象;ContraTalk 的目标不是补充 1 个协作信息源,而是仲裁转写解释与声学解释之间的认识冲突。文中也把这种流程放入“推理—行动”式编排的脉络;其具体贡献不是训练 1 个新的端到端听觉编码器,而是规定先定位、再取证、最后比较的接口。

### 🔗 开源与复现资源

未报告可核验代码许可证。

### 🧭 深度解读

#### 先把“听见”变成可检验的问题

想象邻居在谈完家人之后说了一声 “Mm-hmm”,接着才吞吞吐吐地提起噪声投诉。只看转写,这个词很像普通的“我还在听”;真正听音频,却会发现它持续约 2.46 秒,比这位说话人平常的回应更慢、更轻,音高更高且变化更大,后面还跟着 “Oh, oh, okay” 和 “Is, is, yeah, I’m so sorry” 这样的重启。于是,同一个词更像是在为难以启齿的话题争取时间。这个反例把口语对话理解的核心困难说透了:文字告诉我们“说了什么”,韵律、停顿、重叠和说话方式则可能改变“这句话在互动中做了什么”。

这里的输入不是一段孤立音频,而是一段带说话人和时间信息的对话、对应转写、一个问题以及四个候选答案;输出是四选一的解释。论文关心五种话语层现象:互动行为(IB)关注轮次、犹豫、重叠和打断;情绪状态(ES)关注愤怒、平静、压力等情感;会话意图(CI)关注隐含交际目标;对话行为(DA)关注请求、拒绝等话语功能;社会立场(SS)关注礼貌、权威等社会态度。大型语言模型(LLM)若只靠转写中的词义也能答对,不能据此证明它使用了声音。

为避免后文表格简称造成障碍,先固定本文用语:LLM 是大型语言模型,即根据文本上下文产生或判断语言输出的模型;IB 是互动行为,即话轮、重叠和犹豫等交互线索;ES 是情绪状态,即说话传递的情感状态;CI 是会话意图,即一句话隐含的交际目标;DA 是对话行为,即请求、拒绝等话语功能;SS 是社会立场,即礼貌或权威等社会态度;AT 是 Audio Twin 的简写,表示结构化声学证据接口。结果表中,V3 是 DeepSeek V3.1 的表中名称,R1 是 StepAudio-R1 的表中名称,GPT 是 GPT-4o-Audio-Mini 所属的模型命名缩写,K2 是 Kimi K2 Thinking 的表中名称,A3B 是 Qwen3-Omni 的 active-parameter 规格标签。硬件描述里,A100 是论文报告的 GPU 型号,GB 是内存容量单位 gigabyte。

已有评测常走两条看似合理却不充分的路线。第一条把转写与音频当成互补输入,让模型自行融合;问题是转写往往更容易利用,模型可能形成“文字捷径”,让音频在功能上变得可有可无。第二条直接把原始音频交给 Audio-LLM;这保证了模型能够访问声音,却不保证它会定位到问题相关的话轮、用同一说话人的常态作比较,或在文字与声音冲突时真的采信声学证据。ContraTalk 因而不问“模型有没有音频接口”,而问“声音是否在该改判时改变答案,并在不该改判时保持稳定”。

#### 冲突与一致各在测什么

论文把同一问题放进两个互补条件。冲突题中,转写支持一个“表面上合理、实际错误”的答案,声音及互动线索支持另一个金答案;一致题中,转写和声音支持同一个答案。前者测模型能否推翻文字直觉,后者测模型会不会因为接入声音而扰乱原本正确的判断。两类题必须一起看,否则一个总是相信音频的系统也可能在冲突题上看似优秀,却在普通对话中频繁误改。

本文以分歧/一致双切分诊断转写捷径,并以 Audio Twin 证据链测试选择性声学仲裁。

这带来一句可证伪的核心判断:如果显式、局部化的声学证据确实比隐式接入原始音频更利于仲裁,那么它应在冲突题上提高准确率、降低选择文字诱导项的比例;与此同时,若接口是校准的,一致题准确率不应明显崩落。只出现前半部分而没有后半部分,最多说明系统更愿意改答案,不能说明它已学会何时该改。

#### 与既有基准和代理式推理的关系

第一条相关工作谱系研究模态偏置与捷径学习。视觉问答早已发现模型可能利用语言先验;对话情绪识别也常由文字特征主导。已有音频语言评测扩展了理解、组合推理和指令跟随能力,但多数任务让模态合作、互补或各自可用。ContraTalk 的差别不是再加一种音频题型,而是专门构造“文字解释可信却错误”的区域,使跨模态分歧成为成功作答的必要条件。

第二条谱系是推理—行动式编排:中心语言模型先分解任务,再调用感知工具或检索模块。结构化数字孪生也曾用于把手术室等环境状态转成可由语言模型读取的对象。Audio Twin 延续“把感知状态显式化”的思想,但目标从补充信息变成证据仲裁:先找相关话轮,再取出相应声学条目,最后逐候选比较文字、局部语境与声音是否支持。论文没有训练一个新的端到端音频编码器;它研究的是一种把现成声学前端与文本推理器接起来的接口。

更精确地说,二者都把感知状态变成语言模型可读取的对象;ContraTalk 的目标不是补充一个协作信息源,而是仲裁转写解释与声学解释之间的认识冲突。文中也把这种流程放入“推理—行动”式编排的脉络;其具体贡献不是训练一个新的端到端听觉编码器,而是规定先定位、再取证、最后比较的接口。

#### 基准如何从对话里长出来

ContraTalk 来自 Seamless Interaction Dataset 的带标签测试集。构建过程先让文本推理器仅根据转写给五类话语现象作表面解释,再把这些解释与说话人提示所给的候选实现意图比较。说话人提示只在构建阶段用于提出候选标签,不在评测时交给模型;最终答案还要经过人工核验。冲突区域用于生成“声音支持金答案、文字解释成为诱导项”的四选一题,一致区域则生成文字与声音共同支持答案的题。

[![ContraTalk 的跨模态分歧与人工核验流程](https://arxiv.org/html/2608.27176v1/disagreement_verification2.png)](https://arxiv.org/html/2608.27176v1/disagreement_verification2.png)

图 2 的阅读重点是候选如何从“分歧”进入人工核验,而不是把构建期提示误当成评测输入。跨模态分歧和人工核验放在同一管线中。它表明冲突题和一致题都经过质量控制,也提醒读者:基准标签不是未经检查的自动标签,但人工复核并未覆盖全部样本。

[![从文字表面解释到多轮质量控制的构建管线](https://arxiv.org/html/2608.27176v1/pipeline_overview3.png)](https://arxiv.org/html/2608.27176v1/pipeline_overview3.png)

图 4 把更细的构建顺序串起来:先捕获文字表面解释,再找分歧区域、生成问答、经过多轮质控。自动环节还包含只给问题和选项的泄漏测试:模型看不到转写和音频,若仍能给出与对话无关的充分理由,题目先被改写并再次测试;第二轮仍可脱离对话作答的样本被删除。这张图支持“作者主动压制题面捷径”,却不能排除生成器偏好、数据源偏差或未复核样本中的残余噪声。

#### 样本规模与人工核验应怎样读

带标签测试集共有 117 段口语对话,论文使用全部对话并得到 501 道题。表 1 给出五类现象的冲突题/一致题数量;总计为 333/168。这里的计数单位是问题,不是独立对话,因此同一段对话可以贡献多个问题。

表 6 进一步回答“多少题真正被人听过并检查”。七位核验者共检查 350 道保留题,其中冲突题 230 道、一致题 120 道。核验者能看到音频、转写、问题、四个选项和拟定答案,但看不到构建期说话人提示;他们优先相信音频,并可修改答案索引、改写选项或删除无法修好的题。

在 ContraTalk 人工核验的全部保留样本中,manually review 覆盖 350 个样本,低于 501 retained benchmark examples 的总量;覆盖率不是全量人工听审。

这套程序比只做自动生成可靠,但结论应准确限定为“350 道题经过人工复核”。不能把它说成 501 道题全部逐题人工听审,也不能把 117 段受控对话视为现实场景的广泛样本。

**Table 1: Benchmark composition. Number of examples in each discourse-level category.**

| Abbr. | Category | Description | # Conflict/Consistent |
| --- | --- | --- | --- |
| IB | Interaction Behavior | Turn-taking, hesitation, overlap, or interruption | 68/34 |
| ES | Emotion State | Affect such as anger, calmness, stress, or frustration | 75/38 |
| CI | Conversational Intent | Implied communicative goal or intention | 67/34 |
| DA | Dialogue Act | Utterance function, e.g., request or refusal | 56/28 |
| SS | Social Stance | Social attitude, e.g., politeness or authority | 67/34 |
| Ovr. | Overall | Total number of benchmark examples | 333/168 |

**Table 6: Human verification summary for ContraTalk. We manually review 230 conflict cases and 120 consistent cases, covering 350 of the 501 retained benchmark examples. Conflict cases are checked for answerability, speech-grounded evidence, and surface-distractor quality, while consistent cases are checked to ensure that transcript-supported and speech-grounded interpretations are aligned.**

| Subset | # Cand. | # Reviewed | Major Failure Modes |
| --- | --- | --- | --- |
| Conflict cases | 333 | 230 | Ambiguous acoustic evidence; weak surface distractor; unclear audio grounding |
| Consistent cases | 168 | 120 | Transcript-answer mismatch; answer leakage; near-duplicate options |
| Final retained benchmark | 501 | 350 | – |

#### Audio Twin:让声学证据有位置可查

Audio Twin(AT)不是音频副本,而是与转写话轮对齐、可由文本推理器读取的声学证据集合。前端用 Whisper 获得带时间戳的转写与话轮片段;用 Parselmouth 提取响度、基频和音高变化;用 Vox-Profile 估计说话人属性、流利度、效价、唤醒度、支配度和类别情绪。随后,每条声学观察与对应说话人、话轮和局部时间位置绑定。

[![结构化声学证据如何进入推理器](https://arxiv.org/html/2608.27176v1/figs/audio_twin3.png)](https://arxiv.org/html/2608.27176v1/figs/audio_twin3.png)

图 3 要看的不是“音频被转成文字”这么简单,而是证据的层级:结构化声学证据从语音流向一个可供推理器检索的表示。话轮卡记录单次发言的音高、响度、语速、前后停顿、重叠、情绪和流利度;说话人基线卡概括此人的惯常表达;对话动态卡记录轮次数、说话时长、重叠次数与响应延迟。局部窗口、上下文块、代表性话轮和双说话人比较则按问题需要补充。图中可见的结构支持“声学线索可被定位和比较”,但其正确性仍依赖转写、对齐和属性估计前端。

对齐先用时间戳重叠。覆盖目标转写话轮时长至少一半时,可靠性标为高;有正重叠但不足一半时标为中。若时间戳不足,系统退回到转写文本相似度,最低相似度为 0.50;仍失败时按同一说话人的话轮顺序匹配并标为低,无同说话人片段则标为缺失。说话人相对描述也有明确规则:同一说话人至少有四个观测时,用阈值 ±0.75 的标准化分数标记“低于通常、通常、高于通常”;观测不足时,用低于均值 0.75 倍和高于均值 1.25 倍作替代。

#### 从定位到仲裁的三段证据链

[![转写捷径会使声学信息被忽略](https://arxiv.org/html/2608.27176v1/figs/intro_modality_shortcut_4.png)](https://arxiv.org/html/2608.27176v1/figs/intro_modality_shortcut_4.png)

读图时先看信息竞争关系:图 1 把可直接读取的转写与承载副语言信息的声音并列,强调现有基准容易奖励前者。换句话说,转写捷径会遮蔽承载副语言信息的声学证据。它支持“高分可能来自文字捷径”这一问题设定,却没有证明任何具体模型一定忽略音频;后者必须由冲突与一致条件下的行为对照来检验。

推理开始时,系统不会把整个对话和所有声学条目一股脑交给最终回答器。第一段是定位:一个只负责导航的模块从带行号转写中选择目标话轮、前后语境、同说话人参照和另一说话人反应,不允许提前选答案。第二段是取证:根据题目类别,系统从五种计划中选择情绪状态、互动行为、说话人风格、局部韵律或说话人比较,并取回相应话轮卡、基线卡、上下文块和对话动态。第三段才是仲裁:逐个候选询问“如果它正确,需要什么条件”,再分别检查转写、局部语境、声学证据和反证。

每种计划还限制锚点数量。情绪、说话人风格和局部韵律选择 3–6 条转写线;互动行为与说话人比较选择 4–6 条。说话人比较必须包含双方证据;互动行为必须包含交流片段和对话动态。若必需证据缺失,系统仍可能被迫给出四选一答案,但运行会标记为取证不完整。这个设计把“找到了相关文字”与“拿到了相应声音证据”区分开,错误也能定位到导航、取证、验证或最终判断。

六个论文公式分别形式化文本/音频双视图、冲突与一致条件、Audio Twin 构造、锚点选择、证据检索和最终回答。本文不逐式重排,因为它们的计算语义已经完整体现在上述三段流程中;真正影响复现的不是符号本身,而是定位器不能答题、证据计划不能越权、取回条目必须通过类别与说话人检查、最终引用只能来自已取回证据这些操作约束。

#### 一个“Mm-hmm”如何推翻文字直觉

论文附录给出问题 i031。定位器选中第 21、25、26、27、28 和 29 行:第 26 行是目标 “Mm-hmm”,第 21 行是同一说话人较早的中性回应,后续话轮包含犹豫重启和噪声投诉。互动行为计划取回目标话轮、局部窗口、说话人基线和对话动态;本次验证显示缺失证据为空,声学证据条目数为 9,因此才允许答案器进行候选比较。

孤立转写最支持“中性地表示继续倾听”。局部序列却显示它位于从家庭话题转向面子威胁较强的投诉之前;声学观察又显示该词拉长约 2.46 秒、语速更慢、响度更低、音高更高且变化更大。与该说话人较早的中性 “Mm-hmm” 比较后,最终选择“争取时间并为话题转换作心理准备”。这个例子说明 Audio Twin 的价值来自“同一句在同一说话人基线下是否异常”与“异常发生在怎样的互动位置”的联合判断,而不是把高音高、低响度机械映射成某个意图。

它也暴露了替代解释:如果 Whisper 切段错位、Parselmouth 的基频估计不稳、Vox-Profile 的情感判断有偏,或局部语境没有覆盖真正的转折,答案可能改变。论文展示的是整条链在一个案例中的可追踪推理,并没有通过移除某一类声学条目证明哪个前端或哪张卡单独造成收益。

#### 训练并不是本文的变量

这项工作主要是基准和推理接口评测,不是训练一个新的基础模型。实验使用现成文本模型、直接音频模型及文本模型加 Audio Twin 的组合;论文报告的是推理设置和资源上限,没有给出新的训练损失、阶段、冻结策略、优化器、batch 或更新步数。把这些未披露项说清楚很重要:复跑任务的关键是重建数据、声学前端、对齐、证据计划和推理提示,而不是猜测一个不存在的新模型训练配方。

表 7 完整列出模型简称、检查点和输入模式。自托管运行至多使用 2 张 A100 GPU、8 个 CPU、64 GB 内存和每次 24 小时;托管接口运行至多使用 2 个本地 CPU、8 GB 内存和每次 4 小时。这是上限描述,不是逐模型时延、成本或吞吐测量。

**Table 7: Model checkpoints and evaluation settings used in the experiments. The Model label column shows the shorthand names used in this work, while Checkpoint shows the models’ checkpoint identifier. Text denotes transcript-only evaluation with (T,q,C)(T,q,C), Audio denotes direct audio-input evaluation, and Audio Twin denotes evaluation with the agentic-style Audio Twin retrieval pipeline. Parameter counts are reported using public information when available. For mixture-of-experts models, total and active parameter counts are reported when available.**

| Model label | Checkpoint | Text | Audio | Audio Twin | Public size information |
| --- | --- | --- | --- | --- | --- |
| Haiku 4.5; Haiku 4.5 (agentic-style) | us.anthropic.claude-haiku-4-5-20251001-v1:0 | Yes | No | Yes | Not publicly disclosed |
| Sonnet 4.5; Sonnet 4.5 (agentic-style) | us.anthropic.claude-sonnet-4-5-20250929-v1:0 | Yes | No | Yes | Not publicly disclosed |
| Kimi K2 Thinking | moonshot.kimi-k2-thinking | Yes | No | No | 1T total, 32B active parameters |
| AudioFlamingoNext | nvidia/audio-flamingo-next-hf | No | Yes | No | 8B parameters |
| MIMOAudio | XiaomiMiMo/MiMo-Audio-7B-Instruct | Yes | Yes | No | 8B parameters |
| Qwen2.5-Omni | Qwen/Qwen2.5-Omni-7B | Yes | Yes | No | 7B parameters |
| StepAudio-R1 | Step-Audio-R1 | Yes | Yes | No | Not publicly disclosed |
| KimiAudio | moonshotai/Kimi-Audio-7B-Instruct | Yes | Yes | No | 7B parameters |
| Qwen3-Omni | Qwen/Qwen3-Omni-30B-A3B-Instruct | Yes | Yes | No | 30B total, 3B active parameters |
| Nova 2 Lite | us.amazon.nova-2-lite-v1:0 | Yes | No | No | Not publicly disclosed |
| DeepSeek V3.1 | deepseek.v3-v1:0 | Yes | No | No | 671B total, 37B active parameters |
| StepAudio-2 | stepfun-ai/Step-Audio-2-mini | Yes | Yes | No | Not publicly disclosed |
| GPT-4o-Audio-Mini | gpt-audio-mini | No | Yes | No | Not publicly disclosed |

#### 实验问题和比较口径

三组研究问题分别是:冲突题能否暴露转写捷径;一致题上模型能否保留正确判断;加入声音后行为究竟怎样变化。准确率越高越好,表示选择金答案的比例。误导率越低越好,表示在冲突题中选择“文字上合理但被声音推翻”的特制诱导项的比例。一致题没有这种诱导项,所以只报告准确率。

比较包含三类系统:只看转写的文本 LLM、直接输入原始声音的 Audio-LLM、以及检索 Audio Twin 后再推理的文本骨干。最有解释力的不是跨家族最高分,而是同一骨干从 Text 切到 Audio 或 Audio Twin 后,冲突准确率、冲突误导率与一致准确率如何共同变化。所有数值都是四选一问题上的百分比;表 5 的区间按对话而非问题重采样,因为同一对话能产生多道相关问题。

#### 冲突集:接入证据会改掉多少诱导项

表 2 很宽,下面按原表同一行次序拆成准确率与误导率两部分。两部分的类别列完全对应,不能把某模型在一个类别的准确率与另一个类别的误导率拼在一起。

文本模型在冲突题总体准确率为 33.0%–47.7%,总体误导率为 34.5%–45.0%;直接 Audio-LLM 的对应范围为 33.6%–46.8% 和 29.7%–39.9%。Audio Twin 三个骨干得到 43.2%–50.5% 的总体准确率和 29.4%–34.8% 的总体误导率。Sonnet 4.5 + AT 在这张表上以 50.5% 总体准确率和 29.4% 总体误导率构成最强组合,但仍有接近三成冲突题选择了文字诱导项。

在 ContraTalk 冲突题的 333 个冲突题条件中,Sonnet 4.5 + AT 的总体准确率为 50.5 分数,越高越好且高于 Sonnet 4.5 文字模式的 47.7,但这只支持整机差异。

在 ContraTalk 冲突题的 333 个冲突题条件中,Sonnet 4.5 + AT 的总体误导率为 29.4 分数,越低越好且低于 Sonnet 4.5 文字模式的 34.5;这表示较少选择文字诱导项。

类别结果也阻止了“一个总分代表所有能力”的说法。Sonnet 4.5 + AT 的 CI、DA 准确率分别为 55.2% 和 55.4%,但 IB、ES、SS 为 50.0%、46.7%、46.3%。整机结果支持“显式证据接口能缓解捷径”,却没有移除某一种卡片、对齐策略或前端的直接消融,因此不能把差异归因于单个证据族或检索步骤。

**Table 2: Shortcut diagnostic. We report category-wise accuracy and mislead rate across text-only LLMs, direct Audio-LLMs, and Audio Twin reasoning systems. Mislead rate measures the selection of the transcript-biased surface distractor.**

| Metric | Accuracy (越高越好) |  |  |  |  |  | Mislead Rate (越低越好) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| System | IB | ES | CI | DA | SS | Ovr. | IB | ES | CI | DA | SS | Ovr. |
| Text-only LLMs |  |  |  |  |  |  |  |  |  |  |  |  |
| DeepSeek V3.1 | 42.6 | 34.7 | 37.3 | 42.9 | 31.3 | 37.5 | 33.8 | 41.3 | 44.8 | 33.9 | 38.8 | 38.7 |
| Nova 2 Lite | 42.6 | 37.3 | 35.8 | 41.1 | 40.3 | 39.3 | 29.4 | 44.0 | 43.3 | 32.1 | 26.9 | 35.4 |
| Haiku 4.5 | 36.8 | 26.7 | 28.4 | 44.6 | 31.3 | 33.0 | 47.1 | 53.3 | 50.7 | 37.5 | 34.3 | 45.0 |
| Sonnet 4.5 | 57.4 | 40.0 | 47.8 | 50.0 | 44.8 | 47.7 | 29.4 | 41.3 | 38.8 | 32.1 | 29.9 | 34.5 |
| Opus 4.7 | 61.8 | 40.0 | 40.3 | 48.2 | 37.3 | 45.3 | 20.6 | 46.7 | 44.8 | 32.1 | 38.8 | 36.9 |
| Audio-LLMs |  |  |  |  |  |  |  |  |  |  |  |  |
| AudioFlamingoNext | 45.6 | 50.7 | 41.8 | 50.0 | 43.3 | 46.2 | 29.4 | 37.3 | 37.3 | 25.0 | 29.9 | 32.1 |
| StepAudio-R1 | 42.6 | 45.3 | 47.8 | 50.0 | 49.3 | 46.8 | 36.8 | 30.7 | 35.8 | 30.4 | 26.9 | 32.1 |
| StepAudio-2 | 44.1 | 38.7 | 37.3 | 35.7 | 40.3 | 39.3 | 22.1 | 34.7 | 32.8 | 39.3 | 20.9 | 29.7 |
| MIMOAudio | 45.6 | 44.0 | 40.3 | 46.4 | 47.8 | 44.7 | 29.4 | 33.3 | 31.3 | 32.1 | 29.9 | 31.2 |
| Qwen2.5-Omni | 44.1 | 48.0 | 49.3 | 39.3 | 41.8 | 44.7 | 33.8 | 37.3 | 31.3 | 39.3 | 25.4 | 33.3 |
| KimiAudio | 42.6 | 53.3 | 37.3 | 35.7 | 34.3 | 41.1 | 23.5 | 29.3 | 40.3 | 28.6 | 29.9 | 30.3 |
| Qwen3-Omni | 47.1 | 34.7 | 43.3 | 39.3 | 38.8 | 40.5 | 25.0 | 44.0 | 41.8 | 26.8 | 31.3 | 34.2 |
| GPT-4o-Audio-Mini | 35.3 | 36.0 | 28.4 | 32.1 | 35.8 | 33.6 | 36.8 | 40.0 | 46.3 | 42.9 | 34.3 | 39.9 |
| Audio Twin Reasoning |  |  |  |  |  |  |  |  |  |  |  |  |
| Haiku 4.5 + AT | 39.7 | 37.3 | 46.3 | 51.8 | 43.3 | 43.2 | 22.1 | 38.7 | 35.8 | 26.8 | 29.9 | 30.9 |
| Sonnet 4.5 + AT | 50.0 | 46.7 | 55.2 | 55.4 | 46.3 | 50.5 | 27.9 | 37.3 | 28.4 | 26.8 | 25.4 | 29.4 |
| Opus 4.7 + AT | 51.5 | 36.0 | 52.2 | 51.8 | 44.8 | 46.8 | 36.8 | 38.7 | 32.8 | 26.8 | 37.3 | 34.8 |

#### 一致集的基础表现

表 3 只报告准确率。为避免宽表把两类系统挤在同一行,下面按系统族拆开,但保留原表全部数值。

一致题中,强文本模型常超过 90%,Opus 4.7 达到 98.2%;这说明冲突题低分不能简单归咎于所有题都含混或选项都很差。直接音频系统差异很大,StepAudio-R1 为 89.9%,StepAudio-2 为 69.6%。Audio Twin 也依赖骨干:Opus 4.7 + AT 为 94.0%,Haiku 4.5 + AT 为 81.5%。因此“更多声学信息”不是单调增益;真正目标是让模型只在声学证据足够诊断时改判。

在 ContraTalk 一致题的 168 个一致题条件中,Sonnet 4.5 + AT 的总体准确率为 88.7 分数,越高越好但低于 Sonnet 4.5 文字模式的 96.4;声学证据会扰动正确解释。

**Table 3: Consistent-split performance. We report category-wise accuracy on examples where transcript-supported and audio-grounded answers are aligned. No mislead rate is reported because no transcript-biased distractor is defined for this split.**

| Accuracy (越高越好) |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| System | IB | ES | CI | DA | SS | Ovr. | System | IB | ES | CI | DA | SS | Ovr. |
| Text-only LLMs |  |  |  |  |  |  |  |  |  |  |  |  |  |
| DeepSeek V3.1 | 82.4 | 94.7 | 94.1 | 92.9 | 94.1 | 91.7 | Haiku | 88.2 | 94.7 | 97.1 | 96.4 | 88.2 | 92.9 |
| Nova 2 Lite | 85.3 | 92.1 | 94.1 | 89.3 | 97.1 | 91.7 | Sonnet | 91.2 | 97.4 | 100 | 100 | 94.1 | 96.4 |
|  |  |  |  |  |  |  | Opus | 97.1 | 97.4 | 100 | 100 | 97.1 | 98.2 |
| Audio-LLMs |  |  |  |  |  |  | Audio Twin Reasoning |  |  |  |  |  |  |
| AudioFlamingoNext | 85.3 | 89.5 | 91.2 | 71.4 | 97.1 | 87.5 | Haiku | 85.3 | 89.5 | 64.7 | 89.3 | 79.4 | 81.5 |
| StepAudio-R1 | 82.4 | 92.1 | 91.2 | 89.3 | 94.1 | 89.9 | Sonnet | 97.1 | 78.9 | 88.2 | 96.4 | 85.3 | 88.7 |
| StepAudio-2 | 61.8 | 65.8 | 73.5 | 60.7 | 85.3 | 69.6 | Opus | 94.1 | 94.7 | 94.1 | 96.4 | 91.2 | 94.0 |
| MIMOAudio | 82.4 | 84.2 | 88.2 | 67.9 | 88.2 | 82.7 |  |  |  |  |  |  |  |
| Qwen2.5-Omni | 79.4 | 89.5 | 76.5 | 85.7 | 88.2 | 83.9 |  |  |  |  |  |  |  |
| KimiAudio | 64.7 | 86.8 | 88.2 | 67.9 | 82.4 | 78.6 |  |  |  |  |  |  |  |
| Qwen3-Omni | 85.3 | 81.6 | 76.5 | 78.6 | 94.1 | 83.3 |  |  |  |  |  |  |  |
| GPT-4o-Audio-Mini | 91.2 | 76.3 | 76.5 | 75.0 | 97.1 | 83.3 |  |  |  |  |  |  |  |

#### 配对表如何暴露校准代价

表 4 把同一骨干的文字模式与声音模式放在一行。阅读顺序应固定为冲突准确率、冲突误导率、一致准确率,避免只挑一个改善指标。

Sonnet 4.5 是最清楚的“收益与代价并存”例子:加 Audio Twin 后,冲突准确率从 47.7% 到 50.5%,误导率从 34.5% 到 29.4%,但一致准确率从 96.4% 到 88.7%。Haiku 4.5 的声音侧冲突表现也改善到 43.2% 与 30.9%,一致准确率却是 81.5%。Opus 4.7 + AT 保持较高的一致准确率 94.0%,但仍低于其文字模式的 98.2%。

直接 Audio-LLM 同样不是整齐一致的趋势。StepAudio-R1 从文字到音频后,冲突准确率由 42.3% 到 46.8%,误导率由 34.5% 到 32.1%,一致准确率由 91.7% 到 89.9%;Qwen3-Omni 的冲突准确率则从 42.9% 到 40.5%。这些配对结果比跨模型排行榜更重要,因为它们揭示“纠正文字捷径”和“保存原本正确判断”是两个需要共同优化的能力。

在 ContraTalk 一致题的 168 个一致题条件中,StepAudio-2 直接音频的总体准确率为 69.6 分数,越高越好但低于 StepAudio-2 文字模式的 83.9;冲突改善伴随一致退化。

**Table 4: Paired text-only and speech-grounded inference. Results from Tables 2 and 3 are reorganized into matched text-only and speech-grounded pairs, enabling direct comparison across conflict and consistent splits.**

| Metric | Text-only |  |  | Speech-grounded |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| System | Conf. Acc. (越高越好) | Mis. (越低越好) | Cons. Acc. (越高越好) | Conf. Acc. (越高越好) | Mis. (越低越好) | Cons. Acc. (越高越好) |
| Direct Audio-LLMs: Text vs. Audio |  |  |  |  |  |  |
| StepAudio-R1 | 42.3 | 34.5 | 91.7 | 46.8 | 32.1 | 89.9 |
| StepAudio-2 | 34.2 | 37.8 | 83.9 | 39.3 | 29.7 | 69.6 |
| Qwen3-Omni | 42.9 | 40.5 | 91.1 | 40.5 | 34.2 | 83.3 |
| KimiAudio | 43.2 | 28.8 | 84.5 | 41.1 | 30.3 | 78.6 |
| MIMOAudio | 41.7 | 33.6 | 78.0 | 44.7 | 31.2 | 82.7 |
| Qwen2.5-Omni | 41.1 | 32.7 | 92.9 | 44.7 | 33.3 | 83.9 |
| Agentic-style LLMs: Text vs. Audio Twin |  |  |  |  |  |  |
| Haiku 4.5 | 33.0 | 45.0 | 92.9 | 43.2 | 30.9 | 81.5 |
| Sonnet 4.5 | 47.7 | 34.5 | 96.4 | 50.5 | 29.4 | 88.7 |
| Opus 4.7 | 45.3 | 36.9 | 98.2 | 46.8 | 34.8 | 94.0 |

#### 不确定性要贴着点估计读

表 5 用 10,000 次非参数对话级 bootstrap 给出 95% 百分位区间,端点是所得分布的第 2.5 和第 97.5 百分位。冲突集的 333 道题来自 113 段对话,一致集的 168 道题来自 75 段对话;两者对话数不能相加,因为同一对话可能同时贡献两类题。

这些区间常有重叠,因此点估计的先后不能直接解释成稳定的显著优势。它们只刻画在当前 ContraTalk 对话上重新抽样时的分数波动,不包括换一种基准构建方式、修改标签或重新抽取现实对话带来的不确定性。它也不是标准差或标准误。

**Table 5: Dialogue-level bootstrap 95% confidence intervals for aggregate model performance. Entries are point estimates with 95% percentile confidence intervals in brackets, reported as percentages. The conflict split contains 333 questions from 113 dialogues; the consistent split contains 168 questions from 75 dialogues. Split-specific dialogue counts do not sum to the total number of dialogues because a dialogue may contribute questions to both splits. Mislead rate is defined only for conflict cases. AT denotes Audio Twin.**

| System | Conflict Acc. | Conflict Mislead | Consistent Acc. |
| --- | --- | --- | --- |
| Text-only LLMs |  |  |  |
| DeepSeek V3.1 | 37.5 [32.4, 42.7] | 38.7 [33.9, 43.5] | 91.7 [87.1, 95.7] |
| Nova 2 Lite | 39.3 [33.5, 45.4] | 35.4 [30.1, 40.7] | 91.7 [87.3, 95.5] |
| Haiku 4.5 | 33.0 [27.8, 38.3] | 45.0 [39.1, 50.9] | 92.9 [89.0, 96.2] |
| Sonnet 4.5 | 47.7 [41.0, 54.1] | 34.5 [28.1, 41.3] | 96.4 [93.4, 98.8] |
| Opus 4.7 | 45.3 [39.4, 51.3] | 36.9 [31.1, 43.0] | 98.2 [96.0, 100.0] |
| KimiAudio | 43.2 [38.2, 48.2] | 28.8 [24.4, 33.3] | 84.5 [79.3, 89.6] |
| MIMOAudio | 41.7 [36.1, 47.4] | 33.6 [28.6, 39.2] | 78.0 [71.9, 83.7] |
| Qwen2.5-Omni | 41.1 [35.9, 46.4] | 32.7 [27.8, 37.8] | 92.9 [89.0, 96.3] |
| Qwen3-Omni | 42.9 [36.8, 49.2] | 40.5 [34.4, 46.7] | 91.1 [87.0, 94.8] |
| StepAudio-2 | 34.2 [28.9, 39.5] | 37.8 [32.2, 43.6] | 83.9 [77.8, 89.7] |
| StepAudio-R1 | 42.3 [36.6, 48.1] | 34.5 [28.8, 40.4] | 91.7 [87.5, 95.7] |
| Audio-LLMs |  |  |  |
| AudioFlamingoNext | 46.2 [40.3, 52.2] | 32.1 [27.5, 37.0] | 87.5 [82.3, 92.3] |
| GPT-4o-Audio-Mini | 33.6 [28.6, 38.9] | 39.9 [34.1, 46.0] | 83.3 [77.1, 89.0] |
| KimiAudio | 41.1 [35.1, 47.4] | 30.3 [25.0, 35.8] | 78.6 [72.5, 84.3] |
| MIMOAudio | 44.7 [39.1, 50.1] | 31.2 [26.2, 36.4] | 82.7 [77.0, 88.0] |
| Qwen2.5-Omni | 44.7 [38.7, 50.8] | 33.3 [28.0, 39.0] | 83.9 [78.7, 89.0] |
| Qwen3-Omni | 40.5 [35.2, 46.1] | 34.2 [28.4, 40.2] | 83.3 [76.9, 89.4] |
| StepAudio-2 | 39.3 [33.5, 45.2] | 29.7 [24.6, 35.1] | 69.6 [61.2, 77.3] |
| StepAudio-R1 | 46.8 [40.6, 53.0] | 32.1 [26.6, 37.9] | 89.9 [84.0, 94.8] |
| Audio Twin Reasoning |  |  |  |
| Haiku 4.5 + AT | 43.2 [37.8, 48.5] | 30.9 [25.6, 36.6] | 81.5 [75.4, 87.2] |
| Sonnet 4.5 + AT | 50.5 [44.9, 55.9] | 29.4 [25.0, 34.1] | 88.7 [83.6, 93.5] |
| Opus 4.7 + AT | 46.8 [41.0, 52.7] | 34.8 [29.6, 39.9] | 94.0 [89.3, 97.7] |

#### 可操作的复现清单

最小复跑要先重建 ContraTalk:取得 Seamless Interaction 测试对话、转写与构建期说话人提示;生成文字表面解释;形成冲突/一致候选;做只给问题和选项的泄漏过滤;按论文规则人工核验。评测端每题包含约 15 秒音频、转写、问题、四个选项与答案索引。冲突题还需保留特制文字诱导项,才能计算误导率。

Audio Twin 端至少要固定 Whisper 时间戳转写、Parselmouth 韵律特征、Vox-Profile 高层属性、话轮对齐规则、说话人基线、五类证据计划、3–6 或 4–6 条锚点限制、缺失证据处理和最终候选比较。表 7 的检查点名称必须逐一匹配;对同一骨干分别运行 Text 与 Audio 或 Audio Twin,才能重现配对比较。统计端应按对话重采样并包含同一被抽中对话的全部问题。

最高风险变量有三个。其一是构建期提示与真实声学实现之间并非天然等价,必须依赖人工听审。其二是转写、时间对齐、基频与情感估计误差会沿链路传递。其三是论文没有提供可核验代码仓库、许可证、数据发布入口或完整可运行配置;表 7、附录流程和提示片段能帮助重建设置,却不足以把“文档较详细”等同于“一键可复现”。

#### 这项工作还不能声称什么

| 能力问题 | 证据类型 | 当前判断 | 不能推出什么 |
|---|---|---|---|
| 是否暴露文字捷径 | 333 道冲突题上的准确率与误导率 | 是,文本模型在冲突题明显弱于一致题,并常选特制诱导项 | 不能说明所有真实对话错误都由文字捷径造成 |
| 原始音频是否自动解决问题 | Text/Audio 配对 | 否,部分系统改善冲突题,也有系统仍高误导或降低一致题表现 | 不能把“支持音频输入”视为可靠声学落地 |
| Audio Twin 是否有用 | 三个骨干的整机对照 | 多个骨干上改善冲突行为,Sonnet + AT 达到 50.5% 冲突准确率与 29.4% 误导率 | 不能把收益归因到某一前端、卡片或检索步骤 |
| 是否保持正常条件校准 | 168 道一致题 | 依赖骨干;Opus + AT 为 94.0%,较小骨干下降更多 | 不能声称显式证据无代价或总是更可靠 |
| 标签质量是否有人工支撑 | 七位核验者检查 350/501 道题 | 有较大覆盖的定向核验 | 不能说全部题逐题人工验证,也不能替代跨数据集验证 |
| 是否适合部署 | 受控问答与资源上限 | 尚不能判断 | 未报告时延、吞吐、成本、长期鲁棒性、安全或合规表现 |

对研究者,最值得迁移的设计原则是把“需要声音才能改判”与“文字已经足够时保持稳定”分开评测,并在下一步做真正的组件消融:逐类移除话轮卡、说话人基线、对话动态、定位修复或某个声学前端,同时报告两种切分。还应扩展到不同语言、文化语用、噪声条件与自然长对话,检验构建器和自动感知器的偏差是否改变结论。

对复现者,先复跑小规模配对实验,不要一开始追求全部模型。固定一组已人工核验的冲突题与一致题,保存定位、取证完整性、候选比较和最终答案,检查每次改动究竟作用在哪一段。对产品团队,目前证据只能支持“这种接口适合作为可诊断的研发原型”;没有延迟、吞吐、成本、隐私、安全和跨域鲁棒性数据,就不能把它直接描述成客服、医疗或教育场景中的成熟能力。

最后记住六点。第一,能读转写不等于听懂说话方式。第二,冲突题测模型是否改判,一致题测模型是否保持克制。第三,原始音频可访问不等于声音被正确使用。第四,Audio Twin 的关键是把局部声学观察与说话人基线、会话位置共同呈现。第五,50.5% 冲突准确率仍意味着大量错误,不能被“最佳”措辞遮住。第六,501 道受控题足以揭示一个重要失败模式,却不足以代表真实世界口语理解的全部复杂性。

<details>
<summary>📎 论文与评分元数据</summary>

标签：#语音交互 #音频理解 #语音情感识别 #大语言模型 #基准测试

**6.0/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.9/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.2/0.5 | 工程/实践 0.4/1.5

✅ **6.0/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：中 | #语音交互 | #大语言模型 | #音频理解 #语音情感识别 | [arxiv](https://arxiv.org/abs/2608.27176)


### 👥 作者与机构

第一作者：Yen-Ju Lu（Center for Language and Speech Processing, Johns Hopkins University）
通讯作者：Yen-Ju Lu
作者列表：Yen-Ju Lu、Yuzhe Wang、Yaohan Guan、Xiluo He、Jiarui Hai、Mingrui Liang、Kaavya Chaparala、Thomas Thebaud、Laureano Moro-Velazquez、Najim Dehak、Jesus Villalba（机构：Center for Language and Speech Processing, Johns Hopkins University）

</details>

### ⚖️ 评分依据与证据（展开查看）

<details>
<summary>逐维得分、全文证据与扣分边界</summary>

* 创新性 (1.4/2)：把文字捷径抽象为冲突/一致双条件，并以声学证据仲裁为目标，问题定义有明确新意；但仍是受控基准与 1 种表示方案。

* 技术严谨性 (1.1/1.5)：Audio Twin 的转写对齐、定位、检索与选择链路表达清楚，且给出例子和人审说明；不过前端特征可靠性及关键组件贡献未被充分隔离。

* 实验充分性 (1.0/1.5)：比较文本、直接音频和 Audio Twin，并按 5 类现象报告冲突/一致指标和 bootstrap 区间；但仅 501 题、缺乏证据族消融与外部任务验证。

* 清晰度 (0.9/1)：论文以任务定义、构造流程、表格和实例将指标含义解释清楚，读者可追踪文字陷阱；公式排版有重复，工程细节仍留在附录。

* 影响力 (1.0/1.5)：跨模态分歧是口语理解的重要失效模式，基准确实揭示文本高分可掩盖声学落地不足；现实会话、跨语言和产品场景的影响尚待验证。

* 开源 (0.0/1.5)：受控论文与作者记录均未提供可核验的代码仓库、许可证或发布承诺，按正式锚点只能给零分。

* 可复现性 (0.2/0.5)：Table 7、评测模式、人工核验流程和提示模板有助于理解设置，但没有可运行实现、数据访问说明或完整配置来独立复跑。

* 工程/实践价值 (0.4/1.5)：系统把局部声学线索转成可检索证据卡，模块边界利于审计与替换；未报告时延、吞吐、资源消耗或鲁棒性工程测试。

</details>

---

[← 返回 2026-08-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-29/)
