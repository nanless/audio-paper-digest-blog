---
title: "SPEAR: A Unified SSL Framework for Learning Speech and Audio Representations"
date: 2026-07-04
draft: false
tags: [音频理解, 语音识别]
categories: [icml-2026]
description: "音频理解 | 8.4/10"
hiddenInHomeList: true
---

# 📄 SPEAR: A Unified SSL Framework for Learning Speech and Audio Representations

#音频理解 #语音识别

**8.4/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1.3/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 0.8/1.5

🔥 **8.4/10** | 前25% | #音频理解 | #自监督学习 | #语音识别 | [arxiv](https://openreview.net/forum?id=vHaaDCLF0M)


### 👥 作者与机构

- 第一作者/通讯作者：Xiaoyu Yang（Department of Engineering, University of Cambridge）
- 作者列表：Xiaoyu Yang（University of Cambridge）、Yifan Yang（Shanghai Jiao Tong University）、Zengrui Jin（Tsinghua University）、Ziyun Cui（Tsinghua University, Shanghai Artificial Intelligence Laboratory）、Wen Wu（Shanghai Artificial Intelligence Laboratory）、Baoxiang Li（Shanghai Artificial Intelligence Laboratory）、Chao Zhang（Tsinghua University, Shanghai Artificial Intelligence Laboratory）、Phil Woodland（University of Cambridge）

### 💡 毒舌点评

SPEAR 用多码本矢量量化（MVQ）这把快刀，把语音和音频两个域的知识剁成离散 token，再让 Zipformer 用掩码预测全吞下去。思路直接有效，在 SUPERB 和 HEAR 上双线刷榜，token mixing 更是让分离任务表现惊艳。但整个框架的命门在于强依赖教师模型质量，训练 pipeline 重得像个工程怪兽，且音频数据仅 13k 小时，想在纯音乐或环境声上压制音频大模型还差火候。说是统一框架，但目前还是个理解专才，生成任务的门都没摸到。

### 📌 核心摘要

SPEAR 旨在解决语音和通用音频表示学习中长期存在的领域割裂问题。现有 SSL 模型要么专注语音的语义/副语言信息，要么专注音频的细节声学模式，难以在单一编码器中同时登顶。SPEAR 的核心是将两个领域专用教师模型（语音用 WavLM Large，音频用 Dasheng 1.2B）的连续表示，通过多码本矢量量化（MVQ）转化为细粒度离散 token，再用掩码预测任务训练学生编码器（Zipformer）去同时预测这两套离散 token。与先前纯特征匹配的蒸馏方法（如 USAD、MT2KD）不同，SPEAR 利用离散接口避免了跨空间对齐带来的破坏性干扰，并引入非对称双域损失和 token mixing 机制来进一步提升复杂声学场景下的鲁棒性。实验上，SPEARs Large 在 SUPERB 基准的 15 项任务中有 12 项超过其教师 WavLM Large，在 HEAR 基准上也取得了顶级得分；统一模型 SPEARs+a 在保持强语音性能的同时大幅改善了音频理解能力，且始终优于 USAD。实际意义上，SPEAR 提供了一个可同时处理语音和音频事件的通用前端，有望简化多模态音频系统的搭建。主要局限包括：依赖预训练的强教师模型造成额外计算开销；音频预训练数据占比小，在纯音乐和某些环境声音任务上仍落后于以音频为主的大模型；尚未涵盖生成任务。

### 🔗 开源详情

- 代码：论文中提及代码将与预训练模型一并发布（"The code and pre-trained models will be released"），但未在文中给出明确的 GitHub 仓库链接。
- 模型权重：https://huggingface.co/collections/marcoyang/spear-encoders （已在论文首页脚注给出）
- 数据集：论文中未提供单独的数据集下载链接，但列出了使用的公开语料库：Libriheavy (Kang et al., 2024), GigaSpeech (Chen et al., 2021), VoxPopuli (en) (Wang et al., 2021), Yodas-granary (en) (Koluguri et al., 2025), AudioSet (Gemmeke et al., 2017), VGGsound (Chen et al., 2020), Freesound (Wu et al., 2023), Music4all (Santana et al., 2020), MTG-Jamendo (Bogdanov et al., 2019)
- Demo：论文中未提及
- 复现材料：论文在附录 B 中提供了详细的模型配置（表 8）、预训练超参数（表 9）、微调配置（表 10），但缺少 MVQ 训练脚本和教师模型推理脚本的链接。
- 论文中引用的开源项目：WavLM, HuBERT, Dasheng, ATST-frame, MVQ (multi‑codebook vector quantisation), Zipformer, SUPERB benchmark, HEAR benchmark, EncodecMAE, USAD, BEATs, EAT 等（具体链接未在文中列出，但均为公开知名项目）

- 补充链接（自动提取）：
  - HuggingFace：https://huggingface.co/collections/marcoyang/spear-encoders），代码和权重已发布，文档尚可。但未提供完整的

### 🏗️ 方法概述和架构


SPEAR 是一个基于多教师知识蒸馏的自监督表示学习框架，其整体流程与可视化架构如图1所示。框架的核心思想是将领域专用教师模型的连续表示量化为离散 token，然后通过掩码预测任务训练一个学生模型，使其同时学习两个域的知识。训练分为单域和双域两种模式，双域时采用非对称损失，并在部分样本上应用 token mixing 构建混合目标。

MVQ 量化为离散目标：两个领域专用教师模型（语音：WavLM Large，音频：Dasheng 1.2B）的输出连续表示分别经由一个预训练的多码本矢量量化器（MVQ）逐帧转化为离散 token。MVQ 使用 N 个独立、非层次化的码本（语音 16 个，音频 8 个），每个码本含 K=256 个码向量。编码过程通过 N 个神经分类器 G_n 生成初始估计，再迭代优化最小化重构误差并提高码本利用率。训练 MVQ 的损失函数为 \(L = ||x - Decode(z;Q)||^2_2 + \sum_{n=1}^{N} -\log G_n(x)_{z_n} + \gamma L_{reg}\)，其中 \(L_{reg}\) 为鼓励码本使用均衡的多样性正则项。每帧得到 N 个整数 token，形成监督信号。与 RVQ 不同，MVQ 的码本之间无层次依赖关系，可并行独立预测。

学生模型架构：编码器采用 Zipformer，一种具有多级下采样/上采样的 Transformer 变体。其核心特点是堆叠式设计，每个堆叠包含多个层并在特定下采样因子下操作（下采样率依次为 1,2,4,8,4,2,1），通过中间层的非均匀时间分辨率建模来兼顾效率与性能。输入为 128 维 log-mel filterbank 特征（帧长 25ms，帧移 10ms），输出 50 Hz 帧率表示。掩码策略随机选择帧用可学习的掩码 embedding 替换。编码器输出的隐藏表示通过 N 个独立线性分类头预测各码本的 token。损失函数为多码本交叉熵之和 \(L_{single}(H,Z) = \frac{1}{N} \sum_{n=1}^{N} [\alpha L_{n,m} + (1 - \alpha) L_{n,u}]\)，调节参数 α 平衡掩码帧与非掩码帧的损失权重；实验发现 α=0.5 最佳。

双域融合与非对称训练：对于混合语音和音频数据的联合训练，每个样本同时由两个教师抽取 token \(Z_{speech}\) 和 \(Z_{audio}\)。若简单对两种目标都计算损失可能造成域间冲突，因此提出三种策略：JOINT（同时对两个域计算损失）、DISJOINT（仅对样本所属域计算损失）、ASYMMETRICAL（语音数据只计算 \(Z_{speech}\) 损失；音频数据同时计算 \(Z_{speech}\) 和 \(Z_{audio}\) 损失，后者以权重 λ=0.1 缩放）。消融表明 ASYMMETRICAL 策略在 SUPERB 和 HEAR 上整体最优，其设计动机是让语音 token 作为通用语义锚点，而音频 token 仅对音频数据提供细节补充，从而缓和数据比例失衡带来的域干扰。

Token Mixing：为增强复杂重叠声源场景的鲁棒性，对约 10% 的训练样本进行裁剪混合：从同批次随机选取另一个信号，以 SNR∈(-5,5) 混合并添加随机延时（全时长混合），然后根据两路信号的功率比 β 在帧级和码本级上随机混合两份离散 token（\(z_{t,n}\) 以概率 \(1-\beta\) 保留主信号 token，以概率 β 替换为次信号 \(z'_{t+\tau,n}\)）。模型必须同时恢复两个声源的信息，从而在说话人分离、分离和增强等任务上取得了显著提升。

知识蒸馏与 SSL 的协同：教师模型完全冻结，只在数据预处理阶段生成 token，不参与梯度回传。这种“离散化蒸馏”使得学生不只是模仿教师，而是通过掩码预测学习上下文表示，因而学生能够超越教师（例如 SPEARs Large 在 SID/SV 上明显优于教师 WavLM Large）。

### 💡 核心创新点

1. MVQ 离散 token 作为统一接口：首次将非层次化多码本矢量量化引入 SSL 预训练，将两个域教师的连续表示投影到共同的离散符号空间。相比 k-means 的粗粒度（如 HuBERT）和 RVQ 的层次依赖（如 EncodecMAE），MVQ 保留了更细粒度的语义和声学细节，使掩码 token 预测能同时服务于语音和音频任务。
2. 非对称多域损失设计：提出语音 token 作为通用目标对所有数据进行预测，而音频 token 仅对音频数据开放的非对称策略，有效缓和了数据比例失衡（语音数据远多于音频）带来的域干扰，相比 JOINT 和 DISJOINT 策略整体性能最优。
3. Token Mixing 机制：基于能量比例的离散 token 混合，不仅做信号混合，也在目标侧保留两个源的信息，相比传统“将干扰当噪声过滤”的做法（如 WavLM 的 denoising loss），显著增强了在重叠语音和噪声场景下的分离与识别能力。
4. 通过离散蒸馏超越教师：实验证明即使使用同一教师模型，学生在多项下游任务上性能超过教师（如 SPEARs Large 在 SUPERB 的 SID、ER 等），说明预测 MVQ token 的 SSL 任务本身能诱导更强的泛化表征，打破了纯特征匹配蒸馏的性能上限。

### 📊 实验结果

ASR 和 AT 微调（表 3）：
| 模型 | 预训练数据 | LS-100 (WER clean/other) | LS-960 (WER clean/other) | AS-20k mAP | AS-2M mAP |
|------|-------------|---------------------------|---------------------------|------------|-----------|
| WavLM Base+ | 94k | 4.0/8.4 | 2.9/5.4 | - | - |
| WavLM Large | 94k | 3.0/6.1 | 1.8/3.8 | - | - |
| SPEARs Base | 84k | 3.0/5.7 | 1.9/4.0 | 26.9 | 43.6 |
| SPEARs Large | 84k | 2.6/4.7 | 1.7/3.3 | 26.4 | 43.9 |
| BEATs | 5k | - | - | 38.9 | 48.6 |
| EAT | 5k | - | - | 40.2 | 48.6 |
| ATST-Frame | 5k | - | - | 39.0 | 48.0 |
| SPEARa Base (5k hr) | 5k | - | - | 39.0 | 49.3 |
| SPEARa Large (5k hr) | 5k | - | - | 39.3 | 49.7 |
| SPEARa Base (13k hr) | 13k | 11.2/23.0 | - | 39.2 | 49.3 |
| SPEARa Large (13k hr) | 13k | 7.4/18.6 | - | 39.3 | 49.8 |
| USAD Base | 126k | 4.9/11.4 | - | 35.7 | - |
| USAD Large | 126k | 4.0/7.7 | - | 37.4 | - |
| SPEARs+a Base | 97k | 3.1/6.0 | 1.9/4.2 | 39.1 | 48.6 |
| SPEARs+a Large | 97k | 2.6/4.8 | 1.7/3.4 | 39.2 | 49.6 |
| SPEARs+a XLarge | 197k | 2.4/4.6 | 1.6/2.9 | 39.4 | 50.0 |

在 LS-960 和 AS-2M 上，统一模型接近甚至持平领域专用模型，XLarge 规模下达到双域 SOTA。跨域泛化能力显著：SPEARs 在 AT 上、SPEARa 在 ASR 上均能取得一定结果，体现了统一表示的初步能力。

SUPERB 基准（表 4，表 13-14）：SPEARs Large 在 12/15 任务上超越 WavLM Large，尤其 SID 准确率提升至 95.55%（WavLM Large: 95.49%）、ER 72.10%（WavLM: 70.62%）、SD 2.3% DER（WavLM: 3.24%）。统一模型 SPEARs+a XLarge 进一步刷新多项记录（如 KS 98.12、SID 96.34、ER 73.29、SD 1.99）。完整结果显示，SPEAR 在理解、副语言、增强三大类任务上全面领先。

HEAR 基准（表 5，表 16）：SPEARa Large (13k hr) 平均 79.18，环境子类 83.58，超越 Dasheng 1.2B 的 83.20（但 Dasheng 参数量大于 3 倍、音频数据量大 20+ 倍）。SPEARs+a Large 达到 79.26，SPEARs+a XLarge 平均 80.07。用全部中间层拼接评估时，SPEARs+a XLarge 达到 83.41，环境/音乐/语音均提升，尤其语音子类得分大幅高于纯音频模型。

USAD 对比（表 26）：在公平设置下（相同教师 WavLM Base+/ATST-Frame，相似数据量），SPEAR 在 SUPERB 和 HEAR 上全面优于 USAD（平均 79.4 vs 77.8），验证了离散掩码预测优于直接特征匹配。




图2直观展示了 SPEARs+a 系列模型在 HEAR 基准所有子类别（环境、音乐、语音）上均取得最高分，印证了其作为通用音频前端的强大实力。

消融实验：
- Token Mixing vs. 无增强 vs. WavLM 噪声过滤（表 6）：Token Mixing 在 SS（11.17 SI-SDRi）、SD（3.01 DER）、SE（2.65 PESQ）上明显最优，ASR 性能持平。
- 双域训练策略对比（表 7）：ASYMMETRICAL 在 HEAR 平均得分上优于 JOINT/DISJOINT（79.0 vs 78.3/78.7），且 SID 和 PR 更优。
- α 与 λ：α=0.5 平衡掩码/未掩码损失最佳（与 HuBERT 仅掩码预测不同，MVQ 细粒度 token 需要更强的正则化）；λ=0.1 在语音和音频 fine-tuning 间取得最佳权衡。
- 教师层选择：21 层 WavLM 和 40 层 Dasheng 分别给出最优下游性能。
- MVQ vs k-means（表 21）：MVQ token 在 SID（88.4 vs 86.6）和 ER（68.29 vs 67.56）上显著优于 k-means，且在 ASR 上也更优。
- MVQ 码本数：语音 N=16 持续提升 SID/ER；音频 N=8 最优，N=16 导致过拟合。
- 编码器架构（表 20）：Zipformer 在 ASR fine-tuning 和计算效率上优于标准 Transformer（350 GPU h vs 600 GPU h）。
- 教师模型选择（表 17-18）：更强教师产生更强学生（WavLM > HuBERT；Dasheng > ATST-frame），学生始终超越教师。

### 🔬 细节详述

- 训练数据：语音：Libriheavy (50k hr)、GigaSpeech (10k hr)、VoxPopuli (24k hr)、Yodas-granary (100k hr)；音频：AudioSet (5k hr)、VGGsound (0.5k hr)、Freesound (2.8k hr)、Music4all (1k hr)、MTG-Jamendo (3.8k hr)。预处理：128 维 log-mel filterbank，每帧 25ms，帧移 10ms，帧率 100Hz（Zipformer 下采样后输出 50Hz）。
- 数据增强：预训练中应用 utterance 混合、噪声混合（MUSAN）、SpecAugment；对 10% 样本应用 token mixing，次级信号从同批采样，SNR -5~5（均匀采样），全时长混合加随机延迟。双域训练时，混合信号可为语音或音频。
- 损失函数：MVQ 量化器训练使用重构 L2+ 预测交叉熵 + 多样性正则化（\(L = ||x - Decode(z;Q)||^2_2 + \sum_{n=1}^{N} -\log G_n(x)_{z_n} + \gamma L_{reg}\)）；学生损失为 N 个码本的交叉熵加权和，α=0.5；双域损失为非对称组合 \(L_{dual} = L_{single}(H, Z_{speech}) + \mathbf{1}_{audio} \cdot \lambda \cdot L_{single}(H, Z_{audio})\)，λ=0.1。
- 训练策略：优化器 ScaledAdam，Eden 调度，初始学习率 0.045；Base/Large/XLarge 分别训练 400k/500k/500k 步（音频单域为 250k 步），全局 batch size 约 4.8k~6.4k 秒；GPU：A800 80G，Base 用 8 卡，Large 16 卡，XLarge 32 卡，预训练时长约 460~3800 GPU 小时。MVQ 量化器独立预训练，使用各自教师的中间层输出。
- 关键超参数：Zipformer 配置：Base（94M, 模型维度 512, 层数 [1,2,3,3,1,1,1]）、Large（327M, 1024, [1,2,2,3,1,1,1]）、XLarge（600M, 1280, [1,2,3,4,1,1,1]）。MVQ 语音 16 个码本×每本 256 码字，音频 8 个码本×256；掩码概率未在正文明确给出（需参考类似 HuBERT/WavLM 的 40%-50% 范围）。
- 推理/微调：ASR 用 stateless RNN-T（表 3 主结果）或 CTC 解码（附录 C），无外部语言模型（除非说明）；AT 用线性投影 + BCE，使用加权采样和 MixUp（p=0.5）；SUPERB 用加权求和冻结特征，HEAR 用最终层或全层拼接（灰底色行）。
- 正则化：MVQ 量化器使用多样性损失 \(L_{reg}\) 均衡码本使用；α=0.5 平衡因子稳定学习；噪声混合和 token mixing 提供隐式正则化。
- 跨域泛化基础能力：SPEARs（纯语音）在 AT 上有一定表现（AS-20k 26.9），SPEARa（纯音频）在 ASR 上也能工作（LS-100 WER 11.2），表明 MVQ token 本身已捕获部分跨域信息。

### ⚖️ 评分理由

*   创新性 (1.5/2)：将 MVQ 引入 SSL 统一语音和音频表示的想法新意突出，非对称损失和 token mixing 的设计有实际洞察；相比 EncodecMAE（仅音频、RVQ）和 USAD（特征匹配蒸馏），离散蒸馏范式有明显方法论优势。但总体框架仍建立在现有教师模型和掩码预测范式之上，非颠覆性。
*   技术严谨性 (1.2/1.5)：公式推导清晰，损失设计合理，对 MVQ、混合机制、双域策略的解释充分，消融实验覆盖全面。不过对于为什么非对称策略优于 JOINT/DISJOINT 缺乏深入的理论分析，仅依赖实验验证；MVQ 重构特征与教师原始特征的信息损失未定量分析。
*   实验充分性 (1.2/1.5)：在 SUPERB 和 HEAR 两个标准基准上进行了全面评估，对比了多个 SOTA 模型，消融覆盖损失权重、码本数、教师层、混合方式、编码器架构、教师选择、MVQ vs k-means 等。附录提供了与 USAD 的公平对比和详细的完整结果表。但缺少统计显著性检验（如多次运行的方差），零样本或跨语言泛化评估缺失，与纯音频大模型对比时数据规模和领域不匹配（Dasheng 272k hr vs SPEAR 13k hr audio）。
*   清晰度 (0.8/1)：整体结构合理，图表清晰；方法部分对 MVQ 和 token mixing 解释到位，但掩码比例等关键预训练细节需在正文中推断或查附录，正文信息密度在一些地方偏低（如单域训练流程可压缩）。
*   影响力 (1.3/1.5)：统一语音和音频表示是当代重要方向，SPEAR 在开源模型上取得领先结果，性能超越自家强教师，能为多模态音频 LLM 提供有力前端。已公开代码和模型（HuggingFace），有望引发后续工作整合进更大系统。在音频社区关注度高。
*   开源 (1.2/1.5)：论文提供了 HuggingFace 模型集合链接（https://huggingface.co/collections/marcoyang/spear-encoders），代码和权重已发布，文档尚可。但未提供完整的 MVQ 训练和教师推理数据预处理脚本，对端到端复现有一定影响。
*   可复现性 (0.4/0.5)：给出了详细的模型配置表（表 8）、预训练超参数（表 9）、微调配置（表 10）、GPU 资源和时长，复现门槛相对较低。但部分数据（如 Yodas-granary）可能需要额外获取权限，准确的掩码实施细节未在正文展开。
*   工程/实践价值 (0.8/1.5)：框架有明确的产品化潜力，可作为通用音频编码器接入各种下游任务。但训练 pipeline 较复杂（需先训练教师、MVQ，再预训练学生），对工程落地的成本和维护有一定要求，且当前仅覆盖理解任务。

### 🚨 局限与问题

论文明确承认的局限：
- 多教师蒸馏带来额外计算开销（需预训练 MVQ 量化器并对全部数据做教师前向）。
- 学生模型性能仍受教师模型质量影响（附录 F.1.1 已证明此依赖性，但学生可超越教师）。
- 当前侧重理解任务，未涉及语音/音频生成。
- 预训练音频数据量有限（13k 小时），导致在纯音乐子任务上与专门大模型仍有差距。
- 在 CTC 低资源 ASR 场景下，统一模型 SPEARs+a 略逊于语音专域模型 SPEARs（表 11），表明统一空间的复杂性在少样本下是一把双刃剑。

审稿人发现的潜在问题：
- 音频教师 Dasheng 1.2B 本身已在 272k 小时数据上预训练（约一半为通用音频），其中包含 SPEAR 训练数据中绝大部分公开音频数据。这导致与纯音频模型对比时存在数据领域和规模的严重不匹配，削弱了 SPEAR 在纯粹音频场景下优势的纯粹性。论文虽在附录中承认“更大规模音频数据将进一步提升性能”，但未讨论数据重叠可能带来的不公平性。
- Token Mixing 仅应用于 10% 样本且 SNR 范围固定（-5, 5），未探讨更激进的混合策略（如更高混合比例、多源混合、Music/环境声混合语音）是否可进一步提升复杂场景性能。
- 统一模型在零样本跨域（如用纯英文语音+音频数据训练后测试多语言或完全未见域）或多语言泛化上没有给出结果，实际跨域泛化边界尚不清楚。这对宣称"通用表示"而言是一个重要缺失。
- 双域非对称训练中为何只对音频数据施加双重损失，缺少更深入的理论动机或失败案例分析（如对语音数据加音频损失会导致哪些具体任务的退化）。
- Voice Conversion 任务上 Large 和 XLarge 表现不如 Base（表 14），论文归因于小数据集过拟合，但未深入分析是否为统一训练或 MVQ 离散化导致的对生成任务不友好的固有问题。
- 消融实验中 BASE-AUDIO-1（用 ATST-frame 做教师，仅训 AS-2M）在 AS-20k 上达到 40.3 mAP，宣称超过 EAT 成为 AS-2M-only 的 SOTA（表 18）。但该比较中，ATST-frame 本身就在 AS-2M 上训练，SPEAR 学生再用相同数据训练 MVQ token 预测，相当于在教师已学完的数据上做二次蒸馏，fairness 存疑。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
