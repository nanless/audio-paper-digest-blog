---
title: "Forget who you Forgot: Speaker Unlearning to Prevent Re-Identification in Zero-Shot Text-to-Speech"
date: 2026-09-24
draft: false
tags: [文本到语音, 强化学习, 隐私保护, 说话人识别, 零样本]
categories: [论文速递]
description: "针对零样本语音合成中退出说话人仍可被画廊检索重新识别的问题，GUARD 在冻结主干上用门控加逐层激活 steering 并以生成后奖励把遗忘相似度推向人群冒名者水平，在 CosyVoice2 上把遗忘相似度从 0.541 降到 0.103、150 人画廊重识别从 73.5% 降到 0.5%，代价是保留集与可懂度基本不变但新增门控与奖励调参依赖。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.27399"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "不是越不像越好：把遗忘相似度锚定到陌生人水平的说话人遗忘"
paper_digest_original_title: "Forget who you Forgot: Speaker Unlearning to Prevent Re-Identification in Zero-Shot Text-to-Speech"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.27399v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.27399v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.27399v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"research_focus","id":"research_focus.privacy","label":"隐私保护"},{"facet":"task","id":"task.speaker-identification","label":"说话人识别"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对零样本语音合成中退出说话人仍可被画廊检索重新识别的问题，GUARD 在冻结主干上用门控加逐层激活 steering 并以生成后奖励把遗忘相似度推向人群冒名者水平，在 CosyVoice2 上把遗忘相似度从 0.541 降到 0.103、150 人画廊重识别从 73.5% 降到 0.5%，代价是保留集与可懂度基本不变但新增门控与奖励调参依赖。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hyoeun Kim"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yujun Lee"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kyuhong Shim"}]
paper_digest_abstract_sha256: "0be53bc9e247fd02df61c020fc972bd16be0b1875a2b5941d4daec7d77e873b3"
paper_digest_sidecars: {"citation.bib":{"sha256":"cc294e7d79646f16547059a8ca1d6de931370fa43f421c4d2abc1592c925d37d","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-27399/citation.bib"},"citation.json":{"sha256":"fd01f018a36d58a1a3fa1bccf96907f11a25b68a6612c5f2b9aec11d643a0c96","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-27399/citation.json"},"citation.ris":{"sha256":"94a2687d3d1c6aa2068515b010c48c40d9540a85662b258e729118a667422a78","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-27399/citation.ris"},"rethink-context.json":{"sha256":"34f00ec616941288dfb9788500a0a2edce405804b919f67bb47ccc71d86735e8","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-27399/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d3dbcf43e7f273c85dc7ffed3ea4f656d046e6a9ab427b469a9df4d0fd0ebe4d"
paper_digest_api_reader_plan_sha256: "999cbb540f582976d6719f263b065cc14c8049687dd919cf7293d0ff9f73ad60"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c45ef4612608155cb387d337f2d5c35ab1bc0f6101db0af547e26af0e4813013"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "9508d4e17d48a3c6bbe13251d2f2e06080b118b69875ad819be0de60404ba93c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "afb25f9fee1e4d71c7321bd0e73f2aa16a0ded2e5f33504da8c205614998ecc4"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1a46a772f2be197a241379fe99c4a21ad1e192fd525ca687a4ffb0e5fa39e4d6"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 不是越不像越好：把遗忘相似度锚定到陌生人水平的说话人遗忘

> 英文题目：*[Forget who you Forgot: Speaker Unlearning to Prevent Re-Identification in Zero-Shot Text-to-Speech](https://arxiv.org/abs/2609.27399v1)*

> 标签：#文本到语音 | #强化学习 | #隐私保护 | #说话人识别 | #零样本
>
> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.4/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Hyoeun Kim：机构信息未在 arXiv HTML 中可靠披露
- Yujun Lee：机构信息未在 arXiv HTML 中可靠披露
- Kyuhong Shim：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

零样本文本到语音以3秒参考语音为输入合成同说话人文本语音，要求在屏蔽遗忘说话人可识别性时不损伤可懂度、自然度与保留说话人复现，难点在于相似度降低仍可能保留可检索身份且强干预易破坏语音质量。该方法先由门控网络从说话人嵌入预测转向系数以决定是否干预，其输出进入共享层级转向向量注入步骤，将加权向量叠加到冻结流解码器残差上实现统一身份偏移，转向后的合成语音再进入组相对奖励优化步骤，以人群冒名均值为目标联合约束转写与质量来更新转向向量。与微调全解码器和推理时强转向相比，该机制冻结主干并分离选择与干预，以人群分布为显式目标因而兼顾遗忘彻底性与保留集稳定性。在LibriTTS clean-460评测设置下，GUARD的SIM为0.103，低于CosyVoice2的SIM 0.541，且画廊重识别同步大幅下降而保留集指标基本不变。其适用边界限于封闭画廊与特定验证器和声码器组合，开放集检索与强自适应攻击等外推尚未验证。新增遗忘者的训练成本仅为更新24.8K参数门控约9.9分钟，硬件为单卡V100-16GB，远低于全解码器微调的计算量与存储开销。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要保留什么？

本文输入是论文原文与官方原图像素，目标是让刚进入语音合成与说话人隐私方向的研究生能核对并复述方法。必须保留的信息包括任务定义、干预位置、门控规则、奖励构成、实验划分与主数字，不做营销式判断。输出按学习依赖组织，先讲零样本语音合成如何从几秒参考语音复现未见说话人，再讲为何已有遗忘方法只看相似度不够。

零样本文字转语音，英文为 zero-shot text-to-speech，后文简称零样本合成，指给定一段参考录音与目标文本，模型生成内容为目标文本但音色接近参考说话人的语音。说话人遗忘，英文为 speaker unlearning，指在系统部署后对选择退出的说话人压制其音色复现，同时保持其他保留说话人的复现能力。解读中所有教学例子都会明确标为例子，不引入原文之外的数值。

论文设定的运行条件是提供商控制的部署，用户只能通过标准合成接口访问，不能直接改模型内部，这决定了遗忘必须做在服务端模型侧，而不是给用户音频加扰动。理解这一点后，才能理解为何作者选择冻结主干加轻量门控与激活 steering，而不是重新训练整个合成器。

### 已有路线在同输入同目标下做了什么？

已有路线可按同输入、同目标、同运行阶段对照。第一条是微调流解码器，代表为 TGU 与 SGU。它们对遗忘说话人使用替代语音目标进行优化，同时尽量保持保留说话人能力。原文报告它们需要微调全部流解码器，并在 150 人画廊下仍留下超过一半的重识别率，说明改变权重不一定消除检索层面的身份残留。第二条是推理时激活 steering，代表为 TruS。

它沿身份相关方向在推理时压制内部激活，不需要额外训练。原文报告增大 steering 强度可以降低遗忘相似度，但过强会严重损害自然度与可懂度，过弱则留下大量重识别，呈现明显的权衡。第三条是连续遗忘，处理按顺序到来的退出请求，本文未将其作为主基线展开比较。

另有语音匿名化与反克隆扰动两条相邻路线，前者变换单条语音的身份但保留内容，后者给音频加对抗扰动防克隆，它们保护的是单样本而非已部署模型对指定说话人的整体复现能力，因此不在同目标下直接比较。本文的差异是明确以人群冒名者相似度为目标，并把画廊重识别作为补充评价，而不是只报告相似度均值。

### 为什么相似度下降还不够，要看画廊重识别？

先沿一个样本走完问题。假设说话人 A 要求忘记我的声音，系统拿到 A 的 3 秒提示音与另一句同说话人的目标文本，需要生成新语音。评价时把生成语音与画廊中多个说话人的注册原型逐一比相似度，若与 A 自身原型最相似则记为 Top-1 重识别成功。白话说，相似度是与本人有多像，重识别是在人群中还能不能把本人找出来。论文的动机是，即使遗忘后与本人相似度从 0.60 降到 0.40，若陌生人只有 0.08 到 0.13，0.40 仍是最高分，检索依然命中本人。只有把遗忘后相似度压到陌生人水平附近，例如 0.10，才能让排序淹没在人群中。

下图把上述对比画成左右两路，左侧是已有遗忘仍高于陌生人水平，右侧是本文方法回到陌生人水平，阅读时注意条块颜色与数值对应关系。

> **看图路径：** 1. 先看顶部说话人 A 的退出请求与参考语音如何同时送往左右两条模型；2. 再对比左侧遗忘后仍为 0.4 与右侧降到 0.1 的红色与蓝色条块；3. 最后看底部红色仍为 Top-1 匹配与绿色不再是 Top-1 的结论行

[![原论文 Figure 1：Motivation for re-identification-aware speaker unlearning: GUARD shifts forget-speaker similarity…](https://arxiv.org/html/2609.27399v1/figures/fig1.png)](https://arxiv.org/html/2609.27399v1/figures/fig1.png)

*论文图 1。原论文 Figure 1:：“Motivation for re-identification-aware speaker unlearning: GUARD shifts forget-speaker similarity toward population-level impostor similarity.”。*

该图左侧显示遗忘后与说话人 A 自身的相似度仍为红色高值，而与 B、C、D 陌生人的相似度为蓝色低值，底部标注仍为 Top-1 匹配，重识别持续存在。右侧显示遗忘后与 A 自身的相似度降到与陌生人同量级的蓝色区间，底部标注不再是 Top-1 匹配，重识别被阻止。中间黑色箭头强调从 0.4 到 0.1 的变化是关键动作。需要说明图上 0.60、0.4、0.1 等为示意数值，用于讲清高于陌生人水平与接近陌生人水平的区别，定量结论以后文表格中 0.541 到 0.103 等实测值为准。

**说话人遗忘 × 重识别：** 说话人遗忘负责在部署后压制指定退出说话人的音色复现能力，重识别负责检验压制后输出是否仍能在多人画廊中被检索回本人，二者搭配的原因是相似度下降不等于检索失效，组合意义是把遗忘目标从最小化相似度改为逼近陌生人之间相似度，并用画廊 Top-1 准确率作为补充判据。

### GUARD 的全景是什么，谁选、谁改、谁学？

GUARD 全称为 Group-relative Unlearning with Activation Steering for Re-identification Defense，后文简称 GUARD。它建立在冻结的零样本合成主干上，主实验为 CosyVoice2，另在 F5-TTS 与 FireRedTTS 上验证泛化。方法分 3 个角色。选择由 GateNet 完成，它从说话人嵌入预测是否需要 steering。干预由逐层 steering 向量完成，它们加到流解码器各 Transformer 块的残差激活上。

学习由组相对奖励优化完成，它用生成后奖励更新 steering 向量。推理时不再采样候选也不计算奖励，只用门控系数加权已学好的 steering 向量。

下图展示三部分如何拼成闭环，左侧为干预位置，右上为选择，右下为学习回路。

> **看图路径：** 1. 先沿左侧从文本与参考音频到声码器的主路径看逐层加法位置；2. 再看右上遗忘与保留嵌入如何经 GateNet 得到约 1 与约 0 的系数；3. 最后看右下候选合成经奖励与组相对优势回传更新 steering 向量

[![原论文 Figure 2：GUARD architecture. (a) Layer-wise steering vectors modify the residual activations of the decoder…](https://arxiv.org/html/2609.27399v1/figures/fig2.png)](https://arxiv.org/html/2609.27399v1/figures/fig2.png)

*论文图 2。原论文 Figure 2:：“GUARD architecture. (a) Layer-wise steering vectors modify the residual activations of the decoder transformer blocks.”。*

该图左下面板显示说话人嵌入进入后，每层 Transformer 输出都与门控加权的 steering 分量相加，从第 1 层一直到第 56 层。右上面板显示遗忘说话人嵌入经 GateNet 得到接近 1 的系数并通过硬门，保留说话人嵌入得到接近 0 并被置零。右下面板显示在 steering 向量附近加扰动生成多路语音，经奖励计算得到多个奖励再转成组相对优势后回传更新。这种把选择与干预分离的设计，使新增退出者时可以只更新门控而不动主干与共享 steering，这一点在成本表中得到验证。

### 干预加在哪里，门控如何做到保留说话人不动？

干预位置是流解码器的残差激活。记第 l 层原始残差为 h，共享 steering 向量为 s，门控系数为 g，修改后残差为原值加上系数与向量的乘积。CosyVoice2 有 56 个流解码器块，隐维度为 256，因此 steering 参数总量为 14.3K。作用时机是每个流匹配步骤与每个时间位置都施加同一加权向量，属于说话人无关的共享干预，个体差异只通过门控系数体现。

\[\tilde{\mathbf{h}}_{\ell}=\mathbf{h}_{\ell}+\tilde{g}(\mathbf{e})\mathbf{s}_{\ell},\qquad\ell=1,\ldots,L,\]

上式符号含义为波浪线 h 为干预后激活，h 为原始激活，s 为可训练 steering 向量，g 为输入说话人相关的标量系数。计算目标是在不改主干权重的前提下平移解码轨迹，使遗忘说话人输出的音色落向陌生人区域。门控网络 GateNet 是轻量多层感知机，使用 SiLU 激活与 128 维隐层，参数量为 24.8K。它用遗忘与保留标签以类别加权二元交叉熵单独训练，并在 steering 优化期间保持固定。推理时采用非对称硬阈值，阈值为 0.3，低于阈值直接置零，高于阈值保留原预测值。

\[\tilde{g}(\mathbf{e})=\begin{cases}0,&g(\mathbf{e})<\tau,\\ g(\mathbf{e}),&\mathrm{otherwise},\end{cases}\qquad\tau=0.3.\]

上式表示当网络输出小于阈值时门控系数为零，原始计算通路完全保留，这是保留说话人不受影响的关键。当输出不小于阈值时系数取网络输出，实现对遗忘说话人的连续加权。原文明确 GateNet 单独训练且在 steering 优化时固定，未报告门限之外的自适应调度，因此复述时不应脑补退火或逐层门控。

**GateNet × 逐层 steering 向量：** GateNet 负责根据说话人嵌入判断当前输入是否需要干预并给出加权系数，逐层 steering 向量负责定义加到流解码器残差激活上的共享方向，分工使选择与干预分离，搭配理由是只对遗忘说话人加扰动而保留说话人走原始通路，组合意义是名单变化时只需更新门控而不重训主干。

### 奖励由哪三项组成，为何要锚定陌生人均值？

奖励针对每次生成的候选语音计算，包含匿名项、可懂度项与自然度项。匿名项取生成语音经说话人验证编码器后的嵌入与遗忘说话人注册原型之间余弦相似度，再减去该说话人的人群冒名者相似度后取绝对值并加负权重。人群冒名者相似度定义为注册原型与非匹配说话人原型之间余弦相似度的均值，每个遗忘说话人有一个值，50 个遗忘说话人平均后为 0.129。白话说，不是越不像越好，而是要像到与随机陌生人差不多的程度。

可懂度项用词错率惩罚转录错误，自然度项只在 UTMOS 低于基线参考值时惩罚，基线参考值设为 4.45，权重组合为 1、24、4。这种只惩罚低于基线的写法避免对已经自然的语音过度优化。原文未给出奖励式中逐项梯度路径的解析形式，实际优化通过下节组相对采样估计梯度，而非对声码器与识别器直接反向传播。

**人群冒名者相似度 × 匿名奖励：** 人群冒名者相似度负责给出无关说话人之间余弦相似度的均值参考，匿名奖励负责惩罚生成语音与注册原型相似度偏离该参考的绝对误差，搭配理由是避免把相似度压得过低反而留下可检测痕迹，组合意义是让遗忘输出落入正常陌生人分布而非异常静音或失真。

### 没有主干训练时，steering 向量如何被更新？

本研究的训练对象不是主干，而是 GateNet 与 steering 向量，且二者分阶段训练。GateNet 先在缓存的说话人嵌入上训练 2.5K 步。随后固定 GateNet，只用遗忘说话人候选优化逐层 steering 向量。具体做法是在当前 steering 参数上加高斯扰动生成 16 组候选，每组合成语音并计算上述奖励，再在组内做均值方差归一化得到优势，最后用优势加权扰动方向估计梯度并用 Adam 更新。扰动尺度为 0.06。

\[A_{k}=\frac{R_{k}-\bar{R}}{\mathrm{std}(R)+\delta},\qquad\nabla_{\mathbf{s}}\widehat{J}=\frac{1}{G\sigma}\sum_{k=1}^{G}A_{k}\boldsymbol{\epsilon}_{k}.\]

上式中 A 为组相对优势，R 为候选奖励，横线 R 为组均值，分母为组标准差加小量，梯度估计为优势加权扰动平均除以扰动尺度。需要区分原始目标、近似与优化步骤。原始目标是让遗忘输出匿名、可懂、自然，近似是用采样扰动与组内归一化代替不可微的生成后指标梯度，优化步骤是 Adam 更新 steering 向量。原文未报告优势归一化中 delta 取值与 Adam 学习率等细节，这是复现时的缺项，不应从模型名称推定。推理时无候选采样与奖励计算，直接用门控系数加权 steering 向量。

**组相对奖励优化 × 冻结主干：** 冻结主干负责保持原始合成能力与自然度不变，组相对奖励优化负责在 steering 参数附近采样多组候选并用生成后奖励计算组内优势来估计梯度，搭配理由是语音质量与匿名性只能在生成后测量而不可微反传，组合意义是在不更新主干权重的情况下学到轻量干预方向。

### 数据、划分、基线与指标如何保证可比？

数据为 LibriTTS clean-460，指定 50 个说话人共 25 男 25 女为遗忘集，其余 995 为保留集。评价用 50 个遗忘说话人的 200 句与 40 个保留说话人的 80 句。所有评价句都不参与 GateNet 训练，200 句遗忘评价句也不参与 steering 优化。每次合成用同一说话人一句话的前 3 秒做提示音，用同一说话人另一句话的文本做目标文本，保证文本与提示音来源不同。主干为冻结的 CosyVoice2-0.5B，泛化实验另用外部说话人验证编码器为 F5-TTS 与 FireRedTTS 提供门控输入并分别优化 steering。

基线包括原始主干、SGU、TGU 与两种强度的 TruS，其中 SGU 与 TGU 微调全部 71.3M 参数流解码器，优化 12K 步，每遗忘说话人用 60 句，TruS 对保留说话人使用 oracle 门控，这一点在解读可部署收益时必须单独标明。指标包括说话人相似度、词错率、UTMOS、spk-ZRF，以及画廊 Top-1 重识别率与冒名者可检测性 AUROC。画廊构建是每个生成句对应本人加 N 减 1 个干扰者，每个画廊说话人用注册原型表示，N 取 50、100、150。AUROC 越接近 0.5 表示保护后输出与真实冒名者录音越难区分。实验在一张 V100-16 GB 上完成，词错率用 Whisper 计算与评价。

### 主结果在相同画廊下压住了什么，保住了什么？

比较问题是各方法在相同 LibriTTS 划分与相同画廊规模下，能否同时降低遗忘重识别并保持语音质量与保留复现。公平条件是同一冻结 CosyVoice2 主干与同一遗忘保留划分，指标方向为遗忘相似度趋向 0.129、词错率越低越好、UTMOS 越高越好、画廊重识别越低越好、AUROC 越接近 0.5 越好。下表整理主数字，保留原文写法与精度，相似度为裸值，重识别为百分数。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| CosyVoice2 遗忘相似度 | SIM 趋向 0.129 | 0.541 | 0.103 | SGU/TGU 0.481，TruS 0.341 与 0.078 |
| 150 人画廊重识别 | id@150 越低越好 | 73.5% | 0.5% | SGU 56.5%，TGU 56.0%，TruS 25.0% 与 2.0% |
| 语音质量代价 | WER 越低越好，UTMOS 越高越好 | 基线 WER 5.5，UTMOS 4.37 | GUARD WER 5.9，UTMOS 4.37 | TruS 强档 WER 122.0%，UTMOS 1.35 |
| 可检测性 | AUROC 趋向 0.5 | 基线 0.009 | GUARD 0.579 | 去冒名者目标变体 0.706 |

表后解释需要同时讲收益与代价。GUARD 把遗忘相似度从 0.541 推到 0.103，把 150 人画廊重识别从 73.5% 降到 0.5%，而遗忘词错率 5.9 与 UTMOS 4.37 基本贴近基线，保留相似度 0.601 也接近基线，支持其在压住检索的同时保住内容与自然度的判断。未胜出项是 SGU 与 TGU 在 id@150 仍为 56.5% 与 56.0%，说明全量微调未解决检索残留。反例是 TruS 在强度 2.5 时虽把重识别降到 2.0%，但词错率升到 122.0% 且 UTMOS 跌到 1.35，属于以严重失真换匿名，不可视为同等可部署。AUROC 上 GUARD 为 0.579，比基线 0.009 更接近 0.5，报告显示其输出更难与真实冒名者区分，但仍高于理想 0.5，残留可检测性应在限制中说明。

**说话人相似度 × 可检测性 AUROC：** 说话人相似度负责度量生成语音与注册原型的余弦接近程度，可检测性 AUROC 负责度量保护后输出与真实冒名者录音能否被区分，搭配理由是前者看绝对数值是否回到陌生人水平，后者看分布是否自然，组合意义是同时防止数值过高导致重识别和数值过低导致一眼可辨。

### 换主干与新增退出者时，代价如何变化？

除核心结果，论文特有的两类细节是名单更新成本与跨主干泛化。先看更新成本，比较问题是新增一个退出说话人需要动多少参数与时间。GUARD 在名单变化时固定说话人无关 steering，只更新 24.8K 参数的 GateNet，无需重训主干。SGU 与 TGU 则微调 71.3M 参数流解码器。下表保留原文单位写法，内存为区间，更新包大小为兆字节。

| 条件 | 指标 | TGU | SGU | GUARD |
| --- | --- | --- | --- | --- |
| 更新参数量 | 参数越少越好 | 71.3M | 71.3M | 24.8K |
| 单人更新时间 | 时间越短越好 | 6.3 h | 7.8 h | 9.9 min |
| 内存与包大小 | 开销越小越好 | 8–12 GB，286 MB | 8–12 GB，286 MB | <<1 GB，0.1 MB |

表后解释需区分训练资源与推理开销。训练侧 GUARD 以 9.9 分钟完成名单更新，远低于 6.3 到 7.8 小时，且内存远小于 1 GB，更新包仅 0.1 MB，支持轻量名单维护的判断。但原文未测量推理延迟与每步额外计算，总体趋势不等于每步都无开销，不能承诺延迟改善。再看跨主干，F5-TTS 上 id@150 从 95.5% 降到 6.0%，FireRedTTS 上从 91.5% 降到 18.0%，同时可懂度与自然度基本保持，支持方法不只适配 CosyVoice2。但 FireRedTTS 残留 18.0% 高于 CosyVoice2 的 0.5%，说明泛化幅度与主干有关，复现到新主干时需分别优化 steering，不能直接搬运向量。

| 条件 | 指标 | 基线 | 本方法 | 适用说明 |
| --- | --- | --- | --- | --- |
| F5-TTS 遗忘重识别 | id@150 越低越好 | 95.5% | 6.0% | 需为该主干单独优化 |
| FireRedTTS 遗忘重识别 | id@150 越低越好 | 91.5% | 18.0% | 残留高于主实验，需补验证 |

该跨主干结果表明遗忘均能大幅压低重识别并保持可懂度与自然度，但残留差异提示新主干需单独优化 steering 向量并分别验证，不能默认迁移已有向量效果。

### 拿掉哪一项奖励会发生什么，陌生人锚点能否去掉？

消融问题是三项奖励各自承担什么，公平条件是相同预算下从零重新训练各变体，指标方向与主结果一致。下表只列实际可运行的变体，不列事后最优值。

| 条件 | 指标 | 完整方法 | 消融变体 | 变化说明 |
| --- | --- | --- | --- | --- |
| 去掉冒名者目标 | SIM 趋向 0.129，AUROC 趋向 0.5 | SIM 0.103，AUROC 0.579 | SIM 0.056，AUROC 0.706 | 相似度更低但重识别未降且更易被识破 |
| 去掉自然度奖励 | UTMOS 越高越好，WER 越低越好 | UTMOS 4.37，WER 5.9 | UTMOS 1.25，WER 11.4% | 自然度与可懂度同时崩塌 |
| 去掉可懂度奖励 | WER 越低越好，id@150 越低越好 | WER 5.9，id@150 0.5% | WER 6.7%，id@150 2.5% | 可懂度变差且重识别回升 |

表后解释要给出机制含义。去掉冒名者均值后把目标设为零，遗忘相似度从 0.103 进一步降到 0.056，但画廊重识别未继续下降且 AUROC 从 0.579 升到 0.706，支持低于陌生人水平不能进一步防检索反而留下分布异常的判断。去掉 UTMOS 奖励后 UTMOS 跌到 1.25 且词错率升到 11.4%，说明自然度约束同时保护了可懂度。去掉词错率奖励后词错率升到 6.7% 且 id@150 升到 2.5%，说明内容约束缺失也会连带影响匿名稳定性。未评测边界是各权重在 1、24、4 之外的灵敏度与不同基线参考值的影响，原文未报告，不应断言权重必然最优。

### 哪些结论有边界，哪些量没有被测量？

直接报告的是在给定划分与画廊下的相似度、重识别、词错率、自然度与 AUROC 变化。有限解释是陌生人均值作为目标优于无限制最小化，这由去掉冒名者目标后相似度更低但重识别未降且 AUROC 恶化所支持。未验证推测是该目标在任意语种、任意画廊规模与自适应攻击下都成立，原文未做此类测试，应表述为待验证。缺失证据不是技术错误，但需明确。

原文未报告误判率对保留说话人的细粒度影响、端到端延迟、输出帧率与长期连续退出的累积漂移，也未公开代码可用性声明，资源状态为未发现可验证的公开链接，因此不能写代码已公开，只能写本次未能确认可达。TruS 使用 oracle 门控属于事后有利条件，不能将其强档失真结果与可部署的 GUARD 直接比收益。不同指标差值不能混算，例如不能把相似度下降量与重识别百分点下降量相减得到综合分。自动指标不能当成人评，UTMOS 保持不等于人耳偏好不变。

### 要复现应先固定什么，再跑什么？

复现先固定信息条件。数据用 LibriTTS clean-460，按 50 遗忘与 995 保留划分，评价句与训练句不重叠，每次合成用 3 秒提示音加异句文本。主干用冻结 CosyVoice2-0.5B，流解码器 56 层隐维 256，steering 总量 14.3K。GateNet 为 128 隐层多层感知机共 24.8K 参数，阈值 0.3，单独训练 2.5K 步后固定。steering 优化用 16 候选、扰动 0.06、权重 1、24、4、UTMOS 参考 4.45，词错率用 Whisper 计算。

评价时画廊每人用注册原型表示，报告 50、100、150 三档 Top-1 准确率，同时报告遗忘相似度与 0.129 参考的距离、双方词错率与 UTMOS、AUROC 与 0.5 的距离。还需补的验证包括更大画廊、跨性别与跨口音分层、保留集误触发率，以及人听自然度。若迁移到 F5-TTS 或 FireRedTTS，需用外部说话人验证编码器重训门控并重学 steering，不能复用 CosyVoice2 向量。常见误解是把门控置零等同于删除说话人信息，实际它是保留原始通路，遗忘只发生在门控打开的分支上。

另一个误解是把相似度压到零当成更安全，消融显示过低反而更易被检测且不降低重识别。

### 何时值得尝试这种门控加 steering？

当部署方需要响应退出请求、且不能承受重训大模型与损害保留音色时，这种选择与干预分离的轻量方案值得尝试。它的适用前提是能拿到可靠说话人嵌入做门控，能在生成后计算相似度、词错率与自然度做奖励，且画廊评价能覆盖实际干扰人群。若场景要求对每个遗忘者个性化抑制强度，或要求严格实时延迟，则需补做说话人自适应向量与延迟测量后再决定。

回到中心矛盾，遗忘不是让模型哑掉或含糊掉，而是让指定声音在人群中找不出来，同时让别人声音与内容不受影响。GUARD 用陌生人均值锚定匿名方向，用门控保护保留通路，用组相对采样解决不可微奖励优化，在主实验与两款异构主干上给出了一致但幅度不同的证据。初学者复述时抓住三句话即可。哪里改，流解码器残差逐层加权。谁决定改，GateNet 以 0.3 阈值决定。

学什么，学共享 steering 使遗忘相似度回到陌生人水平并保住可懂与自然。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.27399v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-24/)
