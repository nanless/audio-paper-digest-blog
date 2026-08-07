---
title: "FormBharo: Designing and Evaluating a Voice Agent for Conversational Form Filling in Rural India"
date: 2026-08-07
draft: false
tags: [语音交互, 大语言模型, 语音识别, 鲁棒性, 基准测试]
categories: [论文速递]
description: "语音交互 | 7.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.06027"
---

# 📄 FormBharo: Designing and Evaluating a Voice Agent for Conversational Form Filling in Rural India

标签：#语音交互 #大语言模型 #语音识别 #鲁棒性 #基准测试

**7.0/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.0/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：高 | #语音交互 | #大语言模型 | #语音识别 #鲁棒性 | [arxiv](https://arxiv.org/abs/2608.06027)


### 👥 作者与机构

- 作者列表：Aman Dalmia、Sanskriti Midha、Jigar Doshi
- 机构信息：论文未说明作者所属机构
- 通讯作者：论文未标明通讯作者

### 💡 毒舌点评

把“LLM 只做语义提取和话术生成、校验与跳转完全交给规则层”的混合架构做到可部署粒度，并给出成本—延迟—准确率的 Pareto 选择流程，这是工程洞察上的亮点；但整个 benchmark 全部来自脚本化模拟用户和单次录音，所谓 pilot 没有给出任何真实通话数据，端到端结论的生态效度仍然存疑。

### 📌 核心摘要

论文解决印度低识字人群通过电话语音对话完成福利表单填写的问题，提出 FormBharo 混合语音代理：STT 转写后由 EXTRACT LLM 抽取表单字段，规则层负责校验、重试、跳转与分支控制，再由 REPLY LLM 生成自然语气的下一问，最后由 TTS 播放。相比直接让 LLM 做完整对话或纯 touch-tone IVR，该设计把 LLM 限制在语义理解与话术生成上，用确定性规则兜底，使小模型在端到端表单完成率上能追赶甚至超过前沿模型。论文发布 FormVoiceAgentBench，包含 380 条人工录制印地语语音、960 场模拟通话、3760 条单元测试。结果显示组件级准确率并不能预测端到端完成率：GPT-5.5 在参考转录上逐轮抽取准确率达 99.79%，但 Scribe v2 转写下表单完成率仅 89.37%，而 Gemini 3.5 Flash 达到 92.50%；GLM-5.1 在 Scribe v2 转写下表单完成率暴跌至 58.66%，约下降 41 个百分点。实际意义在于给出一个面向低资源、高噪声、强成本约束地区的可部署语音表单系统范式，并承诺开源评测基准。主要局限是数据全部来自脚本化模拟用户和单次声学条件，缺少真实通话、真实错误口述、现场评估和用户研究。

### 🔗 开源详情

- 代码：论文中明确给出的发布地址为 https://github.com/dalmia/AAAI-FormBharo-final/tree/main/code ，但表述为“Code and data will be made available”，当前无法确认该地址是否已实际公开代码。
- 模型权重：论文中未提及任何模型权重开源链接；实验使用的 ASR/LLM 模型（如 Scribe v2、Chirp 3、Saaras v3、GPT-4o-transcribe、Nova-3、GPT-5.5、Mistral Medium 3.5、Claude Sonnet 4.6、Gemini 3.5 Flash 等）均为托管 API 模型，未开放权重。
- 数据集：FormVoiceAgentBench —— 配对人工录制的印地语语音与 3,760 个多轮对话测试，覆盖 960 个模拟电话；用于评估语音转录、字段抽取、回复生成及端到端表单完成。论文未单独给出独立数据集链接，说明 code and data 将发布在 https://github.com/dalmia/AAAI-FormBharo-final/tree/main/code ；具体开源协议论文中未提及。
- Demo：论文中未提及在线 Demo。
- 复现材料：论文包含评估方法（单元测试/集成测试）、附录 A 表单完整呼叫流、附录 B 回复评判准则与提示词、附录 C 含 95% 置信区间的完整结果。实验环境：MacBook Pro (Apple M4 Pro, 24GB)、macOS 15.7、Python 3.11，依赖包括 pipecat-ai 1.2.1、openai 2.15.0、instructor 1.13.0、pydantic 2.12.3、jiwer 4.0.0、indic-nlp-library 0.92、pydub 0.25.1、numpy 2.2.6。未设置随机种子；所有模型由托管 API 提供，每次配置在完整测试集上运行一次。
- 论文中引用的开源项目：
  - Calibrate（Dalmia and Doshi 2025）—— 评估框架；论文正文未给出 URL，是否公开未说明。
  - pipecat-ai 1.2.1 —— https://github.com/pipecat-ai/pipecat
  - openai 2.15.0 —— https://github.com/openai/openai-python
  - instructor 1.13.0 —— https://github.com/jxnl/instructor
  - pydantic 2.12.3 —— https://github.com/pydantic/pydantic
  - jiwer 4.0.0 —— https://github.com/nikvaessen/jiwer
  - indic-nlp-library 0.92 —— https://github.com/anoopkunchukuttan/indic_nlp_library
  - pydub 0.25.1 —— https://github.com/jiaaro/pydub
  - numpy 2.2.6 —— https://github.com/numpy/numpy

### 🏗️ 方法概述和架构

FormBharo 是一条电话语音会话流水线，输入是 8 kHz 电话音频，输出是 TTS 语音和最终填充的表单状态。整体流程为：VAD 检测用户停顿时结束当前轮，STT 将音频转成文本；EXTRACT LLM 结合最新转写和对话历史抽取本回答中包含的全部表单字段；规则层校验字段、更新表单状态、处理重试和分支，并选择下一个问题；REPLY LLM 将规则层给出的“下一个问题”工具调用转化为自然印地语问句；TTS 播放该问句；若表单已完成，REPLY 决定结束通话。

核心组件包括四部分。第一，STT 模块负责语音转写，论文比较了 5 个商用/开源 STT 模型，并同时报告 WER 和 LLM-WER。第二，EXTRACT 是一个 LLM 组件，输入为当前用户转写文本、对话历史以及可用的字段定义；输出为该轮回答中包含的所有字段值，对于类别字段返回选项索引，而不是自由文本；它还输出一个简短的 acknowledgement 与抽取并行生成，用于降低用户感知延迟。EXTRACT 需要能够避免重复询问已回答字段，因为一轮回答可能包含多个字段。第三，规则层是系统的状态机核心：对每个字段执行内置校验，如手机号必须为 10 位、日期必须为过去日期、姓名有最小长度；校验失败时检查该字段重试次数，未达到上限则将校验错误传给 REPLY 让其重新提问，达到上限后对必填字段结束通话、对可选字段跳过；字段写入统一表单状态，分支（如怀孕则问孕周、不怀孕则问新生儿姓名和出生日期）由规则层根据状态显式计算并选择下一个问题。第四，REPLY 是另一个 LLM，它接收规则层的工具调用结果，生成自然、单句、无冗余确认的印地语问句；其回答质量用五个维度的 LLM judge 评估。

组件间的数据流是：STT 转写文本与历史一起进入 EXTRACT；EXTRACT 输出字段候选值和 skip 标志；规则层校验后决定是接受、重试、跳过还是结束；规则层选择的下一个问题作为工具调用注入 REPLY；REPLY 的文本进入 TTS。系统还实现了打断处理：若用户在推理过程中开始说话，当前回合立即终止，代理回到等待状态。设计动机是尽量降低 LLM 带来的不可控性：LLM 只承担“理解自然语言”和“生成自然语言”这两处最需要泛化的环节，所有可枚举的校验、跳转和分支逻辑都使用确定性代码。这样既降低延迟和成本，也让较小、较便宜的模型在规则层纠错下达到与前沿模型相当的表单完成率。

下图展示了 FormBharo 的整体系统架构与各模块之间的数据流。

![Figure 1: FormBharo’s architecture. EXTRACT extracts the form values from the transcribed text. The rule-based layer validates the extracted values,](https://arxiv.org/html/2608.06027v1/x1.png)

图中可见用户语音先经 VAD 与 STT 进入 EXTRACT LLM，规则层完成字段校验、状态更新、分支选择与重试控制，随后 REPLY LLM 将下一个问题转化为自然印地语问句并由 TTS 播放。


评测框架 FormVoiceAgentBench 的构建方法也是一种方法贡献：5 个模拟用户、12 个字段，每个字段具有“值—参考转写—音频录音”三种表示；参考转写由 LLM 生成并在字段级约束下加入难拼写姓名、易错数字和并列表达；音频由标注者录制，覆盖 4 种声学条件；根据表单分支组合出每条路径，再叠加声学条件形成 960 场模拟通话。单元测试把 EXTRACT 和 REPLY 分开评测，集成测试则把 STT 转写错误传播进 EXTRACT，再通过规则层得到最终表单完成率。

下图展示了构建 FormVoiceAgentBench 所用的注册表单呼叫流程。

![Figure 3: Call flow of the enrollment form used to build FormVoiceAgentBench. The agent speaks first and asks one question at a time, in the order shown.](https://arxiv.org/html/2608.06027v1/x3.png)

图中可见问题按固定顺序逐轮提出，分支条件决定是否进入后续字段，每个字段还标注了校验失败时的重试次数与跳过/结束逻辑。

### 💡 核心创新点

1. 混合 LLM 与确定性规则层的任务划分。此前语音对话系统往往让 LLM 端到端处理或完全依赖 ASR 结果；FormBharo 把“理解”和“表达”交给 LLM，把“校验、重试、分支、状态推进”交给规则层。该设计让规则层可以纠正提取类型错误，例如 Gemini 3 Flash 在参考转录下逐轮抽取只有 95.96%，表单完成率却达到 100%，证明混合架构能够容忍组件级噪声。
2. 提出 FormVoiceAgentBench，一个针对低识字人群印地语电话表单填写场景的语音评测基准。它包含 380 条人工录音、960 场模拟通话、3760 条测试，覆盖背景噪声、距离、语速和分支组合，同时避免暴露真实用户 PII。相比只测 ASR WER 的 Indic 语音资源，它直接测评“表单字段是否正确捕获”这一任务级结果。
3. 建立组件级到端到端的级联评测方法。单元测试隔离 STT、EXTRACT、REPLY，集成测试让 STT 错误实际传播到抽取和规则层；该方法揭示了组件级准确率与端到端完成率不匹配、错误既传播又抵消的现象，例如 GPT-5.5 在参考转录上抽取最强但端到端完成率不是最高。
4. 面向部署的 Pareto 成本—延迟—准确率选择流程。在硬性约束下筛除不可部署模型，对 Pareto 前沿模型使用加权和标量化评分，根据部署优先级选择 EXTRACT 和 REPLY 模型。这为 LMIC 场景下受 API 成本和电话延迟约束的语音代理选型提供了可复用的工程方法。

### 📊 实验结果

论文主要指标为 STT 的 WER/LLM-WER、EXTRACT 逐轮抽取准确率、端到端表单完成率，以及 REPLY 响应准确率、p95 延迟和成本。STT 对比中，Nova-3 的 WER 最低（0.826），但 LLM-WER 为 0.104，排名靠后；Chirp 3 的 LLM-WER 最低（0.055），但成本为 0.424 美元，约为其他模型的两倍以上；Scribe v2 的 LLM-WER 为 0.062，成本 0.172 美元，综合表现最好，因此被选为最终 STT。

下图展示了满足部署约束后 REPLY 模型在成本、响应准确率与 p95 延迟之间的权衡。

![Figure 4: Cost–quality–latency trade-off among REPLY models satisfying the deployment constraints. The logarithmic x-axis shows cost per turn,](https://arxiv.org/html/2608.06027v1/x4.png)

图中可见 GPT-5.4-mini（星标）与 Gemini 3 Flash 均位于 Pareto 前沿，最终选择 GPT-5.4-mini 以在准确率和成本之间取得更优折中。


下表保留主方法、最强基线与关键异常项，数字来自论文 Table 4/5：

| Model | EXTRACT 准确率(ref, %) | EXTRACT 准确率(Scribe v2, %) | 表单完成率(Scribe v2, %) |
|---|---|---|---|
| GPT-5.5 | 99.79 | 98.62 | 89.37 |
| Gemini 3.5 Flash | 99.36 | 98.94 | 92.50 |
| Claude Sonnet 4.6 | 99.15 | 98.94 | 93.01 |
| Gemini Pro | 97.23 | 97.29 | 93.47 |
| GLM-5.1 | 98.72 | 63.40 | 58.66 |

参考转录下，GPT-5.5 的抽取准确率最高（99.79%），但表单完成率不是最高；Gemini 3 Flash 和 Gemini 3.5 Flash 并列 100% 表单完成率。真实转写下，抽取准确率中位数下降 0.42—3.14 个百分点，表单完成率中位数下降 7.38—13.56 个百分点；GLM-5.1 在 Scribe v2 转写下表单完成率下降约 41 个百分点，是最大的模型级退化。

模型选择顺序为先选 STT、再选 EXTRACT、最后选 REPLY。EXTRACT 选择中，论文先施加硬约束（p95 延迟低于 55 s，表单完成率高于 90%），排除 Gemini Pro 和 Gemini 2.5 Flash，剩余六个候选全部位于 Pareto 前沿；在相等权重下 Mistral Medium 3.5 排名最高（U=0.81），但在部署优先权重（wℓ=0.1）下扫描 wa 从 0.50 到 0.90 时，Gemini 3.5 Flash 在 0.50 ≤ wa ≤ 0.61 领先，Claude Sonnet 4.6 在 0.62 ≤ wa ≤ 0.90 领先；最终选择 Gemini 3.5 Flash，因为它仅比 Claude Sonnet 4.6 低 0.51 个百分点，但延迟更低、成本不到其一半。REPLY 实验中，固定 Scribe v2 + Gemini 3.5 Flash 后，Claude Sonnet 4.6 在 Scribe v2 转写下响应准确率最高（97.77%），Gemini 3 Flash 延迟最低（p95 约 2.66 s），GPT-5.4-mini 成本最低（约 0.0008 美元/轮）；在 p95 延迟 <44 s 且响应准确率 >95% 的硬约束下，Claude Sonnet 4.6 和 Gemini 3.5 Flash 被排除，Pareto 过滤后剩下 GPT-5.4-mini 和 Gemini 3 Flash，最终按加权标量化选择 GPT-5.4-mini。论文未提供真实用户通话或现场 pilot 的量化结果。

下图展示了满足部署硬约束后，各 EXTRACT 候选模型在成本、表单完成率与 p95 延迟之间的 Pareto 权衡。

![Figure 2: Cost–quality–latency trade-off among EXTRACT models satisfying the deployment constraints. The logarithmic x-axis shows cost per turn,](https://arxiv.org/html/2608.06027v1/x2.png)

图中可见 Gemini 3.5 Flash（星标）在准确率、成本与延迟之间取得较好平衡，因而被最终选中；Sonnet 4.6 的表单完成率略高，但成本与延迟明显更大。

### 🔬 细节详述

- 训练数据：不适用，论文未训练新模型；benchmark 数据由 5 个模拟用户资料生成，使用 GPT-5.5 生成值、期望表单项和参考转写，5 名来自两个邦的标注者录制音频，4 种声学条件，共 380 条音频、960 场模拟通话。
- 损失函数：不适用，系统无训练阶段。
- 训练策略：不适用，STT、EXTRACT、REPLY、TTS 均为 API 或现成模型推理，未进行微调。
- 关键超参数：非推理模型 temperature=0；推理模型 EXTRACT 使用中等推理强度，REPLY 使用低推理强度；输出上限 16000 tokens；输入最近 200 轮对话。VAD 使用 Silero，8 kHz 采样率，语音开始置信阈值 0.10 s，静音结束阈值 0.20 s，置信度下限 0.7，响度下限 0.6，说话结束后额外等待 0.4 s，3.0 s 无语音则重新提示。
- 训练硬件：不适用；实验在 MacBook Pro（Apple M4 Pro，24 GB，macOS 15.7）上运行，Python 3.11，使用 pipecat-ai 1.2.1、openai 2.15.0、instructor 1.13.0、pydantic 2.12.3、jiwer 4.0.0、indic-nlp-library 0.92、pydub 0.25.1、numpy 2.2.6。
- 推理细节：电话侧经 Exotel 提供 8 kHz μ-law 音频，WebSocket 传输；benchmark 音频为 16 kHz 单声道 16-bit PCM；TTS 使用 Google Cloud Chirp 3 HD 女性印地语声音 Achernar，语速降为 0.9 倍。STT 和 LLM 通过 OpenRouter 等服务调用，未设置随机种子，API 不提供确定性保证，每个配置只在完整测试集上评估一次，置信区间反映测试项间差异而非重复运行差异。
- 评测规模：EXTRACT 单元测试 1,880 条；REPLY 单元测试 1,880 条（其中 920 条要求生成回复，960 条检查是否正确结束通话）。
- 正则化或稳定训练技巧：不适用，论文未涉及训练稳定化。

### ⚖️ 评分理由

*   创新性 (1.2/2)：证据[A_METHOD][A_SUMMARY]：将LLM限定在语义抽取与话术生成、由确定性规则层承担校验/重试/分支/状态推进的混合架构，并建立组件级到端到端的级联评测与Pareto加权选型流程，属于系统级设计贡献；但各组件均为现成API模型，未提出新模型或新训练方法，故不给更高分。

*   技术严谨性 (1.0/1.5)：证据[A_METHOD][A_RESULTS]：规则层状态机、字段校验/重试/分支、打断处理与集成测试数据流设计清晰，且用LLM-WER与表单完成率揭示组件准确率不能预测端到端表现，逻辑自洽；但集成测试仍是预生成轮次替换而非自由运行端到端，无法覆盖VAD切分、打断等真实行为，故技术严谨性受限。

*   实验充分性 (1.0/1.5)：证据[A_RESULTS][SCORING_SOURCE_8/29]：构建380条录音、960场模拟通话、3760条单元测试，对5个STT和11个LLM做组件与级联比较，并报告准确率、p95延迟、成本及95%置信区间，实验规模较充分；但数据全部来自脚本化模拟用户，缺少真实通话、混合声学条件和现场pilot量化结果，且未与传统IVR或人工流程做部署对比，故不足以给更高分。

*   清晰度 (0.8/1)：证据[A_METHOD][SCORING_SOURCE_3/29][SCORING_SOURCE_22/29]：系统架构、组件数据流、分支路径和模型选择流程均有明确文字与附录呼叫流、评判提示词；但正文未说明作者机构与通讯作者，且部分关键信息依赖附录才能核对，组织清晰度有提升空间。

*   影响力 (1.0/1.5)：证据[A_SUMMARY][SCORING_SOURCE_3/29]：面向印度低识字人群电话表单填写这一真实社会应用场景，提出首个针对该人群的对话式表单填写语音代理并公开评测基准，对语音交互与社会公益领域有实际价值；但尚无真实部署数据，且语言仅限印地语，影响范围仍受限。

*   开源 (0.5/1.5)：证据[A_OPEN][SCORING_SOURCE_4/29]：论文明确承诺Code and data will be made available并给出GitHub地址，但当前无法确认已实际公开，属于明确承诺未来开放但尚未发布，按固定锚点给0.5。

*   可复现性 (0.3/0.5)：证据[A_OPEN][SCORING_SOURCE_29/29]：论文披露了完整依赖版本、运行环境、VAD阈值、温度/推理强度、输出上限、200轮上下文及评测流程，大部分配置充分；但未设置随机种子且API无确定性保证，每个配置只运行一次，置信区间仅反映测试项间差异而非重复运行差异，故少量缺失给0.3。

*   工程/实践价值 (1.2/1.5)：证据[A_RESULTS][SCORING_SOURCE_15/29]：给出电话语音流水线的可部署实现，包含STT选型、硬约束筛选、Pareto前沿分析、加权标量化选型以及端到端成本/延迟/准确率权衡，并提供打断处理、重试上限等工程细节；但未报告电话基础设施、TTS和整体运维成本，端到端部署成本核算不完整。

### 🚨 局限与问题

1. 论文明确承认的局限：
   - 基准只包含脚本化、表达良好的答案，没有真实用户常见的错误、部分回答、自我纠正和犹豫。
   - 每场通话只施加单一声学条件，未测试噪声+距离+语速组合的混合条件。
   - 只有 5 个模拟用户、5 名录音者、来自两个邦，语言仅限印地语，未覆盖多语言用户。
   - 未评估 TTS 输出质量。
   - LLM judge 校准样本量较小，只有 50 条迭代集和 50 条留出集。
2. 审稿人发现的潜在问题：
   - 论文声称“piloted in rural Maharashtra”，但全文没有任何来自 pilot 的真实通话数据、完成率、挂断率或用户反馈的量化证据，部署主张偏强。
   - 集成测试并非真正自由运行的端到端测试：它是在单元测试框架中把 STT 转写替换进预生成的轮次输入，再通过规则层计算表单状态；这无法覆盖真实系统中 VAD 切分错误、用户打断、超时重试和 LLM 输出格式漂移等行为。
   - 模拟用户的参考转写由 GPT-5.5 生成，可能低估了真实口语中方言、语法错误和词汇变体对 STT 和 EXTRACT 的影响。
   - 没有与传统的 touch-tone IVR、人工电话登记或纯规则式口语系统做部署成本/完成率对比，因此无法证明该方案相对现有工作流的实际增益。
   - 模型选择采用“先选 STT，再选 EXTRACT，再选 REPLY”的顺序贪心，而不是联合优化；三个组件之间存在误差交互时，顺序选择可能得到次优组合。
   - 论文未报告电话基础设施、TTS 和整体运维成本，只报告了 STT/LLM 的 API 成本，端到端部署成本被低估。

---

[← 返回 2026-08-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-07/)
