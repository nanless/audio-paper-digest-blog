---
title: "DualAffect: Dual-Path Paralinguistic Integration for Generative Audiovisual Emotion Understanding"
date: 2026-10-15
draft: false
tags: [语音情感识别, 音视频问答, 多模态学习, LoRA, 音视频]
categories: [论文速递]
description: "论文针对声音表情与画面不一致时生成式回答容易跟随视觉的问题，用共享 WavLM 编码上的视觉查询融合与直接时间积分两路组织输入同一解码器，在 CA-MER 平均指标 67.89 与 EmotionTalk 测试集 62.88% 等条件下验证了直接声学通路的作用，代价是增加 16 个声学 token 与混合任务适配的约束设计。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.18073"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "双路径如何把声音表情送进视听问答的生成器"
paper_digest_original_title: "DualAffect: Dual-Path Paralinguistic Integration for Generative Audiovisual Emotion Understanding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.18073v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.18073v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.18073v1.pdf"
paper_digest_primary_task: "语音情感识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对声音表情与画面不一致时生成式回答容易跟随视觉的问题，用共享 WavLM 编码上的视觉查询融合与直接时间积分两路组织输入同一解码器，在 CA-MER 平均指标 67.89 与 EmotionTalk 测试集 62.88% 等条件下验证了直接声学通路的作用，代价是增加 16 个声学 token 与混合任务适配的约束设计。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yibo Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jisheng Dang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bimei Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junhong Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiongpei Hou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jingwen Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenjun Ma"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hong Peng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bin Hu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qi Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tat-Seng Chua"}]
paper_digest_abstract_sha256: "787f2f5bbfb3f2f955ccf5675032f342d8d90c4c3cf37b5753b7f2eab167b6aa"
paper_digest_sidecars: {"citation.bib":{"sha256":"74d6dbbc79b99bfba5794344c3ea0759b8f9088e434683d6837789e9707f72e5","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18073/citation.bib"},"citation.json":{"sha256":"5c46324324d6a5aec44434bd7cfb552c745bf30eda7ac0dca8070c3e03a931e6","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18073/citation.json"},"citation.ris":{"sha256":"cb86b022e3c8cb01baf2b9a6931620d89a3367c0fa0be90cedd8b4a2fb9b61d5","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18073/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"6bad3b3b139782438214e111fb6d51e41f0fa4799e6287dcac20e9015a21e25e","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18073/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f3e1bb3a767323817548decdd1f616e1e549089afa8dac9e66eb0b0bd1dc8fbd"
paper_digest_api_reader_plan_sha256: "e8f063dffa9a140b87d529ab09f099f8dabb1dc046fe1388487fcb42846e85a1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a9fec2ba53f1c6d6093a2f20b482d81af160bd1000347569b64ff59f3fd35795"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "e1584901af9d6dbbdcc3bb2481dccbee4097f0db4fff64ace8e58e09ce39b4d3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "94c2be5210034cb82cc875c0711646c98ae136ef8382c0a27434661b22dd0e8c"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b5559971ce98a9ce89bd4f7ec972e0abd0d32d179eae04ef4eb2e43a214696eb"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 双路径如何把声音表情送进视听问答的生成器

> 英文题目：*[DualAffect: Dual-Path Paralinguistic Integration for Generative Audiovisual Emotion Understanding](https://arxiv.org/abs/2610.18073v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音情感识别](/audio-paper-digest-blog/papers/?concept=task.emotion-recognition)；[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yibo Wang：机构信息未在 arXiv HTML 中可靠披露
- Jisheng Dang：机构信息未在 arXiv HTML 中可靠披露
- Bimei Wang：机构信息未在 arXiv HTML 中可靠披露
- Junhong Liu：机构信息未在 arXiv HTML 中可靠披露
- Jiongpei Hou：机构信息未在 arXiv HTML 中可靠披露
- Jingwen Zhao：机构信息未在 arXiv HTML 中可靠披露
- Wenjun Ma：机构信息未在 arXiv HTML 中可靠披露
- Hong Peng：机构信息未在 arXiv HTML 中可靠披露
- Bin Hu：机构信息未在 arXiv HTML 中可靠披露
- Qi Tian：机构信息未在 arXiv HTML 中可靠披露
- Tat-Seng Chua：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

生成式视听情感理解要从视频、音频、文本说明和可选转写文本生成答案，难点是当嗓音表达与面部外观不一致时，副语言线索很难进入生成结果，副语言在这里指语调、节奏和音质等词以外的嗓音表达线索。DualAffect先用视觉、Whisper与WavLM编码器得到视觉token与同一段声学序列，融合路以视觉token作查询关联声学序列，输出按视觉上下文组织的视听联合表征。直接路把拼接后的有效声学序列按时间切成16段，经独立投影层映射为有序token以保留按声学时间排列的证据，再与融合表征一起拼入同一个语言解码器的输入做自回归生成。混合任务适配冻结视觉、Whisper与WavLM编码器和融合模块，只训练直接投影层与解码器的低秩适配参数，并对情感复述和通用问答采用不同位置的输出保持约束。在1483个CA-MER样本的固定标签评测中，DualAffect的平均指标为67.89，超过表中MoSEAR的61.14。固定模型参数且融合输入不变时，把16个直接token置零使EmotionTalk验证集准确率从62.42%降至52.67%，下降9.75个百分点，说明声学证据的组织方式影响生成。结论适用于有完整音频和转写条件的对话与视听问答，对缺失模态、长时漂移和开放词汇生成的表现尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/YiboWang2002/DualAffect> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的视听情感生成问题是什么

这篇论文处理的是视听输入下的情感理解与问答生成。输入是一段视频、对应的一段完整音频、可选的文字转写以及任务指令，输出是由同一个语言解码器逐词生成的答案，可以是情感标签、简短情感回答或选择题选项。必须保留的信息包括说话内容是什么、说话方式如何，以及画面与声音各自支持什么情感判断。

难点在于副语言线索，也就是语调、节奏、音质等不写在文字里的声音表情，有时与面部表情或话语字面意思不一致。当总体情感跟随音频却偏离视觉时，如果声音证据只经过以视觉为查询的融合，就可能被视觉上下文稀释，导致生成的回答偏向画面。论文把问题框定为如何同时保留两种索引结构，一种按视觉内容组织声音，另一种按声音自身时间组织声音，并让解码器同时看到这两种组织的输入。评价因此既看情感识别，也看通用视听问答是否仍能工作，以及去掉直接声学输入后答案是否变化。

### 已有路线在编码器、融合与证据使用上做了什么

论文把相关工作分成三块。第一块是多模态情感理解，从判别式的图表示、模态内与模态间 Transformer、对话依赖建模，到生成式的情感指令微调，例如 Emotion-LLaMA 做识别与推理联合学习，AffectGPT 做开放词汇描述，Omni-Emotion 给视频语言模型补面部与声学感知。论文认为这些工作强调了监督与专用表示，但较少检验表示以何种组织方式进入生成。

第二块是副语言表示与语言模型对接，例如 SALMONN 用 Whisper 加 BEATs 经窗口级 Q-Former 映射，WavLLM 结合 Whisper 与 WavLM，EAA 保留原始特征与双向声学语义交互特征。与之相比，本文的交互发生在视觉查询与声学特征之间，而不是两路音频表示之间，另一路则是对同一 WavLM 序列的直接时间积分。第三块是证据使用诊断，例如 LISTEN 分离词汇与声学线索发现词汇依赖，VoxParadox 区分内部可探知的副语言信息与回答中实际使用的信息，MoSEAR 用模态专家与注意力重分配处理情感冲突。本文沿用干预思路，但干预对象是训练好模型推理时的直接声学 token，而不是训练目标或注意力头，比较条件是参数、融合输出与序列长度都不变。

### 输入输出与模态一致性如何定义

形式上，给定视频 V、音频 A、指令 Q 和可能为空的转写 T，模型生成长度为 L 的答案 Y。训练时还有目标答案，学习的是条件语言建模。评测时把情感判断按标签关系分组，这是理解结论的关键。CA-MER 有 1483 个可用样本，其中音频一致 489 例指总体标签与音频一致但与视觉不同，视频一致 498 例指总体与视觉一致但与音频不同，三者一致 496 例指总体、音频、视觉三者一致。EmotionTalk 用官方划分的 15413 训练、1908 验证、1929 测试，做七分类总体情感。

Daily-Omni 用全部 1197 道选择题，按事件对齐、比较、上下文、排序、推理等题型以及 30 秒与 60 秒视频分组统计。指标方向都是越高越好，准确率是答对比例，平衡准确率是按类别求召回再平均，无效回答计为错误。

下面这张图展示了一段约 9.72 秒的通话片段如何被标注为视觉与音频不一致，以及去掉直接声学输入后答案怎样从总体标签滑向视觉标签，适合对照波形示意与文字内容一起看。

> **看图路径：** 1. 先看顶部胶片帧的时间轴与人物表情，再看下方波形示意与四段对白；2. 对照中间标注栏的视觉 neutral 与音频 worried 及总体 worried；3. 比较底部去掉直接声学通路与保留完整模型的输出词差异

[![原论文 Fig. 1：Direct acoustic access in an audio-aligned example.](https://arxiv.org/html/2610.18073v1/fig1.png)](https://arxiv.org/html/2610.18073v1/fig1.png)

*论文图 1。原论文 Fig. 1:：“Direct acoustic access in an audio-aligned example.”。*

图中上方是从 0.00 秒到 9.72 秒的 6 帧胶片，人物手持电话，表情变化不大。中间是一条起伏的韵律示意曲线与 4 段英文对白翻译，其中 Is it that urgent 与 Okay 两段被标黄。标注栏写明视觉为 neutral，音频为 worried，总体为 worried。底部左侧去掉直接声学通路后输出 neutral 并判错，右侧完整 DualAffect 输出 worried 并判对。图注明确曲线只是韵律的示意，不是实测基频，因此不能从波峰读出具体声学参数，只能说明论文想强调声音时间变化与文字内容分离。这个例子限定在音频一致条件下成立，不能推广为所有视频一致样本都有同样大的干预效果。

### 双路径总体流程是怎样的

DualAffect 的骨干是 InternVideo2.5 视频语言模型，声学侧用 Whisper-medium 与 WavLM-Large，WavLM 初始化自一个情感日志模型。视频得到视觉 token Hv，音频得到 Whisper 序列 Hw 与 WavLM 序列 Hp。保留的融合通路把 Hw 与 Hp 按视觉查询做交叉注意力，得到视听上下文 Zav。新增的直接通路把同一份 Hp 按时间压缩为 16 个有序 token Zp。指令与转写走常规文本嵌入。

Zav 占据视频嵌入位置，Zp 作为连续的按时间排列的嵌入追加，并附带简短说明标识它们是声学输入，三者与文本一起进入同一个共享语言解码器，按任务指令生成情感词、简短回答或选项。两路复用同一 WavLM 编码，但组织方式不同，一路按视觉位置索引，一路按声学时间索引。长于 30 秒的音频按时间分块编码再按绝对时间拼接，推理与训练都用完整音频重采样到 16 kHz，情感评测采样 8 帧，Daily-Omni 采样 16 帧。

这张总览图上半是双通路如何汇入共享语言模型，下半左右分别展开视觉查询融合与直接时间积分的内部步骤，建议先走主线再看下半细节。

> **看图路径：** 1. 沿左上视频帧与左下完整音频向右追踪两条通路的汇合点；2. 注意 WavLM 分支分叉为融合的键值与直接通路的池化输入；3. 看右下生成输入中 Zav、Q 与 T、Zp 三段的拼接顺序

[![原论文 Fig. 2：Overview of DualAffect. The upper panel shows two pathways that share WavLM features and condition…](https://arxiv.org/html/2610.18073v1/DualAffect_fig2.png)](https://arxiv.org/html/2610.18073v1/DualAffect_fig2.png)

*论文图 2。原论文 Fig. 2:：“Overview of DualAffect. The upper panel shows two pathways that share WavLM features and condition one language decoder.”。*

上半可见视频帧经视觉编码器得到 Hv，完整音频分别进 Whisper 得到 Hw、进 WavLM 得到 Hp，Hv 作查询、声学作键值进入视觉条件融合得到 Zav，Hp 另走时间池化加独立投影得到 16 个 Zp，Zav、指令转写、Zp 拼接为生成输入。左下显示两路交叉注意力得到增量再经可靠性加权加回视觉残差，右下显示共享 Hp 经自适应池化、按 token 层归一化、多层感知机得到 16 乘 4096 的 Zp。雪花标记表示冻结，火焰标记表示可训练，LoRA 位于共享语言模型侧。图的价值是把共享编码与两种组织方式画清楚，数值细节仍以正文为准。

### 视觉查询融合如何把声音挂到画面上

融合通路的目标是构造按视觉排布的视听上下文。视觉 token 数为 Nv，维度为解码器嵌入维度 d。Whisper 与 WavLM 序列经各自投影器映射到 d 维度，只保留有效音频长度，WavLM 在每个时间位置做归一化。两个独立注意力模块都以视觉 token 为查询、声学 token 为键和值，算出两路音频条件下的视觉更新。随后模块把每路更新在 token 上平均再线性映射为内部证据维度 C 等于 6 的证据分数，经 softplus 转非负证据并跨两路归一化为可靠性权重，加权后的声学增量经通道缩放向量加回视觉表示，得到 Zav。残差形式保留了视觉 token 结构，声音只是作为上下文被加进来。

**视觉查询融合 × WavLM × Whisper：** 视觉查询融合指以视觉 token 为查询、以声学 token 为键和值做交叉注意力，再加回视觉表示的操作；WavLM 提供偏重副语言的声学序列，Whisper 提供另一路互补声学序列；两者搭配的意义是让同一段声音按画面位置被重新组织，得到视听联合上下文，但声音内容是否保留取决于视觉查询能问出什么。

融合计算的最终加权形式如下，程序将显示原始公式。

\[Z_{\mathrm{av}}=H_{\mathrm{v}}+\gamma\odot(\alpha_{\mathrm{w}}\Delta_{\mathrm{w}}+\alpha_{\mathrm{p}}\Delta_{\mathrm{p}}),\]

这个公式的含义是 Zav 等于 Hv 加上经缩放的加权声学增量，权重反映两路声学流的可靠性。它的代价是声学内容必须通过视觉查询来取，能被问到的才会被带入融合，问不到的时间细节可能丢失，这正是论文另设直接通路的理由。

### 直接通路如何按声音时间压缩为 16 个 token

直接通路的目标是保留粗粒度的声音时间变化，同时把输入长度固定为常数。设归一化后的有效 WavLM 序列长度为 Np，对输出位置按有效长度自适应划分窗口做平均，输出数量 K 等于 16。窗口随有效长度自适应并保持时间顺序，分块音频则先拼接完整片段的有效特征再池化，得到 16 个区间摘要，而不是一个全局平均。每个摘要经按 token 的层归一化，再经两层线性映射加 GELU 非线性，从 1024 维经 512 维隐层到 4096 维输出维度，投影器在时间位置间共享但与融合投影器独立。

**直接时间积分 × 声学时间组织 × 独立投影器：** 直接时间积分指把有效 WavLM 序列按时间分成多段做自适应平均再映射为有序 token；声学时间组织指每个 token 只对应一段时间区间、不依赖视觉；独立投影器指与融合投影器分开学习的两层映射；三者组合后解码器多了一份按声音自身时间排列的证据，与按视觉排列的融合输入互补。

池化得到区间摘要的计算如下。

\[\bar{h}_{k}=\frac{1}{e_{k}-s_{k}}\sum_{i=s_{k}}^{e_{k}-1}h_{i},\qquad\bar{H}_{\mathrm{p}}=(\bar{h}_{0},\ldots,\bar{h}_{K-1}).\]

每个摘要映射为解码器 token 的计算如下。

\[z_{k}=\operatorname{Linear}_{2}\!\left(\operatorname{GELU}\!\left(\operatorname{Linear}_{1}(\operatorname{LN}(\bar{h}_{k}))\right)\right),\]

这样得到的 Zp 是有序序列。它的好处是长度恒定、顺序对应声音先后，解码器可以直接按时间引用声音证据。代价是平均池化抹掉了区间内部的细粒度变化，16 这个数量也是固定选择，论文未报告换成其他数量会怎样。

### 混合任务适配如何同时学新情感与保住通用问答

训练不是从零训练编码器，而是从已具备视听融合与直接声学接口的模型出发做联合适配。冻结感知编码器与已有融合模块，只更新直接投影器与解码器的 LoRA 参数，LoRA 作用于联合查询键值与注意力输出投影，秩 32、缩放 64、丢弃率 0.05。优化器为 AdamW，LoRA 与投影器采用不同的学习率，权重衰减 0.01，在 8 个样本上累积梯度，20 步热身后保持恒定。数据混合包括新领域 EmotionTalk 对话情感、MER 与 MERR 情感复述、通用问答 Video-R1 数据，400 步内按规则选出第 200 步为最终模型，要求相对初始在开发集上 EmotionTalk 准确率至少提升 3 个百分点且 MER 平衡准确率至多下降 2 个百分点。

**生成损失 × 任务相关保持 × KL 散度：** 生成损失指对目标回答序列做条件语言建模的负对数似然；任务相关保持指用冻结初始模型的输出分布在选定位置上约束当前模型，差异用温度缩放的 KL 散度计算；两者搭配是新领域学新回答格式，同时在情感复述位置和通用问答位置保留原有输出行为，避免只顾新任务而冲掉已有能力。

生成监督是对目标序列的条件对数似然平均，形式如下。

\[\mathcal{L}_{\mathrm{gen}}(x)=-\frac{1}{L_{x}}\sum_{t=1}^{L_{x}}\log p_{\theta}(y_{t}^{*}\mid y_{\lt t}^{*},\mathcal{C}_{x}).\]

保持项用冻结初始模型作教师，在选定回答位置上约束学生分布，温度为 2、权重为 1，空集时为零。

\[\mathcal{L}_{\mathrm{keep}}(x)=\frac{\tau^{2}}{|\Omega_{x}|}\sum_{t\in\Omega_{x}}D_{\mathrm{KL}}\!\left(p_{0,x,t}^{(\tau)}\,\|\,p_{\theta,x,t}^{(\tau)}\right).\]

关键是保持范围随任务而定，新领域情感只用目标监督，情感复述只约束情感词位置，通用问答约束完整目标回答。这种设计把新学习、已有情感判断与通用回答放在不同输出位置上分别处理，但论文只报告了特定开发集上的选择规则，未给出换一组阈值或步数的结果。

### 数据划分、解码与基线比较条件是什么

CA-MER 用五标签受限生成，提示列出 5 个情感标签，每步只允许有效标签延续，在最长有效答案序列加二的 token 上限内结束于情感标签，另有一组无约束短回答对照。EmotionTalk 用短情感回答，Daily-Omni 用选项生成，解码均为贪心，短回答最多 256 个 token。主结果中 CA-MER 报告准确率、平衡准确率与两者均值，EmotionTalk 主结果报告官方测试集准确率并在分析中补平衡准确率、加权 F1 与宏 F1，Daily-Omni 报告总体与分题型、分时长准确率，按题数聚合。

比较时需注意条件并不完全相同，CA-MER 已发表分数多为开放词汇集合级准确率与召回，本文为固定标签生成；EmotionTalk 基线 MCTN 与 MFM 用 HuBERT-Base 等表示的帧级融合，本文为 token 生成；Daily-Omni 外部分数来自 2026 年 10 月 10 日访问的官方榜单。无效答案计为错误，因此格式依从性也会影响分数。训练目标对比共用同一初始化与前 200 步样本顺序、数据比例、学习率与随机种子，只有复述保持范围不同，开发集为固定的 512 个 EmotionTalk 与 259 个 MER 样本。

### 模态冲突下的情感判断结果如何

CA-MER 检验的是视觉与声音标签一致或冲突时的判断。下面这张原表比较的问题是在不同模态关系下固定标签生成的平均指标如何，公平条件是 DualAffect 行均为 1483 例上的固定标签生成，已发表行保留其来源定义的开放词汇指标，因此跨行比较只能参考，不能视为同解码条件下的胜负。指标方向均为越高越好。

| Method | Audio-aligned | Audio-aligned | Audio-aligned | Video-aligned | Video-aligned | Video-aligned | Consistent | Consistent | Consistent | Overall | Overall | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | Acc | Rec. | Avg | Acc | Rec. | Avg | Acc | Rec. | Avg | Acc | Rec. | Avg |
| SALMONN [27] | 53.35 | 34.19 | 43.77 | 29.37 | 22.56 | 25.97 | 47.72 | 38.53 | 43.13 | 43.48 | 31.76 | 37.62 |
| mPLUG-Owl3 [41] | 41.08 | 41.01 | 41.04 | 40.71 | 42.01 | 41.36 | 49.29 | 39.08 | 44.18 | 43.69 | 40.70 | 42.19 |
| Chat-UniVi [42] | 42.28 | 36.31 | 39.30 | 43.43 | 42.42 | 42.92 | 50.38 | 45.95 | 48.16 | 45.36 | 41.56 | 43.46 |
| VITA-1.5 [43] | 57.51 | 48.15 | 52.83 | 49.36 | 46.60 | 47.98 | 57.17 | 52.52 | 54.84 | 54.68 | 49.09 | 51.88 |
| Emotion-LLaMA [1] | 59.94 | 51.63 | 55.78 | 47.66 | 51.45 | 49.56 | 59.23 | 63.80 | 61.52 | 55.61 | 55.63 | 55.62 |
| MoSEAR [8] | 65.33 | 55.26 | 60.30 | 58.42 | 54.28 | 56.35 | 67.68 | 65.87 | 66.77 | 63.81 | 58.47 | 61.14 |
| DualAffect (Ours) | 68.30 | 63.80 | 66.05 | 55.42 | 62.83 | 59.13 | 75.81 | 78.35 | 77.08 | 66.49 | 69.30 | 67.89 |

表中 DualAffect 总体准确率 66.49、平衡准确率 69.30、平均指标 67.89，三者一致子集平均指标 77.08 最高，音频一致 66.05，视频一致 59.13 最低。与表中 MoSEAR 总体平均指标 61.14 相比数值更高，但 MoSEAR 是开放词汇集合级定义，条件不同。子集结构说明当三者一致时最易判断，当总体跟随一方而偏离另一方时更难，且跟随音频比跟随视觉的数值更高。限制是视频一致仍是短板，说明直接声学输入并未消除对视觉偏离音频样本的困难。

**CA-MER × EmotionTalk × Daily-Omni：** CA-MER 按总体标签与单模态标签是否一致分成音频一致、视频一致和三者一致三个子集，考察模态冲突下的情感判断；EmotionTalk 是中文对话视频的七分类总体情感识别，考察新领域对话情感；Daily-Omni 是六类视听选择题问答，考察同一解码器是否还保留通用视听理解；三者组合才能说明统一生成接口覆盖了冲突情感与通用问答。

定性上，图 3 左例生日邀约文本不直接表达悲伤，但模型预测 sad 并与参考一致，去掉直接 token 后变为 neutral；中例完整与干预模型分别生成 angry 与 surprise，都是合法情感词，变化的是情感选择而非格式。这些例子支持直接声学输入参与最终情感选择，但只是个例，不能替代上面的子集统计。

### 对话情感与通用视听问答能否由同一模型完成

EmotionTalk 检验七分类对话情感的生成式回答，Daily-Omni 检验同一解码器在任务指令切换为选项生成时是否还能做通用视听理解。DualAffect 在 EmotionTalk 官方测试集上准确率为 62.88%，论文同时报告平衡准确率 49.70、加权 F1 为 60.94、宏 F1 为 49.61。在完整验证集上从初始 53.46% 提升到 62.42%，提升 8.96 个百分点，无效回答从 174 降到 39，说明适配改善了词汇依从性。Daily-Omni 的比较问题是同一模型在 6 类题型与两种时长上的选择题准确率，总体按题数聚合。

| Method | Alignment | Comparison | Context | Ordering | Inference | Reasoning | 30 s | 60 s | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Unified-IO-2 L [48] | 27.31 | 22.90 | 26.42 | 27.78 | 29.87 | 29.14 | 27.67 | 27.09 | 27.40 |
| Unified-IO-2 XXL [48] | 25.63 | 31.30 | 26.42 | 25.82 | 35.06 | 29.71 | 26.74 | 30.00 | 28.24 |
| Unified-IO-2 XL [48] | 30.25 | 30.53 | 25.39 | 29.08 | 33.12 | 21.71 | 28.13 | 28.55 | 28.32 |
| VideoLLaMA2 [49] | 35.71 | 35.88 | 35.75 | 31.70 | 40.91 | 34.29 | 38.02 | 31.82 | 35.17 |
| Ola [50] | 40.34 | 61.07 | 40.41 | 43.46 | 63.64 | 69.71 | 51.47 | 49.82 | 50.71 |
| DualAffect (Ours) | 45.80 | 51.15 | 46.11 | 46.08 | 61.04 | 55.43 | 50.70 | 48.91 | 49.87 |

表中 DualAffect 总体 49.87%，答对 597 题，超过表中 VideoLLaMA2 的 35.17% 与 Unified-IO-2 系列约 27% 到 28%，接近 Ola 的 50.71%。分项上事件对齐 45.80、上下文 46.11、排序 46.08 为表中所列最高，推理类低于 Ola，30 秒视频 50.70 略高于 60 秒视频 48.91。限制是只用 16 帧与完整音频得到该结果，未报告帧数或音频截断的影响，且外部分数来自榜单快照，复现时榜单可能更新。

这组定性图左中右分别是 CA-MER、EmotionTalk 与 Daily-Omni 的例子，适合观察直接通路干预如何改变情感词，以及同一模型如何回答视听事件对齐题。

> **看图路径：** 1. 左中两例对比无直接声学通路与完整模型的情感词选择；2. 注意左例生日邀约文本与 sad 标注的错位关系；3. 右例看紫色靠垫动作与四个音频事件选项的对应

[![原论文 Fig. 3：Qualitative results on CA-MER, EmotionTalk, and Daily-Omni, from left to right.](https://arxiv.org/html/2610.18073v1/fig3.png)](https://arxiv.org/html/2610.18073v1/fig3.png)

*论文图 3。原论文 Fig. 3:：“Qualitative results on CA-MER, EmotionTalk, and Daily-Omni, from left to right.”。*

左图生日邀约的完整模型输出 sad、干预后输出 neutral，参考为 sad；中图完整输出 angry、干预输出 surprise，参考为 angry；右图小孩扔紫色靠垫进篮子时，模型正确选择靠垫撞击篮子的声音。右例说明模型能把可见动作与对应声音事件关联，但这是一道事件对齐题的个例，不能代表推理类题目的整体水平。

### 去掉直接声学 token 后答案变化多大

这组干预回答的是训练好的解码器是否在保留融合之外还使用了直接声学证据。做法是参数全部固定，把 16 个直接副语言 token 替换为零向量，输入长度、视频、转写、声学编码与融合输出都不变，因此分离的是直接 token 携带的信息。CA-MER 用固定标签生成，EmotionTalk 用完整验证集。原文报告 CA-MER 准确率从 66.49 降到 63.45，平均指标从 67.89 降到 65.23，下降 2.66 个百分点；EmotionTalk 准确率从 62.42 降到 52.67，下降 9.75 个百分点，平衡准确率下降 7.87 个百分点，宏 F1 下降 9.08 个百分点，无效回答从 39 增至 187。

这说明直接通路既影响情感选择，也影响回答是否落在任务词汇内。需要注意这是零向量干预，不是删除 token，长度不变，结论只在该干预定义下成立。

**直接声学证据 × 视听融合 × 解码器：** 直接声学证据指按时间排列的 Zp token 携带的信息；视听融合指保留视觉排布的 Zav 上下文；解码器指同一个自回归语言模型；干预实验固定参数和融合输入、只把 Zp 置零，由此检验解码器在已有融合之外是否还使用了按时间组织的声学信息。

进一步按 CA-MER 子集拆分才能看出上下文依赖。下面这张原表比较的问题是干预效果在 3 种标签关系下是否相同，条件是两组都用相同的五标签受限生成，分数为平均指标，Drop 为完整减干预。

| Subset | Samples | DualAffect (Ours) | Zeroed | Drop |
| --- | --- | --- | --- | --- |
| Audio-aligned | 489 | 66.05 | 61.42 | 4.63 |
| Video-aligned | 498 | 59.13 | 58.19 | 0.94 |
| Consistent | 496 | 77.08 | 74.43 | 2.65 |
| Overall | 1,483 | 67.89 | 65.23 | 2.66 |

音频一致从 66.05 降到 61.42，下降 4.63 个百分点；视频一致从 59.13 降到 58.19，仅下降 0.94 个百分点，两者干预效果差 3.69 个百分点；三者一致从 77.08 降到 74.43，下降 2.65 个百分点；总体下降 2.66 个百分点。最强响应恰好出现在总体跟随音频而偏离视觉时，支持了为声学证据另设直达解码器通路的动机。

三者一致也有提升，说明直接通路不只在冲突时有用。但视频一致下降很小，提示当总体跟随视觉时，当前直接声学组织对答案影响有限，这是适用边界。

### 保持范围不同的适配目标带来什么权衡

这组对比回答的是适配时保持项的范围如何影响新领域学习与已有情感能力的保留。4 个设置共享初始化与前 200 步训练序列，包括样本顺序、数据比例、学习率、热身与随机种子，新 EmotionTalk 样本的生成监督相同，只有复述保持不同，分别为初始模型、仅复述、复述全序列保持与本文的任务相关保持。评测用固定的 EmotionTalk 与 MER 开发集。下面这张原表比较的问题是在相同预算下哪种保持范围更兼顾新旧任务，指标均为百分比，越高越好。

| Setting | EmotionTalk | EmotionTalk | EmotionTalk | MER | MER | MER |
| --- | --- | --- | --- | --- | --- | --- |
| Setting | Acc | BAcc | M-F1 | Acc | BAcc | M-F1 |
| Initial | 55.66 | 43.33 | 41.90 | 64.86 | 62.94 | 61.79 |
| Replay only | 65.23 | 50.68 | 51.91 | 64.48 | 59.25 | 59.55 |
| Full-seq. | 64.45 | 47.74 | 47.90 | 64.48 | 57.87 | 58.41 |
| Ours | 62.70 | 48.01 | 47.69 | 65.25 | 62.02 | 61.32 |

任务相关保持在 EmotionTalk 开发集上准确率 62.70，比初始 55.66 提升约 7 个百分点，MER 平衡准确率 62.02，为已适配模型中最高，超过仅复述的 59.25 与全序列保持的 57.87。仅复述在新领域准确率 65.23 最高，但 MER 平衡准确率回落。全序列保持两边都不占优。这说明保持范围是有效控制量，对情感复述约束情感词位置、对通用问答约束完整回答的搭配更能保住已有任务。限制是结论只在 200 步、特定开发集与温度 2、权重 1 下得到，未报告更长训练或换开发集是否稳定，也未报告通用问答侧的直接对比数字。

### 结论在什么条件下才成立，还有哪些未验证

主结论依赖若干具体条件。CA-MER 的 67.89 是在 1483 个可用样本、五标签受限生成、贪心解码下得到，若换无约束短回答，平均指标为 64.87，低 3.02 个百分点，多 41 个正确答案的差距来自答案空间对齐，而非声学证据变化。EmotionTalk 的 62.88% 是官方测试集七分类准确率，验证集提升与无效回答减少不能直接等同于测试集行为。Daily-Omni 的 49.87% 是在 16 帧加完整音频下得到，帧数、音频分块与榜单时间都会影响可比性。

干预结论依赖零向量替换的定义，未比较删除 token、加噪或重排时间顺序等其他干预，也未测量逐层使用情况。适配结论依赖特定的开发集选择规则与 200 步预算。论文未报告推理延迟、显存占用、训练总时长与硬件预算，因此不能从准确率推断成本或实时性。模态标注本身可能有噪声，一致性分组只是按标签关系划分，不代表真实因果。把相关性说成因果、把榜单数值差异说成同条件胜负、把开发集最优说成部署可得提升，都是需要避免的误读。

### 复现第一步做什么，需要哪些关键设置

复现应先按论文的输入构造把流程跑通，而不是先调参。第一步是准备视频、完整音频、指令与转写，用 InternVideo2.5、Whisper-medium 与 WavLM-Large 抽特征，视觉 8 帧或 16 帧、音频 16 kHz、长音频分块后按时间拼接，只保留有效长度并对 WavLM 按时间位置归一化。然后实现两路输入，融合侧以视觉为查询做两路交叉注意力并按可靠性加权加回视觉残差，直接侧对有效 WavLM 做 16 段自适应平均再经层归一化与 1024 到 512 到 4096 的独立投影。

解码时把 Zav 放在视频嵌入位置，Zp 作为 16 个连续嵌入追加并标识为声学输入，指令与转写走文本嵌入，用贪心按任务生成标签、短回答或选项。适配时冻结编码器与融合模块，只训练直接投影器与 LoRA，LoRA 秩 32、缩放 64、丢弃 0.05，温度 2、权重 1，按任务选择保持位置。论文正文给出代码链接，但本次可达性未能确认，不能写成已公开可用，需要自行核对链接与权重是否可下载。常见坑是把百分点变化误写成百分比变化、把不同定义的平均指标直接对比、以及忽略无效答案计为错误对分数的影响。

### 什么时候值得尝试，还缺哪项验证

当任务中声音表情与画面经常不一致，且回答必须由生成器直接给出情感词或选项时，这种双组织值得尝试，因为它在不改动融合模块的情况下给解码器补了一份按时间排列的声音证据，尤其在总体跟随音频的样本上干预效果最大。当视频本身已能决定答案，或计算预算只允许单路输入时，增加 16 个 token 与混合适配的收益可能有限，在视频一致子集上干预仅下降 0.94 个百分点就是提醒。

复现第一步是先实现 16 段池化加独立投影与受限解码，并用零向量干预复查音频一致与视频一致的效果差是否复现。还需要补的验证包括换干预方式、换 K 值、报告延迟与显存、以及在更多对话与问答数据上检验任务相关保持的稳定性。只有在这些条件下，论文关于声学表示组织是实用设计维度的判断才站得住。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.18073v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
