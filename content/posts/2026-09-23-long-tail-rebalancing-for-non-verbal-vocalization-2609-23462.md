---
title: "Long-Tail Rebalancing for Non-Verbal Vocalization-Aware ASR: A Track~1 System for the NVVSpeech Challenge"
date: 2026-09-23
draft: false
tags: [语音识别, SFT, 多语言, 低资源, 语音]
categories: [论文速递]
description: "针对 16 类非言语发声联合转写任务，该工作用跨数据集标签归一加平方根采样后接均匀微调，在官方评测得到 63.86 分排名第四，代价是第二阶段在本地验证集上从 66.25 分回落到 58.91 分且多数类别 F1 下降。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.23462"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "长尾之下适度再平衡：平方根采样为何优于自然与均匀采样"
paper_digest_original_title: "Long-Tail Rebalancing for Non-Verbal Vocalization-Aware ASR: A Track~1 System for the NVVSpeech Challenge"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.23462"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.23462.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "SFT"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对 16 类非言语发声联合转写任务，该工作用跨数据集标签归一加平方根采样后接均匀微调，在官方评测得到 63.86 分排名第四，代价是第二阶段在本地验证集上从 66.25 分回落到 58.91 分且多数类别 F1 下降。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shangyue Jia"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jingru Ma"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yangzhuo Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Daoping Luo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bowen Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hanchen Lu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenze Ren"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yunxiang Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Houdun Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuo Feng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lei Xie"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liumeng Xue"}]
paper_digest_abstract_sha256: "73a08eb42a90ae78975edc59bbbee11e5b891c937f0faa9d973114208776309f"
paper_digest_sidecars: {"citation.bib":{"sha256":"fdb2fd884eaa5d3eb79843c25f7fbe33bb5586a6bd483857b1a3e96b83f4c6a6","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23462/citation.bib"},"citation.json":{"sha256":"acbd3851ef30399d4e3daf3517e5fd73015541bcd77876728c9f7863e560bfc4","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23462/citation.json"},"citation.ris":{"sha256":"bd92f21444683be0e6fbc09263a7bc1239502aa5b6236ab42c891865bea8fb3c","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23462/citation.ris"},"rethink-context.json":{"sha256":"57b96cb78167aaf0a3c04da76367dee144e0aea51d550229dc766d7acb25e0da","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23462/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "313a9f26492f9c49d0533c8c519d0234ff82f23106939f66f13445ab4f579a01"
paper_digest_api_reader_plan_sha256: "90b08eab74c683417962d97b12f401fa415a3b282b870129815ec105bdf455fc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "670cd0b79a51ffc95a71134ed5c081a832f71668a0015358a8a6d56090d7008d"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "b14227b7381d0eb8390b38c8869cd22137fe563aec7ac627fb8121fe00b826b8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3f790d9140e5552faf7ae50ffda489ac4370b6cd44075eccef97e85a14961fe4"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "97624c916285909fb15aa61485382f96f511b9d93418eca43c82831ef2f49615"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 长尾之下适度再平衡：平方根采样为何优于自然与均匀采样

> 英文题目：*[Long-Tail Rebalancing for Non-Verbal Vocalization-Aware ASR: A Track~1 System for the NVVSpeech Challenge](https://arxiv.org/abs/2609.23462)*

> 标签：#语音识别 | #SFT | #多语言 | #低资源 | #语音
>
> 评分：**5.6/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5


## 👥 作者与机构

- Shangyue Jia：机构信息未在 arXiv HTML 中可靠披露
- Jingru Ma：机构信息未在 arXiv HTML 中可靠披露
- Yangzhuo Li：机构信息未在 arXiv HTML 中可靠披露
- Daoping Luo：机构信息未在 arXiv HTML 中可靠披露
- Bowen Tian：机构信息未在 arXiv HTML 中可靠披露
- Hanchen Lu：机构信息未在 arXiv HTML 中可靠披露
- Wenze Ren：机构信息未在 arXiv HTML 中可靠披露
- Yunxiang Chen：机构信息未在 arXiv HTML 中可靠披露
- Houdun Liu：机构信息未在 arXiv HTML 中可靠披露
- Shuo Feng：机构信息未在 arXiv HTML 中可靠披露
- Lei Xie：机构信息未在 arXiv HTML 中可靠披露
- Liumeng Xue：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

该工作处理含16类非言语发声的语音识别，输入为音频波形与语种标识，输出为词与行内非言语标记交织的单一序列，难点在于跨数据集标签异构与严重长尾导致尾部学习不足。首先将8个异构数据源映射至官方16类分类并剔除不可靠映射，形成统一训练集并保留完整词与标记序列，其输出直接作为采样调度的训练池。接着以平方根类别采样进行第一阶段全参数微调以平滑分布，再从该检查点出发以均匀类别采样继续微调以强化尾部曝光，骨干目标与损失全程固定仅改变样本分布。相对自然采样与完全均匀采样，该调度不改动目标与损失而只调节类别曝光强度，在保留头部监督的同时提升尾部曝光以避免过度均衡带来的整体下降。在本地验证集设置下，平方根采样的验证分数为66.25，高于自然采样的验证分数62.33。该结论限于Qwen3-ASR 1.7B固定骨干与当前数据组合，未验证跨骨干与开放场景外推。其跨语种开放场景与跨骨干迁移效果尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 数据相关资源：<https://huggingface.co/datasets/NVVSpeech-Challenge/Burp_data> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 任务要解决什么：为什么词转对了还不够？

输入是包含说话内容与伴随发声的音频，目标是输出词与非言语事件交织的完整序列，必须保留的信息包括 16 个官方非言语类别、词错误与事件错误的联合评价，以及长尾监督这一前提，输出是可复述的数据处理与采样流程。本文研究的不是通用语音识别，而是非言语发声感知的语音识别。白话说，非言语发声就是笑声、咳嗽、呼吸、哭泣这类没有词义但携带情绪与互动信息的声音，英文名是 non-verbal vocalizations，缩写为 NVV。

常规系统只转词，会把这些事件丢掉，读 transcript 的人就看不出说话人是笑了还是咳了。教学上可以举一个例子，比如有人说今天真开心并伴随笑声，词对了但漏掉笑标签，例子仅用于理解任务，不代表论文的真实音频。论文要做的就是让模型在一个序列里同时写出词和行内非言语标签。

**非言语发声 × 事件感知语音识别：** 非言语发声负责定义要识别什么，即笑、咳、呼吸等 16 类副语言事件，事件感知语音识别负责规定怎么输出，即把词和行内非言语标签交织在一个解码序列里，二者搭配的理由是只有统一序列才能同时评价字词错误和事件位置，组合意义是把副语言理解从独立分类变成可与词一起解码的转写任务。

挑战的困难来自监督又少又偏。论文收集了多个开源数据，但每个数据的事件清单、标注粒度和语言来源都不同，直接合并会把含义相近但不等价的标签混在一起，而且头部类别样本多、尾部类别样本少。作者因此把问题框定为数据构成问题：在固定骨干网络、固定目标格式和固定损失的前提下，如何归一异构标签并调整类别抽样强度，而不扭曲词与事件的联合预测。后续所有方法都围绕这个框定展开，模型本身不是新结构。

### 已有路线走了多远：事件建模与数据合并卡在哪里？

同输入同目标的一条路线是事件感知识别，已有工作把社交信号或非言语事件写进输出序列，也有工作把数据构建、识别与生成统一起来，还有评测工作定义了显式事件类别与位置感知打分。本文与它们的区别是保持骨干与输出协议不变，只研究训练数据构成与类别采样。同监督层面的另一组工作是数据集本身，例如大规模非言语理解生成数据、中文表演性事件数据和多标注中文表现力语音数据，它们在规模与覆盖上互补，但在标签空间上不一致。

本文引用这些资源的目的是说明直接合并不可行，需要映射与过滤。同运行阶段的第三组工作是长尾识别中的采样策略，包括按样本平衡、按类平衡、平方根采样和渐进平衡等。本文选择其中最简单的两段式做法，不引入额外事件检测器、增强模型或动态损失调度。这样的对照说明本文贡献在数据侧而非建模侧，复现时不应期待新网络结构带来增益。

### 问题如何形式化：一个样本要走完哪条路？

沿一个样本走完全程有助于理解后续公式。输入是波形与语言标识，语言标识区分中文与英文，因为测试集两语数量大致平衡。模型读入音频后自回归地生成一个序列，序列里既有词又有尖括号形式的非言语标签，例如输出中出现词串后紧跟笑标签。监督来源是人工或自动标注整理后的人工可读目标序列，训练目标是最大化给定音频与语言下正确序列的对数概率。推理时论文使用贪心解码，即每一步取概率最大的词或标签，不做束搜索。

评价时用官方第一赛道评测器同时看词错与事件错。需要先建立这个样本级图像，后面谈采样才不会误以为改了模型结构：采样只改变训练时抽到哪个样本的概率，不改变每个样本内部的词与标签顺序。

### 全景如何串起三步：归一、温和采样、强平衡微调？

全景回答先做什么后做什么以及为什么这样排。第一步是跨数据集标签归一，把异构源标签映射到官方 16 类，映射可靠才保留，否则整句排除在归一训练集之外，多事件句则逐个事件归一但保留整句与原始顺序。第二步是用平方根类别采样训练第一阶段，适度抬升尾部。第 3 步是从第一阶段 checkpoint 继续用均匀类别采样微调，更强调尾部。3 步共用同一骨干、同一分词、同一序列化格式和同一损失，只有采样分布在变。下图把 3 步画成从左到右的流水线，左侧列出源数据集与 3 类映射，中间与右侧分别画出采样直方图与编解码监督回路。

在阅读下图之前，先明确观察顺序有助于抓住数据中心思想：先看左侧标签如何收敛到 16 类，再看中间直方图是否仍倾斜，最后看右侧直方图是否被拉平，同时注意上下两路的输入输出格式是否一致，这直接对应只改采样不改格式的主张。

> **看图路径：** 1. 从左到右跟随三个编号框，确认输入是多源数据集而输出是归一训练集加两阶段模型；2. 对比中间与右侧采样直方图，一个是递减长尾，一个是等高均匀；3. 查看下方输入到输出箭头，确认词与尖括号标签在同一序列中生成并用交叉熵监督

[![原论文 Figure 1：Overview of our data-centric NVV-aware ASR pipeline, consisting of cross-dataset label…](https://arxiv.org/html/2609.23462v1/Figure_1_method.svg)](https://arxiv.org/html/2609.23462v1/Figure_1_method.svg)

*论文图 1。原论文 Figure 1:：“Overview of our data-centric NVV-aware ASR pipeline, consisting of cross-dataset label harmonization, Stage I training with square-root category sampling, and Stage II…”。*

上图显示的流水线可以这样复述。左侧把源数据集送入 3 类判断，精确对应与人工核验的近似对应进入归一集合，无可靠解释的如拍手口哨类标签被排除。中间用倾斜的采样条形图表示平方根采样，音频经 Qwen3-ASR 生成带笑标签的英文句，并与目标句算交叉熵损失。右侧用等高条形图表示均匀采样，同样走一遍音频到带咳嗽标签句子的生成与损失计算。2 阶段的模型框颜色不同但输入输出接口相同，这正是固定骨干只换采样分布的可视化表达。

**标签归一 × 类别采样：** 标签归一负责解决异构来源名称不一致，分工是把源标签映射到官方 16 类并剔除不可靠映射，类别采样负责解决归一后仍然长尾，分工是只改变训练抽样分布而不改模型与损失，二者搭配的原因是先统一类别语义采样才有意义，组合意义是得到 1 个类别可比且分布可调的训练集。

### 采样与损失如何计算：指数如何控制倾斜程度？

本节先讲损失，再讲采样指数，最后讲 2 阶段如何拼接。损失是标准的自回归监督微调目标，符号含义是模型参数为 theta，采样分布为 q，输入为音频与语言，输出为交织序列，目标是最小化负对数似然的期望。关键是期望是对采样分布取的，因此改采样就改了优化时各类样本的权重。原文明确固定骨干、分词、序列化与损失，只改 q。

\[\mathcal{L}_{\mathrm{SFT}}(\theta;q)=-\mathbb{E}_{i\sim q}\left[\log p_{\theta}(y_{i}\mid x_{i},\ell_{i})\right],\]

上式说明优化目标本身没有类别加权项，类别平衡完全由采样实现。接着定义类别概率，符号含义是 nc 为分到类别 c 的句数，alpha 为 0 到 1 之间的指数，分母是对所有已出现类别的归一。直觉是 alpha 等于 1 时回到按句均匀抽样，alpha 等于 0.5 时取频次开方，属于温和压平，alpha 等于 0 时每个类别等概率，属于完全拉平。

\[p_{c}(\alpha)=\frac{n_{c}^{\alpha}}{\sum_{k\in\mathcal{C}_{\mathrm{train}}}n_{k}^{\alpha}},\]

由类别概率到单句概率的换算是一步均匀分配，即先按类别概率抽类别，再在该类别桶内均匀抽一句，因此单句概率等于其所属类别概率除以该类句数。实现细节是若一句含多个有效事件，取目标顺序中第一个有效标签作为采样键，但目标序列本身保持完整不变。论文报告只有 1413 句含多个不同有效标签，占 26648 句的百分之 5.30，因此该近似对整体分布影响有限。

\[q_{\alpha}(i)=\frac{p_{c_{i}}(\alpha)}{n_{c_{i}}}.\]

**平方根采样 × 均匀类别采样：** 平方根采样负责适度压平分布，分工是用类别频次的 0.5 次方计算类别概率，均匀类别采样负责强力抬升尾部，分工是对每个已出现类别赋予相等概率，二者搭配的理由是先用温和分布学好整体声学与词序列，再用强平衡去补尾部，组合意义是形成先缓后陡的 2 阶段课程。

2 阶段拼接的操作是第一阶段用平方根采样全参数微调 Qwen3-ASR 1.7B，第二阶段从第一阶段 checkpoint 恢复并继续用均匀类别采样微调，骨干、目标、损失与格式全程不变。这种设计把适度平衡学到的整体表示留给强平衡阶段继续调整，但也带来遗忘头部知识的风险，后文结果正好观察到这种权衡。

### 训练与数据如何落地：数据量、超参数与推理是什么？

训练节承担交代可复现的构造与优化条件。数据侧共 8 个来源，总计 26648 句、70.48 小时，覆盖中英文，最大来源是非言语 38K，其次是合成与情感类中文数据，最小的是英文评测类数据。归一时只保留可映射样本，不可靠映射直接排除。划分上本地验证集固定为 214 句，其中中文 147 句、英文 67 句，覆盖全部 16 类，分别来自非言语 38K、MNV-17 与 Burp 数据。优化侧用 bfloat16 精度、全局批量 64、学习率 2 乘 10 的负 5 次方线性衰减、预热比例 0.02、梯度裁剪阈值 1.0，主系统 2 阶段各 5 轮，推理用官方实现贪心解码。

下表提出的问题是归一后训练集到底由哪些来源构成，公平条件是同一 16 类目标空间与同一保留整句规则，表中数字用于核对复现时的数据规模是否一致。

| Dataset | Lang. | Samples | Hours |
| --- | --- | --- | --- |
| NonverbalSpeech38K [7] | ZH / EN | 9,597 | 31.88 |
| MNV-17 [9] | ZH | 1,497 | 4.26 |
| Burp_data11 1 https://huggingface.co/datasets/NVVSpeech-Challenge/Burp_data [15] | ZH / EN | 1,425 | 2.11 |
| NonverbalTTS [21] | EN | 3,518 | 9.14 |
| SMIIP-NV [8] | ZH | 3,008 | 6.06 |
| SynParaSpeech [22] | ZH | 4,000 | 5.51 |
| Emilia-NV [23] | ZH | 3,011 | 10.02 |
| WESR-Bench [13] | EN | 592 | 1.50 |
| Total | ZH / EN | 26,648 | 70.48 |

上表显示总量与各来源分工，非言语 38K 提供最多时长，中文表演与合成数据补充尾部事件，英文数据维持双语能力。复现时应先对齐这张构成表，再谈采样，否则分布差异会淹没采样效果。需要说明的缺项是论文未报告训练硬件型号与耗时，也未报告是否打乱跨数据集顺序的具体随机种子，因此严格逐步复现需要自行固定种子。

下表进一步把优化条件收敛到可执行的配置，比较问题是 2 阶段各跑多久、以多大批量与多大学习率更新，指标方向是训练轮数与批量越大则尾部曝光越多，但过拟合风险也上升。

| 阶段 | 采样分布 | 训练轮数 | 全局批量 | 学习率与调度 | 精度与优化约束 |
| --- | --- | --- | --- | --- | --- |
| 第一阶段 | 平方根类别采样 | 5 轮 | 64 | 2 × 10^{-5} 线性衰减 | bfloat16，预热比例 0.02，梯度裁剪 1.0 |
| 第二阶段 | 均匀类别采样 | 5 轮 | 64 | 2 × 10^{-5} 线性衰减 | bfloat16，预热比例 0.02，梯度裁剪 1.0 |
| 对照 | 平方根采样 | 10 轮 | 64 | 2 × 10^{-5} 线性衰减 | 与 2 阶段总轮数对齐 |

上表的主要收益是把总轮数对齐，10 轮平方根对照与 5 加 5 轮 2 阶段具有相同总轮数，因此后文性能差异可归因于采样调度而非训练量。代价是全参数微调 1.7B 模型成本高于冻结或适配器方案，论文未给出具体耗时，复现需按自身预算评估。关于 Burp_data 链接，本次资源状态为暂时不可达，因此不能写已公开可下载，只能写本次未能确认可达，复现时需自行确认该来源是否恢复。

### 评测如何组织：测什么、与谁比、指标方向是什么？

实验按问题组织，测 3 类问题。第一是采样强度问题，在本地 214 句上比较自然采样、平方根采样与 2 个阶段，条件是同一骨干与同一官方评测器。第二是官方排名问题，通过提交在初赛与决赛测试集上打分。第三是泛化问题，在 140 句 MNV-17 兼容普通话子集上看未见说话人表现。比较对象包括官方 Whisper 基线、自然采样、平方根采样与 2 阶段系统，其中 10 轮平方根用于排除总轮数干扰。

指标方向是验证分与 F1 越高越好，多事件归一化标签距离、联合错误、字错率与词错率越低越好。中文用字错率、英文用词错率，MNV-17 侧用联合字错率与要求整串完全一致的非言语准确率。

**联合转写错误 × 多事件归一化标签距离：** 联合转写错误负责衡量带标签整句的总体偏离，多事件归一化标签距离负责衡量事件标签序列的位置与类别偏离，二者搭配的原因是前者混合了词错和事件错，后者更聚焦事件结构，组合意义是可以区分词写对但事件放错与词本身写错这两种失败。

本地划分的细节值得复述，因为它是所有消融的锚点。214 句中 108 句来自非言语 38K、86 句来自 MNV-17、20 句来自 Burp 数据，中英文比例约为 147 比 67，且覆盖 16 类。MNV-17 子集的 140 句限定为赛道兼容的普通话句，用于测未见说话人。论文未报告多次随机种子的方差，也未做显著性检验，因此小幅差异应视为支持性而非决定性证据。

### 主结果说明什么：本地最优与官方最优为何不一致？

主结果的核心矛盾是本地与官方的最优不一致。本地验证上第一阶段平方根最好，第二阶段反而下降，但官方提交上第二阶段最好。理解时要同时核对数据集、阶段、指标与聚合对象，不能只记单个分数。下表先给出官方口径的必要基线与两个实际可运行策略，比较问题是在官方测试集上相对基线提升多少，公平条件是同一赛道评测器，指标方向是官方分数越高越好。

| System | Challenge phase | Official score |
| --- | --- | --- |
| Official Whisper baseline | Final | 33.32 |
| Qwen3-ASR 1.7B, SQRT | Preliminary | 52.61 |
| Qwen3-ASR 1.7B, two-stage | Final | 63.86 |

上表显示官方 Whisper 基线决赛分为 33.32，平方根单阶段初赛分为 52.61，2 阶段决赛分为 63.86。收益是相对基线提升约 30 分并获得第 4 名，代价是初赛与决赛阶段不同，直接跨阶段比较需谨慎，因为测试集可能不同。论文明确指出 2 阶段是其最高官方提交分，但单阶段平方根在本地更高，这构成后文要解释的反证。

下表把本地与官方放在同一视野，比较问题是同一模型在两种分布下是否一致，条件是同一骨干与同一采样定义，指标同时保留本地验证分与官方分。

| 系统 | 本地验证分数 | 官方阶段 | 官方分数 | 一致性含义 |
| --- | --- | --- | --- | --- |
| 平方根采样单阶段 | 66.25 | Preliminary | 52.61 | 本地最高但官方较低 |
| 2 阶段平方根加均匀 | 58.91 | Final | 63.86 | 本地回落但官方最高 |
| 采样指数 0.5 | 66.25 | 本地验证 | 60.69 对应指数 0.75 最低 | 适度平衡优于过强与过弱 |

上表的主要收益是揭示分布敏感性，适度再平衡在本地最好，强平衡在官方最好。代价是若只看本地会误选单阶段，若只看官方会忽视本地多数类别的下降。未胜出项是自然采样与 10 轮平方根，它们在本地都不如 5 轮平方根，说明单纯增加轮数不能替代调度设计。

**本地验证集 × 官方测试集：** 本地验证集负责在固定 214 句上做采样强度选择，分工是快速比较不同指数与训练轮数，官方测试集负责给出挑战排名依据，分工是在不可见分布上打分，二者搭配的原因是前者可控可重复，后者权威但不可剖析，组合意义是本文出现了两者不一致，提示选择标准依赖评测分布。

### 再平衡多强才合适：指数扫描与类别变化支持什么？

消融回答采样指数与训练长度的影响。首先看指数扫描，横轴从均匀到自然，纵轴为本地验证分，曲线先升后降再略升，峰值在 0.5 处，谷值在 0.75 处。这支持适度平衡优于两端的判断，但也显示 0.75 的骤降不是单调变化，论文未解释该点的特殊性，应视为待验证现象而非普遍规律。

在解读下图之前，需要确认坐标与对象以避免误读：纵轴是分数越高越好，不是误差，因此向下才是变差，横轴是指数不是轮数，每个点是同骨干同优化下的单阶段结果，时间范围是同一本地验证集。

> **看图路径：** 1. 横轴从均匀到自然读取采样指数，纵轴读取本地验证分数；2. 找到 0.5 处的最高点 66.25，再看 0.75 处跌至最低点 60.69；3. 比较 0.0 与 1.0 两端，确认两端都不如中间的 0.5

[![原论文 Figure 3：Local-validation score under different rebalancing strengths, indexed by \\alpha, under the same…](https://arxiv.org/html/2609.23462v1/Figure_3_sampling_score.svg)](https://arxiv.org/html/2609.23462v1/Figure_3_sampling_score.svg)

*论文图 3。原论文 Figure 3:：“Local-validation score under different rebalancing strengths, indexed by \alpha, under the same backbone and optimization recipe.”。*

上图可见 0.0 均匀起点约为 63.5，0.25 升至 65.15，0.5 达到 66.25，随后 0.75 跌至 60.69，1.0 自然回到 62.33。这种非单调形状支持保留部分原始不平衡可能有益，但不能推广为所有数据集都以 0.5 为最优。像素可辨的数值应以正文报告的 66.25 与 60.69 为准，其余小数仅作趋势参考。

其次看分布形状，下图用对数径向轴展示原始与平方根重采样后的类别占比，比较问题是尾部是否被抬起而头部是否被压低。

在阅读下图之前，先按图例确认深色为采样后、浅色为原始分布，圆周为类别名，径向为对数占比，时间范围是训练集整体，不是单句示例，同色不必然同值，需逐类别比较内外两条轮廓。

> **看图路径：** 1. 先看图例区分深色为采样后、浅色为原始分布，再沿圆周找到各类别名称；2. 观察径向刻度为对数变换，比较尾部类别向外扩张的幅度；3. 注意 sigh 等头部尖峰在采样后是否被压低，以判断再平衡方向

[![原论文 Figure 2：NVV-category occurrence shares in the original training set and after square-root resampling.](https://arxiv.org/html/2609.23462v1/Figure_2_label_shares.svg)](https://arxiv.org/html/2609.23462v1/Figure_2_label_shares.svg)

*论文图 2。原论文 Figure 2:：“NVV-category occurrence shares in the original training set and after square-root resampling.”。*

上图显示采样后轮廓在哈欠、哼唱等尾部向外扩张，在叹息等头部向内收缩，证实平方根确实平滑了长尾。对数轴放大了小比例的变化，阅读时不应把视觉面积直接当作样本数。

最后看逐类别变化，论文报告哈欠 F1 从 0.09 升到 0.39，清嗓从 0.50 升到 0.57，但呼吸从 0.63 掉到 0.32，嘶声等也有 2 位数下降。这支持 2 阶段改变了类别间平衡而非均匀提升。相关细节见下表，比较问题是哪些类别受益、哪些受损，条件是同一本地验证引用次数，指标方向是 F1 越高越好。

| 类别 | 平方根阶段 F1 | 2 个阶段 F1 | 变化方向 | 证据含义 |
| --- | --- | --- | --- | --- |
| yawn | 0.09 | 0.39 | 上升 | 尾部改善最清晰 |
| throat clearing | 0.50 | 0.57 | 上升 | 小幅改善 |
| breath | 0.63 | 0.32 | 下降 | 头部或易混类别受损 |
| hiss 等多数类 | 0.83 等 | 0.56 等 | 下降 | 非均匀提升的反例 |
| 评估子集 | 140 句普通话 | 140 句普通话 | 条件一致 | 泛化测试对象相同 |

上表的主要收益是给出未胜出项与负结果，避免只记哈欠改善而忽视多数类别下降。限制是本地每类引用仅 7 到 20 次，小样本下 F1 波动大，且 MNV-17 侧 2 阶段联合字错率更低但事件准确率更低，说明词与事件存在权衡。

### 边界在哪里：哪些结论不能推广？

论文直接报告的是在固定骨干与固定本地划分下，平方根单阶段本地最优、2 阶段官方最优。有限解释是适度再平衡有助于联合任务，强平衡可能以牺牲多数类别为代价换取尾部与官方分布的增益。未验证推测是该调度在更大更多样数据上依然有效，原文仅列为未来工作，应表述为可能或待验证。缺失证据不是技术错误，但复现时要补三项验证：更换随机种子与划分后峰值是否仍在 0.5 附近，0.75 低谷是否可重复，以及官方与本地分布差异的具体来源。

相关性不等于因果，不能把官方提升完全归因于尾部改善，也可能是决赛集头部构成不同。论文未测量延迟、推理开销与误报率，因此不能承诺该方法改善实时性或降低误报。总体趋势不等于每类每步都成立，哈欠改善不能代表所有尾部。

### 复现先做什么：按什么顺序核对才能对齐？

复现建议按学习依赖排序。先对齐标签映射表，把每个源标签的精确、近似与未映射 3 类判断落到代码，剔除不可靠句并保留多事件句的整句顺序，再核对总量 26648 句与 70.48 小时是否一致。然后固定 Qwen3-ASR 1.7B 全参数、贪心解码与官方评测器，跑自然采样 5 轮得到本地基线，再跑平方根 5 轮核对 66.25 附近，最后跑 5 加 5 轮 2 阶段核对本地回落与官方提升是否同向。采样实现要先按类别概率抽类再在桶内均匀抽句，多事件句用首个有效标签作键但不截断目标。

超参数保留批量 64、学习率 2 乘 10 的负 5 次方线性衰减、预热 0.02、裁剪 1.0 与 bfloat16。代码与权重方面，原文未声明本系统代码开源，只能区分论文引用了公开数据集与公开骨干，不等于本流水线可一键运行，Burp_data 本次未能确认可达，需先解决该来源缺失再谈对齐。

### 何时值得尝试：给新人的行动清单是什么？

当你的数据也是多源合并且长尾明显，又希望不动模型只调数据时，这套做法值得尝试。先做归一与过滤，再扫采样指数而不要直接上均匀，本地留一个固定验证集并同时记录词错与事件错，最后用未见说话人子集检验泛化。若本地最优与线上最优不一致，不要急于否定本地划分，而应检查两端分布的类别构成与语言比例。本文的特有误解是把均匀微调当成全面提升，实际它是重排类别优先级，哈欠与清嗓受益的同时呼吸等多类下降。

另一个误解是把 10 轮训练当成等价对照的全部，实际上它只对齐了轮数，没有对齐采样调度。记住平方根最优是该划分下的实测结论，不是普适常数，换数据要重扫。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.23462)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-23/)
