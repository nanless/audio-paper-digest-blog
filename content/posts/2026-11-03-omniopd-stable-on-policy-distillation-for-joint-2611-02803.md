---
title: "OmniOPD: Stable On-Policy Distillation for Joint Audio-Video Generation"
date: 2026-11-03
draft: false
tags: [音视频生成, 知识蒸馏, 强化学习, 流匹配]
categories: [论文速递]
description: "论文要解决音频监督稀疏且不稳定导致的联合音视频蒸馏失衡，用更干净的视觉条件、更多组采样和按失配程度加权来稳定音频学习，在 JavisBench 上保持音频质量的同时明显提升视频质量。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.02803"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "音频少、视频多时怎样把两个专家教师一起蒸馏给同一个音视频学生"
paper_digest_original_title: "OmniOPD: Stable On-Policy Distillation for Joint Audio-Video Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.02803v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.02803v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.02803v1.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.flow-matching","label":"流匹配"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文要解决音频监督稀疏且不稳定导致的联合音视频蒸馏失衡，用更干净的视觉条件、更多组采样和按失配程度加权来稳定音频学习，在 JavisBench 上保持音频质量的同时明显提升视频质量。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zihao Fan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xin Lu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jie Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hexin Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xueyang Fu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zheng-Jun Zha"}]
paper_digest_abstract_sha256: "8f4765c2afc7c1e14ea4239c44a84149137a880c853e57078c82af16eac5bcaa"
paper_digest_sidecars: {"citation.bib":{"sha256":"40b7cfc0830092ed89ec902a7c66544c7b3083b44bb9d39193986535ed5c8887","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02803/citation.bib"},"citation.json":{"sha256":"c79f3c0c4d8a1537c07e57de5fc012e1db0f629290fb1ae64362e8e95b81029e","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02803/citation.json"},"citation.ris":{"sha256":"f33a0e1767ee2a00a84ae753b94d07e6397ba949d7d6391134cc445436178494","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02803/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"0acea2f2a952014ca37ecf9541233b7370767ac8a1bdea04ecf93d104b39e402","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02803/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "8e388e42d287582470649970aa018c6f70f279a22933caa3866a9c021d740182"
paper_digest_api_reader_plan_sha256: "24490384350b198f11cd8a9b6d1530971673176d7ecd75168fce18a9d7bc8b4f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "247a149231e55473ea4d02872dcd8a1aea581c8c3631823b2c700b37806cf3b0"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "1983674adfa69a24d8bacca97b93a88c68f262d2c9b68084b69bf1b51c2cac63"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e9b4ff44e23afa4c8e37007094d3e7eb9cb6791136ee353ee93cd88dd803ff08"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "d10ad76700d0a173947d30bb3021c6f231cdfdccf0d2e13d8d6b563ae395cadd"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 音频少、视频多时怎样把两个专家教师一起蒸馏给同一个音视频学生

> 英文题目：*[OmniOPD: Stable On-Policy Distillation for Joint Audio-Video Generation](https://arxiv.org/abs/2611.02803v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.2/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zihao Fan：机构信息未能在本次解析中与作者逐人可靠绑定
- Xin Lu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jie Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Hexin Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xueyang Fu：机构信息未能在本次解析中与作者逐人可靠绑定
- Zheng-Jun Zha：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

联合音频视频生成要求同一模型输出时间对齐的声音与画面，难点是两种模态占用词元数量差异大，音频获得的监督稀疏，优化过程波动大，还会通过共享参数干扰视频质量。OmniOPD 让学生沿自身生成的联合轨迹接受两个冻结的专用教师的指导，音频教师提供音频目标，视频教师提供视频目标，学生同时拟合两类目标以继承两种能力。与直接加大音频奖励权重不同，该方法用更干净的视频上下文改善音频目标质量，用多组采样扩大音频覆盖，再按局部失配程度降低不可靠步骤的权重。附录把一步转移分布差异转化为干净样本预测误差，说明两者只差一个随时间变化的系数，实际回归目标省略该系数后成为一种替代目标。在 JavisBench 上，以 LTX-2.3 为基线时，OmniOPD 视频质量得分为 3.347，基线为 2.714，音频质量得分为 5.449，基线为 5.252，同步指标 DeSync 从 0.584 降至 0.457，数值越低表示同步越好。结论适用于以 LTX-2 双流联合模型为底座、已有音频与视频专用教师的蒸馏场景，跨架构与长时生成的稳定性尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 联合音视频生成要输入什么并输出什么

这篇论文研究的任务是文本到音视频联合生成。输入是一段文本提示，输出是相互配合的一段视频和一段音频，要求画面质量好、声音质量好、文本与各自模态对得上、音频与视频在语义和时间上也对得上。

对刚入门的读者，可以把评测拆成 4 类来记。第一类是音视频各自的质量，第二类是文本与视频、文本与音频的一致性，第三类是音频与视频之间的语义一致性，第 4 类是时间同步，时间差越小越好。论文用 JavisBench 报告这些方面，并用 VBench 补充评价视频生成。

已有路线大致有 3 条。第一条是直接建联合架构，用跨注意力或双流结构让音频和视频互相看到对方。第二条是用强化学习做后训练，针对某个奖励把生成质量再推高，例如只优化视频奖励或只优化音频奖励。第 3 条是把专家能力搬运给统一模型。OmniOPD 属于第 3 条，它不直接联合优化多个互相冲突的奖励，而是先分别训好视频专家和音频专家，再把它们蒸馏给同一个学生。

### 已有联合架构、奖励优化与蒸馏各解决什么

联合架构方面，论文回顾了 MM-Diffusion 用跨模态注意力耦合音频与视频去噪器，JavisDiT 引入层次时空先验改善同步，UniVerse-1 把预训练的音频与视频专家拼起来，LTX-2 采用非对称双流结构并用双向跨注意力支持模态内生成与跨模态交互。这些工作解决的是如何在一个模型里同时表示两路信号并让它们通信。

奖励优化方面，早期扩散模型后训练有 DPO、DPOK、ReFL 等做法，偏好优化有 Diffusion-DPO，面向流模型有 Flow-GRPO 和 DanceGRPO，多奖励优化有 GDPO 用分别归一化保留各自贡献，DiffusionNFT 把奖励反馈写成隐式策略改进，OmniNFT 再把它扩展到音视频联合与模态感知优化。这些工作解决的是按任务奖励把某一类质量推高，但同时优化多个异构奖励时容易出现目标冲突和梯度不平衡。

蒸馏方面，在轨蒸馏强调让学生在自己生成的序列前缀上学习教师反馈，语言模型方向讨论过散度目标与样本复用，多教师集成有 MOPD 与 Open-MOPD，不平衡监督预算与不可靠监督分别有相关研究，连续生成方向有 Flow-OPD 与 DiffusionOPD，分别处理沿学生轨迹整合教师能力、随机转移的闭式损失与确定性均值匹配。OmniOPD 的定位是继承普通在轨蒸馏，但在音频与视频 token 极不平衡、音频监督稀疏不稳定的条件下做稳定化。

### 音频与视频的监督量差距有多大

论文首先指出一个结构性不对称。每个样本中视频 token 远多于音频 token，图注明确说 2 模态存在显著 token 不平衡并导致训练不稳定。学生在自己的轨迹上学习时，视频每步能得到密集监督，音频只能得到稀疏监督，因此音频学习天然波动更大。

下面这张动机图需要先看清监督量差距，再看单靠音频奖励优化会带来什么连带影响，最后看去噪过程中 2 模态的收敛节奏差异，这样才能理解为什么后面要从视觉上下文、采样覆盖和可靠性加权三处同时补强。

> **看图路径：** 1. 先看图 a 两根柱子的数值与倍数，确认音频与视频的监督量差距；2. 再看图 b 两条奖励曲线随训练步的变化方向是否一致；3. 最后看图 c 和图 d 随去噪步的音频与视频收敛快慢差异

[![原论文 Figure 1：Motivation analysis of audio-video joint learning.](https://arxiv.org/html/2611.02803v1/motivation.svg)](https://arxiv.org/html/2611.02803v1/motivation.svg)

*论文图 1。原论文 Figure 1:：“Motivation analysis of audio-video joint learning.”。*

这张图确实可见 4 个面板。图 a 柱状图给出每个样本视频为 6,144，音频为 126，标注差距为 48.8 倍。图 b 显示只用音频奖励优化时，音频奖励代表的 AudioBox 曲线起伏上升，最终相对初始提升约 10.6%，而视频奖励代表的 HPSv3 曲线持续下滑，最终相对初始下降约 11.9%。图 c 和图 d 显示音频性能在去噪早期就出现，但音频的精修过程比视频更不稳定，图中在去噪步 15 附近标注视频差距约 9.0% 而音频差距约 65.8%，说明同一步数下音频离最终输出还更远。

这个现象的含义是直接的。音频 token 少意味着同样一条轨迹能提供的音频学习信号少，估计方差大。更关键的是音频不稳定还会拖累视频，因为两路共享同一个联合模型参数，音频侧的波动会通过共享参数和跨注意力传到视频侧。

### 为什么直接加重音频奖励反而更糟

论文用 3 组优化曲线进一步验证耦合关系。顶行比较只优化视频、只优化音频和联合优化；中行比较联合奖励内部不断提高音频与同步权重；底行比较只优化音频与先优化视频再优化音频的级联做法。输入条件、奖励模型和训练阶段在组内可比，目的是看哪种做法能同时保住两路。

读这张耦合分析图时，先按行看对照设计，再看每列奖励曲线的走向，最后重点看加重音频权重的那一行是否出现两路一起变差，以及级联做法是否让曲线更平稳。

> **看图路径：** 1. 先按顶行、中行、底行区分三组对照：单奖励与联合、联合内加重、级联先视频后音频；2. 再在每行内比较音频教师曲线与视频教师曲线的走势是否同向；3. 重点观察中行加重音频权重后视频指标是否反而下滑

[![原论文 Figure 2：A comprehensive analysis of audio-video coupling during optimization.](https://arxiv.org/html/2611.02803v1/reward_step.svg)](https://arxiv.org/html/2611.02803v1/reward_step.svg)

*论文图 2。原论文 Figure 2:：“A comprehensive analysis of audio-video coupling during optimization.”。*

这张图确实可见 15 个子图按三行五列排列，列分别是 hpsv3、videoalign、audiobox、clap 和 av_desync，横轴是训练步。顶行中音频教师对应的曲线在视频指标上偏弱，联合奖励在音频指标上有一定提升但视频指标提升有限。中行把音频与同步权重逐步提高后，hpsv3 和 videoalign 等视频曲线在高权重下明显下坠，audiobox 和 clap 也没有稳定变好，说明简单放大音频损失权重会放大不稳定信号。底行先优化视频再优化音频的 Cascade 曲线整体更平稳，视频指标保持在高位，音频指标也比纯音频教师更少出现大幅回落。

因此论文得出 3 个判断。第一，只用音频奖励优化不稳定且会拉低视频质量。第二，联合奖励受跨模态冲突限制，加大音频权重不能解决监督稀疏的根本问题。第三，先把视频能力做强可以给音频学习提供更好的上下文，这直接引出用更干净的视觉条件来改善音频教师目标的思路。

### OmniOPD 整体让学生跟谁学、在哪里学

OmniOPD 的整体流程可以沿一个样本走一遍。文本提示进入联合学生后，学生自回归地生成一条包含音频和视频的联合轨迹，这条轨迹就是学习发生的位置。然后冻结的视频教师只在视频模态上给出目标，冻结的音频教师只在音频模态上给出目标，学生分别向它们看齐。视频侧用常规蒸馏损失，音频侧用经过三处加强的损失，最后两路相加得到统一学生的目标。

基础的联合流匹配把音频潜变量和视频潜变量用同一个时间步加噪，每个模态独立加高斯端点噪声，但速度场联合预测，每路都以完整的音视频状态为条件。下面的公式描述单模态在时间步 t 的加噪插值，m 取音频或视频。

\[x_{t}^{m}=(1-t)x_{0}^{m}+tx_{1}^{m},\qquad m\in\{a,v\}.\]

在轨蒸馏的目标是让学生轨迹上每一步的一步转移分布接近教师的一步转移分布，期望取在学生自己的轨迹分布上，求和取在去噪时间步集合上。下面的公式就是该目标，KL 衡量每步学生转移与教师转移的差异。

\[\mathcal{L}_{\mathrm{OPD}}(\theta)=\mathbb{E}_{\tau\sim P_{\theta}}\left[\sum_{k\in\mathcal{T}}D_{\mathrm{KL}}(p_{S}(\cdot\mid x_{t_{k}})\|p_{T}(\cdot\mid x_{t_{k}}))\right].\]

**联合音视频流匹配 × 在轨蒸馏：** 联合音视频流匹配负责把音频潜变量和视频潜变量放在同一时间步下一起建模速度场，是生成过程的基础；在轨蒸馏负责让学生在自己生成的轨迹状态上向教师的一步转移看齐，是能力搬运的方式。两者搭配后，流匹配提供统一的学生轨迹和速度预测接口，在轨蒸馏在该接口上按模态分别施加教师监督。

下面这张总览图把上述流程画成 3 个区。读图时先看主路径的箭头走向，再确认教师是否冻结，最后看音频分支与视频分支在哪里汇合为一个总损失。

> **看图路径：** 1. 先沿 A 区从文本经联合学生到学生轨迹再到两个冻结教师的箭头看主路径；2. 再看 B 区学生与教师的视频输入清晰度差异与音频输入是否相同；3. 最后看 C 区多组采样与右下角权重曲线的配合关系

[![原论文 Figure 3：Overview of OmniOPD. (A) On-policy modality-wise distillation transfers knowledge from frozen…](https://arxiv.org/html/2611.02803v1/Pipeline.png)](https://arxiv.org/html/2611.02803v1/Pipeline.png)

*论文图 3。原论文 Figure 3:：“Overview of OmniOPD. (A) On-policy modality-wise distillation transfers knowledge from frozen video and audio teachers to a joint audio-video student using student-generated…”。*

这张图确实可见 A、B、C 3 个区。A 区左侧是文本提示与联合学生 S，中间是学生生成的视频帧、波形与小方块表示的 token 轨迹，右侧是冻结的视频教师 Tv 给出视频目标并算视频损失，冻结的特权音频教师 Ta 给出音频目标并算加权音频损失，最后相加为总损失。B 区上面是学生用较模糊视频加同一音频预测音频，下面是教师用更清晰视频加同一音频给出目标音频，两路比较形成每组每步的损失。C 区把多组采样按组和时间步展开，右侧柱状表示各步监督量，右下角曲线表示权重随失配增大而衰减。

理解这张图后，后面 3 个组件就各就其位。B 区对应特权视觉引导，解决教师目标的信息量问题。C 区上半对应分组多噪声采样，解决覆盖不足问题。C 区下半对应按步加权，解决不可靠监督的压制问题。

### 特权视觉引导如何给音频教师更好的条件

特权视觉引导要解决的是音频教师目标本身不够有信息量。论文的依据是音频学习高度依赖视觉上下文，更干净稳定的视频能让音频目标更准。因此做法不是改音频输入，而是改教师看到的视频噪声水平。

具体构造是这样的。学生和教师共享同一个音频状态，学生看到的是自己轨迹上的视频状态，教师看到的是用学生干净视频预测重新加噪得到的更干净视频状态。教师视频噪声水平 q(t) 满足小于学生视频噪声水平 t，差距由偏移参数 s 控制，s 越大教师视频越干净。学生用自身条件预测干净音频，教师用特权视觉条件预测目标音频，两者比较形成音频损失。

下面的公式描述学生侧与教师侧在同一步看到的联合状态，前者是原视频状态，后者把视频换成更干净的版本，音频保持相同。

\[\mathbf{x}^{S}_{t}=(x^{a}_{t},x^{v}_{t}),\qquad\mathbf{x}^{T}_{t}=(x^{a}_{t},\widetilde{x}^{v}_{q(t)}).\]

**视频教师 × 音频教师 × 联合学生：** 视频教师指只用视频相关奖励独立优化后冻结的模型，负责在视频模态上给出目标；音频教师指只用音频相关奖励独立优化后冻结的模型，负责在音频模态上给出目标；联合学生指同时输出音频和视频的统一模型，负责在自己生成的联合状态上同时学习两路目标。三者分工是先把难兼顾的奖励解耦优化，再把能力汇入一个学生。

举一个教学例子帮助记忆，但它不是实测结果。假设同一段 2 人对话音频，学生侧的视频还很模糊，分不清谁在张嘴，教师侧的视频更清晰，能看到左侧人物正在说话，教师据此给出的目标音频在说话人归属上就更有依据。由于音频输入相同，这种增益可以归因于视觉条件的改善，而不是换了一个音频问题。

原文没有披露构造干净视频所需的学生预测频率、重加噪实现细节和额外前向开销的具体数值，因此不能补算该组件的计算代价，只能说它在概念上增加了一路教师条件的构造步骤。

### 分组采样如何扩大音频监督覆盖

分组采样要解决的是音频监督太稀疏。对同一文本提示只采一条轨迹时，音频 token 本来就少，噪声实现也很单一，估计的音频目标方差大。多采几条轨迹可以直接增加被监督的音频 token 数，并覆盖更多样的联合状态。

**特权视觉引导 × 同一音频状态：** 特权视觉引导指给音频教师更干净的视频条件，让教师在更好的上下文中预测音频目标；同一音频状态指学生和教师看到的音频输入保持一致，保证监督对准同一个要学的位置。两者搭配后，视觉侧提供信息增量，音频侧保持对齐，避免用不同的音频输入比较出无意义的差距。

做法是对每个提示独立采样 G 条联合轨迹，每条轨迹内部都使用特权视觉引导得到对应的音频教师目标。每条轨迹的每个时间步算一个平方误差项，然后在组间取平均，在时间步上求和。G 等于 1 就退化为单分支基线，G 增大则监督样本增多。论文的消融比较了 G 取 1、2、3 的效果。

这种做法的代价是直接的。采样轨迹数翻倍，学生前向、教师前向和损失计算都会增加，内存与时间开销随组数增长。好处是更多样的噪声实现和去噪阶段能互相补充，有助于补上基模型中较弱的能力，例如多样音频和长尾场景。原文没有给出每组的具体耗时和显存数字，因此只能定性说明代价方向，不能给出实测开销表。

### 按步加权如何压住不可靠的音频监督

按步加权要解决的是不同轨迹、不同时间步的可靠性不一样。在轨蒸馏中教师是在学生状态上做预测，当学生偏离教师熟悉的分布时，教师目标可能误导学生。如果对所有监督项一视同仁，不可靠项会把训练带偏。

做法是用音频转移差异衡量局部失配。学生和教师在各自视觉条件下给出音频速度预测，差异经时间系数加权后得到 Dg(t)。然后按阈值决定权重，失配在信任区内保留完整监督，超出后按指数形式平滑下调。停止梯度符号表示权重本身不参与求导，只控制每项损失的贡献。

下面的公式就是该失配度量，它比较的是同一音频状态下、不同视觉条件下两路音频速度预测的差异。

\[D_{g}(t)=D_{\mathrm{KL}}(p_{S}(\cdot\mid\mathbf{x}_{t})\|p_{T_{a}}(\cdot\mid\mathbf{x}_{t}))=w(t)\left\|v_{S}(\mathbf{x}_{t}^{S};\theta)-v_{T_{a}}(\mathbf{x}_{t}^{T})\right\|_{2}^{2},\]

**分组多噪声采样 × 按步重要性加权：** 分组多噪声采样指对同一文本提示采样多条联合轨迹，负责扩大音频监督的覆盖和多样性；按步重要性加权指按每条轨迹每个时间步的师生转移差异决定该监督项的权重，负责压住不可靠的高失配信号。两者搭配后，先用数量和多样性补稀疏，再用权重筛可靠性，共同稳定音频学习。

可以这样理解信任区的含义。失配小说明师生在该状态下分歧不大，教师目标大概率仍在合理范围内，可以全量学习。失配大说明学生走到了教师不太确定的区域，此时先降低权重、让更可靠的步骤主导更新，比硬学一个可疑目标更稳。论文的消融比较了均匀加权与该加权，支持它能缓解音频不稳定对视频的拖累。

### 最终目标把哪些损失加在一起、参数如何处理

最终目标是视频蒸馏损失加上稳定化后的音频损失。视频侧沿学生轨迹比较学生与视频教师的干净预测，音频侧对每组每步的平方误差先乘按步权重，再在组间平均、在时间步上求和。两路都冻结教师，只更新学生。

论文把转移散度换算成干净预测回归来实现。下面的公式是每模态在共享噪声状态下比较干净预测的平方误差形式，求和取在时间步集合上，期望取在学生轨迹上。

\[\mathcal{L}_{m}(\theta)=\mathbb{E}_{\tau\sim P_{\theta}}\left[\sum_{t\in\mathcal{T}}\left\|\hat{x}_{0}^{S}-\hat{x}_{0}^{T_{m}}\right\|_{2}^{2}\right],\]

**干净预测回归 × 转移散度：** 转移散度指学生和教师一步转移核之间的 KL 差异，是在轨蒸馏的原始目标；干净预测回归指直接比较双方对干净样本的预测平方误差，是实现时用的替代形式。在共享噪声状态和相同转换系数下两者可以通过速度与干净预测的关系换算，论文明确去掉随时间变化的系数后得到的是替代目标而非完全等价的 KL。

需要提醒的是换算细节。附录说明转移散度对应带时间系数的干净预测回归，论文在回归目标中省略了该系数，因此不同时间步的相对权重被改变，这是一个蒸馏替代目标，而不是与原始 KL 完全相同的目标。该换算在双方共享同一音频状态和相同转换系数时成立，这也是特权视觉引导必须保持音频相同的理论原因。

训练实现上，学生初始化和教师训练都基于 LTX-2 的 22B 双流联合模型。视频教师与音频教师分别用 DiffusionNFT 加 LoRA 微调，视频教师用视频质量与同步相关奖励，音频教师用音频质量、文本音频对齐与同步相关奖励，蒸馏时两教师冻结。原文未报告学习率、步数、批量、优化器和 LoRA 秩等超参数缺口，复现时需要按原文代码或后续补充确认，不能从模型名称猜测。

### 奖励、基线与评测条件是如何对齐的

奖励模型按 OmniNFT 的设置选用 5 个。HPSv3 与 VideoAlign 评价视频质量，Audiobox Aesthetics 评价音频质量，CLAP 评价音频文本对齐，另有一个由 DeSync 导出的奖励评价音视频同步。教师训练时视频教师用视频侧加同步奖励，音频教师用音频侧加同步奖励。联合奖励的 3 个变体逐步提高音频与同步权重，用于检验加重权重能否缓解不平衡。级联做法先优化视频再优化音频，其中一个变体第二阶段只更新音频分支。

评测在 JavisBench 上按 4 个方面组织，指标方向是 DeSync 越小越好，其余越大越好。VBench 补充评价视频生成的多维度质量。比较对象包括分阶段生成的级联方法、直接文本到音视频的联合模型、加 OmniNFT 的强化学习变体、视频教师、音频教师、普通在轨蒸馏与 OmniOPD。

下面这张表是论文展示的定性示例所用提示，阅读时可以把它当作生成条件的来源。它说明示例覆盖双猫对叫、多人物废墟对话、湖边篝火合唱、海绵宝宝与派大星对话等场景，涉及说话人归属、长尾音频与视觉一致性等难点。

| No. | Prompt |
| --- | --- |
| 1 | ”A fixed close-up shows two domestic cats sitting opposite each other on a windowsill in soft afternoon light. One is an orange tabby and the other is a gray British Shorthair. The camera remains perfectly still while both cats maintain stable seated postures. The orange cat looks toward the gray cat and produces a gentle meow. After a brief pause, the gray cat slowly blinks and answers with a shorter, lower-pitched meow. Only subtle head, ear, and whisker movements occur. The audio contains the two clearly separated cat vocalizations with almost no other environmental sound.” |
| 2 | ”Amidst twisted metal and rubble under a hazy, sunlit sky, five figures stand arranged in a loose semi-circle. Strong backlighting from the upper right casts dramatic golden highlights across their forms, while a slightly low camera angle looks up at the group, emphasizing their presence. On the far left, a man in a red-and-gold suit with glowing blue accents stands next to a younger man in a red-and-blue suit. To their right, a muscular, bald man with reddish-brown skin and tattoos faces a woman in black leather armor with antennae-like headgear, while on the far right, a man in a brown jacket holds a futuristic weapon at his side. The man in the red-and-gold suit turns his body slightly to look directly at the resolute-looking, muscular man opposite him and says quietly, “I can’t shake the feeling that this isn’t over yet.” In response, a faint smile appears on the muscular man’s face, and he replies in a calm, steady voice, “As long as we’re still standing together, we can get through anything.” The other three figures remain standing, their gazes shifting subtly as they listen in silence to the exchange. The audio shows a quiet background ambience featuring the sound of soft wind moving through the ruins, punctuated by the faint, intermittent clinking of metal debris. The dialogue is clear, with the first man speaking quietly and the second replying in a calm, steady tone.” |

上表前两条提示分别对应两只猫的音高分离与 5 人场景中的两段对话，后两条对应篝火音乐与卡通人物对话。它的限制也很清楚。提示表只说明输入条件，不能证明输出质量，真正的质量判断要看主结果表中的指标与可听可见的生成结果，不能把提示多样性直接当成性能提升。

### 主结果在什么条件下支持音频视频双保

主结果要回答的问题是，在同一 JavisBench 条件下，OmniOPD 能否把两个专家教师的能力同时装进一个学生，而不像直接联合优化那样顾此失彼。比较条件是同一基准模型 LTX-2.3 出发，指标方向按表头为准，DeSync 越小越好，其余越大越好。

下表是原文的 JavisBench 定量比较，保留了从分阶段方法到联合模型、强化学习变体、单模态教师与 OmniOPD 的完整行，数值与单位以原表为准。

|  | AV-Quality | AV-Quality | Text-Consistency | Text-Consistency | Text-Consistency | Text-Consistency | AV-Consistency | AV-Consistency | AV-Synchrony | AV-Synchrony |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | VQ↑ | AQ↑ | TV-IB↑ | TA-IB↑ | CLIP↑ | CLAP↑ | AV-IB↑ | AVHScore↑ | JavisScore↑ | DeSync↓ |
| – T2A+A2V |  |  |  |  |  |  |  |  |  |  |
| TempoTkn (Yariv et al., 2024) | – | – | 0.084 | – | 0.205 | – | 0.139 | 0.122 | 0.103 | 1.532 |
| TPoS (Jeong et al., 2023) | – | – | 0.201 | – | 0.229 | – | 0.124 | 0.129 | 0.095 | 1.493 |
| – T2V+V2A |  |  |  |  |  |  |  |  |  |  |
| ReWaS (Jeong et al., 2025) | – | – | – | 0.123 | – | 0.280 | 0.110 | 0.104 | 0.079 | 1.071 |
| See&Hear (Xing et al., 2024) | – | – | – | 0.129 | – | 0.263 | 0.160 | 0.143 | 0.112 | 1.099 |
| FoleyCrafter (Zhang et al., 2026b) | – | – | – | 0.149 | – | 0.383 | 0.193 | 0.186 | 0.151 | 0.952 |
| MMAudio (Cheng et al., 2025) | – | – | – | 0.160 | – | 0.407 | 0.198 | 0.182 | 0.150 | 0.849 |
| – T2AV |  |  |  |  |  |  |  |  |  |  |
| JavisDiT (Liu et al., 2026a) | 1.291 | 4.478 | 0.263 | 0.143 | 0.302 | 0.391 | 0.197 | 0.179 | 0.154 | 1.039 |
| UniVerse-1 (Wang et al., 2025) | 1.357 | 4.839 | 0.272 | 0.111 | 0.309 | 0.245 | 0.104 | 0.098 | 0.077 | 0.929 |
| JavisDiT++ (Liu et al., 2026b) | 1.462 | 5.049 | 0.282 | 0.164 | 0.316 | 0.424 | 0.198 | 0.184 | 0.159 | 0.832 |
| LTX-2.3 (HaCohen et al., 2026) | 2.714 | 5.252 | 0.279 | 0.178 | 0.308 | 0.429 | 0.256 | 0.251 | 0.222 | 0.584 |
| LTX-2.3+OmniNFT (Zhang et al., 2026a) | 3.216 | 5.564 | 0.274 | 0.183 | 0.309 | 0.442 | 0.268 | 0.261 | 0.236 | 0.547 |
| Video-Teacher | 3.121 | 5.216 | 0.276 | 0.182 | 0.304 | 0.446 | 0.275 | 0.269 | 0.238 | 0.465 |
| Audio-Teacher | 2.929 | 5.576 | 0.276 | 0.184 | 0.307 | 0.470 | 0.282 | 0.279 | 0.251 | 0.448 |
| Ours OmniOPD | 3.347 | 5.449 | 0.275 | 0.192 | 0.310 | 0.447 | 0.262 | 0.258 | 0.232 | 0.457 |

从原表可见，OmniOPD 的视频质量 VQ 为 3.347，高于 LTX-2.3 加 OmniNFT 的 3.216 和视频教师的 3.121，音频质量 AQ 为 5.449，低于音频教师的 5.576 但高于基线 LTX-2.3 的 5.252。文本一致性与音视频一致性方面，TA-IB 为 0.192，CLAP 为 0.447，AVHScore 为 0.258，JavisScore 为 0.232，DeSync 为 0.457，均处于较好的平衡位置。论文据此称其在保持强音频表现的同时明显提升视频，实现了更平衡的联合蒸馏。

这个结论的成立条件需要说清。它只在 JavisBench 与所选奖励体系下得到，依赖先训好两个单模态教师，且教师在蒸馏时冻结。表中音频教师在多个音频指标上仍是单项最强，OmniOPD 并没有在所有音频指标上超过它，因此不能理解为全面超越。未胜出的方面包括部分音频与同步指标仍低于音频教师，这恰好说明联合学生的价值在于平衡而非单项登顶。

### 与可运行的强化与蒸馏策略相比差距在哪里

另一张结果表聚焦实际可运行的策略比较，目的是区分不同后训练路线的效果。它保留基线 LTX-2.3、同时优化多奖励的 GDPO、先视频后音频的 Cascade、普通在轨蒸馏与 OmniOPD，条件是同一 JavisBench 评测。

下表是原文在不同实验设置下的定量比较，同样按原表保留全部行列与指标方向。

|  | AV-Quality | AV-Quality | Text-Consistency | Text-Consistency | Text-Consistency | Text-Consistency | AV-Consistency | AV-Consistency | AV-Synchrony | AV-Synchrony |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | VQ↑ | AQ↑ | TV-IB↑ | TA-IB↑ | CLIP↑ | CLAP↑ | AV-IB↑ | AVHScore↑ | JavisScore↑ | DeSync↓ |
| LTX-2.3 | 2.714 | 5.252 | 0.279 | 0.178 | 0.308 | 0.429 | 0.256 | 0.251 | 0.222 | 0.584 |
| LTX-2.3+GDPO | 2.713 | 5.577 | 0.280 | 0.181 | 0.313 | 0.439 | 0.251 | 0.249 | 0.221 | 0.563 |
| Cascade | 3.131 | 5.235 | 0.273 | 0.179 | 0.306 | 0.463 | 0.274 | 0.269 | 0.241 | 0.432 |
| Vanilla OPD | 3.174 | 5.342 | 0.275 | 0.180 | 0.309 | 0.433 | 0.256 | 0.250 | 0.226 | 0.583 |
| Ours OmniOPD | 3.347 | 5.449 | 0.275 | 0.192 | 0.310 | 0.447 | 0.262 | 0.258 | 0.232 | 0.457 |

从原表可见，GDPO 的 AQ 为 5.577，在音频质量单项上较高，但 VQ 为 2.713，与基线基本持平。Cascade 的 DeSync 为 0.432，同步较好，VQ 为 3.131，但 AQ 为 5.235，低于 OmniOPD。普通在轨蒸馏的 VQ 为 3.174，AQ 为 5.342，DeSync 为 0.583，同步明显弱于 OmniOPD 的 0.457。OmniOPD 的 VQ 为 3.347，AQ 为 5.449，TA-IB 为 0.192，在视频与音频之间取得更好的折中。

读定性示例时要把波形当作辅助证据。下面这组图展示 4 组提示的生成结果，每组上下两行对应改进前后的视频帧与波形，涉及猫叫分离、多人对话、篝火音乐与卡通对话。

> **看图路径：** 1. 先看每组上下两行的视频帧与波形是否对应同一提示；2. 比较猫叫分离、篝火吉他与多人对话等场景的波形稀疏与密集差异；3. 观察人物与卡通场景中多人说话时的语音分段感

[![原论文 Figure 4：Qualitative examples of joint audio-video generation by OmniOPD.](https://arxiv.org/html/2611.02803v1/figure1.png)](https://arxiv.org/html/2611.02803v1/figure1.png)

*论文图 4。原论文 Figure 4:：“Qualitative examples of joint audio-video generation by OmniOPD.”。*

这张图确实可见左右各两组场景。上排文字是提示，下方是视频帧带与绿色波形带。左上两只猫场景的下行波形出现更集中的两段较强振幅，对应 2 次分离的猫叫。右上 5 人废墟场景的波形呈多段对话式起伏。左下篝火场景后段波形明显变密，对应吉他与合唱进入。

右下卡通场景波形分段清晰，对应 2 人轮流说话。论文用这些例子说明音频多样性、人物语音归属与音画保真有所改善，但定性图不能量化提升幅度，仍需以上表数字为准。尚未评测的范围包括更长时长、更嘈杂背景与更多说话人等条件，原文没有给出这些划分的结果。

### 三个组件各自带来什么变化、代价是什么

消融要回答的是特权视觉的干净程度、采样组数与加权强度是否真的影响稳定性和平衡。比较时以普通在轨蒸馏为基线，对应偏移 s 等于 0、组数 G 等于 1、无加权的设置，其他条件保持一致。

下表是原文的消融结果整理，保留非对称噪声偏移、组数与信任区比例 3 组对照的全部行列，数字与单位以连续原句为准。

| Setting | VQ↑ | AQ↑ | TV-IB↑ | TA-IB↑ | JavisScore↑ |
| --- | --- | --- | --- | --- | --- |
| (a) Asymmetric-noise shift |  |  |  |  |  |
| s = 0 | 3.174 | 5.342 | 0.275 | 0.180 | 0.226 |
| s = 1.5 | 3.332 | 5.376 | 0.275 | 0.189 | 0.232 |
| s = 2.0 | 3.354 | 5.353 | 0.274 | 0.183 | 0.229 |
| (b) Number of rollout groups |  |  |  |  |  |
| G = 1 | 3.174 | 5.342 | 0.275 | 0.180 | 0.226 |
| G = 2 | 3.334 | 5.223 | 0.275 | 0.186 | 0.217 |
| G = 3 | 3.315 | 5.393 | 0.276 | 0.188 | 0.233 |
| (c) Trust-region soft ratio |  |  |  |  |  |
| p = 0.75 | 3.322 | 5.381 | 0.276 | 0.189 | 0.236 |
| p = 0.5 | 3.321 | 5.407 | 0.273 | 0.184 | 0.235 |
| w/o weighting | 3.174 | 5.342 | 0.275 | 0.180 | 0.226 |

从原表可见，提供更干净视觉条件后，s 为 1.5 时 VQ 从 3.174 升至 3.332，AQ 从 5.342 升至 5.376，JavisScore 从 0.226 升至 0.232，s 为 2.0 时 VQ 为 3.354 但 AQ 回落至 5.353，说明视觉增益存在但并非越大越好。组数方面，G 为 3 时 AQ 为 5.393，高于 G 为 1 的 5.342，VQ 为 3.315，JavisScore 为 0.233，G 为 2 时 AQ 反而为 5.223，说明多采样总体有助于音频但过程有波动。加权方面，两种信任区比例下的 JavisScore 分别为 0.236 和 0.235，均高于无加权的 0.226，VQ 与 AQ 也略有提升。

这些结果支持三项判断，但都有代价和限制。特权视觉需要构造更干净的教师条件，增加实现复杂度。分组采样增加前向与存储开销。按步加权需要选择信任区参数，原文只报告了两种比例，没有给出选择标准与敏感性全貌。消融也没有报告多次随机种子的方差，因此不能把单次提升幅度理解为稳定保证。

### 这篇论文明确承认哪些尚未解决

论文在附录中明确写了两项局限。第一，教师在蒸馏时看到的是学生生成的轨迹状态，这与教师训练时的输入分布可能不同，存在输入分布偏移。第二，当学生状态大幅偏离教师支持的分布时，教师预测可能不可靠或误导，蒸馏监督的有效性会下降。

这两点与 OmniOPD 的设计是直接相关的。按步加权正是为了缓解第二点，但它只能按失配大小下调权重，不能纠正教师本身的错误。分组采样扩大了覆盖，但覆盖的仍然是学生分布，不是教师训练分布。特权视觉改善了教师条件，但没有改变教师参数，因此不能消除分布偏移。

对读者而言，这意味着不能把该方法理解为只要加权就能学到任意状态。在学生早期生成质量很差、教师完全看不懂的阶段，监督仍然可能是噪声。论文没有测量这种极端偏离下的误判率，也没有给出何时应该停止蒸馏或回退到教师分布采样的规则，这些都是待验证的范围。

### 如果要复现第一步应该准备什么

复现的第一步不是直接跑联合蒸馏，而是把评测与教师准备对齐。先固定 JavisBench 与 VBench 的划分、提示、采样步数和指标计算方式，确认 VQ、AQ、TV-IB、TA-IB、CLIP、CLAP、AV-IB、AVHScore、JavisScore 与 DeSync 的方向与聚合方式。然后准备 LTX-2 的 22B 双流模型作为学生初值与教师训练起点。

第二步是独立训练并冻结两个教师。视频教师用视频质量与同步相关奖励，音频教师用音频质量、文本音频对齐与同步相关奖励，训练方法为 DiffusionNFT 加 LoRA 微调。只有教师达到原文报告的单项水平后，再进入联合蒸馏，否则无法区分是教师不行还是蒸馏不行。

第三步再实现 OmniOPD 的三处改动。按同一音频、更干净视频构造教师条件，按提示采样多条轨迹并在组间平均，按转移差异计算每步权重后与视频损失相加。需要记录的关键是噪声偏移 s、组数 G 与信任区参数，以及是否省略时间系数的回归形式。

关于资源是否公开，本次只依据论文原文与收到的官方原图，没有发现来源绑定且完成验证的作者资源，因此不能声称代码、模型或数据当前已公开或可下载。代码开源、权重可下载、系统可运行是三件不同的事，需要分别核实，不能混为一谈。

### 什么时候值得尝试以及还需要补什么验证

当你的联合模型出现音频监督少、音频曲线波动大、且音频波动连带拉低视频时，这篇论文的思路值得尝试。它的适用条件是已经能训出不错的单模态视频专家和音频专家，但直接联合优化多奖励会冲突。此时把专家冻结，再用学生轨迹做模态分别蒸馏，比继续调奖励权重更对症。

容易产生的误解需要澄清。第一，加大音频损失权重不等于补上音频监督，原文中行实验证明这可能同时损害两路。第二，多采样不等于无限增大组数，G 为 2 到 3 的变化显示收益非单调，且开销线性增长。第三，OmniOPD 没有在所有音频指标上超过音频教师，它的价值是平衡，不是单项登顶。第四，无训练的说法不适用于本论文，本论文有教师训练与学生蒸馏两个训练阶段，只是教师在蒸馏阶段冻结。

还需要补的验证包括多次种子的方差、不同基模型与数据划分下的可迁移性、长尾与多人对话等更难条件的表现，以及训练与推理开销的实测数字。只有补上这些，才能判断该方法在你的音频与视频任务中是否真的划算。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.02803v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
