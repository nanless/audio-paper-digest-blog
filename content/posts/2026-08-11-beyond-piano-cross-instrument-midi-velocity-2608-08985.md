---
title: "Beyond Piano: Cross-Instrument MIDI Velocity Estimation via Differentiable SoundFont Proxies"
date: 2026-08-11
draft: false
tags: [音乐理解, 领域适应, 模型评估]
categories: [论文速递]
description: "音乐理解 | 7.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.08985"
---

# 📄 Beyond Piano: Cross-Instrument MIDI Velocity Estimation via Differentiable SoundFont Proxies

标签：#音乐理解 #领域适应 #模型评估

**7.3/10** | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 清晰 0.9/1 | 影响 1/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

✅ **7.3/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音乐理解 | #领域适应 | #模型评估 | [arxiv](https://arxiv.org/abs/2608.08985v1)


### 👥 作者与机构

- 第一作者：Zhanhong He（未说明）
- 通讯作者：未说明
- 作者列表：Zhanhong He（未说明）、Hanyu Meng（未说明）、David Defeng Huang（未说明）、Roberto Togneri（未说明）

### 💡 毒舌点评

用可微分 SoundFont 代理把波形重建换成 PHE/OSF 参数匹配，提出了一条比 DDSP 波形监督更聚焦 velocity 的适配路线，并在无标签吉他数据（GAPS/FL）上取得一致提升。但核心结论仍缺少目标域真实 velocity 标签的直接验证；钢琴上的代理适配只是 sanity check，MAEVelo 10.5 与有监督的 3.9 差距明显，且在 SMD 上的响度相关未超过零样本基线。只覆盖钢琴和吉他，"cross-instrument"的普适性尚不足以服众。

### 📌 核心摘要

论文解决非钢琴乐器缺少可靠 MIDI velocity 标签的问题，提出在真实录音上适配钢琴预训练速度估计器 VeloEst。其核心方法是 Diff-SFProxy：用 SoundFont 离线渲染训练一个 Transformer 代理，将音高、起止、速度映射为逐音符的 PHE 与 OSF 两个响度相关声学参数，再让 VeloEst 的预测速度经过该代理匹配真实录音提取的 PHE/OSF。与 Diff-Synth 依赖多尺度频谱波形重建不同，Diff-SFProxy 不追求重建波形，而是把梯度集中在与 velocity 相关的强度和起振行为上。诊断实验显示，将速度统一重置为 64 后固定代理做梯度反解，5 秒设置下 in-domain 速度 MAE 可降至约 9–12 MIDI 单位；在 GAPS/FL 吉他数据上，Diff-SFProxy 的 rBSSL/rBSTL 相关普遍高于 flat、零样本和 Diff-Synth，例如 GAPS rBSSL 为 0.794，高于零样本的 0.769 与 Diff-Synth 的 0.669。实际意义在于为无 velocity 标签的乐器提供一种可复用的标签高效适配方案，可用于 expressive rendering 与数据标注。主要局限是只验证了钢琴和吉他，且吉他没有真实 velocity 标签、只能通过响度相关性间接评估；钢琴端仅为 sanity check，MAEVelo 10.5 明显差于有监督基线的 3.9，且跨数据集 SMD 上响度相关略低于零样本。

### 🔗 开源详情

- 代码：已开源。论文脚注提供代码地址：https://github.com/zhanh-he/sfproxy-velocity-estimation
- 模型：未披露（未说明是否发布 VeloEst 预训练 checkpoint 或训练好的 Diff-SFProxy checkpoint）
- 数据集：未披露（未说明是否发布训练/验证/测试划分或预处理后的 PHE/OSF 缓存；实验使用了 MAESTRO、GAPS、SMD、FL 等公开数据集）

### 🏗️ 方法概述和架构

本文提出的跨乐器 MIDI 力度估计框架以“钢琴预训练 + 目标乐器无标签适配”为核心思路。整体流程如下：输入为 22.05 kHz 的单声道性能音频和对齐后的音符事件（音符的 pitch、onset、duration），系统首先通过一个共享前端 VeloEst 输出每音符的预测力度值 \(\hat{v}\)；随后根据所选的适配策略，将 \(\hat{v}\) 与音符事件送入一个冻结的可微后端（Diff-Synth 或 Diff-SFProxy），后端产生与力度相关的监督信号，该信号与从真实录音中提取的对应目标计算损失，梯度回传更新 VeloEst。训练完成后，VeloEst 即可直接用于目标乐器的力度估计，无需真实力度标签。

下图展示了该框架的整体流程，从钢琴预训练到目标乐器无标签适配。

![Figure 1: Overview of the cross-instrument velocity estimation framework. VeloEst is trained with ground-truth velocity labels on piano…](https://arxiv.org/html/2608.08985v1/figures/p1.jpg)

下图清晰地呈现了 VeloEst 前端、Diff-Synth 和 Diff-SFProxy 两种适配路径的并行结构，以及各自的监督信号（Laudio 和 Lparams）。


**VeloEst 前端**。VeloEst 采用 score-HPT 模型，该模型在钢琴领域已达到当时最优的 MIDI 力度估计性能，并在 MAESTRO 数据集上用真实力度标签（\(\mathcal{L}_{\mathrm{velo}}\)）进行预训练。其输入特征为 log-Mel 频谱，按 100 fps 帧率计算，来自 22.05 kHz 单声道音频（FFT 大小 2048，hop 为 221 个样本，Hann 窗）。适配阶段仅更新 VeloEst 的参数，两个可微后端的参数均冻结。这一设计保证了后端只提供梯度信号，而不会在适配过程中被改变，从而避免模型在无标签数据上产生自适应的漂移。

**Diff-Synth 适配路径**。Diff-Synth 是一个乐器专属、可微分的合成器后端，本文采用 DDSP-Piano 和 DDSP-Guitar-Synth，两者均为 MIDI 导向的合成器。给定音符事件 \(E\)（pitch、onset、duration）和预测力度 \(\hat{v}\)，Diff-Synth 渲染出对应音频 \(\tilde{a}\)。适配损失采用多尺度谱损失（multi-scale spectral loss），该损失在可微分合成器家族中被广泛使用，具体定义为对一组 FFT 窗口大小 \(\Omega=\{2048,1024,512,256,128,64\}\) 分别计算 STFT 幅值的 L1 距离以及对数幅值的 L1 距离，所有尺度求和。每个尺度的 STFT 使用 \(\omega\)-样本 Hann 窗和 75% 重叠，并取 \(\omega\)-点 FFT；对数运算中加入 \(\epsilon=10^{-7}\) 保证数值稳定。该损失比较渲染音频与真实音频的频谱包络，梯度会流向 VeloEst。然而，Diff-Synth 仅是对真实乐器的一种近似，波形或频谱目标会将大量梯度用于消除音色残差而非力度相关的行为，这是该方法在实验中性能下降的重要原因。

**Diff-SFProxy 适配路径**。Diff-SFProxy 是一个乐器专属、冻结的可微分代理，它不要求重建波形，而是将音符事件和预测力度映射为逐音符的、与响度相关的声学参数。设 \(F\) 为声学参数提取器，从真实音频 \(a\) 和音符事件 \(E\) 中提取目标特征 \(Z=F(a,E)\)；同时代理网络 \(P\) 根据 \(E\) 和预测力度 \(\hat{v}\) 预测 \(\tilde{Z}=P(E,\hat{v})\)。适配损失为二者之间的 Huber（Smooth-L1）距离，默认 \(\beta=1.0\)。该参数级损失将梯度集中在力度引起的强度和起音变化上，而不会像波形损失那样被录音条件、音色不匹配等细节干扰。\(Z\) 包含两个组件：PHE（pitch-conditioned harmonic energy，音高条件谐波能量）和 OSF（onset-window spectral flux，起音窗口谱通量）。PHE 用于捕捉与音高相关的谐波能量强度，OSF 用于刻画起音瞬变的锐利程度；二者共同覆盖了力度对音符发声的两个关键维度。Huber 损失对来自重叠音符等造成的离群值具有鲁棒性，且 PHE 与 OSF 的权重为 1:1。

**共享正则化与训练目标**。两条适配路径共享两个辅助正则化项，作用于预测力度向量 \(\hat{v}=(\hat{v}_1,\ldots,\hat{v}_N)\in[0,1]^N\)。第一项为防坍缩正则化：
\[
\mathcal{L}_{\mathrm{anti}}=(\bar{v}-\mu)^2+\max(0,\sigma_{\min}^2-\mathrm{Var}(\hat{v})),
\]
其中 \(\bar{v}\) 和 \(\mathrm{Var}(\hat{v})\) 是当前 segment 内预测力度的经验均值和方差，\(\mu=0.5\) 为期望的工作点，\(\sigma_{\min}^2=0.01\) 为最小方差阈值。均值项防止预测整体漂移到极端，方差 hinge 项惩罚输出塌缩为单一值。第二项是软饱和惩罚：
\[
\mathcal{L}_{\mathrm{satu}}=\frac{1}{N}\sum_{n=1}^N[\max(0,\hat{v}_n-\tau)]^2,
\]
其中 \(\tau=0.95\)，对超过该阈值的预测给予二次惩罚，避免 VeloEst 把力度推到接近最大值饱和区，因为那里音频/参数梯度不再提供有效信息。总损失为：
\[
\mathcal{L}=\mathcal{L}_{\mathrm{main}}+\lambda_{\mathrm{anti}}\mathcal{L}_{\mathrm{anti}}+\lambda_{\mathrm{satu}}\mathcal{L}_{\mathrm{satu}},
\]
其中 \(\mathcal{L}_{\mathrm{main}}\in\{\mathcal{L}_{\mathrm{audio}},\mathcal{L}_{\mathrm{params}}\}\)，三种损失项的权重固定为 \(1:0.2:0.4\)，来自网格搜索。

**Diff-SFProxy 的详细实现**。Diff-SFProxy 采用一个编码器-only 的 Transformer，将一段 5 秒内最多 \(N_{\max}=64\) 个音符事件的填充序列，映射为对应的 \((\widetilde{\mathrm{PHE}}_n,\widetilde{\mathrm{OSF}}_n)\) 对。选择 \(N_{\max}=64\) 是因为对 MAESTRO 的数据分析显示，人类演奏在 5 秒内很少超过 64 个音符。每个音符 token 由三部分相加构成：可学习的音高嵌入（pitch embedding）；一个共享可学习基（shared learnable basis），将归一化到 \([0,1]\) 的 onset、duration、velocity 分别映射到 token 空间的加法方向；以及一个两层 MLP（GELU 激活）作用于归一化的 onset，作为可学习的位置编码。这些分量相加后经过 LayerNorm，形成初始音符 token；填充槽位被置零。编码器堆叠 6 层 pre-norm Transformer 层，模型维度 \(d=256\)，8 个注意力头，FFN 宽度 \(4d=1024\)，GELU 激活，dropout 0.1。注意力计算中引入 key-padding mask，排除填充槽位对真实音符的干扰。每个音符的输出通过一个共享的逐音符头（shared note-wise head，维度变换 \(d\to d\to 2\)，中间 GELU）生成对应的 PHE 和 OSF 预测。之所以采用编码器-only 结构，是因为该任务是“集合到集合”的回归，不需要自回归解码。

Diff-SFProxy 的核心组件——编码器-only Transformer 的结构如下图所示。

该模块将填充后的 MIDI 序列（音高、起止、速度）通过编码器映射为逐音符的 PHE 和 OSF 预测，作为参数域监督的目标。


**Diff-SFProxy 的训练数据与目标**。训练代理所需的数据分为三步：MIDI 片段采样、SoundFont 渲染与目标提取、代理拟合。MIDI 片段来自三部分混合采样器：(1) 50% 的片段在音高、时长、音头间隔上均匀采样，覆盖常见复音织体；(2) 30% 为简单单音或低复音片段，以隔离力度对单个音符的影响；(3) 20% 为刻意构造的对抗样本，包含密集重叠音头和大和弦，使代理在训练时也暴露于最坏输入。和弦内每个音符的力度独立采样，以确保代理学习逐音符而非和弦级的响应。教师音频由指定的 SoundFont（.sfz）通过 Python 包 sfizz 以 22.05 kHz 渲染，渲染片段长度为 2、5 或 10 秒，禁用混响，并施加短淡出以抑制合成器状态泄漏。渲染得到的音频与其 PHE/OSF 目标被缓存并跨 epoch 复用，从而将代理训练与在线渲染解耦。训练损失同样为 Huber 损失，与适配阶段相同，但计算时应用严格掩码，将填充槽位排除在梯度之外。

**适配阶段的训练细节与梯度一致性**。在跨乐器适配中，VeloEst 处理 10 秒的完整片段，冻结后端则默认处理 5 秒的裁剪（crop）片段，2 秒作为消融。Diff-Synth 后端原本为 3 秒输入设计，本文将其按原始超参数在 2 秒和 5 秒下重新训练并冻结。为了保证不同 crop 长度下的梯度尺度可比，后端损失在各自 crop 内的有效音符上取平均，再反传到对应的 VeloEst 10 秒预测上。适配在 MAESTRO（钢琴）和 GAPS（吉他）训练集上分别运行 12 万次迭代，使用 Adam（学习率 \(10^{-4}\)，batch size 8，每 1 万步学习率乘以 0.9），固定随机种子 1919，最终 checkpoint 根据验证集上的 \(r_{\mathrm{BSSL}}\) 选择。整个框架的输入输出链路为：性能音频 → log-Mel 特征 + 对齐音符 → VeloEst → 预测力度 → 可微后端（Diff-Synth 或 Diff-SFProxy）→ 损失 → 梯度更新 VeloEst。在推理阶段，仅使用 VeloEst，输出估计的 MIDI 力度值，可用于合成渲染或动态分析。

**评估方式**。钢琴数据集上有真实 velocity 标签，报告逐音符 MAEVelo；无标签吉他数据则将预测速度经所选 SoundFont 重合成，与真实录音在 Bark-scale specific/total loudness（BSSL/BSTL）上计算 Pearson 相关 \(r_{\mathrm{BSSL}}\) 和 \(r_{\mathrm{BSTL}}\)，以感知响度轮廓间接评估动态还原程度。

**图表关系**。图 1 给出了整体框架：VeloEst 先在钢琴上以 \(\mathcal{L}_{\mathrm{velo}}\) 监督训练，然后通过两种适配策略之一进行微调——Diff-Synth 使用音频域损失 \(\mathcal{L}_{\mathrm{audio}}\)，Diff-SFProxy 使用参数域损失 \(\mathcal{L}_{\mathrm{params}}\)。图 2 展示了 Diff-SFProxy 的内部结构：编码器-only Transformer 接收填充后的音符序列（包含音高、onset、duration、velocity 等信息），输出逐音符的 PHE/OSF 预测，目标值来自对 SoundFont 渲染音频提取的 PHE/OSF。两图共同说明了从音符序列到力度监督信号的数据流。

综上，该框架的关键设计选择在于：将波形重建替换为参数级预测，以聚焦力度相关梯度；使用共享前端和冻结后端，保持适配的稳定性；引入抗坍缩和饱和正则化，防止无标签适配中的输出退化；通过合理的 token 化、掩码和共享头，使代理能泛化到跨乐器场景。这些设计共同实现了在标签稀缺的目标乐器上进行有效的力度估计。

### 💡 核心创新点

1. 明确将标签稀缺的跨乐器 MIDI velocity 估计建模为“renderer-conditioned velocity”适配：预测速度被定义为在给定 SoundFont 渲染条件下能最好复现原演奏动态的速度，而不是脱离渲染器的绝对声学属性。这一表述绕开了目标域无标签的根本困难，为后续无监督/自监督适配提供了清晰目标。（原文第 5 节明确承认该速度不是演奏声学的规范属性，而是相对于所选 SoundFont 的定义。）
2. 提出 Diff-SFProxy，用 SoundFont 代理替代波形级可微分合成器。之前的方法如 DDSP 只能通过波形重建间接学习 velocity，音色不匹配会污染梯度；Diff-SFProxy 用 PHE/OSF 两个响度相关参数作为监督，直接约束 velocity 对应的强度和瞬态行为。实验显示 Diff-Synth 在吉他上常低于零样本，而 Diff-SFProxy 一致提升。
3. 提出 velocity-recovery diagnostic：在合成音频上把预测速度统一重置为 64，固定代理，通过梯度下降反解真实速度。该诊断把代理梯度方向从真实录音的 domain gap 中剥离出来，作为适配前的前置验证。in-domain 结果显示恢复 MAE 从约 33–38 降至 9–12 MIDI 单位，stress test 下降至 10–20，证明代理梯度确实携带 velocity 信息。
4. 设计反坍缩与饱和抑制正则器，解决无标签适配时速度输出坍缩到均值或推到不可导饱和区的问题。消融显示去掉这两个正则项后，MAESTRO rBSSL 从 0.869 降至 0.789，接近 flat velocity 的 0.757，输出失去动态层次。

### 📊 实验结果

下表保留本文方法（Diff-SFProxy 5s/2s）、最强基线（VeloEst 零样本迁移）、flat 基线、两种关键消融和 Diff-Synth 对照；10s 代理因诊断中无额外收益被论文弃用，故不列入主表。rBSSL 与 rBSTL 是真实录音与预测速度重合成录音在 Bark 响度空间上的 Pearson 相关。

| 方法 | MAESTRO MAEVelo↓ | MAESTRO rBSSL↑ | GAPS rBSSL↑ | GAPS rBSTL↑ | FL rBSSL↑ | FL rBSTL↑ | SMD rBSSL↑ | SMD rBSTL↑ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Flat Velocity (set at 64) | 14.8 | 0.757 | 0.737 | 0.701 | 0.714 | 0.587 | 0.701 | 0.582 |
| VeloEst (pretrained on MAESTRO) | 3.9 | 0.878 | 0.769 | 0.798 | 0.740 | 0.699 | 0.829 | 0.816 |
| VeloEst + Diff-Synth (5s backend) | 19.2 | 0.776 | 0.669 | 0.624 | 0.646 | 0.547 | 0.789 | 0.742 |
| VeloEst + Diff-Synth (2s backend) | 25.0 | 0.702 | 0.760 | 0.770 | 0.729 | 0.636 | 0.662 | 0.520 |
| VeloEst + Diff-SFProxy (5s backend) | 10.5 | 0.869 | 0.794 | 0.860 | 0.777 | 0.788 | 0.821 | 0.806 |
| VeloEst + Diff-SFProxy (2s backend) | 10.9 | 0.858 | 0.787 | 0.836 | 0.771 | 0.756 | 0.820 | 0.804 |
| Diff-SFProxy w/o anti-collapse & saturation | 12.9 | 0.789 | 0.740 | 0.705 | 0.723 | 0.614 | 0.735 | 0.653 |
| Diff-SFProxy w/o VeloEst pretrained weights | 20.5 | 0.770 | 0.702 | 0.686 | 0.683 | 0.600 | 0.723 | 0.703 |

在吉他 GAPS 和 FL 上，Diff-SFProxy 在 rBSSL/rBSTL 上均超过 flat、零样本 VeloEst 和 Diff-Synth。例如 GAPS rBSSL 为 0.794，高于零样本 0.769 与 Diff-Synth 5s 的 0.669；FL rBSTL 为 0.788，高于零样本 0.699。Diff-Synth 的 5s 后端在 FL 上 rBSSL 为 0.646，低于 flat 的 0.714，说明波形级监督被音色/房间残差干扰。crop 长度效应在两类后端上差异显著：FL 上 Diff-Synth 从 2s 增至 5s 时 rBSSL 从 0.729 降至 0.646（下降 0.083），而 Diff-SFProxy 仅从 0.771 变为 0.777（变化 0.006）；GAPS 上 Diff-Synth 的 5s rBSSL（0.669）也明显差于其 2s（0.760）。这支持论文的核心论断：更长的 crop 会让波形级目标暴露更多音色/房间失配，而参数级监督仍聚焦于逐音符的 velocity 相关线索。

在钢琴 MAESTRO 上，强监督 VeloEst 仍然最优（MAEVelo 3.9），Diff-SFProxy 的 MAEVelo 为 10.5，低于 Diff-Synth 的 19.2，但明显不如有监督基线；论文将钢琴结果定位为 sanity check，而非超越有监督上界。对应地，MAESTRO 上 Diff-SFProxy 的 rBSSL/rBSTL 为 0.869/0.881，低于有监督 VeloEst 的 0.878/0.892。SMD 跨数据集上，Diff-SFProxy 的 MAEVelo 为 11.3（好于 Diff-Synth 的 19.7 与 flat 的 15.4），但 rBSSL/rBSTL 为 0.821/0.806，略低于零样本 VeloEst 的 0.829/0.816，说明代理适配在钢琴域内并未超越零样本迁移，其增益主要体现在吉他目标域。

消融显示，去掉正则项后 MAESTRO rBSSL 从 0.869 降至 0.789，接近 flat 的 0.757；去掉钢琴预训练权重后各数据集均明显退化（如 MAESTRO MAEVelo 升至 20.5，GAPS rBSSL 降至 0.702），说明钢琴预训练是跨乐器适配的关键先验。

### 🔬 细节详述

- 评估指标选择：钢琴数据集上报告逐音符 MAEVelo；吉他无真实标签时，将预测速度经所选 SoundFont 重合成，并与真实录音在 Bark-scale specific loudness（BSSL）和 Bark-scale total loudness（BSTL）上计算 Pearson 相关，得到 rBSSL 和 rBSTL。Pearson 相关对整体增益和偏移不敏感，可降低录音响度、麦克风响应和渲染器校准差异带来的影响。论文还测试了余弦相似度与 MAE，但余弦相似度对动态差异不敏感（GT−Flat 在 BSSL 上仅 +0.052），MAE 对 SoundFont 切换的增益漂移过敏感（BSSL 漂移 0.193），因此主指标采用 Pearson r。
- 代理训练超参数：Diff-SFProxy 训练使用 20k MIDI 片段、2k 验证片段，AdamW 优化器，学习率 \(10^{-4}\)，weight decay 0.01，batch size 64，随机种子 1919，训练 200 epochs，按最低验证损失选 checkpoint。针对 2/5/10 秒片段，\(N_{\max}\) 分别设为 32/64/128；三种代理均为同一 Transformer 结构，参数量 4.9M。
- Velocity-recovery diagnostic：将 MIDI 中所有 velocity 重置为 64，冻结代理，用 Adam 对候选 velocity 做 120 步梯度下降，学习率 0.03。in-domain 下 5s 钢琴恢复 MAE 为 12.2、吉他 9.1；stress test 下 5s 钢琴为 17.7、吉他 10.7。2s 到 5s 提升明显，5s 到 10s 无额外收益，因此默认用 5s 代理，2s 作为消融。
- 适配实验超参数：VeloEst 处理 10 秒片段，冻结后端处理 5 秒 crop，2 秒为消融；后端损失在有效音符上平均后回传。Diff-Synth 后端原本按 3 秒输入实现，作者用原始超参重新训练了 2 秒和 5 秒版本。适配运行 120k 次迭代，Adam 学习率 \(10^{-4}\)，batch size 8，每 10k 步学习率乘以 0.9，随机种子 1919，最终 checkpoint 按验证集 rBSSL 选择。
- 数据集与 SoundFont：MAESTRO V3 约 198.7 小时，GAPS 约 14 小时，SMD 约 4.7 小时，FL 约 4.0 小时。钢琴采用 Salamander Grand Piano 作为默认 SoundFont，吉他采用 Spanish Classical Guitar；YDP Grand Piano 用于指标对 SoundFont 变化的稳健性诊断。
- 度量诊断的表格结果：在 MAESTRO 上，GT velocity 与 flat velocity 的 Pearson rBSSL 分离度为 +0.118，rBSTL 分离度为 +0.263，说明 Pearson r 能区分表达性力度与平坦力度；将 Salamander 换成 YDP 后，Pearson rBSSL 漂移仅 0.034、rBSTL 漂移 0.011，而 MAE 的 BSSL 漂移为 0.193、BSTL 漂移为 1.723，说明 MAE 对渲染器增益过于敏感。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 将无标签跨乐器力度估计重构为 renderer-conditioned velocity 适配，并设计 Diff-SFProxy 用 PHE/OSF 参数监督替代波形重建，避免 Diff-Synth 的梯度被音色残差干扰；这是相对现有可微分合成器路线的新方法贡献。

*   技术严谨性 (1.1/1.5)：[A_METHOD][SCORING_SOURCE_15/17] Diff-SFProxy 用 PHE/OSF 参数监督并配 anti-collapse/saturation 正则，目标定义自洽；但恢复的 velocity 是 renderer-conditioned 属性，踏板、连续控制器、混响等非 velocity 因素可能被吸收进目标，算法假设存在内在混淆。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 提供 flat、零样本 VeloEst、Diff-Synth 基线和两种关键消融，并在 MAESTRO/SMD/GAPS/FL 四个数据集上跨域评估；但吉他 GAPS/FL 无真实 velocity 标签，只能通过 BSSL/BSTL 响度相关间接验证，且实验仅覆盖钢琴和吉他，跨乐器普适性证据不足。

*   清晰度 (0.9/1)：[A_METHOD] 对 VeloEst、Diff-Synth、Diff-SFProxy 的输入输出、损失公式、正则项、Transformer 细节和训练流程都给出了完整说明，框架图与代理结构图对应清晰；但 BSSL/BSTL 感知响度指标和 MAEVelo 两套评价体系分散在不同章节，读者需自行跨表整合，未达到满分清晰度。

*   影响力 (1.0/1.5)：[A_SUMMARY] 面向无 velocity 标签乐器这一实际痛点，提出可用于 expressive rendering 与数据标注的标签高效适配方案，对音频/音乐领域的跨乐器动态估计有方法推动作用；但整体影响仍受限于验证范围，尚未表现为超越有监督的通用能力。

*   开源 (1.0/1.5)：[A_OPEN] GitHub 仓库已公开代码，但没有披露 VeloEst 或 Diff-SFProxy 的预训练 checkpoint，也没有发布数据集划分或 PHE/OSF 缓存，仅开放代码属于部分核心产物，故按固定锚点给 1.0。

*   可复现性 (0.3/0.5)：[A_METHOD][A_RESULTS][A_LIMITS] 论文披露了代理与适配阶段的 Transformer 结构、Nmax、损失权重、优化器、学习率、batch size、epoch/迭代数及评估指标，大部分训练配置可核对；但账本未记录硬件/完整复现步骤，且 A_LIMITS 指出完整复现需自行渲染与训练，因此不能给满分。

*   工程/实践价值 (0.8/1.5)：[A_METHOD][A_LIMITS] 共享前端加冻结 SoundFont 代理的接口清晰，PHE/OSF 参数监督避免逐乐器专用合成器设计，且 velocity-recovery diagnostic 可作为部署前梯度验证；但 SoundFont 选择仍依赖人工试听、缺少自动化匹配，工程落地仍有明显限制。

### 🚨 局限与问题

- 目标域验证不足：吉他数据 GAPS/FL 没有真实 velocity 标签，只能通过 BSSL/BSTL 响度相关性间接评估，无法直接量化逐音符力度估计误差；论文也承认这一评估方式不能完全替代真值验证。
- 乐器覆盖有限：实验仅覆盖钢琴和吉他，尚未验证小提琴、管乐等其他常见乐器；“cross-instrument”的普适性仍缺乏更多乐器支持。
- 钢琴上仅为 sanity check：在 MAESTRO 上 Diff-SFProxy 的 MAEVelo 为 10.5，明显差于有监督 VeloEst 的 3.9；在 SMD 跨数据集上 rBSSL/rBSTL 为 0.821/0.806，略低于零样本 VeloEst 的 0.829/0.816，说明代理适配在钢琴域内未超越零样本迁移。
- renderer-conditioned velocity 的相对性：论文第 5 节明确指出，恢复出的 velocity 并不是演奏声学的规范属性，而是相对于所选 SoundFont 的“能最好复现感知动态”的速度；真实演奏中踏板、连续控制器、混响等非 velocity 因素也可能被吸收进 velocity 估计中。
- SoundFont 选择依赖人工：当前通过试听挑选与目标乐器接近的 SoundFont，尚未自动化；若目标乐器没有合适的免费 SoundFont，适配效果可能受限。
- 扩展性未验证：论文仅将未来工作列为小提琴、管乐等扩展，未提供这些乐器上的实验证据；同时未披露预训练模型/代理 checkpoint，完整复现需自行渲染与训练。

---

[← 返回 2026-08-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-11/)
