---
title: "Latent Secret Spin: Keyed Orthogonal Rotations for Blind Speech Watermarking in Anisotropic Latent Spaces"
date: 2026-09-12
draft: false
description: "针对生成语音溯源需要的盲检测水印问题，论文选择在预训练编解码器隐空间做密钥控制的正交小旋转，最强证据是跨数据集干净条件下正确密钥可检而错误密钥回到随机猜测，主要代价是高通滤波下检测下降且仅做客观质量估计。"
tags: ["信号处理", "鲁棒性", "语音", "音频水印"]
categories: ["odyssey-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:odyssey:2026:conference-paper-id:coletta26_odyssey"
paper_digest_source_kind: conference
paper_digest_conference_id: "odyssey-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "305009cc1cd1b3a19ecd8b816ea4726d6dc0d6f137b0fcfbe776966f644c138b"
paper_digest_api_reader_plan_sha256: "c5f90e592c821ec871f84755ac1fdb834fa77e29d4be40b838bee2b16db33a2e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "231b0bab861dd079da5d7951f92aaa8c0bd9c230ad1f6b9b2e7a00cd8d35ba99"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "01d4d077b4f381251dbd9df909f7a11fa772d54aa14028d7ddaebce354cd2776"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e509ded1c4b21a2a3473a4fd1e48c03e03d1bf7003d61e4dec674e031cc6613a"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6993913403e886109774871f4fb972a65b4c87fcaff0b449b68e091daed5a1e7"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.watermarking","label":"音频水印"}]
paper_digest_primary_task: "音频水印"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 在各向异性主成分平面里小角度旋转：无须训练的盲语音水印

> 英文题目：*Latent Secret Spin: Keyed Orthogonal Rotations for Blind Speech Watermarking in Anisotropic Latent Spaces*

> 会议身份：`conference:odyssey:2026:conference-paper-id:coletta26_odyssey`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf)

标签：#信号处理 #鲁棒性 #语音 #音频水印

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Emma Coletta：机构信息未能从会议 PDF 纯文本可靠映射
- Massimiliano Todisco：机构信息未能从会议 PDF 纯文本可靠映射
- Michele Panariello：机构信息未能从会议 PDF 纯文本可靠映射
- Antonio Faonio：机构信息未能从会议 PDF 纯文本可靠映射
- Nicholas Evans：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

盲水印任务输入为待保护语音波形，输出为含不可感知载荷的水印波形与无原音频参考下的盲检判决，实际难点在于低通滤波、压缩重采样与加性噪声易抹除弱扰动并扭曲隐统计量。LSS先用冻结的24kHz EnCodec编码器将波形映射为128维连续隐特征，并减去语料均值后投影到预计算主成分空间，得到协方差近似对角的各向异性表示。接着按密钥与随机数生成的调度，在24个主成分平面多分块上施加0.18弧度的微小正交旋转，并以比特与码片调制旋转符号，再经逆投影与解码器重建含水印波形。检测端对接收语音重编码，计算归一化协方差并按相同调度加权累积得分判决，无正确密钥或无水印时正负贡献相互抵消而得分趋零。与加性学习式水印不同，LSS利用方差差放大的符号化非对角协方差作为可检签名，无需训练嵌入器且即使解码器公开仍需密钥可检。在低通滤波截止频率为1kHz的评测条件下，LSS的AUC为96.5%，高于AudioSeal的AUC 67.8%。该结论适用边界受限于善意变换与固定编解码器验证，拼接与自适应擦除等强攻击及跨编码器泛化尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要保留什么？

本文解读的对象是 1 篇语音水印论文，输入是原始语音波形，目标是在不损害听感的前提下嵌入可盲检的标记。所谓盲检测，用白话说就是检测时拿不到原始干净音频，只能拿待测音频做判断，英文是 blind detection。所谓不可感知性，用白话说就是加水印后人听不出明显变化，英文是 imperceptibility。所谓鲁棒性，就是音频经过压缩、滤波、重采样或加噪声后水印还能被检出。

论文提出的方法叫潜在秘密旋转，英文是 Latent Secret Spin，简称 LSS。它不训练新的嵌入网络，而是调用预训练语音编解码器的编码器与解码器，在连续隐空间里做几何操作。理解全文需要保留 3 类信息：第一，隐特征如何投影到主成分空间；第二，旋转角度、平面、块与子块如何由密钥排程决定；第三，实验用哪些数据集划分、哪些变换强度、哪些指标方向。本文后续按学习依赖展开，先讲任务与路线，再走完一个样本的全流程，再讲构造细节、实验条件、结果与边界。

需要先说明资源状态。本次没有发现来源绑定且完成安全验证的代码或模型资源，因此不能声称代码、模型或数据已公开或当前可用。论文正文提到源码位置，但按本次证据规则不作为可达性依据。教学中出现的数字例子若非原文连续原句覆盖，会明确标为例子，不作为论文证据。

### 已有路线做了什么，为什么本文换一条路？

早期数字水印多在信号域或变换域操作，例如直接改时域采样，或在离散余弦变换、离散傅里叶变换、离散小波变换系数上嵌入。主成分分析，英文是 Principal Component Analysis，简称 PCA，在这类工作中常被用来去相关，把数据投影到不相关的轴上，再改主成分或其系数。语音领域也有工作用 PCA 分离稳定的共振峰等结构，以抵抗常见信号处理。

近年的神经方法把水印学进隐表示，例如波形级编码器解码器结构和联合训练的生成器检测器结构。论文把这类方法归为已学习的嵌入检测流水线，优点是不可感知性与鲁棒性较好，缺点是需要训练，且作者观察到加性嵌入在中等加性噪声下可能变得难检。另一条相关路线是零样本水印，用 PCA 做特征提取而不嵌入训练模型。

本文的对照策略是同输入同目标但不同机制：输入都是语音波形，目标都是盲检测下的不可感知与鲁棒，但 LSS 把载荷写成主成分平面内的受控协方差模式，而不是学习一个加性扰动。论文明确把 AudioSeal 作为上下文参照，报告了它在多种变换下的表现，但教学上不能把类别差异直接当成同条件胜负，训练时见过失真与结构性鲁棒是两条不同来源的鲁棒，后文实验条件节会回到是否同配置的问题。

### 要解决的检测问题如何形式化？

设输入语音为 x，编码器为 E，隐特征为 F，投影后的主成分特征为 Z。嵌入过程要生成加水印音频 x 星，检测过程面对待测音频 x 撇，只允许用同一编码器与同一主成分基恢复近似特征，再输出是否含有指定载荷的二值判决。论文把载荷记为 B 比特序列，实际转成正负号向量，1 对应正 1，0 对应负 1。

问题的难点在于 3 个要求互相牵制。旋转太小则检测统计量弱，旋转太大则解码音频失真；平面太少则容量与分集不足，平面太多则每个平面的统计样本变少；时间切分太粗则局部非平稳被平均掉，太细则每段协方差估计方差大。LSS 用密钥排程把选择权交给伪随机函数，用子块芯片把同一比特散布到时间上，用多平面把能量分散到几何上。

举一个教学例子帮助理解分工，例子不是论文数值：假设某块选了两个平面，某比特为正，芯片序列为正负正负，则 4 个子块的局部旋转方向为正负正负，检测时乘回同样芯片后 4 段同向相加。这说明比特管大方向，芯片管局部起伏，密钥管哪里用哪个平面。

### 一个样本如何走完嵌入到检测？

先沿一个样本走全程。嵌入侧输入原始语音 x，经过编码器得到隐特征 F，再减去全局均值并左乘主成分矩阵转置得到投影特征 Z。接着按块与子块在选定平面上做小角度正交旋转，得到加水印投影特征 Z 星，再经逆投影回到隐空间 F 星，最后经解码器重建为加水印语音 x 星。检测侧输入待测波形，先用同一编码器得到隐特征，再用同一主成分基投影得到近似特征，然后按同样排程计算每个子块的归一化协方差并加权求和得到分数 S，与阈值比较做判决。

下图是论文给出的嵌入与检测总览，左侧虚线框是嵌入流水线，右侧虚线框是检测分支，中间用编码器、投影、旋转、逆投影、解码等模块连接，初学者可先看主路径再看检测分支在哪里复用同一编码与投影。

> **看图路径：** 1. 先从左向右沿原始语音到编码器再到主成分投影的主路径看符号变化；2. 再看平面旋转与逆投影如何把加水印投影特征送回隐空间并解码；3. 最后看右侧检测分支只用编码与投影而不经过解码器的位置

[![原论文 Figure 2：Overview of LSS embedding and detection pipelines.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a6cc965262d6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a6cc965262d6/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of LSS embedding and detection pipelines.”。*

从像素看，左侧从波形图标进入编码器块，再到标有隐特征的竖条，接着是标有 PCA 的交叉箭头，再到投影特征竖条，中间是平面旋转的环形箭头，随后是逆 PCA 交叉箭头、加水印隐特征竖条、解码器块与加水印波形图标。右侧检测分支再次出现编码器、隐特征、PCA 与投影特征，最后进入判决框并分出对勾与错叉两条结果。该图说明嵌入改的是投影几何而非直接改波形采样，检测只依赖编码与投影，因此不需要原始音频参与。

### 主成分各向异性如何把小旋转变成可读符号？

先解释术语。主成分分析是把语料级隐特征的协方差做特征分解，得到正交基 U 与按降序排列的特征值。白话说，它找到能量最大且互不相关的坐标轴。各向异性是说这些轴的方差各不相同，英文是 anisotropic。论文先在代表性语料上估计全局均值与协方差，再固定这组基，后续所有音频都用同一基投影，使隐协方差近似对角。

**主成分分析 × 各向异性：** 主成分分析负责把编码器隐特征投影到协方差近似对角的坐标系并给出按方差排序的轴，各向异性负责让不同轴的方差 λi 与 λj 不相等，搭配理由是只有方差不等时小旋转才能按(λi−λj)θ 产生可预测的非对角协方差项，组合意义是把水印从波形扰动变成几何协方差符号。

几何原理是：在由第 i 与第 j 个主成分张成的平面内，若两轴方差分别为 λi 与 λj 且不相等，嵌入前协方差近似对角，施加角度 θ 的旋转后，非对角项增量正比于两方差之差乘以 θ。小角度下符号由旋转方向决定，正角度产生正相关，负角度产生负相关。论文用该符号携带旋转方向，用差值大小与角度大小控制强度。图示把嵌入前后的协方差矩阵并排显示，便于看到对角能量几乎不变而非对角出现新项。

下图只显示完整主成分空间中左上角的局部放大，左侧矩阵对角亮而非对角暗，右侧在非对角位置出现两个对称亮块并标出水印字样，初学者应把注意力放在对角不变与非对角新增的对比上。

> **看图路径：** 1. 先确认左右两幅矩阵横纵轴都是主成分坐标索引；2. 再比较左侧对角线与右侧新增的两个对称非对角亮块位置；3. 最后看箭头标注的水印位置是否对应平面索引 3 与 10 的交叉处

[![原论文 Figure 1：Illustration of the LSS watermarking geometric principle in PCA space.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a6cc965262d6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a6cc965262d6/figure-1.png)

*论文图 1。原论文 Figure 1：“Illustration of the LSS watermarking geometric principle in PCA space.”。*

从像素看，左右两幅热图的横轴与纵轴都是主成分坐标索引，颜色越亮表示协方差幅度越大。左侧能量集中在对角线上且自左上向右下逐渐变暗，符合方差降序。右侧在横纵索引约为 3 与 10 的交叉处各出现一个方框标出的非对角亮块，两个亮块对称，中间用弯箭头表示从左到右的旋转操作。该图的可执行读法是：先数对角亮点确认各向异性，再定位两个对称非对角块，最后把块位置与图注给出的平面索引对应起来。

**正交旋转 × 协方差签名：** 正交旋转负责在选定的主成分平面内对帧向量做保范数的角度偏转，协方差签名负责把旋转方向记录为非对角项的正负，搭配理由是旋转不改变各轴能量而只改变轴间相关，组合意义是检测器只需估计归一化协方差即可读出方向而不需原音频。

需要强调的是，单次单平面旋转本身很弱，容易被平均或攻击抹掉。论文因此把该机制只当作原子操作，真正的可靠性来自后一节的多平面多子块分散与相干累加。

### 密钥排程如何把比特散到平面与时间上？

嵌入把投影特征沿时间切成 C 个块，每块含 M 帧，再把每块切成 L 个子块。每块按伪随机排程选出 P 个平面，每个平面对应 1 对主成分索引。载荷比特按顺序分配给块内平面，分配完后循环重复。同一比特在同一块内同一平面上，还要再乘以每个子块的芯片符号，得到局部旋转角。芯片取正负 1，由密钥与每条语音的随机数共同决定。

下图展示一个块内的时间层级与符号乘法关系，顶层是帧轴，中间是块与子块划分，底层是载荷符号与芯片向量汇合成每个平面每个子块的角度，初学者可自上而下看时间切分，再自下而上看符号如何决定角度。

> **看图路径：** 1. 先自上而下看帧到块再到子块的时间划分层级；2. 再看底部载荷符号与芯片向量如何通过乘法汇合到中间角度框；3. 最后看每个子块上方旋转箭头表示的局部平面旋转动作

[![原论文 Figure 3：Watermark schedule within one chunk c1.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a6cc965262d6/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a6cc965262d6/figure-3.png)

*论文图 3。原论文 Figure 3：“Watermark schedule within one chunk c1.”。*

从像素看，顶部虚线是帧轴并标出起始帧与结束帧，粗实线表示一个块 c1，其下是子块横线与省略号。每个子块上方有一个旋转箭头，下方矩形框列出该子块在各平面上的角度，底部左侧矩形框列出载荷符号，底部右侧多个矩形框列出各子块的芯片，中间用乘法符号与上向箭头连接。该图说明角度不是全局统一值，而是平面与子块 2 维表中的每一项，检测时必须回到同一格子才能对齐。

**载荷比特 × 伪随机芯片：** 载荷比特负责给出每个块和每个平面要嵌入的正负号 β，伪随机芯片负责给出每个子块的正负号 χ，搭配理由是单次确定性旋转容易被统计平均发现而乘积 β·χ·θ 把同一比特散布成正负交替的局部旋转，组合意义是知道密钥才能对齐符号相干累加，不知道则相互抵消。

检测侧完全复用同一排程。对每个块、每个平面、每个子块，先去均值再计算归一化协方差，归一化分母含两轴特征值与子块长度，目的是消除不同平面能量差异。然后乘回比特符号与芯片符号并在全音频上求和。若密钥正确且水印存在，各子块同向相加得正分；若密钥错误、载荷不匹配或无水印，各子块正负随机相消，和值接近零。论文因此用分数与阈值的比较输出二值判决，阈值本身是面向用例的选择，不在本文固定。

### 没有训练时，真正的计算与固定环节是什么？

本节必须先明确：LSS 没有训练嵌入器与检测器网络，不存在梯度路径、优化器更新或监督损失。实际计算分为 3 类：一次性构造主成分基、调用冻结的预训练编解码器、按密钥执行几何旋转与统计检测。把无训练等同于确定性求解是误解，因为芯片与平面选择依赖伪随机数，同一密钥同一随机数才能复现，不同随机数对应不同排程。

构造主成分基时，先对语料中每条语音用同一编码器提取隐特征，形成语料级分布，再估计全局均值与协方差并做特征分解，得到按特征值降序排列的基。该基一旦估计完成即冻结，嵌入与检测共用。论文未报告特征值出现重根，脚注说明实践中未观察到重复特征值，因此排序是可执行的。

**神经音频编解码器 × 盲检测：** 神经音频编解码器负责提供编码器 E 与解码器 D 以及连续隐表示 F，盲检测负责在只有待测音频而无原始音频时仍做判决，搭配理由是嵌入和检测共用同一编码器与同一主成分基，组合意义是水印随隐表示一起经过量化和重建从而获得结构性鲁棒而不需训练专用嵌入器。

推理时编码器与解码器参数冻结，只做前向计算。嵌入的前向是编码、投影、旋转、逆投影、解码；检测的前向是编码、投影、分块协方差估计与加权求和。论文未给出训练资源、推理延迟或实时率测量，因此不能承诺延迟改善，只能说省去了训练嵌入检测对的成本。未报告的缺项包括随机数生成器的具体算法、密钥长度、阈值选择方法与每步计算开销，这些是复现时需要补齐的工程细节。

### 实验在什么数据与参数下运行？

实验要回答 3 个问题：在干净语音上能否检出并依赖密钥，在跨数据集时主成分基是否通用，在常见变换下是否保持。数据集用 VoxPopuli 英语子集与 ASVspoof 5 评测分区中的未压缩真语音，每种数据都分成说话人不相交的两部分，一部分估计主成分，另一部分做嵌入与检测。所有语音统一成固定时长，短的循环填充以避免引入零值破坏协方差统计，长的截断。

编码器与解码器配置是理解复现条件的第一组证据，下表把原文连续原句中的采样率、带宽、维度、帧率、块长、子块长、平面数与旋转角整理成可核对的形式，比较问题是这些参数是否冻结且可复现，公平条件是嵌入与检测共用同一编码器与同一主成分基。

| 模块 | 参数符号 | 取值原文 | 含义 | 本研究处理 |
| --- | --- | --- | --- | --- |
| 编解码器 | 采样率 | 24 kHz | 预训练实现的工作采样 | 冻结调用 |
| 编解码器 | 目标带宽 | 6.0 kbps | 压缩目标带宽 | 冻结调用 |
| 隐表示 | 维度 | n = 128 | 每帧隐向量维度 | 冻结调用 |
| 隐表示 | 帧率 | 75 Hz | 每秒隐帧数 | 冻结调用 |
| 时间划分 | 块长 | M = 32 frames (≈427 ms) | 每块帧数与时长 | 固定超参 |
| 时间划分 | 子块长 | L = 8 frames (≈107 ms) | 每子块帧数与时长 | 固定超参 |
| 几何选择 | 平面数 | P = 24 | 每块旋转平面数 | 固定超参 |
| 几何强度 | 旋转角 | θ = 0.18 rad | 单次局部旋转幅度 | 固定超参 |

上表的主要收益是给出可直接照抄的复现参数，代价是这些参数在本文只是验证几何原理的取值而非广泛调优结果，不能理解为最优。原文还讨论平面数与角度等可在不重训的前提下调节，但未报告系统扫参曲线，因此调节方向需要复现者自己补验证。

数据集划分是第二组证据，下表整理主成分估计集与评测集的样本量及时长规范，比较问题是域内与跨域条件是否划分清楚，指标方向是说话人不重叠且时长一致才能比较协方差统计。

| 数据集 | 主成分估计集 | 评测集 | 时长规范 | 划分要求 |
| --- | --- | --- | --- | --- |
| VoxPopuli | approximately 100k samples | 10k utterances | 10 s | speaker-disjoint partitions |
| ASVspoof 5 | 25k utterances | 10k samples | 10 s | speaker-disjoint partitions |
| ASVspoof 5 总量 | ≈35k utterances | 10k samples | 10 s | speaker-disjoint partitions |

表后需要说明代价与边界。VoxPopuli 估计集量级远大于评测集，ASVspoof 5 估计集与评测集来自同一总量划分，跨域实验把一处估计的基用于另一处评测。论文用 4 种组合表示域内与域外，但原文连续原句未逐一给出每种组合的样本数，因此上表只覆盖有逐字证据的总量，组合细节需回原文表格核对，不能自行编造划分比例。评估指标用检测的受试者工作特征曲线下面积，值越大越好；感知质量用宽带语音质量客观估计，分数越高越好，加水印后下降越小越好。

### 干净条件与感知质量支持什么判断？

干净条件要看正确密钥是否可检、错误密钥是否失效。论文报告域内与跨域在正确密钥下都保持高检测，域内域外曲线接近，支持主成分表示跨数据集通用且不依赖数据集特有线索。错误密钥回到随机猜测，这是密钥必要性的直接证据。下图是感知质量分布，比较问题是加水印是否只带来小幅客观下降，公平条件是比较编解码重建语音在嵌入前后的同一客观分数。

下图左右两幅分别对应域内与跨域，紫色为未加水印重建语音，橙色为加水印语音，横轴是质量分数，纵轴是 utterance 计数，初学者应先看两分布重叠度再看顶部平均线差距。

> **看图路径：** 1. 先确认横轴是语音质量估计分数纵轴是 utterance 计数；2. 再比较紫色未加水印与橙色加水印两条分布的重叠程度；3. 最后读出两幅子图顶部标注的平均分竖线位置差异

[![原论文 Figure 6：Distribution of PESQ scores for codec- reconstructed speech before (purple) and after (orange)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a6cc965262d6/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a6cc965262d6/figure-6.png)

*论文图 6。原论文 Figure 6：“Distribution of PESQ scores for codec- reconstructed speech before (purple) and after (orange) watermark embedding.”。*

从像素看，两幅子图的分布都呈单峰，峰位在 2.6 分附近，加水印分布相对未加水印略向左移，紫色与橙色大面积重叠。顶部竖线标出各自平均分，左侧未加水印约 2.79 而加水印约 2.63，右侧未加水印约 2.79 而加水印约 2.61。横轴延伸到 1 至 4 分，纵轴计数峰值约 400 条。该图支持加水印只带来 modest 下降，但它是客观估计而非主观听音，不能当成人评结论。

下表把有逐字连续原句覆盖的密钥与质量结果整理成可核对形式，比较问题是正确密钥依赖与平均质量损失是否有原文数字支撑，指标方向是检测面积越大越好而质量下降越小越好。

| 验证条件 | 密钥状态 | 报告指标 | 结果原文 | 可读结论 |
| --- | --- | --- | --- | --- |
| 干净检测 | incorrect-key | AUC | AUC ≈50.0% | 错误密钥接近随机猜测 |
| 干净检测 | correct key | AUC | consistently high AUC values | 正确密钥保持高检测但原文句未给逐点数 |
| 感知质量 | 加水印前后比较 | ∆PESQ | ∆PESQ = 0.2 | 平均下降低于该界 |
| 感知质量 | 全配置平均 | PESQ 分布重叠 | largely overlap | 分布大面积重叠 |

表后解释主要收益与反例。收益是密钥错误即失效，说明检测不是靠音频本身的可听痕迹；质量平均下降有界，支持小角度旋转的不可感知设计。代价是本表未能给出每个域组合的逐点面积，因为原文连续原句只对错误密钥给出数字，正确密钥的逐点数只出现在原表矩阵中而本次无可用原表选择，因此不能硬写 99 点几的具体值，需要回原文表格核对。同样，变换下的逐点面积因缺乏逐字句子覆盖而不在此表展开，后一节只做趋势解读。

### 变换强度变化时行为如何分化？

论文在加水印后施加 7 类非恶意变换再检测，包括低通、高通、带通滤波、压缩、重采样与高斯白噪声及粉噪声。强度覆盖低通与高通的截止频率、压缩码率与噪声信噪比。原文文字报告的趋势是：在压缩、重采样、20 分贝噪声与带宽滤波等常见信道效应下性能接近干净条件；在低通 1 千赫兹处相对上下文参照方法保持更好；高通是最具挑战的条件，但下降更平缓。

强度曲线图的读法是：横轴为变换强度，纵轴为检测面积，紫色为域内而橙色为域外。两条曲线在多数强度下贴合，支持检测依赖编解码隐表示的稳定统计而非数据集线索。低通截止越低则高频丢失越多，高通截止越高则低频与基频结构受损越重，压缩码率越低则量化越强，噪声强度越低则信噪比越差，这些方向需要先确认再判断好坏，不能把曲线向下直接等同于方法失效。

未胜出项必须点名。按原文文字，在平均值上上下文参照方法略高，而本文方法在平均值上接近但未全面领先；高通条件下本文方法绝对值下降明显，只是相对变化更可预测。这些是复现时应优先复测的边界。此外，原文未评估自适应攻击、拼接等时间篡改与神经编解码压缩之外的编解码器，因此不能把常见变换鲁棒推广到恶意攻击鲁棒。

### 哪些结论还不能下，缺了哪项验证？

论文自己讨论了 4 类限制。第一，只用真语音与固定编解码配置，没有覆盖伪造语音或多种隐表示，因此结论限于该编码器与该带宽。第二，只评估常见非恶意变换，没有评估更强自适应攻击，安全性结论不能外推到攻击者已知算法并针对性去水印的情形。第三，水印按块分布，剪切拼接等时间操作会破坏块对齐，可靠性需要另行设计同步。第四，感知质量只有客观估计，没有主观听音，客观分重叠不等于人耳无感。

从学习依赖看，还有三项未报告即不能推定。阈值如何随误检约束选择未给出，因此不能报告工作点精度；统计显著性与置信区间未给出，因此不能把小幅平均差异当成显著；计算开销与延迟未测量，因此不能承诺部署成本更低。相关性也不等于因果，例如跨域曲线接近支持通用性，但不能证明主成分基对所有语种与信道都通用，待验证的说法应保留可能与待验证的措辞。

另一个常见误解是把无训练当成无参数。实际上主成分基、块长、子块长、平面数、旋转角、密钥与随机数都是参数，只是无需梯度训练。调节平面数或角度可能改善折中，但原文明确这是未经广泛优化的验证性配置，因此复现者不应把本文参数当成最优，调参需要自己补对照。

### 复现应先做什么，如何核对每一步？

复现的第一步是冻结编解码器并固定重采样。把 16 千赫兹数据重采样到 24 千赫兹，调用预训练实现并固定目标带宽，记录隐维度与帧率是否与上表一致。若维度或帧率对不上，后续块长对应的毫秒数与平面索引都会错位，应先停下来核对编码器版本。

第二步是构造并冻结主成分基。对估计集每条语音提取隐特征，估计全局均值与协方差并做特征分解，按特征值降序排序。核对方法是检查投影后协方差是否近似对角，以及特征值是否互不相同导致排序唯一。若出现近似重根，需要记录排序不稳定性，不能强行当成唯一。

第三步是实现排程与旋转。按密钥与每条语音随机数生成每块平面与每子块芯片，把载荷转成正负号并循环分配，按乘积符号施加正负旋转角。核对方法是先用零角度跑通流水线，确认无旋转时分数接近零且重建音频与直接编解码一致，再打开小角度并检查非对角项符号是否随方向翻转。检测侧必须用同一密钥与同一随机数复现同一平面与芯片序列，再计算归一化协方差并加权求和。

第四步是评估。先做干净条件下的正确密钥与错误密钥对照，确认错误密钥接近随机猜测；再做跨域对照，确认域内域外趋势接近；最后按强度扫一类变换并记录曲线，而不是只测单点。由于本次无可用原表选择且无逐字句子覆盖逐点面积，复现报告应给出自己的可运行数字与阈值无关的面积，并保留随机种子与划分，避免把单次运行当成总体结论。

### 何时值得尝试这种几何水印？

当任务要求盲检测、密钥授权与可解释性，且已有可用的神经音频编解码器时，这种方法值得尝试。它的价值在于把水印写进投影几何的协方差符号，用多平面与多子块换取相干增益，用密钥排程换取未授权不可检。需要付出的代价是每段统计样本有限、高通等变换下仍会下降，以及时间篡改需要额外同步。

与全学习水印的取舍是：全学习方法可通过训练见过失真来获得对特定失真的不变性，但需要训练数据与重训成本，且载荷长度常在训练时固定；本文方法无需训练嵌入检测对且载荷长度更灵活，但鲁棒来自嵌入空间本身的结构而非学到的不变性，遇到训练分布外的强攻击时同样需要补验证。论文还指出即使解码器权重公开，没有密钥仍难检测，这是密钥设计带来的授权特性，但不能理解为算法公开即安全。

收束时回到可核对的事实：块与子块、平面数与旋转角有原文连续原句支撑，数据集总量与时长规范有逐字证据，错误密钥回到随机猜测与平均质量下降界有逐字证据。缺的是逐点面积的逐字句子覆盖与主观听音、攻击评估与开销测量。后续若补验证，应优先补高通与拼接、多种编解码器、主观听音与阈值工作点，再谈部署收益。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-6.png)

区域 6 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-7.png)

区域 7 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-8.png)

区域 8 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-9.png)

区域 9 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-10.png)

区域 10 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=2)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-11.png)

区域 11 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-12.png)

区域 12 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=3)

[![原文数学表达区域 13，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-13.png)

区域 13 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=4)

[![原文数学表达区域 14，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-14.png)

区域 14 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=4)

[![原文数学表达区域 15，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-15.png)

区域 15 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=4)

[![原文数学表达区域 16，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/2f2d06c14f2c/figure-16.png)

区域 16 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf#page=4)

另有 20 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 odyssey-2026 论文汇总](/posts/conference-odyssey-2026/)
