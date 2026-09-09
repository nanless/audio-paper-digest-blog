---
title: "Qwen-Audio-3.0-ASR Technical Report"
date: 2026-09-10
draft: false
tags: [语音识别, 混合专家模型, 多语言, 流式处理]
categories: [论文速递]
description: "针对方言、动态实体、口语不流利和长上下文的生产转写问题，该报告用混合专家大语言模型解码器统一控制语言、热词、历史与润色，并在中英文与多语基准及工业集上给出可核对的误差率与延迟对照，其代价是依赖大规模数据管线与指令组合训练。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.07549"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "从逐字转写到可直接归档：Qwen-Audio-3.0-ASR 如何把指令、上下文与热词塞进同一遍解码"
paper_digest_original_title: "Qwen-Audio-3.0-ASR Technical Report"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.07549"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.07549.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对方言、动态实体、口语不流利和长上下文的生产转写问题，该报告用混合专家大语言模型解码器统一控制语言、热词、历史与润色，并在中英文与多语基准及工业集上给出可核对的误差率与延迟对照，其代价是依赖大规模数据管线与指令组合训练。"
paper_digest_authors: [{"affiliations":["Alibaba Token Foundry"],"name":"Chuanmeng Bian"},{"affiliations":["Alibaba Token Foundry"],"name":"Daren Chen"},{"affiliations":["Alibaba Token Foundry"],"name":"Peixin Chen"},{"affiliations":["Alibaba Token Foundry"],"name":"Zhigao Chen"},{"affiliations":["Alibaba Token Foundry"],"name":"Zhiyun Fan"},{"affiliations":["Alibaba Token Foundry"],"name":"Zhifu Gao"},{"affiliations":["Alibaba Token Foundry"],"name":"Bo Gong"},{"affiliations":["Alibaba Token Foundry"],"name":"Qing Gu"},{"affiliations":["Alibaba Token Foundry"],"name":"Jiajun He"},{"affiliations":["Alibaba Token Foundry"],"name":"Yawei Hu"},{"affiliations":["Alibaba Token Foundry"],"name":"Yunjie Ji"},{"affiliations":["Alibaba Token Foundry"],"name":"Jingbei Li"},{"affiliations":["Alibaba Token Foundry"],"name":"Xiangang Li"},{"affiliations":["Alibaba Token Foundry"],"name":"Xu Li"},{"affiliations":["Alibaba Token Foundry"],"name":"Zengxi Li"},{"affiliations":["Alibaba Token Foundry"],"name":"Zheng Li"},{"affiliations":["Alibaba Token Foundry"],"name":"Chengdong Liang"},{"affiliations":["Alibaba Token Foundry"],"name":"Baiji Liu"},{"affiliations":["Alibaba Token Foundry"],"name":"Ying Liu"},{"affiliations":["Alibaba Token Foundry"],"name":"Bin Ma"},{"affiliations":["Alibaba Token Foundry"],"name":"Yiping Peng"},{"affiliations":["Alibaba Token Foundry"],"name":"Yuezhang Peng"},{"affiliations":["Alibaba Token Foundry"],"name":"Zhendong Peng"},{"affiliations":["Alibaba Token Foundry"],"name":"Yu Pu"},{"affiliations":["Alibaba Token Foundry"],"name":"Yang Shi"},{"affiliations":["Alibaba Token Foundry"],"name":"Xin Shu"},{"affiliations":["Alibaba Token Foundry"],"name":"Jian Tang"},{"affiliations":["Alibaba Token Foundry"],"name":"Biao Tian"},{"affiliations":["Alibaba Token Foundry"],"name":"Peiyao Wang"},{"affiliations":["Alibaba Token Foundry"],"name":"Tianzi Wang"},{"affiliations":["Alibaba Token Foundry"],"name":"Wen Wang"},{"affiliations":["Alibaba Token Foundry"],"name":"Wupeng Wang"},{"affiliations":["Alibaba Token Foundry"],"name":"Cheng Wen"},{"affiliations":["Alibaba Token Foundry"],"name":"Yuzhong Wu"},{"affiliations":["Alibaba Token Foundry"],"name":"Zijian Xia"},{"affiliations":["Alibaba Token Foundry"],"name":"Yunchong Xiao"},{"affiliations":["Alibaba Token Foundry"],"name":"Nan Yang"},{"affiliations":["Alibaba Token Foundry"],"name":"Jianwei Yu"},{"affiliations":["Alibaba Token Foundry"],"name":"Jixing Yu"},{"affiliations":["Alibaba Token Foundry"],"name":"Binbin Zhang"},{"affiliations":["Alibaba Token Foundry"],"name":"Lei Zhang"},{"affiliations":["Alibaba Token Foundry"],"name":"Sitong Zhao"},{"affiliations":["Alibaba Token Foundry"],"name":"Guangdong Zhou"},{"affiliations":["Alibaba Token Foundry"],"name":"Yuan Zhou"},{"affiliations":["Alibaba Token Foundry"],"name":"Jianheng Zhuo"}]
paper_digest_abstract_sha256: "983f78c9d6fc0e9eb166386ad7f27caa7d65d8e0ba9f87281b7db7255fca9a8d"
paper_digest_sidecars: {"citation.bib":{"sha256":"4c1a9430828e912d9d1b9b44d0c94e78a85492c6cf6b94193059fe7648f60901","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-07549/citation.bib"},"citation.json":{"sha256":"cf892e3d51f550984fd381211219fe5246c25a76d21a76b1c9e34175d0abd6d9","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-07549/citation.json"},"citation.ris":{"sha256":"0649d29b6618629b41f1211b3471ab9a9eda867f5eba7976b5b46076b6cb7cad","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-07549/citation.ris"},"rethink-context.json":{"sha256":"6e3659c66549f5567194a3661b13dff03445e2e877e1bc6b8d3a2c6dae676df4","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-07549/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "bec90822b4ec1387b676a9cc15590ed33a08e0f49cd1176fa7ed7332992bccaf"
paper_digest_api_reader_plan_sha256: "4866b54b203951b981e56bff41e523048a3383d17c79cee8fcd2cb1f71183561"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "0a5e1ecfd93dba36ebf95e41d9a34858354cc373ae4bf671f7c44266b2323d67"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "8f208227b6f715a74334cdd615afed2da43dec8dd93ee103322b62b7ac6f99a2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5af5018ec6f85ae5f3acd6d56d993f464ed8b713ff8b3ac8bd626b6210704bf0"
paper_digest_api_reader_author_count: 45
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1cb17487a1bc2a199492d8bee5beb3a1942b1615960021e4ece8a652d0db974d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 从逐字转写到可直接归档：Qwen-Audio-3.0-ASR 如何把指令、上下文与热词塞进同一遍解码

> 英文题目：*[Qwen-Audio-3.0-ASR Technical Report](https://arxiv.org/abs/2609.07549)*

> 标签：#语音识别 | #混合专家模型 | #多语言 | #流式处理
>
> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.3/1.5


## 👥 作者与机构

- Chuanmeng Bian：Alibaba Token Foundry
- Daren Chen：Alibaba Token Foundry
- Peixin Chen：Alibaba Token Foundry
- Zhigao Chen：Alibaba Token Foundry
- Zhiyun Fan：Alibaba Token Foundry
- Zhifu Gao：Alibaba Token Foundry
- Bo Gong：Alibaba Token Foundry
- Qing Gu：Alibaba Token Foundry
- Jiajun He：Alibaba Token Foundry
- Yawei Hu：Alibaba Token Foundry
- Yunjie Ji：Alibaba Token Foundry
- Jingbei Li：Alibaba Token Foundry
- Xiangang Li：Alibaba Token Foundry
- Xu Li：Alibaba Token Foundry
- Zengxi Li：Alibaba Token Foundry
- Zheng Li：Alibaba Token Foundry
- Chengdong Liang：Alibaba Token Foundry
- Baiji Liu：Alibaba Token Foundry
- Ying Liu：Alibaba Token Foundry
- Bin Ma：Alibaba Token Foundry
- Yiping Peng：Alibaba Token Foundry
- Yuezhang Peng：Alibaba Token Foundry
- Zhendong Peng：Alibaba Token Foundry
- Yu Pu：Alibaba Token Foundry
- Yang Shi：Alibaba Token Foundry
- Xin Shu：Alibaba Token Foundry
- Jian Tang：Alibaba Token Foundry
- Biao Tian：Alibaba Token Foundry
- Peiyao Wang：Alibaba Token Foundry
- Tianzi Wang：Alibaba Token Foundry
- Wen Wang：Alibaba Token Foundry
- Wupeng Wang：Alibaba Token Foundry
- Cheng Wen：Alibaba Token Foundry
- Yuzhong Wu：Alibaba Token Foundry
- Zijian Xia：Alibaba Token Foundry
- Yunchong Xiao：Alibaba Token Foundry
- Nan Yang：Alibaba Token Foundry
- Jianwei Yu：Alibaba Token Foundry
- Jixing Yu：Alibaba Token Foundry
- Binbin Zhang：Alibaba Token Foundry
- Lei Zhang：Alibaba Token Foundry
- Sitong Zhao：Alibaba Token Foundry
- Guangdong Zhou：Alibaba Token Foundry
- Yuan Zhou：Alibaba Token Foundry
- Jianheng Zhuo：Alibaba Token Foundry

## 📌 核心摘要

自动语音识别需以多语言方言连续语音为输入，输出可直接阅读的文本，实际难点在于方言口音变体、动态长尾实体热词、自发口吃失流利及跨句实体不一致难以仅靠声学证据消解。该系统先用BEST-RQ自监督目标预训练多层Transformer音频编码器，提取鲁棒声学表示并为后续对齐提供初始化。接着冻结音频编码器，联合训练两层Transformer音频适配器与Qwen混合专家大模型解码器，以文本交叉熵损失建立音频文本对齐，编码器顶部CTC解码器输出粗假设以支撑热词定制与长音频对齐。随后经高质量数据冷却、有监督指令微调与基于分组相对策略优化的强化学习，以字错率与关键词热词上下文复合奖励注入语言控制与生产偏好。与级联外挂大模型改写方案不同，目标语言、历史上下文、分级热词与润色指令均与音频表征共同进入同一次自回归解码，避免额外重写并始终以音频为主要证据。在Common Voice 15基准评测下，Qwen-Audio-3.0-ASR的宏平均错误率从次优竞品的5.01%降至4.57%，方向为越低越好。该结论适用边界限于中英优势语种与作者自定工业套件，在FLEURS部分语种与低资源方言上优势减弱，跨域泛化尚未验证。其流式变体在400毫秒算法延迟条件下首包延迟低于200毫秒，强化学习训练在32卡A100硬件上约一日完成，长上下文解码的推理开销随历史长度增加而上升。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么、要输出什么、为什么生产场景更难？

这篇报告的研究对象是自动语音识别，即把 spoken language 转换成 written text。输入是麦克风采集的波形，输出是可阅读、可归档的文字，中间要处理噪声、远场、口音、语速与口语重复。学术基准常测短句朗读，而生产中是会议、客服、语音输入这类自发长语音，报告点名的 4 个难点是区域方言、快速变化的实体与热词、跨句上下文、同音与自我纠正。举例来说，说话人先说一个产品名，后面再出现同音词时，只看当前几秒音频无法确定写哪个字，必须看前文。

本解读的输入是报告正文与本次收到的官方原图像素，目标是让刚入门的研究生能复述方法与实验条件。必须保留的信息包括模型拓扑中谁冻结谁更新、5 阶段训练的数据规模与目标、指令中 4 类条件的组合方式、评价时中英文与多语的指标方向与可比性说明。输出按学习依赖组织，先讲任务与路线，再讲全景与组件计算，然后讲训练构造与推理，最后讲实验条件、结果反证与复现要点。凡是教学举例会明确标为例子，不引入无来源的数值。

资源可达性方面，本次未发现来源绑定且完成超文本传输安全协议状态验证的资源，因此不得声称代码、模型或数据已公开，只能按报告文字讨论方法与结果。若后续要复现，需要另行确认可运行的检查点与数据许可。

### 三条路线各自解决了什么、又留下了什么缺口？

报告把近年进展归纳为 3 条互补路线。第一条是数据扩展，以 Whisper 系列为例，把训练数据从 3K 扩大到 680K 小时以上带来超过 20 个点的词错率下降，今天最有竞争力的系统使用数千万小时量级的数据。第二条是模型尺寸扩展，同一 Whisper 家族内参数从 38M 增至 1.5B 带来超过 40 点的多语词错率改善。第 3 条是与大语言模型深度融合，用语言知识与上下文推理解决语义歧义，报告点名的例子是 Seed-ASR 与 FireRedAudio。

沿生产方向的已有工作还包括多语适配、流式统一架构、热词检索与稀有词偏置。报告提到混合专家投影器加动态下采样改进跨语言适配，MEUSLI 连接预训练语音编码器与开放多语大语言模型并支持 28 种欧洲语言，Uni-ASR 探索流式与非流式统一，大词汇热词检索结合强化学习适配，以及利用声学线索与偏置词位置预测改进稀有词。

这些工作与本报告的对照维度是同输入、同目标、同监督与同运行阶段。数据与尺寸路线主要提升通用声学语言对齐，但在单模型覆盖多方言、动态热词不重训、口语稿直接可读这三件事上仍需额外机制。流式与热词工作各解决一段，而本报告要做的是把多语方言、领域实体、分级热词、单遍润色、长上下文放进同一个指令跟随框架，并在同一解码流程里可独立或组合开启。

### 要同时满足的三个生产要求是什么？

报告把学术成功与生产可用之间的差距收敛为 3 个同时成立的要求。第一，一个模型处理多种区域方言，而不是按市场部署多个检查点，中文部分涉及 16 种方言变体与 8 大方言区，还包括方言直转与译成普通话两种任务形态。第二，对训练集固定后仍在演化的动态实体与热词保持稳健识别，例如新库名、接口名、人名与流行词。第三，直接输出干净可读的文本，去掉填充词与自我纠正，且不经过昂贵的后处理改写。

这 3 个要求互相牵制。方言要求扩大声学语言覆盖，热词要求在推理时注入用户词表，润色要求改变输出的逐字 fidelity。如果用 3 个独立流水线拼接，延迟与维护成本上升，且后级改写可能脱离声学证据编造内容。因此报告把问题定义为如何在 1 次解码中联合利用音频证据与用户指定条件，并能用指令开关分别控制语言、润色、历史与热词。

### 一个样本如何走完输入到输出？

先沿一个样本走完全程。假设输入是一段中英混合会议音频，附带指令要求保留中英文原形、开启润色、附上前几轮转写与 P0 高优先级产品名。音频先经音频编码器抽取表示，再经两层 Transformer 连接器映射到大语言模型的嵌入空间；指令文本经分词器变成语言指令、润色控制、历史与热词标记；两路嵌入拼接后与已生成的文本前缀一起输入混合专家大语言模型解码器，逐词预测下一个词，直到结束符。CTC 解码器同时在编码器上给出初始假设，用于热词偏置的定位与长音频上下文的粗对齐，但不作为最终输出。

下图是系统能力总览，中央圆环强调指令控制解码、上下文感知、原生单遍生成与低延迟 4 个系统属性，外围六块分别对应多语方言、低延迟流式、领域实体、长音频上下文、分级热词与原生润色，阅读时应把它们看作同一解码器的 6 种条件输入而非 6 个模型。

> **看图路径：** 1. 先看中央圆环四个属性，再沿六个外围板块顺时针核对能力清单；2. 对比板块 4 中无上下文与有长上下文的两行英文输出差异；3. 核对板块 2 右侧延迟横轴与误差纵轴的权衡示意；4. 检查板块 5 中 P0 与 P1 词表示例如何汇入同一准确转写框

[![原论文 Figure 1：Overview of Qwen-Audio-3.0-ASR and its production-oriented capabilities.](https://arxiv.org/html/2609.07549v1/pipeline-qwen-audio-3.0-asr-2.png)](https://arxiv.org/html/2609.07549v1/pipeline-qwen-audio-3.0-asr-2.png)

*论文图 1。原论文 Figure 1:：“Overview of Qwen-Audio-3.0-ASR and its production-oriented capabilities.”。*

从像素看，图 1 中央是模型名称与四属性环，外围用编号框展示 30 种语言、16 种中文方言与 8 大区、200 ms 量级首词延迟示意、长上下文纠正 GGC 到 TCC 的例子、P0 与 P1 词表示例，以及把填充与自我纠正去掉的润色前后对照。它的教学价值是建立全景：所有生产能力都是解码条件的组合，改变的是输入指令而不是模型切换。

下图进一步展示解码工作流，底部 5 组标记输入如何拼成统一条件，顶部用开关对比说明润色与语言提示如何改变同一音频的输出，阅读时重点看条件拼接箭头与生成词的对应关系。

> **看图路径：** 1. 从底部五组条件输入向上追踪拼接为统一条件输入的箭头；2. 对比顶部左侧润色开关关与开的两行输出保留了哪些词；3. 对比顶部右侧无语言提示与指定语言提示的中英文输出行为

[![原论文 Figure 2：Overview of the instruction-controlled decoding workflow of Qwen-Audio-3.0-ASR.](https://arxiv.org/html/2609.07549v1/model.png)](https://arxiv.org/html/2609.07549v1/model.png)

*论文图 2。原论文 Figure 2:：“Overview of the instruction-controlled decoding workflow of Qwen-Audio-3.0-ASR.”。*

从像素看，图 2 底部从左到右是音频编码、用户指定语言、润色、历史上下文、分级热词五列，向上汇入拼接条件输入，再与解码器文本输入一起进入中央模型条带，顶部左侧用润色开关关与开对比填充词与重复的去留，顶部右侧用无语言提示出现语言泄露与指定目标语言后保持原形的对比。它的教学价值是把可复述的动作固定下来：改行为只需改提示标记，不改模型结构。

### 编码器、连接器与解码器各自算什么？

模型保留上一代 Fun-ASR 的总体拓扑，包含 4 个部件。音频编码器是多层 Transformer 编码器层，从输入语音抽取表示，具体沿用 SenseVoice 音频编码器。音频连接器是两层 Transformer 编码器，把编码器输出接到大语言模型。CTC 解码器架在音频编码器之上，输出初始假设，用于热词定制与长音频上下文注入的粗对齐信号。最终输出由基于大语言模型的解码器自回归生成，以音频表示与 CTC 假设为条件。本代主要架构变化是把此前的 7B 稠密语言模型解码器换成 Qwen 混合专家主干，通过稀疏专家路由增大语言与世界知识容量。

白话先讲术语：音频编码器好比听觉前端，把波形变成机器可用的声学特征序列；大语言模型解码器好比文字组织者，决定输出哪个词更合理。

**音频编码器 × 大语言模型解码器：** 音频编码器负责把语音波形变成帧级声学表示，保留发音与时间信息；大语言模型解码器负责利用语言知识与世界知识选择词序列。二者搭配的理由是声学证据能决定发了什么音，语言模型能解决同音歧义与实体合理性，组合后解码器以声学表示为主要证据、以指令文本为约束条件逐词生成转写。

白话再讲连接器与指令：连接器好比翻译插头，让声音特征能被文字模型读懂；指令控制解码好比任务单，写明目标语言、是否润色、参考前文与热词。

**连接器 × 指令控制解码：** 连接器是两层 Transformer 编码器，负责把音频编码器输出映射到大语言模型的文本表示空间；指令控制解码是把目标语言、润色开关、历史文本与分级热词拼成提示并与音频表征拼接后输入解码器。连接器解决模态对齐，指令解决行为可配，组合后同一模型无需换检查点即可按请求切换语言与输出风格。

白话讲 CTC 与热词：CTC 解码器好比速记草稿，速度快但不作为定稿；分级热词好比重点名单与备选名单，重点加权更大。

**CTC 解码器 × 分级热词：** CTC 解码器是架在音频编码器上的轻量辅助模块，只输出初始识别假设与粗对齐，不做最终自回归生成；分级热词是把候选词按语义匹配分成高优先级 P0 与更宽的 P1 候选池。CTC 假设用于热词定制与长音频上下文注入的定位信号，分级用于给 P0 更大偏置而 P1 只作备选，组合意义是在不强行写入声学不支持词汇的前提下提升长尾实体召回。

白话讲润色：原生单遍润色好比边听边写干净稿；级联改写好比先出草稿再请人润色一遍。

**原生单遍润色 × 级联改写：** 原生单遍润色指识别与去填充词、并列重复、自我纠正、标点规范化在同一次自回归解码中完成，由二值润色指令切换逐字稿或清洁稿；级联改写指先输出逐字稿再调用外部大语言模型重写 1 次。原生方式省掉第二次生成，直接把延迟从关键路径上拿掉，级联方式把声学与文本解耦但多 1 次推理，报告用同一原始输出对比二者可读性与保真度。

白话讲上下文：历史上下文缓存好比会议记录本，长音频建模好比用记录本纠正当前同音词。

**历史上下文缓存 × 长音频建模：** 历史上下文缓存指把同一会话中已识别的前文按时间顺序拼在指令中作为参考信息；长音频建模指当前片段转写时以上述跨句信息消解同音与首提实体歧义。缓存提供话题与实体线索，建模要求以当前音频为主要证据、仅在声学语义一致时采纳线索，组合后无需人工维护热词表即可在会议讲座中保持实体一致。

需要强调的约束是音频始终是主要证据，指令明确写明历史可能不完整、不相关或错误，当前音频优先。这是为了避免无条件复制前文或热词，这一点在复现提示模板时必须保留。

### 流式与消息转写如何兼顾即时显示与终稿准确？

流式部分采用混合框架。流模型按短块增量处理并持续更新临时转写用于屏幕显示，话语结束后全上下文大模型对整段声学重新评估并刷新为终稿。这种由粗到精的流程把即时反馈与完整上下文的准确性分开：块尺寸与右视上下文可独立配置，小上下文更灵敏，大上下文证据更多，推理时不换整体框架即可得到多个延迟 operating 点。

Message ASR 是同一模型的一个部署形态，不是独立识别栈。它把流音频块、历史上下文、原生润色指令与可配置右上下文一起送入同一模型，流式阶段输出低延迟部分假设，端点检测后做全上下文刷新。历史轮次或前文片段提供话题与实体连续性，P0 与 P1 热词区分高置信小集合与更宽候选池，仅在与声学语义一致时引导解码。同一接口支持 30 种语言与 16 种方言变体，目标语言列表在运行时传入，多语按原书写保留而不切换检查点。应用可按请求改变语言、上下文、热词优先级与润色行为，分别对应逐字转写、润色听写、上下文会议、访谈记录、客服归档与低延迟流式等模式。

### 五阶段训练中谁冻结、谁更新、监督从哪里来？

训练分 5 段：音频编码器预训练、音频语言模型预训练、大语言模型冷却适配、有监督微调、强化学习，逐步对齐声学表示与语言知识及指令跟随能力。

第一段音频编码器预训练又分两步，语料横跨两步共数千万小时真实场景音频。先用 BEST-RQ 在大规模无标注语音上自监督，随机掩码声学帧，用固定随机投影加冻结码本从未掩码特征生成离散目标来预测。按跨模态初始化的先前研究，编码器兼容 Transformer 层从预训练 Qwen3 大语言模型初始化，因果注意力换成双向注意力用于语音编码，声学前端单独初始化，再经 BEST-RQ 适配语音。

然后把编码器接入注意力编码器解码器模型，在大规模标注音频文本上监督训练，主要覆盖中英文，管线包括语音活动检测、多系统伪标签生成、逆文本规范化，解码器逐词预测参考转写提供直接声学文本监督，此阶段后丢弃解码器，只保留编码器。

下图是编码器预训练管线，阅读时按编号看可训练路径与固定目标路径的分叉，以及监督阶段训练用解码器最终被丢弃的标注。

> **看图路径：** 1. 按 1 初始化、2 自监督、3 监督的编号顺序看数据流向；2. 确认中间阶段固定随机投影与固定码本两条分支不更新；3. 确认右侧监督阶段解码器标注为仅训练用且最终只保留编码器

[![原论文 Figure 3：The pretraining pipeline for the audio encoder.](https://arxiv.org/html/2609.07549v1/encoder-pretrain.svg)](https://arxiv.org/html/2609.07549v1/encoder-pretrain.svg)

*论文图 3。原论文 Figure 3:：“The pretraining pipeline for the audio encoder.”。*

从像素看，图 3 左侧把预训练文本大语言模型经因果掩码关闭转为双向 Transformer 编码器得到初始权重，中间用对数梅尔特征加掩码片段预测固定码本的目标码，右侧用标注语音经交叉注意力训练注意力编码器解码器并只保留编码器输出音频标记。它的教学价值是记住监督来源与重置时机：自监督目标来自固定投影，监督目标来自参考文本，解码器用完即弃。

第二段音频语言模型预训练把音频大语言模型解码器从 Qwen 语言部分初始化，不用视觉部分，主干为混合专家架构。数据约 20,000,000 小时多语数据，主要由识别数据与图文音频交错数据经大规模管线构造。预训练 SenseVoice 音频编码器冻结，联合优化音频连接器与大语言模型解码器，以目标文本词上的交叉熵为损失，对齐声学表示与文本表示空间。此阶段带来多语知识、消解同音实体所需的世界知识与处理灵活文本条件的指令跟随能力，混合专家保持总容量大而每词激活参数少，解码成本相对低。

第三段冷却适配用更小但更高质量约 1,000,000 小时数据，重新平衡语言方言分布，并加入音频理解、说话人日志、语音问答以暴露更多任务与指令。用基于 VibeVoice 的重识别过滤识别部分，去掉错误率超 0.3 的样本。此阶段 SenseVoice 音频编码器仍冻结，联合优化连接器与解码器，仍用目标文本交叉熵，目的是在保留声学表示的同时精修音频语言对齐与多语指令能力。

第四段有监督微调把编码器、连接器与冷却后音频大语言模型整合成统一指令控制识别系统。此时联合更新音频编码器与连接器，基座大语言模型参数冻结并用低秩适配微调解码器。数据达数千万小时，覆盖 30 种语言与 16 种中文方言变体，混合人工转写、高置信伪标签、噪声增强、语音合成、模拟流式、远场房间仿真、语码切换、多语方言与业务场景语音。样本用统一对话格式，语音附带可选目标语言、润色、历史与分级热词的指令，序列打包至最长 8192 词元，多个控制可组合在同一指令。

第 5 段强化学习用 FunVerl-ASR 异步框架与分组相对策略优化，细节见下段公式与框架图。需要指出的缺项是报告未给出混合专家总数、每词激活专家数、连接器维度与低秩适配秩等可直接照抄的超参数，复现时不能从模型名推定实现。

下图是强化学习框架，阅读时按输入、 rollout、奖励、优化的循环理解异步解耦与权重同步。

> **看图路径：** 1. 按 1 输入、2 rollout、3 奖励、4 优化的编号确认异步循环方向；2. 观察第 3 步样本类型路由器如何分流到准确率与幻觉惩罚；3. 确认第 4 步权重同步虚线回指到第 2 步的 rollout 引擎

[![原论文 Figure 4：Overview of the FunVerl-ASR fully asynchronous RL framework for Qwen-Audio-3.0-ASR.](https://arxiv.org/html/2609.07549v1/GRPO.png)](https://arxiv.org/html/2609.07549v1/GRPO.png)

*论文图 4。原论文 Figure 4:：“Overview of the FunVerl-ASR fully asynchronous RL framework for Qwen-Audio-3.0-ASR.”。*

从像素看，图 4 第 1 步把音频经编码器连接器与文本经分词器拼成输入，第 2 步中央模型 1 次生成 G 个假设，第 3 步按样本类型路由到准确率、上下文、热词与幻觉惩罚并聚合为奖励，第 4 步经组相对优势与优化步后用集合通信同步权重回 rollout。它的教学价值是记住梯度路径：音频编码器在强化学习全程冻结，不参与参数同步，只有解码器参与策略更新。

组相对优势的计算是把同提示下 G 个回答的规则奖励做组内标准化，符号含义是同一提示的第 i 个假设奖励减组均值再除以组标准差，目标是让好于组内平均的假设获得正优势。

\[\hat{A}_{i,t}=\frac{R_{i}-\text{mean}\!\left(\{R_{j}\}_{j=1}^{G}\right)}{\text{std}\!\left(\{R_{j}\}_{j=1}^{G}\right)}\]

策略优化用截断目标加散度惩罚，符号中重要性比率是新旧策略下同一词的概率比，截断系数限制单步更新幅度，散度项约束偏离参考策略，目标是稳定提升组内相对好的假设。

\[\begin{split}L_{\mathrm{GRPO}}(\theta)=\frac{1}{G}\sum_{i=1}^{G}\frac{1}{|o_{i}|}\sum_{t=1}^{|o_{i}|}&\min\!\bigl(r_{i,t}(\theta)\,\hat{A}_{i,t},\;\operatorname{clip}\bigl(r_{i,t}(\theta),1-\varepsilon,1+\varepsilon\bigr)\,\hat{A}_{i,t}\bigr)\\ &-\beta\,D_{\mathrm{KL}}\!\bigl(\pi_{\theta}\|\pi_{\mathrm{ref}}\bigr)\end{split}\]

奖励按样本路由：识别准确率用 1 减词错率，关键词奖励兼顾召回与准确以平衡查全与查准，热词奖励对提示中 P0 与 P1 识别加非对称权重，上下文奖励对上下文实体命中与误插分别奖惩，幻觉抑制按模式匹配出的幻觉片段长度成比例惩罚。数据侧重难例、多系统分歧、超 20 秒长句、幻觉与真长重复、关键词热词样本，并混入常规数据防灾难遗忘。默认每提示生成 8 个假设，每次行动者更新小批量 32 个提示，在 4 节点 32 卡对半分给 rollout 与训练的配置下整个强化学习在 1 天内完成。

### 测什么、和谁比、条件是否一致？

公开基准包括 AISHELL-1、AISHELL-2、FLEURS、LibriSpeech、WeNetSpeech、GigaSpeechBench 与 Common Voice 数据集的对应测试集。中文用字错率，英文用词错率，多语按语言协议用词错率或字错率，日语字错率按 Fun-ASR 合并请求 165 的归一化与计分协议。内部工业集覆盖行业实体长尾词、热词定制、长音频上下文、润色与低延迟流式，跨声学条件、说话风格、领域与场景。

比较设计分两类。表 1 的面板 A 是官方仓库或技术报告中发表的结果，面板 B 是用统一接口评价管线在相同测试集上实测的结果，报告明确因预处理与计分惯例可能不同，定量比较主要在面板 B 内进行。对手包括 Whisper-large-v3、Kimi-Audio、Step-Audio 2、FireRed-ASR、LongCat-Flash-Omni Instruct、GPT-4o Transcribe、Azure、Doubao-ASR、Fun-ASR-Flash、Tencent Hy-ASR-3.0-preview，以及多语部分的 Gemini 3.1 Pro。方言一致性由 Qwen3.7-Max 按统一 0 到 10 量表打分，先看语义保真再看任务合规，方言直转要求保留方言表达、译成普通话要求无方言残留，得分至少 6 视为一致。一致率公式符号是第 i 句得分与总句数，计算目标是达标句占比。

\[\mathrm{Consistency}=\frac{100}{N}\sum_{i=1}^{N}\mathbf{1}\!\left[s_{i}\geq 6\right],\]

流式评测在内部中英文工业集上进行，在 H100 上测在线解码与延迟，首词延迟与文本显示延迟都从对应语音单元的声学结束时刻算到该单元首次出现在屏幕部分转写的时间，前者只看每句首个正确词，后者贯穿全句。算法延迟由块尺寸与右上下文窗口配置出多个 operating 点，非流式为最低误差参照。需要保留的限制是内部集不公开、方言一致性依赖模型打分、多语宏平均只对覆盖全部语言的系统计算。

### 中英文公开基准上谁在什么条件下更低？

比较问题是：在相同测试集与统一评价管线下，本方法的中英文误差是否更低，代价是哪些集仍未领先。公平条件是同一测试集、中文看字错率、英文看词错率、越低越好，面板 B 内比较最可比，面板 A 仅作发表值参考。

| Panel A: Officially Reported Results | Panel A: Officially Reported Results | Panel A: Officially Reported Results | Panel A: Officially Reported Results | Panel A: Officially Reported Results | Panel A: Officially Reported Results | Panel A: Officially Reported Results | Panel A: Officially Reported Results |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Test set | Metric | Whisper -large-v3 | Kimi -Audio | Step -Audio 2 | FireRed -ASR | LongCat-Flash- Omni Instruct | Qwen-Audio -3.0-ASR |
| AISHELL-1 | CER | 4.72 | 0.71 | 0.63 | 0.54 | 0.63 | 1.03 |
| AISHELL-2 | CER | 4.68 | 2.86 | 2.10 | 2.58 | 2.78 | 2.02 |
| FLEURS-zh | CER | 5.18 | 3.11 | 2.68 | 4.81 | 3.99 | 2.08 |
| FLEURS-en | WER | 6.23 | 6.99 | 3.03 | 10.79 | 5.02 | 4.17 |
| LibriSpeech-clean | WER | 1.86 | 1.32 | 1.17 | 1.84 | 1.57 | 1.19 |
| LibriSpeech-other | WER | 3.43 | 2.63 | 2.42 | 4.52 | 4.01 | 2.24 |
| WeNetSpeech-meeting | CER | 18.39 | 6.24 | 4.75 | 4.95 | 6.69 | 3.11 |
| WeNetSpeech-net | CER | 11.89 | 6.45 | 4.67 | 4.94 | 6.09 | 4.31 |

上表是 8 个中英文测试集在两面板下的误差率，面板 A 为官方发表值，面板 B 为统一接口实测值，数值越低越好，加粗为各面板各集最低。报告的读法是面板 A 中本方法在 8 集里 5 集最低，相对每集最强发表基线在 AISHELL-2 降 0.08 个百分点、FLEURS 中文降 0.60 点、LibriSpeech-other 降 0.18 点、WeNetSpeech 会议降 1.64 点、WeNetSpeech 网络降 0.36 点，并在 LibriSpeech-clean 与最优差距 0.02 个百分点。面板 B 中本方法同样在 8 集里 5 集最低，相对同管线最强对手在 FLEURS 中文降 0.30 点、FLEURS 英文降 0.78 点、LibriSpeech-clean 降 0.16 点、LibriSpeech-other 降 0.27 点、WeNetSpeech 会议降 0.78 点，并在 AISHELL-2 与最优差距 0.09 个百分点。

表后解释主要收益与具体代价。收益集中在会议这类难集与中英文均衡性，反例是 AISHELL-1 在两面板均未领先，WeNetSpeech 网络在面板 B 也未领先，说明在朗读或特定网络口音分布上仍有未胜出项。限制是面板 A 跨源预处理不同只能谨慎解读，面板 B 的对手为接口实测版本，版本与参数细节未完全公开，因此支持的判断是同管线下表现强且均衡，而不是在所有分布上证明因果最优。

### 长上下文能否把同音错误改对？

比较问题是：当同一会话前文已出现实体时，加入长音频上下文能否把当前片段的同音或形近错误改对，评价条件是同一音频分别在无上下文与有上下文下解码。指标方向是人工核对参考文本的一致性，越一致越好，这张表是定性例子而非误差率，需要与误差率表分开理解。

| Earlier context cue | Reference | Without long context | With long context |
| --- | --- | --- | --- |
| xsltproc style.xsl input.xml occurred earlier | style.xsl data.xml > out.html | xsl data.xml > out.html | style.xsl data.xml > out.html |
| Earlier explanation: “这叫法条竞合” | 法条竞合 | 划掉即可 | 法条竞合 |
| The term unigram occurred twice earlier | 我们称之为 unigram | 我们称之为 unique | 我们称之为 unigram |
| TCC was repeatedly established as the metric name | our TCC will be... | our GGC will be... | our TCC will be... |
| The name “洛军是阿占的儿子” occurred earlier | 洛军是阿占的儿子 | 洛君是阿占的儿子 | 洛军是阿占的儿子 |
| The technical term softmax occurred earlier | softmax 形式 | softmap 形式 | softmax 形式 |
| The mode name debug occurred earlier | 只能 debug 模式 | 只能 第八个 模式 | 只能 debug 模式 |
| The name “张贵生” occurred earlier | 张贵生 | 张桂生 | 张贵生 |

上表列出 8 组代表性纠正，前文线索在同一会话更早出现，着色片段标出错误与纠正。可见的模式是技术串 style.xsl data.xml 被纠回完整形式，unigram 不再写成 unique，TCC 不再写成 GGC，人名洛军与张贵生、术语 softmax、模式名 debug、法条竞合都在有上下文时与参考一致。表后解释是这种机制对跨片段复现的实体最有效，因为前文锚定了正确的词形，代价是若前文本身错误或无关，模型仍需以当前音频为主要证据，报告在训练指令中明确写明历史可能错误。未评测边界是当前只给代表性例子，未报告长上下文在全部工业集上的总体误差下降幅度，因此不能把单例推广为全程增益。

### 方言、实体与多语的增益有多大、短板在哪里？

比较问题是：在内部 16 方言与 15 行业领域上，本方法相对 Doubao-ASR 与 Tencent Hy-ASR-3.0-preview 的字错率与实体召回如何，公平条件是同一内部套件、方言分直转与译普通话两形态、领域按实体召回比较。指标方向是字错率越低越好、召回与一致率越高越好。

| 条件 | 指标 | 本方法 | 比较对象原文值 | 证据要点 |
| --- | --- | --- | --- | --- |
| 16 方言宏平均 | 字错率 | 9.40% | 16.77% 与 20.40% | 相对 2 对手分别降 7.37 与 11.00 个百分点 |
| 温州话子集 | 字错率 | 14.22% | 64.63% 与 64.66% | 难方言下降最显著 |
| 方言一致性 | 一致率 | 多方言最高 | 对手在部分方言更低 | 上海宁波杭州等多集提升明显 |

上表整理自原文连续句中的方言字错率，表头单位为百分比，数据格保留原文精度，未逐格追加新单位。表后解释是收益在温州、上海、南昌、宁波、客家、杭州、湖南、福建、苏州等难集更突出，11 个子集最低。但必须就近说明未胜出项：并非 16 集全胜，另有 5 集不是最低；一致性用模型打分而非人工，量表阈值 6 的选择会影响绝对值；内部集不公开限制了外部重放。

多语方面，报告称 GigaSpeechBench 宏平均 22.50% 为覆盖全部 7 语的系统最低并在 5 语最低，Common Voice 15 宏平均 4.57% 最低并在 7 语中 6 语最低，FLEURS 宏平均 4.94% 但只在 9 语中 4 语最低，说明在 FLEURS 上结果更混杂。领域实体方面，15 域召回均为最高，软件信息技术域因低频演进实体多而提升最显，人工智能、医疗、农业、制造、文体等多域一致提升，但报告也写明增益与实体挖掘合成管线预期一致，同时其他改进也可能贡献，不能单归因于某一段管线。

### 润色与流式分别省了什么、花了多少误差？

比较问题有两个：一是原生单遍润色相对原始稿与双调用级联的可读性与保真度，二是流式不同算法延迟下的误差上升幅度。公平条件是润色对比用同一原始识别输出，级联的改写方为 Qwen3.6-Plus；流式对比在同一内部中英文集上从低延迟到非流式扫描。指标方向是可读性与保真度越高越好，误差率越低越好，延迟越低越好，三者需联合看。

| 条件 | 指标 | 本方法单遍值 | 对照原文值 | 代价与收益 |
| --- | --- | --- | --- | --- |
| 原生润色 | 可读性 5 分制 | 3.44 | 原始稿 2.53 | 单遍提升可读性 |
| 原生润色 | 保真度 | 3.44 | 级联 3.47 | 接近双调用但省 1 次推理 |
| 400 ms 点中文 | 字错率 | 9.24% | 非流式 8.03% | 相对上升约 15.1% |
| 400 ms 点英文 | 词错率 | 13.38% | 非流式 11.78% | 相对上升约 13.6% |
| 低延迟配置 | 首词与显示延迟 | 首词低于 200 ms 显示低于 300 ms | 非流式最低误差 | 延迟换误差的 operating 点 |

上表数字与单位均来自原文连续句，延迟单位毫秒保留在同一格，误差单位保留在表头与格内原文写法。表后解释是原生润色的收益是把填充词、重复、自我纠正与标点规范化放进同一次解码，省掉关键路径上的第二次自回归，代价是保真度与级联仍差 0.03 分且为内部 5 分制，外部难以直接比较。流式的代价是中文与英文在 400 ms 点分别比非流式高约 15.1% 与 13.6% 相对误差，收益是可按块与右上下文灵活选点。反例是延迟测量基于 H100 与内部集，换硬件与分布后数值会变，不能承诺同等延迟改善。

### 哪些结论还不能下、哪些边界尚未评测？

首先区分报告直接显示、有限支持与待验证。直接显示的是在给定测试集与管线下的误差与召回数字；有限支持的是实体挖掘合成管线有助于长尾实体，因为整体改进可能混入其他因素；待验证的是把单例长上下文纠正推广为总体增益，以及把内部延迟数字推广到其他硬件。

未胜出与负结果需要明确。AISHELL-1 在两面板均不是最低，WeNetSpeech 网络在统一管线下不是最低，FLEURS 多语只在 4 个语言最低，16 方言中 5 个子集不是最低，分级热词中 P1 在学科词与流行词上的提升小于对应 P0，这与 P1 权重更弱的设计一致而非失败，但说明宽候选池的增益有限。

未评测边界包括内部工业集不公开、方言一致性用模型打分代替人工、幻觉率与误插率未单独给出完整统计、训练与推理成本只给强化学习 1 天与流式延迟而缺少全流程算力与输出帧率。相关性不等于因果，总体趋势不等于每组每步成立，百分点与相对百分比不可混用，不同指标差值不可并列比较。

### 要复现应先固定什么、再跑什么？

复现先做信息条件固定。语言方面固定目标语言列表写法，单语要求只输出指定语言且不翻译他语，多语要求保留原书写，语码切换用多样组合训练，运行时按同样模板传入。润色方面固定二值开关语义，润色开的数据来自真实音频配文本大语言模型按生产指令重生成并经保真过滤，以及规范文本注入填充重复自我纠正后合成语音再经发音过滤与噪声增强，目标本身就是润色稿而非后处理。

历史方面固定只用前文、恢复时间序、不做大语言模型改写，并加入正确、冲突、噪声、空上下文与热词的合成对抗，提示中写明历史可能错、音频优先。热词方面固定 P0 为关键命名实体等高置信词、P1 为更宽候选，候选用大语言模型按语义匹配参考转写分层，解码给 P0 更大偏置。

再跑最小可运行链路。先用冻结编码器加可训练连接器与解码器跑音频语言模型预训练的交叉熵对齐，再跑冷却的高质量平衡数据过滤，然后跑联合更新编码器连接器、冻结基座加低秩适配的微调，最后跑分组相对策略优化的难例强化学习，奖励按通用、方言、热词、上下文路由。训练序列打包最长 8192 词元，强化学习默认每提示 8 假设、每更新 32 提示，音频编码器在强化学习冻结不参与同步。

还需补的验证是公开集上的统一管线重跑、内部集的替代开源长尾实体集、人工一致性抽检、误插与幻觉的单独计数，以及在目标硬件上的首词与显示延迟重测。代码、权重与数据方面，本次无可验证的公开声明，不得写当前可用或已公开，只能按报告文字复述流程，实际运行前必须另行确认许可与检查点。

### 何时值得尝试这个方案？

当任务同时需要多语方言覆盖、动态热词、长上下文与可直接归档的干净稿，且希望用一个解码流程按请求组合这些行为时，这个统一指令框架值得尝试。它的可操作点是把语言、润色、历史、分级热词都当作提示条件，改行为先改提示模板，训练侧对应地构造语码、润色、上下文与分层热词数据，推理侧用块与右上下文选延迟点，用终稿刷新保准确。

当场景只需要单一语言朗读转写且已有强基线时，不必引入全套指令与强化学习，报告在 AISHELL-1 这类集上的非领先结果提示了这一点。当热词候选很宽且噪声大时，应预期 P1 增益小于 P0，并把高价值词尽量放入 P0，同时保留音频优先的约束以防硬写入。

给研究生的特有误解澄清是：混合专家增大的是总容量而非每词必算，冻结编码器不等于输出确定，单遍润色省的是第二次生成而非省掉语言建模，流式首词延迟、文本显示延迟、算法延迟与输出帧率是 4 个不同量，总体误差下降不等于每个难例都下降。收束时应回到可核对的动作：固定提示模板、固定指标方向与可比面板、保留基线与可运行策略，再谈是否采用。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.07549)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-10/)
