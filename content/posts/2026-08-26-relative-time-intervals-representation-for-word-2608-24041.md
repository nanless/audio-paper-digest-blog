---
title: "Relative Time Intervals Representation for Word-level Timestamping with Masked Training"
date: 2026-08-26
draft: false
tags: [语音识别, 语音大模型, LoRA, 鲁棒性, 长音频处理]
categories: [论文速递]
description: "语音识别 | 8.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.24041"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 Relative Time Intervals Representation for Word-level Timestamping with Masked Training

标签：#语音识别 #语音大模型 #LoRA #鲁棒性 #长音频处理

**8.6/10** | 创新 1.6/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 清晰 0.8/1 | 影响 1.2/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 0.9/1.5

🔥 **8.6/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #语音识别 | #语音大模型 | #LoRA #鲁棒性 | [arxiv](https://arxiv.org/abs/2608.24041)


### 👥 作者与机构

第一作者：Quanwei Tang（Soochow University）
通讯作者：Dong Zhang（dzhang@suda.edu.cn）
作者列表：Quanwei Tang、Zhiyu Tang、Xu Li、Dong Zhang、Shoushan Li、Guodong Zhou（机构：Soochow University；University of Queenland（原文拼写）；AISpeech Ltd；Jiangsu Key Lab of Language Computing）

### 📌 核心摘要

这项工作追问的是：SpeechLLM 能否在不丢失转写能力的前提下，把每个词放回它对应的声学时间位置？绝对时间戳虽然直观，却让 token 词表随覆盖时长和时间精度扩张，对训练范围外的时间坐标也缺乏自然外推。作者因此不再预测从音频起点累积的绝对位置，而是生成相邻词之间的相对时间区间，再通过累加恢复词级位置。

它不是在 ASR 后外挂独立对齐器，而是让同一条自回归输出序列联合承载文字与离散时间标记。训练端以文字与时间戳的联合交叉熵为主线，再随机遮蔽前序真值时间 token，削弱模型沿着教师强制标签抄写时间的捷径。Wenet-Meeting 公开泛化结果和 AISHELL-2/Common Voice 同骨干消融共同表明，表示变化与 masking 能改善对齐且没有牺牲转写。对语音研究者而言，关键贡献不是增加新的输出标签类别，而是把时间坐标、参数更新范围与训练正则设计成相互配合的解码问题。真正的边界是论文只证明了有限公开语料与离线设置中的收益，没有直接验证超长序列累计漂移和流式部署性能。

### 🏗️ 方法概述和架构

相对时间区间（Relative Timestamp）改变的是被语言模型离散预测的坐标系。绝对方案为每个从起点算起的时间位置分配 token；相对方案则让每个时间 token 表示前序词结束到当前词的间隔。有限区间可以反复累加，因此词表不必为每种音频总时长重新扩张。

如下图可追踪 Relative Timestamp 如何把固定参考下的多点绝对依赖，改写成相邻词之间的动态区间箭头。

[![Traditional methods rely on fixed-reference absolute timestamps, often struggling with cumulative errors or precise synchronization.](https://arxiv.org/html/2608.24041v1/intro.png)](https://arxiv.org/html/2608.24041v1/intro.png)

图中上半部的多只时钟都回指 0 s 固定参考，并用虚线交织出累计依赖；下半部用 3 条蓝色弧形箭头及对应秒级区间标签连接相邻词，视觉上突出局部区间。它只展示相邻事件间隔的表示关系，仍需正文实验判断区间累加后的长序列误差边界。


输入首先由 Conformer 音频编码器提取语音特征，再送入 Qwen2-7B-Instruct 解码骨干。解码器在同一自回归序列中生成文字 token 与相对区间 token；区间序列累加后形成可用于词级对齐的时间位置，而文字子序列仍承担 ASR 转写。

新增的 timestamp embedding 和 LM head 直接负责读写时间 token，因此从随机初始化开始做全参数更新。预训练解码器保留原权重，并通过 LoRA 低秩增量学习在合适文字附近插入时间标记；这种划分避免为新词表只做过弱适配，也减少了全面改写语言骨干的成本。

联合目标写成 \(L_{total}=L_{text}+\lambda L_{timestamp}\)，其中 2 项都是离散 token 的交叉熵。训练早期令 \(\lambda=1\)，先稳定语音到文字的映射，之后每个 epoch 将 \(\lambda\) 增加 1，让优化重心逐步转向时间对齐。

Masked timestamp training 处理的是自回归历史中的时间标签捷径。从第 2 个 epoch 起，10% 的前序时间 token 被替换为 [MASK]；当前区间便不能总读取完美真值，而要综合声学内容、文字历史与其余时间上下文完成预测。

推理时使用“Speech to text with timestamp”普通指令触发联合输出，不需要额外的 <|timestamp|> 特殊指令。相对 token 范围到 5.00 s，若词间停顿超出该范围如何处理、绝对时间如何在线累加以及流式状态如何缓存，正文均未说明。

从建模直觉看，人更容易感知相邻事件间隔，而非持续维护从起点开始的绝对秒表。这个类比帮助理解表示选择，却不能代替对累计误差和长时稳定性的直接测量。

在实现语义上，相对区间没有取消单调对齐，而是把全局位置计算移到解码后的累加步骤。这样做缩小了模型直接分类的时间空间，也直接把超长序列的误差控制责任交给区间预测质量与后续重锚定策略。

### 💡 核心创新点

1. 既有绝对时间表示把精度、最长音频和词表规模绑在一起，还要求模型外推未见过的绝对坐标。相对区间将预测空间限制为局部时长 token，并以顺序累加恢复全局位置；Wenet-Meeting 在 240 ms 容差下的对齐优势支持这一改变，但专门的超长音频分桶仍缺失。

2. 教师强制训练会把前序真值时间戳暴露给模型，容易形成沿标签历史推断下一时间值的捷径。Timestamp masking 随机遮蔽前序时间 token，让当前预测重新依赖语音和文字上下文；移除该机制后 Common Voice 的 WER 与时间戳 Precision/Recall 同时退化，不过论文只测试了固定 masking 概率。

3. 新时间词表的输入输出层是随机初始化，而大部分解码骨干已经具有语言与语音知识。作者据此让 timestamp embedding 和 LM head 全量更新、解码器只训练 LoRA 增量；这种职责匹配具有工程合理性，也便于逐步错误定位，但全文没有单独消融全参解码器或不同 LoRA 配置。

4. 固定时间权重可能让模型过早牺牲转写或过晚学习对齐。按 epoch 从较小 \(\lambda\) 起步的联合损失把训练次序显式化，移除 TS Loss 会使 2 种表示下的 WER 与时间戳指标退化；缺少权重日程曲线仍限制了因果归因。

### 📊 实验结果

时间戳评价先设定容差：预测与真值之差落在阈值内才算正确，再计算 Precision 与 Recall。Average Time Difference 则计算预测时间与人工真值绝对差的均值，单位为 ms，越低越好；转写质量另用 WER，越低越好。

外部模型表聚焦 Wenet-Meeting 的 240 ms 容差口径，用于检验局部区间表示的命中率与时间误差。下表保留 5 个可支持中文的系统或同骨干基线。

| 方法 | Wenet-Meeting Precision（% ↑） | Wenet-Meeting Recall（% ↑） | Average Time Difference（ms ↓） |
|---|---:|---:|---:|
| Qwen2-Audio | 82.30 | 75.87 | 43.07 |
| WhisperTimestamped | 43.97 | 18.79 | 102.48 |
| SenseVoiceSmall | 82.82 | 81.19 | 32.47 |
| Absolute Timestamp | 72.41 | 68.22 | 152.17 |
| Relative Timestamp（Ours） | 91.13 | 86.88 | 30.34 |

在 Wenet-Meeting 的 240 ms 容差设置中，Relative Timestamp（Ours）相对全部强基线，以 Precision 91.13%（↑，越高越好）取得最高值；Recall 也达到 86.88%。这支持公开语料上的对齐泛化，但表中没有置信区间或多次运行方差。

在 Wenet-Meeting 的 240 ms 容差下，Relative Timestamp 相对人工真值的 Average Time Difference 为 30.34 ms（↓，越低越好），是表中最低值。该数值描述误差幅度，不等同于端到端流式延迟。

同骨干消融进一步追问：收益来自相对表示本身，还是时间损失与 masking 的训练辅助。下表保留 AISHELL-2 iOS 与 Common Voice 英文子集在 240 ms 容差下的转写和时间戳指标。

| 配置 | AISHELL-2 iOS WER（% ↓） | AISHELL-2 Precision（↑） | AISHELL-2 Recall（↑） | Common Voice WER（% ↓） | Common Voice Precision（↑） | Common Voice Recall（↑） |
|---|---:|---:|---:|---:|---:|---:|
| Absolute Timestamp | 2.87 | 0.9544 | 0.9546 | 16.41 | 0.7861 | 0.7838 |
| Absolute - TS Loss | 2.96 | 0.9506 | 0.9447 | 18.63 | 0.7428 | 0.7407 |
| Relative Timestamp | 2.15 | 0.9763 | 0.9634 | 11.63 | 0.8770 | 0.8546 |
| Relative - TS Loss | 2.31 | 0.9715 | 0.9548 | 12.66 | 0.8712 | 0.8463 |
| Relative - Timestamp Masking | 2.56 | 0.9658 | 0.9578 | 14.47 | 0.8067 | 0.7853 |

在中文数据集 AISHELL-2 上，Relative Timestamp 相对全部强基线的 WER 为 2.15%（↓，越低越好）；同骨干 Absolute Timestamp 为 2.87%，且相对方案的 Precision 与 Recall 也更高。

在 Common Voice 英文子集上，完整 Relative Timestamp 相对 - Timestamp Masking 的同骨干消融，WER 为 11.63%（↓，越低越好），而移除 timestamp masking 后升至 14.47%；Precision 也从 0.8770 降至 0.8067。消融揭示的不是单一时间指标收益，而是训练稳定性与转写质量联动。

训练中移除 TS Loss 后，Common Voice WER 从 11.63% 升至 12.66%，且 Precision/Recall 小幅下降，说明单靠交替序列建模不足以获得最佳对齐。论文没有继续分解动态 \(\lambda\) 日程、固定权重和不同增长速度。

ASR 泛化覆盖 5 个公开语料：Relative Timestamp 相对全部外部基线，在 Wenet Meeting 的 WER 为 5.56%（↓，越低越好），并在 AISHELL-1、AISHELL-2、LibriSpeech 与 Common Voice 也报告最低 WER。Canary 在 LibriSpeech 的高容差时间戳上略优于本文，而本文没有在训练分布长度以外建立单独测试，因此“任意长”仍是表示层推论，不是完整实验结论。

### 🔬 细节详述

训练数据只使用 AISHELL-2 普通话语料和 Common Voice 英文子集；前者约 1,000 小时，全文没有给出后者实际训练小时数、采样比例、清洗与划分细节。评测扩展到 AISHELL-1、Wenet Meeting、LibriSpeech 与 Common Voice，用于检查中英文和会议场景泛化。

训练在 24 × Ascend 910B（64G）NPU 上运行 7k steps，每个 NPU 的 batch duration 为 500 s。优化器为 AdamW，学习率为 5 × 10^-6，调度器为 WarmupCosineLR，数值精度为 bf16；梯度累积、随机种子、LoRA rank、LoRA 作用层和训练墙钟时间未说明。

时间损失权重从 \(\lambda=1\) 起，每个 epoch 增加 1。Timestamp masking 从第 2 个 epoch 启用，固定概率为 10%；论文没有报告替换策略的其他分支、概率扫描或针对人工对齐噪声强度的分层实验。

绝对时间 token 覆盖 0.00–30.00 s，相对时间 token 覆盖 0.00–5.00 s。全文没有明确量化步长如何应用于相对 token，也没有交代超过 5.00 s 的词间停顿、截断、饱和或回退规则。

参数更新方面，新增 timestamp embedding 与 LM head 参与全量优化，原始解码权重由 LoRA 增量适配。音频编码器是否冻结、各层采用何种低秩配置、不同参数组是否共享学习率以及检查点选择准则，正文都没有明确披露。

输出由普通自然语言指令触发，解码后需累加区间获得词级位置。Beam size、采样温度、停止条件、重复 token 修复、强制单调性和时间格式化均未说明；真实延迟、吞吐、峰值显存及流式缓存也未测量。

论文作者来自高校、企业与语言计算实验室的合作团队。这一信息只帮助理解项目背景，不影响方法与结果判断。

### 🚨 局限与问题

主要时间戳泛化结果来自公开语料，但论文没有报告统计显著性、长于训练范围的专门长度分桶、真实流式延迟或吞吐；相对区间需要累加才能恢复绝对位置，长序列误差如何演化也未被单独测量。

### 进一步审视

作者的实验直接支持 2 个层面的边界。其一，训练只使用 AISHELL-2 与 Common Voice 英文子集，公开泛化虽覆盖中英文和会议语音，却没有按音频长度、口音、噪声等级或说话人重叠分层。其二，固定 10% masking 的消融说明该正则项有效，但没有证明它对不同标注误差分布都稳健。

最需要克制的是“任意长音频”这一表述。有限相对区间 token 的确能在表示层通过累加覆盖开放长度，但每步区间误差也会被累积；正文没有超出训练时长的专门测试、累计漂移曲线或定期重锚定方案。

流式边界同样留白。模型采用自回归解码并能顺序产生区间，不自动等于可在线部署；前端需要多少未来声学上下文、Conformer 是否可因果运行、何时提交稳定词、断流后怎样恢复累计时钟，正文均未说明。

进一步审视实验设计，主表没有统计显著性、随机种子方差或参数量匹配的全参微调对照。Canary 在 LibriSpeech 高容差下略优于本文，作者用训练数据差异解释，但这不是受控因果比较。

复现还受若干关键缺失限制：Common Voice 实际训练规模、数据混合比例、LoRA rank、时间量化细节、超过区间上限的处理和解码超参数均未披露。代码仓库降低了实现门槛，却不能替代这些实验协议信息。

### 🔗 开源与复现资源

论文正文直接列出代码仓库：https://github.com/tangquanwei/Timestamp-Aware-Speech-LLM。可确认的核心开放资源是代码；正文没有声称训练后的模型权重或新整理数据集已经发布，也没有独立在线 Demo。

### 💡 研究者判断

相对区间表示像是朴素的坐标变换，却精准绕开了绝对时间 token 随时长扩张的笨重设计；更难得的是作者用 masking 消融表明，表示变化还需要训练目标配合。遗憾也同样集中：最吸引人的长音频与鲁棒标注叙事，恰好缺少长度分桶、累计漂移和噪声等级实验，流式部署更没有延迟与状态提交协议。它值得复现，但还不是可以直接照搬上线的时间戳系统报告。

`<details>`
`<summary>`⚖️ 评分理由（展开查看）`</summary>`

* 创新性 (1.6/2)：相对区间 token、动态时间权重和 timestamp masking 形成了针对词级对齐的完整机制链；概念并非复杂，但比直接扩充绝对时间词表更贴合自回归解码，创新得分保留在较高档。

* 技术严谨性 (1.2/1.5)：联合交叉熵、按 epoch 增加时间项权重以及只对新增层全参更新、对解码器使用 LoRA 的职责划分清楚；然而缺少区间累加误差的形式分析和标注噪声强度控制实验。

* 实验充分性 (1.3/1.5)：主表覆盖 2 个公开泛化集与多档容差，另有 5 个语料的 WER 和直接消融；未给出显著性、重复运行方差、长音频长度分桶及 masking 概率扫描，因此未给满分。

* 清晰度 (0.8/1)：方法、损失、训练配置和 3 张核心表的组织较直观，指标方向也可追踪；部分论断使用绝对化的过强措辞，图表编号和正文衔接仍略粗糙。

* 影响力 (1.2/1.5)：词级时间戳是会议转录、字幕和可检索语音系统的基础能力，相对表示可降低长时音频的时间 token 词表压力；尚无真实在线系统或下游应用测量限制了影响力判断。

* 开源 (1.2/1.5)：正文直接给出 GitHub 代码仓库，足以确认至少有代码型核心产物；未声明开放训练后的权重或整理后的训练数据，故不开到满档。

* 可复现性 (0.4/0.5)：数据来源、硬件、训练步数、batch duration、优化器、学习率、调度器、精度和 masking 概率均有披露；数据混合比例、LoRA rank、解码参数及随机种子未说明。

* 工程/实践价值 (0.9/1.5)：相对词表从绝对坐标范围中解耦，且混合微调方案具备明确实现路径；论文没有真实延迟、吞吐、显存峰值、流式缓存和超长输入压力测试，工程价值受此封顶。

`</details>`

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
