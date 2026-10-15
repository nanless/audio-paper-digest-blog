---
title: "Mitigating Cross-Modal Hallucinations by Correcting Modality Misrouting in Omnimodal LLMs"
date: 2026-10-15
draft: false
tags: [音视频问答, 测试时自适应, 音视频, 幻觉与忠实度]
categories: [论文速递]
description: "论文针对全模态大模型中问题相关证据仍在单模态分支可恢复却在联合预测中丢失的模态误路由问题，提出免训练的 CaRe 两阶段冲突检测与残差纠偏，并在 CMM 和 AVHBench 上以额外反事实推理为代价取得一致提升。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.18141"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "当音频和视频互相干扰时，如何把走错路的融合表示拉回来"
paper_digest_original_title: "Mitigating Cross-Modal Hallucinations by Correcting Modality Misrouting in Omnimodal LLMs"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.18141v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.18141v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.18141v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.test-time-adaptation","label":"测试时自适应"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"}]
paper_digest_primary_method: "测试时自适应"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对全模态大模型中问题相关证据仍在单模态分支可恢复却在联合预测中丢失的模态误路由问题，提出免训练的 CaRe 两阶段冲突检测与残差纠偏，并在 CMM 和 AVHBench 上以额外反事实推理为代价取得一致提升。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yu Mi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Licheng Pan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiayi Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qirui Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yitong Qiao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Changtong Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tao Wei"},{"affiliations":["Zhejiang University Ant Group Institute of Computing Technology, CAS"],"name":"Fei Sun"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhixuan Chu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kui Ren"}]
paper_digest_abstract_sha256: "4040a1214758603ad76f443fc03eea92631d5a1b750fa34b5b8cc3b0759f9269"
paper_digest_sidecars: {"citation.bib":{"sha256":"c43fba86caf22eb58a0eb6b82e5baf4f66adb71a5cd4891140df7c038efb48b6","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18141/citation.bib"},"citation.json":{"sha256":"56c3e7a59659673e5f21be98aa1032ceab2d3165df1dbbfec561b0801a35c170","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18141/citation.json"},"citation.ris":{"sha256":"ec0983e5c27f85086323f1abf513731db720fce0324cc25cc66af91484f9e29a","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18141/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"6076d88e9adaab52e0cd7cdf8f2a5da6dda51c60714c3dab144e0e1116bf4f19","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18141/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "48994bb2562f0b2ada637195c2c0118d30225c989910b3b354dbabef689ce500"
paper_digest_api_reader_plan_sha256: "9adf1eb133d9ed2194ad95fe3e6932621a70cca9e0649da36e5ecfda00007b81"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6518fefcc87e3ec7ed5ef1b03fdf3b4b2e8b567490d7e170d69919b9e8230ae3"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "1cadc56fe30c454692ff32bfadd894889da678f7ba332715ff021cfe4449bc9a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "947153602cde15cc5655c0876c00b422505b978e7cf36de21670083cdb4c5851"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4e3fc449c78cb6d28886af730aa279518e8b8ba3cc2112bd6d517f8c074a3164"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 当音频和视频互相干扰时，如何把走错路的融合表示拉回来

> 英文题目：*[Mitigating Cross-Modal Hallucinations by Correcting Modality Misrouting in Omnimodal LLMs](https://arxiv.org/abs/2610.18141v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)
- **研究方法**：[迁移学习](/audio-paper-digest-blog/papers/?concept=method.transfer) → [领域适应](/audio-paper-digest-blog/papers/?concept=method.domain-adaptation) → [测试时自适应](/audio-paper-digest-blog/papers/?concept=method.test-time-adaptation)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究重点**：[幻觉与忠实度](/audio-paper-digest-blog/papers/?concept=research_focus.hallucination-faithfulness)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5


## 👥 作者与机构

- Yu Mi：机构信息未在 arXiv HTML 中可靠披露
- Licheng Pan：机构信息未在 arXiv HTML 中可靠披露
- Jiayi Zhu：机构信息未在 arXiv HTML 中可靠披露
- Qirui Liu：机构信息未在 arXiv HTML 中可靠披露
- Yitong Qiao：机构信息未在 arXiv HTML 中可靠披露
- Changtong Xu：机构信息未在 arXiv HTML 中可靠披露
- Tao Wei：机构信息未在 arXiv HTML 中可靠披露
- Fei Sun：Zhejiang University Ant Group Institute of Computing Technology, CAS
- Zhixuan Chu：机构信息未在 arXiv HTML 中可靠披露
- Kui Ren：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

全模态大语言模型同时接收音频、视频和文本问题作答，当问题实际只需其中一种感官证据时，另一模态的显著内容可能诱发跨模态幻觉，例如看到猫而误报听到猫叫。论文把联合音频视频分支答错、而去掉干扰模态后问题相关单模态分支可答对的可恢复分歧称为模态误路由。CaRe先用只看问题的文本探针选出候选音频或视频分支，再比较候选分支与联合分支的离散预测，仅在两者明确且不一致时触发修正，修正信号进入下一步残差计算。修正时用候选分支与当前联合状态在解码器层最后提示词位置的隐状态差值构成残差方向，按候选分支决策间隔得到的置信度选择弱或强干预区间，并随层深衰减加到原音频视频表示上，之后保留双模态继续自回归生成。与对比解码和模态自适应解码的区别在于不丢弃任一模态输入，也不直接输出单模态答案。在Qwen2.5-Omni-7B的CMM视觉主导与音频主导两子集汇总总体准确率上，CaRe的85.9%高于基线的70.5%。该提升限于CMM与AVHBench幻觉评测的二选一是非问答等设置，探针无唯一候选或两分支无明确不一致时保留原预测故无法纠正此类误路由，在Qwen2.5-Omni-7B的Daily-Omni通用问答总体准确率上CaRe的61.8%仅略高于基线的61.5%，开放式生成效果未知。方法为免训练推理期干预，在相同200样本子集串行执行的平均每样本延迟上，Qwen2.5-Omni-7B上CaRe的6.70秒低于MAD的16.61秒，未披露训练成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全模态问答的输入是什么，要输出什么

这篇论文研究的是同时有声音、画面和文字问题的问答。输入是三部分：一段音频、一串视频帧、一个文字问题，输出是对问题的判断，评测里主要是回答是或否的选择题。理想情况下模型应当只依据问题真正需要的那个模态的证据作答，同时不丢掉另一个模态可能提供的补充上下文。

困难在于两个模态会互相拉扯。论文举了 2 个方向的例子：画面里出现猫，可能让模型误以为音频里有猫叫，而实际音频只有鸭叫；反过来，音频里有鸟叫，也可能让模型误以为画面里有鸟。下面的案例图把这种双向干扰说得很具体，值得先看清谁是干扰源、谁是被考查的模态。

> **看图路径：** 1. 对比上下两个案例中画面内容与声音内容标注有何错位；2. 比较同一问题下原始回答与 CaRe 回答对缺席事件的判断差异

[![原论文 Figure 2：Bidirectional modality misrouting under audio-visual interference.](https://arxiv.org/html/2610.18141v1/care_cases.png)](https://arxiv.org/html/2610.18141v1/care_cases.png)

*论文图 2。原论文 Figure 2:：“Bidirectional modality misrouting under audio-visual interference. CaRe mitigates these errors by steering the fused representation toward the selected modality-specific branch.”。*

上图左侧给出视频缩略图和声音标注，右侧并列原始模型回答与 CaRe 回答。第一个案例画面有猫和鸭子，声音标注为鸭叫、无猫叫，问题问是否听到猫叫；第二个案例画面只有马、无鸟，声音为鸟鸣，问题问是否看到鸟。原始回答在两个案例中都把干扰模态的内容说成真实感知，而 CaRe 回答否认了不存在的猫叫和鸟。可以把这张图理解为教学例子，它展示的是干扰方向和期望行为，不是性能数值证明。

### 已有缓解路线在输入和阶段上有何不同

论文把相关工作分成两类。第一类是全模态大模型本身，例如 OneLLM、VITA、Qwen-Omni、MiniCPM-o 等，它们把音频、视觉和文本统一接到语言模型里，目标是更强的联合感知，但更大的模态覆盖并不自动保证证据融合可靠。第二类是幻觉缓解，论文提到训练时对齐、表示干预、免训练解码修正 3 条路线，包括对比解码、模态重加权和激活 steering 等。

CaRe 与这些路线在运行阶段和监督来源上不同。它不需要重新训练，也不需要改模型参数，只在推理时对已有的开源全模态模型做选择性修正。对比的基线包括视觉对比解码、表示干预、音视频对比解码和模态自适应解码，论文在相同骨干和相同评测子集上比较准确率和 F1。需要提醒的是，不同方法扰动输入或解码的方式不同，比较的是同一任务上的最终判分效果，而不是同一内部机制的优劣。

### 什么是模态误路由，占比如何测得

论文提出的核心观察叫模态误路由，意思是联合音视频预测错了，但只保留问题真正需要的那个模态时，同一个冻结模型却能答对。也就是说，相关证据并没有丢失，只是没有在融合预测中体现出来。这种可恢复的失败与证据本身缺失是两回事，只有前者才适合用本文的纠偏思路。

为估计这种情形有多常见，作者做了如下统计：先找出联合分支答错的样本，再扣掉竞争模态，看问题相关单模态分支能否恢复正确答案，统计恢复比例。覆盖的是 CMM 的视觉主导和音频主导子集，以及 AVHBench 的两个跨模态幻觉任务。下图展示 4 个干扰方向上的恢复准确率。

> **看图路径：** 1. 先看横轴 CMM 与 AVHBench 四个干扰方向的分组含义；2. 再比较同一分组内两种 backbone 柱高是否都明显高于零

[![原论文 Figure 3：Target-branch recovery among incorrect joint predictions on CMM and AVHBench (%).](https://arxiv.org/html/2610.18141v1/misrouting.svg)](https://arxiv.org/html/2610.18141v1/misrouting.svg)

*论文图 3。原论文 Figure 3:：“Target-branch recovery among incorrect joint predictions on CMM and AVHBench (%).”。*

图中横轴是 4 个评测方向，纵轴是目标分支在联合答错样本上的准确率，单位是百分比。CMM 两柱明显高于 AVHBench 两柱，说明在 CMM 的答错样本中有更高比例可被相关单模态分支挽回。原文报告的范围是 CMM 上从 52.9% 到 74.4%，AVHBench 上从 37.3% 到 46.2%。这个统计只说明相当一部分联合失败仍保留可用的单模态证据，它支持去尝试纠偏，但不证明所有幻觉都属于此类。

### CaRe 的两阶段流程如何分工

CaRe 的全称是冲突感知的残差干预，流程分两段。第一段是检测：用只看文本的探针选出候选相关模态，构造对应的单模态反事实分支，再比较它与原始联合分支的离散决策，只有出现明确冲突才进入第二段。第二段是修正：用候选单模态表示与当前音视频表示之差构造残差方向，按候选分支的置信度选择弱或强力度，并在靠后的解码器层上逐层衰减地调整融合表示。
下图是方法总览，先看主路径再看门控和干预的关系。

> **看图路径：** 1. 先沿左侧音频、视频、问题进入同一模型的箭头看三路分支如何分开；2. 再看右下解码器中随层数变浅的三角与每层的加号注入点；3. 对照中间候选置信度仪表如何分出弱干预和强干预两条支路

[![原论文 Figure 1：Overview of CaRe. Given audio-visual inputs and a question, CaRe uses a text-only modality probe…](https://arxiv.org/html/2610.18141v1/care_pipeline.png)](https://arxiv.org/html/2610.18141v1/care_pipeline.png)

*论文图 1。原论文 Figure 1:：“Overview of CaRe. Given audio-visual inputs and a question, CaRe uses a text-only modality probe to select a candidate modality, detects decision conflicts between the joint and…”。*

左半是反事实冲突门：音频、视频、问题进入同一模型，文本探针在不看音视频的情况下给出候选单模态，联合分支与单模态分支各自给出是或否判断，再由决策冲突门判断是否放行。右半是自适应残差干预：候选单模态表示减去融合表示得到反事实残差，候选置信度决定弱或强干预区间，解码器侧用随深度衰减的系数在连续层上注入修正。关键点是修正始终作用在保留双模态的原始音视频路径上，而不是删掉干扰模态重跑。

### 文本探针如何选出候选分支

文本探针的输入只有问题文本，音频和视频都被扣掉，探针问题是回答该问题需要哪个模态，选项为音频、视频或两者。模型对 3 个选项给出分值，经 Softmax 转成概率，再看音频或视频是否唯一最大。若唯一偏向音频就选音频分支，若唯一偏向视频就选视频分支，否则不选参考分支。论文明确说明探针只提供问题级的模态需求信号，不接触当前样本的音视频内容，也不保证选出的就是事实正确的模态。

**联合分支 × 反事实单模态分支：** 联合分支指同时输入音频、视频和问题得到的原始音视频推理路径，保留完整多模态上下文；反事实单模态分支指扣掉竞争模态后只保留候选相关模态的对照路径，用来暴露联合预测是否偏离了本可恢复的证据。两者搭配后，联合分支负责最终输出，反事实分支只提供参考方向和冲突判断，不直接替换答案。

**文本探针 × 候选参考：** 文本探针指不看音视频、只看问题文本来估计需要音频、视频还是两者的问题级模态需求信号；候选参考指探针唯一偏向音频或视频时选出的对应单模态分支。探针只决定看哪个对照分支，不决定是否干预，避免把探针本身当作正确答案。

这种设计的代价是多跑分支，但好处是选择过程与内容无关，鲁棒性可以在不同探针措辞和选项顺序下检验。论文报告默认配置在 4 个骨干与基准组合上与任务定义的目标模态一致率达到 99.5% 到 100%，在 96 种措辞与排序组合中有 85 种达到至少 95% 一致，但也存在个别模型对措辞和排序敏感的情况。因此探针稳定是实验结论成立的 1 个条件，换措辞后仍需复核。

### 冲突门与残差修正具体怎么算

选出候选参考后，方法要求联合分支与候选分支都做出唯一明确的决策，且两者答案不一致，才把门置为通过。任 1 分支没有唯一偏好，或者两者答案相同，都保留原始联合输出，不做任何修改。这一条件把干预覆盖率压得很低，避免对无分歧样本做多余扰动。

\[g=\mathbb{I}\left[r\in\{A,V\}\;\land\;m_{r}>0\;\land\;m_{AV}>0\;\land\;\hat{y}_{r}\neq\hat{y}_{AV}\right].\]

上式中 r 是探针选出的候选模态，m 为决策间隔，y 帽为分支预测。门为 1 当且仅当候选有效、两侧间隔大于零且预测不同。决策间隔本身定义为最高候选分与次高候选分之差，间隔为零表示没有唯一偏好。

通过门的样本进入表示层修正。记候选分支在某层的最终提示词位置隐状态为单模态表示，当前音视频路径对应位置为融合表示，两者之差即为该层的反事实残差，方向是从当前融合状态指向候选参考。

\[\Delta h_{l}^{r}=h_{l}^{r}-h_{l}^{AV}.\]

候选分支的决策间隔经 Sigmoid 变换映射到零到一的置信分，间隔越大置信越高，再按阈值分为弱干预或强干预区间。低置信用保守的小区间，高置信用更大的区间。

\[u_{r}=2\sigma(m_{r})-1\in(0,1),\]

实际注入时只改预填充阶段最后一个提示词位置的隐状态，按系数把残差加回去，修正后的状态继续向后传播，后一层的残差按已修正的状态重新计算。系数在选定的连续层内随深度单调衰减，首层最强，末层最弱。

\[\tilde{h}_{l_{j}}^{AV}=h_{l_{j}}^{AV}+\alpha_{j}\Delta h_{l_{j}}^{r}=h_{l_{j}}^{AV}+\alpha_{j}\left(h_{l_{j}}^{r}-h_{l_{j}}^{AV}\right).\]

**反事实冲突门 × 残差干预：** 反事实冲突门指只有当候选单模态分支与联合分支都做出明确且不一致的离散决策时才允许纠偏的开关；残差干预指用候选单模态隐状态减去当前音视频隐状态得到的方向去小步调整融合表示。门负责筛选值得修的样本，残差负责给出往哪里修，组合后只修有明确分歧的样本。

**决策间隔 × 置信度自适应强度：** 决策间隔指某分支最高候选答案分与次高候选答案分之差，间隔越大表示该分支越果断；置信度自适应强度指把候选分支的间隔映射到零到一之间的置信分，再按阈值选择弱或强干预区间。间隔提供可比较的果断程度，阈值把连续置信转成保守或积极两档，避免对不确定的对照信号用力过猛。

**深度衰减 × 最终提示词位置：** 深度衰减指在选定的连续解码器层上让干预系数随层数加深逐渐减小，早层多改、近输出层轻修；最终提示词位置指只修改预填充阶段最后一个输入词元的隐状态，其余位置不动。两者搭配后，早期修正可经后续计算传播，后期只做温和精调，同时把扰动限制在一个紧凑的控制点。

整个过程不更新模型参数，梯度不参与训练，监督也不来自人工标注，而是来自同一冻结模型在不同输入配置下的自身表示与分值。原文没有报告去掉某一层或改变注入位置后必然如何，只能依据消融对照来理解各部件的作用。

### 没有训练时，实际计算和冻结了什么

本研究没有训练任何模型，所有骨干参数保持冻结。实际计算是多次调用同一个冻结的全模态模型：一次跑联合音视频推理得到预测和间隔，一次跑只看文本的探针得到候选模态，一次跑选出的单模态分支得到对照预测、间隔和各干预层的隐状态，最后再跑一次带残差注入的音视频预填充并自回归生成。

因此成本主要来自额外的推理分支，而不是优化器更新。需要区分的是，无训练不等于输出确定，评测用贪心解码且温度为零是为了让判分可重复，但模型本身仍是大规模神经网络的前向计算。复现时若改采样温度或解码策略，数字会变化。论文也没有给出用其他随机种子的方差，结论目前只在贪心判分条件下成立。

### 在哪些模型、数据和指标上比较

评测骨干是 Qwen2.5-Omni-7B 和 MiniCPM-o-2.6，另用 Qwen2.5-Omni-3B 做同系列跨尺度对照。幻觉评测用 CMM 的视觉主导和音频主导两个子集，以及 AVHBench 的视频驱动音频幻觉和音频驱动视频幻觉 2 个任务。CMM 每个主导子集含 400 个二元是或否问题，两个子集合计 800 题；AVHBench 2 个任务分别为 2290 题和 1136 题，且正负类平衡。通用问答用 Daily-Omni，含 1197 个多选问答，覆盖事件序列、对齐、推理等 6 类。

基线包括不修改的骨干，以及视觉对比解码、内部表示干预、音视频对比解码和模态自适应解码 4 种推理时方法，分别代表对比解码、表示干预和模态自适应路线。指标是准确率和以是为正类的 F1，整体准确率是对两个子集或任务的样本池化计算。干预默认放在最后 3 个语言解码器层，Qwen2.5-Omni-7B 和 MiniCPM-o-2.6 是第 25 到 27 层，3B 模型是第 33 到 35 层。比较的公平条件是同一骨干、同一评测划分和同一贪心判分，指标方向都是越高越好。

### 主结果在什么条件下优于所比基线

主结果要回答的问题是，在同一骨干和同一幻觉子集上，保留双模态路径的残差纠偏是否比所评估的推理时基线判得更准。表前需要说清比较范围：下面两张表只整理论文正文用连续句子给出完整数字的部分整体准确率和音频主导子集准确率，基线中的最强项按论文正文指认为模态自适应方法，指标方向为越高越好。

| 骨干模型 | 评测基准 | CaRe 整体准确率 | 相对最强基线提升 | 适用条件 |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni-7B | CMM 整体 | 85.9% | 9.8 points | 贪心判分，池化两个主导子集 |
| MiniCPM-o-2.6 | CMM 整体 | 86.9% | 9.6 points | 贪心判分，池化两个主导子集 |
| Qwen2.5-Omni-7B | AVHBench 整体 | 82.3% | 1.5 points | 贪心判分，池化两个幻觉方向 |
| MiniCPM-o-2.6 | AVHBench 整体 | 80.2% | 2.5 points | 贪心判分，池化两个幻觉方向 |

上表显示 CaRe 在两个骨干和两个基准的整体准确率上都高于正文所述的最强基线，CMM 上的领先幅度明显大于 AVHBench。这支持在模态过度依赖和双向干扰的二元判断任务上，冲突门加残差纠偏比所比的对比解码和自适应解码更有效。但限制也很清楚：提升只在报告的二元是或否任务、贪心判分和默认超参数下测得，开放式生成尚未验证。

第二张表聚焦提升最明显的音频主导子集，比较问题是当音频干扰视觉判断时，纠偏是否把联合预测拉回问题相关证据。

| 骨干模型 | 子集 | 最强基线准确率 | CaRe 准确率 | 备注 |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni-7B | Audio Dominance | 75.5% | 89.8% | 相对最强基线的子集对照 |
| MiniCPM-o-2.6 | Audio Dominance | 72.8% | 88.5% | 相对最强基线的子集对照 |

该子集上 CaRe 的准确率分别达到 89.8% 和 88.5%，相对正文所述最强基线的 75.5% 和 72.8% 有大幅提高，F1 也同步改善。解释是这类样本中可恢复的单模态证据比例较高，残差方向更可靠。但不能把子集的大幅领先推广到所有幻觉类型，AVHBench 上的整体领先只有 1.5 和 2.5 个百分点，说明干扰机制不同时收益会变小。

### 直接换答案为何不如残差纠偏

消融要回答的第一个问题是，好处究竟来自连续表示修正，还是仅仅因为选中了对照分支。作者构造了直接选择对照分支答案的变体，在门通过的样本上直接输出单模态预测，与 CaRe 的残差 steering 对比。两者在门不通过的样本上行为完全一致，因此只在门通过子集上比较。强度敏感性曲线也值得对照，下图显示增大总强度会同时带来更多修对和修错。

> **看图路径：** 1. 观察强度从 0.25 到 0.5 时准确率折线为何陡升；2. 对比绿色有帮助柱与红色有害柱随强度同步变高的趋势

[![原论文 Figure 8：Sensitivity to the intervention strength scale \\lambda_\\alpha on CMM.](https://arxiv.org/html/2610.18141v1/alpha_sensitivity_tradeoff.svg)](https://arxiv.org/html/2610.18141v1/alpha_sensitivity_tradeoff.svg)

*论文图 6。原论文 Figure 8:：“Sensitivity to the intervention strength scale \lambda_\alpha on CMM.”。*

左图为 Qwen2.5-Omni-7B，右图为 MiniCPM-o-2.6，横轴是强度缩放，左纵轴是准确率，右纵轴是样本数，绿色为修对数，红色为修错数。可见强度从 0.25 升到 0.5 时准确率陡升，之后趋平，而红绿柱都继续增高，说明更大力度是修对与修错的权衡，默认值为 1 处于较平稳的高位。

下面两张表分别整理跨尺度与直接选择的数字，比较条件均为同一骨干、同一基准划分和贪心判分。

| 骨干模型 | 评测基准 | 基线整体准确率 | CaRe 整体准确率 | 提升与限制 |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni-3B | CMM | 76.9% | 82.5% | 5.6 points，同系列小尺度仍有效 |
| Qwen2.5-Omni-3B | AVHBench | 76.4% | 81.0% | 4.6 points，提升小于 7B |
| 跨骨干对照 | CMM 与 AVHBench | 6.35 points | 10.82 points | CaRe 相对直接选择的最大增益 |

上表前两行显示 3B 小模型上 CaRe 仍有 5.6 和 4.6 个百分点的整体提升，说明方法不只依赖 7B 容量，但提升幅度小于 7B。第三行引自正文对直接选择变体的总结，CaRe 在门通过样本上最多比直接输出对照答案高 10.82 个百分点和 6.35 个百分点，支持保留双模态上下文的连续修正比硬切换更有价值。未胜出的细节是层位置消融中早层和中间层收益有限，只有靠后层才明显改善，因此默认选最后三层。

| 骨干模型 | 通用问答整体 | 基线准确率 | CaRe 准确率 | 可恢复性背景 |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni-7B | Daily-Omni | 61.5% | 61.8% | 通用问答，非幻觉重点 |
| MiniCPM-o-2.6 | Daily-Omni | 61.0% | 61.5% | 推理类小幅改善 |
| 联合失败样本 | CMM | 52.9% | 74.4% | 目标分支恢复率范围 |
| 联合失败样本 | AVHBench | 37.3% | 46.2% | 目标分支恢复率范围 |

通用问答上 CaRe 只带来 0.3 和 0.5 个百分点的小幅整体提升，推理和推断类稍好，但部分类别持平或略降，说明它没有损害通用音视频问答，但也不能当作通用推理增强。恢复率两行提醒前提条件：只有当联合答错中有 30% 到 70% 可被相关单模态挽回时，纠偏才有操作空间，若证据本身弱编码或没有显式决策冲突，门不会触发。

### 哪些情形下方法可能不触发或无效

论文在结尾明确列出 3 类局限。第一，方法假设有用证据仍在单模态分支中可获取，若相关证据本身编码很弱，残差方向也不可靠。第二，冲突门建立在离散答案空间上的硬分歧，若误路由没有表现为明确的预测冲突，门不会激活。第三，任务需要有可评分的候选答案空间，开放式生成的软冲突信号和通用路由标准尚未解决。

此外还有推理开销。文本探针、联合推理、对照分支和带干预的重跑都需要前向计算，串行执行时平均每样本数秒，残差注入本身只占小部分。附录估计理想分支并行可降低约三成延迟，但那是忽略调度与通信开销的理论估计，不是实测部署延迟。没有测量误判率分布、长视频或噪声条件下的表现，就不能承诺这些条件下同样改善。

### 复现第一步要固定哪些信息条件

复现应从信息条件入手，而不是先调强度。第一步是按原文固定 3 种输入配置：联合输入为音频加视频加问题，音频分支扣掉视频，视频分支扣掉音频，探针分支同时扣掉音频和视频并在问题后追加需要哪个模态的提示。判分用候选答案标签的下一词元分值，决策间隔为最高分减次高分，门要求两侧间隔大于零且答案不同。

超参数按骨干与基准分别设置，干预层为最后三层，衰减指数为 0.5，Qwen 系列阈值多为 0.2，MiniCPM 在 CMM 上为 0.3、在 AVHBench 上为 0.5，弱强区间按表配置。基线复现需注意视觉对比解码是作者为全模态对称改写的版本，用扣掉模态的对照分支做校准，不是原视觉模型的噪声扰动版本。来源方面，本次未能确认作者代码与模型资源已公开，只能按论文附录的算法与超参数表逐步实现。

### 什么时候值得尝试，还缺哪项验证

当任务是二元或有明确候选的音视频判断，且怀疑一个模态在干扰另一个模态时，值得尝试 CaRe 式的先检测后纠偏。特别是联合答错但单模态可能答对的比例较高，且探针能稳定选出问题相关模态的场景，预期收益更大。若任务是开放式描述，或探针在换措辞后不稳定，应先做小规模恢复率统计再决定。

复现的第一步是实现文本探针与冲突门，先统计门通过率和直接选择对照分支的效果，再加入残差与自适应强度。还需要补的验证包括开放式生成的软冲突度量、更多噪声与时长条件下的稳定性，以及带并行的实测延迟与成本分解。只有在这些条件下重新测得一致提升，才能把结论从报告的二元幻觉基准推广到更一般的部署场景。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.18141v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
