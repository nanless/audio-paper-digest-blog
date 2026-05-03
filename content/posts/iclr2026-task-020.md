---
title: "ICLR 2026 - 语音分离 论文列表"
date: 2026-05-04
draft: false
tags: ["语音分离"]
categories: [iclr-2026]
description: "共 5 篇 ICLR 2026 语音分离 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音分离

共 **5** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Knowing When to Quit: Probabilistic Early Exits for Speech S](/audio-paper-digest-blog/posts/2026-05-04-knowing-when-to-quit-probabilistic-early-exits) | 8.0分 | 前25% |
| 🥈 | [AlignSep: Temporally-Aligned Video-Queried Sound Separation ](/audio-paper-digest-blog/posts/2026-05-04-alignsep-temporally-aligned-video-queried-sound) | 7.5分 | 前25% |
| 🥉 | [Efficient Audio-Visual Speech Separation with Discrete Lip S](/audio-paper-digest-blog/posts/2026-05-04-efficient-audio-visual-speech-separation-with) | 7.5分 | 前25% |
| 4. | [MAPSS: Manifold-based Assessment of Perceptual Source Separa](/audio-paper-digest-blog/posts/2026-05-04-mapss-manifold-based-assessment-of-perceptual) | 7.5分 | 前25% |
| 5. | [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-04-mars-sep-multimodal-aligned-reinforced-sound) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Knowing When to Quit: Probabilistic Early Exits for Speech Separation Networks](/audio-paper-digest-blog/posts/2026-05-04-knowing-when-to-quit-probabilistic-early-exits)

🔥 **8.0/10** | 前25% | #语音分离 | #概率建模 | #动态计算 #信号处理

👥 **作者与机构**

- 第一作者：Kenny Falkær Olsen（丹麦技术大学、WS Audiology）
- 通讯作者：未说明
- 作者列表：Kenny Falkær Olsen（丹麦技术大学、WS Audiology）、Mads Østergaard（WS Audiology）、Karl Ulbæk（WS Audiology）、Søren Føns Nielsen（WS Audiology）、Rasmus Malik Høegh Lindrup（WS Audiology）、Bjørn Sand Jensen（丹麦技术大学）、Morten Mørup（丹麦技术大学）

💡 **毒舌点评**

亮点在于其优雅的概率框架，将早退出条件直接建立在可解释的预测信噪比分布上，而非启发式规则或固定的损失权重组合；短板是实验部分虽然与多个静态SOTA模型对比，但在“动态计算”这一核心卖点上，未与其它动态缩放方法（如Slim-TasNet， 动态通道剪枝）进行更直接的性能-计算曲线对比，显得自家优势不够“独家”。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用的是公开数据集（WSJ0-2mix, Libri2Mix, WHAM!, WHAMR!, DNS2020），论文中给出了引用和获取方式。
- Demo：未提及。
- 复现材料：论文在附录和正文中提供了极其详尽的训练细节、超参数设置、网络架构描述、数据集混合脚本引用等，为复现提供了充分信息。
- 论文中引用的开源项目：引用了`pywsj0-mix`、`LibriMix`、`DNS-Challenge`的官方脚本用于生成数据。

📌 **核心摘要**

这篇论文旨在解决当前语音分离网络计算预算固定、无法根据输入音频的难易程度（如无重叠、低噪声）动态调整计算量的问题。核心方法是提出了一个名为PRobabilistic Early-exit for Speech Separation (PRESS) 的概率框架，该框架将模型训练为同时预测干净语音信号和误差方差，从而能以概率形式估计每个中间层输出的预测信噪比。与已有的早退出方法（通过隐式损失组合或连续层相似度）不同，PRESS的退出条件直接对应于用户设定的目标SNR及其置信水平，具有直观的可解释性。论文还设计了配套的PRESS-Net架构（基于线性RNN和早期源分离），以支持高质量的早期重建。实验表明，在WSJ0-2mix、Libri2Mix、WHAM!、WHAMR!等数据集上，PRESS模型在最终出口性能上与强基线模型相当，同时其概率退出条件经过校准后，能够在推理时实现显著的计算节省（如GMAC/s减少），且退出决策直接反映了网络对输出质量的置信度。主要局限性在于其概率退出的校准依赖于在全长度音频上的微调，且未探索为不同说话人单独退出。

---

### 🥈 [AlignSep: Temporally-Aligned Video-Queried Sound Separation with Flow Matching](/audio-paper-digest-blog/posts/2026-05-04-alignsep-temporally-aligned-video-queried-sound)

✅ **7.5/10** | 前25% | #语音分离 | #流匹配 | #音视频 #多模态模型

👥 **作者与机构**

- 第一作者：Xize Cheng（浙江大学）
- 通讯作者：Zhou Zhao（浙江大学）
- 作者列表：Xize Cheng（浙江大学），Chenyuhao Wen（浙江大学），Tianhao Wang（浙江大学），Yongqi Wang（未说明），Zehan Wang（未说明），Rongjie Huang（未说明），Tao Jin（浙江大学），Zhou Zhao（浙江大学）。( 表示同等贡献)

💡 **毒舌点评**

亮点在于首次将流匹配生成范式引入视频引导的音频分离，并针对性地设计了“时序拼接+无交叉注意力Transformer”的向量场估计器来强约束音视频对齐，有效解决了传统掩模方法的频谱空洞和语义混淆问题；短板是作为生成模型，其推理速度显著慢于判别式基线（如OmniSep），且新构建的VGGSound-Hard基准规模较小（118对），其对结论泛化性的支撑有限。

🔗 **开源详情**

-   代码：论文中明确提及“More results and audio examples are available at: https://AlignSep.github.io.” 并承诺“upon paper acceptance”开源代码、预训练模型及相关资源。当前未直接提供代码仓库链接。
-   模型权重：论文中未提及已公开的权重链接。
-   数据集：VGGSound-Hard是作者新构建的，论文中说明其“will be released”，但未提供获取方式。训练数据集（MUSIC, VGGSound）为公开数据集。
-   Demo：提供了一个项目主页 (https://AlignSep.github.io) 用于展示更多结果和音频示例。
-   复现材料：论文在附录A提供了极其详细的超参数配置表（表4，表5），并讨论了训练策略（如分类器引导比例）、模型架构选择（拼接 vs 交叉注意力），复现信息非常充分。
-   引用的开源项目：
    -   视觉编码器：CAVP (Luo et al., 2023)
    -   音频VAE：源自 AudioLDM (Liu et al., 2023a)
    -   声码器：BigVGAN (Lee et al., 2022)
    -   评估工具：CLAP, ImageBind 等

📌 **核心摘要**

1.  解决的问题：现有的视频查询声音分离（VQSS）方法主要依赖语义信息，在处理同源干扰（如多个狗叫）和声音重叠时效果不佳，且主流的掩模方法易产生频谱空洞和不完全分离。
2.  方法核心：提出AlignSep，首个基于条件流匹配（Conditional Flow Matching）的VQSS生成模型。其核心是设计了一个时序对齐的向量场估计器，通过直接拼接视觉与音频特征（而非交叉注意力），并结合预训练的时序视觉编码器（CAVP），强制模型学习精确的音视频时序对应关系。
3.  主要创新：① 将流匹配范式引入VQSS，通过生成方式避免频谱空洞；② 提出了强调时序一致性的模型架构；③ 构建了全新的、更具挑战性的VGGSound-Hard基准，专注于评估模型在同源干扰下对时序线索的依赖。
4.  实验结果：在MUSIC-Clean、VGGSound-Clean和新提出的VGGSound-Hard数据集上，AlignSep在语义一致性（SA-A, SA-V）和时序对齐（TA-V）指标上均达到SOTA。例如，在VGGSound-Hard上，AlignSep的TA-V达到95.76%，显著高于OmniSep的76.27%。主观MOS评分也全面领先。

| 方法 | 数据集 | SA-A | SA-V | TA-V |
| :--- | :--- | :--- | :--- | :--- |
| OmniSep | VGGSound-Clean | 70.83 | 27.57 | 81.25 |
| AlignSep | VGGSound-Clean | 73.38 | 27.89 | 96.88 |
| OmniSep | VGGSound-Hard | 未提供 | 未提供 | 76.27 |
| AlignSep | VGGSound-Hard | 未提供 | 未提供 | 95.76 |

5.  实际意义：为复杂的视听场景声音编辑与分析提供了更鲁棒的技术基础，推动了生成式模型在跨模态感知任务中的应用。
6.  主要局限：生成式方法的推理效率低于判别式方法；VGGSound-Hard数据集规模有限；模型性能在很大程度上依赖于预训练的视觉和音频编码器。

---

### 🥉 [Efficient Audio-Visual Speech Separation with Discrete Lip Semantics and Multi-Scale Global-Local Attention](/audio-paper-digest-blog/posts/2026-05-04-efficient-audio-visual-speech-separation-with)

✅ **7.5/10** | 前25% | #语音分离 | #知识蒸馏 | #音视频 #离散表示

👥 **作者与机构**

- 第一作者：Kai Li (清华大学计算机科学与技术系、IDG/McGovern Institute for Brain Research)， Kejun Gao (清华大学计算机科学与技术系)
- 通讯作者：Xiaolin Hu (清华大学计算机科学与技术系、IDG/McGovern Institute for Brain Research、Chinese Institute for Brain Research)
- 作者列表：Kai Li (清华大学计算机科学与技术系、IDG/McGovern Institute for Brain Research)， Kejun Gao (清华大学计算机科学与技术系)， Xiaolin Hu (清华大学计算机科学与技术系、IDG/McGovern Institute for Brain Research、Chinese Institute for Brain Research)

#

💡 **毒舌点评**

亮点：论文提出的双路径视觉编码器（DP-LipCoder）通过结合视频重建与来自AV-HuBERT的知识蒸馏，巧妙地解决了轻量化视觉编码器难以对齐音频语义的难题，在显著降低计算量的同时保持了分离性能，这一思路值得借鉴。短板：VQ离散化不可避免地会丢失部分连续的唇动细粒度信息，论文虽承认但未充分量化其在极端情况（如极快语速、模糊视频）下的潜在影响，且模型对“干净、同步”唇部视频的依赖限制了其在更野蛮场景下的适用性。

#

🔗 **开源详情**

- 代码：论文明确承诺在论文被接受后，于GitHub公开完整代码（Apache-2.0许可），仓库将包含环境配置、训练配置、预训练权重和源代码。论文提供了Demo页面链接 `https://cslikai.cn/Dolphin`。
- 模型权重：未提及是否公开预训练的DP-LipCoder权重或最终Dolphin模型权重。
- 数据集：使用的数据集（LRS2， LRS3， VoxCeleb2）为公开数据集，但需按各数据集提供的方式获取。论文承诺提供预处理脚本。
- Demo：提供了Demo页面链接。
- 复现材料：提供了极为详尽的复现信息，包括：完整的模型超参数配置（附录E）、训练策略（附录D）、数据集划分细节（附录C）、损失函数公式、以及所有消融实验的设置。训练在8个RTX 5090 GPU上进行。
- 论文中引用的开源项目：提到了依赖的开源项目：VQ实现来自PyPI上的 `vector-quantize-pytorch`；音频分离骨干网络TDANet的开源实现（Li et al., 2023）。

📌 **核心摘要**

这篇论文旨在解决音频-视觉语音分离（AVSS）模型在追求高性能时带来的高参数量和高计算成本问题，使其难以在实际场景（如边缘设备）中作为预处理模块部署。核心方法是提出一个名为Dolphin的高效AVSS模型。其创新点在于：1）设计了一个轻量级的双路径视频编码器DP-LipCoder，通过视频重建和来自预训练模型AV-HuBERT的知识蒸馏，将连续唇部视频流映射为离散的、与音频对齐的语义令牌；2）构建了一个基于单次迭代的轻量级编码器-解码器分离器，在其每一层引入全局-局部注意力（GLA） 模块，以高效捕捉多尺度依赖关系，替代了多轮迭代设计。与当前SOTA方法IIANet相比，Dolphin在三个基准数据集（LRS2, LRS3, VoxCeleb2）上的分离质量（SI-SNRi, SDRi, PESQ）均有提升，同时实现了显著的效率提升：参数量减少超过50%，计算量（MACs）降低超过2.4倍，GPU推理速度提升超过6倍。该工作为在资源受限环境中部署高性能AVSS系统提供了一个实用的解决方案。其主要局限性在于对输入视频的同步性和清晰度有一定要求，并且离散编码可能会损失部分连续的唇部运动细节。

#

---

### 4. [MAPSS: Manifold-based Assessment of Perceptual Source Separation](/audio-paper-digest-blog/posts/2026-05-04-mapss-manifold-based-assessment-of-perceptual)

✅ **7.5/10** | 前25% | #语音分离 | #自监督学习 | #模型评估 #流形学习

👥 **作者与机构**

- 第一作者：Amir Ivry（Technion - Israel Institute of Technology, Electrical and Computer Engineering）
- 通讯作者：未明确说明，但通常为机构或邮箱列表中的最后一位，即 Shinji Watanabe (Carnegie Mellon University, Language Technologies Institute)
- 作者列表：Amir Ivry (Technion), Samuele Cornell (Carnegie Mellon University), Shinji Watanabe (Carnegie Mellon University)

💡 **毒舌点评**

亮点：论文巧妙地将流形学习（扩散映射）与自监督语音表示结合，为源分离评估提供了一个理论扎实、可解释性强且能解耦不同失真类型的全新视角，实验全面且性能显著优于众多基线。短板：该指标框架对输入信号的时间对齐高度敏感，这在许多实际部署场景（如存在延迟或异步采集）中是一个显著限制；此外，构建感知失真簇的先验设计是否具有普遍最优性仍存疑。

🔗 **开源详情**

- 代码：是，提供了代码仓库链接：https://github.com/Amir-Ivry/MAPSS-measures。
- 模型权重：未提及。论文使用的是公开的预训练自监督模型（wav2vec 2.0, MERT）权重。
- 数据集：使用公开的SEBASS数据库进行评估，未提及新的数据集。
- Demo：未提及。
- 复现材料：论文提供了完整的超参数设置、误差界推导过程，并在附录中给出了详细的实验配置和额外的分析图表。复现信息较为充分。
- 论文中引用的开源项目：wav2vec 2.0, WavLM, HuBERT, MERT, webMUSHRA, VERSA评估工具包。

📌 **核心摘要**

1.  问题：现有的音频源分离评估指标（如SDR, PESQ）往往将“目标信号失真”和“来自其他声源的泄漏”两种错误混为一谈，无法单独量化，这限制了评估的精确性和诊断能力。
2.  方法核心：提出了感知分离（PS） 和感知匹配（PM） 两个互补的帧级评估指标。其核心流程（图1）包括：a) 对每个参考信号应用一组预设的感知失真（如噪声、混响、削波等）以构建其失真簇；b) 使用预训练的自监督模型（如wav2vec 2.0）对参考、失真及系统输出波形进行编码；c) 使用扩散映射将高维表示嵌入到低维流形，使欧氏距离能反映感知差异；d) 在流形上，PM通过计算输出与自身失真簇的距离来衡量失真，PS通过计算输出与其他源失真簇的距离来衡量泄漏。
3.  新在何处：这是首个从功能上显式分离“泄漏”与“失真”的源分离评估指标；结合了流形学习与深度表示；提供了帧级分析能力；并推导了确定性误差界和非渐近高概率置信区间。
4.  主要实验结果：在SEBASS数据库的英语、西班牙语和音乐混合物上，与18种广泛使用的指标相比，PS和PM在与人类平均意见分数（MOS）的线性相关（PCC）和秩相关（SRCC）中，几乎总是排名第一或第二（表1）。例如，在英语语音上，PS和PM的SRCC/PCC分别为84.12%/83.74%和84.69%/86.36%，优于PESQ（85.56%/84.05%）和SDR（77.72%/73.13%）。
5.  实际意义：为源分离系统提供了更精细的诊断工具，可区分错误类型；帧级度量和可微分特性使其可能用于优化损失或触发课程学习；理论误差界为评估结果提供了可靠性保证。
6.  主要局限性：对参考信号与系统输出之间的时间对齐敏感（图8）；性能依赖于预设的感知失真集，其覆盖范围和通用性有待进一步验证（表9）；计算复杂度高于传统简单指标。

---

### 5. [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-04-mars-sep-multimodal-aligned-reinforced-sound)

✅ **7.0/10** | 前25% | #语音分离 | #强化学习 | #多模态模型 #对比学习

👥 **作者与机构**

- 第一作者：Zihan Zhang, Xize Cheng (浙江大学)
- 通讯作者：Tao Jin (浙江大学)
- 作者列表：Zihan Zhang (浙江大学), Xize Cheng (浙江大学), Zhennan Jiang (中国科学院自动化研究所), Dongjie Fu (浙江大学), Jingyuan Chen (浙江大学), Zhou Zhao (浙江大学), Tao Jin (浙江大学)

#

💡 **毒舌点评**

亮点：将LLM领域中“对齐”的思想迁移到声音分离任务上是个聪明的类比，通过多模态奖励和强化学习直接优化语义一致性，为解决“信号指标好但听感不对”的老问题提供了新思路。
短板：强化学习训练流程的复杂度和计算开销显著增加（训练时间翻倍），但带来的性能提升（尤其在SDR/SIR等指标上）相对于OmniSep基线而言有些“蚊子肉”，在部分设置下甚至略有下降，这削弱了其方法必要性的说服力。

#

🔗 **开源详情**

- 代码：提供了代码仓库链接 `https://github.com/mars-sep/MARS-Sep`。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用公开的VGGSOUND和MUSIC数据集，论文未提及提供额外数据集。
- Demo：提供了样本演示页面 `https://mars-sep.github.io/`。
- 复现材料：在附录中提供了较详细的实验设置（数据集预处理、STFT参数）、训练细节（优化器、学习率、batch size、训练步数、硬件）和所有关键超参数（如PPO的 `ϵ`, `λH`, `λKL`, Beta分布的 `κ`）。
- 论文中引用的开源项目：依赖于OmniSep作为基础架构，并使用了CLIP, ImageBind, CLAP等预训练模型。训练评估使用了 `museval` 工具。

📌 **核心摘要**

1.  要解决什么问题：传统声音分离模型优化低级信号指标（如SDR），但输出可能语义上与查询不一致，导致感知上仍有干扰。论文将此称为“指标困境”。
2.  方法核心是什么：将声音分离重新定义为强化学习问题。基础分离器作为策略网络，输出的时频掩模作为动作。通过一个渐进对齐的多模态编码器（改进后的ImageBind）计算奖励，该奖励衡量分离音频与查询（文本/音频/图像）的语义一致性。策略通过一种稳定的、带有裁剪信赖域的策略梯度方法（类似PPO/GRPO）进行优化。
3.  新在哪里：(1) 首次引入偏好对齐视角和强化学习框架来优化声音分离的语义保真度。(2) 设计了多模态奖励模型，并采用多模态低秩双线性池化（MLBP）融合多模态信息作为锚点。(3) 提出了渐进式多模态编码器微调策略，以增强跨模态判别能力并提供稳定的奖励信号。
4.  主要实验结果：在VGGSOUND-clean+和MUSIC-clean+数据集上，MARS-Sep在文本、音频、图像和组合模态查询设置下，通常能取得比基线（如OmniSep、AudioSep等）更高的CLAP分数（语义一致性）和略高的SDR/SI-SDRi。例如，在VGGSOUND文本查询设置下，MARS-Sep的CLAPt为9.03±0.94%，高于OmniSep的8.98±0.89%。消融实验证明了RL训练、渐进对齐策略和MLBP模块的有效性。
5.  实际意义：该方法提升了分离输出的语义准确性和用户感知质量，对于需要精准声音内容提取的应用（如人机交互、辅助听觉）具有价值。
6.  主要局限性：强化学习训练增加了计算复杂度和训练时间（比基线慢约50%）。性能提升在信号级指标上并不总是显著且一致，部分场景下基线模型在某些指标上表现更优。奖励模型的质量和稳定性对最终效果至关重要，存在奖励欺骗的潜在风险。

#

---

