---
title: "On-Policy Self-Distillation for Multi-Dialect ASR: Mastering Dialects, Retaining Mandarin"
date: 2026-08-13
draft: false
tags: [语音识别, 知识蒸馏, 多语言, 持续学习, 领域适应]
categories: [论文速递]
description: "语音识别 | 7.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.11898"
---

# 📄 On-Policy Self-Distillation for Multi-Dialect ASR: Mastering Dialects, Retaining Mandarin

标签：#语音识别 #知识蒸馏 #多语言 #持续学习 #领域适应

**7.0/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 清晰 0.8/1 | 影响 0.8/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **7.0/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #语音识别 | #知识蒸馏 | #多语言 #持续学习 | [arxiv](https://arxiv.org/abs/2608.11898)


### 👥 作者与机构

- 第一作者：Shuiyuan Wang（Audio, Speech and Language Processing Group (ASLP@NPU), School of Computer Science, Northwestern Polytechnical University, Xi’an, China）
- 通讯作者：Lei Xie（Audio, Speech and Language Processing Group (ASLP@NPU), School of Computer Science, Northwestern Polytechnical University, Xi’an, China）
- 作者列表：Shuiyuan Wang（ASLP@NPU，西北工业大学计算机学院）、Bingshen Mu（ASLP@NPU，西北工业大学计算机学院）、Pengshen Zhang（WeNet Community）、Chengyou Wang（ASLP@NPU，西北工业大学计算机学院）、Yujie Liao（ASLP@NPU，西北工业大学计算机学院）、Chengdong Liang（WeNet Community）、Binbin Zhang（WeNet Community）、Qiangze Feng（NEXDATA TECHNOLOGY INC.）、Lei Xie（ASLP@NPU，西北工业大学计算机学院）

### 💡 毒舌点评

本文抓住了多方言 ASR 中“学会方言、保住普通话”这一真实痛点，并用同一套 refinement 数据下的 Continued SFT vs. OPSD 对照实验给出了相当有说服力的证据：普通话平均 CER 从 4.43% 降到 3.27%，说明最后阶段的目标函数选择确实关键。短板也很明显：OPSD 本身并非新方法，增量主要来自将其搬进 ASR 场景和阶段化工程组合；且论文并未与专门的方言 ASR 系统或 adapter/MoE 方案直接比较，公共方言集合上的提升幅度也偏小，距离突破性贡献仍有距离。CPT 消融虽然证明了先做继续预训练的必要性，但这一结论本身并不意外——把普通话混合数据先跑一圈能缓和后续方言 SFT 的覆盖损伤，属于常规持续学习直觉的验证。

### 📌 核心摘要

论文要解决的问题是：如何在大规模 ASR 模型上做多方言适应，既降低方言 CER，又不破坏已有普通话识别能力。方法核心是一个三阶段适应框架：先用大规模普通话-方言数据继续预训练 CPT，再做以方言为重心的监督微调 SFT，最后用 On-Policy Self-Distillation OPSD 进行精炼。OPSD 阶段让学生模型基于自身采样前缀进行解码状态训练，而冻结教师以参考转录作为特权上下文提供 token 级软目标，从而用 KL 蒸馏替代硬交叉熵更新。实验在 Qwen3-ASR-1.7B 上开展，OPSD 后 Mandarin Avg. 从 SFT 的 3.40% 降到 3.27%，Dialect Avg. 从 13.16% 降到 12.79%，Internal Avg. 从 13.30% 降到 12.42%。与同样数据的 Continued SFT 相比，OPSD 避免了普通话 CER 显著上升。关键消融还显示：直接跳过 CPT 做方言 SFT 会将 Mandarin Avg. 拉高到 5.16%，而先 CPT 再 SFT 可控制在 3.40%。实际意义在于为中国多方言 ASR 提供一个可复用的稳定适应策略，并计划公开权重和评估脚本。主要局限是 OPSD 改进幅度有限、缺少与专用方言模型的直接对比，且方法本身更多是适配和组合已有技术。

### 🔗 开源详情

- 代码：https://github.com/ASLP-lab/CN-MultiDialect-ASR（论文中明确给出的代码仓库链接；作者表示将发布评估脚本）
- 模型权重：论文中未提及具体 HuggingFace/ModelScope 链接；作者表示将通过上述 GitHub 仓库发布模型权重。
- 数据集：论文中未提及具体获取链接或开源协议。涉及的公开评测集包括 AISHELL-1、AISHELL-2、KeSpeech、SpeechIO-1/2/3、Test_Meeting、Test_Net、WenetSpeech-Yue Long/Short、WenetSpeech-Chuan Easy/Hard、WenetSpeech-Wu；另有 18 个内部方言评测集和约 100k 小时训练数据，内部数据未公开。
- Demo：论文中未提及。
- 复现材料：论文给出部分训练配置，并称将发布评估脚本、超参数设置、解码设置和随机种子。训练配置：8×NVIDIA RTX A6000 GPU、DeepSpeed ZeRO-2、FlashAttention-2；CPT 1 epoch、学习率 \(1\times10^{-5}\)、global batch size 1536；SFT 同 CPT；OPSD/Continued SFT 1 epoch、学习率 \(1\times10^{-4}\)、global batch size 512；OPSD 采样温度 \(\tau=0.8\)，评估使用贪心解码。相关材料预期与代码同仓库发布：https://github.com/ASLP-lab/CN-MultiDialect-ASR。
- 论文中引用的开源项目：GLM-ASR-Nano-2512（论文未给出链接）、Fun-ASR-Nano-2512（论文未给出链接）、Qwen3-ASR-1.7B（论文未给出链接）、Dolphin-CN-Dialect（论文未给出链接）、DeepSpeed（论文未给出链接）、FlashAttention-2（论文未给出链接）。

### 🏗️ 方法概述和架构

本论文提出的是一个三阶段串行适应流水线，应用于 Qwen3-ASR-1.7B 这一自回归语音识别大模型。整体输入是语音波形 \(\mathbf{x}\) 和对应的字符级文本 \(\mathbf{y}\)，输出是识别字符序列。部署时只使用学生解码支路，不带任何参考转录特权信息。

下图展示了本文提出的三阶段适应流水线的整体架构。

![Figure 1: Overview of the staged adaptation pipeline. Top: from the base model through CPT and SFT to OPSD. Bottom: OPSD with student on-policy prefixes, a frozen teacher with reference transcript as privileged context, soft targets qtq_{t}](https://arxiv.org/html/2608.11898v1/opsd.png)

图中从基础模型到OPSD的流程清晰可见，包括CPT和SFT阶段使用交叉熵目标，而底部详细说明了OPSD阶段中学生模型使用on-policy前缀、冻结教师模型利用参考转录作为特权上下文进行token级KL蒸馏的机制。


第一阶段是 CPT，即继续预训练。它在约 100k 小时的普通话-方言混合数据 \(\mathcal{D}_{\text{zh}}\) 上继续训练 Qwen3-ASR。损失函数是标准的序列级交叉熵：对每个训练样本、每个时间步 \(t\)，模型以历史真实前缀 \(\mathbf{y}_{i,<t}\) 为条件预测下一个 token \(y_{i,t}\)，公式为

\[\mathcal{L}_{\text{CPT}} = -\sum_{i=1}^{N_{\text{zh}}}\sum_{t=1}^{T_i}\log p_{\theta}(y_{i,t} \mid \mathbf{x}_i, \mathbf{y}_{i,<t}).\]

CPT 的数据来源包括 WenetSpeech、AISHELL-1/2、AliMeeting、Common Voice 17.0、MAGICDATA、KeSpeech、WenetSpeech-Yue/Chuan/Wu 以及内部数据，覆盖普通话、粤语、四川话、吴语和 18 种内部方言。CPT 的主要设计动机是：如果直接进入高权重的方言 SFT，模型容易被拉偏；先在混合数据上走一圈，能降低后续普通话损失。

第二阶段是方言 SFT。它不再引入新的方言类型，而是重建训练分布 \(\mathcal{D}_{\text{zh}}^{\text{dial}} = \mathcal{D}_{\text{dial}}^{\text{all}} \cup \mathcal{D}_{\text{mand}}^{\text{small}}\)，即保留全部方言数据和少量普通话数据，提高方言采样权重。损失函数仍是标准序列级交叉熵，与 CPT 相同。相比 CPT，该阶段主要改变数据比例而不是目标函数，目的是在已有基础上进一步压低方言 CER。但作者明确指出，这一阶段仍然可能推高普通话 CER。SFT 输出的 checkpoint 同时作为第三阶段 OPSD 和 Continued SFT 的共同起点。

第三阶段是 OPSD，也是论文的方法核心。它从一个与 SFT 相同的 checkpoint 出发，冻结教师副本 \(\bar{\theta}\)，只训练学生 \(\theta\)。对于每个训练样本 \((\mathbf{x}, \mathbf{y}^{\star})\)，OPSD 的具体流程如下：

1. 学生使用标准 ASR prompt 在温度 \(\tau=0.8\) 下采样自己的假设前缀 \(\hat{\mathbf{y}}_{\leq T}\)，直到 EOS。此处得到的“on-policy”前缀来自学生自身的解码分布，而不是参考文本，因此更接近推理时的解码状态。
2. 对每个位置 \(t\)，教师模型接收语音 \(\mathbf{x}\)、参考转录 \(\mathbf{y}^{\star}\) 作为特权上下文 \(c(\mathbf{y}^{\star})\)，以及学生已经生成的同一个前缀 \(\hat{\mathbf{y}}_{(t)}\)，计算教师分布
   \[q_t(v) = p_{\bar{\theta}}(v \mid \mathbf{x}, c(\mathbf{y}^{\star}), \hat{\mathbf{y}}_{(t)}), \quad v \in \mathcal{V}.\]
   特权上下文是训练时提示字段，由分隔符与学生前缀分开，只在教师通路中使用，学生和最终部署模型都不可见。
3. 学生通过 KL 散度匹配教师分布：
   \[\mathcal{L}_{\text{OPSD}} = \sum_{t=1}^{T} D_{\text{KL}}\big(q_t \,\|\, p_{\theta}(\cdot \mid \mathbf{x}, \hat{\mathbf{y}}_{(t)})\big).\]
   梯度只更新学生 \(\theta\)，教师完全冻结。没有辅助交叉熵损失。

OPSD 的关键设计动机是解决自回归 ASR 的 train-test mismatch。传统 teacher forcing 训练时每一步都基于 gold 历史前缀，而推理时模型必须基于自身输出继续；方言场景下早期错误更常见，错误前缀会让后续训练状态偏离真实解码状态。OPSD 让学生在自己的错误前缀上学习，教师则利用参考转录提供更合理的后续 token 分布。同时，与继续做硬 CE 不同，软目标保留了教师所承载的普通话知识，有助于避免最后一阶段再次对普通话能力造成覆盖性损伤。

数据流上，CPT 输出基础 checkpoint，SFT 输出精炼起点，OPSD 输出最终模型。各阶段所用的数据范围逐步收窄并聚焦高难度方言：OPSD 的 refinement set 来自约 5k 小时方言数据，先用 SFT 模型解码这些样本并计算 CER，过滤掉元数据不可靠、时长异常、空或极短文本以及音频加载失败的样本；从剩余样本中保留来自人类标注来源的高 CER 样本，并按方言 cap 小时数，防止少数难方言主导训练。当说话人 ID 可用时，测试说话人在训练和精炼阶段被剔除；训练、精炼、开发和测试集之间还做了 utterance 级去重。

### 💡 核心创新点

1. **三阶段多方言适配框架**：将 CPT、方言 SFT 和 OPSD 串成完整管线，显式分解“打基础—强方言—保普通话”的目标。之前直接方言微调往往以普通话精度为代价，而本文通过阶段化训练和最后用蒸馏代替硬 CE，获得更均衡的普通话-方言 CER。CPT 消融直接证明跳过 CPT 会导致 Mandarin Avg. 从 3.46% 恶化至 5.16%。

2. **把 On-Policy Self-Distillation 适配到自回归 ASR 场景**：原始 OPSD 更多是单一模型在不同上下文下的自蒸馏；本文将其改造为“冻结教师 + 可训练学生 + 参考转录作为教师特权上下文 + 学生采样前缀”。这一改造的核心 insight 是：学生要在自己的错误前缀上训练，而教师用 reference 提供稳定的语音-文本对齐信号。

3. **用纯 token 级 KL 代替最后一轮 CE 进行方言精炼**：在同样的 refinement 数据和训练 schedule 下，Continued SFT 仍使用 teacher-forced CE，使普通话 Avg. CER 上升至 4.43%；OPSD 则降至 3.27%。这证明保留普通话能力的关键不只是数据，还包括最终目标的软监督形式。

4. **困难方言精炼数据构造策略**：通过先解码、按 CER 筛选、保留来自人类标注来源的高 CER 样本、按方言 cap 小时数，并做测试说话人排除和 utterance 级去重，使最后一阶段集中处理最容易累积解码错误的方言样本。该数据策略对低资源方言适应有直接工程参考价值。

### 📊 实验结果

论文在 13 个公共/共享测试集和 18 个内部方言测试集上评估，指标为字符错误率 CER，所有平均值均为测试集等权的宏观平均。表 1 保留开源基线与本文三阶段检查点的聚合 CER，其中基座 Qwen3-ASR 同时是本文方法的起点模型。

表 1：聚合 CER（%），对比开源基线和本文各阶段检查点。

| 模型 | Mandarin Avg. | Dialect Avg. | Internal Avg. | Overall Avg. |
|---|---:|---:|---:|---:|
| GLM-ASR | 5.28 | 37.21 | 41.55 | 31.49 |
| Fun-ASR | 4.59 | 18.43 | 27.10 | 19.89 |
| Qwen3-ASR | 3.46 | 15.37 | 21.01 | 15.57 |
| CPT | 3.78 | 13.74 | 15.09 | 11.95 |
| SFT | 3.40 | 13.16 | 13.30 | 10.72 |
| OPSD | 3.27 | 12.79 | 12.42 | 10.12 |

表 2 合并 CPT 消融与最终精炼消融，两者分别回答“是否要先做 CPT”与“最后一轮用 CE 还是 OPSD”。

表 2：消融实验 CER（%），CPT 消融与 refinement 阶段消融。

| 消融设置 | Mandarin Avg. | Dialect Avg. | Internal Avg. | Overall Avg. |
|---|---:|---:|---:|---:|
| Qwen3-ASR | 3.46 | 15.37 | 21.01 | 15.57 |
| w/o CPT + SFT | 5.16 | 14.70 | 14.20 | 11.95 |
| w/ CPT + SFT | 3.40 | 13.16 | 13.30 | 10.72 |
| SFT checkpoint | 3.40 | 13.16 | 13.30 | 10.72 |
| + Continued SFT | 4.43 | 12.89 | 12.95 | 10.74 |
| + OPSD | 3.27 | 12.79 | 12.42 | 10.12 |

主要数字变化如下：从 Qwen3-ASR 到最终 OPSD，Mandarin Avg. 从 3.46% 降至 3.27%，Dialect Avg. 从 15.37% 降至 12.79%，Internal Avg. 从 21.01% 降至 12.42%。与 SFT 相比，OPSD 在 8 个普通话测试集和 5 个公共方言测试集上全部下降。公共方言细节方面，WenetSpeech-Yue Long 从 9.01% 降至 8.80%，Yue Short 从 5.60% 降至 5.31%，Chuan Easy 从 12.30% 降至 11.86%，Chuan Hard 从 22.27% 降至 21.74%，WenetSpeech-Wu 从 16.60% 降至 16.26%。

CPT 消融显示：直接跳过 CPT 做方言 SFT 虽然也将 Dialect Avg. 从 15.37% 降至 14.70%、Internal Avg. 从 21.01% 降至 14.20%，但 Mandarin Avg. 从 3.46% 大幅升至 5.16%；先做 CPT 再 SFT 则把 Mandarin Avg. 控制在 3.40%，同时方言指标更优。这说明 CPT 对稳定普通话-方言权衡是必要的。

内部最难方言中，Kejia 从 SFT 的 32.01% 降至 28.60%，Chaoshan 从 27.34% 降至 25.21%，Nanchang 从 18.63% 降至 15.58%。但不是所有内部方言都继续改善：上海在 SFT 为 11.94%，OPSD 为 12.07%；四川 SFT 为 5.13%，OPSD 为 5.38%。此外，SpeechIO-1 在 OPSD 为 0.86%，仍高于 CPT 的 0.71%。论文的方言性能分析指出，内部方言呈明显 easy-hard 分层：东北、四川、徐州、河南等在 OPSD 下低于 6% CER，而 Kejia、Chaoshan、Suzhou 仍高于 20%。难易差异与距普通话的语音/词汇距离、公共数据覆盖度和口音风格差异相关。

论文未与 Dolphin-CN-Dialect、MoE 或 adapter 类方言 ASR 系统直接比较，也未报告多次运行的均值和方差。

### 🔬 细节详述

- 训练数据：CPT 使用约 100k 小时普通话-方言数据，来源包括 WenetSpeech（约 22.4k 小时）、AISHELL-1（约 178 小时）、AISHELL-2（约 1000 小时）、AliMeeting（约 0.1k 小时）、Common Voice 17.0（约 234 小时）、MAGICDATA（约 755 小时）、KeSpeech（约 1.5k 小时）、WenetSpeech-Yue（约 21.8k 小时）、WenetSpeech-Chuan（约 10.0k 小时）、WenetSpeech-Wu（约 8.0k 小时）以及内部数据（约 34.1k 小时，覆盖普通话和多地方言）。SFT 使用同样来源，但提高方言采样权重并保留少量普通话。OPSD 使用约 5k 小时从方言训练集中筛出的高 CER 人类标注数据，过滤异常元数据、异常时长、空/极短文本和加载失败样本；按方言限制小时数；排除测试说话人并做 utterance 级去重。预处理包括字符级文本归一化、全半角统一、去除标点和空白，以及口语变体转规范写法；方言标注使用汉字而非音标拼写。数据增强未说明。

- 评估指标：所有测试集均采用字符错误率 CER 作为主指标，在统一文本归一化后按字符级评分。四个平均值定义为简单宏观平均，每个测试集等权，不按 utterance 数量加权。Mandarin Avg. 由 8 个普通话测试集组成，Dialect Avg. 由 5 个公共方言测试集组成，Internal Avg. 由 18 个内部方言测试集组成，Overall Avg. 为全部 31 个测试集的宏观平均。中英混合或普通话-方言代码切换语料按单一字符序列评分，评分时不使用方言专用发音词典。

- 损失函数：CPT 和 SFT 均为序列级交叉熵；OPSD 为 token 级 KL 散度，\(D_{\text{KL}}(q_t \| p_{\theta}(\cdot \mid \mathbf{x}, \hat{\mathbf{y}}_{(t)}))\)，其中教师分布 \(q_t\) 以参考转录作为特权上下文。没有辅助交叉熵损失。

- 训练策略：CPT 一轮，学习率 \(1\times10^{-5}\)，全局 batch size 1536；SFT 一轮，学习率 \(1\times10^{-5}\)，全局 batch size 1536；OPSD 与 Continued SFT 均一轮，学习率 \(1\times10^{-4}\)，全局 batch size 512，使用相同的 \(\mathcal{D}_{\text{ref}}\) 和 schedule。优化器、warmup、调度策略、总训练步数均未说明。训练使用 DeepSpeed ZeRO-2 和 FlashAttention-2。

- 关键超参数：基座模型 Qwen3-ASR-1.7B，OPSD 采样温度 \(\tau=0.8\)（仅训练时使用，不影响评估解码）。模型内部层数、隐藏维度、注意力头数未说明。

- 训练硬件：8 块 NVIDIA RTX A6000 GPU。训练时长未说明。

- 推理细节：所有报告 CER 均使用相同 greedy decoding 配置；采样温度 0.8 只在 OPSD 训练时使用，不影响评估解码。未提及 beam search 或流式设置。

- 正则化或稳定训练技巧：论文中未说明 dropout、weight decay、gradient clipping 等细节。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_SUMMARY][A_METHOD] 提出三阶段CPT-方言SFT-OPSD管线，将On-Policy Self-Distillation适配到自回归ASR，用冻结教师和参考转录特权上下文提供软目标；虽核心组件非全新，但组合与迁移有证据支撑。

*   技术严谨性 (1.2/1.5)：[A_METHOD] OPSD的采样前缀、教师分布和KL目标公式清晰，冻结教师、特权上下文仅用于教师通路、仅更新学生且无辅助CE的设计逻辑自洽，未见推导或算法逻辑错误。

*   实验充分性 (1.1/1.5)：[A_RESULTS][A_LIMITS] 在31个测试集上给出CER并有CPT与Continued SFT消融，但缺少与Dolphin/MoE/adapter等专用方言系统的直接比较，未报告多次运行方差或显著性检验，也未分离on-policy前缀、教师上下文和KL的贡献。

*   清晰度 (0.8/1)：[A_METHOD] 三阶段架构、数据流和OPSD的采样-教师分布-KL匹配过程说明清楚，公式定义和表格组织便于理解。

*   影响力 (0.8/1.5)：[A_SUMMARY][A_LIMITS] 面向中文多方言ASR的普通话-方言权衡问题具有实际意义，OPSD后三类平均CER均有下降；但绝对改进幅度有限且缺少专用系统对比，影响集中于该场景。

*   开源 (0.5/1.5)：[A_OPEN] 论文给出GitHub仓库链接并承诺未来发布模型权重和评估脚本，但尚未提供已发布的核心代码、权重或数据集链接，符合明确承诺未来开放但尚未发布。

*   可复现性 (0.3/0.5)：[A_OPEN] 复现材料仅给出部分训练配置（学习率、batch size、epoch、硬件、采样温度等），并称将发布评估脚本、超参数设置和随机种子，但未给出完整超参数与随机种子具体值，复现不完整。

*   工程/实践价值 (1.1/1.5)：[A_METHOD][A_LIMITS] 三阶段管线、高CER方言样本筛选和按方言cap小时数的数据构造策略有直接工程参考价值；但缺少OPSD训练时长、显存/计算开销和教师特权上下文额外复杂度的讨论，限制部署可行性判断。

### 🚨 局限与问题

1. **论文明确承认的局限**：作者提到 OPSD 不是在每个单独测试集上都最好，例如 SpeechIO-1 仍高于 CPT，上海和四川内部方言在 SFT 下略优于 OPSD；部分方言如 Kejia、Chaoshan、Suzhou 即使经过 OPSD 仍处于较高 CER，说明覆盖率和不平衡问题仍然存在。

2. **审稿人发现的潜在问题**：
   - 缺乏与专门多方言 ASR 结构和方法的直接比较，因此无法证明该三阶段框架比其他轻量适配或 Mixture-of-Experts 方法更好。Related Work 中提到了 Dolphin-CN-Dialect、MoE 和 adapter，但实验部分没有将其作为基线。
   - 公共方言集上 OPSD 相对 SFT 的平均降幅只有 0.37 个百分点，内部集为 0.88 个百分点，且有些集合略有上升；没有显著性检验，结论可能被单次实验噪声放大。
   - 论文未提供 OPSD 阶段的训练时长、显存和计算开销，也未讨论教师特权上下文带来的额外复杂度。这对判断实际部署可行性很重要。
   - 对采样温度、辅助 CE 的取舍、refinement 数据筛选阈值等关键设计选择缺乏消融。虽然论文明确说没有辅助 CE 且教师冻结，但没有实验说明这些选择对最终结果的贡献。
   - OPSD 与 Continued SFT 的差异不仅是 CE 与 KL，还有 on-policy 前缀和教师上下文的共同影响；当前实验无法分离这些因素的贡献。Continual SFT 仍用 teacher-forcing 前缀，而 OPSD 同时改变了前缀来源和目标形式，缺少一个“teacher-forcing + KL”或“on-policy + CE”的中间条件。
   - open-source 声明尚在计划阶段，缺少已发布 checkpoint，削弱短期复现和公平验证。
   - 论文声称 OPSD “does not raise Mandarin Avg. CER”，但 Mandarin Avg. 从 SFT 的 3.40% 降至 3.27% 的改善幅度很小，且 SpeechIO-1 仍比 CPT 差 0.15 个百分点；这个结论依赖于单次 greedy decoding 结果，没有方差支持。
   - 论文没有讨论 OPSD 与 scheduled sampling 等相关方法的异同。Related Work 中提到了 scheduled sampling，但方法部分未说明为什么不使用混合 gold/model 前缀的折中方案。

---

[← 返回 2026-08-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-13/)
