---
title: "LeanTTS: Efficient Full-Stack Bilingual TTS for Zero-Shot Cloning and Voice Customization"
date: 2026-10-27
draft: false
tags: [文本到语音, 模型压缩, 语音克隆, 多语言, 高效推理]
categories: [论文速递]
description: "LeanTTS 把中文发音前端、流匹配声学模型和 Vocos 声码器一起压缩到 18.9M 参数，用参考音频做零样本克隆、用说话人标签做固定音色定制，在 Seed-TTS-Eval 上验证了质量、相似度和 CPU 实时率之间的取舍。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.34408"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "LeanTTS：不到 20M 参数如何同时做零样本克隆和固定音色定制"
paper_digest_original_title: "LeanTTS: Efficient Full-Stack Bilingual TTS for Zero-Shot Cloning and Voice Customization"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.34408v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.34408v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.34408v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.compression","label":"模型压缩"},{"facet":"task","id":"task.voice-cloning","label":"语音克隆"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "模型压缩"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "LeanTTS 把中文发音前端、流匹配声学模型和 Vocos 声码器一起压缩到 18.9M 参数，用参考音频做零样本克隆、用说话人标签做固定音色定制，在 Seed-TTS-Eval 上验证了质量、相似度和 CPU 实时率之间的取舍。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuheng Lu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiulin Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xi Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shengpei Jiang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Liyin Liang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yifeng Qian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Longbiao Wang"}]
paper_digest_abstract_sha256: "70a2c91d779f36bb74069c003fecb82f53d5152f04ed444a10b045f195fa7523"
paper_digest_sidecars: {"citation.bib":{"sha256":"7368c895aaf474989d6ac08229a96a19477e2e06701ef67b7d6d2b6a8483fc64","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34408/citation.bib"},"citation.json":{"sha256":"277e24099d3fefb71f35236ccd04ac0e39a64fb13223339a3ac076ffe0fe634f","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34408/citation.json"},"citation.ris":{"sha256":"53dc501db32221ac122d612df0203659a1d4d3b4fa370e9fa87ba365eaadc2c1","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34408/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"b098fcb3578fae397597f8c165e614f316db886ce7f3bfc0326cb7fa298e4374","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34408/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "203cd96868a44654615b9420f67347d4363e50b83f67bbf10690bd5c6ecee46a"
paper_digest_api_reader_plan_sha256: "fd42e6965faad5e1200db0d5ee3dae600e871ee0a51592def8f552824ba0125c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "392e506b89fe6b604318ce313925b58bc12aafaa569b7ba860676390744f459e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "078e56c8864988797daafa2ecea36aa11d556130257ff8cc4dc5a79ac49e0d5e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a267166d390deb3541632931f6d5df145735671d90ac32627ce649c592957f6e"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "cecc63804e9268f8d4abbb5de426f1f6263b10a1c30af72abda7014c2a6d40b1"
paper_digest_api_reader_resource_count: 8
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 LeanTTS：不到 20M 参数如何同时做零样本克隆和固定音色定制

> 英文题目：*[LeanTTS: Efficient Full-Stack Bilingual TTS for Zero-Shot Cloning and Voice Customization](https://arxiv.org/abs/2610.34408v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[语音克隆](/audio-paper-digest-blog/papers/?concept=task.voice-cloning)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.5/1.5


## 👥 作者与机构

- Yuheng Lu：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiulin Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xi Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yang Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Shengpei Jiang：机构信息未能在本次解析中与作者逐人可靠绑定
- Liyin Liang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yifeng Qian：机构信息未能在本次解析中与作者逐人可靠绑定
- Longbiao Wang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是输入一段中英文文本、输出24 kHz波形的可部署合成栈，困难在于常见零样本系统体积大、依赖参考音频和云端计算，难以放在车机或嵌入设备上本地运行。中英文文本先经各自前端转为发音标记，其中紧凑的普通话多音字前端只对模糊字调用两层上下文编码器并只打分候选读音，输出的发音标记与起始位置说话人标签联合编码为文本条件。压缩后的流匹配声学模型以该文本条件预测梅尔谱，未见说话人时叠加参考语音作为声学提示仿制音色，常用定制音色则在训练中逐步去掉声学提示以便推理时只用标签选择。梅尔谱再送入压缩后的Vocos声码器重建波形，四步MeanFlow接续检查点把迭代次数从16步降到4步。与136.2M参数的ZipVoice-Vocos全链路相比，LeanTTS-13M在Seed-TTS-Eval中文测试上零样本克隆取得2.02%字错率和62.3相似度，参数减少86.12%，同时暴露了相似度损失。结论适用于中英双语、本地CPU推理和少量高频定制音色，物理手机芯片和更大音色集合尚未验证。原文披露了推理侧部署成本，四步模型在Apple M5单线程CPU上平均实时率为0.049。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/notlu/leantts> — 链接可访问（HTTP 200）

- 演示资源：<https://github.com/notlu/leantts> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/uer/roberta-tiny-wwm-chinese-cluecorpussmall> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/openai/whisper> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/R1ckShi/SeACo-Paraformer> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/microsoft/UniSpeech/tree/main/downstreams/speaker_verification> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/sarulab-speech/UTMOS22> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/alibaba/MNN> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的合成任务是什么

论文处理的是中英双语的文本到语音合成，输入是一段中文或英文文本，目标是输出自然、可懂且像指定说话人的语音。必须保留的信息有 3 类：文本的发音内容不能读错，目标音色要保持一致，语速和停顿要符合语言习惯。输出是 24 kHz 波形，可以直接播放。

对于刚接触语音合成的读者，需要先区分两种用法。一种是零样本克隆，推理时给一段没见过说话人的参考音频，系统模仿他的音色读新句子；另一种是固定音色定制，训练时已经为 8 个常用说话人各准备了约 300 小时中文加 300 小时英文数据，推理时只给一个说话人标签，不需要任何参考音频。前者考验泛化，后者考验稳定复用。

评价围绕 3 个维度。中文用字错率描述可懂度，英文用词错率描述可懂度，数值越低越好；说话人相似度是合成语音和提示音频经 WavLM-Large 加 ECAPA-TDNN 提取的说话人向量的余弦相似度，越高表示越像；自然度用 UTMOS22 模型打分估计，越高越好。效率用可学习参数量和实时率衡量，实时率是合成耗时除以音频时长，越低越快。

系统级结果看原文 Table 1 的 Seed-TTS-Eval 对比，它严格区分 Zero-shot voice cloning 和 Preset/fixed-voice synthesis 两个带。13M-MF 同为 4 步 18.898M，零样本中文 2.02/62.3/2.41、英文 2.32/48.3/3.12，预置模式中文 1.57/77.2/3.03、英文 1.93/76.6/4.33，顺序都是可懂度、相似度、自然度。声码器重建的 UTMOS 3.7466 等属于原文 Table 4 的 LibriTTS test-clean 结果，不能误认成系统结果。

### 已有轻量化和零样本路线各自缺了什么

已有工作大致分两条路线。一条是轻量化合成，做法包括更小的网络结构、神经结构搜索、流式合成和高效声码器，优点是部署便宜，但多数只做固定说话人、单音色或单语，灵活性有限。另一条是零样本合成，例如 ZipVoice、CosyVoice3 等系统，可以用参考音频适配未见说话人并支持多语，但通常有数亿甚至数十亿参数，难以放在车机或嵌入式设备上本地运行。

论文明确指出部署成本取决于完整链路，而不只是声学模型。中文需要处理多音字的前端，英文需要英文前端，中间需要声学模型把符号变成梅尔频谱，最后需要声码器把频谱变成波形。如果只压缩声学模型，前端和声码器仍会占用内存和耗时，整体实时率上不去。

因此比较时要按相同条件分组。零样本克隆只能和同样使用参考提示的 ZipVoice、CosyVoice3、Spark-TTS、MOSS-TTS-Nano 比较，固定音色只能和同样不需要参考音频的 Matcha-TTS、Inflect-Micro-v2 比较。原文 Table 1 中 LeanTTS-25M 为 16 步 30.557M，LeanTTS-13M-FM 为 16 步 18.898M，LeanTTS-13M-MF 为 4 步 18.898M，NFE 和总推理链 Params 都在同一源表内给出。论文还说明在有完整部署尺寸统计的公开系统中，没有找到同时报告双语零样本克隆且小于 100M 参数的基线，所以跨组直接排名并不公平。

### 压缩整条链路难在哪里

难点首先在中文多音字。同一个汉字在不同词语中读音不同，必须看上下文才能选对拼音和声调。如果前端选错，后续声学模型再强也会读错字，直接推高字错率。传统做法是对全部 659 种全局发音建大分类头，参数多且每次都要算全部候选。

难点其次在声学模型。教师模型有 122.7M 参数，解码器有 5 个阶段，块数是 2、2、4、4、4，宽度是 512，文本编码器是四层。如果直接按比例缩小，音色相似度和可懂度会明显下降，需要找到既保留下采样结构又能继承教师参数的裁剪方式，还需要恢复训练把性能拉回来。

难点最后在步数。流匹配通常需要十几步求解常微分方程，每步都要过一次大解码器。如果把步数直接减到四步而不改变训练目标，轨迹误差会累积，合成会含糊或断裂。如何在保持流匹配形式的同时让四步生成可用，是减少延迟的关键。

### LeanTTS 的完整推理链路是怎样的

从一个样本看完整过程。假设输入是说话人标签加中英混合文本，例如标签加 Hello 加大家好。系统先按语种分流，英文跨度走英文前端，中文跨度走中文前端，标签不经过字音转换，直接和发音符号拼成长度为 n 的符号序列 t1 到 tn。

符号序列进入三层 Zipformer 块组成的文本编码器，得到文本嵌入，再经过平均上采样拉长到与语音帧对齐的长度，形成对齐文本条件。在预置音色模式下，这个条件已经包含了说话人信息，语音条件位置填零；在零样本模式下，还会拼接参考语音的声学条件。对齐条件、带噪语音和语音条件在拼接点汇合，进入解码器。

**参考提示 × 说话人标签：** 参考提示指推理时额外输入一段目标说话人的音频和对应文本，模型从中抽取音色再合成新文本；说话人标签指词表里 ID 为 360 到 367 的八个特殊符号，放在输入首位代表某个训练中见过的常用音色。两者分工不同：前者覆盖未见过的说话人但需要音频，后者不需要音频但只覆盖训练过的八个音色，组合起来让同一套声学模型同时支持开放克隆和稳定复用。

解码器输出梅尔频谱，再经压缩后的 Vocos 变成波形。常微分方程求解器负责多步迭代，每次迭代更新带噪语音状态，直到得到清晰频谱。下图展示的正是这条预置音色路径和声学模型内部结构，阅读时重点看 3 条输入如何汇合、文本条件从哪里进入解码器、时间条件如何控制求解。

下面这张图是理解全文结构的关键，它把前端分流、编码器、平均上采样、5 段解码器和求解器循环画在了一起，请按输入到输出的顺序观察各模块的连接关系。

> **看图路径：** 1. 先从左上输入框沿蓝色箭头看英文前端、中文前端和说话人 ID 如何汇成符号序列；2. 再看文本编码器到平均上采样再到拼接点的对齐文本条件路径；3. 对照下方解码器中 50 Hz 到 12.5 Hz 再回到 50 Hz 的五段结构和当前时间与目标时间输入；4. 最后看常微分方程求解器到生成语音再迭代回 noisy speech 的循环箭头

[![原论文 Figure 1：Bilingual preset-voice inference and acoustic-model architecture of LeanTTS.](https://arxiv.org/html/2610.34408v1/overview3.png)](https://arxiv.org/html/2610.34408v1/overview3.png)

*论文图 1。原论文 Figure 1:：“Bilingual preset-voice inference and acoustic-model architecture of LeanTTS.”。*

从图中可以直接看到，顶部 3 个并列框分别处理英文文本、中文文本和说话人编号，汇成符号序列后经过文本编码器和平均上采样，向下进入拼接点。下方灰色大框是解码器，内部按 50 Hz、25 Hz、12.5 Hz、25 Hz、50 Hz 排列，每段标了下采样或上采样与 Zipformer 块数量。底部有两个时间输入，分别标为当前时间 t 和目标时间 r，右侧是常微分方程求解器，输出生成语音并通过迭代状态更新箭头返回左侧的带噪语音输入，形成循环。这种画法帮助理解为什么文本条件和时间条件是解码器的两类独立控制信号。

### 中文多音字前端如何只算必要的候选

中文前端只对模糊的多音字启动上下文建模。确定性规则先给出候选读音，不在 552 个多音字表中的字直接保留规则结果，不进神经网络。对于模糊位置，系统取最多 42 个汉字、以目标字为中心的窗口，用两层上下文编码器得到 128 维表示。

关键在于候选槽设计。模型保留一个 659 乘 128 的共享发音库，但不计算全部 659 个逻辑值，而是用一个 552 乘 6 的固定候选索引缓冲，为目标字取出最多 6 个合法读音对应的行，无效槽用掩码去掉。6 维全局槽、字符和字符加词性三项再调节局部逻辑值，同时一个词性分类器提供辅助句法监督。结果再经过确定的变调处理，转成声学模型符号。完整候选槽结构只有 3.3M 可学习参数。

这种做法的代价是上下文编码器从 8 层 512 维降到 2 层 128 维，整体准确率会轻微下降。但好处是发音头和字符条件参数大幅减少，且每次只在最多 6 个候选内打分，而不是在全局 659 类上打分，适合端侧部署。

### 声学模型的结构压缩保留了什么

声学压缩从教师模型的深度和宽度两方面入手。25M 配置把解码器块数从 2、2、4、4、4 减到 1、2、3、2、1，模型宽度和前馈宽度从 512 和 1536 降到 384 和 384，文本编码器从四层降到三层，宽度保持 192，前馈降到 384，总量 25.1M 参数。13M 配置保持同样的块数和编码器层数，但解码器宽度进一步降到 256 和 256，总量 13.3M 参数。两种学生都保留教师的分阶段下采样因子，因此多分辨率结构不变。

通道选择按输入输出范数加偏置来衡量重要性，只保留得分最高的通道，并在耦合投影间保持一致，兼容的参数直接从教师继承，得到的仍是规则稠密网络，不是稀疏网络。

\[s_{j}=\lVert W_{\mathrm{in}}[j,:]\rVert_{2}^{2}+\lVert W_{\mathrm{out}}[:,j]\rVert_{2}^{2}+b_{j}^{2}.\]

上式计算每个可裁剪隐藏通道的重要性，其中输入权重行范数、输出权重列范数和偏置平方相加，得分高的通道被保留。这样做保留了教师学到的投影方向，避免随机初始化从头训练，同时让宽度裁剪有明确依据。

**文本编码器 × 声学解码器：** 文本编码器把发音符号序列变成带语义和发音信息的文本条件，声学解码器以该条件为依据把噪声变成梅尔频谱。编码器只看文本和说话人标签，解码器同时看文本条件、带噪语音和时间，组合后实现了文本到频谱的对齐和声学细节生成。

### 四步生成和声码器分别做了什么

恢复后的 13M 模型再经过固定网格展开蒸馏。推理网格固定为从 t 等于 1 的噪声到 t 等于 0 的数据、步长 0.25 的 4 个区间。每个区间学生预测一个平均速度，并按当前状态减去区间长度乘以平均速度得到下一状态，一次网络前向代替教师在该区间上的整段轨迹，而不是拟合瞬时速度。

\[z_{r}=z_{t}-(t-r)u_{\theta}(z_{t},t,r,c).\]

上式中 zt 是当前带噪状态，r 是目标时刻，u 是学生预测的平均速度，c 是文本和说话人条件。训练只采样这 4 个区间，并混合干净状态和学生自己滚出的带停止梯度的状态，逐步把自举概率提高到 0.5，让学生见过累积误差。从该状态出发，教师做八步浮点欧拉展开得到目标，再用掩码均方误差只在有效生成帧上学习，提示帧和填充帧保持固定。

**流匹配 × 平均速度：** 流匹配指学习从噪声到梅尔频谱的连续变换速度场，推理时用多步常微分方程求解器逐步去噪；平均速度指 MeanFlow 在一个时间区间起点和终点之间要拟合的平均变化方向。两者搭配的意义是把原来需要拟合瞬时速度的多步轨迹，改为直接拟合区间平均速度，从而用四次网络前向代替十六次前向。

声码器保留八块结构和 100 维梅尔到 24 kHz 波形的接口，只把主干宽度从 512 降到 192，中间宽度从 1536 降到 576，得到 2.1M 参数的紧凑 Vocos，用对抗、特征匹配和多分辨率频谱目标重新训练。加上 3.3M 前端，25M 链路共 30.6M 参数，13M 链路共 18.9M 参数，比 136.2M 的 ZipVoice 加 Vocos 链路减少 86.12%。

**梅尔频谱 × 波形：** 梅尔频谱是声学模型输出的时频中间表示，保留了音素、韵律和音色包络，波形是最终可播放的 24 kHz 采样信号。声学模型负责文本到频谱的映射，Vocos 声码器负责频谱到波形的重建，两段分工让压缩可以分别在语言建模和信号重建上进行。

### 教师引导恢复训练如何分阶段进行

结构迁移后，学生先用教师引导加真实条件流匹配目标逐步恢复。恢复损失是两项加权求和，蒸馏项让学生模仿教师的速度场，真实数据项让学生拟合数据目标。训练中蒸馏权重从 1.0 降到 0.2，真实数据权重从 0 升到 1.0，先恢复教师行为再适应数据，之后继续只用真实流匹配训练。

\[\mathcal{L}_{\mathrm{recover}}=w_{\mathrm{KD}}\mathcal{L}_{\mathrm{vKD}}+w_{\mathrm{GT}}\mathcal{L}_{\mathrm{CFM}}.\]

上式中恢复损失由蒸馏损失和条件流匹配损失组成，权重随训练推进而变化。这种先重后轻的安排意图是给压缩初始化一个更好的起点，而不是一开始就完全依赖数据。

**教师模型 × 学生模型：** 教师模型指 122.7M 参数的原始 ZipVoice 结构流匹配模型，学生模型指按深度和宽度裁剪后的 25.1M 和 13.3M 模型。教师提供软目标和参数初始化，学生继承重要通道并继续训练，组合后让小模型先恢复大模型行为再适应真实数据。

声学模型在 Emilia 的中英文数据上训练，13M 检查点同时学习 8 个预置说话人标签，训练时对带标签样本逐步去掉参考语音声学条件但保留文本条件，从而实现只用标签推理。每个预置说话人约有 300 小时中文和 300 小时英文训练语音。紧凑 Vocos 在约 2245 小时 24 kHz 音频上训练，前端按 CVTE-Poly 基准用 CPP 和 CVTE-Poly 训练、用精修 CPP 测试集评估。

### 实验在什么数据和指标下比较

零样本评估用 Seed-TTS-Eval，包含中文测试集和英文测试集。可懂度用自动语音识别转写再算错字或错词率：英文用 Whisper large-v3 转写算词错率，中文用 SeACo-Paraformer Large 转写算字错率。说话人相似度用 WavLM-Large 前端加 ECAPA-TDNN 说话人模型提向量再算余弦相似度，自然度用 UTMOS22 强学习器估计。效率报告可学习参数量和平均与 90 分位实时率，越低越快。

前端按总体准确率、字符宏平均准确率和字符加发音宏平均准确率评估。声码器独立于声学模型，在 LibriTTS test-clean 上用 UTMOS、ViSQOL、PESQ、浊清音 F1 和周期性误差评估重建质量。时延在 MacBook Pro、Apple M5 十核、16 GB、macOS 26.5、纯 CPU 单线程、PyTorch 2.8.0 条件下测全部 2020 条中文测试 utterance，四步推理，紧凑 Vocos 用去量化的 INT8 检查点。另把四步 13M 链路导出到 MNN 移动推理框架并在安卓模拟器里跑通。

基线按条件分组，零样本组对比 ZipVoice、CosyVoice3、Spark-TTS、MOSS-TTS-Nano，固定音色组对比 Matcha-TTS 和 Inflect-Micro-v2。13M 有两个检查点：16 步的流匹配版和继续训练得到的 4 步 MeanFlow 版，分别评估。

### 完整系统在双语零样本和定制音色上表现如何

这张表要回答完整链路在相同 Seed-TTS-Eval 条件下的质量与尺寸取舍，分为参考提示的零样本克隆带和标签驱动的预置音色带分别比较。中文可懂度用 CER 且越低越好，英文用 WER 且越低越好，相似度和 UTMOS 越高越好，同时给出推理步数和整条链路的可学习参数量。

| Model | NFE | Params | ZH CER | ZH SIM | ZH UTMOS | EN WER | EN SIM | EN UTMOS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZipVoice zero-shot | 16 | 136.196M | 1.42 | 75.2 | 3.16 | 1.67 | 69.6 | 3.83 |
| LeanTTS-25M zero-shot | 16 | 30.557M | 1.52 | 65.2 | 2.62 | 1.75 | 52.3 | 3.32 |
| LeanTTS-13M-FM zero-shot | 16 | 18.898M | 1.99 | 61.2 | 2.43 | 2.29 | 47.4 | 3.17 |
| LeanTTS-13M-MF zero-shot | 4 | 18.898M | 2.02 | 62.3 | 2.41 | 2.32 | 48.3 | 3.12 |
| LeanTTS-13M-FM preset | 16 | 18.898M | 1.56 | 76.7 | 3.11 | 1.88 | 75.3 | 4.34 |
| LeanTTS-13M-MF preset | 4 | 18.898M | 1.57 | 77.2 | 3.03 | 1.93 | 76.6 | 4.33 |

从表中可以看到，四步 18.898M 的 LeanTTS-13M-MF 在零样本下中文为 2.02、62.3、2.41，英文为 2.32、48.3、3.12，相对 136.196M 的 ZipVoice 相似度下降明显，说明激进压缩的代价主要在音色相似度上。同一模型切到预置标签模式后中文变为 1.57、77.2、3.03，英文变为 1.93、76.6、4.33，相似度分别提高约 14.9 和 28.3 个点，且推理时不需要参考音频。25M 版本零样本为中文 1.52、65.2、2.62 和英文 1.75、52.3、3.32，可作为容量稍大的参考点。该结论只在 Seed-TTS-Eval 自动指标和 8 个学过说话人的预置条件下成立。本表数值与单位依据论文原表。

### 速度提升主要来自声学模型还是声码器

这张表要回答延迟分解问题：在四步推理下，把原始 Vocos 换成紧凑 Vocos 能快多少，把声学模型换成 LeanTTS 又能快多少。指标是平均实时率和 90 分位实时率，数值越低越快，测试条件是同一台 M5 CPU、同一批 2020 条中文 utterance。

| Acoustic model | Vocoder | NFE | Mean RTF ↓ | P90 RTF ↓ |
| --- | --- | --- | --- | --- |
| ZipVoice-distill | Original Vocos | 4 | 1.6975 | 2.2617 |
| ZipVoice-distill | Compact Vocos | 4 | 1.6190 | 2.1540 |
| LeanTTS-25M | Compact Vocos | 4 | 0.0610 | 0.0720 |
| LeanTTS-13M | Compact Vocos | 4 | 0.0490 | 0.0610 |

表中可见，ZipVoice 蒸馏版配原始声码器平均实时率为 1.6975，换紧凑声码器后为 1.6190，90 分位从 2.2617 降到 2.1540，只是小幅提升。而 LeanTTS-25M 配紧凑声码器直接降到 0.0610 和 0.0720，LeanTTS-13M 进一步降到 0.0490 和 0.0610，说明主要加速来自声学模型变小。论文还报告把 LeanTTS-25M 导出到 MNN 并在安卓模拟器端到端跑出 0.0327 实时率，但这是在模拟器中的结果，不能直接视为真机芯片上的延迟，作者也指出真机验证仍是未来工作。

### 前端、声码器和教师引导各自带来什么代价

前端表要回答候选槽设计是否在减少参数的同时保持多音字准确率。指标是总体准确率和两种宏平均准确率，越高越好，同一评估协议下比较紧凑全局头和 8 层 512 维大模型。

| Front end | Overall ↑ | Acc.avg.p ↑ | Acc.avg.pp ↑ |
| --- | --- | --- | --- |
| Candidate-slot G2PW | 98.0631 | 97.5011 | 94.2679 |
| Compact global-head G2PW | 98.1527 | 97.5377 | 94.5919 |
| Global-head G2PW (8L/512) | 98.7125 | 98.3513 | 96.4304 |

表中候选槽结构总体准确率为 98.0631%，紧凑全局头为 98.1527%，大模型为 98.7125%，说明从 8 层降到 2 层有中等下降，但候选槽与紧凑全局头基本相当，同时只对最多 6 个候选打分，避免了全局 659 类的大头。这支持了前端压缩的可行性，但仅限于精修 CPP 测试集条件。

声码器表要回答把 13.5M 压到 2M 的重建代价，指标在 LibriTTS test-clean 上独立于声学模型测量。

| Vocos | UTMOS ↑ | ViSQOL ↑ | PESQ ↑ | V/UV F1 ↑ | Period. ↓ |
| --- | --- | --- | --- | --- | --- |
| 13.5M FP32 | 3.7466 | 4.6584 | 3.6675 | 0.9585 | 0.1007 |
| 2M FP32 | 3.5116 | 4.5365 | 3.3723 | 0.9497 | 0.1203 |
| 2M INT8 | 3.1921 | 4.3623 | 3.1963 | 0.9405 | 0.1339 |

表中浮点 2M 版相对 13.5M 版 UTMOS 从 3.7466 降到 3.5116，ViSQOL 从 4.6584 降到 4.5365，PESQ 从 3.6675 降到 3.3723，浊清音 F1 和周期性误差也变差，INT8 量化后进一步下降到 3.1921、4.3623 和 3.1963，但部署体积更小。说明波形质量与部署成本之间是明确取舍。本表数值与单位依据论文 PDF。

教师引导的消融在相同结构、数据和步数下对比只用真实流匹配与教师引导恢复。在 250,000 步时两者接近，到 30 万和 500,000 步时教师引导在英文词错率、中文字错率和双语相似度上同时更好，表明教师引导主要提供更好的恢复起点，优势在继续训练后才显现，而不是一开始就大幅领先。

### 这些结论在什么范围内才成立

首先是基线可比性。论文说明没有找到小于 100M 且同时报告双语零样本的完整基线，所以紧凑双语零样本的优势是在与大得多的零样本系统和单语小系统分别比较下得出的，不能理解为在所有条件下全面超越。预置音色的高相似度依赖于每个说话人各 300 小时的中英文训练数据，且只评估了 8 个学过的说话人，换成数据少或未见说话人时不适用。

其次是指标与设备。字错率、相似度和 UTMOS 都是模型估计，自动指标不等于人工评价；时延只在 Apple M5 CPU 单线程和安卓模拟器上测量，没有在真实手机芯片上验证，不同硬件、线程数和量化方式下实时率会变化。INT8 声码器虽然体积小，但重建指标已下降，能否满足产品音质需要人工试听确认。

最后是语言覆盖。实验只覆盖中文和英文，没有验证更多语种和口音，8 个定制音色的结论也不能推广到任意音色数量。论文结尾也明确把真机验证和更广多语验证列为未来工作。

### 复现第一步应该做什么

复现应先按链路准备三部分。前端按 CVTE-Poly 流程准备 CPP 和 CVTE-Poly 数据，复现 42 字窗口、两层编码器、552 字和 659 标签、每字最多 6 候选的候选槽逻辑；声学部分从 122.7M 教师结构出发，按 1、2、3、2、1 块数和对应宽度裁剪并按范数选通道继承参数；声码器按八块保留、宽度 192 和 576 重训，并保持 100 维梅尔和 24 kHz 接口一致。

训练顺序不要颠倒：先做教师引导恢复，蒸馏权重从 1.0 降到 0.2、真实数据权重从 0 升到 1.0，再只用真实流匹配继续训练，最后在固定四步网格上做展开蒸馏，自举概率渐增到 0.5，教师用八步浮点欧拉给出目标，且只在有效帧上算掩码均方误差。评估时严格区分参考提示和标签两种条件，用 Whisper large-v3 测英文词错率、SeACo-Paraformer Large 测中文字错率、WavLM 加 ECAPA-TDNN 测相似度、UTMOS22 测自然度。

关于资源，论文正文给出的是第三方工具链接和演示链接，证据显示演示链接当前可达，但第三方链接只能证明论文提到了该地址，不能证明作者已开源权重或完整训练代码。需要补的验证包括真机延迟、人工听感对比和新说话人小数据定制，因此值得尝试的场景是需要在本地 CPU 实时运行且能接受相似度下降的双语个人助手，而不是追求最高保真度的云端克隆。

### 什么时候值得尝试 LeanTTS

当部署预算卡得很紧、必须在 CPU 上实时出双语语音，且有若干高频使用的固定音色时，LeanTTS 的标签模式值得尝试：同一 18.9M 链路四步即可达到中文 1.57 字错率和 77.2 相似度、英文 1.93 词错率和 76.6 相似度，平均实时率 0.049，不需要推理时上传参考音频，适合车机和嵌入式本地合成。

当目标是模仿任意未见说话人时，需要接受取舍：四步 13M 零样本在中文 2.02 和 62.3、英文 2.32 和 48.3 的水平上可用，但相似度明显低于大模型，25M 版本可作为质量稍高的备选。教学例子可以这样记：把标签模式理解为给常客做固定工牌，进门亮牌就行；把零样本模式理解为给陌生人看照片模仿，前者稳但只认 8 个人，后者灵活但像得不够透。

容易产生的误解是把参数减少 86.12% 理解为全面超越，或把模拟器上 0.0327 实时率当成手机实测。原文支持的表述是：在 Seed-TTS-Eval 自动指标和 M5 CPU 条件下，系统建立了一个 sub-20M 的可用工作点，质量、尺寸和延迟之间仍是取舍关系，人工评价、真机和多语泛化都有待补充。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.34408v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
