---
title: "WaveGen: Truly End-to-End Waveform Generation via Internal Spectral Trajectory Learning"
date: 2026-11-12
draft: false
tags: [文本到语音, 扩散模型, 流匹配, 端到端学习]
categories: [论文速递]
description: "WaveGen 用单模型同时学习内部频谱轨迹和波形轨迹来解决文本到高分辨率波形难以对齐和优化的问题，在 Emilia 数据和 Seed-en 上达到 WER 1.47 与相似度 0.75，代价是需要大规模数据、较多采样步数和对压缩音频高频细节的依赖。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.12527"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "WaveGen：直接从文本生成波形的端到端语音合成"
paper_digest_original_title: "WaveGen: Truly End-to-End Waveform Generation via Internal Spectral Trajectory Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.12527v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.12527v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.12527v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 8.1
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "WaveGen 用单模型同时学习内部频谱轨迹和波形轨迹来解决文本到高分辨率波形难以对齐和优化的问题，在 Emilia 数据和 Seed-en 上达到 WER 1.47 与相似度 0.75，代价是需要大规模数据、较多采样步数和对压缩音频高频细节的依赖。"
paper_digest_authors: [{"affiliations":["Department of Artificial Intelligence, Ajou University, Suwon, Korea"],"name":"Sang-Hoon Lee"},{"affiliations":["Frontier AI Lab, KT Corp., Seoul, Korea"],"name":"Ha-Yeong Choi"}]
paper_digest_abstract_sha256: "cd57f2e33d82da61ca656b7277927e82408f6e534621c5fa016f97550d2822e4"
paper_digest_sidecars: {"citation.bib":{"sha256":"a7495d48788273fe8b377bb72842aaa239ba21122e2bc3a94401cc02434640fa","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12527/citation.bib"},"citation.json":{"sha256":"aaf53d1658f302625b26708082c2d66deb24601272430373e73c40475a7202ae","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12527/citation.json"},"citation.ris":{"sha256":"2f6c38f3487ff5e1449bf44c2b30ea13802e881e569fe6376012027a9328f7ab","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12527/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"293070f3685934d7cb1398f753a8f7455ada4f59ed2894cd3ac4d44a8c77ac30","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12527/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "a83fe4e6c1f6089f13e9a706badfe17d513a4e79219cf7e41af55ccf395b13cd"
paper_digest_api_reader_plan_sha256: "cb0dbc4afe19d04f98f711d0c8d18d1db043f5fb05f37b2912fe29125081dc1d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8bbf129ba33d4d566fc5ac8a330bc32ed49e5989195ed715fbac1abad07336aa"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "cc53d32ecbbfd786ec5b8b6288f6a68b6498e5d9baec0a62511f8f0e5a628d28"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1f576169ae5005e7c32f46c2214adba2b1dd44b23ec37283e89d9807779978f6"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0e692c4fb763b050f7c01d2793d6ae545530a1f782d4deb270b97136f90c6357"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 WaveGen：直接从文本生成波形的端到端语音合成

> 英文题目：*[WaveGen: Truly End-to-End Waveform Generation via Internal Spectral Trajectory Learning](https://arxiv.org/abs/2611.12527v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [扩散模型](/audio-paper-digest-blog/papers/?concept=method.diffusion)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)；[端到端学习](/audio-paper-digest-blog/papers/?concept=method.end-to-end-learning)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Sang-Hoon Lee：Department of Artificial Intelligence, Ajou University, Suwon, Korea
- Ha-Yeong Choi：Frontier AI Lab, KT Corp., Seoul, Korea

## 📌 核心摘要

零样本语音合成需由文本与短提示语音直接生成音色一致的输出波形，难点在于24,000 Hz原始波形时间分辨率很高，文本与语音难以在高维波形空间直接对齐。WaveGen为此引入内部频谱轨迹作为辅助生成目标，先将加噪波形和加噪内部频谱表示拼接后送入共享模块学习文本语音对齐，共享模块输出的对齐表示再被两个浅层分支接收并分别精修波形轨迹与频谱轨迹，最后用平均上采样的文本嵌入提供条件以稳定端到端优化。与依赖声码器、神经音频编解码器或隐变量模型及外部时长预测器的级联管线不同，该单模型同时学习波形与频谱轨迹，避免了中间表示约束与级联误差传递。训练时模型先预测干净目标，再换算到速度空间计算波形与频谱损失，并增加多分辨率频谱加权项平衡多分辨率时间频率优化，推理时用欧拉法迭代去噪得到波形。在Seed-en基准上，0.6B的WaveGen取得词错率1.47、说话人相似度0.75，优于表中同量级Qwen3-TTS 0.6B的1.68和0.70。该结论适用于公开Emilia数据和单阶段训练条件，MP3压缩数据的高频细节仍受限。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/sh-lee-prml/WaveGen> — 链接可访问（HTTP 200）；README 已验证包含安装、推理与微调文档

- 第三方资源：<https://github.com/SparkAudio/Spark-TTS> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/AmphionTeam/TaDiCodec> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/SWivid/F5-TTS> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/k2-fsa/ZipVoice> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/FunAudioLLM/CosyVoice> → <https://github.com/QwenAudio/CosyVoice> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/QwenLM/Qwen3-TTS> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/OpenMOSS/MOSS-TTS> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/microsoft/VibeVoice> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/microsoft/VibeVoice-Realtime-0.5B> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/OpenBMB/VoxCPM> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/openai/whisper> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 零样本语音合成要从什么输入生成什么声音

零样本文本转语音的输入是两部分，一部分是要朗读的新文本，另一部分是目标说话人的一段提示语音，目标是生成内容符合文本、音色和说话风格像提示语音的波形。输出必须是可直接播放的原始波形采样点，本文实验统一用 24,000 Hz 采样率。评价时要同时看三件事：内容是否读对、声音像不像目标人、听感是否自然。论文用词错误率衡量可懂度，用 WavLM-Large 计算的余弦相似度衡量说话人相似度，用 DNSMOS 预测听感，词错误率越低越好，后两者越高越好。

理解后续设计的关键是，已有主流做法把任务拆成两段，先由语言模型或扩散模型生成梅尔频谱图、离散音频编码或压缩隐变量，再用神经声码器、解码器把中间表示转成波形。这种拆分让文本对齐只需要在低分辨率上完成，波形细节由专门的声码器负责，但也带来多阶段训练、外部模块依赖和误差累积。WaveGen 要研究的是能否用单个模型、一次训练直接从文本生成波形，同时在内部自己完成对齐。

### 已有路线为什么多是两段式

传统管线是声学模型加声码器，声学模型把文本变成梅尔频谱图，HiFi-GAN 等生成对抗网络声码器再把频谱图变成波形。近年基于自回归语言模型的做法先把语音压缩成神经音频编码，再用多码本预测生成编码，最后解码回波形；基于条件流匹配的做法则多用于生成梅尔频谱图，例如 VoiceBox、E2-TTS、F5-TTS 和 ZipVoice，再外接声码器；还有一路用压缩隐变量做潜扩散，例如 VoxCPM 和 VibeVoice。

端到端文本到波形此前也有探索，VITS 结合变分推断、归一化流和对抗训练，EATS 联合学习时长和波形，E3-TTS 尝试了波形级扩散。但论文指出，这些工作或依赖对抗训练和多个判别器，或依赖 BERT 文本表示等外部表示，或主要不是为零样本场景设计。直接在高分辨率波形上做文本语音对齐非常困难，时间分辨率高、对齐模糊时误差会被放大，这也是领域转向多阶段管线的原因。WaveGen 的对照位置正在于此：保持单模型、单阶段、零样本，同时不用编码器、声码器、隐变量模型、时长预测器和自监督表示。

### 直接生成波形难在哪里

困难来自两个层面。第一是表示长度，24,000 Hz 波形每秒有两万多个采样点，文本只有几十个字符，如何把短文本拉长到与语音等长并决定每个时刻的发音，是对齐问题。第二是感知质量，波形能量分布和相位细节直接决定听感，常规流匹配中的速度目标在高分辨率下比较嘈杂，模型容易顾此失彼，出现发音对了但音质差，或者音质尚可但根本没有对齐的情况。

论文在小规模实验中发现，只学波形轨迹时模型基本无法对齐，词错误率超过 100。线性频谱图作为辅助目标还会导致训练不稳定。因此问题不是简单地把梅尔生成模型换成波形输出，而是需要给模型一个内部的、频率结构更清晰的辅助任务，以及更适合波形能量建模的预测与损失形式。

**文本 × 波形：** 文本是离散的语言符号序列，波形是 24,000 Hz 采样的连续高分辨率信号，二者长度和节奏差异极大；WaveGen 要在没有音素时长和外部对齐器的条件下，让文本决定波形中每个时刻说什么、以什么音色说，因此需要同时解决对齐和波形细节生成两个分工。

### WaveGen 让一个样本经历怎样的完整流程

以一个训练样本为例，输入是文本字符、对应的真实波形和提示语音掩蔽。模型先把高分辨率波形通过重整形变成低分辨率序列，例如把 24,000 Hz 波形按每 240 点一组折叠成 100 Hz 的序列，使序列长度与频谱帧大致可比；同时计算一条低分辨率的 64 维梅尔频谱图作为内部频谱目标。文本经过平均池化后按语音长度做平均上采样，直接拼接到输入中，不用外部编码器和时长模型。

下面这张训练流程图展示了从输入到损失的完整路径，读图时重点看输入如何拼接、主干如何分叉、损失如何分工，请按以下顺序观察原图后再对照文字理解。

> **看图路径：** 1. 先沿左侧重整形与频谱分支到中间拼接点的箭头看输入如何汇合；2. 再看共享 DiT 块之后如何分成波形头与频谱头两条输出；3. 最后看右侧三种损失分别监督预测波形差值与两路速度

[![原论文 Figure 1：E2E text-to-waveform diffusion training details.](https://arxiv.org/html/2611.12527v1/wavegen_fig.png)](https://arxiv.org/html/2611.12527v1/wavegen_fig.png)

*论文图 1。原论文 Figure 1:：“E2E text-to-waveform diffusion training details.”。*

从图中可见，拼接后的波形噪声、频谱噪声、文本表示和掩蔽提示一起进入共享 DiT 块完成对齐，随后分成波形 DiT 头和频谱 DiT 头各自细化，分别输出预测波形和预测频谱。训练只在被掩蔽的待生成区域计算损失，提示区域作为条件保留。这种掩蔽填充方式使推理时可以用一段新说话人的提示语音加上新文本来生成对应语音。采样时用欧拉法求解常微分方程，配合分类器无关引导逐步去噪得到波形。

### 内部频谱轨迹起什么作用

内部频谱轨迹是 WaveGen 的核心辅助设计。模型同时维护两条扩散轨迹，一条是目标波形轨迹，另一条是低分辨率频谱轨迹。频谱轨迹的分辨率低、频率结构清晰，文本与它的对应关系更容易学，它相当于在模型内部给对齐提供了一个信息瓶颈。论文比较了不同梅尔通道数，发现通道数太大时模型更像在做波形重建，对齐出现得晚；通道数减小到 32 到 64 时对齐更快，最终选用 64 维，在对齐速度和保留高频细节之间折中。

需要强调的是，这条频谱轨迹只在模型内部生成并用于引导，不作为外部输出的中间表示，也不需要在推理时先生成频谱再声码。它与 2 阶段管线的区别在于，2 阶段必须显式保存并传递梅尔频谱，而这里频谱只是一种联合学习的辅助目标。

**Spectral Forcing × 内部频谱轨迹：** Spectral Forcing 是本文提出的同时生成两条轨迹的训练做法，内部频谱轨迹指在同一模型内额外预测的一条低分辨率 Mel 频谱轨迹，它不作为外部中间表示输出，只在训练中提供频率结构先验，帮助文本与语音先对齐，再由目标波形轨迹负责高分辨率细节，二者搭配降低了直接学波形的难度。

### 共享主干与解耦头如何分工

输入拼接是为了对齐，把波形、频谱、文本放在同一序列里让注意力看到全部信息；输出分叉是为了保真，让两种模态各自由专门的参数细化。具体做法是用 14 到 24 层共享 DiT 块作为对齐主干，再在上面各加 2 层浅层解耦 DiT 头，一个负责波形，一个负责频谱。消融显示，只用 18 层共享块而不用解耦头时词错误率为 7.83，改成 14 层共享加 2 层解耦后降到 4.96；但解耦层加得太多、共享层只剩 10 层时又回升到 7.64，说明对齐主干容量不足会拖累整体。

文本条件在小模型中用平均上采样直接拉长，在 0.68B 的多语大模型中改用 ConvNeXt 文本编码器加填充词元，以适应更大规模训练。时间条件通过自适应层归一化注入，采样时对文本条件做引导以增强可懂度和相似度。

**共享 DiT 块 × 解耦 DiT 头：** 共享 DiT 块是处理拼接后多表示的主干，负责文本与语音的对齐；解耦 DiT 头是主干之后为波形和频谱各设的浅层分支，负责各自表示的细化；共享保证对齐信息一致，解耦避免两种信号互相干扰，组合后兼顾对齐和重建。

### 为什么预测干净目标却在速度空间算损失

条件流匹配通常构造插值样本 x_t 等于 1 减 t 乘噪声加 t 乘干净目标，学习从噪声指向目标的速度场。WaveGen 的做法是模型输出端预测干净目标 x_pred，包括预测波形和预测频谱，但损失并不直接比较 x_pred 与真值，而是先把预测和真值都换算成速度再比较。这种解耦的 xx 预测加 vv 损失既让模型关注能量准确的波形本身，又保留速度空间更稳定的优化行为。

论文对比发现，用 vv 预测时对齐略好但感知质量明显下降，因为目标速度本身很嘈杂，模型难以恢复可靠的能量分布；用 xx 预测时听感提升很大。同时论文提醒，直接在 x 空间算损失会出现明显金属噪声，因此当前应避免 xx 损失。下式给出从预测干净目标到预测速度的换算，分子是预测与当前噪声样本之差，分母是剩余时间。

\[v_{pred}^{d}=\frac{x_{pred}^{d}-x_{t}^{d}}{1-t},\qquad v_{t}^{d}=\frac{x_{1}^{d}-x_{t}^{d}}{1-t}.\]

该式对波形域和频谱域分别成立，下标 d 取 wave 或 spec，掩蔽矩阵保证只在待生成区域计算均方误差。理解时先看模型输出 x_pred，再看它如何被换算成 v_pred，最后看 v_pred 与真值速度的差距如何回传。

### 多尺度频谱损失如何约束波形误差

只用单尺度波形速度损失时，高频细节容易被低估。为此论文在波形速度差上再加多尺度频谱约束，先对波形误差做多组短时傅里叶变换求功率谱，再经线性滤波器组投影到不同频带，然后用真实波形对应频带的能量做归一化，使高能量区不主导损失、低能量高频也能被看到。尺度覆盖从大窗口到小窗口共 6 组，窗口和跳长按 1920 到 15 逐级减半，通道数从 512 降到 16。

下式是该多尺度谱 vv 损失，分子是掩蔽后、能量归一化后的频带误差绝对值之和，分母是掩蔽计数，epsilon 取 1e-7 并把缩放钳制在 0.01 到 100 之间。

\[\mathcal{L}_{ms\text{-}v\text{-}spec}=\sum_{k\in\mathcal{K}}\frac{\left\|\mathcal{M}_{k}^{wave}\odot\Phi_{k}(\Delta_{v}^{wave})\odot\left(\Phi_{k}(x_{1}^{wave})+\epsilon\right)^{-\frac{1}{2}}\right\|_{1}}{\left\|\mathcal{M}_{k}^{wave}\right\|_{1}},\]

最终目标是三项加权求和，波形 vv 损失权重为 1，频谱 vv 损失和多尺度谱损失权重各为 0.1。

\[\mathcal{L}_{total}=\mathcal{L}_{v}^{wave}+\lambda_{spec}\mathcal{L}_{v}^{spec}+\lambda_{ms}\mathcal{L}_{ms\text{-}v\text{-}spec},\]

**条件流匹配 × 掩蔽填充训练：** 条件流匹配是从噪声到目标构造中间插值样本并学习速度场的生成框架，掩蔽填充训练是把提示语音保留、把待生成区域掩蔽后只在掩蔽区算损失的做法；前者给出波形生成的优化目标，后者给出零样本语音克隆的任务构造，二者结合使模型学会根据文本和提示声补全缺失语音。

训练时语音和文本条件分别以 0.3 和 0.2 概率丢弃以支持无条件与条件生成，推理时用引导强度放大条件作用。大模型阶段还引入频谱丢弃和提示锚定等技巧，下一节结合实验条件说明。

### 数据、基线和指标在什么条件下比较

小规模消融用 LibriTTS，24,000 Hz 波形，只保留 12 秒以内共约 319,627 条，约 0.5k 小时；大规模用 Emilia 英文子集及 Emilia-YODAS 英文，MP3 压缩、24,000 Hz，最长 30 秒，约 120k 小时，多语大模型用约 100k 小时英中数据。LibriTTS 模型学习率 1e-4、批量 128、训练 1.1M 步；Emilia 模型按总时长 480 秒波形的动态批量训练 1.1M 步，0.6B 以上模型训练更多轮次。采样统一用欧拉法，小模型 32 步、引导强度 2，大多语模型 50 步、引导强度 3。

基线包括 F5-TTS、ZipVoice、CosyVoice、Qwen3-TTS、VibeVoice、VoxCPM 等已公开模型，论文注明基线参数量只计其文本转中间表示部分，不含声码器等解码模块。主评测是 Seed-en 零样本集，用 Whisper-large-v3 算词错误率，用经说话人验证微调的 WavLM-Large 算余弦相似度，用 DNSMOS 和 UTMOS 预测听感，主观评价在众包平台让美国母语者分别打自然度和相似度，并用掺强噪声的假样本筛除乱打分者。比较时要注意，Emilia 是 MP3 压缩数据，高频信息本身受限，这会影响所有在该数据上训练的波形模型的频谱上限。

### 端到端与两段式在相同主干下差多少

这一节回答的核心问题是，同样用 DiT 加掩蔽填充，直接生成波形是否比先生成梅尔再声码更好。论文用相同主干训练了纯声码器、2 阶段系统和端到端模型，声码器在给定真实梅尔时词错误率可低至 1.47，说明不用对抗训练也能做好声码；但 2 阶段系统在文本到梅尔出错时会把误差传给声码器，词错误率为 4.39 到 5.17。端到端模型在总步数同为 32 时词错误率为 2.91，优于 2 个阶段，且实时率在 A100 上为 0.24，未明显慢于 2 阶段的 0.16。

| Method | Params. | NFE | RTF | WER | SIM | DNSMOS |
| --- | --- | --- | --- | --- | --- | --- |
| End-to-End | 407M | 32 | 0.24 | 2.91 | 0.53 | 3.67 |
| End-to-End | 210M | 32 | 0.12 | 4.68 | 0.50 | 3.71 |
| End-to-End | 113M | 32 | 0.08 | 4.96 | 0.47 | 3.72 |
| Vocoding (GT Mel) | 113M | 32 | 0.08 | 1.47 | 0.70 | 3.32 |
| Vocoding (GT Mel) | 113M | 16 | 0.04 | 1.57 | 0.70 | 3.33 |
| Two-Stage | 226M | 32 + 32 | 0.16 | 4.39 | 0.46 | 3.53 |
| Two-Stage | 226M | 16 + 16 | 0.09 | 5.17 | 0.47 | 3.59 |

上表比较的问题是端到端是否避免了中间表示带来的误差累积，条件是同一 DiT 主干和掩蔽训练，指标中词错误率越低越好，相似度和 DNSMOS 越高越好。结果支持端到端在可懂度、相似度和听感上都略优于同规模 2 个阶段，但限制也很清楚：声码器在给定真实梅尔时上限更高，说明端到端的优势来自联合优化而非波形建模本身更强；且该结论只在 LibriTTS 小规模和相同步数下成立，换数据或换步数差距会变化。

下面这组频谱图帮助理解数据压缩与预测空间的影响，读图时先看横轴时间与纵轴频率的能量分布，再对比高频亮纹是否连续。

> **看图路径：** 1. 对比(a)MP3 提示与(b)Emilia 训练生成在 8 kHz 以上高频的缺失；2. 对比(b) 与(c)LibriTTS 训练生成在高频细节上的差异；3. 观察(d) 采用 vv 预测时能量分布模糊与条纹结构的变化

[![原论文 Figure 2：Spectral analysis with respect to audio format and prediction space](https://arxiv.org/html/2611.12527v1/wavegen_fig2.png)](https://arxiv.org/html/2611.12527v1/wavegen_fig2.png)

*论文图 2。原论文 Figure 2:：“Spectral analysis with respect to audio format and prediction space”。*

图中可见，MP3 提示本身在 8 kHz 以上已很弱，Emilia 训练的生成音频同样缺高频，而 LibriTTS 训练的生成保留了更丰富的高频；采用 vv 预测的生成则能量分布模糊。这说明波形模型的频谱上限很大程度上被训练数据的压缩格式决定，预测形式决定能量是否准确，二者是不同层面的限制。

### 大规模零样本与多语结果在什么范围内成立

在大规模 Seed-en 上，0.1B 的 WaveGen-S 词错误率 4.42，0.4B 的 WaveGen-B 降到 1.77，0.6B 的 WaveGen 降到 1.47、相似度 0.75，论文称在 Emilia 训练数据上达到当时最优。主观评价中 WaveGen-B 自然度 4.000，相似度 3.988，与 F5-TTS、CosyVoice3、Qwen3-TTS 相当。模型和数据同时放大时持续变好，且改进的引导策略主要提升相似度，说明早期采样步决定了音色适配。

多语大模型在英中各约 100k 小时上训练，24 kHz 的 WaveGen 在 Seed-en 上词错误率 1.47、相似度 0.75，在 Seed-zh 上字错误率 1.75、相似度 0.80；16 kHz 版本在英文词错误率 1.51、中文 1.65。提示锚定把提示区固定为真值插值而不用模型更新值，显著提升相似度；频谱丢弃率 0.2 用于降低对噪声梅尔的依赖。这些结论的成立条件是单架构、开源数据、一次训练、未用表示对齐增强，若换成更大私有数据或更长训练，结果可能继续变化。未胜出的细节是，提高频谱丢弃到 0.5 时客观词错误率有时更低但相似度下降，且多尺度梅尔 x 损失会引入嗡嗡声，因此论文最终推荐感知更好的谱 vv 损失。

### 共享与解耦、预测空间各自带来什么变化

本节把结构与预测空间的消融放在一起，因为它们回答的是同一问题：对齐与音质分别由哪部分保证。结构上，全共享 18 层时词错误率 7.83，14 层共享加 2 层解耦后降到 4.96，共享过少时又恶化，说明主干管对齐、分支管细化的分工不能偏废。预测空间上，不加频谱引导时两种预测都无法对齐，词错误率超 100；加入引导后 xx 预测词错误率 5.57、听感 3.45，vv 预测词错误率 3.93 但听感仅 2.94，说明 vv 预测对低频对齐稍好，xx 预测对能量和听感更好。

| #\#Shared DiT | #\# Disentangled DiT | WER | SIM | DNSMOS |
| --- | --- | --- | --- | --- |
| 18 | 0 | 7.83 | 0.44 | 3.60 |
| 14 | 2 (4) | 4.96 | 0.47 | 3.72 |
| 10 | 4 (8) | 7.64 | 0.46 | 3.65 |

上表比较的是解耦头是否有用，指标方向与前相同。结果支持浅层解耦最优，但限制是该结论来自 LibriTTS 小模型，大模型层数不同，最优配比可能变化。

| Pred | Loss | SF | WER | SIM | DNSMOS |
| --- | --- | --- | --- | --- | --- |
| xx-pred | vv-loss | ✗ | 123.67 | 0.19 | 3.20 |
| vv-pred | vv-loss | ✗ | 119.52 | 0.16 | 2.65 |
| xx-pred | vv-loss | ✓ | 5.57 | 0.46 | 3.45 |
| vv-pred | vv-loss | ✓ | 3.93 | 0.48 | 2.94 |

上表比较的是预测空间，是否带频谱引导作为条件列出。可以看到没有引导时两者都失败，有引导后 vv 预测可懂度略优但听感明显差，因此论文选择 xx 预测加 vv 损失。负结果是 xx 损失会带来金属噪声，当前应避免，这也说明预测与损失必须解耦看待。

### 采样步数与外部表示引导的影响有多大

采样步数决定推理代价与质量的折中。下表比较同一 WaveGen-B 模型在 Seed-en 上不同函数求值次数下的表现，词错误率越低越好，相似度和 DNSMOS 越高越好。可以看到随步数增加词错误率下降、相似度和感知质量提升，说话风格在早期采样步已基本确定，后续步数主要细化波形。若只给很少步数，模型尚不能建立对齐，不能用于部署。

| Model | NFE | WER | SIM | DNSMOS |
| --- | --- | --- | --- | --- |
|  | 4 | 52.0 | 0.39 | 3.06 |
|  | 8 | 4.85 | 0.61 | 3.48 |
|  | 16 | 2.16 | 0.63 | 3.56 |
| WaveGen-B | 32 | 1.77 | 0.63 | 3.60 |
|  | 50 | 1.87 | 0.64 | 3.61 |
|  | 100 | 1.84 | 0.64 | 3.63 |

上表比较的是同一模型不同函数求值次数下的表现，词错误率越低越好。可以看到少步数是可用门槛，中等步数是质量与速度的平衡点，继续加步数收益很小。限制是该曲线在小规模 LibriTTS 与大规模 Emilia 上斜率不同，大模型在较少步数时已相当可用。

论文还做了小规模表示对齐预实验，在第 10 层加 Whisper-small 编码器输出的余弦对齐、权重 0.1，实验组相比基线的词错误率下降、相似度提升，DNSMOS 基本持平。这说明外部语义表示能加速收敛，但主模型为保持严格端到端并未使用它，留作未来工作。不能把该增益直接理解为最终大模型的提升幅度。

### 哪些结论还不能推广

首先是训练充分性，受计算限制，大规模模型在 Emilia 上只训练约 4 个轮次，附录显示继续训练到 1.3M 步仍在变好，因此当前数字是欠训练下的结果，不是收敛上限。其次是数据上限，Emilia 为 MP3 压缩，高频细节本身缺失，模型在 8 kHz 以上生成能力受限，换无损大库结论可能不同。第三是指标局限，词错误率依赖 Whisper，相似度依赖 WavLM，听感依赖 DNSMOS 或 UTMOS 预测，它们与人工听感不完全等同，主观评价也只在 Seed-en 英文、特定众包人群下完成。

另外，多语大模型改用了 ConvNeXt 文本编码、填充词元、波形缩放和对数正态时间调度等配置，与小模型不完全一致，因此不能把多语的最优超参数直接套回小模型。频谱丢弃、提示锚定等技巧在大规模噪声数据上更重要，在干净小数据上作用可能不同。论文也明确未用表示对齐训练主模型，相关增益只是初步实验。

### 复现第一步要准备什么

复现应从作者已公开的代码仓库开始，本文证据显示作者资源当前可用，文档标称包含安装、推理和微调能力，可先按文档跑通推理，再用 LibriTTS 小配置复现消融。第三方链接只是论文提到的基线实现，不代表作者已开源，不能与作者资源混为一谈；链接不可用只说明本次未能确认可达，不是对论文技术的否定。

数据上先准备 LibriTTS 并过滤到 12 秒以内，采样率保持 24,000 Hz；评估需准备 Seed-en 提示与文本，并安装 Whisper-large-v3、WavLM-Large 说话人验证模型和 DNSMOS。训练沿用掩蔽填充，语音和文本条件按概率丢弃，采样用欧拉法 32 步、引导强度 2，文本条件丢弃只在极早期步限制。关键超参数包括 64 维梅尔辅助、14 层共享加 2 层解耦、多尺度 6 组窗口、损失权重 0.1，以及 t 裁剪 0.05。若资源不足，优先复现 113M 小模型和采样步数曲线，再验证 xx 预测与 vv 损失的听感差异。

### 什么时候值得尝试这种端到端做法

当目标是简化管线、用单模型同时管对齐和波形，且能接受较大数据和较多采样步时，WaveGen 的思路值得尝试。它的价值在于证明了在设计好内部频谱引导、解耦结构和多尺度谱损失后，直接文本到波形可以达到与多阶段系统相当的可懂度和相似度，且避免了声码器误差累积。复现第一步是跑通小模型并确认频谱引导确实让对齐出现，还需补的验证包括更长训练后的收敛点、无损大数据下的高频上限，以及在中文以外的更多语言和真实噪声提示下的稳定性。

**xx 预测 × vv 损失：** xx 预测指模型直接预测干净目标 x_pred，vv 损失指把该预测换算到速度空间后再计算损失；前者负责准确估计波形能量分布，后者保留流匹配的稳定优化形式，组合后避免了直接预测噪声速度时能量模糊和直接在 x 空间算损失时出现金属噪声的问题。

总之，论文直接报告的是特定数据、特定步数和特定引导下的数字，证据支持联合学习内部频谱轨迹有助于稳定波形流匹配，但不等于端到端在一切条件下都优于两段式。选择时应权衡推理步数、数据质量和对外部模块的依赖程度。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.12527v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
