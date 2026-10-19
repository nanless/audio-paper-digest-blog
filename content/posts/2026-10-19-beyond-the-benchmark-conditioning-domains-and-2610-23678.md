---
title: "Beyond the Benchmark: Conditioning, Domains and Failure Modes of Qwen3-TTS"
date: 2026-10-19
draft: false
tags: [语音克隆, 音频伪造检测, 人类参与评测, 模型评估]
categories: [论文速递]
description: "本文比较 Qwen3-TTS 的两种参考用法在朗读、会议、情感和空管四个领域中的拟真度、声学得分与失效条件，发现领域差异远大于模型差异，且短参考配错文本最容易引发幻觉。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.23678"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "Qwen3-TTS 两种克隆方式在四个领域里到底差在哪"
paper_digest_original_title: "Beyond the Benchmark: Conditioning, Domains and Failure Modes of Qwen3-TTS"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.23678v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.23678v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.23678v1.pdf"
paper_digest_primary_task: "语音克隆"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.voice-cloning","label":"语音克隆"},{"facet":"task","id":"task.audio-forgery","label":"音频伪造检测"},{"facet":"method","id":"method.human-evaluation","label":"人类参与评测"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"}]
paper_digest_primary_method: "人类参与评测"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "本文比较 Qwen3-TTS 的两种参考用法在朗读、会议、情感和空管四个领域中的拟真度、声学得分与失效条件，发现领域差异远大于模型差异，且短参考配错文本最容易引发幻觉。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Séverin Baroudi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yanis Labrak"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Petr Motlicek"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hervé Bredin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ricard Marxer"}]
paper_digest_abstract_sha256: "b16704e5d8666f4db8204606580191f9e2a39e1c71b3b8dfa4389f82e130e436"
paper_digest_sidecars: {"citation.bib":{"sha256":"70c3ab73326b0f73789e42643fadc3265ec97752d30e5454d6f250acd106d274","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23678/citation.bib"},"citation.json":{"sha256":"123797e470ad8ce552059050439cb341ebb24fea92f3a9df3b8caca29999c7eb","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23678/citation.json"},"citation.ris":{"sha256":"d77c79ed6959af742123cd8ca94d3756aa5e90f5b9008d9ca2e5f87b31d05b11","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23678/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"4828f962e054aba21394bf3b88b1b68f5cd1a8f8ff60d3bd93a3daa31a8ed772","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23678/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f0a0d56502b056f050c3d4387a6ea1761ea2ab658f2fed521031b0b1f0afdb32"
paper_digest_api_reader_plan_sha256: "e3cbf28378d158e57637bb3ed970b8e03f42f8b1591afc1e71e2404d96e3a8b7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "84ebeb1f1d8afeab1fb6757ca3ca54128c3657b296bc626f59e850e4888f3e8d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "82adaa20ad0b8373332c4eff9b3cbe753bb7757d07d2a7303864e4d9dc683863"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d11282667c719d26ae8234b5919577484ce82213ff3e37f441de6dd5dea91d4d"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "aae5fbf3f53156abd01cf9044a459fe33d4869460a5abf5a2a6f8cfd24a9057d"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 Qwen3-TTS 两种克隆方式在四个领域里到底差在哪

> 英文题目：*[Beyond the Benchmark: Conditioning, Domains and Failure Modes of Qwen3-TTS](https://arxiv.org/abs/2610.23678v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音克隆](/audio-paper-digest-blog/papers/?concept=task.voice-cloning)；[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery)
- **研究方法**：[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation)
- **研究重点**：[模型评估](/audio-paper-digest-blog/papers/?concept=research_focus.evaluation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.2/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5


## 👥 作者与机构

- Séverin Baroudi：机构信息未能在本次解析中与作者逐人可靠绑定
- Yanis Labrak：机构信息未能在本次解析中与作者逐人可靠绑定
- Petr Motlicek：机构信息未能在本次解析中与作者逐人可靠绑定
- Hervé Bredin：机构信息未能在本次解析中与作者逐人可靠绑定
- Ricard Marxer：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

零样本语音克隆指仅给一段目标说话人的短参考音频便合成任意文本语音，输入为参考音频加目标文本，输出为模仿该音色的波形，难点在于参考信道、口音、情绪与术语偏离朗读条件时仍要保持音色、韵律和可懂度。本文比较Qwen3-TTS的语境学习与X-Vector两种接口与Chatterbox、XTTS-v2、F5-TTS在朗读、远场会议、情绪对话和空管无线电上的表现，同步检验听众二选一、机器伪造检测和18项客观度量。同一参考音频与目标文本先送入五个系统生成配对音频，该配对音频再进入听众与Gemini评判的二选一辨别和AASIST检测器得到欺骗率与检出率，同时18项度量经与听众标注相关筛选保留13项并映射为说话人、韵律、基频和可懂度四个维度分及其均值总体分。在AMI会议语音偏移配对的100轮听众二选一欺骗率上，Qwen3-TTS的X-Vector为35.6%与语境学习为27.0%，高于基线最高9.0%的Chatterbox。在四语料平均的客观总体分S上，Qwen3-TTS的X-Vector为34.3分与语境学习为33.4分，高于Chatterbox的31.9分，但在单语料AMI上总体分排序与听众排序相反。短参考加错误转写是明确失效模式，在IEMOCAP短话语上Qwen3-TTS语境学习的幻觉率在整词替换下由0.8%升至21.2%，转写超过十词且经核对的干净参考才适用，短于八词、含错词或窄带噪声无线电信道时失效风险上升。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/clovaai/aasist> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 零样本克隆要解决什么输入输出问题

零样本克隆的输入是两样东西：一段几秒到几十秒的参考音频，用来指定要模仿谁的声音，以及一句目标文本，用来指定要说什么。输出是一段新音频，要求内容是目标文本，声音听起来像参考人。必须保留的信息包括说话人的音色、大致的音高区间和目标文本的词序，不能把参考句的韵律原样搬过来，也不能为了像而改动词。

Qwen3-TTS 的特殊之处在于它给了两种条件接口。第一种是 in-context learning，简称 ICL，默认方式，把参考音频和它的文字转写一起给模型，让模型顺着这个声音继续说出新句子。第二种是 X-Vector，只给从参考音频提取的一个说话人向量，不需要转写文本。初学者容易把二者理解成大小模型之分，实际上它们是条件信息多少之分：前者信息多但要求文本对齐正确，后者信息少但更稳。本文就是要回答哪种条件下该用哪一种。

### 已有评测路线为什么不够用

此前的系统论文多在干净朗读语料上报告 3 类自动指标：用语音识别算词错率看可懂度，用说话人向量余弦看音色相似度，用 DNSMOS 这类预测平均意见分看整体质量。这些指标在系统接近真人时会挤在一起，难以拉开差距。TTSDS2 把客观指标扩展成多个维度，人类受骗率直接测听者是否被骗过大模型判分则想降低听音成本，反欺骗检测问的是机器能否抓住克隆。

本文作者认为单一证据都不够。自动指标不知道听者真正依据什么，听音试验成本高且只覆盖个别领域，大模型判分与人的一致性只是部分成立，反欺骗模型换个通道就可能失效。而且还没有工作系统比较 Qwen3-TTS 的两种接口，也没有覆盖会议远场、情感对话和空管无线电这类偏离朗读的领域。因此本文把 4 类证据放在同一批样本上：听者二选一、现成反欺骗模型、18 个客观度量再聚合成 4 个维度分，以及大模型判分。

### 论文具体要回答哪几个问题

论文围绕一个部署问题展开：手里有一段参考音频，到底该用 ICL 还是 X-Vector，以及换了领域后还会不会成立。为此它准备了 4 个英语子集，各取 1 小时：LibriSpeech 代表干净朗读，AMI 代表远场自发会议，IEMOCAP 代表表演式情感对话，ATCO2 代表噪声大、行话多的空管无线电。

比较对象是 5 个系统：Qwen3-TTS 的 ICL 和 X-Vector 算作两种条件，加上 Chatterbox、XTTS-v2 和 F5-TTS。所有系统拿同样的参考片段，用公开权重直接推理，不做微调。Qwen3-TTS 用 1.7B 参数的 Base 模型，以 bfloat16 和一组采样参数运行，基线保持各自工具库默认设置。主条件是 shifted，即声音取自相邻下一句，文本是当前句，避免模型直接复制韵律。只有特别说明才用 aligned，即声音和文本来自同一句。

### 一个样本从参考到合成再到打分经历什么

沿着一句话走一遍流程更清楚。假设目标是合成 AMI 中的一句话，参考是同说话人相邻另一句的音频。ICL 分支的输入是参考音频波形加上它的转写文本，再加上目标文本，模型在该声音上下文中续写出目标语音。X-Vector 分支先把参考音频压缩成一个说话人向量，丢掉具体词和韵律，只保留身份方向，再以该向量为条件生成目标文本的语音。两种分支输出的都是波形，随后与同文本的真录音配成 1 对。

每 1 对随后进入 4 条评测通路。听者同时听到真假两段并选出更真的一段，大模型判分做同样的二选一，AASIST 对两段分别给出真伪 logits，客观度量计算真假之间的声学差异并聚合成说话人、韵律、基频和可懂度 4 个维度分。幻觉筛查另起一条只看时长的通路，用来标记卡顿、循环或编造导致的异常时长。

### 两种克隆接口各自处理什么信息

ICL 处理的对象是音频加文本的联合上下文。它的好处是音色细节丰富，干净参考上说话人相似度更高；代价是必须把参考文本和音频对齐，一旦转写错一个词，模型要在错误文本和正确音频之间调和，容易出错。X-Vector 处理的对象是压缩后的身份向量。它的好处是不需要转写，短、噪声或无转写的参考也能用，韵律更接近真人的平均节奏；代价是丢掉了细粒度的音色和语境，干净朗读上的音色分反而低一些。

**in-context learning × X-Vector：** in-context learning 指把参考音频连同它的文本一起交给模型，让模型续写目标文本；X-Vector 指只给一个说话人向量，不给参考文本。两者分工不同：前者保留更多音色和上下文对齐信息，但依赖文本正确；后者只保留身份方向，对文本错误不敏感，组合比较才能看出该用哪种条件。

aligned 和 shifted 的区分也是为了看清信息来源。aligned 下韵律可以直接抄，分数会虚高；shifted 下必须重新规划时长和停顿，更能反映部署。论文主表都用 shifted，只有在研究人与客观分数相关性时才同时用两种条件做开发集。

**aligned 条件 × shifted 条件：** aligned 条件指参考音频和要合成的文本来自同一句话，模型可以直接照抄韵律；shifted 条件指声音来自相邻另一句，文本是当前句，更接近部署。两者搭配使用可以区分韵律是抄来的还是重新生成的，本文主结果都用 shifted 条件。

### 十八个客观度量如何聚成四个维度

客观度量比较的都是合成片段和它对应的真录音。说话人维度包括 ResNet34 向量的余弦、82 种非言语发声的检出率和类别、emotion2vec 余弦和基于 WavLM 第十四层特征的 SpeechBERTScore。韵律维度看相对时长误差、基于能量端点检测的语音占比差、帧能量变异系数匹配和平均能量差。基频维度先用声码器估计每句基频，再算均值差、标准差差和动态时间规整后的对数基频误差。可懂度和质量维度包括 Whisper Large V3 转写合成与真录音的词错率差、DNSMOS 背景和总分差，以及 STOI、PESQ 和免参考的 SI-SDR。

这些度量先按与听者受骗率在独立开发集上的 Spearman 相关筛选，保留相关不低于 0.45 的 13 个，再把每个度量映射到 0 到 1 的一致度，两次非线性映射后按维度平均并放大到 0 到 100 分，最后 4 个维度等权平均得到总分 S。等权是人为选择而非拟合结果，论文在后面用与听者的相关来检验它，而不是默认它正确。

### 只看时长如何标记幻觉内容

幻觉在这里指重复、跳词或编造词语，常见于语言模型式语音合成。论文用纯时长规则做大规模初筛，记合成时长为 d，目标文本词数为 nw，真录音时长为 dref，当平均每词时长超过 1 秒，或合成时长超过真录音 1.5 倍时标记为幻觉。

\[h=\mathbf{1}\!\left[\;\frac{d}{n_{w}}>\tau_{w}\;\;\lor\;\;\frac{d}{d_{\mathrm{ref}}}>1+\tau_{d}\;\right],\qquad\tau_{w}=1\,\mathrm{s},\;\tau_{d}=0.5.\]

第一项抓在少数词上卡住或循环，第二项抓超出参考的冗长输出。因为只看时长不看词，2 位作者抽查了 100 个标记和 100 个未标记样本，发现召回约 94.7%，但虚报不少，因此标记率会高估真实幻觉率。好在同一规则用于所有系统和语料，横向比较仍然有效。

**hallucination × 持续时长规则：** hallucination 指重复、跳词或编造出目标文本之外的词语；持续时长规则指只看合成时长和词数是否异常来标记这类样本。它分工明确：前者是语言模型式 TTS 的内容失效，后者是低成本的大规模近似筛查，人工抽查用来估计它的漏报和虚报。

### 本研究训练了什么和实际执行了什么计算

本研究没有训练任何语音合成模型，也没有微调反欺骗模型。原文评测的第三方既有系统包括 Qwen3-TTS、Chatterbox、XTTS-v2 和 F5-TTS，四者均沿用各自检查点进行推理，不微调。AASIST 则使用在 ASVspoof 2019 逻辑访问分区训练好的 0.30M 参数检查点，原样评测，不重新训练或校准阈值。音频统一转成 16 kHz 单声道并截断或补 0 到 64600 个采样点，超过 bona-fide logit 才判为假，两段配对样本做完全相同的预处理。

实际执行的计算是推理加评测：生成 4 个领域各约 1 小时的配对合成，跑 18 个客观度量，跑 Whisper 转写和 DNSMOS、SQUIM 等质量估计，跑 AASIST 打分，再组织听音和大模型判分。听音是 3 名在同一地点的初级标注者，可反复播放，每系统在 AMI 上听 100 对，另有 135 对新样本用于度量筛选，大模型用 Gemini 3.5 Flash 在零温度下对每对做两次顺序交换的判分。参数冻结不等于输出确定，Qwen3-TTS 本身是采样生成，温度 0.9 的设置会带来随机性。

### 听音、大模型判分和机器检测如何组织

听音采用二选一迫选，每轮给出同文本的真假两段，随机标为 A 和 B，听者选出认为真的一段，受骗率就是合成被选为真的比例。3 名听者熟悉程度相近，避免对合成瑕疵的敏感度偏差。听后还收集了自由描述的判别依据，归纳为背景信道声、呼吸和麦克风噪声、语速与分句、情感强度 4 类。

**fooling rate × 2AFC：** 2AFC 指每次同时放真录音和合成录音，让听者二选一挑出认为真的一段；fooling rate 指合成被误判为真的轮次比例。2AFC 提供任务，fooling rate 提供统计量，数值越高说明越难分辨。

大模型判分复用同样的 100 对，只是告诉模型一段真一段假并要求只回答 A 或 B，每对做两次顺序交换，报告用真在前的一次，顺序翻转的记为顺序依赖。机器检测用 AASIST，报告检测率和误报率，只有检测率明显高于同语料误报率才算可检出。ATCO2 的真录音本身就是窄带噪声无线电信道，与反欺骗模型训练时的干净真语音差异很大，这为后面的完全失效埋下伏笔。

**AASIST × detection rate × false-alarm rate：** AASIST 指直接对波形做真伪判别的现成反欺骗模型；detection rate 指克隆被判为假的比例，false-alarm rate 指真录音被误判为假的比例。只有前者明显高于后者，才能说机器能区分，组合起来看才知道是通道问题还是克隆痕迹。

### 听者觉得谁最像真人

在 AMI 会议语音上，Qwen3-TTS 最难分辨，X-Vector 被误认为真的比例是 35.6%，ICL 是 27.0%，而基线最高只有 9.0%。但即使最强的 X-Vector，仍有多数轮次被听出来，远谈不上以假乱真。听者提到的线索很有指向性：克隆能学到声音，但学不到周围的声音，真录音里的背景人声、无线电首尾提示音、呼吸和麦克风噪声在克隆里都没有；真人语速有起伏且跟随标点，克隆多是匀速；情感语料里克隆的情绪强度更平。

下表比较的问题是同文本配对下谁更能骗过人和大模型，条件是 shifted，每格 100 对，数值是受骗百分比，越高越像真人。

| 系统 | AMI 人听 | AMI 大模型 | IEMOCAP 大模型 | ATCO2 大模型 | LS 大模型 |
| --- | --- | --- | --- | --- | --- |
| Qwen3 (ICL) | 27.0 | 12.0 | 15.0 | 6.0 | 14.0 |
| Qwen3 (X-Vec) | 35.6 | 11.0 | 7.0 | 3.0 | 10.0 |
| Chatterbox | 9.0 | 11.0 | 10.0 | 1.0 | 9.0 |
| XTTS-v2 | 6.0 | 3.0 | 3.0 | 4.0 | 26.0 |
| F5-TTS | 1.0 | 5.0 | 5.0 | 5.0 | 7.0 |

原表报告的是二选一受骗率，数值均以百分比表示；AMI 分别列人工与 Gemini 判分，其余 3 个语料列 Gemini 判分。本表数值与单位依据论文 PDF。

从表中可见大模型判分与人不完全一致。在 LibriSpeech 上大模型最常被 XTTS-v2 骗过，达 26%，而人在 AMI 上只被它骗过 6%。Chatterbox 客观总分在朗读上最高，但人的受骗率只有 9%。这说明跨领域后朗读上的优势会消失，XTTS-v2 在 ATCO2 和 IEMOCAP 上总分很低且幻觉多，F5-TTS 平均总分最低。因此不能把朗读基准的排序直接推广到会议、情感和空管。

### 现成反欺骗模型能否抓住听者漏掉的克隆

答案基本是否定的，尤其对 Qwen3-TTS。判断标准是同一语料下检测率是否明显高于误报率。Qwen3-TTS 8 个格子中只有 LibriSpeech 的 ICL 满足，检测 39.0% 对误报 19.0%，其余七格检测率都不超过真录音的误报率。AMI 上 X-Vector 只抓住 1%，而六分之一的真会议录音被误报为假。

下表比较的问题是机器能否在固定阈值下区分克隆与真录音，条件相同，每格覆盖 100 个 shifted 配对，Det. 是克隆被判假的比例，FA 是真录音被误判假的比例，只有前者明显高于后者才算可检出。

| Corpus | Type | Qwen3 (ICL) | Qwen3 (X-Vec) | Chatterbox | XTTS-v2 | F5-TTS |
| --- | --- | --- | --- | --- | --- | --- |
| AMI | Det. | 13.0 | 1.0 | 24.0 | 89.0 | 36.0 |
| AMI | FA | 17.0 | 17.0 | 19.0 | 17.0 | 14.0 |
| IEMOCAP | Det. | 10.0 | 8.0 | 12.0 | 91.0 | 11.0 |
| IEMOCAP | FA | 14.0 | 14.0 | 14.0 | 14.0 | 14.0 |
| ATCO2 | Det. | 92.0 | 87.0 | 95.0 | 91.0 | 75.0 |
| ATCO2 | FA | 99.0 | 99.0 | 99.0 | 99.0 | 99.0 |
| LS | Det. | 39.0 | 6.0 | 16.0 | 86.0 | 20.0 |
| LS | FA | 19.0 | 19.0 | 19.0 | 19.0 | 19.0 |

表中两个反例很关键。XTTS-v2 机器最容易抓住，四语料检测 86% 到 91%，但人只被骗 6%；F5-TTS 人最容易识破，仅 1%，机器在 AMI 上也只抓住 36.0% 对误报 14.0%。机器觉得可疑的不等于人觉得像，两个排序并不对应。ATCO2 更极端，真录音 99% 被判为假，高于任何系统的克隆检测率，说明模型是被信道驱动而非克隆痕迹驱动，换阈值也无法恢复区分。本表数值与单位依据论文 PDF。

### 四个维度分数揭示什么强弱项

下表比较的问题是在 shifted 条件下各系统与真录音在 4 个声学维度上多接近，分数越高越接近，S 为 4 维度等权平均。行是系统加语料，列是说话人、韵律、基频、可懂度与总分。

| System | Corpus | SSpk | SPro | SF0 | SInt | S |
| --- | --- | --- | --- | --- | --- | --- |
| Qwen3 (ICL) | AMI | 52.2 | 15.7 | 25.2 | 50.8 | 36.0 |
| Qwen3 (ICL) | ATCO2 | 31.6 | 21.5 | 10.6 | 15.4 | 19.8 |
| Qwen3 (ICL) | LibriSpeech | 80.2 | 33.2 | 21.7 | 64.0 | 49.8 |
| Qwen3 (ICL) | IEMOCAP | 32.9 | 25.9 | 15.0 | 38.2 | 28.0 |
| Qwen3 (X-Vector) | AMI | 43.6 | 23.7 | 26.6 | 53.3 | 36.8 |
| Qwen3 (X-Vector) | ATCO2 | 34.4 | 24.1 | 15.0 | 15.9 | 22.4 |
| Qwen3 (X-Vector) | LibriSpeech | 61.5 | 42.4 | 20.4 | 67.1 | 47.9 |
| Qwen3 (X-Vector) | IEMOCAP | 34.5 | 37.2 | 11.7 | 37.7 | 30.3 |
| Chatterbox | AMI | 24.4 | 26.2 | 21.1 | 40.9 | 28.1 |
| Chatterbox | ATCO2 | 16.1 | 32.3 | 14.6 | 16.9 | 20.0 |
| Chatterbox | LibriSpeech | 81.6 | 47.7 | 20.4 | 57.8 | 51.9 |
| Chatterbox | IEMOCAP | 40.3 | 29.1 | 8.8 | 31.6 | 27.4 |
| XTTS-v2 | AMI | 59.4 | 44.7 | 13.9 | 45.3 | 40.9 |
| XTTS-v2 | ATCO2 | 19.8 | 2.1 | 9.8 | 14.7 | 11.6 |
| XTTS-v2 | LibriSpeech | 54.0 | 54.5 | 19.2 | 61.9 | 47.4 |
| XTTS-v2 | IEMOCAP | 15.4 | 2.7 | 5.1 | 28.4 | 12.9 |
| F5-TTS | AMI | 64.7 | 9.3 | 22.4 | 19.5 | 29.0 |
| F5-TTS | ATCO2 | 29.6 | 19.1 | 14.8 | 10.4 | 18.5 |
| F5-TTS | LibriSpeech | 20.6 | 19.1 | 15.2 | 25.3 | 20.0 |
| F5-TTS | IEMOCAP | 34.0 | 1.2 | 11.7 | 21.0 | 17.0 |
| Average, Qwen3 (ICL) | Average, Qwen3 (ICL) | 49.2 | 24.1 | 18.1 | 42.1 | 33.4 |
| Average, Qwen3 (X-Vector) | Average, Qwen3 (X-Vector) | 43.5 | 31.9 | 18.4 | 43.5 | 34.3 |
| Average, Chatterbox | Average, Chatterbox | 40.6 | 33.8 | 16.2 | 36.8 | 31.9 |
| Average, XTTS-v2 | Average, XTTS-v2 | 37.2 | 26.0 | 12.0 | 37.6 | 28.2 |
| Average, F5-TTS | Average, F5-TTS | 37.2 | 12.2 | 16.0 | 19.0 | 21.1 |

Qwen3-TTS 的两个模式之一在 4 个语料上基频分都是最高，在 3 个语料上可懂度分最高，且分性别看平均基频只比真人低几赫兹，音区是对的。ICL 平均说话人分最高，但在 AMI 上不如 F5-TTS，在朗读和情感上不如 Chatterbox，说明不是全领域领先。它的主要短板是韵律，在 3 个语料上不如 Chatterbox 和 XTTS-v2。绝对值上基频是除 F5-TTS 外所有系统最弱的维度，总体音区对但具体到每个说话人的起伏仍对不上。本表数值与单位依据论文 PDF。

### 参考文本写错一个词会发生什么

论文把参考文本中间一个词做两种破坏，音频不变：局部改动只轻微改变该词，整词替换用一个固定干扰词代替。然后看 ICL 的幻觉率。长参考的 AMI 平均 84.2 词和 LibriSpeech 平均 33.8 词始终低于 1.5%，短句的 IEMOCAP 从 0.8% 升到 21.2%，ATCO2 从 1.6% 升到 15.2%，平均词数只有 11.2 和 12.2。混合语料后从 1.1% 升到局部破坏 9.0% 和整词替换 14.4%。

下表比较的问题是同样破坏下幻觉率的变化，数值是时长规则标记率，会高估真实率但横向可比，越高越差。

| 条件 | 幻觉标记率 |
| --- | --- |
| 无破坏 | 1.1% |
| 局部破坏 | 9.0% |
| 整词替换 | 14.4% |

该表说明即使是轻微文本错误也会让幻觉上升一个量级，整词错误更严重，但它没有区分参考长短。真正驱动因素是参考词数：整词替换下三词参考幻觉约 65%，超过八词后降到 20% 以下，局部破坏从 33% 开始走出同样下降趋势。词越少，单个错词在条件中所占比重越大。转写被破坏的合成发现干扰词在 7.0% 句子中可听见，集中在短句语料，且 96.6% 出现在合成前三分之一，57% 直接作为第一个词，从不在末三分之一，表现为先吐出意外词再锚定目标的续写式幻觉。

读图说明：下图横轴是被破坏的 ICL 参考文本词数，纵轴是幻觉率，3 条曲线分别对应整词替换、局部破坏和无破坏，重点看短词数段的陡峭下降。

> **看图路径：** 1. 先看横轴参考文本词数从 3 到 14 的变化方向；2. 再比较红色整词替换曲线与蓝色局部改动曲线的高度；3. 最后看绿色无破坏曲线是否始终贴近零线

[![原论文 Figure 1：Hallucination rate of Qwen3-TTS ICL against reference transcript length (shifted condition).](https://arxiv.org/html/2610.23678v1/word_corruption_line_perword_cropped.svg)](https://arxiv.org/html/2610.23678v1/word_corruption_line_perword_cropped.svg)

*论文图 1。原论文 Figure 1:：“Hallucination rate of Qwen3-TTS ICL against reference transcript length (shifted condition).”。*

图中可见红色整词替换在 3 词处超过 60%，到 5 词快速回落，蓝色局部破坏在 3 到 4 词处约 33% 持平后下降，绿色无破坏始终贴近零线。8 词是一个粗略分界，之后两条破坏曲线都进入 20% 以下区间，但仍高于无破坏。这支持用词数而非语料名称来解释失效，实际使用 ICL 时应要求转写核对且长度超过 10 词左右。

### 自动分数和大模型判分能否代替听者

在开发集上，背景声能被 DNSMOS 背景差较好捕捉，相关 0.77，语速部分被时长误差和语音占比捕捉，相关 0.71 和 0.54，但句内变速和停顿位置抓不住。呼吸只能部分被发声率捕捉，情感强度几乎抓不住，emotion2vec 仅 0.11，能量变异 0.17，语义相似度 SpeechBERTScore 几乎为零。最强的免参考 SI-SDR 达 0.81，但它部分反映语料干净程度而非真假差异。

四语料平均后总分排序与 AMI 听者排序恰好一致，但落实到 AMI 单语料，总分把只骗过 6% 听者的 XTTS-v2 排第一，与听者的相关只有 0.20，说话人分甚至是负相关，因为说话人最像的 F5-TTS 最不像真人。只有可懂度和质量分与听者达到 0.90。平均后的吻合来自混入领域难度，而非真正听出听者依据。大模型判分在 AMI 上对 3 个基线与人一致率不低于 78%，对 Qwen3-TTS 不足 73%，对骗过人的那些句子最多只有 16.7% 一致，且两次顺序交换最多 43% 翻转，即使零温度解码也不稳定。因此小规模目标领域迫选听音仍是唯一仲裁，自动分和大模型都不能替代。

### 复现第一步做什么与资源现状

复现应从 shifted 配对做起：取同一说话人相邻两句，一句提供声音，一句提供文本，避免 aligned 带来的韵律复制虚高。先在目标领域做几十对二选一听音，确定基线受骗率，再跑 Whisper 转写差、DNSMOS、说话人余弦和时长规则，最后才看总分。ICL 要求先核对参考转写，短于 8 到 10 词、噪声大或无转写的参考优先用 X-Vector。

原文给出了代码与生成音频的发布说明和发布页，但本次未取得可验证的作者代码可达记录。配对音频与评分脚本是否仍能取得，需要复现前分别核对。反欺骗部分用的是第三方公开仓库的现成检查点，链接在原文中给出且本次可达，但这只证明论文提到了该链接，不证明作者已开源自有代码。来源未确认或链接不可用属于可获取性问题，不应记为方法缺陷。计算上 Qwen3-TTS 推理需要大显存的 bfloat16 环境，基线用默认超参数即可，听音约 12 小时工作量，大模型判分注意要做顺序交换的稳健性检查。

### 什么时候值得尝试还缺哪项验证

当参考干净、转写核对过且长度足够，ICL 更适合保音色；当参考短、噪声大、无转写或更在意节奏，X-Vector 更稳且幻觉少约三分之一。换领域前先做短的领域内验证，因为领域解释的方差是系统选择的 4 倍，换模型不如换领域适配。Chatterbox 是较稳的第二选择，XTTS-v2 建议限于朗读，空管无线电目前所有系统可懂度都崩，且反欺骗完全失效，不应指望事后检测，信息披露更可靠。

尚未验证的是信道匹配的空管反欺骗、更细的句内韵律和情感强度度量，以及大模型判分的稳定性修复。常见误解是把朗读最高分当成全领域最强，或把说话人向量越像当成越能骗过人，本文数据正好相反：最像的 F5-TTS 最不骗人，机器最易抓的 XTTS-v2 听者并不觉得像。理解这一点，才能正确使用这篇超越基准的领域与失效分析。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2610.23678v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-19/)
