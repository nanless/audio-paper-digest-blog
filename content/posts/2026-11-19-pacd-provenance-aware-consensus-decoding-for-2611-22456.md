---
title: "PACD: Provenance-Aware Consensus Decoding for Mitigating Cross-Modal Hallucinations in Omnimodal Large Language Models"
date: 2026-11-19
draft: false
tags: [音视频问答, 工具增强与约束解码, 幻觉与忠实度, 多模态模型]
categories: [论文速递]
description: "针对全模态问答中无关模态干扰与多分支错误一致问题，PACD 在不训练的情况下按是否共识分两路仲裁与恢复，在四个模型与五个基准上提升了幻觉基准准确率并保持了相近的推理开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.22456"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "当音频和视频互相干扰时如何保留可靠证据并修正错误共识"
paper_digest_original_title: "PACD: Provenance-Aware Consensus Decoding for Mitigating Cross-Modal Hallucinations in Omnimodal Large Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.22456v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.22456v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.22456v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对全模态问答中无关模态干扰与多分支错误一致问题，PACD 在不训练的情况下按是否共识分两路仲裁与恢复，在四个模型与五个基准上提升了幻觉基准准确率并保持了相近的推理开销。"
paper_digest_authors: [{"affiliations":["Xi’an Jiaotong University"],"name":"Chang Sun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yijun Tian"},{"affiliations":["University of Toronto"],"name":"Zhenwei Tang"},{"affiliations":["Tsinghua University","Pengcheng Laboratory"],"name":"Yuchen Deng"},{"affiliations":["University of Toronto"],"name":"Yifan Simon Liu"},{"affiliations":["Xi’an Jiaotong University"],"name":"Chenxu Wang"},{"affiliations":["Xi’an Jiaotong University"],"name":"Wei Wang"}]
paper_digest_abstract_sha256: "a4e3b3a5dc7af4a0b0256ea65e47bc914a514aea79b44021a8561139dbb4585e"
paper_digest_sidecars: {"citation.bib":{"sha256":"1f2c35a39b8a5638c3b3317ea8d0ef88550d32d69296c57c7b57951372e3ac68","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22456/citation.bib"},"citation.json":{"sha256":"51a2f523eef67a8f50fd28a3860e46fddd9445fd611638dc12f09f054c262abd","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22456/citation.json"},"citation.ris":{"sha256":"7eb951956c9178e96d2fb398055e06439a4c47b345261dbcc6d7effd9d9026a0","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22456/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"596398459189203d94f46cef5157473143ba438fed1deb1508c24a597c3d6565","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22456/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "16b13bf7cc97b45bc855fbcc688f590465973bbbc6414c6e8e7ff3dfd18a6a9e"
paper_digest_api_reader_plan_sha256: "80748c976dc1b07f88fb41efbebc80c244f5daae59403f83a8e2e9947db87fc8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "db01aacffbc7ed54a1a8e85501535a5345dea95981da67398b60549125ac5a85"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "7f782334e1a4e0f9a4a7f4b39a1721a54e4abd06eb95f0bb19515cb38f838941"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "fd92fd6655579e5185d2fcd0a1e28b23a0cc55e2aec0e0461be339319a520142"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "5d9bd90c45ccb44878e6268e05fe5298442465938b079bfe556ce06443a5a0b6"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 当音频和视频互相干扰时如何保留可靠证据并修正错误共识

> 英文题目：*[PACD: Provenance-Aware Consensus Decoding for Mitigating Cross-Modal Hallucinations in Omnimodal Large Language Models](https://arxiv.org/abs/2611.22456v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)
- **研究重点**：[幻觉与忠实度](/audio-paper-digest-blog/papers/?concept=research_focus.hallucination-faithfulness)
- **模型家族**：[多模态模型](/audio-paper-digest-blog/papers/?concept=model_family.multimodal)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chang Sun：Xi’an Jiaotong University
- Yijun Tian：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhenwei Tang：University of Toronto
- Yuchen Deng：Tsinghua University；Pengcheng Laboratory
- Yifan Simon Liu：University of Toronto
- Chenxu Wang：Xi’an Jiaotong University
- Wei Wang：Xi’an Jiaotong University

## 📌 核心摘要

全模态大语言模型以音频、视频和文本问题为输入并生成答案，难点是无关模态线索在融合时压制正确单模态证据，且音频、视频与联合分支可能达成同一错误共识。方法先按音频分支、视频分支与音视频联合分支的预测是否一致分流，不一致走相关性引导的候选仲裁，一致走基于溯源的共识恢复。不一致时，先选与问题最相关的单模态分支预测作为路由候选，再从联合分支逐层目标模态贡献中提取备选答案并送入置信度否决，输出仲裁答案。一致时，把跨层支持比例与支持强度、候选唯一性与置信度约束作为恢复依据，判断是否用备选推翻共享预测并输出最终答案。与只做加权平均的已有免训练解码不同，该方法既保留可靠单模态证据，又在层级溯源证据足够时修正错误共识，从而在保持单模态正确率的同时提升联合判断的鲁棒性。在CMM上使用Qwen2.5-Omni-7B时，本文方法的ACC为87.3%，高于标准解码的68.4%。推理开销方面，在80GB显存的A100上使用VideoLLaMA2-AV-7B时，CMM单次时延约1.45秒、峰值显存约20.7GB，与对照方法基本持平。结论适用于所测四个模型和五个音视频基准，尚不能推广到未测语言、长视频分布和实时部署条件。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/SunChang726/PACD> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全模态问答的输入、目标与容易被干扰的地方

刚进入音频视频理解的研究生可以先把任务想成选择题作答。输入有三部分，音频波形或语音、视频帧序列、以及文字问题，模型要在给定候选答案集合中选出一个。目标是在音频和视频互相提供背景时仍答对需要的那一个模态，例如视频里有人抱着吉他但实际没有琴声，问音频里有没有吉他音乐时应当回答没有。必须保留的信息是与问题直接相关的那个模态的证据，不能因为另一个模态更显眼就被带偏。

输出是每个问题的选项编号或是否回答，评价用准确率，方向是越高越好。总体准确率按题目数量加权，而不是把各类别准确率简单平均，这一点在阅读分类别数字时很重要。论文研究的不是开放式描述生成，而是二选一或三选一的判别式问答，因此后续所有分支预测、置信度比较和恢复条件都围绕有限候选集合展开。

**全模态大语言模型 × 跨模态幻觉：** 全模态大语言模型指同时接受音频、视频与文本并做联合推理的模型，跨模态幻觉指其中一个模态的线索错误地改变了对另一个模态问题的回答，二者搭配的意义在于联合输入既可能互补也可能互相污染，因此需要在解码阶段区分证据来源。

理解这个任务后才能明白干扰的来源。联合输入把音频 token 和视频 token 放在同一次前向中，解码器自注意力会同时看到两者，如果问题问的是声音，画面中的乐器、动物或动作就可能成为误导线索，反之亦然。训练好的主干参数在解码时保持冻结，PACD 不改权重，只在推理时组织多次前向得到的不同分支预测与内部注意力贡献，再决定最终选哪一个候选。

### 已有免训练解码路线解决了什么又留下了什么

已有路线都属于免训练解码，也就是不更新模型参数，只在推理时调整 logits 或融合多个输入条件下的预测。AVCD 的做法是用注意力引导的模态掩蔽构造对比预测，再用对比差异修正原始音视频预测，意图减弱误导模态的影响。MAD 的做法是先用一个固定的模态询问提示判断当前问题更需要音频、视频还是两者，再给出 3 个相关性分数，并用它们对联合音视频、纯音频、纯视频和纯文本 4 个分支的 logits 做加权融合，文本分支取负权重以抑制语言先验。

这两条路线与 PACD 的输入、目标和运行阶段相同，都是在相同主干、相同问题和相同候选下做解码期选择，因此可以直接比较准确率。区别在于处理失败的方式不同，AVCD 依赖扰动后的对比，MAD 依赖相关性加权，但加权本身不保证保留最相关单模态分支的正确答案，也不保证多个分支一致时答案就正确。论文用 OmniVinci 在 SVHalluc 上的统计把这一点具体化，后文问题小节会展开数字。

**AVCD × MAD：** AVCD 通过注意力引导的模态掩蔽构造对比 logits 来削弱误导线索，MAD 按问题相关的模态相关性加权融合四个分支预测，二者都是免训练的解码期干预，前者重在扰动对比，后者重在相关性加权，PACD 在此基础上进一步处理加权后仍残留的两类失败。

对初学者而言，关键是不要把相关性高低等同于答案正确。相关性分数只说明问题在文字上更像问哪个模态，融合权重只决定各分支 logits 的系数，系数大的一方仍可能在当前样本上答错。PACD 保留 MAD 的融合结果作为参照，但另起两条路径分别处理非共识与共识，而不是只调一次权重就结束。

### 论文要解决的两个具体失败是什么

第一个失败是可靠单模态预测在融合中丢失。论文统计 OmniVinci 在 2405 道 SVHalluc 题目中，有 1272 道题的最相关单模态分支本身答对，但 MAD 在这其中答错 111 道。图 2 左侧用吉他例子说明，音频分支正确预测没有吉他音乐，视频分支和联合分支受画面中吉他的误导回答有，融合后仍回答有。也就是说，任务相关证据已经存在，却在加权融合后被淹没。

第二个失败是错误共识持续存在。在 1791 道音频分支、视频分支与联合分支三者预测完全相同的题目中，有 806 道是一致但答错，MAD 只修正其中 23 道，剩下 783 道未被修正，占比 97.1%。图 2 右侧用狗叫声问画面中有无猫的例子说明，三者一致回答有，而正确答案是没有，此时仅看分支是否一致无法发现错误。右侧热图示意即使分支一致，来自任务相关模态的层内证据仍可能倾向正确答案，这为后续恢复提供了线索。

为理解这两类失败与论证的关系，请按以下顺序观察动机图，图中左侧给出分支对照与统计带，右侧给出一致错误与内部证据示意。

> **看图路径：** 1. 先看左侧例子中音频正确而融合错误的分支对照；2. 再看右侧三分支一致错误时内部证据热图的倾向；3. 最后对照底部两条统计带中未被 MAD 修正的比例

[![原论文 Figure 2：Motivation of PACD. (a) Correct modality-specific predictions may be lost during fusion.](https://arxiv.org/html/2611.22456v1/Motivation.png)](https://arxiv.org/html/2611.22456v1/Motivation.png)

*论文图 2。原论文 Figure 2:：“Motivation of PACD. (a) Correct modality-specific predictions may be lost during fusion. (b) Incorrect consensus among modality-specific branches often remains unresolved by MAD.”。*

该图确实可见左侧标注了音频相关性 0.82、视频 0.12 的条形，以及音频正确而融合错误的对照，底部标注 111 与 1272 的比例。右侧可见 3 分支一致错误而 MAD 同样错误的链条，以及备选 token 在不同层上支持方向不同的示意，底部标注 783 与 806 的比例。它的作用是把后文分路的必要性具体化，非共识时需要仲裁以保住正确分支，共识时需要额外证据才敢推翻一致预测，而不是把一致直接当作正确。

### PACD 如何按是否共识分成两条路径

PACD 的总体流程可以沿一个样本走一遍。同一道题会做多次前向，分别得到音频分支预测、视频分支预测、联合音视频分支预测、文本分支 logits 以及 MAD 融合预测，同时从联合分支已有的前向中记录注意力贡献作为来源证据，不修改注意力输出或隐状态。接着判断前三者是否完全相同，若不相同走相关性引导的候选仲裁，若相同走基于来源的共识恢复，若恢复条件不满足则退回 MAD 预测。两条路径共享路由候选与来源统计，但决策目标不同。

为对照原文总览图理解分流，下图左侧从模态问询与相关性权重出发分出 4 路分支与上下两条路径，右侧分别展开仲裁与恢复的内部步骤，可按从左到右的走向先看整体再看细节。

> **看图路径：** 1. 沿左侧从模态问询与相关性权重到上下两条路径的走向看整体分流与四路分支；2. 比较右上 RGCA 的路由、来源证据构造与置信仲裁与右下 PBCR 的共识、唯一性与选择性恢复在输入证据与输出决策上的不同；3. 注意底部最终预测在非共识用仲裁结果、共识且满足恢复条件用备选、否则保留 MAD 的三选一规则

[![原论文 Figure 3：Overview of PACD. RGCA preserves reliable modality-specific predictions through relevance-guided…](https://arxiv.org/html/2611.22456v1/framework.png)](https://arxiv.org/html/2611.22456v1/framework.png)

*论文图 3。原论文 Figure 3:：“Overview of PACD. RGCA preserves reliable modality-specific predictions through relevance-guided routing and provenance-based arbitration.”。*

该图右上 RGCA 依次完成模态相关性路由选出目标分支预测、由联合分支层级注意力贡献构造备选证据、再用目标分支与 MAD 的置信边际做否决式仲裁；右下 PBCR 依次判断音频、视频与联合 3 分支是否共识、评估备选的层级一致性与强度及唯一性、仅在满足一致性、强度与置信约束时触发恢复，否则保留 MAD 预测；左侧示例最终由来源证据将 MAD 预测纠正为路由候选。

**音频分支 × 视频分支 × 联合音视频分支：** 音频分支只看音频加问题，视频分支只看视频加问题，联合音视频分支同时看两者，三者保留相同问题而改变感知输入，组合起来才能判断分歧来自缺失模态还是融合过程，PACD 的分路正是先看这三者是否给出同一答案再决定后续处理。

模态相关性来自 MAD 原有的评估，先用固定提示得到对应音频、视频和两者的 logits，再做 softmax 得到 3 个分数。这一点对应原文的相关性计算，其含义是问题文字与各模态的关联程度，数值越大表示越相关，但它只用于选出目标模态，不直接决定最终答案。

\[(r_{A},r_{V},r_{AV})=\operatorname{softmax}\!\left([u_{A},u_{V},u_{AV}]\right).\]

上式中左侧是 3 个相关性分数，右侧是对 3 个提示 logits 做 softmax，3 个分数和为 1。得到分数后，PACD 比较音频分与视频分选出目标模态，并取该模态分支的预测作为路由候选。联合分支的 logits 按原文加权规则融合得到 MAD 预测，权重和为 4，联合分支随两者相关性增大而占更大系数，文本分支为负以压制先验。最终输出按是否共识与是否满足恢复条件在路由仲裁结果、备选答案与 MAD 预测之间三选一。

### 非共识时如何保住任务相关的单模态答案

相关性引导的候选仲裁处理的是 3 分支不一致的情形。第一步是路由，比较音频相关性与视频相关性，若前者更大则目标为音频，否则为视频，路由候选就是该目标分支原来的预测答案，而不是用新规则重新排序得到的新答案。这一步区分了找到相关证据与是否采纳该证据，相关性只解决看哪里，采纳与否留给置信度比较。

\[m^{*}=\begin{cases}A,&r_{A}>r_{V},\\ V,&r_{A}\leq r_{V},\end{cases}\qquad c_{R}=c_{m^{*}}.\]

上式说明目标模态的判定规则与路由候选的来源，路由候选直接取自被选分支的预测。第二步是构造备选，从除路由候选之外的有效答案中，利用联合分支内目标模态的注意力贡献在候选 logit 空间中的投影，逐层计算备选相对路由候选的差异，再经稳健尺度归一化后取多层中位数作为支持强度，选出中位数最高的备选作为最强备选。所有贡献都来自已有联合前向的记录，不改变模型计算，只作为内部来源指示。

第三步是置信度仲裁，分别计算目标分支与 MAD 对路由候选相对最强备选的归一化 logit 差，记为目标分支偏好与融合偏好，再结合路由候选是否与 MAD 预测不同做否决式判断。只有当两者不同、目标分支不够坚持路由候选、且 MAD 明显反对路由候选时，才保留 MAD 预测，否则采用路由候选。这样既给任务相关分支留出被采纳的机会，又避免在融合证据更强时无故替换。

**相关性引导的候选仲裁 × 基于来源的共识恢复：** 相关性引导的候选仲裁负责非共识情形，保留任务相关单模态的可靠答案并与融合答案做置信度比较，基于来源的共识恢复负责共识情形，用层内来源证据检验一致预测是否可疑，二者分工覆盖了融合丢失正确与共识掩盖错误两种失败，合在一起才构成完整的条件解码。

需要提醒的是，这里的中位数、归一化尺度和阈值都是为了让不同主干、不同量级的 logit 差可以比较，阈值本身用约 10% 样本经粗到细搜索选定，不更新模型权重。消融显示仅做路由还不够，加上备选构造与置信度仲裁后在 CMM 与 AVHBench 上才有明显增益，具体数字见后文消融表。

### 共识时如何用层内证据谨慎推翻一致预测

基于来源的共识恢复处理的是音频、视频与联合三者预测完全相同的情形。此时不能只看分支是否一致，因为一致也可能是共同受误导。PACD 沿用前一路得到的路由候选与最强备选，但改用另一套非补偿决策，要求充分支持与无强反对同时成立才允许修正，这一点借鉴了外排序原则的思想，即备选需要足够多层的赞成且没有来自关键分支的强烈反对。

具体做法是先算来源一致性，也就是在考察的若干解码层中有多大比例的层内归一化差异大于零，表示目标模态在该层更支持备选而非路由候选。再看来源强度，即前一路已算出的中位支持，以及候选唯一性，二选一问题天然唯一，多选问题要求最优备选与次优备选的强度差超过极小量。最后看置信度约束，要求目标分支偏好与融合偏好的最大值小于恢复阈值，含义是没有任何一方强烈坚持路由候选。

\[x_{\ell}(c)=\frac{d_{\ell,m^{*}}(c)}{s_{e}(c)}.\]

上式是逐层归一化差异，分子是该层目标模态对备选与路由候选的贡献差，分母是跨层稳健尺度，避免单层幅度主导比较。归一化后取中位数即得强度，统计大于零的层比例即得一致性，二者描述的是同一组层证据的不同侧面，一个管幅度，一个管广度。

\[c^{*}=\arg\max_{c\in\mathcal{A}_{i}}Q(c),\quad Q(c)=\operatorname{median}_{\ell\in\mathcal{L}_{N}}x_{\ell}(c).\]

上式说明最强备选是按中位支持在有效备选中取最大者，不使用正确答案信息。恢复条件把共识标志、唯一性、一致性阈值、强度阈值与置信度上限做逻辑与，只有全部满足才用备选替换共识，否则保留 MAD 预测。这种保守设计使得修正只发生在备选指向明确且原共识无人强力坚持时。

**来源一致性 × 来源强度 × 候选唯一性：** 来源一致性统计有多少解码层支持备选答案，来源强度度量这种支持的中位幅度，候选唯一性要求最优备选明显区别于其他备选，三者搭配的意义是用非补偿规则同时要求证据广泛、有力且指向明确，避免单层噪声或多个备选相近时轻易推翻共识。

论文的定性例子显示，在盐是否可见与语音时视觉动作的两组共识错误中，10 个考察层里有 7 层支持正确答案，满足一致性与强度要求后得以纠正。反之，若层证据分散或分支置信度仍高，方法会选择不恢复，这解释了为何它能把 806 个错误共识中的 570 个修正，同时仍留下部分未修正。

### 在哪些模型、数据与解码条件下比较

评估覆盖 4 个主干，分别为 VideoLLaMA2-AV-7B、OmniVinci、Qwen2.5-Omni-3B 与 Qwen2.5-Omni-7B，参数全程冻结，不做任何训练，只改变推理时的解码组织。视频按 2 帧每秒采样，最多 768 帧，同一主干下各方法用相同题目与相同输入准备，保证比较条件一致。对比对象包括标准联合解码、AVCD 与 MAD，其中 MAD 的对比强度固定为 2.5，PACD 的层数与阈值参考配置为考察 10 层与若干置信度阈值，具体数值在原文超参数表中给出并用小部分样本选定。

基准分两类，幻觉类包括 CMM、AVHBench 与 SVHalluc，泛化类包括 OmniVideoBench 与 FutureOmni。CMM 含 800 题，分视觉主导与音频主导各 400 题，考察误导线索与模态主导。AVHBench 含 3426 题，分视频驱动的音频幻觉 2290 题与音频驱动的视频幻觉 1136 题，考察双向干扰。SVHalluc 含 2405 题，分语义 1422 题与时间 983 题，下含全局语义对齐、细粒度语义对齐、跨模态语义绑定、时间对齐、时间预测与跨模态时间绑定 6 个子任务，含两选一与三选一。泛化类分别含 1000 题与 1034 题，考察通用音视频推理与未来事件预测。准确率均为按题加权，方向越高越好。

实现上每个候选通过分词器映射到答案 token，在答案生成位置取 logits 做分支预测与置信度比较，来源证据从联合前向的注意力贡献经输出投影得到。时长分组按准备后输入时长划分，CMM 与 AVHBench 分 3 组，SVHalluc 分 4 组，用于考察短长视频下的稳定性。统计上还用按媒体聚类的自助法评估提升的稳定性，所有区间均在零以上，说明改进不是个别题目驱动。

### 主结果在什么条件下成立，提升与代价各是什么

要回答的核心问题是，在相同主干、相同题目与相同候选下，PACD 相对标准解码与最强基线是否更准，以及代价是否可接受。下表比较了 4 个主干在 3 个幻觉基准上的总体与分类别准确率，指标为百分比，总体按题加权，方向越高越好，公平条件是各方法共享主干与输入准备。

| Method | CMM | CMM | CMM | AVHBench | AVHBench | AVHBench | SVHalluc | SVHalluc | SVHalluc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Visual Dom. | Audio Dom. | Overall Acc. | Video-Driven Audio Hall. | Audio-Driven Video Hall. | Overall Acc. | Sem. | Temp. | Overall Acc. |
| VideoLLaMA2-AV-7B |  |  |  |  |  |  |  |  |  |
| Base | 72.3 | 82.3 | 77.3 | 70.8 | 76.1 | 72.6 | 57.2 | 43.8 | 51.7 |
| AVCD | 69.8 | 84.8 | 77.3 | 78.0 | 80.1 | 78.7 | 62.5 | 45.2 | 55.4 |
| MAD | 81.3 | 80.5 | 80.9 | 79.7 | 77.0 | 78.8 | 65.1 | 44.5 | 56.7 |
| PACD | 86.5 | 78.3 | 82.4 (↑6.6%) | 81.2 | 79.4 | 80.6 (↑11.0%) | 71.0 | 45.0 | 60.4 (↑16.8%) |
| OmniVinci |  |  |  |  |  |  |  |  |  |
| Base | 81.0 | 83.8 | 82.4 | 72.2 | 68.8 | 71.1 | 54.5 | 45.8 | 50.9 |
| AVCD | 85.5 | 76.3 | 80.9 | 72.8 | 65.2 | 70.3 | 68.0 | 44.9 | 58.5 |
| MAD | 86.0 | 84.8 | 85.4 | 77.6 | 70.2 | 75.1 | 59.2 | 46.3 | 53.9 |
| PACD | 88.5 | 86.3 | 87.4 (↑6.1%) | 82.6 | 71.0 | 78.8 (↑10.8%) | 75.7 | 46.4 | 63.7 (↑25.1%) |
| Qwen2.5-Omni-3B |  |  |  |  |  |  |  |  |  |
| Base | 70.8 | 85.3 | 78.0 | 73.4 | 80.5 | 75.8 | 72.7 | 42.1 | 60.2 |
| AVCD | 75.5 | 67.0 | 71.3 | 70.5 | 77.1 | 72.7 | 66.2 | 45.3 | 57.7 |
| MAD | 74.5 | 86.3 | 80.4 | 80.1 | 82.5 | 80.9 | 77.9 | 45.2 | 64.5 |
| PACD | 80.8 | 88.5 | 84.6 (↑8.5%) | 82.7 | 81.8 | 82.4 (↑8.7%) | 78.0 | 47.6 | 65.6 (↑9.0%) |
| Qwen2.5-Omni-7B |  |  |  |  |  |  |  |  |  |
| Base | 66.5 | 70.3 | 68.4 | 73.0 | 80.4 | 75.5 | 77.5 | 46.2 | 64.7 |
| AVCD | 72.8 | 66.0 | 69.4 | 68.1 | 77.9 | 71.3 | 76.2 | 45.3 | 63.5 |
| MAD | 76.5 | 84.0 | 80.3 | 78.9 | 84.7 | 80.8 | 82.3 | 46.7 | 67.8 |
| PACD | 85.0 | 89.5 | 87.3 (↑27.6%) | 80.7 | 84.7 | 82.0 (↑8.6%) | 82.8 | 48.5 | 68.8 (↑6.3%) |

该表支撑的判断是，在全部 12 个模型与基准组合上 PACD 总体准确率最高，且相对标准解码有明显相对提升，论文摘要与正文给出跨 CMM、AVHBench 与 SVHalluc 最高 27.6% 的相对提升，以及在 Qwen2.5-Omni-7B 上平均 14.2% 的相对提升。分类别看，视觉主导、音频主导、视频驱动、音频驱动、语义与时间等细分在多数情况下随总体改善，但并非每一格都单调最优，例如个别音频主导格会出现波动，因此结论应表述为总体最优而非所有细分全胜。限制是这些数字只在二选一或三选一的判别式问答、冻结主干与给定采样下成立，不能直接推广到开放式描述或重新训练的情形。

为理解提升的分布，请先看雷达图中紫色实线相对其他方法的包络，再对照上表总体数字，注意时间轴量程与其他轴不同。

> **看图路径：** 1. 比较左右两幅雷达图中紫色实线与其他虚线的包络大小；2. 注意时间轴与其他轴量程不同，避免直接比较绝对半径；3. 区分 CMM、AVHBench 与 SVHalluc 各自对应的轴段

[![原论文 Figure 1：PACD achieves the state-of-the-art on CMM, AVHBench, and SVHalluc across Qwen2.5-Omni-7B and…](https://arxiv.org/html/2611.22456v1/Intro.png)](https://arxiv.org/html/2611.22456v1/Intro.png)

*论文图 1。原论文 Figure 1:：“PACD achieves the state-of-the-art on CMM, AVHBench, and SVHalluc across Qwen2.5-Omni-7B and OmniVinci.”。*

该图确实可见在 Qwen2.5-Omni-7B 与 OmniVinci 的两幅雷达中，代表 PACD 的紫色实线在多数轴上包住代表标准解码、AVCD 与 MAD 的虚线，尤其在语义与视觉主导轴上外扩明显，而时间轴因量程为 44% 到 49% 显得半径变化小，阅读时需结合图下标注的量程说明。该图帮助理解总体提升来自多个方向的共同外扩，而非单一类别拉动，但它不给出统计显著性与代价，需与主表对照。

泛化比较要回答的是幻觉之外的通用音视频推理与未来预测是否也受益，条件是同一主干下比较 MAD 与 PACD，指标仍为准确率，方向越高越好。在 VideoLLaMA2-AV 上，PACD 在 OmniVideoBench 上达到 31.1，相对 MAD 提升 9.9%，在 FutureOmni 上达到 40.0，相对提升 10.2%。在 OmniVinci 上，PACD 分别达到 34.8 与 53.5，相对 MAD 提升 7.1% 与 3.5%。这说明来源证据与仲裁机制不只针对幻觉设计的对抗样本，对需要跨模态互补的一般推理也有帮助。限制是泛化评估只覆盖两个主干与两个基准，且未来预测本身难度大、绝对准确率不高，因此只能说在所测条件下一致改善，不能断言对所有长视频或开放域预测都有效。读者应拿它与上一个幻觉主表对照，确认提升不是以牺牲通用推理为代价。

### 简化策略与组件拆分说明了哪部分在起作用

消融要回答的是，收益究竟来自简单的加权技巧还是来自仲裁与恢复。若只把相关性均匀化或独热化而保留 MAD 融合结构，能否达到同样效果。下表在 OmniVinci 上比较均匀加权、独热加权、MAD 与 PACD，条件是相同主干、相同基准与相同融合系数，只改变相关性使用方式。

| Method | CMM | CMM | CMM | AVHBench | AVHBench | AVHBench | SVHalluc | SVHalluc | SVHalluc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Visual Dom. | Audio Dom. | Overall Acc. | Video-Driven Audio Hall. | Audio-Driven Video Hall. | Overall Acc. | Sem. | Temp. | Overall Acc. |
| Base | 81.0 | 83.8 | 82.4 | 72.2 | 68.8 | 71.1 | 54.5 | 45.8 | 50.9 |
| Uniform | 86.0 | 85.8 | 85.9 | 76.2 | 68.6 | 73.7 | 57.0 | 46.2 | 52.6 |
| Argmax | 86.3 | 82.3 | 84.3 | 74.7 | 68.8 | 72.7 | 59.6 | 45.1 | 53.6 |
| MAD | 86.0 | 84.8 | 85.4 | 77.6 | 70.2 | 75.1 | 59.2 | 46.3 | 53.9 |
| PACD | 88.5 | 86.3 | 87.4 | 82.6 | 71.0 | 78.8 | 75.7 | 46.4 | 63.7 |

该表支撑的判断是，均匀与独热两种简化策略在 CMM、AVHBench 与 SVHalluc 上均低于 PACD，原文指出在 OmniVinci 上分别低 1.5、5.1 与 10.1 个百分点。这说明仅调整权重分布不能替代候选级仲裁与共识恢复，尤其在 SVHalluc 语义类上差距拉大，暗示层内来源证据提供了权重之外的信息。限制是该对照仅在 OmniVinci 主表展示，其他主干的完整对照见补充材料，不能把单一主干的差值直接当作所有模型的通用幅度。

进一步拆分组件时，路由指直接采用目标分支预测，RGCA 指加上备选构造与置信度仲裁但不做共识恢复，R 加 PBCR 指保留路由与恢复但去掉仲裁。下表给出三者在 3 个基准上的结果，条件与上相同，指标为百分比。

| Method | CMM | CMM | CMM | AVHBench | AVHBench | AVHBench | SVHalluc | SVHalluc | SVHalluc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Visual Dom. | Audio Dom. | Overall Acc. | Video-Driven Audio Hall. | Audio-Driven Video Hall. | Overall Acc. | Sem. | Temp. | Overall Acc. |
| Base | 81.0 | 83.8 | 82.4 | 72.2 | 68.8 | 71.1 | 54.5 | 45.8 | 50.9 |
| Routing | 87.8 | 79.3 | 83.5 | 77.7 | 67.6 | 74.3 | 59.7 | 44.9 | 53.6 |
| RGCA | 88.3 | 85.5 | 86.9 | 81.6 | 69.8 | 77.7 | 59.8 | 45.5 | 54.0 |
| R+PBCR | 88.0 | 80.0 | 84.0 | 78.7 | 69.3 | 75.6 | 75.0 | 45.4 | 62.9 |
| PACD | 88.5 | 86.3 | 87.4 | 82.6 | 71.0 | 78.8 | 75.7 | 46.4 | 63.7 |

该表支撑的判断是，两条路径互补，RGCA 在 CMM 与 AVHBench 上相对路由有数个百分点的总体提升，R 加 PBCR 在 SVHalluc 上把语义准确率从约 59.7% 提升到 75.0% 附近，而完整 PACD 在三者上分别达到 87.4%、78.8% 与 63.7%。这与方法分工一致，仲裁保住非共识中的可靠单模态答案，恢复纠正共识中的系统性错误。未胜出项是单独路由在个别音频主导格反而下降，说明只看相关性选分支不够，必须有置信度把关。尚未评测的范围包括更长的多轮对话与开放式生成，那里候选集合不再封闭，当前基于有限候选的仲裁与恢复规则需重新设计。

为判断提升是否依赖视频长短与共识修正能力，请按左图时长分组与右图共识修正的顺序观察下图，左图注意各组增量标注，右图注意柱顶数字与修正比例。

> **看图路径：** 1. 先看左图不同时长组中三色条形的相对长短与右侧增量标注；2. 再看右图三根柱子从 806 到 236 的变化与标注的修正数；3. 结合两图判断提升是否集中在某一时长或某一类共识错误

[![原论文 Figure 4：Performance across video durations and incorrect-consensus correction on SVHalluc using OmniVinci.](https://arxiv.org/html/2611.22456v1/Duration_and_Consensus.png)](https://arxiv.org/html/2611.22456v1/Duration_and_Consensus.png)

*论文图 4。原论文 Figure 4:：“Performance across video durations and incorrect-consensus correction on SVHalluc using OmniVinci.”。*

该图确实可见在 SVHalluc 的 4 个时长组与总体上 PACD 条形均长于标准解码与 MAD，短视频组增量最大，标注为 31.1、14.7、6.2 与 7.0 个百分点，总体增 12.8 个百分点。右图可见错误共识从 806 经 MAD 仅降到 783，而经 PACD 降到 236，标注修正 570 例、减少 70.7%。它的作用是把消融中的机制解释落地，时长鲁棒性与共识修正分别对应两条路径的价值，但左图纵轴为准确率、右图纵轴为错误例数，不能混为一谈，且时长分组基于准备后输入时长而非原始视频时长。

为判断泛化是否超出幻觉专项基准，还需比较通用问答上的相对提升，下表整理原文给出的两个主干在两个基准上相对 MAD 的提升幅度，条件是相同主干与相同评测集。

| 主干 | OmniVideoBench 相对提升 | FutureOmni 相对提升 |
| --- | --- | --- |
| VideoLLaMA2-AV | 9.9% | 10.2% |
| OmniVinci | 7.1% | 3.5% |

该表支撑的判断是，PACD 在两个主干与两个通用基准上均高于 MAD，VideoLLaMA2-AV 提升更大，OmniVinci 提升较小但仍为正。这说明共识解码的收益不限于幻觉专项基准。限制是此处仅呈现相对提升，未列出绝对准确率与基线分数，不能据此比较两个主干的绝对能力，也不能把相对百分比直接当作百分点增量。

### 哪些结论不能下，哪些范围尚未验证

首先，准确率提升只在所测的判别式选择题、冻结主干、给定采样与阈值下成立。阈值用约 10% 样本选定，不同基准的高性能区位置不同，参考配置是在平均准确率上的折中，因此换数据集或换主干可能需要重新校准，不能把一组阈值当作通用最优。层数敏感性显示 CMM 与 AVHBench 随层数变化平缓，而 SVHalluc 随层数增加而改善并在 10 层达平均最优，这意味着来源证据的聚合窗口对语义与时间任务更重要。

其次，方法依赖答案 token 的 logits 与注意力贡献的投影，这些是内部来源指示而非精确因果归因。原文明确它们不修改注意力输出或隐状态，只是候选级的支持信号，因此不能把某层的正贡献解读为该层决定了答案，也不能用它做模型内部机制的因果断言。ROC 分析显示 PACD 的操作点优于对联合分支或 MAD 分数做全局阈值移动所能达到的权衡，但这只说明决策规则带来了阈值调参之外的增益，不等于在所有误报率下都最优。

最后，未测量开放式生成的流畅性与人工评价，自动准确率不等于人工感知的幻觉减少。延迟与显存只在 VideoLLaMA2-AV-7B 的 CMM 与 AVHBench 上报告，PACD 延迟与 MAD 相近且显存相同，但这不代表在更大批量、更长视频或不同硬件上开销不变。媒体级自助法的区间全在零以上支持稳定性，但仍只覆盖所测媒体分布，跨域部署前需补做新领域验证。

### 复现第一步做什么，需要哪些信息条件

复现应从环境与输入准备开始。按原文设置在 80 GB 显存的 A100 上运行冻结主干，视频按 2 帧每秒采样且上限 768 帧，问题与候选保持原文划分，CMM 二选一、SVHalluc 二选一或三选一，总体准确率按题加权。对每个问题分别跑联合、音频、视频与文本 4 个输入条件得到分支预测与 logits，再跑 MAD 融合得到参照预测，同时从联合前向记录最后若干层中音频与视频 token 的注意力贡献并投影到候选空间。论文正文给出代码链接，补充材料说明代码随文提供，但本次来源校验显示该链接为第三方可达记录，不能据此断言作者仓库已公开或可长期运行，复现时应以论文补充材料中的实现与超参数表为准。

关键超参数包括考察层数与 5 个阈值，参考配置为 10 层以及目标分支、融合、一致性、强度与恢复阈值的给定组合，实际复现时先用小部分样本复现粗到细搜索，再固定阈值评估全集，避免用测试集最优阈值冒充可部署性能。候选映射需经分词器对齐到答案 token，归一化尺度取跨分支中位数并设下界以防放大微小差异，这些细节决定了仲裁与恢复的触发频率。建议先在 OmniVinci 的 SVHalluc 上复现非共识仲裁与共识恢复的分项统计，确认路由正确而融合错误以及一致错误被修正的例数量级，再扩展到其他主干与基准。

### 什么时候值得尝试，还缺哪项验证

当任务是音视频问答的选择题，且观察到最相关单模态答对但融合答错，或多个分支一致却系统性答错时，值得尝试这种按是否共识分流的免训练解码。它不需要重新训练，推理开销与 MAD 接近，适合在已有全模态模型上快速验证跨模态干扰是否来自融合阶段。行动顺序是先复现分支预测与共识统计，确认两类失败在新数据上确实存在，再接入来源证据与阈值，最后用时长分组与媒体聚类自助法检查稳定性。

还需要补的验证包括开放式回答的人工幻觉评估、更多主干与更长视频下的阈值迁移性，以及批量推理时的真实延迟与显存曲线。只有在这些条件下仍保持一致改善，才能把结论从所测基准推广到实际部署。总体而言，该工作把相关性加权之外的两处残留问题显式化，并用层内来源与置信度约束给出可操作的修正规则，其价值在于决策分工而非单一分数的提升。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.22456v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
