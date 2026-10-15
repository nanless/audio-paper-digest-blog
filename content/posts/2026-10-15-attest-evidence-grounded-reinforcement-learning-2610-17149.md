---
title: "ATTEST: Evidence-Grounded Reinforcement Learning for Long-Audio Temporal Understanding"
date: 2026-10-15
draft: false
tags: [音频时间定位, 强化学习, 基准测试, 长音频处理, 幻觉与忠实度]
categories: [论文速递]
description: "针对 5 分钟长音频中事件定位与密集描述易幻觉的问题，论文用 EgoSCAPE 评测与 ATTEST 强化学习约束模型只说音频中有证据的时间段，代价是需要多轮采样与注意力统计的训练开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.17149"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "长音频时间理解：用证据约束抑制幻觉的强化学习"
paper_digest_original_title: "ATTEST: Evidence-Grounded Reinforcement Learning for Long-Audio Temporal Understanding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.17149v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.17149v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.17149v1.pdf"
paper_digest_primary_task: "音频时间定位"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.temporal-grounding","label":"音频时间定位"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"setting","id":"setting.long-audio","label":"长音频处理"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对 5 分钟长音频中事件定位与密集描述易幻觉的问题，论文用 EgoSCAPE 评测与 ATTEST 强化学习约束模型只说音频中有证据的时间段，代价是需要多轮采样与注意力统计的训练开销。"
paper_digest_authors: [{"affiliations":["Meta Superintelligence Labs","University of Southern California"],"name":"Ashutosh Chaubey"},{"affiliations":["Meta Superintelligence Labs"],"name":"Jinxi Guo"},{"affiliations":["Meta Superintelligence Labs"],"name":"Minh Tran"},{"affiliations":["Meta Superintelligence Labs"],"name":"Michael Andersland"},{"affiliations":["Meta Superintelligence Labs"],"name":"Ozlem Kalinli"}]
paper_digest_abstract_sha256: "9e9be6ef2fdc7db64f2e3fcf25b4e1da14c1706f083102d0f36517aa41c7c808"
paper_digest_sidecars: {"citation.bib":{"sha256":"9b10874f7c921b2f8ba8ca69306182bf0cf4299a938699fec0937280374b5fc4","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17149/citation.bib"},"citation.json":{"sha256":"5bbd1d39d02b3c1c3dbd083b076e13b1f26a2e532b3e9f8c3d4d2b1ca89c459b","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17149/citation.json"},"citation.ris":{"sha256":"5bcf61ccc8a057e0936af48436a28e1b5fa16f1f21739a1a5277e18565e7ad87","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17149/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"00fcfd8775fa84634fc7313388b1b3553a34796fdf411561fc332ffb6a25c02e","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17149/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "0486f5326035779ad6c9a41f2c1b425a1a8c30de62194a751712210bcbb1eee5"
paper_digest_api_reader_plan_sha256: "10e8a1e7db16f8ed8b7e8b3af0fb1a1937554f02e60010637ce6853d1ffeec88"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9e9afe49ca70b14e1977ea250600b6bafcdf3dbf0ee34a25106193adf5eb74b3"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "4eca6d8ed8d0008ff837d590c2466d491326e9c80eb36c400b582e75c8c67e87"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4d5330b931eedeb4d82b03d703e66fab72856d11a6fa97651e43ac6d1f6ba84b"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6e724bb2e527ba6845fc4075f9f1e3ee6451a5c7cf4f176204ce76127cf85025"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 长音频时间理解：用证据约束抑制幻觉的强化学习

> 英文题目：*[ATTEST: Evidence-Grounded Reinforcement Learning for Long-Audio Temporal Understanding](https://arxiv.org/abs/2610.17149v1)*

> 标签：#音频时间定位 | #强化学习 | #基准测试 | #长音频处理 | #幻觉与忠实度
>
> 评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Ashutosh Chaubey：Meta Superintelligence Labs；University of Southern California
- Jinxi Guo：Meta Superintelligence Labs
- Minh Tran：Meta Superintelligence Labs
- Michael Andersland：Meta Superintelligence Labs
- Ozlem Kalinli：Meta Superintelligence Labs

## 📌 核心摘要

长音频时间理解要求模型聆听连续长录音并输出每个声音事件的起止时间与文字描述，输出为包含众多三元组的长序列，难点在于标注稀缺且模型易依据语言先验编造不存在的事件。论文构建人工核验基准EgoSCAPE，利用真实自我中心音频提供稠密描述、声源标注、音频时间线和时间定位查询，训练仅更新权重而不改变架构或词表。ATTEST先用反事实奖励检验预测的声学依据，将声称时间段被静音干预后仍然存活的预测判定为缺乏证据并惩罚，再用注意力密度奖励鼓励生成每个三元组时集中关注其声称时间段对应的音频词元。随后框架把反事实、注意力密度与分段匹配三类分段奖励换算成词元级优势，对长稠密描述做细粒度信用分配，并用带KL约束的裁剪目标优化策略，相对密集插入时间标记的做法不占用额外上下文，避免上下文膨胀和通用理解能力遗忘。在EgoSCAPE稠密描述评测中，同基座Qwen2.5 Omni加ATTEST的指标FENSE@0.5为0.427，高于同基座TimePro-RL的0.410。在同一EgoSCAPE稠密描述评测中，同基座Qwen2.5 Omni加ATTEST的指标Hal%为30.5%，低于同基座TimePro-RL的31.3%。结论适用于真实长音频的稠密描述、时间线生成和零样本时间定位，合成拼接长音频训练效果较差，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://www.deepspeed.ai/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长音频要解决的输入输出是什么

这篇论文处理的是几十秒到 5 分钟的真实录音。输入是一段连续波形加上一句文字指令，输出有 3 种形状。第一种是密集音频描述：列出音频里所有可听事件，每项写成开始减结束加一句话，例如 0.1 - 2.2， person speaking。第二种是音频时间线：把重叠或交织的细事件合并成少数场景级时间段，描述主导声源与背景。第 3 种是时间音频定位：给定一句查询，返回它在音频中出现的时间区间。

必须保留的信息是事件语义、声源归属与起止边界，丢掉任何一项都会影响下游推理。比如把洗碗机声的时间标错，后续问何时洗碗就会答错。长音频的难点在于输出很长、事件密集，而可用的精细标注很少，模型容易靠语言先验编造听起来合理但音频中不存在的事件。

**密集音频描述 × 音频时间线生成：** 密集音频描述要求输出每个声音事件的起止时间加文字描述，音频时间线生成要求输出更粗的场景级时间段加总结，前者检验细粒度听辨与边界，后者检验长程场景切分，两者搭配才能同时看到模型在细节与结构上的时间能力。

**时间音频定位 × 声音事件检测：** 声音事件检测是从固定标签集合中逐帧判断事件起止，时间音频定位是根据一句自然语言查询找回对应时间段，前者重分类加边界，后者重语言理解加检索，论文同时关心两者是因为长音频助手既要枚举发生了什么，也要按问句定位到哪里。

### 已有路线在输入与监督上如何分工

在论文梳理的路线里，传统声音事件检测用 BEATs 这类检测器，优点是边界准，但只能输出 AudioSet 或 ESC-50 固定标签，写不出开放描述。多模态大模型能写开放描述，但长时间输入下时间边界容易漂移。近期的大音频语言模型工作分成两类。一类改输入表示或输出词表，例如加入时间标记 token，让模型显式输出时间符号，这会多占上下文，对 300 秒音频论文提到会多出约 7500 个 token，并可能让通用理解能力下降。

另一类用合成长音频做监督微调，例如把短片段拼接起来，但拼接处不连续，与真实长录音的声学上下文不同。论文把比较限定在相同基座与相同训练数据下进行，指出时间标记与合成数据的局限，为后面不改结构、只改奖励的强化学习留下位置。

### 为什么长音频更容易出现幻觉

论文先在 EgoSCAPE 上画出幻觉率随音频时长变化的趋势。幻觉率在这里指预测出的时间段中，既与任何真实段在时间交并比 0.5 下匹配不上，又经 FLAM 音频文本相似度检验置信度低于 0.15 的比例。短音频 0 - 30 秒、中音频 30 - 120 秒、长音频 120 秒以上的对比显示，经过监督微调的两个基座模型的幻觉率都随长度上升，长音频组最高达到 50 % 以上。这支持一个判断：音频变长后，模型更倾向于从语言习惯补全事件，而不是紧贴波形做判断。例子可以帮助理解：若某段被静音，紧贴波形的模型应不再报告该处有事件，而靠先验的模型仍会按上下文编出事件。后面两个奖励正是分别从行为与注意力上检查这种贴合程度。

### ATTEST 的整体流程是怎样的

ATTEST 不改基座模型的结构与词表，只在分组相对策略优化 GRPO 上加奖励与优势计算。训练只在密集描述与时间线生成 2 个任务上做，时间定位查询不参与训练，定位能力靠迁移体现。一次训练迭代是这样的：对同一条长音频采样 8 条回答，每条都是固定格式的时间段加描述列表；同时对该音频随机选 K 个不重叠窗口做静音破坏，把窗口内原有声音去掉，再用旧策略贪心解码一条反事实参考，这条参考在组内共享。

然后对每条采样回答计算 3 类分段分数与格式分，再把分段分数按各自的锚点在组内归一化成优势，分给写出该段的词；最后用带裁剪的 GRPO 目标更新低秩适配参数。反事实一项用来查预测是否还留着本该消失的声音，落在静音窗口内的预测段与反事实参考越像，扣分越多，窗口内先平均再对 K 个窗口平均。

注意力密度一项统计写出某一段时，分给自称时间区间内音频词的注意力占比，再除以该区间占全长的比例，为防止写极短段刷分，单段上限记为 5，回答内对各段平均。正确性一项用匈牙利匹配把预测段与真值段按时间交并比和 FENSE 文本相似度配对，未配对的预测段记 0，再对真值段数平均。优势不直接用整条回答的混合分，而是分开归一化：正确性按同一真值事件跨组比较，缺失该事件的回答在该事件上记 0；反事实按同一静音窗口跨组比较，只影响落入该窗口的段。

注意力密度没有跨回答的公共锚点，把组内全部预测段放在一起标准化。每个词继承所在段的三项优势，格式词只继承格式分的组内归一化结果。推理时不需要静音分支与注意力统计，只按常规自回归生成时间段与描述，因此不增加推理词数。

### 反事实奖励如何惩罚无证据的预测

反事实分支的做法是选定目标比例 p 的时长，均匀随机抽 K 个窗口，把窗口内原声事件去掉，论文对比多种破坏后发现静音最有效，因为只有静音真正把声学事件清掉，而粉噪声、时间打乱或低通仍留下可被利用的痕迹。破坏后的音频只解码一次得到共享参考。对原音频某条采样回答，若其某预测段完全落在某个被静音窗口内，就看它与该窗口内反事实参考段的最大时间交并比乘以描述相似度，取负作为惩罚。落在窗口外的段不惩罚。

窗口分是窗口内各段惩罚的平均，回答级分是 K 个窗口的平均。由于参考固定，不同采样回答与参考的重合程度不同，仍能在组内分出高低。直观例子：静音后参考不再报告洗衣机声，若某采样仍在该窗口报告洗衣机声且时间与文字都接近参考残留，就会得到接近负 1 的分。

\[\small\chi^{(g)}_{j}=\underbrace{-\max_{\hat{d}^{\prime}\in\hat{D}^{\prime}_{w}}\Big[\text{tIoU}\big(\hat{d}^{(g)}_{j},\hat{d}^{\prime}\big)\cdot\text{Sim}\big(\hat{d}^{(g)}_{j},\hat{d}^{\prime}\big)\Big]}_{\text{segment-level reward}}\]

**反事实 grounding 奖励 × 注意力密度奖励：** 反事实 grounding 奖励通过把部分音频静音后看预测是否还出现来判断是否依赖真实声音，注意力密度奖励检查生成某段描述时是否把注意力放在其声称的时间对应的音频 token 上，前者从输出行为上抓幻觉，后者从生成过程上拉回注意力，两者互补约束证据。

### 注意力密度奖励在生成时看什么

自回归生成要求模型在写出某段起止与描述的那些 token 时，多看属于该时间段的音频 token。论文用生成 token 到输入 token 的注意力权重来度量。设某预测段占全音频时长比例为 f，写出该段的 token 集合为 G，落在该段时间感受野内的音频 token 为 T，则该段密度是 G 中每个 token 分给 T 的注意力占比的平均，再除以 f 做长度归一化，并上限截断为 5，防止靠预测极短段刷高分。回答级分是各段密度的平均。计算用最后一层的多头平均注意力，论文试过首层、中层与多层组合，发现单用末层已接近多层效果，为省算力默认用末层。该奖励没有跨回答的共享锚点，因此后面对它采用组内全部段池化归一化。

\[\small\rho_{j}\;=\;\underbrace{\frac{1}{f_{j}}\cdot\frac{1}{|\mathcal{G}_{j}|}\sum_{t\in\mathcal{G}_{j}}\frac{\sum_{u\in\mathcal{T}(\hat{s}_{j},\hat{e}_{j})}\bar{A}_{t,u}}{\sum_{u\in\mathcal{T}_{\text{aud}}}\bar{A}_{t,u}},}_{\text{segment-level reward}}\hskip 18.49988ptR_{\text{AD}}\;=\;\frac{1}{N_{p}}\sum_{j=1}^{N_{p}}\rho_{j}.\]

### 正确性奖励与分段优势如何分工

正确性奖励直接用标注。把采样回答的预测段与真实段做匈牙利匹配，匹配分是时间交并比与 FENSE 描述相似度的加权，权重 alpha 取 0.5。匹配上的段得该加权分，未匹配的得 0，最终按真实段数平均。格式奖励另算，还会惩罚预测段数与真实段数差太多的输出。关键改进在优势分配。

传统做法把 3 类回答级分加权成一个序列分再组内归一化，全回答 token 共用同一优势，长回答中好段坏段被平均。ATTEST 改为分段锚定：正确性按真实事件锚定，未命中该事件的采样记 0 后组内归一化；反事实按静音窗口锚定，同一窗口内比较；注意力按全组段池归一化。每个 token 继承其所在段的三项分段优势，格式 token 只继承序列级格式优势，权重为 eta1、eta2、eta3，默认取 1、0.2、1。

优化目标是带裁剪的 GRPO 加 KL 正则。

\[\mathrm{Score}(i,j)\;=\;\alpha\,\mathrm{tIoU}\big((s_{i},e_{i}),(\hat{s}_{j},\hat{e}_{j})\big)\;+\;(1-\alpha)\,\mathrm{Sim}(c_{i},\hat{c}_{j}),\]

\[\hat{A}^{(g)}_{t}\;=\;A^{(g)}_{\text{seq}}\;+\;\sum_{j=1}^{N^{(g)}_{p}}\mathbbm{1}\big[t\in\mathcal{G}^{(g)}_{j}\big]\Big(\eta_{1}A^{\text{CAG},(g)}_{w(j)}\;+\;\eta_{2}A^{\text{AD},(g)}_{j}\;+\;\eta_{3}A^{\text{DAC},(g)}_{\sigma^{(g)}(j)}\Big),\]

\[\small\mathcal{J}(\theta)=\mathbb{E}\Big[\tfrac{1}{G}\!\sum_{g=1}^{G}\tfrac{1}{|o^{(g)}|}\!\sum_{t=1}^{|o^{(g)}|}\!\min\!\big(\varrho^{(g)}_{t}\hat{A}^{(g)}_{t},\;\mathrm{clip}(\varrho^{(g)}_{t},1{-}\varepsilon_{\text{clip}},1{+}\varepsilon_{\text{clip}})\hat{A}^{(g)}_{t}\big)\Big]-\;\kappa\,\mathbb{D}_{\mathrm{KL}}\!\left[\pi_{\theta}\,\|\,\pi_{\mathrm{ref}}\right],\]

**正确性奖励 × FENSE：** FENSE 是衡量两句描述语义相近程度的文本分数，正确性奖励把时间交并比与 FENSE 加权后经匈牙利匹配算分，前者只管文字像不像，后者把时间对不对也放进同一分数，使模型必须同时学准说什么和标准时间。

**序列级优势 × 分段级优势：** 序列级优势给整条回答同一个奖励分数，分段级优势把每段预测的奖励单独在同组内归一化再分给写出该段的 token，前者会把长回答中好坏段落平均掉，后者让写对的段落得到正反馈、写错的段落得到负反馈，适合密集描述这种长输出。

### EgoSCAPE 数据是如何构造与核验的

EgoSCAPE 取自 Ego4D 的第一人称录像，共 700 条独立音频，最长 300 秒，总计约 13.15 小时，平均约 67.6 秒，含 37803 个密集描述段与 4587 个时间线段。构造先把长视频切成 30 秒小块，用 BEATs 检测器在 AudioSet 类别上提候选，再用多模态大模型结合视频与文字旁白校验去留，若某块超过 30 % 事件被判错则丢弃。第二遍用多模态大模型标声源并写粗时间线，同时接入 Whisper 转写以处理语音内容。跨块合并时用语言模型拼接跨边界事件并清理跨块措辞，最后生成细粒度原子事件查询与粗粒度多声场景查询。

所有标注经 3 名标注员逐段核验，可听音频、看波形与频谱图，但看不到视频，标错则修正。读图说明：下面流程图上半是单块处理，下半是长音频合并与问答生成，最右是人工核验，箭头表示从波形、视频帧与旁白到两类标注再到定位问答的走向。

> **看图路径：** 1. 先看上半部分 30 秒小块内声音检测器到多模态大模型的细化箭头；2. 再看过滤后如何分出音频时间线与带声源的密集描述两条输出；3. 最后看下半部分多块合并成整条长音频再生成定位问答并送人工核验

[![原论文 Figure 2：EgoSCAPE benchmark creation pipeline.](https://arxiv.org/html/2610.17149v1/data_pipeline.png)](https://arxiv.org/html/2610.17149v1/data_pipeline.png)

*论文图 2。原论文 Figure 2:：“EgoSCAPE benchmark creation pipeline.”。*

上图可见左侧同时输入视频块、音频波形与旁白文本，中部经声音检测器得到候选，再经多模态大模型细化并过滤，右侧分出音频时间线与带声源标记的密集描述，下半把多块结果合并后经语言模型生成定位问答，最终进入人工核验框。

### 训练与评测在什么条件下比较

训练基座包括 Qwen2.5 Omni 与 AudioFlamingo 3，附录还有 Qwen3 Omni。先用与 EgoSCAPE 不重叠的 Ego4D 音频按同管线造 22.2 万密集描述、7 万时间线、29.2 万定位样本做冷启动监督微调，再取 AudioSet-SL 转成的两种格式加入混合。强化学习只用各 5 1,000 条密集描述与时间线样本，分组大小 8，有效批量 16，只训练线性层的低秩适配，秩 8，强化学习率 5e-6，用 64 张 A100 与 DeepSpeed ZeRO-3。评测分四块：EgoSCAPE 与 AudioSet-SL 的密集描述，Clotho-Moment、UnAV-100 子集与 CASTELLA 的零样本定位，EgoSCAPE 粗细两类定位，以及 MMAR 与 LongAudioBench 的通用理解，其中时间子集用语言模型挑出。指标方向是 FENSE 在交并比 0.3、0.5、0.7 越高越好，事件与片段 F1 越高越好，幻觉率越低越好，定位召回与平均交并比越高越好。不能处理 5 分钟的基线用 30 秒或 10 秒滑窗拼接后统一评分。

### 密集描述与时间线的主结果是什么

下表比较不同来源基准在平均时长与最大时长上的覆盖，并列出是否带密集描述、声源、时间线与定位，说明 EgoSCAPE 的标注维度最全，而长音频基准往往只有粗时间线或只有定位。表前已交代比较问题是标注丰富度而非模型分数，公平条件是按论文附表统计的条数与时长直接对照。

| Dataset | Avg. Dur. | Max. Dur. | Dense Captions | Source Annot. | Temporal Grounding |
| --- | --- | --- | --- | --- | --- |
| FTAR-test | 9.9 | 10.0 | ✓ | ✗ | ✓ |
| CASTELLA | 206.0 | 300.0 | ✗ | ✗ | ✓ |
| EgoSCAPE | 67.6 | 300.0 | ✓ | ✓ | ✓ |

上表显示 EgoSCAPE 有 700 条音频、4200 个样本，平均 67.6 秒、最长 300 秒，4 类标注齐全，而对比的长音频基准缺少密集描述或声源。限制是该表只说明数据规格，不证明模型效果。回到模型分数，论文主表报告 Qwen2.5 Omni 加 ATTEST 在 EgoSCAPE 密集描述 F@0.5 为 0.427，幻觉率 30.5 %，优于同基座的监督微调与 TimePro-RL，也高于专用的描述模型与多数现成大模型。时间线生成趋势相同，ATTEST 在两个基座上都领先。读图说明：下面柱图按短中长分组看幻觉率，纵轴越高表示编造越多。

> **看图路径：** 1. 对比短中长三组柱子高度随音频变长的变化；2. 对比蓝色与橙色两类基座模型在长音频上的幻觉率

[![原论文 Figure 3：Hallucination for difft. audio durations in EgoSCAPE (details - §C.4).](https://arxiv.org/html/2610.17149v1/hallucination_vs_duration.svg)](https://arxiv.org/html/2610.17149v1/hallucination_vs_duration.svg)

*论文图 3。原论文 Figure 3:：“Hallucination for difft. audio durations in EgoSCAPE (details - §C.4).”。*

上图可见两类监督微调模型都随音频变长而幻觉率上升，长组超过 50 %，说明长上下文下仅靠监督微调不足以约束证据，这是引入反事实与注意力奖励的动机。结论成立条件是相同解码精度与相同幻觉定义，若换相似度阈值或匹配交并比，绝对数值会变。

### 定位与通用理解是否跟着变好

下表比较音频时间线生成的 FENSE，问题是粗场景描述是否也受益于只在密集与时间线任务上做的强化学习，指标方向同样是越高越好。

| Model | F@0.3 | F@0.5 | F@0.7 |
| --- | --- | --- | --- |
| + SFT | 0.466 | 0.401 | 0.316 |
| + ATTEST (Ours) | 0.503 | 0.436 | 0.340 |
| Qwen3 Omni | 0.304 | 0.255 | 0.208 |

上表显示 Qwen2.5 Omni 从基座的 F@0.5 为 0.189 经监督微调到 0.401，再经 ATTEST 到 0.436，Qwen3 Omni 与 AudioFlamingo 3 也有类似爬升，而未微调的通用模型多在 0.2 左右。代价是该表只覆盖 EgoSCAPE 时间线，未检验更长 30 分钟音频。零样本定位方面，下表选 Clotho-Moment、UnAV-100 与 CASTELLA 3 个外部集，ATTEST 未见其训练集却达到或超过在其上微调的专用定位方法，说明学到的是可迁移的时间对齐而非记住数据集。

| Proprietary Models |  |  |  |  |
| --- | --- | --- | --- | --- |
| Gemini 3.1 Pro | 0.385 | 0.340 | 0.080 | 0.081 |
| + SFT | 0.875 | 0.790 | 0.224 | 0.269 |
| + ATTEST | 0.909 | 0.820 | 0.297 | 0.312 |

上表以 Qwen2.5 Omni 为例，ATTEST 在三集的 R@0.5 分别为 0.909、0.820、0.297，高于同基座监督微调与 TimePro-RL，也超过多数通用大模型。限制是 CASTELLA 绝对值仍低，长真实音频定位远未解决。通用理解上 ATTEST 在 MMAR 与 LongAudioBench 整体与时间子集上小幅提升，而 TimePro-RL 与带时间标记的变体反而下降，提示加标记会占用上下文并损伤原有能力。读图说明：下面是在干预片段上测 FENSE 下降的稳健性图，网格阴影越小表示被替换后越稳定。

> **看图路径：** 1. 看蓝色仅微调与橙色 ATTEST 两组柱子的总高度；2. 看顶部网格阴影表示的从原始到被替换后的分数下降量

[![原论文 Figure 4：Perf. drop on intervened clips.](https://arxiv.org/html/2610.17149v1/robustness_intervention.svg)](https://arxiv.org/html/2610.17149v1/robustness_intervention.svg)

*论文图 4。原论文 Figure 4:：“Perf. drop on intervened clips.”。*

上图可见仅监督微调在 3 个基座上下降约 0.067 - 0.130，而 ATTEST 只下降约 0.031 - 0.036，总高度也更高，支持 ATTEST 对乱入片段更稳健，但该测试只替换了部分片段，不能推广到全音频重度噪声。

### 拿掉每个奖励与分段优势会发生什么

下表在 EgoSCAPE 粗细两类定位上比较，问题是细粒度原子事件与粗场景查询是否同等受益，公平条件是同一基座与同一评分器。

| Proprietary Models |  |  |  |  |
| --- | --- | --- | --- | --- |
| Qwen2.5 Omni | 0.202 | 0.215 | 0.069 | 0.084 |
| + TimePro-RL | 0.492 | 0.489 | 0.510 | 0.474 |
| + ATTEST (Ours) | 0.518 | 0.505 | 0.529 | 0.481 |

上表显示基座在细查询上明显更弱，而加 ATTEST 后粗细两类都提升，Qwen2.5 Omni 细查询 R@0.5 从 0.069 经监督微调到 0.506 再到 0.529，说明密集训练迁移到了定位。论文另有消融：去掉正确性奖励则 FENSE 掉得最多，去掉反事实或注意力则幻觉率回升最明显，把分段优势换回序列优势则各项都回落。权重扫描显示 F@0.5 在 0.410 - 0.427 间稳定，CASTELLA 更敏感，但所有组合仍优于普通 GRPO。读图说明：下面是把部分区域静音后看有多少音频至少有一段预测落入静音区的比例，纵轴越高表示幻觉越多。

> **看图路径：** 1. 对比短中长三组中蓝色仅微调柱子随长度升高的趋势；2. 对比同组内橙色 ATTEST 柱子被压低的幅度；3. 注意三个基座模型中右图长音频的幻觉比例最高

[![原论文 Figure 7：Percentage of audios in EgoSCAPE where at least one dense captioning segment was predicted in a…](https://arxiv.org/html/2610.17149v1/silence_analysis.svg)](https://arxiv.org/html/2610.17149v1/silence_analysis.svg)

*论文图 7。原论文 Figure 7:：“Percentage of audios in EgoSCAPE where at least one dense captioning segment was predicted in a silenced region.”。*

上图可见仅监督微调在中长组大量落入静音区，AudioFlamingo 3 长组接近 87 %，而 ATTEST 把 3 组都压到很低。限制是该分析只用 20 - 30 % 静音比例与中心点判定，若换比例或边界判定，比例会变。

### 这篇工作的边界与未测范围

证据支持的范围是：最长 5 分钟的真实第一人称音频、固定 0.1 秒精度的文本时间格式、不改词表的自回归生成。未测范围包括更深的多跳时间推理，例如需要联合多个事件做因果判断的问答，论文在附录明确列为未来工作。幻觉定义依赖 FLAM 相似度阈值 0.15 与交并比 0.5，若阈值收紧，幻觉率数字会变，但相对排序在论文多组对比中保持。训练只用了 5 千加 5 1,000 条强化学习样本，是否随数据继续扩展未报告。

合成拼接数据的对照显示只用合成数据在 EgoSCAPE 长组上明显更差，说明连续真实上下文不可替代，但该对照只在 Qwen2.5 Omni 上做过。改进的时间理解可能被误用于音频监控，论文声明模型只做事件描述与定位，不做说话人识别，高风险场景需人工复核。

### 复现第一步与关键超参数

复现先准备基座与数据管线。基座用开放权重的 Qwen2.5 Omni 或 AudioFlamingo 3，数据用 Ego4D 许可下的音频标识加自有标注，不直接分发原始音视频。先按 30 秒切块跑 BEATs 检测与多模态校验，再合成为长音频标注，最后做冷启动监督微调。强化学习关键设置是分组 8、批量 16、低秩只训线性层、学习率 5e-6、KL 系数 0.001、正确性权重 alpha 0.5、优势权重 1、0.2、1、注意力上限 5、静音比例默认 0.3。评估需统一时间解析，把时钟式时间转为十进制秒，对不能处理长音频的基线做非重叠滑窗拼接后再用同一评分器打分。论文给出全部提示词与 DeepSpeed ZeRO-3 配置，但本次收到的可用资源只有第三方 DeepSpeed 链接，作者权重与标注是否公开不能从本次证据确认，需按原文仓库说明另行核对。

### 何时值得尝试与还需补什么验证

当任务是长音频的密集枚举加时间定位，且不能接受改词表带来的额外 token 与通用能力回退时，值得尝试 ATTEST 这种只加奖励与分段优势的做法，尤其长于 120 秒的样本预期收益更大。当音频很短或已有强专用检测器时，收益可能不明显。复现第一步是先跑通 EgoSCAPE 风格的切块加校验管线并复现幻觉随长度上升的曲线，确认问题存在再引入强化学习。

还需补的验证包括：在 30 分钟级音频上的时间线稳定性、在不同相似度阈值下的幻觉排序、以及推理延迟与显存的实测，因为论文主要报告分数，未报告误判率、延迟与成本，不能承诺这些会同步改善。总体看，论文提供了一套评测加训练的配方，但长音频时间理解仍远未到可直接部署的程度。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.17149v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
