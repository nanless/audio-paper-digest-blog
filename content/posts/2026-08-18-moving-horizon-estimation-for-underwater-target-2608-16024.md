---
title: "Moving Horizon Estimation for Underwater Target Tracking Based on Time-Difference-of-Arrival Measurements"
date: 2026-08-18
draft: false
tags: [声源定位, 模型比较, 鲁棒性, 实时处理]
categories: [论文速递]
description: "声源定位 | 6.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.16024"
---

# 📄 Moving Horizon Estimation for Underwater Target Tracking Based on Time-Difference-of-Arrival Measurements

标签：#声源定位 #模型比较 #鲁棒性 #实时处理

**6.5/10** | 创新 0.9/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 清晰 0.9/1 | 影响 0.2/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 0.9/1.5

✅ **6.5/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #声源定位 | #模型比较 | #鲁棒性 #实时处理 | [arxiv](https://arxiv.org/abs/2608.16024)


### 👥 作者与机构

- 第一作者：Anton Tolstonogov（Institute for Systems and Robotics (ISR), LARSyS, Instituto Superior Técnico (IST), University of Lisbon, Portugal）  
- 通讯作者：未显式标注；论文给出作者邮箱  
- 作者列表：Anton Tolstonogov、David Cabecinhas、Pedro Batista、Antonio Pascoal（均为 Institute for Systems and Robotics (ISR), LARSyS, Instituto Superior Técnico (IST), University of Lisbon, Portugal）

### 💡 毒舌点评

论文在稀疏 TDoA 测量、离群值和较远初始化条件下，确实展示了 MHE 相比朴素 EKF 的显著鲁棒性优势；运行时间测试也表明该方法在 1 Hz 声学更新周期内具备实时可行性。但整体证据仍停留在 2D 合成仿真，基线只有 EKF，未与 UKF、粒子滤波、鲁棒 EKF 或带约束的滤波方案比较，也没有真实水下声学数据验证。精度 RMSE 的统计波动和离群值生成机制都未交代，落地工程证据偏弱。作为面向语音/音乐/音频领域读者的分析，其直接影响力更低。

### 📌 核心摘要

论文研究基于 TDoA 测量的水下目标跟踪问题，目标是在非线性目标运动、稀疏声学更新和不良初始化条件下提高估计鲁棒性。方法核心是将目标跟踪建模为集中式 Moving Horizon Estimation（MHE）问题，结合非完整运动模型和有界状态约束，通过滚动时域优化同时估计窗口内多个轨迹状态。MHE 代价包含到达项、运动学项和测量项，并对较旧数据施加指数时间折扣。  

实验在 2D 合成仿真中进行，覆盖 constant、UUV-like、whale-like 三类目标轨迹。结果表明，在 3 秒稀疏声学更新条件下，MHE 的位置 RMSE 在 2.50–6.55 m 范围内，而 EKF 常发散到 1427–17123 m。1 秒正常更新、近初始化条件下，EKF 在 constant 和 UUV-like 场景中的位置 RMSE 略优，但 MHE 在航向、线速度和角速度等状态上通常更稳定；whale-like 场景中 MHE 四项指标均优于 EKF。离群值条件下，MHE 在中等或较远初始化下仍保持约 3.0–3.48 m 的位置 RMSE，而 EKF 可出现 4.73–1466 m 的大误差。  

计算上，MHE 冷启动时间最大约 4.77 ms，滑动窗口平均 3.42–4.05 ms，P90 在 4.76–6.81 ms；tracker 数量从 2 增加到 10 时，滑动窗口中位数保持在 3.57–3.88 ms，P90 不超过 7.41 ms，在 1 秒声学周期内具备实时可行性。  

主要局限是：仅验证于 2D 合成环境、基线单一、缺少真实数据和重复实验统计，且 MHE 稳定性证书仅引用既有理论结果，未给出针对本问题的专属证明。

### 🔗 开源详情

论文在第四节“Simulation Setup”中明确给出开源代码仓库地址：`https://github.com/bioniwulf/playground-estimators-comparison`，并说明“The implementation of the proposed algorithm and the code used to conduct the experiments are available as open-source software on GitHub”。因此 `has_code=是`。  
论文未提供代码仓库的 README、依赖安装说明、示例脚本、文档完整程度、许可证信息、模型权重或数据集下载链接；因此 `has_model=未说明`，`has_dataset=未说明`。  
代码实现基于 CasADi 建模与 IPOPT 求解，但论文未披露具体的 IPOPT 容差、最大迭代次数、软件版本要求及完整复现步骤；如需严格复现，仍需直接访问仓库并根据源码进一步确认。

### 🏗️ 方法概述和架构

该方法是一个集中式 MHE 滤波器。每个时间步 `k` 维护长度为 `N` 的滚动时域窗口，窗口内包含 `N+1` 个目标状态估计；优化器利用窗口内 TDoA 观测、窗口起始处的到达先验以及目标运动学预测，求解一个带约束的非线性最小二乘问题。滤波输出只取窗口末端状态，但完整估计轨迹会保留并用于下一时刻热启动。  

**状态模型**  
目标状态为五维向量：  
\[\boldsymbol{x}_k = [\boldsymbol{p}_k^\top, \psi_k, v_k, r_k]^\top \in \mathbb{R}^5,\]  
其中 `p_k=[x_k,y_k]^\top` 为惯性系位置，`ψ_k` 为航向，`v_k` 为体坐标系线速度，`r_k` 为角速度。离散化非完整运动模型为：  
\[f(\boldsymbol{x}_k)=\begin{bmatrix}\boldsymbol{p}_k+\Delta T\,v_k\boldsymbol{e}(\psi_k)\\ \psi_k+\Delta T\,r_k\\ v_k\\ r_k\end{bmatrix},\]  
其中 `e(ψ_k)=[cosψ_k, sinψ_k]^\top` 是航向单位向量，`\Delta T` 为离散步长。过程噪声 `w_k` 服从 `N(0,Q)`。  

**测量模型**  
每个时间步有 `M` 个 tracker，以 tracker 1 为参考，得到 `M-1` 个 TDoA 标量测量：  
\[h_i(\boldsymbol{x}_k)=\frac{1}{v_s}\left(\|\boldsymbol{p}_k-\boldsymbol{p}_k^{[1]}\|-\|\boldsymbol{p}_k-\boldsymbol{p}_k^{[i+1]}\|\right),\quad i=1,\dots,M-1,\]  
其中 `v_s` 为已知声速，`p_k^{[i]}` 为第 i 个 tracker 的位置。测量噪声 `ν_k` 服从 `N(0,R)`。tracker 位置是已知输入，因此增加 tracker 数量不会增加决策变量，只增加残差与 Jacobian 计算量。  

**MHE 代价结构**  
窗口中 `N+1` 个状态估计记为 `\boldsymbol{\chi}_{i|k}`，`i=0,\dots,N`。MHE 目标函数由三部分组成：  

1. **到达项**：惩罚窗口初始状态 `\boldsymbol{\chi}_{0|k}` 与窗口前先验 `\bar{\boldsymbol{x}}_{k_0}` 的偏差，权重为 `P^{-1}`。  
\[J_{\mathrm{arrival}}=2\eta^N\|\boldsymbol{\chi}_{0|k}-\bar{\boldsymbol{x}}_{k_0}\|_{P^{-1}}^2\]  

2. **运动学项**：惩罚相邻状态 `\boldsymbol{\chi}_{i+1|k}` 与一步运动学预测 `f(\boldsymbol{\chi}_{i|k})` 之间的模型残差，权重为 `Q^{-1}`。  
\[J_{\mathrm{kinematic}}=2\sum_{i=0}^{N-1}\eta^{N-1-i}\|\boldsymbol{\chi}_{i+1|k}-f(\boldsymbol{\chi}_{i|k})\|_{Q^{-1}}^2\]  

3. **测量项**：惩罚窗口内各时刻 TDoA 预测与观测的偏差，权重为 `R^{-1}`。  
\[J_{\mathrm{measure}}=\sum_{i=0}^{N}\eta^{N-i}\|h(\boldsymbol{\chi}_{i|k})-\boldsymbol{y}_{k_0+i}\|_{R^{-1}}^2\]  

符号含义为 `\|z\|_A^2=z^\top A z`。时间折扣因子 `η∈(0,1)` 使较新的测量和运动学残差获得更高权重。与已有分析相比，需要修正的是运动学项与到达项前有系数 `2`，且测量项包含终端残差 `i=N`。  

优化问题为：  
\[\boldsymbol{\chi}_{\cdot|k}^\star=\arg\min_{\boldsymbol{\chi}_{\cdot|k}} J_k(\boldsymbol{\chi}_{\cdot|k})\quad \text{s.t.}\quad \boldsymbol{\chi}_{i|k}\in\mathcal{X},\ i=0,\dots,N.\]  

可行集 `X` 限制位置为 `±100 m`、航向 `±2π`、线速度 `[0,1] m/s`、角速度 `±1.047 rad/s`。优化变量为 `5(N+1)` 个标量。问题由 CasADi 建模、IPOPT 求解。由于非线性非凸，求解器通常返回局部最优；论文通过上一窗口轨迹按运动学模型向前传播一步作为热启动，并结合有界约束降低陷入较差的局部最优的风险。  

论文还提到，在 bounded-noise 条件下，时间折扣 MHE 可继承参考工作 [13] 的鲁棒全局指数稳定结论，但前提是非线性系统在可行集上满足指数 δ-IOSS 证书；本文并未针对该 TDoA 非完整模型逐项验证该条件。

### 💡 核心创新点

1. **面向 TDoA 非完整目标跟踪的完整 MHE 公式化**：将目标跟踪表达为包含到达项、运动学项和测量项的滚动时域非线性优化问题，并与非完整运动模型结合。论文明确称此前 MHE 尚未被系统用于 TDoA 水下目标跟踪。  
2. **显式物理一致状态约束**：将位置、航向、线速度和角速度硬约束注入优化问题，避免估计器生成不可达状态。相比 EKF 主要依赖噪声协方差的间接机制，这是一种实际优势。  
3. **时间折扣滚动时域代价设计**：`η` 折扣旧数据权重，兼顾长窗口稳定性与近期噪声响应。但论文没有做无折扣或等权 MHE 的消融实验，因此折扣机制本身的增益不能被量化。  
4. **多场景鲁棒性对比**：在 constant、UUV-like、whale-like 三类轨迹下，比较稀疏更新、离群值和不同初始化误差。结果显示 MHE 在稀疏测量与不良初始化下比 EKF 更稳定。  
5. **实时性和可扩展性证据**：在 `N=15` 且 tracker 数量从 2 到 10 的条件下测试求解耗时，表明 CPU 原型在 1 Hz 声学更新周期内具备实时潜力。

### 📊 实验结果

实验基于 2D 合成仿真，tracker 围绕目标做外摆线运动以改善观测几何。原始表 2–4 包含 1 秒正常更新、1 秒离群更新和 3 秒稀疏更新三种设置。下表仅保留 3 秒稀疏更新下最能体现鲁棒性差异的 12 行结果。  

| 场景 | 配置 | 位置 RMSE [m] | 航向 RMSE [rad] | 线速度 RMSE [m/s] | 角速度 RMSE [rad/s] |
|---|---|---|---|---|---|
| constant | EKF moderate init. | 1427.38 | 1.80 | 2.49 | 3.87 |
| constant | MHE moderate init. | 6.55 | 1.43 | 0.34 | 0.49 |
| constant | EKF near init. | 5093.72 | 1.87 | 1.82 | 6.70 |
| constant | MHE near init. | 4.69 | 0.68 | 0.20 | 0.23 |
| UUV-like | EKF moderate init. | 3863.06 | 1.92 | 0.90 | 9.16 |
| UUV-like | MHE moderate init. | 5.66 | 1.03 | 0.32 | 0.22 |
| UUV-like | EKF near init. | 17123.04 | 1.96 | 5.74 | 8.45 |
| UUV-like | MHE near init. | 2.50 | 0.51 | 0.13 | 0.13 |
| whale-like | EKF moderate init. | 4873.81 | 1.82 | 3.77 | 10.74 |
| whale-like | MHE moderate init. | 6.00 | 1.39 | 0.41 | 0.32 |
| whale-like | EKF near init. | 5443.76 | 1.76 | 1.38 | 2.46 |
| whale-like | MHE near init. | 5.51 | 1.37 | 0.40 | 0.32 |

在 1 秒正常更新且近初始化条件下，constant 和 UUV-like 场景中 EKF 位置 RMSE 分别为 1.12 m 和 0.67 m，略优于 MHE 的 1.16 m 和 0.77 m；但 MHE 在航向、线速度和角速度等状态上多数占优。whale-like 场景中，MHE 的位置、航向、线速度和角速度 RMSE 均低于 EKF。  

加入离群值后，EKF 在不良初始化下会显著放大误差，例如 whale-like 中 EKF moderate init. 位置 RMSE 达 1466.11 m，而 MHE moderate init. 为 3.00 m。近初始化下，二者表现更接近，在 whale-like 场景中 EKF 甚至略优于 MHE 的位置和航向 RMSE。

下图进一步可视化了在whale-like场景、存在离群值条件下，不同初始化配置带来的估计误差时间序列。

![Figure 2: Time series of position, heading, linear-velocity, and yaw-rate estimation errors for the whale-like scenario with outliers. Colored dots distinguish EKF and MHE under moderate and near initializations.](https://arxiv.org/html/2608.16024v1/fig/whale_like_estimation_errors.png)

图中可见，MHE的估计误差在位置和各状态上分布更集中且振荡较小，而EKF在不良初始化下误差显著放大且持续发散，直观体现了其鲁棒性差异。


计算时间方面，冷启动时间最大为 4.77 ms，滑动窗口平均 3.42–4.05 ms，P90 在 4.76–6.81 ms。可扩展性测试中，tracker 从 2 增加到 10 时，滑动窗口中位数保持在 3.57–3.88 ms，P90 不超过 7.41 ms。

### 🔬 细节详述

- **训练数据**：不涉及训练数据和模型权重。实验使用合成仿真环境，2D 场景，总仿真时间 160 秒，离散步长 0.1 秒。声速 1024 m/s，声学发射周期为 1 秒或 3 秒稀疏设置。TDoA 噪声标准差为 `1×10^{-5}` 秒。目标轨迹分为 constant、UUV-like、whale-like 三类。tracker 围绕目标做外摆线运动。论文未提供真实水下数据集。  
- **初始状态与估计**：初始目标状态为 `(10.0,-10.0,0.0,0.0,0.0)`；近初始化估计为 `(8.0,-8.0,0.0,0.2,0.0)`；中等初始化估计为 `(0.0,0.0,0.0,0.2,0.0)`；远初始化估计为 `(-5.0,5.0,0.0,0.2,0.0)`，单位按 `[m,m,rad,m/s,rad/s]`。  
- **损失函数**：MHE 目标函数为 `J=J_arrival+J_kinematic+J_measure`。测量项、运动学项和到达项如上所示，其中 `J_kinematic` 和 `J_arrival` 均含系数 `2`。  
- **训练策略**：不涉及学习率、batch size、训练轮数等。优化求解采用 CasADi 建模和 IPOPT。每次测量到来后，用上一窗口轨迹按运动学模型向前传播一步作为热启动。IPOPT 具体容差、最大迭代次数未提供。  
- **关键超参数**：`Q=diag(0.5,0.5,0.1,2,2)`，`P=diag(30.0,30.0,10.0,1.0,1.0)`，`R=\sigma_r^2 I_{M-1}`。窗口长度 `N=15`，时间折扣因子 `η=0.85`。EKF 初始协方差 `P_0` 与 MHE 到达先验 `P` 相同。  
- **训练硬件**：不适用训练。时序实验使用 Intel i9-14900HX CPU @ 5.8 GHz，时间为三次独立运行的平均值。  
- **推理细节**：滤波估计取窗口末端状态 `\boldsymbol{\chi}_{N|k}^\star` 作为当前估计；完整轨迹保留用于下一时刻热启动。每次声学测量到达时执行一次完整优化。  
- **正则化或稳定训练技巧**：时间折扣 `η` 可视为降低旧数据权重；状态约束集 `X` 提供硬正则化；到达项使用固定先验协方差 `P`。

### ⚖️ 评分理由

*   创新性 (0.9/2)：[A_METHOD] 论文将MHE系统引入TDoA水下目标跟踪，给出包含到达项、运动学项、测量项和指数时间折扣的完整非线性规划公式，并用有界状态约束抑制不可达状态，属于有工程价值的应用方法创新；但核心结构沿已有MHE框架，创新偏增量。

*   技术严谨性 (1.1/1.5)：[A_METHOD] 论文给出五维状态模型、TDoA测量模型及三项代价的明确公式，状态约束和热启动设计在算法逻辑上合理；但稳定性证书只是继承已有工作，未验证该TDoA非完整模型是否满足指数δ-IOSS条件，理论保证与具体问题不完全匹配。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 实验在三类合成轨迹、1秒与3秒更新、离群值和不同初始化下比较了MHE与EKF，并给出运行时间和tracker扩展性，鲁棒性证据有一定覆盖；但基线仅EKF，缺少UKF、粒子滤波或鲁棒EKF等代表性比较、真实数据、重复实验统计或显著性检验，统计波动与离群值机制未交代，外推性不足。

*   清晰度 (0.9/1)：[A_METHOD] 论文按状态模型、测量模型、MHE代价结构分层展开，符号定义和公式推导清楚，图表能支撑主要结论；组织结构无明显问题，只存在少量细节说明不足，因而给0.9。

*   影响力 (0.2/1.5)：[A_SUMMARY] 核心贡献是水下TDoA目标跟踪的非线性MHE估计，服务于海洋机器人和水下声学定位场景；对语音、音乐、音频读者直接迁移价值很低，按领域相关性约束不超过0.5，设为0.2。

*   开源 (1.2/1.5)：[A_OPEN] 论文在第四节给出GitHub仓库地址并声明实现与实验代码开放，has_code为是；但未提供README、依赖安装说明、示例脚本、许可证等文档完整性证据，符合核心产物开放但文档不完整，给1.2。

*   可复现性 (0.3/0.5)：[A_OPEN] 论文给出CasADi与IPOPT实现、Q/P/R/N/η、初始估计、运行硬件和代码仓库，主要复现要素充分；但未披露IPOPT容差、最大迭代次数、软件版本要求及完整复现步骤，少量关键配置缺失，给0.3。

*   工程/实践价值 (0.9/1.5)：[A_RESULTS] 论文给出冷启动最大约4.77ms、滑动窗口平均3.42至4.05ms、P90小于7ms，并在2到10个tracker下中位数和P90保持低位，说明该CPU原型在1秒声学周期内具备实时可行性和可扩展性，工程实践价值明确。

### 🚨 局限与问题

1. **论文明确承认的局限**：未来工作包括扩展到三维运动、适应不规则或事件驱动的声学测量，以及发展面向多智能体海洋机器人系统的去中心化变体。当前仅考虑 2D 环境，目标模型为简化非完整运动。  
2. **审稿人发现的潜在问题**：  
   - 基线过于单一：仅与 EKF 比较，没有 UKF、粒子滤波、鲁棒 EKF、带投影约束 EKF 或其他滑窗估计器，无法判断 MHE 的鲁棒性是否不可由更简单方法替代。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
