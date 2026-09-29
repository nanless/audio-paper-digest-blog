---
title: "FlowTTS-GRPO: Online Reinforcement Learning with Multi-Objective Reward Optimization for Flow-Matching Based Text-to-Speech"
date: 2026-09-28
draft: false
description: "针对流匹配语音合成缺少在线强化学习的问题，该工作把 ODE 采样改写为 SDE 以获得随机性，再用组内相对优势同时优化说话人相似度、可懂度和感知质量，在 CosyVoice 3.0 上把中文 SS2 从 0.830 提升到 0.859，代价是只微调 FM 的 LoRA 参数且依赖现成奖励模型。"
tags: ["流匹配", "强化学习", "后训练", "零样本", "文本到语音"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:wang26s_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/wang26s_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/wang26s_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f5cc39bd8e8925d06fafe595efb1549753c03a40d5a0f44453dc43e496400506"
paper_digest_api_reader_plan_sha256: "eadf2cef473845a00d4ca7673de0c4a488cba93dbe0c396266abfbd0e9c194d6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "793e45d9418bf299e7520a65fd89c69e84fda7d897f50a4fae16030ba53ec4c9"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f61430a70bc69140ce3dcfe86a179a226bc7ad8fcd50d62e0eef9c690600193b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f88e9a359318cd2d904700c76e2595157720f8cd4cfd249857ff16116ffc77a8"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "401eba2082c65963e6dd9769cbece94b0d11f893bafad6b2a5fcfb49eddb37ad"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"setting","id":"setting.post-training","label":"后训练"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_task: "文本到语音"
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 只调流匹配模块：把确定性 ODE 变成可探索的 SDE 再做在线组相对强化学习

> 英文题目：*FlowTTS-GRPO: Online Reinforcement Learning with Multi-Objective Reward Optimization for Flow-Matching Based Text-to-Speech*

> 会议身份：`conference:interspeech:2026:conference-paper-id:wang26s_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/wang26s_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/wang26s_interspeech.pdf)

标签：#流匹配 #强化学习 #后训练 #零样本 #文本到语音

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Haoxu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Biao Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Weiqing Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xiang Lv：机构信息未能从会议 PDF 纯文本可靠映射
- Han Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangang Li：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

零样本语音克隆（Voice Cloning）的输入是提示音频加目标文本，输出是保留说话人音色且内容准确的高自然度语音，难点在于音色相似度、内容可懂度与感知质量三者在流匹配（Flow Matching, FM）模型中互相牵制。FlowTTS-GRPO先把确定性常微分方程（Ordinary Differential Equation, ODE）采样改写为随机微分方程（Stochastic Differential Equation, SDE）路径以获得探索噪声，再用组相对策略优化（Group Relative Policy Optimization, GRPO）在混合采样轨迹上估计组内优势并更新速度场，最后将说话人相似度、语音识别（Automatic Speech Recognition, ASR）转写准确率与DNSMOS感知分经标准差归一化后加权融合为终端奖励。与以往需独立随机生成器或大量偏好对的方法不同，该框架可直接微调开源CosyVoice 3.0与F5-TTS且无需价值网络。在Seed-TTS-Eval中文集上CosyVoice 3.0的ERes2Net相似度由0.830提升至0.859并在WavLM相似度上超越闭源Seed-TTS。该结论限于中英训练后的多语言外推、代理奖励与小规模主观评测，尚未验证长文本与强噪声提示下的稳定性。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/Systran/faster-whisper-large-v3> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要保留什么？

本文解读的对象是零样本语音克隆任务中的流匹配模块后训练。输入是短提示音频加提示文本再加新目标文本，目标是合成与提示音色一致、内容读对、听感自然的语音。输出是 1 篇可核对的方法复述，重点保留原文实际给出的训练条件、奖励定义、采样改写方式和可运行基线对比，不做超出证据的效果承诺。

读者是刚进入语音合成的研究生，因此先把白话解释放在前面：流匹配可以理解为学习一条从高斯噪声逐渐变形到真实梅尔谱的速度场，推理时沿着速度一步步积分得到频谱；强化学习后训练可以理解为先让模型生成多版发音，再用现成打分器选出更好的方向去微调速度场。需要保留的关键信息包括只微调流匹配而不动分词器、语言模型和声码器的做法，用现成说话人验证、语音识别和 MOS 估计做奖励的做法，以及加权多目标时先做标准差归一化的做法。

后文按学习依赖展开，先讲路线差异，再走完一个样本的全流程，然后讲训练构造、实验条件、主结果与反证，最后给出复现清单。凡是教学举例都会标明是例子，不把例子中的数字当作论文报告的数字。

### 已有强化学习为何集中在语言模型，流匹配为何难做？

原文把语音合成的强化学习工作分为 3 条路线。第一条是基于大语言模型的离散 token 路线，例如 Seed-TTS 用近端策略优化同时优化词错率和说话人相似度，但需要维护多个辅助模型，复杂且不稳定；另一批工作用直接偏好优化及其变体强化语言模型，训练时不需要额外模型，但需要大量人工偏好对，推理与标注成本高；还有 DiffRO 直接在语音 token 上用可微奖励优化识别损失，但需要单独训练 token 到奖励的映射且对奖励偏差敏感。

例子：可以把这类方法想象成先改写讲稿再配音，改的是读什么和断句，声学细节仍由后续模块决定。第二条是只做流匹配的初步尝试，F5R-TTS 是第 1 篇在流匹配语音合成上做强化学习的工作，但它需要独立训练一个高斯流匹配生成器来提供随机性，不能直接利用开源模型，且每个提示只做 1 次采样，没有利用组内优势和多目标优化。

第 3 条是把在线强化学习引入流匹配图像生成的 Flow-GRPO，以及迁移到语音增强的 FlowSE-GRPO，它们证明了把确定性常微分方程轨迹改写为随机微分方程路径可以提供强化学习所需的随机性。本文的差异在于零样本语音合成必须同时保住说话人身份、语言内容和感知质量，奖励之间存在冲突，且架构行为与图像或增强不同，因此需要研究多目标融合与面向难例的训练策略。

### 要解决的具体问题是什么，难在哪里？

具体问题是对已预训练的流匹配语音合成模型做在线强化学习后训练，使其零样本克隆更符合人类感知偏好。难点有 3 个。第一，流匹配推理默认是确定性积分，相同条件得到相同输出，没有策略分布可供探索，直接套用强化学习没有梯度信号。第二，评价维度互相牵制，单独优化说话人相似度可能损害可懂度或引入噪声，单独优化感知质量可能改变音色，需要在 1 次更新中平衡 3 个现成奖励。

第三，架构分工不同导致同样的强化学习位置效果不同：在大语言模型加流匹配的混合系统中，读错字往往源于语言模型生成的语义 token， 只调流匹配难以根治；而在纯流匹配系统中，文本到声学的映射全部由流匹配承担，调它既可能改善细节也可能改善可懂度。论文因此把研究问题限定为只微调流匹配组件，在不增加价值网络、偏好对和 token 到奖励模型的前提下，用现成奖励实现稳定提升，并通过对照说明何时该调语言模型、何时该调流匹配。

### 方法全景：一个样本如何走完输入到奖励再回到更新？

先沿一个样本走完全流程。训练时取一条真实 utterance 作为提示波形和提示文本，再从文本语料中随机打乱抽取一条新目标文本，构成 1 次语音克隆的推理条件。对 CosyVoice 3.0，语音分词器从提示波形提取提示语音 token，语言模型在提示文本加目标文本条件下自回归生成目标语音 token，流匹配模型再以提示与生成 token 拼接、提示梅尔谱和提示说话人嵌入为条件生成目标梅尔谱；对 F5-TTS，则直接以提示文本加生成文本拼接与提示梅尔谱为条件生成目标梅尔谱。

声码器把梅尔谱转成波形，得到克隆音频。关键在于组采样：对同一条件用混合的常微分方程与随机微分方程采样器生成一组候选，例如 CosyVoice 3.0 每组 8 个，F5-TTS 每组 10 个，再用现成奖励模型对每个波形打分，组内归一化得到优势，最后用带裁剪和散度约束的目标更新流匹配速度场。推理时仍用确定性步数，CosyVoice 3.0 用 10 步去噪，F5-TTS 用 16 步去噪。
导读：下图是全文的总装配图，建议先看条件如何进入模型，再看组采样与奖励回路如何闭合。

> **看图路径：** 1. 先从左上零样本条件框看四类输入，再向下跟踪到流匹配模型框；2. 对比右上橙色与蓝色圆点图例，确认哪些条件只用于 CosyVoice 3.0；3. 沿重构梅尔谱乘以 G 到声码器再到重构波形乘以 G，确认组采样位置；4. 从奖励模型经组计算到优势再到策略优化的箭头，确认闭环更新对象是 FM

[![原论文 Figure 1：The pipeline of our FlowTTS-GRPO post-training for CosyVoice 3.0 and F5-TTS.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6afe47f61f03/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6afe47f61f03/figure-1.png)

*论文图 1。原论文 Figure 1：“The pipeline of our FlowTTS-GRPO post-training for CosyVoice 3.0 and F5-TTS.”。*

图中左侧绿色框给出零样本条件，右侧给出组相对策略优化回路。可见路径是条件进入流匹配模型，模型输出一组重构梅尔谱，经声码器得到一组重构波形，再经语音识别、说话人和 MOS 奖励模型得到一组奖励，经组计算得到一组优势，反向做策略优化更新流匹配模型。图注明确指出提示语音 token、生成语音 token 和提示说话人嵌入只用于 CosyVoice 3.0，这对应了混合系统与纯流匹配系统的条件差异。训练时只优化流匹配，不微调分词器、语言模型或声码器，因此回路中的可学习对象是单一的。

### 随机性从哪里来：马尔可夫决策与采样改写做了什么？

论文把流匹配解码表述为马尔可夫决策过程。白话是把生成看成多步决策：状态包含条件、当前时间与当前隐变量，动作是模型预测的速度，策略是给定状态下速度的分布，转移是欧拉更新，奖励只在终点根据最终样本打分。原始流匹配的速度预测对应确定性策略，无法探索。改写的做法是把确定性常微分方程转换为保持边缘分布等价的逆时随机微分方程，加入由噪声水平控制的高斯噪声，使每一步转移变成高斯分布并有明确对数似然。

为降低训练负担，只在早期窗口内的步骤使用随机采样，其余步骤仍用确定性更新，且只对随机窗口内的步骤做优化。原文还说明噪声水平是超参数，窗口起点与窗口大小控制随机范围。

**流匹配 × 组相对策略优化：** 流匹配负责从噪声到梅尔谱的连续速度场建模，给出确定性的常微分方程采样轨迹；组相对策略优化负责在同一条件下采样一组候选并用组内相对奖励计算优势。两者搭配的理由是确定性轨迹本身没有可供强化学习探索的似然分布，论文把部分步骤改写为随机微分方程后，每个动作有了高斯对数似然，组相对策略优化才能沿高奖励轨迹方向调整速度场。

**常微分方程采样 × 随机微分方程采样：** 常微分方程采样按预测速度做欧拉递推，输入相同则输出相同，适合稳定推理但不适合探索；随机微分方程采样在漂移项之外加入与时间相关的噪声项，保持边缘分布等价的同时引入随机性。组合意义是训练时只在早期窗口用随机微分方程采样产生多样性并计算梯度，其余步骤仍用确定性更新，从而降低训练负担并加速收敛。

需要提醒的是，原文给出了漂移项与噪声项的具体形式和对数似然表达式，但本次结构化证据未提供可绑定的原始公式编号，因此这里不转写展示公式，只保留可复述的计算逻辑：随机步骤的均值由当前隐变量加漂移乘步长决定，方差由噪声水平与步长决定，策略比值由新旧高斯密度比得到，优势由组内奖励归一化得到。

### 三个奖励各自分工是什么，多目标如何组合才稳定？

3 个现成奖励分工明确。说话人相似度奖励用 ERes2Net 提取生成与参考波形的说话人嵌入并计算余弦相似度，映射到 0 到 1，管音色一致性；语音识别奖励用中文 Paraformer 与英文 Whisper-large-v3 转写生成音频，再用 1 减字错率或词错率表示，管语义一致性与可懂度；感知质量奖励用 P.835 DNSMOS 的总体分，生成波形重采样到 16 kHz 后打分，管自然度与噪声抑制。训练时 P.835 作为代理奖励，评估时同时报告 P.808 与 P.835。

资源状态方面，本次收到的第三方资源 Faster-Whisper-Large-V3 显示可用且状态码为 200，因此可写该英文识别模型当前可公开获取，但中文 Paraformer 与 DNSMOS 的可用性仍以原文为准。单奖励训练容易出现奖励黑客，即模型为刷高某一代理分而牺牲其他维度，因此需要多目标融合。概率组合是每个提示只指派一个奖励，组内优势只由该奖励决定，避免了量纲差异但组间偏好不一致会导致早期振荡；加权组合是把每个奖励除以当前批内标准差使各自标准差为 1，再按权重求和，权重设计才有意义。

原文报告 3 种奖励的标准差并不相等，MOS 方差明显大于说话人相似度，更大于识别奖励，若不归一化，方差大的奖励会主导优势计算。最终主训练采用加权加标准差归一化，权重取说话人 1.0、识别 1.0、MOS 0.4。

**大语言模型 × 流匹配声学模型：** 大语言模型负责把提示文本和目标文本映射为语义语音 token，决定读什么和大致韵律；流匹配声学模型负责把 token 加提示梅尔谱和说话人嵌入映射为细粒度梅尔谱，决定音色细节和音质。论文据此做了功能解耦：混合系统中可懂度主要受语言模型约束，强化学习作用于流匹配时主要改善音色相似度和感知质量，而纯流匹配系统则可同时改善可懂度。

**加权组合 × 概率组合：** 加权组合把 3 个奖励先按批内标准差归一化再按权重求和，一个样本同时承受 3 个目标的联合优势；概率组合是每个提示只随机指派一个奖励函数，组内优势只由单一奖励决定。搭配多目标的理由是单奖励容易出现奖励黑客，加权并归一化让方差大的奖励不再主导优势方向，论文对照显示加权方案收敛更快更稳定。

### 训练与难例构造：参数怎么动，难文本从哪里来？

训练只更新流匹配的低秩适配参数。CosyVoice 3.0 用 0.5B 语言模型前端预解码得到训练用的提示与生成 token，但该语言模型本身不做强化学习；F5-TTS 直接微调。每次迭代采样少量提示波形并重复多次以构造组，例如 CosyVoice 3.0 采样 16 个提示并重复 4 次，每提示生成 8 个，共 512 个候选，丢弃组内标准差为 0 的组后重组为小批量并做多次参数更新；F5-TTS 采样 6 个提示并重复 4 次，每提示生成 10 个，共 240 个候选。

训练时不使用无分类器引导，推理时再使用，这种不对称被验证能加快代理奖励增长，解释是去掉引导增加了探索。窗口训练只用 2 步随机窗口，CosyVoice 3.0 去噪步在 5 到 8、起点在 1 到 3，F5-TTS 去噪步在 8 到 16、起点在 1 到 3。难例合成是为提升鲁棒性：对中文训练文本随机施加局部词重复、稀疏多词重复或整句重复 3 类启发式增广，模拟重复与绕口令等失败模式，再与原始中文提示波形随机配对，额外生成 20,000 条难例。

验证集分为随机抽取的易集与重复文本为主的难集，分别监控总体趋势与难例字错率。原文未报告梯度是否截断到分词器或声码器之外的细节，但明确说明这些模块冻结，因此复述时只写冻结与更新对象，不推定内部实现。

### 实验条件：数据、验证集、评估指标与基线如何对齐？

训练数据用 WenetSpeech4TTS 高质量中文子集与 LibriTTS-960 英文集，音频作提示波形，转写作提示文本，目标文本从语料随机打乱得到，构成易训练集 40,000 条，另加 20,000 条中文难例。验证集用 Seed-TTS-Eval 中英文测试集随机抽 200 条作易验证集，用其中文难集抽 200 条作难验证集。评估用 Seed-TTS-Eval 的中文 2020 条、英文 1088 条、难例 400 条，以及 CV3-Eval 多语言克隆子集的 9 种语言各 500 条，外加中英难例集。指标方向要记清：字错率与词错率越低越好，说话人相似度越高越好，MOS 分越高越好。

说话人相似度报告两个版本，基于 WavLM 的第一版与基于 ERes2Net 的第二版，其中第二版同时是训练用的代理奖励，第一版可作为未直接优化的泛化检验。内容一致性中文用 Paraformer、英文及其他语言用 Whisper-large-v3。基线包括未做强化学习的开源模型、语言模型侧做强化学习的版本、流匹配侧做强化学习的 F5R-TTS，以及本文 2 个模型的训练前检查点，保证比较的是同一推理流程下的实际可运行策略，而非事后最优值。

主观评估每种语言随机抽 30 条做零样本合成，找 10 名母语听众做成对偏好比较，分别评价总体 MOS 与音色相似度。

### 主结果：相似度与音质提升了多少，可懂度有何分化？

先看总体趋势。CosyVoice 3.0 在易验证集上说话人相似度与 P.835 随训练稳步上升，而识别奖励在 0.99 附近趋平；F5-TTS 三者均有上升，其中相似度与 P.835 上升更明显。原文解释是混合系统的可懂度主要受语言模型生成的 token 约束，流匹配难以根治读错，而纯流匹配系统直接从文本合成，因此调流匹配也能改善可懂度。增加每步数据吞吐量可加速奖励增长，8 卡配置的曲线明显快于 2 卡。
导读：下图对比了不同卡数下 3 条代理奖励随训练步数的变化，重点看相似度与 MOS 的斜率差异以及 ASR 的饱和形态。

> **看图路径：** 1. 对比左图说话人相似度和中图 P835 在 8 GPU 与 2 GPU 下的爬升速度；2. 观察右图 ASR 奖励是否随步数单调上升，判断其是否已接近饱和；3. 注意横轴均为训练步数，纵轴分别是相似度、MOS 分数和 1 减词错率

[![原论文 Figure 3：Proxy reward curves for CV3 on the dev-easy set during RL training with different numbers of GPUs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6afe47f61f03/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6afe47f61f03/figure-3.png)

*论文图 3。原论文 Figure 3：“Proxy reward curves for CV3 on the dev-easy set during RL training with different numbers of GPUs.”。*

图中左、中两路随步数单调爬升且 8 卡更快，右路在高位附近波动而无明显爬升，这支持了流匹配强化学习主要改善音频细节指标、语言模型强化学习主导可懂度的判断。最终检查点选择上，CosyVoice 3.0 选 9545 步，F5-TTS 选 1289 步，后者注明因训练更耗时且资源受限。
下表聚焦 CosyVoice 3.0 中文主结果的 4 个关键数字，比较问题是同一模型在流匹配强化学习前后说话人相似度是否同时在两个验证模型上提升，公平条件是同一零样本流程与同一测试集，指标方向均为越高越好。

| 条件 | 指标 | 训练前 | 训练后 | 比较对象 |
| --- | --- | --- | --- | --- |
| 中文测试集 | 说话人相似度第二版 | 0.830 | 0.859 | 同一模型强化学习前后 |
| 中文测试集 | 说话人相似度第一版 | 0.777 | 0.804 | 同一模型强化学习前后 |
| 中文测试集 | 训练步数 | 0 | 9545 | 所选最终检查点 |

表后解释：该表显示的收益是两个说话人验证模型同时提升，其中第一版未参与优化仍能提升，支持了不是对奖励模型的过拟合。代价与限制是中文可懂度在该模型上几乎不变，英文与难例集有类似模式。

把强化学习后的流匹配接到语言模型已做强化学习的版本上仍能提升相似度与 MOS，说明功能解耦成立，但也意味着若目标是降词错率，单调流匹配是不够的。F5-TTS 的同一表格模式还包括可懂度下降与相似度提升并存，进一步验证了架构差异。未胜出项是部分多语言的字错率在 CosyVoice 3.0 上略有波动，原文如实报告而非全部变好。

### 反证与消融：归一化、权重、引导与噪声如何影响收敛？

消融均在 2 卡上进行，结论按证据强度区分表述。第一，奖励标准差确实不等，MOS 的批内标准差均值最大，说话人其次，识别最小，因此直接加权会让 MOS 主导优势。导读：下图展示 3 类奖励标准差随训练步数的分布，重点看 3 条均值线的高度分层。

> **看图路径：** 1. 先看纵轴标准差与横轴训练步数，确认三条曲线的量级分层；2. 对比橙色 MOS 曲线均值线与蓝色 ASR、绿色 SS 曲线的均值线高度；3. 观察三类标准差随训练是否收敛，判断直接加权会带来什么偏差

[![原论文 Figure 2：The standard deviation of three rewards in batch dur- ing training.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6afe47f61f03/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6afe47f61f03/figure-2.png)

*论文图 2。原论文 Figure 2：“The standard deviation of three rewards in batch dur- ing training.”。*

图中橙色 MOS 曲线整体高于绿色说话人曲线，蓝色识别曲线最低，且各自围绕均值大幅抖动，这解释了为何需要先除以批内标准差再加权。第二，多目标组合对照显示概率组合早期振荡但最终仍能上升，加权组合更快更稳定；去掉标准差归一化的加权会让 MOS 冲得更高而说话人增长更慢，与方差主导优势的机制一致。导读：下图对比 3 种融合策略在易验证集上的 3 路奖励，重点看早期稳定性与 MOS 和相似度的此消彼长。

> **看图路径：** 1. 对比左图加权曲线与概率组合曲线在早期的振荡幅度；2. 观察中图去掉标准差归一化后 MOS 曲线为何冲得更高而 SS 更慢；3. 检查右图 ASR 三条曲线是否基本重合，判断多目标融合对其影响

[![原论文 Figure 5：Proxy reward curves for CV3 on the dev-easy set during RL training with different multi-objective…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6afe47f61f03/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6afe47f61f03/figure-5.png)

*论文图 5。原论文 Figure 5：“Proxy reward curves for CV3 on the dev-easy set during RL training with different multi-objective reward combination strategies.”。*

图中加权曲线在相似度与 MOS 上均更平稳，概率组合在早期波动更大，去归一化版本则明显偏向 MOS。第三，MOS 权重从 0.2 增至 1.0 会加速 MOS 收益但拖慢相似度，0.2 时 MOS 几乎在基线附近振荡，最终取 0.4 以保住零样本最关键的相似度。第四，去掉无分类器引导的训练采样能更快提升代理奖励，且在带引导的推理下依然有效，说明只优化条件速度场具有泛化性；噪声水平从 0.1 增至 0.5 能扩大探索并加速提升，0.1 时几乎无持续收益，0.5 达到饱和，因此主训练选 0.5。

难例方面，对 CosyVoice 3.0 即使加入难训练集，可懂度在难验证集上仍提升极小，支持语义主要由语言模型驱动；对 F5-TTS 加入难例能加速识别奖励增长，因此主训练同时使用易集与难集。
下表整理 2 模型的低秩与采样配置，比较问题是相同方法在不同架构下用了哪些不同超参数，公平条件是各自独立调参但同属只调流匹配。

| 模型 | 低秩秩数 | 学习率 | 每迭代提示数 | 每提示生成数 |
| --- | --- | --- | --- | --- |
| CosyVoice 3.0 流匹配 | 32 | 1e-4 | 16 | 8 |
| F5-TTS | 32 | 5e-5 | 6 | 10 |
| CosyVoice 3.0 流匹配 | 64 | 1e-4 | 4 | 512 |
| F5-TTS | 64 | 5e-5 | 4 | 240 |

表后解释：该表的前两行是核心优化器与组大小差异，后两行补充了适配器缩放与重复次数、总候选数的对应关系。可见 F5-TTS 学习率更小但每组更大，这与其训练更耗时、检查点更早的报告一致。代价是更大的组采样带来更高的合成与打分开销，原文用窗口训练与丢弃零方差组来控制成本。未评测边界是更大秩数或全参数微调是否进一步提升，原文未报告，不能推定。

### 边界与未验证之处：哪些改善不能直接承诺？

首先，相关性不等于因果，代理奖励上升与人工偏好一致是分别报告的，主观偏好测试显示总体 MOS 与音色相似度均偏向强化学习后模型，但这不意味着每一条样本都变好，也不意味着误判率、延迟或推理成本得到改善，原文未测量这些量。其次，总体趋势不等于每组都成立，多语言表中部分语言的字错率在强化学习后略有上升，难例集的改善幅度也因架构而异，需要按语言与难度分别看。

第三，奖励模型本身可能有偏差，论文用未参与优化的 WavLM 相似度与 P.808 作为交叉检验，显示相似度提升具有跨验证模型的泛化性，但仍未覆盖真实下游任务或长期听感疲劳。第四，训练只用中英数据，跨语言提升是零样本泛化而非多语言训练的结果，未来工作才计划加入多语言数据。第五，F5-TTS 的最终步数受资源限制，是否继续训练会更好属于待验证；噪声、窗口与引导的结论来自以相似度为单一奖励的对照，换成多目标权重后最优点可能偏移。

缺失证据不是技术错误，但在复现时应把这些边界当作必查项。

### 复现先做什么：数据、配置与检查点如何对齐？

复现的第一步是重建数据管线。用 WenetSpeech4TTS 中文高质量子集与 LibriTTS-960 英文集，把音频当提示波形、转写当提示文本，再随机打乱文本语料得到目标文本，构造 40,000 条易训练样本；难例按 3 类重复规则对中文文本做增广后与原始提示波形配对，额外构造 20,000 条。验证集按原文从 Seed-TTS-Eval 抽取易 200 与难 200，分别监控总体与难例字错率。第二步是冻结与更新对象：冻结分词器、语言模型与声码器，只给流匹配加秩为 32、缩放为 64 的低秩适配。

CosyVoice 3.0 先用未做强化学习的 0.5B 语言模型预解码得到训练用 token，F5-TTS 直接微调。第三步是对齐采样与优化超参数：CosyVoice 3.0 学习率 1e-4 线性衰减到 0，10k 步，每迭代 16 提示重复 4 次、每提示 8 采样共 512；F5-TTS 学习率 5e-5，每迭代 6 提示重复 4 次、每提示 10 采样共 240；丢弃零方差组，2 步随机窗口，训练不用无分类器引导，推理分别用 10 步与 16 步。第四步是对齐奖励：中文用 Paraformer、英文用 Whisper 大模型计算 1 减错率，ERes2Net 计算余弦相似度，P.835 总体分作感知奖励，波形先重采样到 16 kHz。

多目标时先按批内标准差归一化再按 1.0、1.0、0.4 加权。代码与权重方面，原文未在本证据中给出可运行仓库链接，因此只能区分现成奖励模型可下载与完整训练代码是否开源的不同含义，先跑通单奖励相似度对照再进入多目标。

### 何时值得尝试这种只调流匹配的在线强化学习？

当已有开源流匹配或混合语音合成模型，且主要痛点是音色漂移、细节粗糙或整体听感不稳定，而非大面积读错字时，值得尝试本文路线。它的吸引力在于不需要训练价值网络、收集偏好对或训练 token 到奖励映射，直接用现成说话人、识别与 MOS 模型即可闭环，且通过改写采样获得随机性，能直接利用开源权重。若痛点是中文多音字、英文罕见词或重复文本导致的严重错读，混合系统应优先考虑对语言模型做强化学习或改进时长与语义建模，单调流匹配的收益可能有限。

纯流匹配系统则可同时期待可懂度改善，但仍建议加入难例合成。实践中先用小卡数跑通加权加归一化的三目标基线，确认相似度与 MOS 双升且识别不塌，再调 MOS 权重与噪声水平；若资源紧张，可沿用去掉引导、缩小随机窗口、丢弃零方差组的组合以降低开销。最终是否上线仍需补做人工偏好与跨验证模型的双重确认，以及难例与多语言的分别评估，不能只看代理曲线的终点。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
