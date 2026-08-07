---
title: "LILAC: An Idempotent Neural Speech Codec"
date: 2026-08-07
draft: false
tags: [语音编码, 生成对抗网络, 音频理解, Transformer, 模型评估]
categories: [论文速递]
description: "语音编码 | 8.1/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.05727"
---

# 📄 LILAC: An Idempotent Neural Speech Codec

标签：#语音编码 #生成对抗网络 #音频理解 #Transformer #模型评估

**8.1/10** | 创新 1.4/2 | 严谨 1.3/1.5 | 实验 1.2/1.5 | 清晰 0.9/1 | 影响 1/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

🔥 **8.1/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #语音编码 | #生成对抗网络 | #音频理解 #Transformer | [arxiv](https://arxiv.org/abs/2608.05727)


### 👥 作者与机构

- 第一作者：June Young Yi（未说明）
- 通讯作者：Sungroh Yoon（未说明；论文给出通讯邮箱 <sryoon@snu.ac.kr>，域名为 snu.ac.kr）
- 其他作者：Dongwook Lee、Jiheum Yeom（未说明）

### 💡 毒舌点评

用可逆变换把“幂等”从训练目标变成结构约束，是一个漂亮且可验证的构造，补上了现有 codec 在 re-encode 循环中的漏洞。但单遍质量并不领先，dWER 在中游徘徊，MUSHRA 与 FocalCodec 也无显著差异；更关键的是，论文还没证明这种幂等性真的能让下游 TTS 系统受益。

### 📌 核心摘要

论文指出现有神经语音编解码器在 decode–re-encode 循环中 token 会漂移，12 个基线配置首轮平均改写至少 15% 的 token，导致生成、编辑、存储或重传类 pipeline 不稳定。LILAC 将输入先经可逆分析变换，保留 20 维坐标并用有限标量量化（FSQ）离散化，解码时用 fill 网络重建被丢弃的坐标，再经过精确逆变换；由于保留坐标在量化下是固定点，重编码必然返回同一 token 流，幂等性由构造保证而非训练损失。与现有 sub-1 kbps 系统相比，LILAC 在 UTMOS、PESQ、STOI、SI-SNR 上表现有竞争力，在 LibriSpeech 与 LibriTTS-R 上 UTMOS 达 4.14/4.24，但 dWER 位于中游，MUSHRA 听感测试相对 FocalCodec 无统计显著差异。论文验证了 7,457 条测试样本在 100 次循环后 token 完全一致，而对比系统持续退化。其实际意义是给语音 token 接口提供可验证的固定点属性；主要局限是单遍音质未达 SOTA，且幂等性在下游模型中的收益仍停留在理论论证层面。

### 🔗 开源详情

- **官方代码仓库**：https://github.com/Rick-McCoy/lilac-codec （已公开，包含实现与训练/推理脚本）
- **预训练 checkpoint**：https://huggingface.co/julianyi/lilac （已公开）
- **音频演示页面**：https://rick-mccoy.github.io/lilac-demo （已公开，提供各系统听感对比）
- **训练数据集**：HiFiTTS-2 未随论文公开下载地址；评测集 LibriSpeech、LibriTTS-R、VCTK 均为公开数据集。
- **模型权重许可与使用条款**：论文未披露具体 license，需以仓库和模型卡为准。

### 🏗️ 方法概述和架构

LILAC 是一个端到端的全卷积 24 kHz 语音编解码器，目标速率为 0.75 kbit/s、帧率 9.375 Hz、每帧 80 bit。整体流程为：输入波形先被 reshape 成多通道张量，经过由可逆 1×1 卷积与加法耦合块组成的分析变换 \(A\)，逐步抹平时间轴、增加通道数；在若干“投影级”中，编码器只保留一部分坐标进行 FSQ 量化，其余坐标被直接丢弃。解码时，一个仅作用于已量化 token 的 fill 网络预测被丢弃的坐标，再沿同一分析变换的分层结构做精确逆变换 \(A^{-1}\)，得到重建波形。

形式化地，设 \(A(x)=(z,f)\)，其中 \(z\) 为保留坐标，\(f\) 为丢弃坐标；编码器和解码器可写为

\[
E(x)=q(\Pi_z A(x)),\qquad D(z_q)=A^{-1}(z_q,\varphi(z_q)),
\]

下图给出了 LILAC 从编码、量化到解码重建的完整架构，可对应前文公式中的分析变换 A、投影 Π_z 与 fill 网络 φ。

![Figure 2: LILAC’s encoder (top), shared-weight inverse (middle), and decoder-only fill networks (bottom). Projection stages transmit the retained coordinates and discard the rest; the decoder predicts the discarded blocks before inversion.](https://arxiv.org/html/2608.05727v1/x2.png)

图中上方编码器通过 Stem、Growth 与多次 Split 逐步压缩时间维度并扩展通道，最终仅保留 20 维坐标经 FSQ 量化；解码器使用共享权重执行精确逆变换，Predictor 从量化 token 预测被丢弃的坐标，构成红色闭环所标注的幂等路径。


其中 \(\Pi_z\) 是取保留坐标的投影，\(q\) 是 FSQ，\(\varphi\) 是 fill 网络。由于 \(\Pi_z A(D(z_q))=z_q\)，且 \(q\) 对量化网格幂等，所以

\[
E(D(z_q))=q(\Pi_z A(D(z_q)))=q(z_q)=z_q.
\]

该性质对任意 \(\varphi\) 和任意权重都成立，这是 LILAC 幂等性的结构来源。

核心组件有三类。第一类是 **Invertible 1×1 Convolution**：权重被正交参数化，输入输出通道数相同，无偏置；逆变换就是使用权重转置再做卷积，因此不需要求逆或除法。第二类是 **Additive Coupling Block**：将输入按时间奇偶索引拆成 \(x_1,x_2\)，执行

\[
y_1=x_2+f(x_1),\qquad y_2=x_1+g(y_1),
\]

再按通道拼接输出。逆过程只需依次计算 \(x_1=y_2-g(y_1)\) 和 \(x_2=y_1-f(x_1)\)，其中 \(f,g\) 是 ConvNext1D 堆叠。这种“时间拆分、通道拼接”同时承担 squeeze-and-mix 功能，使时间减半、通道翻倍。第三类是 Stem 中的特殊仿射耦合：将 5 通道输入拆成 2 通道与 3 通道，由 2 通道预测 3 通道的 log-scale 和 bias，

\[
[x_{:2},x_{2:}]=x,\qquad [\log s,b]=f(x_{:2}),\qquad y_1=x_{:2},\quad y_2=s\odot x_{2:}+b.
\]

由于 scale 来自指数形式，逆变换仍有保证。

经过 4 个 squeeze-and-mix 阶段后，通道从 5 增至 80；随后继续用相同耦合块减半时间，同时依次在通道维切掉 80、80、80、80、140 个通道作为“被丢弃坐标”，最终留下形状为 \([20,T/2560]\) 的保留张量。FSQ 为 20 个坐标各分配 4 bit，取值范围 \([-1,-13/15,\dots,13/15,1]\)，总计 80 bit/帧。解码端的 fill 网络由一个 code-context 网络和逐级上采样的 context ladder 构成，每级用一个残差预测器把当前部分重建结果与上下文融合，生成被丢弃的坐标。

训练目标遵循神经声码器常见配方：多分辨率 mel 损失、多分辨率 STFT 损失、对抗 hinge 损失和特征匹配损失，权重分别设为 15、1、1、2，对抗与特征匹配项在 5000 步后激活。模型以生成器/判别器联合训练；可逆 1×1 卷积层使用全精度以避免逆变换的舍入漂移。

### 💡 核心创新点

1. **构造性 codec 幂等保证**：此前工作只能通过额外损失函数“缓解” decode–re-encode 漂移，无法消除；LILAC 用可逆分析变换加“只编码保留坐标、解码器重建丢弃坐标”的架构，使 \(E(D(z_q))=z_q\) 对任意 fill 网络和任意权重都成立。这是数学构造而非训练目标，证据是论文给出的代数证明以及在 7,457 条样本上的逐 token 完全一致。
2. **将可逆变换与 FSQ 结合用于低比特语音编码**：用正交 1×1 卷积和加法耦合构成体积保持的可逆骨干，并用 FSQ 对保留坐标做有限标量量化；逆变换只涉及转置与减法，避免浮点除法带来的数值不稳定。该组合使得“量化后的离散 token 作为固定点”成为自然结果。
3. **可独立优化的 discarded-coordinate fill 网络**：解码器把被丢弃信息建模为可由已量化 token 预测的量，fill 网络与共享的可逆骨干分离；论文通过冻结骨干、单独优化 fill 的实验显示现有 fill 仍有提升空间，说明该解耦有利于后续改进。
4. **完整的低帧率、低比特率全卷积实现**：在 24 kHz、9.375 Hz、0.75 kbps 条件下达到 UTMOS 4.14/4.24，PESQ、STOI、SI-SNR 在同速率带领先，并在 100 次自编码循环中保持 token、UTMOS、dWER 完全不变。

### 📊 实验结果

论文实验覆盖面较广：质量指标包括 UTMOS、dWER、PESQ、SCOREQ、STOI、SI-SNR、MCD、mel-L1、WavLM speaker similarity；评测集包括 LibriSpeech test-clean、LibriTTS-R test、VCTK 和 HiFiTTS-2 留出集；幂等性还扩展到 12 个基线配置。核心证据如下：

下图展示了反复自编码对说话人身份与语音识别词错误率的影响。

![Figure 4: Speaker EER and dWER after each codec self-encodes its own output.](https://arxiv.org/html/2608.05727v1/x4.png)

左侧 speaker EER 子图中，LILAC 在 100 次自编码后仍维持在低位，FocalCodec、Mimi 与 DAC 则随循环深度显著上升；右侧 dWER 子图同样显示 LILAC 几乎无退化，说明幂等性对说话人和内容稳定性均有保护作用。


- 幂等性验证：LILAC 在所有 7,457 条 LibriSpeech/LibriTTS-R 测试样本上解码后重编码得到完全相同的 token 流；100 次循环后 UTMOS、dWER、PESQ 均不变。对比系统首轮 token 保持率 EnCodec 为 0.805、Mimi 为 0.329、FocalCodec 为 0.109、DAC 为 0.017，循环 100 次后大多趋近于 0。
- 质量对比：LILAC 在 LibriTTS-R 上 UTMOS 4.238、PESQ 2.60、STOI 0.944、SI-SNR +6.0 dB；相比 FocalCodec 50 Hz（4.076 / 1.33 / 0.868 / -32.9 dB）和 WavTokenizer 75 Hz（4.182 / 2.41 / 0.923 / +4.6 dB）有明显波形保真优势，但 dWER 0.086 高于 FocalCodec 50 Hz 的 0.058。LILAC 在所有评测集上的 STOI 与 SI-SNR 均领先同速率带比较系统，而 dWER 与 SCOREQ 位于中游。
- 种子方差：5 个种子 600k 步训练的标准差在 LibriSpeech 上 UTMOS 0.021、dWER 0.002、SCOREQ 0.011，显示主要结论未受随机性干扰。
- 听感测试：MUSHRA 中 LILAC 均值 51.4，高于 FocalCodec 的 48.5，但 95% 置信区间为 [-3.3, +9.0]，Holm p=0.077，差异不显著；更高比特率系统得分更高。
- 消融：anti-imaging stem 与高带衰减增强同时使用时，LibriTTS-R SCOREQ 从 0.572 降至 0.327、dWER 从 0.121 降至 0.098；去掉量化反而使 UTMOS 下降，说明量化本身不是质量瓶颈。冻结骨干后单独重训 fill 可将 median SCOREQ 从 0.256 降至 0.205；解绑编码器/解码器共享权重则没有带来有意义提升，说明瓶颈在分析变换或 fill 的架构本身。

下图在 100 次 decode–re-encode 循环中对比了 LILAC 与主流编解码器的 token 一致性、UTMOS 与 dWER。

![Figure 1: Iterated re-encoding on 100 reader-balanced LibriSpeech test-clean clips: token agreement with the first encoding, UTMOS, and Whisper dWER over N=1N=1–100100 cycles. Parenthesized rates in kb/s.](https://arxiv.org/html/2608.05727v1/x1.png)

LILAC 的 token 一致率在所有循环中保持 1.0，而 EnCodec、Mimi、FocalCodec 与 DAC 在首轮即出现显著漂移，百轮后大多接近 0；与此同时，LILAC 的感知质量与 ASR 指标几乎不随循环次数变化，而对比系统持续退化。


下表保留同速率带内最强基线与本文方法（LibriTTS-R test）：

| 编码器 | kb/s | UTMOS↑ | dWER↓ | PESQ↑ | STOI↑ | SI-SNR(dB)↑ |
|---|---|---|---|---|---|---|
| FocalCodec (50 Hz) | 0.65 | 4.076 | 0.058 | 1.33 | 0.868 | -32.9 |
| LILAC (ours) | 0.75 | 4.238 | 0.086 | 2.60 | 0.944 | +6.0 |
| WavTokenizer (75 Hz) | 0.90 | 4.182 | 0.079 | 2.41 | 0.923 | +4.6 |
| SNAC | 0.98 | 3.951 | 0.067 | 2.24 | 0.918 | +2.3 |

下表为 100 次 decode–re-encode 循环中的 token 保持率（“首轮保持率”为与第一次编码的一致性，“100 轮保持率”为与第一次编码的一致性）：

| 编码器 | 首轮保持率 | 100 轮保持率 |
|---|---|---|
| LILAC | 1.000 | 1.000 |
| EnCodec (1.5 kb/s) | 0.805 | 0.714 |
| Mimi (~1.1 kb/s) | 0.329 | 0.065 |
| FocalCodec (0.65 kb/s) | 0.109 | ~0.001 |
| DAC (~24 kb/s，高码率参考) | 0.017 | 0.005 |

### 🔬 细节详述

- 训练数据：HiFiTTS-2，约 31,700 小时，LibriVox 衍生，4,629 位说话人，原始 44.1 kHz 重采样至 24 kHz；通过 reader-ID 过滤掉全部 LibriSpeech/LibriTTS-R 说话人，再随机留出 40 位说话人作为 H2 测试集。论文未提供 HiFiTTS-2 的公开下载地址。
- 数据增强：随机重采样到较低采样率、应用 8 阶低通滤波、随机衰减高频带，以及随机响度缩放；具体概率与参数在代码实现中说明，正文只给出做法概述。
- 损失函数：多分辨率 mel 损失权重 15，FFT 尺寸 {512,1024,2048}、mel 数 {64,128,256}；多分辨率 STFT 损失权重 1；对抗 hinge 损失权重 1，判别器为多周期判别器 + 多分辨率 STFT 判别器；特征匹配 L1 损失权重 2。对抗与特征匹配项在 5,000 步 warm-up 后激活。
- 训练策略：AdamW，生成器学习率 2e-4，判别器学习率 1e-4，指数衰减 0.999996/step，梯度裁剪 0.3；848k 步关闭衰减，最后 50k 步使用常数学习率 5e-5 / 2.5e-5；batch size 256，样本长度 25,600 点；最终对 889k–898k 的 10 个 checkpoint 做 SWA。
- 模型规模：总参数 58.5M，其中共享分析变换 43.1M，fill 网络 15.4M；ConvNext1D 隐藏维度 256、深度 4。
- 训练硬件：Google TPU v6e-8；在 fp32 下训练，默认 bf16 matmul，但 invertible 1×1 卷积强制全精度以保证往返精确性。
- 推理细节：论文未说明专门解码策略、温度或 beam 设置；codec 为确定性前向过程，帧长 2,560 点，帧率 9.375 Hz。
- 正则化/稳定训练技巧：未使用额外正则化；仅依赖梯度裁剪（0.3）与 5,000 步 warm-up 稳定训练，对抗与特征匹配损失在 warm-up 后激活。

### ⚖️ 评分理由

*   创新性 (1.4/2)：基于可逆分析变换与FSQ，使E(D(z_q))=z_q对任意fill网络和权重都成立，以构造而非训练损失保证codec幂等，并给出代数证明（[A_METHOD][SCORING_SOURCE_2/28]）；这是新的结构性能力。

*   技术严谨性 (1.3/1.5)：加法耦合与可逆1×1卷积均有精确逆变换，FSQ固定点推导完整，可逆卷积用全精度避免舍入漂移（[A_METHOD][SCORING_SOURCE_8/28]），且7,457条样本逐token一致验证了构造逻辑（[A_RESULTS]）。

*   实验充分性 (1.2/1.5)：覆盖多数据集、多指标、5种子标准差、MUSHRA统计检验与多组消融，能支撑幂等性和音质声明（[A_RESULTS][SCORING_SOURCE_9/28][SCORING_SOURCE_12/28][SCORING_SOURCE_14/28]）；但未训练TTS等下游模型直接验证幂等性收益，证据链仍有缺口（[A_LIMITS]）。

*   清晰度 (0.9/1)：方法以编码器/解码器公式、三类可逆模块和fill网络结构清楚表述，损失权重、训练步数和模型规模均有明确数值，便于核对（[A_METHOD][SCORING_SOURCE_7/28][SCORING_SOURCE_8/28]）。

*   影响力 (1.0/1.5)：幂等性对生成、编辑、存储/重传类pipeline有直接价值，且是首个按构造保证的神经codec（[A_SUMMARY][SCORING_SOURCE_2/28]）；但论文自述未推动低码率pareto前沿，MUSHRA相对近比特率系统无显著优势（[A_LIMITS][SCORING_SOURCE_12/28]）。

*   开源 (1.2/1.5)：代码仓库、预训练checkpoint和音频demo均已公开，核心模型产物可获取（[A_OPEN][SCORING_SOURCE_2/28]）；但未披露模型权重license，文档完整性不足，按锚点给1.2。

*   可复现性 (0.3/0.5)：论文披露了模型规模、损失权重、优化器、学习率、TPU硬件、SWA和评测协议（[SCORING_SOURCE_8/28][SCORING_SOURCE_9/28]），大部分训练配置可复现；但训练集HiFiTTS-2未公开下载地址，完整重训仍有门槛（[A_OPEN][A_LIMITS]）。

*   工程/实践价值 (0.8/1.5)：系统为0.75kbps/9.375Hz的全卷积codec，确定性前向且具备可验证固定点属性，有实际部署接口（[A_METHOD][SCORING_SOURCE_2/28]）；但GPU上RTF因小通道卷积落后于其他codec，工程效率不足（[A_LIMITS]）。

### 🚨 局限与问题

1. **单遍性能非 SOTA**：论文在 Limitations 中明确承认 LILAC 没有推动 low-frame-rate/low-bitrate 的 pareto 前沿，单遍指标只是“competitive”，dWER 位于中游、SCOREQ 非最优。
2. **听感无显著优势**：MUSHRA 中相对 FocalCodec 的 +2.9 分不显著（95% CI [-3.3, +9.0]，Holm p=0.077），且高于它的系统都来自更高比特率。
3. **幂等性下游收益未实证**：论文只给出“稳定性对 TTS 有好处”的理论论证，以及 speaker EER/dWER 在反复重编码下的优势，但没有训练一个使用 LILAC token 的 TTS 或其他下游模型来直接验证。
4. **推理效率不理想**：由于大量小通道卷积，GPU 上的 RTF 反而低于其他 codec，这会削弱实际部署吸引力。
5. **训练数据不可公开获取**：HiFiTTS-2 未提供公开下载地址，复现训练门槛高。
6. **评测基准可能有利**：虽然论文强调 LILAC 的评测集全部 OOD，但 LibriSpeech/LibriTTS-R 与训练集同为 LibriVox 域；真正的跨语料库 VCTK 上 UTMOS 仍非第一，说明域泛化能力仍需加强。

---

[← 返回 2026-08-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-07/)
