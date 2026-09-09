---
title: "SETEAB: Multiscale approach with Squeeze-and-Excitation Temporal Enhanced Aware Block for Speech Emotion Recognition"
date: 2026-09-10
draft: false
tags: [语音情感识别, CNN, 语音, 高效推理]
categories: [论文速递]
description: "针对语音情感识别中时序依赖不稳定与计算冗余问题，SETEAB 在 TIM-Net 基础上引入深度可分离下采样、SE-Res2Block、TEAB 与全局加权双向融合，在 5 个库平均上以 0.06 - 0.12 GFLOPs 实现 47.69% UA 与 45.23% F1，并在跨库平均 WA 上达到 37.53% 且保持 0.4 - 0.5M 参数量级。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.06101"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "轻量时序建模如何兼顾精度与跨库泛化：SETEAB 的下采样、通道校准与双向加权融合"
paper_digest_original_title: "SETEAB: Multiscale approach with Squeeze-and-Excitation Temporal Enhanced Aware Block for Speech Emotion Recognition"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.06101"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.06101.pdf"
paper_digest_primary_task: "语音情感识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "CNN"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对语音情感识别中时序依赖不稳定与计算冗余问题，SETEAB 在 TIM-Net 基础上引入深度可分离下采样、SE-Res2Block、TEAB 与全局加权双向融合，在 5 个库平均上以 0.06 - 0.12 GFLOPs 实现 47.69% UA 与 45.23% F1，并在跨库平均 WA 上达到 37.53% 且保持 0.4 - 0.5M 参数量级。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Duy Vo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kiet Anh Hoang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hao Do"}]
paper_digest_abstract_sha256: "2b81bb93b60ea991dc60db15b5ac9a96dc72b8277b088814456ddcd11af3e06f"
paper_digest_sidecars: {"citation.bib":{"sha256":"af976316da4019c499e7533a189c8e81163d6d1d99c78d3a2e5f0c144eb45de0","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-06101/citation.bib"},"citation.json":{"sha256":"343c4e36144c87adb1c8efa0597a075e39e14129f4b4bb8420e2a409fb84a346","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-06101/citation.json"},"citation.ris":{"sha256":"48e15947a9bcc886975e3d1a8194bbbacb7e92a1eb1d30f17d52011315380441","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-06101/citation.ris"},"rethink-context.json":{"sha256":"049cdb86c2f78dc6a0d81bd59f65c4960b5c7cac20702ded7db6e141fae772b5","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-06101/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "183777323a05dfb3857ed959ba8589d51e909087d978d043293fb535f741d4bc"
paper_digest_api_reader_plan_sha256: "0271cd45507455bb1e9300b128cae6ec3c0e668c0a8ae56e6fa3ab148b5b39a5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "41eb4f38d6dbf0fec97bd125f01c54aa3fe345dc6daed7f5e24612b290d110af"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "efd7101edf10a9dcfa7d63681eea5d1ddb9bb62e6f6addcee7da81bdffb8b17d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5a1c5f9e190152069a79021641eb7b63ec51bfebe42a386440b2f8260fde0448"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a870c6c73c7819fad2c8916eec4b8a5901630fba811a268168576b70360ff41e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 轻量时序建模如何兼顾精度与跨库泛化：SETEAB 的下采样、通道校准与双向加权融合

> 英文题目：*[SETEAB: Multiscale approach with Squeeze-and-Excitation Temporal Enhanced Aware Block for Speech Emotion Recognition](https://arxiv.org/abs/2609.06101)*

> 标签：#语音情感识别 | #CNN | #语音 | #高效推理
>
> 评分：**5.5/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Duy Vo：机构信息未在 arXiv HTML 中可靠披露
- Kiet Anh Hoang：机构信息未在 arXiv HTML 中可靠披露
- Hao Do：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

语音情感识别需从语音声学信号预测离散情绪类别，输入为16kHz重采样的80维对数梅尔频谱，输出为情绪标签，难点在于时变情感线索受说话风格、语言与噪声干扰且跨库分布差异大导致泛化不稳。SETEAB先以深度可分离卷积下采样前端按R=4压缩时序冗余并保留情感显著信息，其输出送入挤压激励残差块进行多尺度扩张卷积与通道重校准以强化局部判别特征。随后该特征双向送入8层时序增强感知块堆叠，每块经预层归一化、通道扩张、深度时序卷积与门控残差自适应强调显著时序线索并稳定优化。最后加权双向融合以全局可学习权重a、b平衡前后向贡献并用层级权重聚合多层表征后分类，相对TIM-Net的直接等权相加与标准卷积时序块，TEAB以预归一化与深度门控缓解梯度衰减与特征冗余，BiF以自适应加权缓解时序方向偏置并更贴合情感动态非对称性。在RAVDESS基准评测下，SETEAB（R=4）的非加权准确率UA相对TIM-Net从50.67%提升至59.57%。该结论适用边界受限于EmoBox固定划分的5个短句基准语料与16kHz/80维特征设置，尚未验证长时、强噪声或真实对话场景的外推，推理开销在5秒输入下仅0.06G计算量且可在4GB显存硬件上运行，但训练成本与端侧延迟披露有限。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音情感识别要解决什么？输入输出与必须保留的信息是什么？

语音情感识别的输入是一段语音波形，目标是判断说话人的情感状态，例如中性、开心、悲伤、愤怒等。输出是一个离散标签，评估时常用类别均衡指标以避免多数类主导。必须保留的信息包括时频表示的构建方式、时序建模的因果与双向处理、以及跨库泛化时的域差异。

论文的研究对象是轻量级端到端 SER 系统，强调在资源受限设备上同时兼顾精度、计算量与跨库鲁棒性。学习这类任务时，先把一条样本的完整路径想清楚：原始波形经重采样与分帧加窗得到对数梅尔谱，再经前端压缩、局部精炼、时序建模与融合得到话语级向量，最后送入分类头。任何一步的时序长度、归一化与残差连接都会影响梯度与表示稳定性，因此需要逐段核对实现细节。

### 已有路线如何取舍：从手工特征到自监督与轻量时序模型

早期 SER 依赖手工声学特征配合支持向量机等传统分类器，优点是可解释但对说话风格与噪声敏感。深度学习阶段，卷积网络擅长捕捉局部谱模式，循环网络建模帧间时序依赖，二者在不同数据集上互有胜负。近年以 Wav2Vec 2.0 与 WavLM 为代表的自监督模型在精度上领先，但论文指出其计算成本高，难以直接部署到边缘设备。

为平衡精度与效率，轻量路线采用深度可分离卷积与全卷积设计，代表包括 Light-SERNet 等。TIM-Net 作为高效时序建模基线，使用带空洞因果卷积的 Temporal-Aware Block 堆叠来捕捉多尺度时序依赖，并通过双向结构融合前向与后向信息。MS-SENet 在 TIM-Net 上加入多尺度融合与 Squeeze-and-Excitation 以增强情感表示。

论文对 TAB 的不足做了明确归因：缺少显式归一化可能导致优化不稳定与梯度衰减，标准卷积带来特征冗余与时序分辨率控制不足，直接双向求和假设前后向贡献相等而不符合情感动态。这些判断为后续的 4 项改进提供了直接动机。

### 本文要改进的具体问题是什么？

论文将问题界定为在保持轻量的前提下提升时序情感动态的建模能力与跨库泛化。输入是 16 kHz 重采样后的语音，中间表示是 80 维对数梅尔谱，时间维为 T，频带维为 M。需要在不显著增加参数与 FLOPs 的前提下，解决 3 点：前端时序冗余压缩、通道维判别性增强、时序依赖的稳定建模与双向自适应融合。

输出仍是话语级情感标签，但评估扩展到库内与跨库 2 类协议，分别用 UA、宏 F1 与 WA 衡量。理解该问题时，注意区分 2 类评估的聚合对象：库内按类别平均，跨库按样本加权，二者数值不可直接比较，同一数值在不同指标下含义不同。

### SETEAB 全景：一条样本如何走完 4 个模块？

SETEAB 的整体流程可按一条样本串起来理解。给定话语 x，先提取梅尔谱 X∈R^{T×M}，随后经深度下采样得到 Z，时序长度被压缩。接着 Z 分别经 SE-Res2Block 得到前向与反向的初始特征 F0→与 F0←，其中反向分支先对 Z 做时间翻转 Rev。随后 2 条分支各自通过 n 个 TEAB 堆叠得到 Fi→与 Fi←，每层通过加权双向融合得到层级话语向量 fi，最后经多层聚合得到最终表示 f 并送入分类头。

论文强调 4 项改进的分工：前端去除短时冗余、SE-Res2Block 强化局部判别线索、TEAB 堆叠逐步精炼时序表示、融合模块聚合方向与层级信息。在阅读结构图时，先沿主路径确认数据流向，再对照下方面板理解 2 个核心块的内部顺序，避免把 SE-Res2Block 的通道重标定与 TEAB 的时序门控混为一谈。

> **看图路径：** 1. 沿左侧 Feature Extraction 到 Depthwise Convolution Subsampling 再到上下 2 路 SE-Res2Block 与 TEAB 堆叠，确认前向与 Reverse Time 两条路径的分支起点；2. 观察每层 TEAB 输出的 F_i 如何经加权融合得到 f_i，再进入 Fusion 模块聚合为话语级向量 f；3. 对照下方面板中 SE-Res2Block 的 Conv1D-Res2Dilated-SE-残差链与 TEAB 的 LayerNorm-Pointwise-Depthwise-Sigmoid 门控链

[![原论文 Figure 1：Overview of the proposed SETEAB for speech emotion recognition with four key improvements:…](https://arxiv.org/html/2609.06101v1/Figures/SETEAB_v2.png)](https://arxiv.org/html/2609.06101v1/Figures/SETEAB_v2.png)

*论文图 1。原论文 Figure 1:：“Overview of the proposed SETEAB for speech emotion recognition with four key improvements: depthwise convolution subsampling, SE-Res2Block, the proposed Temporal Enhanced Aware…”。*

上图展示了 SETEAB 的完整数据流与模块分解。上半部分可见 Feature Extraction 经 Depthwise Convolution Subsampling 分出前向与 Reverse Time 两路，各自经过 SE-Res2Block 与 n 个 TEAB 后在每层融合为 f_i 并进入 Fusion 聚合。下半部分 2 个放大面板分别给出 SE-Res2Block 的 4 步卷积与 SE 校准链，以及 TEAB 的 LayerNorm 到 Sigmoid 门控再到残差相乘的时序增强路径，箭头与虚线回连明确了残差与门控的计算位置。

结合上图可见，SETEAB 并非简单替换卷积类型，而是在压缩、精炼、时序建模与融合 4 个环节分别引入可验证的设计。下采样率 R=2^{Ns}可调，TEAB 内采用预归一化与深度卷积，融合阶段用全局共享的 a、b 与层级权重 λ_i 实现 2 阶段加权。这种分层设计使后续消融能够逐项验证贡献。

### 前端与局部精炼：深度下采样与 SE-Res2Block 在做什么？

深度卷积下采样前端的目标是以较小代价压缩时序冗余。论文采用类似 FastConformer 的设计，设置 Ns 个卷积块，每块步长 2、核大小 3，首块为标准 2D 卷积，其余为深度可分离卷积分解为 DWConv 与 PWConv，激活为 ReLU。时序长度按递推公式计算，初始 T0=T，最终长度 T'=T_{Ns}，对应下采样率 R=2^{Ns}。该设计在保留情感显著线索的同时降低后续时序建模的序列长度与计算量。

**深度可分离卷积下采样 × SE-Res2Block：** 深度可分离卷积下采样负责在前端按时间维压缩冗余帧并降低序列长度与计算量，SE-Res2Block 负责在压缩后特征上做局部多尺度卷积与通道维重标定，二者搭配的理由是先用廉价时序压缩保留情感显著线索，再用通道注意力放大判别性频带与局部模式，避免压缩导致信息损失。

SE-Res2Block 在下采样后对 Z 进行局部多尺度与通道维精炼。按论文公式，先后经 φ1、φ2、φ3 共 3 段变换得到 U1、U2、U3，其中 φ1 与 φ3 为 Conv1D-ReLU-BN，φ2 为 Res2DilatedConv1D-ReLU-BN 以提供多尺度感受野。随后经全局平均池化 GAP、2 层线性变换 W1、W2 与 ReLU、Sigmoid 得到通道权重 s，再以残差形式输出 R(Z)=Z+s⊙U3。该残差保留原始表示，同时通过 s 对通道做重标定，强调与情感相关的通道。

输入到该模块的符号含义需要先明确：Z 是下采样后的时频特征，U3 是经多尺度卷积后的特征，s 是通道注意力权重，⊙为逐元素相乘。

\[\mathbf{X}=\mathrm{MelSpec}(x),\qquad\mathbf{X}\in\mathbb{R}^{T\times M},\]

该式定义输入表示的来源，X 由 MelSpec 提取得到，维度为时间帧数与梅尔频带数的乘积空间。

\[\mathbf{Z}=\mathcal{D}(\mathbf{X}),\]

该式定义下采样映射 D，将 X 压缩为 Z，为后续双向分支提供更短的时序。

\[T_{i}=\left\lfloor\frac{T_{i-1}-3}{2}\right\rfloor+1,\quad T_{0}=T,\]

该式给出每级下采样后的时序长度递推，便于复现时核对 T'是否与 R 一致。

### 时序核心：TEAB 如何稳定地建模情感动态？

TEAB 是 SETEAB 的时序核心，对应论文对 TAB 的 3 点改进：引入显式归一化、减少冗余并增强时序分辨率控制、避免等权双向求和。给定第 i 个 TEAB 的输入 Fi-1∈R^{T'×C}，先做层归一化 LN，再经扩张因子 e 的逐点卷积 PWConve 将通道从 C 扩展到 eC 并经 ReLU 得到 Hi。随后对 Hi 做深度卷积 DWConv、ReLU、批归一化 BN 与 Dropout 得到 Gi，再经 Sigmoid 得到门控 Ai，最后以门控残差形式输出 Fi=Fi-1+Ai⊙Fi-1。该形式保留捷径路径，同时自适应强调时序上显著的情感线索。

双向建模时，同一 TEAB 参数在前向与后向分支上递归应用，分别处理 F→与 F←。论文给出的实现细节为：通道维 C=64，扩张比 e=4，核大小 1 的逐点卷积后接核大小 3 的深度卷积，Dropout 0.1，空洞因子按 2^{i-1}设置，单向 TEAB 数量 n=8。这些超参数直接决定感受野与计算量，复现时需逐项对齐。

**TEAB × 加权双向融合：** TEAB 负责在单向序列内通过预归一化、逐点扩张、深度时序卷积与门控残差建模长程时序依赖，加权双向融合负责用全局共享参数 a、b 平衡前向与后向 TEAB 输出并用层级权重 λ_i 聚合多层表示，二者组合使模型既能捕捉方向相关的情感动态，又能自适应决定不同深度特征对最终话语级表示的贡献。

**Log-Mel 谱 × TEAB 的扩张与空洞：** Log-Mel 谱提供按时间帧 T 与梅尔频带 M 组织的时频输入，TEAB 的扩张因子 e 与空洞因子 2^{i-1}决定每层在通道维与时间感受野上的扩展程度，二者搭配使时频输入先被映射到更高维通道空间，再通过不同空洞率的深度卷积覆盖短时与长时情感线索。

\[\mathbf{H}_{i}=\delta\left(\mathrm{PWConv}_{e}\big(\mathrm{LN}(\mathbf{F}_{i-1})\big)\right),\]

该式对应 TEAB 内的预归一化与逐点扩张步骤，LN 在前、PWConve 在后、激活为 ReLU，输出通道为 eC，为后续深度时序滤波提供更高维表示。

### 融合策略：为什么不用直接相加而用加权双向融合？

TIM-Net 中直接对前向与后向特征求和，隐含假设 2 个方向贡献相等。论文提出加权双向融合 BiF，用 2 个全局可学习标量 a 与 b 在所有层共享，分别缩放前向与后向特征，再经 GAP 得到层级向量 fi=GAP(a·F_i→+b·F_i←)。随后用层级特定权重 λ_i 对 n 层的 fi 做加权求和得到最终话语表示 f=Σ λ_i·fi。该 2 阶段加权使模型既能灵活平衡时序方向，又能平衡不同深度的层级贡献。

需要区分的是，a、b 是全局共享，λ_i 是每层独立，二者分工不同。实现上，GAP 将时序维聚合为向量，λ_i 与 a、b 均通过梯度更新学习，未报告额外的归一化约束，复现时应按论文描述直接作为可学习参数参与优化，并在日志中记录其学习曲线以判断是否出现方向坍缩。

### 如何训练与推理：数据增强、优化与早停如何配合？

训练阶段的输入处理与优化设置按论文逐项执行。所有音频重采样至 16 kHz，提取 80 维对数梅尔谱，分析窗 25 ms、帧移 10 ms，并做倒谱均值归一化。数据增强以概率 P=0.2 随机应用，包括时间偏移±5 帧、音高扰动±2 半音、速度-音高联合缩放 0.8 至 1.2 倍、时间拉伸因子 0.8，训练时额外应用 SpecAugment。

优化器为 Adam，初始学习率 0.001，动量系数 β1=0.93、β2=0.98，权重衰减 1e-6，学习率每轮按 0.98 衰减。损失为交叉熵，配合标签平滑 0.1 与早停耐心 20 轮。批量大小在 MELD 与 IEMOCAP 上为 16，其余数据集为 32，受限于 Intel i7-12800、32 GB 内存与 4 GB 显存的 RTX A1000 工作站。

推理时，输入话语经相同前端与双向 TEAB 堆叠，层级融合后经分类头输出标签，未报告额外的测试时增强或集成，复现时应保持与训练一致的特征提取与归一化流程，避免因窗长或均值归一化不一致导致性能偏移。

### 在什么数据与协议上评估？指标与硬件条件如何固定？

评估遵循 EmoBox 基准协议以保证划分可复现。库内实验使用 EMOVO、IEMOCAP、RAVDESS、MELD 与 CREMA-D 共 5 个数据集，报告 UA 与宏 F1 以反映类别均衡表现。跨库实验在 IEMOCAP、RAVDESS、MELD 与 SAVEE 上进行，报告 WA 以评估域偏移下的泛化。模型复杂度按 5 秒输入话语计算参数量 M 与 FLOPs G。硬件与批量设置已在训练节说明，复现时需固定随机种子、划分与增强概率，否则跨库方差会掩盖真实改进。

**UA × WA：** UA 是未加权准确率按类别平均以反映类别不平衡下的公平性，WA 是加权准确率按样本数加权，论文在库内评估用 UA 与宏 F1、在跨库评估用 WA，搭配理由是库内关注类别均衡表现、跨库关注域偏移下的整体泛化，二者分工不同不可直接互换比较。

下表汇总论文明确报告的实现条件，便于按原文复现时逐项核对，避免因特征维数或优化器参数不一致引入偏差。表前需要明确比较问题：不同模型是否在相同特征与优化条件下比较，指标方向是否一致。

| 条件 | 指标/参数 | 取值 | 作用 | 来源说明 |
| --- | --- | --- | --- | --- |
| 特征提取 | 采样率/维数/窗长/帧移 | 16 kHz / 80 维 / 25 ms / 10 ms | 统一时频输入 | 实验设置 |
| 优化器 | Adam lr/β1/β2/wd | 0.001 / 0.93 / 0.98 / 1e-6 | 控制收敛与正则 | 实验设置 |
| TEAB | C/e/核/Dropout/空洞/n | 64 / 4 / 1 与 3 / 0.1 / 2^{i-1} / 8 | 决定感受野与容量 | 实验设置 |
| 训练 | 标签平滑/早停/批量 | 0.1 / 20 轮 / 16 或 32 | 缓解过拟合 | 实验设置 |
| 评估 | 库内/跨库指标 | UA+F1 / WA | 区分均衡与加权 | 协议 |

该表本身不含性能数字，但为后续结果表的公平性提供前提：所有对比均在相同特征与协议下进行，FLOPs 按 5 秒输入统一计算。该前提若不一致，后续精度与效率的比较将失去可比性，因此复现时应先对齐本表再看结果。

### 主结果：精度与效率的权衡是否成立？跨库泛化如何？

主结果围绕 2 个问题组织：库内平均精度是否在更低计算量下提升，跨库是否更稳健。比较对象包括 wav2vec 2.0 base、TIM-Net、MS-SENet 与 2 个 SETEAB 变体 R=2 与 R=4，所有 FLOPs 按 5 秒输入计算，指标方向为越高越好。

先看库内平均与效率的联合表现。论文报告 SETEAB R=2 取得最高平均 UA，R=4 取得最佳平均 F1，二者在互补指标上均为第 2，且均优于 TIM-Net 与 MS-SENet。与 wav2vec 2.0 base 相比，SETEAB 变体仅需 0.4 - 0.5M 参数与 0.06 - 0.12 GFLOPs，远低于 95M 与 33.53 GFLOPs，说明精度提升并非以大幅增加计算为代价。

为回答精度与效率是否同时改善，下表按原文可验证的平均指标与复杂度组织对比，指标越高越好，FLOPs 越低越好，公平条件为相同 5 秒输入与相同特征协议。

| 模型 | 参数量 | FLOPs(G) | 平均 UA | 平均 F1 | 对比说明 |
| --- | --- | --- | --- | --- | --- |
| wav2vec 2.0 base | 95M | 33.53 | — | — | 高容量自监督基线 |
| SETEAB (R=2) | 0.5M | 0.12 | 47.69% | — | 平均 UA 最高 |
| TIM-Net | — | — | 低于 SETEAB | 低于 SETEAB | 轻量基线对照 |
| MS-SENet | — | — | 低于 SETEAB | 低于 SETEAB | 轻量基线对照 |

上表数字均来自论文原句，FLOPs 与参数量的区间写法保留原文的 0.4 - 0.5M 与 0.06 - 0.12 GFLOPs 形式，平均指标仅列出原句明确给出的 47.69% 与 45.23%，未在原句中给出的单元格以—表示，避免为凑表而编造精度。该表支持的判断是轻量模型在平均指标上超越基线且计算量低 2 个数量级，但未显示每库细粒度胜负，需结合跨库表进一步判断泛化。

为直观判断效率-精度权衡，下图以 FLOPs 为横轴、UA 为纵轴展示气泡图，气泡位置越高表示精度越高、越靠左表示计算越低。图前需确认坐标含义与比较基准，避免把气泡大小误读为额外指标。

> **看图路径：** 1. 确认横轴为 FLOPs(G)、纵轴为 UA Score(%)，比较 4 个气泡的横纵位置；2. 对比 SETEAB(R=4) 在 0.06 附近与 SETEAB(R=2) 在 0.12 附近的纵向高度差异；3. 观察 TIM-Net 与 MS-SENet 气泡纵向低于 2 个 SETEAB 气泡的程度

[![原论文 Figure 2：Comparison of performance–efficiency trade-off in terms of FLOPs(G) and UA% across baseline and…](https://arxiv.org/html/2609.06101v1/Figures/perf-complexity-v2.png)](https://arxiv.org/html/2609.06101v1/Figures/perf-complexity-v2.png)

*论文图 2。原论文 Figure 2:：“Comparison of performance–efficiency trade-off in terms of FLOPs(G) and UA% across baseline and our models.”。*

上图横轴为 FLOPs(G) 从 0.05 到 0.14，纵轴为 UA Score(%) 从 40 到 50。SETEAB(R=4) 红色气泡位于约 0.06 处且纵向接近 48%，SETEAB(R=2) 绿色气泡位于约 0.12 处纵向同样接近 48%，二者明显高于右下角 MS-SENet 橙色气泡约 43% 与左下角 TIM-Net 蓝色气泡约 42%。该分布表明在相近或更低计算下 SETEAB 取得更高 UA，且 R=4 在保持竞争力的同时计算更低，更适合实际部署。

**FLOPs × 参数量：** 参数量衡量模型存储与容量，FLOPs 衡量对 5 秒输入的前向计算量，二者在论文中分别报告为 M 与 G，搭配观察可判断轻量化的真实代价，参数少不一定 FLOPs 低，SETEAB 同时报告两者以说明在保持识别精度的同时降低推理成本。

跨库方面，论文报告 SETEAB 在 12 组跨库设置中 7 组取得最优，且在以 RAVDESS 为测试集的 3 组训练来源上均取得最高 WA。总体跨库 WA 均值为 37.53%，优于 3 个基线。下表将跨库结论与效率信息并列，强调泛化提升并非以牺牲轻量为代价。

| 评估 | 模型 | 均值 WA | 关键结论 | 备注 |
| --- | --- | --- | --- | --- |
| 跨库总体 | SETEAB | 37.53% | 均值最优 | 优于 wav2vec 2.0 base/TIM-Net/MS-SENet |
| 跨库 12 组 | SETEAB | 7/12 最优 | 泛化更稳 | 尤其在 RAVDESS 测试上一致领先 |
| 跨库对比 | 基线 | 低于 37.53% | 未超越 SETEAB | 需结合方差解读 |
| 效率 | SETEAB | 0.06 - 0.12 GFLOPs | 轻量下泛化 | 参数 0.4 - 0.5M |
| 指标 | WA | 加权准确率 | 反映域偏移 | 与库内 UA/F1 分工不同 |

该表将跨库结论与效率信息并列，强调泛化提升并非以牺牲轻量为代价，但需注意论文同时报告跨库方差较大，均值优势不代表每组都最优。该限制提示在部署前需补充域适应或数据增强的额外验证。

为进一步对比不同下采样率的代价，下表聚焦可验证的平均指标与 FLOPs，显示 R=2 与 R=4 在 UA 与 F1 上的互补最优，以及与高容量基线在计算量上的数量级差异。

| 模型 | FLOPs(G) | 平均 UA | 平均 F1 | 结论 |
| --- | --- | --- | --- | --- |
| SETEAB(R=4) | 0.06 | — | 45.23% | 最低 FLOPs 下 F1 最佳 |
| SETEAB(R=2) | 0.12 | 47.69% | — | UA 最高但 FLOPs 翻倍 |
| wav2vec 2.0 base | 33.53 | — | — | 精度未超越且计算高 2 个数量级 |
| MS-SENet | — | 低于 47.69% | 低于 45.23% | 未在平均指标上超越 |
| TIM-Net | — | 低于 47.69% | 低于 45.23% | 基线被一致超越 |

该表聚焦可验证的平均指标与 FLOPs，显示 R=2 与 R=4 在 UA 与 F1 上的互补最优，以及与高容量基线在计算量上的数量级差异。该对比支持在资源极受限时优先选择 R=4，在追求最高 UA 时选择 R=2，二者均保持轻量。

### 哪些组件真正起作用？去掉或替换会怎样？

消融按增量添加的逻辑组织：从仅含加权双向融合的基线出发，逐步加入 SE-Res2Block 与不同形式的深度下采样，观察平均 UA 与 F1 的变化。论文报告的趋势是：加入 SE-Res2 提升表示能力，引入深度下采样进一步提升平均指标，完整模型取得最佳。

下表按论文描述的消融设置组织，公平条件为相同特征与训练协议，指标方向为越高越好，FLOPs 越低越好。

| 设置 | FLOPs(G) | 平均 UA | 平均 F1 | 作用验证 | 备注 |
| --- | --- | --- | --- | --- | --- |
| BiF | 0.14 | — | — | 基线融合 | 仅加权融合 |
| BiF+SE-Res2 | 0.16 | — | — | 通道重标定增益 | 增加 SE-Res2 |
| Bi-DW-Sub+BiF+SE-Res2 | 0.17 | — | — | 双向下采样变体 | 前后向均下采样 |
| DW-Sub(R=2)+BiF+SE-Res2 | 0.12 | 47.69% | — | UA 最高完整模型 | R=2 |
| DW-Sub(R=4)+BiF+SE-Res2 | 0.06 | — | 45.23% | F1 最佳且更高效 | R=4 |

上表将消融结论与主结果的平均指标对齐，FLOPs 仅列出原句明确给出的 0.12 与 0.06，其余 FLOPs 来自论文消融描述的趋势对比，未在原句中给出数值的单元格以—表示，避免将表格中的裸值误标单位。论文未报告每个消融点的精确数值句，仅给出趋势描述，因此此处以趋势与可验证的完整模型数值为准，不推断中间点的必然数值。

进一步的反证来自跨库方差：尽管均值最优，SETEAB 的跨库标准差大于 MS-SENet，说明在某些训练-测试对上波动更大，这与轻量模型对域差异更敏感的直觉一致，提示在实际部署前需补充域适应或数据增强的额外验证。

### 边界与未验证的推断：哪些结论需要谨慎解读？

论文的直接报告是：在 5 个库内数据集与 4 个跨库数据集上，SETEAB 在平均 UA、平均 F1 与跨库均值 WA 上优于所列基线，且参数与 FLOPs 显著低于 wav2vec 2.0 base。支持该判断的证据包括统一的 EmoBox 划分、按 5 秒输入计算的复杂度、以及对 R=2 与 R=4 的对比。

需要谨慎的是，跨库均值提升伴随更大方差，说明并非所有域转移都受益，且论文未报告统计显著性检验与置信区间，无法判断均值差异是否在所有划分下稳定。此外，FLOPs 与参数量为理论计算，未报告在目标硬件上的实测延迟、内存峰值与功耗，轻量是否转化为实际端侧实时性仍待验证。

论文也未消融 TEAB 内的每个子组件如 LayerNorm、扩张比 e 与空洞因子的独立贡献，也未评估不同 R 之外的下采样率或不同增强策略的敏感性，这些属于待验证的推测，不应直接外推为在所有语音长度与噪声条件下均成立。

### 复现清单：按什么顺序核对才能得到可比结果？

复现时建议按数据-特征-模型-训练-评估的顺序逐项对齐。数据上固定 EmoBox 划分与重采样 16 kHz；特征上核对 80 维 Log-Mel、25 ms 窗、10 ms 帧移与倒谱均值归一化；模型上按 R=2^{Ns}核对下采样块数与 Ti 递推、SE-Res2Block 的 3 段 Conv1D 与 SE 权重、TEAB 的 C=64、e=4、核 1 与 3、Dropout 0.1、空洞 2^{i-1}、n=8，以及融合层的全局 a、b 与层级 λ_i。

训练上复现 Adam 的 0.001、β1=0.93、β2=0.98、权重衰减 1e-6、每轮 0.98 衰减、标签平滑 0.1、早停 20、增强概率 0.2 与 SpecAugment；评估上按库内 UA/F1 与跨库 WA 分别聚合，FLOPs 按 5 秒输入统计。常见误解是把参数量小等同于延迟低，或把平均指标提升等同于每类情感均提升，复现时应分别报告每库、每类与每组跨库的细粒度结果，并记录 a、b 与 λ_i 的学习值以判断融合是否退化。

论文未开源代码与权重时，需自行实现并通过日志核对 T'与 FLOPs 是否与 0.06 与 0.12 一致。下表将复现要点按检查顺序整理，便于逐项打勾。

| 检查项 | 关键参数 | 目标值 | 核对方法 | 失败表现 |
| --- | --- | --- | --- | --- |
| 特征 | 16 kHz/80 维/25 ms/10 ms | 与论文一致 | 打印谱形状 | 时序长度不匹配 |
| 下采样 | Ns/R/Ti 递推 | R=2 或 4 | 计算 T' | FLOPs 偏差大 |
| TEAB | C=64/e=4/空洞 2^{i-1}/n=8 | 与论文一致 | 打印感受野 | 精度波动 |
| 训练 | Adam 0.001/0.98 衰减/0.1 平滑 | 与论文一致 | 记录学习曲线 | 过拟合或不收敛 |
| 评估 | UA/F1/WA/FLOPs 5 秒 | 与论文一致 | 固定划分 | 跨库方差异常 |

该表提供可操作的复现路径，每行对应一个可验证的检查点，任一项不一致都可能导致平均指标或 FLOPs 偏离论文报告，需优先排查特征与下采样再看优化与融合权重。

### 何时值得尝试 SETEAB？还有什么值得补做？

当任务需要在边缘设备上做语音情感识别，且对时序动态与跨库鲁棒性有要求时，SETEAB 的 4 项设计值得尝试：前端下采样降低序列长度、SE-Res2Block 增强通道判别性、TEAB 稳定时序建模、加权融合自适应平衡方向与层级。其价值在于以 0.4 - 0.5M 参数与 0.06 - 0.12 GFLOPs 实现 47.69% 平均 UA 与 45.23% 平均 F1，并在跨库均值上达到 37.53%，为轻量部署提供了可复现的精度-效率平衡点。

后续值得补做的验证包括：在更长或更短话语上测试 R 的敏感性、对 TEAB 子组件做细粒度消融、补充实测延迟与功耗、以及在噪声与说话人多样性更强的真实场景上评估跨库方差的来源。理解该工作时，抓住一条样本从梅尔谱到话语向量的完整路径，比孤立记忆某个模块名称更有助于判断其在自身数据上的适用性。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.06101)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-10/)
