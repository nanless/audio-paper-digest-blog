---
title: "Noisy Target Training Meets Drifting for Weakly-Supervised Speech Enhancement"
date: 2026-10-27
draft: false
tags: [语音增强, 弱监督学习, 领域适应, 语音]
categories: [论文速递]
description: "针对带噪目标训练会留下残留噪声的问题，论文用非成对干净语音的 Sinkhorn 漂移损失在语音质量评估模型隐空间内做分布对齐，在 VoiceBank-DEMAND 上保住波形保真度的同时提升听感指标，并在 CHiME-3 真机录音的域自适应中同样改善听感。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.32870"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "带噪目标训练结合漂移：用不成对干净语音压住残留噪声"
paper_digest_original_title: "Noisy Target Training Meets Drifting for Weakly-Supervised Speech Enhancement"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.32870v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.32870v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.32870v1.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.weak-supervised","label":"弱监督学习"},{"facet":"method","id":"method.domain-adaptation","label":"领域适应"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "弱监督学习"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对带噪目标训练会留下残留噪声的问题，论文用非成对干净语音的 Sinkhorn 漂移损失在语音质量评估模型隐空间内做分布对齐，在 VoiceBank-DEMAND 上保住波形保真度的同时提升听感指标，并在 CHiME-3 真机录音的域自适应中同样改善听感。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yoshiki Masuyama"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dominik Klement"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Christoph Boeddeker"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Julius Richter"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kohei Saijo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gordon Wichern"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Takahiro Edo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jonathan Le Roux"}]
paper_digest_abstract_sha256: "0100144fbee3cabc0b0534e87fdcb294190712c667b7140484cc538332465202"
paper_digest_sidecars: {"citation.bib":{"sha256":"44cf90bdadcabe6d5d2b51c09d7c2e07c498717c6d83eb36adcb0345e3e29867","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32870/citation.bib"},"citation.json":{"sha256":"d69a167be5c243f5c3e35b288824f62b8e834c3885eaf001ce15b3462d429801","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32870/citation.json"},"citation.ris":{"sha256":"13e3d2a36053a9a92152ea7e74bd849e6347bc035f2f5e4ea66eac31dc392ea9","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32870/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"b35c491d65c5c55aec91c4d5605266b14bcd412cd84aa737716f3442dc2287f6","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32870/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f75045a9009b5384cef42bee6d9470386c435e1896afb65ede35b2c5c0d9fa48"
paper_digest_api_reader_plan_sha256: "96977ccb956d2f91387cd8ee5d8a09fe4096653ad36f8f37e51ce96ed42a1b1e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d9634e077d083dd17f151132f1e1d6fe301913f48e377a2c456b7dbf94747591"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "5b31e943c4d4eac3937553d7e1a6d5bfc3aab28ec498a03007fbc8712e4d7a60"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "81dd2bdc84d7b0cdb1878527538999ccc5181a827825007a65bdb98a968ab3d4"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "170cd8282f3630cc0f1bce261b1c1f4e964f1a9608d88d1b60511ace0cbf64fa"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 带噪目标训练结合漂移：用不成对干净语音压住残留噪声

> 英文题目：*[Noisy Target Training Meets Drifting for Weakly-Supervised Speech Enhancement](https://arxiv.org/abs/2610.32870v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音增强](/audio-paper-digest-blog/papers/?concept=task.speech-enhancement)
- **研究方法**：[弱监督学习](/audio-paper-digest-blog/papers/?concept=method.weak-supervised)；[迁移学习](/audio-paper-digest-blog/papers/?concept=method.transfer) → [领域适应](/audio-paper-digest-blog/papers/?concept=method.domain-adaptation)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Yoshiki Masuyama：机构信息未能在本次解析中与作者逐人可靠绑定
- Dominik Klement：机构信息未能在本次解析中与作者逐人可靠绑定
- Christoph Boeddeker：机构信息未能在本次解析中与作者逐人可靠绑定
- Julius Richter：机构信息未能在本次解析中与作者逐人可靠绑定
- Kohei Saijo：机构信息未能在本次解析中与作者逐人可靠绑定
- Gordon Wichern：机构信息未能在本次解析中与作者逐人可靠绑定
- Takahiro Edo：机构信息未能在本次解析中与作者逐人可靠绑定
- Jonathan Le Roux：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

任务输入是一段干净语音与背景噪声相加得到的观测语音，要求输出更干净的语音，难点是真实环境没有可配对的干净语音作监督，而用合成配对训练会与真实声学条件失配。方法先用噪声目标训练（Noisy Target Training，NyTT）学习去噪，把观测信号再加额外噪声作为输入，以观测信号本身或教师模型输出为目标，迫使模型抑制原有噪声与额外噪声。再用Sinkhorn漂移损失在语音质量评估模型的隐空间计算漂移方向，吸引项把增强特征拉向不配对干净语音特征，排斥项使其远离当前增强分布。两者相加后前者保持内容忠实，后者抑制残留噪声并提升自然度；与只用均值教师或只用不配对漂移的方法不同，该组合同时保留波形约束和分布约束。在 VoiceBank-DEMAND 上，NyTT 加均值教师结合不配对漂移相对仅用 NyTT 加均值教师，将 UTMOS 从 3.81 提升到 3.93，SI-SDR 保持 18.58 dB 不变。在 CHiME-3 真实录音的领域自适应中，该方法相对仅用 NyTT 加均值教师，将 DNSMOS P.808 从 3.42 提升到 3.59。该结论适用于以感知质量指标衡量的受控合成集与上述录音自适应设置，在 CHiME-3 上其词错误率仍高于未处理含噪语音，对含增强伪影的识别鲁棒性尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音增强要从什么样的输入得到什么样的输出

语音增强的输入是一段观测到的带噪语音，论文把它记为观测信号 x，它是底层干净语音 s 与观测噪声 n 相加的结果。目标是输出一段增强语音，既要保留 s 中的语言内容和说话人特征，又要去掉 n，让人听起来更干净、机器识别也更少受干扰。

初学者容易把增强理解成逐采样点把噪声减掉。实际上模型学的是一个映射 f，输入带噪波形，输出估计的语音波形。评价时既看波形与真实干净语音接近到什么程度，也看人耳感知的自然度。论文同时报告侵入式指标和非侵入式听感指标，正是因为两者并不完全一致：波形误差小不一定听感好，听感好也可能改变了细节。

标准做法是干净目标训练，需要大量成对的带噪与干净语音。但真实环境里干净答案拿不到，只能拿预先录好的干净语音人工加噪声来合成训练对。这样训练与真实录音的混响、设备、噪声类型都可能对不上，到野外录音上性能会掉。论文要解决的就是如何在没有成对干净答案的情况下，利用真实带噪录音加上不成对的干净语音来训练。

### 已有弱监督路线为什么还留着残留噪声

一条路线是带噪目标训练，简称 NyTT。它不要求干净答案，而是把观测到的带噪语音 x 作为训练目标，再往 x 上额外加一份噪声得到噪声更重的输入，让模型从噪声更重的信号回到 x。直觉是额外噪声和观测噪声难以区分，模型只好一起压。如果额外噪声与观测噪声同分布，模型确实会学到一定的去噪能力。

但目标本身是带噪的，理论分析指出最优解会留下一定量的观测噪声和额外噪声，听感上就是残留的嘶嘶声或闷糊感。后来的改进用迭代精炼和平均教师框架，把目标换成教师模型对 x 的增强结果，目标比原始 x 更干净一些，但目标函数本身仍然没有显式要求增强语音总体像干净语音。

另一条路线是用不成对干净语音做分布对齐，例如对抗训练。判别器负责区分增强语音和干净语音，增强模型负责骗过判别器，同时再加一项让输出别偏离输入太远的重建约束。问题是这个贴近输入的约束会妨碍去噪，而对抗训练本身对超参数敏感，训练不稳定。论文提到的方法还包括同时预测噪声的变体，但需要多个判别器，整体更复杂。

生成式路线中的 DriftSE 曾尝试只用观测带噪信号加不成对干净语音来训练，在 VoiceBank-DEMAND 上拿到不错的听感分，但语音内容保真度明显变差，甚至不如不处理。这说明只做分布层面的牵引、没有样本层面的内容约束是不够的。论文的切入点正在这里：把 NyTT 的样本级约束和漂移模型的分布级约束合起来。

### 论文要补的具体缺口是什么

论文要处理的是 NyTT 类方法增强输出中残留观测噪声、听感受限的问题。NyTT 及其平均教师变体能保住内容，因为损失是逐样本的波形回归，但它们不关心增强语音的总体分布是否落在干净语音的高密度区。

反过来，单独的非成对漂移能改善听感分布，却管不住每个样本的内容对应关系。论文希望保留 NyTT 的弱监督性质，即不需要每个带噪样本的配对干净答案，只用独立采样的干净语音来提供分布参照，同时在听感相关的隐空间里计算漂移，让增强结果既忠于观测内容，又向干净分布靠拢。

这里的难点在于两个监督的粒度不同：一个是波形上点对点的回归，一个是隐空间里总体分布的移动。如何让后者不破坏前者的内容保真，又能在小批量上稳定估计传输方向，是方法设计的关键。

### 整体流程如何分工

训练时每个步骤同时看到 3 类数据：观测带噪语音 x，额外噪声，以及独立采样的干净语音 s。x 与 s 之间没有配对关系，可以来自不同数据集、不同说话人和不同文本。论文在 VoiceBank-DEMAND 实验中甚至故意用 EARS 数据集的干净语音做非成对参照，保证内容错开。

模型主体是一个增强网络 f，输入是 x 加上额外噪声后的加噪输入，输出是增强波形。同一网络还配有一个用指数滑动平均更新的教师网络，教师看原始 x，输出作为重建损失的伪目标。增强输出同时被送入一个冻结的语音质量评估模型编码器，得到 utterance 级嵌入，漂移损失在这个嵌入空间里计算。

最终优化目标是两项相加：带平均教师的 NyTT 重建损失管样本级保真，Sinkhorn 漂移损失管分布级自然度。推理时只需要学生增强网络，不需要教师，也不需要干净参照和质量评估模型。原文图 1 给出了学生、教师、编码器与两路损失的关系，理解时可先沿加噪输入到增强输出的主路看，再看教师支路如何提供伪目标、干净支路如何提供分布牵引。

### 带噪目标与平均教师如何提供波形监督

先看 NyTT 的基本形式。它对观测 x 再加额外噪声，得到模型输入，训练模型输出去逼近 x。额外噪声从噪声库中采样，并按与 x 的信噪比均匀分布做缩放。论文强调要避开测试环境用到的噪声通道，避免把同一段噪声既当观测噪声又当额外噪声。

\[\mathcal{L}^{\mathrm{NyTT}}(\bm{\theta})=\mathbb{E}_{\mathbf{x},\tilde{\mathbf{n}}}\mathcal{D}(\mathbf{x},f_{\bm{\theta}}(\mathbf{x}+\tilde{\mathbf{n}})),\]

上式中 D 是预测误差度量，例如时域负信噪比。期望是对观测 x 和额外噪声取的。模型要同时压掉观测噪声和额外噪声，但因为目标是 x，最优解仍会残留噪声。

平均教师把目标换成教师对 x 的输出，并对教师输出做停止梯度，教师参数随学生做指数滑动平均更新。学生仍看加噪更重的输入，目标变成相对更干净的教师增强结果。

\[\mathcal{L}^{\mathrm{NyTT+}}(\bm{\theta})=\mathbb{E}_{\mathbf{x},\tilde{\mathbf{n}}}\mathcal{D}(\texttt{sg}(f_{\bm{\theta}^{\prime}}^{\mathrm{EMA}}(\mathbf{x})),f_{\bm{\theta}}(\mathbf{x}+\tilde{\mathbf{n}})),\]

上式中 sg 表示停止梯度，教师参数带 EMA 上标。训练时只有学生参数被梯度更新，教师是学生的缓慢平均，起到自蒸馏的作用。论文的最终重建项用的就是这一版，记为 NyTT+。

**带噪目标训练 × 平均教师：** 带噪目标训练负责提供波形层面的弱监督，让模型学会从加噪更重的输入回到观测信号；平均教师负责把训练目标从带噪观测换成教师对观测的增强结果，提供更干净的伪目标。二者搭配后，学生仍做去额外噪声的回归任务，但目标中的观测噪声被教师先压掉一部分，减轻了学到残留噪声的倾向。

### 增强分布与漂移向量是什么意思

论文把增强语音的总体记为模型诱导的分布 q。直观说，把所有带噪输入按其真实分布送进固定的增强模型，输出的集合就形成 q。它是带噪分布经模型映射后的前推分布，随模型参数变化。

\[q_{\bm{\theta}}=(f_{\bm{\theta}})_{\#}p_{\text{noisy}}.\]

干净语音的总体记为 p，是固定的参照。漂移模型在预训练编码器的隐空间里定义一个向量场 V，输入一个增强特征，输出一个该往哪走的向量。理想的平衡条件是当 q 与 p 相等时，所有位置的漂移都为零。

论文沿用原始漂移的吸引减排斥结构：吸引项把样本拉向目标分布，排斥项把样本推离自身当前分布。均值漂移版本用局部核加权平均来实现，而 Sinkhorn 版本用最优传输的全局权重来实现。

**增强语音分布 × 干净语音分布：** 增强语音分布是指增强模型作用于带噪输入后输出的总体分布，干净语音分布是指真实干净语音的总体分布。前者随模型参数变化，后者固定作为参照。漂移损失的作用就是让前者在隐空间中向后者移动，而不需要每个带噪样本都有配对的干净答案。

**吸引项 × 排斥项：** 吸引项把增强特征拉向干净特征的高密度区域，排斥项把增强特征推离当前增强分布自身的聚集区域。前者防止模型停留在带噪状态，后者防止所有样本坍缩到同一个干净模式。两项相减形成漂移向量，分布相等时漂移为零，达到平衡。

### Sinkhorn 漂移如何在小批量上算出牵引方向

Sinkhorn 散度是熵正则最优传输代价的去偏版本，由交叉项减去两个自传输项的一半构成。正则强度由 tau 控制。论文用它的梯度流来导出漂移场，并让模型做一步前向欧拉更新去逼近梯度流的一步。这样零漂移在温和假设下对应分布精确相等，训练也更稳定。

\[\!\!S_{\tau}(q_{\bm{\theta}},p)=\mathrm{OT}_{\tau}(q_{\bm{\theta}},p)-\frac{1}{2}\mathrm{OT}_{\tau}(q_{\bm{\theta}},q_{\bm{\theta}})-\frac{1}{2}\mathrm{OT}_{\tau}(p,p),\]

实际只能用小批量经验分布来近似 q 与 p。批量大小为 B 时，增强特征与干净特征各形成 B 个 Dirac 测度的平均。二次代价取二分之一平方欧氏距离，用 Sinkhorn 算法迭代求近似最优耦合，再做行归一化。

漂移向量对每个增强样本是两组加权位移之差：一组指向干净样本，权重来自增强与干净之间的耦合；另一组指向其他增强样本，权重来自增强与自身之间的耦合。前者是吸引，后者是排斥。论文对多个 tau 取平均，并迭代固定次数来求耦合。

编码器的选择很关键。DriftSE 用自监督模型的帧级特征，富含音素信息，在成对训练时分辨率高，但对不成对语音做帧级匹配并不合理。论文改用 UrgentMOS 的 utterance 级嵌入，取分数预测头之前的向量，维度为 768。直觉是干净语音在该空间中对应高质量区域，把增强特征往干净特征搬，隐式地提升了质量评估分数，同时又保留干净语音的多样性，而不是简单最大化分数。

**Sinkhorn 散度 × 语音质量评估模型：** Sinkhorn 散度负责在小批量上给出全局平衡的最优传输权重，决定每个增强样本该向哪些干净样本靠拢；语音质量评估模型负责提供计算距离的隐空间，使距离更贴近听感上的自然度。两者组合后，传输不再依赖局部核权重，而是在贴近听感的 utterance 级嵌入上做分布对齐。

### 两路损失如何拼成最终训练目标

漂移损失的具体做法是：把加噪输入送进增强模型，再送进冻结的质量评估编码器得到增强特征，结合小批量内独立采样的干净特征算出 Sinkhorn 漂移向量，让增强特征向停止梯度的目标位置回归。目标位置是当前特征加上漂移向量，损失是两者差的平方范数。额外噪声沿用 NyTT 的采样，而不是高斯噪声。

最终目标是 NyTT+ 重建损失加 lambda 乘漂移损失，论文两组实验都把 lambda 设为 0.5。重建项管样本级忠实，漂移项管分布级匹配。编码器冻结，只有增强模型被更新，教师做滑动平均。

小批量近似的写法如下：批量内增强特征与干净特征各占 B 个点，分别形成经验分布。

\[\hat{q}_{\bm{\theta}}=\frac{1}{B}\sum_{i=1}^{B}\delta_{\hat{\mathbf{z}}^{(i)}},\quad\hat{p}=\frac{1}{B}\sum_{j=1}^{B}\delta_{\mathbf{z}^{(j)}},\]

训练细节按原文交代：模型是约 1.5M 参数的卷积双路径循环网络，输入复数短时傅里叶变换的实部虚部与幅度，预测复数时频掩码；短时傅里叶变换用 510 点离散傅里叶变换、窗移 128；优化器为 AdamW，最多 200 轮，学习率预热后到 1e-3；每段截成 2 s，批量 32；教师衰减按训练步数折算；Sinkhorn 迭代 10 次。

**波形保真 × 分布匹配：** 波形保真由带平均教师的带噪目标重建损失承担，约束增强结果不偏离给定观测的内容；分布匹配由非成对 Sinkhorn 漂移损失承担，只要求增强样本总体像干净语音。论文把两者相加，正是想用前者保内容、用后者提自然度，弥补只用漂移会丢内容、只用带噪目标会留噪声的短板。

### 实验在什么数据和指标下比较

第一组是 VoiceBank-DEMAND 上的受控实验。训练用 28 个说话人子集，噪声来自 DEMAND 第一通道或人工噪声，留两个说话人做验证，音频降到 16 kHz。额外噪声从 DEMAND 与 CHiME-3 中采样，并排除测试环境相关通道以防泄漏。非成对漂移用的干净语音来自 EARS，且去掉非语音声音，保证说话人与文本都对不上；成对漂移则用底层干净语音做对照。

模型基线包括原始带噪、DriftSE、unSE、RemixIt、SelfSE、NyTT+、干净目标训练及其加漂移变体，还有去掉 Sinkhorn 与去掉语音质量评估模型的消融。指标第一次出现时说明方向：SI-SDR 越高表示波形失真越小，宽带 PESQ 越高表示侵入式语音质量越好，DNSMOS P.808 与 UTMOS 越高表示非侵入式听感越好。前两者需要干净参考，后两者不需要。

第二组是 CHiME-3 真机录音的域自适应。训练集去掉仿真句，只用真实录音，固定用第五通道。先在 VoiceBank-DEMAND 上用干净目标预训练，再在真机录音上用 NyTT 变体微调，最多 100 轮，不做预热。因为真机没有干净参考，论文用 Whisper Large v2 算词错误率，用 Torchaudio-Squim 估计 SI-SDR，再加 DNSMOS 与 UTMOS。词错误率越低越好，其余方向同上。额外噪声与非成对干净语音的来源与第一组一致。

### 受控合成集上保真与听感如何变化

在 VoiceBank-DEMAND 上比较的核心问题是：在不丢波形保真的前提下，非成对漂移能否提升听感。公平条件是同一增强主干、同一额外噪声采样与同一重建损失，只看是否加漂移以及漂移的实现方式。指标方向是 SI-SDR、PESQ、DNSMOS、UTMOS 都是越高越好，下表数值为均值及 95% 置信区间，表头与全部方法行按原文保留。

| Method | SI-SDR | PESQ | DNSMOS | UTMOS |
| --- | --- | --- | --- | --- |
| Noisy | 8.44 ± 0.38 | 1.97 ± 0.05 | 3.09 ± 0.03 | 3.11 ± 0.05 |
| DriftSE [15] | 6.60 | 2.00 | 3.61 | - |
| unSE [6] | 15.96 | 2.45 | 2.92 | - |
| RemixIt [5]† | 17.68 | 2.47 | - | - |
| SelfSE [9]† | 18.07 | 2.40 | - | - |
| NyTT+ | 18.58 ± 0.21 | 2.63 ± 0.04 | 3.53 ± 0.02 | 3.81 ± 0.02 |
| NyTT+ w/ UP-Drift | 18.58 ± 0.20 | 2.69 ± 0.04 | 3.59 ± 0.02 | 3.93 ± 0.02 |
| no Sinkhorn | 18.11 ± 0.20 | 2.61 ± 0.04 | 3.54 ± 0.02 | 3.82 ± 0.02 |
| no SQA | 18.55 ± 0.21 | 2.63 ± 0.04 | 3.53 ± 0.02 | 3.83 ± 0.02 |
| CTT | 19.74 ± 0.25 | 2.70 ± 0.04 | 3.53 ± 0.02 | 3.79 ± 0.02 |
| CTT w/ P-Drift | 19.71 ± 0.25 | 2.77 ± 0.04 | 3.55 ± 0.02 | 3.89 ± 0.02 |
| CTT w/ UP-Drift | 19.71 ± 0.25 | 2.76 ± 0.04 | 3.54 ± 0.02 | 3.86 ± 0.02 |

上表完整保留了原文的全部方法行与 4 个指标列，数值写法以原始表格绑定为准。读表时注意干净目标训练行需要成对数据，与弱监督行不在同一监督条件下，只能看趋势，不能当成同条件胜负。带 dagger 的两行引用自 SelfSE 论文的多分辨率损失结果，训练损失与本文不完全一致。本表数值与单位依据论文 PDF。

主要读数是 NyTT+ 与 NyTT+ 加非成对漂移的对比：两者 SI-SDR 持平，PESQ、DNSMOS、UTMOS 都有提升，说明分布牵引没有拖累波形保真。与只用非成对漂移的 DriftSE 相比，组合把 SI-SDR 从很低拉回可用水平，同时 DNSMOS 保持相近，印证了样本级约束对保内容的必要性。在干净目标训练内，加成对或非成对漂移同样主要改善听感类指标，而 SI-SDR 基本不变。未胜出的细节是 SI-SDR 并没有因漂移而继续上涨，听感提升的代价并不是波形误差同步下降。

### 真机录音的域自适应带来什么又没带来什么

在 CHiME-3 真机上要回答的是：从合成集预训练出发，用真机带噪做弱监督微调能否同时改善可懂度估计与听感。比较对象是未微调的跨域干净目标模型、只用 NyTT+ 微调的模型，以及再加非成对漂移的模型。指标方向是词错误率越低越好，估计 SI-SDR、DNSMOS、UTMOS 越高越好，其中估计 SI-SDR 来自 Squim，并非真实干净参考算出的值，下表保留原文全部条件行与指标列。

| Method | WER (%) | SI-SDR* | DNSMOS | UTMOS |
| --- | --- | --- | --- | --- |
| Noisy | 6.7 | 0.87 ± 0.23 | 2.47 ± 0.01 | 1.39 ± 0.01 |
| CTT† | 16.3 | 8.74 ± 0.26 | 3.43 ± 0.02 | 2.54 ± 0.03 |
| NyTT+ | 9.3 | 9.39 ± 0.20 | 3.42 ± 0.02 | 2.60 ± 0.03 |
| NyTT+ w/ UP-Drift | 9.1 | 10.16 ± 0.19 | 3.59 ± 0.01 | 2.82 ± 0.03 |

表中使用 CHiME-3 真机评估集的第五通道，遵循官方划分，并从训练集排除模拟话语。CTT†只在 VoiceBank-DEMAND 上训练，因此是有域错配的起点；其余两行从同一预训练增强器出发，以真实带噪录音微调。训练至多 100 个 epoch，使用 AdamW 且不设学习率预热。额外噪声来自 DEMAND 与 CHiME-3，非配对干净语音来自 EARS，这些条件共同限定了两条微调行的可比范围。本表数值与单位依据论文原表绑定。本表数值与单位依据论文 PDF。

识别器固定为 Whisper Large v2。由于真机录音没有对应干净参考，带星号的 SI-SDR 由 Torchaudio-Squim 估计，不能当成真实参考信号下的失真度量。

跨域干净目标模型的词错误率明显高于原始带噪，说明合成训练与真机不匹配。NyTT+ 微调把词错误率大幅拉低，但 DNSMOS 几乎没有改善。加上非成对漂移后，DNSMOS 与 UTMOS 进一步走高，估计 SI-SDR 也有所上升，词错误率略降。论文报告漂移带来的听感提升在配对 t 检验下显著。

限制同样清楚：即使是最好的微调结果，词错误率仍高于不处理的带噪输入。论文的解释是 Whisper 对自然背景噪声鲁棒，但没见过增强伪影。这提醒读者听感分高不等于识别一定更好，结论只在该识别器与该通道条件下成立，不能推广为所有下游任务都会受益。

### Sinkhorn 与质量评估空间各自起了什么作用

消融要回答的是提升到底来自哪一部分。论文做了两个对照：保留质量评估隐空间但换回原始均值漂移，记为去掉 Sinkhorn；保留 Sinkhorn 但把隐空间换成 DistillHuBERT 各层特征之和，记为去掉语音质量评估模型。两者都接在 NyTT+ 之后，其他训练条件不变。

结果是两者都只比 NyTT+ 略微改善 UTMOS，但明显落后于完整组合。这支持论文的判断：全局平衡的传输权重与贴近听感的 utterance 级空间是互补的，缺一个都不够。特别是用自监督帧级特征做不成对匹配时，最优传输可能找到帧级耦合，但音素内容对不上，牵引方向就不贴合听感。

还有一个隐含对照是干净目标训练加成对与非成对漂移。两者听感都比纯干净目标好，且差距不大，说明即使干净参照与输入不成对，分布牵引依然有效。这为真机场景下只能拿到不成对干净语音提供了依据，但也要注意该结论来自合成集，不能直接当成真机一定同等有效。

### 结论在什么边界内才成立

首先是监督条件的边界。非成对不等于无监督：方法仍需要大量真实带噪录音、额外噪声库和独立干净语音库。如果额外噪声分布与观测噪声差太多，或者干净参照的语言、采样与目标场景差太多，传输权重可能学偏。论文在合成集用 EARS 做错开内容是刻意为之，真机实验也沿用同一来源，但没有系统扫描干净库差异的影响。

其次是指标的边界。合成集的 SI-SDR 与 PESQ 依赖人工合成的干净参考，真机的估计 SI-SDR 来自 Squim 模型，DNSMOS 与 UTMOS 也是模型预测分。它们能反映趋势，但不等于人耳主观 MOS，也不等于所有识别器下的可懂度。CHiME-3 上听感提升伴随以 % 为单位的词错误率仍高于原始含噪输入，就是一个反例。

最后是成本与稳定性的边界。漂移损失要在每个小批量内跑 Sinkhorn 迭代并对多个 tau 平均，还要过一个冻结的大质量评估模型提嵌入，训练开销高于纯 NyTT。论文没有报告推理延迟、训练时长与显存占用，也没有给出 lambda 与 tau 的完整敏感性曲线。复现时应把 0.5 与给定 tau 组合当成起点，而不是最优保证。

### 要复现第一步该准备什么

复现应从数据管线开始，而不是先调模型。准备 VoiceBank-DEMAND 的划分与 16 kHz 重采样，建好 DEMAND 与 CHiME-3 的额外噪声采样器，按与观测的信噪比均匀分布做缩放，并排除测试环境相关通道。非成对干净语音按原文用 EARS 并去掉非语音段，保证与带噪内容错开。

模型用论文描述的卷积双路径循环网络主干与平均教师，编码器用冻结的 UrgentMOS 并取分数头之前的嵌入。损失按重建加 0.5 倍漂移实现，漂移内对多个 tau 平均、Sinkhorn 迭代固定次数。先复现 NyTT+ 基线，再加漂移，分别看 SI-SDR 是否持平、听感分是否上升，避免只盯一个指标。

关于可用性，论文里没有写明代码、模型或数据的公开下载方式，目前还不能确认有可以获取的公开资源。需要补充验证的是人耳听感、其他识别器下的词错误率，以及不同干净库与噪声库下的稳定性。

### 什么时候值得尝试这种组合

当你手里有真实带噪录音却没有配对干净答案，又能拿到一批独立干净语音时，这种组合值得尝试。NyTT 负责让模型忠于每个观测的内容，漂移负责把总体推向干净自然的区域，两者的粒度正好互补。论文在合成集上证明了听感提升不以牺牲波形保真为代价，在真机上证明了跨域微调时听感可进一步改善。

不适合的情况也很明确：如果下游只关心特定识别器的词错误率，或者不能容忍任何增强伪影，就不要只看 DNSMOS 与 UTMOS 下结论。CHiME-3 的结果已经显示听感与识别可能背离。另外，如果没有贴近听感的嵌入空间，只用帧级自监督特征做不成对漂移，论文的消融提示收益会小很多。

一句话回看：用波形回归保内容，用非成对传输提自然度，在质量评估隐空间里算方向，是全文的方法实质。复现时守住内容错开的干净参照、公平的基线与多指标并看，才能判断结论在你的数据上是否依然成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.32870v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
