---
title: "Learning to Watermark Speech Synthesis Against Model-Driven Reconstruction"
date: 2026-10-11
draft: false
tags: [音频水印, 生成模型, 语音, 鲁棒性, 文本到语音]
categories: [论文速递]
description: "论文针对发布语音会被神经编解码、声码器和增强模型重建而抹掉水印的问题，提出在生成全程参与嵌入并在波形与频谱两路按比特选可靠恢复的 Thrive 框架，在两种自回归合成器上无攻击时比特准确率达 0.999，重建攻击下平均约 87.6%，代价是需要两阶段训练与双专家恢复结构。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.04235"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在模型重建攻击下为自回归语音合成加多比特水印"
paper_digest_original_title: "Learning to Watermark Speech Synthesis Against Model-Driven Reconstruction"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.04235v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.04235v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.04235v1.pdf"
paper_digest_primary_task: "音频水印"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.watermarking","label":"音频水印"},{"facet":"method","id":"method.generative","label":"生成模型"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_method: "生成模型"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对发布语音会被神经编解码、声码器和增强模型重建而抹掉水印的问题，提出在生成全程参与嵌入并在波形与频谱两路按比特选可靠恢复的 Thrive 框架，在两种自回归合成器上无攻击时比特准确率达 0.999，重建攻击下平均约 87.6%，代价是需要两阶段训练与双专家恢复结构。"
paper_digest_authors: [{"affiliations":["East China Normal University, Shanghai, China"],"name":"Weizhi Liu"},{"affiliations":["Huaqiao University, Xiamen, China"],"name":"Yue Li"},{"affiliations":["Huaqiao University, Xiamen, China"],"name":"Hui Tian"},{"affiliations":["East China Normal University, Shanghai, China"],"name":"Zhaoxia Yin"}]
paper_digest_abstract_sha256: "107ae4e4946917686e5dea77c2b5b6061a9dcd9a2f6e35365175f956aac31b55"
paper_digest_sidecars: {"citation.bib":{"sha256":"0075934c683b5f4e69c50abe1a3a89e9eaaedf8b25641117437dfab62366add2","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04235/citation.bib"},"citation.json":{"sha256":"ea7b329f82aac5fe79026761df90770f72e707ab5e07d72036ac81eb57d6e3f3","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04235/citation.json"},"citation.ris":{"sha256":"714843babeec66e0d71a1df6eb3ef3414ec7430ab1cc9116c255302f2574a6fe","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04235/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"ee55a496f3df056795b8de2b15216b5077aa413db85e182644be66190066640b","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04235/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b2f0bb06be9a211d6d6597c0f1c2330c406c2aabadf669a9dfe75b48b608a871"
paper_digest_api_reader_plan_sha256: "a441f022396a0228ac35be2eb54699668e243f2df03c2435ad667d2d0dda8c78"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "75659340368c2cbf994317d96e6a855969e8d955cdc735d05cae208609dd36e6"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "d4bb616d74a9fbf1e07eb299b863838b873718175f236d61b8135bd2a10c1348"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8b4995462ce526e25e32933d72974823ae7439a4fe4f61c5e76e27d301117954"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2abcfac40472e254f20cae13fa0b6958839a50a56dab7bb3570b7dc906633b37"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在模型重建攻击下为自回归语音合成加多比特水印

> 英文题目：*[Learning to Watermark Speech Synthesis Against Model-Driven Reconstruction](https://arxiv.org/abs/2610.04235v1)*

> 标签：#音频水印 | #生成模型 | #语音 | #鲁棒性 | #文本到语音
>
> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Weizhi Liu：East China Normal University, Shanghai, China
- Yue Li：Huaqiao University, Xiamen, China
- Hui Tian：Huaqiao University, Xiamen, China
- Zhaoxia Yin：East China Normal University, Shanghai, China

## 📌 核心摘要

现代语音合成服务需要把多比特标识直接嵌入合成语音，以验证语音是否来自受保护模型并区分是哪个注册用户请求的，难点是语音发布后会经过神经编解码器再生、声码器重合成和增强重建等学习型变换，这些变换保留语音可用性但对水印的破坏方式不同。论文提出的 Thrive 包含 Rise 和 Care 两个部分，Rise 把同一水印同时写入中间表示并延续到后续生成层，Care 用波形专家和频谱专家分别恢复再按比特可靠性二选一。训练先学习嵌入与恢复能力再冻结专家只校准选择器，避免可靠性估计随专家漂移。与已有生成式水印把水印固定在某个阶段或模型参数不同，该设计让水印参与整个生成并在恢复端适应重建。在 LJSpeech 上两种骨干的重建攻击平均恢复准确率达到 87.6%，常规失真下万人候选溯源仍保持 93.2% 以上。结论适用于论文列出的编解码器、声码器和增强模型组合，连续多级重建下准确率会降到 0.716-0.820，自适应对抗重建尚未验证。原文披露训练使用单张 NVIDIA RTX 4090，但未给出训练时长、推理延迟与部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决什么服务场景问题

论文面对的是文本转语音作为多人注册服务部署的情形。同一个合成模型要为很多用户生成语音，发布后需要回答两件事：这段语音是不是该模型生成的，以及当时是哪个注册用户请求的。为此要在合成时把分配给请求者的多比特标识直接嵌入语音，发布后即使经过传播和编辑仍能恢复。难点在于发布后的变换越来越多由学习模型完成，例如神经编解码再生成、增强重建和声码器重合成，它们在保留语音可用的同时，对水印的破坏方式各不相同。

论文把攻击者故意利用这类重建来破坏恢复但保留内容和听感的行为称为模型驱动的重建攻击。防御方只能控制生成与恢复，无法控制发布后会遇到哪种或哪几种重建的串联组合，因此只针对单一重建机制调优的鲁棒性会变脆。

**来源验证 × 源头归属：** 来源验证是判断一段处理后语音是否来自被保护模型，属于二值检测，用准确率与 1% 误报率下真阳性率衡量；源头归属是在 10 到 10000 个注册用户候选中按汉明距离最近检索请求者，属于多类检索，用归属准确率衡量；前者要求水印可检出，后者要求多比特序列足够可区分，难度随候选集增大和重建失真而上升。

### 已有水印路线把水印固定在哪里

按论文梳理，已有路线可分为后处理嵌入和生成式嵌入。后处理方法在时频或隐表示中找稳定载体，例如 WavMark、AudioSeal、离散隐表示或频域与隐空间结合的方法，思路仍是寻找加工后稳定的载体。生成式方法多针对 2 阶段合成管线，把水印绑在某个合成阶段或发生器部件，例如在生成初段注入后靠后续合成传播，或把水印功能写进声码器参数。近期自回归 discrete-token 采样转向方法多只支持零比特检测，即只回答有无水印，不支持多比特身份。

论文认为这些路线都把水印建立在固定的表示、部件或参数上，依赖产生的声学结构在恢复时仍可观测，而异构重建会对同一结构保留、重排或丢弃，因此固定载体是否能跨重建保持可靠仍未解决。下面的范式对比图把这种差异画了出来，读图时重点看介入点与恢复方式的变化。

从左上到右下依次看 4 种已有范式与 Thrive 在输入、嵌入位置和提取器上的连接差异，有助于理解为何固定载体在多样重建下面临风险。

> **看图路径：** 1. 先看左四格 a 到 d 的水印介入位置有何不同；2. 再看中间列常见失真与三类重建攻击的图标；3. 最后看右列传统单提取器与 Thrive 双专家加选择的差异

[![原论文 Figure 1：Comparison of generative speech watermarking paradigms.](https://arxiv.org/html/2610.04235v1/Thrive_over.png)](https://arxiv.org/html/2610.04235v1/Thrive_over.png)

*论文图 1。原论文 Figure 1:：“Comparison of generative speech watermarking paradigms.”。*

左图用 4 个小格对比已有范式：初始噪声注入、参数注入、参数集成都是在某一状态或部件一次性建立水印，而 Thrive 同时在表示残差和后续生成层中持续参与；中列列出常见失真与编解码、声码器、增强 3 类重建；右列对比传统单提取器验证与 Thrive 双专家按比特选择后同时做验证与归属。这说明论文不是换一个更强的固定载体，而是改变参与和恢复的方式。

### 输入输出与威胁模型如何形式化

论文把一次带水印生成记为文本提示、参考语音和 l 比特水印共同决定加水印语音，同一模型在推理时换水印无需重训。发布后语音经过传播处理得到受损版本，恢复机制再从受损语音估计水印，要求估计等于原水印。恢复出的水印同时服务于来源验证和源头归属，还要求加水印语音与关闭水印的对应生成之间保持保真度。防御方部署模型并在公开渠道出现语音时做验证与归属。

攻击者只能拿到发布语音，可自选重建模型与配置，目标是让恢复出错同时保留内容与感知质量。常规噪声、滤波、重采样和有损压缩被视为水印应能容忍的正常条件，而神经编解码再生成、增强重建和声码器重合成被视为模型驱动的重建攻击。

\[\hat{w}=\mathcal{D}(\tilde{s}_{w})=\mathcal{D}\bigl(\mathcal{P}(\mathcal{G}(x_{c},x_{s},w))\bigr).\]

该式把全链路写成恢复对传播后的生成结果求估计，括号内是传播对生成结果的作用，生成又依赖文本、参考语音与水印。教学上可以把括号由内向外读：先按用户水印合成，再经未知传播，最后做恢复，任何一层的信息丢失都会传到最外层。

为检验固定载体假设，论文构造受控谱时图案并做配对重建，前后都经过同一重建再相减，以隔离图案本身的重建后响应。左面板比较 Mel 残差的保留与变形，右面板比较同一重建图案在 FACodec 与 WavLM 等表示空间响应的差异。先看左侧不同图案行在 3 类攻击列的明暗，再看右侧同一点在不同空间的散开程度。

> **看图路径：** 1. 对比左图五行受控图案在编解码、声码器、增强三列的残差亮度；2. 看右图横轴图案增益与纵轴偏离分量下三类颜色点的分布；3. 注意同一图案在不同攻击和不同表示下位置的变化

[![原论文 Figure 2：Controlled spectro-temporal pattern survival under reconstruction attacks.](https://arxiv.org/html/2610.04235v1/Ratk.png)](https://arxiv.org/html/2610.04235v1/Ratk.png)

*论文图 2。原论文 Figure 2:：“Controlled spectro-temporal pattern survival under reconstruction attacks.”。*

左表五行分别为低中高频 Mel 涟漪与 5 Hz、10 Hz 包络调制，四列为注入图案、编解码、声码器与增强，格内数字为相关系数，声码器与增强列明显更亮而编解码列较暗；右图横轴为图案增益、纵轴为偏离分量，不同颜色代表未攻击、编解码、声码器与增强，不同形状代表 5 种图案。可见同一图案可被保留、重塑或抑制，同一重建结果在不同观察空间看起来也不同，因此水印存活同时依赖嵌入结构、重建机制与观察表示，没有单一载体或单一观察空间能统一刻画鲁棒性。

### Thrive 的整体流程是什么

Thrive 包含嵌入侧的 Rise 与恢复侧的 Care。Rise 把水印同步注入演进中的中间表示，并让同一水印继续调制后续生成层；Care 用互补的波形专家与频谱专家分别预测，再按比特可靠性二选一。训练上先学嵌入与恢复能力，再冻结它们只校准选择器，使可靠性估计反映稳定的恢复行为。实现上在两种自回归主干上实例化：离散编解码 token 的 Qwen3-TTS 0.6B 与连续声学表示的 Dots.tts 2B，只动合成解码器，不改文本与参考语音处理，原输入输出接口不变，推理时换水印无需重训。下面的总览图把生成、嵌入细节与提取的双路结构放在一张图中，适合先走主路径再看分支。

先沿顶部文本与参考语音到加水印语音的主箭头看 Rise 的两条路径位置，再看底部受攻击语音如何分两路进入波形与频谱专家并经选择器输出，有助于把嵌入多样化与恢复自适应的分工对应起来。

> **看图路径：** 1. 沿上半文本提示与参考语音到加水印语音的主路径看 Rise 位置；2. 看中部波形专家与频谱专家如何汇入融合头与选择器；3. 对照底部图例区分卷积、归一化与门控时间分支模块

[![原论文 Figure 3：Overview of Thrive. Rise synchronizes watermark embedding across representation and generation by…](https://arxiv.org/html/2610.04235v1/Thrive_pipe.png)](https://arxiv.org/html/2610.04235v1/Thrive_pipe.png)

*论文图 3。原论文 Figure 3:：“Overview of Thrive. Rise synchronizes watermark embedding across representation and generation by injecting a representation residual while modulating selected generation layers…”。*

上半显示离散 token 预测与连续隐合成两条生成形态共用同一解码器处的 Rise，中间框内表示注入路径输出水印残差、生成集成路径输出调制向量，右侧标注保真与残差约束；下半显示受攻击语音同时进入波形专家与频谱专家，各自输出分段头与全局头，再经融合头与选择器得到提取水印。该图把两路嵌入与两路恢复的对称性表达得很直接。

**Thrive × Rise × Care：** Thrive 是整体框架名，Rise 负责嵌入端让同一水印同时写入中间表示并持续调制后续生成层，Care 负责恢复端同时看波形和频谱两路预测再按比特选更可靠的一路；前者解决单一注入点易被重建丢弃的问题，后者解决同一残留信号在不同观察表示下可见性不同的问题，两者组合才覆盖嵌入多样化和恢复自适应。

### Rise 如何让水印持续参与生成

Rise 先把 l 比特水印与预定义密钥异或并映射为正负 1 形式，再经两个可学习投影分别送往表示空间与秩空间。表示注入路径把投影后的水印沿时间广播，经由内容自适应的融合网络调制后以残差加到第 j 阶段中间表示上，融合网络由两层逐点卷积加一层深度时间卷积与 SiLU 组成，调制幅度被限制在区间内，强度系数控制注入量。生成集成路径把同一水印映射为秩调制向量，对选中生成层的低秩分支做逐秩调制，调制向量在时间上共享，基变换冻结而低秩映射可训。两处 Qwen3-TTS 选在后上采样输出，Dots.tts 选在解码器上采样输出并在聚合前加入，低秩更新覆盖数十个模块，秩与缩放按原文设置取 64。

\[\widetilde{\mathbf{h}}_{j}=\mathbf{h}_{j}+\Delta\mathbf{h}_{j}^{w},\qquad\Delta\mathbf{h}_{j}^{w}=\lambda_{j}\left\{\mathbf{1}+\rho\tanh\!\left(\mathcal{F}_{j}\!\left[\operatorname{LayerNorm}(\mathbf{h}_{j})\,\|\,\mathbf{w}^{r}\right]\right)\right\}\odot\mathbf{w}^{r},\]

该式前半是加残差得到加水印表示，后半是残差等于强度乘以内容调制括号再逐元乘水印投影。符号上 h 为该阶段语音中间表示，w 为投影后水印，F 为融合网络，括号内 1 加有界调制保证注入不偏离太远。代价是每个选中阶段都要过一次归一化与小卷积，训练与推理都增加少量计算。

\[\widetilde{\mathcal{W}}_{m}(\mathbf{h}_{m})=\mathcal{W}_{m}(\mathbf{h}_{m})+\frac{\alpha}{r}\mathcal{B}_{m}\!\left[\mathbf{w}^{g}\odot\mathcal{A}_{m}(\mathbf{h}_{m})\right],\]

该式是冻结基变换加低秩旁路，旁路中先经 A 映射再逐元乘水印调制向量再经 B 映射，按缩放累加。符号上 W 为冻结主变换，A 与 B 为可训低秩映射，w 为共享调制向量。由于 A、B 与投影可训而主干冻结，换水印时只需换调制向量，无需重训主干。

**表示注入路径 × 生成集成路径：** 表示注入路径是把水印投影后以残差加到解码器中间特征上，直接写信息；生成集成路径是把同一水印调制低秩分支的秩向量，让后续层计算继续受水印影响；前者提供显式载体，后者防止后续生成把水印稀释，只有同步使用才能在不改上游文本与参考语音处理的前提下让水印参与全程。

### Care 如何从两路表示中逐比特挑选

Care 的波形专家直接处理波形，经步长前端与 4 个不同空洞率的深度可分离卷积块，融合多层特征后分出分段头与全局头；频谱专家先把波形转 80 维对数 Mel 谱，经 2 维卷积前端与频率注意力，再经 3 种核尺寸的门控时间分支，同样输出分段与全局比特对数。全局对数作为候选预测，分段对数提供时间支撑。能力学习时还有融合头，用波形特征作查询、频谱特征作键值做交叉注意力，得到频谱校正再按逐比特门控加到波形预测上作为主恢复输出。

推理时最终判决不用融合头，而是由校准后的选择器直接在两专家间逐比特选择。每个专家比特对的可靠性描述子包括全局置信、全局与局部符号一致率、分段强度中值与时间稳定性，经共享打分网络加专家偏置得到正确性分数，再结合比特级分数差与整句平均偏好做阈值判决，阈值后取符号得到比特。

\[\widehat{z}_{i}=\begin{cases}z_{i}^{\mathrm{spec}},&d_{i}+\lambda_{g}\bar{d}>0,\\ z_{i}^{\mathrm{wav}},&d_{i}+\lambda_{g}\bar{d}\leq 0,\end{cases}\qquad\widehat{w}_{i}=\mathbb{I}\!\left[\widehat{z}_{i}\geq 0\right],\]

该式是最终逐比特选择规则：若频谱分数减波形分数再加整句偏好大于零则选频谱对数，否则选波形对数，再经指示函数得到 0 或 1 比特。符号上 z 为全局对数，d 为分数差，上横线 d 为整句平均，lambda 控制整句偏好的权重。这种设计同时保留比特特异性与整句表示偏好，代价是需要分段对数与打分网络的前向计算。

**波形专家 × 频谱专家 × 按比特可靠性选择器：** 波形专家直接对时域波形卷积提取时间特征，频谱专家先转对数 Mel 谱再做时频卷积与频维注意力，两者各给出整句级与分段级比特对数；按比特可靠性选择器从全局置信、全局与局部分歧、分段强度和时间一致性估计每比特谁更可信，再逐比特二选一，因为不同攻击和不同比特下两路的相对可靠性会翻转，全局置信不够用。

### 两阶段训练与攻击模拟如何组织

论文把训练分为能力学习与可靠性校准。能力学习冻结预训练生成器，联合优化 Rise、融合头与两个恢复专家，前 19 轮用干净加水印语音训练恢复，从第 20 轮起用攻击模拟器采样变换后再恢复，采样中重建代理占 85%，常规增强占 15%，不可微操作前向用变换波形、反向用直通梯度。恢复目标同时监督融合预测与两专家预测，保真侧用 Mel 谱与多尺度短时傅里叶差异约束加水印与无水印生成的接近程度，再对表示残差平方均值正则。

可靠性校准冻结 Rise、融合头与专家，只用 10 轮校准共享打分器与专家偏置，目标一是让分数对准逐比特正确性，二是在两专家分歧比特上让选择偏向正确一方，分歧集为空时第二项消失。优化用 AdamW，低秩路径与其它模块用不同学习率，含预热与余弦退火，单张 RTX 4090 完成。

\[\mathcal{L}_{\mathrm{cap}}=\mathcal{L}_{\mathrm{wm}}+\lambda_{\mathrm{mel}}\mathcal{L}_{\mathrm{mel}}(s_{w},s)+\lambda_{\mathrm{stft}}\mathcal{L}_{\mathrm{stft}}(s_{w},s)+\lambda_{\mathrm{res}}\mathcal{L}_{\mathrm{res}}.\]

该式是能力学习总目标：水印恢复损失加 Mel 保真、短时傅里叶保真与残差正则三项加权。符号上 sw 为加水印语音，s 为对应无水印生成，J 为选中注入阶段集合。教学上可理解为既要比特可恢复，又要听感与谱结构不偏离太多，同时不让注入残差过大。原文未报告各 lambda 的具体数值与消融，只给出结构，因此复现时需按附录与代码调参，不能从名称猜最优权重。

**能力学习 × 可靠性校准：** 能力学习是先冻结预训练合成器主体，联合优化 Rise、融合头和两个恢复专家，让嵌入与恢复先具备基本能力；可靠性校准是再冻结嵌入与专家，只训练共享打分网络与专家偏置，让可靠性分数对准已固定的专家行为；分开两步是为了避免选择器在专家还在变化时学到不稳定的可靠性估计。

### 数据主干基线与指标条件是什么

实验用 LJSpeech 单说话人英文作训练与域内评估，用 LibriTTS 多说话人英文与 AISHELL-3 多说话人中文作跨说话人与跨语言域外评估，生成统一到 24 kHz 评估。主干为 Qwen3-TTS 离散 token 与 Dots.tts 连续表示，均用官方 checkpoint 与克隆管线，主干冻结。基线包括后处理的 AudioSeal、WavMark、TBWM 与生成式的 Groot、RIWF、HFGw，水印长度从 16 到 100 比特不等，比较时需注意比特数不同带来的容量差异。指标用比特准确率衡量恢复，STOI、PESQ、SSIM、MCD 衡量配对保真，DNSMOS 与 NISQA 衡量无参考感知质量，FAD 衡量分布级生成质量，来源验证还报告 1% 误报率下真阳性率。鲁棒评估分信号失真、传统压缩、神经编解码再生成、声码器重合成与增强重建 5 类，多数模型重建在训练模拟器中未见，仅 EnCodec 6 kbps 与 Opus 16 kbps 为训练与评估共享的压缩配置。

### 无攻击时保真与恢复能否同时成立

要回答的比较问题是：在相同文本与参考语音下，加水印生成相对无水印生成的偏离有多大，以及干净恢复是否接近满分。公平条件是固定评测语句跨方法共享内容，指标方向为 STOI、PESQ、SSIM 越高越好，MCD、FAD 越低越好，准确率与真阳性率越高越好。下表是原文的保真与干净恢复总表，包含后处理与生成式基线，行列较多，重点看最后两列恢复与前几列保真的权衡。

| Method (bps) | Objective Fidelity | Objective Fidelity | Objective Fidelity | Objective Fidelity | Perceptual Quality | Perceptual Quality | FAD | FAD | Recovery | Recovery |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method (bps) | STOI ↑ | PESQ ↑ | SSIM ↑ | MCD ↓ | DNSMOS ↑ | NISQA ↑ | VGGish ↓ | CLAP ↓ | ACC ↑ | TPR ↑ |
| LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) | LJSpeech (In-Distribution Dataset) |
| Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking |
| AudioSeal (16) | 0.998 ± 0.001 | 4.425 ± 0.073 | 0.978 ± 0.007 | 0.818 ± 0.160 | 3.202 ± 0.211 | 3.875 ± 0.625 | 0.077 | 0.004 | 1.000 | 1.000 |
| WavMark (32) | 1.000 ± 0.001 | 4.495 ± 0.084 | 0.973 ± 0.022 | 1.278 ± 0.455 | 3.132 ± 0.239 | 3.708 ± 0.723 | 0.435 | 0.013 | 1.000 | 1.000 |
| TBWM (100) | 0.986 ± 0.007 | 3.929 ± 0.214 | 0.937 ± 0.013 | 1.539 ± 0.138 | 3.213 ± 0.208 | 3.678 ± 0.621 | 0.855 | 0.019 | 1.000 | 1.000 |
| Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking |
| Groot (100) | 0.958 ± 0.022 | 3.340 ± 0.315 | 0.907 ± 0.023 | 1.285 ± 0.192 | 3.277 ± 0.214 | 3.906 ± 0.624 | 0.058 | 0.002 | 0.995 | 1.000 |
| RIWF (16) | 0.957 ± 0.018 | 2.414 ± 0.317 | 0.814 ± 0.047 | 6.310 ± 1.503 | 3.135 ± 0.315 | 3.098 ± 0.651 | 3.501 | 0.102 | 0.993 | 1.000 |
| HFGw (20) | 0.943 ± 0.017 | 2.672 ± 0.275 | 0.935 ± 0.015 | 0.907 ± 0.068 | 2.877 ± 0.367 | 2.212 ± 0.556 | 1.790 | 0.186 | 0.989 | 1.000 |
| Ours [Qwen3-TTS 0.6B] (16) | 0.958 ± 0.073 | 3.565 ± 0.768 | 0.850 ± 0.087 | 1.754 ± 0.136 | 2.638 ± 0.429 | 2.807 ± 1.165 | 1.355 | 0.086 | 0.999 | 1.000 |
| Ours [Dots.tts 2B] (16) | 0.999 ± 0.003 | 4.210 ± 0.259 | 0.980 ± 0.004 | 0.777 ± 0.103 | 3.066 ± 0.317 | 4.094 ± 0.548 | 0.604 | 0.037 | 0.999 | 1.000 |
| LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) | LibriTTS (OOD Dataset) |
| Ours [Qwen3-TTS] (16) | 0.969 ± 0.050 | 3.747 ± 0.566 | 0.858 ± 0.075 | 1.781 ± 0.157 | 2.271 ± 0.431 | 3.159 ± 1.007 | 1.539 | 0.089 | 0.999 | 1.000 |
| Ours [Dots.tts] (16) | 0.955 ± 0.197 | 4.045 ± 0.479 | 0.980 ± 0.004 | 0.739 ± 0.135 | 2.617 ± 0.286 | 3.827 ± 0.812 | 0.412 | 0.052 | 0.999 | 0.999 |
| AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) | AISHELL-3 (OOD Dataset) |
| Ours [Qwen3-TTS] (16) | 0.902 ± 0.268 | 3.820 ± 0.439 | 0.874 ± 0.048 | 1.763 ± 0.146 | 2.667 ± 0.353 | 3.291 ± 0.798 | 1.243 | 0.083 | 0.999 | 1.000 |
| Ours [Dots.tts] (16) | 0.887 ± 0.314 | 4.069 ± 0.471 | 0.979 ± 0.004 | 0.764 ± 0.138 | 2.600 ± 0.325 | 3.399 ± 1.045 | 0.551 | 0.067 | 0.999 | 1.000 |

该表显示两种 Thrive 实现干净准确率均为 0.999，真阳性率为 1.000 或 0.999，其中 Dots.tts 的 PESQ 4.210 与 SSIM 0.980 较高，Qwen3-TTS 的 STOI 0.958 但声学偏离较大；在 LibriTTS 与 AISHELL-3 上仍保持 0.999 左右的干净恢复，说明结果不限于训练说话人与语言。限制是后处理基线干净恢复本就满分，干净条件不能证明重建鲁棒性；且不同方法比特数不同，高比特方法在容量上占优，跨行直接比准确率时需考虑容量差异。未胜出项是 Qwen3-TTS 的感知与分布指标弱于部分基线，说明保真在不同主干上并不均匀。

从候选集规模看归属难度，左图为常规失真平均，右图为重建攻击平均，横轴为候选身份数，纵轴为归属准确率，读图时先看随 N 增大的下降斜率再看组内三方法的差距。

> **看图路径：** 1. 对比左右两图随候选数增大柱高的下降速度；2. 对比每组内青色、紫色与深蓝色三根柱子的高低；3. 注意重建攻击下误差线与常规失真下误差线的差异

[![原论文 Figure 4：Source attribution across increasing candidate-set sizes.](https://arxiv.org/html/2610.04235v1/Thrive_Attri.png)](https://arxiv.org/html/2610.04235v1/Thrive_Attri.png)

*论文图 4。原论文 Figure 4:：“Source attribution across increasing candidate-set sizes. Results are averaged over common distortions in (a) and across reconstruction attacks in (b).”。*

左图常规失真下 N 为 10000 时 Qwen 与 Dots 仍有 93.2% 与 95.3%，而 RIWF 掉到 17.7%；右图重建攻击下 N 为 10000 时两者为 39.4% 与 26.6%，RIWF 仅 0.6%。这说明恢复出的 16 比特仍具区分性，但重建使归属明显变难，结论只在原文的最近汉明检索与平均攻击条件下成立，不能推广到自适应攻击或其它检索规则。

### 常见处理与三类重建下验证有多稳

要回答的比较问题是：同一批加水印语音在信号失真、压缩与三族模型重建后，比特准确率与 1% 误报下真阳性率如何变化。公平条件是处理后统一转回 24 kHz 并恢复原始时长再恢复，表项为准确率与真阳性率成对出现。下表是 LJSpeech 上的来源验证总表，行覆盖干净、失真、压缩、编解码再生成、声码器重合成与增强重建，列覆盖后处理与生成式基线及两种 Thrive。

|  | Post-hoc Watermarking | Post-hoc Watermarking | Post-hoc Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking | Generative Watermarking |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | AudioSeal (16) | WavMark (32) | TBWM (100) | Groot (100) | RIWF (16) | HFGw (20) | Ours-Q (16) | Ours-D (16) |
| Clean | 0.999 / 1.000 | 1.000 / 1.000 | 1.000 / 1.000 | 0.995 / 1.000 | 0.993 / 1.000 | 0.989 / 1.000 | 0.999 / 1.000 | 0.999 / 1.000 |
| Signal Distortion | Signal Distortion | Signal Distortion | Signal Distortion | Signal Distortion | Signal Distortion | Signal Distortion | Signal Distortion | Signal Distortion |
| Gau. Noi. | 0.808 / 0.380 | 0.561 / 0.022 | 0.725 / 0.986 | 0.995 / 1.000 | 0.951 / 0.959 | 0.926 / 0.987 | 0.983 / 0.998 | 0.993 / 1.000 |
| Low-pass | 0.978 / 0.995 | 1.000 / 1.000 | 0.993 / 1.000 | 0.985 / 1.000 | 0.525 / 0.004 | 0.914 / 0.976 | 0.999 / 1.000 | 0.999 / 1.000 |
| Echo | 0.969 / 0.987 | 0.859 / 0.971 | 0.947 / 1.000 | 0.986 / 1.000 | 0.593 / 0.016 | 0.983 / 1.000 | 0.958 / 0.973 | 0.962 / 0.979 |
| Resample | 1.000 / 1.000 | 0.998 / 1.000 | 0.900 / 1.000 | 0.992 / 1.000 | 0.741 / 0.176 | 0.799 / 0.625 | 0.999 / 1.000 | 0.999 / 1.000 |
| Quant. | 0.995 / 1.000 | 0.951 / 1.000 | 0.947 / 1.000 | 0.996 / 1.000 | 0.990 / 0.999 | 0.986 / 1.000 | 0.999 / 1.000 | 0.999 / 1.000 |
| Traditional Compression | Traditional Compression | Traditional Compression | Traditional Compression | Traditional Compression | Traditional Compression | Traditional Compression | Traditional Compression | Traditional Compression |
| MP3 | 0.964 / 0.982 | 0.740 / 0.543 | 0.749 / 0.997 | 0.992 / 1.000 | 0.965 / 0.982 | 0.845 / 0.812 | 0.999 / 1.000 | 0.999 / 1.000 |
| Opus | 0.455 / 0.001 | 0.904 / 0.997 | 0.861 / 1.000 | 0.760 / 0.999 | 0.614 / 0.024 | 0.835 / 0.774 | 0.999 / 1.000 | 0.999 / 1.000 |
| Neural Codec Regeneration | Neural Codec Regeneration | Neural Codec Regeneration | Neural Codec Regeneration | Neural Codec Regeneration | Neural Codec Regeneration | Neural Codec Regeneration | Neural Codec Regeneration | Neural Codec Regeneration |
| EnCodec | 0.509 / 0.003 | 0.496 / 0.003 | 0.582 / 0.190 | 0.973 / 1.000 | 0.803 / 0.363 | 0.578 / 0.033 | 0.891 / 0.748 | 0.967 / 0.986 |
| FACodec | 0.507 / 0.003 | 0.523 / 0.007 | 0.553 / 0.073 | 0.749 / 0.997 | 0.634 / 0.034 | 0.581 / 0.035 | 0.788 / 0.309 | 0.842 / 0.524 |
| STCodec | 0.505 / 0.002 | 0.502 / 0.004 | 0.553 / 0.073 | 0.949 / 1.000 | 0.853 / 0.577 | 0.595 / 0.046 | 0.762 / 0.230 | 0.818 / 0.422 |
| HiFiCodec | 0.508 / 0.003 | 0.498 / 0.003 | 0.544 / 0.051 | 0.724 / 0.984 | 0.680 / 0.073 | 0.547 / 0.018 | 0.854 / 0.580 | 0.943 / 0.942 |
| VoiceCraft | 0.505 / 0.002 | 0.490 / 0.002 | 0.551 / 0.068 | 0.980 / 1.000 | 0.605 / 0.020 | 0.480 / 0.004 | 0.796 / 0.338 | 0.837 / 0.504 |
| Vocoder Resynthesis | Vocoder Resynthesis | Vocoder Resynthesis | Vocoder Resynthesis | Vocoder Resynthesis | Vocoder Resynthesis | Vocoder Resynthesis | Vocoder Resynthesis | Vocoder Resynthesis |
| WaveGlow | 0.511 / 0.003 | 0.508 / 0.005 | 0.783 / 1.000 | 0.775 / 1.000 | 0.549 / 0.007 | 0.443 / 0.001 | 0.933 / 0.914 | 0.892 / 0.753 |
| HiFi-GAN | 0.506 / 0.002 | 0.509 / 0.005 | 0.816 / 1.000 | 0.725 / 0.986 | 0.548 / 0.006 | 0.544 / 0.017 | 0.860 / 0.606 | 0.769 / 0.248 |
| BigVGAN | 0.520 / 0.003 | 0.506 / 0.004 | 0.884 / 1.000 | 0.727 / 0.987 | 0.642 / 0.039 | 0.497 / 0.005 | 0.899 / 0.785 | 0.882 / 0.709 |
| Vocos | 0.509 / 0.003 | 0.531 / 0.009 | 0.938 / 1.000 | 0.715 / 0.975 | 0.645 / 0.041 | 0.640 / 0.101 | 0.881 / 0.703 | 0.863 / 0.619 |
| DiffWave | 0.503 / 0.002 | 0.491 / 0.003 | 0.690 / 0.917 | 0.743 / 0.995 | 0.533 / 0.005 | 0.487 / 0.004 | 0.925 / 0.886 | 0.868 / 0.646 |
| PriorGrad | 0.507 / 0.002 | 0.490 / 0.003 | 0.688 / 0.911 | 0.740 / 0.994 | 0.532 / 0.004 | 0.489 / 0.004 | 0.926 / 0.886 | 0.870 / 0.646 |
| WaveFM | 0.527 / 0.004 | 0.469 / 0.001 | 0.929 / 1.000 | 0.687 / 0.906 | 0.755 / 0.210 | 0.590 / 0.043 | 0.920 / 0.868 | 0.965 / 0.983 |
| Enhancement Reconstruction | Enhancement Reconstruction | Enhancement Reconstruction | Enhancement Reconstruction | Enhancement Reconstruction | Enhancement Reconstruction | Enhancement Reconstruction | Enhancement Reconstruction | Enhancement Reconstruction |
| FRCRN | 0.998 / 1.000 | 0.999 / 1.000 | 0.989 / 1.000 | 0.996 / 1.000 | 0.589 / 0.015 | 0.962 / 0.999 | 0.902 / 0.798 | 0.805 / 0.370 |
| Demucs | 1.000 / 1.000 | 1.000 / 1.000 | 0.993 / 1.000 | 0.995 / 1.000 | 0.561 / 0.008 | 0.958 / 0.999 | 0.976 / 0.994 | 0.895 / 0.769 |

读数上 Thrive 在常规处理下接近饱和，在编解码、声码器与增强三族上保持可恢复，但不同攻击间波动大：Dots 在神经编解码再生成上更强，Qwen 在多数声码器与两个增强模型上更强，且不同基线与 Thrive 间存在性能交叉。这正好呼应受控图案分析中载体存活依赖重建机制的发现，说明鲁棒性来自水印与重建的交互而非通用稳定载体。限制是增强重建下后处理与部分生成基线本就很高，Thrive 并非处处最优；真阳性率在部分编解码攻击下下降快于准确率，阈值检测的难度需单独看。

域外两张附表显示同一跨主干模式在 LibriTTS 与 AISHELL-3 上依然成立，平均重建准确率与域内接近，说明说话人与语言切换带来的变化小于切换重建机制的影响。

### 嵌入与恢复的各部分贡献是什么

要回答的比较问题是：拿掉 Rise 的一条路径或 Care 的一路专家与选择器后，干净、编解码平均与声码器平均准确率如何变化。公平条件是在同一 Qwen3-TTS 主干与同一评估下只改消融变体，括号内为相对完整模型的变化。下表是原文的消融表，重点看嵌入消融中 clean 是否崩塌，以及恢复消融中两路的互补。

| Variant | Quality | Quality | Recovery ACC | Recovery ACC | Recovery ACC |
| --- | --- | --- | --- | --- | --- |
| Variant | PESQ ↑ | NISQA ↑ | Clean ↑ | Codec Avg. ↑ | Vocoder Avg. ↑ |
| Full Thrive | 3.565 | 2.807 | 0.999 | 0.818 | 0.906 |
| Embedding Ablation | Embedding Ablation | Embedding Ablation | Embedding Ablation | Embedding Ablation | Embedding Ablation |
| Generation only | 3.755 | 3.313 | 0.999 (0.000) | 0.675 (-0.143) | 0.674 (-0.232) |
| Representation only | 4.643 | 3.477 | 0.489 (-0.510) | – | – |
| Static LoRA | 4.156 | 3.451 | 0.489 (-0.510) | – | – |
| Recovery Ablation | Recovery Ablation | Recovery Ablation | Recovery Ablation | Recovery Ablation | Recovery Ablation |
| Waveform only | 3.814 | 3.276 | 1.000 (+0.001) | 0.657 (-0.161) | 0.771 (-0.135) |
| Spectral only | 3.408 | 3.315 | 0.938 (-0.061) | 0.873 (+0.055) | 0.771 (-0.135) |
| Without Selector | 3.565 | 2.807 | 0.999 (0.000) | 0.780 (-0.038) | 0.844 (-0.062) |

嵌入侧仅保留生成集成仍保持干净 0.999，但编解码与声码器平均分别下降 0.143 与 0.232，而仅保留表示注入或静态低秩则干净掉到 0.489 附近，说明表示注入需与持续生成参与同步才有效。恢复侧单波形在干净上最好，单频谱在编解码平均上反超完整模型 0.055，去掉选择器则编解码与声码器平均分别下降 0.038 与 0.062 而干净不变，支持按比特选择的贡献。限制是消融只在 Qwen 上报告，未给出 Dots 上的对应分解；单频谱在编解码上更强但在干净与声码器上不占优，因此不能把某一表示当作通用最优，组合与选择的意义正在于此。

为看孤立变换之外的串联压力，论文还评估从左向右依次施加的复合攻击，上半为信号处理与压缩组合，下半为模型重建串联，表项仍为准确率与真阳性率。下表为 LJSpeech 上的复合攻击表，读时区分前两类组合与后 3 类多阶段学习重建的不同难度。

|  | GN→\rightarrowEcho | LP→\rightarrowGN | Echo→\rightarrowMP3 | GN→\rightarrowEnCodec | Opus→\rightarrowMP3 |
| --- | --- | --- | --- | --- | --- |
| Qwen3-TTS | 0.897 / 0.776 | 0.972 / 0.991 | 0.953 / 0.964 | 0.903 / 0.802 | 0.997 / 1.000 |
| Dots.tts | 0.941 / 0.934 | 0.984 / 0.998 | 0.956 / 0.969 | 0.928 / 0.897 | 0.999 / 1.000 |
|  | Opus→\rightarrowEnCodec | HiFiCodec→\rightarrowDiffWave | FACodec→\rightarrowBigVGAN | VoiceCraft→\rightarrowHiFiCodec | Vocos→\rightarrowDiffWave |
| Qwen3-TTS | 0.919 / 0.864 | 0.791 / 0.321 | 0.748 / 0.193 | 0.716 / 0.124 | 0.820 / 0.429 |
| Dots.tts | 0.972 / 0.991 | 0.801 / 0.354 | 0.743 / 0.179 | 0.768 / 0.247 | 0.752 / 0.201 |

前半信号与压缩串联下两主干仍保持高恢复，后半多阶段重建串联下准确率降到 0.716 到 0.820 之间但仍明显高于随机，真阳性率下降更快。两主干在不同串联组合下互有胜负，进一步支持鲁棒性取决于生成表示与下游重建的交互。限制是复合条件采样有限，仅覆盖原文列出的码率与组合，未评测针对水印优化的自适应串联，结论不能外推到最坏情况。

### 结论在什么条件下才成立还有何局限

论文直接报告的是：在所列失真、压缩与三族共十余种具体模型及固定参数下，16 比特 Thrive 在两种自回归主干上保持高保真与可观的重建恢复，并在 10000 候选下保留可区分的归属能力。证据支持的解释是嵌入多样化与跨表示选择缓解了单一载体与单一观察的脆弱性，消融的方向一致。但以下边界需明确：训练模拟器未见多数评估用重建模型，仍属非自适应的泛化测试；评估未包含针对该水印系统优化的自适应重建，论文讨论部分也把这列为未来工作。

比特数、阈值、码率与采样率都固定，换更高容量或更强压缩时数字会变。不同主干的优势族不同，总体趋势不能套到每一攻击或每一步。没有测量误判率之外的延迟与成本，不能承诺实时性改善；训练与推理开销、输出帧率与实际延迟是三件不同的事，需分别测量。

### 复现第一步做什么需要哪些细节

复现应先按附录固定主干与管线：Qwen3-TTS 用官方语音克隆管线并只在编解码解码阶段加 Rise，不改 token 序列；Dots.tts 用官方合成管线与 AudioVAE 解码器并在冻结解码器内实例化 Rise，上游连续表示不变，48 kHz 输出重采样到 24 kHz 再评估。表示注入强度取 2 阶段分别为 1e-3 与 5e-4，低秩秩与缩放取 64，调制系数与增益按原文取 0.9 与 2.0，载体投影用正交基初始化，主干冻结只优化水印模块。能力学习 80 轮、前 19 轮干净、20 轮起按 85% 重建代理与 15% 常规增强采样，批量为 2 并用不同学习率与预热退火；校准阶段冻结专家再训 10 轮打分器。

恢复时无需攻击标签、无损参考与真值水印，阈值化后再逆异或得到原比特。来源上本次未发现完成 HTTPS 验证的作者代码模型数据资源，不得声称已公开；代码开源、权重可下载与系统可运行需分开核实。

### 什么时候值得尝试还需要补什么验证

当任务是为自回归语音服务做内容级溯源，需要多比特身份且发布后可能遇到未知编解码、声码器或增强重建时，该框架的值得尝试之处在于它不依赖单一固定载体，而是让水印参与全程并在恢复时按比特选路，原文在离散与连续两种主干上都走通了这 1 流程。初学者复述关键步骤可记为：异或加钥后双投影，一路写表示残差一路调低秩生成，恢复时波形与频谱双专家各给全局与分段证据，校准后的选择器逐比特二选一。

还需补的验证包括：更大候选集与其它检索规则下的归属曲线，针对水印优化的自适应重建压力测试，以及训练资源、推理延迟与听感主观评测的完整成本报告。只有补齐这些，才能判断该方法在实际部署中的真实代价与边界。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.04235v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
