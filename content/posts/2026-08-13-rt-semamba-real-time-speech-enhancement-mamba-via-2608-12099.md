---
title: "RT-SEMamba: Real-Time Speech Enhancement Mamba via Progressive Knowledge Distillation"
date: 2026-08-13
draft: false
tags: [语音增强, 知识蒸馏, 流式处理, 实时处理, 模型压缩]
categories: [论文速递]
description: "语音增强 | 6.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.12099"
---

# 📄 RT-SEMamba: Real-Time Speech Enhancement Mamba via Progressive Knowledge Distillation

标签：#语音增强 #知识蒸馏 #流式处理 #实时处理 #模型压缩

**6.6/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.7/1 | 影响 0.8/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.6/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #语音增强 | #知识蒸馏 | #流式处理 #实时处理 | [arxiv](https://arxiv.org/abs/2608.12099)


### 👥 作者与机构

论文未提供作者-机构的逐人数字映射；脚注机构列表为：Academia Sinica, Taiwan；National Taiwan University, Taiwan；Kore University of Enna, Italy；University of Palermo, Italy；NVIDIA。

- 第一作者：Rong Chao。脚注未明确其数字标注，但其邮箱为 roychao@cmlab.csie.ntu.edu.tw，可合理推断与 National Taiwan University 相关。
- 通讯作者：Yu Tsao。邮箱为 yu.tsao@citi.sinica.edu.tw，可合理推断属于 Academia Sinica。
- 其余作者：Sung-Feng Huang、Moreno La Quatra、Sabato Marco Siniscalchi、Wen-Huang Cheng、Szu-Wei Fu 的具体机构映射未在正文中逐人标注；仅能从机构列表和常见合作背景推测，但不宜过度确定。

### 💡 毒舌点评

把 Mamba 的固定尺寸循环状态变成实时 SE 的卖点，并用渐进式蒸馏把 8 层老师压到 1 层学生，方向清晰、工程动机诚实，RTF 对比也直观。但全文只在 VCTK-DEMAND 一个老基准上做文章，训练配置几乎空白，蒸馏带来的 PESQ 提升 0.12 也没有统计检验；此外论文摘要声称 2.75× speedup，而按正文 RTF 0.11 与 0.29 计算约为 2.64×，存在细微不一致。距离“有说服力的质量-延迟边界推进”还差一口气。

### 📌 核心摘要

本论文面向低延迟流式语音增强，解决 Transformer/Conformer 在流式推理中 KV cache 增长导致内存与带宽压力的问题。方法核心是将 SEMamba 改造为全因果的 RT-SEMamba，在时间轴单向、频率轴双向的 cTF-Mamba 块上以固定尺寸循环状态做逐帧推理，并用渐进知识蒸馏把 8 层教师压缩到 1 层学生。蒸馏由输出端幅度/相位/复数损失和中间特征归一化 MSE 组成，并在前 10% 训练步 ramp-up 蒸馏权重。结果在 VCTK-DEMAND 上，8 层教师达 3.32 PESQ、25 ms 算法延迟、RTF 0.29；1 层学生从 3.06 提升至 3.18 PESQ 且 RTF 保持 0.11，GapRecovery 在 PESQ 上为 46.2%。实际意义在于给出一个适合边缘流式 SE 的低参数、固定内存方案，并证明 KD 可显著改善浅层模型质量。主要局限是仅覆盖 VCTK-DEMAND 单数据集、未见跨域或大规模数据验证，训练配置复现细节不足，且收益的显著性未做统计检验。

### 🔗 开源详情

- 代码：https://github.com/RoyChao19477/RT-SEMamba （论文中声明将公开，但截至论文成稿尚未实际发布，因此 `has_code` 为否）
- 模型权重：论文中未提及
- 数据集：VCTK-DEMAND（VCTK + DEMAND 混合语音增强数据集）；论文中未提及具体下载链接或开源协议
- Demo：论文中未提及
- 复现材料：论文给出了主要训练与蒸馏配置：16 kHz 采样率；训练集由 28 个说话人与 10 种 DEMAND 噪声在 SNR 0/5/10/15 dB 下混合，共 11,572 个 noisy-clean 对；测试集 824 条，来自 2 个未见说话人与 5 种未见噪声，SNR 为 2.5/7.5/12.5/17.5 dB。蒸馏输出损失权重为 \(w_{\text{mag}}=1.0\)、\(w_{\text{pha}}=0.3\)、\(w_{\text{com}}=0.5\)；总蒸馏损失系数 \(\lambda_{\text{out}}=0.5\)、\(\lambda_{\text{feat}}=0.1\)；渐进 ramp-up 步数 \(K_{\text{ramp}}\) 为总训练步数的 10%。算法延迟为 25 ms；RTF 在单张 NVIDIA RTX 5090 GPU 上测量，1 层 RTF 0.11，8 层 RTF 0.29。论文中未提及检查点、训练日志或附录形式的额外复现材料。
- 论文中引用的开源项目：SEMamba、Mamba、PercepNet、DCCRN+、FullSubNet+、DEMUCS、LiSenNet、DeepFilterNet2、DeepFilterNet3、FRCRN、aTENNuate。论文中未提供这些第三方项目的具体链接，仅给出文献引用编号。

### 🏗️ 方法概述和架构

RT-SEMamba 是一个端到端复数频谱回归系统。整体流程为：输入 16 kHz 带噪语音波形，先做因果 STFT，得到幅度 \(M\) 和相位 \(P\)；网络接收 \((M, P)\)，预测增强幅度 \(\hat{M}\)、相位 \(\hat{P}\) 与复数重建谱 \(\hat{C} = \hat{M} e^{j\hat{P}}\)；最后通过因果 iSTFT 从 \((\hat{M}, \hat{P})\) 恢复增强波形。

下图展示了 RT-SEMamba 的整体架构流程。

![Figure 1: Architecture of the proposed RT-SEMamba.](https://arxiv.org/html/2608.12099v1/system_v5.png)

图中清晰显示了从输入噪声语音到输出增强语音的端到端流程，包括因果 STFT、编码器、cTF-Mamba 块和解码器等关键组件。


**1. 因果 STFT 与输入表示。** STFT 使用窗长 \(W=400\)、帧移 \(H=100\)、`center=False`，因此单窗算法延迟被约束为约 25 ms。该设置避免非因果中心窗带来的未来帧依赖。所有信号重采样到 16 kHz。输入特征为复数 STFT 的幅度和相位。

**2. 因果编码器与解码器。** 编码器和解码器中的时间卷积均使用非对称因果 padding：对卷积核大小 \(K\)，只在时间轴左侧补 \(K-1\) 个零，右侧不补零。这样每个时间帧只能看到过去和当前信息，不接收未来帧。论文还将原 SEMamba 中的 InstanceNorm2d 替换为通道级 LayerNorm，并在时间轴上采用因果 padding；同时在每个 cTF-Mamba 块后插入额外 MLP，以增强单帧建模能力。

**3. cTF-Mamba 块。** 每个 cTF-Mamba 块在时间轴上单向，在频率轴上双向：时间帧按 \(t=1,\dots,T\) 逐步处理，不允许 lookahead；同一帧内部的频率序列建模保持双向。该块内部遵循 Mamba-style 选择性状态空间模型，输入经过 depthwise 1D 卷积后进入 SSM 递归更新。SSM 的离散化状态转移可写为 \(h_n = \bar{A} h_{n-1} + \bar{B} x_n\)、\(y_n = C h_n\)，因此每层维护一个固定尺寸的隐藏状态 \(h_t\)，而不是逐层增长的 KV cache。这使长语音推理的内存和带宽开销与序列长度近似无关。

**4. 流式推理状态管理。** 在线推理采用 1-frame-in/1-frame-out 模式。系统在时间方向传播三类状态：temporal frame buffer 保存 encoder/decoder 因果时间卷积所需的前 \(K-1\) 帧；conv_state 保存 depthwise 1D 卷积在 SSM 前的最近 \(d_{\text{conv}}-1\) 个时间步缓冲；ssm_state 保存 SSM 的递归隐藏状态 \(h_t\)。每帧进入后更新这些状态，输出一帧增强频谱，并丢弃过期值。这样避免了重复计算历史帧，且每帧计算量不随 \(T\) 增长。

**5. 知识蒸馏框架。** 教师为 8 层 RT-SEMamba，学生为 1 层或 2 层 RT-SEMamba。教师参数冻结。学生 encoder/decoder 及单个/两个 cTF-Mamba 块用教师预训练对应权重初始化。输出级蒸馏损失对幅度、相位和复数谱预测与教师输出做 MSE：\(w_{\text{mag}}=1.0\)，\(w_{\text{pha}}=0.3\)，\(w_{\text{com}}=0.5\)。中间特征蒸馏聚合教师 8 个 cTF-Mamba 块输出为 \(H_{\text{agg}}^t = \frac{1}{8}\sum_{i=1}^{8} H_i^t\)，然后对学生块输出与 \(H_{\text{agg}}^t\) 做 per-sample 归一化后的 MSE，避免维度或尺度不匹配；归一化方式为 \(\mathrm{Norm}(X) = \frac{X-\mu(X)}{\sigma(X)+\epsilon}\)，均值与标准差跨通道、时间、频率计算。

**6. 渐进 ramp-up 与训练目标。** KD 信号权重 \(\gamma(k)=\min\left(\frac{k}{K_{\text{ramp}}}, 1\right)\)，\(K_{\text{ramp}}\) 为总训练步数的 10%。总损失为原始 SEMamba task loss 加上 \(\gamma(k)(\lambda_{\text{out}} \mathcal{L}_{\text{KD}}^{\text{out}} + \lambda_{\text{feat}} \mathcal{L}_{\text{KD}}^{\text{feat}})\)，其中 \(\lambda_{\text{out}}=0.5\)，\(\lambda_{\text{feat}}=0.1\)。task loss 包含幅度、相位、复数谱、时域和一致性项，具体内部权重未在本文完全展开。

**设计动机。** 选择 Mamba 而非 Transformer 教师，主要是为了在流式 SE 中用固定循环状态替代 KV cache；选择 8 层教师蒸馏到 1 层学生，是因为实验表明深度从 1 到 8 层 PESQ 从 3.06 提升到 3.32，但 RTF 从 0.11 增长到 0.29，质量收益与计算成本不匹配，蒸馏能在不增加学生推理成本的前提下恢复教师能力。

### 💡 核心创新点

1. **全因果 RT-SEMamba 架构。** 原 SEMamba 含非因果组件且主要离线评测；本文通过因果 STFT/iSTFT、因果时间卷积、时间轴单向 Mamba 与因果 LayerNorm，将系统改为 25 ms 算法延迟的流式 SE。收益由 1-frame-in/out 推理和固定状态缓冲支持。

2. **固定尺寸循环状态的流式 Mamba 推理。** 相比 Transformer/Conformer 逐层增长的 KV cache，RT-SEMamba 每层只传播固定尺寸 ssm_state，并配合 conv_state 与 frame buffer。该设计使长语音推理的内存与每帧计算不受序列长度影响，部署更友好。

3. **渐进式多层级知识蒸馏。** 将 8 层教师蒸馏到 1 层学生，同时对齐幅度、相位、复数输出以及中间特征，并用 ramp-up 避免早期蒸馏信号干扰。结果显示 1 层学生 PESQ 从 3.06 提升到 3.18，GapRecovery 在 PESQ 上为 46.2%，且不增加 RTF。

4. **深度-效率 Pareto 分析与教师结构搜索。** 系统测量 1–8 层 Mamba 的参数量、MACs 和 RTF，并尝试混合 Mamba-Transformer 教师，发现 5 层混合模型可接近 8 层 all-Mamba 教师，但需额外 KV cache；最终选择 all-Mamba 教师以保持流式复杂度最低。这为实时 SE 的深度选择提供了直接工程参考。

### 📊 实验结果

论文主要使用 VCTK-DEMAND 基准，指标为 PESQ、CSIG、CBAK、COVL、STOI、参数量、算法延迟与 RTF。表中保留主方法、最强基线与关键消融项；限于篇幅，LiSenNet 等极低参数基线未纳入。

下图提供了蒸馏后模型（8→1）的语谱图可视化对比。

![Figure 3: Spectrogram visualization of noisy, clean, and enhanced speech produced by the distilled RT-SEMamba (8→\\rightarrow1).](https://arxiv.org/html/2608.12099v1/spectrogram_v4.png)

图中可见，蒸馏后的增强语音在频谱结构上更接近干净语音，提供了定性证据支持渐进式知识蒸馏的有效性。


表 1 给出不同深度与蒸馏结果。8 层 RT-SEMamba 达到 3.32 PESQ；1 层 baseline 仅 3.06 PESQ，蒸馏后 8→1 达到 3.18；2 层 baseline 3.19，蒸馏后 8→2 达到 3.22。STOI 基本饱和在 0.95。

| Model | PESQ | CSIG | CBAK | COVL | STOI |
|---|---|---|---|---|---|
| 1-layer | 3.06 | 4.38 | 3.61 | 3.79 | 0.94 |
| 2-layer | 3.19 | 4.51 | 3.66 | 3.93 | 0.95 |
| 3-layer | 3.20 | 4.56 | 3.75 | 3.96 | 0.95 |
| 4-layer | 3.29 | 4.59 | 3.76 | 4.03 | 0.95 |
| 5-layer | 3.27 | 4.56 | 3.75 | 4.00 | 0.95 |
| 8-layer | 3.32 | 4.64 | 3.72 | 4.08 | 0.95 |
| 8-layer→1-layer | 3.18 | 4.43 | 3.68 | 3.89 | 0.95 |
| 8-layer→2-layer | 3.22 | 4.55 | 3.69 | 3.97 | 0.95 |

表 2 给出与若干因果/实时模型的对比。需要注意部分基线标注为在更大语料上训练、再在 VCTK-DEMAND 评测，因此并非严格同训练数据比较。RT-SEMamba 8 层的 3.32 PESQ 高于表中 FRCRN 3.21 与 aTENNuate base 3.27，但后者参数更少或训练语料不同；RT-SEMamba 8→1 的 3.18 接近 DeepFilterNet3 的 3.17，但参数量为 1.05M，延迟 25 ms。

| Model | PESQ | CSIG | CBAK | COVL | STOI | Params | Alg. Latency (ms) |
|---|---|---|---|---|---|---|---|
| Noisy | 1.97 | 3.34 | 2.44 | 2.63 | 0.92 | – | – |
| PercepNet†* | 2.73 | – | – | – | – | 8.00M | 40 |
| DCCRN+* | 2.84 | – | – | – | – | 3.30M | – |
| FullSubNet+* | 2.88 | 3.86 | 3.42 | 3.57 | 0.94 | 8.67M | – |
| DEMUCS†* | 2.93 | 4.22 | 3.25 | 3.52 | – | 18.87M | 40 |
| DeepFilterNet2†* | 3.08 | 4.30 | 3.40 | 3.70 | 0.94 | 2.31M | 40 |
| DeepFilterNet3†* | 3.17 | 4.34 | 3.61 | 3.77 | 0.94 | 2.13M | 40 |
| FRCRN†* | 3.21 | – | – | – | – | 6.90M | 30 |
| aTENNuate (base)†* | 3.27 | – | – | – | – | 0.84M | 46.5 |
| RT-SEMamba (8→1) | 3.18 | 4.43 | 3.68 | 3.89 | 0.95 | 1.05M | 25 |
| RT-SEMamba (8→2) | 3.22 | 4.55 | 3.69 | 3.97 | 0.95 | 1.29M | 25 |
| RT-SEMamba (8-layer) | 3.32 | 4.64 | 3.72 | 4.08 | 0.95 | 2.74M | 25 |

关键消融：层数从 1 到 2 时 PESQ 从 3.06 提升至 3.19，收益最大；2→4 提升至 3.29，但 5 层回落到 3.27，8 层为 3.32。KD 使 1 层 PESQ +0.12、2 层 +0.03。混合教师实验中，5 层 all-Mamba 为 3.27 PESQ，将第 4 块替换为因果 Time-Transformer 后提升至 3.32，但需维护 0.5 s KV cache；3 层替换第 2 块几乎无增益。论文未提供跨数据集或跨语言的细分结果。

### 🔬 细节详述

- **训练数据**：使用 VCTK-DEMAND 数据集。训练集约 11,572 条，来自 28 个说话人与 10 种 DEMAND 噪声，在 SNR 为 0/5/10/15 dB 下混合；测试集 824 条，来自 2 个 unseen 说话人与 5 种 unseen 噪声，SNR 为 2.5/7.5/12.5/17.5 dB。所有信号重采样到 16 kHz。未提及额外数据增强。
- **损失函数**：task loss 遵循 SEMamba，包含幅度、相位、复数谱、时域和一致性项，具体内部权重未说明。KD 输出损失中 \(w_{\text{mag}}=1.0\)、\(w_{\text{pha}}=0.3\)、\(w_{\text{com}}=0.5\)；中间特征蒸馏为 per-sample 归一化后的 MSE。总目标中 \(\lambda_{\text{out}}=0.5\)、\(\lambda_{\text{feat}}=0.1\)；蒸馏信号在前 10% 总步数内 ramp-up。
- **训练策略**：学生用教师对应权重初始化，教师冻结。学习率、warmup、batch size、优化器、总训练步数/轮数、调度策略均未说明。
- **关键超参数**：STFT 窗长 \(W=400\)、hop \(H=100\)、center=False；16 kHz；因果时间卷积左侧 padding \(K-1\)；教师 8 层，学生 1 或 2 层。1 层模型 1.05M 参数、20.56 G/s MACs；2 层 1.29M；8 层 2.74M、47.35 G/s MACs。算法延迟 25 ms。
- **训练硬件**：训练硬件未说明。RTF 在单张 NVIDIA RTX 5090 GPU 上预热后测量。
- **推理细节**：流式 1-frame-in/1-frame-out；无 lookahead；维护 frame buffer、conv_state、ssm_state 三类状态。混合 Mamba-Transformer 教师中的 Time-Transformer 使用未来遮蔽自注意力与 0.5 s KV cache。
- **正则化/稳定训练技巧**：channel-wise LayerNorm、per-sample 特征归一化、因果 padding、渐进 ramp-up。未提及其他如 dropout、weight decay 等。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_METHOD] 提出全因果 RT-SEMamba，将 SEMamba 改造为 25 ms 算法延迟的流式语音增强，并以固定尺寸 ssm_state 替代 KV cache；进一步用输出级与中间特征蒸馏配合 ramp-up 将 8 层教师压缩到 1 层学生，在方法层面具有清楚的组合创新。

*   技术严谨性 (1.0/1.5)：[A_METHOD][A_LIMITS] 因果 STFT/因果时间卷积与时间轴单向 Mamba 的状态管理定义清楚，蒸馏损失和特征归一化公式可核对；但 [A_LIMITS] 指出因果卷积与 iSTFT 的端到端延迟边界未严格证明，混合 Mamba-Transformer 教师仍需额外 KV cache，说明无 cache 优势存在条件边界。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 实验包含 1–8 层深度扫描、KD 前后对比、混合教师消融以及多基线表格，提供了质量-效率 Pareto 证据；但仅覆盖 VCTK-DEMAND 单数据集，未报告统计显著性，部分基线训练语料不同，且 KD 组件缺乏逐项消融，跨数据集和长语音压力验证不足。

*   清晰度 (0.7/1)：[A_SUMMARY][A_LIMITS] 架构和公式表述总体清楚，但摘要声称 2.75× speedup 与正文 RTF 0.11/0.29 计算得到的约 2.64× 不一致，且全文未单列 limitations，影响了表达严谨性。

*   影响力 (0.8/1.5)：[A_SUMMARY] 该工作为实时语音增强提供了 Mamba 流式化和渐进知识蒸馏的可行路线，低参数、固定内存和低 RTF 特性对边缘端实时音频应用具有参考价值；目前影响主要体现在方法层面，仍待更广泛任务和数据上的后续验证。

*   开源 (0.5/1.5)：[A_OPEN] 论文声明将公开代码于 GitHub，但截至论文成稿尚未实际发布；模型权重、数据集链接和 Demo 均未提供，符合明确承诺未来开放但尚未发布的核心产物锚点。

*   可复现性 (0.3/0.5)：[A_OPEN][A_LIMITS] 论文披露了架构、数据集划分、STFT 设置、蒸馏输出/特征损失权重和 ramp-up 等复现材料，但缺少优化器、学习率、batch size、训练轮数等关键训练配置以及训练硬件和检查点信息，属于大部分充分但有关键缺失。

*   工程/实践价值 (1.0/1.5)：[A_METHOD][A_RESULTS] 工程上采用 1-frame-in/out 并传播 frame buffer、conv_state、ssm_state 三类固定状态，使每帧计算和内存不随序列长度增长；8→1 学生以 1.05M 参数保持 RTF 0.11 和 25 ms 延迟，相比 8 层教师 RTF 0.29 有明显的实时部署效率提升。

### 🚨 局限与问题

1. **论文明确承认的局限**：作者在教师结构搜索中指出，混合 Mamba-Transformer 教师虽可提升性能，但需要额外维护 KV cache，因此为避免流式实现复杂度，最终采用 all-Mamba 教师；论文也暗示蒸馏只能恢复部分教师-学生差距，未完全补平。全文未单列 limitations，也未系统讨论跨数据集泛化限制。

2. **审稿人发现的潜在问题**：
   - 仅在 VCTK-DEMAND 单数据集上评测，噪声类型和 SNR 覆盖有限，难以支撑泛化声明。
   - 训练配置严重缺失：无优化器、学习率、batch size、训练轮数等，不利于复现和公平比较。
   - KD 收益中 1 层 PESQ +0.12、2 层 +0.03 等未报告统计显著性，可能只是小样本波动。
   - 与 FRCRN、aTENNuate 等基线训练语料不同，表 3 中比较并非严格同条件 SOTA 对比；作者也未明确声称 SOTA，但视觉上容易造成直接对比误导。
   - RTF 只在 RTX 5090 上测量，不能代表边缘设备或移动端；没有报告长语音上的状态漂移或数值稳定性。
   - 25 ms 延迟推导来自窗长和 center=False，但对因果卷积与 iSTFT 的实际端到端延迟边界未做严格证明。
   - KD 组件没有逐项消融，无法确认输出蒸馏、特征蒸馏、ramp-up 各自贡献，因果归因不够清晰。
   - 摘要声称 2.75× speedup，但按正文 RTF 0.11 与 0.29 计算约为 2.64×，存在细微不一致，建议统一。

---

[← 返回 2026-08-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-13/)
