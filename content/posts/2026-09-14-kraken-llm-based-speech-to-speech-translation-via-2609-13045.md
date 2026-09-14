---
title: "Kraken: LLM-based Speech-to-Speech Translation via Low-bitrate VQ and Dual-path Source Conditioning"
date: 2026-09-14
draft: false
tags: [语音翻译, 向量量化, 生成对抗网络, 多语言, 语音]
categories: [论文速递]
description: "针对大模型预测高码率语音 token 难、表达性数据难对齐的问题，Kraken 用 25 Hz 单层 VQ 低码率 token 加 LLM 与声码器双路源语音条件，在 150k 小时多任务数据上实现可复述的端到端语音到语音翻译，并在 FLEURS 与 CVSS 上保留说话人与韵律，代价是音频质量指标弱于用理想参考音色的大模型。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.13045"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "低码率单层量化加双路源语音条件：Kraken 如何让大模型直接说译文"
paper_digest_original_title: "Kraken: LLM-based Speech-to-Speech Translation via Low-bitrate VQ and Dual-path Source Conditioning"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.13045"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.13045.pdf"
paper_digest_primary_task: "语音翻译"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-translation","label":"语音翻译"},{"facet":"method","id":"method.vector-quantization","label":"向量量化"},{"facet":"method","id":"method.gan","label":"生成对抗网络"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "向量量化"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对大模型预测高码率语音 token 难、表达性数据难对齐的问题，Kraken 用 25 Hz 单层 VQ 低码率 token 加 LLM 与声码器双路源语音条件，在 150k 小时多任务数据上实现可复述的端到端语音到语音翻译，并在 FLEURS 与 CVSS 上保留说话人与韵律，代价是音频质量指标弱于用理想参考音色的大模型。"
paper_digest_authors: [{"affiliations":["Sony Group Corporation"],"name":"Hayato Futami"},{"affiliations":["Sony Europe Limited"],"name":"Hassan Shahmohammadi"},{"affiliations":["Sony Europe Limited"],"name":"Tushar Dhyani"},{"affiliations":["Sony Group Corporation"],"name":"Alkis Koudounas"},{"affiliations":["Sony Europe Limited"],"name":"Raphaël Lafargue"},{"affiliations":["Sony Group Corporation"],"name":"Yosuke Kashiwagi"},{"affiliations":["Sony Group Corporation"],"name":"Quentin Jodelet"},{"affiliations":["Sony Group Corporation"],"name":"Emiru Tsunoo"}]
paper_digest_abstract_sha256: "24366d4c8810254c369b92ad615152978550ee0bb8f487f3f38d305e14103d2a"
paper_digest_sidecars: {"citation.bib":{"sha256":"433bcbd06542075ad4a92ba9cd52e0a27b3b39f6dc104bb0e0b2de647b649d6c","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-13045/citation.bib"},"citation.json":{"sha256":"24b311c160ef9ddc54b8fa6e33b97416b112ac9b19404e2527d1243dc15a4fbc","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-13045/citation.json"},"citation.ris":{"sha256":"1976533fbbde508d35f6e39f437ee63e974328e169efefe920dbfad24cb575e2","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-13045/citation.ris"},"rethink-context.json":{"sha256":"9a1f95e68adb8dcf7cf5483a57e89ab84547f42332139ab62e8d9f1810c46b73","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-13045/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5d11ac2cc629c36769517daa04fce737f4b9e93d0377bff5c6848a81a043045f"
paper_digest_api_reader_plan_sha256: "08190fe317c980d0f38b4862625fd15d2d24e7b3cb30a6a75e48da3d21a5d015"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f8956c7c7c58465c71844eccb738e051599ce8b2231cb80550675f8a2ab3dfa0"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "992ee32f52509f3ec92cb5b821f66b69ec7df17c91bcee16c02b0fbef1800d24"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "411d309a101a9d93d4f44c5f65d1f21ce40333e6b334a198c63f45e18491a3f3"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "d922ff23ec751d536f42a0880cad69122da36a35b43290e85c3f27b5f2a3cc77"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 低码率单层量化加双路源语音条件：Kraken 如何让大模型直接说译文

> 英文题目：*[Kraken: LLM-based Speech-to-Speech Translation via Low-bitrate VQ and Dual-path Source Conditioning](https://arxiv.org/abs/2609.13045)*

> 标签：#语音翻译 | #向量量化 | #生成对抗网络 | #多语言 | #语音
>
> 评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Hayato Futami：Sony Group Corporation
- Hassan Shahmohammadi：Sony Europe Limited
- Tushar Dhyani：Sony Europe Limited
- Alkis Koudounas：Sony Group Corporation
- Raphaël Lafargue：Sony Europe Limited
- Yosuke Kashiwagi：Sony Group Corporation
- Quentin Jodelet：Sony Group Corporation
- Emiru Tsunoo：Sony Group Corporation

## 📌 核心摘要

语音到语音翻译需将源语言语音直接转为目标语言语音并保留说话人身份与韵律，难点在于高码率语音标记预测开销大且表达性迁移依赖说话人与韵律严格对齐的双语数据。Kraken先以微调过的W2v-BERT 2.0连续编码器抽取源语音特征并经适配器降采样送入Qwen3-8B大语言模型。大语言模型以思维链依次生成源转录、目标译文与单层向量量化低码率离散语音标记，重建自监督语义嵌入以保持可懂度。离散标记再送入以源语音为条件的GAN声码器Autowave-X合成波形，并经迭代精修模块提升音质，源语音条件同时作用于语言模型与声码器以实现双路迁移。相对多层残差量化与自回归编解码语言模型方案，该设计以单层语义向量量化降低序列长度与架构复杂度，以一步推理声码器替代编解码语言模型并放宽对平行表达数据的要求。在CVSS X-En S2ST评测下，Kraken的ASR-BLEU为43.5，高于Qwen3-Omni的ASR-BLEU 40.9。其结论适用边界受限于仅验证X到英语离线翻译，尚未验证英语到外语、非英语互译与流式同传及强噪声与儿童及低资源口音下的稳定性。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/yukara-ikemiya/wavefit-pytorch> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/microsoft/wavlm-base-plus-sv> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/facebookresearch/stopes/tree/main/stopes/eval/auto_pcp> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，哪些信息不能丢？

这篇论文研究的任务是语音到语音翻译，输入是一段源语言语音，目标是输出另一语言的语音波形。评价时既看语义是否翻对，也看怎么说是否保留下来。论文把后者称为表达性语音到语音翻译，包括说话人身份和韵律迁移。传统做法是 3 段级联，先做语音识别得到源文本，再做机器翻译得到目标文本，最后用语音合成读出来。这种做法会把识别错误传给后面，而且文本中间表示天然丢掉了音色、情感和语气。

端到端语音大模型想用 1 次联合优化解决这个问题，直接从源语音生成目标语音。但论文指出实践中有两个具体困难。第一，大模型难以预测高码率语音 token，高码率意味着序列更长或需要分层预测，带来计算开销和结构复杂度。第二，理想训练数据要求双语录音在说话人和韵律上对齐，这类数据很难收集。Kraken 的回答是压缩输出表示并增加第二条源语音条件路径。

输入仍是源语音波形，输出是目标语音波形，中间必须保留的除了翻译语义，还有可用于声码器恢复音色韵律的源语音条件。后续各节沿这条依赖展开，先看已有路线，再看全景与组件，最后看训练与证据。

### 附录：任务指令与评估资源的可用状态

论文用自然语言指令区分任务，例如识别为转录英语语音，语音到文本为先转录日语再翻成英语文本，语音到语音为再加一步转成语音，机器翻译与语音合成类似。Qwen-Omni 基线用固定英文提示要求听源语言语音并输出目标语言文本，且要求在最后一个词后立即停止以防赘述。评估资源中说话人验证模型地址与 AutoPCP 代码地址本次确认可用，WaveFit 实现地址本次确认可用。权重与完整训练代码按伦理声明不公开发布，因此系统级可运行性受限，复现需依赖自有数据与上述公开组件重新实现。

### 同输入同目标下已有路线如何取舍？

在同样输入源语音、输出目标语音的约束下，已有工作可按是否经过文本和是否分层建模区分。SeamlessM4T 走的是两遍编码器解码器路线，先预测文本再预测语义语音 token，用大规模多语数据训练，论文把它作为主要比较基线。AudioPaLM 把预训练大模型扩展到输入输出语义 token，再用 AudioLM 或 SoundStorm 把语义 token 转成声学编解码 token 和波形。这种两遍做法的好处是编解码语言模型也可以看到源语音，因此训练时不要求说话人韵律严格对齐。Kraken 继承了这个思想，但把编解码语言模型换成高效的 GAN 声码器。

另一类是单模型同时预测语义和声学 token，例如 MSLM 与 SeamlessExpressiveLM，以及 Hibiki 的多流语言模型。这类做法更依赖训练数据本身的说话人与韵律对齐质量，而这正是难以满足的条件。通用语音大模型如 Qwen-Omni 系列也开始直接做该任务，论文同样把它们作为基线。在语音量化路线上，AudioPaLM 与 SeamlessM4T 用固定 k 均值对自监督模型聚类，Hibiki 与 Qwen3-Omni 用残差向量量化。多层残差表示需要深度 Transformer 或多 token 预测等专用结构，而 Kraken 用单层可学习量化以适配标准 Transformer。

在 token 到波形路线上，自回归擅长长时依赖但慢，非自回归可并行，Kraken 属于后者中的 GAN 一步生成，并用 Vocos 改进生成器。

**单层 VQ × 残差向量量化：** 单层 VQ 只用一个 8192 词码本做 1 次量化，分工是输出单流 token 以适配标准 Transformer 自回归预测；残差向量量化用多层码本做层级表示，分工是逐层细化音质但需要深度 Transformer 或多 token 预测等专用结构；搭配比较的原因是二者都是把连续语音离散化的路线，组合意义在于说明 Kraken 选择单层是为了架构简单与低码率，而非追求最高重构带宽。

**自回归 × 非自回归 GAN 声码器：** 自回归负责按时间逐步生成以捕捉长时依赖，分工是质量稳但速度慢；非自回归 GAN 声码器负责并行一步生成，分工是快速合成；搭配原因是离散 token 到波形可以走两条路线，组合意义是 Kraken 选择 Vocos 改进的 GAN 路线，用 1 次前向加可选迭代精炼来换速度，同时靠源语音条件补回表达性。

### 附录：与同目标工作的公平对照要点

与 SeamlessM4T 比，同为端到端到英语，Kraken 在 FLEURS 平均与 CVSS 平均占优，但 Seamless 参数更小且在部分语言如阿拉伯语葡萄牙语仍有单项领先，不能只看平均。与 Qwen2.5-Omni 比，同为通用大模型路线，Kraken 全面占优。与 Qwen3-Omni 比，参数相差约 3 倍，Kraken 在 FLEURS 平均落后但在印地语日语领先，在 CVSS 平均反超，说明域内数据分布影响大。与 AudioPaLM 类两遍路线比，Kraken 同样利用源语音条件放宽数据约束，区别是用 GAN 声码器替代编解码语言模型，速度与结构更简单，但音质上限待验证。所有对照均基于原文报告的同一测试集流程，不同指标差值不混放，自动指标不替代人工结论。

### 难在哪里，为什么压缩与双条件是对应解法？

论文把难点拆成两个可操作的问题。第一个是输出表示太重。语音自监督特征原始帧率可达 50 赫兹，若直接量化预测，大模型每个目标 utterance 要输出很长序列。若用多层残差量化，每一步还要预测多个码本，结构变复杂。做法是把语义表示先降采样再单层量化，让大模型只预测一串短的离散 token。

第二个是监督信号不对齐。真实可用的语音到语音数据往往是合成或弱对齐的，源说话人与目标说话人不是同一人，情感强度也不一致。如果只让大模型 1 次学会翻译加音色迁移，模型会混淆该学什么。做法是把迁移压力分到两处，大模型侧仍能看到源语音特征，声码器侧再看 1 次源语音。这样即使训练数据的音色不匹配，声码器仍可在推理时从提示语音中抽取音色韵律。

理解这两点后，低码率解决的是可预测性，双条件解决的是数据约束，二者缺一不可。

### 沿一个样本走完 Kraken 全流程

假设输入是一句日语语音，要输出英语语音。源波形先进入基于 W2v-BERT 2.0 的语音编码器，该编码器已在多语识别数据上微调，用于缩小模态差距。编码器输出连续特征，经由卷积下采样加线性层的适配器，从 50 赫兹降到 12.5 赫兹后送入大模型。大模型在思维链提示下依次生成源转录文本、目标英语文本和目标语音的低码率 VQ token。VQ token 是单流离散序列，帧率为 25 赫兹。

随后 Autowave-X 声码器把 VQ token 经量化解码器转回连续特征，并以源语音的第 8 层自监督嵌入为条件，经 Vocos 解码器一步生成波形。可选的迭代精炼器再以第 8 层嵌入为条件做多步去伪影，得到最终英语波形。整个过程目标语音的语义主要由大模型决定，音色韵律由两处源语音条件共同约束。下图是论文给出的总体结构，黄色是大模型，蓝色是编码器，绿色是解码器侧模块。
导读：先看整体三块如何连接，再看源语音有几条线进入系统，以及文本与 token 在何处交接。
下图为本次收到的官方原图像素，可执行观察。

> **看图路径：** 1. 沿底部源波形经编码器与适配器进入黄色 LLM 的箭头看主输入路径；2. 看 LLM 输出绿色离散 token 进入 Autowave-X 再经精炼器到顶部波形的输出路径；3. 看左侧蓝色源波形直接横向条件到解码器的第二条路径；4. 对照虚线文本与 token 示例确认思维链中间结果的位置

[![原论文 Figure 1：Overview of our Kraken model architecture.](https://arxiv.org/html/2609.13045v1/overview_v5.svg)](https://arxiv.org/html/2609.13045v1/overview_v5.svg)

*论文图 1。原论文 Figure 1:：“Overview of our Kraken model architecture.”。*

解释：图中底部蓝色框为 W2v-BERT 2.0 加适配器构成的编码器，向上箭头进入黄色大模型。大模型上方出现文本示例与绿色 token 示例，表示先文本后语音的生成顺序。顶部黑色框内为解码器，包含 Autowave-X 与精炼器。左侧蓝色源波形有一条长条件线直接连到解码器，这就是第二条源条件路径，与进入编码器的主路径形成双路。该图不支持读出具体帧率与码本大小，需结合正文参数表核对。

### 编码器、量化器与声码器各自算什么？

语音编码器用的是经识别微调的 W2v-BERT 2.0，含 E-Branchformer 编码器与 Transformer 解码器并带 CTC 目标，在 250,000 小时多语识别数据上训练。论文强调识别微调对缩小模态差距重要。与多数用离散 token 做输入的工作不同，Kraken 用连续特征以保留更丰富鲁棒的表示。训练语音大模型时只更新适配器与大模型，识别编码器固定，提示与编码特征位置不计算损失。适配器把 50 赫兹特征转成 12.5 赫兹，降低大模型输入长度。

量化器输入是预训练 W2v-BERT 2.0 第 20 层嵌入，论文称实验发现该层语义信息最好。结构是编码器加解码器对称的 Conformer，先经 1 维卷积下采样 2 倍把 50 赫兹降到 25 赫兹，再经 3 层 Conformer 编码，投影到 512 维 VQ 空间，用 8192 词单码本量化，再经转置卷积上采样与 3 层 Conformer 解码重构原始嵌入。下式是论文给出的编解码损失，由余弦重构损失与承诺损失组成，其中停止梯度只约束连续隐变量靠近码本向量。

\[\mathcal{L}_{\text{codec}}=\underbrace{1-\frac{\bar{X}^{\top}X}{\|\bar{X}\|_{2}\|X\|_{2}}}_{\text{cosine reconstruction loss}}+\underbrace{\left\|z-\mathrm{sg}(e_{k})\right\|_{2}^{2}}_{\text{commitment loss}}.\]

解释符号与计算：公式中大写 X 为原始未量化嵌入，上横线 X 为重构嵌入，小写 z 为连续隐表示，ek 为最近码本向量。第一项让重构与原始在余弦意义下接近，第二项让 z 靠近被停止梯度的 ek 以稳定量化。输入是第 20 层嵌入序列，目标是可重构语义且可离散预测的低码率表示，输出是离散码与重构嵌入。论文报告该设计达到每帧 13 比特在 25 赫兹下约 325 比特每秒，明显低于对比系统的 2.2 千比特每秒与 664 比特每秒。

**低码率 VQ × Autowave-X：** 低码率 VQ 负责把目标语义压缩成大模型易预测的离散序列，分工是降低长度与层级复杂度；Autowave-X 负责把该序列转成波形，分工是一步生成并补回音色韵律；二者搭配的原因是语义 token 本身不携带足够说话人细节，需要声码器侧再引入源语音条件，组合意义是让 LLM 只学可学的内容，把表达性迁移留给声码器，从而放宽对说话人对齐训练数据的依赖。

**连续语音特征 × 思维链提示：** 连续语音特征负责为 LLM 提供丰富的源语音输入，分工是保留文本丢失的韵律与音色线索；思维链提示负责让模型先写源转录再写目标文本最后写目标语音 token，分工是复用 LLM 文本翻译能力并消解歧义；搭配原因是直接由连续特征跳到语音 token 跨度太大，组合意义是中间文本既监督翻译又让目标语音生成仍能看到源语音特征，保持联合优化。

**W2v-BERT 2.0 第 20 层 × W2v-BERT 2.0 第 8 层：** 第 20 层嵌入负责提供 VQ 量化的重构目标，分工是抽取语义信息以保证可懂度；第 8 层嵌入负责提供 Autowave-X 与精炼器的条件信号，分工是保留更多说话人身份信息；搭配原因是同一编码器不同深度偏向语义或说话人，组合意义是语义与音色解耦到不同层，避免用同一表示同时做两件矛盾的事。

声码器 Autowave-X 基于 UniCATS 的 CTX-vec2wav 改造，把生成器换成 Vocos 以提升合成质量。输入是单层 VQ token，经量化解码器转成连续特征，条件信号是源语音第 8 层嵌入，论文称低层更能抓住说话人身份。训练时微调除 W2v-BERT 2.0 与 VQ 外的全部件，损失包括多周期与多带判别器、梅尔谱损失、特征匹配损失与多分辨率谱损失。迭代精炼器基于 WaveFit 开源实现，以第 8 层嵌入为条件，用跨时间共享参数的生成器多步衰减上采样伪影。论文明确给出两个开源地址，WaveFit 实现与说话人验证模型当前可用，AutoPCP 评估代码当前可用，详见资源状态。
导读：下图展示 Autowave-X 内部如何让离散 token 与源语音条件汇合，可对照像素看交叉注意力的注入点。

> **看图路径：** 1. 从左侧 VQ 卡片经 VQ 解码器进入前后两个 conformer 块的纵向主链；2. 确认底部绿色源语音经第 8 层表示后以交叉注意力同时注入两个 conformer 块；3. 看末端 Vocos 梯形块到右侧灰底波形的输出形状

[![原论文 Figure 3：Autowave-X vocoder enables one-step speech generation from discrete VQ tokens, while preserving…](https://arxiv.org/html/2609.13045v1/autowave-x_v2.png)](https://arxiv.org/html/2609.13045v1/autowave-x_v2.png)

*论文图 3。原论文 Figure 3:：“Autowave-X vocoder enables one-step speech generation from discrete VQ tokens, while preserving source speaker identity and prosody from a given prompt.”。*

解释：图中左侧多层卡片为 VQ 输入，经 VQ 解码器进入前后两个 conformer 块，中间有线性层，末端经 Vocos 到右侧波形。底部绿色源语音经第 8 层表示后以交叉注意力同时指向两个 conformer 块，说明音色条件不是只加在输入端，而是分层注入。该图未给出判别器与损失细节，需回正文核对。
导读：下图展示迭代精炼器如何用条件向量与噪声向量多步生成，可对照像素看共享生成块的循环。

> **看图路径：** 1. 从左侧输入波形经编码器得到条件向量 c 的横向注入位置；2. 看顶部噪声向量逐级经过三个共享参数生成块向下精炼的过程；3. 对照底部精炼后波形与顶部初始噪声的波形差异

[![原论文 Figure 4：Architecture of iterative refinement module.](https://arxiv.org/html/2609.13045v1/refiner_axvq_v2.svg)](https://arxiv.org/html/2609.13045v1/refiner_axvq_v2.svg)

*论文图 4。原论文 Figure 4:：“Architecture of iterative refinement module.”。*

解释：图中左侧波形经编码器得到条件嵌入 c，蓝色线同时注入 3 个纵向堆叠的生成块。顶部噪声向量逐块向下精炼，底部输出精炼语音。该结构对应论文所说跨时间共享参数、每步改善自然度的描述，具体步数与损失权重原文未在证据中给出完整数值，不做推定。

### 训练如何组织，哪些参数更新，推理如何解码？

大模型底座是 Qwen3-8B-Base，词表在原 15.6 万基础上增加 8192 个语音条目，总模型约 9.4B，含语音编码器约 1.1B、适配器约 0.3B、大模型约 8.2B、解码器约 0.3B 及精炼器约 16.5M。实现基于 ESPnet，用 FairScale 分片优化器状态与梯度，优化器为 Adafactor，学习率为 0.0002。训练数据总量为 150,000 小时多语多任务语音，覆盖识别、语音到文本翻译、语音到语音翻译、机器翻译与语音合成，语言包括阿拉伯语、英语、德语、西班牙语、法语、印地语、意大利语、日语、韩语、葡萄牙语与中文，翻译聚焦到英语。

语音到语音训练除 CoVoST2、CVSS-C 与 Voxpopuli 外，还用内部语音合成模型对机器翻译语料双侧合成再按说话人相似度、识别与幻觉过滤，并用 Speech Vecalign 做语音段单调对齐。任务用自然语言指令区分，每任务有 20 到 30 个模板，语音到文本与语音到语音用思维链提示。下式是论文给出的联合优化形式，依次预测源文本、目标文本与目标语音 token，且目标语音生成仍能看到源语音特征。

\[\mathcal{L}=p(\bm{s}^{\rm tgt}|\bm{y}^{\rm tgt},\bm{y}^{\rm src},X^{\rm src};\theta)\\ p(\bm{y}^{\rm tgt}|\bm{y}^{\rm src},X^{\rm src};\theta)p(\bm{y}^{\rm src}|X^{\rm src};\theta),\]

解释：公式中 X 为源语音特征，y 源与 y 目标为中间文本，s 目标为目标语音 token，theta 为模型参数。三项连乘表示先识别再翻译再生成语音的链式过程，但因条件中始终保留源语音特征，仍是联合优化而非完全级联。推理时文本用宽度 3 的束搜索，语音 token 用温度 1.0 采样。原文未报告 VQ 码本重置时机与梯度细节，相关缺项不做推定。

### 在什么数据与指标上测，与谁比才公平？

主评测用 FLEURS 的 10 个语言到英语语音到语音测试集，语言为阿拉伯语、德语、西班牙语、法语、印地语、意大利语、日语、韩语、葡萄牙语与中文。翻译质量用 ASR-BLEU，经 Whisper-large-v3 转录生成语音再用 sacreBLEU 计算。语音到文本部分用 BLEU。音频与表达性用 UTMOS、说话人验证余弦相似度、多语情感识别嵌入余弦相似度与 AutoPCP。基线为 SeamlessM4T-Large v2 约 2.3B、Qwen2.5-Omni 约 7B 与 Qwen3-Omni 约 30B，其中 Seamless 与 Qwen-Omni 用默认说话人，Qwen-Omni 用固定提示并加停止语以防尾部赘述。

域内评测用 CVSS 的 8 个语言到英语测试集，每语言前 1000 条，CVSS 无印地语与韩语。人工评测选 MELD-ST 日英短视频 25 段，每段 3 名英日双语专业标注者按 5 点量表评音频质量、韵律自然度、说话人匹配、情感匹配、翻译质量与总体配音质量，标注者同意并获高于最低工资报酬。比较公平性上，Kraken 约 9B 小于 Qwen3-Omni 约 30B，大于 Seamless，论文同时报告可比或更小规模的胜负与对大模型的差距。下表先看码率与规模条件，明确计算代价不在同一量级。

### 翻译质量与表达性各赢在哪里，输在哪里？

比较问题是：在相同 FLEURS 到英语条件下，Kraken 是否在翻译与说话人韵律上同时占优，音频质量方向是否一致。公平条件是同一测试集与同一 ASR-BLEU 流程，指标方向为 BLEU 越高越好，相似度与 AutoPCP 越高表示迁移越强，UTMOS 越高表示预测音质越好。表后解释需同时看收益与代价，不逐行复述。

| 条件 | 指标 | Kraken 约 9B | Seamless 约 2B | Qwen2.5-Omni 约 7B | Qwen3-Omni 约 30B |
| --- | --- | --- | --- | --- | --- |
| FLEURS 到英语平均 | ASR-BLEU 越高越好 | 平均优于可比规模 | 平均略低于 Kraken | 平均明显低于 Kraken | 平均高于 Kraken 但印地语日语不及 Kraken |
| CVSS 域内到英语平均 | ASR-BLEU 越高越好 | 平均最优 | 平均次优 | 平均最低 | 平均低于 Kraken |
| FLEURS 表达性 | 说话人情感韵律相似度越高越好 | 最优 | 次优 | 较低 | 中等 |
| FLEURS 与 CVSS 音质 | UTMOS 越高越好 | 低于 Qwen-Omni | 较低 | 较高 | 最高 |
| MELD-ST 人工配音 | 韵律说话人情感匹配越高越好 | 最优 | 最低 | 未参评 | 翻译与总体最优 |

论文报告 Kraken 在 FLEURS 上平均 ASR-BLEU 优于 Seamless 与 Qwen2.5-Omni，但略低于 30B 的 Qwen3-Omni，在印地语与日语上仍优于后者。

在域内 CVSS 上则优于包括 Qwen3-Omni 在内的全部基线。表达性上 FLEURS 的说话人、情感与 AutoPCP 均为 Kraken 最优。代价是 UTMOS 不及 Qwen-Omni，论文解释为 FLEURS 源音频质量差而 Kraken 强迁移把劣质音色也传过去，且对比模型用理想参考说话人。人工评测中 Kraken 在韵律自然度、说话人匹配与情感匹配最高，Qwen3-Omni 在音频质量、翻译与总体最高。未胜出项明确：平均翻译对 30B 大模型在 FLEURS 未胜，音质与总体配音未胜，CVSS 上 AutoPCP 不及 Qwen2.5-Omni。

| 方案 | 量化层数 | 帧率 | 每帧比特 | 码率越低越好 |
| --- | --- | --- | --- | --- |
| Kraken 单层 VQ | 单层 8192 词 | 25 赫兹 | 13 比特 | 325 比特每秒 |
| Qwen3-Omni 与 Hibiki 残差量化 | 多层 | 未单独报告 | 未单独报告 | 2.2 千比特每秒 |
| SeamlessM4T-Large v2 | 固定聚类 | 未单独报告 | 未单独报告 | 664 比特每秒 |

该码率表说明 Kraken 输出最短，适配标准 Transformer 单流预测，代价是重构带宽低于多层方案，需靠语义层选择与声码器补偿。

| 部件 | 总量 | 编码器 | 大模型 | 解码器含精炼器 |
| --- | --- | --- | --- | --- |
| Kraken 规模 | 9.4B | 1.1B 含 0.6B 编码器加 0.3B 适配器 | 8.2B | 0.3B 含 16.5M 精炼器 |
| 对比基线规模 | 无 | 无 | Qwen2.5-Omni 约 7B | Seamless 约 2.3B 与 Qwen3-Omni 约 30B |

规模表说明翻译比较并非同参比较，对 30B 的局部胜利更有含金量，但音质落后也可能与参数与数据差异有关。

| 评测 | 基线 | Kraken 结果方向 | 反例与边界 |
| --- | --- | --- | --- |
| FLEURS 语音到文本 BLEU | Whisper 与 Seamless 与 Qwen 系列 | 优于 Whisper 与可比规模 | 平均仍低于 30B 大模型 |
| CVSS 表达性 | 同上 | 说话人最优但 AutoPCP 不及 Qwen2.5-Omni | 韵律迁移非全指标最优 |
| 人工总体 | 原始视频上限 | 接近但低于原始与 Qwen3-Omni | 音频质量仅 1.84 分明显短板 |

最后一张表提醒不能把自动指标当人评，UTMOS 与人工音频质量方向一致指向短板，但翻译 BLEU 与人工翻译分并不完全对应。

### 拿掉精炼器与双路条件会发生什么？

比较问题是：精炼器是否只影响音质，双路中解码器条件与大模型条件是否分工不同。公平条件是同一 FLEURS 集与同一四指标，方向为 UTMOS 越高音质越好，相似度与 AutoPCP 越高迁移越强。表后需给出收益代价与未评测边界。

| 消融条件 | UTMOS 越高越好 | 说话人相似度越高越好 | 情感相似度越高越好 | 韵律 AutoPCP 越高越好 |
| --- | --- | --- | --- | --- |
| 完整 Kraken | 中等 | 最优 | 最优 | 中高 |
| 去精炼器 | 下降 | 略降 | 持平 | 略升 |
| 去解码器条件 | 大幅上升甚至超大模型 | 下降 | 持平 | 下降 |
| 去大模型条件 | 略升 | 下降 | 略降 | 下降 |

论文报告去精炼器后 UTMOS 下降，确认其对音频质量的贡献。去解码器条件后 UTMOS 大幅上升但说话人与韵律相似度下降，说明强迁移会损伤预测音质，揭示质量与表达性的权衡。去大模型条件后说话人与韵律也下降，支持双路均有必要。

负结果是情感相似度在消融中变化不大，说明当前条件对情感的区分度有限。未评测边界是消融未报告翻译 BLEU 变化，无法判断条件对语义的影响，也未报告延迟与步数成本。

### 哪些语言方向与能力不在证据内？

论文明确只做 10 个主要语言到英语的离线翻译，不支持英语到其他语言与非英语对，也不做流式同传。虽然低码率 token 与 GAN 声码器适合实时，但流式仍是未来工作。模型聚焦标准识别、翻译与合成任务，丢失了预训练大模型的通用指令跟随能力，加高级指令的任务表现不会好。训练数据依赖有限公开语料加内部合成，低资源口音方言可能代表不足，不同口音年龄组性能不均匀。

伦理上说话人迁移有未经同意克隆与深度伪造风险，作者声明不公开发布演示代码与模型，使用应获源说话人明确同意。UTMOS 短板在 FLEURS 与 CVSS 均存在，域内差距缩小但仍落后，说明音质问题非单一数据集偶然。复现时不能承诺改善延迟与成本，因原文未测量误判率与端到端延迟。

### 要复现先准备什么，按什么顺序验证？

先准备底座与数据。底座为 Qwen3-8B-Base，需扩展 8192 语音词表。语音编码器为经识别微调的 W2v-BERT 2.0，训练语音大模型时固定编码器只训适配器与大模型。VQ 训练目标是第 20 层嵌入，帧率 50 赫兹降到 25 赫兹，码本 8192，隐维 512，损失为余弦重构加承诺损失。声码器训练固定 W2v-BERT 与 VQ，条件用第 8 层嵌入，生成器为 Vocos，判别与谱损失按 HiFi-GAN、RVQGAN 与 Parallel WaveGAN 组合。

精炼器参考 WaveFit 开源实现，当前可用。评测先跑语音到文本 BLEU 再跑语音到语音 ASR-BLEU，ASR 转录用 Whisper-large-v3，表达性用说话人验证模型与情感模型余弦相似度及 AutoPCP，两个第三方链接本次确认可用。推理文本用束宽 3，语音 token 用温度 1.0 采样。建议先验证低码率 token 可懂度，再验证双条件说话人相似度，最后看 UTMOS 权衡。若无大规模算力，可只复现 VQ 重构与 Autowave-X 条件注入，不必全量微调 150,000 小时。

原文未给出 VQ 训练轮数、声码器学习率与精炼步数，这些缺项需自行搜索并记录，不能从模型名推定。

### 何时值得尝试这种组合？

当任务要求同时保证翻译可懂与保留源说话人韵律，且训练数据说话人不对齐时，值得尝试单层低码率加双路条件的组合。低码率让标准大模型无需改结构即可预测语音，适合已有多语大模型团队快速扩展语音输出。双条件把迁移压力分散到声码器，适合合成数据多、真实对齐数据少的场景。但若应用更看重绝对音质与总体听感，且可用理想音色库，则该组合的强迁移反而可能拉低 UTMOS 与人工音频分，此时应考虑关闭解码器条件或加强精炼。

未来验证应补上消融对 BLEU 的影响、端到端延迟与多口音分层评测，以及英语到其他语言的泛化。只有在这些条件下，才能判断该方法是从可运行基线带来的真实收益，而非搜索最优或事后选择的结果。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.13045)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-14 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-14/)
