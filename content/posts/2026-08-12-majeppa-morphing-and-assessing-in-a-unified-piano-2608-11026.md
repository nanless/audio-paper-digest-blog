---
title: "MAJEPPA: Morphing and Assessing in a Unified Piano Performance Space"
date: 2026-08-12
draft: false
tags: [音乐理解, 自监督学习, 音乐生成, 数据集, 基准测试]
categories: [论文速递]
description: "音乐理解 | 7.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.11026"
---

# 📄 MAJEPPA: Morphing and Assessing in a Unified Piano Performance Space

标签：#音乐理解 #自监督学习 #音乐生成 #数据集 #基准测试

**7.5/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **7.5/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #音乐理解 | #自监督学习 | #音乐生成 #数据集 | [arxiv](https://arxiv.org/abs/2608.11026)


### 👥 作者与机构

- 第一作者：Jinwen Zhou（Queen Mary University of London）
- 通讯作者：未说明
- 作者列表：Jinwen Zhou（Queen Mary University of London）、Huan Zhang（未说明）、Weixi Zhai（未说明）、Jinhua Liang（未说明）、Aidan O. T. Hogg（未说明）、Simon Dixon（未说明）

### 💡 毒舌点评

MAJEPPA 最持久、也最可能被后续工作引用的贡献，是那个横跨六水平、六场景的 3,979 段数据集和 EVPMR 基准；相比之下，“冻结 Aria-medium 加 LoRA，再叠三个对比损失”的方法组合更接近工程集成而非范式突破。问题在于论文把“既能生成又能理解”作为核心卖点，却明文承认没有做生成能力评测，转录质量也未核查，理解侧证据完整而生成侧几乎为空。UMP 因 token 方案限制只与 Aria 可比，Chopin PairAcc 标准差高达 9.4 且无显著性检验，这些都会让“全面优于基线”的表述显得过于激进。

### 📌 核心摘要

MAJEPPA 提出一个基于 JEPA 的自监督框架，用于学习从初学者到演奏大师的完整钢琴演奏表征。论文构建了 MAJEPPA 数据集，包含 3,979 段真实世界钢琴录音、942 首作品、303.2 小时，覆盖 6 个演奏者水平与 6 种录音场景，填补了现有符号音乐数据集几乎只含专业演奏的空白。方法以乐谱为上下文视图、演奏为目标视图，在冻结的 Aria-medium 自回归模型上通过 LoRA 微调，联合优化下一 token 生成、InfoNCE 对齐、软监督条件聚类与同演奏段内一致性四个损失，使单一模型同时具备生成与表征抽取能力。相比孤立的任务专用模型，该框架将生成与理解统一在同一套嵌入空间中，并配套提出 EVPMR 基准。在 Chopin 配对排名（59.7%）、技术分类（79.0%）、三个质量回归任务（MAE 0.090/0.155/0.059）及 UMP 错误检测上，MAJEPPA 整体均值优于 Aria、Moonbeam、MusicBERT、CLaMP3 等基线。实际意义在于为音乐教育提供一个可比较、可追踪进步的统一表示空间；主要局限是作者明确未对生成能力做全面评估，且转录质量未显式检查。

### 🔗 开源详情

论文未提供官方开源代码仓库或预训练模型权重；机器摘要中 has_code=否、has_model=否、has_dataset=是。数据集部分以派生 MIDI 和粗粒度标注形式发布（不含原始音频及额外个人身份元数据），并承诺响应上传者/表演者的删除请求。论文脚注提供了演示/标注者可靠性网站（https://jepa-demo.vercel.app），用于展示交互生成和嵌入可视化；具体下载链接、许可证和完整数据清单未在原文中披露，因此视为“未披露”。

### 🏗️ 方法概述和架构

整体流程：MAJEPPA 将每对乐谱-演奏 MIDI 片段打包成单一 token 序列：
\[[\mathbf{s};\ \texttt{COND};\ \texttt{PRED};\ \mathbf{p};\ \texttt{EOS}],\]
其中 \(\mathbf{s}\) 为乐谱 token，\(\mathbf{p}\) 为演奏 token，`COND` 是条件 token，`PRED` 是预测 query token，`EOS` 是序列终止 token。同一序列在两种注意力掩码下分别过一遍 Transformer：第一遍用标准下三角因果掩码做条件生成；第二遍用块对角因果掩码做 JEPA 表征预测。训练总损失为生成交叉熵与三个对比损失的加权和，最终得到一个既可生成演奏、又可抽取可迁移嵌入的单一模型。

核心组件包括四部分。

1. 编码器 backbone：Aria-medium，一个 632M 参数的 LLaMA 式因果 Transformer，预训练于约 60,000 小时符号 MIDI。预训练权重冻结，仅通过 LoRA（rank=512，\(\alpha=32\)）更新注意力投影 `mixed_qkv` 与 `att_proj_linear`，约 75M 可训练参数，总参数约 660M。

2. 预测器：在输入序列中追加 \(k=1\) 个 `[PRED]` token，并复用模型自身的自注意力作为 tied-weights predictor。最终 `[PRED]` 位置的隐状态即为 \(\mathrm{Pred}(\mathbf{s})\)；该设计不引入独立预测器，而是让模型自身完成从乐谱视图到演奏视图的隐空间预测。

3. 条件 token：`[COND_X]`（演奏者水平）与 `[COND_Y]`（录音场景）两个可学习 embedding，提供 \(6\times6\) 类别的 categorical conditioning，对应 6 个演奏者水平与 6 个录音场景。

4. 投影头：共享线性层 \(\phi:\mathbb{R}^{1536}\to\mathbb{R}^{512}\)，输出经 \(\ell_2\) 归一化得到 \(z^s\) 与 \(z^p\)，用于对比损失。

两遍前向是方法核心。Pass 1 在标准下三角因果掩码下处理完整序列，使演奏 token 能看到乐谱、条件和之前的演奏 token，计算生成损失 \(\mathcal{L}_{\text{gen}}\)（对 \(\mathbf{p}\) 的下一 token 交叉熵）。Pass 2 在同一 token 序列上使用块对角因果掩码：视图 1 为 `[s; COND; PRED]`，视图 2 为 `[p; EOS]`，两个视图内部因果、互不可见。从 `[PRED]` 位置取 \(\mathrm{Pred}(\mathbf{s})\)，从 `[EOS]` 位置取 \(\mathrm{Enc}(\mathbf{p})\)。这种掩码设计确保 `[PRED]` 只依据乐谱与条件进行抽象预测，从不窥视演奏 token，从而逼迫模型学习“乐谱到演奏”的语义映射。

下图展示了序列打包和两种注意力掩码的设计。

![Figure 3: Sequence packing and attention mask design. Left: standard causal mask for the generative item. Middle: block-diagonal causal mask for the JEPA item,](https://arxiv.org/html/2608.11026v1/figs/jepa.png)

图中可见，标准因果掩码用于生成损失，而块对角因果掩码确保JEPA预测只基于乐谱视图，对比损失包括配对对齐、条件聚类和段内一致性。


损失函数共四项。\(\mathcal{L}_{\text{piece}}\) 是 InfoNCE，将同一对乐谱嵌入与演奏嵌入拉近。\(\mathcal{L}_{\text{cond}}\) 是软监督对比损失，按演奏者水平与场景正式度的序数距离构造连续相似度 \(w_{ij}\)，且只在条件标签不同的样本对之间计算；论文明确说明该损失用于替换 LLM-JEPA 中易导致表征坍塌的 cosine-distance loss。\(\mathcal{L}_{\text{self}}\) 是双向对称 InfoNCE，拉近同一演奏中两个不同片段的嵌入。总损失为：
\[\mathcal{L}=\gamma\mathcal{L}_{\text{gen}}+\lambda(\mathcal{L}_{\text{piece}}+\beta\mathcal{L}_{\text{cond}}+\alpha\mathcal{L}_{\text{self}}),\]
其中 \(\gamma=1\)、\(\lambda=8\)、\(\beta=1\)、\(\alpha=1\)、\(\tau=0.07\)、\(k=1\)。

数据管线为：YouTube 收集 → 人工标注（演奏者水平、录音场景、断点、对应 MuseScore 乐谱）→ Transkun 转 MIDI → 基于 chroma 特征的 subsequence DTW 对齐乐谱与演奏 → 按固定 token 长度窗口切分。subsequence DTW 可处理漏奏反复段，将演奏对齐到乐谱的连续子序列；对额外重复较多的演奏，对齐可能产生局部噪声，论文认为段级目标可以容忍。

下图展示了从YouTube收集录音到最终token化数据的完整处理流程。

![Figure 1: Data curation pipeline. YouTube recordings are collected from entry catalogues and search queries, annotated with performer expertise and recording context, aligned with the corresponding score via subsequence DTW. Aligned pairs a](https://arxiv.org/html/2608.11026v1/data_proc.png)

图中显示了人工标注、subsequence DTW对齐和MIDI tokenization的关键步骤，包括演奏者水平和录音场景的标注。


关键设计动机是：块对角掩码让同一模型兼顾生成与理解两任务；冻结大模型加 LoRA 显著降低训练成本；在纯配对 InfoNCE 之外引入条件聚类与段内一致性，使嵌入空间带上教学维度（水平、场景）的方向性，从而支持后续质量回归、错误检测与进步轨迹分析。

### 💡 核心创新点

1. **MAJEPPA 数据集**：首个大规模覆盖从儿童初学者到音乐会大师完整技能谱的钢琴演奏数据集（3,979 段、942 首、303.2 小时、6 水平×6 场景）。此前 ATEPP/ASAP 仅含专业或比赛级演奏，该数据集填补了真实世界练习、视奏、示范场景的数据缺口。

2. **统一生成与表征的 JEPA 框架**：将 JEPA 的两视角预测（乐谱→演奏）与自回归 MIDI 生成结合在单一符号音乐模型中。通过在两个不同注意力掩码下处理同一 packed sequence，模型一边做 next-token 生成、一边做 latent 预测，避免传统两阶段方案中表征与生成割裂的问题。

3. **联合训练目标**：在 LLM-JEPA 的配对 InfoNCE 之外提出 \(\mathcal{L}_{\text{cond}}\)（软监督条件聚类，用序数距离构造连续相似度）和 \(\mathcal{L}_{\text{self}}\)（同演奏段内一致性）。消融显示，条件聚类使 Chopin 配对准确率从 53.7 升至 58.7，再加上段内一致性后进一步升至 59.7，同时质量回归 MAE 从 .125/.180/.064 降至 .090/.155/.059。

4. **EVPMR 基准套件**：统一了质量回归、比赛排名、技术分类、钢琴家识别与无参考错误检测（UMP）五个方向的标准评测协议，并给出 Aria、Moonbeam、MusicBERT、CLaMP3 的对照结果。该基准为后续钢琴演奏理解研究提供了可复用的评测基础设施。

### 📊 实验结果

下表保留主方法三行消融、最强基线（Moonbeam/CLaMP3）与传统基线（Aria/MusicBERT）。数值为 5 折交叉验证 × 5 个随机种子的均值（标准差）；UMP 的 SI 数据集与其余标准差信息在正文及表后说明。

| 方法 | Chopin PairAcc | Technique Acc | PISA MAE↓ | NeuroPiano MAE↓ | YCU-PPE MAE↓ | UMP EN F1 | UMP BM F1 | Pianist8 Acc |
|---|---|---|---|---|---|---|---|---|
| Aria | 47.5 (8.1) | 66.2 (11.4) | .122 (.031) | .215 (.019) | .068 (.005) | .174 (.025) | .313 (.016) | 86.1 (4.3) |
| Moonbeam | 53.7 (2.9) | 77.9 (4.8) | .151 (.035) | .192 (.014) | .061 (.004) | – | – | 80.6 (4.5) |
| MusicBERT | 52.5 (5.8) | 67.1 (4.6) | .190 (.026) | .205 (.019) | .065 (.004) | – | – | 78.6 (2.1) |
| CLaMP 3 | 53.5 (8.5) | 70.3 (2.7) | .217 (.036) | .203 (.017) | .089 (.004) | – | – | 80.8 (3.3) |
| MAJEPPA (ℒpiece) | 53.7 (8.1) | 76.3 (5.9) | .125 (.083) | .180 (.015) | .064 (.004) | .151 (.021) | .308 (.012) | 83.1 (3.2) |
| MAJEPPA (ℒpiece+ℒcond) | 58.7 (8.7) | 70.3 (9.5) | .108 (.090) | .181 (.022) | .062 (.005) | .141 (.015) | .321 (.012) | 86.8 (5.2) |
| MAJEPPA (ℒpiece+ℒcond+ℒself) | 59.7 (9.4) | 79.0 (6.5) | .090 (.034) | .155 (.018) | .059 (.002) | .179 (.012) | .333 (.015) | 84.2 (3.8) |

UMP SI 上，Aria 为 .300 (.020)，MAJEPPA 三变体分别为 .313 (.015)、.341 (.004)、.316 (.037)，其中 +ℒcond 变体在该任务上最优；该列因表格列数限制未列入。全模型在 Chopin、Technique、三个回归任务及 UMP EN/BM 上取得最优，+ℒcond 变体在 Pianist8 和 UMP SI 上最优。

### 🔬 细节详述

**数据集标注细节**：每段录音由音乐学院学生钢琴家根据共享校准文档人工标注，类别涉及两个正交轴：录音场景（Practice、Sight-reading、Showcase、Demo、Slow demo、Concert）和演奏者水平（Child beginner、Child professional、Adult beginner、Adult intermediate、Piano teacher、Virtuoso）。标注者还提供长视频断点、对应 MuseScore 乐谱来源，并过滤含语音、节拍器或非钢琴声音的视频。表 1 分布：Teacher 1,279 段、Adult Beginner 947 段、Adult Intermediate 777 段、Child Beginner 391 段、Child Professional 247 段、Virtuoso 338 段，总 3,979 段、303.2 小时。论文脚注提供标注者可靠性网站（https://jepa-demo.vercel.app）。

**预处理流程**：断点切分后，用 Transkun 将音频转 MIDI；在合成乐谱音频与演奏音频的 chroma 特征上做 subsequence DTW，将演奏对齐到乐谱的连续子序列；按固定 token 长度窗口切分得到训练对。作者明确未显式检查转录质量（含踏板伪影）。

**模型与训练细节**：Aria-medium 632M 参数，LoRA rank=512、α=32，作用于 `mixed_qkv` 和 `att_proj_linear`，可训练约 75M。上下文窗口从 2048 扩展到 4096，采用 linear RoPE scaling。k=1 个 `[PRED]` token，共享线性投影头 φ: R^1536→R^512，ℓ2 归一化。训练配置：4×A100-80GB，bfloat16 混合精度，120 epochs，per-GPU batch size 8，gradient accumulation 4，AdamW（weight decay 0.01），LoRA 模块 LR 2e-4，新 token embedding LR 1e-3，LM head LR 1e-5。损失权重 γ=1、λ=8、β=1、α=1，温度 τ=0.07。

**评估协议细节**：EVPMR 包含 5 个任务。所有音频数据集用 Transkun 转 MIDI。每任务 5 折交叉验证 × 5 随机种子。冻结全局嵌入上：分类用线性探针、成对排序用二元分类、回归用 Ridge、UMP 用帧级 MLP 解码器。UMP 采用 token 级嵌入，按时间戳/时长映射到 30ms 网格，合并段后用 mir_eval.transcription 计算 segment F1（2s 容差）。因其他基线 token 方案不可比，UMP 仅与 Aria 比较。

**生成与分析细节**：因时间限制未全面评估生成能力，仅网站提供样本输出和交互生成。附带分析：7 条 YouTube 练习轨迹的 session-averaged 嵌入，PC1/PC2 与 session index 的 Spearman 相关系数均值 ρ=0.41；25 首 Burgmüller 练习曲中错误标注的 4 秒窗口经 UMAP 投影，显示时序中断类错误与音高偏差类错误形成不同子区域，说明表征编码了错误的“质地”而非单一“是错误”轴。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_SUMMARY] 提出首个覆盖初学到演奏大师的钢琴演奏数据集，并把生成与表征学习统一到同一JEPA框架，还配套EVPMR基准，整体贡献较新；但方法主体是冻结Aria加LoRA与三项对比损失的组合，范式突破有限。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 双掩码机制和四项损失均有明确公式支撑，块对角掩码保证预测视图不接触演奏token，条件对比损失有替代易坍塌损失的动机，逻辑自洽；但对预测器共享自注意力等设计缺乏更充分的边界分析，技术严谨性中规中矩。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 在EVPMR多个任务上给出5折×5种子均值/标准差，并与四个基线和三损失消融对比，证据较充分；但[A_LIMITS]未做配对显著性检验、Chopin PairAcc标准差达9.4，且生成能力未量化评测、UMP仅与Aria可比，对“全面优于基线”的支持不完整。

*   清晰度 (0.8/1)：[A_METHOD] 把两遍前向、注意力掩码和四项损失用图和公式表达得较清楚，[A_RESULTS]表格也规范；但[A_LIMITS]指出条件相似度w_ij具体公式未在正文给出而仅指向网站，关键设计解释不完整，清晰度受损。

*   影响力 (1.0/1.5)：[A_SUMMARY] 填补真实钢琴演奏数据缺口并提出统一评测基准，直接面向音乐教育与MIR读者，领域相关性强，有被后续研究作为基础设施引用的潜力；但目前尚未形成大规模外部验证或社区采用，影响力仍有上限。

*   开源 (1.0/1.5)：[A_OPEN] 未提供官方代码仓库和预训练模型权重，数据集仅以派生MIDI和粗粒度标注形式部分发布，未包含原始音频，下载链接和许可证也未在原文披露，属于只开放部分核心产物，因此给1.0。

*   可复现性 (0.3/0.5)：[A_METHOD] 已披露LoRA秩/α、训练轮数、batch、学习率、损失权重、硬件等大部分配置；但[A_LIMITS]未披露精确数据分割、预训练权重来源版本和完整复现步骤，关键复现信息仍有缺失，故为0.3。

*   工程/实践价值 (1.1/1.5)：[A_METHOD] 冻结632M Aria并用约75M LoRA参数训练，4×A100即可完成120轮，subsequence DTW与固定窗口切分构成真实录音数据处理管线，EVPMR提供统一评测协议，工程整合与实践价值明确。

### 🚨 局限与问题

1. **生成能力未评测**：作者在 5.1 节明确“Due to time constraints, we did not conduct a full-scale evaluation of the generation capabilities”，仅提供网站示例。因此“统一生成与理解”的核心主张缺乏量化证据。
2. **转录质量未检查**：数据管线中“we did not explicitly check transcription quality (including pedal artefacts)”，Transkun 的转录误差可能向下游任务传播。
3. **对比显著性问题**：Chopin PairAcc 标准差高达 9.4，且全文未报告配对显著性检验，声称“全面优于基线”过于激进。
4. **UMP 比较范围受限**：因 token 方案不可比，UMP 仅与 Aria 比较，未与其他强基线对比。
5. **对齐噪声**：subsequence DTW 对额外重复较多的演奏可能产生局部噪声，虽称段级目标可容忍，但未量化影响。
6. **条件相似度设计未充分披露**：正文未给出 w_ij 连续相似度的具体公式，仅指向网站，影响复现。
7. **数据集伦理与授权**：使用公开 YouTube 录音，未获得上传者/演奏者个人同意，仅靠“可移除请求”机制缓解；发布派生 MIDI 和粗标签，但未提供原始音频。
8. **可复现性信息缺失**：未披露精确数据分割、预训练权重来源版本、以及是否公开训练代码，高训练成本下复现门槛较高。

---

[← 返回 2026-08-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-12/)
