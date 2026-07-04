---
title: "SALSA-V: Shortcut-Augmented Long-form Synchronized Audio from Videos"
date: 2026-07-04
draft: false
tags: [音视频生成, 流匹配, 扩散模型, 对比学习, 长音频处理]
categories: [icml-2026]
description: "音视频生成 | 7.6/10"
hiddenInHomeList: true
---

# 📄 SALSA-V: Shortcut-Augmented Long-form Synchronized Audio from Videos

#音视频生成 #流匹配 #扩散模型 #对比学习 #长音频处理

**7.6/10** | 创新 1.2/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 清晰 0.9/1 | 影响 1/1.5 | 开源 0.2/1.5 | 复现 0.4/0.5 | 工程 1.2/1.5

✅ **7.6/10** | 前25% | #音视频生成 | #流匹配 | #扩散模型 #对比学习 | [arxiv](https://openreview.net/forum?id=akfapJ7Uuf)


### 👥 作者与机构

- 第一作者：Amir Dellali（ETH Zurich）
- 通讯作者：Amir Dellali（ETH Zurich）、Luca A. Lanzendörfer（ETH Zurich）、Florian Grötschla（ETH Zurich）、Roger Wattenhofer（ETH Zurich）
- 作者列表：Amir Dellali（ETH Zurich）、Luca A. Lanzendörfer（ETH Zurich）、Florian Grötschla（ETH Zurich）、Roger Wattenhofer（ETH Zurich）

### 💡 毒舌点评

该工作将 Shortcut 模型和掩码流匹配巧妙地嫁接到视频到音频生成，实现了少步采样和长音频扩展，实验中同步指标和人类偏好均有明显优势，实用性较强。但核心方法多为已有技术的组合，对比学习同步模型与 Shortcut 损失的创新增量有限，且未开源代码与模型，削弱了其学术推动力。

### 📌 核心摘要

论文要解决视频到音频生成中三个关键痛点：长序列生成时的质量退化、音频条件控制缺失、以及扩散模型所需的过多采样步数。方法核心是 SALSA‑V，一种基于 shortcut‑augmented latent flow matching 的多模态生成模型，它通过掩码训练目标实现音频条件的 in‑/outpainting，从而以迭代延伸方式合成任意长度音频，同时利用一致性损失（shortcut loss）使模型在极少数采样步数（如 8 步）下仍保持高保真度；此外，还训练了一个基于 VideoPrism 和 AST 的对比学习同步模型，为生成器提供高分辨率时间对齐特征。相较现有方法，SALSA‑V 首次将 Shortcut 范式引入视频到音频领域，无需后训练蒸馏即可实现实时级生成，并且凭借掩码流匹配统一了无条件生成、音频条件生成和长序列扩展。主要实验显示，在混合时长测试集上，SALSA‑V 的 DeSync 同步指标达到 0.497，显著优于 MMAudio（0.521）和 FoleyCrafter（1.319），人类评估中同步性 MOS 为 3.52（MMAudio 为 2.92）；在 4 步采样下 \(FAD_{VGG}\) 仍保持 1.19，远低于同采样预算的 Frieren（2.17）。实际意义在于为实时 Foley 创作和长时间视频音效生成提供了可用的流水线。主要局限性为长音频生成依赖连续 outpainting，在场景切换时难以自然过渡，且当前未释放代码与权重，复现成本较高。

### 🔗 开源详情

- 代码：论文中未提供代码仓库链接，但提供了项目页面：https://eth-disco.github.io/SALSA-V/
- 模型权重：论文中未提及
- 数据集：论文使用多个公开数据集，包括：VGGSound（https://www.robots.ox.ac.uk/~vgg/data/vggsound/ ）、Moments-in-Time（http://moments.csail.mit.edu/ ）、Panda70M（https://snap-research.github.io/Panda-70M/ ）、WavCaps（https://github.com/XinhaoMei/WavCaps ）、AudioSetCaps（取自AudioSet，https://research.google.com/audioset/ ），以及一个未公开的高保真工作室Foley数据集
- Demo：论文中未提及
- 复现材料：论文中未提供专门复现材料，训练细节见附录A.5及A.6，项目页面可能包含额外信息
- 论文中引用的开源项目：
  - Synchformer：https://github.com/v-iashin/Synchformer
  - SpecVQGAN：https://github.com/v-iashin/SpecVQGAN
  - V-AURA：链接未公开
  - MMAudio：https://github.com/hkchengrex/MMAudio
  - Frieren：链接未公开
  - LoVA：链接未公开
  - MDSGen：链接未公开
  - TARO：链接未公开
  - PAVAS：链接未公开
  - ImageBind：https://github.com/facebookresearch/ImageBind
  - VATT：https://github.com/google-research/google-research/tree/master/vatt
  - InternVideo2：https://github.com/OpenGVLab/InternVideo2
  - SigLIP 2：https://github.com/google-research/big_vision
  - ViT（Vision Transformer）：https://github.com/google-research/vision_transformer
  - AST（Audio Spectrogram Transformer）：https://github.com/YuanGongND/ast
  - VideoPrism：https://github.com/google-research/videoprism
  - Stable Audio VAE：https://github.com/Stability-AI/stable-audio
  - Flax：https://github.com/google/flax
  - JAX：https://github.com/jax-ml/jax

### 🏗️ 方法概述和架构

SALSA‑V 采用潜空间流匹配框架，整体流程分为视觉编码、音频编码、多模态扩散变换器生成以及音频解码四个阶段。输入为静音视频帧与可选文本描述，输出为与视频内容同步的音频波形。



![图1](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/akfapJ7Uuf-p13-r58a674f3.jpg)



视觉特征提取：使用两个并行的视觉编码器。语义分支以冻结的 SigLIP 2 ViT 按 8 FPS 提取帧级特征，形状为 \((t_v, 1152)\)，并通过全局池化得到全局语义向量与序列式局部特征。同步分支则依赖作者自训练的对比模型：该模型以冻结的 VideoPrism（ViViT 架构）为视觉骨干，追加可训练时空层后接 MAP 头，输出 24 FPS、维度 768 的同步嵌入；音频侧使用 AST 处理 16 kHz Mel 频谱，经平均池化与视觉嵌入对齐，二者通过 SigLIP 损失在 0.667 秒片段上训练，使同步嵌入对时间偏移高度敏感。同步特征经停梯度插值后可学习的转置卷积上采样至与音频潜变量等长，再通过门控残差注入生成器。[图像补充] 图1和图4清晰地展示了这一流程：VideoPrism视觉骨干和AST音频编码器在对比学习损失下训练，产生的时间对齐特征通过上采样和门控机制注入到主生成器中。



![图2](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/akfapJ7Uuf-p13-radc1c0d4.jpg)



音频潜空间：将 Stable Audio VAE 微调至 43 Hz 帧率，编码器将 16 kHz 波形压缩为潜变量 \(x_1\)，形状 \((t_a, 64)\)。该 VAE 的解码器在推理时将潜变量还原为波形。

生成器架构：主体为 DiT 风格的Transformer。前若干块采用改进的 MMDiT‑X 层，其联合注意力同时处理音频潜变量与视觉语义特征序列，并在前 n 块中对音频流额外施加独立自注意力；后续块为标准单流 DiT 块。所有 Transformer 使用旋转位置嵌入。条件注入方式为：全局条件（语义池化向量、文本嵌入、时间步嵌入）与局部条件（加上序列对齐的同步特征）通过 adaLN 调节网络参数。[图像补充] 图1和图3提供了架构的细节视图，图2特别展示了视觉语义特征如何通过Cross-Attention与音频潜变量交互，图3则详细说明了adaLN条件注入模块的工作方式。

掩码流匹配训练：训练时随机选取连续区间（5 ms 至 2.5 s）作为干净参考音频，对其所在潜变量不施加噪声，其余位置按流匹配过程由 \(x_0\) 噪声逐渐插值至 \(x_1\)。在受噪声污染的位置计算流匹配损失，并引入两个可学习的“掩码/未掩码”标记以区分状态。这种掩码训练直接赋予了模型音频条件生成与 outpainting 的能力。[图像补充] 图4（左）直观地展示了这一训练范式，标注了“Clean Reference Audio”和“Noised Audio”区域，以及用于区分的“Mask/Unmask Tokens”。

Shortcut 损失：在标准流匹配目标外，随机选取 25% 样本施加自一致性损失：要求模型从 \(x_t\) 出发预测单步较大步长 \(d\) 的速度，应等于先以半步步长 \(d/2\) 预测再合成后进一步预测的速度之和。这使得模型学会预测未来曲率，进而在推理时仅用 4–8 步即可生成高质量音频，无需额外蒸馏。[图像补充] 图4（右）用示意图解释了shortcut loss的自一致性原理，即从 \(x_t\) 预测的单步速度 \(v_{1步}\) 应与两步连续预测 \(v_{1/2步} + v_{2/2步}\) 的结果一致。

推理：给定完整视频和可选的前置参考音频，对要生成的部分从噪声开始，应用 classifier‑free guidance（视觉、文本、同步条件，guidance scale 4.0）逐步去噪。参考音频片段被直接拼接到潜变量序列对应位置并标记为“掩码”，使生成部分延续其音色与背景声。长音频生成通过反复以前一步末尾短片段为参考、outpainting 后续 9.5 秒实现迭代延伸。[图像补充] 图20展示了完整的音频条件生成流程，图21则详细描绘了长音频生成（Outpainting）的迭代过程，即如何利用前一个片段的末尾作为参考来扩展后续音频。

### 💡 核心创新点

1. Shortcut 模型的 V2A 首次应用：将 Frans 等提出的 shortcut 自一致性训练引入视频到音频流匹配，使模型在没有任何后训练蒸馏的情况下原生支持 4–8 步采样，同步性和保真度几乎不损失，而此前 Frieren 等需重新流蒸馏才能达到类似效果，且会牺牲多步采样质量。
2. 掩码流匹配统一条件生成与长音频：借鉴 VampNet 的掩码标记策略，训练时随机保留干净参考片段，使单一模型同时完成无条件生成、音频条件生成（\(FAD\) 和频谱距离随参考音频增长而持续降低）、inpainting 和 outpainting，进而通过迭代扩展实现任意长度音频，避免了以往模型需独立拼接或架构限定长度的限制。
3. 大尺度预训练对比同步特征：用 VideoPrism 作为视觉骨干，结合 AST 以 SigLIP 损失在小批量（batch size 30）上训练专门的同步模型，生成 24 FPS 的高分辨率时间对齐特征，比 Synchformer 等基于小数据训练的同步模块更能捕捉精细的事件边界，显著降低了 DeSync 误差（0.497 vs. MMAudio 0.521）。[图像补充] 图1和图4明确标示了同步分支使用对比学习进行训练。
4. 模型规模与步数鲁棒的架构设计：混合 MMDiT‑X 和单流 DiT 块，在 347M 到 1B 参数下均表现稳定，且 Shortcut 训练未损害全步采样性能（32 步下与纯流匹配指标持平），提供了灵活的部署选择。

### 📊 实验结果

论文在混合时长的测试集（包含 VGGSound 测试集、UnAV‑100 和 in‑the‑wild 视频）上评估，主要客观指标与人类评测结果如下：



![图5](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/akfapJ7Uuf-p14-v3e15d648.jpg)



主要对比实验（表 1）：

| 方法 | Params | FAD_VGG↓ | KL_PANNs↓ | KL_PaSST↓ | IS↑ | IB↑ | DeSync↓ | Overall MOS | Quality MOS | Sync. MOS |
|------|--------|-----------|------------|------------|------|------|---------|--------------|-------------|-----------|
| Frieren | 159M | 1.42 | 2.61 | 2.55 | 13.20 | 23.64 | 0.981 | - | - | - |
| V‑AURA | 695M | 2.93 | 2.33 | 1.98 | 9.87 | 27.29 | 0.696 | - | - | - |
| LoVA | 1.06B | 1.79 | 2.14 | 2.06 | 16.86 | 27.95 | 1.205 | - | - | - |
| AudioX | 1.17B | 1.11 | 1.70 | 1.63 | 18.05 | 26.57 | 0.862 | - | - | - |
| FoleyCrafter | 1.22B | 2.43 | 2.21 | 2.15 | 16.39 | 26.37 | 1.319 | 2.78 | 2.46 | 2.37 |
| MMAudio | 1.03B | 1.12 | 1.77 | 1.72 | 18.13 | 32.89 | 0.521 | 3.29 | 3.16 | 2.92 |
| SALSA‑V | 643M | 1.07 | 1.81 | 1.63 | 17.85 | 33.76 | 0.497 | 3.43 | 2.96 | 3.52 |

SALSA‑V 在 DeSync 和人类同步 MOS 上显著领先，ImageBind 语义对齐分数最高。[图像补充] 图11以表格形式呈现了主要对比实验结果，与主模型文字描述一致。图6进一步可视化了DeSync指标的对比，突出显示了SALSA-V的优势。

消融：模型尺寸与训练范式（表 2）：

| Variant | Params | FAD_VGG↓ | KL_PANNs↓ | KL_PaSST↓ | IS↑ | IB↑ | DeSync↓ |
|---------|--------|-----------|------------|------------|------|------|---------|
| Flow Matching | 347M | 1.09 | 1.87 | 1.71 | 18.01 | 31.21 | 0.504 |
| Flow Matching | 643M | 1.10 | 1.80 | 1.63 | 17.91 | 33.71 | 0.499 |
| Shortcut | 347M | 1.12 | 1.85 | 1.68 | 18.03 | 31.09 | 0.501 |
| Shortcut | 643M | 1.07 | 1.81 | 1.63 | 17.85 | 33.76 | 0.497 |

表明 Shortcut 训练未降低全步采样性能，且增大参数可稳定提升多数指标。[图像补充] 图5（中）和图16提供了对这一消融结果的图形化展示，直观显示了模型尺寸增加和采用shortcut训练带来的指标改善。

少步采样对比 MMAudio（图 4 左）与 Frieren（表 3）：在 1–32步的对比中，SALSA‑V 的 \(FAD_{VGG}\) 和 DeSync 几乎保持稳定，而 MMAudio 在 8 步以下时指标急剧恶化。与 Frieren 相比，SALSA‑V 在 4 步下 \(FAD_{VGG}\) 为 1.19、DeSync 为 0.536，远优于 Frieren（reflow）的 2.17 和 0.917。[图像补充] 图7和图8（左）分别清晰展示了与Frieren的指标对比和与MMAudio不同采样步数下的性能曲线，突显了SALSA-V在少步采样下的巨大优势。

生成长度鲁棒性（图 4 右）：MMAudio 在 20 秒后 \(FAD\) 和 DeSync 明显恶化，SALSA‑V 至 60 秒仍保持 \(FAD\) 约 1.0、DeSync 约 0.55 的稳定水平。[图像补充] 图9以折线图的形式展示了这一结论，可以观察到SALSA-V的性能曲线在长时间范围内保持平稳。

长音频对比 LoVA（表 5）：30 秒测试中 SALSA‑V 的 DeSync 为 0.526 vs LoVA 的 1.225，其余指标全面占优。[图像补充] 图13以表格形式展示了此对比结果，与文字描述相符。

生成效率（表 4）：SALSA‑V 在 4 步下生成 10 秒音频仅需 0.71 秒，快于多数竞争者。[图像补充] 图8（右）对比了不同模型生成10秒音频所需的时间，SALSA-V在少步配置下效率显著。

音频条件生成评估（图 5 与图 6）：通过 Slice‑Wasserstein Spectral Distance（SWSD）和 \(FAD\)，随参考音频长度增加（0–2 秒），生成部分与真实音频的频谱距离持续缩小（SWSD 和 \(FAD\) 均呈下降趋势），验证了条件有效性。[图像补充] 图5和图10定性及定量地展示了音频条件生成的能力，图12也展示了不同生成长度（10s， 20s， 30s）下的性能对比。

### 🔬 细节详述

- 训练数据：视频‑音频对来自 VGGSound（约 550 小时）、Moments‑in‑Time、Panda70M 子集（经同步模型过滤），总计约 900 小时；音频‑文本数据来自 AudioSetCaps、WavCaps 和内部 Foley 录音室数据集，共约 8500 小时。所有片段裁剪至最大 15 秒。[图像补充] 图15详细展示了用于过滤视频-音频对的流程图，确保训练数据的同步质量。
- 对比学习同步模型训练：VideoPrism 冻结，追加 4 个空间、2 个时间 ViViT 层训练；AST 全解冻。SigLIP 损失，batch size 30，学习率视觉新层 1e‑4、音频骨干 3e‑5，AdamW，cosine 调度含 2000 步 warmup，训练 1M 步。[图像补充] 图4（左下）明确标示了对比学习训练的具体参数，如批量大小30，损失函数为SigLIP Loss。
- 生成器训练：batch size 300，25% 样本用于 Shortcut 自一致性，时间步采样自 log‑normal 分布；掩码长度均匀随机 1–88 个潜变量。优化器 Adam，学习率 1e‑4，EMA 率 0.999，训练 1M 步。条件丢弃概率 0.1。[图像补充] 图4（左上）提到了“uniform random (1 to 88)”的掩码长度和“log-normal distribution”的时间步采样，这些细节在主分析中已提及但图中给出更直观展示。
- 模型配置：大模型 6 个 MMDiT‑X 块（前 3 块带音频独立自注意力）+ 6 个 DiT 块，共 643M 参数；小模型 4+4 结构，347M。VAE 经额外 800k 步微调，帧率 43 Hz，潜变量维度 64。
- 推理：CFG scale 4.0，长音频生成每次用 0.5 秒参考音频 outpainting 9.5 秒。所有模型在 A100 上以 batch size 1 评估推理时间。[图像补充] 图20和图21详细说明了推理时的流程，包括CFG的应用和长音频迭代的具体重叠长度。
- 硬件：TPU v4‑8 节点训练，实现基于 JAX/Flax。

### ⚖️ 评分理由

*   创新性 (1.2/2)：将 Shortcut 训练和掩码流匹配组合应用于 V2A 带来了一定新意，尤其是通过掩码统一条件生成与长序列扩展的思路具有工程洞察。但核心组件 Shortcut 损失、对比同步训练和 MMDiT 均来自已有工作，方法层面缺乏本质理论突破，属于有效但增量式的创新。
*   技术严谨性 (1.3/1.5)：方法推导和损失函数表述清晰，自一致性公式准确，架构设计合理。掩码策略、同步特征上采样的门控设计与停梯度等细节体现了良好的工程考虑。未发现明显逻辑漏洞或错误假设，但 Shortcut 训练中步长分布与掩码长度对行为的影响缺乏深入理论分析，边界条件讨论稍显不足。
*   实验充分性 (1.35/1.5)：基线覆盖全面（MMAudio、FoleyCrafter、Frieren、LoVA、AudioX 等），同时提供了客观指标与人类评测。消融实验考察了模型规模、shortcut vs 流匹配、少步采样、长音频扩展和条件生成效果，维度较完整。但缺少对同步特征模型与 Synchformer 的直接对比，也未分析掩码长度、shortcut 步长分布等关键超参数的敏感度，略欠透彻。[图像补充] 图5， 图16， 图17， 图18， 图19提供了额外的消融视角，例如图17展示了不同shortcut比例的影响，图18展示了不同引导强度的影响，图19展示了不同掩码长度比例的影响，这些在主分析文字中提及但未详述。
*   清晰度 (0.9/1)：整体结构清楚，图 1 架构图有效传达了模型组成。方法部分对掩码训练、shortcut 损失和推理策略给出了较详尽的说明。但个别符号如 \(p(t,d)\) 的采样分布未明确定义，附录中 Sliced‑Wasserstein 算法描述放置稍显突兀，略微影响阅读流畅性。[图像补充] 图1， 图2， 图3， 图20， 图21等架构图和流程图极大地增强了方法部分的可视化清晰度。
*   影响力 (1.0/1.5)：SALSA‑V 在 V2A 的同步精度和长音频生成上取得了显著提升，并且少步采样特性对实时应用有实际吸引力，有望推动该方向的后续工作。然而，代码和模型未公开，限制了其被复现和快速采用的潜力，对领域的推动力因此有所稀释。
*   开源 (0.2/1.5)：论文提供了一个项目页面链接，页面可能包含音频样本，但论文全文未提及代码、模型权重或数据集的公开计划，核心资源无法获取，开源程度极低。
*   可复现性 (0.4/0.5)：附录 A.5 等节给出了训练步数、batch size、学习率、优化器、EMA 率、条件丢弃概率等关键信息，配合公开数据集和预训练模型名称，具备一定的复现基础。但未提供完整的配置文件或更细粒度的超参数（如 shortcut 损失中 \(d\) 的采样范围的上限、掩码长度分布的具体参数等），仍存在少量模糊之处。
*   工程/实践价值 (1.2/1.5)：系统整合了视觉编码、对比同步模型、VAE、扩散 Transformer 和少步采样策略，形成了一个较完整的 V2A 流水线，对实时 Foley 创作和长视频配音场景具有参考价值。但尚未提供工程化部署方案或生产环境相关的优化经验，距离工业级落地仍有差距。

### 🚨 局限与问题

论文明确承认的局限：
- 长音频生成依赖连续的 outpainting，若视频发生场景切换，模型会尝试延续前置片段的音色特征，导致新场景声音不匹配；文中指出可通过手动重新播种或调节音频条件引导强度来缓解。

审稿人发现的潜在问题：
1. 同步特征模型未与 MMAudio 所依赖的 Synchformer 进行直接对比，无法确切判断性能增益是来自 VideoPrism 大尺度预训练、训练策略还是同步特征的更高时域分辨率。
2. shortcut 训练中步长 d 的采样分布及其与掩码长度的交互影响未有消融分析，这些超参数可能对少步生成质量敏感，但论文未予以讨论。
3. 对“长音频”的评估最多只到 60 秒，且 outpainting 方式依赖固定的 0.5 秒重叠，更长时间（数分钟级）下的误差累积和稳定性未被验证。
4. 掩码流匹配中参考音频被完全保留为干净潜变量，推理时若参考段含有噪声或与视频不完全匹配，模型行为未探究。
5. 实验未报告多次运行的方差或统计显著性检验，部分指标差异（如 IS、\(FAD\)）较小，结论的稳健性难以完全信服。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/2026-07-04/)
