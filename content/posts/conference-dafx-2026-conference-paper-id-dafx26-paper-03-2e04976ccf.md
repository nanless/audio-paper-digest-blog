---
title: "Diagonal Complex-Valued State Space Models for System Identification and Modeling of Metal Plate Reverbs"
date: 2026-09-12
draft: false
description: "该工作把受限对角复数状态空间等价为并联二阶全极点模态滤波器组，并在 DAFx 板式混响基准上用矩阵铅笔引导的特征值初始化拟合脉冲响应，报告显示合成误差与频率和衰减辨识优于常用初始化，但增益匹配仍存在离群与正则化代价。"
tags: ["信号处理", "状态空间模型", "可解释性", "房间脉冲响应估计"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_03"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e93f3c9d2008f4d7f77889e92eee00194a1faf603d8d771d0cc0acf323781478"
paper_digest_api_reader_plan_sha256: "fafc12626c414794ec6e3a8f9ec55fe7d94157dd466387dedb15a6984e019bf7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "45f464406fc5205eb341fd009ccb239539d77d6875ba6195aac2887afb76dd32"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8533df4ab3bf6c0e4b1ac08494a74db96f96db14fc65a0c659d584d5c50c93ec"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a46493ce4cbb4d8e1db9e3bb3e5bb7f93e93edc34fc6f130d410d93b39753f9a"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "48cfc58a943c445eab9e84af85b7283cd25c205638485d213c264da928d3e858"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"task","id":"task.rir-estimation","label":"房间脉冲响应估计"}]
paper_digest_primary_task: "房间脉冲响应估计"
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把板式混响学成可读模态：对角复数状态空间与矩阵铅笔初始化

> 英文题目：*Diagonal Complex-Valued State Space Models for System Identification and Modeling of Metal Plate Reverbs*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_03`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf)

标签：#信号处理 #状态空间模型 #可解释性 #房间脉冲响应估计

评分：**7.4/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Matthias Bittner：机构信息未能从会议 PDF 纯文本可靠映射
- Matthias Wess：机构信息未能从会议 PDF 纯文本可靠映射
- Dominik Dallinger：机构信息未能从会议 PDF 纯文本可靠映射
- Daniel Schnöll：机构信息未能从会议 PDF 纯文本可靠映射
- Axel Jantsch：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

金属板混响需从单通道脉冲输入重建长达1秒的密集指数衰减正弦叠加脉冲响应，模态密度高、衰减尺度差异大且相位敏感，黑盒网络难以给出可解释的频率与阻尼。该工作先将受限对角复数状态空间模型写成一阶复共振求和并取虚部，得到与并联二阶全极点模态滤波器严格等价的可微分结构，使学习到的特征值直接映射为模态频率、衰减率与增益。接着用矩阵束方法从目标脉冲响应预估计部分极点并拟合频率衰减多项式，再在20 Hz至10 kHz内对数均匀采样补足隐状态，从而为梯度优化提供物理合理的初值。最后以逐点L2损失对每条目标脉冲响应过拟合训练，并用并行扫描高效更新参数，上一阶段的初始化极点直接进入该优化阶段被精调为最终模态参数。与常规S5初始化相比，该机制把连续时间极点约束在稳定左半平面并保留单边谱先验，避免了高频初始化失配，因而同时改善合成拟合与频率衰减辨识。在50条合成板混响脉冲响应基准下，MP初始化模型的归一化L2误差指标为0.004，低于S5初始化的归一化L2误差指标0.034。该结论适用边界受限于线性合成脉冲响应的过拟合辨识，尚未验证真实钢板非线性、噪声鲁棒性与跨采样率泛化。原文未披露训练、推理或部署成本实测。

## 🔗 开源与复现资源

- 数据相关资源：<https://github.com/LOGUNIVPM/1st-DAFx-Challenge> — 链接可访问（HTTP 200）
- 演示资源：<https://platereverb.github.io/platereverb/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要保留什么？

本文的输入是金属板式混响的目标脉冲响应，输出是模型预测的脉冲响应以及可解读为模态参数的一组状态空间参数。目标有两个并列面孔，一是虚拟模拟建模，也就是让预测波形在听感和误差意义上逼近目标，二是系统辨识，也就是让学到的频率、衰减率和增益与生成目标响应的真实模态对应起来。必须保留的信息包括实验条件、初始化方式、隐藏规模、评价指标方向和适用边界，输出是 1 篇能复述方法的中文解读。

白话先说混响，混响是声音在空间或板体中多次反射叠加后的拖尾，英文为 reverberation。白话再说模态，模态是板振动可分解的一组共振单元，每个单元有自己的频率、衰减快慢和强度，英文为 mode。白话再说脉冲响应，脉冲响应是给系统输入一个极短脉冲后记录的输出序列，它完整刻画了线性系统的特性，英文为 impulse response，缩写为 IR。金属板混响难在模态密集且拖尾长，模型既要记住很长的衰减，又要把密集共振分开。

本文选择受限对角复数状态空间，英文为 diagonal complex-valued state space model，缩写为 SSM，因为它的对角连续时间极点参数化天然适合描述共振衰减，且递推推理是因果高效的。解读按学习依赖展开，先讲任务与相关路线，再讲方法全景与组件计算，然后讲训练构造与实验条件，最后讲结果、反证、复现与收束。教学中举的例子会明确标为例子，不引入无源数值。

### 已有路线在解决什么，本文站在哪条线上？

相关工作可按同输入、同目标、同监督和同运行阶段对照。第一条线是黑盒音频效果建模，输入是干声或控制信号，目标是重建湿声，常用卷积网络、时域卷积网络和长短时记忆网络，英文为 Convolutional Neural Networks、Temporal Convolutional Networks 和 Long Short-Term Memory Networks。原文提到大感受野时域卷积对长记忆动态效果有效，但感受野相关的延迟不利于混响这类长记忆效果的实时部署，有状态循环模型可以在更低延迟下达到相近精度。

第二条线是可微数字信号处理，英文为 Differentiable Digital Signal Processing，缩写为 DDSP，它用深度学习直接参数化数字信号处理器结构，混响方向上有结合神经隐变量与数字信号处理启发结构的电机械混响模型，感知仿真质量强，但学到的表示仍是黑盒，不直接暴露模态频率、阻尼和增益。

第 3 条线是深层状态空间模型，从结构化状态空间 S4 到对角化简化 DSS 和 S4D，再到对角多输入多输出形式 S5，以及面向原始音频与硬件部署的 S-Edge 和线性循环单元 LRU，英文为 Linear Recurrent Unit，共同点是强调对角复数状态动力学、稳定极点参数化和并行扫描训练。第四条线是共振系统辨识，早期 Prony 类方法把信号拟合为指数衰减正弦之和，子空间方法 ESPRIT 利用旋转不变性提高谱估计分辨率，矩阵铅笔法通过测量数据的广义特征值问题估计频率和阻尼，对噪声更稳健，英文为 Matrix Pencil Method。

第五条线是经典板模态综合，每阶模态是精确离散 2 阶全极点双 2 阶滤波器，总传递函数是多个模态之和。本文站在结构先验加可训练状态空间的线上，既继承 DDSP 把共振结构嵌入可微架构的思想，又继承钢琴合成中对角连续时间状态空间可直接学习丰富共振衰减的发现，再把系统辨识感知的初始化引入混响。

### 问题如何定义，什么算做好？

问题定义为给定目标板式脉冲响应，学习一个受限对角复数状态空间层，使其脉冲响应逼近目标，同时使换算出的模态参数接近真实值。沿一个样本走完流程有助于建立全局感，输入是一个离散脉冲序列，送入状态空间层后得到预测响应，表示是复数隐藏状态随时间的演化，组件是状态更新与取虚部输出，目标是逐点损失最小化，输出是预测波形与一组可换算的特征值和权重。

做好有两个判据，合成判据看时域均方误差、归一化 2 阶误差和归一化谱幅度误差，误差越小越好，辨识判据看频率、衰减率和增益的相对误差，同样越小越好。原文把合成与辨识分开评价，避免只看波形拟合就断言物理参数正确。需要区分的误解是波形误差小不等于每个模态都找对，因为密集模态存在可互换与不可分辨的情况，增加阶数可能继续降低波形误差，但参数对应仍可能存在模糊。

另一个误解是黑盒感知质量好就等于可控，本文强调结构化方法的价值在于训练后仍能拿到频率、衰减和增益，从而支持参数编辑与系统辨识。

### 方法全景如何从脉冲走到参数？

方法全景可以用训练流概括，左侧是目标脉冲响应与输入脉冲示意，中间是复数对角状态空间主体与引导特征值初始化，右侧同时标注虚拟模拟建模与系统辨识两个用途，底部是逐点损失加基于梯度的参数更新回路。输入是脉冲，状态按对角递推演化，输出取复数投影的虚部，损失比较预测与目标脉冲响应的逐点差异，梯度回传更新特征值与权重，初始化则在训练前用矩阵铅笔估计提供起点。

**虚拟模拟建模 × 系统辨识：** 虚拟模拟建模负责让模型输出的脉冲响应在时域和频域逼近目标混响，系统辨识负责让学到的参数与真实模态的频率、衰减和增益对应，二者搭配的理由是同一组状态空间参数同时承担合成算子和物理参数载体，组合意义是用一个可微模态谐振器同时完成可听重建与可解释参数恢复。

下面导读图一，图一左侧为训练回路，中间为模型主体与初始化策略，右侧为输入脉冲示意，阅读时应先确认主路径再确认监督回路。

> **看图路径：** 1. 先沿左侧训练框到右侧模型的箭头确认输入是目标脉冲响应输出是预测响应；2. 再看中间青色框内的状态更新式与取虚部输出式如何构成递推主体；3. 对照右上四个小框确认虚拟模拟与系统辨识是并列目标而非串行模块；4. 观察下方逐点损失加梯度更新的回路箭头确认监督闭环位置

[![原论文 Figure 1：We use a restricted diagonal complex-valued SSM (in- terpretable as a parallel second-order…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/86b720e806cb/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/86b720e806cb/figure-1.png)

*论文图 1。原论文 Figure 1：“We use a restricted diagonal complex-valued SSM (in- terpretable as a parallel second-order all-pole filter structure) for system identification and modeling of plate reverbs.”。*

图一可见内容支持上述流程，左侧目标脉冲响应框引出箭头指向中间的引导特征值初始化，中间青色框显示状态更新与取虚部输出两行公式，右侧显示输入脉冲的幅度随时间步变化示意，下方回路箭头把预测与目标的差异送回参数更新。这种布局说明初始化不是事后分析，而是训练前的前置构造，损失不是频域感知损失，而是逐点时域损失。官方演示与基准链接的可用状态按本次收到的资源证据交代，数据集基准链接当前可用，演示页链接当前可用，是否长期可达仍以实际访问为准。

### 受限状态空间的每个符号算什么？

组件从单输入单输出系统讲起，英文为 Single Input Single Output，缩写为 SISO。输入是实数序列，输出是实数序列，中间经过复数隐藏状态。状态更新由连续时间特征值经零阶保持离散化得到乘子，英文为 Zero Order Hold，缩写为 ZOH，再与上一时刻状态逐元素相乘，加上输入权重与当前输入的乘积。输出是输出权重与状态内积的虚部。符号含义是隐藏规模决定阶数，特征值实部决定衰减，虚部决定角频率，输入输出权重决定各模态强度。

原文做了三处受限，第一是训练中把实部取负绝对值以保证稳定，第二是把虚部取绝对值得到单边极点，第三是把输入输出权重限制为实数，并取虚部而非常见的取实部。这些限制不是随意简化，而是为了与并联 2 阶全极点结构精确对应。计算目标是让复数 1 阶谐振器之和经取虚部后成为实数指数衰减正弦之和，再经变换得到与经典板传递函数一致的分母形式。

原文实现细节包括用步长尺度参数解耦特征值学习，以及输入输出权重可融合从而减少参数与乘加数。按原文估算，未融合时参数量与隐藏规模成正比，融合后进一步下降，单步乘加数同样随之减少，具体数值按原文公式推导为准，这里不另行计算新数。

**对角复数状态空间 × 并联 2 阶全极点滤波器：** 对角复数状态空间负责提供可训练、可并行扫描的递推结构，并联 2 阶全极点滤波器负责给出板式混响的经典模态综合结构，二者搭配的理由是论文证明了受限条件下前者的传递函数与后者逐模态系数对应，组合意义是训练得到的状态空间参数可以直接换算为频率、衰减和增益。

**特征值 × 模态参数：** 特征值负责在连续时间域描述每个隐藏状态的衰减实部与角频率虚部，模态参数负责描述板振动的频率、阻尼和激励增益，二者搭配的理由是零阶保持离散化后特征值决定了指数衰减正弦的形态，组合意义是学习到的特征值经系数比较即可解读为物理可读的模态。

**零阶保持离散化 × 并行扫描：** 零阶保持离散化负责把连续特征值映射为离散递推乘子，并行扫描负责把长序列递推改写为可并行结合的扫描计算，二者搭配的理由是对角结构使离散化逐状态独立且递推满足结合律，组合意义是在保持共振长记忆建模的同时实现高效训练。

举一个教学例子，例子，假设隐藏规模为二，则系统内部有两个复数状态各自按自己的衰减与频率演化，输入脉冲同时激励二者，输出是二者正弦衰减的加权和，该例子仅用于理解叠加机制，不代表真实板需要两个模态。真实板需要数百至上 10000 模态，因此隐藏规模是否足够是后续实验的核心变量。

### 初始化如何构造，训练如何更新？

训练分 2 阶段构造，先初始化后优化。初始化采用两步法，第一步对目标脉冲响应运行矩阵铅笔法估计一部分模态，得到离散共轭复极点对后取单边并经对数除以采样周期换回连续时间，第二步对估计的衰减与频率关系拟合多项式函数，再在对数均匀分布上采样新频率并代入函数得到衰减，从而补足到目标隐藏规模。原文默认先估计 128 个模态再采样补足，若目标规模本身就是一百二十八则直接使用估计极点不再采样。

采样频率范围覆盖低频到高频，原文给出的上下限分别对应 20 赫兹与 10 kHz 量级。优化阶段对每个目标响应单独训练一个状态空间层，目标是过拟合该响应，损失为 2 阶损失，优化器为 AdamW 并配合余弦退火学习率，初始学习率较小，对输入权重施加较强的权重衰减以约束增益范围，输入权重初值采样自零均值小方差正态分布，输出权重默认设为一并保持不训练，步长参数在对数域初始化于较小区间。

梯度路径按原文交代更新特征值组合与相关权重，未报告梯度截断、早停 patience 或重置时机，解读不猜测这些缺项。

**矩阵铅笔法 × 特征值初始化：** 矩阵铅笔法负责从目标脉冲响应中估计一批可区分的离散极点，特征值初始化负责为非凸优化提供起点，二者搭配的理由是板式响应本就是指数衰减正弦之和而矩阵铅笔对此类估计较稳健，组合意义是先估计后拟合多项式再采样补足阶数，从而改善合成与辨识起点。

该组合的监督来源是目标脉冲响应本身的逐点值，没有外部标签，重置时机是每个目标响应独立训练，不跨响应共享参数。需要指出，输出权重保持不训练是原文明确的冻结安排，输入权重与特征值是更新对象，步长尺度是辅助学习变量。

### 实验在什么条件下测，与谁比？

实验基于板式混响系统辨识基准，默认配置合成目标响应，采样率与时长按基准设定，时长为 1 秒量级。评价分合成与辨识两类，合成比较目标与预测脉冲响应在时域与频域的差异，辨识比较真实模态参数与换算参数按频率最近匹配后的相对误差，未匹配到的参数按零处理。

比较对象包括两种特征值初始化，即常用结构化初始化与本文矩阵铅笔引导初始化，以及基准的 2 阶段方法，该基准先在幅度响应中找峰估计频率与带宽再由半功率带宽规则推阻尼，并在峰处取频响虚部估计增益。条件一致性方面，同一目标响应、同一隐藏规模下比较两种初始化，隐藏规模覆盖从小到大的多个档位，总训练模型数为数百量级，每个模型训练数千步并取最低损失检查点评估。指标方向均为误差越小越好。

聚合对象是多个目标响应的平均，原文还展示了随缺失模态数变化的散点趋势，缺失模态数指真实模态数与隐藏规模之差，负值表示模型阶数已超过理论需要。下表整理实验规模与基本条件，用于核对数据集、模型与阶段是否一致，表中数值均来自原文连续句的逐字证据。
下面比较问题的公平条件是同一组目标响应与同一隐藏规模，指标方向为误差越小越好，表格用于核对规模而非直接判定胜负。

| 项目 | 数量 | 条件范围 | 训练与评估阶段 | 备注 |
| --- | --- | --- | --- | --- |
| 目标脉冲响应 | 50 | 默认基准配置 | 每个响应独立训练 | 合成时长为 1 秒量级 |
| 隐藏规模档位 | 5 | 128 至 2048 | 同一响应多档对比 | 缺失模态数随档位变化 |
| 初始化策略 | 2 | 常用与矩阵铅笔引导 | 同条件对照 | 引导法先估计后采样 |
| 总训练模型数 | 500 | 全组合 | 取最低损失检查点 | 合成与辨识共用 |

表后解释是规模设计的代价在于总模型数多但每个模型只拟合一个响应，这种过拟合式评估适合检验结构表达能力与初始化起点，但不等同于跨响应的泛化测试，未胜出项与边界在后文结果中继续说明，基线方法的平均检测模态数等细节见结果表。

下表整理训练与构造的关键设置，用于复现初始化与优化起点，数值同样来自原文连续句。
下面比较问题的公平条件是同一优化器与步数组合下只改变初始化，指标方向仍为误差越小越好，表格用于核对起点而非判定最终胜负。

| 项目 | 数值 | 范围或方式 | 训练阶段 | 备注 |
| --- | --- | --- | --- | --- |
| 训练步数 | 5000 | 2 阶损失 | 逐响应拟合 | 取最低损失检查点 |
| 初始学习率 | 0.001 | 余弦退火 | 全程调度 | 优化器为 AdamW |
| 先估计模态数 | 128 | 矩阵铅笔估计 | 初始化第一步 | 再拟合多项式补足 |
| 采样频率下限 | 20 赫兹 | 对数均匀采样 | 初始化第二步 | 外推高频衰减对 |
| 采样频率上限 | 10 千赫兹 | 对数均匀采样 | 初始化第二步 | 与基线搜索带一致 |

表后解释是该配置的收益在于起点更贴近真实极点分布，代价是初始化本身需要 1 次极点估计与多项式拟合，且输出权重冻结与强权重衰减可能限制增益表达，具体影响见辨识部分的增益讨论，硬件预算原文未报告，此处不推定训练成本。

### 合成拟合测了什么，谁在什么条件下更好？

合成问题测的是预测脉冲响应与目标在时域与频域的接近程度，与谁比是矩阵铅笔初始化对常用初始化，以及小规模模型对基准方法，条件是否一致是同一目标与同一隐藏规模，指标方向是均方误差、归一化 2 阶误差与归一化谱幅度误差越小越好。关键数字的完整逐格复刻受限于原表选择不可用的证据约束，此处不抄写无逐字连续句覆盖的误差小数，仅报告原文明确写出的趋势与可核对规模，限制是精确小数需查阅原文表格。

原文报告显示缺失模态越少误差越小，隐藏规模增大持续降低两类误差，部分响应在大规模时模型阶数已超过理论需要，矩阵铅笔初始化在各规模平均上优于常用初始化，仅在最小规模存在少数离群，基准方法平均检测 139 个模态，而本文最小规模模型已能在合成上超越该基准。
下面导读图二，图二为数据集中模态数最多的示例，上排为时域与频域重合情况，下排为绝对误差，阅读时应先看重合再看误差。

> **看图路径：** 1. 先看图例确认蓝色为常用初始化红色为矩阵铅笔初始化灰色为目标；2. 再对比左上时域波形与右上频域幅度确认整体包络是否重合；3. 然后看左下时域绝对误差随时间是否一支明显更低；4. 最后看右下频域绝对误差在中高频段的峰高与分布差异

[![原论文 Figure 2：Example impulse response with the highest number of modes within the dataset, comparing the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/86b720e806cb/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/86b720e806cb/figure-2.png)

*论文图 2。原论文 Figure 2：“Example impulse response with the highest number of modes within the dataset, comparing the ground truth to SSM pre- dictions (H = 1024) either trained with S5 or MP eigenvalue…”。*

图二可见内容支持上述判断，上排时域与频域中 3 条曲线整体包络接近，说明大体拟合成功，下排时域绝对误差中一支误差整体更低且集中在起始段较大，下排频域绝对误差在中高频段出现多处尖峰且一支峰高明显更高，原文指出常用初始化在高频段误差更高，提示其频率范围初始化欠合适。该图是单样本示例，不能推广为所有响应的平均结论，平均结论需结合散点与表格趋势。

下面比较问题的公平条件是同一示例与同一隐藏规模，指标方向为绝对误差越小越好，表格汇总可核对的报告级结论而非逐格小数。

| 对比维度 | 评价指标 | 基线情况 | 常用初始化表现 | 矩阵铅笔引导表现 |
| --- | --- | --- | --- | --- |
| 合成时域 | 均方与归一化误差 | 平均检测 139 个模态 | 报告显示平均更高 | 报告显示平均更低 |
| 合成频域 | 谱幅度误差 | 搜索带 20 赫兹至 10 千赫兹 | 报告显示高频误差更高 | 报告显示高频改善 |
| 规模趋势 | 缺失模态数 | 50 个响应平均 | 随规模增大而下降 | 随规模增大而下降且更低 |
| 最小规模 | 小规模对照 | 基线为对照 | 存在少数离群 | 总体仍占优但有个别例外 |
| 示例样本 | 最多模态示例 | 目标为参考 | 时频误差更高 | 时频误差更低 |

表后解释是主要收益为在相同阶数下获得更低的时频误差且对高频段改善可见，具体代价是最小规模仍有离群，说明起点改善不能完全弥补阶数不足，未胜出项是常用初始化在极少数小规模样本上比值占优，未评测边界包括更长时长与真实录制板混响，原文仅用 1 秒合成响应验证。

### 规模与初始化如何改变误差，有无反例？

消融按缺失模态数组织，测的是隐藏规模与初始化对均方误差及误差比值的影响，与谁比是不同隐藏规模之间以及两种初始化之间，条件是否一致是同一目标响应集合，指标方向是误差与比值越小表示引导法越好。原文左图显示无论哪种初始化，缺失越少误差越低，右图显示引导法与常用法的误差比值多数落在 1 以下，说明引导法一般更优。反例是隐藏规模最小时存在少数比值大于 1 的点，即常用初始化偶尔更好。

支持的判断是增加阶数与改善起点都有助于合成，未验证的推测是继续增大阶数必然持续改善，原文未给出更大规模与统计显著性，此处记为待验证。
下面导读图三，图三左为误差随缺失模态数变化，右为误差比值，阅读时应先确认横轴含义再比较颜色。

> **看图路径：** 1. 先看左图横轴缺失模态数与纵轴均方误差的对数趋势是否随缺失减少而下降；2. 再比较左图中蓝色与红色点线的上下位置确认哪种初始化整体更低；3. 然后看右图误差比值纵轴是否多数点落在 1 以下；4. 最后观察右图中不同隐藏规模标记在小缺失与大缺失区间的分布差异

[![原论文 Figure 3：Synthesis performance. Left: Mean Squared Error (MSE) between predicted and ground truth impulse…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/86b720e806cb/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/86b720e806cb/figure-3.png)

*论文图 3。原论文 Figure 3：“Synthesis performance. Left: Mean Squared Error (MSE) between predicted and ground truth impulse responses ver- sus missing modes, comparing S5 and MP initialization.”。*

图三可见内容支持上述趋势，左图纵轴为对数误差，横轴为缺失模态数，红色点线整体低于蓝色点线且随横轴减小而下降，右图纵轴为比值，横轴同前，多数点低于 1，不同隐藏规模标记在小缺失区更集中于低比值区，大缺失区更分散，浅色小规模标记出现少数高于 1 的离群。该图区分分布点与单样本连线，同色不必然同响应，纵轴为原始误差与比值而非改善量，向下表示误差更小，比值小于 1 表示引导法更好，不能把末端点推广为全程结论。

### 辨识参数哪项变好，哪项没有？

系统辨识问题测的是频率、衰减率和增益 3 组相对误差，与谁比仍是两种初始化与基准方法，条件一致性是按频率最近匹配后比较，指标方向越小越好。原文报告显示频率与衰减率的相似性随规模增大而改善，且引导法优于常用法，最小规模加引导法已在三项上略优于基准，但增益匹配是反例，引导法在增益上更差，且随规模增大增益误差反而增大。原文解释已做权重正则化仍存在离群拉高增益误差，未来需更有效的正则化、离群过滤或基于模型降阶的剪枝。

限制是参数对应采用频率最近排序，未匹配部分按零处理，该口径对密集模态可能过于严格，增益误差大不一定等于听感差，自动指标不能当成人评。另一个限制是仅用合成基准验证，未测量真实器件非线性、噪声鲁棒性、推理延迟与部署成本，不承诺这些量得到改善。相关性不等于因果，合成误差降低支持起点更好的解释，但未做拿掉某一约束的单独因果检验，不能断言某一限制必然导致增益问题。

### 复现先做什么，还缺哪项验证？

复现先做基准生成，用默认配置合成目标脉冲响应并固定采样率与时长，再实现受限对角状态空间层，包括对角离散化、实部取负、虚部取单边、实数权重与取虚部输出。接着实现两步初始化，先用矩阵铅笔估计 128 个模态并换算回连续时间，再拟合衰减频率多项式并在 20 赫兹至 10 kHz 之间对数均匀采样补足阶数。

然后按逐响应独立训练、数千步 2 阶损失、AdamW 加余弦退火、强输入权重衰减、输出权重固定为一的设置拟合，最后按时频误差与 3 组参数相对误差评估。关键超参数与信息条件包括初始学习率、权重衰减强度、输入权重初值分布、步长对数域区间与最低损失检查点选择，原文未报告硬件预算与随机种子方差，还需补统计重复与显著性验证。

代码层面原文提到基于开源对角状态空间实现改写，是否随文公开权重与完整脚本以实际仓库为准，不把代码提及等同于可一键运行。值得尝试的时机是需要同时拿到可听重建与可读模态参数的线性板混响任务，不值得盲试的是强非线性器件与超长真实房间响应，原文未来工作也指向非线性扩展与模态数自动确定。

### 结论如何收束，误解如何澄清？

结论收束为受限对角复数状态空间在数学上等价于并联 2 阶全极点模态滤波器组，从而把可并行训练的结构与经典板综合联系起来，矩阵铅笔引导的特征值初始化在合成与频率衰减辨识上改善了起点，增益仍是短板。

论文特有的误解需要澄清，一是把取虚部当成随意选择，实际上它是与实数权重配合实现实数指数衰减正弦求和的关键，二是把矩阵铅笔估计当成最终答案，实际上它只是提供起点，后续仍靠梯度拟合 refined，三是把隐藏规模大等同于物理模态数，实际上隐藏状态包含冗余，需要剪枝或降阶才能得到紧凑参数集。总体趋势不等于每组每步都成立，最小规模离群与增益退化就是提醒。

后续验证应补真实录制、感知评价、延迟与成本测量，以及更稳健的增益约束，只有这些补齐后才能从基准拟合走向可部署的虚拟模拟产品。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=2)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=3)

[![原文数学表达区域 15，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=4)

[![原文数学表达区域 16，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=5)

[![原文数学表达区域 17，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=5)

[![原文数学表达区域 18，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=5)

[![原文数学表达区域 19，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=5)

[![原文数学表达区域 20，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=5)

[![原文数学表达区域 21，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=5)

[![原文数学表达区域 22，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=5)

[![原文数学表达区域 23，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-23.png)

区域 23 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=6)

[![原文数学表达区域 24，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-24.png)

区域 24 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=6)

[![原文数学表达区域 25，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-25.png)

区域 25 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=6)

[![原文数学表达区域 26，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/2bb14a021e97/figure-26.png)

区域 26 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf#page=6)

另有 36 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
