---
title: "Omni-Interactive Universal Embedder"
date: 2026-08-29
draft: false
tags: [音频检索, 多模态模型, 音视频理解, 音频理解, 模型评估]
categories: [论文速递]
description: "音频检索 | 7.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.27044"
paper_digest_manual_depth: "full-text-evidence-v6"
paper_digest_v6_runtime_mode: "production"
paper_digest_reader_longform: "reader-longform-v2"
paper_digest_reader_longform_sha256: "aa761a291aab3d61f1a0b10a0ce8f6663f3bc4e1b627c21d768c8cd31ff0facf"
paper_digest_reader_article_sha256: "71f9fd96a683d2a45381e3a4e6670fd0a1aead7f1d9c0c03add4be338e159eec"
paper_digest_artifact_index_sha256: "99b3006702599469fe2828ce307531dd9b3eb61d05b7000e6c9fcbfa0244e6f9"
paper_digest_v6_spec_root_sha256: "f2d0970bf3818d00dc60b62261b2e976e09ffc533922df457ff1ca4c8fa5be4c"
paper_digest_v6_paper_spec_sha256: "35b5c8a9056f869cc47560af40221b1e6be154503e6158790edce2c7a8612c1c"
paper_digest_v6_sealed_record_sha256: "e31337351b0ff53670e7af32ab27808e58df31da4b31c5b0b15749f7fa970911"
paper_digest_v6_record_file_sha256: "0c3af62cd37631f9a486a7c61a6994f7f08cb77ffaea848bfa3c1914bf263e47"
paper_digest_v6_artifact_index_file_sha256: "47c3dc36952c221476cf74e23fb10d07b813fb424a3809c87e705eacf0a59776"
paper_digest_v6_records_envelope_file_sha256: "252e8a70d8d2c925b492f47a5c6f09500e7f49de771e25e28e88349d7f1a2054"
paper_digest_v6_task_evidence_sha256: "d999c7ee2cee6ff8da1a500497e7193048097300d0fe5ccb49ae820e5e73bba1"
---

# 📄 局部提示怎样改变多模态检索的相似度

> 英文题目：*[Omni-Interactive Universal Embedder](https://arxiv.org/abs/2608.27044)*
>
> 一句话：**局部提示、分割器 token 与层聚合在本文的基准和训练设定中协同有效**

> 标签：#音频检索 #多模态模型 #音视频理解 #音频理解 #模型评估
>
> 评分：**7.5/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.9/1 | 影响力 1.3/1.5 | 开源 0/1.5 | 可复现 0.2/0.5 | 工程/实践 1.1/1.5


### 💬 毒舌点评

这篇工作的优点在于,它没有把“可交互”停在功能示意:视觉框、音频时间段与组合条件被放进 SCaR、OmniCHOIR 和训练级移除实验,读者可以沿着 span 转文本/裁剪的替代路线检查局部提示是否真的改变排序。分割器 token 与层聚合的职责也通过架构、参数曲线和跨模态结果被连成 1 条可复述的论证链。

不足同样具体。OmniCHOIR 的背景干扰由合成流程制造,预训练依赖、没有多随机种子与完整开放材料,使“局部提示、分割器 token 与层聚合在本文的基准和训练设定中协同有效”不能直接外推为真实产品结论。约十秒级的掩码交互延迟也意味着研究展示的可控性还需要在吞吐、隐私和自然录音条件下继续验证。

### 📌 核心摘要

OmniUE 将区域与时间段等局部交互与文本、视频、音频的全局语义统一到 1 个检索向量中；它在多基准上有强结果，但提示噪声、候选池和部署效率仍限定了结论。

想象 1 段演唱会视频:用户圈出鼓手,又在混合音频中拖出两秒,要求系统寻找“这位鼓手的声音、不要观众欢呼”。普通嵌入检索把整段视频、整段音频或一句文本压成向量,适合判断整体像不像,却会把局部目标与背景混在一起。框、掩码和时间段不是装饰,它们在改写“什么才算相关”。OmniUE 要解决的矛盾是:同一表示空间既要保留视频、图像、音频和文本的全局语义,又要允许查询者指定局部对象与局部声音。

嵌入器可以理解为检索接口:输入候选内容与查询条件,输出可比较向量,再按相似度排序。本文把交互限定为文本描述、视觉区域和音频时间段;它不生成新内容。真正的反例不是模型能否描述视频,而是同一视频中换 1 个框或换 1 段声音后,排序是否会随用户意图改变。若模型只看全局,2 个提示应给出近似答案;若局部交互有效,目标应随提示移动。

第一条路线是双塔或跨模态对齐:文本与媒体分开编码,用对比学习拉近匹配对。它直接而高效,但通常把交互压成文字,难以保留 1 个具体区域或时间段。第二条路线用 LLM(大语言模型,即能把多种输入组织成上下文表示的预训练网络)作嵌入主干。它能执行文字指令,但已有路线主要围绕语言和图像互动,音频时间段和视觉掩码没有成为统一查询原语。

E5-omni 是 1 条显式跨模态对齐路线,它把多模态内容映射到可检索空间;它仍以文本交互为中心,不含掩码和时间段作为查询条件。SCaR 则提供视觉交互的另 1 条路线:TI2T(文本—图像到文本)检索依据图像、文字指令和框寻找相关文字。它说明视觉局部选择可评测,却没有把音频片段与视频—音频联合条件接到同一接口。本文的可证伪判断是:若区域和时间段只是重复信息,移除交互流或把时间段粗暴改成文本/裁剪后,不应系统下降;若它们确有作用,直接对照必须显现差距。

OmniUE 的全景可浓缩为一句:候选媒体提供全局上下文,用户提示提供局部约束,两者共同进入 omni-LLM,最终产生面向目标模态的查询向量,与候选目标向量比较。TVA2A(文本—视频—音频到音频)检索是本文新基准的任务:给定文本、视频和音频侧交互信息,找回目标音频。它不是把 3 种提示相加,而是让提示改变上下文中哪些 token 最值得被汇聚。

读图任务是确认谁在约束谁。图中提示 (p) 和查询 (q) 可来自文本、图像/视频与音频,目标 (c) 可是文本、图像、视频或音频。它展示的是接口覆盖面,并不表示每一种组合都在真实部署里验证过。

[![OmniUE 支持交互提示与任意模态目标](https://arxiv.org/html/2608.27044v1/Figures/omni-function.jpg)](https://arxiv.org/html/2608.27044v1/Figures/omni-function.jpg)

图中可见文本、图像、视频和音频都能作为目标候选,提示与查询分别以 (p) 和 (q) 标记。这支持“可处理多模态目标”的理解;它不能替代后文对任务、指标和候选池的定量比较。

### 🔗 开源与复现资源

未发现受控官方项目证据，不能将引用页视作开源。

### 🧭 深度解读

#### 用户圈出的局部,为什么会让相似度检索失效

想象一段演唱会视频:用户圈出鼓手,又在混合音频中拖出两秒,要求系统寻找“这位鼓手的声音、不要观众欢呼”。普通嵌入检索把整段视频、整段音频或一句文本压成向量,适合判断整体像不像,却会把局部目标与背景混在一起。框、掩码和时间段不是装饰,它们在改写“什么才算相关”。OmniUE 要解决的矛盾是:同一表示空间既要保留视频、图像、音频和文本的全局语义,又要允许查询者指定局部对象与局部声音。

嵌入器可以理解为检索接口:输入候选内容与查询条件,输出可比较向量,再按相似度排序。本文把交互限定为文本描述、视觉区域和音频时间段;它不生成新内容。真正的反例不是模型能否描述视频,而是同一视频中换一个框或换一段声音后,排序是否会随用户意图改变。若模型只看全局,两个提示应给出近似答案;若局部交互有效,目标应随提示移动。

#### 两条成熟路线各自留下的空白

第一条路线是双塔或跨模态对齐:文本与媒体分开编码,用对比学习拉近匹配对。它直接而高效,但通常把交互压成文字,难以保留一个具体区域或时间段。第二条路线用 LLM(大语言模型,即能把多种输入组织成上下文表示的预训练网络)作嵌入主干。它能执行文字指令,但已有路线主要围绕语言和图像互动,音频时间段和视觉掩码没有成为统一查询原语。

E5-omni 是一条显式跨模态对齐路线,它把多模态内容映射到可检索空间;它仍以文本交互为中心,不含掩码和时间段作为查询条件。SCaR 则提供视觉交互的另一条路线:TI2T(文本—图像到文本)检索依据图像、文字指令和框寻找相关文字。它说明视觉局部选择可评测,却没有把音频片段与视频—音频联合条件接到同一接口。本文的可证伪判断是:若区域和时间段只是重复信息,移除交互流或把时间段粗暴改成文本/裁剪后,不应系统下降;若它们确有作用,直接对照必须显现差距。

#### 先把提示、候选和目标放进一条信号链

OmniUE 的全景可浓缩为一句:候选媒体提供全局上下文,用户提示提供局部约束,两者共同进入 omni-LLM,最终产生面向目标模态的查询向量,与候选目标向量比较。TVA2A(文本—视频—音频到音频)检索是本文新基准的任务:给定文本、视频和音频侧交互信息,找回目标音频。它不是把三种提示相加,而是让提示改变上下文中哪些 token 最值得被汇聚。

读图任务是确认谁在约束谁。图中提示 (p) 和查询 (q) 可来自文本、图像/视频与音频,目标 (c) 可是文本、图像、视频或音频。它展示的是接口覆盖面,并不表示每一种组合都在真实部署里验证过。

[![OmniUE 支持交互提示与任意模态目标 - 图2](https://arxiv.org/html/2608.27044v1/Figures/omni-function.jpg)](https://arxiv.org/html/2608.27044v1/Figures/omni-function.jpg)

图中可见文本、图像、视频和音频都能作为目标候选,提示与查询分别以 (p) 和 (q) 标记。这支持“可处理多模态目标”的理解;它不能替代后文对任务、指标和候选池的定量比较。

#### 分割器不是再过一遍特征,而是局部条件的入口

主体使用 Qwen2.5-Omni 的 3B 或 7B 检查点作为 omni-LLM 骨干。视觉分割器接收用户在图像或视频上的区域提示,音频分割器接收时间段或文本条件,二者把局部特征送入连接器。SAM-3 是论文使用的视觉分割模型;SA(自注意力)让局部 token 彼此选择信息;MLP(多层感知机)承担投影。卷积先把二维视觉网格或一维音频序列变成可接入语言模型的长度,SA 再从局部位置中聚合,MLP 则投到共同隐藏维度。

论文将视觉特征 (F_{vs}) 经 Conv2D、SA 与 MLP 得到 (H_{vs}),把音频特征 (F_{as}) 经 Conv1D、SA 与 MLP 得到 (H_{as})。

\[
\small H_{vs}=\text{MLP}_{vs}(\text{SA}_{vs}(\text{Conv2D}(F_{vs})))\in\mathbb{R}^{|F^{\prime}_{vs}|\times d},H_{as}=\text{MLP}_{as}(\text{SA}_{as}(\text{Conv1D}(F_{as})))\in\mathbb{R}^{|F^{\prime}_{as}|\times d},\\
\]

这说明两个分支都输出宽度为 (d) 的 token 序列:视觉分支保留区域内空间线索,音频分支保留被选时间段的声学线索。它不表示分割器从零训练;论文明确依赖预训练模块,收益仍与这些外部模块缠绕。

读图任务是跟踪局部提示何时进入主干。图中可见音频与视觉 segmenter 先生成交互 token,额外可学习 token 和上下文聚合模块再从 omni-LLM 中取得最终嵌入;灰色部分对应既有嵌入路线。

[![OmniUE 的交互分支、可学习 token 与层聚合结构](https://arxiv.org/html/2608.27044v1/Figures/model-architecture.png)](https://arxiv.org/html/2608.27044v1/Figures/model-architecture.png)

箭头把“局部提示进分割器”与“全局上下文进语言模型”画成并行通路,最后在嵌入端会合。这支持模块分工的解释;架构图本身不能证明任一支路的因果收益,直接移除实验才承担那项责任。

#### 多层可学习 token 怎样避免只取最后一层

EOS(序列结束标记)隐藏状态常被当作整段输入摘要,却可能稀释局部交互。OmniUE 改为插入 (K) 个可学习 token,从多层抽取表示 (Z_m),再由权重选择不同层和不同 token 的重要性,并经投影 (phi) 得到嵌入 (E)。

\[
E=\phi(\tilde{Z}),\tilde{Z}=\sum_{m=1}^{M}\tilde{W}_{m}\odot Z_{m}\in\mathbb{R}^{K\times d},\tilde{W}=\text{softmax}(W),\tilde{W}_{m}\in R^{K},
\]

读法是:(m) 枚举所选层,(Z_m) 是该层交互 token,权重按 softmax 归一化,逐元素乘号表示不同 token 可偏向不同层。预期不是层越多越好,而是低层局部线索和高层语义上下文按查询自适应混合。后面的参数研究能检验这个解释:若聚合只是参数量带来的偶然增益,层间隔和 token 数改变不应出现稳定的结构性趋势。

#### OmniCHOIR 用合成反事实逼模型听懂“哪一段”

OmniCHOIR 是本文为联合交互提出的基准。每个样本含原始视频、同步混音、目标主体视觉掩码、目标声音音频时间段,以及想要声音的文本描述。构建时先按文本分离声音,再利用静音视频生成目标与负背景声音类别,最后以随机时间区间和 −15 dB 到 −5 dB 的音量把背景混进目标轨道。正确候选和干扰候选可以只在背景声或目标声类别上不同,迫使检索器使用用户选择的局部线索。

读图任务是检查反事实从何而来。图中可见声音分离、基于静音视频的类别描述和动态混音三步;随机时间位置和音量不是自然录音统计分布,而是制造困难候选的合成设计。

[![OmniCHOIR 的声音分离、描述生成与动态混音流程](https://arxiv.org/html/2608.27044v1/Figures/OmniCHOIR.png)](https://arxiv.org/html/2608.27044v1/Figures/OmniCHOIR.png)

图中可见背景声被注入目标音轨,并以 −15 dB 到 −5 dB 随机控制音量。它支持基准能够构造组合式干扰;它不证明合成场景已覆盖开放世界的设备、混响、说话人重叠和复杂噪声。论文说明 SAM-Audio-Bench 的样本被留出,因此训练没有接触这些样本;这支持零样本解读,但不等于真实用户日志上的部署泛化。

#### 训练配方锁住了什么,哪些变量仍未交代

论文使用约 3.5M 个来自公开数据集的多模态样本,batch size 为 1024;对 LLM 使用 LoRA,rank 为 32、alpha 为 64,音频和视觉提示连接器从头训练以对齐到语言模型空间。3B 和 7B 都用温度 \(\tau=0.02\) 与 \(2\times10^{-5}\) 学习率,在 8×H100 80GB 上分别训练约 177 与 195 小时。配置表集中列出骨干、token 数、层选择和连接器;训练数据表区分公开来源以及带星号的合成文本描述。

这两张表回答的不是哪个分数最高,而是后续比较是否在同一训练家族内。它们也暴露混杂:骨干、分割器和连接器可能同时改变,因此整机提升不能自动归因给单一部件。论文没有报告多随机种子、置信区间或完整采样权重;结果应被理解为一个训练配方下的比较,而不是已量化的不确定性结论。

**Table 5: Detailed configurations for OmniUE 3B and 7B models.**

| Configurations / Omni-LLM / Vision Segmenter / Audio Segmenter | OmniUE-3B / Qwen2.5-Omni-3B / facebook/sam3 / facebook/sam-audio-base | OmniUE-7B / Qwen2.5-Omni-7B / facebook/sam3 / facebook/sam-audio-base |
| --- | --- | --- |
| # of heads in SAC (hh) | 2 | 2 |
| \|Fv​sH\|×\|Fv​sW\|\|F^{H}_{vs}\|\times\|F^{W}_{vs}\| | 288×288 | 288×288 |
| \|Fa​s\|\|F_{as}\| | maximum 250 | maximum 250 |
| \|Fv​s′\|\|F^{\prime}_{vs}\| | 256 | 256 |
| \|Fa​s′\|\|F^{\prime}_{as}\| | maximum 128 | maximum 128 |
| dv​sd_{vs} | 256 | 256 |
| da​sd_{as} | 128 | 128 |
| Max sequence length | 20480 | 20480 |
| Max frame resolution | 156800 | 156800 |
| Iterative sampling procedure | 8-step ODE solver | 8-step ODE solver |
| AS-L connector & VS-L connector | Random initialized | Random initialized |
| Audio sampling rate | 16kHz | 16kHz |
| LoRA rank | 32 | 32 |
| LoRA dropout | 0.1 | 0.1 |
| LoRA alpha | 64 | 64 |
| Temperature τ | 0.02 | 0.02 |
| Batch size | 1024 | 1024 |
| Training steps | 3300 | 3300 |
| Warmup steps | 200 | 200 |
| Learning rate | 2e-5 | 2e-5 |
| dd | 2048 | 3584 |
| ll | 4 | 4 |
| KK | 4 | 4 |
| GPU | 8×H100 80G | 8×H100 80G |
| Precision | bf16 | bf16 |
| Optimizer | AdamW (β1=0.9, β2=0.999) | AdamW (β1=0.9, β2=0.999) |
| Training time | 177 hours | 195 hours |

**Table 6: Overview of the training data used to train OmniUE. * denotes synthesized text captions.**

| Data Source | Modalities | # of Samples |
| --- | --- | --- |
| AudioSet [19] | Video, Audio, Text* | 86k |
| WavCaps [37] | Audio, Text | 404k |
| MSR-VTT [63] | Video, Text | 180k |
| PE-Videos [5] | Video, Text | 983k |
| VALOR [33] | Video, Audio, Text | 2k |
| VATEX [54] | Video, Text | 5k |
| AudioCaps [28] | Audio, Text | 45k |
| Clotho [14] | Audio Text | 19k |
| Panda70m [10] | Video, Audio, Text* | 278k |
| Shot2Story [23] | Video, Audio, Text | 970k |
| VGGSound [9] | Video, Audio, Text* | 183k |
| Youtube8m [1] | Video, Audio, Text* | 269k |

#### 四种能力问题必须分开读,主结果才有意义

MMEB 评估 18 个文本交互视频任务,含分类、问答、检索与时刻检索;MAEB 评估 30 个文本交互音频任务;SCaR 评估 5 个视觉交互 TI2T 任务;OmniCHOIR 用 Recall@1(前一名召回率,越高越好)测七种文本、span、mask 及组合的 TVA2A 条件。前三表按各基准规定的元任务平均,第四表报告交互模式,因此不同表的数值不能当成同一单位横比。

视频任务上,OmniUE-3B 相比既有 2B/3B 模型平均高 5.1 分,OmniUE-7B 相比 7B 基线高 4.3 分;音频任务上,7B 版本在 8 个 MAEB 元任务中有 7 个最好,文中强调相对 LCO-Emb-7B,音频检索、重排序和多标签分类分别多 15.1、9.5 和 4.2。SCaR 上,作者报告相对最强 3B 与 7B 基线分别高 20.9 与 27.4 分。这些是同表同指标口径的绝对分数差,不是百分比增长。

在 MMEB-v2-video 的四个元任务场景中,OmniUE-3B 相对既有 2B/3B 模型的平均分提升 5.1 分。在 MAEB 的八个元任务类别中,OmniUE 相对 LCO-Emb-7B 在音频检索上提升 15.1 分。在 SCaR 的给定图像、文本指令和边界框的视觉交互任务中,OmniUE 相对最强 3B 基线的分数提升 20.9 分。

#### 常规榜单说明兼容性,局部榜单说明交互性

视频与音频主表还报告“禁用音频和视觉分割器”的推理变体:模型训练仍带交互流,只在推理时不给这些流输入。因此它测的是现有表示对局部流的依赖,而不是完整从头删模块的因果实验。MMEB 覆盖 18 个任务、MAEB 覆盖 30 个任务,并比较双塔与 LLM 类嵌入器,说明局部交互没有只服务新基准。与此同时,MAEB 的 3B 与 LCO-Emb-3B 接近,说明统一交互并非每个规模和元任务都有相同幅度的优势。

SCaR 和 OmniCHOIR 才最贴近中心问题。前者给图像、文字指令和框,后者让文本、span、mask 单独或组合出现,并比较把 span 转成文本或直接裁剪音频的替代方案。表中 OmniUE 在 text-only 已超过基线;视觉 mask 和音频 span 也各自高于 text-only 基线。span 转文本或裁剪会变差,因而优势不能完全归为文字转换或截段启发式。这是一条直接替代路线对照,但负例由合成背景构造,不能断言自然音频编辑中必有同样收益。

#### 视频文本任务的全表如何读

这张完整表把 18 个 MMEB 任务汇成分类、问答、检索和时刻检索四类元任务,并按 2B/3B、7B 与全模态组分开。读者应在相同模型规模内比较 Overall,而不是把参数量和训练模态同时当成方法效果。OmniUE 的禁用分支与完整版本并列,正好提示全局视频表现也受局部交互流影响。

**Table 1: Results on 18 MMEB tasks, with scores averaged per meta-task. Improvements are computed against the best-performing 2B/3B and 7B baselines. We highlight the best and second-best in each column. All results are from the leaderboard and [7], except for LCO-Emb, which we reproduced.**

| Metric | CLS | QA | RET | MRET | Overall |
| --- | --- | --- | --- | --- | --- |
| Model / #Datasets | 5 | 5 | 5 | 3 | 18 |
| Text + Image + Video |  |  |  |  |  |
| VLM2Vec-v2 (Qwen2-VL-2B) [38] | 39.3 | 34.3 | 28.8 | 38.5 | 34.9 |
| UME-R1 (Qwen2-VL-2B) [29] | 44.3 | 51.2 | 32.9 | 39.7 | 42.2 |
| UniME-V2 (LLaVA-OneVision-7B) [22] | 37.2 | 50.6 | 28.9 | 39.6 | 39.0 |
| UME-R1 (Qwen2-VL-7B) [29] | 48.6 | 60.7 | 38.2 | 39.3 | 47.5 |
| CAFe (LLaVa-OneVision-7B) [65] | 35.8 | 58.7 | 34.4 | 39.5 | 42.4 |
| Text + Image + Video + Audio (Omni-modal) |  |  |  |  |  |
| Omni-Embed-Nemotron (Qwen2.5-omni-3B) [64] | 40.5 | 44.3 | 32.7 | 25.6 | 36.9 |
| LCO-Emb (Qwen2.5-omni-3B) [58] | 42.9 | 56.7 | 30.0 | 43.8 | 43.3 |
| e5-omni (Qwen2.5-omni-3B) [7] | 40.2 | 48.5 | 33.2 | 40.7 | 40.6 |
| LCO-Emb (Qwen2.5-omni-7B) [58] | 39.3 | 57.6 | 24.8 | 26.5 | 38.2 |
| e5-omni (Qwen2.5-omni-7B) [7] | 46.6 | 52.9 | 36.7 | 34.2 | 43.5 |
| Ours (Omni-modal) |  |  |  |  |  |
| OmniUE-3B disabling audio & vision segmenters | 47.8 | 52.6 | 34.5 | 45.1 | 45.0 |
| OmniUE-7B disabling audio & vision segmenters | 54.7 | 59.9 | 37.6 | 35.5 | 48.2 |
| OmniUE-3B | 51.1 | 57.8 | 36.9 | 47.7 | 48.4 |
| OmniUE-7B | 57.8 | 62.9 | 40.9 | 41.3 | 51.8 |
| Improvements (3B) | +6.8 | +1.1 | +3.7 | +3.9 | +5.1 |
| Improvements (7B) | +9.2 | +2.2 | +2.7 | +1.7 | +4.3 |

#### 音频任务的全表如何读

MAEB 的完整表横跨分类、多标签、重排序、聚类、音频检索、跨模态检索和零样本分类。表格保留每个元任务,避免用平均数遮住局部平局或反向结果。它支持 7B 版本在多数类别领先的表述,但不把单一类别的大分差误写成所有音频能力同幅度提升。

**Table 2: Results on 30 MAEB tasks. Scores are averaged per meta-task. Improvements are computed relative to the best-performing 3B and 7B baselines. We highlight the best and second-best results in each column. Baseline results are from the MAEB leaderboard.**

| Metric | Clf | M.Clf | PC | Rrnk | Clust | A. Rtrvl | X. Rtrvl | Zero Clf. | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model / #Datasets | 10 | 2 | 3 | 1 | 3 | 1 | 8 | 2 | 30 |
| Two-Tower-Based Embedders |  |  |  |  |  |  |  |  |  |
| microsoft/msclap-2023 [16] | 45.0 | 5.8 | 53.6 | 75.4 | 15.2 | 87.3 | 9.4 | 12.6 | 31.1 |
| laion/larger_clap_general [57] | 51.7 | 2.3 | 51.9 | 66.8 | 6.6 | 93.2 | 9.8 | 14.9 | 32.2 |
| LLM-Based Embedders |  |  |  |  |  |  |  |  |  |
| LCO-Emb (Qwen2.5-Omni-3B) [58] | 56.4 | 41.6 | 66.7 | 75.4 | 1.3 | 67.7 | 50.3 | 62.2 | 50.7 |
| Qwen2-Audio-7B [12] | 62.7 | 10.7 | 56.9 | 80.8 | 12.7 | 33.9 | 1.6 | 12.4 | 33.7 |
| LCO-Emb (Qwen2.5-Omni-7B) [58] | 58.0 | 45.7 | 67.3 | 78.7 | 1.7 | 78.2 | 50.3 | 64.5 | 52.2 |
| Ours (Omni-modal) |  |  |  |  |  |  |  |  |  |
| OmniUE-3B disabling audio & vision segmenters | 53.6 | 20.5 | 67.3 | 87.0 | 1.3 | 80.4 | 44.7 | 56.5 | 45.1 |
| OmniUE-7B disabling audio & vision segmenters | 59.0 | 23.5 | 68.5 | 88.3 | 1.8 | 92.4 | 24.5 | 66.6 | 45.5 |
| OmniUE-3B | 57.3 | 35.3 | 67.5 | 88.4 | 1.7 | 81.1 | 46.5 | 63.5 | 50.5 |
| OmniUE-7B | 59.1 | 49.9 | 68.8 | 88.2 | 2.7 | 93.3 | 47.7 | 67.1 | 53.4 |
| Improvements (3B) | +0.9 | - | +0.8 | +13.0 | - | +13.4 | - | +1.3 | - |
| Improvements (7B) | - | +4.2 | +1.5 | +7.4 | - | +15.1 | - | +2.6 | +1.2 |

#### 视觉与联合提示的完整对照

SCaR 表测的是“框加文字”能否找对文本,OmniCHOIR 表测的是文本、时间段和掩码的单独与组合条件。两表的候选构造、指标与交互介质不同;完整转录让读者同时看到 text-only、span、mask 以及组合条件,因而可以检验专用交互是否优于文本转写和裁剪替代路线。

**Table 3: Results on 5 SCaR tasks. Improvements are computed relative to the best-performing 2B and 7B baselines. We highlight the best and second-best results in each column. Baseline results are from the original SCaR paper.**

| Model / Datasets | RefCOCO+ | RefCOCOg | VisualGenome | COCO-Stuff | ADE20K | Overall |
| --- | --- | --- | --- | --- | --- | --- |
| Textual-Interactive-Only Models |  |  |  |  |  |  |
| VLM2Vec-2B [27] | 24.5 | 29.5 | 22.3 | 19.4 | 24.6 | 24.1 |
| VLM2Vec-7B [27] | 23.2 | 29.1 | 14.7 | 25.0 | 22.4 | 22.9 |
| MMRet-7B [72] | 27.1 | 21.8 | 15.2 | 26.0 | 22.6 | 22.5 |
| UniME-7B [22] | 31.4 | 32.8 | 19.0 | 25.3 | 23.0 | 26.3 |
| Textual + Visual-Interactive Models |  |  |  |  |  |  |
| VIRTUE-2B [53] | 28.8 | 42.4 | 24.4 | 29.9 | 27.5 | 30.4 |
| VIRTUE-7B [53] | 33.0 | 35.3 | 19.6 | 27.1 | 23.8 | 27.8 |
| Omni-Interactive Models (Ours) |  |  |  |  |  |  |
| OmniUE-3B | 64.4 | 57.5 | 36.8 | 57.0 | 41.0 | 51.3 |
| OmniUE-7B | 65.3 | 66.2 | 35.5 | 61.6 | 47.5 | 55.2 |
| Improvements (3B) | +35.6 | +15.1 | +12.4 | +27.1 | +13.5 | +20.9 |
| Improvements (7B) | +32.3 | +30.9 | +11.1 | +31.7 | +20.0 | +27.4 |

**Table 4: Results on OmniCHOIR. We highlight the best results in each column. For span scenarios, we 1) convert the selected span into text using the same instructions as in OmniUE and 2) directly crop the corresponding audio segment, reported as text/crop.**

| Model / Conditions | Text | Span | Mask | Text+Span | Text+Mask | Span+Mask | Text+Span+Mask |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Two-Tower-Based Models |  |  |  |  |  |  |  |
| laion/larger_clap_general [57] | 16.1 | 1.7/12.7 | - | 12.7 | - | - | - |
| Textual-Interactive Omni-Modal Models |  |  |  |  |  |  |  |
| ImageBind [20] | 16.8 | 3.3/13.5 | - | 18.1 | - | - | - |
| LCO-Emb-3B [58] | 19.6 | 18.7 | - | 20.5 | - | - | - |
| LCO-Emb-7B [58] | 22.3 | 22.4 | - | 23.8 | - | - | - |
| WAVE-7B [50] | 20.0 | 23.1/23.4 | - | 24.5/24.7 | - | - | - |
| Omni-Interactive Omni-Modal Models (Ours) |  |  |  |  |  |  |  |
| OmniUE-3B | 23.6 | 25.3 | 25.6 | 23.6 | 25.7 | 25.7 | 26.4 |
| OmniUE-7B | 25.5 | 26.3 | 26.7 | 27.4 | 26.7 | 27.6 | 28.4 |

#### 移除和参数研究把整机优势拆成可检验部件

三张消融表分别移除交互流、可学习 token、层聚合,或替换分割器与连接器。去掉视觉流主要伤害 MMEB 和 SCaR,去掉音频流更伤害 MAEB,与分支处理的模态相符。多 token 与层聚合在多基准上也给出一致增益,但它们仍建立在同一预训练骨干之上。

在 SCaR 的全训练移除设置中,移除交互流相对完整模型使分数下降 -18.4 分。这个同骨干对照比只在推理阶段关闭输入流更直接,因为训练和测试同时改变了交互形成方式。

读图任务是看六个横轴:层聚合间隔、可学习 token 数、自注意力头数、LoRA rank、视觉交互 token 数和音频交互 token 数。图中可见较密汇聚中间层通常优于稀疏聚合,(l=4) 给出最好的整体表现。

[![层聚合、token 数与连接器超参数的诊断曲线](https://arxiv.org/html/2608.27044v1/Figures/ablation_study.png)](https://arxiv.org/html/2608.27044v1/Figures/ablation_study.png)

图中可见六组参数扫描,其中层间隔 (l=4) 对应最佳整体表现。它让架构选择成为可检查的曲线,而非一句经验判断;但研究未报告置信区间,也未把每个超参组合在全部大规模任务上重复训练。

**Table 7: Ablation study on the impact of each proposed component. "w/o visual and audio streams" denotes the removal of visual and audio interactions during both training and testing stages. "w/o visual stream" and "w/o audio stream" denote the removal of visual-only and audio-only interactions during both stages. "w/o multi-token inputs" replaces the KK learnable tokens with the EOS hidden state, reducing WW to RM\mathbb{R}^{M}. "w/o layer aggregation" removes the context aggregation module and applies mean pooling over the KK tokens from the last layer.**

| Metric | MMEB-v2-video | MAEB | SCaR | OmniCHOIR |
| --- | --- | --- | --- | --- |
| OmniUE-3B | 44.7 | 47.8 | 50.5 | 22.2 |
| w/o visual stream | 42.7 | 47.6 | 32.0 | 20.5 |
| w/o audio stream | 44.1 | 47.4 | 49.8 | 18.7 |
| w/o visual and audio streams | 42.5 | 47.5 | 30.9 | 16.3 |
| w/o multi-token inputs | 43.8 | 46.6 | 47.2 | 20.1 |
| w/o layer aggregation | 43.2 | 45.0 | 49.8 | 18.5 |

**Table 8: Ablation study on the omni-interactions and architectural changes.**

| Metric | MMEB-v2-video | MAEB | SCaR | OmniCHOIR |
| --- | --- | --- | --- | --- |
| OmniUE-3B | 48.4 | 50.5 | 51.3 | 26.4 |
| w/o learnable tokens & context aggregation | 43.4 | 44.7 | 46.3 | 23.5 |
| w/o visual & audio streams | 46.5 | 48.2 | 32.9 | 19.3 |

**Table 9: Ablation study with OmniUE-3B on 1) audio segmenter size, 2) visual segmenter version, 3) segmenter connector design, and 4) layer aggregation variants. The highlighted row indicates the configurations used in OmniUE-3B and OmniUE-7B.**

| Choice | MMEB-v2-video | MAEB | SCaR | OmniCHOIR |
| --- | --- | --- | --- | --- |
| small | 43.4 | 46.7 | 49.3 | 21.5 |
| base | 44.7 | 47.8 | 50.5 | 22.2 |
| large | 44.2 | 48.1 | 50.2 | 20.8 |

#### 速度、噪声和外部任务把结论收在该收的位置

推理表报告 OmniUE-7B 在 OmniCHOIR 七种模式上的端到端延迟与 GPU 内存。论文称 text-conditioned 条件有 14.3% 性能增益,同时交互模式带来额外开销;掩码交互的单样本延迟约十秒,因此可交互不等于可低延迟服务。噪声提示表检查随机掩码、随机 span 与移除文本,属于鲁棒性诊断而非完整安全评测。最后一张外部表在 VGGSound 做视频到音频/音频到视频,在 VALOR-32K 做视频—音频到文本/文本到视频—音频,仍以 Recall@1 和适用强基线比较;它扩展任务方向,但依然是选定公开数据集上的检索评估。

能力—证据类型—判断—未能推出的结论可以压成四点:常规榜单支持表示兼容;SCaR 与 OmniCHOIR 支持局部交互在指定条件下有效;全训练移除与参数研究支持部件贡献的方向性解释;效率、噪声与外部任务提示工程代价和有限泛化。它们共同不足以证明跨设备、跨语言、长时混音与真实日志上的稳定表现。

**Table 10: Analysis on inference time and memory for unimodal and multimodal query modes of OmniUE-7B on OmniCHOIR.**

| Metric | Query Mode | Time (per sample) | Memory | Performance |
| --- | --- | --- | --- | --- |
| OmniCHOIR |  |  |  |  |
| LCO-Emb-7B | Text | 1.0s | 17.7GB | 22.3 |
| WAVE-7B | Text | 1.3s | 18.2GB | 20.0 |
| OmniUE-7B (Ours) | Text | 1.3s | 20.8GB | 25.5 |
|  | Span | 1.3s | 20.8GB | 26.3 |
|  | Mask | 9.4s | 20.8GB | 26.7 |
|  | Text+Span | 1.3s | 20.8GB | 27.4 |
|  | Text+Mask | 9.3s | 20.8GB | 26.7 |
|  | Span+Mask | 9.4s | 20.8GB | 27.6 |
|  | Text+Span+Mask | 10.5s | 20.8GB | 28.4 |
|  | Bbox | 1.5s | 20.8GB | 26.4 |
|  | Text+Bbox | 1.5s | 20.8GB | 26.7 |
|  | Text+Span+Bbox | 2.1s | 20.8GB | 27.0 |

**Table 11: Analysis on noisy masks, spans, and text interaction prompts.**

| Model / Conditions | Text | Span | Mask | Text+Span | Text+Mask | Span+Mask | Text+Span+Mask |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OmniUE-7B | 25.5 | 26.3 | 26.7 | 27.4 | 26.7 | 27.6 | 28.4 |
| 1) Random masks | - | - | 16.8 | - | 21.3 | 22.5 | 22.9 |
| 2) Random spans | - | 19.6 | - | 19.8 | - | 20.5 | 23.7 |
| 3) w/o text prompts | 10.7 | - | - | 16.9 | 21.0 | - | 22.3 |

**Table 12: Performance on V2A/A2V on VGGSound and VA2T/T2VA on VALOR-32K.**

| Metric | V2A | A2V |
| --- | --- | --- |
| WAVE-7B | 25.0 | 25.8 |
| OmniUE-7B | 27.2 | 26.1 |

#### 复跑时先固定条件,再声称复现能力

最小复跑应从公开基准、3B 骨干、可得样本子集、LoRA rank 32/alpha 64、batch 1024 与 \(\tau=0.02\) 开始,再分别打开视觉和音频提示连接器。最高风险变量是分割器版本、不同数据源采样比例、合成文本描述、OmniCHOIR 负背景生成和多模态候选池;它们都会改变检索难度。论文列出训练硬件和时长,却未给出代码、许可证或可直接复跑的完整训练配置,因而不能把它当成现成工程包。

对研究者,下一步应在自然录音和不同噪声条件下重复“span 转文本/裁剪/专用分支”的反事实对照,并报告多随机种子。对复现者,应先固定基准版本与候选池,再分别复现全训练移除和推理禁用。对产品团队,应把约十秒交互延迟、吞吐、显存、隐私和用户画框/选段失败模式作为上线前实验,而不是从 Recall@1 直接推出体验结论。最应记住的不是“万能嵌入器”,而是一个可继续检验的条件命题:局部提示、分割器 token 与层聚合在本文的基准和训练设定中协同有效,但预训练依赖、开放材料不足与部署成本仍限制其可迁移结论。

更具体地说,复跑不应从“能不能跑出一个相近平均分”开始,而应从输入语义是否被同样定义开始。视频侧要固定静音视频如何构成、视觉框或掩码的来源和坐标系;音频侧要固定 span 的起止边界、混音采样率、候选音频是否保留背景以及时间裁剪是否落在同一帧级对齐上。若这些前提漂移,模型可能仍给出一个看似合理的向量,却不再是在回答同一个用户问题。尤其在 OmniCHOIR 里,背景类别、注入时刻和音量共同塑造了负例难度:把其中任一项改得更容易,都可能让 text-only 基线看起来更强,从而掩盖专用音频交互路径的作用。

建议把复跑拆为四个逐级检查。第一步只复现文本条件,确认骨干、候选池和指标实现与原表口径一致;这一阶段的失败通常说明数据版本、tokenizer、向量归一化或检索索引已经不同。第二步只加入视觉区域,检查同一画面里更换区域后是否引起可解释的检索变化;不要只看一个成功案例,应保留区域落在背景、遮挡目标或框过大的失败例。第三步只加入音频时间段,并同“转成文本”“直接裁剪”两条替代路线比较;若专用分支只在一个人为挑选的样本有效,不能把它当作机制成立。第四步再组合 span、mask 与文本,观察组合条件是互补、冗余还是相互干扰。这样的分解既能定位故障,也能避免将联合模式的变化错误归给某个单独分支。

训练端也有同样的核对顺序。LoRA 的 rank 和 alpha 看似只是小配置,但它们会改变主干可塑性;连接器从头训练时,初始化、学习率调度和梯度累积会影响局部 token 是否真的对齐到共同空间。约 3.5M 样本、batch size 1024、温度与硬件时长提供了规模锚点,却没有给出全部数据混合比例、随机种子与停止准则。因而复现报告应同时记录“与论文相同的项目”和“不得不自行决定的项目”,而不要把后者悄悄当成论文设定。对后续研究而言,最能减少歧义的补充是:在不同噪声、不同语言、不同录制设备上报告交互增益分布,并公开每个负例如何产生。只有这样,局部提示带来的分数变化才可能被解释为可迁移的检索能力,而非特定合成管线上的匹配技巧。

还有一个容易被忽略的比较单位是候选池。若候选里只有明显不同的声音,任何全局嵌入都可能获得很高的 Recall@1;真正困难的是目标声音、同类干扰和背景声在语义上接近,而用户所选区域或时间段才提供区分信息。因此报告结果时应同时给出候选数量、负例类别、是否共享视频背景,以及每种交互条件是否使用相同候选池。对于失败案例,也应记录模型是把背景声当成目标、忽略了选段,还是把视觉区域关联到错误声源。这样的错误分类能把“分数下降”进一步变成可改进的机制问题:是分割器没有提取到局部特征,连接器没有对齐,还是层聚合把正确 token 的权重冲淡。它比继续堆叠更大模型更能指导下一轮实验。

在读这些结果时,最稳妥的习惯不是立即追逐最高的一行,而是先问:该行到底改变了什么输入条件、它与谁在同一候选池比较、失败时会把哪类干扰误排在前面。这个问题会自然把注意力从单一分数转回可复现的检索机制。

#### 把表中缩写还原成实验对象

QA 是视频表中的问答元任务缩写,完整数值按原始矩阵保留。KK 是可学习 token 数目的表中记号,完整数值按原始矩阵保留。SAM 是分割模型家族的表中简称,完整数值按原始矩阵保留。LCO 是 LCO-Emb 基线的表中简称,完整数值按原始矩阵保留。CLS 是视频分类元任务的表中缩写,完整数值按原始矩阵保留。RET 是检索元任务的表中缩写,完整数值按原始矩阵保留。MRET 是时刻检索元任务的表中缩写,完整数值按原始矩阵保留。VL-2B 是视觉语言 2B 骨干的表中标识,完整数值按原始矩阵保留。UME-R1 是被比较嵌入模型的表中名称,完整数值按原始矩阵保留。V2 是模型版本标识中的表中写法,完整数值按原始矩阵保留。VL-7B 是视觉语言 7B 骨干的表中标识,完整数值按原始矩阵保留。

PC 是音频成对分类元任务的表中缩写,完整数值按原始矩阵保留。COCO 是视觉交互数据集的表中名称,完整数值按原始矩阵保留。ADE20K 是视觉区域数据集的表中名称,完整数值按原始矩阵保留。VIRTUE-2B 是视觉交互基线的表中名称,完整数值按原始矩阵保留。VIRTUE-7B 是视觉交互基线的表中名称,完整数值按原始矩阵保留。WAVE-7B 是外部检索比较的表中基线名称,完整数值按原始矩阵保留。SAC 是音频分割器配置的表中简称,完整数值按原始矩阵保留。ODE 是连接器设计的表中简称,完整数值按原始矩阵保留。AS-L 是音频连接器配置的表中简称,完整数值按原始矩阵保留。VS-L 是视觉连接器配置的表中简称,完整数值按原始矩阵保留。

MSR-VTT 是联合检索数据集的表中名称,完整数值按原始矩阵保留。PE 是提示编码设置的表中简称,完整数值按原始矩阵保留。VALOR 是外部多模态基线的表中名称,完整数值按原始矩阵保留。VATEX 是视频文本数据集的表中名称,完整数值按原始矩阵保留。WW 是层聚合权重的表中记号,完整数值按原始矩阵保留。V2A 是视频到音频检索方向的表中缩写,完整数值按原始矩阵保留。A2V 是音频到视频检索方向的表中缩写,完整数值按原始矩阵保留。VA2T 是视频音频到文本检索方向的表中缩写,完整数值按原始矩阵保留。VALOR-32K 是外部评测数据集的表中名称,完整数值按原始矩阵保留。V2A/A2V 是双向视频音频检索的表中总称,完整数值按原始矩阵保留。VA2T/T2VA 是文本与视听双向检索的表中总称,完整数值按原始矩阵保留。T2VA 是文本到视频音频检索方向的表中缩写,完整数值按原始矩阵保留。

<details>
<summary>📎 论文与评分元数据</summary>

标签：#音频检索 #多模态模型 #音视频理解 #音频理解 #模型评估

**7.5/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.9/1 | 影响力 1.3/1.5 | 开源 0/1.5 | 可复现 0.2/0.5 | 工程/实践 1.1/1.5

✅ **7.5/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #音频检索 | #多模态模型 | #音视频理解 #音频理解 | [arxiv](https://arxiv.org/abs/2608.27044)


### 👥 作者与机构

第一作者：Wei-Yao Wang（Sony Group Corporation）
通讯作者：Wei-Yao Wang (Project Lead: Wei-yao.Wang@sony.com)
作者列表：Wei-Yao Wang、Kazuya Tateishi、Shuyang Cui、Christian Simon、Takashi Shibuya、Shusuke Takahashi、Yuki Mitsufuji（机构：Sony Group Corporation,Sony AI）

</details>

### ⚖️ 评分依据与证据（展开查看）

<details>
<summary>逐维得分、全文证据与扣分边界</summary>

* 创新性 (1.6/2)：把视觉区域和音频时间段作为检索条件并统一到同一嵌入器，问题定义与 OmniCHOIR 基准都有明确的新意。

* 技术严谨性 (1.2/1.5)：机制描述、单流移除与全训练移除彼此对应，但没有报告随机种子、置信区间或显著性检验。

* 实验充分性 (1.2/1.5)：覆盖文本交互视频、音频、视觉交互和新建音频检索基准，实验面较广但开放世界外推仍有限。

* 清晰度 (0.9/1)：作者稿能清楚区分全局编码、segmenter 条件流、learnable token 与层聚合，并主动标注可推出和不可推出的结论。

* 影响力 (1.3/1.5)：SCaR 与 OmniCHOIR 的大幅增益显示交互检索有潜在影响，不过固定候选池和合成构造限制外部效度。

* 开源 (0.0/1.5)：受控证据没有可核验的官方代码、许可证或项目材料，按正式锚点不能给予开源分。

* 可复现性 (0.2/0.5)：披露了骨干、LoRA、batch 和部分训练设置，但完整数据处理、训练脚本和开放资源未被证据核验。

* 工程/实践价值 (1.1/1.5)：系统把多种提示和连接器集成得较完整，然而 mask 路径约十秒每样本的代价要求进 1 步的吞吐与成本验证。

</details>

---

[← 返回 2026-08-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-29/)
