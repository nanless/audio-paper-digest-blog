---
title: "PHYSICS-INFORMED NEURAL ENGINE SOUND MODELING WITH DIFFERENTIABLE PULSE-TRAIN SYNTHESIS"
date: 2026-09-13
draft: false
description: "针对发动机爆燃脉冲的时序本质，论文用可微脉冲串加卡普拉斯-斯特朗共振器重建声音，在三类发动机共 7.5 小时音频上把总验证损失平均降低 5.7%、谐波重建提升 21%，代价是共振器音色偶尔偏离目标且尚未在真实录音上验证。"
tags: ["信号处理", "可解释性", "环境声", "音频生成"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000076"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "6fa60e2b475b56fcbf2ea5abe3323b30d4b72e928f57c999db5d781763928b32"
paper_digest_api_reader_plan_sha256: "0e13cea7dac49fad76ca4141b54348c8cd500a990a4fccb9bc0bb394e76a3025"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b4b0a0d6cc3419f55b1e15feb57593a750d0af8eb1869348f757be3b0e02ab28"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "920a7d8aba54027d8f8de18fd3aacf25b16a70b835b11fe5968bfbbc6051b00a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9728c5d0d5949e3f5a0c520c7ed1ecbb41df306fbed98878cc0baeeb84a884b1"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ba3ef42c81dc71f1c3a97841f87a7056db2cd416398e0194dd31331b2175b317"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"signal","id":"signal.environmental","label":"环境声"},{"facet":"task","id":"task.audio-generation","label":"音频生成"}]
paper_digest_primary_task: "音频生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不拟合频谱而是重放点火脉冲：脉冲串加共振器的发动机声建模

> 英文题目：*PHYSICS-INFORMED NEURAL ENGINE SOUND MODELING WITH DIFFERENTIABLE PULSE-TRAIN SYNTHESIS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000076`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf)

标签：#信号处理 #可解释性 #环境声 #音频生成

评分：**7.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Doerfler, Robin：机构信息未能从会议 PDF 纯文本可靠映射
- Wyse, Lonce：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

发动机声音建模需由转速与扭矩控制信号生成时域波形，难点在于基频低至5 Hz、发火间隔不足2毫秒且加速与减速在相同转速下音色不同，传统谐波加噪声方法只拟合频谱结果而丢失脉冲成因。该工作先将转速扭矩及其一阶二阶差分编码为帧级嵌入并解码为时变合成参数，为后续合成提供方向感知的控制条件。接着由物理脉冲发生器按发火顺序与气缸相位偏置生成带压力释放包络与热力学相位弯曲的多缸脉冲并叠加湍流与气流噪声，将控制参数转化为带随机激励的脉冲串。再将双缸组输出送入可微Karplus-Strong排气谐振器组渲染管路共振，由脉冲串激励得到最终波形，相对已有方法关键差异在于直接建模脉冲成因而非谱包络。在三个程序化发动机子集验证集下，PTR的总损失指标为0.949，低于HPN基线的总损失指标1.006。该脉冲约束对冲击性周期源更具归纳偏置，谐波重建同步改善并保留可解释的阀门定时与共振参数，具有实际可控意义。结论适用边界受限于合成汽油机数据与16 kHz离线重建，尚未验证真实录音、实时性能与主观偏好，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://rdoerfler.github.io/ptr-model-page/> — 链接可访问（HTTP 200）
- 模型相关资源：<https://rdoerfler.github.io/ptr-model-page/> — 链接可访问（HTTP 200）
- 演示资源：<https://rdoerfler.github.io/ptr-model-page/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，哪些信息必须保留？

本文的输入是发动机控制轨迹，主要是转速与扭矩及其时间导数，目标是输出随控制变化的发动机声音波形。必须保留的信息包括转速的绝对值与变化方向、扭矩的正负极性、点火相位与气缸点火顺序，以及排气系统的几何共振特性。开场先把这条链条固定下来：控制参数进入时间编码器，解码为时变合成参数，再经脉冲生成与共振器得到音频，后续所有模块都围绕这条链条展开。
研究生复述时要抓住一个矛盾：发动机听起来有明显谐波，却来自离散爆燃脉冲。

四冲程发动机点火率随转速变化，原文提到从 600 到 8000 转以上，对应 10 到 133 赫兹量级，基频可低至 5 赫兹，脉冲间隔可小于 2 毫秒。这种低基频加快速瞬态序列，既要求毫秒级定时精度，又要求音色随工况连续演化，这是普通乐音合成假设难以直接套用的原因。

学习时先沿一个样本走完全程：取一段 4 秒音频块及其 125 赫兹帧率的转速扭矩，模型在帧率上预测脉冲形状与噪声增益，上采样到 16 千赫音频率后按发动机相位生成八缸脉冲叠加，再送入两路歧管共振器与一路公共排气共振器，最后与目标音频比较多分辨率频谱与谐波能量。记住这个样本路径，后面每个公式与损失才有落点。

### 已有路线在拟合什么，为什么本文要换成因建模？

已有发动机声音合成大致分两条路线。第一条是谱建模路线，用加法、采样拼接或神经网络直接重建可观测的声学特征，例如谐波幅度与噪声包络，优点是拟合目标直观、容易与频谱损失对齐。第二条是物理过程路线，用规则显式模拟燃烧或机械过程，优点是结构可解释，但缺乏数据驱动的适应性与表现力。

可微数字信号处理出现后，谐波加噪声成为常用可微结构，并在发动机任务中加入了发动机相位条件、离散余弦变换域瞬态建模，以及静态转速循环生成等扩展。但原文指出，这些方法建模的仍是声学结果，即观测到的谐波频谱，而不是产生谐波的物理成因，即按点火节律出现的脉冲序列。

**脉冲串合成 × 谐波加噪声合成：** 脉冲串合成负责按点火时刻产生双极性压力脉冲波形，分工是决定周期与脉冲形状的成因；谐波加噪声合成负责用独立正弦幅度加滤波噪声拟合观测频谱，分工是描述结果。本文把两者搭配的理由是发动机谐波来自脉冲周期而非持续振动，组合意义是用受约束的脉冲形状代替自由谐波幅度，提供更强的归纳偏置。

教学上把例子说清楚：例如加速与减速经过同一转速时，频谱法可能给出相近谐波模板，但实际听感不同，因为一个有燃烧爆燃与湍流失真，一个是断油后的稳态气流。若只拟合频谱，就需要模型隐式记住方向与工况；若直接建模脉冲与工况门控，方向与工况就成为结构先验。这就是本文选择成因建模的安排理由，后续脉冲整形与门控都是为此服务的。

### 任务的操作定义与方向敏感性从何而来？

任务的操作定义是：给定转速与扭矩的时间轨迹，生成与目标录音在频谱与谐波结构上一致的单声道波形，采样率 16 千赫，控制帧率 125 赫兹。评价不仅看整体频谱距离，还要看沿发动机阶次的谐波能量是否重建正确，因为谐波正确与否直接对应点火周期是否正确。
方向敏感性是关键难点。与许多乐音的音高轨迹方向不变性不同，发动机在相同转速下加速与减速音色不同。

原文为此引入 1 阶与 2 阶差分特征：转速 1 阶差分捕捉升降速方向与速率，2 阶差分捕捉换挡或离合接合的突变；扭矩 1 阶差分区分稳态与瞬态负载，2 阶差分捕捉换挡与负载反转的突变声学特征。输入特征集合为转速、扭矩及其 1 阶 2 阶差分，共 6 维，在帧内平均后用训练集统计标准化。
另一个难点是监督的相位不可知性。短时傅里叶损失对帧对齐任意，只能捕捉与转速扭矩相关的谱结构，无法监督与循环同步的调制。

因此本文不把工况完全交给网络隐式学习，而是用扭矩极性构造确定性门控，把推进与断油显式分开，这是后面条件信号的设计动机。

### 三段式管线如何把控制变成声音？

整体管线分 3 段。第一段是时间控制编码，把标准化后的 6 维特征经多层感知机与门控循环单元编码为帧率嵌入，再经多层感知机解码为时变合成参数，同时保留未标准化的原始转速扭矩轨迹用于推导物理条件信号。第二段是物理信息脉冲生成，按发动机循环相位为每个气缸生成独立脉冲串，叠加湍流、进气脉动与气流噪声后按左右缸组求和。

第 3 段是排气共振建模，两路独立共振器处理左右缸组输出，再经一路共享共振器模拟公共排气管，全程可微以支持端到端梯度优化。
参数更新方式需要区分：所有时变合成参数由网络预测，共振器系数是直接学习的参数，原文表述为鼓励在单个数据集范围内收敛到单一解，反映排气几何稳定的假设。也就是说，共振器不随时变控制快速变化，而脉冲形状、包络与噪声增益随时间变化。

复述时记住数据流的 2 次上采样与 1 次并行：帧率嵌入解码后上采样到音频率，物理门控在音频率直接计算并作用于合成前，脉冲与噪声在音频率相乘相加后进入共振器。损失在音频端计算，经可微合成路径回传到编码器与参数头，共振器系数也同时接受梯度。

### 脉冲形状由哪些操作构成，噪声如何按工况加入？

脉冲从余弦导数表示出发。最简单的脉冲串可看作狄拉克序列的傅里叶余弦展开，但单极性阶跃不符合排气压力在平衡点附近振荡的实际，本文取对时间的导数形式，把余弦和变为正弦和，得到双极性波形，并省略按角频率归一化以避免高次谐波梯度过大。幅度分布采用指数谐波衰减，系数与衰减参数相关，约束脉冲始终为局部化的双极性形状，属于共轭泊松核族，保证脉冲性。
在此基础上做两处物理变换。

压力释放幅度调制用上升系数与衰减系数控制排气事件的快速释放与后续衰减，模拟高压气体释放的不对称瞬态。热力学相位调制用指数弯曲参数压缩脉冲前沿、拉伸尾部，模拟高温燃气声速高、前沿传播快的下行音高轨迹。完整脉冲是包络乘以每缸增益再乘以调制相位的正弦和。

**热力学相位调制 × 阀门动力学包络：** 热力学相位调制负责用指数弯曲压缩脉冲前沿、拉伸尾部，模拟高温燃气传播快带来的下行音高轨迹；阀门动力学包络负责用上升与衰减系数控制排气释放的不对称瞬态。搭配理由是两者分别处理脉冲内频率调制与幅度释放，组合后才得到完整的物理脉冲形状。

随机增强提供 3 路噪声：排气湍流对脉冲做随机幅度调制，进气脉动捕捉气门动力学与气柱反转的附加脉冲事件，稳态气流代表断油时作为气泵的气动辐射。噪声库是等效矩形带宽间隔的余弦滤波噪声组，加可学习时变增益，并乘以节气门因子或断油因子。

**节气门因子 × 减速断油因子：** 节气门因子负责在正扭矩推进时打开燃烧相关噪声与湍流调制，分工是表征燃烧与湍流排气；减速断油因子负责在负扭矩时打开稳态气流噪声，分工是表征发动机被倒拖成气泵时的气动辐射。搭配理由是扭矩极性直接指示工况，组合意义是以确定性门控强制噪声按工况激活，避免只靠扭矩嵌入隐式学习。

多缸合成按 V8 点火顺序给每缸固定相位偏置，再加有界的可学习正时调整，范围限制在正负 40 度曲轴转角内，左右各四缸先组内求和再送入各自共振器。原文报告在直列四缸数据上仍能泛化，说明该 V8 先验在配置失配时具有一定鲁棒性，但这属于有限证据上的观察，不是普适保证。

### 递归共振器如何变得可训练且稳定？

排气声学涉及波反射、梳状滤波以及脉冲与管内压力波的相互作用，本文用卡普拉斯-斯特朗反馈延迟线建模。基本形式是当前输出等于当前输入加增益乘以经两系数滤波的延迟输出，延迟长度对应共振基频，两个系数提供比传统取 0.5 更灵活的反馈路径控制。
直接实现递归会在反向传播中形成长时依赖，导致梯度消失且无法并行。解决方法是把它看作一般全极点滤波器的受约束实例，只有延迟处与延迟加一处两个系数非零，其余为零，然后把前向改写为非递归无限冲激响应，保持相同滤波响应但消除时序依赖，从而高效求梯度。

**卡普拉斯-斯特朗共振器 × 全极点滤波器：** 卡普拉斯-斯特朗共振器负责用延迟线加反馈模拟排气管反射与梳状滤波，分工是表达物理共振结构；全极点滤波器负责把递归延迟改写为非递归无限冲激响应，分工是消除时序依赖以便并行与求梯度。搭配理由是前者有稀疏定位约束而后者可微高效，组合意义是在保持相同滤波响应的同时实现可梯度优化的排气仿真。

实现细节有四点。第一，可微延迟选择用带直通估计的门贝尔柔性最大值，前向取硬独热以定位稀疏系数。第二，稳定性用反射系数参数化，网络输出经双曲正切约束模小于 1，理论上保证极点在单位圆内，再经既定转换得到直接型系数，并把反馈增益以次线性指数融入有效系数，偏向利用共振器而非旁路。第三，最小延迟通过左侧补零强制，避免过短延迟退化为非共振滤波。第四，结构固定为两路独立共振器加一路共享共振器，参数不随时变，体现几何稳定的假设。原文未报告延迟候选范围与最小延迟的具体样本数，这是复现时需要核对代码的缺项。

### 损失如何同时约束整体频谱与发动机阶次？

训练用多分辨率短时傅里叶损失加谐波损失。前者覆盖从 32 点到 32768 点、重叠 75% 加汉宁窗的多尺度，组合谱收敛、线性幅度、对数幅度与谱能量项并做尺度不变归一化，使各分辨率贡献均衡，目标是捕捉跨时频分辨率的谱结构。后者受旋转机械坎贝尔图启发，用高谱分辨率分析沿瞬时转速推导的谐波轨迹遮罩幅度谱，比较帧级能量，以减少低基频处的谱泄漏并隔离谐波区。

**多分辨率短时傅里叶损失 × 谐波损失：** 多分辨率短时傅里叶损失负责在 32 到 32768 点多尺度上比较频谱收敛与幅度能量，分工是监督整体谱结构；谐波损失负责沿瞬时转速推导的发动机阶次轨迹遮罩频谱并比较帧级能量，分工是监督周期谐波。搭配理由是前者相位不可知、无法监督 cycle 同步调制，组合意义是同时约束整体音色与低基频谐波精度。

优化器用 AdamW，单周期调度训练 100 轮，批量与音频块长度等条件见实验配置表。原文报告两类模型都在前 10,000 步内快速早期收敛，脉冲约束模型之后保持稳定。需要区分的是原始目标、近似与优化步骤：原始目标是波形重建，近似是多尺度谱距离加谐波能量距离，优化步骤是经可微合成路径的梯度下降；原文未给出各损失项权重之外的梯度裁剪、延迟采样的温度退火等细节，不应从模型名推定实现。

下面第一张表先提出比较问题：在相同编码器解码器、仅合成器不同的公平条件下，总损失与谐波损失的方向如何，脉冲串加共振器是否优于正弦加滤波噪声的可运行基线。指标越小越好，比较对象是实际可运行的谐波加噪声基线，不是事后最优值。

### 数据如何划分，基线是否在同等条件下比较？

数据来自程序化发动机声音数据集的 3 个子集，每个约 2.5 小时，共 7.5 小时，分别代表直列四缸偏谐波、V8 加中度随机扰动与低频共振、V8 加明显中频与金属共振的递增复杂度。每个子集做 9 比 1 的训练验证划分。音频切分为 4 秒单声道块，重叠 50%，控制信号下采样到模型帧率并用训练集统计标准化，同时保留音频率的非标准化转速扭矩用于条件推导。

基线是谐波加噪声模型，改编用于发动机合成，使用与脉冲串模型相同的编码器解码器架构，仅把脉冲串与共振器替换为正弦加滤波噪声合成。因此比较条件是一致的：输入特征、编码器容量、训练轮数与损失 family 相同，差异集中在合成归纳偏置，这使得总损失与谐波损失的差异更可能来自结构而非容量。
下面第二张表整理可重放的训练与数据条件，目的是让研究生能按相同批量、块长、帧率与优化器起步复现。

表中数值与单位保留原文写法，聚合对象与阶段在表后段落说明，不把不同指标的差值混入模型列。

### 主结果测了什么，数字支持什么判断？

主结果在验证集上比较总损失、短时傅里叶损失与谐波损失，方向都是越小越好。公平条件是相同编码器解码器，基线为正弦加滤波噪声合成，脉冲串模型为脉冲串加共振器合成。原文结论是脉冲串模型在 3 个数据集上一致优于基线，总验证损失改进范围为从 3.8% 到 7.6%，均值显示总损失降低 5.7%、谐波重建提升 21%。原文强调，尽管脉冲模型不直接建模谐波，其周期锁定加衰减约束的脉冲参数化反而成为脉冲性周期源的更强归纳偏置。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 总验证损失改进范围句 | 3.8% | 7.6% | — | — |
| 均值总损失与谐波重建句 | 5.7% | 21% | — | — |
| 3 类发动机与音频时长句 | 7.5 hours | 21% | 5.7% | — |

表后解释该表的叙事闭环与适用边界：总损失在三集上均下降且均值下降对应 5.7%，谐波重建均值提升对应 21%，说明改进集中在周期结构而非整体谱能量。收益是谐波精度提升幅度大于总损失降幅，代价是短时傅里叶损失虽也下降但幅度较小，且定性部分承认共振器音色偶尔偏离目标。基线在任 1 数据集的总损失均未反超，但原文未报告显著性检验与多次随机种子的方差，因此均值改进支持结构有效，尚不能断言每轮训练必胜。该结论限于程序化数据集的验证划分，未在真实录音上验证，见局限节。

### 哪些特有细节支持机制解释，失败条件是什么？

除核心数字表，论文有两个特有细节值得展开。第一是工况相关的噪声行为：推进时为尖锐节律噪声突发，断油时为稳态湍流，这是门控直接作用的结果，也是转速扭矩联合谱结构之外的 cycle 同步调制的体现。第二是涌现行为：离合分离时燃烧事件间歇、再接合恢复同步，低转速下单次燃烧可辨、高转速融为密集谐波纹理，这些未用专用训练信号设计，而是脉冲串架构的副产品，支持成因建模带来自然衔接的判断，但属于非正式听感报告，可能待验证。

失败条件与边界同样明确。共振器谱特征偶尔偏离目标，说明几何固定假设与两系数反馈的表达力有限，金属共振强的 C 集总损失最高也侧面印证复杂度挑战。原文未提供去掉门控、去掉相位调制或去掉共振器的消融表，因此不能从名称推定各部件的边际贡献，也不应补写拿掉后必然怎样。
训练与部署成本方面，原文只报告批量、步数与轮数，未报告硬件型号、显存、训练时长、推理实时率与延迟。

总体趋势不等于每组每步成立，C 集的谐波损失绝对值仍高于 A 集与 B 集，说明复杂度递增时误差同步增大，这是使用该方法前必须预期的边界。

### 还有哪些缺项使结论不能过度推广？

首先是数据边界。训练与验证均来自程序化数据集的子集，虽覆盖 3 种发动机声学，但与真实排气、麦克风、环境反射仍有差距，原文未来工作明确提出要在真实录音上验证，并探索由音频预测控制以在无标注集合上端到端训练。在完成这项验证前，不应把程序化集上的谐波提升直接承诺为实车效果。
其次是评价边界。定量评价依赖谱距离与谐波能量，未测量误判率、主观平均意见分以外的系统听感统计、延迟与算力成本，也未报告统计显著性。

相关性不是因果，损失下降支持重建更好，但不证明驾驶员感知到的真实感同等提升。
最后是实现边界。延迟候选、最小延迟样本数、噪声库通道数、湍流深度的具体取值，以及共振器系数的初始化与重置时机，在正文中未完全交代，需要回到代码核对。缺失证据不是技术错误，但在复现时必须列为待确认项，而不是按默认值猜测。

### 复现先做什么，代码与权重处于什么状态？

复现先从数据与配置对齐做起，按第二张表把批量、块长、帧率与优化器固定下来，再核对标准化统计只用训练集计算、验证集沿用训练统计，避免泄漏。接着核对两条并行路径：标准化特征走编码器解码器，音频率原始转速扭矩走门控与相位推导，两者在合成前汇合，任何一路的采样率错位都会破坏周期对齐。

| 项目 | 数值配置 | 采样帧率 | 优化训练设置 | 来源说明 |
| --- | --- | --- | --- | --- |
| 数据量子集 | 每个约 2.5 小时 | 未报告音频采样率外 | 三集共 7.5 小时程序化数据 | 3 类发动机递增复杂度 |
| 音频分块 | 65,536-sample 单声道块 | 4 seconds at 16 kHz | batches of 8，重叠 50% | 验证划分 9 比 1 |
| 控制帧率 | 下采样标准化 | 125 Hz 模型帧率 | 训练集统计标准化 | 音频率保留原始轨迹 |
| 优化调度 | 100 epochs 约 45000 步 | 未报告硬件 | learning rate 1×10−3，weight decay 1×10−2，AdamW 单周期 | 损失为多分辨率谱加谐波 |

表后复现要点是先固定 9 比 1 划分与训练集统计，再对齐 125 Hz 模型帧率与 16 kHz 音频采样率，最后按 100 epochs 约 45000 步的单周期调度执行多分辨率谱加谐波损失，使批量块长与优化设置共同可重放。

### 如何一句话记住方法，何时用何时停？

记住一句话：用受约束的脉冲形状决定周期成因，用门控决定工况，用可微共振器决定排气染色，再用谱加谐波损失同时约束整体与阶次。复述时按输入到表示到组件到目标到输出的顺序讲，先讲方向敏感特征与门控，再讲脉冲整形与噪声，最后讲共振器改写与损失，任何跳过相位推导的复述都会丢失谐波提升的来源。
何时用：需要低基频精度、需要加速与减速听感分离、需要可解释的阀门与排气参数时，脉冲串加共振器是值得优先复现的选择。

何时停：当共振器音色持续偏离且增加数据复杂度后总损失不再下降，或转向真实录音后缺乏转速扭矩标注时，应停下来先补数据标注与共振器表达力，而不是继续调损失权重。
最后回到证据强度：报告显示在程序化三集上总损失与谐波双降，支持成因建模有效的判断；涌现的离合行为与衔接梯度属于有限解释；跨到实车、实时部署与感知提升仍是待验证。按此分级表述，才是对原文最忠实的复述。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=2)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=3)

[![原文数学表达区域 11，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=4)

[![原文数学表达区域 12，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=4)

[![原文数学表达区域 13，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=4)

[![原文数学表达区域 14，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=4)

[![原文数学表达区域 15，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=4)

[![原文数学表达区域 16，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=4)

[![原文数学表达区域 17，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=4)

[![原文数学表达区域 18，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=4)

[![原文数学表达区域 19，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/4768e3e7d91e/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf#page=4)

另有 11 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
