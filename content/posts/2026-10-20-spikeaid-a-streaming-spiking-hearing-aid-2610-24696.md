---
title: "SpikeAid: A Streaming Spiking Hearing Aid Framework for Joint Noise Reduction and Wide Dynamic Range Compression"
date: 2026-10-20
draft: false
tags: [语音增强, 脉冲神经网络, 助听器, 流式处理]
categories: [论文速递]
description: "SpikeAid 针对噪声下助听既要降噪又要按压缩曲线放大的耦合问题，用 NR-Net 做语音噪声分支表征、WDRC-Net 估计分支增益并联合优化，以 DRN 神经元兼顾快瞬态和慢包络，在固定压缩配置和离线构造目标下提升目标一致性和感知指标，并以 FPGA 流式实现换来能效提升。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.24696"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "SpikeAid：把降噪和宽动态压缩一起学完的流式脉冲助听框架"
paper_digest_original_title: "SpikeAid: A Streaming Spiking Hearing Aid Framework for Joint Noise Reduction and Wide Dynamic Range Compression"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.24696v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.24696v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.24696v1.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.spiking-neural-network","label":"脉冲神经网络"},{"facet":"application","id":"application.hearing-aids","label":"助听器"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "脉冲神经网络"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "SpikeAid 针对噪声下助听既要降噪又要按压缩曲线放大的耦合问题，用 NR-Net 做语音噪声分支表征、WDRC-Net 估计分支增益并联合优化，以 DRN 神经元兼顾快瞬态和慢包络，在固定压缩配置和离线构造目标下提升目标一致性和感知指标，并以 FPGA 流式实现换来能效提升。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiang Hao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xinyi Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hanwen Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jibin Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Richard Hau Yue So"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kay Chen Tan"}]
paper_digest_abstract_sha256: "ab17a34eba0b3020c695334cf91099e9ef7a0d5aeaf9814644507aec2f3f0b16"
paper_digest_sidecars: {"citation.bib":{"sha256":"18be30ade3c2ac9c3b4a3b6dbf81a45ba8130b1f39369da933126eb3ecde40e5","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24696/citation.bib"},"citation.json":{"sha256":"dde1c5991a2e63c0b4b7af5a8c0b5149050a46b71f7f124fcd51c373e2498b30","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24696/citation.json"},"citation.ris":{"sha256":"e0d7b1632622fb736ebddbe0d867f63b4aba0d2f7ee1de4bc8b9bfe311c1f916","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24696/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"46c5c46b53b4e305ae48c4fe8235227bee073bfaa6716628cb8f27bf1002baad","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24696/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f699f3395cf6a9b2a947b5ac0a6db785ee723eebd33ee828ff7fa1546751ab3d"
paper_digest_api_reader_plan_sha256: "89b5eccb9414c140d700760a2bcec2ad49e00ff46296ad65ef0cd4dfd9e0b57f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "730ceea8f63ce44f00eba920b026dcdd5f1ca68ac70c56f5abd6b26dbe7d955b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "231386d36d9882b7aa651fc8173d6f8ba8db45e94e8cd81811fb1b70fdeeb197"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e42b778a144258e9f601d174678dd97a82b7e3265b0e20ef5478ca94872eef6f"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9630367d9a440f5a6593ba252141b04f80f36130a2d5703c143923d780242a3e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 SpikeAid：把降噪和宽动态压缩一起学完的流式脉冲助听框架

> 英文题目：*[SpikeAid: A Streaming Spiking Hearing Aid Framework for Joint Noise Reduction and Wide Dynamic Range Compression](https://arxiv.org/abs/2610.24696v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音增强](/audio-paper-digest-blog/papers/?concept=task.speech-enhancement)
- **研究方法**：[脉冲神经网络](/audio-paper-digest-blog/papers/?concept=method.spiking-neural-network)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)
- **应用**：[助听器](/audio-paper-digest-blog/papers/?concept=application.hearing-aids)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Xiang Hao：机构信息未能在本次解析中与作者逐人可靠绑定
- Xinyi Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Hanwen Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jibin Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Richard Hau Yue So：机构信息未能在本次解析中与作者逐人可靠绑定
- Kay Chen Tan：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

助听器需要同时完成两件事：输入是目标语音与环境噪声的单通道混合波形，输出是经过降噪并按听力损失放大的波形，难点在于降噪会改变电平包络从而影响后级压缩，独立优化容易丢失弱语音或放大残留噪声。SpikeAid用因果端到端脉冲神经网络直接从含噪幅度谱出发，先由降噪子网估计互补的语音掩码与噪声掩码并构造两路分支表示。这两路表示交换上下文后进入压缩子网，分别估计非负的语音分支增益与噪声分支增益。两路增益融合为有效增益，再作用于含噪复数谱并经逆短时傅里叶变换重建波形。与已有脉冲去噪只重建干净语音不同，该框架的训练目标是源独立压缩后的语音加衰减后压缩噪声，损失只加在最终输出。与固定压缩级联相比，联合优化在助听任务上取得PESQ 2.214、STOI 0.8412、HASPI 0.4365；在Intel N-DNS基准上替换神经元后SI-SNR达到15.73 dB，超过原Spiking-FullSubNet的15.20 dB。结论适用于固定压缩参数和模拟评测，尚未验证个性化验配与真实佩戴。训练约需4卡100小时，FPGA实现相对CPU和GPU的能量效率分别提高约101.9倍和865.6倍。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 助听器要同时解决哪两个问题

助听器的输入是目标语音加环境干扰的单通道混合，采样后按帧处理。输出不是干净语音本身，而是既压低干扰、又按听力损失把不同电平放大到合适响度的波形。必须保留的信息包括语音的频谱结构和包络起伏，以及干扰被压低后仍符合压缩曲线的电平轨迹，如果只降噪不补偿，弱声听不见，如果只放大不降噪，噪声也会一起被放大。

下面这张任务示意图把上述输入、听力损失与 2 级处理的关系画了出来，读图时重点看声音来源与处理目标的对应。

> **看图路径：** 1. 先看左侧目标说话人与电视音乐噪声、电扇噪声的箭头，区分要保留与要抑制的声音；2. 再看右上听力图随频率变化的听力损失示意，理解压缩要补偿的对象；3. 最后看右下框内降噪与压缩如何共同指向舒适可懂且电平合适的声音

[![原论文 Fig. 1：Illustration of the hearing aid signal-processing task.](https://arxiv.org/html/2610.24696v1/figures/figure-1.png)](https://arxiv.org/html/2610.24696v1/figures/figure-1.png)

*论文图 1。原论文 Fig. 1:：“Illustration of the hearing aid signal-processing task.”。*

从像素可见，左侧房间里有目标说话人、电视音乐噪声和电扇噪声，分别用实线与虚线箭头指向佩戴助听器的听者，右上是左右耳随频率变化的听力损失曲线，右下把降噪理解为抑制干扰噪声、把宽动态范围压缩理解为补偿听觉动态范围，两者共同指向舒适、可懂且电平合适的声音。这张图只说明任务分工，不包含网络结构或性能结论。

### 已有路线为什么还是分段处理

早期协调做法是在降噪与压缩之间共享语音存在概率或信噪比信息，例如多通道维纳滤波后接压缩，或在语音段与噪声段用不同压缩速度。这类做法能缓解级联后输出信噪比被压缩破坏的问题，但模块仍是分别设计，压缩策略也是预先规定，没有按最终助听输出端到端决定。

神经路线尝试把听力补偿学出来，包括可微分验配、基于听觉模型的个性化补偿、近似多频带压缩的可解释动态处理器，以及与本文更接近的联合增强与补偿，例如 Neural-WDRC 估计语音与噪声分量再做与声源有关的压缩。原文指出这些系统多依赖稠密人工神经网络逐帧计算，无论当前声学活动强弱都要做乘加运算，在常开可穿戴设备上形成质量、时延与功耗的权衡。

脉冲路线则用离散脉冲事件传递信息，无事件时神经元可以不活跃，内部状态又能随时间演化保留上下文。Spiking-FullSubNet、DPSNN 等工作把稀疏脉冲计算用于语音增强，但原文强调它们的目标多是重构干净语音或估计增强掩码，不产生由规定压缩曲线决定的听者相关输出，也不联合建模压缩带来的增益轨迹，完整的因果脉冲联合系统也缺少硬件验证。

### 级联为什么会在弱语音处丢信息

论文把问题形式化为单通道加性混合，时域混合经短时傅里叶变换的线性性质变成复谱相加。降噪改变剩下哪些语音与噪声成分及其电平与包络，而后级压缩增益正是从这些量算出来的，所以前级输出直接决定后级行为。独立优化的降噪可能把低能量但有用的语音压掉，后级只能对剩下的信号调增益，无法把已丢失的语音找回来，残留噪声还可能和语音一起被放大，输出信噪比与包络会被进一步重塑。

**噪声抑制 × 宽动态范围压缩：** 噪声抑制处理的是混合信号里留下多少语音、压掉多少干扰，宽动态范围压缩处理的是不同输入电平给多大放大量，把大动态映射到听损者更窄的残余动态。前者改变后者看到的电平和包络，后者又会同时改变保留语音和残留噪声，低能量语音一旦被前级压掉后级无法找回，所以两者需要按最终助听输出一起协调，而不是各自最优再串联。

理解这一点后，才能看懂后文为什么专门挑弱语音区做分析，以及为什么联合优化的对比必须控制参数分配，否则把更强降噪前端带来的好处误当成联合的好处。

### SpikeAid 让一个样本走完哪些步骤

拿一条带噪语句为例，先做短时傅里叶变换得到带噪复谱，取幅度谱作为网络输入，相位暂时保留不进网络。NR-Net 输出语音掩码，噪声掩码取其互补，两掩码分别乘带噪幅度谱得到语音分支表征与噪声分支表征，两者相加恒等于输入幅度谱。WDRC-Net 对两个分支分别编码，再把另 1 分支提取的时间上下文加进来，然后预测非负的语音分支增益与噪声分支增益。增益融合把掩码与分支增益组合成一个实值有效增益，乘到带噪复谱上保持原相位，再经逆变换回到波形。

**NR-Net × WDRC-Net：** NR-Net 负责从带噪幅度谱估计互补的语音掩码和噪声掩码并构造两个分支表征，WDRC-Net 负责在两个分支信息互通的条件下估计非负的分支增益。两者分工是分离结构与决定放大量，组合方式是掩码与分支增益在增益融合阶段相乘相加得到有效增益，联合监督只看最终重构输出，使中间误差可以被下游补偿。

下面这张总览图把上述分支分合与离线目标构造画在一起，读图时按输入到输出的主路径走，再看分支在哪里交换信息。

> **看图路径：** 1. 沿上排从带噪波形经短时傅里叶变换到 NR-Net、双分支估计再到 WDRC-Net 与增益融合的主路径看一遍；2. 对照下排三块小图，分别确认掩码估计、双分支增益预测与离线目标构造的输入输出；3. 注意语音与噪声两条支路在哪里分开、在 WDRC-Net 处如何交换上下文、最后在哪里汇成一个有效增益

[![原论文 Fig. 2：Overview of SpikeAid. NR-Net estimates complementary speech and noise masks from the noisy magnitude…](https://arxiv.org/html/2610.24696v1/figures/figure-3.png)](https://arxiv.org/html/2610.24696v1/figures/figure-3.png)

*论文图 2。原论文 Fig. 2:：“Overview of SpikeAid. NR-Net estimates complementary speech and noise masks from the noisy magnitude spectrum and uses them to construct the corresponding branch representations.”。*

从像素可见，上排是带噪波形经变换、掩码估计、双分支估计、快慢压缩、增益融合与逆变换得到增强助听输出的链条，下排分别展开 NR-Net 的层堆叠与掩码互补、WDRC-Net 的编码器与上下文交叉加法及预测器、训练目标侧语音用快压缩与噪声用慢压缩分别处理再融合的结构。该图说明计算分工，性能高低仍要看受控实验。

### DRN 如何同时看快变化和慢包络

DRN 是 NR-Net 与 WDRC-Net 共用的时间处理单元。它的输入电流先经过多条树突分支，每条有权重与延迟，把不同时刻的输入错位对齐后求和，得到延迟后的树突输入。每个神经元有自己的一组延迟核，可以学出不同的局部时间滤波器，用于分辨几帧内的精细结构。树突电位与胞体电位再双向耦合，树突驱动胞体，胞体反馈调节树突，形成阻尼振荡式的长时记忆，不同神经元的衰减与振荡频率不同，构成一组多时间尺度的滤波器。

\[\displaystyle I^{d}(t)=\sum_{k=0}^{D-1}W_{k}I(t-d_{k}),\]

上式要计算的是延迟聚合，把同一输入电流在不同延迟下的取值加权求和，符号中 D 是分支数，d 是延迟，W 是可学习权重。离散实现时延迟初始化为连续整数，相当于因果分组 1 维卷积，可以并行计算。

\[\frac{dz(t)}{dt}=(\alpha+\boldsymbol{i}\beta)z(t)+I^{d}(t).\]

上式把树突与胞体两个实值状态写成一个复状态，实部对应树突，虚部对应胞体，系数实部控制阻尼衰减，虚部控制振荡频率，这种写法与经典谐振发放神经元对应，便于看出为什么能形成多时间尺度的振荡记忆。

\[z_{j}[t]=A_{j}z_{j}[t-1]+B_{j}I_{j}^{d}[t],\]

上式是零阶保持离散化后的状态递推，当前状态等于上一状态乘转移系数加当前延迟输入乘输入系数，训练时用结合律的扫描核并行计算，推理时按帧递推，两边保持同一状态转移，避免频域近似带来的训练与流式推理不一致。

\[\alpha_{j}=-\exp(a_{j}).\]

上式把衰减参数写成负指数形式，保证转移系数模长恒小于 1，使无输入时谐振状态渐近稳定，优化过程中不会发散。

下面这张神经元示意图把生物动机与两种机制对应到声学结构，读图时先分清结构，再看时间对齐与振荡衰减。

> **看图路径：** 1. 对照生物神经元与 DRN 结构，看多条延迟通路如何汇入树突腔再与胞体耦合；2. 看延迟机制示意中不同分支如何把不同时刻输入对齐到同一时刻；3. 看谐振机制示意中振荡幅度如何随时间衰减，再对应右侧快瞬态与慢包络两类声学结构

[![原论文 Fig. 3：Illustration of the Delayed Resonate-and-fire Neuron (DRN).](https://arxiv.org/html/2610.24696v1/DRN.png)](https://arxiv.org/html/2610.24696v1/DRN.png)

*论文图 3。原论文 Fig. 3:：“Illustration of the Delayed Resonate-and-fire Neuron (DRN).”。*

从像素可见，左起是具有树突分支、树突主干与胞体的生物神经元，中部是多延迟输入汇入树突腔再与胞体耦合输出脉冲的 DRN 结构，中部偏右分别画出延迟分支对齐与谐振衰减振荡，右侧对应快声学瞬态与慢包络节律两类结构。该图解释设计意图，延迟分支数取多大仍需消融实验确定。

**延迟机制 × 谐振机制 × DRN：** 延迟机制指把当前输入与过去 D 个时刻的输入按可学习权重加权求和，形成短因果窗内的局部时间滤波，用于捕捉语音起始、辅音过渡和噪声突发；谐振机制指树突与胞体电位双向耦合形成阻尼振荡，提供不同衰减速度和偏好频率的长时记忆。DRN 把两者放在同一脉冲神经元里，短窗滤波管精细瞬态，谐振状态管包络与增益轨迹，合起来覆盖联合处理所需的多时间尺度。

### NR-Net 与 WDRC-Net 各自输出什么

NR-Net 输入带噪幅度谱，经过 DRN 层堆叠与线性投影加 Sigmoid 得到语音掩码，取值在 0 到 1 之间，噪声掩码取 1 减语音掩码，两掩码相加为 1，分支表征相加回到输入幅度谱。原文明确这些分支的上标只表示 intended role，不意味着精确分解为干净语音与噪声幅度谱，且中间分支不受直接监督去拟合干净谱，最终损失只加在重构输出上，下游增益估计与融合可以在端到端训练中补偿中间误差。

WDRC-Net 输入两个分支表征，每分支先用单层 DRN 编码为隐特征，再加上由另 1 分支经 DRN 层堆叠提取的时间上下文，然后经另一组 DRN 层堆叠与线性投影加 ReLU 得到非负分支增益。原文同样强调分支增益不受直接监督去拟合规定的压缩增益，应按其对最终增益的贡献来理解，而不是当成规定增益的直接估计。这种设计使压缩能同时看到本分支与对侧分支的信息，但也意味着不能把中间增益图直接解读为压缩曲线。

### 离线目标如何构造与损失加在哪里

训练目标按与声源无关的压缩做法离线构造，语音谱与噪声谱分别经过各自的因果多频带压缩算子得到语音规定增益与噪声规定增益，压缩后噪声再按残留衰减系数衰减，然后相加。两个算子共享压缩频带、启动时间、压缩阈值与压缩比，但释放时间不同，语音用较短释放以便在大声语音后较快恢复增益，噪声用较长释放以减少残留背景的增益起伏。本工作用固定压缩配置研究联合学习，不做按听力图或插入增益的个性化验配，推理时干净源谱与规定增益都不可见。

\[\mathbf{X}^{\star}=\mathbf{G}^{s,\star}\odot\mathbf{S}+\rho\mathbf{G}^{v,\star}\odot\mathbf{V},\qquad\rho=10^{-\eta_{\mathrm{NR}}/20},\]

上式要计算的正是上述目标复谱，G 代表规定压缩增益，S 与 V 代表干净语音与噪声复谱，rho 是残留衰减的线性幅度等价，星号上标标识与训练目标相关的量。网络侧的有效增益形式与之对应，但用的是估计掩码与估计分支增益。

**有效增益 × 训练目标：** 训练目标是把干净语音和干净噪声分别经过各自规定的压缩算子处理、噪声支路再衰减后相加得到的复谱，代表理想的降噪加压缩结果；有效增益是网络侧用语音掩码乘语音分支增益加残留系数乘噪声掩码乘噪声分支增益得到的实值增益，直接乘到带噪复谱上重构输出。两者通过复数域与幅度域的联合损失对齐，网络不需要显式估计干净复谱或规定的压缩增益。

损失只加在最终重构谱上，复数域项惩罚实部虚部误差，幅度域项直接惩罚输出幅度误差从而更强调电平轨迹，按能量归一化并对低能量语句做数值保护，逐语句计算再在小批量内平均。原文实现取两项权重相等，NR-Net 与 WDRC-Net 因此按对最终助听输出的贡献被联合优化。

### 数据、前端与评价条件如何固定

干净语音取 LibriSpeech，噪声取 DNS 挑战全频带噪声库，转为单声道 16 kHz 波形。训练在线生成混合，每条干净语句裁剪或补零到 3.072 秒，干净语音电平在 55 到 75 dB 声压级中均匀采样，输入信噪比在 0 到 20 dB 整数中均匀采样，数字幅度与声压级的校准按均方根值为 1 对应 95 dB 声压级，若 3 路信号峰值超过 0.99 则等比缩放以不改变信噪比，每轮 150,000 条独立混合。验证与评测集离线固定，各 120 条混合，覆盖负 6、0、6 和 12 dB 输入信噪比，两集合干净语句互不重叠。

声学前端用 512 点短时傅里叶变换，512 样点 Hann 窗，256 样点跳，对应 32 毫秒窗、16 毫秒帧移与 257 个单边频点。训练目标用中心在 125 到 8000 Hz 的频带，启动 5 毫秒，压缩阈值 40 dB 声压级，压缩比 2 比 1，语音释放 40 毫秒，噪声释放 2 秒，频带增益经自然三次样条插值到频点，压缩后噪声衰减 15 dB。网络侧 NR-Net 为 4 层 DRN 加隐维 128，WDRC-Net 隐维 192，每分支含单层编码器、四层上下文提取器与四层增益预测器，延迟分支数默认 7。

**PESQ × STOI × HASPI × HASQI：** PESQ 和 STOI 在这里是系统输出波形与由规定目标复谱重构波形之间的一致性，分别偏向质量和可懂度方向；HASPI 和 HASQI 是面向助听的感知评价，按原文配置用平坦听力图、规定校准和均衡条件计算。组合起来看可以区分只是更像规定目标，还是在听损感知模型下也更好，原文中 SpikeAid 在 HASQI 上优势很小，说明不能把四项指标混为单一胜负。

评价用 PESQ、STOI 度量与规定目标的一致，HASPI 与 HASQI 按 Neural-WDRC 配置度量助听感知，计算代价按 Intel N-DNS 方法的 Power Proxy 与时延乘积等代理指标报告。所有助听系统在无特别说明时用相同数据生成、前端、目标、损失与优化设置，结果表内加粗与下划线分别表示最好与次好。

### 联合优化相对级联带来什么变化

这张表要回答的比较问题是，在相同数据与目标下，固定压缩的级联与可学习压缩加联合优化是否不同。比较条件包括无降噪加固定压缩、维纳滤波加固定压缩、NR-Net 加固定压缩、分阶段优化的 SpikeAid 与联合优化的 SpikeAid，指标方向均为 PESQ、STOI、HASPI、HASQI 越高越好。表前说明已交代公平条件，读数时注意分阶段与联合版本参数分配相同但优化方式不同，而固定压缩基线把可学习参数集中在降噪前端。

| System | NR Processing | WDRC Processing | Optimization | Params (k) | PESQ ↑ | STOI ↑ | HASPI ↑ | HASQI ↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Noisy mixture + fixed WDRC | None | Fixed | – | – | 1.648 | 0.7799 | 0.3866 | 0.1808 |
| Wiener filtering + fixed WDRC | Wiener filter | Fixed | NR only | – | 1.579 | 0.7761 | 0.3667 | 0.1724 |
| NR-Net + fixed WDRC | NR-Net | Fixed | NR only | 987 | 2.091 | 0.8103 | 0.4254 | 0.1819 |
| SpikeAid (stage-wise) | NR-Net | Learnable WDRC-Net | Stage-wise | 994 | 2.040 | 0.8278 | 0.4185 | 0.1792 |
| SpikeAid | NR-Net | Learnable WDRC-Net | Joint | 994 | 2.214 | 0.8412 | 0.4365 | 0.1812 |

从原表可见，联合优化的 SpikeAid 在 PESQ、STOI 和 HASPI 上为最好，HASQI 保持有竞争力但略低于 NR-Net 加固定压缩。直接隔离联合作用的是它与分阶段版本的对比，四项指标均有提升。原文同时提醒，分阶段版本 PESQ 低于 NR-Net 加固定压缩不能直接理解为可学习压缩无用，因为两者可学习容量分布不同。结论成立条件是固定压缩配置、相同前端与目标生成，以及无事后电平归一化的评价方式，换压缩配置或个性化验配后是否仍成立尚未评测。

下面这张弱语音区分析图进一步说明好处出现在哪里，读图时先看分布，再看单条示例的时间轨迹。

> **看图路径：** 1. 先看左图两种方法在 120 条语句上的误差分布宽度与高误差点的多少；2. 再看右图前 2 秒弱语音段三条平均幅度轨迹谁更贴近规定目标；3. 最后对比后段较强语音处两条轨迹是否重新接近，判断改善集中在弱语音区

[![原论文 Fig. 4：Target matching in soft-speech regions.](https://arxiv.org/html/2610.24696v1/figures/figure-5.png)](https://arxiv.org/html/2610.24696v1/figures/figure-5.png)

*论文图 4。原论文 Fig. 4:：“Target matching in soft-speech regions.”。*

从像素可见，左图 120 条语句的相对幅度误差在 SpikeAid 一侧分布更低且高误差点明显减少，右图示例在 0 到 2 秒弱语音段固定级联的平均幅度轨迹持续低于规定目标而 SpikeAid 更贴近目标，在后段较强语音处两者重新接近。这支持联合优化在下游压缩已知的情况下更好地保留低能量语音，但这是一项机制解释而非独立的感知胜负证据。

### 与脉冲基线相比性能与开销如何权衡

这张表要回答的比较问题是，在同一联合降噪加压缩任务上，完整 SpikeAid 与已有脉冲架构及同架构换神经元相比，质量、感知与计算代理指标如何权衡。比较分为已有架构组与受控神经元组，前者把不同脉冲网络适配到同一数据预处理、训练与评价，后者保持 SpikeAid 架构与流程不变只替换神经元。指标方向为质量与感知越高越好，参数量与 3 种计算代理越低越好。

| Architecture | Neuron Model | Params (k) | PESQ ↑ | STOI ↑ | HASPI ↑ | HASQI ↑ | Power Proxy (MOp/s) | PDP Proxy (MOp) | Energy Cost (μJ) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SFNN | LIF | 990 | 1.946 | 0.8021 | 0.3679 | 0.1589 | 36.02 | 1.15 | 1.04 |
| SRNN [59] | LIF | 972 | 2.093 | 0.8224 | 0.4108 | 0.1775 | 41.16 | 1.32 | 1.19 |
| Spike-Driven Transformer [60] | LIF | 975 | 2.119 | 0.8271 | 0.3493 | 0.1449 | 196.61 | 6.30 | 5.67 |
| Binary S4D [61] | STA | 960 | 2.098 | 0.8365 | 0.4290 | 0.1800 | 183.31 | 5.87 | 5.28 |
| Spiking-FullSubNet [23] | GSN | 1000 | 2.159 | 0.8397 | 0.4053 | 0.1667 | 868.25 | 27.81 | 25.03 |
| SpikeAid-LIF | LIF | 911 | 1.989 | 0.8071 | 0.3827 | 0.1643 | 35.23 | 1.13 | 1.02 |
| SpikeAid-GSN | GSN [23] | 962 | 2.119 | 0.8339 | 0.4189 | 0.1782 | 59.01 | 1.89 | 1.70 |
| SpikeAid-D-RF | D-RF [46] | 998 | 1.936 | 0.8124 | 0.4004 | 0.1805 | 34.89 | 1.12 | 1.01 |
| SpikeAid-PMSN | PMSN [48] | 1014 | 2.062 | 0.8202 | 0.4120 | 0.1737 | 34.09 | 1.09 | 0.98 |
| SpikeAid | DRN | 994 | 2.214 | 0.8412 | 0.4365 | 0.1812 | 30.39 | 0.97 | 0.88 |

从原表可见，SpikeAid 在四项客观指标上均为最好，同时能量代价代理最低，约为 Spiking-FullSubNet 的二十分之一以下。基线侧 Spiking-FullSubNet 的 PESQ 与 STOI 较强，Binary S4D 的 HASPI 与 HASQI 在基线中较好，但计算代理明显更高，SFNN 与 SRNN 开销低但指标偏低。受控神经元对比中 DRN 优于 LIF、GSN、D-RF 与 PMSN，且三项计算代理最低。限制是这些代理按脉冲操作计数与神经元更新次数换算，不等同于真实芯片功耗，参数量相近也不代表算术代价相同，未胜出项恰好说明没有免费的精度提升。

### DRN 换到独立降噪基准上是否仍有效

这张表要回答的比较问题是，DRN 的时间建模优势是否只适用于 SpikeAid 的联合目标。为此构造 DRN-DNS，把 Spiking-FullSubNet 主干中的 GSN 神经元换成 DRN，其余去噪架构保留，与原主干形成受控对比，同时以官方基线与近年脉冲去噪系统作为背景。评价按 Intel N-DNS 协议，SI-SNR 与改进值、DNSMOS 子分数越高越好，时延与计算代理越低越好。

| 对比项目 | 内容 |
| --- | --- |
| 受控主干 | Spiking-FullSubNet 主干，其余去噪架构保留 |
| 神经元替换 | GSN 换成 DRN |
| SI-SNR 变化 | 提高 0.53 dB |
| DNSMOS OVR 变化 | 从 3.03 提高到 3.07 |
| 计算代理变化 | 下降约 7.4% |

从原表可见，DRN-DNS 相对 Spiking-FullSubNet 把 SI-SNR 提高 0.53 dB，DNSMOS 总体分从 3.03 提高到 3.07，三项计算代理下降约 7.4%，在已列脉冲系统中整体最强，并与所列人工网络和挑战赛条目保持可比。限制是表中部分结果引自仓库与原论文而非同一训练复跑，跨行直接排名需注意实现与数据细节差异，未胜出的噪声背景分与参数量等项也表明优势集中在特定指标而非全面碾压。

### 延迟与谐振各自贡献多大

这张表要回答的比较问题是，DRN 中延迟机制、谐振机制与延迟分支数如何影响联合任务。做法是去掉其中之一，以及把分支数从 3 变到 11，其余架构与流程不变，指标方向仍为四项越高越好。表前说明已固定比较对象为同一 SpikeAid 框架，读数时把去掉延迟理解为退化为谐振发放神经元，把去掉谐振理解为只剩延迟滤波。

| DRN Configuration | DRN Configuration | DRN Configuration | Objective Performance | Objective Performance | Objective Performance | Objective Performance |
| --- | --- | --- | --- | --- | --- | --- |
| Resonance | Delay | DD | PESQ ↑ | STOI ↑ | HASPI ↑ | HASQI ↑ |
| ✗ | ✓ | 7 | 2.157 | 0.8357 | 0.4278 | 0.1799 |
| ✓ | ✗ | – | 2.143 | 0.8364 | 0.4247 | 0.1807 |
| ✓ | ✓ | 3 | 2.189 | 0.8404 | 0.4273 | 0.1802 |
| ✓ | ✓ | 5 | 2.196 | 0.8411 | 0.4295 | 0.1809 |
| ✓ | ✓ | 7 | 2.214 | 0.8412 | 0.4365 | 0.1812 |
| ✓ | ✓ | 9 | 2.207 | 0.8432 | 0.4303 | 0.1819 |
| ✓ | ✓ | 11 | 2.213 | 0.8414 | 0.4301 | 0.1818 |

从原表可见，去掉任一机制都会使四项指标下降，说明仅靠振荡记忆或仅靠局部延迟都不够。从 3 增加到 7 持续改善，继续增加到 9 或 11 则不再一致提升，STOI 或 HASQI 个别项仍有波动，原文据此把 7 作为默认，在时间建模能力与模型复杂度之间取舍。限制是该结论依赖当前前端、压缩释放时间与隐维度，换任务或换主干后最优分支数可能变化，不能推广为通用最优值。

### 哪些结论不能从当前证据推出

固定压缩配置是首要边界，语音与噪声释放时间、阈值、压缩比与残留衰减都固定，目的是隔离联合学习问题，不包含按听力图或插入增益的个性化验配，因此不能把结果理解为对任意听损者的临床效果。评价用固定 120 条混合与特定信噪比点，性别未显式均衡，HASQI 优势很小且个别基线在特定感知项上接近，总体趋势不能推广到每一句或每种噪声。

计算代理按突触操作与神经元更新换算并以参考能量折算，FPGA 能效对比在单流逐帧因果推理下测得，与 CPU 与 GPU 的吞吐功耗比有关，不能直接等同于助听器整机续航或实时延迟。训练目标依赖干净源谱离线构造，推理时不可见，中间掩码与分支增益也无直接监督，把它们当成干净谱或规定增益来解读会误读模型。没有测量误判率之外的临床可懂度、长期稳定性与片上噪声鲁棒性之前，不宜承诺实际佩戴效果。

### 复现第一步需要固定什么

先固定数据与目标生成再调网络，按原文把 LibriSpeech 与全频带噪声库转为 16 kHz 单声道，用相同窗长帧移得到 257 频点，按相同压缩频带、启动释放时间、阈值压缩比与 15 dB 残留衰减离线构造目标，验证评测集按相同信噪比点与互不重叠语句生成。网络按 NR-Net 四层与 WDRC-Net 分支结构实现 DRN 层，每层为线性投影加批归一化加 DRN 神经元，延迟分支默认 7，损失取复数域与幅度域权重相等，用 AdamW 与梯度裁剪训练并按验证准则早停。

硬件复现需区分算法代理与实测功耗，先用相同操作计数方法得到 Power Proxy 与时延乘积，再在 FPGA、CPU 与 GPU 上分别做单流逐帧因果推理并用各自功耗监测工具测平均功耗。来源方面，本次未发现可验证的作者代码、模型或数据公开资源，不得声称已开源，复现应以论文正文、附录的压缩算子与计数方法及配置文件为准。

### 什么时候值得尝试 SpikeAid

当任务明确是降噪后还要按规定压缩曲线放大，且弱语音容易被独立降噪压掉时，联合优化的思路值得尝试。SpikeAid 的价值在于用互补掩码保留结构、用双分支上下文决定增益、用一个有效增益一次完成增强与压缩，并以延迟加谐振的脉冲单元同时跟踪瞬态与包络，适合需要常开流式推理且对稀疏事件计算友好的场景。

采用前应确认压缩配置是否与原文类似、评价是否同样不做事后电平归一化、指标是否同时看目标一致性与助听感知，因为 HASQI 上的差距很小意味着不能只看单一分数。若要落地，还需补做个性化验配条件、多噪声与长时流式验证，以及在目标器件上的真实功耗与延迟测量，再决定延迟分支数与模型规模。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.24696v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
