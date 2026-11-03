---
title: "Voice-Native LLMs Hear Frustration but Do Not Listen to It"
date: 2026-11-03
draft: false
tags: [语音对话系统, 语音情感识别, 基准设计, 基准测试, 表示探测]
categories: [论文速递]
description: "论文用同一批音频同时检验表达、感知和利用三个环节，发现 8 个语音原生模型在中性措辞下几乎不报告轻度不耐烦语气，但两个开源模型的编码器仍能解码该语气，而对文字中不耐烦的稳定作答才是真正的稳健。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.02893"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "能听见却没听进去：语音大模型如何处理用户的不耐烦"
paper_digest_original_title: "Voice-Native LLMs Hear Frustration but Do Not Listen to It"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.02893v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.02893v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.02893v1.pdf"
paper_digest_primary_task: "语音对话系统"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.representation-probing","label":"表示探测"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文用同一批音频同时检验表达、感知和利用三个环节，发现 8 个语音原生模型在中性措辞下几乎不报告轻度不耐烦语气，但两个开源模型的编码器仍能解码该语气，而对文字中不耐烦的稳定作答才是真正的稳健。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hanjun Luo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuhan Lu"},{"affiliations":["New York University Abu Dhabi"],"name":"Hanan Salam"}]
paper_digest_abstract_sha256: "139e7e055c625556c7d8861facf3852131897470eea2d86c62c6811a47286572"
paper_digest_sidecars: {"citation.bib":{"sha256":"bc260b91e4ff4a64123e3d016771d964f32a4f61364e592bc5dc76757ddd93bc","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02893/citation.bib"},"citation.json":{"sha256":"6d2f7a29a6bad82f64bc0fbc934223a50551fe6138599ea8dd795c7fb0525aeb","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02893/citation.json"},"citation.ris":{"sha256":"c8550d9bfb322c35cda61702a175bb8f137bff8ef2f5fc204cbcfe0209c0f3f9","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02893/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e870b013fd8f6b703f18a92d95591b0e46e7c346fac9208bdc758a46acc7af63","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-02893/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "eb1331d486bced8cd57667cab257cc89d206106e573963f95fff0a5ed28f10f9"
paper_digest_api_reader_plan_sha256: "c634e4a51878a3cf756c0578eaa8bc155b23db5dc170f6f0a4af49f850bc4870"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "a9fb24f8ee768e28af3ffbde9e9c00c4f5dc33e46ef739d0b959ed4de2ac3c1d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "bc98c802b7663aba5889deb8bd7cbaba1565d859fc6c4ca9c3d8265b9b781dc3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "9f7891923b36ee9b4a4778195795c7cc8b2e851d30459a63e4af93e5a324f462"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "6c289e00a6bb1ac7edfc3c8c8f15facf30e0d89d8487dab6b8febe68f8238721"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 能听见却没听进去：语音大模型如何处理用户的不耐烦

> 英文题目：*[Voice-Native LLMs Hear Frustration but Do Not Listen to It](https://arxiv.org/abs/2611.02893v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-paper-digest-blog/papers/?concept=task.speech-dialogue)；[语音情感识别](/audio-paper-digest-blog/papers/?concept=task.emotion-recognition)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)；[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Hanjun Luo：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuhan Lu：机构信息未能在本次解析中与作者逐人可靠绑定
- Hanan Salam：New York University Abu Dhabi

## 📌 核心摘要

读者需要理解的对象是直接听语音的语音原生大模型，输入是用户读出的题目音频，输出是解题答案，困难是用户沮丧可能藏在措辞里也可能藏在语气里，只看答案不变无法区分模型是真正包容还是根本没有听出语气。论文把同一道题做成四种录音，分别是中性措辞加中性语气、中性措辞加沮丧语气、沮丧措辞加中性语气、沮丧措辞加沮丧语气，固定题目答案和说话人，只改变两个通道。处理过程先用独立的情感识别器和听众检验沮丧语气确实存在，再用语气探针问模型听出中性还是沮丧，最后在同一批录音上计任务准确度变化。相对已有只看输出不变的方法，关键差异是引入表达、感知和利用三段划分和四个象限。与已有方法的差异带来实际意义，即把措辞通道的真正稳健和语气通道的未感知不变分开。在VoxAffect共353题中抽取50题的中性与沮丧语气15秒片段的同一组二选语气判断上，10名听众综合判断正确率为65.3%，高于8个模型48%到50%的正确率，模型至多把任一语气中4%的片段标为沮丧。结论只适用于温和合成沮丧和单轮客观题，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/Astarojth/hear-not-listen> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 用户不耐烦时，语音助手要接住什么

这篇论文研究的是语音直接输入的问答任务。输入是一段用户说出来的题目，可能是选择题、科学推理题、指令遵循题或数学题，目标是在用户语气变差时仍然把题做对，同时能察觉用户的不耐烦。必须保留的信息包括题目本身、选项、数字、约束和作答格式，不能因为语气变化就丢题或改格式。

已有做法分两条路。级联式做法先把语音转成文字再交给大模型，语气在转写后基本丢失。语音原生做法直接把波形送进音频语言模型，理论上既能看到文字内容，也能看到语速、音高和强调。与之相关的已有评估有的只看换说话人或换环境后准确率变不变，有的只在任务之外测情绪识别，都没有在同一段音频上同时检查模型是否感知到了情绪。

下面这张示意图把问题说得很直观，同一个问题在 3 种条件下呈现，模型对文字不耐烦有反应，对语气不耐烦没有反应，但作答都不变。如果只看作答，会以为两种情况一样稳健。

**语音原生模型 × 级联式助手：** 级联式助手只把语音识别后的文字交给语言模型，所以语气信息在转写时就丢失了；语音原生模型直接吃原始语音，同时看到说什么和怎么说，本文要检验的正是后者是否真的用上了怎么说的部分。

读图说明：请带着作答不变是否等于稳健这个问题看图，区分文字通道和声音通道各自的标签和最终答案。

> **看图路径：** 1. 先看左侧三格输入：同样的题目在中性、文字不耐烦、语气不耐烦下的样子；2. 再看右侧模型分出的文字分支和声音分支各自给出什么标签；3. 最后看底部作答是否变化，体会只看作答会漏掉什么

[![原论文 Figure 1：The same spoken question in 3 conditions.](https://arxiv.org/html/2611.02893v1/fig_teaser.svg)](https://arxiv.org/html/2611.02893v1/fig_teaser.svg)

*论文图 1。原论文 Figure 1:：“The same spoken question in 3 conditions. An ALLM reads frustration in the words but not in the voice, and its answer stays unchanged.”。*

这张图左侧给出同一道题的中性版本、受挫措辞版本和受挫语气版本，右侧画出模型内部对文字和声音的两条判断。可见文字不耐烦被标为不耐烦，声音不耐烦仍被标为中性，而底部两格答案都保持不变。这说明只看答案会掩盖感知环节的缺失，也是全文要拆开 3 个环节的动机。

### 已有研究为什么分不清没听见和真稳健

在声音情感感知一侧，已有语音情绪识别器输出类别或维度分数，呼叫中心研究用韵律、词汇和对话线索找不满，语音助手满意度研究也发现语气能补充文字之外的信息。针对语音大模型的诊断发现模型在图文冲突时更信文字，情感智能基准多用真人表演的对话，机制研究发现说话风格在编码器里可解码但输出不用。这些工作多把感知当终点，且多用夸张的表演语音，不能回答任务中忽略语气到底是稳健还是没听见。

在行为一侧，一类工作希望模型适应情绪，比如按情绪调整回复；另一类担心情绪带来越狱或准确率波动。但适应类分数把没听见和没行动混在一起，稳健类研究把答案不变读作稳健、变了读作脆弱，都没有在同一刺激上测感知，也很少独立变化措辞和语气。本文的差别在于同一批音频既打分又做音色探针，并用独立的识别器和听众先验证刺激本身有效。

### 论文把稳健重新定义成什么

论文把用户不耐烦时的稳健定义为对感知到的不耐烦保持任务行为不变。也就是说，先要证明不耐烦确实出现在音频里，再看被测模型自己是否感知到，最后看准确率和风格是否变化。只有感知到但行为不变，才算真正的稳健。

为此作者借用布伦斯维克透镜模型，把传递拆成 3 段。表达是两种语气在独立于被测模型的情绪分数上的差异，人听验证作为补充。感知是音色探针返回不耐烦的比例，分别算声音灵敏度和文字灵敏度。利用是任务准确率，分别算声音效应和措辞效应。最干净的声音感知检验是中性措辞下受挫语气与中性语气的标签差，因为此时只有声音携带情绪。

### 同一批音频上如何串起三个环节

整体流程是先构造受控刺激，再独立验证表达，然后在同一批音频上测感知和利用，最后把每个模型放进 4 个象限。构造时每个题目固定任务、答案和说话人，只切换措辞和语气，形成 4 个格子。验证时用外部识别器和人听确认语气差异存在。测试时同一段音频走两次，一次做题，一次做音色探针。

**表达 × 感知 × 利用：** 表达指音频里有没有可测的声学差异，感知指被测模型自己是否把语气判为不耐烦，利用指任务作答准确率是否变化，三者必须在同一批音频上分别测量，才能区分没听见和听见了但不受影响。

表达环节统计的是两种语气在情绪分数上的配对差异，期望取遍题目和措辞条件。

\[E=\mathbb{E}_{x,w}\big[s(a_{w1})-s(a_{w0})\big].\]

感知环节统计的是声音变化和措辞变化各自带来的标签比例变化，期望分别取遍另 1 维度。

\[S_{v}=\mathbb{E}_{w}[p_{w1}-p_{w0}],\;S_{w}=\mathbb{E}_{v}[p_{1v}-p_{0v}].\]

利用环节统计的是受挫语气和受挫措辞相对中性基准的准确率变化。

\[(\Delta_{v},\Delta_{w})=(\mathrm{acc}_{BV},\mathrm{acc}_{AN})-\mathrm{acc}_{BN}.\]

下面这张流程图把材料来源、文本管线、打分方式和分析象限放在一起，适合对照上面的公式理解每个量的输入输出。

读图说明：请沿从左到右的箭头看主路径，重点看同一批音频如何分叉进入任务打分和音色探针，再汇合到感知利用平面。

> **看图路径：** 1. 从左到右看材料、构造、打分、分析四栏的输入输出关系；2. 注意同一批音频同时送往任务作答和音色探针；3. 看右下角四个象限如何由感知和利用两个轴划分

[![原论文 Figure 2：Our protocol. We build VoxAffect as a within-item 2\\times 2 design of wording (B: neutral, A:…](https://arxiv.org/html/2611.02893v1/fig_framework.svg)](https://arxiv.org/html/2611.02893v1/fig_framework.svg)

*论文图 2。原论文 Figure 2:：“Our protocol. We build VoxAffect as a within-item 2\times 2 design of wording (B: neutral, A: frustrated) and voice (N: neutral, V: frustrated), verify that the frustration is…”。*

这张图左侧列出 4 个任务家族和声音池，中间是归一化、受挫改写、语义审核和两种语气合成，右侧上方是任务准确率打分，下方是音色探针和隐状态探针，最右是 4 个象限。可见表达验证独立于被测模型，而感知和利用共用同一批音频，这是区分未感知稳定和真正稳健的关键设计。

### 题目、措辞和语气是如何固定其他因素生成的

题目来自知识、科学推理、指令遵循和数学 4 个基准，每个家族先抽 100 题，去掉依赖图片、链接或填空的题目。再用大模型把原始题面转成可朗读的口语脚本，把数字、符号和格式要求说出来，并用规则检查残留标记。

**受挫措辞 × 受挫语气：** 受挫措辞是文字改写带来的不耐烦，受挫语气是合成指令带来的急促和烦躁，两者在同一题目、同一说话人下正交组合，才能分别估计文字通道和声音通道的作用。

受挫措辞由同一大模型改写，要求听起来明显不耐烦、怀疑助手会答得不用心，但保留任务、数字、选项和格式，不加侮辱、威胁、期限或新事实。受挫语气由合成系统实现，中性指令是平静清晰的英语，不耐烦指令是强烈不耐烦、恼火且情绪激烈。每个题目随机分配 55 个预设声音之一，并在 4 个版本中保持同一声音。

声音是否在文字一致时带来额外感知变化，用声音和措辞的交互项衡量，即受挫措辞下声音效应减去中性措辞下声音效应。

\[I=(p_{AV}-p_{AN})-(p_{BV}-p_{BN})\]

隐状态探针要排除语速带来的时长捷径，采用按时长分层的配对准确率，即在变短组和变长组内分别算受挫版本打分高于中性版本的比例再平均，这样只看时长只能得 0.5。

\[A=\tfrac{1}{2}\sum_{g}\mathbb{E}_{x\in X_{g}}\,\mathbb{I}\big[f_{BV}(x)>f_{BN}(x)\big],\]

**音色探针 × 隐状态探针：** 音色探针是让模型只看语气回答中性还是不耐烦的外部提问，测的是模型愿意说出来的感知；隐状态探针是用逻辑回归读音频编码器和语言模型内部表示，测的是模型内部是否编码了语气，两者不一致就说明听见了但没说出来。

### 本文训练了什么，又实际计算了什么

本文没有训练任何语音大模型，也没有微调被测的 8 个模型。6 个专有模型通过接口调用，2 个开源 7B 模型在本地单卡运行，所有模型都用温度 0 听每段音频。文本侧的归一化、改写和语义审核调用了深度的语言模型，语音侧调用了商用语音合成，评估侧运行了说话人向量、情绪识别器和逻辑回归探针。

实际执行的计算包括任务作答打分、音色探针标签统计、外部识别器打分、人听实验，以及在开源模型上提取 3 类表示并做五折交叉验证的逻辑回归。每折保证同一题目的两段音频在同一折，避免题目泄漏。正则化强度在训练折内用内层交叉验证选择，主曲线则固定常用值。没有报告梯度路径和参数更新，因为不涉及训练，输出的随机性也主要由温度 0 和固定提示控制。

### 数据集长什么样，模型和打分规则是什么

数据集构成需要先看题目数和音频总量的对应关系。下表比较的问题是 4 个家族各自保留了多少题，以及 400 题抽样中有多少因语义审核被去掉。指标方向是保留题数越多覆盖越广，但被去掉的题说明改写容易丢信息。

| 条件 | 抽样 | 去掉 | 保留 |
| --- | --- | --- | --- |
| 知识问答 | 100 题 | 15 题 | 85 题 |
| 科学推理 | 100 题 | 16 题 | 84 题 |
| 指令遵循 | 100 题 | 11 题 | 89 题 |
| 数学 | 100 题 | 5 题 | 95 题 |
| 合计 | 400 题 | 47 题 | 353 题 |

上表把总量 353 题和 1412 段音频的来源说清了。语义审核由大模型法官检查选项、数字和格式是否齐全，3 位专家再检查任务保留、自然不耐烦和可朗读性，一致性较高，被修改的 5 个改写重新合成。说话人一致性用说话人向量验证，同一题目内余弦平均很高，远高于不同说话人之间，说明 4 个版本确实是同一人说的。

被测模型包括多个专有语音模型和两个开源 7B 模型，共 8 个，每个都听全部 4 个格子的 353 题。任务指令固定为准确作答音频任务。选择题看选项准确率，数学看最终答案精确匹配，指令遵循用官方检查器做严格的提示级准确率。所有对比都在题目内配对，先在家族内平均再跨家族宏平均，不确定性用家族内重抽样的自助区间。

下面这张组成图展示子类别分布，读图时注意指令遵循计数的是指令条数。

读图说明：请先看中心的总题数、总段数和声音数，再按 4 个颜色区块看各自的子类别花瓣和计数。

> **看图路径：** 1. 看中心总数和四个任务家族各自的题目数；2. 看每个花瓣上的子类别计数，理解题目覆盖面；3. 注意右下角指令遵循类计数的是指令条数而非题目数

[![原论文 Figure 3：VoxAffect comprises 353 items from 4 task families, rendered as 1,412 clips in 55 voices.](https://arxiv.org/html/2611.02893v1/figures/fig_stats.png)](https://arxiv.org/html/2611.02893v1/figures/fig_stats.png)

*论文图 3。原论文 Figure 3:：“VoxAffect comprises 353 items from 4 task families, rendered as 1,412 clips in 55 voices.”。*

这张图中心标出 353 题、1412 段和 55 个声音，4 个扇区的分瓣标出化学、物理、代数、格式约束等子类别的具体题数。可见题目覆盖较宽，但每瓣题量不大，后续按家族拆分的声音效应和措辞效应容易波动，这是解释小样本家族结果时要记住的限制。

### 只看答案会以为都稳健，感知揭示了什么

主结果先看利用。受挫语气的准确率效应在多个模型上接近零，8 个中有 7 个的区间包含零，受挫措辞的效应也都在小范围内。如果只看输出，结论会是语音大模型对用户不耐烦很稳健。

但感知完全是另一幅图。下表比较的问题是中性措辞下模型自己报告的语气标签与外部参考的差距，公平条件是同一批 15 秒片段，指标是判为不耐烦的比例和与真实语气的一致率，方向是越高越能听出语气。

| 判断者 | 中性语气判不耐烦比例 | 受挫语气判不耐烦比例 | 与语气一致的准确率 |
| --- | --- | --- | --- |
| 人听平均 | 25% | 56% | 65.3% |
| 强表演愤怒下 7 个模型 | 无虚报 | 73% 到 100% 检出 | 高可分度 |

上表说明刺激本身对人是可辨但温和的，人听在 65.3% 的判断中正确，10 个听者全部通过强愤怒捕捉试验，而模型在同样片段上几乎全判中性，正确率停在随机水平。这就把输出不变重新解释为未感知的稳定，而非稳健。积极对照很重要：7 个模型能检出 73% 到 100% 的强表演愤怒，说明它们不是听不见任何声音情绪，而是听不出这种轻度不耐烦。

**真正的稳健 × 未感知的稳定：** 真正的稳健是感知到了不耐烦但作答不变，未感知的稳定是根本没感知到所以作答也没变，只看准确率不变会把后者误当成前者，本文用感知灵敏度阈值把两者分开。

读图说明：请重点对比声音通道和文字通道的灵敏度柱高，再看强表演愤怒对照和随唤醒差异变化的放大模式。

> **看图路径：** 1. 对比左图声音灵敏度和文字灵敏度的柱高差异；2. 看中图在主探针、最大唤醒子集和强表演愤怒下的检出率；3. 看右图声音效应如何只在受挫措辞下随唤醒差异放大

[![原论文 Figure 5：Perception of frustration.](https://arxiv.org/html/2611.02893v1/fig_perception.svg)](https://arxiv.org/html/2611.02893v1/fig_perception.svg)

*论文图 5。原论文 Figure 5:：“Perception of frustration. The models read it in the words yet miss it in the voice (a, b), although most detect acted anger (b), and the voice matters only under frustrated…”。*

这张图左面板显示文字灵敏度高达几十个百分点而声音灵敏度只有零点几个到三点几个百分点，中面板显示主探针和最大唤醒子集下受挫语气仍很少被标不耐烦而强愤怒被大量检出，右面板显示声音效应只在受挫措辞下随唤醒差异从低到高爬升。这支持听见强情绪但没听进轻度语气的判断，也引出下一节的编码证据。

### 编码器里有语气信号，为什么到答案就变弱了

编码证据来自两个开源模型。下表比较的问题是线性探针在不同表示上区分受挫语气和中性语气的能力，公平条件是时长分层的配对准确率，随机水平为 0.5，方向是越高越说明内部编码了语气。

| 表示位置 | 开源模型甲 | 开源模型乙 | 声学特征对照 |
| --- | --- | --- | --- |
| 音频编码器中层 | 0.67 | 0.69 | 0.67 |
| 音频侧末级 | 0.63 | 0.55 | 中等 |
| 语言模型音频段中层去声学残差后 | 0.66 | 0.59 | 已回归掉时长 |
| 答案位置末层 | 0.61 | 0.54 | 标签仍接近随机 |

上表的主要收益是中层编码器达到 0.67 和 0.69，与 18 个声学特征相当，且在回归掉声学特征和时长后语言模型音频段仍有 0.66 和 0.59，说明内部表示超出浅层特征。但代价是到答案位置衰减到 0.61 和随机水平的 0.54，而音色探针标签在 353 段上几乎全为中性。这符合编码了但没用到输出的模式，缺口在如何把信号带到决策。

另一个细节是放大模式。一旦措辞本身不耐烦，声音会提高被标不耐烦的比例，从低唤醒到高唤醒的上升在多个模型达到十几个百分点，而中性措辞下几乎不动。这提示声学证据可能被文字门控，即文字先提出不耐烦的假设，声音才被计入。这也解释了为什么温和语气单独出现时不被报告。

### 声音和措辞各自改变答案吗，有没有反例

利用的对照需要把声音效应和措辞效应放在同一基准下看。下表比较的问题是受挫语气和受挫措辞相对中性基准的准确率变化，公平条件是题目内配对加跨家族宏平均，指标是百分点变化，方向是绝对值越小越稳定。

| 模型范围 | 声音效应 | 措辞效应 | 备注 |
| --- | --- | --- | --- |
| 多数模型 | 区间包含零 | 绝对值较小 | 7 个模型声音效应不可辨 |
| 特殊模型 | 提升 7.7 个百分点 | 小幅变化 | 4 个家族同号但探针未感知 |
| 风格指标 | 长度和安抚标记无可辨变化 | 同样无可辨变化 | 仅在指令遵循长回复上测 |

上表说明多数模型的答案稳定，但有一个未胜出项很关键。某个模型在没感知到声音的情况下准确率提升 7.7 个百分点，区间明显排除零，且 4 个家族同号。这属于没感知却有变化，可能是韵律启发式而非真正的理解。反过来，措辞通道被感知到 40% 到 75% 却不改变准确率和风格，所以措辞不变才是真正的稳健。只看输出会把这两种不变混为一谈，也会漏掉这种没感知却变化的反例。

按家族拆分时效应仍较小，但个别格子因样本少而波动。结论成立的条件是单轮、良性、客观打分的英文合成语音，换成多轮、开放式或真人强情绪时，声音效应可能重新出现。

### 这些结论在什么条件下才成立

首先是刺激范围。只研究了一种轻度不耐烦、一种英语合成实现、单轮良性任务。真人受挫可能更快更响或更压抑，其他情绪如焦虑悲伤、其他语言、多轮对话和开放式作答都没有测，不能推广。

其次是改写单一。所有受挫措辞来自同一个大模型的风格，其他改写可能措辞更冲或更含蓄，文字灵敏度和措辞效应可能变化。

再次是探针局限。音色探针测的是模型愿意说出来的标签，可能受探针措辞和标签集影响。隐状态只在两个开源模型上可做，且线性探针只能抓住线性可解码的部分，非线性编码可能被低估。阈值选择也有约定成分，感知阈值按听者校准，行为阈值区分实际重要性和统计显著性，改变阈值会移动个别模型的象限，但声音通道未被感知的总体格局不变。

### 要复现第一步做什么，资源现在能拿到吗

复现第一步是拿到刺激和脚本。论文称公开了 1412 段音频的清单、口语脚本、标准答案、声音和条件，以及任务和探针的提示与评测脚本，其中知识、指令和数学部分可公开，科学推理部分因题库要求按需提供并附警示串。合成、改写和评测的具体模型版本与温度、重抽样次数和分层方式都已说明，便于重跑配对对比。

本次收到的链接是第三方镜像指向的仓库地址，状态显示可达，但这只证明论文提到了该链接，不能据此写作者资源已公开或当前可用。真正复现时应以论文正文的版本标识和附录的提示词为准，先重跑 15 秒片段的人听校验和强愤怒对照，确认刺激强度后再测新模型的感知利用平面。

### 什么时候值得尝试，还缺哪项验证

当你的语音助手需要处理用户抱怨或追问时，值得尝试这套双检查。先用独立识别器或小规模人听确认语气差异存在，再在同一批音频上同时跑任务准确率和音色探针，并加上强情绪对照。只有感知灵敏度达标且行为不变，才能称稳健，否则只是没听见。

对模型改进而言，信号已经到了编码器，缺的是带到答案的通路和在中性措辞下读出轻度语气的训练。随着副语言意识训练降低阈值，模型可能从未感知稳定进入受情绪牵引的漂移，尤其在声音和文字一致时先出现，这正是安全评估已在情绪化表达中看到的风险。

还缺的验证是真人自然不耐烦、多轮对话和其他语言上的重测，以及非线性探针和更多探针措辞的稳健性。只有补上这些，才能知道听见和听进去之间的缺口到底有多大。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.02893v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
