---
title: "Beyond the Transcript: Measuring and Improving the Use of Acoustic Information in Audio Language Models"
date: 2026-11-12
draft: false
tags: [音频问答, 音频推理, 表示探测, LoRA]
categories: [论文速递]
description: "论文把能否只靠文字回答作为任务划分标准，用合成朗读和加文字两种对照估计录音增益，发现开源模型在属性与结构任务上落后于 Gemini 的一半以上来自录音增益，并在两个模型中用探测与定层 LoRA 训练把声学利用补回来，同时用内容锚保持词汇任务基本不变。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.11573"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "录音比文字多提供了什么：音频语言模型声学信息利用的测量与修复"
paper_digest_original_title: "Beyond the Transcript: Measuring and Improving the Use of Acoustic Information in Audio Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.11573v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.11573v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.11573v1.pdf"
paper_digest_primary_task: "音频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"task","id":"task.audio-reasoning","label":"音频推理"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"method","id":"method.lora","label":"LoRA"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把能否只靠文字回答作为任务划分标准，用合成朗读和加文字两种对照估计录音增益，发现开源模型在属性与结构任务上落后于 Gemini 的一半以上来自录音增益，并在两个模型中用探测与定层 LoRA 训练把声学利用补回来，同时用内容锚保持词汇任务基本不变。"
paper_digest_authors: [{"affiliations":["University of Connecticut"],"name":"Linkai Peng"},{"affiliations":["The University of Texas at Austin"],"name":"Baorian Nuchged"},{"affiliations":["University of Oxford"],"name":"Yuyang Yao"}]
paper_digest_abstract_sha256: "16c9ea5a53566aaa0690b298b6944404e1fec13ab440624737ff3ea8d0d48d0c"
paper_digest_sidecars: {"citation.bib":{"sha256":"100de1c710e11acb556ee8f5d2d7558d4df5eb9a3ec1075a46df214cbadf2007","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11573/citation.bib"},"citation.json":{"sha256":"a282ad70a9b643eae1453bcd02e2f6273af378462de4a8f687073ab9e9ef963d","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11573/citation.json"},"citation.ris":{"sha256":"769fce99a0c11c07a5cce95ff5777ca5b50c39dc402a039ea96d7fe3edca9aa0","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11573/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"bc2962ed0e590fd1ecf7336c358850ec86a87f49218c33279eab3d9aaadc7b5c","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11573/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "db23941833a7ed8265ead5fcdcfefdc60e03149874ebdeb49e06769ff3c74181"
paper_digest_api_reader_plan_sha256: "de0d2798f50ed614fc494be55c693053bd7c7d4616de4d40e55746db003ba2ef"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "a1047330c0bf76e170fb31320ee04a858f2d3a11af700acc04895e8c6f3d6452"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "302b2642ca961746369f2a0bf55ad9b494054a74e68a10dfb993d9b182667637"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d74c5b25b0299cfee9f7db189c6b817f93646119ad30b314367759343a4a0950"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "d07c2402122c62bb4951bb4d4e368dbfed3e2564ce9566173200fa8d58442097"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 录音比文字多提供了什么：音频语言模型声学信息利用的测量与修复

> 英文题目：*[Beyond the Transcript: Measuring and Improving the Use of Acoustic Information in Audio Language Models](https://arxiv.org/abs/2611.11573v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频问答](/audio-paper-digest-blog/papers/?concept=task.audio-question-answering)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频推理](/audio-paper-digest-blog/papers/?concept=task.audio-reasoning)
- **研究方法**：[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Linkai Peng：University of Connecticut
- Baorian Nuchged：The University of Texas at Austin
- Yuyang Yao：University of Oxford

## 📌 核心摘要

音频语言模型在回答问题时可能只依赖文字内容，论文把92个任务按答案所需证据分为词汇类、整体属性类和录内结构类，输入是录音，输出是选项或标签，难点在于后两类需从整段录音或段间关系中提取说话人、情绪、重音和音高。在6个基准共13,707个条目上以原始录音作答的准确率平均，19个开源模型在属性和结构任务上分别低于Gemini 3.1 Pro 28.6和41.9个百分点，其中约一半以上差距来自录音增益。论文先用原始录音、合成朗读及其与文字转写的组合构造对照，提取保留文字但替换嗓音韵律后的准确率差作为录音增益，其输出的增益缺口指向录音利用不足，再在每层表征上训练线性探针，将读出精度与直接作答准确率对比以定位读出下降层。最后把探针定位的下降层作为训练位置，在该层训练低秩适配器并用内容锚定约束词汇问答分布接近基础模型，使声学利用改进而不损失词汇能力。修复后Gemma-4 12B和Qwen2.5-Omni-7B以原始录音作答的准确率在属性任务上分别从34.7%升至53.6%和从56.7%升至69.5%，在结构任务上分别从35.4%升至66.2%和从34.0%升至78.4%，词汇类平均精度变化在1个百分点以内。该结论仅在与训练同格式的34个任务及两种架构上验证，对无匹配训练格式的会话情绪与讽刺任务迁移不均，且两次增益估计共用同一Whisper转写，受识别错误共同影响。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频语言模型要回答什么，文字转写能解决多少

音频语言模型的输入是一段录音，任务是根据给定问题与选项给出选择或标签，范围从口语问答、意图识别到说话人、情绪、韵律判断都有。对刚进入语音方向的研究生，第一个容易混淆的点是评测分数同时包含两件事：语言模型本身懂多少，以及它从声音里多用了多少。以情绪题为例，句子写着 I am so happy，光看词就可能选对，不必听语气；这时先做自动语音识别再交给文本大模型的级联系统，也能答对。

论文的起点就是把这两件事分开。它不否认综合基准覆盖面广，而是指出有些题只看转写甚至只看题面就能答对，基准平均分会把语言能力与声学理解混在一起。作者要回答的是：在保留词的条件下，原始录音到底额外带来了多少正确率，以及开源模型与作为参照的 Gemini 3.1 Pro 的差距中有多少来自这部分额外收益，后续的探测与修复都围绕这个增量展开。

### 已有工作如何构造不伤词的对照，本文的参照有何不同

要估计超出词的声音的贡献，需要一个保留词的参照。论文回顾了几条路线：加噪声、换静音、去掉音频会同时破坏词汇证据；只给文本转写则把输入从语音换成文字；另一些工作故意让声音与词或附加文本冲突，看模型跟哪一边。作者认为这些做法要么伤词，要么改变模态，要么需要全新构造冲突刺激。

与本文最接近的是文中提到的 ALME，它用相同词汇内容重新合成刺激。本文的做法是把自然录音与同一转写的合成朗读配对，两边都是语音，同一组朗读可用于跨模型、训练前后比较录音对合成朗读的优势，再用转写加录音相对纯转写的提升作为第二种增益。探测方面，作者引用了从隐状态恢复物理属性、韵律对比或音频支持答案的工作，以及结合评测、探测与修复的 VoxParadox，指出后者研究的是带独立编码器的 Audio Flamingo 3，而本文同时检查无独立编码器的 Gemma-4 12B。训练方面，作者把解码时调分、按提示混合编码器层、冲突音频文本微调等做法与自己的内容锚区分开，强调保留内容理解需要单独评测与约束。

### 三类任务按回答证据划分，录音增益最可能出现在哪里

论文按回答所需证据把 92 个任务分成 4 组。词汇任务共 36 个，转写通常够用，例如意图、实体、问答与推理。全局属性任务共 30 个，需要整段录音的整体性质，例如说话人年龄、性别、口音、情绪、场景、说话人数、噪声与混响。录音内结构任务共 12 个，需要定位内部位置或比较片段关系，例如哪个词重读、哪段音高更高、语速与响度比较、停顿与语调感知。其余 14 个混合任务同时需要词与声音或额外推理，正文类均值只统计前 3 类共 78 个任务、12102 题。

**词汇任务 × 全局属性任务 × 录音内结构任务：** 词汇任务指通常只看文字转写就能回答的内容理解题，全局属性任务指要对整段录音判断说话人、情绪、场景等整体性质的题，录音内结构任务指要定位录音内部位置并比较重音、语调、音高、时长等关系的题，三者按回答所需证据在文字之外的位置划分，决定了录音最可能在哪类任务上带来增益。

这个划分直接决定预期：词汇任务对词之外的声音依赖小，录音增益应接近零；属性与结构任务的转写通常不写明音色与韵律，录音最有机会带来提升。论文还举例说明边界，例如 stress_based_reasoning 要先找到重读词再结合句义解释，属于混合任务，而 Dynamic-SUPERB 的 StressDetection_MIRSD 虽名义问重音，但金标是孤立词的词典重音，只看转写就能答对，因此被排除，避免词汇捷径污染结构任务的结论。

### 从测量增益到探测读出再到定层修复的整体链条

全篇沿一条链条展开。先用 5 种输入条件测录音增益，比较 19 个开源端到端模型与 Gemini。然后在有无独立音频编码器的两个开源模型里做逐层线性探测，看声学线索在表示中是否可读，再与模型自己作答对比。最后只在读出下降的层区间训练 LoRA 适配器，用新构造的声学监督把利用补上，用内容锚把内容问答拉住，训练前后重新测 3 类准确率与两种增益，并重复探测与适配器位置分析。

下面这张总览图值得按从数据到模型再到 3 个子研究的箭头阅读，先把任务划分、增益定义、探测对比、训练约束 4 个环节的位置对上，再进入各自细节，这样不会把增益数字、读出曲线与修复提升混为一谈。

> **看图路径：** 1. 先看顶部三类任务的例句与正确选项，确认证据位置的划分；2. 再看 a 区同一道题的五种输入，区分两种录音增益的对照方向；3. 看 b 区三条线索在早中晚层的读出数字与作答数字的落差；4. 看 c 区只训练中间层的设置与三类准确率修复前后的变化

[![原论文 Figure 1：Overview of the study, from the data and models (top) to the recording gain (a), the readout (b)…](https://arxiv.org/html/2611.11573v1/fig_overview.png)](https://arxiv.org/html/2611.11573v1/fig_overview.png)

*论文图 1。原论文 Figure 1:：“Overview of the study, from the data and models (top) to the recording gain (a), the readout (b) and the repair (c).”。*

这张图把三件事放在同一版面。顶部是 3 类任务各一个例句与正确选项，中间是 19 个开源模型、Gemini 与两个被深入分析的模型，底部 a 区给出同一道题的 5 种问法与两类增益的类均值，b 区给出性别、音高、重读 3 条线索在早中晚层的读出与作答，c 区给出训练数据规模、交叉熵与 KL 两项约束、只训练中间层以及修复前后 3 类准确率。它帮助理解的关键是增益是准确率差值，读出是另训探针的准确率，修复提升是训练前后同条件比较，三者分母与对照都不同。

### 五种输入如何提问，两种录音增益各控制了什么

每个题都用同一问题与选项问五遍。只给问题选项记为 NN，只给 Whisper 转写记为 AA，给转写的合成朗读记为 TT，给原始录音记为 OO，同时给转写与录音记为 AO。两种录音增益定义为 S 等于 OO 减 TT，即录音相对同转写合成朗读的优势，H 等于 AO 减 AA，即在已有转写时再加入录音带来的提升。合成朗读每个转写读两遍，一次女声一次男声，TT 取 2 次平均，保留下来的朗读相对源转写的词错误率为 1.4%。

**原始录音 × 合成朗读 × 录音增益：** 原始录音是基准评测用的自然语音，合成朗读是把同一条转写用另一声音重新读出、保留词而替换音色韵律并去掉背景声的对照，录音增益是原始录音准确率减去对照准确率的差值，用来估计超出文字之外的声音到底帮了多少，两种增益从不同方向逼近同一个量。

两种对照各多引入一个差异，论文明确承认。S 的参照是合成语音，因此还包含自然与合成语音之差；H 两边都有转写，因此还包含模型如何融合文本与音频的影响。但这两个额外差异互不重叠，不会同时凭空制造出 S 与 H 共有的变化，结论只建立在两者共同显示的模式上。举例说，二元性别题若只听合成声音，两遍朗读平均下来应接近随机，因此 S 不会被合成音色系统性抬高；H 则考验模型拿到文字后是否还愿意用声音，两者都为正才更可信。

下表是 5 种输入条件的原文定义，读表时注意文本列与语音列的勾选位置，它决定了每次比较中什么被保留、什么被替换。

| Input | Input | Acc. | Text | Speech |
| --- | --- | --- | --- | --- |
|  | Question and options only | NN |  |  |
|  | Whisper transcript | AA | ✓ |  |
|  | Original recording | OO |  | ✓ |
|  | Transcript and recording | A​OAO | ✓ | ✓ |

这张表说明了公平比较的结构。NN 与 AA 测只靠题面与文字能走多远，TT 把词放到另一把声音里，OO 回到原始声音，AO 则让文字与声音同时出现。S 比较的是 2 次语音输入，H 比较的是 2 次都有文字的输入，前者看声音本身，后者看加入声音的边际作用，两者都小才能说模型基本只用了词。

### 探测器如何知道答案与位置，作答对比在什么条件下才有意义

探测的做法是取模型某一层在音频位置的表示，标准化后训练逻辑回归探针，用该层表示猜答案，探针准确率称为读出。属性任务直接用评测题与任务标签，例如性别探针用 AudioBench 的 IEMOCAP 与 VoxCeleb 共 880 题，在一个数据集上训练、另一个上测试。结构任务的原始评测题没有标出相关声音的位置，作者为其中 5 个任务新拼接了录音，例如把同一说话人的两段 LibriSpeech 用 0.5 秒静音连起来，再反向改变目标属性，音高差设 1.5、2、4、8 半音，语速比设 1.2、1.5、2.0，响度差设 3、6、12 dB，重读通过抬高某一词音高并拉长实现，延长则只拉长。

下面这组逐层曲线需要沿横轴从首层看到末层，先看探测曲线是否早期冲高、后期回落，再看同题作答圆点是否远低于峰值，绿色带标出后续要训练的区间。

> **看图路径：** 1. 沿横轴从首层看到末层，比较实线与虚线两条探测曲线；2. 注意绿色带内外曲线先高后低的位置；3. 对照每面板作答圆点与峰值读出的垂直距离

[![原论文 Figure 3：Layer-wise linear-probe readout and answer accuracy in Gemma-4 12B and Qwen2.5-Omni-7B.](https://arxiv.org/html/2611.11573v1/fig_probe.svg)](https://arxiv.org/html/2611.11573v1/fig_probe.svg)

*论文图 3。原论文 Figure 3:：“Layer-wise linear-probe readout and answer accuracy in Gemma-4 12B and Qwen2.5-Omni-7B.”。*

这组面板横轴是从首层到末层的语言模型层，纵轴是准确率，实线与实心点是 Gemma-4 12B，虚线与空心点是 Qwen2.5-Omni-7B，灰色虚线是随机水平，绿色带标出 Gemma-4 12B 的读出下降层。观察时可见每条探测曲线多数早期冲高、后期回落，而同题作答圆点远低于峰值，例如音高在 Gemma-4 早期读出接近高位而作答只有随机附近。需要记住的不对称是探针有监督标签、结构探针还被告知片段边界并对段内表示平均后做差，而模型作答没有这些，因此读出高于作答不能单独证明浪费，但它指出了值得修复的层区间。

**线性探测读出 × 直接作答准确率 × 利用差距：** 线性探测读出是在每一层表示上另训练一个线性分类器去猜答案，衡量该层是否已经把所需声学线索编码成线性可分的形式，直接作答准确率是模型自己看题作答的正确率，利用差距是前者高于后者的部分，说明信息已在表示中但没有被后续层可靠地用于生成答案。

作者选了无独立编码器、把波形帧直接投影进语言模型的 Gemma-4 12B，以及有独立音频编码器的 Qwen2.5-Omni-7B。前者在属性与结构上原始录音准确率分别为 34.7% 与 35.4%，排名第 13，后者分别为 56.7% 与 34.0%，整体排名第 2。两者峰值读出在每个被探测任务上都超过作答，多数峰值在早期层，随后在 Gemma-4 的 10 到 25 层、Qwen2.5-Omni 的 2 到 11 层出现多条读出下滑，据此定出后续训练的读出下降层。

### 只在读出下降层训练什么，内容锚如何防止内容理解漂移

修复只动读出下降层：Gemma-4 12B 的 10 到 25 层，Qwen2.5-Omni-7B 的 2 到 11 层，在每层注意力与前馈投影上加 64 秩 LoRA。训练数据共 103878 条监督题、219.0 小时音频，覆盖 34 个属性与结构任务的提问格式，约八成音频来自 LibriSpeech 训练切分，其余来自 Expresso、Speech Accent Archive、情绪与声音事件等语料，训练与 6 个基准无录音重叠，也不含评测题特有文本。部分训练题通过改音高、时长、噪声、混响或拼接不同说话人片段生成，答案由改动决定，其余来自语料元数据与标签。

**读出下降层 × LoRA 适配器 × 内容锚：** 读出下降层是多个任务的探测准确率一起下滑的连续层区间，LoRA 适配器是只加在这些层的注意力与前馈投影上的低秩可训练旁路，内容锚是对内容问句要求适配后分布靠近关闭适配器时的基座分布的约束，三者搭配是只动信息丢失最明显的加工段、同时不把内容理解带偏。

为保住内容问答，作者另加 16000 条内容锚，包括 10000 条 LibriSQA 口语理解题与 6000 条词类、情绪、讽刺题。在锚题上最小化适配后分布与关闭适配器时的基座分布在答案位置的 KL 散度，声学监督题用交叉熵，联合目标为下式，2 个模型中权重都取 16。训练用 AdamW，共 17548 步，每步 8 条，峰值学习率 3×10−5，取最终适配器，不按评测准确率选检查点。

\[\mathcal{L}=\mathcal{L}_{\mathrm{CE}}+\lambda\,\mathrm{KL}(p_{\text{base}}\,\|\,p_{\theta}),\]

这个公式要约束的是两个行为。第一项让声学题答对，第二项把内容题的输出分布拉回基座模型，符号中 p_base 是关闭适配器时的基座词表分布，p_theta 是适配后分布，KL 度量后者偏离前者的程度，lambda 控制拉回强度。运算顺序是先形成两类题的前向分布，再分别算交叉熵与 KL，加权求和后更新 LoRA 参数，基座权重本身不更新。

**交叉熵 × KL 散度：** 交叉熵是新构造的声学问答监督项，让模型在声学题上学会正确选项，KL 散度是内容锚项，让模型在内容题答案位置的词表分布贴近基座模型，二者加权相加后联合优化，一个推声学利用上升，一个拉内容行为不漂移。

理解时不要把内容锚当成普通多任务数据。它的监督不是人工正确答案，而是基座模型自己的输出分布，作用是记住原来会的内容问答，而不是教新知识，这正是修复后词汇类均值能保持在基座 1 个百分点内的关键设计。

### 评测用了哪些基准、多少题，如何计分与聚合

评测覆盖 6 个公开基准的子集，只保留有书面问题、可自动评分的部分。每题在 5 种输入下用同一评分规则，选择题看所选选项，标签题看回答中第一个标签。每个任务内先对题目平均，再在类内对任务等权平均，开源均值对 19 个模型等权。取样上 AudioBench、AIR-Bench、Dynamic-SUPERB 每任务至多取 500、150、200 题，其余基准保留全部，共 92 个任务、13707 题。录音包含 acted 对白、影视对话、访谈、朗读与合成语音，转写用 Whisper-large-v3，合成用 Edge-TTS 1 女 1 男两声音，朗读经重转写校验，词错误率高于 20% 则重合成。

下表先看基准组成与题量，它决定了后文类均值的分母是什么，指标方向都是准确率越高越好，增益越高说明多用了录音。

| Benchmark | Answer format | Tasks | Items |
| --- | --- | --- | --- |
| AudioBench | Label, multiple choice, short answer | 10 | 4,779 |
| AIR-Bench | Multiple choice | 8 | 1,161 |
| Dynamic-SUPERB Phase-2 | Label | 11 | 2,035 |
| Total |  | 92 | 13,707 |

这张表说明了数据广度。MMSU 占 47 个任务、4535 题，AudioBench 题量最大但任务只有 10 个，MMAU 与 MMAU-Pro 题量小但格式多为选择题。聚合时任务等权意味着题量大的任务不会主导类均值，读数时要把任务数与题数分开看，混合任务只出现在附录逐任务结果。

下表看任务按证据的归类，它决定了词汇、属性、结构 3 类分别包含哪些基准任务，也是结论适用范围的依据。

| Lexical (36 tasks) |  |
| --- | --- |
| Benchmark | Tasks |
| AIR-Bench (2) | Speaker_Intent_Classification, Speech_Entity_Reconition |
| AudioBench (4) | cn_college_listen_mcq_test, dream_tts_mcq_test, public_sg_speech_qa_test, slue_p2_sqa5_test |
| Dynamic-SUPERB (2) | DialogueActClassification_DailyTalk, SuperbIC_SLURP-Intent |
| MMAU (7) | Conversational Fact Retrieval, Dissonant Emotion Interpretation, Event-Based Knowledge Retrieval, Key highlight Extraction, Multi Speaker Role Mapping, Phonemic Stress Pattern Analysis, Phonological Sequence Decoding |
| MMSU (21) | casual_reasoning, code_switch_question_answering, consonant_vowel_perception, content_grounding, continuation_writing, couplet_matching, deixis_resolution, dialogue_reasoning, homophone_based_reasoning, idiom_reasoning, intent_detection, logical_reasoning, long_speech_summarization, near_homophone_perception, polysemy_reasoning, prolonged_sound_reasoning, puns_interpretation, speech_act_classification, speech_translation, syllable_perception, syntactic_structure_matching |
| AIR-Bench (4) | Speaker_Age_Prediction, Speaker_Emotion_Recontion, Speaker_Gender_Recognition, Speaker_Number_Verification |
| AudioBench (6) | iemocap_emotion_recognition, iemocap_gender_recognition, meld_emotion_test, meld_sentiment_test, voxceleb_accent_test, voxceleb_gender_test |
| Dynamic-SUPERB (8) | AccentClassification_AccentdbExtended, DialogueEmotionClassification_DailyTalk, EmotionRecognition_MultimodalEmotionlinesDataset, MultiSpeakerDetection_VCTK, NoiseDetection_VCTK_MUSAN-Noise, ReverberationDetection_VCTK_RirsNoises-MediumRoom, SarcasmDetection_Mustard, SpeakerCounting_LibriTTS-TestClean |
| MMAU (2) | Counting, Emotion Flip Detection |
| MMSU (10) | accent_identification, age_prediction, background_scene_recognition, dialogue_turn_counting, emotion_recognition, emotional_context_reasoning, gender_prediction, non_verbal_sound_detection, sarcasm_detection, total_speaker_counting |
| AIR-Bench (1) | Speech_Grounding |
| MMSU (11) | disfluency_detection, intonation_perception, pause_perception, pitch_comparison, plosive_sound_identification, prolonged_sound_perception, speaker_identity_recognition, speech_duration_estimation, speech_stress_perception, speed_comparison, volume_comparison |
| AIR-Bench (1) | Synthesized_Voice_Detection |
| Dynamic-SUPERB (1) | SpoofDetection_ASVspoof2017 |
| MMAU (1) | Emotion State summarisation |
| MMAU-Pro (6) | Audio Quality, Artifacts & Channel Characteristics; Lexical and Phrase-Level Recognition; Paralinguistic/Emotion Recognition; Speaker Demographics; Speaker Identification; Speech Activity, Turn-Taking and Overlap Detection |
| MMSU (5) | intonation_based_reasoning, pause_based_reasoning, stress_based_reasoning, synthetic_speech_detection, vocal_range_comparison |

这张表是理解结论适用范围的依据。词汇类 36 任务多为内容推理，属性类 30 任务多为说话人与情绪场景，结构类 12 任务集中在 MMSU 与 AIR-Bench 的定位比较，混合类 14 任务只出现在附录逐任务结果。训练格式覆盖 34 个属性与结构任务，另有 8 个属性与结构任务无同格式训练题，可用于看迁移，词汇与混合任务无同格式训练。

### 开源模型落后 Gemini 多少，其中多少来自录音增益

先看原始录音准确率。开源均值在词汇、属性、结构 3 类上落后 Gemini 分别为 13.3、28.6、41.9 个百分点，即使最强的 Qwen3-Omni 在属性与结构上也只有 59.9% 与 49.8%。词汇类两种增益都很小，开源均值与 Gemini 的 S 与 H 都在负 0.3 到正 1.2 个百分点之间，说明词汇题本来就不靠词之外的声音，Gemini 的词汇优势更像语言模型本身更强。

下图按任务组展示增益矩阵，读图时把左侧 19 列看成按原始录音总分排序的开源模型，右侧看开源均值与 Gemini 的 OO 与两种增益，紫色为正、棕色为负。

> **看图路径：** 1. 先看右侧三类任务的开源均值与 Gemini 的原始录音准确率；2. 再比较同一行两种增益的紫色深浅与数值大小；3. 注意词汇行增益普遍很小而属性与结构行分化明显

[![原论文 Figure 2：Recording gains of the open models and Gemini 3.1 Pro on the three task classes.](https://arxiv.org/html/2611.11573v1/fig_smatrix.svg)](https://arxiv.org/html/2611.11573v1/fig_smatrix.svg)

*论文图 2。原论文 Figure 2:：“Recording gains of the open models and Gemini 3.1 Pro on the three task classes.”。*

这张图确实可见的是词汇行颜色浅、数值小，属性与结构行紫色更深且 Gemini 明显更深。原文报告属性类 S 相差 27.7 减 9.8 得 17.9 个百分点，H 相差 23.8 减 8.0 得 15.8 个百分点，结构类 S 相差 26.4 减 3.1 得 23.3 个百分点，H 相差 22.6 减 2.7 得 19.9 个百分点，每组都约占对应 OO 差距的一半或更多。Qwen3-Omni 的 S 与 H 在属性为 18.4 与 14.7、结构为 12.0 与 10.1，也低于 Gemini。限制是 2 次比较共用同一 Whisper 转写，识别错漏会同时影响 S 与 H，结论依赖的是两者共有模式而非单一差值。

### 定层训练把属性与结构准确率提了多少，词汇是否保住

修复后类均值的比较问题是：在同为实际可运行的基座与修复模型之间，原始录音准确率与两种增益如何变化，词汇是否漂移。指标方向都是越高越好，准确率单位为百分比，增益与变化单位为百分点。下表用原文连续句整理核心数字，保留基座、修复与变化的对应关系。

| 模型与任务类 | 原始录音准确率 基座到修复 | 录音增益 S 基座到修复 | 录音增益 H 基座到修复 |
| --- | --- | --- | --- |
| Gemma-4 12B 结构 | 35.4% 到 66.2% | 2.5 到 29.6 | 5.2 到 29.5 |
| Qwen2.5-Omni-7B 属性 | 56.7% 到 69.5% | 18.3 到 30.3 | 14.9 到 28.9 |

上表的主要收益是属性提升 18.9 与 12.8 个百分点，结构提升 30.8 与 44.4 个百分点，词汇均值距基座在 1 个百分点内，具体为 Gemma-4 从 78.3% 到 79.1%，Qwen2.5-Omni 从 83.4% 到 83.7%。代价与边界是 Gemma-4 仍落后 Gemini 属性 21.7、结构 9.2 个百分点，而 Qwen2.5-Omni 在属性距 Gemini 5.8 个百分点、结构超过 Gemini。原文还指出每类每模型中 S 的上升占 OO 上升的 69% 到 94%，说明提升大多表现为更大的录音增益。未胜出项是 7 个无同格式训练的会话情绪与讽刺任务，修复后 Gemma-4 平均降 4.1 个百分点，Qwen2.5-Omni 平均升 4.3 个百分点，个别任务在 2 模型中都有下降，迁移并不均匀。

### 提升来自更好地用已有信息吗，适配器位置与训练选择说明什么

训练后重复探测显示，11 个被探测任务上作答平均升 27.7 与 27.2 个百分点，而末层读出只升 6.7 与 11.0 个百分点，训练前峰值读出在每个任务都高于作答，训练后 Gemma-4 闭合约一半差距，Qwen2.5-Omni 闭合大部分。作者明确说探针有监督且结构探针有边界优势，这种比较不能量化多少提升来自更好利用，只能说作答涨幅大于读出涨幅与更好利用已有编码信息的解释一致。例子是 Gemma-4 性别末层读出从 56.6% 升到 72.2%，而说话人数读出变化不到 5 个百分点但作答升超 30 个百分点。

下表比较适配器只开在音频位置或只开在文本位置时能恢复多少完整增益，比较问题是提升来自改音频表征加工还是改读题写答案，指标是恢复份额越高说明该位置贡献越大。

| 模型与任务类 | 只开音频位置恢复份额 | 只开文本位置恢复份额 |
| --- | --- | --- |
| Gemma-4 12B 属性 | 76% | 22% |
| Gemma-4 12B 结构 | 57% | 33% |
| Qwen2.5-Omni-7B 属性 | 68% | 27% |
| Qwen2.5-Omni-7B 结构 | 33% | 32% |

上表说明 3 组中只开音频位置恢复超一半，文本位置只恢复 22% 到 33%，例外是 Qwen2.5-Omni 结构类，两边各约三分之一，剩余需两边同时开启。结合探测早层已可读，作者认为最大头来自改被训层对音频 token 的加工，而非题面格式记忆。读这张位置图时注意箭头粗细即份额，不要把它当成内部计算路径的定位。

下面这张位置图把上述份额画成箭头粗细，读图时先比较同一面板两条箭头的粗细，再跨面板看例外情况。

> **看图路径：** 1. 比较只开音频位置与只开文本位置两条箭头的粗细与百分比；2. 注意三个面板中音频位置占优，右下面板两者各约三分之一；3. 把箭头份额与加工音频表征的结论对应起来

[![原论文 Figure 4：Accuracy gain by adapter position.](https://arxiv.org/html/2611.11573v1/fig_repair_route.svg)](https://arxiv.org/html/2611.11573v1/fig_repair_route.svg)

*论文图 4。原论文 Figure 4:：“Accuracy gain by adapter position. Arrow width shows the share of the full adapter’s gain recovered when it is active only at audio or text positions.”。*

这张图确实可见的是上方两面板中指向答案的绿色粗箭头份额更大，下方右图中两条箭头粗细接近。它支持的是在此设置下音频位置的改动贡献了主要增益，但不能进一步指认具体是哪个注意力头或哪一步推理变了，原文也把更细的干预实验列为待做。训练选择的对照是：去掉内容锚后词汇准确率在 2 模型分别降 10.5 与 5.6 个百分点，而属性结构提升相似或更大；把同宽度适配器放到其他层区间，结构增益在 2 模型都变小，越靠后的区间越小；训练全部层用约 3 倍可训练参数，属性结构增益与 S 变化相对读出下降层至多差 4.1 与 2.5 个百分点，说明位置比参数量更重要。

### 这些结论在什么条件下才成立，还有哪些不能说

第一，录音增益依赖参照质量。S 含自然与合成语音之差，合成音色可能帮忙也可能误导；H 在两边都给转写，给文字本身会改变图文融合方式；两者共用同一 Whisper 转写，识别错误会同时影响两者。作者用两种增益共有模式做稳健估计，但不能说任一数字就是纯声学贡献。

第二，修复只在 2 个模型验证，一个有独立编码器、一个没有，且尺寸与训练数据也不同，不能把两者差异归因于编码器设计，也不能说该方法对所有架构同样有效。训练题覆盖 34 个任务格式，词汇与混合任务无同格式训练，8 个属性结构任务也无同格式训练，超出格式的迁移需要另测。

第三，探测与作答不对等。探针有监督标签、结构探针还有片段边界与段内平均，而模型作答没有，因此读出高于作答本身不等于浪费，训练后作答涨幅大于读出涨幅也不能量化利用改善的占比。层选择由读出下降指导，但作答差也出现在读出仍高的地方，全部层训练只差一点，后期区间恢复更少，说明最优区间仍需更细搜索。大多数题是一录一问，多人对话与边听边说的全双工场景是否适用、合成朗读在连续交互中是否仍是好参照，都未评测。

### 要复现与核查，第一步做什么，需要补哪项验证

值得尝试的情形是模型在属性与结构任务上原始录音只比文字高一点，而早期层探测已能读出线索，这时定层训练更可能补利用而非补编码。第一步是按原文 5 条件重跑：同一问题选项下测 NN、AA、TT、OO、AO，TT 用 1 女 1 男两遍平均，任务内先平均、类内任务等权，再算 S 与 H 是否同向；同时在读出下降候选层做线性探测，看峰值是否系统性高于作答。

关键超参数与信息条件要保留：LoRA 秩 64，加在读出下降层全部注意力与前馈投影，lambda 取 16，AdamW、17548 步、每步 8 条、峰值学习率 3×10−5，训练数据 219.0 小时且与评测无录音与题面重叠，内容锚 16000 条。还需补的验证是换转写系统与合成声音看 S 与 H 是否同向，换层区间与全层训练看结构增益是否仍小，以及在无同格式任务上单独报告正负例，避免只报平均掩盖个别任务下降。

来源方面，文中称已放出数据构造脚本、代码与训练好的 LoRA 适配器，但本次收到的资源清单中没有完成 HTTPS 验证且可用的作者资源，因此不能写作者资源当前可用或已公开，只能按论文陈述引用其发布声明，实际能否下载运行需读者自行核对。

### 一句话结论与给新生的行动建议

论文直接报告的是：开源均值与 Gemini 在属性与结构上的 OO 差距中约一半或更多来自录音增益差距；两个被探测模型早期层已可读出多数线索而作答远低于读出；在读出下降层加内容锚训练后，属性结构准确率升 12.8 到 44.4 个百分点且多表现为增益上升，词汇均值保持在 1 个百分点内。这些证据支持的解释是 2 模型编码了未被可靠使用的声学信息，训练改变了对音频表征的加工，但探针优势与层选择粗糙意味着不能量化利用改善的精确份额。

对新生而言，可复述的关键步骤是任务按证据分类、五输入双增益测量、逐层探测定区间、定层 LoRA 加内容锚训练、前后重测增益与探测。容易误解的是把增益数字当纯声学因果、把读出高于作答当浪费的证明、把个别迁移成功当普遍迁移，以及把论文的发布声明当成本次已验证可下载。下一步若要跟进，应先在自己的模型上复现双增益同向与早期高读出，再小范围试定层训练并单独列出词汇漂移与无格式任务的正负结果。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.11573v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
