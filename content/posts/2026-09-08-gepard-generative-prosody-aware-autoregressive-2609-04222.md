---
title: "GEPARD - Generative, Prosody-aware, Autoregressive text-to-speech model for Realtime Dialogue"
date: 2026-09-08
draft: false
tags: [文本到语音, 自回归模型, 流式处理, 实时处理, 高效推理]
categories: [论文速递]
description: "GEPARD 为实时对话把文本与 32 通道 GroupFSQ 音频在同一标准全注意力 Transformer 中联合自回归生成并用 NanoCodec 流式解码，以 vLLM 原生可服务为首要约束，通过 prefill 前缀克隆、单步并行采样与 DPO 蒸馏 CFG 实现单流 RTF 约 0.067 与 256 并发约 204 倍加速，代价是帧级并行带来的高熵训练难度与短文本寄存器失效需额外诊断与补偿。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.04222"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在标准 vLLM 上跑实时对话语音：GEPARD 把定制算子移出解码循环的取舍"
paper_digest_original_title: "GEPARD - Generative, Prosody-aware, Autoregressive text-to-speech model for Realtime Dialogue"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.04222"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.04222.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "GEPARD 为实时对话把文本与 32 通道 GroupFSQ 音频在同一标准全注意力 Transformer 中联合自回归生成并用 NanoCodec 流式解码，以 vLLM 原生可服务为首要约束，通过 prefill 前缀克隆、单步并行采样与 DPO 蒸馏 CFG 实现单流 RTF 约 0.067 与 256 并发约 204 倍加速，代价是帧级并行带来的高熵训练难度与短文本寄存器失效需额外诊断与补偿。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Denis Pavlov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ulanbek Abdurazakov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nursultan Bakashov"}]
paper_digest_abstract_sha256: "861acfa5b01622aa0ccbf2b136f32c03d9279108fa3f677ae8a0a9975cfd22d6"
paper_digest_sidecars: {"citation.bib":{"sha256":"de8decb6f1f5d1603a55a0274a178d43eb0689c7d71103475319d766f6b19d9c","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04222/citation.bib"},"citation.json":{"sha256":"876bab19a2f5cffda64bbd6a78c2d9c32db222b86ea665377a66ec2868ec1912","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04222/citation.json"},"citation.ris":{"sha256":"3db13dc16843bc3eb9aa7f6f718323e3eb49fd00c42626ab832b918c5185b603","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04222/citation.ris"},"rethink-context.json":{"sha256":"a8456e919710b8821b8b5193e115064239a9934f56ee28d3a7e28695c21508de","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04222/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3bcf53a05556964a26a60eda00298c5a933731405fc13a4f2c68eead5fae3dbb"
paper_digest_api_reader_plan_sha256: "300b2d9a6c6be4df9c76e1ab7731484b984074d6130a60de947ad4a4faf0acc0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "729d960e4e1f52ce41759e4ca991af17188733232b184ce780e7d3600abc0550"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "cec1ad06817e3f3553ce14e3e66246943daceb229170853d38b24fcce0be1291"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5dc0318e8499249011322d02725012aac8ce93daa0880729e0aebc3f076eff4b"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "46c5b1c29b2f0543e552d06ec2c69436fcd8f1b7d4c97975bb638c8271d517d3"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在标准 vLLM 上跑实时对话语音：GEPARD 把定制算子移出解码循环的取舍

> 英文题目：*[GEPARD - Generative, Prosody-aware, Autoregressive text-to-speech model for Realtime Dialogue](https://arxiv.org/abs/2609.04222)*

> 标签：#文本到语音 | #自回归模型 | #流式处理 | #实时处理 | #高效推理
>
> 评分：**7.0/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.4/1.5


## 👥 作者与机构

- Denis Pavlov：机构信息未在 arXiv HTML 中可靠披露
- Ulanbek Abdurazakov：机构信息未在 arXiv HTML 中可靠披露
- Nursultan Bakashov：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

实时对话要求模型以增量到达的文本为输入流式输出波形，输出需同时满足音质、韵律可控与极低首包延迟，难点在于自回归声学建模需在标准全注意力Transformer计算路径内实现稳定停顿预测与生产级吞吐。第一步负责声纹条件的提取，冻结的音频压缩器经L=2层Q-Former在预填充阶段一次性生成K=8个声纹token并以可学习null_prefix支撑无条件路径，其输出传递至主干前缀位置。第二步用于模态尺度对齐与融合，文本嵌入与经音频接口映射的NanoCodec GroupFSQ特征经仿射无关归一与尺度约束后拼接为[prefix|text|audio]序列并送入标准全注意力Transformer骨干，进入下一步自回归展开。第三步生成帧级离散码本，主干在音频区自回归并行预测C=32个独立FSQ通道的分类分布与二元停止头，每帧的32通道logits与停止概率进入下一步解码。第四步解码并输出波形，NanoCodec解码器将32通道码本直接合成为22kHz波形按块流式输出，并将两阶段分类器无关引导效应经偏好优化蒸馏至单遍权重以消除推理时双遍开销后传递至服务层。相对依赖残差向量量化与层内深度变换器的主流方案，该设计以GroupFSQ通道独立性假设换取与vLLM原生连续批处理和分页注意力的完全兼容，避免在解码循环内引入定制算子而保持高内存利用率与线性扩展。在论文报告的评测设置下，本文方法相较实时基线的Real-Time Factor指标达到0.067，方向为更低。适用边界是：结论仅在英语主导、3至10秒片段占主体的分布内成立，1至2词短指令易触发无限循环或漏词的失稳模式，多语种合成质量与基于WavLM的零样本说话人相似度仍有限且尚未经充分跨语种验证。成本方面，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，哪些信息必须保留？

GEPARD 处理的是文本到语音的流式生成：输入是一段文本字符序列，可选地附带一段参考音频用于零样本声音克隆；目标是逐帧生成离散音频码并经神经声码器还原为 22,050 Hz 波形，且在文本到达时就能块级流式输出。必须保留的信息有两类：一是文本的语言内容与韵律意图，二是说话人音色在多帧间的稳定一致性。输出不是 1 次性整句波形，而是 21.5 帧每秒的码流，每帧包含 32 个有限标量量化通道，解码后约 1024 个采样点。

研究把实时对话的两个硬约束摆在首位：首音频延迟与并发吞吐。传统自回归语音模型常在解码循环内加入逐码本串行、深度变换器或每步两遍的分类器自由引导，这些定制算子与标准大模型服务引擎的连续批处理与分页注意力不兼容，会打断 KV 缓存的扁平流水线。GEPARD 因此把中心矛盾定义为在不改 vLLM 内核的前提下实现高质量自回归语音合成，所有非标准变换要么在 prefill 阶段 1 次性完成，要么蒸馏进权重。

### 同类路线如何权衡质量与服务吞吐？

相关路线可按码本组织与解码结构区分。基于残差向量量化的编码器如 EnCodec、SoundStream、DAC 采用分层残差量化，码本间分布高度相关，语音模型通常需逐码本串行生成或在每步内加入深度变换器来建模条件联合分布，这会把序列长度扩大数倍或在每步引入垂直计算，难以用现成 vLLM 服务。另一类是有限标量量化与组量化编码器如 NanoCodec 的 GroupFSQ，将隐空间分为 8 个独立子空间，每组用[8,7,6,6] 网格量化，通道间设计上正交，允许因子化并行采样。

GEPARD 选择后者并进一步把 8 个打包码展开为 32 个独立小分类头，总 logits 从 16,128 降至 216，对齐解码器内部的 32 通道表示。声音克隆方面，常见做法是在解码循环内做交叉注意力或每层注入说话人条件，GEPARD 则把说话人信息压缩为 K=8 个前缀 token，仅在 prefill 阶段计算，避免参与逐帧自回归。引导增强方面，两遍分类器自由引导在语言与扩散模型中常见，但每帧两遍前向与 vLLM 单遍循环冲突，GEPARD 用离线成对生成配合 DPO 把引导效果蒸馏为单遍权重，这与把定制移出循环的总原则一致。

### 实时对话对首包延迟与并发提出了什么硬约束？

实时对话要求首音频帧延迟在数十毫秒量级且单卡能承载数十到上百并发流。论文把评估分为 2 个阶段：早期在租用的 RTX 5090 上做单流 vLLM 验证，另 1 阶段在服务器级 GPU 上用 SSE 流式协议做端到端并发压测，包含主干与神经编码器的完整链路。约束一是计算主干必须是标准全注意力 Transformer，才能复用 FlashAttention-2 与 vLLM 的连续批处理；任何在解码循环内的定制算子都会导致需要改内核与手写 CUDA，破坏吞吐。

约束二是音频帧生成必须是单步完成 32 通道的并行预测，不能把 1 帧拆成 8 步或 32 步串行，否则 KV 缓存膨胀且首包延迟倍增。约束三是声音克隆、文本增广与引导等辅助机制不能在每步动态介入，必须在 prefill 或离线阶段解决。论文还指出短寄存器失效是语音解码器的固有故障模式：1 到 2 个词的极短输入易导致无限循环或跳词，需用熵与停止概率探针量化并通过文本重复增广与 DPO 偏好优化补偿。

### 全景：一条样本如何从文本走到波形？

单条样本的前向可沿 3 路输入汇入同一主干来理解。文本侧将字符转为词表 ID 后查预训练 Qwen3.5 的嵌入表得到文本嵌入；音频侧将已展开的 32 通道离散码经音频接口转为帧嵌入；可选的声音克隆侧将参考音频的码栈经 Q-Former 压缩为 K=8 个前缀向量。3 路在序列维度拼接为主干输入，格式为前缀、文本、音频的顺序拼接，主干为 14 块、隐维度 1024、8 头的标准全注意力 Transformer，训练时不使用 KV 缓存且不在层内插入钩子。

主干输出后丢弃前缀切片，仅对音频区域施加 32 个码本分类头与一个停止头，分别用交叉熵与带正类权重的二元交叉熵监督，停止头预测是否为终止帧。推理时自回归地逐帧采样 32 个通道并判断是否停止，采样得到的码流直接送入 NanoCodec 解码器按 21.5 帧每秒还原波形，支持块级流式输出。

**全注意力 Transformer × vLLM 连续批处理：** 全注意力 Transformer 指每层都用标准自注意力且无定制深度变换或交叉注意的解码器主干，负责统一处理文本与音频序列；vLLM 连续批处理指利用 PagedAttention 对标准 LLM 进行高效连续批调度与 KV 缓存复用的服务机制。二者搭配的原因是只有保持主干为标准形态才能直接复用 vLLM 内核而不改源码，组合后新增的作用是把所有模态定制都推到 prefill 或权重蒸馏中，使语音生成获得与文本 LLM 相同的吞吐与显存利用率。

为明确序列拼接的边界与维度，论文给出输入序列的组成形式。

\[\bigl[\,\text{prefix}_{(K)}\;\big|\;\text{text}_{(T_{\text{text}})}\;\big|\;\text{audio}_{(T_{\text{audio}})}\,\bigr],\]

该式表示主干输入由可选的 K=8 前缀段、长度为 T_text 的文本段与长度为 T_audio 的音频段拼接而成，隐维度 d 为 1024，输出头仅作用于音频段，前缀在计算损失前被丢弃以保证因果对齐。

在进入组件细节前，先通过架构图建立整体数据流的空间对应关系有助于定位各模块的输入输出形状。

> **看图路径：** 1. 沿顶部三路输入箭头向下追踪 Q-Former 前缀、文本嵌入与 32 通道音频接口如何汇入同一拼接序列；2. 定位中间红色拼接框中 d 等于 1024 的维度标注与下方 14 块全注意力主干的参数说明；3. 在主干出口处确认丢弃前缀切片后再分叉到 32 个码本头与停止头的两条分支路径

> **论文图 1（像素未随页面持久化）**：Figure 1: Gepard architecture. Three input streams — the optional Q-Former voice-cloning prefix, the text embedding, and the audio interface (32 FSQ channels) — are concatenated into a single sequence and processed by a stock full-attention Qwen3.5 backbone. The prefix slice is dropped before the 32 codebook heads (CE) and the stop head (BCE).

*论文图 1。原论文 Figure 1:：“Gepard architecture. Three input streams — the optional Q-Former voice-cloning prefix, the text embedding, and the audio interface (32 FSQ channels) — are concatenated into a…”。*

该图展示了 3 路输入到统一主干再到双分支输出的完整路径：左侧紫色框为 Q-Former 压缩器及其 CFG 丢弃逻辑，中间为文本嵌入，右侧为 32 通道音频接口，中间红色框为拼接后的统一序列与 Qwen3.5 主干，下方分叉为 32 个码本头与停止头。阅读时应核对每路输出的形状标注 B×K×d 与 B×T×d 是否与拼接维度 1 致，并注意前缀丢弃操作的位置以及停止头与码本头的并行分支结构。

### 音频侧如何把 32 个离散码变成与文本对齐的连续帧？

音频接口是工程最重的部分，目标是把离散码转为与文本嵌入尺度一致的连续向量。原始 NanoCodec 输出为 8 个打包码，每个取值 0 到 2015，GEPARD 在数据管线中做混合进制展开，将每组按[8,7,6,6] 拆为 4 通道，得到每帧 32 通道、字母表大小循环为 8、7、6、6 的表示。接口对每通道做独立查表，得到 32 个维度为 32 的向量，拼接为 1024 维后经两层线性与 GELU 的 MLP，再经无仿射 LayerNorm 并乘以固定系数 s_audio。设计理由有四点：一是用 MLP 而非求和或平均，以非线性建模 32 个量化器的联合结构。

二是移除早期 Linear→RMSNorm→乘 0.02 的缩放屏障，该屏障曾使音频梯度比文本小约 2400 倍，移除后梯度提升 10 到 20 倍；三是用无可学习参数的 LayerNorm 固定帧范数，避免主干首层 RMSNorm 丢弃幅度后尺度自由漂移导致 GELU 饱和退化为线性；四是用 s_audio 对齐文本嵌入标准差，使 2 模态从首步就处于同分布。

**GroupFSQ × 因子化并行采样：** GroupFSQ 指把隐空间分成 8 个独立子空间、每组用[8,7,6,6] 网格量化得到 32 个正交通道的编码方式；因子化并行采样指在同一时间步对 32 个通道的分类头独立并行采样而非逐码本串行或用深度 Transformer 建模联合分布。搭配理由是 GroupFSQ 通道间条件互信息近零，数学上允许因子化近似，组合意义是一步生成完整音频帧，彻底避免在解码循环内加入垂直深度变换，从而保住 vLLM 兼容性。

因子化是否可行取决于通道间的条件互信息，论文给出信息论视角的判据。

\[I\;=\;\sum_{i=1}^{32}H(c_{i}\mid h)\;-\;H(c_{1},\dots,c_{32}\mid h)\;\geq\;0,\]

该式定义多信息为因子化熵和与真实联合熵之差，非负且为零时因子化无误差；GroupFSQ 设计上使该值近零，因此 32 头并行采样在数学上成立，无需深度变换器。

**音频接口 MLP × 跨模态尺度对齐：** 音频接口 MLP 指对 32 个码本查表结果拼接后经两层 GELU 与无仿射 LayerNorm 的非线性映射；跨模态尺度对齐指用固定系数 s_audio 将音频帧向量缩放到与预训练文本嵌入相同标准差并配合分段学习率。搭配原因是文本表示已预训练而音频从零学习，直接拼接会导致梯度饥饿与尺度漂移，组合后既保留通道间非线性联合结构，又使 2 模态在主干首层 RMSNorm 前处于同一数值分布，稳定联合优化。

尺度对齐的固定系数通过文本嵌入的统计量设定。

\[s_{\text{audio}}\leftarrow\operatorname{std}(\text{embed\_tokens})\]

该式将 s_audio 设为预训练文本嵌入表的标准差，使经过 LayerNorm 后的帧向量在进入主干前与文本向量范数匹配，避免初期数值失配。

输出侧的监督由 32 个分类头与停止头共同构成。

\[\mathcal{L}=\underbrace{\sum_{k=0}^{31}\mathrm{CE}\bigl(\text{logits}_{k},\,\text{labels}_{k}\bigr)}_{\text{32 codebook heads}}\;+\;w_{\text{stop}}\cdot\mathrm{BCE}_{\text{pos\_weight}}\bigl(\text{stop\_logits},\,\text{stop\_labels}\bigr),\]

该式为核心损失：对 32 个通道分别计算带因果位移的交叉熵求和，再加权二元交叉熵的停止损失，权重 w_stop 为 2 且正类权重为 25 以补偿约 1 比 150 的类别不平衡；若微批次内全部标签为忽略标记，则用 logits 乘零保持计算图但梯度为零，避免均值交叉熵出现 0 除 0 的 NaN。

### 声音克隆与停止判断如何不进入解码循环？

声音克隆被设计为可选前缀，仅在 prefill 阶段计算。参考音频的码栈经展开与反量化后线性投影并加入仅对参考特征的正弦位置编码，查询侧无位置编码；K=8 个可学习查询经 2 块 Q-Former 块处理，每块为自注意力、到参考特征的掩码交叉注意力与 SwiGLU 前馈的预归一化结构，输出经缩放的 RMSNorm 且初始输出尺度为 1 除以根号 d，使前缀初始范数约 1 而不压制文本与音频。K=8 被选为瓶颈以防止复制粘贴泄露，压缩器参数与 null_prefix 以 0.1 倍学习率训练。

为支持分类器自由引导，引入可学习的 null_prefix 并以两种或逻辑触发替换真实前缀：一是训练期以 0.15 概率的随机丢弃，二是对低频说话人与无说话人来源的强制替换，结构性无条件暴露约 3.05%，保证即使密集说话人桶也能见到无条件路径。正则化在归一化后的 q_normed 上计算并经课程线性爬坡引入，包含两项：一是铰链方差多样性损失，阈值 0.5，迫使 K 个查询不坍缩为同一向量。

二是监督对比损失，将 K 个 token 平均后经两层 MLP 投影并 L2 归一化，以同说话人为正样本、其他说话人与背景哨兵为负样本，温度 0.1，迫使表示对文本内容不变而对音色敏感。采样采用 P 乘 K 加 M 方案，P 为 16 个说话人、每人 3 段、另加 16 段背景哨兵，跨卡扩展负样本。

**Q-Former 压缩器 × 监督对比损失：** Q-Former 压缩器指用 K=8 个可学习查询经自注意力与对参考音频的掩码交叉注意力生成固定长度说话人前缀的模块；监督对比损失指在归一化后的前缀上以说话人身份为正样本、其他说话人为负样本的对比约束。搭配理由是量化表示易让压缩器直接复制参考频谱细节而非提炼音色，组合意义是强制表示对文本内容不变而对说话人敏感，配合 K=8 瓶颈与多样性损失抑制复制粘贴泄露。

停止判断不使用词表中的 EOS，而是独立的伯努利头。每步先以 p_stop 做是否终止的伯努利采样，再对 32 通道做分类采样，轨迹对数似然为各通道对数概率之和加上终止与非终止的伯努利项。训练中停止头迅速饱和，99.7% 的非终止帧概率落在 0.0001 到 0.004 之间，终止帧跳至 1.0，因此阈值采样与温度缩放无效，异常需在训练期纠正；同时 DPO 需把伯努利项纳入似然，否则偏好梯度无法作用于停止决策，且需对概率做 1e-4 截断以防 sigmoid 在极端 logit 处梯度消失。

**停止头 × 伯努利终止建模：** 停止头指在音频隐状态上单独的标量 sigmoid 分支，输出每帧终止概率 p_stop；伯努利终止建模指把生成视为先做是否停止的伯努利决策、再做 32 通道分类采样的 2 阶段随机过程。搭配原因是停止事件极稀疏且概率快速饱和为 0 或 1，组合后终止似然可显式写入轨迹对数似然，使 DPO 等偏好优化能对停止决策产生梯度，并通过 pos_weight 与概率截断避免阈值永远不触发或梯度消失。

该设计使克隆与停止都不参与逐帧解码循环：克隆前缀只在 prefill 生成 1 次，停止判断为单线性投影，完全兼容 vLLM 的扁平 KV 缓存与连续批处理。

### 预训练如何平衡预训练文本与从零音频的优化？

训练分为预训练与 2 阶段微调，微调含 SFT 与 DPO，DPO 用于解决短寄存器失效。预训练数据为多语言混合，共 27,623,833 条、68,833 小时、1,675,752 个说话人，帧率 21.5 Hz，片段均长 8.97 秒、中位 7.44 秒、95 分位 19.2 秒，文本平均 32.7 个干净 token。优化上采用模态尺度对齐框架四件套：一是消除梯度屏障，移除 0.02 缩放后音频梯度提升；二是固定隐范数，用无仿射 LayerNorm 避免尺度漂移；三是按最大更新参数化原则初始化，音频查表方差 1.0、MLP 权重方差与输入维度平方根成反比、偏置为零，并用 s_audio 对齐文本方差。

四是分段学习率，文本嵌入 0.2 倍、音频接口 0.5 倍以保护预训练结构。诊断显示文本嵌入漂移在第 3 轮后稳定于约 0.34，余弦相似度 0.948，有效秩维持约 955/1024，表明适配而未坍塌；总损失与梯度范数平滑下降至约 1.5 的基线，平台期源于计算预算而非容量饱和。音频侧 32 个查表头的有效秩均接近各自天花板，平均达 97%，说明码本得到充分利用。

**分类器自由引导 × DPO 蒸馏：** 分类器自由引导指在每步同时计算条件与无条件两遍前向并加权融合以增强文本依从性的两遍生成；DPO 蒸馏指用离线成对生成与长度质量归一化奖励把两遍引导的效果通过直接偏好优化写入单遍模型的 LoRA 权重。搭配理由是两遍引导与 vLLM 单遍解码循环冲突，组合意义是服务期只跑单遍前向却保留引导带来的清晰度与稳定性收益，满足把定制移出解码循环的总原则。

有效秩作为是否坍塌的诊断指标，其定义基于奇异值的熵。

\[\operatorname{eff\_rank}(W)=\exp\!\left(-\sum_{i}p_{i}\log p_{i}\right),\qquad p_{i}=\frac{\sigma_{i}}{\sum_{j}\sigma_{j}}.\]

该式将有效秩定义为归一化奇异值分布熵的指数，值接近矩阵行数时表示满秩无坍塌；对音频查表头其上限为通道字母表大小，对文本嵌入上限为 1024，因此 955/1024 与各通道接近天花板均指示未发生维度坍塌。

为判断文本嵌入是否在低学习率下保持结构且损失平稳下降，可先观察预训练过程的双面板曲线变化趋势。

> **看图路径：** 1. 左图对比蓝色损失与红色梯度范数随 epoch 的同步下降及分箱平滑后的收敛平台；2. 右图观察绿色漂移曲线在约 0.34 处进入平台与紫色有效秩维持在 955 附近的稳定性；3. 核对横轴 0 到 7 的 epoch 范围与左右双纵轴的数值区间是否与正文描述一致

> **论文图 2（像素未随页面持久化）**：Figure 2: Diagnostics of modality alignment during pretraining. Left: loss/total and gradient norm (binned). Right: text embedding drift flattens at \approx 0.34, while the effective rank stays around \approx 955/1024, indicating adaptation without losing the pretrained structure.

*论文图 2。原论文 Figure 2:：“Diagnostics of modality alignment during pretraining.”。*

左图显示损失与梯度范数随 epoch 的分箱均值与原始抖动，右图显示文本嵌入漂移与有效秩的演变。应先确认左图蓝色损失从约 50 下降至约 40 附近并趋于平稳，红色梯度从约 5 快速降至 1.5 左右；再确认右图绿色漂移在 0.34 虚线处进入平台，紫色有效秩始终在约 955 水平，说明低学习率策略有效保留了预训练结构且未发生秩坍塌。

压缩器在预训练期参与优化，微调与 DPO 阶段则冻结，相应正则与专用采样停用。短文本失败被定位到主干而非停止头：部分失败中停止头在数秒后仍能输出 1.0，表明主干未能及时退出说话模式，这为后续文本重复增广与 DPO 补偿提供了依据。

### 在什么数据、硬件与协议上测延迟与吞吐？

评估围绕可服务的实时性展开，而非单纯追求可懂度绝对最优。数据上预训练混合以英语为主约 85%，另含西班牙语伊比利亚与墨西哥、巴西葡萄牙语、荷兰语与吉尔吉斯语等多语来源，但音频接口主要在英语上优化，其他语言需专门微调。硬件与协议上区分概念验证与生产服务 2 个阶段：前者在租用 RTX 5090 上做单流 vLLM 冒烟测试，后者在服务器级 GPU 上用 SSE 流式协议做端到端全链路压测，包含主干与 NanoCodec 解码。

指标上关注首音频时间、实时因子与并发聚合加速比，实时因子为生成耗时与音频时长的比值，聚合加速比为多流并发下的等效实时倍数。基线与对照包括早期单流 RTF 约 0.040 与 TTFA 约 0.032 秒的非严格环境结果，以及生产环境单流 RTF 约 0.067 与 TTFA 约 0.046 秒的严格端到端结果，二者量级一致，差异归因于测量环境而非回归。并发压测覆盖 1 到 256 流，观察线性扩展与每流实时因子的变化，确定 64 到 128 流为每流仍保持 RTF 小于 0.75 的舒适区间。

### 端到端流式推理在单流与高并发下表现如何？

生产级端到端流式推理在单流与高并发下均显示明显余量。单流实时因子与首包延迟满足交互阈值，并发聚合加速比随流数线性增长，说明标准 Transformer 主干与 vLLM 连续批处理未被定制算子破坏。为便于核对，将不同测量阶段与并发条件下的关键数字整理如下，比较时需注意硬件与协议是否一致，且实时因子越小越好、聚合加速比越大越好。

| 测量阶段与条件 | 评估指标 | 单流 RTF | 首音频延迟 | 并发聚合加速比 |
| --- | --- | --- | --- | --- |
| 概念验证单流 RTX 5090 非严格 | 流式端到端 | 约 0.040 | 约 0.032 秒 | 未测并发 |
| 生产服务单流 服务器级 GPU SSE 全链路 | 流式端到端 | 约 0.067 | 约 0.046 秒 | 单流等效约 15 倍实时 |
| 生产服务 256 并发 服务器级 GPU | 并发聚合 | 单流 RTF 随并发上升 | 每流 TTFA 保持交互可用 | 约 204 倍 |
| 生产服务 64 到 128 并发 推荐区间 | 并发聚合 | 每流 RTF 小于 0.75 | 保持舒适交互 | 线性扩展 |
| 早期单流对比 生产单流 | 环境差异 | 0.040 对比 0.067 | 0.032 秒对比 0.046 秒 | 量级一致非回归 |

该表显示单流在两种环境下实时因子分别为约 0.040 与约 0.067，对应约 25 倍与约 15 倍实时，首包延迟分别为约 0.032 秒与约 0.046 秒，差异来自测量严谨度而非模型退化；256 并发下聚合加速比约 204 倍，验证了 vLLM 原生服务的线性扩展能力。代价是单流绝对数值在更严格的全链路与流式协议下略有上升，且每流实时因子随并发增加而抬升，因此推荐 64 到 128 流作为兼顾吞吐与交互体验的工作区间。

论文同时说明在 Seed-TTS-eval 等可懂度榜单上模型处于中游，商业大系统在词错率与 MOS 上领先，GEPARD 在开源克隆队列中 MOS 相对较好，这与本工作以可服务性为首要目标的定位一致，未胜出的可懂度项提示后续版本需在保持服务兼容的前提下优化语言建模。

### 哪些设计被验证为必要，哪些假设仍待消融？

已验证的必要设计集中在模态对齐与码本组织。移除 0.02 缩放屏障使音频梯度提升 10 到 20 倍，消除梯度饥饿；无仿射 LayerNorm 固定帧范数防止 GELU 饱和退化；s_audio 对齐与分段学习率使文本漂移稳定在约 0.34 且有效秩保持约 955/1024。码本侧 32 个独立小头的有效秩均接近各自天花板，平均达 97%，支持无码本坍塌的判断。

同时信息论分析与外部 Magpie-TTS 的无局部变换器模式共同支持 GroupFSQ 下因子化并行采样的合理性，但论文明确指出未在本模型上做深度头开关的完整消融，仍为未来工作。停止头的饱和特性与类别不平衡补偿也得到验证：正类权重 25 使阈值可被跨越，概率截断 1e-4 避免梯度消失，且伯努利项必须纳入 DPO 似然。未验证或待补的点包括：保留全注意力而移除线性层的决策仅基于 2 次非正式试听、未做定量对比；短寄存器失效的文本重复增广与 DPO 蒸馏的增益尚未以受控消融表形式量化。

多语合成质量受限于英语主导的优化，需专门微调。

为验证 32 个 FSQ 通道的码本是否被充分利用且未发生坍塌，可直接读取各通道有效秩的柱状分布与天花板对比。

> **看图路径：** 1. 按颜色区分 8 级蓝色、7 级绿色、6 级紫色通道的柱高与右侧 max 虚线天花板的距离；2. 检查 32 个通道是否都接近各自天花板以判断是否存在码本坍塌现象；3. 阅读左上角红框中平均秩 97% 与文本嵌入秩 955/1024 的汇总标注含义

> **论文图 3（像素未随页面持久化）**：Figure 3: Effective rank of the 32 audio lookup tables during pretraining. The dashed line is the structural ceiling (the number of FSQ codes of the channel). All heads remain close to the ceiling, indicating full capacity utilization and no intra-head collapse.

*论文图 3。原论文 Figure 3:：“Effective rank of the 32 audio lookup tables during pretraining.”。*

该图按 FSQ 通道索引展示 32 个头的有效秩，颜色区分 8、7、6 级通道，右侧虚线为各通道的理论上限。应逐组核对蓝色 8 级柱是否接近 8、绿色 7 级接近 7、紫色 6 级接近 6，并确认所有柱均未远离上限，左上角标注的平均 97% 与文本嵌入 955/1024 共同说明无坍塌且容量得到充分利用。

### 当前版本的边界与未解决风险是什么？

论文将当前版本标记为 0.0.1 并明确多项边界。语言上虽为多语预训练，但音频接口以英语为主，其他语言合成质量有限，需专门微调。声音克隆为概念验证，基于 WavLM 说话人嵌入评估的未见说话人相似度偏低，分析指向量化表示的泄露而非单纯技术缺陷，K=8 瓶颈与对比约束虽缓解复制粘贴，但未完全解决。短寄存器失效虽提出诊断与补偿思路，但极短输入的鲁棒性仍需更系统的量化评估与阈值校准。

服务兼容性上，全注意力主干的选择缺乏定量消融，未来可能重新评估线性层的作用。数据与训练上，预训练约 7 轮未完成全部 8 轮计划，损失平台受预算限制，停止头的极端饱和使推理期阈值与温度等启发式无效，异常需回到训练期修正。评估上可懂度处于中游，未在所有榜单上领先，且并发压测的最优区间为 64 到 128 流，超过后每流实时因子将超过 0.75，需在成本与体验间权衡。

### 要复现与复用，需按什么顺序检查实现？

复现应按数据管线、接口尺度、主干与输出头的顺序检查。数据管线需复现 NanoCodec 的混合进制展开，将 8 个打包码按[8,7,6,6] 展开为 32 通道，并在采样与标签构造时保持因果位移与前缀丢弃的对齐。音频接口需实现 32 个独立查表、拼接、两层 GELU MLP、无仿射 LayerNorm 与 s_audio 缩放，初始化时音频表方差 1.0、MLP 权重方差与输入维度平方根成反比，文本嵌入学习率 0.2 倍、音频接口 0.5 倍、压缩器 0.1 倍。主干保持 14 块全注意力、隐维度 1024、8 头、输入 RMSNorm、训练期不使用缓存，且不插入层内钩子。

输出头为 32 个小分类头与一个停止头，停止损失权重 2、正类权重 25、概率截断 1e-4，且在微批次全为忽略标记时用 logits 乘零避免 NaN。声音克隆需实现 K=8 查询、2 块 Q-Former、参考侧正弦位置编码、null_prefix 的或逻辑替换与两项正则的课程爬坡，微调与 DPO 阶段冻结压缩器。推理与服务需用标准 vLLM 引擎验证单流与并发的端到端链路，包含编码器解码与 SSE 块级流式，避免在解码循环内加入任何定制算子。

为便于按图索骥，将核心配置与数据规模汇总如下，复现时应逐项核对参数是否冻结、梯度路径是否连通以及监督来源是否正确。

| 模块与对象 | 关键参数 | 关键设置 | 备注与检查点 |
| --- | --- | --- | --- |
| 主干 Qwen3.5 | 14 块 8 头 | 标准全注意力 无定制算子 | 仅文本嵌入继承预训练 其余从零训练 |
| 编码器 NanoCodec | 21.5 帧每秒 1.89 千比特每秒 | GroupFSQ 8 组 32 通道 | 8 个打包码展开为 32 通道 216 logits |
| 音频接口 | 32 查表各维度 32 | 无仿射 LayerNorm s_audio 对齐 | 移除 0.02 屏障 梯度提升 10 到 20 倍 |
| 声音克隆 | K=8 查询 2 块 | CFG 丢弃 0.15 结构性暴露约 3.05% | 多样性阈值 0.5 对比温度 0.1 |

该表覆盖从模型规模到数据分布的关键超参数，复现时应重点验证音频接口的尺度对齐与梯度路径、停止头的类别权重与截断、以及克隆前缀的瓶颈与正则是否按课程引入，任何在解码循环内新增的定制都需移至 prefill 或离线蒸馏，否则将破坏 vLLM 兼容性。

训练与部署成本需分别核对：预训练在 4 卡 RTX 6000 上用 FSDP2 跑约 7 轮，梯度范数最终约 1.5，文本漂移约 0.34；推理端到端包含主干与声码器，单流与并发的 RTF 与 TTFA 需在 SSE 流式协议下复测，避免仅测主干而低估全链路开销。

| 成本与阶段 | 硬件与协议 | 关键指标 | 数值与单位 | 对比与限制 |
| --- | --- | --- | --- | --- |
| 预训练诊断 | 同上 | 梯度范数与漂移 | 梯度约 1.5 漂移约 0.34 | 有效秩约 955/1024 无坍塌 |
| 推理单流 | RTX 5090 与服务器级 GPU | RTF 与 TTFA | RTF 约 0.040 与约 0.067 TTFA 约 0.032 秒与约 0.046 秒 | 环境差异非回归 量级一致 |
| 推理并发 | 单服务器级 GPU SSE | 聚合加速比 | 256 流约 204 倍 | 推荐 64 到 128 流每流 RTF 小于 0.75 |
| 输出帧率 | NanoCodec | 帧率与码率 | 21.5 帧每秒 1.89 千比特每秒 | 每帧约 1024 采样 32 通道并行 |

该表区分了训练资源、推理开销与输出帧率，避免把总体加速比误读为每流延迟不变，也避免把帧率等同于实际延迟；复现时应分别报告主干耗时与声码器耗时，并核对并发下的每流 RTF 变化。

### 何时值得尝试该方案，还需补哪项验证？

当任务要求在标准大模型服务栈上提供低首包延迟与高并发的对话语音，且能接受以可服务性优先于绝对可懂度最优时，该方案值得尝试。其核心判断是把定制移出解码循环：用 GroupFSQ 与因子化并行采样实现单步帧生成，用 prefill 前缀实现声音克隆，用 DPO 把两遍引导蒸馏为单遍权重，从而完整保留 vLLM 的连续批处理与分页注意力。适用条件包括：已有 vLLM 服务、需要块级流式输出、且能提供参考音频或接受无克隆模式。

复现优先级为先打通文本与 32 通道音频的联合自回归与尺度对齐，再验证停止头的饱和与截断逻辑，最后接入 Q-Former 前缀与 DPO 蒸馏。仍需补充的验证有：深度变换器开关的受控消融、全注意力与线性层变体的定量对比、短寄存器在 1 到 2 词输入上的系统化鲁棒性评估、以及多语与未见说话人相似度的正式度量。常见误解是把总体加速比等同于每流延迟不变，或把码本有效秩接近上限误读为压缩成功；前者需区分聚合吞吐与单流 RTF，后者应理解为无坍塌而非降维成功。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.04222)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-08/)
