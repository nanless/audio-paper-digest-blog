---
title: "Probing and Mitigating Hallucinations in Speech-augmented Language Models for Automatic Speech Recognition via Small Language Models"
date: 2026-09-28
draft: false
description: "论文把自动语音识别中的幻觉定义为对齐后的编造插入词，用因果中介与注意力行为定位到偏向文本的多头自注意力，再用连接时序分类门控与跨注意力构建 AudioSLM，在 LibriSpeech 上把开发集幻觉错误率从 52.01% 降到 8.69%，代价是正确率与替换删除略有回退且大骨干仍出现逆扩展。"
tags: ["CTC", "音频大模型", "可解释性", "语音", "语音识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:yan26c_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/yan26c_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/yan26c_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "627056261cc6130bf78e3bc143e6aa1535ff20b50454fcd86f1ae4e3810a0278"
paper_digest_api_reader_plan_sha256: "e6c29d648ab276a7fe7b98034a4b4ea74b38eacfd5aa5b4454559dbc5ec7e1cf"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c23edd808c099b463886872ed620e87e49f06a1c02bfc72384423b6817a6aec1"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8894be0b8dc8201657cda48bcfb6b0248c2f49b37193d2a004d143889f226bdc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a9b2980a831ef4a02995cee86f461d9117be0f9073db2f18c170f25abcf59a46"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1d79c35f8c23289569829316ce80b68abfeb1fafe4f668f4c4fd1fc78fabeab6"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.ctc","label":"CTC"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "CTC"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 幻觉来自只看文字不听声音：用对齐线索把小型语音语言模型拉回声学

> 英文题目：*Probing and Mitigating Hallucinations in Speech-augmented Language Models for Automatic Speech Recognition via Small Language Models*

> 会议身份：`conference:interspeech:2026:conference-paper-id:yan26c_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/yan26c_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/yan26c_interspeech.pdf)

标签：#CTC #音频大模型 #可解释性 #语音 #语音识别

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.4/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Bi-Cheng Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Jhih-Rong Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Fu-An Chao：机构信息未能从会议 PDF 纯文本可靠映射
- Berlin Chen：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音增强语言模型以语音编码器输出的音频标记与指令嵌入为输入生成转写，易产生脱离声学证据的编造词，难点在于强语言先验压制跨模态接地。本文将幻觉操作化为对齐后无参考对应的插入词子集，以幻觉词数与参考词数之比度量幻觉错误率。作者先用零消融因果中介比较多头自注意力与多层感知机的贡献并分析注意力分布，确认幻觉时注意力几乎完全偏向文本标记，再将该定位送入缓解设计。为此提出AudioSLM，在输入层用联结时序分类模块抽取帧级对齐logit并经门控精炼音频标记注入时序线索，在每层注意力与感知机之间插入以音频标记为键值的交叉注意力强化接地。主干采用SmolLM2系列并冻结语音编码器与语言模型主体，仅更新低秩适配、连接器、CTC相关层与新增交叉注意力层。在LibriSpeech-100训练、dev-clean/other与test-clean/other评测下，SmolLM2-135M规模的HER在dev-clean上从52.01%降至8.69%，插入错误从3.69%降至0.74%，test-other词错误率（Word Error Rate，WER）为11.92%。但主干增大至360M和1.7B时HER分别回升至10.64%和12.76%，且验证仅限英文朗读语音。该结论适用边界受限于英文朗读语料，跨语言与自发语音场景尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/bicheng1225/AudioSLM> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么要单独研究幻觉？

这篇论文只研究 1 个任务：自动语音识别。输入是一段语音信号，目标是逐词转写出说话人实际说的内容。研究对象是语音增强语言模型，白话就是在语音编码器后面接一个语言模型，编码器负责把波形变成声学特征，语言模型负责在指令提示下逐词生成转写。

初学者容易以为只要把声音变成向量丢给大模型，模型自然会听话转写，但论文的起点恰好相反：语言模型自带很强的语言先验，白话就是它很会把句子编通顺，当声学证据模糊或被忽略时，它会用通顺的编造补上缺口。作者把这种编造单独拿出来研究，因为在转写场景里多编几个词可能改变原意，而总体词错误率会把听错、漏听和编造混在一起，不利于定位原因。

论文的输出承诺很具体：先用可操作的定义与干预实验讲清幻觉从哪里来，再给出一个基于小型语言模型的可复现缓解结构，并在 LibriSpeech 上报告幻觉指标与识别指标的变化。本文后续按任务与路线、方法全景、组件计算、训练与推理、实验条件、结果与反证、复现收束展开，所有数字只转述原文报告的条件与口径。

### 已有路线如何解释与处理幻觉，本文站在哪条线上？

论文把相关工作分成两类。第一类是事后处理，白话就是模型先生成再修正，包括事后纠错与专门的解码算法，优点是不动主模型，第二类是减少词共现偏置，白话就是让模型不要因为两个词经常一起出现就脱口而出，包括数据增强与偏好优化。作者指出这些工作多集中在纯文本与视觉语言模型，对语音增强语言模型的幻觉相对研究不足。

教学上可以这样理解：视觉问答里物体幻觉对应无中生有说出图中没有的物体，语音识别里幻觉对应说出音频里没有的词，二者都被归因于对输入模态 grounding 不足，白话就是模型没有真正扎根到图像或声音证据上。论文没有提出新的事后解码器，而是走结构增强路线：在输入特征层加入时间对齐线索，在网络结构层加入跨模态对齐层。这与冷融合与深融合把语言模型接入端到端识别的思路一致，但本文的直接目标是压住编造词，而不是单纯压低总体错误率。

需要保留的关键信息是：本文不声称解决了所有幻觉，只针对 LibriSpeech 转写任务验证了两处改动的效果。

### 什么是幻觉词，如何从普通插入错误中数出来？

论文给幻觉下了可复述的操作定义。先把识别假设与参考转写做对齐，对齐后多出来的词统称为插入错误，其中缺乏对应参考的编造词被进一步标为幻觉词。换句话说，幻觉词是插入错误的一个特殊子集，判断标准不是句子通不通顺，而是对齐后有没有声音文本支撑。论文还定义了幻觉错误率，白话就是幻觉词数除以参考总词数，用来衡量编造的严重程度。这个定义的好处是可计数、可比较，缺点是它依赖对齐质量，对齐本身的错误会渗入指标。下面的运行例子展示了从口语输入到参考、假设再到对齐判定的完整链条，例子中的具体英文措辞仅为论文插图示意，不代表 LibriSpeech 的训练样本。

为理解对齐判定的输入与输出，先看论文如何用参考行与假设行的对照把编造词分离出来，下图是唯一的判定示意图，需要沿着从上到下的阅读顺序看。

> **看图路径：** 1. 先找到上方口语输入框与下方识别假设框，对照英文参考与假设的措辞差异；2. 再看底部对齐表格中参考行与假设行的占位符与高亮词如何一一对应；3. 区分蓝色普通插入词与黄色编造幻觉词在两行中的位置

[![原论文 Figure 1：A running example illustrates ASR hallucination for an SLM.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9de6e72c4a33/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9de6e72c4a33/figure-1.png)

*论文图 1。原论文 Figure 1：“A running example illustrates ASR hallucination for an SLM.”。*

上图顶部是口语输入与参考文本，中部是模型给出的假设文本，底部是对齐结果表格。阅读时先对照参考句与假设句的差异，假设中出现了参考里没有的延续性短语，底部表格用占位符标出参考侧的空位，用高亮标出假设侧多出的词。图注明确说明黄色为编造的幻觉词，蓝色为一般插入词，因此判断依据是颜色与占位符位置，而不是语义是否合理。这个例子只承担教学作用：让初学者建立先对齐、再数编造词的操作习惯，后续所有幻觉错误率都应按同一口径理解。

**语音增强语言模型 × 幻觉词：** 语音增强语言模型负责把声学特征与指令拼接后自回归生成转写，幻觉词负责标定其中多出来的编造部分；前者分工是提供听觉 grounding 与语言续写能力，后者分工是把一般插入错误中无声学支撑的子集分离出来，二者搭配的原因是只有先对齐参考与假设才能判断模型是在转写还是在编故事，组合意义是让后续的干预与缓解都有可计数的目标。

沿着这个定义，一个样本的走查是：输入一段英文朗读语音，表示为声学特征序列，组件是编码器加连接器加语言模型，目标是生成与参考一致的词序列，输出是假设词序列，最后用对齐程序数出其中多少词是幻觉词。前置概念必须先于结论：只有先接受幻觉词是插入子集，才能理解后文为什么缓解插入错误的同时幻觉错误率大幅下降，而替换与删除几乎不动。

### 基线语音语言模型长什么样，信息从哪里进模型？

论文先给出一个典型的基线结构，作者称为 Vanilla-SLM，白话就是不加任何新模块的普通语音语言模型。它由三部分组成：语音编码器、连接器网络与语言模型。语音编码器通常取自语音基础模型，例如 Whisper 编码器，负责从音频信号抽取高层声学特征。连接器负责压缩与投影，白话就是把很长的声学帧序列压短并映射到语言模型能接受的维度，形成音频 token 序列。语言模型把音频 token 与指令文本的嵌入拼接在一起，再自回归生成转写。

指令例如请听并转写音频，已生成词作为历史条件参与下一个词的预测。训练阶段论文冻结预训练语言模型，只加入低秩适配模块做高效参数调整，白话就是大模型主体不动，只训练少量旁路参数。

下图展示了基线的信息流，重点是看 3 类嵌入如何汇入同一个语言模型，理解这一点才能看懂后文新增模块插在哪里。

> **看图路径：** 1. 沿左下音频信号经编码器与连接器到大语言模型的箭头走一遍主路径；2. 对照左上图例确认四种颜色分别对应声学特征、音频 token、指令与输出嵌入；3. 观察指令文本与已生成 token 如何经同一嵌入层进入模型

[![原论文 Figure 2：SLM architecture for ASR, comprising a speech en- coder for acoustic feature extraction, a…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9de6e72c4a33/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9de6e72c4a33/figure-2.png)

*论文图 2。原论文 Figure 2：“SLM architecture for ASR, comprising a speech en- coder for acoustic feature extraction, a connector network for modality bridging, and an LLM for text generation.”。*

上图左侧是自下而上的声学通路：音频信号进入音频编码器得到声学特征，再经连接器得到音频 token。右侧是文本通路：指令与已生成词经语言模型的嵌入层得到指令嵌入与输出嵌入，3 路一起进入上方的语言模型，顶部输出参考转写。左上图例用 4 种颜色区分了声学特征、音频 token、指令嵌入与输出嵌入，阅读时应按图例确认每个方块的身份。关键观察是音频与文本在进入模型前是两条独立分支，只在语言模型内部通过自注意力混合，这种混合方式为后文的文本偏置埋下了结构原因。

### AudioSLM 在特征层与结构层各加了什么，为什么这样搭配？

AudioSLM 的改动集中在两处，分别对应输入特征层与网络结构层。特征层新增连接时序分类模块与门控模块，白话就是先用一个分类头估计每 1 帧对应哪个词表符号，再用这个估计去过滤音频 token。结构层在语言模型的每个 Transformer 块里插入跨注意力层，白话就是在自注意力与前馈网络之间加一条显式回听声音的通路。两处分工不同：前者提供时间线索，告诉模型哪一段音频更可能对应文字，后者提供跨模态对齐，让每一层的文本表示都能重新参考声音。搭配理由是只给时间线索而不改结构，模型仍可能在深层丢掉声音；只加结构而不给时间线索，对齐起点依然模糊。

下图是 AudioSLM 的总览与两个关键子图，需要把冻结与可训练、查询与键值的方向 1 次看清。

> **看图路径：** 1. 在子图 a 中区分灰色冻结图标与橙色可训练火焰图标的模块；2. 在子图 b 中确认查询来自自注意力输出、键值来自音频 token 的交叉方向；3. 在子图 c 中沿底部音频 token 与分类对数向上追踪门控与相乘位置

[![原论文 Figure 3：The structure of AudioSLM for ASR to mitigate hallucination errors.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9de6e72c4a33/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9de6e72c4a33/figure-3.png)

*论文图 3。原论文 Figure 3：“The structure of AudioSLM for ASR to mitigate hallucination errors.”。*

子图 a 是整体：音频信号经编码器与连接器得到音频 token，一路直接进入门控模块，另一路经线性与 Softmax 得到分类对数特征，再进入门控模块得到精炼音频 token，最后与指令、已生成词一起进入骨干语言模型。图中用图标区分了冻结与可训练，阅读时先确认音频编码器主体冻结、连接器、门控模块与跨注意力层可训练。子图 b 是改造后的 Transformer 块：上一块输出先经多头自注意力得到上下文表示，再以该表示为查询、以音频 token 为键值做跨注意力，最后经前馈网络输出。

子图 c 是门控模块：分类对数先经线性映射与深度卷积捕捉局部时间依赖，再与音频 token 拼接做门控，最后与原始音频相加并经门控线性单元输出。3 个子图合起来回答了信息从哪里来、到哪里被过滤、在哪一层被重新对齐。

**连接时序分类 × 门控模块：** 连接时序分类分工是给出音频帧与文本之间的时间对齐似然与每帧词表对数，门控模块分工是把该对数映射回隐层维度并做局部卷积与逐元素门控；搭配理由是原始音频 token 缺少哪一段对应哪个字的显式线索，而词表对数恰好携带这种时间提示，组合后得到的是被时间线索过滤与增强的精炼音频 token。

继续看门控的计算直觉。分类对数沿时间轴堆成对齐特征，线性投影把它从词表维度转回隐层维度，深度卷积看前后几帧的局部连续性，拼接音频 token 后再做 1 次线性与 Sigmoid 得到门控向量，最后逐元素加权并通过非线性输出精炼 token。原文明确写了门控向量由拼接特征经线性与 Sigmoid 产生，计算目标是动态压制冗余帧、保留与文字对齐更可靠的帧。

**多头自注意力 × 跨注意力层：** 多头自注意力分工是在同一序列内混合指令、音频与已生成文本的历史信息，跨注意力层分工是以自注意力输出为查询、以后端音频 token 为键值做显式的声文对齐；搭配原因是仅靠自注意力容易让文本上下文淹没声学证据，组合意义是在每个 Transformer 块内强制开一条回听声音的通路，减轻对语言先验的过度依赖。

再看跨注意力的计算直觉。第 l 块先做自注意力得到块内上下文表示，再做跨注意力得到跨模态表示，最后经前馈网络得到块输出。原文明确说明训练时只更新跨注意力层参数，其余保持冻结，因此新增作用是只加对齐能力而不重写原有语言能力。沿一个样本走完就是：波形到声学特征，到音频 token，到被门控精炼，到每层被文本查询回听，最后生成转写词。

### 训练时谁冻结谁更新，监督信号从哪里来？

论文交代的训练安排需要逐项保留，因为这决定复现时改动哪些参数。音频编码器取自 Whisper-large-v2，包含 12 层 Transformer，20 个注意力头，隐层维度 1280。连接器是 3 层卷积网络，核大小为 5，下采样率为 4，白话就是把音频帧长度压缩为原来的 1/4。骨干语言模型采用 SmolLM2 系列，135M 版本包含 30 个 LLaMA 块，每块 9 个注意力头，隐层大小 576。训练共 30 轮，采用余弦学习率调度，最大学习率为 1e-4，推理时波束大小为 5。

监督来自两处：一处是常规的转写自回归似然，另一处是分类模块的连接时序分类损失，该损失通过对所有合法对齐路径求和来最大化参考文本的条件似然。参数更新方面，AudioSLM 在 Transformer 块中只更新新增的跨注意力层，其余冻结；基线 Vanilla-SLM 则冻结预训练语言模型并用低秩适配做高效调整。原文未报告优化器类型、批量大小与具体硬件耗时，因此复现时不能从模型名字推定显存与训练时长，需要按自己的硬件重新摸索。

代码当前可用，仓库地址已在证据中给出，这意味着结构与训练脚本可核对，但不等于权重可直接下载运行。

### 在什么数据与基线上测，指标方向如何读？

实验数据是 LibriSpeech，训练用 train-clean-100 子集，评估用 dev-clean、dev-other 与 test-clean、test-other。初学者需要记住 clean 与 other 的区别：clean 相对干净，other 包含更多口音、噪声与难例，因此 other 更能考验鲁棒性。比较对象包括 3 类：传统端到端基线如连接时序分类、循环神经网络 Transducer 与混合编解码结构，大模型引导解码器，以及去掉新模块的 Vanilla-SLM。保留公平条件的关键是骨干规模：AudioSLM 分别用 SmolLM2-135M、360M 与 1.7B 报告结果，对照时应看相同骨干下的差异，而不是拿小模型与大模型直接比总体错误率。

指标方向是：正确率越高越好，替换、删除、插入与幻觉错误率越低越好，词错误率越低越好。论文还做了因果中介与注意力权重的诊断实验，前者通过清零目标模块比较幻觉词概率变化，后者比较幻觉词与非幻觉词对音频与文本的平均注意力。诊断实验不直接产生可部署收益，只承担定位原因的职责。

### 缓解幻觉的主结果是什么，总体识别付出了什么代价？

主结果集中在开发集 clean 上的细粒度识别指标。比较的问题是：在相同 LibriSpeech 训练与评估划分下，加入对齐线索与跨注意力后，编造词是否减少，总体转写是否变差。公平条件是 Vanilla-SLM 与 AudioSLM 采用同一 SmolLM2-135M 骨干，指标方向是幻觉错误率与插入错误率越低越好。下表整理了论文直接报告的核心数字，条件列固定为开发集 clean，指标列区分幻觉错误率与插入语境，数值保留原文写法。

| 条件 | 指标 | 基线模型 | 本方法 | 比较含义 |
| --- | --- | --- | --- | --- |
| 开发集 clean | 幻觉错误率 | 52.01% | 8.69% | 编造词占比大幅下降 |
| 开发集 clean | 插入错误语境 | 基线较高 | 本方法明显改善 | 与幻觉下降同向 |
| 开发集 clean | 正确率与替换删除 | 基线略优 | 本方法略有回退 | 总体质量的小代价 |
| 开发集 clean | 评估对象 | 普通语音语言模型 | AudioSLM | 同骨干可比 |
| 开发集 clean | 数据划分 | 训练 clean-100 | 训练 clean-100 | 同数据可比 |

上表的主要收益是幻觉错误率从 52.01% 降到 8.69%，并伴随插入错误的明显改善，论文用报告口径写出这一变化，支持两处新增模块共同压住了编造。具体代价是正确率、替换与删除略有变差，白话就是模型少编故事了，但听错与漏听没有同步变好，甚至轻微回退。这提醒初学者不要把幻觉指标当成总体指标：一个模型可以编得少但听得不更准。未胜出项必须保留：AudioSLM 没有在所有细粒度指标上同时取胜，总体识别优势主要体现在与传统结构和噪声集的比较中，而不是在干净集的每一项上都领先。

**幻觉错误率 × 词错误率：** 幻觉错误率分工是只计数对齐后无对应的编造词占参考词数的比例，词错误率分工是把替换、删除与全部插入一起计入总体转写质量；搭配原因是单一总体指标会掩盖编造与听错的区别，组合意义是既能看到 AudioSLM 是否少编故事，又能看到少编故事是否以听错更多词为代价。

在 LibriSpeech 测试集的词错误率层面，论文报告 AudioSLM 的 135M 版本优于 Vanilla-SLM 与传统连接时序分类、Transducer 与编解码结构，在 dev-other 与 test-other 上也优于大模型引导解码器，支持新结构对声学变化与背景噪声更鲁棒。随着骨干扩大到 1.7B，AudioSLM 相对其小规模版本与大模型引导解码器继续改进，验证了结构的可扩展性。但同一处也报告了反向扩展的限制，见下一节的第二张表，不能只记总体变好而忽略幻觉随规模回升。

### 骨干变大后幻觉是单调变好吗？

第二个比较问题是规模效应：骨干语言模型从小变大，幻觉是否一直下降。公平条件是固定 AudioSLM 结构与 LibriSpeech 评估集，只换 SmolLM2 的参数量，指标方向仍是幻觉错误率越低越好。下表把论文直接报告的逆扩展数字放在同一行，便于核对规模与幻觉的单调性，数值与单位保留原文写法。

| 条件 | 指标 | 135M 骨干 | 360M 骨干 | 1.7B 骨干 |
| --- | --- | --- | --- | --- |
| 开发集 clean | 幻觉错误率 | 8.69 | 10.64 | 12.76 |
| 开发集 clean | 骨干规模 | 135M | 360M | 1.7B |
| 开发集 clean | 模型结构 | AudioSLM | AudioSLM | AudioSLM |
| 开发集 clean | 总体词错误率趋势 | 基准 | 总体向好 | 总体更好 |
| 开发集 clean | 幻觉趋势 | 基准 | 回升 | 继续回升 |

表后解释必须同时写收益与反例。收益是总体词错误率随规模扩大而改进，大模型在干净与噪声集上都更准；代价是幻觉错误率（%）从 8.69 回升到 10.64 再到 12.76，呈现逆扩展，白话就是模型越大越会编通顺的句子。论文把这一现象与语音基础模型的已有观察联系起来，解释为更强的语言先验带来了更高的编造风险，但措辞上属于有限解释而非已验证因果。对初学者的启示是：选大骨干可以换来总体识别提升，但如果应用最怕编造，就不能只看词错误率，还要单独跟踪幻觉错误率。未评测边界是：该逆扩展只在开发集 clean 上给出数字，其他划分是否同趋势原文未报告，不能推广到全程成立。

### 哪个模块在因果上更关键，注意力行为支持什么解释？

消融要回答两个问题：拿掉哪一块幻觉回升更多，内部注意力呈现什么偏置。论文先用因果中介分析比较多头自注意力与多层感知机的贡献，做法是清零目标模块输出并保持其余结构不变，再看幻觉词生成概率下降多少，下降越多说明该模块对幻觉贡献越大。下图是该诊断的可视化，需要注意左右纵轴量程不同。

为比较模块贡献，先看清零实验给出的影响分数排序，再用注意力分布解释排序背后的行为差异。

> **看图路径：** 1. 先比较左侧普通模型中两根柱子的高度与标注数值；2. 再比较右侧 AudioSLM 中三根柱子的排序与数值；3. 注意左右纵轴量程不同，不要直接跨图比较柱子绝对高度

[![原论文 Figure 4：Comparison of influence scores for MHA and MLP modules, along with the cross-attention layer, for…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9de6e72c4a33/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9de6e72c4a33/figure-4.png)

*论文图 4。原论文 Figure 4：“Comparison of influence scores for MHA and MLP modules, along with the cross-attention layer, for (a) Vanilla- SLM and (b) AudioSLM.”。*

左图普通模型中多头自注意力的影响分数高于多层感知机，右图 AudioSLM 中多头自注意力仍然最高，其次是新增的跨注意力层，最后是多层感知机。右侧柱子上标注的具体数值仅用于排序教学，不建议跨图比较绝对高度，因为纵轴上限不同。解释段的结论是：自注意力模块比前馈模块对幻觉生成贡献更大，新增跨注意力层也承担了显著贡献，但仍排在自注意力之后。这一排序支持后文把注意力偏置作为主因，而不是把前馈记忆作为主因。

**因果中介分析 × 注意力权重分析：** 因果中介分析分工是通过清零某个模块再比较幻觉词概率下降多少来度量因果贡献，注意力权重分析分工是统计生成幻觉词与非幻觉词时分给音频与文本的平均权重；搭配原因是前者回答哪个模块更关键，后者回答关键模块在行为上如何偏置，组合起来把多头自注意力既定为最大贡献者又解释为文本偏置的执行者。

行为分析进一步看注意力权重。在普通模型的自注意力层中，对音频与文本 token 的平均权重按各自序列长度归一化后，非幻觉词呈现跨模态交错：浅层文本占优、深层音频占比上升；幻觉词则在所有块上都压倒性偏向文本，分配给音频的权重可忽略。论文明确把这一现象与视觉中物体幻觉的语言先验解释对齐，白话就是模型在编造时几乎不听声音，只跟着文字惯性往下编。

组件消融还报告：去掉跨注意力或去掉门控都会让幻觉错误率相对完整 AudioSLM 回升，且门控更针对插入错误、跨注意力更针对幻觉抑制，二者互补。原文未给出这两项消融的完整逐项数字表格，因此此处只能转述方向性结论，不能补写具体回升百分点。

### 哪些结论有边界，哪些量根本没有测？

论文的直接报告是：在 LibriSpeech-100 训练条件下，AudioSLM 降低了幻觉错误率并在噪声集上表现出竞争力。有限解释是：幻觉主要来自偏向文本的自注意力，更强的语言先验会加剧编造。未验证推测是：更大的语音基础模型必然更易幻觉，这一句话在本文只有开发集 clean 上的 3 个点支撑，没有覆盖全部噪声划分，也没有控制数据量与训练轮数的交互，因此只能写成可能与待验证。

缺失证据不是技术错误，但必须点名：原文未报告误判率的人工核验、解码延迟、训练显存与推理开销，也未报告输出帧率与实际延迟，训练资源、推理开销与延迟应分别讨论，不能从幻觉下降推定系统更快更便宜。总体趋势不等于每组每步成立：跨注意力在平均上压住幻觉，不等于每个样本都不再编造；门控在平均上减少插入，不等于每 1 帧的过滤都是正确的。对齐依赖也带来边界：如果参考与假设的对齐本身出错，幻觉计数会失真，而论文未量化对齐误差的影响。

### 要复现这篇工作，第一步先做什么？

复现应按学习依赖排序，先跑通基线再加模块。第一步复现 Vanilla-SLM：在 LibriSpeech train-clean-100 上训练 Whisper 编码器加连接器加 SmolLM2-135M 的基线，冻结语言模型主体并加入低秩适配，用 dev-clean 核对幻觉错误率与插入错误率的高位起点。第二步加入分类门控：在连接器上接线性与 Softmax 构成分类模块，用连接时序分类损失提供时间监督，再实现线性映射、深度卷积、拼接门控与门控线性单元，核对精炼音频 token 的形状与下采样率。

第三步加入跨注意力：在每个 Transformer 块的自注意力与前馈网络之间插入跨注意力，只放开该层参数训练，核对查询来自自注意力输出、键值来自音频 token。第四步复现诊断：实现清零干预的影响分数与分模态注意力统计，核对自注意力大于前馈的排序，以及幻觉词文本偏置的曲线形态。关键超参数与信息条件是：连接器下采样率为 4，训练 30 轮，余弦调度最大学习率 1e-4，推理波束为 5。

代码当前可用，可对照仓库核对结构，但权重下载与完整可运行状态需要自行确认，暂时不可达时应写本次未能确认可达，而不是默认可用。

### 何时值得尝试 AudioSLM，如何一句话记住它？

当任务是语音转写且最怕模型编造时，这篇工作值得尝试：它的核心动作不是换更大的语言模型，而是给小模型补两条回听声音的路，一条是分类对数提供的时间门控，另一条是每层都可执行的跨注意力。记住它的方式是：先对齐再数编造，先清零再定责任，先过滤冗余帧再强制对齐。复现时优先保证幻觉错误率与词错误率双指标跟踪，因为本文最强的证据恰好是双指标分叉：幻觉大幅下降而总体指标只换来竞争力与小代价。

还需要补的验证是：在噪声集与更大骨干上补全幻觉曲线，在真实部署中补延迟与成本测量，并用人工抽查核对对齐计数的可靠性。只有补完这些，才能把实验室的缓解结论搬到实际系统。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
