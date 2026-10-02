---
title: "Articulatory Source-Filter TTS: Physically Grounded Control through Vocal Tract Kinematics"
date: 2026-10-02
draft: false
tags: [文本到语音, 流匹配, 发声与构音, 可解释性]
categories: [论文速递]
description: "该文用声学到发音反演伪标签把声道滤波器锚定在发音运动学上，源用基频能量加流匹配细化，以频谱保真度小幅下降换来可验证的源滤波解耦与发音级口音编辑。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.00735"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把声道还给合成：用发音运动约束源-滤波器的可控 TTS"
paper_digest_original_title: "Articulatory Source-Filter TTS: Physically Grounded Control through Vocal Tract Kinematics"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.00735v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.00735v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.00735v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"scientific_topic","id":"scientific_topic.phonation","label":"发声与构音"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "该文用声学到发音反演伪标签把声道滤波器锚定在发音运动学上，源用基频能量加流匹配细化，以频谱保真度小幅下降换来可验证的源滤波解耦与发音级口音编辑。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jesuraj Bandekar"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shinji Watanabe"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Prasanta Kumar Ghosh"}]
paper_digest_abstract_sha256: "ef5bda1d86540baa24a40e640795ab9758d7f06b232001b7ad9c696a88a43e08"
paper_digest_sidecars: {"citation.bib":{"sha256":"4d9fd50be73424fda3e6dd24bbedb3f461c2e3c5aaae69d7f4ef16a0c6adc8df","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-00735/citation.bib"},"citation.json":{"sha256":"14df8bfdf31a2072e92b1604769d9adfec33a4d614d5faa5e0cc28210bf4c710","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-00735/citation.json"},"citation.ris":{"sha256":"50d50c8b742296df458a3b7d4c8e2ccdfc5fcf808d6ec0af97bdfad5d6bb66ed","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-00735/citation.ris"},"rethink-context.json":{"sha256":"1c026a43a20e489d38ec0664f6654dff9075fa953cc987601db6e295350925dc","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-00735/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e251faf75e941da185ac68b75be1e44538450877ddc0b999b9423392e453dd54"
paper_digest_api_reader_plan_sha256: "00b96dc9deeee649b2bb46daa8583d231f6a7800055c8161d95bf15f53a3d348"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "31d8f4837e1d3e85e43e5a3947ac8bae8e8e486da2d0ae4743eb045f86615197"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "291aa072a2789e00d020f80c29c9e6864af2a622856ff2405c98c4aa9b27f553"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "29eb61edf1967c195b96f26a7eede1dc6737fcf6e764122842f6a99a0a2b8b99"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "33fbe273e40568e65d531f57fb50e967daf12f0c0b1089e8f87a22ef46211073"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把声道还给合成：用发音运动约束源-滤波器的可控 TTS

> 英文题目：*[Articulatory Source-Filter TTS: Physically Grounded Control through Vocal Tract Kinematics](https://arxiv.org/abs/2610.00735v1)*

> 标签：#文本到语音 | #流匹配 | #发声与构音 | #可解释性
>
> 评分：**7.5/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Jesuraj Bandekar：机构信息未在 arXiv HTML 中可靠披露
- Shinji Watanabe：机构信息未在 arXiv HTML 中可靠披露
- Prasanta Kumar Ghosh：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

任务输入为文本音素序列、输出为自然语音对应的声谱参数，需在仅有音频与文本的大规模朗读语料上兼顾可懂度与自然度，而黑盒模型无法将声道滤波器解耦为可解释物理量，干预声道常牵连音源韵律。为此方法先用大规模多语言表征训练声学到发音反演模型，为朗读语料生成唇颌舌运动学伪轨迹，并将其作为滤波器分支的直接监督信号。接着文本编码器并行预测基频与能量轮廓以参数化声门声源、预测发音轨迹以条件化滤波器响应，实现声源与滤波器的独立建模，最优传输条件流匹配再精修声源谱并在对数梅尔域相加合成。与已有源滤波器TTS的关键差异在于滤波器不再是抽象谱包络而被约束为运动学函数，从而支持手势级干预并保持共振峰稳定。在LibriTTS test-clean上模型词错率为5.53%，与可比规模基线相当且明显保留可控性与可解释性。在LibriTTS test-clean评测下，Proposed模型的WER为5.53%，低于Source-Filter基线的WER 5.96%。该结论仅适用于英语朗读语音与电磁发音仪定义的正中矢状面运动表征，未验证自发对话、跨语言泛化与病理语音等外推场景。其适用边界受限于英语朗读训练，自发对话与病理语音等外推场景尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://coding-phoenix-12.github.io/ArticulatorySFTTS/> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/JeremyCCHsu/Python-Wrapper-for-World-Vocoder> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/openai/whisper-medium> — 暂时无法访问

- 第三方资源：<https://huggingface.co/microsoft/wavlm-base-sv> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，哪些信息必须保留？

这篇论文研究的输入是音素序列加说话人身份，目标是从文本直接合成语音波形，中间必须保留可解释的物理量。现代神经语音合成把文本丢进大模型直接映射到声学特征，音质很好，但声道形状如何变化、基频能量如何驱动激励，外部看不到也改不动。论文要解决的是在保持可懂度和自然度的同时，把合成约束为明确的源加滤波器结构，并且让滤波器真正由发音运动学驱动。

输出不只是一段波形，还包括可检查的中间表示：预测的基频轮廓、能量轮廓、12 通道发音轨迹，以及分离的源谱和滤波器谱。演示页当前可用，地址为官方展示页，本文的事实判断以论文正文证据为准。初学者可以这样理解学习依赖：先看清任务与现有可控路线的缺口，再看整体数据流，然后逐个弄懂反演、预测、相加与细化，最后再看实验如何证明解耦是真的。

### 同输入同目标的路线各管住了什么？

按同输入、同目标、同监督来对照，黑盒神经合成路线输入文本、输出声学，代表是 Tacotron、FastSpeech、VITS 和大语言模型路线，优点是音质强，缺点是不暴露声道参数。韵律可控路线在黑盒基础上暴露基频和能量，例如 FastPitch、FastSpeech 2、StyleTTS2 和 HierSpeech++，可以调音高能量，但滤波器仍是抽象谱对象，没有对应到唇舌下颌。源滤波器路线把谱拆成源谱加滤波器谱，例如 FastPitchFormant 和 StableFormTTS，本文直接继承其分解骨架，但指出前人滤波器缺乏物理对应。

物理与发音合成路线用手设计手势或录音驱动，例如 VocalTractLab，或用实时核磁和电磁发音仪做正逆映射，物理可解释但不是文本驱动。教学例子是：同样是调高音，韵律模型改的是控制量，本文还要保证共振峰不跟着乱动，这需要滤波器输入里根本不给音高能量。本文的定位因此是文本驱动、显式源滤波器分解、且滤波器由运动学条件化的第一套完整文本语音方案。

### 为什么滤波器最难管，电磁发音仪数据又不够？

难点有两个。第一，滤波器对应声道形状，形状是连续运动的几何状态，不能像基频那样从波形直接可靠提取，必须有外部测量。第二，能直接测量的电磁发音仪语料很小，本文合并 6 个数据集也只有 35 小时 55 分、86 人，覆盖印度英语、美国英语、普通话、意大利语、粤语等多口音，而下游合成语料是数百小时的 LibriTTS，量级完全不对等。白话解释电磁发音仪：把小线圈贴在上下唇、下颌、舌尖、舌体、舌背上，在磁场中记录其中矢状面横纵坐标，随时间形成运动轨迹。

白话解释声学到发音反演：从录音反推这些线圈位置，属于逆问题。论文的选择是用大规模多语言预训练语音表示增强反演器，先在小规模并行数据上学会反演，再到大规模无并行数据上批量生成伪轨迹，把物理监督放大。这一步的质量决定滤波器是否真有物理意义，所以论文用 HPRC 的已见说话人和未见说话人分别检验泛化。

### 一个样本如何从音素走完到波形？

先沿一个样本走全程。输入一句文本转成的音素序列，音素编码器输出语言隐表示，随后分成 3 路：平均谱投影、发音嵌入、源嵌入。训练时用单调对齐把 3 路从音素长度拉长到声学帧数，推理时用预测时长做同样拉长。拉长后，发音嵌入进发音轨迹预测器得到 12 通道运动学，源嵌入进基频能量预测器得到两条韵律轮廓。

源对数梅尔预测器看基频能量加语言上下文输出源谱，滤波器对数梅尔预测器看伪轨迹或预测轨迹加语言上下文输出滤波器谱，两者在对数域直接相加得到音频谱。训练时用真值减去预测滤波器构造残差源目标，训练流匹配网络做源细化，推理时用欧拉求解器从噪声生成细化源再与滤波器相加，最后经 HiFi-GAN 声码器成波。下面的架构图把训练专用、推理专用和双阶段公共路径用不同线型分开，损失计算单独标出，是理解条件不对称的关键。

> **看图路径：** 1. 先从左侧音素与说话人嵌入出发，沿三路分支找到长度扩展的位置；2. 对比训练专用虚线与推理专用虚线在源和滤波器输入处如何切换；3. 找到黄色损失菱形与最终加法节点，确认监督与合成汇合点

[![原论文 Fig. 1：Overview of the proposed controllable source-filter TTS architecture.](https://arxiv.org/html/2610.00735v1/images/architecture3.png)](https://arxiv.org/html/2610.00735v1/images/architecture3.png)

*论文图 1。原论文 Fig. 1:：“Overview of the proposed controllable source-filter TTS architecture.”。*

图中左侧是音素编码器与说话人嵌入，每一块都被说话人向量条件化，中间是长度扩展，前后分别是 3 路投影与两路物理预测器，右侧是源细化、加法节点与声码器。重点观察训练时滤波器吃伪轨迹、源吃真值基频能量，推理时两者都切换为预测值，而流匹配始终以预测源、预测滤波器和说话人向量为条件，保证细化不脱离已预测的内容与音色。

### 反演器与两路预测器各自算什么？

反演器记为从复合声学特征到运动学序列的映射，输入是 MMS-1B 第 6、24、36 层拼接后的多深度表示，输出是与帧数对齐的发音序列。选择多层拼接的理由是预训练模型不同深度分布着不同声学音系信息，单层会丢失跨层互补。反演器本体是前后各 4 个前馈 Transformer 块的非自回归编码解码器，隐维度 256，注意力头维度 32，卷积核 7，总量约 7.3M 参数。声学 50 赫兹与运动学 100 赫兹的对齐用帧复制 2 倍上采样实现，12 通道按全局均值方差归一化。

\[\tilde{\mathbf{A}}=\mathcal{F}_{\text{AAI}}(\mathbf{M})\]

该式符号是复合特征矩阵映射为估计运动学矩阵，计算目标是逐帧逐通道的位置估计。评价形状用皮尔逊相关系数衡量轨迹形态相似，公式先减均值再算余弦型相关。

\[\rho(\mathbf{u},\mathbf{v})=\frac{\sum_{t=1}^{T}(u_{t}-\bar{u})(v_{t}-\bar{v})}{\sqrt{\sum_{t=1}^{T}(u_{t}-\bar{u})^{2}\;\sum_{t=1}^{T}(v_{t}-\bar{v})^{2}}}.\]

下游文本侧，发音轨迹预测器与基频能量预测器都是在拉长后的隐表示上用 1 维卷积残差网络输出连续轮廓，前者监督来自反演伪轨迹，后者监督来自 PyWORLD 提取的真值基频能量。关键设计是不对称路由：滤波器预测器看不到基频能量，源预测器看不到发音轨迹，只有说话人嵌入和平均谱语言上下文是公共的。

**声学到发音反演 × 发音伪轨迹：** 声学到发音反演负责从语音声学特征估计唇、下颌和舌部在正中矢状面的位置运动，发音伪轨迹是它在大规模无电磁发音仪标注的 TTS 语料上生成的替代监督信号，二者搭配把小规模电磁发音仪数据的物理知识搬运到数百小时文本语音训练中，使滤波器分支有可学习的运动学目标。

**声门源 × 声道滤波器：** 声门源分工是承载基频和能量决定的激励谱，声道滤波器分工是刻画发音姿态决定的共振谱，搭配理由是线性幅度的乘法对应对数梅尔域的加法，组合意义是最终对数梅尔谱写成两项直接相加，从而允许一路改韵律而不扰动另一路的共振。

**发音轨迹预测器 × 滤波器对数梅尔预测器：** 发音轨迹预测器分工是从文本隐表示输出连续运动学序列，滤波器对数梅尔预测器分工是只看该运动学序列加语言上下文输出滤波器谱，搭配原因是切断基频能量进入滤波器的通路，组合意义是在结构上逼迫滤波器只依赖声道运动，为跨说话人交换和发音编辑留下明确入口。

**最优传输条件流匹配 × 源细化：** 最优传输条件流匹配分工是学习从高斯噪声到残差源谱的直线向量场，源细化是把它作为均方误差训练后对过平滑激励谱的生成式修复，搭配原因是均方误差源保留了可控的基频能量结构而丢失细节，组合意义是在不破坏可控性的前提下恢复频谱和时间细节。

### 源谱加滤波器谱为何可以直接相加？

源滤波器理论把语音看成声门激励经声道共振整形，线性幅度域是乘法，对数梅尔域就是加法。训练时模型用预测源加预测滤波器逼近真值音频谱，用均方误差监督整体谱。这种加法不是网络自由学出的融合权重，而是写死的物理组合，解耦因此来自结构而非事后解释。源细化进一步把目标定为真值谱减去预测滤波器得到的残差源，让流匹配网络只负责补足激励细节。

流匹配条件向量拼接了预测源、预测滤波器和说话人嵌入，使细化过程知道当前内容与音色，避免孤立生成。推理时预测滤波器先由预测轨迹算出，噪声经 10 步欧拉求解器变成细化源，再相加成最终谱。这种先分解再相加的顺序保证了可干预性：改基频能量只进源支路，改舌位轨迹只进滤波器支路。

### 训练分几步走，损失与优化如何组织？

训练分 2 个阶段。第一阶段训练反演器，损失是均方误差加皮尔逊相关损失直接相加，前者管绝对位置误差，后者管运动形状，两者平均到帧和通道。优化用 Adam 固定学习率 1 乘 10 的负 4 次方，批量 8，最长音频 30 秒，用验证损失早停。

\[\mathcal{L}_{\text{AAI}}=\mathcal{L}_{\text{MSE}}+\mathcal{L}_{\text{PCC}}\]

该式把两项惩罚直接求和，没有额外权重，符号与前两式一致。第二阶段端到端训练可控合成，损失是时长损失、对齐先验损失、基频能量损失、发音轨迹损失、梅尔谱损失和流匹配损失直接求和。时长用对数域均方误差，缓解长短音素量级差异。

\[\mathcal{L}_{\text{dur}}=\frac{1}{L}\sum_{i=1}^{L}\left(\log d_{i}-\log\hat{d}_{i}\right)^{2}\]

该式符号是真值时长与预测时长的对数差平方平均，计算目标是让推理时长接近对齐导出的真值。合成模型约 33M 参数，用 Adam 训练 1,000,000 步，批量 8，分布在两块 24 GB 显卡上。声码器用预训练 HiFi-GAN，只做波形重建，不计入推理参数。需要补的缺项是论文未报告学习率调度与梯度裁剪细节，复现时应先按 Adam 默认与早停跑通，再对照验证集调稳定。

**单调对齐搜索 × 时长预测器：** 单调对齐搜索分工是在训练时用平均谱流给出文本与声学帧的单调对齐并导出真值时长，时长预测器分工是在推理时只看音素隐表示预测该时长，搭配原因是推理时没有真值对齐可用，组合意义是用同一长度扩展规则把三路语言表示统一拉长到目标帧数 T，保证训练推理的长度操作一致。

### 数据、划分、基线与指标如何保证可比？

反演数据是 6 个电磁发音仪数据集的合并，统一降采样到 100 赫兹，测试只用 HPRC 构造已见说话人未见语句和未见说话人两套，以美音为目标方言对齐下游。合成数据训练用 LibriTTS 的 train-clean-460，音频重采样到 22.05 千赫兹，80 维对数梅尔谱，窗长 1024、跳长 256，基频能量用 Python-Wrapper-for-World-Vocoder 按同样 256 跳长提取以保证帧同步，该第三方链接当前可用。客观可懂度用 whisper-medium 转写算词错率字错率，说话人相似度用 WavLM 说话人嵌入余弦相似度，这两个第三方链接本次未能确认可达，复现时需自行确认权重可达后再跑。

基线覆盖 3 类：端到端 YourTTS 与 XTTS、流匹配 Matcha-TTS 改多说话人版、韵律可控 StyleTTS2 与 HierSpeech++，另加去掉发音分支的香草源滤波器消融和去掉流匹配的消融。主观自然度是 20 名听者每系统评 20 句的平均意见分，辅以 UTMOS 全量自动预测。控制性与可解释性分数是加分制，前者最多 3 分按音高能量发音轨迹是否可直接操纵计分，后者最多 5 分按是否暴露音高能量发音轮廓与源滤波器谱计分。

### 发音精度与合成质量的主结果是什么？

先看反演与文本到发音的精度问题：在 HPRC 上谁的特征更准，文本预测是否学到真的人体运动而非拟合伪标签。公平条件是同一 HPRC 测试、同一皮尔逊相关指标，文本模型对 HPRC 全员零样本。下表整理论文正文直接报告的关键相关系数，方向是越高越好。

| 条件 | 指标 | 反演 MMS-FT 已见 | 反演 MMS-SSL 未见 | TTS 文本预测未见 | 反演 MMS-FT 未见 |
| --- | --- | --- | --- | --- | --- |
| HPRC 测试 | 轨迹相关系数 | 0.9542 | 0.7749 | 0.6922 | 0.7711 |

表后解释：反演侧 MMS-FT 已见最高，MMS-SSL 未见略优，论文因下游合成表现选 MMS-FT 做伪标注。

文本侧未见 0.6922 接近专用反演未见 0.7711，支持文本在间接监督下学到有效动力学，但仍有差距，代价是伪标签噪声、音素输入与跨语料迁移。未胜出项是 TERA 基线与文本侧已见 0.6673，说明自监督表示与文本输入仍有信息损失。

> **看图路径：** 1. 对比左右两列在起始辅音段的下唇 Y 与舌背 Y 高低差异；2. 观察共享韵母段下颌先降后升的共性趋势；3. 注意末尾 t 段各通道同步跳变的时间对齐

[![原论文 Fig. 2：Kinematic trajectory comparison for the minimal pair “pat” (bilabial stop) and “cat” (velar stop),…](https://arxiv.org/html/2610.00735v1/Pat_vs_Cat_Minimal_Pair.svg)](https://arxiv.org/html/2610.00735v1/Pat_vs_Cat_Minimal_Pair.svg)

*论文图 2。原论文 Fig. 2:：“Kinematic trajectory comparison for the minimal pair “pat” (bilabial stop) and “cat” (velar stop), showing generated vertical displacement of the lower lip, jaw, tongue body, and…”。*

该图是 pat 与 cat 最小对的垂直位移对比，左侧双唇塞音起点的下唇明显抬高实现闭合，右侧软腭塞音起点的舌背明显抬高，共享韵母段下颌先降后升，证明模型分离了发音部位同时保留协同发音一致性。

> **看图路径：** 1. 先看底部共振峰面板中 F3 在 0.20 到 0.30 秒附近的下探；2. 再看顶部舌尖 Y 上升与舌尖 X 回缩是否同时发生；3. 对照下颌面板确认舌运动与下颌张开是否解耦

[![原论文 Fig. 3：Acoustic and kinematic trajectories for the word “cart” (/k’a:rt/).](https://arxiv.org/html/2610.00735v1/Rhotic_Plot.svg)](https://arxiv.org/html/2610.00735v1/Rhotic_Plot.svg)

*论文图 3。原论文 Fig. 3:：“Acoustic and kinematic trajectories for the word “cart” (/k’a:rt/).”。*

该图是 cart 词中美式卷舌的声运动映射，底部 F3 在 0.20 到 0.30 秒下探，顶部舌尖高度与回缩同步增强，舌体舌背后缩配合，下颌保持低位，末尾 t 段舌尖前移、F3 回升，支持声学由连贯运动学生成的判断。

### 可懂度自然度与韵律频谱保真度如何权衡？

再看合成质量问题：在相近体量下加物理约束是否显著损害可懂度和自然度。比较条件是 LibriTTS test-clean 与其他集，指标方向是词错率、梅尔倒谱失真和基频对数均方误差越低越好，相关系数、说话人相似度、平均意见分和 UTMOS 越高越好。下表只用正文连续原句可逐字覆盖的数字，避免把不同指标混算。

| 条件 | 指标 | 本文方法 | 香草源滤波器 | 去流匹配消融 |
| --- | --- | --- | --- | --- |
| test-clean 可懂度自然度 | 词错率与 MOS 与 UTMOS | 5.53 与 3.76 与 3.71 | 5.96 与 3.74 与 3.75 | 4.77 与 2.26 与 5.89 到 6.72 |
| test-clean 字错率 | 字错率 | 2.29 | 2.66 | 1.91 |

表后解释：本文发音条件化词错率 5.53 优于香草基线 5.96，自然度基本持平，支持发音结构带来有用增益；去掉流匹配后词错率 4.77 与字错率 1.91 反而更好，但 UTMOS 从 3.71 跌到 2.26、失真从 5.89 恶化到 6.72，证明均方误差源过平滑，流匹配对感知质量必不可少。大模型 StyleTTS2 与 HierSpeech++ 原始 MOS 更高，但参数量分别是 129.5M 与 205.6M 量级，本文 33M 在体量约束下与 XTTS 可懂度持平、全面优于同体量 YourTTS。

为进一步区分韵律保真与频谱代价，下面单独对照基频重建与梅尔倒谱失真，该对照问题直接承接上表的自然度讨论并为跨模型比较提供依据。

| 条件 | 指标 | 本文方法 | XTTS 与 YourTTS | StyleTTS2 与 HierSpeech++ |
| --- | --- | --- | --- | --- |
| test-clean 韵律 | 基频相关系数 | 0.8841 | 0.8730 与 0.8718 | 未胜出项见正文 |
| test-clean 频谱 | 梅尔倒谱失真 | 5.89 | 未单独列出 | 4.52 与 4.91 |

表后解释：该保真对照说明韵律优势与频谱代价并存，基频相关系数领先体现源端建模有效，而梅尔倒谱失真偏高是严格源滤波器分解约束下的预期折中，与前文可懂度与自然度结论相互印证。

### 缩放韵律与交换说话人能否证明解耦？

解耦实验分两类。第一类在 VCTK 上把预测基频能量乘以 0.7 到 1.3 再合成，要求源跟踪缩放目标、滤波器共振峰不受扰动。论文报告本文能量相关系数在 0.9849 到 0.9890 之间全程稳定，StyleTTS2 远离中性尺度退化；基频方面 StyleTTS2 原始相关最强，本文落后于它但各尺度超过只支持基频控制的 HierSpeech++，而第一共振峰相关约 0.88 与基线持平，支持音高变化经运动学滤波器而不扰动共振。第二类是跨说话人交换：A 的嵌入驱动源与时序，B 驱动滤波器，理想是音高跟 A、共振跟 B。

下表用正文可覆盖数字呈现，方向是相关越高越好、失真越低越好。

| 条件 | 指标 | 交叉 A-B 对 A | 自重构 A-A 对 A | 交叉 A-B 对 B |
| --- | --- | --- | --- | --- |
| 基频跟踪 | 基频相关系数 | 0.7587 | 0.7663 | 0.6850 与 0.6922 |
| 谱包络 | 梅尔倒谱失真 | 5.8321 | 5.4056 | 5.4694 |

表后解释：交叉合成对 A 的基频 0.7587 接近自重构上限 0.7663，对 B 仅 0.6850 与反向基线 0.6922 相当，证明音高严格跟源说话人；谱失真对 B 的 5.4694 优于对 A 的 5.8321，方向与自重构一致，支持 B 的谱特性经滤波器部分迁移。能量各条件 0.83 到 0.85 过于接近，单独诊断力弱，需与基频和失真联合看。反例是谱迁移只是部分而非完全，说明解耦强但非理想。

> **看图路径：** 1. 对比上两行虚线原始隆起与实线压平在元音段的差异；2. 观察左下原始声学中 F3 向 F2 靠拢的凹陷；3. 观察右下修改后 F3 保持高位平台且与 F2 分离

[![原论文 Fig. 4：Kinematic and acoustic effects of modifying the rhotic vowel in “bird”.](https://arxiv.org/html/2610.00735v1/Bird_Modification.svg)](https://arxiv.org/html/2610.00735v1/Bird_Modification.svg)

*论文图 4。原论文 Fig. 4:：“Kinematic and acoustic effects of modifying the rhotic vowel in “bird”.”。*

该图把 bird 中央元音的舌尖舌体隆起压平成中性姿态，左侧原始声学 F3 下探向 F2 靠拢，右侧修改后 F3 保持高位平台、F2 与 F3 分离，符合非卷舌音系，证明直接改运动学无需声学后处理即可实现口音级控制。

### 哪些代价与边界尚未验证？

论文直接报告的代价是频谱保真度下降，梅尔倒谱失真高于大容量非约束模型，这是为结构解耦付出的可预期成本。有限解释是基频差距主要来自模型容量而非解耦失败，因为能量与共振峰稳定性并未同步恶化，但这仍是解释而非因果证明。未验证的推测包括：发音相关性高不等于发音绝对位置无偏，相关系数对整体偏移不敏感；跨说话人能量区分度不足，交换实验在韵律相近说话人上可能低估泄漏。

口音编辑只展示 bird 与 cart 等孤立词，未测量连续语篇的可懂度损失与听者误判率。缺失证据不是技术错误，但不应承诺延迟、实时因子或临床适用性得到改善，论文也未报告推理延迟与每步求解成本。总体趋势不等于每组每步成立，极端缩放 1.3 与 0.7 处的失真仍会上升，使用时应先在目标说话人与目标方言上复测共振峰稳定性。

### 复现先做什么，需要哪些超参数与信息条件？

复现分两段。先复现反演：合并 6 个电磁发音仪数据并统一到 100 赫兹，提取 MMS 第 6、24、36 层拼接特征，50 赫兹特征帧复制 2 倍对齐，12 通道全局归一化，按 Transformer 编码解码器、隐 256、批量 8、学习率 1 乘 10 的负 4 次方训练，均方误差加相关损失早停，在 HPRC 已见未见划分上先复现 0.9542 与 0.7749 附近的相关水平。

再复现合成：在 LibriTTS train-clean-460 上按 80 维梅尔、窗 1024 跳 256、22.05 千赫兹与 World 声码器同跳长提取基频能量，文本编码器与时长预测器沿 Matcha-TTS，说话人嵌入沿 YourTTS 配置，3 路投影隐 256，源滤波器各两块前馈 Transformer 加说话人自适应层归一化，流匹配用条件 1 维 U-Net、推理欧拉 10 步，HiFi-GAN 声码器，总量约 33M、1,000,000 步批量 8。代码开源、权重下载与系统可运行要区分：论文给出展示页与 World 工具链，YourTTS、XTTS、StyleTTS2 与 HierSpeech++ 用公开代码权重，但 WavLM 与 Whisper 链接本次未能确认可达，需先验证再跑相似度与可懂度。

先跑香草源滤波器与去流匹配两个消融，确认去掉发音分支与去掉流匹配的现象可重复，再做 0.7 到 1.3 缩放与 A-B 交换。

### 何时值得尝试这种物理约束？

当任务需要把声道身份与韵律分开操作时值得尝试，例如方言理解、口音修改、音色转换思路验证和非典型发音的物理探针，因为黑盒隐空间没有对应到舌唇下颌的手柄。当目标只是追求最高原始音质或最低词错率，且不需干预声道时，大容量非约束模型更直接，不必为解耦付频谱代价。实践建议是：把发音轨迹当作可视化调试器，先看最小对与卷舌词是否出现预期的部位分离与 F3 下探，再做压平舌隆起的编辑。

把跨说话人交换当作验收测试，要求基频跟源、谱失真跟滤波器同时成立，单看能量不够。还需补的验证是连续语句编辑后的可懂度、听者自然度盲测，以及发音器间相关约束是否符合生理极限。记住本文的核心判断：物理接地不是免费的音质提升，而是一种用小幅频谱代价换来可复述、可干预生成路径的设计选择。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.00735v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-02/)
