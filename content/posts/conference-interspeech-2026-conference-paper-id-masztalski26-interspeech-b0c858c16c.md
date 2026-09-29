---
title: "Samsone: A Family of Open Small Audio Language Models for On-Device Inference"
date: 2026-09-27
draft: false
description: "Samsone 针对端侧音频问答任务，采用 Whisper-Tiny 编码器加 SmolLM2 解码器的标准结构并做词汇表缩减与深度剪枝，在 MMAU 等基准上以 99M 至 356M 参数取得可比大模型的成绩，代价是语言通用能力下降且未做硬件级优化。"
tags: ["模型剪枝", "音频大模型", "高效推理", "端侧运行", "音频问答"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:masztalski26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/masztalski26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/masztalski26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a1a33f0c73543cd4b76de18f05856e07ee3d797e60365dbbdfcd2e9d38c35f3e"
paper_digest_api_reader_plan_sha256: "e553f536f5b13b8d49bc03c7e9f7b238ccb2b6c28bad1856e0d79e07f37e06b2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e3d93e0dcc3f966589bdd92718445a10a49d4874720e3c2dcc16074bc8726efd"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3cefd78016461e10cd714dfb7684d2ad6e353872ef0e60092162eddec30a63d6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f692a453b5d3dca49c4cbbab32c9b09d1af762dd9b86f519d2be30447a0878f5"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4b3dd91dd353bac460b051d612f6b992efa717e90f7de326e7f874547b673aca"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 7.8
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 小参数做音频问答：Samsone 用裁剪与数据配比换端侧可用性

> 英文题目：*Samsone: A Family of Open Small Audio Language Models for On-Device Inference*

> 会议身份：`conference:interspeech:2026:conference-paper-id:masztalski26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/masztalski26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/masztalski26_interspeech.pdf)

标签：#模型剪枝 #音频大模型 #高效推理 #端侧运行 #音频问答

评分：**7.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：模型报告

## 👥 作者与机构

- Piotr Masztalski：机构信息未能从会议 PDF 纯文本可靠映射
- Michał K. Grzeszczyk：机构信息未能从会议 PDF 纯文本可靠映射
- Olaf Sikorski：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作处理音频问答（Audio Question Answering）与音频字幕生成任务，输入为单个或多个可变长音频波形加文本指令，输出为自然语言回答或字幕，难点是在百兆参数预算下同时保持细粒度听觉接地与跨声音、音乐、语音的复杂推理。首先Whisper-Tiny编码器提取帧级特征并池化为50个音频令牌，其输出经双线性加GeLU加残差加层归一化的投影器对齐到文本维度。随后对齐音频嵌入与文本嵌入及分隔符SEP拼接为多模态序列，最后送入SmolLM2解码器自回归生成，实现感知对齐到推理的衔接。与Pengi、Mellow相比，关键差异是词汇裁剪加深度裁剪轻量化与百万级推理问答混合训练，而非更换主干。在 MMAU-Test 平均准确率上 Samsone-134M 达 61.33%，超越 Mellow 的 53.34% 并接近 Audio Flamingo 2 的 61.06%；在更难的 MMAU-Pro 上达 37.57%，相对 Mellow 的 27.50% 提升约 10.07 个百分点，但仍低于 Audio Flamingo 3 的 51.70% 和 Qwen2-Audio-Instruct 的 45.41%。该结论限于短音频理解与选择题式评测，对长时空推理、开放字幕质量与通用语言能力保持尚未充分验证。训练在单张 NVIDIA RTX PRO 6000 Blackwell 96GB 上进行 100 轮次、每轮次 200000 样本，手机端在 Samsung Galaxy S25 Ultra 上生成速度随规模为 39 到 125 token/s。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/SamsungLabs/samsone> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/soham97/mellow> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决什么矛盾？

本文的输入是音频信号加文本提示，输出是文本回答。目标读者是刚进入语音音乐音频方向的研究生，需要先建立可复述的链条：音频进来后变成什么表示，语言模型如何读懂它，最终如何生成答案，以及在手机上跑起来要付出什么代价。必须保留的信息包括模型结构三件套、3 种参数规模、训练数据构成、训练配置、评测基准与端侧延迟条件，本文不做营销式判断，只按原文证据讲支持与限制。

白话先讲小音频语言模型，也就是参数少于 10 亿、能在端侧运行的音频语言模型，英文是 Small Audio Language Models，缩写为 SALMs。后文统一简称小模型。相对的是大音频语言模型，即参数通常在数十亿量级的音频语言模型，英文是 Large Audio Language Models，缩写为 LALMs，后文简称大模型。论文的中心矛盾是大模型效果好但难以部署，小模型能部署但此前推理能力不足，Samsone 试图在公开数据条件下把小模型推到可用水平。

**小音频语言模型 × 大音频语言模型：** 小音频语言模型指参数少于 10 亿、面向端侧低延迟与隐私的模型，大音频语言模型指通常 3B 到 9B、追求更强推理与知识的模型，二者分工不同，本文用小于 1B 为界划分搭配讨论，是为了说明在音频领域小模型仍可通过数据与结构优化接近大模型。

本解读按学习依赖展开：先讲任务与相关路线，再讲方法全景与组件计算，然后讲训练构造与推理流程，接着讲实验条件、主结果与反证，最后讲复现与收束。教学中举的例子会明确标为例子，例如把一段水声加一句请描述该音频作为输入走完全流程，这只是帮助理解流程的例子，不代表原文评测了该样本，也不附加无来源的分数。

### 此前路线做了什么，Samsone 与它们有何不同？

传统做法是按任务建专用结构，例如声音分类、音频描述、说话人识别各用一套模型。近期路线是统一为音频问答，也就是 Audio Question Answering，缩写为 AQA，把多种音频任务都变成听音频再用文字回答。这种统一依赖音频文本对训练，也依赖合成的高推理数据集，例如 OpenAQA、ReasonAQA 和 AudioSkillsXL。

在小模型一侧，Pengi 开创了把音频任务当作文本生成的做法，参数为 323M，但训练文本多样性有限，复杂推理较弱。Mellow 参数为 167M，用了 ReasonAQA 数据集，在小模型中曾是较强基线，但实际手机部署与基准测试仍少有人做。在大模型一侧，Audio Flamingo 2 与 Audio Flamingo 3、Qwen2-Audio-Instruct、SALMONN、LTU、GAMA 等参数从 3B 到 13B 不等，能力覆盖长音频理解与专家推理，但计算与隐私成本高。

Samsone 的不同在于三点。第一是明确面向端侧，结构选择小编码器加小解码器，并做词汇表与深度的裁剪。第二是训练只用公开可得数据，强调可复现。第三是真正导出到手机并测延迟，还提供安卓应用演示。这不是在同条件下否定大模型，而是在不同运行阶段做对照：大模型代表服务器侧上限，小模型代表端侧可用性。

### 任务如何定义，评测要回答哪些具体问题？

论文研究的任务包括音频理解、音频描述和音频问答。音频理解要求模型听懂声音音乐语音中的事件与关系，音频描述要求生成对音频内容的文字说明，音频问答要求根据问题给出选择或简短回答，还有音频蕴含判断，即判断文字陈述是否被音频内容支持。

评测要回答的问题是：在相同问答协议下，小参数模型能否超过此前小模型最优，能否接近大模型；在更难的长音频、空间推理、多音频条件下优势是否还在；在简单问答与描述任务上是否稳定；结构中的编码器、投影器、语言模型各自是否必要；在手机中央处理器上生成速度是否满足实时。这些问题分别对应 MMAU、MMAU-Pro、Clotho 与 AudioCaps 衍生任务、消融实验与端侧延迟测试。

需要提醒初学者：数值相同不代表同一指标，百分点与相对百分比也不同。MMAU 的准确率与描述任务的 SPICE 分数不能直接比较，MMAU-Test-mini 与 MMAU-Test 也不能混为一谈。后文每个数字都会核对数据集、模型、阶段、指标与聚合对象。

### 方法全景：一个样本如何走完输入到输出？

先沿一个例子走完全流程。例子输入为一段水声音频加用户提示请描述该音频。音频先进入音频编码器得到帧级特征，再经时间平均池化压缩为固定长度的 50 个音频词元表示。文本提示先经分词器变为词元，再经嵌入层变为文本嵌入。两类嵌入与可训练的分隔嵌入拼接后送入语言模型的 Transformer 层，最终由语言模型输出层逐词生成回答，例如包含水声的描述。这只是流程例子，不附加效果数值。

整体结构如图 2 所示，包含音频编码器、投影器和语言模型三部分，并演示了模型导出到手机的过程。读图时注意两条输入路径如何汇合，以及导出箭头指向的端侧执行位置。

> **看图路径：** 1. 先沿左侧音频信号与用户提示两条输入路径，看到编码器与分词器的分工位置；2. 再看中间投影与嵌入层汇合处，观察可分离标记如何插入音频与文本之间；3. 最后看右侧模型导出到手机的箭头，确认端侧执行的输出示例位置

[![原论文 Figure 2：Samsone family of SALMs consisting of Audio Encoder, projector and Language Model with on-device…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9704f9c46784/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9704f9c46784/figure-2.png)

*论文图 2。原论文 Figure 2：“Samsone family of SALMs consisting of Audio Encoder, projector and Language Model with on-device execution example.”。*

从图中可见左侧为多段音频信号与用户提示两路输入，中间为编码器投影与嵌入层的对齐与拼接，右侧为语言模型生成回答再导出到手机界面。火焰图标表示训练时更新的部件，雪花图标表示冻结的部件，这种分工决定了梯度路径与监督来源，后文训练节会按原文交代冻结与更新范围。该图支持的判断是结构为标准三件套，限制是图中不能读出具体参数量与延迟数值，需回到表格核对。

### 三个组件各自算什么，为什么这样搭配？

白话先讲音频编码器，英文是 Audio Encoder，缩写为 AE。它负责把音频变成机器可读的特征序列。本文选用 Whisper 编码器中的 Tiny 版本作为音频主干，初始化自 openai/whisper-tiny。白话再讲模态投影器，英文是 modality projector。它负责把音频特征维度映射到文本嵌入维度。本文采用非线性投影器，由两个线性层加中间的 GeLU 激活组成，后接残差连接与层归一化，其输出序列长度与输入音频嵌入序列长度相同。

**音频编码器 × 模态投影器：** 音频编码器负责把波形或频谱变成帧级音频特征，模态投影器负责把该特征维度对齐到语言模型的文本嵌入维度，二者搭配的原因是音频与文本表示空间不一致，组合后语言模型才能把投影后的音频嵌入与文本嵌入拼接成统一输入进行处理。

白话再讲语言模型解码器，英文是 Language Model，缩写为 LM。本文选用 SmolLM2 的 135M 与 360M 版本，基于 LLaMA2 结构。文本先经 SmolLM 分词器与嵌入层得到文本嵌入，再与投影后的音频嵌入拼接。原文还引入可训练的 SEP 词元，在音频词元之前、之后以及多段音频之间插入，用于分隔音频与文本并保留音频数量信息，使模型能处理任意数量、任意位置的可变长音频输入。

**可分离标记 × 多音频输入：** 可分离标记是可训练的 SEP 词嵌入，多音频输入指 1 次输入中包含任意数量、任意长度的音频段，前者分工是在音频嵌入之间以及音频与文本之间插入分隔，后者需要这种分隔才能保留音频数量信息并允许音频出现在输入任意位置，组合后模型能区分模态并对齐多段音频。

尺寸优化有两个动作。白话先讲词汇表缩减，英文是 Vocabulary Reduction，缩写为 VR。SmolLM2-135M 的嵌入维度为 576，词汇量为 49152，仅嵌入层就超过 28,000,000 参数，约占总量 21%。做法是把训练文本限制为小写 ASCII 字符，并过滤含超过 4 个空白字符或超过 3 个特殊字符的词元，共删去 15042 个词元，使嵌入矩阵减少 8,700,000 参数。白话再讲深度剪枝，英文是 Depth Pruning，缩写为 DP。做法是直接移除部分 Transformer 层，在 SmolLM2-135M 上去掉一层约减少 3,500,000 参数。

**词汇表缩减 × 深度剪枝：** 词汇表缩减通过删减不常用词元来减小嵌入矩阵，深度剪枝通过直接移除部分 Transformer 层来减小解码器深度，前者针对嵌入参数占比过高，后者提供可控的容量与体积折中，二者组合使 Samsone-99M 同时压缩嵌入与深度而 Samsone-134M 只压缩嵌入。

3 种变体由此得到。Samsone-134M 用 SmolLM2-135M 主干加词汇表缩减，总量约 134M。Samsone-99M 在缩减词汇表基础上把 30 层截为 20 层，去掉最后 10 层，总量为 99M。Samsone-356M 用 SmolLM2-360M 主干加词汇表缩减，总量为 356M。三者共享 Whisper-Tiny 结构的编码器，编码器约 9M，投影器为 0.5M 或 1M，语言模型部分分别为 90M、125M 与 347M。原文未给出逐层梯度公式，本节不猜梯度路径，只讲模块分工与参数构成。

### 训练数据、处理与优化过程如何复现？

训练数据为两部分。

**ReasonAQA × AudioSkillsXL：** ReasonAQA 是约 1,000,000 问答对、强调推理且包含双音频推理的训练集，AudioSkillsXL 是约 8,000,000 问答对、覆盖声音音乐语音的大规模训练集，前者提供推理多样性，后者提供覆盖广度，二者搭配训练是为了同时提升复杂问答与基础听觉理解。

数据处理有两个关键动作。一是对 ReasonAQA 选择题子集的类别不平衡做修正，原文发现选项 b 为正确答案的比例过高，超过其他选项之和，会使模型偏向选第二个选项，缓解方法是在训练时随机打乱答案选项顺序，使正确答案分布均匀。二是因 SmolLM 基础模型不使用提示模板，在提示后附加后缀字符串 answer:以显式分隔模型回答。这些是可直接复述的操作。

训练设置为单阶段流程。原文报告尝试了大模型常用的多阶段训练策略，但未观察到性能增益，因此采用单阶段。所有部件中除语言模型嵌入层外其余均可训练，投影器结构沿用 Mellow 引入的非线性结构。每个模型训练 100 轮，每轮含 200000 个训练样本，在单块 NVIDIA RTX PRO 6000 Blackwell 96 GB 上训练。使用 AdamW 优化器加余弦退火学习率调度，包含 10 轮线性热身，最小学习率为 1e-7。

Samsone-99M 与 Samsone-134M 学习率为 3e-4，Samsone-356M 为 1e-4。损失为标准词元级交叉熵。训练后用 ExecuTorch 经 XNNPACK 导出检查点用于端侧推理。原文未报告批量大小与权重衰减等其余超参数细节，这是复现时的缺项，不从模型名称推定。

推理时为保证可复现，所有实验采用贪婪文本解码策略，即每步选概率最高的词，不做采样。

### 评测条件：数据、基线、指标与硬件是什么？

评测覆盖 4 类条件。第一是海量多任务音频理解基准 MMAU，含 10000 个人工标注问答对，覆盖声音、音乐、语音三域，要求专家知识与复杂推理，报告 Test-mini 与 Test 两个划分。第二是更难的 MMAU-Pro，含 5305 个问答实例，测试长音频理解、空间推理与多音频理解。第三是描述与简单问答，基于 AudioCaps 与 Clotho 的描述任务用 SPICE 指标，ClothoAQA 测问答准确率，Clotho 与 AudioCaps 的蕴含任务分别记为 CLE 与 ACE。第四是消融与端侧延迟，消融在 MMAU 上替换编码器、投影器与语言模型，端侧在三星 Galaxy S25 Ultra 中央处理器上用 15 个音频问题对测延迟。

基线包括小模型侧的 Pengi 与 Mellow，以及大模型侧的 LTU、GAMA、SALMONN、Qwen2-Audio-Instruct、Audio Flamingo 系列与 GPT-4o Audio。需要特别说明 Mellow 对比的是改进后的 v0 版本，该版本在原文发表后才公开，地址为公开代码库。指标方向为准确率与 SPICE 越高越好，延迟中音频处理与查询处理以毫秒越低越好，生成以每秒词元数越高越好。所有主结果均在贪婪解码下得到，保证了解码条件一致。

### 主结果：在什么条件下小模型超过了谁？

先看 MMAU 与 MMAU-Pro 的比较问题：在相同问答协议下，小参数 Samsone 是否超过此前小模型最优，以及与大模型的差距还有多大。公平条件是同为音频问答准确率，指标越高越好，Mellow 取改进后版本。下表整理了原文报告的平均准确率与 MMAU-Pro 分数，参数量保留原文写法。

| 模型 | 参数量 | MMAU 平均 Test-mini | MMAU 平均 Test | MMAU-Pro |
| --- | --- | --- | --- | --- |
| Mellow | 167M | 52.30 | 53.34 | 27.50 |
| Samsone-99M | 99M | 57.20 | 58.13 | 36.83 |
| Samsone-134M | 134M | 63.00 | 61.33 | 37.57 |
| Samsone-356M | 356M | 63.70 | 62.00 | 40.67 |

表后解释需要同时讲收益与代价。收益是 Samsone-99M 以少 40% 以上参数超过 Mellow，Samsone-134M 在 MMAU 上进一步拉开差距，在 MMAU-Pro 上相对 Mellow 提升约 34% 至 36%。原文还报告 Samsone-134M 超过 60 倍大的 Qwen2-Audio 同类对比对象并与 Audio Flamingo 2 接近，但代价是与最强的 Audio Flamingo 3 仍有差距，且 MMAU-Pro 上大模型因内置知识仍略占优。未胜出项是语音域相对声音与音乐域提升较小，说明复杂语音推理仍是边界。图 1 从参数与分数的散点视角展示了这一格局。

> **看图路径：** 1. 先看横轴模型尺寸与纵轴 MMAU-Test 分数的含义，确认左侧为小模型右侧为大模型；2. 再看红色小圆点与橙色 Mellow 点的上下关系，确认新模型是否高于此前小模型最优点；3. 最后沿红色虚线向右比较蓝色大模型圆点，判断小模型与大模型的分数重叠区间

[![原论文 Figure 1：Samsone establishes the new state of the art on the MMAU benchmark among SALMs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9704f9c46784/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9704f9c46784/figure-1.png)

*论文图 1。原论文 Figure 1：“Samsone establishes the new state of the art on the MMAU benchmark among SALMs.”。*

从图中可见横轴为以 1000000000 参数为单位的模型尺寸，纵轴为 MMAU-Test 分数，左侧浅色区为小模型，右侧为大模型。红色小点代表 3 个 Samsone 变体，位于高于橙色 Mellow 点的位置，并有一条红色虚线向右延伸，可与蓝色大模型圆点对比。该图支持的判断是小模型在该分数上达到新的小模型最优并与部分大模型重叠，限制是圆点大小与具体域分数需回表核对，不能从图上估读精确数值。

### 换掉关键部件会发生什么，哪些细节支持结构选择？

消融要回答的问题是：编码器、投影器与语言模型的选择是否必要。公平条件是以不做词汇表缩减的 143M 版本作为基线，记为 Samsone-134M-NP，在 MMAU-mini 与 MMAU 上比较。原文报告将音频编码器换为 AST 后尺寸增至 221M 但分数下降，将语言模型换为 GPT-2 后分数下降，将投影器换为线性层后分数也下降。这显示原文的三件套搭配在尺寸与理解能力上更均衡。

除核心结果外，论文还有两类特有细节值得展开。第一是简单问答与蕴含任务。下表为原文报告的描述与问答对照，SPICE 越高越好，准确率越高越好。

| 模型 | AudioCaps 描述 SPICE | Clotho 描述 SPICE | Clotho 问答准确率 | 蕴含 CLE 准确率 | 蕴含 ACE 准确率 |
| --- | --- | --- | --- | --- | --- |
| Mellow 167M | 17.8 | 9.4 | 71.4 | 91.2 | 89.7 |
| Samsone-99M | 14.4 | 11.1 | 71.8 | 92.4 | 89.1 |
| Samsone-134M | 14.4 | 11.6 | 73.8 | 93.4 | 93.7 |
| Samsone-356M | 14.9 | 11.7 | 74.5 | 93.7 | 93.5 |

表后解释为：Samsone 在简单问答与蕴含任务上全面超过小模型基线，尤其蕴含任务显示音频接地较好，在 Clotho 描述上也超过 Mellow。反例是 AudioCaps 描述的 SPICE 低于 Mellow，原文归因于完整训练集中 AudioCaps 占比低于 Mellow 原训练时的占比，这提醒描述分数受数据配比影响，不能直接当成模型能力上限。第二是训练数据修正动作，即打乱选择题选项顺序以消除对选项 b 的偏好，以及附加 answer:后缀以分隔回答，这些是复现时必须照做的细节。

### 已验证的限制与尚未验证的推测有哪些？

论文直接报告的限制有三项。第一是广泛的问答微调使语言模型失去通用语言能力，即模型更擅长音频问答但通用文本能力下降。第二是以参数量作为效率代理指标，但近期精度感知扩展律提示更大的量化模型可能在性能与内存折中上更优，本文未验证该折中。第三是未实现针对移动图形处理器或神经网络加速器的硬件级优化，未来才会探索。

需要区分表述强度。报告与显示用于已测事实，例如 Samsone 在 MMAU 上超过 Mellow。支持用于有限解释，例如把 MMAU-Pro 提升归因于更多样与更大规模的训练混合。可能与待验证用于未测推测，例如未测误判率与功耗时不能承诺这些量得到改善，总体趋势不等于每组每步都成立。相关性不是因果，尺寸增大与分数上升相关，但不能据此断言每加一层必涨多少分。

未评测边界包括长音频的极端时长、多轮对话稳定性、噪声与口音鲁棒性，以及端侧发热与电量条件下的持续吞吐。这些缺失不是技术错误，但复现与选型时必须补验证。

### 要复现应先做什么，需要哪些代码与权重？

复现先做三件事。第一是准备数据与环境，按原文用 ReasonAQA 与 AudioSkillsXL，复现选项打乱与小写 ASCII 过滤及后缀处理，安装 PyTorch 与 pytorch-lightning 及 Transformers 库。第二是按初始化复现结构，用 Whisper-Tiny 编码器与 SmolLM2 主干搭建编码器加投影器加解码器，复现 50 词元池化与 SEP 插入，再做词汇表缩减与按需深度剪枝。第三是按训练配置跑单阶段训练并用贪婪解码评测 MMAU 划分，避免引入多阶段或采样解码造成条件不一致。

开源状态按资源状态核对。训练代码、模型权重、移动优化检查点与安卓应用的仓库本次可达，状态为可用，可以写当前已公开。第三方 Mellow 代码库本次也可达，可用于复现改进版 Mellow 基线。关键超参数保留信息条件：100 轮、每轮 200000 样本、热身 10 轮、最小学习率 1e-7、Samsone-99M 与 134M 学习率 3e-4、356M 为 1e-4、损失为词元级交叉熵、单卡为特定型号。缺项为批量大小与权重衰减等，需在复现报告中明确标注未报告，不自行编造。

端侧复现需用 ExecuTorch 经 XNNPACK 导出，并在三星 Galaxy S25 Ultra 中央处理器上用 15 个音频问题对测延迟。下表为原文报告的端侧延迟，音频与查询处理以毫秒计越低越好，生成以每秒词元数计越高越好。

| 模型 | 音频处理毫秒 | 查询处理毫秒 | 生成速度每秒词元数 | 测试硬件 | 测试样本数 |
| --- | --- | --- | --- | --- | --- |
| Samsone-99M | 667 | 15 | 125 | Galaxy S25 Ultra 中央处理器 | 15 |
| Samsone-134M | 757 | 23 | 87 | Galaxy S25 Ultra 中央处理器 | 15 |
| Samsone-356M | 1116 | 47 | 39 | Galaxy S25 Ultra 中央处理器 | 15 |

表后解释为：生成速度随尺寸增大而下降，99M 达每秒 125 词元，134M 为 87，356M 为 39，确认了实时边缘应用的可行性。代价是音频处理仍需数百毫秒，且结果未做硬件级优化，不能推广到其他芯片或加速器。未胜出项是 356M 在延迟上明显高于两款小模型，选型时需权衡推理增益与延迟成本。

### 何时值得尝试，复述方法的主干是什么？

当任务是离线、隐私敏感或重复性强的音频问答，且设备预算在百兆参数量级时值得尝试 Samsone 路线。当需要开放域复杂推理上限或长文档知识时，大模型仍更合适，小模型不能替代。

复述方法主干可用一段话完成：音频经 Whisper-Tiny 编码并池化为 50 个词元，经非线性投影器对齐到 SmolLM2 嵌入空间，与文本嵌入加可训练 SEP 拼接后送入解码器生成回答，训练前做词汇表缩减，99M 版本再做深度剪枝，数据用 ReasonAQA 加 AudioSkillsXL 并打乱选项顺序，单阶段交叉熵训练 100 轮，贪婪解码评测，导出后在手机中央处理器上测延迟。

还需补的验证包括量化后的性能内存折中、移动图形处理器与加速器上的真实延迟、通用语言能力下降的量化评估，以及 AudioCaps 占比调整后描述分数的变化。只有补齐这些，才能把参数量优势真正换成可部署收益。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
