---
title: "MSP: Modality Self-Play for Training Multimodal LLMs Without Paired Cross-Modal Data"
date: 2026-10-16
draft: false
tags: [音视频问答, 多模态学习, LoRA, 音频字幕生成]
categories: [论文速递]
description: "MSP 用单模态加为缺失模态生成的代理文本来训练，使推理时能联合使用真实音频与视觉，在 AVQA 等三项问答上取得有竞争力的准确率，但仍依赖模态文本对、对比编码器与桥校准，且代理质量决定效果上限。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.20965"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "不用音频配视频也能做音视频问答：代理文本自玩训练解读"
paper_digest_original_title: "MSP: Modality Self-Play for Training Multimodal LLMs Without Paired Cross-Modal Data"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.20965v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.20965v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.20965v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "MSP 用单模态加为缺失模态生成的代理文本来训练，使推理时能联合使用真实音频与视觉，在 AVQA 等三项问答上取得有竞争力的准确率，但仍依赖模态文本对、对比编码器与桥校准，且代理质量决定效果上限。"
paper_digest_authors: [{"affiliations":["University of California,","Riverside"],"name":"Robert Moseley"},{"affiliations":["University of California,","Riverside"],"name":"Md Kaykobad Reza"},{"affiliations":["Amazon"],"name":"Ameya Patil"},{"affiliations":["Amazon"],"name":"Edward Ayrapetian"},{"affiliations":["University of California,","Riverside"],"name":"Salman Asif"}]
paper_digest_abstract_sha256: "3f1a7adce685e4ea33cf9f3b4d09f8909a482c53ab171271ff6d626aac254905"
paper_digest_sidecars: {"citation.bib":{"sha256":"41746cf0c434f3985002c36f474f9fb369faf75025e3f683b65cdf14e6453ef3","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20965/citation.bib"},"citation.json":{"sha256":"a14578eeab2f191998620fcc6d1000cdf30f0c13fd443d7e168c1c3dea320cd0","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20965/citation.json"},"citation.ris":{"sha256":"6847a6a9c9aad02eddeab2d69f9e9225a478531139760a000f3e008d9e5d1047","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20965/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"b08d3d5a336995b3a0ef3363eb26657f75c7bce9684fdcc83484f2db95cd1bfa","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20965/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2f47c8f777ce1cbcfa9247d2a53049c64aa007a6823ef4635bffef8ad2f57d7b"
paper_digest_api_reader_plan_sha256: "112a6ec25e2ad865e090c85e7f89ff0ddfec852a5c5a4081e3c8719458dadc83"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e6e4990a080aec7b1f61d51410564f4b01346daea741b15a9c5e9648397b0700"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "46d3b8a79357a6ff11a0689bc3cf75d6582011cc96352398c6a738f35febd7cb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d61433cf13e739fbb538235e6272ba1bbfd24ce6a6318bec3232256d060c29b1"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8bf850a41a4ac48904a81ee24ec4f63956ac5927e17901e4d490fb99660d13de"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 不用音频配视频也能做音视频问答：代理文本自玩训练解读

> 英文题目：*[MSP: Modality Self-Play for Training Multimodal LLMs Without Paired Cross-Modal Data](https://arxiv.org/abs/2610.20965v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-paper-digest-blog/papers/?concept=task.audio-captioning)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Robert Moseley：University of California,；Riverside
- Md Kaykobad Reza：University of California,；Riverside
- Ameya Patil：Amazon
- Edward Ayrapetian：Amazon
- Salman Asif：University of California,；Riverside

## 📌 核心摘要

多模态大语言模型要联合回答音频与视觉问题，常规做法需要同一问答样本同时包含真实音频与真实视觉监督，这类成对数据收集成本高且随模态组合快速增长。本文提出模态自博弈（Modality Self-Play，MSP），训练中每个样本只保留一个真实非文本模态作为锚，从不观察真实音频视觉成对数据。第一阶段用音频文本与视觉文本对独立训练各模态投影器并对齐到Qwen3-8B语言空间，冻结对比编码器以保持表示一致，冻结后的第一阶段模型再为缺失模态生成一句代理文本。代理文本经对比编码器文本塔编码，再经按模态拟合后冻结的线性桥映射到缺失模态表示空间，与真实锚特征以单 token 形式同置于同一提示，语言主干用问答损失学习组合推理，推理时直接输入两个真实模态。与依赖成对监督或留空缺失槽的已有做法不同，MSP 在训练中显式构造组合信号。在 MUSIC-AVQA 测试集零样本准确率下，完整 MSP 组合为 65.65，高于仅第一阶段投影器的 45.75。结论适用于有模态文本对与对比编码器的音频视觉问答等场景，代理噪声大或编码器覆盖不足时会失效。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的输入输出是什么

这篇论文研究音频加视觉问答。输入是一道文字问题外加一段音频和一张图像或视频帧，输出是问题的文字答案，评价用测试集上的准确率。难点在于训练时拿不到同一来源的真实音频配视觉，大量已有数据只有图像配文字或音频配文字。作者把配对跨模态数据定义为来自同一底层来源的两个以上非文本模态，例如同一段录像的声音和画面。

MSP 的目标就是在训练样本永远只含一个真实非文本模态的条件下，让模型在测试时能同时读两个真实模态并联合推理。论文反复强调三项仍要依赖的东西：模态文本对、预训练好的对比编码器、以及用模态分布数据校准的桥。也就是说省掉的是真实音频视觉配对，不是省掉一切配对，也不是不用预训练先验。读者要先建立这个边界，后面谈零样本才不会误解为完全无监督。

论文用音频和视觉两个模态做完整验证，文本问题始终存在，评测覆盖 AVQA、MUSIC-AVQA 和 OmniBench 3 套需要联合推理的问答。

### 已有路线为什么仍然需要配对

论文把相关工作分成 3 类。第一类是用显式配对多模态数据训练的多模态大语言模型，从早期的 BLIP-2、LLaVA 到 NExT-GPT、AnyGPT、Unified-IO 2，以及 Qwen2.5-Omni、Baichuan-Omni-1.5 等全模态系统，做法都是把语言指令与一个或多个真实模态对齐，效果好但依赖对齐数据的采集和扩展，模态越多组合成本越高。第二类是把各自独立观察的模态对齐到共享语言空间，例如 ImageBind-LLM、PandaGPT、X-InstructBLIP、OneLLM、ChatBridge，用预训练编码器加投影器或适配器连接语言模型，减少了直接模态到模态配对，但论文指出它们在推理时做跨模态组合仍吃力，因为训练时没有显式地学联合推理。

第 3 类是用文本做代理的表示桥接，例如 DeCap、CapDec 只用文本嵌入训练解码器，推理时把视觉映射到文本空间做零样本描述，证明了文本可做中介，但主要做单模态生成，没有验证能否学到多模态组合。MSP 与第 3 类的区别在于代理是在训练时、且以锚为条件生成的，用来作为缺失模态的语义替身参与组合训练，而不是在推理时替代缺失模态。比较时要注意输入、监督和运行阶段是否相同，不能把只做单模态生成的代理方法与做联合问答的 MSP 直接比高低。

### 为什么说配对成本是瓶颈

论文的动机是规模化矛盾。一方面大模型加多模态覆盖确实带来感知和推理提升，另一方面高质量对齐数据贵、难覆盖各种模态组合、且多为特定领域。当模型要接入更多模态时，需要的全面配对数据量会组合式增长。相比之下，开源仓库里双模态数据很多，图像配文字、音频配文字都含有丰富语义。于是问题变成能否只用这些双模态数据加结构化的组合训练，让组合能力自然出现。

作者的中心假设是代理文本加对比训练好的预训练编码器能提供足够的语义结构。代理文本并不复制缺失模态，只是提供一个共享语义空间让表示对齐。论文明确说不是假设没有跨模态先验，而是去掉训练时的真实配对非文本监督。这个限定很重要，复现和引用时都要保留，否则会夸大成从零学到跨模态。

### 三步流程如何保证没有双真模态

整体流程分三步。第一步用模态文本对为每个模态独立训练一个投影器。第二步冻结第一阶段模型，给它一个真实锚模态，让它为看不见的另一模态生成一句短的代理描述，全部离线生成 1 次并缓存，训练时不再在线生成。第三步每个训练样本放一个真实特征加一个带桥的代理特征，交替使用音频锚加视觉代理和视觉锚加音频代理，学组合问答。

关键的数据规则是单真锚规则：如果某原始样本同时有视觉和音频，也只选其中一端做一个样本，不会一遍用它的视觉、另一遍再用它的音频。推理时不再生成代理，两个槽位都放真实编码加投影后的特征。下面这张训练管线图把三步并排展示，是理解数据流最直接的材料。

**锚模态 × 代理文本：** 锚模态指训练样本中真实观察到的那一个非文本模态，例如一张图像或一段音频；代理文本指用第一阶段模型看着锚模态为缺失的另一模态写出的一句描述。二者搭配后，每个训练样本都是一个真加一个想象，语言模型在问答监督下学会同时读两个槽位，从而在推理时能把两个真模态放在一起用。

读图时先确认每一列的输入构成，再看可训练与冻结标记如何变化，有助于理解代价主要花在第二阶段的组合训练而非代理在线生成，这段导读帮助你定位三列的输入与锁标记。

> **看图路径：** 1. 先看三列标题：单模态描述、自玩想象、组合训练，确认没有一列同时放入两个真实非文本模态；2. 对照锁与火焰图标：编码器冻结、投影器可训练，第二列语言模型冻结只负责写代理；3. 看第三列右侧虚线框：想象路径多了一个桥，真路径没有桥，但最后都进入相同槽位

[![原论文 Figure 1：MSP training pipeline. (1) Phase 1 trains one projector per modality using modality–text pairs only.](https://arxiv.org/html/2610.20965v1/msp_pipeline.png)](https://arxiv.org/html/2610.20965v1/msp_pipeline.png)

*论文图 1。原论文 Figure 1:：“MSP training pipeline. (1) Phase 1 trains one projector per modality using modality–text pairs only.”。*

图中第一列左右两路分别是图像到文本和音频到文本，各自经过冻结编码器和可训练投影器进入可训练的语言模型，底部注明无配对跨模态数据。第二列是自玩，视觉输入配猜声音的提示，音频输入配猜画面的提示，语言模型冻结，只输出生成的音频描述和图像描述。第三列是组合训练，左侧真实图像走视觉编码器加视觉投影器到视觉槽，右侧想象文本走文本编码器加桥加音频投影器到音频槽，最后一起进入可训练的语言模型，底部注明从不同时放两个真实非文本模态。例子用马的图像和马嘶加蹄声的描述贯穿三列，便于对照同一语义如何在真与想象之间切换。

### 编码器投影器桥和语言模型各做什么

模型有 4 类组件。模态编码器用冻结的对比编码器，音频用 LAION-CLAP，视觉用 MetaCLIP ViT-B/16，每个输入压缩成一个 512 维特征向量，视频是均匀抽 4 帧各自编码再平均池化成一个 512 维令牌。冻结是为了让真实与代理表示处在一致的嵌入空间，使桥学到的变换有意义。每个模态各有一个轻量可训练多层感知机投影器，把 512 维映射到语言模型隐藏维度，论文用的 Qwen3-8B 对应维度是 4096，每个模态只用一个令牌表示，保证真实与代理格式相同。

语言模型主干是 Qwen3-8B，输入提示里有音频和视觉专用占位符，前向时替换为投影后的模态嵌入，做法沿用常见多模态大语言模型设计。主干其余参数冻结，只在注意力与多层感知机层加 LoRA 适配器参与训练。文本到模态桥是只用在代理路径的线性映射，解决文本塔与模态塔虽相关但有偏移的问题，若直接把文本塔特征送进在模态塔特征上训练的投影器会有分布失配。

**对比编码器 × 文本塔 × 模态塔：** 对比编码器指 CLIP 或 CLAP 这类用模态文本对训练过的双塔编码器，文本塔读句子，模态塔读图像或音频。MSP 冻结它们以保留已学到的跨模态结构，真实输入走模态塔，代理文本走对应文本塔，再用桥把文本塔向量搬到模态塔所在的分布里，使投影器看到的格式一致。

单个样本的前向计算先做特征提取再做替换，真实路径的公式如下，符号含义是输入、编码器输出与投影后嵌入的关系。

\[h_{m}=P_{m}(E_{m}(x_{m})).\]

其中 x 是某模态输入，E 是冻结编码器，P 是该模态投影器，h 是送入语言模型的嵌入。代理路径多两步：先用对应文本塔编码代理句，再用桥搬到模态空间，然后走同一个投影器。桥本身用岭回归拟合，公式如下，T 与 R 分别是堆叠的文本塔与模态塔嵌入，lambda 取 1.0，用 1000 组标题模态对拟合，500 训练加 500 留出，拟合 1 次后冻结。

\[W_{m}=(T^{\top}T+\lambda I)^{-1}T^{\top}R,\quad B_{m}(t)=W_{m}^{\top}t,\quad\lambda=1.0,\]

下面这张组件级结构图展示了以视觉为锚、音频为想象的完整链路，适合对照公式理解张量去向。从左到右先看输入与编码器冻结标记，再看桥菱形与投影器可训练标记，最后看令牌序列如何拼接。

**桥 B_m 文本到模态映射 × 投影器：** 桥 B_m 文本到模态映射是把文本塔向量映射到模态塔空间的线性变换，用 1000 组标题与模态配对做岭回归一次性拟合好后冻结；投影器是把 512 维模态特征映射到语言模型 4096 维的轻量多层感知机，在两个阶段都可训练。桥解决分布偏移，投影器解决维度与语义对齐，二者串联才让代理能走与真实相同的输入接口。

> **看图路径：** 1. 从左到右跟一条样本：真实图像走视觉塔，代理音频文本走文本塔加音频桥，再各走各的投影器；2. 看第 5 步令牌序列：视觉槽、音频槽与问题词按固定顺序拼接，实线与虚线箭头在此汇合；3. 看底部图例颜色与锁标记：蓝色为视觉、橙色为音频、灰色为文本，桥与基座权重冻结

[![原论文 Figure 2：MSP architecture, component-level view.](https://arxiv.org/html/2610.20965v1/paper_sections/figures/fixed_textfuse.png)](https://arxiv.org/html/2610.20965v1/paper_sections/figures/fixed_textfuse.png)

*论文图 2。原论文 Figure 2:：“MSP architecture, component-level view.”。*

图中从左到右共七步：输入、冻结编码器、只用于代理的桥、可训练投影器、语言模型输入的令牌序列、带 LoRA 的语言模型主干、输出。真实图像经 MetaCLIP 得到 512 维单令牌，再经视觉投影器到视觉槽。音频代理文本经 CLAP 文本塔得到 512 维单令牌，再经岭回归音频桥和音频投影器到音频槽。问题词与起始符与两个模态槽拼接后进入 Transformer，基座权重冻结，LoRA 适配器可训练，输出用交叉熵训练。图例说明实线是真实数据流，虚线是想象数据流，菱形是桥，蓝色是视觉，橙色是音频，灰色是文本。

### 两阶段各训练什么谁冻结谁更新

第一阶段对音频和视觉投影器独立训练，用标准模态描述数据。每批只含一个模态的真实特征，音频批与视觉批交替，提示里只有一个专用占位符加文字指令，编码器冻结只做特征提取，投影器与语言模型的 LoRA 适配器参与训练。目标是对回答令牌做标准下一词预测，提示与占位符不计入损失，公式如下，q 是文本提示，R 是回答令牌集合，h 是该模态投影后嵌入。

\[\mathcal{L}_{\mathrm{P1}}=-\sum_{j\in\mathcal{R}}\log p_{\theta}(y_{j}\mid y_{\lt j},q,h_{m}),\]

优化细节是 AdamW 加 bfloat16 混合精度，峰值学习率 5 乘 10 的负 5 次方，余弦衰减，每阶段一轮，种子 42。前 2000 步冻结语言模型只更新投影器做热身，之后解冻 LoRA。有效批量 16，r 为 128 时微批 2 累积 8，r 为 256 或 512 时微批 1 累积 16，在单卡 H100 上用 DeepSpeed ZeRO-2 运行。第一阶段 checkpoint 有两个用途：作为第二阶段的初始化，以及作为生成自玩代理的冻结生成器。第二阶段从第一阶段继续训练，编码器与桥冻结，只训练投影器与共享 LoRA，目标形式与上式相同，只是条件同时包含真实锚与代理特征。

训练时还用了模态丢弃，使缺失模态不被当成畸形输入。代理生成用与对比编码器原生风格对齐的简洁模板，音频代理面向 AudioCaps 风格，视觉代理面向 COCO 风格，并加否定词约束防止泄露源模态词汇，例如视觉代理禁止出现声音、听、响等词。

**第一阶段 × 第二阶段：** 第一阶段只用模态文本对独立训练每个模态的投影器，学会单模态看图说话或听音说话；第二阶段冻结第一阶段模型来批量生成并缓存代理，再用一个真加一个带桥代理做组合问答训练。第一阶段提供生成器与初始化，第二阶段提供同时看两个槽位的组合信号，分工不同但共用同一套编码器加投影器加语言模型结构。

**零样本组合 × 单真锚规则：** 零样本组合指训练时从未见过同一来源的真实音频加视觉配对，测试时却要联合两者回答问题；单真锚规则是为保证这一点而做的数据处理，即便原始视频同时有画面和声音，也只取其中一端做一个样本，另一端空出来用代理补。规则是因，零样本组合是训练后要验证的果。

第二阶段数据源方面，音频锚来自 Clotho-AQA、AudioCaps、WavCaps 以及 MSRVTT-QA 和 MSVD-QA 训练视频的音轨，视觉锚来自 VQAv2、LLaVA-665K 以及 MSRVTT-QA 和 MSVD-QA 的帧。论文强调组合训练时从未同时观察配对的音频视觉文本三元组，交替使用两种锚方向来鼓励代理介导的组合。

### 在什么数据和条件下评测

评测用 3 套需要联合音频视觉推理的问答。AVQA 与 MUSIC-AVQA 侧重音视频问答，OmniBench 扩展到音视频文本推理。论文所说的零样本指不为这些基准专门微调，即不用这些基准的训练集提分。实现上用 Qwen3-8B 加 LoRA，秩取 128、256、512 三档，投影器为多层感知机并全量可训练，编码器冻结，每模态池化为单 512 维令牌再投影。桥在第二阶段开始前拟合 1 次后冻结。

附录还报告了桥变体比较，线性岭桥在留出残差上优于恒等、均值平移与残差多层感知机，之前联合训练的桥变体在问答损失下塌缩向恒等，因此采用离线拟合再冻结。编码器选择也做了铺垫，比较了 COCO 图像与标题的平均余弦，MetaCLIP B/16 为 0.407，高于 OpenAI CLIP、DFN2B 与 SigLIP 系列，最终选用 MetaCLIP 做视觉。需要提醒的是余弦只是选型参考之一，Sigmoid 损失的模型天然余弦偏低，不能只看该数就断定优劣。问答类型分解显示单令牌模型没有塌缩，AVQA 的 Come From 声音定位 90.9、Where 空间 80.3，MUSIC-AVQA 计数 72.6、位置 57.2，均为 r 为 512 checkpoint 重算。

### 三套基准上与可用配对模型比得如何

论文在 3 个基准上都报告了音频视觉条件下的准确率，指标方向都是越高越好，比较对象主要是允许用配对数据但未针对这些基准微调的模型。先看 MUSIC-AVQA 测试划分，下表选了代表性基线与 MSP 三档秩的成绩，MSP 随秩增大而提升，r 为 512 时最高。

该表比较的问题是在允许用配对数据但不针对本基准微调的条件下，各多模态模型的零样本准确率是否仍低于不用真实配对训练的 MSP，公平条件是同为测试划分且都不用本基准训练集提分，指标为准确率。

| Method | Parameters | Performance |
| --- | --- | --- |
| Qwen2.5-VL (Bai et al., 2025) | 7B | 47.75 |
| GPT-4o (Hurst et al., 2024) | - | 50.08 |
| MSP (LoRA r = 256) | 8B | 64.17 |
| MSP (LoRA r = 512) | 8B | 65.65 |

表中 MSP 在 r 为 128、256、512 时分别为 60.24、64.17、65.65，超过 OneLLM 的 47.60 约 18.05 个百分点，也超过 GPT-4o 的 50.08。论文强调 OneLLM 只用模态文本对，而 MSP 多用了代理文本，从而在推理时能处理配对音视频输入。限制是基线参数量与训练数据并不一致，GPT-4o 参数未知且更大，不能解读为同规模同数据下的架构胜利。再看 AVQA 测试划分，下表同时包含在 AVQA 训练集上训练过的专用模型与零样本多模态模型。

该表比较的问题是 MSP 在不看 AVQA 训练集时能否接近或超过看过该训练集的专用模型，以及能否拉开与零样本多模态基线的差距，指标仍为准确率，方向越高越好。

| Method | Parameters | Performance |
| --- | --- | --- |
| HCRN (Le et al., 2020) | - | 82.50 |
| ImageBind-LLM (Han et al., 2023) | 7B | 55.00 |
| MSP (LoRA r = 128) | 8B | 85.70 |
| MSP (LoRA r = 256) | 8B | 85.73 |

表中 MSP 三档分别为 85.70、85.73、85.58，基本饱和，超过 ImageBind-LLM 的 55.00 与 X-InstructBLIP 7B 的 44.29 约 30.73 至 41.44 个百分点，也高于 PSAC、HGA、HCRN 等在配对 AVQA 训练集上训练的方法中最高的 82.50。但要注意后者是不同训练条件下的比较，专用模型用了域内配对监督仍低于 MSP，这支持组合信号有效，但不能说明 MSP 在同等域内配对数据下一定更优。OmniBench 上 MSP 在 r 为 256 时为 43.26，超过多数基线，与 Baichuan-Omni-1.5 的 42.90 和 Gemini-1.5-Pro 的 42.91 接近，但低于 Qwen2.5-Omni 的 56.13。论文称 MSP 是该比较中唯一不用真实配对跨模态数据训练的方法，保持竞争力即验证了代理组合的有效性，未胜出的 Qwen2.5-Omni 差距较大，说明仍有上限。

### 推理时换成代理或错内容会怎样

论文还做了推理时替换与令牌匹配控制，测试划分 AVQA 样本数为 16910，MUSIC-AVQA 为 9185。双真时 AVQA 为 85.58、MUSIC-AVQA 为 65.65。任一端换成想象代理都会下降，双想象下降更多，AVQA 双想象为 75.75，MUSIC-AVQA 双想象为 41.33，六处下降都显著。令牌匹配控制固定一端为真，另一槽分别放学到的空向量、零向量、矩匹配高斯、打乱的真实特征，结果只有正确内容能恢复满分，拿错的真实特征反而代价最大。这支持模型确实在读槽内内容，而非只靠槽位存在或注意力掩码。

代理质量敏感性也一致，视觉为真时音频用真实为 85.58，用场景 grounded 想象为 81.19，用只看问题生成的代理为 76.15。例子中问题问视频里什么在开，视觉是蓝色车经过红色卡车，问题派生代理却写成引擎咆哮加玻璃碎裂，信息冲突导致效果差。附录的小规模对照用文本 Qwen3 4B 在 AVQA 上比较 5 种范式，配对上界 87.45，MSP 为 86.00，交错单模态 81.46，纯视觉 80.72，纯音频 75.35。差距最大的是 MSP 与交错单模态之间，说明有代理比空着槽位好。但该对照是小模型，不能直接当成 headline 大模型的配对上界。

### 代理和桥各自带来多少提升

为分离代理与桥的作用，论文在 r 为 512 上比较三行：无代理无桥、仅有代理无桥、有代理有桥。无代理无桥指非锚模态完全不给令牌，不是置零也不是学到的空向量。无桥指同样的代理不经文本到模态映射直接注入。下表是原文完整的消融矩阵，同时给出 AVQA 与 MUSIC-AVQA 在音频、视频、音视频 3 种输入下的准确率，列数较多，适合看组合条件的增益。

该表比较的问题是去掉代理或桥后组合问答损失多少，公平条件是同秩同测试划分，指标为准确率，音视频列是核心，因为它需要同时读两个槽位。

| Method | AVQA | AVQA | AVQA | MUSIC-AVQA | MUSIC-AVQA | MUSIC-AVQA |
| --- | --- | --- | --- | --- | --- | --- |
| Method | Audio | Video | Audio-Video | Audio | Video | Audio-Video |
| Without proxy and bridge | 59.55 | 63.91 | 70.21 | 44.03 | 44.64 | 45.75 |
| With proxy without bridge | 78.53 | 79.50 | 82.91 | 45.85 | 54.49 | 58.60 |
| With proxy and bridge | 80.24 | 81.33 | 85.58 | 57.26 | 57.11 | 65.65 |

音视频列上，AVQA 从 70.21 到 82.91 再到 85.58，代理带来 12.70 个百分点，桥再加 2.67 个百分点。MUSIC-AVQA 从 45.75 到 58.60 再到 65.65，代理带来 12.85 个百分点，桥再加 7.05 个百分点。说明代理提供主要组合学习信号，桥进一步改善对齐。附录用余弦验证了这一点，下表比较桥前、桥后、投影后的代理与真实特征相似度。

该表比较的问题是桥与投影器是否逐步把代理搬到真实模态附近，测量的是特征余弦相似度，越高表示越接近，条件是同数据集同模态。

| Dataset | Modality | Pre-bridge | Pre-projector | Post-projector |
| --- | --- | --- | --- | --- |
| Dataset | Modality | (encoder only) | (encoder+bridge) | (encoder+bridge+projector) |
| AVQA | Vision | 0.307 | 0.786 (+0.479) | 0.889 (+0.582) |
| AVQA | Audio | 0.218 | 0.548 (+0.330) | 0.697 (+0.479) |
| MUSIC-AVQA | Vision | 0.333 | 0.823 (+0.490) | 0.893 (+0.560) |
| MUSIC-AVQA | Audio | 0.422 | 0.752 (+0.330) | 0.821 (+0.399) |

AVQA 视觉从 0.307 到 0.786 再到 0.889，音频从 0.218 到 0.548 再到 0.697。MUSIC-AVQA 视觉从 0.333 到 0.823 再到 0.893，音频从 0.422 到 0.752 再到 0.821。桥带来约 1.8 至 2.6 倍提升，投影器再有小幅增益。但论文用探针与输出层分析指出残差可分性仍在，逻辑回归在输入、中、末层区分真实与带桥代理的准确率音频为 0.953、0.970、0.963，视觉接近 1.0，说明隐藏状态并未变得不可区分。配对残差与输出层词表余弦显示末层词表余弦回升并高于残差余弦，音频差 0.166，视觉差 0.124，解释是模型学会把它们映射到相似的输出预测，而非在隐藏空间完全重合。另一组分离显示第二阶段是在问答监督之外带来组合增益，r 为 512 时 AVQA 从第一阶段仅 70.21 加问答监督到 77.46 再加完整 MSP 到 85.58，MUSIC-AVQA 从 45.75 到 55.18 再到 65.65，组合贡献分别为 8.12 与 10.47 个百分点。

### 哪些条件不满足结论就不成立

结论成立依赖 4 个前提。第一，仍有模态文本对、对比编码器与桥校准，去掉任一都不是论文验证的范围。第二，代理是锚支撑的，要求与锚语义一致而非字面复刻 held-out 真值，噪声或弱对齐代理会拖累性能，论文用打乱与错内容控制证明了内容正确的重要性。第三，编码器覆盖与偏置会被继承，对比编码器没见过的分布桥也难以搬运。第四，训练推理存在差距，训练用代理、推理用双真，论文用输出层对齐解释为何可行，但残差仍可分，说明不是完全等价替换。

未来方向包括更强的生成或检索式代理、缩小训练推理差距、无代理对齐机制、扩展到更多模态与复杂推理、更大规模验证，以及更深入的理论解释。伦理方面，跨模态合成能力可能被用于深度伪造或编造内容，论文主张用合规来源数据、访问控制与溯源技术缓解。复现时若发现换了编码器或提示风格后提升消失，应先检查桥后余弦与代理质量，而不是直接否定组合训练本身。

### 复现第一步要准备什么

复现先按单真锚规则整理数据，任何同时含视觉与音频的原始样本只取一端做一个样本，另一端留给代理，音频锚与视觉锚来源按论文第 4.1 节列出，视频每样本均匀抽 4 帧编码后平均池化。然后跑第一阶段得到投影器初始化与冻结生成器，再离线批量生成并缓存代理，模板用编码器原生的简洁风格并加否定词约束。接着用 1000 组标题模态对拟合线性岭桥，lambda 为 1.0，500 训练 500 留出，拟合 1 次后冻结。第二阶段交替喂音频锚加视觉代理与视觉锚加音频代理，只训练投影器与 LoRA。

评测时用双真输入，不生成代理，报告 AVQA、MUSIC-AVQA、OmniBench 的准确率，并同时报告音频、视频、音视频三列以便与消融对照。需要补的验证是论文未给出的训练与推理开销、延迟、以及在更多模态组合上的表现，超参数方面峰值学习率、批量、秩与热身步数都要保留，因为它们影响饱和点判断。

### 什么时候值得尝试还缺哪项验证

当手头只有图像文本和音频文本、拿不到同一来源的音频视觉配对，又必须做音视频联合问答时，MSP 值得尝试。它的代价是多 1 次离线代理生成与 1 次桥拟合，以及第二阶段组合训练，好处是不用采集配对数据就能让语言模型学会同时读两个槽位。判断是否学到组合，不能只看单模态列，要看音视频列相对无代理基线的提升，以及换错内容是否显著下降。

还缺的验证包括与同规模同数据配对上界的直接比较、代理质量退化时的失败边界、以及在音乐之外的开放域与更多模态上的泛化。论文没有公开代码模型或数据的可用性声明，来源清单显示本次未发现可验证的作者资源，因此应按未确认处理，复现需自行实现。总体上，证据支持代理文本加桥是有效的训练时脚手架，但不支持代理与真实完全等价，也不支持省掉对比先验后仍能组合。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.20965v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
