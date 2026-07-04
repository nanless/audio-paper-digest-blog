---
title: "PADS-TAL: Padding-Annealed Diffusion Sampling in Text-Aware Latent Space for Robust and Diverse Text-to-Music Generation"
date: 2026-07-04
draft: false
tags: [音乐生成]
categories: [icml-2026]
description: "音乐生成 | 6.6/10"
hiddenInHomeList: true
---

# 📄 PADS-TAL: Padding-Annealed Diffusion Sampling in Text-Aware Latent Space for Robust and Diverse Text-to-Music Generation

#音乐生成

**6.6/10** | 创新 1/2 | 严谨 1.1/1.5 | 实验 0.9/1.5 | 清晰 0.8/1 | 影响 0.9/1.5 | 开源 0.5/1.5 | 复现 0.4/0.5 | 工程 1/1.5

✅ **6.6/10** | 前50% | #音乐生成 | #扩散模型 | [arxiv](https://openreview.net/forum?id=c0iisI5tJj)


### 👥 作者与机构

- 第一作者：Taekoan Yoo（NHN Corp. AI Tech Lab.）
- 通讯作者：Kyeongbo Kong（Pusan National University）
- 作者列表：Taekoan Yoo、Wonkyung Jung、Kyunghun Kim（均为NHN Corp. AI Tech Lab.），Kyeongbo Kong（Pusan National University）

### 💡 毒舌点评

论文在“文本到音乐扩散模型的多样性退化”这个真实痛点上有清晰motivation，PADS的直觉（只扰动padding、不碰语义token）简洁有效，TAL的MoE-mVAE设计在表示层面为genre一致生成提供了结构支撑，两者组合在消融中表现一致。但整体创新层次不高——两个组件本质都是已有技术的迁移和改造（CADS→PADS，MoE-mVAE→TAL），缺乏新的方法论贡献。更令人担心的是，genre作为“全局语义”的唯一代理，严重窄化了T2M多样性问题的定义；实验上MelBench被处理成器乐子集，削弱了genre结论的外部效度；对比基线仅围绕CADS展开，与其他多样性增强方法的对比局限在Fig. 10的trade-off曲线上，未做深入调参和讨论。按顶会标准看，问题定义有价值、方案合理、实验基本完整，但贡献的深度和广度均未达到突破性水平。

### 📌 核心摘要

1. 论文解决文本到音乐（T2M）扩散模型的两个实际问题：(i) 推理时条件扰动（如CADS）在提升多样性的同时会破坏文本对齐和保真度；(ii) 标准VAE潜空间的局部邻居结构与文本语义（特别是genre）不对齐，导致采样时genre一致多样性不足。
2. 方法由两部分组成：PADS（Padding-Annealed Diffusion Sampling）将条件扰动精确限制在文本条件序列的padding位置，通过退火噪声调度实现受控探索；TAL（Text-Aware Latent space）利用MoE-mVAE构建文本感知潜空间，通过共享-私有多模态潜变量和Latent Alignment loss鼓励genre一致的局部邻居结构。
3. PADS的核心insight在于padding位置的语义显著性低（通过噪声扫描实验验证），仅扰动此处可保留早期去噪建立的全局语义线索（genre、BPM等），同时利用padding中残存的弱信号进行探索——从机理上解决了CADS“一扰就崩”的问题。TAL通过将文本共享潜变量与音频私有潜变量拼接，构建一个既保留声学细节又携带genre语义的采样空间。
4. 主要实验：在SongDescriber和MelBench上，TAL+PADS组合在匹配的CLAP-f≈0.32条件下，相比Audio+CADS基线提升整体Vendi多样性15.4%，genre内mRecall提升71.6%；人类评估中质量/多样性/对齐均优于或持平CADS基线；PADS在ACE-Step和MelodyFlow上展示了跨模型通用性。
5. 实际意义在于为T2M部署提供了推理时无需重新训练即可控制多样性的策略（PADS），以及一种从表示层面改善genre一致生成的方法（TAL），对创意音乐生成工具有参考价值。
6. 主要局限性：MoE-mVAE中共享潜变量可能未被解码器充分利用（依赖私有信息）；TAL训练需配对文本-音频数据且计算成本高（8×H100训练250小时）；对极长prompt（padding近乎为零）的多样性增益有限；genre多样性评估依赖被处理过的MelBench器乐子集，且genre之外的全局属性（情绪、速度）未验证TAL的泛化性；与其他多样性增强方法的对比不够深入。

### 🔗 开源详情

- 代码：论文未提供GitHub代码仓库链接，正文和附录中均未提及。项目页面仅提供生成的音频sample。
- 模型权重：论文未提及模型权重下载链接。
- 数据集：训练数据基于SAO元数据收集的Freesound（约467k）与FMA（约13k）音频，以及未公开的内部音乐集（约18k）。评估使用SongDescriber（CC BY-SA 4.0）和MelBench（CC BY-SA 4.0），具体获取方式见原论文，未提供直接下载链接。
- Demo：https://pads-tal.github.io/PADS-TAL
- 复现材料：附录A、B、C、E、F提供详细训练配置、采样参数、VAE设计及训练时长（MoE-mVAE约250h，DiT约320h，8×H100，batch size 4），但未公开训练代码或配置文件。
- 论文中引用的开源项目：
  - Stable Audio Tools：https://github.com/Stability-AI/stable-audio-tools
  - Stable Audio Metrics：https://github.com/Stability-AI/stable-audio-metrics
  - LAION CLAP：https://github.com/LAION-AI/CLAP
  - DPM-Solver++：https://github.com/LuChengTHU/dpm-solver
  - Ultimate Vocal Remover：https://github.com/Anjok07/ultimatevocalremovergui
  - librosa：https://github.com/librosa/librosa
  - madmom：https://github.com/CPJKU/madmom
  - essentia：https://github.com/MTG/essentia
  - Qwen-Audio：https://github.com/QwenLM/Qwen-Audio
  - PANNs：https://github.com/qiuqiangkong/audioset_tagging_cnn
  - SALMONN：https://github.com/bytedance/SALMONN
  - EnCodec（via Audiocraft）：https://github.com/facebookresearch/audiocraft
  - auraloss：https://github.com/csteinmetz1/auraloss

### 🏗️ 方法概述和架构

论文提出一个“统一pipeline”，包含两个互补技术：推理时的采样策略PADS和训练时的表示学习方法TAL。

整体流程分为两个阶段。第一阶段：MoE-mVAE训练。使用配对音频-文本数据训练一个MoE-mVAE，该VAE包含音频私有编码器\(q_{\phi}^{w_m}\)、文本私有编码器\(q_{\phi}^{w_p}\)、音频共享编码器\(q_{\phi}^{z_m}\)和文本共享编码器\(q_{\phi}^{z_p}\)。共享编码器捕获跨模态语义（如genre），私有编码器保留模态特有信息。训练后，仅保留音频私有编码器、文本共享编码器和音频解码器，用于构建TAL潜空间和扩散模型训练。第二阶段：DiT扩散模型训练。冻结MoE-mVAE的编码器/解码器，在TAL空间中训练DiT去噪模型（预测噪声残差）。TAL空间定义为音频私有潜变量\(w_m\)与文本共享潜变量\(z_p\)的拼接：\([w_m; z_p]\)。这使得扩散模型在一个既包含声学细节（来自\(w_m\)）又携带文本语义结构（来自\(z_p\)）的表示空间中学习生成。

PADS（Padding-Annealed Diffusion Sampling）：
- 功能：在推理时注入受控噪声以提升生成多样性，同时保护语义信息不被破坏。
- 实现：将文本条件嵌入序列\(c \in \mathbb{R}^{L \times D}\)划分为语义显著子空间\(c_{sal}\)（非padding token）和低显著子空间\(c_{low}\)（padding token）。仅在\(c_{low}\)上按退火调度注入高斯噪声：
  \[\hat{c} = \sqrt{\gamma(t)} \cdot c + s\sqrt{1-\gamma(t)} \cdot n \quad \text{作用于} c_{low}\]
  其中\(\gamma(t)\)为退火系数，在早期步为1（无噪声），随后线性衰减至0（全噪声）。为确保最小扰动预算，保留最后\(L_{min}\)个位置作为固定扰动槽。噪声注入通过mask \(M \in \{0,1\}^{L \times D}\)控制，\(M\)在padding位置为1，其余为0。
- 理论直觉：基于EDM的Langevin动力学视角，CADS式扰动通过denoiser对condition的雅可比产生额外随机项\(\eta^\top n\)诱导探索。PADS将\(\eta\)的定义限制为仅对\(c_{low}\)的梯度\(\nabla_{c_{low}} D_\theta\)，从而将随机探索约束在语义低显著维度，避免一阶语义漂移。更新形式为\(z_{t-1} \approx z_t + \rho_t \nabla_{z_t} \log p_t(z_t | c) + \eta_t^\top n\)，其中\(\eta_t = \frac{\rho_t \sigma_c}{\sigma(t)^2} \nabla_{c_{low}} D_\theta(z_t, t, c)\)。
- 与CADS的关系：PADS是CADS的mask控制泛化——当mask覆盖全序列时恢复CADS，当mask仅选择padding位置时即为PADS。

TAL（Text-Aware Latent Space）：
- 功能：构建一个潜空间，使其局部邻居结构与文本语义（尤其是genre）对齐，让扩散模型在genre一致的邻域内采样。
- 实现：采用MoE-mVAE架构，包含：
  - 私有编码器（\(q_{\phi}^{w_m}\)用于音频，\(q_{\phi}^{w_p}\)用于文本）：捕获模态特有细节
  - 共享编码器（\(q_{\phi}^{z_m}\)用于音频，\(q_{\phi}^{z_p}\)用于文本）：捕获跨模态语义
  - 音频解码器\(p_{\theta_m}\)和文本解码器\(p_{\theta_p}\)
- 关键设计：
  (1) 跨重构（Cross-reconstruction）：将音频私有潜变量\(w_m\)与文本共享潜变量\(z_p\)组合送入音频解码器\(p_{\theta_m}(w_m, z_p)\)，从而将文本语义“压印”到共享分支中；反之亦然（\(w_p\)与\(z_m\)组合重构文本）。这种设计强制共享分支捕获音频-文本对应的语义因素。
  (2) Latent Alignment (LA) Loss：\(\mathcal{L}_{LA} = \frac{1}{D} \|\mu_{z_m} - \mu_{z_p}\|_2^2\)，直接最小化音频共享均值和文本共享均值的L2距离，增强跨模态一致性。\(D=32\)为共享潜变量维度。
  (3) 维度设计：为避免解码器沿时间轴分区依赖（某些时间段依赖音频、另一些依赖文本），将文本和音频潜变量沿特征/通道轴拼接而非时间轴，使得融合行为更接近“通道级融合”。
- 训练目标：MoE-mVAE总损失为对抗损失、LA损失、多分辨率STFT重建损失、文本交叉熵损失和KL正则项的加权和。训练后，TAL空间定义为\([w_m; z_p]\)（私有音频潜变量 + 文本共享潜变量）。
- 后续扩散模型在TAL空间训练时，仅使用音频私有编码器（从音频提取\(w_m\)）和文本共享编码器（从文本提取\(z_p\)），然后拼接形成训练目标。

统一pipeline：DM在TAL空间中学习去噪，推理时从随机噪声开始，使用DPM-Solver++以100步、CFG \(\omega=7.0\)进行采样，同时在每一步通过PADS对文本条件的padding位置加噪。两者协同：TAL提供geometry层面的genre约束，PADS提供dynamics层面的受控扰动。

![图1](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/c0iisI5tJj-p22-e66f18818.jpg)

![图2](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/c0iisI5tJj-p22-v4c2d05de.jpg)


### 💡 核心创新点

1. Padding-Annealed Diffusion Sampling (PADS)：首次将条件扰动的范围从全序列精确限制到padding子空间。insight在于T2M模型的padding位置语义显著性低（通过噪声扫描实验Fig. 3验证，扰动从padding端向语义token扫描时CLAP-f保持稳定，一旦触及语义token急剧下降），仅扰动此处可保留早期去噪中建立的全局prompt线索，同时利用padding中残存的弱信号进行受控探索。从EDM的Langevin动力学视角，PADS将随机探索项\(\eta_t^\top n\)的\(\eta_t\)限制为仅对\(c_{low}\)的梯度，避免了CADS沿语义坐标的一阶漂移。
2. Text-Aware Latent (TAL) Space：提出训练MoE-mVAE构建文本感知的潜空间，并直接在该空间训练扩散模型。相比此前T2M中VAE仅服务于音频重建、DM在文本无关潜空间采样，TAL通过共享-私有分解、跨重构和LA loss，迫使潜空间的局部邻域结构对齐文本语义。t-SNE可视化（Fig. 5）和kNN precision@k（从0.067提升至0.243@k=5）证明了genre语义结构确实被编码到了潜空间中。Genre-wise聚类指标（CHI从2.71→20.40，DBI从25.26→21.54）进一步支持这一结论。
3. PADS与TAL的协同设计：在“genre-consistent diversity”这一难点上对齐两者优势——TAL提供表示层面的genre约束，PADS提供推理层面的受控扰动。消融实验（Table 2）证实两者组合在mRecall、Vendi、KL和FD四个指标上均取得最优，且提升不是简单叠加而是产生协同效应（mRecall从0.237→0.407，+71.6%）。
4. CLAP-fixed (CLAP-f) 评估协议：为解决长音频导致的CLAP随机裁剪方差大、无法捕捉曲式结构的问题，提出在固定位置（15%、50%、85%）提取CLAP嵌入。这是一个低成本、可复现的评估方式，对长音频生成评估有参考价值（论文未将其作为主贡献，但较为实用）。

### 📊 实验结果

论文主要在SongDescriber（无歌唱长音频，n=586）和MelBench（按15 genre平衡采样的300轨器乐）上评估，文本条件标准化为tag-list格式。

消融实验（Table 2：TAL与PADS组合）：在匹配CLAP-f≈0.32条件下——

| 潜空间 | 扰动策略 | MelBench mRecall↑ | SongDescriber Vendi↑ | SongDescriber KL_passt↓ | SongDescriber FD_openl3↓ |
|--------|----------|-------------------|----------------------|------------------------|--------------------------|
| Audio | CADS | 0.237 | 22.591 | 0.669 | 147.730 |
| Audio | PADS | 0.212 | 24.367 | 0.652 | 139.838 |
| TAL | CADS | 0.391 | 23.873 | 0.669 | 145.393 |
| TAL | PADS | 0.407 | 26.075 | 0.626 | 135.542 |

数据显示：(1) PADS相比CADS在Audio空间改善Vendi和保真度，但mRecall略有下降（0.237→0.212）；(2) TAL显著提升mRecall（0.237→0.391，+65%）；(3) TAL+PADS组合在四个指标上全面最优，验证协同效应。

PADS的跨模型泛化（Table 1）：在ACE-Step上，CADS使CLAP-f急剧下降0.044（0.2425→0.1981），PADS仅降0.011（0.2425→0.2318）而Vendi增幅相近（+6.7245 vs +6.7916）。在MelodyFlow上，CADS不增多样性（输出变噪），PADS稳定提升Vendi（+3.3653）。T2I领域的Stable Diffusion定性对比（Fig. 8）显示PADS维持了更强的prompt对齐。

Genre-wise分析（Fig. 9, Fig. 13）：TAL-DM+PADS在Metal、Rock、Blues等声响特征鲜明的genre上mRecall提升显著（Metal从~0.1提升至~0.6），但在Classic等子风格广谱的genre上TAL-DM本身略降，PADS加入后有所恢复。论文将其归因于Classic子模式多样，TAL强化文本对齐后可能导致mode bias（收敛到特定子模式），PADS的扰动可缓解。

人类评估（Table 3）：136人盲评。跨模型对比中，PADS-TAL在质量（3.79 vs SAO 3.81 vs SAO+CADS 3.36）、多样性（3.71 vs 3.41 vs 3.56）、对齐（3.78 vs 3.83 vs 2.87）上全面优于CADS，与SAO基线持平或接近。组内对比SAO+PADS vs SAO+CADS，PADS在质量和多样性上均显著更优。

多样性增强方法对比（Fig. 10）：在SAO上与SPARKE、c-VSG、Particle Guidance等方法对比对齐-多样性trade-off曲线，PADS-TAL在实用区（CLAP-f≥0.28）获得最优Vendi和最低IBS。

TAL空间genre结构分析（Fig. 5, Table 9, Table 10）：TAL空间中同genre样本更聚类，kNN precision@5从0.066（Audio）提升至0.243（TAL with LA），无LA时仅0.142。Silhouette Score相近（-0.0246 vs -0.0428），但CHI从2.71→20.40、DBI从25.26→21.54，说明全局cluster结构改善。Logistic Regression genre分类准确率从0.0764→0.1698，Random Forest从0.0778→0.1284。

生成示例：论文提供了多个生成音频的频谱图示例（Fig. 22-29），展示了模型在不同文本提示下的生成能力。

![图3](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/c0iisI5tJj-p28-v70bd9a7d.jpg)

![图4](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/c0iisI5tJj-p29-e88d30a67.jpg)


### 🔬 细节详述

- 训练数据：基于SAO开源元数据重新收集Freesound（467,172条）+ FMA（13,122条），额外加入17,739条in-house音乐数据以提升音乐占比。CC0/CC BY/CC Sampling+等开放许可数据占主导。所有数据用于从头训练MoE-mVAE和DiT，未使用预训练权重。
- 文本条件格式：对SAO基线采用zero-padded格式以适用PADS；对ACE-Step和MelodyFlow将masked attention转换为等效zero-padded格式。Table 5显示格式转换对CLAP-f影响较小。
- 损失函数（MoE-mVAE，Eq. 7）：
  \[\mathcal{L} = \alpha_{adv} \mathcal{L}_{adv} + \alpha_{LA} \mathcal{L}_{LA} + \alpha_{mrstft} \frac{\mathcal{L}_{mrstft}^m + \mathcal{L}_{mrstft}^p}{2} + \alpha_{ce} \frac{\mathcal{L}_{ce}^m + \mathcal{L}_{ce}^p}{2} + \sum_{u \in \{z_m, z_p, w_m, w_p\}} \mathcal{L}_{kl}(q_\phi^u)\]
  - \(\mathcal{L}_{adv}\)：源自EnCodec判别器的对抗损失（含特征匹配）
  - \(\mathcal{L}_{mrstft}\)：多分辨率STFT重建损失
  - \(\mathcal{L}_{ce}\)：文本重建交叉熵损失
  - \(\mathcal{L}_{LA}\)（Eq. 6）：音频与文本共享潜变量均值间MSE（\(D=32\)维）
  - KL项：对四个隐变量分别施加标准KL正则
- 训练策略：MoE-mVAE训练约250小时，DiT训练约320小时，均使用8×H100 GPU、batch size 4、DPM-Solver++采样。优化器、学习率、warmup等超参数未在正文详细说明，称在附录中有配置表。
- PADS关键超参数：扰动区间\(\tau_1 \in [0.6, 0.9]\)、\(\tau_2 \in [0.85, 1.0]\)，噪声标度\(s \in [0.01, 0.5]\)；采用线性退火调度器（polynomial \(d=1\)，与cosine、step调度器对比后选择，详见Table 4）；最小扰动预留位置\(L_{min}\)未在主文中明确给出数值。CADS对比时采用原论文piecewise linear调度和rescaling因子\(\psi=1.0\)。
- 推理配置：CFG \(\omega=7.0\)，采样步数100，DPM-Solver++。
- CLAP-f实现：在音频总时长的15%、50%、85%位置提取三个固定10秒片段的CLAP嵌入，计算融合得分。

### ⚖️ 评分理由

*   创新性 (1.0/2)：PADS将条件扰动精确限制到padding子空间，CADS到PADS的迁移思路简洁有效，但本质上是对已有采样策略的改造；TAL将MoE-mVAE用于构建扩散模型的文本感知潜空间，是实用的组合创新，但未引入新的学习范式或理论。两项工作均在“迁移改造”层面，未达到方法论突破级别。

*   技术严谨性 (1.1/1.5)：PADS的Langevin动力学推导自洽，将随机项约束至低显著子空间的论证合理。噪声扫描实验（Fig. 3）为padding低显著性假设提供了实证支撑。TAL的MoE-mVAE损失设计、推理时仅使用文本共享分支等细节考虑到了训练-测试gap。但“padding=低显著”的假设虽经实验验证，在理论上未严格证明；对于masked attention模型转换到zero-padded格式的量化分析仅给出CLAP-f变化，未深入讨论质性差异。

*   实验充分性 (0.9/1.5)：消融实验覆盖TAL/PADS四象限，匹配对齐水平对比方式合理。人类评估136人，可信度尚可。但对比多样性增强方法（SPARKE/Particle Guidance/c-VSG）仅在Fig. 10的trade-off曲线上展开，缺乏深入调参和性能讨论；genre分析依赖处理后的MelBench器乐子集，可能引入genre分布偏移；genre之外的全局属性（情绪、速度）未验证TAL泛化性。

*   清晰度 (0.8/1)：论文结构和写作整体流畅，核心图示（Fig. 1, Fig. 6）对理解pipeline有帮助。但关键训练超参（优化器、学习率、warmup）正文未说明，需依赖附录。MoE-mVAE维度设计的跨模态链接思想（附录C.3）较为重要但正文未提及。

*   影响力 (0.9/1.5)：T2M扩散模型的可控多样性是部署中的真问题，PADS作为模型无关的推理时策略有明确的实用价值，TAL针对genre这类全局属性提供了表示层方案。但当前对比基线和社区关注度尚不足以将PADS/TAL确立为标准baseline，且genre之外的目标属性未验证，限制了方法影响力的广度。

*   开源 (0.5/1.5)：论文提供项目页面链接（https://pads-tal.github.io/PADS-TAL）和生成音频sample，但未提供GitHub代码仓库或模型权重下载链接，核心代码/模型公开情况不明。仅确认demo级开放。

*   可复现性 (0.4/0.5)：附录提供CADS/PADS参数表、训练数据构建细节、MoE-mVAE架构维度和推理配置。主要扣分在于MoE-mVAE的具体学习率、优化器、warmup和早期停止策略等信息未完全公开，DiT训练超参也未全部明文给出。

*   工程/实践价值 (1.0/1.5)：PADS仅需修改推理时的conditioning加噪逻辑，代码侵入性极低，且从Table 6对max_length等工程参数较为鲁棒。TAL虽需额外训练MoE-mVAE（8×H100，250小时），但其设计明确为后续DM训练服务，pipeline完整。整体提供了从表示到推理的系统化方案，有较高工程参考价值，但未达到标准化工业pipeline的完备度。

### 🚨 局限与问题

论文明确承认的局限：
- MoE-mVAE中，当私有通道存在时，共享潜变量可能未被解码器充分利用，解码器可能过度依赖私有信息，导致共享分支中的语义耦合不够强。
- 对于超长prompt（token数几乎达到max_length），padding区域极小，PADS提供的扰动预算受限，影响多样性提升。虽通过预留\(L_{min}\)最小扰动位置缓解，但存在扰动语义token的风险。

审稿人发现的潜在问题：
- Contribution的定位过于狭窄：全文将“全局语义”几乎等同于genre，忽略了情绪、能量、乐器组合等其他重要的音乐全局属性。TAL的alignment loss本质上是鼓励genre聚类，这可能导致pipeline过度朝向genre分离优化。如果用户prompt侧重情绪而非genre（如“悲伤的钢琴”），TAL带来的genre-level alignment是否仍然有益、还是会产生负面bias，论文未讨论。
- MelBench处理的正当性：评估中使用的是去除人声的MelBench器乐子集，且prompt通过自动标签生成（Qwen-Audio、PANNs、SALMONN）构建。这不仅可能引入自动标注的噪声（genre标签准确性未量化），还意味着评估预测的是一个经过后处理的分布而非真实分布。genre coverage结论的外部效度存疑。
- 与CADS对比的公平性：CADS的原生策略包含rescaling和不同的噪声区间调度，虽已尽力复现，但不能完全排除CADS在T2M上未达到最佳工作点的可能性。评估中CADS在ACE-Step上CLAP-f急剧下降（-0.044）可能部分源于次优超参。
- 多样性的定义过窄：论文主要通过Vendi和mRecall衡量多样性，但这两种指标都偏向于衡量分布的覆盖度。T2M用户感知的“多样性”还包括旋律创新、和声丰富度、结构编排多样性等更高层次的质量维度，论文完全没有涉及这些。
- 计算成本与收益的平衡：MoE-mVAE（250h）+ DiT（320h）总计约570 GPU-hours（8×H100），但最终相对SAO+CADS的Vendi提升约15%。对于实际部署而言，这个成本-收益比是否值得，论文未讨论。一个合理的baseline是：直接在SAO的Audio空间上使用PADS（无需TAL训练），其Vendi（24.367）相比TAL+PADS（26.075）的绝对提升有限，但节省了全部MoE-mVAE训练成本。
- padding假设的边界：论文引用了一系列工作（Toker et al., 2025; Zhuang et al., 2024）指出padding位置可能携带summary-like语义信息。PADS在扰动这些位置时虽然通过退火调度控制扰动强度，但如果padding确实编码了prompt的某种压缩表示，那么扰动padding可能并非完全“安全”。论文的噪声扫描实验（Fig. 3）虽然支持padding低显著性，但该实验是在单一模型上做的、仅展示平均值，未展示per-prompt或per-genre的差异性。

### 📷 论文图片

![图5](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/c0iisI5tJj-p29-efc752e15.jpg)


---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/2026-07-04/)
