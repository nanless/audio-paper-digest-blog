---
title: "Does Expert Supervision Improve Text-to-Speech? An Empirical Study of Preference Optimization"
date: 2026-10-20
draft: false
tags: [文本到语音, 偏好优化, 语音, 语音质量评估]
categories: [论文速递]
description: "本文用两个学生模型和两种专家语音比较四种偏好目标与直接或分阶段桥接两种监督路线，发现目标对分数尺度敏感度不同，而固定专家序列的似然升降与生成可懂度变化并不一致，桥接只能缓解部分退化而不能稳定超越初始模型。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.25292"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "专家示范能教会语音合成更好地说话吗"
paper_digest_original_title: "Does Expert Supervision Improve Text-to-Speech? An Empirical Study of Preference Optimization"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.25292v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.25292v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.25292v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-quality","label":"语音质量评估"}]
paper_digest_primary_method: "偏好优化"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文用两个学生模型和两种专家语音比较四种偏好目标与直接或分阶段桥接两种监督路线，发现目标对分数尺度敏感度不同，而固定专家序列的似然升降与生成可懂度变化并不一致，桥接只能缓解部分退化而不能稳定超越初始模型。"
paper_digest_authors: [{"affiliations":["Department of Statistics & Data Science, National University of Singapore, Singapore"],"name":"Minh Duc Vu"},{"affiliations":["School of Computing, National University of Singapore, Singapore"],"name":"Junchuan Zhao"},{"affiliations":["School of Computing, National University of Singapore, Singapore"],"name":"Ye Wang"}]
paper_digest_abstract_sha256: "a2b8cac39e6e9ebf54d293ca1399bfa78dc9ad6ae418629ed2b3b2c8b0a12529"
paper_digest_sidecars: {"citation.bib":{"sha256":"7cbdde4c42dfa1cc7d62f975f7a2b6e8000e559697fa2b57d8ea91bbf76f2582","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25292/citation.bib"},"citation.json":{"sha256":"e8f899dbc2b8dc7b021edbba990e4e52b1b660dfec44fe39c77e2d2335f6e738","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25292/citation.json"},"citation.ris":{"sha256":"b1b6d21b089b48b93ed2521ee3ab70c8903a49e29913ef8634b17627c66dfb87","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25292/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"6647422c1d2c535d1596d0456c7d32c95684c26d77e5c44a65ebf068e03a695a","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25292/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b8aca771705c1fbb9f06356245de388f44dbb05d5cc555985ffeed128eae3c33"
paper_digest_api_reader_plan_sha256: "6626d75873bed2f7cde5b17dca9768d85f88787571e908642362725481220624"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7a09e5b8101912a77b8383a870f72b3c73e8776b694613f1df27532eb87e9196"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "9035a9baecd707e0085a7fb331eb845eef5adcd50df9d56a3ec0836d700206b1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9c3cf7cf92936681f406db6f61cfa3d0eb9f533328d67e63e42f5f99133d4692"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "57738be352c76d6d625b4629141d151371d5e58a89f6e227d3560e7255537e8c"
paper_digest_api_reader_resource_count: 6
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 专家示范能教会语音合成更好地说话吗

> 英文题目：*[Does Expert Supervision Improve Text-to-Speech? An Empirical Study of Preference Optimization](https://arxiv.org/abs/2610.25292v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[语音质量评估](/audio-paper-digest-blog/papers/?concept=task.speech-quality)
- **研究方法**：[偏好优化](/audio-paper-digest-blog/papers/?concept=method.preference-optimization)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Minh Duc Vu：Department of Statistics & Data Science, National University of Singapore, Singapore
- Junchuan Zhao：School of Computing, National University of Singapore, Singapore
- Ye Wang：School of Computing, National University of Singapore, Singapore

## 📌 核心摘要

文本到语音（Text-to-Speech，TTS）在这里指给定文本与说话人提示，生成对应语音。偏好优化（Preference Optimization）指用选定回答与拒绝回答的成对比较来调整生成模型。困难在于外部专家语音听起来更好，把它当作选定目标去拟合，能否让学生自己生成更好的语音并不确定，中间还要经过学生的语音 token 表示与不同损失函数的变换。论文用 CosyVoice-1 与 GPT-SoVITS v4 作学生，用 LibriTTS 真实录音与 Qwen3-TTS 合成语音作专家，对比直接偏好优化（Direct Preference Optimization，DPO）、加权偏好优化（Weighted Preference Optimization，WPO）、锚定偏好优化零变体（Anchored Preference Optimization zero variant，APO-zero）与噪声对比对齐（Noise Contrastive Alignment，NCA），再对比直接用完整专家目标训练与先用专家前缀加学生续写、再转入完整专家目标的桥接路线。固定探针诊断跟踪相同专家序列与初始学生序列的似然变化，生成侧用词错率、说话人相似度与 NISQA 预测质量评价。CosyVoice 加真实录音监督时，\(\beta=0.01\) 下 DPO 在 LibriTTS 测试集词错率达到 29.78%，相对 \(\beta=0.1\) 时 4.59% 明显恶化，而 APO-zero 保持在 3.73% 到 3.77% 附近。论文的适用范围限于两个英语朗读学生与两种专家来源，桥接训练只能缓解部分恶化而不能稳定超越预训练基线。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/FunAudioLLM/CosyVoice-300M> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/lj1995/GPT-SoVITS> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/FunAudioLLM/CV3-Eval> → <https://github.com/QwenAudio/CV3-Eval> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/openai/whisper-large-v3> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/modelscope/3D-Speaker> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音合成要完成什么任务

这篇论文研究的文本转语音任务，输入是文字内容加上一个说话人提示音频，目标是合成出内容正确、音色接近提示人的新语音。所用的学生模型是基于语言模型的合成器，先把语音变成离散的语音词元序列，再自回归地一个词元一个词元预测下去，最后由固定不变的声码器等部件转成波形。评价时要同时看三件事：文字有没有读错，音色像不像，整体听感质量如何，任何单一分数都不能代表全部。

初学者容易把专家录音好等同于训练一定有效，但本文要区分三层：专家录音本身的质量，经过学生词元表示重构后实际用于训练的目标质量，以及训练后学生重新生成的语音质量。重构会改变声音细节，偏好训练也只改变词元预测分布，因此必须分别测量。

### 已有的偏好学习路线有何不同

语言模型领域的直接偏好优化避免单独训练奖励模型，直接用被选与被拒 1 对回答学习偏好。语音领域常见做法是在学生自己生成的多个候选中，用识别错误率或说话人相似度排序选出好坏对。另一条路线是本文关注的专家引导偏好优化，直接把外部真实录音或更强合成器的输出作为被选回答，与学生自己的生成配对。

原文回顾指出，真实录音作被选回答在一些语音研究中收益有限，排序后的模型生成对反而更好，非言语发声合成中也有类似现象。这说明示范质量不等于训练价值。另外，偏好间隔变大时被选似然可能下降，而似然下降未必意味着生成变差。因此需要把目标拟合和生成质量分开跟踪，这正是本文 3 个研究问题的来源。

### 论文要回答的三个具体问题

论文把问题拆成三问。第一，偏好分数尺度 β 不同时，4 种目标的生成质量是否同样稳定。第二，固定专家探针和初始学生探针的似然如何变化，这些变化与生成好坏是什么关系。第三，直接用完整专家目标与先桥接后专家的分阶段路线相比，差异是否随目标、专家来源和学生模型而变化。

为了让读者直观理解这三问，论文用示意图把参数漂移、似然升降和监督路线画成 3 个面板，下面的导读先帮你明确每个面板要观察什么。

> **看图路径：** 1. 先看 H1 面板中从 Base 出发的两条参数空间箭头，区分漂移与稳定；2. 再看 H2 面板中被选与被拒两组分布训练前后高低变化是否同向；3. 最后看 H3 面板中直接虚线与经过专家前缀加学生续写的桥接实线路径

[![原论文 Figure 1：Motivating questions for expert-guided preference optimization.](https://arxiv.org/html/2610.25292v1/motivation.png)](https://arxiv.org/html/2610.25292v1/motivation.png)

*论文图 1。原论文 Figure 1:：“Motivating questions for expert-guided preference optimization. Schematic panels H1–H3 correspond to RQ1–RQ3: objective sensitivity, likelihood responses, and supervision routes.”。*

上图上方 H1 面板问 β 变化会把参数带向稳定区还是漂移区，中间 H2 面板问被选专家目标和被拒基线样本的似然分布在训练前后如何移动，下方 H3 面板问从初始学生出发是直接跳向专家监督，还是先经过专家前缀加学生续写的桥接再走向专家监督。3 个面板分别对应敏感度、似然响应和路线比较，但都只是提问示意，具体结论要看后面的数字实验。

### 整体实验流程是怎样的

每个训练样本的条件包含文本和说话人提示，专家语音先被编码成该学生自己的语音词元，得到专家原生词元序列。学生策略在冻结状态下为同一条件采样出自己的生成，作为被拒回答。直接路线用完整专家序列作被选回答，桥接路线先用部分专家前缀加学生续写作为被选回答训练一轮，再用完整专家加新采样的学生负样本训练第二轮。两条路线起点相同，总训练量同为两轮，比较的是完整协议的效果。

在真正训练之前，论文先在固定探针上测量似然变化，训练之后再合成新语音测量词错误率等生成指标。探针序列在各检查点之间保持不变，因此即使训练用的目标变化，拟合程度的变化仍然可比。下面的示意图展示了支撑评估、桥接构造和加权优化三部分如何衔接，读图时先分清三栏各自的输入输出。

> **看图路径：** 1. 先看(a) 中支撑不足与支撑充足两组分布重叠程度的差别；2. 再看(b) 中专家前缀复制与自回归策略续写的拼接位置；3. 最后看(c) 中桥接更新与完整专家更新两条分支的权重与输出策略

[![原论文 Figure 2：Bridge construction and support-weighted training (schematic).](https://arxiv.org/html/2610.25292v1/MITM_overview.png)](https://arxiv.org/html/2610.25292v1/MITM_overview.png)

*论文图 2。原论文 Figure 2:：“Bridge construction and support-weighted training (schematic). Token symbols z correspond to y in the text; experiments use a discrete ratio grid and two fixed training phases.”。*

该图左侧根据当前策略与专家分布的重叠程度决定专家保留比例，中间把保留的专家前缀复制下来并让自回归策略接着续写，拼接成桥接目标，右侧对每个样本按支撑分数加权后计算偏好损失。图中 z 即正文中的 y，虚线表示更新前策略。需要注意，实际训练只用两个固定阶段和离散比例网格，示意中的连续比例只是原理说明。

### 专家语音如何变成训练目标

专家语音不能直接用于训练，必须经过学生的语音表示重构。论文发现这一步会侵蚀真实录音的可懂度优势：原始真实录音语料级词错误率较低，但重构后接近学生基线，而合成专家 Qwen3-TTS 在重构后仍保留优势。不同指标排序也不一致，原始真实录音词错误率更低，但预测质量反而不如学生生成。这说明来源好不等于学生实际收到的监督好。

**偏好优化 × 被选回答 × 被拒回答：** 偏好优化指让模型更偏向被选回答而非被拒回答的训练方式，被选回答是本研究中专家或桥接目标序列，被拒回答是学生自己生成的序列，三者搭配构成每一次比较学习的基本单元。

训练时还要处理策略支撑问题。如果专家目标在当前策略下概率太低，学习会很困难。论文用长度归一化负对数似然衡量每个目标的难易，再算桥接目标相对纯学生生成的差距，转换成零到一之间的支撑分数。该分数只反映相对似然高低，不表示听感好坏，也不表示分布距离。

### 桥接目标如何拼接出来

桥接构造的关键是专家前缀比例 r，表示保留多少比例的专家词元，而不是保留多长时长的音频。具体做法是取专家序列前 k 个词元原样复制，再以文本、说话人提示和这段前缀为条件，让当前冻结学生自回归生成后续词元，两段拼接得到桥接序列。当 r 为零时退化为纯学生生成，当 r 为一时退化为完整专家序列。

\[\mathbf{y}^{\mathrm{B}}_{t,i}(r)=\mathbf{y}^{\mathrm{E}}_{i,1:k_{i}(r)}\oplus\widetilde{\mathbf{y}}_{t,i}(r),\]

上式中左边是比例为 r 的桥接序列，右边第一项是专家前缀，第二项是条件生成的续写，拼接符号表示首尾相连。实际训练比例按学生与专家组合分别固定，例如 CosyVoice 配真实录音用 0.6，配 Qwen 合成用 0.8，GPT-SoVITS 配真实录音用 0.4，配 Qwen 合成用 0.8。选择规则曾用中位数支撑分数不低于 0.5 的启发式阈值，但最终训练比例与规则选出的比例并不完全相同。

**直接监督 × 桥接目标 × 专家前缀比例：** 直接监督把完整专家序列作为被选回答，桥接目标把前段专家前缀与后段学生续写拼接起来，专家前缀比例控制保留多少专家词元，用分阶段过渡来缓解完整专家目标与当前策略差距过大的问题。

### 四种偏好目标各优化什么

4 种目标共享一套符号：被选与被拒序列的参考相对分数 u 由 β 乘以当前策略与冻结参考策略的对数似然比得到，β 控制分数尺度。所有目标都对语音词元和结束符的求和对数概率操作，不含条件位置和填充。

\[u_{\theta}(x,\mathbf{y})=\beta\log\frac{\pi_{\theta}(\mathbf{y}\mid x)}{\pi_{\mathrm{ref}}(\mathbf{y}\mid x)},\]

上式说明每个序列先算在当前策略与参考策略下的对数概率差，再乘以 β 得到分数。β 相同不代表不同损失的更新强度相同，这只是横向比较的条件。

\[\mathcal{L}_{\mathrm{DPO}}=-\log\sigma(u^{+}-u^{-}).\]

直接偏好优化只看被选减被拒的分数差，增大间隔可以通过提高被选、降低被拒或两者同降但被拒降得更多来实现，因此不要求被选似然必须上升。加权偏好优化在此外对每个样本对乘一个与当前策略有关的非负权重并截断梯度，想让更符合当前策略的样本占更大比重，但仍是相对间隔目标。

\[\mathcal{L}_{\mathrm{APO\text{-}zero}}=1-\sigma(u^{+})+\sigma(u^{-}).\]

上式的零变体对两项分别作用，鼓励被选分数上升、被拒分数下降，零点代表与参考策略持平。

\[\begin{split}\mathcal{L}_{\mathrm{NCA}}={}&-\log\sigma(u^{+})\\ &-\frac{1}{2}\log\sigma(-u^{+})-\frac{1}{2}\log\sigma(-u^{-}).\end{split}\]

噪声对比对齐也学习各自的分数，但被选噪声项会制衡被选分数的无限制增长，其被选分数存在有限最优点。本文还对所有目标统一使用按支撑分数计算的抛物线样本加权，权重在中间最大、两端为零，但消融显示该加权并未带来明显收益。

**DPO × WPO × APO-zero：** DPO 只优化被选与被拒相对分数差，WPO 在 DPO 基础上按当前策略兼容程度给不同样本对加权，APO-zero 则分别要求被选分数上升和被拒分数下降，三者对被选似然是否必须上升的要求不同。

### 如何度量拟合与偏离

为分离拟合与训练目标变化，论文固定两组探针：完整专家序列和初始学生生成序列。对每个检查点计算相对初始学生的平均词元对数似然变化，正值表示同一序列变得更可能，记为专家变化与基线变化。该量比较的是两个策略对同一目标的打分，与比较同一策略对两个目标的支撑差距不同。

条件 KL 则在固定专家上下文和初始学生上下文上，比较新检查点与原始预训练基线的下一词元分布距离，以纳特每词元为单位。它描述的是条件分布漂移，不是序列级策略 KL，KL 大也不直接等于生成差。

**固定探针似然变化 × 生成指标 × 条件 KL：** 固定探针似然变化指同一组专家序列和初始学生序列在训练前后平均对数似然的变化，生成指标指实际合成语音测得的可懂度和相似度，条件 KL 指在固定上下文上新旧模型下一词分布的距离，三者分别描述拟合、效果和漂移，不可互相替代。

这些诊断只能描述优化改变了什么，不能证明生成变好或变差，也不能建立因果。论文反复强调，似然升降与可懂度升降可能反向，判断训练收益必须回到生成语音本身，并同时与直接训练和训练前基线比较。

### 模型数据与评价条件是什么

学生为 CosyVoice-1 300M 和 GPT-SoVITS v4，专家为 LibriTTS 真实录音和 Qwen3-TTS 1.7B 合成语音。专家语音编码进各自学生的原生表示，训练用 train-clean-100，比例评估用 dev-clean，生成评价用 LibriTTS test-clean 和英文 SEED TTS Eval 中固定 4 到 10 秒的子集。桥接数据集每种配置保留约 35000 条、总时长约 57 小时，前缀与续写时长按比例划分。

训练只微调自回归语音词元生成部分，其余语音处理和波形生成部件冻结。优化器为 Adam，学习率百万分之一，批量为 2，无权重衰减和预热，梯度裁剪范数为 5。直接训练两轮，桥接每阶段一轮，第二阶段从第一阶段参数出发但重置优化器，参考策略始终为原始预训练学生的冻结拷贝。β 消融只在 CosyVoice 配真实语音下比较 0.1 和 0.01，其余路线比较固定为 0.1。

**词错误率 × 说话人相似度 × NISQA 预测质量：** 词错误率衡量合成语音被识别后的文字错误多少，越低可懂度越好，说话人相似度衡量合成音色与参考音色的余弦相似程度，NISQA 预测质量是不需要参考录音的质量预测分，三者方向不同且可能出现权衡。

评价用 Whisper-large-v3 转写算宏平均词错误率，用 ERes2Net 说话人嵌入算余弦相似度，用 NISQA 预测整体质量。目标刻画另用语料级词错误率和字符错误率，两种聚合方式不可直接互换。结果多为点估计，小差异需谨慎解读，配对比较用 1000 条共享语句的说话人自助法给出 95% 区间，该区间只反映评测抽样不确定性，不反映训练随机种子差异。

### 分数尺度变化时谁更敏感

在 CosyVoice 配真实语音的直接训练下，把 β 从 0.1 降到 0.01，DPO 和 WPO 的生成质量大幅恶化，而 APO-zero 和 NCA 变化很小。下表把两档 β 的词错误率放在一起，比较问题是同一专家监督固定时目标对尺度的敏感度是否相同。

比较对象是 4 个目标在两种 β 下的可懂度，条件为 CosyVoice 学生、真实录音专家、直接路线，指标为两个评测集上的宏平均词错误率，数值越低越好。

| 条件 | LibriTTS 词错误率 | SEED 词错误率 |
| --- | --- | --- |
| DPO β=0.1 | 4.59% | 6.33% |
| DPO β=0.01 | 29.78% | 63.02% |
| WPO β=0.1 | 4.81% | 6.58% |
| WPO β=0.01 | 25.57% | 49.08% |

DPO 与 WPO 在 β 变小时两个评测集错误率都上升一个数量级，还伴随相似度和预测质量下降，而 APO-zero 与 NCA 仍保持在基线附近。这支持目标间存在明显局部敏感度差异，但证据只覆盖这一个学生专家组合和两个 β 取值，不能推广为稳定性范围或最优 β，也不能说相同 β 下更新强度可比。

### 似然升降能否代表生成好坏

同样在上述设置下 β 为 0.1 时，DPO 与 WPO 在专家探针上的平均词元对数似然分别下降 0.348 和 0.295，而 APO-zero 与 NCA 分别上升 0.083 和 0.033。更细的分布显示，DPO 与 WPO 下没有专家探针获得似然提升，而 APO-zero 与 NCA 下分别有 99.8% 和 96.0% 的专家探针提升。但 4 个目标都对几乎全部初始学生探针降似然，因此初始学生压制本身既出现在变好的情况也出现在变差的情况。

下面的分布图把这种分化画出来，读图时注意均值箭头方向与标题错误率的对应关系。

> **看图路径：** 1. 先对比 CosyVoice 与 GPT-SoVITS 两大行中训练后分布相对基线的左右移动；2. 再对比左侧专家探针与右侧初始学生探针的均值变化幅度；3. 最后把每格标注的均值变化与标题中的宏平均词错误率放在一起看

[![原论文 Figure 4：DPO log-probability distributions under real-speech supervision.](https://arxiv.org/html/2610.25292v1/dpo_stacked.svg)](https://arxiv.org/html/2610.25292v1/dpo_stacked.svg)

*论文图 4。原论文 Figure 4:：“DPO log-probability distributions under real-speech supervision.”。*

图中灰色为训练前基线，彩色为训练后，上排为直接训练，下排为桥接，左列为专家探针，右列为初始学生探针。可见 CosyVoice 下 DPO 直接训练两列均左移，桥接左移幅度减小，GPT-SoVITS 下 DPO 直接训练专家列大幅左移而桥接转为小幅右移，但后者的词错误率只是回到基线水平而非超越基线。这说明专家拟合的符号和幅度都不能单独作为挑选路线的通用标准，初始学生压制的幅度和比例也不能区分好坏。

### 桥接在真实录音监督下起什么作用

把 β 固定为 0.1 后比较直接与桥接，真实录音监督下桥接减轻了 DPO 与 WPO 的可懂度恶化，但多为缓解而非超越基线。下表聚焦 CosyVoice 在真实录音下的直接与桥接对比，公平条件是同学生、同专家、同 β 与同总轮数。

比较问题是桥接相对直接是否改善可懂度，以及是否超越训练前基线，指标为 LibriTTS 宏平均词错误率，越低越好，同时附带专家探针似然变化方向。

| 方法 | 直接 WER | 桥接 WER | 基线 WER |
| --- | --- | --- | --- |
| CosyVoice DPO | 4.59% | 4.26% | 3.87% |
| CosyVoice WPO | 4.81% | 4.18% | 3.87% |

CosyVoice 两者的桥接错误率低于直接但仍高于基线，专家探针似然损失也有所减小。跨评测集看，GPT-SoVITS 的 WPO 在 SEED 集上反而变差，APO-zero 与 NCA 也没有一致的额外收益。因此应把从直接恶化中恢复与超越初始模型区分开，路线优劣随目标、学生和评测集而变。

### 换成合成专家后结论还成立吗

用 Qwen3-TTS 合成作专家时，CosyVoice 的直接 DPO 即使降低专家探针似然也能改善可懂度，而桥接减小了似然损失却让可懂度变差。下表把该组合的直接与桥接放在一起，条件为 CosyVoice、合成专家、β 为 0.1。

比较问题是在合成专家下似然拟合方向是否与可懂度排序一致，指标包括两个评测集词错误率和专家探针似然变化，词错误率越低越好。

| 方法 | LibriTTS WER | SEED WER | 专家似然变化 |
| --- | --- | --- | --- |
| 基线 | 3.87% | 4.27% | 0 |
| DPO 直接 | 3.27% | 2.60% | -0.318 |

直接训练专家似然下降更多但词错误率更低，桥接似然下降更少但词错误率更高，因此无论相对基线的符号还是相对直接的改善程度都不能排序生成效果。GPT-SoVITS 配同一合成专家时模式又不同，桥接在 LibriTTS 上降低 DPO、WPO 和 NCA 错误率但轻微升高 APO-zero，在 SEED 上变化也是混合的。这进一步说明没有一条路线能稳定占优，生成收益必须分评测集看。

### 第二阶段在哪里丢失了第一阶段收益

对 CosyVoice 配合成专家的桥接做检查点分析，第一阶段已把宏平均词错误率从基线 3.91% 降到 3.19% 至 3.48%，但第二阶段用完整专家目标后 DPO 升到 4.23%、WPO 升到 4.33%，高于基线和直接训练，APO-zero 与 NCA 则基本稳定。第二阶段 DPO 与 WPO 大幅压制新采样的被拒回答，但被选平均似然几乎不变，均值微升掩盖了约 40% 到 50% 样本上升、其余下降的混合方向。

下面的森林图报告配对词错误率差异与说话人自助区间，读图时先看区间是否跨过零点。

> **看图路径：** 1. 先看横轴零点左侧表示第二阶段更好、右侧表示第二阶段更差；2. 再看(a)(b)(c) 三列分别以直接训练、初始模型和第一阶段为比较对象；3. 最后看 DPO 与 WPO 的区间是否明显偏右，而 APO-zero 与 NCA 是否跨过零点

[![原论文 Figure 5：Paired macro-WER differences (Phase 2 minus comparator, in percentage points) with 95%…](https://arxiv.org/html/2610.25292v1/main_wer_paired_forest.svg)](https://arxiv.org/html/2610.25292v1/main_wer_paired_forest.svg)

*论文图 5。原论文 Figure 5:：“Paired macro-WER differences (Phase 2 minus comparator, in percentage points) with 95% speaker-bootstrap confidence intervals. Negative values favor Phase 2.”。*

图中可见 DPO 与 WPO 第二阶段相对第一阶段分别增加 1.04 个百分点和 1.01 个百分点，区间均不含零，且差于直接训练，相对基线 WPO 区间不含零而 DPO 区间包含零。APO-zero 与 NCA 相对基线更低，但区间既不能确立第二阶段收益也不能确立阶段等价。条件 KL 测量显示直接 DPO 与 WPO 到基线的距离反而大于最终桥接检查点却词错误率更低，因此 KL 大小也不能稳定排序生成质量。论文明确指出阶段切换同时改变被选目标、刷新被拒样本并重置优化器状态，无法孤立出退化原因。

补充一组 GPT-SoVITS 在真实录音下的对照，条件同样为 β 为 0.1，直接与桥接比较 LibriTTS 可懂度，越低越好。

| 方法 | 直接 WER | 桥接 WER | 基线 WER |
| --- | --- | --- | --- |
| GPT-SoVITS DPO | 18.12% | 9.50% | 9.50% |
| GPT-SoVITS WPO | 13.03% | 9.49% | 9.50% |

该表显示桥接把大幅恶化拉回到基线附近，其中 DPO 专家探针变化由负转正 0.102 却没有带来优于基线的可懂度，在 SEED 集上桥接为 4.87%，高于基线的 4.27%。这再次说明缓解退化不等于超越起点，似然回升也不保证生成更好。

### 这些结论在什么边界内才成立

研究只覆盖两个学生模型、两种专家来源和英文语句，更广的语言和时长覆盖留待未来工作。生成结果多为任务内比较的点估计，小差异应谨慎解读，区间只量化评测抽样不确定性。路线比较只用固定的 2 阶段桥接协议，更多阶段和自适应调度尚未探索。

另一个边界是聚合与指标：目标刻画用语料级错误率，生成评价用语句级宏平均，两者不可直接互换。可懂度、相似度和预测质量可能指向不同最优配置，单说变好会掩盖权衡。固定探针诊断描述目标拟合，生成指标确立观察到的收益，两者关系随学生、专家、路线和评测集变化，任何单一生成指标也不能完整排序所有配置。

### 复现第一步要准备什么

复现应先核对论文使用的第三方基座、工具和数据划分：学生基座为第三方模型 CosyVoice-1 300M 和 GPT-SoVITS v4，合成专家使用第三方模型 Qwen3-TTS-12 Hz-1.7B-Base，评价转写使用第三方工具 Whisper-large-v3，说话人嵌入使用第三方工具 ERes2Net，内容与相似度评价遵循第三方工具 CV3-Eval。这里列明的是本文使用的第三方模型和工具，不表示本文作者已发布本研究的模型权重。训练只微调自回归语音词元部分，其余部件冻结，β 先取 0.1，学习率、批量与裁剪按原文设置，直接两轮、桥接每阶段一轮并注意第二阶段重置优化器而参考策略保持为原始基线冻结拷贝。

需要补做的验证包括报告训练种子差异、给出更多 β 取值和更多阶段的桥接曲线，并同时报告词错误率、相似度和预测质量，避免只用可懂度下结论。论文未提供作者资源可用性声明，所列链接多为第三方模型与工具，只能证明论文提到这些链接，不能当作作者已开源本研究代码。代码开源、权重可下载与系统可运行是三件不同的事，复现时要分别确认。

### 什么时候值得尝试专家监督

当学生自身生成存在明显错误而外部有高质量示范，且示范经学生词元重构后仍保留优势时，可以尝试把专家作为被选回答的偏好训练。但要同时做好三件事：先测重构后目标质量而非只看来源质量，再选对尺度不敏感或在目标尺度下验证过的目标，最后用生成语音与初始模型和直接训练双重比较。

如果直接训练已出现可懂度恶化，桥接可能减轻退化，尤其在真实录音监督下对 DPO 与 WPO 有缓解作用，但不应期待稳定超越基线。如果用合成专家且直接训练已改善可懂度，加入第二阶段完整专家训练反而可能丢失收益，此时应保留第一阶段检查点并检查跨评测集一致性。似然诊断适合解释优化改变了什么，不适合作为训练成功的证书，条件 KL 同样不能用来排序生成质量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.25292v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
