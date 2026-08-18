---
title: "AnyTalk: Speech Animation for Arbitrary Characters Leveraging a Video Generation Model"
date: 2026-08-18
draft: false
tags: [音视频语音合成, 扩散模型, 知识蒸馏, 实时处理, 零样本]
categories: [论文速递]
description: "音视频语音合成 | 6.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.16143"
---

# 📄 AnyTalk: Speech Animation for Arbitrary Characters Leveraging a Video Generation Model

标签：#音视频语音合成 #扩散模型 #知识蒸馏 #实时处理 #零样本

**6.7/10** | 创新 1.5/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **6.7/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音视频语音合成 | #扩散模型 | #知识蒸馏 #实时处理 | [arxiv](https://arxiv.org/abs/2608.16143)


### 👥 作者与机构

- 第一作者：Kwan Yun（韩国科学技术院文化技术研究生院博士生，共同第一作者）
- 共同第一作者：Serin Yoon（多伦多大学 DGP 实验室访问研究员，原韩国科学技术院文化技术研究生院硕士，论文标记为共同第一作者）
- 通讯作者：未说明
- 作者列表：Kwan Yun（韩国科学技术院文化技术研究生院）、Serin Yoon（多伦多大学 DGP 实验室访问研究员，论文标记共同第一作者）、Sunjin Jung（诚信女子大学计算机工程系助理教授）、Jung Eun Yoo（研发工程师，韩国科学技术院文化技术研究生院 2025 年博士毕业，具体公司未说明）、Inyup Lee（韩国科学技术院文化技术研究生院博士生）、Junyong Noh（韩国科学技术院文化技术研究生院教授）

### 💡 毒舌点评

这篇文章的切入点聪明：把 2D talking-head 视频扩散模型的运动先验“白嫖”到 3D blendshape 上，并用零音频嵌入做静帧微调，确实绕开了对 3D 动画数据的需求。但评测仍偏软：SyncNet 和用户研究不足以证明几何级口型正确性，蒸馏后的 AnyTalk_RT 在 LSE-D 上从 11.74 退化到 12.19、LSE-C 从 3.24 掉到 2.96，实时版的唇同步损失没有给出令人信服的补偿方案。此外，论文声称代码公开，但正文未给出可验证的仓库链接、模型权重或数据下载，开源可获取性存疑。

### 📌 核心摘要

本文提出 AnyTalk，解决任意已绑定 blendshape 的 3D 角色在无动画数据条件下的语音驱动面部动画问题，避免现有方法对角色专属音频-3D 训练数据、重绑定或重网格化的依赖。方法核心是两阶段流程：先用 Character-specific Fine-tuning（CsF）将预训练音频驱动 2D 说话人视频扩散模型适配到目标角色，再用 landmark 驱动的 blendshape 优化将生成的 2D 视频“提升”为 3D 表情动画。与已有 3D 语音动画方法相比，AnyTalk 的创新在于用 2D 视频生成模型的大规模运动先验替代 3D 音视频对，并以 zero audio embedding 解耦“无运动”信号与语音运动先验。实验在 5 个差异较大的角色、30 条 LibriSpeech 音频上进行，AnyTalk 取得 LSE-D 11.304、LSE-C 3.155，优于 ScanTalk 等基线；用户研究中自然度和唇同步偏好率分别为 78.6% 和 76.8%。工程上进一步蒸馏出 110 FPS 的实时变体 AnyTalk_RT，但唇同步指标有所下降。此外，作者将同一管线迁移到 MEMO 视频生成模型，验证了框架的泛化性。

### 🔗 开源详情

- 代码：论文摘要声称“The code is publicly available at AnyTalk”，但正文未给出具体 URL，也未提供可直接访问的仓库链接。因此开源状态暂视为未说明。
- 模型权重：论文未提及 AnyTalk 自身模型权重或检查点下载链接；所使用的预训练 Hallo 权重以及 MEMO 扩展中使用的 MEMO 权重均未提供具体获取链接。
- 数据集：论文使用 LibriSpeech 数据集（引用[39]）随机采样音频，未提供具体获取链接或开源协议；目标角色为 Morphy(©joshburton.com)、Malcolm(©Animschool)、Victor(©Faceware Technologies, Inc.)、Emily、VMan，未提供这些角色资源的公开下载方式或协议。
- Demo：论文未提及在线演示或交互式示例。
- 复现材料：论文给出的实现细节包括：单张 NVIDIA A6000 GPU；CsF 训练使用正面视图渲染的每个 blendshape 图像，嘴部相关 blendshape 图像重复 4 次；训练学习率 1e-6，总训练时间约 20 分钟；训练时仅微调去噪 UNet 的空间残差网络，冻结 audio attention、motion attention 和 ReferenceNet，并使用零音频嵌入 C_zero，不施加控制权重；优化阶段使用 14 个嘴唇/下巴相关 landmarks，w_asym=3；损失权重 λ_talk=100,000、λ_open=8,000、λ_reg=10；优化 200 次迭代，学习率 5e-3；推理时 w_pose=0、w_exp=1、w_lip=2。未提供检查点、训练配置文件或附录下载链接。
- 论文中引用的开源项目：Hallo、SyncNet、DiffusionNet、VOCASET、VOCA、FaceFormer、CodeTalker、ScanTalk、DiffSpeaker、NFR、ReferenceNet、LibriSpeech 等；论文中未提供这些项目的具体 URL 链接。

### 🏗️ 方法概述和架构

AnyTalk 整体是一个两阶段流水线：第一阶段生成目标角色的个性化 2D 说话视频，第二阶段通过优化将视频中的口型与表情运动映射到 blendshape 参数空间。输入是已绑定 blendshape 的目标 3D 角色（无需动画序列）与驱动音频，输出是逐帧 blendshape 权重序列。方法并非端到端系统，而是“2D 生成 + 3D 提升”的多阶段框架。

**阶段 1：个性化 2D 说话视频生成。** 基线模型是 Hallo，一种基于扩散的音频驱动视频生成模型。Hallo 对音频采用分层处理，包含 pose、expression、lip residual 三个注意力模块，并提供控制权重 `w_pose`、`w_exp`、`w_lip` 分别调节头部运动、表情和嘴唇运动幅度。该特性使后续 3D 提升阶段能够抑制头部运动、增强唇部动态，从而提高 landmark 优化稳定性。

AnyTalk采用的基线音频驱动视频扩散模型 \(D_{src}\) 的概览如下图所示。

![Figure 2: Overview of the baseline audio-driven video diffusion model D_src. It uses control weights w_pose, w_exp, and w_lip to adjust head, expression, and lip motion, enabling dynamic lip movement.](https://arxiv.org/html/2608.16143v1/figure/base_hallo.png)

该模型利用控制权重 \(w_{pose}\), \(w_{exp}\), \(w_{lip}\) 分别调节生成视频的头部、表情和嘴唇运动幅度，这一特性为后续的3D提升提供了便利。


Character-specific Fine-tuning（CsF）的目的是让 Hallo 学会目标角色的外观，但不破坏其从大规模人类视频中学到的口型-音频时序对应关系。具体做法是：对目标角色逐 blendshape 激活并渲染正面图像，再将这些图像复制为静态视频；训练时把音频编码器输出替换为零音频嵌入，使模型看到“角色的静止外观 + 无运动信号”。由于语音是驱动运动的来源，零音频嵌入在训练中表示“无运动”，推断时输入真实语音则可产生运动。该设计避免将随机语音与静止图像配对而导致模型学到“见音频也不动”的错误行为。

下图展示了Character-specific Fine-tuning (CsF)的具体微调过程。

![Figure 4: Character-specific fine-tuning process for D_CsF. Rendered images of the target 3D character are paired with the zero-audio condition C_zero before denoising.](https://arxiv.org/html/2608.16143v1/figure/overview.png)

图中可见，微调时输入零音频嵌入 \(C_{zero}\)，使模型学习角色的静态外观，而推断时输入真实音频，经由同样的注意力模块转换为运动控制信号。


为保留运动先验，微调只更新去噪 UNet 的 spatial residual network，冻结所有注意力层（包括音频注意力、运动注意力）以及 ReferenceNet 层。训练损失为噪声预测 MSE：
\[
L=\mathbb{E}_{\mathcal{E}(I), C_{zero}, \epsilon\sim\mathcal{N}(0,1), t}\left[\|\epsilon-D_{CsF}(z_t,t,C_{zero})\|_2^2\right],
\]
其中 \(\mathcal{E}(I)\) 是图像编码，\(z_t\) 是加噪隐变量，\(C_{zero}\) 是零音频嵌入。训练时控制权重 `w_pose`、`w_exp`、`w_lip` 均不施加。微调数据使用每个 blendshape 激活后的渲染图像，嘴部相关 blendshape 图像重复四次，总训练时间约 20 分钟。

微调得到个性化模型 \(D_{CsF}\) 后，在推断时输入真实语音，并设置 `w_pose=0`、`w_exp=1`、`w_lip=2`。`w_pose=0` 抑制头部运动，使生成的 2D 视频保持稳定头部姿态；`w_lip=2` 增强嘴唇运动。这种设置直接服务后续优化：头部静止简化 homography 对齐，嘴唇运动增强口型表达能力。

**阶段 2：基于 landmark 的 blendshape 优化。** 优化目标是估计每帧 blendshape 权重 \(B_f\)，使 3D 角色渲染后的 talking 关键点与生成视频中的对应关键点一致。首先在角色中性网格渲染图 \(I_0\) 上运行预训练 landmark 估计器，获得唇部、下巴等 14 个与说话相关的 2D landmark。然后从这些 2D 点向 3D 网格射线投射，选取最近顶点作为固定的 landmark 顶点索引。对于可能遮挡射线或高度风格化的牙齿等结构，需要临时移除或手动指定顶点。

图示了第二阶段基于landmark的blendshape优化流程。

![Figure 6: Optimization process. Blendshape parameters are optimized so that the target 3D character accurately follows the generated video when rendered.](https://arxiv.org/html/2608.16143v1/figure/optimize.png)

该流程通过landmark检测、单应性对齐与参数优化，将生成的2D视频中的口型运动转换为目标3D角色的blendshape参数。


对生成视频第 \(f\) 帧，用 homography 将视频 landmark 对齐到中性渲染图，以补偿视频中的轻微头部偏移。homography 使用表情不变 landmark 估计：作者在 5 个角色上统计了各 landmark 在不同 blendshape 下的平均位移，过滤掉位移最大的上半部分表情相关点（主要是唇部和下巴），仅保留眼下、鼻部、头部侧边等稳定点。

优化目标由三项组成。第一项 talk landmark loss 对齐 3D 角色 landmark 与视频 landmark：
\[
L_{talk} = \left\| P\left[(M_b \cdot B_f)_{talk}\right] - H\left(\phi(\hat{I}_f)_{talk}\right) \right\|_2^2,
\]
其中 \(M_b\) 是 blendshape 矩阵，\(P\) 是投影矩阵，\(H\) 是 homography，\(\phi\) 是 landmark 估计器。第二项 asymmetric mouth opening loss 约束上唇中心与下唇中心的距离，使角色口型开合与视频一致，并在角色开口过小时施加更高惩罚。其定义为：
\[
L_{open}=
\begin{cases}
\|\text{MO}\|_2^2, & \text{if } \text{MO}>0,\\
w_{asym}\cdot\|\text{MO}\|_2^2, & \text{otherwise},
\end{cases}
\]
其中
\[
\text{MO}=P\left[(M_b\cdot B_f)_{up}-(M_b\cdot B_f)_{low}\right]-H\left(\phi(\hat{I}_f)_{up}-\phi(\hat{I}_f)_{low}\right),
\]
\(w_{asym}=3\)。第三项 L1 正则化损失 \(L_{reg}=\|B_f\|_1\) 抑制与说话无关 blendshape 的激活。总目标为：
\[
L_{optim}=\lambda_{talk}L_{talk}+\lambda_{open}L_{open}+\lambda_{reg}L_{reg},
\]
权重分别为 \(100000\)、\(8000\)、\(10\)。优化 200 次迭代，学习率 \(5\times10^{-3}\)，随后用高斯滤波做时序平滑。可选地，可额外添加随机眨眼或面部表情。

**实时蒸馏变体。** 为实际应用，作者蒸馏得到 AnyTalk_RT。网络包含从音频提取特征的 Audio2Feat 模块和从特征预测 blendshape 的 Feat2BS 模块。蒸馏数据约 1600 条由 AnyTalk 生成的动画。训练损失包括特征匹配损失 \(L_{feat}\) 和 blendshape 重建损失 \(L_{recon}\)：\(L_{feat}\) 迫使音频特征与 homography 对齐后的视频 talk landmark 一致，\(L_{recon}\) 直接对齐预测 blendshape 与教师输出。总蒸馏损失为 \(L_{distill}=L_{feat}+\lambda L_{recon}\)，\(\lambda=400\)。训练 360 个 epoch，优化器为 AdamW，batch size 128，学习率用 OneCycleLR 最高到 \(0.008\)。

总体而言，AnyTalk 的核心设计动机是充分利用 2D 大规模视频先验，同时通过“零音频静帧微调 + 冻结运动模块 + 稀疏 landmark 优化”将生成过程限制在角色外观与 3D blendshape 空间内。

### 💡 核心创新点

1. **无动画数据的任意角色 3D 语音动画流水线。** 之前方法需要角色专属音视频对、重绑定或重网格化；AnyTalk 首次利用 2D talking-head 视频生成模型提供运动先验，再用优化方式将视频提升为 3D blendshape 动画。该思路为独立开发者和小团队降低了数据门槛。

2. **Character-specific Fine-tuning 与零音频嵌入。** 通常对视频扩散模型做角色个性化需要视频或运动数据。AnyTalk 只使用目标角色静态渲染图，并将音频嵌入置零作为“无运动”条件，从而在保留语音运动先验的同时将外观锁定到目标角色。零音频在训练中模拟静止状态，避免模型将语音与静止图像错误关联。

3. **表情不变 landmark 过滤 + homography 对齐。** 为了在 2D 生成视频与 3D 渲染图之间稳定对齐，作者统计了不同 blendshape 下各 landmark 的平均位移，过滤掉位移最大的上半部分表情相关点，仅用稳定点估计 homography。该步骤减轻轻微头部运动对 landmark 匹配的干扰，使优化更鲁棒。

4. **非对称口型开合损失。** 针对语音动画中嘴部高频运动不足的问题，作者显式约束上下唇中心距离，并在 3D 开口小于视频开口时施加放大惩罚，改善嘴部开合幅度。

5. **实时蒸馏变体。** AnyTalk 本身优化较慢，作者进一步蒸馏出 AnyTalk_RT，通过特征匹配和 blendshape 重建损失学习从音频到 blendshape 的映射，达到 110 FPS，展示了工程落地潜力。此外，作者将同样管线迁移到 MEMO 视频生成模型，验证了框架对底层扩散模型的泛化性。

### 📊 实验结果

论文主要使用 5 个角色（Morphy、Malcolm、Victor、Emily、VMan）和 30 条 LibriSpeech 音频进行评测。由于没有真实音频-3D 动画对，采用 SyncNet 导出的 LSE-D 和 LSE-C 作为无监督唇同步指标，同时进行用户研究。表中保留主方法、最强基线与关键消融项，完整表格见原文 Table 2 和 Table 3。

| 方法 | LSE-D↓ | LSE-C↑ |
|---|---:|---:|
| Ours | 11.304 | 3.155 |
| ScanTalk | 12.152 | 2.395 |
| DiffSpeaker + NFR | 13.857 | 0.665 |
| CodeTalker + NFR | 13.840 | 0.668 |

用户研究中，AnyTalk 对 ScanTalk 的自然度偏好率为 78.6%，唇同步偏好率为 76.8%；对 DiffSpeaker + NFR 和 CodeTalker + NFR 的偏好率分别为 99.6%/99.4% 和 99.8%/99.8%，均通过二项检验显著高于 50% 随机水平。

消融实验在 VMan 和 Malcolm 上进行，关键结果如下：

| 方法 | LSE-D↓ | LSE-C↑ |
|---|---:|---:|
| Ours | 10.695 | 3.397 |
| w/o CsF | 11.207 | 3.451 |
| w/o C_zero | 11.203 | 2.770 |
| w/o freezing module | 14.237 | 1.228 |
| w/o L_talk | 11.044 | 2.922 |
| w/o landmark filtering | 10.777 | 3.019 |
| w/ additional filtering | 12.397 | 2.352 |
| replaced w/ L_photo | 15.154 | 0.293 |
| w/ L_photo | 10.813 | 3.364 |

消融显示：去掉冻结模块显著损失唇同步，纯光度损失几乎无法驱动有效口型。针对 UNet 微调策略的额外消融（原文 Table 4）表明，仅微调 spatial residual network 最优；若额外开放 audio-attention 或 motion-attention，LSE-D 分别升至 10.796 和 10.932，全量微调则恶化至 14.237。头部姿态权重实验表明，`w_pose` 增大会导致唇同步指标下降，验证了静态头部设置对 3D 提升的必要性。

实时蒸馏版 AnyTalk_RT 在 Morphy 上单帧推理耗时 9.09 ms，LSE-D 为 12.19、LSE-C 为 2.96；对应 AnyTalk 单帧 3.12 s，LSE-D 11.74、LSE-C 3.24。论文还补充了与图像基线（如 AniTalker、EchoMimic、MEMO 等）的定性比较，显示这些模型存在明显外观不一致；在补充材料中报告了非个性化设置的结果以及无法生成运动的图像基线的对比。扩展实验将管线应用于 MEMO 视频生成模型，定性结果表明唇同步正确，验证了框架对不同底层扩散模型的泛化能力。论文未给出字符级或音频类型细分结果，也未报告除 LSE-D/LSE-C 外的几何级指标。

下图对比了完整版AnyTalk与其蒸馏后的实时变体AnyTalk_RT在相同音频下的生成结果。

![Figure: Example rendered 3D character face (Morphy) used in the experiments.](https://arxiv.org/html/2608.16143v1/figure/Morphy_transparent.png)

两者在“attire”、“time”、“as”等音素上展现出相似的唇形，表明蒸馏模型在保持口型准确性的同时显著提升了推理速度。

### 🔬 细节详述

- **训练数据**：目标角色的逐 blendshape 激活正面渲染静态图，复制成静态视频；嘴部相关 blendshape 的图像重复四次。角色来自 5 个不同来源，blendshape 参数数量 32 到 121 不等，网格顶点数从 4,542 到 241,981（Morphy 4,862，Malcolm 4,542，Victor 20,104，Emily 33,966，VMan 241,981）。论文未说明数据增强、图像分辨率、渲染光照和相机参数的完整细节。
- **损失函数**：  
  - 微调阶段：以零音频嵌入为条件的噪声预测 MSE。  
  - 优化阶段：\(L_{talk}\)（talk landmark MSE，权重 100000）、\(L_{open}\)（非对称口型开合，权重 8000，\(w_{asym}=3\)）、\(L_{reg}\)（L1 正则，权重 10）。  
  - 光度实验：LPIPS-based \(L_{photo}\)。  
  - 蒸馏阶段：\(L_{feat}\)（音频特征与 homography 对齐后 video talk landmark 的匹配）和 \(L_{recon}\)（blendshape 重建），\(\lambda=400\)。
- **训练策略**：  
  - CsF 微调：学习率 1e-6，训练约 20 分钟，只更新 spatial residual network；冻结 audio attention、motion attention、ReferenceNet；训练时不施加控制权重 `w_pose`、`w_exp`、`w_lip`。  
  - 优化：200 次迭代，学习率 5e-3。  
  - 蒸馏：AdamW，batch size 128，360 epochs，OneCycleLR，最大学习率 0.008。
- **关键超参数**：  
  - 推理控制权重：`w_pose=0`、`w_exp=1`、`w_lip=2`。  
  - 高斯滤波用于时序平滑，具体核大小未说明。  
  - Talk landmark 数量为 14 个。  
  - Homography 估计中过滤掉按平均位移排序的 top half 表情变化 landmark。
- **训练硬件**：单张 NVIDIA A6000 GPU。优化阶段每帧约 3.12 s，实时蒸馏版每帧 9.09 ms（110 FPS，FP32 PyTorch）。
- **推理细节**：先生成目标角色的 2D 视频，再进行逐帧 blendshape 优化；无 beam search、温度等文本式解码参数。视频扩散模型的采样步数、分辨率、CFG 等未在正文中完整说明。若 landmark 射线投射遇到遮挡或高度风格化牙齿几何干扰，原文建议临时移除相应组件或手动指定顶点。
- **正则化或稳定训练技巧**：L1 blendshape 正则；冻结 temporal/attention 模块；零音频嵌入；高斯时序平滑；可选随机眨眼或附加表情。

### ⚖️ 评分理由

*   创新性 (1.5/2)：[A_SUMMARY] 本文提出用2D说话人视频扩散模型的运动先验替代角色专属3D音频-动画数据，配合零音频嵌入解耦无运动信号，并设计landmark驱动的blendshape优化流程，方法思路新颖。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 零音频嵌入与冻结注意力层、空间残差微调的设计具备明确因果逻辑，且关键消融能支撑组件作用；但方法依赖正面视图、预绑定blendshape和2D landmark，对非规则嘴部结构和高频运动存在较强泛化假设。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 文中包含与ScanTalk等代表性基线的定量比较、用户研究和多项消融，统计检验显著；但仅5个角色和30条LibriSpeech英文音频，缺少跨语言、噪声、情感鲁棒性和网格级几何误差，普适性声明支撑有限。

*   清晰度 (0.8/1)：[A_SUMMARY] 论文结构清晰，从两阶段流程到零音频微调、优化损失和实时蒸馏均有较完整说明，公式与图表辅助理解。

*   影响力 (1.0/1.5)：[A_SUMMARY] 对音频驱动3D面部动画领域提供无需角色动画数据的可行路径，降低数据门槛，用户研究显示自然度和唇同步偏好显著，具有明确应用潜力。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 论文披露了单张A6000硬件、学习率、迭代次数、损失权重等主要训练与优化超参数，但缺少完整渲染参数、数据增强和扩散采样细节。

*   工程/实践价值 (1.1/1.5)：[A_METHOD][A_RESULTS] 实时蒸馏版AnyTalk_RT达到110 FPS和9.09 ms/帧，并提供特征匹配与blendshape重建蒸馏方案，工程落地价值明显；但AnyTalk离线优化约3.12秒/帧且RT版唇同步指标有折中下降。

### 🚨 局限与问题

1. **论文明确承认的局限**：  
   - 推理阶段优化耗时约 3.12 秒/帧；实时蒸馏版存在质量与速度的折中。  
   - 依赖预定义 blendshape，角色必须已 rigged；若缺乏嘴部开合等 blendshape，动画可能失败。  
   - 依赖 2D landmark，难以捕捉细微面部细节和高频运动；尝试密集光度损失未获定性收益且显著增加计算开销。  
   - 当前优化依赖正面视图；多视角尝试会因扩散生成不一致或 off-the-shelf 重建不匹配目标角色而失败。

2. **审稿人发现的潜在问题**：  
   - 评估指标不足：LSE-D/LSE-C 基于 2D 视频音频同步，无法衡量 3D 口型是否准确、有无穿透或非刚性形变；没有 mesh 级或 blendshape 级误差。  
   - 2D 视频生成器可能产生不适合目标 3D 角色 motion range 的嘴唇动作，后续优化只能在已有 blendshape 空间中逼近，可能导致含糊或过度平滑。  
   - 用户研究参与者为 21 人，每组比较覆盖 75 pairs，但论文未报告用户群体对 3D 动画经验的差异，也未做评分者间一致性分析。  
   - 只测试了单一语料 LibriSpeech 的英语音频，缺少不同语言、语速、噪声或情感语音的鲁棒性实验。  
   - “任意字符”的普适性宣言较强，但实验仅覆盖 5 个角色，尤其缺少极端风格化或嘴部结构高度非人形的角色。  
   - 论文未提供失败案例或对模型何时不可用的边界分析；未讨论计算显存、预训练版权/许可及与真实动作捕捉的定量差距。  
   - 蒸馏版 AnyTalk_RT 在唇同步指标上明显下降，但作者未提出针对该退化的改进策略或消融，削弱了实时应用的吸引力。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
