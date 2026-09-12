---
title: "Team QUESPA System Submission for the IWSLT 2026 Dialectal and Low-resource Speech Translation Task"
date: 2026-09-12
draft: false
description: "针对克丘亚语到西班牙语低资源语音翻译，QUESPA 比较了级联与端到端路线，最强证据是端到端微调 SpeechT5 结合 SIDON 增强、数据增广与 Collao 语料在官方集上取得 27.2 的 BLEU，代价是 CHRF 未同步提升且大模型提示翻译仍远低于微调基线。"
tags: ["SFT", "低资源", "语音", "语音翻译"]
categories: ["iwslt-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:iwslt:2026:conference-paper-id:2026.iwslt-1.5"
paper_digest_source_kind: conference
paper_digest_conference_id: "iwslt-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.iwslt-1.5/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.iwslt-1.5.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ade79ec407bf593a3fcfe4d4077f663829f47ee036b9e529f1611fbd5ab0ec93"
paper_digest_api_reader_plan_sha256: "76501c990d8e5fc29b2bbbbb513d3bef6ddb413ca81ca83be5c3d2eddad60fef"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "110404eefb1d6f419c0228b77cb6791c91ad6f3c53424232217234a34d8e42c0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4a72806384c728046a07f78806a551035212b2202493fb4f023c7a2d63645993"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2315f7a657aa8dd74020c6cf528eeafcc1b9ac503a3d302242fa136884ce0359"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "276caa82f4a1d075301759bb593840ad6977b260f05954d91e073461cb21ae49"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-translation","label":"语音翻译"}]
paper_digest_primary_task: "语音翻译"
paper_digest_primary_method: "SFT"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 低资源下直接翻译为何胜过级联：QUESPA 以 SpeechT5 加增强与新语料推进克丘亚语语音翻译

> 英文题目：*Team QUESPA System Submission for the IWSLT 2026 Dialectal and Low-resource Speech Translation Task*

> 会议身份：`conference:iwslt:2026:conference-paper-id:2026.iwslt-1.5`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.5/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.5.pdf)

标签：#SFT #低资源 #语音 #语音翻译

评分：**6.4/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.5/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- John E. Ortega：机构信息未能从会议 PDF 纯文本可靠映射
- Rodolfo Joel Zevallos：机构信息未能从会议 PDF 纯文本可靠映射
- Fabrício Carraro：机构信息未能从会议 PDF 纯文本可靠映射
- Stephanny Gabriela Sánchez Bautista：机构信息未能从会议 PDF 纯文本可靠映射
- Chad Howe：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务输入为秘鲁安第斯广播域的克丘亚语语音，输出为西班牙语文本，实际难点在于配对语音翻译仅1小时40分钟而转写音频约48小时，且克丘亚语高度黏着并存在Chanka与Collao方言分化与录音条件异构。方法链先用SIDON对全部训练音频做降噪去混响与信道归一化以输出干净波形，再将干净音频送入语音编码识别器得到克丘亚语转写文本，最后将转写文本送入微调后的NLLB模型生成西班牙语译文。主系统采用ConMamba识别后级联NLLB翻译，对比一将识别器替换为Whisper Large V3后级联同一NLLB，对比二则采用SpeechT5直接语音到译文端到端微调并叠加新增Collao语料与数据增强。相对已有级联基线的关键差异在于用大规模预训练语音编解码与端到端建模替代分步转写以避免误差累积，并以信号级增强降低异构录音方差，具有减少级联脆弱性的实际意义。提示翻译多家商用大模型仅作为对照，其最佳结果仍明显落后于微调专用模型，说明零少样本提示难以处理方言混合与幻觉问题。在IWSLT 2026无约束评测任务下，Contrastive 2系统的BLEU为27.2，高于Primary系统的BLEU 15.0。该结论适用边界受限于南方克丘亚语双变体与小规模广播评测，跨方言跨噪声与长尾主题泛化尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/xi-j/Mamba-ASR> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/speechbrain/speechbrain/> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/microsoft/SpeechT5> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/makcedward/nlpaug> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，哪些信息必须保留？

这篇论文研究的是克丘亚语语音到西班牙语文本的翻译。输入是一段克丘亚语录音，主要是秘鲁安第斯地区广播语音，包含查卡与科利亚奥等南方变体，转写标注为 que。目标输出是对应的西班牙语译文。必须保留的信息有两层，一是话语的内容语义，二是黏着语形态携带的时态、人称与示证等后缀意义。克丘亚语每词约 3 个语素，约为英语 1.5 个的 2 倍，词缀切分错误会直接改变译文，因此评价不能只看词面命中。

任务属于 IWSLT 2026 方言与低资源语音翻译赛道，本年只设无约束赛道，允许使用外部预训练模型与外部语料。官方提供约 1 小时 40 分钟带翻译的语音、约 48 小时带转写的语音识别数据，以及此前神经机器翻译工作提供的机器翻译数据集。理解这组输入输出关系是后续所有方法选择的前提：数据少、形态复杂、录制条件杂，任何只依赖小规模从零训练的方案都难以成立。论文因此把重点放在如何复用预训练语音与文本模型、如何增强音频、如何补充语料上。

### 以往在克丘亚语上走通了哪条路线？

论文先回顾了 3 类相关路线。第一类是 IWSLT 2023 首次引入克丘亚语到西班牙语时各队的选择。由于配对数据极少，参赛队都转向利用预训练模型。共同点是多用 XLS-R 128 作为语音编码器、多用 NLLB 200 作为文本模型，不同点在于组合方式：QUESPA 把两者拆成自动语音识别加机器翻译的级联，GMU 对 XLS-R 做直接语音翻译微调，NLE 用适配器把两者连起来。当年无约束下 NLE 与 QUESPA 分别取得 15.7 和 15.4 的 BLEU，受限赛道最好只有 1.46，这说明无外部模型时几乎不可用。

第二类是 AmericasNLP 2022 与 ML-SUPERB 等评测的经验，XLS-R 在克丘亚语表征上优于其他自监督编码器，Whisper 与 DeltaLM 也被尝试过，但并未改变低资源下依赖预训练的结论。第 3 类是多语训练促进跨语言迁移的思路，用高资源语或多个低资源语联合训练语音识别与翻译。论文把自己的无约束策略定位为后两者的结合：用多语预训练打底，再用克丘亚及形态相似的瓜拉尼语与布里布里语等低资源语数据做补充微调。

这一节的教学作用是划定公平比较的边界：同为无约束、同为利用外部预训练，才可比较架构差异，不能把无约束成绩与受限成绩直接对比。

### 为什么低资源加方言会让直接套用大模型失效？

难点来自 3 个叠加因素。第一是监督量小。真正同时有音频、转写与译文的三元组只有 1 小时 40 分钟，能用于语音识别的两元组约 48 小时，远不足以从零训练端到端翻译。第二是方言与形态差异。数据集主体是南方 Quechua II，但内部仍有阿亚库乔查卡与库斯科科利亚奥之分，后缀 inventory 大，拼写与词缀选择随变体变化。

若训练只见过一种变体，测试遇到另一种就容易失配。第三是音频条件杂。广播录音混有噪声、混响与通道差异，小模型容易把声学扰动当成语言学差异。论文用一个教学例子说明：同样一句含多后缀的克丘亚话语，若转写把后缀边界切错，级联的翻译模块即使很强也只能基于错误转写生成流利但偏离的西班牙语；而直接提示大语言模型时，模型可能混用不同方言特征，或用西班牙语先验补全缺失内容，造成幻觉。

例子不对应具体数值，仅用于理解为何需要同时处理声学增强、形态覆盖与翻译保真。后续方法全景正是围绕这三点展开：增强管输入质量，增广与新语料管覆盖，预训练微调管建模能力。

### 三套系统各自解决什么问题，如何分工？

论文提交了 3 套无约束系统，共享同一机器翻译基座但语音前端不同。主系统是 Mamba 语音识别加 NLLB 机器翻译的级联，先降噪再转写再翻译。对照系统一是 Whisper Large V3 语音识别加同一 NLLB 的级联，同样先降噪。对照系统 2 是 SpeechT5 端到端语音翻译，不经过显式克丘亚文本中间结果，直接从增强后音频生成西班牙语，并叠加数据增广与新语料。三者的分工是：两个级联系统检验不同语音识别架构在同一翻译后端下的差异，端到端系统检验联合建模能否避免级联的误差传递。

沿一个样本走完全流程更直观：一段广播克丘亚音频先进入 SIDON 做归一化与增强，得到更干净的波形；若走级联路线，增强音频进入 ConMamba 或 Whisper 得到克丘亚转写，再进入微调过的 NLLB 得到西班牙语；若走端到端路线，增强音频直接进入微调过的 SpeechT5 编码器解码器，同时利用科利亚奥语料与增广数据的知识生成西班牙语。下图是理解对照系统 2 的关键，只看它就能复述最强路线的主路径。

本段先说明全景与样本路径，图在此后独立成段出现，图中黄色为增强、蓝色为翻译主体，箭头方向即数据流向。

> **看图路径：** 1. 先从顶部波形与克丘亚例句出发，确认输入是原始音频而非转写文本；2. 再看黄色 SIDON 框如何先做降噪再向右送入蓝色编码器解码器；3. 对照蓝色框内 Collao、AmericasNLP 与 Augmentation 三行，确认训练数据组成；4. 最后比较底部左右两句克丘亚转写与西班牙语译文，确认输出是端到端翻译

[![原论文 Figure 1：High-level system overview of Contrastive System 2, a fine-tuned SpeechT5 (Ao et al., 2021) model…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/bbf304f1a3b0/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/bbf304f1a3b0/figure-1.png)

*论文图 1。原论文 Figure 1：“High-level system overview of Contrastive System 2, a fine-tuned SpeechT5 (Ao et al., 2021) model with SIDON (Nakata et al., 2025) applied to the audio file.”。*

该图显示顶部原始波形与例句先进入黄色 SIDON 降噪框，框内保留了增强后波形示意与修正后的转写，再向右送入蓝色微调 SpeechT5 编码器解码器框，框内明确列出 Collao、AmericasNLP 与 Augmentation 3 个训练来源，底部左右分别为克丘亚参考与西班牙语输出。这支持一个判断：最强系统把声学处理与翻译建模解耦，但训练时用多源数据联合适配，而不是把所有压力都放在解码器上。

**语音翻译 × 级联系统：** 语音翻译指从克丘亚语音频直接得到西班牙语文本，级联系统则先用自动语音识别转写为克丘亚文本再用机器翻译译为西班牙语；级联分工明确便于复用高性能文本翻译模型，但转写错误会向后传递，论文因此同时保留两条级联与一条端到端 SpeechT5 路线以比较误差传递与联合建模的差异。

### 语音编码器与翻译解码器各自做了什么计算？

先讲白话再给术语。自动语音识别指把语音变为同语言文本，机器翻译指把克丘亚文本变为西班牙语文本，语音翻译指跨过中间文本直接跨语种生成。主系统的语音部件采用 ConMamba，它在 Mamba 长程建模基础上加入卷积模块以增强局部上下文。编码器依次经过前馈残差、双向 Mamba、卷积、层归一化与前馈精炼，兼顾全局依赖与局部声学细节；解码侧用 CrossMamba 模拟交叉注意力，通过拼接键与查询序列并保留相关部分来融入编码器上下文，再经单向 Mamba 与前馈输出转写。

论文试验了小与大两种配置，维度为 144 与 512，层数为 12 加 4 与 12 加 6。对照系统一的 Whisper Large V3 则是标准的 Transformer 编码器解码器，编码器接收梅尔频谱，解码器以语言标识为条件生成。对照系统 2 的 SpeechT5 包含 12 层 Transformer 编码器与 6 层解码器，模型维度 768，前馈维度 3072，12 个注意力头，语音预网络含 7 块时域卷积，文本侧共享 768 维嵌入，并用两个各 100 条目的码本做向量量化。原文称其在 LibriSpeech 的 960 小时音频上预训练，并用 400,000,000 句文本做无标注训练，优化器为 Adam。理解这些数字不是为了背诵，而是为了复现时选对配方与规模。

**微调 × 预训练语言模型：** 预训练语言模型指在大量外部语音或文本上先训练好的编码器解码器，微调指在其参数基础上用 48 小时克丘亚配对数据继续训练；前者提供跨语言声学与语义表示，后者使其适配南部克丘亚口音与广播领域，组合意义是以小数据撬动大模型而不从零训练。

语音增强部件 SIDON 在 3 个系统中通用。它的计算发生在模型训练之前，对全部音频做归一化与增强，目标是减少背景噪声、混响伪影与通道失真。论文明确指出这一步对低资源异构数据尤为关键，因为录制条件变化会显著拉低性能。增强不改变语言内容，只改变输入表示的稳定性，后续所有微调都在增强后数据上进行。

**SIDON × 语音增强：** 语音增强指在训练前降低背景噪声、混响与通道失真，SIDON 是论文采用的开源多语语音修复前端；SIDON 负责统一录制条件、减少异构噪声，翻译模型负责语义映射，二者搭配的理由是低资源广播数据条件多变，增强后输入表示更稳定。

### 数据如何构造，模型如何训练与推理？

训练数据由四部分组成。组织方提供的 48 小时音频及转写是主体，作者又将其译为西班牙语以构造翻译监督；AmericasNLP 2022 的瓜拉尼语 19 分钟与布里布里语 29 分钟带西班牙语译文数据被加入，理由是形态上与克丘亚语相似，可能带来迁移；去年已用的科利亚奥语料今年被正式列为可用语料，约 15 小时，用于补充 Quechua II 子家族覆盖；去年使用的 Huqariq 机器翻译后编辑文本也被提及为增广来源之一。

对照系统 2 还用 nlpaug 做噪声、失真与复制增广，原文描述为 48 小时原始加 48 小时合成，再加 15 小时科利亚奥语料，总计约 111 小时量级。训练方法上，主系统的 ConMamba 与 Conformer 按公开 Mamba-ASR 配方训练 110 轮，用 AdamW 与 Noam 调度，预热 30,000 步，字节对编码分词器为每种语言单独训练；对照系统一的 Whisper 在全部 48 小时上微调 22,000 步，Adam 优化器，线性预热 1500 步至 1e-5 峰值再指数衰减，推理用贪心解码；对照系统 2 按 SpeechT5 语音翻译配方微调，超参数沿用配方默认值。

机器翻译后端沿用去年微调的 1,300,000,000 参数 NLLB 200 版本，最大输入输出长度 128，训练 10 轮，批量 8，生成用 5 束搜索，每 10,000 步存档，随机种子 65。推理时级联路线是增强、转写、翻译 3 步串行，端到端路线是增强后直接生成。需要指出的缺项是：论文未报告学习率之外的完整 SpeechT5 微调超参数表，也未给出增强前后信噪比的定量测量，因此增强的收益只能从下游 BLEU 与 CHRF 变化中间接推断。

**数据增广 × Collao 语料：** 数据增广指用 nlpaug 加噪、失真与复制把 48 小时扩为 96 小时，Collao 语料指新增约 15 小时的 Quechua Collao 语音；前者增加声学多样性，后者补充 Quechua II 南方变体的词汇与形态覆盖，组合后共同扩大端到端模型的有效监督量。

### 在什么数据与指标下比较，结果才可信？

实验条件按原文交代如下。数据集与去年 IWSLT 2025 相同，仅新增可用的科利亚奥语料与 Huqariq 后编辑文本，音频主体仍是安第斯广播语音。任务只评无约束，官方测试集用于最终排名。指标为 BLEU 与 CHRF，均为越高越好，其中 BLEU 对词面精确率敏感，CHRF 对字符级形态变化更敏感，对黏着语尤为重要。基线包括去年 QUESPA 的 NLLB 机器翻译基线与去年 3 套语音翻译系统，分别对应 14.8、15.0 与 26.7 的 BLEU 量级。

今年新增的比较是提示大模型做机器翻译，涵盖 GPT、Gemini、Claude、DeepSeek 与 Qwen 多个版本，提示词以西班牙语写成，详见附录 A 至 E，并在公开 Colab 笔记本上运行，取测试集上最好提示的结果与基线对比。资源状态方面，论文引用的 4 个代码链接本次均可达：Mamba-ASR、SpeechBrain、SpeechT5 与 nlpaug 均为可用状态，状态码 200，因此可写为当前可用。复现时应固定 NLLB 的种子 65 与束搜索 5，并注意提示实验的随机性与版本差异：同一模型换提示或换推理模式得分会变化，不能把单次最好提示当成可部署期望。

硬件与耗时未在证据中报告，这是后续补验证的一项。

### 提示大模型能否替代微调，端到端强在哪里？

先看机器翻译的提示实验。比较问题是：在相同测试集上，仅靠提示大模型能否超过去年微调的 NLLB 基线。公平条件是同一测试集、同一参考译文，指标方向均为越高越好。下表整理了基线与部分提示模型的测试集成绩，数值保留原文写法。

比较提示翻译与微调基线时，基线优势是否稳健，指标方向是否一致，是阅读该表的关键，表中 BLEU 与 CHRF 单位均按原文表头理解，数值越大表示越好。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 机器翻译测试集 | BLEU | 19.5 | 3.7 | GPT 5.4 |
| 机器翻译测试集 | CHRF | 23.5 | 25.5 | GPT 5.4 |
| 机器翻译测试集 | BLEU | 19.5 | 10.8 | Gemini 3 Flash |
| 机器翻译测试集 | CHRF | 23.5 | 48.3 | Gemini 3 Flash |
| 机器翻译测试集 | BLEU | 19.5 | 10.4 | Deep Seek-V3.2 Expert Deep Think |
| 机器翻译测试集 | CHRF | 23.5 | 49.0 | Deep Seek-V3.2 Expert Deep Think |
| 机器翻译测试集 | BLEU | 19.5 | 7.3 | Qwen 3.6 Plus Thinking |
| 机器翻译测试集 | CHRF | 23.5 | 47.4 | Qwen 3.6 Plus Thinking |

表后解释需要同时看到收益与代价。报告显示提示模型在 BLEU 上均未超过 19.5 的基线，最好的是 Gemini 3 Flash 的 10.8 与 DeepSeek 对应版本的 10.4，GPT 5.4 仅 3.7；但在 CHRF 上多个提示模型超过基线的 23.5，例如 Gemini 达 48.3。这说明提示模型能生成字符层面更流畅的西班牙语，却在词与短语精确匹配上偏离参考。论文还报告了定性失败：GPT-5 会把不应参考的西班牙语字段当隐式参考并补全缺失内容，Gemini 混用方言变体，Claude 对 Collao 方言更弱，DeepSeek 偏字面翻译，Qwen 在谚语与文化语境上错误多。因此支持的判断是：零到少样本提示在该任务上不如微调 NLLB，未胜出项恰是全部提示模型，这是明确的负结果。

**BLEU × CHRF：** BLEU 是基于词或短语精确率的翻译自动指标，CHRF 是基于字符 n 元文法的指标，对黏着语的词缀变化更敏感；论文同时报告二者是因为克丘亚语平均每词约 3 个语素，只看 BLEU 会忽略形态层面的得失，CHRF 下降即提示了这种代价。

### 增强与新语料带来多少可运行的增益？

再看语音翻译 3 套系统的纵向与横向比较。比较问题是：在可运行的级联与端到端策略中，SIDON 增强与新增语料是否带来一致增益。公平条件是今年与去年使用相同量级数据与同一后端，指标仍是 BLEU 与 CHRF 越高越好。下表为 2026 与 2025 官方集成绩对照，描述与数值保留原文。

阅读该表应先固定年份再比较架构，再固定架构比较年份，这样才能把增强与语料的增量与架构差异分开，表中 BLEU 越高表示词面命中越好，CHRF 越高表示字符形态越好。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 非受限 2026 主系统 | BLEU | 14.8 | 15.0 | Mamba 识别加 SIDON 加 NLLB 翻译 |
| 非受限 2026 主系统 | CHRF | 51.8 | 50.7 | Mamba 识别加 SIDON 加 NLLB 翻译 |
| 非受限 2026 对照 1 | BLEU | 15.0 | 15.4 | Whisper 识别加 SIDON 加 NLLB 翻译 |
| 非受限 2026 对照 1 | CHRF | 52.4 | 52.0 | Whisper 识别加 SIDON 加 NLLB 翻译 |
| 非受限 2026 对照 2 | BLEU | 26.7 | 27.2 | SpeechT5 加 SIDON 加增广加 Collao |
| 非受限 2026 对照 2 | CHRF | 48.6 | 51.4 | SpeechT5 加 SIDON 加增广加 Collao |

表后解释要区分两种趋势。报告显示端到端 SpeechT5 从 26.7 升至 27.2，提升 0.5 个 BLEU，CHRF 从 48.6 升至 51.4 同步提升，这是唯一大幅领先的路线；两个级联系统 BLEU 平均提升约 0.4，分别从 14.8 到 15.0 与 15.0 到 15.4，但 CHRF 略降或持平。论文的解释是 SIDON 对 Mamba 与 Whisper 有 BLEU 增益，但 CHRF 未改善，说明降噪改善了词级命中却未完全改善形态细节。未胜出项是两个级联系统，它们远低于端到端，这反证了在该数据量下避免中间转写误差的重要性。限制是：论文未做单独去掉 SIDON 或单独去掉 Collao 的严格消融，因此 27.2 中的 0.5 不能归因到单一因素，只能说三项新增共同作用的结果，待验证。

### 哪些结论还不能下，边界在哪里？

首先，提示实验的负结果不等于提示无用。论文只试了附录中的直接翻译提示，未试 Omnilingual 等多步复杂提示，也未微调大模型，因此不能推出大模型必然不适合克丘亚语。其次，增强的因果链不完整。SIDON 被描述为降低噪声与混响，但未报告增强前后信噪比、词错率或人工听感，级联 CHRF 不升反降提示增强可能在去噪同时损伤了部分形态声学细节，这一猜测可能但待验证。第三，方言覆盖仍有限。

新增 Collao 语料属于 Quechua II 南方支，与测试主体匹配，但 Quechua I 等北方变体未被系统评估，跨变体泛化边界未知。第四，评价只用自动指标。BLEU 与 CHRF 方向一致时结论较稳，但两者背离时如提示实验，无法知道流畅但偏离的译文在实际使用中是否可接受，缺少人工评价。第五，成本缺失。训练轮数与步数有交代，但硬件、时长、推理延迟与增强开销均未报告，不能承诺该方案在实时或端侧可部署。

这些缺项不是技术错误，但决定了复现与引用时措辞必须用报告与支持，而非断言因果。

### 要复现最强系统，先做什么，后补什么？

复现对照系统 2 应按学习依赖排序。第一步取数：下载组织方 48 小时音频与转写、1 小时 40 分钟三元组、AmericasNLP 瓜拉尼与布里布里小语料，以及正式发布的科利亚奥语料与 Huqariq 后编辑文本，注意今年新增语料的官方链接。第二步做增强：用当前可用的 SIDON 对全部音频做归一化与增强，保留增强前后文件以便对比，4 个代码库中 SpeechT5、nlpaug、SpeechBrain 与 Mamba-ASR 当前均可用，可直接取配方。第 3 步做增广：用 nlpaug 对 48 小时做噪声、失真与复制得到约 48 小时合成，再并入约 15 小时 Collao 语料。

第四步微调：按 SpeechT5 语音翻译配方微调，翻译后端用种子 65、束 5、长度 128、10 轮的 NLLB 200 1,300,000,000 参数版本。先跑通不增强、不增广的 26.7 个基线，再加入增强与新语料，观察能否复现 27.2。若资源有限，可先复现 Whisper 级联的 15.4，因其训练步数与推理均为贪心解码，更易调试。还需补的验证有：单独开关 SIDON、单独开关 Collao、单独开关 nlpaug 的 3 组对照，以及在测试集上同时报告 BLEU 与 CHRF 并做显著性或多种子方差，避免把单次 0.5 当成稳定增益。

### 何时值得尝试这条路线，如何一句话记住它？

当你的任务也是小语种广播语音、形态复杂、录制条件杂，且只有几十小时配对数据时，这条路线值得尝试：先用通用语音修复统一输入，再用端到端预训练模型联合建模，最后用同语系变体语料与声学增广补覆盖。级联适合快速利用最强文本翻译模型、便于分模块调试，但要承受转写误差传递；端到端在本文中高出约 12 个 BLEU，代价是训练数据构造更重、对增强更敏感。提示大模型目前可作为短词辅助或基线对比，但不应替代微调。

记住它的方式是：增强管声学稳定，语料管方言覆盖，端到端管误差不传递，三者缺一则 27.2 难以复现。未来工作按论文指向是增加人工标注、尝试 Omnilingual 等更复杂提示与翻译后端，以及补齐延迟、成本与人工评价，使低资源语音翻译从自动指标领先走向真正可用。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/a28c068e213b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/a28c068e213b/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.iwslt-1.5.pdf#page=4)

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 iwslt-2026 论文汇总](/posts/conference-iwslt-2026/)
