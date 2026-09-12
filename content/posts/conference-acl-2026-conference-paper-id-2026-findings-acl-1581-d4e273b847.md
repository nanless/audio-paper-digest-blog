---
title: "CORD: Bridging the Audio–Text Reasoning Gap via Weighted On-policy Cross-modal Distillation"
date: 2026-09-12
draft: false
description: "针对语音条件推理弱于语义等价文本条件推理的问题，CORD 用同一模型内文本分支做教师并沿音频采样轨迹做标记级加权反向 KL 与序列级裁判奖励 GRPO 优化，在仅 8 万条合成数学训练样本下把两 backbone 的平均模态差距缩小约四成，但训练域集中数学且未报告延迟与人工误判率等代价。"
tags: ["知识蒸馏", "强化学习", "音频大模型", "音频问答"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.1581"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.1581/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.1581.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e6495700772904c990e60909944e6eb1e9b409a66e502547b2cd7b51030d79e1"
paper_digest_api_reader_plan_sha256: "e9d3455fdd4549ecd59cfe01889cb5718ce3763bb9a14937b98381778eaf113b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9188cddf07ee9e927faa9eeb5bfbcb2c141ede9a65dbd0e3ce9d126ddf6b40e0"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a2fe4974930bd4f818b39b57765cf31c558bc76a8fd1f671e09b0fc45d17608e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9e1e8f8a90af80dbd39e95c412e05769cf5081e40f76828b7af8d2b95470440b"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f2ddcf04b5b98ebec3583530a2dc1042d138bea079eda2bb6e16228517bb92b5"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 在自己的语音轨迹上学文本推理：CORD 的加权在策略跨模态自蒸馏

> 英文题目：*CORD: Bridging the Audio–Text Reasoning Gap via Weighted On-policy Cross-modal Distillation*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.1581`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1581/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1581.pdf)

标签：#知识蒸馏 #强化学习 #音频大模型 #音频问答

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Hu Jing：机构信息未能从会议 PDF 纯文本可靠映射
- Danxiang Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Xianlong Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shuwei He：机构信息未能从会议 PDF 纯文本可靠映射
- Yishu Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Shikun Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Hai-Tao Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Jingzhou HE：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hua Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Haifeng Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务以语义等价的语音问题与文本问题为输入，要求模型输出一致的推理答案，实际难点在于音频语义鸿沟引发的早期语义偏离会沿自回归解码逐词累积，导致音频推理显著弱于文本推理。首先，CORD从当前策略采样音频推理轨迹，在同一前缀下并行计算音频条件分布与文本条件分布，并以反向KL度量每步跨模态分歧，其输出的分歧序列直接进入下一步筛选。接着，模型对分歧最大的关键词元施加重要性加权并对早期位置施加序列衰减加权，做词元级纠偏以阻断早期误差放大，加权后的局部对齐轨迹再接受全局一致性约束。然后，方法对音频输出与文本条件参考答案用裁判模型打二值一致奖励，并以GRPO在组内相对优化提升高奖励轨迹似然，从而兼顾局部语义准确与整轨推理一致。与依赖教师轨迹的离策略蒸馏不同，该机制全程在学生真实推理状态上施教，避免了训练推理状态错配并保留非语音声学能力。在MMSU基准推理任务下，CORD在Qwen2-Audio-7B-Instruct上的准确率为38.06，高于基线模型的36.04。该结论适用边界受限于数学合成语音训练与问答推理评测，向真实口语噪声与视觉场景的外推尚未验证。原文未披露训练、推理或部署成本

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么直接训练还不够？

本文的输入是语义等价的 1 对问题：一段语音问题与对应的文本问题，目标是让大型音频语言模型在听到语音时的推理与回答，接近它在读到同样文字时的推理与回答。必须保留的信息包括基座模型、训练样本量与合成方式、评价基准、文本基线准确率、音频准确率与模态差距的定义，以及标记级与序列级两个优化分支的具体计算条件。输出是 1 篇能复述方法的解读，而不是复现代码本身。

对刚进入语音与语言交叉方向的研究生而言，第一个容易误解的点是把语音理解等同于语音转文字后再推理。级联做法确实能保留文本推理能力，但会丢掉说话人与副语言等声音信息，而端到端大音频语言模型希望直接从声学表征推理。论文的起点是这类端到端模型虽然建立在文本大模型之上并加了音频编码器与对齐模块，却在相同语义下语音条件明显弱于文本条件，尤其在数据受限时差距更大。这说明仅靠音频文本交错数据的隐式对齐，并没有真正把声学与语义统一到同一推理策略。

因此学习依赖的第一步是确认任务不是识别率，而是推理一致性。评价用的不是字错率，而是知识问答与数学推理在语音输入下的准确率，以及它与文本输入下准确率的差值。缩小这个差值时不能以破坏音乐、声音等通用音频能力为代价，这也是后文要检查保持性的原因。

### 已有路线在同输入同目标下做了什么，还缺什么？

与 CORD 同输入同目标的工作大致有 3 类。第一类是监督微调，用大量标注语音数据直接训练语音问答，依赖高质量人工标注，扩展到新任务与新领域成本高。第二类是基于外部文本教师的知识蒸馏，让语音学生模仿教师分布或教师生成的文本轨迹，教师与学生可能是不同模型。第 3 类是表征级对齐或大规模合成语音数据增强，希望把音频表征拉近文本表征。

论文指出后两类在同运行阶段存在可核对的短板。外部教师蒸馏多为离策略监督，即监督信号算在教师的文本生成轨迹上，而不是学生真实的语音条件推理状态上，训练与推理状态分布不一致，难以纠正音频特有的累积错误。常规 KL 蒸馏对所有词一视同仁，没有强调驱动跨模态错位的语义关键标记，也缺少对整条推理轨迹的全局约束。合成数据路线在部分工作中依赖大规模私有数据，可复现性受限。

CORD 的定位是同一模型内的在策略自蒸馏，不引入外部教师结构，用模型内部文本分支做教师，并沿学生真实音频轨迹计算对齐目标，同时做标记级与序列级约束。这与压缩大模型的在策略蒸馏文献有思想联系，但输入从纯文本变为语义等价的语音文本对，监督来源从外部教师变为内部文本行为。

### 模态差距如何定义，沿什么轨迹度量？

论文把问题形式化为给定语义等价的语音输入与文本输入，模型分别诱导出自回归输出分布。经验现象是即使语义相同，两个分布的行为也会分叉。CORD 要约束的不是边缘输出分布的平均相似，而是从当前语音条件策略中采样出的推理轨迹在每个前缀状态下的行为。

具体做法是先从语音条件策略采样一条在策略解码轨迹，在每个步骤给定相同前缀，分别计算语音条件与文本条件的下一词分布，再用反向 KL 散度量化该状态的分歧。反向 KL 相对更关注文本条件下高概率词，要求语音策略恢复文本分支的关键推理决策。教学例子是：若把语音问题看作 1 次考试听力，把文本问题看作同一张纸质试卷，差距不是听不清某个字，而是听力条件下解题中间步骤更早走偏。例子只用于理解任务，不代表论文报告过该例子的数值。

差距的评价口径在主结果表中定义为文本基线准确率减去某方法音频准确率，文本基线固定为原始基座模型的文本条件准确率，平均差距是多个基准差距的均值。相对缩小比例是基座初始差距与方法差距之差除以初始差距，百分点变化与相对百分比是不同量，后文比较时需要区分。

### CORD 让一个样本走完怎样的对齐流程？

先沿一个样本走完全流程。文本问题一方面直接作为教师分支的输入，另一方面经语音合成得到语义等价的语音问题，再经语音编码器进入策略分支。策略模型从语音条件采样出一条或一组推理轨迹，例如包含中间推理与最终选项的文本。同一前缀下的语音条件分布与文本条件分布在每一步比较，得到标记级加权反向 KL；整条语音轨迹再与文本参考回答一起送入裁判模型，得到序列级一致性奖励并用组相对策略优化更新策略。两个损失相加后回传，只更新策略侧，教师侧作为内部参考。

下图是全文的方法全景，左右两部分分别对应主干流程与两个损失分支，建议按输入到损失再到回传的顺序阅读。

> **看图路径：** 1. 先从右上文本问题经合成语音到语音编码器再到策略模型的左侧主路径走一遍；2. 再看同一段音频轨迹文本如何同时送入策略模型与教师模型做输入；3. 对比右上加权标记级分支与右下裁判序列级分支的损失如何汇成整体损失回传；4. 注意教师分支标注的冷启动与冻结含义与策略分支可更新含义的区别

[![原论文 Figure 1：The overall framework of CORD. Given semantically equivalent audio and text inputs, CORD performs…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/83c70866d4b2/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/83c70866d4b2/figure-1.png)

*论文图 1。原论文 Figure 1：“The overall framework of CORD. Given semantically equivalent audio and text inputs, CORD performs on-policy cross-modal self-distillation within a single model.”。*

从像素可见，左大框顶部是文本问题经合成到语音问题的箭头，左侧语音编码器向下接入粉色策略模型，中间黄色便签样式的轨迹文本同时作为两个分支的输入条件，右侧蓝色教师模型接收文本问题。下方粉色与蓝色小方格分别表示策略与教师的对数概率，汇入整体损失。右上小框展示两种权重条带与加权 KL 相乘的形式，右下小框展示多条轨迹经裁判模型得到多个奖励再形成序列损失的形式。图中火焰与雪花图标对应可更新与参考固定的分工，但原文未给出逐层冻结细节时不应自行脑补哪一层被冻结。

**标记级对齐 × 序列级对齐：** 标记级对齐负责每一步词汇分布的细粒度语义偏差修正，强调分歧大和位置靠前的词；序列级对齐负责整条推理轨迹的全局答案一致性，用裁判模型判断语音回答与文本回答是否语义一致并以 GRPO 优化。组合意义是局部对齐仍可能得到全局错误答案，必须再用轨迹级奖励约束最终推理策略。

### 为什么只对齐少数靠前的关键标记？

论文先在 MMSU 基准上统计了音频轨迹每一步的反向 KL。分布呈明显重尾，大多数标记分歧很小，少数标记分歧很大，80 百分位对应的分歧仅为 0.23 左右。散点显示高分歧状态更集中在解码早期，相关系数为负，早期的错误更容易引发后续级联失败。词云显示高 KL 区域富集推理连接词与选项标记，低 KL 区域多为常见功能词与背景词。若对所有标记均匀平均，整体损失会被大量低 KL 词稀释，恰好削弱了对语义错位主导位置的修正。

为理解该统计结果，需要同时看分布形态与语义内容，下图左侧是定量分布，右侧是定性词云。

> **看图路径：** 1. 先读左上直方图横轴反向 KL 与纵轴对数计数，确认 80 百分位虚线位置；2. 再读左下散点横轴生成位置与纵轴 KL，观察分箱均值随位置的变化趋势；3. 对比右上高 KL 词云与右下低 KL 词云中放大的核心词分别属于哪类词

[![原论文 Figure 2：Statistical and Semantic Analysis of Token-Level Reverse KL Divergence.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/83c70866d4b2/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/83c70866d4b2/figure-2.png)

*论文图 2。原论文 Figure 2：“Statistical and Semantic Analysis of Token-Level Reverse KL Divergence.”。*

从像素可见，左上直方图纵轴为对数计数，横轴为反向 KL，左侧柱子极高并向右拖出长尾，红色虚线标出 80 百分位。左下散点横轴为生成位置，纵轴为反向 KL，左侧点密集且向上分散，红色分箱均值线随位置下降。右上高 KL 词云中放大的词包括推理词与选项字母，右下低 KL 词云中放大的词多为常见冠词介词与背景词。读图时应注意纵轴是对数计数与原始 KL 值，不能把柱子高度直接读作准确率，也不能把个别极端大 KL 点当作整体水平。

基于上述观察，标记级目标引入两种权重的乘积。前 K 个最大分歧标记获得大于 1 的重要性放大，其余保持为 1，实验中 K 固定为 20。位置权重从靠前步骤的较大值线性衰减到序列末尾的 1，实验默认强度为 2。最终标记损失是在语音轨迹期望下对加权 KL 按步求和。该设计放大量少但关键的早期语义偏离，同时保留对长尾信息的最低限度覆盖。

**在策略蒸馏 × 离策略蒸馏：** 在策略蒸馏负责在学生当前语音条件采样出的前缀和轨迹上计算监督，直接纠正推理中真实遇到的偏离；离策略蒸馏负责在教师文本轨迹上提供监督，复用方便但与学生推理状态分布不一致。CORD 选择前者搭配内部教师，是因为音频错误会在自回归中累积，只有在音频轨迹状态上对齐才能暴露并修正级联错误。

**反向 KL 散度 × 前向 KL 散度：** 反向 KL 散度负责让语音条件分布去覆盖文本条件分布的高概率词，突出恢复关键推理决策；前向 KL 散度负责让学生覆盖教师分布的全部支撑，平均化倾向更强。二者搭配的理由是跨模态分歧呈重尾分布，均匀的前向约束会被大量已对齐词稀释，CORD 因此在音频轨迹上用加权反向 KL 做局部纠偏。

**重要性加权 × 位置衰减加权：** 重要性加权负责选出反向 KL 最大的前 K 个标记并放大其损失，避免低分歧词主导梯度；位置衰减加权负责给靠前步骤更高权重并随位置线性衰减，因为早期语义决策一旦走偏后续难以挽回。二者相乘得到最终标记权重，共同把优化集中到又关键又靠前的推理状态。

### 序列级裁判奖励如何约束整条轨迹？

标记级只能保证每一步局部像文本分支，但局部都像仍可能拼出全局不一致的答案。序列级分支为此提供全局监督。对每个语音输入，采样一条语音输出与一条文本参考输出，用裁判模型直接判断两者在答案层面是否语义一致，输出 0 或 1 奖励。该奖励不比较逐词相似，只看最终推理结论是否对齐。

优化采用组相对策略优化。对同一语音输入从当前策略采样一组轨迹，每条得到裁判奖励后减去组内平均奖励得到相对优势，再按优势加权提高对应轨迹的对数似然。论文按相关实现省略了显式 KL 惩罚项。关键是该分支完全在策略采样状态上计算，保证全局监督作用于音频推理真实遇到的状态，而不是教师轨迹状态。

**组相对策略优化 × 裁判奖励：** 裁判奖励负责对每条语音条件输出给出 0 或 1 的全局语义一致性判断，对照的是同语义文本输入的参考回答；组相对策略优化负责对同一语音输入采样一组轨迹，用组内平均奖励算相对优势并提高高优势轨迹的似然。搭配原因是二值全局奖励无法逐词求导，需要用组内比较的策略梯度形式把全局监督传回音频推理策略。

### 训练数据、采样与优化条件是怎样的？

训练数据由 80,000 条 NuminaMath 数学指令构成，文本经 Kokoro 语音合成得到语义等价的语音文本对。训练只用数学领域合成数据，评价则包含通用知识与数学推理，这种错位是后文检验跨域泛化的前提。原文未声明代码与数据链接当前可用，本次也没有收到可验证的开源资源状态，因此不得声称代码模型或数据已公开。

采样与优化条件按原文交代。CORD 与前向 KL 基线每次更新每提示采样一条在策略轨迹，GRPO 分支每提示采样一组 4 条轨迹，最大生成长度为 200。优化器为 AdamW，学习率为 3 乘以 10 的负 5 次方，训练计划与解码配置在各方法间保持一致。CORD 与前向 KL 采样温度为 1.0，GRPO 为 1.5 以鼓励轨迹多样性。标记级重要性与位置强度默认都取 2。原文没有报告硬件型号、总步数对应的 wall-clock 时间与显存占用，也没有说明音频编码器与语言模型各部分是否冻结，因此复现时应把这些记为缺项而不是从模型名推定。

基线包含原始指令微调模型、监督微调与前向 KL 蒸馏。监督微调最大化教师轨迹在语音条件下的似然，前向 KL 在教师轨迹上最小化文本条件与语音条件的分布差异。两者都使用教师轨迹，属于离策略监督，与 CORD 的在策略监督形成对照。裁判模型是蒸馏前沿模型在大量文本指令样本上评价输出得到的模型，自评准确率超过 99%，但原文未给出独立人工验证的误判率，使用时应理解为自动裁判而非人评。

### 在什么基准、指标与基线下比较？

评价基准按问题组织。知识问答用 VoiceBench 中的 MMSU 与 OpenBookQA，数学推理用 GSM8K，声音与副语言等通用音频能力用 MMAU 并细分为音乐、声音与语音 3 类。指标方向是准确率越高越好，模态差距越小越好。比较的公平条件是同一基座、同一训练数据与同一解码配置下比较音频条件准确率，文本基线固定为基座原始文本准确率。

两个基座分别是 Qwen2-Audio-7B-Instruct 与 Step-Audio2-mini。Qwen2 的文本基线在 3 个主基准上分别为 44.46、68.79 与 40.47，Step 的文本基线分别为 60.47、80.00 与 60.47。这些数字是后文计算差距的分母基准，不能与音频准确率混为同一列含义。MMAU 检查的是对齐推理时是否损害非语音声学模式，属于保持性检验而非主推理目标。

需要提醒的是训练域与评价域并不一致。训练只见数学合成语音，评价包含通用知识，这种设置下通用基准提升更能支持学到跨模态对齐能力的判断，而不是记住数学答案。但这仍是有限解释，因为未控制问题难度与文本教师强度等混杂因素，不能直接断言因果。

### 主结果缩小了多少差距，代价是什么？

要回答的比较问题是：在固定文本基线与一致训练条件下，CORD、前向 KL 与监督微调谁的音频准确率更高、模态差距更小，以及通用音频能力是否被损害。指标方向是音频准确率越高越好，差距均值越小越好。

| across multiple benchmarks using two representa- + SFT | 56.29 | 64.44 | 51.51 | 57.39 |
| --- | --- | --- | --- | --- |
| tive LALMs, Qwen2-Audio-7B-Instruct and Step- + Forward KL | 55.99 | 61.70 | 53.01 | 56.90 |
| Audio2-mini. The results show that CORD substan- + CORD (ours) | 60.18 | 64.44 | 55.42 | 60.01 |

上表是原文 MMAU 细粒度结果的直接选择，行是不同方法，列是音乐、声音、语音与平均。表后解释需要同时看收益与代价。前向 KL 在音乐与声音上相对基座下降约 3 个点，表明常规蒸馏可能带来对非语音声学模式的遗忘。CORD 在声音上与基座持平，在音乐上略有提升，平均与基座接近，支持轨迹级在策略对齐对辅助音频模态更稳定的判断。但该表也显示 CORD 在语音子集上并未超过基座，说明保持不等于全面提升，不应把总体持平推广为每组都变好。

主推理差距的数字需要用原文连续句覆盖的整理表来核对，因为原主表矩阵在本次结构化证据中未能以可安全选择的宽表形式给出。以下整理表只使用原文明确报告的文本基线与相对缩小比例，不自行计算音频准确率。

| 条件 | 指标 | 基座文本基线 | 本方法报告 | 比较对象 |
| --- | --- | --- | --- | --- |
| Qwen2 音频推理 | 文本基线准确率 | 44.46、68.79、40.47 | 平均差距缩小 41.6% | 前向 KL 缩小 28.5% |
| Step 音频推理 | 文本基线准确率 | 60.47、80.00、60.47 | 平均差距缩小 44.8% | 前向 KL 缩小 10.5% |

表后解释应回到原文报告。论文报告 CORD 在 Qwen2 上平均差距缩小 41.6%，在 Step 上缩小 44.8%，均明显大于前向 KL 的 28.5% 与 10.5%。论文还报告尽管训练只用数学数据，通用基准 MMSU 与 OBQA 的改善反而比数学集 GSM8K 更明显，支持学到可迁移对齐能力的有限解释。未胜出项同样重要：监督微调在 Step 的 GSM8K 上反而使差距大幅扩大，前向 KL 在部分基准上差距也有增加，说明离策略监督并不稳定。限制是这些都是自动指标下的准确率比较，未测量推理延迟、采样成本与裁判误判对结论的影响。

### 去掉在策略约束与加权后会发生什么？

消融要验证的不是单个数字，而是训练稳定性与细粒度加权的必要性。论文先只用序列级 GRPO 做强化学习，500 步时有提升，延长到 1000 步时在 3 个基准上全面下滑，GSM8K 从 35.59 掉到 19.89 甚至低于基座，呈现模型崩溃。加入在策略蒸馏后训练可稳定到 3000 步且 GSM8K 回到 36.12，再加入标记级重要性加权后得到完整 CORD 的最优结果。这一增量顺序支持在策略锚定是稳定器、加权是精修器的解释。

加权强度的敏感性分析把重要性强度与位置强度绑为同一值以减少搜索空间，相对基线均匀优化报告相对提升。下图展示了该敏感性曲线的像素细节。

> **看图路径：** 1. 先确认横轴加权强度与纵轴相对提升的定义，基线为加权等于 1 的均匀优化；2. 比较三条任务曲线在 1 到 2 区间的上升斜率差异；3. 观察 2 之后曲线是持平还是回落，判断过强调稀疏标记的代价

[![原论文 Figure 3：Sensitivity analysis of the weighting intensity α and β.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/83c70866d4b2/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/83c70866d4b2/figure-3.png)

*论文图 3。原论文 Figure 3：“Sensitivity analysis of the weighting intensity α and β.”。*

从像素可见，横轴为加权强度，纵轴为相对提升分数，3 条曲线分别对应 MMSU、OBQA 与 GSM8K。曲线从 1 出发上升，在 2 处附近达到峰值或平台，虚线标出最优位置，2.5 之后 MMSU 略有回落而另两条基本持平。论文据此把默认值取为 2。过小的值退化为均匀 KL，过大的值会过度压制长尾语义信息。需要注意纵轴是相对改变量而非原始准确率，不能把曲线高度直接读作准确率高低，也不能把单点最优推广为所有任务与所有基座的最优。

| 阶段 | 步数 | MMSU 准确率 | OBQA 准确率 | GSM8K 准确率 |
| --- | --- | --- | --- | --- |
| 仅序列级 GRPO | 500 | 36.92 | 50.54 | 35.59 |
| 仅序列级 GRPO | 1000 | 27.87 | 36.48 | 19.89 |
| 加在策略蒸馏 | 3000 | 37.41 | 51.20 | 36.12 |
| 完整方法 | 3000 | 38.06 | 52.77 | 36.20 |

上表整理了原文消融阶段的连续报告，列是步数与 3 个基准准确率。表后解释是稳定性证据强于单点提升证据：在策略蒸馏的主要作用是让长训练不崩溃，完整加权在此基础上带来小幅但一致的提升。负结果是纯 GRPO 长训练会崩溃，这恰好说明全局奖励单独使用时不可靠，必须与标记级锚定配合。未评测边界是消融只在 Qwen2 上进行，是否同样适用于 Step 仍待验证。

### 哪些结论还不能下，缺了哪些验证？

论文明确承认的局限有两点。第一，受计算资源限制，训练主要在 80,000 条数学推理合成数据上评估，更大更多样多模态数据下的行为仍是未来工作。第二，实验集中在音频理解基准，对更广的通用视听场景理解的泛化尚未验证。

从复现角度看还有具体缺项。硬件预算与训练时长未报告，推理开销、输出长度与实际延迟分别未讨论，不能承诺 CORD 改善了延迟或成本。裁判模型虽自评超过 99%，但未报告独立人评误判率，不能把自动一致性判断等同于人工语义正确。超参数敏感性只报告了加权强度的绑定搜索，前 K 取值、组大小与温度之外的组合未充分展开。总体趋势不等于每组每步都成立，例如 MMAU 语音子集与部分基线的个别基准就没有随总体变好。

区分证据强度很重要。直接报告的是准确率与差距数字，有限解释的是跨域泛化与稳定性机制，未验证推测是更强文本教师必然带来更强音频推理。Step 比 Qwen2 获益更大的观察支持后者，但这仍是相关性而非因果，因为两个基座的音频编码与指令调优本身也不同。

### 要复现应先固定什么，再补什么？

复现先固定信息条件。数据侧固定 80,000 条数学文本及其合成语音的配对关系、划分与采样方式，保证语音与文本语义等价。模型侧固定两个基座的原始版本与文本基线准确率，评价时文本基线不应随方法改变。训练侧固定每提示采样数、最大长度 200、AdamW 学习率、采样温度与加权强度默认 2、前 K 为 20。评价侧固定 MMSU、OBQA、GSM8K 与 MMAU 三子集的指标与聚合口径，注意百分点与相对百分比的区别。

再按依赖顺序实施。先复现基座的文本与音频准确率并算出初始差距，再复现监督微调与前向 KL 两个可运行基线，然后实现在策略采样下的加权反向 KL，最后加入裁判奖励的组采样 GRPO 并把两项损失相加。训练资源、推理开销与输出帧率应分别记录，不能用总体准确率代替成本结论。

还需补的验证包括裁判模型在抽样上的独立人工核查、消融在第二个基座上的重复、更大非数学训练数据的扩展，以及 MMAU 之外通用音频任务的保持性检验。资源状态方面，本次未发现可验证的公开代码模型或数据链接，因此应按不可用处理，先做方法复述与小规模闭环验证，而不是假设可直接下载运行。

### 何时值得尝试 CORD，何时不必？

当任务满足 3 个条件时值得尝试：有语义等价的语音文本对或可用合成得到，模型内部文本推理明显强于语音推理，且错误集中在早期关键推理词而非单纯听不清。此时沿音频轨迹的加权反向 KL 能针对性纠偏，再用少量组采样的全局裁判奖励约束最终答案，数据效率相对离策略蒸馏更高。

当目标只是提升转写准确率、文本教师本身不强，或通用非语音音频能力是核心约束时，不必直接照搬。纯序列奖励长训练可能不稳定，均匀 KL 可能稀释关键信号并损害声音与音乐能力，需要保留在策略锚定与保持性检查。论文特有的误解是把通用基准提升当作学到更多知识，实际更可能是对齐了已有的文本推理策略，训练域与评价域错位下的提升应理解为策略迁移而非知识新增。

收束一句话：CORD 的价值在于把监督放在语音推理真实走过的状态上，并把有限的梯度预算花在又早又关键的词与整条轨迹的一致性上，但其结论目前只在有限数学训练与自动指标下成立，延迟成本与更广场景仍需补验证。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=3)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=4)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-6.png)

区域 6 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-7.png)

区域 7 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=5)

[![原文数学表达区域 8，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-8.png)

区域 8 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=6)

[![原文数学表达区域 9，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-9.png)

区域 9 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=6)

[![原文数学表达区域 10，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/8462d9069a07/figure-10.png)

区域 10 · [查看论文原页](https://aclanthology.org/2026.findings-acl.1581.pdf#page=6)

另有 26 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.findings-acl.1581.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
