---
title: "RespCCT and FreqCCT: Compact, Explainable and Cost-Aware Convolutional Transformers for Multi-Class Respiratory Disease Classification"
date: 2026-11-19
draft: false
tags: [音频分类, Transformer, 知识蒸馏, 高效推理, 可解释性]
categories: [论文速递]
description: "论文把三个公开库的肺音切成 5 s 帧并堆成三通道时频图，用从零训练的紧凑卷积 Transformer 做七类诊断，再以配对区间、蒸馏、归因检查和全链路计时说明它接近但未超过最强预训练网络，且图像计算才是主要耗时。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.24323"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用三张时频图做七类肺音分类：RespCCT 与 FreqCCT 的小模型、代价与可解释检查"
paper_digest_original_title: "RespCCT and FreqCCT: Compact, Explainable and Cost-Aware Convolutional Transformers for Multi-Class Respiratory Disease Classification"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.24323v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.24323v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.24323v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"}]
paper_digest_primary_method: "Transformer"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把三个公开库的肺音切成 5 s 帧并堆成三通道时频图，用从零训练的紧凑卷积 Transformer 做七类诊断，再以配对区间、蒸馏、归因检查和全链路计时说明它接近但未超过最强预训练网络，且图像计算才是主要耗时。"
paper_digest_authors: [{"affiliations":["ELITE Research Lab, New York, NY, USA"],"name":"Auntor Chakma"},{"affiliations":["Department of Computer Science and Engineering, East Delta University, Abdullah Al Noman Road, Noman Society, East Nasirabad, Khulshi, Chattogram, 4209, Bangladesh"],"name":"Mst. Farhana Akter"},{"affiliations":["Department of Computer Science and Engineering, United International University, United City, Madani Avenue, Badda, Dhaka, 1212, Bangladesh"],"name":"Abu Henaf Rashid Ahmad Mufti"},{"affiliations":["Department of Computer Science and Engineering, East Delta University, Abdullah Al Noman Road, Noman Society, East Nasirabad, Khulshi, Chattogram, 4209, Bangladesh"],"name":"Asmana Yasmin"}]
paper_digest_abstract_sha256: "3da967677e68bf071f6f031c38ea6181bf64fd242c4a4be339f88dc7a9f64c2e"
paper_digest_sidecars: {"citation.bib":{"sha256":"485a23d4555cdca344033654005f631fc709e5df054ac7bb6d071ca1d2ccafa4","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-24323/citation.bib"},"citation.json":{"sha256":"ec046d9eeb69e19f8d64e21afb34fc0953edaa84db7bab18f5f64177851f6770","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-24323/citation.json"},"citation.ris":{"sha256":"e49fe5cd1d326f12d65f71592efd52fc84e4bbf1b720299e74a8cc5ce203af51","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-24323/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3a14bb53d2df567a98a5b519ec7e69f5b47e7181f6f1eed5dd2784d979e49b5e","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-24323/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "22a1c22b8583b31ffc74db0f0d7f2798b9c9f874fb9777a290ad3205feb5bc25"
paper_digest_api_reader_plan_sha256: "c752d0eb6a7cb6f59f90db1a0aed12853af79de706c1eae87db5104381b1ac5a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "0d70650beddcc007ec851032dea17d173a1ffc7365f756d4333597101e55838a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "5abad94367410ae0e4ee1a3284231f5b17a7ad5cb70f011a1d6774091e0170f9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "01f22e952c8c3155186b5689076c100325b71fcb16085aa243da2b131ffb4e55"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ba392506261252bfb4bb36c63407e960109726e2a8a8480f4ce15c8816514e29"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 用三张时频图做七类肺音分类：RespCCT 与 FreqCCT 的小模型、代价与可解释检查

> 英文题目：*[RespCCT and FreqCCT: Compact, Explainable and Cost-Aware Convolutional Transformers for Multi-Class Respiratory Disease Classification](https://arxiv.org/abs/2611.24323v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[Transformer](/audio-paper-digest-blog/papers/?concept=method.transformer)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)；[可解释性](/audio-paper-digest-blog/papers/?concept=research_focus.interpretability)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 1/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Auntor Chakma：ELITE Research Lab, New York, NY, USA
- Mst. Farhana Akter：Department of Computer Science and Engineering, East Delta University, Abdullah Al Noman Road, Noman Society, East Nasirabad, Khulshi, Chattogram, 4209, Bangladesh
- Abu Henaf Rashid Ahmad Mufti：Department of Computer Science and Engineering, United International University, United City, Madani Avenue, Badda, Dhaka, 1212, Bangladesh
- Asmana Yasmin：Department of Computer Science and Engineering, East Delta University, Abdullah Al Noman Road, Noman Society, East Nasirabad, Khulshi, Chattogram, 4209, Bangladesh

## 📌 核心摘要

听诊依赖听者经验，软件需要对肺音录音给出可核对的第二意见，难点在于录音设备与人群多样、类别极不均衡且部分类别与来源绑定。研究把3个公开库的1665个音频文件汇成7类诊断标签，切成5 s帧，每帧并行生成梅尔频谱图、恒Q变换图与梅尔频率倒谱系数图并堆叠为三视图输入。先由视图门控对3种视图加权融合成融合特征，再用两层卷积把该特征切分为时频块并送入4层Transformer编码，最后对编码序列做序列池化输出类别。FreqCCT沿用同一三视图输入与训练流程，仅把编码侧改用深度可分离卷积与频率保留池化，以更少参数量压缩开销。训练从随机初始化开始，配合标签平滑、时间掩码与权重平均，评测采用同一测试折上的配对自助区间、随机化归因检验、来源探针与单线程耗时测量。在同一2359帧测试折上，RespCCT取得准确率98.13%与宏平均F1（macro F1）0.970，低于MobileViT XXS的99.11%与0.984，差距区间排除零。图像计算每帧共需29.6 ms，其中恒Q变换占25.0 ms，高于网络本身的6.43 ms，来源探针准确率达0.958说明部分分数可能借助录音来源。因此结论只适用于与3个数据库类似音频的帧级复核，不适用于新患者与新医院的诊断，帧级重叠划分、单次基线运行与云端CPU计时也使推广前仍需按文件与患者分组验证并在目标设备重测耗时。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/auntor101/respcct-freqcct> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 听诊要解决的输入、输出与必须保留的信息

这篇论文处理的是录音肺音的 7 类诊断问题。输入是一段胸壁录音，输出是 COPD、健康、哮喘、肺炎、上呼吸道感染、支气管扩张和细支气管炎 7 个诊断标签之一。临床背景是听诊高度依赖听者经验，医学生与住院医的识别准确率明显低于高年资医生，而电子听诊器在基层又受价格与算力限制，所以软件第二读数必须同时考虑准确率与运行代价。

已有主流做法是把波形转成能量随时间与频率分布的图像，再用卷积网络分类。最强结果多来自在图像或音频上预训练的大网络，在 ICBHI 呼吸周期任务上 ICBHI Score 从 58.29% 逐步做到 66.55%。另一条线是面向诊断标签的小模型，例如在 3 个库上做七分类并在树莓派上运行的工作。论文指出小模型很少与预训练网络放在同一测试集上用配对统计比较，也很少把声音转图像的耗时计入代价。

对刚入门的读者，关键是分清 2 个任务。呼吸周期级别是判断一段呼吸里有没有哮鸣或爆裂音，诊断级别是判断病人属于哪种疾病，一个哮鸣音可以出现在多种疾病里，两种标签的结果不能直接比较。本文属于后者，输入是切好的 5 s 帧，输出是 7 类诊断，评价要同时看类别不平衡下的平均分数、配对差异的可信程度和全链路耗时。

### 论文要回答的五个具体问题

论文把选型困难拆成 5 个可检验的问题。第一，从零训练的紧凑卷积 Transformer 能否接近预训练网络，紧凑卷积 Transformer 在 CIFAR-10 上曾用 3.7 M 参数从零做到 98% 准确率，但没有在合并的肺音库上验证过。第二，一两个百分点的差距能否与噪声区分，需要同一测试集与配对区间，而不是各用各的划分报最高值。第三，知识蒸馏能否把预训练知识传给从零训练的紧凑 Transformer，教师是 ImageNet 预训练的小网络，学生是肺音上训练的紧凑 Transformer。

第四，归因图是否真的依赖训练好的权重，以及学到的特征是否混入了录音来源信息，因为 3 个类别只来自单一数据库，来源本身就可能是捷径。第五，参数量小是否等于部署便宜，声音转图像的三步变换同样跑在设备上，在单片机上 MFCC 曾被估计为 763 ms 而网络只要 127 ms。

下表把相关工作按遗留问题对照，重点看小模型与预训练比较、变换耗时是否分离这两列，后文的配对区间、逐变换计时与来源探测正是补这些缺口。

| Study | Method | Reported result | Limitation |
| --- | --- | --- | --- |
| Roy et al. Roy et al. [2024] | triple-scale self-operational network, seven pooled classes | accuracy 98.88% (five-fold), 0.414 M parameters, 0.0055 GFLOPs, 3.48 s per segment on a Raspberry Pi 4 | compared with fine-tuned ResNet-50, MobileNet and ShuffleNetV2 without paired intervals, transform time not separated |
| Abadade et al. Abadade et al. [2024] | TinyML pipeline on an Arduino Nano 33 BLE Sense | MFCC estimated at 763 ms against 127 ms for the CNN | estimated timing, two classes |
| Park et al. Park et al. [2025] | mel, chroma and MFCC stacked, 264 K-parameter CNN | accuracy 89.46%, Raspberry Pi 5 with Hailo-8 | compared with five baselines, ResNet50 among them, without paired intervals |

这张表说明比较必须在相同任务与相同输入下进行。Roy 等人用同样三库 7 类做到 98.88% 五折准确率并报了树莓派耗时，但与微调的 ResNet、MobileNet 比较时没有配对区间，也没有分离变换时间。Abadade 等人估计了 MFCC 与网络的时间比，但只有两类且是估计值。Park 等人堆叠多视图并在加速器上计时，但基线比较同样没有配对区间。论文后文把同一 2,359 帧测试集、同一指标与文件级自助区间固定下来，再逐个回答上面的问题。

### 整体流程如何把录音变成诊断并完成评价

全流程可以沿着一个录音文件走一遍。3 个公开库 ICBHI、KAUH 与 RD@TR 共 1,665 个音频文件先汇到一起，按 7 类诊断保留并切成 5 s 帧，每帧再生成 mel 频谱图、常数 Q 变换与倒谱系数 3 张图，堆成 3×64×40 的输入。RespCCT 与 FreqCCT 在这种堆叠输入上从随机初始化开始训练，另有 5 个 ImageNet 预训练网络、两个更大 CCT 变体及其蒸馏版本在同一帧上微调或训练，最后在同一测试折上比较。

评价分成 4 条线并行。主指标是宏平均 F1 与准确率，差异用文件级配对自助区间判断。结构消融 1 次去掉一个部件，蒸馏用两个小预训练网络做教师，解释检查包括权重随机化、遮挡与 Shapley 归因以及数据库来源的线性探测，代价检查包括参数量、运算量、权重存储、峰值激活内存与单 CPU 线程延迟。下图给出这种分工，输入、模型与评价各占一块。

> **看图路径：** 1. 先从左到右看三库汇入、帧切分、三图堆叠、两类模型与评价的五块走向；2. 注意紧凑模型与更大变体、预训练基线共用同一输入箭头；3. 再看底部评价条如何把折数、指标、消融蒸馏与可解释代价并列

[![原论文 Figure 1：Overview of the study, covering data pooling and framing, three time–frequency images per frame,…](https://arxiv.org/html/2611.24323v1/fig1_framework.png)](https://arxiv.org/html/2611.24323v1/fig1_framework.png)

*论文图 1。原论文 Figure 1:：“Overview of the study, covering data pooling and framing, three time–frequency images per frame, the compact and reference models and the evaluation steps.”。*

这张总览图把容易混淆的分支说清楚了。数据分支只做汇聚、成帧与平衡，不引入外部预训练权重。图像分支三视图并行但最后堆成一个张量进入模型，说明后文消融去掉某个视图时改变的是通道数而不是多流结构。模型分支把两个紧凑模型放在前面，更大变体与预训练基线共用输入，保证比较的是模型而不是输入尺寸。底部评价条提醒读者，主结果、蒸馏、可解释与代价是同一批训练权重上的不同测量，不能只看准确率一列。

### 一帧声音如何变成三张图

每段录音先转单声道并重采样到 4 kHz，这样 5 s 正好是 20,000 个采样点，分析带宽是 0 到 2 kHz，覆盖约 60 到 2,000 Hz 的呼吸音范围。不足 5 s 的补零，每 2.5 s 切 1 帧即 50% 重叠，ICBHI 平均呼吸周期约 2.7 s，所以 1 帧平均包含约 1.9 个周期，既能装下完整吸气呼气，又不让图像过大。每帧先把 0 到 1 Hz 的傅里叶 bins 置零以去掉直流漂移，再除以最大绝对值消除不同设备的响度差异。

三视图是对同一帧的不同描述。mel 频谱图从短时傅里叶变换出发，用 64 个 Slaney 三角滤波器在 0 到 2,000 Hz 加权，取对数并相对最大值做分贝归一，低于峰值 80 dB 截断。常数 Q 变换用随频率收缩的窗长得到等比频率 bins，每倍频 12 个，从 32.7 Hz 起共 64 个，到约 1.24 kHz，在低频比 mel 更密，同样做对数与 80 dB 截断。倒谱系数对 30 个 mel 带的对数能量做正交离散余弦变换，30 个系数全保留，刻画的是包络形状。3 张图各自做最小最大归一到 0 到 1，双线性插值到 64×40，再以半精度堆成 3×64×40。

**mel 频谱图 × 常数 Q 变换：** mel 频谱图负责给出 0 到 2 kHz 全带的感知加权能量分布，常数 Q 变换负责在低频给出等比间隔的更密频率划分，二者分工互补，堆叠后让同一帧同时带有宽带轮廓和低频细节，组合的意义是给小模型提供不依赖单一滤波器形状的输入。

下图把清洗与 3 条分支的参数并排放出，读图时注意跳长差异带来的列数差异，mel 用 524 得到约 39 列，另两路用 512 得到 40 列，最后统一插值才对齐。

> **看图路径：** 1. 先看左侧帧清洗三步再看右侧三条分支的参数框；2. 对比 mel、CQT 与 MFCC 各自的滤波器数、跳长与分贝处理；3. 最后看最小最大归一与 3×64×40 堆叠如何汇成网络输入

[![原论文 Figure 2：Preprocessing and image generation.](https://arxiv.org/html/2611.24323v1/fig2_preprocessing.png)](https://arxiv.org/html/2611.24323v1/fig2_preprocessing.png)

*论文图 2。原论文 Figure 2:：“Preprocessing and image generation. A cleaned 5 s frame is converted into mel, CQT and MFCC images, which are scaled, resized and stacked.”。*

这张图确实可见左侧只有漂移去除与峰值归一两步，没有做复杂的降噪，右侧 3 路各有滤波、能量与分贝或余弦步骤，末端都汇入同一个最小最大与尺寸归一。它的教学价值是说明代价来自哪里，常数 Q 分支的窗长随频率变化，计算量明显大于固定窗的 mel 与倒谱分支，后文 25.0 ms 对 2.81 ms 与 1.80 ms 的计时正对应这里的结构差异。mel 的能量汇聚公式如下，先算功率谱再经滤波器加权取对数并截断。

\[\begin{split}P_{m}[t]&=\sum_{k}H_{m}[k]\,|X[k,t]|^{2},\\ S_{\mathrm{mel}}[m,t]&=\max\!\Big(10\log_{10}\frac{P_{m}[t]}{\max_{m^{\prime},t^{\prime}}P_{m^{\prime}}[t^{\prime}]},\,-80\Big).\end{split}\]

该式先形成每帧每频点的功率，再按 mel 滤波器合并，最后相对全局最大值取分贝并封底，目的是压住近静音 bins 的权重，结果交给归一与堆叠步骤。

### RespCCT 与 FreqCCT 各自如何读这三张图

RespCCT 的输入是 3×64×40。先过视图门，门按三视图的空间均值经两层线性加激活给出 0 到 2 之间的权重，3 个视图分别相乘，门只有 59 个参数，作用是让网络自己调大或调小某个视图。接着是卷积切分器，两段 3×3 卷积加 ReLU 与 3×3 步长 2 池化，把平面压到 16×10，再按行读成 160 个 64 维 token，每个 token 已带有邻域信息，所以不再加位置嵌入。

随后是 4 个预归一化 Transformer 块，每块是注意力残差加前馈残差，注意力为四头每头 16 维，前馈宽度 128，训练时带随机深度跳块。最后不用类别 token，而是用线性层给 160 个 token 打分再做 softmax 加权平均得到帧向量，经 64 到 7 的线性层输出 7 类概率。RespCCT 共 173,187 个参数，每帧 124.2 MFLOPs。FreqCCT 保留切分器与编码器但做四处精简，第二层卷积改为深度可分离，加可学习位置嵌入，前馈宽度降到 64，尾部改为先层归一再按时间平均，保留 16 个频率行展成 1,024 维再分类，共 124,999 个参数，每帧 72.5 MFLOPs，比 RespCCT 少约 42% 运算。

**卷积切分器 × Transformer 编码器：** 卷积切分器负责把 64×40 的平面用两层卷积加池化变成 160 个带邻域信息的向量，Transformer 编码器负责在这组向量之间做自注意力与前馈变换，二者搭配让模型在小数据上也能得到有序的 token 再做全局交互，组合后省掉了大数据预训练对位置建模的依赖。

下图是 RespCCT 的形状与参数标注，上半是主路径，下半展开一个 Transformer 块，注意残差加法与层归一化的顺序不要与常规后归一化混淆。

> **看图路径：** 1. 从左到右数视图门、卷积切分器、Transformer、池化与线性层的参数标注；2. 注意下方单块展开中的残差加法与两处层归一化位置；3. 对照 160 个 token 与 64 维向量的标注理解形状变化

[![原论文 Figure 4：RespCCT architecture with the parameter count of each stage, and the lower panel expands one…](https://arxiv.org/html/2611.24323v1/fig3_respcct.png)](https://arxiv.org/html/2611.24323v1/fig3_respcct.png)

*论文图 4。原论文 Figure 4:：“RespCCT architecture with the parameter count of each stage, and the lower panel expands one transformer block.”。*

这张图可见输入立方体先变薄再变成 160 个 token 的长方体，Transformer 与层归一化之后经序列池化压成 64 维，再经线性层变成 7 个概率点。下半单块图可见注意力与前馈各有自己的归一化与残差，MLP 标注为 64、128、64 与 GELU，对应正文的前馈宽度。视图门的加权公式与序列池化的加权平均公式如下，前者控制通道，后者控制 token。

\[g=2\,\sigma\big(W_{2}\,\rho(W_{1}\bar{x}+b_{1})+b_{2}\big)\in(0,2)^{3},\qquad\hat{X}_{c}=g_{c}X_{c},\]

该式先对三视图取均值得到 3 维向量，经 8 维隐层再映射回 3 维并乘 2，经 Sigmoid 后落在 0 到 2 之间，结果逐通道乘回原图。

\[a_{i}=\frac{\exp(u^{\top}z_{i}+b_{u})}{\sum_{j=1}^{160}\exp(u^{\top}z_{j}+b_{u})},\quad r=\sum_{i=1}^{160}a_{i}z_{i},\quad\hat{p}=\mathrm{softmax}(W_{c}r+b_{c}),\]

该式先给每个 token 算一个标量分，softmax 后做加权和得到帧向量，再经分类矩阵输出概率，目的是让模型自己决定看哪些时频位置。

**视图门 × 序列池化：** 视图门负责按每帧三个视图的空间均值给出 0 到 2 之间的加权，序列池化负责给 160 个输出 token 打分并加权平均成一个帧向量，前者做输入端的通道选择，后者做输出端的 token 选择，组合后模型同时学会看重哪个视图和看重哪个时频位置。

FreqCCT 的改动有明确理由。RespCCT 在时间循环移位下预测很少变化，0.6、1.3 与 2.5 s 移位只改变 1.3%、1.8% 与 1.7% 的预测，说明证据在于出现哪些局部模式而不在帧内绝对位置，因此 FreqCCT 保留频率位置而平均掉时间。更大变体 CCT-M 与 CCT-L 分别把宽度加到 128 与 192、块数加到 6，用来检验容量本身能否追上预训练网络。

### 数据如何配平、模型如何训练与蒸馏

合并后 COPD 占 9,837 帧约 83%，直接训练会被大类淹没。做法是在划分前对除 COPD 外的每类做增强复制直到每类 9,837 帧，共 68,859 帧。增强对每帧等概率选拉伸、变调、加噪或三者串行，拉伸 0.85 到 1.15，变调正负 3 半音，噪声幅度 0.001 到 0.01，标签保持原帧标签。五折按类别分层划分，种子 42，第 0 折的 2,359 个原始帧留作所有模型比较的测试集，另四折中 10% 做验证，测试帧从不增强，训练时每帧再加两个最多 8 列的时间掩蔽。

RespCCT 与 FreqCCT 共用一套在验证集上搜到的配方。优化器为 AdamW，学习率 0.002946，权重衰减 0，批量 128，标签平滑 0.15，余弦退火，梯度范数裁剪到 1.0，随机深度 0.0847，MLP 与注意力丢弃约 0.088 与 0.081，权重做指数滑动平均并用平均权重验证与上报，最多 100 轮，若验证损失 12 轮不下降超过 0.0001 则停并回退到最优点。目标是无类别权重的平滑交叉熵，因为训练池已配平。预训练基线同样 128 批量与 0.15 标签平滑并端到端微调，输入按 ImageNet 均值方差归一并放大到 128×80，其中两个最小网络在 3 个学习率里选优，其余固定 0.001。

下表对比普通训练与蒸馏训练的超参数差异，读表时注意蒸馏同时换了混合增强与标签平滑，这是后文不能把提升只归于教师的原因。

| Model group | Learning rate | Weight decay | Batch | Label smoothing | Mixup |
| --- | --- | --- | --- | --- | --- |
| RespCCT, FreqCCT | 0.002946 | 0 | 128 | 0.15 | 0 |
| CCT-M plain | 0.001414 | 0.03 | 256 | 0.15 | 0 |
| CCT-M with distillation | 0.001414 | 0.03 | 256 | 0 | 0.3 |

这张表支撑的判断是配方差异与模型差异绑在一起。RespCCT 行用 0.15 标签平滑且无混合，CCT-M 蒸馏行用 0 混合 0.3 且无标签平滑，学习率、权重衰减与批量也不同，因此蒸馏增益混入了正则与增强的变化。实际复现时若要分离教师作用，需要补做同配方有无教师的对照，而不是只比较普通 CCT-M 与蒸馏 CCT-M。

**知识蒸馏 × 混合样本增强：** 知识蒸馏负责让学生输出去拟合两个预训练教师的平均软标签，混合样本增强负责把两个样本按比例混合后再算交叉熵，二者在蒸馏运行里同时出现，前者引入外部知识，后者改变训练分布，组合后准确率变化不能只归因于教师。

蒸馏用 MobileViT XXS 与 MobileNetV3 Small 做教师，学生与教师同吃混合样本，教师输出平均后再与学生输出算散度，损失如下，温度为 1，权重 0.8。

\[\mathcal{L}=(1-\alpha)\,\mathcal{L}_{\mathrm{CE}}+\alpha\,\mathrm{KL}(\bar{p}_{T}\,\|\,\hat{p}),\qquad\alpha=0.8,\]

该式左侧是普通交叉熵项，右侧是平均教师分布与学生分布的 KL 项，系数 0.8 偏向教师，混合样本的交叉熵部分不再用标签平滑，结果用于更新学生，教师权重冻结。

### 划分、指标、统计与代价如何测量

划分要讲清适用边界。五折按类别分层，折 0 的 2,359 帧是全部比较的公共测试集。RespCCT 跑五折 3 种子共 15 次，FreqCCT 跑五折一种子，基线与更大变体及消融只在折 0 跑 1 次。帧按 2.5 s 步长切分且相邻帧重叠 2.5 s，折在帧级别划分，因此测试帧可能与同文件的训练帧共享音频，分数描述的是同 cohort 中新帧的表现，不是新病人或新设备。类别与来源绑定严重，URTI、支气管扩张与细支气管炎只来自 ICBHI，哮喘 520 帧中 513 帧来自 KAUH，RD@TR 只提供 COPD，只按来源多数类猜也能到 86.3% 准确率。

主指标是宏平均 F1，给 7 类同等权重，公式如下，同时报准确率、平衡准确率、多类 MCC、宏平均 AUC 与十箱期望校准误差。文件级投票把每文件的多数帧标签作为文件标签。差异用音频文件级配对自助估计，缺类折中跳过该类，重采样 500 次用于预训练比较、300 次用于消融、1,000 次用于大模型准确率差，区间为 2.5 与 97.5 分位数，区间不含零才算可靠，McNemar 只作参考并经 Holm 校正。

\[F1_{c}=\frac{2TP_{c}}{2TP_{c}+FP_{c}+FN_{c}},\qquad\text{macro F1}=\frac{1}{K}\sum_{c=1}^{K}F1_{c}.\]

该式先按真阳性、假阳性与假阴性算每类 F1，再在 7 类上平均，目的是让只有 18 帧的细支气管炎与 1,967 帧的 COPD 有同等话语权，结果用于模型排序与区间估计。

代价测五项，参数量、每帧浮点运算、32 位权重存储、峰值激活内存与延迟。PyTorch 在单线程云 CPU 上测 200 次中位数与 90 分位数，RespCCT 不含视图门计时，三图变换单独计时再与模型相加，不是端到端实测。ONNX Runtime 1.31.1 在单线程 Xeon 2.20 GHz 上复测并校验预测一致。解释测四项，类加权 rollout 与贡献图的随机化秩相关、遮挡与 Shapley 的类间区分度、时间移位稳定性，以及 64 维向量上预测数据库来源的五折按病人分组线性探测。

### 同一测试集上谁更准、差距是否可靠

所有模型都在折 0 的 2,359 帧上打分，差异只来自模型。RespCCT 准确率 0.9813，宏平均 F1 0.9695，文件投票到 0.985。FreqCCT 为 0.9758 与 0.9514，参数少 28%，宏平均 F1 低 0.018，区间为负值一侧不含零，说明省内存有可测代价。RespCCT 的 44 个错误中有 38 个是 COPD 被判成他类，COPD 召回 0.981 而精度 0.999，FreqCCT 的 57 个错误同样集中在 COPD 外判。2 模型对肺炎、URTI、支气管扩张与细支气管炎全对，但后两类测试帧只有 29 与 18 帧，满分的不确定性很大。五折均值上 RespCCT 为 0.9760 与 0.9585，FreqCCT 为 0.9695 与 0.9408，折 2 最难，折内多种子标准差与折间标准差量级相近，约 0.01 以下的宏平均 F1 差距不宜读成实质差异。

与预训练网络的比较需要同时看点估计与区间。下表选出紧凑模型、蒸馏后大 CCT、集成与最强小预训练网络的准确率、宏平均 F1 与错误数，条件是同一测试折与同一三图输入放缩后的可部署形态，指标方向都是越高越好，错误数越低越好。

| Model | Acc. | F1 | Errors |
| --- | --- | --- | --- |
| RespCCT | .9813 | .9695 | 44 |
| CCT-M + KD | .9864 | .9748 | 32 |
| Ensemble of four CCTs | .9903 | .9813 | 23 |
| MobileViT XXS | .9911 | .9843 | 21 |

这张表支撑的判断是位置而非简单的胜负。RespCCT 排在 7 模型中第五，领先 ShuffleNetV2 与 FreqCCT，落后 MobileViT XXS 与 EfficientNet-B0 约 0.015 宏平均 F1 且区间排除零，与 MobileNetV3 Small、ResNet-18 与 ShuffleNetV2 的差距区间都含零。它的意义在于存储从 1.40 MB 到 44.72 MB 降到 0.69 MB，代价是头部约 0.015 的差距，是否值得取决于设备能否装下预训练权重。

同一组数字用连续原句整理如下，准确率保留百分号，宏平均 F1 保留原文小数，便于核对条件都是折 0 测试帧与 7 类诊断。

| 条件 | 指标 | RespCCT | FreqCCT | 对照模型 |
| --- | --- | --- | --- | --- |
| 折 0 测试帧，7 类 | 准确率 | 98.13% | 97.58% | MobileViT XXS 99.11%，EfficientNet-B0 99.15% |
| 折 0 测试帧，7 类 | 宏平均 F1 | 0.970 | 0.951 | MobileViT XXS 0.984，EfficientNet-B0 0.984 |

上表说明最强两预训练各高约 1 个百分点准确率与约 0.014 宏平均 F1，且差距区间排除零，而 RespCCT 与另 3 个预训练的差距区间含零。它的限制同样清楚，基线与大变体只跑 1 次，折 0 对 RespCCT 偏有利，五折 3 种子均值回落到 97.65% 与 0.959，因此单折点估计不宜当作部署保证，还要对照五折均值与区间一起读。

**宏平均 F1 × 配对自助区间：** 宏平均 F1 负责给七个类别同等权重以避免 COPD 大类主导分数，配对自助区间负责在同一组测试音频文件上重采样并看两个模型差值的分布，二者搭配才能判断 0.01 量级的差距是模型差异还是抽样波动，组合后小差距不再被直接读成胜负。

混淆细节也指向类别不平衡。RespCCT 把 20 个 COPD 判成健康、15 个判成哮喘，健康与哮喘的精度因此只有 0.865 与 0.847，但召回都在 0.964 以上。FreqCCT 把 12 个 COPD 送进肺炎、3 个送进 URTI，拉低这两类的精度。健康与哮喘多来自 KAUH，误判可能同时跟随声音与来源，但论文未按来源拆分每个错帧，所以不能把这部分直接定量为来源捷径。

### 哪些部件不可少、蒸馏与代价各说明什么

消融 1 次去掉一个部件并保持训练配方，区间只反映测试音频抽样而不反映训练随机性。下图横轴是相对完整 RespCCT 的宏平均 F1 变化，零线右侧为提升，横线为 95% 配对区间，实心为区间排除零。

> **看图路径：** 1. 先看横轴零线再看每条横线的区间是否跨过零线；2. 区分空心与实心标记所代表的区间是否排除零；3. 注意无 Transformer 一项在轴外，说明它与其他项不在同一量级

[![原论文 Figure 8：Change in fold-0 macro F1 of each ablation relative to the full RespCCT, with 95% paired bootstrap…](https://arxiv.org/html/2611.24323v1/fig5_ablation.svg)](https://arxiv.org/html/2611.24323v1/fig5_ablation.svg)

*论文图 8。原论文 Figure 8:：“Change in fold-0 macro F1 of each ablation relative to the full RespCCT, with 95% paired bootstrap intervals, and filled markers exclude zero.”。*

这张图可见只有少数横线完全落在零线左侧。去掉 Transformer 块掉 0.292 且在轴外，说明切分器 alone 远远不够。去掉 mel 掉 0.034 且区间排除零，是视图中唯一可靠的损失。注意力换成同参数前馈掉 0.018 且区间排除零，说明注意力带来容量之外的增益。mel 单视图、mel 加 CQT、mel 加 MFCC 各掉 0.005 到 0.010 且区间含零，类别 token 掉 0.014 且区间排除零，视图门掉 0.011 且区间上端触零，3 种子均值只差 0.004，因此门保留只因它仅 59 参数而非证据很强。手调参考配方掉 0.032，说明正则与权重平均贡献很大。

蒸馏与集成的数字要连同配方一起读。CCT-M 普通版 0.9843 与 0.968，蒸馏版 0.9864 与 0.9748，CCT-L 普通版 0.9792 与 0.9637，蒸馏版 0.9852 与 0.9680，4 模型集成 0.9903 与 0.9813。蒸馏版 CCT-M 相对 RespCCT 高 0.0051，区间含零，不可靠，且蒸馏同时用了混合与去标签平滑，不能单独归因于教师。集成与 MobileViT、MobileNetV3 的差距区间含零而与 RespCCT 的差距可靠，但代价是 6.2 M 参数与 3,345 MFLOPs，约为 RespCCT 的数十倍。

代价的结论是图像重于网络。单线程上 mel 2.81 ms，常数 Q 25.0 ms 占 84%，MFCC 1.80 ms，三图共 29.6 ms，RespCCT 网络 6.43 ms，合计约 36.0 ms，新帧每 2.5 s 来 1 帧，占空比约 1.4%。去掉常数 Q 可省 25.0 ms 而宏平均 F1 只变负 0.005 且区间含零，但这只在一折成立。ONNX 上 FreqCCT 3.11 ms，RespCCT 无门 3.73 ms，有门 6.46 ms 且尾延迟更高，原因未查明，因此论文 latency 按无门上报。

**遮挡归因 × 来源探测：** 遮挡归因负责检验哪个时频区域被盖住后类别概率下降，来源探测负责检验 64 维帧向量里还剩多少可判别数据库的信息，前者看模型用了输入的哪里，后者看模型是否顺带记住了录音来源，组合后才能区分诊断依据与数据捷径。

可解释检查给出 3 层信息。权重逐层随机化后类加权 rollout 秩相关从 0.95 经 0.66 掉到 0.10 并终在 0.17，低于 0.3 通过线，贡献图终在 0.012 但只重置分类头就掉到 0.216，更跟随分类头。遮挡与 Shapley 的类间平均相关为 0.292 与 0.277，说明不同类别的图确有区分，健康与肺炎集中在第 5 行，哮喘与 URTI 分散多行。64 维向量预测数据库来源达 0.958，FreqCCT 为 0.964，远高于多数来源基线 0.582，但来源与类别绑定，探测值混入标签信息，未做去来源后的准确率测试。

### 结论在什么条件下才成立

第一，折在帧级别划分且相邻帧重叠 2.5 s，测试帧可能与同文件的训练帧共享音频，分数是同 cohort 中新帧的表现，不能直接推广到新病人或新医院。论文明确建议补文件分组、病人分组与留一库测试，当前数字没有这一层保证。

第二，类别与来源绑定，3 个类别只来自 ICBHI，哮喘几乎只来自 KAUH，RD@TR 只有 COPD，来源探测 0.958 说明特征里有来源信息，合并库上的高分可能部分来自来源捷径。在来源均衡或留一库测试前，不能把 98.13% 当作跨设备性能。

第三，基线、更大变体与消融在折 0 只跑 1 次，蒸馏又混入混合与标签平滑变化，0.015 的头部差距与 0.007 的蒸馏增益都只基于单次运行。折与种子各带来约 0.006 到 0.011 的波动，论文自己提醒 0.01 以下不宜读成实质差异。

第四，计时都在共享云 CPU 单线程上，没有手机或单板实测，ONNX 有门图慢近 1 倍的原因也未查明。权重、激活与延迟都是 32 位精度下的值，量化后与目标设备上的排序可能变化，视图门的代价与实现有关，不宜直接当作硬件选型结论。

### 复现第一步做什么、代码与数据在哪里

数据来自公开的 ICBHI、KAUH 与 RD@TR，论文给出三库的引用与获取入口，不需要新采病人数据。作者资源当前可用，代码、配置文件、每轮结果与作图来源在 <https://github.com/auntor101/respcct-freqcct> 按 MIT 许可公开，但训练好的模型权重未发布，复现需要自己训练。

第一步建议锁定折 0 的 2,359 个原始测试帧与三图参数。采样 4 kHz 单声道，5 s 帧与 2.5 s 步长，0 到 1 Hz 置零并按峰值归一，mel 64 带 1024 点 524 跳长，CQT 64 bins 每倍频 12 个最低 32.7 Hz 跳长 512，MFCC 30 系数 30 带 1024 点跳长 512，各自 80 dB 封底再最小最大到 0 到 1 并插值到 64×40。平衡只在训练侧做增强复制到每类 9,837 帧，测试侧保持原始帧，训练配方用学习率 0.002946、标签平滑 0.15、两处最多 8 列时间掩蔽与权重滑动平均，早停回退到验证最优点。

核对时先复现 RespCCT 在折 0 的准确率与宏平均 F1，再跑文件级投票与配对自助区间，最后单独计时三图与网络。蒸馏复现必须把混合与标签平滑的差异拆开，先做同配方有无教师的对照，再谈教师贡献。解释复现先做随机化相关是否掉到 0.3 以下，再做来源探测是否远高于多数类基线，两项都通过才能谈归因图的依赖性。

### 什么时候值得尝试、还需补哪项验证

当设备装得下约 0.7 MB 权重并能接受约 36 ms 每帧的云 CPU 量级耗时，且任务是同三库类似录音的辅助判读时，RespCCT 值得作为起点，它的宏平均 F1 高于 FreqCCT 且差距可靠。当内存是硬约束且能接受约 0.018 宏平均 F1 损失时，FreqCCT 更合适，它的两种计时都是全场最低。当漏诊代价极高且设备允许数 MB 权重时，最强预训练网络错误更少，但需要 ImageNet 权重与更大输入，不能只看参数量，还要把三图时间加回去再比。

行动顺序是先定输入再定模型。先在目标机上实测 mel、CQT 与 MFCC 的时间，因为三图 29.6 ms 已超过网络 6.43 ms，若常数 Q 太贵可先试 mel 加 MFCC，但要全折验证。再按同测试集与配对区间比较候选模型，不要用单折点估计做决策。最后做来源均衡或留一库测试与病人分组测试，确认去掉来源线索后宏平均 F1 的跌落是否可接受，并请临床医生复核每条预测，模型只做决策支持而非诊断。

常见误解需要澄清。参数少不等于全链路便宜，RespCCT 运算量是 MobileNetV3 Small 的 5 倍以上，只是延迟被图像时间稀释。归因图通过随机化检查不等于有临床含义，论文明确不对 COPD 低频占比做生理学解读，心音也在 20 到 150 Hz 且房间与设备都可能贡献。蒸馏后追平预训练不等于教师知识已转移，因为配方同时变了。跨库泛化、整数量化与目标板实测都还没做，这些补齐前不宜把当前数字当作部署承诺。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.24323v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
