---
title: "Ariadne's Thread of LipSync: Unraveling Forgeries via Inconsistency between Lip Motions and Head Poses"
date: 2026-07-04
draft: false
tags: []
categories: [icml-2026]
description: "音视频理解 | 7.8/10"
hiddenInHomeList: true
---

# 📄 Ariadne's Thread of LipSync: Unraveling Forgeries via Inconsistency between Lip Motions and Head Poses

**7.8/10** | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.2/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 0/1.5 | 复现 0.5/0.5 | 工程 1.2/1.5

✅ **7.8/10** | 前25% | #音视频理解 | #对比学习 | [arxiv](https://openreview.net/forum?id=xmKNNOElLM)


### 👥 作者与机构

- 第一作者：Tianyi She（中国科学技术大学，University of Science and Technology of China）
- 通讯作者：Kejiang Chen（中国科学技术大学，University of Science and Technology of China）
- 作者列表：Tianyi She（中国科学技术大学）、Jiawei Liu（上海交通大学）、Weifeng Liu（北京大学）、Hanqing Zhao（南洋理工大学）、Weiming Zhang（中国科学技术大学）、Kejiang Chen（中国科学技术大学）

### 💡 毒舌点评

论文提出利用唇动-头姿生理耦合不一致来检测 LipSync 伪造，思路有新意且动机分析充分，统一检测+归因的两阶段设计也比较完整。但所有辉煌结论都建立在自建的 LipSync-A 数据集上——该数据集目前无任何下载链接，代码和模型也未公开，将外部独立验证的门彻底关死，极大地削弱了可信度。此外，归因仅做到生成器架构族级别，离真正的细粒度模型溯源尚有距离。两阶段分开训练且 Stage II 依赖 Stage I 编码器冻结，这种设计是否最优也值得商榷。

### 📌 核心摘要

该论文针对高逼真度 LipSync 伪造视频的检测难题，提出利用自然语音中唇部动作与头部姿态之间的生理耦合被伪造生成器破坏这一固有特性，构建统一检测与归因框架 LipDA。方法分为两阶段：Stage I 通过唇-姿对比学习，将真实视频的唇特征与头姿特征拉近、伪造视频的拉远，实现对真实/伪造的二进制判别；Stage II 利用时序动态模块和视听同步模块捕捉不同生成模型特有的运动指纹与同步模式，实现生成器架构族的归因。此外，作者还贡献了包含 15 个生成器、7 种架构的 16,000 段视频的大规模 LipSync-A 数据集。实验在 LipSync-A、AVLips、TalkHeadBench 三个数据集上，检测 AUC 超过 97%，归因准确率达 97.5%，显著超越现有单一检测方法，并在跨数据集、跨伪造类型、视觉/音频扰动下表现出强鲁棒性。但缺乏开源代码和数据集严重影响可复现性，且归因仅做到架构族级别，对同族内不同模型实例的区分能力有限。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文中提出了一个新数据集 LipSync-A，包含约 16,000 个由 15 个生成器产生的合成视频，但未提供公开下载链接或访问方式。
- Demo：论文中未提及。
- 复现材料：论文中未提供单独的训练配置、检查点等补充材料，部分实现细节和超参数在正文及附录 C、D 中给出（如使用 MediaPipe 提取人脸关键点、滑动窗口长度 T=5、裁剪唇部 ROI 为 96×96、优化器为 Adam、学习率 1e-5 等），但未提供代码或配置文件。
- 论文中引用的开源项目：
  - Wav2Lip: https://github.com/Rudrabha/Wav2Lip
  - SadTalker: https://github.com/OpenTalker/SadTalker
  - DreamTalk: https://github.com/ali-vilab/dreamtalk
  - Sonic: https://github.com/jixiaozhong/Sonic
  - KDTalker: https://github.com/chaoyangya/kdtalker
  - OmniSync: https://github.com/PengZhenghao/OmniSync
  - IP-LAP: https://github.com/WeizhiZhong/IP_LAP
  - TalkLip: https://github.com/Jiadong-Wang/TalkLip
  - MakeItTalk: https://github.com/yzhou359/MakeItTalk
  - DiNet: https://github.com/Zhangzhilin/DiNet
  - FaceVid: https://github.com/nvlabs/facevid2vid
  - TPSM: https://github.com/JiahaoZhao/TPSM
  - LIA: https://github.com/wyhsirius/LIA
  - X2Face: https://github.com/oawiles/X2Face
  - FTCN: https://github.com/yingzhengya/FTCN
  - LipForensics: https://github.com/ahaliassos/LipForensics
  - RealForensics: https://github.com/ahaliassos/RealForensics
  - AVAD: https://github.com/cfeng-ai/AVAD
  - SpeechForensics: https://github.com/yliangg/SpeechForensics
  - LipFD: https://github.com/Weifliu/LipFD
  - AVH-align: 论文中未给出开源地址
  - TALL: https://github.com/xuyingjian/TALL
  - CADDM: https://github.com/sdc17/CADDM
  - UnivFD: https://github.com/liyiheng/UniversalFakeDetect
  - FreqNet: https://github.com/TanChongmin/FreqNet
  - NPR: https://github.com/TanChongmin/NPR
  - AltFreezing: https://github.com/wangzhibo/AltFreezing
  - FGMDC: 论文中未给出开源地址
  - DFD-FCG: 论文中未给出开源地址
  - MediaPipe: https://github.com/google/mediapipe
  - LRS2, LRW, VoxCeleb, HDTF 等数据集在生成器训练中作为训练数据提及，但不属于本项目开源部分。

### 🏗️ 方法概述和架构

LipDA 是一个针对 LipSync 伪造视频的检测与源模型归因的统一两阶段框架。整体输入为一段包含音频和视频的谈话视频，首先进行人脸检测和面部关键点提取（MediaPipe），并按滑动窗口切分成 \(T=5\) 帧的片段，同时提取唇部感兴趣区域（ROI，尺寸 \(96 \times 96\)）并对齐音频的 MFCC 特征。Stage I 用于二进制分类（真/假），Stage II 用于模型归因。

Stage I（唇-姿对比优化）包含双分支编码器：
- 唇编码器（Lip Encoder）：对连续 T 帧的唇部 ROI 序列使用 ResNet 模型提取每帧特征，再通过 Concat 和投影头 \(g_l\) 得到唇嵌入 \(O_l\)。
- 头姿编码器（Pose Encoder）：基于面部 468 个关键点计算 6-DoF 头姿序列 \(P \in \mathbb{R}^{T \times 468 \times 3}\)，经投影头 \(g_p\) 得到姿态嵌入 \(O_p\)。
两个嵌入被投影到同一共享潜在空间 \(\mathbb{R}^o\)。引入基于间隔的对比损失 \(L_{align}\)：对真实样本最小化 \(O_p\) 与 \(O_l\) 的 L2 距离；对伪造样本若距离小于间隔 \(\gamma\) 则惩罚，强制唇-姿嵌入在伪造视频中分离。同时将拼接特征 \([O_p, O_l]\) 送入一个 MLP 检测头，利用二元交叉熵损失 \(L_{det}\) 进行真伪分类。Stage I 联合优化总损失 \(L_{stage1} = \lambda_{align} L_{align} + L_{det}\)。

Stage II（跨模态时序建模）在 Stage I 训练完毕后冻结其编码器，单独训练两个模块以捕获生成器指纹：
- 时序动态模块（TDM）：以 T 帧关键点序列 \(K\) 为输入，经过时序卷积网络（Temporal-CNN）提取局部运动模式，再接入双向 LSTM 建模长程依赖，输出时序特征 \(z_{temp}\)。
- 模态同步模块（MSM）：分别用 3D-CNN 编码唇部 ROI 序列 \(L\) 得到视觉特征 \(L'\)，用 1D-CNN 编码对齐的 MFCC 音频特征 \(A\) 得到 \(A'\)，然后以 \(L'\) 为 Query、\(A'\) 为 Key 和 Value 进行多头交叉注意力，生成增强视觉特征后与原始 \(L'\) 相加，经时间平均和投影头 \(g_{av}\) 得到同步特征 \(z_{av}\)。
最终将 \(z_{temp}\) 与 \(z_{av}\) 拼接形成指纹特征 \(z_{final}\)，送入一个全连接分类器 \(f_{att}\)，以交叉熵损失 \(L_{att}\) 在仅伪造样本上训练生成器族标签。

推理时，两个分类器同时工作，输出真/假标签以及对应的生成器族类标签。该框架以唇-姿生理不一致为检测线索，以时序和视听同步指纹为归因依据，联合解决两个任务。




### 💡 核心创新点

- 生理耦合不一致作为检测信号：首次明确提出 LipSync 伪造破坏唇部动作与头部姿态间的自然耦合关系，并系统性分析了视频驱动和音频驱动生成器破坏该耦合的不同机理（视频驱动移植外来运动模式导致时序伪影，音频驱动将唇动与头姿解耦为独立条件分布），为检测提供了非低层伪影的新线索。
- 统一检测与归因框架：设计两阶段 LipDA，既完成真/假判决又溯源到生成器家族，解决了现有工作只做二进制分类而缺乏模型归因的空白。在 LipSync 领域首次提出按架构族的归因任务定义。
- 唇-姿对比学习机制：通过将唇与头姿特征投影到共享空间并用间隔对比损失对齐，显式量化真实与伪造视频在全局生理协调性上的差异，相比只依赖局部视觉畸变或视听匹配的方法更本质。
- 生成器指纹的时序+视听表征：从关键点时序动态和唇-音频跨模态同步两个维度提取不同架构独有的"运动指纹"，在模型归因上取得高准确率，且对扩散、GAN 等架构族有较好区分度。
- 构建大规模多生成器 LipSync-A 数据集：涵盖 7 种架构 15 个生成器的 16,000 段视频，带有精细生成器标签，填补了该领域缺乏归因标注数据集的空白。

### 📊 实验结果

在三个数据集上的二进制检测结果如下表（对应论文 Table 2）：

| 方法 | 模态 | LipSync-A ACC/AUC | AVLips ACC/AUC | TalkHeadBench ACC/AUC | 平均 ACC/AUC |
|------|------|-------------------|----------------|----------------------|--------------|
| LipForensics (Haliassos et al., 2021) | V | 80.92/89.85 | 74.15/81.97 | 84.52/90.63 | 79.86/87.48 |
| SpeechForensics (Liang et al., 2024) | A-V | 91.38/94.82 | 98.50/99.15 | 76.52/78.87 | 88.80/90.95 |
| LipDA (Ours) | V | 93.47/97.83 | 97.02/99.59 | 93.05/98.65 | 94.51/98.69 |
| LipDA (Ours) | A-V | 95.96/99.42 | 98.34/99.82 | 94.48/97.50 | 96.26/98.91 |

归因性能（五族分类，对应论文 Table 3）：

| 方法 | 平均 ACC (%) | 平均 F1 (%) |
|------|------------|------------|
| AVAD (Feng et al., 2023) | 74.2 | 33.4 |
| TALL (Xu et al., 2024b) | 92.3 | 81.5 |
| AVH-align (Smeu et al., 2025) | 93.0 | 77.7 |
| SpeechForensics (Liang et al., 2024) | 72.4 | 26.6 |
| LipDA (Ours) A-V | 97.5 | 93.9 |

跨生成器零样本检测上，LipDA 对 Sonic、KDTalker、OmniSync 分别取得 87.8%、84.6%、95.5% 的 ACC（对应论文 Table 4），远超次优的 SpeechForensics（80.8%-90.0%）。对完全非 LipSync 的 Celeb-DF 数据集，LipDA（视频版）仍达到 92.76% ACC / 91.86% AUC（对应论文 Table 5），体现跨操纵泛化。视觉鲁棒性测试中，对 7 种 Level-3 扰动平均 AUC 达 99.11%，最差的 LipForensics 仅 85.53%（对应论文 Table 9）。消融实验显示移除对比对齐损失使检测 ACC 骤降 17.3%，移除姿态分支降 23.1%，证明生理耦合建模的核心作用（对应论文 Table 6）。

此外，论文还补充了细粒度 15-way 模型级归因实验（附录 Table 13），LipDA 在 15 类上取得 82.67% ACC 和 82.04% 宏平均 F1。跨生成器归因测试中，对 LatentSync 正确归因到扩散族准确率 97.5%。数据集中部分音频驱动生成器的 AU 分析和不同架构族生成视频的 t-SNE 可视化分别在图 3 和图 4、图 8 中展示，直观支持了方法设计的有效性。




### 🔬 细节详述

- 训练数据：使用自建 LipSync-A 数据集，训练/验证/测试分别包含 3926、842、842 个视频（原文附录 C.4 说明训练集包含 1614 个真实视频和 2312 个伪造视频，但总划分表述为 3926/842/842），涵盖 10 个训练集生成器和 5 个留出测试生成器，真实视频来自 HDTF、LaPa 等。
- 损失函数：Stage I 使用 \(\lambda_{align}\) 加权的对比损失 \(L_{align}\)（间隔 \(\gamma\) 在原文方法部分定义为 margin，但未明确具体数值）和二元交叉熵 \(L_{det}\)；Stage II 使用标准交叉熵 \(L_{att}\)。
- 训练策略：优化器 Adam，初始学习率 \(1 \times 10^{-5}\)，batch size 32，训练 20 epochs。Stage I 联合优化，Stage II 独立训练且冻结 Stage I 编码器。
- 关键超参数：滑动窗口 \(T=5\) 帧，唇 ROI 尺寸 \(96 \times 96\)，音频特征为 MFCC 并与视觉对齐（原文未明确 MFCC 维度）。MediaPipe 提取 468 个关键点。损失权重 \(\lambda_{align}\) 和对比间隔 \(\gamma\) 未在正文明确。
- 训练硬件：未说明 GPU 型号和训练时长。
- 推理细节：直接利用两个分类器输出标签，无解码策略详细描述。滑动窗口机制在检测中采用非随机采样。
- 正则化与稳定技巧：未提及。

### ⚖️ 评分理由

*   创新性 (1.5/2)：将唇-头姿态生理耦合不一致引入 LipSync 伪造检测，并基于此建立检测+归因统一框架，思路新颖且分析与动机充分（包括对视频驱动和音频驱动两种范式失效原因的详细论证和 AU 分析）。与仅靠局部伪影或单纯视听同步检测的方法相比，洞察更深一层。但方法论上仍是 ResNet+对比学习+注意力+LSTM 的组合，架构设计本身未见本质性创新，故给 1.5。

*   技术严谨性 (1.3/1.5)：推导明确，对比损失设计合理，跨阶段训练策略清晰。对两类生成范式的失效原因进行了理论分析，并辅以 AU 分析和 t-SNE 可视化支持。但缺少对间隔 \(\gamma\)、损失权重 \(\lambda_{align}\) 等关键超参数的敏感度分析，也未严格论证生理耦合假设是否在所有自然说话场景下普遍成立（例如不同语言、不同情绪状态下唇-头姿态耦合模式是否一致），因此略有留白。

*   实验充分性 (1.2/1.5)：实验覆盖 3 个数据集、对比 15 个 SOTA 基线和多种消融设计，并进行了跨生成器泛化、跨操纵泛化（Celeb-DF）、视觉和音频鲁棒性测试，整体较完整。但核心问题在于——所有主体实验结果均基于自建 LipSync-A 数据集，而该数据集未公开，使得声称的"97.5% 归因准确率"等核心指标无法被外部独立验证。此外，音频鲁棒性测试仅对 LipDA 自身，未与基线对比，力度稍弱；对 Stationary Speaker 等边缘情况的系统性能评估缺失。

*   清晰度 (0.9/1)：论文结构清晰，方法流程图解良好，损失公式表述规范。但部分关键超参数（如 MFCC 维度、间隔值 \(\gamma\)、损失权重 \(\lambda_{align}\)）未在正文明确，附录亦未详列，对完整复现有碍。整体可读性较好。

*   影响力 (1.2/1.5)：提出的生理耦合检测信号在 LipSync 深度伪造检测领域有基础性贡献，为后续研究提供了新方向。统一检测归因框架和新建数据集若公开可大幅促进该子领域发展。工作面向语音驱动的视觉伪造，与音频/语音领域有强相关，影响力可期。

*   开源 (0.0/1.5)：论文未提供代码仓库、模型权重或数据集下载链接，也未声明开源计划，核心内容完全不可获取，此项无可得分。

*   可复现性 (0.5/0.5)：训练细节（优化器、学习率、batch size、epochs）基本给出，数据预处理流程和网络结构有描述；虽缺硬件环境和部分超参数（如 MFCC 维度、间隔 \(\gamma\)），但总体可在有数据前提下尝试复现。

*   工程/实践价值 (1.2/1.5)：构建 LipSync 检测与归因的统一 pipeline，并制作覆盖多架构的数据集，具有实际部署参考价值。两阶段设计可分别用于不同任务，有一定的工程便利性。但缺乏开源限制了工业界直接复用。

### 🚨 局限与问题

论文明确承认的局限（Discussion 及附录 F.4）：
- 方法适用性限于可见唇部动态和头部运动场景，对静止说话者、持续低头或面部遮挡时性能下降；
- 归因模块对部分音频扰动敏感（如 heavy noise、pitch shift up3），建议加入音频质量感知；
- 当前仅针对 LipSync 领域，未扩展到更广泛的 AI 图像伪造；
- 开源生成器归因依赖架构族分类，对完全新颖的架构范式需要 open-set 识别扩展。

审稿人发现的潜在问题：
- 核心数据集和代码均未开源，整个实验结论无法被外部独立验证，严重削弱论文可信度。将"97.5% 归因准确率"等核心 claim 建立在不可获取的数据上，是顶会论文的重大减分项。
- 归因粒度过粗：主体实验仅做到 5 个架构族分类，虽附录补充了 15-way 模型级实验（82.67% ACC），但在同族内区分（如 TPSM vs. LIA）仍有显著混淆，论文应在正文中更诚实地呈现此局限。
- 生理耦合假设的普遍性存疑：未讨论不同语言、情绪、说话风格的场景下唇-头姿态耦合模式是否一致。论文在 LipSync-A 上的真实数据主要来自 HDTF 和 LaPa，若部署到非英语、高情绪波动或即兴对话场景，假阳性率可能显著升高。
- 两阶段训练的解耦性：Stage II 依赖 Stage I 冻结编码器，流水线设计可能导致 Stage I 提取的特征并非对归因最优。论文未与端到端联合训练或微调 Stage I 的方案进行对比。
- 缺少与扩散模型 SOTA 检测方法的直接对比：论文所引基线中部分（如 AVH-align、SpeechForensics）在扩散模型生成视频上的表现可能不具代表性，但论文未与专门针对扩散生成伪影的最新检测器对比。
- 对完全无声或环境噪声极大的场景未评估：现实场景中音频质量可能极差，但论文仅测试了受控的音频扰动，未覆盖边缘工况。

### 📷 论文图片



---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
