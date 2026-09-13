---
title: "ROBUST SPEECH DEREVERBERATION BASED ON SIGNAL COMPRESSION AND REFERENCE SIGNAL RECONSTRUCTION"
date: 2026-09-13
draft: false
description: "针对加性噪声下传统加权预测误差去混响鲁棒性下降和多通道延迟观测导致矩阵求逆复杂度为 O(M^3L^3) 的问题，论文用观测自相关矩阵主特征向量重建参考信号并压缩延迟观测子空间，在 8 麦克、混响时间 800 毫秒、白噪声与扩散噪声各两种信噪比仿真中提升去混响增益，代价是压缩维度与迭代近似带来性能与复杂度权衡。"
tags: ["自适应滤波", "鲁棒性", "麦克风阵列", "语音", "去混响"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000976"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "905c366b434e37d2119ba42556bfaa1aecfafdc6dd1d91a883079c81bc933c16"
paper_digest_api_reader_plan_sha256: "7f1610e10311275b0e820cd0347408258b42972a39d28baf45f229e04dc6c9ef"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "0e7fac7ef69ff72f825c8216eff8ad20cbfa8c8c13fcdd382f7c2a8ad1b68151"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "eeeeabc9963d9a44c79788d3e06c46c07650c4723d837b24c8b7f9389c60fae4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8ae123c36b04b3a957c34f5901cf56c0f3a727f5628ac734d6b271419f15712e"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a338819388c8ae871722856485b9e2f7561d9322eafa7d2a7e735b1addb9e7b6"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adaptive-filtering","label":"自适应滤波"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.dereverberation","label":"去混响"}]
paper_digest_primary_task: "去混响"
paper_digest_primary_method: "自适应滤波"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 低信噪比下参考信号不可靠、矩阵太大：用主特征向量重建参考并压缩延迟观测的 WPE

> 英文题目：*ROBUST SPEECH DEREVERBERATION BASED ON SIGNAL COMPRESSION AND REFERENCE SIGNAL RECONSTRUCTION*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000976`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf)

标签：#自适应滤波 #鲁棒性 #麦克风阵列 #语音 #去混响

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Chen, Yitong：机构信息未能从会议 PDF 纯文本可靠映射
- Jin, Danqi：机构信息未能从会议 PDF 纯文本可靠映射
- Zhang, Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Chen, Jie：机构信息未能从会议 PDF 纯文本可靠映射
- Chen, Jingdong：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为麦克风阵列采集的带噪混响语音短时傅里叶变换（Short-Time Fourier Transform，STFT）谱，输出为保留直达声与早期反射并抑制晚期混响的期望信号，难点是低混响信号噪声比（Reverberant-Signal-to-Noise Ratio，RSNR）下加性噪声污染预测且多通道延迟观测导致大矩阵求逆代价高昂。方法链分三步：先对多通道观测协方差矩阵做特征分解得到主特征向量并构造类延迟相加波束成形参考信号，再用前 N 个特征向量构成压缩矩阵将观测降维至压缩域，最后在压缩域迭代估计时变方差与多通道线性预测（Multichannel Linear Prediction，MCLP）滤波器并相减得到去混响输出。与需已知导向矢量的联合波束成形加权预测误差相比，该机制免测向且同时压缩预测维度，具有更低复杂度与噪声鲁棒性。在 13 m × 12 m × 5.5 m 仿真房间、8 通道阵列与白色噪声 10 dB RSNR 下，自适应压缩变体相对混响信号的感知语音质量评估（Perceptual Evaluation of Speech Quality，PESQ）增益为 0.2048，明显高于原始 WPE 的 0.0078。该结论仅在单一混响时间与合成噪声仿真内验证，未覆盖真实房间、移动声源与强干扰说话人等外推场景。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/ehabets/RIR-Generator> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：这篇解读要解决什么学习问题？

本文输入是论文原文证据与本次收到的官方原图像素，本次没有收到任何图像像素，因此不做看图判断，只依据文字、公式说明与表格数字写作。目标读者是刚进入语音、音乐、音频领域的研究生，目标是读完能核对实验条件、复述方法步骤、理解比较结论的边界。

必须保留的信息包括任务定义、传统加权预测误差方法的两个短板、参考信号重建与信号压缩的具体动作、仿真房间与阵列参数、预测延迟与滤波器长度、噪声类型与混响信号与噪声比条件、评价指标方向与关键增量数字、计算复杂度对比。输出是 1 篇按学习依赖展开的中文技术解读，不做营销式判断，不补充证据之外的事实。全文先走一个样本的完整路径，再展开组件与公式含义，最后落到可复现的检查清单。

凡是教学举例都会标明是例子，不把例子当作论文报告的数值。

### 任务与相关路线：去混响要保留什么、去掉什么？

论文研究的任务是单声源、多麦克风在混响加噪声环境下的语音去混响。在短时傅里叶变换域，每个麦克风观测被写成期望信号、混响分量与加性噪声之和。期望信号包括直达声与早期反射，混响分量指超过分隔索引的晚期反射。去混响的目标是从观测中恢复期望信号，压制晚期混响。相关路线中，加权预测误差方法是主流，它用延迟观测的多通道线性预测滤波器预测晚期混响，再从参考信号中减去预测结果。

论文指出该路线有两个局限，一是原始建模没有显式考虑加性噪声，低混响信号与噪声比下性能快速下降，二是多通道延迟观测维度大，反复求逆大矩阵带来高计算负担。另一类路线把波束形成与加权预测误差级联或联合优化，但需要准确的波达方向估计，在低信噪比下困难，且多输入多输出形式进一步增大复杂度。还有把多通道线性预测滤波器做 1 阶克罗内克积分解以平衡鲁棒性与复杂度，但论文称实际提升有限。

本文的工作就定位在同时改善噪声鲁棒性与计算效率，且不依赖波达方向先验。

### 问题形式化：一个时频点上发生了什么？

先沿一个样本走完路径。取一个时频点，输入是 M 个麦克风在该频率、该时刻的观测向量，以及此前多个延迟帧构成的延迟观测向量。表示阶段把延迟起点设为预测延迟，预测阶数决定每个通道用多少延迟帧。组件阶段先估计时变方差，再求解多通道线性预测滤波器，最后用参考信号减去滤波器对延迟观测的加权组合。目标是让残差服从零均值复高斯分布，其方差随时间变化，通过最小化负对数似然函数交替更新方差与滤波器。

输出是该时频点的去混响估计。举例来说，这只是一个教学例子：若某帧语音能量高，方差估计大，该帧在求解相关矩阵时权重小，避免语音自相消；若某帧接近静音，方差小，权重相对大。原文用迭代公式实现这一点，方差取残差能量与小常数的最大值，滤波器取加权相关矩阵逆乘以加权互相关向量。传统做法把参考信号直接取自某一个麦克风，这在噪声大时不可靠，因为单通道观测本身已被污染。

### 方法全景：参考重建加压缩如何分工？

论文提出的方法全景可以概括为两步改造加一套迭代求解。第一步是参考信号重建，不再用单麦克风观测，而是用观测自相关矩阵的主特征向量对当前帧观测做加权合并，得到更干净的参考。第二步是信号压缩，用同一个自相关矩阵的前 N 个特征向量构成压缩矩阵，把每帧的 M 维观测压到 N 维，再在压缩域构造延迟观测并求解小尺寸滤波器。两步共用特征结构，因此可以用特征值分解 1 次求全部分量，也可以用序列幂迭代只求前 N 个分量。

压缩维度可以固定，也可以按能量比自适应确定。最终迭代仍是估计方差、构造加权相关矩阵与互相关向量、求逆更新滤波器，只是维度从 M 变为 N。论文给出 3 种变体，分别对应全分解、固定压缩维度的迭代近似、自适应压缩维度的迭代近似。复杂度上，原始方法矩阵求逆量级随通道数立方与预测阶数立方增长，压缩后通道数被压缩维度替代，参考重建只增加与通道数有关的少量开销。

### 组件一：为什么主特征向量能做更鲁棒的参考？

白话解释，参考信号就是式中被减数，它的质量直接决定输出质量。英文对应 reference signal。主特征向量就是自相关矩阵最大特征值对应的特征向量，英文对应 dominant eigenvector。传统参考取单通道，噪声直接进入被减数。论文的依据是期望语音在阵列上空间相干，加性噪声相关性较弱，因此主特征向量主要刻画语音子空间，对噪声更鲁棒。

具体动作是先对每个频率用短时平均近似自相关矩阵，再取其归一化主特征向量，对当前观测向量做共轭转置加权并归一化，得到重建参考。论文称该结果可解释为近似延迟求和波束形成器输出，但不需要波达方向先验。实现上有两条路，全量特征值分解直接分解矩阵得到降序特征值与特征向量，序列幂迭代则从随机向量出发反复乘以当前残差矩阵，再归一化估计特征向量与特征值，并剥离已求成分构造下一个残差矩阵。

**参考信号 × 多通道线性预测滤波器：** 参考信号负责提供要保留的直达与早期反射成分的初始观测，多通道线性预测滤波器负责从延迟观测中预测晚期混响成分，二者搭配的理由是去混响输出等于参考减去预测结果，组合意义在于参考越干净、预测越只针对混响，最终残留噪声和混响就越少。

沿样本看，同一时频点的 M 维观测进入后，先与主特征向量内积得到 1 维参考，同时该观测也被压缩矩阵映射为 N 维压缩观测，后续预测只在压缩域进行。

### 组件二：压缩矩阵如何把大矩阵变小？

白话解释，信号压缩就是把每帧的多通道观测投影到更低维子空间，英文对应 signal compression。主成分分析就是保留能量最大方向的投影方法，英文对应 principal component analysis。具体动作是用前 N 个特征向量拼成压缩矩阵，压缩观测等于该矩阵共轭转置乘以原始观测。压缩后的延迟向量维度从通道数乘预测阶数降为压缩维度乘预测阶数，加权相关矩阵从大方阵变为小方阵，求逆代价显著下降。压缩维度固定时直接取 1 或 4 做对照，自适应时按能量比准则从小到大试探，直到累计能量占比超过阈值。

能量比的分母包含已求特征值之和加上剩余维度乘以当前特征值，阈值取 0.8。需要强调的是，压缩不是简单丢弃麦克风，而是保留主成分的线性组合，因此仍利用了全部通道的互补信息。

**主特征向量 × 延迟求和波束形成：** 主特征向量负责从观测自相关矩阵中提取空间相干最强的语音子空间方向，延迟求和波束形成负责在已知时延下同相叠加增强目标方向，二者搭配的理由是语音比噪声更具空间相关性因而主特征向量近似指向语音方向，组合意义在于不需波达方向先验就能得到近似波束形成输出作为更鲁棒的参考。

**信号压缩 × 主成分分析：** 信号压缩负责把 M 通道延迟观测降到 N 维，主成分分析负责用前 N 个特征向量保留能量最大的子空间，二者搭配的理由是多通道观测存在冗余且混响预测主要依赖低维子空间，组合意义在于矩阵求逆从 O(M^3L^3) 降到 O(N^3L^3) 而保留去混响所需互补信息。

举例来说，这是一个教学例子：若 8 个通道高度相关，第一主成分已占绝大部分能量，取 1 维即可近似；若扩散噪声使能量分散，则需要 4 维或自适应增加维度。论文报告的复杂度对比显示，取小维度时压缩方法的求逆量级远小于原始方法。

### 没有神经网络训练时：真实计算过程是什么？

本研究没有训练神经网络，因此本节明确说明没有训练阶段，没有冻结与更新的网络参数，没有梯度路径与监督标签，也不能把无训练等同于确定性求解，因为迭代估计仍依赖数据与随机初始化。真实计算是逐频率的无监督迭代优化与数值线性代数。流程是先用短时平均构造自相关矩阵，再用特征值分解或序列幂迭代得到特征向量，构造参考信号与压缩矩阵，然后交替执行方差估计与滤波器更新。方差来自当前残差能量，滤波器来自加权最小二乘闭式解。

序列幂迭代的随机向量从均匀分布生成，主特征向量迭代 5 步，其余分量各迭代 1 步以省计算。压缩维度的自适应规则只依赖已求特征值，不依赖外部标注。论文未报告收敛阈值与总迭代次数的具体缺项，复现时需按传统加权预测误差常用迭代次数先跑通，再核对增量指标是否落在报告范围。

**序列幂迭代 × 特征值分解：** 特征值分解负责 1 次性求出全部特征值与特征向量，序列幂迭代负责用随机向量反复乘以残差矩阵并逐阶剥离已求成分，二者搭配的理由是只需要前 N 个主成分时不必做全分解，组合意义在于以少量迭代逼近主特征向量并支持能量比自适应选维，降低参考重建与压缩的计算量。

资源状态方面，论文引用的房间脉冲响应生成工具是第三方资源，当前可用，状态码为 200，地址为公开代码库，但这只是仿真工具可用，不代表本文方法代码已公开。

### 实验条件：房间、阵列、噪声与评价如何设定？

仿真房间为矩形，尺寸与阵列布置、混响时间、语音库与采样率共同决定了可比性。论文用镜像源法生成房间脉冲响应，再与干净语音卷积得到混响麦克风信号，最后独立加入白噪声与扩散噪声。混响信号与噪声比取 10 分贝与 0 分贝两档，分别代表中等噪声与强噪声。短时傅里叶变换用汉宁窗，预测延迟避开包含早期反射的前 40 毫秒，预测滤波器长度对应约 208 毫秒以覆盖晚期混响。

对比方法包括原始加权预测误差、统一卷积波束形成器、克罗内克积分解方法以及本文 3 种变体。为隔离去混响性能与波达方向估计误差，统一卷积波束形成器与克罗内克积方法在构造导向向量时假设已知真实波达方向，这对基线是有利条件。评价指标用感知语音质量、対数似然比、倒谱距离的增量形式，增量定义为混响噪声信号与去混响信号之差，感知语音质量增量越大越好，另两项为混响减去混响后因此越大越好。

下表整理仿真与分析条件的关键参数，表中数字与单位保留原文写法。
表前比较问题是：在什么物理与分析条件下比较才算公平？公平条件是同一房间、同一阵列、同一混响时间与窗长，指标方向是增量越大越好。

| 参数类别 | 参数名 | 取值 1 | 取值 2 | 取值 3 |
| --- | --- | --- | --- | --- |
| 阵列与房间 | 麦克风数与间距 | M = 8 | 2 cm | RT60 = 800 ms |
| 语音与采样 | 语料与采样率 | TIMIT | 16 kHz | 13 m × 12 m × 5.5 m |
| 分析窗 | 窗长与重叠 | 512 samples | 75% overlap | δ = 5 |
| 预测模型 | 阶数与时长 | L = 26 | 208 ms | 40 ms |
| 迭代与自适应 | 幂迭代与阈值 | b1 = 5 | τ = 0.8 | N = 1, N = 4 |

表后解释是：该表的主要价值是给出复现必须对齐的物理量，代价是房间尺寸大、混响时间长，预测阶数必须足够大才能覆盖晚期混响，否则增量会被模型失配稀释。未胜出项是原始方法在 0 分贝下几乎无增益，这正好说明低信噪比是本文要解决的边界。

### 主结果：在白噪声与扩散噪声下谁提升了多少？

要回答的主问题是：在两种噪声、两种信噪比下，重建参考加压缩是否比原始方法与空间辅助基线带来更大增量，且条件是否一致。比较的公平条件是同一仿真、同一指标增量定义，基线中的空间方法还享有真实波达方向这一有利条件。指标方向已在上一节说明，均为增量越大越好。下表摘录关键增量数字，保留原文裸值写法，表头单位与原文一致不逐格追加百分号。
表前比较问题是：在 10 分贝与 0 分贝下，各方法的感知质量与失真增量如何排序？

公平条件是同噪声、同信噪比、同分析参数，指标方向是三项增量越大越好。

| 噪声与信噪比 | 方法 | ΔPESQ | ΔLLR | ΔCD |
| --- | --- | --- | --- | --- |
| White 10 dB | WPE | 0.0078 | 0.0154 | 0.0678 |
| White 10 dB | WPD | 0.1595 | 0.2631 | 0.3946 |
| White 10 dB | EVD-WPE N=4 | 0.1899 | 0.4022 | 0.7264 |
| White 10 dB | SPI-WPE-A Adaptive | 0.2048 | 0.4154 | 0.6711 |
| White 0 dB | EVD-WPE N=4 | 0.0324 | 0.2027 | 0.3466 |
| Diffuse 10 dB | EVD-WPE N=4 | 0.1233 | 0.3680 | 0.4723 |
| Diffuse 10 dB | SPI-WPE-A Adaptive | 0.1214 | 0.3747 | 0.4142 |
| Diffuse 0 dB | EVD-WPE N=1 | 0.0133 | 0.2129 | 0.1186 |

表后解释是：报告显示本文方法在全部噪声与信噪比条件下一致超过原始加权预测误差，且在多数条件下超过享有真实波达方向的基线，支持重建参考带来噪声鲁棒性的判断。具体代价是压缩维度越大计算量越大，且在扩散噪声 0 分贝这一最难条件下 1 维略优于 4 维，说明更多维度也可能引入噪声子空间。

未胜出项是原始方法在 0 分贝白噪声与扩散噪声下增量接近零甚至为负，这反证了不处理噪声的建模短板。

**混响信号与噪声比 × 感知语音质量与对数似然比：** 混响信号与噪声比负责设定评测的噪声恶劣程度，感知语音质量与对数似然比等指标负责度量去混响前后质量变化，二者搭配的理由是只看绝对分会混入原始混响差异而增量能隔离算法贡献，组合意义在于在 10 分贝与 0 分贝两种条件下比较增益才能判断鲁棒性。

需要区分的是，论文直接报告的是增量均值，有限解释是主特征向量近似波束形成，未验证的推测是该近似在任意阵形与混声下都成立，原文未给出统计显著性与方差，因此总体趋势不等于每条语音都成立。

### 消融与反证：维度、分解方式与自适应各起了什么作用？

按问题组织消融。第一个问题是压缩维度从 1 增到 4 是否总是有益。证据显示除扩散噪声 0 分贝外，4 维一般优于 1 维，但计算量从低阶立方升至 64 倍低阶立方量级，代价明确。第二个问题是全分解与序列幂迭代近似谁更优。证据显示在 0 分贝两种噪声下全分解优于固定维度的迭代近似，在 10 分贝下迭代近似略优于全分解，论文报告了这一交叉，支持近似误差在强噪声下更敏感的判断。

第三个问题是能量比自适应能否替代固定选维。证据显示自适应方法的性能一般与 4 维固定方法相当，支持该准则能跟踪信号子空间变化的判断。下表整理与消融相关的实现选择，表中数字保留原文写法。
表前比较问题是：固定维度、自适应阈值与迭代步数如何取舍？公平条件是同一自相关估计与同一预测配置，比较的是可部署策略而非事后最优。

| 对照维度 | 选项 1 | 选项 2 | 选项 3 | 备注 |
| --- | --- | --- | --- | --- |
| 压缩维度 N | N = 1 | N = 4 | Adaptive | 自适应阈值 τ = 0.8 |
| 特征求解 | EVD-WPE | SPI-WPE-F | SPI-WPE-A | 主向量 b1 = 5 |
| 基线条件 | WPE | WPD | KP-WPE | 后两者用真实 DOA |
| 复杂度量级 | O(M^3L^3) | O(N^3L^3) | O(N^3L^3+NM^2) | N 越小越省 |

表后解释是：主要收益是自适应在不手动调维时达到接近 4 维的效果，代价是仍需逐阶迭代与能量比判断。反例是扩散噪声 0 分贝下增加维度并未提升，说明不能把更多维度当成单调改进。未评测边界包括移动声源、真实房间脉冲响应与非平稳噪声，原文未报告这些条件下的表现。

### 限制：哪些结论不能从当前证据推出？

论文直接报告的是仿真房间、固定声源与阵列、两种合成噪声、两档信噪比下的增量均值，支持在该仿真内本文方法更鲁棒且更省计算的判断。不能推出的是在真实房间、移动说话人、低延迟流式实现下同样成立，因为原文未测量误判率、延迟与实际运行时间，相关性不是因果。缺失证据不是技术错误，但复述时要用可能、待验证表达未验证部分。例如，主特征向量近似延迟求和波束形成的解释是有限解释，可能在相干干扰或强方向性噪声下偏离，待验证。

计算复杂度的量级对比是理论分析，未给出硬件预算与帧率，总体趋势不等于每步都省。基线享有真实波达方向是有利条件，实际部署中基线性能可能更低，但这不改变本文方法不需波达方向的适用条件优势。百分点与相对百分比不同，本文增量是绝对差值，不能换算成相对百分比去夸大。

### 复现：先对齐什么、再跑什么？

何时值得尝试是当系统是多麦克风、混响重、噪声不可忽略且算力受限，又不希望先做波达方向估计时，可以考虑先重建参考再压缩求解的思路。复现先做的是对齐仿真链路。用公开的房间脉冲响应生成工具产生 800 毫秒混响的脉冲响应，与随机抽取的语音卷积，再按 10 分贝与 0 分贝加入白噪声与扩散噪声。阵列取 8 元均匀线阵，间距 2 厘米，位置按原文坐标布置。分析取汉宁窗 512 点、重叠 75%，预测延迟取 5 以避开前 40 毫秒早期反射，预测阶数取 26 以覆盖约 208 毫秒晚期混响。

再实现两条特征路径，全分解用于对照，序列幂迭代主向量取 5 步、其余取 1 步，压缩维度先跑固定 1 与 4，再跑阈值 0.8 的自适应。最后按原文增量定义计算感知语音质量、对数似然比、倒谱距离的变化。还需补的验证是多次随机语音与噪声种子的方差、真实录音泛化、不同混响时间与阵列孔径下的敏感性，以及实际矩阵求逆耗时与内存占用。代码开源、权重下载与系统可运行要区分，本文是信号处理方法，无权重，工具可用不等于方法代码可运行。

### 收束：用一句话记住方法与边界

记住的核心动作是先用主特征向量合并出更干净的参考，再把延迟观测投影到前 N 个主成分上求小矩阵逆，固定维度与自适应维度分别对应可控复杂度与免调参两种部署选择。最强证据是在白噪声与扩散噪声、10 分贝与 0 分贝下对原始方法的稳定超越，以及自适应达到接近 4 维固定方法的效果。主要代价与边界是维度与迭代步数的权衡、最难扩散低信噪比下增加维度未必有益、基线在原文中享有真实波达方向、结论限于仿真均值且未报告延迟与统计显著性。

复述时先讲时频模型与减法结构，再讲参考重建与压缩分工，最后讲实验条件与增量数字，就能完整还原论文实际研究的内容而不引入无源推断。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=2)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-20.png)

区域 20 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-21.png)

区域 21 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-22.png)

区域 22 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-23.png)

区域 23 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-24.png)

区域 24 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 25，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-25.png)

区域 25 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 26，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-26.png)

区域 26 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 27，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-27.png)

区域 27 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 28，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-28.png)

区域 28 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=3)

[![原文数学表达区域 29，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-29.png)

区域 29 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=4)

[![原文数学表达区域 30，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-30.png)

区域 30 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=4)

[![原文数学表达区域 31，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-31.png)

区域 31 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=4)

[![原文数学表达区域 32，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/b3ebc28bcc13/figure-32.png)

区域 32 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf#page=4)

另有 41 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
