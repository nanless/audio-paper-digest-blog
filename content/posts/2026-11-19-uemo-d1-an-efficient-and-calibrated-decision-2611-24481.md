---
title: "UEmo-D1: An Efficient and Calibrated Decision Model for Unified Multimodal Emotion Recognition"
date: 2026-11-19
draft: false
tags: [多模态情感极性分析, 语音情感识别, 多任务学习, 不确定性估计与校准, 数据集]
categories: [论文速递]
description: "论文要解决跨任务泛化、快速直接决策和容纳多种合理解释三件事，用自然语言指令加封闭选项映射到首个选项字母的概率分布来统一六类多模态情绪任务，在 41 个子集上取得更高的平均准确率和更低的校准误差，但结论只在统一指令加打乱选项的封闭选择评测条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.24481"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "一次只输出一个选项字母的情绪识别：UEmo-D1 如何统一六类任务"
paper_digest_original_title: "UEmo-D1: An Efficient and Calibrated Decision Model for Unified Multimodal Emotion Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.24481v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.24481v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.24481v1.pdf"
paper_digest_primary_task: "多模态情感极性分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.multimodal-sentiment","label":"多模态情感极性分析"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"method","id":"method.uncertainty-estimation","label":"不确定性估计与校准"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "多任务学习"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文要解决跨任务泛化、快速直接决策和容纳多种合理解释三件事，用自然语言指令加封闭选项映射到首个选项字母的概率分布来统一六类多模态情绪任务，在 41 个子集上取得更高的平均准确率和更低的校准误差，但结论只在统一指令加打乱选项的封闭选择评测条件下成立。"
paper_digest_authors: [{"affiliations":["Tsinghua University"],"name":"Daiqing Wu"},{"affiliations":["Tsinghua University"],"name":"Junqiao Wang"},{"affiliations":["Jiangxi University of Finance and Economics"],"name":"Chengyang Fang"},{"affiliations":["Shenzhen MSU-BIT University"],"name":"Runhao Zeng"},{"affiliations":["Guangming Laboratory"],"name":"Fei Ma"},{"affiliations":["Tsinghua University"],"name":"Sicheng Zhao"}]
paper_digest_abstract_sha256: "7c7984f88266e918803387d9fc2cf55851f32ec92b1623f579cc485d2f8b9443"
paper_digest_sidecars: {"citation.bib":{"sha256":"2be2f9cf247b4a06bac76e956a127ef77868a5a42adaafce2ee32be88784153e","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-24481/citation.bib"},"citation.json":{"sha256":"4ba74cb5d776a38875ac0a213f84f786a2958d3fa240c58219453f90b6f0cea9","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-24481/citation.json"},"citation.ris":{"sha256":"1c96fb975353926e55825785c8bb3084ee1cb3e9dcae17605b0c4e2f370be834","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-24481/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ca03547a45dbc99a73d0039fda7035ab11383bc109939ca80fcd400037fbc7f1","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-24481/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "8b0dba9bc81040708b37a11e1afac59d51dfaf99e7763569d5297188e8a43f92"
paper_digest_api_reader_plan_sha256: "54d5b8aaee361b950ca746d8a4c6cb54b02c18c1ccaf6cff8d26b5313fb1a138"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "f0190a860d01c54bc1db82ea0cf202c33500b4e6c55d6c95f5170ff84ca4d7ec"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "a2ad838aa29b6c6c0305e6e5b799785d0d028ae7f3d191f255b81865c1cc96d1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "6de7f2f9b7814ab92b67977764d0f68d3943ecdfd4fc91bd386ae7db155e3bb1"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "2d73e13f8c8c8ea42580f27f3a6232b21a85957664af8c92e95f023958600d0a"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 一次只输出一个选项字母的情绪识别：UEmo-D1 如何统一六类任务

> 英文题目：*[UEmo-D1: An Efficient and Calibrated Decision Model for Unified Multimodal Emotion Recognition](https://arxiv.org/abs/2611.24481v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[多模态情感极性分析](/audio-paper-digest-blog/papers/?concept=task.multimodal-sentiment)；[语音情感识别](/audio-paper-digest-blog/papers/?concept=task.emotion-recognition)
- **研究方法**：[多任务学习](/audio-paper-digest-blog/papers/?concept=method.multitask)；[不确定性估计与校准](/audio-paper-digest-blog/papers/?concept=method.uncertainty-estimation)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Daiqing Wu：Tsinghua University
- Junqiao Wang：Tsinghua University
- Chengyang Fang：Jiangxi University of Finance and Economics
- Runhao Zeng：Shenzhen MSU-BIT University
- Fei Ma：Guangming Laboratory
- Sicheng Zhao：Tsinghua University

## 📌 核心摘要

多模态情绪识别要从人脸、声音、图文和对话等不同组合的输入中判断情绪，难点是任务形式差异大、输入经常缺失、同一内容又允许多种合理解读。论文把各类任务统一为依据自然语言指令从封闭字母选项中做单步选择，输出为选项上的概率分布，由此兼顾跨任务通用、快速判断与保留歧义。处理上先把多来源数据映射为统一的字母选项并打乱措辞与顺序，再让模型在决策位置只对有效选项做归一化监督，最后在验证集上拟合温度系数来校准置信度。模型以 Qwen2.5-Omni-3B 为起点，缺失模态直接省略并沿用原编码器，语言主干改用双向注意并只更新低秩适配参数。在 UEmo-Data 测试集上，UEmo-D1 平均准确率达到 75.6%，超过次优的 Gemini-3.5-Flash 的 62.3%，平均期望校准误差为 4.7，约为次优 OneEmo 的 13.2 的三分之一。结论只适用于封闭单选判断，对冲突模态与特殊视觉风格仍有误判。原文披露训练约需 4 张 RTX 4090 运行 20 小时。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/wdqqdw/UEmo-D1> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 情绪识别要从什么样的输入猜出什么

刚接触音频和多模态的读者可以先把任务想成一道封闭选择题。输入可能是人脸图片或视频、说话声音、能唤起情绪的图片、对话中的一段话加画面加声音、图文帖子，或者需要判断意图、幽默和讽刺的对话片段。目标是从这些材料中判断直接表达的情绪、传达的情感或被唤起的感受。输出不是自由描述，而是在题目给定的候选标签里选一个字母，例如 A 代表喜悦、B 代表愤怒。

这个设定里必须保留的信息有三层。第一是模态本身的证据，例如面部构型、语调能量、画面内容和文字语义，缺了某一路就可能判错。第二是指令到底问什么，因为同样一张脸可以问表情类别，同一段对话可以问情绪也可以问讽刺，问题不同答案空间就不同。第三是候选集合的边界，因为选项有 2 个也有多达 25 个，粒度越细越难猜。论文把这些都装进同一个输入模板，模型每次只输出一个选项字母，并同时给出每个选项的概率。

理解这一点后，后面所有设计都好跟上了。数据 construction 要解决的是不同来源标签写法不同、模态缺失不同、选项顺序可能带来捷径的问题。模型设计要解决的是如何让缺模态的输入也能走同一条主干、如何只在有效选项里学概率、如何让报出的概率与真实正确率对得上。评测要回答的是换任务、换选项顺序、换视觉风格后是否还准，以及报出的概率是否诚实。

### 已有两条路线各自卡在哪里

论文把已有工作分成两类。第一类是紧凑的任务专用模型，输入输出空间固定，在自己的数据集上训练，推理快但换个条件就容易掉点，例如输入模态被破坏、标签空间变化或数据域变化都会带来明显退化。第二类是基于多模态大语言模型的做法，靠世界知识和指令跟随能力把不同数据集和标签体系装进自然语言指令，泛化更好但计算开销更大，最近还越来越强调先做情感推理再预测，以提高可解释性和准确率。

论文认为两条路线都没有同时拿下三件事。第一是跨任务泛化，人可以把 partly 共享的情绪表征用在面对面感知和看图生情等不同场景，而已有大模型泛化多停留在固定任务要求之内。第二是快速直觉判断，人常常不需要深思熟虑，而大模型的显式推理带来额外开销。第三是容纳多种合理解释，情绪理解本身就允许分布式的多种可能，而不是每次都只有一个标准答案。

正是在这个缺口上，论文引入决策模型这条思路。决策模型在这里的意思不是价值评估模型，也不是学生分布分数估计用的辅助分数模型，而是指用灵活的输入处理加直接的概率决策代替显式推理的模型。论文强调这是据其所知第一个用于统一多模态情绪识别的决策模型，后面的数据和方法都是为这个定位服务的。

### 论文把统一情绪识别拆成哪六个具体任务

论文依据已有综述的任务划分并加入更高层的社会理解，共定义 6 个任务家族。面部表情识别判断图片或视频中面部构型表达的情绪。音频情绪识别判断声音和声学线索传达的情绪。视觉内容情绪理解推断一张图片可能在观看者心中唤起的情绪。对话多模态情绪识别结合视听和语言线索判断说话人在当前话语中的情绪。

图文情感分析判断图片加文字联合传达的情感。多模态社会理解则要整合线索推断交际意图并识别幽默和讽刺等社会含义。

这 6 个任务的输入组合并不相同。测试集一共 41 个子集，输入有图像加文本、视频加文本、音频加文本、视频加音频加文本 4 种，候选类别从 2 类到 25 类不等。大部分子集考情绪或情感类别，少数考判断陈述是否成立、意图、愿望和社会含义。训练集更大，一共 977270 条样本，验证集 19545 条，测试集 19072 条，训练中视觉内容和面部数据占比较大，而验证和测试在 6 个任务上更均衡。

读者要记住这个不均衡，后面解释单任务训练和去掉某类任务的实验时会用到。模型必须处理缺模态的情况，例如只有音频加文本时就不能指望有画面。评测时指令措辞和选项顺序都会多样化，同一个语义标签可能出现在不同字母位置，这正是为了防止模型背位置捷径。

### 统一决策框架让一个样本走完哪条路

整体流程可以沿着一个样本来走。假设输入是一段对话视频加音频加文字，题目问说话人此刻的情绪，候选项是 A 到 G 7 个情绪词。模型先把可用的模态按各自原有编码方式变成特征，缺失的模态直接省略，不补假输入。然后把指令文本和打乱后的选项一起拼成统一模板送入语言主干。主干只在输出位置产生一个决策符号，取概率最大的选项字母作为答案，同时保留全部有效选项的概率分布。

下面这张总览图把这种统一处理和最终的对比放在一起，读图时先抓主路径再看散点与柱状图的含义。

> **看图路径：** 1. 先看上半部分从多模态加指令加选项到概率分布的主箭头；2. 再看中部散点横轴延迟越右越大、纵轴准确率越高越好；3. 最后看下部柱状图柱越矮表示校准误差越小

[![原论文 Figure 1：Illustration of UEmo-D1’s decision-making framework and comparison of its accuracy, efficiency,…](https://arxiv.org/html/2611.24481v1/fig1.png)](https://arxiv.org/html/2611.24481v1/fig1.png)

*论文图 1。原论文 Figure 1:：“Illustration of UEmo-D1’s decision-making framework and comparison of its accuracy, efficiency, and calibration with advanced MLLMs, with performance averaged over 41 subsets…”。*

上半部分显示自然语言指令加多模态内容加选项进入同一个模型，右侧直接给出 A 70 %、B 20 %、C 10 % 这样的分布。下半部分把 41 个子集上的平均准确率、两块 RTX 4080 上测得的推理延迟、以及期望校准误差放在一起，决策模式比较首个输出位置的选项概率，推理模式允许先 deliberation 再回答。论文想表达的是同一个决策范式要同时兼顾准、快和报得准。

**决策模型 × 推理模式：** 决策模型指把多模态输入和指令直接映射到候选选项概率分布、只在决策位置输出一个选项字母的做法，推理模式指先生成解释性文本再给出答案的做法，前者省去逐步推理的开销并让概率直接可比，后者更利于解释但在本论文的对比中多数情况下准确率反而更低。

需要提醒的是，这里的快主要来自范式和轻量主干，而不是专门的推理加速。论文用 Qwen2.5-Omni-3B 做初始化，训练时只更新语言主干中的 LoRA 参数，LoRA 在这里指冻结原始大模型权重、只训练外加低秩适配矩阵的做法，原始模型参数保持不动。缺模态省略、统一模板和单步决策共同保证了不同任务走同一条路。

### 双向注意力、选项正则和温度缩放各自改变了什么

先说输入侧的改动。原始语言主干用因果注意力做自回归预训练，每个位置只能看过去。论文在训练和推理时都把输入部分的因果注意力换成 BERT 式的双向注意力，BERT 式在这里指每个输入词元在每一层都能 attend 到前后全部输入词元。这样做是为了加强模态内和跨模态的上下文建模，例如让文字能同时参考前后的画面和声音证据。输出侧仍只做 1 次决策，不做自回归续写。

**因果注意力 × 双向注意力：** 因果注意力只允许每个输入位置看到它之前的位置，是自回归预训练的默认做法，双向注意力允许每个输入位置同时看到前后全部输入位置，论文把它只用在语言主干的输入部分以加强跨模态上下文建模，而输出决策位置仍只做一次选择。

决策位置的计算是关键。记输入为 x，有效选项字母集合为 C，适配后的模型为 pi 星，决策规则是取该位置上概率最大的有效字母。

\[d=\arg\max_{y\in\mathcal{C}}\pi_{\theta}^{*}(y|x),\]

上式中 d 是最终输出的单个选项字母，y 取遍有效字母集合，pi 星表示给定输入后模型在决策位置的分布。实现上模型先在词表上产生 logits，再做 softmax，但标准做法会在整个词表上归一化，论文改为只在有效选项集合内归一化和监督。

\[p_{v}(\tau)=\frac{\mathcal{I}_{v\in\mathcal{C}}\exp(z_{v}/\tau)}{\sum_{u\in\mathcal{C}}\exp(z_{u}/\tau)},\]

上式中 z 是词表 logits，v 是某个词，tau 是温度，示性函数保证只保留有效选项字母的概率，无效词概率为零，分母只对有效选项求和。这样交叉熵只聚焦候选项，避免无关词分走梯度。训练目标就是在温度为 1 时对真实选项字母做交叉熵。

训练完成后还有一步只调置信度不改排序主体的校准。论文在验证集上拟合 softmax 温度，用 10 个等宽置信度分箱计算期望校准误差最小的温度，得到 tau 星为 1.079，推理时用该温度下的选项分布作为最终概率。

\[\tau^{*}=\arg\min_{\tau>0}\sum_{b=1}^{B}\frac{|\mathcal{B}_{b}|}{|\mathcal{D}_{\mathrm{val}}|}\left|\operatorname{acc}(\mathcal{B}_{b})-\operatorname{conf}_{\tau}(\mathcal{B}_{b})\right|.\]

上式中 B_b 是按未校准概率划分的第 b 个置信度分箱，acc 是该箱内的实际准确率，conf 是该箱内的平均置信度，目标是让两者差距按样本量加权后最小。

**选项正则 × 温度缩放：** 选项正则是在训练时把 softmax 归一化和交叉熵监督限制在有效选项字母集合内，避免词表中无关词分走概率，温度缩放是在训练后只在验证集上拟合一个温度系数来整体调平置信度，前者管学得准，后者管报得准，两者都不改变已学到的排序主体。

下面这张训练与校准流水线图把上述三处改动放在一条线上，读图时注意冻结与更新的分界。

> **看图路径：** 1. 先沿左侧模态缺失示意看到右侧语言主干的汇入路径；2. 再对比右上因果与双向注意力矩阵的可视范围差异；3. 最后看右下温度缩放前后准确率随预测概率的变化

[![原论文 Figure 4：Overview of the training and calibration pipeline for UEmo-D1.](https://arxiv.org/html/2611.24481v1/fig4.png)](https://arxiv.org/html/2611.24481v1/fig4.png)

*论文图 4。原论文 Figure 4:：“Overview of the training and calibration pipeline for UEmo-D1.”。*

左侧显示不同模态组合进入各自编码器和适配器，视觉和音频编码器与适配器都冻结，只有语言主干中的 LoRA 参数更新。中间显示因果注意力换成双向注意力，下方显示决策符号处的选项掩码加 softmax 加交叉熵。右侧显示温度缩放前后准确率随预测概率的变化，校准后曲线更贴近对角线。原文没有报告注意力替换的具体层数和掩码实现细节，复现时可先按语言主干输入部分整体切换双向注意力、决策位置单独取 logits 的方式实现，再用已披露的验证集划分自行核对校准效果。

### 近一百万条训练数据是怎样攒出来又不泄漏的

数据流水线要解决标签写法不同、重复内容多、质量参差和划分泄漏 4 个问题。第一步标签映射把每个数据集原本至多 26 类的标签按顺序映射成 A、B、C 等大写字母，并在指令和监督目标中保持一致，这样决策位置总能对应到字母。第二步基于内容去重，图像用解码后 RGB 与感知相似度找近重复，音频用波形与来源元数据找重复录音，还处理了 WebEmo 同图冲突标签和 SpeechCraft 中性样本过大的问题，其中后者从 352261 条经按说话人和章节轮选保留 1000 条。

第三步质量控制检查缺失文件、解码失败和图文音不对齐，例如按时间戳重建 UR-FUNNY 的音画同步，并按来源做标注筛选，累计修复约 7600 条视听样本、过滤超 160,000 条来源记录。第四步划分校验防止同一说话人、同一对话或同一来源视频同时出现在训练和测试，例如 RAVDESS 按演员划分、CREMA-D 按说话人划分、引入 LISTEN 时排除与测试对话重叠的内容。第五步指令格式化用大语言模型改写指令措辞并随机打乱选项顺序，再经交叉检查和人工抽查保留明确的识别要求。

下面这张流水线图把 6 类输入、油漆桶汇聚和 5 个阶段画在了一起，读图时重点看每个阶段去掉的是哪类捷径。

> **看图路径：** 1. 先看左侧六个任务的输入组合与提问方式有何不同；2. 再看中间油漆桶汇聚表示多源数据统一收拢；3. 最后看右侧五个处理阶段各自解决什么脏数据问题

[![原论文 Figure 2：Overview of the UEmo-Data construction pipeline.](https://arxiv.org/html/2611.24481v1/fig2.png)](https://arxiv.org/html/2611.24481v1/fig2.png)

*论文图 2。原论文 Figure 2:：“Overview of the UEmo-Data construction pipeline.”。*

左侧六格分别示例面部、音频波形、唤起情绪的图片、对话视频加波形、图文帖子、社会理解视频，底部是统一的提问句式与 A、B、C 选项。右侧 5 个阶段从标签映射到指令格式化依次收窄，最后汇成 UEmo-Data。去重主要去冗余，质量控制主要修对齐与标注，划分校验主要防泄漏，指令多样化主要防背选项位置。

训练配置本身很简洁，适合作为复现起点。下表把原文连续句中报告的超参数和耗时整理在一起，表前先说明它回答的是用多大代价训出主体模型的问题。

本表整理论文为复现给出的训练代价与关键超参数，数值与单位以原文连续句为准，训练轮数与优化器调度共同决定过拟合风险。

| 配置项 | 取值 |
| --- | --- |
| 训练轮数与数据顺序 | 1 轮，全局打乱 |
| LoRA 秩与批量大小 | 秩 16，批量 64 |
| 训练耗时与硬件 | 约 20 小时，4 张 RTX 4090 |
| 温度缩放分箱与结果 | 10 个等宽分箱，tau 星 1.079 |

上表说明主体训练只做一轮全量数据微调，批量不大但数据量大，因此额外加轮次容易过拟合。LoRA 只动语言主干的小参数，原模型冻结，这也是后面消融中去掉双向注意力或选项正则只带来小幅变化的一个背景。温度缩放不更新模型权重，只在验证集上定一个标量温度，所以不影响准确率，只影响期望校准误差。读者复现时应先保证指令多样化和选项打乱与原文一致，否则单看准确率会高估模型的真实泛化。

### 评测在什么条件下比较准、快和报得准

评测对象是 UEmo-Data 测试集的 41 个子集，覆盖 4 个面部数据集、3 个音频数据集、7 个视觉内容数据集、3 个对话数据集、3 个图文数据集和 4 个社会理解数据集。对比对象包括开源大模型、专有模型和情绪专用大模型。论文为支持的模型同时测两种模式。推理模式指模型原生行为，允许先推理再回答。决策模式指比较首个输出位置的候选选项概率，类似 UEmo-D1 的做法。UEmo-D1 自身只用决策模式。

为公平起见，所有评测使用多样化指令措辞和打乱后的选项顺序，同一套输入模板用于决策模式。部分不支持音频的模型在计算平均分时用均匀随机的期望分数补齐音频部分，这一点看平均数时要记住。对于专有模型，延迟只记录可见答案，不含可能隐藏的内部推理。

指标共 4 个。准确率是选对的比例，越高越好。宏平均 F1 是在类别不均衡下对每类 F1 再平均，越高越好。期望校准误差是按置信度分箱后准确率与置信度的加权差距，越低越好。Brier 分数是预测分布与独热标签的均方距离，越低越好。论文在决策模式下统一取首个位置 logits 的选项概率来算校准，而不是取推理后答案词的概率，理由是后者在实践中不一定总能拿到。

### 在统一封闭选择下谁更准、谁报得更诚实

先看准确率的主比较。比较问题是同一套打乱选项和多样化指令下，统一决策模型与各类大模型在 6 个任务上的平均表现谁更好，指标方向是准确率和 F1 越高越好。

**准确率 × 期望校准误差 × Brier 分数：** 准确率衡量选对最高概率选项的比例，期望校准误差衡量按预测概率分箱后每箱平均置信度与实际准确率的加权差距，Brier 分数衡量预测分布与独热标签之间的均方距离，前者只看判对与否，后两者同时看概率报得是否诚实，三者方向分别是越高越好、越低越好、越低越好。

下表截取平均分与代表性基线，完整六任务分布见原文大表，阅读时注意不支持音频的模型已用随机期望补齐。

| Model | Mode | Acc | F1 |
| --- | --- | --- | --- |
| Qwen2.5-Omni [74] 7B | D | 59.2 | 52.2 |
| GPT-5.6-Luna [55] | R | 54.5 | 49.5 |
| UEmo-D1 (Ours) 3B | D | 75.6 | 69.5 |

表中 UEmo-D1 平均准确率达到 75.6 %，平均 F1 为 69.5 %，高于次好的 Gemini-3.5-Flash 的 62.3 % 和 56.7 %，平均领先 13.3 个百分点。分任务看，它在 6 个任务上都领先各自最强基线 4.8 至 18.4 个百分点，其中音频任务领先最多。论文还报告它在多数子集上领先，在 10 个子集上领先超 15 个百分点，只有 11 个子集落后，其中 5 个差距不足 0.5 个百分点。

上表支撑的判断是统一训练加决策范式在该封闭评测下带来跨任务优势，但限制也很清楚。视觉风格特殊的 Abstract、ArtPhoto 和 UnbiasedEmo，以及对话讽刺 MUStARD 等子集仍不是最好，说明分布偏移和讽刺理解仍是短板。把它和后文细粒度雷达图对照看，能发现优势随选项变细而放大，例如 WebEmo 从 2 类到 25 类的领先幅度在拉大。

再看校准的比较。比较问题是当真实情绪分布不可得时，谁的概率更可信，指标方向是期望校准误差和 Brier 分数越低越好。

| Model | ECE | Brier |
| --- | --- | --- |
| Qwen2.5-Omni [74] 7B | 19.9 | 58.5 |
| OneEmo [29] 4B | 13.2 | 57.6 |
| UEmo-D1 (Ours) 3B | 4.7 | 33.5 |

表中 UEmo-D1 平均期望校准误差为 4.7，约为次好结果的三分之一，Brier 分数为 33.5，约为次好结果的 60%。注意表中期望校准误差和 Brier 分数都已乘以 100，数值越小越好。论文强调这是用首位置 logits 的决策概率算的，统一口径下 UEmo-D1 不只是选对，还把概率分给了合理的备选项。

上表支撑的判断是 UEmo-D1 的分布视角更可靠，但只在该决策概率口径下成立。如果改用推理后答案词的概率，结论可能变化，原文没有给出该口径的完整对照。低置信区间样本少、误差棒宽，以及视觉风格偏移导致的过自信，都是后面校准可视化指出的待改进点。

下面这组案例把概率分布画了出来，有助于理解分布视角的含义，读图时先看问法再看概率排序。

> **看图路径：** 1. 先看每格左侧的真实标签与提问，再看右侧概率条的排序；2. 注意 VCEC 与 ITSA 两格最高概率条与真实标签不一致；3. 观察答对的格子是否为第二名也分到了可观概率

[![原论文 Figure 6：Visualization of UEmo-D1’s recognition results on representative cases from each of the six MER…](https://arxiv.org/html/2611.24481v1/fig6.png)](https://arxiv.org/html/2611.24481v1/fig6.png)

*论文图 6。原论文 Figure 6:：“Visualization of UEmo-D1’s recognition results on representative cases from each of the six MER tasks.”。*

六格分别对应面部、音频、视觉唤起、对话、图文、社会理解，左侧给出多模态内容、指令和真实标签，右侧给出每个选项的概率条。面部、音频、对话、社会理解四格最高概率与真实标签一致，视觉唤起把 Joy 排第一而真实为 Love，图文把 Anger 排第一而真实为 Disgust，但备选项都分到了可观概率。对话格把 Anger 作为第 2 名给了 27.2 %，社会理解格把 Praise 作为第 2 名给了 25.9 %，说明即使答对，模型也保留了对竞争性解释的概率。这正是论文所说的容纳多种合理解释，但读者不要把这种合理性当成人工评价，自动指标不能等同于人的多义判断。

### 哪些训练选择真正重要、哪些反而有害

消融要回答两个问题。第一是 3 个自带改动各自贡献多少，第二是继续加训练技巧能否更好。论文逐个去掉双向注意力、选项正则和温度缩放，并单独尝试多训一到两轮、Brier 损失、R-Drop、GRPO 和带显式校准奖励的 RLCR。

结果是去掉双向注意力平均准确率从 75.6 % 降到 74.9 %，去掉选项正则降到 75.2 %，对概率质量的影响也很小。去掉温度缩放不影响准确率，只让期望校准误差从 4.7 % 升到 5.0 %。额外训练一轮准确率降到 74.8 % 且校准误差升到 10.5 %，多训两轮进一步恶化。GRPO 只带来 0.1 个百分点的准确率提升，却让校准误差几乎翻倍。论文把这归因于大数据下单点改进被稀释，以及重复见同一数据导致的过拟合和强化学习带来的过自信。

第二个对照看任务组合。比较问题是每个任务家族对联合训练的贡献，条件是单任务微调相对基线的变化，以及从全量模型中逐个去掉一类任务后的变化。

| Index | FER | AER | VCEC | CMER | ITSA | MSU | Avg. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| #7 | 29.4 (−5.1) | 41.5 (−5.5) | 42.6 (−18.3) | 63.9 (−0.8) | 29.7 (−29.8) | 78.4 (+20.5) | 47.6 (−6.5) |
| #8 | 66.8 | 72.8 | 72.9 | 77.6 | 81.8 | 81.5 | 75.6 |
| #9 | 30.2 (−36.6) | 74.4 (+1.6) | 72.8 (−0.1) | 77.9 (+0.3) | 82.6 (+0.8) | 80.7 (−0.8) | 69.8 (−5.8) |
| #13 | 65.4 (−1.4) | 75.0 (+2.2) | 72.9 (0.0) | 77.8 (+0.2) | 60.7 (−21.1) | 80.4 (−1.1) | 72.0 (−3.6) |

表中第 8 行是六任务全量的 UEmo-D1，第 9 至 14 行是每次去掉一类任务的结果。去掉任何一类都会让平均准确率下降 1.4 至 5.8 个百分点，其中去掉面部数据降得最多。单任务训练则是训什么涨什么，例如只训面部让面部从 34.5 % 涨到 65.4 %，只训音频让音频从 47.0 % 涨到 73.7 %，但跨任务迁移不均匀，训其他任务多能带动图文和社会理解，而反过来不明显。去掉某类后音频和图文反而在去掉非自身任务时略涨，说明混合比例中存在互补与干扰并存。

上表支撑的判断是联合训练总体有益，但迁移不对称且依赖组合，读者不要把平均提升理解为每个任务都同等受益。论文也明确说更精细的数据配比留给未来工作，当前只证明全量组合优于任何缺一类的组合。未胜出的负结果同样重要，例如多训、正则约束和强化学习都没有带来联合改善，这为复现省掉了不必要的复杂度。

**联合训练 × 任务迁移：** 联合训练指把六个任务家族的数据混在一起训练一个模型，任务迁移指只在一个任务上训练却在另一个任务上也能变好，论文用单任务训练和逐个去掉一类任务的对照来区分互补与干扰，说明平均提升来自组合而非某个单任务包打天下。

### 哪些地方还不准、报得还不够稳

先说识别的短板。细粒度对比显示视觉内容中 Abstract 和 ArtPhoto 这类艺术风格、UnbiasedEmo 的特定分布，以及对话讽刺 MUStARD 仍落后于最强基线。论文在补充实验中还用 CA-MER 检验模态冲突，一致时 UEmo-D1 为 66.2 %，音频对齐时 54.0 %，视频对齐时只有 41.2 %，呈现音频主导倾向。这说明当两路证据打架时，模型更依赖声音，平衡利用视听证据仍需针对冲突样本的训练。

再说校准的短板。分任务校准可视化显示高置信区间整体贴近对角线，但低置信区间偏离更大且样本少、95 % Wilson 区间更宽。艺术风格域上即使准确率与置信度正相关，预测仍在较宽区间内系统性过自信。这意味着论文报出的平均 4.7 的误差不能推广到每个子集和每个置信段，低置信预测和分布偏移仍需更好的校准。

还有评测条件的边界。所有主要结论都建立在封闭选项、打乱顺序、多样化指令的同一模板下。选项顺序敏感性实验显示把首选项移到末尾后，AffectGPT、Nano-EmoX 和 OneEmo 平均掉 2.0 至 5.4 个百分点，Nano-EmoX 在对话任务上甚至掉 29.4 个百分点，而 UEmo-D1 和 EmObserver 几乎不变。论文认为这与训练时随机打乱选项有关。换句话说，离开打乱选项的评测，对手的差距可能缩小，UEmo-D1 的稳健性部分来自训练时见过这种变化。

### 要复现第一步先做什么、代价是什么

复现的第一步不是先调模型，而是先把数据和评测模板对齐。按论文 5 阶段重做标签映射、去重、质量控制、划分校验和指令格式化，尤其要保证选项字母随机打乱、指令措辞多样化、训练测试在说话人、对话和来源视频层面不泄漏。测试集每子集至多 500 条的规模和 4 种输入组合决定了评测脚本必须支持缺模态省略，而不是补零或补空图。

模型侧从 Qwen2.5-Omni-3B 初始化，冻结原权重，只训练语言主干的 LoRA 参数，秩 16，学习率 10−4 加 500 步预热后余弦衰减，批量 64，全局打乱训一轮。输入侧把因果注意力换成双向注意力，输出侧只在有效字母集合内做 softmax 和交叉熵。训完后在验证集上用 10 个等宽分箱拟合温度，得到 1.079 后再推理。论文报告在 4 张 RTX 4090 上约 20 小时，推理延迟在 2 张 RTX 4080 上平均约 0.553 秒，显著低于多数推理模式的数秒量级，但这主要来自单步决策和轻量主干，没有专用加速。

论文正文提到项目页面，但本次收到的资源标注为第三方链接，不能据此认定作者已公开代码或权重。复现时应把代码可运行、权重可下载、系统可运行分开验证，先跑通单样本的选项概率输出，再跑全量 41 子集的平均分与校准，最后才做多轮训练或强化学习的扩展，因为原文已显示这些扩展在当前配置下无益甚至有害。

### 什么时候值得尝试、还缺哪项验证

当任务是封闭选项的情绪、情感、意图或讽刺判断，输入模态经常缺失，又希望 1 次前向就拿到可比较的概率分布时，这套决策做法值得尝试。它把 6 类任务装进同一模板，省去显式推理的长输出，延迟和校准在原文条件下占优。对于需要长解释或开放式共情回复的场景，它不直接给出理由链，需要另加解释模块。

行动顺序建议是先复现数据划分与打乱模板，再复现单轮 LoRA 微调与温度缩放，接着在自己的数据上检查三件事。第一是换视觉风格或换录音设备后准确率掉多少，第二是低置信样本的准确率是否真低，第三是模态冲突时是否过度偏向音频。这三项分别对应原文中表现较弱的子集、低置信区间的偏离和 CA-MER 的不对称。

还缺的验证主要是分布外和人工视角。原文没有报告跨全新来源、跨语言或跨文化表达下的表现，也没有用人工评价来验证分布的合理性，自动指标不能代替人的多义判断。数据配比如何影响互补与干扰、温度缩放能否推广到偏移域，都需要补做。在这些验证完成前，结论应限定为在 UEmo-Data 的 41 个封闭子集、统一模板和决策概率口径下，统一决策模型是可行且高效的选择，而不是对所有情绪理解场景的普遍最优。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.24481v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
