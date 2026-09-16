---
title: "Cross-Lingual F5-TTS 2: A Simplified Framework for Language-Agnostic Voice Cloning"
date: 2026-09-16
draft: false
tags: [语音克隆, SFT, 跨语言, 零样本, 数据增强]
categories: [论文速递]
description: "针对推理时拿不到参考音频文本的跨语言克隆问题，该文用预训练 F5-TTS 合成同说话人提示做监督微调并配合静音鲁棒语速预测器，在 LibriSpeech-PC 上 WER 为 2.014% 且相似度提升，代价是自然度小幅下降。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.15184"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "去掉提示词文本：用合成同说话人提示做微调的跨语言克隆"
paper_digest_original_title: "Cross-Lingual F5-TTS 2: A Simplified Framework for Language-Agnostic Voice Cloning"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.15184"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.15184.pdf"
paper_digest_primary_task: "语音克隆"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.voice-cloning","label":"语音克隆"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"setting","id":"setting.cross-lingual","label":"跨语言"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"},{"facet":"method","id":"method.augmentation","label":"数据增强"}]
paper_digest_primary_method: "SFT"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对推理时拿不到参考音频文本的跨语言克隆问题，该文用预训练 F5-TTS 合成同说话人提示做监督微调并配合静音鲁棒语速预测器，在 LibriSpeech-PC 上 WER 为 2.014% 且相似度提升，代价是自然度小幅下降。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qingyu Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Rixi Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yushen Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhikang Niu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Haitao Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Pengcheng Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bowen Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jian Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yunting Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qinyuan Cheng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xipeng Qiu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Berrak Sisman"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kai Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xie Chen"}]
paper_digest_abstract_sha256: "cff751eae23d4abad1c02d7d5a994a9ce1de1060ae403c38c2efb762ca077503"
paper_digest_sidecars: {"citation.bib":{"sha256":"3447ccf7669aad2054e615d6e2fccd6279b1fa824cf8c79347a20774312afd19","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-15184/citation.bib"},"citation.json":{"sha256":"542613ecd4a1e997790ca41068eb140e9922f98699809bb3d9a030b3a6b2c857","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-15184/citation.json"},"citation.ris":{"sha256":"f518532bb056c38e0241da70b12ef7db4b85a79a7a3a26d2bbc8f7a39e2e4974","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-15184/citation.ris"},"rethink-context.json":{"sha256":"cffc2c819694502bb9123c2dc942658a6dfd68537d5ad465ebec6cfa6a8bd7f7","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-15184/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c07546e3db00a519cb833f7232c38badb886732960972f9c55f408135b420500"
paper_digest_api_reader_plan_sha256: "8d6036300fbcf2af37179c948cf5e905b7a4492a824c09123d40b394deb46775"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "31e2bc6dc7041231f876cc53607f7f4f76d1f9414638c622cfef924697d104e1"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "62b834a2b86b257c2dccdb955a59c85c9e2ea060a80e1c1e6224efe850acad54"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "eb3cb5fa2db4a86e28b4a71eb3eb38e9e4975905e0628ae2f23ffc8f79e8bd03"
paper_digest_api_reader_author_count: 14
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "dca0a3f96d3baf67b456fac100af3a7d5d2227a2c89c9d6b06d3ab43546d4bde"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 去掉提示词文本：用合成同说话人提示做微调的跨语言克隆

> 英文题目：*[Cross-Lingual F5-TTS 2: A Simplified Framework for Language-Agnostic Voice Cloning](https://arxiv.org/abs/2609.15184)*

> 标签：#语音克隆 | #SFT | #跨语言 | #零样本 | #数据增强
>
> 评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Qingyu Liu：机构信息未在 arXiv HTML 中可靠披露
- Rixi Xu：机构信息未在 arXiv HTML 中可靠披露
- Yushen Chen：机构信息未在 arXiv HTML 中可靠披露
- Zhikang Niu：机构信息未在 arXiv HTML 中可靠披露
- Haitao Li：机构信息未在 arXiv HTML 中可靠披露
- Pengcheng Zhu：机构信息未在 arXiv HTML 中可靠披露
- Bowen Zhang：机构信息未在 arXiv HTML 中可靠披露
- Jian Zhao：机构信息未在 arXiv HTML 中可靠披露
- Yunting Yang：机构信息未在 arXiv HTML 中可靠披露
- Qinyuan Cheng：机构信息未在 arXiv HTML 中可靠披露
- Xipeng Qiu：机构信息未在 arXiv HTML 中可靠披露
- Berrak Sisman：机构信息未在 arXiv HTML 中可靠披露
- Kai Yu：机构信息未在 arXiv HTML 中可靠披露
- Xie Chen：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

零样本语音合成在跨语言音色克隆时面临提示转录缺失问题：F5-TTS的文本条件与基于文本长度比的时长估计同时依赖提示转录，输入为无转录的多语言提示语音与目标文本，输出为保留音色的目标语音，难点在于缺失转录时文本布局错位与语速误估。第一步用冻结预训练F5-TTS为每条真实语音合成同说话人提示，并与真实目标拼接成填充式训练对，为转录无关微调提供配对监督。第二步以上一步的配对布局为基础，用按提示与目标时长比确定数量的可学习提示词加句末标记填充原提示转录槽位，使目标文本保持预训练位置并衔接声学建模。第三步以适配后的文本条件为前提，用经静音增强训练的音节级语速预测器由提示音频与目标文本估计目标时长，直接决定生成梅尔长度。与依赖 MMS 强制对齐切分真实语音的 Cross-Lingual F5-TTS 不同，该框架无需对齐器且保留预训练声学能力。在LibriSpeech-PC test-clean测试集下，Cross-Lingual F5-TTS 2的WER为2.014%，低于F5-TTS的WER 2.205%。在 LibriSpeech-PC test-clean 上新方法词错率为 2.014%，说话人相似度 SIM-o 为 0.687，同时优于 F5-TTS 与 Cross-Lingual F5-TTS。16 组跨语言组合中 14 组 SIM-o 更高。该结论适用边界受限于英语与中文训练语音与推理侧八种提示语言验证，含静音填充条件的鲁棒性测试尚未验证更长静音与噪声场景，训练成本为在八卡NVIDIA A100硬件上微调100K步。

## 🔗 开源与复现资源

- 模型相关资源：<https://huggingface.co/QingyuLiu1/Cross-Lingual_F5-TTS_2> — 链接可访问（HTTP 200）

- 演示资源：<https://qingyuliu0521.github.io/Cross-Lingual_F5-TTS_2_demo/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要保留什么信息？

本文的输入是两样东西，一段几秒钟的参考音频和一句要合成的目标文本，目标是让合成语音听起来像参考音频中的同一个人。学习这篇解读时，读者需要先建立零样本的概念。白话说，零样本就是训练时没见过这个说话人，推理时只听一段就能模仿，不需要为这个人重新训练声学模型。英文是 zero-shot text-to-speech，缩写常写成 zero-shot TTS，后文简称零样本合成。第二个关键概念是上下文提示，英文是 in-context prompt。它不是把参考音频压缩成一个向量，而是把参考音频的梅尔频谱帧原样拼在目标语音前面，让模型在生成时每 1 帧都能 attending 到参考的细粒度音色和韵律。

**零样本语音合成 × 上下文提示：** 零样本语音合成负责只听一段短参考音频就模仿该说话人说话，上下文提示负责把整段参考音频的细粒度音色和韵律原样送入模型；两者搭配的原因是仅用全局说话人向量会丢失局部细节，而保留完整上下文提示才能在跨语言时仍复制出可辨认的本人声音，组合意义是本文始终保留声学提示而只去掉其文本。

跨语言克隆把难度推高一层。参考音频可能是韩语、泰语、马耳他语，而目标文本是英语或中文，推理时往往拿不到参考音频的文本。很多现有系统在推理时仍然需要这份提示文本，原因在 F5-TTS 里很具体。提示文本一方面要放在文本条件的前半段，另一方面它的字符长度被用来按比例估计目标语音该有多长。没有它，文本条件缺一块，时长估计也没有参照。

本文的目标就是在推理时彻底去掉提示文本，同时保留完整的声学提示。输出是一段与目标文本内容一致、音色接近参考人的语音。必须保留的信息包括参考音频的声学帧、目标文本的字符序列，以及一个不依赖提示文本的目标时长。相关资源当前可用，模型权重已公开，演示页已公开，复现时可以下载权重和试听页核对效果。

### 同样去掉提示文本，前人走了哪三条路？

第一条路是用全局说话人向量代替上下文提示。YourTTS 把参考音频编码成单个向量，训练和推理都只用这个向量，Qwen3-TTS 也提供类似的向量模式。这种做法天然不需要文本，但只保留粗粒度的身份，丢失了上下文提示携带的局部音色起伏和韵律细节。本文保留完整声学提示，因此在路线上与这条路不同，比较时不能把向量法的粗粒度相似度直接等同于上下文法的细粒度相似度。

第二条路是保留上下文提示，但在数据准备阶段构造同说话人的提示与目标配对。MOSS-TTS 和 IndexTTS 系列通过说话人日志或 Emilia 这类带说话人标注的语料挖掘同人配对。这种做法保真度高，但数据管线重，需要 diarization、合并、清洗。第三条路是用强制对齐切分真实长句。Cross-Lingual F5-TTS 用 MMS 强制对齐找词边界，把一句话切成提示段和目标段再丢掉提示文本，VoXtream2 依赖 Clap-IPA 对齐音素。

原文指出，对齐对边界误差敏感，覆盖语言越多成本越高，VoXtream2 还丢掉了约 35% 的语料。本文要解决的正是第三条路的简化问题，不用对齐也能得到配对。

时长建模也有两条线。Voicebox 和 NaturalSpeech 3 训练显式的音素时长模型，依赖对齐工具给每音素时长标签。E2-TTS 和 F5-TTS 用填充符把字符序列补到梅尔长度，不需要帧级对齐和音素时长预测器，但推理时仍需定总时长。F5-TTS 用参考文本与目标文本的长度比估计，跨语言时文本长度比不等于语音时长比。Cross-Lingual F5-TTS 改用语速预测器从提示音频估计语速，本文沿用音节级预测器并解决首尾静音带来的高估问题。

### 为什么 F5-TTS 去掉提示文本会同时坏掉两处？

沿着一个样本走一遍就能看清。假设参考音频是 3 秒的韩语，目标文本是英文句子。F5-TTS 训练时做的是语音填充，输入是被遮住目标段的频谱、加噪后的全句频谱，以及用填充符补齐的字符序列。推理时，它把提示文本加目标文本拼成文本条件，把提示时长按文本长度比换算成目标时长，然后积分生成目标频谱。

去掉提示文本后，第一处坏掉的是文本布局。预训练时文本前半是提示文本，后半是目标文本，模型学会了前半对应声学前半的提示区。如果直接删掉前半，目标文本会前移到原来属于提示文本的位置，文本与声学的对应错位，注意力分布被扰动。第二处坏掉的是时长。原来用提示文本长度做分母算比例，没有它就无法换算。

更隐蔽的是用户给的提示常带首尾静音，静音会让语速看起来变慢，模型会多分配帧数，合成语音被拉长，韵律变形，可懂度和自然度都下降。本文把这两个问题拆成 2 个组件分别处理，文本侧用可学习提示符加结束符占位，时长侧用静音鲁棒的语速预测器。

### 总流程如何用合成提示绕开强制对齐？

在看细节前先建立全景。左边是数据构造，用已经训练好的 F5-TTS 为每个真实 utterance 合成一段同说话人的提示音频，右边是微调，把合成提示与真实语音拼在一起训练同一个预训练模型。推理时，给一段任意语言的真实参考音频和目标文本，模型只看声学提示，不看提示文本，用语速预测器定长后生成。

下图是本文的监督微调管线总览，左侧展示合成数据生成，右侧展示用合成提示的微调，字符行中提示文本被划掉并替换为提示符加结束符。阅读时先沿主路径从输入语音到输出语音，再核对文本侧的替换位置。

> **看图路径：** 1. 先从左下真实语音出发，沿预训练 F5-TTS 路径看到合成语音如何生成并用黑线送到右侧；2. 再看右侧字符行中绿色提示符与蓝色结束符占据的位置，对应被划掉的提示文本；3. 最后对比左右两侧掩码语音与噪声语音的拼接方式，确认监督目标始终是右侧真实段

[![原论文 Fig. 1：Overview of the proposed SFT pipeline.](https://arxiv.org/html/2609.15184v1/clf52.png)](https://arxiv.org/html/2609.15184v1/clf52.png)

*论文图 1。原论文 Fig. 1:：“Overview of the proposed SFT pipeline.”。*

从像素上看，左下灰色底框标出真实数据集语音作为音频提示，左上经由 DiT Block 和 ODE Solver 生成右下合成语音，黑线箭头把合成结果送到右侧作为音频提示。右侧字符行前 4 个绿色格是提示符，随后是句点与空格构成的结束标记，再后是目标文本。我是 fine 等字符，右侧掩码语音前半暴露合成提示、后半遮住真实目标，上方用条件流匹配损失监督。

这种安排的理由在原文写得很直白，用合成提示构造真实与合成配对，无需外部强制对齐，同时保留预训练模型的声学建模能力，只需短时间的微调做适配。训练数据来自约 95k 小时的英文加中文 Emilia 过滤池，合成部分约 29k 小时，微调只需适应无文本条件而非重学声学映射。

### 文本条件与时长估计各由哪个部件负责？

先把术语说清。填充符英文是 filler token，记作`<F>`，作用是把字符序列补到与梅尔帧数等长。可学习提示符英文是 learnable prompt token，记作`<P>`，是随机初始化、随微调更新的向量。结束符英文是 end-of-sequence marker，本文复用句点加空格的序列. 加空格，它在预训练中已表示句子结束。

**流匹配 × 语音填充：** 流匹配负责学习从噪声到梅尔频谱的向量场并用常微分方程积分生成语音，语音填充负责把提示段暴露、把目标段遮住只预测被遮部分；两者搭配的原因是 F5-TTS 把合成写成以文本为条件的缺失频谱补全，组合意义是微调时只需改变文本条件和掩码位置就能复用预训练的声学能力。

文本条件的构造方法是把缺失的提示文本替换为 N 个`<P>` 再加结束符，然后接目标字符，最后用`<F>` 补到总帧数。N 按提示与目标语音时长比确定，使提示符区域长度接近预训练时提示文本所占长度。声学输入是合成提示与真实目标沿时间拼接，掩码前半为 0 暴露提示，后半为 1 遮住目标。公式上先看拼接与掩码定义，符号 x1 是拼接后全句频谱，tau1 和 tau2 分别是提示与目标帧数，m 是二值时间掩码。

\[x_{1}=\bigl[x_{\text{prompt}}^{\text{syn}};\,x_{\text{target}}\bigr].\]

\[m[:,\,j]=\begin{cases}0,&j\in[0,\,\tau_{1}),\\ 1,&j\in[\tau_{1},\,\tau),\end{cases}\]

时长侧是音节级语速预测器。它输入梅尔频谱，经线性层、卷积、Transformer、池化、分类器输出离散语速类别的分布，用高斯交叉熵训练。高斯交叉熵的白话是把独热标签换成以真值类别为中心的高斯软标签，相邻语速类别也分到权重，体现语速区间的有序性。符号 Ns 是音节样本数，C 是类别数，cgt 是真值类别，sigma 控制平滑程度。

\[L_{\text{GCE}}=-\frac{1}{N_{s}}\sum_{i=1}^{N_{s}}\sum_{c=1}^{C}y^{\text{soft}}_{c}\log(\hat{y}_{c}),\]

**可学习提示符 × 填充符：** 可学习提示符负责占据原提示文本的位置并通过梯度学出无文本提示的表征，填充符负责把文本序列补齐到与梅尔帧数相同的长度；两者搭配的原因是预训练文本布局隐含了提示区与目标区的对应关系，组合意义是用可训练占位保留布局、用填充符对齐长度，避免目标文本前移打乱注意力。

下图是静音感知增强的训练示意，左侧 4 种情形分别是不增强、前导静音、尾部静音和双侧静音，中间是预测分布与分类栈，右侧是语速标签计算。标签只由干净语音时长和音节数算出，不随静音变化，这是鲁棒性的关键。

> **看图路径：** 1. 先看左侧四种静音插入情形，确认静音块只出现在头尾而中间语音长度记为 T 不变；2. 再看右下语速标签由干净语音时长与音节数算出，不随左侧静音变化；3. 最后看中间分类器输出的分布与右侧标签共同进入高斯交叉熵损失

[![原论文 Fig. 2：Silence-aware augmentation for training the silence-robust speaking rate predictor.](https://arxiv.org/html/2609.15184v1/srp_aug.png)](https://arxiv.org/html/2609.15184v1/srp_aug.png)

*论文图 2。原论文 Fig. 2:：“Silence-aware augmentation for training the silence-robust speaking rate predictor.”。*

从像素上看，左侧静音块为灰色，语音为彩色频谱，静音时长记为 s 并满足均匀分布，右侧示例给出 16 除以 4.26 得到 3.76 再映射到 3.75 类别。中间自下而上是 Linear、2 次 1D Conv、Transformer Block、Pooling、Classifier，上方预测分布为蓝色直方图。

**音节级语速预测器 × 静音感知增强：** 音节级语速预测器负责只看提示音频估计每秒音节数进而算出目标时长，静音感知增强负责在训练时往提示音频前后随机垫静音但不改变语速标签；两者搭配的原因是首尾静音会拉低表观语速导致时长高估，组合意义是让预测器学会忽略静音、只根据有效语音段估计真实语速。

### 数据如何构造，哪些参数更新，监督从哪里来？

构造过程分 3 步，每步都是可复述的动作。第一步，对 Emilia 池中每个真实 utterance，取其本身作为说话人提示，从同语言文本池抽一句目标文本，用预训练 F5-TTS 合成出同说话人的提示音频。第二步，把合成提示放在前、真实语音放在后沿时间拼接成训练对，不做强制对齐切分。第 3 步，文本侧按上一节方法用 N 个`<P>` 加结束符代替提示文本，声学侧用掩码遮住真实目标段，模型预测被遮段的向量场。

**合成提示 × 真实目标：** 合成提示负责由预训练 F5-TTS 为每个真实 utterance 生成同说话人的另一段语音作为条件，真实目标负责提供需要重建的原始录音作为监督；两者搭配的原因是这样天然构成同说话人配对而无需强制对齐切分，组合意义是微调时声学条件与推理时的无文本条件一致，同时保留真实语音的建模目标。

参数与优化按原文交代。声学模型从预训练 F5-TTS 初始化，架构为 22 层、16 头、1024 维的扩散 Transformer，微调用 AdamW 在 8 卡 A100 上做 100k 步，每卡批量 38400 音频帧，学习率先线性暖机到特定值再线性衰减。语速预测器是 6 层、8 头、512 维的 Transformer，在中英文各 500 小时的平衡子集上训练 30k 步。监督来源有两处，声学部分是真实目标频谱经条件流匹配给出的速度向量，语速部分是干净语音时长与音节数算出的真值类别经高斯软化后的分布。静音增强只改变预测器的声学输入，以 70% 不变、各 10% 加前、加后、加双侧的方式插入时长为原提示 30% 到 70% 的静音，标签不变。原文未报告提示符嵌入是否冻结以外的细节，本文按证据只说`<P>` 随梯度更新，不推定其他冻结策略。

下表是训练数据规模，比较的问题是不同数据量下合成与真实时长的配比，公平条件是同一 Emilia 过滤池加同一合成方法，指标方向是小时数越大覆盖越广。表后解释是全量约 95k 小时真实对应约 29k 小时合成，小规模子集按 DNSMOS 选高质量 utterance 并保持中英文平衡。

| Real speech (h) | Synthetic speech (h) |
| --- | --- |
| 1,000 | 286 |
| 2,000 | 574 |
| 5,000 | 1,443 |
| 95,282 | 29,169 |

表中从 1000 小时到全量四档的真实与合成时长成比例增长，说明每个真实样本配一段合成提示，合成时长约为真实的约 30%。代价是全量合成需要大量推理计算，但后文消融显示小数据已接近全量效果，因此复现时不必一开始就做全量。

### 在什么数据、基线和指标下比较，条件是否一致？

数据与划分按原文交代。训练主源是 Emilia 过滤后的约 95k 小时英文加中文。语内评测用 LibriSpeech-PC test-clean 和 Seed-TTS 的 test-en、test-zh。跨语言评测构造 8 种训练未见的提示语言，包括 Emilia 的韩语、Dolly-Audio 的越南语，以及 Common Voice 的泰语、印尼语、法语、德语、俄语、马耳他语，每种提示语言各配 500 句英文和 500 句中文目标句，共 16 个子集，提示语言恒与目标语言不同。静音鲁棒性评测在原提示两侧各加 50% 时长的静音构成加垫提示，与干净提示对比。

基线是两个可运行系统。F5-TTS 用参考文本与目标文本长度比定长，推理需要提示文本。Cross-Lingual F5-TTS 用未加静音增强的原始语速预测器定长，推理不需要提示文本。本文方法用加静音增强的语速预测器定长，同样不需要提示文本。推理统一用 Euler 求解器 32 步、分类器无关引导强度 2.0、sway 系数负 1.0、Vocos 声码器，保证除时长估计外条件一致。

指标方向要先记牢。词错率 WER 越低可懂度越高，英文用 Whisper-large-V3 识别，中文用 Paraformer-zh 识别。说话人相似度 SIM-o 越高越好，用 WavLM-large 说话人验证模型提向量算余弦。UTMOS 是自动 MOS 预测，越高表示预测的自然度越好，只是客观代理而非人评。主观还有 SMOS 量相似度，CMOS 量相对真值的自然度。时长准确性用平均相对误差 MRE 和平均绝对误差 MAE，都是越低越好。

下表整理声学微调的运行配置，比较的问题是复现需要多大的模型与训练预算，公平条件是沿用预训练架构，指标方向是层数、维度、步数按原文如实记录。

| 配置项 | 架构 | 层数 | 注意力头数 | 嵌入维度 | 微调步数 |
| --- | --- | --- | --- | --- | --- |
| 声学模型 | F5-TTS-Base | 22 | 16 | 1024 | 100K |

表后解释是声学模型与预训练同架构，在 8 卡 A100 上微调 100k 步，每卡批量 38400 帧，学习率经暖机再衰减。代价是 8 卡百 k 步的开销不小，但后文显示小数据已能适配，预算有限时可先做小规模验证。未胜出项是本文未报告推理延迟与实时率，训练预算不能直接换算成推理成本。

下表整理语速预测器与静音增强的配置，比较的问题是标签与输入如何配合，公平条件是中英文各 500 小时平衡训练，指标方向是增强概率与时长比例。

| 配置项 | 训练数据 | 模型规模 | 训练步数 | 增强概率 | 静音时长 |
| --- | --- | --- | --- | --- | --- |
| 语速预测器 | 中英文各 500 小时 | 6 层 8 头 512 维 | 30K | 70% 不变各 10% 加静音 | 原提示 30% 到 70% |

表后解释是增强只垫静音不改标签，标签由干净时长与音节数算出，损失用高斯交叉熵。限制是原文只验证音节级在跨语言泛化最好，音素级和词级的对比沿用前作结论，本次未重测。

### 语内与跨语言结果支持什么判断，有什么代价？

语内主结果的比较问题是去掉提示文本后可懂度与相似度能否保持，公平条件是同评测集、同识别与验证模型，指标方向是 WER 越低越好、SIM-o 越高越好、UTMOS 越高越好。原文报告在 3 个语内集上本文方法 SIM-o 最高，英文集提升较大，中文集小幅提升，WER 相当且在 LibriSpeech-PC 上最低。自然度侧 UTMOS 和 CMOS 略低于两个基线。机制解释是合成提示更干净平稳，模型更易学到身份，但偏平的韵律也拉低了主观相似中的韵律分和自然度分。这是一个明确的收益加代价结构，不是全面胜出。

跨语言的比较问题是提示语言未见且无文本时能否把音色搬到英文或中文，公平条件是 16 个提示与目标语言对、同一时长估计以外的管线，指标方向同上。原文报告在 16 对中 14 对 SIM-o 更高，UTMOS 多为前作更高，WER 相当。支持的判断是无文本跨语言克隆可行，包括马耳他语这类与训练语系差异大的语言。限制是 UTMOS 仍是自动预测，不能当成人评，且跨语言 WER 绝对值高于语内，说明内容准确性在跨语言下更难。

下表用原文连续句覆盖的关键数字做可核对摘要，比较的问题是无文本方法的收益与静音下的稳定性，公平条件是同一模型只换时长来源，指标方向是 WER、MRE、MAE 越低越好。

| 条件 | 指标 | 本方法表现 | 对照表现 | 适用边界 |
| --- | --- | --- | --- | --- |
| 干净提示语内 | WER | 2.014% | 与基线相当 | 替换真实提示不损可懂度 |
| 干净提示时长 | MRE 增量 | 0.6 和 0.8 点 | 与原始预测器基本一致 | 增强在干净时几乎无代价 |
| 加垫提示时长 | MRE 与 MAE | 接近干净水平 | MRE 高于 70% 且 MAE 超 3 秒 | 原始预测器被静音拉偏 |

表后解释是主要收益在相似度，2.014% 说明可懂度未被合成提示拖累，静音增强在干净提示只带来 0.6 和 0.8 点的 MRE 上升，代价很小。反例是加垫提示下原始预测器 MRE 高于 70%、误差超 3 秒，导致目标帧数虚增、语音被拉长。未胜出项是自然度，本文 UTMOS 和 CMOS 略低，复现时若只看相似度会高估整体质量，必须同时看 WER 与自然度。

### 提示符、结束符和数据量各起了什么作用？

文本条件的消融比较 4 种占位。无占位直接删掉提示文本，用 N 个填充符，用 N 个可学习提示符，以及提示符加结束符。公平条件是同样微调 100k 步、N 按提示与目标时长比确定，指标方向是 WER 越低越好。原文报告填充与提示符都远好于无占位，因为保留了预训练布局。提示符好于填充符，因为填充符在前向被掩掉不提供文本侧锚点，而提示符可训练。

结束符主要加速收敛，在 Seed-TTS 英文集上最早越过 2% 线并达到更低终值，在另两集上略快或相当。机制是句点加空格在预训练已表示话语结束，复用它等于给模型一个熟悉的分界 cue。

下图展示 4 条曲线随微调步数的 WER 变化，纵轴对数刻度，虚线为 2% 参考。读图时先确认三子图分别为 LibriSpeech-PC、英文、中文，再看颜色与线型对应的 4 种变体。

> **看图路径：** 1. 先确认横轴是微调步数到 100k，纵轴是对数刻度的 WER，虚线为 2% 参考线；2. 再对比中间英文子图上红色带结束符曲线与黄色无结束符曲线的下降速度差异；3. 最后看左侧与右侧子图上灰色无占位曲线的最终位置是否仍高于其他曲线

[![原论文 Fig. 3：WER versus SFT step for the four text-conditioning variants in Table IV, on LibriSpeech-PC…](https://arxiv.org/html/2609.15184v1/fig3_wer_convergence.svg)](https://arxiv.org/html/2609.15184v1/fig3_wer_convergence.svg)

*论文图 3。原论文 Fig. 3:：“WER versus SFT step for the four text-conditioning variants in Table IV, on LibriSpeech-PC test-clean (left), Seed-TTS test-en (middle), and test-zh (right); the y-axis is…”。*

从像素上看，灰色虚线无占位在三子图终值最高，蓝色填充符在早期下降快但英文集后期停在较高位置，黄色点线提示符在英文集有明显的慢启动后陡降，红色实线带结束符在英文集 40k 步附近已降到 2% 附近并保持最低。中文集上黄色与红色差距较小，说明结束符的加速作用在英文目标上更明显。限制是曲线只能读趋势，像素无法精确读出每步数值，终值仍以原文表格为准。

数据量的消融比较 1000、2000、5000 小时与全量。公平条件是同构造、同微调步数，指标方向是 SIM-o 越高越好。原文报告 SIM-o 随数据单调微升但幅度在 0.005 以内，WER 和 UTMOS 无清晰趋势，最小规模已接近全量。支持的判断是微调只需适应无文本条件而非重学声学映射，几千小时可恢复大部收益。未评测边界是极小数据如几十小时是否崩溃，原文未给，不能外推。

### 哪些结论不能下，哪些边界尚未评测？

首先区分 3 类表述。论文直接报告的是相似度提升、可懂度相当、自然度小幅下降，以及静音增强后加垫提示的时长误差回到接近干净水平。有限解释是合成提示更干净平稳所以身份更易学、韵律偏平所以自然度下降，这有机制合理性但未做韵律多样性的直接测量，只能写成支持而非证明。未验证推测是把该方法直接搬到训练语言之外的目标语言，原文目标恒为英文或中文，提示为 8 种未见语言，反向或其他目标语言未测，不能承诺同样有效。

其次是指标与成本的缺项。UTMOS 只是客观代理，主观 CMOS 样本每集仅 15 句抽样，结论外推要谨慎。原文未测量误判率、延迟、实时率，训练用 8 卡 A100 做 100k 步、推理 32 步的开销与实际延迟要分开讨论，不能从训练资源推定推理快慢。总体趋势不等于每组都成立，跨语言 16 对中有 2 对 SIM-o 未胜出，加垫提示下中文 WER 仍高于干净提示，说明鲁棒不等于完全恢复。

最后是数据与对齐的边界。合成提示依赖预训练 F5-TTS 本身的质量，若预训练对某音色建模差，合成提示会继承偏差。静音增强只覆盖首尾垫静音，中间停顿、噪声、混响未覆盖。强制对齐的边界误差问题被绕开，但换来了合成计算成本，全量约 29k 小时合成的开销在复现时要预留。

### 复现先做什么，需要哪些信息条件？

先做最小闭环。下载已公开的权重与演示页，用英文目标句和一段带首尾静音的参考音频试听，确认无文本推理链路能跑通。随后按原文构造小规模配对，取 Emilia 中英文高质量子集各几百小时，用预训练模型合成对应提示，文本侧用 N 个可学习提示符加句点结束符，声学侧拼接后掩码训练，先跑 10k 到 20k 步观察 WER 是否从高位下降。若英文集出现慢启动不要过早停机，这是随机初始化提示符的正常阶段。

关键超参数要保留。声学侧 22 层 16 头 1024 维、100k 步、每卡 38400 帧、AdamW、暖机后衰减。语速侧 6 层 8 头 512 维、中英文各 500 小时、30k 步、每卡 19200 帧、高斯交叉熵 sigma 为 1.0。增强侧 70% 不变、3 个方向各 10%、静音时长为原提示 30% 到 70%。推理侧 Euler 32 步、引导强度 2.0、sway 负 1.0、Vocos 声码器。评测侧英文用 Whisper-large-V3、中文用 Paraformer-zh 算 WER，用 WavLM-large 验证模型算 SIM-o 余弦，再加垫两侧各 50% 时长的静音做鲁棒对比。

信息条件上，代码开源、权重下载、系统可运行是三件不同的事。原文说相关资源已公开且本次核验模型与演示链接可用，只能写当前可用，不能推定训练代码包含全部脚本。还需补的验证是更大规模主观听测、更多目标语言、中间噪声下的时长稳定性，以及合成提示多样性对自然度的影响，这些在原文未报告，复现报告中应单独列出。

### 何时值得尝试这套简化方案？

当任务是跨语言克隆且拿不到可靠的提示文本，同时已有可用的 F5-TTS 预训练模型，这套方案值得尝试。它的动作很具体，不切分真实长句，不跑强制对齐，直接合成同说话人提示做配对，文本侧用可训练占位加熟悉的结束标记保留布局，时长侧用只看有效语音的语速估计。学到的是 1 次适配而非重学声学，因此数据需求不大，小规模已接近全量。

选择时要同时接受代价。相似度提升对应的是更平稳但更平的韵律，自然度会小幅下降，若应用对表现力要求高，需要改进合成提示的表现力或在后处理保留更多韵律变化。若输入常带首尾静音，务必打开静音增强，否则时长高估会拉长语音。若输入含中间噪声或混响，本文未覆盖，需要另做增强或前端处理。复述方法时记住两句话，配对靠合成而非切分，时长靠语速而非文本长度比，文本缺位靠提示符加结束符补齐布局。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.15184)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-16/)
