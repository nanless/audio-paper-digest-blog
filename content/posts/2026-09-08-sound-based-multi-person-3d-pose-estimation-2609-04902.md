---
title: "Sound-based Multi-Person 3D Pose Estimation"
date: 2026-09-08
draft: false
tags: [声源定位, 注意力机制, 时频分析, 数据集]
categories: [论文速递]
description: "针对多人运动导致声学特征叠加与互反射延迟混叠的问题，SoundMHPE 用多尺度 STFT 编码器与每帧每人独立查询的时序解码器在 6 小时 AMP 数据集上实现多人 3D 姿态估计，并在 MPJPE 等指标上优于声学与 WiFi 基线，代价是需在受控室内采集与同步动捕数据。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.04902"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "多人声场叠加下如何用声音同时还原三维姿态：SoundMHPE 的多尺度与时序解耦"
paper_digest_original_title: "Sound-based Multi-Person 3D Pose Estimation"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.04902"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.04902.pdf"
paper_digest_primary_task: "声源定位"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.localization","label":"声源定位"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.time-frequency","label":"时频分析"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "注意力机制"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对多人运动导致声学特征叠加与互反射延迟混叠的问题，SoundMHPE 用多尺度 STFT 编码器与每帧每人独立查询的时序解码器在 6 小时 AMP 数据集上实现多人 3D 姿态估计，并在 MPJPE 等指标上优于声学与 WiFi 基线，代价是需在受控室内采集与同步动捕数据。"
paper_digest_authors: [{"affiliations":["Keio University, Yokohama, Kanagawa 223-8522, Japan"],"name":"Yusuke Oumi"},{"affiliations":["Keio University, Yokohama, Kanagawa 223-8522, Japan"],"name":"Yuto Shibata"},{"affiliations":["Keio University, Yokohama, Kanagawa 223-8522, Japan","Tokyo University of Science, Katsushika, Tokyo 125-8585, Japan"],"name":"Go Irie"},{"affiliations":["NTT, Inc., Keihanna Science City, Kyoto 619-0237, Japan"],"name":"Akisato Kimura"},{"affiliations":["Keio University, Yokohama, Kanagawa 223-8522, Japan"],"name":"Yoshimitsu Aoki"},{"affiliations":["Keio University, Yokohama, Kanagawa 223-8522, Japan"],"name":"Mariko Isogawa"}]
paper_digest_abstract_sha256: "af09c0b2816b4427a3a0d10db14da3a2f34cd92b1fcdce5a8777d33d8001cea9"
paper_digest_sidecars: {"citation.bib":{"sha256":"3ca8d142562ea03903fa8285dea909a1050bebc43a6242c3099a2dd589d183bb","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04902/citation.bib"},"citation.json":{"sha256":"7b0cb2c7ed4c412370a538f7faaf074aa809026b8e58a41e337ea859ca9d3d76","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04902/citation.json"},"citation.ris":{"sha256":"11a04ed89602f7e5403a7b10dc24a2cc5785c864200a698c2151b3ddddcc16d5","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04902/citation.ris"},"rethink-context.json":{"sha256":"5ec46d6a558059af7c25ad2cbe4d09a7ce351da4a6b00fee0334ab86c3a29cea","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04902/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "165869abf1be10c5772eb0a531fb07c1f73ad7be057e84acdbd4be3f4a952b79"
paper_digest_api_reader_plan_sha256: "b8a4b83c8349b1ba3b6684a0cfd787268df62b81e88df446e41bc6411fd4ff3b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "78a76af62242f416617673a771955755b1e66e0888708b1a75b0658bab9a6fe2"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "c7f122f8c615d35088e86d3eab7ef098850e791f2b13b4a29cffc857e72eed0e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4580efbde14497bc89087ce9c9066bb679c1c6f5f53f2342dadf54898eda77fa"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "120a9f1c0c4339ebefef1bba77f4e08ec39f7529250f26844db2d61d29ef19d3"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 多人声场叠加下如何用声音同时还原三维姿态：SoundMHPE 的多尺度与时序解耦

> 英文题目：*[Sound-based Multi-Person 3D Pose Estimation](https://arxiv.org/abs/2609.04902)*

> 标签：#声源定位 | #注意力机制 | #时频分析 | #数据集
>
> 评分：**6.8/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Yusuke Oumi：Keio University, Yokohama, Kanagawa 223-8522, Japan
- Yuto Shibata：Keio University, Yokohama, Kanagawa 223-8522, Japan
- Go Irie：Keio University, Yokohama, Kanagawa 223-8522, Japan；Tokyo University of Science, Katsushika, Tokyo 125-8585, Japan
- Akisato Kimura：NTT, Inc., Keihanna Science City, Kyoto 619-0237, Japan
- Yoshimitsu Aoki：Keio University, Yokohama, Kanagawa 223-8522, Japan
- Mariko Isogawa：Keio University, Yokohama, Kanagawa 223-8522, Japan

## 📌 核心摘要

任务以主动声学感知采集的四通道声信号为输入，输出多人连续 3D 人体姿态序列，难点在于多人运动引起的声学扰动在时频域叠加且存在人体间二次反射导致的传播延迟，难以将观测变化归因到个体。方法链分三步：先对接收信号做多尺度短时傅里叶变换（Short Time Fourier Transform, STFT）生成不同时间分辨率与频率分辨率的对数梅尔频谱（log-Mel spectrogram），再经声学多尺度编码器（Acoustic Multi-scale Encoder, AME）以时序自注意力与频域自注意力解耦时间依赖与多分辨率频域关系得到声学特征图，最后由时序姿态解码器（Temporal Pose Decoder, TPD）为每人分配多帧姿态查询与实例查询，通过运动自注意力与交互自注意力联合建模个体内时序演化与个体间相互影响并经交叉注意力从特征图中提取帧级姿态。与单查询压缩整段时序的 DETR 式基线不同，该设计让每帧查询对齐对应时段声学特征，避免时间维度坍缩。在声学多人姿态（Acoustic Multi-person Pose, AMP）数据集的三折跨被试评估中，SoundMHPE 以 MPJPE 106.5 mm 优于最强声学基线 119.9 mm 与 WiFi 基线 119.9 mm，PA-MPJPE 与 PCKh@0.5 亦同步提升。结论仅在受控室内、固定扬声器与麦克风布局及有限人数与动作分布下验证，对强混响、环境噪声、遮挡材质多样性及未见人数的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://oumi03.github.io/sound-mhpe/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 任务要从声音中恢复什么？输入与输出如何定义？

论文研究的问题是仅用声音估计多人的 3 维人体姿态。输入是主动声学感知采集的声信号序列 s={s_t}，其中 L 是对应 1 帧姿态的声信号长度；输出是多人的姿态序列 p_j={p_{j,t}}，j 为被试编号，T 为姿态序列长度。系统采用 1 对扬声器发射已知信号、一个 4 通道 Ambisonics 麦克风接收的配置，4 通道分别为全向 W 与方向性 X、Y、Z。

发射信号选用时间伸展脉冲 TSP，这是一种周期内频率连续变化的信号，便于在时频域分离直达与反射成分。与单人不同，多人场景的难点被明确为两点：多人运动引起的信号变化在接收端叠加，难以把某段频域或时域变化归因到某个人；多人之间的互反射引入复杂的传播延迟，破坏了运动与声学特征的直接时序对应。

论文因此把任务定义为从叠加且含互反射的声信号中同时还原多人的逐帧 3 维关节位置，而非检测声源或分类动作。

**主动声学感知 × 环境声感知：** 主动声学感知指系统主动发射已知信号（如 TSP）并分析其经人体反射后的接收信号，分工是提供可控的时频参考以提取运动引起的细微变化；环境声感知则被动监听人发出的声音，分工是依赖声源本身。二者搭配理由是多人姿态需要稳定的全场照射而非依赖人是否发声，组合意义在于把姿态估计从“听人说话”转为“用声照人”，使无声动作也能被观测。

图 1 展示了该定义的直观对比，左侧是声波在多人间传播的示意，右侧上方是仅支持单人的现有模型，下方是支持多人的 SoundMHPE，输入均为接收信号，输出为多人体素姿态。该图有助于确认论文的输入必须包含发射信号的已知性与接收信号的多通道性。

> **看图路径：** 1. 对比左侧三人声场中紫色弧线与右侧单人虚线框的输入差异；2. 观察 SoundMHPE 分支中 Encoder 到 Decoder 的实线箭头与多人体素输出；3. 注意发射信号波形与接收信号多通道波形的标注位置

> **论文图 1（像素未随页面持久化）**：Figure 1: We propose SoundMHPE, a sound-based multi-person 3D pose estimation method. Our system adopts an active acoustic sensing approach, where a speaker emits a transmitted signal and the received signal is used for the model input. While existing acoustic pose estimation models are limited to single-person estimation, SoundMHPE enables simultaneous estimation of multiple individuals.

*论文图 1。原论文 Figure 1:：“We propose SoundMHPE, a sound-based multi-person 3D pose estimation method.”。*

从像素看，左侧 3 个人体模型与扬声器、麦克风之间用紫色弧线表示声传播路径，右侧流程图用实线箭头标出 SoundMHPE 的编码器到解码器路径，用虚线箭头标出单人基线的不可复用性。中间上方为发射信号的 amp-time 波形，下方为接收信号的多通道波形，右侧灰色框为 Existing Model，彩色框为 SoundMHPE。理解该图有助于确认输出是每人每帧的骨架而非单帧单人。

该任务的必须保留信息包括每帧声信号的通道维度与 Mel 频带数，以及多尺度 STFT 产生的不同时间分辨率。丢失任 1 维度都会导致时间模糊或频率模糊，进而无法对齐反射延迟与对应姿态帧。

因此，论文把多人声学姿态估计表述为在叠加信号中保持时频与身份可分性的回归问题，为后续编码器与解码器的解耦设计提供了目标。

### 同类方法在输入、遮挡与人数上如何取舍？

论文将相关工作按输入模态与人数支持度对比。RGB 方法在多人上成熟，但受黑暗与遮挡影响，且存在隐私顾虑。无线信号方法如 RF、WiFi、mmWave、UWB 可穿透部分遮挡并在黑暗中工作，但对水或金属遮挡敏感，且在医疗或航空等限制无线通信的环境中受限。

声学方法不受光照影响且长波长有助于绕过金属等障碍，但已有工作仅限单人且多在隔音室验证。在声学分支内，已有工作分别探索了 chirp、不可听连续音、音乐作为发射源，以及基于 CNN 时序卷积与引入声学先验的时序建模，但均未处理多人叠加。

在视频多人姿态的时空建模中，已有 temporal-CNN、LSTM、Transformer 以及 DETR 式对象查询的扩展，Snipper 等工作通过帧级与未来帧查询联合完成估计与预测。论文借鉴了查询式建模的思想，但指出声学时序与视觉时序的物理成因不同，不能直接迁移单人声学模型。

因此，相关工作的对照点落在三处：输入是否需要光照或无线许可、是否支持多人同时估计、时序建模是否区分个体内演化与个体间交互。论文的定位是首次把主动声学感知扩展到多人 3 维姿态，并在编码器与解码器两端分别引入多尺度与多查询的解耦设计。

### 多人声学姿态的模糊性从何而来？需要保留哪些信息？

形式化上，模型需从声信号估计 Nout 帧的多人姿态。为了捕捉声学与姿态的时序关联，论文采用 Nin=Nout+Nprev 的输入窗，用 Nin 帧对应的声信号预测后 Nout 帧的姿态。实现中 Nout=8、Nprev=16，因此 Nin=24，这意味着每次前向需要 24 帧长度的声信号来估计 8 帧姿态，帧率为动捕的 20 fps。

需要保留的信息包括：每帧声信号的通道维度 C=4、Mel 滤波器组数量 B=128、以及多尺度 STFT 产生的不同时间分辨率。丢失任 1 维度都会导致两类模糊：一是时间模糊，即无法对齐反射延迟与对应姿态帧；二是频率模糊，即无法分辨多人细微动作引起的窄带能量变化。

论文因此强调必须同时保留高时间分辨率以定位快速扭转等动作，以及高频率分辨率以分辨小反射面积动作如举臂。另一个需保留的信息是人与帧的归属关系，若把多帧姿态压缩到单个查询中，查询需同时编码整段时序，交叉注意力难以聚焦到对应时间步的声学特征。

保留每人每帧独立查询的结构，是后续解码器设计的前提。该设计使模型能显式区分个体内时序与个体间干扰，避免在叠加信号中丢失身份信息。

### SoundMHPE 的整体流程如何把声音映射到多人多帧姿态？

SoundMHPE 是编码器-解码器结构。编码器侧称为 Acoustic Multi-scale Encoder，负责把原始声信号转为多尺度 log-Mel 谱并提炼声学特征图；解码器侧称为 Temporal Pose Decoder，负责从特征图中通过查询机制抽取每人每帧的姿态。两模块均使用定制的自注意力来解耦不同维度的依赖。

单样本的前向路径可概括为：4 通道声信号 s 经多尺度 STFT 与 Mel 投影得到 3 组谱 a^{high-time}、a^{mid}、a^{high-freq}，经线性层统一频维到嵌入维度 E=256 后展平为时-通道 token，送入 Nenc=3 个 AME 块得到声学特征图。随后 M×(Nout+1) 个可学习查询送入 Ndec=2 个 TPD 块，经运动自注意力、交互自注意力与交叉注意力后，分别回归姿态与置信度，经匈牙利匹配计算损失。

该流程的关键选择是编码器与解码器分别解耦：编码器解耦时间与频率尺度，解码器解耦个体内时序与个体间交互。图 2 给出了该全景，左侧为 3 组谱的堆叠与 AME 块循环，右侧为查询矩阵与 TPD 块循环，底部为 4 种自注意力策略的示意。

> **看图路径：** 1. 从左侧 Acoustic Signals 经 Multi-Scale STFT 到三组谱的高低时频标注；2. 跟踪中间 AME Blocks 的双自注意力到上方 Acoustic Feature Map 的绿色序列；3. 查看右侧 TPD 中 M×(Nout+1) 可学习查询矩阵与 Cross-Attention 到姿态序列的展开

> **论文图 2（像素未随页面持久化）**：Figure 2: Proposed framework for sound-based multi-person pose estimation. (Top left) SoundMHPE first employs an Acoustic Multi-scale Encoder to generate spectrograms with diverse time–frequency characteristics and obtain an acoustic feature map. (Top right) Subsequently, in the Temporal Pose Decoder, we assign each individual a set of learnable pose queries. (Bottom) These encoder and decoder modules leverage customized self-attention to jointly model spatio-temporal dynamics, multi-resolution features, and inter/intra-person pose relationships.

*论文图 2。原论文 Figure 2:：“Proposed framework for sound-based multi-person pose estimation.”。*

从像素看，图 2 顶部左侧 3 组立方体分别标注 a^{high-time}、a^{mid}、a^{high-freq}，其时间轴长度递减而频率轴增高；中间 AME Blocks 框内自下而上为 Temporal Self-Attention、Frequency Self-Attention 与 FFNs，输出为一排绿色特征图。右侧 TPD Blocks 框内自下而上为 Motion、Interaction 与 Cross-Attention，上方 FFNs 后接纵向展开的姿态序列 p 与损失 Lpose、Lc。底部用星形与方块区分 Query 与 Key-Value，并用颜色块标出 TSA、FSA、MSA、ISA 的注意力范围。阅读时先沿声信号到特征图的主路径，再看查询到姿态的分支，有助于理解时频与人际解耦的位置。

该全景图还标出了 token 数量与查询数量的对应关系，为复现时的维度检查提供了依据。

### 声信号如何变成多尺度谱？编码器怎样融合时频？

输入声信号首先按固定间隔 L 分段，对每段做 STFT 并经 Mel 滤波器组与对数变换得到 log-Mel 谱。单尺度公式为对通道 c 的第 t 段信号取傅里叶变换后乘 Mel 矩阵再取对数。论文在此基础上引入多尺度 STFT：用窗长 L、2L、4L 分别配 Mel 组数 B、2B、4B，对长度 Nin×L 的声信号并行生成 3 组谱。

具体形状为 a^{high-time}∈R^{Nin×C×B}、a^{mid}∈R^{Nin/2×C×2B}、a^{high-freq}∈R^{Nin/4×C×4B}，分别对应高时间、中间、高频率分辨率。

**多尺度 STFT × log-Mel 谱：** 多尺度 STFT 分工是在不同时间窗长 L、2L、4L 上做傅里叶变换，分别获得高时间分辨率与高频率分辨率的谱；log-Mel 谱分工是将线性频谱经 Mel 滤波器组压缩到人耳感知尺度并取对数，突出能量变化。搭配理由是单一窗长无法同时兼顾快速运动的时序定位与微小反射的频域细节，组合后形成互补的时频表示供编码器融合。

实现上，3 组谱沿时间轴拼接后在每个时间步独立经线性层统一频维到 E，得到((7/4)×Nin, C, E) 的张量，再沿时-通道展平为 token 送入编码器。Nin=24 时，token 数为(24+12+6)×4=168 个。这种拼接保留了不同分辨率的原始时序长度，避免插值带来的信息损失。

编码器的自注意力被拆为两类。时间自注意力在同一尺度内计算，分别对 Nin×C、(Nin/2)×C、(Nin/4)×C 个查询做注意力，聚焦同一分辨率内的时序依赖；频率自注意力在同一段 4L 声信号对应的 7×C 个跨尺度查询间计算，其中 4 个来自 a^{high-time}、2 个来自 a^{mid}、1 个来自 a^{high-freq}，捕捉同一物理时段的多分辨率频域关联。

**时间自注意力 × 频率自注意力：** 时间自注意力分工是在同一窗长生成的谱内跨时间与通道做注意力，建模运动的时序连续性；频率自注意力分工是在同一段 4L 声信号对应的 7×C 个跨尺度 token 间做注意力，关联不同分辨率的频域信息。搭配理由是若对所有 token 做全局注意力会把时序与尺度混在一起，解耦后编码器能分别提纯时序动态与多分辨率频域互补特征。

公式层面，单尺度 log-Mel 的计算目标是将时域波形转为感知尺度的能量谱，符号含义为 Hmel 为 Mel 滤波器组，F 为傅里叶变换，s_{t',c}为第 c 通道的声采样。

\[\displaystyle a_{t,c}=\log(\,H_{\mathrm{mel}}\cdot\mathcal{F}(\{s_{t^{\prime},c}\}^{t\times L}_{t^{\prime}=(t-1)\times L+1})\,)\text{,}\]

该段落对应论文式(1)，输入为分段后的声信号，输出为 a_{t,c}。理解时先确认 t 为谱帧索引、c 为通道，再看 Hmel 如何把线性频点压缩到 B 个 Mel 带，最后取对数以压缩动态范围，便于后续线性层与注意力稳定训练。标准自注意力若对所有 token 全局计算，会把时序与尺度混在一起，论文通过消融显示解耦后精度更高。

### 解码器为何要为每人每帧准备独立查询？交叉注意力如何对齐？

解码器借鉴 DETR 的查询式检测：准备 M 个查询对应 M 个潜在个体，通过查询与特征图的交叉注意力抽取个体相关特征，并用匈牙利匹配与置信度阈值筛选输出。单帧姿态估计中每个查询预测一个姿态与置信度即可。

但声学多人多帧场景中，若仍用 M 个查询各自压缩 Nout 帧的整段姿态，如图 4(a) 所示，单查询需聚合全部时序，交叉注意力难以区分哪段时间步的声学特征对应哪 1 帧姿态，互反射的精确时序会被抹平。论文提出的 Temporal Pose Decoder 改为每人准备 Nout 个姿态查询，每个查询对应 1 帧待估姿态，另加 1 个实例查询用于预测该人的置信度，总查询数为 M×(Nout+1)。

实现中 M=15、Nout=8，因此查询数为 135。每个查询在初始化时叠加时间位置嵌入与被试特定嵌入，以区分帧序与身份。图 4(b) 显示多查询下，对角线附近的交叉注意力权重使早期查询关注早期声学特征、后期查询关注后期特征，从而实现帧级对齐。

**姿态查询 × 实例查询：** 姿态查询分工是为每个人准备 Nout 个按帧对齐的查询，每个查询负责预测 1 帧的 21 关节 3 维坐标；实例查询分工是为每个人额外准备 1 个查询，经线性层输出置信度 c。搭配理由是多帧姿态需要帧级声学对应而置信度是实例级属性，组合后实现 M×(Nout+1) 个查询同时完成多帧多人回归与存在性判断，并通过匈牙利匹配计算损失。

解码器块内部的自注意力同样解耦为两类。运动自注意力限制在同一个人的 Nout+1 个查询内，提取个体跨帧的一致运动；交互自注意力在第 i 人与其余(M-1)×(Nout+1) 个查询间计算，显式建模人际依赖与声学互影响。若对全部 M×(Nout+1) 个查询做全局自注意力，时序线索与人际反射依赖会被不加区分地混合。

**运动自注意力 × 交互自注意力：** 运动自注意力分工是限制在同一个人的 Nout+1 个查询内做注意力，捕捉个体跨帧的姿态演化；交互自注意力分工是在第 i 人与其余(M-1)×(Nout+1) 个他人查询间做注意力，建模多人互反射与空间共存带来的干扰。搭配理由是全局注意力会把个体时序与人际耦合混淆，拆分为两轴后解码器能同时保持单人平滑性与多人区分度。

图 4 的像素细节有助于复述：图(a) 左侧为蓝色特征图序列 1…Nout，中间灰块为注意力权重，右侧为单查询展开的多帧骨架；图(b) 左侧为绿色多查询序列，中间为带红框对角线的权重矩阵，右侧为每查询对应 1 帧骨架。阅读时先确认横轴为特征时间、纵轴为查询时间，再观察红框如何体现帧对齐。

> **看图路径：** 1. 对比图(a) 单查询对应 Nout 帧灰块与图(b) 多查询对角红框的交叉注意力模式；2. 确认横轴为声学特征时间 t=1…Nout，纵轴为查询时间；3. 观察多查询如何让每帧查询聚焦对应时间步的特征

> **论文图 4（像素未随页面持久化）**：Figure 4: Cross-attention between queries and acoustic feature maps in TPD. (a) Single Query for Multi-frame poses: The pose information from multiple frames is aggregated into a single query. (b) Multiple Queries for Multi-frame poses: Multiple queries enable the model to focus on the acoustic features of different frames for poses in each frame.

*论文图 4。原论文 Figure 4:：“Cross-attention between queries and acoustic feature maps in TPD.”。*

该设计使模型能同时学习帧级声-姿对应与多人全局上下文，消融中移除 TPD 后性能下降最明显，说明多查询与双自注意力的组合是精度提升的主要来源。实现时需注意查询的展平顺序与注意力分组的一致性，否则会错位。

### 四种定制自注意力在实现上如何切分查询？

论文在第 3.3 节系统定义了 4 种注意力切分。编码器侧的 TSA 与 FSA 已在前述多尺度部分说明；解码器侧的 MSA 与 ISA 则按人与帧切分。图 5 用五列示意了标准注意力与 4 种定制的差异：第一行按窗大小切分的编码器查询，第二行按被试切分的解码器查询。

具体实现上，TSA 对每种窗长对应的 token 子集独立做注意力，FSA 对同一 4L 时段的 7×C 个 token 做注意力；MSA 对同一人的 Nout+1 个查询做注意力，ISA 对不同人之间做注意力。这种切分不引入额外参数，仅通过注意力掩码或分组实现，但改变了梯度路径。

TSA 的梯度仅在同分辨率时序内传播，FSA 在跨尺度间传播，MSA 在个体内传播，ISA 在个体间传播。论文的消融显示，仅在编码器或仅在解码器使用定制注意力均不如两者同时使用，说明时频解耦与人际解耦互补。

实现时需注意查询的展平顺序：编码器按时间-通道展平，解码器按被试-时间展平，切分维度需与展平顺序一致。该细节决定了注意力掩码是否正确覆盖目标 token 集合。

### 损失如何匹配多人多帧？训练配置与数据构造怎样设置？

训练损失由两项组成：姿态损失 Lpose 与置信度损失 Lc，总损失为二者加权和，权重 λ=0.5。Lpose 为匹配后的预测姿态与真值姿态的均方误差，Lc 为二元交叉熵用于学习置信度。匹配采用匈牙利算法，与 DETR 一致，将 M 个预测实例与真值实例做最优指派后计算损失。

推理时仅输出置信度超过阈值的姿态。该阈值的具体数值未在原文中报告，复现时需自行设定并记录。

\[\displaystyle\mathcal{L}=\mathcal{L}_{\mathrm{pose}}+\lambda\mathcal{L}_{\mathrm{c}},\]

该式对应论文式(2)，输入为匹配后的姿态对与置信度标签，输出为标量损失。理解时先确认 Lpose 在关节坐标上计算，Lc 在实例级别计算，λ 平衡回归与分类的梯度量级。论文未报告阈值的调优过程，这一项在复现时需通过验证集确定。

优化器选用 AdamW，权重衰减 1×10^-4，训练 500 轮，学习率 5×10^-5。嵌入维度 E=256，Mel 带数 B=128，AME 块数 Nenc=3，TPD 块数 Ndec=2。数据构造上，AMP 数据集共 6 小时、约 432K 帧，帧率 20 fps，骨架含 21 关节，涵盖头、颈、肩、臂、前臂、手、腰、大腿、小腿、脚、趾、髋与脊柱。

15 名被试分为 3 组，每组采集单人 72 分钟、双人 24 分钟、3 人 24 分钟，组内随机配对与位置，动作包括行走、扭转、举臂等随机顺序与速度。采集环境为有背景噪声与混响的室内，扬声器为 Edifier ED-S880 DB，麦克风为 Zoom H3-VR，动捕为 16 相机的 OptiTrack 系统。训练时采用跨组评估：用两组共 10 人训练，剩余一组 5 人测试，三折交叉验证后平均。

基线为两类：扩展为多人的 Shibata 等单人声学模型，以及将输入茎改为声学谱的 Yan 等多人民用 WiFi 模型，二者均在 AMP 上从零训练以保证公平。该协议避免了被试泄露，使结果反映跨人泛化能力。

### 在什么数据与指标上评估？如何保证基线可比？

评估指标为三项：MPJPE 为预测与真值关节的平均欧氏距离，单位毫米，越低越好；PA-MPJPE 为经 Procrustes 对齐去除平移、旋转与尺度后再算 MPJPE，同样越低越好；PCKh@0.5 为关节误差小于头颈距离一半的比例，越高越好。PCKh 的阈值定义使指标对身高归一化，避免高个子被试主导误差。

**MPJPE × PA-MPJPE：** MPJPE 分工是直接计算预测与真值关节的平均欧氏距离，保留全局平移与尺度误差；PA-MPJPE 分工是先用 Procrustes 对齐去除平移、旋转与尺度后再算 MPJPE，聚焦姿态形状本身。搭配理由是声学估计常有整体位置漂移，单看 MPJPE 会夸大误差，二者结合可区分是定位偏差还是肢体结构错误。

数据集划分与协议已在训练节说明，关键是跨被试与跨组评估，避免同一人同时出现在训练与测试。声学信号与姿态帧严格同步，L 为单帧姿态对应的声信号长度，Nprev=16 提供历史上下文。基线可比性通过两点保证：一是均在 AMP 上重训，二是保留原模型主体结构仅修改输入适配层与多人回归头。

图 6 展示了采集环境与数据分布，左侧为房间实景与麦克风特写，中间为俯视图的距离标注，右侧为性别与身高分布及每组时长饼图。该图有助于确认空间尺度与传感器布局是否与复现环境一致。

> **看图路径：** 1. 查看图(a) 房间中扬声器、麦克风与动捕相机的位置关系；2. 对照图(b) 俯视图中 1m 与 3.8m 等距离标注；3. 核对图(c) 中三组各 72/24/24 分钟的数据分布与身高直方图

> **论文图 6（像素未随页面持久化）**：Figure 6: Experimental setup. (a,b) Our measurement environment consists of a set of speakers and a microphone for active acoustic sensing, along with motion capture cameras to obtain ground-truth poses. (c) Our AMP dataset consists of 12 male and 3 female participants, with heights ranging from 150 cm to 181 cm. The participants were divided into three groups. For each group, we collected 72 minutes of single-person data, 24 minutes of double-person data, and 24 minutes of triple-person data.

*论文图 6。原论文 Figure 6:：“Experimental setup. (a,b) Our measurement environment consists of a set of speakers and a microphone for active acoustic sensing, along with motion capture cameras to obtain…”。*

从像素看，图(a) 中 Motion Capture Cameras 箭头指向墙角相机，Microphone 与 Set of Speakers 分别标在房间两侧；图(b) 中麦克风距扬声器约 3.8m，房间尺寸约 2.65m×3.74m，标注了 1m 的网格间距；图(c) 中橙色饼图显示 12 男 3 女，身高直方图覆盖 150 至 181cm，3 组各含单 72、双 24、三 24 分钟。阅读时先确认空间尺度与传感器布局，再核对数据量是否足以支撑多人同时出现的样本覆盖。

该环境为有背景噪声与混响的室内，而非消声室，因此结果更接近实际部署条件。

### 主结果在何种条件下优于基线？提升幅度与代价是什么？

主结果的比较问题是：在相同的 AMP 跨组协议与三指标下，SoundMHPE 是否在多人声学姿态上优于可运行的声学与 WiFi 基线。公平条件是所有方法在同一数据划分上训练与测试，指标方向为 MPJPE 与 PA-MPJPE 越低越好、PCKh 越高越好。

下表汇总了三折平均后的主结果，保留原文的数值与单位写法。

| 方法 | MPJPE [mm] | PA-MPJPE [mm] | PCKh @0.5 | 评估条件 |
| --- | --- | --- | --- | --- |
| Shibata et al. [24] | 121.7 | 71.5 | 0.36 | 跨组平均 |
| Yan et al. [30] | 119.9 | 69.7 | 0.36 | 跨组平均 |
| Ours | 106.5 | 65.0 | 0.43 | 跨组平均 |

表后解释：SoundMHPE 在三项指标上均优于两基线，MPJPE 相对 Shibata 降低约 15.2 毫米、相对 Yan 降低约 13.4 毫米，PA-MPJPE 分别降低 6.5 毫米与 4.7 毫米，PCKh 从 0.36 提升至 0.43。论文的定性图显示，双人扭转与 3 人举臂等小反射面积动作上基线易失败而 SoundMHPE 能重建，支持多尺度频域与人际建模对细微变化的有效性。

代价是模型需维护 135 个查询与多尺度谱的额外计算，且训练需 500 轮与跨组数据，推理开销与帧率未在原文中量化。未胜出项方面，基线在单人上仍有竞争力，且 3 人场景下所有方法误差均高于单人，说明多人叠加仍带来系统性退化，需结合下一节的按人数对比进一步分析。

### 哪些组件与注意力切分真正带来增益？窗口选择如何影响？

消融的比较问题是：移除 AME 或 TPD、或将定制注意力退化为标准注意力后，性能如何变化。公平条件是保持数据划分与指标一致，仅改变组件或注意力分组。

组件消融结果如下，w/o AME 表示仅用单窗谱 a^{high-time}，w/o TPD 表示每人仅用一个查询同时预测多帧。

| 方法 | MPJPE [mm] | PA-MPJPE [mm] | PCKh @0.5 | 变动说明 |
| --- | --- | --- | --- | --- |
| Ours w/o AME | 115.2 | 67.5 | 0.38 | 单尺度输入 |
| Ours w/o TPD | 116.5 | 69.0 | 0.38 | 单查询多帧 |
| Ours | 106.5 | 65.0 | 0.43 | 完整模型 |

表后解释：完整模型在三指标上最佳，移除任一组件均导致 MPJPE 上升约 8 至 10 毫米，说明 AME 与 TPD 互补且 TPD 的贡献略大，与论文“TPD 对性能提升最显著”的判断一致。反例是单尺度或单查询仍能运行但精度回落，提示在资源受限时可退化为轻量变体，代价是细粒度动作的区分度下降。

按人数对比进一步显示单人与 3 人间的差距。

| 方法 | 单人 MPJPE [mm] | 单人 PA-MPJPE [mm] | 单人 PCKh @0.5 | 3 人 MPJPE [mm] | 3 人 PA-MPJPE [mm] | 3 人 PCKh @0.5 |
| --- | --- | --- | --- | --- | --- | --- |
| Shibata et al. [24] | 111.3 | 65.8 | 0.39 | 124.5 | 73.3 | 0.39 |
| Yan et al. [30] | 108.7 | 64.1 | 0.40 | 122.4 | 71.2 | 0.38 |
| Ours | 95.0 | 58.9 | 0.47 | 111.2 | 68.1 | 0.44 |

表后解释：所有方法在 3 人上均退化，SoundMHPE 的退化幅度相对较小且在单人与 3 人上均保持领先，支持其对多人干扰的鲁棒性。未胜出边界是 3 人 MPJPE 仍比单人高约 16 毫米，说明人数增加的叠加与互反射问题未被完全解决。

窗口选择消融如下，比较 4 种窗长组合。

| 窗口组合 | MPJPE [mm] | PA-MPJPE [mm] | PCKh @0.5 | 说明 |
| --- | --- | --- | --- | --- |
| (L/4),(L/2),L | 118.5 | 69.6 | 0.37 | 高时间聚焦 |
| (L/2),L,2L | 117.0 | 68.9 | 0.37 | 平衡范围 |
| L,2L | 114.5 | 67.9 | 0.38 | 双尺度 |
| L,2L,4L | 106.5 | 65.0 | 0.43 | 本文采用 |

表后解释：L,2L,4L 组合最佳，且随频率分辨率降低而性能下降，说明高频分辨率对分辨多人细微运动至关重要。代价是更长窗带来时间模糊，需与 Nout=8 的帧级对齐配合使用。

注意力切分消融如下。

| 编码器注意力 | 解码器注意力 | MPJPE [mm] | PA-MPJPE [mm] | PCKh @0.5 |
| --- | --- | --- | --- | --- |
| Standard | MSA+ISA | 111.7 | 65.1 | 0.40 |
| TSA+FSA | Standard | 114.4 | 67.9 | 0.39 |
| TSA+FSA | MSA+ISA | 106.5 | 65.0 | 0.43 |

表后解释：编码器与解码器同时使用定制注意力时最佳，任一侧退化为标准注意力均导致 MPJPE 上升 5 至 8 毫米，验证了解耦设计的必要性。论文还报告了在 PiW WiFi 数据集上的跨模态验证，去除波形相关的多尺度 STFT 后仍能超越单帧与多帧 WiFi 基线，但该部分与声学主任务的物理机制不同，需单独评估。

### 哪些条件未被验证？部署时还需补哪些测试？

论文明确指出声学姿态估计仍处早期，泛化到未见反射环境是挑战。为此做了在房间内放置隔板的测试，显示在不同反射特性下仍能估计粗略姿态，但该测试为定性展示，未给出隔板数量、材质与距离的量化指标，也未报告在该新环境下的 MPJPE 等数值，因此不能作为泛化能力的定量保证。

未评测的边界包括：超过 3 人的场景、更复杂的遮挡与非隔音室的强噪声、不同扬声器与麦克风型号或摆位的敏感性、以及实时性与计算开销。原文未报告推理帧率、延迟与参数量，训练预算仅给出 500 轮与学习率，未提供单轮时长或硬件配置，部署成本需自行测量。

另一个限制是数据集的受控性：AMP 在同一房间内采集，动作虽随机但仍为预设集合，真实街景或工作场所的多人交互、服饰与体型多样性覆盖有限。跨组评估虽避免了被试泄露，但未做跨房间或跨设备的评估，结论的外推需谨慎。

最后，置信度阈值、匈牙利匹配的代价权重、以及多尺度谱的归一化方式等细节在原文中未完全展开，复现时需通过消融或小规模搜索确定，并记录对指标的影响。该缺项不影响主结果的可比性，但影响直接部署的稳定性。

### 若要复现，应按什么顺序准备数据、模型与评估？

复现的第一步是重建数据管线。按论文描述准备 1 对扬声器与 4 通道 Ambisonics 麦克风，发射 TSP 信号并以固定间隔 L 同步采集声信号与动捕姿态，姿态帧率 20 fps，骨架 21 关节。若无法自采，可先用 AMP 的划分逻辑模拟：15 人分 3 组，每组单人 72 分钟、双人 24 分钟、3 人 24 分钟，组内随机配对与位置，动作覆盖行走、扭转、举臂等，声信号按 Nin=24、Nout=8 的滑窗组织，Mel 带数 B=128。

第二步是实现多尺度谱。分别用窗长 L、2L、4L 做 STFT 并配 B、2B、4B 的 Mel 滤波器组，取对数后沿时间拼接，线性层统一到 E=256，展平为时-通道 token。注意保持 3 组谱的时间对齐与通道维度，避免插值。

第三步是搭建 AME 与 TPD。AME 堆叠 Nenc=3 块，每块含 TSA、FSA 与 FFN；TPD 堆叠 Ndec=2 块，每块含 MSA、ISA、Cross-Attention 与 FFN，查询数 M×(Nout+1)=135，初始化时加入时间与身份嵌入。损失按式(2) 以 λ=0.5 加权，匈牙利匹配后计算 MSE 与 BCE，优化器 AdamW，权重衰减 1e-4，学习率 5e-5，训练 500 轮。

第四步是评估。采用跨组三折平均，报告 MPJPE、PA-MPJPE 与 PCKh@0.5，注意 PCKh 阈值为头颈距离的一半。对比时应包含可运行的声学与 WiFi 基线并在同一数据上重训，避免使用预训练权重带来的偏差。最后补充隔板等未见环境的定性测试，并自行测量推理延迟与显存占用，以补全原文未报告的部署指标。

### 何时值得尝试声学多人姿态？下一步应验证什么？

当应用场景需要无光照依赖、关注隐私且可容忍受控声学环境时，声学多人姿态值得尝试。典型条件是室内固定扬声器与麦克风布局、人数不超过 3 人、动作幅度适中且对遮挡有一定要求。此时 SoundMHPE 的多尺度编码与帧级查询解码提供了可复现的基线，其在 AMP 上的三指标优势与按人数、窗口、注意力切分的系统消融为选型提供了依据。

不适合直接部署的情况包括：强混响或强噪声的开放空间、需跨房间或跨设备泛化、实时性要求极高且硬件受限。论文的隔板实验仅为定性，跨环境与跨设备的定量评估仍是空白，需在目标房间重新采集小规模标定数据并测量 MPJPE 的迁移损失。

下一步验证应聚焦三点：一是量化未见环境的退化曲线，控制隔板数量、距离与材质并报告指标；二是测量推理成本，包括多尺度 STFT 与 135 查询带来的计算与显存开销，以及 Nout=8 滑窗的延迟；三是扩展人数与动作多样性，检验查询数 M 与 Nout 的扩展性与匈牙利匹配的稳定性。完成这些后，才能判断声学方案在具体部署中是否优于 RGB 或无线方案的权衡。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.04902)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-08/)
