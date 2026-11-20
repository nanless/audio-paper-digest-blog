---
title: "Back to Mel: Learning to Bridge Fidelity and Perception in Generative Speech Enhancement"
date: 2026-11-19
draft: false
tags: [语音增强, 流匹配, 去混响, 主观评测]
categories: [论文速递]
description: "针对生成式增强难兼顾声学保真、感知质量与效率的问题，论文回到梅尔谱并提出 BaME，用子带 Transformer 做流匹配梅尔生成、用退化相位做相位感知声码重建、再用一步保真感知对齐微调，在多个基准上验证保真与感知的折中及单步推理代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.22628"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "回到梅尔谱：在生成式语音增强中兼顾保真与感知"
paper_digest_original_title: "Back to Mel: Learning to Bridge Fidelity and Perception in Generative Speech Enhancement"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.22628v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.22628v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.22628v1.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"task","id":"task.dereverberation","label":"去混响"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对生成式增强难兼顾声学保真、感知质量与效率的问题，论文回到梅尔谱并提出 BaME，用子带 Transformer 做流匹配梅尔生成、用退化相位做相位感知声码重建、再用一步保真感知对齐微调，在多个基准上验证保真与感知的折中及单步推理代价。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Andong Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kun Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaodong Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chengshi Zheng"}]
paper_digest_abstract_sha256: "31d40cf6569ee113305fa14ed3f5e9ca5071f3c44bede22a5201d64697f2b0fc"
paper_digest_sidecars: {"citation.bib":{"sha256":"9f1084b697cd0f46c473bfcf0f3526a37e2f978a51bc5cf6209b90eb5b42d990","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22628/citation.bib"},"citation.json":{"sha256":"8a618cfd67b4a0c82ed50f488e8b40306e13a5a05f23f889a8653d5a6eadc39c","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22628/citation.json"},"citation.ris":{"sha256":"ebedc74add6cda189213d5702bc8b809cb611cf7f844bc833c803619ef412cdd","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22628/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"6e2b13b2bf786b7d9f5101185802cec67fb53306e25d4910fa519436007133d4","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22628/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "88559048a72cb19cca2fa99d421f0b3046f946b7f3c39a6f8c81eb616204b48f"
paper_digest_api_reader_plan_sha256: "71ba401cbffb25881482b4ac6d7b3a2dc5619675f559432882de421b18954274"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "812ba7d08990e6e646a79f0b78e974d4708c410075072be8cd718dcf8ff60bcb"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "c31c9ab5cbb78a7373b09860041534d077a912e87fac971a178f856774b45235"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0d88661d61d91341ebef5609f751a6961beace413f4fc6d704e7d81fff2fd571"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "caa0d3c28a3f1f1cb145fb3d51cdf7230c1a86e75af56376bf8c3afc3f044ff1"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 回到梅尔谱：在生成式语音增强中兼顾保真与感知

> 英文题目：*[Back to Mel: Learning to Bridge Fidelity and Perception in Generative Speech Enhancement](https://arxiv.org/abs/2611.22628v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音增强](/audio-paper-digest-blog/papers/?concept=task.speech-enhancement)；[去混响](/audio-paper-digest-blog/papers/?concept=task.dereverberation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)；[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation) → [主观评测](/audio-paper-digest-blog/papers/?concept=method.subjective-evaluation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.4/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Andong Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Kun Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaodong Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Chengshi Zheng：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音增强需要从混有噪声、混响、削波和限带等退化的信号中恢复目标语音，难点在于同时保留说话人、韵律和细节等保真信息，又让听感自然，还要控制开销。先从退化波形提取对数梅尔谱与退化相位，并用去噪微调的语音自监督表示提供语义条件，经生成模型得到增强梅尔谱，再由声码器合成波形。与采用可学习紧凑隐表示的思路不同，文中利用梅尔谱按感知频率划分且保留显式频带结构的特点，把相邻梅尔带分组并联合声学与语义特征建模，这种轻量生成骨干称为子带感知变换器，其输出经滤波与细化两分支解码为目标梅尔谱。针对梅尔谱丢失相位的问题，文中把增强梅尔谱经伪逆投影恢复幅度并与退化相位组合后送入声码器，这种利用退化观测约束重建的模块称为相位感知声码器，再由非侵入指标在零相位与退化相位两个候选中自适应选择，称为质量引导双相位策略。最后把多步流模型微调为一步生成并联合保真与感知约束的微调称为单步保真感知对齐，它固定语义模型并对齐多层特征余弦相似度，同时保留幅度与梅尔损失以抑制伪影。在DNS-Challenge 2020含混响测试集上，退化相位重建的PESQ为2.301，高于零相位重建的2.228，说明相位选择直接影响参考一致性。该结论在无混响噪声为主时更适用，含混响时退化相位不稳定，需依赖自适应选择缓解，强削波限带与编解码丢包等泛化范围尚未充分验证。单步推理在中央处理器上实时因子为0.85，约1.18倍实时。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/Andong-Li-speech/BAME> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/urgent-challenge/urgent2026_challenge_track1> — 链接可访问（HTTP 200）

- 第三方资源：<https://urgent-challenge.github.io/urgent2025> → <https://urgent-challenge.github.io/urgent2025/> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/AndongLi/BaME/tree/main> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/espnet/espnet> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/sp-uhh/storm> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/Render-AI-Team/voicefixer2> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/Audio-WestlakeU/CleanMel> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/ASLP-lab/SenSE> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/cisco-open/pase/tree/main/stupase> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/Kevin-naticl/LLaSE-G1/tree/main> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/open-mmlab/Amphion/tree/main/models/tts/metis> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音增强要从什么样的输入恢复出什么

语音增强的输入是一段退化语音，可能是加性环境噪声、混响、带宽丢失、削波、编解码损伤或丢包等多种失真叠加后的波形，目标是恢复出干净语音波形。读者需要区分两类信息：语言内容是否正确、说话人音色与韵律等声学细节是否保留，前者丢了会出现幻觉或误听，后者丢了会觉得像另一个人或发闷。

传统判别式方法学的是从退化到干净的多对一映射，重建细节能力有限。生成式方法则建模干净语音的分布，早期有生成对抗网络，近期主要是大语言模型加神经音频编解码器的离散 token 路线，以及扩散或流匹配的连续表示路线。离散路线感知质量常较好，但量化可能丢掉细粒度声学信息；连续路线可以直接建模波形、复谱、梅尔谱或学习到的隐表示，各自在维度、冗余和重建难度上不同。

表示的选择很关键。原始波形与复谱理论上可完美重建，但维度高且冗余；学习到的压缩隐表示维度小，却多为压缩或合成设计，未必保留说话人和细节；梅尔谱是手工压缩表示，用感知滤波器组把线性幅度谱降维，维度较低且保留显式的频率带组织，但丢了相位，需要声码器补回。论文要回答的就是：在这种表示下，能否同时把保真和感知做好，并把效率降下来。

### 为什么说保真、感知与效率难兼得

论文指出的困难有三层。第一，保真要求输出与参考在幅度、音素、说话人等方面一致，而感知要求听起来自然，两类目标在单步或少步生成时走向不同。原文用不同采样步数做了对照：侵入式指标在很少的步数就达到高点，非侵入式指标则需要更多步数才上去，说明低步数已能保留参考一致性，但听感仍需额外的生成细化。

第二，梅尔表示本身不完整。它只保留幅度压缩后的观测，相位完全丢失，声码器只能从学到的先验去猜相位。在增强任务里其实还有退化语音的相位可用，但它是否可靠取决于场景：纯噪声下退化相位有帮助，混响下相位失真和时间拖尾会带来不一致的线索，直接用反而可能拉低感知分数。

第三，轻量与幻觉的矛盾。生成模型在重噪声和混响下容易产生幻觉内容，引入语义先验能缓解，但常用的语音自监督大模型本身参数大、计算重。如何在不堆大模型的前提下利用梅尔的频率结构做细粒度建模，并在单步内同时约束保真与感知，就是 BaME 要解决的具体问题。

### BaME 把一次增强拆成哪三段

BaME 沿梅尔增强加声码重建的常规管线展开，但每段都利用了梅尔的结构或退化观测带来的先验。第一段是梅尔生成：以退化对数梅尔谱和语义特征为条件，用流匹配模型从高斯噪声出发估计目标对数梅尔谱，主干是新设计的子带感知 Transformer。第二段是波形重建：把增强梅尔经伪逆映射回线性幅度初值，再结合零相位或退化相位，用相位感知的子带声码器恢复波形，并用质量引导的双相位策略二选一。第 3 段是单步对齐：先按标准流匹配训练，再只针对起始时刻做一步微调，同时加保真域和感知域约束，让单步输出既贴近参考频谱又贴近听感特征。

下图把两个互补先验画在一起，左为结构先验，右为退化相位先验，读图时重点看压缩方式与信息汇合点。

> **看图路径：** 1. 先看左图从时频谱到梅尔谱的线性压缩箭头与子带分组示意；2. 再看右图增强梅尔经伪逆得到值域幅度后与退化相位汇合的位置；3. 对比左右两图标注的轻量与大模型参数量示意，理解结构先验的作用

[![原论文 Fig. 1：Illustration of two complementary priors exploited in BaME.](https://arxiv.org/html/2611.22628v1/fig1_mel_example.png)](https://arxiv.org/html/2611.22628v1/fig1_mel_example.png)

*论文图 1。原论文 Fig. 1:：“Illustration of two complementary priors exploited in BaME.”。*

左图对比了时频谱到学习隐表示的非线性压缩与到梅尔谱的线性压缩，前者丢了显式频率组织而后者保留了从低频精细到高频粗糙的带划分，因此可以用分组子带扩散以小模型建模。右图说明梅尔经伪逆得到值域幅度后，与退化相位组合再经极坐标变换送入声码器，补回零空间缺失的细节。论文用该图论证表示选择不是任意的，而是与主干和声码设计绑定的。

梅尔提取在去掉对数后可写成线性欠定映射，论文给出如下形式，符号含义是线性幅度谱经梅尔滤波器组加权求和得到压缩观测。

\[\mathbf{Y}=\exp\left(\mathbf{X}\right)=\mathcal{A}\left|\mathbf{S}\right|.\]

其中 Y 是线性梅尔幅度，A 是梅尔滤波器，|S|是线性幅度谱，Fm 远小于频率点数 F。这个线性形式是后文值域零空间分解的前提，对数只是可逆的单调变换，在建模时处理对数域，声码时再指数还原。

### 子带 Transformer 如何利用梅尔的频率带结构

子带感知 Transformer 简称 SaT，输入是插值状态 Xt、退化对数梅尔 Xbar 和语义特征 Dtilde，输出是目标对数梅尔的估计。它的前提是梅尔第 m 带的能量是局部频点幅度加权和，保留了原幅度谱的带组织，因此可以把梅尔看成粗粒度的时频谱并按子带处理。论文默认把 100 个梅尔带分成 25 个子带，每个子带含相邻的若干梅尔带，既比逐梅尔 bin 建模省计算，又比整图建模更细。

下图是 SaT 的总体与模块细节，读图时沿 3 路输入到输出的主路径看，再看编码与解码的子带维度变化。

> **看图路径：** 1. 沿退化梅尔、插值状态与语义特征三路输入看到子带编码模块的汇合；2. 观察双路径块中跨子带与跨时间两条路径的排列与置换操作；3. 看协作解码中滤波与细化两分支如何合并成最终对数梅尔

[![原论文 Fig. 2：Illustration of the proposed framework for Mel enhancement.](https://arxiv.org/html/2611.22628v1/fig2_system_diagram.png)](https://arxiv.org/html/2611.22628v1/fig2_system_diagram.png)

*论文图 2。原论文 Fig. 2:：“Illustration of the proposed framework for Mel enhancement.”。*

总览中 3 路输入先经协同子带编码模块变成 L×N×C 的 3 维特征，再经多个双路径块建模，最后经协作解码恢复对数梅尔。编码子图中声学支对每子带的插值谱与退化谱拼接做 1 维卷积，语义支对无频率结构的自监督特征用多个独立低秩卷积投影到对应子带，再用逐点 2 维卷积融合，并用时间步嵌入做调制。双路径块子图显示先用双向门控循环单元建子带间关系，再置换后用多头自注意建时间关系。解码子图显示滤波分支估计增益、细化分支估计残差，二者结合得到最终谱。

**梅尔谱 × 子带建模：** 梅尔谱负责把线性频谱按感知尺度压缩成低维且保留频率带组织的结构化表示，子带建模负责把相邻梅尔带分组后分别编码再跨带交互，二者搭配让生成模型可以用轻量网络做细粒度时频关系建模，而不是在高维冗余表示上直接学习全局映射。

流匹配的前向插值路径采用整流流的形式，从噪声到目标做线性插值，目标速度是终点减噪声，论文给出如下定义。

\[\boldsymbol{x}_{t}=\left(1-t\right)\boldsymbol{\epsilon}+t\boldsymbol{x}_{1},\quad\boldsymbol{u}_{t}=\boldsymbol{x}_{1}-\boldsymbol{\epsilon},\]

其中 xt 是 t 时刻插值状态，epsilon 是高斯噪声，x1 是目标数据，ut 是目标速度。训练时网络按条件 c 预测速度或直接预测终点，论文比较了两种参数化，发现直接预测目标梅尔谱的数据预测损失对保真类指标更有利，且便于单步推理。数据预测对应的加权损失形式如下，分母含 1-t 的平方，tau 取 0.05 防止除零。

\[\mathcal{L}_{\mathrm{FM}}^{\left(data\right)}=\mathbb{E}_{t,\boldsymbol{x}_{0},\boldsymbol{x}_{1}}\left[\frac{\left\|\tilde{\boldsymbol{x}}_{1,\theta}-\boldsymbol{x}_{1}\right\|_{F}^{2}}{(1-t)^{2}}\right],\]

推理时用欧拉离散积分把学到的速度场从 0 积到 1。SaT 的解码采用滤波加细化的协作形式：以退化梅尔的指数为基底，乘增益 G 再加细化量 R 后取对数，这样既保留退化谱的可靠部分，又允许网络补充缺失细节。论文强调这与 CleanMel 逐 bin 建模加 Mamba 不同，SaT 分组建模且只用门控循环单元与注意力，兼容性更好。

语义条件来自对 WavLM 做去噪表示蒸馏后的最后一层特征，目的是在重失真下约束语言内容、减少幻觉。论文也试了只用前 6 个卷积块加子带式投影的轻量 SubNet，发现它比不用语义好，但与完整去噪 WavLM 仍有差距，说明语义提取在有限预算下仍难做好，默认仍用完整去噪 WavLM。

### 相位感知声码器怎样用好不可靠的退化相位

常规梅尔声码器只看估计梅尔，需要自己猜相位。BaME 的相位感知声码器多用一路退化语音的相位。依据是值域零空间分解：线性幅度谱可分成能由梅尔直接决定的值域部分与需补回的零空间部分，论文给出如下分解。

\[\left|\mathbf{S}\right|=\mathcal{A}^{\dagger}\mathbf{Y}+(\mathbf{I}-\mathcal{A}^{\dagger}\mathcal{A})|\mathbf{S}|,\]

其中 A†是梅尔滤波器的伪逆，第一项是值域分量，第二项是零空间分量。实际做法是把增强梅尔指数化后经伪逆得到初始幅度 Mtilde，再与退化相位组合成复谱初值送入轻量子带声码器 DegVoC，网络负责恢复目标谱。声码器本身按 24 个子带划分、256 通道、12 个局部块配置，参数量较小。

下图对比常规与所提声码器，重点看新增的退化语音分支与二选一机制。

> **看图路径：** 1. 对比上图常规声码器只用估计梅尔与下图多出退化语音分支的差异；2. 找到梅尔到线性域映射后与零相位或退化相位组合的两个入口；3. 注意右侧非侵入式评价器对两种重建候选的二选一逻辑

[![原论文 Fig. 3：Generation comparisons of different neural vocoders for enhanced speech generation.](https://arxiv.org/html/2611.22628v1/fig3_phase_aware_vocoder.png)](https://arxiv.org/html/2611.22628v1/fig3_phase_aware_vocoder.png)

*论文图 4。原论文 Fig. 3:：“Generation comparisons of different neural vocoders for enhanced speech generation.”。*

上半是常规路径：估计梅尔直接进声码器输出实虚部或波形。下半是所提路径：估计梅尔经梅尔到线性映射得初值，分别与零相位和退化相位组合成两个候选，经声码器得到两个波形，再用非侵入式评价器选感知分数更高者。论文用该图说明相位不是固定使用的，而是按质量自适应切换的。

**值域分量 × 零空间分量 × 退化相位：** 值域分量指能由梅尔谱经伪逆直接算出的线性幅度部分，零空间分量指梅尔压缩丢失而需声码器补回的细节，退化相位指带噪或带混响观测中残留的相位线索，三者分工是幅度初值由梅尔给定、缺失细节由网络生成、相位先验提供额外的复谱约束以提高重建保真。

为什么需要切换，可看论文的相位条件对照：在只含噪声的 DNS 无混响集上，退化相位在多项指标上最好；但在含混响时，混响相位的非侵入式分数明显低于零相位，尤其在感知预测器上下降多，而侵入式指标差异相对小。这说明混响相位失真与时间拖尾会与增强幅度不一致，带来听感风险。质量引导的双相位声码策略就是为此设的：同一增强梅尔分别用零相位和退化相位各生成一路，再用 SCOREQ 等评价器选优。论文报告该策略只增加一次声码器前向与两次评价器前向，开销有限，默认选 SCOREQ 是因为综合表现与额外计算的折中较好。

此处需要提醒的是，声码输入的复谱初值形式与流匹配插值无关，初值幅度来自伪逆投影而相位来自退化观测或零假设，网络在此基础上做子带编码与谱解码以补回零空间细节。

### 一步保真感知对齐如何同时约束频谱与听感

标准流匹配需要多步积分，论文观察到侵入式指标在一步或两步已最高，而非侵入式指标需要更多步，说明单步已能保留参考一致性但听感欠佳。因此提出一步保真感知对齐，简称 OS-FPA：先按标准目标训练 SaT，再固定声码器并微调 SaT 使其在起始时刻单步输出目标梅尔。单步形式是从高斯噪声与条件直接预测增强梅尔，再经声码器得波形，微调时零相位与退化相位各以一半概率随机选用，以兼容两种重建路径。
下图是该微调的流程，读图时区分左右两域的监督来源。

> **看图路径：** 1. 从高斯噪声与条件出发看单步生成增强梅尔与波形的单向流程；2. 区分右上保真域的三类频谱波形损失与右下感知域的特征对齐；3. 注意声码器与感知模型在该阶段的冻结与更新状态标记

[![原论文 Fig. 6：Diagram of the proposed OS-FPA scheme.](https://arxiv.org/html/2611.22628v1/fig6_osfpa.png)](https://arxiv.org/html/2611.22628v1/fig6_osfpa.png)

*论文图 6。原论文 Fig. 6:：“Diagram of the proposed OS-FPA scheme.”。*

左灰框是单步前向：高斯噪声与条件进 SaT 得增强梅尔，再经声码器得波形，退化相位只作为声码输入。右上保真域用幅度损失、梅尔损失与全向实虚部损失把增强波形拉向目标波形；右下感知域把增强与干净语音分别送入冻结的 WavLM，对齐多层 Transformer 特征的余弦相似。论文用该图强调两域是并行的，缺一不可。

**保真域约束 × 感知域约束：** 保真域约束负责用幅度、对数梅尔和全向实虚部损失把波形频谱拉回参考信号，感知域约束负责用冻结语音自监督模型的深层特征余弦相似把听感相关表示拉齐，二者联合是为了防止只做感知对齐时出现频谱伪影，也避免只做保真约束时感知质量不足。

**流匹配 × 数据预测 × 速度预测：** 流匹配负责学习从高斯噪声到目标梅尔谱的连续传输路径，速度预测直接拟合路径切向量而数据预测直接估计终点梅尔谱，论文采用数据预测是因为它把监督直接落在目标谱上，在消融中对保真类指标更有利且便于改写为单步生成。

消融显示只加感知域能大幅提升非侵入式分数，但频谱会出现伪影；只加保真域也能提升但总体不如双域联合；双域在两套 DNS 集上都更均衡。感知 backbone 换成 Wav2vec 2.0 或 HuBERT Large 时差异不大，默认用 WavLM-Large。需要提醒的是该结论只在论文的损失权重与 60k 步微调配置下成立，权重分别设为幅度 40、梅尔 40、全向实虚部 40、感知 25，换权重或步数可能改变折中点。

### 数据、基线与指标在什么条件下比较

训练用约 600 小时干净语音，来源包括 DNS5 的 LibriVox 子集、AISHELL3、DiDi、EARS、VCTK、LibriTTS、MLS 与 URGENT 2026 提供的 4 个数据集，并按 UTMOS 与 DNSMOS 均值取前 25% 过滤以提高质量，同时排除与评测重叠的说话人与低质量子集。噪声来自 DNS 噪声、FMA、FSD50K 与 WHAM，并去掉 WHAM 测试段以防与 EARS-WHAM 评测重叠；混响来自 openSLR26、openSLR28、ARNI 与 BRUDEX。退化在线生成：以 0.5 概率加环境噪声、以 0.08 概率加风噪，信噪比在 -8 到 15 dB 均匀采样，以 0.5 概率加混响并以直达声为目标；另一类是每次随机选 1 到 3 种做低通、削波、编解码、丢包与时频掩蔽并随机打乱顺序。

评测用 4 个基准：16 kHz 的 DNS 2020 无混响与有混响各 150 对，分别考去噪与去噪加去混响；48 kHz 重采样到 16 kHz 的 EARS-WHAM_v2 与 EARS-Reverb_v2 各 886 对，分别考非平稳噪声去噪与混响去除；44.1 kHz 重采样到 16 kHz 的 GSR 503 对，含噪声、混响、削波与带宽丢失；URGENT 2025 非盲集 1000 对，考多种失真与采样率的通用增强。基线覆盖判别式的 TFGridNet 与 BSRNN，连续生成的 StoRM、VoiceFixer、CleanMel、FlowSE、SenSE 等，离散 token 的 LLaSE-G1、Metis、GenSE、UniSE 等，以及自监督表示的 PASE 系列，部分无公开权重只报告能运行的分数。

**侵入式指标 × 非侵入式指标：** 侵入式指标指需要干净参考才能计算的一致性度量，如语音质量、可懂度、音素相似度和说话人相似度，非侵入式指标指无需参考的感知质量预测器，二者搭配是因为前者反映与参考的偏离程度，后者作为听感的代理，论文明确不把它们直接等同于保真与感知，而是互补地报告。

侵入式用 PESQ 宽带版、eSTOI、基于 wav2vec2 音素识别的 LPS、基于 voxcelebs 模型的 SpkSim、基于自监督表示的 SBS，以及以干净转写为伪标签用 Whisper-Large 算的词错率或在 URGENT 上用 OWSM 算的字错率，分数越高越好、错率越低越好。非侵入式用 DNSMOS-OVRL、UTMOS、DiMOS、WVMOS 与 SCOREQ 预测平均意见分，越高越好。主观另做绝对偏好与相似偏好两种 A/B 测试，各 20 trial，22 名有音频背景的听众参与，用单侧 KS 检验，p 小于 0.05 视为显著。特征上音频重采样到 16 kHz，窗长 1280、25% 移位、1280 点 FFT、100 个梅尔带，上下限 0 到 8 kHz，并用 50,000 条干净谱的均值方差标准化对数梅尔输入。

### 在去噪、去混响与通用增强上表现如何

主结果的比较问题是：在相同公开权重可运行的条件下，BaME 单步版本能否在保真类指标上领先，同时感知不掉队。先看受控的去噪与去混响，再看通用失真。DNS 无混响上判别式在侵入式仍强，BSRNN 的 eSTOI 最高，Metis 在多项非侵入式最高；连续表示普遍比离散 token 保真好，PASE 系因语义条件词错率较低；BaME 在多项侵入式最好，eSTOI 略低于 BSRNN，感知略低于 Metis 但有竞争力。

有混响集上 BaME 在音素、整体相似度与说话人相似度上最好，PESQ 与可懂度略低于 CleanMel，论文归因于混响下退化相位不可靠。频谱可视化显示判别式有严重失真，离散方法在中高频缺失，Metis 类虽听感好但可能改变原声学特征，BaME 保留目标结构更好，但原文也提醒退化本身词错率较低与 Whisper 训练数据多样有关，不能只看词错率。

下表以 EARS 两套各 886 对为条件，同时报告去噪与去混响，避免只看 DNS 合成集的偏差。

| Ids | Models | Type | EARS-WHAM_v2 (Denoising) | EARS-WHAM_v2 (Denoising) | EARS-WHAM_v2 (Denoising) | EARS-WHAM_v2 (Denoising) | EARS-WHAM_v2 (Denoising) | EARS-Reverb_v2 (Dereverberation) | EARS-Reverb_v2 (Dereverberation) | EARS-Reverb_v2 (Dereverberation) | EARS-Reverb_v2 (Dereverberation) | EARS-Reverb_v2 (Dereverberation) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ids | Models | Type | PESQ↑ | eSTOI↑ | WER(%)↓ | DiMOS↑ | SCOREQ↑ | PESQ↑ | eSTOI↑ | WER (in %)↓ | DiMOS↑ | SCOREQ↑ |
| 1 | Degraded | - | 1.243 | 0.640 | 4.666 | 2.468 | 2.108 | 1.321 | 0.584 | 1.950 | 3.021 | 3.116 |
| 2 | TFGridNet | D | 2.343 | 0.815 | 10.643 | 3.834 | 3.607 | 1.654 | 0.690 | 1.937 | 3.370 | 3.363 |
| 3 | BSRNN | D | 2.360 | 0.822 | 8.529 | 3.768 | 3.429 | 1.993 | 0.772 | 4.713 | 3.616 | 3.278 |
| 4 | StoRM | G | 1.926 | 0.774 | 14.350 | 4.030 | 3.328 | 2.371 | 0.846 | 1.995 | 4.055 | 3.379 |
| 5 | VoiceFixer | G | 1.588 | 0.642 | 16.000 | 3.411 | 2.827 | 1.561 | 0.655 | 5.940 | 3.495 | 2.771 |
| 6 | CleanMel | G | 2.531 | 0.818 | 6.357 | 4.297 | 3.908 | 2.697 | 0.851 | 1.122 | 4.281 | 3.591 |
| 7 | FlowSE | G | 1.884 | 0.754 | 16.659 | 4.063 | 3.518 | 1.335 | 0.560 | 4.034 | 2.981 | 2.941 |
| 8 | SenSE | G | 2.150 | 0.768 | 12.535 | 4.190 | 4.050 | 2.251 | 0.798 | 2.473 | 4.388 | 3.907 |
| 9 | StuPASE | G | 2.073 | 0.777 | 7.057 | 4.331 | 4.295 | 1.954 | 0.760 | 3.024 | 4.407 | 4.123 |
| 10 | LLaSE-G1 | G | 1.291 | 0.581 | 17.334 | 3.893 | 3.353 | 1.172 | 0.492 | 11.363 | 3.809 | 3.248 |
| 11 | Metis | G | 1.286 | 0.669 | 12.987 | 4.559 | 4.523 | 1.275 | 0.672 | 4.413 | 4.530 | 4.488 |
| 12 | GenSE | G | 1.360 | 0.513 | 47.035 | 4.021 | 3.006 | 1.217 | 0.430 | 44.277 | 3.549 | 2.361 |
| 13 | UniSE | G | 1.659 | 0.816 | 21.793 | 4.401 | 4.240 | 1.603 | 0.732 | 7.912 | 4.240 | 4.222 |
| 14 | PASE | G | 2.200 | 0.816 | 4.761 | 4.260 | 3.980 | 1.514 | 0.635 | 3.167 | 3.391 | 3.276 |
| 15 | UniPASE | G | 2.406 | 0.846 | 3.153 | 4.249 | 4.164 | 1.878 | 0.730 | 1.568 | 4.221 | 4.204 |
| 16 | BaME (Pro.) | G | 2.673 | 0.847 | 6.272 | 4.354 | 4.325 | 2.807 | 0.869 | 1.227 | 4.502 | 4.322 |

上表同时列出去噪的 PESQ、可懂度、词错率、DiMOS、SCOREQ 与去混响的对应五项。从这两套结果看，BaME 在两套上 PESQ 与 eSTOI 都是所列可运行基线中最高，去混响优势更明显，说明声学保真在不同失真下稳定；非侵入式保持竞争力但略低于 Metis，符合保真优先的折中。限制有三：部分基线无权重未能列入，不能视为全量排序；词错率用伪标签或特定识别器，与真实转写有偏差。

GSR 与 URGENT 的通用集上 BaME 侵入式最好或前二、非侵入式次优，URGENT 前三多为判别或混合范式，说明纯生成在复杂场景下保证可靠恢复仍难，BaME 与前三仍有侵入式差距。主观上绝对偏好与相似偏好均显著偏向 BaME，即使 Metis 客观感知更高，听众仍更选 BaME，说明客观预测器与人工评价不完全一致，但该结论只在所选 20 trial 与 22 名听众条件下成立。

### 哪些设计真正带来了提升，代价是什么

消融默认在 DNS 无混响与有混响平均上、8 步采样下进行，先看主干与轨迹的比较问题是：在相同数据预测或速度预测下，轻量 SaT 能否超过 331M 的 DiT，以及流匹配是否优于薛定谔桥。

| Ids | Loss | Backbone | Traj. | N | PESQ↑ | eSTOI↑ | LPS↑ | SBS↑ | SpkSim↑ | DNSMOS↑ | UTMOS↑ | WER↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ids | Loss | Backbone | Traj. | N | PESQ↑ | eSTOI↑ | LPS↑ | SBS↑ | SpkSim↑ | OVRL | UTMOS↑ | (in %) |
| 1 | V | DiT | FM | - | 2.357 | 0.804 | 0.883 | 0.881 | 0.844 | 3.376 | 3.860 | 13.486 |
| 2 | D | DiT | FM | - | 2.448 | 0.815 | 0.896 | 0.891 | 0.849 | 3.390 | 3.847 | 11.615 |
| 3 | D | SaT | FM | 25 | 2.487 | 0.824 | 0.907 | 0.893 | 0.854 | 3.391 | 3.857 | 9.242 |
| 4 | D | Variant1 | FM | 25 | 2.424 | 0.810 | 0.891 | 0.881 | 0.833 | 3.390 | 3.797 | 10.937 |
| 5 | D | Variant2 | FM | 25 | 2.412 | 0.814 | 0.893 | 0.879 | 0.793 | 3.389 | 3.773 | 10.912 |
| 6 | D | Variant3 | FM | 25 | 2.411 | 0.812 | 0.894 | 0.881 | 0.810 | 3.361 | 3.782 | 11.404 |
| 7 | D | Variant4 | FM | 25 | 2.074 | 0.754 | 0.826 | 0.830 | 0.759 | 3.362 | 3.353 | 18.496 |
| 8 | D | SaT | Sch-VP | 25 | 2.240 | 0.775 | 0.870 | 0.859 | 0.765 | 3.356 | 3.407 | 11.665 |
| 9 | D | SaT | Sch-VE | 25 | 2.293 | 0.778 | 0.875 | 0.862 | 0.761 | 3.365 | 3.538 | 10.962 |

上表比较了速度与数据预测、DiT 与 SaT 及其 4 个变体、流匹配与两种桥调度。结果显示数据预测优于速度预测，尤其在保真类指标上；SaT 以约 2.9% 参数与约 66.6% 计算量超过 DiT，说明分组子带建模有效；去掉滤波分支、用双向循环单元同时做时间与子带建模、或换成声码器用的卷积块都会变差，其中卷积块在抑制型任务上最差，频谱可视化也显示细节丢失；流匹配优于两种桥调度，说明在梅尔域简单线性路径已够，源分布是否用退化梅尔不如结构设计重要。该结论只在 8 步、无质量切换、仅噪声加混响训练的消融配置下成立。

语义特征的比较问题是：去噪 WavLM 带来的提升是否值得其参数与计算，以及轻量 SubNet 能否替代。

| Ids | #Params. | MACs | Semantic | PESQ↑ | eSTOI↑ | UTMOS↑ | WER↓ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ids | (M) | (Giga/s) | Extractor | PESQ↑ | eSTOI↑ | UTMOS↑ | (in %) |
| 1 | 15.45 | 58.72 | ✗ | 2.487 | 0.824 | 3.857 | 9.242 |
| 2 | 332.38 | 73.43 | DeWavLM | 2.630 | 0.838 | 3.968 | 4.269 |
| 3 | 27.14(↓91.83%) | 63.52(↓13.50%) | SubNet | 2.520 | 0.830 | 3.871 | 8.538 |

上表对比无语义、完整去噪 WavLM 与轻量 SubNet 三档，计入语义提取器、8 步 SaT 与声码器的总开销。结果表明加去噪语义后词错率大幅下降，感知分数也升，证明语义对缓解幻觉有用；SubNet 把参数降低约 91.83%、计算降低约 13.50%，仍优于无语义，但与完整模型有差距，说明有限预算下语义提取仍难，默认保留大模型，这是效率的主要代价。

单步对齐的比较问题是：感知域与保真域是否缺一不可，以及感知 backbone 是否敏感。

| Ids | Fidelity | Perceptual | PESQ↑ | eSTOI↑ | LPS↑ | SBS↑ | SpkSim↑ | DNSMOS↑ | UTMOS↑ | DiMOS↑ | WVMOS↑ | SCOREQ↑ | WER (in %)↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ids | Domain | SSL | PESQ↑ | eSTOI↑ | LPS↑ | SBS↑ | SpkSim↑ | OVRL | UTMOS↑ | DiMOS↑ | WVMOS↑ | SCOREQ↑ | WER (in %)↓ |
| 1 | ✗ | ✗ | 3.321 | 0.947 | 0.976 | 0.955 | 0.939 | 3.354 | 4.098 | 4.588 | 3.803 | 4.341 | 2.008 |
| 2 | ✗ | WavLM-Large | 3.378 | 0.949 | 0.978 | 0.959 | 0.948 | 3.390 | 4.190 | 4.664 | 3.983 | 4.577 | 1.833 |
| 3 | ✓ | ✗ | 3.429 | 0.950 | 0.978 | 0.960 | 0.958 | 3.378 | 4.091 | 4.576 | 3.870 | 4.453 | 1.683 |
| 4 | ✓ | WavLM-Large | 3.430 | 0.951 | 0.979 | 0.960 | 0.957 | 3.387 | 4.119 | 4.603 | 3.933 | 4.501 | 1.607 |
| 5 | ✓ | Wav2vec 2.0-Large | 3.422 | 0.952 | 0.978 | 0.960 | 0.957 | 3.387 | 4.117 | 4.590 | 3.927 | 4.492 | 1.482 |
| 6 | ✓ | HuBERT-Large | 3.426 | 0.952 | 0.978 | 0.960 | 0.957 | 3.386 | 4.108 | 4.585 | 3.913 | 4.485 | 1.683 |

上表是在无混响集、默认用质量切换下，对比无微调、只感知、只保真与双域加 3 种自监督模型的单步结果。结果表明直接针对起始时刻微调已能提升标准单步；只加感知对非侵入式提升最大但会引入频谱伪影，加保真后伪影减轻而感知略回落，双域最均衡；换感知模型差异不大。限制是该表只覆盖无混响，有混响的对应表显示趋势相同但绝对分数更低，且权重与步数固定，换场景需重调。

### 结论在什么边界内成立，有哪些未解决

论文明确承认没有金标准能同时准确反映保真与感知，现有客观指标只是代理，主观也只覆盖所选样本与听众，因此所有最优声明都应理解为在所用指标与数据划分下的相对结果，而非跨场景的绝对保证。表示上作者也不主张梅尔最优，只是证明结构化传统表示仍是有竞争力的可靠选择，未来仍需寻找更适合前端任务的表示。

从证据看还有三处边界。第一，相位策略的效果依赖场景：纯噪声用退化相位好，混响下需切换，切换又依赖评价器的选择，不同评价器对退化相位的偏好不同，整体虽稳健但替换率差异大，换评价器或阈值可能改变结果。第二，效率依赖单步与轻量声码，但总参数仍大，主因是去噪 WavLM，换 SubNet 能大减参数但掉点，资源受限时需重新权衡。第三，通用增强上与挑战前三的侵入式差距提示纯生成路线在复杂失真下仍需优化，不能把在 DNS 与 EARS 上的保真优势直接推广到任意真实场景。

复现时也要注意数据过滤与重采样：训练用感知分数取前 25%、排除重叠说话人、评测重采样到 16 kHz，任一环节不同都会改变基线可比性。

### 复现第一步做什么，需要多少预算

复现应先按论文管线搭通 3 段：100 带梅尔提取与标准化、25 子带 SaT 的流匹配训练、DegVoC 声码器的相位感知重建，再做单步对齐微调。SaT 默认 256 通道、6 个双路径块、注意力与前馈隐层 256、4 头，AdaN-SOLA 秩 8，主体约 11.2M 参数；声码器 24 子带、256 通道、12 块，约 5.8M 参数；加上去噪 WavLM 后总量显著增大。训练在单张 A100 上标准流匹配 batch 8、学习率 1e-4、AdamW、1,000,000 步，指数滑动平均衰减 0.999；单步微调 batch 4、学习率 1e-5、60,000 步，损失权重幅度 40、梅尔 40、全向实虚部 40、感知 25。

推理预算上论文在 Intel Xeon Platinum 8336C 与 A100 上测实时率，BaME 因单步在 CPU 上实时率约 0.85、约 1.18 倍实时，GPU 约 40.78 倍实时，优于部分判别式，但该速度含声码与质量切换的额外前向，换评价器会改变额外计算。论文正文给出了多个基线代码链接与所用权重来源，音频样例与代码链接在原文中有记载，此处仅转述论文提到的链接存在，不对其当前可访问性做断言，实际运行前需自行核对环境与权重版本。

建议先用 DNS 两套小集验证 8 步与单步的趋势，再跑 EARS 两套验证去噪与去混响是否同向，最后再跑 GSR 或 URGENT 通用集，避免直接在通用集上调参。记录每次的采样步数、相位选择替换率与所用评价器，否则无法判断提升来自模型还是切换策略。

### 什么时候值得尝试 BaME，还缺哪项验证

当任务同时要求内容正确、音色细节保留与听感自然，且能接受一个大语义模型加轻量生成主干的成本时，值得尝试 BaME 的思路：用分组子带降低梅尔建模难度，用退化相位加质量切换提高重建上限，用双域单步微调把步数压到一步。第一步应复现梅尔分组与数据预测的消融，确认轻量主干在自有数据上仍有效，再验证退化相位在自有混响条件下的替换率，避免直接照搬 SCOREQ 切换。

还缺的验证主要是更贴近部署的评估：更大规模真实混响与编解码损伤下的幻觉率统计、不同语种与采样率下的稳定性、以及把语义大模型蒸馏或替换后的完整效率重测。在这些补齐前，不宜把论文在特定基准与指标上的领先表述为通用最优，而应视为在保真优先的折中下，一个结构化表示加单步对齐的可行方案。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.22628v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
