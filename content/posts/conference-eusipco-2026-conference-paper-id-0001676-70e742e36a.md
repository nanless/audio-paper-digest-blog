---
title: "SiG-DML-L1.6: COMBINING CONVOLUTION AND DELAY LEARNING IN RECURRENT SPIKING NEURAL NETWORKS"
date: 2026-09-13
draft: false
description: "针对循环脉冲网络中稠密循环矩阵参数平方增长的问题，该工作用核长为 3 的一维卷积替代全连接循环并保留每个神经元可学习的轴突延迟，在 SHD 上达到 91.51% 精度并把单层循环参数从 65792 降到 259，代价是在 SSC 上落后 DelRec 约 4 个百分点且 SSC 未做超参搜索。"
tags: ["CNN", "RNN", "高效推理", "语音", "音频分类"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0001676"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001676.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "516d1800ae406e1d3cdd2af5c725d2742776b7f4ed9b01abb32e7e6aed170bdc"
paper_digest_api_reader_plan_sha256: "5e115c9c0afb49bb4da3dc6df1f406f56413c012af2cd531fe36a52097ad8fbc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "509d68f8cc125ac36d1a5528fc4507115d4e356c1f260544b378945004ef72e0"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "ace021f5594f8b24a1e77289f1d904fa7fbef669c2f3d54e1ef6c49b5f6c652a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e48cf5bde5ccad08fd52ed757e81b915c507cec176930681c4242e3f79a0e5f0"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "807ab7333208b2020fecf9d9c06b7aa54460150269f62eccae711f95247e37fd"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"method","id":"method.rnn","label":"RNN"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_task: "音频分类"
paper_digest_primary_method: "CNN"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 循环脉冲网络不必全连接：用一维卷积加可学习轴突延迟做语音建模

> 英文题目：*SiG-DML-L1.6: COMBINING CONVOLUTION AND DELAY LEARNING IN RECURRENT SPIKING NEURAL NETWORKS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0001676`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001676.pdf)

标签：#CNN #RNN #高效推理 #语音 #音频分类

评分：**7.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Sanches Zebendo, Lúcio Folly：机构信息未能从会议 PDF 纯文本可靠映射
- Cicciarella, Eleonora：机构信息未能从会议 PDF 纯文本可靠映射
- Rossi, Michele：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为耳蜗编码产生的140通道脉冲频谱流，输出为口语词类别，难点在于长时依赖建模与循环脉冲神经网络中替代梯度下的梯度传播困难，以及稠密循环矩阵随神经元数二次增长的参数开销。前馈线性投影先将上一层脉冲映射为电流，卷积循环延迟单元再把本层脉冲经三角扩散函数写入环形缓冲并沿神经元频率维做局部卷积后调度到未来时刻，泄漏整合发放（Leaky Integrate-and-Fire，LIF）神经元最后综合两路电流完成发放与状态更新，无脉冲读出层对末时刻膜电位做Softmax分类。与DelRec的全连接循环加逐神经元延迟相比，关键差异在于空间连接由全局改为局部而时间调度仍保留可学习延迟，从而分离空间冗余与时间记忆的建模职责。在Spiking Heidelberg Digits（SHD）测试集上4层模型取得91.51%准确率，基本持平2层DelRec复现基线的91.72%，循环权重由每层65536降至3。结论仅在具有频率局部相关的耳蜗语音脉冲输入与2至4层规模上得到验证，在Spiking Speech Commands（SSC）上落后原文基线约4个百分点，向非局部结构信号与更深网络的外推尚未证明。单样本推理耗时在NVIDIA A40上最高降低约52倍，原文未披露完整训练时长与能耗成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/luciozebendo/delrec-snn> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，读完要能复述什么？

本文的输入是已经过耳蜗模型编码的脉冲序列。原始语音先经过 700 带耳蜗滤波，再按原文预处理聚合为 140 个频率通道，每个时间步每个通道只有发放或不发放两种状态。目标是在这类神经形态音频基准上做分类：在 Spiking Heidelberg Digits 上区分 20 类英德语数字，在 Spiking Speech Commands 上区分 35 类英文指令词。网络必须在保持时间精细结构的同时整合长程上下文，输出是读出层在最后时刻膜电位经 Softmax 后的类别。
读完这篇解读，你应当能复述三件事。

第一，基线 DelRec 把循环脉冲网络的每个循环连接都配上可学习的轴突延迟，用替代梯度完成训练。第二，本文把稠密循环矩阵换成核长为 3 的 1 维卷积，但完整保留逐神经元延迟和三角扩散加调度缓冲机制。第三，实验要核对数据集划分、层数、种子数、精度均值方差、循环参数量和单样本推理时间是否在同一软硬件条件下比较。
脉冲神经网络在这里先用白话理解：神经元之间不传连续数值，只传稀疏的二值事件即脉冲。

常用漏积分发放神经元维护膜电位，输入电流给它充电，同时它按衰减因子向静息值漏电，超过阈值就发放一个脉冲并重置。由于阈值判断用的 Heaviside 阶跃函数几乎处处导数为零，直接反向传播不可行。替代梯度学习就是在前向仍用阶跃发放，在后向用反正切等光滑函数代替其导数，从而允许随时间反向传播。本文 SHD 用反正切替代梯度，交叉熵作用于读出层。

**循环脉冲神经网络 × 替代梯度学习：** 循环脉冲神经网络负责用神经元膜电位动态和循环连接在时间上累积信息，替代梯度学习负责在后向时用光滑函数近似 Heaviside 阶跃的导数从而让随时间反向传播可以执行，二者搭配的原因是前者提供了时间记忆结构而后者提供了可优化该结构的梯度通道，组合意义是长语音序列才能被端到端训练，但长时梯度仍可能消失或爆炸。

长序列训练的难点在于循环展开后梯度仍可能消失或爆炸。原文把可学习延迟解释为时间上的跳跃连接：不同延迟把脉冲送到不同未来时刻，梯度也可以沿这些路径跨步回传。这为后文同时保留延迟、压缩空间连接埋下依据：时间建模主要靠延迟，空间连接可以局部化。

### 已有路线解决了什么，还剩下什么可压缩？

相关工作按同输入同目标来对照。第一条是增强脉冲神经元本身，例如自适应时间动态，这类方法不改变循环连接的稠密程度。第二条是在前馈脉冲网络中学习突触延迟，例如带可学习间隔的空洞卷积，已在时间基准上显示延迟优化的价值。第三条是把延迟引入循环结构，例如每层只学一个循环延迟，或 DelRec 为每个循环神经元学习一个轴突延迟。DelRec 在 Spiking Speech Commands 上达到当时较好水平，在 SHD 上也有竞争力，但每层循环权重为 N 乘 N，层宽增大时参数平方增长。

本文的切入点不是发明新的神经元方程，而是指出音频谱图具有局部相关性。相邻频率通道因语音谐波、声学事件谱连续性和耳蜗滤波器交叠而相关，每个代表频率通道的神经元主要需要与邻居交互。全连接在这种输入下可能是冗余的。于是作者提出卷积循环：空间上只连自己和左右邻居，时间上仍靠可学习延迟覆盖长程依赖。

**轴突延迟 × 时间跳跃连接：** 轴突延迟指前一神经元发放的脉冲经过一段时间才到达后一神经元，每个连接的到达时刻可以不同，时间跳跃连接指梯度可以跨过多个时间步直接回传而不必逐拍衰减，二者搭配的原因是把可学习的延迟看作在计算图上把当前脉冲调度到未来多个时刻，从而在物理上是延迟、在优化上是跳连，组合意义是网络既能选择相对脉冲时序又能改善长程依赖的梯度流动。

这种对照的公平含义是：比较对象应当是同一脉冲输入、同一分类目标、同一训练框架下的循环脉冲网络，而不是把神经元模型改进与连接稀疏化混为一谈。本文后续消融也沿此逻辑展开，一是改变卷积核长看局部范围是否够用，二是固定延迟看延迟学习是否不可替代。

### 要回答的具体问题是什么？

具体问题可以写成一个可检验的陈述：在保留 DelRec 延迟学习机制不变的前提下，把稠密循环矩阵替换为 1 维小卷积核，能否在 SHD 上保持精度，同时把循环参数降低两个数量级并显著缩短推理时间。原文进一步追问两个反证：增大卷积核是否持续提升精度，以及去掉延迟学习后精度是否明显下降。
这个问题隐含两个约束。第一，延迟参数 N 个每层必须保留，因为它们编码时间调度，被认为是捕捉长程依赖的关键。

第二，空间连接的压缩理由依赖输入具有局部频谱结构，如果输入没有这种结构，结论不一定成立。原文没有声称所有序列任务都适用，也没有测量能量或片上部署指标，解读时不应把参数减少直接等同于能耗下降。
从学习依赖看，必须先理解脉冲编码和 LIF 动态，再理解延迟调度和替代梯度，最后才能理解卷积替换为何不破坏时间建模。后文先走完一个样本的前向全过程，再展开训练配置和实验对照。

### 一个样本如何从脉冲输入走到分类输出？

先沿一个样本走完全程。输入是形状为时间步乘 140 频率通道的脉冲矩阵，SHD 时间步为 100，SSC 为 250。样本依次进入 M 个隐藏层，每层先做前馈线性投影加批量归一化，再进入 LIF 神经元层和卷积循环延迟单元，最后做 Dropout。隐藏层宽度在关键实验中为 256。经过全部循环层后，线性分类器把特征送入读出层，该层由无限阈值的 LIF 神经元构成，只做漏积分不发放脉冲，取最后时刻膜电位做 Softmax 得到预测类别。
下图是整体架构的官方示意，输入为耳蜗编码的 140 通道脉冲序列，中间为多个带 1 维卷积循环和可学习延迟的循环层，末端为非脉冲读出加 Softmax，阅读时重点看前馈与循环两条支路在每层内的汇合方式。

> **看图路径：** 1. 从左侧 Spike Input 沿 Linear 箭头向右追踪经过 M 个循环层到 Readout 和 Softmax 的主路径；2. 对比每个循环层标注中前馈权重 Wff 与 Conv1D 加延迟 dj 的并列位置；3. 确认读出层标注为对膜电位随时间累积而非发放脉冲

[![原论文 Figure 2：Overview of the proposed convolutional recurrent spiking network.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/640165148715/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/640165148715/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of the proposed convolutional recurrent spiking network.”。*

该图显示主路径从左侧脉冲输入经线性变换进入循环层 1，再经过中间省略的多个循环层到达循环层 M，最后经线性变换进入读出层并输出预测。每个循环层内部同时标注前馈权重、LIF、1 维卷积和延迟，读出层标注为对输出膜电位随时间累积。第一层的延迟配置按数据集有所不同，原文图注明确指出这一点，但未在正文中展开具体数值差异，复现时应以代码默认配置为准。这种结构说明压缩只发生在循环支路的空间维度，前馈变换和时间调度保持完整。

**前馈线性投影 × 循环延迟单元：** 前馈线性投影负责把上一层脉冲特征变换为本层输入电流，循环延迟单元负责把本层历史脉冲经卷积加延迟调度后形成第二路输入电流，二者搭配的原因是语音既需要层间抽象又需要层内时间上下文，组合意义是两路电流相加后共同驱动 LIF 膜电位动态，从而在一层内同时完成特征变换和时间记忆。

原文报告代码当前可用，地址为公开仓库。资源状态显示该链接本次可达，因此可以写当前已公开。但解读仍以论文证据为准，代码细节只用于复现指引，不作为论文未报告数字的来源。

### 卷积循环和延迟缓冲具体算什么？

先讲空间替换。原来第 t 时刻神经元 i 的循环输入是所有神经元上一时刻脉冲经稠密矩阵加权求和，参数量为 N 平方。本文改为用长度为 k 的 1 维卷积核沿神经元频率维做互相关，k 取 3 意味着每个神经元只接收自身和左右各一个邻居的循环输入。按 PyTorch 惯例，这里的卷积实际是互相关，核不翻转。实现上把批量 N 通道缓冲长度 L 的张量扩为 4 维，用形状为 k 乘 1 的 2 维卷积只沿 N 维滑动，步长 1 并补零以保持维度，卷积核用 Kaiming 均匀分布初始化。

再讲时间调度。每个神经元 j 有一个可学习的实数轴突延迟 dj。脉冲发放后先按三角扩散函数把影响分散到相邻时间步，训练初期宽度参数较大，退火到零时逐渐收窄为对最近整数的线性插值，推理时四舍五入为整数。加权后的脉冲再与卷积核做空间卷积，然后写入环形调度矩阵的未来槽位，当前槽位读出的内容即为该时刻循环输入。调度矩阵大小为 N 乘 Lbuf，Lbuf 取决于最大延迟和当前宽度。

下图是单层循环延迟单元的官方示意，上路为线性投影，下路为延迟缓冲，中间相加后驱动 LIF 动态和阈值判断，输出脉冲经卷积扩散调度写回缓冲，阅读时重点看两路电流的汇合点和红色回路的写入方向。

> **看图路径：** 1. 先看上方前馈支路 Wff 与下方循环支路 Delay Buffer 如何汇入中间加法节点；2. 再看右侧 LIF 动态公式框与 Heaviside 阈值框的先后顺序；3. 最后沿红色回路确认输出脉冲经过卷积扩散调度后写回延迟缓冲

[![原论文 Figure 3：Convolutional recurrent delay unit.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/640165148715/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/640165148715/figure-3.png)

*论文图 3。原论文 Figure 3：“Convolutional recurrent delay unit. The feedforward path uses a linear projection, while the recurrent path replaces dense connectivity with 1D convolution over neurons combined…”。*

该图可见左侧前馈权重输出与下方延迟缓冲输出汇入绿色加法节点，形成总输入电流，总电流进入标注为衰减与输入加权的 LIF 动态框，再经阈值符号进入输出脉冲节点，输出脉冲沿底部粉色框完成卷积扩散并调度到未来时间步后写回延迟缓冲。像素中底部公式明确写出卷积核与扩散函数逐元乘脉冲的结构，与正文公式 6 的文字描述一致。这说明延迟学习机制本身没有改动，改动的是脉冲在写入缓冲前后经历的空间混合范围。

**稠密循环连接 × 1 维卷积循环：** 稠密循环连接指每层 N 个神经元两两相连形成 N 乘 N 权重矩阵，1 维卷积循环指只用长度为 k 的小核沿神经元频率维做局部加权，搭配的原因是耳蜗频谱中相邻频带因谐波结构和滤波器交叠而高度相关，组合意义是把空间连接从全局压缩为局部，把参数压力让给保留下来的逐神经元延迟去建模长时间结构。

**三角扩散函数 × 调度矩阵：** 三角扩散函数负责把实数延迟 d 的可微影响分散到相邻整数时间步，调度矩阵负责用 N 乘 Lbuf 的环形缓冲把加权后的脉冲写入未来槽位并在当前时刻读出循环输入，二者搭配的原因是离散延迟不可微而缓冲需要具体写入权重，组合意义是训练时退火收窄扩散宽度实现从粗到细的延迟学习，推理时四舍五入为整数延迟执行。

参数对比的含义需要精确理解。循环权重从 N 平方降为 k，延迟仍为 N，总循环参数从 N 平方加 N 降为 k 加 N。当 N 为 256 且 k 为 3 时，原文给出从 65792 降到 259，降幅 99.6%。这种降幅只针对循环支路，不包括前馈线性投影、批量归一化和分类器参数，解读时不能说成全模型参数下降 99.6%。

### 训练时什么更新，什么退火，什么保持不变？

训练采用替代梯度加随时间反向传播，SHD 用反正切替代函数，损失为读出层输出与真实标签之间的标准交叉熵。优化器在 SHD 为 AdamW，在 SSC 为 Adam。权重学习率与延迟学习率分开设置，SHD 为 0.0013 和 0.0279，SSC 为 0.001 和 0.05。SHD 的膜时间常数为 1.17，SSC 为 2.0。扩散宽度初值与衰减在 SHD 为 10.36 和 0.971，在 SSC 为 10.0 和 0.95。

SHD 用硬重置，SSC 用软重置。SHD 时间步 100，SSC 时间步 250。前馈与循环 Dropout 在 SHD 为 0.44 和 0.26，在 SSC 为 0.1 和 0.3。
需要区分更新与退火。权重和延迟都用梯度更新，但延迟通过扩散函数间接可微，宽度参数按衰减系数退火收窄。

推理时延迟取整，不再退火。原文未报告梯度裁剪、权重衰减具体值和批量大小等细节，这些属于缺项，不应从模型名称推定。SHD 超参用 Ray Tune 加 Optuna 优化，SSC 直接沿用 DelRec 基线参数而未额外调参，这直接影响后文 SSC 差距的解释：该差距是在未调参条件下测得的。
框架为 snnTorch，即基于 PyTorch 的梯度式脉冲网络库。训练与测试在同一脉冲输入上进行，SHD 把官方 8156 条训练样本随机分为 80% 训练和 20% 验证，保留 2264 条测试集不变，SSC 沿用官方划分的 75466 训练、9981 验证和 20382 测试。

指标为测试精度，SHD 报告 10 个种子均值方差，SSC 报告 3 个种子均值方差。

### 在什么数据和条件下比较？

2 个数据集都来自海德堡脉冲数据集系列。SHD 包含 10420 条 0 到 9 的英德语数字录音，共 20 类。SSC 包含 105829 条 35 个口语词录音。两者都用 700 带耳蜗模型编码后再聚合为 140 频率通道，比较架构都吃同一批脉冲输入，这是公平比较的前提。
层数设置需要核对。

SHD 比较 2 层和 4 层卷积模型，并为直接对照额外训练了 4 层 DelRec，因为原 DelRec 论文只实现 2 层。SSC 保持与原 DelRec 相同的 3 层。隐藏宽度在参数示例中为 256。推理时间定义为总运行时间除以样本数，在 NVIDIA A40 同一软件条件下测量，单位为毫秒每样本。原文未报告 batch 大小和是否包含编码时间，复现时应固定 batch 为 1 测流式延迟并单独记录。

消融设置有两个。核长消融在 SHD 上测试不同 k 对 2 层和 4 层的影响，但超参只对 k 为 3 优化过，其他核长未重调，因此大核结果可能受次优超参影响。延迟消融比较可学习延迟与两种固定延迟：全 1 对应标准循环，全取学习后中位数，SHD 中位数为 21，SSC 中位数为 7，其他组件不变，SHD 用 10 种子，SSC 用 3 种子。

### 主结果在相同条件下赢在哪里，输在哪里？

比较的问题是：在同一脉冲输入和同一测量方式下，卷积循环能否以极少循环参数达到接近 DelRec 的精度并更快推理。指标方向是精度越高越好，循环参数越少越好，单样本推理时间越短越好。下表整理循环参数量的数量级差异，重点看空间权重从平方项压缩为常数项而延迟项保留。

| 条件 | 指标 | 稠密循环 | 卷积循环 | 比较对象 |
| --- | --- | --- | --- | --- |
| 每层 256 神经元核长 3 | 循环权重参数 | 65536 | 3 | 同层同宽 |
| 每层 256 神经元核长 3 | 轴突延迟参数 | 256 | 256 | 同层同宽 |
| 每层 256 神经元核长 3 | 循环总参数 | 65792 | 259 | 同层同宽 |
| 全文报告 | 总降幅 | 基线 | 99.6% | 循环支路 |
| SHD 4 层配置 | 每层循环权重 | 65536 | 3 | 跨方法 |

表后解释需要同时给出收益与代价。收益是空间参数几乎消除，延迟参数完整保留，时间建模能力主要由延迟承担。代价是这种压缩的有效性依赖频谱局部性假设，对无局部结构的输入可能不成立。

原文还指出 DelRec 从 2 层加到 4 层时精度下降，推测为参数增多导致过拟合，而卷积模型加深时精度反而上升，这支持冗余连接可能是深层 DelRec 难以扩展的原因之一，但过拟合只是有限解释而非因果证明。
主精度与速度对照如下，重点核对数据集、层数、种子数和推理硬件是否一致，精度为均值加减标准差，时间为每样本毫秒数。

| 条件 | 指标 | 可运行基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| SHD 2 层 A40 | 推理时间 | 37.11 | 0.71 | 同软件条件 |
| SSC 3 层 A40 | 推理时间 | 112.64 | 4.19 | 同软件条件 |

表后解释必须点名未胜出项。SHD 4 层是本文最强证据：卷积模型以每层 9 个循环参数达到 91.51%，与 2 层 DelRec 的 91.72% 仅差 0.21 个百分点，且方差略小，推理快约 52 倍。但 SHD 2 层卷积落后复现 DelRec 约 2.4 个百分点，SSC 3 层落后约 4 个百分点，且 SSC 未做超参搜索，因此不能说全面保持精度。

推理时间单位按原文毫秒理解，SHD 4 层从 38.03 降到 1.51，SSC 从 112.64 降到 4.19，趋势一致但绝对值受实现和硬件影响，不应推广为所有设备的 52 倍。

### 拿掉延迟或改大卷积核会发生什么？

先看延迟消融，它回答延迟学习是否不可替代。下图是 SHD 上核长消融的官方曲线，横轴为核大小，纵轴为测试精度百分比，两条曲线分别为 2 层和 4 层，误差棒为 10 次运行标准差，阅读时不要把某一点的高低推广为全程趋势。

> **看图路径：** 1. 先确认横轴为卷积核长、纵轴为测试精度百分比；2. 再对比蓝色 2 层曲线与红色 4 层曲线随核增大是否单调上升；3. 最后观察每个数据点误差棒长度以判断 10 次运行的波动范围

[![原论文 Figure 4：Test accuracy vs kernel size for 2-layer and 4-layer architectures on SHD dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/640165148715/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/640165148715/figure-4.png)

*论文图 4。原论文 Figure 4：“Test accuracy vs kernel size for 2-layer and 4-layer architectures on SHD dataset. Error bars indicate standard deviation across 10 runs.”。*

像素可见蓝色 2 层曲线从核 3 到核 5 明显上升，此后在高位小幅波动，红色 4 层曲线起点较高，此后总体不升反降，在核 9 附近出现低谷。两条曲线在多个核长下误差棒重叠，说明差异可能小于运行波动。原文明确指出超参只对核 3 优化，未对大核重调，因此大核未提升不能证明大感受野无用，只能报告在当前调参预算下增大核长没有一致收益。

固定延迟与可学习延迟的对照如下，指标仍为测试精度均值加减标准差，条件是其他组件不变，重点看去掉学习后下降幅度与波动变化。

| 条件 | 指标 | 固定延迟小值 | 固定延迟中位数 | 可学习延迟 |
| --- | --- | --- | --- | --- |
| SHD 固定 1 | 延迟设置 | 1 | 21 | 学习得到 |
| SSC 固定 1 | 延迟设置 | 1 | 7 | 学习得到 |
| 跨数据集 | 趋势 | 均落后 | 均落后 | 最高 |

表后解释要给出机制与限制。可学习延迟在 SHD 领先固定中位数约 3.3 个百分点，领先固定 1 超过 5 个百分点，在 SSC 领先幅度较小但仍为最高。

固定 1 在 2 个数据集上都最差且方差大，说明均匀单位延迟难以覆盖长程时序，中位数固定有所缓解但仍不及自适应。这支持延迟对长程依赖的关键作用，但原文未报告延迟分布、最大延迟和缓冲长度的具体选择，复现时需从代码读取默认值，不应自行编造划分口径。

### 哪些结论不能从现有证据推出？

第一，SSC 差距不能忽略。卷积模型在 SSC 上落后近 4 个百分点，且明确未做超参调优，因此不能说在所有音频任务上保持精度，只能说在 SHD 调优配置下接近 DelRec，在 SSC 基线配置下有明显差距。需要补充 SSC 调参或跨数据集超参迁移实验才能判断差距来自容量还是调参不足。
第二，参数与速度的口径要收窄。99% 以上节省仅指循环支路，不含前馈投影和分类器。

52 倍加速是在 A40 同一软件条件下按总时间除以样本数测得，未说明批量、预处理和同步方式，也未测量片上能耗、内存占用峰值和流式首包延迟，因此不能承诺能耗同比例下降或边缘设备同速。
第三，泛化边界未评测。局部相关假设来自耳蜗谱图，若输入为无拓扑结构的随机通道或长时非平稳信号，局部卷积可能丢失远距离频率交互。核长消融显示大核无一致收益，但受未重调参影响，不能推出 3 为最优。

延迟固定实验只试了 1 和中位数，未试随机固定或逐层固定，支持学习有用但未证明当前三角退火是唯一方式。
第四，统计与实现缺项。精度只报告均值方差，未报告显著性检验。批量大小、训练轮数、早停、最大延迟和缓冲长度在正文中不全，需查代码补齐。原文表头与正文个别数字的层数对应需要仔细核对，解读时以方法节层数设置为准，冲突处明确标注而不自行圆合。

### 要复现先做什么，需要哪些配置？

先确认资源。论文声明代码已公开，资源状态为可用，本次链接返回 200，因此可以按公开仓库克隆。复现顺序建议为环境加数据、基线复现、卷积替换、延迟消融 4 步。环境需安装 snnTorch 及对应 PyTorch 版本，GPU 建议与原文相同的 A40 以便对比推理时间，CPU 复现时只对比精度不对比绝对时间。
数据按原文流程生成脉冲输入：700 带耳蜗编码聚合为 140 通道，SHD 用官方训练测试划分并从训练中分出 20% 验证，SSC 用官方三划分。

不要自行更换编码器或通道数，否则循环卷积的邻居含义会改变。训练先跑 2 层 DelRec 复现 91.72% 附近，再跑 2 层和 4 层卷积核 3 配置，核对 SHD 4 层 91.51% 和 SSC 3 层 78.59% 是否在误差棒内。超参直接使用训练节列出的学习率、时间常数、扩散初值衰减、重置方式和 Dropout，SHD 用 AdamW，SSC 用 Adam。
推理时间测量要固定方法：同一软件环境、同一批量、预热后计时，总时间除以样本数得到每样本毫秒数，分别记录前向、缓冲调度和读出耗时，避免把数据加载计入。延迟消融时先训出可学习模型取中位数，再固定为 1 和中位数重训，注意种子数 SHD 用 10，SSC 用 3。

常见误解是把循环参数 259 当成全模型参数，实际前馈权重远大于此，报告时必须注明为循环支路。若仓库权重不可下载，则只复现训练流程而不声称权重可直接部署。

### 何时值得尝试这种卷积加延迟组合？

当输入具有频率或空间局部性、循环层需要加宽加深、但延迟建模仍是性能关键时，这种组合值得尝试。SHD 证据显示，保留逐神经元延迟而把空间混合压缩到 3 邻域，可以在精度基本不变下消除平方项参数并大幅缩短推理，适合资源受限的流式音频分类。对 SSC 这类更大词汇量任务，若沿用基线超参可能掉点，使用前应预留调参预算并同时监控 2 层与 4 层的变化。
不适合的情况也要明确。

若通道之间没有局部拓扑，或任务需要远距离频率组合，纯局部卷积可能欠拟合，此时应先在验证集上扫描核长并重调超参，而不是直接沿用 3。若硬件不支持可配置延迟或环形缓冲，延迟带来的理论收益可能无法落地，需先确认神经形态加速器的延迟范围和缓冲开销。
回到中心判断：DelRec 的表达能力很大程度上来自时间延迟而非空间全连接，卷积循环的价值是把有限参数预算从冗余的空间维度转移到时间维度。

复现时先守住延迟学习和同一输入这两个不变量，再谈压缩与加速，仍需补的验证是 SSC 调参后的差距、延迟分布可视化以及真实边缘设备的延迟与功耗测量。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001676.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001676.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001676.pdf#page=2)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001676.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/7ecc89c32bd7/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001676.pdf#page=4)

另有 16 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001676.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
