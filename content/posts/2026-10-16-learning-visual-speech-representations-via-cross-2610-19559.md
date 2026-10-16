---
title: "Learning Visual Speech Representations via Cross-Modal Distillation and Joint Face-Lip Modeling"
date: 2026-10-16
draft: false
tags: [唇读, 知识蒸馏, 自监督学习, 音视频, 大语言模型]
categories: [论文速递]
description: "FLARE 针对唇读中视觉线索模糊且对姿态和分辨率敏感的问题，用 Whisper 深层语音表示经随机投影量化做掩码预测预训练，并用脸与唇双流联合建模加辅助音频和模态丢弃学习视觉表示，最好的大模型加语言模型解码在 LRS2、LRS3 和 WildVSR 上取得 11.7%、13.2% 和 34.3% 的词错误率，但双视觉分支增加了计算开销且跨任务迁移尚未验证。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.19559"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只看嘴能读出说什么吗：FLARE 如何向声音借知识并同时看脸和嘴唇"
paper_digest_original_title: "Learning Visual Speech Representations via Cross-Modal Distillation and Joint Face-Lip Modeling"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.19559v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.19559v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.19559v1.pdf"
paper_digest_primary_task: "唇读"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.lip-reading","label":"唇读"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 8.2
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "FLARE 针对唇读中视觉线索模糊且对姿态和分辨率敏感的问题，用 Whisper 深层语音表示经随机投影量化做掩码预测预训练，并用脸与唇双流联合建模加辅助音频和模态丢弃学习视觉表示，最好的大模型加语言模型解码在 LRS2、LRS3 和 WildVSR 上取得 11.7%、13.2% 和 34.3% 的词错误率，但双视觉分支增加了计算开销且跨任务迁移尚未验证。"
paper_digest_authors: [{"affiliations":["School of Artificial Intelligence and Computer Science, Shaanxi Normal University"],"name":"Jing-Xuan Zhang"},{"affiliations":["iFLYTEK Research, iFLYTEK Co., Ltd."],"name":"Genshun Wan"},{"affiliations":["iFLYTEK Research, iFLYTEK Co., Ltd."],"name":"Jianqing Gao"},{"affiliations":["iFLYTEK Research, iFLYTEK Co., Ltd."],"name":"Jia Pan"},{"affiliations":["School of Artificial Intelligence and Computer Science, Shaanxi Normal University","Key Laboratory of Intelligent Computing and Service Technology for Folk SongMinistry of Culture and Tourism"],"name":"Yumei Zhang"},{"affiliations":["School of Artificial Intelligence and Computer Science, Shaanxi Normal University"],"name":"Lichen Zhang"}]
paper_digest_abstract_sha256: "a703f46bdbe7b41a2be56032b2a24ca26ee5e0d81f5397482c51b79387141257"
paper_digest_sidecars: {"citation.bib":{"sha256":"1bb7ec81e0eb541659e569fff75d345c440c9eb8998dfc40478277b33078141d","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19559/citation.bib"},"citation.json":{"sha256":"89aa9550f9d7ce311102e832a894cf20f8a8b6a5e8733f19eef343635fcc4df3","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19559/citation.json"},"citation.ris":{"sha256":"ecd6078a3961de63bb2f6efe39166f273285536964045a426b7fb0c1508e6c16","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19559/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"9577d5479bc26442ea83ed5f11808724a0878779b6aca8d03fd63f63a4df4600","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19559/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3327376b8bb3a8e233bcdb2d5264968cfb076e787ea2e179bc6f5bef336501dc"
paper_digest_api_reader_plan_sha256: "ee552812abfe8594d97522b4e2b81ccbdaea99855a76b3cd4b7fcc7c09215ec8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f8b5ed36fbf3a29e1f3b3696a67c6b0eab70ed20f0b22730d9eddb69674e2626"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "c16ed9abadb74d4726c567c997877f996c6d3bb7dd9b26a47050fe58341ce627"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5b0aed57736730b5c692dd635aff066f0a8a86a0892d8413f2dada3bbad9f287"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "dc8ce2128b25c384a711d24f8dfe36399ad96861dbb22eda7a7c9dbc2cb41c99"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只看嘴能读出说什么吗：FLARE 如何向声音借知识并同时看脸和嘴唇

> 英文题目：*[Learning Visual Speech Representations via Cross-Modal Distillation and Joint Face-Lip Modeling](https://arxiv.org/abs/2610.19559v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr) → [音视频语音识别](/audio-paper-digest-blog/papers/?concept=task.av-asr) → [唇读](/audio-paper-digest-blog/papers/?concept=task.lip-reading)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **模型家族**：[大语言模型](/audio-paper-digest-blog/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Jing-Xuan Zhang：School of Artificial Intelligence and Computer Science, Shaanxi Normal University
- Genshun Wan：iFLYTEK Research, iFLYTEK Co., Ltd.
- Jianqing Gao：iFLYTEK Research, iFLYTEK Co., Ltd.
- Jia Pan：iFLYTEK Research, iFLYTEK Co., Ltd.
- Yumei Zhang：School of Artificial Intelligence and Computer Science, Shaanxi Normal University；Key Laboratory of Intelligent Computing and Service Technology for Folk SongMinistry of Culture and Tourism
- Lichen Zhang：School of Artificial Intelligence and Computer Science, Shaanxi Normal University

## 📌 核心摘要

唇读是从无声唇部运动序列识别说话内容，输入是面部视频，输出是文本，难点是视觉线索本身含糊，且对头部姿态和分辨率敏感。FLARE先用弱监督语音识别模型Whisper抽取干净语音深层表示，全局归一化后经随机矩阵投影并取随机码本最近码编号，作为离散蒸馏目标。预训练对全脸视频、唇部感兴趣区域视频做同一话语内区间替换遮掩，对梅尔滤波器组音频用可学习向量替换遮掩并向波形加MUSAN噪声，再经双路视觉前端与音频投影融合送入上下文编码器，在掩蔽与非掩蔽帧上预测上述离散码，迫使视觉分支学到教师表示的序列结构。微调时该编码器接6层轻量Transformer解码器，或经适配器连接Qwen-2.5-7B大语言模型解码器，前者先冻结编码器再联合微调，后者沿用前者微调后的编码器分阶段对齐到大语言模型嵌入空间。与从零联合学习音视频表示的音视频自监督方法不同，该工作只强化视觉分支，并强调面部与唇部早期联合建模。在4966小时预训练加同量微调下，大模型加大语言模型解码器在LRS3测试集词错率（Word Error Rate，WER，越低越好）为13.2%，接近使用100000小时数据的LP-Conformer报告的12.8%。该结论依赖联合面唇输入，面部与唇部单输入优劣随数据集而变，WildVSR因无全脸视频只能用唇部评估，大偏角下唇输入词错率显著上升，而基准均只报告单次WER而未报告误差棒，重复方差与统计显著性尚未验证。原文未披露完整货币或能耗成本，附录在单张Tesla P40上用6秒语音测得双前端大模型总计算量154.9 GFLOPs、实时率0.23，接大语言模型后实时率升至1.31-1.42，作者指出未做词元压缩故效率仍待优化。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/jxzhanggg/FLARE> — 链接可访问（HTTP 200）

- 第三方资源：<https://anonymous.4open.science/r/FLARE-522C> — 链接可访问（HTTP 200）

- 模型相关资源：<https://github.com/jxzhanggg/FLARE> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/openai/whisper-large-v2> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen2.5-7B> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 唇读要从什么样的视频里读出什么？

唇读也叫视觉语音识别，输入是一段说话人视频，目标是在完全不用声音的情况下转写出说了什么文字。论文强调的难点有两个，一是视觉本身模糊，不同音素的口型可能看起来接近，单帧很难定音，必须靠前后句子上下文消歧；二是输入质量不稳定，头部转动、分辨率下降、裁剪不准都会让嘴部小图变形或丢失细节。举例来说，刚入门可以这样理解例子：同样是嘴唇微张，放在不同前后口型里可能是不同音，模型必须记住较长一段动作才能猜对。

评价用词错误率，也就是识别错的词占参考总词数的比例，越低越好。论文把 LRS2 和 LRS3 当作领域内测试，把 WildVSR 当作域外测试，用来检验换了拍摄条件后是否还能用。

**唇读 × 视素到音素映射：** 唇读指只看唇部运动序列识别说话内容，不用声音信号；视素到音素映射指把看到的口型类别对应到语音中的音素，问题是多个音素看起来很像，所以只看嘴唇会有固有歧义，需要上下文和额外视觉线索来减少误判。

### 已有路线为什么还不够？

早期做法是先提视觉瓶颈特征再识别，后来变成端到端直接用文字监督训练整句或孤立词唇读模型。近年流行的音视频自监督学习是在无标注的配对音视频上预训练，目标有掩码预测和对比学习两类，学到的编码器再接专用解码器或大语言模型做唇读。论文指出两处不足。第一，很多方法从零开始在一个统一框架里同时学音频、视觉和音视频表示，没有专门回答如何组织监督才能最有效地增强视觉表示，优化目标复杂时反而可能干扰视觉分支。

第二，多数工作只用裁剪好的唇部感兴趣区域，脸部其余动态被丢掉，已有尝试多是在决策层融合多个单独模型，没有在特征早期把脸和唇联合建模，也没有讲清二者何时互补。FLARE 的定位就是只聚焦加强视觉语音表示，用单个大规模外部语音模型做蒸馏，并把脸和唇在前端就联合起来。

### 论文把任务拆成哪几个要回答的问题？

论文要解决的具体问题是：在只有视频可用的测试条件下，如何学到对分辨率下降和大转头更稳、且音素区分性更好的视觉表示。拆开看有 4 个分工。表示来源问题由跨模态蒸馏回答，即从 Whisper 的深层语音表示提炼离散目标，让视觉模型去预测。信息完整性问题由脸唇双流回答，即同时保留精细 articulation 动作和全脸动态。训练偏差问题由辅助音频加模态丢弃回答，即训练时见过声音以便对齐，但采样上偏向视觉以免依赖声音。

长时消歧问题由增强的上下文编码器回答，即把局部特征连成句子级表示。下游只做唇读转写，不研究说话人识别或非语言信息，论文附录也明确说这些迁移不在本研究范围内。

### FLARE 的整体流程是怎样的？

从一个样本走一遍最清楚。预训练时输入 3 路：全脸视频、唇部视频和梅尔滤波器组音频特征。脸和唇先各自做基于片段的输入掩码，音频也做掩码并在波形级加噪声防止模型偷懒只听声音。3 路分别过各自的前端得到每帧向量，再按模态丢弃采样保留其中一部分，拼接到一起经线性投影和归一化融合成一串局部表示，送入增强 Conformer 上下文编码器得到输出。另一路，干净语音过冻结的 Whisper 大模型得到深层语音特征，再经随机投影量化变成每帧的离散编号。

模型输出经投影并按帧率对齐后去预测这些编号，掩码区和非掩码区都预测。微调时只用视觉，去掉教师分支，预训练编码器接轻量 Transformer 解码器或经适配器接大语言模型做转写。下面这张总览图把预训练和微调画在左右两侧，值得对照着看。

读图前先明确：左侧是 3 路输入与掩码，中间是融合与编码加预测，右侧是教师分支， far 右侧是两种解码。

> **看图路径：** 1. 先看左侧脸、唇、音频三路输入如何分别经过掩码再进各自前端；2. 再看中间融合与上下文编码器到离散码预测的箭头；3. 再看右侧 Whisper 分支的随机投影与量化如何提供监督；4. 最后对比微调测试阶段轻量解码器与大语言模型解码器的连接方式

[![原论文 Figure 1：Overview of our proposed method.](https://arxiv.org/html/2610.19559v1/figure0.png)](https://arxiv.org/html/2610.19559v1/figure0.png)

*论文图 1。原论文 Figure 1:：“Overview of our proposed method.”。*

图左侧可以看到脸和唇各有一条由 3 维卷积加 ConvNeXt 块组成的前端，音频是一条前馈投影，中间汇到模态丢弃再进堆叠的增强 Conformer 块，顶部是投影预测到离散码；教师侧是波形到语谱再到 Whisper 再到随机投影与随机码本的箭头；右侧微调分轻量解码器直接接预训练编码器，以及大语言模型经适配器和低秩适配权重连接的两种画法，冻结标记标在 Whisper、随机投影、随机码本和大语言模型主体上。这张图的作用是把训练时谁更新、谁冻结，以及测试时声音不再需要这两件事一次讲清。

### 脸和唇两路输入各做什么、怎么融合？

脸和唇虽然都被缩放到同样像素尺寸，但空间区域不同。唇路裁剪的是经人脸关键点对齐后的中央嘴部，保留张闭、牙齿舌位等细动作；脸路保留整脸，包含头部转动和面颊下巴的连带运动。两路各用一个受 ConvNeXt 启发的视觉前端，先过 3 维卷积建局部时空动态，再过 4 个 2 维 ConvNeXt 块，相对常用的 3 维残差网络把批归一化换成层归一化，用大核深度可分离卷积代替小核普通卷积并用 GELU 激活。音频路只是一个前馈投影。

融合前先做模态丢弃，音频、视频、音视频三选一，视觉内部再在脸、唇、脸唇联合之间采样，缺脸时把脸特征置零，保证只有唇部数据的集也能跑。剩下特征沿通道拼起来再线性投影加层归一化，得到每帧一个向量。

**Whisper 教师表示 × 随机投影量化器：** Whisper 教师表示指用冻结的音频 Whisper 大模型从干净语音提取的深层连续特征，它带有较丰富的音素和语言信息；随机投影量化器指用固定的随机矩阵和随机码本把这些连续特征变成离散编号，学生模型去预测编号，二者搭配是把外部语音知识转成可供掩码预测的离散监督信号。

**唇部感兴趣区域 × 全脸输入：** 唇部感兴趣区域指裁剪对齐后的嘴部小图，负责捕捉精细的发音动作；全脸输入指整张脸的图像，负责提供头部姿态和面部整体动态等口外线索，二者用各自的前端编码再融合，组合后在嘴部不可靠时仍有补充信息。

\[\mathbf{H}^{av}=\mathrm{LN}\big(\mathrm{Concat}(\mathbf{H}^{a},\mathbf{H}^{l},\mathbf{H}^{f})W\big)\in\mathbb{R}^{T\times D},\]

该式说的是融合这一步的计算，括号里是把音频、唇、脸 3 路特征拼起来乘可训练矩阵，再做层归一化，输出仍是每帧维度为 D 的序列，供上下文编码器使用。论文还报告双流会增加计算量，附录用 6 秒语音在单卡上测得双前端的总浮点运算明显高于单前端，但实时率仍低于 0.24，而接 7B 大语言模型后总计算主要被语言模型占据，这是使用双流和大解码器要付的代价。

### 上下文编码器为什么对唇读关键？

局部前端只能看到短窗口，而视素歧义需要句子级上下文才能解开，所以论文把增强 Conformer 当作上下文编码器。每个块仍是前馈、卷积、自注意力再加前馈的结构，但做了几处改动：相对位置编码换成旋转位置编码，自注意力用分组查询注意力，前馈用 SwiGLU，层归一化换成 RMSNorm。原文的说法是这些改动帮助建模更长的视觉时序模式，同时保持高效稳定的优化。编码器输出记为每帧一个向量，后续直接用于预测离散码或接解码器转写。消融显示 Conformer 类结构明显优于普通 Transformer，增强版又比标准版更好，这与需要长上下文的任务直觉一致。

**上下文编码器 × 轻量 Transformer 解码器：** 上下文编码器指融合后做长时序建模的增强 Conformer 堆叠，负责把局部视觉特征连成句子级上下文以降低视素歧义；轻量 Transformer 解码器指微调时把预训练编码器当视觉编码器再接的 6 层随机初始化解码器，负责把视觉特征转写成文字，二者分工是预训练学表示、微调学文字映射。

### 离散目标怎么做出来、模型怎么学？

教师分支全程冻结。干净语音先过纯音频 Whisper 得到深层表示，帧率是视频的 r 倍，先做全局零均值单位方差归一化，再乘固定的随机投影矩阵进入码空间，然后找最近的随机码本向量编号，码本大小和码维度分别取 8192 和 32，随机矩阵和码本都不更新。模型输出经可训练投影把通道展开成 r 倍帧，再做 Softmax 得到每教师帧在码表上的概率，用交叉熵学这些编号。关键是掩码区和非掩码区都算损失，因为教师深层表示本身就提供了超出掩码重建的监督。论文对比了用原始梅尔滤波器组做随机投影量化的做法，发现换成 Whisper 深层表示明显更好，说明语义更丰富的声音监督更有助于视觉表示。

**模态丢弃 × 辅助音频输入：** 辅助音频输入指预训练时额外加入的梅尔滤波器组特征，用于帮助对齐跨模态表示；模态丢弃指按概率只保留音频、只保留视频或保留音视频，以及在脸、唇、脸唇联合之间采样，迫使模型不依赖声音也能做好，组合后既利用音频引导又保证纯视觉测试时可用。

\[y_{i}=\arg\min_{j}\left\|\mathrm{Norm}(\mathbf{c}_{j})-\mathrm{Norm}\big((\bar{\mathbf{H}}^{\mathcal{T}}U)_{i}\big)\right\|_{2},\]

该式是量化取编号的规则，对第 i 个教师帧，把归一化后的投影向量与每个归一化码向量算欧氏距离，取最小者为目标编号。

\[L_{\mathrm{pretrain}}=-\frac{1}{rT}\sum_{i=1}^{rT}\sum_{j=1}^{V}\mathbf{y}_{i,j}\log P_{i,j},\]

该式是预训练损失，对全部 rT 个教师帧的独热目标求平均交叉熵，预测概率来自模型输出的投影与帧率对齐。梯度只更新视觉前端、融合层、上下文编码器和预测投影，不更新 Whisper、随机投影和码本。模态丢弃概率取偏视觉的 0、0.75、0.25 时在小数据微调下最好，从纯音视频课程调度过来没有进一步增益，说明音频是辅助对齐用的，不能喧宾夺主。

### 数据、模型和评测条件是什么？

预训练用了约 4966 小时的公开音视频，其中 LRS2 约 223 小时、LRS3 约 436 小时、VoxCeleb2 英文约 1322 小时、AVSpeech 英文约 1549 小时、只提供唇部的 AVYT 约 1437 小时，AVSpeech 去掉了与 LRS3 测试重叠的视频，噪声增强用 MUSAN。VoxCeleb2 和 AVSpeech 的文字标签是用 Whisper-Large-v2 转写英文得到的，只用于微调阶段。低资源对照是在 LRS3 加 VoxCeleb2 英文共 1759 小时上预训练，再在 LRS3 的 30 小时子集和 433 小时全集上微调；高资源是预训练和微调用同样 1759 或 4966 小时。模型分 Base 约 117M 和 Large 约 342M，轻量解码是 6 层 Transformer，大语言模型解码用 Qwen2.5-7B 加两层前馈适配器和秩 16 的低秩适配，只调适配器和低秩权重。

评测在 LRS2、LRS3 测试集和域外 WildVSR 上进行，WildVSR 和 AVYT 只有唇部，测试时脸特征置零。训练在 8 卡 A100 上，大模型预训练约 3 周，轻量微调数天，大语言模型微调再加数天，复现要预留相应预算。作者资源方面，代码和预训练模型所给仓库链接本次检查可用，但这只说明链接可达，不等于已验证可一键复现全部数字。

### 主结果在什么条件下成立？

比较的问题是：在相同或可比的数据和解码条件下，FLARE 的视觉表示是否带来更低的词错误率，指标方向是越低越好。低资源下 Base 已优于同量级自监督基线，且没用外部语言模型、辅助 CTC 或 CTC 注意力联合解码。高资源下 Large 加语言模型在 3 个集上最好，但 WildVSR 只能用唇部输入，因为没有全脸视频。特别要注意，接近 12.8% 的那次对比里，对方用了 100,000 小时训练数据，而 FLARE 只用了 4966 小时，数据量并不对等，所以只能说在少得多的数据下接近，不能说同数据下已超越。下表整理论文直接报告的最佳数字与关键对照，数字与单位写法保留原文。

| 测试集 | 指标 | FLARE-LLM Large | 对照说明 | 数据与解码条件 |
| --- | --- | --- | --- | --- |
| LRS2 | 词错误率 | 11.7% | 论文报告的最佳值 | 4966 小时，大语言模型解码 |
| LRS3 | 词错误率 | 13.2% | 前人最好 12.8%，但用 100k 小时 | 4966 小时，大语言模型解码 |
| WildVSR | 词错误率 | 34.3% | 仅用唇部输入，因无全脸视频 | 4966 小时，大语言模型解码 |

三行数字来自同一句原文，最佳模型同时在这 3 个集上取得这些结果。LRS3 的 13.2% 接近文献 12.8%，但训练量相差一个数量级以上，公平性受限。WildVSR 的 34.3% 是在缺脸条件下的唇部结果，不能直接与有脸的结果比脸唇互补的增益。未胜出的一面是：不用语言模型时 Large 在 LRS3 上为 15.9%，明显高于加语言模型后的 13.2%，说明强解码器贡献了可观增益，视觉表示本身的提升要与解码器增益分开看。

### 表示分析看到了什么结构？

先看音素区分性的图，读图说明是：三块矩阵都是音素两两负距离，越亮表示距离越小即越相似，对角线最亮，左图标了层次聚类。

> **看图路径：** 1. 对比左中右三块矩阵的对角线亮度与非对角深色块分布；2. 看左侧脸唇联合矩阵左上和右下是否出现更整齐的深色分离；3. 结合右侧色条理解亮表示距离小、暗表示距离大的含义

[![原论文 Figure 4：Pairwise negative-distance matrices of phoneme representations for joint face-lip, face-only, and…](https://arxiv.org/html/2610.19559v1/figure6.png)](https://arxiv.org/html/2610.19559v1/figure6.png)

*论文图 4。原论文 Figure 4:：“Pairwise negative-distance matrices of phoneme representations for joint face-lip, face-only, and lip-only inputs. Brighter colors indicate smaller distances.”。*

可见内容是左侧脸唇联合矩阵的明暗对比最分明，左上辅音区和右下元音区出现更整齐的深色分离块，中间脸和右侧唇的块状结构相对模糊，论文据此认为联合输入在编码器之前的表示已更具音素区分性，但这只是可视化支持，不是分类准确率的直接证明。再看跨模态对齐的图，读图说明是：7 个子图按编码器深度 0 到 12 排列，红点是纯视觉，青点是音视频，每块都是降维散点。

> **看图路径：** 1. 从标号 0 到 12 按深度顺序看红色视觉点与青色音视频点的重叠变化；2. 注意浅层两团分离、深层逐渐混合的趋势；3. 最后两块是否几乎混在一起并出现细碎结构

[![原论文 Figure 5：t-SNE visualization of visual and audio-visual representations across context encoder blocks.](https://arxiv.org/html/2610.19559v1/figure7.png)](https://arxiv.org/html/2610.19559v1/figure7.png)

*论文图 5。原论文 Figure 5:：“t-SNE visualization of visual and audio-visual representations across context encoder blocks.”。*

可见内容是浅层红青两团明显分离，到第 8 块开始交叠，第 10 和 12 块几乎混在一起且呈细碎小团，论文据此认为深层上下文编码促进了视觉与音视频表示的一致性。两类分析的共同限制是只用了 Base 和 LRS3 测试的表示，没有报告跨数据集或跨规模是否同样成立，也没有给出数值化的聚类指标。

### 换教师、换前端、换输入会发生什么？

消融要回答的是每个部件是否必要，做法是固定 Base、预训练 200,000 步再在 30 小时和 433 小时上微调，逐步把选定的配置带入下一个阶段。教师与目标方面，WavLM 加 Conformer 识别器、Whisper、AV-HuBERT 等配回归加散度、回归、K 均值或随机投影，性能大体接近，但把深层表示换成原始梅尔滤波器组会大幅变差，说明关键不在量化形式而在监督是否语义丰富。掩码方面，同一句话内片段替换优于特征掩码和高斯噪声输入掩码。前端方面，3D-ConvNeXt 在短预训练时只小幅优于 3D 残差网络，延长到 400,000 步后差距拉大。下表只收录论文用完整句子报告过的延长预训练对照，避免引用孤立表格数字。

| 前端 | 433 小时词错误率 | 预训练步数 | 输入 |
| --- | --- | --- | --- |
| 3D-ConvNeXt | 27.7% | 延长到 400k 步 | 脸输入 |
| 3D-ResNet | 29.5% | 延长到 400k 步 | 脸输入 |

该对比支持在更长训练下新前端更优，但条件是脸输入和 Base 规模，不能推广到所有规模。模态丢弃延长训练的对照如下，同样保留原文的分组写法。

| 策略 | 433 小时词错误率 | 预训练更新数 | 采样偏向 |
| --- | --- | --- | --- |
| 迁移的模态丢弃策略 | 30.7% | 400k 更新 | 视觉主导 |
| 基线策略 | 30.6% | 400k 更新 | 对照 |

这组结果显示新策略在 30 小时微调下更好，在 433 小时下基本持平，说明偏视觉采样主要帮助小数据微调。视觉输入配置的最佳行如下。

| 预训练输入 | 微调测试输入 | 30 小时词错误率 | 433 小时词错误率 | 说明 |
| --- | --- | --- | --- | --- |
| 脸唇联合 | 脸唇联合微调并测试 | 30.9% | 25.4% | 全文报告的最佳输入配置 |

该表只呈现论文明确说最好的那一行，完整的多行输入组合未在此展开，限制是它没有给出只用脸或只用唇预训练在同样长训练下的全部对照，脸唇增益的大小依赖后续的分辨率与姿态分析。

### 脸唇联合在降质和大转头下更稳吗？

论文用支持 3 种输入的大模型，在 4966 小时上预训练和微调后，做了分辨率和头姿两组稳健性检验。分辨率是把测试视频降采样到 0.75、0.5、0.25 倍，结果是脸在 LRS3 上一直好于唇，唇在 LRS2 上多数时候好于脸，说明单用谁更好取决于数据集的姿态分布、画质和背景，而脸唇联合在所有分辨率下都最低，支持互补而非单一路线的判断。

头姿是对每条视频估计平均绝对偏航角再对词错误率做线性回归，唇输入时偏航越大错误率显著越高，脸和脸唇联合则没有显著关联，且联合在全偏航范围都最好。论文还报告 LRS3 平均偏航 28.7 度显著高于 LRS2 的 22.6 度，这可以部分解释为什么脸在 LRS3 上优势更大。限制是这些结论依赖该大模型和这两个数据集的分布，没有测试遮挡、极低光或跨语言，附录也承认双分支增加了模型复杂度和计算 cost，且未验证向更广音视频任务的迁移。

### 要复现第一步做什么、代价是什么？

复现第一步是按 LRS3 的预处理协议准备两路视频：先检测裁剪并对齐人脸得到全脸流，再经关键点仿射对齐裁中央嘴部得到唇流，两路都缩放到 96 乘 96 再随机裁 88 乘 88，同时提取梅尔滤波器组音频并准备 MUSAN 噪声。预训练按视觉主导的模态丢弃采样，码本 8192 维 32，优化用 Adam 先暖机后恒定最后指数衰减，小集 600,000 步、全集 800,000 步。微调先冻编码器训解码器再联合调，大语言模型版分 3 段先调适配器再加低秩权重。

成本上双前端使编码器浮点运算从单脸的约 66.7 到 99.5G 增至双流的约 119.3 到 152.3G，轻量版实时率仍低于 0.24，接 7B 语言模型后总计算达 2600G 量级、实时率升至 1.3 以上。常见误解是把代码可达当成一键可复现，把语言模型增益全算到视觉表示上，或把域外 WildVSR 的唇部数字当成脸唇联合的数字，这些都要按原文条件分开理解。

### 什么时候值得试、还缺什么验证？

当测试只有视频、且常遇到侧脸或低分辨率时，值得尝试脸唇联合加偏视觉的模态丢弃，因为论文在两个数据集上都显示联合最低，且大偏航下唇单独恶化而联合保持稳定。当只有唇部数据或隐私不允许存全脸时，框架允许脸特征置零运行，但这时不要期待与有脸时相同的增益，WildVSR 的数字就是缺脸条件下的上限参考。当算力只够单前端或实时要求高时，要权衡双流的额外浮点运算和大语言模型解码的延迟，轻量解码器仍能保留大部分表示增益。

还缺的验证有三项：一是遮挡、低光、跨年龄语言和跨设备的系统评测；二是去掉语言模型后视觉表示本身的误差分析；三是向音视频识别、说话人或非语言线索迁移的效果。论文直接报告的是词错误率和可视化趋势，没有测量误判率公平性或部署延迟的改善，相关不等于因果，稳健性结论也只在所测分布内成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.19559v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
