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

这篇论文的可证伪判断很明确：把词级时间写成相邻词的 Relative Timestamp 区间，能让 SpeechLLM 在有限时间 token 词表内完成对齐；但“区间可累加”只说明表示能够覆盖开放长度，并不能替代对长序列漂移和在线延迟的测量。问题之所以棘手，是因为绝对时间戳既直观又便于评测，却把量化精度、最长音频与词表规模绑在一起。全文给出的极端例子是：若在 300 s 录音上达到 0.01 s 分辨率，绝对方案需要 30,000 个时间 token。

作者把时间坐标从“从 0 s 起第几个刻度”改成“前一词结束到当前词的间隔”。模型把对齐置于共同的自回归序列中，同时生成文字 token 与相对时间 token；解码后累加区间即可恢复词级位置。为了让这个新输出空间真正可学，新增的 timestamp embedding 和 LM head 全参数更新，预训练 decoder 仅通过 LoRA 适配；文本与时间交叉熵用动态权重联合训练，前序时间 token 还会被随机遮蔽。

证据分为 3 根柱子。Wenet-Meeting 在 240 ms 容差下给出 91.13% Precision、86.88% Recall 和 30.34 ms 平均时间差；AISHELL-2 iOS 与 Common Voice 的同骨干消融显示，去掉 TS Loss 或 Timestamp Masking 会让转写和对齐一起退化；5 个公开语料的 WER 表则表明加入时间表示后没有明显牺牲离线 ASR。论文因此证明了离线公开基准上的有效设计，而不是已经完成可流式部署的长音频系统。

### 🏗️ 方法概述和架构

绝对时间戳要求模型在每个词处输出“从 0 s 起的坐标”。这使时间 token 的数量同时由最大覆盖时长和量化精度决定，也要求模型在训练范围之外继续生成未见过的数值。Relative Timestamp 改为表示前一词结束到当前词的时间间隔：模型直接分类的是局部区间，解码器外部再做顺序累加来恢复全局位置。它保留词级对齐的单调推进，并把全局坐标计算从词表中移到累加器。

这张图对照了绝对时间戳与 Relative Timestamp 的生成负担画得很直观：上半部的每个词都从 0 s 时钟取绝对坐标；下半部只把相邻词之间的间隔交给 Relative Timestamp。

如下图请观察上半部灰色虚线与下半部蓝色弧线：前者反复回看固定参考，后者只传递相邻词的 Relative Timestamp 区间。

[![Traditional methods rely on fixed-reference absolute timestamps, often struggling with cumulative errors or precise synchronization.](https://arxiv.org/html/2608.24041v1/intro.png)](https://arxiv.org/html/2608.24041v1/intro.png)

图中上半部把多个绝对时钟用灰色虚线反复连回固定参考；下半部则用蓝色弧线把 Okay、let’s、go 的相邻间隔依次串起。它可说明相对区间缩小直接分类的时间空间，却尚未测得长序列的误差累积。


音频先经 Conformer 编码器变成语音特征，再交给 Qwen2-7B-Instruct 解码骨干。解码器读取声学表示后，在同一自回归序列里交替产生文字 token 与相对时间 token；文字子序列构成转写，时间 token 则在解码后累计为词级位置。因此这里的时间预测采用新增离散 token 的序列生成。

新增的 timestamp embedding 与 LM head 从随机初始化开始全参数更新，预训练 decoder 则只学习 LoRA 增量。前者负责把新时间 token 映射进向量空间并从输出端选出它们，需要从新参数中学习；后者保留已训练的语音—文字能力，只用低秩增量学习在适当文字位置插入时间标记。Conformer 冻结状态、LoRA rank、作用层与全参 decoder 对照仍待正文补全，所以这是一项合理的工程设计，而不是已被完全拆解的最优更新方案。

联合目标为 \(L_{total}=L_{text}+\lambda L_{timestamp}\)：文本与离散时间 token 各有一项交叉熵。作者令 \(\lambda=1\) 起步、每个 epoch 增加 1，先把语音到文字的映射稳住，再逐渐加强时间对齐。这样做的动机是避免训练早期的时间学习过度扰动转写，但固定权重与不同增长速度的比较仍待补充。

Timestamp masking 遮蔽的是自回归历史中的前序真值时间 token，而非声学特征。从第 2 个 epoch 起，10% 的这类 token 被替换为 [MASK]；当前区间因而要结合声学内容、文字历史和剩余时间上下文推断。推理时用普通的 “Speech to text with timestamp” 指令触发联合输出。

相对时间 token 的范围是 0.00–5.00 s，绝对方案的范围是 0.00–30.00 s；超出 5.00 s 的停顿如何编码、在线如何保存累计状态，这些编码规则留待复现时补全。因此 Relative Timestamp 的价值首先是缩小直接分类的时间空间，长序列误差累积仍待专项评测。

### 💡 核心创新点

1. 传统绝对方案把每个词放到从 0 s 开始的全局刻度上，分辨率越细、支持时长越长，分类空间越大。本文让 token 只表示相邻词间隔，再由累加器还原位置；Figure 1 用相邻词之间的蓝色弧线示意这种局部表示。Wenet-Meeting 的对齐结果支持该选择能在公开离线数据上工作，但它任意长输入下的累计误差仍待专门分桶检验。

2. 若每一步都能看见完美的前序真值时间，模型可能只依赖标签历史猜下该刻度。作者从第 2 个 epoch 起以 10% 概率遮住前序时间 token，迫使当前预测重新参考声学与文字上下文。Common Voice 上移除 Timestamp Masking 后，WER 由 11.63% 变为 14.47%，Precision 由 0.8770 变为 0.8067；这说明遮蔽与最终表现相关，10% 的最优性及其对不同标注噪声的稳健性仍待验证。

3. 时间 embedding 与 LM head 从零开始承担新 token 的输入和输出，decoder 已有语音—文本知识。全文因此采用“新模块全参更新、decoder LoRA”的混合微调，而按模块职责分配更新强度。这一职责划分清楚，也可能降低参数改动成本；但全参 decoder、不同 LoRA rank 与不同作用层的直接消融仍待补充，该配置的最优性也待检验。

4. \(L_{text}\) 和 \(L_{timestamp}\) 都是离散 token 交叉熵，\(\lambda\) 从 1 开始逐 epoch 加 1。作者的意图是先建立稳定转写，再提高时间对齐权重。Table 2 显示去掉 TS Loss 后相对方案在 Common Voice 的 WER 从 11.63% 上升至 12.66%，同时 Precision 和 Recall 都下降；不过该表动态日程、固定权重与增长速度的作用仍待分离；证据范围限于时间损失有用。

### 📊 实验结果

时间戳先按容差判定命中，再报告 Precision、Recall 和平均时间差；这与 WER 构成 2 类不同的证据线。Precision/Recall 越高表示更多预测或真值落进容差窗，Average Time Difference 以 ms 衡量预测相对人工真值的平均绝对误差，越低越好；WER 则只看转写。

下表只保留 Wenet-Meeting 的 240 ms 口径，回答的是“相对区间能否在外部系统面前给出更准确的词级位置”，而非流式时延。

| 方法 | Precision（% ↑） | Recall（% ↑） | Average Time Difference（ms ↓） |
|---|---:|---:|---:|
| Qwen2-Audio | 82.30 | 75.87 | 43.07 |
| WhisperTimestamped | 43.97 | 18.79 | 102.48 |
| SenseVoiceSmall | 82.82 | 81.19 | 32.47 |
| Absolute Timestamp | 72.41 | 68.22 | 152.17 |
| Relative Timestamp（Ours） | 91.13 | 86.88 | 30.34 |

在 Wenet-Meeting 的 240 ms 容差下，Relative Timestamp（Ours）面对全部强基线取得 Precision 91.13%（↑，越高越好），Recall 为 86.88%。同一设置里，Relative Timestamp（Ours）相对人工真值的 Average Time Difference 为 30.34 ms（↓，越低越好）。这两项一起支持本文在该公开离线协议中的对齐优势，但表中统计置信区间、重复运行方差与端到端时延仍待报告。

同骨干消融在 240 ms 容差下同时报告转写与对齐，因而能检查“对齐变好是否以转写为代价”。

| 配置 | AISHELL-2 iOS WER（% ↓） | AISHELL-2 Precision（↑） | AISHELL-2 Recall（↑） | Common Voice WER（% ↓） | Common Voice Precision（↑） | Common Voice Recall（↑） |
|---|---:|---:|---:|---:|---:|---:|
| Absolute Timestamp | 2.87 | 0.9544 | 0.9546 | 16.41 | 0.7861 | 0.7838 |
| Absolute - TS Loss | 2.96 | 0.9506 | 0.9447 | 18.63 | 0.7428 | 0.7407 |
| Relative Timestamp（Ours） | 2.15 | 0.9763 | 0.9634 | 11.63 | 0.8770 | 0.8546 |
| Relative - TS Loss | 2.31 | 0.9715 | 0.9548 | 12.66 | 0.8712 | 0.8463 |
| Relative - Timestamp Masking | 2.56 | 0.9658 | 0.9578 | 14.47 | 0.8067 | 0.7853 |

在 AISHELL-2 iOS 中文设置中，Relative Timestamp（Ours）相对全部强基线的 WER 是 2.15%（↓，越低越好），Absolute Timestamp 为 2.87%。在 Common Voice 英文子集，完整 Relative Timestamp 对比 Relative - Timestamp Masking：移除 Timestamp Masking 后 WER 由 11.63% 升至 14.47%，Precision 由 0.8770 降至 0.8067，Recall 也由 0.8546 降至 0.7853。移除 TS Loss 时，Common Voice WER 为 12.66%，且 Precision/Recall 同样下滑。

这组消融支持时间损失与 masking 都参与了最终表现，尤其显示 masking 不只是装饰性的训练技巧；但它并未扫描 \(\lambda\) 日程、masking 概率、标注噪声或 LoRA 配置，所以收益归因仍需更多组件级对照。

5 个公开语料的 WER 表中，Relative Timestamp（Ours）报告 AISHELL-1 1.26%、AISHELL-2 2.15%、Wenet-Meeting 5.56%（↓，越低越好）、LibriSpeech 2.78%、Common Voice 11.63%。这说明在本文选定的基线集合与离线协议内，加入时间输出没有明显牺牲跨中英文场景的转写；但 Canary 在 LibriSpeech 的高容差时间戳上略优，且超出训练时长的专门分桶仍待补充，结论范围限于本文协议。

### 🔬 细节详述

训练只使用 AISHELL-2 普通话语料和 Common Voice 英文子集。AISHELL-2 在全文中描述为约 1,000 小时、1,991 位说话人的多声学环境语料；作者没有报告 Common Voice 实际使用小时数、2 个语料的混合比例、清洗规则或训练切分。评测另外覆盖 AISHELL-1、Wenet-Meeting、LibriSpeech 与 Common Voice，因而训练语料与测试覆盖并不相同。

作者在 24 × Ascend 910B（64G）NPU 上训练 7k steps，每卡 batch duration 为 500 s。优化器为 AdamW，学习率为 5 × 10^-6，调度为 WarmupCosineLR，计算使用 bf16。梯度累积、随机种子、检查点挑选标准和墙钟训练时间未说明。

绝对 token 覆盖 0.00–30.00 s，相对 token 覆盖 0.00–5.00 s。\(\lambda\) 从 1 开始并在每个 epoch 加 1；Timestamp Masking 从第 2 个 epoch 开启，概率为 10%。这些是可以直接复现的核心日程，但量化步长怎样应用于相对 token、超过 5.00 s 的词间停顿是截断、饱和还是回退，正文没有给出。

新增 timestamp embedding 和 LM head 全参优化，decoder 通过 LoRA 调整；音频编码器是否冻结、LoRA rank/目标层、参数组是否共用学习率均未披露。推理由 “Speech to text with timestamp” 指令触发，随后累加区间得到词级位置；beam size、采样温度、停止条件、重复 token 修复、单调性约束和格式化规则也没有报告。基础模型扩展自 FireRedASR-LLM：Conformer audio encoder 负责从波形中抽取特征，Qwen2-7B-Instruct 是语言模型骨干，原生模型不能生成时间戳。训练前必须为绝对或相对模式把新 token 加入 LLM 词表；因此复现实验时，token 表、embedding、LM head 与 LoRA 权重需要按同一模式保存，不能把 2 种时间坐标的检查点直接混用。

作者来自高校、企业与语言计算实验室的合作团队；这只交代项目背景，不构成技术证据。

### 🚨 局限与问题

主要时间戳泛化结果来自公开语料，但论文没有报告统计显著性、长于训练范围的专门长度分桶、真实流式延迟或吞吐；相对区间需要累加才能恢复绝对位置，长序列误差如何演化也未被单独测量。

### 进一步审视

论文证明的是固定公开离线协议下的结果。训练只用 AISHELL-2 与 Common Voice 英文子集，评测虽跨中英文、会议与朗读语音，却没有按音频长度、口音、噪声等级或说话人重叠分层。固定 10% Timestamp Masking 的消融能说明该设置优于移除它，却不说明对不同标注误差分布都稳健。

“任意长音频”更应理解为表示层结论：有限相对区间 token 可被连续累加，因而不必预先为每个绝对坐标建词。有限区间 token 能在表示层覆盖开放长度，却不等于论文已经测得长序列的累计漂移。全文没有超出训练时长的长度分桶、误差随位置增长的曲线，或周期性重锚定方案。

自回归模型能顺序生成区间，并不自动给出流式系统。前端需要多少未来声学上下文、Conformer 是否因果、何时提交稳定词、断流后如何恢复累计时间、吞吐和峰值显存是多少，论文均未测试。30.34 ms 是时间标签相对人工真值的误差，不是端到端延迟。

实验也缺少统计显著性、随机种子方差、参数量匹配的全参 decoder 对照，以及 \(\lambda\)、masking 概率和 LoRA 配置的扫描。Canary 在 LibriSpeech 的高容差时间戳上略优，作者归因于训练数据差异，但这不是受控实验。代码降低复现门槛，仍不能替代 Common Voice 训练规模、数据配比、量化细节和解码参数等关键协议信息。

### 🔗 开源与复现资源

正文直接给出代码仓库：https://github.com/tangquanwei/Timestamp-Aware-Speech-LLM。能够确认的是代码型核心产物；正文未声明已发布训练后的模型权重、专门整理的数据集或独立在线 Demo。对于想复现实验的读者，仓库是合适的起点，但仍需自行补齐论文未披露的 LoRA、量化和解码协议。

### 💡 研究者判断

这篇工作的好处在于把中心矛盾说对了：词级时间戳不是多加几个标签，而是要让自回归模型在有限词表内处理持续扩张的时间轴。Relative Timestamp、模块化微调、动态时间损失和 Timestamp Masking 构成了相互咬合的方案，而并非 4 个孤立技巧；公开对齐表、ASR 表和同骨干消融也分别支撑了这 3 层论证。

我会建议音频研究者复现它的表示与训练设计，尤其在已有 SpeechLLM 上需要低成本加入词级对齐时。可同时保留明确的上线前清单：做超长音频长度分桶与累计漂移曲线，扫描 masking/损失日程，报告真实流式时延和状态恢复，再比较参数量匹配的更新策略。这样才能回答论文尚未回答的关键问题：局部区间的紧凑性，能否在长时间、噪声和在线约束下持续兑现为稳定的全局时间。

<details>
<summary>⚖️ 评分理由（展开查看）</summary>

* 创新性 (1.6/2)：相对区间 token 将时间表示从绝对坐标改为相邻词间间隔，并配合 masking 避免依赖前序真值时间标记，针对自回归词级对齐的瓶颈形成了清晰的新组合；但它尚未用超长输入实验验证累加表示的外推，因此保持 1.6/2.0。

* 技术严谨性 (1.2/1.5)：新增 timestamp embedding 与 LM head 全参更新、解码器 LoRA 和动态联合交叉熵的职责划分可回查，直接消融也支持 TS Loss 与 masking 的作用；未见累计误差分析、噪声强度扫描或重复运行统计，故为 1.2/1.5。

* 实验充分性 (1.3/1.5)：Table 1 在 LibriSpeech、Wenet-Meeting 的多档容差比较外部基线，Table 2 在 AISHELL-2 与 Common Voice 对 TS Loss、masking 做直接消融，Table 3 还覆盖 5 个语料的 WER；但未报告显著性、方差、超长音频长度分桶或 masking 概率敏感性，定为 1.3/1.5。

* 清晰度 (0.8/1)：问题、相对表示、混合微调、损失和评测协议按章节展开，表格同时给出 Precision、Recall、Avg. Diff 与 WER 的单位和方向；个别结论的表述强度超过统计证据，且正文衔接有抽取可见的紧凑与拼接痕迹，故为 0.8/1.0。

* 影响力 (1.2/1.5)：词级时间戳直接服务会议转录、字幕和语音检索；公开集上的时间戳与 WER 改善表明它可能对 SpeechLLM 对齐有现实价值。论文只证明离线基准表现，未测在线系统或下游工作流收益，因此为 1.2/1.5。

* 开源 (1.2/1.5)：正文列出 Timestamp-Aware-Speech-LLM 的 GitHub 仓库，足以认定代码已作为核心产物发布；没有同样明确的权重或数据发布说明，按对应的已发布资源锚点给 1.2/1.5。

* 可复现性 (0.4/0.5)：论文披露训练语料、Conformer 与 Qwen2-7B-Instruct 骨干、24 × Ascend 910B、7k steps、每卡 500 s、优化器、学习率、调度器、bf16 和 10% masking；LoRA rank、数据混合比例、随机种子及解码配置缺失，故为 0.4/0.5。

* 工程/实践价值 (0.9/1.5)：相对词表避免随绝对时间范围扩张，混合微调也提供了可落地的实现路线；不过全文没有真实延迟、吞吐、显存峰值、流式缓存或超长输入压力测量，工程分严格留在无部署证据上限以下，为 0.9/1.5。

</details>

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
