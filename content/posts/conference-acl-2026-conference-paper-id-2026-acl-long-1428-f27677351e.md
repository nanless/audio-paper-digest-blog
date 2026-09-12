---
title: "SpeechMedAssist: Efficiently and Effectively Adapting Speech Language Models for Medical Consultation"
date: 2026-09-12
draft: false
description: "针对医疗语音数据稀缺与问诊能力缺失问题，论文用 405k 文本注入知识再用 198k 合成语音做模态重对齐，在多轮问诊与单轮问答上报告最优分数，代价是仍以普通话合成为主且只验证文本语音两种模态。"
tags: ["医疗音频", "数据集", "领域适应", "语音", "语音对话系统"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.acl-long.1428"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.acl-long.1428/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.acl-long.1428.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5a15a07f635f5643314e8eb98c580148e7ec4f6d0063901edb5b9b63a6e4e331"
paper_digest_api_reader_plan_sha256: "70757b0f1f2acb18fade0b494ba9dbf373fd32e9e31bfde6c0d0574d5d8ce85f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "cb38204663a4f6ffbe016015da2a38a9d4b584e6d4523f270ea556e479af1f5a"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "e66c218a16df6081d7f486d4a5ac1b0c1b87748b3333139dfa8990f85076065e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "1b19314c2152fb7555f26d87f5cccbf38ab8d4084e91cd24b922f16ad1508b9d"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c9c10a878b674eaaaa43085ccc60fdfad6ca5c7501e7ebad514048c7a1af8129"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"application","id":"application.medical","label":"医疗音频"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.domain-adaptation","label":"领域适应"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"}]
paper_digest_primary_task: "语音对话系统"
paper_digest_primary_method: "领域适应"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把医学知识先教给文字大脑，再用少量语音对齐：SpeechMedAssist 的两阶段医疗问诊适配

> 英文题目：*SpeechMedAssist: Efficiently and Effectively Adapting Speech Language Models for Medical Consultation*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.acl-long.1428`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1428/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1428.pdf)

标签：#医疗音频 #数据集 #领域适应 #语音 #语音对话系统

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Sirry Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Jieyi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyu Wei：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文处理语音输入到语音与文本输出的多轮医疗问诊任务，难点在于通用语音语言模型缺乏医学知识与医师级问诊技能，而医疗语音数据稀缺使直接用语音微调整体模型低效昂贵。方法第一步在约405k条重写后的文本医学对话上冻结语音编码器与适配器，只训练大语言模型核心以注入覆盖49个科室的知识与多轮问诊能力。第一步得到的文本空间医疗模型进入第二步，用合成的约198k条语音对话解冻语音适配器与语音解码器做模态重对齐，且保持语音与文本一比一混合以动态纠正知识并防止文本能力退化。相对单阶段纯语音微调，关键差异是将知识学习留在语音文本共享语义空间，仅用少量语音纠正模态漂移，因而能以小量合成语音实现高效迁移并保留通用领域知识。在MedDG文本多轮问诊评测任务下，SMA-Stage II的平均得分为8.32，高于LLaMA-Omni2的7.89。该结论适用边界受限于中文普通科室模拟问诊与合成语音条件，对多模态体征、方言重口音及真实高风险决策尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决的临床交互缺口是什么？

本文输入是患者的语音问诊 utterance，输出是医生的文本与语音回复，任务是在多轮对话中完成症状理解、主动追问、诊断推理和用药建议。目标读者是刚进入语音与医疗交叉方向的研究生，需要先分清这不是通用语音助手的简单移植。通用语音语言模型已经能听会说，但论文指出 3 个阻碍：缺少医学知识，缺少医生级别的问诊技能，以及缺少可直接微调的医疗语音数据。

真实门诊的特点是患者首次描述往往不完整，需要医生逐步问出持续时间、伴随症状和用药史，还要对咳嗽、气促等声音线索敏感。纯文本问诊把咳嗽写成文字就丢失了声音本身，也难以服务打字困难或老年患者。论文因此把研究范围限定为基于语音的多轮医疗咨询，强调在中文普通话场景下实现可交互、可追问、注意安全的语音医生助手。本文当前可用性方面，没有发现来源绑定且完成验证的资源，不得声称代码模型数据已公开。

接下来的解读按学习依赖展开，先讲任务与路线，再讲方法全景与组件计算，然后讲数据构造与训练，最后讲实验条件、结果反证与复现要点。
为理解文本为何不够，先看论文第一张示意图的教学对比。该图上半是文本问诊，下半是语音问诊，用同一个头晕流涕加咳嗽的例子展示信息损失与交互差异。

> **看图路径：** 1. 先看上半文本问诊框中被划掉的咳嗽声标记，确认文本通道丢失了什么；2. 再看下半语音问诊框中医生如何接住咳嗽并连续追问痰、发热和胸闷；3. 最后对比上下两栏底部的标签：受限与无感知对应友好与可感知加引导提问

[![原论文 Figure 1：An illustration highlighting the limitations of text-based medical consultation, alongside the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/945a5fbb3665/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/945a5fbb3665/figure-1.png)

*论文图 1。原论文 Figure 1：“An illustration highlighting the limitations of text-based medical consultation, alongside the advan- tages of speech-based medical consultation.”。*

上半文本框把咳嗽声标记为不可发音内容，医生回复直接跳到上呼吸道感染的长列表解释，底部标注为用户受限、副语言无感知、非交互。下半语音框保留了咳嗽声音波形，医生先说注意到你在咳嗽，再追问咳嗽频率、有无咳痰、有无发热胸闷，患者随后补充咳痰与胸闷，医生最后收敛到急性支气管炎并给出简短用药方向。这个对比说明语音的价值不只是输入方便，而是多了一路副语言证据和多轮引导提问的机会。这也是后文把咳嗽等声音单独建模的动机。

### 同输入同目标的已有路线有何不同？

相关工作可按输入输出与监督来源分成 3 类。第一类是文本医疗大模型加语音外挂，例如用自动语音识别转写患者语音，再调用医疗文本模型生成回复，最后用语音合成播报。论文把这类基线记为 ASR 加 LLM 加 TTS，包括华佗 GPT2、DISC-MedLLM、仲景和 Baichuan2 等，语音部分统一用 SenseVoiceSmall 做识别、用 CosyVoice 做合成。这类路线输入输出在系统层面也是语音，但模型内部没有真正对齐语音语义，副语言信号在转写一步就被丢掉。第二类是通用语音语言模型，按结构又分两支。

一支把语音离散成 token 并扩词表联合建模，需要从头大规模训练，代表是 GLM4-Voice。另一支把语音编码成连续特征再经适配器映射到文本语义空间，允许大语言模型在共享空间处理语音文本，代表包括 Kimi-Audio、SpeechGPT2、Qwen2-Audio、StepAudio2-mini 以及本文选作基座的 LLaMA-Omni2。第 3 类是多模态大模型，包括 Qwen2.5-Omni、BaichuanOmni-1.5、MiniCPM-o 以及医疗多模态的十针 GPT-Omni，后者只输出文本。论文的差异在于不做通用能力堆叠，而是聚焦医疗问诊工作流，把冗长单轮文本改写成符合口语的多轮对话，并用 2 阶段训练解决语音数据稀缺。

教学上要记住类别差异不等于同条件胜负，文本医疗模型本来见过更多医疗文本，通用语音模型本来语音对齐更好，比较时要看论文是否统一了语音交互评测条件。

### 问题如何形式化，难在哪里？

论文把适配问题表述为源域到目标域的迁移。源域是文本问诊，目标域是语音问诊，模型需要在共享隐空间中让两种模态的表示足够接近。直观假设是语音语言模型已把语音和文本编码到同一语义空间，因此知识和技能可以从文本迁移到语音。难点在于第 1 阶段用文本训练会扰动原有对齐，第 2 阶段必须用少量语音把对齐恢复，同时不丢失刚注入的医学知识。另一个难点是数据分布错位。

现有医疗语料多是单轮问答，患者输入 1 次给全信息，医生回复冗长且带 Markdown 列表，不符合语音每轮约百字、口语化、无符号的要求。评测难点在于不能只看选择题正确率，还要看多轮中是否问到了关键症状、诊断是否与已知症状一致、建议是否简洁安全。为此论文设计了包含单轮问答、多轮模拟问诊和真实环境录音人评的基准 SpeechMedBench，从客观与主观两面考察知识与问诊技能。

### 两阶段方法全景如何走通一个样本？

方法全景可以沿一个患者样本走一遍。患者说最近头晕流涕并伴随咳嗽，语音波形先进入语音编码器得到声学特征，再经语音适配器映射为语音嵌入；若是文本指令则经分词与嵌入层得到文本嵌入。两路嵌入送入大语言模型核心，在共享隐状态中做理解与决策，生成文本回复的隐状态后分两路输出。一路经语言模型头与解词器生成文本，另一路经语音解码器、流匹配与声码器生成语音，两路输出保持对齐。

训练上分为两段。第 1 阶段冻结所有语音相关模块，只训练大语言模型核心，喂入大规模医疗文本，让模型学会知识与问诊流程。第 2 阶段解冻全部模块，用少量医疗语音对话把语音文本对齐恢复，同时继续用部分文本数据纠正医学知识，最终训练数据保持语音文本 1 比 1。下图给出数据、结构与训练策略的总览。
为建立全局动作顺序，先看总览图中数据流、模型结构与冻结训练策略的对应关系。

> **看图路径：** 1. 先沿顶部数据流看从医学书籍病例到过滤重写再到语音合成的主路径；2. 再看中部大模型核心左右两侧文本与语音嵌入如何汇入共享隐状态；3. 最后看右侧第一阶段冻结与第二阶段训练的模块颜色与虚线数据指向

[![原论文 Figure 2：An overview of our work. Data Constraction: we construct TextMedDataset by filtering and rewriting…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/945a5fbb3665/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/945a5fbb3665/figure-2.png)

*论文图 2。原论文 Figure 2：“An overview of our work. Data Constraction: we construct TextMedDataset by filtering and rewriting collected medical text corpora, and build SpeechMedDataset by extracting…”。*

图中顶部左侧 3 类原始文本经筛选重写得到 TextMedDataset，标注医学知识、诊断能力与安全约束。中间经参考音频库、提取的患者信息与语音合成模型得到 SpeechMedDataset，右上角小图示意回复长度随轮数收敛。中部左侧是文本分词嵌入与语音编码适配两条输入通路，中部右侧是文本头与语音解码两条输出通路，中间由大语言模型核心与共享隐状态连接。右侧明确第 1 阶段冻结语音解码器与语音适配器只训练大语言模型核心，第 2 阶段三者都训练。这种画法把为何能省语音数据的逻辑讲清：知识重活放在文本侧做，对齐轻活放在语音侧做。

### 编码器、适配器、模型核心与解码器各算什么？

组件按计算顺序可分为四块。语音编码器把波形变换为帧级特征，语音适配器再做维度与语义投影，使语音表示落入文本嵌入所在的空间。文本输入则经离散分词映射为文本嵌入。大语言模型核心对两类嵌入做自回归推理，输出共享隐状态。语言模型头负责文本 token 预测，语音解码器负责声学单元预测并经声码器还原波形。

论文强调该结构利用了语音同时携带语言内容与副语言线索的性质，把语音对齐到文本已有语义空间，从而实现文本知识向语音迁移。
先看语音侧从波形到语义空间的投影公式，符号含义是理解冻结策略的基础。

\[Zs = A(E(xs)) ∈RTs×d\]

该式中 Xs 表示输入波形，E 表示语音编码器，A 表示语音适配器，Zs 表示投影后的语音表示，上标 Ts 为时间步数，d 为语义维度。文本侧对应地把离散 token 映射为同样维度 d 的嵌入，使两路可以在同一空间相加或拼接后送入模型核心。输出侧语音解码器记为 G，隐状态记为 H，声学单元记为 U，最终波形估计与文本解码保持对齐。
再看论文用来解释为何少量语音就够的域适应界，重点是误差分解而非具体数值。

\[ϵs(f) ≤ϵt(f) + 1\]

该式把语音域误差上界分解为文本域误差、2 模态散度项与最小联合风险。论文的论证链是：大语言模型核心在文本域已优化得较好，医疗对话与通用对话结构共享使联合风险有限，预训练语音模型本来对齐较好且第 1 阶段文本训练只引起轻微偏移，因此主要矛盾是散度项，第 2 阶段只需少量语音把散度压回去。具体实现上第 2 阶段分两部分，一是解冻语音适配器并与模型核心在语音输入文本回复对上联合训练，二是只解冻语音解码器在语音输入语音回复对上提升语音生成。原文未给出更细的梯度停留与损失权重，解读时不猜测未报告的优化细节。

**语音编码器 × 语音适配器：** 语音编码器负责把连续波形变成声学特征，保留语言内容和咳嗽等副语言线索；语音适配器负责把这些特征投影到大语言模型已有的语义空间。两者搭配的原因是让语音和文本共享同一套对话推理，组合后文本学到的医学知识可以直接被语音输入调用。

**大语言模型核心 × 语音解码器：** 大语言模型核心负责理解症状、决定追问和给出诊断建议的文本隐状态；语音解码器负责把隐状态再变成可听的语音波形。搭配的原因是把推理和发声解耦，组合后既能保持文本诊断逻辑，又能实现流式语音输出。

### 数据如何构造，两阶段如何冻结与更新？

数据构造是可复述的关键。TextMedDataset 目标 405k，来源分 3 类。知识注入用 CMB 考试选择题 189k、医学百科单轮问答 41k、医学书籍问答 40k，覆盖 49 个科室与常见病用药，回复用 Qwen2.5-32B-Instruct 改写为简洁清晰。诊断能力用 CMtMedQA 多轮咨询 68k、MedDG 真实多轮对话 16k、HuatuoGPT2-SFT48k，先用 Qwen2.5-14B-Instruct 过滤不完整样本，再用 Qwen2.5-72B-Instruct 改写为符合问诊工作流的结构化对话，把长单轮转为多轮，报告平均 6.58 轮、每轮 36.4 字、每对话 3.3 个追问。安全约束显式加入 MedSafety-GPT4 的 450 条有害问题与安全回复，隐式则靠追问能力减少信息不足时的臆测。

SpeechMedDataset 目标 198k，做法不是随机选参考音频，而是先用 Qwen2.5-14B-Instruct 从对话推断患者性别与年龄组，再从 Aishell2 的 1000 小时与 Aishell3 的 85 小时约 2000 人多口音池中选匹配音色，用 CosyVoice2 合成，未知属性时用 FishSpeech 随机音色增强泛化。咳嗽感知另有约 2k 对话，在占位符处插入 SoundDr 咳嗽声并确保占位前无文字咳嗽描述，迫使模型只能从声音学到咳嗽。
训练细节按原文交代。基座是 LLaMA-Omni2-7B，另用 OpenS2S 验证通用性。第 1 阶段只微调大语言模型核心，批量 8、学习率 5 乘 10 的负 5 次方，数据为 TextMedDataset。

第 2 阶段批量 1、学习率 1 乘 10 的负 5 次方，数据为 SpeechMedDataset 加单轮文本问答，最终语音文本 1 比 1。冻结安排如总览所述，第 1 阶段冻结语音编码器适配器与解码器，第 2 阶段全部解冻，其中适配器与核心做理解对齐，解码器做生成优化。论文未报告总步数之外的显存与时长，复现时应以原配置为准，不从模型名推定未说明的实现。

**知识与能力注入 × 模态重对齐：** 知识与能力注入是在第 1 阶段冻结语音模块、只用大量文本教会模型医学知识和问诊流程；模态重对齐是在第 2 阶段解冻语音通路、用少量语音把被扰动的语音文本对齐恢复。搭配的原因是文本数据多而语音数据少，组合后用低成本语音量恢复语音问诊能力。

**TextMedDataset × SpeechMedDataset：** TextMedDataset 是 405k 规模的重写文本多轮对话，负责提供知识、问诊能力和安全约束；SpeechMedDataset 是 198k 规模的合成语音对话，负责提供带患者年龄性别匹配的语音输入。搭配的原因是先有结构化文本才能合成可控语音，组合后形成文本教知识、语音做对齐的完整训练链。

### 用什么数据、基线和指标测，条件是否一致？

评测基准 SpeechMedBench 分 4 维。单轮问答用 CMB 与 CME 选择题测知识，用从华佗预训练采样且与训练不重叠的百科问答 Ency 测术语识别，用 MedSafetyBench 测安全 1 到 5 分，分数越低越安全。表 2 中除 CMB 与 CME 只用文本外，其余均经语音交互评测。多轮对话构建虚拟门诊，患者智能体基于 MedDG 真实对话或 AIHospital 真实病例，只透露部分信息，实习医生即被测模型必须通过追问拿全信息，主考官用 Qwen2.5-72B 按 6 维打分：症状理解、主动提问、诊断推理、治疗建议有效性、对话质量、口语适宜性，每维 10 分。

真实环境评测收集 20 组临床录音，含噪声与无序表达，5 位医生投票选最像真医生的单轮回复。语音质量用 UTMOS 测自然度、用 ASR 转写算字错率测图文一致性、用首包语音延迟测实时性。基线覆盖 3 类：医疗文本模型加统一语音外挂，通用语音模型，多模态模型。附录另用 MMLU 与 VoiceBench 检验通用知识保留，用不同评委检验打分偏差。

**单轮问答 × 多轮问诊：** 单轮问答负责检验记忆型医学知识和术语识别，多轮问诊负责检验症状披露不全时主动追问和推理。搭配的原因是真实门诊既要答对知识点又要问出关键信息，组合后才能同时评价知识掌握和临床沟通技能。

### 主结果在什么条件下支持什么判断？

主结果的比较问题是：在统一语音交互下，本方法是否同时拿下知识与问诊。公平条件是所有模型都经语音输入生成回复，主考官与患者模拟器固定，单轮百科与安全走语音通道。指标方向为选择题与百科越高越好，安全分越低越好，多轮 MedDG 与 AIHospital 越高越好，野外得票越高越好。下表整理论文报告的关键数字，包含可运行的基座与强基线，避免只看单一指标。

| 条件 | 指标 | 基座 LLaMA-Omni2 | 强基线 Qwen2.5-Omni | 本方法 SpeechMedAssist |
| --- | --- | --- | --- | --- |
| 文本选择 CMB | 正确率 | 73.43 | 76.83 | 77.96 |
| 文本选择 CME | 正确率 | 56.98 | 75.33 | 75.48 |
| 语音百科 Ency | 评分越高越好 | 39.82 | 58.12 | 61.02 |
| 语音安全 Safety | 评分越低越好 | 1.96 | 1.72 | 1.32 |
| 多轮 MedDG | 主考官分越高越好 | 73.18 | 76.46 | 83.26 |
| 多轮 AIHospital | 主考官分越高越好 | 76.33 | 76.53 | 83.40 |
| 回复长度 | 字符数越短越口语 | 61.82 | 252.89 | 51.36 |
| 对话轮数 | 轮数适中为好 | 4.37 | 3.32 | 4.62 |
| 野外投票 | 得票越高越好 | 0 | 1 | 26 |

表后解释需要同时讲收益与代价。本方法在 CMB、CME、Ency、安全、多轮两套背景与野外投票上报告最高，支持文本注入的知识在第 2 阶段得到保留并迁移到语音的判断。

代价与反例也要点明：回复长度最短有利于口语适宜性，但在需要长推理的维度上可能吃亏；十针 GPT 类长回复在症状理解单维上因篇幅占优，但总平均与交互效率落后。未胜出项方面，个别通用模型在单项百科或安全上接近本方法，说明通用语音对齐本身仍有竞争力。不同评委下的柱状图进一步显示严格评委压低所有分数但本方法仍居首，支持结论对评委选择不敏感。
为确认多评委下排序是否稳定，再看 3 组评委的柱状对比。

> **看图路径：** 1. 先按横轴三个评委分组看每组内最右侧红色柱子的相对高度；2. 再看最右侧严格评委组下其他模型柱子下降幅度是否大于本模型；3. 最后对比左侧两组评委下各模型差距是否被压缩但排序是否保持

[![原论文 Figure 6：Bar chart of scores obtained using three dif- ferent models as judges in multi-turn conversation…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/945a5fbb3665/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/945a5fbb3665/figure-6.png)

*论文图 6。原论文 Figure 6：“Bar chart of scores obtained using three dif- ferent models as judges in multi-turn conversation eval- uation. Our model consistently performs the best.”。*

图中横轴为 3 位评委，纵轴为 AIHospital 分数，每组内最右侧红色柱为本方法。可见在 Qwen 与 LLaMA 评委下各模型差距较小但本方法仍最高，在 DeepSeek 评委下整体分数下移且差距放大，本方法优势反而更明显。这支持多轮胜负不是单一评委偏好造成的，但也提醒自动打分存在严格度差异，不能把绝对分值跨评委直接比较。

### 两阶段是否必要，语音量能否大幅减少？

消融要回答两个操作问题：去掉任 1 阶段会怎样，减少语音量会怎样。论文用同一基座做 4 种训练：基座、加第 1 个阶段、加第 2 个阶段、纯语音一段式。比较问题是知识与问诊能力究竟来自文本注入还是语音拟合，公平条件是评测走相同语音通道与主考官。指标方向与主结果一致。下表保留必要基线与实际可运行策略。

| 训练条件 | 语音百科越高越好 | 语音安全越低越好 | 多轮 MedDG 越高越好 | 多轮 AIHospital 越高越好 |
| --- | --- | --- | --- | --- |
| 基座 Backbone | 39.82 | 1.96 | 73.18 | 76.33 |
| 加第 1 个阶段 Stage I | 44.17 | 1.56 | 72.81 | 70.68 |
| 加第 2 个阶段 Stage II | 61.02 | 1.32 | 83.26 | 83.40 |
| 纯语音 Audio Only | 55.60 | 1.82 | 79.01 | 80.21 |

表后解释先讲机制。只加第 1 阶段时百科与安全小幅改善，但多轮反而轻微下降，说明文本知识学会了但语音通道未对齐，语音问诊用不出来。加上第 2 阶段后四项全面跃升，且优于纯语音一段式，支持先文本教知识再少量语音恢复对齐的有效性。纯语音虽也能提升，但百科低 5.42、安全差 0.50、多轮低 3 到 4 分，说明同等语音预算下缺文本注入更吃亏。

论文进一步用训练曲线展示效率，左图 2 阶段在问答与对话两条曲线上全程高于纯语音，右图 10k 语音已接近 198k 终点，20k 与 10k 在早期即收敛，支持 10k 量级即可完成重对齐的判断。但要注意这是中文合成语音与固定基座下的结论，换语言、换基座或真实噪声更大时所需量可能变化。
为看清训练步数与样本量的交互，先看两张曲线图的像素细节。

> **看图路径：** 1. 先看左图实线与虚线的分组图例，区分二阶段训练与纯语音训练；2. 再看右图三种语音样本量曲线在训练步数增加时的收敛位置；3. 最后确认右上角 198k 星号与 10k 曲线末端差距是否明显拉开

[![原论文 Figure 5：(a): Comparison of the performance between the model trained in Stage II and the model trained…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/945a5fbb3665/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/945a5fbb3665/figure-5.png)

*论文图 5。原论文 Figure 5：“(a): Comparison of the performance between the model trained in Stage II and the model trained from scratch on speech data, for single-turn Q&A and multi-turn conversation…”。*

左图横轴为训练步数，纵轴左右分别为问答分与对话分，实线为 2 个阶段，虚线为纯语音。可见 2 阶段从早期就领先并保持到 97010 步附近，虚线在 5k 与 97k 处的方差标记较小，说明领先不是单点抖动。右图横轴同样为步数，纵轴为对话分，3 条曲线为 2k、10k、20k 语音量，右上角星号为 198k 终点。可见 10k 橙线与 20k 深红线在 5000 步过后即贴近终点，而 2k 浅黄线在后期回落，说明过少语音会欠对齐，10k 是本设置下的拐点。这支持高效但不等同于语音越多越好，总体趋势不等于每一步都单调上升。

### 还有哪些边界、噪声与模态限制？

论文明确的局限有两条。第一，只用文本与语音两种模态，门诊常用的影像、检验单等多模态信息未纳入，复杂病例的准确诊断仍需扩展。第二，聚焦普通话，虽用多口音参考音频与随机音色增强泛化，但其他语言与方言仍待验证。伦理部分指出原始数据多为公开且已匿名化，模型仍可能幻觉，只能在专业监督下使用，部署还需输入质量校验与输出复核。从证据看还有三点边界值得初学者注意。

其一，通用知识保留在 MMLU 与 VoiceBench 上基本保持，个别任务小幅波动，不构成灾难遗忘，但不能推广为所有通用任务都不受影响。其二，咳嗽等副语言在专用 2k 训练后可被感知，叹气、清嗓、喷嚏、 sniff 等在 VocalSound 上报告 90% 以上识别率，但这是受控插入的评测，真实重叠噪声与远场拾音下的误判率未系统测量。其三，语音质量与延迟在正文以方法描述为主，具体数值需看附录，不宜在未测量时承诺延迟改善。相关性不等于因果，问诊分高与追问行为相关，但不能直接断定每 1 次追问都提升诊断。

### 复现先做什么，需要哪些配置与数据动作？

复现应先做文本管线再做语音管线。文本侧按表 1 来源收集考试、百科、书籍与多轮对话，用 14B 模型过滤不完整样本，用 72B 模型按口语要求重写，控制每轮百字内、无 Markdown、无致谢告别、医生末轮收尾，并保留诊断逻辑。语音侧先用 14B 模型推断性别年龄，再从 Aishell2 与 Aishell3 池中匹配音色，用 CosyVoice2 合成，未知属性用 FishSpeech 随机音色，最终得到多轮语音对话。训练侧基座可用 LLaMA-Omni2-7B 或 OpenS2S，第 1 阶段批量 8 学习率 5 乘 10 负 5 只训模型核心，第 2 阶段批量 1 学习率 1 乘 10 负 5 全量训练并保持语音文本 1 比 1。

下表把规模与超参数集中呈现，便于核对。

| 对象 | 规模或配置 | 来源动作 | 用途 |
| --- | --- | --- | --- |
| TextMedDataset | 405k | 过滤加改写 3 类文本 | 第 1 阶段知识能力注入 |
| SpeechMedDataset | 198k | 患者属性匹配合成 | 第 2 阶段模态重对齐 |
| 第 1 个阶段 | 批量 8，学习率 5 乘 10 负 5 | 冻结语音模块训核心 | 学知识与问诊流程 |
| 第 2 个阶段 | 批量 1，学习率 1 乘 10 负 5，语音文本 1 比 1 | 解冻全模块分步训适配器与解码器 | 恢复对齐保知识 |
| 咳嗽专项 | 约 2k，占位插入咳嗽声 | 占位前无文字咳嗽描述 | 副语言感知验证 |

复现时先跑通文本重写与过滤的抽检，确认平均轮数与字数符合口语约束，再小量合成验证音色匹配逻辑，最后用 10k 语音做对齐冒烟测试，观察多轮分是否快速上升。

若 10k 未接近预期，应检查语音文本比例与解码器是否按两步解冻，而非直接增大语音量。论文未公开可验证资源状态，复现需自行按许可收集原始语料，不声称官方已公开。

### 何时值得尝试这条路线？

当垂直领域缺语音但有较多文本时，这条先文本后少量语音的路线值得尝试。适用条件是基座语音模型本身已具备较好的语音文本对齐，且目标任务的对话结构与通用对话差异不大，此时文本注入的扰动较小，重对齐所需语音量才可能小。若基座对齐很差或目标语言口音与合成池差异大，则 10k 有效的结论不可直接套用。

实践建议是把问诊流程显式写入重写提示，控制轮数 4 到 8 轮、每轮百字、医生末轮给出去医院检查的建议而非直接开具体处方，同时保留安全拒绝数据。评测建议单轮与多轮并重，既看选择题与术语识别，也看模拟患者与真人投票，避免被长回复的单维高分误导。还需补的验证包括真实噪声下的字错率与首包延迟、副语言在远场的误判率，以及换基座换语言后的样本量曲线。只有补齐这些，才能把高效的实验室结论转为可部署的门诊收益。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
