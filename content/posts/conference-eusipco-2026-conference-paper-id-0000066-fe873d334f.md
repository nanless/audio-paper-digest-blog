---
title: "MUKA: MULTI KERNEL AUDIO ADAPTATION OF AUDIO-LANGUAGE MODELS"
date: 2026-09-13
draft: false
description: "针对音频文本对少、少样本适配易过拟合的问题，MUKA 用 Pengi 细粒度相似与 CLAP 全局相似的乘积核做免训练的核岭回归适配，在 11 个音频数据集 16 样本设置下平均准确率达到 80.90%，但在部分数据集上仍不敌线性探测且依赖超参数迁移。"
tags: ["模型融合", "音频大模型", "少样本", "音频分类"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000066"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000066.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3e604a20df975e89e71e4b6782f142b0e6d961a604f465787cb4dca5b541f883"
paper_digest_api_reader_plan_sha256: "2e6c235c9016bb1b186b00ecd36e8c16dd51d647a10d0e3fd0bb4ad6a2bf909c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d21e2880b817bd5798da76ee2512ca6a0ef6ff35739941dc14aecb158f9e2d60"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8e282380b56a7e3786e399bda98d2893e1d57e94b7e9adef1d210740366e3c5f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8a173b286ef7a9a1713f94c46d655c1f4799fa0b7ebff054adf349474a780050"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "20779c8ca741b80433fa116acd9e4ac337f98d79748cdf21e046b674c1d4df42"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.model-combination","label":"模型融合"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"setting","id":"setting.few-shot","label":"少样本"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_task: "音频分类"
paper_digest_primary_method: "模型融合"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 少样本下音频语言模型适配：用乘积核同时对齐细节与全局语义

> 英文题目：*MUKA: MULTI KERNEL AUDIO ADAPTATION OF AUDIO-LANGUAGE MODELS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000066`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000066.pdf)

标签：#模型融合 #音频大模型 #少样本 #音频分类

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Bensaid, Reda：机构信息未能从会议 PDF 纯文本可靠映射
- Ouasfi, Amine：机构信息未能从会议 PDF 纯文本可靠映射
- Bendou, Yassir：机构信息未能从会议 PDF 纯文本可靠映射
- Moummad, Ilyass：机构信息未能从会议 PDF 纯文本可靠映射
- Gripon, Vincent：机构信息未能从会议 PDF 纯文本可靠映射
- Leduc-Primeau, François：机构信息未能从会议 PDF 纯文本可靠映射
- Boukhayma, Adnane：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音频-语言模型（Audio-Language Models, ALMs）在少样本下适配困难，输入为每类16个带标签音频与类别文本，输出为测试音频的闭集类别，难点在于音频-文本模态鸿沟大而可用音频-文本配对远少于视觉领域。MUKA冻结Pengi提取音频嵌入`x`与文本分类矩阵`W_Pengi`并计算零样本对数`x`转置乘`W_Pengi`作为先验，再并行提取Pengi细粒度嵌入与CLAP全局语义嵌入并分别构造径向基函数（Radial Basis Function, RBF）核，最后将两路核逐对相乘形成乘积核并代入近端核岭回归的闭式缓存解得到适配后分类器。该乘积机制与单特征缓存或提示学习不同，它要求两空间同时同意才算相似，从而抑制细粒度伪相关并保留全局语义。在11个数据集的16样本评测中，MUKA平均准确率达到80.90%，超越最强训练基线PaLM的76.58%和线性探测的75.19%。该结论限于以Pengi为主干的英文提示`This is a recording of [CLASS]`与闭集分类任务，未验证开放词汇检索、跨语言或强噪声下的外推能力。原文未披露训练、推理或部署成本，仅说明实验在NVIDIA RTX 3090上进行。

## 🔗 开源与复现资源

预印本/扩展版链接未在会议页展示；会议版来源见页首官方记录与 PDF。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要保留什么？

本文解读的输入是论文原文证据与本次收到的官方原图像素，目标是让刚进入语音音乐音频领域的研究生能够核对实验条件并复述方法。必须保留的信息包括任务定义、所用编码器与冻结方式、少样本采样数、比较对象是否可运行、指标方向与聚合方式，以及关键数字的适用条件。输出按学习依赖展开，先讲任务与相关路线，再讲方法全景与组件计算，然后讲构造与推理过程，最后讲实验条件、结果与复现边界。

论文实际研究的任务是音频语言模型的大规模预训练模型在少样本分类下的适配。具体动作是给定每个类别只有少量标注音频，例如每类 16 个随机样本，要求在测试集上做分类，指标是准确率，数值越高越好。音频领域与图像领域的区别在于可用的音频文本对数量少得多，论文提到对比学习模型分别用了 128k、660k 和 4.6M 量级的数据，而图像文本可以从网页收集数十亿样本。因此音频与文本编码器之间的模态间隙更大，直接做零样本分类效果有限。

举例来说，如果把环境声分类当作教学例子，模型需要把一段狗叫的波形和狗叫的文字描述映射到相近位置，但由于训练对少，这种映射在细粒度乐器或情绪任务上容易出错。本文只讲论文实际研究的分类适配任务，教学例子明确标为例子，不添加无来源的效果数值。

### 已有哪些路线，它们在相同输入和监督下做了什么？

相关工作可以按同输入、同目标、同监督和同运行阶段来对照。第一条路线是多模态预训练模型。对比学习路线以 CLIP 和 CLAP 为代表，做法是最大化配对文本图像或文本音频嵌入的相似度，同时最小化非配对的相似度，从而得到可做零样本分类的共享空间。AudioCLIP 把该思想扩展到图像文本音频。自回归路线以 Flamingo、Audio Flamingo、Frozen 和 Pengi 为代表，做法是把图像或音频编码器映射到冻结的文本解码器，用问答格式建模更长的上下文依赖。

论文指出 Pengi 在 CLAP 基础上做基于指令的微调，因此能捕捉细粒度上下文相关细节，而 CLAP 更强调宽泛的声学语义表示。第二条路线是少样本适配。视觉语言适配分为提示学习和基于嵌入的高效方法。提示学习以 CoOp 为代表，学习面向语言编码器的任务相关文本提示，需要通过编码器反向传播，训练较慢。高效嵌入方法以 Tip-Adapter 为代表，用缓存机制做免训练的闭式适配，ProKeR 则从核视角重新审视缓存并加入全局近端正则。

音频语言适配跟随类似趋势，Treff-Adapter 把 Tip-Adapter 扩展为带交叉注意力线性模型的音频版本，提供免训练和微调两种变体，PaLM 在词嵌入空间做提示学习。论文报告的对照关系是 PaLM 相对零样本有提升但提示训练计算代价大，Treff-Adapter 高效但落后于更强的缓存方法。因此本文把视觉领域近期的免训练核方法迁移到音频，并把单核扩展为多核，这是与同阶段工作的直接区别。

### 少样本音频适配难在哪里，论文把问题形式化成什么？

难点在于训练数据少而编码器特性各异。如果只用指令微调得到的 Pengi 特征，它包含语义信息和大量细粒度细节，在少样本下这些细节可能引入虚假相关，损害分类。如果只用对比预训练得到的 CLAP 特征，它强调粗粒度全局语义，可能忽略重要细节。论文把少样本适配形式化为在函数空间做近端核岭回归，而不是只在输出空间做逐点正则。输入是一个测试音频样本的嵌入，输出是各类别的 logits。

监督来源是少样本支持集的独热标签向量和冻结零样本分类器的预测。约束是所有预训练权重保持冻结，只做参数高效的适配，不做全量微调。评估时每个类别从训练集随机选 16 个样本，整个测试集用于推理，多折数据集做交叉验证并报告平均准确率。除零样本外，所有方法用 3 个随机种子跑 3 次并报告平均值。论文还明确了超参数选择方式，先在 ESC-50 上为每种方法搜索最优超参数，再迁移到其余 10 个数据集。

这一安排决定了后续结果的可比性，也意味着超参数并非在每个数据集上单独最优。

### MUKA 整体走完一个样本要经过哪些步骤？

沿一个测试样本走完输入到输出，主路径可以分为 4 步。第一步是表示提取，同一段音频分别经过 Pengi 音频编码器和 CLAP 音频编码器得到两种嵌入，类别名称经过文本编码器得到零样本分类权重。第二步是零样本预测，用 Pengi 音频特征与 Pengi 文本权重的内积得到初始 logits，公式证据中记为音频向量转置乘以文本权重矩阵。第三步是相似度计算，对支持集每个样本分别在 Pengi 空间和 CLAP 空间计算核相似，再把两个相似度相乘得到乘积核。

直觉是只有两个空间都认为相似才给出高分，从而同时对齐局部细节与全局语义。第 4 步是残差修正，用支持集核矩阵和支持集标签与零样本预测之差求解系数，再把测试样本与支持集的核向量加权求和，加回到零样本预测上得到最终预测。整个过程不需要额外训练，只需要计算核矩阵求逆和矩阵乘法。论文强调乘积核仍然是合法正定核，因此保留核方法的理论保证，同时增强了 ProKeR 的表示能力。计算资源方面，论文报告所有实验在一块 NVIDIA RTX 3090 上进行，以保证一致性。

### 表示、核与预测器各负责什么，如何组合？

本节先解释术语，首次出现先用白话再给英文名，后文简称固定。零样本分类器指直接用预训练对齐做分类的基线，不看任何少样本。缓存指把支持集特征与标签存下来供查询的结构。核函数指定义样本间相似度的函数，再生核希尔伯特空间指由核定义的函数空间，岭回归指带平方正则的最小二乘回归。组合机制需要紧接着说明分工。

**对比预训练 × 指令微调：** 对比预训练指 CLAP 那样把配对的音频文本拉近、非配对推远，得到强调全局声学语义的表示；指令微调指 Pengi 那样在问答格式下训练音频编码器到文本解码器的映射，保留上下文相关的细粒度细节。二者搭配的原因是单一空间要么丢细节要么引入虚假相关，MUKA 用乘积核要求两个空间同时相似才算相似，从而实现层次化的相似度量。

本段讲对比预训练与指令微调的分工与搭配，乘积核是其计算落点。

**缓存适配 × 核岭回归：** 缓存适配指把少样本支持集特征和标签存下来，测试时按相似度加权投票并叠加零样本预测；核岭回归指在再生核希尔伯特空间中求解带全局正则的最小二乘函数。二者搭配的原因是缓存方法可被重新解释为核密度估计下的核回归，MUKA 沿用 ProKeR 的近端核岭回归形式，把逐点正则换成函数空间正则，从而避免小样本下适配器过拟合。

本段讲缓存适配与核岭回归的分工与搭配，ProKeR 形式是其计算落点。

**零样本预测器 × 残差核项：** 零样本预测器指用冻结文本权重与音频特征内积得到的初始 logits，承担先验作用；残差核项指用支持集核矩阵求解系数 gamma 后对测试样本的加权修正，承担纠偏作用。二者搭配的原因是先验保留大模型通用能力，残差只拟合先验在支持集上的误差，MUKA 最终预测是二者相加，兼顾稳定与适应。

本段讲零样本预测器与残差核项的分工与搭配，相加得到最终输出。

**Pengi 核 × CLAP 核：** Pengi 核指在 Pengi 嵌入空间计算的局部相似，负责捕捉细粒度上下文细节；CLAP 核指在 CLAP 嵌入空间计算的全局相似，负责捕捉粗粒度声学语义。二者搭配的原因是二者互补且乘积仍是合法正定核，MUKA 把二者相乘，只有两边都认为相似才给出高相似，从而提高判别性并保留核方法理论保证。

本段讲 Pengi 核与 CLAP 核的分工与搭配，相乘得到判别性更强的相似度。论文还提到核组合对应层次化相似结构，已有文献表明这种组合能发现更结构化的回归形式。需要提醒的是，原文未给出核的具体带宽、正则系数 lambda、残差权重 alpha 和 beta 的数值，只说明在 ESC-50 上搜索后迁移，因此复现时必须保留这一信息条件，不能从模型名称推定实现。

### 有没有训练阶段，实际计算与搜索过程是什么？

本研究没有训练新的编码器权重，这一点必须明确说明。论文在实验设置中写明使用预训练 Pengi 模型作为音频语言模型，模型权重在所有适配方法中保持冻结，以确保关注参数高效适配而非全量微调。因此不存在编码器梯度更新、优化器迭代或权重重置时机的问题。实际发生的计算分为两类。第一类是免训练适配的闭式计算，包括提取冻结嵌入、构造支持集核矩阵、求解线性方程组得到系数、以及对测试样本做核加权。

原文给出的系数形式包含单位矩阵加正则系数乘以支持集核矩阵后的逆，再乘以标签与零样本预测之差。第二类是超参数搜索与评估流程，在 ESC-50 上为每种方法搜索最优超参数，然后迁移到其余 10 个数据集。提示学习基线如 CoOp 和 CoCoOp 在类别名前放置 16 个上下文词元，线性探测等训练基线的结果直接引用 PaLM 论文报告值。论文未报告搜索网格、学习率、训练轮数等细节，这属于具体缺项，复现时不能自行假设。

对于 MUKA 本身，论文明确表示无需额外训练，这是其效率主张的来源，但不能把免训练等同于确定性求解，因为少样本采样随机性和超参数迁移仍会带来波动。

### 在哪些数据与协议下测量，与谁比才算公平？

测量的问题是少样本音频分类的准确率，指标方向是越高越好。数据集覆盖 7 类任务共 11 个数据集。乐器分类用 Beijing-Opera 4 个打击乐器和 NS-Instruments 10 类单音音符。声音事件分类用 ESC50 50 类环境声、ESC50-Actions 10 类人体非语音声和 UrbanSound8K 10 类城市噪声。情绪识别用 CREMA-D 6 类表演情绪和 RAVDESS 8 类情绪。

vocal 声音用 VocalSound 6 类非语音发声。监控声用 SESA 4 类监控类别。声学场景用 TUT2017 15 类环境。音乐分析用 GT-Music-Genre 10 类流派。论文说明与 PaLM 使用相同数据集、官方划分和预处理管线，对 Beijing-Opera、ESC50、ESC50-Actions、UrbanSound8K 和 TUT2017 做交叉验证并报告平均准确率。

采样协议是每类随机选 16 个训练样本，整个测试集用于推理。除零样本使用默认文本模板外，其余方法跑 3 个随机种子取平均。零样本模板为英文句式，含义是这是一段某种声音的录音。比较对象包括训练式方法 CoOp、CoCoOp、PaLM 和线性探测，以及免训练方法零样本和 Treff-Adapter。论文说明 CoOp、CoCoOp 和 PaLM 结果直接引用 PaLM 论文，以保证与已报告值一致。

音频与文本编码器采用 Pengi 方案，音频编码器基于 CLAP 音频编码器并结合分层 Transformer 结构。资源状态方面，本次收到的第三方链接均为可达，但这只是文献链接可达，不代表代码或权重可运行，论文本身未给出代码开源声明，因此不能写当前可用或已公开。

### 主结果在相同 16 样本下显示了什么，谁没有胜出？

比较的问题是免训练方法之间谁更好，以及免训练最强者能否与训练式方法竞争。公平条件是同为 16 样本少样本、同测试集、同准确率指标，超参数均从 ESC-50 迁移而来。下表整理主结果中的部分数据集与平均值，指标为准确率，数值保留原文精度，表头单位与裸值按原文处理。

| 数据集与聚合 | 指标 | CoOp | PaLM | 线性探测 | Treff-Adapter | MUKA |
| --- | --- | --- | --- | --- | --- | --- |
| ESC50 | 准确率 | 93.82 | 95.93 | 96.00 | 94.48 | 98.03 |
| 平均 11 个数据集 | 准确率 | 71.14 | 76.58 | 75.19 | 65.74 | 80.90 |

表后解释需要说明主要收益与具体代价。论文报告 MUKA 平均准确率达到 80.90%，高于 PaLM 的 76.58%、线性探测的 75.19% 和 Treff-Adapter 的 65.74%，在免训练方法中显著领先 Treff-Adapter，并在多个场景超越训练式适配器。支持这一判断的细节是 MUKA 在 ESC50 上达到 98.03%，在多个数据集上同时领先。但限制同样明确，未胜出项真实存在。原文表格显示 Beijing-Opera 上线性探测达到 100.00% 而 MUKA 为 98.30%，ESC50-Actions 上线性探测为 98.83% 而 MUKA 为 99.00% 则反超，说明总体趋势不等于每组都成立。

零样本基线平均仅 39.69%，说明少样本适配确有必要，但也说明 MUKA 的提升依赖于支持集质量。此外 CoOp 等结果为引用值而非本机复跑，跨论文比较时需注意实现与划分是否完全一致。

以下导读段引出本次实际收到像素的 ESC-50 样本数曲线，该图展示不同方法随样本数增加的分类准确率变化，横轴为样本数 1 到 16，纵轴为准确率百分比，包含零样本、MUKA、Treff-Adapter、PaLM 和线性探测 5 条线。

> **看图路径：** 1. 先看横轴样本数从 1 到 16 与纵轴准确率的整体上升趋势；2. 再对比 MUKA 橙色星形线与线性探测蓝色圆点线在 1 到 4 样本段的位置高低；3. 接着观察 PaLM 深红色菱形线在 1 样本处的起点与后续爬升速度；4. 最后确认零样本蓝色虚线作为与样本数无关的水平基线

[![原论文 Figure 1：illustrates the impact of different adaptation meth- ods on classification as the number of shots…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/87f3b54d8a11/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/87f3b54d8a11/figure-1.png)

*论文图 1。原论文 Figure 1：“illustrates the impact of different adaptation meth- ods on classification as the number of shots increases on ESC- 50.”。*

该图可见内容支持正文描述，MUKA 橙色星形线在 1 样本时已处于约 94% 附近，4 样本后超过 97% 并趋于平坦，线性探测蓝色圆点线紧随其后，PaLM 深红色菱形线从 1 样本约 66% 快速爬升，Treff-Adapter 浅色星形线起点最低约 54% 且爬升最慢，零样本蓝色虚线保持在约 49% 附近的水平基线。这支持高效适配在极少样本下更稳定的判断，但像素不能精确辨别每个点的 exact 数值，原文补充说明已明确归因，因此不硬写逐点数值。末步 16 样本时多条线收敛到相近高位，不能把末步结果推广为全程等价，也不能把曲线向上直接等同于训练成本更低，延迟与成本原文未测量。

### 换掉零样本预测器或残差特征空间会发生什么？

消融要回答的问题是收益来自零样本先验还是核空间选择。比较条件是同一评估流程下只更换零样本预测器来源与残差核计算空间，指标仍为平均准确率。下表整理论文消融的 4 种组合，数值保留原文 2 位小数。

| 配置 | 零样本预测器 | 残差特征空间 | 平均准确率 | 对比对象 |
| --- | --- | --- | --- | --- |
| (a) | Pengi | Pengi | 79.48 | 单一空间基线 |
| (b) | CLAP | CLAP | 80.29 | 单一空间基线 |
| (c) | Pengi | CLAP | 80.67 | 混合空间 |
| (d) | Pengi | Pengi 乘 CLAP | 80.90 | 完整 MUKA |

表后解释需要结合机制与代价。论文报告仅用 Pengi 做零样本与核计算为 79.48%，仅用 CLAP 为 80.29%，用 Pengi 做零样本而在 CLAP 空间算核达到 80.67%，完整乘积核达到 80.90%。这支持局部细节与全局语义互补的解释，也支持乘积核比单空间更具判别性的判断。但增量从 80.67% 到 80.90% 较小，说明大部分收益可能来自引入 CLAP 空间本身，而非乘积形式，乘积的额外作用待更多数据集验证。未胜出项是纯 Pengi 配置，它在平均值上最低，符合论文关于细粒度特征在少样本下引入虚假相关的分析。限制是消融只报告平均值，未给出每数据集方差与统计显著性，也未测量核矩阵求逆带来的推理开销，因此不能承诺延迟改善。

### 哪些边界没有测，哪些推测还不能当结论？

首先区分论文直接报告、有限解释与未验证推测。直接报告的是 11 个数据集 16 样本下的准确率对比与消融平均值。有限解释的是乘积核对应层次化相似结构的直觉，论文引用了核组合文献作为支持，但并未在本任务上证明层次结构必然存在，因此用支持而不用证明来表达。

未验证推测包括把效率主张推广到延迟、内存或实际部署成本，原文未测量误判率、延迟或成本，只报告在一块 3090 上运行以保证一致，没有给出训练时间、推理帧率或参数量，因此不能承诺这些量得到改善。其次是未评测边界。超参数从 ESC-50 迁移到其余 10 个数据集，迁移的有效性在声学差异大的音乐与情绪任务上可能下降，但原文未逐数据集报告敏感性。提示学习基线为引用值，不同随机种子与预处理差异可能影响公平性。

数据划分与聚合方面，多折数据集报告折平均，其余数据集的划分细节依赖 PaLM 原文管线，本文未重复给出逐折方差。最后是概念误解。免训练不等于无计算，仍需构造核矩阵并求逆。冻结参数不等于输出确定，少样本采样随机性仍会导致波动。乘积核保留理论保证不等于保证在所有数据上最优，它只保证核合法性，不保证泛化误差必然更低。

### 要复现 MUKA 先做什么，需要补哪项验证？

复现先做三件事。第一是按原文重建数据管线，采用与 PaLM 相同的 11 个数据集、官方划分与预处理，对多折数据集做交叉验证，每类随机采样 16 个样本并用 3 个随机种子取平均，零样本模板使用原文英文句式。第二是冻结 Pengi 与 CLAP 编码器权重，只实现核计算与系数求解，先在 ESC-50 上搜索正则与核带宽等超参数，再固定迁移到其余数据集，以复现论文的迁移条件。第三是先复现 4 个消融配置，确认从 79.48% 到 80.90% 的单调提升是否存在，再扩展到逐数据集表格，避免只看平均值。

还需补的验证包括报告逐数据集均值与标准差、记录核矩阵构造与推理时间、以及在 1、2、4、8 样本下的学习曲线，以检验图 3 趋势是否稳定。关键超参数与信息条件必须保留，包括支持集大小、种子数、编码器冻结状态和超参数迁移来源。关于可运行性，论文未提供代码与权重下载声明，本次收到的两个第三方文献链接状态为可达，但仅为参考文献链接，不能当作系统可运行的证据，因此复现时应明确标注缺项，不自行编造仓库地址。

### 何时值得尝试 MUKA，何时应选其他策略？

综合全文，何时值得尝试取决于约束。如果编码器必须冻结、标注每类只有几个到十几个、且希望 1 次实现适配多个音频任务，MUKA 的乘积核加核岭回归是值得优先复现的策略，因为它在平均值上同时超过免训练基线与部分训练式基线，且无需训练额外适配层。如果每类样本稍多且允许训练简单分类头，线性探测在 Beijing-Opera 等数据集上达到 100.00% 的结果表明它可能是更强的选择，不应因平均值而忽略它。

如果任务对提示可解释性或开放式生成有要求，则需要回到 Pengi 或 PaLM 等自回归路线，而不是只用分类准确率做决策。教学层面的收束是，MUKA 的核心动作不是发明新编码器，而是把已有互补表示用合法核运算组合，并用全局正则的闭式解做适配。记住这一动作，就能在核对实验条件后复述方法，并在新音频任务上判断是否值得付出核矩阵计算代价去换取少样本稳定性。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000066.pdf#page=2)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000066.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000066.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000066.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/6cfa5273e11c/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000066.pdf#page=3)

另有 5 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000066.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
