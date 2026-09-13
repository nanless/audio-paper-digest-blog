---
title: "SPMuS-SS1.4: COMMUNICATION EFFICIENT SPLIT LEARNING OF VITS WITH ATTENTION-BASED DOUBLE COMPRESSION"
date: 2026-09-13
draft: false
description: "针对切分学习中 ViT 中间激活传输开销大的问题，论文提出先按 CLS 注意力聚类合并样本再按簇质心保留 Top-k 令牌的 ADC，在固定通信预算下用更少样本和更短序列完成前后向，并在 DeiT-T/S 上以更低压缩比保持精度，代价是客户端约 5.1% 的 K-means 聚类开销。"
tags: ["注意力机制", "模型压缩", "高效推理", "端侧运行", "音频分类"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000821"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "277207b2d3cf74c9150074b2ecf3149be7d5057c61175ea0fe97bc1f9f618514"
paper_digest_api_reader_plan_sha256: "420c5b6c54b028f14f86919b9d482db94848a7675c1ae835ce693dc39f92d52d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "bb1a0cab78aeade98a179ef1c65c4a5863ec8808e54f38f5165a8a05506f9230"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7029b3a06bfa99b1e2d434d4c3227e3ead5ed8b8fc35b7437331d11cef3ec4cc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "28c1e85c6cc4c0535054ee81a9e764d909781090547f8dd6aaf63faa0cc70b8e"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "48a1b2800dc65c8fa1682c7268e6f741e5c5f2d2a7a1f07164bde504622a0667"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.compression","label":"模型压缩"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_task: "音频分类"
paper_digest_primary_method: "模型压缩"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 切分学习传不动 ViT：用注意力先并批再剪令牌的双重压缩

> 英文题目：*SPMuS-SS1.4: COMMUNICATION EFFICIENT SPLIT LEARNING OF VITS WITH ATTENTION-BASED DOUBLE COMPRESSION*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000821`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf)

标签：#注意力机制 #模型压缩 #高效推理 #端侧运行 #音频分类

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.3/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Alvetreti, Federico：机构信息未能从会议 PDF 纯文本可靠映射
- Pomponi, Jary：机构信息未能从会议 PDF 纯文本可靠映射
- Di Lorenzo, Paolo：机构信息未能从会议 PDF 纯文本可靠映射
- Scardapane, Simone：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

分割学习将视觉Transformer在第\(l\)层切开，客户端执行嵌入层与前\(l\)个块得到中间激活并连同标签上传，服务器执行剩余块与分类头并回传输入梯度，输入为图像批量与标签而输出为分类预测，高维令牌表示带来上下行通信瓶颈，而均匀降维或逐值稀疏会无差别丢弃语义重要信息。该工作提出基于注意力的双压缩，先对末端客户端块多头平均后的类令牌注意力分数做K均值聚类，并在簇内平均激活矩阵与独热标签得到更小的合并批量与软多标签，再复用簇质心作为重要性掩码做Top-K共享令牌剪枝而只传输保留位置，服务器直接在小张量上前后向使回传梯度天然保持压缩形态。与瓶颈自编码器和随机稀疏化相比，关键差异是以语义相似性合并与注意力显著性剪枝代替统一降维或逐值阈值，无需额外可训练编解码器且无需在服务器侧解码回原始维度，因而在降低带宽的同时缩小服务器前后向规模。在DeiT-T客户端计算量评测设置下，ADC的计算量指标开销为5.1%，高于C3-SL的计算量指标开销4.0%。在CIFAR100与Food101任务上对DeiT-T与DeiT-S微调中，相同压缩比下精度带宽权衡更优，低压缩区接近基线而基线急剧退化，中等压缩区收敛更稳定而极端压缩下仍保持可用。适用边界为理想无损信道下的单客户端同分布图像分类微调，噪声无线信道与联邦多客户端协同等现实部署外推尚未验证。客户端因K均值聚类引入额外计算量，服务器侧计算量随压缩比大幅下降，整体训练成本受通信预算约束下的可执行迭代数决定。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决的传输瓶颈在哪里？

论文的输入是图像分类任务，输出是类别预测向量。研究对象不是单机训练，而是切分学习：把一个视觉 Transformer 按层切开，客户端执行切分点之前的编码器和前 l 个块，服务器执行剩余块和分类头。1 次训练迭代分为 3 步：客户端前向得到中间激活并连同标签发给服务器；服务器用该激活做梯度步并把对激活的输入梯度返回；客户端再用链式法则更新本地参数。

这个过程等价于批量为 B 的小批量随机梯度下降，但每步都要传输前后向数据。
白话解释切分学习：就是把模型从中间剪开，手机或嵌入式端只算前半段，云端算后半段，中间结果来回传送。英文为 Split Learning，缩写 SL。白话解释通信预算：就是整个训练允许花的总传输符号数，记为 Γ，反映嵌入式设备的功率和带宽限制。英文可理解为 communication budget。

基线做法是不压缩直接传输，记为 Base，每步前后向各花费 BDϕ，其中 B 是批量大小，D 是每样本特征数，ϕ是每特征 32 比特。

**切分学习 × 通信预算：** 切分学习负责把网络按层切开，客户端跑前 l 块提取中间激活并传给服务器，服务器跑剩余块并回传梯度；通信预算负责限定整个微调过程允许传输的符号总数 Γ，基线传满 10 个 epoch 的量即耗尽预算。两者搭配的原因是切分学习把计算留在了云端却把带宽压力集中在切分点，而预算把这种压力量化为可比较的迭代次数，组合意义是任何压缩方法都必须在同一 Γ 下比谁用更少符号走完更多有效更新。

对于刚入门的读者，关键动作是先分清谁传什么：前向传激活矩阵，后向传同形状的梯度。论文假设总预算固定，基线跑满 10 个 epoch 即耗尽预算，压缩方法的价值在于用更小的每步开销换更多迭代步数，同时尽量不掉精度。ViT 的高维令牌表示使这个问题更严重，因为每个样本是 n×d 的序列而不是 1 维向量。

### 已有压缩路线为什么在 ViT 上不够用？

论文把已有通信高效切分学习归为两类。第一类是自编码器路线，在切分点前后插入轻量编码器和解码器，把隐空间维度压小再恢复。第二类是量化与稀疏化路线，降低传输精度或只传显著值。代表基线包括 BottleNet++、Top-K、RandTopK 和 C3-SL。BottleNet++ 属于前者，把每个令牌维度从 d 降到 d'。

Top-K 按幅值保留前 k 个激活值其余置零；RandTopK 在打分前加小随机扰动再选 Top-K；C3-SL 用循环卷积把 R 个激活压成一个，到接收端再经叠加恢复。
论文指出这些方法的共同局限是“一刀切”：对所有特征和梯度更新同等压缩，不看语义重要性，在激进压缩下容易丢掉关键信息而精度骤降。此外辅助网络本身带来额外计算，部分抵消切分学习的效率收益。

教学上可以这样理解：均匀降维相当于把图像所有区域同等模糊，而 ViT 中背景令牌和主体令牌的重要性本就不等。论文因此主张利用 ViT 自身属性做上下文感知的压缩，而不是外加一个与任务无关的压缩器。
本研究未声称代码、模型或数据已公开。资源状态证据为 NONE，本次解读不写任何仓库可用或可下载的判断，复现细节只依据正文报告的协议。

### 切分点、代价与目标如何形式化？

设客户端模型为 fc，服务器模型为 fs，数据集为 D 并有 L 个标签。目标是在固定通信约束下微调两者。论文把一个共 L 层的 ViT 在索引 l 处切开，1 小于 l 小于 L，前 l 块归客户端，剩余块归服务器。具体写为服务器是分类头与第 L 到 l+1 块的复合，客户端是第 1 到 l 块与图像分块编码的复合。给定输入对 x 与 y，客户端计算 z 等于 fc 作用于 x，前向代价记为前向 C，服务器计算 fs 作用于 z 的梯度步并返回对 z 的梯度，后向代价记为后向 C，客户端再用该梯度转置乘本地雅可比得到本地梯度。

总代价是两者之和。基线前后向各为 BDϕ，总计 2 倍。归一化压缩比的定义是某方法 m 的前向与后向代价分别除以基线对应代价，再取平均得到总压缩比 ξ。累计代价是迭代数 i 乘 ξ 再乘基线单步代价。在预算 Γ 下最大可跑步数是满足累计代价不超过 Γ 的最大 i。

因此 ξ 越小，同预算下能跑的步数越多。论文的目标表述很直接：在降低 ξ 的同时保持接近 Base 的性能。
这里要区分两个量：单步压缩比只管一包数据变多小，累计代价才决定训练能走多远。后文所有精度对压缩比曲线，都是在同一 Γ 耗尽时停止并取测试精度平均，公平性来自预算相同而非 epoch 相同。

### ADC 的全景动作是什么？

论文提出的方法名为基于注意力的双重压缩，英文 Attention-based Double Compression，缩写 ADC。它是为 ViT 定制的通信高效切分学习框架，包含双流压缩策略。第一步合并具有相似注意力模式的批量样本，第二步在合并表示中只保留信息量最大的令牌。这种降维同时降低带宽、加速训练，并内在地压缩梯度，允许端到端学习而无需额外调参与近似。
沿一个样本走完全程有助于建立直觉。

单张图像先经客户端编码为 n×d 激活，其中包含类别令牌。ADC 不直接发送该矩阵，而是先看它在最后一个客户端块的类别令牌注意力分数，把同批中注意力轮廓相近的样本平均成一个合并激活，再看簇质心指出哪些令牌位置最重要，只保留 k 个位置的行。服务器收到的就是样本数更少、序列更短的张量，直接跑剩余 Transformer 块。反向时梯度形状同样缩小，因此后向传输也自动压缩。
该过程完全无监督且数据驱动，不依赖标签相似性。

图 1 的可视化展示了从批量图像到客户端模型、激活、按类别令牌聚类、Top-K 选择、压缩激活再到服务器模型的流水线。需要强调的是，合并后的标签是簇内独热编码的平均，形成软多标签向量，数值越大表示该类在簇内占比越高。

### 批量合并与令牌剪枝各自算什么？

先解释术语。白话解释视觉 Transformer：把图像切成互不重叠的小块，每块展平并投影为 d 维向量，再加位置编码并在序列前拼一个可学习的类别令牌，最后经多个多头注意力加多层感知机块处理。英文 Vision Transformer，缩写 ViT。白话解释类别令牌注意力分数：就是类别令牌在最后一个客户端块中对各个令牌的平均注意力权重向量，长度为 n，已在前向中算好，无需额外开销。英文 CLSscore。

**视觉 Transformer × 类别令牌注意力分数：** 视觉 Transformer 负责把图像切成 n 个块并编码为 n×d 序列加一个可学习的类别令牌，块间允许改变令牌数而不破坏结构；类别令牌注意力分数负责在最后一个客户端块中按多头平均给出每个令牌对分类的重要性向量。两者搭配的原因是 ViT 的注意力天然已经算好重要性，不需额外编码器，组合意义是 ADC 可以直接复用前向已有的分数做无监督的合并与剪枝依据。

批量压缩的具体操作是：对一批 B 个样本取各自激活的 CLSscore 集合，用 K-means 聚成 T 个组，T 小于 B，得到 T 个质心。每个激活按与质心的欧氏距离最近分配到一组，指示函数取 1 或 0。新激活是簇内客户端激活的平均，新标签是簇内独热标签的平均，最终压缩批为 T 个合并对。论文引用已有工作说明类别令牌持续关注任务相关令牌，因此该分数是可靠的重要性代理。

**批量压缩 × 令牌选择：** 批量压缩负责把一批 B 个样本的激活按注意力分数聚成 T 个簇并在簇内平均，样本数从 B 降到 T，标签变为簇内独热平均的软多标签；令牌选择负责用簇质心作为重要性掩码在每个合并激活中只保留得分最高的 k 个令牌，序列长从 n 降到 k。两者搭配的原因是前者消样本维冗余、后者消空间维冗余，且共用同一套注意力质心，组合意义是总压缩比变为 T/B 乘 k/n，前后向同时缩小，服务器前后向计算量也随之下降。

令牌选择的细节是：对每个合并激活，利用其对应簇质心作为重要性掩码，质心是簇平均注意力轮廓，能指出合并样本共享的最信息令牌位置。取质心中得分最高的 k 个索引，只保留合并激活中这些行，得到 k×d 的压缩激活。目标压缩比 ξ 等于 T 除以 B 乘 k 除以 n。为强制两路均衡贡献，实验中取 k 除以 n 与 T 除以 B 都等于根号 ξ。网格搜索显示固定 ξ 时两路均衡最好，任一路推向极端都会导致验证精度骤降。

### 训练如何推进，梯度与监督从哪里来？

训练流程仍是 3 步闭环，只是传输对象变小。客户端批量前向得到 B 个激活，经聚类平均变为 T 个合并激活，再经 Top-k 截断变为 T 个 k×d 矩阵发往服务器。服务器用合并激活和软标签做前向与损失计算，更新服务器参数，并计算对压缩激活的梯度返回客户端。客户端再经链式法则把该梯度传播回本地参数。由于前向矩阵的行数与样本数都已减少，后向梯度天然同形状缩小，无需额外量化或近似，这就是论文所说的内在梯度压缩。

**压缩比 × 累计通信代价：** 压缩比负责度量某方法相对无压缩基线每步传输量的比例，前向与后向分别归一化再平均为 ξ；累计通信代价负责把 ξ 乘以迭代步数 i 得到预算消耗 Ctot。两者搭配的原因是只看单步压缩会忽略能多跑多少步，组合意义是论文用固定 Γ 比较谁在耗尽预算前达到更高测试精度，ξ 越小则同预算下可跑步数越多。

监督来源是合并后的软多标签，而非原始硬标签。参数更新方面，论文报告同时微调客户端与服务器模型，使用 Adam 优化器，未报告冻结任何层，也未报告梯度停止或分阶段冻结的具体缺项之外的安排，因此解读不推定某块被冻结。K-means 最大迭代数设为 50，聚类在每步基于当前批的注意力分数重新执行，未报告跨步复用质心。数据增强策略与引用的 DeiT 训练相同，但原文未展开具体增强算子，复现时需以该引用为准而不能自行假设。
需要提醒的是，合并平均会改变批量统计特性，论文观察到其训练更稳定并猜测可能起到隐式正则作用，但正文用词是可能，解读保留为待验证解释而非已证明性质。

### 实验条件如何固定，基线是否可比？

论文用 DeiT 的小版本与微小版本做实验，英文 DeiT-S 与 DeiT-T，均为 12 个 Transformer 块，在 CIFAR100 与 Food101 上训练。通信预算设为允许基线跑 10 个 epoch 的量，即预算等于 10 乘数据集大小乘基线单步代价，基线代价取决于所用模型。训练直到预算耗尽，批量大小 128，切分点 l 等于 3，优化器为 Adam，K-means 最大迭代 50。结果在 3 次独立运行上平均。
下表把核心协议要素整理为五列，数值与单位严格保留原文写法，表头单位与裸值按原文交代，比较问题是复现时哪些条件必须对齐才能与论文曲线对比。

| 配置项 | 模型 | 数据集 | 取值 | 指标说明 |
| --- | --- | --- | --- | --- |
| 块数 | DeiT-S and DeiT-T | CIFAR100 and Food101 | L = 12 transformer blocks | 模型深度 |
| 批量与切分 | DeiT-T | Food101 | batch size of 128, split point of l = 3 | 每步样本与切分位置 |
| 预算 | Base training | training dataset | 10 epochs of Base training, Γ = 10 D CBase | 累计符号预算 |
| 聚类 | K-means | 当前批 | maximum number of iterations to 50 | 聚类迭代上限 |

该表的公平条件是所有方法共享同一预算 Γ 与同一批量、切分点和优化器，指标方向是预算耗尽时的测试精度越高越好。Top-K 与 RandTopK 的 k 取自 0.01 至 0.5 集合，C3-SL 的 R 取自 2 至 32，BottleNet++ 与 ADC 则调参使最终压缩比落在 0.01 至 0.5 区间。ADC 的 T 与 k 按根号 ξ 均衡设置。基线均为实际可运行策略，未用事后最优或 oracle 代替，符合可部署收益比较的要求。

### 主结果在低压缩比处拉开多大差距？

在解读曲线前先确认坐标：横轴为压缩比 ξ，越小表示每步传得越少；纵轴为测试精度，越高越好；黑色虚线为无压缩基线；红色为 ADC，其余颜色为 4 个基线；上下两面板分别为不同数据集与模型组合下的结果，误差棒来自 3 次运行。低压缩比即横轴左侧，是带宽最紧张的区域。

> **看图路径：** 1. 先看横轴压缩比与纵轴测试精度的含义，确认虚线为无压缩基线；2. 再对比红色 ADC 曲线在最左侧低压缩比处与其他曲线的垂直差距；3. 接着观察绿色 BottleNet++ 曲线随压缩比增大是否抬升还是走平；4. 最后看紫色 C3-SL 在中间压缩比处的误差棒长度，判断稳定性

[![原论文 Figure 1：reports test accuracy as a function of the compres- sion ratio ξ, averaged over three independent…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/358f308af5c2/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/358f308af5c2/figure-1.png)

*论文图 1。原论文 Figure 1：“reports test accuracy as a function of the compres- sion ratio ξ, averaged over three independent runs.”。*

从像素可见，红色 ADC 曲线在最左侧显著高于所有其他曲线：在 CIFAR100 配 DeiT-T 的上图中，ADC 在接近 0.01 处仍保持约 0.66 附近，而橙色 Top-K 与蓝色 RandTopK 已跌至 0.2 与 0.1 左右；在 Food101 配 DeiT 的下图中，ADC 在最左侧约 0.71 附近，而 RandTopK 跌至约 0.3。随压缩比增大到 0.2 至 0.3，各方法逐渐接近基线虚线，但 ADC 始终居首或持平。绿色 BottleNet++ 在极低压缩比尚可，但随 ξ 增大曲线走平不再抬升；紫色 C3-SL 在极端压缩尚可，但在中间值如 0.125 附近波动大、误差棒长，显示不稳定。

论文文字报告 ADC 在 CIFAR100 配 DeiT-T 上于 ξ 约 0.1 即接近基线精度，而竞争方法需更高带宽才能接近。
训练动态方面，论文报告在 Food101 上按累计代价展开的精度曲线中，ADC 在相同通信代价下更高，低 ξ 优势最明显，中等 ξ 仍可见，且收敛更稳定。这支持双重压缩在预算受限时有效，但不等于每一步都单调最优，总体趋势不能推广为每组都成立。

### 两路压缩均衡与簇可视化说明什么？

论文做了超参数网格搜索，固定总压缩比，变动批量合并比例 T 除以 B 与令牌保留比例 k 除以 n。报告显示两者均衡贡献时验证精度最好，任一推向极端都会骤降。这与直觉一致：只并批会把过多不同语义平均掉，只剪令牌会把空间细节砍光。实验采用的根号 ξ 规则正是把两者设为相等。图 2 展示了 DeiT-T 在 2 个数据集上的该权衡，但本次未收到该图像素，只能依据正文归因引用，不猜具体坐标与颜色。

另一项特有细节是簇可视化。论文在极端压缩 ξ 等于 0.01 下可视化 Food101 的一个簇，发现合并样本虽属不同类别，但共享连贯空间结构，保留令牌的注意力 rollout 精确聚焦主体并过滤背景。这从定性上支持 ADC 分离出语义核心，但属于单簇例子，不能推广为所有簇都如此。消融的反例是 Top-K 与 RandTopK 在中高压缩尚可竞争，在小 ξ 失效；C3-SL 在极端压缩好但中间不稳定。

BottleNet++ 在极低压缩好但饱和不随 ξ 提升。这些未胜出项说明单一维度压缩难以兼顾全压缩比范围。
复述方法是：若要验证均衡假设，应固定 ξ 为 0.05、0.1、0.2 三档，分别测试偏并批、偏剪枝与均衡 3 组，记录预算耗尽时精度，而非只看单步重建误差。

### 计算代价与未评测边界在哪里？

论文用 DeiT-T 分析相对基线的浮点运算量。客户端 ADC 因 K-means 带来约 5.1% 的常数开销，与 C3-SL 约 4.0% 相当，略高于 BottleNet++ 的 1.2% 至 2.8% 可变代价，总开销保持在 5.2% 以内，对资源受限边缘设备仍可行。服务器端则因输入张量变小而大幅节省：基线因解码器略超基线 100%，而 ADC 在低压缩约 0.05 时降到不足 10%，即使在 0.5 时仍低于 60%，同时省带宽并加速训练。
下表把计算量数字整理为五列，用于回答省了多少与多付了多少，方向是客户端越低越好、服务器越低表示加速越明显。

| 端侧 | 方法 | 开销取值 | 条件 | 含义 |
| --- | --- | --- | --- | --- |
| Client | ADC | ≈5.1% | K-means clustering | 客户端额外开销 |
| Client | BottleNet++ | 1.2% to 2.8% | variable cost | 对照区间 |
| Client | ADC total | < 5.2% | edge devices | 总开销上界 |
| Server | ADC | < 10% at ξ ≈0.05, below 60% even at ξ = 0.5 | DeiT-T FLOPs | 服务器计算占比 |

该表说明客户端多付的聚类代价是有界常数，而服务器端随发送样本数与 token 数减少而显著下降，低压缩区节省最明显而高压缩区仍低于基线，机制上对应批量合并与 token 剪枝共同缩小输入张量。

未评测边界包括噪声无线信道、多客户端协作如联邦学习场景，以及更大规模 ViT 与视频音频序列的迁移，论文在结论中把这些列为未来工作，未测量误判率、实际延迟或端到端 wall-clock 时不能承诺这些量必然改善。

**客户端计算量 × 服务器计算量：** 客户端计算量负责衡量边缘端为压缩多付的开销，ADC 主要是 K-means 的常数开销；服务器计算量负责衡量云端因输入变小而省下的前反向浮点运算。两者搭配的原因是切分学习本就想把重计算卸载到服务器，组合意义是 ADC 用客户端不到 5.2% 的额外开销换来服务器在低压缩比下降到不足 10% 的计算量，加速训练但并未消除边缘端聚类负担。

### 复现先做什么，还缺哪些信息？

复现的第一步是对齐预算与切分：用 DeiT-T 与 DeiT-S 各 12 块，切分点 l 等于 3，批量 128，Adam 优化，预算设为基线 10 个 epoch 的传输量，跑满预算即停并在 3 次运行上平均测试精度。K-means 最大迭代 50，注意力分数取最后一个客户端块的多头平均 CLS 分数。ADC 的目标压缩比通过 T 与 k 实现，令 k 除以 n 与 T 除以 B 均取根号 ξ，例如 ξ 为 0.01 时两者各约 0.1。合并标签按簇内独热平均生成软标签，损失按软标签计算。
第二步是对齐基线网格：Top-K 与 RandTopK 的 k 在 0.01、0.05、0.1、0.2、0.3、0.4、0.5 中取值，C3-SL 的 R 在 2、4、8、16、32 中取值，BottleNet++ 与 ADC 调至最终 ξ 落在 0.01 至 0.5。

比较时横轴用 ξ，纵轴用测试精度，并在低 ξ 与中等 ξ 分别画累计代价曲线以观察收敛稳定性。
缺项方面，原文未给出学习率、权重衰减、训练轮次内的学习率调度、数据增强具体算子、随机种子与硬件预算，也未公开代码可用性声明。解读中凡涉及这些均视为未报告，不从模型名称推定实现。何时值得尝试 ADC：当切分点后仍是 Transformer 且带宽极紧、服务器算力成为瓶颈时，ADC 的双维缩小最划算；若客户端算力极弱到无法承担聚类，或任务对标签平均敏感，则需先补验证。

### 如何一句话记住该方法的取舍？

回到全文逻辑：切分学习把计算卸载到云端却留下传输瓶颈，ViT 的高维令牌使瓶颈更尖锐，均匀压缩在低带宽下丢关键信息。ADC 的选择是复用已算好的类别令牌注意力，先按相似性把批量从 B 压到 T，再按簇质心把序列从 n 压到 k，总压缩为两者乘积，前后向同减，服务器计算随之下降。证据是跨架构与数据集的精度对压缩比曲线中 ADC 在低 ξ 唯一保持高精度，以及服务器浮点运算在低压缩降到不足 10%。代价是客户端约 5% 的聚类开销与软标签平均带来的语义混合。

对研究生的实践建议是：先沿单样本走通输入到表示到组件到目标到输出，再展开批量平均与 Top-k 索引的公式实现；区分论文直接报告的精度与计算量、有限解释的隐式正则、未验证的噪声信道与多客户端扩展，分别用报告、支持、可能来表达。重提结果时应增加新对照：不仅看最终精度，还要看同累计代价下的曲线与误差棒，以及 BottleNet++ 饱和与 C3-SL 不稳定的反例，这样才能判断方法在何种压缩区间真正值得部署。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=1)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=2)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/768bc090f6c8/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf#page=3)

另有 32 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
