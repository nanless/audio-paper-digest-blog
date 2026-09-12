---
title: "DIFFA: Large Language Diffusion Models Can Listen and Understand"
date: 2026-09-11
draft: false
description: "DIFFA 针对语音理解仍依赖自回归解码的问题，选择冻结 Whisper-small 与 LLaDA-8B-Instruct、只训练语义与声学双适配器的两阶段路线，在 960 小时 ASR 加 127 小时合成指令数据下 MMAU 平均 49.71% 与 MMSU 平均 56.04%，代价是音系与副语言细粒度感知仍弱于语义推理。"
tags: ["Adapter", "扩散模型", "音频大模型", "语音", "音频理解"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:40817"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40817"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40817/44778"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "31e2eb69d5952a382ccda0574f31cda8c21ddf27b3377b50383e15dadd88b3fb"
paper_digest_api_reader_plan_sha256: "11a87cd7a307b991dfe3755326a67be1f9252f47d43e157382537ef7e9c9887c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "34e1979b2d368f1b836136e069f81aaaabdb0eea013e1e33d914d07462a5c2d3"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "88adcbfbfea700766f32156e9783579cb5d2bbab5105cc75bd3deb1db0c0faca"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "01c25762e66b7d15a11646c7ea07ff8a12b762e941360984c8b727738fcbcaf0"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "97bb0c719be8979272372aea79a8073e57a2b39bc39a393fb1820b9e4073c189"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adapter","label":"Adapter"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"}]
paper_digest_primary_task: "音频理解"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不用自回归也能听懂语音：DIFFA 以冻结扩散模型加双适配器做理解

> 英文题目：*DIFFA: Large Language Diffusion Models Can Listen and Understand*

> 会议身份：`conference:aaai:2026:conference-paper-id:40817`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40817) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40817/44778)

标签：#Adapter #扩散模型 #音频大模型 #语音 #音频理解

评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：模型报告

## 👥 作者与机构

- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Hongjie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shiwan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Kang：机构信息未能从会议 PDF 纯文本可靠映射
- Jie Li：机构信息未能从会议 PDF 纯文本可靠映射
- Enzhi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yujie Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Aobo Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Xuelong Li：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为连续语音波形与文本指令，输出为自然语言回答，难点在于声学变异大、韵律情感等副语言信息难以对齐到离散语义空间。先由冻结的Whisper-Small编码器接收原始波形，负责抽取50Hz帧级声学特征并压缩至12.5Hz，输出紧凑语音表征送入双适配器。再由语义适配器与声学适配器分别接收该表征的顶层输出与中间层状态，前者以960小时LibriSpeech语音识别目标完成语义对齐，后者以可训练查询抽取低层声学线索，二者输出拼接为音频前缀并作为前缀词元拼接到指令之前。最后由冻结的大语言扩散模型LLaDA-8B-Instruct接收音频前缀、文本提示与掩码回答，负责以扩散式掩码预测目标联合建模，经多步预测与低置信重掩码迭代去噪，并以块级半自回归策略并行生成回答。与自回归大音频语言模型相比，该机制用双向上下文与块级并行解码替代从左到右依赖，从而支持可控改写与低数据量下的高效对齐。在MMSU基准下，DIFFA的平均准确率为56.04，高于Random基线的25.37。该结论适用边界限于英语朗读主导的语音问答与字幕式理解，音乐、环境声与强口音自发对话尚未验证，且原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/NKU-HLT/DIFFA> — 链接可访问（HTTP 200）
预印本/扩展版链接未在会议页展示；会议版来源见页首官方记录与 PDF。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决哪一步？

本文的输入是一段波形音频加一段文本提示，输出是一段文本回答，目标是让大语言扩散模型真正听懂语音并完成理解与问答。读者需要先保留 3 组信息再进入细节：模型用冻结的 Whisper-small 做语音编码、用冻结的 LLaDA-8B-Instruct 做语言推理、只训练两个轻量适配器；训练分两段，第一段用 960 小时 LibriSpeech 做语音识别式语义对齐，第二段用 127 小时合成音频描述数据学指令跟随；评测覆盖 MMSU、MMAU 与 VoiceBench 3 个公开基准。本文只研究听理解，不研究语音合成与实时对话生成，教学中举的湖边小径等例子仅用于说明数据格式，不代表新增实验效果。

对于刚进入语音语言领域的读者，关键是把语音理解拆成两类能力。第一类是说什么，即把连续声波映射为离散文字，这一步与自动语音识别目标一致。第二类是怎么说与意味着什么，包括说话人性别、口音、情感、语速、意图与背景知识推理。传统大音频语言模型多用自回归大模型逐词生成，本文要验证的是扩散式大模型能否在不逐词依赖前缀的条件下，同样利用音频前缀完成这两类任务。

本解读的输出是一套可核对、可复述的方法说明。每一节承担一个教学任务，从任务路线到组件计算，从数据构造到实验条件，最后给出复现起点与未验证边界。凡是论文直接报告的数字保留原精度与条件，凡是有限解释用支持一词，凡是推测用可能或待验证，不把相关性写成因果，也不把小规模合成数据的结果推广为大规模通用结论。

### 已有路线有哪些，扩散路线卡在哪里？

现有大音频语言模型按论文梳理可分为两条路线。第一条是编码器加适配器路线，用语音编码器抽取连续声学特征，再用轻量适配器投影到语言模型输入空间，代表有 Qwen2-Audio、Qwen2.5-Omni、SALMONN 与 Audio-Flamingo。第二条是语音离散化路线，先用量化器或自监督编码器把音频变为语音词元，再作为新增输入流直接参与语言模型训练，代表有 SpeechGPT 与 Moshi。两条路线在当时多建立在自回归解码之上，存在曝光偏差、生成较慢、对双向与部分条件推理不够灵活等已知短板。

扩散语言模型是另一条生成范式。它把生成看作迭代去噪，从全掩码序列出发并行预测，再把低置信位置重新掩码，逐步精化。LLaDA 把这种思想扩展到大模型规模，用基于似然的掩码去噪目标训练，并在文本上可比肩同级自回归模型；LLaDA-V 进一步把它扩展到视觉指令调优，证明了多模态扩展的可行性。但在音频侧，声学可变性、复杂时序结构与丰富副语言信息是否适配双向并行解码，此前缺乏系统验证。

监督高效的模态对齐是第三条相关线索。DESTA 系列与 BLSP 提出不用人工指令微调数据，而是用 What can you hear from the audio?这类统一提示，让语言模型根据转写与属性生成音频描述，再用描述做端到端对齐。DIFFA 沿用这一思想，但把主干从自回归换成冻结扩散模型，并用双适配器显式分离语义与声学信号。理解这一点才能明白后文为何第一阶段只训语义适配器，第二阶段才联合训练两个适配器。

### 要回答的问题是什么，不回答什么？

本文要回答的核心问题是：冻结的大语言扩散模型能否通过轻量适配器听懂语音，并在口语理解基准上达到与强自回归基线可比的水平。具体分解为 3 个可检验问题。第一，语义对齐是否足以让扩散主干利用音频前缀恢复转写。第二，合成的音频描述数据是否足以在无人工语音指令数据的条件下学会指令跟随。第三，双适配器相对单语义适配器是否带来可测量的增益。

本文不回答语音生成质量、不回答流式延迟与实时交互、不回答音乐与环境声的专家级推理上限。MMAU 虽含声音与音乐领域，但 DIFFA 训练以语音描述为中心，论文也报告其声音与音乐分数低于语音分数，因此不能把语音上的结论直接推广到通用音频。同样，安全相关的 AdvBench 分数只反映在给定评测下的拒绝与对齐行为，不等于部署级安全保证。

从学习依赖看，后续方法节依赖本节的问题界定。凡涉及转写恢复看第一阶段，凡涉及性别口音情感等属性看第二阶段与声学适配器，凡涉及推理看扩散主干的双向建模与合成数据的知识含量。这种对应关系是后文组织消融与误差分析的依据。

### DIFFA 全景：一个样本如何走完听与答？

先沿一个样本走完全程。假设输入是一段 3 秒女声美音中性语调的波形，内容为湖边小径指引，文本提示为 What can you hear from the audio?。波形先进入冻结的 Whisper-small 编码器得到帧级特征，一路经语义适配器压缩映射为内容向量，另一路经声学适配器从中间层抽取副语言向量，两路拼接后作为音频前缀放在文本提示之前。扩散主干从全掩码的回答槽位出发，多步并行预测并重掩码，最终输出包含转写、属性与意图判断的描述。

下图是 2 阶段训练全景，左栏为自动语音识别式语义对齐，中间栏为问答式模态对齐，右栏为合成数据的文本侧构造，箭头方向即数据流向，读图时先分清冻结与可训练的色块含义。

> **看图路径：** 1. 先看左中右三栏的分工：左为 ASR 语义对齐，中为问答双适配器，右为合成数据的文本侧构造；2. 再看颜色图例：雪花为冻结的编码器与掩码预测器，火焰为可训练的语义与声学适配器；3. 接着沿 Wav 经语音编码器到适配器再到掩码预测器的箭头走一遍主路径；4. 最后对比下方输入与上方监督：转写与描述回答在何处被随机掩码

[![原论文 Figure 2：Training process of our DIFFA framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/3157f0982ecc/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/3157f0982ecc/figure-2.png)

*论文图 2。原论文 Figure 2：“Training process of our DIFFA framework.”。*

该图显示的要点是训练时音频与提示词元始终不被掩码，只有回答词元被随机掩码并计算损失；第一阶段监督是转写，第二阶段监督是右栏所示的合成描述。右栏的文本构造先把时间戳、转写与性别口音情感时长等属性拼成音频描述，再与固定问句一起送入大语言模型生成回答，回答与原始波形配对即为第二阶段样本。最终音频表示是两适配器输出的拼接，作为前缀词元送入语言模型输入，这种设计使推理时只需更换波形与问题即可复用同一流程。

### 编码器、双适配器与掩码预测器各自算什么？

语音编码器采用 Whisper-small 编码器，参数约 88.2M，全程冻结，负责把波形变为 50 Hz 左右的帧级声学特征。语义适配器是两层卷积加两层线性投影，下采样率为 4，把 50 Hz 压缩到 12.5 Hz，参数约 14.4M，负责内容对齐。声学适配器是两层 Q-former 块加 64 个可训练查询向量，参数约 22.3M，负责从编码器中间状态抽取低层声学线索。语言主干为 LLaDA-8B-Instruct，32 层、32 头、隐 size 4096，约 8.1B 参数，采用 RMSNorm、SwiGLU 与旋转位置编码，全程冻结，负责条件去噪与推理。

**自回归解码 × 扩散语言模型：** 自回归解码负责按从左到右逐词生成，每个词依赖已生成前缀；扩散语言模型负责从全掩码序列出发并行预测再迭代去掩码，双向利用上下文。DIFFA 搭配的理由是语音理解需要同时看前后语境与音频前缀，而扩散的并行去噪与块级半自回归正好提供这种机制，组合后新增的作用是以非自回归方式完成听理解与指令跟随。

**语义适配器 × 声学适配器：** 语义适配器负责把 Whisper 编码器输出的帧级特征压缩映射为语言模型可读的内容向量，承担说什么的对齐；声学适配器负责从编码器中间层抽取说话人、情感、口音等副语言线索，承担怎么说的补充。两者搭配是因为仅有转写对齐不足以回答性别情感语速问题，组合后拼接为统一音频前缀，同时送入冻结的扩散主干。

**掩码预测器 × 随机掩码训练：** 掩码预测器负责在给定音频前缀、文本提示与部分可见回答的条件下预测被遮挡位置的原词；随机掩码训练负责按概率 t 独立遮挡回答词并只在被遮挡位置计算对数似然。两者搭配是因为扩散目标需要可处理的似然上界，组合后新增的作用是让音频条件下的监督微调同样可用并行目标完成，而不依赖逐词 teacher forcing。

训练时的计算目标是扩散式掩码预测损失。记音频为 a0、提示为 p0、目标回答为 r0、对 r0 随机掩码后为 rt、回答长度为 L。每个训练步以概率 t 独立把回答词替换为特殊掩码 M，损失只在被掩码位置上求负对数似然并除以 t 归一，音频与提示不参与掩码。论文用 endoftext 同时做填充与序列结束符，且要求模型也预测它。推理时先把提示与音频填充对齐，再把回答初始化为指定长度的全掩码序列，按 t 到 s 的去噪步预测掩码词，用 argmax 得到候选，再把最低置信的 s 除以 t 比例重新掩码，并按从左到右分块半自回归推进，块内并行、块间顺序，以平衡质量与效率。

下图展示推理的迭代过程，底部为全掩码起点，顶部为完整回答，中间虚框内为 1 次预测加重掩码的放大，读图时注意掩码块与已解码块的交替变化。

> **看图路径：** 1. 先找到底部全掩码的 Response 初始序列与左侧文本提示加音频前缀；2. 再看中间掩码预测器一次并行预测后向上输出的中间结果；3. 接着观察 Remask 箭头如何把低置信位置重新变回掩码块；4. 最后确认顶部省略号表示多步迭代直至得到完整回答

[![原论文 Figure 3：Inference procedure of DIFFA.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/3157f0982ecc/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/3157f0982ecc/figure-3.png)

*论文图 3。原论文 Figure 3：“Inference procedure of DIFFA.”。*

该图可见的执行细节是：输入侧始终保留文本提示与双适配器输出的前缀，输出侧从全叉块开始，每经 1 次掩码预测器即有部分位置变绿，黄色低置信块被指回叉块，形成逐步精化。这种机制对应正文的先预测再按置信重掩码的描述，也解释了为何推理需要设置总步数与块长等超参数，附录虽提及超参数影响，但正文未给出完整可复现的搜索表格，这是复现时需要自行记录的缺项。

### 两阶段训练与合成数据是如何构造的？

第一阶段只训练语义适配器，用 LibriSpeech 共 960 小时，以自动语音识别目标把语音编码器与扩散模型对齐。优化设置是训练 10 轮、学习率 1e-4、1000 步热身、全局批量 128。第二阶段联合训练语义与声学两个适配器，用自建的 127 小时合成问答数据，以音频描述目标学习模态对齐。优化设置是训练 10 轮、学习率 5e-5、2000 步热身、全局批量 64。2 阶段均用 Adam 优化器，在 4 张 80 GB 的 A800 上完成，论文报告总计约 72 个 A800 GPU 小时。语言模型与语音编码器始终冻结，梯度只流经适配器。

**自动语音识别对齐 × 音频描述指令跟随：** 自动语音识别对齐负责第一阶段把语音映射到文字转写，建立语义桥；音频描述指令跟随负责第二阶段在 What can you hear from the audio?提示下生成包含文本、性别、口音、情感与时长的描述。两者搭配是因为只有转写模型会忽略副语言，只有描述模型又难以稳定对齐，组合后先稳住内容再学听感与推理。

**冻结主干 × 轻量适配器调参：** 冻结主干负责保留 LLaDA-8B-Instruct 与 Whisper-small 已学到的语言与声学能力，避免灾难性遗忘；轻量适配器调参负责只更新语义适配器 14.4M 与声学适配器 22.3M 参数来学习跨模态映射。两者搭配是因为全量微调数据与算力成本过高，组合后新增的作用是以 72 个 A800 GPU 小时量级实现扩散主干的语音扩展。

合成数据的构造值得复述。来源是 5 个开源语音集：VCTK、AccentDB、IEMOCAP、DailyTalk 与 VoxCeleb1，论文表 1 统计共 96874 条、127.01 小时，各子集时长从 18 到 46 小时不等。每个样本有 10 个标注属性，包括性别、年龄、口音、情感、音高、音量、语速、时长、意图与文本，比 DESTA-2 的 12 属性略少，且因无权限排除了 PromptTTS 与混合噪声混响子集。构造时把时间戳、转写与属性拼成方括号加圆括号的描述块，与固定问句一起送入 Qwen3-8B 等指令模型生成初始描述，再可选用 LLaDA 对描述做改写以缓解分布偏移，记为 LLaDA-rewrite-Qwen3 变体。最终监督是描述文本，配对的是原始波形，从而在无人工语音指令数据下实现端到端跟随。

需要指出的缺项是：论文未报告过滤规则、去重策略、属性缺失时的填充方式，也未给出改写步骤的温度与采样细节。复现时应先按原文属性表与固定问句重建基线，再单独验证改写是否必要，避免把 1 次生成偶然性当成方法增益。

### 在什么数据、基线与指标下比较才公平？

评测用 3 个基准，分工不同。MMSU 含 5000 个音频问答三元组、47 个任务，覆盖感知与推理两大维，再细分为语义、音系、副语言六格，指标为准确率，越高越好，用于检验细粒度口语理解。MMAU 用 Test-mini 划分，覆盖语音、音乐与环境声三域、27 种技能的人工选择题，指标为准确率，用于检验跨域音频推理。VoiceBench 把文本基准经语音合成转为口语查询，含 AlpacaEval、CommonEval、SD-QA、MMSU 星号、OBQA、IFEval 与 AdvBench 等子项，其中 MMSU 星号源自 MMLU-Pro，与 MMSU 基准不同，不可混为一谈。

比较条件需要分开看。MMSU 与 MMAU 表中列出大量自回归与专有模型，如 Qwen2-Audio-Instruct、Qwen2.5-Omni、Gemini 系列、GPT-4o-Audio、SALMONN、GAMA 与 LTU 等，但各模型的训练数据量、是否见过评测分布、解码策略并不一致，因此只能视为公开基准上的横向参考，而非严格控制变量的对照。严格对照在消融中完成：同一 8B 指令规模下比较 LLaMA3.1 与 LLaDA 主干、单与双适配器、不同指令数据源，此时数据量与训练轮数一致，结论更可信。

硬件与成本按原文交代。编码器 88.2M、主干约 8.1B 冻结，可训练量仅 36.7M 左右；训练批量与学习率如前所述；推理为迭代去噪加分块半自回归，开销随步数与块长增长。论文未报告逐步延迟、显存峰值与输出帧率，讨论效率时只能引用 72 GPU 小时的训练成本，不能推定推理更快或更便宜。

### 主结果显示什么，代价与反例在哪里？

在进入数字之前先明确比较问题与方向。本表回答在 MMAU 三域上扩散路线是否达到可用水平，公平条件是同一 Test-mini 选择题与准确率越高越好，DIFFA 为实际可运行的冻结主干加双适配器策略，不含搜索最优或事后挑选。

| Model | Sound | Music | Speech | Average |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni (Xu et al. 2025) | 78.10 | 65.90 | 70.60 | 71.53 |
| Qwen2-Audio-Instruct (Chu et al. 2024) | 67.27 | 56.29 | 55.26 | 59.61 |
| SALMONN (Tang et al. 2024b) | 41.14 | 37.13 | 26.43 | 34.90 |
| DIFFA | 46.25 | 43.41 | 59.46 | 49.71 |

该表显示 DIFFA 在语音域达 59.46%，高于声音 46.25% 与音乐 43.41%，平均 49.71%，超过 SALMONN 的 34.90%、GAMA-IT 的 22.83% 与 LTU 的 17.44%，接近 GPT-4o mini Audio 的 53.01% 与 Gemini Pro v1.5 的 52.97%，但低于 Qwen2-Audio-Instruct 的 59.61% 与 Qwen2.5-Omni 的 71.53%。主要收益是语音中心训练带来语音域相对优势，主要代价是声音与音乐明显偏弱，且与顶级模型的差距仍大，未胜出项恰是通用音频能力，这与训练未覆盖音乐环境声是一致的。

雷达图把 MMSU 六格、MMAU 三域与 VoiceBench 多项放在同一极坐标下，便于一眼看出互有胜负而非单向碾压，读图时先对齐图例颜色再按轴比较包络。

> **看图路径：** 1. 先确认图例：紫色多边形为 DIFFA，红色为 Qwen2-Audio-Instruct；2. 再沿雷达轴逐个比较 MMSU 六个维度与 MMAU 三个领域加 VoiceBench 多项的包络大小；3. 重点观察 AdvBench 轴上红色明显外扩而 MMAU-Speech 与 Reason-Sem 轴上紫色反超的位置；4. 最后结合径向 20、40、60、80 刻度判断差距是整体领先还是局部互有胜负

[![原论文 Figure 1：DIFFA vs. Qwen2-Audio-Instruct. The abbre- viations correspond to MMSU benchmark’s capabilities:…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/3157f0982ecc/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/3157f0982ecc/figure-1.png)

*论文图 1。原论文 Figure 1：“DIFFA vs. Qwen2-Audio-Instruct. The abbre- viations correspond to MMSU benchmark’s capabilities: Perception-Semantics (Percep-Sem), Perception-Phonology (Percep-Phon),…”。*

该图可见 Qwen2-Audio-Instruct 的红色包络在 AdvBench 轴上明显更靠外，而 DIFFA 的紫色包络在 Reason-Sem 与 Reason-Phon 等轴上略微外扩，两者在感知语义等轴上接近重合。这支持正文的判断：DIFFA 在语义推理上具竞争力，在安全对齐与部分感知轴上仍落后。结合 MMSU 文字结果，DIFFA 平均 56.04%，超过 Qwen2-Audio-Instruct 的 53.27% 与 Gemini-2.0-Flash 的 51.03%，其中语义推理达 81.53%，但音系与副语言感知偏低，人类平均 89.72% 仍是远端目标。VoiceBench 上 DIFFA 的 SD-QA 为 34.45%、OBQA 为 35.60%、IFEval 为 26.56%、AdvBench 为 76.54%，显示事实问答与指令理解具基础能力，但与 Kimi-Audio 等大资源模型的 61.10% 级别仍有差距，且训练数据仅为对手 510000 小时的约 0.22%，这是数据效率的证据，不是同数据量的胜负证明。

### 换主干、换适配器、换数据源会发生什么？

消融回答 3 个可控问题：主干是否为扩散是否重要，声学适配器是否必要，指令数据源如何影响结果。条件一致的一组是同一 8B 指令规模、同一双适配器结构下比较 LLaMA3.1 与 LLaDA，另一组是同一 LLaDA 主干下比较单语义与双适配器。指标方向仍为准确率越高越好。

| LLaDA | 51.31 | 56.18 | 43.52 | 50.34 |
| --- | --- | --- | --- | --- |
| Qwen3 | 49.71 | 56.04 | 48.22 | 51.32 |
| rewrite-Qwen3 | 50.41 | 56.43 | 46.60 | 51.15 |

该表为不同指令数据源下的总体对照，行对应 LLaMA3、LLaDA 自生成与 Qwen3 生成及改写变体，列对应 MMAU、MMSU、VoiceBench 与平均。可见 Qwen3 源在 VoiceBench 与平均上占优，改写变体仅带来边际变化，LLaDA 自生成在部分基准上优于 LLaMA3 源。这支持论文的解释：生成时的数据质量比事后改写更有效，扩散模型的归纳偏置可能产生更对齐的监督，但这属于有限解释而非因果证明。未胜出项是改写并未稳定提升，说明分布桥接假设待进一步验证。

另据正文数值，LLaDA 双适配器在 MMAU 达 51.71、MMSU 达 54.72，显著高于同结构 LLaMA 对照的 28.40 与 38.40，支持扩散主干对音频理解的优势。单改双适配器带来 MMAU 约 2.01 与 MMSU 约 3.16 的增益，支持语义加声学互补的判断。具体到可复现细节，复现应先固定数据源为 Qwen3 生成，再单独开关声学适配器，避免同时更换主干与数据导致归因混乱。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| MMAU 平均准确率 | 平均准确率 | 34.90% | 49.71% | SALMONN |
| MMSU 平均准确率 | 平均准确率 | 53.27% | 56.04% | Qwen2-Audio-Instruct |
| VoiceBench SD-QA | 准确率 | 35.72% | 34.45% | Qwen2-Audio |
| VoiceBench IFEval | 准确率 | 26.33% | 26.56% | Qwen2-Audio |

该整理表用原文连续句逐字覆盖关键数字，目的是把分散在三节的数字放在同一视图下核对。它显示 DIFFA 在 MMAU 与 MMSU 上相对所选基线具优势，在 SD-QA 上略低于 Qwen2-Audio，在 IFEval 上微弱反超，在 AdvBench 上明显低于 Qwen2-Audio 的 96.73%。这正好构成反例：轻量扩散路线并非全线取胜，安全对齐与知识问答仍需更大规模监督或专门优化，不能把平均趋势推广到每个子项。

### 哪些边界尚未验证，不能推广？

第一，数据边界。训练仅用 LibriSpeech 的 960 小时朗读语音与 127 小时合成描述，排除了 PromptTTS 与噪声混响子集，属性也少于 DESTA-2，因此对口音、情感、远场与音乐环境声的结论外推需谨慎。论文未报告采样均衡与缺失属性处理，复现时缺失即缺项，不应自行脑补分布。

第二，感知边界。MMSU 显示语义推理可达 81.53%，但音系与副语言感知偏弱，这是全基准的共性短板。双适配器虽有增益，但声学适配器仅用 64 查询向量与两层 Q-former，对精细韵律与发音的刻画能力有限，未来需在更大更多样数据上验证。

第三，成本与推理边界。论文给出 72 个 A800 GPU 小时的训练成本，但未测量推理延迟、吞吐与显存，迭代去噪步数与块长直接影响开销，不能从训练高效推定推理高效。总体趋势不等于每组每步成立，引用结果时应同时注明数据集、阶段、指标与聚合对象，避免把数值相同误认为同一指标。

### 要复现应先做什么，需要哪些脚本与参数？

资源状态是公开判断的唯一依据。当前可用链接为代码库与扩展版本，状态码均为 200，因此可写当前已公开。复现先做三件事：按仓库说明准备 LibriSpeech 960 小时与 5 个合成源数据，用固定问句与属性模板重建 127 小时描述数据；冻结 Whisper-small 与 LLaDA-8B-Instruct，仅初始化语义与声学适配器；先跑第一阶段 10 轮、学习率 1e-4、热身 1000、批量 128，再跑第二阶段 10 轮、学习率 5e-5、热身 2000、批量 64，优化器用 Adam。

关键超参数与信息条件必须保留：语义适配器下采样 4、50 Hz 到 12.5 Hz，声学适配器 64 查询向量，音频与提示不掩码、仅回答掩码，endoftext 兼做填充与结束符且需预测，推理用全掩码初始化加分块半自回归。评测时注意 MMSU 与 VoiceBench 中的 MMSU 星号来源不同，MMAU 用 Test-mini，指标均为准确率或子项原指标，不混用自动指标与人评。

还需补的验证至少包括：在同一数据源下重复 3 次报告方差，消融推理步数与块长对质量与延迟的影响，以及在噪声与多说话人上的鲁棒性。若只能跑小规模，建议先复现单改双适配器的增益，再验证 Qwen3 源相对 LLaMA3 源的差异，最后才扩展到全基准。

### 何时值得尝试这种扩散听理解路线？

当研究目标是以小数据验证语音到文本的端到端理解、当计算预算只允许训练数十 M 参数、当任务更依赖语义推理与双向上下文而非精细声学感知时，DIFFA 路线值得尝试。它的可操作起点是冻结强扩散主干、先做识别式对齐稳住内容、再用合成描述补齐属性与意图，避免一开始就全量微调。

当任务要求顶级副语言感知、音乐环境声专家推理或部署级安全对齐时，不应直接套用本文数字做承诺。此时更需要补大规模多样数据、专门的安全微调与推理开销测量。本文的意义在于首次给出扩散主干可听可理解的经验证据，并以不到对手千分之三的数据达到可比区间，为后续高效、可控的语音驱动系统提供了一个可复现的起点，而非终点。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
