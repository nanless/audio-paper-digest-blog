---
title: "Audiovisual joint learning for end-to-end hearing aids"
date: 2026-10-11
draft: false
tags: [目标说话人提取, 端到端学习, 音视频, 助听器, 多模态学习]
categories: [论文速递]
description: "论文要解决竞争说话人下目标难分离且分阶段放大易放大残留干扰的问题，用目标说话人视频加听力图端到端估计 NAL-R 与 WDRC 目标，最强证据是噪声下客观与听感在竞争语音条件提升最大，代价是整句离线处理与视觉编码器带来约 232 GMACs 计算量。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.08579"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "看得见说话人脸的助听放大：AV-NeuroAMP 一次做完增强与个性化补偿"
paper_digest_original_title: "Audiovisual joint learning for end-to-end hearing aids"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.08579v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.08579v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.08579v1.pdf"
paper_digest_primary_task: "目标说话人提取"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"application","id":"application.hearing-aids","label":"助听器"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"}]
paper_digest_primary_method: "端到端学习"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文要解决竞争说话人下目标难分离且分阶段放大易放大残留干扰的问题，用目标说话人视频加听力图端到端估计 NAL-R 与 WDRC 目标，最强证据是噪声下客观与听感在竞争语音条件提升最大，代价是整句离线处理与视觉编码器带来约 232 GMACs 计算量。"
paper_digest_authors: [{"affiliations":["Graduate Institute of Communication Engineering, National Taiwan University, Taipei, Taiwan"],"name":"You-Jin Li"},{"affiliations":["Research Center for Information Technology Innovation, Academia Sinica, Taipei, Taiwan"],"name":"Yu Tsao"},{"affiliations":["Graduate Institute of Communication Engineering, National Taiwan University, Taipei, Taiwan"],"name":"Borching Su"},{"affiliations":["Department of Otolaryngology-Head and Neck Surgery, Taipei Veterans General Hospital, Taipei, Taiwan","School of Medicine, National Yang Ming Chiao Tung University, Taipei, Taiwan"],"name":"Kuan-Chung Ting"},{"affiliations":["Center for Hearing Research, University of California, Irvine, California, USA"],"name":"Fan-Gang Zeng"}]
paper_digest_abstract_sha256: "34b452bc43d2690a7be68c87478eb152c2e5c3b239acfcd737c600c7220af0e4"
paper_digest_sidecars: {"citation.bib":{"sha256":"3a89d783beff52bd7583de1bc2ee10120c7550d11ebc1159974af2499322d61d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08579/citation.bib"},"citation.json":{"sha256":"5c7d8f5d6eab9314475a9256d7b9318e81630e75d8eb3c7b02e7b9b79649a527","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08579/citation.json"},"citation.ris":{"sha256":"3f60e1d748d970e42329e8ee8575cefad901528ec64f9c663b7fe0661bcd73f4","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08579/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"73aea7c9a8e4880555442b080fc2f449975107850722656298c6d15ace0c1448","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08579/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "317d1f9fb415c3609dea3b9d9742e3a790f45ee9c1326c41399f057bcc46bd19"
paper_digest_api_reader_plan_sha256: "50e30d39587d719505d83dc76a4a3dd128ab1f6a684531999a2cf67b548c1628"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ed78b31e4364d1cefb1358b528567e162b4dccb72b3dbee659254167005166d0"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "432c701b06d46ceeb183d46fd69197fc28c288518d3fd5b941b971fb856739cd"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "69fde83ef27220a2d5c8ad30ef0527ed7b59d0d4c6733ce5a4418dce94292ec3"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9f5c958bdf7e1b35ecff9e5eed51c38e15c185f2660cfb1d8a6c0c80703e694b"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 看得见说话人脸的助听放大：AV-NeuroAMP 一次做完增强与个性化补偿

> 英文题目：*[Audiovisual joint learning for end-to-end hearing aids](https://arxiv.org/abs/2610.08579v1)*

> 标签：#目标说话人提取 | #端到端学习 | #音视频 | #助听器 | #多模态学习
>
> 评分：**7.2/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- You-Jin Li：Graduate Institute of Communication Engineering, National Taiwan University, Taipei, Taiwan
- Yu Tsao：Research Center for Information Technology Innovation, Academia Sinica, Taipei, Taiwan
- Borching Su：Graduate Institute of Communication Engineering, National Taiwan University, Taipei, Taiwan
- Kuan-Chung Ting：Department of Otolaryngology-Head and Neck Surgery, Taipei Veterans General Hospital, Taipei, Taiwan；School of Medicine, National Yang Ming Chiao Tung University, Taipei, Taiwan
- Fan-Gang Zeng：Center for Hearing Research, University of California, Irvine, California, USA

## 📌 核心摘要

助听器需在噪声和竞争说话人下输出符合听众听力图的放大语音，输入为含目标语音、噪声与干扰语音的混合声、目标说话人面部视频和6维纯音听力图，输出为按美国国家声学实验室线性处方与宽动态压缩定义的目标波形。目标与干扰语音声学相似使纯音频难以选出目标，分开增强再放大会把残留干扰一并放大。AV-NeuroAMP先以冻结的人脸特征提取器加时序卷积适配器得到与音频帧对齐的视觉表示并与语谱图拼接送入编码器，再由听力图条件化特征调制模块在实例归一化后生成缩放、偏置和门控参数调制视听特征并保留残差，最后由幅度与相位双解码器经逆短时傅里叶变换合成波形。与纯音频端到端NeuroAMP相比，在域内英语集噪声输入下听觉辅助语音感知指数HASPI从0.419提高到0.780。与直接拼接听力图相比，同视听主干下噪声输入听觉辅助语音质量指数HASQI从0.563提高到0.625，多频段短时增益误差MBGE从4.15 dB降至3.48 dB。在汉语普通话域外集噪声输入下其HASPI为0.598、HASQI为0.454，均高于纯音频NeuroAMP的0.449和0.303。处理2秒视听输入共需232.16 GMACs，其中视听神经网络占137.38 GMACs、视觉编码器占94.78 GMACs，听力图调制模块参数仅0.022 M且不足0.01 GMACs；该结论适用于已知目标视频的完整话语非因果处理，尚未验证因果流式可穿戴部署。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/claritychallenge/clarity> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 助听器在噪声里要解决什么输入输出问题

这篇论文处理的是单通道助听器信号链。输入是混在一起的波形，论文写成目标语音、背景噪声和干扰语音相加，输出是按听者听力图放大压缩后的个性化波形。必须保留的信息有两个，一是目标说话人说的内容，二是听力图规定的频率相关增益。传统做法分两段，先做语音增强再按处方放大，论文指出的问题是增强残留的干扰会在放大阶段被一起放大，而且纯音频增强在竞争说话人条件下很难，因为目标和干扰声学特性相似。

视觉的作用是提供与声音部分独立的发音动作线索，帮助在混合声中选出目标说话人。例子：可以把任务想象成在 2 人同时说话的录音里，只放大其中露脸的那个人，并按某只耳朵的听力图调到合适响度。

### 已有路线为什么还不够

论文回顾了 3 条路线。第一是处方放大与宽动态压缩，例如 NAL-R 规定随频率变化的线性增益，NAL-NL1、NAL-NL2 和 DSL 规定随频率和输入电平变化的非线性增益，宽动态压缩提供随电平变化的增益以适应变窄的听觉动态范围。第二是单通道和多通道增强，包括谱减、统计估计和波束形成，论文指出它们在非平稳噪声、混响、声源或头部移动、麦克风失配和风噪下会退化。

第三是深度学习的增强与神经补偿，例如 NeuroAMP 直接从带噪语音和听力图映射到补偿后输出，以及听觉模型逆、降噪加可控压缩等。论文认为这些补偿方法没有用视觉线索，在强干扰和竞争语音下仍可能保留干扰或损伤目标。视听增强已有工作显示低信噪比和竞争说话人下视觉有帮助，论文要做的是把视听前端和神经听损补偿接到同一个端到端目标上。

### 论文把任务和监督目标定成什么

论文把每 1 次处理定义为给定带噪语音、目标说话人视频和听力图，估计个性化增强放大目标。监督目标不是干净语音，而是把干净目标语音先经过 NAL-R 和 WDRC 得到的处理后波形，模型输出要向它看齐。听力图是 6 个标准测听频率的听阈向量，训练前除以固定常数做缩放，文中称作 LevelNorm。评价时既看是否接近该目标波形，也用助听可懂度和质量指数预测听损耳朵的感知效果，还引入分频段短时增益误差看各频带电平是否跟住处方。需要强调的是，与该目标一致只说明学会了选定的处理，不能说明该处方对所有听者临床最优，论文讨论部分也明确 NAL-R 是线性处方，当前验配常用非线性处方。

### AV-NeuroAMP 的整体流程是什么

AV-NeuroAMP 沿用 NeuroAMP 的分析合成框架，但把听力图接入方式和损失都换了。音频先经短时傅里叶变换得到谱特征，视频经视觉编码器得到视觉表示，二者拼成视听表示，再经 AC-FiLM 按听力图调制，然后经视听神经网络的幅度和相位解码器得到估计谱，最后逆变换回波形。训练目标是上述 NAL-R 与 WDRC 目标，推理时处理整句不切分，输出波形与原长一致。

灰色纯音频 NeuroAMP 支路是直接拼接听力图表示加谱均方误差，粉色 AV-NeuroAMP 支路是视觉编码器加 AC-FiLM 加多目标损失，白色块是共用的分析、合成与放大压缩过程，虚线是训练反向传播路径。
下图是论文总览图，先看主信号链，再看听力图和监督目标从哪里进入，有助于理解端到端联合优化把增强、放大和压缩放在 1 次映射里。

> **看图路径：** 1. 先沿输入信号到特征分析再到合成放大的主链路看信号走向；2. 再对比灰色纯音频支路与粉色视听支路在听力图接入点和损失上的差别；3. 注意底部多损失模块只在训练时经反向传播影响网络

[![原论文 Figure 1：Overview of NeuroAMP \[4\] and AV-NeuroAMP.](https://arxiv.org/html/2610.08579v1/Figure1.png)](https://arxiv.org/html/2610.08579v1/Figure1.png)

*论文图 1。原论文 Figure 1:：“Overview of NeuroAMP [4] and AV-NeuroAMP.”。*

从图中可见，输入信号经特征分析后一路走向网络主体，听力图和目标信号经放大压缩后走向多损失监督，视觉编码器只出现在视听支路。虚线回传说明监督来自最终放大后目标，而不是中间干净语音，这正是与 2 阶段先估计干净语音再放大的关键差别。

### 听力图向量如何表示

每个听者用 6 维向量表示，频率为 250、500、1000、2000、4000 和 6000 赫兹，单位是分贝听力级。Clarity 挑战提供 272 个耳特异听力图，166 个用于训练，106 个用于测试，模型输入和 NAL-R 处方都用这 6 个阈值。向量先除以常数归一化，再送入听力图编码。理解这个向量很重要，因为后文局部条件分支要学频率相关变化，全局分支要学跨频率共享的整体严重程度。

\[\mathbf{a}=[a_{250},a_{500},a_{1000},a_{2000},a_{4000},a_{6000}]\in\mathbb{R}^{6},\]

该式只是把 6 个听阈排成向量并说明归一化前后的关系，本身没有学习参数，学习发生在后续编码器和调制模块。

### 视觉分支怎样得到与音频对齐的特征

视觉编码器分两段。面部提取段对输入视频先做 3 维卷积再过 18 层残差网络，得到人脸表示；适配器段是线性投影加 5 个残差 1 维卷积块组成的时间卷积网络，再转置对齐到音频特征。视频是每秒 25 帧、224 乘 224 像素全脸灰度图，归一化到 0 到 1 区间，训练时随机裁 2 秒同步段，即 32000 个音频采样点和 50 帧视频，不足补零。因为稳健人脸特征需要大量数据，面部提取器先在第二届视听增强挑战数据上预训练，训练 AV-NeuroAMP 时冻结，只联合训练适配器和其他部件。测试时听者只听处理后音频并不看视频，视觉只在模型内部起引导分离作用。

**语音增强 × 听力损失补偿：** 语音增强指从噪声和干扰说话声中提取目标语音，听力损失补偿指按听力图给不同频率和强度加不同增益并压缩动态范围，二者搭配是因为前者决定送进放大器的是什么信号，后者决定听损耳朵实际听到多大声，组合后模型直接学到最终耳朵端目标，避免先增强再放大的误差被二次放大。

**听力图 × AC-FiLM：** 听力图是 250 到 6000 赫兹六个频率的听阈向量，代表听损程度随频率的变化，AC-FiLM 是听力图条件化的特征调制模块，负责把该向量转成缩放、偏置和门控参数去调制视听特征，二者搭配让低维且不随时间变的听力信息能在归一化之后再以频率相关方式加入，避免被直接拼接后归一化冲淡。

**视觉编码器 × 适配器：** 视觉编码器中的面部提取部分用三维卷积加 18 层残差网络从人脸视频提口唇和发音动作特征，适配器是用线性投影加五个残差一维卷积的时间卷积网络，负责把人脸特征在时间上对齐到音频帧，二者搭配是前者提供发音部位等视觉线索，后者解决视频 25 帧每秒与音频短时帧率不一致的问题。

**HASPI × HASQI：** HASPI 是助听语音感知指数，用于预测个性化放大后语音可懂度，HASQI 是助听语音质量指数，用于预测听感质量，二者搭配是因为可懂度高不等于听起来自然，论文同时报告它们可以区分模型是保住了信息还是引入了难听的失真。

**端到端 × 两阶段：** 端到端指一个网络直接从带噪语音、视频和听力图映射到 NAL-R 与 WDRC 处理后的目标波形，两阶段指先用增强模型估计干净语音再做 NAL-R 与 WDRC 放大，二者搭配比较能回答联合优化是否减少了第一阶段残留干扰被第二阶段放大的问题。

### AC-FiLM 怎样把听力图写进视听特征

直接拼接是把听力图表示与视听特征在通道维拼起来再送入网络，论文认为它有个结构弱点：听力图低维且不随时间变，视听表示高维且随时间变，拼接后若经过实例归一化，通道均值被去掉、方差被归一，绝对偏置和尺度里藏的听损信息可能被削弱。AC-FiLM 改在归一化之后加条件。

它有局部和全局两条分支，局部把归一化听力图经原来拼接用的编码器加一层通道映射，得到随频率和通道变化的表示，全局经一层线性投影到通道维再广播到所有频带，得到跨频率共享的表示，二者相加成统一条件，再经带激活的控制模块映射出缩放、偏置和门控 3 组参数。调制时对编码后视听特征先做实例归一化，再做缩放加偏置，经门控加到原特征的残差上，控制模块输出层零初始化使训练初期的融合特征约等于原视听特征。

下图是 AC-FiLM 结构导读，重点看归一化在调制之前、听力图在调制之后进入的位置，以及残差如何保留原视听信息。

> **看图路径：** 1. 先看上方视听特征编码与实例归一化的位置；2. 再看下方局部与全局两条听力图分支如何汇入控制模块；3. 最后看缩放偏置门控三组参数与残差连接的汇合点

[![原论文 Figure 3：Overview of the proposed AC-FiLM module.](https://arxiv.org/html/2610.08579v1/Figure3.svg)](https://arxiv.org/html/2610.08579v1/Figure3.svg)

*论文图 3。原论文 Figure 3:：“Overview of the proposed AC-FiLM module.”。*

从图中可见，视听特征先经编码和实例归一化，归一化听力图经频率相关分支和频率共享分支融合后经控制模块生成 3 组参数，再与归一化特征相乘相加并经门控残差输出融合嵌入。这种先归一化视听特征、再用听力图生成调制的设计，对应论文所说的避免听力图信息与视听特征一起被归一化。

\[\mathbf{H}_{\mathrm{fusion}}=\mathbf{H}_{\mathrm{AV}}+\sigma(\mathbf{g})\odot\left[\bm{\gamma}\odot\operatorname{IN}(\mathbf{H}_{\mathrm{AV}})+\bm{\beta}\right],\]

该式中被调制的是实例归一化后的视听编码，缩放调整各通道频率位置响应，偏置引入与听力图相关的偏移，门控经激活后控制条件分支贡献强度，残差保留原视听内容，参数沿时间广播使同一句话内听者条件一致。

### 模型用什么主干、损失和优化设置训练

除 AC-FiLM 外，网络主体基本沿用 AVMamba 设置，特征提取后经 8 个时频 Mamba 模块，再经幅度与相位解码器得到估计信号。音频 16 千赫采样，512 点短时傅里叶变换，周期汉恩窗，跳 128 点得 257 个频点，幅度做 0.3 指数幂压缩，训练时先恢复到线性域再分频带算增益误差。损失是五项加权和，包括一致性、时域、幅度、复谱和相位损失，权重为 0.1、0.2、0.9、0.1 和 0.3，沿用相关文献配置。优化用 AdamW，初始学习率 5 乘 10 的负 4 次方，贝塔 1 为 0.8，贝塔 2 为 0.99，每轮指数衰减 0.99，共训练 200 轮，全局批量 16，用四块 H100。2 阶段基线中的纯音频 SEMamba 和视听 AVMamba 是在相同训练集上微调作为增强前端，再接 NAL-R 与 WDRC，纯音频 NeuroAMP 基线用 Transformer 变体从头训练。

\[\mathcal{L}_{\mathrm{Total}}=c_{1}\mathcal{L}_{\mathrm{CL}}+c_{2}\mathcal{L}_{\mathrm{time}}+c_{3}\mathcal{L}_{\mathrm{mag}}+c_{4}\mathcal{L}_{\mathrm{complex}}+c_{5}\mathcal{L}_{\mathrm{phase}},\]

该式说明总损失是五项的加权和，因为主干同时估计幅度和相位，单用谱均方误差不足以约束相位和时域一致性，论文因此用多目标联合监督最终放大目标。

### 数据、基线和评价指标如何组织

训练和域内评价用 AVSEC-2，由 LRS3 构建的同步噪声视听场景加干净参考，干扰包括 LRS3 竞争语音和 Clarity、DEMAND 及深度噪声抑制挑战的环境噪声。训练集 34524 个场景对，每个场景从 166 个训练听力图随机抽 4 个，经 NAL-R 与 WDRC 生成 138096 个听力图条件训练对；开发集 3306 个场景，目标说话人不在训练集，每个场景从 106 个测试听力图抽 1 个生成个性化评价对。跨语言域外评价和听感用台湾国语视听语料子集，240 句平衡句，两种说话人，加背景说话人、粉红、巴布尔、引擎和街道噪声，在 8、5、2、负 1 和负 4 分贝信噪比下生成 6000 个噪声样本。

基线有直接放大带噪输入的传统方法、2 阶段纯音频、2 阶段视听、纯音频 NeuroAMP 和所提 AV-NeuroAMP。客观指标中 HASPI 和 HASQI 越高越好，波形均方误差和分频段增益误差越低越好，目标参考信噪比越高越好。听感分正常听力模拟听损 29 人和听损 12 人共 20 耳两组，评价 0 到 5 分质量和 10 字句汉字识别率可懂度，方法与声条件做重复测量方差分析，交互显著后再按条件做配对检验并经 Holm 校正。

### 域内客观结果支持什么结论

域内分干净输入和噪声输入两种条件。干净输入下端到端系统接近直接放大干净目标的参考，AV-NeuroAMP 可懂度和质量最高，误差和信噪比也优于纯音频 NeuroAMP。噪声输入下差距拉大，AV-NeuroAMP 在 5 个指标全面领先，而传统直接放大和纯音频 NeuroAMP 明显偏低。2 阶段系统在干净输入下纯音频分支的波形误差和信噪比最好，但在噪声下 5 个指标都不如 AV-NeuroAMP，说明小信号误差不一定对应更好的感知预测和分频带增益跟踪。

下表比较噪声输入下传统直接放大、纯音频端到端与视听端到端的客观指标，指标方向为可懂度和质量越高越好，误差越低越好，信噪比越高越好。

| 条件 | 方法 | HASPI 越高越好 | HASQI 越高越好 | MSE 越低越好 | MBGE 越低越好 | SNR 越高越好 |
| --- | --- | --- | --- | --- | --- | --- |
| 域内噪声输入 | 传统直接放大 | 0.449 | 0.283 | 未在所引句中列出 | 未在所引句中列出 | 未在所引句中列出 |
| 域内噪声输入 | 纯音频 NeuroAMP | 0.419 | 0.268 | 2.6×10−2 | 11.30 dB | -2.98 dB |
| 域内噪声输入 | AV-NeuroAMP | 0.780 | 0.625 | 1.1×10−3 | 3.48 dB | 10.20 dB |

该表只整理所引连续原句能覆盖的数字，传统方法的波形误差等未在该句出现故不填，避免用其他条件数字拼凑。

结果显示视听端到端在可懂度、质量、波形接近程度、分频带增益误差和降噪能力上同时改善，但这是在给定听力图分布和 AVSEC-2 噪声构成下的结论，换噪声或听力分布可能变化。分频带看，纯音频在噪声下呈 U 形，250 赫兹 12.32 分贝，500 赫兹最低 9.54 分贝，6 千赫兹最高 13.12 分贝，而视听在噪声下各带 3.4 到 4 分贝且分布平坦，每带降低 6.21 到 9.16 分贝。
下图是分频带增益误差曲线导读，横轴是频率带，纵轴是增益误差分贝，越低表示短时分频带电平越接近目标。

> **看图路径：** 1. 先区分蓝色噪声输入与橙色干净输入两组背景；2. 再比较深色纯音频与浅色视听曲线随频率的变化；3. 注意右侧大括号标出的最大系统间差异所在频带

[![原论文 Figure 5：Band-specific gain error relative to the listener-specific target on the in-domain test set.](https://arxiv.org/html/2610.08579v1/Figure5.svg)](https://arxiv.org/html/2610.08579v1/Figure5.svg)

*论文图 5。原论文 Figure 5:：“Band-specific gain error relative to the listener-specific target on the in-domain test set.”。*

从像素可见，深蓝色纯音频噪声曲线位置最高且两端上翘，浅蓝色视听噪声曲线明显更低且平坦，橙色系干净输入两条曲线都在底部，右侧括号标出噪声下约 9.15 分贝、干净下约 1.27 分贝的最大系统间差异，说明视觉带来的增益跟踪改善在噪声下远大于干净时。

### 跨语言域外结果是否还成立

域外用未见过的普通话语料、说话人和声学条件检验。干净输入下端到端两者接近传统参考，AV-NeuroAMP 质量、分频带误差和信噪比略优，可懂度略低。噪声输入下 AV-NeuroAMP 仍是五项最好，但绝对分低于域内噪声，说明跨语言可迁移但有域差距。
下表整理域外噪声输入三方法的关键数字，比较问题是训练语言、说话人和噪声都变化后视听端到端是否还优于纯音频与传统直接放大。

| 条件 | 方法 | HASPI 越高越好 | HASQI 越高越好 | MSE 越低越好 | MBGE 越低越好 | SNR 越高越好 |
| --- | --- | --- | --- | --- | --- | --- |
| 域外国语噪声 | 传统直接放大 | 0.475 | 0.292 | 未在所引句列出 | 未在所引句列出 | 未在所引句列出 |
| 域外国语噪声 | 纯音频 NeuroAMP | 0.449 | 0.303 | 未在所引句列出 | 未在所引句列出 | 未在所引句列出 |
| 域外国语噪声 | AV-NeuroAMP | 0.598 | 0.454 | 3.4×10−3 | 6.04 dB | 7.35 dB |

表中 AV-NeuroAMP 五项数字来自所引原句，三方法可懂度和质量对比来自同一句，传统与纯音频的误差等因原句未给而不填。

该结果支持跨语言泛化是相对优势保留而非绝对性能不变，域外噪声分频带误差 6.04 分贝明显大于域内 3.48 分贝，实际部署到新语言和新噪声仍需再验证。

### 听感实验在什么条件下显示优势

听感用普通话 90 句，分干净、街道噪声和竞争语音，信噪比负 1 和 5 分贝，视频只用于生成刺激，测试时不给被试看。正常听力模拟听损组经 MSBG 模型先放大再模拟听损，听损组用测试耳听力图。干净时三方法质量和可懂度均无显著差异，说明端到端在安静下未明显损伤。街道噪声下两组都显示端到端优于传统，听损组 AV-NeuroAMP 还显著优于纯音频。

竞争语音下差异最大，两组都是 AV-NeuroAMP 最高、传统居中、纯音频最低且差异显著，纯音频甚至差于传统，论文解释是纯音频易选错目标或损伤目标，而传统虽不能分离但避免了错误增强。
下表整理听损组竞争语音的质量与可懂度均值，指标均为越高越好。

| 条件 | 方法 | 质量 0 到 5 分越高越好 | 可懂度 0 到 1 越高越好 |
| --- | --- | --- | --- |
| 竞争语音听损组 | 传统直接放大 | 1.68 ± 0.70 | 0.167 ± 0.161 |
| 竞争语音听损组 | 纯音频 NeuroAMP | 1.37 ± 0.62 | 0.027 ± 0.050 |
| 竞争语音听损组 | AV-NeuroAMP | 2.05 ± 0.88 | 0.264 ± 0.212 |

表中数字来自所引听损竞争语音原句，统计经 Holm 校正后 3 对比较均显著。

该结论成立条件是给定句库、街道与竞争语音构成、单耳呈现和所用听力图，若换成双耳、多人对话需推断目标或不同信噪比，排序可能变化。

### AC-FiLM 相对直接拼接带来多大变化

消融在同一视听主干、相同数据、目标、损失和评价下只换听力图接入方式。干净和噪声下 AC-FiLM 五项都优于直接拼接，噪声下提升更大，分频带看干净输入 500 赫兹到 6 千赫兹每带降 0.16 到 0.38 分贝，噪声下 250 赫兹到 6 千赫兹每带降 0.48 到 0.83 分贝，说明改善不是只集中在某个测听区域。
下表比较同一主干下两种听力图融合在噪声输入的表现，问题是调制方式本身是否带来增益。

| 条件 | 融合方式 | HASPI 越高越好 | HASQI 越高越好 | MSE 越低越好 | MBGE 越低越好 | SNR 越高越好 |
| --- | --- | --- | --- | --- | --- | --- |
| 域内噪声 | 直接拼接 | 0.738 | 0.563 | 1.4×10−3 | 4.15 dB | 8.85 dB |
| 域内噪声 | AC-FiLM | 0.780 | 0.625 | 1.1×10−3 | 3.48 dB | 10.20 dB |

该表数字全部来自所引消融原句，条件一致因此可归因于条件策略整体。代价是 AC-FiLM 虽只增加约 21824 个可训练参数、不足 0.01 GMACs，但论文没有单独报告去掉门控或只保留局部、分开全局分支的细粒度消融，不能进一步说哪条分支贡献更大。

### 哪些范围尚未验证与哪些误解要澄清

论文明确列出 3 类局限。第一，假设视频对应目标说话人，真实多人对话需从注视、头朝向或用户选择推断意图，未在本框架验证。第二，以 NAL-R 与 WDRC 为目标不代表临床最优，单耳评价也不涉及双耳线索保留，非线性处方、舒适度约束和双耳处理待研究。第三，当前处理整句，非因果可穿戴实时系统，视觉编码器占最多参数和约 41% 计算量，需轻量化、压缩、量化、剪枝、蒸馏或事件触发视觉。

常见误解是把客观提升直接等同临床验配最优，把跨语言相对领先等同绝对性能不变，把冻结面部提取器理解为输出确定，实际上适配器和主干仍在学习且输入噪声随机，输出不确定。来源方面，NAL-R 与 WDRC 实现基于 Clarity 挑战公开代码库，该链接是第三方提及的可用链接，不能据此说作者已开源本论文模型权重或系统可直接运行。

### 复现第一步做什么与关键设置是什么

复现先按论文划分准备数据与听力图，再实现以 NAL-R 与 WDRC 目标为监督的训练管线。关键信息条件是输入必须包含同步人脸视频、带噪音频和 6 维听力图，缺视频则退化为纯音频基线。音频 16 千赫、512 点变换、跳 128 点、幅度 0.3 幂压缩，视频 25 帧每秒、224 乘 224 灰度归一化，训练裁 2 秒同步段。面部提取器用 AVSEC-2 预训练权重并冻结，只训练适配器、AC-FiLM 和主干，总参数 18.019M，可训练 6.834M，冻结视觉前端 11.185M，处理 2 秒视听输入约 232.16 GMACs，其中视听网络 137.38，视觉编码器 94.78，AC-FiLM 不足 0.01。优化用 AdamW、学习率 5 乘 10 负 4、每轮衰减 0.99、200 轮、批量 16。评价要同时算 HASPI、HASQI、波形均方误差、分频带增益误差和目标参考信噪比，并按干净与噪声、域内与域外分别报告，不能只挑噪声平均。

### 什么时候值得尝试与还需要补什么验证

当应用是单目标助听放大、有同步人脸视频可用、且主要痛点是竞争说话人或低信噪比时，值得尝试视听端到端联合估计最终放大目标的思路，尤其在已有纯音频端到端但竞争语音下选错目标时。复现第一步是搭通从带噪音频加视频加听力图到 NAL-R 与 WDRC 目标的多损失训练，并用分频带增益误差检查各频带是否跟住处方。

还需要补的验证包括非线性处方目标、更大规模平衡的听力识别试验、双耳线索影响、流式低延迟实现与功耗测量，以及无人脸、遮挡或目标推断错误时的失败条件。总体上，证据支持在所测英语域内和普通话域外噪声条件下视听端到端优于所比传统、纯音频和 2 阶段系统，且 AC-FiLM 优于同主干直接拼接，但都限定在论文的数据、听力图分布、噪声构成和单耳整句处理条件下。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2610.08579v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
