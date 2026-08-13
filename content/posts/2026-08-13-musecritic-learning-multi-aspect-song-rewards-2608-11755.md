---
title: "MuseCritic: Learning Multi-Aspect Song Rewards through Natural-Language Aesthetic Critiques"
date: 2026-08-13
draft: false
tags: [音频质量评估, 音频大模型, SFT, 强化学习, 音乐生成]
categories: [论文速递]
description: "音频质量评估 | 6.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.11755"
---

# 📄 MuseCritic: Learning Multi-Aspect Song Rewards through Natural-Language Aesthetic Critiques

标签：#音频质量评估 #音频大模型 #SFT #强化学习 #音乐生成

**6.5/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.5/0.5 | 工程 1/1.5

✅ **6.5/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音频质量评估 | #音频大模型 | #SFT #强化学习 | [arxiv](https://arxiv.org/abs/2608.11755)


### 👥 作者与机构

- 第一作者：Jiabao Zhuang（复旦大学 Fudan NLP Group）
- 并列一作：Changhao Jiang、Hanchen Wang、Jiahao Chen、Zhixiong Yang、Zhenghao Xiang（均复旦大学 Fudan NLP Group）
- 通讯作者：Tao Gui（复旦大学 Fudan NLP Group）
- 作者列表：Jiabao Zhuang（复旦大学 Fudan NLP Group）、Changhao Jiang（复旦大学 Fudan NLP Group）、Hanchen Wang（复旦大学 Fudan NLP Group）、Jiahao Chen（复旦大学 Fudan NLP Group）、Zhixiong Yang（复旦大学 Fudan NLP Group）、Zhenghao Xiang（复旦大学 Fudan NLP Group）、Yifei Cao（复旦大学 Fudan NLP Group）、Jiajun Sun（复旦大学 Fudan NLP Group）、Hui Li（复旦大学 Fudan NLP Group）、Ming Zhang（复旦大学 Fudan NLP Group）、Tao Ji（复旦大学 Fudan NLP Group）、Tao Gui（复旦大学 Fudan NLP Group，通讯作者）、Qi Zhang（复旦大学 Fudan NLP Group）、Xuanjing Huang（复旦大学 Fudan NLP Group）

### 💡 毒舌点评

把文本生成式奖励模型里的“先写 critique 再打分”范式迁移到长歌曲多维度美学评估，并用自生成 critique 缓解训练/推理分布偏移，这一点做得比较完整，消融证据也清楚。但整体新颖性更接近领域迁移而非本质突破，且 Music Arena 相对 SongEval 的领先只有 0.55 个百分点，没有统计显著性或多 seed 验证，下游 GRPO 效果也缺少人类听感评估来兜底。人工 critique 审核的样本量、接受率与一致性均未量化，进一步削弱了数据构建可靠性。

### 📌 核心摘要

论文要解决长歌曲生成场景中奖励模型缺乏可解释中间表征、直接回归分数容易尺度收缩且难以提供优化信号的问题。为此提出 MuseCritic，一个半标量式奖励模型，先基于歌曲和五维美学 rubric 生成一段五部分自然语言 critique，再以歌曲、rubric 和自生成 critique 为条件预测五个连续分数。与已有文本生成式奖励模型相比，MuseCritic 把 critique-then-score 思路迁到长音频/歌曲的多维连续美学评价，并通过“教师 critique SFT + 自生成 critique 奖励学习”的两阶段流程缓解推理时 critique 分布偏移。在 SongEval 200 首测试歌曲上，宏平均 MSE 从 SongEval UTMOS 的 0.2875 降至 0.2316，LCC、SRCC、Kendall τ 分别达到 0.9068、0.8838、0.7178；在 Music Arena 733 对偏好对上准确率为 71.35%。用 MuseCritic 作为奖励模型做 GRPO，Muse-0.6B 在 SongEval 和 Audiobox Aesthetics 的九个指标上均提高。主要实际意义是为歌曲生成模型提供了一个可解释、多维且可用于策略优化的奖励信号。主要局限是推理需额外自回归生成 critique，训练数据主要限于 SongEval 的中英文声乐歌曲，且下游生成质量缺乏人类主观听感验证。

### 🔗 开源详情

- 代码：论文明确给出项目仓库地址 `https://github.com/WuqnEl/MuseCritic`，说明代码可用；但未提供完整仓库内容或版本信息。
- 模型权重：论文未提及 MuseCritic 自身权重的独立下载链接；使用的基座模型为 MOSS-Audio-8B-Instruct，对比模型包含 SongEval 官方权重、Audiobox Aesthetics、Qwen3-Omni-30B-A3B-Instruct，但论文均未给出下载链接。
- 数据集：SongEval（2,399 首中英文完整歌曲，总计超过 140 小时音频，五维审美评分，来自 16 位具备音乐专业知识的标注者，覆盖九种主要流派；论文未提供下载链接或开源协议）；Music Arena（733 对偏好测试样本；论文未提供下载链接）；Muse 的 100 条多轮测试提示（来自 Muse，论文未提供单独下载链接）。
- Demo：论文中未提及。
- 复现材料：论文附录 B/C/D/E/F/G 给出训练与推理配置；关键设置包括：SFT 阶段全参微调 MOSS-Audio-8B-Instruct，学习率 5e-5，无 weight decay，5% warmup，cosine 调度，最大序列长度 10000，随机种子 42，使用第 1 个 epoch 的 checkpoint-69；MuseCritic 奖励学习从 checkpoint-69 初始化，LoRA rank=8、alpha=32，奖励头全可训练，dropout=0.1，学习率 2e-4，weight decay=0.1，per-device batch size=1，累积 8 步，global batch size=32，4 张 NVIDIA H200 GPU，DeepSpeed ZeRO-3，训练 10 个 epoch，采用 checkpoint-690；SongEval 数据划分随机种子 42，训练 2199 首 / 测试 200 首；critique 生成使用 do_sample=False、num_beams=1、最多 4096 个新 token；GRPO 阶段每 prompt 采样 8 个输出，学习率 1e-6，单条 completion 最多 3000 token，完整多轮 trajectory 最多 20000 token，奖励为 MuseCritic 五维分数均值。
- 论文中引用的开源项目：SongEval、Audiobox Aesthetics、Qwen3-Omni-30B-A3B-Instruct、MOSS-Audio-8B-Instruct、Muse、UTMOS、GRPO、DeepSpeed ZeRO-3、LoRA 均在论文中被引用或使用，但论文片段中均未提供直接 URL；另有 Gemini-3-Pro / Gemini-3.1-Pro（标识符为 gemini-3-pro-preview / gemini-3.1-pro-preview，为闭源 API 模型）。

### 🏗️ 方法概述和架构

整体流程是一个两阶段训练、两遍推理的半标量奖励模型。输入为完整歌曲音频 \(x\) 和五维美学评价 prompt \(p\)；推理时模型先自回归生成一段自然语言 critique \(\hat c=g_c(x,p)\)，然后把 \(x,p,\hat c\) 一起输入共享骨干，从最终有效 token 的隐藏状态经奖励头预测五维连续分数 \(\hat y=g_s(x,p,\hat c)\)。训练分 Stage I 和 Stage II：Stage I 先用外部教师 Gemini-3-Pro 根据歌曲、rubric 与专家平均分生成高置信 critique 数据集 \(\mathcal{D}_{\mathrm{off}}\)，对 MOSS-Audio-8B-Instruct 做 critique 生成的 SFT；Stage II 用 SFT 模型对全部训练歌曲自生成 critique，得到 \(\mathcal{D}_{\mathrm{on}}\)，再在 \(\mathcal{D}_{\mathrm{on}}\) 上以专家平均分做 MSE 回归，联合更新骨干 LoRA 和奖励头。

下图展示了MuseCritic的整体两阶段训练和推理流程。

![Figure 1: Overview of the two-stage training and inference pipeline of MuseCritic. In Stage I, Gemini-3-Pro generates aesthetic critiques from songs, evaluation rubrics, and expert mean ratings to construct 𝒟off\\mathcal{D}_{\\mathrm{off}},](https://arxiv.org/html/2608.11755v1/Musecritic_main.png)

图中左侧为Stage I的Critique SFT，使用教师生成的离线数据集；右侧为Stage II的Reward Modeling，使用模型自生成的critique训练奖励头。


主要组件有三部分。第一是共享骨干 \(f_\theta\)，即 MOSS-Audio-8B-Instruct 音频语言模型，同时连接语言建模头 \(h_{\mathrm{LM}}\) 和奖励建模头 \(h_{\mathrm{RM}}\)。语言建模头负责 critique 生成，奖励头负责分数预测。共享骨干使 critique 中的证据编码与最终奖励预测使用同一组跨模态隐藏表示，而不是两个独立模型。

第二是 critique 生成器 \(g_c=h_{\mathrm{LM}}\circ f_\theta\)。输入为歌曲音频和五维 rubric prompt，输出按固定顺序覆盖五个维度的中文 critique：Overall Coherence、Memorability、Naturalness of Vocal Breathing and Phrasing、Clarity of Song Structure、Overall Musicality。Stage I 的 SFT 目标是标准下一 token 交叉熵：
\[
\mathcal{L}_{\mathrm{SFT}}=-\frac{1}{\sum_i |c_i^{\mathrm{off}}|}\sum_i\sum_t \log p_\theta(c_{i,t}^{\mathrm{off}}\mid x_i,p,c_{i,<t}^{\mathrm{off}}),
\]
音频 token 和 prompt token 不计算损失。教师 prompt（用于生成离线 critique）明确要求按维度逐段分析、使用音乐理论与音频制作术语、不编造歌手身份、不输出数值分，并要求基于可听音乐证据解释给定评分；训练 prompt（用于 SFT 和自生成 critique）保留维度分析、术语要求和身份约束，但不包含数值分禁止项，因为离线 critique 本身已由教师模型保证不含数值。

第三是奖励头 \(g_s=h_{\mathrm{RM}}\circ f_\theta\)。它读取歌曲 \(x\)、rubric \(p\) 和 critique \(c\) 的完整序列，取最后一个有效 token 的隐藏表示，经过 dropout、线性映射 \(\mathbb{R}^d\to\mathbb{R}^5\)，最后通过 sigmoid 范围变换输出 \((1,5)^5\) 的分数。奖励学习目标为：
\[
\mathcal{L}_{\mathrm{MSE}}(\mathcal{S};g_s)
=\frac{1}{|\mathcal{S}|K}\sum_{(x,p,c,y^*)\in\mathcal{S}}\|g_s(x,p,c)-y^*\|_2^2,
\]
其中 \(K=5\)。Stage II 的关键是 \(\mathcal{D}_{\mathrm{on}}\) 中的 critique 由目标家族模型自生成，而非直接使用 Gemini critique，以减少奖励训练与推理时的 critique 分布不匹配。

数据流上，\(\mathcal{D}_{\mathrm{off}}\) 由 Gemini-3-Pro 通过显式接收专家均值评分来生成与评分极性一致的 critique；这些 critique 经过八名音乐专家人工审核后用于 SFT。Stage II 把 SFT 模型以贪婪解码、最多 4096 个新 token 为所有训练歌曲生成 \(\mathcal{D}_{\mathrm{on}}\)。奖励学习只使用 MSE，不附加 critique 语言建模损失。推理是两遍前向：先用同一骨干生成 critique，再基于完整序列打分。下游 GRPO 中，候选歌曲的奖励被定义为 MuseCritic 输出的五个分数等权平均，作为相对优势估计的标量信号。

关键设计动机包括：用 critique 作为变量取代直接分数，使长音频中的跨时间段证据先被组织成语义分段的文本，再映射到分数，从而缓解直接回归的分数分布收缩；使用自生成而非外部教师 critique，是为了让训练时奖励头看到的文本风格、信息密度和词汇分布更接近推理；骨干 LoRA、奖励头全参数更新则是为了在保留音频语言模型能力的同时稳定学习五维回归。

### 💡 核心创新点

1. **将自然语言 critique 作为歌曲奖励建模的中间变量**。之前 SongEval、Audiobox Aesthetics 等直接从音频预测分数，不产生可读证据；MuseCritic 先基于五个美学维度生成 critique，再以 critique 为条件预测连续分数。它把长歌曲中的听觉证据组织成维度对齐的文本表示，消融显示去掉 critique 后 MSE 从 0.2316 升至 0.5005，说明该中间变量改善了绝对尺度对齐。
2. **两阶段“教师 SFT + 自生成 critique”奖励学习**。与直接使用外部教师 critique 训练奖励头不同，MuseCritic 先用 Gemini 的评分条件 critique 做 SFT，再用 SFT 模型自生成的 critique 训练奖励头。该设计针对 train/inference critique 分布偏移；在相同配置下，用 offline critique 训练使宏平均 MSE 升至 0.5481，LCC/SRCC/KTAU 降至 0.8154/0.7585/0.5685，而自生成版本显著更优。
3. **共享骨干的半标量音频奖励模型**。\(g_c\) 和 \(g_s\) 共享同一 MOSS-Audio-8B-Instruct 骨干，奖励头从最终 token 隐藏态输出五维 \((1,5)\) 分数，既保留音频语言模型的批判性分析能力，又完成连续偏好信号预测。相比纯 LLM-as-a-Judge，专家分数监督使绝对误差和相关性明显更好。
4. **将可解释奖励模型闭环用于歌曲生成策略优化**。论文不仅评测奖励模型自身，还用 MuseCritic 作为 GRPO 奖励训练 Muse-0.6B，结果显示生成模型在 SongEval 五维和 Audiobox Aesthetics 四维指标上均提高，说明该奖励信号不仅适合基准评测，也能提供下游优化梯度。

### 📊 实验结果

In-domain 任务在 SongEval 固定 200 首测试集上进行五维分数回归。MuseCritic 在五个维度上均取得最低 MSE 和最高相关。宏平均结果见表 1；其中 Gemini-3.1-Pro 的相关宏平均为按原表各维度数值计算。

表 1：SongEval 宏平均结果。
| 模型/变体 | MSE ↓ | LCC ↑ | SRCC ↑ | KTAU ↑ |
|---|---|---|---|---|
| MuseCritic | 0.2316 | 0.9068 | 0.8838 | 0.7178 |
| SongEval (UTMOS) | 0.2875 | 0.8793 | 0.8531 | 0.6766 |
| Gemini-3.1-Pro | 1.3061 | 0.5663 | 0.5722 | 0.4194 |

维度层面，MuseCritic 在五项 MSE 分别为 0.2058、0.2511、0.2537、0.2275、0.2202；对应 LCC 均高于 0.89，SRCC 均高于 0.86，KTAU 均高于 0.69。对比同 split 重训的 SongEval UTMOS，MuseCritic 在所有维度上一致优于该基线。

Out-of-domain 的 Music Arena 结果见表 2，MuseCritic 准确率最高。该任务使用 733 对偏好对，正确判定要求对人工偏好歌曲给出严格更高的等权平均分数。

表 2：Music Arena 偏好准确率。
| 模型 | 准确率 (%) ↑ |
|---|---|
| Qwen3-Omni-30B-A3B | 53.75 |
| Audiobox Aesthetics | 68.49 |
| SongEval | 70.80 |
| MuseCritic | 71.35 |

关键消融中，去掉 critique 后宏平均 MSE 从 0.2316 升到 0.5005，但 LCC/SRCC/KTAU 仅略降，说明直接回归能保留一定排序但分数分布高度收缩；用 offline critique 训练使宏平均 MSE 升到 0.5481，LCC/SRCC/KTAU 降到 0.8154/0.7585/0.5685；去掉 SFT 初始化的变体最差，宏平均 MSE 为 0.7541，LCC/SRCC/KTAU 降到 0.6695/0.6660/0.5008。这说明自生成 critique 和 SFT 初始化都分别贡献明显。

下游 GRPO 使用 500 个 Muse 训练提示，100 个测试提示。Muse-GRPO 相比 Muse 在 SongEval 五个指标上提高 0.05–0.06，Audiobox Aesthetics 中 PC 提升 0.15、CE 提升 0.12。论文还给出 240/270/300/330/360 秒固定前缀与完整音频的鲁棒性结果，显示各窗口下 Muse-GRPO 均优于 Muse。

### 🔬 细节详述

- **训练数据**：SongEval，2399 首完整中英文歌曲，超过 140 小时，包含 9 个主要流派，由 16 位具有音乐专业背景的标注者提供五维分数。论文按 seed 42 划分 2199 首训练、200 首测试。Stage I 使用 Gemini-3-Pro（模型标识 `gemini-3-pro-preview`）基于歌曲、rubric 和专家平均分生成离线 critique，并由 8 名音乐专家人工审核。Stage II 使用 SFT 模型自生成 critique，保留同一训练歌曲和专家分数。
- **损失函数**：Stage I 为教师 critique 的下一 token 交叉熵，只计算 critique 目标 token；Stage II 只使用五维 MSE 回归，不附加 critique 语言建模损失。下游 GRPO 的单候选奖励为五维 MuseCritic 分数的等权平均，再在组内计算相对优势。
- **训练策略**：SFT 阶段对 MOSS-Audio-8B-Instruct 全参数微调，学习率 \(5\times10^{-5}\)，无权重衰减，1 个有效 epoch，全局 batch size 32，5% warmup，cosine 调度，最大序列长度 10,000，bf16，seed 42，4 张 H200。奖励学习从 SFT checkpoint 初始化，骨干 LoRA rank=8、scaling factor=32，奖励头全参数更新，学习率 \(2\times10^{-4}\)，权重衰减 0.1，dropout 0.1，训练 10 epochs，全局 batch size 32，5% warmup，cosine 调度，DeepSpeed ZeRO-3，4 张 H200。SongEval UTMOS 基线学习率 \(1\times10^{-4}\)，训练 10 epochs，2 张 H200。
- **关键超参数**：奖励头先 dropout 0.1，再线性映射到 \(\mathbb{R}^5\)，sigmoid 范围变换到 \((1,5)^5\)；推理最大生成 4096 个新 token；critique 生成与主评测均使用 \(T=0\) 的贪婪解码，num_beams=1。GRPO 使用 6 张 H200 训练、2 张 H200 vLLM rollout，学习率 \(10^{-6}\)，每 prompt 采样 8 个候选，温度 0.9，top-p 0.9，重复惩罚 1.3，单完成最多 3000 token，整个多轮轨迹最多 20000 token。
- **训练硬件**：SFT 和奖励学习各使用 4 张 NVIDIA H200；SongEval 基线使用 2 张 H200；GRPO 训练使用 6 张 H200，vLLM rollout server 使用 2 张 H200。论文未说明总训练时长。
- **推理细节**：评测和在线 critique 生成都采用确定性解码，避免采样方差；Music Arena 和 SongEval 测试均使用 \(T=0\)。下游 GRPO 首先生成完整歌曲；为处理偶发 token 重复尾段，主结果采用 240 秒固定前缀评估，未截断完整音频作为鲁棒性对照。
- **正则化或稳定训练技巧**：奖励头 dropout、骨干 LoRA、权重衰减 0.1、warmup、cosine 调度；无额外数据增强说明。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 提出将自然语言 critique 作为长歌曲奖励建模的中间表征，并设计“教师 SFT + 自生成 critique”两阶段训练以缓解分布偏移；[A_SUMMARY] 相比直接回归将 SongEval 宏平均 MSE 从 0.2875 降至 0.2316，属于有证据支持的领域迁移型创新。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 共享骨干、critique 生成器和奖励头的公式定义清楚，最终有效 token 映射五维分数的设计逻辑自洽；[A_RESULTS] 消融显示去掉 critique 或使用 offline critique 后性能退化方向与设计动机一致，未发现明显方法逻辑漏洞。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 包含同 split 重训的 SongEval UTMOS、Gemini-3.1-Pro、Qwen3-Omni 和 Audiobox Aesthetics 等代表性基线，并给出关键消融和 Music Arena 跨域测试；[A_LIMITS] 但主结果均为单 seed，Music Arena 仅领先 SongEval 0.55 个百分点且无统计显著性，人工 critique 审核样本量与人类听感验证不足，限制结论强度。

*   清晰度 (0.8/1)：[A_SUMMARY] 论文对问题动机、提出方法和主要结论的表述清楚；[A_METHOD] 两阶段训练、数据流、推理路径和公式均按结构说明，未发现明显组织、符号或图表表达缺陷。

*   影响力 (1.0/1.5)：[A_SUMMARY] 面向歌曲生成提供可解释、多维且可用于策略优化的奖励信号，在 SongEval 和 Music Arena 上相对基线有提升，并驱动 Muse-0.6B 在九个美学指标上改善，对音频生成对齐具有实际意义。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.5/0.5)：[A_OPEN] 附录 B/C/D/E/F/G 给出 SFT、奖励学习、GRPO 的学习率、批大小、LoRA 参数、硬件、随机种子、数据划分和推理配置；[A_METHOD] 公式与推理流程清晰，复现步骤披露充分。

*   工程/实践价值 (1.0/1.5)：[A_METHOD] 两阶段训练与下游 GRPO 闭环验证了从 critique 生成、奖励建模到策略优化的可落地路径；[A_RESULTS] 对固定前缀和完整音频做了鲁棒性检查，但自回归 critique 推理开销较高，限制了部分工程实用性。

### 🚨 局限与问题

1. **论文明确承认的局限**：自回归 critique 生成使推理比直接分数回归更昂贵；可用于训练的长歌曲专家评分数据稀缺，MuseCritic 主要依赖 SongEval 的中英文声乐歌曲，未来需扩展到更多语言和音乐流派。
2. **审稿人发现的潜在问题**：
   - Music Arena 中 MuseCritic 仅比 SongEval 高 0.55 个百分点，且没有统计显著性检验，不能排除模型选择或 prompt/解析差异的影响。
   - 所有主结果均为单 seed，没有方差估计、统计检验或多次训练稳定性证据。
   - 人工审核 critique 的样本量、拒绝率和一致性没量化，无法判断离线 critique 的质量筛选是否真的改善了 SFT。
   - 没有与 MusicRL 等音乐奖励模型或更多音频奖励模型直接比较。
   - GRPO 采用 240 秒固定前缀作为主结果，虽然论文给出完整音频鲁棒性说明，但生成尾段可能被系统性地弱化；且没有人类试听评价来确认 MuseCritic 驱动的主观质量提升。
   - 奖励模型本身是否有 critique 幻觉、错误归因或跨维度串扰未做人工分析。
   - 论文未分析在低资源或跨流派条件下的泛化能力，当前结果表明领域迁移有限但可接受，但缺少外推到非中英文歌曲的证据。

---

[← 返回 2026-08-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-13/)
