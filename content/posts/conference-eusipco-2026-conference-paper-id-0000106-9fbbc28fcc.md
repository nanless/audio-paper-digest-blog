---
title: "A TWO-STEP APPROACH FOR SPEECH ENHANCEMENT IN LOW-SNR SCENARIOS USING CYCLOSTATIONARY BEAMFORMING AND DNNS"
date: 2026-09-13
draft: false
description: "针对旋转机械主导的低信噪比谐波噪声，该文用单通道循环平稳最小功率无失真响应做前端抑制谐波再接轻量掩蔽网络，在合成与真实发动机噪声上报告了一致提升，但维纳滤波对照显示增益互补而非可替代，且依赖噪声频率稳定可估计。"
tags: ["信号处理", "单通道", "语音", "语音增强"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000106"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4a57e81eb5c47e6d9ce89ed08aac5be7009b2accb772bad4cab8e844553094c1"
paper_digest_api_reader_plan_sha256: "ab8ac1a4b5daf9061a22847fff59d8c3589ebbf1e19aa8bb0d32c815681616ec"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ca93760ee68e1543764aafbd968d36f5d4a1d488086ff757fdae8e54cbfe6b80"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b4741271689cc16b593f6bae9395e2ff6b1f5cec54ec02c9674a272282e0612c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "65df0ed343a1a5d54fea5a17ade011520a2285dbec45bbcb84eeaefe7521578c"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a52cf62aa684e77f7edeafe1d0b8331119e3d6f1446862c270edac16a8866431"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"setting","id":"setting.single-channel","label":"单通道"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-enhancement","label":"语音增强"}]
paper_digest_primary_task: "语音增强"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 低信噪比谐波噪声下先做循环平稳波束形成再做神经网络去噪

> 英文题目：*A TWO-STEP APPROACH FOR SPEECH ENHANCEMENT IN LOW-SNR SCENARIOS USING CYCLOSTATIONARY BEAMFORMING AND DNNS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000106`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf)

标签：#信号处理 #单通道 #语音 #语音增强

评分：**6.1/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Bologni, Giovanni：机构信息未能从会议 PDF 纯文本可靠映射
- Larraza, Nicolás Arrieta：机构信息未能从会议 PDF 纯文本可靠映射
- Heusdens, Richard：机构信息未能从会议 PDF 纯文本可靠映射
- Hendriks, Richard C.：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文处理单通道低信噪比下的语音增强（speech enhancement），输入为被旋转机械谐波噪声严重掩蔽的含噪语音，输出为目标语音波形，难点在于谐波干扰与语音在时频域高度重叠且信噪比低至负值。方法链分为两步：先经时域调制构造频移增广观测以获得对齐循环频率的虚拟通道，再用循环最小功率无失真响应（cyclic minimum power distortionless response，cMPDR）求解谱波束成形器压制谐波分量，最后将预处理谱送入掩蔽估计深度神经网络（deep neural network，DNN）做残余噪声抑制与幅度或复数掩蔽重构。与直接让网络隐式学习谱耦合的做法不同，该管线用信号处理显式提供跨频统计先验，避免了短时傅里叶变换（short-time Fourier transform，STFT）网格失配与相位关系破坏问题。在IDMT电机噪声测试集信噪比为-20至-10 dB条件下，卷积循环网络（convolutional recurrent neural network，CRNN）加cMPDR达到尺度不变信号失真比（scale-invariant signal-to-distortion ratio，SI-SDR）为5.55 dB，显著高于同架构无预处理基线的1.54 dB。结论仅适用于谐波稳定且循环频率可准确估计的循环平稳噪声，对深度噪声抑制挑战集（Deep Noise Suppression Challenge，DNS）通用噪声增益微弱，时变共振跟踪尚未解决。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/narrietal/cMPDR> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么低信噪比很难？

输入是单个麦克风在短时傅里叶变换域得到的含噪观测，每一个时频点都可以写成目标语音加加性噪声。目标是从强谐波噪声中恢复出可懂且质量可接受的语音，评价同时看失真、质量与可懂度。困难集中在低信噪比段：论文把合成与真实实验的信噪比都放在负值区间，噪声能量压过语音，幅度谱上语音成分被谐波线状成分大面积遮蔽。初学者容易以为只要把含噪幅度谱交给神经网络学一个掩蔽就能解决，但原文指出两类结构性障碍。

第一，多数网络只用幅度谱，丢掉了循环平稳噪声特有的跨频率相位关系；第二，即使是复数网络，短时傅里叶变换引入的随频率和帧变化的时移会破坏跨频点的相干相位关系，除非知道底层信号频率并做显式补偿，否则网络缺乏归纳偏置去建模这种谱耦合。原文的教学含义是：这不是单纯加大数据或加大模型就能自然学会的结构，实验中即使训练几十小时高度规则的谐波干扰，增大容量仍不可靠。

输出是增强语音的时域波形或其时频估计，中间要经过预处理和掩蔽两步，任何一步的假设都要能复述。本文默认从原文独立写作，事实只依据论文正文证据与本次收到的官方原图像素，本次没有收到任何原图像素，因此不描述图的颜色曲线坐标，只依据图注与正文归因引用。

### 同输入同目标下已有路线分歧在哪里？

在单通道语音增强的同输入同目标下，相关工作分成 3 条路线。第一条是端到端神经网络去噪，直接从含噪表示预测掩蔽或波形，优点是不需要显式噪声模型，缺点是在极低信噪比下容易出现语音失真或噪声压不住，原文引用的低信噪比研究支持这一判断。第二条是两步流水线，先做传统预处理再做神经网络增强，例如先掩蔽再修复、先做轻量增强再精修，目的是减轻映射负担，但已有预处理多假设噪声平稳或只处理幅度。

第 3 条是把语音谐波结构作为先验，例如可学习梳状滤波或谐波补偿，思路是利用语音的周期性，但噪声侧的统计结构常被忽略。本文选择的是第二条路线加噪声侧先验：预处理不再假设平稳，而是假设旋转机械噪声具有循环平稳性，用循环平稳波束形成器显式利用谐波相关频率点之间的谱相关。这种对照是公平的，因为输入都是单通道含噪语音，目标都是增强语音，运行阶段都是推理时先预处理后增强。

类别差异不能当成同条件胜负：维纳滤波假设平稳，cMPDR 假设循环平稳加频率稳定，二者适用条件不同，后文真实数据集中非循环平稳噪声上的表现正是用来检验适用边界。

### 论文把什么问题当作主问题，控制了哪些条件？

主问题是低信噪比下被谐波干扰主导的单通道语音增强，典型场景是工业环境中的可穿戴与听力保护设备。论文把噪声限定为旋转机械类噪声，特点是随机起伏叠加确定性周期成分，在频域表现为谐波相关频点之间的谱相关。为了隔离机制，作者先用合成循环平稳噪声做受控实验，再用真实发动机噪声做分布外检验，还用以非平稳噪声为主的语音增强挑战数据检验不匹配条件。

信噪比控制在负值区间并进一步分成很低段与较低段分别报告，避免总体平均掩盖低段行为。举例说明：例如某帧在基频整数倍处出现强谐波线，语音的弱共振峰正好落在两条谐波线之间，单点增益很难在不损伤语音的情况下压掉谐波，而跨频率联合可以利用谐波之间的相关性做相消。这只是帮助理解的例子，不代表论文报告了该帧的具体数值。

必须保留的信息是单通道、无空间分集、预处理不对网络结构做修改、每个预处理条件下的网络都要重新训练以适配各自输入分布。

### 两步流水线如何走完一个样本？

沿一个样本走完全程有助于建立学习依赖。输入是一段含噪语音，先做短时傅里叶变换得到时频矩阵。第一步是预处理：对每个频率点构造增广观测向量，把原始频点与若干频移版本堆叠成虚拟多通道；频移不是简单的频谱索引平移，而是先在时域做调制再做短时傅里叶变换分析，以对准不落在离散频点网格上的物理循环频率。然后用循环平稳最小功率无失真响应求解线性权重，对增广向量做加权合并，得到该频点的预处理输出。

约束保证无调制分量的系数为 1，目标是最小化经验输出功率。第二步是神经网络去噪：把所有频率和时间帧的预处理结果收集成矩阵，送入掩蔽网络估计掩蔽，再与预处理矩阵逐点相乘得到语音估计。轻量卷积循环网络估计实值幅度掩蔽，只修正幅度；超低复杂度网络先估计幅度掩蔽再做相位精修，最终输出复数掩蔽同时修正幅度与相位。基线分支把调制集退化为只含零频移，此时增广向量退化为标量，分别对应恒等映射和维纳滤波。

整个安排的理由在原文写得很直接：让学习阶段站在循环平稳预处理带来的增益之上，而不是让网络隐式推断这种结构。

### 循环平稳与谱相关如何变成可计算的通道？

白话先行：循环平稳指统计量随时间周期变化的随机过程，旋转机械噪声的均值或相关函数带有周期成分；谱相关指这种周期性在频域留下的跨频率相关，谐波相关的频点之间不是独立的。英文名分别是 cyclostationarity 与 spectral correlation，后文分别简称循环平稳性与谱相关。计算上，论文为每个目标频率定义调制集，里面是需要搬移的循环频率量；增广向量把原始分量与搬移后分量并排，形成虚拟通道。

谱协方差矩阵是对增广向量的 2 阶统计做递归时间平均估计，平滑常数取 0.95，反映对历史帧的记忆。调制集一旦对准真实循环频率，虚拟通道之间就有强相关，波束形成器可以利用这种冗余压制谐波；若加入不相关通道，理论上无用且在估计误差下可能有害，因此需要做筛选。

筛选做法是每段录音估计 1 次：假设共振频率在录音期间稳定，先找周期图顶部峰，再把峰间两两差频作为候选调制，最后只保留与未搬移输入有高谱相干的候选，得到每个频率点数量可变的集合。时变共振的自适应跟踪被明确留作未来工作。

**循环平稳 × 谱相关：** 循环平稳分工是描述旋转机械噪声既随机又周期的统计结构，谱相关分工是把这种结构落实为谐波相关频率点之间的可利用相关性，搭配理由是只看单点功率谱无法区分语音与谐波而跨频率联合可以，组合意义是为波束形成器提供选择频率搬移量的依据。

**调制集 × 谱协方差矩阵：** 调制集分工是决定把哪些循环频率对应的频移版本作为虚拟通道加入，谱协方差矩阵分工是量化这些虚拟通道之间在当前频率和时间的 2 阶相关，搭配理由是只有调制集对准真实循环频率时协方差才有强非对角结构可供抑制，组合意义是 cMPDR 权重的计算直接依赖这两者的配合质量。

### 预处理器与掩蔽网络各自管什么，为什么这样搭配？

白话先行：循环平稳最小功率无失真响应可简称 cMPDR，是一种把频移版本当作阵元的谱波束形成器；维纳滤波可简称维纳滤波，是经典单通道平稳假设下的最小均方增益；卷积循环网络可简称 CRNN，超低复杂度网络可简称 ULCNet。cMPDR 管强谐波的结构性压制，靠跨频率相关做线性相消并用无失真约束保护语音；维纳滤波管平稳背景的单点抑制，靠噪声统计估计做增益。

CRNN 管残留噪声的幅度掩蔽，靠卷积加门控循环单元建模时频依赖；ULCNet 在幅度掩蔽之外还管相位精修，靠深度可分离卷积、频率向双向循环与子带时间单元扩大感受野。搭配理由是容量与假设互补：线性约束滤波擅长利用已知循环频率，数据驱动掩蔽擅长处理残留与语音细节，二者都不要求改网络结构。新增作用是降低映射负担，使很小的网络也能在强噪声下工作，而不是把全部结构学习压力都压给网络。

原文还强调维纳滤波可被网络替代，但其增益与 cMPDR 的增益 largely 互补而非冗余，这一点要到真实数据结果中再验证。

**cMPDR × 维纳滤波：** cMPDR 分工是利用频移后虚拟通道间的谱相关在保真无调制分量的约束下最小化输出功率以压制谐波，维纳滤波分工是在平稳假设下按信噪比做单点增益，对比搭配的原因是两者都是线性预处理但假设不同，组合意义是检验循环平稳先验相对传统平稳先验是否带来互补增益。

**CRNN × ULCNet：** CRNN 分工是用卷积提取时频局部特征再用门控循环单元建模时间依赖并输出幅度掩蔽，ULCNet 分工是先估计幅度掩蔽再做相位精修并输出复数掩蔽，搭配比较的原因是两者容量和是否处理相位不同，组合意义是检验前端 cMPDR 的增益是否跨越模型容量和掩蔽类型依然成立。

**掩蔽 × 失真约束：** 失真约束分工是在 cMPDR 阶段保证无频移的原始分量系数为 1 以不扭曲目标语音，掩蔽分工是在神经网络阶段对预处理后信号做时频点乘以进一步压制残留噪声，搭配理由是先用约束性线性滤波降低强谐波负担再让非线性掩蔽处理残留，组合意义是两步各管一部分失真与残留噪声的折中。

### 网络如何训练，预处理参数如何确定与冻结？

训练只针对第 2 阶段的掩蔽网络，第一阶段的 cMPDR 没有梯度学习过程。cMPDR 的谱协方差按递归平均更新，调制集按每段录音批量估计 1 次，推理时按闭式解计算权重；原文没有报告对调制集做反向传播，也没有报告端到端联合微调，因此应理解为预处理参数在网络训练前按规则确定并冻结，梯度路径只存在于掩蔽网络内部。监督来源是干净语音与含噪混合的配对，损失是时频域平均绝对误差，优化器是 Adam，初始学习率较小并配有梯度裁剪与验证损失平台衰减。

训练用 5 秒长序列，最多训练数百轮并用早停选择验证损失最低的模型。关键公平条件是每个预处理条件都要重新训练各自网络，使每个网络都适配恒等、维纳或 cMPDR 对应的输入分布，而不是用同一个在原始输入上训练的模型直接测预处理输入。未报告的缺项要明确指出：原文没有给出 cMPDR 与网络联合训练的梯度是否截断的显式说明，也没有报告掩蔽估计是否对预处理权重反传，复现时不应自行假设存在联合优化。

数据划分按训练验证测试的大致比例切分，具体比例与窗长跳长见实验条件表。

### 数据如何构造，基线与指标如何对齐？

实验按 3 个问题组织：合成受控条件下 cMPDR 是否跨模型有效，真实发动机噪声分布外条件下是否依然有效，以及在非循环平稳为主的数据上是否退化。合成噪声按随机谐波循环平稳模型生成，谱相关系数与谐波个数固定，基频在数十到上 100 赫兹区间随机抽取，再与语音增强挑战的干净语音在负值信噪比区间混合，得到数十小时数据。

真实数据用同一语音挑战的干净语音与噪声混合生成上 100 小时训练混合，测试时一部分用同分布保留测试，另一部分用工业电机发动机录音构造的测试集，该发动机集具有伪谐波循环平稳噪声且与训练分布不同，是主要真实基准。基线包括无预处理的恒等映射与按最小统计估计噪声的单通道维纳滤波，均为实际可运行策略，不是事后最优。指标方向要记牢：尺度不变信号失真比越高越好，语音质量与 DNSMOS 越高越好，可懂度越高越好。

短时傅里叶变换与训练超参数按原文交代，复现时应先对齐这些实现细节再比较数字。

下表提出比较问题：在相同训练流程下输入表示与优化起点是否一致，表中指标方向为窗长跳长越大时间频率分辨率折中不同，学习率与裁剪只影响训练稳定性而不直接决定增强上限。表前比较问题已经提出，表中只列原文明确给出的可重放配置。

| 配置项 | 分析窗长 | 跳长 | 傅里叶点数 | 初始学习率与裁剪 | 网络规模相关 |
| --- | --- | --- | --- | --- | --- |
| 原文实现 | 32 ms | 8 ms | 512-point FFT | 1 × 10−3，最大范数 3.0 | GRU 128 单元，丢弃率 0.25，全连接 256 单元 |

表后解释主要收益与代价：统一窗长与点数保证了所有预处理与网络看到相同的时频网格，避免把分辨率差异误读成方法增益；学习率衰减与早停保证每个条件都选验证最优点，代价是训练成本随 3 个预处理条件乘以两个网络而增加。未胜出项在后文结果中再展开，这里先记下维纳滤波在复杂网络上可能不增反降的反例伏笔。代码方面原文正文写了公开地址，但本次核验的资源状态显示该链接当前不可用，复现时应以原文参数表与文字描述为准，不假设可直接下载运行。

### 主结果支持什么判断，边界在哪里？

合成谐波噪声上的趋势最干净：无预处理时较大模型优于小模型，加入 cMPDR 后小模型提升幅度大，尤其在很低信噪比段提升超过数分贝并反超无预处理的大模型；随着信噪比升高，两条曲线的差距缩小，说明预处理在强噪声主导时最有效。真实发动机噪声上的报告显示 cMPDR 在两种网络下取得最高分，且优势随信噪比降低而放大。

在很低段相对次优预处理有数分贝与质量分的提升，小模型加 cMPDR 超过了无预处理的大模型，这是支持循环平稳先验比单纯增大容量更有效的最强证据。在以非平稳噪声为主的语音挑战测试上，cMPDR 没有造成退化，对小模型还有跨指标的一致小幅提升，支持失真约束在无循环平稳干扰时不损伤目标的说法，但提升幅度远小于发动机集，说明适用边界确实与噪声是否循环平稳有关。

原文还报告了感知质量分趋势与其他指标一致，但为可读性未在主表中列出，引用时应说明该指标是报告过但表格省略，而不是未测量。总体趋势不等于每组都成立，维纳滤波在小网络上有小幅增益而在大网络上可能不如无预处理，这一反例说明传统预处理与大容量网络并非总是叠加。

下表提出比较问题：在很低信噪比下 cMPDR 相对可运行基线的可部署收益是多少，指标方向为三者越高越好，公平条件是每个单元都已按各自输入分布重新训练。表前问题已经明确，表中数字只用原文连续原句逐字覆盖，不自行计算差值百分比。

| 场景 | SI-SDR 提升 | 可懂度或质量提升 | 参数与规模含义 | 对照对象 |
| --- | --- | --- | --- | --- |
| 合成谐波低信噪比 | more than 6 dB SI-SDR | 0.15 STOI | 小模型反超无预处理大模型 | standalone ULCNet |
| 真实发动机很低段相对次优 | up to 3 dB in SI-SDR | 0.3 in DNSMOS | 两种模型均最高 | best alternative preprocessing method |
| 小模型加前端相对无预处理大模型 | 1.9 dB in SI-SDR | 0.15 in DNSMOS | approximately 30% fewer parameters | unprocessed ULCNet |

表后解释主要收益与具体代价：收益是小模型加结构先验可以在强谐波下超过大模型，代价是需要估计调制集且假设频率稳定，若频率漂移或估计错误则虚拟通道相关性下降；反例是维纳滤波在大模型上未胜出，说明平稳假设的预处理不能替代循环平稳建模。未评测边界包括混响、多说话人与快速时变机械噪声，原文未给出这些条件下的数字，不能推广。

### 拿掉或换掉哪一块，对照能说明什么？

消融按可运行策略组织，而不是按事后最优组织。第一组是预处理消融：恒等映射对应纯网络基线，维纳滤波对应传统平稳预处理，cMPDR 对应循环平稳预处理，三者在两种网络下交叉，形成可比矩阵。结果支持的判断是维纳滤波的增益可被网络部分替代，而 cMPDR 的增益与网络增益互补；限制是这种互补只在谐波主导时大，在非循环平稳数据上只剩小幅或不退化。第二组是模型容量消融：小模型与大模型在无预处理下的差距，被小模型加 cMPDR 反超，支持先验比容量更重要的判断。

但这不等于容量无用，因为在大模型上再加 cMPDR 仍是全表最高，说明容量与先验可以叠加。第三组是信噪比分段消融：把负值区间分成很低段与较低段，cMPDR 在很低段优势更大，在较高段优势收窄，支持方法最适合强噪声主导条件的结论。失败条件也要记录：调制集包含不相关通道在估计误差下可能有害，噪声频率不稳定时批量估计不再成立，原文把自适应跟踪留作未来工作。

训练部署成本方面原文未报告浮点运算量与实时率，不能从参数量直接推定延迟改善，只能说参数量更小有利于部署，但预处理本身的协方差估计与闭式求逆会带来额外计算。

### 哪些结论不能下，缺了哪些验证？

缺失证据不是技术错误，但必须划清界限。直接报告的是合成与两个真实测试集上的平均指标提升，有限解释是循环平稳先验比增大容量更有效，未验证推测是该思路可直接推广到所有工业噪声。不能下的结论包括误判率、延迟与功耗得到改善，因为原文未测量这些量；也不能把自动指标当成人评，DNSMOS 虽是感知相关指标但仍不是主观听音。

相关性不是因果：发动机集上提升大与噪声循环平稳强相关，但其中还混有训练分布外、谐波强度与信噪比分布差异，不能单凭相关就断言全部增益都来自谱相关。统计方法方面原文只报告均值按信噪比分段聚合，没有报告置信区间与显著性检验，复现时应补多次种子与区间估计。适用条件要保留：噪声频率在录音期间稳定且能从周期图准确估计，单通道无空间分集，网络需按预处理输入重新训练。

若实际场景频率快速漂移、存在强混响或目标说话人移动，本文证据不支持直接套用，需要补验证。

### 复现先做什么，需要哪些超参数与信息条件？

复现按学习依赖排序，先对齐数据再对齐模型最后对齐评测。第一步构造或获取数据：合成部分按随机谐波模型设置谱相关与谐波个数并在低频区间随机基频，再在负值信噪比区间与干净语音混合；真实部分用语音挑战数据混合训练，用发动机录音构造分布外测试，注意保留集与分布外集不要混用。第二步实现预处理：对每段录音估计周期图顶部峰，用峰间差频生成候选，再用谱相干筛选得到调制集；谱协方差递归平均的平滑常数按原文取 0.95。

频移通过时域调制实现而不是频谱索引平移，这是对准非网格循环频率的关键。第三步实现网络与训练：短时傅里叶变换取 32 毫秒窗、8 毫秒跳、512 点变换，损失用时频域平均绝对误差，优化器用 Adam 并配梯度裁剪与平台衰减，用 5 秒序列训练并早停；每种预处理都要独立重新训练。第四步评测按信噪比分段报告尺度不变信号失真比、语音质量、可懂度与 DNSMOS，并保留维纳滤波与无预处理两个可运行基线。关键超参数与信息条件已在实验条件表中列出。

关于代码，原文写了公开地址，但本次核验的资源状态为不可用，链接当前不可用，因此应按论文文字与引用的参数表手工实现，不假设权重可下载或系统可一键运行。

### 何时值得尝试，一句话如何复述方法？

当任务是单通道、低信噪比、噪声有稳定谐波结构时值得尝试先做循环平稳波束形成再做掩蔽增强；当噪声以非平稳语音型或宽带随机噪声为主时，本文证据只支持不退化加小幅提升，不应期待同样大幅收益。复述方法可用一句话：对每个频率构造频移虚拟通道并估计其谱协方差，在保护原始分量的约束下最小化输出功率以压制谐波，再把预处理结果送入重新训练的幅度或复数掩蔽网络做残留抑制。

重提结果时增加适用条件比重复数字更重要：很低段增益大、较高段增益收窄；小模型加前端可超过无预处理的大模型，但大模型加前端仍是上限最高；维纳滤波可被网络部分替代而 cMPDR 提供互补增益。还需补的验证是时变频率跟踪、混响与多说话人下的稳定性，以及计算开销与实时性的实测。只有补齐这些，才能把受控实验中的均值提升转化为可部署系统的确定收益。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf#page=2)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/fb1835b7450d/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf#page=3)

另有 9 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
