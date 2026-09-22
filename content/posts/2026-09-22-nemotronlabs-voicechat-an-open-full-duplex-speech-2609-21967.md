---
title: "NemotronLabs VoiceChat: An Open Full-duplex Speech-to-Speech Model with Tool Calling Capabilities"
date: 2026-09-22
draft: false
tags: [全双工语音交互, 端到端学习, 语音识别, 文本到语音, 流式处理]
categories: [论文速递]
description: "针对全双工语音交互中打断、回切与外部工具调用难以共存的问题，该工作用并行智能体文本流与函数调用流加流式 TTS 与 RNN-T 转写的统一架构实现边听边说边调工具，最强证据是工具选择 F1 达 82.5% 且打断后恢复质量 4.33/5，代价是参数准确率与端到端执行仍明显落后且工具执行期间不支持打断。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.21967"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "边听边说还要调工具：NemotronLabs VoiceChat 如何把全双工对话与函数调用装进一个流式系统"
paper_digest_original_title: "NemotronLabs VoiceChat: An Open Full-duplex Speech-to-Speech Model with Tool Calling Capabilities"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.21967"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.21967.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "端到端学习"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对全双工语音交互中打断、回切与外部工具调用难以共存的问题，该工作用并行智能体文本流与函数调用流加流式 TTS 与 RNN-T 转写的统一架构实现边听边说边调工具，最强证据是工具选择 F1 达 82.5% 且打断后恢复质量 4.33/5，代价是参数准确率与端到端执行仍明显落后且工具执行期间不支持打断。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jagadeesh Balam"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Travis Bartley"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Edresson Casanova"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sanjay Chauhan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chen Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhehuai Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zijia Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Francesco Ciannella"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Slyne Deng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mikyas Desta"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Harishchandra Dubey"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Slim Essid"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nourchene Ferchichi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Boris Ginsburg"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mariana Graterol Fuenmayor"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Negar Habibi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kevin Hu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anand Joseph"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Viraj Karandikar"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Myungjong Kim"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Viacheslav Klimkov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Seelan Lakshmi Narasimhan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lily Lee"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jason Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Eileen Long"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ameya Mahabaleshwarkar"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Aditya Malte"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Adi Margolin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sasha Meister"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Valentin Mendelev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Oluwatobi Olabiyi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ankita Pasad"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yifan Peng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Elena Rastorgueva"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jayda Ritchie"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jason Roche"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nikhil Srihari"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuanhang Su"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yoshi Suhara"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Viet Anh Trinh"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinhan Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Piotr Zelasko"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hui Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Puhui Meng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chaosen Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yunsheng Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shawn Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenjing Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhonglei He"}]
paper_digest_abstract_sha256: "6345bcc2562c0841b362160ed118f0e238ae69bfa0769c65bc870fb0ce8dcb05"
paper_digest_sidecars: {"citation.bib":{"sha256":"16d2d74bed53b7a525d5711963f2b102b8c678695bcd2953c970690b9017a758","url":"/audio-paper-digest-blog/data/papers/2026-09-22/2609-21967/citation.bib"},"citation.json":{"sha256":"32ec5f042e8fa1cd09fb6361c9ec5a10ba71ca284aba82135e47f1759baf8bd9","url":"/audio-paper-digest-blog/data/papers/2026-09-22/2609-21967/citation.json"},"citation.ris":{"sha256":"2d6dfa565f03c8df7abe9d868a928ef66cb690ab06768b6812ee9b56be3d7f23","url":"/audio-paper-digest-blog/data/papers/2026-09-22/2609-21967/citation.ris"},"rethink-context.json":{"sha256":"14ed3c8f3903d67fab4c844a5762636c7d306e040d9f87244dc7787061322fe6","url":"/audio-paper-digest-blog/data/papers/2026-09-22/2609-21967/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f0515c923dfb0c27fcaf35307dd7f161ef1d12c22a36cf66257a0a631eac49a5"
paper_digest_api_reader_plan_sha256: "cb7ef1cfceac1e893f5c53db28cfde374e4c192941a0d93f258710c922ded78b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2f8772c0e9d584a51ab96ace63ae34ed869be78dff41603374162638c67aabb9"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "c71102e053f13c45687639cea3ed774ec98e557b50800c72282f426d15f6fcce"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "caeb94a9fee8ba5dfceee3308f39d439edeb24d1dfe7e9bad71a6b3d4b896130"
paper_digest_api_reader_author_count: 49
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "08df520492fc8dbc8d1c6c93881b5d4362bcabe8cfdae1cbe41a85e49e701848"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 边听边说还要调工具：NemotronLabs VoiceChat 如何把全双工对话与函数调用装进一个流式系统

> 英文题目：*[NemotronLabs VoiceChat: An Open Full-duplex Speech-to-Speech Model with Tool Calling Capabilities](https://arxiv.org/abs/2609.21967)*

> 标签：#全双工语音交互 | #端到端学习 | #语音识别 | #文本到语音 | #流式处理
>
> 评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Jagadeesh Balam：机构信息未在 arXiv HTML 中可靠披露
- Travis Bartley：机构信息未在 arXiv HTML 中可靠披露
- Edresson Casanova：机构信息未在 arXiv HTML 中可靠披露
- Sanjay Chauhan：机构信息未在 arXiv HTML 中可靠披露
- Chen Chen：机构信息未在 arXiv HTML 中可靠披露
- Zhehuai Chen：机构信息未在 arXiv HTML 中可靠披露
- Zijia Chen：机构信息未在 arXiv HTML 中可靠披露
- Francesco Ciannella：机构信息未在 arXiv HTML 中可靠披露
- Slyne Deng：机构信息未在 arXiv HTML 中可靠披露
- Mikyas Desta：机构信息未在 arXiv HTML 中可靠披露
- Harishchandra Dubey：机构信息未在 arXiv HTML 中可靠披露
- Slim Essid：机构信息未在 arXiv HTML 中可靠披露
- Nourchene Ferchichi：机构信息未在 arXiv HTML 中可靠披露
- Boris Ginsburg：机构信息未在 arXiv HTML 中可靠披露
- Mariana Graterol Fuenmayor：机构信息未在 arXiv HTML 中可靠披露
- Negar Habibi：机构信息未在 arXiv HTML 中可靠披露
- Kevin Hu：机构信息未在 arXiv HTML 中可靠披露
- Anand Joseph：机构信息未在 arXiv HTML 中可靠披露
- Viraj Karandikar：机构信息未在 arXiv HTML 中可靠披露
- Myungjong Kim：机构信息未在 arXiv HTML 中可靠披露
- Viacheslav Klimkov：机构信息未在 arXiv HTML 中可靠披露
- Seelan Lakshmi Narasimhan：机构信息未在 arXiv HTML 中可靠披露
- Lily Lee：机构信息未在 arXiv HTML 中可靠披露
- Jason Li：机构信息未在 arXiv HTML 中可靠披露
- Eileen Long：机构信息未在 arXiv HTML 中可靠披露
- Ameya Mahabaleshwarkar：机构信息未在 arXiv HTML 中可靠披露
- Aditya Malte：机构信息未在 arXiv HTML 中可靠披露
- Adi Margolin：机构信息未在 arXiv HTML 中可靠披露
- Sasha Meister：机构信息未在 arXiv HTML 中可靠披露
- Valentin Mendelev：机构信息未在 arXiv HTML 中可靠披露
- Oluwatobi Olabiyi：机构信息未在 arXiv HTML 中可靠披露
- Ankita Pasad：机构信息未在 arXiv HTML 中可靠披露
- Yifan Peng：机构信息未在 arXiv HTML 中可靠披露
- Elena Rastorgueva：机构信息未在 arXiv HTML 中可靠披露
- Jayda Ritchie：机构信息未在 arXiv HTML 中可靠披露
- Jason Roche：机构信息未在 arXiv HTML 中可靠披露
- Nikhil Srihari：机构信息未在 arXiv HTML 中可靠披露
- Yuanhang Su：机构信息未在 arXiv HTML 中可靠披露
- Yoshi Suhara：机构信息未在 arXiv HTML 中可靠披露
- Viet Anh Trinh：机构信息未在 arXiv HTML 中可靠披露
- Jinhan Wang：机构信息未在 arXiv HTML 中可靠披露
- Piotr Zelasko：机构信息未在 arXiv HTML 中可靠披露
- Hui Wang：机构信息未在 arXiv HTML 中可靠披露
- Puhui Meng：机构信息未在 arXiv HTML 中可靠披露
- Chaosen Zhang：机构信息未在 arXiv HTML 中可靠披露
- Yunsheng Liu：机构信息未在 arXiv HTML 中可靠披露
- Shawn Wang：机构信息未在 arXiv HTML 中可靠披露
- Wenjing Li：机构信息未在 arXiv HTML 中可靠披露
- Zhonglei He：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

输入为16 kHz用户连续语音流与含工具定义的系统提示，输出为同步的智能体语音流、增量用户转写与结构化工具调用，难点在于边听边说时的帧级轮次控制、打断与反向通道容忍，以及工具执行期间不破坏对话时间线。方法链第一步由流式语音编码器按80 ms帧连续编码用户音频并送入解码器语言模型跟踪对话演进，其隐状态同时进入第二步的双通道并行解码，分别生成智能体文本流与函数调用标记流，文本流右对齐到声学时间轴并延迟两帧提供前视，而函数通道不延迟以保留调用真值位置。第三步中独立RNN-T分支基于感知表征增量输出用户转写以支撑端点回退，流式TTS解码器跟随文本时间线持续发声并在工具执行期播放预设填充话术，待工具返回后经fast-inject将结果强制插入函数通道恢复响应生成。与将动作序列化到同一自回归通道的已有方案不同，本文用加权融合与独立函数头实现双通道并行解码并以填充监督抑制误触发。在 Full-Duplex-Bench 1.0 上暂停误抢率降至 15.3%与 25.5%，打断接管率 100%且打断后质量 4.33/5；在 Full-Duplex-Bench 3.0 真人口吃语音上工具选择 F1 达到 82.5%，超过 Gemini Live 3.1 的 81.7%，而在 VoiceBench 上获得 55.1 的归一化平均分。该结论仅适用于约两分钟内上下文、每会话不超过 5 个工具与中低噪声条件，长工具延迟、多工具并行与执行期打断尚未解决。其适用边界受限于两分钟内上下文与中低噪声训练增强范围，长延迟工具与执行期打断等失败条件仍尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/nvidia/NVIDIA-Nemotron-Nano-9B-v2> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么全双工值得单独建模？

这篇论文的输入是连续到达的用户语音流，输出是同时推进的智能体语音流、增量用户转写和按需触发的结构化工具调用。目标读者可以这样复述任务：系统不能等用户说完再 1 次性回答，而要在 80 毫秒为步的时间轴上持续决定保持沉默、开始说话、停止说话、容忍简短应答或发起工具调用。必须保留的信息包括流式编码的时间粒度、并行双通道的监督方式、训练 2 阶段的数据配比，以及在全双工基准、语音智能基准和工具调用基准上的可比条件与指标方向。

本文按学习依赖展开，先讲任务与路线差异，再走完一个样本从波形到表示再到多输出的完整路径，然后讲训练构造与推理增强，最后讲实验条件、结果反证与复现要点。

传统级联做法把自动语音识别、大语言模型聊天和语音合成串起来，依赖语音活动检测判断用户是否说完，本质是半双工轮转。人类对话则是全双工：边听边说，轮转精度高，有重叠、犹豫、打断和不占话语权的简短应答。论文把全双工作为独立建模问题，强调低延迟生成语音不等于复现对话动力学。已有路线包括显式对话状态控制、同步或并行听说架构、把用户与助手音频流联合表示的端到端模型，以及模块化适配与可控行为扩展。

这些工作主要解决了实时交互动力学，但把工具调用无缝嵌入同一时间线的工作较少。专有实时平台已提供函数调用接口，开源全双工模型的通用工具调用仍欠探索。

**全双工交互 × 级联架构：** 全双工交互负责在说话的同时持续监听、处理重叠、停顿、打断和简短应答，级联架构负责把自动语音识别、大语言模型对话和语音合成串成依次执行的流水线；二者搭配的原因是级联架构天然是半双工的等待轮转，而全双工要求把监听与说话放在同一时间轴上并行推进，组合的意义在于必须用统一的流式时间线替代语音活动检测触发的轮流应答，才能在不切断对话流的情况下插入推理与工具调用。

为避免误解，需要明确本文的开放含义与模型代称。正文把系统称为 NemotronLabs VoiceChat，实验表格中把被测本模型记为 V-Model，附录把语音合成器称为 VoiceChat-TTS。开放声明依据是正文中检查点可在 Huggingface 获得的脚注，但本次收到的第三方资源状态为暂时不可达，因此本文只能写本次未能确认该链接可达，不做当前已公开的断言。后文简称固定为全双工交互、智能体文本通道、函数调用通道、流式语音编码器、解码器大语言模型。

### 同输入同目标的工作在监督与运行阶段有何不同？

在同输入同目标的维度上，Moshi、Freeze-Omni、PersonaPlex 与 MoshiRAG 都是可比的全双工语音到语音系统，论文用同一全双工基准的官方评分协议比较暂停处理、平滑轮转、用户打断与用户简短应答。区别在于监督与通道设计：DuplexSLA 把规划令牌与结构化动作序列化在同一自回归动作通道的时间线上，MoshiRAG 不做通用工具调用而是演示检测到需要外部知识时异步触发检索并在不暂停对话流的情况下融入回答。本文选择并行专用流，理由是异构动作令牌挤在共享通道会损害全双工所需的低延迟行为。

在同运行阶段的维度上，OpenAI 实时接口与 Gemini Live 都支持会话中发出结构化函数调用并异步返回工具结果，但它们是闭源实时平台，不与开源权重系统放在同一可复现条件下直接比实现。本文的工具调用数据组织、填充监督、边界标记与运行时快速解码加快速注入，都围绕开源流式推理的可部署性展开。附录还给出 DuplexCascade 这类级联全双工与 MiniCPM-o 这类多模态全双工作为系统级参照，但论文明确后者开放式子集用了不同评判模型，因此不能当成同条件胜负。

教学例子：假设用户在智能体说话中途只说嗯哼，理想行为是继续原回答而不是把它当成新问题回答；假设用户直接打断并换问题，理想行为是停下并针对新问题重答。这两个例子分别对应后文的用户简短应答条件与用户打断条件，例子本身不附加论文之外的数值效果。

### 要解决的矛盾是什么，成功标准如何定义？

中心矛盾是通用智能、对话自然度、用户语音转写准确率与工具调用能力要在一个统一流式架构里共存，同时不牺牲实时对话行为。具体表现为 4 个可检验要求：暂停时不抢话，轮转完成时及时接话，被打断后停下并高质量重答，被简短应答干扰时恢复原回答；单轮语音指令要有知识与推理质量；需要外部信息时要选对工具并填对参数；转写与合成要在多轮持续解码下保持稳定。

成功标准按基准分开定义。全双工基准 1.0 看暂停接管率越低越好，平滑轮转接管率与打断后接管率越高越好，延迟越低越好，打断后回答质量由模型按 0 到 5 打分越高越好。全双工基准 1.5 看用户简短应答后的行为分布，恢复原回答为期望行为。语音智能基准看归一化平均分越高越好。全双工基准 3.0 用真实人类带迟疑的语音与需链式调用的场景，看工具选择 F1、参数准确率与端到端通过率越高越好，其中通过要求选对全部工具且每处参数完全正确。论文同时承认参数与端到端执行是弱项，这为后文的反证留下位置。

### 统一架构如何让监听转写推理调工具与说话同轴推进？

沿一个样本走完输入到输出有助于建立全景。用户波形以 16 kHz 进入音频预处理，转成 128 维对数梅尔特征，再进入 600,000,000 参数的流式编码器。编码器经因果下采样每 80 毫秒产生 1 帧状态，自注意力只看左侧 70 帧，卷积也是因果，因此不需要未来音频。同一编码器输出分两路：一路经适配与投影进入解码器大语言模型，用于生成智能体文本与函数调用；另一路原始状态进入 RNN-T 分支，用于增量用户转写。

解码器大语言模型采用 Nemotron-Nano-9B-v2 基座，每帧融合编码后用户音频、前一智能体文本令牌嵌入与前一函数令牌嵌入，加权求和后由解码器推进，再由两个独立头分别预测下一智能体文本令牌与下一函数通道令牌。智能体文本增量流进入持续运行的语音合成解码器，转成波形；函数通道在需要时展开工具调用协议。

该导读段为架构总览图做准备，图前需要说明主路径、分叉位置与时间轴含义，图中包含用户流、编码器、解码器、双输出头、语音解码器与 RNN-T 分支等可见模块，图后需要把像素所见对应回上述文字路径。

> **看图路径：** 1. 先从底部用户流沿流式语音编码器向上追踪到解码器大语言模型的主路径；2. 再看解码器分出的智能体文本头与工具调用头如何分别指向语音解码与工具调用；3. 最后看左侧 RNN-T 解码器如何从同一编码器分叉出用户转写而不回灌主模型

[![原论文 Figure 1：NemotronLabs VoiceChat Architecture Overview.](https://arxiv.org/html/2609.21967v1/VoiceChat-TC-voicechat.drawio.png)](https://arxiv.org/html/2609.21967v1/VoiceChat-TC-voicechat.drawio.png)

*论文图 1。原论文 Figure 1:：“NemotronLabs VoiceChat Architecture Overview.”。*

从像素可见，底部是用户流波形并标出用户抢话与智能体轮转标记，中部是流式语音编码器，上方是输入池化与解码器大语言模型，再向上分出智能体文本头与工具调用头，右侧经语音解码与流式编解码器到达顶部智能体音频流，左侧虚线框内是预测网络加联合网络加 Softmax 构成的 RNN-T 解码器并向上输出用户转写。这种布局支持的复述是：编码 1 次多用，转写不回灌，合成跟随文本时间线，工具调用走独立头。训练时全双工主干与合成器独立优化，主干阶段不预测音频码，梯度不在主干与合成器之间传播；推理时三者按同一时间轴协同运行。

### 语音到文本侧如何用填充与起止标记学会何时说何时停？

语音到文本侧由感知模块与解码器大语言模型组成，感知模块内预处理用 25 毫秒汉宁窗与 10 毫秒步长，因果深度可分离下采样把特征序列压缩 8 倍。训练数据把智能体回答放在与编码器输出相同的 80 毫秒时间线上，每例以填充令牌初始化，在回答起点放普通智能体文本起始标记，随后连续帧放回答子词；当后继用户轮开始，智能体结束标记在短暂重叠后作为停止目标；无后继用户轮的最后智能体轮则无结束目标。无目标帧保持填充。

因此起始标记教何时开始，结束标记教何时停止，填充教保持沉默。这些起止标记与函数通道的工具调用边界标记是不同词表符号，不能混用。

**智能体文本通道 × 函数调用通道：** 智能体文本通道负责逐帧生成要说出去的回复子词以及开始与结束轮转标记，函数调用通道负责在需要外部计算时生成结构化工具名与参数；二者并行的原因是若把工具标记混进同一自回归流会拖慢对话令牌并破坏实时性，组合的意义是让对话继续按 80 毫秒帧推进的同时，工具调用按`<SOTC>` 到`<EOTC>` 再到`<EOTR>` 的状态机独立展开，互不阻塞时间线。

该导读段为工具调用通道图做准备，图前需要点明横轴是时间推进、四行分别是智能体文本、系统工具通道、底层模型与用户语音，图中用颜色块标出填充、调用起止、调用载荷与工具返回，图后需要解释调用期间智能体文本为何保持填充以及调用返回后如何恢复。

> **看图路径：** 1. 先沿底部用户语音行找到提问段与两侧静音段的时间位置；2. 再看中间系统工具通道上`<SOTC>`到`<EOTC>`再到`<EOTR>`的调用与返回顺序；3. 最后对照顶部智能体文本行在工具执行期保持填充而后恢复答复的对应关系

[![原论文 Figure 2：Tool-calling channel. For space efficiency, we omit the tool and agent-text channels on the input…](https://arxiv.org/html/2609.21967v1/TC2_svg-raw.png)](https://arxiv.org/html/2609.21967v1/TC2_svg-raw.png)

*论文图 2。原论文 Figure 2:：“Tool-calling channel. For space efficiency, we omit the tool and agent-text channels on the input side of the figure.”。*

从像素可见，底部用户语音行在静音后出现提问段，中间系统工具通道先是可用工具说明，随后依次出现调用开始、调用载荷、调用结束、工具返回与返回结束，调用载荷经虚线箭头指向外部接口并返回工具返回，顶部智能体文本行在工具执行期为填充，调用完成后才出现基于返回结果的答复。这种对应关系支持的复述是：工具执行期的智能体文本位置在训练时监督为填充，推理时运行时用预设确认语覆盖该填充段以避免长时间静音，工具返回后模型可恢复生成或发起多步调用。

### 函数通道的状态机与融合权重如何具体工作？

每帧的模态融合层把编码后用户音频、前一智能体文本令牌嵌入与前一函数令牌嵌入加权求和，配置权重分别为 11、11 与 22。解码器处理该融合流式上下文，独立函数头预测下一函数通道令牌。无工具需求时该通道输出填充，这种负监督对防止虚假调用重要。需要工具时遵循状态机：调用开始标记开启完整调用区间，调用结束标记关闭它，随后工具返回区间跟进并由返回结束标记终止。调用载荷是包含工具名与参数的 JSON 列表，同一格式支持单个与多个并行调用。

内部 3 个边界标记对应 3 个专用保留词，文本形式的调用与返回标签仍是载荷分词的一部分。模型监督函数通道的填充、3 个边界与调用内容，工具返回令牌只做上下文不计损失。训练时对应位置的智能体文本通道监督为填充，用户音频替换为静音以保持多通道对齐。

工具模式与表面协议经附录模板注入，运行时在检测到调用开始标记后异步解码完整调用，称为快速解码，执行器调用工具，待返回后把结果序列化并强制插入函数通道与解码器上下文，称为快速注入，随后恢复响应生成。工具执行期间输入音频仍可经感知与转写路径进入，但不用于条件化响应生成，因此该阶段不支持抢话。

复述时需注意冻结与更新边界在组件节只讲数据流向，不提前断言训练损失权重，具体损失权重留待训练节。原文未报告融合权重如何搜索得到，因此只报告取值，不推测最优性。

### 合成与转写分支如何保持多轮稳定而不干扰主决策？

语音合成器在整个会话时间线上保持活跃，消费上游增量智能体文本流，输入包含标准子词与 3 种控制符号：起始标记、填充与打断令牌。它不从用户音频独立推断轮转，只跟随上游文本与控制时间线。声学主干是 778,000,000 参数的解码器加 199,000,000 参数因果音频编解码器，总计约 977,000,000 参数，编解码器以 12.5 Hz 表示 22 kHz 波形，每帧对应 80 毫秒音频。为避免每帧自回归预测 31 层残差量化的高串行深度，采用高斯混合估计头预测连续表示并经少量细化迭代逐步量化，实践用 4 到 8 次细化。

文本用子词分词并右填充到声学时间线，音频流相对文本流偏移一个对齐解码步以提供有限语言前视。针对分词稀有单元，采用字符感知子词编码器把子词拆成字符经浅层变换器再平均池化，并用连续嵌入标记是否属于同一词单元。说话人条件用 3 秒参考音频，训练时以前缀声学令牌预填充并遮蔽该区损失，推理时同样初始化声学上下文。打断位置学到停止并输出静音，部署时可注入固定静音声学帧，该帧来自对长段纯静音编码后出现最频繁的量化模式。

**流式语音编码器 × RNN-T 分支：** 流式语音编码器负责把 16 kHz 用户波形转成每 80 毫秒 1 帧的声学表示并供给大语言模型做响应决策，RNN-T 分支负责从同一编码器原始状态增量解码用户转写；二者共享编码器的原因是避免再跑第二个识别编码器并保持转写与响应使用同一声学上下文，组合的意义是转写作为辅助输出暴露而不回灌大语言模型，从而保留直接由语音条件驱动的响应路径并为端点与打断启发式提供依据。

转写分支把原始编码器状态送入两层 640 维循环预测网络与 640 维联合网络，预测 1024 单元词块加空白符，随音频帧增量解码。结果作为辅助输出暴露，不送入大语言模型。组件训练顺序是先优化全双工主干的智能体文本与函数通道，再冻结语音编码器、语言模型主干、双头与合成器，只优化 RNN-T 预测与联合网络。推理时独立训练的三部分按总览图协同工作。

**VoiceChat-TTS × 打断令牌：** VoiceChat-TTS 负责把上游逐增量到达的智能体文本子词转成 22 kHz 波形的声学码并在整个会话时间线上持续运行，打断令牌负责告诉它当前话语应停止并转入静音；二者搭配的原因是解码器本身不从用户音频独立判断轮转，只跟随上游文本与控制时间线，组合的意义是上游检测到用户抢话时只需插入该控制符号即可让合成停止而不必重置缓存状态，从而实现可恢复的中断处理。

### 两阶段用什么数据以什么目标优化，权重如何取舍？

训练分持续预训练与监督微调，2 阶段用同一双工数据格式与时间对齐的用户与智能体流。持续预训练把连续扁平文本切成句子轮流分配给用户与智能体构成伪对话， turn 结束概率与长度规则按原文执行，每轮用不同用户与智能体音色合成并对齐拼接到同步双流音频，损失只算智能体侧文本令牌。监督微调从持续预训练检查点恢复，诱导指令跟随、轮转、抢话恢复、简短应答容忍与工具调用。

持续预训练侧重语音文本预训练加单轮问答，微调侧用加权随机轮询在更广桶上联合训练。工具调用数据例外，不能直接渲染含链接与代码的文本 transcripts，而是用多智能体管线生成场景、轮次计划、可执行后端与模拟对话，再经语音适配、过滤归一、多音色合成与识别往返校验组装成对话。

**持续预训练 × 监督微调：** 持续预训练负责用大量语音化文本伪对话让模型熟悉基于语音的语言生成与 80 毫秒帧对齐，监督微调负责在保留数据上叠加双工对话、打断恢复、回声容忍与工具调用行为；二者分阶段的原因是先对齐语音文本映射再交易各项能力权重，组合的意义是在同一双工数据格式下用加权随机轮询把保留、对话、工具与安全桶放在一个目标里联合优化，而不是为每种能力维护独立模型。

符号与输入先行：下式中文本损失与函数通道损失分别对应智能体文本头与函数头的分词交叉熵，纯文本损失对应文本到文本保留桶，权重系数控制三者配比。该目标的计算目标是在流式上下文下同时学会说话时机、说话内容与工具协议，掩码决定哪些位置计损失，令牌权重决定稀疏边界与内容的放大倍数。

\[\mathcal{L}_{\mathrm{STT}}=(1-\lambda_{\mathrm{T2T}})\left(\lambda_{\mathrm{text}}\mathcal{L}_{\mathrm{text}}+\lambda_{\mathrm{FC}}\mathcal{L}_{\mathrm{FC}}\right)+\lambda_{\mathrm{T2T}}\mathcal{L}_{\mathrm{T2T}}.\]

上式是全双工语音到文本总目标的原始形式，微调与预训练取不同权重组合，预训练无工具示例但仍监督函数通道预测填充以抑制虚假激活。下式是单通道的令牌加权交叉熵原始形式，掩码在注入的工具返回令牌上为零，使其只提供上下文。

\[\mathcal{L}_{c}=-\frac{1}{N}\sum_{t}m_{t}^{(c)}w_{c}(y_{t})\log p_{\theta}^{(c)}(y_{t}\mid h_{t}),\qquad c\in\{\mathrm{text},\mathrm{FC}\}.\]

原文明确的实现是：微调时文本权重 1.0、函数权重 1.0、纯文本权重 0.5，折算后为一半双工损失加一半纯文本损失；预训练时文本权重 3.0、函数权重 1.0、纯文本权重 0.0。智能体文本通道微调权重为轮起 12.5、轮止 7.5、内容 5.0、填充 1.0，预训练对应为 10.0、10.0、1.0 与 0.5。函数通道微调权重为调用内容 64.0、调用起止各 6.0、返回结束 3.0、填充 0.3。优化用 64 卡全数据并行与 bf16 精度，AdamW 参数与逆平方根调度、预热与梯度裁剪阈值按原文执行。

RNN-T 与合成目标单独优化，不计入上式。数据增强方面，微调引入早期打断、简短应答注入与文本通道延迟 2 帧，同时提高加性噪声概率并增加混响、麦克风与编解码增强，这些增强在预训练关闭或较弱。推理增强包括按工具定义的确认语遮蔽工具延迟、可跳过短工具确认语、基于转写的端点回退强制插入起止标记，以及分运行时协同的低延迟推理服务。

### 用什么基准测什么，比较条件与指标方向是什么？

评估分 4 条线。全双工基准 1.0 用预录用户音频测暂停处理、平滑轮转与用户打断，暂停含合成刺激与自然暂停子集，接管率越低越好，平滑与打断接管率越高越好，延迟越低越好，打断后质量越高越好，采用官方评分协议。全双工基准 1.5 测用户简短应答条件，模型在说话时听到嗯哼类确认，行为分为回答、恢复、不确定与未知，恢复为期望行为。

语音智能基准测单轮语音指令理解，含科学推理、跨学科知识、通用推理、事实问答、开放回答质量、指令跟随与安全，开放子集 1 到 5 分制，其余 0 到 100 分制，归一化平均越高越好。工具调用基准 3.0 用真实人类带迟疑语音与需链式调用场景，工具选择、参数准确率与端到端通过率越高越好。附录另有合成器独立评估与开放语音识别榜单及推理效率测量，分别看多轮可懂度、说话人相似度、预测质量、不同块大小下的词错率与单卡并发延迟。

比较条件需要逐项核对。轮转表区分开源权重系统与闭源接口，闭源为历史端点不代表当前服务版本；MoshiRAG 分数由其作者单独评估，非受控运行；PersonaPlex 为公开发布检查点；语音智能表中 MiniCPM-o 的开放子集用了不同评判模型，不能与官方榜单直接对齐。

DuplexCascade 为级联全双工参照。硬件预算方面，推理测量在单张 80 GB 卡上进行，感知编码器与语言模型主干用 bf16，合成主干与缓存状态用 fp32，四并发流下每 160 毫秒音频块的每流 p95 延迟为 118 毫秒，对应 1.36 倍实时吞吐。低精度与量化变体未评估。

### 轮转与打断行为是否同时变好，代价在哪里？

比较问题是：在同一流式模型下能否同时做到暂停少抢话、打断必接管且打断后回答高质量。公平条件是同一全双工基准 1.0 官方协议，指标方向为暂停接管率越低越好，打断接管率与质量越高越好，延迟越低越好。下表把论文连续原句中实际出现的本模型与最接近开源对照的数值放在同一时间粒度下对照，延迟保留原文整组写法以避免拆分末尾单位。

| 对比维度 | 指标与方向 | V-Model | PersonaPlex | 原文关系 |
| --- | --- | --- | --- | --- |
| 暂停处理合成 | 接管率越低越好 | 15.3% | 未在同句报告 | 最低 |
| 暂停处理自然 | 接管率越低越好 | 25.5% | 未在同句报告 | 最低 |
| 打断接管与质量 | 接管率越高越好，质量越高越好 | 100%，4.33 | 未在同句报告 | 最高 |
| 平滑轮转接管 | 接管率越高越好 | 81.5% | 90.8% | 对照更高 |
| 延迟整组 | 越低越好 | 448 and 480 ms | 170 versus 448 ms | 对照更低 |

表后解释需要同时讲收益与代价。本模型报告显示暂停处理在开源对照中最低，打断接管达 100% 且质量 4.33 为比较中最高，支持边听边说与打断恢复可以共存的判断。具体代价是平滑轮转接管率 81.5% 低于 PersonaPlex 的 90.8%，延迟整组 448 and 480 ms 高于对照的 170 versus 448 ms 组，说明及时接话速度不是最优。未胜出项必须点名：平滑轮转接管与延迟两处对照更优。相对闭源，论文报告本模型优于 Gemini Live 2.0 所有报告指标，但 GPT-Realtime 暂停接管更低且平滑接管更高，只是本模型响应更快且打断接管与质量更高，因此不能简化为全面超越。

第二个比较问题是简短应答后能否恢复原回答而不误答。公平条件是同一 1.5 用户简短应答分类，恢复为期望行为。下表只用连续原句覆盖的数值组织对照，避免为凑宽度引入无源行。

| 对比维度 | 指标与方向 | V-Model | 对照系统 | 对照值 |
| --- | --- | --- | --- | --- |
| 恢复原回答 | 越高越好 | 93% | Freeze-Omni | 80% |
| 恢复优势幅度 | 越高越好 | 13 percentage points | Freeze-Omni | 80% |
| 不必要回答 | 越低越好 | 1% | 自身行为 | 1% |
| 对闭源恢复 | 越高越好 | 93% | GPT-4o Realtime | 70% |
| 对闭源未知 | 越低越好 | 4% | GPT-4o Realtime | 25% |

表后解释是：93% 恢复率超过次优 Freeze-Omni 的 80% 达 13 个百分点，仅 1% 不必要回答，支持简短应答容忍有效的判断；与 GPT-4o 实时相比恢复更高而未知更低，与 Gemini Live 2.04 类分布完全相同。限制是仍有 2% 不确定与 4% 未知，说明仍有小比例混淆或静默，不能推广为零误判。像素无精确步数可辨的数值不硬写，上述百分比均来自原文连续句。

### 智能与工具调用各强在哪里，弱点是否被同一指标暴露？

比较问题是：知识密集任务的增益是否以开放回答与指令跟随为代价，工具路由强是否不等于端到端可用。公平条件是语音智能榜单官方协议与工具基准 3.0 的严格通过定义，指标方向均为越高越好，但开放子集评判模型不同的系统不能直接比聚合值。下表先看智能部分，只收录连续原句中出现的归一化平均与分项对照。

| 对比维度 | 指标与方向 | V-Model | Freeze-Omni | 原文关系 |
| --- | --- | --- | --- | --- |
| 归一化平均 | 越高越好 | 55.1 | 55.2 | 基本持平 |
| 知识问答 | 越高越好 | 61.3 versus 31.0 | 31.0 | 本模型更高 |
| 跨学科知识 | 越高越好 | 46.1 versus 28.1 | 28.1 | 本模型更高 |
| 安全拒绝 | 越高越好 | 100.0 versus 97.3 | 97.3 | 本模型更高 |
| 总体画像 | 越高越好 | 55.1 versus 55.2 | 55.2 | 画像不同 |

表后解释是：55.1 对 55.2 支持与 Freeze-Omni 总体持平的判断，但分项显示 9B 主干与更广混合在知识密集任务占优，而论文同时报告在事实问答、3 个开放质量子集与指令跟随上较弱，因此总体趋势不等于每组都成立。未胜出项明确：开放回答与指令跟随弱于对照。附录安全 split 报告 100.0% 拒绝率，每条有害请求都被官方评估器识别为拒绝，这支持直接有害请求的可靠可检测拒绝，但仅限该覆盖范围。

工具调用的比较问题是路由与参数哪段是瓶颈。公平条件是同一 3.0 真实语音与链式场景，通过要求选对全部工具且参数全对。下表保留实际可运行的闭源对照，参数行基线无连续原句数值时只写低于基线的定性关系而不编造数字。

| 指标 | 方向 | Ours | Gemini Live 2.5 | Gemini Live 3.1 |
| --- | --- | --- | --- | --- |
| 工具选择 F1 | 越高越好 | 82.5% | 78.6% | 81.7% |
| 参数准确率 | 越高越好 | 42.2% | 低于基线的对照侧 | 低于基线的对照侧 |
| 端到端通过率 | 越高越好 | 33.0% | 低于基线的对照侧 | 低于基线的对照侧 |
| 通过定义 | 越严格越难 | 需全对 | 需全对 | 需全对 |

表后解释是：82.5% 超过 78.6% 与 81.7% 支持工具路由较强的判断，但 42.2% 与 33.0% 低于两个基线，且通过定义要求全对，表明差距来自参数抽取与多步组合而非路由。论文据此建议未来主攻参数接地与多步组合。反例必须保留：同时多工具调用不可靠，可能跳过、选错或编造参数，工具多于约 5 个时性能下降，长工具返回延迟后续语音，这些都是同一工具能力下的具体代价。

### 哪些边界会让上述结论失效？

论文用专门章节列出失效边界，复述时应逐项保留而不淡化。音频上下文窗口至多约 2 分钟，超出窗口的会话信息可能不可靠保留。训练在通用知识与对话自然度、转写、轮转、工具使用之间显式权衡，因此知识、指令跟随、推理与安全可能弱于底层语言模型基座。工具使用不完美：暴露工具过多时退化，实用建议每会话不超过 5 个；同时多工具调用不可靠。

可能跳过、错选或编造参数；应在调用工具时可能直接用内部知识回答；长工具返回延迟后续语音；工具执行期间不支持用户抢话。强噪声或混响尤其有竞争背景人声时鲁棒性有限。

这些限制决定适用条件：需要长记忆、多工具并行、执行期可打断或强噪声部署的场景，当前结果不能直接推广。未来工作指向扩展有效会话记忆、改进参数接地与多步组合、支持打断感知的工具执行，以及在不损害实时行为下加强推理、指令跟随与对齐。缺失证据不是技术错误，例如误判率、每步延迟分布与不同噪声下的系统性成本未全面测量，不承诺这些量已改善。

### 复现先做什么，需要哪些可运行条件？

复现应先固定时间轴与数据格式。感知侧把 16 kHz 波形转 128 维对数梅尔特征，编码器每 80 毫秒 1 帧，左上下文 70 帧无右上下文；智能体文本按 80 毫秒帧对齐，起始与结束标记学轮转，填充学静音；函数通道按调用开始、调用结束与返回结束展开，返回令牌只做上下文；智能体文本目标在微调延迟 2 帧而函数通道不移。

训练先做持续预训练再做监督微调，主干阶段音频损失权重为零，合成器单独训练后协同推理；RNN-T 在冻结主干后单独优化。采样用加权随机轮询，微调保留、对话、工具与安全归一化占比约 46.8%、23.8%、26.0% 与 3.4%，工具桶约 71,000 小时 270,000 对话，对话桶含双工聊天、自然语音对话与语音智能目标对话。

可运行条件包括推理分工：感知编码器流式缓存，语言模型与合成器用定制服务，感知用图捕获加速，编解码增量解码 22.05 kHz 波形，转写环跟踪空白密度推导端点与抢话事件，工具调用用快速解码与快速注入，服务经推理服务器协调并以 WebSocket 收发 80 毫秒整数倍音频块。需保留的关键超参数包括融合权重 11、11、22，损失权重组合与令牌权重，以及优化器与调度取值。代码开源、权重下载与系统可运行要区分：正文给出检查点位置与模板，但本次第三方链接暂时不可达，复现前需先补验证该资源可达性与版本一致性，再核对分词、保留词与确认语配置，否则工具协议无法对齐。

### 何时值得尝试，还需补哪项验证？

当任务同时需要自然轮转与外部计算时值得尝试该路线：例如需要在对话中查汇率、算指标或链式调用后端，同时要求暂停不抢话、打断可恢复、简短应答可容忍。此时并行双通道的价值在于工具协议不挤占对话时间线，确认语可遮蔽工具延迟，转写分支可为端点回退提供依据。若任务只是单轮知识问答或纯转写，级联或纯识别方案可能更简单，不必引入全双工时间线。

还需补的验证包括：超过 2 分钟记忆的保持测试、多于 5 个工具与多并行调用的压力测试、工具执行期打断的可用性测试、强噪声与竞争说话人下的轮转测试，以及开放回答质量与指令跟随的同评判模型复测。教学误解需要澄清：工具选择分高不等于端到端可用，因为通过要求参数全对；恢复率高不等于零误判，因为仍有不确定与未知；归一化平均持平不等于能力相同，因为分项画像差异大。

合成首轮质量好不等于零样本长上下文无身份漂移，附录显示未见说话人多轮相似度下降而见过说话人保持稳定。把握这些条件后，才能把论文报告复述为可核对的方法与可运行的系统边界。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.21967)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-22 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-22/)
