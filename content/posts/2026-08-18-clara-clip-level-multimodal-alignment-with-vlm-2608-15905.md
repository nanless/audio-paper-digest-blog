---
title: "CLARA: Clip-Level Multimodal Alignment with VLM-Derived Rationales for Hateful Video Detection"
date: 2026-08-18
draft: false
tags: [音视频理解, 多模态模型, 对比学习, Transformer, 内容审核]
categories: [论文速递]
description: "音视频理解 | 7.2/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.15905"
---

# 📄 CLARA: Clip-Level Multimodal Alignment with VLM-Derived Rationales for Hateful Video Detection

标签：#音视频理解 #多模态模型 #对比学习 #Transformer #内容审核

**7.2/10** | 创新 1.4/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **7.2/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #音视频理解 | #多模态模型 | #对比学习 #Transformer | [arxiv](https://arxiv.org/abs/2608.15905)


### 👥 作者与机构

- 第一作者：Yuchen Zhang（Institute for Analytics and Data Science, University of Essex）
- 通讯作者：未明确标注
- 作者列表：
  - Yuchen Zhang（Institute for Analytics and Data Science, University of Essex）
  - Shuang Dai（Department of Engineering, University of Exeter）
  - Zeyu Fu（Department of Computer Science, University of Exeter）
  - Yunfei Long（School of Electronic Engineering and Computer Science, Queen Mary University of London）
  - Ravi Shekhar（Institute for Analytics and Data Science, University of Essex）
  - Haralambos Mouratidis（Institute for Analytics and Data Science, University of Essex）

### 💡 毒舌点评

这篇论文把“utterance-aligned clip 多模态对齐 + MoE 动态融合 + local-global 对比学习 + VLM rationale + gated Transformer”组合得比较完整，并且在 HateMM、MHC_CN、MHC_EN、DeHate 四个评测设置上稳定超过 MM-HSD、HVGuard、MoRE 等强基线，工程完成度和实验覆盖度不低。但方法层面的核心增量更像是对现有 MoE、对比学习、clip 级分割和 VLM reasoning 的重新打包，缺乏本质上新的建模机制或理论 insight。更直接地说，rationale 中显式包含 VLM 对 hate/non-hate 的最终判断，存在模型直接利用 Qwen3VL 的预测信号而非真正学会跨模态仇恨理解的嫌疑；论文并未对 rationale 字段做拆解消融来排除这一点。作为音视频理解论文，其音频表征本身并非创新来源，音频只是多模态通道之一，语音领域的核心贡献有限。

### 📌 核心摘要

1. 论文要解决的是仇恨视频检测问题，尤其关注仇恨含义往往由短时、隐式、跨时间片段的语音、视觉和文本交互产生，传统视频级表示容易稀释短促关键线索。
2. CLARA 的核心是将视频按 utterance 边界切分为 clip 序列，通过 MoE clip encoder 做自适应多模态融合，再引入 local-global segment contrastive learning 建模短时线索与长时上下文，并用 VLM 生成的 rationale 通过 gated Transformer 提供高层语义指导。
3. 与已有方法相比，CLARA 的主要不同在于将融合单元从整段视频下移到 utterance-aligned clip，并在早期进行跨模态对齐，而不是先把各模态压缩成全局表示。
4. 在 HateMM、MHC_CN、MHC_EN、DeHate 四个评测设置上，CLARA 均取得最佳 Acc 和 M-F1；例如 HateMM 上 Acc/M-F1 为 0.879/0.872，显著高于 MM-HSD 的 0.839/0.833 和 HVGuard 的 0.815/0.813。Qwen3VL 直接 prompting 作为 baseline 时 Acc/M-F1 仅为 0.738/0.727，远低于任务特定方法，说明通用 VLM 无法替代专门的检测模型。
5. 消融显示去掉任一模态、MoE、对比学习、rationale 或 Transformer 均会带来性能下降，其中 text 模态和 gated Transformer 的移除在若干数据集上下降最明显。
6. 实际意义在于为视频内容审核提供更细粒度、时序敏感的检测框架，提升对隐式仇恨内容的识别能力。
7. 主要局限是 VLM rationale 中包含显式仇恨标签判断，可能造成目标信息泄漏或过强依赖 VLM；此外推理成本高于轻量融合方法。

下图展示了一个仇恨视频的例子，仇恨含义通过多个片段逐渐显现。

![Figure 1. An example of hateful video. The hate speech is not fully revealed by single frame or utterance, but emerges through contextual buildup across multiple clips.](https://arxiv.org/html/2608.15905v1/Fig1.png)

图中可见，仇恨线索并非在单个片段中完全揭示，而是跨片段语境构建起来，这支持了论文采用clip-level建模的动机。

### 🔗 开源详情

- 代码：https://github.com/yuchenzhang-1/CLARA （论文脚注明确给出）
- 模型权重：论文中未提及
- 数据集：论文中提及三个公开数据集：HateMM、MultiHateClip（含 MHC_CN/MHC_EN）、DeHate，均为 publicly available，但未提供新数据集或下载链接；覆盖平台包括 BitChute、Bilibili、YouTube、TikTok
- Demo：论文中未提及
- 复现材料：论文给出了主要训练配置：每视频帧数 \(S_{\text{frame}}=40\)；文本编码器使用 BERT-base Chinese（https://huggingface.co/google-bert/bert-base-chinese）和 BERT-base uncased（https://huggingface.co/google-bert/bert-base-uncased）；MoE 使用 8 个专家、top-3 routing；λ_LB=0.01；local/global segment ratios \(r_{\ell}=0.2\)、\(r_g=0.8\)；λ_CL=0.3；优化器为 AdamW，learning rate 3e-5，weight decay 1e-4，warmup ratio 0.05，batch size 32；采用 5-fold cross-validation；最大 clips per video 设为 100；附录中提供了 VLM prompt 全文、rationale 表示生成、显著性检验、参数研究和计算成本等细节。论文未提供检查点或模型权重文件。
- 论文中引用的开源项目：
  - BERT-base Chinese：https://huggingface.co/google-bert/bert-base-chinese
  - BERT-base uncased：https://huggingface.co/google-bert/bert-base-uncased
  - Qwen3VL-8B-Instruct：论文中提及，但未给出直接链接
  - LLaVA1.5-7B：论文中提及，但未给出直接链接
  - 其他 baseline 方法如 MoRE、HVGuard、MM-HSD 仅以方法名出现，论文中未给出代码链接

### 🏗️ 方法概述和架构

CLARA 是一个多阶段、可训练的视频仇恨检测框架，输入是视频及其标题、转录文本，输出为 hateful/non-hateful 二分类。整体流程包括 utterance-aligned clip 切分、多模态特征提取、MoE clip encoder、local-global segment contrastive learning、VLM rationale 生成、rationale-gated Transformer 编码和最终 MLP 分类。其关键设计不是把整段视频压成一个全局向量，而是先在 utterance 边界上形成细粒度 clip，再做时序聚合。

下图展示了CLARA的整体框架，包括多阶段处理流程。

![Figure 2. Overall framework of CLARA. An input video is first segmented into utterance-aligned clips,](https://arxiv.org/html/2608.15905v1/Framework.png)

框架图清晰地展示了从输入视频到最终分类的各个模块，如utterance-aligned clips切分、MoE编码器和VLM rationale生成。


在视频切分阶段，CLARA 使用 Whisper-large-v3 获得句级时间戳，以 utterance 边界作为 clip 边界，使文本、音频和视觉信息在语义上更自然地对齐。论文对静音段采用合并策略以避免不必要的碎片化。为限制极长视频带来的计算开销，论文将最大 clip 数设为 100，超出时按时间顺序保留前 100 个 clip；附录中说明该阈值仅影响 3.39% 的 DeHate 视频和 8.73% 的 HateMM 视频，无 MHC_CN 或 MHC_EN 视频超过该上限。附录统计显示，HateMM 和 DeHate 中每个视频的 clip 中位数分别为 27 和 18，而 MHC_CN 和 MHC_EN 均为 9；clip 时长中位数在 2.0 到 2.4 秒之间。

在多模态特征提取阶段，每个 clip 分别处理三种模态。音频信号输入 Whisper-large-v3 encoder 得到音频 embedding；视觉帧按各 clip 时长比例从总帧预算中采样，主实验使用总帧预算 40，帧特征由预训练 ViT 提取；文本特征来自 transcription 和使用 PaddleOCR 从采样帧中提取的 OCR 文本，两者分别由 BERT 编码后拼接。各模态特征先 mean-pool，再通过两层 MLP 投影到共享空间，最终 concat 成 fused clip representation。

MoE clip encoder 接收该 fused 表示，先由线性门控网络输出对所有专家的 softmax 分布，然后取 top-K。主实验使用 8 个专家、top-3 路由。每个专家是两层 MLP，其输出按 top-K 概率加权求和，得到 clip-level 表示。为避免门控网络坍塌到少数专家，引入 MoE load-balancing loss，其形式为 \(\mathcal{L}_{\mathrm{LB}}=M\sum_{m=1}^{M}\mathrm{Imp}(m)\,\mathrm{Load}(m)\)，其中 \(\mathrm{Imp}(m)\) 表示专家重要度，\(\mathrm{Load}(m)\) 表示 top-K 负载比例，权重 λ_LB=0.01。

在时序表示学习阶段，CLARA 构造 local segment 和 global segment。local segment 长度比例 r_l 为 0.2，global segment 长度比例 r_g 为 0.8，两者从同一视频中独立采样起始位置，不强制相互包含。每个 segment 经 mean-pool 后得到 segment 表示。采用双向 InfoNCE 对比学习，正样本为同一视频的 local 和 global segment，负样本为 batch 内其他视频的 segment 表示，温度参数 τ 未给出具体默认值。对比损失权重 λ_CL 在主实验中为 0.3。

VLM rationale 生成使用 Qwen3-VL-8B-Instruct。输入包括视频标题（如有）、完整 transcription 和均匀采样的 20 帧。论文采用两步提示：第一步做客观分析，输出视觉描述、文本描述、整体内容摘要和跨模态关系；第二步做仇恨内容验证，输出 label、explicitness、confidence、reasons、notes。最终 rationale 是一个结构化字段列表，包含 content summary、visual description、textual description、cross-modal relation、contextual elements、final decision、reasons、notes 八个字段。该 rationale 由 BERT 编码并投影到与 clip 隐藏空间相同的维度。

在 video-level encoding 阶段，CLARA 对 rationale 表示和 clip 序列分别做 mean-pool 和线性+sigmoid 门控，得到 rationale gate 和 clip gate。门控后的 rationale 与 clip token 拼接，加上位置编码后进入 Transformer encoder。最后取 Transformer 输出作为视频表示，经过两层 MLP 和 softmax 完成分类。

训练目标由三部分组成：交叉熵分类损失、local-global 对比损失和 MoE load-balancing loss，整体为 \(\mathcal{L}=(1-\lambda_{\text{CL}})\mathcal{L}_{\text{CE}}+\lambda_{\text{CL}}\mathcal{L}_{\text{CL}}+\lambda_{\text{LB}}\mathcal{L}_{\text{LB}}\)。主要可训练部分包括模态投影器、MoE experts、gated Transformer、分类 MLP；预训练 BERT、ViT、Whisper 是否在训练中微调，论文未明确说明。

### 💡 核心创新点

1. **Utterance-aligned clip 建模**：将视频从整段表示改为 utterance 对齐的 clip 序列，能在语义边界上保留短促仇恨信号，避免长中性内容稀释关键线索。相比固定长度切片，论文实验显示 utterance-aligned segmentation 在 HateMM 上 M-F1 从 0.8285 提升至 0.8720，在 MHC_CN 上从 0.6547 提升至 0.7340。
2. **MoE-based clip encoder**：在 clip 级别采用动态路由融合文本、音频、视觉，而不是对所有视频使用一套固定融合规则。MoE 门控和 top-K 选择允许不同 clip 根据其多模态证据偏好不同专家，top-2/top-3 路由通常优于 top-1，显示适度稀疏和专家协作的价值。
3. **Local-global segment contrastive learning**：显式建模短时局部片段与长时全局片段之间的一致性，同时推开不同视频的 segment 表示。消融显示 w/o CL 在 HateMM 上 M-F1 从 0.872 降至 0.802，在 MHC_EN 上从 0.727 降至 0.679，说明该目标提供了有效正则化。
4. **VLM-derived rationale + gated Transformer**：用两步 VLM 提示生成结构化的视频级语义 rationale，并通过 source-level gate 对 rationale 和 clip token 做粗粒度调制后再进入 Transformer。这一设计使模型能在高层语义指导与低层逐 clip 证据之间进行动态权衡。
5. **在多个仇恨视频数据集上验证 SOTA**：CLARA 在 HateMM、MHC_CN、MHC_EN、DeHate 上稳定超过 MM-HSD、HVGuard、MoRE 等强基线，并在 5 折交叉验证下通过 paired t-test 显示提升具有统计显著性。

### 📊 实验结果

本文使用 HateMM、MHC_CN、MHC_EN、DeHate 四个数据集/子集，指标为 Acc、M-F1、M-Pre、M-Rec。CLARA 主实验结果如表所示，表中保留直接 VLM baseline（Qwen3VL、LLaVA）、强基线（MoRE、HVGuard、MM-HSD）和 CLARA 的 Acc/M-F1。

| Method | HateMM Acc | HateMM M-F1 | MHC_CN Acc | MHC_CN M-F1 | MHC_EN Acc | MHC_EN M-F1 | DeHate Acc | DeHate M-F1 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Qwen3VL | 0.738 | 0.727 | 0.709 | 0.597 | 0.708 | 0.588 | 0.657 | 0.595 |
| LLaVA | 0.688 | 0.439 | 0.669 | 0.401 | 0.673 | 0.402 | 0.687 | 0.415 |
| MoRE | 0.813 | 0.803 | 0.691 | 0.539 | 0.697 | 0.584 | 0.711 | 0.616 |
| HVGuard | 0.815 | 0.813 | 0.754 | 0.707 | 0.710 | 0.632 | 0.707 | 0.586 |
| MM-HSD | 0.839 | 0.833 | 0.683 | 0.654 | 0.688 | 0.653 | 0.689 | 0.626 |
| CLARA | 0.879 | 0.872 | 0.779 | 0.734 | 0.763 | 0.727 | 0.735 | 0.659 |

CLARA 相比第二强基线在 HateMM 上 Acc 提升 4.0 个百分点，在 MHC_CN 上提升 2.5 个百分点，在 MHC_EN 上提升 5.3 个百分点，在 DeHate 上提升 2.4 个百分点。M-Pre 和 M-Rec 也整体最高；例如 HateMM 上 CLARA M-Pre/M-Rec 为 0.874/0.872，HVGuard 为 0.811/0.814，MM-HSD 为 0.835/0.833。

消融实验中，去掉 text 模态通常造成最大下降：HateMM M-F1 从 0.872 降至 0.707，MHC_EN 从 0.727 降至 0.468；去掉 rationale 后 HateMM M-F1 降至 0.803，DeHate 降至 0.506；用 mean pooling 替换 gated Transformer 后 MHC_CN M-F1 从 0.734 降至 0.502，说明时序建模与 rationale 对某些数据集尤其重要。

参数分析显示：MoE 在 HateMM 上于 10 个专家、top-2 路由达到峰值，但主实验的 8 专家 top-3 配置在各数据集上保持稳定竞争性；对比学习权重在 0.3-0.4 附近最优；local ratio 0.2、global ratio 0.7-0.8 组合较稳定；总帧预算并非越大越好，HateMM 上 40 帧最佳，MHC_CN 上 80 帧最佳，更高预算在 MHC_EN 和 DeHate 上甚至带来性能下降。

下图展示了local和global segment比率对HateMM数据集M-F1的影响。

![(b)](https://arxiv.org/html/2608.15905v1/HateMM_lg_heatmap.png)

热图显示local ratio约0.2和global ratio约0.8的组合通常带来最佳性能，这与论文的参数选择一致。


下图显示了在HateMM数据集上，MoE专家数和top-k路由选择对模型M-F1分数的影响。

![(a)](https://arxiv.org/html/2608.15905v1/HateMM_moe_heatmap.png)

热图揭示了参数敏感性，表明在8-10个专家和top-2或top-3路由时性能较优。


统计显著性方面，论文在 5 折结果上对 CLARA 与 MoRE、HVGuard、MM-HSD 做 paired t-test，所有数据集和四个指标上的 p 值均小于 0.05。例如 HateMM 上 CLARA-MoRE 的 Acc p=4.00e-3，CLARA-HVGuard 的 M-F1 p=2.42e-2，CLARA-MM-HSD 的 M-F1 p=7.50e-3。

### 🔬 细节详述

- **训练数据**：使用三个公开数据集：HateMM、MultiHateClip 及其中文/英文子集 MHC_CN/MHC_EN、DeHate。规模分别为 HateMM 1065 个视频、MHC_CN 906 个、MHC_EN 903 个、DeHate 6688 个。来源平台包括 BitChute、Bilibili、YouTube、TikTok。原始 MultiHateClip 中 hate 和 offensive 样本被合并为单类，与 non-hate 构成二分类任务。数据预处理包括 Whisper-large-v3 utterance 级切分、PaddleOCR 提取 OCR 文本、按 clip 时长分配帧采样预算。
- **损失函数**：
  - 交叉熵损失 \(\mathcal{L}_{\mathrm{CE}}\)：用于最终 hateful/non-hateful 分类。
  - local-global segment contrastive loss \(\mathcal{L}_{\mathrm{CL}}\)：双向 InfoNCE，正样本为同一视频的 local 和 global segment，负样本为 batch 内其他视频的 segment 表示，温度 τ 未给出默认值。
  - MoE load-balancing loss \(\mathcal{L}_{\mathrm{LB}}\)：降低专家使用不平衡，形式为 \(\mathcal{L}_{\mathrm{LB}}=M\sum_{m=1}^{M}\mathrm{Imp}(m)\,\mathrm{Load}(m)\)，权重 λ_LB=0.01。
  - 总损失为 \(\mathcal{L}=(1-\lambda_{\text{CL}})\mathcal{L}_{\text{CE}}+\lambda_{\text{CL}}\mathcal{L}_{\text{CL}}+\lambda_{\text{LB}}\mathcal{L}_{\text{LB}}\)，主实验 λ_CL=0.3。
- **训练策略**：优化器 AdamW，学习率 3e-5，weight decay 1e-4，warmup ratio 0.05，batch size 32，最多训练 50 epochs，采用 5 折交叉验证，train:validation:test 为 7:1:2，early stopping。
- **关键超参数**：
  - 总帧预算 \(S_{\text{frame}}=40\)。
  - MoE 专家数 \(M=8\)，top-K=3。
  - local ratio \(r_{\ell}=0.2\)，global ratio \(r_g=0.8\)，λ_CL=0.3。
  - 文本编码器：中文使用 BERT-base Chinese，英文和 rationale 使用 BERT-base uncased。
  - 最大 clip 数 100。
  - VLM rationale 使用 Qwen3-VL-8B-Instruct，输入 20 帧。
  - 未说明：各模态投影 MLP 隐藏维度、expert MLP 隐藏维度、Transformer encoder 层数/头数/隐藏维度、dropout 值、对比学习温度 τ。
- **训练硬件**：2 张 NVIDIA L40 GPU。
- **计算成本**：CLARA 参数量 44.950M，训练时间 3.515 s/epoch，推理 latency 约 3.720 ms/video，FLOPs 约 2.033 G/video，峰值内存约 2765.14 MB。相比 MM-HSD 和 HVGuard，CLARA 推理成本更高，但训练时间和峰值内存与 MoRE 相当，参数量显著更少。
- **正则化/稳定训练**：MoE load balancing、dropout、early stopping、warmup、weight decay。
- **预训练编码器是否微调**：论文中未明确说明。

### ⚖️ 评分理由

*   创新性 (1.4/2)：[A_SUMMARY][A_METHOD] 论文将 utterance-aligned clip 分割、MoE 动态路由、local-global 对比学习和 VLM rationale 门控 Transformer 组合成完整检测框架，工程组合增量明显；但核心机制多来自现有 MoE、对比学习、VLM reasoning 的重新打包，缺乏本质新的建模机制或理论 insight。

*   技术严谨性 (1.0/1.5)：[A_METHOD][A_LIMITS] 论文给出了 MoE 负载均衡、对比学习和总损失的公式化设计，clip 级融合与门控建模在逻辑上完整；但 rationale 显式包含 VLM 的 hate/non-hate 决策和 confidence，与下游监督目标高度耦合，存在模型直接依赖 Qwen3VL 预测信号而非真正跨模态理解的方法设计风险。

*   实验充分性 (1.2/1.5)：[A_RESULTS][A_LIMITS] 实验覆盖四个数据集、强基线、模态与组件消融、参数研究和 paired t-test，支撑 SOTA 声明；但缺少 rationale 字段拆解消融与信息泄漏隔离实验，未做多重比较校正，也未报告失败案例或错误模式，审核任务的误差风险分析不足。

*   清晰度 (0.8/1)：[A_SUMMARY][A_METHOD] 整体结构清楚，方法流程、损失函数和实验结果表较完整；但组件较多、流程较长，且部分叙述以组合式描述为主，可读性中等。

*   影响力 (0.5/1.5)：[A_SUMMARY] 论文面向仇恨视频检测，音频只是多模态通道之一，核心贡献属于视频/CV/NLP 的跨模态理解，并非语音/音频核心创新；对本速递语音/音乐/音频读者的直接领域影响力有限，故不超过 0.5。

*   开源 (1.0/1.5)：[A_OPEN] 论文提供了明确 GitHub 代码链接，但未提供模型权重，所用数据集为公开数据集且无新数据发布，属于只开放部分核心产物。

*   可复现性 (0.3/0.5)：[A_METHOD][A_OPEN] 论文披露了主要训练配置、优化器、5 折划分和硬件，但未给出各模态投影 MLP、expert MLP、Transformer 的层数、头数、隐藏维度、dropout 以及对比学习温度 τ，预训练编码器是否微调也未说明，存在少量关键配置缺失。

*   工程/实践价值 (1.0/1.5)：[A_RESULTS][A_LIMITS] 论文报告了参数量、训练时间、FLOPs、峰值内存和推理延迟，面向内容审核有明确场景价值；但推理成本高于轻量基准，且长视频截断影响部分样本，实际部署仍有限制。

### 🚨 局限与问题

**论文明确承认的局限**：
- 推理成本高于 MM-HSD、HVGuard 等轻量级特征融合方法，主要来自 MoE clip encoder 和全局 Transformer。
- 极长视频会因最大 clip 数 100 被截断，论文说明这影响 3.39% 的 DeHate 视频和 8.73% 的 HateMM 视频。
- 增大帧预算并不总能带来增益，可能引入冗余或低信息帧。
- rationale 质量受所使用 VLM 能力影响，更强的 Qwen3VL 比 LLaVA 表现更好。

**审稿人发现的潜在问题**：
- 论文没有单独讨论 rationale 中显式包含 `LABEL: <hate | non-hate>` 和 confidence 是否造成目标信息泄漏。虽然输入来自 VLM 推理而非 ground truth，但该字段与下游监督目标高度耦合，可能使模型过度依赖 Qwen3VL 的预测结果，掩盖 clip-level 对齐本身的贡献。
- 没有对 rationale 字段做拆解消融，无法判断主要贡献来自客观描述、cross-modal relation、final decision 还是 reasons；也就难以评估 VLM rationale 的可解释性价值。
- 对比学习温度 τ 未报告，且 local/global segment 的采样过程没有说明是否避免正样本采样到几乎重叠的 segment，后者可能削弱对比目标的难度。
- 对多个数据集做了大量 paired t-test，但未提及多重比较校正；部分 p 值接近 0.05，显著性强度略有不足。
- 论文未报告测试集上的方差与 fold 间稳定性之外的失败案例或错误模式，对内容审核任务而言缺少误检/漏检面向实际风险的深入分析。
- 附录中虽然报告了 text encoder variants 和 rationale generator variants 的结果，但未对 Qwen3VL 作为 rationale generator 时可能的信息泄漏做隔离实验，也未能说明 LLaVA rationale 下性能下降的具体归因（是推理质量差还是目标泄漏减少）。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
