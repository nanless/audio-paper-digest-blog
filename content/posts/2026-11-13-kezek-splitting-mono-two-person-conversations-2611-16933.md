---
title: "Kezek: Splitting Mono Two-Person Conversations into Per-Speaker Tracks for Full-Duplex Dialogue Data"
date: 2026-11-13
draft: false
tags: [语音分离, 多任务学习, 课程学习, 单通道, 高效推理]
categories: [论文速递]
description: "Kezek 先用整段录音固定两人的身份与活动，再用条件时域分离器执行该决定并强制两条轨道之和等于输入；在 Open Yap 和未见过的 CallHome 电话语音上，它以完整覆盖为基础减少了泄漏与通道交换、提高了短回复保留并快约 4–5 倍，但系统只处理恰好两人、离线、无注册且不做语音修复，极安静短回复仍是主要缺口。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.16933"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Kezek：把单声道双人对话拆成逐说话人轨道"
paper_digest_original_title: "Kezek: Splitting Mono Two-Person Conversations into Per-Speaker Tracks for Full-Duplex Dialogue Data"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.16933v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.16933v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.16933v1.pdf"
paper_digest_primary_task: "语音分离"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-separation","label":"语音分离"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"method","id":"method.curriculum","label":"课程学习"},{"facet":"setting","id":"setting.single-channel","label":"单通道"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "多任务学习"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "Kezek 先用整段录音固定两人的身份与活动，再用条件时域分离器执行该决定并强制两条轨道之和等于输入；在 Open Yap 和未见过的 CallHome 电话语音上，它以完整覆盖为基础减少了泄漏与通道交换、提高了短回复保留并快约 4–5 倍，但系统只处理恰好两人、离线、无注册且不做语音修复，极安静短回复仍是主要缺口。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bagzhan Karl"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Alizhan Karl"}]
paper_digest_abstract_sha256: "c5a97b332afbe2c08e797655c9fc08d19cad6a1db64b22112fa8b706b5b947a5"
paper_digest_sidecars: {"citation.bib":{"sha256":"6155c1d76bf74f2ed2ef854f7655657e326c8b8bc78c6dd510f34f9d136d4ee9","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16933/citation.bib"},"citation.json":{"sha256":"0b882c686841062964573647984185ac9247499180b13052a595b31e467f94e4","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16933/citation.json"},"citation.ris":{"sha256":"373be102f5224b4721e47b216f65b3c2d27b1f01a80431e43b1ee815f5d906ad","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16933/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"235f0be31ff0e3350e9c736a5709b3a7859309ef926ab3f370c5f894bb9bb893","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16933/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "f623f2f3489e5d15a5cc439c1d6e0d5b78ca8b212d4d2830122113d1c798ad47"
paper_digest_api_reader_plan_sha256: "2d101b28577bc6048d772fd6b449cae016f6a8d761f2af88c5eda82365d0360e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "6ddd38db91c00572bd52069bc2cf410bbb651de070225f3427e28877e0a7e48c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "79d691bfe3dc2fdb9560ca56cbfe1cd77c051afb80fe2bcb03d085cb2408e4e6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8dd77a395322b16c58279517763b8b0c1aa017f2bd00033bc13a556fa09ab330"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "497dc0277e0eb2803db336e7ffb7f904220a53412d80d6e08f55059a674e2a9e"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Kezek：把单声道双人对话拆成逐说话人轨道

> 英文题目：*[Kezek: Splitting Mono Two-Person Conversations into Per-Speaker Tracks for Full-Duplex Dialogue Data](https://arxiv.org/abs/2611.16933v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation) → [语音分离](/audio-paper-digest-blog/papers/?concept=task.speech-separation)
- **研究方法**：[多任务学习](/audio-paper-digest-blog/papers/?concept=method.multitask)；[课程学习](/audio-paper-digest-blog/papers/?concept=method.curriculum)
- **研究条件**：[单通道](/audio-paper-digest-blog/papers/?concept=setting.single-channel)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.9/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.4/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Bagzhan Karl：机构信息未能在本次解析中与作者逐人可靠绑定
- Alizhan Karl：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

论文把单声道、恰好两人的对话分成与输入等长同时序的两条单轨，重叠和短回应留在原说话人轨；已有“说话人日志→生成式修复”级联会换轨、丢短回应、泄漏或丢弃部分音频。Kezek 先由相位不敏感的说话人指纹提取录音级说话人向量、固定整段录音的两个身份，再由 PairNet 逐帧输出两人活动提示；这些提示与说话人向量送入 KezekTSE-L，最后用混合一致性投影强制两轨相加等于输入。训练时用词边界门控标签减少近讲串音造成的假活动，分离器先学 Libri-Light 合成重叠，再学 Open Yap 混合并扩宽，最后适配自有指纹；说话人指纹以全通滤波增强降低相位依赖。评测用短回应保留率、泄漏、无换轨率和覆盖率，区分有参考轨的 Open Yap 与仅有话语级标注的 CallHome。在 Open Yap test 的 as recorded 条件下，Kezek 的短回应保留率为 0.830、覆盖率为 1.000、无换轨率为 0.934，分别高于 pyannote→DialogueSidon 的 0.687、0.735 和 0.793。在同一 Open Yap test 的 as recorded 条件下，Kezek 的泄漏为 -13.9 dB，低于 pyannote→DialogueSidon 的 -10.1 dB，泄漏更少；单张 RTX PRO 6000 上推理吞吐为 231 音频小时/GPU 小时，高于 pyannote→DialogueSidon 的 51 音频小时/GPU 小时，训练也用该卡，训练耗时原文未披露。在仅有话语级标注、两系统均未见过的 CallHome English 上，Kezek 在他人说话时的短回应保留率为 0.796，高于 pyannote→DialogueSidon 的 0.711；同一数据集的推理吞吐为 232 音频小时/GPU 小时，高于 pyannote→DialogueSidon 的 46 音频小时/GPU 小时。在双方都返回的 Open Yap 音频上，Kezek 的短回应保留率为 0.859，低于 pyannote→DialogueSidon 的 0.865；外部管线主要因丢弃部分输入，另因泄漏和换轨而落后，剩余的主要失败是较响声音下的安静短回应，系统限于恰好两人、离线、无注册且不恢复音质，训练与定量评测仅英语。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/Manifestro/kezek> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/manifestro/kezek-v1> — 链接可访问（HTTP 200）

- 第三方资源：<https://manifestro.io/models/kezek> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 单声道双人对话要恢复成什么

全双工语音对话模型需要在听与说的同时学习插话、退让、不抢话的回应和“嗯”“对” 等反馈，训练样本通常要求每个参与者各占一个通道。现实里大量播客、访谈和电话只有一条单声道混合，Kezek 要处理的正是它：输入是 16 kHz、恰好两个人的任意长度录音，没有注册语音；输出是两条与输入等长、同一时间基准的轨道，分别给 A 和 B，并带逐窗口置信度清单。重叠必须拆到两条轨道，短回复必须留在实际说它的人那边。

这里的短回复按原文定义为持续时间小于 1 s 的话语，包含反馈词、应答和插话。输出长度和时序不能改变，是下游可直接拼成对话数据的前提；没有注册语音意味着系统要在录音内部自行找出两个声音。Kezek 只做拆分，不负责去噪、去混响或生成更干净的人声，这一点决定了它与生成式修复模型的差别。

### 已有系统分别解决了哪一段

说话人日志系统通常先在局部窗口判断活动，再把窗口用 ECAPA-TDNN 等说话人嵌入聚类连接；pyannote 使用端到端神经日志和 powerset 输出，目标说话人语音活动检测则用说话人轮廓条件化活动估计，并较擅长处理重叠。只要窗口连接出错，就会变成 Kezek 所说的通道交换。Kezek 的第一阶段改为在整段录音上找两个声音，再逐帧比较，不再做这种窗口连接。

语音分离一侧，Conv-TasNet 这类时域掩码网络和 TF-GridNet 这类时频模型能在合成混合上高保真分离重叠语音；目标说话人提取常用注册语音和 FiLM 条件化分离器。Kezek 的第二阶段也是 Conv-TasNet 风格，但它不使用额外注册语音，而由第一阶段的活动提示和两个人的声音轮廓共同条件化。

全双工数据一侧，dGSLM 和 Moshi 直接依赖双通道对话；DuplexChat 则用 pyannote 日志加生成式修复模型 DialogueSidon，从播客构造双人数据，但原文指出该工作没有测量通道交换和短回复。本文把这条公开级联作为外部基线，并保持其发布配置、不调参。需要注意，外部基线的输出是生成式的，不保证与输入逐样本对齐，因此不能拿它的重叠 SI-SDRi 与 Kezek 直接比较。

### 对话数据真正怕的是什么失败

平均分离质量不能直接回答对话数据是否有用。原文把失败拆成 3 类：通道交换把某段语音放到另一个人的轨道上，下游模型会学到错误的话轮；短回复被丢掉，尤其是和对方语音重叠、音量又低的反馈词；泄漏把对方的声音留在本人轨道中，使模型把自己的通道也当成包含 2 人。数据准备还要求返回整段录音并保持原时序，同时速度足以处理数万小时。

原文的短回复保留率按小于 1 s 的回复统计；在 Open Yap 上，回复在本人轨道上的能量与参考相差不超过 −6 dB 即算保留，并分开报告“压在对方语音上” 和“停顿中” 的回复。泄漏是在对方单独说话时，本轨残留能量相对该人能量的比例，越低越好。无交换率是没有任何 10 s 窗口被分给错误说话人的录音比例；覆盖率是输入时长中被系统返回的比例，任何被系统丢掉的部分都算损失。

能量判据本身很宽松：未处理混音复制到两条轨道可保留 0.99 的短回复，因为什么都没丢；但它没有分离，泄漏接近 0 dB。因此只报保留率会误导，所有表都要同时看泄漏。更严格的分析另用“存在且可听” 判据：输出在回复参考上的投影系数至少为 0.5，且投影后的回复能量不少于同一区间轨道其余部分的能量。

**短回复保留率 × 泄漏 × 覆盖率：** 短回复保留率统计小于 1 s 的回复有多少仍落在正确轨道上；泄漏统计一条轨道在另一个人单独说话时残留了多少对方能量；覆盖率统计输入时长中有多少被系统真正返回。三者必须一起看：把混音原样复制到两条轨道可以在宽松能量判据下保留几乎所有短回复，却几乎没有分离，泄漏会接近 0 dB；反之，过度过滤会降低泄漏和交换，却丢掉短回复或整段音频。组合起来才能判断一段对话数据是否既完整又可用于学习话轮。

### Kezek 的两阶段流程

Kezek 不要求一个短窗模型同时猜“目标在不在” 和“目标是谁”。它把决定拆开：第一阶段用说话人指纹在整段录音里找出两个声音，再由 PairNet 输出每 1 帧属于 A、B 的活动强度 aA(t)、aB(t)；第二阶段 KezekTSE-L 只在给定活动决定下分离，不重新决定谁是谁。整条流程没有注册语音，输入始终是原始单声道混合。

图 1 把主路径画成“整段录音找声音、逐帧判活动、条件化分离”3 段。读者可以先看左侧单声道输入怎样同时进入说话人指纹和 PairNet，再看两个声音轮廓和活动提示怎样进入分离器，最后确认两条输出轨道的时间关系和混合一致性。

> **看图路径：** 1. 先沿左侧单声道输入分成的两条路径看主流程；2. 再确认说话人指纹给出的两个声音轮廓和 PairNet 给出的活动提示在哪里交给第二阶段；3. 最后看右侧两条输出轨道以及 y_A + y_B = x 的约束

![原论文 Figure 1：The Kezek pipeline. Stage 1 decides activity and identity once for the whole recording; stage 2…](/audio-paper-digest-blog/images/papers/2611.16933/figure-1-b60a11688137e970.png)

*论文图 1。原论文 Figure 1:：“The Kezek pipeline. Stage 1 decides activity and identity once for the whole recording; stage 2 separates under that decision in 8 s chunks and its outputs always sum to the input.”。*

图中左侧的 mono mix x 是整段录音输入；上方说话人指纹产生两个声音轮廓，下方 PairNet 产生两条活动序列；右侧 KezekTSE-L 接收混合、活动提示和两个轮廓，输出 yA 与 yB。图中还标出 yA + yB = x，这说明分离器不能凭空增加或删除整段内容；阶段二是按 8 s 分块、6 s 跳步执行的，而阶段一声明的是整段录音上的身份与活动。

### 说话人指纹怎样为整段录音固定身份

说话人指纹负责把一个说话人的原始波形压成可比较向量。它输入原始 16 kHz 音频，卷积前端使用 5–4–4–4 的步幅，每 20 ms 产生 1 帧并做学习式对数压缩；随后是 6 层、256 维的 Conformer，注意统计池化后输出 192 维嵌入。整套前端只有 10.1 M 参数，替代 ECAPA-TDNN 后运行速度快 4.6 倍，原文给出 29 539 倍实时对 6 427 倍实时。

训练用 AAM-softmax，间隔 0.2、尺度 30，覆盖 Libri-Light、VoxPopuli 和 Open Yap 训练集中的 8 961 人，裁剪 1–3 s。为了区分相近声音，每个人还以 0.92 和 1.08 的语速生成“同胞” 副本，并当作不同类别；三元组损失让锚点与易混伙伴走同一条录音链，而正样本走另一条链，迫使嵌入不能把通道当成身份线索。录音链还包含随机形状的电话带和随机全通级联，后者在 60% 裁剪上使用。

相位敏感性是一个实际发现。同一电话带若零相位施加，第一版原始波形指纹的 EER 为 8.5%，而 ECAPA 为 9.2%；若使用带相位的 IIR 电话带，则恶化到 14.1% 对 9.1%；纯全通滤波只改相位，也把 EER 从 ECAPA 的 7.5% 推到 9.6%。加入随机全通训练后，这一差距大部分被抹平。按构造对相位不敏感的学习式复数滤波器加模值也能消除电话带敏感性，但原文报告它在干净对话语音上更粗，因此最终保留卷积前端加全通增强。

最终指纹在朗读语音和困难相似对上优于 ECAPA，也快 4.6 倍，但在完整录音链下的 Open Yap 对话语音上仍更差，EER 为 13.9% 对 11.7%；加入 1 558 个 VoxPopuli 说话人没有改变这个数，说明差距不是训练人数。Kezek 真正需要的是区分相似声音，在 Libri-Light 困难对上其 EER 为 6.8%，ECAPA 为 11.2%。

### PairNet 怎样在整段录音上判定两人何时说话

PairNet 有 11.8 M 参数，目标是避免说话人日志常见的窗口连接错误。它的编码器复用指纹的原始音频前端和 Conformer，每 20 ms 产生 128 维声音嵌入以及语音/重叠估计；另加一条 80 带、20 ms 跳步、按整段录音归一化的 log-mel 分支，用两层卷积处理，其投影初始化为零，因此可以在不改变已训练模型输出的情况下接入。

整段录音先用指纹以 1.5 s 窗、0.25 s 跳步聚成两个声音。两层 Transformer 解码器由两个声音共享，把每 1 帧与两个声音比较，并接收该帧指纹分别对两个声音的余弦；输出 aA(t) 与 aB(t)。推理以 10 s 窗、2 s 上下文运行，但 A、B 的身份由整段录音找到的两个声音固定，不需要再连接窗口。

训练损失是活动上的置换不变二元交叉熵，加上语音/重叠项和一个把找到的声音拉向标注声音的项；短于 1 s 的语句帧权重乘 4。训练用 40 s 裁剪，70% 来自 Open Yap 训练集并使用词门控标签，其中一半以真实短回复为中心；30% 是用 Libri-Light 和 Open Yap 片段合成的对话，包含同胞声音、短回复和重叠，全部经过录音链。活动阈值设为 0.3，第一阶段约处理 2 400 小时音频每 GPU 小时；没有 log-mel 分支和指纹余弦的早期版本约 15 900 小时，但整条流水线的运行时间由第二阶段主导。

**说话人指纹 × PairNet：** 说话人指纹把原始波形压成可比较的声音向量，并在整段录音上找出两个声音；PairNet 复用这套原始音频前端和 Conformer，把每一帧分别与两个录音级声音比较，再输出两条活动序列。前者提供“谁是谁” 的全局锚点，后者把锚点变成逐帧“谁在何时说”；组合后不需要像局部窗口那样再靠聚类连接身份，从而减少连接错误变成通道交换的机会。

### 条件分离器怎样执行既定的活动判断

KezekTSE-L 是 19.6 M 参数的 Conv-TasNet 风格分离器，编码器 N=512、卷积核 32、步幅 16，瓶颈 256、隐藏 768，8 个块重复 3 次。它接收混合波形、在瓶颈处加入的 aA、aB 活动提示，以及在每个块通过 FiLM 注入的 2 人轮廓，最后用对源的 softmax 预测两条掩码。活动的“谁在何时说” 来自第一阶段，分离器只负责按该判断把混合内容分到两轨。

为了不让输出丢掉输入，训练和推理都执行同一个混合一致性投影。

\[y_{i}\leftarrow y_{i}+\tfrac{1}{2}\left(x-y_{A}-y_{B}\right),\qquad i\in\{A,B\},\]

式中 x 是单声道混合，yA、yB 是分离器初步给出的两条轨道；x − yA − yB 是尚未被两轨解释的残余，每个轨道再加上一半残余，因此 yA + yB = x 精确成立。这个操作不会凭空生成或删除内容，只能把输入能量分配到两轨；如果第一阶段把身份或活动判错，内容仍可能被放到错误轨道。

推理时分离器在整段录音上以 8 s 分块、6 s 跳步运行。原文还试过只对重叠附近做一次额外分离，但在相同泄漏下保留了更少短回复，因此没有采用。这个选择说明系统把“整段连续执行” 看得比局部补丁重要，代价是分离器主导总运行时间。

**PairNet × KezekTSE-L：** PairNet 先为整段录音决定两人的活动与身份，输出 aA(t)、aB(t) 和两个声音轮廓；KezekTSE-L 把这些活动提示与轮廓作为条件，只估计两条掩码并在输入混合上执行分离，不重新判定谁是谁。分工的意义是把容易跨窗出错的“身份决定” 固定一次，把逐样本的“内容分配” 交给分离器；再配合输出和等于输入的约束，错误主要表现为把内容分错轨，而不是把内容删掉。

### 训练标签、录音链和分离课程

训练的第一个关键不是模型大小，而是活动标签。Open Yap 原始活动由每通道能量得到，近讲麦克风会拾取另 1 位说话人：只有对方说话时，头戴通道串音的中位数为 −16 dB，10–90 分位为 −23 至 −11 dB。因此 29% 的“活动” 帧没有任何本人词，约 80% 的标注重叠未被转写证实；用这些标签训练的第一版第一阶段模型在 36–46% 的对话中交换通道。给定参考活动代替自身预测时，同一流程完全没有交换，活动 F1 为 0.993，说明问题主要出在标签而非说话人识别。

词门控标签要求 1 帧既有能量，又落在本人某个词的 ±0.15 s 内；语音内部短于 0.3 s 的停顿被闭合。若不闭合，45% 的“短回复” 只是普通话轮碎片。按原文表 1 的原型结果，能量 VAD 的活动 F1 为 0.877/0.827，短回复为 0.731/0.711，无交换对话为 63.7%/54.0%；词门控后分别为 0.952/0.943、0.896/0.862 和 97.3%/96.5%，真实播客判断中的错误轨道比例从英文 25.5%、哈萨克语 28.6% 降到 3.6% 和 0%。

录音链以 0.8 的概率把训练音频通过混响、噪声、音乐、均衡、压缩、电话带和编解码；验证与测试同时在 2 通道干净相加的 clean 条件和预先渲染的 as recorded 条件下评测。这样训练时见到的串音、频带限制和相位变化，与部署时讨论的录音条件更接近，但原文没有声称它覆盖所有真实设备。

**词门控活动标签 × 录音链：** 词门控活动标签用本人词的时间范围重新定义哪些帧算活动，避免把近讲麦克风里的对方串音当成说话；录音链则把混响、噪声、均衡、压缩、电话带和编解码施加到训练音频上，让监督目标与真实退化条件对齐。前者纠正“标签把串音算成语音” 的错误，后者让模型见过部署时的通道变化；两者结合才同时减少错误活动标签导致的通道交换，并避免只在干净录音上成立。

分离器不能直接在自然 Open Yap 窗口上从零学会重叠。原文报告一个 2 M 的 TF-GridNet 能把 8 个窗口过拟合到 +20.2 dB，却在验证重叠上停留在 −1.4 至 +0.4 dB。有效的课程是先在 Libri-Light 的长而干净的合成重叠上训练中等模型，再转入 Open Yap 的合成重叠、自然窗口和 Libri-Light 重放，最后从该中等模型扩展成大模型；在相同混合上从零训练大模型则慢得多。

表 1 按阶段比较这条训练路径：窗口列是 Open Yap 验证重叠窗上的 SI-SDRi，流水线列是整条流水线在 Open Yap 验证集上的重叠 SI-SDRi，clean 与 as recorded 并列；每行的流水线数字只应与同一行相邻条件比较。

| Stage | Params | Steps | Synthetic | Window | Pipeline |
| --- | --- | --- | --- | --- | --- |
| TF-GridNet S, Open Yap, scratch | 2.0 M | 2.5 k | — | +0.37 / −0.02 | — |
| M, Libri-Light overlaps, scratch | 13.3 M | 50 k | +9.68 | +5.28 / +3.49 | — |
| M, Open Yap mixture | 13.3 M | 17.5 k | +9.98 | +7.55 / +5.09 | +9.49 / +7.01 |
| L, Open Yap mixture, scratch | 19.6 M | 12.5 k | +4.74 | +2.73 / +1.86 | — |
| L, widened from M | 19.6 M | 27.5 k | +10.75 | +8.75 / +6.15 | +9.86 / +7.65 |
| L, on our fingerprint profiles | 19.6 M | 15 k | — | +9.02 / +6.00 | +10.11 / +7.67 |

表中显示，从零训练的大模型在 12.5 k 步时窗口只有 +2.73/+1.86 dB，而从 13.3 M 中等模型扩展来的 19.6 M 模型达到 +8.75/+6.15 dB；最终换成 Kezek 自己的指纹轮廓后，窗口为 +9.02/+6.00 dB，原文同时报告泄漏从 −20.2 dB 降到 −23.0 dB，并在 as recorded 上有小幅代价。表中的“从零训练” 和“扩展” 是不同训练路径，不能把参数量单独当作原因。

每个说话人的参考不是干净源，而是该人语音经过同一录音链后，再加按 ai/(aA+aB) 分配的背景噪声；2 人都静音时权重为 0.5，因此两个参考始终相加为混合。每条轨道的损失写成：

\[\mathcal{L}=-\mathrm{SISDR}_{\text{act}}+0.5\,\lvert\Delta L\rvert-2\,\mathrm{SISDR}_{\text{ovl}}+\mathcal{L}_{\text{STFT}}+\mathcal{L}_{\text{reply}}+\mathcal{L}_{\text{leak}},\]

式中的负 SI-SDR 在本人活动帧上最大化分离，且上限为 30 dB；0.5|ΔL| 惩罚以 dB 计的电平误差；重叠帧另算 SI-SDR，并以 2 倍权重加入，避免稀少重叠被大量单人帧淹没；STFT 项是按混合归一化的多分辨率 L1 损失；回复项约束短回复电平。

泄漏项惩罚在对方单独说话时的残留能量，最低截到 −30 dB。训练时活动提示还会被扰动：边缘移动 ±40 ms、10% 短段被丢、3% 假警报，偶尔全部置零，使第二阶段能容忍第一阶段错误。优化器为 AdamW、bf16，单张 RTX PRO 6000；第二阶段 batch 16、4 s 裁剪，中等模型约 3.4 次迭代每秒，大模型约 2.1 次；单独推理时分别约 750 和 480 小时音频每 GPU 小时。

### 评测集、基线和方法是否可比

Open Yap 1K 是主要对话语料：英语双人对话，每人一个近讲通道，并有词级转写。原文按说话人划分 1 346/113/121 个对话为训练、验证、测试，任何人在一个划分中最多出现一次；测试取 121 个对话的前 300 s，分别在干净相加和预先渲染的 as recorded 条件评分。CallHome 英语有 128 个恰好 2 名标注说话人的电话通话，取前 300 s，共 10.7 h，两个系统都没训练过，且只用于评测，按 utterance 级标注评分而没有参考轨道。

所有能量指标在每条输出轨道上按该人单独说话的帧拟合一个增益，所有系统使用同一规则，避免生成式系统因整体电平变化受罚。轨道顺序按整段录音在两种排列中取更好的一种，模拟下游用户拿到数据后的选择。短回复、泄漏、无交换率和覆盖率的方向如前所述；重叠 SI-SDRi 只在 2 人同时说话的帧上计算，且要求输出与输入逐样本对齐，因此生成式外部管线的 SI-SDRi 没有可比性。CallHome 的回复判据改为：压在对方语音上的回复，其轨道至少比该轨道在对方单独说话时、±5 s 内泄漏进来的水平高 6 dB；停顿中的回复则与混合相差不超过 −6 dB。

**SI-SDR × 重叠 SI-SDRi：** SI-SDR 衡量一条估计轨道相对参考波形的尺度不变失真，越高越好；重叠 SI-SDRi 则只在两人同时说话的帧上计算分离改善，专门观察最稀少但最影响话轮的重叠段。两者搭配能区分“单人段大体正确” 和“重叠也真的被拆开”，但重叠 SI-SDRi 依赖输出与输入逐样本对齐，生成式且未对齐的输出不能与它直接比较。

外部系统是 DuplexChat 代码中发布的 pyannote → DialogueSidon 级联，使用 30 个采样步和固定随机种子，未做改动或调参；其 24 kHz 输出重采样到 16 kHz，并补偿全局延迟，残余延迟最多 4 ms。外部系统丢弃的音频都算损失并计入覆盖率，这使比较不仅看返回部分的质量，也看整段可用性。速度在单张 RTX PRO 6000 上测量。两系统输入和评测录音相同，但外部输出是生成式、非样本对齐，并且可能修复音质；Kezek 不修复，只拆分，所以重叠 SI-SDRi 不能跨系统横向比较，覆盖率与回复保留也必须结合泄漏解释。

### 主结果：整段返回与短回复

表 2 比较整段录音上的 Kezek 与公开 pyannote → DialogueSidon 级联：Open Yap 测试为 as recorded，CallHome 为未见电话语音；回复保留越高越好，泄漏越低越好，无交换率和覆盖率越高越好，速度是每小时 GPU 可处理音频小时数。两边使用相同录音和同一套评分规则，外部系统保持发布配置不调参，因此这首先回答“在该公开级联原样运行时，整段数据谁更可用”。

|  |  | Replies kept ↑ | Replies kept ↑ | Replies kept ↑ |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Set | System | all | over speech | in pause | Leak (dB) ↓ | No-swap ↑ | Coverage ↑ | h / GPU-h ↑ |
| Open Yap test | External | 0.687 | — | — | −10.1 | 0.793 | 0.735 | 51 |
|  | Kezek | 0.830 | — | — | −13.9 | 0.934 | 1.000 | 231 |
| CallHome | External | — | 0.711 | 0.798 | −9.7 | 0.797 | 0.816 | 46 |
|  | Kezek | — | 0.796 | 0.907 | −11.8 | 0.859 | 1.000 | 232 |

Open Yap 上，Kezek 的全部短回复保留从外部系统的 0.687 提高到 0.830，泄漏从 −10.1 dB 降到 −13.9 dB，无交换率从 0.793 提高到 0.934，覆盖率从 0.735 提高到 1.000，速度从 51 提高到 231 小时每 GPU 小时。CallHome 上，压在对方语音上的回复保留为 0.796 对 0.711，停顿中的回复为 0.907 对 0.798，泄漏为 −11.8 对 −9.7 dB，无交换率为 0.859 对 0.797，覆盖率仍为 1.000 对 0.816，速度分别为 232 小时每 GPU 小时与 46 小时每 GPU 小时。

这些数字支持“整段返回更多、总体泄漏更少、通道交换更少且更快”，但不能直接解释成在共同返回的音频上分离也更优。原文专门报告：在双方都返回的部分，外部管线的短回复保留与 Kezek 接近，Open Yap 为 0.865 对 0.859，CallHome 压在语音上的回复为 0.814；但外部在 Open Yap 共同返回部分的泄漏仍更差，为 −8.5 对 −13.3 dB。因此整段结果的大部分优势来自外部日志过滤丢掉的音频，其余才来自泄漏和交换。

电话语音更难：Kezek 在 CallHome 上有 14% 的通话发生通道交换，而 Open Yap 为 7%。在相同 Open Yap 测试运行中，Kezek 的重叠 SI-SDRi 为干净 +10.61 dB、as recorded +8.18 dB；短回复保留为 0.878 和 0.830，无交换录音为 0.967 和 0.934，泄漏为 −19.5 和 −14.9 dB。外部管线的重叠 SI-SDRi 为 −29 dB，但因其生成式输出不对齐，原文明确不作比较。按 230 小时每 GPU 小时计算，100 k 小时约需 430 GPU 小时。

### 损失出在第一阶段、第二阶段还是评测条件

表 3 只评第一阶段本身：在 40 个 Open Yap 验证对话、每个 300 s 的条件下，分别施加干净、完整录音链、混响、噪声、编解码和电话带，比较原型 WavLM + ECAPA + 4 头集成与 PairNet 的活动 F1 及短回复被放到正确人的比例。这个表回答“整条流水线的损失是否主要来自活动判定”，而不是直接比较最终两轨质量。

|  | clean | full chain | reverb | noise | codec | telephone |
| --- | --- | --- | --- | --- | --- | --- |
| Activity F1 |  |  |  |  |  |  |
| Prototype | 0.938 | 0.928 | 0.925 | 0.920 | 0.939 | 0.937 |
| PairNet | 0.938 | 0.924 | 0.923 | 0.919 | 0.937 | 0.932 |
| Short replies |  |  |  |  |  |  |
| Prototype | 0.904 | 0.886 | 0.873 | 0.846 | 0.901 | 0.893 |
| PairNet | 0.886 | 0.873 | 0.853 | 0.860 | 0.884 | 0.873 |

PairNet 在每种条件下的活动 F1 都接近原型：完整录音链为 0.924 对 0.928；短回复在噪声中反而更好，为 0.860 对 0.846，在其他条件下少 1.3–2 个百分点。按语境拆开，停顿中的短回复 PairNet 略好，为 0.911 对 0.904；压在对方语音上的短回复更差，为 0.853 对 0.876。PairNet 自身的开发过程把完整录音链下的短回复从第一版 0.779 提高到短回复权重乘 4 后的 0.857，再提高到加入 log-mel 分支和真实短回复中心裁剪后的 0.873。

组件交换进一步定位损失。20 个验证对话、每个 300 s 的交换实验中，干净条件下把原型的阶段一接到 Kezek 的指纹和分离器上，短回复为 0.896，和完整原型相同，并且重叠更好、泄漏更低；换成 Kezek 自己的阶段一时为 0.851，少 0.045。as recorded 下，相对完整原型的 0.851，损失分为阶段一 −0.026 和分离器与轮廓 −0.033。阶段一漏掉的回复在输出中直接缺失，降低阈值并不能把它们找回：把活动低到 0.15 的短突发也恢复，只增加 0.007；去掉活动提示另跑一次分离也没有找回更多。

把第一阶段当说话人日志器看，结论有明确条件。Open Yap 干净上，Kezek 阶段一的 DER 为 15.27%，pyannote community-1 为 25.11%；as recorded 为 19.31% 对 25.79%；但在 CallHome 上 Kezek 更差，为 30.05% 对 18.44%。Kezek 的说话人混淆很低，3 套数据为 0.5–2.0%，pyannote 为 3.0–4.4%。

其误差几乎都是假警报语音，来源是 0.3 的低阈值和闭合短停顿。把阈值提高到 0.7 只作敏感性检查时，DER 可降到 Open Yap as recorded 14.8%、CallHome 23.1%，但 Kezek 实际保留 0.3，以换取短回复。CallHome 的假警报在 0.7 时仍接近 10%，原文认为一部分可能来自缺少反馈词和笑声标注的参考本身。

### 安静短回复与负结果划出的上限

表 4 用更严格的“存在且可听” 判据，把压在对方语音上的短回复按相对另 1 人声音的音量分箱：更响、0 至 −10 dB、低于 −10 dB。它还给出理想比率掩码的上限，以及把标注活动直接交给分离器的结果；表中 clean 在括号内，as recorded 在前。这个比较回答的是：当回复很轻时，第二阶段到底还能不能从更响的对方语音下面把它取出来。

| System | All | Louder | 0 to −10 dB | Below −10 dB |
| --- | --- | --- | --- | --- |
| Ideal ratio mask | 0.938 (0.944) | 1.000 (1.000) | 1.000 (1.000) | 0.743 (0.784) |
| Kezek version 1 | 0.722 (0.804) | 0.965 (0.968) | 0.827 (0.907) | 0.171 (0.405) |
| Separator + labelled activity | 0.757 (0.804) | 0.947 (1.000) | 0.865 (0.860) | 0.286 (0.405) |
| Mixture on both tracks | 0.396 (0.441) | 0.982 | 0.019 | 0.000 |

理想比率掩码在回复更响和 0 至 −10 dB 时几乎解决，低于 −10 dB 时仍保留 0.743；Kezek 版本 1 在同一最轻分箱只有 0.171，即使把标注活动直接给分离器也只有 0.286。未处理混音在严格判据下为 0.396，说明“什么都不分离” 反而能保留更多轻回复，但泄漏不可接受。扩大到全部 113 个验证对话后，低于 −10 dB 的分箱有 151 个回复，同一分离器保留 0.371，理想掩码保留 0.788；用比主声音低 5–25 dB 的合成回复微调，只把 0.371 提高到 0.397，约 0.026。训练数据中回复的音量不是主要瓶颈，剩余上限真实但有限。

负结果也排除了几个直观方向。2 M 的 TF-GridNet 从自然窗口从零训练只能学会路由单人语音，重叠 SI-SDRi 不超过 +0.4 dB；把分离器从 19.6 M 增至 26 M，重叠为 +7.68 对 +7.67 dB，泄漏不变，短回复 0.805 对 0.792；去掉活动提示后，压在语音上的回复为 0.662 对 0.708，泄漏 −11.2 对 −19.9 dB，20 个录音中有 4 个交换而原配置为 0；把短回复损失权重乘 3，回复反而从 0.838 降到 0.825，重叠差 0.3 dB。

用约 900 h 自监督预训练阶段一编码器，回复为 0.75–0.81，低于 0.82–0.85。这些都不支持“再加大容量、再调损失权重或再加入更多轻回复数据即可解决” 的说法。

### 这些结论在哪些条件下成立

Kezek 的任务边界很窄：恰好两个说话人、离线处理、没有注册语音，也不做语音修复。它只把已经在录音里的音频重新分配，不合成语音；与会清理音质的 DialogueSidon 不同，它不承诺更干净的人声。只要对话超过 2 人、需要在线低延迟、需要按注册语音抽取某人，或需要去除噪声与混响，这篇论文的结果就不能直接外推。

剩下的大多数错误集中在“更响声音下面的安静短回复”。其中一部分根本没有出现在第一阶段输出里，另一部分即使把标注活动交给第二阶段也会丢；表 4 的理想掩码说明仍有提升空间，但负结果说明容量、损失权重和训练回复音量都不是简单开关。另有交换、泄漏和覆盖率指标本身的限制：能量判据宽松，必须与泄漏同读；严格判据更像数据可用性检查，但不能替代下游对话模型的实际训练效果。CallHome 没有参考轨道，只能依赖 utterance 级标注，无法像 Open Yap 那样逐样本检查。

训练和定量评测都是英语。原文在 5 个哈萨克语播客上人工判断了 14 个回复，第一阶段没有把任何一个放到错误的人身上，但样本太小，不能据此得出哈萨克语可用的结论；演示页上的哈萨克语例子只供试听，定量评测留作未来工作。Open Yap 测试在开发期间被评测过不止一次，每次模型选择都在验证集上事先固定；CallHome 只评测一次，但评分依赖无参考轨道的标注。这些条件提高了结果可信度，也限制了“对所有语言和所有录音条件都成立” 的表述。

外部基线是公开级联的发布配置，未针对本任务调参；本文的胜负针对该级联和这些录音，不代表所有说话人日志或生成式修复系统。外部系统的部分输出不是样本对齐的，因此不能拿其重叠 SI-SDRi 与 Kezek 比较；共同返回部分的回复保留也接近，主要差别来自覆盖率、泄漏和交换。分离出的个人轨道仍可能被用于声音克隆等用途，使用者必须拥有处理录音的权利；论文按 Open Yap 协议不识别说话人，也不发布原始音频或派生轨道。

### 复现时先搭什么、再核对什么

复现的第一步不是直接重训 41 M 参数，而是按论文口径搭好评测闭环：输入统一为 16 kHz 单声道、恰好 2 人、无注册语音；Open Yap 按说话人划分并准备 clean 与 as recorded 两套；CallHome 只作未见电话评测，并保留 utterance 级标注评分。轨道顺序、每轨增益拟合、10 s 窗口交换计数、覆盖率、回复保留和泄漏都要按原文定义实现，尤其不能只报宽松能量判据下的回复保留。

在跑任何比较前，先过已知答案检查：把参考轨道直接当输出，Open Yap 测试应得到回复 1.000、泄漏 −15.3 dB clean 或 −15.7 dB as recorded、无交换 1.000、延迟 0 ms；把未处理混音同时放到两轨，回复为 0.994/1.000，但泄漏为 −0.9/−0.3 dB，说明它保留了回复却没有分离；CallHome 上按标注门控的混音应保留 1.000/1.000，而同时放混音只有 0.167/1.000，泄漏为 0.0 dB。只有这些检查通过，短回复和泄漏的组合结果才可解释。

实际推理配置是：第一阶段活动阈值 0.3，PairNet 以 10 s 窗、2 s 上下文运行并固定整段身份；第二阶段在整段录音上以 8 s 分块、6 s 跳步分离；总参数 41 M。外部基线按发布代码用 30 步、固定种子、不调参，24 kHz 输出重采样到 16 kHz 并补偿全局延迟，残余延迟须不超过 4 ms。训练复现则用 AdamW、bf16、单张 RTX PRO 6000。

第二阶段 batch 16、4 s 裁剪，第一阶段 40 s 裁剪、batch 12。速度指标要在同一 GPU 上测，不要把训练吞吐和推理吞吐混在一起。

论文正文称代码采用 MIT、权重采用 Apache-2.0，并列出代码、权重和试听页；但本次核验把这些 URL 登记为 third_party（本次请求返回 200），这只能证明论文提到相应链接且该 URL 本次可达，不能据此确认作者侧代码或模型资源当前处于 available 状态，也不能确认其已公开发布、可获取或可下载。代码是否可获取、权重是否可下载、系统能否在本机跑通是三件事，应分别核验：先检查代码依赖和样例输入输出，再核对权重许可证与校验值，最后用同一段双人录音确认输出长度、时序、逐窗置信度和 yA + yB = x 约束。

进一步验证至少应补 3 类：用严格“存在且可听” 判据复测安静短回复，而不是只看总体回复率；在 CallHome 这类无参考轨道、电话域和更多语言上重做标注评分；更新外部基线到同等覆盖率处理或调参版本，确认整段优势中有多少来自覆盖、多少来自分离。只有这些验证完成，才能把本文的结论从“这两个系统在这些录音上的比较” 推广到新的数据准备流程。

### 什么时候值得用 Kezek，下一步验证什么

值得尝试 Kezek 的场景是：手头有大量单声道、恰好 2 人的对话，目标是给全双工对话模型准备逐人轨道；数据必须保持原始长度和时序，重叠与短反馈必须尽量保留，处理量达到数万小时，而且可以接受离线批处理和不做语音修复。此时 2 阶段设计的主要价值是把整段身份固定一次，用活动提示约束分离，并强制两轨和等于输入；与本文比较的公开级联原样运行时，它返回更多音频、泄漏更少、交换更少、速度快 4–5 倍。

不应把它当作通用多人日志、在线低延迟分离、注册语音抽取或音质修复工具。即使任务匹配，也要记住本文的主要整段优势部分来自外部管线丢弃音频；在双方都返回的部分，短回复保留接近，外部在 Open Yap 共同返回部分甚至为 0.865 对 0.859。Kezek 自身在 CallHome 上也有 14% 通话发生交换，低阈值虽然保住短回复，却把日志假警报抬高。

如果决定复现，先做评测闭环和已知答案检查，再跑第一阶段与第二阶段的固定推理，最后才考虑训练；关键超参数是活动阈值 0.3、PairNet 的 10 s 窗与 2 s 上下文、分离器的 8 s 分块与 6 s 跳步。需要补的验证是更轻回复的严格可听性、无参考轨道的电话与多语言数据、以及同等覆盖率下的外部基线。结论应停在有证据的范围：在这些英语双人录音和该公开级联上，Kezek 让整段数据更完整、更少泄漏和交换、更快；它没有解决更响声音下的极安静回复，也没有证明对所有语言、所有录音设备和下游对话任务都更好。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.16933v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：deepseek-v4.1-flash

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
