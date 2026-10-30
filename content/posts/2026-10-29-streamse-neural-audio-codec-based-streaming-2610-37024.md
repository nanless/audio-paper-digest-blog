---
title: "StreamSE: Neural Audio Codec-based Streaming Speech Enhancement for On-device Inference"
date: 2026-10-29
draft: false
tags: [语音增强, 神经编解码与离散单元, 流式处理, 端侧运行]
categories: [论文速递]
description: "StreamSE 针对因果流式与手机端算力约束，用冻结因果神经音频编解码器的连续隐变量回归代替离散 token 分类与迭代采样，在 DNS Challenge 2020 上以零前视达到可比离线生成模型的 DNSMOS，并以单核 p95 每帧 61.04 毫秒满足 80 毫秒预算，代价是截断精细量化层级会损失部分说话人相似度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.37024"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在冻结语音编解码器隐空间里逐帧回归：StreamSE 的流式增强路线"
paper_digest_original_title: "StreamSE: Neural Audio Codec-based Streaming Speech Enhancement for On-device Inference"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.37024v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.37024v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.37024v1.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.neural-codec","label":"神经编解码与离散单元"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"}]
paper_digest_primary_method: "神经编解码与离散单元"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "StreamSE 针对因果流式与手机端算力约束，用冻结因果神经音频编解码器的连续隐变量回归代替离散 token 分类与迭代采样，在 DNS Challenge 2020 上以零前视达到可比离线生成模型的 DNSMOS，并以单核 p95 每帧 61.04 毫秒满足 80 毫秒预算，代价是截断精细量化层级会损失部分说话人相似度。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hyunjin Choi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zinu Kim"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junwon Moon"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jeongyun Chae"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Seungbeom Kim"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kyuhong Shim"}]
paper_digest_abstract_sha256: "d5777d444bd17e1ff036fc058f24598a0dbc42194066a9a80af6e76113eda8a8"
paper_digest_sidecars: {"citation.bib":{"sha256":"f64d41e8edef8e14ac2affc1e0a0286c4abdd7c92578ebc194efc688e6212a23","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-37024/citation.bib"},"citation.json":{"sha256":"7aa8f6183a1bb0c3ef3fd30e56333807c8cfb58bc632eccc2123b9278769bcf8","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-37024/citation.json"},"citation.ris":{"sha256":"93000c4ba0ac196394fc34b22c1aca54cb23239ab5d858008ab94f0655858976","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-37024/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"1159ca47960e7d1b6b3938bc978d3ed18972cf58662fd15bc2909d97c3304be6","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-37024/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2aa71dce8554961e3f54603c6485357355065905339ebf0902993f32f3c40e08"
paper_digest_api_reader_plan_sha256: "69fbef8e9893cf96e537f08f918a5ecd7b976e4d95584b98842a88bee966abbc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "143dc8f94a7b57948799b06ef1fac328fee3db507bafbe2ff7821e3391d8d3ac"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "b627e74fc0bbcef3e54b5bbb8faa07e37699e00926fd82701518df4fe99fdac0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6b8b421415d9d2d46d56b800f8dd4b14bc084b14dd543126526e7498b5c56b71"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7a427240def912051e3bf4c9cbb30f95ac1263af0f31fc25b49d6aee39ddf2a5"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在冻结语音编解码器隐空间里逐帧回归：StreamSE 的流式增强路线

> 英文题目：*[StreamSE: Neural Audio Codec-based Streaming Speech Enhancement for On-device Inference](https://arxiv.org/abs/2610.37024v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音增强](/audio-paper-digest-blog/papers/?concept=task.speech-enhancement)
- **研究方法**：[向量量化](/audio-paper-digest-blog/papers/?concept=method.vector-quantization) → [神经编解码与离散单元](/audio-paper-digest-blog/papers/?concept=method.neural-codec)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)；[端侧运行](/audio-paper-digest-blog/papers/?concept=setting.on-device)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Hyunjin Choi：机构信息未能在本次解析中与作者逐人可靠绑定
- Zinu Kim：机构信息未能在本次解析中与作者逐人可靠绑定
- Junwon Moon：机构信息未能在本次解析中与作者逐人可靠绑定
- Jeongyun Chae：机构信息未能在本次解析中与作者逐人可靠绑定
- Seungbeom Kim：机构信息未能在本次解析中与作者逐人可靠绑定
- Kyuhong Shim：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音增强要从含噪语音恢复干净语音，电话与助听等场景要求输出只依赖当前与历史帧，同时每帧在设备上按时算完，而生成式方法常用非因果结构与迭代采样，难以同时满足这两点。论文把48 kHz波形先送入冻结的因果神经音频编解码器，得到每80 ms一帧、维度768的连续隐向量，再由约20M参数的StreamSE回归干净隐向量，最后经截断至8层粗粒度的残差向量量化器与解码器重建波形。StreamSE训练时以真实量化隐向量做教师强制并行学习，推理时把自身上一帧量化输出作为条件逐帧自回归，经因果自注意力利用全部历史保持时序连续。相对逐层分类离散词元或扩散多步采样的做法，该路线每帧只需一次前向，不做前视与迭代采样，并把高保真重建留给编解码器，截断细层以去掉残留混响。在DNS Challenge 2020测试集含混响类别上，零前视StreamSE的DNSMOS整体平均得分OVL为3.086，高于同期对比的生成式基线SELM的2.695。在同一测试集无混响类别上，零前视StreamSE的DNSMOS整体平均得分OVL为3.361，也高于SELM的3.258，表明在相同感知指标下匹配或超过非流式离线基线。结论限于该测试集的DNSMOS感知指标与所用合成训练分布，截断至更少层数时无混响说话人相似度损失加大，真实录音与更重混响外推尚未充分验证。Galaxy S22单大核ONNX中央处理器、动态int8下全链路每帧耗时p95为61.04 ms，占80 ms预算的76%，其中StreamSE本体为5.46 ms，编解码器约占91%延迟。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音增强要解决什么输入输出问题

语音增强的输入是混入噪声、混响或带限失真的语音波形，目标是恢复出干净可懂的语音。这篇论文面向电话、助听器和端侧语音助手这类场景，输出既要直接给人听，也要作为语音识别的前端。

这类场景同时有两个硬约束。第一是因果性，t 时刻的输出只能依赖当前和过去的输入帧，不能偷看未来。第二是算力预算，每 1 帧必须在 1 帧的时间内在设备上算完。论文把问题明确为流式因果增强，而不是整句离线增强。

初学者容易把降噪理解为做掩蔽或滤波。判别式方法确实是这条路线，在时域或时频域把带噪映射到干净，但在严重退化下常在噪声抑制与信号保留之间折中。生成式方法则是重新生成干净语音，感知质量往往更高，但扩散模型需要迭代采样，语言模型式 token 生成需要逐层分类，离线结构又需要看整句，这些都与流式端侧约束冲突。

### 已有生成式与流式路线卡在哪里

论文把已有工作分成两族。判别式一族包括 Conv-TasNet、Demucs 和 Inter-SubNet，分别在时域或时频域做映射。生成式一族包括基于扩散的 CDiffuSE、SGMSE、StoRM，以及基于 token 语言模型的 SELM。SELM 把干净语音生成为离散 token，感知质量超过判别式基线，但一次处理整句，是非因果的。

另一条线索是用神经音频编解码器做表示。已有工作以退化输入为条件生成干净编解码器 token，有时还经过中间语义阶段。近期有研究指出预测连续隐变量常优于预测离散 token，且向量量化本身带来鲁棒性。也有工作在冻结编解码器的量化前嵌入上做增强，但只在非流式整句层面评估，面向云端。

流式增强本身多为判别式，常带短前视。自回归地把自己过去输出作为条件的做法在低延迟和多通道场景有过研究。Token 生成式在流式下探索很少，且已有工作依赖专为低延迟设计的编解码器，代价多报服务器 GPU 上的实时率，而不是目标设备上的逐帧时间。论文的差异是连续隐变量预测加完全因果零前视，并在手机上直接测逐帧耗时。

### 为什么非因果与迭代采样难上设备

非因果意味着模型要等未来帧或整句到达才能输出，这带来算法延迟。电话和助听器不能容忍这种等待，论文把零前视作为默认配置，每帧 80 毫秒，算法延迟就是 1 帧。

迭代采样意味着扩散或流匹配在推理时要跑很多步才能得到 1 帧输出，计算量随步数线性增长。离散 token 分类则意味着残差向量量化的每一层都要做一次分类，计算量随层数增长。两者在手机单核上都很难塞进每帧预算。

论文要回答的是，能否只用每帧一次前向、无迭代、无前视，就达到接近离线生成模型的感知质量。为此它把重建工作交给冻结编解码器，把增强工作压缩为回归一个连续向量，并用粗粒度量化层级同时减少 token 数和抑制混响。

### StreamSE 一帧经历了哪些模块

整体管线包括冻结的编解码器编码器、残差向量量化器、解码器，以及放在编码器与量化器之间的可训练模块 StreamSE。只有 StreamSE 被训练，编解码器全程冻结。推理时编码器把带噪波形映射为连续隐变量，StreamSE 预测增强隐变量，量化反量化后再由解码器重建波形。

下面这张总览图把训练与推理画在一起，上半是训练的双路径与 3 个监督位置，下半是推理的回路，读图时先分清颜色代表带噪、干净目标与增强，再看拼接与延迟符号的连接关系。

> **看图路径：** 1. 先看上半训练分支中带噪与干净两条编码路径如何汇入拼接符号再进入 StreamSE；2. 再看橙色虚线箭头连接的三个监督位置：预测隐变量、解码波形与 mel 谱；3. 最后看下半推理分支中 Delay 回路把量化后隐变量送回输入的位置

[![原论文 Figure 1：Overview of StreamSE during training (top) and inference (bottom).](https://arxiv.org/html/2610.37024v1/figure1.png)](https://arxiv.org/html/2610.37024v1/figure1.png)

*论文图 1。原论文 Figure 1:：“Overview of StreamSE during training (top) and inference (bottom).”。*

从图中可见，训练时带噪路径提供当前帧带噪隐变量，干净路径提供上 1 帧真值量化结果，两者拼接后进入 StreamSE。预测出的增强隐变量一方面与干净隐变量比较，另一方面经量化解码后与编解码器往返参考比较波形与 mel 谱。推理时没有干净路径，拼接的是经延迟块回送的自己上 1 帧量化结果，模型通过因果自注意力实际看到全部历史，图中只画出 1 帧示意。

### 冻结编解码器提供什么表示与量化

论文采用 MOSS-Audio-Tokenizer-Nano 作为神经音频编解码器。它是因果流式编解码器，含量化器约 22M 参数，处理 48 kHz 波形，帧率为 12.5 Hz，即每 80 毫秒 1 帧。每帧编码为 768 维连续隐变量，再用 16 层、每层码本大小 1024 的残差向量量化离散化。选择它的理由是因果且帧率低。

量化后反量化记为 QDQk，含义是只用前 k 个粗粒度层级的码本向量求和，把连续隐变量映射回连续隐变量。该编解码器训练时用过量化器丢弃，因此解码器能只从前缀层级重建。论文利用这一点做层级截断，默认取 k 等于 8，在条件路径、辅助损失和解码路径统一使用相同的 k。

**神经音频编解码器 × 连续隐变量：** 神经音频编解码器指把 48 kHz 波形编码为低帧率向量、再经残差向量量化与解码重建波形的冻结前后端；连续隐变量指量化之前的 768 维实向量。StreamSE 不直接生成波形或离散 token，而是以带噪连续隐变量为输入、回归干净连续隐变量，再交给同一编解码器的量化与解码完成重建，这样增强任务被压缩为每帧预测一个向量，高保真重建留给已训练好的编解码器。

### StreamSE 如何拼接历史并回归连续向量

StreamSE 是一个解码器-only 因果 Transformer，约 20M 可训练参数，不含冻结码本嵌入。隐层 512 维，6 层，8 个注意力头，使用旋转位置编码 RoPE。推理时 RoPE 用当前帧序号做位置偏移，每个查询只注意缓存的过去键与当前键，因此不需要显式因果掩码。

t 时刻的输入是当前帧带噪隐变量与上 1 帧量化隐变量的拼接。训练用教师强制，上 1 帧用干净真值量化结果，整序列可并行处理，第 1 帧上下文为零向量。推理是自回归的，上 1 帧用自己过去的量化预测，从而以增强过的历史为条件，保持相邻帧连贯。与离散自回归分类不同，这里每帧只回归一个连续隐变量，量化只在输出做一次，避免逐层重复分类。

**残差向量量化 × 层级截断：** 残差向量量化指用 16 层码本逐层量化残差、每层 1024 个码字的离散化方式，层数越多细节越多；层级截断指只保留前 k 个粗粒度层级、丢弃精细层级。两者搭配的意义是利用编解码器训练时带有的量化器丢弃特性，使解码器仍能从前缀层级重建，同时假设精细层级残留混响，截断后每帧 token 数减半并期望提升混响鲁棒性，但也会丢掉部分音色细节。

**自回归条件 × 教师强制：** 自回归条件指当前帧预测要拼接上一帧已增强并量化反量化后的隐变量作为上下文，并通过因果自注意力看到全部历史；教师强制指训练时把该上一帧上下文换成干净真值的量化结果以便并行训练。两者分工是训练求稳、推理求一致，推理时只能用自己过去的预测回送，从而保持相邻帧的时间连贯性。

### 三个损失分别约束什么，为何用往返参考

训练目标包括隐空间回归损失与沿解码路径的两个辅助损失。回归损失是预测隐变量与干净隐变量的 L1 距离。两个辅助损失比较的是同一量化解码路径产生的两个波形：增强输出与编解码器往返参考，即干净隐变量经相同截断量化解码得到的波形，分别在波形域和对数 mel 谱域算 L1。

用往返参考而不用原始干净波形，是为了把冻结编解码器自身的重建误差从辅助信号中去掉，使损失聚焦 StreamSE 的预测误差。mel 损失按 FlowSE 做法，用 100 维 log-mel，48 kHz 下跳长 512 点约 10.67 毫秒、窗长 2048 点约 42.67 毫秒。为端到端训练，量化处用直通估计器传梯度，编解码器参数仍冻结。总损失是三项加权求和，波形权重 0.2，mel 权重 0.5。

\[\mathcal{L}=\mathcal{L}_{\text{emb}}+\lambda_{w}\,\mathcal{L}_{\text{wav}}+\lambda_{m}\,\mathcal{L}_{\text{mel}}.\]

上式中第一项是隐变量 L1，第二三项分别是波形与 mel 的 L1，权重如上。训练用 125 个编解码器帧即 10 秒的片段，与推理 KV 缓存宽度一致，优化器为 AdamW，dropout 0.2，权重衰减 0.1，学习率前 1000 步线性热身到 6 乘 10 的负 4 次方再线性衰减，梯度裁剪到单位范数，在 16 GB V100 上有效批量 48 训练 20 轮。

### 数据如何合成，指标与基线如何对应

训练对在线合成。干净语音来自 LibriTTS-R 的 train-clean-100 与 train-clean-360 以及 VoiceBank-DEMAND 训练集干净部分。噪声以 0.8 概率来自 WHAM 或 DEMAND，信噪比负 5 到 20 分贝。以 0.5 概率加入 openSLR26 与 openSLR28 房间脉冲响应的混响。带噪信号均方根统一缩放到负 35 到负 15 分贝 FS。

还以重采样到 8、16 或 24 kHz 再回 48 kHz 的方式对干净与带噪同时带限做正则。加混响时目标为干声，即要求去混响而非保留混响。

测试用 DNS Challenge 2020 测试集 3 类：带混响合成、不带混响合成、真实录音。因生成式输出不一定与参考样本对齐，采用无参考 DNSMOS P.835，包括 SIG、BAK、OVL，均为越高越好。层级截断消融另报说话人相似度，即 WeSpeaker embedding 余弦相似度重缩放到 0 到 1。基线分判别式与生成式两族，数值均引自 SELM 论文，包括 Conv-TasNet、Demucs、Inter-SubNet、CDiffuSE、SGMSE、StoRM 和 SELM，其中只有 Demucs 与 StreamSE 标注为可流式。

### 零前视下感知质量与离线基线如何比较

下表比较的是 DNS Challenge 测试集上的 DNSMOS，Streamable 列表示该配置是否支持流式推理，StreamSE 各行区别在前视帧数ℓ，算法延迟为 1 加ℓ帧、每帧 80 毫秒，int8 行是同一零前视模型跑量化端侧管线的结果。指标方向均为越高越好，比较时需注意基线数引自前人论文而非本篇重跑，且除 Demucs 外生成式基线均为离线非因果。

| System | Streamable | With Reverb SIG | With Reverb BAK | With Reverb OVL | Without Reverb SIG | Without Reverb BAK | Without Reverb OVL | Real Recordings SIG | Real Recordings BAK | Real Recordings OVL |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Noisy | – | 1.760 | 1.497 | 1.392 | 3.392 | 2.618 | 2.483 | 3.053 | 2.510 | 2.255 |
| Conv-TasNet [3] | ✗ | 2.415 | 2.710 | 2.010 | 3.092 | 3.341 | 3.001 | 3.102 | 2.975 | 2.410 |
| Demucs [11] | ✓ | 2.510 | 2.641 | 2.215 | 3.124 | 3.257 | 3.010 | 2.974 | 2.870 | 2.291 |
| Inter-SubNet [4] | ✗ | 2.651 | 2.581 | 2.362 | 3.458 | 3.821 | 3.099 | 3.258 | 3.574 | 2.806 |
| CDiffuSE [2] | ✗ | 2.541 | 2.300 | 2.190 | 3.294 | 3.641 | 3.047 | 3.201 | 3.104 | 2.781 |
| SGMSE [15] | ✗ | 2.730 | 2.741 | 2.430 | 3.501 | 3.710 | 3.137 | 3.297 | 2.894 | 2.793 |
| StoRM [6] | ✗ | 2.947 | 3.141 | 2.516 | 3.514 | 3.941 | 3.205 | 3.410 | 3.379 | 2.940 |
| SELM [1] | ✗ | 3.160 | 3.577 | 2.695 | 3.508 | 4.096 | 3.258 | 3.591 | 3.435 | 3.124 |
| StreamSE (ℓ=2) | ✓ | 3.505 | 4.054 | 3.207 | 3.630 | 4.138 | 3.380 | 3.432 | 3.879 | 3.075 |
| StreamSE (ℓ=1) | ✓ | 3.493 | 4.044 | 3.189 | 3.628 | 4.143 | 3.382 | 3.410 | 3.875 | 3.054 |
| StreamSE (ℓ=0) | ✓ | 3.417 | 3.990 | 3.086 | 3.617 | 4.124 | 3.361 | 3.399 | 3.830 | 3.016 |
| StreamSE (ℓ=0, int8) | ✓ | 3.356 | 3.867 | 2.987 | 3.586 | 4.088 | 3.315 | 3.327 | 3.707 | 2.914 |

从表中可见，每个 fp32 的 StreamSE 配置在 9 个指标类别组合中的 7 个上超过全部外部基线，零前视配置已在带混响合成的 6 个指标上全部领先，并在真实录音的 BAK 上最高。论文强调它是比较中唯一的流式生成模型，结论是在完全因果零前视下达到可比甚至超过离线生成模型的感知质量。前视 1 帧在所有指标上都有提升，带混响下提升最大，前视 2 帧多为更小的递增，显示超过 2 帧后收益递减。int8 端侧行相对 fp32 零前视略有下降，但仍高于多数基线。需要指出 DNSMOS 是客观感知估计，不等于人工听感，且真实录音的 OVL 仍低于 SELM，说明优势主要集中在合成类尤其是带混响类。

从机制分工看，整条管线均为因果：编码器每帧把含噪波形映射为连续隐变量，StreamSE 直接回归对应的干净连续隐变量，量化和解码器再由该隐变量重建波形。为保持时序一致，模型把自身上 1 帧经量化再反量化后的增强隐变量作为下 1 帧的条件，首帧上下文为零向量，训练时用真值量化隐变量做教师强制并行处理，推理时则自回归地回灌自身过去预测并通过因果自注意力利用全部历史。

预测目标保持连续，每帧只在输出处量化一次，避免对每层残差向量量化码本逐层分类，从而把增强压缩为每帧单次前向，无需迭代采样也无需前视。编解码器本身冻结，仅训练约 20M 参数的解码器式因果 Transformer，截断则在条件路径、辅助损失与解码路径统一只用前 k 个粗量化层级，默认保留 8 层而丢弃被认为残留混响的细层，兼顾去混响与每帧词元数减半。

执行过程上，训练目标比较预测隐变量与干净隐变量，并比较同一量化解码路径下增强输出与编解码往返参考的波形及其对数梅尔谱，以剔除冻结编解码器自身重建误差，使损失聚焦 StreamSE 的预测误差，再用直通估计端到端传梯度。

### 手机单核上每帧时间花在哪里

端侧评估在三星 Galaxy S22 的 Snapdragon 8 Gen 1 上进行，固定到一个大核，ONNX Runtime CPU 后端，每次处理 1 帧 80 毫秒，所有权重矩阵乘法动态量化到 int8。KV 缓存 125 帧对应 10 秒训练片段，每段结束清空缓存与反馈状态。连续跑 330 秒并做温控，报预热后每帧 p95 时间，多次运行总量差异在 0.2 毫秒内取平均。

读这张耗时分解条带时，先看 3 段绝对毫秒数，再看总量相对 80 毫秒预算的余量，注意 StreamSE 只占很小一段，这对应编解码器主导延迟的结论。

> **看图路径：** 1. 先对比编码器、StreamSE、解码器三段横条的长度与下方毫秒数；2. 再看三段总长相对最右侧 80 毫秒预算虚线框的位置；3. 注意 StreamSE 段标注的参数量与耗时占比最小

[![原论文 Figure 2：Per-frame runtime breakdown of the streaming pipeline on a Galaxy S22 (single big core, ONNX…](https://arxiv.org/html/2610.37024v1/figure2.svg)](https://arxiv.org/html/2610.37024v1/figure2.svg)

*论文图 2。原论文 Figure 2:：“Per-frame runtime breakdown of the streaming pipeline on a Galaxy S22 (single big core, ONNX Runtime CPU backend, dynamic int8 weights, k=8).”。*

图中可见总 p95 为 61.04 毫秒，占 80 毫秒预算的 76%，且任何运行中没有超预算帧。其中编码器 27.72 毫秒，StreamSE 5.46 毫秒，解码器 27.86 毫秒，编解码器合计占 91%，StreamSE 占 9% 不足 10%。结合参数量看，编码器与解码器各 10.45M，StreamSE 为 20.06M，参数量大但耗时小，说明 Transformer 每帧一次前向的开销远低于卷积编解码器前后端。结论成立条件是单大核、动态 int8、k 等于 8 与 125 帧缓存，换模型量化方式或缓存宽度结果会变。

**算法延迟 × 每帧预算：** 算法延迟指为等未来帧而必须延迟输出的时间，零前视时为一帧 80 毫秒，前视ℓ帧时为 1 加ℓ帧；每帧预算指流式实时要求下处理一帧允许的最长时间，这里是 80 毫秒。两者分工不同，前者是方法固有的等待代价，后者是设备实测的计算代价，论文分别用前视行和手机单核 p95 耗时来说明。

### 只留粗粒度量化层级换来什么与失去什么

下表是层级截断消融，比较问题是截断多少层能在去混响与保音色之间取得平衡，所有模型同数据同轮数训练。表中 OVL 为 3 类上的 DNSMOS 总体分，SIM 为两类合成集上的说话人相似度，ΔOVL 与 ΔSIM 为相对 k 等于 16 的变化，†标记用于表 1 的设置。

| Levels | With Reverb OVL ↑ | Without Reverb OVL ↑ | Real Recordings OVL ↑ | With Reverb SIM ↑ | Without Reverb SIM ↑ | ΔOVL | ΔSIM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| k=16 | 2.973 | 3.346 | 3.000 | 0.660 | 0.818 | – | – |

结果显示截断主要作用于带混响类，OVL 随 k 减小单调上升，从 k 等于 16 到 k 等于 4 上升 0.169，而不带混响与真实录音的极差仅 0.024 与 0.026。这支持精细层级携带残留混响的假设。说话人相似度反向单调下降，从 k 等于 16 到 k 等于 4 在不带混响上降 0.120。交换并不对称，从 16 到 8 的带混响 OVL 增益 0.113 只花费不带混响 SIM 损失 0.039，而从 8 到 4 的进一步增益 0.056 却花费 0.081，每层 SIM 损失陡增。论文因此选 k 等于 8，保留大部分去混响增益而避开陡峭损失，且与 AudioDec 在 48 kHz 下同样用 8 层 1024 码本的配置 token 数一致。该表只覆盖 DNSMOS 总体分与说话人相似度，未报告 SIG 与 BAK 分项，结论限于所用合成与真实录音划分。

**DNSMOS × 说话人相似度：** DNSMOS 是无需干净参考的感知质量估计，分为 SIG 语音质量、BAK 背景抑制、OVL 总体三项，分数越高越好；说话人相似度是 WeSpeaker embedding 余弦相似度重缩放到 0 到 1，用于衡量音色保持。两者搭配是因为 DNSMOS 能反映去噪去混响观感但看不出是否改变了说话人，层级截断实验同时报告二者才能看到感知提升与身份损失的交换。

### 这些结论在什么边界外不再成立

首先质量结论依赖 DNSMOS 与引用的基线数。DNSMOS 是参考无关的感知估计，对生成式输出友好，但不检验样本对齐与内容忠实度。基线数引自 SELM 论文，未在本篇硬件与数据管线下重跑，若基线实现或评估版本不同，名次可能变化。

其次混响优势依赖合成混响与干声目标的训练设置。训练混响来自特定房间脉冲响应库，测试带混响也是合成类，真实录音的提升较小且 OVL 未胜出，因此不能把去混响能力直接推广到任意大厅或强混响。

再次实时结论依赖特定设备与量化管线。单大核、动态 int8、80 毫秒帧、125 帧缓存共同决定了 61.04 毫秒 p95，任一条件改变都需重测。int8 行 DNSMOS 相对 fp32 有可观下降，说明精度仍有代价。论文未报告误判率、功耗与长期发热下的稳定性，也未评估说话人相似度之外的可懂度与下游识别效果。

### 复现第一步要准备什么与核对什么

复现应先准备冻结编解码器 MOSS-Audio-Tokenizer-Nano 与相同的截断规则 k 等于 8，确保编码帧率 12.5 Hz、768 维、16 层 1024 码本的配置一致，再实现解码器-only 因果 Transformer 的拼接输入与延迟回送。训练需按原文合成带噪带混响对，注意混响目标用干声、带限正则与增益缩放，否则去混响行为学不出来。

损失要同时实现隐变量 L1 与以编解码器往返参考为目标的波形与 mel L1，权重 0.2 与 0.5，量化处用直通估计器且不更新编解码器。训练片段取 125 帧 10 秒，推理缓存同样宽度并按段清空。评估先跑 DNS Challenge 2020 3 类 DNSMOS，再跑 k 等于 4 到 16 的截断曲线核对 OVL 升与 SIM 降的交叉点。端侧需在目标手机单核上用相同 ONNX 与动态 int8 测 p95，不能用服务器 GPU 实时率代替。

本次未发现来源绑定且完成 HTTPS 验证的资源，不得声称代码、模型或数据已公开，复现只能依据论文文字与超参数从头搭建。

### 什么时候值得尝试这种连续隐变量回归

当任务同时要求因果流式、无前视与端侧单核实时，且已有可用的因果神经音频编解码器时，这条路线值得尝试。它把重建留给冻结后端，把增强压缩为每帧一个向量的回归，一次前向即可，避免迭代采样与逐层 token 分类，StreamSE 本身仅占总延迟约 10%。

若场景以保留说话人音色为首要目标，或混响很轻，则不宜把截断推到 4 到 6 层，因为 SIM 损失会陡增。若允许 1 到 2 帧前视且能接受相应算法延迟，可以换取带混响下的进一步提升，但需重估延迟预算。

还需补的验证包括人工听感与可懂度、下游语音识别增益、更多真实混响与移动端功耗发热测试。只有在这些条件下，论文报告的感知质量与实时性才能作为选型依据。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.37024v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-29/)
