---
title: "PF-D2M: A Pose-free Diffusion Model for Universal Dance-to-Music Generation"
date: 2026-09-27
draft: false
description: "针对单人姿态特征覆盖不了多人与非人类舞者、AIST++ 仅 60 首曲目易过拟合的问题，PF-D2M 用 Synchformer 视频视觉特征加 DiT 扩散模型与两阶段渐进训练，在 AIST++ 客观节拍指标 F1 达 94.3 与 20 人主观听测中领先，但生成仅约 8 秒且缺乏大型客观基准仍待验证。"
tags: ["扩散模型", "多模态学习", "主观评测", "音视频", "音乐生成"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:im26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/im26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/im26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f6980636043aec352867a36eea061b19114a92e730cbf6eeb3e59a9eb9a07c12"
paper_digest_api_reader_plan_sha256: "5e519a470762090901667227af031aa4ab471f19a242c068ae6cef52e7fb72d9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9ace86b723b7d6288ef5f2cf7b5d11c2a43b7c777efda67760cafda8fb2fc176"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "aac4ed934acd9a69d16e143dbf40313bbe3eb6c4a2d7ce4112506b6d55545d53"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0207ade3d10391ca244c2581a80e57ebd4096794e2c09576d7f51ffb6e30775a"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "58d35b8cfbd49feea39fe06fb47a13556bcbaa37f3914106ec68281339a5a27f"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 不用姿态也能对上拍：PF-D2M 以视频视觉特征做通用舞蹈配乐

> 英文题目：*PF-D2M: A Pose-free Diffusion Model for Universal Dance-to-Music Generation*

> 会议身份：`conference:interspeech:2026:conference-paper-id:im26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/im26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/im26_interspeech.pdf)

标签：#扩散模型 #多模态学习 #主观评测 #音视频 #音乐生成

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Jaekwon Im：机构信息未能从会议 PDF 纯文本可靠映射
- Natalia Polouliakh：机构信息未能从会议 PDF 纯文本可靠映射
- Taketo Akama：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

舞蹈到音乐生成需从无声舞蹈视频生成时间对齐的立体声音乐，难点是依赖单人 3D Skinned Multi-Person Linear model（SMPL）或 2D 关键点的已有方法在多人遮挡与 2D 或 3D 非人类舞者下失效，且 AIST++ 仅 60 首曲目导致记忆过拟合与视角单一。该工作提出 Pose-free Diffusion Model for Universal Dance-to-Music Generation（PF-D2M），直接用 Synchformer 视觉编码器特征驱动潜变量扩散变换器（Diffusion Transformer，DiT）生成，并用渐进训练解决数据稀缺：阶段 0 以文本到音频模型 Stable Audio Open 初始化以保留多样音乐先验，阶段 1 在约 500 小时 VGGSound 上学习野外视听同步，阶段 2 在 AIST++ 舞蹈配对加 FMA 与 MoisesDB 纯音乐加 VGGSound 按 2比4比1 混合微调以恢复连贯乐曲结构。输入为 25 fps 舞蹈视频与描述流派乐器情绪的文本提示，输出为 44.1 kHz 立体声音乐。在 AIST++ 未见曲目 mBR0、mMH0、mLO2、mJB5 测试划分上，PF-D2M 第二阶段模型 F1 达到 94.3，超越 LORIS 的 92.5 与 Text-Inv 的 85.5，Beat Hit Score（BHS）达 99.8，同时 20 视频野外主观评测在对齐与质量上全面领先。其适用边界为训练随机裁 7.98 秒片段、评测截 5.12 秒，长时结构、多镜头剪辑与极端视觉条件尚未充分验证。原文未披露训练推理部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/open-mmlab/mmpose> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，学完要能复述什么？

本文解读的对象是舞蹈到音乐生成。输入是一段无声舞蹈视频与一段描述音乐的文本标题，文本例如流派、乐器与情绪；输出是一段与舞蹈时间对齐的双声道音乐。读者学完应能复述三件事：模型如何把视频变成条件特征，渐进训练的两个阶段各自解决什么问题，实验在什么数据划分与指标下比较了谁。

论文的起点是现实短视频创作需求。编舞者与内容创作者希望给一段舞蹈自动配上卡点的原创音乐，而不是把现成音乐做变速拉伸去硬贴舞蹈。以往深度方法多依赖单人人体姿态，例如 SMPL 3 维人体模型特征或 2 维关键点，再生成 MIDI 符号音乐或音频。符号音乐表现力受限，音频生成则需要更细的声学建模。扩散模型近年在高质量音乐生成中被广泛使用，本文也沿这条路线。

需要保留的关键信息是通用性与数据稀缺这对矛盾。通用指要处理多人舞者与非人类舞者，例如 2 维与 3 维动画角色；稀缺指主要训练集 AIST++ 仅提供 60 首独特歌曲，且视频背景与机位简单，直接训练会导致记住训练音乐、在野外复杂光照与视角下失效。后续所有设计都围绕这对矛盾展开。

### 此前路线走到哪里，为何还缺一块？

按同输入、同目标、同监督来对照，舞蹈到音乐主要有 3 条路线。第一条是符号路线，以单人舞蹈序列为条件生成 MIDI 等多乐器符号，优点是结构可控，缺点是原文指出难以表达真实舞曲的表现力与动态。第二条是音频路线，直接生成波形或压缩音频表示，保留细粒度声学信息，近期代表是基于扩散的方法。第 3 条是视频到音频通用路线，例如 MMAudio 等多模态联合训练，用于拟音合成，强调视听同步但不专为舞蹈音乐结构优化。

本文的比较基线都属于可实际运行的音频路线。CDCD 是离散对比扩散的跨模态音乐与图像生成方法，LORIS 是长期节奏视频配乐方法，Text-Inv 是基于编码器文本反演的舞蹈到音乐方法。在客观评测中三者都用官方实现，在主观评测中 LORIS 与 Text-Inv 与 PF-D2M 同台对比。教学例子：可以把符号路线想象为先写谱再演奏，音频路线想象为直接录制成品，而 PF-D2M 属于后者。

缺的一块是条件表示。多数先前方法只提取单人粗粒度节奏特征，多人场景下编舞依据多人整体而非单人，动画角色则根本没有可靠人体姿态，姿态估计还会抖动。另一块是数据，AIST++ 曲目少、背景简单，爬取野外视频又受版权与现场收音质量差、混入非舞蹈片段的困扰。PF-D2M 的改动正好对应这两块：换掉单人姿态条件，换掉单数据集 1 次训练。

### 任务如何形式化，难在哪里？

形式化上，记无声舞蹈视频为 v，维度包含时长 T、帧率、高度、宽度与 RGB 3 通道；记双声道音乐为 a，采样率与时长与视频对齐；记文本标题为 c，描述流派、乐器与情绪。模型要学习由 v 与 c 生成 a。预处理把视频重采样到 25 fps，把音频重采样到 44.1 kHz，训练时随机切成 7.98 秒片段，每帧缩放并中心裁剪到 224×224。

难有两层。表示难在于时间信息不只来自单人骨骼，多人队形变化、镜头切换、动画角色运动都需要进入条件。学习难在于 AIST++ 音乐量小，模型易记住训练曲目而失去生成新音乐的能力，且 AIST++ 机位与背景单一，学到的同步在野外失效。Stage 1 后的观察更具体地暴露了问题：模型能跨流派生成但输出像随视觉突变拼接的短片段，且常带上房间混响等环境特征，而目标是与地点无关的录音室质量音乐。

评价难也值得先说。客观节拍指标把生成音乐与真值音乐比对，但同一舞蹈并没有唯一正确音乐，节奏结构不同也可能与舞蹈对得很好；这些指标也不评价音质与音乐结构。原文因此更倚重主观听测，并明确把开发更合适的客观数据集与指标列为未来工作。

### PF-D2M 沿一个样本走完输入到输出

先沿一个 7.98 秒样本走全程。左侧文本标题例如 EDM with upbeat drums 进入冻结的 T5-base 编码器得到文本嵌入，经交叉注意力进入扩散 Transformer。顶部舞蹈帧序列进入 Synchformer 视觉编码器得到视觉特征，加上可学习位置嵌入并经最近邻插值上采样到与音频潜变量相同的时间维度。音频波形经预训练 VAE 编码器压缩为 64 通道潜变量 z，扩散过程在该潜空间加噪去噪。去噪后的潜变量经 VAE 解码器还原为波形输出。

下段是图前导读，说明阅读顺序与分支汇合位置，引导读者把文字描述与像素结构对应起来看。

> **看图路径：** 1. 先从顶部文本 EDM with upbeat drums 与多人舞蹈帧分别进入 T5-base 编码器与 Synchformer 的双路入口看起；2. 再跟踪视觉支路经位置嵌入与上采样后分叉为通道拼接与时间步加和的两条注入路径；3. 最后查看右侧 24 层 DiT Block 内部 Layer Norm、MHA、Cross-Attn 与 Feedforward 的残差连接顺序

[![原论文 Figure 1：Overview of PF-D2M.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/ef98101445a3/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/ef98101445a3/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of PF-D2M.”。*

上图是 PF-D2M 总体结构，左侧为文本与视频双条件入口，中间为视觉特征的双路注入，右侧虚线框展开 24 层 DiT Block 内部，下方经投影与 VAE 解码器输出波形。可见的关键是视觉特征先经位置嵌入与上采样，再分别经投影后一路与噪声在通道维拼接、一路与时间步嵌入相加后调制每层；文本嵌入则单独经交叉注意力进入；T5-base 编码器与 VAE 解码器旁标有冻结雪花标记；右上角图例区分通道拼接、序列拼接与相加 3 种操作。

回到计算目标，DiT 同时接收 3 类条件。文本嵌入经交叉注意力进入，扩散时间步的正弦嵌入拼接到 DiT 输入前，视觉特征经两条路径进入。训练用速度预测目标，视觉与文本以 10% 概率丢弃以支持无分类器引导，推理用 DPM-Solver++ 跑 100 步、引导尺度 5.0。初始化上，PF-D2M 载入 Stable Audio Open 权重，仅 PF-D2M 新增模块置零，使初始行为除时长与计时条件外与该文本到音频模型一致，从而保留高质量多样音乐生成能力。

### 视觉特征如何变成每帧可用的条件？

视觉支路的动作是连续的。Synchformer 视觉编码器从 224×224 视频帧提取特征，加上可学习位置嵌入，再用最近邻插值上采样到与 z 相同的时间长度。上采样后的特征走两条投影。一条经 1 维卷积投影到与 z 相同的通道维，再与 DiT 输入沿通道轴拼接；另一条经线性层投影到 DiT 隐藏维度，再与时间步正弦嵌入相加，经每层 AdaLN 的帧级缩放与偏置调制除首帧全局特征外的所有帧。原文报告只用拼接会导致收敛慢，因此增加 AdaLN 这条逐层路径。

**姿态特征 × 视觉特征：** 姿态特征指从单个人体估计 SMPL 或 2D 关键点再算节拍的路线，分工是把动作抽象为骨骼运动但会丢掉多人互动、遮挡与非人类角色信息；视觉特征指 Synchformer 视频编码器直接从 RGB 帧提取的时序表征，分工是保留画面中所有运动与场景同步线索；PF-D2M 用后者替代前者的搭配理由是多人编舞依据整体队形而非单人骨骼，且动画角色无可用人体姿态，组合意义是把输入条件从单人骨骼拓宽为通用视频，从而支持多人与非人类舞者。

文本支路相对简单但不可缺。T5-base 编码器参数冻结，只提供语义约束，例如要电子还是嘻哈、要什么乐器与情绪。在 Stage 2 的文本到音乐数据上，视觉特征用可学习空嵌入代替，使模型在无视频时仍能学音乐性。推理时文本与视觉联合引导，缺一不可。教学例子：可以把文本看作选曲方向，把视觉看作卡点时刻表，前者定风格，后者定何时换鼓。

音频支路的压缩值得记住。VAE 把双声道 44.1 kHz 波形压缩为时间降采样 2048 倍的 64 通道潜变量，大幅降低扩散序列长度。DiT 有 24 层，内部依次是层归一化加缩放平移、多头注意力、交叉注意力、前馈网络与残差相加。首帧被当作预置全局特征，不参与 AdaLN 调制，这是复现时易错的细节。

### DiT 内部的注意力与调制各自做什么？

DiT Block 内部按残差结构组织。输入先经层归一化，再由视觉加时间步信号生成缩放与平移参数，接着进入多头自注意力建模音乐自身时序依赖，再与残差相加。之后再经层归一化进入交叉注意力，查询来自音乐潜变量，键值来自文本嵌入，从而注入风格语义。最后经层归一化与前馈网络细化表示，再残差相加输出。右侧另有一路多层感知机把条件映射为缩放平移参数，这是 AdaLN 的实现载体。

**DiT × 自适应层归一化：** DiT 指基于 Transformer 的扩散骨干，分工是迭代去噪生成压缩音频潜变量；自适应层归一化指 AdaLN 按条件逐帧生成缩放与偏置去调制每层特征，分工是把视频时序信号注入每一层；二者搭配的原因是仅在输入通道拼接视觉特征收敛慢，组合意义是通道拼接保留细粒度对齐起点、AdaLN 逐层提供帧级调制，使视觉变化能持续约束音乐生成过程。

**变分自编码器 × 速度预测：** 变分自编码器指 Stable Audio Open 的预训练 VAE，分工是把 44.1 kHz 双声道波形压缩为 64 通道低帧率潜变量 z 并在最后解码回波形；速度预测指 velocity-prediction 扩散训练目标，分工是让 DiT 预测扩散过程的速度向量而非直接预测噪声或干净样本；搭配理由是高采样率波形直接扩散成本过高，组合意义是在压缩潜空间中稳定训练长时音乐生成，同时冻结 T5-base 编码器与 VAE 解码器以保留文本与音频重建能力。

组合起来看，通道拼接让模型在输入层就看到细粒度视觉变化，AdaLN 让该变化在每一层持续起作用，交叉注意力让文本风格不被视觉淹没。这种 3 条件分工是理解收敛与对齐效果的关键。原文未报告各注意力头的梯度路径细节与冻结之外的参数更新范围，只说明新增模块置零初始化与整体训练目标，因此复现时应按官方配置整体训练 DiT 而不自行猜测冻结哪几层。

### 渐进训练三步各自训练什么数据？

训练分 3 步。Stage 0 是文本到音频预训练初始化，直接载入 Stable Audio Open 权重并把新增模块置零，不在本文数据上训练，目的是省去从零学高质量音乐的高昂算力。Stage 1 是视频到音频对齐训练，在 VGGSound 约 500 小时多类别视频上训练，文本标题用 AudioSetCaps 提供的 Qwen-Audio 生成标题，目的是在野外多样场景学视听同步。Stage 2 是舞蹈到音乐微调，在 AIST++ 舞蹈到音乐数据、FMA 与 MoisesDB 文本到音乐数据、VGGSound 视频到音频数据上按 2:4:1 混合采样训练，目的是生成连贯录音室质量舞曲并抑制对 AIST++ 的过拟合。

**视频到音频对齐训练 × 舞蹈到音乐微调：** 视频到音频对齐训练指 Stage 1 在约 500 小时 VGGSound 上学习通用视听同步，分工是获得野外场景泛化与多样同步先验；舞蹈到音乐微调指 Stage 2 在 AIST++ 加 FMA 与 MoisesDB 上按 2:4:1 混合采样训练，分工是把输出收敛为录音室质量、有完整结构的舞曲；搭配理由是 AIST++ 单独训练会记忆训练音乐且不适应复杂背景，组合意义是先学同步再学音乐性，用文本到音乐数据稀释过拟合。

文本标题的构造也有动作。对舞蹈到音乐与文本到音乐数据，用 Qwen2-Audio 按音乐标注提示生成流派、乐器与情绪标签，失败时回退到数据集元数据，再用预设模板随机组合成标题，无有效标签时用通用提示例如一段器乐曲目。这种随机组合提升对不同详略标题的泛化。数据过滤上，MoisesDB 取约 14 小时器乐 stems 求和去人声，FMA 先去掉实验、民谣、旧时代与口语 4 类难伴舞或含歌声的类型，再用归一化频谱滚降低于 0.6 去掉低带宽音频，再用 htdemucs ft 分离人声加 Silero 语音活动检测去掉含歌声样本，最终保留约 191 小时。

优化配置按原文交代。Stage 1 训 200000 步，基础学习率 1×10−5，前 1000 步线性热身，30000 步后降到 1×10−6；Stage 2 训 1500 步，固定学习率 1×10−6；全阶段批量 128，AdamW 的 β1 为 0.9、β2 为 0.999。VGGSound 中与舞蹈相关的敲击舞等类别不足 10 小时且多为现场收音差、仅打击乐或错标样本，运动与流派多样性有限，这是 Stage 1 输出碎片化的成因之一。

### 在什么数据划分与基线上测什么？

客观评测在 AIST++ 上按 LORIS 基准进行，但划分与先前随机划分不同。测试集固定选四首曲目 mBR0、mMH0、mLO2 与 mJB5，占全集 5%，理由是保证测试音乐在训练中未见且覆盖多流派与速度。比较对象是 CDCD、LORIS 与 Text-Inv，均用官方实现。指标是 BCS、覆盖标准差 CSD、命中率 BHS、命中标准差 HSD 与 F1，方向是 BCS、BHS、F1 越高越好，CSD、HSD 越低越好，衡量生成音乐与真值音乐的节奏对应。原文明确不用 Frechet 音频距离，因为测试集太小不可靠。

主观评测面向野外场景，自采 20 段挑战视频，按单人人类、单人非人类、多人人类、多人非人类 4 类各 5 段，多人段人数 2 到 91 人，非人类含 2 维与 3 维角色，单人组允许有观众，多人组要求多人共舞，覆盖舞种、背景、光照与机位变化。基线是 LORIS 与 Text-Inv，为公平用 MMPose 的 HRNet 给两者提 2 维骨骼，与它们原论文一致，所有音频截为 5.12 秒以匹配 Text-Inv 最短生成时长。20 名听众对舞蹈音乐对齐与音乐质量打 1 到 5 分，前者只看与舞蹈的匹配不看音质，后者独立于舞蹈评价保真度与作曲。

实现上资源状态是正文开源声明的唯一依据，本次收到的第三方资源链接当前可用，即 MMPose 的 HRNet 实现可访问。PF-D2M 示例页在摘要中给出，但本次未收到该页可达性证据，因此不写已公开可用，只按原文转述作者称示例见该页。

### 客观节拍与主观听感分别显示什么？

先看客观节拍要回答的问题：在固定未见曲目测试集上，PF-D2M 的节奏对应是否优于可运行的先前音频方法，指标方向是否一致，代价是什么。下表整理 AIST++ 测试集五指标，箭头表示越好方向，S1 为 Stage 1 后模型，S2 为 Stage 2 后模型。

| 方法 | BCS↑ | CSD↓ | BHS↑ | HSD↓ | F1↑ |
| --- | --- | --- | --- | --- | --- |
| CDCD | 89.2 | 9.0 | 93.8 | 10.0 | 91.5 |
| LORIS | 89.9 | 8.9 | 95.3 | 8.9 | 92.5 |
| Textual-Inv | 90.6 | 11.1 | 80.9 | 28.3 | 85.5 |
| PF-D2M S1 | 90.5 | 13.1 | 91.2 | 18.6 | 90.9 |
| PF-D2M S2 | 89.4 | 8.1 | 99.8 | 1.9 | 94.3 |

上表显示 PF-D2M 的 S2 版本在除 BCS 外的四项上为最优，F1 达 94.3，BHS 达 99.8 且 HSD 仅 1.9，表明命中准且稳定；代价是 BCS 为 89.4，低于 Text-Inv 的 90.6 与 LORIS 的 89.9。原文解释 PF-D2M 在 break 与 hip-hop 中常生成密集 hi-hat 等细分节奏，检出拍点增多会拉低 BCS，但该结构对流派是合适的。未胜出项必须指出：BCS 未领先，且 S1 的 CSD 与 HSD 明显差于 S2，说明仅做视频到音频对齐时音乐结构不连贯。阶段对比支持渐进训练：S2 相对 S1 在除 BCS 外全面提升，且听感上 S2 为录音室质量而 S1 常像现场收音。

**节拍覆盖率 × 节拍命中率：** 节拍覆盖率指 BCS，分工是衡量生成音乐检出节拍数相对真值音乐的覆盖程度；节拍命中率指 BHS，分工是衡量生成节拍与真值节拍在时间容差内对齐命中的比例；二者搭配的理由是只看覆盖会奖励密集鼓点，只看命中会忽略漏拍，组合意义是再辅以 CSD、HSD 标准差与 F1 综合判断节奏对应，但原文明确指出它们只比对真值曲目而非直接比对舞蹈，也不评价音质与结构，因此必须结合主观听测理解。

再看主观听感要回答的问题：在野外多人与非人类场景下，PF-D2M 是否同时在对齐与音质上领先。下段是图前导读，说明分组与簇的读法，避免把不同簇混为同一条件。

> **看图路径：** 1. 先确认横轴按单人非人类、多人人类、多人非人类分组，每组内再分 Alignment 与 Quality 两簇；2. 再对比每簇内灰、黄、蓝三根柱子的高低顺序，确认蓝色柱在所有簇均为最高；3. 最后读出蓝色柱顶标注的 4.0 以上数值与灰黄柱 2 到 3 分段的差距，理解主观领先幅度

[![原论文 Figure 2：Subjective evaluation results on the in-the-wild set.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/ef98101445a3/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/ef98101445a3/figure-2.png)

*论文图 2。原论文 Figure 2：“Subjective evaluation results on the in-the-wild set.”。*

上图是野外集主观结果，按多人人类与多人非人类等分组展示，每组内分对齐与质量两簇，每簇三根柱子对应 3 种方法。可见的规律是蓝色柱代表的 PF-D2M 在所有展示的对齐与质量簇中均为最高，顶端标注多在 4.01 到 4.38 之间，而另两方法多在 1.88 到 3.14 之间；差距在多人与非人类组进一步拉大。原文报告 PF-D2M 显著优于基线，能反映细粒度动作并通过编曲突出特定动作，而 LORIS 常乐器单调、Text-Inv 常音质劣化，在非典型机位与多切镜头下基线更易失配。该图是像素证据，数值以柱顶标注为准，颜色与方法的对应按正文所述 PF-D2M 领先来归因，不猜图例缺失部分的精确映射。

### Stage 1 与 Stage 2 的对照说明什么失败条件？

把 S1 与 S2 看作消融，测的是音乐性与同步的权衡。S1 已能跨流派为广泛舞蹈视频生成音乐，得益于文本到音频初始化与多样视频对齐，但有两个可复现的失败：一是输出随视觉突变而突变，像短片段拼接而非一首连贯曲目；二是输出带房间环境特征，随舞者地点变化。S2 用 AIST++ 加文本到音乐数据微调后，节奏指标全面改善且听感连贯，支持该 2 阶段分工的判断。

训练配比与时长的对照也值得复述。下表把优化预算与数据条件放在一起，便于复现时先对齐计算量再谈效果。

| 阶段 | 数据 | 步数 | 学习率 | 批量与优化器 |
| --- | --- | --- | --- | --- |
| Stage 2 | AIST++ 加 FMA MoisesDB 加 VGGSound 按 2:4:1 | 1500 步 | 固定 1×10−6 | 批量 128 AdamW |

上表说明 Stage 2 步数很少但数据混合关键，文本到音乐占大头以防记住 AIST++ 的 60 首曲目，视频到音频保留一份以维持同步；视频音频分别重采样到 25 fps 与 44.1 kHz 并切 7.98 秒片段。限制是原文未报告去掉文本到音乐或改变 2:4:1 后的定量掉点，因此不能断言该比例最优，只能说它是实际可运行且报告有效的配置。另一个失败条件是 VGGSound 舞蹈相关类不足 10 小时且质量差，若只用这些类做舞蹈训练会同时缺多样性与音质，这正是先做通用对齐再微调的理由。

### 哪些结论不能推广，缺了哪些验证？

不能推广的有三点。第一，客观指标好不等于听感全面好，BCS、CSD、BHS、HSD 与 F1 只比对真值音乐且不测保真度与结构，细分节奏会吃亏，因此 BCS 略低不能直接判为对齐差。第二，总体趋势不等于每组每步成立，F1 领先主要来自 BHS 与 HSD 的大幅改善，在特定流派或切镜视频上的稳定性仍需分条件报告。第三，主观 20 人 20 段的规模支持方向性判断，但未报告统计显著性与误判率，也未测量延迟与推理成本，不能承诺实时或低成本可用。

未验证的边界要明确。生成时长训练切 7.98 秒、主观截 5.12 秒，相对真实编舞需要的长曲仍短，长时结构对齐未评测。缺乏多样音乐与舞蹈视频的客观基准，FAD 因测试集小而未用，未来需要新基准。版权限制下野外高质量配对数据仍缺，VGGSound 现场收音问题未根本解决。此外，文本标题依赖 Qwen2-Audio 自动标注加模板随机组合，标注错误向音乐风格的传导未量化。

术语误解也需澄清。无姿态不是不用运动，而是改用 Synchformer 视频特征；通用不是所有视频拟音通用，而是舞蹈场景下对人数与是否人类更通用；渐进不是简单续训，而是先通用同步后音乐性微调并混合文本到音乐数据防过拟合。

### 要复现应先做什么，需要哪些条件？

先做三件事。第一，按划分复现客观评测：用 AIST++ 中 mBR0、mMH0、mLO2 与 mJB5 做测试集，其余做训练，保证测试曲目未见，用官方 CDCD、LORIS 与 Text-Inv 实现跑出 BCS、BHS 等五指标，再跑 PF-D2M 的 S1 与 S2 对照。第二，按 4 类各 5 段自建野外小集，人数覆盖单人与 2 到 91 人多人，含 2 维与 3 维非人类，用 MMPose 的 HRNet 给基线提骨骼，统一截 5.12 秒做 20 人双维度打分。第三，对齐预处理与优化：视频 25 fps、音频 44.1 kHz、224×224 中心裁剪、7.98 秒随机切片，Stage 1 的 200000 步与 Stage 2 的 1500 步、批量 128 与对应学习率先对齐。

关键超参数与信息条件要保留。DiT 为 24 层，VAE 潜变量 64 通道、时间降采样 2048 倍，文本用冻结 T5-base 经交叉注意力进入，视觉经通道拼接加 AdaLN 逐层调制且首帧除外，视觉文本丢弃率 10%，推理 DPM-Solver++100 步、引导尺度 5.0，Stage 2 混合比 2:4:1，空视觉用可学习空嵌入，文本模板随机组合、无标签用通用器乐提示。

可运行性上，MMPose 第三方链接本次确认为可用，可用于基线姿态提取；PF-D2M 权重与代码的可达性在本次证据中未确认，不应写已开源可下载。复现时若遇视觉拼接收敛慢，应检查是否漏了 AdaLN 支路与首帧排除逻辑，而非直接加大步数。

### 何时值得尝试，一句话如何记住？

当任务涉及多人共舞、动画角色、复杂背景与机位，且能接受约 8 秒短曲与文本风格提示时，值得尝试 PF-D2M 这类视频视觉特征加渐进训练的路线；当需要长曲结构、精确可解释的节拍对齐证明或严格版权合规的大规模训练时，则需补长时建模、更合适的客观基准与数据授权验证后再用。

记住一句话：把条件从单人骨骼换成视频同步特征解决通用输入，把训练从单数据集 1 次学换成先同步后音乐性并混入文本到音乐数据解决过拟合，代价是客观节拍指标仍以真值曲目为参照且生成时长短，最终依靠主观听测确认对齐与音质。下一步最值得补的验证是长时生成在多人多切镜头下的稳定性，以及覆盖多流派多舞种的公开基准上的可比结果。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
