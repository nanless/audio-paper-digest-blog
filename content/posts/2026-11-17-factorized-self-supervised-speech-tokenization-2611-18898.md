---
title: "Factorized Self-Supervised Speech Tokenization"
date: 2026-11-17
draft: false
tags: [语音编码, 文本到语音, 语音转换, 神经编解码与离散单元, 聚类与类别匹配]
categories: [论文速递]
description: "Facto 用线性分解把自监督特征拆成共享内容与说话人变换，再用最小二乘估计器推广到未见说话人并聚类成单码本令牌，以更稳定的令牌在文本转语音上取得优势，同时保持重建与变换能力，代价是仍需传输说话人嵌入且验证集中在朗读英语上。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.18898"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "把说什么和谁说的分开：Facto 因式分解语音分词器"
paper_digest_original_title: "Factorized Self-Supervised Speech Tokenization"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.18898v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.18898v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.18898v1.pdf"
paper_digest_primary_task: "语音编码"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-coding","label":"语音编码"},{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"task","id":"task.voice-conversion","label":"语音转换"},{"facet":"method","id":"method.neural-codec","label":"神经编解码与离散单元"},{"facet":"method","id":"method.clustering","label":"聚类与类别匹配"}]
paper_digest_primary_method: "神经编解码与离散单元"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "Facto 用线性分解把自监督特征拆成共享内容与说话人变换，再用最小二乘估计器推广到未见说话人并聚类成单码本令牌，以更稳定的令牌在文本转语音上取得优势，同时保持重建与变换能力，代价是仍需传输说话人嵌入且验证集中在朗读英语上。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Benjamin Van Niekerk"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jean-Philippe Letendre"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nicol Visser"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hugo Seute"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Herman Kamper"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mirco Ravanelli"}]
paper_digest_abstract_sha256: "41c86a5545674cdece52b571cda18e0816f75c44f889c0ffada68ff7f4c0b433"
paper_digest_sidecars: {"citation.bib":{"sha256":"dc318d155a7a9b36839d2e6a9aa7dc5691ef39e699f260c58a732dae48680509","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-18898/citation.bib"},"citation.json":{"sha256":"d2b16932fd28bbbeca19a4b5de4e1580a3c9aabc8917a43a9f1281cb870dbad3","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-18898/citation.json"},"citation.ris":{"sha256":"3658d11db7eb21e2bb38ce445a3eda0368fd18fa4149ccd7eeb9d82d50c1fcb8","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-18898/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"29cce9abe63f5b259105cf46018a9f7bc2652d4935f5068df3fdaba26b760005","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-18898/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "6847dd82c3891551f582bb7d9ef1ec3a00d942bc10e7fb6b26e67cf564c4ca37"
paper_digest_api_reader_plan_sha256: "d172fb06c65f867fa9f6a5c4ff73ed127a5d28146a0c97bc5dcab0fef6e7e00b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "1e155b364044f7c404afdebf1351843a00cd3fe27f1b5909e8e2fe13c03901f5"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "f756b0f7118c34b4bd27b0e568f56e08376baca3905bd99388babe82027a6189"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "635d7e0a0132fb7980def3744e5917ae40a63bd0e8c374fab4412cc1bfbd9e77"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3689c01f69fa47747c8fc75900a55b13e8f18ee9bee2cb385386e7586a73dcc0"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 把说什么和谁说的分开：Facto 因式分解语音分词器

> 英文题目：*[Factorized Self-Supervised Speech Tokenization](https://arxiv.org/abs/2611.18898v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频编码](/audio-paper-digest-blog/papers/?concept=task.audio-coding) → [语音编码](/audio-paper-digest-blog/papers/?concept=task.speech-coding)；[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[语音转换](/audio-paper-digest-blog/papers/?concept=task.voice-conversion)
- **研究方法**：[向量量化](/audio-paper-digest-blog/papers/?concept=method.vector-quantization) → [神经编解码与离散单元](/audio-paper-digest-blog/papers/?concept=method.neural-codec)；[聚类与类别匹配](/audio-paper-digest-blog/papers/?concept=method.clustering)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Benjamin Van Niekerk：机构信息未能在本次解析中与作者逐人可靠绑定
- Jean-Philippe Letendre：机构信息未能在本次解析中与作者逐人可靠绑定
- Nicol Visser：机构信息未能在本次解析中与作者逐人可靠绑定
- Hugo Seute：机构信息未能在本次解析中与作者逐人可靠绑定
- Herman Kamper：机构信息未能在本次解析中与作者逐人可靠绑定
- Mirco Ravanelli：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音分词器需要把波形变成紧凑离散单元，供语言模型生成语音，同时保留说话人音色与表达细节。直接把内容、韵律与音色混在一起编码会导致码本冗余，微小噪声也会改变切分结果，增加建模难度。本文提出的Facto把随时间变化的信息与静态信息分开处理，随时间变化部分指内容与韵律，静态部分指说话人身份与录制条件。输入WavLM第六层自监督特征后，先在对齐的多说话人特征上做低秩分解得到共享内容矩阵与说话人变换，再用最小二乘线性估计器把未见说话人映射到内容空间，随后对分块特征做主成分分析与k均值聚类形成单码本，最后由带说话人嵌入与调制层的HiFiGAN解码器重建波形。与需要信息瓶颈或对抗目标的解耦方案不同，该路线只用线性运算完成分解与泛化，并给出随训练说话人数增加的收敛分析。在LibriSpeech test-clean的噪声稳定性评测中，12.5 Hz下8192码本Facto平均单元编辑距离为20.23，低于Kanade的50.45。在Seed-TTS test-en的12.5 Hz文本到语音评测中，8192码本Facto词错率为2.7%，低于Kanade的4.5%与FocalCodec的3.6%。编码器分解与聚类可在中央处理器上于1小时内完成，解码器预训练与微调仍需多日多卡开销。该结论仅在WavLM第六层特征与英语朗读数据上验证，对其他自监督表示尚未验证，采用全局说话人嵌入难以刻画句内时变音色，短语音传输说话人嵌入还会明显抬高码率。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音分词器要把什么变成什么

语音分词器的输入是连续波形，目标是输出离散的令牌序列，让自回归语言模型能像处理文字一样处理语音。理想的令牌要同时满足两类要求，一是紧凑类文本，便于长序列建模，二是保留足够细节，能重建出原说话人的音色、韵律与录制环境。

现有单流做法把所有变化压进一套码本，同一句话换个说话人或换种语气就可能变成完全不同的编号序列。这意味着码本不仅要表示音素，还要表示音素与说话人、语气、通道的各种组合，结果是码本需要很大，下游模型也要学会组合爆炸的映射，训练与推理的负担都上升。

另一条路线是做解耦表示，时变部分单独编码，静态部分另行处理。论文把内容与韵律归为时变信息，把说话人身份与录音条件归为静态成分。解耦的好处是令牌只需要描述随时间走的内容起伏，身份信息在重建时再加回去，低帧率下也能保持说话人相似度。但过去的解耦常依赖精细调节的信息瓶颈、对抗目标或文本监督，输入稍加扰动输出令牌就大变，稳定性不足。

本文的基础是 Kamper 等人提出的线性分解方法，它对自监督特征做低秩分解，得到共享内容与说话人相关变换。原文用 WavLM 第六层特征做实验，认为该层特征的近邻关系主要反映音素相似，适合先对齐再分解。Facto 的工作就是把只能用于封闭说话人集合的分解推广到未见说话人，并围绕它建成完整的单码本分词器与轻量解码器。

### 同一句话为何在不同人嘴里变成不同令牌

论文用上班路上听到的早安做例子，疲惫通勤者与电台主播说的同一个词，在波形与特征上差异很大。如果分词器不做区分，内容相同的帧会因为音色不同被分到不同簇，语言模型就要分别学习每种说话人下的内容模式，数据效率变低，对噪声也更敏感。

具体困难有 3 个。第一是如何在没有文本监督的情况下，把内容方向与说话人方向分开，且分离后的内容仍保留韵律细节，不只是音素。第二是如何让这种分离对训练时没见过的说话人也有效，因为实际使用时不可能为每个新说话人重新估计一个变换矩阵。第三是如何证明增加说话人多样性确实让估计更可靠，而不是凭经验调参。

**时变信息 × 静态成分：** 时变信息指随时间变化的内容与韵律，静态成分指整句基本不变的说话人音色与录音通道，Facto 把二者分开处理是为了让令牌只承担前者，降低对说话人组合的冗余建模，而把后者留给解码时的说话人条件。

评价这类工作需要同时看紧凑性、保真度与稳定性。紧凑性体现在帧率与码本大小，论文主打 12.5 赫兹与 25 赫兹两种低帧率，码本为 8192 或 16384。保真度用重建的词错率、说话人相似度、伪造等错率与预测平均意见分衡量。稳定性用加噪前后令牌的单元编辑距离衡量，距离越小表示扰动下越不变。后续文本转语音、语音转换与口语语言建模则检验稳定令牌是否真的更容易被生成模型学习。

### Facto 的三步流水线如何分工

Facto 把整个流程分成 3 段，分别对应分解、估计聚类与解码。第一段只在训练说话人集合上做一次因子分解，得到共享内容空间与每个训练说话人的变换。第二段学习一个与说话人无关的线性估计器，把任意新语音投影到该内容空间，再做分块、降维与聚类得到令牌。第 3 段训练一个带说话人条件的声码器，从令牌加说话人嵌入重建波形。

沿一个样本走一遍有助于理解分工。原始波形先经 WavLM 第六层变成每秒 50 帧的连续特征，维度较高且混有说话人信息。估计器用一个矩阵乘法加偏置把它映射到 12 维的内容向量序列，帧率仍是 50 赫兹。接着相邻 2 帧或 4 帧拼成一个块，分别对应 25 赫兹与 12.5 赫兹，再用主成分分析去相关并保留 95% 方差，最后用 k 均值把每个块变成一个整数编号。解码时整数编号查回连续向量，叠加从参考语音提取的全局说话人向量，经过 HiFiGAN 类网络上采样到 16 千赫兹波形。

这种分工的代价与收益都很明确。收益是编码器训练很轻，论文称在中央处理器上不到 1 小时即可完成分解、估计与聚类，语言模型只需建模单流低帧率令牌。代价是解码器仍需两块图形处理器训练较长时间，且重建时必须额外传输说话人嵌入，短语音下该嵌入的码率占比不可忽略。全局嵌入也不能刻画一句内变化的说话特性，这是作者明确留给未来的缺口。

### 对齐加低秩分解如何去掉说话人方向

分解段处理的是固定的训练说话人集合，论文在 LibriSpeech 训练集的 251 个说话人上各取 5 分钟，约 15000 帧。第一步是特征对齐，从混合池随机选锚帧，对每个锚帧用余弦距离最近邻在每个说话人中找到内容相近的 1 帧。这样拼出的矩阵按说话人记为对齐特征，行对应相同内容，列对应不同音色，交换说话人但保留内容。

第二步是把对齐特征近似成共享内容乘以说话人变换。优化目标是最小化所有说话人的重建平方误差，同时约束乘积的秩不超过 R，论文取 R 为 12。原文通过把各说话人矩阵按特征维拼接，把问题变成对拼接大矩阵的低秩近似，进而用奇异值分解精确求解，左奇异向量给出内容，右奇异向量给出各说话人变换。

\[\underset{\mathbf{C},\mathbf{S}_{k}}{\text{min}}\quad\sum_{k=1}^{K}\lVert\mathbf{X}_{k}-\mathbf{C}\mathbf{S}_{k}\rVert_{F}^{2}\quad\text{subject to }\quad\text{rank}(\mathbf{C}\mathbf{S}_{k})\leq R\]

该内容空间经可视化与探针验证具有两层结构，全局按音素类型聚拢，局部按基频等韵律连续变化。附录用轻量探针进一步量化，内容表示上的字符错率低于原始特征，帧级能量相关高达 0.937 左右，基频相关约 0.630，说明音素与韵律大体保留，而说话人相关的平均基频与频谱质心更多留在说话人侧。秩的消融显示增大 R 能提升语义与韵律保留，但 12 附近趋于饱和，因此选 12 作为紧凑与保留的折中。

**内容矩阵 × 说话人变换：** 内容矩阵是所有说话人共享的低秩表示，说话人变换是把该共享内容映射到每个具体说话人特征的矩阵，二者相乘近似对齐后的特征，分解后聚类只在内容矩阵上进行，从而去掉说话人方向的影响。

理论部分把特征建模为内容乘变换加零均值噪声，假设不同说话人的变换与噪声独立同分布且矩有限。由于内容只在可逆变换下可辨识，论文用子空间主夹角衡量估计内容空间与真实内容空间的距离，证明误差由噪声在正交补上的投影决定，另加一项随说话人数 K 以 1 比根号 K 衰减的波动。直观含义是说话人越多，对噪声的平均越充分，不同说话人子集算出的内容空间也越一致，实验中用不相交子集验证了该衰减趋势。

\[\lVert\sin\mathbf{\Theta}(\mathcal{U}^{*},\hat{\mathcal{U}}_{R})\rVert_{F}\leq\frac{\lVert(\mathbf{I}-\mathbf{P}^{*})\mathbf{\Sigma}_{\mathbf{E}}\rVert_{F}}{\lambda_{R}(\mathbf{\Sigma}_{\mathbf{X}})}+\mathcal{O}_{P}\left(\frac{1}{\sqrt{K}}\right).\]

### 线性估计器如何把新说话人投影到内容空间

原有闭集方法的短板是新语音需要已知说话人变换的伪逆才能求内容，这对未见说话人不可用。Facto 改为学习一个所有说话人共享的线性映射，直接从原始特征预测内容，形式为特征乘矩阵加偏置，参数通过最小化训练说话人上的期望平方误差确定。

\[\mathcal{L}(\mathbf{W},\mathbf{b})=\mathbb{E}_{k}\left[\lVert\hat{\mathbf{C}}_{k}(\mathbf{W},\mathbf{b})-\mathbf{C}\rVert_{F}^{2}\right].\]

在生成模型假设下，该期望误差可分解为三项，分别对应偏差、说话人方差与噪声方差。偏差衡量估计器与平均说话人变换的失配，理想情况下矩阵应为平均变换的伪逆。说话人方差衡量对偏离平均的敏感度，希望投影方向与说话人变化主方向正交。噪声方差衡量分解本身的重建残差经过估计器后的放大。论文对比了平均逆、随机单说话人逆、已知源说话人逆与最小 2 乘 4 种选择，最小二乘因同时权衡三项而相对重建误差最低，甚至优于需要知道真实源变换的下界方法，说明考虑噪声方差很关键。

\[\mathcal{L}(\mathbf{W},\mathbf{b})=\underbrace{\lVert\mathbf{C}\left(\bar{\mathbf{S}}\mathbf{W}-\mathbf{I}\right)+\mathbf{b}\rVert_{F}^{2}}_{\text{Bias}^{2}}+\underbrace{\mathbb{E}_{k}\left[\lVert\mathbf{C}\mathbf{\Delta}_{k}\mathbf{W}\rVert_{F}^{2}\right]}_{\text{Speaker Variance}}+\underbrace{\mathbb{E}_{k}\left[\lVert\mathbf{E}_{k}\mathbf{W}\rVert_{F}^{2}\right]}_{\text{Noise Variance}}.\]

最小二乘的性能依赖训练说话人数。推论给出新说话人上的期望误差等于总体最优误差加一项 1 比 K 的估计方差，实验中误差随说话人数增加而下降，约 50 个说话人后趋于平稳，验证了多样性带来泛化的结论。理解这一点的关键是估计器协方差随样本数线性收缩，二次型期望自然呈现 1 比 K 的速率。

\[\mathbb{E}_{\mathcal{D}}[\mathcal{L}(\hat{\mathbf{W}},\hat{\mathbf{b}})]=\mathcal{L}(\mathbf{W}^{*},\mathbf{b}^{*})+\mathcal{O}\left(1/K\right).\]

得到可靠内容投影后，聚类段负责把连续内容变成紧凑令牌。相邻帧拼块保留短时结构，与均值池化只保留平均不同，拼块会引入块内相关，因此先做主成分分析去相关，25 赫兹分支降到 12 维，12.5 赫兹分支降到 19 维，再做 k 均值。帧率与码本共同决定码率，论文测试 8192 与 16384 两档，分别对应不同保真与建模难度的权衡。

**内容估计器 × k 均值聚类：** 内容估计器是用线性矩阵把未见说话人的原始特征直接投影到内容空间的模块，k 均值聚类则把投影后的连续内容切成离散编号，前者解决泛化到新说话人的问题，后者解决把连续向量变成语言模型可用的令牌问题。

### 解码器如何把令牌与身份重新合在一起

解码器的输入是离散内容令牌与一段参考语音，输出是带目标音色的波形。网络基于 HiFiGAN 改造，加入说话人嵌入网络与特征调制层。说话人嵌入器由残差块加均值池化与归一化组成，从内容归一化残差而非原始特征提取全局向量，做法是用原始特征减去内容乘平均变换，以去掉平均内容信号，论文称这能加快收敛。

调制方式是对解码器每层激活做仿射变换，缩放与偏置都由说话人向量生成。这种设计让内容路径决定时序与韵律走向，身份路径只做全局调制，二者在每一层汇合。训练先在连续内容表示上预训练，再在量化令牌上微调以补偿量化误差，同一预训练模型可复用于不同码本，节省跨码本的重复训练。

上采样配置按帧率区分，25 赫兹与 12.5 赫兹分别用不同的上采样倍数组合生成 16 千赫兹音频，判别器保留多周期判别器并把多尺度判别器换成多分辨率判别器。需要提醒的是解码器训练成本远高于编码器，预训练与微调分别需要约 20 天与 5 天的双卡时间，这是复现时真正的开销所在。

**内容令牌 × 说话人嵌入：** 内容令牌携带音素与韵律的时变序列，说话人嵌入是从残差特征提取的全局身份向量，解码时令牌决定说什么与怎么起伏，嵌入通过调制恢复是谁的声音，二者汇合才完成可听波形重建。

### 在什么数据与指标下比较才算公平

编码器统一用 WavLM 第六层特征，分解用训练集 251 人各 5 分钟，聚类用训练子集投影，解码器用 960 小时全集训练，开发集留作验证。基线聚焦单码本低帧率模型，主要对比 FocalCodec 与 Kanade，二者分别代表单流调制网络与带离散瓶颈的解耦路线，另用 CosyVoice2 与 FACodec 作为高帧率或多码本参照，但不把不同帧率与码本数的差异直接说成方法胜负。

指标方向需要先讲清。词错率越低表示可懂度越好，用转录模型计算。说话人相似度越高越好，用说话人嵌入余弦衡量。伪造等错率越接近 50% 越好，表示验证系统难以区分合成与真实，而非越高无上限。预测平均意见分越高表示整体质量越好。

单元编辑距离越低表示加噪前后令牌越稳定。文本转语音还加入主观自然度与参考相似度的多人听感评分，并报告置信区间。

文本转语音把 56M 参数的文本模型词表扩充后做下一令牌预测，在约 40,000 小时过滤后的 LibriHeavy 上训练，生成时限制时长并固定温度与采样参数。口语语言建模用 125M 参数模型从零训练，窗口 2048 个令牌，在 6,000 小时与 60,000 小时两档数据上评估词级、句法与故事连贯任务。语音转换从测试集每人取 10 句源语音，每句配 5 段不同目标说话人参考，只比较内容与音色的分离能力。

### 抗噪稳定性与重建保真度各付出什么代价

先看加噪稳定性要回答的问题：在相同噪声下谁的令牌变化最小。比较限定在同一帧率内，噪声包括白噪声、粉噪声、棕噪声、比特压缩与真实噪声，指标是单元编辑距离，越低越稳定。下表截取 12.5 赫兹分支的白噪声与平均距离，完整多噪声分解见原文附表，结论一致。

| Method | Codebook | White | Avg |
| --- | --- | --- | --- |
|  |  | (SNR 25) |  |
| Kanade | 12800 | 54.71 | 50.45 |
| FocalCodec | 08192 | 57.30 | 48.12 |
| Facto | 08192 | 27.12 | 20.23 |

上表支撑的判断是 Facto 的平均编辑距离约为 20.23，约为 Kanade 的 50.45 与 FocalCodec 的 48.12 的一半左右，白噪声下 27.12 对 54.71 与 57.30 的差距同样明显。附录进一步控制变量，只比较直接聚类与先分解再聚类，发现分解在 12 维、64 维与 256 维下都降低距离，说明增益不只是降维或聚类带来的，而是去掉了说话人方向后分布更易建模。但 StableToken 用噪声增强训练可到 8.50 左右，明显优于 Facto，说明 Facto 的稳定来自表示本身，仍有专用增强方法的上限未触及。

**单元编辑距离 × 文本转语音：** 单元编辑距离衡量加噪前后令牌序列的变化程度，文本转语音考验语言模型能否从文本稳定生成令牌序列，前者是后者的上游条件，论文的逻辑是更小的编辑距离意味着更容易建模的令牌分布，从而带来更低的词错率与更高的相似度。

再看重建要回答的问题：在给定码率下能否同时保住可懂度、音色与质量。下表为 LibriSpeech 测试集的重建结果，包含 12.5 赫兹与 25 赫兹两档，参数量一并列出以说明成本。

| Method | WER↓ | SIM↑ | Spoof-EER↑ | MOS↑ |
| --- | --- | --- | --- | --- |
| FocalCodec | 5.9 | 0.90 | 31.1 | 4.35 |
| Kanade | 3.5 | 0.93 | 41.2 | 4.35 |
| Facto | 5.6 | 0.93 | 42.3 | 4.37 |
| Facto | 5.0 | 0.93 | 42.6 | 4.37 |
| Ground Truth | 2.1 | 0.95 | 50 | 4.39 |

这张表的含义需要分开读。Facto 在说话人相似度与质量上占优，12.5 赫兹下相似度 0.93 与伪造等错率 42.3 到 42.6，25 赫兹下相似度 0.94 与等错率 44.4 左右，均高于同帧率基线。代价是可懂度略逊于 Kanade，12.5 赫兹下 Facto 词错率 5.6 与 5.0 对 Kanade 的 3.5，25 赫兹下 3.1 与 3.0 对 2.4，增大码本只能小幅缩小差距。连续表示的词错率可降到 2.4 左右，说明量化本身带来可懂度损失。低帧率下 Facto 与 Kanade 的相似度下降小于 FocalCodec，支持了解耦令牌只需建模时变信息的解释，但该结论只在朗读英语测试集上成立。

### 稳定令牌是否带来更好的生成与建模

文本转语音是检验稳定令牌价值的主战场，模型结构与训练数据固定，只换分词器，因此差异可归因于令牌分布。下表是在富有表现力与自发语音上的补充评估，Seed 测试集的趋势相同，这里选用更难的 Expresso 测试集更能看出边界，指标方向与前文一致。

| Method | Codebook | WER↓ | SIM↑ | Spoof-EER↑ | MOS↑ |
| --- | --- | --- | --- | --- | --- |
| FocalCodec | 08192 | 15.3 | 0.74 | 19.4 | 4.02 |
| Kanade | 12800 | 18.9 | 0.86 | 43.2 | 4.11 |
| Facto | 08192 | 09.4 | 0.90 | 53.1 | 4.31 |
| Kanade | 12800 | 17.2 | 0.88 | 45.1 | 4.19 |
| Facto | 08192 | 11.2 | 0.88 | 49.0 | 4.26 |

该表显示 Facto 在两档帧率下全面领先基线，12.5 赫兹下词错率 9.4 对 15.3 与 18.9，相似度 0.90 对 0.74 与 0.86，等错率 53.1 明显高于基线，质量 4.31 也最高。25 赫兹下优势收窄但仍保持，词错率 11.2 左右对 17.0 以上。限制是与真实语音的 3.9 词错率相比仍有较大差距，说明自发与表情语音的自然停顿与语气仍难生成，不能把朗读集上的接近真实推广到所有风格。原文另报告 Seed 集上 12.5 赫兹 Facto 的主观自然度与参考相似度最高，25 赫兹下自然度略低于 Kanade 而相似度仍领先，表明客观指标与听感并非完全单调。

语音转换进一步验证解耦是否彻底，任务是只给短参考就把源内容换到目标音色。下表聚焦 25 赫兹，保留连续表示与高帧率参照以区分量化与解耦各自的影响。

| Method | Codebook | WER↓ | SIM↑ | Spoof-EER↑ | MOS↑ |
| --- | --- | --- | --- | --- | --- |
| Kanade | 12800 | 0.97 | 0.93 | 34.9 | 4.37 |
| Facto | 08192 | 1.83 | 0.94 | 42.0 | 4.40 |
| Facto | 16384 | 1.66 | 0.94 | 41.2 | 4.40 |
| CosyVoice2 | 06561 | 1.30 | 0.86 | 24.5 | 4.33 |
| FACodec | 1024 × 6 | 1.43 | 0.90 | 28.8 | 4.37 |

从表中可见 Facto 的相似度 0.94 与等错率 42.0 左右高于 Kanade 的 0.93 与 34.9，质量 4.40 也略高，代价仍是词错率 1.83 对 0.97。连续表示的词错率回到 0.85，说明可懂度损失主要来自聚类而非内容投影本身。CosyVoice2 与 FACodec 重建虽强，但转换相似度仅 0.86 与 0.90，支持了它们内容与说话人纠缠更多的判断，但该判断只在本文的短参考与朗读测试条件下成立。

口语语言建模考验令牌的语言结构，模型从零训练，窗口与训练轮数固定。下表为 12.5 赫兹在 6,000 小时与 60,000 小时下的词级、句法与故事连贯得分，越高越好。

| 6k hours |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| FocalCodec | 12.5 | 08192 | 60.0 | 64.1 | 49.8 | 61.5 |
| Kanade | 12.5 | 12800 | 61.6 | 66.3 | 50.4 | 63.4 |
| Facto | 12.5 | 08192 | 61.0 | 65.5 | 50.9 | 65.2 |
| Facto | 12.5 | 16384 | 60.8 | 65.0 | 51.2 | 64.5 |
| Facto | 12.5 | 08192 | 64.9 | 71.6 | 53.6 | 67.1 |

在 6,000 小时下 Facto 略优于 FocalCodec 并与 Kanade 接近，故事连贯 65.2 对 61.5 与 63.4 是主要优势。扩展到 60,000 小时后 Facto 继续提升到 67.1，但仍低于同帧率 Mimi 的 68.5，更低于剥离声学细节的音节级模型的 75.4。这说明单流低帧率令牌保留韵律与音色的同时，也给语言建模带来额外负担，语义提纯模型在该任务上有天然优势，不能跨任务直接排名。25 赫兹分支的趋势类似，Facto 并未拉开差距，帧率选择需按长程建模与保真需求权衡。

### 哪些结论换了条件就不成立

第一个边界是特征依赖。全部实验只用了 WavLM 第六层，论文假设近邻相似主要反映音素，韵律仍可从内容中恢复。虽然音素判别在多种自监督模型中常见，但未验证换了编码器后对齐与分解是否同样有效，读者不能默认迁移到其他层或其模型仍有相同秩与超参数。

第二个边界是说话人建模。解码用全局向量，无法跟踪一句内音色漂移或多人交替，若在长对话或情绪剧烈变化语音上使用，相似度与质量可能下降。作者提出按短窗提取嵌入的思路，但未实验，复现时不应自行补上该功能并当成原文结果。

第 3 个边界是码率与部署。内容令牌本身是低码率，但重建必须传输说话人嵌入，短语音下该开销占比上升，音频压缩场景需另算总码率。训练成本也不对称，编码器确实轻量，解码器与下游语言模型仍需数十小时到数十天的图形处理器时间，推理延迟原文未报告，不能从帧率低直接推出延迟低。

第四个边界是数据与评测。主结果集中在英语朗读，Expresso 补充了表情与自发但仍是有限集，跨语言、口音与嘈杂录音的表现待验证。主观评分人数约十余人到二十余人，置信区间较宽，细微的自然度差异不宜过度解读。

### 何时值得尝试与复现第一步

当任务需要低帧率单流令牌，且下游是自回归生成而非纯理解时，Facto 值得优先尝试，特别是文本转语音与零样本语音转换。它的内容投影是线性矩阵，聚类是标准 k 均值，解码是 HiFiGAN 加调制，工程改动小，编码器训练成本低，适合先验证稳定性再决定是否投入解码器训练。

复现第一步不是直接训练声码器，而是复现分解与估计器。用 251 个或至少 50 个说话人的对齐特征做奇异值分解，取秩 12 得到内容空间，再拟合最小二乘估计器并在留出数据上计算相对重建误差，检查误差是否随说话人数呈 1 比 K 下降。若该曲线不出现，后续聚类与生成结果很难复现，应先检查对齐近邻与特征层是否与原文一致。

还需要补的验证包括跨编码器与跨语言的对齐有效性、短窗说话人嵌入对长时漂移的改善、以及在真实噪声与远场录音下的单元编辑距离与下游词错率是否同步变化。只有这些补齐后，才能判断稳定令牌的增益是表示本身带来的，还是特定数据与评测条件下的偶然表现。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.18898v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-17/)
