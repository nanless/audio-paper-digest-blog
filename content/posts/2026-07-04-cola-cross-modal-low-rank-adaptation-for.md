---
title: "CoLA: Cross-Modal Low-rank Adaptation for Multimodal Downstream Tasks"
date: 2026-07-04
draft: false
tags: [音视频理解, 参数高效微调, LoRA, 多模态模型]
categories: [icml-2026]
description: "音视频理解 | 8.3/10"
hiddenInHomeList: true
---

# 📄 CoLA: Cross-Modal Low-rank Adaptation for Multimodal Downstream Tasks

#音视频理解 #参数高效微调 #LoRA #多模态模型

**8.3/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 清晰 0.7/1 | 影响 1/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 1/1.5

🔥 **8.3/10** | 前25% | #音视频理解 | #参数高效微调 | #LoRA #多模态模型 | [arxiv](https://openreview.net/forum?id=8CBWgJY7n9)


### 👥 作者与机构

- 第一作者：Wish Suharitdamrong（Surrey Institute for People-Centred AI, University of Surrey; Centre for Vision, Speech and Signal Processing (CVSSP), University of Surrey）
- 通讯作者：Wish Suharitdamrong（ws00372@surrey.ac.uk）
- 作者列表：Wish Suharitdamrong（Surrey Institute for People-Centred AI, University of Surrey; CVSSP, University of Surrey）、Tony Alex（Surrey Institute for People-Centred AI, University of Surrey; CVSSP, University of Surrey）、Muhammad Awais（Surrey Institute for People-Centred AI, University of Surrey; CVSSP, University of Surrey）、Sara Atito（Surrey Institute for People-Centred AI, University of Surrey; CVSSP, University of Surrey）

### 💡 毒舌点评

CoLA 将 LoRA 的低秩分解巧妙扩展为双路径结构，为双编码器多模态适配提供了一条简洁的跨模态融合范式；视觉‑语言与音频‑视觉两组任务上的实验也较为扎实，并首次实现了基于 PEFT 的多任务视觉定位。然而，该方法本质上仍是对 LoRA 的线性外推，理论分析仅停留在秩和线性跨度层面，未能给出更深的表征交互机制；且跨模态路径在推理时不可合并带来的开销，在资源敏感场景中会成为硬伤。此外，损失函数完全缺失，复现存在实质性缺口。

### 📌 核心摘要

1. 要解决的问题：现有参数高效微调方法（尤其是 LoRA）在双编码器多模态架构中仅进行模态内独立适配，缺乏跨模态信息交互，限制了多模态下游任务的性能。
2. 方法核心：提出 CoLA（Cross‑Modal Low‑rank Adaptation），在标准 LoRA 的模态内低秩更新路径旁，引入一条由跨模态特征驱动的模态间低秩融合路径，通过超网络将另一模态的全局特征映射为方阵 \(\Phi \in \mathbb{R}^{r \times r}\)，并与低秩矩阵 \(B_C\)、\(A_C\) 相乘形成动态的跨模态权重更新 \(\Delta W_C = \lambda B_C \Phi A_C\)。同时采用渐进式跨模态特征传播策略，使两个编码器的每个线性组件（自注意力的 QKV 投影、输出投影、FFN 上下投影）在逐层前向过程中持续交换并融合另一模态的最新特征。
3. 与已有方法的区别：与现有在模块级别做融合的 PEFT 不同（如 adapter 串联、prompt 拼接），CoLA 直接在单个线性层的权重空间内实现跨模态交互，无需专用适配器，且可应用于任意双编码器架构与模态组合，具有高度的通用性和即插即用特性。
4. 主要实验结果：在视觉‑语言（RefCOCO/+/g REC 和 RES）和音频‑视觉（AVE、AVS）四个 benchmark 上，CoLA 均以相近或更低参数量超越 LoRA，如视觉‑语言平均 REC 从 82.3% 提升至 83.4%，RES 从 72.2% 提升至 73.7%；音频‑视觉 AVE 准确率从 79.2% 提升至 80.7%，AVS mIoU 从 80.1% 提升至 80.9%。在与专用 PEFT 方法（HiVG、MaPPER、DETRIS、STG-CMA、DG-SCT 等）的比较中，CoLA 达到有竞争力的性能，并首次实现基于 PEFT 的多任务视觉定位。
5. 实际意义：为多种模态组合的双编码器下游任务提供了一种统一、即插即用的跨模态参数高效微调方案，降低了多模态适配的计算和工程成本，有助于资源受限的研究者和开发者利用组合不同单模态大模型进行多模态任务开发。
6. 主要局限性：跨模态路径依赖动态特征，在推理时无法像 LoRA 那样合并到预训练权重中，导致显著的额外推理开销（显存增加约 31%，推理速度下降约 12.5%）；此外，超网络的上投影矩阵 \(W_{\text{up}}\) 参数量随秩 \(r\) 二次增长，高秩场景下效率下降；论文未给出损失函数的具体形式，部分训练配置缺失，影响完整复现。

### 🔗 开源详情

- 代码：https://github.com/peterwisu/CoLA
- 模型权重：论文中未提及
- 数据集：
  - RefCOCO、RefCOCO+、RefCOCOg（源自 MSCOCO，https://cocodataset.org）
  - AVE 数据集（Audio-Visual Event Localization，Tian et al., 2018，可通过学术渠道获取）
  - AVSBench-S4 数据集（Audio-Visual Segmentation Benchmark-S4，Zhou et al., 2022，可通过学术渠道获取）
- Demo：论文中未提及
- 复现材料：论文附录 A 提供了详细的训练超参数（表 8—10），附录 C 提供了消融实验的设计细节与图示，附录 D 说明了推理开销与局限性。但损失函数未给出。
- 论文中引用的开源项目：
  - LoRA (Hu et al., 2022): https://github.com/microsoft/LoRA
  - BERT (Devlin et al., 2019): https://github.com/google-research/bert
  - DINOv2 (Oquab et al., 2023): https://github.com/facebookresearch/dinov2
  - ViTDet (Li et al., 2022): https://github.com/facebookresearch/detectron2
  - EEVG (Chen et al., 2024): 多任务视觉 Grounding 解码器，论文中未提供直接链接
  - SSLAM (Alex et al., 2025): 自监督音频模型，https://openreview.net/forum?id=odU59TxdiB
  - Swin Transformer V2 (Liu et al., 2022): https://github.com/microsoft/Swin-Transformer
  - CLIP (Radford et al., 2021): https://github.com/openai/CLIP
  - TransVG、TransVG++、VG-LAW、HiVG、MaPPER、SwimVG、ETRIS、BarLeRIa、DETRIS、LAVisH、STG-CMA、DG-SCT 等为引用方法，代码链接需参见原论文。

### 🏗️ 方法概述和架构

CoLA 的整体架构针对双编码器多模态场景，包含两个对称的单模态编码器（如视觉 ViT 和语言 BERT，或视觉 ViT/DINOv2/Swin 和音频 SSLAM）。所有预训练权重冻结，仅训练插入各编码器线性层中的 CoLA 模块和下游任务头。每个模态编码器中的每一个线性层（自注意力的 \(W_q\)、\(W_k\)、\(W_v\)、输出投影 \(W_o\)、FFN 的上投影 \(W_{\text{up}}\) 和下投影 \(W_{\text{down}}\)）均嵌入 CoLA。

CoLA 将一个线性层的输出 \(h\) 计算为：
\[h = W_0 x + \Delta W_L x + \Delta W_C x\]
其中 \(\Delta W_L\) 为标准 LoRA 的模态内低秩更新：\(\Delta W_L = \frac{\alpha}{r} B_L A_L\)，\(B_L \in \mathbb{R}^{d_{\text{out}} \times r}\)，\(A_L \in \mathbb{R}^{r \times d_{\text{in}}}\)，秩 \(r \ll \min(d_{\text{in}}, d_{\text{out}})\)。

\(\Delta W_C\) 为模态间跨模态更新，被分解为：
\[\Delta W_C = \lambda B_C \Phi A_C\]
其中 \(B_C \in \mathbb{R}^{d_{\text{out}} \times r}\)，\(A_C \in \mathbb{R}^{r \times d_{\text{in}}}\) 为可学习的低秩矩阵，\(\Phi \in \mathbb{R}^{r \times r}\) 为从另一模态动态生成的中间方阵，标量 \(\lambda\) 为可学习参数，按层自适应调节跨模态路径的贡献强度。

\(\Phi\) 由一个小型超网络根据来自配对编码器的跨模态输入 \(x_c \in \mathbb{R}^{N_c \times d_c}\) 动态生成：首先从 \(x_c\) 提取全局描述 \(\bar{x}_c\)（对所有 token 做平均池化或取 ``[CLS]`` token），然后送入由两层线性层、GELU 激活和 LayerNorm 组成的超网络：
\[\Phi = \text{LN}(W_{\text{up}} \phi(W_{\text{down}} \bar{x}_c))\]
其中 \(W_{\text{down}} \in \mathbb{R}^{d_c / \gamma \times d_c}\) 将输入压缩到低维瓶颈（\(\gamma\) 为缩减因子），\(W_{\text{up}} \in \mathbb{R}^{r^2 \times d_c / \gamma}\) 将瓶颈表示投影到 \(r^2\) 维，经 reshape 后得到 \(r \times r\) 的矩阵 \(\Phi\)。此设计使跨模态权重更新对每个输入样本条件化，突破了静态 LoRA 更新在所有输入上不变的局限。

CoLA 对两个模态是对称的双向设计：模态 \(c\) 的编码器同样拥有自己的 \(\Delta W_L^c\) 和 \(\Delta W_C^c\)，其 \(\Phi^c\) 由模态 \(m\) 的特征生成，实现双向交互。消融实验证实，双向适应的性能（AVE 80.7%）显著优于单向（Vision→Audio 79.6%，Audio→Vision 80.2%），验证了双向对称设计的必要性。

CoLA 的 \(\Delta W_L\) 和 \(\Delta W_C\) 路径的矩阵 \(A\)、\(B\) 完全非共享。\(A\) 矩阵采用 Kaiming 均匀初始化，\(B\) 矩阵零初始化，确保训练起始点保持预训练知识；超网络的线性层未说明初始化方式。两条路径的梯度仅通过共享的上游信号 \(\delta\) 联系，但参数集无交集，避免了耦合更新干扰。

在双编码器逐层前向过程中，CoLA 采用渐进式跨模态传播（Algorithm 1）：

![图1](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/8CBWgJY7n9-p1-e3e5ace85.jpg)

在每个 Transformer 层内，两个编码器的输入先各自通过自注意力层（QKV 投影以跨模态特征为条件），生成各自的注意力输出，同时产出给对方编码器的交叉模态特征。该交叉特征随后传递给输出投影层和 FFN 层的 CoLA 组件，每个阶段均利用上一阶段更新的交叉特征。此递推更新机制使后续组件能利用更精炼的跨模态上下文。

![图2](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/8CBWgJY7n9-p1-e54f2a7d8.jpg)

消融实验比较了三种传播策略：Uniform（同一交叉特征用于本层所有组件）、Module-wise（同一模块内共享，模块间交换）和 Progressive。Progressive 在 RefCOCOg 上平均 76.5% 显著优于其余两种（均为 76.1%），验证了逐阶段细化交叉特征的有效性。

理论分析表明，单一样本下 \(\Delta W_C\) 的秩不超过 \(r\)，具有与 LoRA 相同的低秩表达能力；但由于 \(\Phi\) 随输入动态变化，跨样本的权重更新可张成最高 \(r^2\) 维的线性空间（Theorem 3.1），赋予 CoLA 比静态 LoRA 更强的输入条件化表达能力。

为控制超网络 \(W_{\text{up}}\) 的 \(O(r^2)\) 参数量增长，论文探索了 Kronecker 分解 \(\Phi = \Phi_1 \otimes \Phi_2\)（\(\Phi_1 \in \mathbb{R}^{m \times p}\)，\(\Phi_2 \in \mathbb{R}^{n \times q}\)，\(mn = pq = r\)），将 \(W_{\text{up}}\) 输出维度从 \(r^2\) 降至 \(mn+pq\)；以及非对称秩分配，将更大的秩分配给跨模态路径而减小模态内路径秩，在 AVE 上取得更优的精度‑参数权衡。

### 💡 核心创新点

1. 双路径跨模态低秩适配：在标准 LoRA 的模态内更新（\(\Delta W_L\)）之外，增设由跨模态特征驱动的模态间低秩更新（\(\Delta W_C\)），在线性层权重空间内实现显式的跨模态交互，区别于以往在模块输出或适配器层面做融合的 PEFT 方案。
2. 基于超网络的动态中间变换：利用小型超网络从另一模态的全局特征动态生成方阵 \(\Phi\)，使跨模态调制变为输入条件化过程，不同样本产生不同的权重更新，突破静态 LoRA 的表达上限（跨样本表达空间维度最高达 \(r^2\)）。
3. 渐进式交叉特征传播策略：在双编码器的逐层、逐组件间递推传递并更新交叉模态特征，使后续组件能够利用更精炼的跨模态上下文，消融证实优于均匀或模块级的一次性注入。
4. 首次将 PEFT 引入多任务视觉定位：在视觉‑语言 REC 和 RES 上构建统一的多任务 PEFT 框架，填补了该场景下缺少参数高效多任务方案的空白。

### 📊 实验结果

以下为论文中的主要实验结果。

视觉‑语言任务（REC/RES）与 LoRA 的比较

| 方法 | 参数更新 (M) | 总参数 (M) | 更新比例 | RefCOCO val/testA/testB | RefCOCO+ val/testA/testB | RefCOCOg val/test | Avg REC | Avg RES |
|------|--------------|------------|----------|------------------------|--------------------------|-------------------|---------|---------|
| LoRA (r=16) | 28.0 | 223.4 | 12.5% | 88.7/90.5/86.0 | 78.5/83.3/70.6 | 80.2/80.2 | 82.3 | 72.2 |
| LoRA (r=54) | 40.6 | 236.0 | 17.2% | 88.4/90.2/85.9 | 78.3/82.9/69.6 | 79.7/79.3 | 81.8 | 72.3 |
| CoLA (r=16) | 40.5 | 236.0 | 17.2% | 89.4/91.0/86.9 | 79.6/84.7/71.9 | 81.7/81.8 | 83.4 | 73.7 |

视觉‑语言任务与现有 PEFT/FT 方法的对比

![图3](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/8CBWgJY7n9-p15-vb534669f.jpg)

| 方法 | 更新比例 | RefCOCO val/testA/testB | RefCOCO+ val/testA/testB | RefCOCOg val/test | Avg REC | Avg RES |
|------|----------|------------------------|--------------------------|-------------------|---------|---------|
| EEVG (FT) | 100% | 88.1/90.3/85.5 | 78.0/82.4/69.2 | 79.6/80.2 | 81.7 | 72.2 |
| HiVG | 20.1% | 87.3/89.9/83.3 | 78.1/83.8/68.1 | 78.3/78.8 | 80.9 | – |
| MaPPER | 6.2% | 86.0/88.9/81.2 | 74.9/81.1/65.7 | 76.3/75.8 | 78.7 | – |
| SwimVG | 2.04% | 88.3/90.4/84.9 | 77.9/83.2/69.95 | 80.1/79.7 | 81.8 | – |
| ETRIS | 17.4% | – | – | – | – | 63.4 |
| BarLeRIa | 17.8% | – | – | – | – | 67.1 |
| DETRIS | 17.5% | – | – | – | – | 71.0 |
| CoLA | 17.2% | 89.4/91.0/86.9 | 79.6/84.7/71.9 | 81.7/81.8 | 83.4 | 73.7 |

音频‑视觉任务（AVE/AVS）与 LoRA 的比较

| 方法 | 参数更新 (M) | 总参数 (M) | 更新比例 | AVE Acc | AVS mIoU |
|------|--------------|------------|----------|---------|----------|
| LoRA (r=16) | 6.1 | 183.1 | 3.3% | 79.2 | 80.1 |
| LoRA (r=54) | 18.7 | 195.6 | 9.6% | 79.2 | – |
| CoLA (r=16) | 18.6 | 195.6 | 9.5% | 80.7 | 80.9 |
| LoRA (r=48) | 44.6 | 363.8 | 12.3% | – | 80.2 |
| CoLA (r=16) | 44.8 | 364.0 | 12.3% | – | 80.9 |

音频‑视觉与现有 PEFT 方法的对比

![图4](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/8CBWgJY7n9-p15-vd188213e.jpg)

| 方法 | 视觉/音频骨干 | AVE Acc | AVS mIoU |
|------|--------------|---------|----------|
| LAVisH | ViT-B-16 (共享) | 75.3 | 80.1 |
| STG-CMA | CLIP-B-16 (共享) | 78.7 | 81.8 |
| DG-SCT | Swin-L/HTS-AT | – | 80.9 |
| CoLA | ViT-B-16/SSLAM | 79.1 | – |
| CoLA | DINOv2-B-14/SSLAM | 80.7 | – |
| CoLA | DINOv2-L-14/SSLAM | 81.1 | – |
| CoLA | Swin-L/SSLAM | – | 80.9 |

关键消融

![图5](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/8CBWgJY7n9-p3-v39f8dd2e.jpg)

- 路径矩阵共享策略：完全非共享设计在 RefCOCOg 上 REC 平均 81.7、RES 平均 71.3，优于完全共享的 81.2/70.4，验证了双路径解耦的必要性。
- 交叉模态传播：渐进式传播在 RefCOCOg 上达到 81.7/71.3（Avg 76.5），优于均匀（76.1）和模块级（76.1）。
- 双向 vs. 单向跨模态适应（AVE 任务）：双向 CoLA 80.7% > Audio→Vision 80.2% > Vision→Audio 79.6% > LoRA 79.2%，验证双向设计收益。
- 非对称秩 + Kronecker 分解：在 AVE 上，采用 8 模态内秩 / 32 跨模态秩 和 Kronecker 分解的 CoLA 达到 81.44% 准确率，超越 \(r^2\) 版本的 80.7%，且 \(W_{\text{up}}\) 参数量从 12,288 降至 1,536（\(r=16\)），从 49,152 降至 3,840（\(r=32\)），显著降低超网络开销。

### 🔬 细节详述

- 训练数据：
  - 视觉‑语言：RefCOCO（19,994 图像/142,210 表达式，源自 MSCOCO）、RefCOCO+（19,992 图像/141,564 表达式）、RefCOCOg（25,799 图像/141,564 表达式）。未提及特殊数据增强。
  - 音频‑视觉：AVE（4,143 个 10 秒视频，28 类事件定位标注，逐秒标签）和 AVSBench-S4（4,932 视频，23 类像素级掩码标注）。未提及数据增强。
- 损失函数：论文未在正文或附录中明确说明训练损失函数的具体形式，仅给出各任务的评估指标（REC 用 IoU>0.5 准确率、RES 用 mIoU、AVE 用分类准确率、AVS 用 mIoU），推测相应使用了检测/分割/分类的标准损失（如交叉熵、L1 回归、Dice Loss 等），但无法确认。
- 训练策略：
  - 视觉‑语言：AdamW 优化器，权重衰减 1e-4，学习率 Adapter 1e-4、Decoder 2.5e-5，多项式调度（poly power 0.9），150 epoch，batch size 80，图像尺寸 448。秩 \(r=16\)，缩放 \(\alpha=8\)，跨模态缩放 \(\lambda=0.5\)，缩减因子 \(\gamma=16\)。
  - AVE：Adam 优化器，学习率 Adapter 5e-6、MLP 4e-6，50 epoch，batch size 2。\(r=16\)，\(\alpha=8\)，\(\lambda=0.1\)。对于 DINOv2-L-14（24 层），CoLA 应用于偶数层匹配 SSLAM 的 12 层，奇数层使用 LoRA。
  - AVS：Adam 优化器，学习率 2e-4，15 epoch，batch size 8。\(r=16\)，\(\alpha=8\)，\(\lambda=0.1\)。Swin-L 共 4 个 stage、24 层，CoLA 应用于偶数层匹配 SSLAM 层，\(\gamma\) 随 Swin-L 各 stage 特征维度变化为 \([2,4,8,16]\)，SSLAM→Swin 侧固定 \(\gamma=16\)。
- 关键超参数：双路径秩默认 16，缩放 \(\alpha=8\)，跨模态缩放 \(\lambda\) 初值 0.5（视觉‑语言）或 0.1（音频‑视觉），缩减因子 \(\gamma=16\)（瓶颈维度 \(d_c/\gamma\)）。\(\lambda\) 的逐层、逐组件学习值在不同任务上呈现明显差异：视觉‑语言任务 Q、K 投影在浅层 \(\lambda\) 较高，而音频‑视觉 AVE 深层 \(\lambda\) 逐步增大。
- 训练硬件：未说明 GPU 型号及数量，仅给出 GFLOPs 和训练/推理吞吐对比（图 6）。CoLA GFLOPs 与 LoRA 几乎相同（5.82 vs 5.78），训练速度略慢（2.31 vs 2.84 samples/s）。
- 推理细节：模态内路径 \(\Delta W_L\) 可合并至预训练权重；模态间路径 \(\Delta W_C\) 需在线计算交叉特征和超网络前向，不可合并，带来额外延迟和显存占用（图 6：显存从 12,948 MB 升至 16,960 MB，推理速度从 9.13 降至 7.99 samples/s）。未提及解码策略细节（如 beam search、top-k 等）。
- 正则化与初始化：A 矩阵 Kaiming 均匀初始化，B 矩阵零初始化，保证训练起点从预训练知识开始。衰减权重 1e-4（Vision-Language）。未提及 dropout 或其他正则化。

![图6](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/8CBWgJY7n9-p9-v3dbedf1b.jpg)

### ⚖️ 评分理由

*   创新性 (1.5/2)：在 LoRA 框架内引入由交叉模态特征驱动的独立低秩路径，并配合渐进式特征传播，思路直观且首次将跨模态直接作用于线性层权重更新，区别于传统的适配器级或特征级融合。理论部分给出秩保持和表达空间维度分析，并在 Theorem 3.1 中严格证明了跨样本更新可张成最高 \(r^2\) 维空间，增加了 insight。但整体仍属 LoRA 的线性扩展，核心构造（低秩分解+超网络）均为已有技术的组合，创新高度有限，未提出全新的参数高效微调范式。
*   技术严谨性 (1.2/1.5)：方法推导清晰，\(\Delta W\) 的分解和梯度解耦分析合理，\(\Phi\) 动态生成和可学习 \(\lambda\) 的引入有合理的设计动机。理论分析正确但较浅，仅讨论了秩和线性跨度，未涉及学习动力学、信息瓶颈、跨模态表征对齐的量化等更深层问题。\(\Phi\) 动态生成和交叉特征传播存在潜在的训练不稳定风险，论文通过可学习标量 \(\lambda\) 的层间可视化进行了部分缓解，但缺乏进一步的稳定性分析或理论保证。整体无明显技术漏洞。
*   实验充分性 (1.3/1.5)：在四个代表性多模态 benchmark 上进行了充分的比较，包括与等秩和等参数 LoRA 的对比，以及与多种专用 PEFT 方法（HiVG、MaPPER、DETRIS、STG-CMA、DG-SCT 等）的对照，结果一致且提升明显。消融实验覆盖了路径共享、传播策略、双向 vs. 单向、秩分配和 Kronecker 分解等关键设计，还分析了跨模态 \(\lambda\) 的层间变化，佐证了设计的有效性。不足在于：缺少统计显著性检验、误差棒，以及在不同随机种子下的重复实验；未对训练数据进行敏感性分析；部分基线比较中骨干不完全一致（如 AVS 上与 DG-SCT 的比较中骨干模型不同），削弱了对比的严谨性。
*   清晰度 (0.7/1)：整体结构合理，图文配合较好（图 1—6 和 Algorithm 1 有助于理解整体流程）。但部分符号未做清晰引入（如模态 \(m\) 与 \(c\) 的对应关系在公式与图中偶有混淆），最关键的问题在于：损失函数在正文和附录中均完全未说明，对完全复现构成实质性障碍。关键的超参数 \(\gamma\)、\(\lambda\) 的选取逻辑和敏感性讨论不够充分，超网络各组件（如 W_down、W_up）初始化方式未说明。
*   影响力 (1.0/1.5)：CoLA 为多模态双编码器 PEFT 提供了一种通用且有效的方案，在视觉‑语言与音频‑视觉两个域都展示了增益，对从事多模态下游任务适配的社区具有实际参考价值。该工作首次实现基于 PEFT 的多任务视觉定位，可能启发后续统一多模态高效适配研究。但对纯语音/音频领域读者而言，该论文核心定位在多模态视觉/音频的结合，并非语音处理本身（仅以音频作为参与模态之一，且任务为音视频联合理解而非纯音频），因此直接影响力稍受限；但音频‑视觉任务的结果仍对音视频分析社区有推动作用。
*   开源 (1.2/1.5)：论文提供了 GitHub 代码仓库链接（https://github.com/peterwisu/CoLA），属于模型方法类的核心开源内容。论文未提及是否包含完整的 README 和使用文档，亦未说明模型权重、训练日志、复现脚本等是否一并公开，故推测开源完整度较高但文档可能不完善。
*   可复现性 (0.4/0.5)：附录给出了主要训练超参数（表 8—10）、优化器设置、学习率、batch size 和部分架构细节（如 Swin 各阶段的 \(\gamma\) 取值），结合主体伪代码（Algorithm 1）和公式，有经验的读者基本能够复现核心方法。但损失函数被完全省略，部分关键配置（如混合精度训练与否、梯度累积步数、超网络权重初始化等）未说明，复现仍有明显缺口。
*   工程/实践价值 (1.0/1.5)：CoLA 可以直接插入现有主流 ViT/BERT/Swin/SSLAM 等双编码器架构，对多模态应用开发者而言是低侵入性的即插即用方案，继承了 LoRA 的易用性。文中讨论了实际部署中跨模态路径无法合并的推理开销（显存+31%，推理速度‑12.5%）以及 Kronecker 分解、非对称秩等缓解策略，展示了一定的工程考量。但整体依然偏重方法验证，缺少端到端系统级部署报告或工业级规模实验，推理开销在资源敏感场景下可能成为致命缺陷。

### 🚨 局限与问题

论文明确承认的局限
- 跨模态路径 \(\Delta W_C\) 依赖动态交叉模态特征，在推理时无法像标准 LoRA 合并到预训练权重中，导致额外计算和内存开销（Limitations 节及图 6）。
- 超网络的上投影 \(W_{\text{up}}\) 参数量随秩 \(r\) 二次增长（\(r^2\)），高秩场景下参数效率降低，需借助 Kronecker 分解或非对称秩分配来缓解。

审稿人发现的潜在问题
- 损失函数完全缺失：正文和附录均未说明训练目标的具体形式，这对复现和公平比较构成显著阻碍。这是目前最严重的写作缺失，审稿/复用流程中通常会被要求补充。
- 部分基线对比不对等：在 AVS 任务上与 DG-SCT 的对比中，两者使用不同的视觉/音频骨干（Swin-L/SSLAM vs Swin-L/HTS-AT），CoLA 仅持平（80.9% vs 80.9%），难以分辨性能差异来自方法还是骨干模型能力；在 AVE 上与 STG-CMA CLIP-L-14 的对比中，CoLA 使用 DINOv2-L-14 但落后（81.1% vs 83.3%），作者将其归因于对方专用时空适配器的扩展性更好，这反过来削弱了 CoLA 作为“通用方案”的竞争力。
- 理论分析与实证验证脱节：理论分析证明了 \(\Delta W_C\) 跨样本可达 \(r^2\) 维空间，但未提供任何实验（如有效秩分析、CKA 相似度、互信息等）来验证 Φ 实际利用了多少额外表达维度，这是理论与实验配合缺失。
- 缺乏大规模验证：实验仅在相对小规模的数据集上进行，未在更大规模多模态任务（如视频问答、多模态翻译、多模态推理）或更大模型上验证可扩展性，缺少在大模型时代的说服力。
- 缺少统计显著性检验：未进行多次运行的标准差报告，结果的稳定性和显著性无法判断。
- 超网络设计空间探索不足：超网络仅测试了基础的两层 MLP + LayerNorm 结构，未探索其他可能的架构（如 Transformer 块、卷积网络），也未讨论超网络是否需要预训练或特殊的正则化策略。
- 推理开销的量化与缓解措施不足：论文仅给出了推理开销的数值，但未探讨其他可能的缓解方案（如对交叉特征缓存、稀疏化、知识蒸馏等），对实际部署的指导意义有限。
- 对纯音频社区影响力受限：论文大部分实验仍依赖视觉模态（AVE 和 AVS 均为音视频联合任务，且性能依赖于视觉骨干的选择），缺乏仅音频‑文本或纯音频处理的展示，对纯音频/语音研究者的直接价值有限。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/2026-07-04/)
