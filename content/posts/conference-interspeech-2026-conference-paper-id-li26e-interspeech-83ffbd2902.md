---
title: "Noisy Environment Adaptation of Neural Speech Codec via Focal Mask and Noise Feature Separation"
date: 2026-09-27
draft: false
description: "针对低码率低信噪比下神经语音编码器重建失真问题，FocalSE 在 DAC 连续嵌入空间中用聚焦掩码去噪、分离噪声嵌入并做噪声分类，在 LibriTTS 加 ESC-50 混合数据上重建指标优于 SECE 与 FD-CBR，代价是推理参数增至 159M、含识别分支时达 222M。"
tags: ["Transformer", "环境声", "语音", "音频分类", "语音增强"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:li26e_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/li26e_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/li26e_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "aafeec72a2b7e6eeee9fd8c3eb0443d5869351b356df95c27078724ada2a9945"
paper_digest_api_reader_plan_sha256: "2049585d23fcca46367439a3301a615953815e2c39ed17fb597234345e383947"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b9630663d32d8a8bd0e67dfb69d54dc594403033ebc26ce7ca63607445e88328"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "49407f0f7faf7c6050b522b45a39ec2baf47f9a1eef3340e248e160a4e9772d3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f88c230377db91b91258e0f47efe81d71c47476a70b7dd61e45c22d6b80c3420"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2b7040ff5278d344be97e933d79fd2421a159f14762ad217a364908dfd722ce1"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.environmental","label":"环境声"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"task","id":"task.speech-enhancement","label":"语音增强"}]
paper_digest_primary_task: "语音增强"
paper_digest_primary_method: "Transformer"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 在编码器嵌入里同时去噪与识噪：FocalSE 的聚焦掩码与噪声分离

> 英文题目：*Noisy Environment Adaptation of Neural Speech Codec via Focal Mask and Noise Feature Separation*

> 会议身份：`conference:interspeech:2026:conference-paper-id:li26e_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/li26e_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/li26e_interspeech.pdf)

标签：#Transformer #环境声 #语音 #音频分类 #语音增强

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Shaokai Li：机构信息未能从会议 PDF 纯文本可靠映射
- Weiping Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhong Yang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

神经语音编解码器（Neural Speech Codec，NSC）在真实噪声下重建质量急剧下降，本文输入带噪语音嵌入并输出增强语音波形与噪声类别，难点是低码率量化会放大噪声且低信噪比下干净与噪声成分高度混叠。所提焦点语音增强（Focal Speech Enhancement，FocalSE）先用焦点调制压缩解压缩加Transformer块生成焦点掩码并与带噪嵌入相乘得到增强嵌入，再用SEMamba滤波结果减去增强嵌入分离出噪声嵌入，最后将噪声嵌入送入ResNet1D-18做50类环境声分类以反哺分离。相比只学全局掩码的SECE与可变码率FD方法，该机制同时建模全局上下文与局部短时变化并显式监督噪声分支，形成去噪与分离的协同。在LibriTTS加ESC-50构建的噪声测试集上，6.0 kbps与-5 dB条件下FocalSE达到PESQ 2.116与SI-SDR 5.403 dB，超越次优基线FD-CBR的1.975与4.516 dB。结论仅在16 kHz英语朗读加50类环境声、-5 dB到10 dB与2.5 kbps到6.0 kbps范围内验证，未覆盖混响、丢包与多说话人等外推场景。推理时可裁剪噪声识别分支将参数从222 M降至159 M，但原文未披露延迟与吞吐实测。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/shaokai1209/FocalSE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决哪段链路？

本文输入是含噪语音波形，目标是在低码率约束下重建出接近干净语音的波形。学习对象是刚进入语音与音频领域的研究生，需要先建立链路概念。白话说，神经语音编码器就是把语音压得很小再还原的工具，英文为 neural speech codec，缩写为 NSC。语音增强就是把噪声去掉留下人声的步骤，英文为 speech enhancement，缩写为 SE。传统做法是在波形上直接增强，但论文指出这类方法效率偏低，且难以无缝接入编码器的低码率约束。

**神经语音编码器 × 语音增强：** 神经语音编码器负责把波形压缩为低码率离散码并重建波形，语音增强负责在噪声下恢复干净信号；FocalSE 把增强放在编码器输出的连续嵌入空间中做，使增强结果可以直接送入原编码器的量化和解码器，搭配理由是避免在波形端另起一套增强再接入码率约束，组合意义是让编码器在噪声环境下仍能走原来的低码率重建通路。

论文把工作限定为干净嵌入提取器路线。也就是说，不是在离散码元上用大语言模型重新生成干净码，而是直接在编码器输出的连续向量上做去噪。原文把已有方法分为两类，一类是干净码元生成器，用自监督模型从含噪量化码元生成干净码元再重建；另一类是干净嵌入提取器，从编码后的含噪嵌入中提取干净嵌入再量化或解码。论文引用已有分析，认为后者推理效率更高且重建效果好，因此聚焦于此。需要保留的关键信息是，后续所有去噪、分离与识别都发生在连续嵌入空间，而不是波形或离散码空间。

输出是 1 篇可核对的技术解读，事实只来自论文原文证据与官方原图像素，不引入外部评价。后续按任务与路线、方法全景、组件计算、训练构造、实验条件、结果反证、复现收束展开。码率条件为 6.0 kbps 与 2.5 kbps，信噪比覆盖负信噪比到正信噪比，数据集为 LibriTTS 语音加 ESC-50 环境噪声。

### 同输入同目标的已有路线如何对照？

同输入都是含噪语音，同目标都是在编码器框架下重建干净语音，同运行阶段都是推理时直接输出增强后重建波形。在此口径下，论文选择了两个同在 DAC 连续嵌入空间做特征去噪的基线，分别是 SECE 与 FD。SECE 用变换器在降采样通道后的低维空间学习全局掩码以恢复干净嵌入特征。FD 集成了 SEMamba 模块与可变码率，并在其公开可比版本中采用恒定码率残差向量量化版本进行比较。

**干净嵌入提取器 × 干净码元生成器：** 干净码元生成器分工是用自监督模型从含噪量化码元生成干净离散码元，干净嵌入提取器分工是在量化前从含噪连续嵌入中直接提取干净嵌入；搭配理由是后者省去离散语言模型迭代且保留连续细节，论文因此选择提取器路线，组合意义是本文工作被定位为在连续空间中加掩码、分离与识别的提取器改进。

论文对已有路线的判断是，大多数方法只关注干净目标而忽略待抑制噪声成分的学习，这在低码率与低信噪比下会降低重建性能。这是一个有限解释，不是已证明的因果定理，但它直接引出本文设计：除了学干净嵌入，还要显式分离噪声嵌入并识别噪声类别。另一条相关线是知识蒸馏、掩码多头注意力等在编码或量化过程中提取干净特征的方法，论文将其归为同一提取器大类，不作为同条件胜负比较，只作为思路对照。

初学者容易误以为离散码元生成路线一定更好，因为它借助了语言模型。论文依据的对照恰好相反，提取器路线推理更高效。本文不补写两类路线在本文数据集上的直接对比数字，因为原文没有提供该对比，只提供提取器内部的基线对比。

### 为什么低码率加低信噪比是难点？

难点来自两个约束叠加。低码率意味着编码器每秒只能用很少的比特描述语音，量化层数与每层比特受限，细节必然被压缩。低信噪比意味着噪声能量接近或超过语音能量，编码器在预训练时只见过干净语音，一旦输入偏离理想生成条件，就会把噪声当成语音成分编码，导致重建失真与质量下降。论文用自然环境声、城市噪声、人非言语噪声举例，说明真实噪声种类多且多变。

举例帮助理解，但明确标为例子：比如把干净朗读声与街道噪声按负信噪比混合，编码器输出的嵌入会同时携带语音谐波结构与噪声纹理，若直接量化传输，解码端无法区分哪部分该保留。这只是教学例子，不代表论文某条具体样本的效果数值。

因此问题可表述为：如何在不推翻原编码器低码率结构的前提下，在其连续嵌入空间中恢复出接近干净语音的嵌入，并让剩余噪声部分可解释、可监督。论文的回答是引入聚焦掩码做加权去噪，再把噪声部分分离出来并做分类，形成多任务约束。

### FocalSE 让一个样本走完哪条通路？

先沿一个样本走完全程。输入为含噪波形，由 DAC 编码器得到含噪嵌入。记含噪嵌入为 fx，增强嵌入为 fex，干净嵌入为 fc，真实噪声嵌入为 fn，重建噪声嵌入为 frn，预测类别概率为 Nc，重建波形为干净估计。主路径是含噪嵌入送入聚焦掩码噪声分离模块，得到增强嵌入，再送入 DAC 量化器与 DAC 解码器，输出重建语音。训练时另有两条虚线分支，用冻结的 DAC 编码器分别从干净波形提取干净嵌入、从纯噪声提取真实噪声嵌入，作为监督来源。

以下导读针对总体框架图，帮助建立输入到输出的箭头关系，实线表示训练与推理都走，虚线只在训练时提供监督，雪花标记表示冻结。

> **看图路径：** 1. 先沿中间 Noisy 到 DAC Encoder 到 FMNS 到量化器到解码器的实线主路径走一遍；2. 再看上下两条虚线训练分支如何提供真实干净嵌入与真实噪声嵌入；3. 对照右上 FMNS 框内上下两支如何汇合成增强嵌入与重建噪声嵌入；4. 最后看右下 NR 框内通道降维到分类的串行顺序

[![原论文 Figure 1：The overview of FocalSE.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b4d2b745b721/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b4d2b745b721/figure-1.png)

*论文图 1。原论文 Figure 1：“The overview of FocalSE. The fn represents ground-truth noise embedding, frn represents the reconstructed noise embedding, fx represents the noisy embedding, fc represents the…”。*

从像素可见，左側 3 路分别为噪声、含噪混合、干净输入，中路含噪经 DAC 编码器得到 fx 后进入绿色聚焦掩码噪声分离模块，输出两路，一路增强嵌入向下对齐干净嵌入并向右进入量化解码，另一路重建噪声嵌入向上对齐真实噪声嵌入并向右进入噪声识别模块。右上子框显示含噪嵌入同时走聚焦压缩变换解压掩码调制支路和上方的滤波支路，两支分别经相乘与相减得到增强嵌入与噪声嵌入。右下子框显示噪声嵌入经通道降维、ResNet1D-18、全连接层与 Softmax 得到类别概率。

图中红色损失符号分别对应增强嵌入损失、噪声嵌入损失与分类损失。该图支持的判断是，去噪、分离、识别在嵌入空间形成闭环，而不是 3 个孤立后处理。

### 聚焦掩码如何从含噪嵌入算出增强嵌入？

聚焦掩码的白话含义是给每个嵌入位置打一个 0 到 1 之间的保留分数，英文为 focal mask。聚焦调制是实现该分数的机制，英文为 focal modulation，先聚合全局上下文再调制局部交互。变换器块是在压缩后低维空间中做上下文转换的堆叠模块，英文为 Transformer blocks。

**聚焦调制 × 变换器块：** 聚焦调制分工是先聚合全局上下文再调制局部交互，捕捉语音短时变化与长时依赖；变换器块分工是在压缩后的低维空间里做全序列上下文转换；搭配理由是压缩降低了计算量而变换器补足了压缩与解压之间的特征过渡，组合后生成聚焦掩码权重，用于对含噪嵌入做逐点加权去噪。

具体计算按原文分 3 步。第一步是聚焦下采样压缩，将降采样操作与聚焦调制结合，在压缩过程中捕捉语音信号的局部变化信息。第二步是在低维压缩空间堆叠 4 个变换器块，贯穿压缩与解压过程，促进有效特征过渡。解压时把下采样层换成上采样层。第 3 步是用可学习的 Sigmoid 调制全局上下文信息与局部互信息权重，得到聚焦掩码，再与含噪嵌入逐点相乘得到增强嵌入。

公式含义是增强嵌入等于掩码加权后的含噪嵌入，监督是增强嵌入与干净嵌入的 L1 距离。原文未给出该掩码分支内部梯度的逐层推导，解读只到此为止，不猜梯度路径细节。

需要区分的是，掩码本身不直接输出波形，它只输出权重，真正的波形仍由后续原 DAC 量化器与解码器生成。这就是提取器路线与波形增强的本质差别。

### 噪声分支与识别分支如何互相加强？

噪声特征分离的白话含义是把含噪中属于噪声的那部分向量显式算出来，英文为 noise feature separation。噪声识别是判断分离出的噪声属于 50 类环境声中哪一类的分类任务，英文为 noise recognition。

**聚焦掩码 × 噪声特征分离：** 聚焦掩码分工是估计每个嵌入位置保留多少语音成分，噪声特征分离分工是把滤波后的含噪嵌入减去增强嵌入得到噪声嵌入；搭配理由是仅学干净目标会忽略待抑制的噪声结构，而显式重建噪声迫使掩码同时解释语音与噪声两部分，组合意义是两路损失互相约束，使去噪与分离形成协同。

分离计算考虑了增强结果与干净目标之间总有偏差，因此先用 SEMamba 滤波器对含噪嵌入滤波，再减去增强嵌入得到重建噪声嵌入。监督是重建噪声嵌入与真实噪声嵌入的 L1 距离。直观理解是，滤波给出一个平滑后的含噪表示，减去已提取的语音部分，剩余即为噪声估计。若掩码把语音提取得越准，剩余噪声也越纯；反之噪声对齐越好，也会倒逼掩码不把噪声漏进语音。

**噪声特征分离 × 噪声识别：** 噪声特征分离分工是输出可与真实噪声嵌入对齐的向量，噪声识别分工是用 ResNet1D-18 对该向量做 50 类环境声分类；搭配理由是分类要求分离出的噪声具有类别可分性，从而反向要求分离更干净，组合意义是把无监督的残差分离变成有标签监督的判别特征提取。

识别分支先把分离出的噪声嵌入的特征通道降到 256 维，再用基于 1 维卷积的 ResNet18 学习判别特征，最后经全连接层与 Softmax 得到类别概率，监督是交叉熵分类损失。原文报告该分支在不同码率与信噪比下达到 70% 以上准确率，支持分离出的噪声确实保留了类别信息。未报告的是误判在哪些具体类别对之间最严重，混淆矩阵只显示对角线占优与离散 off-diagonal 亮点，像素不足以辨别每个格的具体数值，因此不硬写某两类的混淆率。

### 两阶段训练冻结了谁，更新了谁？

训练分为预训练与含噪适配两个阶段。预训练阶段在干净语音数据上按给定码率配置训练 DAC 模型，使其具备基本信号重建能力。含噪适配阶段把 FocalSE 接入上 1 阶段的 DAC 结构，做特征去噪与语音重建。除 FocalSE 相关权重外，所有模型权重用预训练 DAC 权重初始化，并在含噪语音数据集上微调。预训练 DAC 编码器被冻结，用作特征提取器，提取真实噪声嵌入与干净嵌入以指导训练。

最终训练损失由四项组成，分别是增强嵌入损失、噪声嵌入损失、噪声分类损失与 DAC 判别器损失，权重系数分别取 0.2、0.2 与 0.5。原文明确写出批量大小为 32，学习率为 0.0001，在 4 张 RTX 3090 上训练 150 轮。SECE 按公开参数复现，训练时冻结 DAC 权重并将其原始信号重建损失替换为 DAC 判别器损失以保证公平。FD 采用公开的恒定码率版本。

需要指出的缺项是，原文没有逐层列出微调时 DAC 量化器与解码器是否全部更新，也没有给出判别器损失的具体公式与梯度停止位置。解读不从模型名称推定这些实现，只保留原文已交代的冻结编码器、更新 FocalSE、微调其余结构这一层级表述。推理时噪声识别分支可不参与，此时推理参数为 159M，含识别分支时为 222M，其中 DAC 占 77M，聚焦掩码噪声分离模块约 82M，识别模块约 63M。

### 数据如何混合，码率与指标如何定义？

语音数据来自 LibriTTS，采样率 24 kHz，共 585 小时 2456 位说话人，选用训练干净 100 与 360 子集共 245.1 小时作干净训练，测试干净 100 子集 8.6 小时作干净测试。噪声来自 ESC-50，含 2000 段短音频、50 类常见声音事件，采样率 44.1 kHz。实验统一降采样到 16 kHz。每类噪声取八分之八选入训练混合，剩余混入测试，信噪比从负 10、分贝档到 20 dB 中随机选取，测试时按负 5、0、5、10 dB 报告。

码率由 DAC 下采样因子 512 与残差向量量化决定，16 层码本每层 12 比特实现 6.0 kbps，8 层码本每层 10 比特实现 2.5 kbps。DAC 在干净训练集训练、在含噪测试集测试。评价用语音质量、短时客观可懂度与尺度不变信噪失真，方向均为越高越好，分别记为 PESQ、STOI 与 SI-SDR。噪声识别报告分类准确率。硬件预算为 4 卡训练，推理开销只报告参数量，未报告延迟与实时率，因此不能承诺延迟改善。

初学者注意百分点与相对百分比不同，PESQ 与 STOI 是无量纲指标，SI-SDR 单位为 dB，码率单位为 kbps，参数量单位为 M。不同指标的差值不能混放比较，数值相同也不代表同一指标。

### 低码率低信噪比下谁的重建更好？

要回答的核心比较问题是，在相同 DAC 结构、相同码率与相同信噪比下，聚焦掩码加分离识别是否带来可运行策略的提升。公平条件是所有模型基于预训练 DAC 结构，基线包含直接重建的 DAC、SECE 与 FD 恒定码率版本，指标方向均为越高越好。下表整理 6.0 kbps 下 4 个信噪比的主结果，数值保留原文写法与精度。

| 模型 | -5 dB PESQ | -5 dB STOI | -5 dB SI-SDR | 0 dB PESQ | 0 dB STOI | 0 dB SI-SDR | 5 dB PESQ | 10 dB PESQ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAC | 1.215 | 0.738 | -5.193 | 1.314 | 0.809 | -0.835 | 1.496 | 1.773 |
| SECE | 1.955 | 0.810 | 4.294 | 2.281 | 0.908 | 6.010 | 2.573 | 2.806 |
| FD-CBR | 1.975 | 0.871 | 4.516 | 2.305 | 0.911 | 6.178 | 2.589 | 2.839 |
| FocalSE | 2.116 | 0.892 | 5.403 | 2.432 | 0.926 | 6.892 | 2.728 | 2.970 |

表后解释需要同时讲收益与代价。报告显示，相比含噪下直接用 DAC 重建，所有基于干净嵌入提取的方法都显著提升重建质量，支持连续嵌入空间策略能让编码器适应噪声环境。相比冻结 DAC 权重的 SECE，微调预训练编码器的 FD-CBR 与 FocalSE 更好，论文认为微调策略理论上优于冻结策略，这属于有限解释而非严格证明。FocalSE 在所列条件下取得最优，次优多为 FD-CBR。代价是参数量明显增大，FocalSE 含识别分支达 222M，远高于 FD-CBR 的 83M 与 DAC 的 77M。

未胜出项是 DAC 本身在负信噪比下 SI-SDR 为负值，说明不做增强时低码率编码器几乎失效，这反向证明增强的必要性。总体趋势不等于每组都成立，2.5 kbps 下 0 dB 的 STOI 等个别格点提升较小，需结合原表全量数字看。

以下导读针对噪声识别混淆矩阵图，上排为 6.0 kbps，下排为 2.5 kbps，每列对应不同信噪比，标题给出准确率。

> **看图路径：** 1. 先对比上排 6.0 kbps 与下排 2.5 kbps 四张混淆矩阵对角线深浅；2. 再读每张子图标题中的信噪比与分类准确率数值；3. 观察低信噪比下对角线外离散亮点的分布变化

[![原论文 Figure 2：Confusion matrices and accuracy (ACC) of FocalSE for noise recognition under different SNR and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b4d2b745b721/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b4d2b745b721/figure-2.png)

*论文图 2。原论文 Figure 2：“Confusion matrices and accuracy (ACC) of FocalSE for noise recognition under different SNR and bitrates, with the upper half for 6.0 kbps and the lower half for 2.5 kbps.”。*

从像素可见，8 张矩阵对角线均呈深蓝色连续亮带，背景为浅色，说明多数噪声类别可分。上排对角线整体比下排更连贯，与 6.0 kbps 准确率（%）多高于 2.5 kbps 的报告一致。具体准确率在 6.0 kbps 下为 72.61%、73.52%、72.67%、73.02%，在 2.5 kbps 下为 70.89%、71.95%、72.63%、71.10%，支持低码率会损失可分细节的判断。低信噪比下离散亮点略多，论文解释为信噪比下降扭曲语音能量分布从而减小类间差异，该解释引用外部文献，属待验证的可能机制。像素不能精确辨别单个非对角格数值，因此不报告具体哪两类混淆最高。

### 噪声识别准确率说明分离出了什么？

要回答的第二个问题是，分离出的噪声向量是否真的携带噪声类别信息。比较条件是同一 FocalSE 模型在两种码率与 4 种信噪比下的细粒度 50 分类，指标为准确率越高越好。下表直接整理混淆矩阵标题中的准确率，单位保留原文百分号写法。

| 码率条件 | -5 dB 准确率 | 0 dB 准确率 | 5 dB 准确率 | 10 dB 准确率 |
| --- | --- | --- | --- | --- |
| 6.0 kbps | 72.61% | 73.52% | 72.67% | 73.02% |
| 2.5 kbps | 70.89% | 71.95% | 72.63% | 71.10% |

表后解释是，报告显示 FocalSE 在不同低码率与低信噪比下均超过 70%，支持分离特征具有判别性。6.0 kbps 多高于 2.5 kbps，支持高码率保留更多噪声细节。反例是信噪比升高并未单调提升准确率（%），例如 6.0 kbps 下 0 dB 最高而 5 dB 略降，说明噪声分类难度不只由信噪比决定，还与具体噪声类别分布有关。未评测边界是真实噪声标签在推理时不可得，识别分支在推理时不提供增益，其作用主要在训练时约束分离质量。若去掉识别只看重建，推理参数可降至 159M，这是实际部署时需要在精度与成本间权衡的点。

### 拿掉分离与识别后性能如何变化？

消融要回答的是 3 个组件是否都必要。论文定义 FocalSE-NR/ND 为去掉噪声特征分离与识别模块，仅保留聚焦掩码去噪，FocalSE-NR 为保留分离但去掉识别。比较条件与主结果一致，仍在 6.0 kbps 与 2.5 kbps 下报告。下表整理 6.0 kbps 消融链与训练超参数，超参数为原文连续句中的可重放细节。

| 模型 | -5 dB PESQ | -5 dB STOI | -5 dB SI-SDR | 0 dB PESQ | 批量大小 | 学习率 | 损失权重 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FocalSE-NR/ND | 1.988 | 0.875 | 4.816 | 2.331 | 32 | 0.0001 | 0.2, 0.5 |
| FocalSE-NR | 2.086 | 0.888 | 5.387 | 2.397 | 32 | 0.0001 | 0.2, 0.5 |
| FocalSE | 2.116 | 0.892 | 5.403 | 2.432 | 32 | 0.0001 | 0.2, 0.5 |

表后解释是，报告显示从无分离无识别到有分离无识别再到完整模型，语音重建性能稳步提升，支持每个组件都带来增益。提升幅度在负 5 dB 更明显，说明低信噪比下显式建模噪声更有价值。代价同样单调增加，参数量从 152M 到 159M 再到 222M。需要说明的是，消融没有报告去掉聚焦掩码只留分离识别的对照，因此不能反推聚焦掩码单独的贡献下限，这是一个未验证边界。训练超参数在原文只给出一组取值，没有学习率与权重敏感性分析，因此复现时应先固定该组再做扩展。

以下导读针对负 5 dB 下的语谱图对比，上排为含噪与干净目标，中排为 6.0 kbps 两种方法，下排为 2.5 kbps 两种方法。

> **看图路径：** 1. 先横向比较含噪图与干净目标图的背景雾状能量与谐波纹理；2. 再纵向比较 6.0 kbps 下两种方法与干净目标的能量分布接近程度；3. 最后看 2.5 kbps 下面板亮带是否变细及背景残留是否增多

[![原论文 Figure 3：Spectrograms comparison of different models for restoring speech signal under -5 dB.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b4d2b745b721/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b4d2b745b721/figure-3.png)

*论文图 3。原论文 Figure 3：“Spectrograms comparison of different models for restoring speech signal under -5 dB.”。*

从像素可见，含噪图整体被红色雾状背景覆盖，谐波竖纹模糊，而干净目标背景深暗、亮色谐波与共振峰纹理清晰。两种增强方法都大幅压暗背景，恢复出竖条谐波结构。对比中排可见 FocalSE 的能量分布与谐波连续性更接近干净目标，尤其在中高频亮斑的形状上残留噪声更少。下排低码率时两者亮带均变细且背景残留略增，但 FocalSE 仍保留更多可辨结构。该图是单样本可视化，不能推广为全测试集的统计结论，需结合客观指标一起读。

### 哪些结论不能从现有证据推广？

首先，参数与成本未充分评估。论文报告了参数量，但未测量延迟、实时率与内存占用，也未报告训练时长与能耗。总体参数增大不等于每帧延迟同比例增大，推理开销、输出帧率与实际延迟需分别讨论，不能承诺延迟得到改善。

其次，数据与泛化边界有限。语音仅用英语朗读 LibriTTS，噪声仅用 ESC-50 的 50 类环境声按人工混合信噪比叠加，未评测真实录音混响、多人交叠与非平稳噪声下的表现。采样率统一降到 16 kHz，24 kHz 与 44.1 kHz 原始特性的影响未讨论。

再次，机制解释多为有限解释。例如微调优于冻结、分离与识别互相加强、低信噪比扭曲能量分布等，都没有因果干预实验，只是与结果一致的叙述。混淆矩阵的具体误判率、显著性检验与置信区间均未报告，相关性不能当作因果。最后，可视化仅为负 5 dB 单样本，不能把末步结果推广全程，也不能把语谱图接近等同于人耳听感，原文也未提供主观听音评价。

### 要复现应先准备什么，按什么顺序跑？

代码当前可用，地址为论文给出的开源仓库。复现第一步是按 2 阶段准备数据与模型。先准备 LibriTTS 训练干净 100 加 360 与测试干净 100，以及 ESC-50 噪声，按每类八分之八划分训练与测试混合，统一降采样到 16 kHz，信噪比在负 10 到 20 dB 档中随机选取，评测固定在负 5、0、5、10 dB。预训练 DAC 按 6.0 kbps 的 16 层 12 比特与 2.5 kbps 的 8 层 10 比特两种配置在干净集上训练，下采样因子为 512。

第二步跑含噪适配，冻结预训练 DAC 编码器作特征提取器，接入聚焦掩码噪声分离与噪声识别分支，用批量 32、学习率 0.0001、权重 0.2、0.2、0.5 训练 150 轮。基线需用 SECE 公开参数复现并替换为 DAC 判别器损失，FD 用公开恒定码率版本，保证同一预训练起点。评价按 PESQ、STOI、SI-SDR 越高越好，以及噪声分类准确率报告。推理若不做识别，可只加载 159M 参数。

需区分代码开源、权重下载与系统可运行。论文只声明代码地址可用，未明确是否提供预训练权重与一键推理脚本，本次也未能确认权重可达，因此应先验证仓库中的训练与推理入口是否完整，再补权重缺项。随机混合导致划分敏感，建议固定随机种子并记录每类噪声的文件划分，否则难以逐数复现。

### 何时值得尝试，还需补哪项验证？

当任务同时满足低码率传输与低信噪比输入，且允许在编码器嵌入空间加一个可微调的增强模块时，FocalSE 值得尝试。它的可操作点很清晰：用聚焦掩码做加权去噪，用滤波减增强得到噪声嵌入，再用分类约束分离质量，最后仍走原量化解码通路。若部署端对参数敏感，可先用无识别的 159M 版本，只保留掩码与分离。

还需补的验证包括真实环境录音、混响与多人干扰下的重建与可懂度，以及延迟、实时率与内存的实测。若要发表级比较，应补显著性检验、多次随机混合的方差，以及与可变码率 FD 在相同平均码率下的对齐比较。初学者复述时记住一条链路即可：含噪嵌入经聚焦掩码得到增强嵌入，滤波减增强得到噪声嵌入，噪声嵌入再做分类，三项损失加判别器损失联合训练，量化解码输出干净波形。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
