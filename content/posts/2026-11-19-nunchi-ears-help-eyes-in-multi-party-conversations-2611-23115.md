---
title: "Nunchi: Ears Help Eyes in Multi-Party Conversations"
date: 2026-11-19
draft: false
tags: [人类视觉注意预测, 多模态学习, 基准测试, 语音]
categories: [论文速递]
description: "多人同框时仅靠视线方向难以确定观察者在看谁，Nunchi 把冻结注视模型的几何输出与说话人分数和对话文本写成同一套带编号的文本提示交给视觉语言模型权衡，在 SORBET 上达到 86.7% 并在多人条件下增益更大，但结论只在单关键帧且目标必为同框候选人的评测条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.23115"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "听见再看清：Nunchi 如何用说话人和文本记录在多人对话中找注视对象"
paper_digest_original_title: "Nunchi: Ears Help Eyes in Multi-Party Conversations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.23115v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.23115v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.23115v1.pdf"
paper_digest_primary_task: "人类视觉注意预测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.human-visual-attention-prediction","label":"人类视觉注意预测"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "多人同框时仅靠视线方向难以确定观察者在看谁，Nunchi 把冻结注视模型的几何输出与说话人分数和对话文本写成同一套带编号的文本提示交给视觉语言模型权衡，在 SORBET 上达到 86.7% 并在多人条件下增益更大，但结论只在单关键帧且目标必为同框候选人的评测条件下成立。"
paper_digest_authors: [{"affiliations":["Dankook University"],"name":"JunYeong Park"},{"affiliations":["Beijing Jiaotong University"],"name":"Shijing Wang"},{"affiliations":["NVIDIA"],"name":"Seonwook Park"},{"affiliations":["NVIDIA"],"name":"Michael Stengel"},{"affiliations":["NVIDIA"],"name":"Shalini De Mello"},{"affiliations":["Dankook University"],"name":"Sang-Il Choi"},{"affiliations":["University of Birmingham"],"name":"Hyung Jin Chang"}]
paper_digest_abstract_sha256: "8a39d13d4508f474cdffc1a501fb39f2d4f62b822f0af45f9298f646eac4bb75"
paper_digest_sidecars: {"citation.bib":{"sha256":"88202962df85725759df0d2f50bc2f73b13192df38c6a01600070a8bca475a07","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-23115/citation.bib"},"citation.json":{"sha256":"99430354b7ba78aec0c445b5798de06963c78aa6afce667f443841a1c39c47f6","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-23115/citation.json"},"citation.ris":{"sha256":"09f3bd8ee60da3f6f1ab3381fc1ccc80f81674e182f64231a4557de84f19f502","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-23115/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f62113b474c5f8ad7093f7773ba7dc85bb7c1e0e2e4ef709bce78d9de960fe11","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-23115/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "6d437c7c21fae75a9b860fcfb2435985bc4fdbc41a07e8a1c6e24dcf2db719fa"
paper_digest_api_reader_plan_sha256: "2e644383b9afe16632d0c6ca3c9521f350799a1fd040e787586f669380623235"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "301096cfd334df0a7e7373231a634af6f1054349ebe513c5d4d7ea893ae8f92b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3ff4d3950ede6ca5297301c483d9ddd77f6574ab22f8ea17d461915476544389"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8a87015dc3a0576a6a3b61793fbcd961084fcd6ab98687e22c2a3bf728bd14a1"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "323eb3159557c45a6d14ebd897d95f73fa4e389f927dfbd6798c55e5c01a951d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 听见再看清：Nunchi 如何用说话人和文本记录在多人对话中找注视对象

> 英文题目：*[Nunchi: Ears Help Eyes in Multi-Party Conversations](https://arxiv.org/abs/2611.23115v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[人类视觉注意预测](/audio-paper-digest-blog/papers/?concept=task.human-visual-attention-prediction)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- JunYeong Park：Dankook University
- Shijing Wang：Beijing Jiaotong University
- Seonwook Park：NVIDIA
- Michael Stengel：NVIDIA
- Shalini De Mello：NVIDIA
- Sang-Il Choi：Dankook University
- Hyung Jin Chang：University of Birmingham

## 📌 核心摘要

多方对话中需从多名候选人中判断观察者注视谁，难点是人数增多后多人处于相近视线方向，仅靠视线几何易混淆，而说话得分与话语转写形式不同，需对应到同一人物并在冲突时权衡。在VAT上视线跟踪模型身份准确率从2人候选时83.9%降至5个以上候选人时64.3%，说明人数增加带来模糊性。SORBET提供3340个样本，来自1578个片段、241个剧集，每样本带同步语音、话语转写与被注视者标签，供训练评测。Nunchi先用冻结的视线估计模型输出热图并统计落入各候选人放大脸框的比例形成视线先验，再用冻结的说话人检测模型估计观察者与各候选人的说话得分并整理当前及前两句转写，最后把候选人脸框标为C1至CK并在所有线索中使用相同编号，与标注图像和观察者裁剪图一起送入视觉语言模型。模型一次前向传播对每个编号输出分值并取最高者为预测，微调仅用LoRA更新语言部分而冻结视觉编码器。该设计与在特征层直接融合或仅用图像几何的视线跟踪和社会注视方法不同，把异构线索统一到共享文本空间并显式对齐人物，按样本权衡冲突线索。在SORBET测试集上Nunchi达到86.7%的身份准确率，比微调解码器的最强现有方法81.9%高4.8个百分点，5个以上候选人时优势更大。结论适用于剧本化电视剧单帧且观察者必看向候选人之一的情形，注视漂移、物体或画外目标未被覆盖，训练在单块NVIDIA A100上以有效批量8至多训练2个轮次完成，原文未披露推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多人对话里看谁在看谁为什么难

刚接触语音和视觉交叉研究的同学可以先把场景想成电视剧里客厅坐着四五个人。镜头给出同一帧画面，我们指定其中一个人为观察者，其余同框且身份已知的人都是候选人，任务是判断观察者此刻在看哪一个候选人。输入是单张关键帧加每个人脸框，输出是候选人编号，评测只看是否选对人。

这个任务的难点不在检测人脸，而在方向估计的小误差会被多人布局放大。当两个人站在观察者视线方向的几乎同一条线上，热图峰值偏几个像素就会换一个人。论文把这种空间关系称为注视几何，意思是观察者的视线方向与候选人位置之间的相对布局。注视几何在 2 人场景够用，人一多就出现多个候选人挤在同一方向的情况。

对话恰好提供注视几何缺少的信息。听觉方向的同学很熟悉谁在说话这个信号，文本方向的同学熟悉说了什么这个信号。听众常常看向当前说话人，说话人点名也可能把观察者的注意力拉过去。但已有注视数据集大多只有图像或视频加注视点，没有同步语音和文本记录，想用量化实验说明对话有没有用也找不到统一的数据划分。

### 已有三条路线各卡在哪里

第一条是注视跟随，代表是 Gaze-LLE 和 Sharingan。它们输出视线落点的热图，再看哪个候选人框内热图质量最大或峰值落在谁的框里。Gaze-LLE 的特点是用冻结的通用视觉编码器加轻量解码器，原文直接拿它当几何专家。这类方法在人少时很准，人多时多个框挤在同一方向，选框规则就变得敏感。

第二条是社交注视，代表是 MTGS。它为每个人预测是否在看人的概率，选概率最高的候选人。它能处理多人随时间的变化，也接受说话状态输入，但原文引用其结论说这种特征级融合对看人概率提升很小。本文的对比给它喂了同样的说话人分数，目的是在相同分数输入下比较融合方式，而不是比较谁的检测器更好。

第 3 条是多模态注视跟随和视觉语言模型。MMGaze 把图像和音频一起送进网络并自带说话人估计模块，VLM 路线如 Qwen3-VL、InternVL3.5、Qwen2.5-Omni 可以直接读图和文字。论文指出 VLM 语义理解强但几何定位不如专用注视模型，所以 Nunchi 不让 VLM 自己估计方向，而是把专用模型的几何读数写成文字给 VLM 权衡。这也是本文与直接把音频丢给全能模型的思路的区别，原文报告直接给音频的效果低于显式线索，具体数字在补充材料，正文只保留这个定性结论。

### 本文要解决的选择题是什么

论文把问题形式化为被注视者识别。给定关键帧、观察者脸框和 K 个候选人脸框，预测被注视者的下标。K 在这里是除观察者之外的候选人数。每个样本只保留视线目标恰好是某个候选人的情况，看物体、看画外、视线在关键帧处漂移或无法判断的样本都不进入 SORBET 的最终统计。这是一个重要边界，后面所有准确率都是在这个过滤后的选择题上算的。

为了让刚入门的读者感受到人数的影响，先看论文在已有数据上的对照。下面这张小表只整理原文用连续句子报告过的一组数字，比较问题是同样用原文所用检查点的注视跟随模型，当同框人数变多时选对人的比例如何变化。

| 条件 | 方法 | 身份准确率（%，原文表注为 identity accuracy (%)） |
| --- | --- | --- |
| VAT 上除观察者外有 2 人 | Gaze-LLE | 83.9 |
| VAT 上除观察者外有 5 人或更多 | Gaze-LLE | 64.3 |

这张表支撑的判断很具体：在 VAT 这个视频注视数据上，Gaze-LLE 随人数增加明显下降，从 83.9% 掉到 64.3%。它不能推广到所有模型和所有数据，但它说明仅靠几何在多人时确实变模糊，这也是后文引入对话线索的动机。同一趋势在 ChildPlay 等数据上也存在，细节见原文表 1，本文不再逐格复述。

下面这张图是理解这种模糊的入口，左侧是只用几何的两个已有模型选错，右侧是结合对话线索后选对，读图时注意箭头落点和编号的对应关系。

> **看图路径：** 1. 先看左侧两条虚线注视估计如何落到错误的人脸上；2. 再看右侧说话人与文本框如何指向 C2；3. 对比左右两图观察者绿框与候选人黄框的编号是否一致

[![原论文 Figure 1：Attended person identification in a multi-party conversation.](https://arxiv.org/html/2611.23115v1/teaser.png)](https://arxiv.org/html/2611.23115v1/teaser.png)

*论文图 1。原论文 Figure 1:：“Attended person identification in a multi-party conversation.”。*

这张图确实可见的是左侧观察者绿框发出两条红色虚线，分别标着 Gaze-LLE 和 MTGS 但都落到错误人脸，右侧 Nunchi 用蓝色箭头指向标为 C2 的人脸，下方同时给出说话人是 C2 和一句英文对话。它帮助理解本文的核心主张：当几何给出多个相近方向时，知道谁在说话和说了什么可以打破平局。但这只是一个教学示例，不能当成平均效果，平均效果要看后面的结果表。

### Nunchi 的三段式流程一次走通

拿一个样本走一遍最清楚。输入是一张关键帧、观察者框和 K 个候选人框，外加这句话对应的音频和文本记录。第一段是线索抽取，用冻结的专家得到几何和说话人信息，不更新它们的参数。第二段是提示构造，把所有信息写成带统一编号的文字，并把编号画回图上。第 3 段是候选人打分，用一个视觉语言模型一次读完两张图和整段提示，给每个编号打分，分数最高的即为预测。

两张图分别是画好框的关键帧和 448×448 的观察者裁剪图。文字提示先声明观察者只看其中一个候选人并列出编号，然后分段给出注视先验、说话人线索和文本记录。注视先验这个术语首次出现时需要解释：它就是 Gaze-LLE 热图按框统计后的文字版，候选人按框内热图占比降序排列，还附带峰值是否落在框内、峰值到框中心的距离、峰值坐标、观察者脸中心坐标和落在所有候选框之外的热图比例。它的首位就是零样本 Gaze-LLE 会选的人。

下面这张总览图把 3 段和 3 条颜色路径画在一起，读图说明在图前，解释在图后，观察时沿输入到输出的主箭头走。

> **看图路径：** 1. 沿左侧三条颜色路径看注视、说话人和文本分别经过哪个冻结模块；2. 看中间提示框里三段文字如何都使用 C1、C2、C3 编号；3. 看右侧一次前向如何从答案标记后第一个编号的对数值选出 C2

[![原论文 Figure 3：Overview of Nunchi. Cue extraction obtains gaze and speaker information with frozen experts,…](https://arxiv.org/html/2611.23115v1/architecture.png)](https://arxiv.org/html/2611.23115v1/architecture.png)

*论文图 3。原论文 Figure 3:：“Overview of Nunchi. Cue extraction obtains gaze and speaker information with frozen experts, along with the transcript.”。*

这张图确实可见的是左侧 3 路分别标着 Gaze-LLE 视线热图、LR-ASD 说话分数和文本记录，中间把热图质量、说话分数条和对话文字都转成带 C1、C2、C3 编号的文本块，右侧 Qwen3-VL-8B-Instruct 的语言模型部分标着可训练的 LoRA 而视觉编码器标着冻结，最后答案标记后的编号对数值选出 C2。在这个示例里注视先验首位是 C1 而说话人首位是 C2，两者冲突，模型最终选了 C2。它直观展示了异构、未对齐、可能冲突的 3 类线索在哪里汇合：全部在输入层用文字汇合，网络结构本身不用为每种模态改融合模块，增删线索只改提示段落。

### 几何与说话人分数是怎么算出来的

几何这路用 ViT-L 版本的 Gaze-LLE，在 GazeFollow 上训练过，本文使用时冻结。输入是关键帧和观察者框，输出是整图热图。对每个候选人，取其脸框放大 1.5 倍后框内热图质量占全图热图质量的比例记为 mk，排序即为几何排序。放大框是为了容忍框定位和热图扩散，选质量最大还是选峰值在原文补充里结果相近，正文统一用质量规则。

说话人这路用 LR-ASD，在 AVA-ActiveSpeaker 上训练过，同样冻结。它吃脸轨迹加音频，逐帧判断每个人是否在说话，再在当前话语区间内平均，得到每个候选人的说话分数 ak 和观察者的说话分数 aO。分数高意味着更可能正在说话。脸轨迹来自第 3 节为 MIntRec2.0 补的跟踪聚类流程，原文报告这些身份与独立说话人检测模型在多脸话语上 93% 到 94% 一致。

**注视几何 × 注视先验：** 注视几何指观察者的视线方向与各候选人位置之间的空间关系，注视先验是把这种关系落成文字的版本，做法是用冻结的 Gaze-LLE 先算一张视线热图再统计每个候选人框内的热图占比并排序，二者搭配是让视觉语言模型不用自己估计精确方向，直接读文字化的几何排序去和对话线索比较。

这段不训练专家是为了把几何精度和说话人检测的已有能力直接拿来用，代价是它们的错误会原样进入提示。好处是提示里的数字都有明确来源，复现时只要跑通两个公开专家就能得到同样的 mk 和 ak 分布，再谈 VLM 如何权衡才有公平起点。

### 编号如何把声音文字和脸绑到同一个人

提示构造的关键不是写漂亮句子，而是对齐。图像上观察者画绿框，候选人画黄框并标 C1 到 CK。文字里所有线索都用同一套编号。说话人段落列出 aO 和全部 ak 以及全帧分数最高的人。文本段落给出当前句和前两句，每句带相对关键帧的起始帧偏移，并去掉每句的原始说话人名，避免从名字直接泄漏说话人信息，只让说话人信息来自说话人分数。

人物名到编号的替换依赖角色身份。例如 Ross, come here 会被改成 C2, come here，前提是知道谁是 Ross。SORBET 来自 Friends-MMC 和 MIntRec2.0，前者自带身份，后者靠聚类加单脸片段自动命名补齐。这一步是复现时最容易被低估的成本：没有身份就无法把文本里的人名映射到框，跨数据集时只能保留原文提到的人名原样，这也是 VGS 和 AVA-LAEO 上用 Whisper 文本时的做法。

**说话人线索 × 文本记录线索：** 说话人线索回答谁正在说话，是主动说话人检测模型对观察者和每个候选人输出的分数，文本记录线索回答说了什么，是当前句加前两句的文字，搭配的意义是先用分数把声音和人脸对应起来，再用文字内容判断这句话是否会吸引观察者的注意，原文发现文本单独作用小，叠在说话人之上才多出 1.5 个百分点。

对音频背景的读者可以这样记：说话人分数解决声纹到脸的对应，文本记录解决语义到注意力的对应，前者是连续分数，后者是离散话语，两者都转成带编号的段落才进得了同一个语言模型上下文。

### 一次前向如何给每个候选人打分

打分模型默认用 Qwen3-VL-8B-Instruct。提示末尾拼接前缀 {"answer": "C，强迫下一个词元必须是候选人编号。取编号 k 的对数值 zk 作为 Ck 的分数，预测即为分数最大者。所有候选人的分数来自同一次前向，模型在生成任何解释之前就已读出 zk，所以预测不依赖后面生成的理由。训练目标是先写答案再写简短理由的 JSON，理由由模板从标注填充，包括当前说话人，损失覆盖全部目标词元。

训练只用 LoRA 更新语言模型，秩 32，缩放系数 64，视觉编码器冻结。优化器是 AdamW，学习率 10 的负 4 次方，有效批量 8，最多两轮，用 400 个固定验证样本选轮次。所有 VLM 基线用同样设置，保证比较的不是优化超参数。冻结的 Gaze-LLE 和 LR-ASD 不计入可训练参数，原文报告 Nunchi 可训练量是 87.3M，总量 8.85B。

**候选人标签 × 视觉提示：** 候选人标签是给每个候选人编的 Ck 编号，视觉提示是把观察者画绿框、候选人画黄框并把编号直接画在关键帧上的做法，搭配后同一编号同时出现在图像、注视先验段落、说话人段落和改写后的文本记录里，模型才能把声音、文字和脸对应到同一个人，解决异构线索无法自动对齐的问题。

这种设计的实际含义是冲突解决被推迟到推理时的注意力里，而不是学一组固定权重。原文用逻辑回归在 mk 和 ak 上学固定权重只能到 83.9%，低于加说话人线索的 Nunchi 的 85.2%，且当几何首位和说话人首位不一致时差距从 2.8 拉大到 7.4 个百分点。这组数字说明按样本权衡在冲突样本上更重要，但它用的是同一组说话人分数，几何专家相同，差别只在如何组合。

### SORBET 的数据从哪里来又如何划分

SORBET 不是重新拍摄，而是给两个多人对话数据集补注视标注。来源是 Friends-MMC 的 220 集 Friends 和 MIntRec2.0 中来自生活大爆炸与超市店员的部分，Friends 重叠部分只用前者。每个话语自带视频片段、同步语音、文本记录和说话人标签。预处理用 PySceneDetect 切镜头，只保留至少 3 人可见且说话人可见的帧，连续保留帧组成段，每段取中间帧为关键帧，避免相邻帧近似重复。每个身份已知的人轮流当观察者，其余当候选人，一个关键帧加一个观察者构成一样本，先得到 7323 个待标注样本。

标注界面只给关键帧加脸框、周围带音频的片段和文本记录，不给任何模型预测。标注分稳定单目标、关键帧处漂移和无法判断，目标可以是候选人、物体、画外、无框人物等。最终只保留目标是候选人的 3340 个样本。标注一致性用 Cohen 和 Fleiss 的 κ 报告，3 个剧集的重标 κ 为 0.82、0.93 和 0.87，6 人共标 57 个全选候选人的样本上 Fleiss κ 为 0.95，分歧多在目标是否算候选人。

**同步语音 × 文本记录 × 说话人标签：** 同步语音是和视频关键帧对齐的音频，说话人标签指出当前话语是谁说的，文本记录是这句话的文字，三者组合才构成可用的对话证据，SORBET 的价值正在于同一批多人样本同时提供这三样加人物注视标注，让模型能训练和衡量每种线索的增量。

下面这张流程图是复现 SORBET 思路的关键，读图时重点看过滤条件和样本定义。

> **看图路径：** 1. 从左到右跟随从原始剧集到关键帧再到样本的筛选箭头；2. 注意中间蓝色框里被丢弃的三种情况；3. 看最右侧 SORBET 保留的样本必须同时有什么模态

[![原论文 Figure 2：Construction of SORBET. From two multi-party conversation datasets, we keep frames with at least…](https://arxiv.org/html/2611.23115v1/preprocess.png)](https://arxiv.org/html/2611.23115v1/preprocess.png)

*论文图 2。原论文 Figure 2:：“Construction of SORBET. From two multi-party conversation datasets, we keep frames with at least three identified people and a visible speaker, and take the middle frame of each…”。*

这张图确实可见的是从左到右五大块：原始剧集、镜头过滤、样本搭建、人工标注和最终数据集。过滤块明确丢弃说话人不可见、人数少于 3、时长不足 1 秒的镜头，样本块把同一帧里每个人轮流标为 O 其余标为 Ck，标注块只保留人物目标，最终块标出每关键帧至少 3 人且每样本同时有视频、音频、说话人和文本记录。它帮助理解 SORBET 的适用边界：说话人必须可见、每帧至少 3 人、单关键帧判断，这些在跨数据集时都不再保证。

下面这张表只用原文连续句子报告过的数字，比较问题是 SORBET 到底有多大、怎么分、说话人能直接猜对多少。

| 项目 | 数量 |
| --- | --- |
| 样本总数 | 3,340 |
| 片段总数 | 1,578 |
| 剧集总数 | 241 |
| 训练、验证、测试样本数 | 1,839、658、843 |
| 目标是当前说话人的比例 | 57.8% |

这张表支撑的判断是数据量和划分都在剧集级别不重叠，训练 1839、验证 658、测试 843，且说话人直接猜对只有 57.8%，说明只看谁在说话远不够。跨剧集差异大，Friends 测试 480 个，BBT 测试 139 个，Superstore 测试 224 个，后文分剧集结果要对照这个不平衡来读。

### 主结果在什么条件下成立

评测指标是身份准确率，就是在候选人里选对被注视者的比例，方向是越高越好。基线分 4 类：注视跟随用热图质量选框，社交注视用看人概率选人，多模态 MMGaze 用自带检测框匹配候选人，VLM 基线不用注视先验只读图加或不加对话线索。每个基线都报告原文所用检查点和在 SORBET 上按官方流程微调后的最佳配置，MMGaze 按原文配方从 ImageNet 初始化在 SORBET 上训练，因为这样比微调其原检查点更高。

下面这张表整理主结果的比较问题：在 SORBET 测试集 843 个样本上，相同评测规则下谁选得更准，尤其在 5 个或更多候选人的困难子集上，以及在相同说话人分数输入下组合方式是否重要。为紧邻表格说明比较问题，本段作为表前说明，指出表格覆盖全集与分系列与困难子集的身份准确率。

|  | Model | Training | Output | Cue | Params (trainable) | All | Friends | BBT | Superstore | K≥5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gaze following | Gaze-LLE [35] | zero-shot | Mass | – | 307.3M (0) | 79.6 | 77.5 | 86.3 | 79.9 | 64.0 |
| Gaze following | Gaze-LLE [35] | decoder | Mass | – | 307.3M (2.9M) | 81.9 | 81.7 | 86.3 | 79.5 | 66.0 |
| Gaze following | Gaze-LLE [35] | LoRA + dec. | Mass | – | 309.6M (5.3M) | 81.6 | 80.2 | 85.6 | 82.1 | 67.0 |
| Gaze following | Gaze-LLE [35] | full | Mass | – | 307.3M (307.3M) | 79.8 | 78.1 | 87.1 | 79.0 | 64.0 |
| Gaze following | Sharingan [38] | zero-shot | Mass | – | 106.1M (0) | 76.3 | 75.2 | 80.6 | 75.9 | 58.0 |
| Gaze following | Sharingan [38] | decoder | Mass | – | 106.1M (7.9M) | 76.4 | 75.0 | 80.6 | 76.8 | 57.0 |
| Multimodal | MMGaze [17] | full | Box | S | 62.6M (62.4M) | 57.3 | 49.6 | 69.8 | 66.1 | 30.0 |
| Social gaze | MTGS [15] | zero-shot | LAH | – | 155.4M (0) | 75.2 | 74.4 | 81.3 | 73.2 | 57.0 |
| Social gaze | MTGS [15] | full | LAH | – | 155.4M (67.6M) | 78.2 | 76.3 | 84.2 | 78.6 | 61.0 |
| Social gaze | MTGS [15] | full | LAH | S | 155.4M (67.6M) | 79.0 | 77.1 | 84.9 | 79.5 | 61.0 |
| VLM (w/o Gaze-LLE evidence) | Qwen3-VL-8B [4] | LoRA | Logit | – | 8.85B (87.3M) | 76.2 | 71.0 | 84.2 | 82.1 | 60.0 |
| VLM (w/o Gaze-LLE evidence) | Qwen3-VL-8B [4] | LoRA | Logit | S+T | 8.85B (87.3M) | 81.7 | 75.6 | 90.7 | 89.3 | 68.0 |
| VLM (w/o Gaze-LLE evidence) | InternVL3.5-8B [42] | LoRA | Logit | – | 8.62B (87.3M) | 72.7 | 69.8 | 82.7 | 72.8 | 54.0 |
| VLM (w/o Gaze-LLE evidence) | InternVL3.5-8B [42] | LoRA | Logit | S+T | 8.62B (87.3M) | 79.4 | 73.3 | 88.5 | 86.6 | 67.0 |
| VLM (w/o Gaze-LLE evidence) | Qwen2.5-Omni-7B [44] | LoRA | Logit | – | 9.01B (80.7M) | 70.3 | 66.0 | 77.7 | 75.0 | 55.0 |
| VLM (w/o Gaze-LLE evidence) | Qwen2.5-Omni-7B [44] | LoRA | Logit | S+T | 9.01B (80.7M) | 75.3 | 68.5 | 83.5 | 84.8 | 60.0 |
| Nunchi (Ours) | Qwen3-VL-8B + gaze prior | LoRA | Logit | – | 8.85B (87.3M) | 83.3 | 79.8 | 88.5 | 87.5 | 67.0 |
| Nunchi (Ours) | Qwen3-VL-8B + gaze prior | LoRA | Logit | S | 8.85B (87.3M) | 85.2 | 81.9 | 89.9 | 89.3 | 74.0 |
| Nunchi (Ours) | Qwen3-VL-8B + gaze prior | LoRA | Logit | S+T | 8.85B (87.3M) | 86.7 | 82.9 | 92.1 | 91.5 | 76.0 |

这张表支撑的判断需要加 3 个限制。第一，最强已有方法是解码器在 SORBET 上微调过的 Gaze-LLE，4.8 个百分点的领先是在 SORBET 测试分布、说话人可见、目标必为候选人的条件下测得，Nunchi 加说话人与文本线索在 SORBET 为 86.7%，换分布就不一定。第二，困难子集上 76.0% 比次优高 8.0 个百分点，次优是同样 Qwen3-VL 但不读注视先验只读对话线索的版本，说明几何与对话互补在人多时更明显，对话线索在该子集带来 9.0 个百分点而全集只带来 3.4 个百分点。

第三，同样 LR-ASD 分数下 Nunchi 涨 1.9 个百分点而 MTGS 只涨 0.8 个百分点，差别在组合方式而非分数质量，但这不意味着特征融合一定不行，只是在本文输入和数据下文字并列更有效。未胜出的负结果也要记住：MMGaze 只有 57.3%，且其首位框在 26.2% 的测试样本上与任何候选人脸都不重叠，说明检测框匹配这条路在多人同框下本身就脆弱。

**身份准确率 × 注视跟随 × 社交注视：** 身份准确率是在候选人集合上选对被注视者的比例，注视跟随原来预测视线落点的热图位置，社交注视原来预测每个人是否在看人的概率，三者在本文被统一到同一个选择任务下比较，都是从各自输出里挑出一个候选人再算选对比例，分母都是有确定人物目标的样本。

### 对话线索与视觉线索谁真正补了几何

消融的比较问题是往基础输入里一次加一种线索，基础输入是两张图加注视先验。除了说话人和文本记录，还试了 4 种视觉线索：相对深度、相互注视占比、每人最看谁的图关系、在第三张图上从观察者脸画到热图峰值的箭头。指标仍是身份准确率，方向越高越好。

下表直接对应消融比较问题，按基础输入与每次单加一种线索组织，数值是身份准确率及其相对基础输入的变化，可核对说话人与文本与 4 种视觉线索的增减。

| Cue | All | Friends | BBT | Superstore | K≥5 |
| --- | --- | --- | --- | --- | --- |
| base input | 83.3 | 79.8 | 88.5 | 87.5 | 67.0 |
| Conversational |  |  |  |  |  |
| + speaker | 85.2 (+1.9) | 81.9 | 89.9 | 89.3 | 74.0 |
| + transcript | 83.2 (−0.1) | 79.0 | 89.9 | 88.0 | 64.0 |
| + speaker + transcript | 86.7 (+3.4) | 82.9 | 92.1 | 91.5 | 76.0 |
| Visual |  |  |  |  |  |
| + reciprocal [9, 15, 24] | 81.1 (−2.2) | 77.9 | 86.3 | 84.8 | 65.0 |
| + graph [10] | 81.7 (−1.6) | 78.3 | 86.3 | 86.2 | 65.0 |
| + depth [11, 5, 16] | 82.2 (−1.1) | 80.2 | 86.3 | 83.9 | 69.0 |
| + arrow [27, 28] | 82.6 (−0.7) | 80.6 | 87.8 | 83.5 | 72.0 |

这张表支撑的判断是说话人是主要增量，文本是条件增量，自动文本几乎不掉点。说话人与文本记录同时加高 3.4 个百分点，仅加说话人高 1.9 个百分点，文本记录叠在说话人之上再高 1.5 个百分点，单独加文本几乎不动。人工文本换成 Whisper 自动文本低 0.3 个百分点，说明方法不依赖人工文本的洁净度，但这只在 SORBET 测试集上测过，且跨数据集时人名保留原样，身份映射缺失的影响另算。视觉线索侧全是负结果：相互注视降 2.2，图关系降 1.6，深度降 1.1，箭头降 0.7。原文的解释是其中三者来自同一个 Gaze-LLE，与注视先验信息重叠，加了等于重复读同一份几何。

为理解文字消融数字对应的定性现象，下面按基础列与加深度列与加相互注视列与加说话人列与最右 Ours 列的顺序观察同一批样本的箭头落点变化，重点看白色箭头是否从绿色观察者框落到正确黄色框以及右上角对错标记。

> **看图路径：** 1. 逐列对比基础输入、加深度、加相互注视与加说话人线索的箭头落点；2. 注意只有加对话线索的列把箭头纠正到正确人物；3. 观察绿框观察者与黄框候选人在多行场景中的相对位置变化

[![原论文 Figure 5：Qualitative cue ablation on the SORBET test set.](https://arxiv.org/html/2611.23115v1/qual_cue_compact.png)](https://arxiv.org/html/2611.23115v1/qual_cue_compact.png)

*论文图 5。原论文 Figure 5:：“Qualitative cue ablation on the SORBET test set.”。*

这张图确实可见的是上下两行场景里基础列、加深度列、加相互注视列的白色箭头都落在错误黄框并标红叉，只有加说话人列和最右 Ours 列的箭头落在正确黄框并标绿勾。它不能证明视觉线索永远无用，只能说明在这批样本和这种文字化或画图方式下，视觉线索没有补出几何之外的新信息。复现时如果想加新视觉线索，应当先检查它与注视先验的相关性，否则很可能重复计算。

### 哪些情况本文没有测或测了但变差

先说数据边界。SORBET 来自剧本化电视剧，表演和机位都按剧本走，与自然会议或教室不同。只用单关键帧，假设观察者必看某个候选人，漂移、看物体和看画外都不在评测里。文本人名映射依赖角色身份，没有身份的新场景要另想办法。VGS 上基础输入只有 48.9%，低于零样本 Gaze-LLE 的 51.5%，说明在 SORBET 上训练的 VLM 并非处处可迁移，加上说话人和 Whisper 文本后才到 52.6%。

再说跨数据集。VGS 用全部 266 个样本，AVA-LAEO 用验证电影的 322 个样本，观察者看候选人中 1 人但说话人不必可见，文本全用 Whisper 生成。在 SORBET 上训练的模型直接测，准确率随说话人线索、再随自动文本单调上升。在 AVA-LAEO 上跨数据集到 91.0%，与在 AVA 训练电影上另训的域内模型的 89.4% 相当。被注视者是当前说话人的比例在 VGS 只有 10.5%，AVA-LAEO 只有 33.2%，SORBET 测试集却有 60.9%，增益在低说话人先验下仍存在，这削弱了只靠猜说话人就能解释增益的质疑。

还有两项未完成。直接把原始音频给 Qwen2.5-Omni 的效果低于显式分数加文本，端到端用音频加多帧还在未来工作。3 个 VLM 上几何加对话都是最大增益，Qwen3-VL 最好，但零样本和分线索结果在补充材料，正文只保留微调后趋势。推理开销、延迟和训练之外的部署成本原文没有报告，不能从准确率推断更快更便宜。

### 复现第一步要准备什么

按原文可复现的起点是先跑通两个冻结专家。Gaze-LLE 用 ViT-L 在 GazeFollow 上的版本，LR-ASD 用在 AVA-ActiveSpeaker 上的版本，脸框和脸轨迹按第 3 节补齐。统计出每个候选人的热图占比和说话人平均分，再按原文段落格式写成带统一编号的提示，图像上画好绿黄框和编号。VLM 用 Qwen3-VL-8B-Instruct，冻结视觉编码器，只对语言模型加 LoRA，秩 32，缩放 64，AdamW 学习率 10 的负 4 次方，有效批量 8，最多两轮，用固定验证集选轮次。单张 A100 可跑，代码用 PyTorch。

评测时注意三处容易错的细节。选框规则统一用 1.5 倍放大框内热图质量最大，峰值规则结果相近但不要混用。MTGS 对比要喂同样的 LR-ASD 分数，否则比较的就不是组合方式。跨数据集不要沿用 SORBET 的人名替换逻辑，没有身份时保留 Whisper 原文。论文结论部分表示将公开标注和代码，但本次未发现完成 HTTPS 验证的作者资源链接，因此不要默认代码已可用，先按上述专家加提示自行搭建，缺的只是训练好的 LoRA 权重和标注文件本身。

### 什么时候值得试什么时候要补验证

当你的场景也是单帧多人同框、每人脸框已知、且有同步音频和文本时，这套把几何写成文字再让语言模型权衡的思路值得试，尤其候选人多到几何拥挤时。对话线索的增益在 3 个 VLM、自动文本和两个外部数据上都保持方向，说明它不是某个模型的偶然拟合。实现代价主要是身份映射和提示构造，而不是改网络结构，增删线索只改段落。

需要补的验证也很明确。第一，换到非剧本、固定机位的会议数据上，说话人可见性、身份缺失和多帧信息会如何改变增益，需要重新划分剧集或会议级别的不重叠测试。第二，视觉线索的负结果只覆盖原文试过的 4 种写法和文字化方式，不能推广为视觉永远无用，加新深度或 3 维线索前先测与注视先验的互信息。第三，没有延迟和成本测量，不要承诺实时可用。把这三项补完，才能判断耳朵帮助眼睛的程度在你的部署条件下是否成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.23115v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
