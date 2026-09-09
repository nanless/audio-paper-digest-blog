---
title: "AuK Technical Report: An Open-Source Foundational Model for Speech Generation and Editing"
date: 2026-09-10
draft: false
tags: [语音编辑, 流匹配, 语音合成, 统一音频模型]
categories: [论文速递]
description: "AuK 用自然语言指令加可选音频上下文统一 5 类语音任务，以 MLLM 语义条件、联合训练 VAE 声学潜变量和混合整流流 Transformer 为核心，在约 3.03 billion 指令音频实例与 1.95 million 小时监督上经生成预热、联合预训练、编辑偏好优化与生成强化学习后取得零样本与指令 TTS 及通用编辑的领先结果，并以 4 步无 CFG 的 AuK-Flash 换取 4.5 倍实测加速，但仍依赖 Prompt Enhancer 做任务路由与改写。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.08936"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "AuK 用一条指令接口统一生成与编辑：何时靠语义条件、何时靠声学潜变量、代价在哪里"
paper_digest_original_title: "AuK Technical Report: An Open-Source Foundational Model for Speech Generation and Editing"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.08936"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.08936.pdf"
paper_digest_primary_task: "语音编辑"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-editing","label":"语音编辑"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"task","id":"task.speech-synthesis","label":"语音合成"},{"facet":"model_family","id":"model_family.unified-audio","label":"统一音频模型"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "AuK 用自然语言指令加可选音频上下文统一 5 类语音任务，以 MLLM 语义条件、联合训练 VAE 声学潜变量和混合整流流 Transformer 为核心，在约 3.03 billion 指令音频实例与 1.95 million 小时监督上经生成预热、联合预训练、编辑偏好优化与生成强化学习后取得零样本与指令 TTS 及通用编辑的领先结果，并以 4 步无 CFG 的 AuK-Flash 换取 4.5 倍实测加速，但仍依赖 Prompt Enhancer 做任务路由与改写。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ziyang Ma"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhikang Niu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenming Tu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tianrui Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ruiqi Yan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junxi Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yanru Huo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nickk Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yang Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qicong Xie"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zeyu Xie"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hui Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Haitao Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zixuan Jiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yalin Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jie Fang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yifan Duan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zeyue Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Guangzheng Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Haina Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuyi Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinwen Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mingyu Cui"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tian Tan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Auden"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sen Liang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Steve Yves"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shan Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liefeng Bo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zilong Zheng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kai Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Eng-Siong Chng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xie Chen"}]
paper_digest_abstract_sha256: "53c6195a00d1cea2ecaa50a733fed5a0b9614e55f52c4d18ef0fbbea9da9698e"
paper_digest_sidecars: {"citation.bib":{"sha256":"ece488c64862cdf055ab74fbaaee9a5363209fa2182aa90e5264dd90f6a1dc87","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08936/citation.bib"},"citation.json":{"sha256":"d8ec85b9ecd1efc33bc4d1881effc27e6ca8d5fa8168f13d9ce868237189ac9b","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08936/citation.json"},"citation.ris":{"sha256":"79fda0553d2ca0e3097acff71772f7b9e157ef5044752c55565d7dd68aac8a40","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08936/citation.ris"},"rethink-context.json":{"sha256":"2aa9439bb0bb054cd11827628fbeb30005485f391a9730f15cc39d3f340a9cd7","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08936/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3d78126af3c3afc0da843bf4c207e51fff650fdb056b4288a44cebc0e0c6285b"
paper_digest_api_reader_plan_sha256: "2477b9fb2b8eddaf46b18e0637f9bd42a599027d8d51cc79de3df721bd1c5c21"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "59e23524ef87bd9887cf162542998744cd4c193e49f385dae5a89561dd18a845"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "a0ba1a8a927a9102a4c088549bea649bda087c03a2dd83a4c987e70727e26e24"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "737fadfbf40eb9a9b2753254c3ca337ddc8ad27e440864a5fb109ca77d14feef"
paper_digest_api_reader_author_count: 33
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a8af00311e1e80447b9cec842689cbf9163c2b6bc0f210d6bf43fe8aff837443"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 AuK 用一条指令接口统一生成与编辑：何时靠语义条件、何时靠声学潜变量、代价在哪里

> 英文题目：*[AuK Technical Report: An Open-Source Foundational Model for Speech Generation and Editing](https://arxiv.org/abs/2609.08936)*

> 标签：#语音编辑 | #流匹配 | #语音合成 | #统一音频模型
>
> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5


## 👥 作者与机构

- Ziyang Ma：机构信息未在 arXiv HTML 中可靠披露
- Zhikang Niu：机构信息未在 arXiv HTML 中可靠披露
- Wenming Tu：机构信息未在 arXiv HTML 中可靠披露
- Tianrui Wang：机构信息未在 arXiv HTML 中可靠披露
- Ruiqi Yan：机构信息未在 arXiv HTML 中可靠披露
- Junxi Liu：机构信息未在 arXiv HTML 中可靠披露
- Yanru Huo：机构信息未在 arXiv HTML 中可靠披露
- Nickk Huang：机构信息未在 arXiv HTML 中可靠披露
- Yang Liu：机构信息未在 arXiv HTML 中可靠披露
- Qicong Xie：机构信息未在 arXiv HTML 中可靠披露
- Zeyu Xie：机构信息未在 arXiv HTML 中可靠披露
- Hui Wang：机构信息未在 arXiv HTML 中可靠披露
- Haitao Li：机构信息未在 arXiv HTML 中可靠披露
- Zixuan Jiang：机构信息未在 arXiv HTML 中可靠披露
- Yalin Li：机构信息未在 arXiv HTML 中可靠披露
- Jie Fang：机构信息未在 arXiv HTML 中可靠披露
- Yifan Duan：机构信息未在 arXiv HTML 中可靠披露
- Zeyue Tian：机构信息未在 arXiv HTML 中可靠披露
- Guangzheng Li：机构信息未在 arXiv HTML 中可靠披露
- Haina Zhu：机构信息未在 arXiv HTML 中可靠披露
- Shuyi Wang：机构信息未在 arXiv HTML 中可靠披露
- Jinwen Wang：机构信息未在 arXiv HTML 中可靠披露
- Mingyu Cui：机构信息未在 arXiv HTML 中可靠披露
- Tian Tan：机构信息未在 arXiv HTML 中可靠披露
- Auden：机构信息未在 arXiv HTML 中可靠披露
- Sen Liang：机构信息未在 arXiv HTML 中可靠披露
- Steve Yves：机构信息未在 arXiv HTML 中可靠披露
- Shan Yang：机构信息未在 arXiv HTML 中可靠披露
- Liefeng Bo：机构信息未在 arXiv HTML 中可靠披露
- Zilong Zheng：机构信息未在 arXiv HTML 中可靠披露
- Kai Yu：机构信息未在 arXiv HTML 中可靠披露
- Eng-Siong Chng：机构信息未在 arXiv HTML 中可靠披露
- Xie Chen：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

AuK要解决的是以自然语言指令与可选参考音频为输入生成目标波形的统一语音生成与编辑问题，输出需兼顾内容准确、说话人及副语言保真与声学场景可控，难点在于五类任务的输出约束迥异、条件接口在纯文本与音文联合间切换且评价维度分散。AuK-VAE在语音、通用音频和音乐上联合训练，将24kHz波形压缩至50Hz的64维潜空间，提供声学条件与波形重建。Qwen2.5-Omni对指令及参考音频做层次化加权融合形成语义条件，与VAE编码的参考潜变量及噪声目标潜变量共同构成生成器输入。由10层双流MMDiT与20层单流DiT组成的混合整流流Transformer通过双流联合注意力保留模态特异残差再单流融合预测潜空间速度场并解码得波形，训练经生成预热后联合生成编辑预训练、编辑偏好优化与生成强化学习对齐，再以一致性初始化加任务路由解耦DMD蒸馏为4步无分类器引导的AuK-Flash。相对分离式或单任务系统，AuK以双流后单流架构统一纯文本生成与参考音频条件编辑接口，并以指令依赖的选择性增强避免去噪与去混响绑定，使同一模型按指令保留指定声场分量。在Seed-TTS-Eval基准下，AuK的平均WER相对Qwen3-TTS从3.07%降至2.65%，方向为错误率降低且在英、中及中难子集均取得最低值。该结论的适用边界受限于受控基准内的短指令与干净参考场景，对自由形式长指令、跨语种口音及真实强噪声场景的外推尚未验证，失败条件集中于指令歧义与多说话人重叠度高的编辑保持性下降；在成本层面，原文披露推理开销上AuK-Flash在相同硬件、输出时长与批量条件下以4步无分类器引导采样实现相对32步引导采样的4.5倍墙钟加速，训练成本对应大规模多任务预训练与后训练的计算量。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么、要输出什么、哪些信息必须保留

AuK 要解决的不是单一文本转语音，而是把自然语言指令加上可选的音频上下文映射到目标波形。输入有 2 部分：1 条自由措辞的指令，说明要做什么；1 段可选的输入音频，可能是需要被编辑的原句、用于克隆的参考音色，或需要被分离的混合场景。

输出始终是 1 段 24 kHz 单声道波形。关键约束是保留性：不同任务对保留的要求不同。生成是全新合成；内容编辑只改指定区间；韵律与声学编辑必须保留语言内容；增强与分离必须只保留指令指定的声源分量，其余按指令去除或保留。

论文把这些约束统一为同一接口：指令加可选音频到波形的条件生成。数据规模上，预训练语料包含约 3.03 billion 指令音频实例，对应 1.95 million 小时有效监督，覆盖语音、通用音频与音乐。

资源状态方面，本次收到的绑定信息为 NONE，未发现完成 HTTPS 验证的开源资源，因此不能声称代码、模型或数据当前已公开，需写作链接当前不可用，待官方发布后再核对。

### 同类路线在输入、目标与监督上的分歧点

在同输入同目标维度，零样本克隆、指令控制合成与语音编辑以往多由独立模型承担。零样本克隆通常以参考音频加目标文本为输入，目标是复刻音色；指令控制合成以文本描述为输入，目标是按描述设计音色与风格；编辑则以指令加源音频为输入，目标是局部改写或风格变换。

三者在输入模态是否包含音频、输出是否要求局部保留上不一致，导致用户体验碎片化。在同监督维度，生成可用 ASR 与声纹模型给出可扩展的自动信号，而开放式编辑依赖自然度、编辑强度与上下文适当性等主观判断，缺乏统一的偏好数据集或奖励模型，难以用单一自动指标对齐。

在同运行阶段维度，现有统一音频系统与编辑基准已暴露广覆盖需求，但兼顾可扩展训练与高效推理的单一模型仍难实现。AuK 的对照点在于：用同一流匹配目标联合优化生成与编辑，用人类反馈的偏好优化补编辑的监督空白，用自动奖励的强化学习补生成的可度量性，并用蒸馏把迭代采样与分类器自由引导的开销降下来。

### 为什么统一比单独做好更难

统一的难点有 3 个。第 1，输出约束异构。生成要求全新内容，内容编辑要求仅改局部区间且保持说话人、韵律与周围声学上下文，韵律与声学编辑要求内容不变而改变情感、口音、非言语事件或音色，增强与分离要求按指令选择性保留或去除场景分量。

第 2，条件接口异构。有的任务只有文本，有的任务需要文本与音频联合推理，模型必须在无参考与有参考 2 种配置下都能工作。第 3，监督与评估异构。生成的可识别性与相似度可用 ASR 与声纹模型规模化度量，编辑则需要对未指定属性的保持度做细粒度评判。

现有基准如 MMAE-Speech、SpeechEditBench 与 Ming-Freeform-Audio-Edit 分别从规则匹配、联合成功率与操作级分解角度覆盖这一需求。AuK 把这些差异收敛到同一条件流模型：语义条件与声学条件互补，训练时通过层次化条件丢弃同时支持全条件、仅文本与无条件 3 种配置，推理时通过 Prompt Enhancer 把自由请求规范化。

### 全景：1 条样本如何从指令与音频走到波形

以 1 条带参考音频的编辑样本为例。用户给出指令文本与输入波形，模型走 2 条条件流。语义流把指令文本与音频编码器提取的音频表示一起送入 Qwen2.5-Omni 多模态大语言模型，收集各层隐藏状态后做层归一化与可学习加权求和，得到语义条件。

声学流把同一输入波形送入冻结的 AuK-VAE 编码器，采样得到参考潜变量，与带噪目标潜变量拼接形成声学条件。2 流先经 M 个双流 MMDiT 块做联合注意力但保留各自残差通路，再拼接后经 N 个单流 DiT 块精炼，预测整流流速度场，经 ODE 积分得到干净潜变量，最后由因果 VAE 解码器还原为波形。

若样本无参考音频，则语义条件仅来自文本，声学流仅含带噪目标潜变量，其余结构不变。下图把 5 类任务的输入输出形态并置，便于对照生成与编辑在是否需要参考音频上的差异。

> **看图路径：** 1. 沿左侧 1 至 5 的任务家族编号自上而下确认 5 类能力分区；2. 对比 Instruct TTS 与 Zero-shot TTS 两栏的输入形态差异：前者仅文本描述，后者含参考音频波形；3. 在 Acoustic Editing 行观察 Speed、Volume、Pitch 3 列的输入输出波形对，确认每列都有 Faster/Slower 等成对示例

[![原论文 Figure 2：Versatile speech generation and editing capabilities of AuK.](https://arxiv.org/html/2609.08936v1/fig/capability.png)](https://arxiv.org/html/2609.08936v1/fig/capability.png)

*论文图 2。原论文 Figure 2:：“Versatile speech generation and editing capabilities of AuK.”。*

该图按 1 至 5 编号展示能力家族：1 为语音生成含指令 TTS 与零样本 TTS，2 为语速、响度与音高的声学编辑，3 为情感、去口音、非言语、音色与耳语音的超语言编辑，4 为语音与歌词的内容编辑，5 为语音与音乐的增强与分离。每行左侧为任务图标与企鹅示意，右侧为指令文本与输入输出波形对。教学上可先看第 1 行 2 栏的输入差异，再看第 2 行每列的成对输出波形，确认声学编辑的幅度是离散档位而非连续回归。图中 Instruct TTS 仅有文本描述与目标波形，Zero-shot TTS 则额外包含参考音频波形，Acoustic Editing 的 Speed、Volume、Pitch 各有 Faster/Slower 等成对示例，说明编辑是受控变换而非自由生成。

### 语义条件、声学潜变量与混合 Transformer 如何分工

语义条件的构造强调层次聚合。白话说，语言模型不同深度的表示分别捕捉词法、句法、风格与跨模态对齐线索，单取最后一层会丢失互补信息。AuK 对 Qwen2.5-Omni 的 L 层隐藏状态逐层做 LayerNorm 后以无约束标量加权求和，权重可学习，得到 c_sem。

该设计使文本单独与文本加音频 2 种输入都能产生语义条件，且在训练中保持 MLLM 冻结，仅更新融合权重与主干。

\[\mathbf{c}_{\mathrm{sem}}=\sum_{\ell=1}^{L}w_{\ell}\cdot\operatorname{LayerNorm}\!\left(\mathbf{h}^{(\ell)}\right),\]

该式中 h^(ℓ) 为第ℓ层隐藏状态，w_ℓ为可学习标量，LayerNorm 用于平衡各层尺度。输入含参考音频时 h^(ℓ) 来自 MLLM(ℓ)(t, E_aud(x_ref))，否则来自 MLLM(ℓ)(t)。

声学条件的构造强调共享潜空间。白话说，VAE 把 24 kHz 波形压缩为 50 Hz、64 维的连续潜变量，既用于参考条件的注入，也用于波形重建，避免在不同域上维护多套离散码本。编码器对参考波形输出均值与对数方差，采样得到 z_ref；无参考时声学条件为空集，仅保留带噪目标潜变量。

\[(\boldsymbol{\mu}_{\mathrm{ref}},\log\boldsymbol{\sigma}_{\mathrm{ref}})=\mathcal{E}_{\mathrm{enc}}(\mathbf{x}_{\mathrm{ref}}),\qquad\mathbf{z}_{\mathrm{ref}}=\boldsymbol{\mu}_{\mathrm{ref}}+\boldsymbol{\epsilon}\odot\boldsymbol{\sigma}_{\mathrm{ref}},\quad\boldsymbol{\epsilon}\sim\mathcal{N}(\mathbf{0},\mathbf{I}).\]

该式中 E_enc 为非因果编码器，ε 为标准高斯噪声，⊙为逐元素乘。采样后的 z_ref 即为未投影的参考潜变量，进入主干前才经投影映射到 Transformer 隐维度。

条件到主干的映射与块设计如下。语义条件经线性加 RMSNorm 得到 s^(0)，声学条件与带噪目标潜变量分别经卷积位置编码加线性得到 a^(0) 的 2 段拼接。随后 M 个双流块做联合注意力，N 个单流块做自注意力并在目标位置预测速度。

\[\mathbf{s}^{(0)}=\mathcal{P}_{\mathrm{sem}}(\mathbf{c}_{\mathrm{sem}}),\qquad\mathbf{a}^{(0)}=\left[\mathcal{P}_{\mathrm{ref}}(\mathbf{c}_{\mathrm{ac}});\mathcal{P}_{\mathrm{tgt}}(\mathbf{z}_{t})\right].\]

该式中 P_sem 为线性加 RMSNorm，P_ref 与 P_tgt 为卷积位置编码加线性，z_t 为流时间 t 处的带噪潜变量。双流块内对语义与声学流使用独立的 QKV 与残差投影，RoPE 按各自位置施加后再拼接做联合注意力；单流块对拼接序列做自注意力。

所有块均在注意力前做 RMSNorm 的 QK-Norm，并用零初始化、时间条件的 AdaLN 调制注意力与 SwiGLU 前馈。

**多模态大语言模型语义条件 × VAE 声学条件：** 多模态大语言模型语义条件负责把指令文本与可选参考音频映射为层次化语义表示，承载说什么、什么风格、做什么编辑的意图；VAE 声学条件负责把参考音频编码为 64 维、50 Hz 的连续潜变量，承载音色、韵律细节和声学上下文。二者搭配的理由是语义条件擅长跨模态推理但不保真波形细节，声学潜变量保真细节但不理解指令，组合后在双流 MMDiT 中先独立交互再融合，使文本驱动与音频参考驱动能在同一主干内共存。

**双流 MMDiT 块 × 单流 DiT 块：** 双流 MMDiT 块为语义流与声学流各自保留查询、键、值与残差通路，仅在注意力张量拼接后做联合注意力，实现双向信息交换而不混淆 2 类表示的尺度与位置编码；单流 DiT 块则把已交互的 2 流拼接为单一序列做自注意力，做全局精炼并预测整流流速度场。搭配原因是先分离后融合：前 10 层用双流保持模态特异性，后 20 层用单流提升融合效率与生成一致性。

### VAE 与主干的配置细节、冻结策略与推理配套

AuK-VAE 在 24 kHz 单声道上工作。编码器先以核 3 卷积映射到 12 通道，经 6 个下采样块，步长为 2, 2, 2, 3, 4, 5，通道 12→24→48→96→192→384→768，每块含步长卷积、6 个膨胀残差单元与 LeakyReLU，最终卷积输出 128 通道以参数化 64 维均值与对数方差，总下采样 480 倍得到 50 Hz 潜变量。

编码器卷积使用权重归一化。归一化流由 4 个残差耦合层与通道翻转组成，仅在 VAE 训练时用于潜分布正则化，生成与条件注入在原始潜空间进行。解码器先以核 7 的前瞻卷积映射到 1536 通道，随后 6 个转置卷积块步长 5, 4, 3, 2, 2, 2，通道 1536→768→384→192→96→48→24，每块后接抗混叠多周期合成模块，核 3, 7, 11 与膨胀 1, 3, 5，最后因果卷积还原波形。

主干为 30 层 Transformer：10 个双流 MMDiT 块后接 20 个单流 DiT 块，隐维度 1536，24 头每头 64 维，前馈中间维度 3072，约 1.5 billion 参数，采用 RoPE 与卷积位置编码。训练中 MLLM 语义编码器与音频 VAE 保持冻结，仅更新 Transformer 主干与层融合参数，梯度不回传至冻结模块。

> **看图路径：** 1. 从底部 User Instruction 与 Input Audio 2 条输入向上追踪到 Linear 与 VAE Encoder 的分叉路径；2. 在 Dual Stream MMDiT Block 面板中定位 Joint Attention 与两侧 RoPE+RMS Norm 分支的拼接点；3. 对比 Single Stream DiT Block 的 Self Attention 与双流块的 Joint Attention，确认前者为单一融合序列

[![原论文 Figure 4：Architecture of AuK. (a) The framework maps a user instruction and optional input audio to…](https://arxiv.org/html/2609.08936v1/model.png)](https://arxiv.org/html/2609.08936v1/model.png)

*论文图 4。原论文 Figure 4:：“Architecture of AuK. (a) The framework maps a user instruction and optional input audio to complementary semantic and acoustic conditioning streams.”。*

该图分 3 栏：左侧为总体架构，展示从用户指令与输入音频到语义与声学 2 流，再经双流与单流块到 VAE 解码的完整路径，雪花标记表示冻结模块；中栏为双流 MMDiT 块，突出 Joint Attention 与两侧独立的 Linear、Scale&Shift、LayerNorm 与门控；右栏为单流 DiT 块，突出 Self Attention 对融合序列的作用。阅读时先沿底部输入向上确认 2 条条件流的起点，再对比中栏与右栏的注意力类型差异，确认双流块保留 2 条残差通路而单流块对拼接序列做统一自注意力。

**Prompt Enhancer × 时长估计：** Prompt Enhancer 负责把自由措辞的请求做任务识别、参数校验与模板化改写，使输入更贴近训练分布；时长估计负责在流采样前决定目标潜变量长度，直接影响语速与编辑后时长。搭配原因是自由指令常省略关键参数或隐式指代音频，时长估计需要任务相关的显式参数如字节长度比、语速倍数或风格系数，二者协同才能在不改变应保留内容的前提下给出可执行的采样长度。

Prompt Enhancer 与时长估计是推理时的配套组件。Enhancer 负责任务路由、参数校验与指令改写，时长估计按任务给出 Tout：零样本与内容编辑用字节长度比缩放，语速编辑除以倍数，情感编辑乘系数 κ_e，非言语编辑加偏移 Δ_nv，指令 TTS 先用语言相关的字节速率得基线再由语言模型按风格调整，其余保持输入时长。VAE 解码器为因果 BigVGAN 结构，含 SnakeBeta 激活与多周期分支，负责把潜变量还原为波形。

### 如何构造 5 类监督并组织训练与后训练

预训练语料按 5 家族组织：语音生成、声学编辑、超语言编辑、内容编辑、增强与分离，所有任务共享指令加可选音频到目标波形的接口。语音生成含 2 类：零样本 TTS 采用跨 utterance 的转录无关上下文学习，对同一说话人的 n 条不同 utterance 枚举所有无序对并双向用作提示与目标，得到 n×(n-1) 个实例，推理时无需提示转录；指令 TTS 由 Qwen3-Omni 为每条保留音频生成自由描述与结构化属性，描述与目标文本拼接为指令。

声学编辑用确定性信号处理生成配对目标：语速 0.5、0.75、1.25、1.5、2.0 倍，响度±5、±10、±15 dB，音高±1、±2、±3 半音，分别用保音高时伸、保时长移调与波形增益实现，并做峰值保护。超语言编辑含情感、音色、去口音、非言语与耳语音：情感用 Qwen3-TTS-CustomVoice 与 IndexTTS2 保持内容与音色而改变情感；音色沿用 X-VC 与 SeedVC-Small 的 4 对齐对；去口音覆盖 13 个中文方言口音类别；非言语归一化 39 类事件并用掩码重建；耳语音仅保留 WER=0 的平行对并做电平归一化。

内容编辑对语音与歌词分别做插入、删除与替换，借助 Qwen3-ForcedAligner 定位区间并用 F5-TTS 或 YingMusic-Singer-Plus 做局部掩码填充，仅保留低词错率样本。增强与分离按指令决定保留或去除的分量，涵盖去噪、去混响、信道修复、多说话人对话与音乐人声分离等。

统一预训练分 2 个阶段。第 1 阶段仅用生成任务训练 50k 步建立稳定对齐；第 2 阶段从该检查点出发联合 5 家族训练 600k 步，采样概率为语音生成 28.10%、内容编辑 23.02%、增强与分离 23.17%、超语言编辑 21.75%、声学编辑 3.96%。优化在 256 卡上用 DeepSpeed ZeRO-2 与 bf16，梯度裁剪 1.0，AdamW β 为 0.9 与 0.95，峰值学习率 1×10^-4，前 2000 步线性预热后保持常数，EMA 衰减 0.9999 在 100 步后启用。

流匹配目标与条件丢弃是核心。设 z1 为干净目标潜变量，z0 为高斯噪声，t∈[0, 1]，线性插值与目标速度为

\[\mathbf{z}_{t}=(1-t)\mathbf{z}_{0}+t\mathbf{z}_{1},\qquad\mathbf{v}_{t}=\mathbf{z}_{1}-\mathbf{z}_{0}.\]

模型从 z_t 与时间嵌入及可用条件预测速度，损失为掩码均方误差

\[\mathcal{L}_{\mathrm{FM}}=\frac{\left\|\mathbf{m}\odot(\widehat{\mathbf{v}}_{t}-\mathbf{v}_{t})\right\|_{2}^{2}}{\sum_{i}m_{i}},\]

其中 m 为有效帧掩码，分母为有效帧数。t 采样为 σ(u)，u∼N(-0.8, 0.8^2)，偏向较小 t 即更噪状态。条件丢弃分层进行：先以 0.3 概率丢弃声学条件，再以 0.2 概率丢弃全部条件以支持无条件与仅文本 2 种 CFG 形态；零样本参考以 0.5 概率裁剪至 3 秒到原长间的随机时长以降低对参考长度的敏感度。

后训练分 2 段。编辑偏好优化针对开放式编辑，收集 818 组、9080 个候选的人工 3 档评分，组内全同分则丢弃，定义基于流误差相对参考模型改进的隐式偏好分数，同一组内共享噪声与时间以隔离候选差异，采用 LiPO 的序数列表式目标与标签平滑 0.05，训练 104 步。生成强化学习采用 Flow-GRPO 与 MixGRPO 的 6 步低信噪比窗口随机采样，其余确定性 ODE，组大小 16，rollout 500 步，CFG 2.0，sway -1.0，λ=0.7，KL 系数初值 0.12 并在 0.08 至 0.5 间自适应，训练 500 步。

零样本奖励融合内容正确性与说话人相似度，指令 TTS 奖励由基于 Qwen2.5-Omni-7B 的风格一致性模型经多次投票给出。加速蒸馏分 2 段。第 1 段一致性初始化让学生对任意 z_t 直接预测终点 z1，教师用单步 CFG 推进到 z_t'后匹配 2 处预测，梯度仅过 t 处；第 2 段解耦 DMD 把 CFG 增强与分布匹配解耦到独立重加噪预测上，CFG 分支改用自适应投影引导以抑制过饱和，分离样本路由到干净潜变量回归并排除在 DMD 与伪分数模型更新之外。

2 段均在 256 卡上以 1×10^-5 常数学习率训练，分别为 500 步与 2500 步学生更新，伪分数模型每学生步更新 5 次，CA 分支引导尺度 4.0、η=0。

**整流流匹配 × 一致性蒸馏初始化：** 整流流匹配负责在训练时学习从高斯噪声到干净潜变量的线性插值速度场，目标是最小化掩码均方误差；一致性蒸馏初始化负责把已训练好的 32 步教师轨迹压缩为 4 步学生轨迹，让学生对任意噪声状态直接预测终点。搭配原因是流匹配提供稳定的连续生成目标，一致性初始化则为后续分布匹配蒸馏提供不坍缩的起点，避免少步采样发散。

**解耦 DMD × 任务路由：** 解耦 DMD 把学生更新拆为 CFG 增强分支与分布匹配分支，分别在独立重加噪的学生预测上计算，避免引导迁移与分布对齐绑定在同一噪声水平；任务路由则把分离类样本从 DMD 更新中排除，改用干净潜变量回归。搭配原因是统一 DMD 会让重加噪的错误分离输出落在教师分布外，导致教师场偏向未充分分离的混合音频，路由保留了分离能力而其余任务仍享受分布匹配收益。

**人类反馈偏好优化 × 基于奖励的强化学习：** 人类反馈偏好优化针对开放式编辑，用 3 档人工评分构建序数列表偏好损失，优化自然度与编辑完成度等主观维度；基于奖励的强化学习针对生成，用 ASR、声纹与风格一致性模型的自动奖励优化内容正确性、说话人相似度与指令风格一致性。搭配原因是编辑缺乏可扩展的自动奖励模型而生成可自动度量，二者分阶段互补，且生成 RL 可缓解编辑偏好优化带来的生成质量权衡。

### 在什么数据、指标与推理配置下比较

评估分 3 视角：重建保真度、语音生成与语音编辑。VAE 重建在 Seed-TTS-Eval 测语音、AudioSet 随机 2000 段测通用音频、MUSDB18-HQ 测音乐，对比 MiniMax-H3-AudioVAE、Ming-Omni-TTS、Stable-Audio-3-SAME-L 与 MMAudio-VAE，指标为 PESQ、STOI、mel 距离与多分辨率 STFT 距离，越高越好者为 PESQ 与 STOI，越低越好者为 2 类距离。

生成在 Seed-TTS-Eval 测零样本克隆的词错率与说话人相似度，含 test-en、test-zh、test-zh-hard 3 子集，以及 InstructTTSEval 测声学参数、描述风格与角色扮演的指令遵循度，含 APS、DSD 与 RP，报告 3 轮均值且仅用基准特定模板与时长估计，不启用额外 Prompt Enhancer。编辑分 2 层：通用编辑在 MMAE-Speech 测指令遵循率 IFR、一致性 CR 与全规则精确匹配 EMR，在 SpeechEditBench 测内容、情感、韵律、超语言与声学 5 类联合成功率，在 Ming-Freeform-Audio-Edit 分语义与声学 2 轨测删除、插入、替换与语速、音高、响度的操作级表现。

信号级处理在 DNS Challenge 2020 与 CHiME-4 测增强，在 Libri2Mix 测 2 说话人分离，在 VCTK-SR 测带宽与信道退化的超分辨率，指标含 DNSMOS-OVRL、SIG、BAK、UTMOS、WER、dWER、PER 与 SIM。推理配置上，AuK 使用 EMA 后训练检查点、bfloat16、Euler 求解器、32 次函数评估、CFG 尺度 2.0 与 sway -1.0；AuK-Flash 使用任务路由蒸馏检查点、4 次评估、无 CFG，其余如输出采样率 24 kHz 与潜空间 64 维、50 Hz 保持一致。

训练与推理均在 24 kHz 单声道上进行，潜帧率 50 Hz 决定目标潜变量长度。VAE 训练为 1.24 million 更新，约 33 million 小时语音、音乐与通用音频，采样比 6:3:1。主干约 1.5 billion 参数，30 层中 10 层双流、20 层单流。

### 生成与编辑的主结果：在何种条件下领先、代价是什么

先看预训练任务配比与生成主结果的对应关系，明确联合训练中各家族的权重。该表来自第 2 阶段联合预训练的固定每批次采样概率，5 家族合计 100%，其中声学编辑占比最低而其余 4 家族相对均衡，说明模型在保持生成能力的同时为内容与增强分离分配了相近容量。

| Task family | Sampling probability |
| --- | --- |
| Speech Generation | 28.10% |
| Content Editing | 23.02% |
| Enhancement and Separation | 23.17% |
| Paralinguistic Editing | 21.75% |
| Acoustic Editing | 3.96% |

该表显示语音生成 28.10%、内容编辑 23.02%、增强与分离 23.17%、超语言编辑 21.75%、声学编辑 3.96%。声学编辑仅 3.96% 却需覆盖语速、响度、音高 3 类离散变换，提示该能力依赖确定性信号处理合成的高质量配对而非大量采样。

零样本与指令生成的比较问题是：在相同文本与参考条件下，模型能否同时降低识别错误并保持说话人相似度，以及能否按自由描述实现音色。下表在 Seed-TTS-Eval 平均指标上对比可运行基线，WER/CER 越低越好，SIM 越高越好。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| Seed-TTS-Eval 平均 | WER/CER | 3.07% | 2.65% | Qwen3-TTS |
| Seed-TTS-Eval 平均 | SIM | 0.778 | 0.795 | Seed-TTS |
| Seed-TTS-Eval 平均 | SIM | 0.767 | 0.790 | VoxCPM2 vs AuK-Flash |

表中 AuK 在 Seed-TTS-Eval 平均上取得最低词错率 2.65% 与最高相似度 0.795，相对最强基线分别降低约 0.42 个百分点与提升 0.017；AuK-Flash 以 2.85% 与 0.790 保持竞争力，说明蒸馏未显著损害克隆能力。指令 TTS 的 DSD 上，AuK 中文为 83.37% 优于 Qwen3-TTS-VD 的 81.10%，英文为 81.60% 略低于该基线的 82.40%，而 AuK-Flash 英文 DSD 为 82.40% 与基线持平，显示中英文指令遵循存在互补，未胜出项为 AuK 英文 DSD。

通用编辑的比较问题是：模型能否在遵循编辑指令的同时保持未指定属性不变。下表在 MMAE-Speech 上对比 IFR、CR 与 EMR，3 者越高越好，EMR 要求同时满足所有规则。

| 条件 | 指标 | 本方法 |
| --- | --- | --- |
| MMAE-Speech | IFR | 48.23% |
| MMAE-Speech | CR | 88.11% |
| MMAE-Speech | EMR | 13.85% |

表中 AuK 在 MMAE-Speech 上 IFR 与 CR 分别领先 Step-Audio-EditX 4.71 与 10.84 个百分点，EMR 上 AuK-Flash 以 13.85% 领先 Ming-UniAudio 的 7.04%，表明全规则同时满足的难度仍高但蒸馏版本在该严格指标上更优。SpeechEditBench 与 Ming-Freeform-Audio-Edit 的细粒度结果显示，AuK 在内容与韵律编辑上提升显著，而 Flash 在超语言编辑与说话人保持上更强，体现完整模型与加速模型在语言准确性与感知保持间的权衡。

信号级处理的比较问题是：增强与分离能否在提升感知质量的同时不损失可懂度与说话人一致性。下表在 DNS Challenge、CHiME-4 与 Libri2Mix 上对比可运行系统，dWER 与 WER 越低越好，SIM 与 UTMOS 越高越好。

| 条件 | 指标 | 本方法 | 结果 |
| --- | --- | --- | --- |
| DNS Challenge | dWER | 2.66% | AuK 最低 |
| DNS Challenge | SIM | 0.99 | AuK 与 AuK-Flash 并列最高 |
| CHiME-4 | WER | 7.84% | AuK-Flash 最低 |
| Libri2Mix | SIM | 0.96 | AuK 与 MossFormer2-SS 并列 |

表中 AuK 在 DNS Challenge 上 dWER 最低且 2 版本 SIM 最高，AuK-Flash 在 CHiME-4 上 WER 与 UTMOS 同时领先，Libri2Mix 上 2 版本 SIM 与专用分离模型持平但完整模型在 WER 与 PER 上更低、Flash 在 OVRL 与 UTMOS 上更高，说明感知质量与语言保留的权衡在不同数据集上表现一致。未胜出项为部分基线在单一感知指标上接近，需同时看 WER 与 SIM 才能判断是否以牺牲可懂度换取感知分数。

下图把生成、编辑与增强分离的 3 组对比并置，便于直观确认领先的广度与未胜出项。

> **看图路径：** 1. 在(a) 组先看 Seed-TTS-Eval WER 柱：越短越好，确认蓝色 AuK 柱最短；2. 在(b) 组对比 MMAE-Speech EMR 与 SpeechEditBench 2 组柱，区分编辑成功率与平均成功率；3. 在(c) 组每模型看深色 DNSMOS-OVRL 与浅色 UTMOS 成对柱，确认感知质量与增强/分离任务的对应

[![原论文 Figure 1：Performance comparison with SOTA models across speech generation, editing, enhancement and…](https://arxiv.org/html/2609.08936v1/fig/FIG_ALL.png)](https://arxiv.org/html/2609.08936v1/fig/FIG_ALL.png)

*论文图 1。原论文 Figure 1:：“Performance comparison with SOTA models across speech generation, editing, enhancement and separation.”。*

该图分(a)(b)(c) 3 行：(a) 为 Seed-TTS-Eval 的 WER 与 SIM 及 InstructTTSEval 的 DSD，(b) 为 MMAE-Speech 的 EMR 与 2 类编辑基准的平均成功率，(c) 为 DNS Challenge、CHiME-4 与 Libri2Mix 的 DNSMOS-OVRL 与 UTMOS 成对柱。观察时注意 WER 柱越短越好其余越高越好，蓝色系为 AuK 与 AuK-Flash，灰色为基线。可见生成与编辑的蓝色柱普遍最高或最短，而增强分离中部分灰色基线在单一指标上接近，说明竞争主要集中在感知质量与可懂度的平衡点。图中(a) 组 AuK 的 WER 柱最短、SIM 柱最高，(b) 组 EMR 的 AuK-Flash 柱高于 AuK，(c) 组每模型深色 OVRL 与浅色 UTMOS 成对出现，AuK-Flash 的浅色柱在多处高于 AuK。

### 加速与保真度的权衡：4 步为何能接近 32 步

加速的比较问题是：在相同硬件、输出时长与批次下，4 步无 CFG 的 Flash 能否在不显著损失能力的前提下接近 32 步有 CFG 的完整模型。下表对比推理与训练的关键配置，明确加速的来源与复用条件。

| 配置 | 模型 | 评估次数 | CFG 尺度 | 实测加速 |
| --- | --- | --- | --- | --- |
| 推理 | AuK | 32 | 2.0 | 1.0× |
| 推理 | AuK-Flash | 4 | 无 | 4.5× |
| 训练 | AuK-VAE | 1.24 million 更新 | 33 million 小时 | 冻结后复用 |
| 主干 | Transformer | 30 层 | 1.5 billion 参数 | 10 双流 +20 单流 |

表中加速比 4.5 倍是在匹配条件下对比 4 步无 CFG 与 32 步 CFG 2.0 测得，说明收益来自步数与引导的双重削减，而非硬件或批次差异。VAE 与主干的规模信息表明蒸馏阶段复用了相同数据分布与批次大小，避免因数据偏移引入额外偏差。操作级结果进一步显示，Flash 在 MMAE-Speech 的 EMR 与多项感知质量指标上甚至优于完整模型，而完整模型在平均词错率与部分编辑准确率上更优，说明蒸馏并非均匀有损，而是在不同指标间重新分配。

任务路由的消融意义在于：若对分离样本统一应用解耦 DMD，学生输出会回归到未充分分离的混合音频，重加噪后落在教师分布外导致教师场偏向全局合理但分离不足的解；路由后分离样本仅做干净潜变量回归，保留了分离能力。该设计支持判断：当目标任务含强分离需求时，应保留路由；当目标以感知质量为主时，Flash 的 4 步配置更具性价比。

### 哪些边界尚未验证、哪些依赖仍未去除

论文明确报告了若干限制。第 1，原生自由指令遵循仍不稳健。作者尝试了基于 Audio-Oscar 的智能体数据管线以增加编辑指令的语言多样性，但未带来对任意用户请求的足够泛化，实际仍需 Prompt Enhancer 做任务识别、参数归一化与改写。

这与图像与视频生成中对提示改写的依赖类似，说明能力存在与可靠调用之间仍有差距。第 2，跨任务与跨语言的迁移为定性观察而非全面基准验证。例如仅有普通与耳语音互转的编辑对却能直接按文本与风格指令合成耳语音，仅有中文方言去口音监督却能在英文中减轻口音，这些现象提示联合训练可能分解出与语言无关的声学变换，但尚未经系统化评估。

第 3，增强与分离虽在感知质量与可懂度上具竞争力，但在部分数据集与指标上并非全面最优，且 Flash 与完整模型在不同指标上各有胜负，说明单一模型难以在所有信号级任务上同时最优。第 4，资源与可复现性方面，本次未能确认可达的开源链接意味着外部复现需等待官方发布，且训练涉及 256 卡与大规模数据，硬件与数据门槛较高。

### 复现前先核对什么、按什么顺序跑通

复现应先核对信息条件与数据构造，再跑通推理与评估。数据上，确认 5 家族的构造脚本与采样概率是否与报告一致，重点核对零样本的跨 utterance 配对逻辑、声学编辑的离散档位与峰值保护、超语言与内容编辑的合成与过滤阈值，以及增强分离的指令依赖目标。

模型上，确认 MLLM 与 VAE 冻结、主干 30 层 10 双流 20 单流、隐维度 1536 与 SwiGLU 中间维度 3072 的配置，以及流时间采样与分层条件丢弃的实现。训练上，按生成预热 50k 步再联合 600k 步的顺序恢复，检查动态分桶与每卡 10000 潜帧或 24 条的上限、全局 6144 条约 14 小时每步的批次，以及 EMA 与梯度裁剪的启用时机。

后训练上，分别准备编辑的 818 组人工评分与生成的 10000 条零样本加 5000 条指令提示池，核对偏好损失的组内共享噪声与 GRPO 的 6 步窗口。推理上，先用 Prompt Enhancer 的任务模板与时长估计公式生成目标潜长度，再按 AuK 的 32 步 CFG 2.0 与 AuK-Flash 的 4 步无 CFG 2 套配置对比，评估时对生成与编辑分别采用基准特定模板与时长估计，避免因提示增强不一致导致的不公平比较。

资源上，当前链接不可用，复现需以官方后续发布的代码与权重为准，先在小规模子集上验证流程再扩展到全量。硬件预算上，预训练与蒸馏均在 256 卡上进行，需提前规划分布式与 bfloat16 环境。

### 何时值得尝试 AuK、首要验证与常见误解

当任务需要在同一接口下同时支持文本驱动生成、参考音频驱动克隆、局部内容改写、韵律与声学控制以及按指令的增强分离时，AuK 的统一设计值得尝试。其核心判断是：语义条件与声学潜变量的互补加混合 Transformer 能在不切换模型的情况下覆盖异构约束，而 2 阶段预训练加双后训练能在可度量与主观维度上分别对齐。

首要验证应聚焦 3 点：1 是在目标语言与口音上的零样本与指令遵循度，2 是在目标编辑类型上的 IFR、CR 与 EMR 平衡，3 是在目标场景噪声与混响下的可懂度与说话人保持。若推理预算紧张，可优先验证 AuK-Flash 的 4 步无 CFG 配置在目标指标上是否满足需求，再决定是否回退到完整模型。

常见误解有 3 个：1 是把 VAE 重建分数等同于端到端生成质量，重建仅反映潜空间保真度，端到端还受语义条件与流采样影响；2 是把感知质量提升等同于可懂度提升，二者在增强与分离上常呈权衡，需同时报告 WER 与 UTMOS；3 是把跨任务定性迁移当作已验证的泛化能力，相关观察仍需在目标语言与任务上做受控评估。未来工作应减少对 Prompt Enhancer 的依赖、提升原生指令接地与组合泛化，并进一步降低推理开销。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.08936)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-10/)
