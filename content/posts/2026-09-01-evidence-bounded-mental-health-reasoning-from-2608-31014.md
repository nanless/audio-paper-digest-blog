---
title: "Evidence-Bounded Mental Health Reasoning from Heterogeneous Speech Protocols"
date: 2026-09-01
draft: false
tags: [语音情感识别, 大语言模型, 模型集成, 基准测试]
categories: [论文速递]
description: "语音情感识别 | 6.8/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.31014"
paper_digest_api_reader_contract: "beginner-researcher-v2"
paper_digest_api_reader_article_sha256: "742665fe2e77734508beded481d1c2c9d54c8747d37aa6e07fa748a8bc47e273"
paper_digest_api_reader_plan_sha256: "ec744bc37cb43a64668cb524fb12d80569ba152029d71ea49aa7c60afe0c71b9"
---

# 📄 证据有边界，推理才可信：把临床语音的采集协议写进模型的许可表

> 英文题目：*[Evidence-Bounded Mental Health Reasoning from Heterogeneous Speech Protocols](https://arxiv.org/abs/2608.31014)*
>
> 一句话：**面对访谈、诱发、朗读等协议证据效力不同的难题，论文把筛查重构为证据有界推理，用协议画像与许可矩阵约束 EviBound 的路由与报告，在 366 例抑郁 held-out 上以 0.8658 AUROC 超越最强直接基线并实现零违规，代价是分数增益几乎全部来自五路声学共识且焦虑与小样本协议的结论仍不稳定。**

> 标签：#语音情感识别 #大语言模型 #模型集成 #基准测试
>
> 评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chengyuan Gao：Beijing University of Posts and Telecommunications；Harbin Institute of Technology；Renyixun Health Technology Co., Ltd.
- Jiang Wu：GDIIST
- Tao Lu：Renyixun Health Technology Co., Ltd.
- Jiayan Guo：Tencent
- Mingkun Xu：Beijing University of Posts and Telecommunications；Harbin Institute of Technology；Renyixun Health Technology Co., Ltd.；GDIIST；Tencent
- Tianyi Zang：Beijing University of Posts and Telecommunications；Harbin Institute of Technology；Renyixun Health Technology Co., Ltd.；GDIIST；Tencent
- Shangyang Li：Beijing University of Posts and Telecommunications；Harbin Institute of Technology；Renyixun Health Technology Co., Ltd.；GDIIST；Tencent

## 💬 毒舌点评

把临床语音筛查里人人挂在嘴边的协议边界警告做成了可执行的证据包与许可矩阵，并用冻结分数的确定性校验器把报告违规压到零，这比无约束地拉长思维链更符合安全诉求。代价是预测侧的增益几乎被五路声学共识吃干，证据治理本身对排名无显著提升，而抑郁与焦虑的核心结论仍建立在高度倾斜的来源分布与个位数探针样本上，却以接近最强的口径呈现。

## 📌 核心摘要

该工作针对多模态心理健康筛查中不同采集协议证据效力不等却被模型扁平化为单一推理空间的 epistemic flattening（认知扁平化）问题，将任务重构为证据有界推理。核心载体是 Evidence Package Benchmark，将 1,870 个来自 CMDC、DAIS-C、E-DAIC、EATD、MMPsy、MODMA 六源的样本统一为携带协议画像 \(P\)、模态掩码 \(M\)、许可矩阵 \(\Pi\) 的证据包 \(\mathcal{E}=(P,M,\Pi,\mathcal{X})\)，模型可见仅为音频 \(A\)、文本 \(T\)、特征 \(F\)，评估标签 \(y_{eval}\) 保持隐藏。框架 EviBound 通过画像感知规划器在推理前限定可激活证据路由 \(R(x)=\{k:\rho_k(x)=1\}\)、五路声学共识加权聚合风险分数 \(\hat{s}(x)=\sum_{k\in R(x)}w_k s_k(x)/\sum_{k\in R(x)}w_k\)、以及满足 \(score(r')=score(r)\) 只读约束的边界校验器阻断越权声明，实现推理范围与报告生成解耦。主结果在 366 个抑郁合格 held-out 包（94 阳性）上达到 0.8658 AUROC，较最强直接基线 Gemini 3.5 Flash 高 0.0811（95% 配对 bootstrap 区间 [0.0476, 0.1175]），较 Qwen3-Omni-Flash 高 0.1942，同时实现 0% CVR 与 100% EBCPass；与五路声学共识差异仅 0.0007 区间包含 0。意义在于为临床语音研究提供了从追求无约束准确率转向可审计证据一致性的评测与系统路径。局限在于焦虑合格 264 个样本中 256 个来自 MMPsy、固定朗读等限制性协议样本仅 8 个，且边界规则为确定性编码难以覆盖开放域幻觉。

## 🔗 开源与复现资源

- 代码：论文中未提及代码链接，原文仅表述为 Code will be released upon publication，未提供 GitHub 或其他仓库 URL
- 模型权重：论文中未提及，未提供 HuggingFace 或 ModelScope 链接
- 数据集：论文中未提及数据集下载链接与开源协议，Benchmark 由 6 个来源共 1870 个 package 组成，具体构成为 CMDC 78 个、DAIS-C 28 个、E-DAIC 275 个、EATD 162 个、MMPsy 1275 个、MODMA 52 个，未给出公开获取 URL
- Demo：论文中未提及
- 复现材料：论文在附录中提供了部分可复现配置，具体包括硬件为 Linux kernel 6.8.0-110-generic 系统，AMD Ryzen Threadripper PRO 7965WX CPU 24 核 48 线程，188 GiB RAM，2 张 NVIDIA RTX PRO 6000 Blackwell Workstation Edition GPU，每张显存 97887 MiB，驱动版本 580.126.09，实验在 Conda 环境中执行，软件版本为 Python 3.10.20，PyTorch 2.8.0+cu129，CUDA 12.9，NumPy 2.2.6，pandas 2.3.3，scikit-learn 1.7.2，SciPy 1.15.3，librosa 0.11.0，soundfile 0.13.1，Transformers 5.8.0.dev0，商业基线通过厂商 API 调用并缓存，评估采用固定 package 顺序与冻结清单，验证集确定阈值与权重，测试集采用 2000 次 paired bootstrap 估计不确定性，所有表格由冻结清单与确定性脚本复现
- 论文中引用的开源项目：
  - PyTorch 2.8.0+cu129 https://pytorch.org
  - Transformers 5.8.0.dev0 https://github.com/huggingface/transformers
  - librosa 0.11.0 https://github.com/librosa/librosa
  - soundfile 0.13.1 https://github.com/bastibe/python-soundfile
  - scikit-learn 1.7.2 https://github.com/scikit-learn/scikit-learn
  - NumPy 2.2.6 https://github.com/numpy/numpy
  - pandas 2.3.3 https://github.com/pandas-dev/pandas
  - SciPy 1.15.3 https://github.com/scipy/scipy
  - openSMILE https://github.com/audeering/opensmile
  - wav2vec 2.0 https://github.com/facebookresearch/fairseq
  - HuBERT https://github.com/facebookresearch/fairseq
  - WavLM https://github.com/microsoft/unilm

## 🧭 深度解读

### 为什么这个任务不是把声音丢给模型就结束？
想象一个筛查流水线：有人做自由访谈，有人只朗读固定句子，有人只有文字记录。如果把这些都当成同一类输入，让同一个大模型自由发挥，它很可能从朗读稿的文字里读出抑郁症状，或在没有音频时描述语调变化。临床上，这类跨边界的推断本身就是不可信的。

论文把这种现象称为认知扁平化，也就是把不同采集协议背后的证据效力压平成一个无约束的推理空间。问题的核心不在模型不够大、思维链不够长，而在于缺少 1 张明确的许可表：什么证据能支撑什么结论，什么情况下必须说证据缺失。把这张表写清楚并让系统在运行时遵守，是后续所有设计的前提。

### 已有路线在解什么，留下了哪个空位？
语音心理健康筛查已经走过几条成熟路线。一条是声学特征与自监督表征，像 openSMILE/eGeMAPS、wav2vec 2.0、HuBERT、WavLM，把韵律、音色变化转成可计算信号；另一条是多模态融合与大规模多模态推理，让语言模型同时读音频与文本。公开资源如 DAIC-WOZ、CMDC、MODMA 等也覆盖了访谈、诱发、朗读等多种采集方式。

另一类工作关注临床评测的可靠性，提出超越单一准确率的评估思路，强调可追溯与可审计。与此同时，幻觉缓解、校验器引导解码等可信研究试图让生成更贴合事实。论文的空位在于，多数系统仍把异构协议当作证据等价的输入，缺少把协议与模态可用性变成可执行约束的接口。EviBound 的定位就是补上这个接口，让规划、取证、报告 3 段都受同一套边界管束。

### 任务如何被重新定义为证据有界推理？
论文把每个筛查样本定义为一个证据包。证据包里装着协议画像 P、模态掩码 M、许可矩阵 Π 与观测 X，模型能看到的只有音频 A、文本 T、特征 F，评估标签如 PHQ-9 分数或诊断标签则留在评估侧隐藏。这种划分直接堵住了靠记住量表阈值走捷径的可能。

在此之上，报告是否合法由许可函数判定：报告中每一条声明 c 都要在当前协议与模态下被允许。直观规则是，需要听感描述就必须有原始音频，需要症状史就必须有以参与者为中心的访谈，固定朗读的文本不能用来推断个人经历，缺失的证据要显式声明。形式化之后，原来只写在数据文档里的注意事项，就变成了运行时可以检查的约束。

### EviBound 的全景：从证据包到可审计报告
EviBound 是一条组合式流水线，输入是证据包，输出是结构化报告，中间经历规划、取证、生成、校验 4 步。整体数据流可以记为

\[\mathcal{E}\xrightarrow{\text{Planner}}\tau\xrightarrow{\text{Tools}}\{\mathcal{C}_{a},X_{s}\}\xrightarrow{\text{Decoder}}\mathcal{R}\]

其中 tau 是规划器给出的许可路由与报告契约，Ca 与 Xs 是声学与文本侧抽取的证据信号，R 是待校验的报告。最后一步校验器只改报告文字，不改风险分数。

证据包的形式化为

\[\mathcal{E}=(P,M,\Pi,\mathcal{X}),\]

P 区分访谈、诱发、朗读、纯文本等采集协议，M 标记 A/T/F 是否可用，Π 是 5 类协议-模态组合对应的声明许可表，X 是模型可见的观测。报告合法性的条件写作

\[\mathrm{permit}(c,M,P)=1,\quad\forall c\in\mathcal{C}(r),\]

含义是报告 r 中每条声明都必须被许可。图 1 要回答的正是这张许可表的直观含义：4 种协议分别能支撑声学、语义、话语与缺失证据声明到什么程度；图 2 则对应流水线的 3 个阶段，读者可对照图中从 Planner 到 Tools 再到风险分数与报告校验分叉的两条路径，理解分数只读与报告可修的分离设计。

### 三个关键组件各自负责什么？
画像感知规划器是 Agent-Evidence Interface，输入是证据包的 P 与 M，输出是可激活的证据路由集合 R(x) 与缺失证据契约。访谈可同时打开词汇、声学与特征路由，诱发与朗读只允许声学而屏蔽脚本语义，纯文本只允许话语分析。缺失模态在推理开始前就写入报告契约，使缺失成为显式承诺。

证据工具与风险路由层负责在许可范围内产生分数。音频侧 5 路分支各自给出校准后的风险与不确定度，按历史校准权重加权聚合：

\[\hat{s}(x)=\frac{\sum_{k\in R(x)}w_{k}s_{k}(x)}{\sum_{k\in R(x)}w_{k}},\]

R(x) 是规划器允许的路由，sk 是单路分数，wk 是权重，不可用路由在聚合前被掩码，分歧写入不确定度。词汇阅读器与特征路由处理文本与预抽特征，冻结的全模态大模型输出仅作辅助证据，源标识只用于兼容性掩码。

边界校验器与结构化报告负责把分数与文字解耦。报告包含风险分数、不确定度、证据归因、缺失证据、被阻断声明与校验状态，校验器检查模态幻觉、协议误用与越权临床声明，移除或重写违规句并记录原因，随后重做模式校验。全程满足分数只读约束：

\[\operatorname{score}(r^{\prime})=\operatorname{score}(r),\]

r' 是修复后报告，这保证 AUROC、F1 等排名指标不会被后处理改动，证据一致性则由独立的 CVR、MHR、EBCPass 衡量。

### 没有端到端大模型训练，系统如何确定参数与执行推理？
这项工作没有对大语言模型做端到端训练。声学侧的 openSMILE、wav2vec 2.0、HuBERT、WavLM 等编码器与词汇、特征路由是轻量可审计模块，商业多模态基线通过厂商 API 调用并缓存，EviBound 本身更像一个确定性编排器。

可调参数在验证集上确定：候选路由在 held-out 前注册并固定模态需求与输出规范，共识权重、操作阈值与特征混合比由验证集选定，测试集保持冻结。推理时按规划选路、并行取证、结构化生成、确定性校验的顺序执行，评估采用固定包顺序与确定性脚本。论文未披露损失函数、优化器、学习率、batch size、训练步数与解码温度等细节，不确定度通过 2000 次配对 bootstrap 估计。

### 用哪些数据、怎么划分、跟谁比、看什么指标？
根据论文正文与图中报告值整理，基准构成与划分如下：

| 来源 | 语言 | 数量 | 划分 训练/验证/测试 | 协议画像 | 模型可见输入 | 评估侧隐藏标签 |
|---|---|---|---|---|---|---|
| CMDC | 中文 | 78 | 57/8/13 | 访谈 | A+T | MDD/HC、PHQ/HAMD |
| DAIS-C | 英文 | 28 | 18/4/6 | 话语 | T | 分组/话语探针 |
| E-DAIC | 英文 | 275 | 163/56/56 | 访谈 | A+T+F | PHQ-8、严重度 |
| EATD | 中文 | 162 | 116/13/33 | 诱发式 | A | SDS、严重度 |
| MMPsy | 中文 | 1275 | 891/128/256 | 访谈 | T+F | PHQ/GAD、严重度 |
| MODMA | 中文 | 52 | 39/5/8 | 朗读 | A | MDD/HC、PHQ/GAD |

总量为 1870 个证据包，冻结划分为 1284/214/372，模态总量为 567 音频、1656 文本、1550 特征、1842 量表记录。抑郁合格 held-out 为 366 例含 94 阳性，焦虑合格为 264 例含 35 阳性，严重度子集 320 例。

基线在同一包接口下对比，覆盖直接多模态大模型 Qwen3-Omni-Flash、Qwen3.5-Omni-Plus、Gemini 3.5 Flash，长推理变体 Qwen3-Omni-Flash Thinking，以及声学侧的 5 路共识。预测效用看 AUROC、Macro-F1、QWK，数值越高越好；证据一致性看 CVR 越低越好、EBCPass 越高越好。统计上对 AUROC 差值做 2000 次配对 bootstrap 给出 95% 区间。硬件为 Threadripper PRO 7965WX、188 GiB 内存、2 张 RTX PRO 6000，软件栈为 Python 3.10.20、PyTorch 2.8.0+cu129、CUDA 12.9 等。

### 主结果说明了什么，又在哪些对比上没有拉开差距？
根据论文正文与图中报告值整理，关键 held-out 结果如下：

| 比较或条件 | 指标 | 明确报告值 | 这项数字支持什么 |
|---|---|---|---|
| EviBound vs Qwen3-Omni-Flash，抑郁合格 366 例 | AUROC 差值 | +0.1942，95% 区间 [0.1329,0.2545] | 在统一包接口下，协议治理显著优于直接多模态提示 |
| EviBound vs Gemini 3.5 Flash，抑郁合格 | AUROC 差值 | +0.0811，区间 [0.0476,0.1175] | 对最强直接基线仍有稳定提升 |
| EviBound vs 5-way Acoustic Consensus，抑郁合格 | AUROC 差值 | +0.0007，区间 [-0.0155,0.0170] | 分数增益主要来自声学集成，治理本身未额外提升排名 |
| EviBound vs Qwen3-Omni-Flash，焦虑合格 264 例 | AUROC 差值 | +0.1009，区间 [0.0237,0.1810] | 焦虑上有提升，但样本高度集中于 MMPsy |
| EviBound vs Gemini 3.5 Flash，焦虑合格 | AUROC 差值 | +0.0313，区间 [-0.0160,0.0789] | 与最强基线差距与零重叠，稳定性有限 |
| 证据一致性，held-out 全量 | CVR / EBCPass | EviBound 0.000/1.000，直接基线 0.070-0.318 / 0.661-0.931 | 校验器在封闭权限表下实现零违规与全量通过 |

协议分层显示，访谈抑郁 325 例上 EviBound 为 0.8456，高于 Qwen3 的 0.7504；诱发式 33 例达 0.9779、朗读 8 例 0.7333，提升幅度看起来很大，但小样本区间的宽度决定了这些数字更适合当作边界压力探针，而非泛化结论。焦虑访谈 256 例仅高 0.0086，进一步说明焦虑结论受单一来源主导。

一个值得关注的负结果是长推理变体的表现：Qwen3-Omni-Flash Thinking 在抑郁与焦虑上分别低于直接版 0.0499 与 0.0322，CVR 升至 0.318。拉长思维链没有自动带来协议感知，反而放大了越界风险，这与论文强调的边界控制优先于推理长度的判断一致。

![原论文 Figure 2：The EviBound framework architecture.](/audio-paper-digest-blog/images/papers/2608.31014/figure-2-c13e162680fa2638.png)

*论文图 2。这张图来自原论文 Figure 2:，图示内容为“The EviBound framework architecture. (1) The Profile-Aware Planner parses the evidence package E\mathcalE to select admissible routes and enforce the…”。请结合“主结果说明了什么，又在哪些对比上没有拉开差距？”的正文，按图例、坐标轴或模块连线核对；图中没有呈现的内容不作外推。*

### 增益来自哪里：路由、声学聚合还是校验器？
消融在抑郁合格任务上拆解了增益来源。仅靠包感知路由的 Base Harness 从 0.6716 提升到 0.7270，说明先做许可再推理本身就有收益。单一声学路由已达到 0.8316 至 0.8565，5 路共识进一步到 0.8652，EviBound 最终为 0.8658 且 F1 从 0.6316 升至 0.6557。

这组阶梯说明预测侧的跃升主要由声学证据驱动，校验器保持分数只读，价值体现在报告有效性而非排名。重放审计中，校验器在 1870 个包与 3955 条动作标注上阻断了模态幻觉、诱发式语义越权与缺失披露等问题，修复后重做模式校验，实现了零违规。适配器实验也显示，把标准声学骨干套进同一编排器后性能接近 EviBound，进一步印证治理层的贡献在一致性而非分数。

### 边界在哪里：样本、规则与部署的现实约束
论文明确承认的局限集中在四点。基准规模适中，焦虑评估 264 例中 256 例来自 MMPsy，限制性画像如固定朗读仅 8 例，更多是边界压力测试而非稳健估计。中英文多源池化可能继承文化与语言偏倚，边界在新人群与新采集设置上需要重新验证。

边界规则为显式编码的确定性校验，优点是可验证、零违规，局限是清单外的开放域幻觉难以覆盖，后续需要探索神经符号化等可验证的自适应边界。工作聚焦离线结构化筛查，生成的是证据有界的风险评估而非临床诊断，走向真实工作流仍需临床医生在环审计与前瞻性验证。

从审稿视角看，EviBound 与 5 路声学共识在抑郁与焦虑上的 AUROC 差值区间均包含零，SOTA 的分数部分实质由声学集成支撑；诱发与朗读的高提升基于 33 与 8 例，统计不稳定却容易被当作核心证据；长推理基线的提示与配置披露有限，对比公平性需要更多细节；封闭权限表对新协议与真实噪声输入的鲁棒性尚未评估，伦理与偏倚讨论也缺少按语言与性别分层的量化分析。

### 可复现性如何：哪些已冻结，哪些仍缺失？
可复现的确定性部分已经冻结：1870 个证据包的来源构成、1284/214/372 的划分、模态总量、包内字段与权限矩阵的 5 类规则、固定包顺序与确定性评估脚本、2000 次配对 bootstrap 的不确定度流程，以及附录中给出的硬件与软件版本。商业基线通过 API 缓存，本地完成预处理、包构建、路由与校验计算。

缺失的部分同样具体：代码仅表述为随论文发布，未给出仓库链接；模型权重、数据集下载链接与开源协议未提供；损失函数、优化器、学习率、warmup、batch size、训练步数与调度、解码温度与 beam size 等关键复现配置未说明。这意味着结果可在给定清单与脚本下重放，但在新环境中从零复刻训练与推理仍存在空白。

### 收束：从追求分数到追求可审计的一致性
把临床语音筛查的协议差异写进许可矩阵，再让规划器、声学共识与校验器共同遵守，EviBound 完成了 1 次范式切换：评估不再只看 AUROC 能否再高一点，而是看结论是否始终落在证据允许的范围内。0% CVR 与 100% EBCPass 在封闭清单下给出了一种可审计的安全基线。

对刚进入这个方向的研究生，这篇工作的启示在于区分两类提升：声学表征与集成带来排名，协议治理带来可信。后续值得投入的，是在保持分数只读的前提下扩大限制性协议样本、补齐分层公平性评估、并把确定性规则扩展为可验证的自适应边界，让证据有界推理在更嘈杂、更开放的真实采集条件下依然成立。

<details>
<summary>📎 论文与评分元数据</summary>

标签：#语音情感识别 #大语言模型 #模型集成 #基准测试

**6.8/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5

✅ **6.8/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：中 | #语音情感识别 | #大语言模型 | #模型集成 #基准测试 | [arxiv](https://arxiv.org/abs/2608.31014)

</details>

## ⚖️ 评分依据与证据（展开查看）

<details>
<summary>逐维得分、全文证据与扣分边界</summary>

*   创新性 (1.4/2)：将异构采集协议的证据效力差异形式化为 permit(c,M,P)=1 与证据包 E=(P,M,Π,X) 及许可矩阵 Π，把数据文档中的注意事项转为运行时可校验约束，并配套 CVR、MHR、EBCPass 边界感知评估，构成可执行的证据有界推理范式 

*   技术严谨性 (1.1/1.5)：形式化定义完整且校验器满足 score(r')=score(r) 只读约束，预测与报告解耦，对抑郁合格 0.8658 AUROC 与基线差值给出 2000 次配对 bootstrap 95% 区间，区分声学集成增益与治理增益，推导与系统逻辑自洽

*   实验充分性 (1.0/1.5)：在统一包接口下对比 Qwen3-Omni-Flash、Gemini 3.5 Flash、Thinking 变体与 5-way Acoustic Consensus 并做抑郁合格消融定位增益来源，但 焦虑合格 264 个中 256 个来自 MMPsy，诱发式 33 个与朗读 8 个样本探针性质且无按语言性别分层量化，外部泛化与公平性验证不足

*   清晰度 (0.8/1)：结构按证据包、画像感知规划器、五路声学共识、边界校验器分层阐述，数据流 E→Planner→Tools→Decoder→校验器清晰，对五类协议的声学与文本许可及缺失证据披露规则表格化，但部分符号与权限细节分散于附录

*   影响力 (0.7/1.5)：面向语音心理健康筛查提出从无约束准确率转向可审计证据一致性的评测路径，在 366 个抑郁合格包上实现 0% CVR 与 100% EBCPass，但 基准规模 1870 且焦虑高度倾斜、限制性协议样本极少，短期内对语音社区的方法复用与临床转化仍有限

*   开源 (0.5/1.5)：论文明确承诺未来开放核心产物，但当前尚未发布可用代码、模型权重或数据资源。

*   可复现性 (0.3/0.5)：已披露冻结划分 1284/214/372、模态总量、硬件为 Threadripper PRO 7965WX 与 2 张 RTX PRO 6000 及 Python 3.10.20 与 PyTorch 2.8.0 等软件版本与 2000 次 bootstrap 流程，但 未说明损失函数、优化器、学习率、batch size 与解码温度等关键训练复现配置

*   工程/实践价值 (1.0/1.5)：给出可核对的组合式流水线 E→Planner→Tools→Decoder→确定性校验器，含画像感知路由掩码与五路声学加权聚合及三类边界检查，验证 0% CVR 与分数只读，但未报告延迟吞吐资源等真实部署测量且无公开可复用产物

</details>

---

[← 返回 2026-09-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-01/)
