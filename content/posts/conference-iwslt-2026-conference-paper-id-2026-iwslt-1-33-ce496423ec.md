---
title: "The CUHKSZ System for the IWSLT 2026 Low-Resource Speech-to-Text Task"
date: 2026-09-12
draft: false
description: "针对 8 个低资源语音到文本翻译方向，该系统用梯度统计自动决定语言分组与共享比例并只专化编码器第 11 层 FFN2，在 bem 上比统一微调高 2.07 BLEU、hau 高 1.50 BLEU，代价是 ckb 等离群语言仍需靠推理时重排恢复。"
tags: ["知识蒸馏", "多任务学习", "低资源", "多语言", "语音翻译"]
categories: ["iwslt-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:iwslt:2026:conference-paper-id:2026.iwslt-1.33"
paper_digest_source_kind: conference
paper_digest_conference_id: "iwslt-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.iwslt-1.33/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.iwslt-1.33.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2430075022020476fc63d4cdfec6a67240aa27d4859f2a3fe6cda11f07feca57"
paper_digest_api_reader_plan_sha256: "6e586cad5eff5af3fd903d9d73f6d92a95a468c4d69c608c00d9858ee40c7b3c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "bb49a7a34e20dd7c64bf68c154606e02ec08e0c4ccbc1074e5a2926e8257580b"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8600fd5d465a2be9305c26ad201025cbb4194ea34c36f29806e0377912ec4b4d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "04c2b2d483ba02a30901bc63e39c0ac63812c9f3e7df273177b72dcb748ff3dd"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9bdb8be778d15acb65451b5bf07746dc1428e1768821878ea110961181f58e38"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"task","id":"task.speech-translation","label":"语音翻译"}]
paper_digest_primary_task: "语音翻译"
paper_digest_primary_method: "多任务学习"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 多语言一起训反而互相拖累：用梯度冲突定位瓶颈再做局部专化

> 英文题目：*The CUHKSZ System for the IWSLT 2026 Low-Resource Speech-to-Text Task*

> 会议身份：`conference:iwslt:2026:conference-paper-id:2026.iwslt-1.33`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.33/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.33.pdf)

标签：#知识蒸馏 #多任务学习 #低资源 #多语言 #语音翻译

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- ruiyan SUN：机构信息未能从会议 PDF 纯文本可靠映射
- Qingming Li：机构信息未能从会议 PDF 纯文本可靠映射
- Satoshi Nakamura：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务输入为8种低资源语言语音，输出为英语文本翻译，难点在于平行语料稀缺且多语言联合微调时梯度方向冲突导致弱势语言出现负迁移。系统先对统一微调的SeamlessM4T-Medium做三路梯度诊断，以跨语言子空间分歧定位第11层前馈第二子层为冲突瓶颈，并用相似度层次聚类划分出高冲突离群与低冲突簇。诊断输出的分组与冲突分数直接决定共享比例，接着仅在该冲突层做共享-私有分解，经奇异值分解保留一半共享容量并按能量分配私有容量后分组微调，其余编码器表示仍保持共享。随后以SeamlessM4T-v2-Large为教师做渐进混入真实数据的课程蒸馏以稳定训练，其产生的异构检查点再进入基于先验BLEU加权与自一致性打分的测试期重排序来选择最优译文。与仅投影校正梯度但维持单一共享参数集的已有方法相比，该流程把梯度统计转化为分组结构与容量配比，从架构上隔离离群语言的干扰并保留兼容组内的正向迁移。在8语言验证集下，GDPS-Med在Bemba上的BLEU为20.56，高于UFT-Med的BLEU 18.49。其适用边界在于分组能定位强离群却难以解释同簇内部分语言退化，且爱尔兰语接近零分与中央库尔德语依赖重排序挽回表明外推受限，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么？

这篇论文处理的是低资源语音到文本翻译。输入是 16 kHz 采样的语音波形，目标是输出英文文本译文。研究对象是 8 个方向：官方 6 个方向包括本巴语 bem、中库尔德语 ckb、爱尔兰语 gle、豪萨语 hau、伊博语 ibo、约鲁巴语 yor，再加上往届 2 个方向突尼斯阿拉伯语 aeb 和爱沙尼亚语 est。数据量都很小，例如 ckb 约 9 千行，gle 约 10,000 行，hau 和 yor 各约 1 万 5 千行，bem 和 aeb、est 各约 20,000 行。评估沿用 IWSLT 2026 官方协议，文本转小写、去掉标点，用 sacreBLEU 计算标准小写 BLEU，同时报告 chrF++ 和 COMET。

必须保留的信息是：所有系统都报在无约束条件下，允许使用外部预训练模型和往届数据；骨干是 SeamlessM4T-Medium，语音编码器 12 层 Conformer 加文本解码器 12 层，约 1,200,000,000 参数；教师模型是 SeamlessM4T-v2-Large。输出是每个音频样本的英文译文，方法选择和结论都要回到这 8 个语言的验证集与盲测集上核对。本文不讨论代码是否公开，原文证据未给出可用资源状态，因此不声称已公开。

### 已有路线如何处理多语言互相干扰？

大规模多语言模型如 SeamlessM4T、Seamless v2 和 MMS 已经显示出跨语言迁移能力，但把多个低资源语言同时微调时，不同语言的梯度信号在反向传播中经常冲突，导致代表性不足的语言性能下降，这就是负迁移。论文把已有缓解手段归为 3 类。第一类是基于优化的，例如 PCGrad 把冲突梯度投影到法平面，GDOD 和 GradOPS 用正交投影分解为共享与任务专属子空间，它们稳定了优化但仍保留单一共享参数集。第二类是结构解耦，例如共享私有表示和正交 LoRA 解耦，把干扰参数分开，但划分多为手工设计。

第 3 类是混合专家，按 token 路由到专属模块，代价是参数量大增。本文的梯度驱动参数共享与三者都不同：它从实测梯度统计自动决定语言分组和共享私有比例，并把决策实例化为局部 FFN2 分解。它延续作者 IWSLT 2025 系统固定共享的思路，但把固定改为自动；与其他 IWSLT 低资源系统依赖数据增强或更大骨干的路线形成对照。理解这 3 类的关键是：优化类不动结构，结构类手动定划分，专家类加参数，而本文用测量定划分且只动一层。

### 为什么统一微调不够，需要先测量再分组？

统一微调是把所有语言放在同一套权重上联合微调，白话说就是大家共用一本笔记本一起记。它的好处是高资源或相似语言可以互相借力，坏处是梯度方向不一致时互相擦除。论文要解决的矛盾是：共享带来迁移，但共享也带来干扰。作者提出先测量再动手：测量层间子空间分歧找到瓶颈层，测量语言对余弦相似度找到离群语言，测量自比与跨比差异决定共享多少。

**负迁移 × 梯度冲突：** 负迁移指多语言联合训练后低资源语言反而比单独训练更差的现象，分工是描述最终性能结果；梯度冲突指不同语言在反向传播中把同一参数往不同方向拉，分工是解释负迁移的优化机制，二者搭配的原因是论文把性能下降归因到可测量的余弦相似度和子空间分歧，组合意义是把抽象的性能问题转化为可定位层、可分组语言的统计量。

沿一个样本走一遍有助于建立依赖：一段 hau 语音进入编码器得到表示，经过第 11 层 FFN2 时同时走共享与组私有两路，解码器生成英文；训练时该样本的梯度与 ckb 样本的梯度在同一参数上方向几乎正交，于是更新互相抵消。论文报告 ckb 自相似约 0.509 而跨语言约 0.21，Gini 系数 ckb 最低 0.74 而 gle 最高 0.85，这支持 ckb 是离群者的判断，但组内 hau、ibo、yor pairwise 相似高却最终增益分化，说明相似只能说明方向兼容，不能保证与共享子空间对齐程度一致。

### 系统全景分哪四步走？

论文把系统分成 4 个阶段。第一是骨干预训练，直接采用 SeamlessM4T-Medium 和 LargeV2，不重新预训练。第二是梯度冲突分析，用 3 种方法输出语言分组、共享私有比和能量分布。第三是针对性 FFN2 专化，把统一权重分解为共享与组专属部分。第四是课程蒸馏训练与测试时重排。

推理时手里有异构检查点：零样本模型、统一微调检查点、分组微调检查点，没有一个在所有语言上都占优，因此用重排按样本选最优。图 1 把这 4 步的输入输出和箭头关系画了出来，阅读时先抓主路径再看分支汇合。

系统总览图的前导读：请把图 1 当作施工路线图，从左到右跟踪音频如何变成译文，特别注意中间梯度决策框向下指向 FFN2 的箭头，以及右侧两个紫蓝框如何分别处理训练监督与推理选择。

> **看图路径：** 1. 先从左侧音频波形沿箭头看到预训练模型框再到右侧目标译文；2. 再看中间 GDPS 框内梯度驱动决策如何指向 FFN2 共享与私有两路；3. 比较右上测试时重排与右下渐进课程蒸馏各自的输入来源；4. 确认统一微调分支与分组微调分支在重排阶段汇合

[![原论文 Figure 1：GDPS system overview with four main stages: (1) backbone model pre-training; (2) gradient conflict…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/bc53200ca872/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/bc53200ca872/figure-1.png)

*论文图 1。原论文 Figure 1：“GDPS system overview with four main stages: (1) backbone model pre-training; (2) gradient conflict analysis via three methods to identify language groups and layer bottlenecks;…”。*

对图 1 可见内容的解释：左侧是音频波形进入上方 Medium 与下方 LargeV2 两个预训练框，每个框内标出语音编码器层编号与 12 层解码器；中间上方是统一微调分支，中间下方橙色大框是 GDPS，内部分为上部梯度驱动决策三行与下部 FFN2 共享私有结构，组选择器根据语言 ID 把输入送往对应组；右侧上部蓝色框是测试时重排，3 个模型候选汇入先验 BLEU 与自洽性两路，右侧下部紫色框是渐进课程蒸馏，教师经样本级路由进入路由池，再按伪标签比例从全伪到半真过渡，学生仍是 Medium，最终两路都指向右侧目标译文。像素细节支持 4 阶段划分的说法，结构改动集中在第 11 层，其余编码器保持共享。

### 三组梯度测量如何定位瓶颈与离群者？

第一组是语言分组聚类。对每个语言在某层取平均梯度向量，计算两两余弦相似度再转为距离，用 Ward 层次聚类划分。热力图显示 hau、ibo、yor 抱团，ckb 孤立。第二组是自比与跨比。样本级梯度在同语言内与跨语言间的余弦均值之差记为冲突强度，再映射到共享比：小于 0.05 给 0.75，0.05 到 0.15 给 0.50，大于等于 0.15 给 0.25。

论文报告整体约 0.08 落在中等冲突，对应 50% 共享，但 ckb 大于 0.15 应给更低共享。第 3 组是联合奇异值分解与岭正则典型相关，把所有语言梯度矩阵拼接做奇异值分解，计算每种语言在前 k 个奇异向量上的投影能量占比，得到能量集中度与 Gini 系数。层选择看 12 层编码器的跨语言子空间分歧，第 11 层 FFN2 最高约 0.174，因此只专化这一层。Medium 上 K 取 3 得到 3 组：ckb 单独一组，hau、ibo、yor 一组，aeb、bem、est、gle 一组；LargeV2 上 K 取 4 分得更细。

梯度冲突三面板图的前导读：请把图 2 当作诊断报告，面板 A 负责回答动哪一层，面板 B 负责回答谁和谁一组，面板 C 负责用分布形态验证 ckb 是否真离群，读数时注意纵轴分别是分歧度、相似度与计数。

> **看图路径：** 1. 先看面板 A 各编码器层柱状高度确认第 11 层为最高冲突点；2. 再看面板 B 热力图中 ckb 行列与其他语言的低相似颜色；3. 对比面板 C 中 ckb 自比分布与跨语言分布的峰位置分离

[![原论文 Figure 2：Gradient conflict analysis identifying bottlenecks and language groupings: (A) Layer-wise subspace…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/bc53200ca872/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/bc53200ca872/figure-2.png)

*论文图 2。原论文 Figure 2：“Gradient conflict analysis identifying bottlenecks and language groupings: (A) Layer-wise subspace disagreement reveals Layer 11 as the primary conflict point; (B) Pairwise…”。*

对图 2 可见内容的解释：面板 A 柱状图中第 11 层红色柱明显高于其余蓝色柱，标注瓶颈值约 0.174，折线也同步上扬；面板 B 的 8 乘 8 矩阵中右下 hau、ibo、yor 三格深红高相似，而 ckb 所在行列多为蓝绿色低值，对角线为 1；面板 C 以 ckb 为中心的多条跨语言直方图集中在零附近，而 ckb 自比绿色曲线峰值偏向 0.7 附近，两类分布分离。这三块像素共同支持只动第 11 层且把 ckb 隔离的决策，但也留下局限：组内相似高不等于增益一致，yor 在分组后仍弱于统一微调。

**统一微调 × 梯度驱动参数共享：** 统一微调指所有语言共用同一套参数一起微调，分工是最大化跨语言迁移；梯度驱动参数共享指先测量语言间梯度是否打架再决定谁共享谁独立，分工是定位负迁移并做局部隔离，二者搭配的原因是前者提供起点和迁移收益，后者在其上只动冲突最大的瓶颈层，组合意义是以最小结构改动保留共享表示同时给冲突语言私有容量。

### 共享私有分解具体怎么算、怎么拼？

专化对象是第 11 层 FFN2，理由是它在子层中参数密度最高，且比注意力更易容纳语言特有特征。做法是把统一权重看作两个矩阵乘积，对等价 Gram 矩阵做奇异值分解，取前 k 个奇异向量做共享部分，剩余容量按各组能量占比分给私有部分。论文给出 Medium 的例子：模型维度 1024，前馈维度 4096，共享比 0.5 时 k 取 512，扩展后共享维度 2048，剩余 2048 按组能量分。最终前向是共享支路与组支路各自经过激活后再拼接，公式含义是输入先乘共享与组专属矩阵再加权输出，保持通用表示的同时允许组级适配。

组数在大模型上取 4，在 Medium 上取 3，因为大模型梯度分离更细。需要指出的缺项是：原文未完整给出私有矩阵初始化与优化器状态重置时机，也未报告分解后是否冻结共享部分的具体参数更新规则，复现时只能按统一微调超参数先跑，再按 50% 共享实现分解，不能从模型名推定冻结策略。

**共享路径 × 私有路径：** 共享路径指由奇异值分解前 k 个向量构成的通用变换，分工是承载跨语言通用结构；私有路径指按语言组能量比例划分的组专属变换，分工是吸收组内特有方向，二者搭配的原因是梯度能量集中在少数方向，组合意义是在第 11 层 FFN2 输出处把两路特征拼接相加，既不丢通用表示又允许组级适配。

### 课程蒸馏与测试时重排如何执行？

训练分 3 段。先做统一微调基线，学习率 4 乘 10 的负 5 次方，组调整学习率 1 乘 10 的负 4 次方，批量 4，丢弃率 0.05，权重衰减 0.05，预热 2000 步，随机种子 2343，AdamW 优化器，FP16 精度，英伟达 A100。接着做梯度驱动专化训练。最后做课程蒸馏：教师是 SeamlessM4T-v2-Large，学生是 Medium；阶段 0 用教师伪标签，阶段 mix20 用 20% 真实加 80% 伪标签，mix35 用 35% 真实加 65% 伪标签，mix50 用 50% 真实加 50% 伪标签，呈渐进式纳入真实数据。

推理时对每个样本每个检查点各生成一个候选，用两种策略选优。先验 BLEU 加共识策略把归一化先验分、与其他假设的 chrF 共识项和退化惩罚加权，权重取 0.6、0.3、0.1，前 2 名差距小于 0.05 时回退到先验最高者；去掉共识项即退化为纯先验消融。自洽性重排不看先验，只看候选间平均 chrF 一致性减去惩罚，并用最大最小 chrF 差标记难样本。

**课程蒸馏 × 伪标签混合：** 课程蒸馏指按由易到难逐步增加真实数据比例的训练过程，分工是稳定低资源优化；伪标签混合指教师模型生成目标与真实标注按比例混合，分工是提供充足且逐渐可信的监督，二者搭配的原因是大教师与小学生之间存在知识差距，组合意义是从全伪标签经 20% 真实、35% 真实过渡到 50% 真实，避免早期被噪声带偏。

**先验 BLEU 加权 × 自洽性打分：** 先验 BLEU 加权指用历史验证集 BLEU 给每个检查点可靠性打分，分工是引入跨语言迁移效率的先验；自洽性打分指用多个候选译文两两 chrF 一致性衡量共识，分工是利用测试时模型间是否同意来判断可信度，二者搭配的原因是单一检查点无法在所有语言占优，组合意义是在推理时为每个样本选出先验可靠且被多数模型认可的译文。

### 数据、划分与指标如何保证可比？

数据分两种设置。8 语言设置含全部方向，用于研究分组与共享；6 语言子集只用 2026 官方 6 方向训练，用于对照官方条件。所有语音按 16 kHz 预处理，文本小写去标点。评估主指标是验证集 BLEU 与 chrF++，补充 COMET，官方盲测对 yor、hau、ibo 用子词 BLEU、字符级 chrF 和 SSA-COMET，对 gle 用 BLEU 和 chrF++，因此验证与盲测数值不可直接比较。

比较时统一微调与分组模型使用相同骨干与数据，LargeV2 结果标为参考，不作为 Medium 主结论。聚合多用 8 语言宏平均，消融中 7 语言设置去掉 ckb 后看增量。硬件与精度已在训练节交代，随机种子固定。需要核对的是：百分点与相对百分比不同，BLEU 差值不能与 chrF++ 混放，自动指标不能当人评；原文表头与算术若冲突应标注，本文未发现主表算术冲突，但验证与盲测口径不同已明确区分。

### 主结果谁赢谁输，代价在哪里？

核心比较问题是：在相同骨干与数据下，分组专化相对统一微调在每个语言上带来多少 BLEU 与 chrF++ 变化，指标越高越好，公平条件是同为 Medium 骨干的 8 语言验证集。要回答该问题，先看官方盲测的绝对水平，再看验证集的分组收益。官方盲测是主要提交先验 BLEU 加共识的成绩，ckb 因提交文件问题缺席，指标口径与验证集不同，因此只用于确认相对趋势而非直接对比数值。

| Lang | spBLEU/BLEU | chrF/chrF++ | SSA-COMET |
| --- | --- | --- | --- |
| yor | 11.7 | 39.8 | 0.552 |
| hau | 2.4 | 24.3 | 0.285 |
| ibo | 3.8 | 27.6 | 0.349 |

上表是官方盲测四语言成绩的原表呈现，表后解释主要收益与代价：yor 达到 11.7 的子词 BLEU 与 39.8 的 chrF，hau 为 2.4 与 24.3，ibo 为 3.8 与 27.6，gle 为 2.4 的 BLEU，绝对值与验证集不可比，但相对画面一致即 yor 最好而 hau、ibo 仍低；代价是 ckb 缺席无法验证盲测恢复，验证集中 ckb 靠重排恢复到 20 左右的结论不能直接外推到盲测，未评测边界必须保留。

第二个比较问题是验证集上分组相对统一微调的每语言增量。下表用原文连续句整理关键数字，条件是 Medium 骨干 8 语言验证集，指标为 BLEU。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 8 语言验证集 | BLEU 差值 | 统一微调 | 分组专化 | bem 增益 2.07，hau 增益 1.50，aeb 增益 0.72，ibo 增益 0.38 |
| 8 语言验证集 | BLEU 绝对值 | 统一微调 | 分组专化 | ckb 为 10.67 比 8.38，est 为 40.06 比 39.09，yor 为 8.43 比 8.03 |

表后解释主要收益与具体代价：分组在 bem、hau、aeb、ibo 上报告正增益，其中 bem 与 hau 幅度最大，支持冲突语言经隔离后恢复的判断；代价是 ckb 低 2.29，est 与 yor 也弱于统一微调，说明离群与组内差异未被完全解决。COMET 补充显示分组平均 0.573 略高于统一微调 0.568，在 est 与 yor 上 BLEU 略低但 COMET 持平，提示差距多为表层形式差异而非充分性损失，唯 ckb 两类指标一致落后，与其离群画像吻合。未胜出项必须保留：est 与 yor 在 Medium 验证集上统一微调更强，不能只报增益语言。

### 去掉离群者、换组数与共享比会怎样？

消融围绕 3 个问题。第一，去掉 ckb 后其余语言是否变好。条件是 8 语言训练对比 7 语言训练，增量为 7 语言相对 8 语言的差值。报告显示效果与容量有关：大容量分组模型 6 个语言中有 6 个 BLEU 上升，aeb 加 0.85，bem 加 1.30，est 加 0.96，hau 加 0.48，ibo 加 0.33，仅 yor 降 0.34；而 Medium 模型与统一微调大模型变化多在正负 0.5 以内接近噪声。

因此 ckb 是真离群者，去掉至少无害，在大模型上温和有益。第二，组数 K 的影响。在 LargeV2 上固定共享比 0.5，K 取 2 时 ckb 被并入大共享簇从 17.35 降到 15.51，降幅约 10.6%，对应欠聚类暴露于冲突；K 取 3 时切分边界破坏自然簇，gle 的 chrF++ 掉到 7.17，相对默认下降约 31%，对应错切破坏正迁移；梯度驱动的 K 取 4 避开两者。

第三，共享比的影响。固定 K 为 4，在 0.25 到 0.75 间多数差异在正负 0.5 以内，降到 0.25 时 ckb 升到 17.75 但 bem 从 18.27 降到 16.96、hau 从 1.82 降到 1.56，升到 0.75 则反过来，0.5 落在稳定高原，说明冲突分提供的容量分配是有用但近似的指南，无需穷搜。

### 课程与重排各自贡献多少，能否互相替代？

该节比较的问题是：渐进混合与两种重排在相同分组基线下带来多少变化，指标越高越好。下表用原文连续句整理重排的关键恢复数字，条件是 8 语言验证集。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 8 语言验证集 | BLEU | 分组基线 | 先验重排 | ckb 恢复到 19.23，yor 恢复到 13.20 |
| 8 语言验证集 | BLEU | 分组基线 | 先验加共识 | ckb 到 20.26，yor 到 13.23，平均 14.85 |
| 8 语言验证集 | BLEU | 分组基线 | 自洽重排 | 平均 11.49，混合结果 |

表后解释主要收益与具体代价：课程蒸馏从纯蒸馏经 mix20、mix35 到 mix50 持续提升，mix50 最优，aeb 从 6.92 到 7.60，ckb 从 3.50 到 4.50，hau 从 1.28 到 1.52，est 保持稳定而 gle 接近零，说明渐进纳入真实数据稳定了训练但不能解决离群；先验重排大幅恢复 ckb 与 yor，证明历史先验在推理时有效补偿参数共享的不足；纯自洽重排平均仅 11.49 且结果混合，说明无先验时共识与质量不对齐。代价是先验依赖历史验证 BLEU，若验证与测试分布漂移则可能失效，而自洽虽无先验却在低质量共识下会跟错多数。两者不能互相替代，官方提交用先验加共识仅略优于纯先验。

### 哪些结论还站不稳，缺了什么验证？

论文直接报告的是：梯度分析可靠定位强离群者，分组在大模型上去掉 ckb 有益，K 的选择影响大而共享比影响小，课程与重排互补。有限解释是：组内高相似带来兼容方向，但 yor 的例子显示组内增益可从正 1.50 到负 0.40 分化，因此需要每语言与共享子空间的对齐分，这是可能待验证的改进方向。未验证的推测不能当结论：未测量推理延迟、额外存储与训练时长，不能承诺分组更省或更快；训练资源只报 A100 与 FP16，未报总卡时与超参数搜索成本，不能把总体趋势推广到每步都成立。

盲测 ckb 因文件问题缺席，不能用验证集恢复成绩代替盲测成绩。相关性不是因果：Gini 与自相似支持离群描述，但不能证明去掉 ckb 必然在大模型上因果提升，仍需固定种子的重复实验与显著性检验。8 语言相对 6 语言训练放大增益的结论也只在 Medium 验证集上显示，是否适用于其他骨干待验证。

### 要复现先做什么，需要哪些超参数？

复现先跑统一微调基线：骨干 SeamlessM4T-Medium，学习率 4 乘 10 的负 5 次方，批量 4，丢弃率 0.05，权重衰减 0.05，预热 2000 步，种子 2343，AdamW，FP16，A100，16 kHz 音频，小写去标点文本。接着在统一模型上抽取样本级梯度，计算层级余弦相似、Ward 聚类、自跨差与联合奇异值分解能量，确认第 11 层是否为最高分歧并得到 K 与共享比，Medium 预期 K 为 3、共享比 0.5，大模型预期 K 为 4。然后实现第 11 层 FFN2 分解，按能量比例分配私有维度并拼接输出，再按课程从全伪标签经 20%、35% 到 50% 真实混合训练，教师为 LargeV2。

推理时准备零样本、统一与分组 3 类检查点，按 0.6、0.3、0.1 加权先验、共识与惩罚做重排，前 2 名差小于 0.05 回退先验。信息条件是无约束允许外部预训练与往届数据，6 语言与 8 语言数据划分不可混用。资源状态是本次未能确认可达，不得写已公开，缺失的是私有初始化细节与冻结规则，复现时应记录该缺项并先按全参数更新跑通。

### 何时值得尝试这套方法？

当多语言一起训练出现个别语言明显掉队，且怀疑是梯度方向打架而非数据量 alone 时，值得尝试先测量再分组的思路。适用条件是：有多个低资源方向可联合训练，能抽到稳定的样本级梯度，且骨干中存在参数密集的前馈瓶颈层。若离群者已明确且容量较大，去掉或隔离它可能温和有益；若组内差异大，不应指望分组 1 次解决，应配合推理时先验重排。误解澄清：分组不是越大越好，K 取 2 会把离群者闷在共享簇里，K 错切会破坏正迁移。

共享比不是越私有越好，过低会削弱 bem、hau 等低资源方向的迁移；自洽重排不是无条件可用，共识不对齐质量时会失效。最终判断是：该系统在 bem、hau、ibo 上用局部专化换来实质增益，在 ckb、yor 上靠先验重排兜底，整体平均从统一微调的 11.28 到分组的 11.41 再到重排的 14.85，但 est 与 yor 的反例提醒分组标准对组内变异预测力有限，还需补每语言对齐分与显著性验证。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.iwslt-1.33.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.iwslt-1.33.pdf#page=3)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.iwslt-1.33.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.iwslt-1.33.pdf#page=4)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.iwslt-1.33.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-6.png)

区域 6 · [查看论文原页](https://aclanthology.org/2026.iwslt-1.33.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/iwslt-2026/d1c27370f221/figure-7.png)

区域 7 · [查看论文原页](https://aclanthology.org/2026.iwslt-1.33.pdf#page=5)

另有 42 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.iwslt-1.33.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 iwslt-2026 论文汇总](/posts/conference-iwslt-2026/)
