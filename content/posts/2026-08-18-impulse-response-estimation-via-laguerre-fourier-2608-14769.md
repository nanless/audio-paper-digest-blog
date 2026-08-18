---
title: "Impulse Response Estimation via Laguerre-Fourier Expansion"
date: 2026-08-18
draft: false
tags: [音频理解, 端到端, 理论分析, 鲁棒性]
categories: [论文速递]
description: "音频理解 | 6.8/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.14769"
---

# 📄 Impulse Response Estimation via Laguerre-Fourier Expansion

标签：#音频理解 #端到端 #理论分析 #鲁棒性

**6.8/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.8/1.5 | 清晰 0.8/1 | 影响 0.6/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 0.9/1.5

✅ **6.8/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #音频理解 | #端到端 | #理论分析 #鲁棒性 | [arxiv](https://arxiv.org/abs/2608.14769)


### 👥 作者与机构

- 第一作者：Tamás Dózsa（总署名机构为 UniDistance Suisse / TU Berlin，个人具体所属机构未明确标注；CRediT 贡献包括概念化、方法论、软件、形式化分析、调查、初稿撰写与可视化）
- 通讯作者：未说明
- 作者列表：Tamás Dózsa、Art J. R. Pelling、Matthias Voigt（均未单独标注个人机构，总署名机构为 UniDistance Suisse / TU Berlin）
- 贡献分工：Art J. R. Pelling 参与概念化、方法论、软件、验证、调查、数据管理、初稿撰写与可视化；Matthias Voigt 负责审校、监督与经费获取

### 💡 毒舌点评

本文把 Laguerre-Fourier 基嵌入 ETFE 的循环卷积框架，给出了在谱零点/带限激励下仍可辨识 IR 的优雅方案，定理推导与单 FFT 快速算法有一定理论价值。但实验仅覆盖两个仿真离散 LTI 系统，既没有噪声鲁棒性、正则化/子空间/向量拟合等基线或真实声学测量，也避开了高效变体在采样点仍接近零点时的病态问题。更值得注意的是，实验 2 中 \(\Gamma\) 的条件数仍高达 \(4.5\times10^3\) 以上，这与论文宣称的 "well-conditioned" 存在明显张力。全文缺乏对 Laguerre 参数 \(a\) 的系统选择机制，手动调参痕迹明显，离实际声学系统辨识还有显著距离。

### 📌 核心摘要

该论文解决的是 LTI 系统辨识中经典 ETFE 方法在激励信号存在频谱零点或带限时频域除法严重病态、无法恢复 impulse response 的问题。其核心方法是将传递函数用 Laguerre-Fourier 基展开，通过 Blaschke 因子改变单位圆上的采样点到非零点区域，同时利用 Laguerre 函数的离散正交性保留循环卷积结构，从而用 FFT 高效求解离散 Laguerre-Fourier 系数。与传统 ETFE 相比，LETFE 不直接在原 Fourier 频率上做除法，而是先做 warped 采样与 Laguerre 变换，再通过循环系统求解，最后用 RKHS 内积从系数恢复时域 IR。实验在两个模拟离散 LTI 系统上进行：随机激励且 \(a=0\) 时 LETFE 与 ETFE 的误差完全一致，验证了其作为 ETFE 广义形式的性质；在 \(U(1)=0\) 的谱零点激励下 ETFE 完全无法求解，而 LETFE 在 \(a=0.1i\)、\(N=10000\) 时相对 \(\ell_2\) 误差约 \(1.85\times10^{-3}\)；在带限 sinc 激励下 ETFE 无法恢复未激励频段，而 LETFE 在 \(N=300\) 时可获得约 \(8.99\times10^{-2}\) 的相对 \(\ell_2\) 误差。实际意义在于为声学、地震、层析等物理上只能使用带限激励的系统辨识提供了一个直接且可解释的频域方法。主要局限是 Laguerre 参数 \(a\) 选择仍依赖经验，IR 恢复的 quadrature 成本较高，实验缺乏噪声模型、主流基线对比和真实数据验证。

### 🔗 开源详情

- 代码：论文中未给出 GitHub 等代码仓库链接；代码与脚本可通过 Zenodo 获取：https://doi.org/10.5281/zenodo.21934090（MIT licence，作者为 Art J. R. Pelling 和 Tamás Dózsa）
- 模型权重：未提及
- 数据集：未提及
- Demo：未提及
- 复现材料：源代码和脚本见 https://doi.org/10.5281/zenodo.21934090，MIT licence；论文附录 D 给出实验实现细节，实验环境为 Apple MacBook Pro（M4, 32 GB RAM, macOS Tahoe），使用 MathWorks MATLAB 2025a
- 论文中引用的开源项目：未提及具体第三方开源项目链接；文中主要使用 MATLAB 2025a（商业软件，非开源）

### 🏗️ 方法概述和架构

LETFE（Laguerre-ETFE）是一种用于线性时不变（LTI）系统 impulse response 辨识的数值方法，整体表现为一个多阶段数值线性代数管线。它并不是端到端神经网络，而是建立在复分析、离散 Fourier 理论、循环矩阵求解和再生核 Hilbert 空间（RKHS）之上的显式算法。该方法的输入是时域激励信号 \(u\in\mathbb{C}^{M}\) 和响应信号 \(y\in\mathbb{C}^{N}\)，输出是截断的时域 impulse response \(h\in\mathbb{C}^{N}\)。完整链路为：

1. 对激励信号 \(u\) 零填充至长度 \(N\)，记为 \(\widetilde{u}\)；
2. 选定 Laguerre 参数 \(a\in\mathbb{D}\)（单位开圆盘），构造 warped 单位圆采样集 \(\widehat{\mathbb{T}}^{a}\) 上的点 \(\zeta_k=B^{-a}(\omega^k)\)，其中 \(\omega=e^{2\pi i/N}\)；
3. 在 \(\zeta\) 上计算 \(\widetilde{u}\) 和 \(y\) 的截断 Z 变换采样 \(\widehat{u},\widehat{y}\)；
4. 通过缩放、逐元素除法与一次 FFT，得到离散 Laguerre-Fourier 系数 \(\widehat{h}^{a}\in\mathbb{C}^{N}\)；
5. 利用 \(H^{2}(\mathbb{D})\) 的 Szegő 核与再生性质，在单位圆等距节点上做复合梯形求积，从 \(\widehat{h}^{a}\) 恢复时域 impulse response \(h\)。

与经典 ETFE（经验传递函数估计）直接在 Fourier 频率上做频域除法不同，LETFE 先将单位圆采样点通过 Blaschke 因子进行几何重排，使采样点避开激励信号的频谱零点或带限区域；随后在 Laguerre 系数域中仍保留循环卷积结构，从而可以用 FFT 高效求解；最后通过 RKHS 内积恢复时域响应，不引入正则化参数及其偏差。

---

下图展示了通过LETFE方法计算得到的Laguerre-Fourier系数分布。

![(a) Laguerre-Fourier coefficients.](https://arxiv.org/html/2608.14769v1/exp2_clag.png)

图中显示了不同参数a下的系数幅值，验证了方法在warped采样下保持离散正交性的性质。


### 核心组件一：warped 采样与离散 Laguerre-Fourier 变换
**功能。**  
该组件负责构造非均匀单位圆采样集，并将时域信号的 Z 变换采样转换到 Laguerre 基的离散采样空间。其目的是通过参数 \(a\) 控制采样点的非均匀分布，使采样密度集中在感兴趣或非零频谱区域，从而规避经典 Fourier 频率上的零点问题。

**内部结构与实现。**  
定义 Blaschke 因子
\[
B^{a}(z)=\frac{z-a}{1-\bar a z},\qquad a\in\mathbb{D},\ z\in\overline{\mathbb{D}}.
\]
Blaschke 因子是单位圆 \(\mathbb{T}\) 到自身的自映射，并且可逆，其逆为 \(B^{-a}\)。在此之上定义 Laguerre 函数
\[
L_n^{a}(z)=\frac{\sqrt{1-|a|^{2}}}{1-\bar a z}B^{a}(z)^{n},\qquad n\in\mathbb{N},
\]
它们构成 Hardy 空间 \(H^{2}(\mathbb{D})\) 的完备正交基。该方法的核心技巧是选取离散采样集
\[
\widehat{\mathbb{T}}^{a}=\{z\in\mathbb{T}: B^{a}(z)^{N}=1\},
\]
其元素可以直接计算为
\[
z_k=B^{-a}(\omega^{k}),\qquad k=0,\ldots,N-1,
\]
其中 \(\omega=e^{2\pi i/N}\)。由于 \(B^{-a}\) 不是均匀旋转，当 \(a\) 接近单位圆边界时，这些采样点会在单位圆上向 \(a\) 所在方向积聚。这种非均匀采样是 LETFE 能够避开激励频谱零点的关键几何机制。

为了保持离散采样下的正交性，论文引入离散权函数
\[
\sigma(z)=\frac{\sqrt{N(1-|a|^{2})}}{|1-\bar a z|},
\]
并定义离散内积
\[
\langle \widehat f,\widehat g\rangle_{\widehat{\mathbb{T}}^{a}}
=\sum_{k=0}^{N-1}\frac{f(z_k)\overline{g(z_k)}}{\sigma(z_k)^{2}}.
\]
在该内积下，采样 Laguerre 函数保持正交，这是定理 2.10 的结果。由此得到的采样 Laguerre 函数矩阵记为 \(\mathcal{L}^{a}\)，对角权重矩阵为
\[
\Sigma=\operatorname{diag}(\sigma(z_0),\ldots,\sigma(z_{N-1})).
\]

**输入与输出。**  
输入：时域激励或零填充后的信号，以及参数 \(a\)、采样点数 \(N\)。  
输出：warped 采样点向量 \(\zeta=(z_0,\ldots,z_{N-1})\)、采样矩阵 \(\mathcal{L}^{a}\)、权重矩阵 \(\Sigma\)，以及在 \(\zeta\) 上计算的 Z 变换采样 \(\widehat{u}\)、\(\widehat{y}\)。

---

### 核心组件二：离散 Laguerre-Fourier 系数求解
**功能。**  
该组件由 warped 采样向量 \(\widehat{u},\widehat{y}\) 计算系统的离散 Laguerre-Fourier 系数 \(\widehat{h}^{a}\)。这是整个方法的核心数值求解阶段，它将时域去卷积问题转化为 Laguerre 系数域中的循环卷积问题。

**内部结构与实现。**  
首先将 Z 变换采样 \(\widehat{u},\widehat{y}\) 变换为离散 Laguerre 系数：
\[
\widehat{u}^{a}=(\mathcal{L}^{a})^{*}\Sigma^{-2}\widehat{u},\qquad
\widehat{y}^{a}=(\mathcal{L}^{a})^{*}\Sigma^{-2}\widehat{y}.
\]
定理 3.1 证明，在这些离散 Laguerre 系数下，线性系统满足
\[
\big((I+\bar a\mathcal{D})\widehat{u}^{a}\big)\ast \widehat{h}^{a}
=\sqrt{1-|a|^{2}}\,\widehat{y}^{a},
\]
其中 \(\mathcal{D}\) 是循环移位矩阵。重要的是，对应矩阵 \(\Gamma\) 是一个循环矩阵，其第一列为
\[
\gamma=\frac{1}{\sqrt{1-|a|^{2}}}(I+\bar a\mathcal{D})\widehat{u}^{a}.
\]
循环矩阵可以通过 Fourier 矩阵对角化，因此上述方程可以用经典 ETFE 的循环求解框架求解。

该方法在此阶段提供两种算法。

**Algorithm 2：原型实现。**  
Algorithm 2 显式构造第一列 \(\gamma\)，然后调用 ETFE（Algorithm 1）求解循环系统。ETFE 内部使用 FFT：计算 \(\gamma\) 的频谱和 \(\widehat{y}^{a}\) 的频谱，进行逐元素除法，再做逆 FFT 得到 \(\widehat{h}^{a}\)。这种方式需要显式或隐式地应用 \((\mathcal{L}^{a})^{*}\Sigma^{-2}\)，并且整个求解过程涉及多次 FFT。其优点是数值上直观、易于实现，适合验证和理论分析。

**Algorithm 3：高效实现。**  
Algorithm 3 利用矩阵分解
\[
\mathcal{L}^{a}=\sqrt{\frac{N}{1-|a|^{2}}}\mathcal{F}^{*}(I+\bar a\mathcal{D})
\]
以及 \(\mathcal{F}^{2}\) 只做逆序、\(\mathcal{F}^{4}=I\) 的性质，将原型中多余的 FFT 与矩阵求逆合并。最终得到闭式公式
\[
\widehat{h}^{a}
=\sqrt{\frac{1-|a|^{2}}{N}}\,
\mathcal{F}\,
\operatorname{diag}(\widehat{u})^{-1}
\operatorname{diag}\big(1+\bar a\omega^{0},\ldots,1+\bar a\omega^{N-1}\big)^{-1}
\widehat{y}.
\]
具体步骤为：  
1. 零填充激励得到 \(\widetilde{u}\in\mathbb{C}^{N}\)；  
2. 构造 warped 采样点 \(\zeta\)，并计算截断 Z 变换采样 \(\widehat{u},\widehat{y}\)；  
3. 对 \(\widehat{u}\) 施加对角缩放，形成
   \[
   \widehat{U}_k=(1+\bar a\omega^{k})\widehat{u}_k;
   \]
4. 逐元素除法
   \[
   \widehat{H}_{N,k}=\widehat{y}_k/\widehat{U}_k;
   \]
5. 对 \(\widehat{H}_{N}\) 做一次 FFT，并乘以尺度因子 \(\sqrt{(1-|a|^{2})/N}\) 得到 \(\widehat{h}^{a}\)。

与 Algorithm 2 相比，该高效版本只需要一次 FFT、一次元素缩放、一次元素除法和一次整体缩放，不显式构造 \(\mathcal{L}^{a}\) 或 \(\Gamma\)，也不做多次 FFT。如果元素除法遇到极小的 \(\widehat{U}_k\) 而病态，可以回退到 Algorithm 2 的循环求解方式；但论文在数值实验中未观察到该退化。

**输入与输出。**  
输入：激励 \(u\in\mathbb{C}^{M}\)、响应 \(y\in\mathbb{C}^{N}\)、Laguerre 参数 \(a\in\mathbb{D}\)。  
输出：离散 Laguerre-Fourier 系数 \(\widehat{h}^{a}\in\mathbb{C}^{N}\)。

---

### 核心组件三：RKHS 内积与 impulse response 恢复
**功能。**  
该组件将 Laguerre-Fourier 系数 \(\widehat{h}^{a}\) 转换为时域 impulse response \(h\)。它是从频域/系数域回到时域的最后阶段。

**理论基础与实现。**  
定理 3.5 利用 \(H^{2}(\mathbb{D})\) 的 Szegő 核
\[
\xi(z,w)=\frac{1}{1-\bar w z}
\]
的再生性质，定义函数
\[
\varphi_n^{a}(z)=\frac{1-\bar a B^{-a}(z)}{\sqrt{1-|a|^{2}}}B^{-a}(z)^{n},
\]
并证明时域 impulse response 的第 \(n\) 个系数可以表示为
\[
h_n=\langle H^{a},\varphi_n^{a}\rangle_{H^{2}(\mathbb{D})},
\]
其中 \(H^{a}\) 是由系数 \(\widehat{h}^{a}\) 生成的 \(H^{2}(\mathbb{D})\) 函数。

在数值上，Algorithm 4 使用复合梯形公式在单位圆上的 \(N_q+1\) 个等距节点
\[
\rho_k=e^{2\pi i k/N_q},\qquad k=0,\ldots,N_q,
\]
近似该内积：
\[
h_n\approx
\frac{1}{N_q+1}
\sum_{k=0}^{N_q}
H^{a}(\rho_k)\overline{\varphi_n^{a}(\rho_k)}.
\]
具体实现包括：先构造求积节点 \(\rho\)；再由 \(\widehat{h}^{a}\) 计算 \(H^{a}\) 在 \(\rho\) 上的采样，这可以通过截断 Z 变换或 IFFT 完成；然后对每个 \(n=0,\ldots,N-1\) 与每个求积节点 \(k\)，构造 \(\varphi_n^{a}(\rho_k)\) 并累加内积。为了提高求积精度，可先将 \(\widehat{h}^{a}\) 零填充到 \(N_q\) 长度再计算 \(H^{a}\)，使被积函数在求积网格上更平滑。

**输入与输出。**  
输入：离散 Laguerre 系数 \(\widehat{h}^{a}\in\mathbb{C}^{N}\)、Laguerre 参数 \(a\)、求积节点数 \(N_q\)。  
输出：截断时域 impulse response \(h\in\mathbb{C}^{N}\)。

---

### 组件间数据流与完整 pipeline
完整方法由 Algorithm 5 串联上述组件：输入 \(u,y,a\) 后，先调用 Algorithm 3 得到离散 Laguerre-Fourier 系数 \(\widehat{h}^{a}\)，再调用 Algorithm 4 恢复时域 \(h\)。数据流可以概括为：

- **第一阶段到第二阶段**：零填充后的激励 \(\widetilde{u}\) 与响应 \(y\) 在 warped 采样集 \(\zeta\) 上被计算为 Z 变换采样 \(\widehat{u},\widehat{y}\)；随后缩放、逐元素除法与一次 FFT 产生系数向量 \(\widehat{h}^{a}\)。
- **第二阶段到第三阶段**：系数 \(\widehat{h}^{a}\) 被送入求积模块，转换为 \(H^{a}\) 在等距单位圆节点上的采样，并与再生核导出的基函数 \(\varphi_n^{a}\) 做离散内积，最终输出时域 \(h\)。

在架构关系上，经典 ETFE 的示意图（原文图 1）展示了 Toeplitz 列完备化与循环矩阵求解流程；LETFE 的模块结构与之类似，但关键区别在于采样点不再是均匀 Fourier 频率，而是通过 Blaschke 因子重排的 warped 点集。循环求解模块被保留，但作用在 Laguerre 系数域而非原始 Fourier 频域。

---

### 关键设计选择及动机
用 Laguerre-Fourier 基替代普通 Fourier 基。
   普通 ETFE 在 Fourier 频率上执行除法，当激励信号在某个频率为零或近似为零时，分母极小，条件数急剧恶化。Laguerre 基的额外参数 \(a\) 可以调整采样点分布，使大多数采样点聚集在远离激励频谱零点的区域，从而避开病态除法。

通过 Blaschke 因子进行 warped 采样并保持离散正交性。
   若只是简单非均匀采样，一般会失去循环卷积的便捷结构。但这里经过 Blaschke 因子构造的采样集和离散测度 \(\sigma\)，保证采样 Laguerre 函数在该离散内积下仍正交。因此变换后的输入输出关系仍对应循环矩阵，FFT 求解仍然成立。

高效算法避免显式构造矩阵。
   Algorithm 3 利用 \(\mathcal{L}^{a}\) 的因子分解和 Fourier 矩阵的性质，把原型中需要的多个 FFT 合并为单个 FFT，同时消去 \(\mathcal{L}^{a}\) 和 \(\Sigma\) 的显式构造，显著降低计算量和内存开销。

用 RKHS 再生性质恢复时域。
   Laguerre 系数本身不是时域脉冲响应，但通过 Szegő 核的内积关系可以稳定地恢复时域系数。该恢复方式不依赖额外的正则化参数，避免了正则化偏差。

不引入正则化偏差。
   与正则化 ETFE 相比，该方法通过几何重采样和正交基变换改善条件数，而不是用正则项抑制噪声或零点奇异性，因此不牺牲估计的无偏性。

### 相关专业术语解释
- **Blaschke 因子**：形如 \((z-a)/(1-\bar a z)\) 的单位圆自映射，是可逆 Möbius 变换，用于对单位圆上的采样点进行非均匀重排。  
- **Laguerre 函数**：由 Blaschke 因子生成的函数族，构成 Hardy 空间 \(H^{2}(\mathbb{D})\) 的完备正交基。  
- **Hardy 空间 \(H^{2}(\mathbb{D})\)**：单位圆盘内解析且边界值平方可积的函数空间，是 LTI 系统传递函数的自然空间。  
- **Szegő 核**：\(H^{2}(\mathbb{D})\) 的再生核，满足 \(f(\lambda)=\langle f,\xi(\cdot,\lambda)\rangle\)。  
- **循环矩阵**：由第一列逐行循环移位生成的矩阵，可被 Fourier 矩阵对角化，因此可用 FFT 快速求解线性方程组。  
- **ETFE**：经验传递函数估计，经典方法通过频域逐点除法估计系统传递函数。  
- **Zero-padding**：在信号尾部补零以匹配循环卷积长度或提高频率分辨率。  
- **Quadrature**：数值积分求积公式，这里用复合梯形公式近似单位圆上的内积。

### 💡 核心创新点

1. **Laguerre-Fourier 广义 ETFE 框架**：传统 ETFE 在固定 Fourier 频率 \(\omega^k\) 上做除法，当 \(U(\omega^k)\approx0\) 时病态。本文用 Blaschke 因子将采样点变为 warped 网格 \(\zeta_k=B^{-a}(\omega^k)\)，通过选择 \(a\) 避开零点或带限区，同时在变换后保持循环卷积结构。谱零点和带限实验证明传统 ETFE 失效时 LETFE 仍能恢复 IR。

2. **两组求解算法（Algorithm 2 与 Algorithm 3）**：Algorithm 2 是原型方法，直接构造循环矩阵第一列并用三次 FFT 求解；Algorithm 3 利用 \(\mathcal{L}^a\) 的 Fourier/downshift 分解、\(\mathcal{F}^2\) 逆序和 \(\mathcal{F}^4=I\)，将原型算法压缩为一次 FFT 加元素除法和缩放。论文给出详细代数推导（公式 50–52），并声称无需显式构造 \(\mathcal{L}^a\)。

3. **循环矩阵条件数上界（定理 3.3）**：在 \(|\widehat{u}_0^a|>\sum_{k\ge1}|\widehat{u}_k^a|\) 的 diagonal dominance 条件下，给出 \(\kappa_2(\Gamma)\le\frac{1+|a|}{1-|a|}\cdot\frac{|\widehat{u}_0^a|+s^a}{|\widehat{u}_0^a|-s^a}\)，其中 \(s^a=\sum_{k\ge1}|\widehat{u}_k^a|\)。该结果显式刻画了输入 Laguerre 系数衰减和 \(a\) 靠近边界对病态性的影响，支持参数选择直觉。

4. **RKHS 性质的 IR 恢复（Algorithm 4）**：与直接对 Laguerre 系数做逆基变换不同，Algorithm 4 用 Szegő 核再生性质构造 \(\varphi_n^a\)，将 IR 样本恢复为 \(H^a\) 与 \(\varphi_n^a\) 的 \(H^2(\mathbb{D})\) 内积，再用周期梯形 quadrature 近似。这避免了显式逆 Laguerre 矩阵，并可借助快速收敛的周期积分提高精度。

5. **实验验证**：在两个离散 LTI 系统（大系统 \(K=20000\)、小系统 \(K=50\)）上验证了方法在谱零点与带限激励下恢复 IR 的能力，并展示了 ETFE 作为 \(\alpha=0\) 特例的一致性。

### 📊 实验结果

实验均在两个模拟离散 LTI 系统上进行，系统由随机生成的 \(\lambda_k\in\mathbb{D}\) 和 \(r_k\in\mathbb{C}\) 定义，\(K=20000\) 的大型系统与 \(K=50\) 的小型系统，参数复共轭成对以保证实有理传递函数。误差指标为逐点误差 \(\varepsilon\) 的 \(\ell_1\)、\(\ell_2\) 范数和相对误差，以 dB/数字报告。

在随机激励基线实验中，ETFE 可用。当 \(a=0\) 时，LETFE 与 ETFE 的误差在所有报告 \(N\) 上完全一致；\(N=20000\) 时二者相对 \(\ell_2\) 误差均为 \(7.04\times10^{-2}\)。而 \(a=0.3+0.2i\) 时相对 \(\ell_2\) 误差升至 \(6.26\times10^{-1}\)（\(N=20000\)），显示非零 \(a\) 在该类激励下可能带来 quadrature 和变换误差。\(\kappa_2(\Gamma)\) 在 \(a=0\) 时为 \(368.94\)，\(a=0.3+0.2i\) 时为 \(407.79\)。

谱零点实验中，输入满足 \(U(1)=0\)，ETFE 因除零无法输出结果。LETFE 使用 \(a=0.1i\)、\(a=0.3+0.2i\) 和 \(a=0.97e^{i0.052}\) 均可恢复 IR；其中 \(a=0.1i\) 在 \(N=10000\) 时相对 \(\ell_2\) 误差为 \(1.85\times10^{-3}\)，明显优于其他参数。\(\Gamma\) 的条件数分别为 \(4517.16\)、\(4581.72\) 和 \(4617.61\)。表 1 保留主方法关键结果（相对 \(\ell_2\) 误差）：

| 方法 | N | 相对 \(\ell_2\) 误差 |
|---|---:|---:|
| LETFE \(a=0.1i\) | 100 | \(1.31\times10^{-3}\) |
| LETFE \(a=0.1i\) | 10000 | \(1.85\times10^{-3}\) |
| LETFE \(a=0.1i\) | 20000 | \(4.69\times10^{-1}\) |
| LETFE \(a=0.3+0.2i\) | 100 | \(1.19\times10^{-2}\) |
| LETFE \(a=0.3+0.2i\) | 10000 | \(1.85\times10^{-1}\) |
| LETFE \(a=0.97e^{i0.052}\) | 100 | \(2.55\times10^{-1}\) |
| LETFE \(a=0.97e^{i0.052}\) | 10000 | \(2.70\) |

下图可视化了谱零点实验中不同Laguerre参数下的相对点误差。

![(b) Relative pointwise error.](https://arxiv.org/html/2608.14769v1/irErrNoise.png)

图中可见a=0.1i时误差较低，而其他参数误差较高，与表中相对ℓ2误差结果一致。


带限激励实验使用截止频率 \(\omega_c=5\pi/6\) 的 sinc 输入，ETFE 无法恢复未激励频段信息。对小系统 \(K=50\)，选择 \(a=0.97e^{i0.052}\) 使采样点全部落在激励支撑内。\(N=300\) 时 NN 阶 Laguerre-Fourier 部分和误差约 \(0.0609\)（\(-30\) dB），相对 \(\ell_2\) 误差为 \(8.99\times10^{-2}\)；\(\Gamma\) 条件数为 \(1.0047\)。表 2 汇总主要结果：

| 方法 | N | 相对 \(\ell_2\) 误差 |
|---|---:|---:|
| LETFE \(a=0.97e^{i0.052}\) | 2 | \(6.25\times10^{-2}\) |
| LETFE \(a=0.97e^{i0.052}\) | 150 | \(8.31\times10^{-2}\) |
| LETFE \(a=0.97e^{i0.052}\) | 300 | \(8.99\times10^{-2}\) |

下图显示了带限激励实验中不同N值下的相对点误差。

![(b) Relative pointwise error. - 图2](https://arxiv.org/html/2608.14769v1/IrErrExp_err.png)

图中误差随N变化，补充了表格中相对ℓ2误差的细节，表明LETFE在带限场景下的恢复能力。


运行时方面，LETFE 比 ETFE 慢几个数量级：随机激励 \(N=20000\) 时 LETFE 约 \(7.07\)–\(7.14\) 秒，ETFE 仅 \(1.07\times10^{-3}\) 秒。谱零点实验运行时间约 \(6.9\)–\(7.15\) 秒，带限实验约 \(6.9\) 秒。论文未做噪声鲁棒性、正则化方法或真实声学数据对比。

### 🔬 细节详述

- **训练数据**：未使用公开数据集或训练过程。系统由公式 \(H(z)=\sum_{k=0}^{K-1}\frac{r_k}{1-\bar{\lambda}_k z}\) 生成，\(\lambda_k\in\mathbb{D}\)、\(r_k\in\mathbb{C}\)，参数复共轭成对以保证实有理传递函数；具体分布范围未详述。大型系统 \(K=20000\)，小型系统 \(K=50\)。输入信号有三类：随机激励序列（具体分布未详述）；谱零点输入 \(u_n=\alpha\cdot s_n+w_n\)，其中 \(s_n=e^{-t_n^2/2}\)、\(w_n=e^{-t_n^2/6}\)，\(t_n\) 为 \([0,10]\) 上 \(N\) 点等距采样，\(\alpha=-\mathcal{Z}[w](1)/\mathcal{Z}[s](1)\)，保证 \(U(1)=0\)；带限 sinc 输入 \(u_n=\frac{\omega_c}{\pi}\operatorname{sinc}\left(\frac{\omega_c}{\pi}n\right)\)，\(\omega_c=5\pi/6\)。
- **损失函数**：不涉及训练损失。
- **训练策略**：不涉及学习率、warmup、batch size、优化器、训练步数或调度。
- **关键超参数**：Laguerre 参数 \(a\) 按实验选择，包括 \(0\)、\(0.3+0.2i\)、\(0.1i\)、\(0.97e^{i0.052}\)；傅里叶长度 \(N\) 从 \(2\) 到 \(20000\) 不等；IR 恢复 quadrature 节点数 \(N_q=20000\)（带限实验中将 \(N=300\) 的系数零填充到 \(N_q\) 以提升精度）；warped 采样点由 \(\zeta_k=B^{-a}(\omega^k)\) 计算。
- **训练硬件**：Apple MacBook Pro（M4，32 GB RAM，macOS Tahoe），MATLAB 2025a；另有 Python 实现运行时对比。
- **推理细节**：Algorithm 3 使用一次 FFT、两次元素除法和缩放；Algorithm 4 使用复合梯形公式，\(N_q+1\) 个等距节点，周期积分权重按 \(1/(N_q+1)\) 均等处理；系数先零填充再计算 Z 变换 \(H^a\)。
- **正则化或稳定训练技巧**：未使用正则化；论文指出 ETFE 正则化会引入偏差，因此尽量避免该问题。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] [SCORING_SOURCE_1/50] 论文提出 Laguerre-Fourier 广义 ETFE 框架，通过 Blaschke 因子重排采样点并保留循环卷积，给出高效求解算法、条件数上界和 RKHS 恢复方案；在 ETFE 失效的谱零点与带限激励下展示能力。属于有理论支撑的方法创新，但主要是经典方法的推广与算法改进，未构成范式级突破。

*   技术严谨性 (1.0/1.5)：[A_LIMITS] [A_RESULTS] 定理与算法推导较完整，但存在未解决的技术疑点：定理 3.3 的对角优势充分条件是否成立未讨论，论文宣称变换后 well-conditioned 与谱零点实验中 Γ 条件数达 4.5×10^3 以上形成张力，且高效 Algorithm 3 仍依赖 warped 采样的除法，未给出自动选 a 或存在性保证。技术严谨性受这些未闭合假设限制。

*   实验充分性 (0.8/1.5)：[A_RESULTS] [A_LIMITS] 实验仅在两个模拟离散 LTI 系统上进行，未加入测量噪声，基线仅与 ETFE 比较，未与正则化 ETFE、Tikhonov、子空间或向量拟合等主流方法比较，也缺乏统计检验和真实声学数据；谱零点实验中误差随 N 非单调恶化未被解释。实验充分性较弱。

*   清晰度 (0.8/1)：[A_SUMMARY] [A_METHOD] 论文以清晰管线、算法框图和附录定义推导展开方法，模块拆分完整，读者可跟随从 warped 采样到 IR 恢复的流程；虽然数学密度较高，但组织与表达未见明显问题。

*   影响力 (0.6/1.5)：[A_SUMMARY] 方法面向声学、地震、层析等带限激励系统辨识，解决 ETFE 在谱零点或带限时的病态问题，对音频/声学领域有潜在实用价值；但目前仅合成系统验证，无噪声和真实数据，影响尚未充分释放。

*   开源 (1.2/1.5)：[A_OPEN] 核心代码和脚本可通过 Zenodo 获取，采用 MIT licence，覆盖算法实现；但未提供 GitHub 等仓库链接，文档完整性未明确，因此按核心产物开放但文档不完整给 1.2。

*   可复现性 (0.3/0.5)：[A_METHOD] [A_LIMITS] 论文给出算法流程、关键超参数（a 值、N、N_q）、硬件环境与附录实验设置，但系统参数 λ_k、r_k 的具体随机分布未说明，部分输入分布也未完全限定，复现配置存在少量缺失。

*   工程/实践价值 (0.9/1.5)：[A_METHOD] [A_RESULTS] 高效 Algorithm 3 将原型中多次 FFT 压缩为单 FFT 加缩放和除法，工程实现有明确效率优化；但总运行时间仍比 ETFE 高几个数量级，IR 恢复依赖 N_q=20000 的 quadrature，参数 a 手动选择且成本收益未量化，实际部署价值中等。

### 🚨 局限与问题

1. **论文明确承认的局限**：作者承认当 \(a\) 接近单位圆边界时 \(\Gamma\) 会病态；离散 Laguerre 系数在 \(N\) 不够大或 \(|B^a(\lambda_k)|\approx1\) 时逼近连续系数需要很大 \(N\)；恢复精度依赖部分和 \(S_N^a H\) 近似 \(H\) 的程度；当前方法只能处理严格 proper 的 SISO LTI 系统，未来计划扩展到 MIMO。

2. **审稿人发现的潜在问题**：
   - 高效 Algorithm 3 仍依赖在 warped 采样点上的频域除法，虽然可以通过选 \(a\) 缓解，但论文未给出任何自动选 \(a\) 或证明存在 \(a\) 使得所有采样点远离零点的机制。
   - 条件数定理 3.3 的充分条件在实践中可能不成立，论文没有讨论条件成立性及其验证方法。
   - 实验未加入测量噪声，而原问题动机之一就是噪声在病态除法下被放大；缺少噪声下的误差增长曲线，使实际适用性存疑。
   - 没有与正则化 ETFE、Tikhonov 正则化、子空间方法、向量拟合等偏置-方差折中方法进行比较，无法判断 LETFE 是否真的更优。
   - 论文声称变换后问题 "well-conditioned"，但实验 2 中 \(\Gamma\) 条件数仍达到 \(4.5\times10^3\) 以上，这一矛盾没有被作者正面讨论。
   - 在谱零点实验中，随着 \(N\) 从 \(10000\) 增大到 \(20000\)，\(a=0.1i\) 的相对 \(\ell_2\) 误差反而从 \(1.85\times10^{-3}\) 恶化到 \(4.69\times10^{-1}\)，这一非单调行为未被解释。
   - 带限实验中 \(a=0.97e^{i0.052}\) 取得 \(\Gamma\) 条件数 \(1.0047\)，显著好于谱零点实验，但论文未解释这种条件数显著差异是否来自输入信号或系统规模。
   - IR 恢复的 trapezoidal quadrature 需要 \(N_q=20000\) 才达到较好精度，这使运行时大幅增加，该成本与带宽恢复收益的 trade-off 没有定量分析。
   - 论文未讨论参数 \(a\) 的选择与系统极点分布的关联，尽管实验中 \(a\) 的选择对误差影响巨大。
   - 系统参数 \(\lambda_k\) 和 \(r_k\) 的具体随机分布未说明，降低了不同系统上误差值的可比性和复现性。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
