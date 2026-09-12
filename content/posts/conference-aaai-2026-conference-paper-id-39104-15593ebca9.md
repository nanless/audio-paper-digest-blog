---
title: "OmniDPO: A Preference Optimization Framework to Address Omni-Modal Hallucination"
date: 2026-09-11
draft: false
description: "针对全模态大模型忽略视听证据与视频音频互相对不齐的问题，OmniDPO 用文本偏好对与加噪模态偏好对做条件偏好优化，在 Qwen2.5-Omni 与 MiniCPM-o-2.6 上降低幻觉并提升推理，但仍受基座视觉能力限制。"
tags: ["数据集", "偏好优化", "音视频", "音视频问答"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:39104"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/39104"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/39104/43066"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ff2d4cd5dec16aa7bee37cd8cab47786e1ce9c08ed17eee592cdfde6e7591bb3"
paper_digest_api_reader_plan_sha256: "2a8206100b0c6087ee21975f5d0f56caf6b6cd4b82d6325e76e27581f0084c0d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ecfe1525b3c55073f6aa602dc28abf51ab059b52860adcdf083d23d5ab50bc7e"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "fceaf9ac0d32f23ad97f3fe961b5a3e30df1a7cf6ca19ebed360089f88fbbf3d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "69e0926b0d74119571732c49e2b7b9dbed829cf6b5767472befc411bc641ef78"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5e4f3e0bd4f1e52c4d77b2ece21276d4d37b160cdb0919a61cad9442c84dcaa4"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "偏好优化"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 文本先验压住视听信号时，用偏好对齐把注意力拉回视频与音频

> 英文题目：*OmniDPO: A Preference Optimization Framework to Address Omni-Modal Hallucination*

> 会议身份：`conference:aaai:2026:conference-paper-id:39104`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39104) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39104/43066)

标签：#数据集 #偏好优化 #音视频 #音视频问答

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Junzhe Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Tianshu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shiyu Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuwei Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Chao Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Rongzhou Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Guanyu Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Lijie Wen：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

全模态大语言模型需以视频帧序列、原始音频波形与文本问题为输入并生成文本回答，难点是文本先验压制视听证据，且视频与原生音频的内在关联在独立对齐训练中被割裂。OmniDPO 先过滤无音频片段并用音频模型生成声音摘要，再将其与视频共同送入视觉语言模型得到音频感知正样本，同时以屏蔽音频文本的同视频输出构造忽视音频的负样本，形成音视频对齐文本偏好。接着对视频像素与音频波形分别加零均值高斯噪声构造退化输入，与完整输入共享同一正答案形成视觉与听觉两类模态鲁棒偏好，迫使正确回答在证据缺失时降低置信。相比仅对比正负文本的直接偏好优化与视觉对比解码，该机制显式区分完整与退化输入下同答案的似然，从而联合抑制文本主导与跨模态错位。在 AVHBench 音频驱动视频幻觉子集上，Qwen2.5-Omni 经 OmniDPO 后准确率达到 84.42%，高于基线 74.12% 与文本直接偏好优化的 71.74%。在 CMM 上 Qwen2.5-Omni 感知准确率与幻觉抵抗平均提升 1.6% 与 4.5%，在 MMAU 与 MMMU 推理基准上平均提升 2.4%。该结论限于文本、视频与音频三模态问答、字幕与推理评测，未验证更多模态扩展与强视觉歧义下的感知上限。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/OpenBMB/MiniCPM-o> → <https://github.com/OpenBMB/MiniCPM-V> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，模型要输出什么？

这篇论文研究的对象是全模态大语言模型，用白话说就是能同时看视频帧、听音频波形、读文字提问，然后用文字回答的模型。英文叫 Omni-modal large language models，缩写为 OLLMs。输入在论文中记为 X 等于视频 V、音频 A、文本 T 三部分，V 可以是一段视频帧序列，也可以退化为单张图像，A 可以是环境声或语音提问，T 是文字提示或问题。输出 Y 是文字回答或描述。任务包括视频问答与音视频场景描述等，需要把 3 路信息联合起来理解。

必须保留的信息是回答必须被 V 或 A 支持，如果 Y 写了画面或声音里没有的东西，就记为幻觉。论文把这种跨视频音频文本的不一致输出统称为全模态幻觉，英文为 omni-modal hallucination。输出形式按原文只支持文本、视觉与音频输入下的文本回答，局限一节会说明尚未扩展到更多输入形式。对于刚入门的读者，关键动作是拿到一个样本先问三件事：视频里有什么，音频里有什么，问题在问哪一路证据，再检查回答的每个事实点能否在前两路找到依据。

论文的起点是观察到即使给了视听信号，模型仍常用文字习惯作答，特别是在视频自带音频的真实场景中，对隐藏在画面里的声音线索推理不足。

### 已有路线在治哪种幻觉，为什么不够？

相关工作按同输入同目标可分为两条路线。第一条是免训练方法，不改参数，只在解码或推理时干预。代表例子是对比解码 VCD，它在解码时引入模糊图像来暴露并抵消有偏语言先验；另 1 例是推理时干预 ICT，它在前向传播的激活层注入干预向量以提高可靠性。原文指出这类方法的代价是可能把有益于推理的语言先验也一并去掉，损伤推理密集任务，且解码多遍会明显增加延迟。

第二条是训练方法，用合成或人工高质量数据微调，让模型更关注视觉信息。原文指出人工标注成本高，而已有合成数据要么只关注文本模态，要么没有刻画视频与其原生音频之间的细粒度关系。在全模态幻觉方面，原文回顾认为视觉语言幻觉研究较多，全模态仍欠探索，Leng 等人与 Sung-Bin 等人的基准指出了模态不平衡，但没有给出有效缓解策略。教学上要区分运行阶段：免训练对应部署时干预，训练对应参数更新。

监督来源也不同，前者靠扰动输入或激活，后者靠偏好对或指令数据。本文选择训练路线，理由是需要在参数层面同时解决文本主导与音视频失配，而不是只在推理时压制语言先验。

### 文本压制视听与音视频失配如何表现？

论文把问题拆成两个可操作的机制。第一个是过强的文本先验主导其他模态，白话就是文字能力太强，模型宁可相信文字常见说法也不看视听。双模态已有证据表明文本模型强于视觉模型会导致此类依赖，全模态同样存在，模型倾向依赖文本输入而忽视其他模态。第二个是音视频对齐缺失，白话就是视频和它自带的声音本应互相解释，但已有全模态训练多把视觉与文本、音频与文本分别对齐，没有建模视频与其对应音频的内在关联。

当理解依赖嵌入在画面中的细微声音线索时，模型就会自信地编造答案。作者用 Qwen2.5-Omni-7B 做了针对性案例，涉及同时需要音频与视频线索的样本，发现模型经常忽略人声或环境声等人声信号，转而依赖幻觉化的文本先验。

**文本先验 × 全模态幻觉：** 文本先验指语言模型靠文字常见搭配先给出答案的倾向，分工是提供流畅但可能无依据的默认回答；全模态幻觉指输出与视频或音频证据不一致，分工是描述跨模态事实错误。二者搭配的原因是当前全模态大模型文本能力远强于视听编码，训练又多把视觉或音频各自与文本对齐，模型便用文字习惯覆盖视听信号。组合意义是把幻觉归因从单一看错扩展为模态竞争与音视频失配，需要同时约束文字依赖与音视频关联。

下面这张图是理解上述第一类失败的最直接例子，请先看画面与音频标注再看问答错位，随后回到文字继续走方法动机。

> **看图路径：** 1. 先看上方胶片条三帧公交车画面，确认有人物出现在车门附近；2. 再看中间波形与绿色音频说明，确认标注只有发动机与喇叭声；3. 对比蓝色用户提问与红色模型回答，确认模型把视觉有人转为听觉有人说话

[![原论文 Figure 1：An example where Qwen2.5-Omni-7B halluci- nates human speech from visual cues despite audio…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/84003d4e4484/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/84003d4e4484/figure-1.png)

*论文图 1。原论文 Figure 1：“An example where Qwen2.5-Omni-7B halluci- nates human speech from visual cues despite audio contain- ing only mechanical noise.”。*

这张图上方是 3 帧公交车停靠画面，有乘客在车门附近，下方是一段连续波形，绿色标注写明音频只有公交发动机声与汽车喇叭声。蓝色框用户问画面中的人是否在音频中发出声音，红色框模型却回答视频中有人在说话。像素细节显示波形没有语音段落特征，文字标注也未提及人声，但模型把视觉中有人这一线索直接转写为听觉中有人说话。这正是文本与视觉习惯覆盖听觉证据的实例，也引出后文为什么需要同时构造回答好坏对与输入好坏对。

### OmniDPO 的全景是什么，先走通一个样本？

OmniDPO 的输入输出与基座模型一致，仍是给定 X 输出 Y，但训练信号从单一正确答案改为偏好比较。先沿一个样本走完流程。取 MSR-VTT 中一个带音频的视频，记为 X 包含视频帧 V、原始音频波形 A 与文字提问 T。第一步做音频视频对齐偏好：调用 Qwen2-Audio-7B 对 A 生成简洁音频描述，记为 ta，再把 V 与 ta 一起送入 Qwen2.5-VL-7B 生成兼顾音频的回答 Y 正；同时把同一视频不带音频描述送入同一模型得到只看视频的回答 Y 负。

这样得到文本偏好对，教模型偏好真正用到了音频线索的回答。第二步做模态鲁棒偏好：保持 Y 正不变，分别构造加噪视频与加噪音频的降质输入，要求模型在完整输入下对 Y 正的概率高于降质输入。直观理解是好回答不变，但好输入应比坏输入更让人确信。最终数据集是 3 类对的并集，规模为 9141 对，覆盖 1076 个不同视频与 20 个常见类别，任务形式为开放词汇描述。论文报告每个合成样本由 2 名标注者交叉审核，Fleiss Kappa 为 0.82，标为错误或低质量的样本被剔除。

**文本偏好对 × 模态偏好对：** 文本偏好对分工是教模型区分有音频依据的回答与只看视频的回答，输入相同而输出一好一坏；模态偏好对分工是教模型区分完整输入与加噪降质输入，输出相同而输入一好一坏。二者搭配的原因是前者解决音频与视频之间没有联合建模的问题，后者解决文本压制视听的问题。组合意义是分别对应标准直接偏好优化损失与视觉听觉条件损失，共同要求正确答案必须在证据齐全时置信更高。

下图展示了从视频提问到两类偏好对的组织方式，阅读时先分清上路与下路各自降质了哪一路信号。

> **看图路径：** 1. 先沿左侧人物视频到右上与右中两个模型分支，看提问如何同时送入两路；2. 再看中部绿色完整框与红色加噪框之间的大于号，确认完整输入被偏好；3. 区分上路视频偏好对与下路音频偏好对各自降质的是哪一侧信号

[![原论文 Figure 2：Overview of OMNIDPO.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/84003d4e4484/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/84003d4e4484/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of OMNIDPO.”。*

这张图左侧是一个人物坐在凳子上的视频，上方与中部分别指向 2 个模型分支，共用同一个提问。绿色框为完整输入下的偏好回答，红色框为加噪后的非偏好条件，上路标注视频偏好对并显示加噪严重的画面，下路标注音频偏好对并保留清晰画面。从像素可见上路右侧画面布满彩色噪声，对应 V 减，下路右侧画面清晰，对应降质的是音频侧。中间的大于号表示完整条件应被赋予更高概率，这与后文视觉损失与听觉损失的定义直接对应。

### 三个损失各自算什么，如何配合？

符号先讲清。Ptheta 表示待训练模型给定输入输出文字的概率，Pref 表示参考模型概率，beta 是偏好差异的温度系数，sigma 是 sigmoid 函数，lambdaV 与 lambdaA 是视觉项与听觉项的权重。标准直接偏好优化只看同一 X 下 Y 正与 Y 负之差，目标是拉大二者经参考模型归一后的对数概率差。视觉偏好目标则固定回答为 Y 正，比较完整输入与降质视觉输入 XV 减，只有输入不同。听觉偏好目标同理，比较完整输入与降质音频输入 XA 减。

降质按原文是对原始信号加高斯噪声实现，V 减等于 V 加噪声，A 减等于 A 加噪声。优化含义是如果模型没有真正用 V 或 A，那么完整与降质下的概率会差不多，损失就会惩罚它；只有真正利用对应模态，才能在完整输入下更确信。原文强调降质比较始终针对 Y 正，不是否定 Y 正在降质输入下一定错误，而是要求信息减少时置信下降，符合无充分感知证据不应自信回答的原则。

**直接偏好优化 × 条件模态偏好学习：** 直接偏好优化分工是在同一输入下推高偏好回答概率、压低非偏好回答概率；条件模态偏好学习分工是在同一回答下比较完整输入与降质输入的概率，要求证据完整时更高。二者搭配的原因是前者只管文字回答好坏，不管模型是否真看了视听；后者只管是否依赖视听，不管文字细节好坏。组合意义是用加权求和同时约束回答质量与证据 grounding，得到 OmniDPO 总损失。

以下 4 条是原文给出的关键计算，依次为标准偏好损失、视觉条件损失、听觉条件损失与加权总损失，阅读时先对齐符号再看比较对象是回答还是输入。

\[LDPO(θ) = −E(X,Y +,Y −)\]

\[Lvis(θ) = −E(X,XV −,Y +)\]

\[Laud(θ) = −E(X,XA−,Y +)\]

\[LOMNI(θ) = LDPO(θ) + λV Lvis(θ) + λALaud(θ).\]

**视觉偏好损失 × 听觉偏好损失：** 视觉偏好损失分工是比较完整视频与加噪视频下同一正确答案的概率，要求有清晰视频时更高；听觉偏好损失分工是比较完整音频与加噪音频下同一正确答案的概率，要求有清晰音频时更高。二者搭配的原因是只做一侧会产生模态干扰，另一侧证据被忽视。组合意义是让模型不能在证据缺失时同样自信，从而把自信与感知证据绑定。

总损失把三项相加，实验中 lambdaV 与 lambdaA 均设为 1。实现上是对 Qwen2.5-Omni 与 MiniCPM-o-2.6 做全参数微调，beta 固定为 0.1。需要提醒的是原文未报告梯度是否在参考模型侧停止之外的更多细节，也不从模型名推定编码器冻结方式，复现时应按原文超参数先跑通，再按需核对显存与精度设置。

### 数据如何构造，训练如何执行？

训练分为数据构造与参数优化两段，没有无训练的旁路。数据构造起点是 MSR-VTT，先过滤掉无音频轨道的片段，只保留音频非空的集合。每个保留样本表示为 X 等于 V、A、T。接着用 Qwen2-Audio-7B 从 A 抽取音频描述 ta，再把 V 与 ta 送入 Qwen2.5-VL-7B 得到 Y 正，把 V 不带 ta 送入同一模型得到 Y 负，构成音频视频对齐偏好。然后对同一 X 构造 XV 减与 XA 减两个降质版本，噪声为零均值高斯，方差由超参数控制，原文未给出具体方差数值，这是复现时需要补记的缺项。

最终得到 3 类对的并集，共 9141 对。质量控制是 2 名标注者独立交叉审核，Fleiss Kappa 为 0.82，低质量剔除。参数优化采用全参数微调与 fp16 精度，学习率调度为余弦，热身比例 0.1。Qwen2.5-Omni 学习率为 1e-6，MiniCPM-o-2.6 学习率为 1e-5，beta 为 0.1，lambdaV 与 lambdaA 为 1。硬件为 8 卡 H100。

资源状态方面，论文引用 MiniCPM-o 仓库链接本次可达，状态码 200，可写当前可用，但这只是第三方代码可用性，不等于本文 10k 偏好数据已公开，数据公开状态原文未给出下载链接，复现时应按缺项处理。

### 用什么基准测什么，条件是否一致？

评测围绕幻觉与推理两类问题组织。AVHBench 专门评估全模态模型的感知推理与幻觉鲁棒性，含 4 个子集，本文聚焦其中两个幻觉子集：音频驱动的视频幻觉与视频驱动的音频幻觉，前者测仅凭音频先验编造视觉内容的倾向，后者反之。指标为分类常用的准确率、精确率、召回率与 F1，以及答是比例，方向均为越高越好 except 答是比例用于诊断偏置，下降通常表示不再动辄肯定。

CMM 即多模态诅咒基准，评估文本视觉音频 3 路矛盾输入下的幻觉，含视觉语言、音频语言、视听语言、视觉主导、音频主导与语言主导 6 个子域。核心指标为感知准确率 PA 与幻觉抵抗率 HR，PA 分母是真值为是的样本，HR 分母是真值为否的样本，前者看检出，后者看拒绝。基线保持可运行策略一致：同一基座分别加 VCD、ICT 与纯文本 DPO，再与 OmniDPO 比较。VCD 与 ICT 为免训练，DPO 仅在文本回答上做偏好优化。非幻觉推理用 MMAU 与 MMMU 做零样本评估，分别覆盖音频理解与多学科多模态理解。

**感知准确率 × 幻觉抵抗率：** 感知准确率分工是衡量对真实存在元素的检出能力，分母是真值为是的样本；幻觉抵抗率分工是衡量对不存在元素的拒绝能力，分母是真值为否的样本。二者搭配的原因是只看准确率会被爱答是的偏置抬高，必须同时看拒绝虚假内容的能力。组合意义是在 CMM 这类矛盾输入评测中同时报告检出与抗幻觉，避免以偏概全。

实现细节上 2 模型均为全参数微调，条件一致才能比较增益来源。阅读结果表时要同时核对数据集、模型基线、阶段与聚合对象，数值相同不代表同一指标，百分点与相对百分比也不同。

### 主结果显示什么增益，代价在哪里？

先看幻觉子集的比较问题：在相同基座与相同评测协议下，OmniDPO 是否同时提升检出与抗幻觉，且不依赖推理时多遍解码。下表整理 Qwen2.5-Omni 在 AVHBench 两类幻觉上的表现，指标方向为准确率与 F1 越高越好，答是比例用于观察肯定偏置是否缓解。

| 条件 | 音频驱动视频幻觉-准确率 | 音频驱动视频幻觉-F1 | 视频驱动音频幻觉-准确率 | 视频驱动音频幻觉-F1 |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni 基座 | 74.12 | 77.38 | 67.60 | 75.30 |
| Qwen2.5-Omni 加 OmniDPO | 84.42 | 83.47 | 77.51 | 80.85 |

表后解释需要同时讲收益与代价。收益是两类幻觉的准确率与 F1 均明显提升，论文报告 Qwen2.5-Omni 平均 F1 增益约 5.82 个百分点，MiniCPM-o-2.6 约 2.64 个百分点；答是比例从 64.44 与 81.18 分别降至 44.28 与 67.42，降幅显示模型不再轻易肯定，支持模态偏好对让肯定回答更谨慎的判断。代价与反例是 VCD 与 ICT 在该基准上仅边际改善甚至退化，纯文本 DPO 也无显著增益，说明只压语言先验或只优化文字回答不足以建模音视频交互。未胜出项要保留：基座在视频驱动音频幻觉上的召回原本高达 98.78，OmniDPO 降至 94.93，说明以部分检出为代价换取精确率从 60.84 升至 70.40，这是典型的谨慎化权衡。

下图为非幻觉推理基准的柱状对比，阅读时注意纵轴起点并非零，柱高差不等于绝对差值比例。

> **看图路径：** 1. 先确认横轴为 MMAU 与 MMMU 两组，纵轴为准确率百分比；2. 再对比每个分组内基座柱与 OmniDPO 柱的高低，确认提升方向；3. 观察 VCD 与 ICT 柱是否低于基座，确认去除语言先验可能损伤推理

[![原论文 Figure 4：Performance comparison on reasoning bench- marks (MMAU (Sakshi et al.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/84003d4e4484/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/84003d4e4484/figure-4.png)

*论文图 4。原论文 Figure 4：“Performance comparison on reasoning bench- marks (MMAU (Sakshi et al.”。*

这张图左右分别为 Qwen2.5-Omni 与 MiniCPM-o-2.6，每组内有基座、VCD、ICT 与 OmniDPO 四根柱，纵轴为准确率百分比从 40 起。像素显示 OmniDPO 柱在 MMAU 与 MMMU 两组均为最高，Qwen 左侧 MMAU 提升最明显，MiniCPM 右侧两组也有稳定抬升。VCD 柱在多组低于基座，支持原文去除语言先验会连带损伤推理的解释；ICT 在 MMMU 略有改善但在 MMAU 无改善，支持其只强化视觉 grounding 而未建模音频的判断。论文报告 Qwen 平均增益 2.4 个百分点，MiniCPM 平均增益 3.6 个百分点，显示缓解幻觉的同时未牺牲通用推理。

再看 CMM 的比较问题：在 6 个子域上，OmniDPO 是否同时改善检出与拒绝。下表给出两基座的总体感知准确率与幻觉抵抗率，方向均为越高越好。

| 条件 | 指标 | Qwen 基座总体 | Qwen 加 OmniDPO | MiniCPM 基座总体 | MiniCPM 加 OmniDPO |
| --- | --- | --- | --- | --- | --- |
| CMM 总体 | 感知准确率 | 91.7 | 93.3 | 88.1 | 91.0 |
| CMM 总体 | 幻觉抵抗率 | 70.2 | 74.7 | 63.9 | 68.8 |

表后解释要增加新对照。Qwen 感知准确率提升 1.6 个百分点，幻觉抵抗率提升 4.5 个百分点；MiniCPM 分别提升约 2.9 与 4.9 个百分点，原文按子域平均表述为 1.9 与 4.9。更大的 HR 增益支持模态感知训练抑制了证据不足时的虚假肯定。未胜出边界是 VCD 与 ICT 虽改善视觉语言子域，但在视觉主导等域退化，提示向视觉过度纠正会破坏跨模态平衡；标准 DPO 在视听语言略有改善但在音频与视觉主导停滞或退化，说明缺少降质输入对比时难以改变模态依赖。

### 只优化一侧模态会发生什么？

消融按问题组织：视觉损失与听觉损失各自贡献多少，联合是否必要。实验在 Qwen2.5-Omni-7B 上分别只加音频损失、只加视频损失，再与联合的 OmniDPO 比较，评测覆盖 CMM 的视觉语言、音频语言、视听语言以及 AVHBench 两类幻觉。结果显示单侧优化各有正效应，但存在模态干扰：在 CMM 上只优化视频会拉高视觉语言却压低音频语言，只优化音频则反之；只有联合优化才在多模态上一致提升。这支持视觉与听觉条件损失互补而非可互相替代的判断。

失败条件方面，论文用 CMM 案例做了误差分析，左例基座把无树画面答成有树，OmniDPO 纠正为否定，说明克服了语言先验导致的肯定偏置；右例道路与河流外观相近，基座与 OmniDPO 均答错，作者归因于基座视觉理解上限，偏好优化缓解了过度依赖文本，但没有根本增强视觉分辨力。

下面这张图对应上述成功与失败的并置，左为纠正例，右为仍错例，请带着基座能力边界来读。

> **看图路径：** 1. 先读左侧虚线框问题与基座回答，确认基座在无树画面下仍答有树；2. 再读绿色 OmniDPO 回答，确认其改为否定并与视觉证据一致；3. 结合右侧雪地道路航拍，思考为何另一组道路河道易混样本仍难纠正

[![原论文 Figure 3：Case Study and Error Analysis of OMNIDPO.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/84003d4e4484/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/84003d4e4484/figure-3.png)

*论文图 3。原论文 Figure 3：“Case Study and Error Analysis of OMNIDPO.”。*

像素显示左侧 3 段虚线框分别为问题、红色基座肯定回答与绿色 OmniDPO 否定回答，右侧为雪地中弯曲道路的航拍，路面与河道纹理相近。从可见内容可确认左例的纠正动作，但右例的混淆在当前分辨率与视角下难以仅靠偏好训练解决。这提示复现时若只看总体 F1 会掩盖此类视觉 hard case，需要单独统计易混类别的表现。

### 哪些结论还不能下，缺了什么验证？

论文直接报告的是在两个全模态模型与幻觉及推理基准上的提升，有限解释是模态条件比较让自信与证据绑定。以下为待验证与缺项。第一，视觉能力上限未被解决，右例道路河道混淆显示偏好优化不能替代更强的视觉编码，相关性不等于因果，不能承诺所有视觉误判都会改善。第二，降质噪声的方差与加噪位置未报告具体数值，只知为高斯噪声，复现时需自行搜索并记录对结果的影响。

第三，成本与延迟未测量，训练用 8 卡 H100，推理开销、输出帧率与实际延迟未给出，不能承诺推理更快或更便宜，总体趋势不等于每组每步都成立。第四，数据层面只基于 MSR-VTT 过滤后的 1076 视频与开放词汇描述，是否泛化到驾驶等高风险场景待验证。第五，模态范围限于文本视觉音频，更多输入形式为未来工作。缺失证据不是技术错误，但在使用时应明确标注为未评测边界。

### 要复现应先做什么，需要哪些条件？

复现先做数据管线再做训练。第一步按原文过滤 MSR-VTT 中无音频片段，保留音频非空集合，记录保留比例与 20 类分布。第二步用 Qwen2-Audio-7B 生成音频描述，再与视频一起送 Qwen2.5-VL-7B 生成 Y 正，不带音频描述生成 Y 负，保存三元组以便核查。第三步实现加噪函数，对视频与音频分别加零均值高斯噪声，注意原文未给方差，需从小到大网格搜索并固定随机种子。第四步实现 3 个损失并设 beta 为 0.1，lambdaV 与 lambdaA 为 1，全参数 fp16 微调，Qwen 学习率 1e-6，MiniCPM 学习率 1e-5，余弦调度热身 0.1。

第五步用相同协议跑 AVHBench 两幻觉子集与 CMM 六子域，同时记录答是比例与 HR，避免只看准确率。信息条件方面，MiniCPM-o 仓库本次可达可用，但本文 10k 偏好数据未给出下载链接，应视为未公开，需自行按流程重建并做双人审核。硬件预算至少按多卡复现规划，单卡需先验证梯度累积等价性后再报结果。

### 何时值得尝试，如何一句话复述方法？

当你的全模态模型出现两类症状时值得尝试：一是明明音频无语音却因画面有人而答有人说话，二是视频自带声音的问答总被文字常识带偏。复述方法是先为每个带音频视频构造一好一坏两个回答，好回答见过音频描述而坏回答没见过，再为同一好回答构造完整与加噪两种输入，要求完整输入下概率更高，最后把回答之差与输入之差两类偏好损失加权求和做直接偏好优化。适用条件是基座已具备基本视听编码，否则如道路河道易混例仍会错。

不适用条件是需要严格延迟保证或只有单模态数据，此时加噪对比与联合建模的收益有限。下一步验证应补噪声强度消融、易混视觉类别细分统计与推理延迟测量，才能把幻觉下降与真实部署收益对应起来。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
