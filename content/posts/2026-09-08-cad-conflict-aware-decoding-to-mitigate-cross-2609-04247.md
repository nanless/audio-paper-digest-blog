---
title: "CAD: Conflict-Aware Decoding to Mitigate Cross-Modal Hallucinations in Omnimodal Large Language Models"
date: 2026-09-08
draft: false
tags: [音视频问答, 测试时自适应, 音视频, 多模态模型]
categories: [论文速递]
description: "针对全模态大模型中音频视觉联合预测不可靠融合的问题，论文提出免训练的冲突感知解码 CAD，用潜在冲突量与任务空间可干预性决定是否把联合分支权重转给单模态分支，在 Qwen2.5-Omni-7B 上把 CMM 整体准确率提到 85.0% 与 AVHBench 提到 84.1%，代价是每步要跑四个分支并依赖人工阈值。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.04247"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "联合分支不可全信：用冲突量与可干预性重配解码权重"
paper_digest_original_title: "CAD: Conflict-Aware Decoding to Mitigate Cross-Modal Hallucinations in Omnimodal Large Language Models"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.04247"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.04247.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.test-time-adaptation","label":"测试时自适应"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"}]
paper_digest_primary_method: "测试时自适应"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对全模态大模型中音频视觉联合预测不可靠融合的问题，论文提出免训练的冲突感知解码 CAD，用潜在冲突量与任务空间可干预性决定是否把联合分支权重转给单模态分支，在 Qwen2.5-Omni-7B 上把 CMM 整体准确率提到 85.0% 与 AVHBench 提到 84.1%，代价是每步要跑四个分支并依赖人工阈值。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuchen Deng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chang Sun"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hai-Tao Zheng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Feidiao Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuxing Han"}]
paper_digest_abstract_sha256: "d643bf86e1e8fb60a345c6e653b4f2aff57c50752857fe48231f3c3eb3d48cf6"
paper_digest_sidecars: {"citation.bib":{"sha256":"b6a9ccb63e2e90609aee59775de9ba84bdfcfa374220715a50040947206fcbdd","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04247/citation.bib"},"citation.json":{"sha256":"070744b7ba072a0ed5d559ae0056181fcd1223c67168c9e6b5f6721ad7108b9c","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04247/citation.json"},"citation.ris":{"sha256":"1b4e3191fb24a342f8a6cc691f59257d68d45b4e81b5be8d1924838a3114fb23","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04247/citation.ris"},"rethink-context.json":{"sha256":"b15c58102cc731f36d1ac890221bdf4d1a9ce03c32313b363aeb73d8be5985f1","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04247/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "aaef9f837f6781f063fc891bef2804a0813b9ba54c63b8e984bf7e34d305425b"
paper_digest_api_reader_plan_sha256: "c260e6e682456323a65a62a0ab20f93cfb7338dcb6e6a2b27aa24bfab226a8e2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "92b4ffbba93803373af3e937733b5357b6943f4d4c361603f2aec6a413ed0df2"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "6a8f71bfce2546d12e13f8593679d532828795135461270d186ab6babb14449a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "55824eff19e8e9ef70467eb2ef3c02728909b8a05b00a95f626373121c62dd41"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2f8a00333dd840e6b0a0ee041288c45cffd402c63adfb41af613cf44f47c14f3"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 联合分支不可全信：用冲突量与可干预性重配解码权重

> 英文题目：*[CAD: Conflict-Aware Decoding to Mitigate Cross-Modal Hallucinations in Omnimodal Large Language Models](https://arxiv.org/abs/2609.04247)*

> 标签：#音视频问答 | #测试时自适应 | #音视频 | #多模态模型
>
> 评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yuchen Deng：机构信息未在 arXiv HTML 中可靠披露
- Chang Sun：机构信息未在 arXiv HTML 中可靠披露
- Hai-Tao Zheng：机构信息未在 arXiv HTML 中可靠披露
- Feidiao Yang：机构信息未在 arXiv HTML 中可靠披露
- Yuxing Han：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

全模态大语言模型以音频、视频与文本查询为输入并输出问答预测，难点在于联合音频-视频分支偏离单模态证据时既可能是有害干扰也可能是有益互补，若不区分兼容性而直接压制融合会损伤互补推理。第一步，潜在冲突幅度估计负责度量音频分支、视频分支与联合分支的预测分歧并生成潜在冲突幅度C，该输出进入下一步作为是否干预的幅度门控。第二步，冲突可干预性评估用于在任务答案空间以查询相关性与答案决断性为可靠性证据提取干预方向，其结论送入权重调整环节并与C共同决定转移条件。第三步，冲突感知加权解码负责将可干预冲突下的解码权重从联合分支融合再分配至单模态分支并输出最终预测，该调整传递至逐词元解码过程以抑制不可靠融合。与均匀扰动的音频视频对比解码和仅按查询相关性加权的模态自适应解码不同，CAD显式区分相关性与兼容性并保留互补融合，实际意义在于只在有可靠证据时削弱联合分支。在论文报告的评测设置下，本文方法相较原始解码策略的Overall Acc指标从70.9%升至85.0%，方向为更高，该结果来自CMM上Qwen2.5-Omni-7B对照。适用边界是：结论限于多选与二分类音视频问答解码，对开放式生成和强互补推理的外推尚未验证。成本方面，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/conviction6/CAD> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决哪种幻觉？

本文的输入是同一段音视频加一个文本问题，模型要在统一表示空间里同时看画面与听声音，再生成答案。目标不是单纯把语音转成文字或把视频分类，而是做需要对齐时间与证据的音频视觉问答。作者区分的幻觉是跨模态幻觉：一个模态的信息不当影响了另一个模态的判断，例如画面诱导模型描述不存在的声音，或声音诱导模型描述不存在的视觉事件。

这种幻觉与单模态看错不同，它反映的是融合控制不当，有效融合应利用互补证据，协调不好就会引入有害干扰。
论文把解码阶段作为干预点，不做重训练。已有免训练路线有两条，一条是对音频视觉输入做均匀扰动构造对比 logits，另一条是估计查询相关的模态相关性，再把音频分支、视频分支、联合音视频分支与纯文本分支加权组合。

作者认为这两条路线都没有评估联合分支内部音频与视觉证据的预测兼容性，因此无法判断联合偏离是该压制的有害干扰，还是该保留的有益互补。
下图把这种对照画得很直接，上半是只按相关性加权，下半是先估计冲突再决定是否重配权重，底部雷达图给出多数据集上的包络对比，阅读时先看结构差异再看效果差异。

> **看图路径：** 1. 先看上半部分以往方法框，确认只做模态相关性加权且标出忽略融合冲突；2. 再看下半部分 CAD 框，确认两阶段先估计潜在冲突量再评估可干预性；3. 比较底部两张雷达图，看 CAD 包络是否在多数轴上最靠外；4. 注意图例中 Base、AVCD、MAD 与 CAD 四条线的对应关系

> **论文图 1（像素未随页面持久化）**：Figure 1: (a) MAD relies on modality relevance alone and overlooks cross-modal conflicts. (b) CAD assesses conflict magnitude and actionability, then reallocates decoding weights to suppress unreliable fusion. (c) On CMM and AVHBench, CAD consistently outperforms Base, AVCD, and MAD with both Qwen2.5-Omni-7B and OmniVinci.

*论文图 1。原论文 Figure 1:：“(a) MAD relies on modality relevance alone and overlooks cross-modal conflicts.”。*

该图上半显示以往方法只做模态相关性加权，明确标出融合冲突被忽略，原始预测停留在错误答案；下半显示 CAD 先做潜在冲突量估计，再做可干预性评估，最后做冲突感知的权重重分配并给出修正预测。底部两张雷达图分别对应两种骨干，CAD 的实线包络在多数轴上最靠外，直观支持冲突建模带来了更稳定的提升，而不是只在某一类幻觉上有效。

### 同输入同目标的已有路线差在哪里？

在全模态大模型一侧，论文回顾了从图文理解走向音视频联合推理的演进，强调全模态模型把文本、图像、视频与音频特征投到统一空间，并把音频与视觉 token 按共享时间线交错排列。视觉提供空间布局与运动，音频提供语义内容与声音事件，两者需要时间建模与互补整合，不一致信号可能导致有害融合冲突。
在幻觉缓解一侧，通用路线包括表示去偏、结构改进与免训练推理。

免训练解码因不需要额外标注与参数更新而受关注，例如模态扰动、辅助描述、指令对比与层间分布差异，但这些方法多为视觉语言设计，没有直接处理音频与视觉证据之间的相互作用。
与本文同输入、同目标、同运行阶段的直接对照是音频视觉对比解码与模态自适应解码。前者用注意力导出的主导分数识别弱势模态并做注意力掩码构造对比 logits，属于均匀扰动而缺少查询自适应。

后者通过模型自评估计查询相关的模态相关性，再自适应加权各分支，属于相关性加权而缺少兼容性判断。CAD 与它们的区别是显式评估音频分支、视频分支与联合分支之间的潜在冲突，并自适应重配分支权重以减少冲突诱发的干扰。

### 为什么相关性高还可能答错？两类相反证据是什么？

作者用诊断实验说明问题。取 Qwen2.5-Omni-7B 在 CMM 的视觉主导与音频主导类别上，分别跑音频分支、视频分支与联合分支，以答案空间 argmax 是否等于正确答案作为分支正确标准。结果出现两个相反方向：一部分样本两个单模态都对但联合答错，另一部分样本两个单模态都错但联合答对。这说明联合带来的变化没有固定方向，既可能是破坏性干扰，也可能是互补恢复。

**模态相关性 × 预测兼容性：** 模态相关性回答查询需要哪种模态，由模型自评给出音频、视频与联合使用的权重；预测兼容性回答音频分支、视频分支与联合分支的答案是否互相支持。两者搭配的原因是相关性高不代表融合正确，兼容性差可能对应破坏性干扰也可能对应互补恢复，组合意义是用相关性做加权参考，用兼容性决定是否压制联合分支。

下图把该诊断可视化，横轴与纵轴分别是音频分支与视频分支对正确答案的置信度，颜色表示联合分支正确与否，4 个角落给出不同单模态组合下的联合准确率，右侧给出两个高亮案例的具体预测条形。

> **看图路径：** 1. 先确认横轴是音频分支对正确答案的置信度，纵轴是视频分支对正确答案的置信度；2. 再按颜色区分联合分支答对与答错的散点分布；3. 重点看右上与左下两个角落标注的联合准确率；4. 对照右侧两个案例框，看单模态与联合预测条形值的变化方向

> **论文图 2（像素未随页面持久化）**：Figure 2: Fusion outcomes of Qwen2.5-Omni-7B on CMM. Axes show unimodal confidence in the ground-truth answer, and color denotes AV correctness. Highlighted examples show destructive fusion and complementary recovery.

*论文图 2。原论文 Figure 2:：“Fusion outcomes of Qwen2.5-Omni-7B on CMM.”。*

该散点图右上角是双单模态都强的区域，联合仍有错误点，左下角是双单模态都弱的区域，联合仍有正确点，说明只看单模态强弱不能决定联合对错。右侧第一个案例显示音频与视频分支都选 No 且置信较高，但联合翻转为 Yes 而答错，对应破坏性融合；第二个案例显示音频与视频分支都选 No 而答错，但联合以较高置信选 Yes 而答对，对应互补证据被成功整合。因此方法必须把冲突大小与是否值得干预分开处理。

### CAD 沿一个样本走完输入到输出经历哪两步？

沿一个样本走一遍更易复述。输入是音频、视频与文本问题，模型先用一个固定的模态询问提示判断当前问题依赖音频、视频还是两者联合，得到类别相关性权重。接着模型在同一解码位置分别计算 4 个分支的下 1 token logits：联合音视频分支、音频分支、视频分支与无音视频的纯问题分支。基础解码按相关性把 4 个分支加权求和再贪心选词，CAD 在此基础上插入 2 阶段判断。

**联合分支 × 单模态分支：** 联合分支输入音频加视频，负责利用互补证据；单模态分支只看音频或只看视频，负责保留独立证据。搭配原因是联合分支可能引入跨模态干扰，单模态分支可作为纠偏锚点，组合意义是当检测到可操作冲突时把联合分支的一部分权重按比例转给单模态分支，保持总和不变。

第一阶段估计潜在冲突有多大，只看音频、视频与联合 3 个分支的下 1 token 分布，排除没有音视频证据的纯文本分支。第二阶段把分布投影到任务答案空间，结合查询相关性与答案果断性判断是否有可靠证据支持干预。只有冲突量超过阈值且可干预分大于零，才把联合分支的一部分权重转移给单模态分支，否则退化为基础加权。系数在生成开始时由初始分布算 1 次，后续生成保持固定。
下图是全文总览，左侧是输入与分支，右侧是 2 阶段计算与干预，阅读时按箭头从输入走到最终回答。

> **看图路径：** 1. 先沿左侧从文本视频音频输入走到四个分支 logits 的主路径；2. 再看右上 PCME 框中两组分布差异如何汇成冲突量 C；3. 接着看右中 CAA 框中答案映射与可靠性支持如何汇成可干预分 B；4. 最后看右下干预框中联合权重减少量如何按比例分给音频与视频分支

> **论文图 3（像素未随页面持久化）**：Figure 3: Overview of CAD. Given an audio-visual input and textual query, CAD uses Potential Conflict Magnitude Estimation (PCME) to measure predictive disagreement across modality branches and Conflict Actionability Assessment (CAA) to assess whether the conflict is supported by reliable unimodal evidence. The actionable-conflict signal reallocates decoding influence from the joint audio-visual branch to modality-specific branches, yielding a response better grounded in the input evidence.

*论文图 3。原论文 Figure 3:：“Overview of CAD. Given an audio-visual input and textual query, CAD uses Potential Conflict Magnitude Estimation (PCME) to measure predictive disagreement across modality…”。*

该图左侧显示模态相关性权重与 4 个分支的 logits 与分布，右侧上半显示潜在冲突量估计，右侧中部显示任务对齐的可靠性证据与 4 种答案关系，下半显示权重从联合分支向单模态分支的转移且纯文本权重不变。底部示例显示原始预测为否定回答，CAD logits 把肯定答案顶到最高并与正确答案一致，完整呈现从怀疑融合到纠偏输出的闭环。

### 潜在冲突量 C 与可干预分 B 分别怎么算？

先讲符号与输入。记音频输入、视频输入与文本问题，模态询问给出回答 audio、video、both 3 个 token 的 logits，经 softmax 得到类别相关性。记解码前缀与词表，4 个分支在每一步给出 logits 向量，再经 softmax 得到分布。有效相关性把涉及该模态的类别权重相加，音频有效相关性等于音频类别加联合类别，视频同理。
类别相关性的定义是全文一切加权的起点，先记住它是对查询需求的自评，而不是对答案正确的保证。

\[(r_{A},r_{V},r_{AV})=\operatorname{softmax}\!\left([u_{A},u_{V},u_{AV}]\right).\]

该式把 3 个回答 token 的 logits 转成和为 1 的相关性分布，后续有效相关性、混合参考与可靠性代理都依赖这组权重。实现时是先拼一个固定提示问模型当前问题靠音频、视频还是两者，再取对应 token 的 logits 做 softmax。
有效相关性的构造把联合类别同时计入音频与视频，避免联合需求被漏掉。

\[R_{A}=r_{A}+r_{AV},\qquad R_{V}=r_{V}+r_{AV}.\]

该式是简单的加法聚合，目的是让后续混合参考与可靠性折扣都能反映联合使用对单模态的贡献。接着用平衡因子抑制只有一个模态相关的情形，平衡因子在两者均衡时接近 1，在一方不相关时变小。
潜在冲突量 C 的计算分 3 步。先按有效相关性把音频分布与视频分布加权平均并归一化，得到单模态混合参考。再用归一化 Jensen-Shannon 散度算两项差异，一项是音频与视频分布之间的分歧，另一项是联合分布偏离混合参考的程度。

最后对两项取平均并乘以平衡因子，得到 0 到 1 之间的无符号分数。原文强调 C 只度量潜在冲突大小，不判断有益还是有害，也不直接认定联合预测错误。

\[C=g_{\mathrm{rel}}\frac{D_{A,V}+D_{F}}{2}.\]

该式是两项差异的平均再乘平衡因子，不引入额外加权超参数。两项分别捕捉单模态之间不一致与联合偏离单模态证据，平衡因子确保只在双模态都相关时才放大怀疑。
再讲可干预性。C 在全词表上计算，可能因答案外 token 波动而虚高，也可能因成功互补而变大，因此要投影到任务答案空间。对每个分支把属于同一答案的单 token 表面形式的概率求和，再在有效选项间归一化，得到答案分布。

取该分布的最大答案与前 2 名差值作为果断性，再乘以有效相关性得到可靠性代理。可靠性代理不是正确概率，而是折扣后的承诺支持，剩余质量视为无知。
答案投影与果断性的定义是连接分布差异与答案关系的关键，先把全词表差异收敛到可比的选项上。

\[\pi_{k}(y)=\frac{\sum_{v\in\mathcal{T}(y)}p_{k}(v)}{\sum_{y^{\prime}\in\mathcal{Y}}\sum_{v\in\mathcal{T}(y^{\prime})}p_{k}(v)},\qquad k\in\{A,V,AV\},\]

该式把分支分布压缩到有效答案集合上，分母只在有效选项的表面形式上求和，避免答案外 token 主导判断。实现时多选与二选任务的答案空间就是有效选项或标签集合。

\[y_{k}=\arg\max_{y\in\mathcal{Y}}\pi_{k}(y),\qquad m_{k}=\pi_{k}^{(1)}-\pi_{k}^{(2)},\]

该式给出每个分支的答案选择与果断性，果断性越大表示分支在任务空间越坚定，后续乘以相关性后作为支持干预的证据强度。
可干预分 B 按 4 种答案关系取值：三者一致时为零，即使分布不同也不干预；两单模态一致但联合不同时取两者可靠性的较小值，体现保守共识；两单模态不一致且联合跟随其中之一时，只保留对立分支超出跟随分支的正向优势；联合给出第三答案时取两单模态可靠性的较大值作为保守启发，原文明确该情形不是严格推导，也不意味着单模态答案正确。可操作信号为两者乘积，只有大小与证据同时具备才高。

**潜在冲突量 × 冲突可干预性：** 潜在冲突量 C 度量分布差异的大小，是无符号的怀疑程度；冲突可干预性 B 度量任务答案关系是否给出可靠的干预证据。搭配原因是大差异可能是词表外波动或成功互补，不宜直接干预，组合意义是只有 C 超过阈值且 B 大于零才形成可操作信号 H 并转移权重。

**查询相关性 × 答案果断性：** 查询相关性 R 由类别权重求和得到，表示该模态对当前问题的适用程度；答案果断性 m 是任务答案空间前 2 名概率之差，表示分支选答案的坚定程度。两者相乘得到可靠性代理 q，搭配原因是适用但不果断或果断但不适用都不应强干预，组合意义是把 q 作为 Dempster-Shafer 折扣后的承诺支持，剩余质量作为无知。

### 权重转移如何保持总和不变？何时退化为基础解码？

干预以前先有基础系数。联合系数随联合相关性增大，单模态系数反映自身相对联合的优势，纯问题分支系数为负用于压制语言先验，四者之和为 4。CAD 的转移量与可操作信号成正比，并乘以联合系数的正部，只有当 C 超过阈值才非零。转移量按单模态正系数的比例分给音频与视频，若两者正部和为零则平分，纯文本系数保持不变，因此调整前后总和不变。
当 C 小于阈值或 B 等于零时转移量为零，CAD 退化为基础解码。

当强度与信号乘积大于 1 时，调整后的联合系数可能为负，此时是对联合分支做对比相减。原文实现细节是 C、B 与调整系数都由初始下 1 token 分布算出，并在整个生成过程中固定，不逐 token 重估。
这种设计对应一个可复述的操作：先算怀疑程度，再看答案关系是否支持行动，最后按原有单模态相对重要性分钱，文本先验的压制力度不动。若证据不足就不动权重，避免把有益互补误伤。

### 本研究训练了什么，没有训练什么，真实计算是什么？

本研究没有训练任何模型，也没有更新参数、构造梯度路径或引入额外监督，这是一个免训练的解码期方法。4 个骨干都是既有模型，CAD 只在推理时调用它们的 logits 并重加权。论文未报告优化器、学习率、训练轮数与数据划分训练细节，因为不存在训练阶段，不能把参数冻结等同于输出确定，解码仍受采样与贪心选择影响。
真实计算是每次生成前做多分支前向。

先跑 1 次模态询问得到相关性，再在解码起始步跑联合、音频、视频与纯问题 4 个分支得到 logits 与分布，算出 C、B 与调整系数后，用调整系数加权 4 个分支的 logits 做贪心选词。额外开销主要来自多分支前向与分布比较，论文未给出延迟与显存的定量测量，因此不能承诺推理成本下降，只能说省去了重训练成本。缺失项是阈值与强度的自适应选择，当前靠人工设定，跨模型与跨数据集的适应性待验证。

### 在哪些数据与模型上测，采样与阈值如何固定？

评测覆盖两类基准。跨模态幻觉基准是 CMM 与 AVHBench，前者评估视觉主导与音频主导下的模态偏置与跨模态干扰，后者聚焦视频驱动的音频幻觉与音频驱动的视频幻觉。通用音频视觉问答是 WorldSense 与 VideoMME，用于检验方法是否只在幻觉集上有效。骨干包括 VideoLLaMA2-AV、OmniVinci、Qwen2.5-Omni-3B 与 Qwen2.5-Omni-7B，对比策略是原始解码、均匀扰动的对比解码与相关性加权的自适应解码。
实现条件按原文固定。

CMM、AVHBench 与 VideoMME 按每秒 2 帧采样，最多 768 帧，WorldSense 按每秒 1 帧采样，最多 384 帧，所有实验在 48 GB 显存的图形处理器上运行并保持相同计算配置以保证可复现。干预阈值设为 0.05，指标方向是准确率越高越好，比较时同一骨干与同一基准下对齐采样与解码条件。需要提醒的是数值相同不代表同一指标，百分点提升与相对百分比不同，阅读时要同时核对数据集、骨干、阶段与聚合对象。

### 主结果测什么，与谁比，关键数字支持什么判断？

主结果回答在相同骨干与相同采样下，冲突感知重配是否优于原始解码、均匀扰动与相关性加权。指标是各类别准确率与整体准确率，方向越高越好。下表聚焦 Qwen2.5-Omni-7B，把原文用句子报告的提升集中呈现，便于核对跨模态 2 个方向是否同时改善。

| 评测集 | CAD 整体准确率 | 较 Base 提升 | 第一类提升 | 第二类提升 |
| --- | --- | --- | --- | --- |
| CMM | 85.0% | 14.1 | 13.8 | 14.5 |
| AVHBench | 84.1% | 8.0 | 7.5 | 9.0 |

表前比较问题是 CAD 是否在双向幻觉上都带来可运行收益，公平条件是同一 7B 骨干与原文采样配置，指标方向是准确率越高越好，表中第一类在 CMM 指视觉与音频主导，在 AVHBench 指视频驱动音频与音频驱动视频。表后解释是 CAD 在 CMM 整体达到 85.0%，较 Base 提升 14.1 个百分点，其中两类分别提升 13.8 与 14.5 个百分点；在 AVHBench 整体达到 84.1%，较 Base 提升 8.0 个百分点，其中两类分别提升 7.5 与 9.0 个百分点。

这支持冲突建模在双向幻觉上都有增益，但未胜出项是均匀扰动在部分骨干上可能下降，说明扰动不是无条件有益。

**破坏性融合 × 互补恢复：** 破坏性融合指两个单模态都对但联合答错，互补恢复指两个单模态都错但联合答对。两者分工是说明联合偏离单模态没有固定好坏，搭配原因是只看偏离大小会误伤有益融合，组合意义是 CAD 必须先用 C 发现偏离，再用 B 判断答案关系是否值得干预。

为检验相关性估计与冲突干预各自的贡献，论文比较去掉查询偏好的均匀加权与独热化的取最大加权，两者都不做冲突估计与重分配。下表呈现该对照，CAD 保留软相关性加权并叠加冲突重分配。

| 融合策略 | 整体准确率 | 是否查询自适应 | 是否冲突重配 |
| --- | --- | --- | --- |
| Uniform | 78.0% | 否 | 否 |
| Argmax | 79.6% | 是但独热 | 否 |
| CAD | 84.1% | 是且软加权 | 是 |

表前比较问题是收益来自自适应还是来自冲突判断，公平条件是同一 AVHBench 与同一 7B 骨干且直接用系数解码，指标方向仍是准确率越高越好。

表后解释是均匀加权整体为 78.0%，说明固定权重不能捕捉查询需求；取最大为 79.6%，说明丢弃非选中模态会损失互补信息；CAD 达到 84.1%，支持软相关性与冲突重配互补。代价是 CAD 要多算分布差异与答案投影，未测量延迟时不能断言更快。

### 拿掉相关性权重或冲突分量会发生什么？

相关性消融的做法是每次把音频、视频或联合类别权重之一置零，再走后续冲突流程，其他不变。原文报告去掉音频权重主要降低视频驱动音频幻觉准确率，去掉视频权重影响最大，去掉联合权重带来较小但一致的下降，完整三权重最好。这说明 3 组权重提供互补指引，视觉相关性对抵抗误导性听觉线索尤为重要。
冲突分量消融比较 4 种变体：无干预的相关性系数直接解码、只用冲突量、只用可干预分、两者都用。

下表集中呈现该消融，表中数值都是原文用句子报告的整体准确率。

| 解码变体 | 冲突量 C | 可干预分 B | AVHBench 整体准确率 | 证据含义 |
| --- | --- | --- | --- | --- |
| 相关性直接解码 | 不用 | 不用 | 80.7% | 仅有查询偏好 |
| 只用 C | 用 | 不用 | 82.7% | 发现可疑融合 |
| 只用 B | 不用 | 用 | 83.3% | 判断是否值得纠正 |
| 完整 CAD | 用 | 用 | 84.1% | 两者互补 |

表前比较问题是大小信号与方向证据是否各自有效，公平条件是同一 AVHBench 与同一 7B 骨干，指标方向是准确率越高越好。

表后解释是引入 C 把整体从 80.7% 提到 82.7%，单独用 B 达到 83.3%，两者结合进一步到 84.1% 且两类幻觉都改善，支持 C 负责发现可疑融合、B 负责决定是否纠正。未胜出项是只用其一仍低于完整模型，说明单信号不能替代双阶段。
潜在冲突量的有效性还用分布差异佐证。下表把诊断实验的相反证据与 C 的均值差异放在一起，说明为何不能只看偏离大小。

| 诊断对象 | 指标 | 数值 | 含义 |
| --- | --- | --- | --- |
| 双单模态对但联合错 | 联合错误率 | 4.5% | 破坏性融合存在 |
| 双单模态错但联合对 | 联合正确率 | 8.7% | 互补恢复存在 |
| 答对样本 C 均值 | 分布差异 | 0.033 | 正确时冲突较小 |
| 答错样本 C 均值 | 分布差异 | 0.100 | 错误时冲突更大 |

表前比较问题是 C 是否与错误相关且偏离是否有双向可能，条件是 CMM 上的诊断统计与分布统计，指标方向是错误率越低越好、C 差异越大越能区分。表后解释是双对仍有 4.5% 被联合带错，双错仍有 8.7% 被联合救回，证实偏离无固定好坏。

同时答错样本的 C 均值 0.100 约为答对样本 0.033 的 3 倍，且错误样本在高 C 区更集中，支持 C 能刻画潜在冲突严重程度。但相关性不是因果，C 高不等于一定答错，仍需 B 把关。
下图显示 C 值的直方图分布，蓝色答对集中在低 C，橙色答错向高 C 拖尾，阅读时先看均值线再看尾部分布。

> **看图路径：** 1. 先确认横轴是 C 值，纵轴是样本数，蓝色为答对橙色为答错；2. 比较两条虚线均值的位置差异；3. 观察低 C 区间蓝色高柱与高 C 区间橙色占优的分布偏移；4. 再看右上高 C 放大框，确认错误样本在尾部更集中

> **论文图 4（像素未随页面持久化）**：Figure 4: Distribution of potential conflict magnitude C for correct and wrong Qwen2.5-Omni-7B predictions on CMM.

*论文图 4。原论文 Figure 4:：“Distribution of potential conflict magnitude C for correct and wrong Qwen2.5-Omni-7B predictions on CMM.”。*

该图横轴为 C 值纵轴为样本数，答对样本数为 567，答错为 233，蓝色均值线在 0.033 附近，橙色均值线在 0.100 附近。主图左侧低 C 高柱以蓝色为主，右侧尾部以橙色为主，右上放大框显示高 C 区错误样本更密集且有重叠区，说明 C 有区分力但存在重叠，不能单独作为干预开关，这正是需要阈值加 B 的原因。

### 哪些边界没有测，哪些推测还不能当结论？

论文明确的局限是依赖人工设定的超参数，阈值与强度需要手动调节，可能限制跨模型与跨数据集的适应性，未来方向是自适应参数选择。这意味着当前数字是在特定阈值下取得，换模型或换数据时可能需要重调，不能默认同一组参数全局最优。
未验证的边界包括误判率、延迟、显存与输出帧率，论文未报告这些量的测量，因此不能承诺 CAD 更快或更省。

总体趋势不等于每组每步都成立，例如均匀扰动在个别骨干类别上低于 Base，CAD 虽在每个骨干基准对上最高，但通用问答的提升幅度小于幻觉基准，需要按任务分别评估。
表达上要区分 3 层：直接报告的是准确率数字，有限解释的是 C 与错误相关且 B 提供保守支持，未验证推测是更复杂的证据聚合或自适应阈值 1 定更好，后者应表述为可能与待验证。

### 要复现先做什么，需要保留哪些信息条件？

复现先固定信息条件：同一骨干权重、同一基准划分、同一采样帧率与帧数上限、同一模态询问提示与相关性计算，再固定阈值为 0.05。接着实现 4 个分支的前向，分别取联合、音频、视频与纯问题输入下的 logits，注意纯问题分支保留文本问题但去掉音视频上下文。
然后按顺序实现 C 与 B。C 需要把 logits 转分布、算有效相关性与平衡因子、构造混合参考、算两项归一化散度并平均。B 需要把分布投影到有效答案的单 token 表面形式、算果断性与可靠性代理，再按 4 种答案关系取值并与 C 相乘。

最后按比例转移权重并保持总和不变，纯文本权重不动，系数由初始步算 1 次并在生成中固定。
核对时先复现诊断统计，再复现主表提升，最后复现消融排序。若只有代码开源而无权重下载或运行环境，仍需补全模型版本与采样实现才能称为可运行。论文给出代码地址，但复现报告应区分代码可用、权重可下载与端到端可运行三件事。

### 何时值得尝试 CAD，如何一句话记住它？

当任务同时依赖音频与视频、且观察到联合预测与单模态预测经常不一致时，值得尝试 CAD。它不改变模型参数，只在解码时怀疑联合分支并寻找可靠的单模态反对证据，证据不足就保持原加权，证据充分才转移权重。这种保守干预适合幻觉代价高但互补证据不能丢的场景。
一句话记住：先用分布差异量出怀疑有多大，再用答案关系判断值不值得动手，最后把联合分支的权重分给更可靠的单模态分支。若要继续深挖，可补的验证是阈值与强度的自适应策略、高 C 重叠区的误干预率，以及在更多骨干与实时约束下的延迟与稳定性测量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.04247)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-08/)
