---
title: "Efficient Streaming Audio-Visual Target Speaker Extraction for Real-World Acoustic Scenes"
date: 2026-10-27
draft: false
tags: [目标说话人提取, 对比学习, 音视频, 基准测试, 数据集]
categories: [论文速递]
description: "论文针对固定双人、无混响突变噪声的评测与重型因果模型难以部署的问题，构建同时变化人数、远近场、混响和噪声并配真实录音的 RealSSA 基准，并提出单次编解码完成多尺度时频建模的 Falcon，其编码器空间对比损失在推理零代价下抑制近场泄漏，在多集上达到最优分离质量并大幅降低参数与延迟。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.32749"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在真实声场景中实时提取目标说话人：RealSSA 基准与单遍分离方法 Falcon"
paper_digest_original_title: "Efficient Streaming Audio-Visual Target Speaker Extraction for Real-World Acoustic Scenes"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.32749v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.32749v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.32749v1.pdf"
paper_digest_primary_task: "目标说话人提取"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "对比学习"
paper_digest_score: 8.2
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对固定双人、无混响突变噪声的评测与重型因果模型难以部署的问题，构建同时变化人数、远近场、混响和噪声并配真实录音的 RealSSA 基准，并提出单次编解码完成多尺度时频建模的 Falcon，其编码器空间对比损失在推理零代价下抑制近场泄漏，在多集上达到最优分离质量并大幅降低参数与延迟。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wendi Sang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kai Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yifan Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianqiang Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaolin Hu"}]
paper_digest_abstract_sha256: "bd76cb7de13e12525c9a9bd9a50fe21437fedb79fc42bde304369f84021faf6e"
paper_digest_sidecars: {"citation.bib":{"sha256":"ab262057b0211892174c22e998968da24f0d7bf9f15cee9f1f44ab59f936e502","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32749/citation.bib"},"citation.json":{"sha256":"b6edb6607cb40006b6406882ee18bbd42adf9df70f9c87b1f0351c006cddd876","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32749/citation.json"},"citation.ris":{"sha256":"be312a79c1d723851359dcbf7452b23ec357c04f5294f7ce80435e6c4c99fe9b","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32749/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"227a305c32808729ca5fee83e005bcf8aa09d47923f6fda51e46932f3b047c5b","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32749/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "7f7c9d24335e1150987dae3b32676fc309930e4b1afcf53f70fb3fdde5eabe7d"
paper_digest_api_reader_plan_sha256: "de8bca78030d85f8035dffd1981857604b0cfff7435f594caa627e83c30eae63"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d23daf21437b6af6ddf537da2d7445f2e4d58821a819e0c9c1c1394751e963bb"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "dde0ab171c8fb9ae22aa8edcc794d1fd276954873343f9680b7daf2cb7e4f22e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c66bebbdba1e55026babb4f990a504d06a9a4d7663f289268ffa7aed7046b0fa"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a06fb6423c0d99402dbe5b7eb1b98c24259ca134c2a0f74c150ce64633370108"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在真实声场景中实时提取目标说话人：RealSSA 基准与单遍分离方法 Falcon

> 英文题目：*[Efficient Streaming Audio-Visual Target Speaker Extraction for Real-World Acoustic Scenes](https://arxiv.org/abs/2610.32749v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation) → [语音分离](/audio-paper-digest-blog/papers/?concept=task.speech-separation) → [目标说话人提取](/audio-paper-digest-blog/papers/?concept=task.target-speaker)
- **研究方法**：[对比学习](/audio-paper-digest-blog/papers/?concept=method.contrastive)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Wendi Sang：机构信息未能在本次解析中与作者逐人可靠绑定
- Kai Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yifan Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianqiang Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaolin Hu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

流式音视频目标说话人提取（audio-visual target speaker extraction，AVTSE）要求根据目标说话人嘴部视频，从混合语音中实时恢复其在麦克风处带混响的语音，难点在于近场多人能量相似、远场混响干扰重、突发噪声多变，而已有两说话人固定评测无法反映这种变化。论文发布真实场景基准（realistic AVTSE benchmark，RealSSA），包含可控仿真子集 RealSSA-Sim 与真实录制评测子集 RealSSA-Real，前者联合改变说话人数、远近场几何、混响与噪声，后者检验仿真训练模型在真实采集下的表现。所提方法 Falcon先将混合语音的短时傅里叶编码特征与嘴部视频特征融合，得到音视频融合特征并送入分离器。分离器采用单次编码器解码器结构，在一次解码遍历中按由粗到细尺度依次完成频率轴建模、时间轴建模与联合时频建模，输出目标语音估计。估计结果再进入音频编码器空间内的说话人对比损失计算，该损失把估计推向干净目标、推离各近场干扰人，且推理时不增加开销。Falcon 在 RealSSA-Sim 上取得 7.7 dB 的尺度不变信噪比提升（scale-invariant signal-to-noise ratio improvement，SI-SNRi），高于因果音视频时频网格网络（audio-visual TF-GridNet，AV-TFGridNet）的 7.6 dB，同时参数量减少 91.9%，计算量约为其 1/20.2，图形处理器推理时延约为其 1/11.1。局限在于当前只用单通道第一路信号，真实集为 54 段共 83 分 55 秒且对比损失依赖仿真才有的干净干扰人波形。

## 🔗 开源与复现资源

- 代码相关资源：<https://cslikai.cn/Falcon/> — 链接可访问（HTTP 200）

- 演示资源：<https://cslikai.cn/Falcon/> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Wespeaker/wespeaker-voxceleb-resnet34-LM> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的聆听问题是什么

输入是单通道混合波形与目标说话人的嘴部视频，视频为 96×96 灰度唇部感兴趣区域、25 帧每秒，音频为 16 kHz 采样。目标是从混合中恢复在麦克风处采集到的目标语音波形，必须保留目标的频谱与谐波结构，同时抑制其他说话人与噪声。输出是估计的目标波形，可直接试听，也可送入识别与说话人相似度评价。

这类任务称为视听目标说话人提取，视觉线索是身份依据。以往常被称作视听语音分离，但论文指出只要以单一路视觉为条件抽取对应说话人，本质就是提取，因此全文统一用提取一词。延迟敏感场景如视频会议与助听设备要求因果处理，即每 1 帧只能用当前与过去信息，不能看未来，这决定了卷积填充、循环方向与注意力掩码都必须单向。

### 已有基准与因果方法卡在哪里

在基准一侧，LRS2-2Mix、LRS3-2Mix 与 VoxCeleb2-2Mix 都固定每混合 2 名近场说话人，混响与背景基本不变，也没有独立真实录音评估。加 WHAM!噪声的变体把信噪比拓到约 -6 到 +3 dB，NTCD-TIMIT 变体把噪声信噪比拓到 -5 到 20 dB，但仍是双人、无混响控制、无突发噪声。于是模型在仿真双人集上的提升，难以说明到了人多、有远近场、有混响与突发声的设备端是否成立。

在模型一侧，AV-TFGridNet、AV-Mossformer2 等强非因果结构按 SwiftNet 协议因果化后仍保留质量，但参数与逐帧计算使边缘端延迟超预算。SwiftNet 等轻量方案重复调用小分离器，用参数换计算，每多一次循环就多一份逐帧计算。训练常用尺度不变信噪比，只惩罚与干净目标的偏差，不显式推开近场说话人，近场人多时泄漏随之加重。下表对比了各基准在说话人配置与声学控制上的覆盖差异。

### 论文把耦合的两个缺口拆成什么任务

第一个缺口是数据缺口，需要同时变化说话人数、空间几何、混响、持续噪声与突发噪声，并有真实录音检验仿真训练的模型。第二个缺口是模型缺口，需要在单次前向中完成多尺度分离以降低计算，同时在训练端显式抑制近场泄漏而不增加推理代价。

**混合波形 × 目标语音：** 混合波形是麦克风处目标语音、近场干扰、远场干扰与环境噪声叠加并经过房间混响后的单通道信号，目标语音是其中与给定嘴部视频对应的那一路成分；二者搭配的意义在于提取任务不是盲分离出所有声源，而是以视觉为线索只恢复目标语音并抑制其余能量，组合后评价才能用目标参考计算改善量。

为此论文发布 RealSSA 基准，含可控仿真的 RealSSA-Sim 与留出的真实录音 RealSSA-Real，并提出因果方法 Falcon。评价同时看信号分离质量、感知质量、可懂度与目标一致性，以及参数、计算、延迟与内存。

### Falcon 让一个样本走完哪些步骤

先看整体数据流向，下图把混合形成与模型处理画在同一张图里，左侧是声场景混合，右侧是模型从编码到解码的路径，有助于把后文每个模块放回原位。

> **看图路径：** 1. 从左侧混合输入找到目标、近场与远场示例指向混合波形的箭头走向；2. 沿音频编码器到音频块、视频编码器到视频块再相加为融合特征的主路；3. 看分离器到掩码再与原始编码相乘解码为估计目标音频的下半路径

[![原论文 Figure 2：Overall pipeline of Falcon for audio-visual target speaker extraction.](https://arxiv.org/html/2610.32749v1/Overall_Pipeline.png)](https://arxiv.org/html/2610.32749v1/Overall_Pipeline.png)

*论文图 2。原论文 Figure 2:：“Overall pipeline of Falcon for audio-visual target speaker extraction.”。*

图中可见混合波形 x 进入音频编码器得到 A0，经音频块得到 A，目标视频 m 经视频编码器得到 V0，再经视频块上采样到音频帧率得到 V，二者在频率维扩展相加为融合特征 F。F 经分离器得到目标特征 E，再预测掩码 M，与 A0 做复数乘法得到掩蔽特征，经音频解码器逆短时傅里叶变换重建估计波形。音频块与分离器共享同一种多尺度时频结构，但只做一次编解码前向，不沿时间展开循环。视觉主干采用 CTCNet 中的 FRCNN，训练时冻结。

### 音频与视觉如何表示并融合成同一帧率

音频编码器对波形做短时傅里叶变换，窗长 256、跳长 128，在 16 kHz 下对应 16 ms 窗与 8 ms 跳，把实部、虚部与幅度拼成 3 通道，再经 2 维卷积得到 Ce 通道、T 帧、Nf 频点的特征 A0。音频瓶颈把 A0 投影到 C 通道得 A，再经音频块精炼。视觉先得 Cv 维、Tv 帧的特征 V0，经因果长短期记忆聚合时序并上采样到音频帧率得 C×T 的 V。

**音频编码器 × 视频编码器：** 音频编码器把波形经短时傅里叶变换得到实部、虚部和幅度三通道再卷积，输出时频特征，视频编码器把嘴部视频经冻结的视觉主干得到视觉特征；二者分工是分别给出声音的时频结构和说话人身份的时间线索，搭配后在音频帧率上相加融合，组合才让后级分离器知道在众多声源中保留哪一个。

融合时把 V 沿频率维扩展后与精炼音频特征相加，得到 C×T×Nf 的 F。视频分支有固定算法前视 120 ms，音频跳长 8 ms，这决定了后级下采样深度不能无限加，否则音画对齐的前视预算会被打破。

### 单遍多尺度分离器如何一次走完四个尺度

先看分离器的版图，编码器逐级下采样、瓶颈形成全局上下文、解码器逐级回升并在每级做时频精炼，单次遍历即覆盖 4 个尺度，这正是替代多次调用小模块的关键。

> **看图路径：** 1. 从上排四个编码器层看时间频率分辨率如何逐级减半收缩；2. 看每级跳连经全局上下文注入模块再与解码器上采样特征汇合的位置；3. 看最底部解码输出与残差分支相加得到目标特征的出口走向

[![原论文 Figure 3：Single-Pass Multi-Scale Separator. \\phi denotes the upsampling operation.](https://arxiv.org/html/2610.32749v1/separator.svg)](https://arxiv.org/html/2610.32749v1/separator.svg)

*论文图 3。原论文 Figure 3:：“Single-Pass Multi-Scale Separator. \phi denotes the upsampling operation.”。*

图中上排 4 个黄色编码器层把分辨率逐级减半，中间蓝色全局上下文注入模块把瓶颈上下文送入每级跳连，下排紫色精炼块在解码端逐级恢复细节，最底部输出与左侧残差分支相加得到目标特征。这种一次编解码走完多尺度的安排，避免了重复调用小分离器的逐帧开销。

**分离器 × 掩码：** 分离器对融合特征做多尺度时频建模，输出目标说话人特征，掩码是由该特征预测的复数时频权重；分工是分离器负责区分目标与干扰的结构，掩码负责逐点加权原始编码特征，搭配后经复数乘法与逆变换重建波形，组合把判别信息落实为可听的波形恢复。

**近场干扰 × 远场干扰：** 近场干扰指距麦克风 3 米以内的干扰说话人，直达声强、包络与目标相近，远场干扰指 3 米以外的多名干扰说话人之和，经衰减与混响后能量较弱；分工在于近场是残留泄漏的主要来源而远场已低于重建误差底，搭配后论文只把近场送入对比损失的负样本集，组合避免了对无效负样本浪费约束。

### 每级的时频精炼与全局注入具体做什么

要看清单级精炼块内部的 3 段顺序与注意力掩码，先说明这张图把频率循环、时间循环与 2 维注意力的连接画了出来，读图时按从左到右的立方体与箭头跟踪数据变形。

> **看图路径：** 1. 先看左侧输入立方体经频率维双向循环再经时间维单向循环的先后顺序；2. 看右侧虚线框内查询键值经掩码与 Softmax 加权再与残差相加的通路；3. 对比底部残差线如何绕过中间三级直接加到最右侧输出上

[![原论文 Figure 4：Time-Frequency Refinement Block.](https://arxiv.org/html/2610.32749v1/TFRB.svg)](https://arxiv.org/html/2610.32749v1/TFRB.svg)

*论文图 4。原论文 Figure 4:：“Time-Frequency Refinement Block.”。*

图中左侧绿色立方体是当前分辨率的输入特征，经频率维双向循环重排后再经时间维单向循环，中间橙色块标出时间处理，右侧虚线框内由 3 个 1×1 卷积生成查询键值，经掩码与 Softmax 加权后与残差相加输出全局上下文，这种先局部后全局的顺序正是单级精炼的计算逻辑。每级都被帧局部层归一化包裹，该归一化只在通道维计算均值方差，与时间无关故无需缓存。

\[\mathcal{R}_{l}(\mathbf{X})=\mathcal{A}_{l}^{\text{2D}}\left(\mathcal{T}_{l}\left(\mathcal{F}_{l}^{\text{rnn}}(\mathbf{X})\right)\right),\]

上式说明精炼是 3 级级联，先沿频率建模谐波与共振峰结构，再沿时间建模延续与切换，最后在展平的时频面上做全局依赖。注入模块把 G 上采样到跳连分辨率，用门控强调或抑制跳连频带，再加全局偏置，使每级跳连都带有场景级上下文。

\[\tilde{\mathbf{S}}_{l}=\mathcal{I}_{l}(\mathbf{S}_{l},\mathbf{G})=\phi_{\text{loc}}(\mathbf{S}_{l})\odot\sigma\!\left(\phi_{\text{gate}}(\mathbf{G})\right)+\phi_{\text{glb}}(\mathbf{G}),\]

上式中门控项来自全局上下文，局部项来自当前跳连，二者逐点相乘加偏置，保留细结构的同时注入粗上下文。解码公式还多一项直接加回原始跳连，防止门控塌缩时梯度与频谱参考丢失。

### 只在训练时生效的对比损失如何推开近场人

标准重建损失是估计与目标之间负的尺度不变信噪比，不区分泄漏来自谁。新增损失复用同一音频编码器，把掩蔽后估计送入编码器得查询，把干净目标与每个近场干扰分别送入同一编码器得正负参考，参考路径停止梯度，梯度只经查询更新编码器。远场干扰不作负样本，因为距离衰减与晚期混响已使其残留低于重建误差底。随后经频率平均、时间自适应池化与投影得到单位范数的说话人向量。

**重建损失 × 编码器空间说话人对比损失：** 重建损失是估计与干净目标之间的负尺度不变信噪比，只拉近估计与目标，编码器空间说话人对比损失在同一音频编码器特征上把估计拉向目标并推离每个近场干扰；搭配理由是前者保真但不显式区分相近说话人，后者补上判别性约束，组合后训练时联合优化而推理时对比分支丢弃，不增加计算。

\[\mathcal{L}_{\text{spk}}=\bigl(1-\cos(\mathbf{q},\mathbf{p})\bigr)+\sum_{k=1}^{K}\frac{\exp(\tau\,s_{k})}{\sum_{j=1}^{K}\exp(\tau\,s_{j})}\,\operatorname{ReLU}(s_{k}-m),\]

上式第一项拉近查询与正样本的余弦，第二项对每个负样本超过 0.5 边距的部分按 softmax 权重惩罚，温度系数在训练中从 0 线性退火到 1。初期均匀加权让嵌入空间先稳定，后期聚焦难负样本。最终目标是重建损失加权重 1.0 的对比损失，对比分支推理时丢弃。

该损失可迁移到其他音频编码器主干，论文在 SwiftNet-12 与 Dolphin 上也验证了增益，说明它是与分离器结构无关的正则信号。

### RealSSA-Sim 如何同时变化声学条件

仿真集分 4 种场景，小会议室、中型室内、大型公共与户外，房间尺寸、混响、近场与远场人数距离、环境噪声信干比与突发事件数都按场景独立采样。近场指 3 米以内，远场为其外，该阈值近似室内临界距离。目标来自 LRS3 以保证音画同步，干扰来自 LibriSpeech，持续噪声来自 WHAM!，语义环境与突发事件来自 Hive 并按场景分配标签。目标响度归一到 -23 LUFS，混合峰值限幅到 -1 dBFS，单通道 16 kHz。训练、验证、测试约 100826、9133、9169 条，共约 153 小时，平均每混合 2.5 名近场干扰。

下图展示训练元数据的实际分布，可见说话人数、场景比例、信干比与混响的覆盖不是单轴变化。

> **看图路径：** 1. 对比左上说话人总数直方图在 2 到 6 与 12 到 20 两段的分布高度差异；2. 看右上四种场景比例是否接近均衡分布；3. 看左下近场与远场信干比区间与右下混响时间四个峰的位置

[![原论文 Figure 6：RealSSA-Sim distribution statistics.](https://arxiv.org/html/2610.32749v1/srav_distribution_placeholder.svg)](https://arxiv.org/html/2610.32749v1/srav_distribution_placeholder.svg)

*论文图 6。原论文 Figure 6:：“RealSSA-Sim distribution statistics. (a) Total number of speakers per mixture, including the target and all interferers.”。*

图中左上显示总数在 2 到 6 与 12 到 20 两段分别成峰，右上四场景接近各占 1/4，左下近场与远场信干比各占一段连续区间，右下混响呈四峰，户外峰紧贴 0.05 秒附近，大公共峰铺到 1.0 到 2.0 秒。真实集 RealSSA-Real 用单部手机在自习室、教室、网咔、台球厅、商场、超市与昼夜街道共八环境录制 54 段约 83 分 55 秒，10 人参与，仅用于评估，从不训练。

### 用什么指标与硬件条件比较方法

仿真集有干净参考，报告相对混合的尺度不变信噪比改善与信号失真比改善，单位 dB，越大越好。真实集无孤立目标波形，用无参考感知指标 DNSMOS 与 NISQA 估计听感，用 Mega-ASR 转写计算词错率，用 WeSpeaker 的 ResNet34 说话人编码器计算提取语音与同目标独立注册语音的余弦相似度乘 100。词错率越低越好，相似度越高越好。

效率在 2 秒、16 kHz 音频配 50 帧嘴部视频、batch 为 1 的条件下测参数、乘加数、CPU 与 GPU 前向时间与内存，GPU 为 RTX 3090，CPU 为 Xeon Gold 6226R 单线程，warmup 后取 50 次中值。流式前视方面视觉缓冲 3 帧对应 120 ms，音频窗 16 ms、跳 8 ms，输出按 8 ms 推进。作者资源当前可用，代码与演示页已公开，第三方说话人 checkpoint 仅证明论文提及该链接。

### 分离质量与真实听感在什么条件下成立

比较的问题是相同划分、相同预处理、相同优化器与学习率调度下，因果方法在 4 个仿真集与真实集上的分离质量与感知一致性差异。指标方向为改善量越高越好，词错率越低越好，相似度越高越好。下段先说明基准覆盖差异有助于理解结果适用范围。

| Benchmark | NF speakers | FF speakers | Sudden noise | Real-recorded eval |
| --- | --- | --- | --- | --- |
| NTCD-TIMIT+noise [2017] | 2 | ✗ | ✗ | ✗ |
| LRS3+WHAM! [2023] | 2 | ✗ | ✗ | ✗ |
| RealSSA (ours) | 2–6 | ✓ | ✓ | ✓ |

上段基准表说明只有 RealSSA 同时覆盖多人、远场、混响控制、环境与突发噪声及真实录音评估，其余基准固定 2 人且无真实录音。下表为原文表 4 的完整呈现，比较词错率与目标说话人相似度，条件与单位沿用原文。

| Method | RealSSA-Sim | RealSSA-Sim | RealSSA-Real | RealSSA-Real |
| --- | --- | --- | --- | --- |
| Method | WER (%) ↓ | Similarity ↑ | WER (%) ↓ | Similarity ↑ |
| AV-Sepformer [2023] | 32.64 | 38.69 | 34.61 | 38.25 |
| AV-TF-GridNet [2023] | 27.31 | 40.44 | 34.95 | 39.88 |
| RTFSNet-12 [2024] | 31.91 | 36.51 | 35.56 | 35.78 |
| CTCNet [2024b] | 34.44 | 37.08 | 38.81 | 35.33 |
| AV-Mossformer2 [2025] | 32.44 | 37.34 | 32.00 | 36.42 |
| Swift-Net-12 [2025] | 28.59 | 41.79 | 33.72 | 40.04 |
| Dolphin [2026a] | 49.48 | 24.98 | 39.06 | 35.95 |
| Ground truth | 11.83 | 64.69 | – | – |
| Falcon (Ours) | 25.47 | 43.05 | 32.74 | 42.23 |

主结果方面，Falcon 在 4 个仿真集上均为最高，RealSSA-Sim 上 7.7 dB 对 AV-TF-GridNet 的 7.6 dB，VoxCeleb2 上领先 Swift-Net-12 达 1.1 dB。真实集上 Falcon 的 DNSMOS 为 3.276，与 Swift-Net-12 持平，超过 AV-TF-GridNet 的 3.030 与 Dolphin 的 2.960。词错率上仿真集 Falcon 为 25.47%，比 AV-TF-GridNet 低 1.84 个百分点，真实集为 32.74% 排第二，落后 AV-Mossformer2 的 32.00% 约 0.74 个百分点。说话人相似度两集均为最高，分别为 43.05 与 42.23，超过 Swift-Net-12 约 1.26 与 2.19 点。

这些结论成立的条件是仿真训练与测试同分布或经 RealSSA-Sim 联合变化训练后测真实集，LRS2 与 LRS3 基线引自 SwiftNet 原文而非本轮重训，跨表比较需注意训练轮次差异，真实集无孤立目标波形故无真值词错率可比。

### 轻量化的代价换来了多少计算与延迟收益

比较的问题是在保持分离质量的同时，参数、乘加数、延迟与内存是否同步下降。测量条件统一为同一 2 秒输入配 50 帧口部图像与同一硬件协议，数值越低越好。下段先给出效率完整原表的比较口径。

| Method | Params (M) ↓ | MACs (G) ↓ | Latency (ms) ↓ | Latency (ms) ↓ | Memory (MB) ↓ | Memory (MB) ↓ |
| --- | --- | --- | --- | --- | --- | --- |
| Method | Params (M) ↓ | MACs (G) ↓ | CPU | GPU | RAM | GPU Inf. |
| AV-TF-GridNet [2023] | 6.2 | 213.8 | 5646.3 | 567.8 | 136.3 | 1015.8 |
| AV-Mossformer2 [2025] | 56.7 | 224.2 | 16670.7 | 114.9 | 330.9 | 539.8 |
| Swift-Net-12 [2025] | 0.5 | 45.3 | 4163.8 | 172.1 | 482.3 | 411.7 |
| Dolphin [2026a] | 5.6 | 18.1 | 2411.0 | 87.9 | 560.2 | 390.3 |
| Falcon (Ours) | 0.5 | 10.6 | 1361.2 | 51.3 | 125.3 | 364.7 |

上表为原文表 5 的完整呈现，覆盖参数量、乘加数、中央处理器与图形处理器延迟、内存占用，单位沿用原文。Falcon 与 Swift-Net-12 同为 0.5 M 参数，但计算与延迟显著更低，乘加数从 45.3 G 降至 10.6 G，降幅 76.6%，图形处理器延迟从 172.1 ms 降至 51.3 ms，降幅 70.2%。相对 AV-TF-GridNet，参数少 91.9%，乘加数少 95.0%，图形处理器延迟低 91.0%，即摘要所述约 20.2 倍计算与 11.1 倍延迟。内存也为最低，中央处理器内存 125.3 MB，图形处理器峰值 364.7 MB。

跨训练数据的泛化显示，用 RealSSA-Sim 训练比用 VoxCeleb2 训练在真实集上五架构 DNSMOS 均提升，Falcon 从 2.878 到 3.276，NISQA 从 2.431 到 3.615，支持联合变化的声学覆盖有助于真实泛化，但仍是感知预测而非人工听音，视觉前视 120 ms 与音频跳长 8 ms 共同决定流式对齐下采样上限。

| Method | VoxCeleb2 | VoxCeleb2 | RealSSA-Sim (Ours) | RealSSA-Sim (Ours) |
| --- | --- | --- | --- | --- |
| Method | NISQA | DNSMOS | NISQA | DNSMOS |
| AV-TF-GridNet | 2.495 | 2.757 | 2.413 | 3.030 |
| AV-Mossformer2 | 1.995 | 2.715 | 2.256 | 2.912 |
| Swift-Net-12 | 2.481 | 3.064 | 3.484 | 3.276 |
| Dolphin | 1.593 | 2.608 | 2.590 | 2.960 |
| Falcon (Ours) | 2.431 | 2.878 | 3.615 | 3.276 |

该表比较同一架构换用不同训练数据后在真实录制集上的感知质量，指标为 NISQA 与 DNSMOS，数值越高越好。Falcon 在 RealSSA-Sim 训练下达到 3.615 与 3.276，高于 VoxCeleb2 训练下的 2.431 与 2.878，完整原表还同时给出其余 4 个基线在两种训练条件下的对应读数，说明联合覆盖人数、远近场、混响与突发噪声有助于真实泛化。但两项指标均为非侵入式预测分，不能替代人工听音，也只反映本次真实集的采集设备与环境组成，不能直接推广到其他部署场景。

### 深度与对比损失的增益来自哪里

要回答的问题是多尺度深度与对比损失是否各自带来可复现的改善。下采样从一层加到 3 层时 SI-SNRi 提高 0.6 dB，说明更深编码器捕获更广谱时间上下文而跳连逐步恢复细节，3 层也是流式对齐允许的最大深度。循环单元对比中长短期记忆达 7.7 dB，超门控循环单元 0.4 dB，代价是多 0.05 M 参数与 1.27 G 计算。

去掉对比损失 Falcon 从 7.7 dB 掉到 7.3 dB，加到 SwiftNet-12 上从 7.3 dB 到 7.5 dB，加到 Dolphin 上从 6.7 dB 到 7.0 dB，三架构一致增益支持其架构无关性。温度调度上从 0 退火到 1 得 7.7 dB，优于固定 0、固定 1 与退火到 2，说明先均匀稳定再聚焦难样本更稳。输出形式上复数掩码比实数掩码高 0.4 dB，比直接预测实虚部高 0.6 dB。重叠率分组中最高重叠组仍有 7.73 dB，与最低组差 0.22 dB。缺视觉时随机丢帧比连续块丢失更鲁棒，75% 随机丢失仍有 5.97 dB 而块丢失掉到 0.01 dB，全丢时掉到负值，说明当前系统依赖视觉确定身份。

| Scene | Environmental noise labels | Sudden-noise labels |
| --- | --- | --- |
| Small meeting | air conditioning, fan, clock, typing, printer, keyboard, tick, hiss | writing, clicking, crumple, rustle, knock, telephone, door, drawer, squeak, paper |
| Large public | footsteps, shuffle, speech, babble, crowd | sliding door, siren, child speech, crying, roll, alarm, buzzer, announcement |
| Outdoor | wind, rain, traffic, stream, city ambience | car, bus, truck, motorcycle, car passing, skidding, reversing beep, horn, police/ambulance/fire siren, dog, bird, cricket, jackhammer, hammer, power tool |
| All scenes (shared) | – | key jangling, coin dropping, slam, bang, thump, crash, squeal |

上表列出 Hive 标签按场景的语义分配，说明突发与环境噪声不是均匀采样，而是按室内机械声、行人交通声等规则固定到对应场景，这是仿真集区别于只混 WHAM!之处，也限定了结论只在该标签分配下成立。

### 哪些范围尚未验证或存在冲突

分离器与对比损失都只在单通道上验证，附录仿真了四元线阵但正文实验只用第一通道，多通道扩展留待未来。真实集约 84 分钟、10 人、八环境，能揭示跨架构趋势但规模有限，需后续扩充。对比损失依赖仿真中干净的每路近场波形做负样本，对无标注真实录音如何适配尚未解决。

逐场景拆分显示难度不随混响单调，户外近无混响最易，小会议室因近场拥挤最难，人数增多时改善量先升后降，聚合分数会抹平拥挤房间的差距。视觉全缺、口部偏移或跟错说话人的敏感性尚未分别评估，不能把部分遮挡的结论推广到跟踪错误。效率数字是整段输入摊薄后的平均，前视、窗口对齐与逐跳调度的端到端延迟需用流式实现另测。

### 复现第一步做什么与需要什么资源

先按附录固定随机种子 42 与分划分偏移重跑生成脚本，用 gpuRIR、响度归一与 Hive 标签元数据生成与论文一致的 100826 条训练集，单卡约 48 GPU 小时主要耗在卷积上，再用 2 秒片段、冻结的 FRCNN 视觉主干、AdamW 与验证损失 15 轮不降减半、30 轮早停训练 Falcon。评估时仿真集算改善量，真实集算 DNSMOS、NISQA、Mega-ASR 词错率与 WeSpeaker 相似度，效率按同一 2 秒输入与 50 帧视频在 RTX 3090 与单线程 CPU 上测中值。

关键超参数为隐藏通道 64、对比权重 1.0、边距 0.5、温度 0 到 1 线性退火。信息条件是训练需每路近场干净波形与音画同步目标视频，测试需目标嘴部视频与独立注册语音。代码与演示页作者已公开可直接运行，第三方说话人模型链接仅为论文引用的外部权重，需另行下载。

### 什么时候值得尝试与还需补什么验证

当部署场景是单通道、因果、低延迟，且干扰含多近场人、远场人、混响与突发声时值得尝试 Falcon 与 RealSSA-Sim 联合训练，预期在同等参数下获得更低计算与延迟并保持目标一致性。若场景是固定双人、干净混响或允许非因果，则本文的相对优势不再成立，应回看原双人基准。

还需补的验证包括更大规模真实录音的人工听音、跟错人与口部偏移下的身份鲁棒性、无标注真实数据的对比损失适配，以及流式实现下的逐跳延迟与端到端对齐测量。补齐后才能把仿真改善量真正等同为设备端体验。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.32749v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
