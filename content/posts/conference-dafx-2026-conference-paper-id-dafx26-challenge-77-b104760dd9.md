---
title: "Parameter Estimation via Differentiable Modal Plate Synthesis"
date: 2026-09-13
draft: false
description: "针对从单条合成脉冲响应估计薄板六参数的逆问题，论文用 PyTorch 可微模态合成器加多尺度谱损失做推理时优化，以 500 次短探测加 1500 步精修的两阶段策略应对非凸，在 8 条响应上把平均归一化均方误差降到 4.29×10-3 量级，代价是平均每条约 13.42 分钟的优化时间。"
tags: ["信号处理", "离线推理", "音频理解"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_challenge_77"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a4bf559c63877646b4cab6b04610e5b8fca2a7d6786a83fd173a6ad2536d2333"
paper_digest_api_reader_plan_sha256: "d4e587413a7e2b366a50651dbceb913df549cf57daa1eb47af012a0966b9918a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "82018cae51539e24380139c6d38528d6a4043b94523fd479bdc3155d3cbe2667"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "ec3916b651da05911f4adc8a23e5d0dbf5a8262590bad52a842f03cc726b3a37"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "808a0363c5a1997748267261a4d078d3ae1b18d116a3eb2a58ccf0dcb8f12d41"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "355002cd9ee6ea7edd829d41127116600e421c5903e9d90f324b3560f9c7d9e3"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"setting","id":"setting.offline-inference","label":"离线推理"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"}]
paper_digest_primary_task: "音频理解"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 用可微模态合成反推薄板参数：两阶段梯度搜索如何绕开非凸陷阱

> 英文题目：*Parameter Estimation via Differentiable Modal Plate Synthesis*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_challenge_77`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf)

标签：#信号处理 #离线推理 #音频理解

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Filippo Garofalo：机构信息未能从会议 PDF 纯文本可靠映射
- Alessandro Antonio Lillo：机构信息未能从会议 PDF 纯文本可靠映射
- Alessandro Ilic Mezza：机构信息未能从会议 PDF 纯文本可靠映射
- Riccardo Giampiccolo：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

任务是从单条5秒合成板脉冲响应反推6参数子集\(S=\{\mu, D/\mu, T_0/\mu, L_y, x_o, y_o\}\)，其中\(\mu=\rho h\)为面密度，难点是模态密集交叠、频率相关阻尼与参数强耦合使损失高度非凸。方法先由可微分模态合成器将6个无约束代理变量经Sigmoid双射映射为物理参数，并行合成全带脉冲以保留物理可解释性并实现端到端反传。再由多尺度频谱损失在7个短时傅里叶变换尺度上计算幅值与对数幅值误差，强调大谱差与低能量晚期衰减，输出标量目标供优化。接着两阶段优化承接该目标：500点拉丁超立方采样多起点在截断时长与低频上限下短跑筛选最优初值，再以时长课程从0.05秒渐增至3秒精修。与粒子群优化基线的关键差异是用白盒物理梯度替代无梯度种群搜索，直接沿可微分合成器反传更新物理参数。在8条官方生成器合成数据的Task A评测设置下，DMPS的NMSE指标为4.29 × 10−3，低于PSO基线的NMSE指标3.98×10−2。该结论适用边界限于无噪声合成、固定边界与已知激励观测，实测失配与噪声鲁棒性尚未验证。其推理开销为单条脉冲平均13.42分钟，所用硬件为含RTX 5070 Ti显卡的工作站。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，为什么值得做反推？

本文的输入是一条合成的薄板脉冲响应，采样率 44100 赫兹，时长 5 秒，由官方挑战数据集生成器按预定参数范围随机采样产生。目标是从这条响应反推出 6 个物理参数构成的集合，记为面密度、刚度相关量、张力相关量、板宽和激励与接收位置。固定已知的是板长 1.0 米、泊松比 0.25 等条件，以及激励点位置的比例关系。输出就是这 6 个量的估计值，用归一化均方误差衡量好坏。

对于刚进入音频的研究生，关键依赖是先分清正问题与逆问题。正问题是从参数合成声音，薄板建模已有成熟做法。逆问题是从声音回到参数，难点在于薄板模态密集重叠、阻尼随频率变化、参数之间强耦合，稍动一个参数，频谱峰位和衰减同时变化，损失地貌高度非凸。直接把波形丢给通用回归模型，往往学到的是数据集捷径而非物理对应。论文选择白盒路线：把物理合成器本身放进可微流程，每个可训练变量都对应可测量的物理量，估计结果天然可解释。

本解读只讲该论文实际做的任务 A，即合成数据上的六参数估计，不扩展到实测板或完整 12 参数。后续所有方法细节都围绕一条样本如何走完输入表示、合成组件、损失目标再回到参数更新展开。

### 已有路线如何处理这类物理参数估计？

论文把相关工作归为 3 条路线。第一条是数据驱动的直接回归，例如用深度网络从观测估计物理模型参数，优点是 1 次前向即可推理，缺点是需要大量标注且物理一致性不易保证。第二条是无梯度搜索，以粒子群优化为代表，靠种群中个体历史最优与群体最优来迭代更新候选解，不需要梯度，但原文指出其在高维非凸、多局部极小下难以有效扩展。第 3 条是可微数字信号处理与白盒建模，把有物理动机的模型嵌入学习算法的前向，用反向传播估计参数，变量即物理量。

**粒子群优化 × 梯度优化：** 粒子群优化负责在物理参数空间中用种群协作做无梯度搜索，不依赖可导模型但在高维非凸下扩展性差，梯度优化负责沿可微合成器的反向梯度方向迭代修正参数，依赖模型可导但能利用局部几何，二者在本文中构成同任务同输入下的对照路线，组合意义在于检验白盒可微建模相对无梯度搜索是否带来可复现的精度增益。

在混响与乐器方向，已有工作把该思想用于可微反馈延迟网络、散射延迟网络和电路虚拟模拟，也有点对弦、膜、板的可微模态仿真。本文的继承点很具体：沿用模态合成的物理结构，但为挑战任务重写了一个 PyTorch 可微版本，并配 2 阶段优化来处理非凸。理解这层继承有助于定位本文贡献不是提出新板理论，而是构造可稳定反向的合成实现与可复现的搜索流程。

### 薄板正向模型把参数变成声音的哪几步？

物理上，一块长宽为 Lx 乘 Ly、厚度为 h 的薄矩形板，其横向位移受阻尼基尔霍夫勒夫方程支配，包含体密度、面内张力、抗弯刚度、与频率无关和有关的损耗系数。原文在简支边界下给出解析模态振型，为 2 个方向正弦函数的乘积并带归一化系数。每个模态有自己的角频率，由张力项加刚度项再除以质量项开方得到，模态指标越大频率越高。每个模态坐标满足阻尼谐振子方程，损耗系数随模态频率平方增长。

离散时间采用精确全极点双 2 阶离散化，模态增益与激励点和接收点的振型值、采样间隔、面密度和板面积有关。全部待辨识与固定参数共 12 个，任务 A 只估计其中 6 个。沿一个样本看，正向链条是六参数加已知固定量决定全部模态频率与衰减，再决定每个模态的时间序列，最后叠加成一条脉冲响应。逆向的困难也在这里：频率公式中面密度、刚度、张力以比值形式耦合，改变其中一个会被另一个部分补偿，形成外观相似但参数不同的局部解。

### 方法全景：一条响应如何走完合成到更新？

对一条目标响应，方法先随机给出六参数的一个猜测，送入可微模态合成器生成预测响应，再用多尺度谱损失比较预测与目标的时频幅度差异，误差经反向自动微分回传到 6 个无约束代理变量，用 Adam 更新代理值，经映射得到新的物理参数，进入下 1 次前向。如此循环直至完成规定步数。整个环路没有训练神经网络，训练的是合成器自身的物理参数，属于推理时优化。

为稳定该循环，论文做了三处全景级安排。第一是固定模态网格上界为 110 乘 439，这是对全部合法参数范围求最坏情况得到的上限，避免每步按当前参数动态增删模态导致计算图拓扑变化。第二是全程双精度计算，以容纳模态幅度的宽动态范围。第三是分块累加模态求和，每 300 个模态累加 1 次梯度，避免 1 次性物化模态数乘时间点的大矩阵。这三点共同保证前向可并行、反向可执行、显存可承受。

### 合成器组件：如何并行算出全部模态贡献？

合成器的核心改写是不用递推逐点更新状态，而是推导阻尼谐振子在零时刻单位脉冲激励下的闭式解，直接写出每个模态在每个离散时刻的解析表达式，再对所有满足频率上限的模态求和得到输出。这种写法把时间和模态两个维度都并行化，适合 GPU 加速。实现上先按当前参数算出全部候选模态频率，再用布尔掩码丢弃超过上限的模态，只保留有效模态进入求和。

**模态合成 × 可微计算图：** 模态合成负责把薄板振动写成多个独立阻尼谐振子叠加，给出从物理参数到脉冲响应的正向映射，可微计算图负责让该映射的每一步都可求导并保留梯度路径，二者搭配的理由是只有正向物理可导，反向才能用梯度直接更新物理量，组合后新增的作用是把参数估计变成对合成器参数的端到端反向传播，而非训练黑盒网络。

固定上界的代价是每步会算一些当前参数下超限的无效模态，但换来的是图结构恒定，收敛行为更稳定。论文明确报告动态重算上下界曾观察到不一致的收敛，这是保留固定上界的经验依据。初学者容易误以为模态越多越好，实际这里的上限是按参数空间极值解析求得的最坏情况，不是随意截断，目的是在任何合法参数下都不漏掉应有模态。

### 参数映射：跨量级物理量如何被安全更新？

6 个物理量量级差异大且有盒式约束，直接在物理域用统一步长更新会顾此失彼。论文为每个物理量引入无约束代理，经可微双射映射回物理区间。对数分布的面密度与两个比值用对数 Sigmoid 映射，先在对数区间内插再取指数，线性分布的板宽与两个位置用线性 Sigmoid 映射。两种映射都光滑严格单调，任何代理取值都落在合法区间且梯度有定义。斜率系数对两个比值取 2，其余取 1。

**无约束代理变量 × Sigmoid 映射：** 无约束代理变量负责在实数域上自由接受梯度更新，避免带框约束优化的截断，Sigmoid 映射负责把代理值单调光滑地压缩到挑战规定的物理区间内，对数型用 log-sigmoid 处理跨量级参数，线性型用 linear-sigmoid 处理长度与位置，二者搭配保证任何代理取值都对应合法物理值且梯度处处有定义。

这个设计把约束满足从优化器侧移到模型侧，Adam 只管在无界空间走，物理合法性由映射保证。复现时必须保留该映射的单调性与上下界取自挑战表 1 的规定，否则归一化误差的分母口径会变化，结果不可比。论文未报告去掉映射后的对照，因此不能断言无映射必然发散，只能说映射是本文稳定性的显式手段。

### 没有网络训练时，优化器到底在算什么？

本研究没有训练神经网络权重，无训练集拟合阶段，真实计算是针对每条测试响应的推理时梯度优化。监督来源是目标响应本身经短时傅里叶变换得到的多尺度幅度谱，损失由线性幅度误差与对数幅度误差两项组成，前者惩罚大谱差，后者强调低能量晚期衰减，7 个窗长取平均。梯度路径是从损失经可微合成器的模态频率、衰减、增益回传到 6 个代理变量，全程反向自动微分，无停止梯度设计。

**多尺度谱损失 × 对数幅度项：** 多尺度谱损失负责在 64 到 4096 共 7 种窗长下比较预测与目标短时傅里叶幅度，捕捉从瞬态到晚期混响的不同时间频率结构，对数幅度项负责放大低能量晚期衰减部分的误差权重，二者搭配的理由是大峰值易主导线性幅度误差而掩盖衰减失配，组合后使优化同时对齐强共振峰和弱尾部。

**多起点探测 × 全尺度精修：** 多起点探测负责用拉丁超立方采样的 500 个初值各做 100 步短优化来广泛探索损失地貌，全尺度精修负责从最优候选出发用 1500 步拟合全频带和更长时长的响应，前者分工是避开单个随机初值落入局部极小的风险，后者分工是利用已对齐的宏观结构细化高频细节与衰减，组合构成先探索后利用的 2 阶段策略。

具体执行分 2 个阶段。第一阶段多起点探测用拉丁超立方采样 500 个初值，每个做 100 步 Adam 短跑，学习率对面密度等取 0.01，对两个比值取 0.05，只用 0.2 秒截断响应、3 种窗长和 2500 赫兹频率上限，聚焦低频宏观对齐，梯度范数裁剪到 1，损失长期高于 1 提前终止，任一候选低于 0.4 则提前结束本阶段。第 2 阶段从最优候选出发做 1500 步全频带优化，上限回到 10000 赫兹，7 种窗长全开，时长课程从 0.05 秒渐增到 3 秒，先对瞬态再拟晚期衰减，学习率统一 0.01 并配无改善 500 步后降 10 倍的调度，最低到 0.0001。重置时机只在新响应开始时重采样，不在单条优化中途重设最优。

### 实验条件：数据、基线与指标口径是否一致？

评估用官方生成器合成的 8 条脉冲响应，参数在预定范围内均匀采样，固定条件与任务 A 一致，时长 5 秒。对比对象有两个，一是常数预测器，恒输出每参数容许区间中点，二是挑战组织方提供的粒子群基线。硬件为单工作站，中央处理器为锐龙 9 加 32 吉内存，显卡为 16 吉显存的 5070Ti 级别，用于承载并行模态计算与反向。

指标为归一化均方误差，对六参数各自用估计减真值平方再除以区间宽度平方，最后平均，使不同量级参数贡献可比。方向是越小越好。公平性上，3 种方法面对同一批 8 条响应与同一区间口径，常数法无搜索，粒子群与本文方法都是按响应搜索，但搜索预算与实现不同，比较的是实际可运行策略的最终误差，而非事后挑选的最优步。资源状态方面，原文未绑定经验证的代码与数据链接，本解读不声称代码或数据已公开。

### 主结果：平均误差下降来自哪里，代价是什么？

要回答的核心问题是可微梯度路线相对常数猜测与无梯度搜索是否带来稳定增益，以及增益是否被少数困难样本主导。指标方向是归一化均方误差越小越好，条件是同一 8 条合成响应与同一区间归一化。

| 方法 | 平均误差量级 | 对比基线 | 样本规模 | 适用条件 |
| --- | --- | --- | --- | --- |
| 常数中点预测 | 4.61×10-2 | 无搜索 | 8 条合成响应 | 同区间归一化 |
| 粒子群基线 | 3.98×10-2 | 无梯度搜索 | 8 条合成响应 | 同区间归一化 |
| 可微模态合成器 | 4.29×10-3 | 梯度优化 | 8 条合成响应 | 同区间归一化 |
| 5 条精确恢复样本 | 2.22×10-11 到 1.08×10-6 | 逐条误差范围 | 5 条 | 同上 |

上表显示本文方法平均误差比两基线低约一个数量级，报告的原句支持该量级判断。但平均数主要由 3 条困难样本抬高，5 条成功样本的误差已到极小量级，每参数至少 3 位有效数字与真值一致。表后需要强调的代价是时间：2 阶段流程处理 8 条共需约 1.79 小时，平均每条约 13.42 分钟，远高于常数法的零成本。未胜出项是第二条响应，其误差与粒子群相当，并未拉开差距，说明增益不是在每条上均匀成立。

### 失败条件：剩下三条为什么卡在同一组参数？

要检验的反证是方法在何处失效，以及失效是否随机。论文对 3 条困难样本做了逐参数对照，发现误差集中在面密度与两个比值构成的子集，而板宽与位置多数仍准确。第二条低估面密度但其余接近真值，第七条高估张力比近 5 倍，第六条则三者兼有偏差。这支持参数耦合导致局部极小的解释，但属于有限解释而非因果证明，因为未做去掉某组件的消融。

| 维度 | 总耗时 | 平均每条 | 成功样本数 | 困难样本特征 |
| --- | --- | --- | --- | --- |
| 时间换算 | 约 1.79 小时 | 约 13.42 分钟 | 3 位有效数字 | 位置多仍准确 |
| 评估规模 | 8 条响应 | 单工作站 | 8 条 | 3 条抬高平均 |
| 对照 | 常数与粒子群 | 同条件 | 同指标 | 非均匀增益 |

上表把成本与分布放在一起看，主要收益是 5 条的高精度，代价是全流程耗时与 3 条未脱离局部解。论文未报告噪声鲁棒性、不同采样数或去掉课程与裁剪后的变化，这些缺项不能用模型名称推定，复现时应视为待验证边界。尤其不能把合成数据上的精度直接推广到实测板，因为模型失配尚未评估。

### 哪些结论不能从当前证据推出？

首先，平均一个数量级的说法依赖 8 条合成样本与特定区间归一化，换区间或换采样分布，数值会变，不能当成通用加速比。其次，困难样本指向面密度与刚度张力比的耦合，但论文没有测量误判率、延迟分解或去掉 2 阶段某一步的对照，因此不能说 2 阶段的哪一步是必要条件，只能说完整流程在给定预算下得到该结果。第三，实验全在无噪声合成上完成，未测测量噪声与真实板的边界条件偏差，实测适用性为待验证。

还需要区分资源概念：论文报告的是推理时优化耗时与双精度显存管理，不涉及神经网络训练资源与推理帧率，总体趋势不等于每步都单调下降，调度器的降学习率动作本身说明中途存在平台期。缺失证据不是技术错误，相关性也不是因果，阅读时用报告显示表达直接数字，用支持表达耦合解释，用可能表达推广到实测的猜测。

### 复现先做什么，才能对齐口径？

第一步是拿到或重写官方生成器，按任务 A 固定板长、泊松比与激励比例生成 5 秒 44.1 千赫兹响应，并记录每参数的上下界，因为归一化误差的分母直接依赖该表。第二步是实现可微合成器，固定模态上界 110 乘 439，用掩码保留有效模态，用闭式脉冲解并行求和，分块 300 累加梯度，全程双精度。第三步是实现代理加 Sigmoid 映射，保留原文的对数与线性区分及斜率取值。第四步是实现七尺度谱损失，窗长覆盖 64 到 4096，跳长 1/4 窗，加汉宁窗，含线性与对数两项。

第五步是复刻 2 阶段预算：500 起点拉丁超立方采样、短跑 100 步加截断与降频、精修 1500 步加时长课程与学习率调度、梯度裁剪为 1。先在一条响应上跑通全环，再扩展到 8 条并记录总耗时与平均耗时。核对时逐项比对数据集、基线、阶段、指标、单位与聚合对象，数值相同不代表指标相同，特别注意归一化是在区间宽度平方下平均。若资源不可达，应明确写本次未能确认可达，不虚构公开状态。

### 何时值得尝试这种白盒反推？

当正向物理明确、可写出模态解析式，且估计结果需要对应可测量物理量时，白盒可微路线值得尝试，它把领域知识变成梯度可用的结构，本文在合成板上展示了相对粒子群的精度优势。当需要毫秒级实时或大批量处理时，本文平均每条十余分钟的成本不可接受，更适合离线标定而非在线效果器。当数据含强噪声或真实边界偏离简支假设时，应先补噪声与失配验证，再谈部署收益。

对初学者的可复述要点是：输入单条响应，经固定上界的可微模态合成得到预测，经多尺度谱损失得到误差，经反向传播更新无约束代理，经映射得到物理参数，经 2 阶段搜索避开部分局部极小，最终在多数合成样本上精确恢复，少数样本仍卡在面密度与比值耦合处。记住该链条的每个环节都有原文给出的安排理由，改动任一环节都需重新报告条件与代价。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=2)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/cb64cdd5cd2a/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf#page=3)

另有 21 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
