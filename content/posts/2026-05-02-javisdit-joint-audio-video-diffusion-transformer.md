---
title: "JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization"
date: 2026-05-02
draft: false
tags: [音频生成, 多模态模型, 扩散模型, Transformer, 基准测试]
categories: [iclr-2026]
description: "音频生成 | 8.0/10"
hiddenInHomeList: true
---

# 📄 JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization

#音频生成 #多模态模型 #扩散模型 #Transformer #基准测试

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 #Transformer | #多模态模型 #扩散模型

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Kai Liu (Zhejiang University, National University of Singapore) (论文中Kai Liu标注为*，表示同等贡献，且为列出的第一个作者)
- 通讯作者：Hao Fei (National University of Singapore) (论文中标注为†)
- 作者列表：
    - Kai Liu (Zhejiang University, National University of Singapore)
    - Wei Li (University of Science and Technology of China)
    - Lai Chen (Zhejiang University)
    - Shengqiong Wu (National University of Singapore)
    - Yanhao Zheng (Zhejiang University)
    - Jiayi Ji (National University of Singapore)
    - Fan Zhou (Zhejiang University)
    - Jiebo Luo (University of Rochester)
    - Ziwei Liu (Nanyang Technological University)
    - Hao Fei (National University of Singapore)
    - Tat-Seng Chua (National University of Singapore)

### 💡 毒舌点评

这篇论文的亮点在于其“分层时空先验估计器”设计得相当巧妙，直指当前联合音视频生成“只知大概、不晓细节”的同步痛点，并为此精心打造了一个更具挑战性的真实世界基准数据集JavisBench。然而，短板也很明显：一个追求实时应用的生成模型，其推理效率在附录表格中暴露无遗（生成4秒视频需30秒），在“生成速度与质量”的权衡上显然更偏向了后者。

### 🔗 开源详情

-   代码：论文中声明将开源，项目主页链接为 `https://javisverse.github.io/JavisDiT-page/`（见摘要），但论文中未直接给出GitHub仓库链接。
-   模型权重：论文中声明将提供模型权重（见摘要和A.3节），但未提供具体下载链接。
-   数据集：JavisBench基准数据集将被公开（见摘要和A.3节），但获取方式需通过项目主页。
-   Demo：论文中未提及在线演示。
-   复现材料：论文提供了极其详细的复现材料，包括：模型架构图（图2, 3）、训练数据来源与规模（788K音频文本对，611K三元组）、三阶段训练策略的具体配置（学习率、epoch、batch size等，见Tab. A2和Section C）、ST-Prior估计器的损失函数细节（公式A1， A2）、负样本构建策略（Section C.2.4， 图A4， A5）、以及在H100上的训练耗时统计（Tab. A2）。
-   引用的开源项目：论文明确使用了以下开源模型/工具：
    -   骨干网络初始化：OpenSora (Zheng et al., 2024) 用于视频分支。
    -   文本编码器：T5 (Raffel et al., 2020)， ImageBind (Girdhar et al., 2023)。
    -   音频编解码器：AudioLDM2 (Liu et al., 2024b)。
    -   视频编解码器：OpenSora的VAE。
    -   训练工具：FunASR用于语音过滤， Qwen系列模型（Yang et al., 2024a; Wang et al., 2024c; Chu et al., 2024）用于数据标注。
    -   过滤工具：PySceneDetect， UniMatch， DBNet。
-   论文中未提及开源计划：论文明确表示将开源，但未提供具体的开源时间表和各组件的独立链接。

### 📌 核心摘要

1.  要解决什么问题：现有联合音频视频生成（JAVG）方法在保证高质量生成的同时，难以实现音视频之间细粒度的时空同步（即“什么声音对应画面中哪个物体的哪个动作”以及“动作何时开始结束”），且现有评估基准和指标过于简单，无法全面评估模型在复杂真实场景下的表现。
2.  方法核心是什么：提出JavisDiT，一个基于扩散Transformer（DiT）的统一框架。核心是设计了分层时空同步先验估计器（HiST-Sypo Estimator），它从文本提示中提取全局语义先验（粗粒度）和细粒度的空间-时间先验（表示事件发生的地点和时机）。这些先验作为条件注入到DiT的跨注意力模块中，引导音视频生成在空间和时间上对齐。
3.  与已有方法相比新在哪里：a) 模型层面：超越了简单的参数共享或单向适配器，通过显式估计并注入“时空先验”实现了更精细的同步引导；b) 基准层面：构建了JavisBench，一个包含10，140个样本、5大维度19个类别、强调多事件同步的复杂场景新基准；c) 评估层面：提出了JavisScore，一个基于滑动窗口和帧级相似度的、对复杂场景更鲁棒的同步性评估指标。
4.  主要实验结果如何：在自建的JavisBench上，JavisDiT在同步性指标（JavisScore）上显著优于各类基线方法（见下表）。在传统的Landscape和AIST++基准上，其视频质量（FVD）和音频质量（FAD）也达到了SOTA水平（例如在Landscape上FVD为94.2，优于MM-LDM的105.0）。
    | 方法类型 | 方法 | FVD↓ | KVD↓ | FAD↓ | JavisScore ↑ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | T2A+A2V | TempoTkn | 539.8 | 7.2 | - | 0.103 |
    | T2V+V2A | FoleyCftr | - | - | 9.1 | 0.151 |
    | T2AV | UniVerse-1 | 194.2 | 0.5 | 8.7 | 0.077 |
    | T2AV | JavisDiT (Ours) | 204.1 | 1.4 | 7.2 | 0.154 |
    表1：在JavisBench上的主要结果（摘自论文Tab. 1），加粗为最佳结果。
5.  实际意义是什么：为音视频内容自动生成提供了更高质量、更同步的解决方案，并推动了该领域评估标准的完善，有助于加速其在电影制作、短视频创作等实际应用中的落地。
6.  主要局限性是什么：a) 效率问题：生成速度较慢，生成一个4秒240P视频需约30秒（附录Tab. A1）；b) 评估范围：主要评估集中在4秒、240P的设置，对更长、更高分辨率场景的泛化能力有待验证；c) 同步精度：如论文Fig. 5所示，在处理同时发生多个声音事件的复杂场景时，同步性仍有挑战。

### 🏗️ 模型架构

JavisDiT是一个基于DiT的端到端联合音视频生成框架，整体架构如图2所示。
![JavisDiT整体架构](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-02/y7HV7KT3Bd-1.jpg)
图2：JavisDiT整体架构（左）与核心模块结构（右）。

整体流程：给定文本提示s，模型同时生成视频v和音频a的梅尔频谱图。整体由视频生成分支、音频生成分支和HiST-Sypo估计器三部分组成。两个生成分支结构对称，共享设计。

核心组件：
1.  DiT块：每个分支由N=28个DiT块堆叠而成。每个块内部包含以下顺序处理的模块（详见图2右侧）：
    *   时空自注意力 (ST-SelfAttn)：用于模态内聚合。视频和音频的潜在表示先沿空间维度（视频为H×W，音频为梅尔频率维度M）应用多头自注意力（MHSA），再沿时间维度（视频为帧数Tv，音频为时间帧数Ta）应用MHSA，高效实现细粒度时空建模。
    *   粗粒度交叉注意力 (Coarse-Grained CrossAttn)：使用T5编码器的文本嵌入作为条件，通过标准的交叉注意力将全局语义信息注入。
    *   细粒度时空交叉注意力 (Fine-Grained ST-CrossAttn)：这是关键创新点。接收来自HiST-Sypo估计器输出的时空先验token（空间先验ps和时间先验pt），分别沿空间和时间维度对视频/音频潜在表示进行条件调制，引导同步。
    *   多模态双向交叉注意力 (MM-BiCrossAttn)：实现视频和音频分支间的直接交互。通过计算视频查询(Qv)与音频键(Ka)的注意力矩阵A，得到音频到视频的注意力；再用其转置与视频值(Vv)相乘，得到视频到音频的注意力，增强跨模态信息融合。
    *   前馈网络 (FFN)：标准的Transformer FFN层。
    所有注意力模块使用16个头，隐藏维度为1152，FFN中间维度为隐藏维度的4倍。

2.  HiST-Sypo估计器：其结构如图3所示。
    ![HiST-Sypo估计器结构](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-02/y7HV7KT3Bd-2.jpg)
    图3：时空先验估计器框架。

    它以文本提示s为输入，使用ImageBind的文本编码器提取77维隐藏状态。通过一个4层Transformer编码器-解码器，使用Ns=32个可学习空间token和Nt=32个可学习时间token去查询这些文本特征，输出时空先验ps和pt的高斯分布的均值和方差。通过重参数化技巧采样得到最终的先验token，以适应同一文本可能对应不同同步方案（如事件发生在不同位置/时间）的灵活性。训练时采用对比学习目标（详见02节）。

关键设计选择动机：采用级联的时空注意力而非全注意力，是为了在保持细粒度建模能力的同时显著降低计算复杂度（将O((THW)^2)降至O(THW·(T+HW))）。引入显式的时空先验估计器，是为了超越简单的全局对齐，实现更精细的、基于事件时空特性的同步引导。

### 💡 核心创新点

1.  分层时空同步先验估计器 (HiST-Sypo Estimator)：这是最核心的创新。不同于以往方法仅进行粗粒度的语义或表征对齐，该估计器从文本中显式地估计出两层先验：全局语义先验（由T5提供，描述“什么事件”）和细粒度时空先验（由可学习token表示，描述“事件在哪里、何时发生”）。这使得同步引导可以精确到物体和时间段。通过对比学习训练，使先验能可靠地区分同步与异步的音视频对。
2.  细粒度时空对齐引导机制：将HiST-Sypo估计器产生的时空先验，通过专门设计的细粒度时空交叉注意力 (ST-CrossAttn) 模块注入到DiT的各个块中。空间先验引导模型关注视频中正确区域和音频中正确频带，时间先验引导模型对齐事件的起止时间，实现了从“全局模糊对齐”到“局部精确对齐”的跨越。
3.  面向复杂场景的新基准JavisBench与评估指标JavisScore：构建了首个专注于评估多事件同步能力的大规模基准，包含10,140个样本，覆盖5大维度19个类别，超过50%为复杂场景。提出的JavisScore指标通过滑动窗口和选择最不同步帧进行评估，对多事件场景更鲁棒，解决了旧指标（如AV-Align）的局限性。

### 🔬 细节详述

-   训练数据：
    -   音频预训练（阶段1）：788K音频-文本对，来自AudioSet, AudioCaps, VGGSound等多个公开音频数据集。
    -   ST-Prior估计器训练（阶段2）：611K文本-视频-音频三元组，来自MMTrail和TAVGBench数据集（经筛选），并构建了大量负样本（异步对）用于对比学习。
    -   JAVG训练（阶段3）：同阶段2使用的611K三元组数据。
-   损失函数：
    -   生成目标：采用Rectified Flow作为去噪调度器（见公式1）。
    -   ST-Prior估计器训练目标：采用对比学习损失（公式A1），具体由四部分组成（公式A2）：token级铰链损失（Ltoken）、辅助判别损失（Ldisc）、VA嵌入差异损失（Lvad）和L2正则化损失（Lreg），共同作用使先验token与同步嵌入对齐，与异步嵌入远离。
-   训练策略：
    -   三阶段训练：a) 音频预训练（55 epochs，lr=1e-4）；b) ST-Prior估计器训练（1 epoch，lr=1e-5）；c) JAVG训练（2 epochs，lr=1e-4）。阶段3冻结视频/音频分支的自注意力块和ST-Prior估计器，仅训练ST-CrossAttn和Bi-CrossAttn模块。
    -   视频分支初始化自OpenSora并冻结；音频分支使用视频分支权重初始化。
    -   负样本构造：为ST-Prior估计器的对比学习设计了多种增强策略，包括视频空间/时间增强（随机掩码、添加轨迹、时移、暂停）、音频空间/时间增强（添加/移除声源、调节音量/速度、插入静音/重复段）。
-   关键超参数：模型总参数量约3.14B。DiT块数N=28。时空先验token数Ns=Nt=32。注意力头数16，隐藏维度1152。
-   训练硬件：未在正文中明确说明。从附录Tab. A2可知，三个阶段在H100 GPU上分别耗时64、8、256 GPU天。
-   推理细节：采样步数为30步，分类器引导尺度为7.0。视频和音频潜在表示在每个步骤被并发采样。生成4秒240P视频的延迟约为30秒（附录Tab. A1）。
-   正则化：使用EMA（衰减0.99）进行稳定训练。

### 📊 实验结果

论文在三个数据集上进行了评估：自建的JavisBench，以及已有的Landscape和AIST++。

1. 在JavisBench上的主要结果（复杂场景）
论文Table 1展示了JavisDiT与多种基线方法的对比。
![JavisBench主要结果](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-02/y7HV7KT3Bd-4.jpg)
图5：不同方法在JavisBench各子类别上的同步性表现。

| 方法 | 类型 | FVD↓ | KVD↓ | FAD↓ | TA-IB↑ | CLIP↑ | CLAP↑ | AV-IB↑ | AVHScore↑ | JavisScore↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TempoTkn | T2A+A2V | 539.8 | 7.2 | - | 0.084 | - | - | 0.137 | 0.787 | 0.103 |
| TPoS | T2A+A2V | 839.7 | 4.7 | - | 0.201 | - | - | 0.142 | 0.778 | 0.095 |
| ReWaS | T2V+V2A | - | - | 9.4 | - | - | 0.280 | 0.110 | 0.794 | 0.079 |
| FoleyCftr | T2V+V2A | - | - | 9.1 | - | - | 0.383 | 0.193 | 0.800 | 0.151 |
| MM-Diff | T2AV | 2311.9 | 12.2 | 27.5 | 0.080 | 0.181 | 0.079 | 0.119 | 0.783 | 0.070 |
| UniVerse-1 | T2AV | 194.2 | 0.5 | 8.7 | 0.272 | 0.309 | 0.245 | 0.104 | 0.793 | 0.077 |
| JavisDiT | T2AV | 204.1 | 1.4 | 7.2 | 0.263 | 0.302 | 0.391 | 0.197 | 0.801 | 0.154 |
表1：在JavisBench上的主要结果。

关键结论：JavisDiT在同步性核心指标JavisScore上显著领先所有基线（0.154 vs. 最高0.151）。在视频质量（FVD, KVD）和音频质量（FAD）上也远优于MM-Diff等端到端模型，并与先进的级联模型（FoleyCftr）相当或更好。图5显示，即使对于模型而言最具挑战性的“同时多事件”场景，JavisDiT的同步性也优于最强基线。

2. 在传统基准上的结果
论文Table 2报告了在Landscape和AIST++上的结果。
![传统基准结果](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-02/y7HV7KT3Bd-5.jpg)
表2：在Landscape和AIST++数据集上的实验结果。

| 方法 | Landscape FVD↓ | Landscape KVD↓ | Landscape FAD↓ | AIST++ FVD↓ | AIST++ KVD↓ | AIST++ FAD↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MM-Diff | 332.1 | 26.6 | 9.9 | 219.6 | 49.1 | 12.3 |
| See&Hear | 326.2 | 9.2 | 12.7 | - | - | - |
| AV-DiT | 172.7 | 15.4 | 11.2 | 68.8 | 21.0 | 10.2 |
| MM-LDM | 105.0 | 8.3 | 9.1 | 105.0 | 27.9 | 10.2 |
| JavisDiT | 94.2 | 7.8 | 8.5 | 86.7 | 19.8 | 9.6 |

关键结论：JavisDiT在两个传统基准的视频和音频生成质量上均达到了SOTA（例如在Landscape上FVD最低为94.2，FAD最低为8.5）。

3. 消融实验
论文Tab. 3和Tab. 4进行了关键组件消融。
![消融实验](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-02/y7HV7KT3Bd-8.jpg)
图8：人类评估结果。

| STDiT | HiST-Sypo | BiCA | Quality↓ | Consist↑ | Sync↑ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| × | × | × | 9.371 | 1.140 | 0.118 |
| √ | × | × | 7.293 | 1.155 | 0.130 |
| √ | √ | × | 6.127 | 1.191 | 0.150 |
| √ | × | √ | 6.581 | 1.157 | 0.133 |
| √ | √ | √ | 6.012 | 1.201 | 0.153 |
表3：模型设计消融。

| Ns | Nt | Injection | Quality↓ | Consist↑ | Sync↑ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | - | 6.581 | 1.157 | 0.133 |
| 32 | 32 | CrossAttn | 6.012 | 1.201 | 0.153 |
| 32 | 32 | Addition | 6.267 | 1.183 | 0.144 |
| 32 | 32 | Modulate | 6.190 | 1.191 | 0.145 |
表4：时空先验token数量与注入策略消融。

关键结论：a) STDiT骨干网络比UNet骨干在所有指标上显著更优；b) HiST-Sypo估计器相比简单的双向交叉注意力（BiCA）对同步性（Sync）和一致性（Consist）提升更大；c) 完整的JavisDiT结合所有组件达到最佳性能。d) 使用32个时空先验token并通过交叉注意力注入是最优策略。

4. 模型变长生成能力
论文Table 5展示了模型生成10秒视频的能力。
| 长度 | FVD↓ | FAD↓ | CLIP↑ | CLAP↑ | AVHScore↑ | JavisScore ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 4s | 241.8 | 7.3 | 0.308 | 0.382 | 0.186 | 0.153 |
| 10s | 233.8 | 7.1 | 0.307 | 0.385 | 0.183 | 0.154 |
表5：变长生成性能评估。

关键结论：JavisDiT在生成更长（10秒）视频时，各项性能指标保持稳定，表明其具有良好的泛化能力。

### ⚖️ 评分理由

-   学术质量：6.0/7：创新性体现在提出“分层时空先验”这一新颖概念来解决细粒度同步问题，技术实现上合理结合了DiT、对比学习和新颖的注意力模块。实验非常充分，在自建基准和多个传统基准上均进行了详尽的对比和消融分析，数据可信。扣分点在于计算开销较大，且生成结果的分辨率和时长评估主要集中在较低设置（240P, 4s）。
-   选题价值：1.5/2：联合音视频生成是重要的多模态生成任务，应用前景明确。论文不仅改进了模型，还构建了更贴近真实复杂场景的基准和评估指标，对推动领域发展有实际贡献，价值较高。
-   开源与复现加成：0.5/1：论文承诺开源代码、模型和数据，并提供了相当详细的实现细节（模型配置、训练策略、数据处理），具备良好的复现基础。但具体的资源链接（代码仓库、预训练权重）需访问外部页面，未能在论文中直接给出，故加成适中。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
