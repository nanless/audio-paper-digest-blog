---
title: "Xing-Audio-NVVASR: Scaling and Refining Supervision for Joint Recognition of Speech and Non-Verbal Vocalizations"
date: 2026-11-20
draft: false
tags: [语音识别, 数据标注, 基准测试, 数据集]
categories: [论文速递]
description: "针对自然语音中呼吸等非言语发声漏标严重的问题，该工作用交叉审核加全库呼吸筛查迭代修标注并挖掘新数据，最终用约八十万条语料训练单个 1.7B 模型，在四个人工基准上取得平均综合分数 64.46 分，但呼吸召回仍然偏低且结论依赖其敏感的标注口径。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.26000"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "同时听懂话语和呼吸笑哭：八十万条标注如何炼成联合识别器"
paper_digest_original_title: "Xing-Audio-NVVASR: Scaling and Refining Supervision for Joint Recognition of Speech and Non-Verbal Vocalizations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.26000v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.26000v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.26000v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.data-annotation","label":"数据标注"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "数据标注"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对自然语音中呼吸等非言语发声漏标严重的问题，该工作用交叉审核加全库呼吸筛查迭代修标注并挖掘新数据，最终用约八十万条语料训练单个 1.7B 模型，在四个人工基准上取得平均综合分数 64.46 分，但呼吸召回仍然偏低且结论依赖其敏感的标注口径。"
paper_digest_reader_sections: [{"heading":"问题本质：为什么话语加笑声哭声的联合转写总被漏标拖累","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：一条语音如何走完挖掘筛查与五轮修正","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"核心机制之一：交叉审核如何只把分歧样本交给教师","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"核心机制之二：全库呼吸筛查如何找回被一致同意漏掉的事件","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"训练目标与采样：最终识别器如何被事件加权和配额约束","index":5,"kind":"training","roleLabel":"训练与优化"},{"heading":"主实验验证：综合分数领先来自哪里又在何处收窄","index":6,"kind":"result","roleLabel":"主实验验证"},{"heading":"呼吸与全文质量：精度召回如何交换以及谁仍占优","index":7,"kind":"result","roleLabel":"主实验验证"},{"heading":"诊断性对照：为什么多加人工标注一度让旧评测变差","index":8,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"适用边界：何时值得尝试以及复现前先核对什么","index":9,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pengyu Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gang Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Genliang Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hongjie Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jian Kang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jie Lian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jie Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yongxiang Li"}]
paper_digest_abstract_sha256: "8a26f6721dad6d1579f01de1a4207236f36ae656110cb34ae1afdbee2edecd12"
paper_digest_sidecars: {"citation.bib":{"sha256":"2d97e5a625b0c1007532759d3e238d9b9fc4d851b2e943bcb43fe3c778acdfa3","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26000/citation.bib"},"citation.json":{"sha256":"7c7962ed48e575e93536a3fbe73ba568e821e1d4b2644476ca82cfb1298883c2","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26000/citation.json"},"citation.ris":{"sha256":"5f203ffb35d1a23952a573a420a59f2fcd202b053dd12f657059ebc927104183","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26000/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"242c12f4d03490ca1604551178c57bdc0494826d70a86ddd513f69cc1aafc587","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26000/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "778f11a7f446d521a2a23bafdb3568cb55fae97a733833d80c963add1d6abb97"
paper_digest_api_reader_plan_sha256: "5e5cb578028d2841ab47d5453452347c2036d1c0ffc935627ab4c81a97824181"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "93a5a8adaeed4af4c74717436515af2b7475e4d7398d3f7400851e267576bef8"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "3984095b2fe4a90092de5f915b7f682093140caa88c77ef783d138f5adc38711"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "35b3a4b9df36ee37d5d837dfd1e2e114bb663f1ea44fa3869930b025d6827808"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1e8723531b687cf1860080a5f5ce35d89bfba2a2bd53a0467c3c7998a6a60490"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 同时听懂话语和呼吸笑哭：八十万条标注如何炼成联合识别器

> 英文题目：*[Xing-Audio-NVVASR: Scaling and Refining Supervision for Joint Recognition of Speech and Non-Verbal Vocalizations](https://arxiv.org/abs/2611.26000v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[数据标注](/audio-paper-digest-blog/papers/?concept=method.data-annotation)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Pengyu Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Gang Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Genliang Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Hongjie Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Jian Kang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jie Lian：机构信息未能在本次解析中与作者逐人可靠绑定
- Jie Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yongxiang Li：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 需要理解的对象是同时包含字词和发声事件的语音记录。输入为自然语音音频，输出为带位置标记的文字转写，其中六类目标事件为呼吸、笑、哭、咳嗽、清嗓和叹息，标记插在词之间，不含起止时间戳。困难在于公开语料缺少自发事件，呼吸被系统性漏标，类别之间也存在混淆，而评测参考本身同样漏标可听见的呼吸，导致正确检出反而被记为误报，低呼吸分数不能直接解读为模型能力不足。

**核心思路与方法架构：** 核心洞察是模型与标签一致并不代表正确，双方可能共同漏掉同一处呼吸，因此只靠分歧驱动的教师重标不够，还需要与审计无关的敏感筛查。一个样本的音频记为x，输出序列记为y，其中穿插词和六类标记，事件序列保留类别、顺序和词前位置。处理沿挖掘与精标两线推进，先将17万条公开种子按统一声学标准归一到六类，再从约50万小时内部音频经人声分离、语音活动和说话人切分、两级事件筛选和文本质量过滤挖掘候选。精标时Qwen3-ASR与Qwen3-Omni在不相交子集上交叉审计并共享已确认人工标注，不一致样本交由Qwen3.5-Omni-Plus按固定六类提示重写为银标签，与此同时Multilingual-NVASR与PANNs CNN14对全库做呼吸筛查，只要转写缺呼吸标记但任一筛查器报警即送人工复核，确认的金标签跨轮累积且免于自动覆盖。五轮后共修复17万条种子并新加入63万条挖掘样本，以约80万条全量微调单个Qwen3-ASR-1.7B识别器，音频限长30秒，非言语发声标记的训练权重设为2，普通词为1。

**关键实验与核心代价：** 主评测覆盖四个自建人工基准，分别为WESR-400-Relabeled、NVVSpeech-500、XMLY-600和XYZ-1800，综合分满分100分，分数越高越好。本文模型四集平均综合分为64.46，超过最强可比模型StepAudio 3 Chat Preview的58.43，相差6.03分。在同一XMLY-600上六类Macro-F1为65.24%，高于该模型的61.59%，方向一致，呼吸F1较标注教师Qwen3.5-Omni-Plus提升14.40–31.57个百分点，例如XMLY-600上从17.13%升至37.59%，召回从9.44%升至25.04%，但伴随精度下降。代价同样明确，自然平台音频上呼吸召回仅为XMLY-600的25.04%和XYZ-1800的21.97%，该两集上Gemini 3.1 Pro Preview靠更高召回取得更好呼吸F1，XYZ-1800上带标记转写错误率从教师的5.13%升至6.10%，约3万次人工复核也只修复了部分遗漏。

**适用边界与深读导览：** 结论成立依赖六类离散常见事件、中英文、单句最长30秒以及每处可听辨呼吸都标注的敏感规则，罕见长尾类别、与语音重叠的连续事件、耳语喊叫歌唱等风格不在本次范围，训练子集的价值和去重收益也未验证，测试参考完整度会改变排名。想深究挖掘漏斗阈值、六类声学边界、采样配额与训练推理配置可查方法概述和细节详述，想核对分语言组分数、每类F1与WESR重标前后对比可查实验结果。

## 🔗 开源与复现资源

- 第三方资源：<https://www.ximalaya.com/> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.xiaoyuzhoufm.com/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：为什么话语加笑声哭声的联合转写总被漏标拖累

刚接触语音的研究生可以这样理解任务：输入是一段自然语音，输出是一串文字加事件标记。论文把目标限定为 6 类非言语发声，分别是呼吸、笑、哭、咳嗽、清嗓和叹息，标记直接插在词之间，例如示例输出保留词汇内容并在相应位置插入呼吸标记。输出不带起始结束时间戳，只用标记相对词序表示哪里发生了 1 次事件，同一类别重复出现算作多个独立事件。为了分析，论文把输出中的事件抽成类别加前面词数的序列，保留顺序和重数。

这类任务的难点不在模型结构新颖，而在监督信号本身不可靠。公开语料里自发呼吸等事件覆盖不足，录制条件也偏窄，而自动标注的审计发现两类系统偏差：一是呼吸被大量漏掉，二是不同事件类别之间互相混淆。如果训练标签长期缺呼吸，模型就缺少对可闻呼吸的显式监督；如果评测参考本身漏标，模型多检出真实呼吸反而会被记为误报。挑战赛背景也指出呼吸是公认的弱项，这正是本文把呼吸作为筛查重点的原因。

已有路线一部分做孤立发声分类，一部分做自然语音的可扩展标注，还有工作把词与事件联合识别形式化并提出位置敏感评测。同期挑战方案有的从真实媒体挖掘自发事件，有的用平方根采样缓解长尾。本文的不同在于把扩大事件覆盖和修补标注放到同一循环里：先用约 170000 条公开弱标签做种子，再从约 500000 小时内部音频中渐进挖掘约 630000 条，最后用 5 轮交叉审核加全库呼吸筛查把总量做到约 800000 条。理解后文的关键是记住，数据量增长和标签修正是交替发生的，而不是先爬完数据再统一清洗。

### 方法全景：一条语音如何走完挖掘筛查与五轮修正

沿着一条内部长音频看全流程会更清楚。原始长音频先做格式归一，用 Demucs v4 分离人声，再用语音活动检测和说话人切分切成 30 秒以内的短句。切分时保留分离流与原始流的对应关系，粗筛用原始音频片段，细分和训练用切分后的短句。接着 Step-Audio-R1.1 在原始片段上做粗粒度副语言标注，保留约 80000 小时；第一轮后得到的 NVVASR 模型再做细粒度事件筛查，保留约 30000 小时；Qwen3.6-27B 检查预测文本，过滤不完整句子和异常转写，保留约 26000 小时。由于呼吸样本远多于其余 5 类之和，最后做类别均衡采样，只选 630000 条约 1400 小时进入逐轮标注。种子公开语料同样先经过第一轮完整修正，才用来支撑后续扩张。

**渐进式数据挖掘 × 迭代监督精化：** 渐进式数据挖掘负责从五十万小时内部音频中逐轮筛出含目标事件的候选，迭代监督精化负责用交叉审核和人工修正把候选变成可靠转写，二者交替进行使语料规模和标签质量同步增长。

下面这段导读帮你带着问题看总体框架图，重点是三栏之间的数据流向和两条选样路径在何处汇合。

[![原论文 Figure 1：Overview of progressive data mining and iterative supervision refinement.](https://arxiv.org/html/2611.26000v1/framework.svg)](https://arxiv.org/html/2611.26000v1/framework.svg)

*论文图 1：Overview of progressive data mining and iterative supervision refinement（原论文 Figure 1）。*

框架图从左到右分为数据扩展、迭代监督精化和识别三部分。左侧显示从 500000 小时逐级收缩到 630000 条的过程，中间显示分区 A 与分区 B 分别训练又互相审计，分歧走教师标注为银标签保留在分区内，一致或教师更新后的全部样本再经过全库呼吸筛查，挑出的子集经人工确认后加入受保护的金集合，右侧是最终单个 1.7B 模型直接从音频生成文字加 6 类标记。底部标注第一轮 170000 条、第二轮增加 200000 条、第三至第五轮再增加 430000 条，总计约 800000 条。图中金标签回流到两个分支的训练输入，而银标签和保留标签留在各自的分自动区，这是理解后续公式的关键。

挖掘各阶段保留的音频时长如下，单位为小时，数值保留原文写法，筛选标签只用于选候选，完整训练目标还要靠后文的标注轮次建立。

| Mining stage | Audio (h) |
| --- | --- |
| Internal raw-audio pool | 500,000 |
| After Step-Audio-R1.1 screening | 80,000 |
| After NVVASR screening | 30,000 |
| After text-quality filtering | 26,000 |
| After class-balanced sampling | 1,400 |

从 500000 小时到 1400 小时的剧烈收缩说明，大部分原始音频并不含目标事件或通不过文本质量关。代价是前端分离、切分和 2 级模型筛查的计算开销，以及文本过滤可能丢掉口语化但有效的样本；收益是进入昂贵教师和人工环节的候选密度大幅提高。限制在于内部音频以中文为主，英文和多样场景的覆盖仍要靠公开种子和后文的评测集来检验。

### 核心机制之一：交叉审核如何只把分歧样本交给教师

交叉审核要解决的是教师太贵不能全量重标的问题。做法是把自动标注样本分成两个不相交分区，Qwen3-ASR 在一个分区加共享金集合上训练，Qwen3-Omni 在另一个分区加共享金集合上训练，然后各自去审核对方分区的当前标注。新批次同样一分为二，分别由 2 个模型给出初始标签再交换审核。审核转写与当前标注不一致的样本，才交给 Qwen3.5-Omni-Plus 按固定 6 类提示重新标注，教师输出直接替换为银标签；一致的样本保留原标签。自动重标的样本保留原分区归属，两个分支按更新后的分区加累积金集合重新训练。

**交叉审核 × 教师重标注：** 交叉审核由两个异构模型互查对方分区，只挑转写不一致的样本送交教师，教师重标注指 Qwen3.5-Omni-Plus 按固定提示直接给出替代标签作为银标签，前者省教师开销，后者统一疑难样本的裁决口径。

统一声学标注标准是这套分工能成立的前提，否则教师与人工会按不同口径裁决。论文把种子语料的异名标签先归 1 到 6 类，第一轮就按公共定义纠错，教师提示和人工指南此后固定不变。呼吸采用敏感纳入规则：只要能听辨为呼吸就标注，包括轻而短的吸气呼气和话语间呼吸，不设强度或时长门槛，风声、麦克风噪声和单纯发音动作不算呼吸。笑与哭要求有可闻的笑声或哭声，单纯愉快或悲伤语气不算事件；咳嗽与清嗓必须互判；叹息要求有可闻的表现性呼气，单纯长呼气或语气词不够。无目标事件的纯语音保留纯文本，无词只有事件时可只含标记。

6 类声学标准的原文表述如下，阅读时注意呼吸与其他 5 类在措辞上的差异，呼吸强调全部可闻都要标，其余类别强调与相近语气或动作的边界。

| Class | Acoustic criterion |
| --- | --- |
| Breath | Audible, identifiable inhalation, exhalation, or speech-related respiration, including quiet and brief breaths. No additional intensity or duration threshold applies. Wind, microphone noise, and speech articulation alone do not qualify. |
| Laugh | Audible laughter, including chuckles, giggles, and crowd laughter. Cheerful speech alone is insufficient. |
| Cry | Audible sobbing, whimpering, wailing, or a clearly crying voice. A sad tone or sad linguistic content alone is insufficient. |
| Cough | An audible explosive cough, distinguished from throat clearing. |
| Throat clearing | Audible clearing of the throat, distinguished from coughing. |
| Sigh | An audible expressive breath release. A spoken interjection or a long exhalation alone is insufficient. |

这套标准的收益是教师、人工和评测参考共用同一把尺子，跨轮次可比；代价是呼吸标注量会明显膨胀，对评测容差和误报惩罚更敏感。限制是轻呼吸的可听性仍依赖耳机、音量和标注员听力，投票和终审只能缓解而不能消除主观差异，这也是后文呼吸精度与召回需要权衡的根源。

### 核心机制之二：全库呼吸筛查如何找回被一致同意漏掉的事件

只靠分歧送教师会漏掉一类错误：如果原标注和审核模型同时漏掉同一个呼吸，两份转写一致，样本就逃过重标。教师本身也偏保守，在喜马拉雅和宇宙播客两个集合上呼吸精度超过 80%，但召回只有约 9% 到 11%。为此论文在交叉审核和教师更新之后，对全库所有语音再做 1 次呼吸筛查，包括审核一致和刚被教师改过的样本。筛查用两个互补模型：Multilingual-NVASR 是在 6 个公开语料上按统一分类微调 SenseVoice-Small 得到的专用识别器，能在词序列中定位呼吸；PANNs CNN14 是为大规模声音事件预训练的网络，在此只判断整条语音是否含呼吸，不转写文字也不定位。只要保留或更新后的转写中没有呼吸标记，而任一检测器判为含呼吸，就进入可能漏检候选，再选子集送人工按公共标准纠正类别、个数和相对词序。

**Multilingual-NVASR × PANNs CNN14：** Multilingual-NVASR 在词序列上下文中定位呼吸标签，PANNs CNN14 只判断整条语音是否含有呼吸声，前者提供位置信息，后者提供与转写无关的声学证据，并集筛查能发现双方同时漏掉的呼吸。

人工确认的标签按轮次累积并受保护。设第 t 轮新增人工确认的音频转写对集合为新增部分，共享金集合按并集方式增长，自动分区的样本一旦被人工确认就移出金集合之外的自动区，不再被自动覆盖。教师生成的银标签和保留的自动标签留在各自的分自动区。5 轮共约 30000 次人工检查参与这一过程。

\[\mathcal{G}^{(t+1)}=\mathcal{G}^{(t)}\cup\mathcal{H}^{(t)}.\]

该式中左侧为下一轮的共享金集合，右侧为本轮金集合与本轮新增人工确认集合的并集。它只描述金集合的单调累积，不涉及梯度或优化，含义是人工修过的样本越积越多且不回退。实际训练时每个分支用更新后的自动分区加全部金样本重新训练，公式对应的训练分支划分见原文第二式。收益是针对性找回呼吸等漏检，代价是全库双模型推理和人工听审的成本，且只选子集送审意味着仍有漏网。限制是筛查偏向呼吸，其他类别的共同漏检不在此通道内解决。

### 训练目标与采样：最终识别器如何被事件加权和配额约束

5 轮结束后，论文微调最终的 Qwen3-ASR-1.7B 识别器，新增 6 个原子事件标记，直接从音频生成文字加标记。训练保留纯语音样本以维持文字转写并抑制无依据插入，剔除含非目标或非法标记的标注，音频上限 30 秒，训练输入采样率 16 kHz，上游预处理用 24 kHz。硬件为八块英伟达 A800 八十吉显存卡，每卡批量 8 条，梯度累积一步，全局批量六十四，学习率万分之二并有 500 步热身加余弦衰减，权重衰减 1% 加梯度裁剪，半精度加梯度检查点，最多 50 个周期每周期 20000 条曝光，每五百步按验证综合分数保留前三检查点，10 次评估无提升早停，随机种子四十二。

目标函数是对有监督词元位置的加权负对数似然。由于事件标记在转写中稀疏，等权训练会被词汇预测主导，因此目标事件词元权重为二，其余有监督词元权重为一，提示词和填充位置被掩掉，词与事件联合训练。

\[\mathcal{L}(\theta)=-\frac{\sum_{(i,j)\in\mathcal{V}}w_{ij}\log p_{\theta}(y_{ij}\mid x_{i},y_{i,<j})}{\sum_{(i,j)\in\mathcal{V}}w_{ij}}.\]

该式分子是对批量中有监督位置的加权对数概率求和取负，分母是权重和，权重即上文的二与一之分，条件概率表示给定音频和此前词元时预测当前词元的概率。它约束的是词元级别的拟合，不单独约束事件位置容差，位置容差只在评测对齐时体现。原文未披露逐层梯度路径细节，只能按证据说它是全参数微调的监督目标，不猜测冻结或停止梯度。

采样采用保守再平衡：既不用原始长尾分布，也不用完全均衡分布。每周期 20000 条曝光中，12000 条来自含事件池，8000 条来自无目标标记语音；多类别样本归入其最少见标签所在池，并列时按固定类序，池小于配额时有放回采样。

| Sampling pool | Exposures per cycle |
| --- | --- |
| Breath | 4,000 |
| Laugh | 2,000 |
| Cry, cough, throat clearing, sigh | 1,500 each |
| Speech without target tags | 8,000 |
| Total | 20,000 |

配额保留呼吸和笑更大的份额，其余 4 类各 1500 条，既缩小头尾差距又保留原始分布的部分形状。收益是稀有类能被稳定监督，代价是偏离真实先验，可能增加误报；限制是配额凭经验选定，未做数据价值评估，冗余和低价值样本仍会占用训练预算。

**银标签 × 金标签：** 银标签是教师对分歧样本的自动输出，可在后续轮次被覆盖，金标签是人工按统一声学标准确认的转写，一旦进入共享集合就不再被自动改写，二者分离使人工积累的修正不会被模型回退。

推理时用贪心解码、自动语言识别和 256 词元上限，教师和筛查模型只用于建数据，部署只用单个微调模型。论文表示计划发布模型权重、推理代码、4 个评测基准、标注指南和评测代码，但本次收到的来源仅为第三方音频站点链接，不能据此写作者资源已公开。

### 主实验验证：综合分数领先来自哪里又在何处收窄

评测用冻结的挑战赛第一赛道实现在 6 类上的投影。预测文本先与参考做最小编辑对齐，预测标记映射到参考文本坐标，类别相同且位置在 5 个汉字或两个英文词容差内才算命中，一对一匹配先最大化命中数再最小化位置误差。综合分数由事件微平均、平均标签距离和带标签文本错误率加权而成，权重分别为 70%、20% 和 10%，分数越高越好，距离和错误率越低越好。中文含汉字参考走中文模式，其余走英文模式，4 个主要基准取语言组平均后再等权平均，原 WESR-400 只做对照不计入平均。

\[\begin{split}S_{\ell}=100\big[&0.70F_{1,\ell}^{\mathrm{micro}}+0.20(1-\mathrm{mNTD}_{\ell})\\ &+0.10(1-\min(\mathrm{Err}_{\ell},1))\big].\end{split}\]

该式中第一项为组内事件微平均，第二项为一减平均标签距离，第三项为一减截断后的带标签文本错误率，乘一百后为零到一百的组分数。平均标签距离在有目标事件的参考上平均，惩罚错类、漏检、多检、顺序和位置；带标签文本错误率把标记当原子词元计入字错率或词错率。宏平均是 6 类各自合并计数算 F1 再平均，更能反映稀有类。

微平均 F1 把所有事件的命中合并计算，宏平均 F1 先按呼吸、笑等 6 类分别算 F1 再平均，综合分数再把微平均 F1、平均标签距离和带标签文本错误率按 7 比 2 比一加权，三者分别反映总体命中、类别均衡和位置与文字质量。

9 个模型的比较口径是同一套 6 类投影和同一参考，通用音频语言模型按提示转写并输出 6 类标记，专用识别器用原生转写接口。4 个主要基准共 3306 条约 8.47 小时，WESR 重标后事件从五百八十三增至一千零五，呼吸从一百七十二增至五百一十，NVVSpeech-500 相对均衡，两个平台集合呼吸占比分别约为 57% 和 53%。

主要结果的完整矩阵如下，分数为零到一百，宏平均为百分比，平均列为 4 基准等权平均，加粗与下划线分别标最好与次好。

|  | WESR-R | WESR-R | NVVSpeech | NVVSpeech | XMLY | XMLY | XYZ | XYZ | Mean |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Score | Macro | Score | Macro | Score | Macro | Score | Macro | Score |
| Multilingual-NVASR | 51.68 | 37.44 | 38.60 | 35.32 | 39.03 | 38.57 | 45.59 | 42.75 | 43.73 |
| MOSS-Audio-8B-Instruct | 34.90 | 31.98 | 37.40 | 31.52 | 26.72 | 29.33 | 30.00 | 28.72 | 32.26 |
| Qwen3-Omni-30B-A3B | 22.94 | 17.84 | 13.61 | 19.82 | 31.23 | 33.86 | 29.91 | 29.94 | 24.42 |
| Step-Audio-R1.1 | 22.05 | 20.43 | 21.13 | 23.89 | 26.39 | 31.03 | 25.03 | 32.25 | 23.65 |
| Qwen3.5-Omni-Plus | 55.50 | 57.47 | 65.08 | 63.43 | 47.45 | 55.33 | 62.26 | 64.86 | 57.57 |
| StepAudio 3 Chat Preview | 60.38 | 58.15 | 61.41 | 61.04 | 53.92 | 61.59 | 58.00 | 64.52 | 58.43 |
| Doubao-Seed-2.1-Lite | 53.11 | 51.15 | 60.51 | 58.40 | 35.78 | 42.55 | 37.94 | 42.46 | 46.84 |
| Gemini 3.1 Pro Preview | 61.36 | 60.67 | 57.05 | 60.18 | 56.37 | 61.39 | 51.85 | 58.94 | 56.66 |
| Xing-Audio-NVVASR | 66.40 | 63.91 | 68.58 | 69.20 | 58.15 | 65.24 | 64.69 | 71.73 | 64.46 |

总体上最终模型在 4 个主要基准的综合分数和 6 类宏平均上均为第一，平均综合分数为 64.46 分，超过最强对照约 6 分，也超过标注教师约 6.9 分和最强公开权重基线约 20 分，单基准领先幅度约为 1.8 到 5 分。收益来自修补后的呼吸加哭和叹息等类别的综合提升；代价是模型仅 1.7 B 且训练分布经人工配额调整，对自然平台语音的呼吸召回仍有限。限制是比较依赖本文敏感的呼吸口径和容差设置，换回原参考或收紧容差时排序可能变化，后文 WESR 对照正是例证。

### 呼吸与全文质量：精度召回如何交换以及谁仍占优

把呼吸单独拆开看能更清楚教师的保守倾向。教师在两个平台集合上精度高但召回极低，本文模型在 4 个基准上都把召回拉起 10.9% 到 33.5，精度有所回落，但 F1 提高 14.4 到三十一点 6 个百分点。以喜马拉雅集合为例，召回从 9.44% 升至 25.04%，F1 从 17.13% 升至 37.59%。这种交换是敏感口径的必然结果：多标轻呼吸必然增加命中，也必然增加把噪声判为呼吸的风险。

呼吸精度召回与 F1 的完整对照如下，单位均为百分比，数值保留原文精度，加粗与下划线含义同主表。

|  | WESR-R | WESR-R | WESR-R | NVVSpeech | NVVSpeech | NVVSpeech | XMLY | XMLY | XMLY | XYZ | XYZ | XYZ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | P | R | F1 | P | R | F1 | P | R | F1 | P | R | F1 |
| Multilingual-NVASR | 86.57 | 22.75 | 36.02 | 43.05 | 38.24 | 40.50 | 73.68 | 15.15 | 25.13 | 73.38 | 13.67 | 23.04 |
| Qwen3.5-Omni-Plus | 76.70 | 15.49 | 25.77 | 39.78 | 21.76 | 28.14 | 92.42 | 9.44 | 17.13 | 83.50 | 11.07 | 19.55 |
| StepAudio 3 Chat Preview | 64.29 | 30.00 | 40.91 | 32.91 | 30.59 | 31.71 | 72.41 | 16.48 | 26.85 | 67.15 | 20.72 | 31.67 |
| Gemini 3.1 Pro Preview | 47.42 | 56.10 | 51.40 | 20.68 | 57.65 | 30.43 | 41.66 | 54.40 | 47.18 | 35.50 | 55.53 | 43.31 |
| Xing-Audio-NVVASR | 69.06 | 49.02 | 57.34 | 39.38 | 52.35 | 44.95 | 75.35 | 25.04 | 37.59 | 74.73 | 21.97 | 33.95 |

即使如此，呼吸仍是短板。在重标 WESR 和 NVVSpeech 上本文模型呼吸 F1 最高，但在两个平台集合上更高召回低精度的模型反而 F1 更高，本文模型在喜马拉雅只找回约 1/4 参考呼吸，在宇宙播客只找回约 5 分之一。分到每类看，本文模型在平台集合上的哭和叹息提升明显，例如喜马拉雅哭提高约十八个百分点、宇宙播客叹息提高约十五个百分点，但在重标 WESR 上的哭和叹息，以及部分集合上的咳嗽和清嗓仍弱于教师。全文质量方面，平均标签距离在 4 个基准上都下降，但带标签文本错误率只在 3 个基准下降，在宇宙播客上错误率从 5.13% 升至 6.1%，尽管距离有所改善，说明事件命中改善不一定换来整句转写改善。

下面这组柱状图的导读聚焦教师与最终模型在 6 类上的此消彼长，重点看呼吸与哭叹息的相对变化。

[![原论文 Figure 2：Per-class event F1 for Xing-Audio-NVVASR and the annotation teacher on all four primary benchmarks.](https://arxiv.org/html/2611.26000v1/per_class_f1.svg)](https://arxiv.org/html/2611.26000v1/per_class_f1.svg)

*论文图 2：Per-class event F1 for Xing-Audio-NVVASR and the annotation teacher on all four primary benchmarks（原论文 Figure 2）。*

图中 4 个子图分别对应 4 个主要基准，纵轴为事件 F1 百分比，横轴为 6 类，浅色为教师、深色为最终模型。可见呼吸柱深色普遍高于浅色但绝对高度仍偏矮，哭和叹息在平台子集上深色优势明显，而咳嗽在部分子集上浅色更高。结合上表可知，柱高差异来自召回拉起与精度回落的净效应，不能只看单柱高低就断言某类已解决，尤其在稀有类样本很少时单柱波动可能很大。

### 诊断性对照：为什么多加人工标注一度让旧评测变差

论文记录了 1 次反直觉现象：在其他训练条件不变时，增加 24000 条人工标注后，原 WESR-400 综合分数从 72.69 降至 65.10，呼吸 F1 从 57.23% 降至 47.94%。作者回到音频逐条听辨，发现原参考漏掉大量可闻呼吸，模型多检出的真实呼吸被记为误报，旧参考已不适合衡量呼吸检出能力的提升。于是同一批 427 条音频按可闻即标口径重标，呼吸从一百七十二增至五百一十，多类别记录占比从 10.8% 升至 39.1%，得到 WESR-400-Relabeled。

两种参考下是否加入人工数据的对照如下，分数为零到一百，F1 为百分比，变化列为加人工后的差值，其他训练条件固定。

| Added human data | 0 | 24k | Change |
| --- | --- | --- | --- |
| Original WESR-400 references |  |  |  |
| Composite score | 72.69 | 65.10 | −7.59 |
| Breath F1 | 57.23 | 47.94 | −9.29 |
| WESR-400-Relabeled references |  |  |  |
| Composite score | 60.43 | 66.40 | +5.97 |
| Breath F1 | 36.50 | 57.34 | +20.84 |

在重标参考下结论反转：综合分数从 60.43 升至 66.40，呼吸 F1 从 36.5% 升至 57.34%，提高约 20.8 个百分点；6 类中有 4 类提高，但哭和叹息仍低于未加人工的基线。原参考下 6 类 F1 全部下降，重标后四升两降，说明测试标签遗漏会系统性掩盖人工监督的收益。收益是更完整的参考能还原人工修正的真实价值；代价是重标依赖多人投票加终审，成本高且仍受可听性主观影响。限制是该对照只在 WESR 音频上成立，不能推广为人工数据在所有分布上必然有效，也不能说明 24000 条就是最优增量。

### 适用边界：何时值得尝试以及复现前先核对什么

把结论放回成立条件中看会更稳妥。领先结论依赖 4 个条件：一是采用敏感呼吸口径和 5 个汉字或两个英文词的位置容差，二是 4 个主要基准等权平均且原 WESR 不计入平均，三是教师与筛查模型只用于建数据而部署只用单个模型，四是训练保留纯语音和配额采样以抑制无依据插入。换掉任一条件，例如用回偏严的呼吸参考或只看整句错误率，排序和幅度都可能变化，宇宙播客上错误率上升就是提醒。

方法假设的边界也很明确。训练数据仍有大量遗漏，论文只纠正了其中一部分，更完整的纠正能带来多少增益尚未探索；约 800000 条中存在冗余和低价值样本，但未做样本价值评估，500000 条高质量可能已够用、更大规模劣质标注反而更差的观察仍是推测；事件覆盖只限 6 类常见离散发声，稀有长尾和与语音混叠的连续事件不在范围内。工程上前端分离切分、2 级筛查和全库双模型推理都有开销，约 30000 次人工检查是主要人力成本，复现时应先准备好听音指南和投票流程，而不是先堆算力。

对刚入门的读者，建议按顺序行动：先用公开种子和本文的 6 类边界复现交叉审核的小循环，确认分歧送教师的比例和银标签质量；再接入呼吸筛查的人工抽查，重点核对轻呼吸的纳入一致性；最后才扩大挖掘并调配额。是否值得尝试取决于你的场景是否容忍为找回轻呼吸而增加误报，以及是否有能力维护同一套声学标准。论文表示将发布权重、推理代码、基准、指南和评测代码，但按本次来源只能说计划发布，不能写已公开或可下载，引用第三方站点链接也不代表作者已开源。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.26000v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
