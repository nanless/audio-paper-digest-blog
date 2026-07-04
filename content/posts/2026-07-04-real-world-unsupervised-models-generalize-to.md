---
title: "Real-World Unsupervised Models Generalize to Predict Brain Responses to Out-of-Distribution Stimuli"
date: 2026-07-04
draft: false
tags: [模型评估]
categories: [icml-2026]
description: "模型评估 | 6.9/10"
hiddenInHomeList: true
---

# 📄 Real-World Unsupervised Models Generalize to Predict Brain Responses to Out-of-Distribution Stimuli

#模型评估

**6.9/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1.3/1.5 | 清晰 0.7/1 | 影响 1/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

✅ **6.9/10** | 前50% | #模型评估 | #无监督学习 | [arxiv](https://openreview.net/forum?id=H1HHss5Zj4)


### 👥 作者与机构

- 第一作者：Chenggang Chen（约翰霍普金斯大学生物医学工程系）
- 通讯作者：Chenggang Chen（约翰霍普金斯大学生物医学工程系）
- 作者列表：Chenggang Chen（约翰霍普金斯大学生物医学工程系）、Zhiyu Yang（约翰霍普金斯大学生物医学工程系）、Xiaoqin Wang（约翰霍普金斯大学生物医学工程系）

修正说明：原文作者名单中，所有三位作者均归属于同一机构（约翰霍普金斯大学生物医学工程系），使用数字上标“1”标注。原分析中重复标注机构的方式已修正。

### 💡 毒舌点评

本文以扎实的实验论证了“真实世界数据+无监督学习”对脑反应预测的碾压级优势，跨模态OOD泛化令人印象深刻，且逻辑链条清晰。但作为顶会spotlight，方法原创性偏弱——本质是对已有无监督模型的组合与评估，缺少新算法或理论洞见；关键的贡献仅停留在“数据分布最重要”的benchmark结论层面，若不能在后续给出可操作的模型设计原则或理论解释（为何真实世界统计特性如此关键），其影响力将随模型迭代而快速衰减。视觉部分的架构混杂问题削弱了论证力度，整体仍是一篇优秀但未达卓越的验证性工作。

### 📌 核心摘要

本文旨在回答“什么样的训练数据和目标能让深度神经网络更准确地预测大脑感觉皮层的反应”。作者提出，模型的生态效度关键在于训练数据的真实世界统计特性（而非架构或规模），且无监督目标更符合生物学习的约束。方法上，系统比较了19个听觉模型（包括HuBERT、Wav2Vec2等无监督模型，以及多种监督模型）在人类听觉皮层的两个fMRI数据集上的预测表现，同时将分析延伸至视觉皮层（婴儿视角视频训练的ResNeXt）。核心新意在于显式地解耦数据分布、学习目标和架构的贡献，并首次展示无监督真实世界模型对OOD刺激的跨语种/跨域泛化能力。主要结果：在听觉皮层预测上，基于真实多场景普通话训练的HuBERT_speech和Wav2Vec2_speech在NH2015数据集上分别达到0.773和0.743的噪声校正解释方差，比之前的最佳监督模型（CochResNet50-MultiTask, 0.729）提升6%和1.9%；在视觉皮层，婴儿视角无监督模型在Brain-Score上领先第二名（swin-small）47%以上，且camSAY-ResNeXt（0.249-0.259）与大规模ID评估的DINOv2/v3模型（0.251-0.262）分数相当，尽管其训练数据规模远小且为OOD评估。实际意义在于为神经科学计算建模提供了“数据分布 > 监督信号”的明确证据，并暗示真实环境的噪声、长尾分布和高动态范围可能是获得类脑表征的关键归因偏置。主要局限是评价指标仍限于相关性和预测对齐而非因果机制，且未在多种母语/文化背景下验证。

### 🔗 开源详情

- 代码：论文中未提及本研究相关的独立代码仓库链接。
- 模型权重：
  - HuBERT_speech 与 Wav2Vec2_speech（在 WenetSpeech 上预训练的 Base 版本）：https://huggingface.co/TencentGameMate
  - HuBERT_LS（LibriSpeech 预训练）：https://huggingface.co/facebook/hubert-base
  - Wav2Vec2_LS（LibriSpeech 预训练）：https://huggingface.co/facebook/wav2vec2-base
  - HuBERT_core (AVES-core)：https://github.com/earthspecies/aves
  - camSAY 模型（婴儿视角预训练）：https://github.com/eminorhan/baby-vision
  - 其他公开模型（AST、VGGish、S2T、Wav2Vec2FT、CochCNN9/ResNet50 等）的权重可从各自原始项目获取（见下方开源项目列表），论文未直接给出这些模型的独立权重文件链接。
- 数据集：
  - WenetSpeech：https://wenet-e2e.github.io/WenetSpeech/
  - LibriSpeech：http://www.openslr.org/12
  - FSD50k：https://zenodo.org/record/4060432
  - AudioSet：https://research.google.com/audioset/
  - YouTube-8M：https://research.google.com/youtube8m/
  - Million Song Dataset：http://millionsongdataset.com/
  - SAYCam：https://saycam.stanford.edu/
  - Word-Speaker-Noise 数据集 (Feather et al., 2019)：论文中未提供公开下载链接。
  - fMRI 数据集 (NH2015, B2021)：分别来自 Norman-Haignere et al. (2015) 与 Boebinger et al. (2021)，可向原始作者索取，论文未提供直接下载链接。
  - Brain-Score 中的视觉 fMRI 数据集（Coggan & Tong, 2023; Bracci et al., 2019）：随 Brain-Score 项目一起分发（见下方）。
- Demo：论文中未提及。
- 复现材料：无统一实验代码或一键复现脚本。
- 论文中引用的开源项目：
  - HuggingFace Transformers：https://github.com/huggingface/transformers
  - Fairseq（S2T, Wav2Vec2 等）：https://github.com/facebookresearch/fairseq
  - AVES（HuBERTcore）：https://github.com/earthspecies/aves
  - Baby Vision（camSAY 模型）：https://github.com/eminorhan/baby-vision
  - AST（Audio Spectrogram Transformer）：https://github.com/YuanGongND/ast
  - VGGish：https://github.com/tensorflow/models/tree/master/research/audioset/vggish
  - Brain-Score：https://github.com/brain-score/brain-score
  - Librosa（音频分析）：https://github.com/librosa/librosa
  - Silero VAD（语音活动检测）：https://github.com/snakers4/silero-vad
  - pyannote.audio（说话人分类）：https://github.com/pyannote/pyannote-audio
  - DNSMOS（语音质量评估）：https://github.com/microsoft/DNS-Challenge
  - TencentGameMate Chinese Speech Pretrain：https://github.com/TencentGameMate/chinese_speech_pretrain

### 🏗️ 方法概述和架构

本文并非提出新的神经网络架构，而是一套系统的模型-脑对齐评估流水线，用于比较不同预训练范式下的听觉与视觉模型在预测人类fMRI反应上的性能。

整体流程：
给定一组自然刺激（165个日常声音或视觉客体图像），先通过多个预训练的DNN提取其层次化特征表示，再使用两种互补的映射方法（编码模型和表征相似性分析RSA）将模型特征与fMRI响应进行对齐，最终量化模型对大脑反应的预测/相似性得分。[图2]清晰地展示了从刺激到模型特征提取，再到两种对齐分析（编码与RSA）的核心流程。

听觉主要组件及交互：
1.  模型集构建与特征提取：在原有14个监督模型（Tuckute et al., 2023）基础上，新增5个无监督模型（HuBERT_base、Wav2Vec2_base），并控制训练数据源：
    *   架构：HuBERT和Wav2Vec2两种框架，均采用相同的Transformer主干（7层卷积特征提取器 + 12层Transformer编码器，约95M参数，Base配置），但优化不同的无监督目标（HuBERT：掩码预测离散聚类分配；Wav2Vec2：对比损失+多样性正则），以此控制架构变量。
    *   训练数据：
        *   WenetSpeech：10000+小时多场景普通话，含背景噪声、重叠说话者、多变风格（图9, 10），训练得到 HuBERT_speech 和 Wav2Vec2_speech。
        *   LibriSpeech-960h：英语朗读语音（净室），训练得到 HuBERT_LS 和 Wav2Vec2_LS（作为控模型）。
        *   FSD50K+AudioSet (153小时)：自然/动物声音，训练得到 HuBERT_core (AVES-core)。
    *   监督基线：包括AST, VGGish, S2T, Wav2Vec2_FT（LibriSpeech上预训练后微调），以及CochCNN9/CochResNet50架构的多种任务模型（词/说话人/声事件/多任务/音乐流派分类）。
    *   特征提取：所有模型均提取各层输出的时间平均特征向量作为刺激表征。对于Transformer架构，从卷积特征提取器的初始层和所有12个Transformer块的前馈网络投影层提取，共14层表征。
2.  脑反应数据与预处理：
    *   NH2015 (n=8) 和 B2021 (n=20，含10名音乐家和10名非音乐家)：被试聆听同一套165个2秒自然声音（含语音、音乐、环境声等），并执行强度辨别任务。
    *   fMRI数据经预处理，并对响应进行平均以匹配刺激时长。
3.  预测对齐计算：
    *   编码模型 (voxel-wise encoding)：对每个体素，使用L2正则化线性回归（Ridge）将模型阶段特征映射到体素的BOLD反应。通过内层交叉验证优化正则化参数λ，在留出刺激上计算噪声校正的解释方差（\(r^2\)）。
    *   表征相似性分析 (RSA)：分别构建模型和大脑的刺激间表征差异矩阵（RDM, 1-皮尔逊r），计算两者的斯皮尔曼相关。通过10折交叉验证（每折按刺激分割训练/测试集）选择最佳模型层，避免过拟合，最终取测试集相关的中位数。
    *   全局与局部几何分析：为精细比较，引入中心核对齐（CKA）评估RDM的全局相似度，互k近邻（MkNN）分析局部邻域保持特性。CKA通过对RDM双中心化后计算归一化HSIC实现。[图17]展示了MkNN的核心发现：监督模型（ResNet50multitask）在小邻域（k<40）更优，而无监督模型（HuBERT_speech）在大邻域（全局结构）更优。
4.  跨模态泛化测试：在听觉端，模型仅用普通话训练但预测英语母语者的脑反应；在视觉端，模型仅用婴儿日常视角训练但预测成人观看标准客体图片的脑反应。由此构成严格的OOD泛化评测。
5. 成分选择性分析：利用Norman-Haignere et al. (2015)的六成分分解模型，评估各模型对特定功能调谐成分（如语音选择性成分）的预测能力。

视觉主要组件及交互：
1.  模型集：使用在SAYCam数据集（婴儿头戴摄像机，约415小时日常视频）上，以时序分类（TC）目标无监督训练的ResNeXt-50(32x4d)系列模型（camS, camA, camY, camSAY），以及更大变体（ResNeXt-101-32x8d, ResNeXt-101-64x4d）。
2.  控制基线：同架构的ImageNet预训练ResNeXt，以及大规模ID预训练的DINOv2/v3（ViT架构）。
3.  脑数据与基准：使用Brain-Score平台的两个高场fMRI数据集：
    *   `tong.Coggan2024 fMRI.IT` (7T, 80张图像，含面孔、身体、房屋、物体)。
    *   Bracci et al. (2019) 数据集 (3T, 27张动物/物体/"形似物"三元组)，评估前腹侧颞叶皮层。
4.  评估：通过Brain-Score进行编码模型评估。

关键设计选择及动机：
*   架构控制：确保对比组（如HuBERT与Wav2Vec2）采用相同的Transformer主干及参数量，从而将预测差异归因于训练数据和目标。
*   多层级评估：同时采用编码模型和RSA，前者侧重体素级超调预测，后者捕捉表征几何结构，互为补充，并进一步通过CKA和MkNN分解全局与局部对齐。
*   数据多样性量化：对WenetSpeech与LibriSpeech进行了详尽的声学质量（DNSMOS）、信噪比、重叠语音率等统计分析（图9, 10），明确了“真实世界数据”的高动态范围和噪声特性。




### 💡 核心创新点

1.  首次系统地解耦数据分布、无监督目标与架构对大脑预测能力的贡献。过去工作常混在一起，本文通过固定架构（HuBERT vs Wav2Vec2）、控制目标、变动数据源（净室朗读 vs. 多场景普通话 vs. 自然声）证明数据分布才是主导因素。
2.  证明无监督真实世界模型具有显著的OOD泛化能力：普通话训练预测英语脑反应，婴儿视角预测成人标准图像脑反应，颠覆了“匹配语言/视觉域才能最佳预测”的既有认知。
3.  通过全局-局部对齐分析（CKA + MkNN）揭示了无监督模型与监督模型在表征层次上的分工：监督模型擅长精细声学聚类，无监督模型更好捕捉全局类别结构，从而提供了层次化对齐的新视角。[图17]和[图9]为这一创新点提供了关键的视觉证据。
4.  在听觉皮层与视觉皮层两个模态上实现了一致性结论，增强了结论的普适性——真实世界无监督训练能产生更类脑的通用感觉表征。

### 📊 实验结果

听觉皮层预测主要结果：

[图6]以箱线图形式直观展示了不同模型在NH2015数据集（编码模型）上的预测性能分布。可以清晰看到，使用真实世界普通话训练的HuBERT_speech和Wav2Vec2_speech（深绿色和深蓝色箱线）的\(r^2\)值分布显著高于其他模型，尤其是监督模型和使用LibriSpeech训练的无监督模型。

| 模型 | NH2015 噪声校正方差解释率 (\(r^2\)) | B2021 噪声校正方差解释率 (\(r^2\)) |
|------|-------------------------------|-------------------------------|
| HuBERT_speech (真实世界普通话) | 0.773 | 0.6905 (RSA第一，编码模型文中未列具体值但称第一) |
| Wav2Vec2_speech (真实世界普通话) | 0.743 | 紧随HuBERT_speech之后 |
| 前最佳监督模型 (CochResNet50-MultiTask) | 0.729 (原SOTA) | 0.461 (RSA原SOTA) |
| HuBERT_LS (LibriSpeech 净室) | 0.6708 | 0.6905 (编码模型) / 0.3396 (RSA) |
| HuBERT_core (自然声音，153小时) | 0.6949 | 0.6758 (编码模型) / 0.3923 (RSA) |

RSA分析（图3，[图7]）：HuBERT_speech 与 Wav2Vec2_speech 在NH2015/B2021上均取得顶尖排名。其中，B2021数据集上，HuBERT_speech (0.488) 和 Wav2Vec2_speech (0.473) 的RSA得分分别超越前SOTA (0.461) 5.9%和2.6%。

关键消融/对比实验：
- 数据分布 vs 数据量：HuBERT_core（153小时真实数据）在B2021的RSA指标上超过HuBERT_LS（960小时净室数据）15.5%（表2），强烈表明真实数据分布比数据量是关键因素。
- 无监督 vs 有监督细粒度对比：MkNN分析（[图17]）显示监督模型在小邻域（k < 40）更匹配脑的局部声学聚类，而无监督模型在大邻域更匹配全局类别结构。
- 语音成分分析（图5, 6）：HuBERT_speech对语音选择性神经成分的预测解释了88%的方差，Wav2Vec2FT（微调后）对此成分的预测力显著提升，表明微调可增强特定任务表征的对齐。
- RDM可视化（图4）：HuBERT_speech的RDM在音乐、语音等主要类别上与人脑fMRI的RDM高度相似，尤其捕捉到了“声乐”作为语音和音乐之间桥梁的表征结构，而监督模型CochResNet50-MultiTask无法复现此特性。
- CKA分析：HuBERT_speech在全局RDM结构上一致性更高（NH2015: 0.7182 vs. ResNet50multitask 0.7012; B2021: 0.7331 vs. 0.7013）。

视觉皮层预测：

[图8]（[图12]）展示了婴儿视角模型在多个视觉脑区上的Brain-Score表现，其在IT皮层的优势尤为突出。

Brain-Score (`tong.Coggan2024 fMRI.IT`)：
| 模型 | Brain-Score |
|------|-------------|
| camSAY-ResNeXt-50 (婴儿视角) | 0.438 (所有模型第1) |
| camY-ResNeXt-50 | 0.4167 |
| camS-ResNeXt-50 | 0.4137 |
| camA-ResNeXt-50 | 0.393 |
| 前最佳 (swin-small) | 0.267 |

Bracci 数据集对比 (`ant-VTC`)：
| 模型类别 | Brain-Score范围 |
|----------|-----------------|
| camSAY系列 (ResNeXt OOD) | 0.249 - 0.259 |
| DINOv2/v3 (ViT, ID评估) | 0.251 - 0.262 |
| ImageNet系列 (ResNeXt) | 0.169 - 0.210 |

即便使用更老、更小的架构（ResNeXt-50）和OOD评估，bababy-vision系列模型在Bracci数据集上也达到了与大规模ID评估的DINOv2/v3（ViT架构）相当的性能。




### 🔬 细节详述

- 训练数据：听觉模型使用LibriSpeech-960h（英语朗读）、WenetSpeech（10000+小时普通话多场景）、FSD50k+AudioSet（153小时自然声）；监督基线使用Word-Speaker-Noise集、Million Song Dataset等；视觉模型使用SAYCam婴儿头戴摄像机视频（~415小时）。WenetSpeech含10个不同域（图9），展现出高动态范围、噪声和交叠语音等特性（图10）。预处理：听觉均重采样16kHz、单声道、标准化；视觉采用SimCLR风格数据增强（随机裁剪、颜色抖动、高斯模糊等）。[图10]量化了WenetSpeech和LibriSpeech在信号质量、背景噪声抑制、总体质量（DNSMOS）、静音比、有效语音比和重叠语音比等方面的差异。
- 损失函数：HuBERT使用掩码预测离散聚类分配（交叉熵损失）；Wav2Vec2使用对比损失+多样性正则；视觉模型使用时序分类（TC）损失。监督模型采用交叉熵或CTC损失。
- 训练策略：对于新增模型，作者直接使用预训练checkpoint，未重新训练。HuBERT_speech等模型由TencentGameMate在8-16块A100上预训练。视觉camSAY模型在SAYCam上训练16个epoch，batch_size=256。
- 关键超参数：均为公开模型的默认基准配置。HuBERT/Wav2Vec2为Base版（~95M参数，嵌入维度768）。视觉ResNeXt为50或101层，不同组数和宽度。CochCNN9/ResNet50输入为211通道的ERB尺度的耳蜗图。
- 评估与统计：编码模型使用内层交叉验证选择Ridge回归的λ参数，计算噪声校正的解释方差。RSA使用10折交叉验证（按刺激划分）选取最佳层，取测试集Spearman ρ的中位数。补充表2提供了HuBERT_core和HuBERT_LS对比的t检验和p值。
- 推理细节：特征提取时对所有层输出做全局平均池化，得到固定长度向量（768维）。

### ⚖️ 评分理由

*   创新性 (1.3/2)：将神经对齐的重心从架构搜索转向数据分布和目标函数，并首次显示真实世界无监督模型的跨模态OOD泛化能力，这一洞察打破了“匹配数据域才有最佳预测”的固有观念，具有一定新意。通过CKA/MkNN分解全局-局部对齐也是方法论上的贡献。然而方法本身是对已有公开模型的系统性评估，缺乏全新的算法或理论贡献，创新主要体现在实验发现，因此未达1.5以上。

*   技术严谨性 (1.0/1.5)：分析逻辑清晰，对比设计合理（固定架构、控制数据），并采用了互补的编码模型、RSA、CKA、MkNN等多种指标，避免了单一指标的片面性。然而，除补充表2中关于HuBERT_core vs. HuBERT_LS的对比外，对其他核心声明（如HuBERT_speech vs 前SOTA）未提供显著性检验，削弱了结论的统计学稳健性。视觉部分的OOD泛化分析中，与DINOv2/v3的对比存在架构混杂（ResNeXt vs ViT），虽然使用同架构ImageNet模型作为基线，但无法完全排除ViT的归纳偏置贡献，控制不够严格。

*   实验充分性 (1.3/1.5)：实验的广度与深度均较充分：两模态、两套fMRI数据集、19个听觉模型、视觉基准497个模型参与对比；涵盖了数据规模消融、架构控制、多种评估指标；对双模型激活模式差异也有可视化解释（[图14]）。主要欠缺是对视觉OOD泛化只提供了Brain-Score一个维度的结果，且没有消融视觉数据集的自然程度变体；对跨文化、跨母语通用性未验证。

*   清晰度 (0.7/1)：整体组织结构清晰，图表质量高，RDM和MkNN等结果直观。但方法部分多处关键细节缺失或分散于补充材料（如视觉模型的具体预处理流程、特征提取层选择标准、S2T模型的输出token集等），缺乏独立的复现性说明小节；某些图表编号在正文中直接引用的逻辑稍显混乱，减弱了可读性。

*   影响力 (1.0/1.5)：本文为神经科学计算建模提供了明确的“数据分布 > 数据量/监督目标”纲领，其结论可能影响未来听觉和视觉皮层模型的设计与训练数据的构建思路。与语音/音频/视觉领域读者直接相关，因为证明无监督训练在真实环境中能学到更类脑的表征。但影响力受限于以下因素：结论仍停留在“哪种现有模型更好”的benchmark阶段，没有提出可指导新模型设计的原则或产生可泛化的新方法，后续工作的引用动力可能不足以激发大规模跟进。

*   开源 (0.5/1.5)：所有使用的神经网络模型均通过HuggingFace或GitHub提供了公开预训练权重，这是复现评估流程的基础。但作者未提供自己的评估代码、特征提取脚本、RSA/编码分析工具，也未公开生成的模型激活和脑响应对齐数据。因此只有模型权重是间接开源的，核心benchmark流水线未开源，属于部分开源。

*   可复现性 (0.3/0.5)：论文说明了所用fMRI数据集的来源和基本的特征提取步骤（全局平均池化），但缺失许多关键复现细节：视觉特征提取的具体层选择、Ridge回归的交叉验证折数、正则化参数λ的搜索网格、CKA/MkNN的具体实现参数等均未详述。完全复现分析仍需大量工程投入或联系作者。

*   工程/实践价值 (0.8/1.5)：工作构建了一套较完整的模型-脑对齐评估流程，可作为未来听觉与视觉表征学习研究的评测模板，具有一定工具价值。但其工程化程度较低：未提供可直接运行的benchmark代码包，也缺乏对大规模线下部署所需效率和稳定性考量，因此暂不具备工业级落地能力。

### 🚨 局限与问题

论文明确承认的局限：
- 编码模型和RSA等指标表现好不等于机制对应（文中提及需补充因果分析）。
- 当前仅测试了普通话训练→英语脑反应的跨语言泛化，预期匹配母语可能进一步提升性能。

审稿人发现的潜在问题：
1.  OOD泛化声明的控制不完美：普通话WenetSpeech中包含大量背景噪声、音乐和自然声，而英语脑反应刺激也是日常声音。模型可能主要学到了更鲁棒、更通用的声学特征，而非严格意义上的“跨语言”泛化。缺乏一个用纯英语日常语音（非净室朗读）训练的无监督模型作为控制，使得“跨语言”OOD泛化的论点有被削弱的风险。
2.  视觉部分架构混杂：与DINOv2/v3的对比使用了ResNeXt vs ViT两种截然不同的架构。虽然作者用同是ResNeXt的ImageNet模型作为对照，但DINO的强性能可能部分源于ViT的归纳偏置或极大规模的数据，而非纯粹的数据分布差异，直接比较的说服力不足。
3.  统计效力未充分报告：除了补充表2的特定对比，全文核心图表（如[图2]，[图6]）未给出置信区间或误差棒。部分声称的提升幅度（如听觉RSA从0.461到0.488）在n=8或n=20的样本量下是否显著，未经检验，削弱了证据强度。
4.  对“真实世界”定义的泛化：文中将WenetSpeech（多域普通话语音）、FSD50k（自然声/动物声）、SAYCam（婴儿视觉）均归为“真实世界”，但它们的内在统计特性（如长尾分布程度、噪声类型、领域广度）差异巨大。使模型获益的关键统计量（是噪声、长尾性还是其他？）没有被统一厘清，论断的精细度有待提升。
5.  对下游任务的潜在影响未讨论：论文指出真实世界无监督预训练提升了对脑的预测力，但未讨论这是否以牺牲在标准工程任务（如ASR、声事件分类）上的性能为代价。如果存在trade-off，会降低其在工业界的参考价值。HuBERT_core在SUPERB上的高准确率（96.4%）提供了一个正面信号，但该分析深度不足。

### 📷 论文图片



---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
