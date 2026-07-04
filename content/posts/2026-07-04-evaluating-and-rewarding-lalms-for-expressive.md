---
title: "Evaluating and Rewarding LALMs for Expressive Role-Play TTS via Mean Continuation Log-Probability"
date: 2026-07-04
draft: false
tags: [语音合成, 强化学习, 数据集, 语音大模型]
categories: [icml-2026]
description: "语音合成 | 6.6/10"
hiddenInHomeList: true
---

# 📄 Evaluating and Rewarding LALMs for Expressive Role-Play TTS via Mean Continuation Log-Probability

#语音合成 #强化学习 #数据集 #语音大模型

**6.6/10** | 创新 0.8/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.8/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

✅ **6.6/10** | 前50% | #语音合成 | #强化学习 | #数据集 #语音大模型 | [arxiv](https://openreview.net/forum?id=YZIqbdw6zi)


### 👥 作者与机构

- 第一作者：Yong Ren（中国科学院自动化研究所 / 中国科学院大学人工智能学院）、Jingbei Li（StepFun）
- 通讯作者：Jingbei Li（StepFun, lijb19@tsinghua.org.cn）、Cheng Yi（StepFun, yicheng@stepfun.com）、Xuerui Yang（StepFun, yangxuerui@stepfun.com）
- 完整作者列表：Yong Ren、Jingbei Li（共同一作）、Haiyang Sun（StepFun）、Yujie Chen（北京航空航天大学）、Cheng Yi（StepFun）、Yechang Huang（StepFun）、Hao Gu（中国科学院自动化研究所 / 中国科学院大学人工智能学院）、Ye Bai（中国科学院自动化研究所）、Xuerui Yang（StepFun）

### 💡 毒舌点评

本文用 MCLP 将风格一致性量化为 LALM 续写概率，想法精巧，逻辑也基本自洽。但实验的“SOTA”声明水分太大：跟 GPT-Audio、通用 InstructTTS 比当然全面碾压，可真正的对手——那些同样用了 RL 做风格对齐的 TTS 系统——一个都没出现在基线里。主表上 MOS 4.461 vs. 3.576 的巨大鸿沟假装看不见，3.576 就能叫 SOTA？文末的局限分析写得像免责声明，对 MCLP 受限于 Step-Audio-2 这一特定 Tokenizer 和生态的根本脆弱性避而不谈。贡献嘛，做好了一个中文标杆数据集 + 一个有意思的指标，但要说方法论上有普适性突破，还差得远。

### 📌 核心摘要

本文针对 Role-Play TTS (RP-TTS) 风格一致性缺乏客观度量的问题，提出 Mean Continuation Log-Probability (MCLP)。MCLP 利用一个在海量语音上做 Continuation Training 后的预训练 LALM，在固定文本上下文 `[w, z_eval, w]` 条件下预测真值（GT）语音 token 的平均对数似然，以此度量候选语音与 GT 间的风格一致性。该方法将 MCLP 既用作评估指标（与人类判断高相关，当 ΔMCLP > 0.1 时 Win Rate > 0.8），又作为 GRPO 的奖励信号（与 CER 组合成带门控的混合奖励），驱动 RP-TTS 模型在 SFT 后进一步进行风格对齐。实验在 1435 小时 WenetSpeech-RP-TTS 数据集上进行，结果表明通过 SFT + GRPO 训练的模型在主观 MOS（3.576）和 MCLP 上均显著超越 GPT-Audio、MiMo-Audio 等多轮对话 LALM 和 OV-InstructTTS 等单轮基线。

主要实验结果：
| Model | W/ Audio History CER(%)↓ | W/ Audio History MCLP↑ | W/ Audio History CAM++↑ | W/ Audio History Emo2Vec↑ | W/o Audio History CER(%)↓ | W/o Audio History MCLP↑ | W/o Audio History CAM++↑ | W/o Audio History Emo2Vec↑ | MOS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GroundTruth⋄ | - | - | - | - | - | - | - | - | 4.461 |
| GPT-Audio⋄ | 11.974 | -4.849 | 0.636 | 0.875 | 44.679 | -4.836 | 0.635 | 0.884 | 1.915 |
| MiMo-Audio-7B⋄ | 10.605 | -4.753 | 0.699 | 0.902 | 11.609 | -4.745 | 0.698 | 0.903 | 2.484 |
| Step-Audio-2-mini | 3.276 | -4.829 | 0.629 | 0.864 | 12.007 | -4.823 | 0.632 | 0.864 | 1.856 |
| CosyVoice3⋄ | - | - | - | - | 4.638 | -4.782 | 0.651 | 0.905 | 2.350 |
| HiggsAudioV2⋄ | - | - | - | - | 3.250 | -4.827 | 0.614 | 0.856 | 1.750 |
| OV-InstructTTS | - | - | - | - | 7.188 | -4.768 | 0.669 | 0.900 | 2.864 |
| Qwen3TTS⋄ | - | - | - | - | 5.585 | -4.799 | 0.630 | 0.879 | 2.036 |
| Our Proposed | 1.130 | -4.636 | 0.724 | 0.917 | 1.625 | -4.687 | 0.704 | 0.910 | 3.576 |

### 🔗 开源详情

- 代码：https://github.com/y-ren16/MCLP
- 模型权重：未提及
- 数据集：WenetSpeech-RP-TTS，https://huggingface.co/datasets/y-ren16/WenetSpeech-RP-TTS
- Demo：未提及
- 复现材料：训练超参数报告详尽，但未发布训练配置文件或预训练检查点。
- 论文中引用/用到的开源项目：
  - Step-Audio-2（未提供具体链接）
  - WenetSpeech（未提供具体链接）
  - Demucs（未提供具体链接）
  - pyannote（未提供具体链接）
  - DeepSeek-R1（未提供具体链接）
  - Qwen-VL-7B（未提供具体链接）
  - Emotion2Vec：https://huggingface.co/emotion2vec/emotion2vec_plus_large
  - CAM++：https://modelscope.cn/models/iic/speech_campplus_sv_zh-cn_3dspeaker_16k/summary
  - Genshin-Voice：https://huggingface.co/datasets/simon3000/genshin-voice
  - 对比模型 CosyVoice3、Higgs Audio V2、OV-InstructTTS、Qwen3TTS 等（论文未提供具体开源地址）

### 🏗️ 方法概述和架构

本文提出了一个完整的 RP-TTS 训练与评估框架。其核心洞察是：预训练 LALM 能够通过其上下文续写能力来度量语音风格的连续性。整个方法分为三个关键模块：

1. 用于计算 MCLP 的 LALM 预训练
MCLP 是本方法的核心。其原理是：一个在大规模带转录语音上专门进行过“续写训练”（Continuation Training）的 LALM，其预测序列概率的能力可以刻画风格连续性。
- 模型选择：选用了 Step-Audio-2 模型作为基础，因其语音 Tokenizer（TA4）专注于保留语义和风格信息，而非声学细节，有助于避免声学相似度对风格度量的“信息泄露”。
- Continuation Training：为了强化模型的续写能力，作者在 300 万小时带转录的语音数据上对模型进行了进一步训练。训练数据被组织成 session 级别的序列：`[w_1, y_1, w_2, y_2, ..., w_n, y_n]`，其中 `w_i` 是第 i 句的文本转录，`y_i` 是对应的 TA4 token 序列。模型以自回归方式训练，但损失函数仅施加在交替出现的语音 token (`y_i`) 上，使得模型学会基于前语音和文本上下文预测后续语音。
- MCLP 计算：给定一对同一文本 `w` 的“评估语音” `z_eval` 和“真值语音” `z_gt`，构造一个双轮上下文历史 `H = [w, z_eval, w]`，再利用该续写模型预测 `z_gt` 的音频 token，计算平均对数似然：`MCLP = (1/|z_gt^A|) Σ log P(z_gt^A_k | H, z_gt^A_<k)`。这种“反向续写”设计通过固定文本内容，剥离了内容差异，使得概率高低直接反映风格延续性。

2. SFT 指令微调
基于 Step-Audio-2-mini-Base 模型，在新构建的 WenetSpeech-RP-TTS 数据集上进行 SFT。
- 输入构造：对于第 j 轮对话，上下文 `[S, P, H, I_j]` 由场景描述 (`S`)、角色画像 (`P`)、历史对话 (`H`) 和当前轮次的显式指令 (`I_j`，例：“As Cheng Dieyi, say: ...”) 拼接而成。
- 输出与训练：目标输出 `y_j` 是交错的 TA4 token 序列。模型通过最小化 `-log P(y_j | S, P, H, I_j)` 进行训练，学习根据复杂角色和场景设定生成符合语境的语音。

3. GRPO 强化学习对齐
利用 MCLP 作为奖励信号，对 SFT 模型进行风格对齐。
- 采样：对每个 prompt `q`（含 S, P, H），用旧策略 `π_θold` 采样 G=8 个候选语音。
- 混合奖励设计：
    - 风格奖励 (Style Reward)：`R_style = MCLP(z_roll, z_gt) + 15.0`，将指标偏移到正值空间。
    - 内容约束 (Content Constraint)：将生成的 token 通过 Token-to-Wav 模块还原为波形，再用 ASR 转写成文本 `w^`，计算 CER 并惩罚：`R_content = 10.0 * CER(w^, w)`。
    - 门控机制 (Gating)：总奖励 `R(z) = 0`，若 `CER(w^, w) > 0.2`；否则 `R(z) = R_style - R_content`。该设计强制模型在保证内容可懂度满足阈值后才优化风格，避免产生“有情感的胡言乱语”。
- 优化：遵循 GRPO 目标函数 `J_GRPO(θ)`，其中包含基于组内归一化的 Advantage `A^_i`、PPO-style Clipping 以及一个与 SFT 参考模型间的 KL 惩罚 `-β D_KL`，以稳定训练。




### 💡 核心创新点

1. 将风格定义为续写概率：首次提出用 LALM 的上下文续写能力来度量抽象的“风格一致性”，MCLP 指标巧妙地将语音风格空间映射为标量概率值，绕过了人工设计情感/韵律标签的局限。
2. MCLP 的双重角色与闭环：MCLP 不仅是评估指标（与人类判断有强相关性），还可作为 RL 中的风格奖励信号，形成了“用 LALM 度量，为 LALM 提供反馈”的自洽优化闭环。
3. 带门控的混合奖励设计：在 GRPO 框架中，设计了“MCLP 风格鼓励 + CER 内容惩罚 + 门控机制”的组合奖励，这是解决 TTS 中 RL 极易出现的 reward hacking（如产出无意义重复模式）的一个有效工程实践。
4. 大型中文 RP-TTS 数据集：构建并公开了 WenetSpeech-RP-TTS 数据集，系统性地构建了一套从 YouTube 视频中通过源分离、说话人日志、LLM/VLM 自动标注场景与角色的数据处理管线，为中文 RP-TTS 提供了有价值的资源。

### 📊 实验结果

实验在 WenetSpeech-RP-TTS 测试集（900 个场景，涵盖 2-10 轮对话）上进行，采用客观指标（CER, CAM++, Emo2Vec, MCLP）和主观指标（风格一致性 MOS, 48 名专业标注者）。

1. MCLP 与人类判断的对齐验证
通过成对比较，绘制了 ΔMCLP 与人类 Win Rate 的关系曲线。当 ΔMCLP 很小时，Win Rate 接近 0.5。当 ΔMCLP > 0.1 时，Win Rate 显著超过 0.8，强有力地证明了 MCLP 在区分有意义的风格差异时的可靠性。

2. 主实验结果 (Table 2)
如上述核心摘要中的完整表格所示，在带与不带音频历史两种设置下：
- 本文提出的方法（Our Proposed）在所有客观指标和主观 MOS 上均取得了最优结果。
- 主观 MOS 达到 3.576，大幅领先最好的多轮 LALM 基线 MiMo-Audio-7B（2.484）和最好的 InstructTTS 基线 OV-InstructTTS（2.864）。
- 在有音频历史设置下，CER 降低至 1.130%，MCLP 优化至 -4.636。
- 与 GroundTruth 的 MOS（4.461）相比仍有超过 0.88 的差距。

3. 消融实验 (Table 3)
| Model | W/ Audio History CER(%)↓ | W/ Audio History MCLP↑ | W/o Audio History CER(%)↓ | W/o Audio History MCLP↑ | MOS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Step-Audio-2-mini | 3.276 | -4.829 | 12.007 | -4.823 | 1.856 |
| Step-Audio-2-mini (SFT) | 3.334 | -4.725 | 6.306 | -4.731 | 3.178 |
| Our Proposed (Full) | 1.130 | -4.636 | 1.625 | -4.687 | 3.576 |
| – w/o CER Reward | 61.144 | -4.590 | 59.665 | -4.637 | 1.145 |
| – w/o MCLP Reward | 0.783 | -4.752 | 0.836 | -4.773 | 2.331 |

实验结果揭示了 SFT 和 RL 各组件的贡献与必要性：
- SFT：将基础模型性能大幅提升，MOS 从 1.856 显著提升至 3.178。
- RL（全量）：在 SFT 基础上进一步提升内容精度（CER↓）和风格表现（MOS↑ 至 3.576）。
- 单一 MCLP 奖励：导致灾难性 reward hacking，CER 飙升至 60% 以上，MOS 跌至 1.145，尽管 MCLP 达到最高。
- 单一 CER 奖励：虽然 CER 极低，但风格表现大幅退化，MCLP 和 MOS（2.331）均跌回基线水平，证明仅靠内容约束无法驱动风格优化。

4. 进一步的详细实验结果
论文还在附录中提供了按场景类别、对话轮数、说话人数量的细分评估，证明本文方法在不同戏剧类型（军事、古装、悬疑等）、不同对话长度（2-10轮）和不同说话人数量（2-5人）的场景下均一致地取得最佳 MCLP 分数。




### 🔬 细节详述

- 训练数据 (SFT)：WenetSpeech-RP-TTS，来源于 WenetSpeech 语料中 YouTube 电视剧部分。经过源分离(Demucs)、说话人日志(pyannote)、LLM角色标注(DeepSeek-R1)、VLM场景标注(Qwen-VL-7B)等多道工序构建。数据集共含约 311k 个场景，1435 小时，最终筛选出 8237 个视频用于训练/测试。
- 测试集构造：采用视频级划分防止数据泄露，从剩余视频中分层采样构建了包含 900 个场景的测试集，每个对话轮次（2-10轮）各 100 个。
- RL 数据：从 SFT 数据中精选高质量子集，要求对话轮次 2-6 轮、末轮长度 > 10 字符且为非中性（Non-Neutral）风格，共得到 1,6186 个场景。
- 模型架构：基础模型为 Step-Audio-2-mini-Base，一个 7B 参数的 decoder-only LALM。
- SFT 阶段配置：1 epoch，学习率 1e-5（cosine decay，warmup 100，min lr 1e-6），全局 Batch Size 64，使用 AdamW (β1=0.9, β2=0.95, weight decay 0.1, grad clip 1.0)，最大序列长度 16,384。
- RL 阶段配置 (GRPO)：1000 iterations，学习率 1e-6，warmup 50，全局 Batch Size 128，每 prompt 采样 G=8，解码温度 1.0，最大解码长度 1024。KL 惩罚系数 β=0.001。奖励参数 C=15.0，λ=10.0，τ=0.2。RL 训练使用 32 块 NVIDIA H800 GPU。
- MCLP 计算/评估模型：基于 Step-Audio-2 在 300 万小时带转录语音上进行过 Continuation Training。
- 评估指标：内容准确度用 CER（使用经 ASR 任务微调的 Step-Audio 模型转写）；风格客观代理用 CAM++（说话人相似度）和 Emo2Vec（情感相似度）；主观评估为 48 名专业中文标注者进行的风格一致性 MOS 打分（0.5-5.0 分制）。

### ⚖️ 评分理由

*   创新性 (0.8/2)：提出 MCLP 将风格一致性量化为 LALM 的续写概率，这个 insight 是新颖且有启发性的。然而，其本质是对预训练模型的概率分布的直接应用，技术上的创新高度有限。混合奖励和 GRPO 的应用属于已有范式的有效组合，并非方法论上的根本突破。整体贡献更偏重“问题定义和工程方案”，而非理论创新。
*   技术严谨性 (1.1/1.5)：方法设计逻辑清晰，从指标定义、数据构造到 RL 奖励设计，每一步的动机都阐述得较为清楚。MCLP 的双输入设计巧妙地固定了内容，Gated Hybrid Reward 也直击 reward hacking 痛点，并通过消融实验验证。主要扣分点在于，对 MCLP 有效性的前提假设（如 LALM 隐空间的连续性和线性程度）缺乏深入讨论，其对特定 Tokenizer 和模型的强依赖性被严重低估。
*   实验充分性 (1.0/1.5)：实验部分包含多类基线、两种设置、消融研究和对 MCLP 的人类相关性验证，数据集构建管线也翔实。但一个致命的弱点是，完全缺乏与同样使用 RL 进行风格控制的 TTS 系统（如基于情感分类器的 RL 方法）的直接对比。这让 MCLP 作为奖励信号相比于更简单、更成熟方案的相对优势无法被量化。与 GroundTruth 的巨大 MOS 差距也缺少深入分析。
*   清晰度 (0.8/1)：论文整体结构清晰，图 1 对视方法进行了有效概括。然而，对 MCLP 计算中对“反向续写”设计的动机和为什么其能工作的直觉解释不够到位，对 Step-Audio-2 Tokenizer 为何侧重语义和风格的特性在正文部分介绍不足，增加了读者理解的认知负荷。
*   影响力 (0.8/1.5)：MCLP 为解决 RP-TTS 及更广泛的 expressive TTS 中风格量化难题提供了一个有潜力的思路，发布的大规模中文数据集也对社区有实际贡献。但当前工作被严格限制在中文 RP-TTS 场景和 Step-Audio 模型生态内，其对通用 TTS 社区的影响力尚需通过跨语言、跨模型的泛化性验证来证实。
*   开源 (1.0/1.5)：论文提供了代码仓库链接并承诺公开数据集，这是值得肯定的加分项。但未明确提及会发布训练好的 RP-TTS 模型权重，这降低了开源方案的完整度和可复现性，其他研究者无法直接使用其成果。
*   可复现性 (0.3/0.5)：训练超参数、优化器、硬件等设置报告得非常详细，具备良好的复现基础。主要的不可控性在于数据：SFT 和 RL 数据均通过 LLM/VLM 全自动生成，其关键监督信号（如场景、角色）的标注质量、噪声程度和带来的潜在偏差未经验证，这为复现结果带来了很大不确定性。
*   工程/实践价值 (0.8/1.5)：论文展示了从数据构造到 RL 对齐的完整工业级 pipeline，其中数据标注的自动化流程和 RL 混合奖励设计对工程实践有较高参考价值。但方案强耦合于 Step-Audio 这一特定的 LALM 生态，作为通用插件或在其他模型上迁移的可行性和成本有待商榷。

### 🚨 局限与问题

1. 论文明确指出的局限
- 训练数据和评估仅限于中文，虽然附录初步验证了 MCLP 的跨语言潜力，但未构成系统性证明。
- 数据虽覆盖多种戏剧类型，但未在游戏、虚拟助手、有声书等更广泛的角色扮演场景中测试。
- 场景/角色描述由 LLM/VLM 自动生成，存在潜在的标注噪声。

2. 审稿人发现的更深层问题
- MCLP 的本质是“模型偏好”：MCLP 并非客观的风格标尺，它完全是一个特定预训练模型对“风格延续性”的信念。如果该 LALM 存在偏见（如偏好某类音色、语速、情感），MCLP 将系统性地放大这些偏见。这既是指标也是 reward，极易导致自我行为增强，使得 RP-TTS 模型坍缩到 LALM 偏好的风格子集。文中并未对此进行测试（如用不同 LALM 计算 MCLP 是否一致）。
- 风格与说话人的混淆未解：尽管声称使用了“语义” Tokenizer 以分离声学细节，但实验上并未进行控制变量分析来证明 MCLP 在多大程度上受音色相似性影响。例如，同一说话人的不同风格和不同说话人的相同风格，MCLP 是否能有效区隔？这个问题不澄清，MCLP 测的是“风格一致性”还是“说话人一致性”就是一笔糊涂账。
- 比较基线不公平：声称 SOTA，但主对比的全部是非 RL 或通用对话模型/InstructTTS。在 2026 年的背景下，已有不少工作使用情感分类器、偏好模型等做 TTS 的 RL 对齐。不与这些真正的竞品方法（如 Emo-DPO, RRPO 等）在同任务上做公平对比，其“SOTA”声明是片面且有失公允的。
- 数据集合规性存疑：论文基于 YouTube 视频，过滤出电视剧部分，并进行源分离、标注和用于训练生成模型。这一过程在未明确获得版权方授权的情况下，存在显著的版权和合规风险，文中对此完全没有讨论，在工业界应用中是巨大障碍。
- MOS 提升的代价：GRPO 虽然提高了 MOS，但消融实验表明它是以一定的内容保真度损失为代价的（全量模型 CER 1.130% vs. 仅 CER 奖励模型 0.783%）。这种权衡是否存在更优解？在模型针对风格过拟合到某个 LALM 偏好空间的风险下，3.576 的 MOS 是否真正代表了更好的泛化性能？

### 📷 论文图片



---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
