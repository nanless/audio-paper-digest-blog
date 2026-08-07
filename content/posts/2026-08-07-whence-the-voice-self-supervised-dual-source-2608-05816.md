---
title: "Whence the Voice? Self-supervised Dual-source Audio-Visual Localisation via Selective Convergence"
date: 2026-08-07
draft: false
tags: [声源定位, 对比学习, 音频理解, Transformer, 模型评估]
categories: [论文速递]
description: "声源定位 | 6.8/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.05816"
---

# 📄 Whence the Voice? Self-supervised Dual-source Audio-Visual Localisation via Selective Convergence

标签：#声源定位 #对比学习 #音频理解 #Transformer #模型评估

**6.8/10** | 创新 1.4/2 | 严谨 1/1.5 | 实验 0.9/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 0.9/1.5

✅ **6.8/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #声源定位 | #对比学习 | #音频理解 #Transformer | [arxiv](https://arxiv.org/abs/2608.05816)


### 👥 作者与机构

共同第一作者：Han Hu、Dongheng Lin（论文中以脚注标记Equal contribution）
其他作者：Yuqi Hou、Haotian Li、Hyung Jin Chang、Jianbo Jiao
机构：The MIx Group, School of Computer Science, University of Birmingham, UK（所有作者均属该机构）
通讯作者：未披露

### 💡 毒舌点评

"Selective convergence" 的命名与两阶段渐进式框架确实把双源视听定位的"鸡生蛋"死结转化成了两个良定子问题，实验覆盖面（三个现有基准 + 新掩码基准 + NoPrior 复现）也超出同类工作。但论文的软肋在于：第一阶段的"主导源"定义是事后挑选的（IoU 大者即为主导源），对"为什么选中它"没有可控性分析，初始偏置完全听天由命；更关键的是，表 1 的 frame-wise 协议并未对所有基线生效——只有 NoPrior 与 Mix-and-Localize 被重跑，OA-SSL、AVGN 以及 DSOL、LVS、EZ-VSL、Slot-Attn 等数字都直接取自原文（source-wise），而附录 D 的定理又证明 source-wise 恒不低于 frame-wise，因此"全面超越自监督方法"的结论在严格意义上被系统性抬高。自制 VGGSound-DuetMask 基准方向正确，但 SAM 生成 + 人工挑选的路子没有报告标注一致性，削弱了基准的严谨性。

### 📌 核心摘要

本文研究自监督双源视听声源定位问题。作者发现对比学习在多源场景下会自然收敛到与音频最匹配的单一空间区域——选择性收敛，并据此提出两阶段渐进式框架SCAV：第一阶段利用选择性收敛定位主导声源并生成空间先验，第二阶段以该先验划分视觉特征，通过交叉注意力将混合音频解耦为源专属特征后逐源进行对比学习，从而打破"分离混合音频需知位置、定位声源需知音频"的循环依赖。该方法无需任何标注，在MUSIC-Duet上取得自监督最优的CIoU@0.3 47.1%、AUC 28.6%；在VGGSound-Instruments上CAP 32.0%、AUC 21.1%；并在VGGSound-Duet（220类、5,158测试视频）上以CIoU@0.3 53.3%、CAP 53.0%超越部分弱监督方法。作者还提出像素级掩码基准VGGSound-DuetMask，指出边界框评估对非轴对齐物体会系统性高估定位质量，并证明source-wise协议因忽略跨源激活而系统性虚高。

下图概括了SCAV所针对的核心悖论、渐进式解决思路以及在主流基准上的性能优势。

![Figure 1: Top-left: The fundamental paradox where visual localisation requires separated audio, while audio separation needs spatial visual information,](https://arxiv.org/html/2608.05816v1/x1.png)

上半部分示意了“分离需位置、定位需分离”的循环依赖以及选择性收敛如何将其拆解为“先主导源、后次导源”的子问题；右侧柱状图显示，无论是边界框真值还是掩码真值，SCAV的CIoU与AUC均明显高于LVS和EZ-VSL。

### 🔗 开源详情

项目主页：https://happy-new-bears.github.io/scav-project-page/。论文声称代码、模型与数据集将会发布（机器摘要中标示 has_code: 是, has_model: 是, has_dataset: 是），但在提供的原文片段中未出现具体的GitHub仓库链接或数据集下载地址；未披露项以项目主页最新更新为准。

### 🏗️ 方法概述和架构

本文提出的 SCAV（Selective Convergence Audio-Visual localisation）框架，旨在自监督条件下解决双源音视频定位问题。其核心洞察是：当对比学习模型面对多个声源时，会自然产生"选择性收敛"现象——模型倾向于收敛到最显著的音视频对应关系，而不会均匀表示所有声源。这一现象使模型可以先将"多源定位"这一循环依赖问题拆解为两个有序步骤：第一步利用选择性收敛定位主导声源，第二步利用该主导声源作为空间先验，进一步解耦并定位剩余声源。

整体输入链路为：一张 RGB 图像 \(I\) 和一段 3 秒混合音频的对数语谱图 \(\mathbf{A}_{\text{mix}}\)。视觉编码器 \(\Phi_v\)（采用 ImageNet 预训练的 ResNet18）提取空间视觉特征 \(\tilde{V}\in\mathbb{R}^{D\times h\times w}\)；音频编码器 \(\Phi_a\)（另一个 ResNet18，其第一层卷积适配为单通道输入）将混合音频编码为全局音频特征 \(\tilde{\mathbf{a}}\in\mathbb{R}^{D}\)。两个编码器共同构成第一阶段的主干网络。

下图展示了SCAV两阶段渐进式框架的整体架构。

![Figure 2: Architecture of our Selective Convergence Audio-Visual localisation (SCAV) framework. Stage 1 (left): We extract visual features VV using a frozen ResNet-18 encoder. The visual features are aligned with audio features 𝐚\\mathbf{a}](https://arxiv.org/html/2608.05816v1/x2.png)

左半部分Stage 1通过视觉与音频编码器进行对比学习，生成主导源空间先验；右半部分Stage 2利用该先验划分视觉特征，并经由视觉解耦器与基于交叉注意力的音频解耦器得到两个声源各自的定位热图。


**第一阶段：选择性收敛与主导源定位。** 在这一阶段，模型通过对比学习训练视觉特征与音频特征间的对应关系。具体地，对每个空间位置 \(p\)，计算相似度 \(\mathcal{S}(p)=\langle \tilde{V}(p),\tilde{\mathbf{a}}\rangle\)，得到相似度图。由于混合音频包含两个声源，理想的相似度图应同时响应两个源；但实验和理论分析均表明，对比损失会放大初始微小的区域差异，使得相似度图最终集中于其中一个声源（即主导源），而另一个声源的响应被显著抑制。这一行为并非显式设计，而是可微阈值机制与梯度更新共同作用下的自然涌现。在损失函数上，第一阶段使用可微阈值将相似度图转换为软正掩码 \(m_p=\sigma((\mathcal{S}(p)-\epsilon)/\tau)\)；然后基于该掩码计算正样本分数 \(P\) 和负样本分数 \(N\)，采用 InfoNCE 形式的对比损失进行优化。训练收敛后，模型输出的相似度图即可作为主导源的空间指示。为了进一步细化该指示，算法 1 对每个空间位置判断其视觉特征更接近峰值响应特征还是背景特征，并据此重新分配响应值，从而得到更紧凑、更具判别性的空间先验 \(\mathbf{M}_{\text{dom}}\)。消融实验显示，即使去掉算法 1，选择性收敛本身已能提供有效的空间先验，说明算法 1 是可选增强项。

**第二阶段：双源解耦与源级对比学习。** 第二阶段利用第一阶段学到的空间先验 \(\mathbf{M}_{\text{dom}}\) 来打破"鸡生蛋"的循环。首先，视觉特征 \(\tilde{V}\) 按照空间先验进行粗划分：
\[
V_1 = \tilde{V}\odot \mathbf{M}_{\text{dom}},\quad V_2 = \tilde{V}\odot (1-\mathbf{M}_{\text{dom}})
\]
其中 \(V_1\) 捕获主导源区域，\(V_2\) 捕获互补区域（包含次导源和背景）。这种划分是粗粒度的，因此引入视觉解耦器 \(\Phi_v^{\text{dec}}\) 对二者进行精炼。\(\Phi_v^{\text{dec}}\) 采用 4 层 Transformer 编码器（8 个注意力头），输入 \(V_1,V_2\)，输出更具判别性的源特定视觉特征 \(f_{v1}, f_{v2}\in\mathbb{R}^{D\times h\times w}\)。接着，音频解耦器 \(\Phi_a^{\text{dec}}\) 通过交叉注意力机制将混合音频特征分离为两个源特定音频特征：以混合音频特征 \(\tilde{\mathbf{a}}\) 作为 query，以 \(f_{v1}\) 和 \(f_{v2}\) 分别作为 key/value，得到 \(f_{a1}, f_{a2}\in\mathbb{R}^{D}\)。这样，每个音频特征 \(f_{ai}\) 可以关注到与其对应的视觉区域，从而提取与该空间位置相匹配的音频成分，实现跨模态解耦。

解耦完成后，对每个源 \(i\in\{1,2\}\) 独立计算相似度图 \(\mathcal{S}_i=\langle f_{vi}, f_{ai}\rangle\)，并通过可微阈值计算正负分数 \(P_i\) 和 \(N'_i\)，优化源级对比损失。与第一阶段不同，第二阶段不包含跨样本负样本，这是因为解耦任务本质上是"样本内源分配"问题——需要区分的对比关系来自同一混合样本中的主导源与次导源，而非不同样本。加入跨样本负样本反而会稀释这种样本内对比信号，导致性能下降。

**推理阶段。** 训练完成后，模型输出两组解耦的音视频对。对每一组计算内积相似度并上采样到原始分辨率，得到最终的双源定位图。由于两组输出没有固有的顺序，在评测时采用匈牙利匹配将预测与真实标注进行最优对齐。

**训练策略与设计动机。** 整个框架采用两阶段渐进式训练：先仅训练第一阶段，使编码器和对比头充分收敛，从而得到稳定的空间先验；随后以该收敛模型为起点，开启第二阶段的解耦器和源级损失进行训练。消融实验表明，若采用端到端联合训练，在相同架构下 CIoU@0.3 仅为 41.84%，而渐进式训练可达 53.27%，验证了渐进式策略的必要性，因为联合训练前期第一阶段尚未收敛，不稳定的空间先验会误导第二阶段解耦器。整个框架在自监督条件下实现了"先定位主导源，再分离剩余源"的渐进式双源定位，有效规避了多源定位中固有的循环依赖难题。

### 💡 核心创新点

1. **发现选择性收敛现象**：自监督对比模型在双源输入下会优先收敛到最显著的单源对应，而非均匀表示所有源。本文通过理论和实验证明该现象源于可微阈值化机制对初始不平衡的赢家通吃放大，是简洁性偏置（simplicity bias）在多源视听场景的具体实例。
2. **提出渐进式两阶段定位框架（SCAV）**：第一阶段利用选择性收敛定位主导源，第二阶段将该主导源作为空间先验，通过视觉与音频解耦器逐步揭示次导源，有效打破多源定位的循环依赖。
3. **揭示并理论分析评估协议的系统性偏差**：证明source-wise评估（多数基线使用）因将预测热图限制在对应半幅并忽略跨源激活，其IoU指标恒不低于frame-wise评估（本文使用），因此与部分引用数值的直接对比需谨慎。
4. **提出像素级基准VGGSound-DuetMask**：基于SAM和人工挑选构建了迄今最大规模的多源分割掩码测试集（220类、3,951样本），为社区提供空间对齐评估；实验表明掩码评估下SCAV的优势更明显。

### 📊 实验结果

我们在三个现有基准和一个新掩码基准上评估SCAV。表1为边界框评估结果，表2为消融研究。

下图给出了SCAV与基线模型在多源声源定位上的定性对比。

![Figure 4: Qualitative comparison of multi-source sound localisation. For each test sample containing mixed audio from two sources, from left to right,](https://arxiv.org/html/2608.05816v1/x4.png)

在同时存在两个发声源的场景中，LVS与EZ-VSL往往只产生单一或弥散的激活区域，而SCAV能够为每个源分别生成聚焦的热图，直观地解释了定量指标上的提升来源。


**表1：双源定位基准定量结果（BBox评估）**

| 方法 | Self-Sup. | MUSIC-Duet CIoU@0.3(%) | MUSIC-Duet AUC(%) | MUSIC-Duet CAP(%) | VGGSound-Duet CIoU@0.3(%) | VGGSound-Duet AUC(%) | VGGSound-Duet CAP(%) |
|---|---|---|---|---|---|---|---|
| CoarsetoFine (ECCV'2020) | ✗ | 17.6 | 20.6 | - | 14.7 | 18.5 | - |
| AVGN (CVPR'2023) | ✗ | 32.5 | 24.6 | 50.6 | 26.2 | 23.8 | 21.9 |
| OA-SSL (CVPR'2025) | ✗ | 45.9 | 36.1 | 64.1 | 55.2 | 44.8 | 45.9 |
| DSOL (NeurIPS'2020) | ✓ | 30.1 | 22.3 | - | 22.3 | 21.1 | - |
| LVS (CVPR'2021) | ✓ | 22.5 | 20.9 | - | 17.3 | 19.5 | - |
| Mix-and-Localize (CVPR'2022) | ✓ | 26.5 | 21.5 | 47.5 | 21.1 | 20.5 | 16.3 |
| NoPrior (CVPR'2024) | ✓ | 2.5† | 13.2 | 21.7 | 18.1 | 16.8 | 26.8 |
| **SCAV (Ours)** | ✓ | **47.1** | **28.6** | 47.6 | **53.3** | **32.0** | **53.0** |

注：\*Mix-and-Localize 在 VGGSound-Duet 上按 frame-wise 协议重跑；OA-SSL 与 AVGN 按原文报告。†NoPrior 为本文按 frame-wise 复现的结果，详见附录 F。

**表2：VGGSound-Duet 消融研究（BBox评估）**

| Setting | 关键差异 | CAP(%) | CIoU@0.1(%) | CIoU@0.3(%) | AUC(%) |
|---|---|---|---|---|---|
| (a) | 第二阶段+均匀掩码（无学习先验） | 37.23 | 73.38 | 28.94 | 21.94 |
| (b) | 无第二阶段（仅第一阶段） | 38.65 | 75.15 | 32.66 | 22.97 |
| (c) | 联合端到端训练（无渐进策略） | 45.17 | 79.41 | 41.84 | 26.88 |
| (d) | 第二阶段加入跨样本负样本 | 35.68 | 67.38 | 26.69 | 20.93 |
| **Ours** | 完整渐进式框架 | **52.96** | **83.17** | **53.27** | **31.96** |

在掩码评估下，SCAV 在 VGGSound-Instruments 上 CAP 32.0%、AUC 21.1%，为自监督最优，CIoU@0.1 76.0% 具竞争力。在本文新提出的 VGGSound-DuetMask 基准上，SCAV 全面领先：CAP 39.30%、CIoU@0.1 69.42%、CIoU@0.3 33.59%、AUC 23.52%，显著优于 AVGN（弱监督）与 NoPrior、Slot-Attn 等自监督基线。消融显示，渐进式训练较联合训练高 11.43 个百分点的 CIoU@0.3（53.27% vs 41.84%），加入跨样本负样本使 CIoU@0.3 暴跌至 26.69%，验证了第二阶段"样本内源分配"的设计。

下图展示了边界框真值与像素级定位热图之间的差异。

![Figure 3: Bounding box evaluation can be misleading. Shown by four representative examples.](https://arxiv.org/html/2608.05816v1/x3.png)

上排绿色边界框往往覆盖发声物体周围的大量背景，而下排SCAV预测的热图则更精确地贴合真实声源区域，说明像素级掩码评估能够更严格地衡量定位质量。

### 🔬 细节详述

训练时，输入图像调整为224×224，音频按22.05kHz采样并用STFT（50ms窗口、25ms hop）转为3秒log-spectrogram。视觉编码器为ImageNet预训练的ResNet18；音频编码器为第一层卷积改单通道的ResNet18。视觉解耦器是4层、8注意力头的Transformer编码器；音频解耦器采用交叉注意力。

第一阶段仅训练编码器，以可微阈值化的InfoNCE对比损失学习主导源对应（式3–6），其中正阈值 \(\epsilon_p=0.65\)、负阈值 \(\epsilon_n=0.4\)、sigmoid温度 \(\tau=0.03\)。第二阶段从第一阶段收敛模型继续训练完整架构（编码器+解耦器），优化源级对比损失 \(\mathcal{L}_{\text{Stage2}}=\mathcal{L}_1+\mathcal{L}_2\)（式12–13）。此处并非冻结编码器，而是由已收敛的第一阶段产生稳定空间先验 \(\mathbf{M}_{\text{dom}}\)、驱动解耦模块进行源级分离；消融(c)证实联合训练因先验不稳定而性能大降。使用Adam优化器，学习率 \(10^{-4}\)，batch size 256。推理时模型执行单次前向传播，在NVIDIA A100上达43.2 FPS。双源预测采用匈牙利匹配（式23）进行最优分配后再计算指标。评估协议上，与Mix-and-Localize和DSOL一致采用frame-wise（式25），并因此重跑了NoPrior（附录F）与Mix-and-Localize，保证对比公平性。

### ⚖️ 评分理由

*   创新性 (1.4/2)：提出选择性收敛现象并将双源视听定位拆成主导源定位与源级解耦两阶段，打破循环依赖；附录E以定理形式刻画赢家通吃机制，并提出像素级DuetMask基准与source-wise评估偏差分析，方法增量明确。[A_SUMMARY][A_METHOD][SCORING_SOURCE_16][SCORING_SOURCE_35]

*   技术严谨性 (1.0/1.5)：附录E在特征正交、低噪声假设下对选择性收敛给出梯度放大证明，逻辑自洽；但主导源身份由数据初始不平衡决定，论文未提供可控性分析，理论边界受限。[SCORING_SOURCE_31][SCORING_SOURCE_35][A_LIMITS]

*   实验充分性 (0.9/1.5)：覆盖MUSIC-Duet、VGGSound-Instruments、VGGSound-Duet及新掩码基准，包含多组自监督/弱监督基线和消融、失败分析；但表1中OA-SSL、AVGN等直接沿用source-wise数值，source-wise恒不低于frame-wise，削弱公平对比，且新基准未报告标注一致性。[A_RESULTS][SCORING_SOURCE_13][SCORING_SOURCE_28][A_LIMITS]

*   清晰度 (0.8/1)：式(1)-(14)、Figure 2和算法1完整展示两阶段渐进式流程，训练与推理链路清楚；附录D对frame-wise/source-wise给出形式化定义和验证片段，整体可读性良好。[A_METHOD][SCORING_SOURCE_10][SCORING_SOURCE_26]

*   影响力 (1.0/1.5)：在自监督双源视听定位上取得领先，并提出更严格的掩码评估基准和协议修正，对音频-视觉定位社区有方法加评测的双重推动。[A_SUMMARY][A_RESULTS][SCORING_SOURCE_16]

*   开源 (0.5/1.5)：仅提供项目主页并声明代码、模型与数据集将发布，尚无直接可访问的仓库或下载链接，按固定锚点记为承诺未来开放但未发布档。[A_OPEN][SCORING_SOURCE_1]

*   可复现性 (0.3/0.5)：已披露输入/STFT参数、ResNet18/Transformer结构、Adam、lr=1e-4、batch=256、A100与FPS，附录F还说明NoPrior复现修改；但可见配置未含完整训练轮数/学习率调度，复现步骤仍有缺失。[SCORING_SOURCE_10][SCORING_SOURCE_11][SCORING_SOURCE_21]

*   工程/实践价值 (0.9/1.5)：推理时单次前向、A100上43.2FPS，具备实时部署潜力；自监督免标注流程降低数据成本。但固定7×7空间分辨率造成小/大物体定位边界不精确，工程适用范围受限。[SCORING_SOURCE_11][A_LIMITS]

### 🚨 局限与问题

原文明确指出的限制包括：1) 固定7×7空间分辨率使小物体（如小提琴）和大物体（如钢琴）的定位边界不精确；2) 当双源音量严重失衡时，选择性收敛可能使模型忽略弱势源，导致第二阶段无法分离；3) 模型偶发倾向于定位视觉显著区域（如人脸）而非真实声源。此外，值得注意的问题还有：4) 第一阶段主导源的定义是事后根据IoU挑选的，论文未对"为何选择该源"提供可控性分析，初始偏置来源不明；5) 表1的协议问题——OA-SSL、AVGN及多个自监督基线数字直接引自原文（source-wise），而source-wise恒不低于frame-wise，可能系统性抬高对比优势；6) 新基准VGGSound-DuetMask使用SAM+人工挑选生成掩码，但未报告标注一致性（如Cohen's Kappa）或人工挑选的统计分布，基准可靠性证据不足；7) 论文未披露通讯作者与明确代码仓库地址，仅提供项目主页，影响可复现性评估。

---

[← 返回 2026-08-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-07/)
