---
title: "Harmonica: Accurate and Lightweight Instrument-Agnostic Music Transcription"
date: 2026-09-08
draft: false
tags: [音乐转录, CNN, 音乐, 高效推理, 端侧运行]
categories: [论文速递]
description: "针对单乐器身份未知的乐器无关转录，Harmonica 以 CQT 输入与多深度谐波卷积在多源温度采样训练下实现 26.3K 至 15.1M 的规模化，x-large 在多数测试集上取得最高帧 F1，medium 以 848.5 倍实时保持可比精度，nano 以 1622.5 倍实时仍显著超过同量级基线。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.04640"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "多深度谐波卷积如何让乐器无关转录在小参数下仍保持高帧精度"
paper_digest_original_title: "Harmonica: Accurate and Lightweight Instrument-Agnostic Music Transcription"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.04640"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.04640.pdf"
paper_digest_primary_task: "音乐转录"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.transcription","label":"音乐转录"},{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"}]
paper_digest_primary_method: "CNN"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对单乐器身份未知的乐器无关转录，Harmonica 以 CQT 输入与多深度谐波卷积在多源温度采样训练下实现 26.3K 至 15.1M 的规模化，x-large 在多数测试集上取得最高帧 F1，medium 以 848.5 倍实时保持可比精度，nano 以 1622.5 倍实时仍显著超过同量级基线。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Longshen Ou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Héctor Martel"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Joe Hennessy-Priest"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Taemin Cho"}]
paper_digest_abstract_sha256: "2cfbac4bdf76852ee28d6f1dbbb5ebd813d01826629df86d3f5481bbf3cc1fd9"
paper_digest_sidecars: {"citation.bib":{"sha256":"5524104900f2074b7f4f72f53b4cb930b1503d9ea6efb15e84bb4caf204b6b6f","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04640/citation.bib"},"citation.json":{"sha256":"d0261cb7c003049304d22455dbd59526905154947b1da13ed7165c0d83d87c5d","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04640/citation.json"},"citation.ris":{"sha256":"79f242feb358cfacff5488739ea5289c063b724cd187678e258a97896980e4ef","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04640/citation.ris"},"rethink-context.json":{"sha256":"58b2f00ffcc4254c19c1e2cb396078f76750d586161ee7d3d9a369c22e6a4b0c","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04640/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3fc3d5fae3892a9ce06fd55ff8ade3a5cf9c108be2a57e3c0b7f0322a4de869d"
paper_digest_api_reader_plan_sha256: "79e85121b1b1fb159e8f55736eb45a9364710530fcdbd4f55e94c6082947833a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d6e744199fbd13ad8dd3fd70101dfc51bb299b383c007b78131dea4964b6b044"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "a5fbc499ef1df3a8fb4d135e2acfdbb8b17e62a3361a4badfe7787928490c8a4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0342d9d265c68575c8add3d627d8c804913bc57a5c9f8891fad2af051ac2516c"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "92b07498814d1b595434c3669f169a85240cdd3b6343204853dddc9f5df6d201"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 多深度谐波卷积如何让乐器无关转录在小参数下仍保持高帧精度

> 英文题目：*[Harmonica: Accurate and Lightweight Instrument-Agnostic Music Transcription](https://arxiv.org/abs/2609.04640)*

> 标签：#音乐转录 | #CNN | #音乐 | #高效推理 | #端侧运行
>
> 评分：**7.5/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5


## 👥 作者与机构

- Longshen Ou：机构信息未在 arXiv HTML 中可靠披露
- Héctor Martel：机构信息未在 arXiv HTML 中可靠披露
- Joe Hennessy-Priest：机构信息未在 arXiv HTML 中可靠披露
- Taemin Cho：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

乐器无关音乐转录（Instrument-Agnostic Music Transcription）需从单乐器音频中恢复与乐器无关的音符事件集合，难点在于跨乐器音色差异大、谐波重叠严重且低音区基频在短时傅里叶变换（Short-Time Fourier Transform, STFT）中难以分辨。Harmonica 以常数 Q 变换（Constant-Q Transform, CQT）谱图为输入，先经浅层前端下采样至每半音 1 频点，再由多层谐波卷积（Harmonic Convolution）与残差块交替构成的主干在多抽象层级上聚合谐波与次谐波证据，最后由频分组长短期记忆网络（Frequency-Grouped Long Short-Term Memory, FGLSTM）三头分别预测起始（onset）、持续（sustain）和结束（offset）帧级激活并经阈值解码为音符。相较于输入端谐波堆叠（harmonic stacking）、单层谐波卷积或谐波注意力（harmonic attention），多深度谐波卷积在不同表征层级反复校正基频假设并抑制泛音误判，同时以移位拼接加 1×1 卷积替代多分支空洞卷积实现参数高效化。在 8 个数据集构成的乐器无关基准上，x-large 模型在全部域内测试集取得帧级 F1 第一，medium 模型以 679K 参数达到近最优精度且推理速度超越全部基线。结论适用于单轨独奏场景，对多乐器混合的声源归属、极端失真音色外推及长时结构建模尚未验证。训练采用 100k 步、批大小 8 的有监督流程，推理在 RTX 4090 上可达千倍实时，medium 模型在 iPhone 15 Pro Max 上经 LiteRT 仍达 32.1 倍实时且峰值内存低于 445 MB。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决什么输入到什么输出？为何要强调乐器无关？

输入是一段采样率为 fs 的单乐器音频波形 x，长度为 L，乐器身份未知。目标是恢复一组音符事件 y={(si,ei,pi)}，其中 si 与 ei 为以秒计的 onset 与 offset 时刻，pi 为 21 到 108 的 MIDI 音高，音符数量 N 事先未知，同一音高上不允许时间重叠。系统先用固定时频变换 Φ 把 x 映射为 X∈R^{F×T}，F 为频率格数，T=⌈L/h⌉为帧数，h 为跳长。随后学习网络 fθ 输出 3 个帧级矩阵 Y^on、Y^sus、Y^off，维度为|P|×T，取值在 0 到 1 之间，分别表示 onset、sustain 与 offset 的激活概率。时间分辨率继承自 Φ，频率轴被压缩到每半音一格，与目标音高轴对齐。最后用确定性解码 g 对 Y^on 做峰值阈值检测并沿 Y^sus 跟踪直到低于另一阈值，得到音符序列 y^=g(Y^on,Y^sus)，Y^off 仅作辅助监督不参与解码。

强调乐器无关的原因在于现实录音涉及多样音色，而多数既有方法在单一乐器上开发与评测，难以直接迁移。论文进一步指出多乐器混合转录的前提是单乐器无关转录可靠，否则在混合中归因声源更不可靠。另一个现实约束是计算效率：近年模型为追求精度不断增大，难以部署到算力与内存受限设备，且注意力与序列到序列范式并非在所有规模下都带来稳定收益。因此需要一条在精度与效率前沿上同时推进的架构路线。

沿一个样本走一遍流程有助于建立直觉：5 秒吉他片段经 CQT 得到每半音 3 格的时频图，前端与主干把它逐步精炼为每半音 1 格的 3 类概率图，再经阈值解码得到离散音符。整个过程不依赖乐器标签，模型必须从谐波结构本身判断基频归属。

### 已有路线如何划分？各自的已知局限是什么？

按任务设定可分为乐器无关、多乐器混合与单乐器专用 3 类。乐器无关的代表是 Basic Pitch 的轻量 CNN 与 HFSFormer 的 CNN-Transformer，两者在 MAESTRO 与 GuitarSet 上有报告，但整体精度仍有较大提升空间。多乐器混合以 MT3、YourMT3、MIROS、MuScriptor 为代表的序列到序列路线为主，依赖大规模数据与大模型学习声学到符号的映射，自回归解码有助于 onset，但 offset 依赖对持续声学证据的落地分析，仍较困难。

按建模范式可分为序列到序列与帧级两类。帧级路线如 Onsets and Frames、hFT-Transformer、PerceiverTF 无需重型自回归解码器，效率更高，但仍需足够容量学习声学到音乐结构的映射，实验中 hFT-Transformer 即使参数量是 nano 的约 200 倍仍落后。另一些工作引入 semi-CRF、边界回归或最优传输损失来强化时序定位，但其在乐器无关场景的有效性尚未明确。

谐波聚合是提升帧级效率的另一个分支。HPPNet 的 HD-Conv、TriAD 的 3 维谐波层、SFT-CRNN 的注意力谐波聚合、HFSFormer 对谐波聚合特征的频域可分 Transformer，都在不同程度上扩展了频域感受野，使浅层网络也能覆盖谐波关系。Basic Pitch 的谐波堆叠与 HPPNet-tiny 的 HD-Conv 也展示了极轻量模型的可能性。但既有卷积式聚合多为单次聚合，且哪种策略对乐器无关最有效、是否应在多层抽象上重复聚合，仍不清晰，这正是本文要系统比较的起点。

**帧级预测 × 序列到序列：** 帧级预测负责对每个时频格直接输出 onset、sustain、offset 的激活概率，依赖局部声学证据；序列到序列负责用自回归解码器从上下文推断符号序列。二者搭配的对比意义在于：前者无需重型解码器、效率更高且对持续音的声学证据更敏感，后者利于 onset 的上下文推断但对 offset 的落地证据建模较弱，论文据此解释两者在帧 F1 上的分化。

### 评价要回答什么问题？如何保证跨乐器与公平比较？

核心评价问题是：单一模型能否在未知乐器身份下准确转录多种有音高乐器，以及哪种架构在规模化时收益更稳定。为此论文建立统一的多源乐器无关评测协议，覆盖 8 个测试集：MAESTRO、MAPS、GuitarSet、GAPS、EGDB、GOAT、URMP-stem、Slakh-stem。MAPS 的 Disklavier 子集作为域外钢琴测试，其余 7 个既用于训练也用于测试；URMP 与 Slakh2100 采用分轨音频而非混音。

训练采样采用温度采样，5 秒片段按与各源小时数成比例的(ni/∑nj)^α 抽取，α=0.5 以提升小源权重，避免被大源淹没。官方验证集被并入训练集，另按相同温度采样抽出 4.3 小时作为开发集，用于监控与阈值选择。

指标包含音符级与帧级两类。音符级采用 OnP 与 OnPOff，分别要求 onset+ 音高匹配与额外 offset 匹配，onset 容差 50 毫秒，offset 容差 max(0.2d,50 ms)，d 为参考音长。帧级为 Frm，统一以 25 毫秒帧从预测音符导出后计算，以便不同时间分辨率的基线公平对比。速度以 RTX 4090 上的逆实时因子 xRT 报告。

对比的 11 个基线涵盖序列到序列、通用帧级与谐波聚合 3 类，其中 8 个在相同多源协议下重训，其余 3 个用发布权重评估；Basic Pitch 与 MT3 因训练数据与本研究高度重叠而排除重训，MuScriptor 因含合成预训练与强化学习后训练而采用其 medium 权重直接评估。

### Harmonica 的整体数据流是什么？

Harmonica 的输入是 16 kHz 音频上计算的 CQT 频谱，每半音 3 格，帧间隔 32 毫秒。先经两块 ResNet 前端，每块含两个 5×5 卷积，通道数为 c1；随后用 3×1、步长 3 的跨步卷积把频率轴下采样到每半音 1 格并把通道扩展到 c2，使输入轴与输出音高轴对齐。

主干由 l 个 trunk block 堆叠，每个 block 配对一层谐波卷积与一块 ResNet。谐波卷积在同一帧内跨谐波与次谐波频率格聚合信息，随后做归一化、残差连接与 ReLU；ResNet 块含两个 3×3 卷积与残差连接。多层堆叠使谐波聚合在多级抽象上重复发生。主干输出分三头：onset、sustain、offset，每头为单层频率分组 LSTM 后接线性投影，在每个时-音高位置输出一个标量概率。

下面的架构图把这 1 流程具体化，读图时先沿主路径看张量形状与下采样位置，再看谐波层与 ResNet 的交替如何组织信息流。

> **看图路径：** 1. 从顶部 Audio 到 CQT Spectrogram 再到 Frontend Block×2，确认 3×1 步长 3 如何把每半音 3 格压缩为 1 格；2. 在 Trunk Block×l 内部观察 Harmonic Conv 14 offsets 与 ResNet 3×3 的交替连接与残差回路；3. 在右侧放大图中跟随 f 及其谐波 f2 至 f5 与次谐波 f/2 至 f/5 的连线，确认移位聚合的频率对应；4. 在底部对比 Onset Head 与 Pitch Head 到 Sustain Prediction 再解码为 Note Sequence 的数据流向

[![原论文 Figure 2：Model architecture of Harmonica.](https://arxiv.org/html/2609.04640v1/model_architecture.png)](https://arxiv.org/html/2609.04640v1/model_architecture.png)

*论文图 2。原论文 Figure 2:：“Model architecture of Harmonica.”。*

该图左侧展示了 Frontend Block×2 与 Trunk Block×l 的堆叠结构，右侧放大了谐波卷积的移位聚合思想：以 f 为中心的多个谐波与次谐波位置被汇聚到同一输出格。底部则展示了三头预测与解码的衔接，onset 预测负责定位起点，sustain 预测负责延续判断，二者共同决定音符边界，offset 头仅作辅助监督不参与解码。图中虚线框对应谐波卷积的输入输出特征图，箭头密度直观体现了 14 个偏移的聚合范围。

### 关键组件如何计算？为何选择这些实现？

时频表示选择 CQT 而非 STFT 及其变体，理由是 STFT 在低音区频率分辨率不足，例如 16 kHz 上 2048 点窗的格距约 7.8 Hz，已接近 C3 与 C#3 的基频间隔，难以分辨相邻低音的基频。CQT 的对数间隔在全音域保持每半音恒定分辨率，使输入轴与输出音高轴天然对齐，模型只需做原位归因而非学习频率到音高的映射，这有助于参数高效。

**CQT 频谱 × 半音对齐：** CQT 频谱负责提供对数间隔的频率表示，使低音区相邻半音也能被分辨；半音对齐负责把输入频率轴与输出音高轴按每半音一格对应起来。二者搭配的理由是避免模型再学习频率到音高的映射，转而做原位归因：直接判断能量应归属哪个基频格，从而降低学习难度并支持参数高效的卷积结构。

网络输出的数学形式在论文中明确为帧级三矩阵预测，其符号与维度定义如下。先理解符号：X 为 CQT 频谱，|P|为 88 个 MIDI 音高，T 为帧数，fθ 为学习网络，Y^on、Y^sus、Y^off 为 3 类激活。

\[\bigl(\hat{Y}^{\mathrm{on}},\hat{Y}^{\mathrm{sus}},\hat{Y}^{\mathrm{off}}\bigr)=f_{\theta}(X),\hskip 20.00003pt\hat{Y}^{(\cdot)}\in[0,1]^{|\mathcal{P}|\times T},\]

该式说明模型对每个音高与每帧同时给出 3 个概率，时间分辨率继承自 CQT，频率轴已压缩到每半音一格。训练时三者均参与二元交叉熵求和，推理时仅用前两者解码。

谐波卷积的核心假设是：判断某频格是否为基频，需考察其谐波位置是否有能量支撑、次谐波位置是否有更低基频的证据。由于这些位置在对数频率轴上间距不均，无法用单一空洞卷积实现。HD-Conv 用多分支 3×1 空洞卷积分别覆盖不同谐波并求和，但中心格被所有分支重复参数化。Harmonica 改为移位聚合：按半音偏移集合{o1,…,oM}将特征图沿频率轴移位，通道维拼接后用单个 1×1 卷积把 c2M 通道映射回 c2，每个谐波位置仅参数化 1 次。在 7 个谐波与 7 个次谐波的配置下，谐波层参数相对 HD-Conv 减少 28.5% 且性能保持。

**谐波卷积 × ResNet 块：** 谐波卷积负责在同一帧内跨谐波与次谐波位置聚合证据，用来增强基频假设或抑制泛音误判；ResNet 块负责用 3×3 卷积在时频局部做去噪与锐化。二者搭配的理由是分工互补：谐波卷积做谐波结构的显式校正，ResNet 块做局部置信度的清理与增强，交替堆叠使表示在多层抽象上逐步精炼。

主干中谐波层与 ResNet 的分工在探针实验中得到印证：谐波层把能量集中到基频并抑制泛音位置的误激活，ResNet 层则在模糊区做去噪、在清晰峰上做锐化，二者交替使置信度逐步跨过检测阈值。若锐化发生在错误格，后续谐波层会因缺乏谐波支撑而纠正。

### 如何训练与推理？阈值与分块如何处理？

训练数据为多源 5 秒片段，按温度采样 α=0.5 抽取，批量大小 8，优化器为 AdamW，余弦学习率调度，初始学习率 2×10^-4，训练 100k 步，损失为 onset、sustain、offset 三项二元交叉熵之和。模型变体通过改变 l、c1、c2 覆盖不同预算：从 nano 到 x-large，(c2,l) 分别为(16,2)、(32,3)、(64,4)、(128,5)、(256,6)，且 c1=c2/4，全网采用实例归一化而非批量归一化。YourMT3+ 与 PerceiverTF 为收敛训练 2 倍步数，hFT-Transformer 因收敛慢训练 10 倍步数，其余基线与本文模型保持相同计算预算。

推理时为控制长曲内存，采用分块推理的 half 策略：块长 l=5 秒、半重叠，仅取每块中央 l/2 拼接为全曲预测，与训练片段长度一致。阈值对帧级模型影响显著，论文对需要阈值的模型在开发集上做 2 阶段网格搜索：onset 阈值在 0.1 到 0.85 以 0.05 步长先以 OnP F1 最优选定，再固定该值以 OnPOff F1 最优选定帧阈值。

需要说明的缺项是：论文未报告梯度是否在某些分支上停止、也未报告除阈值外是否对解码器做额外后处理；这些实现细节若未在代码中披露则视为未验证，不从模型名称推定。训练时三头均有监督，但解码仅依赖 onset 与 sustain，这一不对称设计是帧级模型与序列到序列模型在 offset 上表现分化的关键。

### 数据与划分如何构成？开发集与测试集如何分工？

数据集信息按用途分为训练、开发与测试三部分，训练统计在抽出开发集之前计算。开发集共 98 首 4.3 小时，按与训练相同的温度采样从各源训练划分中抽取并从训练中剔除以防泄漏，用于阈值搜索与检查点选择。测试集共 2270 首 145.0 小时，包含域外 MAPS 与 7 个域内集的分轨测试。

下表概括了各数据集的原始划分、记录数与小时数，便于核对多源采样的来源分布与开发集的抽样比例。阅读时先确认每个数据集的训练与测试小时数量级差异，再核对开发集是否在各源上均有覆盖。

| Purpose | Dataset | Original Split | #Record | Hour |
| --- | --- | --- | --- | --- |
| Train | MAESTRO | Train | 962 | 159.2 |
| Train | MAESTRO | Valid | 137 | 19.4 |
| Train | GuitarSet | Train | 480 | 3.9 |
| Train | GAPS | Train | 270 | 14.8 |
| Train | EGDB | Train | 1290 | 9.7 |
| Train | GOAT | Train | 870 | 31.3 |
| Train | URMP-stem | Train | 117 | 3.9 |
| Train | Slakh-stem | Train | 13546 | 948.2 |
| Dev | MAESTRO | Train and valid | 7 | 1.0 |
| Test | MAESTRO | Test | 177 | 20.0 |

该表显示训练总量约 1385.5 小时，其中 Slakh-stem 占主导，MAESTRO 次之，其余吉他与管弦源合计约数十小时，这解释了为何需要温度采样上采样小源。开发集虽小但覆盖全部 7 个域内源，测试集则在 Slakh-stem 上提供最大规模的乐器族多样性评估。表中小时数保留 1 位小数，记录数与小时数的比例反映了各源平均曲长差异。

**温度采样 × 开发集：** 温度采样负责按(ni/∑nj)^α 以 α=0.5 对多源 5 秒片段进行采样，使小数据源不被大源淹没；开发集负责在相同温度采样下抽取 4.3 小时 98 首用于阈值搜索与早停。二者搭配的理由是保持训练与验证的源分布一致，避免用官方验证集的大源偏置误导阈值选择。

评估时帧级 F1 统一以 25 毫秒帧从音符预测导出，避免不同模型时间分辨率带来的不可比；速度与参数量分别以 xRT 与#Param 报告，硬件为 RTX 4090，移动端另有 iPhone 15 Pro Max 的 ONNX 与 LiteRT 实测作为补充。温度采样与开发集的同分布设计保证了阈值搜索与训练采样的一致性。

### 主结果在什么条件下与谁比？关键数字支持什么判断？

主比较在统一的多源乐器无关协议下进行，指标为音符级 OnP 与帧级 Frm，速度为 xRT。基线包含序列到序列、通用帧级与谐波聚合 3 类共 11 个模型，其中 8 个重训、3 个用发布权重。下图先给出开发集上帧 F1 随参数量的前沿，展示不同范式随规模化的收益差异。

> **看图路径：** 1. 横轴为参数量对数刻度，纵轴为开发集帧 F1，对比 Harmonica 四档与两类基线的包络线位置；2. 定位 nano 26.3K 与 medium 679K 在曲线上的高度，观察其相对于同参数量基线的纵向优势；3. 查看 x-large 15.1M 在最右端是否仍高于所有对比点，判断规模化收益是否延续

[![原论文 Figure 1：Frame F1 versus model size on the held-out multi-source development set.](https://arxiv.org/html/2609.04640v1/size_vs_perf.svg)](https://arxiv.org/html/2609.04640v1/size_vs_perf.svg)

*论文图 1。原论文 Figure 1:：“Frame F1 versus model size on the held-out multi-source development set.”。*

图中横轴为参数量对数刻度，纵轴为开发集帧 F1。Harmonica 的四档在各自参数量附近均位于包络线顶端，x-large 在最右端仍保持最高帧 F1，medium 在 679K 附近已超过多数基线，nano 在 26.3K 处显著高于 Basic Pitch。序列到序列基线随参数增大并未稳定提升，部分点甚至低于更小的帧级模型，说明单纯增大自回归模型并非最优的规模化路径。图中 Basic Pitch 被单独标为极小参数点，MT3 与 MuScriptor 等大模型点位于右下，体现了精度与效率的权衡。

更细的按数据集对比显示 3.1 致结论。第一，x-large 在全部域内测试集上帧 F1 均取得最高值，音符 OnP 仅在 URMP-stem 上略低于 SFT-CRNN，其余均领先。第二，medium 在域内各列上与最强基线可比，同时以 848.5 倍实时快于所有基线，说明精度与速度可兼得。第三，nano 以 1622.5 倍实时、26.3K 参数达到开发集帧 F1 0.796，比 Basic Pitch 高 14.6 个百分点，且在除 URMP 外的所有测试集上大幅领先同量级基线；与 PerceiverTF 相比，nano 用约 1/133 参数实现可比精度且快 10 倍以上。

基线侧也呈现可解释的模式。YourMT3+ 重训后 OnP 可比但帧 F1 落后，符合序列到序列对 offset 建模较弱的预期；MT3 在失真电吉他 GOAT 上 OnP 仅 0.291，显著失效；SFT-CRNN 在 GAPS 上 OnP 0.938 但帧 F1 仅 0.415，因大量检测到的 onset 未匹配到 offset 而产生异常长音；MAPS 域外钢琴上 HPPNet-sp 最佳，符合其面向钢琴的设计。

按乐器族的分解进一步检验泛化。Slakh2100 的 11 个有音高族上，x-large 在每一族上均为最强且分布更均衡，而 PerceiverTF、HFSFormer 等在 Chromatic Percussion 与 Synth Pad 等难族上明显下滑，说明多深度谐波卷积对多样音色的鲁棒性更强。

> **看图路径：** 1. 沿雷达图 11 个乐器族轴向比较 Harmonica x-large 的外圈覆盖度；2. 在 Chrom. Perc. 与 Synth Pad 等难族上对比基线向内凹陷的幅度；3. 确认是否存在某族上 Harmonica 被超越，若有则记录具体族与差距方向

[![原论文 Figure 3：Frame F1 per instrument family on Slakh2100.](https://arxiv.org/html/2609.04640v1/performance_per_inst.svg)](https://arxiv.org/html/2609.04640v1/performance_per_inst.svg)

*论文图 3。原论文 Figure 3:：“Frame F1 per instrument family on Slakh2100.”。*

该雷达图的外圈越靠外表示帧 F1 越高，Harmonica x-large 的多边形在所有轴向上均贴近外圈且形状更圆，基线则在个别轴向上显著内凹，印证了跨族均衡性的差异。图中 11 个轴按数据量排序，Piano 与 Strings 等大族上各模型差距较小，难族上差距拉大。

为便于复述关键权衡，下表用原文逐字证据整理模型规模、速度与代表性精度及参数效率的直接报告，避免自行计算百分比或四舍五入。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 开发集 | 帧 F1 | Basic Pitch 低 14.6 个百分点 | nano 0.796，26.3K，1,622.5× real time | 同量级轻量模型 |
| 谐波层 | 参数量 | HD-Conv 为参照 | 移位聚合减少 28.5% | 7 谐波 +7 次谐波配置 |
| 消融 | OnP/OnPOff | 无谐波聚合时分别低 6.7/11.0 点 | 多深度移位聚合最优 | 单层与注意力变体 |

该表第一行说明极轻量仍可取得显著精度优势，第二行说明参数效率改进并非以性能为代价，第三行说明谐波聚合本身对音符级指标至关重要。阅读时需注意百分点与相对百分比的区别：14.6 为百分点差，28.5% 为相对减少，二者不可混用。表中所有数字均来自原文连续句，未做四舍五入或单位换算。

### 谐波聚合的哪种做法更有效？单层与多层有何差异？

消融在 medium 变体上保持其他结构不变，仅替换谐波聚合器，并在开发集上以 OnP、OnPOff、Frm 三指标平均 3 次随机种子报告。比较对象包括无谐波聚合、输入端谐波堆叠、谐波注意力、单深度移位聚合卷积、多深度移位聚合卷积以及多深度 HD-Conv。

下表展示了不同聚合策略的精度对比，深度列区分单层与多层，指标方向均为越高越好。阅读前先确认所有行均在同一模型规模与同一开发集上评估，公平条件为仅聚合器不同。

| Harmonic Aggregation | Depth | OnP | OnPOff | Frm |
| --- | --- | --- | --- | --- |
| No harmonic aggregation | - | .822 | .635 | .823 |
| Harmonic stacking [2] | Single | .851 | .688 | .848 |
| Harmonic attention [29] | Multi. | .877 | .737 | .868 |
| Conv, w/ shift-and-agg. | Single | .877 | .731 | .867 |
| Conv, w/ shift-and-agg. (Ours) | Multi. | .889 | .745 | .876 |
| Conv, w/ HD-Conv [30] | Multi. | .886 | .745 | .877 |

表后解读聚焦三点。第一，移除所有谐波层导致 OnP 下降 6.7 点、OnPOff 下降 11.0 点，说明谐波聚合对转录至关重要。第二，在各聚合器中，输入端谐波堆叠最弱，谐波注意力与单深度卷积在 OnP 与 Frm 上相当，但均低于多深度卷积；多深度相对单深度在 OnPOff 上提升 1.4 点，支持在多级抽象上重复聚合比单次聚合更有效的中心论断。第三，多深度移位聚合与多深度 HD-Conv 分数基本一致，但后者每谐波层多 39.9% 参数，说明移位聚合在保持性能的同时更省参数。

**谐波堆叠 × 移位聚合：** 谐波堆叠负责在输入端 1 次性把谐波位置拼接到通道维；移位聚合负责把特征图按半音偏移量移位后拼接，再用 1×1 卷积 1 次性聚合。二者搭配的对比在于：堆叠只在浅层聚合 1 次，移位聚合可在深层重复使用且每个谐波位置只参数化 1 次，从而在保持性能的同时减少谐波层参数。

探针实验进一步揭示层间分工。冻结 medium 权重后在每层输出上训练线性探针预测 sustain 矩阵，以探针帧 F1 衡量该层表示对音符信息的可线性解码程度。结果显示前端已能恢复大量音符信息但在谐波位置残留大量误激活，谐波层负责把能量集中到基频并抑制泛音，ResNet 层则在模糊区去噪、在清晰峰上锐化以提升召回，错误锐化会由后续谐波层纠正。

> **看图路径：** 1. 按编号 1 到 12 跟随线性探针 F1 的变化，区分前端、Harmonic、ResNet 各阶段的提升或回落；2. 在 Harmonic 层后观察泛音位置能量是否被压制，在 ResNet 层后观察模糊区是否被清理或锐化；3. 对比最后 Model frame head 与 Frame label 真值的钢琴卷形态，判断剩余误差类型

[![原论文 Figure 4：Readouts from the linear probe of each layer’s output.](https://arxiv.org/html/2609.04640v1/probe_readouts.png)](https://arxiv.org/html/2609.04640v1/probe_readouts.png)

*论文图 4。原论文 Figure 4:：“Readouts from the linear probe of each layer’s output.”。*

该图按层编号展示 14 幅时-音高探针读出，标题给出每层探针 F1。观察时先对比第 3 幅前端块与第 5 幅 Harmonic 1 的背景干净度，再对比第 6 幅 ResNet 1 对模糊区的清理效果，最后跟踪第 9 幅 Harmonic 3 对错误锐化的纠正与第 12 幅 ResNet 4 的最终锐化，底部两幅则作为模型帧头与真值的参照。图中 F1 从前端的 0.54 经多次波动最终升至 0.88，体现了交替精炼的过程。

### 哪些边界尚未验证？哪些数字不能推广？

第一，评测虽覆盖 8 个测试集与十一族乐器，但仍限于论文所列数据源与分轨设置，混合音频的多乐器同时转录未在主表中使用混音评估，跨更广录音条件与演奏技法的泛化仍待验证。第二，速度与内存的移动端实测仅在 iPhone 15 Pro Max 上对 medium 模型报告，CPU 7.0 倍实时 382.6 MB、GPU 32.1 倍实时 445.0 MB，且实现经额外优化，架构与参数量不变但延迟与内存会随设备与运行时而变，不能直接推广到其他硬件。第三，阈值搜索在开发集上以 OnP 与 OnPOff 为目标分阶段进行，最优阈值依赖开发集分布，若部署分布偏移则需重搜。

第四，谐波聚合的配置固定为 7 谐波与 7 次谐波，其他谐波数或偏移集合的效果未报告。第五，论文未提供统计显著性检验与置信区间，3 次种子的平均值不能替代方差分析，单点超越需谨慎解读为趋势而非每族每曲必胜。

此外，帧级 F1 统一以 25 毫秒帧从音符导出，虽然保证了跨分辨率公平，但与直接帧预测的原始分辨率存在转换损失，比较时需注意指标定义的一致性。序列到序列模型的 offset 困难在论文中为解释性分析，未提供 offset 单独的消融对照，不能直接归因于解码器结构本身。

### 复现需要哪些具体设置？如何避免常见误解？

数据准备上需按论文附录的划分复现：MAESTRO 采用版本 3，GuitarSet 按进行 1、2 训练、进行 3 测试并把麦克风与放大器视为独立样本，URMP 取 1、2、12、13、24、25、31、38、39 为验证其余训练，Slakh 合并 Strings 与 String Ensemble 为 11 族并仅用分轨有音高乐器，MAPS 的 ENSTDkAm 与 ENSTDkCl 仅作域外测试。训练前从各源训练划分按温度采样抽出 98 首 4.3 小时作为开发集并从训练中移除。

模型配置上 CQT 为每半音 3 格、帧间隔 32 毫秒，前端两块 5×5 ResNet，跨步 3×1 下采样到每半音 1 格，主干 l 个谐波卷积与 3×3 ResNet 交替，三头各为单层频率分组 LSTM 加线性投影。规模由(c2,l) 决定，c1=c2/4，归一化用实例归一化。优化为 AdamW、余弦调度、初始 2×10^-4、批量 8、100k 步，三项二元交叉熵求和。

下表把规模、训练与部署的关键可复现参数集中呈现，便于逐项核对而非依赖记忆。

| 配置项 | 取值 | 说明 | 来源 | 备注 |
| --- | --- | --- | --- | --- |
| CQT | 每半音 3 格，32 毫秒 | 16 kHz | 输入表示 | 与输出半音对齐 |
| 规模(c2,l) | (16,2) 至(256,6) | c1=c2/4 | 五档 | 实例归一化 |
| 训练 | 100k steps，batch size of 8 | AdamW 余弦 2×10^-4 | 三头 BCE 求和 | 温度采样 α=0.5 |
| 推理 | 块长 5 秒 half 策略 | 阈值 0.1-0.85 步长 0.05 | 2 阶段搜索 | 仅用 onset 与 sustain 解码 |
| 移动端 | 22.16 s / 4.86 s | 7.0× real time / 32.1× real time | iPhone 15 Pro Max | 382.6 MB / 445.0 MB |

该表前三行对应训练复现的核心超参数，第四行对应推理时的分块与阈值搜索，最后一行对应部署成本的实测条件。复现时需特别注意开发集必须与训练同温度采样抽取，否则阈值会偏向大源。

常见误解有三。其一，CQT 已对齐半音不代表无需学习，模型仍需学习把谐波能量归因到正确基频格。其二，谐波卷积不是单一空洞卷积，需按对数频率的非均匀偏移实现移位聚合。其三，offset 头不参与解码，仅作辅助监督，解码仅依赖 onset 峰与 sustain 跟踪，阈值选择对最终音符边界影响显著，需在与训练同分布的开发集上重搜而非沿用默认值。

### 何时值得尝试 Harmonica？下一步还需补什么验证？

当任务为单乐器、乐器身份未知且对延迟与内存敏感时，Harmonica 的多深度谐波卷积提供了一种已验证的精度与效率兼顾路径：x-large 适合追求最高帧 F1 的离线转录，medium 在保持可比精度的同时显著更快，nano 在极小参数与超高实时因子下仍明显优于同量级基线。CQT 的半音对齐与移位聚合的参数效率使小模型也能获得足够频域感受野，适合端侧部署。

选择时需权衡三点代价。第一，若目标包含混音中的多乐器同时转录，本文的乐器无关协议未直接评估混音归因，需额外验证。第二，若部署设备与论文移动端实测差异较大，需重测延迟与峰值内存，论文中 medium 的 CPU 与 GPU 实测经实现优化，数值不能直接外推。第三，若数据分布与开发集差异显著，需重做阈值 2 阶段搜索，否则音符边界会系统性偏移。

后续验证建议按学习依赖补齐：先在目标录音条件下复现开发集阈值搜索与分块推理，再在更多失真与合成音色上检验谐波数与偏移集合的敏感性，最后补充统计显著性与按曲聚合的方差分析，以区分单点领先与稳定优势。完成这些后，再评估是否将乐器无关主干扩展到混音场景的声源归因。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.04640)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-08/)
