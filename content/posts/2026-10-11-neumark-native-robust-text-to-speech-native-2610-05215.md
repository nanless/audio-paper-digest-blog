---
title: "NeuMark-Native: Robust Text-to-Speech-Native Watermarking Through Full Utilization of Neural Audio Codec Latent Space"
date: 2026-10-11
draft: false
tags: [音频水印, 文本到语音, 神经编解码与离散单元, 对抗训练]
categories: [论文速递]
description: "针对合成语音事后加水印易被绕过和易被神经编解码重合成抹除的问题，NeuMark-Native 把 16 比特信息嵌入冻结的 VALL-E 与 SpeechTokenizer 每一层 RVQ 隐表示后再解码，在两套语料 11 种信号处理与 9 种编解码攻击下取得更强的整体检出，尤其在编解码攻击下优势明显，代价是只训练水印模块并需离线预合成配对数据。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.05215"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把水印写进语音合成中间过程：NeuMark-Native 解读"
paper_digest_original_title: "NeuMark-Native: Robust Text-to-Speech-Native Watermarking Through Full Utilization of Neural Audio Codec Latent Space"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.05215v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.05215v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.05215v1.pdf"
paper_digest_primary_task: "音频水印"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.watermarking","label":"音频水印"},{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.neural-codec","label":"神经编解码与离散单元"},{"facet":"method","id":"method.adversarial-training","label":"对抗训练"}]
paper_digest_primary_method: "神经编解码与离散单元"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对合成语音事后加水印易被绕过和易被神经编解码重合成抹除的问题，NeuMark-Native 把 16 比特信息嵌入冻结的 VALL-E 与 SpeechTokenizer 每一层 RVQ 隐表示后再解码，在两套语料 11 种信号处理与 9 种编解码攻击下取得更强的整体检出，尤其在编解码攻击下优势明显，代价是只训练水印模块并需离线预合成配对数据。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Annan Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wen-Chin Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tomoki Toda"}]
paper_digest_abstract_sha256: "13e640f02470a9202c42e19e0aa3788fbbcf24b025472c9c127628c550f730ed"
paper_digest_sidecars: {"citation.bib":{"sha256":"1e4579b9b32992f49e6264bdf00c2a44ffe21a6d7fc8584e34861bec4cf77327","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05215/citation.bib"},"citation.json":{"sha256":"11b82c1e315549900eb9082e9082f3e4f7ebbda897ec8bfbd538b3b8274e4f39","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05215/citation.json"},"citation.ris":{"sha256":"06be9c3aaae398e35643080eb4aa200bfce44aefd28c83742dcbdb5e6ab278ea","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05215/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"17ff2f4544f26af9b6cbba673ceec99368d99e583eb7b70e2627300553edd2d0","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05215/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "740c342883a7ca03c6eb6bb0c1192309e2ce43b6730aa168465920c33d1e2aae"
paper_digest_api_reader_plan_sha256: "53d0d1a636cba730eb671ca57cc9a1c1c736cbb7953e1809993937dbd5374d5b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "922a490f4eff7382c603c5f63dd7d7ea4a7003124f1e7a03fcbed44b1cb2c17f"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "9c59af01cdba1cc2d6f5f68771b1f0e0596ce5d016507a471ca371da618422ff"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "54a3b7f6c388a00d83ef73ad16272424d0e68bcec9e1f6c29656033ec2a01f93"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7052115b8df88ad20266e2fc934eb15308cb24336cbf895d947eb4d2eb1f9def"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把水印写进语音合成中间过程：NeuMark-Native 解读

> 英文题目：*[NeuMark-Native: Robust Text-to-Speech-Native Watermarking Through Full Utilization of Neural Audio Codec Latent Space](https://arxiv.org/abs/2610.05215v1)*

> 标签：#音频水印 | #文本到语音 | #神经编解码与离散单元 | #对抗训练
>
> 评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Annan Wu：机构信息未在 arXiv HTML 中可靠披露
- Wen-Chin Huang：机构信息未在 arXiv HTML 中可靠披露
- Tomoki Toda：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

合成语音溯源需要在语音生成时嵌入可恢复的载荷信息，难点是合成后外加的水印容易被省略或绕过，且常规波形水印在神经编解码器重合成后容易丢失。NeuMark-Native先用冻结的VALL-E从目标文本和同说话人提示预合成目标编解码器令牌，再用可训练的水印嵌入器对每层残差向量量化流做消息条件残差更新，冻结解码器输出含水印合成语音，提取器从失真后语音恢复消息和帧级检测标签。配对的未加水印合成参考分支约束内容和声学漂移，自然度、说话人相似度和语音识别损失分别维护主观质量、音色一致和文本内容。相对合成后加水印的WavMark和AudioSeal，该方法把水印证据分布到编解码器隐空间；相对TraceableSpeech，它不重训语音合成模型和编解码器。在LibriTTS test-clean上，适配版本总体检测ROC-AUC为0.981，超过AudioSeal的0.903，编解码器条件下优势更大。该结论仅在冻结VALL-E与SpeechTokenizer的零样本音色克隆、11种数字信号处理失真和9种神经编解码器重合成下验证，其中DAC与SNAC训练未见而EnCodec训练可见，编解码器条件检测仍明显低于无失真与数字信号处理条件。直接套用与适配微调在低虚警检测和比特恢复上互有胜负，向其他语音合成主干迁移及非英语场景尚未验证。原文未披露推理延迟与部署成本，训练成本为单张NVIDIA H100约69小时。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/goannan/NeuMark-Native> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/microsoft/UniSpeech/tree/main/downstreams/speaker_verification> — 链接可访问（HTTP 200）

- 第三方资源：<https://docs.pytorch.org/audio/stable/pipelines> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/facebookresearch/audiocraft> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的是什么溯源问题

这篇论文处理的是合成语音的可追溯性问题。输入是目标文本与一段同说话人的提示语音，目标是用零样本合成模型生成该说话人朗读目标文本的语音，输出是可直接播放的波形，同时要求波形里藏有一段可恢复的 16 比特信息。必须保留的信息有 3 类：语言内容不能变，说话人听感要保持与提示人一致，自然度不能明显下降；水印信息在常见处理后仍能被检出和读出。

论文强调的痛点是，现有神经水印多在合成结束后在波形上加扰动，水印只是外挂步骤，部署时可以被省略或绕过，而且只停留在浅层波形表示。已有研究指出神经编解码重合成能大面积抹除这类波形水印，即使它们能抗普通信号处理。因此问题不是把水印加得更强，而是把嵌入点搬进合成内部，让水印随生成一起产生，并分布到更耐重合成的隐表示上。

读图说明：下面第一张图展示事后水印的典型链路，有助于理解为什么它容易被绕过，请先看合成框与水印模块的前后关系。

> **看图路径：** 1. 先看左侧蓝色框内是否只有合成语音波形，再看水印生成器是否在合成框之外；2. 再看黄色水印分支与原始波形在加法节点汇合的位置；3. 最后确认最终输出的黄色波形仍是波形域叠加的结果

[![原论文 Figure 1：Post-hoc watermarking applied after TTS synthesis.](https://arxiv.org/html/2610.05215v1/figures/fig1.png)](https://arxiv.org/html/2610.05215v1/figures/fig1.png)

*论文图 1。原论文 Figure 1:：“Post-hoc watermarking applied after TTS synthesis.”。*

这张图把事后流程画得很直白：左侧蓝色框内只有合成语音波形，水印生成器在框外单独根据合成语音产生黄色水印，再与原始波形相加得到带水印语音。水印与合成是串行的两个阶段，去掉第二个阶段仍能得到可用合成语音，这正是论文所说的可省略性。图中加法节点的位置也说明水印只作用于最终波形，没有进入任何生成中间表示。

**TTS 原生水印 × 事后水印：** 事后水印指语音合成结束后，再在波形上叠加一个扰动，它与合成模型无关但可以被跳过不加。TTS 原生水印指在合成产生编解码记号、波形解码器输出波形之前就把信息写进去，水印成为生成链路的一部分。本文对比这两条路线，说明为什么要把嵌入点从最终波形前移到编解码隐空间。

### 已有路线为什么不够用

论文把相关工作分成 3 条线。第一条是信号处理水印与早期神经波形水印，例如 WavMark 和 AudioSeal，它们在波形域加 learned 扰动，优点是与合成模型无关、部署方便，缺点是水印与生成脱节，且在神经编解码重合成下容易失效。第二条是 TTS 原生水印的代表 TraceableSpeech，它把水印嵌入连续编解码表示并用残差网络提取，但需要先联合训练水印模型与语音编解码器，再基于新编解码表示从头训练 VALL-E，改动水印就要重训合成模型，还带来语音质量代价，也没有解决编解码重合成鲁棒性。

第 3 条是作者此前的 NeuMark，它冻结语音编解码器，只优化变换器水印模块，通过交叉注意力对每一层残差向量量化表示做消息条件残差更新，把证据分散到与编解码对齐的隐表示上，从而在重合成后仍可检出，但其载体来自真实语音编码，与 TTS 生成分离。本文的比较都要求输入、目标与运行阶段一致：波形方法是在同一合成语音上后加水印，原生方法是在生成解码前嵌入，不能把类别差异误读为同条件胜负。

读图说明：下面第二张图展示 TTS 原生水印的理想位置，请对照上一张图看嵌入点从波形后移到了解码器前。

> **看图路径：** 1. 先看目标文本到粉色语音记号的主路径；2. 再看底部黄色水印比特到水印记号的并行路径；3. 最后看两路在解码器之前汇合，再统一生成黄色波形

[![原论文 Figure 2：TTS-native watermarking applied during TTS synthesis.](https://arxiv.org/html/2610.05215v1/figures/fig2.png)](https://arxiv.org/html/2610.05215v1/figures/fig2.png)

*论文图 2。原论文 Figure 2:：“TTS-native watermarking applied during TTS synthesis.”。*

这张图显示目标文本先变成粉色语音记号，底部黄色水印比特变成水印记号，两路在解码器前的加法节点汇合，再一起经过解码器生成黄色带水印语音。关键变化是水印不再叠加到波形上，而是先与语音记号融合再解码，解码器输出自然带水印。这为后文理解 NeuMark-Native 在每一层残差量化流上做修改打下基础。

### 输入输出与必须满足的约束

把任务形式化有助于复述。训练与测试的每一样本都从目标文本 s 与同说话人提示波形 x 出发。冻结的 SpeechTokenizer 编码器把提示变成提示记号，冻结的 VALL-E 据此预测目标记号，冻结的解码器把目标记号变成合成语音。水印系统的输入再多一个随机 16 比特消息 m，输出是加水印记号与加水印波形。约束包括：解码内容与配对参考不能漂移，听感自然度、说话人相似度、字错率等质量指标要接近无水印合成语音，同时在 11 种数字信号处理攻击与 9 种神经编解码攻击下保持检出与比特准确率。

论文用检测 ROC 曲线下面积、误报率不超过 0.1% 时的召回率、载荷比特准确率衡量水印侧，用自然度预测分、说话人相似度、字错率、感知语音质量与短时客观可懂度衡量语音侧，前者越高越好，后者中字错率越低越好。理解这组约束才能明白为什么损失函数同时包含水印目标与语音保持目标。

### 整体流程如何把水印做进合成

NeuMark-Native 的总体思路是沿用 NeuMark 的逐层隐空间水印写法，但把载体从真实语音编码换成 TTS 预合成的记号，并保留冻结主干、只训练水印模块的策略。具体分两步：离线准备阶段用冻结 VALL-E 为每个训练文本与同说话人提示预合成目标记号及其解码语音，存成配对训练样本，让水印模块见到 TTS 特有的记号分布；训练阶段在缓存的 TTS 生成记号上做嵌入、解码、失真、提取的闭环学习。推理合成时同样在 VALL-E 预测记号后、解码器解码前嵌入消息，直接产生带水印合成语音，不再需要事后叠加。

两个变体都冻结 TTS 与编解码器并用相同嵌入过程：直接应用版把在真实语音记号上预训练好的 NeuMark 模块直接用于 TTS 生成记号，适配版从同一检查点出发再在配对数据上微调。这种设计把可追溯性变成合成链路的一部分，同时避免重训合成模型与语音编解码器。

### 离线配对数据准备了什么

离线准备解决载体错配问题。如果只在真实语音编码的记号上训练，水印模块学到的是自然语音的隐分布，遇到 VALL-E 预测记号的误差与分布偏移就可能不适应。论文让冻结 VALL-E 对训练集每个文本与其同说话人提示做预合成，保存预测的目标记号与解码得到的合成语音作为配对样本。目标记号是后续水印的实际载体，合成语音是样本对齐的参考锚点，防止加水印语音在内容或声学上漂移。训练集来自 LibriTTS 3 个训练子集，时长过滤到 0.5 秒到 10.5 秒后约 157k 条，预处理与该流程一致。

适配训练在单块 H100 上跑 10 轮约 69 小时，每个样本配随机 16 比特消息与一种增强。这种用生成记号而非录制语音编码做载体的做法，是本文相对 NeuMark 的关键变化，也是消融中是否使用生成记号这 1 维度的来源。

### 嵌入器与提取器如何分工

嵌入与提取是两个可训练的变换器模块。嵌入时载体提供交叉注意力的查询，消息提供键与值，堆叠多个变换器块，对每条残差量化流做修改，得到加水印记号，再经冻结解码器变成加水印波形。提取时失真后的语音先经冻结编码器回到记号，再经自注意力与前馈模块输出每帧是否含水印的预测与恢复的消息。失真层提供帧标签，编码器映射出失真记号，提取器同时完成检测与解码。

图中火焰与雪花符号区分可训练与冻结模块，只有水印模块从配对分支差异中学习。这种查询来自语音、键值来自消息的设计，让同一语音载体可按不同消息产生不同残差更新，而提取器则要从受损语音中逆推出消息。

**神经音频编解码器 × 残差向量量化：** 神经音频编解码器负责把波形压缩成可生成、可解码的隐表示，而残差向量量化是其中把每一帧逐层细化的量化方式，第一层给大致轮廓，后面层补细节。NeuMark-Native 把水印同时写进每一层，就是让每一层细化信息里都留有证据，这样即使后续重合成丢掉某些细节层，其余层仍可能保留可检出的痕迹。

下面展示训练闭环的完整结构，请先沿下方嵌入路径看到失真，再折返到上方提取路径，有助于理解监督从哪里来。

> **看图路径：** 1. 先看下方嵌入器中查询与键值的来源分支；2. 再看加水印记号经解码器到加水印语音再到失真层的链路；3. 最后看上方提取器输出的帧判决与恢复消息与下方原始消息的对应关系

[![原论文 Figure 4：NeuMark-Native training on the prepared TTS-generated codec tokens.](https://arxiv.org/html/2610.05215v1/figures/fig4.png)](https://arxiv.org/html/2610.05215v1/figures/fig4.png)

*论文图 4。原论文 Figure 4:：“NeuMark-Native training on the prepared TTS-generated codec tokens.”。*

这张图下方是写路径：配对训练数据中的合成记号作为查询，消息作为键值进入交叉注意力与前馈，产生加水印记号，经解码器得到加水印语音，再经失真层变成失真语音。上方是读路径：失真语音经编码器回到记号，进入自注意力与前馈，输出帧判决与恢复消息。图中间标注的多种损失箭头说明写路径要同时满足听感与检出，读路径要同时满足帧检测与比特解码。

**嵌入器 × 提取器：** 嵌入器负责按给定消息修改合成记号，提取器负责从可能受损的语音中恢复消息并判断是否含水印。两者分工是写与读，训练时联合优化：嵌入器要写得隐蔽且经得起失真，提取器要读得准，失真层夹在中间逼迫这种鲁棒性。

### 三个语音感知损失在约束什么

除沿用的 6 个 NeuMark 目标外，本文为零样本克隆引入 3 个语音感知目标。自然度损失用冻结的 UTMOS 预测器给加水印语音打分并取负，优化它就是推高预测平均意见分，防止水印引入刺耳感。说话人相似度损失用基于冻结 WavLM-Large 特征的 ECAPA 说话人验证模型分别提取加水印语音与原始录制语音的说话人向量，取余弦相似度的补数，优化它就是保持提示说话人的身份。

语音识别损失用冻结的 wav2vec2 Base 把加水印语音映射为帧级字符逻辑值，目标文本经字符分词器转成字符序列，再用联结时序分类汇总所有合法帧级路径的负对数似然，优化它就是在无帧对齐标签下保持语言内容。这 3 个损失分别对应听感、音色、内容 3 条锚线，与重建类目标一起防止水印为追求鲁棒而牺牲语音属性。

\[\mathcal{L}_{\mathrm{mos}}=-U(x_{\mathrm{wm}}),\]

上式中 U 是冻结的自然度预测器，输入为加水印语音，输出为预测分，损失取负意味着分数越高损失越小，梯度只更新水印模块，不更新预测器。

\[\mathcal{L}_{\mathrm{ssim}}=1-\operatorname{cos}(V(x_{\mathrm{wm}}),V(x)),\]

上式中 V 是说话人验证模型，cos 表示余弦相似度，1 减相似度意味着越相似损失越小，它把音色保持变成可微目标，同样只训练水印侧。

\[\mathcal{L}_{\mathrm{asr}}=\operatorname{CTC}\!\left(\log\operatorname{softmax}(B(x_{\mathrm{wm}})),\tau(s)\right),\]

上式中 B 是语音识别声学模型，tau 是文本到字符序列的分词器，CTC 负责对齐求和，损失鼓励加水印语音仍能被识别为目标文本，从而约束内容漂移。

### 联合目标与对抗训练如何执行

联合目标把九项损失加权求和，解码、检测、隐余弦、对抗、特征匹配与梅尔损失沿用 NeuMark 权重，梅尔权重 0.25，自然度权重 0.5，说话人相似度权重 1，语音识别权重 0.5。对抗部分包含多周期、多尺度与多尺度短时傅里叶判别器，采用最小二乘目标：判别器把配对参考判为真、把分离的加水印语音判为假，水印模块则在判别器冻结时按联合目标优化，判别器另行用分离的加水印语音更新。

所有 TTS、编解码与语音评估网络保持冻结，梯度只经过水印嵌入器、提取器与判别器更新路径，原文未报告优化器细节与学习率时程，复现时需以公开代码为准，不要从模型名猜测实现。训练增强池从恒等与 11 种数字信号处理攻击中每样本抽一种，另含 3、6、12 kbps 的 EnCodec 重合成及编解码重合成叠加帧掩蔽或替换，负样本在录制语音与合成语音间交替，以兼顾检测与鲁棒。

**零样本语音克隆 × 提示语音：** 零样本语音克隆指只给一段目标说话人的提示语音和目标文本，就生成该音色的目标语音，不需要为该说话人重新训练合成模型。提示语音提供音色与韵律线索，目标文本提供语言内容，VALL-E 据此预测目标编解码记号。本文的训练与评测都围绕这种输入组合展开，所以保音色与保内容损失都与提示语音和目标文本对齐。

读图说明：下面是离线预合成如何产生适配用配对数据的结构，请注意冻结标记只出现在编码器、VALL-E 与解码器上。

> **看图路径：** 1. 先沿提示语音经编码器到真实语音记号再到 VALL-E 的箭头看输入来源；2. 再看目标文本从上方进入 VALL-E 的位置；3. 最后看合成记号与合成语音如何一起进入配对训练数据

[![原论文 Figure 3：Offline preparation of paired TTS-generated codec tokens and synthetic speech.](https://arxiv.org/html/2610.05215v1/figures/fig3.png)](https://arxiv.org/html/2610.05215v1/figures/fig3.png)

*论文图 3。原论文 Figure 3:：“Offline preparation of paired TTS-generated codec tokens and synthetic speech.”。*

这张图从左到右是提示语音经编码器到真实语音记号，再与目标文本一起进入冻结 VALL-E，输出合成记号，再经解码器得到合成语音，虚线把合成记号与合成语音一起送入配对训练数据。雪花标记表明编码器、VALL-E 与解码器都不更新，只有后续水印模块可训练。点线还标出目标文本取自训练 utterance 的转录，提示来自同说话人，保证零样本克隆的输入条件。

\[\mathcal{L}_{D}=\frac{1}{|\mathcal{D}|}\sum_{D\in\mathcal{D}}\frac{1}{K_{D}}\sum_{k=1}^{K_{D}}\left[\mathbb{E}(D_{k}(\hat{x})-1)^{2}+\mathbb{E}D_{k}(x_{\mathrm{wm}})^{2}\right].\]

上式是判别器的最小二乘更新，Dk 表示某判别器的第 k 个输出，期望分别对配对参考与分离的加水印语音计算，它与水印模块的对抗损失配合，在不更新合成与编解码主干的前提下约束生成逼真度。

### 在什么数据与攻击下评测

评测按零样本语音克隆组织。训练用 LibriTTS 3 个训练子集过滤后的约 157k 条，测试用 LibriTTS test-clean 过滤后的 2078 条作域内集，用 Seed-TTS 英文子集 1088 个提示文本对作跨语料集，考察未见文本与未见说话人的泛化。每个测试项先按离线流程由测试文本与同说话人提示经 VALL-E 预测目标记号并解码为合成语音，NeuMark-Native 与 TraceableSpeech 在解码前嵌入而直接产生带水印语音，WavMark 与 AudioSeal 则在该合成语音上后加扰动，所有方法在相同失真条件下比较。条件包括恒等与 11 种数字信号处理攻击，以及 9 种编解码攻击，分别用 EnCodec 在 3、6、12 kbps、DAC 在 6、8、24 kbps、SNAC 在 0.98、1.9、2.6 kbps，其中 DAC 与 SNAC 训练时未见。组均值形成 12 项与 9 项加权的总体分。质量侧以同一无水印合成语音为共同载体，感知语音质量与可懂度以它为参考。

**检出 × 载荷恢复：** 检出回答这段语音是否带本方法水印，载荷恢复回答 16 比特具体每一位是什么。检出用 ROC 曲线下面积与低误报率下的召回衡量，载荷恢复用比特准确率衡量。两者搭配才完整：能检出但恢复不准，溯源信息仍不可用；恢复准但检出门限不稳，实际部署也难以判定。

### 鲁棒性结果支持什么结论

比较问题是：在相同 TTS 生成载体与相同攻击下，哪种水印在检出与比特恢复上更稳，指标越高越好，公平条件是同一合成语音起点与同一攻击集合。结果呈现明显分化：波形方法在普通信号处理下仍强，但在编解码重合成下掉得明显；原生逐层嵌入在编解码下保持高位。

原文表显示适配版在两套语料总体检测最优，直接应用版总体比特准确率最高，且两套语料趋势一致，支持对未见文本与说话人的泛化判断，但该泛化仅限于这两套英语评测与所列攻击，不能推广到所有语种与信道。低误报要求下的召回与比特准确率要分开看，适配版偏向整体检测，直接版偏向编解码平均载荷精度，实际选型取决于更在乎检出还是逐比特溯源。

表前说明：下表比较 4 种方法在数字信号处理、神经编解码与总体均值下的检出与恢复，数值越大越好，载体与攻击条件一致。

|  |  | LibriTTS test-clean | LibriTTS test-clean | LibriTTS test-clean | SeedTTS-en | SeedTTS-en | SeedTTS-en |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Method | Conditions | AUC↑\uparrow | TPR.1↑{}_{.1}\uparrow | Bit↑\uparrow | AUC↑\uparrow | TPR.1↑{}_{.1}\uparrow | Bit↑\uparrow |
| WavMark [3] | DSP | 0.993 | 0.931 | 0.954 | 0.989 | 0.925 | 0.948 |
|  | Codec | 0.570 | 0.095 | 0.542 | 0.572 | 0.092 | 0.543 |
|  | Overall | 0.812 | 0.572 | 0.778 | 0.810 | 0.568 | 0.775 |
| AudioSeal [15] | DSP | 0.970 | 0.920 | 0.946 | 0.971 | 0.920 | 0.944 |
|  | Codec | 0.813 | 0.445 | 0.638 | 0.806 | 0.422 | 0.645 |
|  | Overall | 0.903 | 0.717 | 0.814 | 0.900 | 0.707 | 0.816 |
| TraceableSpeech [25] | DSP | 0.987 | 0.921 | 0.958 | 0.984 | 0.921 | 0.955 |
|  | Codec | 0.660 | 0.088 | 0.605 | 0.697 | 0.090 | 0.610 |
|  | Overall | 0.847 | 0.564 | 0.807 | 0.861 | 0.565 | 0.807 |
| NeuMark-Native (direct) | DSP | 0.999 | 0.948 | 0.974 | 0.998 | 0.885 | 0.973 |
|  | Codec | 0.942 | 0.521 | 0.861 | 0.940 | 0.481 | 0.885 |
|  | Overall | 0.975 | 0.765 | 0.926 | 0.973 | 0.712 | 0.936 |
| NeuMark-Native (adapted) | DSP | 1.000 | 0.961 | 0.982 | 0.998 | 0.914 | 0.964 |
|  | Codec | 0.955 | 0.605 | 0.842 | 0.949 | 0.490 | 0.830 |
|  | Overall | 0.981 | 0.808 | 0.922 | 0.977 | 0.733 | 0.907 |

该表的主要收益是 NeuMark-Native 两变体在编解码行的全面领先，而代价是需要离线预合成与微调。反例是 WavMark 在编解码行的检测与比特接近随机水平，AudioSeal 虽优于 WavMark 但仍明显低于本文方法，TraceableSpeech 在两类攻击下都不占优。限制是总体分为组均值加权，若改变攻击种类或权重排序可能变化，且 DAC 与 SNAC 虽训练未见但仍属同类神经编解码，不能视为对一切压缩与信道的保证。

### 语音质量是否接近无水印合成

比较问题是：加水印是否明显损伤自然度、音色、内容与感知保真度，条件是同一无水印合成语音为参考，自然度、相似度、感知质量与可懂度越高越好，字错率越低越好。表后解释要给出具体代价：NeuMark-Native 两变体的自然度、相似度、字错率都紧贴合成语音与波形方法，感知指标也接近波形方法，说明逐层隐嵌入没有带来大面积音质塌陷。反例是 TraceableSpeech 在自然度、相似度、字错率与感知指标上全面偏低，印证其先联合训练编解码再重训 VALL-E 的语音代价。限制是字错率绝对值在两套语料都偏高，反映的是所用 VALL-E 基线与识别器条件下的共同起点，不是水印单独引入的恶化，比较时应看相对差异而非绝对值。

表前说明：下表比较无水印合成语音与各水印方法的自然度、说话人相似度、字错率与感知指标，参考条件一致，方向按表头箭头判断。

|  | LibriTTS test-clean | LibriTTS test-clean | LibriTTS test-clean | LibriTTS test-clean | LibriTTS test-clean | SeedTTS-en | SeedTTS-en | SeedTTS-en | SeedTTS-en | SeedTTS-en |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | UTMOS↑\uparrow | SSIM↑\uparrow | WER(%)↓\downarrow | PESQ↑\uparrow | STOI↑\uparrow | UTMOS↑\uparrow | SSIM↑\uparrow | WER(%)↓\downarrow | PESQ↑\uparrow | STOI↑\uparrow |
| Synthetic speech | 3.664 | 0.425 | 35.8 | — | — | 3.276 | 0.420 | 36.7 | — | — |
| WavMark | 3.632 | 0.421 | 35.7 | 4.159 | 0.996 | 3.224 | 0.414 | 36.8 | 4.081 | 0.988 |
| AudioSeal | 3.651 | 0.425 | 35.8 | 4.416 | 0.997 | 3.259 | 0.417 | 36.8 | 4.427 | 0.990 |
| TraceableSpeech | 2.198 | 0.174 | 41.3 | 3.048 | 0.925 | 2.109 | 0.182 | 47.1 | 2.463 | 0.895 |
| NeuMark-Native (direct) | 3.638 | 0.410 | 35.7 | 4.360 | 0.990 | 3.244 | 0.403 | 36.9 | 4.161 | 0.979 |
| NeuMark-Native (adapted) | 3.630 | 0.413 | 35.7 | 4.318 | 0.991 | 3.238 | 0.413 | 37.0 | 4.212 | 0.985 |
| w/o native losses | 3.648 | 0.420 | 35.8 | 4.443 | 0.995 | 3.254 | 0.414 | 37.0 | 4.382 | 0.992 |
| w/o generated tokens | 3.613 | 0.413 | 35.7 | 4.278 | 0.989 | 3.228 | 0.407 | 36.9 | 4.058 | 0.978 |

该表显示去掉原生损失的变体在部分感知指标上甚至最优，与 AudioSeal 差异仅千分位量级，说明重建类目标已提供较强透明度锚点。去掉生成记号的变体质量略低，说明用 TTS 生成记号训练更偏向整体鲁棒与质量平衡。尚未评测的范围包括主观听音与长时稳定性，自动指标不能等同人工评价，部署前仍需补听音验证。

### 生成记号与原生损失各自起了什么作用

比较问题是：TTS 生成记号训练与新增的自然度、相似度、识别损失是否各自必要，条件是相同初始化与 NeuMark 目标，只开关这两组因素。表后解释呈现互补：去掉原生损失后透明度最好但总体鲁棒与低误报召回下降，说明三项语音损失以小幅质量代价换鲁棒；去掉生成记号改用真实语音编码后，低误报召回与比特恢复反而超过完整适配模型，但质量略低，说明真实语音记号更偏向严格检测与逐比特精度，而生成记号训练更偏向整体平衡。

直接应用版保留最高编解码平均载荷精度，表明预训练模块本身已具迁移性，微调主要改善整体检测。限制是消融只覆盖这 2 维，未报告判别器结构、增强比例、消息长度等敏感性，去掉后必然如何不能超出证据猜测。

表前说明：下表比较完整适配版与两个消融及直接应用版的总体检出与恢复，数值越大越好，训练起点与基础目标一致。

|  | TTS-gen. | TTS-native | LibriTTS test-clean | LibriTTS test-clean | LibriTTS test-clean | SeedTTS-en | SeedTTS-en | SeedTTS-en |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Configuration | tokens | losses | AUC↑\uparrow | TPR.1↑{}_{.1}\uparrow | Bit↑\uparrow | AUC↑\uparrow | TPR.1↑{}_{.1}\uparrow | Bit↑\uparrow |
| NeuMark-Native (adapted) | Yes | Yes | 0.981 | 0.808 | 0.922 | 0.977 | 0.733 | 0.907 |
| w/o native losses | Yes | No | 0.974 | 0.772 | 0.899 | 0.968 | 0.671 | 0.874 |
| w/o generated tokens | No | Yes | 0.979 | 0.822 | 0.924 | 0.974 | 0.789 | 0.924 |
| NeuMark-Native (direct) | No | No | 0.975 | 0.765 | 0.926 | 0.973 | 0.712 | 0.936 |

该表提醒选型要看门限：若应用要求误报率极低且逐比特必须准，真实语音记号训练的变体可能更合适；若要求总体检测与听感平衡，完整适配版更合适。反例是去掉原生损失后跨语料低误报召回掉得更多，说明语音约束对泛化有帮助。尚未验证的是更长消息、更多编解码种类与更强帧篡改下的趋势，不能从当前 16 比特结果外推。

### 结论在什么边界内成立

证据只支持以下边界内的解释：评测限于英语 LibriTTS 与 Seed-TTS 英文子集的零样本克隆，基线为 WavMark、AudioSeal 与 TraceableSpeech，攻击限于所列 11 种信号处理与 9 种编解码条件，消息固定 16 比特随机，总体分为组均值。超出此范围的推测需待验证，例如其他语种、其他 TTS 结构、更低码率、级联压缩加信道噪声、恶意剪辑与变速拼接下的表现原文没有报告。缺证据不等于技术有错，只是不能承诺误判率、延迟与成本会改善。训练资源只报告单卡 H100 约 69 小时 10 轮，推理开销、输出帧率与实际延迟未单独测量，不能把训练成本当作推理成本。冻结主干不意味着输出确定，VALL-E 采样与失真仍带来随机性，无训练的评估器也不等于确定性求解。

### 复现第一步做什么

复现应从配对数据开始，而不是直接训练水印模块。先准备冻结的 SpeechTokenizer 编解码器与冻结的 VALL-E，按论文流程对训练文本与同说话人提示预合成目标记号及其解码语音，保存为配对样本并做 0.5 秒到 10.5 秒过滤；再从 NeuMark 检查点初始化水印嵌入器与提取器，保持 TTS 与编解码冻结，按联合目标微调，训练增强需包含恒等、11 种信号处理、EnCodec 多码率及叠加帧掩蔽替换，负样本在录制与合成语音间交替。

评测时对每个测试文本与同说话人提示重新走预合成，再按各方法运行阶段分别嵌入：本文方法在解码前嵌入，波形方法在合成语音后叠加，最后在相同攻击下计算检测与比特指标，并以同一合成语音为参考计算质量指标。关键超参数与信息条件要保留：16 比特消息、联合损失权重、判别器组合、攻击清单与码率、2078 与 1088 的测试规模。

代码可用性、权重可下载与系统可运行是三件事，需分别确认：论文给出第三方镜像链接的可用状态只证明链接可达，不证明作者已开源，权重与运行脚本要以实际仓库内容为准。

### 什么时候值得尝试还缺什么验证

当部署的是基于神经编解码的 TTS 且担心合成语音经压缩平台转发后波形水印被洗掉，同时又不能重训 TTS 与编解码器时，本文的冻结主干加水印微调路线值得尝试，因为它把水印写进每一层残差量化表示并用 TTS 生成记号适配，评测显示编解码鲁棒提升大而语音质量接近无水印合成。若应用只面对普通加噪滤波且追求即插即用，波形方法仍更简单，不必引入离线预合成。

还缺的验证包括：主观听音与说话人主观相似度、更长载荷与多语言多基线、级联与对抗性篡改、误报率更低处的稳定性，以及推理延迟与显存开销的实测。容易产生的误解是把总体最优误读为每项最优：实际上适配版总体检测最优，直接版总体比特更高，去真实语音记号版在低误报与比特上反超完整版，三者各有偏向，应按检出优先还是逐比特优先选择，而不是一概认为适配版全面压倒一切。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.05215v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
