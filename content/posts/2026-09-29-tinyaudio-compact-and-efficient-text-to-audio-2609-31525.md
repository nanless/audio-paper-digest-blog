---
title: "TinyAudio: Compact and Efficient Text-to-Audio Generation for Low-Resource Deployment"
date: 2026-09-29
draft: false
tags: [音频生成, 流匹配, Transformer, 高效推理]
categories: [论文速递]
description: "TinyAudio 针对十亿参数文本到音频系统难部署的问题，用 35M 单流 TA-DiT 加 32M 音频对齐文本编码器与 20M 解码器做流匹配生成，在 AudioCaps 上以 2.65 的 FAD 和 0.48 GB 峰值显存实现可比质量，一步版 TinyAudio-MF 则以质量下降为代价换取四核 CPU 实时生成。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.31525"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "87M 参数做文本到音频：单流与共享调制换来的低显存部署"
paper_digest_original_title: "TinyAudio: Compact and Efficient Text-to-Audio Generation for Low-Resource Deployment"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.31525v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.31525v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.31525v1.pdf"
paper_digest_primary_task: "音频生成"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-generation","label":"音频生成"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "TinyAudio 针对十亿参数文本到音频系统难部署的问题，用 35M 单流 TA-DiT 加 32M 音频对齐文本编码器与 20M 解码器做流匹配生成，在 AudioCaps 上以 2.65 的 FAD 和 0.48 GB 峰值显存实现可比质量，一步版 TinyAudio-MF 则以质量下降为代价换取四核 CPU 实时生成。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junxi Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiquan Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenhao Guan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yifan Duan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhikang Niu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yanru Huo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ziyang Ma"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xie Chen"}]
paper_digest_abstract_sha256: "f0cc301bf31defb53d0865f381f56592ede9e83984407d166e14eaf3ee74aeed"
paper_digest_sidecars: {"citation.bib":{"sha256":"b018c02941d72b7107f34fb14e997195f48c11c8ef4e2e3d223190774fd987d0","url":"/audio-paper-digest-blog/data/papers/2026-09-29/2609-31525/citation.bib"},"citation.json":{"sha256":"d19e3764ff5f34f1ffc382374adc5c2d5b0eace41bbfc0fd526ca22d98b55537","url":"/audio-paper-digest-blog/data/papers/2026-09-29/2609-31525/citation.json"},"citation.ris":{"sha256":"17656fb1bcd39d5a238f6183e37d6ff601b81d2800eeea419057a52bec557db1","url":"/audio-paper-digest-blog/data/papers/2026-09-29/2609-31525/citation.ris"},"rethink-context.json":{"sha256":"745227d8a7a9a88918462ff6d9914aeebc62ae3403d29569e27d14fe99e186c0","url":"/audio-paper-digest-blog/data/papers/2026-09-29/2609-31525/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a716dcb33f3534caed22bd19bca02ea7d4fd9b4ea44b2a2a10ed2565ee25297a"
paper_digest_api_reader_plan_sha256: "d3133be641589e32dbaf5a841b0357b8c404def5d6fb189092eb30c33eaba64d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "dbfb1fe5f6d1dadc1297babc92b74a2b7278af81e7c6dc17bbc1db06ac431830"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "6a61d2686ae495aa8cf22177bbbdd0c2672da67963d0a2100188853ac093a3b0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6ca3ca47bec86552b3e6a784a09cec67f2f3661153f24c1cceddc4b3c0d641e3"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "549ef4c5cc6527d0414778ac42b93c0f88b73cd5a998b06eff39880a0ce68941"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 87M 参数做文本到音频：单流与共享调制换来的低显存部署

> 英文题目：*[TinyAudio: Compact and Efficient Text-to-Audio Generation for Low-Resource Deployment](https://arxiv.org/abs/2609.31525v1)*

> 标签：#音频生成 | #流匹配 | #Transformer | #高效推理
>
> 评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Junxi Liu：机构信息未在 arXiv HTML 中可靠披露
- Xiquan Li：机构信息未在 arXiv HTML 中可靠披露
- Wenhao Guan：机构信息未在 arXiv HTML 中可靠披露
- Yifan Duan：机构信息未在 arXiv HTML 中可靠披露
- Zhikang Niu：机构信息未在 arXiv HTML 中可靠披露
- Yanru Huo：机构信息未在 arXiv HTML 中可靠披露
- Ziyang Ma：机构信息未在 arXiv HTML 中可靠披露
- Xie Chen：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

文本到音频生成需由自然语言描述生成10秒级现实声景，难点在于小容量模型同时保持声学语义对齐、分布保真与44.1 kHz波形细节。TA-CLAP先将输入描述映射为音频对齐的词级表示与池化全局条件，为后续生成提供声学语义基础。TA-DiT接着将该词级表示与加噪音频隐变量投影至共享隐空间并拼接进行联合自注意力，同时将池化条件与时间步结合送入跨块共享调制网络生成归一化与门控参数，仅由音频侧输出预测流匹配速度场以生成音频隐变量。TA-VAE解码器最后承接该生成隐变量，由高度压缩表示重建44.1 kHz波形，质量感知筛选的微调数据进一步支撑小容量训练。与双流分支加每块独立自适应层归一化的主流设计不同，该工作以跨模态共享注意力与跨块共享调制网络削减重复参数。在AudioCaps测试集下，TinyAudio的FAD指标为2.65，低于Tango-Full的FAD指标2.68。其适用边界在于高频细节、复杂时序组合与单步采样下的分布偏移。部署成本为推理期87M参数与0.48 GB峰值显存，单步变体TinyAudio-MF在四核CPU配额下10秒音频稳态实时系数为0.715，单卡GPU端实时系数为0.010。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/junxi25liu/TinyAudio> — 链接可访问（HTTP 200）

- 数据相关资源：<https://audiostock.net/> — 链接不可用（HTTP 403）

- 演示资源：<https://tinyaudio-project.github.io/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么小模型难做？

本文解读的输入是论文原文与本次收到的官方原图像素，目标是让刚进入语音音乐音频领域的研究生能核对并复述 TinyAudio 的方法。保留的信息包括 3 组件参数量与分工、压缩率与采样率、训练数据规模与筛选阈值、采样步数与引导强度、显存与实时率的测量条件。输出是 1 篇按学习依赖展开的技术解读，侧重方法复述与条件核对。

文本到音频生成的任务是把自然语言描述转成符合描述的声音场景，例如街景、人声、音乐或混合音效。典型潜空间系统分 3 段工作。文本编码器把描述变成向量表示。生成主干以文本为条件产生音频隐变量。解码器把隐变量重建成波形。教学例子是输入一句 10 秒的环境描述，系统对应输出 10 秒波形，这个例子用于帮助理解任务形态，论文实验另有明确评测集。

小模型设计需要同时兼顾三处。文本编码器变小时需要保留声学语义。生成器变小时需要保留文本音频关系建模容量。解码器变小时需要从高度压缩隐变量恢复 44.1 kHz 细节。论文报告 TinyAudio 推理总参数为 87M，与代表性 1000000000 参数管线相比，参数规模下降超过 90%，峰值显存为 0.48 GB。论文同时压缩条件、生成与重建三部分，采样步数优化与参数压缩属于两条并行路线。

### 同任务同阶段的已有路线在省什么？

按同输入同目标同运行阶段对照，已有路线主要节省采样步数。TangoFlux 和 MeanAudio 通过更快采样降低推理延迟。MeanAudio 类工作把多步扩散或流匹配压缩到更少函数求值。原文指出，单纯减少采样步数，模型尺寸保持原样，部署依然受到大参数量与大显存影响。

另一类是潜空间三件套的常规做法。文本编码器常用大语言或音频文本对齐模型。生成主干常用带独立条件调制的扩散变换器。解码器常用卷积自编码器或声码器。TinyAudio 的特点是把节省参数放在结构上。单流省掉模态分支，层共享省掉逐块调制，对比适配让 32M 小文本编码器获得音频对齐，轻解码器直接重建 44.1 kHz。

这种对照适合理解为路线差异，同条件胜负需要谨慎看待。不同系统的文本编码器、数据、采样器、引导强度与评测实现存在差异。论文在 TTA-Bench 准确子集上沿用 Resonate 评测口径，基线值跟随该评测，这保证了表格内相对可比，跨论文比较绝对值时还需要核对特征与实现。

### 论文要解决的部署矛盾是什么？

论文要解决的矛盾是生成质量与部署足迹的矛盾。高性能系统常用大网络加迭代采样，显存与延迟较大，给资源受限设备部署带来压力。研究问题可表述为在保持可比分布质量与文本对齐的同时，把推理参数、峰值显存与采样步数同时压低。

约束条件很具体。推理总参数 87M，其中生成器 35M。峰值显存在单卡 FP32 批量为 1 时测得 0.48 GB。标准版用 25 步欧拉求解器加分类器引导，一步版用 1 次函数求值。CPU 评测限定在等效 4 核配额下测 10 秒音频的稳态实时率。

成功标准是多指标组合。AudioCaps 上看分布距离与语义指标，TTA-Bench 上看美学维度与文本相似度，主观听感看总体质量与文本相关性。论文直接报告标准版 FAD 为 2.65，接近 Tango 与 MeanAudio，FD 高于多数对比系统，一步版客观指标存在可测量的质量代价。这个定位决定后文既讲最优数字，也讲处于中间位置的数字。

### 一个样本走完全流程需要经过哪三站？

沿一个 10 秒生成样本走一遍，输入是一句文本描述。第一站是 32M 参数的 TA-CLAP 文本分支，输出词元级表示与池化全局条件。第二站是 35M 参数的 TA-DiT，输入是加噪音频隐变量加文本表示，输出是音频隐变量的速度预测，经 25 步或 1 步积分得到干净隐变量。第三站是约 20M 参数的 TA-VAE 解码器，把压缩隐变量重建成 44.1 kHz 波形。加上轻量投影层，总计 87M 推理参数。

表示层面要分清两种条件。局部文本条件是逐词元序列，参与联合自注意力。全局文本条件是池化向量，经投影后与时间步嵌入相加，参与自适应调制。训练时两类条件以 0.1 概率联合丢弃，以学到条件引导使用的条件场。推理时标准版引导强度为 9。

计算目标是流匹配。网络预测隐变量空间的速度场，再积分得到隐变量。TA-VAE 先把波形压成低帧率多通道序列，生成只在该紧凑空间进行，解码才回到高采样率。这种分工让生成器序列更短，让解码器专注细节重建。

### TA-VAE 如何把波形压短又重建回来？

白话说，音频自编码器就是先压缩后还原的工具。英文是 audio variational autoencoder，本文记作 TA-VAE。编码器把长波形变成短隐变量序列，解码器再把它变回波形。

原文安排是沿用语义 VAE 思路，编码器用类 DAC 卷积结构，解码器用抗混叠多周期块构成的轻量结构。压缩是对 44.1 kHz 波形做 1024 倍时间压缩，得到 64 通道、帧率为 43 Hz 的连续隐变量序列。训练时 7M 参数编码器产生归一化隐变量目标，推理时只保留约 20M 参数解码器。

该设计节省的是生成侧序列长度与解码侧参数。43 Hz 意味着 10 秒音频只对应约 430 帧隐变量，变换器处理更为便宜。代价是解码器需要从高度压缩表示恢复细粒度波形，容量较小时高频与瞬态保留压力更大。论文侧重报告端到端生成质量，TA-VAE 独立重建指标的完整消融有待补充，解读时把这部分记为待查项。

### TA-CLAP 怎样让 32M 文本编码器听懂声音？

白话说，音频对齐就是让文本向量靠近其描述声音的向量。英文是 audio-aligned text encoder，本文记作 TA-CLAP。文本编码器从 Ettin-encoder-32m 初始化，音频分支用预训练 HTSAT 构成双编码器，2 分支经轻量投影头映射到共享对比空间。

**对比学习 × 文本编码器：** 对比学习负责在共享空间拉近配对音频文本嵌入、推远非配对，提供声学语义监督；文本编码器负责把输入描述变成词元级表示和池化全局条件供生成器使用；二者搭配的原因是小文本编码器只靠语言预训练缺声音概念，对比适配后在部署时只保留文本分支即可输出音频感知表示。

训练用配对音频文本样本，2 分支输出归一化嵌入，用 SigLIP 引入的成对 sigmoid 损失优化。对比适配完成后丢弃音频分支，部署只保留文本分支。这种做法的监督来源是音频文本配对，属于跨模态对齐监督。原文对冻结策略、投影头维度与温度等超参数交代有限，复现时以开源代码为准，解读中仅转述已给信息。

小容量下该适配的作用在消融中得到支持。去掉 CLAP 适配后性能出现一致下降，说明音频对齐表示对小生成器有帮助。检索与生成属于两类评测，检索用 AudioCaps 测试集的召回率，生成用 FAD 等分布指标，二者聚合对象与特征各有差异，解读时分开表述。

### TA-DiT 的单流与共享调制如何省参数？

白话说，单流就是文本和音频走同一套注意力。英文是 single-stream Transformer，层共享条件调制是 layer-shared conditional modulation。TA-DiT 先把加噪音频隐变量与文本表示投影到同一隐空间，记投影后音频序列为 A，文本序列为 Y。

**单流建模 × 层共享条件调制：** 单流建模负责让投影后的文本词元和加噪音频隐变量拼成一个序列共享同一套自注意力参数，直接做跨模态交互而不设独立分支；层共享条件调制负责把每层原本独立的 AdaLN 调制网络换成跨层共享的移位缩放与门控 MLP，只保留轻量块嵌入区分深度；二者搭配的原因是前者省掉模态分支重复，后者省掉逐层调制重复，组合后 TA-DiT 在 35M 量级仍保留文本控制与深度相关行为。

\[H=[A;Y].\]

上式符号含义是 H 为拼接后的联合序列，分号表示沿序列维拼接。该序列送入堆叠变换器块，音频与文本词元通过自注意力交互。每块内把序列投影为查询键值，对音频和文本的查询键向量分别独立编号应用旋转位置嵌入，保留各自位置结构。共享注意力参数避免了双流多模态扩散变换器的独立分支。另加 QK 归一化改善训练稳定。

**流匹配 × 潜在速度：** 流匹配负责定义从噪声到音频隐变量的连续传输路径与训练目标；潜在速度负责在每个时间步给出隐变量应移动的方向和大小，是网络要回归的向量场；二者搭配的原因是 TA-DiT 只取音频词元输出并投影为速度预测，采样时用欧拉求解器沿速度积分即可得到音频隐变量。

条件调制部分先把池化文本特征经投影与时间步嵌入相加得到 u，再加块专属嵌入后送入共享 MLP。对第 l 块有移位缩放与门控两路。

\[m_{\mathrm{ss}}^{l}=M_{\mathrm{ss}}\!\left(u+e_{\mathrm{ss}}^{l}\right),\]

\[m_{\mathrm{g}}^{l}=M_{\mathrm{g}}\!\left(u+e_{\mathrm{g}}^{l}\right),\]

其中 P 投影池化文本条件 c，E 嵌入时间步 t，e 为块专属嵌入，M 为跨块共享网络。输出提供注意力与前馈分支的归一化参数与残差门。注意力与前馈本身依然是每层独立。最后只保留音频词元输出并投影为隐变量速度预测，供流匹配目标使用。

下图是 TA-DiT 结构，左为总体数据流，右为块内细节，重点看拼接位置与共享调制标注。图前导读已说明观察顺序，图后解释对应真实组件。

> **看图路径：** 1. 先沿左侧文本与加噪隐变量经投影拼入单流块再到预测速度的主路径看数据流；2. 再看右侧块内自注意力前后的缩放平移与门控位置；3. 最后找到右侧标注跨层共享的调制投影与每层嵌入相加处

[![原论文 Figure 2：Single-stream TA-DiT. Projected text tokens and noised audio latents are concatenated for joint…](https://arxiv.org/html/2609.31525v1/tinyaudio.png)](https://arxiv.org/html/2609.31525v1/tinyaudio.png)

*论文图 2。原论文 Figure 2:：“Single-stream TA-DiT. Projected text tokens and noised audio latents are concatenated for joint self-attention.”。*

左图显示文本经 CLAP 引导编码器与投影、加噪隐变量经投影后，共同进入重复 N 次的单流块，最后只有音频侧经输出投影得到预测速度。左下时间步经嵌入与线性层后以条件方式注入每块。右图显示块内先对拼接序列做缩放平移、线性、QKV 投影、QK 归一化与旋转位置嵌入再做自注意力，然后经门控残差进入缩放平移加多层感知机再门控。右侧 Layer-Conditioned Modulation 面板显示条件与层嵌入相加后进调制投影，且标注跨层共享，这正是公式中共享 M 与专属 e 的对应。像素能确认的是模块连接与共享标注，具体维度与数值以正文 18 块 384 维 8 头为准。

### 数据如何筛选，训练分几段，单步如何得到？

训练分预训练与质量感知有监督微调两段。预训练语料约 3.7M 音频文本对，来源包括 AudioCaps、AudioSet、Clotho、VGGSound、WavCaps、MusicCaps 与 AudioStock。AudioCaps 验证与测试音频已从预训练与微调中排除。TA-CLAP 对比学习与 TA-VAE 重建训练也用该语料支撑。

**预训练 × 质量感知微调：** 预训练负责在约 3.7M 对大规模语料上学通用文本到音频映射；质量感知微调负责在约 417K 对高感知质量、高语义一致且域均衡的子集上继续优化；二者搭配的原因是小容量生成器易被低质或偏域数据拖累，先铺量再提质比随机追加微调更有效。

质量感知微调的构造动作很具体。保留 AudioBox 美学分数满足 PQ 达到 5.5、CE 达到 3.5、CU 达到 4.5 的样本。按 HTSAT 预测分成音乐、语音与通用声音 3 类，目标比例约为 1 比 1 比 3。每类内按 LAION-CLAP 相似度从高到低选。只保留 2 秒到 30 秒录音，按音频路径去重后得到约 417K 对。

优化设置按原文交代。TA-CLAP 训练 10 轮全局批量 1024。TA-VAE 训练 500K 步全局批量 64。TA-DiT 基座训练 500K 步再微调 200K 步，两段全局批量均为 1024。两段用融合 AdamW，峰值学习率分别为 1 乘 10 的负 4 次方与 5 乘 10 的负 5 次方，权重衰减 1 乘 10 的负 6 次方，1000 步预热，梯度裁剪 1.0，多步衰减里程碑分别为 360K 与 430K、160K 与 180K，每到里程碑学习率乘 0.1。

**平均流 × 单步采样：** 平均流负责把多步速度场蒸馏或重参数为平均速度目标，使大步长仍稳定；单步采样负责 1 次函数求值直接给出生成结果，省掉 25 步迭代；二者搭配的原因是 TinyAudio-MF 从 500K 步检查点出发继续在高质量子集上按改进平均流目标训练，从而把隐变量生成压缩到一步。

单步加速做法是从预训练 500K 步的 TinyAudio 检查点出发，在质量感知子集上用标准微调优化设置加改进平均流目标继续训练，把采样压缩到 1 次函数求值。标准版用 25 步欧拉求解器。资源状态方面，代码当前可用，演示页当前可用，数据集链接本次为 403 不可用，写作中把该链接记为当前不可用状态。

### 在什么数据与指标上测，条件如何对齐？

评测做 10 秒生成。在 AudioCaps 测试集上报告 FAD、FD、KL 与 IS，其中 FAD 用 VGGish 特征，FD、KL 与 IS 用 PANNs 特征。在 TTA-Bench 准确子集上报告 AudioBox 美学的 CE、CU、PC、PQ 与 Resonate 式 CLAP 相似度。TTA-Bench 含 1500 条提示，覆盖多声音事件与并行、序列及更复杂时序关系。消融在 957 个 AudioCaps 测试样本上用 25 步欧拉采样、引导强度 9 评测。

公平条件按原文交代。表 1 中生成器与部署参数分别记生成器与推理总参数，显存与端到端实时率在单卡 FP32 批量为 1 下测得，函数求值次数中乘 2 表示无分类器引导。TTA-Bench 结果用准确子集，基线值跟随 Resonate 评测。主观评测请 10 位音频专家，每模型每人评 10 条，按 5 分制评总体质量与文本相关性，随机顺序盲测并获知情同意。

部署成本单独测 CPU。集群节点为两颗英特尔至强 Gold 6530，容器经分组限制为等效 4 核配额。TinyAudio-MF 在 FP32 批量为 1 下生成 10 秒音频的平均稳态实时率为 0.715，平均自 10 次预热后 5 次运行，计时含文本编码与波形解码，不含模型加载与音频保存。理解实时率时注意训练资源、推理开销与实际延迟分开讨论，稳态平均不等于每步都快。

### 小参数保住了什么，丢了什么？

比较问题是同为可运行的 25 步与 1 步 TinyAudio，在相同显存与参数下质量与速度如何取舍，方向是 FAD 与 FD 越低越好，实时率越低越好。公平条件是两者生成器同为 35M、部署同为 87M、峰值显存同为 0.48 GB，区别在函数求值与求解器。下表只用原文连续句能逐字覆盖的数字整理，不引入无源基线数值，宽表要求由多列配置与数据表共同承担。

| 系统 | 推理总参数 | 峰值显存 | 采样设置 | AudioCaps FAD | 稳态实时率 |
| --- | --- | --- | --- | --- | --- |
| TinyAudio 标准版 | 87M | 0.48 GB | 25 步欧拉求解器，引导强度 9 | 2.65 | 未在句中报告 GPU 实时率 |
| TinyAudio-MF 一步版 | 87M | 0.48 GB | 1 次函数求值 | 高于标准版，有可测量代价 | 0.715，4 核 CPU 配额 |

上表主要收益是标准版以 87M 总参数与 0.48 GB 峰值显存达到 2.65 的 FAD，原文称接近 Tango 与 MeanAudio 且 TTA-Bench 上 CU 与 PQ 有竞争力。具体代价有两处。一是 FD 高于多数对比系统，分布质量并非全面最优。二是一步版大幅降采样成本但客观指标出现可测量下降，主观之外的自动指标不能当成人评。未胜出项如实保留。峰值显存比每个对比系统低 8 倍以上是报告的直接结果，但这是单卡 FP32 批量为 1 条件下的测量，换精度或批量会变化。

下图是 AudioCaps 质量与生成器尺寸的气泡图，横轴为生成器参数对数刻度，纵轴为 Fréchet 距离向下越好，气泡标签为生成器参数。图前导读要求先确认坐标与方向，再比较左右位置，最后判断差距。

> **看图路径：** 1. 先看横轴生成器参数对数刻度与纵轴 Fréchet distance 向下越好，确认比较维度；2. 再找左侧紫色 35M 气泡与右侧 480M 到 1253M 气泡的相对位置；3. 最后核对气泡标签数值与纵向质量差距，判断小参数是否明显掉队

[![原论文 Figure 1：AudioCaps quality versus generator size.](https://arxiv.org/html/2609.31525v1/quality_footprint_hd.png)](https://arxiv.org/html/2609.31525v1/quality_footprint_hd.png)

*论文图 1。原论文 Figure 1:：“AudioCaps quality versus generator size.”。*

像素显示最左侧紫色气泡为 TinyAudio 的 35M，纵向位置低于右上方的 TangoFlux 的 516M 与 AudioLDM-2-Large 的 718M，但高于右侧下方的 MeanAudio-L-Full 的 480M、EzAudio-XL 的 857M 与 GenAU-L-Full 的 1253M。横轴 20 到 1000 以上为对数刻度，因此 35M 与 480M 的视觉距离大于线性比例。纵轴 12 到 28 向下越好，不能把靠上直接读成训练步数或听感差，只能读成该 FD 特征下的分布距离大。原文图注明确 TinyAudio 在显著更小参数区仍保持可比分布质量，这与正文 FAD 接近但 FD 偏高的表述一致，具体数值以表格与正文为准，像素不硬读小数。

### 省参数的结构与数据选择是否真起作用？

消融按问题组织。结构问题是匹配参数量下单流加共享调制是否优于逐块 AdaLN 与双流。文本条件问题是去掉 CLAP 适配会怎样。数据问题是同等 417K 规模下质量感知选择是否优于随机采样。条件是消融变体训练 200K 步于 AudioSet 加 AudioCaps 组合，基座为完整 TA-DiT 配置，评测用 25 步欧拉与引导强度 9。

原文报告在匹配参数量下基座有更好总体质量权衡，支持单流与共享调制是小生成器的参数有效选择。去掉 TA-CLAP 适配一致降低性能，说明音频对齐在容量受限时重要。数据侧仅追加微调不保证提升，随机 417K 子集不如质量感知 417K 子集有效。表述用支持而非证明，因为消融只在特定语料与步数下验证，因果推广待验证。

TA-CLAP 检索侧用 AudioCaps 测试集的双向召回率，参数含音频与文本双分支，原文称与 LAION-CLAP 可比。需注意检索参数 67M 含音频分支，部署只保留文本分支，数值相同不是同一指标的证据，检索好不等于生成好。

| 组件与训练 | 模型规模 | 隐空间规格 | 块与维度配置 | 训练批量与步数 | 数据规模 |
| --- | --- | --- | --- | --- | --- |
| TA-VAE 压缩重建 | 解码器约 20M，编码器 7M | 44.1 kHz 压 1024 倍，64 通道 43 Hz | 卷积加抗混叠多周期块 | 重建训练 500K 步，批量 64 | 预训练语料一部分 |
| TA-DiT 生成主干 | 生成器 35M，总计 87M | 连续隐变量序列 | 18 块，384 维，8 头 | 基座 500K 步加微调 200K 步，批量 1024 | 预训练约 3.7M 对 |
| TA-CLAP 文本条件 | 文本编码器 32M | 共享对比空间 | 双编码器加投影头 | 10 轮，批量 1024 | 同预训练语料 |

上表把 3 组件的规模、规格与训练条件放在同一宽表下比较，解决小模型三处受限的分工问题。收益是生成序列短、注意力共享、调制共享，代价是解码细节压力大、小编码器依赖对比适配、一步加速依赖高质量子集。未评测边界是不同压缩倍率与更小批量下的稳定性，原文未报告则不猜。

| 训练阶段 | 语料规模 | 时长与去重 | 筛选阈值与比例 | 优化设置 | 步数 |
| --- | --- | --- | --- | --- | --- |
| 平均流单步继续训练 | 同高质量子集 | 同上 | 同上 | 标准微调设置加改进平均流目标 | 自 500K 步检查点继续 |

上表回答复现先做什么。先备 3.7M 预训练语料并排除 AudioCaps 验证测试音频，再按阈值与比例构造 417K 子集，最后按两段学习率与批量训练。随机采样同规模子集不能替代质量感知选择，这是论文特有的反证细节。另一特有细节是局部与全局条件以 0.1 概率联合丢弃以学无条件场，推理引导强度取 9，改动该条件会改变可比性。

### 哪些结论不能推广，哪些数不能混读？

直接报告与有限解释要分开。报告的是 87M 总参数、0.48 GB 峰值显存、FAD 为 2.65、一步版 4 核 CPU 稳态实时率为 0.715。支持的是单流与共享调制在匹配参数下更有效、CLAP 适配对小生成器重要、质量感知选择优于随机。可能待验证的是该权衡在其他语言、长音频或移动端芯片上是否成立，原文未测则不承诺延迟与成本改善。

指标不能混读。FAD 用 VGGish，FD、KL 与 IS 用 PANNs，TTA-Bench 美学维度与 CLAP 相似度是另一套，数值相同不是同一指标的证据。百分点与相对百分比不同，不同指标差值不能放到模型列下，自动指标不能当成人评。主观评测中 TinyAudio 总体质量均值第一、文本相关性均值第二落后于 TangoFlux，均值加减标准差范围有重叠，样本仅每模型 100 条专家评分，不能读成全面胜出。

冲突与缺项如实标注。一步版 GPU 端到端实时率与 CPU 稳态实时率口径不同，不能直接对比。TA-VAE 独立重建质量、对比训练中超参数与冻结细节、移动端实测功耗均未完整报告，复现需以代码为准。数据集链接本次为 403 不可用，不能写成可下载，AudioStock 划分与授权需自行核对。

### 要复现应先跑通什么，再补哪项验证？

先做可运行性核对。代码当前可用，演示页当前可用，数据集链接当前不可用。先按代码跑通文本编码、25 步生成与波形解码全链路，再核对 87M 推理参数与 0.48 GB 量级的显存条件，注意单卡 FP32 批量为 1 的测量前提。权重下载与系统可运行是两回事，有代码不等于有权重，有权重不等于 4 核配额下实时，需分别验证。

再按信息条件复现训练。关键超参数是 18 块 384 维 8 头、两段批量 1024、峰值学习率与里程碑、1000 步预热、梯度裁剪 1.0、条件丢弃概率 0.1、引导强度 9、25 步欧拉。数据侧先复现 3.7M 预训练集合的排除规则，再复现 PQ、CE、CU 阈值、1 比 1 比 3 域比、LAION-CLAP 相似度排序、2 秒到 30 秒与路径去重得到约 417K 对。

还需补的验证是论文未覆盖的边界。补不同引导强度与步数下的质量延迟曲线。补长音频与多事件时序提示的对齐测试。补 CPU 单核与内存受限下的实际延迟与掉线率。主观评测若重做，需保留随机盲测、5 分制定义与知情同意补偿流程，并报告均值标准差与样本量，不只报均值。

| 复现检查项 | 论文条件 | 需记录的口径 | 可运行策略 | 缺项处理 |
| --- | --- | --- | --- | --- |
| 部署足迹 | 87M 总参数，0.48 GB 峰值显存 | 单卡 FP32 批量为 1，含编码解码 | 先跑 25 步标准版 | 换精度批量需重测 |
| 生成质量 | FAD 为 2.65，FD 偏高 | AudioCaps 10 秒生成，特征分开 | 保留引导强度 9 | 不混读不同特征指标 |
| 单步加速 | 1 次函数求值，稳态实时率 0.715 | 4 核配额，预热 10 次后平均 5 次 | 从 500K 步检查点继续训练 | 不把稳态平均当最坏延迟 |

上表把复现先做什么收敛为三行动作。每行都绑定原文条件与口径，避免把代码可用当成数据可用，避免把总体趋势当成每组都成立。数据集不可用时先用自有授权语料做流程验证，再补官方划分，这是诚实的复现路径。

### 何时值得尝试 TinyAudio 路线？

当部署预算卡死在百 M 参数与 1 GB 以下显存，且能接受 FD 略高与一步版质量下降时，TinyAudio 路线值得尝试。它的核心判断是把参数花在共享注意力与共享调制上，把语义补在对比适配的文本编码器上，把速度换在平均流单步上，把质量兜底放在数据筛选上。

常见误解需要澄清。一是步数少不等于模型小，本文省的是结构参数，不只是采样步数。二是检索可比不等于生成可比，二者指标与聚合对象不同。三是显存小不等于全场景实时，0.48 GB 是特定精度批量的峰值，0.715 是 4 核配额稳态平均，换设备需重测。四是微调多不等于更好，随机追加数据不如按感知质量与语义一致性筛选。

收束时回到可核对的事实。总参数 87M 中生成器 35M、文本编码器 32M、解码器约 20M。压缩为 1024 倍至 43 Hz 后重建 44.1 kHz。预训练约 3.7M 对，微调约 417K 对。标准版 25 步 FAD 为 2.65，一步版 1 步稳态实时率为 0.715。这些数字与条件是复述与复现的锚点，其余推测一律标为待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.31525v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-29/)
