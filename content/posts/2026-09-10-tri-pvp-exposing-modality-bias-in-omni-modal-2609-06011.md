---
title: "Tri-PvP: Exposing Modality Bias in Omni-Modal Large Language Models through Perceptual-Propositional Evidence Conflicts"
date: 2026-09-10
draft: false
tags: [音视频问答, 基准设计, 多模态学习, 音频分类, 模型评估]
categories: [论文速递]
description: "为解决全模态大模型在图文声三路互斥时把模态偏置与证据形式偏置混为一谈的问题，Tri-PvP 以 8000 样本的四条件匹配反事实与五模型对照揭示视觉主导且视听在感知与命题上不对称，并以早期线性可分与对比解码仅部分缓解且引入文本残余为代价验证偏置的表征根源。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.06011"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "Tri-PvP：用感知与命题的正交冲突把模态偏置从证据形式偏置中剥离"
paper_digest_original_title: "Tri-PvP: Exposing Modality Bias in Omni-Modal Large Language Models through Perceptual-Propositional Evidence Conflicts"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.06011"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.06011.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 8.3
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "为解决全模态大模型在图文声三路互斥时把模态偏置与证据形式偏置混为一谈的问题，Tri-PvP 以 8000 样本的四条件匹配反事实与五模型对照揭示视觉主导且视听在感知与命题上不对称，并以早期线性可分与对比解码仅部分缓解且引入文本残余为代价验证偏置的表征根源。"
paper_digest_authors: [{"affiliations":["NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)"],"name":"Yen-Ting Piao"},{"affiliations":["NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)"],"name":"Shu-Yun Chen"},{"affiliations":["NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)"],"name":"Chin-Hui Chu"},{"affiliations":["NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)"],"name":"Chun-Wei Chen"},{"affiliations":["NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)"],"name":"Shih-Yun Shan Kuan"},{"affiliations":["NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)"],"name":"Hung-yi Lee"},{"affiliations":["NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)"],"name":"Yun-Nung Chen"}]
paper_digest_abstract_sha256: "de0224ef87850eb8687bc9566ca786ed7b0bcd2782e594d3918b56564c21422c"
paper_digest_sidecars: {"citation.bib":{"sha256":"5bc0e40ec99a7a45208640f72d7599a6ceae1814c774226ea122ce5673d58c57","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-06011/citation.bib"},"citation.json":{"sha256":"df3890ff583f0cf7fc300964880fb454ad9bbdd91c50af4da7f28c1ff8d8648d","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-06011/citation.json"},"citation.ris":{"sha256":"0ec706bc866051c14a94928032a18a293791a253aebb016fccc9260f90514ae6","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-06011/citation.ris"},"rethink-context.json":{"sha256":"0176795a4216377082016f0d12cb88cdd216bd2c5880942ed0f53ba6939364c7","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-06011/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ed64bc6ae89ad12a19cee045cf556d94355531c70000edf8affb8232d72f2517"
paper_digest_api_reader_plan_sha256: "e112456aeac819ee942096c235bac8e0d43c5291a8541628dfa76d23c4309d53"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "0c3edd10e0b462cdba46995ac7b65382dc4ee5267daa37b3dbfe9d35848c9d13"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "248a5a63bcad6cb2edcadf4021c4f5bd6568d50190f558ee6868036d8d6a5ade"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "33706603ed6d540cec4aab1dbfb83b146dabe36f7f37ff5b92688edc8f437e96"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "d02be1584766336c366146277454f52c20b8e3ff9fb084e4e86146dff849a11b"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 Tri-PvP：用感知与命题的正交冲突把模态偏置从证据形式偏置中剥离

> 英文题目：*[Tri-PvP: Exposing Modality Bias in Omni-Modal Large Language Models through Perceptual-Propositional Evidence Conflicts](https://arxiv.org/abs/2609.06011)*

> 标签：#音视频问答 | #基准设计 | #多模态学习 | #音频分类 | #模型评估
>
> 评分：**8.3/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.5/1.5 | 可复现 0.4/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yen-Ting Piao：NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)
- Shu-Yun Chen：NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)
- Chin-Hui Chu：NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)
- Chun-Wei Chen：NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)
- Shih-Yun Shan Kuan：NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)
- Hung-yi Lee：NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)
- Yun-Nung Chen：NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE)

## 📌 核心摘要

全模态大语言模型需在单次前向中联合处理视觉、音频与文本，当三流证据冲突时模型会系统性偏向某一模态，且既有基准将知觉信号与命题陈述混在同一通道导致偏置归因混淆。Tri-PvP首先以认识论区分为视觉与音频分别构造知觉形态的真实图像与录音和命题形态的模板化陈述并渲染为图文或合成语音，文本恒为命题形态。随后将四种证据组合与同一标签三元组在动物等4个领域各500三元组上配对实例化并以开放式无偏问题呈现，使跨条件比较复用同一资产。最后用GPT-5.4 nano裁判将自由文本回答映射到含BIAS_IMAGE等8类偏置标签并量化偏置分布。与以往三模态冲突基准不控制证据形态不同，该设计实现了模态与证据形态的正交控制，使偏置可干净归因于模态与知觉-命题不对称而非标签不平衡。在OmniBench基准下，对比解码的准确率为37.4%相对基线解码的38.4%降低1.1个百分点且偏置分布重分配而非均匀下降。该结论适用边界受限于日常感知尺度的4个领域，扩展到科学图表等复杂命题尺度及带可靠性提示的指令场景尚未验证，推理开销上对比解码需额外一次前向计算且在单卡上完成全量评测约需24小时。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/MiuLab/Tri-PvP> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么、要回答什么、哪些信息必须原样保留

本解读面向刚进入语音与音频方向的研究生，目标是把 1 篇关于全模态大模型偏置的论文讲到可核对、可复述。输入是同时给出的 3 路信号：一路是图像，一路是音频，一路是文本，再加一个开放式问题。模型要做的是在 3 路标签互斥的情况下给出自由文本回答，评测者再判断回答究竟跟随了哪一路。必须保留的信息包括：证据形式的定义、样本如何保证 3 路标签互斥且均衡、评测如何把自由文本映射到 8 类标签、以及在何种条件下比较才算公平。

输出不是选择题选项，而是自然语言陈述，因此判断偏置不能只看关键词命中，需要语义匹配与冲突确认规则。后续各节按学习依赖展开：先澄清任务与已有路线的差异，再给出方法全景，然后拆组件与计算，接着讲构造与推理流程，最后落到实验条件、结果与可复现性。

对于初学者，先建立直觉：把模型想象成同时收到 3 张纸条，每张纸条写着不同答案，问题是同样的。理想行为是发现纸条矛盾后不轻易站队，而不是总信其中一张。论文的核心贡献就是让这 3 张纸条的书写方式可控，从而区分模型是偏爱某张纸条的来源，还是偏爱某种书写方式。

### 已有评测在测什么、为什么会把两种偏置混在一起

相关工作可按输入与目标分为 3 类。第一类是图文冲突评测，关注语言是否压制视觉，常用注意力分析或矛盾图文对来度量。第二类是音频文本冲突评测，关注大音频语言模型在音频与文本不一致时更信哪一路。第 3 类是 3 模态同时输入的评测，例如 CMM 与 MMA-Bench，前者把失败刻画为幻觉生成而非在受控冲突下度量信任哪一路，后者探测音频视觉错位时的关注点但未建立 3 路标签互斥的完全冲突。

这些工作的共同局限在于未分离证据形式。论文把证据形式定义为感知与命题两类：感知是不经语言中介的直接感官体验，命题是可判真假的陈述句内容。落在全模态模型上，图像的感知形式是自然照片，命题形式是把文字渲染成图片；音频的感知形式是真实录音，命题形式是用文本转语音合成的陈述句；文本天然是命题性的。

现有基准中视觉几乎全是感知、文本全是命题、音频混杂，导致测得的模态偏置天然混杂证据形式偏置。模型看似偏视觉，可能只是偏感知证据，而视觉恰好提供了更多感知证据。若不把 4 种图文声证据形式组合做匹配对照，就无法把偏置归因到模态本身。

因此本工作的对照价值在于：同输入 3 模态、同目标度量冲突下的信任、同监督的开放式回答，但新增对证据形式的正交控制，使比较条件对齐。后续方法全景将说明如何用匹配的反事实样本实现这种对齐。

### 要分离的两个偏置是什么、为什么必须用三路互斥冲突来测

问题可表述为：在图像、音频、文本 3 路同时给出且标签互斥的条件下，模型是否系统性偏向某 1 模态，以及这种偏向是否随证据形式改变。关键在于把模态偏置与证据形式偏置拆开。模态偏置是通道偏好，证据形式偏置是承载方式偏好，二者正交但在旧设计中纠缠。

为此需要构造 3 路互斥冲突：每个样本的 3 路标签互不相同，且所有标签与模态的组合在数据集中均衡，使得没有任何一路在先验上更可信。论文进一步把图像与音频各分为感知与命题两档，文本固定为命题，从而形成 4 种证据类型条件：PercI-PercA、PercI-PropA、PropI-PercA、PropI-PropA。同一标签三元组会在 4 种条件下复用相同素材的匹配反事实版本，使得跨条件比较基于同一组问题与标签，仅改变承载方式。

**模态偏置 × 证据形式偏置：** 模态偏置指模型在多路信号矛盾时系统性偏向某一输入通道，证据形式偏置指偏向感知或命题这种承载方式。二者需要联合控制是因为现有 3 模态评测中视觉多为感知、文本必为命题、音频混杂，导致测得的偏置无法归因；Tri-PvP 通过让图文声的证据形式正交变化，使两者可被分别度量。

在进入具体构造前，先通过示意图建立 3 路互斥与证据形式分档的直观对应，明确感知与命题在图文声中的不同呈现以及冲突如何导向偏置判定。

> **看图路径：** 1. 先看左侧 Image 与 Audio 两块如何各自分出 Perceptual 与 Propositional 两档；2. 对比图像命题档的文字框与音频命题档的波形加括号说明的呈现差异；3. 沿右侧从问题框到 AI 图标再到答案框与 BIAS_IMAGE 判定的箭头走一遍；4. 注意三路标签在示例中互斥且答案仅跟随图像的判定逻辑

[![原论文 Figure 1：Tri-modal conflict with perceptual (direct sensory) or propositional (declarative) evidence in…](https://arxiv.org/html/2609.06011v1/avdl-overview.png)](https://arxiv.org/html/2609.06011v1/avdl-overview.png)

*论文图 1。原论文 Figure 1:：“Tri-modal conflict with perceptual (direct sensory) or propositional (declarative) evidence in vision and audio, and propositional evidence in text; cross-modal disagreement may…”。*

该图左侧用蓝框展示图像的两种承载方式，左侧为猫的自然照片代表感知，右侧为写有 A cat is involved here 的文字图片代表命题，中间以 or 连接；中部橙框展示音频的两种承载方式，左侧为带狗图标的吠声波形代表感知，右侧为对应 The animal present is a dog 的合成语音波形代表命题；底部绿框展示文本仅有命题档。右侧从问题 What kind of animal is this 出发，经 AI 图标到答案 The animal is a cat，再经校验图标判定为 BIAS_IMAGE，说明即使 3 路标签互斥，模型仍可能只跟随图像。读图时要注意命题图像是白底文字而非场景，命题音频是合成陈述而非环境声，问题本身避免使用看或听等模态提示词。

### Tri-PvP 如何用匹配反事实把四种证据条件做成可比

Tri-PvP 的总体思路是先生成标签三元组与问题，再在 4 种证据条件下实例化同一三元组，复用相同素材以保证可比性。数据覆盖动物、情绪、环境、音乐 4 个日常感知域，每个域固定 500 个三元组，每个三元组在 4 种条件下各产生一个样本，因此每个域 2000 样本，全库 8000 样本。每个样本记为包含图像、音频、文本与问题的四元组，图像与音频各有感知与命题两档，文本恒为命题。

构造管线分为两支。感知分支从现成数据集取真实图像与录音，并做三重质量过滤：类别在域内感知可分、单样本仅含单一主体、人工复核确保无歧义，避免把分类难度误判为偏置。命题分支从人工撰写的句模板池实例化陈述句，图像侧用文本渲染器在白底上生成字卡，音频侧用 GPT-4o mini TTS 以多种声音合成，文本侧直接使用原句。问题设计满足两条约束：避免模态特定措辞以防提示偏向，并用 GPT-5.4 生成改写变体后人工复核；采用开放式而非选择题，避免预设选项或冲突确认选项引导模型。

在展开组件细节前，先通过管线总览图核对感知与命题两支如何汇入统一的样本结构，以及 Vision 与 Audio 的 or 切换如何实现 4 条件复用。

> **看图路径：** 1. 沿左侧 Source Dataset 与 Sentence Template Pool 两条支路看感知与命题的生成路径；2. 观察右侧 Data Sample 中 Vision 与 Audio 的 or 切换与 Text 固定为命题的布局；3. 核对每个样本如何同时包含标签与问题的四元组结构

[![原论文 Figure 2：Overview of the Tri-PvP dataset construction pipeline.](https://arxiv.org/html/2609.06011v1/pipeline5.png)](https://arxiv.org/html/2609.06011v1/pipeline5.png)

*论文图 2。原论文 Figure 2:：“Overview of the Tri-PvP dataset construction pipeline.”。*

该图左侧上方 Source Dataset 经箭头指向 Perceptual Data 的猫图与猫叫音频，下方 Sentence Template Pool 分两路经 Renderer 到 word card 与经 GPT-4o mini TTS 到 TTS speech，再加 text 与 question 共同汇入右侧 Tri-PvP Data Sample。右侧样本卡中 Vision 栏分 Perceptual image 与 Propositional image 两档并标注 label: dog，Audio 栏分 Perceptual audio 与 Propositional audio 两档并标注 label: cat，Text 栏固定为 There is a frog 并标注 label: frog，Question 栏为 What is the animal，中间以加号连接。该布局直观体现了同一三元组在 4 条件下复用素材的设计，使得跨条件比较时问题与标签不变，仅承载方式变化，从而把模态效应与证据形式效应分离。

### 从自由文本到偏置标签、从隐藏状态到对比解码，组件如何衔接

评测组件首先解决自由文本到偏置标签的映射。论文定义包含 8 个互斥类别的标签集，涵盖 3 类单模态偏置、3 类双模态偏置、无偏置与幻觉。单模态偏置对应回答仅匹配一路标签，双模态偏置对应匹配恰好两路，无偏置对应显式承认冲突或并列报告 3 路内容而不做定论，幻觉对应不匹配任何一路也不承认冲突。映射由大模型裁判完成，输入为回答、问题与 3 路标签，输出为 8 类之一。裁判使用 GPT-5.4 nano 并配以详细的语义匹配规则与示例，覆盖同义改写、部分提及不计入、多段回答分别判定、以及当两路标签相同时的同值规则。为保证可信度，作者在 800 样本上做分层人工复核，报告一致率为 97.1%。

**感知证据 × 命题证据：** 感知证据指不经语言中介的直接感官信号，负责提供可被视觉或听觉编码器直接捕捉的原始外观与声学模式；命题证据指可判真假的陈述句内容，负责通过文字渲染或语音合成承载语义主张。二者搭配的理由是同一模态内可承载不同证据形式，若不分离就会把对模态的偏好误判为对证据形式的偏好，组合后才能在同一标签冲突下对比模型更信任哪种承载方式。

第二个组件是层间线性探测，用于检验偏置是否已在表征中线性可分。做法是在不生成的前提下做 1 次前向，取出每层在最后提示词位置的隐藏状态，该位置在生成前已聚合全部模态信息。偏置标签被拆为 3 个二元目标，分别表示是否涉及图像、音频、文本，幻觉样本被排除。每层每模态训练一个带平衡类权重的逻辑回归，用分层切分与标准化隐藏状态，报告平衡准确率，随机基线为 50%。

**全模态输入 × 仅音频输入：** 全模态输入指同时给出图像、音频、文本与问题的完整前向，产生包含主导模态先验的对数分布；仅音频输入指移除图像与文本后仅保留音频与问题的对照前向，产生更贴近音频证据的分布。对比解码将二者按加权差分组合，目的是把被视觉压制的音频信号显式放大，同时用自适应合理性约束避免放大不可信词，从而在冲突时提升不偏向任何单一模态的回应比例。

第 3 个组件是对比解码，作为推理时诊断性干预。标准解码从全模态输入得到对数分布，仅音频输入得到另一分布，对比后的对数分布按加权差分组合，并用自适应合理性约束限制采样到在全模态分布下足够可信的词上。设计意图是把被低估的音频证据显式放大，同时把被视觉主导的偏置分布降权，从而提升冲突下的无偏置回应比例，而不更新参数。

为把符号与计算目标说清楚，先看裁判映射与对比解码的公式。裁判把回答与 3 路标签映射为 8 类之一，目标是可复现的偏置判定。

\[\hat{y}=\mathcal{J}(r,x_{Q},\ell_{x_{I}},\ell_{x_{A}},\ell_{x_{T}})\in\mathcal{Y}.\]

该式中 r 为模型自由文本回答，xQ 为问题，3 路标签为图像、音频、文本的真实标签，J 为裁判模型，输出落在 8 类标签集中。实现上通过提示词中的匹配规则与示例约束裁判行为，而非简单关键词匹配。

对比解码的计算目标是在每一步解码时提升音频依据的候选词并抑制视觉主导的候选词。

\[\mathbf{z}_{\text{cd}}=(1+\alpha)\,\mathbf{z}_{\text{audio}}-\alpha\,\mathbf{z}_{\text{full}},\]

式中 z_full 为全模态输入的下一词对数分布，z_audio 为仅音频输入的分布，alpha 控制放大与抑制的强度，论文取 0.5，beta 控制合理性约束的阈值，论文取 0.1。实现上对每个时间步计算两个分布的加权差分，再在满足合理性约束的词表内采样。需要强调的是，该干预不对模型参数做更新，也不改变训练目标，仅在推理时改变对数几率的组合方式。

### 本研究是否训练新模型、实际做了哪些计算与生成

本研究未训练新的全模态大模型，也未对被测模型做微调。所有被测模型均为现成权重，推理时按官方推荐的解码参数运行，未使用自定义系统提示，随机种子固定。开源模型通过 vLLM 框架运行，闭源模型通过官方接口调用。

实际计算分为 3 类。第一类是数据构造计算：感知数据从 ImageNet、ESC-50、KDEF、CREMA-D、Open Images V7、Medley-solos-DB 等来源筛选，命题数据通过句模板实例化后经文本渲染器与 GPT-4o mini TTS 合成，问题经 GPT-5.4 改写后人工复核。第二类是评测计算：对每个样本按图像、音频、文本、问题的顺序拼接提示，模型生成自由文本回答，再由裁判模型按 8 类标签判定偏置。第 3 类是分析计算：线性探测需对每个模型每层提取隐藏状态并训练逻辑回归，对比解码需在每一步做 2 次前向以得到全模态与仅音频的对数分布并按公式组合。

参数冻结与更新情况按原文交代：被测模型参数冻结，仅探测器与解码组合在推理时引入额外计算；未报告梯度路径与优化步骤，因为不存在对被测模型的梯度更新。缺项在于对比解码的 alpha 与 beta 仅在单模型上取固定值，未做系统敏感性分析，跨模型泛化性也未在论文主实验中展开，这些在局限节会进一步说明。

总体上，本工作的可复现性依赖于公开的代码与数据构造脚本、固定的解码参数、以及裁判提示词的完整公开，而非依赖重新训练。后续实验条件节将明确被测模型、证据条件与输入顺序等对照设置。

### 在什么模型、什么证据条件与什么顺序下比较、用什么指标

被测模型为五款全模态大模型：Qwen2.5-Omni-7B、MiniCPM-o 4.5、Qwen3-Omni-30B-A3B-Thinking、Gemma 4 E4B 与 Gemini 3 Flash，其中后三款在思考模式下评测，推理链在裁判前被剥离，仅对最终答案判定。每个模型在 4 种证据类型条件下测试，输入顺序默认为图像、音频、文本、问题，符合多数模型官方文档的惯例，顺序效应另做 6 种排列的对照。

数据与协议方面，Tri-PvP 的 8000 样本按域与条件均衡分布，每个域 500 三元组在 4 条件下复用素材，确保跨条件比较的公平性。问题为开放式且避免模态提示词，回答由裁判映射到 8 类标签，指标为各类偏置的占比与无偏置占比，方向上偏置占比越低越好、无偏置占比越高越好，幻觉占比越低越好。统计上报告 95% 置信区间，裁判一致性经 800 样本人工复核验证。

额外分析包括两项。线性探测在 Gemma4 与 Qwen2.5 上进行，逐层报告 3 路二元目标的平衡准确率，随机基线 50%。对比解码在 Gemma4 上进行，比较基线解码与对比解码在 4 条件下的偏置分布，并用 OmniBench 的 1142 道 3 模态选择题检验通用能力是否受损。

为核对数据规模与均衡性，先看样本量与条件构成的对照，明确每个域与每种证据条件下的样本数是否对齐。

| 数据维度 | 指标 | 取值 | 说明 | 覆盖域 |
| --- | --- | --- | --- | --- |
| 总样本量 | 样本数 | 8,000 | 全库四域 4 个条件 | animal 等四域 |
| 单域规模 | 样本数 | 2,000 | 每域 500 三元组×4 个条件 | 单域 |
| 单条件单域 | 样本数 | 500 | 同一三元组复用素材 | 单条件 |
| 证据条件 | 组合数 | 4 | PercI-PercA 等 4 种 | 全库 |
| 标签互斥 | 约束 | 互斥 | 3 路标签互不相同 | 每样本 |

该表用于核对数据规模与均衡性，指标方向为规模越大覆盖越全但需保持均衡。表后需要强调：该表的均衡设计是后续所有偏置比较的前提，若标签与模态组合不均衡，则任何偏置差异都可能被标签先验污染；论文通过匹配反事实与均衡三元组避免了这一污染，使后续主结果中的视觉主导与证据形式不对称可被归因到模型行为而非数据偏斜。

为核对主结果中偏置分布的普遍性与峰值，再看 5 模型在 4 条件下的关键占比对照，明确视觉主导与无偏置峰值的具体数值。

| 模型 | 条件 | 指标 | 取值 | 对比含义 |
| --- | --- | --- | --- | --- |
| Qwen2.5 | PropI-PropA | NO_BIAS | 60.1% | 全命题下峰值 |
| MiniCPM | PropI-PropA | NO_BIAS | 13.6% | 次高 |
| Gemini3 | PropI-PropA | NO_BIAS | 11.6% | 中等 |
| Gemma4 | PropI-PropA | NO_BIAS | 7.2% | 较低 |
| Qwen3 | PropI-PropA | NO_BIAS | 1.5% | 最低 |

该表前已提出比较问题：在同一证据条件下不同模型的无偏置能力是否可比，指标方向为 NO_BIAS 越高越好。表后需指出：即使在最有利于无偏置的全命题条件下，多数模型仍以视觉偏置为主，Qwen3 几乎不产生无偏置回应，且 BIAS_IMAGE 在 18 个条中主导、BIAS_AUDIO 在 18 of 20 bars 中最低且 typically below 10%，说明仅靠证据形式切换不足以逆转偏置，这为后续的表征探测与解码干预提供了动机。

硬件与耗时方面，Qwen3 在单张 H100 上约 40 分钟完成全库，Qwen2.5 等在单张 RTX 5090 上约 1.5 小时，探测提取与训练约 30 分钟，对比解码因需双前向且未受益于 vLLM 加速约需 24 小时，这些成本是复现时需要预留的预算。

### 主结果在说什么、证据形式如何不对称地调节偏置

主结果围绕两个判断展开：视觉偏置是否主导，以及证据形式是否以不对称方式调节偏置。

在 4 条件与 5 模型的 20 个柱状条中，BIAS_IMAGE 在 18 个条中为占比最高的单模态偏置，幅度常超过 60%，而 BIAS_AUDIO 在 18 个条中为最低，常低于 10%，BIAS_TEXT 居中。两个例外均出现在 Qwen2.5 的 PropI 条件下，此时主导类别转为 BIAS_TEXT 或 NO_BIAS。这一分布说明视觉流在大多数模型与条件下不成比例地驱动最终答案，而音频是最少被跟随的一路。

证据形式的调节呈现系统性不对称：多数模型在感知图像下图像偏置更强，例如 Qwen2.5 在 PercI-PropA 下 BIAS_IMAGE 为 49.7% 而在 PropI-PropA 下仅 12.7%；相反，音频偏置在命题音频下上升，最典型的是 Gemma4 从 PercI-PercA 的 0.9% 升至 PercI-PropA 的 25.4%。论文将此与预训练目标联系起来：视觉编码器多以捕捉感知内容为目标，音频编码器常以语音识别类目标初始化，更擅长恢复语言内容，因此各自更偏好与其优化目标一致的证据形式。

另一个一致现象是无偏置回应在全命题条件下达到峰值，Qwen2.5 在 PropI-PropA 下为 60.1%，MiniCPM 为 13.6%，Gemini3 为 11.6%，Gemma4 为 7.2%，Qwen3 为 1.5%，而在其他条件下多低于 10%。这表明当仅提供命题输入时，模型更少隐式偏向单一通道，转而显式指出冲突。

在查看具体数值前，先通过堆叠条形图总览 5 模型在 4 条件下的完整偏置分布，明确蓝色 BIAS_IMAGE 段与其他颜色段的相对长度以及灰色 NO_BIAS 段的扩张位置。

> **看图路径：** 1. 按四象限对比 PercI-PercA 到 PropI-PropA 条件下堆叠条的变化；2. 在每个模型行内比较蓝色 BIAS_IMAGE 段与其他颜色段的相对长度；3. 观察 Qwen2.5 在 PropI 条件下灰色 NO_BIAS 段的显著扩张

[![原论文 Figure 3：Modality bias distribution across five models under four evidence-type conditions, with detailed…](https://arxiv.org/html/2609.06011v1/modality_bias_stacked_bar.svg)](https://arxiv.org/html/2609.06011v1/modality_bias_stacked_bar.svg)

*论文图 3。原论文 Figure 3:：“Modality bias distribution across five models under four evidence-type conditions, with detailed statistics in Appendix G.”。*

该图分四象限排列，左上为 PercI-PercA，右上为 PercI-PropA，左下为 PropI-PercA，右下为 PropI-PropA。每行对应一个模型，横轴为 Percentage (%)，图例自左至右为 BIAS_IMAGE 蓝色、BIAS_AUDIO 橙色、BIAS_TEXT 绿色、NO_BIAS 深灰、HALLUCINATION 浅紫等。观察时先在同一模型内横向比较四象限中蓝色段长度的变化，再纵向比较不同模型在同一象限中橙色段的差异。可见 Qwen2.5 在右下象限灰色段显著扩张至 60.1%，而 Gemma4 在右上象限橙色段抬升至 25.4%，这些视觉差异对应前述不对称调节的数值。图中未显示置信区间，详细数值在附录表格中给出，解读时应结合区间判断差异是否稳健。

输入顺序的稳健性也在 2 模型上验证。Qwen2.5 表现出时近偏置，越靠近问题的模态越易被跟随；Gemma4 则呈现更复杂的首位与末位偏好，且随证据条件变化。尽管存在位置偏好，6 种排列平均后视觉主导与音频在命题条件下更易被跟随的结论保持不变，说明主结果不依赖特定顺序。

### 偏置何时已在表征中可分、对比解码能缓解多少又带来什么副作用

本节把两项深入分析当作消融与反证：层间线性探测检验偏置是否在生成前已可分，对比解码检验仅靠推理时干预能走多远。

线性探测在 Gemma4 与 Qwen2.5 上进行，逐层对图像、音频、文本 3 路二元目标做逻辑回归，报告平衡准确率。结果显示图像相关的探测器在 2 模型与 4 条件下始终居于前列，Gemma4 中图像与文本探测器峰值相当而音频最低，在 PercA 条件下接近随机基线，仅在 PropA 条件下才接近其他两路；Qwen2.5 中图像探测器在 PercI 条件下峰值约 80%，对应输出层最强的图像偏置。多数探测器在前两层已超过随机基线，且准确率早早达到平台而非仅在末层突增，说明偏置信息在早期表征中已线性可解。

例外是 Gemma4 在 PropI-PercA 下的音频探测器仅在零散中间层出现高于基线的尖峰，表明音频偏置信号在该条件下编码不稳定。2 模型的层间轨迹不同：Gemma4 在中后层逐步增强并达峰，Qwen2.5 在最初几层即接近最终准确率，提示不同模型在不同深度编码偏置。

平衡准确率的定义有助于理解上述数值的含义。

\[\text{BalAcc}(g^{(l)}_{m})=\frac{1}{2}\!\left(\frac{\text{TP}}{\text{TP}+\text{FN}}+\frac{\text{TN}}{\text{TN}+\text{FP}}\right),\]

式中 TP、TN、FP、FN 分别为真阳性、真阴性、假阳性、假阴性，平衡准确率为两类召回率的均值，随机基线为 50%，不受类别不平衡影响。实现上对每层隐藏状态做标准化后训练逻辑回归，并用平衡类权重与分层切分。

为量化对比解码的缓解幅度与副作用，先看 Gemma4 在 4 条件下的偏置变化对照，明确图像偏置下降与无偏置上升的具体数值。

| 条件 | 指标 | 基线 | 对比解码 | 变化方向 |
| --- | --- | --- | --- | --- |
| PropI-PropA | BIAS_IMAGE | 74.9% → 38.8% | 38.8% | 下降 |
| PropI-PercA | BIAS_IMAGE | 74.4% → 39.6% | 39.6% | 下降 |
| PropI-PropA | NO_BIAS | 7.2% → 38.6% | 38.6% | 上升 |
| 全条件 | BIAS_IMAGE | 下降 | 下降 | 均下降 |
| 全条件 | NO_BIAS | 上升 | 上升 | 均上升 |

该表前已提出问题：仅靠解码层干预能否在不重训的情况下提升无偏置比例，指标方向为 BIAS_IMAGE 越低越好、NO_BIAS 越高越好。表后需解释：收益是图像偏置显著下降且无偏置上升，尤其在命题视觉条件下更明显，最大降幅出现在 PropI-PropA 与 PropI-PercA；代价是文本偏置残余上升，且仍有约四成图像偏置未被消除，说明表层干预不充分，需要更根本的表征层缓解策略。

对比解码在 Gemma4 上进行，比较基线解码与对比解码在 4 条件下的偏置分布。图像偏置在 4 条件下均大幅下降，最大降幅出现在 PropI-PropA 的 74.9% 到 38.8% 与 PropI-PercA 的 74.4% 到 39.6%，无偏置比例在 4 条件下均上升，最大增幅同样在 PropI-PropA 的 7.2% 到 38.6%。证据类型进一步调节效果：两个 PropI 条件下的降幅与增幅均大于 PercI 条件，说明该干预对命题视觉内容根植的图像偏置更有效。副作用是残余文本偏置，放大仅音频分布并未把图像偏置重定向到音频，部分被压制的质量转而表现为文本偏置，增幅在 2.2% 到 13.5% 之间，且在 4 条件下一致出现。即使经过干预，BIAS_AUDIO 在各条件下仍为最低的偏置类别，说明放大操作抑制了图像先验但未过度抬升音频承诺。

为检验通用能力是否受损，再看 OmniBench 上的总体准确率对照，明确偏置缓解是否以大幅性能下降为代价。

| 评测集 | 题目数 | 基线准确率 | 对比解码准确率 | 变化 |
| --- | --- | --- | --- | --- |
| OmniBench 全量 | 1142 | 38.4% | 37.4% | −1.1 percentage points |
| 正确数 | 1142 | 439/1142 | 427/1142 | 下降 12 题 |
| 正确率 | 1142 | 38.4% | 37.4% | 微降 |
| 变化幅度 | 1142 | 基线 | 对比解码 | 小幅 |
| 结论 | 1142 | 保持 | 保持 | 未大幅受损 |

该表前已说明要检验偏置缓解是否以通用能力大幅下降为代价，指标方向为准确率越高越好。表后需指出：总体下降约 1.1 个百分点，变化不均，推理类任务有所提升而依赖感知定位的任务下降，说明对比解码在不同任务类型上重新分配错误而非均匀降低性能，这与其作为针对性偏置干预而非通用解码改进的定位一致。

下图示例展示了 PropI-PropA 条件下同一输入在基线与对比解码下的回应差异，左侧 3 路标签互斥，右侧基线仅输出 piano 而对比解码列举 3 路并拒绝定论。

> **看图路径：** 1. 对比左侧 PropI-PropA 条件下三路标签互斥的输入配置；2. 比较右侧 Baseline 仅输出 piano 与 CD 下列举三路并拒绝定论的差异；3. 注意 CD 回应中如何显式标注每路标签来源与不确定性表述

[![原论文 Figure 6：An example of Gemma4’s responses under baseline and CD (PropI-PropAcondition; image label: piano,…](https://arxiv.org/html/2609.06011v1/CD_case-study.png)](https://arxiv.org/html/2609.06011v1/CD_case-study.png)

*论文图 6。原论文 Figure 6:：“An example of Gemma4’s responses under baseline and CD (PropI-PropAcondition; image label: piano, audio label: flute, text label: clarinet).”。*

该图左侧蓝色 Image 框内为 This corresponds to a piano 的命题图像，橙色 Audio 框内为 The instrument is a flute 的命题音频波形，绿色 Text 框内为 It should be a clarinet，底部问题为 Determine the musical instrument。右侧上方 Baseline 框仅给出 piano，下方 CD 框则分条列出 Piano、Flute、Clarinet 3 路来源并说明 Without more context, it is impossible to definitively determine which instrument is correct。观察时注意 CD 回应如何显式承认冲突并避免站队，这对应从 BIAS_IMAGE 到 NO_BIAS 的类别迁移。该案例不能推广为所有样本均如此，论文报告的总体分布显示仍有约 38.8% 的图像偏置残留。

**线性探测 × 对比解码：** 线性探测负责在不改变模型参数的前提下检验偏置是否已在线性可分的表征中编码，逐层读取最后提示词位置的隐藏状态并做逻辑回归；对比解码负责在推理时通过放大被低估模态的对数几率来抑制主导模态。搭配原因在于前者定位偏置出现的表征深度，后者检验仅靠解码层干预能否在不重训的情况下改变输出分布，二者共同说明偏置是表征层问题而非仅输出层选择问题。

该桥段强调：探测说明偏置已在线性表征中编码，解码干预说明仅靠对数几率重加权可部分缓解但会引入新的文本偏置，二者共同支持论文关于需要超越表层干预的判断。

### 哪些边界未被覆盖、哪些推断仍需验证

论文在结论与局限中明确了若干未覆盖边界。第一，数据仅聚焦日常尺度，涵盖动物、情绪、环境、音乐等可直接感知的场景，未涉及需要社会累积知识或复杂图表与科学数据的更广认识尺度，因此在这些尺度下的冲突行为仍待验证。第二，问题设计刻意保持偏置中性，避免模态特定措辞并采用开放式，若改为要求枚举所有来源、强制单选或提供来源可靠性提示，偏置表现可能发生变化，这类指令效应未在主实验中系统评估。第三，对比解码作为诊断性检验仅在单模型上以固定 alpha 与 beta 验证，且每步需额外 1 次前向，计算成本更高，未做系数敏感性分析与跨模型泛化评估。

此外，证据形式不对称的解释仍属假设性。论文提出视觉编码器多以感知内容为目标、音频编码器常以语音识别目标初始化，因而更偏好与其优化目标一致的证据形式，但未提供因果性验证，例如通过改变预训练目标或编码器初始化来检验偏置是否随之变化。线性探测显示偏置在早期可分，但未进行表征层的因果干预，无法确定哪些层或哪些注意力路径真正导致输出偏置。

未测量项包括：误判率在真实噪声与不一致输入下的分布、推理延迟与成本在不同硬件与批量下的实际表现、以及幻觉与无偏置细粒度行为在不同模型与条件下的稳定性。论文对无偏置回应的细粒度分析显示，不同模型的无偏置构成差异很大，有的以显式冲突承认为主，有的以并列报告为主，有的以拒绝回答为主，因此把无偏置简单视为理想行为时需结合具体构成来解读。

总体上，已验证的是视觉主导与视听不对称在受控条件下的稳健性，以及表征可分性与解码干预的有限有效性；待验证的是更广尺度、非中性指令、以及更根本的缓解策略的有效性与代价。

### 若要复现与核对，应按什么顺序做什么、去哪里找什么

复现应按数据、评测、分析 3 阶段推进，每阶段核对关键产物。

数据阶段先获取代码与数据。论文声明代码与基准已公开，资源状态为可用，链接指向 GitHub 仓库。需按仓库说明下载感知源数据并遵守各自许可，非商业限制适用于包含 ImageNet 与 ESC-50 的组合基准。接着按管线生成命题数据：用句模板池实例化陈述句，经文本渲染器生成字卡图像，经 GPT-4o mini TTS 以 4 种声音合成语音，问题经 GPT-5.4 改写后人工复核。核对点是每个域 500 三元组在 4 条件下复用素材，且 3 路标签互斥且均衡，若复现时标签出现重复或分布不均，则后续偏置度量不可比。

评测阶段按默认顺序图像、音频、文本、问题拼接提示，模型以贪心或官方推荐参数生成开放式回答，推理链在裁判前剥离。裁判使用 GPT-5.4 nano 并加载论文附录中的完整提示词，覆盖语义匹配、同值规则、多段回答与无偏置阈值等细节。核对点是裁判在分层抽样的 800 样本上与人工一致率约为 97.1%，若复现时一致率显著偏低，需检查提示词是否完整加载或标签是否正确传入。

分析阶段先做层间线性探测：在不生成的前向下提取每层最后提示词位置的隐藏状态，标准化后按 3 路二元目标训练带平衡权重的逻辑回归，报告平衡准确率并以 50% 为随机基线。核对点是多数探测器在前两层已超基线且图像探测器居前，若复现时出现末层才突增，需检查是否误取了生成阶段的隐藏状态。再做对比解码：在每步计算全模态与仅音频的对数分布，按加权差分与自适应合理性约束组合，alpha 取 0.5、beta 取 0.1。核对点是 Gemma4 在 PropI-PropA 下图像偏置从 74.9% 降至 38.8% 且无偏置从 7.2% 升至 38.6%，若复现时降幅显著不同，需检查是否正确移除了图像与文本流以及是否正确应用了合理性约束。

硬件预算方面，Qwen3 在单张 H100 上约 40 分钟，Qwen2.5 等在单张 RTX 5090 上约 1.5 小时，探测约 30 分钟，对比解码约 24 小时，需预留相应时间。最后用 OmniBench 的 1142 题检验通用能力，核对总体准确率从 38.4% 到 37.4% 的微小变化是否复现。

常见误解是把证据形式偏置误作模态偏置，或把对比解码的文本偏置上升误判为音频偏置被过度放大。复现时应分别核对 4 条件下的 3 路偏置占比与无偏置占比，避免仅看单一指标而忽略再分配效应。

### 何时值得参考本工作、还能补哪些验证

当你的应用需要在图文声 3 路同时输入且可能出现矛盾时，本工作的分离思路值得参考。典型场景包括日常助手对照片、环境声与用户文字描述的综合判断，或多传感器输入不一致时的可靠性评估。若你的评测曾发现模型总信图像，Tri-PvP 的 4 条件对照可帮助判断这是对视觉通道的偏好，还是对感知证据的偏好，进而决定是改进视觉编码器、增强音频感知能力，还是调整证据形式的呈现方式。

值得尝试的条件是：3 路标签可被明确定义且互斥、问题可被设计为开放式且避免模态提示、且有能力通过渲染与 TTS 生成匹配的命题对照。若你的数据以复杂图表或专业知识为主，则需先扩展证据形式的定义与模板，再套用本工作的对照逻辑。

复现与改进的下一步验证包括：扩展到更广认识尺度与非中性指令，检验偏置是否随任务难度与指令变化；对对比解码做系数敏感性与跨模型评估，并探索表征层的因果干预而非仅解码层重加权；补充对音频感知能力的针对性增强，例如在预训练中加强非语言声学线索的建模，以缓解音频在感知条件下被低估的问题。

最终要记住的判断是：视觉主导在多数模型与条件下稳健存在，但可被证据形式调节而非逆转；偏置在早期表征中已线性可分，表层干预可部分缓解但会引入新的文本偏置，提示需要更根本的缓解策略。这些判断均建立在匹配反事实与均衡三元组的公平比较之上，脱离该比较条件时不宜直接推广。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.06011)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-10/)
