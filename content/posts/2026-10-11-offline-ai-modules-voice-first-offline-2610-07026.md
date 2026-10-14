---
title: "Offline AI Modules: Voice-First Offline Architecture, Hardware Reference Stack, Quantization and Benchmarking"
date: 2026-10-11
draft: false
tags: [语音交互, 语音识别, 模型量化, 基准测试]
categories: [论文速递]
description: "论文为无网或弱网的非洲语言社区设计了一套离线语音交互流水线与两档硬件清单，并用三款 2-5B 指令模型在四种量化精度下的吞吐、内存、功耗与多语言分类准确率证明 Q4_K_M 是最兼顾速度与质量的部署选择，但树莓派首字延迟与奥罗莫语识别仍是短板。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.07026"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "完全离线的语音交互如何在树莓派和 Jetson 上跑起小语言模型"
paper_digest_original_title: "Offline AI Modules: Voice-First Offline Architecture, Hardware Reference Stack, Quantization and Benchmarking"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.07026v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.07026v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.07026v1.pdf"
paper_digest_primary_task: "语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-interaction","label":"语音交互"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "模型量化"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "论文为无网或弱网的非洲语言社区设计了一套离线语音交互流水线与两档硬件清单，并用三款 2-5B 指令模型在四种量化精度下的吞吐、内存、功耗与多语言分类准确率证明 Q4_K_M 是最兼顾速度与质量的部署选择，但树莓派首字延迟与奥罗莫语识别仍是短板。"
paper_digest_authors: [{"affiliations":["Awarri Technologies Limited"],"name":"Sunday Afariogun"},{"affiliations":["Awarri Technologies Limited"],"name":"Odunolaoluwa Jenrola"},{"affiliations":["GSM Association"],"name":"Zeinab Nezami"}]
paper_digest_abstract_sha256: "fd4e200a9d372bfc23e6cddeb8cbee512d24ad1d335318615dce1e7c3c5b5844"
paper_digest_sidecars: {"citation.bib":{"sha256":"936c490aa1e4d0b36361f942723bfbb71d1915e6829648a8784027c39c0efe5a","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07026/citation.bib"},"citation.json":{"sha256":"79897a933ef4cc504f3e2516a1e37a4993140e94f5be1bf16d0ed33129287eca","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07026/citation.json"},"citation.ris":{"sha256":"b83c8fcc9155e3b5b664ca24f7fe6b4a6704df4001af45501f6cc46bf2a9b3cd","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07026/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"b573d9eff3ac464f0634eb9e73be828f1afdd9fd8e2b09c10254583c159f8866","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07026/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "0c32ef2ebdebd8f841178e9c3e1b5484f6809f2d0c306fce1a202455bb0021e3"
paper_digest_api_reader_plan_sha256: "5d4375f2aa43a740e10198d62baa0e1713c5a159e968578bdccaa590a57fddb8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "cdd2e81d0898377167634f46b646593dfcebd91b066f6e6d033c71fb77403590"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "e54ce36bcdf55088068c370d4d2501a847e74bb39a8e04b61b9f7e879c326ff6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b4883cc8ce2bd94a1f831de5d64e4fabd146105716cdff5102535ee74c6240d1"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9366714c49339b17791effed27b3f7e04719512e88e400cd8060794851f896a4"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 完全离线的语音交互如何在树莓派和 Jetson 上跑起小语言模型

> 英文题目：*[Offline AI Modules: Voice-First Offline Architecture, Hardware Reference Stack, Quantization and Benchmarking](https://arxiv.org/abs/2610.07026v1)*

> 标签：#语音交互 | #语音识别 | #模型量化 | #基准测试
>
> 评分：**6.2/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Sunday Afariogun：Awarri Technologies Limited
- Odunolaoluwa Jenrola：Awarri Technologies Limited
- Zeinab Nezami：GSM Association

## 📌 核心摘要

本文解决非洲多语言社区在无网络或弱网络下依赖语音交互的问题，系统输入为16 kHz单声道语音，输出为语音答复，难点是2-5B参数语言模型在内存、算力、功耗受限设备上保持可用速度与多语言质量。音频采集与预处理把麦克风信号归一为统一格式后送入本地语音识别，识别文本经语言模型生成答复文本，再由语音合成转回波形，编排控制模块负责超时、回退与逐轮日志采集。量化流程把Hugging Face检查点转为GGUF并生成Q4_K_M、Q5_K_M、Q8_0制品，在llama.cpp下实测吞吐、内存与功耗，质量用MasakhaNEWS主题分类准确率与相对全精度参考的困惑度漂移联合判断。与全精度参考相比，Q4_K_M在Jetson Orin NX上把解码吞吐提升到1.7-2.6倍，同时在MasakhaNEWS 400条四分类评测上保持82.5%-89.2%准确率，其中gemma-4-E2B-it的Q4_K_M以28.8 t/s与89.2%准确率占据质量成本前沿。同为Q4_K_M的gemma-4-E2B-it在Jetson Orin NX与Raspberry Pi 5上的解码吞吐分别为28.8 t/s与7.5 t/s，前者为后者的3.8×，预填充吞吐差距更大，说明图形处理器主要加速提示处理。实测开销在16 GB内存的两档硬件上可比，Tier B峰值常驻内存为3.4-13.5 GiB、功耗为20-24 W，Tier A峰值常驻内存为2.3-2.6 GB且首包延迟为1.6-2.2 s。结论适用于所测英语、豪萨语、伊博语、尼日利亚皮钦语、约鲁巴语的新闻主题分类与阿姆哈拉语识别，奥罗莫语词错率约0.705-0.763与树莓派上600M识别模型单句约15 s仍是开放问题。

## 🔗 开源与复现资源

- 第三方资源：<https://www.awarri.com/> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.open-telco.ai/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 论文要解决的部署问题是什么

论文面对的输入是社区现场的语音，目标是在完全断网的条件下完成从听到语音到用当地语言语音回答的闭环。必须保留的信息包括说话内容、语言归属和交互时延，输出是可播放的语音回答。背景是非洲许多社区以口语为主要交互方式，而网络不可靠、云端按次收费高、语音数据外传有隐私顾虑。论文因此提出三件配套工作：模块化的离线语音架构、可复制的低成本硬件清单、可复现的量化与评测流程。

评测对象是 2-5B 参数量级的指令微调语言模型和埃塞俄比亚语音识别模型，硬件是树莓派 5 和 Jetson Orin NX 两档。论文的结论只在这些模型、量化和测试条件下成立，不能直接推广到更大的模型或未测的语言。

**Tier A × Tier B：** Tier A 指以 16 GB 树莓派 5 为核心的低成本纯中央处理器平台，代表功耗和内存受限的野外部署条件，Tier B 指以 16 GB Jetson Orin NX 为核心的边缘加速平台，代表有图形处理器加速的更快交互条件，两者搭配的意义是同一量化文件在两档算力上分别测速度与质量，给出何时可用低成本方案、何时必须用加速方案的依据。

### 已有路线与本工作的分工有何不同

与依赖云端大模型的做法相比，本工作把识别、推理和合成都放在单设备本地，输入、目标和运行阶段都不同，因此不能把云端质量直接拿来对比本地速度。论文内部比较的是同一模型的不同量化精度和同一量化文件在不同硬件上的表现，输入都是相同的提示词或新闻文本，监督都是离线本地计算，运行阶段都是断网、空闲后台和记录功耗散热的受控条件。这种比较回答的是在给定内存和算力下哪种压缩更划算，而不是哪类模型结构更先进。

论文还把语音识别单独评测，阿姆哈拉语和奥罗莫语的测试集与语言模型的多语言分类测试集互不重叠，各自的指标方向也不同，需要分开理解。

### 离线语音任务的输入输出与约束

一次交互的输入是一段麦克风或文件语音，输出是一段合成语音。中间必须保留文本转录、模型回复文本、每模块延迟、吞吐和峰值内存。约束来自三方面：一是内存，树莓派只有 16 GB 且与中央处理器共享，全精度 3B 模型约 6 GB 难以实用运行；二是速度，语音交互要求首个词尽快出来且后续生成能跟上播放；三是离线，要求断网可运行且冷热缓存、电源是市电还是电池都要记录。

论文把上下文在低成本设备上限制为 256-512 词元，并采用单设备顺序执行，即识别完成后才做语言模型推理，再做语音合成，以保持峰值内存可预测。这种顺序执行的代价是总延迟为各段之和，好处是便于社区复现和定位瓶颈。

### 系统整体流程是怎样串起来的

系统由 5 个模块组成：音频采集与预处理、语音识别、语言模型、语音合成、编排与控制。采集模块把输入统一为 16 kHz 单声道波形文件格式，做静音裁剪、幅度归一化和轻量降噪，处理故意保持极简以节省中央处理器。识别模块在本地把语音转成文字并可返回置信度、语言标识和切分时间。语言模型模块接收转录文本并按统一提示词格式生成回复，支持更换不同的小型开源或本地模型。

合成模块把回复文字转成波形文件并返回播放元信息，要求体积小到无需图形处理器。编排模块负责按识别到语言模型再到合成的顺序调度，处理超时、回退和错误，并默认记录评测日志。下图展示了各模块与音频流、转录文本、回复文本和控制线的连接关系。

> **看图路径：** 1. 先从左侧音频采集框沿音频流箭头看到语音识别框；2. 再沿转录文本箭头看到语言模型框再到语音合成框；3. 注意下方编排控制框向三个处理框发出的控制线；4. 对比各框内标注的本地推理与低延迟等约束

[![原论文 Fig. 1：System architecture of the voice-first African language AI framework.](https://arxiv.org/html/2610.07026v1/module_arch.png)](https://arxiv.org/html/2610.07026v1/module_arch.png)

*论文图 1。原论文 Fig. 1:：“System architecture of the voice-first African language AI framework.”。*

从像素可见，左侧蓝色框为音频采集，含麦克风输入和波形文件两种来源，中间绿色框为语音识别，标注本地推理和语音到文字，黄色框为语言模型，标注本地推理和量化后模型，红色框为语音合成，标注文字到语音和低延迟，右侧灰色框为音频输出，下方紫色框为编排器，发出 3 条控制线分别指向识别、语言模型和合成，主数据从左向右依次传递，控制自下而上协调顺序与超时。这种模块划分使替换任一模型不需要重写流水线。

### 接口标准与执行模型如何保证可复现

为保证不同贡献者测得的结果可比，论文规定了统一的数据交换标准。下表比较的问题是各模态用什么格式传递，公平条件是所有输入都先归一化到同一标准，指标方向是格式越统一则跨设备聚合越可靠。音频输入统一为 16 kHz 单声道波形，音频输出为 16 或 22.05 kHz 单声道，文本统一为 UTF-8 编码，元信息统一为 JSON 格式，包含时间戳、置信度、语言标签和设备信息。执行模型是单设备顺序执行，后台服务最少，评测日志默认开启，每次运行记录端到端延迟、分模块延迟、语言模型吞吐与首词延迟、峰值内存和模型加载时间。

| Data Type | Standard | Notes |
| --- | --- | --- |
| Audio input | WAV PCM, 16 kHz, mono | All ASR inputs normalised to this format. |
| Audio output | WAV PCM, 16 or 22.05 kHz, mono | TTS may output 16 kHz for lightweight playback. |
| Text | UTF-8 | All module text payloads must be UTF-8. |

表中可见输入音频必须先转为规定采样率才能进入识别，输出音频允许用较低采样率以减轻播放负担，文本与元信息的统一使日志能直接转为表格。这种严格接口的代价是灵活性下降，例如不能随意使用高采样率模型，但好处是树莓派与 Jetson 的测量可以直接对照。

**语音识别 × 语言模型：** 语音识别负责把归一化后的语音变成文字并给出置信度等元信息，语言模型负责接收这段文字并生成回复文字，前者解决听懂说什么，后者解决如何回应，两者串联才构成从语音到语义再到语音的完整交互，而编排控制模块负责把两者按顺序调度并记录每步耗时。

**量化 × GGUF：** 量化指把模型权重从 16 位浮点压缩到平均 4-8 位以减小体积和内存并提升解码速度，GGUF 是 llama.cpp 使用的可直接加载的压缩文件格式，两者搭配的意义是先用转换脚本得到中间文件再用量化工具产出不同精度的 GGUF，使同一模型能在树莓派和 Jetson 上直接运行和对比。

### 硬件清单覆盖了哪些部件与检查

硬件选择遵循 3 条标准：部件易买到无需专用工具，同时覆盖低成本与边缘加速两档，具备可用的麦克风输入、扬声器输出和最小交互界面。树莓派 5 的 16 GB 版本是低成本基线，用于验证 2-5B 量化模型在严格内存与散热下的离线流水线。选配包括人工智能加速帽、64 GB 以上存储卡、电池包、集成麦克风与扬声器的小显示屏扩展板、双 M.2 扩展板、256 GB 以上固态硬盘、24TOPS 的 M.2 加速卡、结构件、5V5A 电源和主动散热。Jetson Orin NX 16 GB 开发套件是边缘加速档，支持更大模型和更低延迟，另有一块旧款 Nano 仅作历史基线而不必备。

每次评测前做四项就绪检查：持续推理不降频、模型加载无输入输出瓶颈、麦克风与扬声器跨轮稳定、市电与电池下均稳定，以确保测到的是模型差异而非硬件抖动。

### 量化流水线把模型变成什么可运行文件

量化的作用在论文中被强调为决定树莓派能否部署的最关键因素。3B 模型全精度约 6 GB 且在树莓派上速度不可用，而 Q4_K_M 格式约 1.9 GB 且能在中央处理器上达到可交互速度。流水线起点是从模型社区下载全精度权重，接着用转换脚本生成中间态 GGUF 文件，再用量化工具生成 Q4_K_M、Q5_K_M 和 Q8_0 3 种文件，然后用 20 条覆盖问候、意图分类、问答和短指令的固定提示词做冒烟测试，再用评测工具在目标设备上测吞吐并输出统一日志，最后发布带模型卡的版本化文件。

Q4_K_M 平均每权重约 4.85 位，是社区默认推荐，Q5_K_M 约 5.7 位质量更接近全精度，Q8_0 约 8.5 位基本无损但主要面向 Jetson，全精度仅作校准基线。每种产物都要经过困惑度漂移、冒烟测试和与全精度输出的行为差异三重校验。

**解码吞吐 × 预填充吞吐：** 预填充吞吐指模型一次性读入提示词的速度，决定首个词要等多久，解码吞吐指逐个生成后续词的速度，决定回复播报是否流畅，前者受并行计算能力影响大，后者受内存带宽影响大，两者分开测量才能解释为何树莓派上生成尚可但启动回复很慢。

### 本研究训练了什么与实际计算了什么

本研究没有训练任何新的语言模型或语音模型，三款语言模型 gemma-4-E2B-it、gemma-2-2b-it 和 Qwen2.5-3B-Instruct 均为现成的指令微调开源权重，埃塞俄比亚语音识别的 94M 和 600M 模型也是现有模型。实际计算是压缩与测量：把下载的权重转换为 GGUF 并量化为不同精度，再在两档硬件上运行推理以测量解码与预填充吞吐、首词延迟、内存、功耗，以及在保留语料上的分类准确率与困惑度。参数冻结与更新、梯度路径等训练概念不适用于本工作，论文也未报告任何训练超参数。

无训练不意味着输出确定，同一量化文件在不同设备因浮点精度和调度差异仍可能有细微数值差别，论文在语音部分明确把微小词错误率差异归因于半精度到单精度的数值变化和样本量限制。

### 评测条件与统计规则如何保证可比

语言模型质量用 MasakhaNEWS 的 400 条分层样本衡量，每种语言 80 条，覆盖娱乐、健康、政治、体育 4 类，随机猜测为 25%，报告准确率时附带 95% 区间，在 85% 准确率附近约正负 3.5 个百分点。量化是否改变准确率用配对样本的精确 McNemar 检验与 Holm 校正比较 9 组计划对比，不显著只表示当前样本量无法分辨差异，不等于证明等价。困惑度用每种语言约 50,000 词的保留语料衡量，只看相对各自全精度参考的漂移，以隔离不同语言正字法和分词效率的影响。

部署指标包括解码吞吐、预填充吞吐、聊天首词延迟、暖缓存启动时间、常驻内存和峰值功耗。标准测试条件要求断网、后台空闲、加载测冷缓存而推理测热缓存、运行前空闲 5 分钟且室温不高于 28 度、记录市电或电池、连续至少 10 次交互并丢弃第一次热身。

**主题分类准确率 × 困惑度漂移：** 主题分类准确率指模型在 MasakhaNEWS 四类新闻主题上选对类别的比例，是任务层面的质量指标，困惑度漂移指量化后模型对保留文本的困惑度相对全精度参考的变化百分比，是分布层面的诊断指标，两者搭配是因为困惑度变大不一定导致分类变差，必须同时看才能决定量化是否可用。

### 语言模型在 Jetson 上速度与质量如何权衡

下图导读：柱状图横轴为精度从全精度到 Q4_K_M，纵轴为每秒解码词数，3 种颜色分别对应三款模型，柱子越高代表单位时间生成越多，重点看同一模型随压缩加深是否变高，以及不同模型在最右侧的绝对高低。

> **看图路径：** 1. 对比同一颜色柱子从全精度到 Q4_K_M 的高度变化；2. 比较蓝色、橙色、绿色三组模型在 Q4_K_M 处的绝对高度；3. 注意纵轴是每秒解码词数，越高代表生成越快

[![原论文 Fig. 5：Decode throughput on Tier B (Jetson Orin NX, GPU) by precision level.](https://arxiv.org/html/2610.07026v1/fig_llm_decode.svg)](https://arxiv.org/html/2610.07026v1/fig_llm_decode.svg)

*论文图 5。原论文 Fig. 5:：“Decode throughput on Tier B (Jetson Orin NX, GPU) by precision level. Quantization to Q4_K_M yields 1.7–2.6\times the full-precision decode rate.”。*

从像素可见，所有模型在 Q4_K_M 处最高，gemma-4-E2B-it 达到 28.8 词每秒，gemma-2-2b-it 为 23.4 词每秒，Qwen2.5-3B 为 21.9 词每秒，约为全精度的 1.7 到 2.6 倍。全精度不仅慢而且内存大，gemma-4-E2B-it 全精度仅 11.0 词每秒且占用 13508 MB，gemma-2-2b-it 全精度仅 14.0 词每秒且占用 10237 MB。可部署精度的聊天首词延迟中位数在 446 到 501 毫秒之间，功耗稳定在 20 到 24 瓦且无降频。下表比较的问题是在相同 Jetson 硬件上哪种精度兼顾速度、内存与任务准确率，公平条件是同一服务与同一 400 条分类样本，指标方向是吞吐越高越好、内存越小越好、准确率越高越好。

| Model | Quant | Size | Decode | RSS | Power | Accuracy |
| --- | --- | --- | --- | --- | --- | --- |
| Gemma-4-E2B-it | BF16 | 8.67 | 11.0 | 13508 | 20.9 | 88.8 |
| Gemma-4-E2B-it | Q4_K_M | 2.89 | 28.8 | 4701 | 21.2 | 89.2 |
| Gemma-2-2b-it | F16 | 4.88 | 14.0 | 10237 | 23.4 | 81.8 |
| Gemma-2-2b-it | Q4_K_M | 1.59 | 23.4 | 3515 | 22.5 | 86.0 |
| Qwen2.5-3B | F16 | 5.75 | 11.5 | 12040 | 23.0 | 83.5 |
| Qwen2.5-3B | Q4_K_M | 1.80 | 21.9 | 3936 | 23.2 | 82.5 |

表中可见每款模型的 Q4_K_M 都是该模型中解码最快且文件最小的行，gemma-4-E2B-it 的 Q4_K_M 以 2.89 GB 文件和 4701 MB 内存达到 89.2% 准确率和 89.3% 宏平均 F1，相对全精度的困惑度漂移仅 0.63%，处于右上前沿。代价是更低精度的困惑度诊断可能变大，但任务准确率并未跟随下降，因此不能只看困惑度选型。

下图导读：森林图横轴为分类准确率，圆点三角方块分别对应三款模型，横线为 95% 区间，空心为全精度参考，重点看区间是否与参考重叠以及哪个点显著偏离。

> **看图路径：** 1. 先看每行点的横向位置代表分类准确率高低；2. 再看横线长度代表 95% 区间宽度，区间重叠意味着差异难分辨；3. 注意空心点是全精度参考，实心点是量化版本

[![原论文 Fig. 6：MasakhaNEWS topic accuracy with 95% Wilson intervals (n=400) for all model–precision combinations…](https://arxiv.org/html/2610.07026v1/fig_llm_accuracy_forest.svg)](https://arxiv.org/html/2610.07026v1/fig_llm_accuracy_forest.svg)

*论文图 6。原论文 Fig. 6:：“MasakhaNEWS topic accuracy with 95% Wilson intervals (n=400) for all model–precision combinations on Tier B.”。*

从像素可见多数量化点的区间与各自参考重叠，唯一显著不同的是 gemma-2-2b-it 的 Q4_K_M 为 86.0%，比其全精度 81.8% 高出 4.25 个百分点，校正后显著，而其他 8 组对比均不显著。这说明在当前样本量下能量化不降低分类准确率，但显著改善的例子仅此 1 例，不能推广为量化普遍提升质量。

### 树莓派上能否跑起来与瓶颈在哪里

下表比较的问题是同一 Q4_K_M 文件在树莓派纯中央处理器上是否仍在内存预算内且速度可用，公平条件是文件与质量指标与 Jetson 侧完全相同，指标方向是解码越高越好、首响越短越好、内存越小越好。

| Model | Decode (t/s) | Prefill (t/s) | First-response (ms) | Peak RAM (MB) |
| --- | --- | --- | --- | --- |
| Gemma-4-E2B-it | 7.5 | 31.7 | 2019 | 2278 |
| Gemma-2-2b-it | 6.8 | 39.4 | 1624 | 2428 |
| Qwen2.5-3B-Instruct | 6.1 | 29.4 | 2180 | 2578 |

表中可见三款模型峰值内存为 2278 到 2578 MB，均在 16 GB 预算内，且相对排序与 Jetson 一致，gemma-4-E2B-it 仍最快为 7.5 词每秒，其次为 6.8 和 6.1 词每秒，冒烟输出格式良好且无降频。但不对称的代价在预填充：解码只下降 3.4 到 3.8 倍，仍可流式播报，而预填充下降 24 到 30 倍，导致首响延迟升至 1624 到 2180 毫秒，超过语音交互的感知阈值。论文因此指出首要优化是缩短系统提示词、限制检索上下文和利用提示词缓存，若要求亚秒级首响则应选 Jetson 档。需要注意树莓派首响与 Jetson 聊天首词延迟的测量路径不同，不能直接相减比较，只能各自指向同一瓶颈即计算受限的预填充。

### 语音识别在两档硬件上表现如何

下图导读：热力图分三块分别为词错误率、单句推理时间和峰值内存，行是阿姆哈拉语与奥罗莫语，列是两种模型大小与两种设备，颜色越深代表该指标越大，重点对比同行跨设备的数值变化与同列跨语言的颜色差异。

> **看图路径：** 1. 先按左侧词错误率列比较阿姆哈拉语与奥罗莫语的颜色深浅；2. 再按中间推理时间列比较 Jetson 与树莓派的数量级差异；3. 注意右侧峰值内存列在树莓派 94M 配置上的异常偏大

[![原论文 Fig. 8：Ethio-ASR benchmark results (94M and 600M models, Amharic and Oromo) across Jetson Orin NX and…](https://arxiv.org/html/2610.07026v1/asr_eval.svg)](https://arxiv.org/html/2610.07026v1/asr_eval.svg)

*论文图 8。原论文 Fig. 8:：“Ethio-ASR benchmark results (94M and 600M models, Amharic and Oromo) across Jetson Orin NX and Raspberry Pi 5, reporting WERnorm, inference time per utterance, and peak RAM.”。*

从像素可见，阿姆哈拉语颜色浅而奥罗莫语整行深，推理时间列中树莓派格远深于 Jetson 格。下表比较的问题是在相同测试集上识别质量是否随设备变化以及延迟代价多大，公平条件是同一模型与同一归一化词错误率定义，指标方向是错误率越低越好、时间越短越好。

| Model | Lang | Device | WERnorm | Inf mean (s) | Power (W) |
| --- | --- | --- | --- | --- | --- |
| 94M | Amharic | Jetson (GPU) | 0.288 | 0.047 | 36.5 |
| 94M | Amharic | Pi 5 (CPU) | 0.291 | 3.05 | 10.2 |
| 600M | Amharic | Jetson (GPU) | 0.228 | 0.478 | 33.9 |
| 600M | Amharic | Pi 5 (CPU) | 0.252 | 15.23 | 10.6 |

表中可见质量基本与设备无关，阿姆哈拉语 94M 模型在两档为 0.288 到 0.291，600M 为 0.228 到 0.252，差异来自数值精度与样本量而非系统性退化。但延迟差异巨大：94M 在 Jetson 约 0.047 秒，在树莓派为 3.05 秒，仍有约 3 倍实时余量而可近实时部署；600M 在树莓派达 15.23 秒，只能做离线批量转写。未胜出项是奥罗莫语在两档与两种大小上均为 0.705 到 0.763，论文归因于训练数据不足而非硬件或量化，意味着换更大模型或更快硬件不能解决该语言的质量问题。

### 分语言与分精度的质量差异说明什么

按语言看，尼日利亚皮钦语在 gemma-4-E2B-it 上各精度达 95.0 到 96.2% 为最高，豪萨语对两款模型最弱，gemma-2-2b-it 则在英语上最弱，豪萨语的不足与预训练覆盖有限一致。困惑度漂移在 Qwen2.5-3B 上为正且范围窄为 1.35% 到 4.20%，在 gemma-4-E2B-it 上正负混合且总体最小，宏观仅 0.63%，在 gemma-2-2b-it 上最大达 6.41% 且集中在豪萨语和伊博语。关键反例是 gemma-2-2b-it 的 Q4_K_M 漂移最大但准确率反而提升最多，证明漂移既不预测也不约束任务变化。论文明确把 gemma-4-E2B-it 在 Q5_K_M 出现的负漂移视为测量不确定性，不应解读为真正超越全精度。分主题看，体育 F1 最高为 91.1% 到 96.0%，政治召回率高达 95.0% 到 100.0% 但精度仅 64.1% 到 79.5%，表明系统性偏向预测政治类，且该模式在各精度稳定存在，并非压缩引入。

### 结论在什么条件下才成立

语言模型的结论限于三款 2-5B 指令模型、4 种精度、400 条分类样本和约每语言 50,000 词的困惑度语料，不显著不等于等价，更不能推广到未测的非洲语言。树莓派数据用较早工具链版本采集，未按 Jetson 新协议重测，只能作可行性参考而不能做严格跨版本对比。语音结论限于 FLEURS 的阿姆哈拉语和奥罗莫语测试集，奥罗莫语的高错误率与数据稀缺有关，论文未验证增加数据后的改善幅度。功耗与散热结论限于记录的市电条件和 28 度以下室温，电池供电可能降频。

附录还提醒负的困惑度漂移在测量不确定性内，不应视为超越全精度。容易误解的是把搜索到的最优 Q4_K_M 当成所有场景最优，实际上内存受限应选最小的 gemma-2-2b-it，需宽松许可应选 Apache 2.0 的 Qwen2.5-3B，需近无损应选 Q8_0。

### 复现第一步做什么与需要什么

复现应先按清单组装一档硬件并做四项就绪检查，再跑通量化流水线的 6 个阶段。第一步是下载指定的模型社区权重并用转换脚本生成全精度中间文件，然后生成 3 种量化文件并用 20 条固定提示词做冒烟测试，接着在断网、空闲、冷热缓存分离和记录电源的条件下用标准工具测吞吐并输出统一的 JSON 与表格日志。关键信息条件是记录设备内存、存储、系统版本、推理构建版本、量化名和上下文词元数，树莓派建议配主动散热和固态硬盘以避免加载瓶颈。

代码、权重与可运行系统是三回事：论文给出的是流水线脚本与日志格式，权重需从原模型社区按各自许可获取，系统需自己按接口组装。论文致谢中提到的外部网站仅证明文中提到该链接，不证明作者已开源本工作资源。

### 什么时候值得尝试与还需补什么验证

当部署场景无网或弱网、以语音为主要交互、预算只够单板机且需保护本地语音隐私时值得尝试本栈，优先用 gemma-4-E2B-it 的 Q4_K_M 在两档上起步，内存吃紧时换 gemma-2-2b-it，需宽松许可时换 Qwen2.5-3B，实时语音识别先用 94M 模型。复现第一步是组装树莓派并跑通同一文件的跨设备吞吐与分类对照。还需补的验证是真实麦克风噪声下的端到端延迟、更多非洲语言与更大上下文的测试、电池供电下的降频曲线，以及缩短提示词后首响延迟的实际改善量。只有补齐这些，才能把当前受控基准推广为现场可用的语音服务。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.07026v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
