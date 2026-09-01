---
title: "Multirate State Space Models for End-to-End Processing of Pulse Density Modulated Speech Signals"
date: 2026-08-31
draft: false
tags: [语音增强, 端到端, 模型评估]
categories: [论文速递]
description: "语音增强 | 7.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.28472"
paper_digest_api_reader_contract: "beginner-researcher-v2"
paper_digest_api_reader_article_sha256: "23396daf44bc063afc1a97e67827ec256406a62a400b488788ac4666d2a8ba73"
paper_digest_api_reader_plan_sha256: "267a52fc162c694e0a60467b51d3e9300f82a3a2dc7e33d8c1e5171b16324254"
---

# 📄 不用再把 PDM 翻译成 PCM：让状态空间模型直接听懂单比特麦克风

> 英文题目：*[Multirate State Space Models for End-to-End Processing of Pulse Density Modulated Speech Signals](https://arxiv.org/abs/2608.28472)*
>
> 一句话：**针对常开设备上单比特脉冲密度调制麦克风必须先滤波抽取才能喂给神经网络的代价，论文用连续时间状态空间模型做编码器把 16 kHz 脉冲编码调制的训练直接泛化到 128 kHz 至 2 MHz 的脉冲密度调制测试，并在 2 MHz 下以 FouT 编码取得 3.24 的 PESQ 超过 3.07 的 PCM 基线，代价是全部 PDM 均为仿真且缺乏真实硬件与专用 PDM 基线对比。**

> 标签：#语音增强 #端到端 #模型评估
>
> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Ludovic Boulanger：机构信息未在 arXiv HTML 中可靠披露
- Sean U. N. Wood：机构信息未在 arXiv HTML 中可靠披露

## 💬 毒舌点评

用状态空间模型（State Space Model, SSM）的连续时间参数化一举打通脉冲密度调制（Pulse Density Modulation, PDM）多采样率泛化与长序列训练成本两大堵点，训练只用16 kHz脉冲编码调制（Pulse Code Modulation, PCM）即可零样本泛化到128 kHz至2 MHz的PDM，思路干净且对常开边缘设备极具诱惑力；代价是全部PDM均为二阶Sigma-Delta仿真合成、未见真实微机电（Micro-Electro-Mechanical System, MEMS）麦克风录制与量化噪声失配的硬件验证，且与PDM专用卷积神经网络（Convolutional Neural Network, CNN）滤波抽取及端到端基线的对比缺位，工程可信度仍需打问号。

## 📌 核心摘要

针对低功耗常开边缘设备普遍采用单比特PDM MEMS麦克风、而现有深度神经网络（Deep Neural Network, DNN）多依赖PCM且需级联低通滤波与抽取的PDM到PCM转换的问题，本文提出以SSM作为编码器层的端到端架构。核心机制是利用SSM的连续时间建模在不同调制方式与采样率下产生一致的隐变量表示，并利用其长时记忆对系数序列进行无抗混叠的大幅降采样以匹配下游固定速率。该设计无需在PDM上训练即可实现调制与采样率不变处理，新颖之处在于将FouT/LegT等滑动窗口SSM的基函数特性与PDM噪声整形后基带一致的物理先验对齐，并通过按过采样比（Oversampling Ratio, OSR）抽取实现速率归一。在Google Speech Commands关键词检测与VoiceBank+DEMAND语音增强上的主结果显示，2 MHz PDM下最优FouT配置PESQ达3.24超过PCM基线3.07，轻量32维2 ms配置仍达3.08/93.13%，512 kHz低功耗模式下关键词检测92.66%、语音增强2.98/92.0%保持稳健增益。实际意义在于省去PDM到PCM转换模块并支持同一模型覆盖睡眠、低功耗与性能多档功耗模式。主要局限是评估完全基于仿真PDM、缺乏真实硬件与实时码率切换验证，且对Legendre多项式基在高OSR下混叠的解释仍偏经验性。

## 🔗 开源与复现资源

- 代码： https://github.com/NECOTIS/ssm-speech-processing.git
- 模型权重： 论文中未提及
- 数据集： Google Speech Commands Dataset 包含105829条16 kHz PCM语音，VoiceBank+DEMAND Dataset 包含11572条训练语音和872条测试语音，论文中未提供直接下载链接
- Demo： 论文中未提及
- 复现材料： 论文提供了训练配置，关键词检测任务使用6层LegS SSM堆叠并训练50 epochs，使用AdamW优化器学习率1e-2和权重衰减0.05，语音增强任务使用LiSenNet作为下游网络并使用AdamW优化器学习率1e-3，PCM训练集通过高通滤波白噪声进行增强，代码仓库计划公开但未提供检查点
- 论文中引用的开源项目： Calcul Québec https://calculquebec.ca，Digital Research Alliance of Canada https://alliancecan.ca，Quebec Research Fund https://doi.org/10.69777/365045

## 🧭 深度解读

### 为什么这个任务不是把声音丢给模型就结束？
想象一枚纽扣大小的常开麦克风，它要全年无休地听唤醒词，却只能用一根数据线、几十微瓦的预算。工程师于是选了单比特脉冲密度调制（Pulse Density Modulation, PDM）微机电麦克风：它用极高的过采样把振幅藏进 0 和 1 的疏密里，靠简单的 Sigma-Delta 模数转换器实现低成本与多档功耗。但下游的语音神经网络大多只认识多比特的脉冲编码调制（Pulse Code Modulation, PCM），比如 16 kHz 的 16 比特波形。

于是每块芯片里都多了 1 段“翻译”：先用级联低通滤波把 P D M 的高频量化噪声压掉，再抽取到 16 kHz。这段翻译在手机上无感，在助听器、耳机、手表这类资源受限设备上却成了常驻开销。更麻烦的是，PDM 麦克风会为了省电在睡眠、低功耗、性能三档间切换采样率，从约 128 kHz 到 2 MHz 不等，翻译参数和模型输入速率都要跟着变。

如果能让模型直接吃 PDM，且同一个模型在任意采样率下都给出一致的内部表示，就能省掉翻译、省掉为每档速率重训 1 次的麻烦。这正是论文要回答的：如何让网络在只见过 16 kHz PCM 的情况下，零样本听懂任意速率的单比特流。

### 已有路线卡在哪里，论文站在哪条分岔上？
过去有两条主流绕开翻译的路线。第一条把滤波加抽取做成一个可学习的卷积神经网络（Convolutional Neural Network, CNN）前端，把多级滤波压缩成一层，确实比传统滤波省算力，但仍是一个显式的抽取模块，且往往固定在单一速率上训练。第二条更彻底，端到端直接把 PDM 喂给深度神经网络，让第一层自己学滤波器，在关键词检测和 PDM 到 PCM 增强上都跑通了。

这两条路共享两个堵点。一是训练必须在长序列上进行，2 MHz 的 PDM 比 16 kHz 的 PCM 长 128 倍，显存和时间直线上升；二是速率泛化差，在一个过采样比（Oversampling Ratio, OSR）上训好的模型，换个 OSR 性能就掉，无法真正利用 PDM 的多功耗模式。

论文没有去设计更巧的滤波器，而是换了表示。作者注意到一个物理先验：PDM 经过噪声整形后，在 PCM 奈奎斯特频率以下的基带频谱与 PCM 几乎一致，差异主要在奈奎斯特以上的高频量化噪声。只要编码器只对基带敏感、且对采样率不敏感，就能在系数域自然对齐两种调制。状态空间模型（State Space Model, SSM）的连续时间参数化恰好提供了这两个性质，这让工作从“学一个更好的抽取”转向“学一个与调制和速率无关的记忆”。

### 要解决的到底是哪两个不变性？
第一个不变性是调制不变。给定同一段语音，16 kHz PCM 和 1.024 MHz PDM 在 8 kHz 以下应当被编码成几乎相同的隐向量，差别只应是可控的量化噪声。第二个不变性是速率不变。无论输入是 128 kHz 还是 2 MHz，编码器输出给下游的序列速率应当固定，否则下游的分类器或增强网络会因为时间步长突变而失效。

把这两个不变性同时满足，训练就可以只在短而干净的 16 kHz PCM 上完成，测试时直接面对任意 OSR 的 PDM。论文的检验标准也因此很清晰：在 2 MHz 标准档要接近或超过 PCM 基线，在 512 kHz 低功耗档仍要保持可用增益，且在大幅降采样后不崩溃。

### 端到端流水线长什么样？
流水线是单阶段的：波形输入 → SSM 编码器层 → 固定速率的系数序列 → 任务相关下游网络 → 对增强任务再合成 16 kHz PCM 波形。没有独立的 PDM 到 PCM 转换模块，速率归一发生在系数域。

核心思想是用连续时间记忆窗口定义编码。SSM 的状态向量编码的是过去 θ 秒内的历史，而不是过去多少个采样点。θ 以秒为单位固定，比如 2 ms 或 8 ms，那么在 16 kHz 下它对应 32 个点，在 1.024 MHz 下对应 2048 个点，物理时长一致。配合按 OSR 抽取，就能让不同速率的输入在抽取后对齐到同一输出速率。

论文用 2 张图来建立直觉。图 1 要看橙色低通叠加：PDM 经过 128 抽头、截止 7.5 kHz 的有限冲激响应滤波后，与 PCM 波形重合，说明基带一致。图 2 要看功率谱密度：随着 OSR 增大，2 阶 Sigma-Delta 的谱在 8 kHz 奈奎斯特虚线以下越来越贴合 PCM 谱，这是后续 FouT 与 LegT 选择的关键依据。

### SSM 编码器如何把任意速率压成固定速率？
编码器的输入是任意 OSR 的单比特 PDM 流或 16 kHz PCM 流，输出是固定速率的系数序列，职责是让下游对调制和速率不敏感。内部是一套连续时间线性动力系统：

\[\mathbf{\dot{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}u(t)\]

其中\(\mathbf{A} \in \mathbb{R}^{H \times H}\) 是状态矩阵，\(\mathbf{B} \in \mathbb{R}^{H \times 1}\) 是投影矩阵，\(H\) 是状态维度即基函数个数，\(\theta\) 是记忆窗口长度，\(\mathbf{x}(t) \in \mathbb{R}^{H}\) 编码区间\([t-\theta, t]\) 内的历史。离散化采用双线性变换：

\[\bar{\mathbf{A}} = (\mathbf{I} - \frac{\Delta}{2}\mathbf{A})^{-1}(\mathbf{I} + \frac{\Delta}{2}\mathbf{A}), \quad \bar{\mathbf{B}} = (\mathbf{I} - \frac{\Delta}{2}\mathbf{A})^{-1}\Delta\mathbf{B}\]

\(\Delta\) 是离散步长，对 PCM 取 1/16000，对 OSR 为 64 的 PDM 取 1/1024000。离散递推为\(\mathbf{x}[n] = \bar{\mathbf{A}}\mathbf{x}[n-1] + \bar{\mathbf{B}}u[n]\)，历史可通过基函数矩阵重构：

\[\hat{\mathbf{u}}_{n} = \mathbf{P}\mathbf{x}[n]\]

\(\mathbf{P} \in \mathbb{R}^{\bar{\theta} \times H}\) 为基函数采样矩阵，\(\bar{\theta}\) 是以点计的窗口长度。

初始化决定了记忆形状。FouT 使用截断傅里叶基，LegT 使用缩放 Legendre 多项式：

\[P_{h}(x)=\begin{cases}cos(2\pi hx)&\text{if h is 0},\\ \sqrt{2}cos(2\pi hx)&\text{if h is even},\\ \sqrt{2}sin(2\pi hx)&\text{otherwise}\end{cases}\]

\[P_{h}(x)=(-1)^{n}(2h+1)\frac{1}{2^{h}h!}\frac{d^{h}}{dx^{h}}(x^{2}-1)^{h}\]

两者都是固定\(\theta\) 的滑动窗口，近乎完美记住窗内、遗忘窗外，对应短时傅里叶变换的分析-处理-合成结构；下游分类器另用指数衰减记忆全历史的 LegS，但编码器聚焦 FouT 与 LegT。图 3 应对比三者的前 4 个基函数与重构能力：FouT 与 LegT 在绿色窗口内几乎重合，窗外迅速遗忘。

数据流分两步。先以原生速率生成系数序列，再抽取：对 PDM 每隔\(K_{PDM}=OSR\) 保留一个系数向量，对 PCM 按\(K_{PCM}\) 抽取，且满足\(K_{PDM}=K_{PCM} \times OSR\) 以保证输出速率一致。由于相邻系数对应的连续时间窗口高度重叠，抽取无需抗混叠滤波。图 4 的 3 步正是编码、按 OSR 保留、输出固定速率；图 6 对比同一段语音在\(\theta=8\) ms、\(H=128\) 下 PCM 与 OSR 64 的 PDM 系数轨迹，抽取前两者几乎一致仅差量化噪声，抽取后仍对齐。论文展示 2 MHz 输入可降采样 65536 倍至 31.25 Hz 仍可用，这直接削减了下游的时间步数。

关键取舍在于基函数带宽。FouT 基频谱窄带且数量仅由\(H\) 决定，不会随 OSR 扩展而把奈奎斯特以上的量化噪声带进来；LegT 基带较宽，在 PDM 高频噪声下易混叠，且在合成阶段把高频噪声折回基带，这解释了增强任务中 FouT 全面优于 LegT 的现象。每通道可学习的\(\Delta\) 则让不同通道自适应不同时间尺度。

![原论文 Fig. 1：Comparison of a PCM encoded signal (top) and the same PDM encoded signal (middle and bottom).](/audio-paper-digest-blog/images/papers/2608.28472/figure-1-02c8211f6873d180.png)

*论文图 1。这张图来自原论文 Fig. 1:，图示内容为“Comparison of a PCM encoded signal (top) and the same PDM encoded signal (middle and bottom).”。请结合“SSM 编码器如何把任意速率压成固定速率？”的正文，按图例、坐标轴或模块连线核对；图中没有呈现的内容不作外推。*

### 只在 PCM 上训练，如何让模型见过 PDM 的噪声？
训练阶段完全没有 PDM。所有梯度都来自 16 kHz PCM，但通过两种增广让模型提前适应 PDM 的量化特性。第一种是高通白噪声增广，滤波器为

\[H(z)=G(1-\beta z^{-1})\]

\(G\) 在 1e-3 至 1e-1 间对数均匀采样，\(\beta\) 固定 0.93，用来模拟低 OSR 时泄漏到基带的整形噪声，增广后功率谱更贴近真实 PDM。第二种仅用于语音增强：8 至 16 比特随机量化，把输入波形的有效码率在 128 kbps 至 256 kbps 间抖动，而目标保持 16 比特不变，迫使网络学会从低分辨率输入恢复高分辨率输出。

下游网络复用已有结构以隔离编码器的贡献。关键词检测分支是 6 个单向 LegS 初始化的 SSM 块堆叠，隐维度 64，输入输出特征维 64，\(\mathbf{A}\)、\(\mathbf{B}\) 与每通道独立的\(\Delta\) 均可学习，输出经时间平均后送全连接层产生 35 类 logits，损失为交叉熵，优化器 AdamW，学习率 1e-2、权重衰减 0.05，\(\mathbf{A}\)、\(\mathbf{B}\) 单独用 1e-3，余弦退火，共 50 轮。语音增强分支复用 LiSenNet，去掉迭代的 Griffin-Lim 与编解码间跳连以降低延迟与参数，输入输出均为 SSM 系数，预测的系数先按 PCM 速率采样基函数并重叠相加合成波形，再做 512 点、跳长 256 的短时傅里叶变换以复用原有的 MetricGAN 对抗损失，生成器损失为对数压缩频谱均方误差、幅度谱均方误差与判别器预测 PESQ 均方误差的加权和，权重分别为 0.1、0.9、0.05，优化器 AdamW，学习率 1e-3，无权重衰减。

### 在什么数据、什么协议下验证泛化？
评估完全基于仿真 PDM：先对 PCM 做 3 次样条插值按 OSR 8 至 128 倍上采样，再经单比特 2 阶 Sigma-Delta 调制器得到 128 kHz 至 2 MHz 的 PDM 流。这意味着量化噪声与闲置音调等硬件非理想未被真实录制检验，是后续局限的根源。

根据论文正文与图中报告值整理，数据集与协议如下：

| 数据集 | 样本构成与划分 | 输入与目标 | 指标方向 |
| --- | --- | --- | --- |
| Google Speech Commands | 105829 条 16 kHz PCM，来自 2618 位说话人，划分为训练 8843、验证 9981、测试 11005，35 类关键词 | 训练用 16 kHz PCM，测试用插值合成的 128 kHz 至 2 MHz PDM | 准确率越高越好 |
| VoiceBank+DEMAND | 训练 11572 条来自 28 位说话人混合 DEMAND 中 8 种噪声与 2 种人工噪声，信噪比 0 dB 至 15 dB，原始 48 kHz 下采样至 16 kHz；测试 872 条来自 2 位新说话人混合 5 种新噪声，信噪比 2.5 dB 至 17.5 dB | 输入为含噪语音的 SSM 系数，目标为干净语音的 SSM 系数，合成后算 PESQ 与 STOI | PESQ 与 STOI 越高越好 |

基线方面，关键词检测对比同一 SSM 堆叠在 PCM 上的表现，语音增强对比原始 LiSenNet 在 PCM 上的 3.07 PESQ 与 94.0% STOI。超参扫描覆盖状态维度\(H\) 32 至 512、记忆窗口\(\theta\) 2 ms 至 32 ms、抽取因子\(K\) 128 至 65536、重叠率 0% 至 87.5%。论文未报告多次运行方差、置信区间与统计检验，也未披露训练硬件型号与时长。

### 主结果证明了什么，又在哪类设置下不占优？
检验按问题组织：是否在标准 2 MHz 档达到 PCM 基线水平，是否在低功耗 512 kHz 档保持增益，是否能在大幅降采样与小模型下不崩溃。

根据论文正文与图中报告值整理，关键结果如下：

| 比较或条件 | 指标 | 明确报告值 | 这项数字支持什么 |
| --- | --- | --- | --- |
| 关键词检测 PCM 16 kHz LegT H=32 θ=2 ms | 准确率 | 93.53% | PCM 基线参考点 |
| 关键词检测 PDM 2 MHz OSR 128 LegT H=128 θ=8 ms | 准确率 | 93.72% | 最优 PDM 配置小幅超过 PCM 基线，证明调制不变性 |
| 关键词检测 PDM 2 MHz OSR 128 FouT H=512 θ=32 ms | 准确率 | 93.44% | 同速率下 LegT 略优于 FouT，说明任务相关的基选择 |
| 关键词检测 PDM 512 kHz OSR 32 LegT H=32 θ=2 ms | 准确率 | 92.66% | 低功耗档仅比 PCM 基线低约 0.9 个百分点，支持多档功耗复用 |
| 语音增强 PCM 16 kHz LiSenNet 原始 | PESQ / STOI | 3.07 / 94.0% | PCM 基线参考点 |
| 语音增强 PDM 2 MHz OSR 128 FouT H=512 θ=32 ms | PESQ / STOI | 3.24 / 93.0% | 最优 FouT 超过 PCM 基线，证明增强任务的速率泛化 |
| 语音增强 PDM 2 MHz OSR 128 FouT H=32 θ=2 ms | PESQ / STOI | 3.08 / 93.0% | 轻量 32 维窄窗仍接近基线，支持边缘部署 |
| 语音增强 PDM 512 kHz OSR 32 FouT H=32 θ=2 ms 重叠 75% | PESQ / STOI | 2.98 / 92.0% | 低功耗档仍显著高于含噪 2.0/92.0%，但低于 2 MHz 档 |

图 8 与图 11 要看对角线：当\(H\) 与\(\bar{\theta}_{PCM}\) 不匹配时性能分叉。若\(\bar{\theta}_{PCM} < H\)，基函数会编码奈奎斯特以上频率，PDM 的高频量化噪声在测试时突然出现；若\(\bar{\theta}_{PCM} > H\)，基无法覆盖 0 至 8 kHz 全带，形成固有低通。FouT 因窄带特性在对角线上恰好覆盖全带而不越界，因此在增强任务全面占优，LegT 则因宽带在 PDM 下混叠。

降采样与延迟的权衡由图 9 与图 13 回答。固定\(H=32\) 时，\(\theta=8\) ms 配置在\(K=\bar{\theta}_{PDM}\) 仍保持 88% 准确率，在\(K=4 \times \bar{\theta}_{PDM}\) 为 83%，降幅控制在 10% 以内，验证无滤波抽取可行但极限压缩有代价。增强任务中重叠 75% 与 87.5% 分别取得 3.08 与 3.13，对应每 1.5 ms 产生 1 帧、需 3 帧重构的 4.5 ms 算法延迟，满足助听器类低于 6 ms 的要求。

未胜出与边界同样重要。关键词检测在 2 MHz 下 LegT 优于 FouT，与增强任务相反，说明没有单一最优基。跨 OSR 泛化在 128 kHz OSR 8 时 PESQ 回落至 2.24，仅略高于含噪 2.0，说明极低功耗档的量化噪声仍是瓶颈。论文也未与 PDM 专用 CNN 滤波抽取及端到端 PDM 基线做公平对比，因此不能推出在真实硬件与同等算力下一定优于那些专用前端。

![原论文 Fig. 2：Comparison of the PDM and PCM power spectral densities (PSD) for a 1-second speech segment.](/audio-paper-digest-blog/images/papers/2608.28472/figure-2-4522f84580e9d69a.png)

*论文图 2。这张图来自原论文 Fig. 2:，图示内容为“Comparison of the PDM and PCM power spectral densities (PSD) for a 1-second speech segment.”。请结合“主结果证明了什么，又在哪类设置下不占优？”的正文，按图例、坐标轴或模块连线核对；图中没有呈现的内容不作外推。*

![原论文 Fig. 3：Demonstration of the basis functions and the memory windows of the FouT, LegT, and LegS SSMs.](/audio-paper-digest-blog/images/papers/2608.28472/figure-3-1a15e768c8bc853d.png)

*论文图 3。这张图来自原论文 Fig. 3:，图示内容为“Demonstration of the basis functions and the memory windows of the FouT, LegT, and LegS SSMs.”。请结合“主结果证明了什么，又在哪类设置下不占优？”的正文，按图例、坐标轴或模块连线核对；图中没有呈现的内容不作外推。*

![原论文 Fig. 4：Our proposed SSM encoder layer. The SSM is responsible for creating a modulation- and…](/audio-paper-digest-blog/images/papers/2608.28472/figure-4-b913ec15b24546aa.png)

*论文图 4。这张图来自原论文 Fig. 4:，图示内容为“Our proposed SSM encoder layer. The SSM is responsible for creating a modulation- and sampling-rate-invariant representation of the input signal.”。请结合“主结果证明了什么，又在哪类设置下不占优？”的正文，按图例、坐标轴或模块连线核对；图中没有呈现的内容不作外推。*

### 哪些结论还不能直接搬到硬件？
最核心的边界是数据来源。全部 PDM 均由 2 阶 Sigma-Delta 仿真生成，未使用真实 MEMS 麦克风录制，量化噪声的非理想、闲置音调、时钟抖动等未被评估，泛化到硬件需谨慎。作者在结论中也明确提出下一步需在现场可编程门阵列等嵌入式平台外接真实 PDM 麦克风，并验证对采样率突变的实时适应性。

第二，机理仍偏经验。LegT 在高 OSR 下性能骤降被归因于宽带基在合成阶段的混叠，但缺乏对重构阶段混叠的量化分析；FouT 如何在不引入奈奎斯特以上频率的前提下增加基向量数以提升奈奎斯特以下分辨率，论文类比短时傅里叶变换补零，仍是开放问题。

第三，评估维度不完整。未报告多次运行方差与统计检验，未对比文献中 PDM 专用 CNN 滤波抽取模块，未测量真实功耗、内存与吞吐，工程可信度停留在流水线与延迟分析层面。低 OSR 8 倍时的有限提升也提示，若要覆盖睡眠模式以下的极低功耗档，还需更强的噪声鲁棒设计。

### 复现需要哪些材料，缺什么？
可复现的部分已较细。SSM 编码器的连续时间参数、双线性离散化、\(H\) 32 至 512、\(\theta\) 2 ms 至 32 ms、抽取因子 128 至 65536、AdamW 学习率与轮数、高通增广\(G\) 与\(\beta=0.93\)、8 至 16 比特随机量化均已披露，下游的 6 层 LegS 堆叠与精简 LiSenNet 结构、512 点短时傅里叶变换跳长 256、重叠相加合成也已说明。代码仓库地址为 https://github.com/NECOTIS/ssm-speech-processing.git，论文表述为将公开。

缺失的链路在于可核验产物。论文未提供模型权重与演示，未给出数据集直接下载链接，未披露 GPU 型号、数量与训练时长，也未发布检查点。PDM 合成依赖的 3 次样条插值与 2 阶 Sigma-Delta 参数虽有描述，但真实硬件的非理想无法通过仿真脚本完全复刻。若要严格复现跨 OSR 曲线，需要自行按 OSR 8 至 128 重跑仿真并固定随机种子，同时补充方差与显著性检验。

### 如何用一句话记住这篇工作的取舍？
这篇工作把“先翻译再识别”的惯性，换成了“用连续时间记忆直接对齐基带”。当基函数选对、窗口与维度匹配、抽取按 OSR 对齐时，16 kHz PCM 上训好的模型就能在 2 MHz 下超越 PCM 基线，在 512 kHz 下保持可用，并在系数域把 2 MHz 流压到 31.25 Hz 仍可工作。

对刚入方向的研究生，它的启示在于两点。一是表示先于结构：先找到 PDM 与 PCM 共享的不变量，再选能参数化该不变量的模型，SSM 的\(\theta\) 与\(\Delta\) 正是为此而生。二是任务决定基：分类容忍宽带 LegT 的混叠，增强则需要 FouT 的窄带保真，超参不是玄学而是频谱覆盖问题。

下一步值得做的，是把仿真曲线搬到真实麦克风上，补上与 PDM 专用前端的同算力对比，并回答那个被作者留到未来的问题：如何在不越过奈奎斯特的前提下，让 FouT 在基带内看得更细。

<details>
<summary>📎 论文与评分元数据</summary>

标签：#语音增强 #端到端 #模型评估

**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5

✅ **7.5/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #语音增强 | #端到端 | #模型评估 | [arxiv](https://arxiv.org/abs/2608.28472)

</details>

## ⚖️ 评分依据与证据（展开查看）

<details>
<summary>逐维得分、全文证据与扣分边界</summary>

*   创新性 (1.5/2)：利用连续时间 SSM 参数化与 FouT/LegT 滑动窗口基函数对齐 PDM 基带一致先验，实现 16 kHz PCM 训练零样本泛化至 128 kHz 至 2 MHz PDM，并通过按 OSR 抽取实现无抗混叠大幅降采样至 31.25 Hz，系统级组合具明确新颖性。

*   技术严谨性 (1.2/1.5)：给出连续时间动力系统与双线性离散化公式及 Δ 取值，区分 LegT/FouT/LegS 记忆窗与基函数频谱，逻辑自洽；但 对 LegT 高 OSR 混叠仅定性解释，缺乏重构阶段量化分析，推导完备性受限。

*   实验充分性 (1.2/1.5)：在 Google Speech Commands 与 VoiceBank+DEMAND 上完成 H 32 至 512、θ 2 ms 至 32 ms、K 128 至 65536 系统消融及 128 kHz 至 2 MHz 跨 OSR 泛化，2 MHz 下 PESQ 3.24 超 PCM 基线 3.07；但 全部 PDM 为二阶 Sigma-Delta 仿真、缺真实录制与 PDM 专用 CNN 对比，且未报告方差与统计检验，支撑边界受限。

*   清晰度 (0.8/1)：结构按背景、SSM 编码器、下游分支、实验分节展开，图 4 至图 6 清晰展示编码抽取与系数对齐，符号 θ、H、K 定义一致；但部分公式与基函数频谱说明较密集，低 OSR 失效机理阐述偏经验性，影响快速复核。

*   影响力 (1.0/1.5)：省去 PDM 到 PCM 低通滤波与抽取，同一模型覆盖 512 kHz 低功耗与 2 MHz 性能档，2 MHz 下关键词检测 93.72% 与语音增强 3.24 PESQ 均接近或超越 PCM 基线，对常开边缘语音设备具明确价值；但受限仿真评估与未验证实时码率切换，行业外推仍需硬件验证。

*   开源 (0.5/1.5)：核心产物为代码仓库 https://github.com/NECOTIS/ssm-speech-processing.git，论文表述为 will be made available，属明确承诺未来开放但尚未发布可核验版本，未提供模型权重与 Demo，按锚点计 0.5。

*   可复现性 (0.3/0.5)：已披露 SSM 状态维度 H 32 至 512、记忆窗 θ 2 ms 至 32 ms、抽取因子 K 128 至 65536、AdamW 学习率与训练轮数及增强滤波参数；但 未提供硬件型号与训练时长、未发布检查点与数据集直接链接，关键复现链路少量缺失。

*   工程/实践价值 (1.0/1.5)：给出单阶段端到端流水线，SSM 编码器按 OSR 抽取至固定速率，下游复用 6 层 LegS 与精简 LiSenNet 并通过 OLA 在 75% 重叠下实现 4.5 ms 算法延迟与 65536 倍降采样至 31.25 Hz 的可复用设计；但 未在 FPGA 等平台实测延迟、吞吐与功耗，工程价值停留于可复用流水线层面。

</details>

---

[← 返回 2026-08-31 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-31/)
