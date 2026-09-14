---
title: "Multimodal Evaluation of Russian-language Architectures"
date: 2026-09-11
draft: false
description: "针对俄语尚无多模态基准的问题，论文用统一技能分类、块式提示、双指标评分与防泄漏机制构建 18 任务基准，最强证据是全覆盖全模态模型的 Total Score 达到 0.5 且提示 формулировка显著改变分数，代价是专家题人类基线仍低且音频视频能力明显弱于图像。"
tags: ["基准测试", "数据集", "基准设计", "音频问答"]
categories: ["eacl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eacl:2026:conference-paper-id:2026.eacl-long.94"
paper_digest_source_kind: conference
paper_digest_conference_id: "eacl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.eacl-long.94/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.eacl-long.94.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b37b4849661988026b8cc3f234fd55866d2281d728f3e788a6b1b3e7999f1919"
paper_digest_api_reader_plan_sha256: "22b804d6061bfd442e953dfe9afc5cfd77444d1bbfec8e875c89d432db4bec85"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "82fb3a572533037e850c1a625edffb2945204cbbb3a4818c2fdb37aed16e374b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3d4b37e4d59c53b99e974b904faf6059fbb6aa79cc8a2d6dd8eefa8fa099fec9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f6c6a26c07616fe67e73bfd02713d6e1932ce340b5be189ced522297c60575fb"
paper_digest_api_reader_author_count: 18
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3eef33ff9c94120feeeda324bd6f8d656e9faf844a0f4fe902b890a678d626a2"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 为俄语补上多模态标尺：MERA Multi 如何把 18 个任务拧成一套可复现评测

> 英文题目：*Multimodal Evaluation of Russian-language Architectures*

> 会议身份：`conference:eacl:2026:conference-paper-id:2026.eacl-long.94`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.94/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.94.pdf)

标签：#基准测试 #数据集 #基准设计 #音频问答

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Artem Chervyakov：机构信息未能从会议 PDF 纯文本可靠映射
- Ulyana Isaeva：机构信息未能从会议 PDF 纯文本可靠映射
- Anton Emelyanov：机构信息未能从会议 PDF 纯文本可靠映射
- Artem Safin：机构信息未能从会议 PDF 纯文本可靠映射
- Maria Tikhonova：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Kharitonov：机构信息未能从会议 PDF 纯文本可靠映射
- Yulia Lyakh：机构信息未能从会议 PDF 纯文本可靠映射
- Petr Surovtsev：机构信息未能从会议 PDF 纯文本可靠映射
- Denis Shevelev：机构信息未能从会议 PDF 纯文本可靠映射
- Vildan Saburov：机构信息未能从会议 PDF 纯文本可靠映射
- Vasily Konovalov：机构信息未能从会议 PDF 纯文本可靠映射
- Elisei Rykov：机构信息未能从会议 PDF 纯文本可靠映射
- Ivan Sviridov：机构信息未能从会议 PDF 纯文本可靠映射
- Amina Miftakhova：机构信息未能从会议 PDF 纯文本可靠映射
- Ilseyar Alimova：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Panchenko：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Kapitanov：机构信息未能从会议 PDF 纯文本可靠映射
- Alena Fenogenova：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该基准输入为俄语指令文本叠加图像或音频或视频证据，要求模型生成多选或短自由文本答案，难点在于西里尔文字识别、苏联民俗常识与跨模态推理耦合，且此前无俄语多模态评测标准。方法先以感知、推理、知识三类体系映射技能缺口，其输出直接决定18个任务的新建与改编构成。接着以多变体块提示将同一任务送入严格生成式评测，其自由输出进入双指标聚合。然后以精确匹配加裁判模型语义分计算任务分与总分，其总分排序进入基线对比与防护分析。与已有英语中心基准的关键差异是文化原生构建而非翻译移植，并将水印加成员推断作为可复用防护流程，实际意义在于支撑非英语文化感知评测。在视频模态基准下，Qwen2.5-VL-72B-Instruct的Total分数为0.63，低于人类基线的0.92。结论适用边界限于俄语理解型问答与短答案生成，尚未验证长视频、开放对话与偏见安全场景。裁判训练与评测的硬件为单块A100且推理开销受硬件软件栈波动影响，跨机复现分数可能受限。

## 🔗 开源与复现资源

- 模型相关资源：<https://hf.co/deepvk/RuM> → <https://huggingface.co/deepvk/RuM> — 暂时无法访问
- 数据相关资源：<https://hf.co/datasets/pingzhili/vqa_v2> → <https://huggingface.co/datasets/pingzhili/vqa_v2> — 暂时无法访问
- 第三方资源：<https://github.com/vllm-project/vllm> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.deepl.com/products/api> → <https://www.deepl.com/en/products/api> — 链接可访问（HTTP 200）
- 第三方资源：<https://app.elementary.center> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：为什么俄语需要单独做多模态基准？

这篇论文的输入是俄语语境下的多模态评测缺口，目标是给刚进入语音图像视频领域的研究生一套可核对、可复述的方法。必须保留的信息包括任务划分、数据来源、提示与指标定义、聚合方式、基线条件与防泄漏做法，输出是 1 篇按学习依赖展开的技术解读。

已有英文通用基准覆盖文本图像音频视频，但论文指出它们忽视斯拉夫语言的语言文化细节。俄语不仅是西里尔字母，还有民俗、苏联媒体等母语者熟悉、外人陌生的概念，直接翻译英文题会失真。此前俄语基准只做文本，例如 Russian SuperGLUE 和 MERA 文本版，多模态部分是空白。

因此作者提出 MERA Multi，定位是指令型、文化扎根的评测框架。文本被视为默认模态，所有任务都带文本输入，不再单独计数；显式评测的是图像、音频、视频 3 类。基准共 18 个新建任务，覆盖通用模型与图像转文本、视频转文本、音频转文本等专用结构。论文同时强调方法可复制到其他形态丰富语言，特别是斯拉夫语系。

### 相关路线：文本评测与多模态评测各解决了什么？

文本评测路线从 GLUE、SuperGLUE 开始，解决自然语言理解的统一度量，后续出现 BIG-bench、HELM、MMLU 等强调指令、推理与学科覆盖。俄语路线跟进做了 Russian SuperGLUE、TAPE、RuCoLA 和指令型 MERA，但都停在纯文本，没有处理图像声音视频与语言的对齐。

多模态路线分三支。第一支是通用表示学习，例如 MultiBench 覆盖 10 种模态，强调跨模态表示。第二支是视觉推理，例如 MMBench 做细粒度视觉推理与中英双语，MMMU 做专家级推理，SEED-Bench 做生成式理解。第三支是语音与视频专项，例如 SUPERB 统一语音任务，STAR、InfiniBench、Video-MME 做时序与长视频理解，General-Bench 做大规模能力覆盖。

同输入同目标对照下，这些基准的输入多为英文图像文本或英文语音，目标是通用能力排名，监督多来自英文标注，运行阶段多为单次问答。MERA Multi 的不同在于输入固定为俄语问题加俄语文化相关多模态材料，目标是俄语能力与文化适应性，监督来自俄语新采数据，运行阶段强调多提示平均与格式受控生成。因此不能把英文榜单分数直接当俄语结论，类别差异不应视为同条件胜负。

### 任务如何定义：测什么能力，以什么形式作答？

论文把评测对象定义为多模态大语言模型，任务是给定俄语指令加图像或音频或视频，生成简短自由文本答案。作答形式只有两类：四选一选择题与开放式短答。所有评测都是生成式，模型一直生成到停止条件，输出直接用于评分，只有一个口语理解数据集需要最小解析。

能力定义依赖统一技能分类。顶层分 3 类：知识、感知、推理。感知是从信号中抽取证据，例如识别物体、声音事件、动作；知识是调用长期语义记忆，例如常识、学校学科知识、专家知识与伦理规范；推理是在证据与知识上做推导，例如计数、排序、因果、多步推理。

每个数据集被映射到多个原子技能，而不是单技能标签。举例：同一道视觉问答可能同时需要物体识别、图像文字识别与因果推理。

一个样本的走查有助于建立直觉。以 RealVQA 为例，输入是一张众包实拍图加俄语问题，问题可能是根据视觉线索推断星期几。模型先看图抽取证据，再调用常识推理，最后输出短语。教学例子仅用于说明流程，不附加论文之外的数值或效果断言。

### 方法全景：四个组件如何串成一次可复现评测？

论文的方法全景由四部分串联。第一是块式提示，保证跨模态表述一致又有多样性。第二是双层指标，用符号正确性与语义正确性互补。第三是聚合与跨模态加权，把任务分折算成可比的总分。第四是提交协议，用代码仓库加平台自动评分加人工可复现核查。

下面导读总览图，先看整体分区再看箭头与数字含义。该图把 18 个任务、技能分类、提示模板、复合评分与内容保护放在同一版面，是理解全文结构的入口。

> **看图路径：** 1. 先从中间 18 任务方块看公开与私有、选择与开放作答的任务数分布；2. 再看左侧复合评分公式与右侧三类技能数量的对应关系；3. 最后看右侧提示模板块与左侧水印许可检测块如何闭环

![原论文 Figure 1：Overview of MERA Multi. The benchmark unites multimodal evaluation, taxonomy-based skill as-…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eacl-2026/6e200de819e5/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of MERA Multi. The benchmark unites multimodal evaluation, taxonomy-based skill as- sessment, and data leakage protection across 18 tasks covering (default) text, image,…”。*

该图左侧给出复合评分取 ExactMatch 与 JudgeScore 平均，中间区分公开改编数据与从零新建私有数据，并按选择题与开放题拆格，右侧给出感知 27 项、推理 25 项、知识 4 项的技能规模，以及 10 个固定提示与 14 个提示参数。最左侧单独列出水印、许可与泄漏检测，说明防污染是与评分并列的一等组件。像素显示深色底上的分区标题与彩色条块，阅读时应以分区文字为准，不猜测未标注的连线含义。

### 组件与计算：提示、双指标与总分如何算？

提示组件采用块式结构。固定块包括注意钩、任务描述、输入数据描述、数据操作、文本问题、选项、求解召唤、推理要求、推理格式、答案格式、时间限制与最终行动召唤，共 13 类块。实现时用配置文件组合出 10 个提示，其中 5 个含推理要求，1 个是仅给数据占位、问题与选项的零提示。同一任务的样本均匀分配不同提示，最终指标是跨提示平均。论文用回归控制模型与推理后端后检验提示效应，发现单提示会带来显著偏移，这支持了多提示设计的必要性。

**ExactMatch × JudgeScore：** ExactMatch 负责符号层正确性，用归一化字符串比较检查事实与格式是否严格一致；JudgeScore 负责语义层正确性，用训练好的判分模型判断预测与参考答案是否实质等价。二者搭配的理由是生成式评测中模型常语义对但格式错，或能抽出答案但推理矛盾，组合后 FinalScore 取二者平均，既保留格式约束又不误杀语义正确的回答。

评分组件用 ExactMatch 与 JudgeScore。ExactMatch 是生成式准确率，做归一化字符串比较，对格式敏感。若提示要求在特定词后写答案，则取完整回答与该词后片段二者中的最大 ExactMatch。JudgeScore 是问题条件下的语义等价二分类，输入为问题、参考答案、模型预测，输出 1 表示实质一致否则为 0。任务最终分是二者平均。判分模型基于 RuModernBERT 编码器加线性头训练，论文报告其在保留测试集上表现可靠。

**Attempted Score × Coverage：** Attempted Score 分工是衡量模型在已尝试任务上的质量，按模态等权再归一化；Coverage 分工是衡量模型实际覆盖了多少基准广度。搭配理由是通用模型与专用模型尝试的任务数不同，若直接补零会不公平，组合成 Total Score 等于二者相乘后，既能单榜比较又保留分模态榜，让专才靠质量取胜、通才靠广度取胜。

聚合组件把模态视为等权。设共有图像音频视频 3 类模态，每类任务数不同，先在模态内平均，再跨模态处理。Attempted Score 是已尝试任务上的质量，Coverage 是已尝试任务占全部的比例，Total Score 是二者乘积。这种设计使加任务只改变广度而不改变已尝试质量，且任务多的模态不会因数量压倒其他模态。

**水印 × 成员推理泄漏检测：** 水印分工是在私有数据的图像视频叠加标识、音频嵌入人耳不可闻神经水印，用于事后溯源；成员推理泄漏检测分工是通过比较模型在原始样本与语义扰动邻居上的损失差异，判断某样本是否进过训练集。二者搭配的原因是许可禁止用基准训练需要技术抓手，水印管预防与追踪，检测管事后验证，共同保护私有评测集。

防泄漏组件包括水印与检测。图像视频叠加 MERA Multi 可见水印，音频用 AudioSeal 做局部不可闻神经水印。检测用多模态语义成员推理攻击，对文本做掩码、删除、复制、交换生成邻居，保持多模态配对不变，比较原始与邻居的损失与嵌入差异，训练二分类器判断样本是否进过训练。

### 没有训练大模型时，真正被训练和构造的是什么？

本研究没有训练被评测的多模态大模型，基线均为调用已有开源权重与闭源接口。真正发生训练的是判分模型，以及用于验证的泄漏检测器；真正发生构造的是 18 个数据集与提示实例。不能把参数冻结等同于输出确定，生成解码与软硬件栈仍会带来波动。

**块式提示 × 多提示平均：** 块式提示分工是把提示拆成注意钩、任务描述、输入描述、推理要求、答案格式等固定块，每数据集实例化 10 个表面形式不同的提示；多提示平均分工是把同一任务分数在 10 个提示上取平均。搭配原因是统计检验显示单个提示会显著拉高或拉低分数，组合后用平均消除单提示偶然性，使跨模型比较更稳健。

判分模型训练过程是二分类微调。数据为三元组，包含问题、金答案、2B 到 110B 不同模型的预测，经人工标注语义正确性，只保留标注者完全一致的样本，辅以拒答重复等合成增强。关键防偏做法是按来源数据集切分训练与测试，避免同一数据集同时出现在两边。输入拼接为问题分隔符金答案分隔符预测，截断到模型上下文，编码器加分类头，全量微调，交叉熵加类别权重，混合精度，在单卡上以 F1 早停。

数据集构造按公开改编与私有新建两条线。公开线如 ruCommonVQA 用 VQA v2 与 COCO 图像，ruEnvAQA 用 Clotho-AQA 与 MUSIC-AVQA 音频，ruNaturalScienceVQA 与 SchoolScienceVQA 参考 ScienceQA 思路，问题翻译后人工校对。私有线强调俄语文化与未公开，例如 AQUARIA 在录音棚新录对话背景声音乐，ruTiE 音频图像各做 3 段 500 轮连贯对话，RealVQA 与 RealVideoQA 经即时通信机器人众包且要求未公开，ruMathVQA 由专家手绘图形并统一追问图片中的题目。

推理调用过程统一为生成式。评测代码基于 lm-eval 扩展多模态输入，支持把多模态单独送处理器或嵌入聊天模板，适配指令模型与接口模型。提交时用户克隆仓库生成提交文件并上传，平台自动评分，结果默认私有，申请公开需核查日志与提交信息，通过后按图像音频视频与总榜展示，但具体输出保持私有。

### 实验条件：数据划分、指标方向与基线规模如何对齐？

数据协议上，基准共 18 个任务，图像 11、音频 4、视频 3，公开 7、私有 11。选择题与开放题并存，私有题答案仅组织者可见。人类基线通过众包与专家标注得到，控制任务加事后过滤低质标注者，专家基线用于需要学科知识的任务。论文同时给出每数据集样本量与人类基线，但解读时需注意 UniScienceVQA 的人类基线是众包而非专家，数值低不代表任务无意义。

指标方向上，ExactMatch 与 JudgeScore 越高越好，任务分是二者平均，模态分是已尝试质量乘覆盖率。JudgeScore 大于 ExactMatch 通常表示语义对但格式错，JudgeScore 小于 ExactMatch 则可能抽出答案但整体生成误导。统计上提示效应检验用最小二乘回归控制模型与推理后端，视频还控制帧数，部分数据集还控制子领域，显著性阈值为双侧 0.05。

模型基线覆盖 50 余个公开多模态模型，参数从 1B 到 110B，另有 GPT 4.1 作闭源对照。图像基线包括 Qwen、LLaVA、InternVL、Phi、Gemma、SmolVLM、MiniCPM 等，音频包括 Ultravox 系列、Qwen 音频、Audio Flamingo 等，视频包括 Qwen 视频与 LLaVA-NeXT 视频等。论文要求公开提交注明显卡与库版本，因为 GPU、驱动、PyTorch、推理框架、量化与批处理都会影响分数。

下表整理基准构成，比较问题是广度是否被某一模态或公开数据主导，公平条件是按模态等权与公私划分分别计数，指标方向是任务数越多覆盖压力越大。

| 构成维度 | 统计口径 | 图像 | 音频 | 视频 | 合计或说明 |
| --- | --- | --- | --- | --- | --- |
| 任务总数 | 数据集个数 | 11 | 4 | 3 | 18 |
| 公开改编 | 数据集个数 | 3 | 1 | 1 | 7 |
| 私有新建 | 数据集个数 | 4 | 2 | 2 | 11 |
| 作答形式 | 选择与开放并存 | 选择与开放 | 选择与开放 | 选择 | 文本为默认模态 |

该表主要说明图像任务最多但聚合时不占优，私有新建超过一半以降低污染风险。代价是任务数不均衡使单任务方差对小模态影响更大，且公开图像可能经 COCO 等间接泄漏，解读时需保留这一边界。

### 主结果：谁在总榜领先，短板集中在哪里？

主结果按总分组织，测的是跨模态广度与质量的乘积，与谁比是全覆盖全模态模型与单双模态专家在同一聚合规则下比较，条件一致性来自统一提示平均与统一双指标，指标方向为越高越好。论文报告全模态模型占据前列，Qwen 家族在图像视频占优，GPT 4.1 在图像单项强但覆盖低所以总分不高。

下表比较总分领先者的质量与广度拆解，公平条件是同一 Total 等于 Attempted 乘 Coverage 规则，指标方向为总分越高越好。

| 模型 | Total Score | Attempted Score | Coverage | 覆盖特征 |
| --- | --- | --- | --- | --- |
| Qwen3-Omni-30B-A3B-Instruct | 0.5 | 0.563 | 0.889 | 图像音频视频较强 |
| GPT 4.1 | 0.159 | 0.478 | 0.333 | 图像强但覆盖低 |
| Qwen2.5-VL-72B-Instruct | 0.302 | 0.453 | 0.667 | 图像视频强 |
| Qwen2-VL-72B-Instruct | 0.254 | 0.381 | 0.667 | 图像视频中等 |
| Qwen2.5-Omni-7B | 0.317 | 0.317 | 1.000 | 全覆盖中等 |

表后解释是广度带来总分优势，全覆盖的中等模型可超过单项强但覆盖低的模型。代价是总分高不等于每模态都强，例如部分全模态模型在某视频子集得零分，单看总分会掩盖短板。未胜出项同样重要：Ultravox 等音频专才在音频总分上低于全模态模型，LLaVA-NeXT 视频专才低于通用视觉模型，说明音频视频仍欠表示。

分模态看，图像相对成熟，自然图像语义、物体功能与常识较好，图表科学问答、表格与数学格式题明显掉分。音频在环境场景理解与时序比较上相对好，口语理解与说话人划分、严格格式抽取差。视频在场景物体与短事件识别上可用，时序定位、动作序列、计数与因果弱，伦理视频分数也低。论文用 JudgeScore 高于 ExactMatch 支持格式是主要损耗之一，但这只是有限解释，不能推出加约束解码必然补齐差距。

下面导读提示效应图，先明确每子图横轴是提示编号、纵轴是相对基线提示的 JudgeScore 变化，红色为显著。

> **看图路径：** 1. 先按行找到 AQUARIA、ruEnvAQA、ruCLEVR 等数据集子图；2. 再对比每子图内红色显著条与蓝色非显著条的高度与方向；3. 最后观察哪些数据集几乎全蓝、哪些大面积红色下偏

![原论文 Figure 3：The relative (with regard to baseline prompt (0)) effects of different formulations of prompts…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eacl-2026/6e200de819e5/figure-3.png)

*论文图 3。原论文 Figure 3：“The relative (with regard to baseline prompt (0)) effects of different formulations of prompts for each dataset.”。*

该图显示不同数据集偏好不同提示，没有统一最优。AQUARIA 与 ruEnvAQA 等出现多个显著负向红条，ruCLEVR 与 SchoolScienceVQA 也有大面积显著偏移，而 CommonVideoQA、LabTabVQA、RealVideoQA 与 ruHHH-Video 几乎全蓝。像素上红蓝图例 sig 是否显著，条形上下表示增减。这支持论文结论：单提示有偏，必须多提示平均；同时说明 ruTiE 两套对话数据对提示与顺序敏感，已被排除在该检验的常规解读之外。

### 反证与消融：水印是否改变分数，判分器是否可信？

论文的反证围绕两个可证伪问题。第一，水印是否干扰评测。第二，自动语义判分是否与人工一致。若水印显著改变分数，则防泄漏设计不可用；若判分器与人工分歧大，则 JudgeScore 不可用。

下表整理判分器可靠性，比较问题是自动判分能否替代严格字符串匹配，公平条件是同一保留测试集与人工标签，指标方向为 F1 与一致率越高越好。

| 判分对象 | 模型或条件 | F1 Score | 与 ExactMatch 一致性 | 说明 |
| --- | --- | --- | --- | --- |
| 语义判分器 | RuModernBERT 编码器 | 0.96 | 99.6% | 人工完全一致样本训练测试 |
| 选择题子集 | 同一判分器 | 未单独报告 | 98.7% | 与人工标签一致率 |
| 开放生成子集 | 同一判分器 | 未单独报告 | 96% | 与人工标签一致率 |

表后解释是判分器在相同答案上几乎与 ExactMatch 一致，在开放生成上仍保持高一致，且与答案长度、金标签位置相关接近零，支持其对常见偏置稳健。代价与反例是复杂 LaTeX 与多步推理仍易错，且判分器本身无理由生成，符号细节模糊时可能误判。未胜出项是部分解码器判分基线精度低或输出不稳定，论文因此选择编码器路线。

下表整理水印影响，比较问题是加水印前后分数差是否可忽略，公平条件是同一模型同一任务仅切换水印，指标方向为差异越小越好。

| 模态 | 水印做法 | 差异结论 | 概率表述 |
| --- | --- | --- | --- |
| 音频 | AudioSeal 局部不可闻水印 | 小于 5% | 95% |
| 图像视频 | 每帧叠加 MERA Multi 标识 | 小于 5% | 95% |
| 通常情况 | 同上 | 小于 1% | 通常 |

表后解释是 95% 概率下差异小于 5%、通常小于 1%，支持水印不显著影响评测。限制是这是区间结论而非每模型每任务都成立，且可见水印仍可能遮挡细小文字表格，论文未逐任务测量误判率与延迟，不能承诺这些量同步改善。

### 边界：哪些能力与成本尚未被证明？

论文明确承认 18 任务仍可能漏掉关键能力与领域，基准高分不能保证专用领域表现。硬件软件栈、量化、批处理与非确定性都会使分数波动，复现必须固定参数并上报环境。伦理上基准只测语义理解推理，未系统测偏见，对少数群体的影响不在本次范围。

数据层面，公开图像来自 COCO 与英文 VQA，存在间接泄漏可能；低分辨率截图题考验鲁棒性，但也使文字识别失败与推理失败混杂。众包与专家成本表显示标注有时薪与一致率差异，UniScienceVQA 一致率明显低，说明专家题本身难度大、标注分歧高。

资源层面，本次收到的官方资源状态显示部分模型与数据集链接本次未能确认可达，只有第三方工具链可达。因此复现时应优先使用论文仓库与平台提交通道，对不可达链接写明本次未能确认，不臆断已公开或已下线。训练资源、推理开销与帧率延迟在原文中未完整量化，总体趋势不等于每组每步成立。

### 复现：先做什么，需要哪些超参数与信息条件？

复现先做三件事。第一，克隆 MERA Multi 评测仓库，按提交脚本生成提交文件，注册平台账号上传，保留日志以备公开核查。第二，固定解码与推理后端，记录 GPU 型号、驱动、PyTorch、推理框架提交哈希、量化精度与批大小，因为这些都会改变生成分数。第三，对私有集只做推理不做训练，遵守非商业与禁训练许可。

关键信息条件包括 10 提示平均、ExactMatch 与 JudgeScore 双报、模态等权聚合、视频分帧数、子领域划分。判分器部署用高吞吐推理，输入为问题分隔符参考答案分隔符预测，输出二值。若需自训判分器，应按来源数据集切分防泄漏，学习率批量大小等按原文配置复刻，并以 F1 早停。

代码开源、权重下载与系统可运行要区分。论文提供评测代码与提交平台，判分模型权重在 HuggingFace 提供，但被测大模型权重需各自下载，闭源模型只能经接口调用。音频视频水印与泄漏检测代码按论文描述实现，复现时先验证水印前后分数差，再跑成员推理检测，避免把相关性当因果。

### 收束：何时值得尝试，还需补哪项验证？

当研究目标是俄语或斯拉夫语言的多模态理解、需要文化相关问答与防污染私有集时，值得尝试该基准与方法。当目标只是英文通用视觉推理时，直接用英文基准更省成本，不必迁移整套俄语流程。

还需补的验证包括偏见与安全性专项评测、延迟与成本测量、更多领域专家题，以及对表格图表文字遮挡的细粒度分析。教学上最易误解的是把 Total Score 当单项能力，把自动分当人评，把提示平均当提示最优。正确做法是同时看 Attempted 与 Coverage、分模态榜、ExactMatch 与 JudgeScore 之差，以及提示显著性图，再决定补数据、补格式约束还是补时序建模。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eacl-2026 论文汇总](/posts/conference-eacl-2026/)
