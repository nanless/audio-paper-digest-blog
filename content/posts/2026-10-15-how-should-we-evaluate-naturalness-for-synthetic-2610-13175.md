---
title: "How Should We Evaluate Naturalness for Synthetic Speech with a Foreign Accent?"
date: 2026-10-15
draft: false
tags: [语音质量评估, 众包评测, 口音与方言, 语音]
categories: [论文速递]
description: "论文用同一批日式英语做分析再合成以对齐口音强度，对比四种指示语和两类评测者并对照三种自动打分，说明笼统问自然度会把口音当缺陷，而问像人声程度并请熟悉该口音的人来听能更公平地比出系统差异。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.13175"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "带外国口音的合成语音，自然度该怎么评"
paper_digest_original_title: "How Should We Evaluate Naturalness for Synthetic Speech with a Foreign Accent?"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.13175v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.13175v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.13175v1.pdf"
paper_digest_primary_task: "语音质量评估"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-quality","label":"语音质量评估"},{"facet":"method","id":"method.crowdsourced-evaluation","label":"众包评测"},{"facet":"setting","id":"setting.accent-dialect","label":"口音与方言"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "众包评测"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文用同一批日式英语做分析再合成以对齐口音强度，对比四种指示语和两类评测者并对照三种自动打分，说明笼统问自然度会把口音当缺陷，而问像人声程度并请熟悉该口音的人来听能更公平地比出系统差异。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kentaro Onda"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Satoru Fukayama"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Daisuke Saito"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nobuaki Minematsu"}]
paper_digest_abstract_sha256: "b8de01d5ba689f9ec4739bc4b0b4248b133f3447f2eefd8fc4e6e966ac0ba517"
paper_digest_sidecars: {"citation.bib":{"sha256":"7069135ac83861660df673f300fa195a51699c3f117cc90929d89fdb7441c2f9","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13175/citation.bib"},"citation.json":{"sha256":"02a3a40bb50146c27b048136123753ee6d4423d1e35da80db3bb83133c143e44","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13175/citation.json"},"citation.ris":{"sha256":"7af18cf5a1d909ee42265afd41cacffa36ea9df1873d06325f98989d75ced29d","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13175/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"8e7be869e95086f8cab608aca37cdce26c8e4ab00509b9e54a9f2a5259b7f0aa","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13175/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "17cdde276a1f9862f49e789420f24acaa49cf23314d7e77d2d9199cb712faa7d"
paper_digest_api_reader_plan_sha256: "4adb7f8feb7d739035b9ac1153a76f5628efe67a2f21fb2691c7db235341606c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "80554bf234da680d32e861aac665482e33598d0c7bff4aa6bb87a1a649691fb5"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "df203e4af64e5ce151f42b5c3a63406d57747575c00180183b1b3e401ef12e54"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "15c379d6102a5037825229f297300b65b431f863b1f53438d793deb6b9125dc7"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "e3c89092d4b24b37ae536615ebcd2c70dbd03306a2747f8a713804d442ea9a89"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 带外国口音的合成语音，自然度该怎么评

> 英文题目：*[How Should We Evaluate Naturalness for Synthetic Speech with a Foreign Accent?](https://arxiv.org/abs/2610.13175v1)*

> 标签：#语音质量评估 | #众包评测 | #口音与方言 | #语音
>
> 评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Kentaro Onda：机构信息未在 arXiv HTML 中可靠披露
- Satoru Fukayama：机构信息未在 arXiv HTML 中可靠披露
- Daisuke Saito：机构信息未在 arXiv HTML 中可靠披露
- Nobuaki Minematsu：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

外国口音合成把口音作为目标特征，而传统自然度评价默认越接近母语者越好，易把口音误判为系统缺陷，UTMOS也被发现给熟练度低的说话人更低分。研究从日本人英语语料ERJ选取5个句子、24名说话人的120段录音先做语音修复以减弱噪声，修复后语音作为受控输入，一路保留原样、另三路分别经BigVGAN、EnCodec、WORLD重合成得到480段刺激语音，使口音可控而韵律基本保留真人特征。随后将480段语音分成每组48段的10组，每组覆盖不同说话人与句子并均衡熟练度，再在自然度、像人程度、作为母语语音的自然度、作为非母语语音的自然度4种指示语下，分派给160名英语母语者和160名日语母语者，共收集15360个五点制MOS打分。结果显示美国英语MOS始终高于日本英语，例如英语评价者在I1自然度下对两类语音的MOS分别为4.28和2.75。以Spearman等级相关系数衡量熟练度与MOS的关系，英语评价者平均值从I1下的0.515降至像人程度I2下的0.427，说明I2减弱口音影响且更易分辨系统差异。自动评价同样存在口音偏好，三种自动系统与人工MOS的Spearman等级相关系数均在I2下最高，例如对日语评价者UTMOS在I1、I2下分别为0.49和0.51。结论仅适用于口音可控、韵律基本保留真人特征的重合成情形，能否推广到口音强度不同的文本到语音合成尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/ondatk68/foreign-accent-mos/> — 链接可访问（HTTP 200）

- 第三方资源：<https://hf.co/nvidia/bigvgan_v2_44khz_128band_512x> → <https://huggingface.co/nvidia/bigvgan_v2_44khz_128band_512x> — 暂时无法访问

- 第三方资源：<https://hf.co/facebook/encodec_24khz> → <https://huggingface.co/facebook/encodec_24khz> — 暂时无法访问

- 第三方资源：<https://www.prolific.com/> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.lancers.jp> — 链接不可用（HTTP 405）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 任务的输入目标和必须保留的信息是什么

这篇论文研究的输入是带外国口音的英语语音，具体是日本人说的英语和美国人说的英语，目标是判断合成语音的自然度该怎么问、该找谁来听。过去中性朗读语音已经做得很像真人，研究转向带情感、风格和口音的语音，评价常用平均意见分，也就是请人听完按 5 级打分再平均。自动打分工具 UTMOS 被广泛用来代替人工，还被用进挑战赛和训练管线，但作者在预实验中发现，即使都是真人说的日式英语，UTMOS 给低熟练度说话人的分数也更低。

问题在于，口音是这类合成有意要保留的特征，不是系统故障，如果评价把口音重就当作不自然，就会误伤本该保留多样性的系统。更进一步，这类自动分还被拿去筛数据和做强化学习的奖励，可能在无意中偏向母语口音。论文因此提出两个研究问题：人是否也会给口音重的语音更低的自然度分，指示语和评测者背景又如何改变这种关联。需要强调的是，本文只讨论日式英语这一种口音和受控的再合成语音，不能直接推广到所有口音或所有合成任务。

### 已有路线在评什么本文补哪一块

已有路线分两支。一支是主观自然度评价，早就有人指出自然度本身含糊，会受指示语措辞和评测者母语、经验影响；非母语语音感知里也区分口音重不重、好不好懂、能不能听对，它们对同一段语音可能给出不同判断。另一支是自动平均意见分预测，例如 UTMOS、UTMOSv2 和 SSL-MOS，它们在常规语音上与人工分相关不错，也因此被用进数据筛选和奖励模型，但已有报告说它们对笑声、耳语等特殊语音会系统性压低分数。

本文补的是两者交叉处：把口音强度作为可度量的外部变量，同时操纵指示语和评测者群体，再平行比较人工和自动打分。也就是说，输入、目标和比较条件都对齐在同一批刺激上，而不是拿不同数据集拼结论。和类别差异不同，这里 4 种再合成版本共用同一批原音，口音程度跨系统基本一致，所以系统间差异更可能来自处理本身，而非说话人不同。比较时输入都是波形，目标都是自然度排序，运行阶段都是已训练好的模型推理加人工听测，这才构成同条件对照。

### 论文要回答的两个具体问题

第一个问题是人是否也和 UTMOS 一样，听到口音更重就给更低的自然度。第二个问题是指示语怎么写、找什么样的听众，能否减轻这种牵连，同时不丢失区分系统好坏的能力。论文把自然度拆成两种视角来操作化：像人声程度，以及在特定语境下合不合预期。举例来说，同样一段日式英语，若问作为母语语音自然吗，听众可能因口音扣分；若问作为非母语语音自然吗，听众可能放宽对口音的扣分，但仍可能按别的标准打分。

关键是这两种问法都不改变音频本身，只改变评价标准，论文要看分数分布、与熟练度的相关以及系统间可区分性如何变化。结论的成立条件很窄：刺激是分析再合成而非文本到语音直接生成，口音只有日式英语，评测者只有英语母语和日语母语两群。超出这个范围的推论都需要重新验证，不能把一次相关当成因果。

### 整体流程如何从原音走到两类评价

流程可以沿着一个样本走。先从 ERJ 语料选 5 个音素覆盖较广的目标句，取 20 位日本人英语学习者和 4 位美国英语母语者的录音，共 120 条原音。接着用 Sidon 做语音修复，减小日式英语在各地大学录制带来的噪声差异，再分别做 4 种处理：只修复不做再合成、用 BigVGAN 再合成、用 EnCodec 再合成、用 WORLD 再合成，采样率统一重采样到 16000 赫兹，得到 480 个刺激。

然后把 480 个刺激分成 10 组，每组 48 个，每组包含 12 个原话语的 4 种版本，保证每组的日式英语覆盖较宽的熟练度范围。最后在众包平台招募 320 人，160 位英语母语者和 160 位日语母语者，每种指示语和每组的组合各找四加 4 人听，每人评一组并混入两个固定基频的极不自然质检样本，只有两个都打一或二才保留，共 15360 个标注。

自动评价侧则把同一批刺激送给 3 个现成模型打伪平均意见分，再与人工分和熟练度对照。

**自然度 × 像人声程度 × 上下文符合度：** 自然度是听众给出的总体好听标签，像人声程度指这段语音听起来像不像真人发出的，上下文符合度指在假定为母语或非母语语境下合不合预期；论文把后两者作为自然度的两种拆分，分别对应问像人声和问作为母语或非母语是否自然，用来检验换一种问法能否减少把口音直接扣分。

### 刺激是怎么构造的修复和再合成各起什么作用

原音选择解决的是可比性。只用音素平衡句集中的同一批句子，可以避免文本难度干扰口音判断；保留同一说话人的同一句话做 4 种版本，可以让口音强度在系统间对齐。再合成解决的是系统差异的可控引入。只修复版本保留最多原声特征，BigVGAN 和 EnCodec 引入不同程度的神经编解码失真，WORLD 引入传统声码器失真，它们的相对好坏在后文人工分里大致呈现从前到后的下降趋势。

代价是这种构造仍高度依赖真人原音的音段和韵律，系统没有自己决定发音和口音，这是后文讨论能否推广到文本到语音时的关键限制。举例来说，同一个日本说话人说的同一句话，4 种版本只是音质不同，口音底色相同，听众的分数差异就更容易归因于系统。

**分析再合成 × BigVGAN × EnCodec × WORLD：** 分析再合成指先从原录音提取声学表示再重新合成波形，BigVGAN 是神经声码器分支，EnCodec 是神经编解码分支，WORLD 是传统信号处理分支；四种处理共用同一批原音，使口音强度跨系统基本对齐，只留下系统本身引入的音质差异可比。

**ERJ 语料 × 熟练度分数 × 口音强度：** ERJ 语料提供日本人英语录音和英语母语者打的熟练度分数，熟练度越低表示口音越重；论文用它作为口音强度的外部标尺，再看主观平均意见分和自动预测分是否随熟练度上升而上升，从而判断评价是否把口音当成了不自然。

### 本研究没有训练什么实际计算了什么

本研究没有训练新的语音合成或打分模型，也没有微调 UTMOS 系列。实际计算分 3 类。第一类是修复和再合成推理：调用现成的 Sidon、BigVGAN、EnCodec 和 WORLD，对 120 条原音生成对应波形，其中 EnCodec 带宽设为 12.0 kbps，最后统一重采样到 16000 Hz，得到 480 条待评刺激。第二类是人工分聚合：对每个刺激在固定指示语和固定评测者群体下取平均得到平均意见分，并进一步按说话人取平均再与 ERJ 熟练度求 Spearman 等级相关，显著性用 Wilcoxon 符号秩检验加 Holm 校正。

第 3 类是自动分对照：用 SHEET 工具包默认模型得到 UTMOS、UTMOSv2 和 SSL-MOS 的话语级预测，再求说话人均值与熟练度的关系，以及与人工分的 Spearman 相关。这里 Sidon 负责压低录音噪声差异，分析重合成负责在保留原有口音特征的同时引入系统差异，平均意见分与等级相关负责把多人判断汇总为可比指标，三者搭配才能把口音强弱和系统质量分开观察。正因为没有训练，论文不能回答换训练数据能否消除口音偏好，只能报告现成模型在该批刺激上的行为。

**UTMOS × UTMOSv2 × SSL-MOS：** UTMOS、UTMOSv2 和 SSL-MOS 都是输入波形输出预测平均意见分的自动模型，论文不重新训练它们，只把同一批刺激送进去打分，再看它们对美音和日式英语的偏好以及与熟练度的相关方向是否与人工一致。

### 四种指示语和两类听众如何分组

指示语是本实验的核心操纵。第一种只问听起来自然吗，不给定义；第二种问像人声吗，括号注明作为人类语音的自然；第 3 种问作为母语语音自然吗；第 4 种问作为非母语语音自然吗。

评分都是从差到优的 5 级量表，每档配有英文标签，以稳定尺度理解。听众分组是第二重操纵，英语母语者在 Prolific 招募，日语母语者在 Lancers 招募，每种指示语乘以 10 个刺激分组共 40 个单元，每个单元各需 4 位有效听众。分组时把 20 位日本说话人按熟练度排序再分奇偶，保证每组口音范围相近。质检用两个 WORLD 固定基频样本过滤不认真听的情况。这样的设计使指示语、听众母语和系统版本三者正交，口音强度则作为连续协变量事后分析。

**英语母语评测者 × 日语母语评测者 × 口音熟悉度：** 英语母语评测者指以英语为母语的听众，日语母语评测者指与被评口音同母语的听众，口音熟悉度指平时接触日式英语的多少；论文让两组人评同一批刺激，检验更熟悉目标口音的人是否更能把口音特征和系统失真分开。

### 修复前后发生了什么指示语字面是什么

先看修复是否把录音条件拉平，这是后文把分数差异归因于口音而非噪声的前提。下表是原文关于修复前后语音质量与预测分相关性的完整记录，数值方向是质量分越高越好，相关系数越大表示预测分越随熟练度走。本表比较在相同说话人集合下，修复是否缩小日美录音条件差并让口音更直接显现。

|  | DNSMOS | DNSMOS | UTMOS-Prof. |
| --- | --- | --- | --- |
|  | JE | AE | correlation |
| Original | 3.16 | 3.26 | 0.417 |
| Restored | 3.30 | 3.34 | 0.549 |

表后解释可见内容：修复后日式英语和美音的质量分差距缩小，而预测分与熟练度的相关反而增强，支持了去噪后口音更直接显现的解释，但这只是相关证据，不能证明因果，也不能说明修复本身提升了自然度。接着看 4 种指示语的字面，这是复现时必须逐字保留的条件。下表完整给出 4 种问法的类型划分与英文原文，比较的是 4 种问法在字面上如何区分模糊自然度、像人声和语境预期。

|  | Type | “Listen to the speech sample and rate …” |
| --- | --- | --- |
| I1 | - | how natural it sounds. |
| I2 | HL | how human-like (natural as human speech) it sounds. |
| I3 | CC | how natural it sounds as native speech. |
| I4 | CC | how natural it sounds as non-native speech. |

表后解释可见内容：第一种最模糊，第二种指向像人声，第三和第 4 种分别预设母语和非母语语境。注意即使明示按非母语评，后文日式英语仍低于美音，说明换问法不能完全抹掉口音与自然度的关联，字面差异只是操纵起点，效果要看数据。

### 预实验里自动分如何随熟练度变化

在进入大规模主观实验前，论文用 ERJ 原音展示了 UTMOS 预测分与说话人熟练度的关系，这是提出研究问题的起点。读图说明如下：横轴是熟练度分数，纵轴是 UTMOS 预测的自然度，每个蓝点是 1 位说话人的平均预测分，红色直线是趋势线，重点看点云是否随横轴抬升。

> **看图路径：** 1. 先看横轴熟练度与纵轴 UTMOS 预测分的整体走向；2. 再看低熟练度端点群的高度与红色趋势线的斜率；3. 最后确认高熟练度端是否仍有分散的低分点

[![原论文 Fig. 1：Relationship between the proficiency of Japanese speakers of English and the naturalness scores…](https://arxiv.org/html/2610.13175v1/img/correlation.png)](https://arxiv.org/html/2610.13175v1/img/correlation.png)

*论文图 1。原论文 Fig. 1:：“Relationship between the proficiency of Japanese speakers of English and the naturalness scores predicted by UTMOS[23] from their utterances: speakers with lower proficiency tend…”。*

图后解释实际可见的内容：点云自左向右整体抬升，低熟练度端多集中在较低区间，高熟练度端可达 4 分以上，红线呈正斜率。也就是说，即使全是真人发音，口音更重的一端预测分也更低。这为后文埋下对照：如果人工也出现同样模式，就不能简单归咎于自动模型缺陷；如果人工在某种问法下减弱该模式，就说明指示语和选人确实有用。该图只涉及 UTMOS 和原音，没有涉及 3 种再合成系统和两种听众，因此不能用来断言所有自动模型都有同样正相关，后文会显示不同模型方向并不一致。

### 人工是否也把口音重听成不自然

主观结果首先确认了口音的主效应。在所有系统、所有指示语和两类听众下，美音的平均意见分都高于日式英语，即使已明示按非母语语音评价仍如此。日式英语的标准差在多数格子里更大，说明熟练度差异被带进了分数里。更细的证据是日式英语内部说话人平均分与熟练度的等级相关全部为正，英语组和日语组在笼统问自然度时平均都在 0.51 左右，表明口音轻的说话人确实得分更高。

指示语改变了绝对值：相对笼统问法，问像人声让美音略降、日式英语略升，两者差距缩小；问作为母语语音让日式英语在全部情况下更低；问作为非母语语音让美音更低。这说明听众会按指示语调整对口音的计分方式，但调整不等于消除。听众背景方面，日语母语者给日式英语的分数在所有指示语和系统下都高于英语母语者，而美音在前两种问法下两组相近，这与日语组更常接触日式英语的解释一致，但仍是事后解释，需进一步验证。

系统排序在多数条件下保持只修复和 BigVGAN 居前、EnCodec 居中、WORLD 居后，但有些条件下差距变小，区分度依赖问法。

### 三种自动打分与人工分的关系有何不同

把同一批刺激送给 3 个现成模型后，论文比较了它们对口音的敏感方向和与人工分的一致程度。读图说明如下：每子图横轴仍是熟练度，纵轴是预测分，颜色区分 4 个系统，右侧星号是美音均值，重点看拟合线倾斜方向与星号高低，以及系统间分层是否清晰。

> **看图路径：** 1. 先看三个子图右侧星号代表的美音均值高低；2. 再看每子图内四条拟合线随熟练度的倾斜方向；3. 最后对比 UTMOS 上扬与 SSL-MOS 下倾的差异

[![原论文 Fig. 3：Relationship between proficiency scores and speaker-level mean pseudo MOS scores predicted by each…](https://arxiv.org/html/2610.13175v1/automatic.png)](https://arxiv.org/html/2610.13175v1/automatic.png)

*论文图 3。原论文 Fig. 3:：“Relationship between proficiency scores and speaker-level mean pseudo MOS scores predicted by each system for JE speech.”。*

图后解释实际可见的内容：3 个模型都给美音星号高于多数日式英语圆点，但随熟练度的倾斜不同，UTMOS 4 条线多为上扬，UTMOSv2 近乎平坦，SSL-MOS 甚至整体下倾。系统间层次在 UTMOS 和 SSL-MOS 中相邻两两显著，而 UTMOSv2 在 EnCodec 与 WORLD 之间无显著差异。表前说明比较问题：在只看日式英语 400 条时，哪个模型的预测排序更接近哪种指示语下的人工排序，指标是话语级等级相关，越大越接近。

|  | EN | EN | EN | EN | JP | JP | JP | JP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | I1 | I2 | I3 | I4 | I1 | I2 | I3 | I4 |
| UTMOS | 0.26 | 0.42 | 0.28 | 0.33 | 0.49 | 0.51 | 0.28 | 0.24 |
| UTMOSv2 | 0.15 | 0.33 | 0.26 | 0.17 | 0.28 | 0.34 | 0.23 | 0.07 |
| SSL-MOS | 0.14 | 0.28 | 0.17 | 0.19 | 0.27 | 0.34 | -0.01 | 0.03 |

3 个模型都在问像人声时达到各自相对最高的相关，例如 UTMOS 在日语组像人声下超过 0.5，而 SSL-MOS 在部分语境下接近零甚至为负。这支持了现成模型更接近像人声判断的说法，但不能反推它们已可直接用于带口音合成的评价，因为它们对口音的偏好方向本身就不一致，且与人工分的相关绝对值并不高，自动指标也不等于人工评价。

### 哪种问法更能比出系统好坏代价是什么

在确认口音会影响分数后，论文进一步问：听众能否在口音存在下仍比出系统差异。这里的比较条件是同一口音分布下比较 4 个再合成版本，统计用符号秩检验加校正。读图说明如下：上行英语组蓝色，下行日语组橙色，列为 4 种问法，括号标注相邻系统对的显著性，重点先看分布形状和中线，再看星号多少。

> **看图路径：** 1. 先按行对比英语组与日语组小提琴的宽度和中线高度；2. 再按列对比 I1 到 I4 下标注显著性的相邻系统对；3. 最后确认 I2 是否在两行都保留最多的显著差异

[![原论文 Fig. 2：Violin plots of MOS values for JE speech by rater group and evaluation instruction.](https://arxiv.org/html/2610.13175v1/violin.png)](https://arxiv.org/html/2610.13175v1/violin.png)

*论文图 2。原论文 Fig. 2:：“Violin plots of MOS values for JE speech by rater group and evaluation instruction.”。*

图后解释实际可见的内容：总体趋势是问像人声下的系统差异最清晰，英语组 3 个相邻对比分别显著，日语组也是 3 对比显著；而问作为母语或非母语语境下尤其日语组多出现不显著。表前说明比较问题：在日式英语内部，说话人平均分与熟练度的相关如何随指示语和听众变化，相关越小表示口音牵连越弱，表格列出 4 个系统与平均值。

| Rater |  | No resyn. | BigVGAN | Encodec | WORLD | Avg. |
| --- | --- | --- | --- | --- | --- | --- |
| EN | I1 | 0.455 | 0.535 | 0.549 | 0.521 | 0.515 |
|  | I2 | 0.588 | 0.526 | 0.392 | 0.202 | 0.427 |
|  | I3 | 0.446 | 0.317 | 0.469 | 0.426 | 0.415 |
|  | I4 | 0.381 | 0.259 | 0.308 | 0.484 | 0.358 |
| JP | I1 | 0.575 | 0.437 | 0.641 | 0.411 | 0.516 |
|  | I2 | 0.491 | 0.284 | 0.270 | 0.254 | 0.325 |
|  | I3 | 0.498 | 0.461 | 0.461 | 0.417 | 0.459 |
|  | I4 | 0.350 | 0.239 | 0.268 | 0.237 | 0.274 |

表后解释可见内容与代价：问非母语语境虽然熟练度与分数相关最弱，日语组平均仅 0.27 左右，但系统间却更难分开。论文的解释是该问法让听众更关注是否符合非母语语境，口音重不再直接等于低分，相关因此下降，但注意力从系统失真上移开，区分度也下降。代价很明确：减弱口音牵连的问法不一定提升系统比较能力，只有问像人声同时做到了牵连减弱和区分度保留。

未胜出项也要记下：问作为母语语境对日式英语压分最明显，不适合用来评有意带口音的合成。即使问像人声，不熟悉该口音的听众仍更易把口音特征当系统失真扣分，这正是论文主张指示语加选人要配合使用的依据。

### 这些结论在什么条件下才成立

适用边界首先是刺激构造。本研究用分析再合成，音段和韵律大多继承自真人，口音程度跨系统对齐，听众只需判断音质类失真。真正的文本到语音还会自己决定发音和韵律，不同系统口音轻重可能不同，届时更难区分有意口音和系统缺陷，本文的排序和相关数值不能直接套用。其次是口音和听众范围。口音只有日式英语，听众只有英语母语和日语母语两群，日语组对目标口音更熟悉这一解释依赖常识推断，没有独立测量每个人的接触量。

第三是评价维度。本文只做自然度及其两种拆分，没有测可懂度、口音重度或说话人相似度，也没有报告延迟、成本和误判率，不能承诺换问法会改善这些方面。最后是自动模型。只测了 3 个模型的默认版本，SSL-MOS 出现负相关可能与训练数据和任务有关，但原文未做消融，不能据此断定某类结构必然有偏。把相关当因果、把小提琴图显著性当效果大小，都是常见的误读，需要回到均值差和分布宽度一起看。

### 要复现第一步做什么需要哪些信息

复现第一步是拿到同样的原音划分和修复后波形。原文用 ERJ 语料音素平衡句集中的 5 个目标句，20 位日本说话人加 4 位美音说话人，修复用 Sidon，再做 4 种再合成并统一到 16000 赫兹。EnCodec 带宽、WORLD 配置、Sidon 版本和重采样方法都要按原文保留，否则系统差异会被实现细节污染。第二步是严格复刻分组和指示语。10 个刺激分组、每组 12 个原话语的 4 种版本、奇偶熟练度分组、5 级量表标签、质检样本的生成方式都要一致，指示语英文必须逐字使用，翻译仅作辅助。

第三步是找对人。每指示语每组各需 4 位英语母语和 4 位日语母语有效听众，不认真者用两个固定基频样本剔除。资源方面，论文脚注给出听测刺激和结果仓库链接，第三方链接指向 BigVGAN、EnCodec、Prolific 和 Lancers，其中仓库在本次核验中可达，模型链接本次未能确认可达，众包平台一条可达一条不可用。开源仓库、权重可下载、系统可运行是三件事，本篇只提供了刺激与结果仓库，不能等同于全部模型权重可直接运行。

### 什么时候值得尝试还缺哪项验证

当合成目标明确包含外国口音，且担心自然度打分把口音当缺陷时，值得尝试把指示语从笼统的自然改成像人声程度，并优先招募对目标口音更熟悉的听众。本文证据是，在日式英语再合成上，这样做缩小了美音与日式英语的差距，降低了熟练度与分数的相关，同时保留了系统间的可区分性。但这只是起点，不是通用方案。

还缺的验证包括：换一种口音是否同样成立，文本到语音引入的音段错误是否会被像人声问法漏掉，以及熟悉度能否用可测量的接触量表代替母语身份。容易产生的误解是以为按非母语评价最公平，实际上它虽然相关最低，却让系统差异最难显现；另一个误解是以为自动分与像人声相关最高就可直接用，实际上相关绝对值有限且模型间口音偏好方向不一。

总结一句话：在受控的日式英语再合成和两类听众条件下，问像人声加选熟悉口音的人，是目前更合适的自然度评价起点，超出该条件都需要重新验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.13175v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
