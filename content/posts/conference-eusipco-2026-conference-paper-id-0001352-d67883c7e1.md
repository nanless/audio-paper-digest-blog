---
title: "SAMPLE-LEVEL EEG-BASED SELECTIVE AUDITORY ATTENTION DECODING WITH MARKOV SWITCHING MODELS"
date: 2026-09-13
draft: false
description: "针对双说话人竞争下脑电信噪比低而窗级解码在分辨率与精度间折中问题，论文用马尔可夫切换模型把包络回归与注意状态转移联合建模并用 EM 逐采样点估计，在 KULeuven 数据上取得与 HMM 后处理相当的中位精度而中位切换检测延迟显著更短，代价是对初始化敏感且仍依赖线性回归假设。"
tags: ["状态空间模型", "脑信号", "语音", "言语神经解码"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0001352"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d8560ab83de7fcc888cc6d583b300f5048c59584b94f22886d575cd4977a1123"
paper_digest_api_reader_plan_sha256: "ff68ef6579d00a5d3a15ed47e5d4cb5ca2da8f3082da9acd8ceb7f81aabdf313"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8fba5505239c6f5a89d8c82906d7d650115407e3aefb0eb78e9717974f135159"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "09e9f2a0e8d952c34d864fb1209ea2d5b394e6226d2c8b7fc8e67b92c17633a0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f2c07edd06d44c6529ee197c230bf0bdfb11cd69e4f4d827d72c192ccafa26d5"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "84c2961f2880d95ccd591e07c6db896ea780932581cd9f88e5739f9d47f97244"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"signal","id":"signal.neural","label":"脑信号"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.neural-speech-decoding","label":"言语神经解码"}]
paper_digest_primary_task: "言语神经解码"
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把解码和平滑写进同一个概率模型：MSM 如何做到逐采样点的听觉注意解码

> 英文题目：*SAMPLE-LEVEL EEG-BASED SELECTIVE AUDITORY ATTENTION DECODING WITH MARKOV SWITCHING MODELS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0001352`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf)

标签：#状态空间模型 #脑信号 #语音 #言语神经解码

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yao, Yuanyuan：机构信息未能从会议 PDF 纯文本可靠映射
- Geirnaert, Simon：机构信息未能从会议 PDF 纯文本可靠映射
- Tuytelaars, Tinne：机构信息未能从会议 PDF 纯文本可靠映射
- Bertrand, Alexander：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

选择性听觉注意解码（Selective Auditory Attention Decoding，sAAD）需从低信噪比脑电（Electroencephalography，EEG）逐时刻判断两路竞争语音（Speech）中当前关注者，短窗分辨率高但相关估计噪声大，长窗稳定却延迟大。本文提出马尔可夫切换模型（Markov Switching Model，MSM），以差分包络 \(y_t=y_{1t}-y_{2t}\) 为一维观测建立状态相关线性回归 \(y_t=\beta_{S_t}^T \hat{x}_t+e_t\)，用一阶马尔可夫链约束注意状态持续性，以前向后向算法估计逐点后验，再在期望最大化（Expectation-Maximization，EM）M步按后验加权更新两套解码器与噪声方差，多轮迭代后直接输出逐采样点判决。与窗级线性相关加隐马尔可夫模型（Hidden Markov Model，HMM）平滑的关键差异是解码与平滑共享同一似然而非两阶段串联，无需预选窗长且可利用未来信息做非因果平滑。在KULeuven双说话人数据集有监督用户相关（Sup-US）设置下，中位解码准确率77.3%，与强基线77.6%相当，中位切换检测延迟由34.5 s降至22.2 s。该结论仅适用于双说话人、人工拼接切换和离线非因果推理，未验证多说话人、自然切换、因果实时与跨库泛化。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/YYao-42/MSM> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么不能只看单时刻脑电？

本文的输入是 3 路随时间对齐的信号。第一路是多通道脑电，论文使用 64 通道记录，带通滤波到 0.1 到 4 赫兹并降采样到 10 赫兹。第二路和第 3 路是 2 位竞争说话人的语音包络，包络用听觉启发的滤波器组提取，同样滤波并降采样到 10 赫兹。目标是在每个采样点判断听者正在注意说话人 1 还是说话人 2。

开场需要先交代清楚学习依赖。脑电是非侵入记录，时间分辨率高，但信噪比极低，单采样点的神经响应几乎被噪声淹没。因此主流做法不是逐点判决，而是把一段窗口内的脑电和语音聚合后再比较。论文要解决的矛盾正是聚合带来精度，但同时丢掉脑电本有的高时间分辨率。后续所有方法选择都围绕这个矛盾展开。

**选择性听觉注意解码 × 窗级平滑：** 选择性听觉注意解码负责从脑电判断当前注意的是哪 1 位说话人，窗级平滑负责利用注意不会频繁切换的先验去抑制短窗估计的抖动，二者搭配的原因是脑电信噪比极低而单靠缩短窗口会放大噪声，组合意义是把高时间分辨率和可用的解码精度同时保留，本文的马尔可夫切换模型把这种搭配从两步流水线收进一个概率框架。

输出是逐采样点的注意状态序列。论文用隐藏状态变量表示注意对象，取值为 1 或 2，并假设它按 1 阶马尔可夫链演化。当前聚焦的对象在下一时刻大概率保持不变，只有小概率发生切换。这种缓慢切换假设是后文所有平滑设计的依据。代码当前可用，已公开在地址栏给出的仓库链接，资源状态显示为可用，因此可以写当前可用。初学者复述时要记住，任务不是语音识别或说话人分离，而是给定已知两路语音包络，从脑电反推听者在听哪一路。

### 已有路线如何用窗口和后处理换精度？

第一条常见路线是刺激重构加相关比较。先用线性解码器从脑电重构被注意语音的包络，再在固定窗口内计算重构包络与 2 位候选说话人包络的相关系数，相关更大者判为被注意者。论文引用的早期工作属于这一类。它的优点是模型简单可解释，缺点是短窗相关估计噪声大，长窗虽然稳定但时间分辨率下降。

第二条路线是直接映射窗口数据到注意度量。近年深度学习方法把一段脑电和语音窗口直接映射为相关值或概率，省掉了显式重构步骤。但论文指出，只要仍以窗口为基本判决单位，短窗噪声大与长窗延迟大的折中依然存在。

第三条路线是窗口级输出再做隐马尔可夫模型后处理。海因茨等人的方法把 1 秒窗的相关系数看作带噪声的观测，把真实注意状态看作隐藏马尔可夫链，通过设置很高的自转移概率来压制虚假抖动。论文报告该思路可以用 1 秒窗达到接近 30 秒窗的精度，同时保留更好的时间分辨率。本文正是在这条路线上进一步追问，能否不做两步流水线，而是把回归关系和状态转移写进同一个模型，直接对原始采样点建模。

### 论文把问题形式化成什么可计算形式？

论文把双说话人问题化简为 1 维回归问题。记时刻 t 2 位说话人的包络为 y1t 和 y2t，观测定义为二者之差，即 yt 等于 y1t 减 y2t。脑电方面，把每个通道当前采样点及其前 L 减 1 个滞后拼接成空时向量，通道数为 C 时维度为 C 乘 L。举例说，这只是一个教学例子，不是论文报告的数值：若有 64 通道并覆盖 500 毫秒历史，拼接后就是一个高维向量，用于容纳听觉响应滞后。

模型假设在给定注意状态下，差分包络等于状态相关解码器与空时脑电向量的内积再加高斯噪声。注意说话人 1 时用第一套回归系数和噪声方差，注意说话人 2 时用第二套参数。状态转移用 2 乘 2 转移概率描述，论文为减少超参数并对称对待 2 位说话人，设 p11 等于 p22 为可调参数。非对角概率控制期望的切换频繁程度。

需要估计的未知量包括两套回归系数、两个噪声方差以及每个采样点的隐藏状态。优化目标是使观测数据的似然最大。由于状态序列隐藏，论文采用期望最大化算法迭代求解。推理有两种模式：用前向加后向得到非因果平滑结果，充分利用未来信息；只用前向则得到因果版本，便于在线助听等实时场景。论文实验主要报告非因果版本与同样非因果的隐马尔可夫后处理对比。

### 一体化框架如何走完从采样点到判决的全程？

沿一个采样点走完全程有助于建立直觉。输入是 t 时刻的空时脑电向量和两路包络差。模型先假设两种可能：若注意说话人 1，则用第一套解码器预测包络差并按第一套噪声方差计算似然；若注意说话人 2，则用第二套参数计算另一份似然。转移模型同时给出从上一时刻状态延续或切换的先验概率。前向过程把历史信息递推到当前，后向过程把未来信息倒推回来，二者结合得到每个时刻属于各状态的平滑后验。

**马尔可夫切换模型 × 隐马尔可夫模型后处理：** 马尔可夫切换模型分工是同时描述观测生成关系和状态转移，隐马尔可夫模型后处理分工是只对已算好的窗口级相关系数或概率做 2 次平滑，二者搭配比较的理由是它们共享注意状态按马尔可夫链演化的假设但信息入口不同，组合意义在于检验一体化建模能否省掉窗口选择并在同等平滑强度下更快响应真实切换。

与两步法相比，一体化的新增作用有两点。第一，不再需要预先选定 1 秒或 30 秒这样的窗口长度，判决天然落在采样点级别。第二，解码器参数不再冻结在预训练值上，而是在测试数据上通过期望最大化继续调整，使回归关系与状态序列联合适配当前被试和当前记录段。代价是参数空间维度高，脑电信噪比低时容易陷入局部最优，因此初始化仍然重要。论文用一个在独立训练数据上学到的最小二乘解码器来初始化两套状态相关解码器，分别初始化为正负该解码器，噪声方差初始化为相同值，对称性只用于起点，不在迭代中强制保持。

### 状态相关回归与转移概率各自承担什么计算？

状态相关回归承担的是脑电到语音的映射。传统线性解码器通常分别重构每一路包络，本文则直接解码两路包络之差。论文脚注说明，也可以写成输出两路包络的双变量模型，当前 1 维形式可视为其两行相减，实验中发现 1 维形式训练更稳定。每个状态一套系数意味着模型允许大脑对被注意语音的跟踪在两种注意指向下呈现不同空时模式。

**状态相关解码器 × 差分包络观测：** 状态相关解码器分工是为注意说话人 1 和说话人 2 各保留一套回归系数，差分包络观测分工是把问题压缩为说话人 1 包络减说话人 2 包络的 1 维目标，搭配理由是差分形式让符号翻转即可对应注意对象互换并使训练更稳定，组合意义是每个采样点都能按当前隐藏状态选择对应解码器计算似然，从而实现逐采样点推断。

转移概率承担的是时间结构约束。把自转移概率设得接近 1，就等于告诉模型注意不会频繁跳变，零星的似然波动会被平滑掉。为了与隐马尔可夫对照方法公平比较，论文让单位时间内的期望切换次数相等。隐马尔可夫方法作用于 1 秒窗并设切换概率为 10 的负 3 次方，采样率为 10 赫兹的逐采样点切换模型则设为 10 的负 4 次方。初学者容易误以为转移概率越大越好，实际上它控制平滑强度，过强会漏掉真实切换，过弱则碎片化判决增多。论文保留它作为可调参数，而不是从数据中同时估计。

### 前向递推和后向平滑如何分工算出后验？

前向过程计算只看到历史时的后验。它分两步迭代：先按转移概率把上一时刻后验预测到当前时刻，再乘以当前观测在各状态下的高斯似然并归一化。初始状态分布在无先验知识时设为均匀分布。这个过程本身就是因果解码器，只用前向即可在线运行。

后向过程把未来信息折回当前。从最后一个时刻的前向结果出发，逆时间迭代计算给定全部观测的平滑后验。每一步利用前向已算好的当前后验、转移概率和下一时刻的平滑后验，按条件概率关系重新加权。这种非因果推断在离线评估时能改善对切换点附近状态的判断，但会引入未来信息，因此论文在比较切换检测时间时明确双方都是非因果版本。

期望步骤的目标函数是完全数据对数似然关于隐藏状态后验的期望。论文给出分解形式，观测似然部分依赖回归参数，状态转移部分在固定转移概率时视为常数。最大化步骤令导数为零，得到加权最小二乘形式的系数更新和加权残差平方平均形式的方差更新，权重正是平滑后验概率。直观理解是，模型更确信属于某状态的采样点，在估计该状态解码器时话语权更大。

### 没有神经网络训练时，参数究竟如何初始化和迭代？

本研究没有训练深度神经网络，也没有反向传播更新网络权重，因此本节按要求明确说明无训练阶段的真实计算过程。实际计算分为预训练初始化和无监督期望最大化拟合两段。预训练解码器按 3 种设置获得：面向特定被试的有监督最小二乘，需要注意标签并在该被试保留数据上交叉验证；面向特定被试的无监督版本，按引用的自适应方法在无标签下估计；面向跨被试的有监督版本，把除测试被试外所有被试数据拼接训练并做留一被试交叉验证。空时解码器覆盖刺激 onset 后 0 到 500 毫秒的脑电信息。

**前向-后向算法 × 期望最大化算法：** 前向-后向算法分工是在给定当前参数下算出每个时刻属于各注意状态的后验概率，期望最大化算法分工是交替完成求期望和按加权最小二乘更新解码器与噪声方差，搭配理由是隐藏状态序列未知时不能直接做极大似然，组合意义是通过多次迭代让参数估计和状态推断相互改进直至收敛到局部最优。

期望最大化在测试数据上无监督运行，不需要注意标签，因此不存在标签泄漏。流程是先用预训练解码器的正负值初始化两套系数，用预训练均方误差初始化噪声方差，再交替执行前向后向求后验和加权最小二乘更新参数，直至收敛。论文在有监督特定被试设置下报告，全部被试和折上平均需要 53 次迭代，中位数为 49 次，被试间平均迭代数从 31 次到 81 次不等。这说明计算成本主要来自多次求解高维加权回归，而非神经网络梯度计算。未报告的缺项是每次迭代的具体 wall-clock 时间和硬件配置，因此不能从迭代次数直接推断实际延迟，复现时需自行计时。

### 数据、划分与对照条件是否对齐？

数据采用公开的比利时鲁汶大学双说话人数据集，包含约 72 分钟竞争语音和 16 名正常听力被试的 64 通道脑电，被试按试次被指示注意其中 1 位说话人。语音包络提取沿用听觉滤波器组方法。音频与脑电统一带通到 0.1 到 4 赫兹并降采样到 10 赫兹。为增加切换样本，论文把数据切成 1 分钟段并随机交换每段内说话人 1 与说话人 2 的编号，人为构造更多注意切换。

划分上，特定被试设置做 3 折交叉验证，跨被试设置做留一被试交叉验证。预训练解码器只用训练折或训练被试学习。隐马尔可夫对照方法只在测试集上评估，而切换模型还要先在测试数据上拟合参数再评估，这一点是方法固有的无监督自适应特性，不是标签泄漏，但复现时要注意两者使用测试数据的方式不同。

对照的公平性处理包括三点。第一，隐马尔可夫作用于 1 秒窗相关系数，切换模型直接输出逐采样点结果，不再做窗后处理。第二，转移强度按期望切换次数对齐，分别为 10 的负 3 次方和 10 的负 4 次方。第三，原隐马尔可夫需要有监督估计相关系数的发射分布，为公平起见论文改为无监督：把两类相关混合后拟合双组分高斯混合，均值更大者判为注意态。指标方面，解码精度指预测与真实一致的时间占比，越高越好；切换检测时间指真实切换与最近正确切换判决的时间差取绝对值后平均，越小越好，若超过 2 次真实切换间隔则记为漏检并取间隔值。

### 主结果支持什么判断，不支持什么判断？

先提出比较问题：在相同初始化来源下，一体化逐采样点模型能否在不损失精度的前提下缩短切换延迟。公平条件是双方使用同一个预训练解码器来源，转移强度按单位时间对齐，均为非因果推断。指标方向是精度越高越好，切换检测时间越小越好。

| 条件 | 指标 | 原始最小二乘基线 | 隐马尔可夫后处理 | 本方法切换模型 |
| --- | --- | --- | --- | --- |
| 有监督特定被试 | 中位解码精度 | 50% 到 60% | 77.6% | 77.3% |
| 无监督特定被试 | 中位解码精度 | 50% 到 60% | 73.1% | 72.6% |
| 有监督跨被试 | 中位解码精度 | 50% 到 60% | 71.6% | 72.2% |

该表显示原始 1 秒窗最小二乘几乎处于机会水平，经平滑后两种方法都大幅提升。论文报告用威尔科克森符号秩检验比较两种平滑方法，在 3 种设置下精度差异均不显著，P 值均大于 0.05。因此论文直接报告的是精度相当，而不是切换模型精度更高。把微小的中位数差异解读为胜负是不恰当的。

**解码精度 × 切换检测时间：** 解码精度分工是度量预测注意说话人与真实标签一致的时间占比，切换检测时间分工是度量真实切换与最近 1 次正确切换解码之间的绝对时间差，搭配理由是只看精度会掩盖长窗和强平滑带来的延迟代价，组合意义是同时报告二者才能判断方法是否在保持精度的同时真正提升了时间分辨率。

切换延迟的结果方向一致且差异显著。同样先说明比较问题与公平条件：统计的是全部真实切换的绝对延迟平均，隐马尔可夫因窗口处理存在固有算法延迟。下表整理论文报告的中位数对比，支持延迟更短的判断，但不等于每次切换都更快，也不等于因果在线延迟同样改善。

| 条件 | 指标 | 隐马尔可夫后处理 | 本方法切换模型 | 显著性 |
| --- | --- | --- | --- | --- |
| 有监督特定被试 | 中位切换检测时间 | 34.5 s | 22.2 s | P 等于 0.0004 |
| 无监督特定被试 | 中位切换检测时间 | 42.3 s | 29.9 s | P 等于 0.0003 |
| 有监督跨被试 | 中位切换检测时间 | 51.5 s | 33.7 s | P 等于 0.0233 |

表后需要解释收益与代价。主要收益是省掉窗口选择并把延迟中位数降低约 10 秒到 18 秒，代价是仍需在测试段上迭代拟合且对初始化敏感。论文还指出，未做后处理的最小二乘输出高度碎片化，无法定义有意义的切换检测时间，因此该基线的延迟栏为空，这不是漏报，而是该基线不具备可比的切换序列。

### 初始化来源改变时，模型是否更稳健？

论文用 3 种预训练来源检验初始化的影响。有监督特定被试提供最强的起点，无监督特定被试和有监督跨被试通常更弱。按直觉，一体化模型只把预训练作为起点，理论上应比直接消费其输出的隐马尔可夫方法更稳健。但实际数据显示，切换模型在较弱初始化下并未表现出明显更强的鲁棒性，3 种设置下的精度排序与对照方法基本同向变化。

论文对此的有限解释是期望最大化可能陷入局部最优，低信噪比脑电加高维参数空间使起点仍显著影响终点。这属于支持性解释，不是因果证明，因为论文没有做随机初始化对照或 landscape 分析。未胜出项需要明确写出：在无监督特定被试和跨被试设置下，切换模型的中位精度没有反超对照方法，跨被试下 72.2% 对 71.6% 的微小差异也未达到显著水平。

另一类特有细节是收敛行为。在有监督特定被试设置下平均 53 次迭代、中位数 49 次，被试 5 平均 31 次，被试 9 平均 81 次，说明不同被试的数据难度差异较大。复现时若只看总体平均，会低估难被试的计算量。论文没有报告去掉后向平滑或固定噪声方差等消融，因此不能推断哪个组件贡献更大，只能说当前完整配置达到报告效果。

### 哪些边界没有被评测，不能直接推广？

第一，当前回归是线性的。论文明确说明非线性或深度网络扩展在原则上可行，但低信噪比下估计困难，可能需要变分推断或马尔可夫链蒙特卡罗等更复杂的推理，留作未来工作。因此不能把本文结论推广为切换模型加深度网络同样有效。

第二，实验只覆盖双说话人、固定频带和特定数据集。通道数、滤波频带、降采样率、包络提取方法和人工增加切换的数据构造都会影响结果。特别是把 1 分钟段随机交换说话人编号的做法改变了原始切换统计，复现时必须按同样方式构造，否则延迟数字不可比。

第三，报告的延迟是非因果平滑下的绝对延迟，允许判决出现在真实切换之前取绝对值。这与在线助听需要的因果延迟不是同一指标。论文提到可只做前向实现因果版本，但没有报告其精度和延迟，因此不能承诺因果部署同样改善。第四，论文未测量误判率随时间的分布、计算耗时和内存开销，也未报告统计功效之外的个体差异检验，总体中位数趋势不等于每个被试都获益。

### 复现时先做什么，才能对齐数字？

先准备数据与预处理。下载公开数据集的双说话人音频与 64 通道脑电，按论文用听觉滤波器组提取包络，再把音频与脑电都带通到 0.1 到 4 赫兹并降采样到 10 赫兹。把连续数据切成 1 分钟段并随机交换每段说话人编号，注意保留随机种子以便复现切换位置。空时解码器取刺激后 0 到 500 毫秒的脑电历史构造特征。

再按 3 种设置分别训练预训练解码器。特定被试设置做 3 折交叉验证，跨被试设置做留一被试交叉验证。最小二乘的有监督版本需要标签，无监督版本按引用方法实现。得到预训练解码器后，对隐马尔可夫分支计算 1 秒窗重构相关，再用双组分高斯混合无监督估计发射分布，转移概率设为 10 的负 3 次方；对切换模型分支用正负预训练值初始化两套系数，用相同值初始化噪声方差，转移概率设为 10 的负 4 次方，再在测试段上运行期望最大化直至收敛。

评估时按论文定义计算精度和绝对切换延迟，注意漏检按间隔截断。代码当前可用，仓库已公开，可直接核对前向后向与加权最小二乘实现。权重下载与完整系统可运行是不同概念：论文开源的是方法代码，不是即插即用的助听系统，复现跨被试结果还需自行组织留 1 流程并记录迭代次数与运行时间，以补足论文未报告的成本缺项。

### 何时值得尝试这种一体化建模，何时不必？

当研究目标是逐采样点判决、希望省掉窗口长度选择并同时关心切换延迟时，值得尝试把回归与转移写进同一个马尔可夫切换模型。它的适用条件是已知两路候选语音包络、注意切换相对缓慢、且能接受在测试段上无监督迭代拟合。对于离线分析或允许短暂自适应的场景，非因果平滑能充分利用未来信息。

当系统要求严格因果、低算力或零测试时适应时，则不必直接照搬本文配置。此时需要补做只用前向的因果评估，并实测每轮加权回归耗时与总延迟。初始化质量仍是关键，即使模型号称无监督拟合，弱初始化下的终点可能并不更稳健，因此应优先保证预训练解码器质量或设计多起点策略。

常见误解需要澄清。第一，无监督期望最大化不等于确定性求解，它只是无标签下的局部优化，多次运行或不同起点可能得到不同结果。第二，精度相当不等于全面优于对照方法，本文最强的可复述证据是延迟显著缩短，而精度结论是无显著差异。第三，逐采样点输出不等于逐采样点都可靠，平滑先验本质上是在相邻时刻间借用信息，切换点附近的判决仍需结合延迟指标理解。补足因果延迟、计算开销和更多被试与场景验证后，才能更完整判断其在神经导向助听中的实际价值。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=2)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6e9ffe6bf963/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf#page=3)

另有 13 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
