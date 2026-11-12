---
title: "Swanada: Split-Encoder Capability-Routed Conformer CTC and Sub-30 MB On-Device Speech Recognition Across Twelve Scripts"
date: 2026-11-12
draft: false
tags: [语音识别, 知识蒸馏, 模型量化, 流式处理]
categories: [论文速递]
description: "Swanada 用一个共享 Conformer 编码器加十二个可热切换的小输出头解决多语模型存不下的问题，再用蒸馏小模型和稳定的流式显示在手机浏览器里做实时识别，Studio 版本在干净集上字符错误率 5.43%、开放集 8.87%，代价是小模型在混响和多人重叠时误差明显上升。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.13814"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "十二种文字的浏览器端语音识别：Swanada 如何拆开编码器与输出头"
paper_digest_original_title: "Swanada: Split-Encoder Capability-Routed Conformer CTC and Sub-30 MB On-Device Speech Recognition Across Twelve Scripts"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.13814v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.13814v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.13814v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "Swanada 用一个共享 Conformer 编码器加十二个可热切换的小输出头解决多语模型存不下的问题，再用蒸馏小模型和稳定的流式显示在手机浏览器里做实时识别，Studio 版本在干净集上字符错误率 5.43%、开放集 8.87%，代价是小模型在混响和多人重叠时误差明显上升。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hemanth HM"}]
paper_digest_abstract_sha256: "8a9794dfb4f9b881d1a0174c8fe6d945eff81f19927e6f17e41b58ca58bf991d"
paper_digest_sidecars: {"citation.bib":{"sha256":"336f00342decdf814076945973c7ebdc47d195b28a3da820a48d99790bc0ab19","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13814/citation.bib"},"citation.json":{"sha256":"8e0a812831baddac3f51a05386d2d7181be2d76ea5088532d37a3bcc53b34ad2","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13814/citation.json"},"citation.ris":{"sha256":"e0154c88321dd5d5647151c8708edc87d112c48b9d1761a72c904d48e96f686a","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13814/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"793e1c09320b8b0a0fe95702b7c7c4d9bdc6417bb6fd4aed8c3cafdf68808ef8","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13814/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "334936e4ceec82f7dbe60976eca55d2e416fcc46f0d47eb38a29c8720f18377a"
paper_digest_api_reader_plan_sha256: "f26da3402af43da49ebbd678d2c2fc681f339620532583477976b7326204165d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "deaab0747c3fac4d2fc5c611a2702cf5ae3d2036d120190263989f2c4897d5f0"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "d9cab6a5dfcf267be08a0582234a567a43189c9a9ed1fd00d68cb48f11bce2d5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0776f20a4cf4a303b31b13a45cc46786c4ddcaa77ae41c180ae86a76e522826e"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0941d26a2c3de00ad81dc2fbf099951d0527828a76178808269242d5908e02f6"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 十二种文字的浏览器端语音识别：Swanada 如何拆开编码器与输出头

> 英文题目：*[Swanada: Split-Encoder Capability-Routed Conformer CTC and Sub-30 MB On-Device Speech Recognition Across Twelve Scripts](https://arxiv.org/abs/2611.13814v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [模型量化](/audio-paper-digest-blog/papers/?concept=method.quantization)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Hemanth HM：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

该工作处理浏览器和手机本地的语音到文字任务，输入是麦克风采集的连续语音，输出是十二种文字体系的本地转写。难点在于多语模型体积过大、浏览器算子缺失、量化后精度漂移以及流式显示闪烁。系统先用共享声学编码器提取语音的高维帧表示，输出送入单语线性映射头得到字符后验。再按用户所选语言切换体积很小的对应映射头，使解码只在当前语种内进行，避免跨文字体系混出。最后面向手机把编码器蒸馏为更浅更窄结构，把相对位置编码改成按当前长度即时合成，把逐点卷积改写成矩阵乘法以适配浏览器加速，再用真实量化特征重新校准映射头。在 480 条隔离录音构成的 held-out 集上，桌面档达到平均字符错误率 5.43%，在 960 条十二语未见公开测试上为 8.87%，在 1280 条十六套全量公开测试上为 12.06%，四线程中央处理器实时率为 0.0264 倍，流式中位首字时延约 30.6 毫秒且已确认前缀零改动。结论适用于相对干净的朗读和单人语音，强混响、多人重叠和自发会议仍是失效区，原文披露了模型体积、线程配置和端侧时延，没有披露完整训练算力开销。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/hemanth/swanada> — 链接可访问（HTTP 200）

- 第三方资源：<https://h3manth.com> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要在浏览器里完成识别，输入输出和约束是什么

Swanada 要做的任务是客户端自动语音识别。输入是 16000 Hz 单声道 PCM 音频，可以来自麦克风或文件，目标是直接在浏览器标签页、Node.js 或本地 Python 进程里输出对应语言的文字，不把麦克风音频传到远端服务器。

输出必须保留本地文字的写法，覆盖古典梵语、印度英语和 10 种印度语言，一共 12 种文字，包括天城体等婆罗米系文字和拉丁拼写。评价用字符错误率 CER 和词错误率 WER，数值越低越好，同时看实时率 RTF，数值越小表示相对实时音频越快，还看流式首字延迟和已显示文字是否回改。

约束很具体：手机浏览器内存和缓存配额有限，网络多是按量计费的蜂窝网络，音频采集常被系统锁定在 44.1 kHz 或 48 kHz，还可能在后台被挂起。论文因此把能否装进 30 MB 以内、能否在 WebAssembly 里用上快速量化内核、能否在 100 毫秒内给出稳定的局部结果，都当作和识别精度同等重要的目标。

### 已有路线为什么没有直接解决十二种文字的端侧部署

论文把相关工作分成两条线。第一条是多语语音识别本身：Conformer 把自注意力和深度卷积结合起来，Whisper 和大规模多语模型把语言数扩到几十到上千种，面向印度语言的 Vistaar 与 Sushrota 等工作建立了服务端基线。这些模型的运行形态多是单体检查点，单个模型就达到 180 MB 到 600 MB 以上，而且自回归解码器在噪声下可能出现循环，需要较强算力。

第二条是知识蒸馏与浏览器语音系统：用教师输出分布和中间表示指导学生，以及 whisper.cpp、Transformers.js、sherpa-onnx 等把量化模型带到 WebAssembly。论文提到 Ninada 把运行时二进制切图和能力路由用于语音合成，而 Swanada 把类似思路用于 16 kHz 流式识别。

本文与它们的区别不在提出新的声学理论，而在系统切分方式：不把 12 种文字混在一个几千类的大输出层里，也不为每种语言各存一个大模型，而是共享一个声学编码器，再为每种语言配一个很小的输出头。比较时要注意运行阶段是否相同，服务端大模型的精度不能直接等同于浏览器量化流式条件下的精度。

### 四个系统瓶颈各自卡住了什么

第一个瓶颈是整机存储和联合词表之间的两难。如果每种语言存一个量化 Conformer-Large，按论文的算法需要 12 乘 177.38 MiB，合计 2128.5 MiB，远超移动浏览器缓存。如果把 12 种文字并成一个超过 3000 类的输出层，每帧的输出投影计算量会放大约 12 倍，而且在噪声帧容易漏出别的文字的字符。

第二个瓶颈是导出产物膨胀和算子支持。标准 Conformer 导出的相对位置编码静态表在 512 维时约 20.48 MB，即使 256 维也要约 10.24 MB，占掉 30 MB 预算的三分之一以上。同时 macaron 块里的 1x1 逐点卷积如果按卷积导出，量化后可能变成缺少快速 WebAssembly 内核的算子，只能留在浮点运行。

第三个瓶颈是压缩后的特征漂移。把 115.2M 参数的教师压成 30 MB 以内的小模型并做动态 INT8 量化后，顶层隐状态的范数和方向会偏移，原来训练好的线性输出头决策边界不再对齐。

第 4 个瓶颈是流式显示和采集。有界窗口评估会在右文到来时让尾部子词来回闪烁，移动端则面临采样率不匹配和 AudioWorklet 静默停顿。这些都是部署时真实会遇到的工程问题，不是单纯换更大的模型能解决的。

### 整体流程如何把一路音频变成稳定的文字流

对一个语音样本，流程从 44.1 或 48 kHz 硬件音频开始，先在 AudioWorklet 内重采样到 16 kHz PCM，再经过因果增强、高通与陷波滤波和 Wiener 抑制，随后提取 80 通道对数梅尔滤波器组特征。论文给出的是 25 ms 窗、10 ms 跳、80 到 7600 Hz 范围，并做按句方差归一化。

特征经过 2 级步长 2 维卷积前端做 4 倍时间下采样，帧率变为 40 ms 1 帧，再进入 Conformer 堆叠和最后的层归一化 layer_norm_84，得到共享表示。运行时按用户选择的语言只加载一个 515.0 KiB 输出头做帧级映射，经贪心 CTC 解码得到文字，流式稳定器再决定哪些字可以确认显示。

能力路由在最外层做分流：内存小或隔离受限的手机走 25.35 MiB 移动档，桌面和服务端走 177.38 MiB 演播室档。下图把蒸馏、切图和多文字解码放在一张流程里，读图时先看清教师如何教学生，再看学生如何被切出共享表示，最后看表示如何交给输出头。

> **看图路径：** 1. 先沿左侧教师到中间学生再到右侧输出头的箭头看主路径；2. 再看黑色 4 损失对齐块里标注的四项损失；3. 再看中间切图块标注的层名与耗时

[![原论文 Figure 1：Swanada split-encoder decomposition and cross-capacity distillation: the 17-layer Studio…](https://arxiv.org/html/2611.13814v1/fig1_split_encoder_distillation.svg)](https://arxiv.org/html/2611.13814v1/fig1_split_encoder_distillation.svg)

*论文图 1。原论文 Figure 1:：“Swanada split-encoder decomposition and cross-capacity distillation: the 17-layer Studio Conformer-Large (d=512, 177.38 MiB QInt8) distills into a 14-layer Mobile Conformer-Small…”。*

这张图左侧是跨容量蒸馏，中间是 30 MB 以内的切分编码器核心，右侧是模块化十二文字解码。图中可见教师为 17 层大模型，学生为移动端小模型，中间标注了动态位置编码与矩阵乘改造，校准块注明吸收量化漂移，右侧输出头注明热切换时间和一致性容差。理解这张图后，后面每个模块的作用就有了位置感。

### 共享编码器与十二个输出头如何分工

声学部分对 12 种语言只跑一遍。论文的演播室档是 17 层、宽度 512 的 Conformer-Large，移动档是 14 层、宽度 256 的 Conformer-Small，每个块都是半步前馈、相对位置自注意力、核长 31 的深度可分离卷积和第二个半步前馈的结构。前端下采样后的帧数满足梅尔帧数减一除以四再加一取整，最终共享表示形状为 1 乘帧数乘 512。

文字部分则严格按语言隔离。每种语言有独立的本地文字 SentencePiece 词表，256 个子词加 1 个 CTC 空白，共 257 类。每个输出头就是一个线性映射，权重为 257 乘 512，偏置为 257 维，原始浮点大小经计算为 527364 字节，即 515.0 KiB，另存为独立文件时为 527780 字节。梵语还可经确定性有限状态后处理转写为 ISO 15919 罗马转写，保留送气、卷舌擦音、元音性流音和吠陀声调等标记。

**共享编码器 × 线性 CTC 输出头：** 共享编码器负责把所有语言的语音都变成同一种 512 维的帧表示，线性 CTC 输出头只负责把当前语言的帧表示映射到该语言自己的 257 个子词类别上；前者让声学建模只存一份，后者把文字输出按语言隔开，合起来既省存储，又避免噪声时串出别的文字。

解码时只用当前语言的头做线性计算，H 为共享表示，W 与 b 为当前语言参数，结果 Z 为每帧在 257 类上的得分：

\[\mathbf{Z}_{\ell}=\mathbf{H}\mathbf{W}_{\ell}^{\top}+\mathbf{1}\mathbf{b}_{\ell}^{\top}\in\mathbb{R}^{T^{\prime}\times 257}\]

切换语言只需换这个小缓冲，论文报告小于 20 ms，且与单体图的 logits 偏差小于 1e-5。举例来说，识别孟加拉语时不会因为噪声而输出天城体符号，因为输出空间里根本没有别的文字的类别。

**能力路由 × 离线缓存：** 能力路由负责按设备内存、浏览器标识和是否支持跨源隔离来决定加载 Studio 大模型还是 Mobile 小模型，离线缓存负责把选定的模型存在 CacheStorage 里避免重复下载；前者做选择，后者保证选完之后可以离线复用。

### 运行时切图与采集链路解决什么工程问题

如果同时发布编码器专用文件和单体模型，存储会翻倍；如果只运行单体模型，又拿不到其他语言需要的中间状态。Swanada 在会话初始化时直接修改内存中的 ONNX 字节缓冲，找到 GraphProto 输出表，如果其中还没有 layer_norm_84，就合成一段 54 字节的值信息描述并追加到尾部，同时更新外层长度前缀。论文称该操作无需外部 protobuf 依赖，小于 2 ms。

音频侧同样按真实硬件行为设计。因为移动系统会忽略 16000 的采样率请求，系统在 AudioWorklet 内把硬件缓冲重采样到 16 kHz，并用 900 ms 零帧看门狗在线程被挂起时热切换到 ScriptProcessor 备用路径，避免麦克风流中断。增强侧用 80 Hz 高通、50 与 60 Hz 陷波和判决指导的 Wiener 增益压住直流、交流哼声和平稳噪声，同时尽量不切掉送气和擦音。

路由按用户代理、设备内存和是否跨源隔离决定线程数与模型档，隔离环境下用多线程 SIMD，单线程 iOS 环境则用忙标志与环形缓冲做背压。下图展示从采集、增强、路由、双档推理到稳定输出的完整链路，读图时重点看音频从左侧进入后在哪里分流，又在哪里汇合为文字。

> **看图路径：** 1. 先看左侧采集与增强框里采样率与滤波的标注；2. 再看中间路由器到双档模型再到稳定器的箭头；3. 再看右侧浏览器与开发包两种输出形态

[![原论文 Figure 2：Swanada end-to-end capability-routed streaming architecture: 44.1/48 kHz microphone or file audio…](https://arxiv.org/html/2611.13814v1/fig2_capability_streaming_pipeline.svg)](https://arxiv.org/html/2611.13814v1/fig2_capability_streaming_pipeline.svg)

*论文图 2。原论文 Figure 2:：“Swanada end-to-end capability-routed streaming architecture: 44.1/48 kHz microphone or file audio is resampled to 16 kHz PCM with a 900 ms ScriptProcessor watchdog fallback,…”。*

这张图左侧可见麦克风采集与增强的采样率转换标注，中间黑色块为能力路由器，下方为离线缓存，右侧分别为浏览器工作室与 Node.js 和 Python 输出。结合上一节的编码器切分，可以看到音频到文字的主路径与离线复用路径是如何分开的。

### 位置编码表与逐点卷积做了哪些等价改造

标准实现会预先分配长度为 2 倍最大长度减一、宽度为 d 的正弦位置表，导出为 ONNX 后变成不可量化的浮点常量。论文指出即使 d 为 256 也要 9999 乘 256 乘 4 字节，约 10.24 MB。改造方法是只存 128 个逆频率向量，约 512 字节，运行时按当前帧长用形状、区间、外积与正余弦算子动态合成相对位置，论文称与静态表逐比特一致。

逐点卷积的问题在于写法是核长为 1 的 1 维卷积，动态量化后容易产生浏览器没有快速内核的量化卷积算子。数学上它在转置布局下等价于稠密矩阵乘，因此把通道扩展与投影两处改写为线性层，保留窄的分组深度卷积在浮点运行，总量小于 0.28 MB。这样把量化范围限定为矩阵乘后，全部注意力、前馈、下采样投影与逐点卷积参数都能进入快速整数矩阵乘内核。

**动态相对位置编码合成 × MatMul 改写的逐点卷积：** 动态相对位置编码合成负责在运行时按当前帧长现场算出正余弦相对位置，不再存一张很大的常数表，MatMul 改写的逐点卷积负责把核长为 1 的卷积换成等价的矩阵乘，让参数能进入浏览器里有快速内核的量化矩阵乘；一个省空间，一个解决算子支持，两处合起来才装得进 30 MB 的手机包。

这两处改造都不改变声学建模的数学含义，省下的是常量存储和算子支持成本。论文报告移动档首载从 35.61 MiB 降到 25.85 MiB，主要就来自去掉约 9.77 MB 静态表，这对理解后文存储对比很关键。

### 小模型如何初始化、蒸馏与校准输出头

移动学生为 14 层、宽度 256、前馈 1024、8 头、卷积通道宽 176 的结构，加一个把 256 维映射回教师 512 维坐标空间的适配层归一化，总参数 23.56M。初始化不是随机开始，而是把教师的第 0、1、3、4、6、7、9、10、11、12、13、14、15、16 层投影到隐状态的 top-256 奇异子空间，也就是截断奇异值分解热启动。

蒸馏时冻结 12 个目标输出头与教师一致，使决策超平面保持不动，再最小化四项对齐目标，包括余弦距离、均方误差、温度缩放的分布散度和真值 CTC 损失。公式中学生与教师帧表示先形成相似度和误差，输出得分再形成温度分布并与真值标签汇合，温度为 1.5，4 个权重分别为 2.5、2.5、0.38 与 0.16，训练 20 轮、混合精度与 AdamW：

\[\begin{split}\mathcal{L}_{\text{distill}}&=\lambda_{\cos}\!\left(1-\frac{\mathbf{H}_{S}\cdot\mathbf{H}_{T}}{\|\mathbf{H}_{S}\|_{2}\|\mathbf{H}_{T}\|_{2}}\right)+\lambda_{\text{mse}}\|\mathbf{H}_{S}-\mathbf{H}_{T}\|_{2}^{2}\\ &\quad+\lambda_{\text{kl}}\tau^{2}D_{\text{KL}}\!\left(p_{T}^{(\tau)}\parallel p_{S}^{(\tau)}\right)+\lambda_{\text{ctc}}\mathcal{L}_{\text{CTC}}(\mathbf{Z}_{S},y)\end{split}\]

**蒸馏 × 量化后输出头校准：** 蒸馏负责让 14 层的小模型去模仿 17 层大模型的隐层方向和输出分布，量化后输出头校准负责在真实量化噪声特征上重新调整输出头；前者完成主干压缩，后者修复量化带来的决策边界偏移，两步配合才保住小模型的精度。

导出为 QInt8 后，每处矩阵乘前会插入动态量化节点，带来累积舍入噪声。校准做法是在真实量化模型上跑隔离的训练语音得到量化特征，再按 CTC、蒸馏散度和靠近教师权重的正则三项微调每个移动端输出头，只有在隔离验证 CER 严格变好时才提交。论文同时强调所有训练与校准都用音频哈希与归一化文本过滤掉 480 条隔离集和 16 个公开测试划分，保证零泄漏。

### 四个评测集各自测量什么、条件如何隔离

评测共 4 个可复现套件。第一是 12 语言隔离演播室集，每种语言 40 条、共 480 条，总长 2185.6 秒，严格不参与训练与校准，用于看干净条件下的基本精度。

第二是开放公共集，每个官方测试划分取 80 条，共 16 个划分、1280 条、12229.2 秒，约 3.40 小时，包括 11 个 FLEURS 测试集、野外梵语测试、LibriSpeech 干净与困难集、多口音 GLOBE 和自发会议 AMI。论文把其中 11 个 FLEURS 加野外梵语共 960 条称为 12 语言开放集，再加英语 3 类共 1280 条称为全部 16 套件。

第三是 150 条多口音、俚语、借词与混响手机麦克风集，用于看口语和信道变化。第四是 72 个 100 ms 分块流式会话，用于测延迟、缓冲上限和已确认前缀是否回改。所有结果都给出 1000 次自助法 95% 置信区间，指标方向为 CER、WER 与 RTF 越低越好。

### 双档模型在存储与精度之间换来了什么

这里要回答的核心比较是：在相同隔离与开放条件下，切分编码器相对 12 个单体大模型省了多少存储，精度是否一致，移动小模型又付出多少精度代价。公平条件是同一隔离集和同一开放划分，指标为 CER，方向越低越好，存储越小越好。

| 配置 | 参数 | 首载 | 十二语言总存储 | 隔离 CER | 开放十二语言 CER | 开放 16 套件 CER | 四线程 RTF |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12 个单体大量化模型 | 1382M | 177.4 MiB | 2128.5 MiB | 5.43% | 8.87% | 12.06% | 0.0264x |
| Swanada 演播室档 | 115.2M | 177.9 MiB | 183.4 MiB | 5.43% | 8.87% | 12.06% | 0.0264x |
| Swanada 移动档 | 23.6M | 25.85 MiB | 31.39 MiB | 18.56% | 19.23% | 21.85% | 0.0097x |

上表把 12 个单体模型的总存储与切分后的总存储放在同一行比较。演播室档把 2128.5 MiB 压到 183.4 MiB，约 11.6 倍，精度与单体一致；移动档压到 31.39 MiB，约 67.8 倍，首载 25.85 MiB，隔离 CER 从 5.43% 升到 18.56%，开放十二语言 CER 为 19.23%。速度上移动档四线程实时率为 0.0097x，约 103 倍快于实时，单线程为 0.0363x。没有胜出的一项很明确：移动档在干净集上仍可用，但在困难声学下误差远高于演播室档，不能把平均提升推广到所有场景。

### 分语言与分语料看，结论在什么条件下才成立

第二个比较问题是开放集泛化是否均匀。条件是每个语料 80 条未见过测试，指标仍是 CER，越低越好。演播室档在 9 种印度语言 FLEURS 上为 4.49% 到 8.84%，例如卡纳达语 4.49%、印地语 5.13%、孟加拉语 5.44%，泰米尔语 10.32% 相对最高；移动档对应为卡纳达语 9.60%、孟加拉语 13.88%、印地语 14.04%、马拉雅拉姆语 14.89%。

| 语料 | 语言 | 隔离演播室与移动 CER | 开放演播室 CER | 开放移动 CER |
| --- | --- | --- | --- | --- |
| 卡纳达语 FLEURS | kn | 5.18 与 14.77 | 4.49% | 9.60% |
| 印地语 FLEURS | hi | 2.14 与 10.50 | 5.13% | 14.04% |
| 野外梵语 | sa | 4.27 与 14.96 | 18.92% | 40.15% |
| LibriSpeech 干净集 | en | 未报告 | 10.53% | 16.91% |
| 会议自发语音 | en | 未报告 | 41.50% | 51.63% |

上表只摘录有代表性的行，完整数字以论文表 2 为准。结论成立的条件是朗读式、单人、近讲麦克风；一旦进入多人重叠会议，演播室档 CER 升到 41.50%，移动档 51.63%；野外梵语带厅堂混响与连诵复合词，演播室 18.92%，移动 40.15%。英语部分因为训练偏印度英语，在北美口音 FLEURS 上为 17.23%，高于隔离印度英语的 5.45%，说明口音覆盖仍是边界。因此复述结论时要加限定语：在干净 FLEURS 印度语言上小模型保持可懂，在混响、重叠与强口音下两档都会明显变差。

### 流式延迟与口语适应的改善各来自哪里

第三个比较分两部分：流式是否又快又稳，口语适应是否真实降低误差。流式条件是 100 ms 步进、最大窗口 61440 采样即 3.84 秒，指标为首字延迟、每步延迟与已确认回改率；口语比较的是增强加多口音头适应前后，CER 越低越好。

| 场景 | 样本 | 基线 | 适应后 | 关键延迟 |
| --- | --- | --- | --- | --- |
| 流式会话 | 72 | 每步 8.18 ms | 回改 0.00% | 中位首字 30.63 ms |
| 全球与南亚口音 | 60 | 20.30% CER | 19.04% CER | - |
| 俚语与印英混用 | 36 | 28.07% CER | 22.36% CER | - |
| 借词 | 25 | 7.38% CER | 6.17% CER | - |
| 整体口语集 | 150 | 20.04% CER | 17.44% CER | - |

表前已经说明流式表测量 72 会话的延迟与稳定性，口语表比较版本适应前后。滚动缓冲上限保证每步计算为常数，均值 8.18 ms，流式实时率 0.0998x，中位首字 30.63 ms，均值 34.03 ms，95 分位 56.80 ms，最大观测缓冲 60800 采样，没有超过上限；手机端合并窗口为 57 到 149 ms，没有丢帧。口语整体 CER 从 20.04% 降到 17.44%，WER 从 49.90% 降到 41.88%，其中俚语 WER 下降 13.91 个百分点，但绝对值仍高达 60.89%，说明改善真实但远没有解决随意口语。

**已确认区 × 易变尾巴：** 已确认区是只增不改的历史输出，一旦显示就不再回改，易变尾巴是当前窗口右边缘还可能随右文变化的假设；两者用最长公共前缀对齐，只有连续多步保持不变的符号才从尾巴转入已确认区，这样屏幕上的字就不会来回跳动。

### 哪些误差与使用限制不能忽略

论文讨论部分明确了 3 类限制。第一是声学：自发会议含重叠、迟疑与短促应答，野外梵语有混响与连诵，移动端参数少约 4.9 倍，对这类信号鲁棒性下降最快，不能用干净集的平均数代替。

第二是解码：为把每语言开销控制在 515.0 KiB，系统用没有外部语言模型的贪心 CTC 解码。在马拉雅拉姆语、泰米尔语、卡纳达语、泰卢固语等黏着语与梵语复合词中，一个词长达 12 到 25 字符，一个元音长短或 virama 错误就会翻转整个词，因此 WER 可达 28% 到 38%，而 CER 只有 4.5% 到 7.5%。这不是测量错误，而是字符和词两种粒度的正常差异。

第三是使用方式：按语言选头可消除串字并省去 12 倍输出计算，但说话语言未知时需要用户选择或另加语种识别；在不支持共享缓冲的 iOS 浏览器里只能单线程运行，移动档的 0.036x 实时率此时是保证流畅的关键。初学者容易误以为词错误率高就是字符识别完全不可用，实际应先看 CER，再结合语言形态理解 WER。

### 复现第一步做什么，需要哪些代码与权重

复现应从环境与数据隔离做起。论文给出系统覆盖浏览器 WebAssembly、Node.js 与 Python，提到源码与可复现评测脚本及开放权重位于其 GitHub 地址，但本次解读依据的资源清单显示相关链接为第三方提及状态，不能直接写成作者已公开可用。实际操作时要分别确认三件事：代码仓库能否访问、权重文件能否下载、浏览器端能否真正运行，缺一不可。

第一步建议先跑隔离集的 480 条流程，核对演播室档 5.43% 与移动档 18.56% 是否在置信区间内，再跑开放集抽样核对 8.87% 与 19.23% 量级。关键超参数要保留：梅尔 80 通道、25 ms 窗、10 ms 跳、前端 4 倍下采样、蒸馏温度 1.5 与四项权重、校准权重与正则系数，以及流式窗口 61440 采样与 100 ms 步进。

还需要补的验证包括：在自己手机浏览器上测首载大小、首字延迟与单线程实时率，在混响与重叠语音上单独统计误差，并记录语言切换时间与 logits 一致性。没有这些本地测量，就不能把论文的桌面四线程数字直接当作手机表现。

### 什么时候值得尝试，还缺哪项验证

如果任务是 12 种印度文字的离线或弱网输入，需要本地文字保真、启动包小、可热切换语言，而且能接受先选定语言，Swanada 的切分思路值得尝试；桌面端优先用演播室档，手机端或单线程 WebView 优先用移动档。如果场景是多人会议转写、远场混响或未知语言自动混识，则不应期待论文干净集的数字，至少要先在目标声学上重测。

方法上最可借鉴的是三点：共享编码器加小输出头省存储，动态合成位置编码省常量，量化后在真实量化特征上重调输出头。代价是小模型容量与没有语言模型解码，在黏着语词错误率与困难声学上会有明显损失。

尚未验证的是外接紧凑语言模型后的提升幅度、自动语种识别加入后的串字率，以及长期流式会话的内存与功耗曲线。复述全文时应说：这是一项系统集成与压缩工作，在给定隔离与开放划分下给出可复现的存储与延迟收益，而非在所有语音条件下全面超越大模型。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.13814v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
