---
title: "PD-GS: Phoneme-Driven 3DGS for Audio-Driven Talking Heads"
date: 2026-08-07
draft: false
tags: [音视频生成, 多模态模型, 端到端, 高效推理, 可解释性]
categories: [论文速递]
description: "音视频生成 | 5.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.05218"
---

# 📄 PD-GS: Phoneme-Driven 3DGS for Audio-Driven Talking Heads

标签：#音视频生成 #多模态模型 #端到端 #高效推理 #可解释性

**5.6/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 0/1.5 | 复现 0.1/0.5 | 工程 1/1.5

📝 **5.6/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #音视频生成 | #多模态模型 | #端到端 #高效推理 | [arxiv](https://arxiv.org/abs/2608.05218)


### 👥 作者与机构

- Ao Fu（ORCID: 0009-0006-9933-9240，邮箱：220232248@seu.edu.cn）：东南大学计算机科学与工程学院；新一代人工智能技术及其跨学科应用教育部重点实验室，南京，中国。
- Yi Zhou（ORCID: 0000-0003-3021-3229，邮箱：yizhou.szcn@gmail.com）：东南大学计算机科学与工程学院；新一代人工智能技术及其跨学科应用教育部重点实验室，南京，中国。
- 论文发表于 Proceedings of the 34th ACM International Conference on Multimedia（MM '26），2026年11月10–14日，巴西里约热内卢。DOI: 10.1145/3767308.3835096。

### 💡 毒舌点评

把音素级离散语言信息和连续音频特征用门控融合注入 3DGS 说话头，确实打中了“漏嘴”（leaky mouth）和嘴部过平滑这一真实痛点；LFM 的可视化也让融合过程有了初步可解释性。但整体仍是对 per-person 说话头框架的组件级改进，而非范式级突破：所谓音素来自离线 ASR+强制对齐，且仅 2 个受试者的消融与跨数据集实验支撑一个高达 40 音素的词汇表，证据链偏单薄；代码权重一概未公开，可复现性近于零。把“phoneme-driven”的普适性说到太满之前，至少应给出多身份、多语言、对 ASR 噪音的鲁棒性分析。

### 📌 核心摘要

PD-GS（Phoneme-Driven Gaussian Splatting）针对 3DGS 音频驱动说话头中唇形回归被“平均化”、双唇闭合不全的漏嘴伪影，引入由 ASR+强制对齐自动获得、时间对齐的音素 token。其核心是 Linguistic Fusion Module（LFM），用学习门控 g_t=σ(MLP_gate([h_t,e_ph,t])) 在连续音频上下文与离散音素嵌入之间做通道级软切换。双流运动生成器中，表达流由 HuBERT 特征预测 blendshape 权重覆盖眉毛、眨眼、低频头部运动；发音流融合音素嵌入后预测唇部变形 D_lip,t，与 D_exp,t 叠加后应用于 canonical 3DGS。模型仅 24 MB，推理 110 FPS，在 HDTF 上以 LMD 2.66 达到最优唇部几何，LPIPS 0.027 与 NIQE 3.61 亦为最佳，消融与 VoxCeleb2 跨数据集实验进一步验证了动态门控的优势。

### 🔗 开源详情

论文未披露代码、预训练模型、训练超参数完整配置或评测脚本的技术报告，也未声明是否计划发布。实验可复现性因此受限：除方法正文与图2给出的框架描述外，读者无法获得 LFM 门控维度 D、各损失权重 λ、HuBERT 特征采样对齐方式等直接影响复现的关键数值。

### 🏗️ 方法概述和架构

PD-GS 采用两阶段、双流、端到端可微的 per-person 3DGS 说话头框架。训练视频 {I_gt^t} 经 3DMM 拟合得到相机参数 Π_t 与中性脸形；Stage 1 用 30k 迭代构建 canonical 3DGS 头像 G_canon，Stage 2 用 100k 迭代联合优化运动生成器与 3DGS 全部参数（μ, q, s, c, α）。音频由 HuBERT 提取为 F_audio={f_t}；音素由 Whisper+MFA 对齐得到区间 {(s_k,e_k,φ_k)}，构建 V=40 的词汇表（含静音/停顿 token），每帧按其中心时间戳归属音素并映射到 64 维嵌入 e_ph,t。双流共享 F_audio：表达流用专用时序编码器预测 Cao et al. 2013 紧凑 blendshape 基上的权重，输出 D_exp,t；发音流利用 articulation encoder 生成上下文特征 h_t，并在 LFM 中计算门控 g_t=σ(MLP_gate([h_t,e_ph,t]))，通过 f_art,t=(1-g_t)⊙h_t+g_t⊙MLP_ph(e_ph,t) 融合，解码出 D_lip,t，最终 D_total,t=D_lip,t+D_exp,t 作用于 G_canon 渲染。损失为 L_image=λ_L1 L1+λ_LPIPS LPIPS 与 landmark 一致性 L_landmark 的加权和。训练完成冻结 G_canon，推理时仅运行运动生成器，模型侧 110 FPS / 9.1 ms per frame。

下图给出了 PD-GS 的整体流程，涵盖 canonical 3DGS 头像构建、双流运动学习以及 LFM 的融合细节。

![Figure 2. Overview of our Phoneme-Driven Gaussian Splatting (PD-GS) framework. Stage 1: Canonical avatar construction.](https://arxiv.org/html/2608.05218v1/x2.png)

图中 Stage 1 通过 3DMM 拟合初始化中性面部几何与相机参数，Stage 2 在共享 HuBERT 音频特征的基础上，由表达流预测 blendshape、发音流经 LFM 融合音素嵌入，最终共同驱动 canonical 3DGS 渲染。

### 💡 核心创新点

1. 首次将时间对齐的离散音素 token 作为辅助输入注入 3DGS 说话头，并通过 ASR+强制对齐全自动获取，无需人工标注。
2. 设计门控融合模块（LFM），在连续音频特征与离散音素嵌入之间做通道级软性切换，使模型保留音频平滑动态的同时强化关键发音段的音素约束（如双唇闭合、强圆唇）。
3. 双流解耦设计：表达流负责低频韵律（blink、眉毛、头部），发音流负责高频发音变化，可解释性更强。
4. 在 Stage 2 联合优化 canonical 3DGS 参数与运动生成器，让高斯表示适应非刚性形变，提升整体稳定性与保真度。
5. 与神经渲染结合后首次在 3DGS 说话头中实现 24 MB 模型、110 FPS 推理效率下达到最优 LMD——比 GaussianTalker 更准、比扩散类方法更轻量。

### 📊 实验结果

HDTF 主对比（表1）中，PD-GS 在 LMD 2.66 上优于最强 3DGS 基线 GaussianTalker（2.71）与最强 NeRF 基线 GeneFace（2.70），在 LPIPS 0.027 和 NIQE 3.61 上为最优，PSNR 33.55 与 Sync 8.85 保持第一梯队（Sync 仅次于 GaussianTalker 的 8.89）；Wav2Lip 的 Sync 9.13 最高，但论文指出 SyncNet 类指标不惩罚闭合不全，且 PD-GS 在几何敏感度更高的 LMD 上有显著优势。各范式代表性基线对比中，扩散参考方法（Hallo3†、Ditto†）不采用 person-specific 协议，故此倾向参考价值。

下图直观对比了 PD-GS 与基线在困难音素上的发音质量。

![Figure 3. Qualitative analysis of articulation errors on challenging phonemes. We highlight common failure modes of audio-driven baselines: closure failure (incomplete lip sealing for bilabial stops, e.g., \[p\], producing ``leaky mouth''), p](https://arxiv.org/html/2608.05218v1/x3.png)

相较于 GaussianTalker 和 SyncTalk 在双唇塞音 [p]、元音 [æ]/[3] 及圆唇 [ju:] 上出现的漏嘴或口型趋同现象，PD-GS 的唇部闭合更完整、音素区分更明显。


| 方法 | 类别 | PSNR ↑ | LPIPS ↓ | LMD ↓ | Sync ↑ | NIQE ↓ | BRISQUE ↓ | 模型大小 ↓ |
|---|---|---|---|---|---|---|---|---|
| Wav2Lip | 2D | 27.12 | 0.068 | 5.96 | 9.13 | 5.53 | 35.11 | 50 MB |
| SadTalker | 2D | 32.58 | 0.055 | 4.51 | 8.51 | 4.45 | 28.15 | 1500 MB |
| MuseTalk | 2D | 30.92 | 0.047 | 3.82 | 7.11 | 4.28 | 27.42 | 1800 MB |
| AD-NeRF | NeRF | 27.13 | 0.152 | 3.02 | 4.69 | 6.05 | 40.23 | 30 MB |
| RAD-NeRF | NeRF | 31.85 | 0.069 | 2.98 | 4.93 | 4.23 | 26.34 | 28 MB |
| ER-NeRF | NeRF | 33.01 | 0.031 | 3.01 | 5.11 | 3.82 | 23.11 | 50 MB |
| GeneFace | NeRF | 33.22 | 0.029 | 2.70 | 7.84 | 3.71 | 20.14 | 25 MB |
| SyncTalk | NeRF | 33.15 | 0.030 | 2.85 | 7.95 | 3.74 | 20.62 | 800 MB |
| GaussianTalker | 3DGS | 33.61 | 0.031 | 2.71 | 8.89 | 3.90 | 22.89 | 22 MB |
| TalkingGaussian | 3DGS | 33.45 | 0.033 | 2.97 | 8.67 | 3.95 | 23.50 | 30 MB |
| GSTalker | 3DGS | 33.07 | 0.035 | 2.83 | 5.17 | 3.89 | 21.55 | 30 MB |
| PD-GS (Ours) | 3DGS | 33.55 | 0.027 | 2.66 | 8.85 | 3.61 | 20.77 | 24 MB |

消融（表2）验证 LFM：移除整个语言融合路径后（w/o LFM）LMD 升至 2.73、Sync 降至 8.71；将动态门控换成拼接融合后（w/o Gating）LMD 2.70、Sync 8.78；完整版 LMD 2.66、Sync 8.85，证明音素信息与动态门控均不可替代。

下图展示了 LFM 门控均值在一条 held-out 语句上的时序响应。

![Figure 4. Mean gate activation over time on a held-out utterance. The gate g¯t=1D​∑jgt,j\\bar{g}_{t}=\\frac{1}{D}\\sum_{j}g_{t,j} varies systematically across aligned phoneme intervals instead of collapsing to a constant weight, showing that t](https://arxiv.org/html/2608.05218v1/x4.png)

均值门控在音素区间之间系统变化，并在双唇闭合（B、P）与圆唇（UW、M）等关键发音段出现局部峰值，说明门控确实在需要音素强约束时提升了离散音素嵌入的权重。


| 模型 | LMD ↓ | Sync ↑ | PSNR ↑ |
|---|---|---|---|
| w/o LFM（纯音频） | 2.73 | 8.71 | 33.60 |
| w/o Gating（拼接融合） | 2.70 | 8.78 | 33.48 |
| PD-GS（完整） | 2.66 | 8.85 | 33.55 |

MOS 用户研究（表3）中，PD-GS 在唇形同步（4.12）、视觉真实感（4.01）与自然度（4.07）全部最高。VoxCeleb2 子集验证中，PD-GS 以 LPIPS 0.031、LMD 2.94、NIQE 3.79 最优，PSNR 32.88 与 Sync 8.36 具竞争力；对比方法 GeneFace、SyncTalk、GaussianTalker、TalkingGaussian、GSTalker 的 LMD 分别为 3.14、3.10、3.08、3.26、3.01，PD-GS 仍领先，说明跨数据集的泛化优势主要体现在发音敏感指标上。

下图展示了同一音素在不同身份上的生成一致性。

![Figure 5. Phoneme consistency across identities. For the same phoneme (columns), PD-GS generates consistent and physically correct articulations across three subjects (rows), while naturally adapting to each individual's facial geometry.](https://arxiv.org/html/2608.05218v1/x5.png)

对于 [/aʊ/]、[/f/]、[/e/]、[/i/] 等音素，PD-GS 在三位受试者上均产生符合该音素发音特征的口型，同时保留了各自面部几何的个性差异。

### 🔬 细节详述

论文严格区分音素（/·/，抽象语言单位）与具体语音实现（[·]），并强调协同发音（co-articulation）：/p/ 在展唇元音 /i/ 之后与圆唇元音 /u/ 之后的实际口型差异显著。词表 V=40 含静音与停顿，每个帧级音素 token 映射为 64 维可学习嵌入。

### 音素-帧对齐规则
ASR+强制对齐（Whisper + MFA）输出音素区间 {(s_k, e_k, φ_k)}；帧 t 的中心时间戳 τ_t 落在哪个区间就归属哪个音素，一个音素可跨多个连续帧，边界帧按帧中心所在区间决定（等价于更大时间重叠的区间）。

### LFM 门控细节
门控公式为 g_t=σ(MLP_gate([h_t,e_ph,t]))，与 h_t 同维度 D，在潜在发音空间中做通道级调制；投影用 MLP_ph 将音素嵌入映射到同一特征空间得到 f_art,t。门控各通道没有预定义音素语义，论文用均值门控激活 ḡ_t=(1/D)Σ_j g_{t,j} 可视化：曲线在音素边界处变化，在双唇闭合与强圆唇段局部升高，而非退化为常数。论文将门控解释为学习音频-音素兼容性，而非接收外部置信度信号。

### 损失与训练
L_total = L_image + λ_landmark·L_landmark。L_image 为 L1 + LPIPS 重建损失；L_landmark 为施加 D_lip 后的 canonical 代理网格 3D 顶点投影到 2D 的 landmark 与 GT 的 L2 距离。Stage 1 30k 迭代；Stage 2 100k 迭代；RTX 4090 单卡。Stage 2 联合优化运动生成器与 3DGS 全部参数 {μ, q, s, c, α}，推理时仅固定 G_canon 并运行运动生成器。

### 双流解耦
表达流由 HuBERT 特征经专用时序编码器预测紧凑 blendshape 基上的权重，覆盖眉毛、眨眼、低频头部动态，与发音流形成频率互补；但论文未给出头部姿态的显式参数化公式（隐含于 blendshape 或相机中）。

### 效率说明
110 FPS / 9.1 ms per frame 是 HuBERT 特征与对齐音素就绪后的模型侧推理时延；离线 ASR+MFA 预处理未计入端到端延迟，亦未提供完整流式延迟对比。

### 定性验证
图3对比发音错误模式：基线存在闭唇失败（[p] 的漏嘴）、元音歧义（[æ] 与 [3] 口型相似）、圆唇不足（[ju:]）；PD-GS 在三种模式下均更清晰。图4门控均值曲线显示门控在音素段间变化，且在关键段局部升高。图5跨身份一致性：同一音素在三个不同身份上行生成一致且物理正确的口型，同时保持个体面部几何差异。

### 实验协议
HDTF 采用 Obama（450×450）与 May（512×512）两个受试者，25 fps；对比基线含 2D（Wav2Lip、DINet、IP-LAP、SadTalker、MuseTalk）、扩散参考（Hallo3†、Ditto†）、NeRF（AD-NeRF、RAD-NeRF、ER-NeRF、GeneFace、MimicTalk、SyncTalk）、3DGS（GaussianTalker、TalkingGaussian、GSTalker），person-specific 方法逐身份训练，通用方法使用官方预训练权重。GaussianSpeech、AudioRTA 等多视角/实时系统仅作背景讨论，不直接对比。

### ⚖️ 评分理由

*   创新性 (1.2/2)：将时间对齐的离散音素token以学习门控注入3DGS双流说话头，直接针对leaky mouth过平滑问题提出LFM软融合，是有效的组件级改进；但整体仍是per-person框架内的组合创新，未构成范式级突破。

*   技术严谨性 (1.0/1.5)：方法公式与两阶段/双流架构自洽，损失与门控定义完整可推导；但门控仅由音频与音素嵌入学习兼容性，ASR插入/删除错误时无显式置信度降权，算法层面缺少对错配音素的兜底机制。

*   实验充分性 (1.0/1.5)：已有HDTF多范式代表性基线、LFM两组消融、VoxCeleb2跨数据集与MOS用户研究，证据较完整；但仅两个HDTF身份，且未做词表/门控维度/损失权重等敏感性分析和统计检验，支撑普适结论的证据仍偏薄。

*   清晰度 (0.8/1)：图2架构、门控公式、表1-4与消融结果呈现清楚，方法组织可读；但头部姿态参数化未显式给出，门控可解释性只展示均值时间曲线，未说明逐通道语义或音素类别对应，部分解释仍含糊。

*   影响力 (0.5/1.5)：对语音/音频读者而言，语音在此主要作为驱动视觉头像生成的控制信号，核心贡献落在视频/CV和多媒体渲染领域；在说话头社区有应用价值，但领域相关性限制了跨音频社区的影响力。

*   开源 (0.0/1.5)：论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.1/0.5)：论文虽给出训练阶段、迭代次数和GPU型号，但未披露LFM门控维度D、各损失权重λ、HuBERT特征采样对齐方式等关键配置，关键配置大量缺失，难以按文档复现。

*   工程/实践价值 (1.0/1.5)：模型仅24MB并以110FPS模型侧推理，Stage2联合优化3DGS和运动生成器，工程效率数字明确；但离线ASR+MFA预处理未计入端到端延迟，也没有完整流式部署数据，实践价值被削弱。

### 综合判断
6.2 分处于“中等偏上”位置：技术方案干净、实验设计与论文写作对得上，优于大量无消融或多视角混合堆叠的论文；上探 6.5+ 需要公开代码并补足消融（如音素词汇表大小、门控维度、不同 ASR 引擎的稳定性），下探 6.0 则因缺少开源和仅 2 个身份的实验规模。总体维持 6.2/10。

### 🚨 局限与问题

- 未来工作承认 few-shot 泛化与舌头等额外发音器官的建模尚未解决，论文仅在 per-person 设定下验证。
- 门控通道被解释为“音频-音素兼容性”，但没有给出逐通道语义分析或音素类别（塞音/元音/圆唇）的门控统计对比，可解释性停留在时间轨迹层面。
- 音素依赖 Whisper+MFA 离线管线，未讨论 ASR 插入/删除错误如何影响 LFM；若音素 token 错误，模型无显式置信度降权机制。
- 消融薄：仅移除 LFM/替换门控两组，未做门控维度、V=40 词表 vs 更小词表、MLP 层数等敏感性分析。
- HDTF 评估仅两个受试者（Obama、May）；跨数据集 VoxCeleb2 子集只报告较低分辨率指标，高分辨率泛化未知。
- Sync 指标的理论定位未被充分论证：论文承认“Sync 主要反映粗粒度时序对齐”，但未量化 Sync 对漏嘴伪影的不敏感性。
- 两阶段训练的策略直觉清楚（先生成体，后学运动），但未对比单阶段联合训练，Stage 1→Stage 2 的信息瓶颈和误差传播未被讨论。
- 论文未提及模型在无语音静音段、重口音非英语音频、噪声音频上的行为。

---

[← 返回 2026-08-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-07/)
