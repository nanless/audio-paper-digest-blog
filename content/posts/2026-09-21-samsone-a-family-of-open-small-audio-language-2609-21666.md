---
title: "Samsone: A Family of Open Small Audio Language Models for On-Device Inference"
date: 2026-09-21
draft: false
tags: [音频问答, 模型剪枝, 端侧运行, 音频大模型, 开源工具]
categories: [论文速递]
description: "Samsone 针对端侧音频问答，用 Whisper-Tiny 编码器加 SmolLM2 解码器与非线性映射器做单阶段训练，在 MMAU 与 MMAU-Pro 上超过同级小模型并接近部分大模型，代价是通用语言能力下降且未做移动端硬件级优化。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.21666"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "小参数做音频问答：Samsone 用裁词表与减层数换端侧可运行"
paper_digest_original_title: "Samsone: A Family of Open Small Audio Language Models for On-Device Inference"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.21666v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.21666v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.21666v1.pdf"
paper_digest_primary_task: "音频问答"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"artifact","id":"artifact.open-source-tool","label":"开源工具"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 7.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "Samsone 针对端侧音频问答，用 Whisper-Tiny 编码器加 SmolLM2 解码器与非线性映射器做单阶段训练，在 MMAU 与 MMAU-Pro 上超过同级小模型并接近部分大模型，代价是通用语言能力下降且未做移动端硬件级优化。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Piotr Masztalski"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Michał K. Grzeszczyk"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Olaf Sikorski"}]
paper_digest_abstract_sha256: "61eb910ba85626e70a9579e6acf92537aef35636541e492ccdc313a7bae94654"
paper_digest_sidecars: {"citation.bib":{"sha256":"de86e60d72d20e2436f1172e8314a0eb6e82357b029339bbabbf84981d6b17b3","url":"/audio-paper-digest-blog/data/papers/2026-09-21/2609-21666/citation.bib"},"citation.json":{"sha256":"4eb8454f01709712079f8d1c5c9bf92b5bcb54f3ea4b48e362ea31fff7386f69","url":"/audio-paper-digest-blog/data/papers/2026-09-21/2609-21666/citation.json"},"citation.ris":{"sha256":"05e5189d62f40087cc4b880bfa61ebc2927d7ee021631b69d8b3ba8753b5854a","url":"/audio-paper-digest-blog/data/papers/2026-09-21/2609-21666/citation.ris"},"rethink-context.json":{"sha256":"4553619f764335331a883cb3a5c69da9fd7f8afbb28c508a46c99bfeecf4bdc1","url":"/audio-paper-digest-blog/data/papers/2026-09-21/2609-21666/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "0e6d3a33936bb544722afdb144a42c012d7f9e2a8f3a389d445bd8a3e0267f9e"
paper_digest_api_reader_plan_sha256: "4cbcd3e02f987e51b18b48f979d5289e78edd5afb5550a20612a5bb590ffff68"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6c5e01da497f191788c8e3a1f62bd4916d31f984850d6acbfe42aef762261bcd"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0372590ba8784a8ab4f2fa9e4e68ca75c7428661e114ddf5fde26c42c1f2c9d4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "58774a83cc607950ac10f7863dfc548e358027a74090c0851f2137266d067388"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4876a16476dcff8ce4bacb0abb09c9bd48bb2410402defcb4782423eaa08d7bd"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 小参数做音频问答：Samsone 用裁词表与减层数换端侧可运行

> 英文题目：*[Samsone: A Family of Open Small Audio Language Models for On-Device Inference](https://arxiv.org/abs/2609.21666v1)*

> 标签：#音频问答 | #模型剪枝 | #端侧运行 | #音频大模型 | #开源工具
>
> 评分：**7.9/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Piotr Masztalski：机构信息未在 arXiv HTML 中可靠披露
- Michał K. Grzeszczyk：机构信息未在 arXiv HTML 中可靠披露
- Olaf Sikorski：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

音频问答（Audio Question Answering，AQA）要求模型联合理解环境声、音乐与语音并生成开放文本答案，难点是在百兆参数下同时保持细粒度听觉 grounding 与复杂推理。Samsone采用音频编码器加模态投影器加语言解码器的标准音频语言模型架构：Whisper-Tiny编码器输出帧级嵌入并平均池化为每条音频50个token，经双线性加GeLU加残差加层归一化的非线性投影器映射到文本嵌入维度，再与SmolLM2分词嵌入拼接并以可学习SEP token分隔模态边界，由SmolLM2自回归生成答案。与Pengi和Mellow的关键差异是800万AudioSkillsXL加100万ReasonAQA的数据混合、ReasonAQA选择题选项随机重排去偏、词表缩减与深度裁剪的尺寸优化，以及单阶段全量微调。在MMAU Test平均准确率为61.33%，高于Mellow的53.34%，方向为越高越好；在MMAU-Pro为37.57%，高于Mellow的27.50%。该结论适用于英文短音频问答、字幕与蕴含任务，在长时、空间与多音频复杂知识上仍落后于数十亿参数大模型。训练为单卡100轮、每轮200000样本，端侧在Galaxy S25 Ultra CPU上生成速度为39至125 tokens每秒。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/SamsungLabs/samsone> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/soham97/mellow> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么要做小模型？

这篇论文的输入是音频加文本，输出是文本。研究生可以这样复述 1 次完整动作：拿一段或两段声音文件，配一个用自然语言写的问题，把声音与问题一起送入模型，模型只生成文字回答。论文把这类统一做法称为音频问答，声音分类、音频描述、说话人识别等传统单任务都被收进这种问答形式里。

目标是在手机上流畅运行。原文交代的动机有 3 层：大音频语言模型动辄数十亿参数，训练与运行成本高；医疗等场景要求隐私与离线处理，声音适合留在本地；智能体需要反复执行专门的小任务，小模型结构更贴合这种调用方式。论文把小于 1,000,000,000 参数的音频语言模型定义为小音频语言模型，这与文本领域把 8,000,000,000 参数也叫小模型的做法形成对照，因为音频领域当前领先模型多在 30 亿到 90 亿之间。

需要记住的关键信息是开放性与可复现。论文声明在公开数据上训练，并开放训练代码、模型权重、移动端优化权重与安卓应用。资源状态显示代码仓库当前可用，第三方 Mellow 仓库当前可用。初学者复述时要说清比较条件、数据集与指标方向，后文所有数字都按这个要求核对。

### 同输入同目标的前人路线有何不同？

按同输入、同目标、同监督来对照，前人有两条小模型路线。第一条是 Pengi，参数约 323M，开创了把音频任务都当成文本生成来做的做法，训练文本多样性有限，复杂推理分数偏低。第二条是 Mellow，参数约 167M，用了偏重推理的 ReasonAQA 数据集，推理分数有所提升。论文比较的是改进后的 Mellow 版本，原文明确标注比较对象是论文发表后公开的改进版，复述时要写清这个版本来源。

大模型路线则用更大的语言模型做底座，例如 Audio Flamingo 系列、Qwen2-Audio、SALMONN、LTU 与 GAMA，参数从 30 亿到 130 亿不等。它们同样接受音频与文本并输出文本，训练数据中越来越多使用多模态模型合成的高推理问答，例如 OpenAQA、ReasonAQA 与 AudioSkillsXL。类别差异适合作为解释条件：大模型底座本身带有更强的文本知识，小模型在需要外部知识的题目上起点不同，解读分数时要结合这一背景。

还有一个值得补充的环节是真实手机部署。原文指出，小模型被认为适合端侧，实际的移动端部署与测速记录还很少见。这就是 Samsone 要补的位置：给出小体积下的问答分数，还把权重导出到手机并测出可复述的延迟。

### 要解决的具体问题与学习依赖是什么？

具体问题是：在参数少于 10 亿的约束下，让一个能同时读多个音频的问答模型，在需要专家知识与复杂推理的测试上达到可用分数，并在普通智能手机中央处理器上实时生成回答。学习依赖顺序是：先理解音频问答的输入输出格式，再理解编码器加映射器加解码器的标准结构，再理解词表裁剪与层数裁剪如何省参数，最后看懂训练数据混合与手机导出。

举一个教学例子，注意这只是例子，数字与论文实验无关：假设输入是两段水声与一句请描述音频，模型需要先把两段声音各自变成固定长度的音频记号，再与文本记号拼接，最后生成描述句。例子中的关键是分隔信息完整保留，模型依据它判断哪里是一段结束、另一段开始。论文用可训练的分隔嵌入实现这个功能，后文组件节会讲清它的放置位置。

复述方法时先画出数据流，再谈分数。数据流包括音频如何变短、文本如何分词、二者在哪里拼接、答案从哪里逐词产生。分数部分包括测什么领域、与谁比、指标是准确率还是描述分数。把这两层分开，单次高分的适用范围就更清晰。

### Samsone 全景：一个样本如何走完输入到输出？

沿一个样本走一遍。第一步，音频信号进入 Whisper-Tiny 的编码器部分，得到帧级音频嵌入，随后做时间平均池化，固定为每个样本 50 个音频记号。文本问题先经过 SmolLM2 分词器变成记号，再经嵌入层变成文本嵌入。论文在提示末尾追加固定后缀来分隔问题与答案，复现时保留原文给出的后缀形式与位置。

第二步，非线性映射器把音频嵌入的特征维度对齐到语言模型的文本嵌入维度，输出序列长度与输入音频嵌入长度相同。映射器由两个线性层加中间的激活函数构成，后面带残差连接与层归一化。然后把映射后的音频嵌入、文本嵌入与可训练分隔嵌入拼接成多模态输入，送入 SmolLM2 的 Transformer 层生成回答。分隔嵌入放在音频记号之前、之后以及多个音频之间，使模型能处理任意数量与任意位置的音频。

下图是论文给出的系统总览，左侧是两路输入，中间是编码与映射，右侧是手机导出，读图时按输入到输出的主路径走，重点看音频与文本在哪里汇合，全图各框的色彩与箭头走向都值得对照正文阅读。

> **看图路径：** 1. 先沿左侧音频信号与用户提示两条输入线，看到它们分别经过音频编码器与分词器；2. 再看中间映射器与嵌入层输出在哪里与 SEP 记号汇合进入语言模型；3. 最后看右侧模型导出箭头如何指向手机端问答界面

[![原论文 Figure 2：Samsone family of SALMs consisting of Audio Encoder, projector and Language Model with on-device…](https://arxiv.org/html/2609.21666v1/samsone_system_overview.png)](https://arxiv.org/html/2609.21666v1/samsone_system_overview.png)

*论文图 2。原论文 Figure 2:：“Samsone family of SALMs consisting of Audio Encoder, projector and Language Model with on-device execution example.”。*

上图显示左侧音频信号进入蓝色音频编码器框，中间绿色映射器框输出多组音频特征，白色分隔框输出另一组特征，左下用户提示经过分词器与嵌入层输出文本特征，3 路在黄色语言模型框汇合后经输出层得到文字回答，最右侧箭头表示模型导出到手机并显示问答界面，手机界面上的示例描述文字与生成速度数字都清晰可见。火焰与雪花标记在原文中缺少可复述的图例说明，此处只描述框体位置与连接关系，具体冻结安排以训练节的文字证据为准。

### 编码器、映射器与语言底座各自做什么？

音频编码器（Audio Encoder）选用 Whisper 编码器部分，初始化自开放的 Whisper-Tiny 权重。白话说，它是听声音的部件，把波形变成机器可读的向量序列。语言模型解码器（Language Model Decoder）选用 SmolLM2，135M 版本用于 99M 与 134M 模型，360M 版本用于 356M 模型。白话说，它是读书写字的部件，负责理解拼接后的序列并逐词生成回答。映射器是翻译官，把听到的向量翻译成读书部件能读懂的维度。

**音频编码器 × 语言模型解码器：** 音频编码器负责把波形变成帧级音频嵌入，语言模型解码器负责读文本嵌入并生成回答文本，二者维度与语义空间不同，所以需要映射器把音频嵌入对齐到文本嵌入空间后再拼接输入，组合后模型才能同时接受声音与问题并输出文字。

映射器与分隔记号的分工值得单独讲清。模态映射器（Modality Projector）负责维度对齐，把音频特征维度映射到文本嵌入维度。可训练 SEP 记号（Trainable SEP Token）是可训练的一个嵌入向量，插在音频段前后与段间，标示哪里是声音、哪里是文字、哪里是第一段与第二段的分界。论文还把音频固定池化为 50 个记号，这使手机端预填充长度可预期。组合原因是：对齐解决读懂问题，分隔解决边界问题，二者配合支持多音频任意位置输入。

**模态映射器 × 可训练 SEP 记号：** 模态映射器负责把音频编码器输出的特征维度变换到语言模型需要的文本嵌入维度，可训练 SEP 记号负责在拼接序列中标出音频段与文本段的边界以及多个音频之间的分隔，二者搭配使模型能处理任意数量与任意位置的可变长音频输入。

3 种体积的差别集中在语言底座与裁剪手段。134M 是核心模型，只做词汇裁剪。99M 在词汇裁剪基础上把语言模型从 30 层截到 20 层，去掉最后 10 层，进入 100M 以内。356M 换用更大的 360M 底座并做词汇裁剪，映射器参数从约 0.5M 增至约 1M。编码器在 3 个版本中都是约 9M，这种共享设计使比较更聚焦于语言侧容量。

### 参数从哪里省下来？裁剪动作与代价是什么？

省参数针对两个大户。第一个是嵌入矩阵。分词词表很大时，每个词都要存一个向量。论文把训练文本约束为小写字母加数字字符，并去掉包含过多空白或特殊字符的词，从而删掉一部分词表。第二个是模型深度。每个 Transformer 块都占约数百万参数，去掉若干层就能按层数线性省参数，且实现简单。

**词汇裁剪 × 深度裁剪：** 词汇裁剪负责缩小输入嵌入矩阵的行数以减少参数，深度裁剪负责减少 Transformer 层数以减少每层参数，二者分别针对嵌入层与堆叠层这两个参数大户，组合后才能在保持音频问答能力的同时得到 99M 到 356M 的不同体积版本。

下表把论文明确报告的裁剪量整理成可核对的形式，比较问题是同样的问答能力需要付出多少参数，公平条件是同一 SmolLM2-135M 底座下的参数变化，指标方向是参数越少越适合端侧，解读时要结合任务分数一起看。

| 手段 | 作用对象 | 具体动作 | 参数变化 | 原文报告的基线 |
| --- | --- | --- | --- | --- |
| 词汇裁剪 | 嵌入矩阵 | 删除部分词表 | 15042 tokens，矩阵减少 8.7M parameters | 嵌入层原来超过 28M parameters，约占 21% |
| 深度裁剪 | 变换器层 | 去掉单层 | 单层约减少 3.5M parameters | 99M 版本去掉最后 10 层 |

上表的主要信息是嵌入矩阵与层数都有明确数量的裁剪记录，词表覆盖范围随之收窄，推理容量也随层数变化。论文同时给出被删词表的筛选规则，复现时可以按规则对照实现。结论部分还说明，大量问答微调会让语言模型通用语言能力有所变化，评估小模型时适合把问答分数与开放域文本表现分开记录。

### 训练：数据、监督与优化如何安排？

训练数据只有两个来源。AudioSkillsXL 是大规模问答，约 8,000,000 对，覆盖声音、音乐与语音。ReasonAQA 是偏重推理的问答，约 1,000,000 对，不少题目需要比较两个音频。论文发现 ReasonAQA 选择题中正确选项偏向第二个，占比超过其他选项之和，会让模型偏向选第二个，因此在训练时随机打乱选项顺序，使正确选项均匀分布。这是一个可复述的数据动作，复现时需要实现这个打乱步骤，选择题分数要在打乱后重新记录。

**ReasonAQA × AudioSkillsXL：** ReasonAQA 负责提供约 1,000,000 条偏重推理的问答，其中不少需要比较两个音频，AudioSkillsXL 负责提供约 8,000,000 条覆盖声音音乐语音的大规模问答，二者搭配使小模型既见到足够多样的音频现象，又专门练习多音频比较与推理。

监督与优化安排如下。模型用标准记号级交叉熵损失做单阶段训练，论文试过多阶段训练，记录的分数增益有限，因此正式训练采用单阶段。除语言模型嵌入层外，其余部件都参与训练。优化器用 AdamW 加余弦退火学习率，包含 10 轮线性热身，最低学习率 1e-7。训练后用 ExecuTorch 加 XNNPACK 导出端侧权重。推理时为保证可复现，全部实验用贪心解码。

下表整理训练预算与学习率，比较问题是不同体积是否用相同训练量，公平条件是轮数与每轮样本量相同，解读时把学习率、硬件条件与收敛曲线放在一起看。

| 模型 | 训练轮数 | 每轮样本量 | 学习率 | 硬件 |
| --- | --- | --- | --- | --- |
| Samsone-99M | 100 epochs | 200,000 training examples | 3e-4 | NVIDIA RTX PRO 6000 Blackwell 96 GB GPU |
| Samsone-134M | 100 epochs | 200,000 training examples | 3e-4 | NVIDIA RTX PRO 6000 Blackwell 96 GB GPU |
| Samsone-356M | 100 epochs | 200,000 training examples | 1e-4 | NVIDIA RTX PRO 6000 Blackwell 96 GB GPU |

上表显示 3 个模型训练轮数与每轮样本量一致，区别在于 356M 用更小的学习率。论文报告的硬件均为单卡 NVIDIA RTX PRO 6000 Blackwell 96 GB GPU，复现时可以记录自家显存下的批量大小、梯度累积与总时长，参数量小与训练成本低之间的关系适合用实测时间来说明。

### 实验条件：测什么、与谁比、指标方向是什么？

主测试是 MMAU，含 10,000 条人工标注问答，分声音、音乐、语音 3 个领域，要求专家知识与复杂推理。更难的测试是 MMAU-Pro，含 5305 条问答，考长音频理解、空间推理与多音频理解。指标都是准确率，越高越好，分 Test-mini 与 Test 两个划分报告。基线包括大模型与小模型两类，大模型有 LTU、GAMA、SALMONN、Qwen2-Audio、GPT-4o Audio、Audio Flamingo 2 与 3，小模型有 Pengi 与改进版 Mellow。

**预填充 × 自回归生成：** 预填充负责把音频嵌入与问题嵌入 1 次性送入语言模型并建立键值缓存，自回归生成负责在此缓存基础上逐个产生回答记号，二者分工对应端侧延迟表中的音频处理时间、问题处理时间与每秒记号数，组合起来决定手机上问答的实时感受。

另一组测试是描述与简单问答。音频描述用 AudioCaps 与 Clotho，指标用 SPICE，越高越好。简单问答用 ClothoAQA，指标是准确率。音频蕴含用 Clotho 与 AudioCaps 衍生的两套数据，指标也是准确率。消融实验在 MMAU 上比较编码器换成 AST、映射器换成线性层、语言底座换成 GPT-2 的效果。

端侧实验在三星 Galaxy S25 Ultra 中央处理器上，用 15 对音频问题测音频处理时间、问题处理时间与每秒生成记号数，生成速度在 39 到 125 记号每秒之间。论文说明测试条件缺少硬件级优化，因此数字适合作为未优化基线来引用。

核对数字时同时核对数据集、模型、阶段、指标与聚合对象。百分点是绝对分数差，相对百分比是变化率，二者分开使用。不同指标的差值适合分列呈现，自动指标与人评分数也适合分开记录，这些都是初学者容易混淆的地方。

### 主结果：小模型是否超过同级并接近大模型？

下图先给出直观位置，横轴是参数量对数尺度，纵轴是 MMAU 测试分数，左侧黄色区是小模型区，右侧紫色区是大模型区，圆点大小表示参数量。读图前要确认横轴是对数尺度，不能把圆点大小当成分数，也不能把虚线高度当成精确数值。

> **看图路径：** 1. 先确认横轴为十亿参数的对数尺度，纵轴为 MMAU 测试分数；2. 再比较左侧小模型区三个红色点与 Mellow 橙色点的高低与左右位置；3. 最后看右侧大模型区蓝色圆点大小表示的参数量与纵向分布

[![原论文 Figure 1：Samsone establishes the new state of the art on the MMAU benchmark among SALMs.](https://arxiv.org/html/2609.21666v1/model_performance.svg)](https://arxiv.org/html/2609.21666v1/model_performance.svg)

*论文图 1。原论文 Figure 1:：“Samsone establishes the new state of the art on the MMAU benchmark among SALMs.”。*

上图显示左侧小模型区中 Samsone-134M 与 Samsone-356M 的红色点高于标为前小模型最优的 Mellow 橙色点，Samsone-99M 也略高于 Mellow，而 Pengi 点贴近底部接近零分。右侧大模型区中 Audio Flamingo 3 与 Audio-Thinker 等蓝色大圆点位置更高，但 Samsone 的红色虚线高度已接近 Audio Flamingo 2 与 Qwen2-Audio-Instruct，GAMA 与 LTU 点则明显偏低。像素不能精确读出每个点的具体数值，具体数值以下表为准。

下表是 MMAU 与 MMAU-Pro 的可运行策略比较，比较问题是在相同问答测试上小体积是否取得更高准确率，公平条件是同一划分与准确率指标，指标方向是分数越高越好，覆盖小模型基线与实际可运行的 3 个版本。

| Large Audio Language Models | Large Audio Language Models | Large Audio Language Models | Large Audio Language Models | Large Audio Language Models |
| --- | --- | --- | --- | --- |
| Pengi [20] | 323M | 2.20 | 3.63 | 28.61 |
| Mellow [14] | 167M | 52.30 | 53.34 | 27.50 |
| Samsone-99M (ours) | 99M | 57.20 | 58.13 | 36.83 |
| Samsone-134M (ours) | 134M | 63.00 | 61.33 | 37.57 |
| Samsone-356M (ours) | 356M | 63.70 | 62.00 | 40.67 |

上表的主要收益是 3 个 Samsone 版本在平均分与 MMAU-Pro 上都超过 Mellow，最小版本参数更少仍取得领先，134M 版本平均分明显高于 Mellow，MMAU-Pro 上从 Mellow 的二十多分提升到三十多分到四十分。代价与反例是语音域提升相对小，356M 在语音上略低于 134M，大模型在 MMAU-Pro 上仍有优势，论文解释为大语言底座自带更多外部知识。重提结果时要加一个适用条件：该优势是在问答微调后的专用能力上成立，不代表通用语言能力更强。

### 描述与简单问答是否同样成立？

在简单问答与蕴含任务上，论文报告 Samsone 3 个版本都超过 Pengi 与 Mellow，134M 与 356M 在 Clotho 问答准确率上更高，蕴含准确率达到 90% 以上。这支持论文的判断，即小模型在音频接地能力上是扎实的。在描述任务上，Samsone 在 Clotho 的 SPICE 上超过 Mellow，但在 AudioCaps 的 SPICE 上低于 Mellow，论文把原因归为训练混合中 AudioCaps 占比低于 Mellow 原配方。这是一个重要的未胜出项，复述时不能只讲胜出项。

不同指标的差值不能混放。SPICE 衡量描述与参考的语义命题重合，准确率衡量选择或判断对错，二者不能直接相减比较。百分点与相对百分比也不同，论文结论中写的提升百分比如 15% 与 36% 是相对变化，初学者应回到原表用绝对分数核对，避免把相对提升当成绝对分数差。

还有一个细节是数据混合的影响。AudioSkillsXL 规模大但偏通用，ReasonAQA 规模小但偏推理，二者搭配才有当前效果。如果只用其中之一，推理或覆盖必有一头受损。论文把 MMAU-Pro 上的大幅提升归因于更多样与更大规模的训练混合，这属于有限解释，支持但不证明因果，待验证的是换一组混合是否仍有同样提升。

### 换掉关键部件会发生什么？

消融实验的比较问题是 134M 的结构选择是否必要，公平条件是同一 MMAU 测试与贪心解码，指标方向仍是分数越高越好。基线是不做词汇裁剪的 134M 版本，参数约 143M。3 个替换分别是编码器换成音频频谱 Transformer、语言底座换成 GPT-2、映射器换成单线性层，参数量分别变为更大或略小。

| Model/change | Size | MMAUmini | MMAU |
| --- | --- | --- | --- |
| w/ AST AE | 221M | 59.70 | 57.47 |
| w/ GPT-2 LM | 133M | 58.80 | 57.96 |
| w/ Linear projector | 142M | 61.20 | 58.82 |

上表显示 3 个替换的分数都低于基线，支持论文保留 Whisper-Tiny 编码器、SmolLM2 底座与非线性映射器的选择。其中换编码器后参数明显变大但分数下降，说明大不等于好；换语言底座与换线性映射器后分数也有下降，说明底座与非线性对齐都有作用。需要注意原文未给出替换时的训练轮数与学习率是否完全一致，也未报告方差与显著性，因此只能说在本次报告中显示更低，不能推广为任何数据下必然更低。另一个边界是消融只做了 MMAU，未在 MMAU-Pro 与手机延迟上重复，结构对长音频与速度的影响待验证。

### 哪些结论不能下？还有什么代价与缺项？

论文自己列了三项局限。第一，大量问答微调让语言模型失去部分通用语言能力，复现者不要把问答高分当成什么都能聊。第二，只用参数量代表效率，但近期精度感知扩展规律提示，更大模型加量化可能在同样内存下更好，论文未比较量化路线。第三，未做移动端图形处理器与神经网络加速器的硬件优化，当前速度只是中央处理器基线。

还有两项复现缺项。训练缺批量大小、总步数与耗时，无法精确估算成本。端侧缺音频时长分布与输出长度分布，15 对样本的平均延迟不能直接推广到长音频。相关性不等于因果，例如模型变大与分数变高的相关不能证明每加一层都有效，语音域 356M 低于 134M 就是反例。

初学者还要区分 3 组开销。训练资源是 1 次性成本，推理开销是每次问答的计算量，实际延迟还受手机散热与调度影响。总体趋势是小模型更快，但不等于每一步都快，音频越长预填充越重，回答越长生成越久，这些都需要在自己的数据上实测。

### 复现先做什么，需要哪些信息条件？

先做数据与代码准备。代码仓库当前可用，第三方 Mellow 仓库当前可用。按论文顺序，第一步取 Whisper-Tiny 编码器与 SmolLM2 权重，第二步实现两层线性加激活加残差加归一化的映射器，第三步实现 50 记号池化与前后加分隔记号的拼接，第四步实现选项随机打乱与固定回答分隔后缀，第五步用单阶段交叉熵训练 100 轮、每轮 200000 条，99M 与 134M 学习率 3e-4，356M 学习率 1e-4，优化器 AdamW 加余弦退火与 10 轮热身。

再做评测与导出。评测用贪心解码跑 MMAU 3 个领域与 MMAU-Pro，核对数据集、基线、阶段、指标与聚合对象。导出用 ExecuTorch 加 XNNPACK，在 Galaxy S25 Ultra 中央处理器上复测 15 对样本的 3 段耗时。区分代码开源、权重下载与系统可运行：论文声明三者都提供，但复现时要分别记录是否真正下载成功与是否在自己手机上跑通，不把能下载当成能实时运行。

信息条件清单包括：两个训练数据集的获取方式、选项打乱的随机种子、后缀字符串的精确写法、嵌入层冻结与否、学习率调度细节、贪心解码实现、手机系统版本与测试音频长度。缺其中任何一项都要如实记录，不能用默认值代替原文。

### 何时值得尝试，何时不值得？

当任务是离线或隐私敏感的音频问答，且手机算力有限时，值得尝试 Samsone 的路线：小编码器加小解码器加非线性映射器，配合大规模问答与推理问答混合，并在训练时打乱选择题选项。99M 适合对体积最敏感的场景，134M 是论文验证最充分的核心选择，356M 适合能容忍更慢生成但需要更强推理的场景，论文报告三者生成速度在 39 到 125 记号每秒之间，具体快慢与体积正相关。

当任务需要开放域闲聊、长文本写作或依赖大量外部知识时，不值得直接套用，因为微调已削弱通用语言能力，且 MMAU-Pro 上大模型仍有优势。当目标是最低内存而非最少参数时，还需补做量化对比，不能只看参数量。最后的特有误解是把小参数等同于全程都快：预填充与逐词生成是两段开销，音频越长预填充越重，回答越长生成越久，选型时要按自己的音频时长与回答长度实测。

学习收束是：先复述输入到输出的数据流，再复述裁剪与数据动作，最后才引用分数。分数必须带条件，即在哪个数据集、哪个划分、哪个指标上、与哪个基线比。只有这样，小模型超越同级并接近大模型的判断才是可核对的，否则就退化为一句无法复现的口号。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.21666v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-21/)
