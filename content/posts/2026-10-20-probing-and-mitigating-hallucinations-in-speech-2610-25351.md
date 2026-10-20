---
title: "Probing and Mitigating Hallucinations in Speech-augmented Language Models for Automatic Speech Recognition via Small Language Models"
date: 2026-10-20
draft: false
tags: [语音识别, 幻觉与忠实度, 多模态学习, CTC]
categories: [论文速递]
description: "本文把 ASR 幻觉定义为对齐后多出的编造词，用因果敲除和注意力分析定位到偏向文本的多头自注意力，再用 CTC 对齐门控加交叉注意力在 LibriSpeech 上把幻觉率从 52.01% 降到 8.69%，代价是替换率略升且大模型下幻觉反而加重。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.25351"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "语音增强语言模型为什么会编造转写：探测与抑制 ASR 幻觉"
paper_digest_original_title: "Probing and Mitigating Hallucinations in Speech-augmented Language Models for Automatic Speech Recognition via Small Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.25351v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.25351v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.25351v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.ctc","label":"CTC"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文把 ASR 幻觉定义为对齐后多出的编造词，用因果敲除和注意力分析定位到偏向文本的多头自注意力，再用 CTC 对齐门控加交叉注意力在 LibriSpeech 上把幻觉率从 52.01% 降到 8.69%，代价是替换率略升且大模型下幻觉反而加重。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bi-Cheng Yan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jhih-Rong Guo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fu-An Chao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Berlin Chen"}]
paper_digest_abstract_sha256: "c7f0415948ae3c25cc474c70cd43844161beaf7f59f7e81fa5b915b2c333feef"
paper_digest_sidecars: {"citation.bib":{"sha256":"ddd1628fd42fcf78514529281c0a3402ce8a42a8664ae6610e849da517c1326d","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25351/citation.bib"},"citation.json":{"sha256":"760eee75925a253a09138337581897cecbdf66c2a4bb234969211620c213c46d","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25351/citation.json"},"citation.ris":{"sha256":"b36f9ed5012d2a2c6400d5398add1656ede4c15c4ec8b65eaa1678e48df9d4d5","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25351/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"0d610f8a86482b22c982a393683914dfb312bfca147e4827281f9c199471c644","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25351/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "fdbe2f9ee384ca942085972b2c2b69166a4302b1a2042bda7ef58249c50092b1"
paper_digest_api_reader_plan_sha256: "3b1d77450510390b83cd29fdfbf7185f64e0bb0fa2174941215004122c71ba5a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6c88e3f940eb4f16c208fbed8f6303b7da984b1ee83db7d85db4e72d498b3d33"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "f5b61da154a95d8191511154c05531a77b801bd75184ce1e8de9a4c540738511"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bddbe63baea794dd157c077f0a1adeebc701a8ce6b9565f4df0681f76a2a2170"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6182844169076cfb9db0e1372403687e969ba64419d124281031d0bb370560cc"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 语音增强语言模型为什么会编造转写：探测与抑制 ASR 幻觉

> 英文题目：*[Probing and Mitigating Hallucinations in Speech-augmented Language Models for Automatic Speech Recognition via Small Language Models](https://arxiv.org/abs/2610.25351v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[CTC](/audio-paper-digest-blog/papers/?concept=method.ctc)
- **研究重点**：[幻觉与忠实度](/audio-paper-digest-blog/papers/?concept=research_focus.hallucination-faithfulness)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Bi-Cheng Yan：机构信息未能在本次解析中与作者逐人可靠绑定
- Jhih-Rong Guo：机构信息未能在本次解析中与作者逐人可靠绑定
- Fu-An Chao：机构信息未能在本次解析中与作者逐人可靠绑定
- Berlin Chen：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

研究对象是语音增强语言模型转写，即语音编码器从音频抽取声学特征，经卷积桥接成音频向量后连同指令一起送入语言模型自回归生成转写文本。难点是语言模型偏向沿用已生成文本先验，编造与语音无对应的词，这类词经对齐后成为插入错误中的幻觉词，需与普通识别错误区分。论文把幻觉错误率定义为幻觉词数除以参考词数，并用清零遮蔽测算多头自注意力与前馈模块对幻觉词概率的影响差异，同时对比幻觉词与非幻觉词对音频和文本的注意力分配。AudioSLM在输入特征层由联接时序分类模块从音频向量抽取逻辑向量作为对齐特征，经门控与深度卷积精炼得到新的音频向量，再在架构层每个Transformer块的自注意力与前馈之间插入以该音频向量为键值的交叉注意力做跨模态对齐。在LibriSpeech的dev-clean评测集上，与Vanilla-SLM基线相比，AudioSLM把幻觉错误率（HER%）从52.01%降到8.69%，插入错误同步下降，代价是正确率和替换错误略有回退。分析发现多头自注意力比前馈对幻觉贡献更大，且幻觉词注意力过度偏向文本而忽视音频，上述两处改动分别针对时间过滤与跨模态对齐，与仅靠后处理或偏好优化不同。结论限于以SmolLM2为骨干、Whisper编码器加卷积桥接的英文朗读语音转写，尚未验证大词汇自发语音或强噪声；原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/bicheng1225/AudioSLM> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音转文字任务要保留什么信息

自动语音识别的输入是一段连续语音，目标是输出与说话内容一致的文字序列。必须保留的是语音里的时间顺序和音素内容，不能丢字，也不能加语音里没有的内容。评价时通常把识别结果与人工参考文本对齐，数对了多少、替换错多少、漏掉多少、多出多少。

这篇论文只研究语音增强语言模型做英语朗读转写的情形，数据是 LibriSpeech，训练用 train-clean-100，测试分 dev 和 test 的 clean 与 other。clean 接近干净朗读，other 包含口音和噪声变化，结论只在这类朗读条件下成立。

**语音增强语言模型 × 自动语音识别：** 语音增强语言模型指把语音编码器和大语言模型连起来的系统，自动语音识别是本文只研究的任务，即把语音转成文字；前者是实现手段，后者是目标，组合后语言模型负责按声学证据逐词生成转写，声学证据不足时就容易编造。

刚入门容易把识别错都当成听不清，本文提醒还有一种编造：模型用语言习惯补出流畅但语音里不存在的长串词。这正是后文要单独度量的对象。

### 已有缓解幻觉的两条路线是什么

论文回顾了文本和视觉语言模型里的经验：幻觉常被归因于对输入模态 grounding 不足，骨干语言模型过度依赖语言先验和已生成词，忽视了视觉或文本输入。为此已有两类做法，一类是后处理，如事后纠错和专门解码算法；另一类是降低词汇共现偏置，如数据增强和偏好优化。

在语音领域，常见端到端基线是 CTC、RNN-T 和 CTC-Attention 混合编码器解码器结构，以及用大语言模型做前端特征再由解码器结合声学信息精修的 LLM-Guided Decoder。这些路线要么没有大语言模型做自回归生成，要么没有系统分析幻觉来自内部哪个模块。

本文的定位不是再提一种通用后处理，而是先用因果和行为分析在语音增强语言模型内部定位，再改输入特征和结构。这决定了后文实验要同时报告幻觉指标和词错误率，以及消融每个新增部件。

### 什么是 ASR 幻觉以及如何计数

论文把幻觉词定义为插入错误的一种特例：把识别假设与参考文本对齐后，多出来且在参考中找不到对应位置的编造记号。举例说明，假设把 exploding 听成 explosion 属于替换，而后面凭空接上 for sun and light and can no longer 这类参考完全没有的长串，就是幻觉。

为了读懂下图，先看上半是说话人波形与参考句，下半是模型假设多出的尾巴，下方对齐表用空位符标出参考缺失处，黄色为编造，蓝色为一般插入。这个例子是教学示意，标明两类多出词的区分方式。

> **看图路径：** 1. 先看上方 spoken input 与 ASR hypothesis 的文本差异；2. 再看下方对齐表 Reference 行的空位标记与 Hypothesis 行的黄色编造词；3. 区分蓝色一般插入词与黄色幻觉词的位置

[![原论文 Figure 1：A running example illustrates ASR hallucination for an SLM.](https://arxiv.org/html/2610.25351v1/motivation.png)](https://arxiv.org/html/2610.25351v1/motivation.png)

*论文图 1。原论文 Figure 1:：“A running example illustrates ASR hallucination for an SLM.”。*

上图确实可见参考行有多个空位对应假设行的黄色长串，而蓝色词是较短的局部插入。这帮助理解为何只数字符错误率不够，还需要单独数编造词占参考总词数的比例。

论文用幻觉错误率度量该比例，分子是幻觉记号数，分母是参考记号总数，值越低越好。

\[\displaystyle\textrm{HER}=\frac{\lvert\textrm{Hallucinated Tokens}\rvert}{\lvert\textrm{Reference Tokens}\rvert},\]

**幻觉词 × 插入错误：** 插入错误指识别结果比参考文本多出的词，幻觉词是其中经过对齐后仍找不到对应参考位置的编造部分；二者是包含关系，本文用幻觉错误率单独度量编造，而一般的插入还包括重复或相近词，区分二者才能看清抑制编造与减少重复是否同步。

这个定义依赖对齐过程，对齐方法不同会轻微影响计数，但本文全程用同一规则比较，因此相对下降可比。

### 基准语音增强语言模型如何工作

基准结构包含三部分。语音编码器从波形提取高层声学特征，常用 Whisper 这类语音基础模型改接；连接器把长帧序列压缩并投影成较短的音频记号序列，降采样率为 k；大语言模型把音频记号与指令嵌入和已生成文本嵌入拼接，从左到右预测下一个词。

训练时冻结预训练语言模型，只加入 LoRA 做高效参数适配；推理时用波束搜索，本文设波束为 5。指令例如请听并转写音频，输出是参考转写加结束符。

下图展示了该基准的数据流，是理解后文改动的基础，建议按箭头走一遍主路径。

> **看图路径：** 1. 沿左下音频信号经编码器到音频记号的主路径看；2. 比较中间指令嵌入与右侧已生成记号两条文本路径在哪里汇入大语言模型；3. 注意顶部参考转写只在训练时作为目标

[![原论文 Figure 2：SLM architecture for ASR, comprising a speech encoder for acoustic feature extraction, a…](https://arxiv.org/html/2610.25351v1/vanilla-slm.png)](https://arxiv.org/html/2610.25351v1/vanilla-slm.png)

*论文图 2。原论文 Figure 2:：“SLM architecture for ASR, comprising a speech encoder for acoustic feature extraction, a connector network for modality bridging, and an LLM for text generation.”。*

图中可见左下音频信号向上经编码器和连接器变成音频记号，中间指令与右侧已生成词分别经嵌入层变成文本嵌入，3 路一起送入大语言模型，顶部虚线框的参考转写是训练目标。颜色区分了声学特征、音频记号、指令和输出 4 种向量，虚线表示训练时才有的监督路径。

### 对齐线索如何过滤音频记号

AudioSLM 的第一处改动在输入特征层。作者在连接器上加 CTC 模块，把每个音频记号经线性层映射到语言模型词表大小，得到沿时间的 logits 序列作为对齐特征。CTC 目标把音频记号与参考转写对齐，做法是对所有与转写兼容的对齐路径求和并最大化条件似然，隐含了每帧独立发射的近似。

得到对齐特征后，CTC 门控模块做细粒度融合：先把词表维度的对齐特征经线性投影回隐维度，再用核为 3×1 的深度卷积抓局部时间依赖，然后与原始音频记号拼接，经另一线性加 sigmoid 得到门控向量，与音频记号逐元素相乘后再过 Swish 门控线性单元得到精修音频记号。直观说，CTC 告诉哪帧像什么字，门控据此压掉冗余帧。

下图是 AudioSLM 全结构，请重点看左侧与右侧面板的配合。

> **看图路径：** 1. 先看(a) 左侧 CTC 模块与下方 CTC 门控模块如何改造音频记号；2. 再看(b) 中间 Transformer 块中新插入的交叉注意力在自注意力与感知机之间；3. 最后看(c) 右侧门控内线性、卷积与音频记号的拼接与相乘

[![原论文 Figure 3：The structure of AudioSLM for ASR to mitigate hallucination errors.](https://arxiv.org/html/2610.25351v1/AudioSLM-v3.png)](https://arxiv.org/html/2610.25351v1/AudioSLM-v3.png)

*论文图 3。原论文 Figure 3:：“The structure of AudioSLM for ASR to mitigate hallucination errors.”。*

图(a) 可见音频编码器与连接器仍输出原始音频记号，一路直接送语言模型，另一路经 CTC 模块变成 CTC logits 再送入 CTC 门控模块，输出精修音频记号；图(c) 可见门控内线性、深度卷积、拼接、sigmoid 与乘法的顺序，以及左侧直连的原始音频记号残差。图注标明冻结与可训练，音频编码器冻结，连接器与 CTC 门控可训练。

精修过程对应下式，其中上帽记号是输出，G 为门控，⊗为逐元素乘。

\[\displaystyle\hat{\mathrm{H}}^{\mathrm{a}}=\mathrm{SwiGLU}(\mathrm{H}^{\mathrm{a}}+\mathrm{G}^{\mathrm{c}}\otimes\mathrm{H}^{\mathrm{a}}),\]

**CTC 模块 × CTC 门控模块：** CTC 模块指在连接器之后加线性层输出词表 logits 并用 CTC 目标训练对齐，CTC 门控模块指用这些 logits 经线性加深度卷积再与音频记号拼接算门控去加权音频记号；前者提供每帧可能发什么音的时间线索，后者把线索转成过滤动作，组合后让送入语言模型的音频记号更干净。

需要留意，原文没有给出门控前后序列长度是否变化，只说过滤冗余帧，复现时应按代码确认长度与掩码处理，不要自行假设降采样。

### 交叉注意力层在 Transformer 块里做什么

第二处改动在结构层。骨干语言模型的每个 Transformer 块原本是自注意力加多层感知机，AudioSLM 在二者之间插入交叉注意力层。该层以自注意力输出为查询，以音频记号为键和值，先做跨模态对齐，再交由感知机输出块结果。训练时只更新交叉注意力层参数，其余保持冻结，这在图中以火焰与冰块图标区分。

**音频记号 × 交叉注意力层：** 音频记号指语音编码器加连接器压缩后得到的向量序列，交叉注意力层指以自注意力输出为查询、以音频记号为键和值的新增层；前者是声学证据的载体，后者是每层强制回看声学证据的动作，组合后模型在深层也不易只看文本历史。

沿一个样本走一遍：第 l 块收到上一块输出，先经自注意力得到文本上下文表示，再以它为查询回看全部音频记号，得到融合声学证据的表示，最后经感知机输出。这样每层都有一次强制听回放的机会，而不是只在输入端拼接一次音频。

原文没有报告交叉注意力头数与维度是否与自注意力一致，也没有给出额外计算量，理解为增加了一层注意力开销即可，不要补造加速比。

### 模型如何训练与冻结

音频编码器取自 Whisper-large-v2，包含 12 层 Transformer、20 个注意力头、隐藏维度 1280，训练中冻结。连接器是 3 层卷积核为 5 的卷积网络，降采样率为 4，可训练。骨干用 SmolLM2-135M，包含 30 个 LLaMA 块，每块 9 个头，隐藏维度 576；基准 Vanilla-SLM 用同一骨干，但不带 CTC 相关组件与交叉注意力层。

训练使用 LibriSpeech 的 train-clean-100 子集，在 dev-clean、dev-other 和 test-clean、test-other 上评估。所有模型训练 30 轮，采用余弦学习率调度，最高学习率为 1e-4。推理时波束大小设为 5。作者资源当前可用，代码已公开在 GitHub，可核对模型组成与训练设置。

按原文的执行顺序，音频先经编码器抽取声学特征，再经连接器压缩投影为音频词元。CTC 模块在连接器之上取词表维度的 logit 向量作为对齐特征，经线性投影、核大小为 3x1 的深度卷积捕捉局部时间关系，再与音频词元拼接做门控细化，送入骨干提供时间线索。交叉注意力层插在多头自注意力与多层感知机之间，以前者输出作查询回看音频词元，再交由多层感知机输出。训练时只更新交叉注意力等新增对齐部分，原有自注意力、嵌入层和多层感知机保持冻结。

CTC 对齐处理的对象是连接器给出的音频词元序列。线性层先把每帧隐向量投到词表维度得到 logit，再按 CTC 目标把与参考转写相容的全部合法对齐路径求和，最大化条件似然。求和后的时间线索经门控进入下一步：对齐特征先经一次线性投影回到隐维度，再用深度卷积看相邻 3 帧的局部变化，然后与原始音频词元拼接，经另一线性层加 Sigmoid 得到每维度的门控权重。

门控权重与原始音频词元逐元素相乘后叠加回原始词元，再经 Swish 门控线性单元细化，得到送入骨干的音频词元。进入骨干后，每块先由多头自注意力对上一块输出做上下文表示，再由交叉注意力以该表示为查询去看音频词元，得到跨模态对齐后的表示，最后交多层感知机输出本块结果。这种冻结策略意味着语言先验基本保留，改进主要来自更好的声学线索和回看机制，而不是重训语言模型。这也解释了为何替换错误可能不降：语言习惯仍在，CTC 门控主要过滤冗余帧减少插入，交叉注意力把注意力拉回语音，避免只靠上文猜词。

### 数据、基线与指标如何比较

数据固定为 LibriSpeech-100 训练，在 dev-clean/other 和 test-clean/other 上按词错误率比较，词错误率越低越好。幻觉分析在 Dev-clean 上另报正确率、替换、删除、插入与幻觉错误率，其中正确率越高越好，其余越低越好。基线包括 CTC、RNN-T、CTC-Attention 和用 LLaMA-7B-Chat 做前端的 LLM-Guided Decoder，以及同骨干的 Vanilla-SLM，保证任务、划分与转写目标一致。

因果中介分析用零消融：把目标部件输出置零但保留其余结构，比较敲除前后幻觉词集合上预测概率的平均绝对变化，记为影响分数。分数越高说明该部件对编造贡献越大。该分析只在幻觉词上平均，不反映整体转写质量。

注意力行为分析把每层多头自注意力中分给音频与文本记号的权重分别按序列长度归一化后平均，比较幻觉词与非幻觉词生成时的跨层曲线，阴影为跨头标准误差。

### 哪个内部模块更促成编造

论文先比较 Vanilla-SLM 与 AudioSLM 中多头自注意力与多层感知机的影响分数，并量化新增交叉注意力层的影响。Vanilla 侧自注意力约为 0.084，感知机约为 0.074；AudioSLM 侧自注意力约为 0.1888，交叉注意力约为 0.0789，感知机约为 0.0348。两次都呈现自注意力大于感知机，AudioSLM 中交叉注意力居中。

该分数的计算方式如下，L 为幻觉词总数，指示函数只在幻觉词上累积敲除前后概率差。

\[\begin{split}I_{\theta_{c}}=\frac{1}{L}\sum_{t=1}^{T}&\mathbbm{1}\{\hat{w}_{t}\in\mathcal{H}\}\cdot\bigl|\mathcal{P}_{\theta_{M}}(\hat{w}_{t}|\hat{\mathrm{W}}_{\lt t},\mathrm{W}^{\mathrm{i}},\mathrm{X})\\ &-\mathcal{P}_{\theta_{M\setminus c}}(\hat{w}_{t}|\hat{\mathrm{W}}_{\lt t},\mathrm{W}^{\mathrm{i}},\mathrm{X})\bigr|.\end{split}\]

**多头自注意力 × 多层感知机：** 多头自注意力负责在同一序列内比较文本和音频记号并分配权重，多层感知机负责对每个位置做非线性变换；本文敲除实验比较二者对幻觉词概率的贡献，发现前者贡献更大，说明编造更多来自跨记号的上下文取舍，而不是单点变换。

结论的适用条件是零消融假设成立且只看幻觉词概率变化，不能直接推出去掉自注意力整体词错误率会变好，因为该部件同时承载正常转写。分数在 AudioSLM 中变大也不代表幻觉更重，而是结构变化后概率对该部件更敏感，实际幻觉率是下降的。

### 幻觉时注意力看哪里

在 Vanilla-SLM 的多头自注意力中，非幻觉词的注意力在浅层偏文本、深层音频占比上升，呈现跨模态交错；幻觉词则在全部块中明显偏向文本，几乎不分给音频。该图横轴为块序号，纵轴为归一化后平均权重，蓝色为音频，橙色为文本。

> **看图路径：** 1. 对比左右两图蓝色音频曲线与橙色文本曲线的高低；2. 观察横轴 block index 从浅层到深层的走势变化；3. 注意阴影为多头平均的标准误差而非单头数值

[![原论文 Figure 5：Averaged attention weights over audio and text tokens for hallucinated and non-hallucinated words…](https://arxiv.org/html/2610.25351v1/attens-norm.svg)](https://arxiv.org/html/2610.25351v1/attens-norm.svg)

*论文图 5。原论文 Figure 5:：“Averaged attention weights over audio and text tokens for hallucinated and non-hallucinated words in the Vanilla-SLM, where the shaded areas are the standard error of attention…”。*

右图确实可见橙色文本曲线全程高企而蓝色音频曲线贴底，左图则可见蓝色在 20 块附近抬升并与橙色交织。这支持编造来自过度依赖语言先验、搁置声学信息的解释，与视觉中忽视图像而编造物体的现象一致。

但相关不等于因果，单看曲线不能证明偏向文本就导致编造，还需结合前述敲除实验。曲线也只来自 Vanilla-SLM，不能直接说明 AudioSLM 内部已纠正到何种程度。

### 词错误率与大基线相比如何

下表在 LibriSpeech-100 上比较词错误率，回答小骨干加对齐改进能否接近大语言模型方案。训练数据同为 100 小时，比较传统 CTC、RNN-T、编解码器与 LLM-Guided Decoder，指标为 dev 与 test 的 clean 与 other 词错误率，越低越好。

| Model | Used LLM | Dev WER | Dev WER | Test WER | Test WER |
| --- | --- | --- | --- | --- | --- |
| Model | Used LLM | Clean | Other | Clean | Other |
| CTC [24] | - | 11.20 | 21.40 | 11.40 | 22.00 |
| RNN-T [24] | - | 9.70 | 21.50 | 9.80 | 22.20 |
| CTC-Atten [22] | - | 7.20 | 17.50 | 7.50 | 18.00 |
| LLM-Guided Decoder [22] | LLaMA-7B-Chat | 6.20 | 16.50 | 6.70 | 16.90 |
| Vanilla-SLM | SmolLM2-135M | 9.11 | 13.75 | 10.82 | 13.93 |
| AudioSLM | SmolLM2-135M | 6.58 | 12.29 | 7.11 | 11.92 |
| AudioSLM | SmolLM2-360M | 5.79 | 10.69 | 6.04 | 11.07 |
| AudioSLM | SmolLM2-1.7B | 4.69 | 8.75 | 4.71 | 10.21 |

用 135M 骨干的 AudioSLM 在 dev-clean 为 6.58%、dev-other 为 12.29%、test-clean 为 7.11%、test-other 为 11.92%，优于同骨干 Vanilla 的 9.11%、13.75%、10.82%、13.93%，也优于传统三基线；在 other 上优于用 LLaMA-7B-Chat 的 LLM-Guided Decoder 的 16.50% 与 16.90%，clean 上接近。随骨干放大到 360M 与 1.7B，词错误率继续降到 4.69%、8.75%、4.71%、10.21%，显示可扩展。

但论文同时报告幻觉错误率随骨干增大从 8.69% 升到 10.64% 与 12.76%，与更强语言先验更易编造的解释一致。这意味着词错误率最好不等于幻觉最少，选型要看任务更怕编造还是更怕替换。

### 两处改动各带来什么变化

下表比较了 Dev-clean 上的正确率、替换、删除、插入与幻觉错误率，回答精修音频与交叉注意力是否互补。比较对象是同骨干的 Vanilla 与完整 AudioSLM 及各去掉一部件的版本，指标方向为正确率越高越好、其余越低越好。

| Model | CORR%↑ | SUB%↓ | DEL%↓ | INS%↓ | HER%↓ |
| --- | --- | --- | --- | --- | --- |
| Vanilla-SLM | 94.58 | 4.78 | 0.63 | 3.69 | 52.01 |
| AudioSLM | 94.16 | 5.20 | 0.64 | 0.74 | 8.69 |
| -w/o CA | 93.97 | 5.37 | 0.66 | 3.50 | 11.96 |
| -w/o CTC-Gate | 93.93 | 5.55 | 0.52 | 1.52 | 14.67 |

完整 AudioSLM 把幻觉错误率从 52.01% 降到 8.69%，插入从 3.69% 降到 0.74%，代价是正确率从 94.58% 微降到 94.16%，替换从 4.78% 升到 5.20%，删除基本持平。去掉交叉注意力后幻觉回升到 11.96% 且插入回到 3.50%，去掉 CTC 门控后幻觉为 14.67% 且插入为 1.52%，说明门控更针对插入冗余，交叉注意力更针对编造抑制，二者互补。

限制是该表只在 Dev-clean 上，且正确率与替换的轻微变差未做显著性检验，不能推广到 other 噪声集。也没有报告延迟与参数量，低幻觉不等于低成本。

### 结论在什么条件下才成立

所有主结论限于 LibriSpeech 朗读英语、100 小时训练、波束 5 解码。other 集虽含变化但仍是朗读域，未评测对话、自发语音、远场与多语，也未测量误判外的延迟与内存。幻觉定义依赖对齐，换对齐工具可能轻微改变绝对值。

消融只做一次去掉，没有交叉注意力头数、卷积核与门控形式的敏感性分析，也没有训练失败条件。影响分数用零消融，置零会偏离正常激活分布，可能高估贡献，只能做相对排序。

逆扩展现象只在 135M 到 1.7B 三点观察到，不能外推到更大模型或其它骨干家族。论文未来工作提出研究免训练解码策略，说明当前方法仍需训练新增部件。

### 复现第一步做什么

先按公开代码准备 LibriSpeech train-clean-100 与 dev/test 划分，复刻 Whisper-large-v2 编码器冻结、3 层卷积连接器降采样 4、SmolLM2-135M 骨干的 Vanilla-SLM，确认 Dev-clean 幻觉错误率与插入基线量级，再加入 CTC 模块与门控和交叉注意力。训练用 30 轮余弦调度、最高学习率 1e-4，推理波束 5，保持一致才能对比。

关键超参数与信息条件是编码器冻结、嵌入与原注意力冻结、只训连接器、CTC、门控与交叉注意力；CTC 词表与语言模型词表对齐方式、深度卷积核 3×1、门控拼接顺序需照代码实现。

代码、权重与系统可运行是三件事：作者资源当前可用只说明代码可下载，不等于权重已发布或一键可运行，复现前应检查仓库中的权重链接、环境与解码脚本，还需补做 other 集与多次种子的方差验证。

### 什么时候值得尝试 AudioSLM

当应用不能容忍凭空编造长串词，且可用训练资源有限、希望用小语言模型达到接近大模型方案的词错误率时，值得尝试先加 CTC 对齐线索过滤音频，再每层加交叉注意力强制回看声学。预期收益是幻觉与插入大幅下降，代价是替换可能略升、增加交叉注意力开销，且骨干放大后需重新权衡幻觉。

复述关键步骤：语音经编码器与连接器成音频记号，CTC logits 经门控精修音频，精修记号与指令、已生成词一起送入加了交叉注意力的骨干逐词生成；诊断时用敲除影响分数排序部件，用跨层注意力曲线验证是否偏文本。

仍需补的验证是噪声与自发语音下的幻觉率、延迟与参数成本、以及与解码期抑制方法的组合效果，再决定是否上线。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.25351v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
