---
title: "EM-KalmanNet: Learned Expectation-Maximization for Adaptive Tracking in Partially Known, Block-Wise Time-Varying State-Space Models"
date: 2026-08-26
draft: false
tags: [声源定位, RNN, 测试时自适应, 高效推理, 鲁棒性]
categories: [论文速递]
description: "声源定位 | 8.8/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.24404"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 EM-KalmanNet: Learned Expectation-Maximization for Adaptive Tracking in Partially Known, Block-Wise Time-Varying State-Space Models

标签：#声源定位 #RNN #测试时自适应 #高效推理 #鲁棒性

**8.8/10** | 创新 1.6/2 | 严谨 1.3/1.5 | 实验 1.2/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 1/1.5

🔥 **8.8/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #声源定位 | #RNN | #测试时自适应 #高效推理 | [arxiv](https://arxiv.org/abs/2608.24404)


### 👥 作者与机构

第一作者：Ori Cohen（School of ECE, Ben-Gurion University of the Negev, Israel）
通讯作者：正文未明确标注通讯作者
作者列表：Ori Cohen、Nir Shlezinger、Tirza Routtenberg（机构：School of ECE, Ben-Gurion University of the Negev, Israel）

### 📌 核心摘要

核心问题是让短数据块同时承担状态平滑与模型辨识：未知状态转移或观测关系在块内固定，却会在相邻块间改变。传统 EM-KF 能从观测估参，但依赖线性高斯模型并反复前后向迭代；RTSNet 能抗失配，却没有无标签测试时适应。EM-KalmanNet 将有限轮 EM 展开为共享网络，用 RTSNetPA 执行 learned E-step，再让 M-Net 根据经验矩、残差和梯度统计修正 F 或 H。M-Net 预测当前矩阵附近的有界增量，而非要求短块从零重估整个模型；这种局部修正把经典 M-step 的方向信息与非高斯条件下的学习能力结合起来。训练先建立能接受真参数和扰动参数的 smoother，再冻结它学习参数更新，最后联合微调，因此部署无需标签或反向传播。

推理只做固定深度前向计算，通常以上一块参数初始化下一块。声源定位中，它从 3 麦克风 TDOA 恢复位置与速度，每块从同一错误 F 重启时达到 -6.1 dB 总体 MSE；Lorenz 完整 5 块序列的 242 ms 延迟也低于 EM-KF 的 868 ms。优势说明 learned update 能在短块和模型失配下联合改善参数与状态，但 BGRU 在低 SNR 可领先，长块会缩小 EM-KF 差距。边界是固定块平滑、单次只适应单个矩阵，且无组件消融和真实混响多源验证。

### 🏗️ 方法概述和架构

**输入与边界。** 每个长度 T 的观测块提供观测序列、初始状态一二阶矩、未知参数初值，以及另一侧可用模型关系。论文假设未知关系在块内固定、只在块边界变化；Case 1 估计线性 F，Case 2 估计线性 H。记号上，未知块参数统一写作 phi。经典 RTS 的通用递推只需记住其前向滤波、后向平滑和对模型与协方差的依赖。

**Learned E-step。** RTSNetPA 沿用前向—后向平滑数据流，但将当前 F 或 H 作为增益 RNN 的额外输入。普通 RTSNet 增益隐式绑定训练模型，RTSNetPA 则让每轮新参数改变状态预测、观测残差和后向修正，输出整段平滑状态但不显式维护后验协方差。

**Learned M-step。** M-Net 不吞整条轨迹，而构造块长无关统计。未知 F 时读取相邻状态经验矩、转移与观测残差协方差、残差—前态交叉统计和当前 F；未知 H 时读取观测—状态矩、状态经验矩、观测残差协方差、残差—状态交叉统计和当前 H。交叉统计对应拟合损失负梯度，GELU 全连接网络与 scaled tanh 输出有界修正。

**展开与跨块。** 前 L-1 轮执行平滑与参数修正，末轮只做平滑，总计 L 次 RTSNetPA 和 L-1 次 M-Net；论文常用 L=3。2 个模块跨轮共享，计算随 T、L 线性增长。连续块通常传播末状态和参数估计并重置状态协方差。跨块传播并不是固定硬要求，声学实验每块都从 F(0) 开始。

如下图可追踪前 L-1 轮平滑与参数修正中 RTSNet E-step、M-Net M-step 与参数 F 的回流路径。

[![EM-KalmanNet with ϕ=𝑭\\bm{\\phi}={\\bm{F}} and L=3 iterations.](https://arxiv.org/html/2608.24404v1/fig/M_net.png)](https://arxiv.org/html/2608.24404v1/fig/M_net.png)

图中左侧 3 个蓝色 RTSNet 共享 θE，右侧前 2 个绿色 M-Net 共享 θM；F(0) 经 2 次修正后进入末次 E-step。声学实验每块从 F(0) 开始并不是图里额外画出的阶段，未知 H 的统计输入也不同。


**3 阶段训练。** 训练分 3 段，先让 RTSNetPA 在真参数与扰动参数下都能平滑；再冻结它，用参数误差为主训练 M-Net；最后解冻两者，以状态误差为主联合微调。轮权重后重前轻，轮间梯度 detach，让每轮学会处理不完美来参，也允许部署改变迭代数。

**声学映射与输出。** 最终输出末轮平滑状态与块参数。声学实例把 3 麦克风相对参考通道的到达时间差（TDOA）作为观测，状态含 2D 位置与速度；M-Net 适应控制速度旋转的块特定 F，而不是从波形生成声学特征。对定位研究者而言，这意味着网络输出仍是可解释的运动状态和动力学参数，音频前端只负责提供到达时间差观测。

### 💡 核心创新点

1. **固定预算 EM unfolding。** 经典 EM-KF 每块反复平滑直至收敛，短块时慢且受线性高斯假设约束。本文固定展开并共享 E/M 模块，在非线性合成中把延迟降至 335 ms；代价是失去 EM 的单调似然保证。

2. **参数感知 smoother。** 固定 RTSNet 无法区分部署变化的 F/H，RTSNetPA 把当前参数送进前后向增益 RNN。Lorenz 累积旋转下完整系统成为最强非 oracle，但仍远落后于知道真 H 的 RTS Full。

3. **结构化 learned M-step。** 从短轨迹重估整矩阵样本效率低，M-Net 改为有界局部修正，并输入经验矩、残差协方差和负梯度方向。解析 covariance-agnostic EM 是其可表达特例，非高斯结果支持 learned update；没有特征消融使独立贡献未知。

4. **为不完美来参训练。** 真参数和扰动参数预训练、冻结 smoother 训练 M-Net、再联合微调避免从头联合训练不稳；轮间 detach 强迫共享模块独立改进来参。声学每块同一错误初始化仍恢复变化，但超出训练扰动的突变未测试。

5. **把块间先验与块内证据分开。** 常规运行以上一块参数作为 warm start，利用渐变结构减少短块辨识难度；声学实验却主动取消这一优势，每块回到同一错误 F，仍优于固定模型基线。这说明网络学到块内修正规则而非只复制历史参数，但尚不能推出突发跳变和同时变化的 F/H 也会稳定。

### 📊 实验结果

目标域证据来自声源定位：状态为 2D 位置和速度，观测为 3 麦克风 TDOA，6 个连续块使用变化运动角；EM-KalmanNet 每块相同错误初始化。下表回答能否优于固定错误模型和纯数据驱动 smoother，MSE 越低越好。

如下图请比较声源定位轨迹中 EM-KalmanNet、Ground truth 与固定错误 F 基线在转弯段的贴合。

[![Acoustic tracking experiment with three microphones.](https://arxiv.org/html/2608.24404v1/fig/mic.jpeg)](https://arxiv.org/html/2608.24404v1/fig/mic.jpeg)

图中黑色 Ground truth 形成长弧和回环，紫色 EM-KalmanNet 多数转弯贴近黑线，绿色 EMKF 在左上明显偏离；重复局部恢复仅见于 3 麦克风 TDOA 仿真，未覆盖真实混响和多声源。


| 方法 | 模型信息 | 总体 MSE (dB) ↓ |
|---|---|---:|
| RTS True | 每块真实 F，oracle | -8.39 |
| RTS False | 固定错误 F | -1.95 |
| RTSNet False-F | 固定错误 F | -4.48 |
| BGRU | 纯数据驱动 | -4.73 |
| EM-KalmanNet | 每块估计 F | -6.1 |

声源定位每块相同错误初始化时，EM-KalmanNet 相对 BGRU 的总体 MSE 从 -4.73 dB 降至 -6.1 dB，越低越好。它仍不及 oracle 的 -8.39 dB。这项声学结果证明了重复局部恢复，不能证明真实房间在线定位已解决。

公开状态空间证据更广。Lorenz 连续 10 块、T=30 条件下，EM-KalmanNet 的 state-estimation MSE 为 -0.86 dB，低于 BGRU 的 1.7 dB 和 EM-KF 的 4.4 dB，越低越好；oracle RTS Full 为 -3.3 dB。跨 6 种观测噪声时，它均取得最低非 oracle MSE，其中 Laplace 为 -6.30 dB，RTSNet False 为 -0.90 dB，BGRU 为 6.30 dB。

固定展开的效率由相同 RTX 4070 SUPER/PyTorch 平台上 2 组每序列延迟回答，越低越好。

| 方法 | 非线性合成 Case 1 Latency (ms) ↓ | Lorenz 完整 5 块 Latency (ms) ↓ |
|---|---:|---:|
| RTS / RTS Full | 190 | 280 |
| RTSNet / RTSNet False | 180 | 83 |
| EM-KF | 600 | 868 |
| BGRU | 0.23 | 0.4 |
| EM-KalmanNet | 335 | 242 |

相比 EM-KF，非线性合成 Case 1 每序列条件下 EM-KalmanNet 的 Latency 从 600 ms 降低至 335 ms，越低越好。同一非线性合成 Case 1 每序列条件下，EM-KalmanNet 对 M-RTSNETP 的 Latency 从 512 ms 降至 335 ms，越低越好。Lorenz attractor 的完整 5 块序列中，它对 EM-KF 的 Latency 从 868 ms 降至 242 ms，越低越好；但 BGRU 和固定 RTSNet 仍更快，固定展开的边界并非所有基线中最低延迟。

论文也留下 3 类负面信号：低 SNR 失利、长块追平和无直接组件消融。低 SNR 时 BGRU 是最强非 oracle；块长增加后 EM-KF 逐渐接近本文方法；大累积旋转下所有自适应方法仍远离 oracle。全文也没有拆开参数条件化、M-Net 统计、bounded correction 或 3 阶段训练的直接消融。

### 🔬 细节详述

**数据与划分。** 每项实验的所有数据驱动方法都用相同的 400 条训练轨迹。合成 F 测试含 3 个长度 30 的块，训练旋转角从 [-1, 1] radians 采样；Lorenz 主测试含 5 个长度 30 的块，训练角从 [-0.3, 0.3] radians 采样。声学含 6 个块，训练运动角从 [-0.12, 0.12] 采样，测试角为 [0.1, 0.08, -0.1, -0.08, 0.06, 0.1]。

**目标与稳定化。** Stage 1 用状态 MSE 训练 RTSNetPA。Stage 2 包含状态误差、参数 Frobenius 误差和修正幅度正则，参数项主导；Stage 3 改为状态项主导。scaled tanh 限制修正，轮权重后重前轻，轮间截断梯度。

**特征复现。** 未知 F 时先用当前 F 预测下一状态，形成转移残差，并计算残差协方差、观测域残差协方差和残差—前态交叉矩；未知 H 时改用观测残差、残差协方差和残差—状态交叉矩。2 种 case 都把当前参数本身和对应经验充分统计向量化后送入 M-Net。实现时不能把这些统计替换成整段轨迹，因为块长无关输入正是短块适应与共享模块的结构约束。

**推理。** 每块运行 L 次前后向 RTSNetPA 与 L-1 次 M-Net，末轮只返回状态。多块传播末状态与参数但重置协方差；声学每块从 F(0) 重启。输出参数是末次 M-step 的估计，输出状态是再以该参数执行最终 E-step 的平滑轨迹，因此两者对应的展开位置不同。

**观测与指标。** 合成和 Lorenz 以状态估计 MSE 为主，噪声覆盖独立高斯、相关高斯、重尾、偏态和污染分布。声学观测按声源到非参考麦克风与参考麦克风的距离差除以传播速度构造，直接连接 2D 位置而不观测速度；速度只能通过动力学和平滑间接恢复。

**实现披露。** M-Net 为全连接 DNN，使用 GELU 和 scaled tanh。延迟在 NVIDIA GeForce RTX 4070 SUPER、PyTorch 环境测得。正文未给优化器、学习率、epoch、batch size、层宽和参数量，不能按常见设置补写。

### 🚨 局限与问题

论文单次只适应 F 或 H，尚未同时更新多个模型组件或时变噪声；推理是固定块平滑而非逐帧流式定位。Lorenz 累积旋转下所有自适应方法仍与 oracle 有明显距离；短块优势虽被展示，却没有组件级消融。声学评测是 3 麦克风 TDOA 仿真式场景，未涵盖真实混响、遮挡、多声源、阵列失配或现场算力。

### 进一步审视

训练分布仍定义 learned update 能处理的参数变化。Lorenz 把旋转放在训练区间边界，显示一定策略泛化，但没有突然跳变、参数维度扩大或 F/H 同时变化压力测试。

声学部分仍是 proof of concept：3 麦克风、TDOA、已知传播关系与单移动源能验证机制，却没有混响、遮挡、多源、同步误差和真实录音。GPU 每序列延迟也不是采集—特征—定位端到端时延。

正文给 MSE 曲线和部分均值标准差，却无统一显著性检验或组件消融。因此可相信完整系统在所测条件优于强非 oracle，不能确定各类统计、参数感知或轮间 detach 分别贡献多少。

### 🔗 开源与复现资源

作者公开 [EMKF_NET](https://github.com/oricoohen/EMKF_NET.git)，并明确写明源码与全部超参数可得。这支持代码复核和配置补全；正文没有明确承诺预训练权重、数据集或在线 Demo。

### 💡 研究者判断

EM-KalmanNet 有研究味的地方，是保留 EM 的方向感，同时让 learned smoother 与 learned M-step 分工；M-Net 也围绕当前 F/H 做局部修正。对快速变化声源，这比部署时反向传播更有工程吸引力。可惜最接近音频落地的部分仍为 3 麦克风 TDOA 仿真轨迹，缺少混响、多源和真实阵列延迟；无直接消融也让收益归因不清。

`<details>`
`<summary>`⚖️ 评分理由（展开查看）`</summary>`

* 创新性 (1.6/2)：把 EM-KF 展开为共享 RTSNetPA 与统计驱动 M-Net，并证明解析 M-step 可由修正形式近似表达，创新明确但建立在 RTSNet 和 deep unfolding 上。

* 技术严谨性 (1.3/1.5)：未知 F、未知 H、非线性关系与非高斯噪声均有一致公式和复杂度；省略后验协方差后没有误差界，EM 单调似然保证也不再成立。

* 实验充分性 (1.2/1.5)：覆盖合成 F/H、Lorenz、多种噪声、块长、延迟、长时稳定性和声源定位及强基线；缺少组件直接消融，按规则封顶 1.2/1.5。

* 清晰度 (0.9/1)：算法、公式、训练阶段和实验组织清楚，Fig. 1 直观呈现 3 次 E-step 与 2 次 M-step；HTML 文本的符号重复不影响原版判断。

* 影响力 (1.2/1.5)：短块无标签适应连接状态估计与声源定位，适用面广；当前真实声学和流式部署证据不足，影响仍主要在方法层。

* 开源 (1.2/1.5)：正文提供 GitHub 并声明代码与全部超参数可得，但未明确发布训练权重或专用声学数据集，因此给 1.2/1.5。

* 可复现性 (0.4/0.5)：正文披露损失、数据块、训练轨迹数、迭代共享和硬件平台，仓库补充超参数；正文未列优化器、学习率、epoch、batch size 与层宽。

* 工程/实践价值 (1.0/1.5)：固定深度显著快于 EM-KF 并有 RTX 4070 SUPER 实测；BGRU 和固定 RTSNet 更快，且无 CPU、嵌入式或真实声学端到端延迟。

`</details>`

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
