---
title: "Omni-MMSI: Toward Identity-attributed Social Interaction Understanding"
date: 2026-09-13
draft: false
description: "论文提出只用原始音视频判断最后说话人在跟谁说话的 Omni-MMSI 任务，并用参考引导的工具抽取加两步思维链推理的 Omni-MMSI-R 解决身份归属难题，在 Ego4D 和 YouTube 上取得报告的最优准确率，代价是需手工构建参考对和过滤生成推理标注。"
tags: ["多模态学习", "音视频理解", "说话人识别", "语音对话系统"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Li_Omni-MMSI_Toward_Identity-attributed_Social_Interaction_Understanding_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_Omni-MMSI_Toward_Identity-attributed_Social_Interaction_Understanding_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Omni-MMSI_Toward_Identity-attributed_Social_Interaction_Understanding_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9e95d60ab8575a4f26beb10a6fdc079f9fe091db57466bacedd448e40442b02f"
paper_digest_api_reader_plan_sha256: "e1f2f38a6ed9314cc66bb36aa958757faad9146b9efe4bf4424bd7c7f1fd7e95"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ac5bd3b5cc29d800dcd64ea43d61b0d1fce6c3c17b99ddabe9994685c8e2ecc7"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "862158b6bb19fc7c46a224d06377901a26009bbaee539c32bfcafe779d897999"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b41a709936857c5f458d8a359e18384dc612357c0af9464192ad9e3805f52c03"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4a45710e891788f36e6858160e85f606bf74f3cb7c88e9757f45762bc52c0e6d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"task","id":"task.speaker-identification","label":"说话人识别"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"}]
paper_digest_primary_task: "音视频理解"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 从原始音视频算起：用参考锚定身份再推理社交指向

> 英文题目：*Omni-MMSI: Toward Identity-attributed Social Interaction Understanding*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Li_Omni-MMSI_Toward_Identity-attributed_Social_Interaction_Understanding_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Omni-MMSI_Toward_Identity-attributed_Social_Interaction_Understanding_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Omni-MMSI_Toward_Identity-attributed_Social_Interaction_Understanding_CVPR_2026_paper.pdf)

标签：#多模态学习 #音视频理解 #说话人识别 #语音对话系统

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xinpeng Li：机构信息未能从会议 PDF 纯文本可靠映射
- Bolin Lai：机构信息未能从会议 PDF 纯文本可靠映射
- Hardy Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shijian Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Cihang Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Yuyin Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- James M. Rehg：机构信息未能从会议 PDF 纯文本可靠映射
- Yapeng Tian：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

Omni-MMSI要求仅从原始音视频输入完成说话目标识别与代词指代消解，输出最后说话人所指身份，难点在于多方遮挡与重叠语音下语音内容与人脸框的跨模态身份归属极易错位。该流水线先检索每位参与者的参考音频与视觉图像对作为身份锚点。接着调用转写加声纹校验与检测加行人重识别工具生成带身份的言语与非言语线索，明确谁说了什么以及位于何处。然后将原始音视频流、参考对与已归属线索联合送入经LoRA微调的Qwen2.5-Omni-7B进行两步思维链推理，先确认最后说话人再推断其指代对象。与直接调用全模态大模型做隐式归属不同，该设计把记忆锚点外置并用专用工具显式对齐，减少按空间顺序猜测身份的错误，使推理基于可核对的线索展开。在YouTube基准下，Omni-MMSI-R的平均准确率为47.04%，高于Gemini 2.5 Pro的平均准确率44.80%。该结论适用边界受限于狼人杀类围坐讨论场景、每段5轮对话且平均14秒的短片段，对开放场景的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出必须保留什么？

这篇论文面对的输入是原始的多人音视频片段，也就是麦克风录到的混合声音加上相机拍到的多人画面，没有人事先把谁在何时说了哪句话标好，也没有人事先把每个框标成 Player 几。系统要输出的是一个身份编号，例如最后说话的是 Player0，他正在跟 Player2 说话。初学者容易把这件事理解成先做语音识别再做大模型问答，但论文强调必须保留的是归属，也就是每一句转写文本都要连到具体说话人，每一个位置框都要连到具体被拍的人。

只有保留了这种带身份的言语和非言语线索，后面的社交判断才有依据。如果把归属丢掉，模型可能转写对了文字却安错了人，指向判断就会连带出错。论文把这种从原始数据出发、先归属再推理的完整要求定义为 Omni-MMSI。它的现实动机是随身助手只能拿到流式音视频，不能指望部署现场有人做 oracle 预处理。

为了让研究生能复述，记住一个样本的走法就够了。输入是一段约十几秒、包含 5 轮对话的多人片段，输出是最后说话人所指的人。中间必须经过两类表示，一类是带说话人的对话记录，写清谁说了什么，另一类是带身份的位置框，写清谁在哪里。论文用狼人杀类社交推理场景做载体，因为其中有大量第二人称和第三人称指代，天然需要判断说话目标。学习时先不要跳到模型结构，先确认任务边界，凡是假设转写和关键点已完美给出的做法都不属于这个任务，只有从原始音视频起步的做法才算。

### 常见误解如何用原文纠正？

第一个误解是转写对就等于任务对。原文的反例是 Gemini 转写文字基本可读却把说话人安错，导致指向错，因此必须同时评估言语归属。第二个误解是框画准就等于视觉对。原文指出按左右顺序编身份在遮挡下会整体错位，因此必须评估带身份的框，而非只看检测框位置。第三个误解是模型越大自动用好参考。

原文显示小模型加入参考后下降，大模型也并非都提升，只有配合工具先做好归属才能稳定获益。第 4 个误解是推理越长越好。原文的 3 步设置反而下降，说明在当前数据量和感知能力下两步最平衡。这些纠正都来自原文的对照和例子，复述时应明确归因，不把单例推广为普遍规律。

### 同输入同目标的已有路线差在哪里？

在多模态多人社交理解这条线上，已有工作大多研究如何用言语和非言语线索做手势、注视、表情、对话情感或说话人日志等子问题，输入往往已经是分好身份的线索。论文把这类工作归为假设身份归属线索完美提供，优点是能集中研究表示对齐和对话预测，缺点是与部署时的原始输入之间有一道鸿沟。另一条线是多模态基础模型和推理模型，包括开源和闭源的 omni 模型，以及文本上的思维链和视频上的推理扩展，还有用工具增强大模型的做法。论文指出思维链和工具范式在社交理解中尚未被系统探索，尤其缺少把参考身份与工具抽取结合起来的做法。

对照时要按同输入、同目标、同运行阶段来比。如果输入是 oracle 线索，那么它与本文原始输入的结果不能直接比胜负，只能说明归属环节带来了多少下降。如果目标只是转写或检测，那也不能直接说明指向判断的好坏。论文的差异化正在于把运行阶段前移，要求模型自己完成归属，再做指向推理，并为此补了参考对和推理标注。

### 与同类工作如何公平对照？

公平对照要固定输入与目标。若对照转写或检测单项，应说明那不是指向任务，不能当同条件胜负。若对照 oracle 输入的社交模型，应把 oracle 结果标为事后或非可部署参考，不能代替可部署收益。本文的可部署策略是参考加工具加微调加两步推理，对手应是同样只用原始输入的 omni 模型和以往管线。原文中 Lee 与 Li 的管线在原始输入下被重测，Qwen、Phi、HumanOmni、R1-Omni、OmniVinci、Qwen3 Omni 和 Gemini 2.5 Pro 被直接喂原始音视频，这种对照保留了实际可运行策略，符合要求。

类别差异不能当胜负，例如情感识别或注视估计的进步不能直接推断指代任务的进步。引用他人数字时要核对数据集、阶段、指标与聚合对象，数值相同不代表指标相同。

### 要测的两个指代问题是什么？

论文研究两个典型任务。第一个是说话目标识别，用英文缩写 STI 表示，判断当最后一句包含你、你们等第二人称指代时，说话人在跟谁说话。第二个是代词指代消解，用 PCR 表示，判断当涉及他、她等第三人称代词时，代词指场景中的哪 1 位。2 个任务共用同一种输入输出形式，输入是原始音视频加任务提示，输出是被指人的身份编号。举例来说，若最后一段是 Player0 说的你们看到自己是失眠者吗，系统要回答 Player2，而不是只回答出现了第二人称。

难点在于多人群体动作细微、声音相似且重叠多。论文报告两类证据，一是早期为单人设计的现成抽取器在多人归属上失效，二是 omni 大模型虽能抽线索却常把线索安错人。视觉上模型可能默认按从左到右的空间顺序编身份，一旦遮挡或重叠导致检测错位就会整体错位。语音上模型可能识别对了文字却配错了说话人。这种跨模态归属错误会直接污染后续推理。

### 参考引导管线如何走完一个样本？

Omni-MMSI-R 的总体安排是先用参考锚定身份，再用工具生成带身份线索，最后用 omni 大模型做思维链推理。给定一个查询片段，系统先取出场景中每个人的参考音频图像对，这些参考保存了代表性的长相和声音。接着任务专用工具分别处理声音和图像，生成谁说了什么和谁在哪里。最后把查询音视频、参考对和工具线索一起送入微调后的 Qwen2.5 Omni 7B，模型先确认最后说话人，再推断其指代对象并给出最终答案。

下面这张总览图把上下两部分放在一起，上半是任务定义，下半是管线，适合初学者先建立输入到输出的主路径。

> **看图路径：** 1. 先看上半部分从多人画面加声波到带框带说话人的归属线索的箭头；2. 再看下半部分查询与圆形参考头像如何汇入抽取框；3. 最后看思维链框到末句说话人指向结论的落点

[![原论文 Figure 1：Overview of the Omni-MMSI task and Omni-MMSI-R pipeline.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/cfba69a3a4fd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/cfba69a3a4fd/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of the Omni-MMSI task and Omni-MMSI-R pipeline.”。*

图的上半从多人客厅画面和蓝色声波出发，向下汇成带坐标和说话人的两句示例，再向下明确社交问题是判断最后说话人指谁。下半从查询音频和图像图标与绿色参考头像汇合开始，经过抽取带身份线索框，再经过多模态思维链框，最后落到末句说话人指向的结论。这种画法把参考的作用摆得很正，参考不是附加显示，而是抽取和推理共同依赖的锚点。理解时注意参考头像旁的声音波形标记，它提示每个身份都有声纹和外观两个锚。

### 工具如何把声音和框对应到人？

声音分支的做法分两步。先用 Whisper 把查询音频转写成带时间戳的 utterance 序列，再对每段 utterance 用 SpeechBrain 做说话人验证。具体是把 utterance 音频和每个参考声音都编码成向量，算余弦相似度，取相似度最高的参考作为该段话的说话人。这样得到的是带说话人的言语线索，包含转写文本和对应身份。图像分支的做法也是两步。

先用 YOLO 检测查询视频最后 1 帧中所有可见人，得到位置框，再用 OSNet 做人体重识别，把每个检测框裁图和每张参考图像编码成视觉向量并比对，取最相似者为该框身份。这样得到的是带身份的非言语线索，包含空间位置和身份。抽取完成后，带身份线索、查询音视频和参考对一起送入 omni 大模型。

**身份归属 × 社交线索抽取：** 身份归属负责把一段语音或一个检测框对应到 Player0 到 PlayerN 中的具体 1 人，社交线索抽取负责先用 Whisper 转写、YOLO 检测等工具得到无归属的内容和位置，二者搭配的理由是多人群体中声音相似且遮挡重叠严重，单独抽取只能得到说了什么和哪里有人，只有经过与参考声音和参考外观比对归属后，才能形成谁说了什么和谁在哪里，可供后续推理直接使用。

**参考音频视觉对 × 说话人验证：** 参考音频视觉对是为场景中每个人事先保存的上半身图像和若干段声音，起记忆锚点作用，说话人验证是用 SpeechBrain 把待查 utterance 音频和每个参考声音编码成向量并算余弦相似度取最高者为说话人，二者搭配的原因是验证需要稳定的比对目标，参考对提供了跨时间和跨模态不变的身份表示，组合后语音归属不再依赖空间顺序猜测。

**人体重识别 × 非言语线索：** 人体重识别是用 OSNet 把查询视频最后 1 帧的检测框裁图和每张参考图像编码比对以确定框中是谁，非言语线索指带身份的位置框，分工是前者做视觉身份判定，后者是判定结果的承载形式，搭配理由是检测器只给位置不给身份，只有经过重识别比对才能把位置转化为可推理的谁在哪里，从而与言语线索对齐。

> **看图路径：** 1. 先沿左侧查询音视频和参考对向中间工具框的箭头看输入汇合；2. 再看中间检测框与右侧带说话人标签对话的虚线对应；3. 最后看下方思维链中确认与推断两句的措辞

[![原论文 Figure 3：Overview of the Omni-MMSI-R pipeline.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/cfba69a3a4fd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/cfba69a3a4fd/figure-3.png)

*论文图 3。原论文 Figure 3：“Overview of the Omni-MMSI-R pipeline.”。*

这张管线细节图把工具分工标得很细，顶部列出转写、日志、检测和重识别 4 个工具，中间左侧是查询片段和 4 人参考对，中间是带框画面与带说话人标签对话的对应，底部是思维链文本。看的时候注意橙色与紫色虚线的对应关系，它表示哪句话和哪个框属于同一人。底部思维链先写最后说话人经声音匹配确认为 Player2，再写基于轮次和相互注视判断其话语朝向 Player3，最后给出结论。这种两句式结构正是后文监督的模板。

### 推理标注如何构造，模型如何微调？

论文没有只让模型直接输出答案，而是监督结构化思维链。标注构造采用生成加过滤管线。先把查询片段、参考输入和社交线索上传给 Gemini 2.5 Pro，请它生成包含最后说话人确认和指代推断的推理痕迹与最终答案，推理中要求引用言语和非言语证据。再按拒绝采样原则过滤，只保留最终答案与真值一致的样本，否则反复查询直到答对或达到 10 次上限。最后做轻量人工复核，丢弃或最小改写与音视频证据不一致的痕迹。经过这一过程，YouTube 上为训练保留 STI 两千余条和 PCR 近 2000 条，Ego4D 上保留 STI 五百余条和 PCR 三百余条，每条推理平均两百字左右。

模型训练选用 Qwen2.5-Omni-7B，在 LLaMA-Factory 框架下做有监督微调，采用秩为 8 的 LoRA，其他 LoRA 超参数沿用框架默认。训练用交叉熵损失，余弦学习率调度加一成热身，上下文长度 16384，训练 3 轮，每设备批量 1，梯度累积 1，2 个任务的学习率按经验设为 1 乘以 10 的负 4 次方。输入是提示加查询音视频加参考加工具线索，输出是思维链加最终答案。论文未报告冻结哪些层或梯度细节，复述时只能说 LoRA 微调该 omni 模型，不从模型名推定具体冻结实现。

**最后说话人确认 × 指代对象推断：** 最后说话人确认是先综合声音匹配和可见张嘴等证据核对最后一段话到底是谁说的，指代对象推断是再结合轮次承接、注视和话语内容判断这句话中的你或他指谁，分工是前者固定推理起点，后者完成社交指向，搭配原因是若起点错则指代必然错，论文因此把两步固定为两步思维链的监督结构，先确认再推断。

### 数据、划分与指标如何对齐？

实验在 Werewolf Among Us 数据集的 YouTube 和 Ego4D 两个子集上做 STI 和 PCR。YouTube 包含 STI 三千余条和 PCR 两千余条，平均每条约 5 人。Ego4D 包含 STI 八百余条和 PCR 五百余条，平均每条也是 5 人左右。每个样本都手工构建参考音频图像对，查询片段统一为 5 轮对话，平均时长 14 秒，参考音频剪到 5 秒，参考图像尺寸不一。论文说明在 Omni-MMSI 设置下去掉了 oracle 转写和关键点，但提供参考和思维链标注。

指标方面，社交理解用预测指代对象的总体准确率，方向是越高越好。身份归属 дополнительно 评估每句话的说话人归属准确率和最后 1 帧检测位置的归属准确率，以及二者平均。比较时要注意数据集、任务、阶段和聚合对象是否一致，Ego4D 与 YouTube 的数字不能混读，STI 与 PCR 也不能直接平均后当单任务读。

资源可用性需要如实说明。本次收到的证据中没有来源绑定且完成验证的代码或数据链接，项目页链接在原文中出现但本次未能确认可达，因此不能写代码模型数据已公开，只能说论文给出了项目页字符串，当前是否可达待验证。硬件预算和统计显著性在所给证据中未报告，复述时应指出缺项，不编造机型和方差。

### 主结果在相同原始输入下比了什么？

主结果比较的是在只给原始音视频的条件下，不同管线做 STI 和 PCR 的能力。对于近期 omni 大模型，直接喂查询音视频并请其生成归属线索和答案，身份按系统提示中的空间顺序确定。对于以往忽略归属的管线，先用抽取器生成无归属线索再送模型。下面的表按 Ego4D 在上、YouTube 在下的顺序呈现，指标方向都是准确率越高越好。读表前先确认问题是参考引导加工具加思维链是否带来可部署的增益，公平条件是都不用 oracle 线索。

| Qwen2.5 Omni 7B [90] | 26.29 | 28.57 | 27.43 |
| --- | --- | --- | --- |
| Phi-4-Multimodal [1] | 14.86 | 8.93 | 11.90 |
| HumanOmni [104] | 21.71 | 14.29 | 18.00 |

表后解释需要同时看到收益与代价。报告显示 Omni-MMSI-R 在 Ego4D 平均 43.06% 和 YouTube 平均 47.04%，高于同表中的开源 omni 模型和以往管线。支持的判断是显式参考引导加强了多模态社交推理。但也要看到绝对准确率仍未过半，说明任务仍难。未胜出的例子包括 Gemini 2.5 Pro 在 YouTube 的 PCR 上仍有竞争力，以及 R1-Omni 等在该设置下几乎不能给出有效答案，表明小模型或未适配模型在原始输入下会失效。

身份归属的对比进一步说明增益来源，比较的是言语归属、非言语归属及其平均，越高越好。

| OmniVinci [92] | 54.04 | 27.42 | 40.73 |
| --- | --- | --- | --- |
| Qwen3 Omni 30B [91] | 52.61 | 57.61 | 55.11 |
| Omni-MMSI-R (ours) | 71.09 | 86.48 | 78.79 |

该表显示本方法在 2 数据集的言语和非言语归属上都高于同表中的 OmniVinci 和 Qwen3 Omni。论文据此认为参考显著提升归属能力。但要注意部分弱模型不能生成有效归属因而未报告，这本身就是负结果，说明直接让小 omni 模型做归属并不可靠。下面的挑战图把从 oracle 到原始输入的下降可视化，左侧是性能柱，右侧是归属错位实例。

> **看图路径：** 1. 先对比左侧两组柱图中紫色与蓝格柱的高度落差；2. 再看中间真值框与右侧预测框中身份标签的错位；3. 最后核对下方对话文本中说话人标签的对应错误

[![原论文 Figure 2：Illustration of the challenge in Omni-MMSI.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/cfba69a3a4fd/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/cfba69a3a4fd/figure-2.png)

*论文图 2。原论文 Figure 2：“Illustration of the challenge in Omni-MMSI.”。*

左侧上下两组柱分别对应 STI 和 PCR，紫色代表此前用 oracle 线索，蓝格代表用原始音视频，Lee、Li、人工、Qwen 和 Gemini 5 组都出现明显落差。右侧中间为真值框与对话，右侧为 Gemini 预测，可见框标签错位和说话人标签错配，红色叉号标出错误归属。这支持论文把瓶颈定位为身份归属，而非单纯语言理解。

### 参考、线索与推理各自贡献多少？

为拆开参考引导输入的作用，论文在 Ego4D 上做消融，基线是只微调查询音视频，完整输入再加参考音频、参考图像、言语线索和非言语线索。读表前确认问题是各部分是否互补，公平条件是同模型同训练轮数同评测划分，指标仍是 STI、PCR 与平均准确率。

| Qwen2.5 Omni 7B [90] | 21.23 | 10.71 | 15.97 |
| --- | --- | --- | --- |
| OmniVinci [92] | 24.00 | 36.61 | 30.31 |
| Qwen3 Omni 30B [91] | 28.57 | 39.28 | 33.94 |

该表是带参考条件下的管线对比，可视为参考是否被有效利用的证据。报告显示本方法与 Gemini 相当并超过开源小模型，而小模型在加入参考后反而下降，说明大模型能从参考获益，小模型可能用不好参考，因而需要轻量工具先做好归属。未胜出项是 Qwen2.5 Omni 在参考设置下明显低于非参考设置，这反证了不是所有大模型都能直接利用参考对。

另一张输入配置表进一步拆模态，完整配置取得最高平均。

| ✗ ✗ ✗ ✗ | 29.19 | 38.68 | 33.97 |
| --- | --- | --- | --- |
| ✓ ✓ ✗ ✗ | 32.78 | 39.18 | 35.98 |
| ✗ ✗ ✓ ✓ | 37.14 | 41.75 | 39.44 |

表后看，单加参考对或单加抽取线索都能高于基线，二者合用最高，音频加言语线索与视觉加非言语线索各有增益，合用互补。这支持论文让模型同时看原始证据和抽取线索的安排，模型被提示联合使用两者并在思维链首步复核最后说话人，从而有机会纠正不准的线索。但论文也提醒这不是盲信线索，而是用原始证据补足。

推理粒度的消融显示，无推理、一步指代推断、两步加确认、3 步再加线索抽取中，两步最优，3 步反而下降。论文给出的有限解释是过长推理分散注意力、模型感知能力有限以及数据量不足以支撑更复杂的多步学习，这些属于支持性解释而非因果证明，复述时用可能或待验证的措辞。

为满足五列呈现，另用原文连续句整理两张宽表，分别对应挑战下降与总体增益，数字与单位保留原文写法。

| 输入切换 | 任务范围 | 原有管线平均下降 | 人与先进模型平均下降 | 证据指向 |
| --- | --- | --- | --- | --- |
| oracle 线索转原始音视频 | STI 与 PCR | 28.1% | 9.52% | 归属为瓶颈 |

上表提出的问题是从完美线索切换到原始输入时下降有多大，公平条件是同任务同评测，指标方向是下降越小越好。表后解释是两类对象都下降，说明不仅是旧管线的问题，先进模型和人工也会受影响，但旧管线降幅更大。这支持把研究重点放在归属上，代价是该表只给平均降幅，未给出按数据集和任务的细分布。

| 数据集 | 社交理解相对既往 | 归属相对先进模型 | 绝对表现 | 结论限定 |
| --- | --- | --- | --- | --- |
| Ego4D | 12% | 23.7% | 43.06% | 参考引导有效但绝对值仍低 |
| YouTube | 15.1% | 18.9% | 47.04% | 参考引导有效但绝对值仍低 |

上表提出的问题是本方法相对可运行基线的增益有多大，条件是同为原始输入，指标是准确率越高越好。表后解释是社交理解和归属两类指标上都有 2 位数百分点的报告增益，但绝对准确率仍不足 50%，且 YouTube 的 PCR 强基线仍接近，说明增益存在但任务远未解决，未评测延迟与成本边界。

### 哪些边界尚未验证？

论文直接报告的是准确率增益，有限解释是参考与两步推理互补，未验证的推测包括更长推理是否随数据量增加而变好，以及参考在真实设备注册流程中的稳定性。缺失证据不是技术错误，但复述时要分开措辞。相关性不等于因果，例如参考与增益同现不能直接断定某一模态必然因果贡献，消融虽有支撑但仍受训练配置影响。论文未测量误判率分布、推理延迟和计算成本，因此不能承诺这些量得到改善。训练资源、推理开销、输出帧率与实际延迟应分别讨论，总体趋势不等于每组每步都成立。

另一边界是参考构建成本。研究中为每样本手工裁上半身图像并抽多段声音，共 69 个音视参考画像覆盖不同参与者，实际部署需靠注册或验证流程采集，其噪声与缺失情形未在所给证据中评测。思维链标注依赖大模型生成加过滤加人工复核，最多重试 10 次，这种流程的成本和可重复性也需补验证。定性例子显示 Gemini 常把文字配错人或按空间顺序错编身份，本方法通过对齐参考纠正，但单例不能推广为全程保证。

### 复现先做什么，需要哪些信息条件？

若要复现，先按信息条件准备三样东西。一是查询片段的统一规格，5 轮对话、平均 14 秒，任务提示明确最后说话人指向问题。二是每个场景的参考音频图像对，音频剪到 5 秒左右，图像为上半身裁图，身份编号与查询中的 Player 编号对应。三是工具链，Whisper 做转写、SpeechBrain 做声音比对、YOLO 做最后 1 帧检测、OSNet 做视觉比对，再把带身份的对话与框与原始音视频一起送入 Qwen2.5-Omni-7B 的 LoRA 微调。训练超参数按原文保留秩 8、上下文 16384、3 轮、学习率 1 乘以 10 的负 4 次方，其余沿用 LLaMA-Factory 默认，不自行补冻结细节。

推理时要求模型输出两步思维链，先确认最后说话人并引用声音与视觉证据，再推断指代对象并引用轮次与注视等线索，最后给身份编号。评测时分别算 STI、PCR 准确率和归属准确率，注意百分点与相对百分比不同，不同指标差值不混放。代码与权重可用性方面，本次证据未验证可达，不要写已公开，复现前需先确认项目页与数据许可。下面的定性对比适合作为复现后的自查样例。

> **看图路径：** 1. 先横向对比真值、Gemini 与本方法三列的检测框标签；2. 再逐行核对三列对话文本中说话人归属的对错标记；3. 最后看底部思维链如何用相互注视解释指向选择

[![原论文 Figure 6：Qualitative comparison between Gemini2.5 Pro and our proposed Omni-MMSI-R on multi-party situations.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/cfba69a3a4fd/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/cfba69a3a4fd/figure-6.png)

*论文图 6。原论文 Figure 6：“Qualitative comparison between Gemini2.5 Pro and our proposed Omni-MMSI-R on multi-party situations.”。*

三列从左到右是真值、Gemini 与本方法，上方是带身份框的同桌画面，下方是带说话人标签的对话与指代结论。可见 Gemini 把多句归属标错并指向 Player1，本方法标对并指向 Player2，底部思维链用第二人称和相互注视解释选择。自查时应逐句核对归属而非只看最终指向，因为指向对可能来自归属蒙对，复现要的是归属与推理同时对。

### 何时值得尝试这种做法？

当你的应用只能拿到原始音视频，且多人声音相似、遮挡多、必须回答在跟谁说话时，这种先用参考锚定再做两步推理的做法值得尝试。它的适用条件很明确，现场能为每人采集到可用的声音和外观参考，且能承担工具抽取加微调的成本。如果没有参考或参考噪声大，论文的增益可能不成立，这时应先补参考质量验证，而不是直接加长推理。教学上记住一句话，抽取解决说了什么和哪里有人，归属解决是谁，推理解决指谁，两步缺一不可。

对刚入语音音频领域的同学，建议把学习顺序定为先听懂说话人验证的向量比对，再看懂重识别的图像比对，最后才看思维链的文本模板。不要把比喻当证明，记忆锚点只是帮助理解，真正的依据是相似度计算和受监督的确认加推断。未来还需补的验证包括跨场景参考泛化、实时延迟与成本、以及更细的误判分析，这些在原文所给证据中尚未完整报告。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

另有 2 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Omni-MMSI_Toward_Identity-attributed_Social_Interaction_Understanding_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
