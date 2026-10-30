---
title: "AudioRSI: Recursively Self-Improving Audio Reasoners"
date: 2026-10-29
draft: false
tags: [音频推理, 强化学习, 音频大模型, 幻觉与忠实度]
categories: [论文速递]
description: "AudioRSI 让同一音频大模型既生成推理又两两比较推理质量，并每隔一段时间用新策略替换旧 cirtic，以结果正确加自我评价的组合奖励做 GRPO 训练，在四个与训练分布 disjoint 的基准上提升分布外推理，且代价是每题 56 次 critic 前向的训练开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.36578"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "自己给自己打分：AudioRSI 如何让音频模型边推理边当裁判"
paper_digest_original_title: "AudioRSI: Recursively Self-Improving Audio Reasoners"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.36578v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.36578v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.36578v1.pdf"
paper_digest_primary_task: "音频推理"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-reasoning","label":"音频推理"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "AudioRSI 让同一音频大模型既生成推理又两两比较推理质量，并每隔一段时间用新策略替换旧 cirtic，以结果正确加自我评价的组合奖励做 GRPO 训练，在四个与训练分布 disjoint 的基准上提升分布外推理，且代价是每题 56 次 critic 前向的训练开销。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiajun Fan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Roger Ren"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jingyuan Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rahul Pandey"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Prashanth Gurunath Shivakumar"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ankur Gandhe"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yile Gu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ge Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ivan Bulyko"}]
paper_digest_abstract_sha256: "db00a1fb57319ad9e103b822b39f6a73faca68b56adfc5d351417497b26b18b9"
paper_digest_sidecars: {"citation.bib":{"sha256":"874e1306ffdd2ccedc511fc8521447a9d2673c2a33b9084fb69a4fe328e2311f","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36578/citation.bib"},"citation.json":{"sha256":"0e7ba2bf9a8f03056e9cdecfee02fcf9531352ff996c5e67ad1b9e20052765c8","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36578/citation.json"},"citation.ris":{"sha256":"1caa8d1b2dae981514987f49145e6b5ef9b32de7f3f9fcb5f5d693484b9b0fe6","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36578/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"93baf506ba5701021b1c2b83f5621dbcbde501834e1ce1d42ff9f02fe0e35c1d","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36578/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "da5c980a6941bebc91242e2525d42121d52681e8f4a9b34e7cc6030cf7ad04c2"
paper_digest_api_reader_plan_sha256: "702889af0fbb966deb06e0bafeea1c6c533f0ef46e173285d4660bf380f53d4a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "93cc64a1f5769760d41b59d09a8315f27a9ec4d0f0e41ef24ee9a3471e4f5d27"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "32222e01d4ff811245608de49b7277703606937f4d827a0f11914d97a69a3458"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9b1aeaa4ef1d6b0b68f6d2c793f8d8b11ddfa9c550f8c1f9acaff123e5c2b306"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "513a11597bae2efca90964a12e283267b98019d193c38691704c8a13f20ecbeb"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 自己给自己打分：AudioRSI 如何让音频模型边推理边当裁判

> 英文题目：*[AudioRSI: Recursively Self-Improving Audio Reasoners](https://arxiv.org/abs/2610.36578v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频推理](/audio-paper-digest-blog/papers/?concept=task.audio-reasoning)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **研究重点**：[幻觉与忠实度](/audio-paper-digest-blog/papers/?concept=research_focus.hallucination-faithfulness)
- **模型家族**：[音频大模型](/audio-paper-digest-blog/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jiajun Fan：机构信息未能在本次解析中与作者逐人可靠绑定
- Roger Ren：机构信息未能在本次解析中与作者逐人可靠绑定
- Jingyuan Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Rahul Pandey：机构信息未能在本次解析中与作者逐人可靠绑定
- Prashanth Gurunath Shivakumar：机构信息未能在本次解析中与作者逐人可靠绑定
- Ankur Gandhe：机构信息未能在本次解析中与作者逐人可靠绑定
- Yile Gu：机构信息未能在本次解析中与作者逐人可靠绑定
- Ge Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Ivan Bulyko：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是音频问答：输入一段录音、一个自然语言问题和四个候选答案，模型要先写出推理过程再给出答案，难点是只奖罚最终答案时，瞎猜和扎实分析得分相同，模型学不到怎样推理。AudioRSI让同一模型分饰两角：做行动者（英文actor）时采样多条推理路径，做批判模型（英文critic）时听着同一段录音比较两条路径谁的推理更贴合声音证据，胜平负映射为过程奖励并与结果奖励相加后送入分组相对策略优化。批判模型在周期内冻结以保持奖励稳定，每隔T步再用当前行动者替换，使评判标准随能力上升，替换前检查小批量结果准确率没有倒退。相对已有方法，关键差异是奖励不再来自外部固定判分器或人工过程项，而是在一次训练内部递归更新。在MMAU test-mini上按同一评测协议比较准确率，AudioRSI以76.10%超过结果奖励复现基线Ke-Omni-R的74.60%，并伴随结构化推理行为增多。结论限于Qwen2.5-Omni-7B基座和AVQA音频训练，分布外泛化只在四个基准上验证，感知子能力和过长同步周期下效果会打折，跨基座与跨数据尚未验证。原文未披露训练、推理或部署成本以外的完整开销，只报告8卡NVIDIA H200上6400步需3-4天。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的是什么样的音频问答任务

论文处理的是带选择题的音频问答。输入有四样东西：一段录音、一个自然语言问题、4 个候选答案、一个标准答案。录音可能包含语音、环境声、音乐或混合声，问题则要求做时间顺序、因果、场景、说话人情绪等多步推理。

模型要输出两段内容：放在 think 标记里的思考过程，以及放在 answer 标记里的最终选项。这种格式把怎么想和选什么分开写，后面才能分别评价推理质量和答案对错。训练数据用 AVQA，只取音频轨道，视频帧丢掉；所有评测都用与 AVQA 不重叠的 4 个基准，所以讨论的是分布外泛化，不是训练集拟合。

### 此前音频推理强化学习把奖励放在哪里

按论文梳理，已有做法的奖励都来自策略之外。第一类只看最终答案，对了就给分，错了就不给，幸运猜对和扎实推对拿同样的分。第二类加若干手写的过程项，需要在多个权重之间调平衡。第三类请一个训练时冻结的外部大模型当裁判，标准不随学生进步。

在音频之外，自我奖励、一致性奖励、带文字批评的 GRPO 等工作已经让模型参与评价，但多是纯文本任务，或把图像刻意藏起来。论文强调音频有一个可核对的依据：critic 能听到同一段录音，可以直接检查推理里说的某个声事件到底有没有出现，这是纯文本裁判做不到的。

### 只奖答案会带来什么困难

如果奖励只看答案，模型会遇到两难。答对的路径里既有紧扣录音的，也有碰运气的，奖励分不开；答错的路径里，有些是感知错了，有些是推理与答案自相矛盾，0 分也说不清错在哪。模型只能靠试错慢慢摸索有效的推理写法。

论文把问题拆成两半：模型能不能自己给出过程级监督；这种监督能不能随策略一起变好。前一半对应自我评价机制，后一半对应周期性把执行者换成 critic 的递归步骤。

### AudioRSI 让一个模型分饰两角

整体流程围绕一个音频大模型展开。它在执行者模式下对每道题采样 K 条推理加答案，在 critic 模式下对这些候选做两两比较，给出胜、负或平的判断，再转成数值奖励。结果正确性奖励保留，自我评价奖励叠加上去，一起算 GRPO 的组内优势。每隔 T 步，执行者的权重被复制给 critic，下 1 阶段就用更高的标准打分。

下面的读图任务帮助理清这条回路：输入从哪里进，判断从哪里出，奖励又从哪里回去更新策略。

**执行者 × critic：** 执行者负责听录音、看问题和选项并生成带思考过程和答案的候选，critic 负责听同一段录音并比较两条推理谁更贴合声音证据；二者是同一套权重的两种用法，执行者提供多样性，critic 提供过程区分度，组合后奖励既看答案对错又看推理是否被录音支撑。

> **看图路径：** 1. 先看左侧音频加问题如何进入执行者并分出推理路径与答案两路；2. 再看上方自我评价模型如何对两条推理做两两比较并输出胜负；3. 最后看右侧三种奖励如何汇入 GRPO 再回头更新执行者

[![原论文 Figure 1：Overview of AudioRSI. A single Audio LLM plays two roles: as an actor it generates K reasoning…](https://arxiv.org/html/2610.36578v1/sac_new.png)](https://arxiv.org/html/2610.36578v1/sac_new.png)

*论文图 1。原论文 Figure 1:：“Overview of AudioRSI. A single Audio LLM plays two roles: as an actor it generates K reasoning paths per audio question, and in critic mode the same model scores them by pairwise…”。*

左图把回路画得很具体：音频和问题先进入下方的执行者，生成推理路径和答案；上方是同一模型的自我评价分支，对推理做两两比较后输出判断结果；判断结果变成自我评价奖励，与准确率奖励、格式奖励汇合进 GRPO，再回头更新执行者，每 T 步向上同步 1 次。右上展示了 critic 如何区分贴合切菜声的推理与诉诸一般先验的推理，右下展示了执行者学到的按顺序铺陈和排除不存在声音的写法。这张图说明递归不是口号，而是一条权重复制加奖励回流的闭环。

### 两两比较如何变成每个候选的分数

先看保留的结果项。它对第 i 个样本的第 k 条输出打分，答对得 1 分，格式合法再加权重 lambda。首次出现时解释一下：这里的结果奖励只管答案和格式，不管推理过程写得好不好。

\[R_{\text{outcome}}(s_{i};y_{i})=\mathbb{I}[\hat{y}_{i}=y_{i}]+\lambda\cdot\mathbb{I}[\texttt{ValidFormat}(s_{i})]\]

再看 critic 的判断。critic 拿到同样的录音、问题、选项，以及候选路径和参考路径，被要求评价推理过程而不是只看答案，输出胜、负或平。关键是它带着音频做判断，能否决引用了录音里根本没有的声音的推理。

\[\mathcal{J}(s_{i}^{(k)},s_{i}^{\text{ref}})=\pi_{\theta^{\text{critic}}}\left(\texttt{judge}\mid a_{i},q_{i},\mathcal{C}_{i},s_{i}^{(k)},s_{i}^{\text{ref}}\right)\]

判断转分数的规则很直接：胜得 1，平得 0.5，负得 0。对同组 K 个候选，每条轮流与其余 K-1 条比较再平均，赢得越频繁分越高。默认用在线策略，即参考路径就是同组其他采样，不依赖外部模型离线写好的参考。

\[R_{\text{self-critique}}(s_{i}^{(k)})=\frac{1}{K-1}\sum_{j\neq k}r(s_{i}^{(k)},s_{i}^{(j)})\]

最后把两部分相加，总奖励等于结果奖励加 alpha 乘自我评价奖励。论文实际把各类权重都设为 1，让准确率打底、过程质量拉开同分候选。

\[R_{\text{total}}(s_{i}^{(k)};y_{i})=R_{\text{outcome}}(s_{i}^{(k)};y_{i})+\alpha\cdot R_{\text{self-critique}}(s_{i}^{(k)})\]

**结果奖励 × 自我评价奖励：** 结果奖励只看预测答案是否等于标准答案以及格式是否合规，自我评价奖励看同一组内一条推理赢过其他几条的频率；前者保证准确率方向，后者把同样答对但证据质量不同的路径拉开差距，二者相加后在组内做均值基线才形成优势。

### 为什么 critic 不能每步都跟着变

如果 critic 就是正在更新的策略本身，评价标准每步都在漂，昨天判高分的路径今天可能被判低分，策略更新会不稳。论文因此设一个独立的 critic 副本，在周期内冻结，只在整 T 步才同步 1 次。理想化的同步规则是取余为零就复制，否则保持不变。

\[\theta^{\text{critic}}_{t}=\begin{cases}\theta_{t}&\text{if }t\bmod T=0\\ \theta^{\text{critic}}_{t-1}&\text{otherwise}\end{cases}\]

实际用的是带守卫的版本：到同步点时比较执行者和现任 critic 在当前训练小批量上的结果准确率，只有执行者没有退化才复制。这是对把变弱的检查点扶成裁判的简单防范。T 太小会逼近每步都变的非平稳，T 太大会让 critic 落后于执行者，论文扫过 50 到 1000 并默认取 200。

训练时每步采样批量 B 乘组大小 K 条轨迹，论文 B 取 8、K 取 8，即每步 64 条推理。优势用总奖励减组平均，不做组标准差归一化。目标里还有对参考模型的 KL 正则，权重 beta 控制偏离初始模型的程度。

**GRPO × 组内优势：** GRPO 是对同一问题采样一组候选再做相对比较的强化学习做法，组内优势是每条候选的总奖励减去本组平均；GRPO 提供利用相对好坏更新策略的框架，组内优势提供不需要额外价值网络的基线，组合后模型被推向高于组平均的推理写法。

**周期同步 × 带守卫的交接：** 周期同步指 critic 平时冻结、每隔 T 步才复制一次执行者权重，带守卫的交接指只有当执行者在当前小批量上的结果准确率不低于现任 critic 才允许复制；前者解决每步都变带来的奖励漂移，后者避免把退化的检查点扶成裁判，二者合起来让标准随能力上升又不至于抖动。

### 在什么底座和数据上训练，又在什么地方评测

底座是 Qwen2.5-Omni-7B，所有强化学习方法都从同一检查点起步。训练只用 AVQA 的音频问答，评测用 4 个分布外基准：MMAU test-mini 共 1000 题，按声音、音乐、语音划分，也按易、中、难划分；MMSU 共 5000 题，偏重语音多技能，分感知与推理两部分；MMAU-Pro 共 5305 题，含需要跨多段录音推理的多音频分支；MMAR 共 1000 题，考察跨领域的深层推理。

最干净的对照是作者自己复现的 Ke-Omni-R：同底座、同 AVQA 数据、同套评测脚本，只差奖励里有没有自我评价。Omni-R1 等行的分数引自原作者报告，协议不同，只能做背景参考。论文提醒，在自家协议下未训练底座在 MMAU 上只有 65.2%，而报告里的 71.5% 来自另一套协议，小差距不宜过度解读。训练最多 6400 步，学习率 1e-5，KL 系数 0.01，同步周期默认 200。

### 四个分布外基准上看到了什么

先看 MMAU test-mini 的比较问题：在同底座、同数据、同评测下，加上自我评价是否超过只看结果的强化学习，以及与外部大模型的相对位置。指标是准确率，越高越好。

| Method | Sound | Music | Speech | Total Acc. |
| --- | --- | --- | --- | --- |
| AudioRSI (Ours) | 82.58 | 69.16 | 76.58 | 76.10 |
| Ke-Omni-R | 79.28 | 70.06 | 74.47 | 74.60 |
| Omni-R1 (AVQA) | 82.0 | 70.1 | 75.4 | 75.8 |
| Audio Flamingo 3 | 79.58 | 73.95 | 66.37 | 73.30 |

表中 AudioRSI 总准确率 76.10%，高于同协议的 Ke-Omni-R 74.60%，也高于引用的 Omni-R1 AVQA 版本 75.8%；分域看声音和语音占优，音乐 69.16% 略低于 Ke-Omni-R 的 70.06%。与专有模型相比，它超过表中 Gemini 2.5 Pro 与 Audio Flamingo 3 的报告分，但不同行来自不同协议，只能说在各自报告口径下的相对位置，不能当成同场竞技的胜负。

再看 MMSU 的比较问题：感知与推理两部分谁拉动了总分。指标同样是准确率，越高越好。

| Model | Perception | Reasoning | Overall |
| --- | --- | --- | --- |
| AudioRSI (Ours) | 45.62 | 80.54 | 62.52 |
| Ke-Omni-R | 47.09 | 78.06 | 62.08 |
| Gemini 1.5 Pro | 46.10 | 76.16 | 60.68 |

AudioRSI 总分 62.52%，推理部分 80.54% 领先，感知部分 45.62% 反而低于 Ke-Omni-R 的 47.09%。总分只领先 Audio Flamingo 3 的 62.30% 和 Ke-Omni-R 的 62.08% 零点几个百分点，论文自己也读作相当而非决定性领先。单种子训练是重要限制，小数点后的排序可能随种子变化。

MMAU-Pro 的关键在多音频分支，它要求联合多段录音推理，被称为最难的分支。比较问题是：在平均分之外，最难分支上谁更稳。

| Model | Multi-Audio | Music | Sound | Speech | Avg |
| --- | --- | --- | --- | --- | --- |
| Gemini 2.5 Flash | 21.2 | 64.9 | 51.9 | 73.4 | 59.2 |
| AudioRSI (Ours) | 37.9 | 63.5 | 50.5 | 61.4 | 55.9 |
| Gemini 2.0 Flash | 26.5 | 56.9 | 48.4 | 69.5 | 55.7 |

AudioRSI 在多音频上 37.9%，高于 Ke-Omni-R 的 35.6%，也高于表中 Gemini 2.5 Flash 的 21.2% 和其他行；平均分 55.9% 则次于 Gemini 2.5 Flash 的 59.2%。多音频的大差距里，结果奖励的基线已经排第二，自我评价是在其上再加一点，不能把整段领先都归于自我评价。

训练曲线的读图任务是：递归的自我评价是否在后半程一直压住冻结的外部裁判。

> **看图路径：** 1. 对比实线与虚线在训练后半段的相对位置；2. 注意 5k 步附近虚线追近后又走平的形态；3. 不要从图中读出具体小数点后数值

[![原论文 Figure 4：Enlarged version of Figure 3: OOD accuracy on MMAU test-mini during training, AudioRSI (recursive…](https://arxiv.org/html/2610.36578v1/val_curve_app.svg)](https://arxiv.org/html/2610.36578v1/val_curve_app.svg)

*论文图 2。原论文 Figure 4:：“Enlarged version of Figure 3: OOD accuracy on MMAU test-mini during training, AudioRSI (recursive self-critic) vs.”。*

图中横轴是训练步数，纵轴是 MMAU test-mini 上的分布外准确率。实线是递归自我评价，虚线是冻结的 Ke-Omni-R 当裁判。可见后半程实线始终在虚线上方，虚线在 5k 步附近几乎追平随后走平，而实线又再度抬升。这支持标准随策略上升的说法，但只覆盖一条训练轨迹和一个基准，不能推广到所有数据。

### 推理写法发生了哪些可观测的变化

论文用两类证据看推理质量。第一类是例子：声音排序题里 AudioRSI 用 first、followed by、then、finally 把 4 个声事件按顺序铺陈并选对，而基线列对了顺序却选了矛盾的选项；数词题里基线把 down 听成 anchor，AudioRSI 则明确写出没有第二个 anchor；多说话人情绪题里 AudioRSI 给出每位说话人的状态加声音依据。这些例子说明评价的不只是答案，还有推理与答案是否一致、有没有编造录音内容。

第二类是 1000 条 MMAU 推理的关键词统计，比较问题是：5 种偏向结构化、证据化的措辞出现率是否变化。指标是出现率，越高表示该措辞越常见，但只量措辞不量正确，且受长度影响。

| Behavior | AudioRSI | Ke-Omni-R | Qwen2.5-Omni-7B |
| --- | --- | --- | --- |
| Premise & Deduction | 94.4% | 62.7% | 53.3% |
| Evidential Support | 29.7% | 19.1% | 17.4% |
| Explicit Justification | 22.2% | 3.5% | 3.2% |

表中前提加演绎从基线的 53.3% 和 62.7% 升到 94.4%，几乎每条都有 since、therefore 等连接；明确论证从 3% 左右升到 22.2%，是相对增幅最大的一项。论文提醒这部分有风格成分，AudioRSI 的轨迹更长且复用固定句式，所以配了外部裁判的评价：GPT-4o Audio 在 1000 组盲比中更偏好 AudioRSI，对底座胜率 81.2%，对 Ke-Omni-R 胜率 74.7%。但该裁判自身 MMAU 分数低于三者，又可能偏爱显式结构化措辞，只能当佐证。

小规模双盲审核是另一佐证：4 个案例里 critic 的选择与 3 位标注人一致，包括挑出时间顺序正确的一条、指出答对但把行驶说成怠速的不精确、区分吟唱与歌唱的术语误用、否决编造火车声的幻觉。案例少，只能算有效性抽查，不是大规模一致性研究。

### 递归和同步周期各自起了什么作用

消融的比较问题有 3 个：拿掉自我评价会怎样；把刷新的 critic 换成冻结外部裁判或固定参考会怎样；同步周期取多大合适。论文在 MMAU test-mini 上报告：去掉自我评价回到结果奖励，总分从 76.10% 掉到 74.60%，掉分集中在声音和语音，音乐反而微升；换成冻结外部裁判剩 75.10%，换成固定参考剩 74.90%，都略高于纯结果奖励。

周期扫 50、100、200、500、1000，200 最好，50 最差，1000 接近冻结，500 与 200 接近。困难分支的排序不同，100 最好，说明总分选出的周期不是每块都最优。

下面的读图任务是把准确率和长度放在一起看，回答自我监督是否带来长度爆炸或崩塌。

> **看图路径：** 1. 先看左图分布外准确率随步数是否持续抬升；2. 再看右图平均推理长度是单调暴涨还是先升后回落；3. 把两图对照判断是否存在长度爆炸

[![原论文 Figure 5：OOD evaluation accuracy and average reasoning length (tokens) of AudioRSI over the course of…](https://arxiv.org/html/2610.36578v1/reasoning_evolution.svg)](https://arxiv.org/html/2610.36578v1/reasoning_evolution.svg)

*论文图 3。原论文 Figure 5:：“OOD evaluation accuracy and average reasoning length (tokens) of AudioRSI over the course of training.”。*

左图分布外准确率随训练稳步抬升，右图平均推理长度先快速上升、中段见顶、后段回落但未再创新高。两图对照说明长度没有无限制膨胀，准确率也没有随长度增长而持续下跌。论文没有给出同硬件同批量下的墙钟对比，所以 K 等于 8 时每题 56 次 critic 前向相对 8 次执行者前向的理论开销是明确的，实际耗时比则未量化。

**在线自比较 × 固定外部参考：** 在线自比较指被比较的两条路径都来自当前策略同组采样，固定外部参考指用已训练好的 Ke-Omni-R 离线生成参考路径；前者保证比较双方能力接近、始终有区分度，后者提供稳定但会随训练脱节的锚点，论文比较二者是为了检验自包含训练是否足够。

### 这些结论在什么条件下才成立

适用条件要先讲清。证据来自一个底座加一个训练语料，换底座、换数据是否还有同样的递归增益没有测。所有分布外说法都相对 AVQA 而言，4 个基准与 AVQA 不重叠，但彼此难度和协议不同，跨表直接排名要小心。单种子训练意味着零点几分的领先只能读作相当，MMSU 总分就是这种情况。

还有三处容易误读。第一，音乐域不一致：在 MMAR 上 AudioRSI 的音乐领先所有行，在 MMAU 与 MMAU-Pro 上却略逊于 Ke-Omni-R，说明自我评价不是在所有声音类型上都加分。第二，冻结裁判的比较同时换了是否刷新和用谁当裁判两个因素，严格的刷新检验是同一 critic 下的周期扫描。第三，关键词和外部裁判都偏爱显式措辞，不能单独证明逻辑真正变强，需要和能否决幻觉、能否保持推理与答案一致的例子一起看。

成本方面，每题 56 次 critic 前向是训练期的负担，推理部署时不需要这部分。论文未报告受控墙钟比，也未测延迟和误判率，不能承诺更快或更省。

### 如果要复现第一步该做什么

先准备同底座 Qwen2.5-Omni-7B 与 AVQA 音频问答，输出格式固定为 think 包推理、answer 包选项。执行者每题采样 8 条，critic 对同组内 56 个有序对逐一判胜负平，映射为 1、0.5、0 再平均，与结果正确加格式合规相加，权重都取 1。GRPO 用组平均做基线，不做组标准差归一化，KL 系数 0.01，学习率 1e-5，批量 8，最多 6400 步，同步周期先取 200，同步前检查执行者在当前小批量上的结果准确率是否退化。

评测用官方脚本跑 MMAU test-mini，并单独记录声音、音乐、语音与易、中、难。引用 Omni-R1、Gemini、Audio Flamingo 等报告分时注明协议不同。关于资源，论文未绑定经验证的代码、模型或数据链接，不得声称已公开；实验在 8 卡 H200 上训练 3 到 4 天，评测在单卡上每轮 1 到 2 小时，照此准备预算。还需要补的验证是多种子、换底座与换训练数据的重复，以及实际墙钟开销的受控对比。

在机制分工上，同一模型分饰两角：执行者负责生成推理路径与最终选项，评价者则切换到判优模式，只评推理过程而不只看答案对错。评价者与执行者听到的是同一段录音，因此能核对推理中引用的声学证据是否真实存在，对于凭空捏造不存在声音、把闲置误判为运行、把吟诵混同为歌唱等幻觉式论证可以直接判负。这种听见后再评判的设定，使过程奖励不只是文字表面是否通顺，而是是否有录音可依。组内两两比较把每一轮的相对优劣变成可平均的分数，再与结果奖励相加，既保留答对的牵引，又能把同对同错但推理质量不同的候选区分开。

在执行顺序上，每一步先从旧策略对小批量中每题采样 8 条轨迹，逐条计算结果正确与格式合规分；再用当前冻结的评价者对组内 56 个有序对逐一给出胜负平并折算平均，得到自评价分，两项按权重 1 相加为总奖励；随后按组平均求优势，不做组内标准差归一化，代入带裁剪与 KL 正则的 GRPO 目标更新执行者。

在同步周期内评价者保持冻结以维持奖励平稳，到达 200 步整数倍时才做 1 次受守卫的交接：只有执行者在当前小批量上的结果准确率不低于现任评价者，才把执行者权重整体复制为新评价者，否则保留原评价者。这样既让评价标准随策略变强而抬高，又避免被 1 次退化的快照带偏，也避开了每步都换评价者带来的非平稳抖动。

判优时把音频、问题、选项与匿名化为 A、B 的两条路径一并输入，要求先在 think 中写比较理由再在 answer 中判 A 优、B 优或平局，候选胜记 1、平记 0.5、负记 0。参照默认取自同组其余候选以实现完全自包含，也可用外部模型离线提供参照。同步周期管的是稳定与跟随的权衡：周期内冻结保证同一轮奖励口径一致，周期过小趋近每步更换的非平稳抖动，周期过大则评价者落后于执行者；在 50 到 1000 的扫参中 200 总体最优，因而作为默认执行档。

### 什么时候值得尝试这种做法

当任务有可听、可看或可执行的客观依据，能让 critic 核对推理引用的证据，而不只是看措辞是否顺耳时，这种做法值得尝试。音频里录音本身就是依据，critic 能否决编造的声事件，这是它相对纯文本裁判的优势。如果裁判听不到推理所谈的对象，过程奖励会退化成表面 plausibility 检查，递归的意义就弱了。

可以带走的判断是：在本文的底座、数据和协议下，结果奖励之上加一个能听录音的自我比较，能拉开同分路径，尤其在声音、语音和多音频这类依赖细节与顺序的分支上；让裁判随执行者周期性更新，能在后半程保持住对冻结裁判的领先。但这仍是初步证据，不是通用定律，音乐域的反复和零点几分的差距提醒我们，是否刷新、用什么参考、周期取多大，都要按新任务重做消融才能定。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.36578v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-29/)
