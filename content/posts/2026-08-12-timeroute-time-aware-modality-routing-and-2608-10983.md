---
title: "TimeRoute: Time-Aware Modality Routing and Diffusion for Multi-Modal Recommendation"
date: 2026-08-12
draft: false
tags: [扩散模型, 端到端, 模型评估]
categories: [论文速递]
description: "扩散模型 | 6.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.10983"
---

# 📄 TimeRoute: Time-Aware Modality Routing and Diffusion for Multi-Modal Recommendation

标签：#扩散模型 #端到端 #模型评估

**6.5/10** | 创新 1.4/2 | 严谨 1.1/1.5 | 实验 1.1/1.5 | 清晰 0.6/1 | 影响 0.4/1.5 | 开源 1/1.5 | 复现 0.1/0.5 | 工程 0.8/1.5

✅ **6.5/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #扩散模型 | #端到端 | #模型评估 | [arxiv](https://arxiv.org/abs/2608.10983)


### 👥 作者与机构

- 第一作者：Pengyu Zhang（University of Amsterdam, Amsterdam, The Netherlands）
- 通讯作者：未说明
- 作者列表：Pengyu Zhang（University of Amsterdam）、Yangqin Jiang（University of Hong Kong）、Klim Zaporojets（Aarhus University）、Congfeng Cao（University of Amsterdam）、Paul Groth（University of Amsterdam）

### 💡 毒舌点评

这篇工作的核心卖点是“模态时间尺度不匹配”——不同模态的相关性随时间以不同速率漂移，同一用户在不同时间上下文需要不同的模态融合比例。这个观察有真实场景支撑，且把时间信号同时注入模态级路由和扩散图重构，形成双层互补机制，比简单给DiffMM加时间特征更有想法。实验证据链在推荐论文中算比较完整：10种子配对t检验、时间输入vs噪声输入对照、用户分层路由分析、组件消融和噪声鲁棒性都做了。但短板也明显：时间切分实验只对比DiffMM一个基线，无法支撑“对时间分布漂移特别稳健”的强结论；关键超参数、权重取值和更多配置被放到匿名仓库和附录，正文复现信息不独立；此外本文核心是电商/短视频多模态推荐，与语音、音乐、音频方向读者的直接相关性有限。

### 📌 核心摘要

1. 论文解决多模态推荐中“模态相关性随时间非均匀漂移”的问题，称为“模态时间尺度不匹配”，具体表现为同一用户在不同时间上下文需要不同模态融合比例，且低相关模态更容易引入过时或误导信号。
2. 方法核心是TimeRoute框架，包含两个互补模块：时序感知模态路由器（两层MLP+softmax，输出每用户模态权重）和时间条件扩散图重构器（FiLM调制+双流长短期去噪头，重建各模态用户-物品图）。
3. 与DiffMM使用全局共享融合权重且条件上下文不含时间信息不同，TimeRoute将用户时序行为特征同时注入模态融合权重和扩散去噪条件，实现用户级和时间级的双重自适应。
4. 在TikTok、Amazon-Baby、Amazon-Sports上，R@20/P@20/N@20相对最强基线提升+4.92%~+9.80%（10种子配对t检验）；时间切分下N@20相对DiffMM提升+11.02%~+16.11%，R@20和P@20也均为正增长。
5. 实际价值在于为电商和短视频推荐提供一个可部署的时序感知多模态融合框架，匿名代码已公开，路由模块仅增加约610~643个参数。
6. 主要局限是路由依赖时间戳覆盖率，活跃用户可能收敛到近单模态权重（如TikTok图像权重可达0.83），且正文大量超参数依赖匿名仓库而非直接给出。

### 🔗 开源详情

- 开源状态：论文声明代码已公开，链接为 https://anonymous.4open.science/r/TimeRoute；附录也通过同一匿名仓库提供（TimeRoute_appendix.pdf）。
- 数据：实验使用TikTok、Amazon-Baby、Amazon-Sports三个公开数据集，数据来自DiffMM仓库（https://github.com/HKUDS/DiffMM/tree/main/Datasets）。
- 模型权重：是否发布模型权重未说明。
- 可复现资源：正文未给出全部超参数、训练环境和硬件配置；论文指向匿名仓库和附录。路由模块参数在Amazon-Baby/Amazon-Sports为610，TikTok为643。
- 受限项：10种子统计设置已在正文给出，但训练耗时、优化器、学习率、批大小等均未披露。

### 🏗️ 方法概述和架构

TimeRoute是一个端到端的多模态推荐系统。输入是用户-物品交互矩阵（每条交互带Unix时间戳）和物品原始多模态特征（文本、图像，TikTok还含音频），输出为Top-K推荐列表，通过用户最终嵌入\(\mathbf{h}_u\)与物品最终嵌入\(\mathbf{h}_v\)的内积进行评分。整体流程可分为三条并行再汇聚的流水线：共享特征投影与用户上下文构建、时序感知模态路由、时间条件扩散图重构，最后经GCN传播与路由融合产生推荐嵌入。

整体流程可分为三条并行再汇聚的流水线，如下图所示。

![Figure 2. Overview of TimeRoute. From each user’s interaction timestamps, a per-user temporal profile is constructed and fed into two parallel pathways.](https://arxiv.org/html/2608.10983v1/fig2.png)

图中展示了TimeRoute的整体架构，包括输入模态特征、用户时序配置文件的构建，以及两条核心路径：时序感知模态路由器和时间条件扩散图重构器，它们共同驱动图推荐框架生成最终推荐。


**1. 模态特征投影与用户上下文嵌入。** 每种模态\(m\)通过可学习线性投影器\(\phi_m\)（线性层+LeakyReLU）将原始模态特征\(\hat{\mathbf{f}}_v^m\)映射到共享\(d\)维空间，得到\(\mathbf{f}_v^m\)。用户上下文嵌入定义为\(\mathbf{u}=(\mathbf{E}_U)_u+\mathbf{r}_u\mathbf{E}_V\)，即用户ID嵌入加上该用户交互过的物品ID嵌入之和，作为后续扩散去噪器的时间调制目标。

**2. 用户时序配置文件构建。** 对每个用户从交互时间戳中提取12个原始时序字段，分为三组：长期上下文（global_days、user_days、year_offset、month）、短期上下文（delta_log、delta_bucket、pos_norm、weekday、hour、is_weekend）和辅助字段（day_of_month、unix_timestamp）。聚合采用recency加权平均，权重与交互位置成正比，使近期交互影响更大。循环字段（month、day、weekday、hour）采用sin-cos平均后角度重建，避免23:00与01:00被平均为12:00的周期边界错误。该配置产生两种向量形式：16维路由器输入（8维循环字段sin/cos对、4维连续字段归一化、delta_log与pos_norm裁剪至\([0,1]\)的2维、is_weekend的2维one-hot）和12维原始形式供扩散条件器使用。

**3. 时序感知模态路由器。** 路由器是一个两层MLP（\(16\to32\to|\mathcal{M}|\)）加softmax，输入16维时序配置，输出每用户模态权重\(\mathbf{w}_u\)。初始化时第二层权重和偏置置零，使初始输出为均匀分布，防止训练早期路由决策过于激进。为防止模态坍塌，设置权重下限\(\epsilon=0.05\)，重标定为\(w'_{u,m}=\epsilon+(1-|\mathcal{M}|\epsilon)w_{u,m}\)，保持simplex约束。用户侧融合采用个性化权重\(\mathbf{e}_u^{\mathrm{fuse}}=\sum_m w'_{u,m}\mathbf{e}_u^m\)；项目侧融合采用全局学习权重\(\boldsymbol{\beta}=\mathrm{Softmax}(\tilde{\boldsymbol{\beta}})\)，因为项目没有类似用户的时序上下文信息。路由器还配备多样性正则化\(\mathcal{L}_{\mathrm{div}}=\frac{1}{|\mathcal{B}|}\sum_u H(\mathbf{w}_u)-H(\frac{1}{|\mathcal{B}|}\sum_u\mathbf{w}_u)\)，鼓励每个用户有置信路由，同时阻止批次级退化为全局均匀或全局单模态分布。

**4. 时间条件扩散图重构器。** 每个模态\(m\)有独立去噪器\(D_{\theta_m}\)，采用DDPM框架对用户交互向量\(\mathbf{x}_0=\mathbf{r}_u\)加噪再重建。与DiffMM的关键区别是条件注入：去噪器的时间调制上下文由FiLM机制产生。12维时序字段先经过field-level编码器——连续字段用线性层、循环字段用sin/cos表示、delta_bucket用embedding表——随后按时间尺度分别送入长期流MLP和短期流MLP，得到\(\mathbf{h}_u^{\mathrm{long}}\)和\(\mathbf{h}_u^{\mathrm{short}}\)。每个流通过线性头生成FiLM参数\((\gamma_u^s,\beta_u^s)\)，其中\(\gamma=\mathbf{1}+\mathrm{ELU}(\cdot)\)、\(\beta=\tanh(\cdot)\)，保证初始为恒等变换。调制后的用户上下文\(\mathbf{u}^s=\mathbf{u}\odot\gamma_u^s+\beta_u^s\)分别作为两个去噪流条件，得到两个重建\(\hat{\mathbf{x}}_0^{m,\mathrm{long}}\)和\(\hat{\mathbf{x}}_0^{m,\mathrm{short}}\)，再通过门控\(\alpha_u=\sigma(\mathrm{MLP}_{\mathrm{gate}}([\mathbf{h}^{\mathrm{long}},\mathbf{h}^{\mathrm{short}},\mathbf{e}_t]))\)加权合并。这种双流设计使去噪器能根据用户当前行为状态在长期稳定模式和短期快速动态之间插值。

**5. 模态对齐正则化与时间加权损失。** 去噪器不直接接收模态特征矩阵\(\mathbf{F}^m\)，而是通过对齐正则化\(\mathcal{L}_{\mathrm{align}}^m=\mathbb{E}_u[\|\hat{\mathbf{x}}_{0,u}^m\mathbf{F}^m-\mathbf{x}_{0,u}\mathbf{E}_V\|_2^2]\)将重建向量投影到模态特征空间，与观测交互的ID嵌入摘要对齐。扩散重建损失采用时间重加权形式：\(\mathcal{L}_{\mathrm{diff}}^m=\mathbb{E}[w_{\mathrm{snr}}(t)\cdot(1+\lambda_t\cdot\mathrm{pos\_norm}_u)\cdot\|\mathbf{x}_0-\hat{\mathbf{x}}_0^m\|_2^2]\)，其中\(\mathrm{pos\_norm}_u\)为最近交互的归一化recency，使去噪器优先保证近期交互的重建质量。

**6. 图组装与GCN推荐。** 训练好的去噪器通过反向扩散采样\(\hat{\mathbf{x}}_0^m\)，对每个用户取top-K预测物品作为边，组装模态特定重构图\(\hat{\mathbf{R}}^m\)。每个模态的嵌入由两个传播分支组合：在基础交互图\(\mathbf{R}\)上做两步LightGCN传播、以归一化模态特征为初始化，得到\(\mathbf{e}^{m,\mathrm{base}}\)；在重构图\(\hat{\mathbf{R}}^m\)上做一步传播、以ID嵌入\([\mathbf{E}_U;\mathbf{E}_V]\)为初始化，得到\(\mathbf{e}^{m,\mathrm{rec}}\)；组合为\(\mathbf{e}^m=\mathbf{e}^{m,\mathrm{base}}+\lambda_{\mathrm{adj}}\mathbf{e}^{m,\mathrm{rec}}\)。模态融合后经\(L\)层GCN并加残差连接得到最终嵌入。

**7. 三阶段训练调度。** 每个epoch分三阶段：第一阶段只更新去噪器侧参数（时序编码器、FiLM头、去噪MLP），用\(\sum_m(\mathcal{L}_{\mathrm{diff}}^m+\lambda_e\mathcal{L}_{\mathrm{align}}^m)\)；第二阶段用更新后的去噪器采样并组装图；第三阶段更新剩余参数（ID嵌入、投影器、全局\(\boldsymbol{\beta}\)、路由器），用\(\mathcal{L}_{\mathrm{BPR}}+\lambda_{\mathrm{cl}}\mathcal{L}_{\mathrm{CL}}+\lambda_{\mathrm{div}}\mathcal{L}_{\mathrm{div}}+\lambda_{\mathrm{reg}}\|\Theta\|^2\)。设计动机是隔离扩散图生成与排序优化；对比学习视图不经过路由器，防止对比学习偏好均匀权重而破坏个性化路由。

### 💡 核心创新点

1. **问题定义创新：模态时间尺度不匹配。** 明确将“不同模态相关性随时间以不同速率漂移”建构成独立问题，并拆分为两个子挑战：用户在不同时间上下文需要不同模态融合比例；低相关模态更容易携带过时信号。巧克力消费在情人节前后从文本成分线索转向视觉包装和氛围音频的例子，直观且有说服力。
2. **时序感知模态路由器。** 用16维时序行为特征作为输入，通过MLP+softmax产生每用户模态权重，替换DiffMM的全局共享融合权重。权重下限、零初始化、多样性正则化分别处理模态坍塌、训练不稳定和全局均匀收敛问题。噪声输入对照实验证明增益来自时间信号而非MLP容量。
3. **FiLM调制+双流长短期去噪头的时间条件扩散重构。** 将扩散去噪器的条件从时间不变的单一用户上下文升级为long/short双流FiLM调制上下文，并用门控合并两路重建。这使重构图能根据用户近期行为模式抑制过时模态边。
4. **时间加权扩散重建损失。** 以\((1+\lambda_t\cdot\mathrm{pos\_norm}_u)\)系数对近期交互样本赋予更高重建权重，直接锚定“时间前沿最可能产生误导信号”的问题。
5. **对比学习梯度隔离。** 对比学习视图不走路由器，避免CL目标将个性化权重拉向均匀分布。这是保证路由器和排序目标一致的重要工程细节。
6. **噪声鲁棒性验证。** 在非对称模态噪声（图像噪声0.5、文本噪声0.1）下，TimeRoute相对NoTime的优势从+0.0045扩大到+0.0052，支持“自适应路由降低对噪声模态暴露”的机制假设。

例如，下图通过巧克力购买的例子直观说明模态时间尺度不匹配现象。

![Figure 1. An example of modality time-scale mismatch. The same user purchasing chocolates relies primarily on textual cues such as ingredients during normal…](https://arxiv.org/html/2608.10983v1/fig1.png)

图中对比了正常时期（Scenario A）用户更依赖文本成分线索，与情人节（Scenario B）转向视觉包装和氛围音频，表明同一用户在不同时间上下文需要不同的模态融合比例。

### 📊 实验结果

**表：随机分割下TimeRoute与最强基线对比**

| 数据集 | 最强基线（按指标） | 最强基线 R@20/P@20/N@20 | TimeRoute R@20/P@20/N@20 | Δ R/P/N |
|---|---|---|---|---|
| TikTok | DiffMM（R/P）/ KDiffE（N） | 0.1129/0.0056/0.0460 | 0.1208/0.0059/0.0493 | +7.00%/+5.36%/+7.17% |
| Amazon-Baby | DiffMM | 0.0975/0.0051/0.0411 | 0.1023/0.0056/0.0451 | +4.92%/+9.80%/+9.73% |
| Amazon-Sports | KDiffE | 0.1020/0.0056/0.0460 | 0.1094/0.0059/0.0496 | +7.25%/+5.36%/+7.83% |

时间切分（Chronological Split）下，论文仅报告了TimeRoute相对DiffMM的相对提升，未给出绝对数值。N@20提升最大：TikTok +16.11%，Amazon-Baby +11.02%，Amazon-Sports +12.59%；R@20和P@20在三个数据集上均为正增长。

噪声输入消融（Amazon-Baby，RQ2）：时间输入路由器R@20=0.1023±0.0005，显著优于随机噪声输入0.0953±0.0007（p<0.001）；噪声输入与无路由器0.0955±0.0004无显著差异（p=0.50），证明增益来自时间语义信号而非MLP容量。

用户分层路由分析（RQ3）：Amazon-Baby中图像权重从Q1（最稀疏）的0.524升至Q4（最活跃）的0.588，相对提升12.2%；TikTok中图像权重从Q1的0.599升至Q4的0.830，同时文本和音频权重从约0.20降至0.09以下；TikTok的活动用户路由权重标准差从0.363降至0.194，路由熵从0.650降至0.476，说明活跃用户趋向置信的图像主导路由，稀疏用户保留多模态不确定性。

组件消融（RQ4）相对R@20下降：w/o Modal Router在Baby -3.71%、TikTok -3.56%、Sports -2.93%；w/o Dual-Stream在Sports -3.29%、TikTok -4.06%；w/o Time-Weight在Baby -3.62%；w/o FiLM下降-2.19%~-2.93%。任一单组件移除后模型仍高于最强基线（Baby 0.0985 vs DiffMM 0.0975，Sports 0.1058 vs KDiffE 0.1020，TikTok 0.1159 vs DiffMM 0.1129）。

**表：噪声鲁棒性（Amazon-Baby R@20，10种子均值）**

| 配置 | Ours | NoTime | Ours−NoTime |
|---|---|---|---|
| Clean | 0.1023 | 0.0978 | +0.0045 |
| img_noisy（图像噪声0.5） | 0.1020（-0.29%） | 0.0967（-1.12%） | +0.0053 |
| txt_noisy（文本噪声0.5） | 0.1007（-1.56%） | 0.0962（-1.64%） | +0.0045 |
| Mixed（图像0.5+文本0.1） | 0.1019（-0.39%） | 0.0967（-1.12%） | +0.0052 |

### 🔬 细节详述

- 训练数据：TikTok、Amazon-Baby、Amazon-Sports三个公开数据集，来自DiffMM仓库；TikTok用户数为9,308，Amazon-Baby用户数为19,445；Amazon-Sports时间戳覆盖率为63%。数据集完整规模、交互数、稀疏度等正文未给出，指向附录。
- 模态设置：Amazon-Baby和Amazon-Sports为{图像、文本}，TikTok为{图像、文本、音频}。
- 损失函数：BPR排序损失（\(\mathcal{L}_{\mathrm{BPR}}\)）+多视角对比损失（\(\mathcal{L}_{\mathrm{CL}}\)，继承自DiffMM但不流经路由器）+每模态扩散重建损失（\(\mathcal{L}_{\mathrm{diff}}^m\)，时间加权）+模态对齐损失（\(\mathcal{L}_{\mathrm{align}}^m\)）+路由器多样性正则化（\(\mathcal{L}_{\mathrm{div}}\)）+L2权重衰减（\(\lambda_{\mathrm{reg}}\|\Theta\|^2\)）。\(\lambda_{\mathrm{cl}}\)、\(\lambda_e\)、\(\lambda_{\mathrm{div}}\)、\(\lambda_t\)、\(\lambda_{\mathrm{reg}}\)按数据集调优，具体数值在正文中未给出。
- 训练策略：三阶段每epoch调度，阶段1更新去噪器侧参数，阶段2采样组装图，阶段3更新ID嵌入、投影器、路由器等剩余参数。学习率、warmup、batch size、优化器、训练轮数等正文未说明。
- 关键超参数：路由器维度\(16\to32\to|\mathcal{M}|\)，权重下限\(\epsilon=0.05\)，共享嵌入维度\(d\)、GCN层数\(L\)、扩散时间步数\(T\)、图组装top-K边数、\(\lambda_{\mathrm{adj}}\)、\(\lambda_{\mathrm{res}}\)等均未在正文给出，指向开源代码。
- 模型开销：路由器参数在Amazon-Baby/Amazon-Sports上为610，在TikTok上为643。扩散采样步数、训练耗时、硬件配置均未报告。
- 统计设置：10种子（1、7、42、123、456、666、789、888、999、2026），配对双尾t检验，p<0.05。
- 正则化与稳定训练技巧：路由器权重下限；FiLM参数化\(\gamma=\mathbf{1}+\mathrm{ELU}(\cdot)\)、\(\beta=\tanh(\cdot)\)保证初始为恒等变换；路由器第二层零初始化；循环字段sin-cos编码；扩散损失使用SNR权重\(w_{\mathrm{snr}}(t)\)；L2权重衰减。

### ⚖️ 评分理由

*   创新性 (1.4/2)：[A_METHOD] 将模态时间尺度不匹配建模为独立问题，提出时序感知路由器+FiLM双流扩散重构的双层时间自适应机制；[A_RESULTS] 噪声输入对照与R Q2验证路由器增益来自时间信号而非MLP容量；[A_LIMITS] 虽依赖时间戳覆盖率，但整体问题定义和机制组合具新意。

*   技术严谨性 (1.1/1.5)：[A_METHOD] 方法逻辑自洽：路由器用权重下限、零初始化、多样性正则化防止模态坍塌；[A_METHOD] FiLM参数化为恒等初始化、双流门控合并；[A_LIMITS] 时间切分仅对比DiffMM且无绝对数值，削弱时间稳健性声明的证据强度，但账本未显示算法推导错误。

*   实验充分性 (1.1/1.5)：[A_RESULTS] 10种子配对t检验、随机分割三数据集多指标对比、组件消融、噪声鲁棒性、用户分层路由分析均齐全；[A_LIMITS] 时间切分仅报告相对DiffMM提升而未给绝对值和更多基线，无法充分支撑对时间分布漂移特别稳健的结论。

*   清晰度 (0.6/1)：[A_SUMMARY] 正文未直接给出数据集规模、交互数、关键超参数与训练配置，使方法描述依赖匿名仓库和附录；[A_OPEN] 训练耗时、硬件等未披露。该维仅从文字呈现的完整度扣分，不涉及复现可行性。

*   影响力 (0.4/1.5)：[A_SUMMARY] 面向电商/短视频多模态推荐，语音、音乐、音频仅作为TikTok中的附带音频模态或控制信号，核心贡献属于推荐系统领域；[A_RESULTS] 虽在三个公开数据集有稳定提升，但对本速递音频读者直接相关性有限，影响力不超过0.5。

*   开源 (1.0/1.5)：[A_OPEN] 代码已公开（匿名链接），数据来自DiffMM公开仓库，附录也经同一仓库提供；但模型权重是否发布未说明，核心产物开放不完整，按固定锚点只能给1.0。

*   可复现性 (0.1/0.5)：[A_OPEN] 正文未给出完整超参数、训练配置、硬件与训练耗时，关键设置指向匿名仓库和附录；[A_METHOD] 即使代码可访问，论文正文的复现信息仍大量缺失，按披露充分性只能给0.1。

*   工程/实践价值 (0.8/1.5)：[A_METHOD] 路由模块仅增加610~643参数，[A_OPEN] 匿名代码与公开数据可部署；[A_LIMITS] 路由依赖时间戳覆盖率，活跃用户可能收敛到近单模态权重，且无部署延迟/推理成本数据，工程转化价值中等。

### 🚨 局限与问题

1. 论文在结论中明确承认的局限：
   - 路由依赖时间戳覆盖率；Amazon-Sports上重建级组件（双流、FiLM、时间加权）比路由器贡献更明显，说明时间戳不足时路由器的个性化增益受限。
   - 当单一模态占主导时（如TikTok视觉特征），活跃用户会收敛到接近单模态的权重（图像权重可达0.830），降低模态多样性；自适应路由降低了对被降权噪声模态的暴露，却增加了对主导模态的依赖。
   - 未来工作应考虑模态质量估计和序列推荐（modality-quality estimation and sequential recommendation）。
2. 从论文报告层面还存在的问题：
   - 时间切分实验仅与DiffMM对比，未报告绝对数值，只有相对提升，削弱“对时间分布漂移稳健”的结论强度。
   - 正文未完整给出数据集规模、交互数、关键超参数、训练配置等，需要依赖匿名仓库和附录；匿名链接和附录在长期可获取性上存在不确定性。

---

[← 返回 2026-08-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-12/)
