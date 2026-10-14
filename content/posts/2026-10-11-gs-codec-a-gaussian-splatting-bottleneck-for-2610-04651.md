---
title: "GS-Codec: A Gaussian-Splatting Bottleneck for Neural Audio Coding"
date: 2026-10-11
draft: false
tags: [语音编码, 神经编解码与离散单元, 语音, 高效推理]
categories: [论文速递]
description: "GS-Codec 把编码器隐变量拟合成加权一维高斯基函数之和再做标量量化，用单检查点实现基元数与位深控制的码率调节，在 3 到 6 kbps 附近达到与 EnCodec 和 DAC 可比的重建质量，代价是迭代拟合的编码耗时需用预测网络摊销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.04651"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "GS-Codec：用一维高斯溅射代替量化器的神经语音编码"
paper_digest_original_title: "GS-Codec: A Gaussian-Splatting Bottleneck for Neural Audio Coding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.04651v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.04651v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.04651v1.pdf"
paper_digest_primary_task: "语音编码"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-coding","label":"语音编码"},{"facet":"method","id":"method.neural-codec","label":"神经编解码与离散单元"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "神经编解码与离散单元"
paper_digest_score: 8.1
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "GS-Codec 把编码器隐变量拟合成加权一维高斯基函数之和再做标量量化，用单检查点实现基元数与位深控制的码率调节，在 3 到 6 kbps 附近达到与 EnCodec 和 DAC 可比的重建质量，代价是迭代拟合的编码耗时需用预测网络摊销。"
paper_digest_authors: [{"affiliations":["School of Electrical and Computer Engineering"],"name":"Ron Aluf"},{"affiliations":["Ben-Gurion University of the Negev"],"name":"Alon Canfi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Eliya Nachmani"}]
paper_digest_abstract_sha256: "b4e9c1a8ba6d94d43d5809caa15bf3e10ad186f1fb0a47043f3df2a1484d5fc5"
paper_digest_sidecars: {"citation.bib":{"sha256":"fa16b554b7afc517de28fd665167c96af83fb6e026eb33ec8f6ce0c3c8a6f4f5","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04651/citation.bib"},"citation.json":{"sha256":"e9c0c92e592d1afa98bf3930873f41ec3747f6e5fcdaa112f24e6f04587d5753","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04651/citation.json"},"citation.ris":{"sha256":"5c27dbf94741ec77f62e7160db185b276771774888518a9429d7b36fa6f4d702","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04651/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"75964bd8f470bff1032c304ddc80821f9b548f430bc09f4fd45eeee731ebb5a5","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04651/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b656046bd491d144645230e723ca196aacc995cb35185d071cf9810a4a9ac9cb"
paper_digest_api_reader_plan_sha256: "6fda2a49b24b5e1875bcee8e61883e4d8a3c151d34f416088427e150741a8a60"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e681c8b79e8d621101796a34ecd850d5b6de3c12f6d42c6068893a63f8b728ee"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "912d2162b1e8334ff13321f236c8116e297369495b9b61e3e8d12f953ba2c8c6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "015c3b38fe5b44869d6fc800e876d7b134a2b402fc9b2533b247b391931bdba0"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8918496b8f9c367fb600c9d18fb3f0c8e54b2faa324c453f61606b8c5a2d0f9b"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 GS-Codec：用一维高斯溅射代替量化器的神经语音编码

> 英文题目：*[GS-Codec: A Gaussian-Splatting Bottleneck for Neural Audio Coding](https://arxiv.org/abs/2610.04651v1)*

> 标签：#语音编码 | #神经编解码与离散单元 | #语音 | #高效推理
>
> 评分：**8.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Ron Aluf：School of Electrical and Computer Engineering
- Alon Canfi：Ben-Gurion University of the Negev
- Eliya Nachmani：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

神经音频编码需把波形压缩为可传输、可重建的紧凑离散token以支撑语音语言模型与存储通信，主流残差矢量量化等沿VQ-VAE模板把编码器隐变量划分到学习码本或固定标量网格，码率只能随码本级数跳变且存在码本坍缩。GS-Codec保留SEANet结构卷积编码器与解码器，中间以高斯溅射瓶颈代替量化器，编码器先把波形映射为连续隐变量Z。瓶颈固定该Z做内层梯度优化，用多个一维高斯基函数加权求和渲染出\(\hat{Z}\)并最小化均方误差，使拟合参数成为瓶颈本身。渲染结果直接送入解码器恢复波形，编码器经承诺损失和直通式梯度与波形侧多尺度频谱、对抗和特征匹配损失联合学习，形成穿过内层优化的端到端训练。推理时拟合的尺度与幅度经标量量化传输，位置可冻结在均匀网格不传输或逐段优化后额外传输，同一检查点通过改变图元数\(N_G\)和每参数比特数\(B\)实现训练后码率控制，为避免每段数百步优化，GS预测网络以一次前向回归出参数。在LibriSpeech test-clean上，54,000小时Librilight-Large训练的110图元5比特冻结配置在6.05 kbps取得词错误率2.19%、窄带PESQ 3.71、UTMOS 4.01和说话人相似度0.94，相比6.0 kbps DAC的2.27%、3.77、3.62和0.90，在词错误率、UTMOS和说话人相似度上更优而窄带PESQ略低。训练在单块NVIDIA RTX PRO 6000上约144小时，在NVIDIA L40S上每3秒段迭代编码平均171.2毫秒、实时率为0.057，预测网络降至7.9毫秒、实时率为0.0026。该结论限于英语中等码率，低于3 kbps感知质量仍有差距，当前处理完整3秒段且含非因果组件，跨域音频、亚kbps编码与流式时延尚未验证。

## 🔗 开源与复现资源

- 代码相关资源：<https://ronaluf.github.io/gs-codec/> — 链接可访问（HTTP 200）

- 第三方资源：<https://ronaluf.github.io/gs-codec/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 神经语音编码要把波形变成什么再送给谁

神经语音编码的输入是一段单声道波形，目标是把它压成很短的离散符号序列，再在接收端恢复出可听的波形。这些符号常被直接当作语音语言模型、实时通话和音乐生成模型的输入记号，因此记号保真度会限制下游合成质量。评价时既看波形与频谱的重建误差，也看感知质量、清晰度和说话人相似度，还要看语音识别词错误率是否上升，因为语义信息丢失会直接反映在转写上。

主流做法是编码器先把波形降采样为低帧率连续隐变量，瓶颈把隐变量离散化，解码器再上采样回波形。论文要回答的是瓶颈是否必须是一个划分空间的量化器，能否换成连续的参数分解，同时仍能传输、仍能控制码率。

### 残差向量量化和有限标量量化原来怎么做压缩

SoundStream、EnCodec 和 DAC 确立的路线是编码器加残差向量量化加镜像解码器。残差向量量化，英文为 Residual Vector Quantization，简称 RVQ，指把隐向量先用第一个码本量化，再把残差送给下一个码本逐级量化，码率按码本级数分档调节。有限标量量化，英文为 Finite Scalar Quantization，简称 FSQ，指不对向量查表，而是把每个隐坐标映射到固定的标量网格上，同样在训练中用直通梯度回传。HiFi-Codec、SNAC、WavTokenizer 等变体改变码本结构或帧率，DualCodec 和 SemantiCodec 探索超低码率，但都保留学习码本或固定网格的划分假设。

高斯溅射原本用于 3 维场景重建与图像压缩，近年被推广到 2 维几何与 1 维时间序列。本文的不同在于把 1 维高斯溅射放进编码器与解码器之间的瓶颈，训练全程不放量化器，量化只在训练后对拟合参数进行，这是与上述量化路线的运行阶段差异，比较时需要注意训练与推理所用的量化条件并不相同。

### 论文要解决的瓶颈划分假设是什么

论文质疑的是压缩必须经过训练时固定的有限向量集合这一结构假设。在 RVQ 中隐变量必须指派到某个码向量，码率只能按级数离散变化，还可能出现码本坍缩，即部分码向量长期不用而浪费容量。在 FSQ 中网格固定，同样是逐帧划分而没有显式的局部重叠结构先验。作者提出把瓶颈换成参数信号分解：对每段隐变量用多个局部 1 维高斯基函数叠加来近似，只传输基函数的参数。

这样要解决 3 个具体问题：如何让编码器产生容易被高斯叠加拟合的隐变量，如何避免推理时每段数百步优化的代价，以及如何用基元数与位深实现训练后细粒度码率控制。输入仍是波形，输出仍是波形与可传输的参数索引，必须保留的信息是音质、内容与音色，约束是单检查点不重训即可调码率。

### GS-Codec 的整体数据流是怎样的

GS-Codec 包含基于 SEANet 卷积结构的编码器、高斯溅射瓶颈和镜像解码器。编码器把时域波形降采样为通道数为 32 的连续隐张量，瓶颈把该张量拟合成多个高斯基元的加权和，解码器把渲染后的近似张量上采样回原始采样率。训练时上路走内层优化循环拟合参数，推理时下路可用预测网络 1 次回归参数，再经标量量化传输。解码端查表反量化后重新渲染求和，再送入解码器。下图展示了训练与推理两条路径、损失作用位置以及量化插入位置，读图时先分清哪条是训练，哪条是部署。

训练上方走迭代拟合，推理下方用预测网络加训练后量化，解码端结构不变。

> **看图路径：** 1. 先沿上排从波形到编码器再到高斯瓶颈最后到解码器的主路径看训练数据流；2. 再看下排预测网络如何替换中间的优化框并接入训练后量化；3. 注意外层重建损失与约束损失分别作用在波形端和隐变量端

[![原论文 Figure 1：GS-Codec pipeline. Training (top): The encoder latent Z is approximated by N_G Gaussian…](https://arxiv.org/html/2610.04651v1/figures/fig_train_pipeline.png)](https://arxiv.org/html/2610.04651v1/figures/fig_train_pipeline.png)

*论文图 1。原论文 Figure 1:：“GS-Codec pipeline. Training (top): The encoder latent Z is approximated by N_G Gaussian primitives via an inner optimization loop.”。*

上排从左到右是波形进入下采样编码器得到隐变量，进入高斯瓶颈的优化框得到渲染近似，再进入上采样解码器得到重建波形，虚线表示约束损失拉近编码输出与溅射结果，外层损失监督最终波形。下排把优化框换成预测网络，后接量化模块，说明部署时编码耗时从多步优化变为单次前向。图中右侧渲染公式表明每个通道的每个时刻都是多个高斯基函数乘幅度后的叠加，宽度跨通道共享，幅度按通道独立。

### 一维高斯基元如何拟合一段隐变量

一个高斯基元是时间上局部化的基函数，由时间中心和时间宽度决定形状，函数形式为指数衰减，处处可微且有界，适合梯度优化。每个基元还有按通道独立的幅度向量，宽度在所有通道间共享。对于通道与时间帧，渲染值是所有基元的幅度乘基函数值之和，全体记为渲染张量。拟合目标是渲染张量与编码器隐变量之间的均方误差除以通道与帧数，内层循环从初始参数出发做多步梯度更新。图 2 用单个隐通道直观展示了这一过程，初始时红色渲染曲线偏离蓝色真值，下方小高斯高度与位置都不对，经过 50 步与 100 步后红色曲线逐渐贴合蓝色曲线。

**残差向量量化 × 高斯溅射瓶颈：** 残差向量量化指把隐向量逐级查学习码本并传索引，码率只能按码本级数跳变；高斯溅射瓶颈指把一段隐信号写成多个局部高斯基函数的加权和，只传基函数的宽度与幅度参数。两者分工不同，前者是划分空间再指派离散编号，后者是连续参数分解再做事后量化，组合意义在于论文用后者替换前者，保留压缩能力的同时让码率随基元数连续变化。

内层拟合的数学目标是最小化隐变量与渲染结果的平均平方误差，符号含义是隐张量与渲染张量之差的范数。

\[\mathcal{L}_{\mathrm{inner}}=\frac{1}{CT}\|Z-\hat{Z}\|_{F}^{2}.\]

参数更新是标准的梯度下降形式，每步沿内层损失的梯度移动一定步长，训练用 100 步，评测用 300 步并带余弦退火。

\[\Theta^{(k)}=\Theta^{(k-1)}-\alpha^{(k)}\nabla_{\Theta}\mathcal{L}_{\mathrm{inner}}(\Theta^{(k-1)}),\quad k\in\{1,\dots,K\},\]

下图按步骤展示单通道拟合从偏离到贴合的变化，下方小曲线为各加权基元。

> **看图路径：** 1. 对比同一通道在第 0 步、第 50 步和第 100 步红色渲染曲线与蓝色真值的贴合程度；2. 观察下方各彩色小高斯的高度与宽度如何随步骤调整以填补误差；3. 注意横轴为隐变量时间帧，纵轴为隐变量取值

[![原论文 Figure 2：Visualization of the GS inner loop on a single latent channel across optimization steps 0, 50,…](https://arxiv.org/html/2610.04651v1/figures/gs_optimization_single_channel_cropped.png)](https://arxiv.org/html/2610.04651v1/figures/gs_optimization_single_channel_cropped.png)

*论文图 2。原论文 Figure 2:：“Visualization of the GS inner loop on a single latent channel across optimization steps 0, 50, and 100.”。*

图中上中下三排分别对应第 0 步、第 50 步和第 100 步，每排上半为蓝色真值与红色渲染的对比，下半为各基元分量。可以看到第 0 步红色整体偏高且起伏对不齐，第 50 步两者已基本重合但个别谷底仍有偏差，第 100 步几乎完全重合，下方基元呈现规则排列的钟形，说明优化把能量分配到不同时间位置与宽度上。这种重叠表示在瓶颈处引入了局部邻域共享结构，这是逐帧量化没有显式施加的先验。

**编码器隐变量 × 渲染求和：** 编码器隐变量指 SEANet 编码器把波形降采样后得到的连续张量 Z，形状为通道数乘时间帧数；渲染求和指按每个基元的中心与宽度算出高斯波形再乘幅度叠加得到近似张量。两者搭配的原因是解码器只看到渲染后的近似，编码器必须学会产生容易被高斯叠加拟合的隐变量，组合后瓶颈传递的是结构化参数而非逐帧索引。

### 参数如何量化与码率如何计算

压缩发生在推理阶段。每个高斯的宽度与幅度在训练后用量化比特数决定的 k 均值码本量化，码本在保留校准集上按参数类型分别拟合，推理时映射到最近质心索引，接收端查表反量化。位置有两种处理：固定位置把中心放在均匀时间网格上，不传输；学习位置则每段优化中心并额外传输。固定位置下每段传输宽度数加幅度矩阵，理论码率等于通道数加一乘基元数乘位深再除以段时长。学习位置需再加每中心的位置比特。

**训练后量化 × 码率公式：** 训练后量化指训练全程不放量化器，只在训练后对宽度和幅度分别做 k 均值聚类得到码本，推理时映射到最近质心索引；码率公式指用通道数、基元数、位深和段时长算出理论 kbps。两者搭配使单个检查点不用重训即可通过改基元数和位深调节码率，组合后码率控制从离散码本级数变为两个整数旋钮。

固定位置的码率由通道数、基元数、位深和段时长共同决定，基元数与位深都是整数，因此可达码率是离散的，但比码本级数细得多。

\[\mathrm{BR}_{\mathrm{kbps}}=\frac{(C+1)N_{G}B}{T_{\mathrm{seg}}\times 1000},\]

该公式的输入是每段的参数总量与段秒数，输出是每秒千比特数。实际码率还受分段与封包开销影响，论文报告的是按此公式计算的理论值。GS 预测网络的结构是先用膨胀 1 维卷积从隐变量提时间特征，再用变换器解码器从每个基元的学习查询交叉注意力得到表示，最后 3 个线性头分别输出宽度、幅度与位置，宽度用 Softplus 保证为正，位置用 Sigmoid 缩放到帧范围内。固定位置时位置头被旁路，查询可由共享记号与网格位置编码生成，使同一检查点服务不同基元数。

**内层优化循环 × GS 预测网络：** 内层优化循环指在前向过程中对每个音频段用梯度下降拟合高斯参数，最小化隐变量均方误差；GS 预测网络指用膨胀卷积加变换器解码器一次前向回归出同样的宽度、幅度和位置参数。前者是训练与评测的上界，后者是把多步优化摊销为单步推理的部署方案，组合后训练仍可端到端，推理不再需要数百步迭代。

### 编码器与解码器如何联合训练

外层训练同时优化编码器、瓶颈拟合与解码器。编码器要产生易于溅射的隐变量，解码器要学会逆渲染求和。为了稳定，瓶颈处加约束损失，把编码输出拉向停止梯度的渲染结果。解码器接收的张量在数值上等于渲染结果，但梯度走编码器输出，这通过直通估计实现，即数值取渲染值而梯度取编码输出。

最终波形监督包括时域 L1、多尺度频谱、来自多尺度短时傅里叶变换判别器的对抗损失与特征匹配损失，再加约束项加权求和，梯度经梯度平衡器回传到解码器与编码器。判别器这里指判断重建频谱真假的分类网络，与编码瓶颈无关。预测网络在主模型训完后单独训练，此时编码器与解码器冻结，目标只是预测参数渲染出的隐变量与编码器隐变量之间的均方误差，位置头用更高学习率加速时间放置收敛。

预测网络训练冻结编解码器，只最小化预测渲染与编码隐变量的误差。

\[\mathcal{L}_{\mathrm{pred}}=\|\hat{Z}_{\mathrm{splat}}-Z\|_{2}^{2},\]

该损失的输入是预测参数渲染的隐变量与编码器隐变量，计算目标是两者差异，监督只更新预测网络。主训练用 Adam 与指数滑动平均，在单卡上训练 200 轮，每轮 2000 步，每段 3 秒，隐帧率为 75 赫兹，每段 225 帧。内层训练步数与评测步数不同，评测用更小学习率与更多步数以逼近拟合上界。

### 实验在什么数据与基线上比较

主比较遵循 WavTokenizer 的评测协议，训练用 Common Voice 约 1717 小时、LibriTTS 约 554 小时和 VCTK 约 68 小时，共约 2339 小时，全部重采样为 24 千赫单声道，在 LibriTTS 测试干净集、测试噪声集与跨域 LJSpeech 上评测。更大语料比较在 54,000 小时 Librilight 上训练并在 16 千赫 LibriSpeech 干净集上评测，对比 EnCodec、DAC、SpeechTokenizer、HiFi-Codec、Vocos、WavTokenizer、Mimi 等公开基线，其中部分基线数字直接引用已发表结果，采样率与码率不完全对齐。

指标中 UTMOS 作为主要感知质量指标，数值越大越好，PESQ 分宽带与窄带两种，数值越大越好，STOI 反映可懂度越大越好，SIM 为说话人相似度越大越好，WER 为语音识别词错误率越小越好，转写用公开语音识别模型在 4 到 10 秒子集上计算。论文给出 3 种解码变体：固定位置不传位置，学习位置按每中心 10 比特传输，预测网络为单次前向加固定位置，前两者是迭代上界，最后一个是可部署方案。消融与扫描在同一 2339 小时混合数据与 LibriSpeech 干净集的 1237 条固定子集上进行，便于控制骨干与数据一致。

### 在公开编码器对比中重建质量如何

表 1 要回答的是在相近码率下 GS-Codec 与多码本基线在干净、噪声与跨域条件下的重建差异，公平条件是同一评测协议与相近理论码率，指标方向为 UTMOS、PESQ、STOI 越大越好。表中高码率段 GS-Codec 用 90 基元 6 比特，中码率段用 80 基元 4 比特，低码率段用 50 到 60 基元 4 比特，分别与 6 千比特、3 到 4 千比特和 1 千比特以下基线对比。

| Dataset | Band | Model | BW ↓\downarrow | tok/s ↓\downarrow | UTMOS ↑\uparrow | PESQ ↑\uparrow | STOI ↑\uparrow | V/UV F1 ↑\uparrow |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LibriTTS test-clean |  | DAC (ref) | 9.0 kbps | 900 | 3.910 | 3.908 | 0.970 | 0.978 |
| LibriTTS test-clean | ≥\geq5 kbps high | EnCodec | 6.0 kbps | 600 | 3.040 | 2.720 | 0.939 | 0.953 |
| LibriTTS test-clean | ≥\geq5 kbps high | Vocos | 6.0 kbps | 600 | 3.695 | 2.807 | 0.943 | 0.944 |
| LibriTTS test-clean | ≥\geq5 kbps high | SpeechTokenizer | 6.0 kbps | 600 | 3.879 | 2.612 | 0.917 | 0.950 |
| LibriTTS test-clean | ≥\geq5 kbps high | GS-Codec (NG=90N_{G}=90, 6b, Pred, frozen) | 5.94 kbps | 990 | 4.076 | 3.289 | 0.970 | 0.956 |
| LibriTTS test-clean | ≥\geq5 kbps high | GS-Codec (NG=90N_{G}=90, 6b, frozen) | 5.94 kbps | 990 | 4.094 | 3.348 | 0.972 | 0.960 |
| LibriTTS test-clean | ≥\geq5 kbps high | GS-Codec (NG=90N_{G}=90, 6b, unfrozen) | 6.24 kbps | 1020 | 4.102 | 3.400 | 0.974 | 0.958 |
| LibriTTS test-clean | 3-5 kbps mid | DAC | 4.0 kbps | 400 | 3.433 | 2.738 | 0.928 | 0.957 |
| LibriTTS test-clean | 3-5 kbps mid | HiFi-Codec | 3.0 kbps | 400 | 3.753 | 2.961 | 0.941 | 0.962 |
| LibriTTS test-clean | 3-5 kbps mid | HiFi-Codec | 4.0 kbps | 300 | 3.904 | 3.012 | 0.945 | 0.958 |
| LibriTTS test-clean | 3-5 kbps mid | EnCodec | 3.0 kbps | 300 | 2.307 | 2.052 | 0.901 | 0.920 |
| LibriTTS test-clean | 3-5 kbps mid | Vocos | 3.0 kbps | 300 | 3.539 | 2.403 | 0.923 | 0.936 |
| LibriTTS test-clean | 3-5 kbps mid | SpeechTokenizer | 3.0 kbps | 300 | 3.563 | 1.931 | 0.878 | 0.927 |
| LibriTTS test-clean | 3-5 kbps mid | GS-Codec (NG=80N_{G}=80, 4b, Pred, frozen) | 3.52 kbps | 880 | 3.990 | 3.071 | 0.959 | 0.943 |
| LibriTTS test-clean | 3-5 kbps mid | GS-Codec (NG=80N_{G}=80, 4b, frozen) | 3.52 kbps | 880 | 3.974 | 3.067 | 0.960 | 0.950 |
| LibriTTS test-clean | 3-5 kbps mid | GS-Codec (NG=80N_{G}=80, 4b, unfrozen) | 3.79 kbps | 907 | 4.026 | 3.177 | 0.966 | 0.953 |
| LibriTTS test-clean | <{<}3 kbps low | DAC | 1.0 kbps | 100 | 1.494 | 1.246 | 0.771 | 0.794 |
| LibriTTS test-clean | <{<}3 kbps low | WavTokenizer | 0.5 kbps | 40 | 3.602 | 1.703 | 0.862 | 0.917 |
| LibriTTS test-clean | <{<}3 kbps low | WavTokenizer | 0.9 kbps | 75 | 4.049 | 2.373 | 0.914 | 0.938 |
| LibriTTS test-clean | <{<}3 kbps low | GS-Codec (NG=50N_{G}=50, 4b, unfrozen) | 2.37 kbps | 567 | 3.521 | 2.409 | 0.932 | 0.930 |
| LibriTTS test-clean | <{<}3 kbps low | GS-Codec (NG=60N_{G}=60, 4b, frozen) | 2.64 kbps | 660 | 3.568 | 2.453 | 0.929 | 0.933 |
| LibriTTS test-clean | <{<}3 kbps low | GS-Codec (NG=60N_{G}=60, 4b, unfrozen) | 2.84 kbps | 680 | 3.847 | 2.825 | 0.951 | 0.940 |
| LibriTTS test-other |  | DAC (ref) | 9.0 kbps | 900 | 3.357 | 3.760 | 0.958 | 0.970 |
| LibriTTS test-other | ≥\geq5 kbps high | EnCodec | 6.0 kbps | 600 | 2.657 | 2.682 | 0.924 | 0.934 |
| LibriTTS test-other | ≥\geq5 kbps high | Vocos | 6.0 kbps | 600 | 3.196 | 2.559 | 0.921 | 0.920 |
| LibriTTS test-other | ≥\geq5 kbps high | SpeechTokenizer | 6.0 kbps | 600 | 3.285 | 2.327 | 0.881 | 0.921 |
| LibriTTS test-other | ≥\geq5 kbps high | GS-Codec (NG=90N_{G}=90, 6b, Pred, frozen) | 5.94 kbps | 990 | 3.623 | 3.011 | 0.955 | 0.939 |
| LibriTTS test-other | ≥\geq5 kbps high | GS-Codec (NG=90N_{G}=90, 6b, frozen) | 5.94 kbps | 990 | 3.631 | 3.080 | 0.958 | 0.943 |
| LibriTTS test-other | ≥\geq5 kbps high | GS-Codec (NG=90N_{G}=90, 6b, unfrozen) | 6.24 kbps | 1020 | 3.639 | 3.131 | 0.960 | 0.943 |
| LibriTTS test-other | 3-5 kbps mid | DAC | 4.0 kbps | 400 | 2.945 | 2.595 | 0.908 | 0.940 |
| LibriTTS test-other | 3-5 kbps mid | HiFi-Codec | 4.0 kbps | 400 | 3.075 | 2.554 | 0.913 | 0.939 |
| LibriTTS test-other | 3-5 kbps mid | HiFi-Codec | 3.0 kbps | 300 | 3.303 | 2.608 | 0.917 | 0.932 |
| LibriTTS test-other | 3-5 kbps mid | EnCodec | 3.0 kbps | 300 | 2.088 | 2.052 | 0.884 | 0.893 |
| LibriTTS test-other | 3-5 kbps mid | Vocos | 3.0 kbps | 300 | 3.056 | 2.193 | 0.897 | 0.905 |
| LibriTTS test-other | 3-5 kbps mid | SpeechTokenizer | 3.0 kbps | 300 | 3.018 | 1.737 | 0.837 | 0.891 |
| LibriTTS test-other | 3-5 kbps mid | GS-Codec (NG=80N_{G}=80, 4b, Pred, frozen) | 3.52 kbps | 880 | 3.455 | 2.786 | 0.938 | 0.932 |
| LibriTTS test-other | 3-5 kbps mid | GS-Codec (NG=80N_{G}=80, 4b, frozen) | 3.52 kbps | 880 | 3.504 | 2.831 | 0.944 | 0.934 |
| LibriTTS test-other | 3-5 kbps mid | GS-Codec (NG=80N_{G}=80, 4b, unfrozen) | 3.79 kbps | 907 | 3.539 | 2.907 | 0.950 | 0.942 |
| LibriTTS test-other | <{<}3 kbps low | DAC | 1.0 kbps | 100 | 1.499 | 1.245 | 0.751 | 0.778 |
| LibriTTS test-other | <{<}3 kbps low | WavTokenizer | 0.5 kbps | 40 | 3.055 | 1.662 | 0.834 | 0.895 |
| LibriTTS test-other | <{<}3 kbps low | WavTokenizer | 0.9 kbps | 75 | 3.431 | 2.261 | 0.891 | 0.917 |
| LibriTTS test-other | <{<}3 kbps low | GS-Codec (NG=50N_{G}=50, 4b, unfrozen) | 2.37 kbps | 567 | 3.117 | 2.310 | 0.915 | 0.926 |
| LibriTTS test-other | <{<}3 kbps low | GS-Codec (NG=60N_{G}=60, 4b, frozen) | 2.64 kbps | 660 | 3.130 | 2.331 | 0.912 | 0.926 |
| LibriTTS test-other | <{<}3 kbps low | GS-Codec (NG=60N_{G}=60, 4b, unfrozen) | 2.84 kbps | 680 | 3.378 | 2.620 | 0.934 | 0.934 |
| LJSpeech |  | DAC (ref) | 9.0 kbps | 900 | 4.301 | 3.902 | 0.973 | 0.976 |
| LJSpeech | ≥\geq5 kbps high | EnCodec | 6.0 kbps | 600 | 3.229 | 2.663 | 0.944 | 0.956 |
| LJSpeech | ≥\geq5 kbps high | Vocos | 6.0 kbps | 600 | 4.033 | 2.926 | 0.950 | 0.946 |
| LJSpeech | ≥\geq5 kbps high | SpeechTokenizer | 6.0 kbps | 600 | 4.237 | 2.641 | 0.932 | 0.945 |
| LJSpeech | ≥\geq5 kbps high | GS-Codec (NG=90N_{G}=90, 6b, Pred, frozen) | 5.94 kbps | 990 | 4.346 | 3.205 | 0.970 | 0.952 |
| LJSpeech | ≥\geq5 kbps high | GS-Codec (NG=90N_{G}=90, 6b, frozen) | 5.94 kbps | 990 | 4.347 | 3.273 | 0.971 | 0.944 |
| LJSpeech | ≥\geq5 kbps high | GS-Codec (NG=90N_{G}=90, 6b, unfrozen) | 6.24 kbps | 1020 | 4.372 | 3.356 | 0.975 | 0.944 |
| LJSpeech | 3-5 kbps mid | DAC | 4.0 kbps | 400 | 3.811 | 2.762 | 0.934 | 0.952 |
| LJSpeech | 3-5 kbps mid | HiFi-Codec | 4.0 kbps | 400 | 4.166 | 2.763 | 0.945 | 0.950 |
| LJSpeech | 3-5 kbps mid | HiFi-Codec | 3.0 kbps | 300 | 4.269 | 2.909 | 0.949 | 0.947 |
| LJSpeech | 3-5 kbps mid | EnCodec | 3.0 kbps | 300 | 2.391 | 2.019 | 0.906 | 0.933 |
| LJSpeech | 3-5 kbps mid | Vocos | 3.0 kbps | 300 | 3.788 | 2.501 | 0.931 | 0.939 |
| LJSpeech | 3-5 kbps mid | SpeechTokenizer | 3.0 kbps | 300 | 3.991 | 2.046 | 0.902 | 0.930 |
| LJSpeech | 3-5 kbps mid | GS-Codec (NG=80N_{G}=80, 4b, frozen) | 3.52 kbps | 880 | 4.256 | 2.998 | 0.960 | 0.942 |
| LJSpeech | 3-5 kbps mid | GS-Codec (NG=80N_{G}=80, 4b, unfrozen) | 3.79 kbps | 907 | 4.338 | 3.167 | 0.968 | 0.944 |
| LJSpeech | <{<}3 kbps low | DAC | 1.0 kbps | 100 | 1.444 | 1.208 | 0.782 | 0.810 |
| LJSpeech | <{<}3 kbps low | WavTokenizer | 0.5 kbps | 40 | 4.019 | 2.114 | 0.909 | 0.941 |
| LJSpeech | <{<}3 kbps low | WavTokenizer | 0.9 kbps | 75 | 4.258 | 2.492 | 0.931 | 0.940 |
| LJSpeech | <{<}3 kbps low | GS-Codec (NG=60N_{G}=60, 4b, frozen) | 2.64 kbps | 660 | 3.602 | 2.312 | 0.925 | 0.929 |
| LJSpeech | <{<}3 kbps low | GS-Codec (NG=60N_{G}=60, 4b, unfrozen) | 2.84 kbps | 680 | 4.046 | 2.666 | 0.950 | 0.941 |

从表中可见在 LibriTTS 干净集高码率段 GS-Codec 三变体的 UTMOS 与 PESQ 均高于同段 EnCodec、Vocos 和 SpeechTokenizer，学习位置因额外位置比特码率略高而指标也略高，预测网络与迭代冻结位置的差距很小。在中码率段 3.52 千比特的固定与预测变体仍高于 3 到 4 千比特的多码本基线，在噪声集与 LJSpeech 上趋势一致，说明结论不只在干净集成立。低码率段 WavTokenizer 在 0.5 到 0.9 千比特仍占优，GS-Codec 工作在 2.3 到 2.8 千比特，两者码率不在同一区间，不能直接判胜负。代价是 GS-Codec 的每秒记号数明显高于基线，传输的是标量参数而非码本索引。基元数扫描进一步显示质量随基元数先陡后平，下图展示固定 5 比特下三项指标随基元数的变化。

横轴为高斯个数，纵轴分别为感知质量、客观质量与词错误率，注意词错误率向下为好。

> **看图路径：** 1. 看左中右三幅子图横轴基元数增加时纵轴感知质量、客观质量与词错误率的变化方向；2. 注意 80 个基元附近曲线由陡峭转为平坦的位置；3. 对比词错误率在 110 个基元后是否继续下降

[![原论文 Figure 3：N_G sweep at fixed 5-bit PTQ on LibriSpeech test-clean (4-10 s subset, n=1237; WER:…](https://arxiv.org/html/2610.04651v1/figures/ng_sweep_5bit_camera_ready.png)](https://arxiv.org/html/2610.04651v1/figures/ng_sweep_5bit_camera_ready.png)

*论文图 3。原论文 Figure 3:：“N_G sweep at fixed 5-bit PTQ on LibriSpeech test-clean (4-10 s subset, n=1237; WER: hubert-large-ls960-ft).”。*

从像素可见，三幅子图横轴均为高斯基元数，纵轴从左到右分别为感知质量指标、窄带客观质量指标和词错误率百分比，其中词错误率向下为好。左侧与中间曲线随基元数增加而上升，右侧曲线随基元数增加而下降，三者在基元数较少时变化较陡，基元数较多后均趋于平缓。这支持先保证足够基元容量再加精度的分配策略，也说明超过一定基元数后继续加基元的边际收益很小。

### 在大语料与语义指标上表现是否一致

表 2 要回答的是换到更大训练语料与 16 千赫评测时，GS-Codec 在感知质量、说话人相似度与语义保留上是否仍与公开基线可比，公平条件是同一 LibriSpeech 干净集与相近码率，WER 越小越好，其余越大越好。表中 GS-Codec 多个配置覆盖 3.5 到 6.05 千比特，基线包括 DAC、EnCodec、SpeechTokenizer、Mimi 与大参数 XYTokenizer。

|  | Model | BR | Param | WER↓\downarrow | PESQ↑\uparrow | UTMOS↑\uparrow | SIM↑\uparrow |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | (kbps) |  | (%) |  |  |  |
| ≥\geq5 kbps high | DAC-75Hz | 6.0 | 74M | 2.27 | 3.77 | 3.62 | 0.90 |
| ≥\geq5 kbps high | EnCodec-75Hz | 6.0 | 15M | 2.24 | 3.12 | 3.01 | 0.89 |
| ≥\geq5 kbps high | GS-Codec (130g, 4b, frozen) | 5.72 | 55M | 2.25 | 3.67 | 3.93 | 0.93 |
| ≥\geq5 kbps high | GS-Codec (120g, 4b, frozen) | 5.28 | 55M | 2.22 | 3.65 | 3.94 | 0.93 |
| ≥\geq5 kbps high | GS-Codec (110g, 5b, frozen) | 6.05 | 55M | 2.19 | 3.71 | 4.01 | 0.94 |
| 3-5 kbps mid | SpeechTokenizer-50Hz | 4.0 | 103M | 2.47 | 3.01 | 3.90 | 0.85 |
| 3-5 kbps mid | GS-Codec (70g, 5b, frozen) | 3.85 | 55M | 2.29 | 3.41 | 3.88 | 0.91 |
| 3-5 kbps mid | GS-Codec (80g, 4b, frozen) | 3.52 | 55M | 2.27 | 3.46 | 3.91 | 0.91 |
| 3-5 kbps mid | GS-Codec (110g, 4b, frozen) | 4.84 | 55M | 2.26 | 3.63 | 3.95 | 0.93 |
| <{<}3 kbps low | Mimi-12.5Hz | 1.1 | 78M | 3.15 | 2.75 | 3.56 | 0.73 |
| <{<}3 kbps low | XYTokenizer-12.5Hz | 1.0 | 520M | 2.36 | 3.00 | 4.00 | 0.84 |
| <{<}3 kbps low | GS-Codec (60g, 4b, unfrozen) | 2.84 | 55M | 2.43 | 3.02 | 3.54 | 0.87 |

表中 6.05 千比特的 110 基元 5 比特配置在 UTMOS 与 SIM 上领先，WER 与 DAC 和 EnCodec 相近，窄带 PESQ 略低于 DAC。在 3 到 5 千比特中段 GS-Codec 的 UTMOS 与 SIM 同样高于同码率 SpeechTokenizer，WER 保持在 2.3% 左右。低于 3 千比特时 Mimi 与 XYTokenizer 工作在约 1 千比特，GS-Codec 工作在 2.84 千比特，码率与模型规模都不同，论文也指出该段感知质量仍有提升空间。限制是基线结果来自已发表数字而非同一训练框架重跑，采样率与参数量不一致，因此只能说在各自报告条件下可比，不能理解为严格控制骨干后的胜负。严格同骨干的对照在附录的受控评测中给出，见下一节。

### 同骨干下高斯分解是否优于向量与标量量化

本节要回答的是固定相同 SEANet 骨干、相同训练轮数与同一 1237 条评测子集时，瓶颈换成高斯分解是否带来差异，公平条件是三者码率都约 6 千比特，GS 用预测中心。表 3 给出均值与 utterance 自助法的置信区间 1/2 宽，PESQ 为窄带。

|  | RVQ | FSQ | GS Predictor |
| --- | --- | --- | --- |
| Payload (kbps) | 6.000 | 6.000 | 5.950 |
| PESQ-NB ↑\uparrow | 3.8 ± .011 | 3.8 ± .013 | 3.8 ± .009 |
| UTMOS ↑\uparrow | 3.94 ± .020 | 3.94 ± .019 | 4.05 ± .017 |
| STOI ↑\uparrow | .96 ± .0008 | .96 ± .0008 | .96 ± .0011 |
| SIM ↑\uparrow | .93 ± .0013 | .92 ± .0014 | .94 ± .0012 |
| WER (%) ↓\downarrow | 2.1 ± .25 | 2.2 ± .26 | 2.1 ± .25 |

表中三者在窄带 PESQ、STOI 与 WER 上在报告精度下基本持平，差异主要在 UTMOS 与 SIM 上，GS 预测网络的 UTMOS 高约 0.11，SIM 高约 0.01 到 0.02，且置信区间不重叠，支持感知质量与音色保留更好而语义与客观质量相当的判断。限制是这只是单点码率与单数据集的结果，附录子群分析显示在高基频、高摩擦音、高谱通量、低能量与低峰底比等极端三分位子集上 GS 仍领先，但都属于同一英语干净语音分布。位深扫描解释了精度与容量的分工，下图对比 60 与 80 基元在 3 到 10 比特下的表现。

横轴为每参数比特数，纵轴分别为感知质量、客观质量、词错误率与相似度，蓝色为 80 基元，橙色为 60 基元。

> **看图路径：** 1. 对比蓝色圆圈 80 基元与橙色方块 60 基元在同一位深下的四项指标高低；2. 观察位深从 3 到 6 比特的陡峭段与 6 比特之后的平坦段；3. 注意词错误率纵轴向下为好，不要把曲线下降误读为变差

[![原论文 Figure 4：Bit-depth sweep for N_G=60 (orange squares) and N_G=80 (blue circles) on LibriSpeech test-clean…](https://arxiv.org/html/2610.04651v1/figures/ng60_vs_80_bits_sweep_camera_ready.png)](https://arxiv.org/html/2610.04651v1/figures/ng60_vs_80_bits_sweep_camera_ready.png)

*论文图 4。原论文 Figure 4:：“Bit-depth sweep for N_G=60 (orange squares) and N_G=80 (blue circles) on LibriSpeech test-clean (4-10 s subset, n=1237).”。*

可见从 3 到 6 比特四项指标都快速改善，6 比特后趋于饱和，且 80 基元在每个位深都高于 60 基元，说明容量不足时单纯加精度补不回来。固定预算分配表进一步显示在 5.28 千比特下 120 基元 4 比特优于 160 基元 3 比特与 80 基元 6 比特，在 60 基元下从 5 比特加到 10 比特 UTMOS 几乎不动。

**固定位置 × 学习位置：** 固定位置指把高斯中心放在均匀时间网格上，不传输位置参数；学习位置指每段单独优化中心并额外用量化比特传输。两者分工是容量与边信息之间的权衡，基元充足时均匀网格已能覆盖信号，省下的位置比特更划算，基元很少时可移动的中心能带来可观增益。

位置消融显示学习位置的增益随基元数增大而衰减，基元少时可移动中心明显更好，基元到 80 到 90 时冻结与学习几乎无差，因此默认用冻结位置省比特是合理的。表示消融还显示去掉分解而直接降采样或逐帧标量量化会使隐变量归一化均方误差翻倍，而换三角、拉普拉斯或 Gabor 基只变化约 17%，说明分解本身比具体核形状更重要。

### 编码耗时与适用范围的边界在哪里

表 4 要回答的是迭代拟合与预测网络在实际 GPU 耗时上与前馈编码器的差距，测量条件是英伟达 L40S 显卡、200 段 3 秒音频、10 段热身，用计时事件测量编码端，不含解码器，数值越小越好，实时率等于编码时间除以音频时长。

| Model | Mean | Median | p95 | RTF |
| --- | --- | --- | --- | --- |
| GS-Codec iterative (300-step Adam) | 171.2 ms | 152.6 ms | 208.4 ms | 0.057 |
| GS-Pred | 7.9 ms | 7.9 ms | 7.9 ms | 0.0026 |
| EnCodec 24 kHz @ 6 kbps | 5.4 ms | 5.3 ms | 5.4 ms | 0.0018 |
| DAC 24 kHz @ 6 kbps | 5.0 ms | 5.0 ms | 5.1 ms | 0.0017 |

表中 300 步迭代编码平均每段 171.2 毫秒，实时率 0.057，比 DAC 慢约 34 倍，比 EnCodec 慢约 32 倍，显然不适合直接部署。预测网络降到平均每段 7.9 毫秒，实时率 0.0026，与 DAC 的 5.0 毫秒和 EnCodec 的 5.4 毫秒相比仍慢约 1.5 倍，但已进入同一量级，且重建质量接近迭代拟合。限制是这只是整段非流式执行的 GPU 时间，当前编解码含非因果卷积与 3 秒分段，不能理解为流式延迟。论文明确指出实验只覆盖英语语音的中码率段，低码率感知质量仍有差距，向其他音频域与亚千比特的泛化尚未验证。主观听感在约 6 千比特 GS 平均 MUSHRA 高于同骨干 RVQ 与 FSQ，在约 3 千比特 MUSHRA 相近而平均 MOS 差距更小，但样本仅 10 条、听众为志愿者，区间较宽，只能作为客观指标的补充。

### 复现第一步要准备什么与先跑通什么

复现应先按附录固定 SEANet 结构：隐通道 32、基础滤波器 64、降采样倍数 320 得到 75 赫兹隐帧率，每 3 秒 225 帧，训练内层 100 步、评测 300 步并带余弦退火，位置默认均匀网格，宽度跨通道共享、幅度按通道独立。损失权重与判别器 FFT 尺寸需与原文一致，优化器用指定参数与指数滑动平均。第一步建议先跑通固定位置的迭代拟合与渲染，确认隐变量均方误差随步骤下降且解码波形可听，再训练预测网络并对比其与迭代结果的差距。

量化码本要在保留校准集上按宽度与幅度分别拟合，评测时固定码率公式中的段时长与位深，区分宽带与窄带 PESQ。作者页面当前可访问并提供代码与试听样例，链接为论文中给出的项目主页，但代码可用不等于权重可下载，权重、语料划分与随机种子需以实际仓库为准。基线引用部分数字时应注明来源，重跑 DAC 与 EnCodec 公开检查点时要统一重采样与子集筛选，否则码率与指标不可比。

### 什么时候值得尝试还缺哪些验证

当已有 SEANet 或类似卷积编解码框架，且希望单检查点不重训即调码率，或在 3 到 6 千比特需要更好的感知质量与说话人相似度而能接受略高的编码耗时与记号数时，GS-Codec 值得尝试。它把码率控制从码本级数变为基元数与位深两个整数旋钮，适合需要细粒度存储与传输权衡的场景。若目标是亚千比特、流式低延迟或非语音音频，则原文证据不支持直接套用，低码率段与跨域泛化仍是开放问题。

还需补的验证包括在噪声、混响、多语言与音乐上的系统评测，流式因果改造后的延迟与质量，长期训练稳定性与码本坍缩之外的失效模式，以及更大规模主观听感与下游语音语言模型任务的端到端增益。容易误解的是训练后量化不等于训练中无瓶颈，瓶颈是高斯分解本身；预测网络接近迭代上界不等于超越上界；固定预算下加精度不能替代加基元；自动指标领先不等于人工听感在所有条件下领先。

总体看，参数分解为神经音频压缩提供了除划分量化之外的一条可行路线，但结论目前只在英语语音、中码率、非流式条件下成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.04651v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
