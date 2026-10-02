---
title: "SEAR: Spoofing Evidence-Grounded Audio Reasoning Benchmark for Audio Language Models"
date: 2026-10-02
draft: false
tags: [音频深度伪造检测, 基准设计, 基准测试, 工具增强与约束解码]
categories: [论文速递]
description: "SEAR 把音频伪造检测拆成 verdict、证据识别与量化、取证解释四问，用 35 个声学特征的统计规则构造参考证据，最强证据是冻结模型的 BAEA-Fixed 在 19LA 上把 T1 EER 从 36.34% 降到 24.53%，代价是依赖稳定的真品参考分布且跨域收益明显变小。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.39847"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "能说出道理不等于找到了证据：SEAR 用可验证声学测量检验音频大模型的伪造推理"
paper_digest_original_title: "SEAR: Spoofing Evidence-Grounded Audio Reasoning Benchmark for Audio Language Models"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.39847"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.39847.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "SEAR 把音频伪造检测拆成 verdict、证据识别与量化、取证解释四问，用 35 个声学特征的统计规则构造参考证据，最强证据是冻结模型的 BAEA-Fixed 在 19LA 上把 T1 EER 从 36.34% 降到 24.53%，代价是依赖稳定的真品参考分布且跨域收益明显变小。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Rong Wan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Suliu Qin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiaxi Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wei Xie"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenwu Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaolong Han"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lu Yin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xilu Wang"}]
paper_digest_abstract_sha256: "7193587feba42d1018824c612eced71c5c2b933af574f40dc7cf6aa54f55aba4"
paper_digest_sidecars: {"citation.bib":{"sha256":"7ba079ca3acec4067d18665d350f936f5faeef4422db999a0dc248d796bd066d","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-39847/citation.bib"},"citation.json":{"sha256":"4ec37a92bb93872f670e73338235ef986a0f82b65d4321f91c9940c1335858f8","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-39847/citation.json"},"citation.ris":{"sha256":"6956bb558728d354d6f9db8b9aa8029d5d18dc7e085b2838cc92d3292f08e26d","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-39847/citation.ris"},"rethink-context.json":{"sha256":"44351740e22aa8cebd860f4ba973ed16e91a56688a3e6b0d2ef1b24bda30a94f","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-39847/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a5dd947d3c60db68402409153a01765fcba840b8492312c12e951620ceff97c3"
paper_digest_api_reader_plan_sha256: "9210c5e756b7b21419654f9c6f0e3bc5aaa1e63a4c8fa619823794b9eb59af5f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "901e9d6294f322a15ab5a6553a51692dcde72338b6d3a667f0c1a82f01170665"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "c4367757ea962f68284d7500c809356c9c8b88c18a526b104485118194e26b31"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7505f5ed8b9f5f824d89abfd0e644bf6d1d87e46f0e3db8aee95337d433dfff8"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fea8979a1651b2cfeecadcfaff47dde5603dfbc03000e44cb07b3dc110691662"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 能说出道理不等于找到了证据：SEAR 用可验证声学测量检验音频大模型的伪造推理

> 英文题目：*[SEAR: Spoofing Evidence-Grounded Audio Reasoning Benchmark for Audio Language Models](https://arxiv.org/abs/2609.39847)*

> 标签：#音频深度伪造检测 | #基准设计 | #基准测试 | #工具增强与约束解码
>
> 评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Rong Wan：机构信息未在 arXiv HTML 中可靠披露
- Suliu Qin：机构信息未在 arXiv HTML 中可靠披露
- Jiaxi Li：机构信息未在 arXiv HTML 中可靠披露
- Wei Xie：机构信息未在 arXiv HTML 中可靠披露
- Wenwu Wang：机构信息未在 arXiv HTML 中可靠披露
- Xiaolong Han：机构信息未在 arXiv HTML 中可靠披露
- Lu Yin：机构信息未在 arXiv HTML 中可靠披露
- Xilu Wang：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

伪造证据接地音频推理以单句语音为输入，要求模型同时输出真伪 verdict、异常声学特征辨识与量化值以及引用实测值的取证 rationale，难点在于音频语言模型常生成流畅但无信号支撑的解释。方法链第一步从ASVspoof语料提取 utterance 级声学特征并以效应量与折叠AUC筛选判别特征，形成候选证据集。第二步按平衡准确率最优原则确定异常区间并生成四任务音频问答，将筛选特征转化为可核对的参考证据与选项。第三步由真实样本基声学证据智能体用白名单工具实测待测音频，并将不可篡改的测量记录交由冻结音频语言模型完成 verdict 与 rationale。与既有仅评 verdict 或评 rationale 风格相似度的方法不同，SEAR 强制选项值与实测值绑定且禁止模型篡改工具输出，从而把评估锚定到可复算的信号证据。在19LA评测下，BAEA-Fixed的等错误率（Equal Error Rate，EER）为24.53%，低于Qwen2.5-Omni的等错误率（Equal Error Rate，EER）36.34%。该结论受限于稳定真实分布假设与编解码传输信道下的泛化衰减，尚未验证对未见合成器与真实噪声的持续外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/SEAR-benchmark/SEAR> — 链接可访问（HTTP 200）

- 数据相关资源：<https://huggingface.co/SEAR-benchmark> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要交付什么？

这篇解读的输入是论文 SEAR 的正文证据与一张官方原图，目标是让刚进入语音、音乐、音频方向的研究生能够核对关键做法并复述方法。必须保留的信息包括 4 个任务的定义、35 个声学特征的来源、参考证据的统计构造规则、BAEA 的真品参考与两种证据获取策略、6 个被测模型的零样本表现、BAEA-Fixed 的改进数字以及换错证据后的退化数字。输出是 1 篇按学习依赖展开的中文技术解读，不做营销式判断，不补无源数值。

先说白话。音频语言模型就是能听音频再用文字回答问题的模型，英文是 Audio Language Model，后文简称 ALM。音频伪造检测就是判断一段音频是真人说的还是合成、转换或编解码后伪造的，英文是 Audio Deepfake Detection，后文简称 ADD。过去很多工作把 ADD 当成二分类，模型只说真或假，最多再补一段听起来有道理的解释。SEAR 要追问的是解释背后有没有可验证的声学证据。

**音频语言模型 × 音频伪造检测：** 音频语言模型负责听音频并用自然语言回答问题，音频伪造检测负责判断音频是真人录制还是合成或转换生成，二者搭配是把检测问题改写成音频问答，让模型既要给真伪 verdict，也要用语言解释依据，SEAR 的意义正在于检查这种解释是否真有声学测量支撑。

沿一个样本走一遍有助于建立全局感。输入是一段 16 kHz 重采样的语音，模型要完成四件事。第一是给真伪 verdict，第二是指出哪个声学特征最异常，第三是说出该特征的测量值，第四是用自然语言把 verdict 和测量串成取证解释。SEAR 的检查点在于第二和第三是否有客观测量可核对，第四是否真正引用了这些测量，而不是自说自话。后续各节按任务与相关路线、方法全景、组件与计算、构造与推理、实验条件、结果与反证、复现与收束展开。

### 已有路线在评什么，SEAR 为什么还要加证据核对？

要理解 SEAR 的位置，需要区分 3 条已有路线。第一条是传统 ADD 基准，例如 ASVspoof 和 CodecFake+，它们主要评最终检测对错，不要求模型解释。第二条是把 ALM 用于 ADD 的工作，例如 ALLM4ADD 做二分类，HIR-SDD、FT-GRPO、CoLMbo-DF 等加入思维链或取证解释，让 verdict 看起来有理由。第 3 条是推理感知的评测，例如 TriDF 和 HIR-SDD，比较模型解释与人类取证轨迹的偏离，但仍不检查模型能否识别和量化细粒度的声学异常，也不检查解释是否一致地使用了这些证据。

论文提出的问题是 ALM 能否识别和量化信号级声学异常，并用这些证据支撑取证解释和伪造 verdict。这是一个学习依赖上的递进。只评 verdict 会漏掉理由造假，只评理由流畅会把 plausible 当成 grounded。SEAR 把评测切成三方面，对应公式中的 3 组符号，后文组件节会展开。教学例子是判作业是否抄袭，只看结论对错不够，还要看引用的页码和原文是否真实存在，页码错了结论即使蒙对也不能算会查证。

相关工作的对照条件需要讲清。同输入是指同样听原始音频，同目标是指同样区分真品与伪造，同监督是指是否用标签或参考解释，同运行阶段是指是否在推理时允许调用工具。SEAR 与传统基准同输入同目标，但监督更细，因为它额外要求证据识别与量化的参考答案。与推理感知评测相比，SEAR 同样看解释，但把可验证测量作为硬约束。这是本文的增量，不是同条件下的胜负比较。

### SEAR 把一个大问题拆成哪四个可评分的小问？

SEAR 把 ALM 做 ADD 拆成 4 个音频问答任务，覆盖 3 个方面。T1 是伪造 verdict，二分类，问音频是真还是伪造，输出记为 y 帽，用真值 y 评分。T2 是伪造线索识别，问哪个声学特征最能说明伪造，输出记为 e_id 帽。T3 是声学特征测量，给定一个异常特征，问它的测量值是多少，输出记为 e_val 帽。T2 与 T3 合在一起评声学证据的识别与量化，对照的是流水线构造的参考证据 e 星。T4 是取证解释生成，要求用自然语言解释 verdict 并引用可验证的信号证据，输出记为 r 帽，对照参考解释 r 星。

4 个任务的分工要先分清。T1 看判断，T2 看指认，T3 看读数，T4 看把判断与读数串成话的能力。T2 的正确选项是触发规则中排序最高的特征，若没有任何特征被标记为异常则答案为无异常，并配以测量不一致的干扰项。T3 把参考测量值遮住，用受控偏移构造同精度同单位的干扰项。T4 把触发的发现转成有证据支撑的参考解释，采用固定的标签中性提示，避免提示词泄露答案。

分区标签与攻击身份只用于离线构造参考，不放进被测模型的输入。这是为了防止模型靠数据集元信息作弊，只能听音频和看工具给的测量。T1 到 T3 使用多个语义等价的模板与固定种子的选项乱序，T4 使用固定提示。后文实验条件节会说明这种提示控制带来的波动，特别是 T1 的位置集成做法。

### SEAR 与 BAEA 的全景是什么，谁负责出题谁负责答题？

全景分两层。上层是 SEAR 出题流水线，负责从音频到参考证据再到题目。下层是 BAEA 答题基线，负责在冻结 ALM 之外加受控声学工具，帮助模型拿到可验证的测量再作答。图 1 把这两层画在上下两个面板，上方面板是 4 个任务，下方面板是真品参考、测量、选择证据、作答 4 步。

先看导读。读这张图时建议先沿左到右看任务与流程的主路径，再对比 Fixed 与 Adaptive 在选择证据处的分支，最后确认工具测量如何同时服务于选择题的硬绑定与开放解释的软约束。

> **看图路径：** 1. 先从左上音频样本出发，沿 T2、T3、T4、T1 四个任务框看 SEAR 的提问顺序；2. 再看下半部分 BAEA 从真品参考先验到测量、选择证据再到作答的四步流程；3. 对照上下两部分，确认上方任务需要的证据正好由下方工具链提供；4. 注意 Fixed 与 Adaptive 在第三步选择证据处的分支差异

[![原论文 Figure 1：The proposed SEAR benchmark tasks and BAEA method.](https://arxiv.org/html/2609.39847v1/SEAR_two_panel_v33.svg)](https://arxiv.org/html/2609.39847v1/SEAR_two_panel_v33.svg)

*论文图 1。原论文 Figure 1:：“The proposed SEAR benchmark tasks and BAEA method.”。*

图中可见内容可解释如下。上半部分从音频样本出发，依次列出 T2 伪造线索识别、T3 声学特征测量、T4 取证解释生成、T1 二分类，每个框内给出示例题干与选项形式，说明任务从细粒度证据逐步走向最终 verdict。下半部分 BAEA 从 19LA 真品估计中位数与离散度出发，集中测量 35 个谱、倒谱、韵律与能量特征，再经 Fixed 全量排序或 Adaptive 模型自选得到证据，最后用最小误差选择与冻结模型加证据作答两条路径完成四任务。这种上下对应关系说明 SEAR 不是只考语言，而是考测量到语言的一致性。

需要区分出题与答题的监督边界。出题时用了标签、攻击划分与统计阈值来构造参考答案。答题时 BAEA 推理不使用评测标签、攻击身份或参考答案，只用真品训练分区估计的参考分布与确定性工具测量。这一点是复现时必须守住的信息条件。

### 35 个声学特征与参考证据是如何算出来的？

先解释白话。声学特征就是从波形里算出的可读数，例如频谱重心、带宽、滚降、平坦度、高频能量占比、均方根能量及其时变、静音比、过零比，以及平均后的前 20 个梅尔频率倒谱系数。英文是 acoustic features。参考证据就是按统计规则判定为异常的特征名与测量值对。

**伪造线索识别 × 声学特征测量：** 伪造线索识别负责回答哪个声学特征最能说明伪造，即定性指认，声学特征测量负责回答该特征的具体数值是多少，即定量复述，二者搭配的原因是只有指认没有数值无法核对，只有数值没有指认无法定位，组合起来才构成可验证的声学证据。

具体计算分 3 步。第一步是提取。所有音频重采样到 16 kHz，帧级分析用 1024 点快速傅里叶变换与 256 点 hop，得到 35 个 utterance 级特征，其中 20 个是时间平均的 MFCC，其余 15 个覆盖谱、能量、时域与声源相关统计。这些特征刻画谱分布、倒谱结构、能量动态、时变与基频行为，构成候选集。

第二步是筛选与定阈。用绝对 Cohen d 与折叠 ROC AUC 筛选，折叠 AUC 定义为原 AUC 与 1 减 AUC 中的较大者。若某特征在全部伪造与真品之间满足绝对 d 不小于 0.5 且折叠 AUC 不小于 0.70，则记为全局特征。若某特征在区分某种攻击 a 的伪造与真品时折叠 AUC 不小于 0.80，则记为该攻击特异。对每个特征选择低侧、高侧或双侧异常区与阈值，使平衡准确率最大，平衡准确率等于真阳率与真阴率的平均。

对样本 x，若特征 j 的值落入所选区域则标记为异常，得到参考对即特征编号与测量值，并按对应规则的平衡准确率排序。若无特征触发则不赋异常。

SEAR 用 3 个符号概括评测目标，原文公式如下，符号含义紧接着解释。

\[\displaystyle\mathcal{D}(\hat{y},y),\qquad\mathcal{E}(\{\hat{e}_{\mathrm{id}},\hat{e}_{\mathrm{val}}\},e^{*}),\qquad\mathcal{R}(\hat{r},r^{*}),\]

该式中 D 比较 verdict 与标签，E 比较识别与测量与参考证据，R 比较生成解释与参考解释。它不是优化目标，而是评分框架，说明三方面各评什么。基于标签与参考证据实例化题目时，T1 用标签作目标，T2 用排序最高的触发特征作正确选项，T3 遮住测量值考读数，T4 把触发发现转成参考解释。

### BAEA 如何用真品参考与受控工具把测量递给冻结模型？

BAEA 的全称是基于真品的声学证据智能体，英文是 bona-fide-based acoustic evidence agent，后文简称 BAEA。它的安排理由是已有 ALM 在细粒度声学证据上表现弱，与其更新模型参数，不如给冻结模型配一个不能篡改的测量工具。工具库用 librosa 计算 35 个预注册特征，模型只能调用白名单工具，不能修改输出。

**Fixed 策略 × Adaptive 策略：** Fixed 策略负责不经模型选择直接测量全部 35 个特征并按稳健偏离排序返回，Adaptive 策略负责让模型先选择想看的声学类别再执行工具，二者搭配对照的原因是比较稳定全覆盖与模型自主选择谁更可靠，论文报告显示当前阶段稳定覆盖更可靠。

真品参考的计算是关键。对每个特征 j，只用 19LA 训练分区中的真品样本估计中位数 m 与中位数绝对偏差 MAD，不用评测标签与参考答案。输入音频 x 的稳健偏离为测量值减中位数再除以放大的 MAD，放大系数为 1.4826 并加极小量防止除零。偏离的符号表示方向，绝对值表示声学稀有度，大偏离被当作证据而非直接的伪造证明。每条证据记录保留特征名、测量值、参考中位数、稳健偏离、方向与状态。

证据获取有两种策略。Fixed 测量全部 35 个特征，按偏离排序在任务特定的证据预算下返回类别均衡的证据，不需要模型决定看哪些类别。Adaptive 让 ALM 从谱、倒谱、韵律、能量工具中自选特征，控制器校验请求，去掉非法或重复类别，强制预算，只暴露允许的测量。任务条件推理共用同一证据接口。对 T2 与 T3，把每个选项映射到受控特征集合，计算相对误差并选最小误差者，防止模型覆盖确定性测量，原文计算如下。

\[d(o)=\min_{j\in\mathcal{F}(o)}\frac{|v_{j}(x)-\widetilde{v}_{j,o}|}{|\widetilde{v}_{j,o}|+\epsilon},\]

该式中 v 是工具实测值，v 波浪是选项声称的值，分母加极小量，取映射特征集中的最小值。对 T1，冻结 ALM 联合音频与所选证据作答，伪造分数在原始与 AB 交换的选项顺序上平均。对 T4，渲染不可变的 grounded 核心，只有当模型解释未引入未测量特征、不支持数值或攻击元数据时才保留其表述。

### 没有训练阶段时，真正的计算与质检在哪里？

本研究没有训练神经网络的阶段，必须明确说明没有训练哪些模型。6 个被测 ALM 均未在本基准上微调，BAEA 也明确不更新 backbone 参数。真正的计算是统计估计、规则选择、题目生成与推理时工具调用。

**全局特征 × 攻击特异特征：** 全局特征负责刻画所有伪造与真品之间的总体差异，攻击特异特征负责刻画某一种合成或转换攻击与真品之间的局部差异，二者搭配是因为只用全局会漏掉只在个别攻击中出现的异常，只用特异会碎片化，组合才能同时覆盖共性与个性。

构造侧的计算包括用真品与伪造样本算 Cohen d 与 AUC 以筛选全局与攻击特异特征，对每个特征搜索使平衡准确率最大的异常区与阈值，对每样本判定触发集合并排序，以及按模板生成题目与干扰项。推理侧 BAEA 的计算包括用真品训练分区估计中位数与 MAD，对输入测 35 个特征并算稳健偏离，按策略选证据，再按最小误差绑定选择题或把证据与音频一起送给冻结模型。

质检同样是方法职责的一部分。生成题目经过自动化检查，保证答案唯一、数值可追溯、跨记录一致。6 名人工检查者再抽查分层子集 5400 道题，覆盖标签、攻击组、特征类别与无异常情形，评估答案正确性、歧义、证据一致性与语言清晰度。未报告的缺项是优化器、梯度路径、学习率等训练超参数，因为本研究不存在该路径，不能从模型名称推定实现，也不能把冻结等同于确定性求解，采样与模板仍会带来波动。

### 在什么数据、模型、指标与提示条件下比较？

数据来源是两个代表性 ADD 基准。19LA 提供受控环境，训练与开发集覆盖 6 种合成与转换攻击，评测集含 13 种未见攻击。21LA 保留这 13 种评测攻击，并引入 7 种经 VoIP 与 PSTN 的编解码与传输条件。评测规模是从每个分区采样 2000 条音频，共 68004 道问答，子集保留全部攻击类型并与全量在类别与特征分布上接近，最大 Jensen-Shannon 散度为 0.031。下表整理数据与特征口径，阅读时注意分区、攻击数、信道条件与采样规模是否一致。

| 条件 | 指标 | 19LA 训练/开发 | 19LA 评测 | 21LA 评测 |
| --- | --- | --- | --- | --- |
| 音频来源 | 攻击覆盖 | 6 种合成与转换攻击 | 13 种未见攻击 | 13 种评测攻击加 7 种编解码传输条件 |
| 信号表示 | 采样与分帧 | 16 kHz 重采样 | FFT 1024 点 hop 256 点 | 35 个 utterance 级特征 |
| 评测规模 | 采样量 | 每个分区 2000 条音频 | 共 68004 道问答 | 最大分布散度 0.031 |

被测模型包括本地 GH200 上的 4 个开源模型与两个经 API 的闭源模型，名称为 Qwen2-Audio-7B-Instruct、Qwen2.5-Omni-7B、MiniCPM-o-4.5、MOSS-Audio-8B-Instruct，以及 Gemini-3.1-Flash-Lit 与 GPT-Audio-1.5。指标方面 T1 用宏 F1 与等错误率，T2 到 T3 用准确率，T4 用 BERTScore-F1 与参考 grounded 评分，其中 Ref-G 由盲评 GPT-4o-mini 按 1 到 5 打分，其余指标按百分比报告。

**BERTScore-F1 × 参考 grounded 评分：** BERTScore-F1 负责衡量生成解释与参考解释在词义层面的相似度，参考 grounded 评分负责由盲评法官按 1 到 5 分判断解释是否真正使用了可验证的测量证据，二者搭配是因为前者只能发现说法像不像，后者才能发现证据用没用对，组合才能揭开高流畅低 grounded 的差距。

提示控制值得复述。T1 到 T3 用 3 种语义等价模板与独立乱序选项，T4 用固定标签中性指令。在 200 条 19LA 评测录音上的固定模板消融显示 T2 准确率最大波动 5.7 个点，T3 与 T4 B-F1 各 3.0 个点，而 T1 EER 波动可达 15.0 个点，因此报告位置集成的 EER。下表把提示与质检条件并列，说明公平性来自模板、乱序与集成，而非单次提问。

| 条件 | 指标 | T1 提示处理 | T2/T3 提示处理 | T4 与质检 |
| --- | --- | --- | --- | --- |
| 模板 | 波动 | EER 波动可达 15.0 个点故做位置集成 | T2 波动 5.7 个点，T3 波动 3.0 个点 | T4 B-F1 波动 3.0 个点，用固定中性指令 |
| 选项 | 公平 | 原始与 AB 交换平均伪造分数 | 种子化乱序，3 种等价模板 | 自动检查唯一性、可追溯性、一致性 |
| 人工 | 覆盖 | 5400 道分层抽查 | 覆盖标签攻击特征与无异常 | 评估正确性歧义一致性清晰度 |

资源状态需要交代。代码链接本次可达，可写当前可用。数据集链接本次未能确认可达，须写本次未能确认可达，不能写已公开可下载。

### 主结果显示了什么样的差距，BAEA-Fixed 改变了什么？

要回答的主问题是模型能否识别量化异常并用于 verdict 与解释。与谁比是 6 个 ALM 的零样本直接作答，条件一致指同样听音频、同样模板与乱序、同样分区。指标方向是 T1 F1 越高越好，T2 与 T3 准确率越高越好，T4 B-F1 越高越好。下表先看零样本全景，重点比较 T4 的高分与 T2、T3 的低分是否同条件出现。

| 条件 | 指标 | T1 verdict | T2 证据识别 | T3 特征测量 | T4 解释流畅 |
| --- | --- | --- | --- | --- | --- |
| 6 模型零样本 | 19Tr/19Dev/19Eval/21Eval | 最优 F1 为 45.07% 到 52.47% | 接近 25% 随机基线 | 最高 25.79% | B-F1 为 83.26% 到 85.17% |
| 跨分区 | 稳定性 | 直接检测仍困难 | 细粒度证据任务更低 | 模型与分区差异小 | 词义相似度普遍高 |
| 解读 | 差距 | verdict 未解决 | 指认不可靠 | 读数不可靠 | 流畅不等于 grounded |

论文报告显示直接伪造检测仍具挑战，最优 F1 仅在 45.07% 到 52.47% 之间。T2 准确率接近 25% 随机选择基线，T3 准确率从未超过 25.79%。与之对照，T4 B-F1 持续偏高，在 83.26% 到 85.17% 之间且跨模型跨分区变化小。这种背离支持一个判断，即模型能生成词义 plausible 的解释，却不能可靠识别或量化对应的声学证据。

再看工具增强后的变化。比较对象是香草 Qwen2.5-Omni、纯工具与 BAEA 两种策略。指标方向是 T1 EER 越低越好，T2、T3 准确率越高越好，T4 Ref-G 越高越好。下表保留必要基线与实际可运行策略，重点看 Fixed 是否同时改善 verdict 与 grounded。

| 条件 | 指标 |
| --- | --- |
| 19LA | T1 EER 与 T2/T3 与 Ref-G |
| 21LA | T1 EER 与 T2/T3 与 Ref-G |
| 代价 | 域依赖 |

表后解释主要收益与代价。Fixed 把 T1 EER 从 19LA 的 36.34% 降到 24.53%，从 21LA 的 36.43% 降到 33.54%，同时提升 T2、T3 与 T4 Ref-G。纯工具复现全部 T2、T3 决策但 T1 跨域不稳定，说明工具加模型的收益与域有关。Adaptive 保持同样的 T2、T3 绑定准确率，但在两分区 T1 与 T4 均弱于 Fixed，支持稳定特征覆盖当前比自主选择更可靠。未胜出项是 Adaptive 在 T1 与 T4 的落后，以及纯工具在 21LA T1 高达 41.64% 的退化，这些反例说明测量准不等于 verdict 稳。

### 证据变好或变坏时，verdict 与解释跟着怎么变？

这一节按两个干预问题组织。第一是把模型自产的 T2、T3 答案换成 oracle 辅助上下文能否同时改善 T1 与 T4。第二是在 BAEA-Fixed 上比较无证据、匹配证据与交换证据，检验证据质量的因果方向。比较必须保留实际可运行策略，oracle 与事后最优另行标明，不能代替可部署收益。

先看上下文干预。Self 用模型生成的 T2、T3 答案，Oracle 用 oracle 辅助上下文但保留模型答案，不是纯金标上界。定义 delta EER 等于直接 EER 减上下文 EER，正值表示改善。下表聚焦 T1 变化不一致与 T4 grounded 稳步提升的对照。

| 条件 | 指标 | T1 delta EER Self/Oracle | T4 Ref-G Self/Oracle | T4 B-F1 Self/Oracle |
| --- | --- | --- | --- | --- |
| 19LA 4 个模型 | Qwen2-Audio 与 Qwen2.5-Omni 与 MiniCPM-o 与 MOSS-Audio | -3.85/+1.46，-1.02/+0.60，-1.90/-14.71，+5.77/-1.40 | 2.542/3.521，1.915/2.550，1.754/2.672，1.851/2.929 | 88.23/88.14，89.69/90.48，90.19/90.19，90.82/90.94 |
| 21LA 4 个模型 | 同上 4 模型跨信道 | -11.86/-4.11，-1.53/+1.62，+3.23/+0.91，+3.57/-0.56 | 2.935/3.884，2.175/2.943，1.830/3.143，1.900/3.056 | 88.61/88.37，90.65/90.91，91.37/91.15，91.79/91.76 |
| 解读 | 一致性 | 准确证据不自动带来可靠检测 | Oracle 使 Ref-G 提升 0.635 到 1.313 | B-F1 至多变 0.79 个点 |

表后解释是准确证据帮助解释 grounded，但不保证 verdict。Oracle 上下文使 T4 Ref-G 提升 0.635 到 1.313，而 B-F1 至多变化 0.79 个点，说明词义相似度几乎不动，证据引用质量动了。然而任一上下文都不能一致改善 T1，显示准确证据不会自动产生可靠检测。未胜出项包括 MiniCPM-o 在 19LA Oracle 下 T1 恶化 14.71 个点，以及 Qwen2-Audio 在 21LA 自产上下文下恶化 11.86 个点，这些负例提醒不能把 grounded 提升直接读成检测提升。

再看配对证据干预。在每评测分区同 200 样本上比较正确对无、交换对正确，报告配对改善与 95% 自助置信区间，正值表示优于基线，星号表示区间不含零。

### 哪些结论有边界，哪些量没有被测量？

先说论文直接报告的限制。BAEA 依赖相对稳定的真品参考分布，未来需探索音频分布演化下的自适应参考建模。这意味着当信道、说话人或合成器明显漂移时，中位数与 MAD 可能不再代表当前真品，Fixed 的排序与阈值会受影响。21LA 上收益缩小与纯工具 T1 不稳定已经给出信号。

再说未测量与未评测边界。论文未报告误判率之外的延迟、推理开销、输出帧率与实际成本，不能承诺这些量得到改善。训练资源按冻结处理，但工具测量 35 个特征与多次模板集成的开销未折算成可部署预算。不同指标的差值不能混放，百分点与相对百分比不同，自动指标不能当人评，Ref-G 是模型法官打分，不是人类取证专家打分。

总体趋势不等于每组每步成立。Fixed 平均优于香草，但在个别模型与个别分区组合下，T1 仍可能波动。原文表头或算术若出现冲突应标注冲突，本解读未发现需要编造口径来圆的冲突，但需提醒 T1 EER 对模板敏感，复现时必须保留位置集成，否则单模板数字可能偏离 15 个点。

### 要复现 SEAR 与 BAEA，先做什么，需要守住什么？

复现先做数据与特征。对齐 19LA 与 21LA 分区，重采样到 16 kHz，用 1024 点 FFT 与 256 点 hop 提取前 20 个平均 MFCC 与 15 个谱能量时域声源统计，共 35 个 utterance 级特征。接着复现参考证据。只用训练分区真品与伪造算绝对 Cohen d 与折叠 AUC，按 0.5 与 0.70 筛全局，按 0.80 筛攻击特异，再为每特征搜索使平衡准确率最大的低侧高侧或双侧阈值，对样本判定触发并按平衡准确率排序。题目生成时 T1 用标签，T2 用最高排序触发特征或无异常并配测量不一致干扰项，T3 遮住测量值并用受控偏移造同精度同单位干扰项，T4 用固定标签中性提示转成参考解释，并做唯一性、数值可追溯与跨记录一致检查。

再做 BAEA。只用 19LA 训练分区真品估计每特征中位数与 MAD，工具用 librosa 实现 35 个预注册特征并锁定白名单。Fixed 测全量并按稳健偏离在预算下返回类别均衡证据。Adaptive 让模型自选类别并经控制器校验去重与预算。对 T2 与 T3 按相对误差最小绑定选项，对 T1 联合音频与证据并在 AB 交换上平均，对 T4 保留不可变 grounded 核心并过滤未测量特征与不支持数值。

信息条件必须守住。分区标签与攻击身份只用于离线构造，不进模型输入。BAEA 推理不用评测标签与参考答案。代码当前可用，数据集本次未能确认可达，因此先用本地 ASVspoof 复现流水线，再等官方数据可达后对齐 68004 道题的子集划分。关键超参数是 FFT 点数、hop、35 维构成、d 与 AUC 阈值、平衡准确率选阈、证据预算与集成模板数，缺任一项都应记为缺项而不猜。

### 何时值得尝试这套做法，还需补哪项验证？

当你的任务要求模型不仅给真伪，还要给出可核对的声学依据时，值得尝试 SEAR 的拆分与 BAEA 的工具思路。特别是解释听起来都对但不知真假的场景，先用 T2 与 T3 测指认与读数，再看 T4 是否引用测量，能快速暴露 plausible 与 grounded 的差距。若只有 verdict 需求，这套流程偏重，可只借用 35 维测量与真品参考做质检。

还需补的验证有三项。一是在更多信道与新攻击上检验真品参考的稳定性，或引入自适应参考。二是用人类取证者替代模型法官复核 Ref-G，因为自动打分不能当人评。三是补推理延迟与计算预算，说明多次测量与位置集成在实际部署中是否可接受。记住论文的直接报告是 Fixed 改善证据识别量化、解释 grounded 与最终 verdict，支持的是可靠证据采集与使用的重要性，可能但待验证的是跨域长期稳定的自适应建模。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.39847)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-02/)
