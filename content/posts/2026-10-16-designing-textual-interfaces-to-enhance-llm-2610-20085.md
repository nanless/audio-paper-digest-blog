---
title: "Designing Textual Interfaces To Enhance Llm Reasoning On Audio-Visual Question Answering"
date: 2026-10-16
draft: false
tags: [音视频问答, 提示学习, 多模态模型, 大语言模型]
categories: [论文速递]
description: "论文比较直接优化单个全模态大模型指令与优化字幕推理和智能体子智能体两类显式文本接口的效果，发现只有直接优化 Gemini 指令带来稳定提升，而更易看懂的中间接口反而更难优化且伴随信息损失与证据冲突的代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.20085"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "文本接口如何影响音频视觉问答的提示优化"
paper_digest_original_title: "Designing Textual Interfaces To Enhance Llm Reasoning On Audio-Visual Question Answering"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.20085v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.20085v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.20085v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.prompt-learning","label":"提示学习"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "提示学习"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文比较直接优化单个全模态大模型指令与优化字幕推理和智能体子智能体两类显式文本接口的效果，发现只有直接优化 Gemini 指令带来稳定提升，而更易看懂的中间接口反而更难优化且伴随信息损失与证据冲突的代价。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yi Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianzi Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tong Lei"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dahan Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Peter Bell"}]
paper_digest_abstract_sha256: "6b8a1fe6c9720320d86c47e921bbcb229b0c3b9cd81eb11b1ab91d63eb7ea0c0"
paper_digest_sidecars: {"citation.bib":{"sha256":"ddb43940d71298bc513d4dee963ec54088c3e9ae2f39d90a04497e33dd3902b3","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20085/citation.bib"},"citation.json":{"sha256":"8e0cbd499e1cf776e918a6881bb4fbe6430a189b8dd474adf8e61b958a56cba6","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20085/citation.json"},"citation.ris":{"sha256":"25d8387496eb978268b529bd271a7d8e599715e26fa5873f5c5bdcdc89b3d499","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20085/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"1c2ea720dbe3e460c69c05170dfbf9f280e1ca6976244ce5ba943c2481105e5d","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20085/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "14a5059b08cd7185152a1e5be5c40f9c1c9919dfb52cfc0f9d44da9f1cf1f3c9"
paper_digest_api_reader_plan_sha256: "7d041f191a293230acd6acf8095b6e1d2e76a75114fdf339034f973ec6536630"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "64f8fb189ba876ced040acdbca2fb9f615c71e4f956b2716fc6f0adfc99e6d22"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "ef9bdd5ce95060168a09d1ebe3554c3776a3051d51901997f9564d58c3eac9e6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b9af682d4de3ec9678865b3098a15311ee95623275bb1a0211fbf1aba5572458"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9f3977b3397ae933f917c26975bea41db9de589f861bbddab6fd60b58d627060"
paper_digest_api_reader_resource_count: 6
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 文本接口如何影响音频视觉问答的提示优化

> 英文题目：*[Designing Textual Interfaces To Enhance Llm Reasoning On Audio-Visual Question Answering](https://arxiv.org/abs/2610.20085v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)
- **研究方法**：[提示学习](/audio-paper-digest-blog/papers/?concept=method.prompt-learning)
- **模型家族**：[多模态模型](/audio-paper-digest-blog/papers/?concept=model_family.multimodal)；[大语言模型](/audio-paper-digest-blog/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Yi Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianzi Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tong Lei：机构信息未能在本次解析中与作者逐人可靠绑定
- Dahan Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Peter Bell：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

音视频问答要求模型同时利用视频画面与伴随音频回答多项选择题，输入包含视频、音频、问题文本和候选项，输出为选项编号，难点在于稀疏分布的跨模态证据需要被找到并联合推理。直接推理让单个全模态大语言模型同时读入视频、音频、问题、候选项与任务指令并直接给出选项编号，只暴露一条可优化的直接推理指令。字幕推理先由全模态字幕器在不知问题与候选项时把视频音频压缩为文本字幕，该字幕再与问题、候选项和推理指令一起送入纯文本推理模型得出答案，字幕成为感知与推理之间可优化的文本瓶颈。智能体系统由文本主智能体先调用字幕子智能体获得全局描述并记入交互历史，再根据问题、候选项与历史决定发起针对性追问或作答，问答子智能体返回追问所需的视听证据，主智能体整合多轮证据后作答，暴露主智能体工作流指令与感知侧指令。自动提示优化由文本优化器读取预测答案、正确答案和执行轨迹后改写指令，再按验证集准确率挑选候选指令，把优化对象从最终指令扩展到字幕指令、推理指令和智能体工作流指令。在Daily-Omni基准上，直接推理的Gemini-2.5-Flash经GEPA优化后测试集准确率从75.71%提高到79.83%，而字幕推理与智能体系统未获得可迁移的提升。结论适用于指令跟随较强的Gemini与所划分的训练、验证和测试集，不适用于测试的Qwen3-Omni变体，也未在其他音视频基准上验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/yiwang454/interface_AVQA> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/yiwang454/interface_AVQA> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct> — 暂时无法访问

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Thinking> — 暂时无法访问

- 第三方资源：<https://ai.google.dev/gemini-api/docs/models/gemini> → <https://ai.google.dev/gemini-api/docs/models> — 链接可访问（HTTP 200）

- 第三方资源：<https://openai.com/index/gpt-4-1/> — 链接不可用（HTTP 403）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频视觉问答要从什么输入回答什么问题

刚接触语音、音乐或音频的研究生可以先把音频视觉问答想象成看带声音的短视频做选择题。每次输入有四样东西：一段视频画面 v、同一段视频的声音 a、一道文字问题 q，以及几个候选答案 o。目标是选出正确答案 y。关键在于很多题目必须同时用耳朵和眼睛，比如要听清讲解何时停止，又要看清场景何时从室内切到户外，才能解释为什么转场。只看画面或只听声音都会漏掉一半依据，所以系统必须保留跨模态的时间对齐和事件顺序，最后输出一个选项编号或选项内容。

下面这张论文图用一个滑板视频把这种需求具体化，读图时重点看声音和画面如何分三步汇成两条综合证据，再落到一道因果问题上。

> **看图路径：** 1. 先看上排三个步骤框的输入：室内滑板画面配讲解语音、约 10 秒处场景与音乐变化、之后动作延续；2. 再看蓝色综合证据条如何把场景切换时间和语音停止时间对齐为两条证据；3. 最后看问题与选项 C 的对应：室内讲解结束才转场到户外

[![原论文 Figure 1：Demonstration of LLM reasoning on AVQA.](https://arxiv.org/html/2610.20085v1/fig_avqa_demo.png)](https://arxiv.org/html/2610.20085v1/fig_avqa_demo.png)

*论文图 1。原论文 Figure 1:：“Demonstration of LLM reasoning on AVQA.”。*

图中上排展示了多模态推理过程：第一步理解室内片段，画面是平地上做基础滑板动作，声音是指导语，文字说明这是室内平地演示；第二步检测约 10 秒处的场景和声音变化，欢快的电子音乐响起，画面切到户外滑板场；第三步核验切换后发生了什么，音乐延续，人物在户外继续做同一个动作。下方的综合证据条把时间点对齐起来：证据一指出花式名称和室内外分界在 10 秒前后，证据二指出约 10 秒时人物关于动作的讲解停止。

最后的问题问为什么在 10 秒左右切到户外滑板场，正确答案是室内基础动作讲解已完成，所以转场。这个例子说明，音频视觉问答的输入处理必须同时抽取语音内容、音乐变化和场景变化，并保留它们的时间关系，否则无法支撑因果解释。

### 已有路线如何用文字和思维链帮助多模态推理

在本文之前，改进多模态推理主要有两条路线。第一条是增强多模态大模型内部的思维链，让模型在作答前先写出中间推理步骤，期望更充分地利用已看到的音视频证据。第二条是把多模态证据先用语言说出来，再交给文本大模型做后续推理，例如把视频帧聚合成字幕，或针对问题生成描述，再由文本模型综合判断。后者在视频问答和音频视觉问答中已有不少工作，关注如何聚合帧字幕、如何生成与问题相关的描述。

另一条相关路线是智能体式视频理解：文本智能体通过观察和工具调用，多轮向视觉或全模态模型索取与问题相关的证据，逐步积累后再作答，已有工作报告了不错的任务性能。还有视觉语言领域的提示优化研究，讨论为优化暴露什么样的视觉语言接口，但较少涉及同时包含音频和视频的全模态推理。本文的特殊之处不在于提出新的字幕方法或新的智能体工具，而在于把这 3 类系统都看成给自动提示优化提供不同文本接口的载体，比较哪种接口更容易被基于文本反馈的优化器改进。

### 论文要解决的接口比较问题是什么

全模态大模型对任务指令很敏感，同一段音视频换一种问法，可能注意到的感知细节不同，组织证据的方式也不同，手工写提示往往脆弱。自动提示优化的思路是用任务反馈迭代搜索更好的指令，在纯文本任务上已被证明有效。但这类优化器本身是基于文本反馈改写文本提示的，要用到多模态系统上，系统必须先暴露出文本优化接口：明确优化器能改哪些文字指令，又能看到什么样的反馈或中间信息。

论文提出的研究问题是：把中间多模态推理通过显式文本接口暴露出来，是否比直接优化端到端全模态模型的指令更有效。为此作者比较 3 种系统：直接推理系统只用一个全模态大模型直接消费音视频和问题作答；字幕推理系统先由字幕生成器在不知道问题的情况下写字幕，再由文本推理器看字幕答题；智能体子智能体系统由文本主智能体多轮向字幕子智能体和追问应答子智能体索取证据再作答。前者代表端到端接口，后两者分别代表静态外部化证据和动态获取证据的显式接口。

### 三种系统的整体流程和可优化位置在哪里

3 种系统都冻结所有大模型参数，只优化文字指令。直接推理系统的公式是模型同时读入视频、音频、问题和选项，再输出预测答案，可优化的只有端到端指令。字幕推理系统分成两步：字幕生成器只读音视频输出字幕，文本推理器读问题、选项、字幕和自己的指令输出答案，可优化的是字幕指令和推理指令两个位置。智能体系统更复杂：主文本智能体看问题、选项和交互历史决定动作，动作可以是再要一次字幕、发起一次针对性追问，或在证据足够时输出最终答案。

字幕部件和追问应答部件都是全模态模型，分别按各自指令工作，可优化的重点是主智能体工作流指令，感知侧的字幕指令和应答指令也可优化。

**OmniLLM × 文本指令：** OmniLLM 指能同时接收视频、音频和文本的全模态大语言模型，负责感知和作答；文本指令是告诉它做什么、按什么步骤和规则做的文字说明。二者搭配时，模型权重保持冻结，只有文字说明可改，因此优化只能通过改文字来引导同一个感知推理能力，组合的意义是把搜索空间限制在可读的指令上。

下图总览了 3 条路径的数据流向和指令位置，读图时注意路径长短和中转物的区别。

> **看图路径：** 1. 对比三行结构：直接推理只有一条路径，字幕推理多出字幕 c 的中转，智能体有多轮字幕与追问回路；2. 注意每块右上角的黄色指令标签：可优化的文本指令分别位于何处；3. 注意雪花图标含义：所有大模型权重都冻结，只改文字指令

[![原论文 Figure 2：Overview of the three systems we investigated and compared for instruction optimization.](https://arxiv.org/html/2610.20085v1/fig_system_overview.png)](https://arxiv.org/html/2610.20085v1/fig_system_overview.png)

*论文图 2。原论文 Figure 2:：“Overview of the three systems we investigated and compared for instruction optimization.”。*

图中第一行直接推理把视频加音频与问题加选项一起送入全模态模型，模型按端到端指令直接给出答案。第二行字幕推理把音视频先送入字幕生成器得到字幕，再把字幕与问题选项一起送入文本推理器得到答案，问题选项同时直达推理器。第三行智能体子智能体把问题选项送入文本智能体，文本智能体维护历史，多轮向右边的字幕生成器和追问应答器发出字幕调用和追问，再收回字幕和回答，最后单独输出答案。

图例说明浅青色是全模态模型，浅紫色是纯文本模型，雪花表示权重冻结，黄色标签表示可优化的文本指令。这种画法把优化器能改的地方和信息必须经过的中转站同时标了出来。

### 直接推理部件如何消费多模态输入

直接推理部件是基准线，也是最短的路径。它的输入处理是一次性把视频帧、音频波形或特征、问题文本和选项文本拼给同一个全模态模型，模型内部完成感知、证据组织和答案选择。文本指令的作用是告诉模型这是音频视觉问答任务，以及应遵循的步骤和规则，例如只依据视频中直接看到听到的内容、在相关时刻找支持选项的证据。作用是约束最终决策的证据接地，代价是整个推理藏在模型内部，优化器只能看到最终答案对错和模型回复，难以定位是哪一段感知或哪一步推理出了问题。

### 字幕生成器与文本推理器如何分工

字幕推理把感知和推理拆到 2 个模型。字幕生成器在不知道问题和选项的情况下读音视频，按字幕指令写一段全局描述；文本推理器只读这段文字加上问题选项，按推理指令作答。这种拆分的初衷是让证据可读、可检查。但它的输入处理有一个结构性代价：字幕必须在不知道什么才是关键细节时就把音视频压缩成文字，形成信息瓶颈。下游推理器只能在模糊的文字上做判断，原文明确指出这可能导致约 5 个百分点的下降，且换用不同推理器并未进一步拉大差距，说明瓶颈主要在字幕侧。

**字幕生成器 × 文本推理器：** 字幕生成器是只看音视频、不看问题的 OmniLLM，负责把看到听到的内容压缩成一段字幕；文本推理器是只看字幕、问题和选项的纯文本模型，负责推理出答案。二者分工是静态外部化证据，搭配后推理过程变得可读，但代价是问题相关的细节可能在字幕阶段就被丢掉，后面再聪明的推理也补不回来。

举例来说，如果问题问的是 10 秒处音乐起止与讲解停止的先后，而字幕只写了有音乐、场景切换，却没写讲解何时停止，推理器就无法还原时间关系。论文还报告，最初尝试用 Qwen3-Omni 做字幕生成器时，出现了遵循指令不稳定、字幕重复无意义的情况，因此后续两类多模型系统都改用 Gemini-2.5-Flash 做感知，这本身就说明字幕接口对模型指令跟随能力很挑剔。

### 主智能体与两个子智能体如何多轮协作

智能体系统的输入处理是多轮的。工作流总是先调用一次字幕，拿到全局显著事件和时间信息；之后主智能体每一步看问题、选项和已收集的历史，决定下一步动作：再要一次字幕、针对当前证据中的模糊点提一个高度具体的感知问题发给追问应答器，或在自认为证据足够时输出最终答案。字幕部件只管全局描述，追问应答部件只管回答主智能体发来的具体问题，两者都直接读原始音视频。主智能体本身看不到原始视频，但它有更长的、未被多模态输入占用的上下文，可以记住多轮收集的信息并基于记忆推理。

**文本智能体 × 子智能体：** 文本智能体是不能直接看视频的主控纯文本模型，负责记住历史、决定下一步是再要字幕、追问细节还是直接作答；子智能体是两个分工不同的 OmniLLM，一个负责全局字幕，一个负责回答追问。二者搭配实现动态获取证据，组合后多了按需补证据的能力，但也多了交互轮次和证据冲突的失败点。

这种设计的潜在好处是能补回字幕漏掉的细节，论文的错误分析也证实改进主要来自找回额外有用证据或更丰富的字幕。但代价是引入新的失败点：在直接推理做对而智能体做错的样本中，主因是感知证据冲突占 61.7%，其次是对有用证据推理错误占 27.3%。也就是说，多轮索取可能带来互相矛盾的描述，或把本来有用的证据用错，整体准确率与直接推理相当，并没有稳定超越。

### 没有训练模型时优化器实际在搜索什么

本研究没有训练任何模型权重，所有 OmniLLM 和文本模型参数都冻结。实际计算是提示搜索：在训练集上用当前指令运行系统，拿到预测答案，对照正确答案，再由作为优化器的文本大模型观察优化证据，提出新版指令。优化证据可以包括模型回复、中间推理轨迹，对智能体系统还包括智能体动作与子智能体观察的交互轨迹。优化目标是问答准确率，搜索中产生的候选指令在验证集上评估，选验证准确率最高者在 held-out 测试集上报告。COPRO 和 GEPA 都用 GPT-4.1 做优化器，搜索预算都是 2500 次试验，以保证搜索量可比。

**自动提示优化 × 文本化接口：** 自动提示优化指用文本优化器模型看训练样例的预测、正确答案和中间轨迹，再提出新版指令的迭代搜索；文本化接口指优化器能改的那些文字指令及其附带的反馈信息。二者搭配时，接口决定了优化器能看到什么、能改哪里，接口越长、环节越多，单靠最终答案对错提供的信号就越弱，优化也越难稳定迁移。

优化器的单步更新可以用下式概括，先说明符号再解释目标。

\[\phi^{\prime}=\mathcal{F}_{\mathrm{opt}}(\phi,e,y,\hat{y}).\]

式中 phi 是当前可优化的指令，e 是优化证据，y 是正确答案，y 帽是系统预测，Fopt 是优化器模型，phi 撇是修订后的指令。计算目标是找到在验证集上准确率更高的文字指令，而不是更新权重。需要区分的是原始目标、近似实现和优化步骤：原始目标是测试集上的真实效果，近似是用训练反馈加验证集选优来估计它，优化步骤是文本改写而非梯度下降。原文没有报告梯度路径，冻结参数也不意味着输出确定，同一指令多次运行仍可能因模型采样而变化。

**GEPA × COPRO：** GEPA 是论文主要使用的反思式优化算法，会结合模型回答和中间推理轨迹来反思并改写指令；COPRO 是作为参照的更简单的优化算法。两者都用 GPT-4.1 做优化器、用问答准确率（百分比）做目标、用相同 2500 次试验预算搜索，搭配比较的意义是检验提升是来自接口设计还是仅来自某个优化器更强。

### 数据划分模型配置与评估条件是什么

实验使用 Daily-Omni 基准，共 1197 道音频视觉多项选择题，覆盖 6 类任务。为满足提示优化需要搜索和验证选优，作者按类别分层划分为 125 道训练、125 道验证、947 道 held-out 测试，训练用于搜索，验证用于选候选指令，测试作为优化是否有效的主要衡量，还会报告全基准准确率供对照。直接单模型推理评估了 Qwen3-Omni-30B-A3B 的 Instruct 和 Thinking 两个版本以及 Gemini-2.5-Flash，其中 Qwen 本地部署，Gemini 经接口调用。字幕推理系统用 Gemini-2.5-Flash 写字幕、GPT-4.1 做纯文本推理；智能体系统同样用 GPT-4.1 做主文本智能体、Gemini-2.5-Flash 做感知。

评估指标是准确率，方向是越高越好。候选指令按验证集最佳选择，再在测试集评估，因此验证涨而测试不涨就说明泛化失败。代码已在 GitHub 公开，作者资源当前可用，但模型权重下载与系统运行是三件分开的事：Qwen 权重与 Gemini 接口、GPT-4.1 调用各有各自的获取方式，不能把代码公开等同于一键可复现全部大模型调用。

### 直接优化单个全模态模型指令带来多大变化

要回答的比较问题是：在其他条件不变时，只改直接推理的文本指令能否提高准确率，效果是否随模型而异。公平条件是同一模型、同一数据划分、同一优化目标和预算，只换优化器。指标方向是验证、总体和测试准确率越高越好，测试增量为相对各自未优化基线的百分点变化。

下表整理直接问答在 Qwen3-Omni 上的提示优化结果，覆盖 Instruct 与 Thinking 两种变体，对比未优化、COPRO 和 GEPA，列出验证集、总体与测试集准确率以及测试增量。

| 模型 | 优化器 | Val (125) Accuracy (%) | Overall Accuracy (%) | Test (947) Accuracy (%) | ΔTest |
| --- | --- | --- | --- | --- | --- |
| Qwen3-Omni Instruct | None | 72.80 | 72.18 | 71.81 | - |
| Qwen3-Omni Instruct | COPRO | 71.20 | 71.93 | 71.59 | -0.22 |
| Qwen3-Omni Instruct | GEPA | 75.20 | 72.01 | 71.49 | -0.32 |
| Qwen3-Omni Think | None | 69.60 | 69.76 | 69.06 | - |
| Qwen3-Omni Think | COPRO | 71.20 | 69.26 | 68.85 | -0.21 |
| Qwen3-Omni Think | GEPA | 72.80 | 69.92 | 70.01 | +0.95 |

从数字看，Instruct 基线测试为 71.81%，两种优化器反而微降；Thinking 基线测试为 69.06%，优化后基本持平，GEPA 仅高 0.95 个百分点。即使暴露更显式的思维链，Qwen 在这组直接接口上也没有获得稳定提升，说明直接优化的收益不是普遍成立，而依赖模型本身的指令跟随能力，这两组未胜出的负结果提示不能把某一个模型的成功推广到所有全模态模型。本表数值与单位依据论文 PDF。

下表对照 Gemini-2.5-Flash 直接推理的结果，设置与上表平行，用于检验同一流程在不同模型上的差异。

| 模型 | 优化器 | Val (125) Accuracy (%) | Overall Accuracy (%) | Test (947) Accuracy (%) | ΔTest |
| --- | --- | --- | --- | --- | --- |
| Gemini 2.5-Flash | None | 77.60 | 77.03 | 75.71 | - |
| Gemini 2.5-Flash | COPRO | 72.80 | 78.11 | 78.25 | 2.54 |
| Gemini 2.5-Flash | GEPA | 79.20 | 79.62 | 79.83 | 4.12 |

Gemini 基线测试为 75.71%，COPRO 提升到 78.25%，增加 2.54 个百分点，GEPA 提升到 79.83%，增加 4.12 个百分点，GEPA 的验证与总体准确率也高于基线；COPRO 的总体准确率上升，但验证准确率从 77.60% 降至 72.80%，不能说两种优化器都在全部划分同步上涨。同样的优化流程在 Gemini 上明显有效，论文将其归因于更强的指令跟随能力，但这仍是推测，有待验证。结论只在这次划分、这组预算和这组优化器下成立，Qwen 的反例表明模型相关性很强，不能夸大为所有直接接口都易优化。本表数值与单位依据论文 PDF。

### 优化后的指令文字发生了什么变化

要回答的比较问题是：GEPA 在直接接口和智能体接口上实际改了什么范围的文字，这与效果差异有何关联。比较对象是两份优化后指令的摘录，指标不是准确率而是作用范围，需要看原文引文才能判断。

| Interface | Selected optimized-instruction excerpt | Main scope |
| --- | --- | --- |
| Direct | “Using only what is directly seen or heard in the video …identify the single answer choice …best supported by the video evidence at the relevant moment.” | Evidence grounding and final decision |
| ReAct | “When reviewing the caption, carefully map each answer option to specific visual or audio events and their sequence. …identify any ambiguity …formulate a single, highly specific perceptual question …” | Caption acquisition, query formulation, etc. |

上表展示了直接 Gemini 推理与 ReAct 智能体经 GEPA 优化后的指令摘录及主要范围。直接接口的优化句强调只用视频中直接看到听到的内容、在相关时刻找最被支持的选项，作用范围是证据接地与最终决策；智能体接口的优化句要求对照字幕把每个选项映射到具体视听事件及其顺序、识别模糊并提出高度具体的感知问题，作用范围覆盖字幕理解、追问构造、证据获取与整合的长链。两类改写的差异在于：直接优化只收紧最终决策，改动集中，收益易迁移。

智能体优化改变整条交互策略，调用量明显减少却无测试增益，说明长链改写更容易过拟合验证分布。这张表没有数字准确率，不能单独证明优劣，必须与直接问答、字幕推理和智能体实验的数字表一起读，限制是摘录只是片段，全文指令见代码库，单凭摘录不能复现完整行为。

### 换成字幕推理接口后优化是否还有效

要回答的比较问题是：把感知压缩成字幕再推理，本身会损失多少，又能否通过优化字幕指令或推理指令补回来。公平条件是字幕都由同一 Gemini 生成，只换推理器或只换被优化的部件，优化器固定为 GEPA。指标仍是验证、总体和测试准确率，越高越好。

| System | Captioner | Reasoner | Optimizable Component | Accuracy (%) | Accuracy (%) | Accuracy (%) |
| --- | --- | --- | --- | --- | --- | --- |
| System | Captioner | Reasoner | Optimizable Component | Val 125 | Overall | Test 947 |
| Direct Inference system as baseline |  |  |  |  |  |  |
| Gemini | – | – | – | 77.60 | 77.03 | 75.71 |
| Same Caption, Reasoner Control |  |  |  |  |  |  |
| Captioner- Reasoner | Gemini | Gemini | None | 68.00 | 69.17 | 69.27 |
| Captioner- Reasoner | Gemini | GPT-4.1 | None | 68.00 | 69.50 | 70.01 |
| Captioner-Reasoner Optimization |  |  |  |  |  |  |
| Captioner- Reasoner | Gemini | GPT-4.1 | GEPA on Caption | 79.20 | 68.50 | 67.90 |
| Captioner- Reasoner | Gemini | GPT-4.1 | GEPA on Reasoner | 71.20 | 70.01 | 69.90 |

上表以直接 Gemini 推理为参照，对比同字幕下用 Gemini 或 GPT-4.1 做推理器，以及用 GEPA 优化字幕或优化推理器的效果。直接推理测试为 75.71%，而字幕推理在两种推理器下分别只有 69.27% 和 70.01%，低约 5 个百分点，说明分解本身带来大幅下降，换推理器并未进一步拉大差距。优化字幕时验证冲到 79.20%，但测试反而从 70.01% 降到 67.90%，验证涨测试跌，表明字幕接口对提示变化格外脆弱；优化推理器时验证为 71.20%，测试为 69.90%，稳定但无提升。表后解释的机制是信息瓶颈：字幕生成时不知道问题，只能压缩，推理器只能在含糊文字上判断。

限制是该结论只在 Gemini 写字幕、GPT-4.1 推理、GEPA 优化的条件下得到，且 Qwen 写字幕的脆弱行为未被纳入正式比较，尚未评测其他字幕策略能否缓解瓶颈。

| System | Optimization | Accuracy (%) | Accuracy (%) | Accuracy (%) |
| --- | --- | --- | --- | --- |
| System | Optimization | Val 125 | Overall | Test 947 |
| Gemini | None | 77.60 | 77.03 | 75.71 |
| ReAct | None | 74.40 | 76.11 | 76.03 |
| ReAct | GEPA | 76.80 | 75.77 | 76.03 |

上表是智能体系统的对照，比较直接 Gemini、未优化 ReAct 式智能体与 GEPA 优化主智能体工作流指令的效果。直接推理测试为 75.71%，未优化 ReAct 测试为 76.03%，GEPA 优化后仍为 76.03%，总体准确率甚至略降，说明智能体路径与直接推理相当，但优化没有带来 held-out 提升。理解这些结果需要结合行为分析：GEPA 确实在验证上找到更高分，并在交互策略上大幅改变，减少追问调用 35.8% 和总工具调用 15.0%，但测试无增益。论文给出两种可能解释，一是仅靠最终答案对错作为信号，对多阶段智能体太弱，二是部件本身的感知推理能力设限，但都还只是推测，有待补做更细的奖励或分阶段优化验证。

### 这些结论在什么条件下才成立

论文直接报告的是：在 Daily-Omni 的 125 训练、125 验证、947 测试划分下，用 2500 次试验预算和 GPT-4.1 做优化器，直接优化 Gemini-2.5-Flash 有效，Qwen3-Omni 两变体无效，字幕推理与智能体接口在当前配置下无可靠提升。证据支持的解释限于：字幕瓶颈导致约 5 个百分点下降、字幕优化验证测试背离、智能体证据冲突与推理错误占比、调用量减少但无增益。论文把 Gemini 更易优化归因于指令跟随更强，把智能体难优化归因于弱信号或能力上限，这些都明确是可能解释而非已验证因果。

尚未评测的范围包括：其他音频视觉基准、其他字幕策略、其他优化器与预算、多次运行的方差与显著性、推理延迟与调用成本。没有测量误判率、延迟或成本，就不能承诺这些接口会改善效率。容易产生的误解是把验证集上涨当成真实提升，或把显式接口更易看懂等同于更易优化，本文恰恰用验证涨测试不涨的例子说明两者要分开。缺证据不等于技术有错，只是说明当前信号不足以稳定驱动长链优化。

### 复现第一步做什么与需要保留的关键条件

值得尝试的情形是：你已有一个指令跟随较强的全模态模型，想低成本试探提示空间，且有可划分的训练验证集做选优。复现第一步不是直接跑大搜索，而是先按原文比例准备数据与基线：从 Daily-Omni 按类别分层取出训练验证测试，或复用作者代码库中的划分与推理配置，先跑通未优化的直接 Gemini 基线，确认能复现 75% 量级的测试准确率，再以小预算试 GEPA 是否在验证上稳定上涨。

关键超参数和信息条件要保留：优化器模型为 GPT-4.1、预算 2500 次、目标为问答准确率、验证最佳才上测试、所有被优化系统之外的模型权重冻结。字幕实验需固定字幕生成器为 Gemini-2.5-Flash 且不让它看到问题，智能体实验需固定先字幕后追问的工作流与历史记忆机制，否则比较条件就不一致。代码库地址已在论文脚注给出且当前可访问，但 Qwen 权重、Gemini 接口与 GPT-4.1 调用需各自按官方渠道获取，第三方链接只证明论文提到它们，不证明作者已开源这些模型。

### 什么时候值得尝试还需要补哪项验证

综合来看，如果目标是快速提升单个强指令跟随模型的音频视觉问答准确率，直接优化其任务指令值得一试，预期是百分点级的提升而非质变，且必须用 held-out 测试验证，不能只看验证上涨。如果目标是得到可解释的中间证据，字幕推理和智能体系统让推理更易检查和引导，但不要指望同一套自动优化会顺带带来准确率提升，还要承担信息压缩、证据冲突和长链过拟合的代价。

还需要补的验证有三项：一是在更多基准和划分下重复验证集选优到测试的迁移性，并报告多次运行的波动；二是为智能体设计更细的优化信号，例如分阶段奖励或对追问质量的直接评价，而不仅用最终答案对错；三是补测训练与部署成本，包括搜索试验次数、工具调用次数、输出延迟与费用，把准确率与开销一起报告。只有补齐这些，才能判断显式文本接口在可检查性之外的实际部署价值。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.20085v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
