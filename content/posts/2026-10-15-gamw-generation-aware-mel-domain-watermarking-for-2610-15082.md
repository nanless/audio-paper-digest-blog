---
title: "GAMW: Generation-Aware Mel-Domain Watermarking for TTS Traceability"
date: 2026-10-15
draft: false
tags: [音频水印, 文本到语音, 注意力机制, 鲁棒性]
categories: [论文速递]
description: "GAMW 针对合成语音事后加水印易被复合处理抹除的问题，把内容自适应的多比特残差写进冻结 TTS 产生的梅尔谱再经冻结声码器发声，并用聚焦调节加动态逐比特加权学习解码，在两条 TTS 链路上保持语音质量的同时提升了单种与复合扰动下的解出率。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.15082"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在语音合成中间环节嵌入可追溯水印：GAMW 方法解读"
paper_digest_original_title: "GAMW: Generation-Aware Mel-Domain Watermarking for TTS Traceability"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.15082v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.15082v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.15082v1.pdf"
paper_digest_primary_task: "音频水印"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.watermarking","label":"音频水印"},{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"}]
paper_digest_primary_method: "注意力机制"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "GAMW 针对合成语音事后加水印易被复合处理抹除的问题，把内容自适应的多比特残差写进冻结 TTS 产生的梅尔谱再经冻结声码器发声，并用聚焦调节加动态逐比特加权学习解码，在两条 TTS 链路上保持语音质量的同时提升了单种与复合扰动下的解出率。"
paper_digest_authors: [{"affiliations":["Zhejiang University"],"name":"Yihang Zhang"},{"affiliations":["Zhejiang University"],"name":"Weicai Yan"},{"affiliations":["Zhejiang University"],"name":"Qifei Zhang"},{"affiliations":["Zhejiang University"],"name":"Yangyang Wu"},{"affiliations":["Zhejiang University"],"name":"Tao Jin"}]
paper_digest_abstract_sha256: "bf14d05dfb4a648888857d48c51c4efc5ee777511bdc35ee936d1b5f079c1b5e"
paper_digest_sidecars: {"citation.bib":{"sha256":"289953c208729d5ce3a31ff1bc9a891b74b3e1cacee7b47640493a524a35c70c","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15082/citation.bib"},"citation.json":{"sha256":"bf59053a7e67ba1febfd6ca2db8292bd2550698c5ceddf2e28f885651ea9db0d","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15082/citation.json"},"citation.ris":{"sha256":"a7561911ecd906b7284e4593344d2826f74d2124e421cab2368828e7ce3fa27a","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15082/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"0db4d0c85fa9a7025b55eb28d65c45babf97d6f15d9b43404235264c04429b1f","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15082/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1fe63da456fd1f08ce2056d9e078c21662f045bcbc83a063ffe943bfb3b28f16"
paper_digest_api_reader_plan_sha256: "90793b8ba08bccdbd6c0e6a9bb53f08aaecc28d87fb62aaaf26edd77c5623556"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b366dd461cf6239f9b93b778c6d19528fe190ebcee340182545e568da4542f25"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "b32f45e1a83af21e74b66fd5a9f56fb329078b06438c3863152082c92c3f4c89"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7af931cc818ac959eedf57716032ab1c165186bfffd0f73b8830debc92e7b756"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3bd085997aca4129ad0f0eda71b0574202ce6216eafff5972f8c230dca2fca54"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在语音合成中间环节嵌入可追溯水印：GAMW 方法解读

> 英文题目：*[GAMW: Generation-Aware Mel-Domain Watermarking for TTS Traceability](https://arxiv.org/abs/2610.15082v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频水印](/audio-paper-digest-blog/papers/?concept=task.watermarking)；[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)
- **研究方法**：[注意力机制](/audio-paper-digest-blog/papers/?concept=method.attention)
- **研究重点**：[鲁棒性](/audio-paper-digest-blog/papers/?concept=research_focus.robustness)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yihang Zhang：Zhejiang University
- Weicai Yan：Zhejiang University
- Qifei Zhang：Zhejiang University
- Yangyang Wu：Zhejiang University
- Tao Jin：Zhejiang University

## 📌 核心摘要

语音合成的可追溯性要求以文本与参考语音为输入，输出携带多比特来源标识的波形，难点是在传输压缩和编辑扰动后仍能恢复比特且不引入可感知失真。生成感知梅尔域水印先由冻结的文本到语音模型生成干净梅尔语谱图，再由水印编码器写入内容自适应残差，冻结声码器将其渲染为波形，提取器直接从待验音频恢复比特。编码器用交叉注意力把比特表示映射到时频空间，再用卷积掩码与全局强度控制嵌入位置和幅度，解码目标用焦点调制与按比特动态加权同时照顾难样本与弱比特位。与波形后处理水印相比，水印参与声学渲染而非叠加在已生成波形上。在16比特载荷下CosyVoice2上15种个体扰动的评估中，平均解码准确率为0.9854，超过最强基线的0.8925；在同一16比特载荷下CosyVoice2上8种复合扰动的评估中，平均解码准确率为0.9145，超过最强基线的0.6774。在无扰动干净条件的容量评估中，100比特载荷在CosyVoice2和GLM-TTS上的解码准确率分别为0.9978与0.9903。结论适用于所测的两个梅尔接口文本到语音模型与所列扰动，对无梅尔接口结构、自适应擦除与主观透明性尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/ZConJugaTe/GAMW> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么合成语音需要能查来源的主动标记

这篇论文处理的是文本转语音合成语音的可追溯问题。输入是文本与一段短参考语音，目标是合成出目标音色的语音，输出是波形。被动检测只能判断一段语音像不像合成的，不能给每一段合成语音附上稳定可验证的身份编号。主动水印的做法是，在生成过程中嵌入人耳不易察觉但算法可恢复的多比特二进制串，例如十六比特的标识，事后只用待验音频就能解出比特。

评价要同时看两件事，一是语音质量有没有明显变差，二是经过噪声、压缩、滤波等处理后比特还能解对多少。论文把后者记为按位解码正确率，越高越好，质量则用与干净合成语音比较的全参考指标与模型估计的平均意见分一起看。

### 事后加水印与生成中加水印有什么不同

传统手工规则水印把固定嵌入检测规则写在波形上，容易被抹除或失同步。深度事后方法如 WavMark、AudioSeal、SilentCipher、TimbreWM 是先拿到合成好的波形再加水印，部署灵活，但水印与目标语音合成器的声学产生过程无关，论文指出这类方法在抹除、伪造、变换与神经编解码压缩下鲁棒性有限。另一条路线是把水印写进生成过程，例如往扩散模型的输入隐变量里编码，或在合成时逐帧写入。

梅尔谱是很多神经语音合成中声学模型与声码器之间的公共时频中间表示，具有显式的时间频率结构与接近人耳感知的非线性频率刻度。MelShield 已验证声码器之前在梅尔域加水印可行，但需要干净梅尔参考且保真与鲁棒的折中没有解决。GAMW 沿着这条梅尔接口路线走，区别是冻结语音合成主干、只训练水印编码器与提取器，并在验证时不需要原始梅尔参考。

### 论文要解决的具体困难是什么

论文要解决的是事后波形水印在复合扰动下容易失效，同时梅尔域本身并不自动保证保真与鲁棒。输入是冻结语音合成模型由文本生成的干净梅尔谱与随机多比特水印，输出是带水印梅尔谱经冻结声码器得到的带水印波形，验证阶段输入是可能被扰动的波形，输出是恢复的比特。必须保留的信息是语音内容可懂且自然，水印在干净时可完全解出，在扰动后仍尽量可解。

难点在于不同样本不同比特位置的恢复难度不均，嵌入太强会损伤频谱，太弱会被噪声与压缩淹没。论文因此把问题拆成三部分，编码器解决按内容分配强度，提取器解决无参考恢复，损失函数解决难易不均与保真约束。训练与评测都在两条语音合成链路上分别进行，不共用一套水印参数直接跨链路套用。

### 整体流程中数据经过了哪些模块

从一个样本看，文本与参考语音先经过冻结的声学模型得到干净梅尔谱，水印编码器把随机比特串与该梅尔谱一起映射为带水印梅尔谱，冻结声码器再把它合成为带水印语音。训练时带水印语音先过扰动层，再由可训练的水印提取器解出预测比特，与目标比特比较得到解码损失，同时带水印梅尔谱与干净梅尔谱比较得到梅尔保真损失，两项加权共同优化编码器与提取器。测试验证时不需要干净梅尔谱与原始语音，只用待验波形。下图是论文给出的总体框图，火焰标记可训练，雪花标记冻结，可以帮助跟随主路径与损失回路。

**梅尔谱 × 声码器：** 梅尔谱是声学模型输出的时频中间表示，声码器是把它变成波形的固定合成模块，GAMW 把水印加在两者之间，让水印和语音内容一起被声码器渲染进最终波形，而不是事后叠加在波形上。

整体流程的官方示意图如下，读图时先看主路径再看损失回路，有助于理解冻结与可训练的分界。

> **看图路径：** 1. 先沿文本加参考语音到声学模型再到干净梅尔谱的主路看输入来源；2. 再看水印比特经水印编码器与干净梅尔谱汇合为带水印梅尔谱的位置；3. 最后看扰动层与水印提取器之间解码损失与梅尔保真损失的回路

[![原论文 Figure 2：Overview of GAMW. The trainable watermark encoder embeds a multi-bit payload into the clean…](https://arxiv.org/html/2610.15082v1/watermark.png)](https://arxiv.org/html/2610.15082v1/watermark.png)

*论文图 2。原论文 Figure 2:：“Overview of GAMW. The trainable watermark encoder embeds a multi-bit payload into the clean mel-spectrogram generated by the frozen TTS model, and the frozen vocoder synthesizes…”。*

从图中可见，声学模型与声码器都在大的语音合成框内并保持冻结，水印编码器在框外上方接收水印比特与干净梅尔谱，输出带水印梅尔谱再送回声码器，下方提取器从扰动后语音恢复比特并与目标比特形成解码损失，中间虚线形成梅尔保真损失，两路损失汇成总目标。这种把水印放在波形生成之前的做法，让水印与语音内容被同一个声码器一起渲染，是与直接改波形事后方法的关键区别。

### 水印编码器怎样按内容决定加在哪里

编码器的输入是干净梅尔谱与 K 比特二进制串，输出是同样尺寸的带水印梅尔谱。水印比特先过可学习嵌入层并加上位置编码，得到同时携带取值与位置信息的水印表示，嵌入维度取为与梅尔频带数相同。然后以梅尔帧为查询、水印表示为键与值做多头交叉注意力，让每 1 帧按自身声学内容聚合水印信息，得到与内容相关的原始残差。另一个轻量 2 维卷积网络从干净梅尔谱预测时频软掩膜，按局部声学结构调节每个时频格子的相对强度，再乘一个可学习的全局强度因子，共同控制残差的空间分布与总量，最后以残差相加的形式保留原始梅尔谱的直接通路。

**交叉注意力 × 时频软掩膜：** 交叉注意力负责按每帧梅尔内容从水印表示中取信息，生成与内容相关的原始残差，时频软掩膜负责按局部声学结构决定每个时频格子放多大强度，两者相乘才得到真正叠加的残差，分工是前者决定放什么，后者决定哪里多放哪里少放。

交叉注意力生成原始残差的计算形式如下，符号含义是查询取自梅尔谱转置，键值均取自水印表示。

\[S_{\text{raw}}=\text{CrossAttn}\bigl(Q=M^{\top},\,K=E_{w},\,V=E_{w}\bigr)^{\top}\]

掩膜与全局强度联合调制并相加得到带水印梅尔谱的形式如下，其中圆点乘是逐元素相乘。

\[\tilde{M}=M+\alpha\cdot M_{\text{mask}}\odot S_{\text{raw}}\]

编码器结构示意图如下，读图时注意查询键值箭头与掩膜分支汇合点，对应上两式从取信息到定强度的两步分工。

> **看图路径：** 1. 看梅尔谱做查询、水印嵌入做键与值的交叉注意力箭头方向；2. 看掩膜预测分支从梅尔谱引出再与注意力输出相乘的位置；3. 看最后与原始梅尔谱相加得到带水印梅尔谱的加法节点

[![原论文 Figure 3：Watermark encoder. Cross-attention fuses the watermark representation with the mel content, while…](https://arxiv.org/html/2610.15082v1/encoder.png)](https://arxiv.org/html/2610.15082v1/encoder.png)

*论文图 3。原论文 Figure 3:：“Watermark encoder. Cross-attention fuses the watermark representation with the mel content, while the mask predictor and learnable global strength jointly modulate the watermark…”。*

从图中可见，左侧梅尔谱一路做查询进入交叉注意力，一路进入掩膜预测器，水印比特经嵌入后同时送出键与值，注意力输出与掩膜在标有全局强度的相乘节点汇合，再与原始梅尔谱相加得到右上方的带水印梅尔谱。这种设计让修改量跟随语音内容走，而不是在全图均匀叠加，为后文保真与鲁棒的折中提供了可学习的基础。

### 水印提取器怎样只用待验音频恢复比特

提取器的输入是可能经过扰动的波形，输出是 K 个比特的概率再经阈值得到二进制串。它先用固定参数的梅尔变换把波形转成时频表示，再用 2 维卷积主干在保留时间结构的同时逐步下采样频率轴，得到特征序列。然后用一个所有样本共享的可学习查询做目标，以特征序列为记忆做变换器解码，把全局水印证据聚合成一个向量，再经输出头映射为每个比特的概率。整个过程不需要原始语音也不需要干净梅尔谱，属于无参考恢复。训练时扰动是随机施加的，评测时则按固定参数施加单种或多步复合扰动，输出裁剪或补零到输入长度后再提取，以保证比较条件一致。

聚合全局证据的解码步骤形式如下，其中目标是可学习查询，记忆是卷积特征序列。

\[h=\text{TransformerDecoder}\bigl(\text{tgt}=Q,\;\text{memory}=F\bigr)\]

这种先转梅尔谱再做卷积加变换器聚合的设计，与编码器同处梅尔域，前后呼应。卷积负责提取局部时频特征，变换器解码负责跨时间汇总，避免只依赖某 1 帧的局部证据，从而在噪声与压缩后仍能保留可解的全局信息。

### 训练目标怎样同时管解对与改动小

训练时只有水印编码器与提取器更新，语音合成的词元生成、声学模型与声码器全部冻结。每个训练步为小批量中每个样本独立生成随机多比特载荷，并把载荷与其按位取反配对接到同一梅尔输入以平衡比特取值，验证与测试则直接用随机载荷。先在干净语音上做预热优化恢复与保真，之后以一定概率做在线增强，每批至多从增强池采样一种扰动并用样本级随机掩膜决定哪些语音施加，不可微操作经直通估计参与端到端优化。总目标是解码损失与梅尔保真损失的加权和，权重分别控制恢复与频谱保真。

**聚焦调节 × 动态逐比特加权：** 聚焦调节作用在样本比特实例层面，压低已确信样本的损失比重，动态逐比特加权作用在比特位置层面，根据当前小批量内每个比特位置的解码正确率给难比特更大权重，两者相乘让优化同时关注难样本和弱位置。

总目标的加权组合形式如下，两项分别对应载荷恢复与频谱保真。

\[\mathcal{L}_{\text{total}}=\lambda_{\text{dec}}\cdot\mathcal{L}_{\text{dec}}+\lambda_{\text{mel}}\cdot\mathcal{L}_{\text{mel}}\]

解码损失在焦损失基础上引入动态逐比特权重，形式是对小批量内每个样本每个比特求加权交叉熵，其中难实例与弱位置权重更大。

\[\mathcal{L}_{\text{dec}}=\frac{1}{BK}\sum_{i=1}^{B}\sum_{k=1}^{K}\omega_{k}(1-p_{t,ik})^{\gamma}\text{BCE}(p_{ik},w_{ik})\]

**解码损失 × 梅尔保真损失：** 解码损失监督扰动后波形能否恢复比特，梅尔保真损失约束加水印梅尔谱与干净梅尔谱的均方偏差，前者管可恢复性，后者管不可感知性，加权相加后共同决定嵌入强度与质量的折中。

逐比特权重按当前小批量内阈值化解码正确率构造，正确率越低权重越大，构造时脱离梯度，只起重加权作用。梅尔保真损失是带水印梅尔谱与干净梅尔谱的均方误差，除以频带与帧数做平均，直接约束频谱偏离。论文报告的训练超参数为解码权重与保真权重、聚焦参数与逐比特系数取固定值，优化器与学习率调度等实现细节在附录中给出，复现时应按原文取用而不是自行猜测。

### 实验在什么数据链路与指标下比较

数据用 LibriSpeech 官方测试集与 LJSpeech 人工留出测试集，测试样本不参与训练。两条语音合成链路分别是 CosyVoice2 与 GLM-TTS，用相同文本语音划分但各自缓存与其产生过程匹配的 80 维梅尔谱，水印模型在两条链路上分别训练与评测，不共用参数。基线是 4 种可运行的事后语音水印方法，载荷分别为三十二、十六、四十与十比特，GAMW 主评测用十六比特。语音质量用与干净合成语音比较的全参考指标与模型估计的平均意见分衡量，水印恢复用按位解码正确率衡量，数值越大越好。

鲁棒评测分 15 种单个扰动与 8 种固定顺序的复合流水线，覆盖加性噪声、背景噪声、滤波、常规有损压缩、神经编解码重合成、平滑、回声、量化与变速，单种与复合的平均都是等权平均。训练短梅尔段聚焦约 1 秒恢复，完整语音用于质量评测，避免短前缀独立声码器输出与完整音频直接比较质量。

### 加水印后语音质量与干净解码是否达标

下表比较的是无扰动下加水印语音相对干净合成语音的质量与干净解出率，比较问题是嵌入是否带来可感知的损伤，公平条件是同一测试音频与同一指标实现，指标方向都是越大越好。

| Method | PESQ | ViSQOL | MOS | ACC |
| --- | --- | --- | --- | --- |
| WavMark | 4.3008 | 4.8340 | 4.0628 | 1.0000 |
| GAMW (ours) | 4.3001 | 4.9726 | 4.0775 | 1.0000 |
| GAMW (ours) | 4.2970 | 4.9512 | 3.7245 | 1.0000 |

从表中可见，GAMW 在两条链路上都取得最高的保真指标，同时模型估计的平均意见分也超过 4 个基线，干净解出率都是 1.0000，除其中一个基线外其余基线干净时也是 1.0000。这说明在无扰动条件下 GAMW 的改动较小，质量代价有限。官方给出的质量鲁棒折中散点也支持这一判断，读图说明如下，横轴是保真，纵轴是单扰动平均解出率，越靠右上越好。

> **看图路径：** 1. 先看横轴保真指标与纵轴平均解出率各自方向都是越大越好；2. 再区分圆形与三角形分别对应两条 TTS 链路的独立训练评测点；3. 最后比较右上方本方法点群与左方基线点群的相对位置

[![原论文 Figure 1：Audio quality–robustness trade-off with a 16-bit payload.](https://arxiv.org/html/2610.15082v1/intro_quality_robustness.svg)](https://arxiv.org/html/2610.15082v1/intro_quality_robustness.svg)

*论文图 1。原论文 Figure 1:：“Audio quality–robustness trade-off with a 16-bit payload.”。*

从图中可见，本方法在两条链路上的点位于右上方，保真接近最右且纵轴明显高于多数基线，而个别基线点虽保真相近但纵轴较低，或纵轴尚可但横轴偏左。这种位置关系说明仅看干净质量不能推出扰动后可恢复性，必须把两者放在同一张图里比较。结论成立的条件是干净合成语音做参考的全参考比较与十六比特主设置，换链路或换载荷时数值会变，不能直接套用。

### 载荷变大时质量与解码如何变化

下表比较的是同一方法在不同水印长度下的质量与干净解出率，比较问题是容量扩大带来多大代价，条件是同一链路各自独立配置但同一数据流水线，指标方向越大越好。

| KK (bits) | PESQ | ViSQOL | MOS | ACC |
| --- | --- | --- | --- | --- |
| 16 | 4.3001 | 4.9726 | 4.0775 | 1.0000 |
| 100 | 4.0607 | 4.9205 | 4.0266 | 0.9978 |
| 16 | 4.2970 | 4.9512 | 3.7245 | 1.0000 |
| 100 | 4.0676 | 4.8823 | 3.6708 | 0.9903 |

从表中可见，载荷从十六比特增至一百比特时，三项质量指标总体缓慢下降，但一百比特时两条链路的干净解出率仍分别保持在 0.9978 与 0.9903，保真指标仍处在较高区间。这支持在干净条件下扩展到一百比特仍可可靠解码且感知损伤有限的判断。限制是这只是无扰动结果，不能推出大载荷在强噪声或神经编解码后的鲁棒性不变，附录中三十二比特的单扰动平均比十六比特低约 2.37 个百分点，下降集中在低信噪比背景噪声、高通滤波与编解码重合成等难条件，说明容量增大的鲁棒代价主要落在难扰动上。

### 单个扰动下哪些情形真正拉开差距

下表比较的是十六比特下 15 种单个扰动的按位解出率，比较问题是各方法对不同失真类型的抵抗力，公平条件是同一缓存音频、同一扰动参数与同一指标实现，数值越大越好。

| Perturbation | WavMark | AudioSeal | SilentCipher | TimbreWM | GAMW |
| --- | --- | --- | --- | --- | --- |
| Gaussian noise (SNR = 10 dB) | 0.5008 | 0.6711 | 0.1669 | 0.6777 | 0.9837 |
| EnCodec Défossez et al. (2022) | 0.4454 | 0.3691 | 0.1698 | 0.6045 | 0.9670 |
| Quantization | 0.4673 | 0.7189 | 0.1835 | 0.7637 | 0.9816 |
| Average | 0.7661 | 0.8149 | 0.2740 | 0.8925 | 0.9854 |

从表中节选可见，高斯噪声低信噪比、神经编解码重合成与量化等难条件下本方法明显领先，例如编解码重合成后仍保持较高解出率而最强基线低约三十多个百分点，平滑与量化也领先。在其余滤波、常规压缩、回声与变速条件下个别基线略高，但本方法仍保持在 0.95 以上。完整两链路结果显示本方法在两条链路上平均分别达到 0.9854 与 0.9820，各在 15 种条件中 9 种排名第 1。

**单个扰动 × 复合扰动：** 单个扰动是一次只施加一种处理，用于看方法对噪声、滤波、压缩等各类失真的基本抵抗力，复合扰动是按固定顺序连施加两到三个处理，用于模拟传输编辑中多步累积的更难情形，两者结合才能判断平均解出率在什么条件下成立。

未胜出的情形主要在高通滤波与个别压缩回声变速点，说明优势集中在噪声、量化与神经编解码，而非所有处理都最优。结论成立的条件是十六比特、固定扰动参数与等权平均，改任一条件平均值都会变。

### 多步复合处理后还能解出多少

下表比较的是 8 种固定顺序复合流水线的解出率，比较问题是经多步累积处理后载荷可恢复性，公平条件是每种方法与两条链路经历完全相同的操作类型、参数与从左到右顺序，数值越大越好。

| Perturbation pipeline | WavMark | AudioSeal | SilentCipher | TimbreWM | GAMW |
| --- | --- | --- | --- | --- | --- |
| Gaussian noise + background noise | 0.5925 | 0.8136 | 0.1748 | 0.8192 | 0.9949 |
| EnCodec + Opus + quantization | 0.4704 | 0.4598 | 0.1891 | 0.5255 | 0.8332 |
| Average | 0.5034 | 0.5357 | 0.1773 | 0.6774 | 0.9145 |
| Average | 0.5034 | 0.5020 | 0.1808 | 0.6740 | 0.9071 |

从表中节选与全文平均可见，本方法在两条链路上 8 种复合条件全部排名第 1，平均分别达到 0.9145 与 0.9071，比最强基线高约 23.7 与二十三点 3 个百分点。即使在 3 段式编解码加压缩加量化流水线下，两条链路仍保留 0.83 左右的解出率。官方柱状图直观显示了同样趋势，读图说明如下，每组内比较 5 种方法的柱高，越高越好，重点看含神经编解码的流水线。

> **看图路径：** 1. 先看每组复合扰动下五种颜色柱子的高低顺序；2. 再看含神经编解码的两段与三段流水线柱子下降幅度；3. 最后对照附表平均值确认单图高度与数字是否一致

[![原论文 Figure 5：Watermark decoding accuracy under eight compound perturbations on CosyVoice2 with a 16-bit payload.](https://arxiv.org/html/2610.15082v1/compound_robustness_cosyvoice2.svg)](https://arxiv.org/html/2610.15082v1/compound_robustness_cosyvoice2.svg)

*论文图 5。原论文 Figure 5:：“Watermark decoding accuracy under eight compound perturbations on CosyVoice2 with a 16-bit payload.”。*

从图中可见，每组复合扰动下代表本方法的柱子都是最高的，含编解码的组别各方法普遍下降但本方法下降后仍高于基线，而纯噪声组合组本方法接近满分。这种在全部 8 组一致领先的模式，支持多步处理后仍具较强可恢复性的判断。限制是流水线是预定义的固定参数与顺序，未覆盖更广编解码族、未见扰动与针对提取器的自适应抹除伪造改写攻击，不能推广为对一切复合编辑都鲁棒。

### 损失设计与嵌入位置各自起了什么作用

消融分两组，都在一条链路十六比特下做。第一组是 2 乘 2 损失对照，结构数据环境相同只换损失，在第一轮干净预热期内每 100 步在固定验证集上同时看总体解出率与十六比特中最差比特的正确率。以总体不低于 0.99 且最差比特不低于 0.95 为共同标准，完整目标约在 700 步达标，去掉聚焦调节与去掉逐比特加权的变体分别约在一千五与 1700 步达标，标准交叉熵在第一轮内未达标。

这说明两项分别从实例确信度与位置难度两路加速早期均衡收敛，合用最快，但这只是早期优化速度的证据，不等于最终精度必然差同样多。第二组比较梅尔域与波形域嵌入，波形变体把梅尔均方误差换成波形绝对误差，其余数据评测对齐。波形域干净恢复也接近满分且扰动后平均约 0.90，但质量明显更低，而梅尔域扰动后平均更高且质量保持高位。

频谱可视化显示两者都保留主时频结构，但波形域偏差更大，本方法修改更弱且跟随内容，与质量鲁棒数字一致。失败模式分析还显示，纯噪声复合下各比特都接近满分，含编解码与低码率压缩的复合则出现位置不均的比特错误且脆弱位置随流水线而变，说明连续有损操作既全局削弱证据又带来与流水线相关的非均匀错误。

### 这些结论在什么边界外不再成立

论文明确列出若干边界。链路边界是只在含梅尔产生与神经声码的两条链路上分别训练评测，没有证明可直接用于无梅尔接口的架构，也没有证明一套水印参数可跨链路通用。扰动边界是单种覆盖较广但神经编解码只测了一种，复合只是预定义流水线，未测更广编解码族、未见扰动与自适应攻击。质量边界是主要靠客观指标与模型估计的平均意见分，没有主观听音验证，不能直接等同于人耳透明。

训练上只优化水印编码器与提取器，语音合成主干冻结，短梅尔段训练聚焦约 1 秒恢复，完整长语音与流式情形的稳定性不在主结论内。把平均领先的百分点数理解为在一切条件下都领先，或把干净大载荷可解理解为扰动后同样可解，都超出了证据支持的范围。

### 要复现第一步该准备什么

复现第一步是按链路准备数据与冻结模型。先拿到文本语音划分并排除测试集，用对应链路的文本前端、提示编码与声学模型生成 80 维梅尔谱并按话语标识缓存，两条链路缓存分开不混用。训练时截取每条梅尔谱前 50 帧并在批内截齐到最短长度，为每样本生成独立随机载荷并配对按位取反，只更新水印编码器与提取器。先做干净预热再以 0.7 概率做在线增强，每批至多采样一种扰动。

评测时用完整语音做质量比较，用同一缓存音频施加固定参数的单种与复合扰动，输出裁剪或补零到输入长度再提取，按位正确率等权平均。超参数与扰动参数应照原文附录取用，载荷、信噪比、码率、滤波归一化截止、平滑窗、回声延迟增益、量化级数与变速因子任一改动都会改变数字。

### 什么时候值得尝试以及还缺哪项验证

当你的链路保留梅尔到波形的合成阶段、需要在生成侧给每段合成语音附稳定标识，并且能接受为每条链路单独训练一套水印模型时，这个梅尔接口值得尝试。它把强度分配交给内容自适应残差，把难易不均交给聚焦加逐比特加权，把质量交给梅尔保真约束，实测在两条链路上同时保住了质量与难扰动下的可恢复性。容易产生的误解是把冻结主干理解为输出确定，实际上冻结只说明不更新主干参数，不推出系统输出确定。

把无训练说成确定性求解也不对，本研究仍有神经网络训练，只是训练对象是水印模块。还缺的验证是主观听音、更多声码器与链路、更广编解码与未见扰动，以及针对提取器的自适应安全训练。先复现十六比特主设置的质量与单复合扰动平均，再扩展载荷与流水线，是比较稳妥的顺序。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.15082v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
