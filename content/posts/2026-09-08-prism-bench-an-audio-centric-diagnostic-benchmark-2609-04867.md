---
title: "PRISM-Bench: An Audio-Centric Diagnostic Benchmark for Text-to-Audio-Video Generation"
date: 2026-09-08
draft: false
tags: [音视频生成, 基准设计, 基准测试, 人类参与评测, 音视频]
categories: [论文速递]
description: "针对文生音视频评估重视频轻音频的问题，PRISM-Bench 以语音/音乐/音效与 On-screen/Off-screen 交叉分层与四维度 35 条细粒度标准组织 900 条人工校验样本，并用盲式并排、以真值为锚的 MLLM-as-a-Judge 两阶段打分实现超过 70% 的人类一致性，揭示前沿闭源模型在可感保真度上已超真值但在可见声源同步与精细声音控制上仍落后。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.04867"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "PRISM-Bench：用音频类型与声源可见性交叉诊断文生音视频的接地能力"
paper_digest_original_title: "PRISM-Bench: An Audio-Centric Diagnostic Benchmark for Text-to-Audio-Video Generation"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.04867"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.04867.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.human-evaluation","label":"人类参与评测"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对文生音视频评估重视频轻音频的问题，PRISM-Bench 以语音/音乐/音效与 On-screen/Off-screen 交叉分层与四维度 35 条细粒度标准组织 900 条人工校验样本，并用盲式并排、以真值为锚的 MLLM-as-a-Judge 两阶段打分实现超过 70% 的人类一致性，揭示前沿闭源模型在可感保真度上已超真值但在可见声源同步与精细声音控制上仍落后。"
paper_digest_authors: [{"affiliations":["Shanghai Artificial Intelligence Laboratory, Shanghai, China"],"name":"Yuchen Sun"},{"affiliations":["Meituan, Beijing, China"],"name":"Qian Yang"},{"affiliations":["Meituan, Beijing, China"],"name":"Jun Wang"},{"affiliations":["Meituan, Beijing, China"],"name":"Detai Xin"},{"affiliations":["Meituan, Beijing, China"],"name":"Guoqiao Yu"},{"affiliations":["Meituan, Beijing, China"],"name":"Guanglu Wan"},{"affiliations":["Shanghai Artificial Intelligence Laboratory, Shanghai, China"],"name":"Qi Jia"}]
paper_digest_abstract_sha256: "e68e619463c6ff8385d6e35806626009698582dbb374e94a0b31093d7692d668"
paper_digest_sidecars: {"citation.bib":{"sha256":"68e5eabc9f14970710cb775aa19aad6e49cd0c54ef0617252d05f90c41a07a45","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04867/citation.bib"},"citation.json":{"sha256":"572a494203cb2f8167304220b832c6a6ca96b8b12cc8b7c684d72a94a42af6c5","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04867/citation.json"},"citation.ris":{"sha256":"37033289aff18c81f68565e71f1ee38c9cbdd543cdbc32672a810d3b2bf64a26","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04867/citation.ris"},"rethink-context.json":{"sha256":"4cc961dff99e0e2344b26456384fab95df1e508f75dc8cd845bf42fcfa49f347","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04867/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "008e3c2e1ab78101e2c9f14ebe426aa48f2747267faf6bdc79bc9e7c25857a90"
paper_digest_api_reader_plan_sha256: "0a5189d332795cab290193d0ffc3853b3d81b2538d652cd989e38078bcb66111"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "35dd1e0818296a2ae22e3cbfc26dd59e8f122ce11e657272751f2998e593ffee"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "f033e249e22ede3cf6610ec102ba201dacea0b2d4649bab8fed3a53ef3db5b7b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f5e60a34421f9caa410f286adcb77389825a12610e183bf2050794b80525c08f"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "67536c7d0ba3fbb5ac4a374209dbc8d405ce706ab4a2a77dfad854057a1cc978"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 PRISM-Bench：用音频类型与声源可见性交叉诊断文生音视频的接地能力

> 英文题目：*[PRISM-Bench: An Audio-Centric Diagnostic Benchmark for Text-to-Audio-Video Generation](https://arxiv.org/abs/2609.04867)*

> 标签：#音视频生成 | #基准设计 | #基准测试 | #人类参与评测 | #音视频
>
> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Yuchen Sun：Shanghai Artificial Intelligence Laboratory, Shanghai, China
- Qian Yang：Meituan, Beijing, China
- Jun Wang：Meituan, Beijing, China
- Detai Xin：Meituan, Beijing, China
- Guoqiao Yu：Meituan, Beijing, China
- Guanglu Wan：Meituan, Beijing, China
- Qi Jia：Shanghai Artificial Intelligence Laboratory, Shanghai, China

## 📌 核心摘要

文本到音视频生成以文本提示为输入、同步生成视频与对应音频为输出，难点在于不同音频类型与声源是否可见对时序对齐与物理合理性提出异质化接地要求，现有基准多将音频视为视频附属而缺乏联合分层诊断。PRISM-Bench构建了900条人工校验样本的诊断基准，其方法链为：先经PySceneDetect分场景采样并截取至88秒片段形成评测单元，再由Gemini 2.5 Pro多模态字幕与Qwen3-Omni纯音频字幕经GPT-5 Chat（`gpt-5-chat-latest-2025-08-07`）融合生成结构化标签与人校正字幕，接着按音频类型（Speech / Music / Sound）与可见性（On-screen / Off-screen）正交划分为On-screen、Off-screen、Mixed各300对的三个子集，最后以标签条件激活的双阶段盲式并排裁判对音频视觉一致性等四维度35准则进行绝对打分与证据生成。与以往按任务或场景的整体评分不同，该设计强制在相同提示下分离感知保真与可见源接地，揭示保真提升不等同接地提升。评测显示Seedance 2.0在On-screen Final得分97.73超过校准后真值91.78，但在音频视觉一致性仅20.91略低于真值20.93，暴露可见源同步仍是瓶颈。该结论适用于当前8种主流系统在所覆盖的影视与日常场景，跨语言与长时叙事外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://huggingface.co/spaces/prismbench/prismbench-leaderboard> — 链接可访问（HTTP 200）

- 数据相关资源：<https://huggingface.co/spaces/prismbench/prismbench-leaderboard> — 链接可访问（HTTP 200）

- 演示资源：<https://huggingface.co/spaces/prismbench/prismbench-leaderboard> — 链接可访问（HTTP 200）

- 复现相关资源：<https://huggingface.co/spaces/prismbench/prismbench-leaderboard> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么要单独诊断音频？

本解读面向刚进入语音、音乐与音频方向的研究生，目标是让你能复述 PRISM-Bench 在做什么、怎么做的、以及在什么条件下得到的结论。输入是文本提示，输出是同时包含画面与声音的音视频片段，任务称为文生音视频。论文指出已有评测多把音频当作视频质量的附属，或把音频单独评而不看它是否与画面事件对应，这会低估音频侧的真实难度。

为此作者提出以音频为中心的诊断式基准，强调两件事必须同时被检验：一是声音内容本身属于语音、音乐还是环境音，二是声音的来源是否在画面内可见。研究没有训练新的生成模型，而是构造评测数据与评测流程，并用该流程对现有系统做系统性诊断。需要保留的关键信息是数据规模与结构、评估维度的定义、以及作为评委的多模态大模型的盲式并排协议与人类一致性结果，后续所有结论都依赖这些条件。

### 同类工作在评什么，本文的交叉分层补了哪块空白？

文生音视频的生成侧已从松散拼接走向更统一的多模态架构，例如支持双通道音频输出的系统，但评测侧仍滞后。按输入与目标可把相关工作分为 3 类。第一类是单模态质量评测，如面向视频分布与运动的指标与面向音频分布的指标，它们不直接回答声音是否与可见事件同步。第二类是跨模态相似度或对齐分数，它们能给出整体相关性，但不按音频类型与声源可见性做交叉分解。

第 3 类是近年出现的音视频联合基准，覆盖多任务、物理合理性或多说话人场景，也引入了基于多模态大模型的打分，但其分类多围绕任务、场景或失效模式组织，未把语音、音乐、音效与 On-screen、Off-screen 两个因子显式正交化。PRISM-Bench 的差异在于把这两个因子作为基准的组织轴，配合 4 维度与 35 条细则，使同一系统在不同音频条件下的行为差异可被直接对比，而不是被聚合分数平均掉。

### 如何把音频评估从笼统好坏拆成可定位的诊断问题？

论文把诊断问题形式化为两轴 4 维的结构。两轴是音频类型与声源可见性。音频类型取语音、音乐、音效 3 类，覆盖从语言内容到乐器演奏再到环境事件的不同生成机制。声源可见性取 On-screen 与 Off-screen，前者要求声音与画面内可见主体在时间与因果上可对应，后者要求在无可见声源时仍能做出合理声场与指令跟随。两轴交叉得到 3 个评测子集：On-screen、Off-screen 与 Mixed，分别检验可见接地、不可见声学构建以及二者共存时的协调能力。

4 维是音视一致性、音频质量、音频表现力与提示跟随。音视一致性只在可见接地有意义时激活，关注口型同步、演奏动作与声音的对应及时序合理性；音频质量关注信号本身的自然度与技术真实感；表现力关注情绪、氛围与场景支撑是否到位；提示跟随只考核音频侧是否按文本要求生成对应内容与风格。

这种分解使后续每个样本只需激活与其标签相关的维度与细则，避免无关标准干扰。

**音频类型 × 声源可见性：** 音频类型指语音、音乐、音效 3 类内容各自的生成难点不同，声源可见性指声音是否对应画面内可见的发声主体，二者正交组合的理由是同一模型在不同内容与不同接地条件下的失败模式完全不同，组合后形成 On-screen、Off-screen、Mixed 3 种诊断设置，使聚合分数无法掩盖的音乐可见同步或 Off-screen 声音控制等短板被显式暴露。

### PRISM-Bench 的整体链路如何组织数据与评估？

PRISM-Bench 由两部分紧耦合组成：面向诊断的数据集与可见性感知的评估框架。数据集侧负责提供覆盖两轴的 900 条人工校验样本，评估框架侧负责在这些样本上以统一协议对生成结果打分。数据侧先通过场景感知采样保证电影、对白、纪录片、音乐会与日常生活等来源的生态多样性，再经多阶段标注与人工校正得到可用于条件激活的标签与描述。评估侧以真值片段为锚，采用盲式并排与 2 阶段评委设计，按激活标签只对相关维度打分。

整体链路可按单样本视角理解：一条不超过 8 秒的音视频片段先被切分与标注，得到其音频类型与可见性标签以及人工校验描述；生成模型根据同一描述生成候选视频；评委在不知道哪条是真值的情况下，对两条候选按阶段分别打分并给出证据陈述，最后按可见性规则聚合得到可按维度、类型与子集分解的分数。

下图展示数据构建与标注管线的具体流向，先看整体分工再看各阶段输入输出。

> **看图路径：** 1. 从左侧 Video-Audio Segments 与 Pure Audio 两路输入出发，追踪到 Gemini 2.5 Pro 与 Qwen3-Omni 的并行标注；2. 观察 GPT-5-chat Fusion 如何把多源字幕融合成带 On-screen/Off-screen 标签的统一描述；3. 确认 Human Correction 作为最后一步对同步、文本内容与标签的校验位置

> **论文图 3（像素未随页面持久化）**：Figure 3. Data construction and annotation pipeline.

*论文图 3。原论文 Figure 3.：“Data construction and annotation pipeline.”。*

该管线从 Video-Audio Segments 与 Pure Audio 两路输入开始，上路经 Gemini 2.5 Pro 得到视觉与音频的初步描述，下路经 Qwen3-Omni 在纯音频输入下得到更聚焦的声学描述与语音、音乐、音效等辅助标签，二者在 GPT-5-chat Fusion 阶段被融合成一致的片段级标注并显式判定 On-screen 或 Off-screen，最后经 Human Correction 对同步描述、语音内容、音乐与环境事件及标签做人工校验，形成每子集 300 对的基准。每条样本的描述长度分布也随子集变化，On-screen 通常更长以容纳可见声源与接地关系的描述。

### 标签如何驱动两阶段盲评，分数与证据如何产生？

评估框架的核心是标签条件激活、盲式并排输入与 2 阶段分工。标签条件激活指每个样本的人工校验标签决定本次评估只包含哪些维度的哪些类型细则，例如某样本仅激活语音与 On-screen，则音效与 Off-screen 相关细则被忽略，音视一致性与音频质量在第一阶段评估，表现力与提示跟随在第二阶段评估。

盲式并排指评委同时收到两条候选视频，每条开头有 0.5 秒黑色标识帧标为 1 或 2 仅用于映射身份，评委在不知道哪条是生成、哪条是真值的情况下独立打分，顺序随机以减少呈现偏置。2 阶段分工指第一阶段不给文本描述，仅基于画面与声音的感知证据评估音视一致性与音频质量，第二阶段才接入人工校验描述作为参考提示来评估表现力与提示跟随，避免文本信息泄露到本应纯感知的接地判断中。

**标签条件激活 × 可见性感知评估：** 标签条件激活负责根据样本的人工校验标签决定本次只评哪些维度与哪些类型的细则，可见性感知评估负责根据 On-screen 或 Off-screen 决定音视一致性是否生效，二者搭配使同一套 4 维度框架在不同子集下只激活有意义的评分项，避免对纯 Off-screen 样本误罚可见同步，也避免无关类型的噪声评分。

下图给出评估管线的实现形态，重点观察标签到阶段的路由与盲评输入的组织方式。

> **看图路径：** 1. 左侧 Activated Tags 中 Speech/Music 与 On-screen 被激活而 Sound/Off-screen 被忽略的开关状态；2. 右侧 Stage 1 与 Stage 2 在是否接入 Caption 上的输入差异及对应的评估维度分组；3. 两阶段各自对 Candidate 1 与 Candidate 2 独立输出分数的并列结构

> **论文图 4（像素未随页面持久化）**：Figure 4. PRISM-Bench evaluation pipeline.

*论文图 4。原论文 Figure 4.：“PRISM-Bench evaluation pipeline.”。*

图中左侧为 Activated Tags 的开关示例，中间棱镜示意将标签路由到两个评估阶段，右侧为 Two-Stage MLLM-as-a-Judge 的具体输入输出：Stage 1 为 Without Caption 的 Video Guide Eval，输出 AV Coherence 与 Audio Quality 的逐类型分数；Stage 2 为带 Caption 的 Caption Guide Eval，输出 Expressiveness 与 Prompt Following 的逐类型分数。每阶段评委对 Candidate 1 与 Candidate 2 独立按固定量表打分，并为每个激活维度附带简短证据陈述，便于后续审计与错误分析。

**盲式并排对比 × 基于标准的绝对打分：** 盲式并排对比指将生成样本与真值样本以随机顺序同时呈现且不告知身份，提供共享感知上下文以减少呈现偏置，基于标准的绝对打分指对每个候选独立按固定量表打分而非只给相对偏好，二者结合既保留可比的上下文锚定，又得到可审计、可聚合的逐维度分数与证据陈述。

为量化评估的可靠性，论文引入基于配对真值波动与模型间差距的标准化效应量。设与模型 m 配对时真值分数分布为 s_GT^{(m)}，候选模型分数分布为 s_m，合并标准差为 s_pooled，则定义真值侧上下文漂移与模型信号如下。

\[d_{\text{bias}}(m_{1},m_{2})=\frac{\left|\mathbb{E}[\mathbf{s}_{\mathrm{GT}}^{(m_{1})}]-\mathbb{E}[\mathbf{s}_{\mathrm{GT}}^{(m_{2})}]\right|}{s_{\text{pooled}}},\]

\[d_{\text{signal}}(m_{1},m_{2})=\frac{\left|\mathbb{E}[\mathbf{s}_{m_{1}}]-\mathbb{E}[\mathbf{s}_{m_{2}}]\right|}{s_{\text{pooled}}},\]

前者衡量同一真值与不同模型配对时的分数漂移，后者衡量不同模型间的真实差距，二者比值给出信噪比概念，后续用于判断评估是否在漂移远小于信号的条件下仍保持区分度。

### 本研究是否训练模型，实际计算与标注过程如何执行？

本研究没有训练新的文生音视频生成模型，也没有对评委模型做微调。生成侧的计算是调用既有系统：Seedance 2.0、Kling v3 Omni、Veo 3.0 与 3.1、Sora 2 为闭源 API 调用，LTX-2、Ovi、MOVA 为本地基于官方仓库与发布权重的推理，分别按官方推荐的分辨率、时长、采样步数与引导尺度生成 8 至 10 秒片段。评测侧的计算是固定的推理协议：评委模型选用 Gemini-3.1-pro-preview，标称解码温度设为 0.0 以移除采样温度这一可变因素，但论文明确指出该设置不保证托管 API 的完全确定性，后端执行与数值效应仍可能引入波动。

数据侧的计算是多阶段标注流水线：先用 PySceneDetect 切场景并按内容类型平衡采样，再经 Gemini 2.5 Pro 做多模态描述、Qwen3-Omni 做纯音频校准、GPT-5-chat 做跨源融合，最后对全部 900 条样本做人工校正。需要补齐的细节是各 API 调用的具体版本快照与参数已在文中给出，但未报告完整的计算开销与人工时长，复现时应以官方接口与仓库的当前实现为准并记录实际耗时。

### 在什么数据、什么模型与什么指标下做对比，公平条件如何保证？

数据条件是 900 条人工校验音视频对，按可见性分为 On-screen、Off-screen、Mixed 三子集各 300 对，覆盖语音、音乐、音效及其组合，描述文本为人工校验后的提示。模型条件覆盖 7 个近期系统，包含前沿闭源与开源两类，生成分辨率与时长按各系统官方路径执行，MOVA 在文本驱动时以纯白首帧作为条件，论文也记录了其偶发坏帧现象。

指标条件是 4 维度按类型的细粒度分数，量表为 0 至 10，分数经与配对真值均值校准并重缩放到全局真值均值以缓解上下文依赖，Final 分数为所有激活单元的校准均值之和，Off-screen 子集的音视一致性标记为不适用。公平性通过三点保证：一是所有系统使用同一组基准提示生成，二是评委对生成与真值采用盲式并排与随机顺序，三是 2 阶段提示结构与 JSON 输出模式在所有评委变体间保持一致，仅标签路由随子集变化。

人类对齐实验在 3 模型与三子集上按有效标签组合分层采样，每对由 3 名标注者独立按同一量表打分并多数投票得到整数标签，与自动评委在偏好方向上比较一致性。

### 主结果显示什么差距，哪些短板被聚合分数掩盖？

主结果按子集、维度与音频类型三视角同时展开，核心发现是聚合领先不等于全面领先。以下先提出比较问题：在相同提示与相同盲评协议下，前沿闭源系统是否在所有维度与类型上一致优于开源系统，以及超过真值的分数是否意味着接地问题已解决。

**音频质量 × 音视一致性：** 音频质量衡量声音本身的自然度、清晰度与技术真实感，音视一致性衡量声音是否在时间与因果上与可见发声动作对齐，二者分工在于前者只看听感是否像真，后者看是否与画面接地，组合后才能区分模型是把声音做得好听还是真正把声音绑到了可见声源上。

下图以雷达图形式汇总三子集的维度-类型校准均值，适合先看整体分离再定位具体凹陷。

> **看图路径：** 1. 对比三张雷达图 a/b/c 中 seed2 外圈与其他模型内圈的整体分离程度；2. 在 On-screen 图中定位 AV-Mus. 与 AV-Spe. 等接地相关轴的凹陷位置；3. 观察 Off-screen 图中 PF 与 AQ 相关轴的相对外扩与 Mixed 图中的综合形态

> **论文图 1（像素未随页面持久化）**：Figure 1. Grouped radar comparison across the On-screen, Off-screen, and Mixed subsets for the evaluated T2AV systems. Each spoke reports a calibrated mean score for one evaluation-dimension–audio-type pair; higher is better.

*论文图 1。原论文 Figure 1.：“Grouped radar comparison across the On-screen, Off-screen, and Mixed subsets for the evaluated T2AV systems.”。*

3 张雷达分别对应 On-screen、Off-screen 与 Mixed，外圈为 Seedance 2.0，内圈为开源模型，中间为其他闭源系统。可观察到 Seedance 2.0 在多数轴上贴近外圈，但在 On-screen 的 AV 相关轴上相对内收；Off-screen 与 Mixed 的形态则更外扩，说明不可见声学构建的差距与可见接地的差距不同。

为给出可核对的数值对比，下表整理论文报告的校准后主结果，分数为 0 至 10 量表，Tot 为同维度内 3 类型求和，Final 为所有激活维度求和。

| 子集 | 维度-类型 | 真值 | Seedance 2.0 | Kling-v3-omni | 最强开源 | 结论方向 |
| --- | --- | --- | --- | --- | --- | --- |
| On-screen | Final | 91.78 | 97.73 | 85.99 | 49.50 LTX-2 | 越高越好，闭源显著领先 |
| Off-screen | Final | 71.10 | 78.11 | 72.76 | 40.16 LTX-2 | 越高越好，差距保持 |
| Mixed | Final | 93.69 | 99.88 | 94.61 | 64.38 Ovi | 越高越好，Mixed 差距略收窄 |
| On-screen | Audio Quality Tot | 23.10 | 25.24 | 22.29 | 14.08 LTX-2 | 越高越好，保真度已超真值 |
| On-screen | AV Coherence Tot | 20.93 | 20.91 | 18.67 | 10.98 LTX-2 | 越高越好，接地未超真值 |

该表显示 Seedance 2.0 在三子集 Final 上均居首且已超过校准后的真值聚合分，但在 On-screen 的音视一致性上仅与真值持平且明显低于自身的音频质量、表现力与提示跟随，Kling 与 Veo 系列也呈现相同模式，说明保真度与指令跟随的进步并未自动解决可见声源的同步与绑定。按类型看，Seedance 2.0 的 3 类型总分在 On-screen 已趋于均衡，但在音视一致性内部音乐仍低于音效，其他前沿系统在 On-screen 音乐的可见同步上凹陷更深，表现为音乐总分与音乐 AV 分数同时偏低。

Off-screen 上 Seedance 2.0 的声音类型总分落后于语音与音乐，提示非可见声事件的精细控制仍是短板。未胜出项方面，开源模型在所有子集与维度上均落后至少 35 分，且在音视一致性与提示跟随上差距更大，说明当前开源路径在接地与控制两端仍有较大提升空间。

### 评委是否可靠，分数波动来自哪里，不同评委如何取舍？

可靠性分析回答两个问题：真值分数是否因配对上下文而大幅漂移，以及评委是否仍能区分不同模型。论文以 d_bias 衡量前者，以 d_signal 衡量后者，并用其比值作为描述性信噪比。

\[\mathrm{SNR}=\frac{d_{\text{signal}}}{d_{\text{bias}}},\]

下表先看人类对齐，再看评委稳定性与区分度的权衡。

| 评估对象 | 指标 | 数值 | 含义 |
| --- | --- | --- | --- |
| 人类对齐 | 平均一致性 | 超过 70% | 偏好方向一致比例，越高越好 |
| 人类对齐 | PF 维度 | 77.6% | 提示跟随最易对齐 |
| 人类对齐 | AV 维度 | 67.9% | 音视一致性最难对齐 |
| 人类对齐 | GT vs Sora 2 | 68% | 强模型与真值差距小，对齐下降 |
| 人类对齐 | 模型间易分对 | 76.7% 至 77.7% | 差距大时对齐高，接近时 63.4% |

该表表明自动评委在整体上可作为人类评估的可扩展代理，但对强生成结果与真值的细微差距以及对近距模型对的区分仍更困难，这与音视一致性需要联合判断时序与因果的难度一致。

| 子集 | 真值波动 Std | d_bias | d_signal | SNR | 解读 |
| --- | --- | --- | --- | --- | --- |
| On-screen | 1.426 | 0.281 | 0.521 | 1.85 | 最难，漂移最大但信号仍中等 |
| Off-screen | 1.042 | 0.152 | 0.641 | 4.21 | 最稳，漂移小信号大 |
| Mixed | 1.237 | 0.233 | 0.814 | 3.49 | 居中，信号最强 |

该表显示 Off-screen 与 Mixed 的信噪比最清晰，On-screen 因可见接地对上下文更敏感而波动最大，但其 d_signal 仍处中等效应量，说明评估在该子集仍具诊断价值，只是对近距系统的结论需更谨慎。维度分解进一步指出波动主要来自音视一致性的语音与音乐分支，分别达到 2.145 与 2.314，而 Off-screen 的音频质量与表现力部分条目可低至 0.8 左右。

**上下文漂移 × 模型信号：** 上下文漂移指同一真值片段与不同候选模型配对时评委给真值的分数波动，模型信号指不同候选模型之间的真实性能差距，二者搭配用于判断评估是否可靠的判据是漂移应显著小于信号，论文用 d_bias 与 d_signal 的标准化效应量及其比值 SNR 来量化这一关系。

评委模型消融在 Mixed 子集的受控协议下比较 4 种评委。

| 评委 | Std | d_bias | d_signal | SNR | 取舍 |
| --- | --- | --- | --- | --- | --- |
| Gemini-3.1 Pro | 0.915 | 0.141 | 0.429 | 3.05 | 漂移小且信号最大，权衡最优 |
| Gemini-3.1 Flash | 0.524 | 0.075 | 0.273 | 3.64 | 更稳但信号压缩 |
| Gemini-3.0 Flash | 0.591 | 0.073 | 0.367 | 5.00 | 漂移更小但信号仍压缩 |
| Qwen3-Omni-30B | 0.167 | 0.011 | 0.012 | 1.11 | 极稳但几乎无区分度 |

该表说明极小的 d_bias 并非最优，若评委过度保守则会同时压低 d_signal，导致无法区分真实差距。论文因此选择 Gemini-3.1 Pro 作为最终评委，因其在保持漂移显著小于信号的前提下保留了最大的模型间分离度。

下图通过单样本的阶段分数与证据陈述展示上述机制如何在个体案例上落地。

> **看图路径：** 1. 顶部 GT 的 Caption 与 Tags 如何定义本次样本的三个激活条件；2. 中间各模型 Scores 表中 AV Coherence 与 Audio Quality 等四列按 SOUND/SPEECH 分型的分数；3. 右侧 Reason 中对口型同步、合成感与环境层缺失的具体证据描述

> **论文图 7（像素未随页面持久化）**：Figure 7. Suggested case study for stage-wise score aggregation.

*论文图 7。原论文 Figure 7.：“Suggested case study for stage-wise score aggregation.”。*

该案例的标签为 SOUND Off-screen、SPEECH On-screen 与 SPEECH Off-screen 共存，顶部给出人工校验描述与标签，中间按模型列出 AV Coherence、Audio Quality、Expressiveness、Prompt Following 的逐类型分数，右侧给出简要理由。可观察到 Kling-v3-Omni 与 Veo 3.0 在 On-screen 语音接地与 Off-screen 声音层厚度上的差异，以及 Ovi 在 On-screen 语音口型失配上的显著扣分，说明分数差异可追溯到具体的接地与真实感证据。

### 哪些结论有边界，哪些验证仍未完成？

论文报告的结论在以下边界内成立。第一，真值并非硬上界，生成样本可在感知精致度或提示贴合度上被判高于采集到的参考片段，因此超过真值的聚合分不等同于完美生成，仍需按维度与类型分解解读。第二，On-screen 的可靠性边际最窄，其波动集中在音视一致性的同步敏感分支，对差距较小的模型对比应更谨慎，必要时辅以人工复核。第三，人类对齐在强模型与真值接近时一致性下降，说明自动评委对细微差距的分辨仍有限。

未验证或未报告的事项包括：未测量生成与评估的计算成本、延迟与失败率，未覆盖更长时长的叙事一致性与多轮对话场景，未对评委提示的微小改写做系统鲁棒性测试，也未公开底层音视频数据本身，仅提供排行榜与评估代码，复现时需在受控环境内使用数据。此外，MOVA 等开源系统的坏帧与黑屏现象表明部分系统的文本驱动路径仍不稳定，相关分数应在该实现条件下理解。

### 复现与复用该基准需要准备什么，按什么顺序做？

复现 PRISM-Bench 的评估需按数据、生成、评测 3 段准备。数据段需明确 900 条样本的三子集划分与标签体系，理解每条样本的音频类型与可见性标签如何决定激活维度，以及描述文本仅在第二阶段可见的规则。生成段需为每个待测系统固定提示、分辨率、时长与采样参数，闭源系统通过官方 API 调用并记录版本与参数，开源系统按官方仓库与发布权重本地推理，注意 MOVA 需按文本驱动协议以纯白首帧为条件并记录异常帧。

评测段需实现盲式并排与 2 阶段流程：每样本对生成与真值随机排序并添加 0.5 秒标识帧，Stage 1 不传描述评估音视一致性与音频质量，Stage 2 传入人工校验描述评估表现力与提示跟随，评委使用 Gemini-3.1-pro-preview 并固定标称温度为 0.0，同时接受托管 API 仍可能有微小波动的事实。分数聚合需按激活标签求和并按论文的真值校准方式重缩放，Off-screen 不计音视一致性。人类对齐复用时应按有效标签组合分层采样，每对由 3 人独立打分并多数投票，阶段与量表与自动评委保持一致。

### 何时值得用 PRISM-Bench，下一步应优先补哪项验证？

当研究目标是诊断文生音视频在语音、音乐、音效与可见、不可见声源条件下的差异化能力，而非只看单一聚合指标时，PRISM-Bench 值得优先使用。其价值在于把好听与接地、可见同步与声场构建、以及指令跟随的音频侧执行度量分开，使前沿模型在保真度上已超真值但在可见音乐同步与精细声音控制上仍落后的结构性短板可被定位。

对研究生而言，复现时应先跑通标签驱动的 2 阶段盲评与真值校准，再在小规模人类对齐上验证评委在音视一致性维度的一致性是否达到预期。下一步最值得补充的验证是针对 On-screen 同步敏感分支的稳定性改进，例如增加时序对齐的显式证据或引入多评委集成，以及在更长时程与更多音乐表演场景上检验结论的泛化性。

总体上，PRISM-Bench 不支持把相关性当因果、把超过真值当无缺陷的解读，正确用法是把聚合领先与分解短板并列报告，并在论文中明确给出数据、模型、指标与聚合口径的完整条件。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.04867)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-08/)
