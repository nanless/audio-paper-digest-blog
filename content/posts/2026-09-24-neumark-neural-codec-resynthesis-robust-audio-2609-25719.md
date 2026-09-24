---
title: "NeuMark: Neural Codec Resynthesis-Robust Audio Watermarking in the Codec Latent Space"
date: 2026-09-24
draft: false
tags: [音频水印, 注意力机制, 鲁棒性, 语音]
categories: [论文速递]
description: "针对神经编解码器重合成会抹掉波形域水印的问题，NeuMark 把 16 比特消息分布嵌入 SpeechTokenizer 的 8 路残差量化潜变量并用失真增强训练检测与解码，其代价是潜变量方法的透明度受限于编解码器自身重建质量并需区分原始参考与重建参考。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.25719"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把水印藏进编码器能保住的结构：NeuMark 对神经编解码器重合成的应对"
paper_digest_original_title: "NeuMark: Neural Codec Resynthesis-Robust Audio Watermarking in the Codec Latent Space"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.25719"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.25719.pdf"
paper_digest_primary_task: "音频水印"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.watermarking","label":"音频水印"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "注意力机制"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对神经编解码器重合成会抹掉波形域水印的问题，NeuMark 把 16 比特消息分布嵌入 SpeechTokenizer 的 8 路残差量化潜变量并用失真增强训练检测与解码，其代价是潜变量方法的透明度受限于编解码器自身重建质量并需区分原始参考与重建参考。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Annan Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wen-Chin Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tomoki Toda"}]
paper_digest_abstract_sha256: "710800100d355fe07ee209581ec51f2005ee4a68d4fd50578d9c1d6c0426bd97"
paper_digest_sidecars: {"citation.bib":{"sha256":"6a0c3a6a9217a7f1205c993aadd41836c3c3ab5f463490b459d95ef6fc0c6850","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-25719/citation.bib"},"citation.json":{"sha256":"44a740388d4e42b94b984b93fe7f2aee14d200c0c4ae228d57c421e1b76ad61f","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-25719/citation.json"},"citation.ris":{"sha256":"612f8cf95a0f3d3317e8f04ece688f33afcaad60c44134589d6ecf30f1c74803","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-25719/citation.ris"},"rethink-context.json":{"sha256":"52e910c781c556335f652edcc19ce8dd3dac3a6c84da4148236c7b9e73ed4b4e","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-25719/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4216e29d1822f075b340b5b6bab6c1b0d71bf6ef4364d9d0d05509b225461497"
paper_digest_api_reader_plan_sha256: "145c5a2b7f3a6c448ba8642df094432647786a685e106ac5cd6bb60bedb8963a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f176fddb6b008fa670b3eb5b3b1faffc96170e0327ebf90eed878bcc4c1aac3c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "c3176321b9311e3a3a42f7e7300ca3070010f8cb097ae2eea9c99dfab3fcbf0d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "acdad799843b1dae91fb3d7969f3cf8cc96bb5c9de5a24ad483d779346f87301"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9cb4a86ae96a2b470eacd8828359ef363447d67f78efaa1bd922ae216c34de8b"
paper_digest_api_reader_resource_count: 7
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把水印藏进编码器能保住的结构：NeuMark 对神经编解码器重合成的应对

> 英文题目：*[NeuMark: Neural Codec Resynthesis-Robust Audio Watermarking in the Codec Latent Space](https://arxiv.org/abs/2609.25719)*

> 标签：#音频水印 | #注意力机制 | #鲁棒性 | #语音
>
> 评分：**7.5/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Annan Wu：机构信息未在 arXiv HTML 中可靠披露
- Wen-Chin Huang：机构信息未在 arXiv HTML 中可靠披露
- Tomoki Toda：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

面向合成语音溯源的音频水印任务，输入为原始语音与16位消息，输出为听感相似的水印语音，难点在于神经编解码器重合成会丢弃与编解码保留结构不对齐的细微信号证据。NeuMark先用冻结的SpeechTokenizer编码器将波形映射为8路残差向量量化潜表示，再经交叉注意力水印编码器把消息记忆向量逐层注入各路残差流并残差相加。加水印潜序列经冻结解码器重建为水印语音，再经随机失真算子模拟数字信号处理编辑与编解码重合成后送入提取器，同时预测帧级存在概率与消息比特。训练以对抗、特征匹配、梅尔谱、潜余弦与解码检测多目标联合优化，并对比原始参考与重建参考两种变体以分离编解码失真与水印失真。与波形域和单层潜变量基线不同，NeuMark把证据分布到全部编解码对齐层，从而保留重合成下的可提取结构。在LibriSpeech test-clean评测设置下，NeuMark R-O的检测准确率为0.88，高于WavMark的检测准确率0.51。但潜水印受编解码器重建上限约束，原始参考下透明性下降，且单量化器极端压缩与变速仍是失效边界。训练依赖多卡长时优化，推理延迟与部署吞吐原文未量化，完整文本到语音集成与多语噪声外推尚未验证。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/goannan/NeuMark> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/wavmark/wavmark> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/facebookresearch/audioseal> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/TimbreWatermarking/TimbreWatermarking> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/zjzser/TraceableSpeech> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/spaces/haiyunli/VoiceMark> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/facebookresearch/audiocraft> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么要做可追溯水印

本文的输入是一段待发布的语音波形以及一个需要嵌入的 16 比特二进制消息，输出是一段听感接近原语音但携带可提取证据的带水印语音，后续仅根据待测语音就能回答是否含水印以及消息比特是什么。目标读者可以把任务理解为给合成语音贴一张听不见的标签，标签要在正常剪辑和恶意转码后仍然可读，从而把一段语音关联回它的生成管线或授权来源。

论文强调被动式 deepfake 检测依赖特定生成器的伪影，生成器改进后检测性能可能下降，因此主动嵌入证据的路线更适合溯源。需要保留的关键信息是消息长度固定为 16 比特，评价同时包含帧级检测与比特恢复，透明度需要在两种参考下分别理解。输出不是简单的二分类分数，而是一组检测概率加一组比特估计，后续实验围绕这两组输出在多种失真下的保持程度展开。

初学者容易把水印与加密混淆，这里水印不阻止收听或复制，只是提供事后可验证的来源证据，所以鲁棒性与不可听性必须同时成立。

本文面向刚进入语音与音频方向的研究生，默认读者已接触波形、采样率与频谱的基本概念，但不默认熟悉神经编解码器与残差量化的细节，后文会先用白话解释再给出英文术语。写作只依据论文原文证据与本次收到的官方原图像素，不引入外部评价或未报告的数值。代码当前可用，论文给出公开仓库地址为 <https://github.com/goannan/NeuMark>，资源状态显示可达。本文先建立任务与相关路线，再沿一个样本走完编码、嵌入、解码、失真与提取的全链路，然后讲清训练目标、实验条件、主结果与失败边界，最后给出复现步骤与适用判断。

### 同类方法把证据放在哪里，训练时见过哪些攻击

按嵌入位置划分，已有工作可分为波形域、音色特征域与潜变量侧 3 类。波形域方法直接修改生成波形，代表是 WavMark 与 AudioSeal；音色水印方法在音色相关表示中嵌入信息；潜变量侧或生成感知方法在解码前或合成过程中注入信息，代表是 TraceableSpeech 与 VoiceMark。前两类在滤波、噪声、重采样与音量等传统数字信号处理攻击下已表现出较强鲁棒性，但论文指出这不意味着能抵抗神经编解码器重合成，因为后者会经量化声学表示重建语音，只保留内容与说话人等稳定结构。

要公平比较潜变量侧方法，需要同时看嵌入位置、训练模拟攻击与质量优化参考这 3 个维度，否则只比较最终分数会掩盖设计差异。下表直接选用原文的对照表，它把三项设计选择并排呈现，是理解 NeuMark 定位的关键依据。表头中的嵌入位置指消息作用于哪 1 级表示，模拟攻击指训练时见过的失真类型，参考指质量损失对齐的目标音频。

| Method | Embed position | Simulated attacks | Reference |
| --- | --- | --- | --- |
| TraceableSpeech | After RVQ aggregation | DSP and EnCodec | Original |
| VoiceMark | VQ 2–8 speaker layers | DSP and voice-clone simulated augmentation | Original |
| NeuMark (ours) | Each RVQ layer | DSP, masking, and EnCodec | Original or codec recon. |

该对照显示 TraceableSpeech 在残差向量量化层聚合之后注入，VoiceMark 保留第一层向量量化层为内容并嵌入说话人相关的第 2 至 8 层，NeuMark 则对每一路残差向量量化层分别注入，使水印分布在全部编解码器层上。训练攻击方面，TraceableSpeech 使用数字信号处理加 EnCodec，VoiceMark 使用数字信号处理加语音克隆模拟增强，NeuMark 使用数字信号处理、掩码与 EnCodec。参考方面，前两者使用原始音频，NeuMark 同时研究原始与编解码器重建两种参考。这个对照支持后文的一个判断，即嵌入粒度的差异是 NeuMark 针对重合成威胁的主要结构选择，而参考的差异则是解释透明度结果的前提。

### 神经编解码器重合成为什么构成不同威胁

传统数字信号处理攻击可以看作对波形的局部可逆或轻微扰动，例如滤波改变频响但保留整体波形骨架，水印只要幅度足够或位置冗余就可能存活。神经编解码器重合成的流程完全不同，它先把语音编码为离散声学 token，再用量化表示重新解码，凡是不稳定于编解码器重建的细节都会被丢弃。论文列举的编解码器包括 EnCodec、DAC 与 WavTokenizer，基于编解码器的生成系统包括 VALL-E、CosyVoice 与 Moshi，这说明重合成不仅是压缩工具，也可能是语音生成与分发的中间环节。举例来说，一段带水印语音若被 EnCodec 以低码率压缩再解码，波形采样点会整体改变，即使听感内容不变，依赖波形细节的水印证据也可能消失。

因此问题可表述为如何在编解码器保留的结构上放置水印证据，使证据能跟随量化表示进入重建后的波形。论文选择 SpeechTokenizer 的理由是其残差向量量化结构提供多路对齐的声学 token 流，恰好对应神经编解码器重建所针对的表示。若水印只放在生成模型特有的潜变量或聚合后的单一路表示上，重合成仍可能削弱它，这也是论文要与 TraceableSpeech 和 VoiceMark 区分的原因。理解这一点后，后文的跨层嵌入与 EnCodec 增强训练就不再是孤立技巧，而是围绕同一威胁的配套设计。

### 沿一个样本走完嵌入到提取的主路径

设输入为一段波形与一个 16 比特消息，冻结的 SpeechTokenizer 编码器先把波形映射为潜变量，再得到 8 路残差向量量化流，每路维度与帧数与原文给出的一致，可训练的基于 Transformer 的水印编码器修改这些量化流，冻结的解码器把修改后的多路流求和并解码为带水印语音。训练时带水印语音先经过随机失真算子，再由可训练的提取器预测帧级水印概率与消息比特。测试时同样先得到待测语音，再经编码与提取器得到检测分数与比特估计。这个流程把嵌入放在潜变量、把鲁棒性放在失真后提取，是全文方法与实验的共同主线。

下图是论文给出的总体结构图，阅读时应先区分下半部分嵌入路径与上半部分提取路径，再区分冻结模块与可训练模块。图中下半部分从左下原始音频出发，经编码器、残差量化、嵌入器与解码器得到带水印音频与重建音频；上半部分从失真层出发，经增强音频、编码器与提取器得到检测概率与解码消息；虚线表示各类损失连接的信号端。

> **看图路径：** 1. 先沿左下原始音频经编码器到残差量化再到嵌入器与解码器的主路径走一遍；2. 再看右中失真层如何把带水印音频变为增强音频并送入右上提取器；3. 对比左下消息作为键值进入交叉注意与左上解码消息输出之间的对应关系；4. 观察底部余弦相似度损失与右侧判别器相关损失分别连接了哪两端信号

[![原论文 Figure 1：The overall architecture of our proposed NeuMark.](https://arxiv.org/html/2609.25719v1/figures/pipeline.png)](https://arxiv.org/html/2609.25719v1/figures/pipeline.png)

*论文图 1。原论文 Figure 1:：“The overall architecture of our proposed NeuMark.”。*

结合像素可见，下半绿色块为水印嵌入器，内部包含交叉注意力与前馈子块，消息作为键值进入该块，残差量化流作为查询进入该块；上半橙色块为水印提取器，内部包含自注意力与前馈子块，输入为增强后语音的残差量化表示，输出为帧级标注与解码消息；右侧紫色块为失真层，标注包含 EnCodec、掩码、替换与压缩等增强类型；底部虚线连接嵌入前后表示并标注余弦相似度损失，右侧虚线连接带水印音频、重建音频与判别器并标注对抗、特征匹配与梅尔损失。

图中编码器与解码器带有雪花标记表示冻结，嵌入器与提取器带有火焰标记表示可训练。这一布局说明嵌入与提取共享同一编解码器表示空间，但参数更新范围被严格限制在水印模块内。

### 消息如何按层写入每一路残差量化流

白话来说，残差向量量化可以理解为用 8 本码本逐层打补丁，第一层给出粗略声学轮廓，后续层逐层补充残差细节，8 路加起来才完整。交叉注意力可以理解为让每 1 帧声学表示去查询消息记忆，决定当前帧应携带哪些比特成分。水印嵌入器则是执行写入的模块，把查询结果投影回潜变量维度并残差相加。

**神经音频编解码器 × 残差向量量化：** 神经音频编解码器负责把波形压缩为紧凑声学表示再重建波形，分工是决定哪些内容与说话人信息被保留、哪些细节被丢弃；残差向量量化负责用 8 层级联码本逐层逼近残差，分工是提供多路对齐的离散潜变量结构；二者搭配的理由是重合成攻击恰好沿残差向量量化结构重建，因此把水印放在该结构上才能让证据与编解码器保留的结构对齐，组合意义是水印不再依赖易被丢弃的波形细节而是分布在重建仍会经过的潜变量层上。

具体计算上，16 比特消息先转换为可学习的消息记忆向量序列，每一路残差量化流都经过一个 Transformer 交叉注意力块，以该路流为查询、消息记忆为键值，得到的条件特征再投影回 SpeechTokenizer 潜变量维度并残差加到原流上。修改后的多路流求和后送入冻结解码器得到带水印语音，预训练分词器在整个训练中保持固定。按层分别注入的意义在于水印能量不集中于某一层或聚合后的 1 次写入，而是分布在编解码器重建时都会利用的多层结构上。

对抗损失是质量保持目标之一，它要求带水印语音匹配自然与重建语音的分布，符号含义是判别器输出为标量，期望取自训练样本与采样增强，公式如下式所示。

\[\mathcal{L}_{\mathrm{adv}}=\mathbb{E}\left[(D(x_{\mathrm{wm}})-1)^{2}\right],\]

该式中带水印语音的判别器输出被推向 1，判别器自身则把参考音频判为真、带水印音频判为假。参考目标取原始语音或编解码器重建语音取决于训练变体，这直接对应后文原始参考与重建参考的划分。初学者应注意此处对抗损失只约束分布接近，不直接约束比特正确，比特正确由后文解码损失负责。

**交叉注意力 × 水印嵌入器：** 交叉注意力负责以残差量化流为查询、以消息记忆向量为键值来计算每帧应写入多少消息成分，分工是建立消息到声学帧的条件映射；水印嵌入器负责把该条件特征投影回潜变量维度并以残差方式加到每一路量化流上，分工是执行实际修改并保持可解码；搭配理由是直接相加无法决定比特与帧的对应关系，而交叉注意力提供了可学习的按层分配机制，组合后新增的作用是 16 比特消息能被分散写入全部编解码器层而不是只聚合后写入 1 次。

### 提取器输出哪两组信号，各由什么损失监督

提取器先用冻结的 SpeechTokenizer 编码器对失真后语音编码，再经可训练的自注意力与前馈堆叠得到两组输出，一组是 16 比特消息估计，另一组是每帧的水印存在概率。消息估计经二元交叉熵与真实消息比较，帧概率经带语音活性检测掩码的帧级二元交叉熵与存在标签比较。语音活性检测标签在干净训练语音上计算并对齐到提取器帧率，仅作为损失掩码，使静音帧的检测误差不被强调。正样本使用失真后带水印语音，负样本使用干净语音或被掩码区域。

潜变量余弦损失约束嵌入前后内容潜变量的方向一致，符号中分子为嵌入前后展平表示的内积，分母为各自二范数，目标是保持内容方向不因水印而偏转，公式如下。

\[\mathcal{L}_{\mathrm{cos}}=1-\frac{z_{c}^{\top}z^{\prime}_{c}}{\|z_{c}\|_{2}\|z^{\prime}_{c}\|_{2}},\]

消息解码损失为 16 个载荷比特上的二元交叉熵，符号中输入为真实消息与估计消息，公式如下。

\[\mathcal{L}_{\mathrm{dec}}=\mathrm{CE}(m,\hat{m}),\]

检测损失为带语音活性掩码的帧级二元交叉熵，符号中目标标签区分水印帧与干净或掩码负区域，语音掩码区分语音帧与静音帧，公式如下。

\[\mathcal{L}_{\mathrm{det}}=-\frac{1}{V+\epsilon}\sum_{t=1}^{T}v_{t}\left[y_{t}\log\hat{y}_{t}+(1-y_{t})\log(1-\hat{y}_{t})\right].\]

**水印检测 × 消息解码：** 水印检测负责判断每一潜变量帧是否含有水印，分工是给出帧级存在概率并经平均得到话语级得分；消息解码负责从失真后语音恢复 16 个比特的取值，分工是给出可追溯的载荷内容；搭配理由是仅有检测只能回答是不是带水印语音，仅有解码在无水印输入下会强行输出比特，二者共同训练才能同时支持存在性验证与来源追溯，组合意义是提取器必须同时输出帧概率向量与消息估计向量并接受两类损失监督。

需要强调的是检测与解码分属不同监督来源，检测需要成对的带水印与干净语音以学习存在性边界，解码需要已知的随机消息以学习比特映射，二者在总目标中以不同权重相加，判别器则单独优化。这种分工使系统既能报警又能给出载荷，而不是只输出一个真假分数。

### 训练时失真如何采样，两种参考如何改变优化目标

训练的失真算子对每个小批量采样一种增强，候选包括恒等路径、AudioSeal 风格的数字信号处理扰动、EnCodec 在 3、6 与 12 kbps 下的重合成，以及掩码增强。掩码增强在波形时间轴上随机选择 20% 采样点，静音掩码置零，原始音频替换则用对齐的原始样本替换，其余样本不变。采样权重为恒等 10、每种数字信号处理失真 1、每种神经编解码器失真 1、掩码 5。掩码只用作训练增强，不作为评测攻击。这 1 采样设计使模型在训练中同时见到无失真、传统编辑与编解码器重建 3 类输入。

**原始参考 × 重建参考：** 原始参考指以原始输入波形作为全部质量损失与判别器的真实目标，分工是同时要求嵌入器补偿编解码器误差并嵌入水印；重建参考指以冻结编解码器对干净语音的重建结果作为目标，分工是把编解码器自身失真排除在水印失真之外；搭配比较的理由是潜变量水印的透明度上限天然受限于编解码器重建质量，不区分两种参考就无法判断质量下降来自水印还是来自编解码器，组合评估的意义是分离出水印引入的额外失真与为补偿重建而引入的扰动之间的鲁棒性与透明度折中。

两种训练变体仅在质量损失与判别器训练所用的参考目标上不同，重建参考变体记为 NeuMark R-R，以编解码器重建音频为目标，用于分离水印失真与编解码器自身失真；原始参考变体记为 NeuMark R-O，以原始源音频为目标，要求嵌入器同时完成水印嵌入与编解码器误差补偿。总目标为对抗、特征匹配、梅尔谱重建、余弦相似度、解码与检测损失的加权和，默认权重分别为 1、2、2、2、10 与 1。每个变体训练 150000 步，全局批量 32，在四块 RTX 3090 上约需 97 小时。初学者应注意冻结与更新的边界是编码器与解码器冻结，水印嵌入器与提取器及判别器更新，原文未给出更细的梯度截断位置，因此不推测中间层的停止梯度细节。

### 数据、基线、攻击与指标如何保证可比

数据方面，所有水印模型使用同一测试集 LibriSpeech test-clean，共 2620 条，NeuMark 训练使用 LibriTTS 的 train-clean-100、train-clean-360 与 train-other-500 子集，采样率按 24 kHz 训练，测试包含 16 kHz 与 24 kHz 条件。基线在 16 比特载荷下比较，包括 WavMark、AudioSeal、Timbre Watermarking、TraceableSpeech 与 VoiceMark，其中 TraceableSpeech 无公开预训练权重故在 LibriTTS 上用 EnCodec 重合成增强重训，其余使用发布模型。论文把 EnCodec 视为已见编解码器攻击，因为公开基线普遍带 EnCodec 风格增强，DAC 与 WavTokenizer 视为未见攻击以检验泛化。

**数字信号处理攻击 × 神经编解码器重合成：** 数字信号处理攻击负责对波形做滤波、加噪、重采样、变速与音量等直接波形编辑，分工是检验水印对传统后期处理的容忍度；神经编解码器重合成负责把语音经量化声学表示重新解码为新波形，分工是检验水印是否与编解码器保留的结构对齐；搭配理由是前者保留波形细节较多而后者会系统性丢弃非稳定细节，只测前者会高估在生成式语音分发链路中的存活能力，组合评估的意义是同时覆盖传统编辑威胁与编解码器语言模型时代的新威胁。

评测攻击包括无失真、带通、回声、白噪声、高通、低通、粉噪声、重采样、平滑、变速、增益与衰减共 12 项数字信号处理编辑，以及 EnCodec 12、6、3 kbps、DAC 16 kHz、DAC 24 kHz 与 WavTokenizer 共 6 项神经重合成。变速指 0.8 至 1.2 倍速扰动，增益与衰减指正负 10% 音量缩放。指标方面，检测率为成对带水印与干净语音上的平衡软准确率，比特恢复率为正确比特占比，计算目标如下式所示。

\[\mathrm{Det}=\frac{1}{2}\left(\frac{1}{N}\sum_{i=1}^{N}p_{i,\mathrm{wm}}+\frac{1}{N}\sum_{i=1}^{N}(1-p_{i,\mathrm{clean}})\right).\]

该式中话语级分数由帧级概率平均得到，检测综合了带水印侧的检出与干净侧的正确拒绝，比特指标直接比较目标比特与恢复比特是否相等。感知质量用 PESQ、STOI 与 SI-SNR 衡量，并分别在原始参考与重建参考下计算，原始参考比较带水印语音与原始音频，重建参考比较带水印语音与重建对照，非重建基线不适用重建参考。这一双参考设计是复述质量结论时必须保留的条件，否则会把编解码器失真误读为水印失真。

### 谁在传统编辑下占优，谁在编解码器重合成下保持

比较问题是当攻击从传统编辑切换到神经重合成时，各方法的检测与恢复如何变化，公平条件是同一测试集、同一 16 比特载荷与同一攻击实现，指标方向是检测率与比特恢复率越高越好。下表整理编解码器重合成下的关键对照，每格为检测斜杠比特恢复，重点观察波形域方法在低码率与未见编解码器下的下降幅度。表前需要说明该表只截取重合成子集，完整平均需结合原文全部 18 项攻击理解。

| 攻击条件 | WavMark | AudioSeal | VoiceMark | NeuMark R-R | NeuMark R-O |
| --- | --- | --- | --- | --- | --- |
| EnCodec 12 kbps | 0.50 / 0.50 | 0.84 / 0.88 | 0.77 / 0.96 | 0.92 / 0.96 | 0.98 / 0.99 |
| EnCodec 6 kbps | 0.50 / 0.50 | 0.68 / 0.61 | 0.76 / 0.95 | 0.88 / 0.93 | 0.95 / 0.98 |
| DAC 16 kHz 未见 | 0.50 / 0.50 | 0.60 / 0.31 | 0.82 / 0.97 | 0.95 / 0.98 | 0.98 / 1.00 |
| WavTokenizer 未见 | 0.50 / 0.50 | 0.50 / 0.50 | 0.62 / 0.55 | 0.51 / 0.53 | 0.50 / 0.54 |

表后解释是波形域方法在数字信号处理下仍具竞争力，但在 EnCodec 低码率下迅速降至接近随机猜测，而 NeuMark 的两个变体在已见 EnCodec 与未见 DAC 上保持较高检测与恢复，其中原始参考变体在多数重合成条件下略高于重建参考变体。具体代价是变速扰动对所有方法都困难，因为它改变时间对齐，NeuMark 虽仍最高但比特恢复明显低于其他数字信号处理条件。未胜出项是 WavTokenizer 极端压缩，它使所有方法失效，NeuMark 也降至约 0.5，论文将其解释为单量化器必须表示核心语音而留给水印的残差容量不足，这构成明确的失败边界而不是可忽略的噪声。

### 透明度为什么必须分两种参考来读

比较问题是潜变量水印的质量下降中有多少来自编解码器本身，有多少来自水印写入，公平条件是同一带水印语音分别与原始音频和重建对照比较，指标方向是 PESQ、STOI 与 SI-SNR 越高越好。下表截取非重建基线与两种 NeuMark 变体的代表性质量数，重建参考列对非重建基线不适用，阅读时不能跨参考直接排名。

| 方法 | PESQ 原始参考 | STOI 原始参考 | SI-SNR 原始参考 | PESQ 重建参考 | STOI 重建参考 |
| --- | --- | --- | --- | --- | --- |
| WavMark | 4.233 | 0.997 | 37.298 | – | – |
| AudioSeal | 4.429 | 0.998 | 26.828 | – | – |
| NeuMark R-R | 2.501 | 0.920 | 0.839 | 4.356 | 0.989 |
| NeuMark R-O | 2.318 | 0.907 | -0.191 | 3.349 | 0.956 |

表后解释是在原始参考下绕过编解码器重建的波形域基线数值更高，这支持非重建方法保真度占优的判断；在重建参考下 NeuMark R-R 取得较高的 PESQ 与 SI-SNR 并在 STOI 上与 TraceableSpeech 持平，这支持水印本身引入的额外失真较小的判断。代价是 NeuMark R-O 为补偿编解码器误差引入更大声学扰动，因此重建参考质量低于 R-R，但在鲁棒性上略有提升。未胜出项是所有编解码器潜变量方法在原始参考下的 SI-SNR 都远低于波形域方法，这不是实现失误，而是潜变量路径必然经过有损重建，复述时必须同时给出两种参考否则会误判水印不可用。

### 若只看平均数会漏掉哪些反例与边界

原文给出 3 类平均，数字信号处理平均在 12 项上计算，神经编解码器平均在 6 项上计算，总平均在 18 项上计算。NeuMark R-O 总平均检测与比特为较高水平，R-R 紧随其后，波形域与音色域基线在总平均上落后，主要差距来自神经编解码器平均而非数字信号处理平均。但平均数掩盖了两个重要反例，一是变速攻击使所有方法显著下降，NeuMark 虽相对最好但仍远离完美；二是 WavTokenizer 使全部方法回到随机水平，说明当前多残差层冗余假设在单量化器极端压缩下不成立。

另一类细节是已见与未见的划分，EnCodec 在训练中出现故可视为已见，DAC 与 WavTokenizer 未在 NeuMark 训练中出现。NeuMark 在未见 DAC 上仍保持高位，这支持跨编解码器泛化的有限结论，但 WavTokenizer 的失败说明泛化不是无条件的。论文还报告掩码仅用于训练而不作为评测攻击，因此不能把训练掩码权重直接理解为对某种测试攻击的针对性优化。复述时应保留这些边界，避免把平均领先表述为在一切失真下领先。

### 当前结论不覆盖哪些场景与成本

论文明确的局限包括嵌入器与提取器是围绕预训练分词器的水印模块，完整的文本转语音集成即由编解码器语言模型直接生成带水印声学 token 仍是未来工作；最难攻击是 WavTokenizer 风格的极端压缩，未来需更强时间冗余与对齐单量化器不变量的目标；多语言与噪声语音评估尚未展开。这些是原文直接报告的边界，转述时应使用报告口径而不扩展为已验证的因果。

未测量的方面包括误判率在真实大规模分发中的表现、推理延迟与实时因子、不同说话人与录音条件下的稳定性，原文未给出这些量的改善承诺，因此不能从检测率提升推定系统级成本下降。训练成本已报告为 4 卡约 97 小时与 150,000 步，但推理开销与输出帧率未单独讨论，总体趋势不等于每组攻击或每一步都成立。相关性也不等于因果，例如原始参考变体同时改变了优化目标与最终扰动，不能仅凭相关就断言补偿重建必然带来鲁棒性，仍需待验证的对照来分离因素。

### 复现前先准备什么，按什么顺序跑通

复现应先区分代码开源与权重可运行，论文给出 NeuMark 仓库地址且本次资源状态显示可达，可先拉取代码并核对 SpeechTokenizer 冻结、8 路残差量化、16 比特消息与失真池的实现是否与原文一致。再准备 LibriSpeech test-clean 作为统一测试集与 LibriTTS 训练子集，注意采样率与帧数换算关系，例如 3 秒 16 kHz 对应约 150 潜变量帧。基线方面，WavMark、AudioSeal、Timbre Watermarking、TraceableSpeech 与 VoiceMark 均有公开来源可查，其中 TraceableSpeech 需按原文用 EnCodec 增强重训而不能直接沿用未知权重。

训练复现先固定损失权重与采样权重，再分别训练重建参考与原始参考两个变体，记录 150000 步与批量 32 下的收敛曲线，避免只跑单一种子就下结论。评测复现应先跑无失真与 12 项数字信号处理，再跑 EnCodec 三档码率与 DAC、WavTokenizer，分别计算检测率与比特恢复率，并用双参考计算 PESQ、STOI 与 SI-SNR。若只能跑轻量验证，优先复现 EnCodec 低码率与 DAC 未见条件的相对排序，因为这是论文最强证据所在。还需补做的验证包括多随机消息下的方差、变速下的对齐处理，以及 WavTokenizer 失败是否可通过增加时间冗余缓解。

### 何时值得尝试这种按层嵌入的思路

当分发链路中明确存在神经编解码器压缩或基于编解码器的生成环节，且溯源需要在重合成后仍然可读时，按编解码器层分布嵌入的思路值得尝试，因为证据与重建保留的结构对齐是论文支持的主要收益。当应用只面对传统滤波、噪声与音量编辑且对原始波形保真度要求极高时，波形域方法可能更直接，因为潜变量路径必然引入编解码器重建失真。选择重建参考还是原始参考取决于目标，若更看重分离水印失真与透明度分析，应选重建参考；若更看重重合成下的检出与恢复并能接受更大扰动，可考虑原始参考。

常见的误解是把重建参考下的高质量误读为整体音质超过波形域方法，实际上两种参考回答不同问题，重建参考只说明水印额外损伤小，原始参考才反映与原音的距离。另一个误解是把未见 DAC 上的成功推广为对一切未见编解码器有效，WavTokenizer 的反例已说明单量化器极端压缩是独立难点。收束而言，NeuMark 的可复述方法是冻结编解码器、按层交叉注意力写入、失真增强下联合优化检测与解码，并用双参考分离评价；其待验证部分是更强时间冗余、单量化器不变量目标与更广语音条件的覆盖。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.25719)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-24/)
