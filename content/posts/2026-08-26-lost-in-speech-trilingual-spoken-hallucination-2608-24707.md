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

背景只压成一句：文本幻觉检测成熟，但语音尤其低资源语种仍缺成体系评测。作者把 spoken hallucination 限定为相对参考新闻不受支持或相互矛盾的朗读内容，真正的问题不是把文本分类器搬到语音上，而是区分事实性、TTS–ASR 级联噪声与机器写作 provenance 这 3 种纠缠信号。为此，论文构造英语、俄语和哈萨克语的 12,013 个受控新闻样本，并补入俄哈真实假新闻，使同一内容同时具有原文、合成语音和 ASR 转录。实验把微调多语编码器与零样本音频语言解码器分开，比较 binary、type 与 severity 3 种粒度下的原文、转录和直接音频。

最关键的正面证据是合成训练在真实原文上仍得到 0.82–0.88 macro-F1，而最关键的警报是忠实 LLM 改写也会触发模型相关的高误报。低资源语言的语音链路继续放大问题：哈萨克语语料级 WER 为 34.04%，并伴随更明显的检测退化。结论应限于三语新闻和合成朗读；它证明中间转录目前更可靠，也证明没有 provenance 平衡的二分类分数不能直接解释为事实性能力。这也把低资源评测从排行榜问题改写成测量有效性问题。

### 🏗️ 方法概述和架构

任务输入由参考新闻与待检测新闻组成，标签在文本生成阶段相对参考源确定。每个原文可保持忠实，也可被改写为 factual fabrication、factual contradiction 或 context inconsistency，并分别施加 mild、moderate、severe 强度；这一定义检测的是内容是否受参考事实支持，而不是声学异常本身。

受控生成先向 LLM 提供原文、目标类型与强度，英语批次使用 GPT-3.5-turbo 和 GPT-4，俄语与哈萨克语批次使用 Gemini 2.0 Flash-Lite。生成器自评之后，Claude Haiku 4.5 与 DeepSeek Chat 以相同协议做跨模型复核；真实假新闻不进入训练，只用于检验合成监督能否外推。

这条流水线把原始新闻 \(D_a\) 分成 2 路：保真文本作为 NHT，第 2 路进入 LLM，按类型 \(T\) 与严重度 \(L\) 生成 HT；随后语言专用 TTS 同时把 NHT 与 HT 渲染为 NHA 与 HA，再由 ASR 得到 NHS 与 HS。英语使用 Coqui XTTS-v2，俄语使用 Silero TTS，哈萨克语使用开源 Kazakh TTS；转录端则为英语、俄语选 Whisper-large-v3，为哈萨克语选微调 wav2vec2-large。

下图请从原始新闻分成 2 路的位置开始，沿着 Da 到 Db、Dc 与 Dd 追踪蓝色 NHT 分支和红色 HT 分支，并核对类型 T、严重度 L、TTS 与 ASR 各自位于标签生成前后的哪个环节。

[![Data generation pipeline framework.](https://arxiv.org/html/2608.24707v1/pipeline.png)](https://arxiv.org/html/2608.24707v1/pipeline.png)

图中左侧 EN/RU/KZ 新闻先分为 NHT 与由 LLM 生成的 HT，中央标出 L×3 与 T×3，随后 2 路共同经过语言专用 TTS 形成 NHA/HA，再经 ASR 形成 NHS/HS。箭头与分支说明模型比较围绕原文、直接音频和 ASR 转录追踪误差来源；适用边界仅为同内容的跨模态归因，自然对话语音不在这幅图的证据范围内。


检测器分成 2 条训练状态与输入接口不可混淆的路线。XLM-R base/large、mDeBERTa 与 ReMBERT 在原文或 ASR 转录上分别微调；LFM2-Audio、Qwen2-Audio、Qwen2.5-Omni、Step-Audio 与 Gemma 3n 不做任务微调，而是在 zero-shot in-context 条件下读取直接音频或转录文本。论文没有另行构造手工声学特征，直接音频特征由各多模态解码器内部前端承担。

在表示层，文本编码器接收清洗后的原文或 ASR 词序列，通过监督微调学习新闻事实性与生成风格的联合判别边界；直接音频解码器则从波形内部表征直接给出零样本标签。论文没有单独暴露音高、韵律、说话人或频谱特征，也没有让双路共享同一个声学前端，因此音频分支的得失只能归因到完整模型接口，单一声学线索的贡献仍未拆解。这个设计取舍换来统一的端到端比较，却牺牲了声学特征层面的可解释性。

输出覆盖 hallucinated/no、3 类幻觉和 3 级严重度，并用 accuracy 与 macro-F1 衡量。原文与转录比较 RQ1，直接音频与转录比较 RQ2，真实假新闻迁移与 provenance×veracity 矩阵比较 RQ3。因此，模型比较并不是孤立的文本分类，而是围绕同一内容在原文、ASR 转录和直接音频之间追踪误差来源。

### 💡 核心创新点

1. 既有幻觉基准多为英语文本或问答，无法回答低资源朗读新闻中的语音级联问题。本文把英语、俄语、哈萨克语、3 类幻觉、3 级严重度和 3 种输入表示对齐；编码器二分类强而细粒度任务弱，证明基准确实暴露分层难度，但结果尚不能外推到其他语言和自然对话。

2. 传统音频评测常把 ASR 前端与语义检测揉成单一总误差。本文保留同内容的原文、ASR 转录和直接音频，并记录各语言 WER/CER；哈萨克语的高识别误差与下游退化同向，为级联归因提供证据，不过形态与切词差异阻止把 WER 当成跨语种纯因果量。

3. 合成幻觉常把 human/LLM provenance 与 truthful/false 标签完全绑定，检测器可能只学机器文风。本文加入 factcheck.kz 的人写假新闻和忠实 LLM 改写，ReMBERT 对后者出现饱和式误报，而 mDeBERTa 保留更多事实性区分；这个控制把高分是否来自错误捷径变成可测问题，但目前只在俄语原文中完成。

4. 低资源语种不再被迫共享失效的 ASR。论文为哈萨克语选用微调 wav2vec2-large，并以 Whisper-large-v3 作同音频对照，显著缩小识别误差；人工听审仍发现大量语义偏差，说明 best-of-breed 前端减少而没有消除风险。

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

`<details>`
`<summary>`⚖️ 评分理由（展开查看）`</summary>`

* 创新性 (1.6/2)：三语 spoken hallucination 同时具备类型、严重度、文本、音频与转录对齐，并加入真实假新闻及 provenance 控制，组合设计有明确新意；但生成范式仍承接既有文本合成流程。

* 技术严谨性 (1.2/1.5)：生成、自评、跨模型双 judge、人工听审和真实集隔离形成完整证据链，也诚实讨论标签与 TTS–ASR 误差；不过真实误差统计缺少方差或显著性分析。

* 实验充分性 (1.3/1.5)：实验覆盖编码器、5 个音频语言解码器、3 种任务、3 种语言、真实迁移和 provenance 矩阵，并给出 ASR 对照；直接音频没有适配训练，组件消融也只到局部对照。

* 清晰度 (0.9/1)：RQ1–RQ3、主表、附录训练配置与限制对应清楚，图 1 能追踪数据流；若将 Table 2 与 Table 4 的独立训练运行差异更早提示，读者会更不易误比。

* 影响力 (1.3/1.5)：低资源 spoken hallucination、合成到真实迁移及 provenance 混杂都直指语音大模型安全评测的关键缺口，真实影响力较强；结论仍受新闻域和合成朗读限制。

* 开源 (0.5/1.5)：全文仅承诺录用后发布数据及提示词清单，没有当前可访问的仓库、模型、数据或 Demo，因此严格按未来开放承诺计 0.5。

* 可复现性 (0.4/0.5)：数据规模、语言分布、ASR 选择、训练划分、主要超参数、提示词和模型版本均有说明；硬件、随机种子重复统计和完整实现入口缺失。

* 工程/实践价值 (1.0/1.5)：任务定义与跨模态资源可直接支持检测器开发，真实集也有工程价值；但没有延迟、吞吐、内存或线上压力测试，且零样本音频结果不等于部署上限。

`</details>`

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
