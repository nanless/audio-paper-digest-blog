---
title: "JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization"
date: 2026-05-03
draft: false
tags: [音频生成, 扩散模型, 多模态模型, 音视频, 基准测试]
categories: [iclr-2026]
description: "音频生成 | 8.0/10"
hiddenInHomeList: true
---

# 📄 JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization

#音频生成 #扩散模型 #多模态模型 #音视频 #基准测试

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 | #多模态模型 #音视频

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Kai Liu（浙江大学，新加坡国立大学）
- 通讯作者：Hao Fei（新加坡国立大学）
- 作者列表：
    - Kai Liu（浙江大学，新加坡国立大学）
    - Wei Li（中国科学技术大学）
    - Lai Chen（浙江大学）
    - Shengqiong Wu（新加坡国立大学）
    - Yanhao Zheng（浙江大学）
    - Jiayi Ji（新加坡国立大学）
    - Fan Zhou（浙江大学）
    - Jiebo Luo（罗切斯特大学）
    - Ziwei Liu（南洋理工大学）
    - Hao Fei（新加坡国立大学，通讯作者）
    - Tat-Seng Chua（新加坡国立大学）

### 💡 毒舌点评

亮点：这是一个非常扎实且完整的系统工作，不仅提出了针对性的模型架构（HiST-Sypo）来攻克“同步”这一核心痛点，还配套发布了更贴近真实世界复杂度的评测基准（JavisBench）和更鲁棒的评估指标（JavisScore），体现了从问题定义、方法设计到评测标准的全链条思考。
短板：计算开销是个绕不过去的问题，生成一个4秒的视频就需要H100跑半分钟（Tab. A1），离实时或高效创作还有距离；此外，模型性能的提升很大程度上依赖于一个更强的视频骨干（OpenSora），这在一定程度上稀释了其架构创新带来的绝对优势。

### 🔗 开源详情

- 代码：论文中提供了项目主页链接 https://javisverse.github.io/JavisDiT-page/ ，并承诺将公开代码。
- 模型权重：承诺将提供预训练模型权重。
- 数据集：提出了JavisBench基准数据集（包含10,140个样本），并承诺将公开。训练所用数据（MMTrail， TAVGBench）为现有公开数据集。
- Demo：论文中未提及在线演示。
- 复现材料：在论文正文和附录中提供了非常详细的模型架构配置（C.1）、三阶段训练策略细节（C.1， 表A2）、ST-Prior估计器实现（C.2）、数据构建流程（D.3）和评估指标实现（D.4），为复现奠定了坚实基础。
- 引用的开源项目：OpenSora（视频编码器-解码器， DiT初始化）， AudioLDM2（音频编码器-解码器， 音频预训练）， ImageBind（文本编码器， ST-Prior估计器， JavisScore计算）， T5（文本编码器）， Qwen系列模型（用于数据标注）， FunASR（语音过滤）， PySceneDetect， UniMatch， DBNet等（数据过滤）。

### 📌 核心摘要

1.  要解决什么问题：联合音频视频生成（JAVG）中，现有方法难以同时保证生成内容的高质量以及音频与视频之间精细的时空同步。
2.  方法核心是什么：提出JavisDiT模型。它采用基于扩散Transformer（DiT）的统一架构，并创新性地设计了分层时空同步先验估计器（HiST-Sypo Estimator）。该估计器从文本中提取全局粗粒度语义先验和细粒度的时空先验（指定事件发生的地点和时间），用于引导音视频在空间和时间维度上的对齐生成。
3.  与已有方法相比新在哪里：a) 架构上，整合了专门为音视频设计的ST-SelfAttn、Fine-Grained ST-CrossAttn和MM-BiCrossAttn模块。b) 核心创新是提出了HiST-Sypo机制，实现了从文本到细粒度时空条件的隐式映射，相比之前简单的参数共享或表征对齐更精细。c) 提出了首个专注于多事件同步评估的大规模、多样化基准数据集JavisBench（10,140个样本）和更鲁棒的同步性度量JavisScore。
4.  主要实验结果如何：
    - 在自建的JavisBench基准上（表1），JavisDiT在音视频质量和同步性指标上全面超越基线方法。例如，其JavisScore达到0.154，超过了最强级联方法FoleyCrafter（0.151）。
    - 在已有基准Landscape和AIST++上（表2），JavisDiT也达到了最优性能，例如在Landscape上FVD为94.2，优于MM-LDM（105.0）。
    - 消融实验（表3， 表4）验证了HiST-Sypo模块和ST-Prior注入方式的有效性。
    - 人类评估（图8）显示，在音频质量和音视频对齐方面，JavisDiT优于对比方法UniVerse-1。
5.  实际意义是什么：为电影制作、短视频创作等需要高质量同步音视频内容的应用提供了更强大的生成工具。新基准和指标为未来JAVG研究树立了更全面、更挑战性的评测标准。
6.  主要局限性是什么：a) 计算成本高，推理速度慢（附录表A1）。 b) 视频生成质量受所用骨干网络（OpenSora）性能制约，与最强视频生成模型（如Wan-2.1）仍有差距。c) JavisScore的准确性（论文称约75%）仍有提升空间。

### 🏗️ 模型架构

JavisDiT是一个基于扩散Transformer（DiT） 的联合音频视频生成模型，其整体架构如图2所示。

![JavisDiT整体架构图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/y7HV7KT3Bd-1.png)
图2：JavisDiT整体架构。包含视频生成分支、音频生成分支、HiST-Sypo估计器模块和MM-BiCrossAttn模块。

完整输入输出流程：
- 输入：文本提示符 `s`。
- 输出：同步的视频 `v` 和音频 `a`（表示为梅尔频谱图）。
- 过程：文本 `s` 首先通过T5编码器提取粗粒度语义嵌入。同时，`s` 被输入到HiST-Sypo估计器中，输出细粒度的空间先验 `ps` 和时间先验 `pt`。视频和音频潜变量在扩散过程中通过堆叠的DiT块进行去噪，每个DiT块内都利用这些先验来引导生成，并实现音视频模态间的交互。

主要组件与内部结构（结合图2详细说明）：
1.  Spatio-Temporal Self-Attention (ST-SelfAttn)：对视频或音频的潜变量进行模态内的信息聚合。它依次沿空间维度（视频的H×W，音频的M）和时间维度（视频的Tv，音频的Ta）执行多头自注意力（MHSA），以较低的计算复杂度（O(THW·(T+HW))）捕获时空依赖关系。
2.  Coarse-Grained Cross-Attention：将T5编码器输出的文本语义嵌入，通过标准的交叉注意力注入到视频和音频的处理流中，提供全局内容引导。
3.  Fine-Grained Spatio-Temporal Cross-Attention (ST-CrossAttn)：这是实现细粒度同步的关键。它利用HiST-Sypo估计器生成的 `ps`（空间先验）和 `pt`（时间先验），分别对视频/音频特征进行空间和时间维度上的交叉注意力引导。这告诉模型“在哪里”（空间）和“何时”（时间）产生声音或视觉事件。
4.  Multi-Modality Bidirectional Cross-Attention (MM-BiCrossAttn)：在通过先验对齐后，该模块允许视频和音频特征进行直接的双向信息交互，进一步增强跨模态融合。

数据流：在每个DiT块中，视频/音频潜变量依次经过 `ST-SelfAttn` -> `Coarse-Grained CrossAttn (文本)` -> `Fine-Grained ST-CrossAttn (空间/时间先验)` -> `MM-BiCrossAttn (模态交互)` -> `FFN`。这个过程重复N=28次。

关键设计选择与动机：采用级联的ST-SelfAttn是为了在建模时空关系时大幅降低计算成本。引入分层的先验（粗粒度语义+细粒度时空）是为了显式且精细地建模音视频同步，这是对之前仅用简单对齐或共享参数方法的改进。

### 💡 核心创新点

1.  分层时空同步先验估计器 (HiST-Sypo Estimator)：这是最核心的创新。它通过一个轻量级Transformer，从文本嵌入中隐式地学习并采样出空间先验 `ps`（编码“在哪里发声”）和时间先验 `pt`（编码“何时发声”）。这些先验作为条件，通过ST-CrossAttn注入生成过程，实现了比以往方法更精细的音视频对齐。它被训练为能够输出同一文本对应多种合理时空安排的分布参数（均值和方差）。
2.  针对音视频同步的DiT架构设计：在标准DiT块基础上，专门设计了 `Fine-Grained ST-CrossAttn` 和 `MM-BiCrossAttn` 模块。前者利用HiST-Sypo的输出进行条件控制，后者促进模态间直接交互，共同构成了一个为JAVG任务优化的骨干网络。
3.  JavisBench基准与JavisScore指标：指出并解决了现有评估基准（如AIST++、Landscape）场景过于简单、无法评估复杂同步性的痛点。提出了包含5大维度19个类别的JavisBench（10,140样本），并设计了基于滑动窗口和ImageBind的JavisScore指标，更鲁棒地评估细粒度同步。
4.  对比学习训练策略：为训练HiST-Sypo，设计了专门的对比学习框架，利用真实同步对作为正样本，并通过多种数据增强策略（视频遮挡/平移、音频增减源/变速等，见附录图A4，A5）构造异步负样本，使先验估计器能学习到稳健的对齐知识。

### 🔬 细节详述

- 训练数据：
    - 阶段一（音频预训练）：788K 音频-文本对，来源于AudioSet， AudioCaps， VGGSound等多个公开数据集。
    - 阶段二&三（ST-Prior和JAVG训练）：611K 视频-音频-文本三元组，主要来源于MMTrail和TAVGBench数据集，并经过筛选（移除大量人声）。
- 损失函数：
    - 音频预训练和JAVG训练：使用Rectified Flow 作为去噪调度器。
    - ST-Prior估计器训练：采用组合的对比学习损失（公式A1， A2），包括Token-level hinge loss， 辅助判别损失， VA-embedding差异损失和L2正则化损失。
- 训练策略：
    - 三阶段训练：
        1.  音频预训练：仅训练音频分支（参数从视频分支初始化），55 epochs， 学习率1e-4。
        2.  ST-Prior训练：冻结音视频分支，训练HiST-Sypo估计器，1 epoch， 学习率1e-5。
        3.  JAVG训练：冻结音视频分支的ST-SelfAttn和Coarse-Grained CrossAttn， 仅训练ST-CrossAttn和MM-BiCrossAttn模块， 2 epochs， 学习率1e-4。
    - 所有阶段batch size为动态， warmup 1000步。
- 关键超参数：
    - 模型总参数：3.14B。
    - DiT块数：N=28。
    - 注意力头数：16， 隐藏维度：1152， FFN中间维度：4*1152。
    - 空间/时间先验token数：Ns=Nt=32。
    - 推理步数：30步， Classifier-free guidance scale：7.0。
- 训练硬件：音频预训练64 GPU days (H100)， ST-Prior训练8 GPU days， JAVG训练256 GPU days。
- 推理细节：生成4秒， 240p， 24fps的视频和16kHz音频。详细延迟分析见附录表A1。
- 正则化：未特别提及Dropout等， EMA decay用于第一和第三阶段训练（0.99）。

### 📊 实验结果

主要基准测试结果：

表1：在JavisBench基准上的主要结果（4秒， 240P）。
| Method | FVD↓ | KVD↓ | FAD↓ | TV-IB↑ | TA-IB↑ | CLIP↑ | CLAP↑ | AV-IB↑ | CAVP↑ | AVHScore↑ | JavisScore ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| T2A+A2V级联方法 | | | | | | | | | | | |
| TempoTkn | 539.8 | 7.2 | - | 0.084 | - | 0.205 | - | 0.137 | 0.787 | 0.122 | 0.103 |
| T2V+V2A级联方法 | | | | | | | | | | | |
| FoleyCftr | - | - | 9.1 | - | 0.149 | - | 0.383 | 0.193 | 0.800 | 0.186 | 0.151 |
| T2AV联合生成 | | | | | | | | | | | |
| MM-Diff | 2311.9 | 12.2 | 27.5 | 0.080 | 0.014 | 0.181 | 0.079 | 0.119 | 0.783 | 0.109 | 0.070 |
| UniVerse-1 | 194.2 | 0.5 | 8.7 | 0.272 | 0.111 | 0.309 | 0.245 | 0.104 | 0.793 | 0.098 | 0.077 |
| JavisDiT (Ours) | 204.1 | 1.4 | 7.2 | 0.263 | 0.143 | 0.302 | 0.391 | 0.197 | 0.801 | 0.179 | 0.154 |
注：JavisDiT在FAD（音频质量）、CLAP（音频-文本一致性）、AV-IB/CAVP/AVHScore/JavisScore（音视频一致性与同步）等多项关键指标上取得最优。在视频质量（FVD/KVD）和视频-文本一致性（CLIP）上也非常接近或达到最优。

表2：在已有基准数据集上的结果。
| Method | Landscape FVD↓ | AIST++ FVD↓ | AIST++ FAD↓ |
| :--- | :--- | :--- | :--- |
| MM-Diff | 332.1 | 219.6 | 12.3 |
| AV-DiT | 172.7 | 68.8 | 10.2 |
| MM-LDM | 105.0 | 105.0 | 10.2 |
| JavisDiT (Ours) | 94.2 | 86.7 | 9.6 |
注：在传统闭集基准上，JavisDiT也全面超越了此前的最先进方法。

消融实验结果：

表3：模型设计消融实验。
| STDiT | HiST-Sypo | BiCA | Quality↓ | Consist↑ | Sync↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| × | × | × | 9.371 | 1.140 | 0.118 |
| √ | × | × | 7.293 | 1.155 | 0.130 |
| √ | √ | × | 6.127 | 1.191 | 0.150 |
| √ | × | √ | 6.581 | 1.157 | 0.133 |
| √ | √ | √ | 6.012 | 1.201 | 0.153 |
结论：STDiT架构、HiST-Sypo模块和BiCrossAttn模块的组合带来了最佳性能。HiST-Sypo对提升同步性（Sync）贡献最大。

表4：时空先验token数量与注入方式消融。
| Ns | Nt | Injection | Quality↓ | Consist↑ | Sync↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | 0 | - | 6.581 | 1.157 | 0.133 |
| 32 | 32 | CrossAttn | 6.012 | 1.201 | 0.153 |
| 32 | 32 | Addition | 6.267 | 1.183 | 0.144 |
| 32 | 32 | Modulate | 6.190 | 1.191 | 0.145 |
结论：使用32个时空先验token并通过交叉注意力（CrossAttn）注入，效果最佳。

![时空先验的可视化](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/y7HV7KT3Bd-6.png)
图7：时空先验的交叉注意力图可视化。空间先验（上）成功聚焦于发声物体（气泡），时间先验（下）在整个时间线上分布均匀，对应持续的声音事件。这直观展示了先验如何引导同步生成。

其他重要实验：
- 变长生成（表5）：生成10秒视频时，模型在质量和同步性上依然保持高性能，证明了其适用性。
- 人类评估（图8）：在音频质量和音视频对齐上，JavisDiT明显优于UniVerse-1；视频质量略逊，主要因骨干网络差异。

![人类评估结果](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/y7HV7KT3Bd-7.png)
图8：人类评估结果。在音频质量和音视频对齐上，JavisDiT获得显著更高的偏好率。

复杂场景分析（图5）：论文指出，所有现有模型（包括JavisDiT）在面对多声源（Multiple Subject）和同时发生事件（Simultaneous Events）时，同步性能（JavisScore）会显著下降，这揭示了当前JAVG技术仍面临的挑战。

![不同场景下的同步性分析](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/y7HV7KT3Bd-4.png)
图5：在JavisBench不同类别上的音视频同步性分析。模型在处理多声源和同时事件时性能下降。

### ⚖️ 评分理由

- 学术质量：6.0/7：系统设计完整，创新点（HiST-Sypo）有针对性且有效，实验对比充分（在新旧基准上），消融研究详实。扣分在于，核心架构是基于现有DiT和注意力机制的组合创新，理论突破性有限；同时，模型的优越性部分建立在强大的OpenSora视频骨干之上。
- 选题价值：1.5/2：联合音视频生成是前沿热点，解决同步性问题是关键瓶颈。论文直面该问题，并提供了配套的评测体系，对推动该领域发展有明确价值。与音频读者的相关性在于其生成模型和对声音事件建模的思路。
- 开源与复现加成：0.5/1：论文承诺开源全部代码、模型和数据集，并在附录中提供了极其详尽的实施细节、训练策略和超参数，复现友好度预期很高。给予正面加成。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
