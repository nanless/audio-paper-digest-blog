---
title: "OmniReasoning: Pushing the Limits of Audio-Visual Joint Reasoning"
date: 2026-10-11
draft: false
tags: [音视频问答, 强化学习, 音视频, 基准测试, 数据集]
categories: [论文速递]
description: "论文针对单模态可解的音视频评测无法检验联合推理的问题，用 OmniQA 构造带时间戳证据链的问答与 112K 加 19K 训练数据，并用 MFSD 做线索条件下的 token 级信用分配，在 OmniVideoBench 达 50.0% 且在自建基准达 42.5%，代价是多路线索打分与验证流水线开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.39490"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "听见与看见必须连起来：OmniReasoning 如何构造与训练音视频联合推理"
paper_digest_original_title: "OmniReasoning: Pushing the Limits of Audio-Visual Joint Reasoning"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.39490"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.39490.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.8
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文针对单模态可解的音视频评测无法检验联合推理的问题，用 OmniQA 构造带时间戳证据链的问答与 112K 加 19K 训练数据，并用 MFSD 做线索条件下的 token 级信用分配，在 OmniVideoBench 达 50.0% 且在自建基准达 42.5%，代价是多路线索打分与验证流水线开销。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junming Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuxuan Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhenxin Lei"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuxin Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ruixun Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yinsong Yan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ling Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Minghao Han"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yunfei Chu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shun Lei"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xueyao Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qize Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jin Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yiwu Zhong"}]
paper_digest_abstract_sha256: "9b4012bf051d32a5045b8f1e7f4a26f4bacc7d081e3780efbff7d5182f480319"
paper_digest_sidecars: {"citation.bib":{"sha256":"8c128def4e0fb194e5807eabf9da5fd5eed9238ffaac214a0f3371e7d1bab7e5","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2609-39490/citation.bib"},"citation.json":{"sha256":"3dc78aab1cf70c38c7f389fd3ee4f0eac29c86a1758ea948b802944b9134e453","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2609-39490/citation.json"},"citation.ris":{"sha256":"a02fc65ab960e092a5748869ea03b7c4ca501dba35011334a3dd376e84614dac","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2609-39490/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"82afdf548d0b7f9862332307435e07948dccf6dd3386cc5463f7c8eda0b672c1","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2609-39490/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "dfb9cfdbc4a5b9b06dfe6d638821b90ecfbed54515e70703daac6783caec70b8"
paper_digest_api_reader_plan_sha256: "9975d31293e791e84fb1dc843c91423e51229bb000c0240ee7765125a9d6d4d4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "1dac033ea6fc53516bf2b69bae1b59b7f9b74b34b6e66d9f9e287d2f25f8e0bd"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "ac4738c4dc9d78a35befeb63f7b2855f8abe5e65c969df421fbe87f6650f14f1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "1a7616d2cc3d2e4ffaaf4b88da4537af5fe5c9e34edec55647257f6a9db63014"
paper_digest_api_reader_author_count: 14
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6025ecc76b570438a426ee4836c83da1ffd9f6c94cfff6956b4e3ef6592af1f9"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 听见与看见必须连起来：OmniReasoning 如何构造与训练音视频联合推理

> 英文题目：*[OmniReasoning: Pushing the Limits of Audio-Visual Joint Reasoning](https://arxiv.org/abs/2609.39490)*

> 标签：#音视频问答 | #强化学习 | #音视频 | #基准测试 | #数据集
>
> 评分：**7.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Junming Lin：机构信息未在 arXiv HTML 中可靠披露
- Yuxuan Wang：机构信息未在 arXiv HTML 中可靠披露
- Zhenxin Lei：机构信息未在 arXiv HTML 中可靠披露
- Yuxin Liu：机构信息未在 arXiv HTML 中可靠披露
- Ruixun Liu：机构信息未在 arXiv HTML 中可靠披露
- Yinsong Yan：机构信息未在 arXiv HTML 中可靠披露
- Ling Wang：机构信息未在 arXiv HTML 中可靠披露
- Minghao Han：机构信息未在 arXiv HTML 中可靠披露
- Yunfei Chu：机构信息未在 arXiv HTML 中可靠披露
- Shun Lei：机构信息未在 arXiv HTML 中可靠披露
- Xueyao Zhang：机构信息未在 arXiv HTML 中可靠披露
- Qize Yang：机构信息未在 arXiv HTML 中可靠披露
- Jin Xu：机构信息未在 arXiv HTML 中可靠披露
- Yiwu Zhong：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

现实视频问答的难点在于答案分散在所听到的语音和所看到的画面中，模型需要把跨事件的线索连成证据链，单看一侧模态会丢失必要条件。论文构建评测基准（英文全称 OmniReasoningBench）来固定这种依赖，包含视频内推理和把视频所得规律用于新情景的视频外推理两类问题，每题附参考答案和证据链。数据引擎（英文全称 OmniQA）把视频切分为事件并分别生成带时间戳的音频描述和视觉描述，再生成问题、参考答案和连接观察与中间推断的依赖链，经过结构校验、答案校验、媒体校验和单模态捷径筛查后保留样本。保留的时间戳线索一方面用于扩展成监督微调所需的思考过程，另一方面作为特权文本线索供强化学习阶段评分。学习方法（英文全称 Modality-Factored Self-Distillation，缩写 MFSD）在无特权线索时采样多个回答，再用同一行动者模型在无线索、音频线索、视觉线索和联合线索四种条件下计算词元似然，用联合增益与去均值后的非加性交互组合成词元分数并映射为优势权重。与基线相比，所提模型在 OmniVideoBench 上达到 50.0%准确率，在 OmniReasoningBench 上达到 42.5%准确率，分别超过基础模型 Qwen3-Omni-30B-A3B-Thinking 12.8 和 9.3 个百分点。该结论适用于需要音频与视觉互补的视频问答及部分长视频理解，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://pku-value-lab.github.io/OmniReasoning-Homepage> → <https://pku-value-lab.github.io/OmniReasoning-Homepage/> — 链接可访问（HTTP 200）

- 代码相关资源：<https://github.com/PKU-VaLuE-Lab/OmniReasoning> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的是什么输入与输出问题

这篇论文处理的是日常视频理解中的音视频联合推理。输入是一段同时包含声音与画面的视频，外加一个文字问题，有时还附一张新图或新表格。目标是输出选择题选项或开放问答的答案，并且推理过程必须同时用到听到的证据与看到的证据。必须保留的信息是证据到答案的依赖关系，例如谁说了哪句话、画面在哪个时间戳显示了哪个日期或物体，以及中间的数值换算。

论文用母亲年龄与戒指刻字的例子说明：听到八十七岁、看到日历年份才能算出生年，再与戒指刻字年份相减，缺任何一边都无法得出二十年的差距。读者可以把任务理解为带时间戳的多跳问答，只是跳数必须跨模态。

**视频内推理 × 超视频推理：** 视频内推理指答案完全由视频中跨事件的音频与视觉证据链推导出来，超视频推理指先从视频中提炼规则再应用到新的图形、表格或数值条件；前者考跨时间对齐，后者考知识迁移，二者搭配覆盖了从证据连接到应用的完整联合推理，组合后基准不再只是记忆画面内容。

论文把这种能力分成两种考查形式。视频内推理要求在视频内部连接跨事件的观察，例如用口播确定看哪个物体，用动作确定听哪句话。超视频推理要求把视频里学到的规则搬到新情景，例如口播加演示确立规则，再应用到新示意图。两种形式都配有参考答案与证据链标注，问题的构造原则是单模态不足以求解。理解这一点是理解后文基准、数据与方法的起点，因为所有设计都围绕让联合成为必要条件展开。

### 已有评测与数据为何不够联合

近年来出现了支持音频与视觉统一理解的全模态大语言模型，例如文中提到的 Qwen-Omni 系列与 Nemotron 3 Nano Omni 等，评测侧也有 WorldSense、Daily-Omni、OmniVideoBench、LVOmniBench 与强调跨模态依赖的 JointAVBench。论文的判断是，这些评测名义上是全模态，但并未保证题目必须联合求解。作者用只给视觉不给音频的消融来说明：在这类基准上，仅看画面仍能答对相当比例的题目，因此高分可能来自强的单模态理解，而非真正的跨模态整合。

数据侧也有保留跨片段关联与音视频对应的工作，例如 OmniVideo-100K 用实体锚定脚本，OmniVideo-R1 做跨模态筛选，但论文认为它们没有把显式证据依赖、依赖链与分模态线索同时用于问题构造、思维生成与强化学习打分。方法侧的 GRPO、GSPO 等偏重结局奖励，Video-R1 等把强化学习用于视频推理，RLSD 把附加上下文转成 token 级反馈，但都没有显式建模音频与视觉结合才产生的增益。本文的定位就是补上从评测定义、数据结构到学习目标的一整条联合证据链。

### 什么样的题目才算必须联合

论文给出了可操作的筛选标准。候选题目要经过问题-only、仅音频、仅视觉、音视频联合 4 种条件的检验，只有联合条件答对而 3 种受限条件都答错才保留。线索本身还要经过媒体验证，即每条音频线索要能在对应音频片段中找到，每条视觉线索要能在对应画面片段中找到，结构上还要检查依赖图、字幕引用与时间戳是否合法。这个定义把必须联合从口号变成可执行的流程。它的意义在于排除两类捷径：一是常识或语言先验直接猜对，二是单模态线索泄露答案。

教学例子是戒指年份题：单独听到年龄不知道当前年份，单独看到日历不知道年龄，只有把二者相减再与刻字比较才能得到答案。论文还报告了在视频内推理上，联合输入超过了单模态或 oracle 的表现，超出幅度在多个模型与两种题型上达到约十到二十多个百分点，这被用作基准确实需要整合互补证据的证据。需要注意，该结论依赖于所用的求解器与验证器实现，换模型或换验证方式，单模态可解比例会变化。

### 基准数据方法三部分如何分工

全文框架叫 OmniReasoning，包含三部分。第一部分是评测基准 OmniReasoningBench，共 1150 道选择与开放题目，覆盖视频内推理与超视频推理，用于检验是否连接互补证据。第二部分是数据引擎 OmniQA，自动从证据出发构造问答、时间戳线索与依赖链，除基准外还产出训练用的 OmniReasoning-SFT-112K 与 OmniReasoning-RL-19K。第三部分是学习方法 MFSD，一种在位自蒸馏方法，对同一条采样回答在不同线索上下文下打分，分离单条线索贡献与跨模态交互，做 token 级信用分配。

三者的连接点是显式的分模态证据：引擎写出音频文本线索与视觉文本线索，基准用它们保证题目必须联合，MFSD 用它们在强化学习阶段提供特权上下文。训练时先用合成思维过程做监督微调，再用保留的人验问题与证据标注做强化学习。下面这张总览图把例子、引擎、基准分布与方法对比放在一起，适合先建立整体印象。

读图说明：这张总览图左上是具体问答例子，左下是新旧基准在仅视觉与联合输入下的对比，中上是数据引擎流程，右上是方法对比示意，右下是主结果提升，先按从左到右从上到下的顺序把握各模块输入输出再细看箭头含义。

> **看图路径：** 1. 先看左上母女生年与戒指年份例子中音频与视觉各提供哪个数字；2. 再看左下仅视觉与音视频联合在新旧基准上的柱状差距；3. 最后看右上 GRPO 与 RLSD 小人与 MFSD 剩余增益箭头的含义

[![原论文 Figure 1：OmniReasoning: a benchmark, data engine and learning method for audio-visual joint reasoning.](https://arxiv.org/html/2609.39490v1/teaser_pptx_new.png)](https://arxiv.org/html/2609.39490v1/teaser_pptx_new.png)

*论文图 1。原论文 Figure 1:：“OmniReasoning: a benchmark, data engine and learning method for audio-visual joint reasoning.”。*

图中左上展示了音频提供母亲年龄、视觉提供日历与刻字的分工，左下用柱状对比说明旧基准仅视觉已能答对不少，而新基准去掉音频后准确率大幅下降，中上把字幕、问题生成、验证与思维生成串成流水线，右上用登山路径比喻 GRPO 只有结局指引、RLSD 未考虑跨模态，而 MFSD 用联合增益减去单模态增益得到剩余交互。这种可视化对应后文的公式分解，但图本身不证明方法有效，证明要看受控实验。

### 基准由哪些任务与证据标注组成

OmniReasoningBench 的输入是视频加问题，输出是选项或开放答案，附带参考答案与证据链。视频内推理有 750 题，超视频推理有 400 题，前者含 10 种任务类型，后者含 9 种任务类型。视频内推理的例子包括因果、时序与计数，例如根据手势定位到哪句话在解释跨国风险，或把口播年龄与画面日期结合算年份差。超视频推理的例子包括案例分析、设计优化与跨场景迁移，例如从视频中得到只允许竖栏的规则再判断新图中哪段栏杆违规，或从压缩比与目标衰减算新的阈值。

每道题都标出橙色音频线索与蓝色视觉线索及编号，编号链接到时间戳，超视频题还标出不在视频中的新图或新表。标注的作用是让阅卷与分析能回到具体时间窗口，而不是只看最终答案。这种设计的代价是标注与校验成本高，需要自动字幕、问答生成与多道验证配合。下表整理了基准的题量结构，数字来自原文连续句，可直接复述。

下表说明比较问题：基准是否同时覆盖视频内连接与向新情景迁移两种联合需求，指标方向是题量与类型覆盖越完整，对联合能力的区分越细，但题量本身不代表难度。

| 设置 | 总题量 | 选择题 | 开放题 |
| --- | --- | --- | --- |
| 视频内推理 | 750 | 375 | 375 |
| 超视频推理 | 400 | 250 | 150 |

上表解释结果及其限制：视频内与超视频两部分合计 1150 题，其中视频内 750 题平均分配给选择与开放，超视频 400 题中选择 250 开放 150，分别覆盖 10 种与 9 种任务。主要收益是两种能力都被显式考查，限制是任务类型数与题量分布不直接对应难度或权重，跨类型比较准确率时需注意样本不均衡，且开放题的判分规则会影响结论是否成立。

### MFSD 如何对同一回答做四路打分

MFSD 的输入是问题加原始音视频，输出是用于策略更新的 token 级优势。流程是先在无特权线索下采样一组回答，按结局奖励算组内归一化优势，再用同一个行动者对每条回答在 4 种线索上下文下打分：无线索、仅音频文本线索、仅视觉文本线索、音频加视觉联合文本线索。原始媒体、已采样前缀与模型权重在 4 路中保持固定，打分差异经停止梯度处理后变成增益。联合支持是联合相对无线索的提升，交互是联合增益减去音频单独增益与视觉单独增益的剩余。

只有当两组线索一起才比各自相加更能提高某个 token 的似然时，交互才为正；若联合提升完全可由单模态解释，交互为零。论文在联合一致假设下把该对比解释为条件逐点互信息的 token 级增量，但明确说明这刻画的是模型对线索条件的反应，不保证推理步骤正确。

**音频线索 × 视觉线索：** 音频线索指来自语音、声响和音乐解说中的可定位话语，视觉线索指来自画面中可定位的物体、文字、日历和动作；二者分工是各自提供对方没有的证据，搭配理由是只有把说话内容与画面对象按时间戳对齐才能形成多跳链条，组合后多出的作用是确定单模态下含糊的指代与时序。

同一回答在不同线索下的似然定义是方法的基础，符号含义是给定问题与原始输入、附加线索与已生成前缀时下一个 token 的对数概率，目标是得到可比较的增益而不引入额外滚动或教师参数。

\[\ell^{M}_{i,t}=\log\pi_{\theta}(y^{(i)}_{t}\mid x,r_{M},y^{(i)}_{\lt t}),\qquad M\in\{\varnothing,A,V,AV\}.\]

交互项的计算把联合、音频、视觉与无线索四项对数概率按加减组合，得到非可加部分，这是后续加权的核心信号。

\[S_{i,t}=\Delta^{AV}_{i,t}-\Delta^{A}_{i,t}-\Delta^{V}_{i,t}=\mathrm{sg}\!\left(\ell^{AV}_{i,t}-\ell^{A}_{i,t}-\ell^{V}_{i,t}+\ell^{\varnothing}_{i,t}\right).\]

**联合线索支持 × 跨模态交互：** 联合线索支持指同时给出音频与视觉文本线索时回答 token 似然相对无线索的提升，跨模态交互指联合提升减去音频单独提升与视觉单独提升后的剩余部分；前者保留所有有用证据，后者只奖励必须两者结合才出现的提升，二者组合后既不丢单模态证据，又把学习重心推向真正的互补推理。

**GRPO × RLSD × MFSD：** GRPO 指按整条回答的结果奖励做组内归一化优势的方法，RLSD 指用特权线索下的似然增益转成 token 级权重的方法，MFSD 指在 RLSD 基础上再分解出跨模态交互项的方法；三者是递进关系，GRPO 只看结局，RLSD 细化到每个 token 是否被线索支持，MFSD 进一步区分这种支持来自单模态还是必须联合，组合意义是让探索沿着音视频联合方向获得更细的信用。

得到两路信号后，方法在每条回答内对交互做中心化，再按系数把联合支持与中心化交互加权成综合分数，最后经符号保持的有界变换调制结局优势。中心化的作用是在回答内部重新分配信用而不改变整条回答的整体尺度，双线索门控只在两类线索都非空时引入交互项。相对 RLSD 的改动就在于这个综合分数携带了跨模态交互指引，让必须结合才似然上升的 token 在正优势时获得更大增强、在负优势时被较小惩罚，而仅单模态支持的 token 主要由联合支持指引。

综合分数把联合增益与中心化交互按比例混合，门控与尺度系数平衡两路信号的量纲与适用条件。

\[g_{i,t}=(1-\beta_{i})\Delta^{AV}_{i,t}+\beta_{i}\kappa\widetilde{S}_{i,t},\qquad\beta_{i}=\beta\,\mathbf{1}[r_{A}\neq\varnothing\land r_{V}\neq\varnothing].\]

优势整形把综合分数经指数与截断转成有界权重，保持原优势符号不变，这是实际用于截断策略目标的量。

\[\begin{gathered}w_{i,t}=\exp\!\left(\operatorname{sign}(A_{i})g_{i,t}\right),\\ \widehat{A}_{i,t}=A_{i}\left[(1-\lambda)+\lambda\,\mathrm{clip}\!\left(w_{i,t},1-\epsilon_{w},1+\epsilon_{w}\right)\right].\end{gathered}\]

整个过程不让梯度穿过线索条件，滚动时也不含特权线索，3 路线索条件打分不需要额外采样或独立教师参数，主要代价是每条样本要多做三次前向打分，序列越长开销越大。

### OmniQA 如何从字幕到思维过程产出数据

OmniQA 的输入是原始视频集合，输出是经校验的问答、证据链与思维过程文本。第一步做事件切分与字幕生成，用 Gemini-3.1-Pro 分别写带时间戳的音频描述与视觉描述，例如白蓝球衣队长的外貌与同期语音内容。第二步按任务池选题并生成问答，用 Qwen3.8 根据字幕束选择最合适的任务，产出问题、选项、参考答案与推理步骤，推理步骤标出人物确认、声音绑定、定位得分等分工。第三步做后验证，分两道门：线索有效性检查每条线索能否在对应媒体窗口中找到，无效则丢弃。

捷径筛查要求仅文本、仅音频、仅视觉都答错而音视频联合答对，有捷径则丢弃。第四步做思维生成，思维生成器只看到时间戳字幕、已验证问答、证据链与附加图形，看不到源视频，把链条展开成观察、中间推断、选项比较与数值计算。监督微调阶段模型学习这些合成回答，强化学习阶段保留的音频与视觉文本线索则作为特权上下文用于评价采样回答。下面这张流水线图展示了四步的输入输出，适合复述构造顺序。

读图说明：这张图按 1 到 4 编号展示字幕生成、问题生成、后验证与思维生成，重点看每步的输入框与输出框以及右下两道门的通过条件，理解无效线索与捷径是如何被丢弃的。

> **看图路径：** 1. 沿 1 到 4 的编号看字幕生成到思维生成的先后顺序；2. 看右下 Gate2 中四种输入条件下对错标记的保留规则；3. 注意推理步骤中人物确认与声音绑定的分工

[![原论文 Figure 3：OmniQA data engine. Gemini-3.1-Pro annotates timestamped audio-visual descriptions.](https://arxiv.org/html/2609.39490v1/12313_cropped.png)](https://arxiv.org/html/2609.39490v1/12313_cropped.png)

*论文图 3。原论文 Figure 3:：“OmniQA data engine. Gemini-3.1-Pro annotates timestamped audio-visual descriptions.”。*

图上可见字幕束同时保留视觉与音频时间戳，问题生成框给出 8 个选项与金答案，验证框用对错标记展示 4 种输入的保留规则，思维生成框展示先看视频再分析选项的话术结构。它的价值是把可复现的构造过程讲清楚，限制是字幕与问答质量依赖所用的大模型，换模型或换任务池，产出分布会变化。

**证据链 × 思维过程：** 证据链指由带时间戳的观察经中间推断到最终答案的依赖图，思维过程指按该链条展开的逐步观察、比较选项与数值计算文本；证据链是监督结构，思维过程是给监督微调看的语言形式，前者保证问题必须联合求解，后者让模型学到可复述的推理步骤，组合后数据既有约束又有可学习的表达。

产出的数据规模是监督 112463 条含合成思维过程，强化学习 18991 道人验问题含证据标注，覆盖视频内与超视频两类。训练时监督阶段学表达，强化阶段学在证据约束下的探索，二者都依赖同一套时间戳标注，因此标注错误会同时影响 2 个阶段，这是复现时要优先检查的地方。

### 例子中的时间戳与新条件如何参与推理

理解联合推理最好沿着一个样本走。以戒指年份题为例，音频线索在 2 分 33 秒到 2 分 38 秒给出母亲八十七岁，视觉线索在 4 分 56 秒到 5 分 07 秒给出戒指刻字，在 5 分 53 秒到 6 分 15 秒给出日历显示 2023 年，计算是 2023 减 87 得 1936，再用 1956 减 1936 得 20 年。计数题的逻辑是取交集：视觉列出关节炎等列表，音频说出另一组疾病，答案是两边都出现的炎症性肠病。超视频题多一步迁移：视频给出规则或参数，新图或新表给出待判案例，例如只允许竖栏而新图仅 B 段有横栏则选 B，或峰值 -10 dB 目标衰减 8 dB 按压缩比公式算出 -20 dB。

共同点是每一步都有可回放的时间窗口或新条件表格，缺一步就断链。下面这张任务示例图把 6 个例子并排展示，适合对照阅读。

读图说明：请先区分上排 3 个视频内例子与下排 3 个超视频例子，再逐例核对问题、线索时间区间与答案计算，最后观察新图与新表在下排例子中出现的位置与标注方式。

> **看图路径：** 1. 对比上排视频内推理与下排超视频推理的问题提法差异；2. 观察每例中橙色音频线索与蓝色视觉线索的时间戳区间；3. 注意新图与新表如何作为视频外条件参与计算

[![原论文 Figure 2：OmniReasoningBench tasks and examples.](https://arxiv.org/html/2609.39490v1/OmniReasoningBench_Demo_PaperPalette.png)](https://arxiv.org/html/2609.39490v1/OmniReasoningBench_Demo_PaperPalette.png)

*论文图 2。原论文 Figure 2:：“OmniReasoningBench tasks and examples.”。*

图上可见每个例子都列出视频总时长与证据跨度，线索用颜色与编号区分，答案下方附简短算式，例如年份相减或呼气秒数求和。这种排版的教学价值在于把抽象的跨模态依赖变成可定位的输入输出对应，但图中算式是结果展示，不是模型实际生成的思维过程，模型能否稳定复现同样的对齐仍需看主实验与消融。

### 评测比较了哪些条件与指标方向

评测围绕 3 个问题：基准是否必须联合，主方法相对基座提升多少，提升是否泛化到通用与长视频理解。测量对象是准确率，指标方向是越高越好，比较时区分选择题与开放题。公平条件方面，单模态消融固定模型只给一种模态，联合条件给完整音视频；主结果比较固定基座为 Qwen3-Omni-30B-A3B-Thinking，模型初始化自该基座再用自家数据与 MFSD 训练。旧基准的视觉-only 结果用来说明旧题可单解，新基准的去音频结果用来说明新题必须联合。

长视频与通用基准如 LVOmniBench、Video-MMMU、Video-MME-v2 用来检验泛化，但这些基准的参考集与判分细节需按原文附录核对，不能把不同基准的分数直接相减排名。下表整理了单模态可解性的关键数字，适合判断新旧基准的差异条件。

下表说明比较问题：在相同模型下，仅视觉能否在旧基准拿高分而在新基准大幅下跌，条件是否一致看是否都去掉音频只留画面，指标方向是准确率越高说明单模态越可解。

| 基准 | 输入条件 | 题型 | 准确率 | 对比含义 |
| --- | --- | --- | --- | --- |
| WorldSense | 仅视觉无音频 | 整体 | 57.85% | 旧基准单模态可解比例高 |
| Daily-Omni | 仅视觉无音频 | 整体 | 68.76% | 旧基准单模态可解比例高 |
| OmniVideoBench | 仅视觉无音频 | 整体 | 44.90% | 旧基准仍有不少可单解 |
| JointAVBench | 仅视觉无音频 | 整体 | 60.43% | 旧基准仍有不少可单解 |
| 自建基准 | 去音频 | 选择题 | 17.2% | 新基准去音频后大幅下跌 |
| 自建基准 | 去音频 | 开放题 | 8.7% | 新基准去音频后大幅下跌 |

上表解释结果及其限制：旧基准在仅视觉下仍有四到近七成准确率，说明相当部分题目不需音频，而新基准去掉音频后选择与开放分别跌到十余与个位数，支持新基准更依赖联合。限制是这些数字来自特定模型 Qwen3.5-Plus，去音频的实现与判分器会影响绝对值，且单模态或 oracle 的增益区间还依赖所选 3 模型与两种题型，不能推广为所有模型的必然差距。

### 主结果提升了多少且在何种基座下成立

主结果固定基座 Qwen3-Omni-30B-A3B-Thinking，模型名为 OmniReasoning-30B-A3B。报告是在 OmniVideoBench 上达 50.0%，在 OmniReasoningBench 上达 42.5%，相对基座分别提高 12.8 与 9.3 个百分点。论文还称在通用与长视频基准上有明显增益，包括 LVOmniBench、Video-MMMU 与 Video-MME-v2，总览图右下还展示了基座与新模型在多个基准上的柱状对比。理解时要注意这是百分点差值，不是相对百分比，且成立条件是相同评测流程与相同基座初始化。若换基座、换采样或换判分，绝对值会变。下表把主结果与数据规模放在一起，便于复述证据强度与训练成本的对应关系。

下表说明比较问题：在同一基座与同一评测下，自家数据加 MFSD 相对基座的准确率差值是多少，指标方向是准确率越高越好，差值以百分点计。

| 基准 | 基座模型 | 新模型准确率 | 相对基座提升 | 训练数据规模 |
| --- | --- | --- | --- | --- |
| OmniVideoBench | Qwen3-Omni-30B-A3B-Thinking | 50.0% | 12.8 个百分点 | SFT 112463 加 RL 18991 |
| OmniReasoningBench | Qwen3-Omni-30B-A3B-Thinking | 42.5% | 9.3 个百分点 | SFT 112463 加 RL 18991 |
| 通用长视频基准 | Qwen3-Omni-30B-A3B-Thinking | 原文称有明显增益 | 未在此表量化 | 同上数据与方法 |

上表解释结果及其限制：主要收益是两个音视频基准上超过十与近 10 个百分点的提升，且作者称泛化到通用长视频基准。代价是需要十万量级合成思维过程与近 20000 人验问题的证据标注，以及强化阶段的多路打分开销。限制是此处未列出通用基准的具体数字与方差，跨基准比较需回到原文表格核对划分与聚合方式，不能把不同基准的提升幅度直接排名，也不能把搜索或事后最优当作部署可得。

### 联合增益与交互项各自带来什么

论文用两类对照支撑设计。一是输入消融：在视频内推理上，联合输入超过任一单模态能独立解出的题目集合，超出约 9.9 到 26.7 个百分点，说明增益不是简单把两边做对的题目并起来，而是需要整合互补证据。二是方法对比：GRPO 只给结局级指引，RLSD 给联合线索支持但不区分跨模态交互，MFSD 在保留联合支持的同时加入中心化交互，意图让必须结合才似然上升的 token 获得更大权重。

原文称结合自家数据与 MFSD 后在多个基准上大幅超过基座，这支持显式构造、标注与优化跨模态依赖的总体路线。但需要指出，原文节选未给出逐项拿掉交互项或拿掉联合支持后的完整数字表，因此无法精确量化两路信号各自的贡献。教学上可以这样复述：若拿掉交互，模型仍能学到被线索支持的表达，但可能继续利用单模态捷径；若拿掉联合支持，只留交互，则单模态证据的利用会变弱。实际消融幅度要以原文完整表格为准，不要从名称猜测必然提升。

### 结论在哪些条件下才成立有何不足

结论成立依赖若干条件。基准必须联合的判断依赖问题-only 与单模态筛选的实现，若求解器变强，部分题目可能重新变得可单解。线索有效性依赖字幕与媒体验证器的准确性，若字幕错标人物或时间戳漂移，证据链会把错误传给监督与强化 2 个阶段。MFSD 的交互解释依赖联合一致假设，且论文明确说明它刻画的是对线索条件的反应，不保证推理步骤正确，因此交互为正不能直接读成推理正确。

主结果的百分点提升依赖固定基座与固定评测流程，换基座或换判分会有变化。未报告的内容包括 token 级权重的超参数敏感性、训练与推理的 wall-clock 开销、开放题人工评价与自动指标的一致性，以及在噪声音频或遮挡画面等退化条件下的表现。这些缺失不是技术缺陷，只是说明在推广结论前还需要补充验证。阅读时应把报告、显示、支持、可能、待验证区分开，避免把相关当成因果。

### 复现第一步做什么与资源现状

复现建议从数据与评测链路开始。第一步是按 OmniQA 的四步重走小规模流水线：先对少量视频生成分开的音频与视觉时间戳字幕，再生成问答与依赖链，然后跑线索有效性与 4 条件捷径筛查，最后用字幕与已验证问答合成思维过程。先保证筛查能复现仅文本、仅音频、仅视觉都错而联合才对的保留逻辑，再扩大规模。模型侧从 Qwen3-Omni-30B-A3B-Thinking 初始化，先做监督微调拟合合成思维过程，再用保留的人验线索做 MFSD 强化，注意滚动时不含特权线索、打分时固定前缀与权重并做停止梯度。

资源方面，论文首页与代码仓库链接在本次来源校验中显示当前可用，但文档完整性为部分，仅覆盖安装说明，因此环境与权重获取要以仓库实际内容为准。代码可用、文档部分、权重可下载与系统可运行是四件不同的事，需分别确认。关键超参数如平衡系数与尺度系数、截断阈值与分组大小要保留原文设置，缺失项应在记录中明确标出，不要从模型名猜实现。

### 什么时候值得尝试还缺哪项验证

当你的视频任务出现单模态捷径时值得尝试，例如仅看画面就能猜对、加入音频反而无提升，或需要把口播数字与画面文字做跨时间计算与迁移。这时可借用本文的思路：先为训练与评测写出分模态时间戳线索与依赖链，用 4 条件筛查保证必须联合，再用联合支持加中心化交互做 token 级加权。复现第一步是跑通小规模 OmniQA 筛查与思维生成，确认保留样例确实需要联合。

还需要补的验证包括：在更强的单模态求解器下重新测量可解比例，在退化音频与遮挡画面下测试鲁棒性，对比拿掉交互项与拿掉联合支持的消融表，以及报告训练与推理的实际耗时与显存占用。只有补上这些，才能判断提升来自真正的跨模态整合，还是来自数据规模与更细的优化。总体上，论文提供了一个从评测定义到数据结构再到学习目标的完整工作流，其价值在于让联合推理可构造、可标注、可优化，但具体幅度仍受基座、判分与超参数条件约束。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.39490)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
