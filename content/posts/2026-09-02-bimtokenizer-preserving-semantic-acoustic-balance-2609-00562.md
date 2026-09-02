---
title: "BiMTokenizer: Preserving Semantic-Acoustic Balance in Low-Bitrate Speech Tokenization via Bidirectional State-Space Modeling"
date: 2026-09-02
draft: false
tags: [语音编码, 端到端, 语音合成, 语音质量评估, 知识蒸馏]
categories: [论文速递]
description: "语音编码 | 8.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.00562"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "42ec225c7d12bca0cbefa43c3cf4f113e6ecccbfa5a41625d1448b3d041c7ece"
paper_digest_api_reader_plan_sha256: "aa8ede875badeda82aedaa203f7425c37b95e0d6cacb37609e879612e9f873e5"
---

# 📄 单塔为何还能赢双塔：BiMTokenizer 用双向状态与固定格点重做 1.1 kbps 的语义-声学平衡

> 英文题目：*[BiMTokenizer: Preserving Semantic-Acoustic Balance in Low-Bitrate Speech Tokenization via Bidirectional State-Space Modeling](https://arxiv.org/abs/2609.00562)*
>
> 一句话：**在 1.1 kbps 低码率下语义与声学互相挤压的矛盾中，BiMTokenizer 用双向 Mamba 时序建模与固定 Leech 格点量化重做单塔瓶颈，在 LibriSpeech 上以 PESQ-NB 3.56 与 WER 2.44% 超越同码率双塔基线，代价是离线双向依赖与 196560 大词表带来的自回归预测负担。**

> 标签：#语音编码 | #端到端 | #语音合成 | #语音质量评估 | #知识蒸馏
>
> 评分：**8.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Xin Zhang：Wuhan University of Technology, Wuhan, China
- Lin Li：Wuhan University of Technology, Wuhan, China
- Chuanbo Liu：Wuhan University of Technology, Wuhan, China
- Jianquan Liu：NEC Laboratories Asia Pacific, Singapore；NEC Corporation, Japan
- Kong Aik Lee：The Hong Kong Polytechnic University, Hong Kong

## 💬 毒舌点评

亮点在于用双向状态空间模型（Bidirectional State-Space Model, Bi-SSM）与固定 Leech 格量化把单塔做到 1.1 kbps 下反超双塔，效率指标也实打实降了 60% 以上 MACs。短板是所有 SOTA 声明几乎只在 16 kHz LibriSpeech 960 小时闭环内自洽，跨语种与噪声泛化仅点到为止，且 196560 词表对自回归建模的代价被轻描淡写。

## 📌 核心摘要

低比特率语音编解码器（Speech Codec）在 1 kbps 量级面临语义保真与声学重建的直接竞争，近期主流通过双塔解耦缓解冲突但参数与计算开销显著上升。BiMTokenizer 重回单塔范式，核心是用双向 Mamba 骨干提供全上下文时序建模，并以残差球面 Leech 量化（Residual Spherical Leech Quantization, RSLQ）用固定高分离度格点替代可学习码本。与单塔基线相比，该组合在不增加塔数的前提下同时提升时序表达与量化稳定性。在 LibriSpeech test-clean 上，BiMTokenizer-Whisper 在 1.1 kbps、12.5 Hz、5 级量化下取得同档最低词错误率与最优 PESQ-NB 3.56 等重建指标，并在 ARCH 语音理解任务上以平均 45.91% 居编解码器首位。结果表明单塔通过骨干与瓶颈的精细化设计仍可实现语义-声学平衡，为面向语音大模型（Speech Large Language Model, Speech LLM）的低码率离散化提供了更轻量的路径。主要边界在于离线双向依赖限制流式部署，且超大固定码本增大了自回归预测难度。

## 🔗 开源与复现资源

- 代码：https://github.com/ZhangXinWhut/BiMTokenizer
- 模型权重：https://github.com/ZhangXinWhut/BiMTokenizer，论文中说明代码和模型权重均在该 GitHub 仓库提供，未提及独立的 HuggingFace 或 ModelScope 链接
- 数据集：训练使用 LibriSpeech 训练集 960 小时 16 kHz 数据，评测涉及 LibriSpeech test-other、Seed-TTS-Eval 含中文和英文子集，LLM 语音生成训练使用 Emilia 数据集约 96.7K 小时含 46.8K 小时英文和 49.9K 小时中文以及 VoxBox 数据集，论文中未提供数据集直接下载链接
- Demo：论文中未提及
- 复现材料：论文附录 C 提供详细重建损失、对抗损失和特征匹配损失公式，附录 A 提供 8 层双向 Mamba-1 编码器与解码器结构及上下采样细节，训练配置为单阶段训练 1000000 步，使用 2 张 NVIDIA H100 GPU，每张 GPU 批量大小为 64，有效批量大小为 128，优化器为 AdamW 参数为 beta1 为 0.8 beta2 为 0.9 权重衰减为 0.01，余弦退火调度在 30000 步预热后从 1×10-4 衰减至 0，模型总参数量为 253M，量化器帧率为 12.5 Hz 码本每层 196560 条目共 5 层总码率为 1100 bps，TTS 变体为每层 2048 条目共 8 层
- 论文中引用的开源项目：BiMTokenizer https://github.com/ZhangXinWhut/BiMTokenizer，HuBERT large ls960 ft https://huggingface.co/facebook/hubert-large-ls960-ft，UniSpeech speaker verification https://github.com/microsoft/UniSpeech/tree/main/downstreams/speaker_verification，另提及 Whisper-small、SenseVoice-small、Qwen3-0.6B、Qwen3-TTS、Spark-TTS、EnCodec、DAC、SoundStream、BigCodec、XCodec2.0、XY-Tokenizer、SimWhisper-Codec、Mamba、ExtBiMamba、SwiGLU、Residual Spherical Leech Quantization、Lookup-Free Quantization、Binary Spherical Quantization、Finite Scalar Quantization、MPD、MS-STFTD，未提供除上述 3 个链接外的其他 URL

## 🧭 深度解读

把语音交给大语言模型，第一步是把它变成离散 token。理想的 token 既要让模型听懂在说什么，也要让解码器能把声音原样还回来。但在 1 kbps 左右的极低码率下，这两个目标直接打架：码率预算只够每秒 12.5 帧、每帧几十比特，语义需要抽象与不变性，声学需要保留说话人、韵律与谐波细节。

一个直观的思想实验是把 1 秒语音压到约 138 字节。传统做法要么让量化器学一个小码本，结果高频谐波被抹平；要么让语义蒸馏占满瓶颈，结果音色与自然度下滑。近期主流因此走向双塔，用两个编码器分别管语义与声学，再融合量化，效果上去但参数与计算也跟着翻倍。

BiMTokenizer 要回答的正是这个背景下的选择题：单塔是否真的走到头了，还是它的两个核心部件——负责时间建模的骨干与负责离散化的瓶颈——还没有被认真重做。论文把战场收缩到单塔内部，用更强的时序归纳偏置与更稳定的几何量化来重新分配同一份比特预算。

### 从单塔到双塔，路线图在哪里分叉
早期的语义感知编解码器大多留在单塔。SpeechTokenizer 把 HuBERT 特征蒸馏到 RVQ 的第一层，Mimi 用 split-RVQ 把一本码本留给语义、其余补声学。它们推理简单，但在 1.1 kbps 这种激进压缩下，语义-声学平衡仍然有限。

分叉出现在 X-Codec、DualCodec、XY-Tokenizer 等双塔与 X 形架构。思路很直接：既然单流竞争激烈，就用独立的预训练语义编码器与声学编码器分开建模，再在量化前融合。代价是架构冗余，DualCodec 到 664M、XY-Tokenizer 到 520M，编码成本与优化复杂度都明显上升。

**单塔架构 × 双塔架构：** 单塔架构指用同一编码器-量化器-解码器流水线同时承载语义与声学，推理简单但在低码率下两目标直接竞争；双塔架构指用独立的语义编码器与声学编码器分别建模再融合量化，缓解竞争但参数与计算开销翻倍。论文选择重回单塔并非否定双塔的解耦价值，而是判断单塔的瓶颈与骨干仍未被充分挖掘，通过把双向时序能力与固定高分离度量化做进共享路径，证明单塔也能在 1.1 kbps 实现可比的语义-声学平衡。

论文把自己定位在分叉点的另一侧：不增加塔数，而是升级共享的骨干与瓶颈。时序侧用双向状态空间模型替代注意力，量化侧用固定 Leech 格替代可学习码本，试图在单塔内完成过去需要两塔才做得到的分工。

### 论文把什么当作可验证的命题
命题可以压缩为一句可证伪的话：在约 1.1 kbps、12.5 Hz、单 token 流的约束下，单塔通过骨干与瓶颈的精细化设计，能够在重建保真与语义保留上同时达到或超过同码率双塔。

为此需要同时回答 3 个可测量问题。第一，重建是否更真：用 SIM、STOI、PESQ-NB/WB、UTMOS、ViSQOL 与 WER 衡量说话人相似度、可懂度、感知质量与自然度。第二，语义是否可用：把量化表示池化后做线性探针，在 ARCH 的 RAVDESS、EMOVO、SLURP、AudioMNIST 上测迁移。

边界也提前划清。评测主战场是 16 kHz LibriSpeech 960 小时训练、test-clean/test-other 评测的闭环，跨语种与噪声是零样本泛化而非同分布训练。骨干为离线双向，天然不支持流式；196560 大词表的高分离度与自回归预测难度是一体两面。

### 单塔流水线如何在一张图里跑通
先在脑中搭一条主干。输入是 16 kHz 波形，25 ms 窗、10 ms 跳提 80 维梅尔频谱，100 Hz。两层 1 维卷积把频率与时间压缩到 768 维、50 Hz，随后 8 个双向 Mamba 块做全上下文时序建模。

下采样器把相邻 4 帧堆叠、经权重归一化投影与空洞 1 / 3 / 9 的残差卷积压到 128 维、12.5 Hz，这就是量化前的潜序列。在进入总览图前，需要明确训练期与推理期的分叉。

推理期只有黄色主路径：潜序列进 5 级 RSLQ 量化，上采样回 768 维、50 Hz，再经 8 个双向 Mamba 块与两层转置卷积重建梅尔，最后由 12 层 Vocos 声码器合成波形。训练期额外打开上方蓝色语义分支与下方判别器分支，分别提供语义对齐与对抗监督，推理时一并移除。

为什么此处要看总览图：它把容易混淆的 3 类箭头分开了。实线是推理必经的数据流，黄色虚线是仅训练的对抗路径，蓝色虚线是仅训练的语义路径。重点看 RSLQ 盒子内部的残差链与上方的 Linear 投影如何把瓶颈与教师连起来。

> **看图路径：** 1. 沿下方黄色 Acoustic Codec 主路径从左到右追踪波形到梅尔到 Mamba 到 RSLQ 到 Vocos；2. 观察上方蓝色 Semantic Supervision 在训练期如何通过虚线与下方瓶颈及重建波形连接；3. 分辨实线推理路径与虚线训练期路径，定位冻结语义编码器与判别器的位置

![原论文 Figure 2：Overview of BiMTokenizer.](/audio-paper-digest-blog/images/papers/2609.00562/figure-2-d7421f0c7478d5ea.png)

*论文图 2。原论文 Figure 2:：“Overview of BiMTokenizer. The encoder and decoder use stacked bidirectional Mamba blocks, while the bottleneck is replaced by RSLQ.”。*

图中下方黄色 Acoustic Codec 从左到右依次是 Audio wave X、Mel-spectrogram、2×Conv+Q、Mamba Layer×N、Down、Residual Spherical Leech Quantization、Up、Mamba Layer×N、2×DeConv+σ、Mel-spectrogram、Vocos 到重建波形 X̂。上方蓝色 Semantic Supervision 用两个带雪花标记的冻结 Semantic Encoder 分别处理原始与重建梅尔，经 Reconstruction Alignment 与 Cosine Similarity 与下方 Linear 投影相连。底部虚线框放大了单个 Mamba 块的 RMSNorm→ExtBiMamba→残差→RMSNorm→SwiGLU→残差结构，右下图例区分 Training Only 虚线与 Inference Only 实线。这张图支持了单塔在训练期借教师、在推理期自治的设计，也限制了流式部署，因为双向块依赖未来帧。

### 骨干：为什么是双向 Mamba 而不是注意力
语音是沿时间连续演化的信号，重建需要同时保住长程谐波结构与局部瞬态。选择性状态空间模型用结构化递推提供线性复杂度的时序归纳偏置，相比基于内容匹配的自注意力，更贴合这种局部相关、连续演化的特性。论文进一步指出 Mamba 在重建类任务上更有效。

每个块的计算遵循预归一化残差布局：

\[h' = h + \mathrm{ExtBiMamba}(\mathrm{RMSNorm}(h))\]

\[h_{\mathrm{out}} = h' + \mathrm{SwiGLU}(\mathrm{RMSNorm}(h'))\]

其中 h 是块输入序列，ExtBiMamba 把输入及其时序翻转副本交给两套独立投影的 Mamba 分支并行处理再相加融合，SwiGLU 提供逐帧非线性以配合语义对齐所需的表达能力。状态维度 16、卷积宽度 4、扩展因子 2，编码器与解码器各堆 8 块。

**双向状态空间模型 × ExtBiMamba：** 双向状态空间模型是利用结构化递推对时间序列做线性复杂度建模的骨干，它擅长捕捉语音这种连续演化的长程依赖，但单向只能看到过去；ExtBiMamba 则是论文采用的外融合双向实现，把输入及其时序翻转副本交给两套独立投影的 Mamba 分支并行处理再逐元素相加，让每 1 帧同时拿到过去与未来上下文。二者搭配的原因是编解码重建需要全上下文的谐波与瞬态对齐，单向递推会丢失右侧协同发音信息，而外融合比内融合更简单快速，组合后在不引入注意力 2 次复杂度的前提下补上了离线编解码最需要的双向时序接地。

### 瓶颈：用几何先验换稳定的离散空间
量化是语义-声学竞争最直接的战场。可学习 RVQ 在单流低码率下易坍缩，需要额外损失与熵正则才能维持利用率。RSLQ 把码本固定为 24 维单位超球面上的 Leech 格第一壳，196560 个最小向量，单 token 约 17.58 bit。

利用 Leech 格在 24 维最密堆积的均匀性与分离度，天然避免坍缩。单级量化先投影到球面、按最大内积选码字、再投影回特征空间，梯度用直通估计器回传：

\[\tilde{f}=W_{\mathrm{down}}f/\|W_{\mathrm{down}}f\|_2,\quad k=\arg\max_j\langle\tilde{f},c_j\rangle,\quad e=\gamma W_{\mathrm{up}}c_k\]

其中 f 是输入特征，c_j 是固定码字，W_down 与 W_up 是可学习投影，γ 是可学习尺度。残差设计让第 0 级并行量化并接受语义监督，其余 4 级对残差级联量化，\[\hat{u}=e_0+\sum_{i=1}^{K-1}e_i,\ K=5\] 在 12.5 Hz 下合计约 5×12.5×17.58≈1.10 kbps。

**残差球面 Leech 量化 × 固定码本：** 残差球面 Leech 量化是将 24 维单位超球面上 Leech 格第一壳的 196560 个最小向量当作离散空间的量化方式，单 token 约 17.58 bit；固定码本指这些格点在训练中不更新，只有投影与尺度可学习。二者绑定是为了解决可学习 RVQ 在单流低码率下易坍缩、利用率不均的问题，Leech 格作为 24 维最密堆积提供了均匀且高分离度的几何结构，残差级联则让第 0 级专做语义、后 4 级补声学残差，组合后既避免了码本坍缩与额外熵正则，又用几何先验换来了大容量离散瓶颈。

**Vocos 声码器 × 梅尔频谱：** 梅尔频谱是对波形做 25 ms 窗、10 ms 跳提取的 80 维感知压缩表示，是编解码器实际编码与解码的中间界面；Vocos 声码器是把重建的梅尔频谱再合成 16 kHz 波形的 12 层神经声码器。二者搭配让编解码器不必直接在采样点上做高频建模，而是先在更紧凑、更符合听觉的梅尔域完成时序与量化，再由 Vocos 负责相位与波形细节，论文中编码器前端两层卷积先把 100 Hz 梅尔降至 50 Hz，解码后再经 Vocos 还原波形。

### 训练：两端语义对齐与对抗重建如何共存
训练目标把感知重建、对抗真实性与语义保留放在同一优化器里。重建侧用多尺度梅尔 L1，FFT 尺寸 2^5 到 2^11：

\[\mathcal{L}_{\mathrm{rec}}=\sum_{k=5}^{11}\|M_k(x)-M_k(\hat{x})\|_1\]

对抗侧用多周期判别器与多尺度 STFT 判别器的最小二乘 GAN 损失与特征匹配，语义侧用两项损失。第一项是瓶颈层的余弦蒸馏：

\[\mathcal{L}_{\mathrm{sem}}=1-\frac{1}{T}\sum_{t=1}^{T}\frac{\tilde{s}_t^{\top}s_t}{\|\tilde{s}_t\|_2\|s_t\|_2}\]

第二项是重建波形经冻结教师提特征后的 L1 对齐：

\[\mathcal{L}_{\mathrm{align}}=\frac{1}{T}\sum_{t=1}^{T}\|\hat{s}_t-s_t\|_1\]

总生成器损失为 \[\mathcal{L}_G=\lambda_{\mathrm{rec}}\mathcal{L}_{\mathrm{rec}}+\lambda_{\mathrm{adv}}\mathcal{L}_{\mathrm{adv}}+\lambda_{\mathrm{feat}}\mathcal{L}_{\mathrm{feat}}+\lambda_{\mathrm{sem}}\mathcal{L}_{\mathrm{sem}}+\lambda_{\mathrm{align}}\mathcal{L}_{\mathrm{align}}\]，权重取 15 / 1 / 1 / 15 / 1，因码本固定而无需码本与承诺损失。

**语义蒸馏损失 × 重建对齐损失：** 语义蒸馏损失是在量化瓶颈层把第 0 级 RSLQ 输出经投影后与冻结教师特征做帧级余弦对齐，它负责让离散 token 本身带上语言内容；重建对齐损失则是把解码器重建出的波形再送回冻结 ASR 教师提特征，与原波形特征做 L1 对齐，它负责让解码器输出而非仅瓶颈保持语义。二者搭配是因为只约束瓶颈会让解码器在对抗与重建压力下漂移语义，而只约束重建又难以稳定离散空间，组合后形成瓶颈与波形两端的双重语义锚定，论文中该组合在 SenseVoice 配置下把 WER 从 2.58% 进一步压到 2.53%。

**多尺度梅尔重建损失 × 对抗损失：** 多尺度梅尔重建损失是在 FFT 尺寸 2^5 到 2^11 的多个尺度上对梅尔频谱做 L1 约束，它负责感知相关的频谱结构保真，是重建的主驱动；对抗损失由多周期判别器与多尺度 STFT 判别器以最小二乘 GAN 形式提供，它负责补充重建损失平滑掉的细节与自然度。二者分工在于前者稳定收敛与谐波结构，后者提升听感与瞬态真实性，论文以 λ_rec=15 与 λ_adv=1 的权重组合，并辅以特征匹配稳定对抗训练。

教师实现上，Whisper-small 提供 50 Hz 特征，论文用线性上采样把 12.5 Hz 语义层对齐到 50 Hz；SenseVoice-small 本身 16.67 Hz，离线插值到 12.5 Hz 后再蒸馏。教师特征全量离线预提取，训练 1,000,000 步、有效批量 128、AdamW β1=0.8 β2=0.9、权重衰减 0.01、余弦退火经 30k warmup 从 1e-4 衰至 0，双 H100 训练。

### 在什么数据与协议上验证
编解码器训练只用 LibriSpeech 960 小时、16 kHz，随机裁 2 秒片段，单阶段端到端训练。评测分两类：重建在 LibriSpeech test-clean 为主、test-other 与 Seed-TTS-Eval 为辅，指标覆盖 STOI、WER、PESQ-NB/WB、UTMOS、ViSQOL、SIM。

WER 由 HuBERT-large 微调 ASR 计算，SIM 由 UniSpeech 说话人验证模型计算；语义在 ARCH 的语音域四任务上做时序平均池化后线性探针，含 RAVDESS 与 EMOVO 情感、SLURP 意图、AudioMNIST 数字。为让表格可比，论文固定了对照条件。

重建对比限定 1.1 kbps 附近，含重建导向的 EnCodec、DAC、BigCodec、Mimi，单塔语义感知的 SpeechTokenizer、SimWhisper-Codec，以及双塔的 XCodec、XCodec2.0、DualCodec、XY-Tokenizer。消融在无语义监督、固定 1.1 kbps 下只替换骨干或量化器，教师消融则只调 λ_sem 与 λ_align。

根据论文正文与图中报告值整理，数据集与协议如下表所示，表中数值均为论文明确报告的配置。

| 数据集/用途 | 规模与采样 | 划分/采样方式 | 帧率与码率 | 指标与方向 | 基线与对照 |
|---|---|---|---|---|---|
| LibriSpeech 训练 | 960 小时 16 kHz | 全量训练集随机裁 2 秒 | 50 Hz→12.5 Hz 5 级×17.58 bit≈1.10 kbps | SIM↑ STOI↑ PESQ↑ UTMOS↑ WER↓ | EnCodec/DAC/BigCodec/Mimi |
| LibriSpeech test-clean | 干净朗读 | 官方测试集 | 同上 | WER 由 hubert-large-ls960-ft | 重点对比 1.1 kbps 附近 |
| LibriSpeech test-other | 噪声更多 | 官方测试集 | 同上真值 UTMOS 3.50 | 同上 | 同上 |
| Seed-TTS-Eval | 英文与中文子集 | 零样本跨分布 | 同上 | PESQ↑ SIM↑ STOI↑ UTMOS↑ | BigCodec/XCodec2.0/XY-Tokenizer |
| ARCH 语音域 | RAVDESS/EMOVO/SLURP/AM | 平均池化+ 线性探针 | 62.5 token/s 1.1 kbps | 分类准确率↑ | SSL 与 ASR 教师作上界 |
| TTS 变体训练 | Emilia 96.7K 小时 VoxBox | Qwen3-0.6B 400k 步 | 2048×8 级 12.5 Hz×8×11 bit=1.1 kbps | WER↓ SIM↑ UTMOS↑ | Llasa/Spark-TTS |

该表净收益在于把训练分布、帧率码率与评测指标对齐到同一行，避免跨采样率误比；失败项是中文与噪声均为零样本而非同分布训练，Seed-TTS 中文 SIM 已暴露差距；不能由此推出多语种同分布训练或真实信道下的排序不变。

### 主结果：单塔在干净与跨分布上是否真的更强
要回答单塔能否在同码率下匹敌双塔，需要把重建与语义放在同一张尺子上看。论文在 LibriSpeech test-clean 上给出最直接的对比，条件统一为 1.1 kbps 附近、16 kHz，指标方向明确：SIM、STOI、PESQ、UTMOS 越高越好，WER 越低越好。

为什么此处要看散点图：表格给出精确数值，散点图则把可懂度与自然度的权衡与参数代价同时可视化。重点看横轴 WER 与纵轴 UTMOS 构成的左上角最优区，以及气泡大小代表的参数量，判断论文是否用更小的模型挤进了更好的角落。

> **看图路径：** 1. 先看横轴 WER 越左越好、纵轴 UTMOS 越高越好，确认左上角为最优区；2. 对比紫色 Ours 两点与橙色 XY-Tokenizer、蓝色 X-Codec2 的气泡大小与位置；3. 注意橙色虚线 GT-UTMOS 基准，观察哪些模型已超越真值自然度评分

![原论文 Figure 1：Codec comparison on speech reconstruction: WER (intelligibility, \\downarrow) vs.](/audio-paper-digest-blog/images/papers/2609.00562/figure-1-b96ea26959b95191.png)

*论文图 1。原论文 Figure 1:：“Codec comparison on speech reconstruction: WER (intelligibility, \downarrow) vs.”。*

图中横轴为 WER(%) 越低越好，纵轴为 UTMOS 越高越好，橙色虚线标出 GT-UTMOS 约 4.09 的真值基准。两个紫色气泡 Ours(Whisper-small) 与 Ours(SenseVoice-small) 在最左上方，BPS 均为 1100、参数均为 253M，明显位于左上角最优区；蓝色 X-Codec2 气泡虽 UTMOS 约 4.13 但参数达 822M 且 WER 约 2.6%，橙色 XY-Tokenizer 气泡参数 520M 但 UTMOS 仅约 4.02、WER 约 2.46%，灰色 BigCodec 在最右侧 WER 约 2.92%。该图支持了单塔以不到双塔一半参数实现更优可懂度与自然度平衡的论点，但也限制了结论的外推，因为所有点均在 LibriSpeech 干净集上测量。

为什么此处要看频谱案例：数值提升需要可听可视的对应。放大区聚焦窄带谐波与局部过渡，检验重建是真正保留结构还是仅在指标上占优。

> **看图路径：** 1. 先看上排五列整体频谱，再聚焦下排蓝色框放大的谐波条带；2. 对比 Mimi 与 SpeechTokenizer 在放大区的模糊与断裂；3. 观察 BiMTokenizer 最右侧放大区条带的锐度与连续性是否更接近 Ground Truth

![原论文 Figure 3：Mel-spectrogram reconstructions.](/audio-paper-digest-blog/images/papers/2609.00562/figure-3-0a773c6ed65518b8.png)

*论文图 3。原论文 Figure 3:：“Mel-spectrogram reconstructions. The zoomed regions show that BiMTokenizer preserves local harmonic and spectral structure more faithfully than prior low-bitrate codecs.”。*

图中上排为五列梅尔频谱全景，下排为蓝色框选区域的放大对比。从左到右依次为 Ground Truth、Mimi、SpeechTokenizer、XY-Tokenizer、BiMTokenizer。可见 Mimi 与 SpeechTokenizer 在放大区出现谐波模糊与能量平滑，XY-Tokenizer 保留更多结构但过渡仍有抹平，BiMTokenizer 最右侧的条带锐度与波纹连续性最接近真值。该视觉证据与 PESQ 与 UTMOS 的数值增益一致，但它仅为单一样本的定性展示，不能替代统计显著性。

根据论文正文报告值整理的主结果如下表所示。

| 比较条件 | 指标 | 明确报告值 | 这项数字支持什么 | 不能推出什么 |
|---|---|---|---|---|
| test-clean 1.1 kbps 重建 | PESQ-NB↑ | Whisper 3.56 vs BigCodec 3.27 vs DualCodec 3.25 | 感知质量超越同码率双塔 | 不能推出更高采样率同样领先 |
| test-clean 1.1 kbps 重建 | WER↓ | Whisper 2.44% vs DualCodec 2.46% | 可懂度达同档最低 | 领先仅 0.02 个百分点未报告显著性 |
| test-clean 1.1 kbps 重建 | SIM↑ UTMOS↑ | Whisper 0.87 / 4.21 | 说话人保持与自然度同步最优 | UTMOS 为神经估计需结合 PESQ 判断 |
| ARCH 语义探针 | 平均准确率↑ | SenseVoice 45.91% vs XY 44.70% | 量化表示语义迁移居首 | 仍低于 SSL 60.38% 与 ASR 77.60% |
| 跨分布 Seed-TTS | PESQ-NB/SIM | 英文 3.13 / 0.84 中文 3.30 / 0.85 vs XY 中文 0.88 | 声学规律可跨语种迁移 | 中文 SIM 落后 0.03 泛化有限 |
| 噪声 test-other | WER/PESQ-NB | Whisper 6.10% / 3.38 | 噪声下仍最优 | 真值已退化不宜与干净集直接对比 |

该表最公平的净收益是 PESQ-NB 0.29 的感知质量领先与 ARCH 平均 1.21 个点的语义领先，二者方向一致；失败项是中文 SIM 0.85 落后于含中文训练的 XY-Tokenizer 0.88，以及 WER 微弱优势缺乏显著性检验；不能由此推出在真实信道或多语种同分布数据上仍保持相同排序。

### 拆开看：骨干、量化器与教师权重各自贡献多少
为剥离骨干与量化器的独立贡献，论文在无教师、固定 1.1 kbps 下做受控替换。只把 BiMamba 换成双向自注意力，WER 从 2.55% 升至 4.15%，PESQ-NB 从 3.56 跌至 3.28；只把 RSLQ 换成 GroupFSQ 或 RVQ，SIM、UTMOS、PESQ 与 WER 均一致劣化。

这说明双向状态建模与固定格点分离度是互补的，前者主导可懂度与谱保真，后者主导量化稳定性。教师权重则呈现清晰的语义-声学权衡。SenseVoice 在 λ_sem=15、λ_align=1 时取得平衡，SLURP 18.48%、AM 98.02%、WER 2.53%。

把 λ_sem 提到 20，SLURP 升至 19.90% 但 SIM 从 0.85 降至 0.82、PESQ-NB 从 3.45 降至 3.42、AM 回落至 97.46%。Whisper 侧同样，λ_sem 从 15 提到 20，SLURP 与 AM 微升但 UTMOS 从 4.21 降至 4.18、PESQ-NB 从 3.56 降至 3.52、WER 从 2.44% 恶化至 2.52%。

为什么此处要看码本行为图：它把量化器的分工从数字变为过程。重点看语义层与 4 个声学残差层在使用率与熵上的分离，以及随训练步数的收敛形态，判断固定码本是否真的被有效利用而非空转。

> **看图路径：** 1. 对比左图码本使用率与右图归一化熵中蓝色语义层与四条声学层的分离；2. 观察横轴训练步数 0 到 1000k 的收敛形态与最终圆点数值；3. 注意语义层稳定在低位而声学层趋近 0.8 / 0.95 的分工证据

![原论文 Figure 4：Validation codebook behavior of the five RSLQ levels.](/audio-paper-digest-blog/images/papers/2609.00562/figure-4-2f94721fac9833aa.png)

*论文图 4。原论文 Figure 4:：“Validation codebook behavior of the five RSLQ levels.”。*

图中左为码本使用率、右为归一化熵，横轴为训练步数 0 到 1000k。蓝色语义层始终在低位，收敛至使用率约 0.27、熵约 0.81；橙、绿、紫、红 4 条声学层快速爬升并稳定在高位，使用率约 0.75 到 0.81、熵约 0.95 以上。该分离支持了论文的分工设计：语义层受监督而集中于语言相关区域，声学残差层保持高熵广覆盖以承载说话人与韵律细节，且全程无坍缩迹象。

根据论文 Table 7 报告值整理的消融如下表所示。

| 消融条件 | 控制变量 | 重建 SIM/UTMOS | 重建 PESQ-NB/WB 与 WER | 语义 SLURP/AM | 解释 |
|---|---|---|---|---|---|
| 无教师 1.1 kbps | BiMamba+RSLQ | 0.88 / 4.12 | 3.56 / 2.99 WER 2.55% | 7.94% / 78.26% | 完整单塔重建最强 |
| 无教师 1.1 kbps | Bi-Self-Attn+RSLQ | 0.85 / 3.90 | 3.28 / 2.77 WER 4.15% | 7.62% / 75.18% | 注意力导致退化 |
| 无教师 1.1 kbps | BiMamba+GroupFSQ | 0.84 / 4.03 | 3.42 / 2.84 WER 2.69% | 7.75% / 75.31% | 固定 Leech 优于 FSQ |
| 无教师 1.1 kbps | BiMamba+RVQ | 0.84 / 4.00 | 3.42 / 2.75 WER 2.75% | 7.81% / 76.26% | 固定 Leech 优于 RVQ |
| SenseVoice 15 / 1 | 双重对齐 | 0.85 / 4.18 | 3.45 / 2.85 WER 2.53% | 18.48% / 98.02% | 最终平衡点 |
| SenseVoice 20 / 1 | 过强语义 | 0.82 / 4.15 | 3.42 / 2.78 WER 2.55% | 19.90% / 97.46% | 语义升但声学回落 |
| Whisper 15 / 1 | 最优声学 | 0.87 / 4.21 | 3.56 / 3.03 WER 2.44% | 12.51% / 86.20% | 50 Hz 稠密监督利于重建 |
| Whisper 20 / 1 | 过强语义 | 0.87 / 4.18 | 3.52 / 2.99 WER 2.52% | 13.68% / 87.11% | 同样出现过监督代价 |

该表净收益是骨干与量化器各自独立且可叠加，BiMamba 贡献约 1.6 个点 WER 与 0.28 PESQ，RSLQ 在同码率下全面优于 FSQ 与 RVQ；失败项是 λ_sem=20 的过监督在两个教师上均导致声学回落；不能由此推出该权衡在其他语种或更高码率下仍以 15 为最优。

### 边界在哪里：什么还没被证明
最显眼的边界是分布。主结论几乎完全在 16 kHz LibriSpeech 960 小时的朗读英语闭环内自洽，test-other 与 Seed-TTS-Eval 虽显示跨噪声与跨语种的零样本能力，但中文 SIM 已落后于含中文训练的基线，且未做多语种同分布训练与真实信道评估。

第二是统计严谨性。test-clean 上 WER 领先仅 0.02 个百分点，论文未报告置信区间、显著性检验与多随机种子方差，PESQ 与 UTMOS 的 0.2 到 0.3 提升更可信，但可懂度的微弱优势不宜过度解读。

第三是离线假设与词表代价。双向 Mamba 依赖未来帧，仅支持离线切分，流式需要因果或分块变体；196560 固定词表提供高分离度，但把自回归预测空间撑大，论文在 TTS 变体中被迫子采样至每级 2048、共 8 级，容量与可学习性的权衡未被量化。

第四是效率测量的覆盖度。1 秒短音频、单 H100、批量 1 的 MACs 与实时因子显示总 MACs 14.82G 相对 DualCodec 40.98G 降 63.8%、相对 XY-Tokenizer 82.02G 降 81.9%，但长音频内存与吞吐曲线仅以趋势图呈现，未给出具体数值表，异构 CNN-Mamba 与全 Mamba 同构化的差距也留作未来工作。

| 效率与成本项 | 测量条件 | 明确报告值 | 支持什么 | 限制或未测量 |
|---|---|---|---|---|
| 总 MACs 1 秒音频 | 单 H100 批量 1 | 14.82G vs DualCodec 40.98G vs XY 82.02G | 单塔计算开销显著更低 | 未覆盖长音频内存与吞吐数值 |
| 实时因子 RTF | 同上 | 0.007 vs DualCodec 0.019 vs XY 0.007 | 解码速度与 XY 持平远快于 DualCodec | 批量与硬件单一 |
| 参数量 | 全模型 | 253M vs 664M vs 520M | 不到双塔一半 | 未拆分编码器与声码器占比 |
| 骨干对比 | 5-320 秒趋势图 | BiMamba 随长度增长更平缓 | 状态空间线性复杂度优势 | 未给出每长度具体 MACs 表 |
| TTS 词表 | 自回归训练 | 196560→2048 子采样 8 级 | 大词表需妥协以利 LLM 训练 | 长尾学习代价未量化 |

该表净收益是编码侧 4.79G MACs 特别低，利于大规模语料离线 token 化；失败项是 TTS 侧为适配 LLM 不得不放弃大词表优势；不能由此推出在流式或长音频批量推理下仍保持相同加速比。

### 复现需要什么：代码、权重与缺失项
可复现性上，论文披露度较高。架构给出 8 块双向 Mamba-1、隐藏 768、状态 16、卷积宽度 4、扩展 2、SwiGLU 中间 1536，下采样后潜维度 128、帧率 12.5 Hz，5 级 RSLQ 每级 196560，Vocos 12 层等细节。

训练给出单阶段 1,000,000 步、批量、优化器、调度与双 H100 硬件；损失权重与判别器类型亦完整。开源侧，代码与模型权重均在同一 GitHub 仓库提供，未提及独立 HuggingFace 链接与数据集直接下载，Demo 未提及。

评测实现给出 HuBERT-large-ls960-ft 与 UniSpeech 说话人验证的链接，ARCH 协议与多尺度梅尔、对抗、特征匹配的公式在附录中展开。缺失项也应点明。训练时长未报告，长音频效率未给数值表，WER 的统计显著性与多种子方差未提供。

根据论文附录整理的复现清单如下表所示。

| 复现项 | 论文提供 | 链接或位置 | 完整度 | 复现建议 |
|---|---|---|---|---|
| 代码与权重 | GitHub 仓库 | https://github.com/ZhangXinWhut/BiMTokenizer | 核心产物开放 | 克隆后按附录 A/C 配置环境 |
| 架构细节 | 8 块 BiMamba 潜 128 维 12.5 Hz 5 级 RSLQ 196560 | 正文与附录 A | 大部分充分 | 核对隐藏 768 状态 16 |
| 训练配置 | 1,000,000 步批量 128 AdamW 0.8 / 0.9 衰减 0.01 | 附录 C | 充分但缺时长 | 记录 H100 小时数 |
| 评测实现 | WER 基于 hubert-large-ls960-ft | 附录 D 链接 | 充分 | 固定评测脚本版本 |
| 数据集 | LibriSpeech 960h Seed-TTS-Eval | 正文提及未给下载链接 | 需自行获取 | 注意 16 kHz 一致性 |
| 统计 | 未报告置信区间与多种子方差 | 无 | 缺失 | 补充 3 次运行检验 |

该表净收益是架构与训练超参足够支撑独立复现，权重与代码同仓降低门槛；失败项是训练时长与长音频效率数值缺失，显著性未报告；不能由此判断在不同随机种子或硬件下结果方差大小。

### 收束：单塔路线是否被重新打开
回到开头的问题，低码率下的语义-声学竞争是否只能靠双塔解耦。BiMTokenizer 的回答是把竞争放回单塔内部重分配：用双向状态空间模型补上全上下文时序建模，用固定 Leech 格点量化提供高分离度离散空间，再以瓶颈与波形两端的语义对齐稳住语言内容。

结果是在 LibriSpeech 干净集上以更少参数实现更优的 PESQ 与可懂度，在 ARCH 上取得编解码器内最优的平均语义迁移，并在噪声与跨语种零样本上保持多数指标领先。这并不意味着双塔已无必要。

中文说话人相似度的落后、离线双向的限制、大词表的自回归负担，都说明单塔的胜利是有条件的。更准确的判断是，单塔路线远未穷尽，当骨干与瓶颈被认真重做时，它能在 1.1 kbps 提供一条更轻量、更易部署的路径，为面向语音大模型的低码率离散化提供可复用的选择。

<details>
<summary>📎 论文与评分元数据</summary>

标签：#语音编码 | #端到端 | #语音合成 | #语音质量评估 | #知识蒸馏

**8.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

🔥 **8.3/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #语音编码 | #端到端 | #语音合成 | #语音质量评估 | [arxiv](https://arxiv.org/abs/2609.00562)

</details>

## ⚖️ 评分依据与证据（展开查看）

<details>
<summary>逐维得分、全文证据与扣分边界</summary>

*   创新性 (1.5/2)：将双向 Mamba 外部融合 ExtBiMamba 与 24 维 Leech 格第一壳 196560 固定码本的 RSLQ 组合为单塔瓶颈，配合 5 级残差分工实现 12.5 Hz 下约 1.10 kbps 的语义 1 层加声学 4 层解耦，无需双塔即可兼顾时序建模与量化分离度，属于有证据支撑的系统级组合创新。

*   技术严谨性 (1.2/1.5)：训练目标由多尺度梅尔 L1 重建、MPD 与 MS-STFTD 最小二乘 GAN 及特征匹配、帧级余弦蒸馏与重建对齐加权构成，权重 15/1/1/15/1 明确，因码本固定免除码本与承诺损失，推导与假设一致且无算法逻辑漏洞。

*   实验充分性 (1.1/1.5)：在 1.1 kbps 附近对比 BigCodec、Mimi、DualCodec、XY-Tokenizer 等代表性基线并做 BiMamba 对双向自注意力与 RSLQ 对 GroupFSQ/RVQ 的受控消融，补充 test-other 与 Seed-TTS-Eval 跨分布验证及 ARCH 语义探针，但 WER 领先仅 0.02 个百分点且未报告置信区间与显著性检验，中文 SIM 0.85 落后含中文训练基线 0.03。

*   清晰度 (0.8/1)：流程按波形到梅尔到编码器到 RSLQ 到解码器到 Vocos 顺序展开，块内公式 h' 与 h_out 及量化映射与损失定义完整，表格区分重建与消融块，但部分超参分散于附录，跨表指标口径需对照附录 D 才能完全对齐。

*   影响力 (1.0/1.5)：面向 Speech LLM 低码率离散化提供 253M 单塔路径，在 LibriSpeech test-clean 取得 PESQ-NB 3.56 与 WER 2.44% 的同档最优并在 ARCH 平均 45.91% 居首，为语音编码读者提供可复用的轻量范式，但核心验证限于 16 kHz 英文朗读，跨语种与真实信道外推仍需验证。

*   开源 (1.2/1.5)：核心产物代码与模型权重均在 https://github.com/ZhangXinWhut/BiMTokenizer 开放，未提供独立 HuggingFace 链接与数据集直接下载，Demo 未提及，属于核心产物开放但文档与分发完整度不全的 1.2 档。

*   可复现性 (0.3/0.5)：披露 8 块双向 Mamba-1 隐藏维度 768 状态维度 16 卷积宽度 4 扩展因子 2、潜维度 128 帧率 12.5 Hz、5 级 RSLQ 每级 196560、Vocos 12 层等架构细节及单阶段 1000000 步有效批量 128 AdamW beta1 0.8 beta2 0.9 权重衰减 0.01 余弦退火 warmup 30000 步等训练配置与 2 张 H100 硬件，但训练时长未报告，属大部分充分有少量缺失。

*   工程/实践价值 (1.2/1.5)：给出 1 秒音频总 MACs 14.82G 相对 DualCodec 40.98G 降低 63.8% 与 XY-Tokenizer 82.02G 降低 81.9%、总实时因子 0.007 与参数量 253M 不到 664M 一半的实测对比，并提供端到端编码器量化器解码器加 Vocos 的可复用流水线，具备可核对的工程价值。

</details>

---

[← 返回 2026-09-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-02/)
