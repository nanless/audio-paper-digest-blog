---
title: "Deep Regularized RNNs for Virtual Analog"
date: 2026-09-13
draft: false
description: "针对可调旋钮的黑盒虚拟模拟在旋钮转动时出现噪声的问题，论文用深层拼接条件 LSTM 加谱范数或无穷范数正则与 32 通道 Gammatone 滤波损失，在三块效果器数据上把正则模型的精度追近无正则基线，同时把零输入下的控制噪声压到实用底噪以下，但同等规模下正则仍有小幅精度代价。"
tags: ["正则化", "RNN", "音乐", "音频生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_26"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "737b73afd44f6ca4af76060644aa1527b0502e55c849415c1d418ef1a35b7a6e"
paper_digest_api_reader_plan_sha256: "d917d2c58484101e3c6ba7578b5781a543ee7a3ff044741e781d5cb00a4799e8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4f9b0fdba04d9fa4a738b2d0eb56ab0c3464d73e6cc4d5d7552aaf4cfe66b07e"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "e206c8d54de8dccb38efd6af3f74f00bc45955462e8c1c9322e6844f33036757"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "392fe7da48fd72c45fc595af3beaf1ed2b4c07504c1622b417617ae7cb942f7a"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3011bfe9829efd46a551ffb8489cbf8e21bab2cafbc64cb4c53103a8ca6a7f32"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.regularization","label":"正则化"},{"facet":"method","id":"method.rnn","label":"RNN"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.audio-generation","label":"音频生成"}]
paper_digest_primary_task: "音频生成"
paper_digest_primary_method: "RNN"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 正则约束下把深度换精度：深层条件 LSTM 与听觉滤波损失补回建模质量

> 英文题目：*Deep Regularized RNNs for Virtual Analog*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_26`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf)

标签：#正则化 #RNN #音乐 #音频生成

评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Valtteri Kallinen：机构信息未能从会议 PDF 纯文本可靠映射
- Lauri Juvela：机构信息未能从会议 PDF 纯文本可靠映射
- Thom Sherson：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

虚拟模拟需以干声吉他与贝斯演奏为输入实时生成经失真与压缩染色后的湿声输出，难点在于控制参数训练时静态采样而推理时连续变化，未约束循环网络在零输入下会自激产生可闻控制噪声。方法链先对长短期记忆网络施加门与隐矩阵约束并经重参数化强制满足渐近稳定条件，其输出的稳定隐动态直接作为深层堆叠的输入基础。接着将单层拼接调制扩展为逐层拼接的深层条件堆叠，用深度换宽度恢复受约束模型的容量并把各层条件特征送入对应循环层。最后用伽马通滤波器组对目标与预测间误差信号做听觉加权求和形成时频损失，以该感知目标驱动前两步模型训练并兼顾相位对齐与感知质量。相对已有平均绝对误差基线与无约束模型，该链以谱范数放宽与深度扩展加感知损失实现稳定性与精度的折中，实际意义是在抑制控制噪声的同时保持失真建模精度。在RAT数据集评测设置下，LSTM 4×64配置的GFB指标为-45.1 dB，低于LSTM∞4×64配置的GFB指标-42.4 dB。其结论适用边界受限于仅在RAT、DFZ与Boss CS-3三类失真压缩单块及静态控制采样与客观指标下验证，压缩器上仍有差距且尚未验证主观听感与连续拧旋钮轨迹外推。成本方面原文以参数量估计计算量，指出参数量随宽度平方增长而随深度线性增长，深窄配置能以更少参数获得更低误差。

## 🔗 开源与复现资源

- 代码相关资源：<https://codeberg.org/rantlivelintkale/dr-rnn-va> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.20406285> → <https://zenodo.org/records/20406285> — 链接可访问（HTTP 200）
- 演示资源：<https://rantlivelintkale.codeberg.page/dr-rnn-va/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.7970723> → <https://zenodo.org/records/7970723> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 虚拟模拟要解决什么声音问题？

输入是吉他或贝斯的干声加上效果器输出的湿声录音，目标是学一个数字系统，输入干声就能输出接近真实硬件的湿声。必须保留的信息是任务只研究黑盒路线，不依赖电路图，只从成对输入输出数据学习非线性和动态特性。输出是一个逐采样点运行的模型，采样率固定为 48 千赫，推理时可以实时改变旋钮。

虚拟模拟这个词初学者可以白话理解为数字仿真模拟硬件，英文是 virtual analog，简称 VA。黑盒建模白话理解为只看输入输出学映射，英文是 black-box modeling。论文把问题放在 3 类路线中：白盒用详细电路知识精确仿真，灰盒用通用数字信号处理模块加部分先验，黑盒用通用机器学习结构从数据学习。本文只做黑盒中的循环神经网络路线，特别是长短期记忆网络，英文是 long short-term memory，简称 LSTM，以及门控循环单元，英文是 gated recurrent unit，简称 GRU。

**虚拟模拟 × 黑盒建模：** 虚拟模拟的分工是数字复刻模拟硬件的声音行为，黑盒建模的分工是在没有电路图先验时只从输入输出录音学习映射，二者搭配的理由是缺专家知识时仍可建模，组合意义是把通用循环网络变成可调参数的效果器仿真。

为什么不是把声音丢给模型就结束？因为真实硬件有可调旋钮，例如失真量、滤波截止和谐振、音量、压缩的时间常数。训练时这些旋钮值作为静态参数元数据与音频一起记录，测试和实时使用时用户会转动它们。模型必须在未见过的旋钮组合下也泛化，并且在干湿混合使用时保持相位正确，否则会出现抵消或异常增强。这是后文讨论条件输入和损失设计的依赖基础。

### 已有条件建模与损失路线卡在哪里？

同输入同目标的工作都做可控黑盒效果器建模，输入是音频加旋钮值，目标是输出对应旋钮位置的湿声，监督都是成对录音，运行阶段都是逐采样点实时推理。对照时只比较同条件下的精度与噪声行为，不把模型类别差异直接当胜负。

条件方法已有两条路线。一是把控制值与音频输入拼接，英文是 concatenation conditioning，这是简单基线，在多篇吉他放大器建模中使用。二是用额外超网络直接调制模型参数或隐特征，例如超循环网络的条件机制。论文选择把拼接扩展到深层每一层，而不是引入超网络，理由是结构简单且与正则约束兼容。

损失函数已有时域和频域两类。时域常用平均绝对误差，英文是 mean absolute error，简称 MAE，平均平方误差，英文是 mean squared error，简称 MSE，误差信号比，英文是 error-to-signal ratio，简称 ESR。时域的好处是保留相位，对失真和压缩后与干声混合的场景重要。频域常用多分辨率短时傅里叶变换损失，英文是 multi-resolution short-time Fourier transform，简称 MR-STFT，或映射到 Mel 尺度。频域更贴感知，但时频联合会引入权重平衡困难，且两者尺度和收敛速度不同。前人还有加 A 计权滤波的时域感知损失，论文的 Gammatone 滤波器组损失沿同一思路，但用听觉滤波器组加权误差。

直接相关的前工作指出 LSTM 和 GRU 在时变控制条件下会出现可闻伪影，并提出把零音频输入下的动态限制在渐近稳定区来消除噪声，但正则后精度低于无正则对应物，且只验证了单层 32 单元一种配置。本文的起点就是补这个精度差距，并验证深度和宽度扩展规律。

### 转动旋钮时噪声从哪里来？

沿一个样本走一遍可以看清问题。输入是零音频加随时间变化的旋钮序列，论文把旋钮先经低通平滑以模拟实时使用的理想条件。表示是每时刻的音频采样 xt、隐状态 ht 和条件向量 pt。组件是拼接条件的 LSTM，目标是输出应保持安静，因为没有音频输入。实际输出却是类似爆裂声的毛刺，论文称之为控制条件诱发的噪声，英文是 control conditioning-induced noise。

下面这张图就是该现象的教学证据，上为旋钮变化，下为零输入下的模型输出幅度，模型是 RAT 数据集上训练的 4 层 64 单元 LSTM。

> **看图路径：** 1. 先看上面板三条曲线的分段时间：每段时间只有一个旋钮在动；2. 再看下面板零音频输入下仍出现的大量毛刺包络；3. 对照横轴 0 到 3 秒，确认噪声与旋钮变化同步出现

[![原论文 Figure 1：An example of typical control noise generated by a model under time-varying control conditioning…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/11159f9b33c7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/11159f9b33c7/figure-1.png)

*论文图 1。原论文 Figure 1：“An example of typical control noise generated by a model under time-varying control conditioning with zero audio input.”。*

这张图显示上面板 3 组旋钮分时变化，蓝色虚线为失真，橙色点划线为滤波，绿色点线为音量，纵轴为归一化控制值，横轴为 0 到 3 秒。下面板纵轴为幅度，单位是 dBFS，横轴同样为时间，即使输入音频为零，输出仍在旋钮变化区间出现大量高达约负十几到负几十分贝的尖峰，听感为噼啪声。前工作发现把零输入下的动态限制到渐近稳定可以消除该噪声，但代价是精度下降。本文要回答的是能否用深度和新损失把精度补回来，同时保持无噪声。

### 深层正则加听觉损失的全景是什么？

方法全景分三块。第一块是正则化的循环层，保证零输入下稳定。第二块是深层拼接条件结构，让每一层都看到旋钮。第三块是 Gammatone 滤波器组损失，英文是 gammatone filterbank loss，简称 GFB 损失，在时域误差上做听觉加权。评估再加控制噪声能量测试，与精度指标并列。

先沿单样本走完输入到输出。t 时刻输入音频标量 xt 和旋钮向量 pt，第一层把二者拼接后送入 LSTM 得到隐状态，第二层把上一层隐状态与同一 pt 再拼接后送入下一层 LSTM，依此类推。最后一层隐状态经全连接线性层得到输出采样 yt。深度指串联 LSTM 层数，宽度指每层单元数。训练时用截断反向传播，推理时逐采样点循环。

下图给出该深层结构，底部为 xt 与 pt，中间为多层拼接加 LSTM 堆叠，顶部为线性输出，右侧大括号标示深度。

> **看图路径：** 1. 从底部音频与控制输入沿箭头向上追踪主路径；2. 确认每一层都有控制向量从左侧汇入拼接模块；3. 看顶部线性层如何把最后一层隐状态映射为输出

[![原论文 Figure 2：Deep architecture for control-conditioned LSTMs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/11159f9b33c7/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/11159f9b33c7/figure-2.png)

*论文图 2。原论文 Figure 2：“Deep architecture for control-conditioned LSTMs.”。*

该图确认关键安排：第一层拼接的是音频与控制，后续层拼接的是上一层隐状态与控制，每层都有独立拼接模块，最后经全连接层输出。论文说明该结构不限于 LSTM，把层换成 GRU 并用对应约束也可实现正则深层 GRU。符号上论文用 LSTMnorm 深度乘隐尺寸表示完整模型，例如 LSTM 无穷范数 4 层 8 单元，norm 取 2 表示谱范数约束，取无穷表示无穷范数约束。

### 正则、拼接与滤波损失各自算什么？

先讲正则 LSTM 一层算什么。符号是 xt 为当前音频输入，ht 为隐状态，pt 为条件输入，W 为输入权重，U 为隐权重，C 为条件权重，b 为偏置，西格玛为逻辑斯蒂函数，斐为双曲正切，圆点乘为哈达玛积。门控包括输入门 it、遗忘门 ft、细胞候选 gt、输出门 ot，细胞状态 ct 与隐状态 ht 按标准 LSTM 更新。正则版本施加约束：细胞门的条件矩阵为零矩阵，偏置为零，隐矩阵的无穷范数小于 1，且遗忘门加输入门的无穷范数不超过 1。较宽松版本把细胞门隐矩阵的无穷范数换成谱范数小于 1。论文明确指出谱范数版本形式上不满足同样的稳定性保证，但实践中仍显著降低控制噪声，同时允许稍好的容量利用。

实现上用重参数化保证训练全程满足约束。隐矩阵范数按阈值缩放，输入门与遗忘门参数镜像，即 Ui 等于负 Uf，Ci 等于负 Cf，bi 等于负 bf，并限制 Uf、Cf、bf 使遗忘门无穷范数不超过 1，这样在零音频输入下 it 等于 1 减 ft，从而遗忘加输入的范数条件成立。论文未报告除此之外的梯度截断或参数冻结细节，不从名称推定。

**控制条件 × 拼接条件：** 控制条件的分工是把失真度、滤波、音量等旋钮值作为额外输入让声音可调，拼接条件的分工是把该向量与音频或上一层隐状态直接拼成每层输入，二者搭配理由是实现简单且每层都可见旋钮，组合意义是深层网络中每一层都能按当前旋钮调整动态。

**渐近稳定正则 × 谱范数约束：** 渐近稳定正则的分工是在零音频输入下限制循环动态不发散以消除转动旋钮的噪声，谱范数约束的分工是对细胞门隐矩阵施加诱导二范数小于 1 的较宽松限制，二者搭配理由是保留稳定性直觉同时释放容量，组合意义是比无穷范数约束更小的精度损失下仍实测抑制噪声。

再讲 GFB 损失。先算逐点误差 et 等于目标 yt 减预测。把该误差信号送入 32 通道 Gammatone 滤波器组，通道中心频率按等效矩形带宽尺度，英文是 equivalent rectangular bandwidth，简称 ERB 尺度排列，从 100 赫兹起每步加 1 个 ERB 单位，到约 10 千赫。超出该范围的残差定义为原误差减所有通道输出之和。损失为残差绝对值加各通道绝对值之和再对 N 个采样取均值。

这样多频段精度类似频域损失，但因从时域误差算出而保留相位。论文说其他通道数或是否加残差也可尝试，但该 32 通道加残差已见改善，故本研究固定用它。

**时域平均绝对误差 × Gammatone 滤波器组损失：** 时域平均绝对误差的分工是逐采样点保相位地对齐波形，Gammatone 滤波器组损失的分工是先求误差再经听觉尺度滤波加权以兼顾多频段感知，二者搭配理由是时域保相位而频域更贴感知，组合意义是在不引入频域相位丢失的情况下让正则深层模型追近基线。

评估指标用 ESR、按指定配置的 MR-STFT 和 GFB 损失，数值越低越好。控制噪声测试先用冲激初始化并稳定 1 秒，再按与示例相同方式变化旋钮，记录时变条件下的信号能量。论文用分贝表示，负无穷表示线性域恰为零。

### 训练按什么流程更新参数？

训练流程按原文交代复述。框架用 PyTorch，优化器用 Adam，学习率为 10 的负 3 次方，无权重衰减。训练用截断反向传播，英文是 truncated backpropagation through time，简称 TBPTT，截断步长为 2048 采样，批大小为 32 个样本。采样率按 48 千赫假设，模型在此采样率下运行。

训练分 2 个阶段。先做 100 轮的短训练，扫描宽度与深度的全部组合，以 GFB 损失为训练和评估依据，观察容量扩展规律。再选 1 层 64 单元、4 层 8 单元、4 层 64 单元 3 种配置做 1000 轮的长训练，对应所有数据集约 700000 次参数更新，每种配置用 3 个随机种子跑 3 次以考虑采样偏差，长训练同时比较 GFB 损失与 MAE 基线。论文取 3 次中最好模型报告指标。

监督来源是成对干湿录音加静态旋钮值，没有时变旋钮轨迹训练。原文讨论部分明确说当前没有带时变控制的数据集，采集还面临难以准确驱动旋钮等挑战，因此训练只见静态位置，时变测试属于泛化考验。正则约束通过重参数化在训练中始终生效，不是训练后投影。论文未报告学习率衰减、早停 patience 或梯度裁剪阈值，这些缺项在复现时需要自己记录，不从默认配置推定原文用了它们。

### 数据、划分与对照条件是什么？

数据用渐近稳定循环网络数据集，包含三台设备：ProCo Rat，简称 RAT，Darkglass Duality Fuzz，简称 DFZ，Boss CS-3。音频为 1 秒的干电吉他与贝斯弹奏片段，用不同旋钮组合录制，可训条件模型。RAT 有失真、滤波、音量 3 个控制，DFZ 变化了 fuzz 混合与滤波，音量置最大且干混合置全湿，CS-3 只有 attack 控制可变，音量与延音置最大、音色置最小。所有音频采样率为 48 千赫。数据集划分为训练集与验证集，验证集同时用作测试，更多细节见数据集仓库。论文解释选用该数据集是因为当前缺高质量开放的条件训练数据，Marshall JVM 410H 数据集控制位置太少难以泛化，pOD 数据集虽大但只录湿信号且经被动重放大可能引入着色或相移，且均为过载变体、控制仅增益与音色。

对照条件保持一致。短训练比较无正则 LSTM、谱范数正则 LSTM2、无穷范数正则 LSTM 无穷在相同宽度深度网格下的 GFB 评估损失。长训练比较 3 种代表配置乘两种损失乘 3 种正则状态，在 RAT、DFZ、CS-33 个评估集上用 ESR、MR-STFT、GFB 与控制噪声并列报告。参数量随宽度平方增长、随深度线性增长，因此 4 层 8 单元比 1 层 64 单元少约一个数量级参数。计算量以每采样浮点运算近似，不含非线性激活。

资源状态依据本次收到的官方像素与链接检测：代码当前可用，地址为 Codeberg 上的项目页，数据集当前可用，地址为 Zenodo 记录，在线演示页当前可用，第三方 Marshall 数据集当前可用。论文正文脚注同时给出代码、演示与数据集链接，可按原文获取。

### 长训练的主结果支持什么判断？

要回答的问题是正则加深度加 GFB 能否在保持无噪声的同时追近无正则精度，公平条件是同设备同配置同评估集，指标方向都是越低越好，关键数字见下表。下表聚焦 RAT 上 4 层 8 单元在两种训练损失下的 ESR 差异，以及短训练网格的范围说明，基线为 MAE 训练的无正则 LSTM，可运行策略为 GFB 训练的正则与无正则模型。

| 设备与配置 | 训练损失 | 评估指标 | 基线数值 | 对比数值 |
| --- | --- | --- | --- | --- |
| RAT 上 4 层 8 单元 LSTM | MAE | ESRdB | -15.2 | -13.8 对应 GFB 训练 |
| RAT 网格扫描 | GFB | GFB 评估损失分贝 | 100 轮短训练 | 宽度 8 16 32 64 深度 1 2 3 4 |

上表说明在 RAT 的 4 层 8 单元这个小模型上，GFB 训练并未在 ESR 上超过 MAE 基线，负 15.2 分贝好于负 13.8 分贝，数值越低越好。这是一个具体代价，支持的判断是 GFB 的收益不是在所有配置和所有指标上一致，论文也指出有时 GFB 改善不带来 ESR 或 MR-STFT 改善。但在更大容量与更多设备上，GFB 训练的正则 4 层 64 单元达到与 MAE 无正则基线相近的误差谱，图 5 的 Bark 平滑误差残差显示 4 条曲线在 RAT、DFZ、CS-3 上差距 modest，GFB 帮助无穷范数正则模型追近基线。

下面热力图为 RAT 短训练的全部网格，左为无正则，中为谱范数，右为无穷范数，格内为最佳 GFB 评估损失分贝值，越低越好。

> **看图路径：** 1. 横向比较同一行内隐尺寸从 8 到 64 的数值变小趋势；2. 纵向比较同一列内层数从 1 到 4 的数值变小趋势；3. 对比左中右三块面板在同格位置的数值差距

[![原论文 Figure 3：Training results from the short trial for different configurations of (a) LSTM, (b) LSTM2 and (c)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/11159f9b33c7/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/11159f9b33c7/figure-3.png)

*论文图 3。原论文 Figure 3：“Training results from the short trial for different configurations of (a) LSTM, (b) LSTM2 and (c) LSTM∞on the RAT dataset.”。*

该图显示三块面板都随宽度与深度增加而变浅变好，例如无正则从 1 层 8 单元的负 36.3 分贝降到 4 层 32 单元的负 45.2 分贝。但同格比较正则弱于无正则，谱范数略好于无穷范数，例如 4 层 64 单元三者分别约为负 45.1、负 43.5、负 42.4 分贝。这支持讨论中的表述：容量提升精度，稳定性约束在同等规模引入温和惩罚，谱范数缩小了该差距。该短训练差距在 1000 轮长训练后缩小，例如 RAT 上 4 层 8 单元的 GFB 差距从约 5.2 分贝缩到约 1.3 分贝，说明充分收敛很重要。

### 深度、宽度与损失各自带来什么变化？

要拆开的 3 类细节是容量分配、损失目标与正则强度。比较问题都是在固定训练轮数与评估集下，改变其中 1 维看精度与噪声如何变。

容量分配上，正则模型更受益于把参数放在深度。DFZ 上无穷范数 1 层 64 单元与 4 层 8 单元的 ESRdB 分别为负 12.8 与负 17.4，而无正则对应为负 18.9 与负 15.5，深窄在正则下反超浅宽，尽管总参数少约一个数量级。误差谱也显示深窄在全频段低于浅宽，RAT 上均匀改善，DFZ 与 CS-3 向高频收窄。向高频的下倾主要反映设备输出谱，不代表高频建模更好，只能看相对改善。

| 模型与数据集 | 配置 | 评估指标 | 深窄数值 | 浅宽数值 |
| --- | --- | --- | --- | --- |
| DFZ 上 LSTM 无穷正则 | 4 层 8 单元对比 1 层 64 单元 | ESRdB | -17.4 | -12.8 对应 1 层 64 单元 |
| DFZ 上无正则 LSTM | 4 层 8 单元对比 1 层 64 单元 | ESRdB | -15.5 | -18.9 对应 1 层 64 单元 |

上表的主要收益是正则下深窄以更少参数实现更好精度，具体代价是无正则下深窄并不总是最优，DFZ 上无正则浅宽反而更好，说明总体趋势不等于每组都成立。控制噪声方面，正则模型最高能量为负 156 dBFS，低于通用音频接口底噪负 100 dBFS，实践中可视为零，而无正则模型在 RAT、DFZ、CS-3 上分别有约负几十分贝的残留能量。谱范数与无穷范数在噪声抑制上类似。未胜出项是部分 4 层 8 单元无正则 GFB 模型在 ESR 上输给 MAE，边界是所有结论限于静态旋钮训练与零输入噪声测试，未测有音频下的旋钮噪声。

下图为无穷范数下深窄与浅宽的 Bark 平滑误差残差，三子图为三台设备，蓝色为 1 层 64 单元，橙色为 4 层 8 单元。

> **看图路径：** 1. 确认三块子图横轴为频率、纵轴为误差幅度；2. 比较每子图内橙色深窄曲线是否整体低于蓝色浅宽曲线；3. 观察低频到高频的整体下倾与两条曲线的相对差距

[![原论文 Figure 4：Bark smoothed spectrums of the error residuals over the evaluation sets for LSTM∞1 × 64 and 4 × 8…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/11159f9b33c7/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/11159f9b33c7/figure-4.png)

*论文图 4。原论文 Figure 4：“Bark smoothed spectrums of the error residuals over the evaluation sets for LSTM∞1 × 64 and 4 × 8 trained using GFB loss.”。*

该图在 3 个设备上都显示橙色曲线整体位于蓝色之下，低频差距更明显，高频逐渐收敛，支持深窄在正则下更有效地利用有限参数。论文据此建议正则模型优先加深而非加宽。

### 哪些条件还没验证？

论文直接报告的是三台效果器、静态旋钮训练、验证集即测试集、3 个随机种子取最优、100 与 1000 轮两种预算下的精度与零输入噪声。有限解释是 Bark 平滑误差谱改善应预示主观改善，依据是前人 A 计权感知损失工作中误差谱与听感的相关，但本文未做听力测试，因此只能表述为支持或可能，不能承诺听感一定更好。

未验证的推测包括谱范数正则的解析稳定性刻画、更多设备与条件方案、含音频输入时的旋钮噪声、以及用时变旋钮轨迹训练能否消除过拟合。相关性不是因果，GFB 数值变好不等于 ESR 与 MR-STFT 同步变好，4 层 8 单元的反例已说明。缺失证据不是技术错误，只是复现与选型时要补验证。

成本与延迟方面，论文只给参数量与每采样浮点近似，不含非线性激活，未测量实际延迟、吞吐或误判率。4 层 64 单元约 120,000 参数，1 层 64 单元约 18,000，4 层 8 单元约 2400 量级，具体随控制数略变。因此不能从参数少直接推定延迟低，实际部署需在目标硬件上实测帧率与往返延迟。训练资源只说明 Aalto Science-IT 算力与芬兰研究委员会资助，未给 GPU 型号与时长，复现预算要自己记录。

### 要复现先做什么？

先按信息条件准备。代码当前可用，数据集当前可用，演示页当前可用，按论文脚注的 Codeberg、Zenodo 与演示地址获取。采样率固定 48 千赫，控制向量维度按设备为 3、2、1，输出层参数所有数据集相同。训练用 Adam 学习率 10 的负 3 次方，无权重衰减，TBPTT 截断 2048 采样，批 32 样本。先跑 100 轮网格确认深度宽度趋势，再对 1 层 64 单元、4 层 8 单元、4 层 64 单元跑 1000 轮，每配置 3 个种子取最好，避免单一种子偏差。

评估要同时算 ESR、MR-STFT、GFB 与控制噪声。控制噪声测试按原文步骤：冲激初始化后稳定 1 秒，再按示例方式变化旋钮，记录时变段能量，低于负 100 dBFS 视为实用无感。GFB 实现固定 32 通道，从 100 赫兹起按 ERB 步 1 排列至约 10 千赫，加残差项覆盖带外误差，通道数与残差开关不要轻易改动以保证可比。正则用重参数化实现范数约束，不要用训练后裁剪代替。

何时值得尝试？当你的可调效果器模型在转动旋钮时出现噼啪声，且不能接受超网络复杂度时，优先试 4 层 8 单元左右的深窄无穷范数或谱范数正则加 GFB。何时不值得？当你只有极小预算且目标就是单配置最高精度、无实时转旋钮需求时，无正则浅宽可能更直接。还需补的验证是目标设备上的听感对比、有音频下的旋钮扫动测试，以及目标硬件的延迟实测。

### 一句话收束与下一步是什么？

收束是深层拼接让每层都见旋钮，稳定性正则压住零输入发散，GFB 从听觉尺度补回多频段精度，三者合在一起让正则模型在三台设备上接近无正则基线且消除实用可闻的控制噪声。代价是同等规模仍有小幅精度差距，且 GFB 不是每配置每指标都赢，深窄小模型在个别 ESR 上输给 MAE 基线。

下一步按论文展望有 3 条。一是给谱归一化循环层的解析稳定性刻画，二是在更多设备与条件方案上扩展验证，三是探索本身对控制噪声更不敏感的新结构或时变旋钮轨迹训练，但后者目前无公开数据集且采集需解决准确驱动旋钮的难题。初学者复述方法时抓住一条主线即可：输入拼接、深度堆叠、范数约束、滤波加权误差、双轨评估精度加噪声，这条线完整走通就能重放论文的核心判断。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=2)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f4247830e14f/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf#page=3)

另有 6 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
