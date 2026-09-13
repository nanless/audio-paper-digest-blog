---
title: "VMD-FACT: A New Video Dataset and MLLM-based method for Detecting Realistic AI-Generated Video Misinformation"
date: 2026-09-13
draft: false
description: "针对生成式视频谣言跨模态语义一致导致旧数据集失真的问题，该研究构建含声明、视频、音频与跨模态四类操纵的 9049 对 RAVM 数据集并提出证据图检测模型 IEEG，以 75.99% 准确率取得最优但仍显示通用大模型的脆弱性，代价是生成与评测流程复杂且数据集链接当前不可用。"
tags: ["内容审核", "数据集", "图神经网络", "音视频理解"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ae804dfa28a035cae393c9e8cf29aceadb99a0b81ed0727da446092c6c4f321a"
paper_digest_api_reader_plan_sha256: "4bbcf306a273873978a86571457e467741edfa885de7e109b24f81d72b61c920"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "704822a9882eb13c26ac44a9481f65080d89ae2659d04a5a38c9d6e69ed565ec"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d89ec13c86fc24ee8c73abd92fa088923c75b914290dac92c6cd10a7e0100b12"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5a74ae27f7577eaeb7b6cf7b060bfcbc015d725c8f438041b604f3d2888f28ae"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2c7970ce50abee22f8146e7e35628052a41643f69140359d794e5909f818a91b"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"application","id":"application.moderation","label":"内容审核"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.gnn","label":"图神经网络"},{"facet":"task","id":"task.av-understanding","label":"音视频理解"}]
paper_digest_primary_task: "音视频理解"
paper_digest_primary_method: "图神经网络"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 跨模态一致反而更难查：RAVM 用多智能体伪造现实感视频谣言并以证据图检测

> 英文题目：*VMD-FACT: A New Video Dataset and MLLM-based method for Detecting Realistic AI-Generated Video Misinformation*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf)

标签：#内容审核 #数据集 #图神经网络 #音视频理解

评分：**6.5/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Yongkang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Dongyu She：机构信息未能从会议 PDF 纯文本可靠映射
- Baiyu Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Qichuan Geng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhong Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yan Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为社交平台流传的声明文本与配套视频，输出为真假二分类与可解释推理路径，难点在于生成式伪造跨模态语义高度一致且不再依赖明显剪辑痕迹。作者先用意图极性引导的声明操纵生成更具欺骗性的伪声明，再由语义对齐提示驱动候选视频生成与多评估器迭代优化，随后经关键帧编辑与语义驱动音频叠加完成视频与音频伪造，最终由事实核查与多模态证据图引导7B模型进行可解释判定。该链条以生成代替剪辑，以意图与一致性约束代替跨模态破坏，与已有视频误导检测数据集形成机制差异。在自建真实感AI生成视频误导数据集测试集上内部外部证据图建模取得75.99%准确率与73.44%宏平均F1，显著高于Gemini 2.5的68.89%与68.00%。结论仅适用于该数据集划分与所选25个大模型的对比范围，对开放域时事与未见生成器的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 数据相关资源：<https://gitee.com/VR_NAVE/ravm> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么生成式视频谣言更难防？

这篇解读的输入是论文原文证据与本次收到的官方原图像素，目标是让刚进入语音音乐音频领域的研究生能核对并复述方法，必须保留的关键信息包括数据集规模与划分、4 类操纵来源、生成框架的模块动作、检测模型的证据图思路以及主实验的比较条件与数字，输出按学习依赖从任务到复现展开。

视频谣言检测在这里指判断声明加视频构成的对是否属实，白话说就是看文字说法和画面声音是否共同撒谎。过去的数据集多用剪辑手段造假，例如直接替换音频或拼接不相关片段，这会破坏跨模态一致性，白话说就是声音画面对不上，留下容易被学到的生硬痕迹。而生成式谣言追求语义一致，白话说就是让伪造的文字、画面、音乐与语音互相印证，看起来像真实记录。论文报告的动机正是这种断裂：旧数据越训越会过拟合到特定伪影，面对高真实感生成内容时不够用。

为建立对照，下面先看数据集宣称的操纵版图。下图把全部伪造手段归为 4 个来源，每个来源下再细分技术，中心是数据集本身，初学者可把它当作后续生成框架要逐一实现的目标清单。

> **看图路径：** 1. 先看中心 RAVM 节点向四个方向伸出的虚线分区；2. 再数每个分区内的圆形技术节点名称；3. 对比声明区三个节点与音频区两个节点的数量差异；4. 注意跨模态区同时列出一致与不一致两种类型

[![原论文 Figure 1：Overview of manipulation sources in the proposed RAVM dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a4a81009e749/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a4a81009e749/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of manipulation sources in the proposed RAVM dataset.”。*

该图显示声明操纵包含替换、改写与生成 3 个圆圈，音频操纵包含背景音乐与语音两个圆圈，视频操纵包含重生成与伪造两个圆圈，跨模态操纵包含一致与不一致两个圆圈，4 个分区以不同颜色虚线框区分并都连向中心。这种布局说明数据集不是只改文字，而是要求每个模态都有生成式做法，且跨模态还专门保留语义失配样本以覆盖旧模式。理解这张图后，再看生成框架如何逐块落实就不容易迷路。

### 已有路线在输入目标监督上与本文有何不同？

早期工作依赖人工收集社交媒体数据，输入零散且质量低，目标多是二分类，监督来自人工标注，运行阶段只做离线判断。编辑式基准引入情感语言与音频操纵，创造过程更可控，但同样破坏跨模态一致，模型容易记住特定剪辑痕迹。近期工作用大语言模型生成操纵声明，输入是真实声明加元数据，目标仍是分类，但改写常显得突兀而不真实。

另一条线是深度伪造检测基准，输入是纯视频而无配套声明，目标是判断人脸真假，缺乏连贯叙事与对齐声明，因此不能直接拿来构建声明加视频的谣言数据。方法侧已有工作把检测当作跨模态特征融合分类，靠捕捉语义不一致，但需要复杂特征抽取且缺乏可解释性。新兴的可解释路线用大语言模型与多模态大模型挖掘隐含观点或生成长思维链，本文指出链式推理难以建模多模态证据间的复杂依赖，容易累积误差。

本文与上述工作的同输入同目标对照在于都处理声明加视频对并判断真假，不同在于监督与运行阶段：本文用智能体生成的高一致性伪造对做训练，用证据图组织内外部核查做推理，强调在生成式高真实感条件下的鲁棒性与可解释性。

### 要解决的具体问题与数据形态是什么？

问题是检测现实感强的人工智能生成视频谣言。输入是一个声明文本加一段视频，视频自带画面与音频，有时附带描述、点赞与标签等元数据。输出是真假判断，并希望给出可检查的推理依据。难点在于伪造方刻意维持跨模态语义一致，单看文字或单看画面都不易识破。

举例说明时需标明这是教学例子：例如真实事件是某地举行活动，伪造者把地点换成另一城市，同时重生成对应街景并配上语气一致的解说与背景音乐，文字与视听互相支撑。论文不提供该具体数值例子，这里只是帮助理解输入到输出的形态。

数据集层面，论文报告 RAVM 包含 9049 对，其中 4355 对标为真，4694 对标为假，并提供真假、极性与归因 3 个标注维度，白话说就是除了真假，还标有害还是无害以及伪造出自哪个来源。这种细粒度标注为后续按操纵类型分析与复现划分提供了依据。

### 生成与检测全景：一个样本走完全流程

先沿一个样本走完流程。输入是一条经事实核查网站验证为真的热点声明及其元数据。声明操纵器按意图极性选择替换、改写或生成，产出伪造声明与描述。提示生成器用叙事模板产出语义对齐的操纵提示，送入视频生成模型库产生候选视频。质量、语义对齐与对抗 3 个评估器打分，优化器据此改写提示并迭代。

另一路对原视频抽关键帧，按伪造声明做意图驱动图像编辑，再经图像到视频生成得到操纵视频。语义感知器再决定是否加背景音乐并设定说话人属性，由音乐专家与语音合成专家生成音频并叠加。最终伪造声明加最终视频构成谣言对。检测侧先用事实核查模块初判，再用视频多模态大模型抽取多模态证据，与核查结果一起建成有向无环的证据图并整理成推理路径，经知识蒸馏得到 7B 参数的检测模型。

下图是该全景的模块连接图，初学者建议先找主数据流，再看反馈回路，不要一开始纠缠每个图标含义。

> **看图路径：** 1. 沿左上热点事件收集到声明操纵再到下方视频精炼的主路径追踪箭头；2. 观察右上关键帧伪造模块中分析器到感知器执行器的虚线回路；3. 比较下方三评估器汇入动态奖励算法再反馈给提示优化器的闭环

[![原论文 Figure 2：Overview of our multi-agent-driven framework for generating realistic AI-generated video…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a4a81009e749/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a4a81009e749/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of our multi-agent-driven framework for generating realistic AI-generated video misinformation.”。*

该图上排从左到右依次是热点事件收集、意图极性引导的声明操纵、自适应关键帧到视频伪造与商业闭源模型，下排是智能体反馈视频精炼与语义驱动音频模块。可见声明操纵用深度求索模型实现，视频精炼用质量对齐对抗三评估器加动态奖励算法驱动提示更新，音频模块由语义感知器调度音乐与语音专家。关键帧伪造支路明确标出感知器回答何处改、执行器回答如何改的分工。商业模型作为多样性补充接入。这种多智能体分工使每一步都有明确输入输出，便于复述与核查。

### 声明与提示如何保证语义一致？

声明操纵考虑语义与意图极性，白话说就是不仅改事实词，还要让动机可信。技术上以真实声明与元数据为输入，以引导提示为控制，输出伪造声明与描述。替换针对主体时间地点，改写针对叙事逻辑与情绪触发，生成则更自由。意图极性区分有害与无害，使伪造更具欺骗性与人类可信度。

**声明操纵 × 意图极性：** 声明操纵负责改写主张文本的事实要素与叙事逻辑，意图极性负责区分有害与无害的造谣动机与语气，二者搭配是因为只改实体容易生硬而加入动机后更像真实传播，组合后声明操纵器能按有害或无害意图选择替换、改写或生成策略，使伪造声明更具迷惑性。

提示生成用叙事驱动模板保证视频生成时的语义一致，白话说就是给视频模型讲一个完整故事而不是零散关键词。输入是伪造声明与描述加模板，输出是语义对齐的初始操纵提示。该提示同时约束后续迭代不发生语义漂移，论文为此引入历史优化记录构成的状态图。

**文本到视频生成 × 智能体反馈精炼：** 文本到视频生成负责按操纵提示产生候选视频，智能体反馈精炼负责用质量、语义对齐与对抗 3 个评估器打分并优化提示，二者搭配是因为单次生成难以同时保证画质与声明一致，组合后形成候选生成加迭代优化的闭环，使视频在保持语义对齐下逐步提升真实感。

候选生成阶段用视频生成模型库按当前提示生成候选集，精炼阶段用三评估器从多视角打分。质量与对齐评估器同时给出分数与无分数的理由，避免只看分数导致失控精炼。对抗评估器在多个通用数据集上微调，对假类有更高召回，用于衡量误导性。动态奖励算法把三者合成为基础质量奖励，再减去关注相邻迭代分数变化趋势的惩罚项，使优化稳定可控。优化器分析分数与理由后更新提示，直到基础奖励超过阈值或达到最大迭代数。原文实现细节在补充材料，解读不猜具体权重数值。

### 视频与音频两路伪造各自做了什么？

自适应关键帧到视频伪造走图像到视频范式，白话说就是先改关键画面再让其动起来。分析器从原视频识别并抽取承载叙事的关键帧，意图驱动图像编辑块迭代编辑，生成器再产出操纵视频。实现上分析器与感知器用多模态大模型，执行器用图像编辑模型，生成器用闭源商业模型以保留关键帧语义。

**关键帧到视频伪造 × 意图驱动图像编辑：** 关键帧到视频伪造负责保留原视频叙事骨架并重生成动态，意图驱动图像编辑负责按伪造声明定位关键帧中要改的位置与改法，二者搭配是因为直接重生成易丢失原事件连贯性而只改图像又缺动态，组合后先编辑关键帧再用图像到视频模型生成，使操纵视频既连贯又符合伪造意图。

语义驱动音频模块走受控生成而非简单替换，白话说就是按故事需要配乐与配音。语义感知器接收已操纵的声明视频对，自适应决定是否调用音乐专家生成背景音乐，同时生成性别语速情绪音色与内容等说话人属性，引导语音合成专家生成语音。背景音乐与语音与操纵对保持语义一致，再按放大系数叠加到视频上。

**语义感知器 × 音乐与语音专家：** 语义感知器负责读取已操纵的声明与视频并决定音频内容与说话人属性，音乐与语音专家分别负责生成背景音乐与语音，二者搭配是因为旧方法直接替换音频会引入跨模态不一致，组合后音频在语义一致约束下生成并按比例叠加，避免模型只学表面拼接痕迹。

为防过拟合到特定伪影，框架还为真实声明生成高保真视频，此时用更高的质量阈值并关闭对抗评估器。商业闭源模型与来自已有数据集的高质量验证数据也被纳入以增强多样性，并额外构造声明视频语义失配样本以加强对该模式的覆盖。

**多模态证据 × 证据图：** 多模态证据负责提供视频内线索与外部事实核查结果，证据图负责把这些节点与依赖关系组织为有向无环图并生成推理路径，二者搭配是因为链式推理难以建模证据间依赖且易累积误差，组合后检测模型沿图结构组织核查，使判断可解释且能处理复杂操纵组合。

检测模型把多模态证据、事实核查结果及其依赖表示为证据图，白话说就是把每条证据当节点、把谁支撑谁当边。顶点集是证据与核查结果，边集是依赖，整体为有向无环图，再整理为连贯推理路径。结合智能体思想蒸馏构造 7B 参数模型。原文未报告该蒸馏的完整梯度路径与冻结细节，解读不从模型名推定实现，只说明监督来自图组织的推理路径与事实核查信号。

### 数据如何划分与构造？训练与调用各是什么？

数据构造先从主流社交平台收集约 5 万热点事件及声明视频元数据，再用事实核查网站核验并用深度求索模型做质量过滤。随后按上述框架生成伪造对，并划分训练验证测试集。下表问题是各集合真假数量是否均衡且足以支撑训练与评估，公平条件是同一数据集划分与同一真假定义，指标方向是数量越大且越均衡越有利于稳定评估。

| 集合 | 指标 | 训练集 | 验证集 | 测试集 |
| --- | --- | --- | --- | --- |
| RAVM 划分 | 样本总数 | 6028 | 1500 | 1521 |
| RAVM 划分 | 真样本数 | 2893 | 718 | 744 |
| RAVM 划分 | 假样本数 | 3135 | 782 | 777 |
| 总量对照 | 真假总数 | 4355 真 | 4694 假 | 9049 对 |

该表显示训练验证测试分别约六千、一千五、一千五，真假比例接近 1 比 1，总量 9049 对中假略多于真。这种划分支持按集合聚合的准确率与宏平均评估，避免单集合偏差主导结论，但仍需注意热点事件本身偏向流行话题，词云已反映该分布偏置。

下图进一步展示按操纵类型的分布，初学者应先确认原始收集与各类生成的占比，再判断哪类技术是多数。

> **看图路径：** 1. 先读左图内外环训练验证测试划分与真假数字；2. 再读中图声明操纵四块的占比顺序；3. 最后读右图视频操纵中伪造块远大于重生成块的现象

[![原论文 Figure 3：Overall data distribution of the RAVM dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a4a81009e749/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a4a81009e749/figure-3.png)

*论文图 3。原论文 Figure 3：“Overall data distribution of the RAVM dataset.”。*

该图左为训练验证测试的内外环划分，中为声明操纵下原始收集 2978 与替换 2306 改写 1153 生成 385 的分布，右为视频操纵下原始收集 2978 与伪造 3344 重生成 500 的分布。可见视频伪造是最大块，声明生成与视频重生成相对较少，这种不均衡意味着按类型聚合时需分别报告，不能只看总体准确率。训练实现上生成框架调用多种开源文本到视频模型与商业模型，最大迭代数默认为 3，操纵声明质量阈值 6.5 而真实声明为 7.5，事实核查用网络检索工具，所有实验在 8 卡特定加速器上运行。检测模型的训练细节原文只给出蒸馏思路与优化目标方向，未报告学习率与冻结范围等缺项，复现时需先补这些验证。

### 用什么条件测？与谁比？指标方向如何？

比较对象包括当前主流视频谣言数据集与 25 个先进语言与多模态大模型，含 23 个开源与 2 个商用，覆盖不同架构与训练范式，也含指令与推理调优变体。基线侧按原文实际可运行策略保留通用大模型直接判断与经微调的视频模型，不用搜索最优或事后最优代替可部署收益。

评估分 3 类问题组织。主比较测在 RAVM 上的真假判断，指标是准确率与宏平均 F1，越高越好，并分假类与真类报告精确率召回率与 F1。跨数据集鲁棒性测在已有数据集上微调后能否提升，条件是移除来自已有数据集的样本后只保留自采与自操纵数据再微调。模式迁移测在已有数据集上微调后在 RAVM 上是否掉点，用于反证旧模式过拟合。数据集质量测用自动语音视觉评分、视频生成基准与 10 人 10 分制用户研究，从语义一致与真实感互补评估。

下表问题是声明与视频操纵各自的样本量是否足以支撑按类型分析，公平条件是只计自采与自操纵而不含引入的外部数据，指标方向是数量明确可核对。

| 操纵维度 | 指标 | 原始收集 | 主要类型一 | 主要类型二 | 次要类型 |
| --- | --- | --- | --- | --- | --- |
| 声明操纵 | 样本数 | 2978 | 替换 2306 | 改写 1153 | 生成 385 |
| 视频操纵 | 样本数 | 2978 | 伪造 3344 | 重生成 500 | 无 |
| 总量 | 样本数 | 9049 对 | 4355 真 | 4694 假 | 3 维度标注 |

该表说明声明侧替换最多而生成最少，视频侧伪造远多于重生成，复现按类型评估时应保留这种原始计数口径，不自行归一化或四舍五入。未胜出项与边界在后文结果中继续说明，例如大尺寸模型并未稳定更好，且部分条件存在显著掉点。

### 主结果：谁在高一致性伪造下仍有效？

主比较问题是在同一 RAVM 测试集上通用大模型与所提方法谁更准，公平条件是相同输入对与相同真假定义，指标方向是准确率与宏平均越高越好。下图先给直观例子，说明高一致性伪造看起来像真实新闻，再看数字。

> **看图路径：** 1. 逐行对比每条声明文本与其下方四帧画面的主体对应关系；2. 观察直升机军舰火箭等场景的语义贴合程度；3. 注意人物与建筑镜头是否维持叙事连贯而非随机拼接

[![原论文 Figure 5：Visualization of RAVM, showing a manipulated claim and its corresponding generated video.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a4a81009e749/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a4a81009e749/figure-5.png)

*论文图 5。原论文 Figure 5：“Visualization of RAVM, showing a manipulated claim and its corresponding generated video.”。*

该图展示 8 组伪造声明与其对应生成视频，每组上方为声明文本下方为 4 帧画面，内容覆盖直升机军舰火箭与街景人物等，画面主体与声明关键词对应且叙事连贯，没有明显的拼接错位。这种视觉一致正是检测难点，单靠找违和感容易失效。

下表问题是可运行策略中谁总体最优且代价如何，公平条件是同一测试划分，指标方向是准确率与宏平均越高越好。

| 条件 | 指标 | 通用商用基线一 | 通用商用基线二 | 本方法 |
| --- | --- | --- | --- | --- |
| RAVM 测试 | 准确率 | 68.07% | 68.89% | 75.99% |
| RAVM 测试 | 宏平均 F1 | 56.28% | 68.00% | 73.44% |
| 模型规模 | 参数量级 | 超大闭源 | 超大闭源 | 7B |

该表显示所提方法以较小参数取得 75.99% 准确率与 73.44% 宏平均，报告为最优，而先进闭源模型仅 68.07% 与 56.28% 以及 68.89% 与 68.00%。论文据此判断通用大模型在生成式视频谣言检测上脆弱，且增大开源模型尺寸并未带来显著改善。但限制是总体趋势不等于每类操纵都成立，按声明与跨模态细分的数字在补充材料，解读不把末步总体结果推广到全程每组。

### 反证是什么？旧数据训练为何搬不过来？

消融按两个反证问题组织。鲁棒性问题是只用自采自操纵子集微调能否提升在旧数据集上的表现，基线是未微调与在原训练集微调。论文报告在 3 个主流数据集上准确率分别提升 13.48、36.65 与 15.37 个百分点，宏平均分别提升 8.96、19.20 与 15.46 个百分点，远超在原训练集微调的增益，支持 RAVM 带来可靠增益的判断，但代价是需要额外的生成与过滤计算。

模式迁移问题是在旧数据集上微调后到 RAVM 上会怎样。论文报告在已有数据集上微调会导致在 RAVM 上显著掉点，支持旧操纵模式鼓励过拟合到表面模式、而高一致性生成对阻碍这种迁移的解释。这不是训练错误，而是分布差异的证据。

数据集质量的数量评估显示 RAVM 在自动评分、视频生成基准与用户研究上均优于已有基准，表现为更高质量与语义对齐。但需区分自动指标与人评不能混用，不同指标差值也不能放到同一模型列下比较。未评测边界包括误判率延迟与成本未系统测量，因此不承诺这些量得到改善。

### 还有哪些不能下结论的地方？

论文直接报告的是规模划分、按类型计数、主比较数字与跨数据集增益，有限解释是对过拟合与脆弱性的机制讨论，未验证推测是更大规模或更多商业模型是否进一步提升，应用时需用可能待验证表达。缺失证据不是技术错误，例如蒸馏的超参数、梯度路径与重置时机未完整报告，复现时应明确标为缺项而不从模型名推定。

相关性不等于因果，热点事件偏向流行话题可能影响泛化，但原文未量化该偏置的影响。总体趋势不等于每组每步成立，大模型尺寸与性能非单调，个别大尺寸开源模型在假类召回与真类精确率上表现分化。推理开销输出帧率与实际延迟分别讨论，原文未给出延迟数字，不能承诺实时性。

资源状态是正文开源声明的唯一依据，本次收到的数据集链接状态为不可用，因此只能写该链接当前不可用，不能写已公开或当前可用。若后续可达，需重新核对版本与划分是否一致。

### 复现先做什么？需要哪些信息条件？

何时值得尝试是当任务涉及生成式高一致性谣言而非简单剪辑拼接时，该数据集与证据图思路更贴合。复现先做三件事。第一核对划分与计数，按训练 6028 验证 1500 测试 1521 及真假数重建索引，并按声明与视频操纵计数核对子集完整性。第二重建生成调用链，依次实现声明操纵、提示生成、候选生成与三评估器优化、关键帧编辑与音频调度，保留阈值 6.5 与 7.5 以及最大迭代 3 等关键超参数。第三复现评估协议，固定同一测试集与准确率宏平均及分列精确召回，保留通用大模型基线与 7B 检测策略，不用外部引入数据的子集混淆条件。

需补的验证包括蒸馏的完整训练配置、事实核查检索的覆盖范围、用户研究的具体任务说明与统计方法，以及硬件预算下的生成成本。区分代码开源权重下载与系统可运行，本文证据只给出方法与部分实现名，不等同于一键可运行系统。数据集链接当前不可用是明确限制，复现前需先解决数据获取与授权问题。

### 收束：记住哪条可重放的链路？

记住一条链路：热点收集与核验得到真事件，按意图极性改声明，用叙事模板生成提示，经三评估器迭代优化视频，经关键帧编辑保留叙事，经语义感知调度音频，最终形成声明视频对，再用证据图组织内外核查做可解释判断。该链路的每一步输入输出都可在原文中找到对应模块动作，便于逐段复述。

关键数字按原文保留写法：总量 9049 对中 4355 真 4694 假，训练验证测试为 6028、1500、1521，主结果为所提方法 75.99% 准确率与 73.44% 宏平均，商用基线为 68.07% 与 56.28% 以及 68.89% 与 68.00%。这些数字的比较条件与聚合对象已在前文交代，不单独作跨指标差值。

对初学者的特有误解是把跨模态一致当成真实性的证明，本文恰好说明伪造方也会刻意维持一致，因此检测不能只找违和感，而要结合外部事实核查与证据依赖建模。另一误解是把无训练等同于确定性求解，本文生成侧多为模型调用与搜索，输出仍具随机性，需用阈值与迭代控制而非 1 次求解。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 8，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 9，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f68e0e6dd4d9/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf#page=6)

另有 9 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
