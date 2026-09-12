---
title: "Shanks: Simultaneous Hearing and Thinking for Spoken Language Models"
date: 2026-09-12
draft: false
description: "SHANKS 针对等说完再思考导致无法中途打断和工具延迟的问题，采用固定时长语音分块交替生成未说出思考，在数学打断与旅行工具对话中提前完成推理和调用，但提前行动伴随成功率下降需与听完再调用组合使用。"
tags: ["SFT", "流式处理", "语音", "全双工语音交互"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.acl-long.404"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.acl-long.404/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.acl-long.404.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "10ce781daa19e957787cd3b15bcfaaa975e6cf2205dadedbf89c4dffc394ed88"
paper_digest_api_reader_plan_sha256: "53eaab6039d9eb3cb51eeb5ccaf98f565a5d967782a17cfbba267eabd614c6fd"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f62db9058eb7485c0167b58dd8da7d5c7457e6b5538236d7fc7a256fcc422c3c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5a87ffaf4be51f20fcc620a13d619a6469475ff8c3bf145a034a55cdadfbe9bf"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "05354596349b46c07c207f9a1f2854f7df4acf0e6d1d6df0b0389ac75bde0ef2"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1c7aab3d748729f98e5373e6cdb7974ba910027d97be6b23d4eaf55761038717"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"}]
paper_digest_primary_task: "全双工语音交互"
paper_digest_primary_method: "SFT"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 边听边想：SHANKS 用分块未说出推理实现中途打断与提前工具调用

> 英文题目：*Shanks: Simultaneous Hearing and Thinking for Spoken Language Models*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.acl-long.404`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://aclanthology.org/2026.acl-long.404/) · [官方 PDF](https://aclanthology.org/2026.acl-long.404.pdf)

标签：#SFT #流式处理 #语音 #全双工语音交互

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Cheng-Han Chiang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaofei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Linjie Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chung-Ching Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Shujie Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhendong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengyuan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Hung-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Lijuan Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

口语交互输入为流式语音而输出要求及时打断与低延迟应答，传统口语语言模型仅在用户整轮结束后才思考行动。SHANKS即同步听思框架将用户语音按固定时长分块，每收到一块即基于全部历史语音块与历史思考块生成一段不发声思考块，该思考可携带打断标记或应用程序接口调用并与下一块用户语音并行生成，尾轮再结合完整上下文生成可发声回复。与先听后想再说方法的关键差异是把推理与行动前移到听的过程中并用交错序列建模部分可观察输入。在1280正确加1140错误的GSM8K衍生口语数学评测中，端到端版错误子集打断率84.8%、有效打断率63.9%、中断延迟5.08秒；在500实例平均需5.1次调用的ComplexFuncBench口语化评测中，56.9%的真实调用在用户说话期间完成，轮后生成token从313降至54。该结论依赖较长且信息可顺序增量解析的查询，对短句和中途修正较多的语音适用性有限。原文未折算真实解码与工具执行延迟，未微调发声器。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么不能等说完再想？

这篇解读面向刚进入语音与语言模型的研究生，目标是把做法讲到可以复述和核对。输入是用户的连续说话语音，输出是模型的语音回复，中间必须保留的信息是模型在听到完整话语之前做了哪些未说出的推理。论文指出当前大语言模型与语音语言模型通常等用户整轮结束才开始思考与行动。

这种等说完再想在文字轮流制对话中可行，但在语音对话中带来 2 个具体损失。第一是用户说错时模型无法中途纠正，只能听完全程再反驳。第二是需要调工具的请求必须等说完再调，回复延迟明显变长。人类则是边听边想，听到一半已在解析要点与计算中间量。

SHANKS 就是把这种边听边想搬到语音语言模型推理框架中。它在用户说话的同时生成不说出的思维链，思考可包含验算、打断判定与工具调用。需要先说明资源状态，本次未发现来源绑定且完成验证的资源。因此不得声称代码、模型或数据已公开，本文只讲论文实际做的 2 个任务。

### 同类路线在何时思考，SHANKS 与它们有何不同？

要理解 SHANKS 的位置，需要按同输入、同目标、同运行阶段来对照。第一条线是文本大模型的先思考后回答，隐藏思维链先算再给最终答案，运行阶段在收到完整输入之后。第二条线是近期语音模型的边说边想，例如 STITCH 在收到完整用户输入后一边说话一边想后文。

第三条线是全双工语音模型，多数工作处理的是用户打断模型，即模型说话时被用户叫停。而 SHANKS 研究的是模型打断用户，需要模型在用户说话时判断对错。第四条线是增量处理，包括流式识别与流式翻译，把输入切小块到一块处理一块。

**增量处理 × 全双工：** 增量处理负责把流式输入切小块到一块处理一块，全双工负责同时处理说与听 2 个方向的交互，搭配理由是打断与提前调用都需要不等整句结束就行动，组合意义是 SHANKS 属于用增量处理实现模型侧打断能力的全双工交互，而不是只处理用户打断模型。

这种对照说明类别差异不能直接当成同条件胜负。例如更强的文本推理底座可能带来更高的打断准确性，但那是底座能力差异。SHANKS 与它们共享分块流式思想，不同点是把增量处理用于生成端到端语音模型的内部思考。

### 论文实际研究哪 2 个任务，正确与错误的判定是什么？

论文只研究 2 个能体现边听边想价值的场景。场景 1 是模型打断用户，用户先说一道数学题，再逐步说自己的解法。解法可能正确也可能错误，模型需要在用户第一次出错时打断并指出错处。

若用户全程正确则不应打断，正确与错误的依据来自题目标准答案与逐步解法的比对。测试数据取自 GSM8K 测试集的题目，用 2 个能力不同的模型生成逐步解答。再用 GPT-4o 判断是否与标准答案一致，最后转写为口语化文本并合成语音。

场景 2 是边听边调工具，用户提出旅行规划请求，模型需要调用 Booking.com 相关接口完成任务。例如先解析机场名，再查航班，再查租车，调用之间存在依赖顺序。任务改编自 ComplexFuncBench，每个实例给出用户文本请求与所需工具描述。模型必须按正确顺序调对接口并综合结果回复，评测时判断模型调用是否命中真实调用。

### SHANKS 如何做到听的同时想，全景流程是什么？

SHANKS 全称是 Simultaneous Hearing and Thinking with Chunked Input Speech，核心动作是固定时长分块与交替生成。设用户语音被切为 S1 到 SN，每块时长为 tchunk，最后一块可不足整块。模型维护交替上下文 S1、R1、S2、R2 直到 SN，其中 Ri 是第 i 块后的未说出思考块。

当用户正在说第 i 块语音 Si 时，模型正在生成上一块对应的思考 Ri-1，这就是听与想并行。等 Si 说完，模型停止 Ri-1 的生成，把 Si 与 Ri-1 加入上下文，再开始生成 Ri。用户整轮结束时喂入最后一块 SN 并换用表示结束的标记，然后生成 RN 与最终可说出回复 O。

**打断 × 未说出思考：** 打断负责在用户出错时及时出声纠正，未说出思考负责在后台跟踪题意与验算并判断是否出错，搭配理由是无思考的打断只能凭表面触发，组合意义是只有先独立算出正确答案再对照用户步骤，才能让打断更准且解释更具体。

在一个样本层面可以这样走一遍，用户开始说话后第一个 4.0 s 语音块到达并生成第一段思考。思考被限定在下一个语音块的时间窗口内完成，若未写完则强制截断并补结束标记。下一语音块到达后再基于此前所有语音与思考生成下一段思考，如此循环直到用户说完或被打断。

**工具调用 × 边听边想：** 工具调用负责查询航班与租车等外部信息，边听边想负责在用户话没说完时就判断已有信息是否足够调接口，搭配理由是旅行请求的参数是逐步说出的，组合意义是把等待说话的时间变成等待工具返回的时间，从而减少说完后的剩余生成量。

下面时序图把 3 条时间轴上下对齐，是理解并行的关键，需要沿箭头确认谁与谁同时发生。该导读要求读者先分清输入轴、输出轴与用户轴，再看思考与语音的重叠区间。

> **看图路径：** 1. 先沿最下方用户说话时间轴确认语音块按固定时长切分；2. 再看中间模型输入时间轴如何逐块接收语音特征；3. 对照最上方输出时间轴确认思考块与下一语音块并行

[![原论文 Figure 1：The timing diagram of SHANKS.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8330b8ad3668/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8330b8ad3668/figure-1.png)

*论文图 1。原论文 Figure 1：“The timing diagram of SHANKS. As the user speaks, their speech is segmented into chunks for ev- ery tchunk seconds and streamed to the SLM.”。*

该图显示下方用户轴被切为等长语音块并经语音编码器抽取特征送入中间模型输入轴。上方模型输出轴在每个间隔生成绿色思考块，思考块可包含工具调用或打断判定。橙色回复块只在最后或打断时出现，这种滞后 1 块的设计解释了思考总比最新语音慢一个分块。

### 分块、标记与截断如何配合，2 种模型有何分工？

分块组件解决输入表示问题，论文默认 tchunk 为 4.0 s，7B 模型在单张 A100 上约可生成 320 tokens。因此每块思考的 token 数上限为 tchunk 乘以每秒可生成 token 数。实现上不是直接切波形，而是把整段语音送入音频编码器后按时间取对应特征。

这样后块特征仍可依赖前文，避免独立编码切断上下文。标记组件解决状态区分问题，部分块后加 EOPA 表示还有后文，最后一块后加 EOA 表示用户已说完。思考块前后用 think 标记包裹，打断意图用专门的 INTERRUPT 标记表示。

**语音语言模型 × 思维链推理：** 语音语言模型负责接收语音特征并生成可说出回复，思维链推理负责在回复前先做隐藏的逐步推导，二者搭配的理由是语音交互需要先算清再开口，组合意义是把隐藏推导搬到用户说话的同时进行，不占用说完后的等待时间。

截断组件解决时间对齐问题，若在下一语音块到齐时思考还没写完，则直接停止并补结束标记。工具场景中工具返回不计入模型生成上限，调用延迟在实验中也不计入。端到端版本微调 Qwen-2.5-Omni 的思考器，使其学会在 think 标记内写未说出推理。

只有回复块的隐状态才送给说话器合成，论文报告未微调说话器，原因是语音 tokenizer 不可用。这意味着当前端到端结果主要验证思考器行为，完整语音输出延迟不宜当成实测端到端延迟。

**端到端模型 × 级联模型：** 端到端模型直接以语音特征为输入生成思考与回复，级联模型先用语音识别转写再用纯文本大模型思考，搭配比较的理由是检验边听边想是否依赖输入模态，组合意义是证明同一分块交替机制可同时用于 2 种技术路线。

举例来说，同样听到杭州到首尔的请求，端到端直接读语音特征生成查询机场代码的调用。级联则先读部分转写再生成同样的调用，差别在输入表示。机制都是信息足够就提前调，不足则写模板等待，该例子仅用于说明分工。

### 训练序列如何构造，监督信号从哪里来？

训练目标是标准的语言建模交叉熵，但只对思考块与最终回复计损失。给定完整用户语音，先按固定时长切块，再设法得到每块后的思考块与最终回复。然后训练模型在给定 S1 时预测 R1，在给定 S1、R1、S2 时预测 R2，依此类推。

打断任务的训练数据来自 Tulu3-Persona-Math-Grade 抽取约 5000 条并过滤超长音频。思考块用 GPT-4o 基于此前语音转写与此前思考生成，要求跟踪已知信息与计算中间量。错误样本在首错块加 INTERRUPT 标记并生成纠正回复，打断样本的训练序列只保留到出错块为止。

工具任务把 ComplexFuncBench 一半作训练，语音切块同样固定，思考块即工具调用与返回。用 GPT-o1 根据词级时间戳判断每个真实调用最早可调时刻，再把调用归入对应思考块。无可调时写等待模板，最终回复基于全部调用与返回生成，训练时屏蔽工具返回的损失。

下面训练序列示意图用颜色区分是否计入损失，是复现数据拼装的关键。该导读要求先分清 3 行的差异，再看截断位置与损失掩码的对应关系。

> **看图路径：** 1. 对比 3 行训练序列中语音块与思考块的交替位置；2. 确认虚线块不计损失而实线思考与回复计入损失；3. 找到打断行末尾特殊标记与回复的衔接方式

[![原论文 Figure 2：Illustration of the training data.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8330b8ad3668/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8330b8ad3668/figure-2.png)

*论文图 2。原论文 Figure 2：“Illustration of the training data. Si: the speech for the i-th user speech chunk; Ri: the i-th thinking block after Si; O: the final response block; Ai: the API call responses…”。*

该图第 1 行是通用序列，语音与思考交替最后接回复。第 2 行是打断序列，最后思考含 INTERRUPT 标记后直接接打断回复。第 3 行是工具序列，每个思考被工具返回切为前后 2 段，返回本身不计损失。复现时必须按此掩码实现，否则模型会去拟合语音与工具返回文本。

### 数据、基线与指标如何设置，比较条件是否一致？

打断评测用自建的 1280 条正确与 1140 条错误的语音，平均时长约 49.25 seconds。指标包括打断率、有效打断率与打断延迟，打断率是被打断样本占比。有效打断率是打断中被判合理的占比，用 GPT-4o 作裁判。

打断延迟是模型开始打断时刻减去首错时刻，仅用于错误子集。首错时刻由 GPT-4o 结合题目、标准答案、转写与词时间戳判定。基线 No-thinking 同样基于 Qwen-omni 但无思考，直接每块预测打断或不打断标记。

另有级联 SHANKS 用更强推理底座，用于检验底座能力的影响。工具评测用剩余 500 条旅行请求，平均每条需 5.1 次调用，平均语音为 18.71 seconds。指标包括调用准确率并拆为说中调用与说后调用，以及说完后还需生成的 token 数。

基线 Call-after-listen 听完完整语音再逐轮调用，代表现有工具模型的常规做法。组合方法 SHANKS 加 Call-after-listen 在用户说话时用前者提前调，说完后复用已成功调用继续补调。需要指出工具数据集训练与测试同分布，论文已声明结果不应与未在该集训练的模型直接比较。

### 边听边想带来了什么收益，代价在哪里？

先看打断场景的比较问题，有思考的边听边想是否比无思考更能区分对错。指标方向是错误子集打断率与有效打断率越高越好，正确子集打断率越低越好。下表给出正确与错误子集的样本量、平均时长与端到端延迟，便于核对评测规模。

| 场景 | 正确样本量 | 错误样本量 | 平均语音时长 | 平均打断延迟 |
| --- | --- | --- | --- | --- |
| 打断评测 | 1280 instances | 1140 with incorrect solutions | 49.25 seconds | 5.08 seconds |
| 打断评测 | 1280 instances | 1140 with incorrect solutions | 49.25 seconds | 5.08 seconds |

上表显示打断评测使用 1280 条正确解法与 1140 条错误解法，平均语音时长为 49.25 seconds。论文报告 SHANKS 在错误子集的打断率明显高于正确子集，约 2 个打断中有超过 1 个被判有效。端到端平均在首错后 5.08 seconds 打断，分布显示多数为正延迟。

代价是正确子集仍有一定打断，部分是因中间表述不清被要求澄清。级联用更强底座后正确子集打断更低、错误子集有效率更高，说明打断能力与底座推理强相关。未胜出项是 No-thinking，其有效打断率低且延迟更大，不能替代有思考方案。

下面看打断实例导读，该图是纵向时间轴上的红绿橙 3 色块。该导读要求沿时间确认模型何时已独立算出答案，何时开始对照用户步骤。

> **看图路径：** 1. 沿左侧时间刻度自上而下跟踪用户题述与解题步骤；2. 对照每个时刻绿色思考如何累积已知量并独立验算；3. 找到最后橙色打断回复纠正的具体数值矛盾

[![原论文 Figure 3：An example from the interruption scenario in Section 3.2.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8330b8ad3668/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8330b8ad3668/figure-3.png)

*论文图 3。原论文 Figure 3：“An example from the interruption scenario in Section 3.2.”。*

该实例中用户讲 Catherine 装花篮问题，模型在听到单价与数量后已在绿色思考中算出合计 70 元。此后用户复述时把总数误算并得出 75 元，模型在下一思考块发现矛盾。随即用橙色回复指出 5 篮乘 3 应为 15 而非 25，这展示了先自算再对照的机制。

再看工具场景的比较问题，边听边想能否把部分调用提前到说话期间。下表同时给出测试规模、提前完成占比与说完后剩余生成量，包含基线与组合方法的直接对照。

| 场景 | 测试规模 | 平均调用与时长 | 提前完成占比 | 说完后生成量 | 相对变化 |
| --- | --- | --- | --- | --- | --- |
| 工具测试 | 500 instances | 5.1 API calls | 56.9% of API calls | 117 tokens | 62.3% |
| 基线对照 | 500 instances | 18.71 seconds | 56.9% of API calls | 313 tokens | 62.3% |

上表支持的判断是 SHANKS 确实把 56.9% of API calls 提前到说话期间。组合方法把说完后生成从 313 tokens 降到 117 tokens，相对减少 62.3%。代价是纯 SHANKS 总准确率与成功率落后于听完再调，因为中途调失败后很少重试。

组合方法通过说完后切回常规调用并复用已成功调用来弥补。未胜出项是纯 SHANKS-E2E 与级联在成功率上的落后，说明提前行动不能无条件替代听完再调。下面看工具实例导读，该图同样是纵向时间轴。

> **看图路径：** 1. 沿时间轴确认红色用户请求如何分段说出目的地与日期；2. 观察绿色思考块如何在每段后发起对应工具调用；3. 确认蓝色工具返回如何成为下一轮思考的上下文

[![原论文 Figure 4：An example user query from ComplexFuncBench (in red), including the unspoken thinking process (in…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8330b8ad3668/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8330b8ad3668/figure-4.png)

*论文图 4。原论文 Figure 4：“An example user query from ComplexFuncBench (in red), including the unspoken thinking process (in green) and the spoken final response (in orange) from SHANKS-E2E.”。*

该实例中用户先说杭州到首尔最便宜航班，模型即调机场代码查询。听到日期后调航班搜索，听到租车地点与时间后调租车位置与租车搜索。最后在用户说完时补查航班详情并生成汇总回复，这展示了调用顺序跟随信息到达顺序。

### 分块时长与裁判可信度是否改变结论？

消融围绕分块时长展开，训练固定 4.0 s，推理分别试 3 s 与 5 s 而不重训。用于检验思考滞后 1 块的敏感性，报告显示错误子集的打断率与有效率变化不大。但 3 s 延迟最小、5 s 延迟最大，符合滞后时长越长则听到最新语音越晚的直觉。

另一项验证是裁判可信度，人工抽查 120 条显示裁判与人类一致率较高。当裁判判无效时人类也判无效的比例更高，支持用该自动指标作主要比较。下表把实现条件与裁判条件放在一起，便于复现时先对齐。

| 条件 | 设置 | 单块可生成量 | 裁判一致率 | 无效一致率 |
| --- | --- | --- | --- | --- |
| 分块生成 | 4 .0s | 320 tokens | 95.0% agreement | 96.9% of the time |
| 分块生成 | 4 .0s | 320 tokens | 95.0% agreement | 96.9% of the time |

该表说明分块不是随意选的，而是受每秒生成速度约束。裁判数字说明自动评测可用但仍有约 5 % 分歧，解读有效打断率时应留有余量。失败条件也值得记下，单块最多约 320 tokens。若调用参数过长会被截断而失败，超上下文上限则直接终止该样本。

### 哪些情况下不应期待边听边想生效？

论文明确列出 3 类限制，第一是语音结构要求。用户语音需足够长且信息可顺序处理，若整句短于一个分块则无法边听边想。短问句提前思考的延迟收益可能很小，论文举例称差异可能只有 100 毫秒量级。

第二是固定分块的滞后，思考总比最新语音慢一个分块。分块切分粗糙会带来延迟，未来可用更细的切分改进，但本次未实现。第三是目标不明与算力代价，用户未说完时目标可能不清甚至自我纠正。

此前思考可能冗余，边听边想不增加说完后的等待，但增加了说话期间的计算量。这是用推理预算换延迟，部署者需权衡利弊，相关性不等于因果。更强底座带来更好打断也不能反推分块机制本身带来推理能力提升。

### 要复现应先准备什么，按什么顺序跑通？

复现先做数据拼装而非直接调模型，第一步用 Whisper-large-v3 做词级转写与时间戳。按 4.0 s 切块并记录每块文本，注意时间戳精度有限但论文认为已够用。第二步按场景生成思考，打断场景用 GPT-4o 基于此前转写与此前思考生成独立验算。

错误样本在首错块加 INTERRUPT 标记并生成纠正回复，工具场景用 GPT-o1 判定最早可调时刻。第三步按掩码拼序列，语音与工具返回不计损失，只训练思考与回复。打断错误样本截断到出错块，工具调用用 GPT-4o 匹配真实调用。

第四步微调，打断任务全参数 2 轮，有效批量为 64，学习率为 1.0e-4 加余弦与 0.1 预热。工具任务端到端用 LoRA 并训练词嵌入与输出头，推理时严格执行到块即停。关键超参数与信息条件是 tchunk、每块 token 上限与工具描述是否完整给出。

### 何时值得尝试 SHANKS，还需补哪项验证？

当任务满足 3 个条件时值得尝试，用户轮次长且关键参数逐步出现。提前行动可省等待，错误或信息缺口可在中途判定且纠正有明确标准。若是短指令、目标高度不确定或工具返回很长易超上下文，则应先用听完再调或组合方案。

复现后还需补的验证包括真实网络与语音合成下的端到端延迟。还需验证不同分块与自适应切分的效果，以及失败重试机制对成功率的提升。用户对被打断的主观接受度也需单独测量，不能用有效率代替体验。

总体上，SHANKS 报告显示边听边想可将过半工具调用提前并显著减少说完后的剩余生成。也显示有思考的打断远优于无思考基线，但这些是有限条件下的报告。是否推广到其他领域与底座仍待验证，部署前应按自身数据重测打断误伤率与算力成本。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
