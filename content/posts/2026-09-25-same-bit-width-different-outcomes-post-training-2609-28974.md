---
title: "Same Bit Width, Different Outcomes: Post-Training Quantization of Text-to-Speech Across Architectures"
date: 2026-09-25
draft: false
tags: [文本到语音, 模型量化, 端侧运行, 模型比较, 高效推理]
categories: [论文速递]
description: "该研究在统一协议下对 3 个核心加 8 个复现加 2 个盲测 TTS 模型做训练后量化，发现相同位宽下自然度损失完全取决于模型特异的敏感部件，最强证据是 4 比特逐通道权重让 Supertonic 下降 2.8 个 UTMOS 而 Kokoro 仅下降 0.07，而代价是逐张量缩放即使在 8 比特也会严重退化且真实部署的延迟与能耗必须逐运行时验证。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.28974"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "同样 4 比特，不同结局：跨架构 TTS 后训练量化的敏感部件地图"
paper_digest_original_title: "Same Bit Width, Different Outcomes: Post-Training Quantization of Text-to-Speech Across Architectures"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.28974"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.28974.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "模型量化"
paper_digest_score: 8.3
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "该研究在统一协议下对 3 个核心加 8 个复现加 2 个盲测 TTS 模型做训练后量化，发现相同位宽下自然度损失完全取决于模型特异的敏感部件，最强证据是 4 比特逐通道权重让 Supertonic 下降 2.8 个 UTMOS 而 Kokoro 仅下降 0.07，而代价是逐张量缩放即使在 8 比特也会严重退化且真实部署的延迟与能耗必须逐运行时验证。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Se Un Park"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yutae Kim"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junyoung Park"}]
paper_digest_abstract_sha256: "4dccbe424399d4f763c2f8383c0a92df2249b1794615cc6c1260c49bcad91710"
paper_digest_sidecars: {"citation.bib":{"sha256":"5f7ebafa8183bbf389224c47c7c25144f143eb4c44c364eb924156c3ff5dced6","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-28974/citation.bib"},"citation.json":{"sha256":"fcd4732b86727f2ed4a901ab3f6434891056d39cd700644e6b00380ea0a66f4e","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-28974/citation.json"},"citation.ris":{"sha256":"9c5d3d818c1aa6b8c4a47e5c35d44a62483bba03f9250fd924c98c9898b4c061","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-28974/citation.ris"},"rethink-context.json":{"sha256":"d2e3279c6913fe6bd209ab6b8ba086ab991603f1d27e007c849823736b7d6122","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-28974/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "def0fb7661ebc3fa3674c2500a3160d0265862a478b7ead511551a7c2be36571"
paper_digest_api_reader_plan_sha256: "6efb6f9f52b8b73884796ef97fd798002651cc0491257c783046856cd1ee9c7f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "14889df4427a38e7f4d6918af0dcad035a5da68ac4538e7f7a72b2929868ca8a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b0426f3e5c51f4a0eb3bf90dc0baa0c3be449d56fc0d6bee288e7b09378a4961"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b421cd07384572f38a8fa9eabccb07bf0b912f3d80961ccc313a34223317d20e"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5181d3079fb55d4e9476e4d319ae09f267c9875fb8f442e5e62d37172aafa73b"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 同样 4 比特，不同结局：跨架构 TTS 后训练量化的敏感部件地图

> 英文题目：*[Same Bit Width, Different Outcomes: Post-Training Quantization of Text-to-Speech Across Architectures](https://arxiv.org/abs/2609.28974)*

> 标签：#文本到语音 | #模型量化 | #端侧运行 | #模型比较 | #高效推理
>
> 评分：**8.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Se Un Park：机构信息未在 arXiv HTML 中可靠披露
- Yutae Kim：机构信息未在 arXiv HTML 中可靠披露
- Junyoung Park：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

文本到语音需把文本映射为自然可懂的波形，端侧部署要求压缩内存与算力，而训练后量化稍有不慎就会损伤韵律、自然度与可懂度且敏感位置随架构而变，难以照抄位宽。本文先以对称最近舍入扫描8比特、6比特与4比特权重及逐张量、逐通道和分组缩放粒度，再对整机与声码器、语言模型和编解码器等部件做消融以定位敏感部件并用前一步的退化排序决定保护对象，接着用分组缩放与逐层GPTQ校准保护该部件，最后叠加8比特动态激活并在真实int8与int4内核上验证系统代价。与仅研究单系统或单方法的工作不同，该文揭示敏感部件完全因模型而异且不能由前馈、扩散或自回归等模型类别预测，因而必须分阶段实测而非照抄位宽，分阶段消融加校准是恢复音质的关键。在200句英语评测上，4比特逐通道权重使Supertonic的UTMOS下降2.8而Kokoro仅下降0.07。该结论受限于英语预测分主导与小样本盲测，真实延迟与能耗还随运行时剧烈变化。Mac mini上Supertonic的4比特路径为fp32延迟的0.60倍而int8反而更慢，故每种配置都需在目标端验证。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/uxfacdev/tts-ptq-map> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 端侧语音合成要解决什么约束？

输入是待合成的文本句子，目标是在手机或嵌入式设备上离线、私密地生成可懂且自然的语音，输出是波形音频。本解读的输入是论文原文证据与两张官方原图像素，目标是让刚入门的研究生能核对方法并复述实验条件，必须保留的信息是模型范围、量化粒度、部件划分、基线配对方式、指标定义与部署测量条件，输出是 1 篇按学习依赖展开的技术解读。端侧的约束首先是内存与算力，浮点大模型放不下或跑不快。

论文研究的是训练后量化，即训练完成后不再重新训练，只把权重和可选的激活映射为低比特整数。研究生常误以为位宽决定一切，本文的中心矛盾正是相同位宽在不同架构上结局完全不同。理解这一点需要先建立基线概念：每个量化条件都与同一平台、同样采样步数的未量化浮点模型比较，英语用 200 句冻结的 FLORES-200 devtest 句子加固定每句种子，韩语在支持的模型上同样处理。

自然度用 UTMOS 这个预测平均意见分代理，可懂度用转写模型的词错误率或字错误率，系统代价用实时率、常驻内存与每音频秒能量。只有先接受这种配对比较，才能读懂后文的敏感部件结论。

### 已有压缩路线为何不能直接回答跨架构问题？

同输入同目标的已有工作包括 LightSpeech 的架构搜索、声学模型 8 比特后训练量化结合架构压缩，以及 BitTTS 的极端三值训练与权重索引，后者在其自有模型上指出声码器是敏感部件。同运行阶段的扩散模型量化在图像生成已成熟，并由 PTQ4ADM 与步数感知量化扩展到音频生成。方法层面有按 Hessian 曲率排层混合精度的 HAWQ，以及为语音翻译选层精度的 Diet-KIT。

这些工作的问题在于只覆盖单个系统，或多个系统但只用单一方法，没有在同一协议下比较异构预训练语音流水线、量化部件范围、激活粒度与实测部署路径。本文的定位正是补上这个横向比较：核心是 Supertonic V3、OmniVoice 与 Kokoro，复现是 F5-TTS、StyleTTS 2、MMS-TTS、Zonos、Dia、Orpheus、Kyutai TTS 与 CSM-1B，另有 Chatterbox 与 VoxCPM 作为方法固定后才盲测的 held-out 模型。相关工作只能作为对照类别，不能当作同条件胜负，因为基线精度、采样步数与算子覆盖都不同。

### 问题是什么：位宽之外的哪些选择影响结局？

论文要回答的是在给定比特数下，缩放共享方式、被量化部件、激活精度与运行时算子覆盖如何共同决定质量。形式上，权重只做对称舍入取整量化，偏置、嵌入与归一化参数保持浮点，线性与卷积权重被量化。缩放因子为 16 比特，按张量、按输出通道或按通道内连续 128 个权重成组共享，默认是逐通道。通道指特征维度而非音频通道。激活则区分逐输入特征在全部时间步共享的逐通道缩放，与按时间步共享的逐令牌缩放。

评估时模拟条件先反量化再执行只测质量，真实条件则用实际 8 比特与 4 比特算子测内存、延迟与能量。关键混淆是采样步数：若把所有步数的量化结果都与默认步数的浮点基线比，会误以为步数越多量化损失越小，因此必须匹配相同步数。另一个混淆是不同模型的浮点基线精度不同，有 32 位浮点、16 位浮点与 bf16 之分，必须各自归属。

### 统一协议如何组织一次可复述的量化试验？

沿一个样本走完全程有助于复述。取一句英语 FLORES 句子，送入未量化浮点模型得到参考音频与 UTMOS、词错误率分数；再取同一句子、同样子、同样本数与同样平台，把目标权重按选定比特与粒度量化后合成，得到配对分数并计算差值。校准用的句子与评测集不相交，英语模型用 64 句英语校准合成收集输入统计。权重扫比特为 8、6、4 比特，激活在选定权重配置上加模拟动态 8 比特。

部件试验包括整模型、单个部件与混合精度组合。采样步数对 Supertonic 扫 4、8、12，对 OmniVoice 扫 4、8、16、32。部署试验把仿真中选出的配置搬到真实算子验证排序是否保持。

**后训练量化 × 对称舍入取整量化：** 后训练量化负责在不重新训练的前提下把已训练好的浮点权重映射为低比特整数以省内存和计算，对称舍入取整量化负责具体的映射规则，即用 s=max|w|/(2^{b-1}-1) 定步长再四舍五入，二者搭配的原因是前者限定了只能用校准统计量而不能改权重，后者提供了无校准基线，组合意义是后续所有 GPTQ 与激活感知缩放的改善都以该基线为参照。

该流程的教学价值在于每一步都可重放：代码、句子、每句分数、计时记录、版本、种子、校准设置与每次运行的量化规格都已按原文存档，资源状态为可用时可写当前可用，本文依据的资源状态为可用。

### 权重与激活的粒度与部件如何划分？

权重粒度决定量化步长由多大范围的最大绝对值决定。组内最大权重设定步长，因此大动态范围的通道会拖累同组小权重。论文用权重域信噪比估计说明逐通道比逐张量有 10.6 分贝优势，超过多给一比特的收益。部件划分依模型结构而定：Supertonic 区分流估计器与声码器，OmniVoice 区分掩码扩散语言模型、令牌头与编解码器解码器，Kokoro 则整体量化。复现模型中 Zonos 与 Dia 突出语言模型，Kyutai 突出深度变换器，StyleTTS 2 区分声码器式解码器与其余网络。

激活试验先单独测权重，再在选定权重上加 8 比特激活，区分逐通道与逐张量。真实部署还区分算子覆盖，例如把 Supertonic 的稠密 1×1 卷积改写为矩阵乘使 4 比特算子覆盖 99.5% 权重，而出厂只有 7.6%，否则测到的加速与质量都不代表方法本身。

**逐通道缩放 × 逐张量缩放：** 逐通道缩放负责为线性层每个输出特征或卷积每个输出滤波器单独设一个 16 比特缩放因子，逐张量缩放负责整张权重张量共用一个缩放因子，前者分工是隔离通道间大幅值差异，后者分工是极致省存储，搭配比较的理由是同一位宽下步长由组内最大权重决定，组合意义是论文用二者差异解释了为何逐张量在 8 比特仍可严重退化。

研究生应记住粒度不是精度微调，而是决定步长的分组方式，部件不是模型类别标签，而是消融中可单独量化或保持浮点的模块。

### 敏感部件的定位机制是什么？

定位机制是分阶段消融。先做整模型在 3 种粒度下的 4 比特权重试验，再做最敏感部件单独 4 比特逐通道，以及除该部件外其余部分 4 比特而该部件保持浮点。若部件单独损失接近整模型损失，而其余部分保持浮点即恢复，则该部件是主因。若两部件合在一起的损失超过各自单独损失之和，则存在放大交互。论文报告 Supertonic 声码器单独即产生显著损失而流估计器单独损失很小，保持声码器 8 比特其余 4 比特即可恢复到接近浮点。

OmniVoice 在 CUDA 消融中解码器贡献大于令牌头与语言模型，但令牌头加解码器、语言模型加令牌头的联合损失都超过加和。StyleTTS 2 的解码器与其余部分单独损失都不大但联合损失更大。盲测阶段先按敏感度图预测并记录，再实际运行验证，Chatterbox 与 VoxCPM 的预测都错了，实际找到的都是流匹配解码器或局部扩散变换器，说明不能从模型类别或参数占比推定。

**声码器 × 流估计器：** 声码器负责把中间声学表示合成为波形，流估计器负责在 Supertonic 中做流匹配的声学建模，前者分工在波形细节，后者分工在分布变换，搭配做部件消融的理由是整模型 4 比特退化可能是局部部件放大，组合意义是 Supertonic 声码器单独 4 比特即产生 -2.87 而流估计器单独仅 -0.17，从而定位保护对象。

该机制的要点是每次只动一个部件，其他模块在同位宽同粒度下仍做舍入取整量化，保证归因公平。

### 本研究训练了什么，没有训练什么？

本研究没有训练任何语音合成模型，所有被测模型都是异构预训练流水线，Supertonic、OmniVoice、Kokoro 及复现与盲测模型均按出厂精度调用。唯一的拟合发生在校准式后训练量化阶段，且 1 次只作用于一个部件。逐层 GPTQ 用浮点模型合成的 64 句英语校准句收集该部件每层的输入统计，然后逐层补偿量化误差，该部件其余模块仍用同位宽同粒度的舍入取整量化。激活感知缩放则按强度系数调整权重以保护大激活通道，论文在 OmniVoice 令牌头加解码器上试了多个强度，最优 0.25 仍不及无校准的组 128。

需要补的缺项是原文未报告 GPTQ 与缩放的梯度路径细节与优化器更新规则，也未报告跨种子校准统计的稳定性分解，因此不能从冻结参数推定输出确定，也不能把无训练等同于确定性求解。复现时应把校准当作恢复敏感部件的关键步骤，而非对已存活配置的微调。

### 校准与混合精度如何组合使用？

组合的顺序是先用无校准舍入取整找到敏感部件，再对该部件试更细粒度、更高精度或校准。混合精度指敏感部件用 8 比特或浮点，其余用 4 比特。校准指在敏感部件内部用 GPTQ 或缩放替代纯舍入。论文在 OmniVoice 语言模型上组 128 的 GPTQ 优于舍入与缩放，在 F5-TTS 声码器与 Kyutai 深度变换器上逐层 GPTQ 把组 128 的损失恢复到 0.1 以内，而缩放每格都较弱。对 Supertonic 声码器则没有任何强度能恢复，说明校准不是万能。VoxCPM 局部扩散变换器经 GPTQ 仍未进入质量保持带，提示需要双部件保持 8 比特的混合精度。

**逐层 GPTQ × 激活感知权重缩放：** 逐层 GPTQ 负责用 64 句英语校准合成的输入统计逐层校正量化误差，激活感知权重缩放负责按激活幅度以强度 alpha 调整权重以保护重要通道，前者分工是利用 Hessian 式误差补偿，后者分工是提前缩放，二者搭配比较的理由是都要在同一位宽和粒度下只作用于敏感部件，组合意义是论文显示 GPTQ 能把 F5-TTS 声码器与 Kyutai 深度变换器恢复到 0.1 以内而缩放普遍较弱。

初学者应把校准理解为针对已定位部件的修复操作，而不是全局搜索最优比特的替代品。

### 数据、基线、指标与统计如何保证可比？

每种评测语言用同样的 200 句冻结 FLORES-200 devtest 句子与固定每句种子，每个条件与未量化模型在其原生浮点精度、同一平台、同样采样步数下配对。基线为 Supertonic、Kokoro 等用 32 位浮点，OmniVoice 与 Dia 用 16 位浮点，Orpheus、Kyutai、CSM、VoxCPM 与 Zonos 主干用 bf16。默认步数为 Supertonic 8 步、OmniVoice 32 步。质量用 UTMOS 作英语自然度代理，NISQA-TTS 与 DNSMOS 在 251 次运行上作次级代理并与 UTMOS 比配对差值的 Spearman 相关，转写错误用 faster-whisper large-v3 作可懂度代理，英语报每句平均词错误率，韩语报字错误率。统计用 200 句上 10000 次重采样的配对 95% 自助区间，以未舍入端点判断质量保持。系统测量在 Mac mini M4 Pro 上用 ONNX Runtime 动态 8 比特与 PyTorch 动态 8 比特测实时率、峰值常驻内存与整进程高出空闲的芯片能量，图形处理器用 torchao 编译执行测 NVML 设备能量，不含主机功耗与加载编译。

**UTMOS × 词错误率：** UTMOS 负责作为英语自然度的预测平均意见分代理，词错误率负责用 faster-whisper large-v3 转写计算每句平均可懂度，前者分工是听感，后者分工是内容正确性，搭配理由是自然度好但转写错仍不可用，组合意义是论文把质量保持定义为 UTMOS 配对区间在[-0.05,0.05] 内且 WER 上界不超过 0.01，缺一不可。

只有核对数据集、模型基线、实验阶段、指标、单位与聚合对象一致，数值相同才可比，百分点与相对百分比不可混用。

### 相同位宽为何产生不同结局？

比较的问题是固定位宽与粒度时整模型损失是否一致，公平条件是各自浮点基线配对且步数匹配，指标方向是 UTMOS 差值越接近零越好，词错误率越低越好。8 比特逐通道权重在 3 个核心模型上变化小且区间包含零。6 比特在 Supertonic 已出现明显下降而另两者很小。4 比特逐通道的整模型差异最大，这正是标题的证据。下表整理校准试验中最敏感部件在两种粒度下的配对 UTMOS 差值，展示 GPTQ 的恢复作用与缩放的不足，组 128 本身已能缓解部分模型但不能恢复 Supertonic 类声码器。表前已提出比较问题与公平条件，表后将解释收益与代价。

| Component | Scales | RTN | Scaling | GPTQ |
| --- | --- | --- | --- | --- |
| F5-TTS vocoder | per-channel | -0.94 | -0.61 | -0.15 |
|  | group:128 | -0.48 | -0.22 | -0.07 |
| Kyutai depth transformer | per-channel | -2.99a | -1.82c | -0.29 |
|  | group:128 | -2.98b | -0.20 | -0.08 |
| VoxCPM local DiT | per-channel | -2.73d | – | -0.71 |
|  | group:128 | -1.26 | – | -0.41 |

该表显示 F5-TTS 声码器与 Kyutai 深度变换器在组 128 加 GPTQ 后分别只差 0.07 与 0.08 且词错误率回到浮点水平，而纯舍入分别为 0.48 与 2.98 的损失，缩放介于中间。VoxCPM 局部扩散变换器即使 GPTQ 仍有 0.41 损失，说明敏感部件的可恢复性本身也是模型特异的。未胜出项是缩放，在该表每格都弱于 GPTQ。组 128 对 Kyutai 无改善的细节进一步说明粒度不是通用解。
本节配图的敏感度图需要在像素层面核对，导读如下：该图行为模型加最敏感部件标注，列为整模型 3 种粒度、部件单独与除部件外其余部分的 4 比特损失幅度，颜色越深损失越大。

> **看图路径：** 1. 先按行找到每个模型名后括号标注的最敏感部件，再横向比较整模型三种粒度列的数值变化；2. 再纵向比较 component 列与 rest 列，判断损失是集中在一个部件还是需要组合才放大；3. 最后单独看最后两行盲测模型的 component 与 rest 差异，验证流程是否找到流式解码器

[![原论文 Figure 1：Sensitivity map. Magnitude of the paired UTMOS loss at 4-bit weights against each model’s own fp…](https://arxiv.org/html/2609.28974v1/fig6.png)](https://arxiv.org/html/2609.28974v1/fig6.png)

*论文图 1。原论文 Figure 1:：“Sensitivity map. Magnitude of the paired UTMOS loss at 4-bit weights against each model’s own fp baseline for the whole model under three scale granularities, for the most…”。*

从像素可见 Supertonic 声码器行整模型列深色集中，Kokoro 解码器行整体浅色，OmniVoice 编解码器行在逐张量列深而组 128 列明显变浅，Zonos 与 Dia 的语言模型列显示部件单独深而其余部分浅，Kyutai 深度行在各列都深，最后两行盲测模型的流式部件列深而其余部分浅。这些可见差异支持敏感部件模型特异且不能从类别预测的判断，但具体数值应以正文报告为准，像素不能精确读数时不硬写。

### 位宽与粒度扫出哪些可运行的配置？

本节把权重位宽与缩放粒度的主结果整理为可运行策略的数字表，数据配置表不能替代。比较保留原文实际可运行的舍入取整与组缩放策略，不拿事后最优代替可部署收益。下表每行都是原文连续句可覆盖的数值，单位与精度保留原文。表前问题是降低位宽与放粗粒度各付出多少自然度与可懂度代价，公平条件是同模型浮点基线，指标方向同前。

| 条件 | 权重配置 | 自然度变化 | 可懂度变化 | 备注 |
| --- | --- | --- | --- | --- |
| Supertonic 6 比特 | 整模型逐通道 | -0.56 | 未报告显著变化 | 中等位宽已下降 |
| Kokoro 6 比特 | 整模型逐通道 | -0.003 | 未报告显著变化 | 几乎无损 |
| OmniVoice 6 比特 | 整模型逐通道 | -0.03 | 未报告显著变化 | 几乎无损 |
| Kokoro 4 比特 | 整模型逐通道 | -0.07 | 未报告 | 轻微 |
| Kokoro 4 比特逐张量 | 整模型逐张量 | -3.15 | 0.030 到 0.261 | 粒度放粗致灾 |
| Supertonic 8 比特逐张量 | 整模型逐张量 | -1.642 | 浮点水平词错误率 | 8 比特仍退化 |
| OmniVoice 4 比特组 128 | 整模型组 128 | 1.363 到 3.761 | 未报告 | 组粒度部分恢复 |

表后解释是相同 4 比特下 Supertonic 与 Kokoro 结局相反，逐张量即使在 8 比特也可致灾，组 128 能把 OmniVoice 从 1.363 提升到 3.761 却救不了 Supertonic。代价是该表未给出每配置的完整词错误率与区间，限制是不能据此承诺可懂度无损。未胜出项是逐张量，在 Kokoro 与 Supertonic 上都是反例。未评测边界是该表未覆盖激活组合，需下节补充。

### 步数、激活与算子覆盖如何改变结论？

消融按问题组织。步数问题是增加采样步数能否弥补量化，条件是否一致是关键。若都与默认步数基线比，OmniVoice 的量化退化似乎随步数减少，这是混淆；与同步数基线配对后，额外步数只缩小词错误率惩罚而不关闭 UTMOS 缺口，在 Supertonic 上缺口还随步数扩大。激活问题是 8 比特激活附加多少损失。

逐通道 8 比特加到选定 4 比特配置上最多增加 0.09 以内的 UTMOS 损失且词错误率在 0.01 内，而逐张量 8 比特在 Supertonic 声码器单独即产生大损失，在 OmniVoice 上最敏感部件从权重下的解码器转移到激活下的令牌头。算子覆盖问题是真实动态 8 比特为何与仿真相悖。Mac mini 上 Supertonic 全图动态 8 比特用逐张量激活使词错误率升至 1 以上且延迟为 2.09 倍，而只把矩阵乘量化、卷积留浮点的对照则质量保持，说明量化图的算子覆盖决定结局。

步数与惩罚的可视证据如下：左为 UTMOS 差值随步数变化，右为匹配相对词错误率惩罚百分比。

> **看图路径：** 1. 左图先区分实线匹配同步数基线与虚线固定默认步数基线的走向差异；2. 右图再看相同步数下词错误率相对惩罚随步数增加是缩小还是维持；3. 最后对照 Supertonic 与 OmniVoice 在 UTMOS 缺口随步数变化的不同方向

[![原论文 Figure 2：W4 per-channel versus sampling steps (NFE).](https://arxiv.org/html/2609.28974v1/fig5.svg)](https://arxiv.org/html/2609.28974v1/fig5.svg)

*论文图 2。原论文 Figure 2:：“W4 per-channel versus sampling steps (NFE).”。*

从像素可见左图虚线与实线走向分离，Supertonic 匹配线随步数下探而 OmniVoice 匹配线维持缺口，右图两条惩罚线随步数下降，蓝色圆点与橙色三角分别代表 2 模型在不同基线下的标记，纵轴左侧为差值右侧为百分比，横轴为步数。这些可见走向支持必须用匹配基线的判断，末步数值不推广全程，精确步数值以正文为准。

### 哪些结论有边界，什么还没有验证？

论文直接报告的是配对差值与区间，有限解释的是敏感部件的模型特异性，未验证的是跨语言自然度与中等差异的听感排序。限制包括两盲测只检验流程能否找到敏感部件而不检验顺序收益，且 2 模型都与敏感度图的编解码或潜块设计相似。UTMOS 只在英语上训练，韩语证据只有字错误率。NISQA-TTS 与 UTMOS 在多数英语基线上秩相关为正，但在 StyleTTS 2 上较低。

非正式听感 12 人 96 片段与 UTMOS 在严重退化上一致，但在中等差异上不一致，听者给 VoxCPM 混合精度排序高于其扩散变换器 GPTQ 变体，尽管后者 UTMOS 更高，因此不能把自动指标当人评。自助区间只量化句子抽样，不校正按测试句选最优强度或粒度的选择偏差。跨种子配对差值的标准差在 22 个条件 10 个模型上保持在 0.06 以下，这是报告的稳定性边界。相关性不是因果，未测量误判率与延迟时不承诺改善。

### 复现先做什么，如何判定质量保持？

复现的第一步是按出厂精度跑通浮点基线并固定 200 句、种子、平台与步数，再跑舍入取整的粒度扫描。第二步做部件消融定位敏感部件，第三步对敏感部件试混合精度或逐层 GPTQ，第四步单独测激活缩放再测组合，最后在目标运行时测质量与系统代价。判定用双条件：配对 UTMOS 区间完全落在负 0.05 到 0.05 内且配对词错误率区间上端不超过 0.01，以未舍入端点为准。下表直接选用原文的质量保持判定表，展示哪些配置通过、哪些差之毫厘。表前问题是哪些选定配置真正同时满足自然度与可懂度，公平条件是各自浮点基线配对，指标方向是区间越窄且贴零越好。

| Configuration | CI | WER+ |
| --- | --- | --- |
| Kokoro real int8 (PyTorch) | [-0.000, 0.003] | 0.001 |
| OmniVoice W8A8, compiled, NFE 8 | [-0.038, 0.048] | 0.002 |
| Kokoro W4 group:128 | [-0.039, -0.035] | 0.002 |
| Supertonic int8, no vocoder | [-0.056, -0.018]∗ | 0.005 |
| Chatterbox T3 W4, S3Gen W8 | [-0.032, 0.001] | 0.005 |
| Chatterbox real int4 on T3 | [-0.012, 0.020] | 0.003 |
| Orpheus real int4 on the LM | [-0.022, 0.034] | 0.012∗ |
| Kyutai depth transf. W4 g128 GPTQ | [-0.111, -0.058]∗ | 0.006 |
| F5-TTS vocoder W4 g128 GPTQ | [-0.088, -0.046]∗ | 0.004 |
| Supertonic int4 W, no vocoder | [-0.094, -0.042]∗ | 0.009 |

表后解释是通过项包括 Kokoro 真实 8 比特、OmniVoice 编译 8 比特权重加 8 比特激活、Kokoro 4 比特组 128、Chatterbox 混合精度与真实 4 比特语言模型，失败项多为 UTMOS 差 0.01 到 0.06，其中 Supertonic 无声码器 8 比特与 4 比特、Kyutai 与 F5-TTS 的 GPTQ 变体都卡在自然度条件，Orpheus 真实 4 比特卡在词错误率上端超 0.002。未胜出项提示即使 GPTQ 恢复到 0.1 以内也不等于进入保持带。复现时应保留关键超参数如组大小 128、校准 64 句、NFE 集合，并区分代码可用、权重下载与系统可运行，本文资源为代码可用。

### 真实部署的内存、延迟与能量如何复测？

部署问题是仿真排序能否在真实算子复现以及代价是否与硬件相关。公平条件是同设备同编译同步数，指标是实时率与其相对浮点倍数、峰值常驻内存、功率与每音频秒能量，中央处理器能量含加载而实时率只计合成，因此能量不等于功率乘实时率。下表用原文连续句覆盖的数字整理可运行策略的代价，保留原文倍数与单位写法。

| 条件 | 质量变化 | 延迟倍数 | 能量变化 | 硬件 |
| --- | --- | --- | --- | --- |
| Supertonic 动态 8 比特全图 | 0.028 到 1.11，0.052 到 1.27 | 2.09 倍浮点延迟 | 未单独改善 | Mac mini M4 Pro |
| Supertonic 4 比特无声码器 | 仿真排序保持 | 0.60 倍浮点延迟 | 未测该行能量 | Mac mini |
| Orpheus 语言模型纯权重 8 比特 | 未报告 UTMOS 大变化 | 1.5 倍更快 | 省 34% 能量 | L4 |
| OmniVoice 4 比特语言模型 8 步 | 未报告大 UTMOS 变化 | 2.1 倍延迟 | 2.2 倍能量 | RTX PRO 6000 |
| Orpheus 大语言模型 4 比特 | 未报告大变化 | 0.50 倍延迟 | 0.45 倍能量 | RTX PRO 6000 |

表后解释是真实 4 比特与 8 比特算子复现了仿真排序，但代价高度依赖运行时：Mac mini 上 4 比特比浮点快而 8 比特更慢，OmniVoice 小模型上 4 比特更慢而 Orpheus 大模型上更快。代价是延迟与能量不能从位宽推定，必须在目标运行时验证。未评测边界是中央处理器 4 比特行未测能量，图形处理器能量不含主机功耗。

### 何时值得尝试，后续还需补什么验证？

当需要在端侧部署已训练语音模型且不能重新训练时，值得按 staged 顺序尝试：先匹配基线与双指标，再扫粒度，再消融定位敏感部件并用高精度或逐层 GPTQ 保护，再单独测激活，最后测组合与目标运行时。波形解码器或编解码器是优先测试对象，但盲测证明不能只测它，流匹配解码器与扩散变换器同样可能是主因。逐张量缩放即使 8 比特权重或激活也可能致灾，应默认避免。

后续验证应补韩语自然度的人评、跨种子校准稳定性、对选择偏差的校正，以及在目标芯片上的端到端延迟与能量。教学层面的误解是把总体趋势当每组都成立，实际上组 128 对 Kyutai 无效、对 Supertonic 声码器无效，额外步数对可懂度与自然度作用相反。记住相同位宽不同结局不是修辞，而是部件、粒度与算子覆盖共同决定的可测量现象。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2609.28974)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-25/)
