---
title: "ParaJSCC: A Parameterized Framework for Reusable Multimodal Joint Source-Channel Coding"
date: 2026-08-18
draft: false
tags: [音频编码, 多模态模型, 音视频, 鲁棒性, 高效推理]
categories: [论文速递]
description: "音频编码 | 6.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.15066"
---

# 📄 ParaJSCC: A Parameterized Framework for Reusable Multimodal Joint Source-Channel Coding

标签：#音频编码 #多模态模型 #音视频 #鲁棒性 #高效推理

**6.6/10** | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.7/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **6.6/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音频编码 | #多模态模型 | #音视频 #鲁棒性 | [arxiv](https://arxiv.org/abs/2608.15066)


### 👥 作者与机构

- 第一作者：Kemi Chen（福州大学）
- 通讯作者：Tiesong Zhao（福州大学）
- 作者列表：Kemi Chen（福州大学）、Mingkai Chen（南京邮电大学）、Youjia Chen（福州大学）、Qian Liu（大连理工大学）、Wei Gao（北京大学）、Tiesong Zhao（福州大学）

### 💡 毒舌点评

论文把重复访问的多模态资产服务从按请求编码中抽象出来，问题定义有应用价值，shared-private 渐进参数包、请求感知传输和 break-even 分析是清晰的亮点，实验结果也覆盖图像、音频、触觉三类信号。但作为顶会投稿，核心组件基本是已有范式（INR 实例优化、FiLM、渐进表示、JSCC）的组合式重构；两个数据集规模小，缺少方差/统计检验，没有直接对比最接近的 Implicit-JSCC 类方法，触觉基线多为分离式编码加 16-QAM，音频侧也缺少表面交互音频专用 JSCC 基线，公平性和泛化性支撑不足。此外完全未开源，量化、固定映射和网络细节不透明，使“统一可复用服务框架”的结论偏强。

### 📌 核心摘要

论文针对多模态内容作为持久数字资产被异构接收方重复访问的场景，提出 ParaJSCC，将通信从按请求源编码转向可复用表示服务。方法在云端离线把每个样本优化为量化的 shared-private 渐进式参数包，部署到边缘节点后，在线阶段只传输与当前请求匹配的共享参数和模态私有参数子集，接收端用轻量解码器重建。与 Implicit-JSCC 等扁平实例表示、U-DeepSC 等在线统一编码不同，ParaJSCC 通过共享-私有分解、渐进层级和请求感知子集传输，统一支持模态选择、带宽自适应和跨请求复用。实验在 LMT-108 和 BFTS 两个多模态表面交互数据集上显示：图像请求解码延迟从 17.18 ms 降至 4.34 ms，全模态请求从 43.96 ms 降至 11.21 ms；选择性请求传输率降低约 47.8%–51.2%；SNR 10 dB 下全模态重建达到 38.18 dB PSNR、37.72 dB SI-SDR 和 0.938 ST-SIM；渐进重建质量随层级单调上升。该方法为云-边-端多模态仓储、数字孪生等长周期服务提供了一种可摊销离线成本的框架。主要局限在于：无代码/模型/数据获取链接，数据集规模小，缺少统计显著性检验和真实边缘系统成本审计，且未直接对比 Implicit-JSCC 类方法。

与传统JSCC相比，ParaJSCC的创新在于将持久多模态内容转换为可复用参数包，如下图所示。

![Figure 1. Application scenario of repeated multimodal serving. Traditional JSCC re-encodes the raw multimodal source for each request,](https://arxiv.org/html/2608.15066v1/pic/Fig1.png)

下图对比了传统JSCC的按请求编码和ParaJSCC的离线准备与在线子集传输，突出了应用场景的差异。

### 🔗 开源详情

论文未提供代码仓库、模型权重或可直接下载的数据集链接；机器摘要中 `has_code=未说明`、`has_model=未说明`、`has_dataset=未说明`。评估所用 LMT-108 和 BFTS 被描述为公开多模态表面交互数据集，但论文未给出下载地址、预处理脚本或划分后的数据清单。训练与评估仅披露部分超参数；量化位宽、固定映射 \(g(\cdot)\) 以及各子网络具体结构未完整披露。

### 🏗️ 方法概述和架构

ParaJSCC 是一套面向重复访问多模态内容的参数化 JSCC 框架，整体分为离线准备、在线请求感知传输和轻量重建三个阶段。原始多模态样本 \(\boldsymbol{x} = \{\boldsymbol{x}_1,\dots,\boldsymbol{x}_M\}\) 在云端进行一次性离线优化，生成样本特定的参数包 \(\Theta_{\boldsymbol{x}}\)，量化后 \(\bar{\Theta}_{\boldsymbol{x}} = Q(\Theta_{\boldsymbol{x}}^\star)\) 部署到边缘节点。请求由模态子集 \(\mathcal{T}\) 和渐进层级 \(l\) 定义，在线阶段只检索并传输 \(\bar{\Theta}_{\boldsymbol{x},\mathcal{T}}^{(1:l)}\)，即所有共享参数 \(1:l\) 层级和请求模态的私有参数 \(1:l\) 层级；接收端用全局共享解码器 \(D_\phi\) 重建 \(\hat{\boldsymbol{x}}_{\mathcal{T}}^{(l)}\)。

论文提出了ParaJSCC框架，其整体流程如下图所示。

![Figure 2. Overall pipeline of ParaJSCC. Each multimodal sample is converted offline into a quantized shared-private parameter package stored at the edge.](https://arxiv.org/html/2608.15066v1/pic/Fig2.png)

下图展示了离线参数准备、量化边缘存储和在线请求感知传输的完整流程，清晰呈现了核心框架。


具体解码架构为 shared-to-private 设计。共享码先经共享解码主干 \(D_s\) 解码为公共特征 \(\boldsymbol{f}_s^{(l)} = D_s(\boldsymbol{y}_s^{(1:l)})\)；对每个请求模态 \(m\)，私有码经模态私有解码器 \(D_m^{(p)}\) 得到调制特征 \(\boldsymbol{z}_m^{(l)}\)，适配器 \(h_m\) 输出 FiLM 参数 \(\boldsymbol{\gamma}_m^{(l)}, \boldsymbol{\beta}_m^{(l)}\)，通过 \(\tilde{\boldsymbol{f}}_m^{(l)} = \boldsymbol{\gamma}_m^{(l)} \odot \boldsymbol{f}_s^{(l)} + \boldsymbol{\beta}_m^{(l)}\) 调制共享特征，最终由模态头 \(H_m\) 生成重建 \(\hat{\boldsymbol{x}}_m^{(l)}\)。共享分支提供跨模态共同基础，私有分支注入模态特定细节，适配器轻量且不会为每个请求重新编码。

具体解码架构采用shared-to-private设计，如下图所示。

![Figure 3. Architecture of the network instantiation of ParaJSCC. The received shared codes are decoded by the shared trunk DsD_{s} into a common feature…](https://arxiv.org/html/2608.15066v1/pic/Fig3.png)

下图详细展示了共享解码主干、模态私有解码器、适配器和FiLM调制的结构，以及跨模态对齐损失。


参数包采用渐进式 shared-private code tensors，共享张量 \(\boldsymbol{\Theta}_s^{(l)}\) 和模态私有张量 \(\boldsymbol{\Theta}_m^{(l)}\) 按层级组织成金字塔；低层级用于粗粒度重建，高层级逐步细化。每个共享或模态特定张量在每个渐进层级使用统一 bit-width 分别量化，存储包包含量化值和轻量元数据，用于高效子集检索。训练时，共享特征进一步经过投影头 \(P_m\) 投影到模态嵌入 \(\boldsymbol{e}_m^{(s,l)}\)，在请求模态对上施加 L2 对齐损失 \(\mathcal{L}_{\mathrm{cm}}^{(l)}\)，以鼓励共享参数编码跨模态结构；该投影头只在训练时使用，推理时不参与重建。在线传输前，参数经可微量化近似 \(\widetilde{Q}(\cdot)\) 或硬量化 \(Q(\cdot)\)，并由固定映射 \(g(\cdot)\) 映射为信道符号，经 AWGN 信道 \(\mathcal{C}(\cdot;\xi)\) 传输。传输代价 \(K_{\boldsymbol{x},\mathcal{T}}^{(l)}\) 由共享/私有维度和扩展因子 \(\kappa_s^{(j)},\kappa_m^{(j)}\) 决定，并归一化为带宽比 \(R_{\boldsymbol{x},\mathcal{T}}^{(l)}\)。训练时从因子化均匀分布 \(p(\mathcal{T},l)=p(\mathcal{T})p(l)\) 采样七种非空请求子集和六个渐进层级，离线目标为期望失真、速率惩罚和跨模态对齐正则之和：\(\mathcal{J}_{\boldsymbol{x}} = \mathbb{E}_{(\mathcal{T},l),\xi}[d_{\mathcal{T}} + \beta R_{\boldsymbol{x},\mathcal{T}}^{(l)} + \gamma \mathcal{L}_{\mathrm{cm}}^{(l)}]\)。该设计将计算成本前移到云端，边缘端只做检索、子集传输和轻量解码，适合长周期重复访问服务。

### 💡 核心创新点

1. **问题定义创新：重复访问多模态通信服务范式**。传统 JSCC 和压缩方法针对一次请求重新编码，无法利用持久多模态资产被重复访问的特性。论文显式引入请求分布、模态子集、渐进层级和云端离线准备/边缘在线服务的问题框架，这是与已有按请求编码基线的最本质区别。
2. **可复用 shared-private 渐进参数包**。相比 Implicit-JSCC 等扁平、实例级但非结构化的表示，ParaJSCC 将每个样本组织为共享参数和多模态私有参数的多层级结构，使同一存储资产可支持模态选择性传输和渐进式重建，而不需要为每个请求重新编码。
3. **请求感知子集传输与统一训练目标**。训练时采样异构请求 \((\mathcal{T}, l)\)，优化期望失真、速率和跨模态共享对齐的联合目标，使在线阶段只需传输与当前请求匹配的参数子集，显著降低带宽和延迟。
4. **共享到私有 FiLM 解码架构**。共享解码特征提供跨模态公共基础，私有参数通过 FiLM 参数进行轻量调制，再经模态头重建。该设计使共享信息得到复用，同时保留模态特定细节，并以较小解码开销实现三类信号重建。
5. **面向摊销的 break-even 分析**。论文定义了最小访问次数 \(N^\star\)，用于量化离线优化成本在何种重复访问频率下被摊销，为实际部署提供了直观的工程决策判据。

### 📊 实验结果

论文在 LMT-108 和 BFTS 上评估。图4和图5在 \(R=0.4406\) 固定带宽比下考察不同 SNR：ParaJSCC（2K/3K/4K 离线迭代）在两个数据集的图像、音频、触觉模态上取得整体最强性能；其中图像和音频在低/中 SNR 下离线优化深度增加持续提升，触觉上 ParaJSCC 保持最高 ST-SIM，若干分离式基线因 16-QAM 的 cliff effect 在低 SNR 显著下降。统一基线中 UniJSCC 优于 U-DeepSC，FlatJSCC 优于 UniJSCC，ParaJSCC 又超过 FlatJSCC，说明可复用离线表示和 shared-private 渐进结构分别带来增益。逐点数值原文未给出，只有趋势曲线。

在LMT-108数据集上，不同方法在固定带宽比下的性能对比如下图所示。

![Figure 4. Performance under varying SNR at a fixed bandwidth ratio on the LMT-108 dataset, including ParaJSCC with 2K, 3K, and 4K offline optimization iterations.](https://arxiv.org/html/2608.15066v1/pic/E1_lmt108.png)

下图显示了随着SNR变化，ParaJSCC在图像、音频和触觉模态上的PSNR、SSIM、SI-SDR和ST-SIM性能均优于基线方法。


效率方面，原文表1显示接收端解码延迟：ParaJSCC 在全部请求类型最低，图像请求 4.34 ms、全模态 11.21 ms，FlatJSCC 次之；相对于按请求执行的 Baseline，图像请求从 17.18 ms 下降，全模态从 43.96 ms 下降。长周期效率上，2K 迭代下一次离线准备约 20.0 秒；图像仅请求 break-even 次数 \(N^\star = 871\)，全模态 \(N^\star = 398\)，说明请求复杂度越高，摊销优势越明显。

下表1展示 SNR=10 dB 下请求感知重建：单模态图像、音频、触觉仅需 0.2302、0.2154、0.2150 带宽比，选择性请求传输率较全模态降低约 48%–51%；全模态 0.4406 带宽比下达到 38.18 dB PSNR、0.921 SSIM、37.72 dB SI-SDR、0.938 ST-SIM。原文表3展示渐进重建：图像 PSNR 从层级1的 30.85 dB 单调升至层级6的 38.26 dB；全模态 SI-SDR 从 24.80 dB 升至 37.72 dB，ST-SIM 从 0.835 升至 0.938，验证按层级增量传输的质量单调性。

消融结果见下表2：移除 shared-private 后全模态 PSNR 从 38.18 降至 36.95、SI-SDR 37.72 降至 36.20、ST-SIM 0.938 降至 0.915，影响最大；移除 progressive 后 PSNR 37.30、SI-SDR 36.85、ST-SIM 0.925；移除 alignment 惩罚后 PSNR 37.55、SI-SDR 37.05、ST-SIM 0.928；移除 request-aware selection 在全模态下影响较小，主要收益在部分请求的效率上。

| Request type | Rate | Latency (ms) | PSNR | SSIM | SI-SDR | ST-SIM |
|---|---:|---:|---:|---:|---:|---:|
| Img | 0.2302 | 4.34 | 38.26 | 0.919 | – | – |
| Aud | 0.2154 | 2.16 | – | – | 37.50 | – |
| Tac | 0.2150 | 2.11 | – | – | – | 0.912 |
| Img+Aud | 0.3356 | 6.71 | 38.03 | 0.907 | 37.60 | – |
| Img+Tac | 0.3352 | 6.53 | 38.05 | 0.910 | – | 0.915 |
| Aud+Tac | 0.3204 | 4.32 | – | – | 37.65 | 0.934 |
| All | 0.4406 | 11.21 | 38.18 | 0.921 | 37.72 | 0.938 |

| Variant | Latency (ms) | PSNR | SI-SDR | ST-SIM |
|---|---:|---:|---:|---:|
| Full ParaJSCC | 11.21 | 38.18 | 37.72 | 0.938 |
| w/o Shared-Private | 10.09 | 36.95 | 36.20 | 0.915 |
| w/o Progressive | 8.34 | 37.30 | 36.85 | 0.925 |
| w/o Alignment | 10.93 | 37.55 | 37.05 | 0.928 |
| w/o Request-Aware Selection | 11.43 | 38.05 | 37.60 | 0.936 |

### 🔬 细节详述

论文发表于 ACM MM 2026（DOI: 10.1145/3767308.3836537）。实现使用 PyTorch，硬件为 AMD EPYC 7F52 CPU 和 NVIDIA GeForce RTX 4090 GPU。训练使用 AdamW，初始学习率 \(1\times10^{-5}\)，StepLR 调度器 step size 为 100 epochs、decay 为 0.5；除非另有说明，训练 100 个 epochs，batch size 为 8。每个多模态样本包含一张 \(256\times256\) 图像、长度为 1024 的音频片段和长度为 576 的振动触觉片段；图像作为二维数据处理，音频和振动触觉作为一维序列处理。

ParaJSCC 训练时从因子化分布 \(p(\mathcal{T},l)=p(\mathcal{T})p(l)\) 中采样请求对，覆盖全部七种请求类型和六个渐进层级，默认 \(p(\mathcal{T})\) 与 \(p(l)\) 均为均匀分布。模态权重 \(\lambda_m=0.2\)，失真-速率项系数 \(\beta=0.1\)，跨模态对齐项系数 \(\gamma=0.1\)。所有方法在匹配 AWGN 信道下评估；对非 JSCC 编解码器，其压缩比特流通过数字调制在相同信道上传输；触觉分离式基线进一步采用 16-QAM。

数据集方面，LMT-108 包含 108 个带纹理表面，提供配对的图像、音频和触觉记录；BFTS 包含 10 位参与者与 10 种代表性纹理交互产生的 500 次试验，提供同步图像、音频和摩擦诱发振动信号。两个数据集均按 7:3 随机划分训练/验证集，并保持材料类别分布，结果在验证集上求平均。

对比基线包括三类：模态专用方法（图像 ADJSCC、JSCCformer、CDDM、SwinJSCC；音频 DeepSC-S、DNN、DNN2；触觉 PVC-SLP、VC-PWQ、RNVC、VTSC）、统一在线多模态基线（U-DeepSC 和自定义 UniJSCC）、以及可复用但非结构化表示基线 FlatJSCC。评估指标为图像 PSNR/SSIM、音频 SI-SDR、触觉 ST-SIM。

效率评估中，解码延迟仅测量接收符号、比特流或参数子集到达后的重建时间，不包括源编码和离线准备；延迟在 batch size 为 1、1000 次运行平均、100 次热身后得到。ParaJSCC 与 FlatJSCC 在 2K 离线优化迭代下，每个样本一次性离线准备时间为 20.0 秒。传输率默认只统计当前请求传输的子集，而不是离线存储的完整参数包。

### ⚖️ 评分理由

*   创新性 (1.4/2)：[A_SUMMARY][A_METHOD] 将重复访问多模态通信从按请求编码重构为可复用参数服务，提出 progressive shared-private 参数包、请求感知子集传输和 break-even 分析，问题定义有应用价值；但核心解码与优化组件仍可见 INR/FiLM/渐进表示/JSCC 的已有范式组合，因此给 1.4。

*   技术严谨性 (1.2/1.5)：[A_METHOD][A_RESULTS] 离线目标、量化存储、请求感知传输与共享到私有解码在账本中形式化完整且逻辑自洽；消融显示 shared-private、progressive、alignment 等组件均有因果贡献，未发现公开方法内的明显系统逻辑错误，给 1.2。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 实验覆盖两个数据集、三类模态、SNR 扫描、请求类型效率、渐进重建和消融；但数据集规模小、缺少统计显著性检验、未直接对比 Implicit-JSCC 类方法，触觉/音频基线和仅 AWGN 评估使公平性与泛化支撑有限，因此给 1.0。

*   清晰度 (0.8/1)：[A_METHOD][A_SUMMARY] 离线准备、在线请求感知传输和轻量重建流程描述清楚，shared-to-private FiLM 解码与训练目标符号可读，表格化结果便于对照；整体写作和结构清晰，给 0.8。

*   影响力 (0.7/1.5)：[A_SUMMARY][A_RESULTS] 面向重复访问多模态资产服务，音频作为三类信号之一被纳入统一 JSCC 框架，对语音/音乐/音频读者有借鉴意义但非音频领域核心突破；影响力主要限于多模态通信服务场景，因此给 0.7。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD][A_LIMITS] 论文披露了 PyTorch、硬件、AdamW、学习率、调度、epochs、batch size、模态尺寸和损失系数；但量化位宽、固定映射 g(·) 与各子网络结构不完整，关键复现配置有缺失，给 0.3。

*   工程/实践价值 (1.2/1.5)：[A_RESULTS][A_METHOD] 延迟从 17.18 ms/43.96 ms 降至 4.34 ms/11.21 ms，选择性请求传输率降低约 48%–51%，break-even 分析给出 N*=871/398，体现离线成本可摊销的工程收益，给 1.2。

### 🚨 局限与问题

- 论文未提供代码、模型权重或数据获取链接，可复现性差。
- 数据集规模有限：LMT-108 仅 108 个样本，BFTS 仅 500 次试验、10 位参与者、10 类纹理，结果泛化性存疑。
- 缺少方差、置信区间或统计显著性检验，表格结果均以均值形式呈现。
- 未直接对比最接近的 Implicit-JSCC 类 INR-based JSCC 方法；FlatJSCC 为自定义非结构化基线，无法替代与已有 INR-JSCC 的直接比较。
- 触觉基线多为分离式编码加 16-QAM，音频侧主要为语音导向神经声学传输，与本文表面交互音频信号的专用 JSCC 基线有限，公平性受限。
- 仅评估 AWGN 信道，未覆盖衰落信道、真实无线链路、并发请求、缓存更新、检索 I/O 和能耗审计等更复杂部署条件。
- 量化位宽、固定映射 \(g(\cdot)\)、网络结构细节不完整，影响严格复现和成本核算。
- 图4/图5只提供趋势曲线，逐点数值未给出，难以做精确第三方比较。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
