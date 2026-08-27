---
title: "Lost in Speech: Trilingual Spoken Hallucination Detection Across Audio and Transcripts"
date: 2026-08-26
draft: false
tags: [音频理解, 多语言, 基准测试, 低资源, 鲁棒性]
categories: [论文速递]
description: "音频理解 | 8.2/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.24707"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 Lost in Speech: Trilingual Spoken Hallucination Detection Across Audio and Transcripts

标签：#音频理解 #多语言 #基准测试 #低资源 #鲁棒性

**8.2/10** | 创新 1.6/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 清晰 0.9/1 | 影响 1.3/1.5 | 开源 0.5/1.5 | 复现 0.4/0.5 | 工程 1/1.5

🔥 **8.2/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：高 | #音频理解 | #多语言 | #基准测试 #低资源 | [arxiv](https://arxiv.org/abs/2608.24707)


### 👥 作者与机构

第一作者：Meruyert Aristombayeva（Satbayev University, Almaty, Kazakhstan）
通讯作者：Meruyert Aristombayeva
作者列表：Meruyert Aristombayeva、Jason S. Lucas、Chaewan Chun、Dongwon Lee（机构：Satbayev University；University of Colorado Boulder；The Pennsylvania State University）

### 📌 核心摘要

这篇论文最有价值的判断是：三语语音幻觉检测的高分，尚难证明模型听懂了事实。因为合成设定把“内容是否背离参考新闻”“文本是否由 LLM 改写”“朗读再转写时损失了什么”同时塞进标签，分类器可能沿任意路径作答。作者因此不是只增加语言数，而是让同一新闻依次成为原始文本、受控幻觉文本、TTS 音频和 ASR 转录，并以英语、俄语、哈萨克语的 12,013 个样本建立可追踪的比较链。

实验必须拆成 2 类：XLM-R、mDeBERTa、ReMBERT 在文字或转录上微调；5 个音频语言模型以零样本方式读取音频或转录。前者的二分类 macro-F1 达到 0.52–0.89，却在类型和严重度上明显变难；后者总体上转录优于直接音频，却有同模型反例。低资源链路的警报也很具体：哈萨克语 WER 为 34.04 %，但该数同时受 TTS、ASR、黏着形态和切词影响，故难以归结为唯一原因。

真正改变结论的是俄哈真实假新闻与俄语 provenance×veracity 对照。合成训练在真实原文上的 macro-F1 为 0.82–0.88，说明迁移并非完全失效；但 ReMBERT 会将忠实 LLM 改写的 flag rate 推至 1.000，说明部分二分类信号确实来自机器文风。论文因此提供的是检验“分数到底测到什么”的基准，当前尚未达到可部署的语音事实性守卫标准。

### 🏗️ 方法概述和架构

先把任务边界说清：每条样本都有 1 篇参考新闻，待检测朗读若加入了参考源不支持、相矛盾或改变语境的信息，才被标为 hallucinated。标签在文本改写阶段确定，而不是由音频质量决定。作者把改写分为 factual fabrication、factual contradiction、context inconsistency 3 类，并各分 mild、moderate、severe 3 级；二分类、类型和严重度需分别解释，分数不可互借。

图 1 给出这项控制的核心。原始新闻 \(D_a\) 的 1 路保留为 non-hallucinated text（NHT），另 1 路经 LLM 按类型 \(T\)、严重度 \(L\) 生成 hallucinated text（HT）。2 路分别经语言专用 TTS 成为 non-hallucinated / hallucinated audio（NHA/HA），再经 ASR 成为 non-hallucinated / hallucinated speech transcript（NHS/HS）。完整图中蓝色和红色分支始终对应保真与幻觉；因此原文、直接音频、转录的对比确实共享内容起点，但 TTS 与 ASR 的误差会在后 2 层共同出现。

在这条受控链中，检测器面对的是带同一事实参照的多种表示：文本改写负责制造内容偏离，TTS 把内容映射为可听信号，ASR 恢复可供文字模型读取的序列。判断发生变化时，应沿这条链逐段定位，先区分标签差异、合成失真与转录误差，再讨论模型是否捕捉到事实冲突。

下图请沿这条受控链的完整原图由左向右核对：EN/RU/KZ 的 News 先分为蓝色 NHT 与红色 HT，红支为何先经过 LLM 并标有 \(L×3\)、\(T×3\)，随后两支又如何共同经过 TTS M 和 ASR。

[![Data generation pipeline framework.](https://arxiv.org/html/2608.24707v1/pipeline.png)](https://arxiv.org/html/2608.24707v1/pipeline.png)

完整图左侧将同一 News 分为蓝色 NHT 与经 LLM 生成的红色 HT；中部的 \(L×3\)、\(T×3\) 标出严重度和类型控制；右侧再把两支送入 TTS M、NHA/HA、ASR 与 NHS/HS。该流程把标签与 TTS–ASR 噪声的混杂放到可观察的分支上；图只描述合成朗读回转，不能代表自然对话录音。


生成端的英语批次使用 GPT-3.5-turbo 与 GPT-4，俄语、哈萨克语使用 Gemini 2.0 Flash-Lite。生成器会自评，但作者没有把自评当验证：Claude Haiku 4.5 和 DeepSeek Chat 对分层抽样另行打分。真实集的 290 条 fake news 来自 factcheck.kz，其中 225 条原生俄语、65 条原生哈萨克语；它们始终置于训练集外，只用于评估。

检测路线刻意不混为同一榜单。XLM-R base/large、mDeBERTa、ReMBERT 分别在原文或 ASR 转录上监督微调；LFM2-Audio、Qwen2-Audio、Qwen2.5-Omni、Step-Audio、Gemma 3n 则不做任务微调，只以 Direct 或 CoT 的零样本提示读取波形或转录。监督编码器的收益可归因于任务训练，零样本解码器测到的是现成多模态接口的下限。

声学路径也有明确但有限的工程选择：英语、俄语由 Whisper-large-v3 转录，哈萨克语由微调 wav2vec2-large 转录；TTS 分别是 Coqui XTTS-v2、Silero TTS 和开源 Kazakh TTS。论文没有拆出音高、韵律、说话人或频谱特征，也未令文字和音频共享可控前端，模型间差异仍缺少单项声学归因。

输出统一报告 accuracy 与 macro-F1：RQ1 比原文和转录，RQ2 比直接音频和转录，RQ3 再以真实迁移与 provenance×veracity 控制检验判别器在利用什么。这个流程的贡献不是消灭所有混杂，而是把混杂放到可观察的实验位置。

### 💡 核心创新点

1. 首个增量在于把标签粒度、表示层和资源条件排成同一坐标系。英语、俄语、哈萨克语的新闻都有原文、受控改写、合成音频和 ASR 转录；改写又有 3 类、3 级。这让读者能分别问二分类是否会做、类型是否会分、严重度是否会估，避免把总分当作全能事实性。代价是语料仍是新闻朗读，自然语音还需独立验证。

2. 进一步的关键增量是把 TTS–ASR 级联显式纳入对照，并将转录由透明预处理改为显式变量。原文、转录、直接音频来自同一内容分支，作者还记录 WER/CER。哈萨克语的 WER 34.04 % 与更明显的下游退化相伴，给出低资源链路的诊断线索；但黏着形态、命名实体与切词也会放大 WER，故该关联尚未构成因果消融。

3. 最关键的增量针对来源混杂：合成二分类中，人写原文几乎总是 truthful、LLM 改写几乎总是 false，因而来源风格与标签完全共线。作者用 factcheck.kz 的人写假新闻检验迁移，又将同一保真新闻改写为忠实 LLM 文本。ReMBERT 对后者的 flag rate 从 0.352 升至 1.000，mDeBERTa 则为 0.586；这使“模型到底在判事实还是在判机器味”首次成为可直接反驳的实验问题。该控制仅覆盖俄语原文，其他语言和模态仍需同类检验。

4. 低资源前端选择与人工听审构成最后一根证据柱。哈萨克语选微调 wav2vec2-large；即便如此，120 条音频听审中仍有 38.3 % 出现 major discrepancy。它提醒读者：听得懂、转得出字，仍可能与参考新闻语义有差距；这也是直接音频与转录结果都需要谨慎解读的原因。

### 📊 实验结果

RQ1 首先问：强多语编码器能否扛住 ASR 转录，并保留细粒度标签？具体比较要回答原文与 ASR transcript 的差异是否随语言、模型和任务粒度改变；表中只保留代表行，所有 F1 均为 macro-F1，箭头表示越高越好。

| 实验组 | 语言 | 模型 | 输入 | 任务 | Acc ↑ | macro-F1 ↑ |
|---|---|---|---|---|---:|---:|
| RQ1 | en | XLM-R base | original text | binary | 0.826 | 0.828 |
| RQ1 | en | XLM-R base | ASR transcript | binary | 0.838 | 0.832 |
| RQ1 | kz | mDeBERTa | original text | binary | 0.893 | 0.893 |
| RQ1 | kz | mDeBERTa | ASR transcript | binary | 0.875 | 0.874 |
| RQ2 | en | Qwen2.5-Omni-3B | direct audio | type | 0.547 | 0.300 |
| RQ2 | en | Qwen2.5-Omni-3B | transcript | type | 0.474 | 0.322 |
| RQ2 | en | LFM2-Audio-1.5B | direct audio | binary | 0.500 | 0.360 |
| RQ2 | en | LFM2-Audio-1.5B | transcript | binary | 0.500 | 0.333 |

在 RQ1 的三语合成集上，4 个微调多语编码器以 type/severity 任务为难度参照；binary detection 的 macro-F1（↑，越高越好）落在 0.52–0.89 score 区间，说明二分类明显容易于细粒度标签。Kazakh synthetic speech 的 corpus-level ASR output 由 fine-tuned wav2vec2-large 处理，相对 English Whisper-large-v3，其 WER 为 34.04 % 对 7.30 %（↓，越低越好）；这种语言差距与检测退化同向，却不能排除形态和 TTS 的共同作用。

RQ2 的 Kazakh direct audio 条件下，Qwen2.5-Omni-3B 相对 Gemma 3n 等外部解码器，在 binary task 得到 Acc / macro-F1 为 0.839 / 0.456 score；这组结果按描述性方向解读，因为高 accuracy 与低 F1，揭示多数类偏置。RQ2 的 English zero-shot 条件还给出直接反例：LFM2-Audio-1.5B 在 transcript 输入上的 binary macro-F1 仅 0.333 score（↑，越高越好），低于 direct audio 输入的 0.360 score。因而转录通常更好是汇总趋势，不是每个模型的单调规律。

RQ3 再问：迁移分数来自事实性，还是来自机器文风？真实 Russian/Kazakh 假新闻的 original text 上，synthetic-trained encoders 相对 same-backbone synthetic test，binary macro-F1 为 0.82–0.88 score（描述性：迁移不低于合成测试）。后表比较 Russian original text 的 provenance×veracity 矩阵，以回答事实性与写作来源各自贡献多大；Flag rate 表示被判为 hallucinated 的比例，只作描述性读数。

| 模型 | Provenance | Truthful Flag rate（描述性） | False Flag rate（描述性） |
|---|---|---:|---:|
| ReMBERT | Human-written | 0.352 | 1.000 |
| ReMBERT | LLM-generated | 1.000 | 0.986 |
| mDeBERTa | Human-written | 0.221 | 0.962 |
| mDeBERTa | LLM-generated | 0.586 | 0.893 |

ReMBERT 的 Russian provenance×veracity 矩阵揭示更危险的负结果：在 Human-written text 上，Human/False 相对 Human/Truthful 的 hallucinated flag rate 是 1.000 对 0.352 score（描述性），但 LLM/Truthful 同样达到 1.000。mDeBERTa 的忠实机器改写误报为 0.586，低于其 LLM/False 的 0.893，说明事实性与 provenance 的权重取决于模型。

Kazakh human-listening subset 由 native-speaker inspection 检查 120 audio samples；相对 minor discrepancy condition，major discrepancy rate 为 38.3 %（↓，越低越好）。它说明音频尚可听懂不等于语义忠实，也解释了为何直接音频与转录都可能受同一合成前端污染。

### 🔬 细节详述

数据方面，合成集按语言分为 English 3967、Kazakh 3978 与 Russian 4068 个样本，每条属于原文或 3 类×3 级的幻觉版本。真实集从 factcheck.kz 收集 225 条原生俄语和 65 条原生哈萨克语假新闻，互译后每种语言均有 290 条假新闻，并各匹配 290 条不进入 train/dev 的真实负样本。

质量控制以独立双评审和定向人工听审交代，不展开逐项提示词模板。生成文本的外部验证抽取 216 项，按 language×type×severity 每格 8 项，由 Claude Haiku 4.5 与 DeepSeek Chat 判断；Factual Accuracy 与 Credibility 的 quadratic-weighted κ 分别为 0.875 和 0.897。哈萨克语另由母语作者检查 120 条音频，94.2 % mostly intelligible、5.8 % poorly intelligible，同时 61.7 % 有 minor discrepancy、38.3 % 有 major discrepancy。

编码器训练采用有效 batch size 16，即 physical batch 4 与 gradient accumulation 4，学习率 2e-5、3 个 epoch、maximum sequence length 512、fp16 和 gradient checkpointing，以 development macro-F1 做 patience 1 的早停并使用 seed 42。mDeBERTa 改用 fp32、eager attention、学习率 1e-5、10 % linear warmup、physical batch 8 与 gradient accumulation 2。

数据按 80/10/10 做 stratified train/dev/test。真实迁移使用独立训练运行，先从训练与开发池移除每种语言 290 条真实负样本，再把它们加入 synthetic test；所以 Table 4 不能与 Table 2 直接横比。所有 WER/CER 都在语料级计算，并统一 lowercase、移除 punctuation 和 digits。

零样本解码器的 Direct 与 CoT 为独立调用，二分类、类型和严重度也分别调用；正文主表报告 2 种 prompting 的平均。Qwen2.5-Omni-3B 使用 greedy decoding 和 max_new_tokens 256，其余模型的完整解码超参数未说明；直接音频实验没有 audio fine-tuning，因此属于适配前下界。

复现仍有缺口：全文未说明训练硬件、训练时长、随机种子重复次数、置信区间、显著性检验，也没有延迟、吞吐、显存和功耗测量。数据只承诺录用后发布，当前没有仓库可核对 split 文件或实现字节。

### 🚨 局限与问题

论文证据只覆盖英语、俄语和哈萨克语新闻体裁，音频是 TTS 朗读而非自然对话或原生录音；因此观察到的模态差距同时混合了合成器与识别器误差。哈萨克语 WER 受黏着形态和切词影响，不能直接当成跨语种绝对质量差距。真实集只含俄语与哈萨克语，原生哈萨克语假新闻较少，且事实核查样本与普通新闻存在文体偏移。

### 进一步审视

语音来源是 TTS 朗读并经 ASR 回转，受控标签没有覆盖自然对话中的即兴生成、说话人交互或环境声学变化。直接音频模型又完全处于零样本条件，所以当前模态差距更适合作为下界和诊断，不是音频适配模型的性能上限。

语言比较同时改变 TTS、ASR、形态结构和资源量。Kazakh 的 WER 会因黏着形态与切词被放大，当前相关性分析不足以确认识别错误就是检测退化的唯一原因；需要在同语种内系统注入可控声学与转录扰动。

真实集减少了 synthetic human/LLM 标签绑定，却只覆盖 Russian 与 Kazakh，且原生 Kazakh 项少于 Russian；事实核查样本也更像流传 claim，而合成集更像 newswire。高迁移率可能部分来自文体分布偏移。

论文报告主要是单次点估计，未给出跨 seed 方差、置信区间和统一音频适配对照。部署前还应测跨说话人、真实录音、噪声、口音、延迟和误报成本，并把 provenance 平衡加入训练目标。

### 🔗 开源与复现资源

资源状态是承诺开放而非已开放。作者写明录用后将发布完整 prompt inventory、data splits、labels、ASR transcripts 与 release metadata，但没有当前 HTTPS 仓库或数据下载地址，也没有承诺发布训练代码或模型权重。伦理与版权只保留数据不再分发原始新闻全文这一执行边界。真实与原始新闻只提供来源 URL 和元数据，生成改写、标签、转录及音频 metadata 计划以 research-only license 分发；因此目前只能按未来数据承诺计分。

### 💡 研究者判断

真正扎人的不是数据规模，而是同一检测器可能在听事实，也可能只是在闻机器文风。论文用真实假新闻和忠实 LLM 改写把这两件事拆开，因而比单纯堆三语分数更有研究价值；遗憾是直接音频仍停在零样本下界，真实录音、统一前端和来源平衡训练尚未补上，离可部署的 spoken hallucination guardrail 还有明显距离。

<details>
<summary>⚖️ 评分理由（展开查看）</summary>

* 创新性 (1.6/2)：三语新闻把 3 类、3 级受控幻觉与原文、合成音频、ASR 转录逐项对齐，并额外设置真实假新闻和 provenance×veracity 对照；新增价值主要是评测设计而非新的检测模型，因此给 1.6/2.0。

* 技术严谨性 (1.2/1.5)：生成后有跨模型 LLM judge、哈萨克语定向听审、真实集训练隔离和明确的 TTS→ASR 误差边界，研究链路自洽；但未报告置信区间、显著性或多随机种子重复，技术严谨性止于 1.2/1.5。

* 实验充分性 (1.3/1.5)：4 个微调编码器与 5 个音频语言解码器覆盖 binary/type/severity、3 种语言、文本/转录/直接音频、真实迁移和来源混杂，且给出反例；音频模型未适配训练，系统组件只有部分对照，按 partial-ablation 上限给 1.3/1.5。

* 清晰度 (0.9/1)：RQ1–RQ3 与图 1、Table 2–5 和附录训练条件的职责清楚，能沿数据生成链理解比较；Table 2 和 Table 4 来自不同训练运行的可比性提示偏后，故为 0.9/1.0。

* 影响力 (1.3/1.5)：低资源语言中的 TTS–ASR 级联、合成到真实迁移和机器文风混杂直接服务于语音事实性与安全评测；自然录音、对话和新闻外领域尚未验证，影响力计 1.3/1.5。

* 开源 (0.5/1.5)：全文只承诺录用后公开 prompt inventory、划分、标签和 ASR 转录，当前没有可访问的代码、模型、数据或 Demo；按 promise 锚点固定为 0.5/1.5。

* 可复现性 (0.4/0.5)：样本构成、语言前端、数据划分、主要训练超参数、模型清单与提示口径都有披露，但训练硬件、完整实现、重复实验和统计不确定性未给出，复现性为 0.4/0.5。

* 工程/实践价值 (1.0/1.5)：该资源和真实集有助于开发与诊断 spoken-hallucination 检测器，却未提供延迟、吞吐、内存、功耗或线上稳定性测量；零样本直接音频仅是适配前下界，工程价值按封顶 1.0/1.5。

</details>

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
