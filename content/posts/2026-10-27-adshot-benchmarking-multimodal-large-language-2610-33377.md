---
title: "AdShot: Benchmarking Multimodal Large Language Models for Video Advertisement Clipping"
date: 2026-10-27
draft: false
tags: [视频摘要与片段选择, 基准设计, 基准测试, 数据集]
categories: [论文速递]
description: "AdShot 用 823 对 30 秒到 15 秒的真实广告考多模态大模型选镜头，最强 F1 仅 0.676 且时长误差常超 5 秒，架构与音频比参数规模更关键并伴随重信息轻行动的内容偏好。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.33377"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "广告剪辑考什么：AdShot 如何测多模态大模型的选镜头能力"
paper_digest_original_title: "AdShot: Benchmarking Multimodal Large Language Models for Video Advertisement Clipping"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.33377v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.33377v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.33377v1.pdf"
paper_digest_primary_task: "视频摘要与片段选择"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-summarization","label":"视频摘要与片段选择"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "AdShot 用 823 对 30 秒到 15 秒的真实广告考多模态大模型选镜头，最强 F1 仅 0.676 且时长误差常超 5 秒，架构与音频比参数规模更关键并伴随重信息轻行动的内容偏好。"
paper_digest_authors: [{"affiliations":["Northeastern University, Boston, MA 02115, USA"],"name":"Wen Xie"},{"affiliations":["Northeastern University, Boston, MA 02115, USA"],"name":"Om Rastogi"},{"affiliations":["Northeastern University, Boston, MA 02115, USA"],"name":"Sai Siddhartha Vivek Dhir Rangoju"},{"affiliations":["Southern Methodist University, Dallas, TX 75205, USA"],"name":"Gijs Overgoor"},{"affiliations":["Northeastern University, Boston, MA 02115, USA"],"name":"Yakov Bart"},{"affiliations":["Northeastern University, Boston, MA 02115, USA"],"name":"Sarah Ostadabbas"}]
paper_digest_abstract_sha256: "730a8f0afc3f8e13b0c81af46d0f7391d8ddd074d49ba8ebbd420fbca244d927"
paper_digest_sidecars: {"citation.bib":{"sha256":"60e80b1ceba350d06fd3c062f34800e497af36c1838749cc2452a907eeacd81d","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-33377/citation.bib"},"citation.json":{"sha256":"1fbcd2bb703f0940c33e21c19c3c1a791b001aa1a5547a0eaaaed39b1a3c413a","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-33377/citation.json"},"citation.ris":{"sha256":"45b896ba69412a211fa7bfce7355588376056caed3d856717ce06388fc502859","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-33377/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"d6211edb910d7097096c9d6bf0540f15873947782de969b47fa2d1f1d719a1c5","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-33377/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f76a0383c2ed8a8edb05c95041960e98a08c0ccfefcb4d0d6a2b48428ce9fdb1"
paper_digest_api_reader_plan_sha256: "6a02e65a36c0399cace81c46c7782b3d66182ae969928fc37b3c36fbd7d2695e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "059545c5404d2935695fd95cf4ef0b89fab2404e058c598f1b25a2fa48893dec"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "3490e43d4d89af39d940d61e393d2c7f30949275c11e222d9dd3f14cf1908018"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "52fcb76879c7863f12df9106e99d5dbc75fad6b490b8221487113d7d1cc7bc54"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "005ce6d76f7009f79d2f34fcd17695ce0892adfd2cafed069fa6e48f67eb221a"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 广告剪辑考什么：AdShot 如何测多模态大模型的选镜头能力

> 英文题目：*[AdShot: Benchmarking Multimodal Large Language Models for Video Advertisement Clipping](https://arxiv.org/abs/2610.33377v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视频摘要与片段选择](/audio-paper-digest-blog/papers/?concept=task.video-summarization)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Wen Xie：Northeastern University, Boston, MA 02115, USA
- Om Rastogi：Northeastern University, Boston, MA 02115, USA
- Sai Siddhartha Vivek Dhir Rangoju：Northeastern University, Boston, MA 02115, USA
- Gijs Overgoor：Southern Methodist University, Dallas, TX 75205, USA
- Yakov Bart：Northeastern University, Boston, MA 02115, USA
- Sarah Ostadabbas：Northeastern University, Boston, MA 02115, USA

## 📌 核心摘要

读者需要理解的对象是一条30秒广告，它被切成约14个镜头，每个镜头只有1到3秒。困难在于从中挑出总时长14到16秒的镜头子集，既要接近专业剪辑师保留的镜头集合，又要保持产品信息、情绪、形象和行动号召的配比。论文构建了AdShot基准，包含823对30秒源广告和同品牌15秒剪辑版，覆盖194个品牌和17个行业，并标注镜头边界和18个内容属性。评测分三步衔接：先按镜头时序抽取每镜头的中心帧并附上镜头顺序与时长，再连同要求选出约15秒镜头的任务指令一起送入多模态大语言模型；模型据此输出JSON格式的选中镜头编号、总时长和理由；最后将该选中集合与真实投放的15秒版本对照，按集合重叠和时长误差打分，同时检验内容构成保留情况。与只理解视频问答的已有广告基准不同，AdShot直接对照真实投放的剪辑决定，可诊断时长控制和内容取舍能力。在每镜头1帧设置下，Qwen2.5-Omni 7B在音频加视频输入时F1达到0.668，而启发式随机基线F1为0.503，13个纯视频模型的平均时长误差为5.39秒。结论适用于30秒到15秒的美国电视广告式剪辑，对更短版本、重排序和音频连续性尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 广告为什么要剪出不同时长版本

视频广告投放要同时照顾预算、平台规格和观众耐心，同一创意常要做出 30 秒和 15 秒等多个时长版本。论文指出这是人工从长版里挑镜头、再拼成短版的手工过程，耗时且是生产瓶颈。刚入门的读者可以这样理解动机：不是让模型凭空生成广告，而是看它能否复刻剪辑师在真实投放中已经做过的取舍。

这个取舍比一般视频摘要更苛刻。30 秒广告本身就有 10 到 20 个镜头，平均每个镜头只有 1 到 3 秒，信息密度高、切换快。每个镜头还带着目的，可能是讲产品信息、煽动情绪、立品牌形象，或是喊观众下单。模型既要看懂画面和故事，又要在严格时长下保留合理的内容搭配，不能只挑最显眼的片段。

对语音和音频背景的读者而言，这里的难点类似在很短的观测窗里做结构化决策：视觉变化快、每段可用的语音或音乐线索很少，模型必须在镜头级粒度上判断去留，而不是对整条视频打一个笼统的分数。

### 已有评测在考什么，AdShot 补了哪块

通用视频理解评测多考问答、时序定位和长视频推理，例如 Video-MME、MVBench 和 MLVU。广告领域的 VideoAds 和 AdsQA 也主要考对广告内容的理解和问答，能答对不等于会剪。

最接近的是 AdSum，它把广告剪辑形式化为选镜头问题，但用的是在配对数据上训练的 2 流音视频融合模型，且只有二值保留标签，不分析选中镜头的内容属性。另一些生成式做法从长视频或素材直接生成广告，评价的是生成质量而非与专业剪辑的一致性。AdShot 的定位是零样本评测：不微调，直接让多模态大模型做编辑决策，再与品牌实际播出的 15 秒版本比对，在严格时长下看重合度和内容保持。

这种比较的输入和目标与问答类评测不同。问答只需要输出文字答案，而这里要求输出具体的镜头集合，并且集合总时长要受约束，因此理解能力强不自动等于剪辑决策好。

### 选镜头任务的输入、目标和不考什么

输入是一条 30 秒源广告，被切成按时间排序的多个镜头，每个镜头有已知时长，总时长为 30 秒。输出是从中挑一个子集，使总时长落在 14 到 16 秒之间，目标是与剪辑师为 15 秒版本保留的真值集合尽量重合。论文明确范围只考整镜的保留或丢弃，这是剪辑中最耗时的一环。

\[\sum_{i=1}^{n}d_{i}=30.\]

上式说明源广告各镜头时长相加为 30 秒，是任务的总量约束。模型不能切分镜头内部，只能整镜取舍。

\[14\leq\sum_{s_{i}\in S}d_{i}\leq 16,\]

上式是选中子集必须满足的时长窗口，目标是 15 秒，容差上下各 1 秒。论文同时声明不评分的部分：重排、镜头内修剪、转场、调色和混音都不测。抽查显示 50 对中有 45 对完全保留原顺序，所以顺序在剪短版中本来变化就少，但作者仍把顺序和流畅列为未测量，需要不同指标才能考。

理解任务的一个具体例子是斯巴鲁 CrossTrek 广告。下面这张官方示例图展示了从 31 秒源版选镜头拼成 16 秒版本的过程，左侧是品牌频道里的两个版本，右侧是逐镜首帧加编号，读图时重点看长版如何被压缩为短版。

> **看图路径：** 1. 看左侧 0:31 与 0:16 两个版本如何对应同一品牌素材；2. 看右侧红色源序号 1-21 如何覆盖全部 21 个源镜头；3. 注意只有被选中的 11 个镜头才另有蓝色短版顺序号 1-11

[![原论文 Figure 1：Example of the shot selection task: From a 31-sec Subaru ad from YouTube (shots indexed in red on…](https://arxiv.org/html/2610.33377v1/figure1.png)](https://arxiv.org/html/2610.33377v1/figure1.png)

*论文图 1。原论文 Figure 1:：“Example of the shot selection task: From a 31-sec Subaru ad from YouTube (shots indexed in red on the right panel; we show the first frame of each shot for better representation)…”。*

从像素可见，左侧是 YouTube 频道截图并用蓝线和红线标出 0:16 和 0:31 两个视频，右侧 21 个源镜头首帧都有红色源序号 1-21，只有被选入短版的 11 个镜头另有蓝色短版顺序号 1-11。丢弃镜头只有红色，例如 Frame 137 红 7、Frame 313 红 12、Frame 346 红 13、Frame 444 红 16。这说明评价依据是真实播出版本，不是人工临时定的标准答案，模型要复刻的正是从 31 秒到 16 秒为同一 CrossTrek 产品经专业编辑选取排序的取舍关系。

### 评测流水线如何把广告喂给模型

评测时模型拿到 3 类信息：任务指令说明要从 30 秒里选出约 15 秒，镜头顺序和每个镜头的秒数，以及每个镜头的视觉帧。默认设置是每镜取中间 1 帧，也就是 50% 位置的 1 帧，因为镜头平均只有约 2 秒，1 帧已能代表大致内容。音频视觉模型还会额外拿到每镜的音频轨道。

模型要返回结构化结果：选了哪些镜头编号、累计时长，以及每个选择的理由。理由用于可读性，真正打分只看选集与真值集合的重合、时长是否守时，以及内容构成是否走样。

**视频大模型 × 音频视觉模型：** 视频大模型只看关键帧加镜头时长和文字指令做选择；音频视觉模型在此之外还听到每镜的音频轨道，论文用同模型去掉音频的对照来分离音频带来的增益，而不是跨架构直接比大小。

### 内容标签如何刻画广告意图

为了看模型是否保留了剪辑师的内容搭配，论文用 AdNotator 给每个镜头打 18 个二值标签，再归为 4 类。行动类关注是否喊观众行动，例如是否有购买号召、网址、电话、促销和紧迫感；信息类关注是否讲清产品、价格和品牌露出；情感类关注是否调动情绪、讲故事和逗笑；意象类关注视觉听觉刺激和可爱元素。

密度是对一类标签在选中镜头中的平均出现比例，偏好是模型密度减去真值密度。正值表示模型相对剪辑师多选了这类，负值表示少选。这套标签来自约 8000 条广告微调过的模型，人类多数标签一致率为 79.88%，高于人与人之间的 76.43%，另有独立大模型在 18000 个问答上的复核一致率为 81.96%，其中行动类最客观，情感和意象类主观性更大。

**内容特征密度 × 内容偏好：** 内容特征密度指一类广告意图在选中镜头中的平均出现比例，论文用 AdNotator 对每个镜头打 18 个二值标签再按行动、信息、情感、意象四类聚合；内容偏好指模型密度减去剪辑师密度的差，正值是多选该类，负值是少选该类。

### 数据对如何建成，这里没有训练什么

本研究没有训练新的剪辑模型，评测的 15 个模型都是零样本直接调用，解码用贪心保证可复现。所谓构造是指基准数据的配对过程，需要讲清，否则无法判断真值从哪来。

流程分四步。先从 17 个行业的 836 个品牌频道收集约 70 万视频，按标题和时长筛出约 12 万候选。再用 AutoShot 做镜头边界检测，阈值设为 0.1 以抓住细碎切分。然后每镜取 10%、25%、50%、75%、90% 5 帧一起送入 Swin3D 得到 1024 维镜头嵌入，既保留空间也保留镜内变化。最后在同一品牌内用余弦距离的 DBSCAN 聚类，把 15 秒版每镜匹配到 30 秒版视觉最相似的同簇镜头，只有当 15 秒每镜都能找到对应时才保留该对。

下图是官方给出的四步流程示意，读图时沿从左到右看帧如何变成边界、向量、点云和连线，重点区分红蓝两色分别代表的长短版本。

> **看图路径：** 1. 沿从左到右看检测、嵌入、聚类、匹配四步；2. 区分红色 30 秒点与蓝色 15 秒点如何落入同一簇；3. 看最终连线如何定义真值保留集合

[![原论文 Figure 2：Methodological overview of long-short ad pair construction.](https://arxiv.org/html/2610.33377v1/Data_Curation_New.png)](https://arxiv.org/html/2610.33377v1/Data_Curation_New.png)

*论文图 2。原论文 Figure 2:：“Methodological overview of long-short ad pair construction.”。*

从像素可见，最左侧是纵向堆叠的示例帧，第二列标出 30 秒广告的切分框，第三列是 15 秒广告的切分框，中间是红色与蓝色并排的向量条，接着是红蓝散点聚类图，最右侧是两组镜头之间的红色匹配连线。人工抽查 50 对共 401 个镜头判断，自动匹配与人工一致率为 98.2%，且 45 对保留原顺序，这支持了切分与匹配的质量，但单样本仍只对应一个播出版本，等效的另一种剪法会被判错，这是单真值的固有限制。

### 用什么指标看选得准不准

选准用集合指标。把模型选集记为 S，真值记为 S 星，精确率是交集大小除以模型选数，召回率是交集大小除以真值数，F1 是两者调和平均。精确率低对应多选了剪辑师不要的，召回率低对应漏掉了剪辑师要的。

\[\text{Precision}=\frac{|S\cap S^{*}|}{|S|},\quad\text{Recall}=\frac{|S\cap S^{*}|}{|S^{*}|},\quad\text{F1}=\frac{2\cdot\text{Precision}\cdot\text{Recall}}{\text{Precision}+\text{Recall}}.\]

上式把 3 个量的分母和分子讲清了，F1 只看集合重合，不因落在 14 到 16 秒而加分或扣分。守时用选中总时长减 15 秒的误差另算，内容保持用上一节的密度差，正为多选，负为少选。

**精确率 × 召回率 × F1：** 精确率衡量模型选出的镜头里有多少是剪辑师真正保留的，选多选错会拉低它；召回率衡量剪辑师保留的镜头里有多少被模型找回，漏选会拉低它；F1 是两者的调和平均，用来综合看集合重合度，三者都不奖励时长落在 14 到 16 秒，只是纯集合比较。

### 模型输入输出如何组织，基线为何重要

论文测了 13 个纯视频模型和 2 个音频视觉模型，覆盖 8 个系列，参数从 7B 到 72B。纯视频包括 LLaVA-OneVision、Qwen2.5-VL、Qwen3-VL、InternVL2.5、InternVL3.5、Aria、MiniCPM-V 和 Molmo2，音频视觉包括 Qwen2.5-Omni 和 MiniCPM-o 2.6。选择理由是覆盖单多图理解、长视频处理、版本与规模对比、混合专家架构、低算力场景和细粒度定位等不同能力。

基线是一个无信息随机策略：先均匀随机定一个保留数量，再均匀随机挑相应镜头，不看时长、不看内容。它的作用是定出瞎选的分数地板，任何真正利用视觉语义或时长的模型都应明显超过它。论文在 823 对上跑 20 个随机种子，方差很小，说明地板是稳定的。

下图是官方评测流水线，读图时先看左侧镜头堆叠如何变为关键帧，再看中间输入框里的三块内容如何进入上方的大模型。

> **看图路径：** 1. 看关键帧加提示加元数据三路输入如何进入模型；2. 看模型输出的选择加理由如何进入两类评价；3. 注意评价分为选准与内容两条支路

[![原论文 Figure 4：MLLM evaluation pipeline for ad shot selection.](https://arxiv.org/html/2610.33377v1/Evaluation.png)](https://arxiv.org/html/2610.33377v1/Evaluation.png)

*论文图 3。原论文 Figure 4:：“MLLM evaluation pipeline for ad shot selection.”。*

从像素可见，左侧 Shots 框里是纵向堆叠的关键帧并标有 Key Frames 箭头，中间 Model Input 框包含 Image Input、Prompt 和 Shot Metadata 三块，顶部绿色 MLLM 框向下输出 Shot Selections 和 Reasoning，最下方是 Shot Selection Evaluation 与 Shot Content Analysis 两个评估框。这解释了为什么同一输出要同时接受准确性、时长和内容 3 套检查。

**平均时长误差 × 欠选 × 超选：** 平均时长误差指选中镜头总时长与 15 秒目标差值的绝对值平均，越小越守时；欠选指选得太少导致总时长不足 14 秒，超选指选得太多超过 16 秒，论文用条件平均区分两种方向的误差来源。

### 数据集长什么样：规模与镜头节奏

要判断结论是否站得住，先要看数据是否足够大、足够多样。这里比较的是基准的采集规模与镜头结构，覆盖越广且全部为品牌官方播出的真实长短配对，结论的外推基础越好。

| 项目 | 规模与结构 |
| --- | --- |
| 广告对与视频数 | 823 对共 1646 条视频 |
| 品牌与行业覆盖 | 194 品牌跨 17 行业 |
| 30 秒版平均镜头数 | 平均 14 镜 |
| 15 秒版平均镜头数 | 平均 8 镜 |

上表把总量、覆盖面和每条广告的平均镜头数放在一起，可以看出剪辑师通常保留约一半镜头，而不是简单截断。行业分布并不均匀，法律与政府占比超过 28%，而电子与服装只有极少数样本，因此小行业的分数波动大，不能当作领域结论来读。但代表性模型的分行业 F1 在除最小两行业外落在较窄区间，大行业分数贴近平均，所以总量结论不是被某一个行业带偏的。

补充一个节奏细节：30 秒与 15 秒版本的平均单镜时长接近，说明剪辑师保留了原有的时间 pacing，而不是靠加速或大量碎切硬凑时长，这也让整镜取舍成为合理的考查粒度。

### 谁选得更准：架构比规模更重要

这里比较的是相同零样本条件下哪个模型与剪辑师的重合度更高，公平条件是默认每镜 1 帧加贪心解码，指标方向是精确率、召回率和 F1 越高越好。

| 模型 | 精确率 | 召回率 | F1 |
| --- | --- | --- | --- |
| Aria 25.3B | 0.576 | 0.881 | 0.676 |
| MiniCPM-o 2.6 8B | 0.581 | 0.841 | 0.669 |
| Qwen2.5-Omni 7B | 0.615 | 0.838 | 0.668 |
| Qwen3-VL 32B | 0.636 | 0.618 | 0.611 |
| 随机基线 | 0.569 | 0.541 | 0.503 |

从结果看，最高 F1 来自 Aria，它靠极高的召回率实现，但精确率偏低，实质是偏向多选的策略。两个 7 到 8B 的音频视觉模型以约三分之一的参数接近这一水平，且精确率更好。Qwen3-VL 32B 的精确率最好，但 F1 次之。15 个模型中有 9 个超过随机基线、6 个低于基线，低于基线的共同特征是精确率不低但召回率远低，属于保守少选，而剪辑师本就保留约一半镜头，少选会被 F1 重罚。这说明能力是模型相关的，不是大模型通用属性，规模也不能保证胜出。

下图是官方的内容偏好图，读图时先看绿色信息柱是否普遍高于零线，再看蓝色与紫色是否普遍低于零线。

> **看图路径：** 1. 先看绿色信息柱是否在所有模型都高于零线；2. 再看蓝色行动与紫色意象柱是否都在零线以下；3. 对比橙色情感柱的高度是否小于绿色

[![原论文 Figure 5：Content Feature Divergence.](https://arxiv.org/html/2610.33377v1/figures/contentanalysis.png)](https://arxiv.org/html/2610.33377v1/figures/contentanalysis.png)

*论文图 4。原论文 Figure 5:：“Content Feature Divergence. MLLMs over-select emotion- and information-focused shots while under-selecting action- and imagery-driven content, indicating systematic biases…”。*

从像素可见，横轴是 13 个纯视频模型，纵轴是密度差，每个模型有蓝、橙、绿、紫四根柱子，绿色信息柱全部明显为正，橙色情感柱小幅为正，蓝色行动和紫色意象柱全部为负。这意味着模型系统性多选信息和情感、少选行动和意象，而且大模型也不能消除这种错位，选得准与内容保真可以同时偏离。

### 时长守得住吗：误差有多大，偏向哪边

这里比较的是模型能否把总时长控制在 14 到 16 秒，公平条件是同一 823 对与同一 15 秒目标，指标方向是平均时长误差越小越好，还要区分欠选与超选的分量。

| 对象 | 平均时长误差 | 误差跨度与说明 |
| --- | --- | --- |
| 2 个音频视觉模型平均 | 6.09s | 高召回伴随更长选择 |
| 超选与欠选的实际含义 | 超选更易修剪 | 欠选可能丢失关键内容 |

总体误差相对 2 秒容差而言很大，超选略多于欠选。精确率高于召回率的模型往往欠选，召回率高于精确率的模型往往超选，F1 与误差的相关系数为 0.78，但两者计算独立，相关来自选得多既提高重合又拉长时长。因此选准与守时是两个需要同时满足的维度，只顾一头都不算可用，实际部署必须另加时长控制器。

分目标镜头数看，多数模型在目标为 6 到 10 镜时 F1 相对最好，镜头太少时精确选择更难，镜头太多时时长控制更难，这与广告本身的密度和剪辑师保留约一半镜头的习惯是一致的。

### 音频和帧数多了有没有用

这里比较的是增益是否真正来自音频和更密的时间采样。音频对照是同模型、同数据、只开关音频通道，帧数对照是每镜 1 帧、3 帧和 5 帧，指标仍是 F1 越高越好、时长误差越小越好。

| 条件变化 | F1 变化 | 召回率变化 |
| --- | --- | --- |
| 每镜 3 或 5 帧 | 部分模型小升 | 内容判断改善但时长更难 |

表中前两行是去掉音频后的回落幅度，反过来读就是音频带来的提升：MiniCPM-o 提升 0.025，Qwen2.5-Omni 提升 0.083，主要都由召回率驱动。17 个行业中音频在 16 个行业提高召回、在 14 个行业提高 F1，说明不是个别领域偶然。但音频同时拉长选择，加重超选。更密采样也类似，Molmo2 和 Qwen2.5-VL 7B 等 F1 有改善，MiniCPM 等无益甚至变差，LLaVA-OneVision 7B 是少数误差改善的例外。总体是内容选得更好，但时间控制更难。

对音频背景的读者而言，这个结果很直观：配乐、口播和品牌音效提示了哪些镜头是叙事锚点，去掉后模型更容易漏选，因此召回率掉得最多，但多找回镜头自然会让总时长变长。

### 结论在什么条件下才成立

第一，单真值限制。每对只有一个播出版本，等效的另一种合理剪法会被判错，多版本稀少且相似不能代替对剪辑师间差异的测量。若要估计上限，需要请专业剪辑师独立重剪。

第二，标签不确定性。内容结论依赖 AdNotator，情感和意象类主观性大、分歧多，那两类的偏好估计误差更大。独立大模型复核一致率行动类达 93.96%，情感和意象类仅 76.44% 和 70.63%，正好说明主观类别更不可靠。

第三，范围未覆盖。只考 30 秒到 15 秒，不含 15 秒到 10 秒或 6 秒微广告；只考选集，不考顺序、流畅和音频连续性。行业不均和仅英文美国市场偏斜也限制外推，小行业分数波动大，不宜当领域结论。

**镜头 × 选镜头：** 镜头指一次连续拍摄得到的片段，是剪辑时最小的保留或删除单位；选镜头指从 30 秒源广告的全部镜头里挑出一部分拼成 15 秒版本，AdShot 只考整镜保留或丢弃的决策，不考重排、镜头内修剪、转场和混音。

### 想复现或试用，第一步做什么

先按论文附录提示词组织输入：系统指令讲清约 15 秒目标，用户部分给出镜头数、各镜头秒数和按镜头分组的关键帧，输出限定为选中编号、总时长和理由的 JSON，且总时长必须等于所选时长之和并落在 14 到 16 秒。每镜默认取 50% 位置 1 帧，音频视觉模型再加对应音频，解码用贪心。

评价复算三件套：按交集算精确率、召回率和 F1，按总时长减 15 秒算符号误差再取绝对平均并分欠超选统计，按 18 标签聚合 4 类密度再做模型减真值的差。硬件上论文用 A100 和 H100 跑官方实现，帧数提到 3 或 5 会明显增加输入长度，部分 InternVL 模型因上下文限制无法跑 5 帧。

需要分清三件事：代码开源、权重可下载、系统可运行是不同主张。本文未提供来源验证记录，不能写作者资源已公开；按论文说法基准含视频 ID、镜头边界、匹配关系、内容标签及 30 秒源广告的派生关键帧和 16 kHz 单声道音频，完整视频需自行经 YouTube 数据接口获取并遵守服务条款。

### 什么时候值得参考，还缺哪项验证

当任务是从已有长广告压缩出短版、且有明确时长窗口和品牌内容要求时，AdShot 的结论值得参考：优先看架构与音频配置而非只堆参数，注意目标保留数在 6 到 10 镜时多数模型表现相对最好，部署时必须另加时长控制器，因为选准的模型也常超选。

复现后还缺两项验证。一是领域微调能否抬起那 6 个低于随机基线的保守模型，论文把这列为最直接的后续；二是内容自适应选帧和内容感知音频处理是否能在不加重超选的前提下提 F1，目前证据显示原始音频已有增益但代价是时长。最终判断是当前模型能大幅减少人工初选工作，但离替代专业剪辑仍有距离，尤其在时长控制和行动意象类内容的保留上。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.33377v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
